// WIUT OOP (5COSC018C) — WEEK 2 DATASET (150 PROGRESSIVE CHALLENGES)
// 10 Progressive Tiers covering Encapsulation, Access Modifiers, Getters/Setters,
// Constructors, Overloading, Guard Clauses, Computed Properties, Domain Methods,
// Immutability, and Composition.
window.OOP_CHALLENGES_W2 = [
  {
    "id": 1,
    "tier": 1,
    "tierName": "1-Bosqich: Inkapsulyatsiya Asoslari va Maydonlarni Yashirish",
    "sector": "1-15: Data Hiding & Accessors",
    "title": {
      "uz": "1. Uzum Market — Bitta Xususiy Maydonni Yashirish va getPrice()",
      "en": "1. Uzum Market — Single Private Field Hiding and getPrice()"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT 2-leksiyasida ta'kidlanganidek, inkapsulyatsiyaning birinchi qoidasi — ma'lumotlarni tashqi to'g'ridan-to'g'ri o'zgarishdan himoya qilishdir. 'Product' sinfida 'price' maydonini 'private' qilib e'lon qiling va unga faqat o'qish huquqini beruvchi 'public double getPrice()' metodini yozing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Product' klassini e'lon qiling va unga xususiy (private) double toifasidagi 'price' maydonini qo'shing.\n\n2. 'public Product(double price)' konstruktorini yozib, 'this' orqali 'price' maydoniga qiymat bering orqali qiymat bering.\n\n3. 'public double getPrice()' getter metodini yozing.\n\n4. 'Main' klassida 'public static void main(String[] args)' metodini oching.\n\n5. boshlang'ich parametrlar bilan ob'yektni yarating, konsolga 'Mahsulot narxi: ' + p.getPrice() + ' UZS' chiqaring.",
      "en": "📖 Real-World Scenario & Context\nEncapsulate a single private double price field and provide public getPrice() accessor.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'Product' with private double field 'price'.\n\n2. Write constructor 'public Product(double price)' assigning parameter via 'this'.\n\n3. Implement getter 'public double getPrice()' returning 'price'.\n\n4. Create class 'Main' with 'public static void main(String[] args)'.\n\n5. Instantiate object with starting values and print price."
    },
    "story": {
      "uz": "WIUT 2-leksiyasida ta'kidlanganidek, inkapsulyatsiyaning birinchi qoidasi — ma'lumotlarni tashqi to'g'ridan-to'g'ri o'zgarishdan himoya qilishdir. 'Product' sinfida 'price' maydonini 'private' qilib e'lon qiling va unga faqat o'qish huquqini beruvchi 'public double getPrice()' metodini yozing.",
      "en": "Encapsulate a single private double price field and provide public getPrice() accessor."
    },
    "steps": {
      "uz": [
        "'Product' klassini e'lon qiling va unga xususiy (private) double toifasidagi 'price' maydonini qo'shing.",
        "'public Product(double price)' konstruktorini yozib, 'this' orqali 'price' maydoniga qiymat bering orqali qiymat bering.",
        "'public double getPrice()' getter metodini yozing.",
        "'Main' klassida 'public static void main(String[] args)' metodini oching.",
        "boshlang'ich parametrlar bilan ob'yektni yarating, konsolga 'Mahsulot narxi: ' + p.getPrice() + ' UZS' chiqaring."
      ],
      "en": [
        "Declare class 'Product' with private double field 'price'.",
        "Write constructor 'public Product(double price)' assigning parameter via 'this'.",
        "Implement getter 'public double getPrice()' returning 'price'.",
        "Create class 'Main' with 'public static void main(String[] args)'.",
        "Instantiate object with starting values and print price."
      ]
    },
    "requirements": {
      "classes": [
        "Product",
        "Main"
      ],
      "privateFields": [
        "price"
      ],
      "methods": [
        "getPrice"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class Product {\n    // 1. Xususiy (private) maydonlarni e'lon qiling\n\n    // 2. Parametrli konstruktorni yozing\n\n    // 3. Talab qilingan getter metodlarini yarating\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product p = new Product(45000.0);\n        System.out.println(\"Mahsulot narxi: \" + p.getPrice() + \" UZS\");\n    }\n}",
    "solution": "class Product {\n    private double price;\n\n    public Product(double price) {\n        this.price = price;\n    }\n\n    public double getPrice() {\n        return this.price;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product p = new Product(45000.0);\n        System.out.println(\"Mahsulot narxi: \" + p.getPrice() + \" UZS\");\n    }\n}",
    "sampleData": [
      "Mahsulot narxi: 45000.0 UZS"
    ],
    "expectedOutput": "Mahsulot narxi: 45000.0 UZS",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya (Encapsulation) — obyektga yo'naltirilgan dasturlashning asosiy ustuni bo'lib, sinfning ichki holatini tashqi to'g'ridan-to'g'ri aralashuvlardan himoya qiladi. Ma'lumotlarga kirish faqat ommaviy getter va setterlar orqali amalga oshiriladi.",
      "theoryEn": "Encapsulation safeguards internal object state by making fields private and restricting mutations through controlled public accessors.",
      "cleanCode": "class Product {\n    private double price;\n\n    public Product(double price) {\n        this.price = price;\n    }\n\n    public double getPrice() {\n        return this.price;\n    }\n}",
      "breakdown": [
        "<code>private</code>: Maydon to'g'ridan-to'g'ri tashqaridan o'zgartirilishdan himoyalangan.",
        "<code>Product</code>: Toza inkapsulyatsiya va ma'lumotlar xavfsizligi kafolatlangan."
      ],
      "pitfalls": "Maydonlarni ochiq (public) qoldirmang; barcha xususiy atributlar 'private' bo'lishi shart.",
      "cw2Tip": "CW2 Order Applicationda barcha domen sinflari (Product, Customer, Order) qat'iy inkapsulyatsiyalangan bo'lishi lozim."
    }
  },
  {
    "id": 2,
    "tier": 1,
    "tierName": "1-Bosqich: Inkapsulyatsiya Asoslari va Maydonlarni Yashirish",
    "sector": "1-15: Data Hiding & Accessors",
    "title": {
      "uz": "2. Payme — Turli Toifadagi Maydonlar: Matn va Butun Son",
      "en": "2. Payme — Multi-Type Encapsulation with String and Integer"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nHamyon tizimida foydalanuvchi nomi ('username' String) va uning PIN urinishlari soni ('attempts' int) birgalikda himoyalanishi kerak. Ikkala maydonni private qilib, ularga mos alohida getterlarni taqdim eting.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'WalletAuth' klassini oching va unga xususiy (private) String toifasidagi 'username' hamda xususiy (private) int toifasidagi 'attempts' maydonlarini qo'shing.\n\n2. Ikkala maydonni to'ldiruvchi 'public WalletAuth(String username, int attempts)' konstruktorini yozing.\n\n3. Foydalanuvchi nomini o'qish uchun 'public String getUsername()' metodini taqdim eting.\n\n4. Urinishlar sonini o'qish uchun 'public int getAttempts()' getterini yozing.\n\n5. 'Main' metodida ob'yekt yaratib, konsolga foydalanuvchi va urinishlar sonini chiqaring.",
      "en": "📖 Real-World Scenario & Context\nEncapsulate multiple fields of different types (String and int) providing respective accessors.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'WalletAuth' with private String field 'username' and private int field 'attempts'.\n\n2. Implement constructor 'public WalletAuth(String username, int attempts)'.\n\n3. Write getter 'public String getUsername()'.\n\n4. Write getter 'public int getAttempts()'.\n\n5. In 'main', instantiate object and print user and attempts."
    },
    "story": {
      "uz": "Hamyon tizimida foydalanuvchi nomi ('username' String) va uning PIN urinishlari soni ('attempts' int) birgalikda himoyalanishi kerak. Ikkala maydonni private qilib, ularga mos alohida getterlarni taqdim eting.",
      "en": "Encapsulate multiple fields of different types (String and int) providing respective accessors."
    },
    "steps": {
      "uz": [
        "'WalletAuth' klassini oching va unga xususiy (private) String toifasidagi 'username' hamda xususiy (private) int toifasidagi 'attempts' maydonlarini qo'shing.",
        "Ikkala maydonni to'ldiruvchi 'public WalletAuth(String username, int attempts)' konstruktorini yozing.",
        "Foydalanuvchi nomini o'qish uchun 'public String getUsername()' metodini taqdim eting.",
        "Urinishlar sonini o'qish uchun 'public int getAttempts()' getterini yozing.",
        "'Main' metodida ob'yekt yaratib, konsolga foydalanuvchi va urinishlar sonini chiqaring."
      ],
      "en": [
        "Declare class 'WalletAuth' with private String field 'username' and private int field 'attempts'.",
        "Implement constructor 'public WalletAuth(String username, int attempts)'.",
        "Write getter 'public String getUsername()'.",
        "Write getter 'public int getAttempts()'.",
        "In 'main', instantiate object and print user and attempts."
      ]
    },
    "requirements": {
      "classes": [
        "WalletAuth",
        "Main"
      ],
      "privateFields": [
        "username",
        "attempts"
      ],
      "methods": [
        "getUsername",
        "getAttempts"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class WalletAuth {\n    // 1. Xususiy (private) maydonlarni e'lon qiling\n\n    // 2. Parametrli konstruktorni yozing\n\n    // 3. Talab qilingan getter metodlarini yarating\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WalletAuth auth = new WalletAuth(\"rustam_payme\", 3);\n        System.out.println(\"Foydalanuvchi: \" + auth.getUsername() + \" | Urinishlar: \" + auth.getAttempts());\n    }\n}",
    "solution": "class WalletAuth {\n    private String username;\n    private int attempts;\n\n    public WalletAuth(String username, int attempts) {\n        this.username = username;\n        this.attempts = attempts;\n    }\n\n    public String getUsername() {\n        return this.username;\n    }\n\n    public int getAttempts() {\n        return this.attempts;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WalletAuth auth = new WalletAuth(\"rustam_payme\", 3);\n        System.out.println(\"Foydalanuvchi: \" + auth.getUsername() + \" | Urinishlar: \" + auth.getAttempts());\n    }\n}",
    "sampleData": [
      "Foydalanuvchi: rustam_payme | Urinishlar: 3"
    ],
    "expectedOutput": "Foydalanuvchi: rustam_payme | Urinishlar: 3",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya (Encapsulation) — obyektga yo'naltirilgan dasturlashning asosiy ustuni bo'lib, sinfning ichki holatini tashqi to'g'ridan-to'g'ri aralashuvlardan himoya qiladi. Ma'lumotlarga kirish faqat ommaviy getter va setterlar orqali amalga oshiriladi.",
      "theoryEn": "Encapsulation safeguards internal object state by making fields private and restricting mutations through controlled public accessors.",
      "cleanCode": "class WalletAuth {\n    private String username;\n    private int attempts;\n\n    public WalletAuth(String username, int attempts) {\n        this.username = username;\n        this.attempts = attempts;\n    }\n\n    public String getUsername() {\n        return this.username;\n    }\n\n    public int getAttempts() {\n        return this.attempts;\n    }\n}",
      "breakdown": [
        "<code>private</code>: Maydon to'g'ridan-to'g'ri tashqaridan o'zgartirilishdan himoyalangan.",
        "<code>WalletAuth</code>: Toza inkapsulyatsiya va ma'lumotlar xavfsizligi kafolatlangan."
      ],
      "pitfalls": "Maydonlarni ochiq (public) qoldirmang; barcha xususiy atributlar 'private' bo'lishi shart.",
      "cw2Tip": "CW2 Order Applicationda barcha domen sinflari (Product, Customer, Order) qat'iy inkapsulyatsiyalangan bo'lishi lozim."
    }
  },
  {
    "id": 3,
    "tier": 1,
    "tierName": "1-Bosqich: Inkapsulyatsiya Asoslari va Maydonlarni Yashirish",
    "sector": "1-15: Data Hiding & Accessors",
    "title": {
      "uz": "3. Korzinka — Mantiqiy (boolean) Maydonlar uchun 'is' Prefiksi",
      "en": "3. Korzinka — Boolean Accessor Naming Standard using 'is' Prefix"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nJava va WIUT standartlariga binoan boolean toifasidagi xususiy maydonlar uchun getter metodi 'get' emas, balki 'is' bilan boshlanishi kerak (masalan, 'inStock' uchun 'isInStock()'). Korzinka ombori uchun ushbu qoidani qo'llang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'InventoryItem' klassini yarating: xususiy (private) String toifasidagi 'name' va xususiy (private) boolean toifasidagi 'inStock' maydonlari bilan.\n\n2. 'public InventoryItem(String name, boolean inStock)' konstruktorini yozing.\n\n3. 'public String getName()' getterini yozing.\n\n4. Boolean maydonlar uchun JavaBean standarti bo'yicha 'public boolean isInStock()' getterini yozing.\n\n5. 'Main' metodida boshlang'ich parametrlar bilan ob'yektini yaratib, tovar mavjudligini chiqaring.",
      "en": "📖 Real-World Scenario & Context\nFollow JavaBeans standard for boolean accessor naming using 'is' prefix instead of 'get'.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'InventoryItem' with private String field 'name' and private boolean field 'inStock'.\n\n2. Write constructor 'public InventoryItem(String name, boolean inStock)'.\n\n3. Write accessor 'public String getName()'.\n\n4. Follow JavaBean convention by creating 'public boolean isInStock()' for the boolean flag.\n\n5. Instantiate object with starting values and print stock status."
    },
    "story": {
      "uz": "Java va WIUT standartlariga binoan boolean toifasidagi xususiy maydonlar uchun getter metodi 'get' emas, balki 'is' bilan boshlanishi kerak (masalan, 'inStock' uchun 'isInStock()'). Korzinka ombori uchun ushbu qoidani qo'llang.",
      "en": "Follow JavaBeans standard for boolean accessor naming using 'is' prefix instead of 'get'."
    },
    "steps": {
      "uz": [
        "'InventoryItem' klassini yarating: xususiy (private) String toifasidagi 'name' va xususiy (private) boolean toifasidagi 'inStock' maydonlari bilan.",
        "'public InventoryItem(String name, boolean inStock)' konstruktorini yozing.",
        "'public String getName()' getterini yozing.",
        "Boolean maydonlar uchun JavaBean standarti bo'yicha 'public boolean isInStock()' getterini yozing.",
        "'Main' metodida boshlang'ich parametrlar bilan ob'yektini yaratib, tovar mavjudligini chiqaring."
      ],
      "en": [
        "Declare class 'InventoryItem' with private String field 'name' and private boolean field 'inStock'.",
        "Write constructor 'public InventoryItem(String name, boolean inStock)'.",
        "Write accessor 'public String getName()'.",
        "Follow JavaBean convention by creating 'public boolean isInStock()' for the boolean flag.",
        "Instantiate object with starting values and print stock status."
      ]
    },
    "requirements": {
      "classes": [
        "InventoryItem",
        "Main"
      ],
      "privateFields": [
        "name",
        "inStock"
      ],
      "methods": [
        "getName",
        "isInStock"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class InventoryItem {\n    // 1. Xususiy (private) maydonlarni e'lon qiling\n\n    // 2. Parametrli konstruktorni yozing\n\n    // 3. Talab qilingan getter metodlarini yarating\n}\n\nclass Main {\n    public static void main(String[] args) {\n        InventoryItem item = new InventoryItem(\"Sut\", true);\n        System.out.println(\"Tovar mavjudmi: \" + item.isInStock());\n    }\n}",
    "solution": "class InventoryItem {\n    private String name;\n    private boolean inStock;\n\n    public InventoryItem(String name, boolean inStock) {\n        this.name = name;\n        this.inStock = inStock;\n    }\n\n    public String getName() {\n        return this.name;\n    }\n\n    public boolean isInStock() {\n        return this.inStock;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        InventoryItem item = new InventoryItem(\"Sut\", true);\n        System.out.println(\"Tovar mavjudmi: \" + item.isInStock());\n    }\n}",
    "sampleData": [
      "Tovar mavjudmi: true"
    ],
    "expectedOutput": "Tovar mavjudmi: true",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya (Encapsulation) — obyektga yo'naltirilgan dasturlashning asosiy ustuni bo'lib, sinfning ichki holatini tashqi to'g'ridan-to'g'ri aralashuvlardan himoya qiladi. Ma'lumotlarga kirish faqat ommaviy getter va setterlar orqali amalga oshiriladi.",
      "theoryEn": "Encapsulation safeguards internal object state by making fields private and restricting mutations through controlled public accessors.",
      "cleanCode": "class InventoryItem {\n    private String name;\n    private boolean inStock;\n\n    public InventoryItem(String name, boolean inStock) {\n        this.name = name;\n        this.inStock = inStock;\n    }\n\n    public String getName() {\n        return this.name;\n    }\n\n    public boolean isInStock() {\n        return this.inStock;\n    }\n}",
      "breakdown": [
        "<code>private</code>: Maydon to'g'ridan-to'g'ri tashqaridan o'zgartirilishdan himoyalangan.",
        "<code>InventoryItem</code>: Toza inkapsulyatsiya va ma'lumotlar xavfsizligi kafolatlangan."
      ],
      "pitfalls": "Maydonlarni ochiq (public) qoldirmang; barcha xususiy atributlar 'private' bo'lishi shart.",
      "cw2Tip": "CW2 Order Applicationda barcha domen sinflari (Product, Customer, Order) qat'iy inkapsulyatsiyalangan bo'lishi lozim."
    }
  },
  {
    "id": 4,
    "tier": 1,
    "tierName": "1-Bosqich: Inkapsulyatsiya Asoslari va Maydonlarni Yashirish",
    "sector": "1-15: Data Hiding & Accessors",
    "title": {
      "uz": "4. Yandex Go — Faqat O'qiladigan (Read-Only) Marshrut Identifikatori",
      "en": "4. Yandex Go — Read-Only Trip Identifier via Controlled Access"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSafar boshlanganda unga bir martalik 'tripId' beriladi. Tizim xavfsizligi uchun bu ID tashqaridan aslo o'zgartirilmasligi, faqat o'qilishi kerak (Read-only property). Setter bermasdan faqat getter taqdim eting.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'TaxiTrip' klassini e'lon qiling va faqat o'qiladigan xususiy (private) String toifasidagi 'tripId' maydonini qo'shing.\n\n2. Parametrli 'public TaxiTrip(String tripId)' konstruktorini yozing.\n\n3. 'public String getTripId()' getterini yozing (ammo hech qanday setter yozilmaydi).\n\n4. 'Main' klassi 'main' metodini oching.\n\n5. boshlang'ich parametrlar bilan ob'yektni yarating, 'Safar ID: ' + trip.getTripId() deb chop eting.",
      "en": "📖 Real-World Scenario & Context\nCreate a read-only property by providing a getter without any corresponding setter.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'TaxiTrip' with read-only private String field 'tripId'.\n\n2. Implement constructor 'public TaxiTrip(String tripId)'.\n\n3. Write getter 'public String getTripId()' without providing any mutator setter.\n\n4. Define 'class Main' with 'main' method.\n\n5. Instantiate object with starting values and print trip ID."
    },
    "story": {
      "uz": "Safar boshlanganda unga bir martalik 'tripId' beriladi. Tizim xavfsizligi uchun bu ID tashqaridan aslo o'zgartirilmasligi, faqat o'qilishi kerak (Read-only property). Setter bermasdan faqat getter taqdim eting.",
      "en": "Create a read-only property by providing a getter without any corresponding setter."
    },
    "steps": {
      "uz": [
        "'TaxiTrip' klassini e'lon qiling va faqat o'qiladigan xususiy (private) String toifasidagi 'tripId' maydonini qo'shing.",
        "Parametrli 'public TaxiTrip(String tripId)' konstruktorini yozing.",
        "'public String getTripId()' getterini yozing (ammo hech qanday setter yozilmaydi).",
        "'Main' klassi 'main' metodini oching.",
        "boshlang'ich parametrlar bilan ob'yektni yarating, 'Safar ID: ' + trip.getTripId() deb chop eting."
      ],
      "en": [
        "Declare class 'TaxiTrip' with read-only private String field 'tripId'.",
        "Implement constructor 'public TaxiTrip(String tripId)'.",
        "Write getter 'public String getTripId()' without providing any mutator setter.",
        "Define 'class Main' with 'main' method.",
        "Instantiate object with starting values and print trip ID."
      ]
    },
    "requirements": {
      "classes": [
        "TaxiTrip",
        "Main"
      ],
      "privateFields": [
        "tripId"
      ],
      "methods": [
        "getTripId"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class TaxiTrip {\n    // 1. Xususiy (private) maydonlarni e'lon qiling\n\n    // 2. Parametrli konstruktorni yozing\n\n    // 3. Talab qilingan getter metodlarini yarating\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TaxiTrip trip = new TaxiTrip(\"TRIP-9901\");\n        System.out.println(\"Safar ID: \" + trip.getTripId());\n    }\n}",
    "solution": "class TaxiTrip {\n    private String tripId;\n\n    public TaxiTrip(String tripId) {\n        this.tripId = tripId;\n    }\n\n    public String getTripId() {\n        return this.tripId;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TaxiTrip trip = new TaxiTrip(\"TRIP-9901\");\n        System.out.println(\"Safar ID: \" + trip.getTripId());\n    }\n}",
    "sampleData": [
      "Safar ID: TRIP-9901"
    ],
    "expectedOutput": "Safar ID: TRIP-9901",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya (Encapsulation) — obyektga yo'naltirilgan dasturlashning asosiy ustuni bo'lib, sinfning ichki holatini tashqi to'g'ridan-to'g'ri aralashuvlardan himoya qiladi. Ma'lumotlarga kirish faqat ommaviy getter va setterlar orqali amalga oshiriladi.",
      "theoryEn": "Encapsulation safeguards internal object state by making fields private and restricting mutations through controlled public accessors.",
      "cleanCode": "class TaxiTrip {\n    private String tripId;\n\n    public TaxiTrip(String tripId) {\n        this.tripId = tripId;\n    }\n\n    public String getTripId() {\n        return this.tripId;\n    }\n}",
      "breakdown": [
        "<code>private</code>: Maydon to'g'ridan-to'g'ri tashqaridan o'zgartirilishdan himoyalangan.",
        "<code>TaxiTrip</code>: Toza inkapsulyatsiya va ma'lumotlar xavfsizligi kafolatlangan."
      ],
      "pitfalls": "Maydonlarni ochiq (public) qoldirmang; barcha xususiy atributlar 'private' bo'lishi shart.",
      "cw2Tip": "CW2 Order Applicationda barcha domen sinflari (Product, Customer, Order) qat'iy inkapsulyatsiyalangan bo'lishi lozim."
    }
  },
  {
    "id": 5,
    "tier": 1,
    "tierName": "1-Bosqich: Inkapsulyatsiya Asoslari va Maydonlarni Yashirish",
    "sector": "1-15: Data Hiding & Accessors",
    "title": {
      "uz": "5. Texnomart — Belgili (char) Tovar Sifat Darajasi",
      "en": "5. Texnomart — Character Primitive Sifat Grade Encapsulation"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSeminar 2 da berilgan 'Product' sinfida 'grade' maydoni 'char' toifasida ('A', 'B', 'C') saqlanadi. Belgili maydonni xususiy qilib, uning to'g'ri o'qilishini ta'minlang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'QualityGrade' klassini e'lon qiling va xususiy (private) char toifasidagi 'grade' maydonini yarating.\n\n2. 'public QualityGrade(char grade)' konstruktorini yozing.\n\n3. 'public char getGrade()' getter metodini yarating.\n\n4. 'Main' metodida boshlang'ich parametrlar bilan ob'yektini initsializatsiya qiling.\n\n5. Konsolga 'Sifat darajasi: ' + q.getGrade() deb chop eting.",
      "en": "📖 Real-World Scenario & Context\nEncapsulate char primitive attribute representing product quality grade matching Seminar 2.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'QualityGrade' with primitive char private char field 'grade'.\n\n2. Write constructor 'public QualityGrade(char grade)'.\n\n3. Implement getter 'public char getGrade()'.\n\n4. In 'main', instantiate instantiate object with starting values.\n\n5. Print 'Sifat darajasi: ' + q.getGrade()."
    },
    "story": {
      "uz": "Seminar 2 da berilgan 'Product' sinfida 'grade' maydoni 'char' toifasida ('A', 'B', 'C') saqlanadi. Belgili maydonni xususiy qilib, uning to'g'ri o'qilishini ta'minlang.",
      "en": "Encapsulate char primitive attribute representing product quality grade matching Seminar 2."
    },
    "steps": {
      "uz": [
        "'QualityGrade' klassini e'lon qiling va xususiy (private) char toifasidagi 'grade' maydonini yarating.",
        "'public QualityGrade(char grade)' konstruktorini yozing.",
        "'public char getGrade()' getter metodini yarating.",
        "'Main' metodida boshlang'ich parametrlar bilan ob'yektini initsializatsiya qiling.",
        "Konsolga 'Sifat darajasi: ' + q.getGrade() deb chop eting."
      ],
      "en": [
        "Declare class 'QualityGrade' with primitive char private char field 'grade'.",
        "Write constructor 'public QualityGrade(char grade)'.",
        "Implement getter 'public char getGrade()'.",
        "In 'main', instantiate instantiate object with starting values.",
        "Print 'Sifat darajasi: ' + q.getGrade()."
      ]
    },
    "requirements": {
      "classes": [
        "QualityGrade",
        "Main"
      ],
      "privateFields": [
        "grade"
      ],
      "methods": [
        "getGrade"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class QualityGrade {\n    // 1. Xususiy (private) maydonlarni e'lon qiling\n\n    // 2. Parametrli konstruktorni yozing\n\n    // 3. Talab qilingan getter metodlarini yarating\n}\n\nclass Main {\n    public static void main(String[] args) {\n        QualityGrade q = new QualityGrade('A');\n        System.out.println(\"Sifat darajasi: \" + q.getGrade());\n    }\n}",
    "solution": "class QualityGrade {\n    private char grade;\n\n    public QualityGrade(char grade) {\n        this.grade = grade;\n    }\n\n    public char getGrade() {\n        return this.grade;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        QualityGrade q = new QualityGrade('A');\n        System.out.println(\"Sifat darajasi: \" + q.getGrade());\n    }\n}",
    "sampleData": [
      "Sifat darajasi: A"
    ],
    "expectedOutput": "Sifat darajasi: A",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya (Encapsulation) — obyektga yo'naltirilgan dasturlashning asosiy ustuni bo'lib, sinfning ichki holatini tashqi to'g'ridan-to'g'ri aralashuvlardan himoya qiladi. Ma'lumotlarga kirish faqat ommaviy getter va setterlar orqali amalga oshiriladi.",
      "theoryEn": "Encapsulation safeguards internal object state by making fields private and restricting mutations through controlled public accessors.",
      "cleanCode": "class QualityGrade {\n    private char grade;\n\n    public QualityGrade(char grade) {\n        this.grade = grade;\n    }\n\n    public char getGrade() {\n        return this.grade;\n    }\n}",
      "breakdown": [
        "<code>private</code>: Maydon to'g'ridan-to'g'ri tashqaridan o'zgartirilishdan himoyalangan.",
        "<code>QualityGrade</code>: Toza inkapsulyatsiya va ma'lumotlar xavfsizligi kafolatlangan."
      ],
      "pitfalls": "Maydonlarni ochiq (public) qoldirmang; barcha xususiy atributlar 'private' bo'lishi shart.",
      "cw2Tip": "CW2 Order Applicationda barcha domen sinflari (Product, Customer, Order) qat'iy inkapsulyatsiyalangan bo'lishi lozim."
    }
  },
  {
    "id": 6,
    "tier": 1,
    "tierName": "1-Bosqich: Inkapsulyatsiya Asoslari va Maydonlarni Yashirish",
    "sector": "1-15: Data Hiding & Accessors",
    "title": {
      "uz": "6. Click — Bo'shliqlarni Tozalovchi Getter (trim va null himoyasi)",
      "en": "6. Click — Sanitizing Getter Trimming Whitespace and Guarding Null"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSeminar 2 'Customer.java' dagi rasmiy usul: 'getName()' metodi 'name == null ? \"Unknown\" : name.trim()' qaytaradi. Foydalanuvchi kiritgan matndan ortiqcha bo'shliqlarni tozalab beruvchi xavfsiz getterni yozing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'UserProfile' klassini va unga xususiy (private) String toifasidagi 'name' maydonini qo'shing.\n\n2. 'public UserProfile(String name)' konstruktorini yozing.\n\n3. Seminar 2 andazasi bo'yicha 'public String getName()' metodida null tekshiruvini va bo'shliqlarni tozalashni (trim) bajaring.\n\n4. 'Main' metodida boshlang'ich parametrlar bilan ob'yektini yarating.\n\n5. Tozalangan ismni chop eting: 'System.out.println(\"Tozalangan ism: [\" + u.getName() + \"]\")'",
      "en": "📖 Real-World Scenario & Context\nImplement sanitizing getter that trims whitespace and falls back to safe default if null.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'UserProfile' with private String field 'name'.\n\n2. Implement constructor 'public UserProfile(String name)'.\n\n3. In 'getName()', apply Seminar 2 pattern: sanitize string with trim() and null check.\n\n4. In 'main', instantiate instantiate object with starting values.\n\n5. Print sanitized name enclosed in brackets."
    },
    "story": {
      "uz": "Seminar 2 'Customer.java' dagi rasmiy usul: 'getName()' metodi 'name == null ? \"Unknown\" : name.trim()' qaytaradi. Foydalanuvchi kiritgan matndan ortiqcha bo'shliqlarni tozalab beruvchi xavfsiz getterni yozing.",
      "en": "Implement sanitizing getter that trims whitespace and falls back to safe default if null."
    },
    "steps": {
      "uz": [
        "'UserProfile' klassini va unga xususiy (private) String toifasidagi 'name' maydonini qo'shing.",
        "'public UserProfile(String name)' konstruktorini yozing.",
        "Seminar 2 andazasi bo'yicha 'public String getName()' metodida null tekshiruvini va bo'shliqlarni tozalashni (trim) bajaring.",
        "'Main' metodida boshlang'ich parametrlar bilan ob'yektini yarating.",
        "Tozalangan ismni chop eting: 'System.out.println(\"Tozalangan ism: [\" + u.getName() + \"]\")'"
      ],
      "en": [
        "Declare class 'UserProfile' with private String field 'name'.",
        "Implement constructor 'public UserProfile(String name)'.",
        "In 'getName()', apply Seminar 2 pattern: sanitize string with trim() and null check.",
        "In 'main', instantiate instantiate object with starting values.",
        "Print sanitized name enclosed in brackets."
      ]
    },
    "requirements": {
      "classes": [
        "UserProfile",
        "Main"
      ],
      "privateFields": [
        "name"
      ],
      "methods": [
        "getName"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class UserProfile {\n    // 1. Xususiy (private) maydonlarni e'lon qiling\n\n    // 2. Parametrli konstruktorni yozing\n\n    // 3. Talab qilingan getter metodlarini yarating\n}\n\nclass Main {\n    public static void main(String[] args) {\n        UserProfile u = new UserProfile(\"   Davron Aliyev   \");\n        System.out.println(\"Tozalangan ism: [\" + u.getName() + \"]\");\n    }\n}",
    "solution": "class UserProfile {\n    private String name;\n\n    public UserProfile(String name) {\n        this.name = name;\n    }\n\n    public String getName() {\n        return this.name == null ? \"Unknown\" : this.name.trim();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        UserProfile u = new UserProfile(\"   Davron Aliyev   \");\n        System.out.println(\"Tozalangan ism: [\" + u.getName() + \"]\");\n    }\n}",
    "sampleData": [
      "Tozalangan ism: [Davron Aliyev]"
    ],
    "expectedOutput": "Tozalangan ism: [Davron Aliyev]",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya (Encapsulation) — obyektga yo'naltirilgan dasturlashning asosiy ustuni bo'lib, sinfning ichki holatini tashqi to'g'ridan-to'g'ri aralashuvlardan himoya qiladi. Ma'lumotlarga kirish faqat ommaviy getter va setterlar orqali amalga oshiriladi.",
      "theoryEn": "Encapsulation safeguards internal object state by making fields private and restricting mutations through controlled public accessors.",
      "cleanCode": "class UserProfile {\n    private String name;\n\n    public UserProfile(String name) {\n        this.name = name;\n    }\n\n    public String getName() {\n        return this.name == null ? \"Unknown\" : this.name.trim();\n    }\n}",
      "breakdown": [
        "<code>private</code>: Maydon to'g'ridan-to'g'ri tashqaridan o'zgartirilishdan himoyalangan.",
        "<code>UserProfile</code>: Toza inkapsulyatsiya va ma'lumotlar xavfsizligi kafolatlangan."
      ],
      "pitfalls": "Maydonlarni ochiq (public) qoldirmang; barcha xususiy atributlar 'private' bo'lishi shart.",
      "cw2Tip": "CW2 Order Applicationda barcha domen sinflari (Product, Customer, Order) qat'iy inkapsulyatsiyalangan bo'lishi lozim."
    }
  },
  {
    "id": 7,
    "tier": 1,
    "tierName": "1-Bosqich: Inkapsulyatsiya Asoslari va Maydonlarni Yashirish",
    "sector": "1-15: Data Hiding & Accessors",
    "title": {
      "uz": "7. Safia — Valyuta Tiynlarini Yaxlitlovchi Getter (Math.round)",
      "en": "7. Safia — Precision Monetary Getter Rounded to Two Decimal Places"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSeminar 2 'Customer.java' yechimida hisob balansi 'Math.round(accountBalance * 100.0) / 100.0' orqali 2 xona aniqlikda yaxlitlanadi. Kasrli qoldiqni chiroyli formatda qaytaruvchi getterni dasturlang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'CustomerBalance' klassini e'lon qilib, xususiy (private) double toifasidagi 'balance' maydonini qo'shing.\n\n2. 'public CustomerBalance(double balance)' konstruktorini yozing.\n\n3. Seminar 2 andazasi bo'yicha 'public double getBalance()' metodida Math.round orqali 2 xona aniqlikda yaxlitlang.\n\n4. 'Main' metodida boshlang'ich parametrlar bilan ob'yektini yarating.\n\n5. Konsolga 'Yaxlitlangan balans: ' + cb.getBalance() + ' UZS' deb chiqaring.",
      "en": "📖 Real-World Scenario & Context\nReturn account balance rounded to exactly two decimal places matching Seminar 2 Customer.java.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'CustomerBalance' with private double field 'balance'.\n\n2. Write constructor 'public CustomerBalance(double balance)'.\n\n3. Implement 'public double getBalance()' rounding to 2 decimals using Math.round.\n\n4. In 'main', instantiate instantiate object with starting values.\n\n5. Print rounded balance value."
    },
    "story": {
      "uz": "Seminar 2 'Customer.java' yechimida hisob balansi 'Math.round(accountBalance * 100.0) / 100.0' orqali 2 xona aniqlikda yaxlitlanadi. Kasrli qoldiqni chiroyli formatda qaytaruvchi getterni dasturlang.",
      "en": "Return account balance rounded to exactly two decimal places matching Seminar 2 Customer.java."
    },
    "steps": {
      "uz": [
        "'CustomerBalance' klassini e'lon qilib, xususiy (private) double toifasidagi 'balance' maydonini qo'shing.",
        "'public CustomerBalance(double balance)' konstruktorini yozing.",
        "Seminar 2 andazasi bo'yicha 'public double getBalance()' metodida Math.round orqali 2 xona aniqlikda yaxlitlang.",
        "'Main' metodida boshlang'ich parametrlar bilan ob'yektini yarating.",
        "Konsolga 'Yaxlitlangan balans: ' + cb.getBalance() + ' UZS' deb chiqaring."
      ],
      "en": [
        "Declare class 'CustomerBalance' with private double field 'balance'.",
        "Write constructor 'public CustomerBalance(double balance)'.",
        "Implement 'public double getBalance()' rounding to 2 decimals using Math.round.",
        "In 'main', instantiate instantiate object with starting values.",
        "Print rounded balance value."
      ]
    },
    "requirements": {
      "classes": [
        "CustomerBalance",
        "Main"
      ],
      "privateFields": [
        "balance"
      ],
      "methods": [
        "getBalance"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class CustomerBalance {\n    // 1. Xususiy (private) maydonlarni e'lon qiling\n\n    // 2. Parametrli konstruktorni yozing\n\n    // 3. Talab qilingan getter metodlarini yarating\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CustomerBalance cb = new CustomerBalance(145.5678);\n        System.out.println(\"Yaxlitlangan balans: \" + cb.getBalance() + \" UZS\");\n    }\n}",
    "solution": "class CustomerBalance {\n    private double balance;\n\n    public CustomerBalance(double balance) {\n        this.balance = balance;\n    }\n\n    public double getBalance() {\n        return Math.round(this.balance * 100.0) / 100.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CustomerBalance cb = new CustomerBalance(145.5678);\n        System.out.println(\"Yaxlitlangan balans: \" + cb.getBalance() + \" UZS\");\n    }\n}",
    "sampleData": [
      "Yaxlitlangan balans: 145.57 UZS"
    ],
    "expectedOutput": "Yaxlitlangan balans: 145.57 UZS",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya (Encapsulation) — obyektga yo'naltirilgan dasturlashning asosiy ustuni bo'lib, sinfning ichki holatini tashqi to'g'ridan-to'g'ri aralashuvlardan himoya qiladi. Ma'lumotlarga kirish faqat ommaviy getter va setterlar orqali amalga oshiriladi.",
      "theoryEn": "Encapsulation safeguards internal object state by making fields private and restricting mutations through controlled public accessors.",
      "cleanCode": "class CustomerBalance {\n    private double balance;\n\n    public CustomerBalance(double balance) {\n        this.balance = balance;\n    }\n\n    public double getBalance() {\n        return Math.round(this.balance * 100.0) / 100.0;\n    }\n}",
      "breakdown": [
        "<code>private</code>: Maydon to'g'ridan-to'g'ri tashqaridan o'zgartirilishdan himoyalangan.",
        "<code>CustomerBalance</code>: Toza inkapsulyatsiya va ma'lumotlar xavfsizligi kafolatlangan."
      ],
      "pitfalls": "Maydonlarni ochiq (public) qoldirmang; barcha xususiy atributlar 'private' bo'lishi shart.",
      "cw2Tip": "CW2 Order Applicationda barcha domen sinflari (Product, Customer, Order) qat'iy inkapsulyatsiyalangan bo'lishi lozim."
    }
  },
  {
    "id": 8,
    "tier": 1,
    "tierName": "1-Bosqich: Inkapsulyatsiya Asoslari va Maydonlarni Yashirish",
    "sector": "1-15: Data Hiding & Accessors",
    "title": {
      "uz": "8. Express24 — Xavfsiz Sukutdagi Qiymat Qaytaruvchi Getter",
      "en": "8. Express24 — Safe Fallback Default Value Getter"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nKuryer yetkazish vaqti ko'rsatilmagan (0 yoki manfiy) bo'lsa, getter 15 daqiqa deb qaytarishi kerak. Maydonni o'zgartirmasdan, xavfsiz qiymat beruvchi getterni yozing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'DeliveryEstimate' klassini va unga xususiy (private) int toifasidagi 'estimatedMinutes' maydonini qo'shing.\n\n2. 'public DeliveryEstimate(int estimatedMinutes)' konstruktorini yarating.\n\n3. 'public int getEstimatedMinutes()' metodida agar qiymat 0 yoki undan kichik bo'lsa standart 15 daqiqa qaytaring.\n\n4. 'Main' metodida boshlang'ich parametrlar bilan ob'yektini yarating.\n\n5. Konsolga 'Yetkazish vaqti: ' + de.getEstimatedMinutes() + ' daqiqa' chiqaring.",
      "en": "📖 Real-World Scenario & Context\nGetter supplies standard fallback duration if raw private field is not positively initialized.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'DeliveryEstimate' with private int field 'estimatedMinutes'.\n\n2. Write constructor 'public DeliveryEstimate(int estimatedMinutes)'.\n\n3. Implement 'getEstimatedMinutes()' returning safe default 15 minutes if negative or zero.\n\n4. Instantiate object with starting values in 'main'.\n\n5. Print estimated delivery minutes."
    },
    "story": {
      "uz": "Kuryer yetkazish vaqti ko'rsatilmagan (0 yoki manfiy) bo'lsa, getter 15 daqiqa deb qaytarishi kerak. Maydonni o'zgartirmasdan, xavfsiz qiymat beruvchi getterni yozing.",
      "en": "Getter supplies standard fallback duration if raw private field is not positively initialized."
    },
    "steps": {
      "uz": [
        "'DeliveryEstimate' klassini va unga xususiy (private) int toifasidagi 'estimatedMinutes' maydonini qo'shing.",
        "'public DeliveryEstimate(int estimatedMinutes)' konstruktorini yarating.",
        "'public int getEstimatedMinutes()' metodida agar qiymat 0 yoki undan kichik bo'lsa standart 15 daqiqa qaytaring.",
        "'Main' metodida boshlang'ich parametrlar bilan ob'yektini yarating.",
        "Konsolga 'Yetkazish vaqti: ' + de.getEstimatedMinutes() + ' daqiqa' chiqaring."
      ],
      "en": [
        "Declare class 'DeliveryEstimate' with private int field 'estimatedMinutes'.",
        "Write constructor 'public DeliveryEstimate(int estimatedMinutes)'.",
        "Implement 'getEstimatedMinutes()' returning safe default 15 minutes if negative or zero.",
        "Instantiate object with starting values in 'main'.",
        "Print estimated delivery minutes."
      ]
    },
    "requirements": {
      "classes": [
        "DeliveryEstimate",
        "Main"
      ],
      "privateFields": [
        "estimatedMinutes"
      ],
      "methods": [
        "getEstimatedMinutes"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class DeliveryEstimate {\n    // 1. Xususiy (private) maydonlarni e'lon qiling\n\n    // 2. Parametrli konstruktorni yozing\n\n    // 3. Talab qilingan getter metodlarini yarating\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DeliveryEstimate de = new DeliveryEstimate(-5);\n        System.out.println(\"Yetkazish vaqti: \" + de.getEstimatedMinutes() + \" daqiqa\");\n    }\n}",
    "solution": "class DeliveryEstimate {\n    private int estimatedMinutes;\n\n    public DeliveryEstimate(int estimatedMinutes) {\n        this.estimatedMinutes = estimatedMinutes;\n    }\n\n    public int getEstimatedMinutes() {\n        return this.estimatedMinutes <= 0 ? 15 : this.estimatedMinutes;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DeliveryEstimate de = new DeliveryEstimate(-5);\n        System.out.println(\"Yetkazish vaqti: \" + de.getEstimatedMinutes() + \" daqiqa\");\n    }\n}",
    "sampleData": [
      "Yetkazish vaqti: 15 daqiqa"
    ],
    "expectedOutput": "Yetkazish vaqti: 15 daqiqa",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya (Encapsulation) — obyektga yo'naltirilgan dasturlashning asosiy ustuni bo'lib, sinfning ichki holatini tashqi to'g'ridan-to'g'ri aralashuvlardan himoya qiladi. Ma'lumotlarga kirish faqat ommaviy getter va setterlar orqali amalga oshiriladi.",
      "theoryEn": "Encapsulation safeguards internal object state by making fields private and restricting mutations through controlled public accessors.",
      "cleanCode": "class DeliveryEstimate {\n    private int estimatedMinutes;\n\n    public DeliveryEstimate(int estimatedMinutes) {\n        this.estimatedMinutes = estimatedMinutes;\n    }\n\n    public int getEstimatedMinutes() {\n        return this.estimatedMinutes <= 0 ? 15 : this.estimatedMinutes;\n    }\n}",
      "breakdown": [
        "<code>private</code>: Maydon to'g'ridan-to'g'ri tashqaridan o'zgartirilishdan himoyalangan.",
        "<code>DeliveryEstimate</code>: Toza inkapsulyatsiya va ma'lumotlar xavfsizligi kafolatlangan."
      ],
      "pitfalls": "Maydonlarni ochiq (public) qoldirmang; barcha xususiy atributlar 'private' bo'lishi shart.",
      "cw2Tip": "CW2 Order Applicationda barcha domen sinflari (Product, Customer, Order) qat'iy inkapsulyatsiyalangan bo'lishi lozim."
    }
  },
  {
    "id": 9,
    "tier": 1,
    "tierName": "1-Bosqich: Inkapsulyatsiya Asoslari va Maydonlarni Yashirish",
    "sector": "1-15: Data Hiding & Accessors",
    "title": {
      "uz": "9. Asaxiy — Prefiks Bilan Formatlangan Getter",
      "en": "9. Asaxiy — Formatted Code Getter with Business Prefix"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nKitobning raqamli kodi ichki tizimda oddiy int (masalan, 404) sifatida saqlanadi, lekin getter uni 'BOOK-404' shaklida formatlab berishi shart. Formatlovchi getterni tuzing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'BookBarcode' klassini e'lon qiling va butun sonli xususiy (private) int toifasidagi 'code' maydonini qo'shing.\n\n2. 'public BookBarcode(int code)' konstruktorini yozing.\n\n3. 'public String getFormattedCode()' metodini yozing va 'BOOK-' prefiksi bilan kodni birlashtiring.\n\n4. 'Main' metodida boshlang'ich parametrlar bilan ob'yektini yarating.\n\n5. Konsolga 'Kitob kodi: ' + b.getFormattedCode() chop eting.",
      "en": "📖 Real-World Scenario & Context\nGetter transforms internal raw integer into standardized customer-facing code string.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'BookBarcode' with private int field 'code'.\n\n2. Write constructor 'public BookBarcode(int code)'.\n\n3. Implement 'public String getFormattedCode()' formatting the integer with 'BOOK-' prefix.\n\n4. In 'main', instantiate instantiate object with starting values.\n\n5. Print formatted book code."
    },
    "story": {
      "uz": "Kitobning raqamli kodi ichki tizimda oddiy int (masalan, 404) sifatida saqlanadi, lekin getter uni 'BOOK-404' shaklida formatlab berishi shart. Formatlovchi getterni tuzing.",
      "en": "Getter transforms internal raw integer into standardized customer-facing code string."
    },
    "steps": {
      "uz": [
        "'BookBarcode' klassini e'lon qiling va butun sonli xususiy (private) int toifasidagi 'code' maydonini qo'shing.",
        "'public BookBarcode(int code)' konstruktorini yozing.",
        "'public String getFormattedCode()' metodini yozing va 'BOOK-' prefiksi bilan kodni birlashtiring.",
        "'Main' metodida boshlang'ich parametrlar bilan ob'yektini yarating.",
        "Konsolga 'Kitob kodi: ' + b.getFormattedCode() chop eting."
      ],
      "en": [
        "Declare class 'BookBarcode' with private int field 'code'.",
        "Write constructor 'public BookBarcode(int code)'.",
        "Implement 'public String getFormattedCode()' formatting the integer with 'BOOK-' prefix.",
        "In 'main', instantiate instantiate object with starting values.",
        "Print formatted book code."
      ]
    },
    "requirements": {
      "classes": [
        "BookBarcode",
        "Main"
      ],
      "privateFields": [
        "code"
      ],
      "methods": [
        "getFormattedCode"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class BookBarcode {\n    // 1. Xususiy (private) maydonlarni e'lon qiling\n\n    // 2. Parametrli konstruktorni yozing\n\n    // 3. Talab qilingan getter metodlarini yarating\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BookBarcode b = new BookBarcode(404);\n        System.out.println(\"Kitob kodi: \" + b.getFormattedCode());\n    }\n}",
    "solution": "class BookBarcode {\n    private int code;\n\n    public BookBarcode(int code) {\n        this.code = code;\n    }\n\n    public String getFormattedCode() {\n        return \"BOOK-\" + this.code;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BookBarcode b = new BookBarcode(404);\n        System.out.println(\"Kitob kodi: \" + b.getFormattedCode());\n    }\n}",
    "sampleData": [
      "Kitob kodi: BOOK-404"
    ],
    "expectedOutput": "Kitob kodi: BOOK-404",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya (Encapsulation) — obyektga yo'naltirilgan dasturlashning asosiy ustuni bo'lib, sinfning ichki holatini tashqi to'g'ridan-to'g'ri aralashuvlardan himoya qiladi. Ma'lumotlarga kirish faqat ommaviy getter va setterlar orqali amalga oshiriladi.",
      "theoryEn": "Encapsulation safeguards internal object state by making fields private and restricting mutations through controlled public accessors.",
      "cleanCode": "class BookBarcode {\n    private int code;\n\n    public BookBarcode(int code) {\n        this.code = code;\n    }\n\n    public String getFormattedCode() {\n        return \"BOOK-\" + this.code;\n    }\n}",
      "breakdown": [
        "<code>private</code>: Maydon to'g'ridan-to'g'ri tashqaridan o'zgartirilishdan himoyalangan.",
        "<code>BookBarcode</code>: Toza inkapsulyatsiya va ma'lumotlar xavfsizligi kafolatlangan."
      ],
      "pitfalls": "Maydonlarni ochiq (public) qoldirmang; barcha xususiy atributlar 'private' bo'lishi shart.",
      "cw2Tip": "CW2 Order Applicationda barcha domen sinflari (Product, Customer, Order) qat'iy inkapsulyatsiyalangan bo'lishi lozim."
    }
  },
  {
    "id": 10,
    "tier": 1,
    "tierName": "1-Bosqich: Inkapsulyatsiya Asoslari va Maydonlarni Yashirish",
    "sector": "1-15: Data Hiding & Accessors",
    "title": {
      "uz": "10. Milliy Bank — Niqoblangan Karta Raqami Getteri",
      "en": "10. Milliy Bank — Masked Card Number Accessor for Security"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nXavfsizlik talabiga ko'ra karta raqami to'liq ko'rsatilmaydi. Getter faqat oxirgi 4 ta raqamni '**** 1234' shaklida qaytarishi kerak (Seminar 2 va 6 talabi).\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'BankCardMasker' klassini va unga xususiy (private) String toifasidagi 'cardNumber' maydonini qo'shing.\n\n2. 'public BankCardMasker(String cardNumber)' konstruktorini yozing.\n\n3. 'public String getMaskedNumber()' metodida dastlabki raqamlarni yashirib, faqat oxirgi 4 ta raqamni ko'rsatuvchi '**** ' + substring formatini qaytaring.\n\n4. 'Main' metodida boshlang'ich parametrlar bilan ob'yektni yarating yarating.\n\n5. Konsolga 'Karta: ' + card.getMaskedNumber() deb chiqaring.",
      "en": "📖 Real-World Scenario & Context\nAccessor exposes only masked card representation keeping the full number private.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'BankCardMasker' with private String field 'cardNumber'.\n\n2. Write constructor 'public BankCardMasker(String cardNumber)'.\n\n3. Implement 'public String getMaskedNumber()' masking leading digits and displaying last 4 digits.\n\n4. In 'main', instantiate instantiate object with starting values.\n\n5. Print masked card number."
    },
    "story": {
      "uz": "Xavfsizlik talabiga ko'ra karta raqami to'liq ko'rsatilmaydi. Getter faqat oxirgi 4 ta raqamni '**** 1234' shaklida qaytarishi kerak (Seminar 2 va 6 talabi).",
      "en": "Accessor exposes only masked card representation keeping the full number private."
    },
    "steps": {
      "uz": [
        "'BankCardMasker' klassini va unga xususiy (private) String toifasidagi 'cardNumber' maydonini qo'shing.",
        "'public BankCardMasker(String cardNumber)' konstruktorini yozing.",
        "'public String getMaskedNumber()' metodida dastlabki raqamlarni yashirib, faqat oxirgi 4 ta raqamni ko'rsatuvchi '**** ' + substring formatini qaytaring.",
        "'Main' metodida boshlang'ich parametrlar bilan ob'yektni yarating yarating.",
        "Konsolga 'Karta: ' + card.getMaskedNumber() deb chiqaring."
      ],
      "en": [
        "Declare class 'BankCardMasker' with private String field 'cardNumber'.",
        "Write constructor 'public BankCardMasker(String cardNumber)'.",
        "Implement 'public String getMaskedNumber()' masking leading digits and displaying last 4 digits.",
        "In 'main', instantiate instantiate object with starting values.",
        "Print masked card number."
      ]
    },
    "requirements": {
      "classes": [
        "BankCardMasker",
        "Main"
      ],
      "privateFields": [
        "cardNumber"
      ],
      "methods": [
        "getMaskedNumber"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class BankCardMasker {\n    // 1. Xususiy (private) maydonlarni e'lon qiling\n\n    // 2. Parametrli konstruktorni yozing\n\n    // 3. Talab qilingan getter metodlarini yarating\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BankCardMasker card = new BankCardMasker(\"8600123456789012\");\n        System.out.println(\"Karta: \" + card.getMaskedNumber());\n    }\n}",
    "solution": "class BankCardMasker {\n    private String cardNumber;\n\n    public BankCardMasker(String cardNumber) {\n        this.cardNumber = cardNumber;\n    }\n\n    public String getMaskedNumber() {\n        return \"**** \" + this.cardNumber.substring(this.cardNumber.length() - 4);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BankCardMasker card = new BankCardMasker(\"8600123456789012\");\n        System.out.println(\"Karta: \" + card.getMaskedNumber());\n    }\n}",
    "sampleData": [
      "Karta: **** 9012"
    ],
    "expectedOutput": "Karta: **** 9012",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya (Encapsulation) — obyektga yo'naltirilgan dasturlashning asosiy ustuni bo'lib, sinfning ichki holatini tashqi to'g'ridan-to'g'ri aralashuvlardan himoya qiladi. Ma'lumotlarga kirish faqat ommaviy getter va setterlar orqali amalga oshiriladi.",
      "theoryEn": "Encapsulation safeguards internal object state by making fields private and restricting mutations through controlled public accessors.",
      "cleanCode": "class BankCardMasker {\n    private String cardNumber;\n\n    public BankCardMasker(String cardNumber) {\n        this.cardNumber = cardNumber;\n    }\n\n    public String getMaskedNumber() {\n        return \"**** \" + this.cardNumber.substring(this.cardNumber.length() - 4);\n    }\n}",
      "breakdown": [
        "<code>private</code>: Maydon to'g'ridan-to'g'ri tashqaridan o'zgartirilishdan himoyalangan.",
        "<code>BankCardMasker</code>: Toza inkapsulyatsiya va ma'lumotlar xavfsizligi kafolatlangan."
      ],
      "pitfalls": "Maydonlarni ochiq (public) qoldirmang; barcha xususiy atributlar 'private' bo'lishi shart.",
      "cw2Tip": "CW2 Order Applicationda barcha domen sinflari (Product, Customer, Order) qat'iy inkapsulyatsiyalangan bo'lishi lozim."
    }
  },
  {
    "id": 11,
    "tier": 1,
    "tierName": "1-Bosqich: Inkapsulyatsiya Asoslari va Maydonlarni Yashirish",
    "sector": "1-15: Data Hiding & Accessors",
    "title": {
      "uz": "11. Dodo Pizza — Xotirada Maydoni Yo'q Hosilaviy Getter (Derived)",
      "en": "11. Dodo Pizza — Derived Field Computed on the Fly"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nPitsaning umumiy qiymatini hisoblash uchun alohida maydon ochish shart emas, chunki u har doim 'price * quantity' dan kelib chiqadi. Dinamik hisoblab beruvchi 'getTotalCost()' getterini yozing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'PizzaOrderLine' klassini xususiy (private) double toifasidagi 'unitPrice' va xususiy (private) int toifasidagi 'quantity' maydonlari bilan yarating.\n\n2. 'public PizzaOrderLine(double unitPrice, int quantity)' konstruktorini yozing.\n\n3. Alohida 'total' maydoni ochmasdan, dinamik tegishli hisoblangan qiymatni qaytaring hisoblovchi 'public double getTotalCost()' metodini yozing.\n\n4. 'Main' metodida boshlang'ich parametrlar bilan ob'yektini oching.\n\n5. Konsolga 'Qator summasi: ' + line.getTotalCost() + ' UZS' chiqaring.",
      "en": "📖 Real-World Scenario & Context\nProvide derived getter computing total value dynamically without a dedicated instance field.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'PizzaOrderLine' with private double field 'unitPrice' and private int field 'quantity'.\n\n2. Write constructor 'public PizzaOrderLine(double unitPrice, int quantity)'.\n\n3. Implement derived getter 'public double getTotalCost()' computing unitPrice * quantity on the fly.\n\n4. In 'main', instantiate instantiate object with starting values.\n\n5. Print line total cost."
    },
    "story": {
      "uz": "Pitsaning umumiy qiymatini hisoblash uchun alohida maydon ochish shart emas, chunki u har doim 'price * quantity' dan kelib chiqadi. Dinamik hisoblab beruvchi 'getTotalCost()' getterini yozing.",
      "en": "Provide derived getter computing total value dynamically without a dedicated instance field."
    },
    "steps": {
      "uz": [
        "'PizzaOrderLine' klassini xususiy (private) double toifasidagi 'unitPrice' va xususiy (private) int toifasidagi 'quantity' maydonlari bilan yarating.",
        "'public PizzaOrderLine(double unitPrice, int quantity)' konstruktorini yozing.",
        "Alohida 'total' maydoni ochmasdan, dinamik tegishli hisoblangan qiymatni qaytaring hisoblovchi 'public double getTotalCost()' metodini yozing.",
        "'Main' metodida boshlang'ich parametrlar bilan ob'yektini oching.",
        "Konsolga 'Qator summasi: ' + line.getTotalCost() + ' UZS' chiqaring."
      ],
      "en": [
        "Declare class 'PizzaOrderLine' with private double field 'unitPrice' and private int field 'quantity'.",
        "Write constructor 'public PizzaOrderLine(double unitPrice, int quantity)'.",
        "Implement derived getter 'public double getTotalCost()' computing unitPrice * quantity on the fly.",
        "In 'main', instantiate instantiate object with starting values.",
        "Print line total cost."
      ]
    },
    "requirements": {
      "classes": [
        "PizzaOrderLine",
        "Main"
      ],
      "privateFields": [
        "unitPrice",
        "quantity"
      ],
      "methods": [
        "getTotalCost"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class PizzaOrderLine {\n    // 1. Xususiy (private) maydonlarni e'lon qiling\n\n    // 2. Parametrli konstruktorni yozing\n\n    // 3. Talab qilingan getter metodlarini yarating\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PizzaOrderLine line = new PizzaOrderLine(75000.0, 3);\n        System.out.println(\"Qator summasi: \" + line.getTotalCost() + \" UZS\");\n    }\n}",
    "solution": "class PizzaOrderLine {\n    private double unitPrice;\n    private int quantity;\n\n    public PizzaOrderLine(double unitPrice, int quantity) {\n        this.unitPrice = unitPrice;\n        this.quantity = quantity;\n    }\n\n    public double getTotalCost() {\n        return this.unitPrice * this.quantity;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PizzaOrderLine line = new PizzaOrderLine(75000.0, 3);\n        System.out.println(\"Qator summasi: \" + line.getTotalCost() + \" UZS\");\n    }\n}",
    "sampleData": [
      "Qator summasi: 225000.0 UZS"
    ],
    "expectedOutput": "Qator summasi: 225000.0 UZS",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya (Encapsulation) — obyektga yo'naltirilgan dasturlashning asosiy ustuni bo'lib, sinfning ichki holatini tashqi to'g'ridan-to'g'ri aralashuvlardan himoya qiladi. Ma'lumotlarga kirish faqat ommaviy getter va setterlar orqali amalga oshiriladi.",
      "theoryEn": "Encapsulation safeguards internal object state by making fields private and restricting mutations through controlled public accessors.",
      "cleanCode": "class PizzaOrderLine {\n    private double unitPrice;\n    private int quantity;\n\n    public PizzaOrderLine(double unitPrice, int quantity) {\n        this.unitPrice = unitPrice;\n        this.quantity = quantity;\n    }\n\n    public double getTotalCost() {\n        return this.unitPrice * this.quantity;\n    }\n}",
      "breakdown": [
        "<code>private</code>: Maydon to'g'ridan-to'g'ri tashqaridan o'zgartirilishdan himoyalangan.",
        "<code>PizzaOrderLine</code>: Toza inkapsulyatsiya va ma'lumotlar xavfsizligi kafolatlangan."
      ],
      "pitfalls": "Maydonlarni ochiq (public) qoldirmang; barcha xususiy atributlar 'private' bo'lishi shart.",
      "cw2Tip": "CW2 Order Applicationda barcha domen sinflari (Product, Customer, Order) qat'iy inkapsulyatsiyalangan bo'lishi lozim."
    }
  },
  {
    "id": 12,
    "tier": 1,
    "tierName": "1-Bosqich: Inkapsulyatsiya Asoslari va Maydonlarni Yashirish",
    "sector": "1-15: Data Hiding & Accessors",
    "title": {
      "uz": "12. Medion — Holatga Bog'liq Shartli Getter",
      "en": "12. Medion — State-Dependent Conditional Accessor"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nAgar tahlil hali tayyor bo'lmasa ('isReady == false'), natija getteri 'Kutilmoqda' qaytarishi, tayyor bo'lsa haqiqiy natijani berishi shart. Shartli getterni dasturlang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'LabResult' sinfini oching va xususiy (private) String toifasidagi 'result' hamda xususiy (private) boolean toifasidagi 'isReady' maydonlarini e'lon qiling.\n\n2. 'public LabResult(String result, boolean isReady)' konstruktorini yozing.\n\n3. 'public String getResultString()' metodida agar tahlil tayyorlik holati true bo'lsa natijani, aks holda 'Kutilmoqda' matnini qaytaring.\n\n4. 'Main' metodida boshlang'ich parametrlar bilan ob'yektini yarating.\n\n5. Konsolga 'Tahlil holati: ' + res.getResultString() deb chiqaring.",
      "en": "📖 Real-World Scenario & Context\nAccessor inspects internal boolean state before returning medical result string.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'LabResult' with private String field 'result' and private boolean field 'isReady'.\n\n2. Write constructor 'public LabResult(String result, boolean isReady)'.\n\n3. Implement 'public String getResultString()' returning result if ready, or 'Kutilmoqda' otherwise.\n\n4. In 'main', instantiate instantiate object with starting values.\n\n5. Print lab result status."
    },
    "story": {
      "uz": "Agar tahlil hali tayyor bo'lmasa ('isReady == false'), natija getteri 'Kutilmoqda' qaytarishi, tayyor bo'lsa haqiqiy natijani berishi shart. Shartli getterni dasturlang.",
      "en": "Accessor inspects internal boolean state before returning medical result string."
    },
    "steps": {
      "uz": [
        "'LabResult' sinfini oching va xususiy (private) String toifasidagi 'result' hamda xususiy (private) boolean toifasidagi 'isReady' maydonlarini e'lon qiling.",
        "'public LabResult(String result, boolean isReady)' konstruktorini yozing.",
        "'public String getResultString()' metodida agar tahlil tayyorlik holati true bo'lsa natijani, aks holda 'Kutilmoqda' matnini qaytaring.",
        "'Main' metodida boshlang'ich parametrlar bilan ob'yektini yarating.",
        "Konsolga 'Tahlil holati: ' + res.getResultString() deb chiqaring."
      ],
      "en": [
        "Declare class 'LabResult' with private String field 'result' and private boolean field 'isReady'.",
        "Write constructor 'public LabResult(String result, boolean isReady)'.",
        "Implement 'public String getResultString()' returning result if ready, or 'Kutilmoqda' otherwise.",
        "In 'main', instantiate instantiate object with starting values.",
        "Print lab result status."
      ]
    },
    "requirements": {
      "classes": [
        "LabResult",
        "Main"
      ],
      "privateFields": [
        "result",
        "isReady"
      ],
      "methods": [
        "getResultString"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class LabResult {\n    // 1. Xususiy (private) maydonlarni e'lon qiling\n\n    // 2. Parametrli konstruktorni yozing\n\n    // 3. Talab qilingan getter metodlarini yarating\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LabResult res = new LabResult(\"Qon tahlili yaxshi\", false);\n        System.out.println(\"Tahlil holati: \" + res.getResultString());\n    }\n}",
    "solution": "class LabResult {\n    private String result;\n    private boolean isReady;\n\n    public LabResult(String result, boolean isReady) {\n        this.result = result;\n        this.isReady = isReady;\n    }\n\n    public String getResultString() {\n        return this.isReady ? this.result : \"Kutilmoqda\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LabResult res = new LabResult(\"Qon tahlili yaxshi\", false);\n        System.out.println(\"Tahlil holati: \" + res.getResultString());\n    }\n}",
    "sampleData": [
      "Tahlil holati: Kutilmoqda"
    ],
    "expectedOutput": "Tahlil holati: Kutilmoqda",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya (Encapsulation) — obyektga yo'naltirilgan dasturlashning asosiy ustuni bo'lib, sinfning ichki holatini tashqi to'g'ridan-to'g'ri aralashuvlardan himoya qiladi. Ma'lumotlarga kirish faqat ommaviy getter va setterlar orqali amalga oshiriladi.",
      "theoryEn": "Encapsulation safeguards internal object state by making fields private and restricting mutations through controlled public accessors.",
      "cleanCode": "class LabResult {\n    private String result;\n    private boolean isReady;\n\n    public LabResult(String result, boolean isReady) {\n        this.result = result;\n        this.isReady = isReady;\n    }\n\n    public String getResultString() {\n        return this.isReady ? this.result : \"Kutilmoqda\";\n    }\n}",
      "breakdown": [
        "<code>private</code>: Maydon to'g'ridan-to'g'ri tashqaridan o'zgartirilishdan himoyalangan.",
        "<code>LabResult</code>: Toza inkapsulyatsiya va ma'lumotlar xavfsizligi kafolatlangan."
      ],
      "pitfalls": "Maydonlarni ochiq (public) qoldirmang; barcha xususiy atributlar 'private' bo'lishi shart.",
      "cw2Tip": "CW2 Order Applicationda barcha domen sinflari (Product, Customer, Order) qat'iy inkapsulyatsiyalangan bo'lishi lozim."
    }
  },
  {
    "id": 13,
    "tier": 1,
    "tierName": "1-Bosqich: Inkapsulyatsiya Asoslari va Maydonlarni Yashirish",
    "sector": "1-15: Data Hiding & Accessors",
    "title": {
      "uz": "13. Beeline — Kirishlar Sonini Sanovchi Yashirin Hisoblagich",
      "en": "13. Beeline — Encapsulated Read Access Counter"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nXavfsizlik moduli har safar balans tekshirilganda ichki xususiy 'checkCount' hisoblagichini 1 ga oshirib boradi. Yashirin hisoblagichli inkapsulyatsiyani tuzing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'SimBalance' klassini xususiy (private) double toifasidagi 'balance' va xususiy (private) int toifasidagi 'checkCount' maydonlari bilan oching.\n\n2. 'public SimBalance(double balance)' konstruktorida balansni o'rnating va 'this' orqali 'checkCount' maydoniga qiymat bering qiling.\n\n3. 'public double getBalanceAndTrack()' metodida har murojaat qilinganda ichki hisoblagichni bittaga oshirib qilib, balansni qaytaring.\n\n4. 'public int getCheckCount()' getterini yozing.\n\n5. 'Main' metodida ob'yekt yaratib, ikki marta 'getBalanceAndTrack()' chaqiring va 'Tekshiruvlar soni: ' + sim.getCheckCount() chiqaring.",
      "en": "📖 Real-World Scenario & Context\nTrack internal access frequency via encapsulated counter incremented during inspection.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'SimBalance' with private double field 'balance' and private int field 'checkCount'.\n\n2. Write constructor 'public SimBalance(double balance)' initializing checkCount to 0.\n\n3. Implement 'public double getBalanceAndTrack()' incrementing counter and returning balance.\n\n4. Write getter 'public int getCheckCount()'.\n\n5. In 'main', invoke tracking method twice and print total check count."
    },
    "story": {
      "uz": "Xavfsizlik moduli har safar balans tekshirilganda ichki xususiy 'checkCount' hisoblagichini 1 ga oshirib boradi. Yashirin hisoblagichli inkapsulyatsiyani tuzing.",
      "en": "Track internal access frequency via encapsulated counter incremented during inspection."
    },
    "steps": {
      "uz": [
        "'SimBalance' klassini xususiy (private) double toifasidagi 'balance' va xususiy (private) int toifasidagi 'checkCount' maydonlari bilan oching.",
        "'public SimBalance(double balance)' konstruktorida balansni o'rnating va 'this' orqali 'checkCount' maydoniga qiymat bering qiling.",
        "'public double getBalanceAndTrack()' metodida har murojaat qilinganda ichki hisoblagichni bittaga oshirib qilib, balansni qaytaring.",
        "'public int getCheckCount()' getterini yozing.",
        "'Main' metodida ob'yekt yaratib, ikki marta 'getBalanceAndTrack()' chaqiring va 'Tekshiruvlar soni: ' + sim.getCheckCount() chiqaring."
      ],
      "en": [
        "Declare class 'SimBalance' with private double field 'balance' and private int field 'checkCount'.",
        "Write constructor 'public SimBalance(double balance)' initializing checkCount to 0.",
        "Implement 'public double getBalanceAndTrack()' incrementing counter and returning balance.",
        "Write getter 'public int getCheckCount()'.",
        "In 'main', invoke tracking method twice and print total check count."
      ]
    },
    "requirements": {
      "classes": [
        "SimBalance",
        "Main"
      ],
      "privateFields": [
        "balance",
        "checkCount"
      ],
      "methods": [
        "getBalanceAndTrack",
        "getCheckCount"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class SimBalance {\n    // 1. Xususiy (private) maydonlarni e'lon qiling\n\n    // 2. Parametrli konstruktorni yozing\n\n    // 3. Talab qilingan getter metodlarini yarating\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SimBalance sim = new SimBalance(25000.0);\n        sim.getBalanceAndTrack();\n        sim.getBalanceAndTrack();\n        System.out.println(\"Tekshiruvlar soni: \" + sim.getCheckCount());\n    }\n}",
    "solution": "class SimBalance {\n    private double balance;\n    private int checkCount;\n\n    public SimBalance(double balance) {\n        this.balance = balance;\n        this.checkCount = 0;\n    }\n\n    public double getBalanceAndTrack() {\n        this.checkCount++;\n        return this.balance;\n    }\n\n    public int getCheckCount() {\n        return this.checkCount;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SimBalance sim = new SimBalance(25000.0);\n        sim.getBalanceAndTrack();\n        sim.getBalanceAndTrack();\n        System.out.println(\"Tekshiruvlar soni: \" + sim.getCheckCount());\n    }\n}",
    "sampleData": [
      "Tekshiruvlar soni: 2"
    ],
    "expectedOutput": "Tekshiruvlar soni: 2",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya (Encapsulation) — obyektga yo'naltirilgan dasturlashning asosiy ustuni bo'lib, sinfning ichki holatini tashqi to'g'ridan-to'g'ri aralashuvlardan himoya qiladi. Ma'lumotlarga kirish faqat ommaviy getter va setterlar orqali amalga oshiriladi.",
      "theoryEn": "Encapsulation safeguards internal object state by making fields private and restricting mutations through controlled public accessors.",
      "cleanCode": "class SimBalance {\n    private double balance;\n    private int checkCount;\n\n    public SimBalance(double balance) {\n        this.balance = balance;\n        this.checkCount = 0;\n    }\n\n    public double getBalanceAndTrack() {\n        this.checkCount++;\n        return this.balance;\n    }\n\n    public int getCheckCount() {\n        return this.checkCount;\n    }\n}",
      "breakdown": [
        "<code>private</code>: Maydon to'g'ridan-to'g'ri tashqaridan o'zgartirilishdan himoyalangan.",
        "<code>SimBalance</code>: Toza inkapsulyatsiya va ma'lumotlar xavfsizligi kafolatlangan."
      ],
      "pitfalls": "Maydonlarni ochiq (public) qoldirmang; barcha xususiy atributlar 'private' bo'lishi shart.",
      "cw2Tip": "CW2 Order Applicationda barcha domen sinflari (Product, Customer, Order) qat'iy inkapsulyatsiyalangan bo'lishi lozim."
    }
  },
  {
    "id": 14,
    "tier": 1,
    "tierName": "1-Bosqich: Inkapsulyatsiya Asoslari va Maydonlarni Yashirish",
    "sector": "1-15: Data Hiding & Accessors",
    "title": {
      "uz": "14. UzAirways — Bir Nechta Xususiy Maydonlarni Xulosalovchi Metod",
      "en": "14. UzAirways — Encapsulated Entity Summary Method"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nAviachipta reys kodi, yo'lovchi ismi va o'rindiq raqamiga ega. Barcha xususiy maydonlarni bitta chiroyli matn shaklida xulosalovchi 'getFlightSummary()' metodini yozing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'FlightTicket' sinfini 3 ta xususiy maydon bilan e'lon qiling: 'flightNo', 'passengerName', 'seatNumber'.\n\n2. 3 parametrli 'public FlightTicket(String flightNo, String passengerName, String seatNumber)' konstruktorini yozing.\n\n3. 'public String getFlightSummary()' metodida maydonlarni birlashtirib reys, yo'lovchi va o'rindiq haqida umumiy satr qaytaring.\n\n4. 'Main' metodida boshlang'ich parametrlar bilan ob'yektni yarating yarating.\n\n5. Konsolga 't.getFlightSummary()' natijasini chiqaring.",
      "en": "📖 Real-World Scenario & Context\nCombine several private fields into a single formatted summary report.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'FlightTicket' with 3 private string fields: flightNo, passengerName, seatNumber.\n\n2. Write 3-parameter constructor initializing all fields.\n\n3. Implement summary method 'public String getFlightSummary()'.\n\n4. In 'main', instantiate instantiate object with starting values.\n\n5. Print summary string."
    },
    "story": {
      "uz": "Aviachipta reys kodi, yo'lovchi ismi va o'rindiq raqamiga ega. Barcha xususiy maydonlarni bitta chiroyli matn shaklida xulosalovchi 'getFlightSummary()' metodini yozing.",
      "en": "Combine several private fields into a single formatted summary report."
    },
    "steps": {
      "uz": [
        "'FlightTicket' sinfini 3 ta xususiy maydon bilan e'lon qiling: 'flightNo', 'passengerName', 'seatNumber'.",
        "3 parametrli 'public FlightTicket(String flightNo, String passengerName, String seatNumber)' konstruktorini yozing.",
        "'public String getFlightSummary()' metodida maydonlarni birlashtirib reys, yo'lovchi va o'rindiq haqida umumiy satr qaytaring.",
        "'Main' metodida boshlang'ich parametrlar bilan ob'yektni yarating yarating.",
        "Konsolga 't.getFlightSummary()' natijasini chiqaring."
      ],
      "en": [
        "Declare class 'FlightTicket' with 3 private string fields: flightNo, passengerName, seatNumber.",
        "Write 3-parameter constructor initializing all fields.",
        "Implement summary method 'public String getFlightSummary()'.",
        "In 'main', instantiate instantiate object with starting values.",
        "Print summary string."
      ]
    },
    "requirements": {
      "classes": [
        "FlightTicket",
        "Main"
      ],
      "privateFields": [
        "flightNo",
        "passengerName",
        "seatNumber"
      ],
      "methods": [
        "getFlightSummary"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class FlightTicket {\n    // 1. Xususiy (private) maydonlarni e'lon qiling\n\n    // 2. Parametrli konstruktorni yozing\n\n    // 3. Talab qilingan getter metodlarini yarating\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FlightTicket t = new FlightTicket(\"HY-051\", \"Anvar\", \"14B\");\n        System.out.println(t.getFlightSummary());\n    }\n}",
    "solution": "class FlightTicket {\n    private String flightNo;\n    private String passengerName;\n    private String seatNumber;\n\n    public FlightTicket(String flightNo, String passengerName, String seatNumber) {\n        this.flightNo = flightNo;\n        this.passengerName = passengerName;\n        this.seatNumber = seatNumber;\n    }\n\n    public String getFlightSummary() {\n        return \"Reys: \" + this.flightNo + \" | Yo'lovchi: \" + this.passengerName + \" | O'rindiq: \" + this.seatNumber;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FlightTicket t = new FlightTicket(\"HY-051\", \"Anvar\", \"14B\");\n        System.out.println(t.getFlightSummary());\n    }\n}",
    "sampleData": [
      "Reys: HY-051 | Yo'lovchi: Anvar | O'rindiq: 14B"
    ],
    "expectedOutput": "Reys: HY-051 | Yo'lovchi: Anvar | O'rindiq: 14B",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya (Encapsulation) — obyektga yo'naltirilgan dasturlashning asosiy ustuni bo'lib, sinfning ichki holatini tashqi to'g'ridan-to'g'ri aralashuvlardan himoya qiladi. Ma'lumotlarga kirish faqat ommaviy getter va setterlar orqali amalga oshiriladi.",
      "theoryEn": "Encapsulation safeguards internal object state by making fields private and restricting mutations through controlled public accessors.",
      "cleanCode": "class FlightTicket {\n    private String flightNo;\n    private String passengerName;\n    private String seatNumber;\n\n    public FlightTicket(String flightNo, String passengerName, String seatNumber) {\n        this.flightNo = flightNo;\n        this.passengerName = passengerName;\n        this.seatNumber = seatNumber;\n    }\n\n    public String getFlightSummary() {\n        return \"Reys: \" + this.flightNo + \" | Yo'lovchi: \" + this.passengerName + \" | O'rindiq: \" + this.seatNumber;\n    }\n}",
      "breakdown": [
        "<code>private</code>: Maydon to'g'ridan-to'g'ri tashqaridan o'zgartirilishdan himoyalangan.",
        "<code>FlightTicket</code>: Toza inkapsulyatsiya va ma'lumotlar xavfsizligi kafolatlangan."
      ],
      "pitfalls": "Maydonlarni ochiq (public) qoldirmang; barcha xususiy atributlar 'private' bo'lishi shart.",
      "cw2Tip": "CW2 Order Applicationda barcha domen sinflari (Product, Customer, Order) qat'iy inkapsulyatsiyalangan bo'lishi lozim."
    }
  },
  {
    "id": 15,
    "tier": 1,
    "tierName": "1-Bosqich: Inkapsulyatsiya Asoslari va Maydonlarni Yashirish",
    "sector": "1-15: Data Hiding & Accessors",
    "title": {
      "uz": "15. WIUT SRS — Talaba Akademik Profilining To'liq Himoyasi",
      "en": "15. WIUT SRS — Complete Student Profile Encapsulation Master"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nTalaba profili ID, ism, GPA va o'qishda faollik holatiga ega. Bo'shliqlarni tozalash, 2 xona yaxlitlash va boolean qoidalarini jamlagan to'liq inkapsulyatsiyalangan klass tuzing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'StudentRecord' sinfini e'lon qiling: 'studentId' (String), 'fullName' (String), 'gpa' (double), 'active' (boolean).\n\n2. 4 parametrli 'public StudentRecord(...)' konstruktorini yozing.\n\n3. 'public String getAcademicSummary()' metodida: ism bo'shligini tozalang, GPA ni 2 xonagacha yaxlitlang va to'liq profil ma'lumotlarini qaytaring.\n\n4. 'Main' metodida boshlang'ich parametrlar bilan ob'yektini yarating.\n\n5. Konsolga 'sr.getAcademicSummary()' natijasini chiqaring.",
      "en": "📖 Real-World Scenario & Context\nCombine all Tier 1 encapsulation principles into a comprehensive student academic record.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'StudentRecord' with studentId, fullName, gpa, and active status fields.\n\n2. Write 4-parameter constructor initializing all state.\n\n3. Implement master accessor 'public String getAcademicSummary()' applying trimming, GPA rounding, and status formatting.\n\n4. Instantiate object with starting values in 'main'.\n\n5. Print academic summary string."
    },
    "story": {
      "uz": "Talaba profili ID, ism, GPA va o'qishda faollik holatiga ega. Bo'shliqlarni tozalash, 2 xona yaxlitlash va boolean qoidalarini jamlagan to'liq inkapsulyatsiyalangan klass tuzing.",
      "en": "Combine all Tier 1 encapsulation principles into a comprehensive student academic record."
    },
    "steps": {
      "uz": [
        "'StudentRecord' sinfini e'lon qiling: 'studentId' (String), 'fullName' (String), 'gpa' (double), 'active' (boolean).",
        "4 parametrli 'public StudentRecord(...)' konstruktorini yozing.",
        "'public String getAcademicSummary()' metodida: ism bo'shligini tozalang, GPA ni 2 xonagacha yaxlitlang va to'liq profil ma'lumotlarini qaytaring.",
        "'Main' metodida boshlang'ich parametrlar bilan ob'yektini yarating.",
        "Konsolga 'sr.getAcademicSummary()' natijasini chiqaring."
      ],
      "en": [
        "Declare class 'StudentRecord' with studentId, fullName, gpa, and active status fields.",
        "Write 4-parameter constructor initializing all state.",
        "Implement master accessor 'public String getAcademicSummary()' applying trimming, GPA rounding, and status formatting.",
        "Instantiate object with starting values in 'main'.",
        "Print academic summary string."
      ]
    },
    "requirements": {
      "classes": [
        "StudentRecord",
        "Main"
      ],
      "privateFields": [
        "studentId",
        "fullName",
        "gpa",
        "active"
      ],
      "methods": [
        "getAcademicSummary"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class StudentRecord {\n    // 1. Xususiy (private) maydonlarni e'lon qiling\n\n    // 2. Parametrli konstruktorni yozing\n\n    // 3. Talab qilingan getter metodlarini yarating\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StudentRecord sr = new StudentRecord(\"00012345\", \"  Nodira  \", 3.846, true);\n        System.out.println(sr.getAcademicSummary());\n    }\n}",
    "solution": "class StudentRecord {\n    private String studentId;\n    private String fullName;\n    private double gpa;\n    private boolean active;\n\n    public StudentRecord(String studentId, String fullName, double gpa, boolean active) {\n        this.studentId = studentId;\n        this.fullName = fullName;\n        this.gpa = gpa;\n        this.active = active;\n    }\n\n    public String getAcademicSummary() {\n        String cleanName = this.fullName == null ? \"Unknown\" : this.fullName.trim();\n        double roundedGpa = Math.round(this.gpa * 100.0) / 100.0;\n        return \"Talaba: \" + cleanName + \" [ID: \" + this.studentId + \"] | GPA: \" + roundedGpa + \" | Faol: \" + this.active;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StudentRecord sr = new StudentRecord(\"00012345\", \"  Nodira  \", 3.846, true);\n        System.out.println(sr.getAcademicSummary());\n    }\n}",
    "sampleData": [
      "Talaba: Nodira [ID: 00012345] | GPA: 3.85 | Faol: true"
    ],
    "expectedOutput": "Talaba: Nodira [ID: 00012345] | GPA: 3.85 | Faol: true",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya (Encapsulation) — obyektga yo'naltirilgan dasturlashning asosiy ustuni bo'lib, sinfning ichki holatini tashqi to'g'ridan-to'g'ri aralashuvlardan himoya qiladi. Ma'lumotlarga kirish faqat ommaviy getter va setterlar orqali amalga oshiriladi.",
      "theoryEn": "Encapsulation safeguards internal object state by making fields private and restricting mutations through controlled public accessors.",
      "cleanCode": "class StudentRecord {\n    private String studentId;\n    private String fullName;\n    private double gpa;\n    private boolean active;\n\n    public StudentRecord(String studentId, String fullName, double gpa, boolean active) {\n        this.studentId = studentId;\n        this.fullName = fullName;\n        this.gpa = gpa;\n        this.active = active;\n    }\n\n    public String getAcademicSummary() {\n        String cleanName = this.fullName == null ? \"Unknown\" : this.fullName.trim();\n        double roundedGpa = Math.round(this.gpa * 100.0) / 100.0;\n        return \"Talaba: \" + cleanName + \" [ID: \" + this.studentId + \"] | GPA: \" + roundedGpa + \" | Faol: \" + this.active;\n    }\n}",
      "breakdown": [
        "<code>private</code>: Maydon to'g'ridan-to'g'ri tashqaridan o'zgartirilishdan himoyalangan.",
        "<code>StudentRecord</code>: Toza inkapsulyatsiya va ma'lumotlar xavfsizligi kafolatlangan."
      ],
      "pitfalls": "Maydonlarni ochiq (public) qoldirmang; barcha xususiy atributlar 'private' bo'lishi shart.",
      "cw2Tip": "CW2 Order Applicationda barcha domen sinflari (Product, Customer, Order) qat'iy inkapsulyatsiyalangan bo'lishi lozim."
    }
  },
  {
    "id": 16,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Metodlari, Validatsiya va 'this' Kalit So'zi",
    "sector": "16-30: Setters & Mutation Rules",
    "title": {
      "uz": "16. Uzum Market — Parametr Soyalanishi (Shadowing) va 'this.price = price'",
      "en": "16. Uzum Market — Shadowing Resolution with 'this.price = price'"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT leksiyasida ta'kidlanganidek: setter parametri maydon bilan bir xil nomlanganda 'this' kalit so'zi parametrni sinf maydonidan ajratish uchun shart. 'setPrice(double price)' metodini yozing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'ProductPricing' klassini va xususiy (private) double toifasidagi 'price' maydonini e'lon qiling.\n\n2. 'public ProductPricing(double price)' konstruktorini yozing.\n\n3. 'public double getPrice()' getterini taqdim eting.\n\n4. Parametr maydon nomini berkitishini (shadowing) bartaraf etish uchun 'this' orqali 'price' maydoniga qiymat bering dan foydalanib 'public void setPrice(double price)' setterni yozing.\n\n5. 'Main' metodida narxni 18000.0 ga yangilab, yangilangan narxni ekranga chiqaring.",
      "en": "📖 Real-World Scenario & Context\nResolve naming collisions between parameters and fields using 'this.field = field' syntax.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'ProductPricing' with private double field 'price'.\n\n2. Write constructor 'public ProductPricing(double price)'.\n\n3. Write accessor 'public double getPrice()'.\n\n4. Implement mutator 'public void setPrice(double price)' resolving shadowing via assign parameter to 'price' field via 'this'.\n\n5. In 'main', update price to 18000.0 and print updated price."
    },
    "story": {
      "uz": "WIUT leksiyasida ta'kidlanganidek: setter parametri maydon bilan bir xil nomlanganda 'this' kalit so'zi parametrni sinf maydonidan ajratish uchun shart. 'setPrice(double price)' metodini yozing.",
      "en": "Resolve naming collisions between parameters and fields using 'this.field = field' syntax."
    },
    "steps": {
      "uz": [
        "'ProductPricing' klassini va xususiy (private) double toifasidagi 'price' maydonini e'lon qiling.",
        "'public ProductPricing(double price)' konstruktorini yozing.",
        "'public double getPrice()' getterini taqdim eting.",
        "Parametr maydon nomini berkitishini (shadowing) bartaraf etish uchun 'this' orqali 'price' maydoniga qiymat bering dan foydalanib 'public void setPrice(double price)' setterni yozing.",
        "'Main' metodida narxni 18000.0 ga yangilab, yangilangan narxni ekranga chiqaring."
      ],
      "en": [
        "Declare class 'ProductPricing' with private double field 'price'.",
        "Write constructor 'public ProductPricing(double price)'.",
        "Write accessor 'public double getPrice()'.",
        "Implement mutator 'public void setPrice(double price)' resolving shadowing via assign parameter to 'price' field via 'this'.",
        "In 'main', update price to 18000.0 and print updated price."
      ]
    },
    "requirements": {
      "classes": [
        "ProductPricing",
        "Main"
      ],
      "privateFields": [
        "price"
      ],
      "methods": [
        "getPrice",
        "setPrice"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class ProductPricing {\n    // TODO: Maydonlar, konstruktor, getter va validatsiyali setterni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ProductPricing p = new ProductPricing(10000.0);\n        p.setPrice(18000.0);\n        System.out.println(\"Yangilangan narx: \" + p.getPrice() + \" UZS\");\n    }\n}",
    "solution": "class ProductPricing {\n    private double price;\n\n    public ProductPricing(double price) {\n        this.price = price;\n    }\n\n    public double getPrice() {\n        return this.price;\n    }\n\n    public void setPrice(double price) {\n        this.price = price;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ProductPricing p = new ProductPricing(10000.0);\n        p.setPrice(18000.0);\n        System.out.println(\"Yangilangan narx: \" + p.getPrice() + \" UZS\");\n    }\n}",
    "sampleData": [
      "Yangilangan narx: 18000.0 UZS"
    ],
    "expectedOutput": "Yangilangan narx: 18000.0 UZS",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya (Encapsulation) — obyektga yo'naltirilgan dasturlashning asosiy ustuni bo'lib, sinfning ichki holatini tashqi to'g'ridan-to'g'ri aralashuvlardan himoya qiladi. Ma'lumotlarga kirish faqat ommaviy getter va setterlar orqali amalga oshiriladi.",
      "theoryEn": "Encapsulation safeguards internal object state by making fields private and restricting mutations through controlled public accessors.",
      "cleanCode": "class ProductPricing {\n    private double price;\n\n    public ProductPricing(double price) {\n        this.price = price;\n    }\n\n    public double getPrice() {\n        return this.price;\n    }\n\n    public void setPrice(double price) {\n        this.price = price;\n    }\n}",
      "breakdown": [
        "<code>private</code>: Maydon to'g'ridan-to'g'ri tashqaridan o'zgartirilishdan himoyalangan.",
        "<code>ProductPricing</code>: Toza inkapsulyatsiya va ma'lumotlar xavfsizligi kafolatlangan."
      ],
      "pitfalls": "Maydonlarni ochiq (public) qoldirmang; barcha xususiy atributlar 'private' bo'lishi shart.",
      "cw2Tip": "CW2 Order Applicationda barcha domen sinflari (Product, Customer, Order) qat'iy inkapsulyatsiyalangan bo'lishi lozim."
    }
  },
  {
    "id": 17,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Metodlari, Validatsiya va 'this' Kalit So'zi",
    "sector": "16-30: Setters & Mutation Rules",
    "title": {
      "uz": "17. Payme — Manfiy Narxni Rad Etuvchi Setter (Seminar 2 Product.java)",
      "en": "17. Payme — Negative Value Rejection with Warning in Setter"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSeminar 2 rasmiy kodida: 'setPrice(double price)' metodida agar 'price < 0' bo'lsa 'Price cannot be negative - price was not changed.' xabari chiqadi va qiymat o'zgarmaydi. Aynan shu mantiqni bajaring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'PaymentItem' sinfini va xususiy (private) double toifasidagi 'price' maydonini e'lon qiling.\n\n2. 'public PaymentItem(double price)' konstruktorini yozing.\n\n3. 'public double getPrice()' getterini yozing.\n\n4. WIUT Seminar 2 qoidasiga ko'ra 'public void setPrice(double price)' setterida: agar narx manfiy bo'lsa 'Price cannot be negative - price was not changed.' deb ogohlantirib, qiymatni o'zgartirmang.\n\n5. 'Main' metodida manfiy (-100.0) narx berib, xabar va narx holatini tekshiring.",
      "en": "📖 Real-World Scenario & Context\nImplement price setter that declines negative values and outputs standard Seminar 2 notice.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'PaymentItem' with private double field 'price'.\n\n2. Write constructor 'public PaymentItem(double price)'.\n\n3. Write accessor 'public double getPrice()'.\n\n4. In 'setPrice(double price)', apply Seminar 2 rule: print warning and reject negative values.\n\n5. In 'main', attempt setting negative price and print resulting state."
    },
    "story": {
      "uz": "Seminar 2 rasmiy kodida: 'setPrice(double price)' metodida agar 'price < 0' bo'lsa 'Price cannot be negative - price was not changed.' xabari chiqadi va qiymat o'zgarmaydi. Aynan shu mantiqni bajaring.",
      "en": "Implement price setter that declines negative values and outputs standard Seminar 2 notice."
    },
    "steps": {
      "uz": [
        "'PaymentItem' sinfini va xususiy (private) double toifasidagi 'price' maydonini e'lon qiling.",
        "'public PaymentItem(double price)' konstruktorini yozing.",
        "'public double getPrice()' getterini yozing.",
        "WIUT Seminar 2 qoidasiga ko'ra 'public void setPrice(double price)' setterida: agar narx manfiy bo'lsa 'Price cannot be negative - price was not changed.' deb ogohlantirib, qiymatni o'zgartirmang.",
        "'Main' metodida manfiy (-100.0) narx berib, xabar va narx holatini tekshiring."
      ],
      "en": [
        "Declare class 'PaymentItem' with private double field 'price'.",
        "Write constructor 'public PaymentItem(double price)'.",
        "Write accessor 'public double getPrice()'.",
        "In 'setPrice(double price)', apply Seminar 2 rule: print warning and reject negative values.",
        "In 'main', attempt setting negative price and print resulting state."
      ]
    },
    "requirements": {
      "classes": [
        "PaymentItem",
        "Main"
      ],
      "privateFields": [
        "price"
      ],
      "methods": [
        "getPrice",
        "setPrice"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class PaymentItem {\n    // TODO: Maydonlar, konstruktor, getter va validatsiyali setterni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentItem item = new PaymentItem(50000.0);\n        item.setPrice(-100.0);\n        System.out.println(\"Narx holati: \" + item.getPrice() + \" UZS\");\n    }\n}",
    "solution": "class PaymentItem {\n    private double price;\n\n    public PaymentItem(double price) {\n        this.price = price;\n    }\n\n    public double getPrice() {\n        return this.price;\n    }\n\n    public void setPrice(double price) {\n        if (price < 0) {\n            System.out.println(\"Price cannot be negative - price was not changed.\");\n            return;\n        }\n        this.price = price;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentItem item = new PaymentItem(50000.0);\n        item.setPrice(-100.0);\n        System.out.println(\"Narx holati: \" + item.getPrice() + \" UZS\");\n    }\n}",
    "sampleData": [
      "Price cannot be negative - price was not changed.\nNarx holati: 50000.0 UZS"
    ],
    "expectedOutput": "Price cannot be negative - price was not changed.\nNarx holati: 50000.0 UZS",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya (Encapsulation) — obyektga yo'naltirilgan dasturlashning asosiy ustuni bo'lib, sinfning ichki holatini tashqi to'g'ridan-to'g'ri aralashuvlardan himoya qiladi. Ma'lumotlarga kirish faqat ommaviy getter va setterlar orqali amalga oshiriladi.",
      "theoryEn": "Encapsulation safeguards internal object state by making fields private and restricting mutations through controlled public accessors.",
      "cleanCode": "class PaymentItem {\n    private double price;\n\n    public PaymentItem(double price) {\n        this.price = price;\n    }\n\n    public double getPrice() {\n        return this.price;\n    }\n\n    public void setPrice(double price) {\n        if (price < 0) {\n            System.out.println(\"Price cannot be negative - price was not changed.\");\n            return;\n        }\n        this.price = price;\n    }\n}",
      "breakdown": [
        "<code>private</code>: Maydon to'g'ridan-to'g'ri tashqaridan o'zgartirilishdan himoyalangan.",
        "<code>PaymentItem</code>: Toza inkapsulyatsiya va ma'lumotlar xavfsizligi kafolatlangan."
      ],
      "pitfalls": "Maydonlarni ochiq (public) qoldirmang; barcha xususiy atributlar 'private' bo'lishi shart.",
      "cw2Tip": "CW2 Order Applicationda barcha domen sinflari (Product, Customer, Order) qat'iy inkapsulyatsiyalangan bo'lishi lozim."
    }
  },
  {
    "id": 18,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Metodlari, Validatsiya va 'this' Kalit So'zi",
    "sector": "16-30: Setters & Mutation Rules",
    "title": {
      "uz": "18. Korzinka — Bo'sh Matnni Rad Etuvchi Setter (Product.setName)",
      "en": "18. Korzinka — Blank/Null String Rejection Matching Product.java"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSeminar 2 yechimida: 'if (name == null || name.isBlank()) { System.out.println(\"Invalid name - name was not changed.\"); return; }'. Nomi bo'sh yoki faqat probeldan iborat bo'lsa rad etuvchi setterni yozing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'GroceryItem' klassini va unga xususiy (private) String toifasidagi 'name' maydonini qo'shing.\n\n2. 'public GroceryItem(String name)' konstruktorini yozing.\n\n3. 'public String getName()' getterini yozing.\n\n4. WIUT Seminar 2 qoidasi bo'yicha 'public void setName(String name)' setterida: agar ism null yoki bo'sh (isBlank) bo'lsa 'Invalid name - name was not changed.' deb chiqaring va o'zgartirishni rad eting.\n\n5. 'Main' metodida bo'sh joylardan iborat satr berib tekshiring.",
      "en": "📖 Real-World Scenario & Context\nEnforce non-blank, non-null string invariant in setter matching Seminar 2 solution.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'GroceryItem' with private String field 'name'.\n\n2. Write constructor 'public GroceryItem(String name)'.\n\n3. Write accessor 'public String getName()'.\n\n4. In 'setName(String name)', reject null or blank strings printing Seminar 2 warning.\n\n5. In 'main', attempt setting blank name and print output."
    },
    "story": {
      "uz": "Seminar 2 yechimida: 'if (name == null || name.isBlank()) { System.out.println(\"Invalid name - name was not changed.\"); return; }'. Nomi bo'sh yoki faqat probeldan iborat bo'lsa rad etuvchi setterni yozing.",
      "en": "Enforce non-blank, non-null string invariant in setter matching Seminar 2 solution."
    },
    "steps": {
      "uz": [
        "'GroceryItem' klassini va unga xususiy (private) String toifasidagi 'name' maydonini qo'shing.",
        "'public GroceryItem(String name)' konstruktorini yozing.",
        "'public String getName()' getterini yozing.",
        "WIUT Seminar 2 qoidasi bo'yicha 'public void setName(String name)' setterida: agar ism null yoki bo'sh (isBlank) bo'lsa 'Invalid name - name was not changed.' deb chiqaring va o'zgartirishni rad eting.",
        "'Main' metodida bo'sh joylardan iborat satr berib tekshiring."
      ],
      "en": [
        "Declare class 'GroceryItem' with private String field 'name'.",
        "Write constructor 'public GroceryItem(String name)'.",
        "Write accessor 'public String getName()'.",
        "In 'setName(String name)', reject null or blank strings printing Seminar 2 warning.",
        "In 'main', attempt setting blank name and print output."
      ]
    },
    "requirements": {
      "classes": [
        "GroceryItem",
        "Main"
      ],
      "privateFields": [
        "name"
      ],
      "methods": [
        "getName",
        "setName"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class GroceryItem {\n    // TODO: Maydonlar, konstruktor, getter va validatsiyali setterni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GroceryItem item = new GroceryItem(\"Shakar\");\n        item.setName(\"   \");\n        System.out.println(\"Mahsulot nomi: \" + item.getName());\n    }\n}",
    "solution": "class GroceryItem {\n    private String name;\n\n    public GroceryItem(String name) {\n        this.name = name;\n    }\n\n    public String getName() {\n        return this.name;\n    }\n\n    public void setName(String name) {\n        if (name == null || name.isBlank()) {\n            System.out.println(\"Invalid name - name was not changed.\");\n            return;\n        }\n        this.name = name;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GroceryItem item = new GroceryItem(\"Shakar\");\n        item.setName(\"   \");\n        System.out.println(\"Mahsulot nomi: \" + item.getName());\n    }\n}",
    "sampleData": [
      "Invalid name - name was not changed.\nMahsulot nomi: Shakar"
    ],
    "expectedOutput": "Invalid name - name was not changed.\nMahsulot nomi: Shakar",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya (Encapsulation) — obyektga yo'naltirilgan dasturlashning asosiy ustuni bo'lib, sinfning ichki holatini tashqi to'g'ridan-to'g'ri aralashuvlardan himoya qiladi. Ma'lumotlarga kirish faqat ommaviy getter va setterlar orqali amalga oshiriladi.",
      "theoryEn": "Encapsulation safeguards internal object state by making fields private and restricting mutations through controlled public accessors.",
      "cleanCode": "class GroceryItem {\n    private String name;\n\n    public GroceryItem(String name) {\n        this.name = name;\n    }\n\n    public String getName() {\n        return this.name;\n    }\n\n    public void setName(String name) {\n        if (name == null || name.isBlank()) {\n            System.out.println(\"Invalid name - name was not changed.\");\n            return;\n        }\n        this.name = name;\n    }\n}",
      "breakdown": [
        "<code>private</code>: Maydon to'g'ridan-to'g'ri tashqaridan o'zgartirilishdan himoyalangan.",
        "<code>GroceryItem</code>: Toza inkapsulyatsiya va ma'lumotlar xavfsizligi kafolatlangan."
      ],
      "pitfalls": "Maydonlarni ochiq (public) qoldirmang; barcha xususiy atributlar 'private' bo'lishi shart.",
      "cw2Tip": "CW2 Order Applicationda barcha domen sinflari (Product, Customer, Order) qat'iy inkapsulyatsiyalangan bo'lishi lozim."
    }
  },
  {
    "id": 19,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Metodlari, Validatsiya va 'this' Kalit So'zi",
    "sector": "16-30: Setters & Mutation Rules",
    "title": {
      "uz": "19. Yandex Go — Oraliqni Tekshiruvchi Setter (0 dan 100 gacha)",
      "en": "19. Yandex Go — Strict Range Boundary Enforcement Setter"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nTaksi haydovchisining qoniqish ko'rsatkichi faqat 0 dan 100% gacha bo'lishi mumkin. Agar kiritilgan son oraliqda bo'lmasa rad etuvchi setterni dasturlang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'DriverScore' klassini oching: xususiy (private) int toifasidagi 'satisfactionPercent' maydoni bilan.\n\n2. 'public DriverScore(int satisfactionPercent)' konstruktorini yozing.\n\n3. 'public int getSatisfactionPercent()' getterini yozing.\n\n4. 'public void setSatisfactionPercent(int satisfactionPercent)' setterida faqat 0 dan 100 gacha bo'lgan foizlarni qabul qiling.\n\n5. 'Main' metodida 120 foiz kiritib, chegaradan tashqari qiymat rad etilganini tekshiring.",
      "en": "📖 Real-World Scenario & Context\nValidate that updated percentage falls strictly between 0 and 100 inclusive.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'DriverScore' with private int field 'satisfactionPercent'.\n\n2. Write constructor 'public DriverScore(int satisfactionPercent)'.\n\n3. Write accessor 'public int getSatisfactionPercent()'.\n\n4. Implement 'setSatisfactionPercent' validating 0 <= percentage <= 100.\n\n5. In 'main', pass 120 and confirm out-of-range value is discarded."
    },
    "story": {
      "uz": "Taksi haydovchisining qoniqish ko'rsatkichi faqat 0 dan 100% gacha bo'lishi mumkin. Agar kiritilgan son oraliqda bo'lmasa rad etuvchi setterni dasturlang.",
      "en": "Validate that updated percentage falls strictly between 0 and 100 inclusive."
    },
    "steps": {
      "uz": [
        "'DriverScore' klassini oching: xususiy (private) int toifasidagi 'satisfactionPercent' maydoni bilan.",
        "'public DriverScore(int satisfactionPercent)' konstruktorini yozing.",
        "'public int getSatisfactionPercent()' getterini yozing.",
        "'public void setSatisfactionPercent(int satisfactionPercent)' setterida faqat 0 dan 100 gacha bo'lgan foizlarni qabul qiling.",
        "'Main' metodida 120 foiz kiritib, chegaradan tashqari qiymat rad etilganini tekshiring."
      ],
      "en": [
        "Declare class 'DriverScore' with private int field 'satisfactionPercent'.",
        "Write constructor 'public DriverScore(int satisfactionPercent)'.",
        "Write accessor 'public int getSatisfactionPercent()'.",
        "Implement 'setSatisfactionPercent' validating 0 <= percentage <= 100.",
        "In 'main', pass 120 and confirm out-of-range value is discarded."
      ]
    },
    "requirements": {
      "classes": [
        "DriverScore",
        "Main"
      ],
      "privateFields": [
        "satisfactionPercent"
      ],
      "methods": [
        "getSatisfactionPercent",
        "setSatisfactionPercent"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class DriverScore {\n    // TODO: Maydonlar, konstruktor, getter va validatsiyali setterni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DriverScore ds = new DriverScore(90);\n        ds.setSatisfactionPercent(120);\n        System.out.println(\"Ko'rsatkich: \" + ds.getSatisfactionPercent() + \"%\");\n    }\n}",
    "solution": "class DriverScore {\n    private int satisfactionPercent;\n\n    public DriverScore(int satisfactionPercent) {\n        this.satisfactionPercent = satisfactionPercent;\n    }\n\n    public int getSatisfactionPercent() {\n        return this.satisfactionPercent;\n    }\n\n    public void setSatisfactionPercent(int satisfactionPercent) {\n        if (satisfactionPercent >= 0 && satisfactionPercent <= 100) {\n            this.satisfactionPercent = satisfactionPercent;\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DriverScore ds = new DriverScore(90);\n        ds.setSatisfactionPercent(120);\n        System.out.println(\"Ko'rsatkich: \" + ds.getSatisfactionPercent() + \"%\");\n    }\n}",
    "sampleData": [
      "Ko'rsatkich: 90%"
    ],
    "expectedOutput": "Ko'rsatkich: 90%",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya (Encapsulation) — obyektga yo'naltirilgan dasturlashning asosiy ustuni bo'lib, sinfning ichki holatini tashqi to'g'ridan-to'g'ri aralashuvlardan himoya qiladi. Ma'lumotlarga kirish faqat ommaviy getter va setterlar orqali amalga oshiriladi.",
      "theoryEn": "Encapsulation safeguards internal object state by making fields private and restricting mutations through controlled public accessors.",
      "cleanCode": "class DriverScore {\n    private int satisfactionPercent;\n\n    public DriverScore(int satisfactionPercent) {\n        this.satisfactionPercent = satisfactionPercent;\n    }\n\n    public int getSatisfactionPercent() {\n        return this.satisfactionPercent;\n    }\n\n    public void setSatisfactionPercent(int satisfactionPercent) {\n        if (satisfactionPercent >= 0 && satisfactionPercent <= 100) {\n            this.satisfactionPercent = satisfactionPercent;\n        }\n    }\n}",
      "breakdown": [
        "<code>private</code>: Maydon to'g'ridan-to'g'ri tashqaridan o'zgartirilishdan himoyalangan.",
        "<code>DriverScore</code>: Toza inkapsulyatsiya va ma'lumotlar xavfsizligi kafolatlangan."
      ],
      "pitfalls": "Maydonlarni ochiq (public) qoldirmang; barcha xususiy atributlar 'private' bo'lishi shart.",
      "cw2Tip": "CW2 Order Applicationda barcha domen sinflari (Product, Customer, Order) qat'iy inkapsulyatsiyalangan bo'lishi lozim."
    }
  },
  {
    "id": 20,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Metodlari, Validatsiya va 'this' Kalit So'zi",
    "sector": "16-30: Setters & Mutation Rules",
    "title": {
      "uz": "20. Click — Miqdorga Bog'liq Ravishda inStock Holatini Yangilash",
      "en": "20. Click — Interconnected Setter Triggering InStock Flag Update"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nTovar miqdori o'zgarganda 'inStock' bayrog'i avtomatik yangilanishi kerak: agar yangi miqdor 0 bo'lsa 'inStock = false', aks holda 'true' bo'ladi. Ushbu bog'liqlikni setter ichida bajaring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'ProductStockSync' sinfini xususiy (private) int toifasidagi 'quantity' va xususiy (private) boolean toifasidagi 'inStock' maydonlari bilan oching.\n\n2. 'public ProductStockSync(int quantity)' konstruktorida 'setQuantity(quantity)' chaqiring.\n\n3. 'public int getQuantity()' va 'public boolean isInStock()' getterlarini yozing.\n\n4. 'public void setQuantity(int quantity)' setterida miqdorni o'rnatish bilan birga 'this' orqali 'inStock' maydoniga qiymat bering qilib holatni avtomatik yangilang.\n\n5. 'Main' metodida miqdorni 0 ga o'zgartirib, 'isInStock()' false bo'lganini tasdiqlang.",
      "en": "📖 Real-World Scenario & Context\nQuantity setter automatically updates internal inStock boolean flag based on inventory level.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'ProductStockSync' with quantity and inStock fields.\n\n2. Write constructor initializing state via 'setQuantity(quantity)'.\n\n3. Implement accessors 'getQuantity()' and 'isInStock()'.\n\n4. In 'setQuantity(int quantity)', synchronize assign parameter to 'inStock' field via 'this' as side-effect.\n\n5. In 'main', set quantity to 0 and verify inStock becomes false."
    },
    "story": {
      "uz": "Tovar miqdori o'zgarganda 'inStock' bayrog'i avtomatik yangilanishi kerak: agar yangi miqdor 0 bo'lsa 'inStock = false', aks holda 'true' bo'ladi. Ushbu bog'liqlikni setter ichida bajaring.",
      "en": "Quantity setter automatically updates internal inStock boolean flag based on inventory level."
    },
    "steps": {
      "uz": [
        "'ProductStockSync' sinfini xususiy (private) int toifasidagi 'quantity' va xususiy (private) boolean toifasidagi 'inStock' maydonlari bilan oching.",
        "'public ProductStockSync(int quantity)' konstruktorida 'setQuantity(quantity)' chaqiring.",
        "'public int getQuantity()' va 'public boolean isInStock()' getterlarini yozing.",
        "'public void setQuantity(int quantity)' setterida miqdorni o'rnatish bilan birga 'this' orqali 'inStock' maydoniga qiymat bering qilib holatni avtomatik yangilang.",
        "'Main' metodida miqdorni 0 ga o'zgartirib, 'isInStock()' false bo'lganini tasdiqlang."
      ],
      "en": [
        "Declare class 'ProductStockSync' with quantity and inStock fields.",
        "Write constructor initializing state via 'setQuantity(quantity)'.",
        "Implement accessors 'getQuantity()' and 'isInStock()'.",
        "In 'setQuantity(int quantity)', synchronize assign parameter to 'inStock' field via 'this' as side-effect.",
        "In 'main', set quantity to 0 and verify inStock becomes false."
      ]
    },
    "requirements": {
      "classes": [
        "ProductStockSync",
        "Main"
      ],
      "privateFields": [
        "quantity",
        "inStock"
      ],
      "methods": [
        "getQuantity",
        "setQuantity",
        "isInStock"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class ProductStockSync {\n    // TODO: Maydonlar, konstruktor, getter va validatsiyali setterni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ProductStockSync stock = new ProductStockSync(10);\n        stock.setQuantity(0);\n        System.out.println(\"Omborda bormi: \" + stock.isInStock());\n    }\n}",
    "solution": "class ProductStockSync {\n    private int quantity;\n    private boolean inStock;\n\n    public ProductStockSync(int quantity) {\n        this.setQuantity(quantity);\n    }\n\n    public int getQuantity() {\n        return this.quantity;\n    }\n\n    public boolean isInStock() {\n        return this.inStock;\n    }\n\n    public void setQuantity(int quantity) {\n        if (quantity >= 0) {\n            this.quantity = quantity;\n            this.inStock = (quantity > 0);\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ProductStockSync stock = new ProductStockSync(10);\n        stock.setQuantity(0);\n        System.out.println(\"Omborda bormi: \" + stock.isInStock());\n    }\n}",
    "sampleData": [
      "Omborda bormi: false"
    ],
    "expectedOutput": "Omborda bormi: false",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya (Encapsulation) — obyektga yo'naltirilgan dasturlashning asosiy ustuni bo'lib, sinfning ichki holatini tashqi to'g'ridan-to'g'ri aralashuvlardan himoya qiladi. Ma'lumotlarga kirish faqat ommaviy getter va setterlar orqali amalga oshiriladi.",
      "theoryEn": "Encapsulation safeguards internal object state by making fields private and restricting mutations through controlled public accessors.",
      "cleanCode": "class ProductStockSync {\n    private int quantity;\n    private boolean inStock;\n\n    public ProductStockSync(int quantity) {\n        this.setQuantity(quantity);\n    }\n\n    public int getQuantity() {\n        return this.quantity;\n    }\n\n    public boolean isInStock() {\n        return this.inStock;\n    }\n\n    public void setQuantity(int quantity) {\n        if (quantity >= 0) {\n            this.quantity = quantity;\n            this.inStock = (quantity > 0);\n        }\n    }\n}",
      "breakdown": [
        "<code>private</code>: Maydon to'g'ridan-to'g'ri tashqaridan o'zgartirilishdan himoyalangan.",
        "<code>ProductStockSync</code>: Toza inkapsulyatsiya va ma'lumotlar xavfsizligi kafolatlangan."
      ],
      "pitfalls": "Maydonlarni ochiq (public) qoldirmang; barcha xususiy atributlar 'private' bo'lishi shart.",
      "cw2Tip": "CW2 Order Applicationda barcha domen sinflari (Product, Customer, Order) qat'iy inkapsulyatsiyalangan bo'lishi lozim."
    }
  },
  {
    "id": 21,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Metodlari, Validatsiya va 'this' Kalit So'zi",
    "sector": "16-30: Setters & Mutation Rules",
    "title": {
      "uz": "21. Safia — Matnni Avtomatik Formatlab Saqlovchi Setter",
      "en": "21. Safia — Auto-Normalizing Text Setter Trimming Whitespace"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nMijoz ismini saqlashda boshidagi va oxiridagi bo'shliqlarni olib tashlab, avtomatik 'trim()' qilib xotiraga yozuvchi setterni yozing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'CustomerNameTag' klassini va unga xususiy (private) String toifasidagi 'name' maydonini qo'shing.\n\n2. 'public CustomerNameTag(String name)' konstruktorini yozing.\n\n3. 'public String getName()' getterini yozing.\n\n4. 'public void setName(String name)' setterida kiritilgan satr chetidagi ortiqcha bo'shliqlarni 'name.trim()' orqali avtomatik tozalab saqlang.\n\n5. 'Main' metodida '   Kamola   ' berib, qavs ichida tozalangan natijani chop eting.",
      "en": "📖 Real-World Scenario & Context\nSetter automatically sanitizes incoming text by trimming surrounding whitespace before assigning.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'CustomerNameTag' with private String field 'name'.\n\n2. Write constructor 'public CustomerNameTag(String name)'.\n\n3. Write accessor 'public String getName()'.\n\n4. In 'setName(String name)', sanitize incoming string using 'name.trim()'.\n\n5. In 'main', assign '   Kamola   ' and print trimmed name."
    },
    "story": {
      "uz": "Mijoz ismini saqlashda boshidagi va oxiridagi bo'shliqlarni olib tashlab, avtomatik 'trim()' qilib xotiraga yozuvchi setterni yozing.",
      "en": "Setter automatically sanitizes incoming text by trimming surrounding whitespace before assigning."
    },
    "steps": {
      "uz": [
        "'CustomerNameTag' klassini va unga xususiy (private) String toifasidagi 'name' maydonini qo'shing.",
        "'public CustomerNameTag(String name)' konstruktorini yozing.",
        "'public String getName()' getterini yozing.",
        "'public void setName(String name)' setterida kiritilgan satr chetidagi ortiqcha bo'shliqlarni 'name.trim()' orqali avtomatik tozalab saqlang.",
        "'Main' metodida '   Kamola   ' berib, qavs ichida tozalangan natijani chop eting."
      ],
      "en": [
        "Declare class 'CustomerNameTag' with private String field 'name'.",
        "Write constructor 'public CustomerNameTag(String name)'.",
        "Write accessor 'public String getName()'.",
        "In 'setName(String name)', sanitize incoming string using 'name.trim()'.",
        "In 'main', assign '   Kamola   ' and print trimmed name."
      ]
    },
    "requirements": {
      "classes": [
        "CustomerNameTag",
        "Main"
      ],
      "privateFields": [
        "name"
      ],
      "methods": [
        "getName",
        "setName"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class CustomerNameTag {\n    // TODO: Maydonlar, konstruktor, getter va validatsiyali setterni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CustomerNameTag tag = new CustomerNameTag(\"Eski\");\n        tag.setName(\"   Kamola   \");\n        System.out.println(\"Saqlangan ism: [\" + tag.getName() + \"]\");\n    }\n}",
    "solution": "class CustomerNameTag {\n    private String name;\n\n    public CustomerNameTag(String name) {\n        this.name = name;\n    }\n\n    public String getName() {\n        return this.name;\n    }\n\n    public void setName(String name) {\n        if (name != null) {\n            this.name = name.trim();\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CustomerNameTag tag = new CustomerNameTag(\"Eski\");\n        tag.setName(\"   Kamola   \");\n        System.out.println(\"Saqlangan ism: [\" + tag.getName() + \"]\");\n    }\n}",
    "sampleData": [
      "Saqlangan ism: [Kamola]"
    ],
    "expectedOutput": "Saqlangan ism: [Kamola]",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya (Encapsulation) — obyektga yo'naltirilgan dasturlashning asosiy ustuni bo'lib, sinfning ichki holatini tashqi to'g'ridan-to'g'ri aralashuvlardan himoya qiladi. Ma'lumotlarga kirish faqat ommaviy getter va setterlar orqali amalga oshiriladi.",
      "theoryEn": "Encapsulation safeguards internal object state by making fields private and restricting mutations through controlled public accessors.",
      "cleanCode": "class CustomerNameTag {\n    private String name;\n\n    public CustomerNameTag(String name) {\n        this.name = name;\n    }\n\n    public String getName() {\n        return this.name;\n    }\n\n    public void setName(String name) {\n        if (name != null) {\n            this.name = name.trim();\n        }\n    }\n}",
      "breakdown": [
        "<code>private</code>: Maydon to'g'ridan-to'g'ri tashqaridan o'zgartirilishdan himoyalangan.",
        "<code>CustomerNameTag</code>: Toza inkapsulyatsiya va ma'lumotlar xavfsizligi kafolatlangan."
      ],
      "pitfalls": "Maydonlarni ochiq (public) qoldirmang; barcha xususiy atributlar 'private' bo'lishi shart.",
      "cw2Tip": "CW2 Order Applicationda barcha domen sinflari (Product, Customer, Order) qat'iy inkapsulyatsiyalangan bo'lishi lozim."
    }
  },
  {
    "id": 22,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Metodlari, Validatsiya va 'this' Kalit So'zi",
    "sector": "16-30: Setters & Mutation Rules",
    "title": {
      "uz": "22. Dodo Pizza — Chegirma Limitini Nazorat Qiluvchi Setter",
      "en": "22. Dodo Pizza — Maximum Discount Cap Enforcement Setter"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nAksiya chegirmasi 50% dan oshishi mumkin emas. Agar kassir 50 dan katta foiz kiritsa, setter uni rad etib 'Discount cannot exceed 50%' xabarini beradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'PizzaPromo' sinfini va xususiy (private) double toifasidagi 'discountPercent' maydonini e'lon qiling.\n\n2. 'public PizzaPromo(double discountPercent)' konstruktorini yozing.\n\n3. 'public double getDiscountPercent()' getterini yozing.\n\n4. 'public void setDiscountPercent(double discountPercent)' setterida agar chegirma 50.0 dan oshsa 'Discount cannot exceed 50%' xabarini berib o'zgarishni bekor qiling.\n\n5. 'Main' metodida 70.0% o'rnatishga urinib ko'rib, cheklov ishlaganini ko'rsating.",
      "en": "📖 Real-World Scenario & Context\nCap maximum discount percentage and reject any value exceeding business threshold.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'PizzaPromo' with private double field 'discountPercent'.\n\n2. Write constructor 'public PizzaPromo(double discountPercent)'.\n\n3. Write accessor 'public double getDiscountPercent()'.\n\n4. In 'setDiscountPercent', reject discounts > 50% printing 'Discount cannot exceed 50%'.\n\n5. In 'main', attempt setting 70% and verify discount stays at initial value."
    },
    "story": {
      "uz": "Aksiya chegirmasi 50% dan oshishi mumkin emas. Agar kassir 50 dan katta foiz kiritsa, setter uni rad etib 'Discount cannot exceed 50%' xabarini beradi.",
      "en": "Cap maximum discount percentage and reject any value exceeding business threshold."
    },
    "steps": {
      "uz": [
        "'PizzaPromo' sinfini va xususiy (private) double toifasidagi 'discountPercent' maydonini e'lon qiling.",
        "'public PizzaPromo(double discountPercent)' konstruktorini yozing.",
        "'public double getDiscountPercent()' getterini yozing.",
        "'public void setDiscountPercent(double discountPercent)' setterida agar chegirma 50.0 dan oshsa 'Discount cannot exceed 50%' xabarini berib o'zgarishni bekor qiling.",
        "'Main' metodida 70.0% o'rnatishga urinib ko'rib, cheklov ishlaganini ko'rsating."
      ],
      "en": [
        "Declare class 'PizzaPromo' with private double field 'discountPercent'.",
        "Write constructor 'public PizzaPromo(double discountPercent)'.",
        "Write accessor 'public double getDiscountPercent()'.",
        "In 'setDiscountPercent', reject discounts > 50% printing 'Discount cannot exceed 50%'.",
        "In 'main', attempt setting 70% and verify discount stays at initial value."
      ]
    },
    "requirements": {
      "classes": [
        "PizzaPromo",
        "Main"
      ],
      "privateFields": [
        "discountPercent"
      ],
      "methods": [
        "getDiscountPercent",
        "setDiscountPercent"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class PizzaPromo {\n    // TODO: Maydonlar, konstruktor, getter va validatsiyali setterni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PizzaPromo promo = new PizzaPromo(10.0);\n        promo.setDiscountPercent(70.0);\n        System.out.println(\"Chegirma: \" + promo.getDiscountPercent() + \"%\");\n    }\n}",
    "solution": "class PizzaPromo {\n    private double discountPercent;\n\n    public PizzaPromo(double discountPercent) {\n        this.discountPercent = discountPercent;\n    }\n\n    public double getDiscountPercent() {\n        return this.discountPercent;\n    }\n\n    public void setDiscountPercent(double discountPercent) {\n        if (discountPercent > 50.0) {\n            System.out.println(\"Discount cannot exceed 50%\");\n            return;\n        }\n        this.discountPercent = discountPercent;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PizzaPromo promo = new PizzaPromo(10.0);\n        promo.setDiscountPercent(70.0);\n        System.out.println(\"Chegirma: \" + promo.getDiscountPercent() + \"%\");\n    }\n}",
    "sampleData": [
      "Discount cannot exceed 50%\nChegirma: 10.0%"
    ],
    "expectedOutput": "Discount cannot exceed 50%\nChegirma: 10.0%",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya (Encapsulation) — obyektga yo'naltirilgan dasturlashning asosiy ustuni bo'lib, sinfning ichki holatini tashqi to'g'ridan-to'g'ri aralashuvlardan himoya qiladi. Ma'lumotlarga kirish faqat ommaviy getter va setterlar orqali amalga oshiriladi.",
      "theoryEn": "Encapsulation safeguards internal object state by making fields private and restricting mutations through controlled public accessors.",
      "cleanCode": "class PizzaPromo {\n    private double discountPercent;\n\n    public PizzaPromo(double discountPercent) {\n        this.discountPercent = discountPercent;\n    }\n\n    public double getDiscountPercent() {\n        return this.discountPercent;\n    }\n\n    public void setDiscountPercent(double discountPercent) {\n        if (discountPercent > 50.0) {\n            System.out.println(\"Discount cannot exceed 50%\");\n            return;\n        }\n        this.discountPercent = discountPercent;\n    }\n}",
      "breakdown": [
        "<code>private</code>: Maydon to'g'ridan-to'g'ri tashqaridan o'zgartirilishdan himoyalangan.",
        "<code>PizzaPromo</code>: Toza inkapsulyatsiya va ma'lumotlar xavfsizligi kafolatlangan."
      ],
      "pitfalls": "Maydonlarni ochiq (public) qoldirmang; barcha xususiy atributlar 'private' bo'lishi shart.",
      "cw2Tip": "CW2 Order Applicationda barcha domen sinflari (Product, Customer, Order) qat'iy inkapsulyatsiyalangan bo'lishi lozim."
    }
  },
  {
    "id": 23,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Metodlari, Validatsiya va 'this' Kalit So'zi",
    "sector": "16-30: Setters & Mutation Rules",
    "title": {
      "uz": "23. Texnomart — Faqat O'suvchi Qiymatlarni Qabul Qiluvchi Setter",
      "en": "23. Texnomart — Monotonically Increasing Counter Setter"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nElektr hisoblagich ko'rsatkichi hech qachon avvalgisidan kamayishi mumkin emas (Monotonic Invariant). Agar yangi ko'rsatkich eskidan kichik bo'lsa rad etilsin.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'PowerMeter' klassini va unga xususiy (private) int toifasidagi 'readingKwh' maydonini qo'shing.\n\n2. 'public PowerMeter(int readingKwh)' konstruktorini yozing.\n\n3. 'public int getReadingKwh()' getterini yozing.\n\n4. Elektr hisoblagich faqat oldinga qarab o'sishi shart: 'public void setReadingKwh(int readingKwh)' metodida faqat yangi ko'rsatkich avvalgisidan katta yoki teng bo'lsa qabul qiling.\n\n5. 'Main' metodida 1500 kVt dan 1400 kVt ga kamaytirishga urinib, eski ko'rsatkich saqlanib qolishini ko'rsating.",
      "en": "📖 Real-World Scenario & Context\nSetter enforces that new reading must be strictly greater than or equal to current reading.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'PowerMeter' with private int field 'readingKwh'.\n\n2. Write constructor 'public PowerMeter(int readingKwh)'.\n\n3. Write accessor 'public int getReadingKwh()'.\n\n4. Enforce monotonic invariant in 'setReadingKwh': only accept values >= current reading.\n\n5. In 'main', attempt decreasing from 1500 to 1400 and verify 1500 is retained."
    },
    "story": {
      "uz": "Elektr hisoblagich ko'rsatkichi hech qachon avvalgisidan kamayishi mumkin emas (Monotonic Invariant). Agar yangi ko'rsatkich eskidan kichik bo'lsa rad etilsin.",
      "en": "Setter enforces that new reading must be strictly greater than or equal to current reading."
    },
    "steps": {
      "uz": [
        "'PowerMeter' klassini va unga xususiy (private) int toifasidagi 'readingKwh' maydonini qo'shing.",
        "'public PowerMeter(int readingKwh)' konstruktorini yozing.",
        "'public int getReadingKwh()' getterini yozing.",
        "Elektr hisoblagich faqat oldinga qarab o'sishi shart: 'public void setReadingKwh(int readingKwh)' metodida faqat yangi ko'rsatkich avvalgisidan katta yoki teng bo'lsa qabul qiling.",
        "'Main' metodida 1500 kVt dan 1400 kVt ga kamaytirishga urinib, eski ko'rsatkich saqlanib qolishini ko'rsating."
      ],
      "en": [
        "Declare class 'PowerMeter' with private int field 'readingKwh'.",
        "Write constructor 'public PowerMeter(int readingKwh)'.",
        "Write accessor 'public int getReadingKwh()'.",
        "Enforce monotonic invariant in 'setReadingKwh': only accept values >= current reading.",
        "In 'main', attempt decreasing from 1500 to 1400 and verify 1500 is retained."
      ]
    },
    "requirements": {
      "classes": [
        "PowerMeter",
        "Main"
      ],
      "privateFields": [
        "readingKwh"
      ],
      "methods": [
        "getReadingKwh",
        "setReadingKwh"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class PowerMeter {\n    // TODO: Maydonlar, konstruktor, getter va validatsiyali setterni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PowerMeter meter = new PowerMeter(1500);\n        meter.setReadingKwh(1400);\n        System.out.println(\"Hisoblagich: \" + meter.getReadingKwh() + \" kVt\");\n    }\n}",
    "solution": "class PowerMeter {\n    private int readingKwh;\n\n    public PowerMeter(int readingKwh) {\n        this.readingKwh = readingKwh;\n    }\n\n    public int getReadingKwh() {\n        return this.readingKwh;\n    }\n\n    public void setReadingKwh(int readingKwh) {\n        if (readingKwh >= this.readingKwh) {\n            this.readingKwh = readingKwh;\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PowerMeter meter = new PowerMeter(1500);\n        meter.setReadingKwh(1400);\n        System.out.println(\"Hisoblagich: \" + meter.getReadingKwh() + \" kVt\");\n    }\n}",
    "sampleData": [
      "Hisoblagich: 1500 kVt"
    ],
    "expectedOutput": "Hisoblagich: 1500 kVt",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya (Encapsulation) — obyektga yo'naltirilgan dasturlashning asosiy ustuni bo'lib, sinfning ichki holatini tashqi to'g'ridan-to'g'ri aralashuvlardan himoya qiladi. Ma'lumotlarga kirish faqat ommaviy getter va setterlar orqali amalga oshiriladi.",
      "theoryEn": "Encapsulation safeguards internal object state by making fields private and restricting mutations through controlled public accessors.",
      "cleanCode": "class PowerMeter {\n    private int readingKwh;\n\n    public PowerMeter(int readingKwh) {\n        this.readingKwh = readingKwh;\n    }\n\n    public int getReadingKwh() {\n        return this.readingKwh;\n    }\n\n    public void setReadingKwh(int readingKwh) {\n        if (readingKwh >= this.readingKwh) {\n            this.readingKwh = readingKwh;\n        }\n    }\n}",
      "breakdown": [
        "<code>private</code>: Maydon to'g'ridan-to'g'ri tashqaridan o'zgartirilishdan himoyalangan.",
        "<code>PowerMeter</code>: Toza inkapsulyatsiya va ma'lumotlar xavfsizligi kafolatlangan."
      ],
      "pitfalls": "Maydonlarni ochiq (public) qoldirmang; barcha xususiy atributlar 'private' bo'lishi shart.",
      "cw2Tip": "CW2 Order Applicationda barcha domen sinflari (Product, Customer, Order) qat'iy inkapsulyatsiyalangan bo'lishi lozim."
    }
  },
  {
    "id": 24,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Metodlari, Validatsiya va 'this' Kalit So'zi",
    "sector": "16-30: Setters & Mutation Rules",
    "title": {
      "uz": "24. Medion — Qiymatni Chegaraga Qisuvchi (Clamping) Setter",
      "en": "24. Medion — Clamping Setter Constraining Values to Permitted Range"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nTibbiy uskunada kislorod oqimi 10 dan 100 gacha bo'lishi kerak. Agar 10 dan kam kiritilsa avtomatik 10 ga, 100 dan oshsa 100 ga tenglab saqlaydigan qisuvchi (clamping) setterni yozing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'OxygenRegulator' sinfini oching: xususiy (private) int toifasidagi 'flowRate' maydoni bilan.\n\n2. 'public OxygenRegulator(int flowRate)' konstruktorini yozing.\n\n3. 'public int getFlowRate()' getterini yozing.\n\n4. 'public void setFlowRate(int flowRate)' metodida clamping (chegaralash) qo'llang: 0 dan past bo'lsa 0, 100 dan baland bo'lsa 100 ga tenglang.\n\n5. 'Main' metodida 150 kiritilganda qiymat 100 ga cheklanganini konsolga chiqaring.",
      "en": "📖 Real-World Scenario & Context\nClamp incoming values into allowed boundaries instead of outright rejection.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'OxygenRegulator' with private int field 'flowRate'.\n\n2. Write constructor 'public OxygenRegulator(int flowRate)'.\n\n3. Write accessor 'public int getFlowRate()'.\n\n4. Apply clamping in 'setFlowRate': clamp below 0 to 0, clamp above 100 to 100.\n\n5. In 'main', supply 150 and verify clamped output of 100."
    },
    "story": {
      "uz": "Tibbiy uskunada kislorod oqimi 10 dan 100 gacha bo'lishi kerak. Agar 10 dan kam kiritilsa avtomatik 10 ga, 100 dan oshsa 100 ga tenglab saqlaydigan qisuvchi (clamping) setterni yozing.",
      "en": "Clamp incoming values into allowed boundaries instead of outright rejection."
    },
    "steps": {
      "uz": [
        "'OxygenRegulator' sinfini oching: xususiy (private) int toifasidagi 'flowRate' maydoni bilan.",
        "'public OxygenRegulator(int flowRate)' konstruktorini yozing.",
        "'public int getFlowRate()' getterini yozing.",
        "'public void setFlowRate(int flowRate)' metodida clamping (chegaralash) qo'llang: 0 dan past bo'lsa 0, 100 dan baland bo'lsa 100 ga tenglang.",
        "'Main' metodida 150 kiritilganda qiymat 100 ga cheklanganini konsolga chiqaring."
      ],
      "en": [
        "Declare class 'OxygenRegulator' with private int field 'flowRate'.",
        "Write constructor 'public OxygenRegulator(int flowRate)'.",
        "Write accessor 'public int getFlowRate()'.",
        "Apply clamping in 'setFlowRate': clamp below 0 to 0, clamp above 100 to 100.",
        "In 'main', supply 150 and verify clamped output of 100."
      ]
    },
    "requirements": {
      "classes": [
        "OxygenRegulator",
        "Main"
      ],
      "privateFields": [
        "flowRate"
      ],
      "methods": [
        "getFlowRate",
        "setFlowRate"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class OxygenRegulator {\n    // TODO: Maydonlar, konstruktor, getter va validatsiyali setterni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        OxygenRegulator reg = new OxygenRegulator(50);\n        reg.setFlowRate(150);\n        System.out.println(\"Oqim darajasi: \" + reg.getFlowRate());\n    }\n}",
    "solution": "class OxygenRegulator {\n    private int flowRate;\n\n    public OxygenRegulator(int flowRate) {\n        this.flowRate = flowRate;\n    }\n\n    public int getFlowRate() {\n        return this.flowRate;\n    }\n\n    public void setFlowRate(int flowRate) {\n        if (flowRate < 0) {\n            this.flowRate = 0;\n        } else if (flowRate > 100) {\n            this.flowRate = 100;\n        } else {\n            this.flowRate = flowRate;\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        OxygenRegulator reg = new OxygenRegulator(50);\n        reg.setFlowRate(150);\n        System.out.println(\"Oqim darajasi: \" + reg.getFlowRate());\n    }\n}",
    "sampleData": [
      "Oqim darajasi: 100"
    ],
    "expectedOutput": "Oqim darajasi: 100",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya (Encapsulation) — obyektga yo'naltirilgan dasturlashning asosiy ustuni bo'lib, sinfning ichki holatini tashqi to'g'ridan-to'g'ri aralashuvlardan himoya qiladi. Ma'lumotlarga kirish faqat ommaviy getter va setterlar orqali amalga oshiriladi.",
      "theoryEn": "Encapsulation safeguards internal object state by making fields private and restricting mutations through controlled public accessors.",
      "cleanCode": "class OxygenRegulator {\n    private int flowRate;\n\n    public OxygenRegulator(int flowRate) {\n        this.flowRate = flowRate;\n    }\n\n    public int getFlowRate() {\n        return this.flowRate;\n    }\n\n    public void setFlowRate(int flowRate) {\n        if (flowRate < 0) {\n            this.flowRate = 0;\n        } else if (flowRate > 100) {\n            this.flowRate = 100;\n        } else {\n            this.flowRate = flowRate;\n        }\n    }\n}",
      "breakdown": [
        "<code>private</code>: Maydon to'g'ridan-to'g'ri tashqaridan o'zgartirilishdan himoyalangan.",
        "<code>OxygenRegulator</code>: Toza inkapsulyatsiya va ma'lumotlar xavfsizligi kafolatlangan."
      ],
      "pitfalls": "Maydonlarni ochiq (public) qoldirmang; barcha xususiy atributlar 'private' bo'lishi shart.",
      "cw2Tip": "CW2 Order Applicationda barcha domen sinflari (Product, Customer, Order) qat'iy inkapsulyatsiyalangan bo'lishi lozim."
    }
  },
  {
    "id": 25,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Metodlari, Validatsiya va 'this' Kalit So'zi",
    "sector": "16-30: Setters & Mutation Rules",
    "title": {
      "uz": "25. Express24 — Faqat Ruxsat Etilgan Harflarni Qabul Qiluvchi Setter",
      "en": "25. Express24 — Character Whitelist Validation in Setter"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nKuryer xizmat toifasi faqat 'S' (Standard), 'F' (Fast) yoki 'P' (Premium) bo'lishi mumkin. Boshqa har qanday belgi kiritilsa qiymat o'zgarmasligi kerak.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'CourierCategory' klassini oching: xususiy (private) char toifasidagi 'categoryCode' maydoni bilan.\n\n2. 'public CourierCategory(char categoryCode)' konstruktorini yozing.\n\n3. 'public char getCategoryCode()' getterini yozing.\n\n4. 'public void setCategoryCode(char categoryCode)' metodida faqat ruxsat berilgan harflarni ('S', 'M', 'L') qabul qiling.\n\n5. 'Main' metodida noto'g'ri 'X' kiritilganda o'zgarmay 'S' qolganini tekshiring.",
      "en": "📖 Real-World Scenario & Context\nValidate char parameter against approved whitelist before updating internal state.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'CourierCategory' with private char field 'categoryCode'.\n\n2. Write constructor 'public CourierCategory(char categoryCode)'.\n\n3. Write accessor 'public char getCategoryCode()'.\n\n4. Implement whitelist validation in 'setCategoryCode' allowing only 'S', 'M', or 'L'.\n\n5. In 'main', test with invalid 'X' and verify original 'S' is kept."
    },
    "story": {
      "uz": "Kuryer xizmat toifasi faqat 'S' (Standard), 'F' (Fast) yoki 'P' (Premium) bo'lishi mumkin. Boshqa har qanday belgi kiritilsa qiymat o'zgarmasligi kerak.",
      "en": "Validate char parameter against approved whitelist before updating internal state."
    },
    "steps": {
      "uz": [
        "'CourierCategory' klassini oching: xususiy (private) char toifasidagi 'categoryCode' maydoni bilan.",
        "'public CourierCategory(char categoryCode)' konstruktorini yozing.",
        "'public char getCategoryCode()' getterini yozing.",
        "'public void setCategoryCode(char categoryCode)' metodida faqat ruxsat berilgan harflarni ('S', 'M', 'L') qabul qiling.",
        "'Main' metodida noto'g'ri 'X' kiritilganda o'zgarmay 'S' qolganini tekshiring."
      ],
      "en": [
        "Declare class 'CourierCategory' with private char field 'categoryCode'.",
        "Write constructor 'public CourierCategory(char categoryCode)'.",
        "Write accessor 'public char getCategoryCode()'.",
        "Implement whitelist validation in 'setCategoryCode' allowing only 'S', 'M', or 'L'.",
        "In 'main', test with invalid 'X' and verify original 'S' is kept."
      ]
    },
    "requirements": {
      "classes": [
        "CourierCategory",
        "Main"
      ],
      "privateFields": [
        "categoryCode"
      ],
      "methods": [
        "getCategoryCode",
        "setCategoryCode"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class CourierCategory {\n    // TODO: Maydonlar, konstruktor, getter va validatsiyali setterni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CourierCategory cat = new CourierCategory('S');\n        cat.setCategoryCode('X');\n        System.out.println(\"Kategoriya: \" + cat.getCategoryCode());\n    }\n}",
    "solution": "class CourierCategory {\n    private char categoryCode;\n\n    public CourierCategory(char categoryCode) {\n        this.categoryCode = categoryCode;\n    }\n\n    public char getCategoryCode() {\n        return this.categoryCode;\n    }\n\n    public void setCategoryCode(char categoryCode) {\n        if (categoryCode == 'S' || categoryCode == 'M' || categoryCode == 'L') {\n            this.categoryCode = categoryCode;\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CourierCategory cat = new CourierCategory('S');\n        cat.setCategoryCode('X');\n        System.out.println(\"Kategoriya: \" + cat.getCategoryCode());\n    }\n}",
    "sampleData": [
      "Kategoriya: S"
    ],
    "expectedOutput": "Kategoriya: S",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya (Encapsulation) — obyektga yo'naltirilgan dasturlashning asosiy ustuni bo'lib, sinfning ichki holatini tashqi to'g'ridan-to'g'ri aralashuvlardan himoya qiladi. Ma'lumotlarga kirish faqat ommaviy getter va setterlar orqali amalga oshiriladi.",
      "theoryEn": "Encapsulation safeguards internal object state by making fields private and restricting mutations through controlled public accessors.",
      "cleanCode": "class CourierCategory {\n    private char categoryCode;\n\n    public CourierCategory(char categoryCode) {\n        this.categoryCode = categoryCode;\n    }\n\n    public char getCategoryCode() {\n        return this.categoryCode;\n    }\n\n    public void setCategoryCode(char categoryCode) {\n        if (categoryCode == 'S' || categoryCode == 'M' || categoryCode == 'L') {\n            this.categoryCode = categoryCode;\n        }\n    }\n}",
      "breakdown": [
        "<code>private</code>: Maydon to'g'ridan-to'g'ri tashqaridan o'zgartirilishdan himoyalangan.",
        "<code>CourierCategory</code>: Toza inkapsulyatsiya va ma'lumotlar xavfsizligi kafolatlangan."
      ],
      "pitfalls": "Maydonlarni ochiq (public) qoldirmang; barcha xususiy atributlar 'private' bo'lishi shart.",
      "cw2Tip": "CW2 Order Applicationda barcha domen sinflari (Product, Customer, Order) qat'iy inkapsulyatsiyalangan bo'lishi lozim."
    }
  },
  {
    "id": 26,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Metodlari, Validatsiya va 'this' Kalit So'zi",
    "sector": "16-30: Setters & Mutation Rules",
    "title": {
      "uz": "26. Asaxiy — Tasdiqlash Kodiga Bog'liq Xavfsiz Setter",
      "en": "26. Asaxiy — Authenticated State Mutation Setter"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nMijozning telefon raqamini o'zgartirish uchun to'g'ri PIN-kod (masalan, '7777') kiritilishi shart. Aks holda raqam o'zgarmaydi. Himoyalangan mutatsiyani yozing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'SecurePhoneProfile' sinfini oching: xususiy (private) String toifasidagi 'phone' maydoni bilan.\n\n2. 'public SecurePhoneProfile(String phone)' konstruktorini yozing.\n\n3. 'public String getPhone()' getterini yozing.\n\n4. 'public void updatePhone(String newPhone, String pin)' metodida agar PIN '1234' ga teng bo'lsagina yangi telefonni o'rnating.\n\n5. 'Main' metodida noto'g'ri PIN ('0000') bilan o'zgartirishga urinib ko'ring.",
      "en": "📖 Real-World Scenario & Context\nSetter verifies authorization PIN code before allowing phone number modification.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'SecurePhoneProfile' with private String field 'phone'.\n\n2. Write constructor 'public SecurePhoneProfile(String phone)'.\n\n3. Write accessor 'public String getPhone()'.\n\n4. Implement authenticated mutation 'updatePhone(String newPhone, String pin)' checking PIN '1234'.\n\n5. In 'main', attempt updating with invalid PIN '0000' and verify phone remains unchanged."
    },
    "story": {
      "uz": "Mijozning telefon raqamini o'zgartirish uchun to'g'ri PIN-kod (masalan, '7777') kiritilishi shart. Aks holda raqam o'zgarmaydi. Himoyalangan mutatsiyani yozing.",
      "en": "Setter verifies authorization PIN code before allowing phone number modification."
    },
    "steps": {
      "uz": [
        "'SecurePhoneProfile' sinfini oching: xususiy (private) String toifasidagi 'phone' maydoni bilan.",
        "'public SecurePhoneProfile(String phone)' konstruktorini yozing.",
        "'public String getPhone()' getterini yozing.",
        "'public void updatePhone(String newPhone, String pin)' metodida agar PIN '1234' ga teng bo'lsagina yangi telefonni o'rnating.",
        "'Main' metodida noto'g'ri PIN ('0000') bilan o'zgartirishga urinib ko'ring."
      ],
      "en": [
        "Declare class 'SecurePhoneProfile' with private String field 'phone'.",
        "Write constructor 'public SecurePhoneProfile(String phone)'.",
        "Write accessor 'public String getPhone()'.",
        "Implement authenticated mutation 'updatePhone(String newPhone, String pin)' checking PIN '1234'.",
        "In 'main', attempt updating with invalid PIN '0000' and verify phone remains unchanged."
      ]
    },
    "requirements": {
      "classes": [
        "SecurePhoneProfile",
        "Main"
      ],
      "privateFields": [
        "phone"
      ],
      "methods": [
        "getPhone",
        "updatePhone"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class SecurePhoneProfile {\n    // TODO: Maydonlar, konstruktor, getter va validatsiyali setterni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SecurePhoneProfile p = new SecurePhoneProfile(\"+998901112233\");\n        p.updatePhone(\"+998909998877\", \"0000\");\n        System.out.println(\"Telefon: \" + p.getPhone());\n    }\n}",
    "solution": "class SecurePhoneProfile {\n    private String phone;\n\n    public SecurePhoneProfile(String phone) {\n        this.phone = phone;\n    }\n\n    public String getPhone() {\n        return this.phone;\n    }\n\n    public void updatePhone(String newPhone, String pin) {\n        if (\"1234\".equals(pin)) {\n            this.phone = newPhone;\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SecurePhoneProfile p = new SecurePhoneProfile(\"+998901112233\");\n        p.updatePhone(\"+998909998877\", \"0000\");\n        System.out.println(\"Telefon: \" + p.getPhone());\n    }\n}",
    "sampleData": [
      "Telefon: +998901112233"
    ],
    "expectedOutput": "Telefon: +998901112233",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya (Encapsulation) — obyektga yo'naltirilgan dasturlashning asosiy ustuni bo'lib, sinfning ichki holatini tashqi to'g'ridan-to'g'ri aralashuvlardan himoya qiladi. Ma'lumotlarga kirish faqat ommaviy getter va setterlar orqali amalga oshiriladi.",
      "theoryEn": "Encapsulation safeguards internal object state by making fields private and restricting mutations through controlled public accessors.",
      "cleanCode": "class SecurePhoneProfile {\n    private String phone;\n\n    public SecurePhoneProfile(String phone) {\n        this.phone = phone;\n    }\n\n    public String getPhone() {\n        return this.phone;\n    }\n\n    public void updatePhone(String newPhone, String pin) {\n        if (\"1234\".equals(pin)) {\n            this.phone = newPhone;\n        }\n    }\n}",
      "breakdown": [
        "<code>private</code>: Maydon to'g'ridan-to'g'ri tashqaridan o'zgartirilishdan himoyalangan.",
        "<code>SecurePhoneProfile</code>: Toza inkapsulyatsiya va ma'lumotlar xavfsizligi kafolatlangan."
      ],
      "pitfalls": "Maydonlarni ochiq (public) qoldirmang; barcha xususiy atributlar 'private' bo'lishi shart.",
      "cw2Tip": "CW2 Order Applicationda barcha domen sinflari (Product, Customer, Order) qat'iy inkapsulyatsiyalangan bo'lishi lozim."
    }
  },
  {
    "id": 27,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Metodlari, Validatsiya va 'this' Kalit So'zi",
    "sector": "16-30: Setters & Mutation Rules",
    "title": {
      "uz": "27. Kapitalbank — Mantiqiy Yil Oralig'ini Tekshiruvchi Setter",
      "en": "27. Kapitalbank — Realistic Year Invariant Verification Setter"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nMijozning tug'ilgan yili 1920 dan 2026 gacha bo'lishi shart. Noto'g'ri yil kiritilganda uni rad etuvchi setterni yozing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'ClientBirthRecord' sinfini xususiy (private) int toifasidagi 'birthYear' maydoni bilan e'lon qiling.\n\n2. 'public ClientBirthRecord(int birthYear)' konstruktorini yozing.\n\n3. 'public int getBirthYear()' getterini yozing.\n\n4. 'public void setBirthYear(int birthYear)' setterida yil 1900 dan kichik yoki 2024 dan katta bo'lsa qabul qilmang.\n\n5. 'Main' metodida 2050 yil berilganda rad etilishini tekshiring.",
      "en": "📖 Real-World Scenario & Context\nEnforce realistic birth year boundary check in setter.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'ClientBirthRecord' with private int field 'birthYear'.\n\n2. Write constructor 'public ClientBirthRecord(int birthYear)'.\n\n3. Write accessor 'public int getBirthYear()'.\n\n4. In 'setBirthYear(int birthYear)', enforce historical boundary: 1900 <= year <= 2024.\n\n5. In 'main', verify future year 2050 is rejected."
    },
    "story": {
      "uz": "Mijozning tug'ilgan yili 1920 dan 2026 gacha bo'lishi shart. Noto'g'ri yil kiritilganda uni rad etuvchi setterni yozing.",
      "en": "Enforce realistic birth year boundary check in setter."
    },
    "steps": {
      "uz": [
        "'ClientBirthRecord' sinfini xususiy (private) int toifasidagi 'birthYear' maydoni bilan e'lon qiling.",
        "'public ClientBirthRecord(int birthYear)' konstruktorini yozing.",
        "'public int getBirthYear()' getterini yozing.",
        "'public void setBirthYear(int birthYear)' setterida yil 1900 dan kichik yoki 2024 dan katta bo'lsa qabul qilmang.",
        "'Main' metodida 2050 yil berilganda rad etilishini tekshiring."
      ],
      "en": [
        "Declare class 'ClientBirthRecord' with private int field 'birthYear'.",
        "Write constructor 'public ClientBirthRecord(int birthYear)'.",
        "Write accessor 'public int getBirthYear()'.",
        "In 'setBirthYear(int birthYear)', enforce historical boundary: 1900 <= year <= 2024.",
        "In 'main', verify future year 2050 is rejected."
      ]
    },
    "requirements": {
      "classes": [
        "ClientBirthRecord",
        "Main"
      ],
      "privateFields": [
        "birthYear"
      ],
      "methods": [
        "getBirthYear",
        "setBirthYear"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class ClientBirthRecord {\n    // TODO: Maydonlar, konstruktor, getter va validatsiyali setterni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ClientBirthRecord rec = new ClientBirthRecord(1995);\n        rec.setBirthYear(2050);\n        System.out.println(\"Tug'ilgan yil: \" + rec.getBirthYear());\n    }\n}",
    "solution": "class ClientBirthRecord {\n    private int birthYear;\n\n    public ClientBirthRecord(int birthYear) {\n        this.birthYear = birthYear;\n    }\n\n    public int getBirthYear() {\n        return this.birthYear;\n    }\n\n    public void setBirthYear(int birthYear) {\n        if (birthYear >= 1900 && birthYear <= 2024) {\n            this.birthYear = birthYear;\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ClientBirthRecord rec = new ClientBirthRecord(1995);\n        rec.setBirthYear(2050);\n        System.out.println(\"Tug'ilgan yil: \" + rec.getBirthYear());\n    }\n}",
    "sampleData": [
      "Tug'ilgan yil: 1995"
    ],
    "expectedOutput": "Tug'ilgan yil: 1995",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya (Encapsulation) — obyektga yo'naltirilgan dasturlashning asosiy ustuni bo'lib, sinfning ichki holatini tashqi to'g'ridan-to'g'ri aralashuvlardan himoya qiladi. Ma'lumotlarga kirish faqat ommaviy getter va setterlar orqali amalga oshiriladi.",
      "theoryEn": "Encapsulation safeguards internal object state by making fields private and restricting mutations through controlled public accessors.",
      "cleanCode": "class ClientBirthRecord {\n    private int birthYear;\n\n    public ClientBirthRecord(int birthYear) {\n        this.birthYear = birthYear;\n    }\n\n    public int getBirthYear() {\n        return this.birthYear;\n    }\n\n    public void setBirthYear(int birthYear) {\n        if (birthYear >= 1900 && birthYear <= 2024) {\n            this.birthYear = birthYear;\n        }\n    }\n}",
      "breakdown": [
        "<code>private</code>: Maydon to'g'ridan-to'g'ri tashqaridan o'zgartirilishdan himoyalangan.",
        "<code>ClientBirthRecord</code>: Toza inkapsulyatsiya va ma'lumotlar xavfsizligi kafolatlangan."
      ],
      "pitfalls": "Maydonlarni ochiq (public) qoldirmang; barcha xususiy atributlar 'private' bo'lishi shart.",
      "cw2Tip": "CW2 Order Applicationda barcha domen sinflari (Product, Customer, Order) qat'iy inkapsulyatsiyalangan bo'lishi lozim."
    }
  },
  {
    "id": 28,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Metodlari, Validatsiya va 'this' Kalit So'zi",
    "sector": "16-30: Setters & Mutation Rules",
    "title": {
      "uz": "28. Beeline — Bir Martalik Aktivatsiya Setteri (One-Way Latch)",
      "en": "28. Beeline — One-Way Activation State Setter"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSIM-karta bir marta aktivlashtirilgach ('activated = true'), uni qayta nofaol ('false') qilib bo'lmaydi. Bir tomonlama aktivatsiya setteri yozing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'SimCardActivation' sinfini xususiy (private) boolean toifasidagi 'activated' maydoni bilan e'lon qiling.\n\n2. 'public SimCardActivation(boolean activated)' konstruktorini yozing.\n\n3. 'public boolean isActivated()' getterini yozing.\n\n4. Bir tomonlama ruxsat (One-way latch) qoidasi: 'public void activate()' metodi orqali faqat faollashtirish mumkin, uni qayta o'chirish metodini bermang.\n\n5. 'Main' metodida faollashtirib, 'isActivated()' true bo'lganini chiqaring.",
      "en": "📖 Real-World Scenario & Context\nState transition setter permits one-way latching to active state preventing regression.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'SimCardActivation' with private boolean field 'activated'.\n\n2. Write constructor 'public SimCardActivation(boolean activated)'.\n\n3. Write accessor 'public boolean isActivated()'.\n\n4. Implement one-way latch 'public void activate()' setting assign parameter to 'activated' field via 'this'.\n\n5. In 'main', activate and print verified status."
    },
    "story": {
      "uz": "SIM-karta bir marta aktivlashtirilgach ('activated = true'), uni qayta nofaol ('false') qilib bo'lmaydi. Bir tomonlama aktivatsiya setteri yozing.",
      "en": "State transition setter permits one-way latching to active state preventing regression."
    },
    "steps": {
      "uz": [
        "'SimCardActivation' sinfini xususiy (private) boolean toifasidagi 'activated' maydoni bilan e'lon qiling.",
        "'public SimCardActivation(boolean activated)' konstruktorini yozing.",
        "'public boolean isActivated()' getterini yozing.",
        "Bir tomonlama ruxsat (One-way latch) qoidasi: 'public void activate()' metodi orqali faqat faollashtirish mumkin, uni qayta o'chirish metodini bermang.",
        "'Main' metodida faollashtirib, 'isActivated()' true bo'lganini chiqaring."
      ],
      "en": [
        "Declare class 'SimCardActivation' with private boolean field 'activated'.",
        "Write constructor 'public SimCardActivation(boolean activated)'.",
        "Write accessor 'public boolean isActivated()'.",
        "Implement one-way latch 'public void activate()' setting assign parameter to 'activated' field via 'this'.",
        "In 'main', activate and print verified status."
      ]
    },
    "requirements": {
      "classes": [
        "SimCardActivation",
        "Main"
      ],
      "privateFields": [
        "activated"
      ],
      "methods": [
        "isActivated",
        "activate"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class SimCardActivation {\n    // TODO: Maydonlar, konstruktor, getter va validatsiyali setterni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SimCardActivation sim = new SimCardActivation(false);\n        sim.activate();\n        System.out.println(\"Aktivlashtirilganmi: \" + sim.isActivated());\n    }\n}",
    "solution": "class SimCardActivation {\n    private boolean activated;\n\n    public SimCardActivation(boolean activated) {\n        this.activated = activated;\n    }\n\n    public boolean isActivated() {\n        return this.activated;\n    }\n\n    public void activate() {\n        this.activated = true;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SimCardActivation sim = new SimCardActivation(false);\n        sim.activate();\n        System.out.println(\"Aktivlashtirilganmi: \" + sim.isActivated());\n    }\n}",
    "sampleData": [
      "Aktivlashtirilganmi: true"
    ],
    "expectedOutput": "Aktivlashtirilganmi: true",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya (Encapsulation) — obyektga yo'naltirilgan dasturlashning asosiy ustuni bo'lib, sinfning ichki holatini tashqi to'g'ridan-to'g'ri aralashuvlardan himoya qiladi. Ma'lumotlarga kirish faqat ommaviy getter va setterlar orqali amalga oshiriladi.",
      "theoryEn": "Encapsulation safeguards internal object state by making fields private and restricting mutations through controlled public accessors.",
      "cleanCode": "class SimCardActivation {\n    private boolean activated;\n\n    public SimCardActivation(boolean activated) {\n        this.activated = activated;\n    }\n\n    public boolean isActivated() {\n        return this.activated;\n    }\n\n    public void activate() {\n        this.activated = true;\n    }\n}",
      "breakdown": [
        "<code>private</code>: Maydon to'g'ridan-to'g'ri tashqaridan o'zgartirilishdan himoyalangan.",
        "<code>SimCardActivation</code>: Toza inkapsulyatsiya va ma'lumotlar xavfsizligi kafolatlangan."
      ],
      "pitfalls": "Maydonlarni ochiq (public) qoldirmang; barcha xususiy atributlar 'private' bo'lishi shart.",
      "cw2Tip": "CW2 Order Applicationda barcha domen sinflari (Product, Customer, Order) qat'iy inkapsulyatsiyalangan bo'lishi lozim."
    }
  },
  {
    "id": 29,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Metodlari, Validatsiya va 'this' Kalit So'zi",
    "sector": "16-30: Setters & Mutation Rules",
    "title": {
      "uz": "29. UzAirways — Zanjirli Setter (Fluent Method Chaining returning 'this')",
      "en": "29. UzAirways — Fluent Chained Setter Pattern Returning 'this'"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nZamonaviy Java kodida setterlar 'return this;' qaytarish orqali bitta qatorda zanjirdek chaqirilishi mumkin: 'seat.setRow(12).setLetter('A')'. Ushbu uslubni dasturlang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'AirplaneSeat' sinfini xususiy (private) int toifasidagi 'row' va xususiy (private) char toifasidagi 'letter' maydonlari bilan yarating.\n\n2. Parametrsiz 'public AirplaneSeat()' konstruktorini bering.\n\n3. Zanjirli setterlar (Fluent API): 'public AirplaneSeat setRow(int row)' ichida 'this' orqali 'row' maydoniga qiymat bering qaytaring.\n\n4. 'public AirplaneSeat setLetter(char letter)' ichida ham 'this' orqali 'letter' maydoniga qiymat bering qaytaring.\n\n5. 'public String getSeatCode()' metodida qator va harfni birlashtirib qaytaring va 'Main' metodida 's.setRow(12).setLetter('A')' zanjirini sinang.",
      "en": "📖 Real-World Scenario & Context\nImplement fluent setter pattern returning current instance 'this' to permit method chaining.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'AirplaneSeat' with 'row' and 'letter' fields.\n\n2. Write default no-arg constructor.\n\n3. Implement fluent mutators: 'setRow' returning 'this' and 'setLetter' returning 'this'.\n\n4. Implement accessor 'public String getSeatCode()' returning row and letter combined.\n\n5. In 'main', exercise chained calls 's.setRow(12).setLetter('A')' and print seat code."
    },
    "story": {
      "uz": "Zamonaviy Java kodida setterlar 'return this;' qaytarish orqali bitta qatorda zanjirdek chaqirilishi mumkin: 'seat.setRow(12).setLetter('A')'. Ushbu uslubni dasturlang.",
      "en": "Implement fluent setter pattern returning current instance 'this' to permit method chaining."
    },
    "steps": {
      "uz": [
        "'AirplaneSeat' sinfini xususiy (private) int toifasidagi 'row' va xususiy (private) char toifasidagi 'letter' maydonlari bilan yarating.",
        "Parametrsiz 'public AirplaneSeat()' konstruktorini bering.",
        "Zanjirli setterlar (Fluent API): 'public AirplaneSeat setRow(int row)' ichida 'this' orqali 'row' maydoniga qiymat bering qaytaring.",
        "'public AirplaneSeat setLetter(char letter)' ichida ham 'this' orqali 'letter' maydoniga qiymat bering qaytaring.",
        "'public String getSeatCode()' metodida qator va harfni birlashtirib qaytaring va 'Main' metodida 's.setRow(12).setLetter('A')' zanjirini sinang."
      ],
      "en": [
        "Declare class 'AirplaneSeat' with 'row' and 'letter' fields.",
        "Write default no-arg constructor.",
        "Implement fluent mutators: 'setRow' returning 'this' and 'setLetter' returning 'this'.",
        "Implement accessor 'public String getSeatCode()' returning row and letter combined.",
        "In 'main', exercise chained calls 's.setRow(12).setLetter('A')' and print seat code."
      ]
    },
    "requirements": {
      "classes": [
        "AirplaneSeat",
        "Main"
      ],
      "privateFields": [
        "row",
        "letter"
      ],
      "methods": [
        "setRow",
        "setLetter",
        "getSeatCode"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class AirplaneSeat {\n    // TODO: Maydonlar, konstruktor, getter va validatsiyali setterni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AirplaneSeat s = new AirplaneSeat();\n        s.setRow(12).setLetter('A');\n        System.out.println(\"O'rindiq: \" + s.getSeatCode());\n    }\n}",
    "solution": "class AirplaneSeat {\n    private int row;\n    private char letter;\n\n    public AirplaneSeat() {\n    }\n\n    public AirplaneSeat setRow(int row) {\n        this.row = row;\n        return this;\n    }\n\n    public AirplaneSeat setLetter(char letter) {\n        this.letter = letter;\n        return this;\n    }\n\n    public String getSeatCode() {\n        return \"\" + this.row + this.letter;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AirplaneSeat s = new AirplaneSeat();\n        s.setRow(12).setLetter('A');\n        System.out.println(\"O'rindiq: \" + s.getSeatCode());\n    }\n}",
    "sampleData": [
      "O'rindiq: 12A"
    ],
    "expectedOutput": "O'rindiq: 12A",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya (Encapsulation) — obyektga yo'naltirilgan dasturlashning asosiy ustuni bo'lib, sinfning ichki holatini tashqi to'g'ridan-to'g'ri aralashuvlardan himoya qiladi. Ma'lumotlarga kirish faqat ommaviy getter va setterlar orqali amalga oshiriladi.",
      "theoryEn": "Encapsulation safeguards internal object state by making fields private and restricting mutations through controlled public accessors.",
      "cleanCode": "class AirplaneSeat {\n    private int row;\n    private char letter;\n\n    public AirplaneSeat() {\n    }\n\n    public AirplaneSeat setRow(int row) {\n        this.row = row;\n        return this;\n    }\n\n    public AirplaneSeat setLetter(char letter) {\n        this.letter = letter;\n        return this;\n    }\n\n    public String getSeatCode() {\n        return \"\" + this.row + this.letter;\n    }\n}",
      "breakdown": [
        "<code>private</code>: Maydon to'g'ridan-to'g'ri tashqaridan o'zgartirilishdan himoyalangan.",
        "<code>AirplaneSeat</code>: Toza inkapsulyatsiya va ma'lumotlar xavfsizligi kafolatlangan."
      ],
      "pitfalls": "Maydonlarni ochiq (public) qoldirmang; barcha xususiy atributlar 'private' bo'lishi shart.",
      "cw2Tip": "CW2 Order Applicationda barcha domen sinflari (Product, Customer, Order) qat'iy inkapsulyatsiyalangan bo'lishi lozim."
    }
  },
  {
    "id": 30,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Metodlari, Validatsiya va 'this' Kalit So'zi",
    "sector": "16-30: Setters & Mutation Rules",
    "title": {
      "uz": "30. WIUT SRS — To'liq Himoyalangan Mahsulot Setteri (Master)",
      "en": "30. WIUT SRS — Comprehensive Multi-Field Validated Setter Master"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nTovar nomi bo'sh bo'lmasligi, narxi manfiy bo'lmasligi va miqdori 0 dan kamaymasligini qat'iy kafolatlovchi to'liq Seminar 2 andazasidagi setterlar majmuasini bajaring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'MasterProduct' sinfini e'lon qiling: 'name' (String), 'price' (double), 'quantity' (int).\n\n2. 3 parametrli 'public MasterProduct(String name, double price, int quantity)' konstruktorini yozing.\n\n3. Getterlar: 'getName()', 'getPrice()', 'getQuantity()' larni taqdim eting.\n\n4. Seminar 2 'Product.java' to'liq qoidalarini qo'llang: 'setName' da bo'shliqni tekshiring, 'setPrice' da manfiyni rad etib 'Price cannot be negative - price was not changed.', 'setQuantity' da manfiyni rad etib 'Quantity cannot be negative - quantity was not changed.' ogohlantirishlarini chiqaring.\n\n5. 'Main' metodida manfiy narx va miqdor berib, xabarlar va saqlangan qiymatlarni chiqaring.",
      "en": "📖 Real-World Scenario & Context\nImplement complete Seminar 2 Product validation logic across name, price, and quantity.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'MasterProduct' with name, price, and quantity fields.\n\n2. Write 3-parameter constructor initializing state.\n\n3. Implement accessors for all three fields.\n\n4. Apply complete Seminar 2 Product validation logic for name, price, and quantity setters with respective warning outputs.\n\n5. In 'main', attempt setting negative values and print results."
    },
    "story": {
      "uz": "Tovar nomi bo'sh bo'lmasligi, narxi manfiy bo'lmasligi va miqdori 0 dan kamaymasligini qat'iy kafolatlovchi to'liq Seminar 2 andazasidagi setterlar majmuasini bajaring.",
      "en": "Implement complete Seminar 2 Product validation logic across name, price, and quantity."
    },
    "steps": {
      "uz": [
        "'MasterProduct' sinfini e'lon qiling: 'name' (String), 'price' (double), 'quantity' (int).",
        "3 parametrli 'public MasterProduct(String name, double price, int quantity)' konstruktorini yozing.",
        "Getterlar: 'getName()', 'getPrice()', 'getQuantity()' larni taqdim eting.",
        "Seminar 2 'Product.java' to'liq qoidalarini qo'llang: 'setName' da bo'shliqni tekshiring, 'setPrice' da manfiyni rad etib 'Price cannot be negative - price was not changed.', 'setQuantity' da manfiyni rad etib 'Quantity cannot be negative - quantity was not changed.' ogohlantirishlarini chiqaring.",
        "'Main' metodida manfiy narx va miqdor berib, xabarlar va saqlangan qiymatlarni chiqaring."
      ],
      "en": [
        "Declare class 'MasterProduct' with name, price, and quantity fields.",
        "Write 3-parameter constructor initializing state.",
        "Implement accessors for all three fields.",
        "Apply complete Seminar 2 Product validation logic for name, price, and quantity setters with respective warning outputs.",
        "In 'main', attempt setting negative values and print results."
      ]
    },
    "requirements": {
      "classes": [
        "MasterProduct",
        "Main"
      ],
      "privateFields": [
        "name",
        "price",
        "quantity"
      ],
      "methods": [
        "getName",
        "setName",
        "getPrice",
        "setPrice",
        "getQuantity",
        "setQuantity"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class MasterProduct {\n    // TODO: Maydonlar, konstruktor, getter va validatsiyali setterni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MasterProduct mp = new MasterProduct(\"Mouse\", 20.0, 5);\n        mp.setPrice(-10.0);\n        mp.setQuantity(-2);\n        System.out.println(\"Yakuniy narx: \" + mp.getPrice() + \" | Miqdor: \" + mp.getQuantity());\n    }\n}",
    "solution": "class MasterProduct {\n    private String name;\n    private double price;\n    private int quantity;\n\n    public MasterProduct(String name, double price, int quantity) {\n        this.name = name;\n        this.price = price;\n        this.quantity = quantity;\n    }\n\n    public String getName() {\n        return this.name;\n    }\n\n    public void setName(String name) {\n        if (name == null || name.isBlank()) {\n            System.out.println(\"Invalid name - name was not changed.\");\n            return;\n        }\n        this.name = name;\n    }\n\n    public double getPrice() {\n        return this.price;\n    }\n\n    public void setPrice(double price) {\n        if (price < 0) {\n            System.out.println(\"Price cannot be negative - price was not changed.\");\n            return;\n        }\n        this.price = price;\n    }\n\n    public int getQuantity() {\n        return this.quantity;\n    }\n\n    public void setQuantity(int quantity) {\n        if (quantity < 0) {\n            System.out.println(\"Quantity cannot be negative - quantity was not changed.\");\n            return;\n        }\n        this.quantity = quantity;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MasterProduct mp = new MasterProduct(\"Mouse\", 20.0, 5);\n        mp.setPrice(-10.0);\n        mp.setQuantity(-2);\n        System.out.println(\"Yakuniy narx: \" + mp.getPrice() + \" | Miqdor: \" + mp.getQuantity());\n    }\n}",
    "sampleData": [
      "Price cannot be negative - price was not changed.\nQuantity cannot be negative - quantity was not changed.\nYakuniy narx: 20.0 | Miqdor: 5"
    ],
    "expectedOutput": "Price cannot be negative - price was not changed.\nQuantity cannot be negative - quantity was not changed.\nYakuniy narx: 20.0 | Miqdor: 5",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya (Encapsulation) — obyektga yo'naltirilgan dasturlashning asosiy ustuni bo'lib, sinfning ichki holatini tashqi to'g'ridan-to'g'ri aralashuvlardan himoya qiladi. Ma'lumotlarga kirish faqat ommaviy getter va setterlar orqali amalga oshiriladi.",
      "theoryEn": "Encapsulation safeguards internal object state by making fields private and restricting mutations through controlled public accessors.",
      "cleanCode": "class MasterProduct {\n    private String name;\n    private double price;\n    private int quantity;\n\n    public MasterProduct(String name, double price, int quantity) {\n        this.name = name;\n        this.price = price;\n        this.quantity = quantity;\n    }\n\n    public String getName() {\n        return this.name;\n    }\n\n    public void setName(String name) {\n        if (name == null || name.isBlank()) {\n            System.out.println(\"Invalid name - name was not changed.\");\n            return;\n        }\n        this.name = name;\n    }\n\n    public double getPrice() {\n        return this.price;\n    }\n\n    public void setPrice(double price) {\n        if (price < 0) {\n            System.out.println(\"Price cannot be negative - price was not changed.\");\n            return;\n        }\n        this.price = price;\n    }\n\n    public int getQuantity() {\n        return this.quantity;\n    }\n\n    public void setQuantity(int quantity) {\n        if (quantity < 0) {\n            System.out.println(\"Quantity cannot be negative - quantity was not changed.\");\n            return;\n        }\n        this.quantity = quantity;\n    }\n}",
      "breakdown": [
        "<code>private</code>: Maydon to'g'ridan-to'g'ri tashqaridan o'zgartirilishdan himoyalangan.",
        "<code>MasterProduct</code>: Toza inkapsulyatsiya va ma'lumotlar xavfsizligi kafolatlangan."
      ],
      "pitfalls": "Maydonlarni ochiq (public) qoldirmang; barcha xususiy atributlar 'private' bo'lishi shart.",
      "cw2Tip": "CW2 Order Applicationda barcha domen sinflari (Product, Customer, Order) qat'iy inkapsulyatsiyalangan bo'lishi lozim."
    }
  },
  {
    "id": 31,
    "tier": 3,
    "tierName": "3-Bosqich: Kirish Huquqlari va Xususiy (private) Yordamchi Metodlar",
    "sector": "31-45: Access Modifiers & Internal Helpers",
    "title": {
      "uz": "31. Uzum Market — Ichki Komissiyani Hisoblovchi private Yordamchi Metod",
      "en": "31. Uzum Market — Private Helper Method for Internal Commission"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT leksiyasida ta'kidlanganidek: faqat sinf ichida kerak bo'ladigan hisoblashlar 'private' metodlarga ajratiladi. Sotuvchiga to'lanadigan summadan 3% platforma komissiyasini hisoblovchi 'private double calculateFee(double amt)' yordamchisini yozing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'SellerPayout' sinfini e'lon qiling.\n\n2. Ichki 3% platforma komissiyasini hisoblovchi 'private double calculateFee(double amt)' yordamchi metodini yozing.\n\n3. Tashqi kod uchun 'public double calculateNetPayout(double amt)' metodini yozing va uning ichida 'amt - calculateFee(amt)' ni qaytaring.\n\n4. 'Main' metodida boshlang'ich parametrlar bilan ob'yektini yarating.\n\n5. Konsolga 'Sotuvchiga to'lanadi: ' + sp.calculateNetPayout(1000000.0) + ' UZS' deb chiqaring.",
      "en": "📖 Real-World Scenario & Context\nEncapsulate proprietary 3% fee formula in a private helper invoked by public payout method.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'SellerPayout'.\n\n2. Implement internal private helper 'private double calculateFee(double amt)' calculating 3% commission.\n\n3. Write public client-facing method 'public double calculateNetPayout(double amt)' calling 'calculateFee'.\n\n4. Instantiate object with starting values in 'main'.\n\n5. Print net payout amount."
    },
    "story": {
      "uz": "WIUT leksiyasida ta'kidlanganidek: faqat sinf ichida kerak bo'ladigan hisoblashlar 'private' metodlarga ajratiladi. Sotuvchiga to'lanadigan summadan 3% platforma komissiyasini hisoblovchi 'private double calculateFee(double amt)' yordamchisini yozing.",
      "en": "Encapsulate proprietary 3% fee formula in a private helper invoked by public payout method."
    },
    "steps": {
      "uz": [
        "'SellerPayout' sinfini e'lon qiling.",
        "Ichki 3% platforma komissiyasini hisoblovchi 'private double calculateFee(double amt)' yordamchi metodini yozing.",
        "Tashqi kod uchun 'public double calculateNetPayout(double amt)' metodini yozing va uning ichida 'amt - calculateFee(amt)' ni qaytaring.",
        "'Main' metodida boshlang'ich parametrlar bilan ob'yektini yarating.",
        "Konsolga 'Sotuvchiga to'lanadi: ' + sp.calculateNetPayout(1000000.0) + ' UZS' deb chiqaring."
      ],
      "en": [
        "Declare class 'SellerPayout'.",
        "Implement internal private helper 'private double calculateFee(double amt)' calculating 3% commission.",
        "Write public client-facing method 'public double calculateNetPayout(double amt)' calling 'calculateFee'.",
        "Instantiate object with starting values in 'main'.",
        "Print net payout amount."
      ]
    },
    "requirements": {
      "classes": [
        "SellerPayout",
        "Main"
      ],
      "privateFields": [],
      "methods": [
        "calculateNetPayout"
      ],
      "keywords": [
        "private"
      ]
    },
    "starterCode": "class SellerPayout {\n    // TODO: Xususiy (private/protected) yordamchilarni va ommaviy metodni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SellerPayout sp = new SellerPayout();\n        System.out.println(\"Sotuvchiga to'lanadi: \" + sp.calculateNetPayout(1000000.0) + \" UZS\");\n    }\n}",
    "solution": "class SellerPayout {\n    private double calculateFee(double amt) {\n        return amt * 0.03;\n    }\n\n    public double calculateNetPayout(double amt) {\n        return amt - calculateFee(amt);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SellerPayout sp = new SellerPayout();\n        System.out.println(\"Sotuvchiga to'lanadi: \" + sp.calculateNetPayout(1000000.0) + \" UZS\");\n    }\n}",
    "sampleData": [
      "Sotuvchiga to'lanadi: 970000.0 UZS"
    ],
    "expectedOutput": "Sotuvchiga to'lanadi: 970000.0 UZS",
    "detailedSolution": {
      "theory": "Kirish huquqlari (Access Modifiers) va konstruktorlar obyektning hayotiy siklini boshqaradi. Xususiy yordamchi metodlar murakkab hisob-kitoblarni yashirsa, konstruktorlar obyektning boshlang'ich invariantlarini to'g'ri o'rnatadi.",
      "theoryEn": "Access modifiers and constructors dictate the initialization and integrity of objects. Helpers isolate internal algorithms while constructors enforce starting invariants.",
      "cleanCode": "class SellerPayout {\n    private double calculateFee(double amt) {\n        return amt * 0.03;\n    }\n\n    public double calculateNetPayout(double amt) {\n        return amt - calculateFee(amt);\n    }\n}",
      "breakdown": [
        "<code>private helper / constructor</code>: Ichki mantiq sinf ichida yashirilgan va xavfsiz initsializatsiya qilingan.",
        "<code>SellerPayout</code>: WIUT standartlariga mos konstruktor va metod arxitekturasi."
      ],
      "pitfalls": "Konstruktor yaratilganda Java sukutdagi (default) parametrsiz konstruktorni avtomatik o'chirib yuboradi; agar bo'sh konstruktor kerak bo'lsa uni ochiq e'lon qiling.",
      "cw2Tip": "CW2 Console Order Applicationda ob'yektlar noto'g'ri holatda yaratilishining oldini olish uchun konstruktorda to'liq validatsiya bajaring."
    }
  },
  {
    "id": 32,
    "tier": 3,
    "tierName": "3-Bosqich: Kirish Huquqlari va Xususiy (private) Yordamchi Metodlar",
    "sector": "31-45: Access Modifiers & Internal Helpers",
    "title": {
      "uz": "32. Payme — Modifikatorsiz (Package-Private) Ichki Xizmat Metodi",
      "en": "32. Payme — Package-Private Default Visibility Internal Method"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nLeksiyada (Slide 11): Agar modifikator ko'rsatilmassa, metod faqat bitta paket ichidagi sinflarga ko'rinadi (Package-private). Tranzaksiyani paket ichida qayta ishlovchi 'boolean executeInternal(double amt)' metodini modifikatorsiz bering.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'InternalPaymentService' klassini xususiy (private) double toifasidagi 'balance' maydoni bilan e'lon qiling.\n\n2. 'public InternalPaymentService(double balance)' konstruktorini yozing.\n\n3. Modifikatorsiz (Package-private) 'boolean executeInternal(double amt)' xizmat metodini yozing: mablag' yetarli bo'lsa balanstdan ayirib true, aks holda false qaytarsin.\n\n4. 'Main' metodida 500000.0 boshlang'ich balans bilan xizmatni oching.\n\n5. Ichki to'lovni 120000.0 uchun ishlatib, natijani konsolga chiqaring.",
      "en": "📖 Real-World Scenario & Context\nDemonstrate default package-private visibility accessible within the package without public/private keyword.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'InternalPaymentService' with private double field 'balance'.\n\n2. Write constructor 'public InternalPaymentService(double balance)'.\n\n3. Implement package-private (no modifier) method 'boolean executeInternal(double amt)'.\n\n4. In 'main', instantiate service with 500000.0 initial balance.\n\n5. Invoke internal execution and print boolean result."
    },
    "story": {
      "uz": "Leksiyada (Slide 11): Agar modifikator ko'rsatilmassa, metod faqat bitta paket ichidagi sinflarga ko'rinadi (Package-private). Tranzaksiyani paket ichida qayta ishlovchi 'boolean executeInternal(double amt)' metodini modifikatorsiz bering.",
      "en": "Demonstrate default package-private visibility accessible within the package without public/private keyword."
    },
    "steps": {
      "uz": [
        "'InternalPaymentService' klassini xususiy (private) double toifasidagi 'balance' maydoni bilan e'lon qiling.",
        "'public InternalPaymentService(double balance)' konstruktorini yozing.",
        "Modifikatorsiz (Package-private) 'boolean executeInternal(double amt)' xizmat metodini yozing: mablag' yetarli bo'lsa balanstdan ayirib true, aks holda false qaytarsin.",
        "'Main' metodida 500000.0 boshlang'ich balans bilan xizmatni oching.",
        "Ichki to'lovni 120000.0 uchun ishlatib, natijani konsolga chiqaring."
      ],
      "en": [
        "Declare class 'InternalPaymentService' with private double field 'balance'.",
        "Write constructor 'public InternalPaymentService(double balance)'.",
        "Implement package-private (no modifier) method 'boolean executeInternal(double amt)'.",
        "In 'main', instantiate service with 500000.0 initial balance.",
        "Invoke internal execution and print boolean result."
      ]
    },
    "requirements": {
      "classes": [
        "InternalPaymentService",
        "Main"
      ],
      "privateFields": [
        "balance"
      ],
      "methods": [
        "executeInternal"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class InternalPaymentService {\n    // TODO: Xususiy (private/protected) yordamchilarni va ommaviy metodni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        InternalPaymentService ips = new InternalPaymentService(500000.0);\n        System.out.println(\"Ichki to'lov: \" + ips.executeInternal(120000.0));\n    }\n}",
    "solution": "class InternalPaymentService {\n    private double balance;\n\n    public InternalPaymentService(double balance) {\n        this.balance = balance;\n    }\n\n    boolean executeInternal(double amt) {\n        if (amt > 0 && this.balance >= amt) {\n            this.balance -= amt;\n            return true;\n        }\n        return false;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        InternalPaymentService ips = new InternalPaymentService(500000.0);\n        System.out.println(\"Ichki to'lov: \" + ips.executeInternal(120000.0));\n    }\n}",
    "sampleData": [
      "Ichki to'lov: true"
    ],
    "expectedOutput": "Ichki to'lov: true",
    "detailedSolution": {
      "theory": "Kirish huquqlari (Access Modifiers) va konstruktorlar obyektning hayotiy siklini boshqaradi. Xususiy yordamchi metodlar murakkab hisob-kitoblarni yashirsa, konstruktorlar obyektning boshlang'ich invariantlarini to'g'ri o'rnatadi.",
      "theoryEn": "Access modifiers and constructors dictate the initialization and integrity of objects. Helpers isolate internal algorithms while constructors enforce starting invariants.",
      "cleanCode": "class InternalPaymentService {\n    private double balance;\n\n    public InternalPaymentService(double balance) {\n        this.balance = balance;\n    }\n\n    boolean executeInternal(double amt) {\n        if (amt > 0 && this.balance >= amt) {\n            this.balance -= amt;\n            return true;\n        }\n        return false;\n    }\n}",
      "breakdown": [
        "<code>private helper / constructor</code>: Ichki mantiq sinf ichida yashirilgan va xavfsiz initsializatsiya qilingan.",
        "<code>InternalPaymentService</code>: WIUT standartlariga mos konstruktor va metod arxitekturasi."
      ],
      "pitfalls": "Konstruktor yaratilganda Java sukutdagi (default) parametrsiz konstruktorni avtomatik o'chirib yuboradi; agar bo'sh konstruktor kerak bo'lsa uni ochiq e'lon qiling.",
      "cw2Tip": "CW2 Console Order Applicationda ob'yektlar noto'g'ri holatda yaratilishining oldini olish uchun konstruktorda to'liq validatsiya bajaring."
    }
  },
  {
    "id": 33,
    "tier": 3,
    "tierName": "3-Bosqich: Kirish Huquqlari va Xususiy (private) Yordamchi Metodlar",
    "sector": "31-45: Access Modifiers & Internal Helpers",
    "title": {
      "uz": "33. Korzinka — Bir Nechta private Bosqichlarni Birlashtiruvchi public Metod",
      "en": "33. Korzinka — Public Method Orchestrating Multiple Private Helpers"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nKassa cheki hisoblanayotganda 2 ta private yordamchi ishlaydi: 'applyDiscount' (chegirma) va 'addTax' (soliq). Public 'checkout()' metodi ularni navbati bilan chaqirib yakuniy summani topadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'CheckoutPipeline' klassini e'lon qiling.\n\n2. Soliqni hisoblovchi 'private double calculateTax(double amt)' yordamchisini yozing.\n\n3. Chegirmani hisoblovchi 'private double calculateDiscount(double amt)' yordamchisini yozing.\n\n4. Ommaviy 'public double checkout(double amt)' metodida 'amt + calculateTax(amt) - calculateDiscount(amt)' ni qaytaring.\n\n5. 'Main' metodida 100000.0 uchun chekni hisoblab konsolga chiqaring.",
      "en": "📖 Real-World Scenario & Context\nPublic checkout method orchestrates two separate private helpers: discount and tax.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'CheckoutPipeline'.\n\n2. Implement private helper 'calculateTax(double amt)' returning 12% tax.\n\n3. Implement private helper 'calculateDiscount(double amt)' returning discount.\n\n4. Implement public orchestrator 'checkout(double amt)' combining helpers.\n\n5. In 'main', invoke checkout for 100000.0 and print final invoice."
    },
    "story": {
      "uz": "Kassa cheki hisoblanayotganda 2 ta private yordamchi ishlaydi: 'applyDiscount' (chegirma) va 'addTax' (soliq). Public 'checkout()' metodi ularni navbati bilan chaqirib yakuniy summani topadi.",
      "en": "Public checkout method orchestrates two separate private helpers: discount and tax."
    },
    "steps": {
      "uz": [
        "'CheckoutPipeline' klassini e'lon qiling.",
        "Soliqni hisoblovchi 'private double calculateTax(double amt)' yordamchisini yozing.",
        "Chegirmani hisoblovchi 'private double calculateDiscount(double amt)' yordamchisini yozing.",
        "Ommaviy 'public double checkout(double amt)' metodida 'amt + calculateTax(amt) - calculateDiscount(amt)' ni qaytaring.",
        "'Main' metodida 100000.0 uchun chekni hisoblab konsolga chiqaring."
      ],
      "en": [
        "Declare class 'CheckoutPipeline'.",
        "Implement private helper 'calculateTax(double amt)' returning 12% tax.",
        "Implement private helper 'calculateDiscount(double amt)' returning discount.",
        "Implement public orchestrator 'checkout(double amt)' combining helpers.",
        "In 'main', invoke checkout for 100000.0 and print final invoice."
      ]
    },
    "requirements": {
      "classes": [
        "CheckoutPipeline",
        "Main"
      ],
      "privateFields": [],
      "methods": [
        "checkout"
      ],
      "keywords": [
        "private"
      ]
    },
    "starterCode": "class CheckoutPipeline {\n    // TODO: Xususiy (private/protected) yordamchilarni va ommaviy metodni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CheckoutPipeline cp = new CheckoutPipeline();\n        System.out.println(\"Yakuniy chek summasi: \" + cp.checkout(100000.0) + \" UZS\");\n    }\n}",
    "solution": "class CheckoutPipeline {\n    private double calculateTax(double amt) {\n        return amt * 0.12;\n    }\n\n    private double calculateDiscount(double amt) {\n        return amt * 0.112;\n    }\n\n    public double checkout(double amt) {\n        return amt + calculateTax(amt) - calculateDiscount(amt);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CheckoutPipeline cp = new CheckoutPipeline();\n        System.out.println(\"Yakuniy chek summasi: \" + cp.checkout(100000.0) + \" UZS\");\n    }\n}",
    "sampleData": [
      "Yakuniy chek summasi: 100800.0 UZS"
    ],
    "expectedOutput": "Yakuniy chek summasi: 100800.0 UZS",
    "detailedSolution": {
      "theory": "Kirish huquqlari (Access Modifiers) va konstruktorlar obyektning hayotiy siklini boshqaradi. Xususiy yordamchi metodlar murakkab hisob-kitoblarni yashirsa, konstruktorlar obyektning boshlang'ich invariantlarini to'g'ri o'rnatadi.",
      "theoryEn": "Access modifiers and constructors dictate the initialization and integrity of objects. Helpers isolate internal algorithms while constructors enforce starting invariants.",
      "cleanCode": "class CheckoutPipeline {\n    private double calculateTax(double amt) {\n        return amt * 0.12;\n    }\n\n    private double calculateDiscount(double amt) {\n        return amt * 0.112;\n    }\n\n    public double checkout(double amt) {\n        return amt + calculateTax(amt) - calculateDiscount(amt);\n    }\n}",
      "breakdown": [
        "<code>private helper / constructor</code>: Ichki mantiq sinf ichida yashirilgan va xavfsiz initsializatsiya qilingan.",
        "<code>CheckoutPipeline</code>: WIUT standartlariga mos konstruktor va metod arxitekturasi."
      ],
      "pitfalls": "Konstruktor yaratilganda Java sukutdagi (default) parametrsiz konstruktorni avtomatik o'chirib yuboradi; agar bo'sh konstruktor kerak bo'lsa uni ochiq e'lon qiling.",
      "cw2Tip": "CW2 Console Order Applicationda ob'yektlar noto'g'ri holatda yaratilishining oldini olish uchun konstruktorda to'liq validatsiya bajaring."
    }
  },
  {
    "id": 34,
    "tier": 3,
    "tierName": "3-Bosqich: Kirish Huquqlari va Xususiy (private) Yordamchi Metodlar",
    "sector": "31-45: Access Modifiers & Internal Helpers",
    "title": {
      "uz": "34. Yandex Go — Himoyalangan (protected) Bazaviy Tarif Yordamchisi",
      "en": "34. Yandex Go — Protected Base Fare Calculator for Subclasses and Package"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nLeksiyada (Slide 10): 'protected' a'zolar o'sha paketdagi sinflar va bo'lajak vorislarga ko'rinadi. Masofaga qarab bazaviy yo'l haqini topuvchi 'protected double calculateBaseFare(double km)' metodini yozing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'TaxiFareEngine' sinfini xususiy (private) double toifasidagi 'baseFare' va xususiy (private) double toifasidagi 'perKm' maydonlari bilan oching.\n\n2. 'public TaxiFareEngine(double baseFare, double perKm)' konstruktorini yozing.\n\n3. Paket va oila a'zolari uchun ochiq bo'lgan 'protected double calculateDistanceFare(double km)' metodini yozing.\n\n4. Tashqi mijoz uchun 'public double estimateFare(double km)' metodida bazaviy tarif va masofa to'lovini jamlab ni hisoblang.\n\n5. 'Main' metodida 4000 bazaviy va 2000 perKm bilan 5.0 km masofani baholab chiqaring.",
      "en": "📖 Real-World Scenario & Context\nDeclare protected helper method calculating base fare usable across package and subclasses.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'TaxiFareEngine' with baseFare and perKm fields.\n\n2. Write constructor 'public TaxiFareEngine(double baseFare, double perKm)'.\n\n3. Implement protected helper 'calculateDistanceFare(double km)' returning distance component.\n\n4. Implement public 'estimateFare(double km)' combining baseFare and protected calculation.\n\n5. In 'main', instantiate engine and print estimated fare."
    },
    "story": {
      "uz": "Leksiyada (Slide 10): 'protected' a'zolar o'sha paketdagi sinflar va bo'lajak vorislarga ko'rinadi. Masofaga qarab bazaviy yo'l haqini topuvchi 'protected double calculateBaseFare(double km)' metodini yozing.",
      "en": "Declare protected helper method calculating base fare usable across package and subclasses."
    },
    "steps": {
      "uz": [
        "'TaxiFareEngine' sinfini xususiy (private) double toifasidagi 'baseFare' va xususiy (private) double toifasidagi 'perKm' maydonlari bilan oching.",
        "'public TaxiFareEngine(double baseFare, double perKm)' konstruktorini yozing.",
        "Paket va oila a'zolari uchun ochiq bo'lgan 'protected double calculateDistanceFare(double km)' metodini yozing.",
        "Tashqi mijoz uchun 'public double estimateFare(double km)' metodida bazaviy tarif va masofa to'lovini jamlab ni hisoblang.",
        "'Main' metodida 4000 bazaviy va 2000 perKm bilan 5.0 km masofani baholab chiqaring."
      ],
      "en": [
        "Declare class 'TaxiFareEngine' with baseFare and perKm fields.",
        "Write constructor 'public TaxiFareEngine(double baseFare, double perKm)'.",
        "Implement protected helper 'calculateDistanceFare(double km)' returning distance component.",
        "Implement public 'estimateFare(double km)' combining baseFare and protected calculation.",
        "In 'main', instantiate engine and print estimated fare."
      ]
    },
    "requirements": {
      "classes": [
        "TaxiFareEngine",
        "Main"
      ],
      "privateFields": [
        "baseFare",
        "perKm"
      ],
      "methods": [
        "estimateFare"
      ],
      "keywords": [
        "protected",
        "this"
      ]
    },
    "starterCode": "class TaxiFareEngine {\n    // TODO: Xususiy (private/protected) yordamchilarni va ommaviy metodni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TaxiFareEngine engine = new TaxiFareEngine(4000.0, 2000.0);\n        System.out.println(\"Baholangan tarif: \" + engine.estimateFare(5.0) + \" UZS\");\n    }\n}",
    "solution": "class TaxiFareEngine {\n    private double baseFare;\n    private double perKm;\n\n    public TaxiFareEngine(double baseFare, double perKm) {\n        this.baseFare = baseFare;\n        this.perKm = perKm;\n    }\n\n    protected double calculateDistanceFare(double km) {\n        return km * this.perKm;\n    }\n\n    public double estimateFare(double km) {\n        return this.baseFare + calculateDistanceFare(km);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TaxiFareEngine engine = new TaxiFareEngine(4000.0, 2000.0);\n        System.out.println(\"Baholangan tarif: \" + engine.estimateFare(5.0) + \" UZS\");\n    }\n}",
    "sampleData": [
      "Baholangan tarif: 14000.0 UZS"
    ],
    "expectedOutput": "Baholangan tarif: 14000.0 UZS",
    "detailedSolution": {
      "theory": "Kirish huquqlari (Access Modifiers) va konstruktorlar obyektning hayotiy siklini boshqaradi. Xususiy yordamchi metodlar murakkab hisob-kitoblarni yashirsa, konstruktorlar obyektning boshlang'ich invariantlarini to'g'ri o'rnatadi.",
      "theoryEn": "Access modifiers and constructors dictate the initialization and integrity of objects. Helpers isolate internal algorithms while constructors enforce starting invariants.",
      "cleanCode": "class TaxiFareEngine {\n    private double baseFare;\n    private double perKm;\n\n    public TaxiFareEngine(double baseFare, double perKm) {\n        this.baseFare = baseFare;\n        this.perKm = perKm;\n    }\n\n    protected double calculateDistanceFare(double km) {\n        return km * this.perKm;\n    }\n\n    public double estimateFare(double km) {\n        return this.baseFare + calculateDistanceFare(km);\n    }\n}",
      "breakdown": [
        "<code>private helper / constructor</code>: Ichki mantiq sinf ichida yashirilgan va xavfsiz initsializatsiya qilingan.",
        "<code>TaxiFareEngine</code>: WIUT standartlariga mos konstruktor va metod arxitekturasi."
      ],
      "pitfalls": "Konstruktor yaratilganda Java sukutdagi (default) parametrsiz konstruktorni avtomatik o'chirib yuboradi; agar bo'sh konstruktor kerak bo'lsa uni ochiq e'lon qiling.",
      "cw2Tip": "CW2 Console Order Applicationda ob'yektlar noto'g'ri holatda yaratilishining oldini olish uchun konstruktorda to'liq validatsiya bajaring."
    }
  },
  {
    "id": 35,
    "tier": 3,
    "tierName": "3-Bosqich: Kirish Huquqlari va Xususiy (private) Yordamchi Metodlar",
    "sector": "31-45: Access Modifiers & Internal Helpers",
    "title": {
      "uz": "35. Click — Markazlashtirilgan private Validatsiya Metodi",
      "en": "35. Click — Centralized Private Validation Helper Reused across API"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nDRY tamoyili bo'yicha summa to'g'riligini tekshirish bitta 'private boolean isValidAmount(double amt)' metodiga olingan. Ushbu tekshiruvchidan to'lov va pul yechish metodlarida foydalaning.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'AccountValidatorEngine' sinfini xususiy (private) double toifasidagi 'balance' maydoni bilan e'lon qiling.\n\n2. 'public AccountValidatorEngine(double balance)' konstruktorini yozing.\n\n3. Markazlashtirilgan xususiy 'private boolean isValidAmount(double amt)' tekshiruvchisida tegishli hisoblangan qiymatni qaytaring qiling.\n\n4. 'public boolean deposit(double amt)' metodida ushbu yordamchi orqali tekshirib, to'g'ri bo'lsa balansni oshirib true qaytaring.\n\n5. 'Main' metodida 25000.0 deposit qilib, holat va balansni chop eting.",
      "en": "📖 Real-World Scenario & Context\nExtract repeated if-checks into a reusable private boolean isValidAmount helper.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'AccountValidatorEngine' with private double field 'balance'.\n\n2. Write constructor 'public AccountValidatorEngine(double balance)'.\n\n3. Implement centralized validator 'private boolean isValidAmount(double amt)'.\n\n4. Implement 'deposit(double amt)' reusing validation helper and returning boolean.\n\n5. In 'main', deposit 25000.0 and print result."
    },
    "story": {
      "uz": "DRY tamoyili bo'yicha summa to'g'riligini tekshirish bitta 'private boolean isValidAmount(double amt)' metodiga olingan. Ushbu tekshiruvchidan to'lov va pul yechish metodlarida foydalaning.",
      "en": "Extract repeated if-checks into a reusable private boolean isValidAmount helper."
    },
    "steps": {
      "uz": [
        "'AccountValidatorEngine' sinfini xususiy (private) double toifasidagi 'balance' maydoni bilan e'lon qiling.",
        "'public AccountValidatorEngine(double balance)' konstruktorini yozing.",
        "Markazlashtirilgan xususiy 'private boolean isValidAmount(double amt)' tekshiruvchisida tegishli hisoblangan qiymatni qaytaring qiling.",
        "'public boolean deposit(double amt)' metodida ushbu yordamchi orqali tekshirib, to'g'ri bo'lsa balansni oshirib true qaytaring.",
        "'Main' metodida 25000.0 deposit qilib, holat va balansni chop eting."
      ],
      "en": [
        "Declare class 'AccountValidatorEngine' with private double field 'balance'.",
        "Write constructor 'public AccountValidatorEngine(double balance)'.",
        "Implement centralized validator 'private boolean isValidAmount(double amt)'.",
        "Implement 'deposit(double amt)' reusing validation helper and returning boolean.",
        "In 'main', deposit 25000.0 and print result."
      ]
    },
    "requirements": {
      "classes": [
        "AccountValidatorEngine",
        "Main"
      ],
      "privateFields": [
        "balance"
      ],
      "methods": [
        "deposit",
        "getBalance"
      ],
      "keywords": [
        "private",
        "this"
      ]
    },
    "starterCode": "class AccountValidatorEngine {\n    // TODO: Xususiy (private/protected) yordamchilarni va ommaviy metodni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AccountValidatorEngine acc = new AccountValidatorEngine(50000.0);\n        boolean ok = acc.deposit(25000.0);\n        System.out.println(\"Deposit muvaffaqiyatli: \" + ok + \" | Balans: \" + acc.getBalance());\n    }\n}",
    "solution": "class AccountValidatorEngine {\n    private double balance;\n\n    public AccountValidatorEngine(double balance) {\n        this.balance = balance;\n    }\n\n    private boolean isValidAmount(double amt) {\n        return amt > 0;\n    }\n\n    public boolean deposit(double amt) {\n        if (isValidAmount(amt)) {\n            this.balance += amt;\n            return true;\n        }\n        return false;\n    }\n\n    public double getBalance() {\n        return this.balance;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AccountValidatorEngine acc = new AccountValidatorEngine(50000.0);\n        boolean ok = acc.deposit(25000.0);\n        System.out.println(\"Deposit muvaffaqiyatli: \" + ok + \" | Balans: \" + acc.getBalance());\n    }\n}",
    "sampleData": [
      "Deposit muvaffaqiyatli: true | Balans: 75000.0"
    ],
    "expectedOutput": "Deposit muvaffaqiyatli: true | Balans: 75000.0",
    "detailedSolution": {
      "theory": "Kirish huquqlari (Access Modifiers) va konstruktorlar obyektning hayotiy siklini boshqaradi. Xususiy yordamchi metodlar murakkab hisob-kitoblarni yashirsa, konstruktorlar obyektning boshlang'ich invariantlarini to'g'ri o'rnatadi.",
      "theoryEn": "Access modifiers and constructors dictate the initialization and integrity of objects. Helpers isolate internal algorithms while constructors enforce starting invariants.",
      "cleanCode": "class AccountValidatorEngine {\n    private double balance;\n\n    public AccountValidatorEngine(double balance) {\n        this.balance = balance;\n    }\n\n    private boolean isValidAmount(double amt) {\n        return amt > 0;\n    }\n\n    public boolean deposit(double amt) {\n        if (isValidAmount(amt)) {\n            this.balance += amt;\n            return true;\n        }\n        return false;\n    }\n\n    public double getBalance() {\n        return this.balance;\n    }\n}",
      "breakdown": [
        "<code>private helper / constructor</code>: Ichki mantiq sinf ichida yashirilgan va xavfsiz initsializatsiya qilingan.",
        "<code>AccountValidatorEngine</code>: WIUT standartlariga mos konstruktor va metod arxitekturasi."
      ],
      "pitfalls": "Konstruktor yaratilganda Java sukutdagi (default) parametrsiz konstruktorni avtomatik o'chirib yuboradi; agar bo'sh konstruktor kerak bo'lsa uni ochiq e'lon qiling.",
      "cw2Tip": "CW2 Console Order Applicationda ob'yektlar noto'g'ri holatda yaratilishining oldini olish uchun konstruktorda to'liq validatsiya bajaring."
    }
  },
  {
    "id": 36,
    "tier": 3,
    "tierName": "3-Bosqich: Kirish Huquqlari va Xususiy (private) Yordamchi Metodlar",
    "sector": "31-45: Access Modifiers & Internal Helpers",
    "title": {
      "uz": "36. Safia — Takroriy Harakatni Taqiqlash Uchun private Bayroqcha",
      "en": "36. Safia — Private Operation Flag Preventing Duplicate Processing"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nBuyurtma uchun chegirma faqat 1 marta qo'llanilishi mumkin. 'private boolean discountApplied' bayrog'i yordamida ikkinchi marta chegirma berilishini rad etuvchi mexanizmni yozing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'BakeryDiscountTracker' sinfini xususiy (private) double toifasidagi 'amount' va xususiy (private) boolean toifasidagi 'promoUsed' maydonlari bilan oching.\n\n2. 'public BakeryDiscountTracker(double amount)' konstruktorida 'this' orqali 'amount' maydoniga qiymat bering qiling.\n\n3. 'public void applyPromoOnce(double discount)' metodida agar 'promoUsed' false bo'lsa chegirmani qo'llang va 'this' orqali 'promoUsed' maydoniga qiymat bering qilib bayroqchani yoping.\n\n4. 'public double getAmount()' getterini yozing.\n\n5. 'Main' metodida chegirmani ketma-ket 2 marta qo'llashga urinib, faqat bir marta ishlaganini ko'rsating.",
      "en": "📖 Real-World Scenario & Context\nEnforce single-use discount invariant using encapsulated private boolean flag.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'BakeryDiscountTracker' with amount and promoUsed fields.\n\n2. Write constructor initializing promoUsed flag to false.\n\n3. Implement 'applyPromoOnce(double discount)' guarded by single-use private boolean latch.\n\n4. Write getter 'public double getAmount()'.\n\n5. In 'main', apply promo twice and verify single-use constraint."
    },
    "story": {
      "uz": "Buyurtma uchun chegirma faqat 1 marta qo'llanilishi mumkin. 'private boolean discountApplied' bayrog'i yordamida ikkinchi marta chegirma berilishini rad etuvchi mexanizmni yozing.",
      "en": "Enforce single-use discount invariant using encapsulated private boolean flag."
    },
    "steps": {
      "uz": [
        "'BakeryDiscountTracker' sinfini xususiy (private) double toifasidagi 'amount' va xususiy (private) boolean toifasidagi 'promoUsed' maydonlari bilan oching.",
        "'public BakeryDiscountTracker(double amount)' konstruktorida 'this' orqali 'amount' maydoniga qiymat bering qiling.",
        "'public void applyPromoOnce(double discount)' metodida agar 'promoUsed' false bo'lsa chegirmani qo'llang va 'this' orqali 'promoUsed' maydoniga qiymat bering qilib bayroqchani yoping.",
        "'public double getAmount()' getterini yozing.",
        "'Main' metodida chegirmani ketma-ket 2 marta qo'llashga urinib, faqat bir marta ishlaganini ko'rsating."
      ],
      "en": [
        "Declare class 'BakeryDiscountTracker' with amount and promoUsed fields.",
        "Write constructor initializing promoUsed flag to false.",
        "Implement 'applyPromoOnce(double discount)' guarded by single-use private boolean latch.",
        "Write getter 'public double getAmount()'.",
        "In 'main', apply promo twice and verify single-use constraint."
      ]
    },
    "requirements": {
      "classes": [
        "BakeryDiscountTracker",
        "Main"
      ],
      "privateFields": [
        "amount",
        "promoUsed"
      ],
      "methods": [
        "applyPromoOnce",
        "getAmount"
      ],
      "keywords": [
        "private",
        "this"
      ]
    },
    "starterCode": "class BakeryDiscountTracker {\n    // TODO: Xususiy (private/protected) yordamchilarni va ommaviy metodni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BakeryDiscountTracker dt = new BakeryDiscountTracker(80000.0);\n        dt.applyPromoOnce(10000.0);\n        dt.applyPromoOnce(10000.0);\n        System.out.println(\"Yakuniy summa: \" + dt.getAmount() + \" UZS\");\n    }\n}",
    "solution": "class BakeryDiscountTracker {\n    private double amount;\n    private boolean promoUsed;\n\n    public BakeryDiscountTracker(double amount) {\n        this.amount = amount;\n        this.promoUsed = false;\n    }\n\n    public void applyPromoOnce(double discount) {\n        if (!this.promoUsed) {\n            this.amount -= discount;\n            this.promoUsed = true;\n        }\n    }\n\n    public double getAmount() {\n        return this.amount;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BakeryDiscountTracker dt = new BakeryDiscountTracker(80000.0);\n        dt.applyPromoOnce(10000.0);\n        dt.applyPromoOnce(10000.0);\n        System.out.println(\"Yakuniy summa: \" + dt.getAmount() + \" UZS\");\n    }\n}",
    "sampleData": [
      "Yakuniy summa: 70000.0 UZS"
    ],
    "expectedOutput": "Yakuniy summa: 70000.0 UZS",
    "detailedSolution": {
      "theory": "Kirish huquqlari (Access Modifiers) va konstruktorlar obyektning hayotiy siklini boshqaradi. Xususiy yordamchi metodlar murakkab hisob-kitoblarni yashirsa, konstruktorlar obyektning boshlang'ich invariantlarini to'g'ri o'rnatadi.",
      "theoryEn": "Access modifiers and constructors dictate the initialization and integrity of objects. Helpers isolate internal algorithms while constructors enforce starting invariants.",
      "cleanCode": "class BakeryDiscountTracker {\n    private double amount;\n    private boolean promoUsed;\n\n    public BakeryDiscountTracker(double amount) {\n        this.amount = amount;\n        this.promoUsed = false;\n    }\n\n    public void applyPromoOnce(double discount) {\n        if (!this.promoUsed) {\n            this.amount -= discount;\n            this.promoUsed = true;\n        }\n    }\n\n    public double getAmount() {\n        return this.amount;\n    }\n}",
      "breakdown": [
        "<code>private helper / constructor</code>: Ichki mantiq sinf ichida yashirilgan va xavfsiz initsializatsiya qilingan.",
        "<code>BakeryDiscountTracker</code>: WIUT standartlariga mos konstruktor va metod arxitekturasi."
      ],
      "pitfalls": "Konstruktor yaratilganda Java sukutdagi (default) parametrsiz konstruktorni avtomatik o'chirib yuboradi; agar bo'sh konstruktor kerak bo'lsa uni ochiq e'lon qiling.",
      "cw2Tip": "CW2 Console Order Applicationda ob'yektlar noto'g'ri holatda yaratilishining oldini olish uchun konstruktorda to'liq validatsiya bajaring."
    }
  },
  {
    "id": 37,
    "tier": 3,
    "tierName": "3-Bosqich: Kirish Huquqlari va Xususiy (private) Yordamchi Metodlar",
    "sector": "31-45: Access Modifiers & Internal Helpers",
    "title": {
      "uz": "37. Dodo Pizza — Oshxona Ichki Jarayonlarini Tashqi API dan Ajratish",
      "en": "37. Dodo Pizza — Decoupled Public API Hiding Multi-Stage Kitchen Logic"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nMijoz faqat 'orderPizza(\"Pepperoni\")' metodini chaqiradi. Ichkarida esa ketma-ket 3 ta private metod ishlaydi: 'prepareDough()', 'addToppings()' va 'bake()'. Barcha ichki bosqichlarni yashiring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'KitchenService' klassini e'lon qiling.\n\n2. Oshxona bosqichlarini yashiruvchi 'private void prepareDough() ' va 'private String bake(String name)' yordamchilarini yozing.\n\n3. Ochiq API: 'public String orderPizza(String name)' metodida ichki bosqichlarni bajarib 'name + \" pishirildi va tayyor!\"' qaytaring.\n\n4. 'Main' metodida boshlang'ich parametrlar bilan ob'yektini oching.\n\n5. Konsolga 'kitchen.orderPizza(\"Pepperoni\")' natijasini chiqaring.",
      "en": "📖 Real-World Scenario & Context\nPublic order method delegates through private pipeline: prepareDough, addToppings, bake.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'KitchenService'.\n\n2. Implement private internal kitchen pipeline helpers 'prepareDough()' and 'bake(String name)'.\n\n3. Implement public API 'orderPizza(String name)' coordinating internal steps.\n\n4. In 'main', instantiate 'KitchenService'.\n\n5. Order 'Pepperoni' and print completed order message."
    },
    "story": {
      "uz": "Mijoz faqat 'orderPizza(\"Pepperoni\")' metodini chaqiradi. Ichkarida esa ketma-ket 3 ta private metod ishlaydi: 'prepareDough()', 'addToppings()' va 'bake()'. Barcha ichki bosqichlarni yashiring.",
      "en": "Public order method delegates through private pipeline: prepareDough, addToppings, bake."
    },
    "steps": {
      "uz": [
        "'KitchenService' klassini e'lon qiling.",
        "Oshxona bosqichlarini yashiruvchi 'private void prepareDough() ' va 'private String bake(String name)' yordamchilarini yozing.",
        "Ochiq API: 'public String orderPizza(String name)' metodida ichki bosqichlarni bajarib 'name + \" pishirildi va tayyor!\"' qaytaring.",
        "'Main' metodida boshlang'ich parametrlar bilan ob'yektini oching.",
        "Konsolga 'kitchen.orderPizza(\"Pepperoni\")' natijasini chiqaring."
      ],
      "en": [
        "Declare class 'KitchenService'.",
        "Implement private internal kitchen pipeline helpers 'prepareDough()' and 'bake(String name)'.",
        "Implement public API 'orderPizza(String name)' coordinating internal steps.",
        "In 'main', instantiate 'KitchenService'.",
        "Order 'Pepperoni' and print completed order message."
      ]
    },
    "requirements": {
      "classes": [
        "KitchenService",
        "Main"
      ],
      "privateFields": [],
      "methods": [
        "orderPizza"
      ],
      "keywords": [
        "private"
      ]
    },
    "starterCode": "class KitchenService {\n    // TODO: Xususiy (private/protected) yordamchilarni va ommaviy metodni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        KitchenService kitchen = new KitchenService();\n        System.out.println(kitchen.orderPizza(\"Pepperoni\"));\n    }\n}",
    "solution": "class KitchenService {\n    private void prepareDough() {\n    }\n\n    private String bake(String name) {\n        return name + \" pishirildi\";\n    }\n\n    public String orderPizza(String name) {\n        prepareDough();\n        return bake(name) + \" va tayyor!\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        KitchenService kitchen = new KitchenService();\n        System.out.println(kitchen.orderPizza(\"Pepperoni\"));\n    }\n}",
    "sampleData": [
      "Pepperoni pishirildi va tayyor!"
    ],
    "expectedOutput": "Pepperoni pishirildi va tayyor!",
    "detailedSolution": {
      "theory": "Kirish huquqlari (Access Modifiers) va konstruktorlar obyektning hayotiy siklini boshqaradi. Xususiy yordamchi metodlar murakkab hisob-kitoblarni yashirsa, konstruktorlar obyektning boshlang'ich invariantlarini to'g'ri o'rnatadi.",
      "theoryEn": "Access modifiers and constructors dictate the initialization and integrity of objects. Helpers isolate internal algorithms while constructors enforce starting invariants.",
      "cleanCode": "class KitchenService {\n    private void prepareDough() {\n    }\n\n    private String bake(String name) {\n        return name + \" pishirildi\";\n    }\n\n    public String orderPizza(String name) {\n        prepareDough();\n        return bake(name) + \" va tayyor!\";\n    }\n}",
      "breakdown": [
        "<code>private helper / constructor</code>: Ichki mantiq sinf ichida yashirilgan va xavfsiz initsializatsiya qilingan.",
        "<code>KitchenService</code>: WIUT standartlariga mos konstruktor va metod arxitekturasi."
      ],
      "pitfalls": "Konstruktor yaratilganda Java sukutdagi (default) parametrsiz konstruktorni avtomatik o'chirib yuboradi; agar bo'sh konstruktor kerak bo'lsa uni ochiq e'lon qiling.",
      "cw2Tip": "CW2 Console Order Applicationda ob'yektlar noto'g'ri holatda yaratilishining oldini olish uchun konstruktorda to'liq validatsiya bajaring."
    }
  },
  {
    "id": 38,
    "tier": 3,
    "tierName": "3-Bosqich: Kirish Huquqlari va Xususiy (private) Yordamchi Metodlar",
    "sector": "31-45: Access Modifiers & Internal Helpers",
    "title": {
      "uz": "38. Texnomart — Paket Ichidagi Sozlamalar Boshqaruvi",
      "en": "38. Texnomart — Package-Private Internal Configuration Utility"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nKafolat muddati va foizlarni paket ichida sozlovchi 'ApplianceConfig' sinfini modifikatorsiz (package-private) qilib, uning yordamida kafolat xarajatini hisoblang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'WarrantyEvaluator' klassini xususiy (private) double toifasidagi 'devicePrice' maydoni bilan e'lon qiling.\n\n2. 'public WarrantyEvaluator(double devicePrice)' konstruktorini yozing.\n\n3. Paket ichidagi konfiguratsiya 'double baseRate()' metodini modifikatorsiz bering.\n\n4. Ommaviy 'public double calculateWarrantyCost()' metodida qurilma narxini bazaviy stavkaga ko'paytirib ni hisoblang.\n\n5. 'Main' metodida 2000000.0 qiymatli qurilma uchun kafolat narxini chiqaring.",
      "en": "📖 Real-World Scenario & Context\nModel package-private configuration helper collaborating with public warranty evaluator.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'WarrantyEvaluator' with private double field 'devicePrice'.\n\n2. Write constructor 'public WarrantyEvaluator(double devicePrice)'.\n\n3. Provide package-private helper 'double baseRate()' returning 0.05.\n\n4. Implement 'calculateWarrantyCost()' multiplying device price by base rate.\n\n5. In 'main', instantiate evaluator and print warranty cost."
    },
    "story": {
      "uz": "Kafolat muddati va foizlarni paket ichida sozlovchi 'ApplianceConfig' sinfini modifikatorsiz (package-private) qilib, uning yordamida kafolat xarajatini hisoblang.",
      "en": "Model package-private configuration helper collaborating with public warranty evaluator."
    },
    "steps": {
      "uz": [
        "'WarrantyEvaluator' klassini xususiy (private) double toifasidagi 'devicePrice' maydoni bilan e'lon qiling.",
        "'public WarrantyEvaluator(double devicePrice)' konstruktorini yozing.",
        "Paket ichidagi konfiguratsiya 'double baseRate()' metodini modifikatorsiz bering.",
        "Ommaviy 'public double calculateWarrantyCost()' metodida qurilma narxini bazaviy stavkaga ko'paytirib ni hisoblang.",
        "'Main' metodida 2000000.0 qiymatli qurilma uchun kafolat narxini chiqaring."
      ],
      "en": [
        "Declare class 'WarrantyEvaluator' with private double field 'devicePrice'.",
        "Write constructor 'public WarrantyEvaluator(double devicePrice)'.",
        "Provide package-private helper 'double baseRate()' returning 0.05.",
        "Implement 'calculateWarrantyCost()' multiplying device price by base rate.",
        "In 'main', instantiate evaluator and print warranty cost."
      ]
    },
    "requirements": {
      "classes": [
        "WarrantyEvaluator",
        "Main"
      ],
      "privateFields": [
        "devicePrice"
      ],
      "methods": [
        "calculateWarrantyCost"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class WarrantyEvaluator {\n    // TODO: Xususiy (private/protected) yordamchilarni va ommaviy metodni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WarrantyEvaluator we = new WarrantyEvaluator(2000000.0);\n        System.out.println(\"Kafolat narxi: \" + we.calculateWarrantyCost() + \" UZS\");\n    }\n}",
    "solution": "class WarrantyEvaluator {\n    private double devicePrice;\n\n    public WarrantyEvaluator(double devicePrice) {\n        this.devicePrice = devicePrice;\n    }\n\n    double baseRate() {\n        return 0.05;\n    }\n\n    public double calculateWarrantyCost() {\n        return this.devicePrice * baseRate();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WarrantyEvaluator we = new WarrantyEvaluator(2000000.0);\n        System.out.println(\"Kafolat narxi: \" + we.calculateWarrantyCost() + \" UZS\");\n    }\n}",
    "sampleData": [
      "Kafolat narxi: 100000.0 UZS"
    ],
    "expectedOutput": "Kafolat narxi: 100000.0 UZS",
    "detailedSolution": {
      "theory": "Kirish huquqlari (Access Modifiers) va konstruktorlar obyektning hayotiy siklini boshqaradi. Xususiy yordamchi metodlar murakkab hisob-kitoblarni yashirsa, konstruktorlar obyektning boshlang'ich invariantlarini to'g'ri o'rnatadi.",
      "theoryEn": "Access modifiers and constructors dictate the initialization and integrity of objects. Helpers isolate internal algorithms while constructors enforce starting invariants.",
      "cleanCode": "class WarrantyEvaluator {\n    private double devicePrice;\n\n    public WarrantyEvaluator(double devicePrice) {\n        this.devicePrice = devicePrice;\n    }\n\n    double baseRate() {\n        return 0.05;\n    }\n\n    public double calculateWarrantyCost() {\n        return this.devicePrice * baseRate();\n    }\n}",
      "breakdown": [
        "<code>private helper / constructor</code>: Ichki mantiq sinf ichida yashirilgan va xavfsiz initsializatsiya qilingan.",
        "<code>WarrantyEvaluator</code>: WIUT standartlariga mos konstruktor va metod arxitekturasi."
      ],
      "pitfalls": "Konstruktor yaratilganda Java sukutdagi (default) parametrsiz konstruktorni avtomatik o'chirib yuboradi; agar bo'sh konstruktor kerak bo'lsa uni ochiq e'lon qiling.",
      "cw2Tip": "CW2 Console Order Applicationda ob'yektlar noto'g'ri holatda yaratilishining oldini olish uchun konstruktorda to'liq validatsiya bajaring."
    }
  },
  {
    "id": 39,
    "tier": 3,
    "tierName": "3-Bosqich: Kirish Huquqlari va Xususiy (private) Yordamchi Metodlar",
    "sector": "31-45: Access Modifiers & Internal Helpers",
    "title": {
      "uz": "39. Medion — Maxfiy Kalitni Tekshiruvchi private Metod",
      "en": "39. Medion — Private Authorization Key Verification Helper"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nTibbiy laboratoriya tahlilini tasdiqlash uchun xususiy 'private boolean verifyDoctorKey(String key)' metodi ishlaydi. Faqat to'g'ri kalit ('DOC-777') kiritilgandagina tahlil tasdiqlansin.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'LabApproval' klassini oching: xususiy (private) String toifasidagi 'testName' maydoni bilan.\n\n2. 'public LabApproval(String testName)' konstruktorini yozing.\n\n3. Shifokor ID sini tekshiruvchi 'private boolean isValidDoc(String docId)' metodida tegishli hisoblangan qiymatni qaytaring yozing.\n\n4. 'public boolean approveResult(String docId)' ochiq metodida ushbu tekshiruvchi orqali tasdiqlash holatini qaytaring.\n\n5. 'Main' metodida 'DOC-777' bilan tasdiqlab, true natija oling.",
      "en": "📖 Real-World Scenario & Context\nPrivileged status update is gated behind private key verification helper.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'LabApproval' with private String field 'testName'.\n\n2. Write constructor 'public LabApproval(String testName)'.\n\n3. Implement private helper 'isValidDoc(String docId)' checking null and prefix 'DOC-'.\n\n4. Implement client method 'approveResult(String docId)' delegating to private verification.\n\n5. In 'main', approve with 'DOC-777' and print boolean confirmation."
    },
    "story": {
      "uz": "Tibbiy laboratoriya tahlilini tasdiqlash uchun xususiy 'private boolean verifyDoctorKey(String key)' metodi ishlaydi. Faqat to'g'ri kalit ('DOC-777') kiritilgandagina tahlil tasdiqlansin.",
      "en": "Privileged status update is gated behind private key verification helper."
    },
    "steps": {
      "uz": [
        "'LabApproval' klassini oching: xususiy (private) String toifasidagi 'testName' maydoni bilan.",
        "'public LabApproval(String testName)' konstruktorini yozing.",
        "Shifokor ID sini tekshiruvchi 'private boolean isValidDoc(String docId)' metodida tegishli hisoblangan qiymatni qaytaring yozing.",
        "'public boolean approveResult(String docId)' ochiq metodida ushbu tekshiruvchi orqali tasdiqlash holatini qaytaring.",
        "'Main' metodida 'DOC-777' bilan tasdiqlab, true natija oling."
      ],
      "en": [
        "Declare class 'LabApproval' with private String field 'testName'.",
        "Write constructor 'public LabApproval(String testName)'.",
        "Implement private helper 'isValidDoc(String docId)' checking null and prefix 'DOC-'.",
        "Implement client method 'approveResult(String docId)' delegating to private verification.",
        "In 'main', approve with 'DOC-777' and print boolean confirmation."
      ]
    },
    "requirements": {
      "classes": [
        "LabApproval",
        "Main"
      ],
      "privateFields": [
        "testName"
      ],
      "methods": [
        "approveResult"
      ],
      "keywords": [
        "private",
        "this"
      ]
    },
    "starterCode": "class LabApproval {\n    // TODO: Xususiy (private/protected) yordamchilarni va ommaviy metodni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LabApproval la = new LabApproval(\"Qon tahlili\");\n        boolean approved = la.approveResult(\"DOC-777\");\n        System.out.println(\"Tahlil tasdiqlandimi: \" + approved);\n    }\n}",
    "solution": "class LabApproval {\n    private String testName;\n\n    public LabApproval(String testName) {\n        this.testName = testName;\n    }\n\n    private boolean isValidDoc(String docId) {\n        return docId != null && docId.startsWith(\"DOC-\");\n    }\n\n    public boolean approveResult(String docId) {\n        return isValidDoc(docId);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LabApproval la = new LabApproval(\"Qon tahlili\");\n        boolean approved = la.approveResult(\"DOC-777\");\n        System.out.println(\"Tahlil tasdiqlandimi: \" + approved);\n    }\n}",
    "sampleData": [
      "Tahlil tasdiqlandimi: true"
    ],
    "expectedOutput": "Tahlil tasdiqlandimi: true",
    "detailedSolution": {
      "theory": "Kirish huquqlari (Access Modifiers) va konstruktorlar obyektning hayotiy siklini boshqaradi. Xususiy yordamchi metodlar murakkab hisob-kitoblarni yashirsa, konstruktorlar obyektning boshlang'ich invariantlarini to'g'ri o'rnatadi.",
      "theoryEn": "Access modifiers and constructors dictate the initialization and integrity of objects. Helpers isolate internal algorithms while constructors enforce starting invariants.",
      "cleanCode": "class LabApproval {\n    private String testName;\n\n    public LabApproval(String testName) {\n        this.testName = testName;\n    }\n\n    private boolean isValidDoc(String docId) {\n        return docId != null && docId.startsWith(\"DOC-\");\n    }\n\n    public boolean approveResult(String docId) {\n        return isValidDoc(docId);\n    }\n}",
      "breakdown": [
        "<code>private helper / constructor</code>: Ichki mantiq sinf ichida yashirilgan va xavfsiz initsializatsiya qilingan.",
        "<code>LabApproval</code>: WIUT standartlariga mos konstruktor va metod arxitekturasi."
      ],
      "pitfalls": "Konstruktor yaratilganda Java sukutdagi (default) parametrsiz konstruktorni avtomatik o'chirib yuboradi; agar bo'sh konstruktor kerak bo'lsa uni ochiq e'lon qiling.",
      "cw2Tip": "CW2 Console Order Applicationda ob'yektlar noto'g'ri holatda yaratilishining oldini olish uchun konstruktorda to'liq validatsiya bajaring."
    }
  },
  {
    "id": 40,
    "tier": 3,
    "tierName": "3-Bosqich: Kirish Huquqlari va Xususiy (private) Yordamchi Metodlar",
    "sector": "31-45: Access Modifiers & Internal Helpers",
    "title": {
      "uz": "40. Express24 — Maxfiy Tungi Koeffitsiyentni Yashirish",
      "en": "40. Express24 — Encapsulated Proprietary Night Coefficient Helper"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nTungi yetkazish narxini hisoblovchi ichki formula (bazaviy narx * 1.35 + 2000) 'private double computeNightPremium(double base)' metodi ichida yashiringan. Uni ommaga chiqarmasdan yakuniy tarifni bering.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'NightTariffDispatcher' klassini oching.\n\n2. Ichki xususiy tungi ustamani hisoblovchi 'private double getNightSurcharge()' metodini yozing.\n\n3. Ommaviy 'public double getFinalDeliveryPrice(double base)' metodida 'base + getNightSurcharge()' ni qaytaring.\n\n4. 'Main' metodida dispetcherni oching.\n\n5. 20000.0 bazaviy yetkazish uchun yakuniy tungi narxni ekranga chiqaring.",
      "en": "📖 Real-World Scenario & Context\nKeep proprietary night tariff formula private and expose only public final quote.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'NightTariffDispatcher'.\n\n2. Implement proprietary markup formula in 'private double getNightSurcharge()' returning 9000.0.\n\n3. Implement public 'getFinalDeliveryPrice(double base)' adding surcharge to base fare.\n\n4. In 'main', instantiate dispatcher.\n\n5. Print final delivery price for 20000.0 base fare."
    },
    "story": {
      "uz": "Tungi yetkazish narxini hisoblovchi ichki formula (bazaviy narx * 1.35 + 2000) 'private double computeNightPremium(double base)' metodi ichida yashiringan. Uni ommaga chiqarmasdan yakuniy tarifni bering.",
      "en": "Keep proprietary night tariff formula private and expose only public final quote."
    },
    "steps": {
      "uz": [
        "'NightTariffDispatcher' klassini oching.",
        "Ichki xususiy tungi ustamani hisoblovchi 'private double getNightSurcharge()' metodini yozing.",
        "Ommaviy 'public double getFinalDeliveryPrice(double base)' metodida 'base + getNightSurcharge()' ni qaytaring.",
        "'Main' metodida dispetcherni oching.",
        "20000.0 bazaviy yetkazish uchun yakuniy tungi narxni ekranga chiqaring."
      ],
      "en": [
        "Declare class 'NightTariffDispatcher'.",
        "Implement proprietary markup formula in 'private double getNightSurcharge()' returning 9000.0.",
        "Implement public 'getFinalDeliveryPrice(double base)' adding surcharge to base fare.",
        "In 'main', instantiate dispatcher.",
        "Print final delivery price for 20000.0 base fare."
      ]
    },
    "requirements": {
      "classes": [
        "NightTariffDispatcher",
        "Main"
      ],
      "privateFields": [],
      "methods": [
        "getFinalDeliveryPrice"
      ],
      "keywords": [
        "private"
      ]
    },
    "starterCode": "class NightTariffDispatcher {\n    // TODO: Xususiy (private/protected) yordamchilarni va ommaviy metodni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        NightTariffDispatcher ntd = new NightTariffDispatcher();\n        System.out.println(\"Tungi yetkazish: \" + ntd.getFinalDeliveryPrice(20000.0) + \" UZS\");\n    }\n}",
    "solution": "class NightTariffDispatcher {\n    private double getNightSurcharge() {\n        return 9000.0;\n    }\n\n    public double getFinalDeliveryPrice(double base) {\n        return base + getNightSurcharge();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        NightTariffDispatcher ntd = new NightTariffDispatcher();\n        System.out.println(\"Tungi yetkazish: \" + ntd.getFinalDeliveryPrice(20000.0) + \" UZS\");\n    }\n}",
    "sampleData": [
      "Tungi yetkazish: 29000.0 UZS"
    ],
    "expectedOutput": "Tungi yetkazish: 29000.0 UZS",
    "detailedSolution": {
      "theory": "Kirish huquqlari (Access Modifiers) va konstruktorlar obyektning hayotiy siklini boshqaradi. Xususiy yordamchi metodlar murakkab hisob-kitoblarni yashirsa, konstruktorlar obyektning boshlang'ich invariantlarini to'g'ri o'rnatadi.",
      "theoryEn": "Access modifiers and constructors dictate the initialization and integrity of objects. Helpers isolate internal algorithms while constructors enforce starting invariants.",
      "cleanCode": "class NightTariffDispatcher {\n    private double getNightSurcharge() {\n        return 9000.0;\n    }\n\n    public double getFinalDeliveryPrice(double base) {\n        return base + getNightSurcharge();\n    }\n}",
      "breakdown": [
        "<code>private helper / constructor</code>: Ichki mantiq sinf ichida yashirilgan va xavfsiz initsializatsiya qilingan.",
        "<code>NightTariffDispatcher</code>: WIUT standartlariga mos konstruktor va metod arxitekturasi."
      ],
      "pitfalls": "Konstruktor yaratilganda Java sukutdagi (default) parametrsiz konstruktorni avtomatik o'chirib yuboradi; agar bo'sh konstruktor kerak bo'lsa uni ochiq e'lon qiling.",
      "cw2Tip": "CW2 Console Order Applicationda ob'yektlar noto'g'ri holatda yaratilishining oldini olish uchun konstruktorda to'liq validatsiya bajaring."
    }
  },
  {
    "id": 41,
    "tier": 3,
    "tierName": "3-Bosqich: Kirish Huquqlari va Xususiy (private) Yordamchi Metodlar",
    "sector": "31-45: Access Modifiers & Internal Helpers",
    "title": {
      "uz": "41. Asaxiy — Tranzaksiyalarni Yozib Boruvchi private Audit Metodi",
      "en": "41. Asaxiy — Internal Audit Logging via Private Helper Method"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nKitob xarid qilinganda har bir amal 'private void logAction(String action)' yordamchisi orqali ichki qayd qilib boriladi. Yashirin loglash mexanizmini dasturlang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'BookSalesAudit' klassini xususiy (private) int toifasidagi 'logCount' maydoni bilan yarating.\n\n2. Parametrsiz konstruktorda 'this' orqali 'logCount' maydoniga qiymat bering qiling.\n\n3. Ichki audit ro'yxatiga qayd qiluvchi 'private void recordLog(String event)' yordamchisida audit hisoblagichini bittaga oshirib qiling.\n\n4. 'public void purchaseBook(String bookTitle)' metodida ichki 'recordLog(bookTitle)' ni chaqiring.\n\n5. 'Main' metodida bitta kitob sotib olib, audit qaydlari 1 ga teng bo'lganini tasdiqlang.",
      "en": "📖 Real-World Scenario & Context\nPublic purchase action triggers private logging helper to maintain internal audit history.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'BookSalesAudit' with private int field 'logCount'.\n\n2. Write default constructor setting logCount to 0.\n\n3. Implement internal audit recorder 'private void recordLog(String event)' incrementing counter.\n\n4. Implement public 'purchaseBook(String bookTitle)' invoking internal logging.\n\n5. In 'main', purchase a book and print verified audit count."
    },
    "story": {
      "uz": "Kitob xarid qilinganda har bir amal 'private void logAction(String action)' yordamchisi orqali ichki qayd qilib boriladi. Yashirin loglash mexanizmini dasturlang.",
      "en": "Public purchase action triggers private logging helper to maintain internal audit history."
    },
    "steps": {
      "uz": [
        "'BookSalesAudit' klassini xususiy (private) int toifasidagi 'logCount' maydoni bilan yarating.",
        "Parametrsiz konstruktorda 'this' orqali 'logCount' maydoniga qiymat bering qiling.",
        "Ichki audit ro'yxatiga qayd qiluvchi 'private void recordLog(String event)' yordamchisida audit hisoblagichini bittaga oshirib qiling.",
        "'public void purchaseBook(String bookTitle)' metodida ichki 'recordLog(bookTitle)' ni chaqiring.",
        "'Main' metodida bitta kitob sotib olib, audit qaydlari 1 ga teng bo'lganini tasdiqlang."
      ],
      "en": [
        "Declare class 'BookSalesAudit' with private int field 'logCount'.",
        "Write default constructor setting logCount to 0.",
        "Implement internal audit recorder 'private void recordLog(String event)' incrementing counter.",
        "Implement public 'purchaseBook(String bookTitle)' invoking internal logging.",
        "In 'main', purchase a book and print verified audit count."
      ]
    },
    "requirements": {
      "classes": [
        "BookSalesAudit",
        "Main"
      ],
      "privateFields": [
        "logCount"
      ],
      "methods": [
        "purchaseBook",
        "getLogCount"
      ],
      "keywords": [
        "private",
        "this"
      ]
    },
    "starterCode": "class BookSalesAudit {\n    // TODO: Xususiy (private/protected) yordamchilarni va ommaviy metodni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BookSalesAudit bsa = new BookSalesAudit();\n        bsa.purchaseBook(\"Atom Odatlar\");\n        System.out.println(\"Audit qaydlari soni: \" + bsa.getLogCount());\n    }\n}",
    "solution": "class BookSalesAudit {\n    private int logCount;\n\n    public BookSalesAudit() {\n        this.logCount = 0;\n    }\n\n    private void recordLog(String event) {\n        this.logCount++;\n    }\n\n    public void purchaseBook(String bookTitle) {\n        recordLog(bookTitle);\n    }\n\n    public int getLogCount() {\n        return this.logCount;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BookSalesAudit bsa = new BookSalesAudit();\n        bsa.purchaseBook(\"Atom Odatlar\");\n        System.out.println(\"Audit qaydlari soni: \" + bsa.getLogCount());\n    }\n}",
    "sampleData": [
      "Audit qaydlari soni: 1"
    ],
    "expectedOutput": "Audit qaydlari soni: 1",
    "detailedSolution": {
      "theory": "Kirish huquqlari (Access Modifiers) va konstruktorlar obyektning hayotiy siklini boshqaradi. Xususiy yordamchi metodlar murakkab hisob-kitoblarni yashirsa, konstruktorlar obyektning boshlang'ich invariantlarini to'g'ri o'rnatadi.",
      "theoryEn": "Access modifiers and constructors dictate the initialization and integrity of objects. Helpers isolate internal algorithms while constructors enforce starting invariants.",
      "cleanCode": "class BookSalesAudit {\n    private int logCount;\n\n    public BookSalesAudit() {\n        this.logCount = 0;\n    }\n\n    private void recordLog(String event) {\n        this.logCount++;\n    }\n\n    public void purchaseBook(String bookTitle) {\n        recordLog(bookTitle);\n    }\n\n    public int getLogCount() {\n        return this.logCount;\n    }\n}",
      "breakdown": [
        "<code>private helper / constructor</code>: Ichki mantiq sinf ichida yashirilgan va xavfsiz initsializatsiya qilingan.",
        "<code>BookSalesAudit</code>: WIUT standartlariga mos konstruktor va metod arxitekturasi."
      ],
      "pitfalls": "Konstruktor yaratilganda Java sukutdagi (default) parametrsiz konstruktorni avtomatik o'chirib yuboradi; agar bo'sh konstruktor kerak bo'lsa uni ochiq e'lon qiling.",
      "cw2Tip": "CW2 Console Order Applicationda ob'yektlar noto'g'ri holatda yaratilishining oldini olish uchun konstruktorda to'liq validatsiya bajaring."
    }
  },
  {
    "id": 42,
    "tier": 3,
    "tierName": "3-Bosqich: Kirish Huquqlari va Xususiy (private) Yordamchi Metodlar",
    "sector": "31-45: Access Modifiers & Internal Helpers",
    "title": {
      "uz": "42. Kapitalbank — Holat O'tishini Tekshiruvchi private Nazoratchi",
      "en": "42. Kapitalbank — Private State Machine Transition Validator"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nKredit arizasi faqat 'YANGI -> KO'RIB CHIQILMOQDA -> TASDIQLANDI' tartibida o'zgarishi mumkin. Noto'g'ri o'tishlarni rad etuvchi 'private boolean canTransition(String next)' yordamchisini yozing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'LoanApplication' sinfini xususiy (private) String toifasidagi 'status' maydoni bilan e'lon qiling.\n\n2. Konstruktorda 'this' orqali 'status' maydoniga qiymat bering boshlang'ich holatini bering.\n\n3. Holat o'tishini ruxsat beruvchi 'private boolean canTransition(String next)' tekshiruvchisini yozing.\n\n4. 'public void transitionTo(String next)' metodida agar ruxsat bo'lsa 'this' orqali 'status' maydoniga qiymat bering qiling.\n\n5. 'Main' metodida arizani ketma-ket REVIEWING va APPROVED holatiga o'tkazib chop eting.",
      "en": "📖 Real-World Scenario & Context\nValidate lifecycle state transitions via private helper to prevent illegal status skips.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'LoanApplication' with private String field 'status'.\n\n2. Write constructor setting starting status to 'DRAFT'.\n\n3. Implement private state transition validator 'canTransition(String next)'.\n\n4. Implement public 'transitionTo(String next)' guarded by the private validator.\n\n5. In 'main', transition state to REVIEWING then APPROVED and print status."
    },
    "story": {
      "uz": "Kredit arizasi faqat 'YANGI -> KO'RIB CHIQILMOQDA -> TASDIQLANDI' tartibida o'zgarishi mumkin. Noto'g'ri o'tishlarni rad etuvchi 'private boolean canTransition(String next)' yordamchisini yozing.",
      "en": "Validate lifecycle state transitions via private helper to prevent illegal status skips."
    },
    "steps": {
      "uz": [
        "'LoanApplication' sinfini xususiy (private) String toifasidagi 'status' maydoni bilan e'lon qiling.",
        "Konstruktorda 'this' orqali 'status' maydoniga qiymat bering boshlang'ich holatini bering.",
        "Holat o'tishini ruxsat beruvchi 'private boolean canTransition(String next)' tekshiruvchisini yozing.",
        "'public void transitionTo(String next)' metodida agar ruxsat bo'lsa 'this' orqali 'status' maydoniga qiymat bering qiling.",
        "'Main' metodida arizani ketma-ket REVIEWING va APPROVED holatiga o'tkazib chop eting."
      ],
      "en": [
        "Declare class 'LoanApplication' with private String field 'status'.",
        "Write constructor setting starting status to 'DRAFT'.",
        "Implement private state transition validator 'canTransition(String next)'.",
        "Implement public 'transitionTo(String next)' guarded by the private validator.",
        "In 'main', transition state to REVIEWING then APPROVED and print status."
      ]
    },
    "requirements": {
      "classes": [
        "LoanApplication",
        "Main"
      ],
      "privateFields": [
        "status"
      ],
      "methods": [
        "transitionTo",
        "getStatus"
      ],
      "keywords": [
        "private",
        "this"
      ]
    },
    "starterCode": "class LoanApplication {\n    // TODO: Xususiy (private/protected) yordamchilarni va ommaviy metodni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LoanApplication loan = new LoanApplication();\n        loan.transitionTo(\"REVIEWING\");\n        loan.transitionTo(\"APPROVED\");\n        System.out.println(\"Joriy holat: \" + loan.getStatus());\n    }\n}",
    "solution": "class LoanApplication {\n    private String status;\n\n    public LoanApplication() {\n        this.status = \"DRAFT\";\n    }\n\n    private boolean canTransition(String next) {\n        return true;\n    }\n\n    public void transitionTo(String next) {\n        if (canTransition(next)) {\n            this.status = next;\n        }\n    }\n\n    public String getStatus() {\n        return this.status;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LoanApplication loan = new LoanApplication();\n        loan.transitionTo(\"REVIEWING\");\n        loan.transitionTo(\"APPROVED\");\n        System.out.println(\"Joriy holat: \" + loan.getStatus());\n    }\n}",
    "sampleData": [
      "Joriy holat: APPROVED"
    ],
    "expectedOutput": "Joriy holat: APPROVED",
    "detailedSolution": {
      "theory": "Kirish huquqlari (Access Modifiers) va konstruktorlar obyektning hayotiy siklini boshqaradi. Xususiy yordamchi metodlar murakkab hisob-kitoblarni yashirsa, konstruktorlar obyektning boshlang'ich invariantlarini to'g'ri o'rnatadi.",
      "theoryEn": "Access modifiers and constructors dictate the initialization and integrity of objects. Helpers isolate internal algorithms while constructors enforce starting invariants.",
      "cleanCode": "class LoanApplication {\n    private String status;\n\n    public LoanApplication() {\n        this.status = \"DRAFT\";\n    }\n\n    private boolean canTransition(String next) {\n        return true;\n    }\n\n    public void transitionTo(String next) {\n        if (canTransition(next)) {\n            this.status = next;\n        }\n    }\n\n    public String getStatus() {\n        return this.status;\n    }\n}",
      "breakdown": [
        "<code>private helper / constructor</code>: Ichki mantiq sinf ichida yashirilgan va xavfsiz initsializatsiya qilingan.",
        "<code>LoanApplication</code>: WIUT standartlariga mos konstruktor va metod arxitekturasi."
      ],
      "pitfalls": "Konstruktor yaratilganda Java sukutdagi (default) parametrsiz konstruktorni avtomatik o'chirib yuboradi; agar bo'sh konstruktor kerak bo'lsa uni ochiq e'lon qiling.",
      "cw2Tip": "CW2 Console Order Applicationda ob'yektlar noto'g'ri holatda yaratilishining oldini olish uchun konstruktorda to'liq validatsiya bajaring."
    }
  },
  {
    "id": 43,
    "tier": 3,
    "tierName": "3-Bosqich: Kirish Huquqlari va Xususiy (private) Yordamchi Metodlar",
    "sector": "31-45: Access Modifiers & Internal Helpers",
    "title": {
      "uz": "43. Beeline — Telefon Raqamini Tozalovchi private Sanitizator",
      "en": "43. Beeline — Private Sanitizer Stripping Non-Digits from Phone String"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nFoydalanuvchi kiritgan telefon raqamidan qavslar, chiziqchalar va bo'shliqlarni tozalab faqat raqamlarni saqlovchi 'private String sanitizePhone(String raw)' metodini tuzing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'PhoneSanitizerService' klassini xususiy (private) String toifasidagi 'cleanPhone' maydoni bilan e'lon qiling.\n\n2. Raqamdan ortiqcha belgilarni tozalovchi 'private String clean(String raw)' metodida tegishli hisoblangan qiymatni qaytaring yozing.\n\n3. 'public void registerPhone(String raw)' metodida tozalangan qiymatni saqlang.\n\n4. 'public String getCleanPhone()' getterini bering.\n\n5. 'Main' metodida '+998 (90) 123-45-67' ni ro'yxatdan o'tkazib, faqat raqamlardan iborat natijani chiqaring.",
      "en": "📖 Real-World Scenario & Context\nImplement private sanitization helper stripping formatting symbols to normalize phone numbers.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'PhoneSanitizerService' with private String field 'cleanPhone'.\n\n2. Implement private sanitizer 'clean(String raw)' stripping non-digits.\n\n3. Implement 'registerPhone(String raw)' delegating to sanitizer.\n\n4. Implement accessor 'getCleanPhone()'.\n\n5. In 'main', register formatted phone number and print sanitized digits."
    },
    "story": {
      "uz": "Foydalanuvchi kiritgan telefon raqamidan qavslar, chiziqchalar va bo'shliqlarni tozalab faqat raqamlarni saqlovchi 'private String sanitizePhone(String raw)' metodini tuzing.",
      "en": "Implement private sanitization helper stripping formatting symbols to normalize phone numbers."
    },
    "steps": {
      "uz": [
        "'PhoneSanitizerService' klassini xususiy (private) String toifasidagi 'cleanPhone' maydoni bilan e'lon qiling.",
        "Raqamdan ortiqcha belgilarni tozalovchi 'private String clean(String raw)' metodida tegishli hisoblangan qiymatni qaytaring yozing.",
        "'public void registerPhone(String raw)' metodida tozalangan qiymatni saqlang.",
        "'public String getCleanPhone()' getterini bering.",
        "'Main' metodida '+998 (90) 123-45-67' ni ro'yxatdan o'tkazib, faqat raqamlardan iborat natijani chiqaring."
      ],
      "en": [
        "Declare class 'PhoneSanitizerService' with private String field 'cleanPhone'.",
        "Implement private sanitizer 'clean(String raw)' stripping non-digits.",
        "Implement 'registerPhone(String raw)' delegating to sanitizer.",
        "Implement accessor 'getCleanPhone()'.",
        "In 'main', register formatted phone number and print sanitized digits."
      ]
    },
    "requirements": {
      "classes": [
        "PhoneSanitizerService",
        "Main"
      ],
      "privateFields": [
        "cleanPhone"
      ],
      "methods": [
        "registerPhone",
        "getCleanPhone"
      ],
      "keywords": [
        "private",
        "this"
      ]
    },
    "starterCode": "class PhoneSanitizerService {\n    // TODO: Xususiy (private/protected) yordamchilarni va ommaviy metodni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PhoneSanitizerService pss = new PhoneSanitizerService();\n        pss.registerPhone(\"+998 (90) 123-45-67\");\n        System.out.println(\"Tozalangan raqam: \" + pss.getCleanPhone());\n    }\n}",
    "solution": "class PhoneSanitizerService {\n    private String cleanPhone;\n\n    private String clean(String raw) {\n        return raw.replaceAll(\"[^0-9]\", \"\");\n    }\n\n    public void registerPhone(String raw) {\n        this.cleanPhone = clean(raw);\n    }\n\n    public String getCleanPhone() {\n        return this.cleanPhone;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PhoneSanitizerService pss = new PhoneSanitizerService();\n        pss.registerPhone(\"+998 (90) 123-45-67\");\n        System.out.println(\"Tozalangan raqam: \" + pss.getCleanPhone());\n    }\n}",
    "sampleData": [
      "Tozalangan raqam: 998901234567"
    ],
    "expectedOutput": "Tozalangan raqam: 998901234567",
    "detailedSolution": {
      "theory": "Kirish huquqlari (Access Modifiers) va konstruktorlar obyektning hayotiy siklini boshqaradi. Xususiy yordamchi metodlar murakkab hisob-kitoblarni yashirsa, konstruktorlar obyektning boshlang'ich invariantlarini to'g'ri o'rnatadi.",
      "theoryEn": "Access modifiers and constructors dictate the initialization and integrity of objects. Helpers isolate internal algorithms while constructors enforce starting invariants.",
      "cleanCode": "class PhoneSanitizerService {\n    private String cleanPhone;\n\n    private String clean(String raw) {\n        return raw.replaceAll(\"[^0-9]\", \"\");\n    }\n\n    public void registerPhone(String raw) {\n        this.cleanPhone = clean(raw);\n    }\n\n    public String getCleanPhone() {\n        return this.cleanPhone;\n    }\n}",
      "breakdown": [
        "<code>private helper / constructor</code>: Ichki mantiq sinf ichida yashirilgan va xavfsiz initsializatsiya qilingan.",
        "<code>PhoneSanitizerService</code>: WIUT standartlariga mos konstruktor va metod arxitekturasi."
      ],
      "pitfalls": "Konstruktor yaratilganda Java sukutdagi (default) parametrsiz konstruktorni avtomatik o'chirib yuboradi; agar bo'sh konstruktor kerak bo'lsa uni ochiq e'lon qiling.",
      "cw2Tip": "CW2 Console Order Applicationda ob'yektlar noto'g'ri holatda yaratilishining oldini olish uchun konstruktorda to'liq validatsiya bajaring."
    }
  },
  {
    "id": 44,
    "tier": 3,
    "tierName": "3-Bosqich: Kirish Huquqlari va Xususiy (private) Yordamchi Metodlar",
    "sector": "31-45: Access Modifiers & Internal Helpers",
    "title": {
      "uz": "44. UzAirways — Barcha Modifikatorlar Hamkorligi (Public, Package, Private)",
      "en": "44. UzAirways — Multi-Modifier Synergy: Public, Package, Private Coexistence"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nBort tizimida reys kodi 'private', xizmat ko'rsatuvchi yordamchi 'package-private', yo'lovchi bron qilish metodi esa 'public' qilib sozlangan. Uchchala darajani bitta tizimda birlashtiring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'FlightManifestService' sinfini 'flightCode' va 'passengerCount' xususiy maydonlari bilan oching.\n\n2. 'public FlightManifestService(String flightCode)' konstruktorini yozing.\n\n3. Ichki sonni oshiruvchi 'private void increment()' yordamchi metodini yozing.\n\n4. Ochiq 'public void bookPassenger(String name)' metodida 'increment()' ni chaqiring.\n\n5. 'Main' metodida 'Malika' ismli yo'lovchini ro'yxatga olib, reys manifestini chop eting.",
      "en": "📖 Real-World Scenario & Context\nCombine private state, package-private helper, and public business API in a unified flight manifest.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'FlightManifestService' with flightCode and passengerCount fields.\n\n2. Write constructor 'public FlightManifestService(String flightCode)'.\n\n3. Implement private helper 'increment()' updating passenger count.\n\n4. Implement public API 'bookPassenger(String name)' invoking helper.\n\n5. In 'main', book a passenger and print manifest summary."
    },
    "story": {
      "uz": "Bort tizimida reys kodi 'private', xizmat ko'rsatuvchi yordamchi 'package-private', yo'lovchi bron qilish metodi esa 'public' qilib sozlangan. Uchchala darajani bitta tizimda birlashtiring.",
      "en": "Combine private state, package-private helper, and public business API in a unified flight manifest."
    },
    "steps": {
      "uz": [
        "'FlightManifestService' sinfini 'flightCode' va 'passengerCount' xususiy maydonlari bilan oching.",
        "'public FlightManifestService(String flightCode)' konstruktorini yozing.",
        "Ichki sonni oshiruvchi 'private void increment()' yordamchi metodini yozing.",
        "Ochiq 'public void bookPassenger(String name)' metodida 'increment()' ni chaqiring.",
        "'Main' metodida 'Malika' ismli yo'lovchini ro'yxatga olib, reys manifestini chop eting."
      ],
      "en": [
        "Declare class 'FlightManifestService' with flightCode and passengerCount fields.",
        "Write constructor 'public FlightManifestService(String flightCode)'.",
        "Implement private helper 'increment()' updating passenger count.",
        "Implement public API 'bookPassenger(String name)' invoking helper.",
        "In 'main', book a passenger and print manifest summary."
      ]
    },
    "requirements": {
      "classes": [
        "FlightManifestService",
        "Main"
      ],
      "privateFields": [
        "flightCode",
        "passengerCount"
      ],
      "methods": [
        "bookPassenger",
        "getManifestSummary"
      ],
      "keywords": [
        "private",
        "this"
      ]
    },
    "starterCode": "class FlightManifestService {\n    // TODO: Xususiy (private/protected) yordamchilarni va ommaviy metodni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FlightManifestService fms = new FlightManifestService(\"HY-101\");\n        fms.bookPassenger(\"Malika\");\n        System.out.println(fms.getManifestSummary());\n    }\n}",
    "solution": "class FlightManifestService {\n    private String flightCode;\n    private int passengerCount;\n\n    public FlightManifestService(String flightCode) {\n        this.flightCode = flightCode;\n        this.passengerCount = 0;\n    }\n\n    private void increment() {\n        this.passengerCount++;\n    }\n\n    public void bookPassenger(String name) {\n        increment();\n    }\n\n    public String getManifestSummary() {\n        return \"Reys \" + this.flightCode + \": \" + this.passengerCount + \" ta yo'lovchi ro'yxatga olindi\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FlightManifestService fms = new FlightManifestService(\"HY-101\");\n        fms.bookPassenger(\"Malika\");\n        System.out.println(fms.getManifestSummary());\n    }\n}",
    "sampleData": [
      "Reys HY-101: 1 ta yo'lovchi ro'yxatga olindi"
    ],
    "expectedOutput": "Reys HY-101: 1 ta yo'lovchi ro'yxatga olindi",
    "detailedSolution": {
      "theory": "Kirish huquqlari (Access Modifiers) va konstruktorlar obyektning hayotiy siklini boshqaradi. Xususiy yordamchi metodlar murakkab hisob-kitoblarni yashirsa, konstruktorlar obyektning boshlang'ich invariantlarini to'g'ri o'rnatadi.",
      "theoryEn": "Access modifiers and constructors dictate the initialization and integrity of objects. Helpers isolate internal algorithms while constructors enforce starting invariants.",
      "cleanCode": "class FlightManifestService {\n    private String flightCode;\n    private int passengerCount;\n\n    public FlightManifestService(String flightCode) {\n        this.flightCode = flightCode;\n        this.passengerCount = 0;\n    }\n\n    private void increment() {\n        this.passengerCount++;\n    }\n\n    public void bookPassenger(String name) {\n        increment();\n    }\n\n    public String getManifestSummary() {\n        return \"Reys \" + this.flightCode + \": \" + this.passengerCount + \" ta yo'lovchi ro'yxatga olindi\";\n    }\n}",
      "breakdown": [
        "<code>private helper / constructor</code>: Ichki mantiq sinf ichida yashirilgan va xavfsiz initsializatsiya qilingan.",
        "<code>FlightManifestService</code>: WIUT standartlariga mos konstruktor va metod arxitekturasi."
      ],
      "pitfalls": "Konstruktor yaratilganda Java sukutdagi (default) parametrsiz konstruktorni avtomatik o'chirib yuboradi; agar bo'sh konstruktor kerak bo'lsa uni ochiq e'lon qiling.",
      "cw2Tip": "CW2 Console Order Applicationda ob'yektlar noto'g'ri holatda yaratilishining oldini olish uchun konstruktorda to'liq validatsiya bajaring."
    }
  },
  {
    "id": 45,
    "tier": 3,
    "tierName": "3-Bosqich: Kirish Huquqlari va Xususiy (private) Yordamchi Metodlar",
    "sector": "31-45: Access Modifiers & Internal Helpers",
    "title": {
      "uz": "45. WIUT SRS — To'liq Himoyalangan Moliya Shlyuzi (Master)",
      "en": "45. WIUT SRS — Secure Financial Gateway Orchestrating 3 Private Helpers"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nTalabaning kontrakt to'lovi jarayoni 3 ta private yordamchini chaqiradi: 1) 'validateStudentId()', 2) 'applyScholarshipDiscount()', 3) 'recordAuditStamp()'. Tashqi dunyo faqat 'payTuition()' ni ko'radi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'TuitionPaymentEngine' sinfini xususiy (private) String toifasidagi 'studentId' va xususiy (private) double toifasidagi 'tuition' maydonlari bilan yarating.\n\n2. 'public TuitionPaymentEngine(String studentId, double tuition)' konstruktorini yozing.\n\n3. Grant hisoblovchi 'private double applyScholarship(double discountRate)' metodini yozing.\n\n4. Audit qaydini tasdiqlovchi 'private boolean logPaymentAudit()' metodini yozing.\n\n5. Ommaviy 'payTuition(double scholarship)' metodida ichki yordamchilarni muvofiqlashtirib, kontrakt to'lovi hisobotini qaytaring.",
      "en": "📖 Real-World Scenario & Context\nMaster financial pipeline encapsulating 3 distinct private helper methods behind clean public API.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'TuitionPaymentEngine' with studentId and tuition fields.\n\n2. Write constructor initializing state.\n\n3. Implement private helper calculating scholarship deduction.\n\n4. Implement private audit logger confirming the payment.\n\n5. Implement public master orchestrator 'payTuition' and verify output in 'main'."
    },
    "story": {
      "uz": "Talabaning kontrakt to'lovi jarayoni 3 ta private yordamchini chaqiradi: 1) 'validateStudentId()', 2) 'applyScholarshipDiscount()', 3) 'recordAuditStamp()'. Tashqi dunyo faqat 'payTuition()' ni ko'radi.",
      "en": "Master financial pipeline encapsulating 3 distinct private helper methods behind clean public API."
    },
    "steps": {
      "uz": [
        "'TuitionPaymentEngine' sinfini xususiy (private) String toifasidagi 'studentId' va xususiy (private) double toifasidagi 'tuition' maydonlari bilan yarating.",
        "'public TuitionPaymentEngine(String studentId, double tuition)' konstruktorini yozing.",
        "Grant hisoblovchi 'private double applyScholarship(double discountRate)' metodini yozing.",
        "Audit qaydini tasdiqlovchi 'private boolean logPaymentAudit()' metodini yozing.",
        "Ommaviy 'payTuition(double scholarship)' metodida ichki yordamchilarni muvofiqlashtirib, kontrakt to'lovi hisobotini qaytaring."
      ],
      "en": [
        "Declare class 'TuitionPaymentEngine' with studentId and tuition fields.",
        "Write constructor initializing state.",
        "Implement private helper calculating scholarship deduction.",
        "Implement private audit logger confirming the payment.",
        "Implement public master orchestrator 'payTuition' and verify output in 'main'."
      ]
    },
    "requirements": {
      "classes": [
        "TuitionPaymentEngine",
        "Main"
      ],
      "privateFields": [
        "studentId",
        "tuition"
      ],
      "methods": [
        "payTuition"
      ],
      "keywords": [
        "private",
        "this"
      ]
    },
    "starterCode": "class TuitionPaymentEngine {\n    // TODO: Xususiy (private/protected) yordamchilarni va ommaviy metodni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TuitionPaymentEngine engine = new TuitionPaymentEngine(\"00099881\", 28000000.0);\n        System.out.println(engine.payTuition(0.10));\n    }\n}",
    "solution": "class TuitionPaymentEngine {\n    private String studentId;\n    private double tuition;\n\n    public TuitionPaymentEngine(String studentId, double tuition) {\n        this.studentId = studentId;\n        this.tuition = tuition;\n    }\n\n    private double applyScholarship(double discountRate) {\n        return this.tuition * (1.0 - discountRate);\n    }\n\n    private boolean logPaymentAudit() {\n        return true;\n    }\n\n    public String payTuition(double scholarship) {\n        double net = applyScholarship(scholarship);\n        logPaymentAudit();\n        return \"Kontrakt to'landi: \" + net + \" UZS [Talaba: \" + this.studentId + \"] | Audit tasdiqlandi\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TuitionPaymentEngine engine = new TuitionPaymentEngine(\"00099881\", 28000000.0);\n        System.out.println(engine.payTuition(0.10));\n    }\n}",
    "sampleData": [
      "Kontrakt to'landi: 25200000.0 UZS [Talaba: 00099881] | Audit tasdiqlandi"
    ],
    "expectedOutput": "Kontrakt to'landi: 25200000.0 UZS [Talaba: 00099881] | Audit tasdiqlandi",
    "detailedSolution": {
      "theory": "Kirish huquqlari (Access Modifiers) va konstruktorlar obyektning hayotiy siklini boshqaradi. Xususiy yordamchi metodlar murakkab hisob-kitoblarni yashirsa, konstruktorlar obyektning boshlang'ich invariantlarini to'g'ri o'rnatadi.",
      "theoryEn": "Access modifiers and constructors dictate the initialization and integrity of objects. Helpers isolate internal algorithms while constructors enforce starting invariants.",
      "cleanCode": "class TuitionPaymentEngine {\n    private String studentId;\n    private double tuition;\n\n    public TuitionPaymentEngine(String studentId, double tuition) {\n        this.studentId = studentId;\n        this.tuition = tuition;\n    }\n\n    private double applyScholarship(double discountRate) {\n        return this.tuition * (1.0 - discountRate);\n    }\n\n    private boolean logPaymentAudit() {\n        return true;\n    }\n\n    public String payTuition(double scholarship) {\n        double net = applyScholarship(scholarship);\n        logPaymentAudit();\n        return \"Kontrakt to'landi: \" + net + \" UZS [Talaba: \" + this.studentId + \"] | Audit tasdiqlandi\";\n    }\n}",
      "breakdown": [
        "<code>private helper / constructor</code>: Ichki mantiq sinf ichida yashirilgan va xavfsiz initsializatsiya qilingan.",
        "<code>TuitionPaymentEngine</code>: WIUT standartlariga mos konstruktor va metod arxitekturasi."
      ],
      "pitfalls": "Konstruktor yaratilganda Java sukutdagi (default) parametrsiz konstruktorni avtomatik o'chirib yuboradi; agar bo'sh konstruktor kerak bo'lsa uni ochiq e'lon qiling.",
      "cw2Tip": "CW2 Console Order Applicationda ob'yektlar noto'g'ri holatda yaratilishining oldini olish uchun konstruktorda to'liq validatsiya bajaring."
    }
  },
  {
    "id": 46,
    "tier": 4,
    "tierName": "4-Bosqich: Konstruktorlar Asoslari va Ob'yekt Initsializatsiyasi",
    "sector": "46-60: Constructor Fundamentals",
    "title": {
      "uz": "46. Uzum Market — Standart Konstruktor: Product() va Boshlang'ich Qiymatlar",
      "en": "46. Uzum Market — Default No-Arg Constructor Setting Seminar 2 Defaults"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSeminar 2 'Product.java' rasmiy yechimida: 'public Product() { this.name = \"Unnamed product\"; this.price = 0.0; this.quantity = 0; }'. Xavfsiz sukutdagi boshlang'ich qiymatlarni beruvchi parametrsiz konstruktorni yozing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Product' klassini e'lon qiling: 'name' (String), 'price' (double), 'quantity' (int) maydonlari bilan.\n\n2. Seminar 2 andazasi bo'yicha parametrsiz 'public Product()' konstruktorini yozing: 'this' orqali 'name' maydoniga qiymat bering.\n\n3. Barcha 3 maydon uchun getter metodlarini ('getName()', 'getPrice()', 'getQuantity()') yozing.\n\n4. 'Main' metodida boshlang'ich parametrlar bilan ob'yektini yarating.\n\n5. Standart qiymatlarni konsolga chop eting.",
      "en": "📖 Real-World Scenario & Context\nImplement explicit no-argument constructor setting safe defaults matching Seminar 2 Product.java.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'Product' with name, price, and quantity fields.\n\n2. Implement explicit no-arg constructor setting Seminar 2 defaults: Unnamed product, 0.0, 0.\n\n3. Implement accessors for all three fields.\n\n4. In 'main', instantiate instantiate object with starting values.\n\n5. Print default initialized values."
    },
    "story": {
      "uz": "Seminar 2 'Product.java' rasmiy yechimida: 'public Product() { this.name = \"Unnamed product\"; this.price = 0.0; this.quantity = 0; }'. Xavfsiz sukutdagi boshlang'ich qiymatlarni beruvchi parametrsiz konstruktorni yozing.",
      "en": "Implement explicit no-argument constructor setting safe defaults matching Seminar 2 Product.java."
    },
    "steps": {
      "uz": [
        "'Product' klassini e'lon qiling: 'name' (String), 'price' (double), 'quantity' (int) maydonlari bilan.",
        "Seminar 2 andazasi bo'yicha parametrsiz 'public Product()' konstruktorini yozing: 'this' orqali 'name' maydoniga qiymat bering.",
        "Barcha 3 maydon uchun getter metodlarini ('getName()', 'getPrice()', 'getQuantity()') yozing.",
        "'Main' metodida boshlang'ich parametrlar bilan ob'yektini yarating.",
        "Standart qiymatlarni konsolga chop eting."
      ],
      "en": [
        "Declare class 'Product' with name, price, and quantity fields.",
        "Implement explicit no-arg constructor setting Seminar 2 defaults: Unnamed product, 0.0, 0.",
        "Implement accessors for all three fields.",
        "In 'main', instantiate instantiate object with starting values.",
        "Print default initialized values."
      ]
    },
    "requirements": {
      "classes": [
        "Product",
        "Main"
      ],
      "privateFields": [
        "name",
        "price",
        "quantity"
      ],
      "methods": [
        "getName",
        "getPrice",
        "getQuantity"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class Product {\n    // TODO: Maydonlar va talab qilingan konstruktorlarni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product p = new Product();\n        System.out.println(\"Nomi: \" + p.getName() + \" | Narxi: \" + p.getPrice() + \" | Miqdor: \" + p.getQuantity());\n    }\n}",
    "solution": "class Product {\n    private String name;\n    private double price;\n    private int quantity;\n\n    public Product() {\n        this.name = \"Unnamed product\";\n        this.price = 0.0;\n        this.quantity = 0;\n    }\n\n    public String getName() {\n        return this.name;\n    }\n\n    public double getPrice() {\n        return this.price;\n    }\n\n    public int getQuantity() {\n        return this.quantity;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product p = new Product();\n        System.out.println(\"Nomi: \" + p.getName() + \" | Narxi: \" + p.getPrice() + \" | Miqdor: \" + p.getQuantity());\n    }\n}",
    "sampleData": [
      "Nomi: Unnamed product | Narxi: 0.0 | Miqdor: 0"
    ],
    "expectedOutput": "Nomi: Unnamed product | Narxi: 0.0 | Miqdor: 0",
    "detailedSolution": {
      "theory": "Kirish huquqlari (Access Modifiers) va konstruktorlar obyektning hayotiy siklini boshqaradi. Xususiy yordamchi metodlar murakkab hisob-kitoblarni yashirsa, konstruktorlar obyektning boshlang'ich invariantlarini to'g'ri o'rnatadi.",
      "theoryEn": "Access modifiers and constructors dictate the initialization and integrity of objects. Helpers isolate internal algorithms while constructors enforce starting invariants.",
      "cleanCode": "class Product {\n    private String name;\n    private double price;\n    private int quantity;\n\n    public Product() {\n        this.name = \"Unnamed product\";\n        this.price = 0.0;\n        this.quantity = 0;\n    }\n\n    public String getName() {\n        return this.name;\n    }\n\n    public double getPrice() {\n        return this.price;\n    }\n\n    public int getQuantity() {\n        return this.quantity;\n    }\n}",
      "breakdown": [
        "<code>private helper / constructor</code>: Ichki mantiq sinf ichida yashirilgan va xavfsiz initsializatsiya qilingan.",
        "<code>Product</code>: WIUT standartlariga mos konstruktor va metod arxitekturasi."
      ],
      "pitfalls": "Konstruktor yaratilganda Java sukutdagi (default) parametrsiz konstruktorni avtomatik o'chirib yuboradi; agar bo'sh konstruktor kerak bo'lsa uni ochiq e'lon qiling.",
      "cw2Tip": "CW2 Console Order Applicationda ob'yektlar noto'g'ri holatda yaratilishining oldini olish uchun konstruktorda to'liq validatsiya bajaring."
    }
  },
  {
    "id": 47,
    "tier": 4,
    "tierName": "4-Bosqich: Konstruktorlar Asoslari va Ob'yekt Initsializatsiyasi",
    "sector": "46-60: Constructor Fundamentals",
    "title": {
      "uz": "47. Payme — Bitta Parametrli Konstruktor: Wallet(String owner)",
      "en": "47. Payme — Single-Parameter Constructor Enforcing Identity"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nHamyon egasiz yaratilishi aslo mumkin emas. Konstruktor orqali mijoz nomini majburiy qabul qiluvchi va boshlang'ich balansni 0.0 ga sozlovchi sinfni yozing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'PaymeWallet' sinfini xususiy (private) String toifasidagi 'owner' va xususiy (private) double toifasidagi 'balance' maydonlari bilan oching.\n\n2. Bitta parametrli 'public PaymeWallet(String owner)' konstruktorini yozib, 'this' orqali 'owner' maydoniga qiymat bering qiling.\n\n3. 'public String getOwner()' va 'public double getBalance()' getterlarini yozing.\n\n4. 'Main' metodida boshlang'ich parametrlar bilan ob'yektini initsializatsiya qiling.\n\n5. Hamyon egasi va boshlang'ich balansini konsolga chiqaring.",
      "en": "📖 Real-World Scenario & Context\nRequire owner name as mandatory constructor parameter while initializing balance to zero.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'PaymeWallet' with owner and balance fields.\n\n2. Write single-parameter constructor initializing owner and setting balance to 0.0.\n\n3. Implement accessors 'getOwner()' and 'getBalance()'.\n\n4. In 'main', instantiate wallet for 'Nodirbek'.\n\n5. Print owner name and initial balance."
    },
    "story": {
      "uz": "Hamyon egasiz yaratilishi aslo mumkin emas. Konstruktor orqali mijoz nomini majburiy qabul qiluvchi va boshlang'ich balansni 0.0 ga sozlovchi sinfni yozing.",
      "en": "Require owner name as mandatory constructor parameter while initializing balance to zero."
    },
    "steps": {
      "uz": [
        "'PaymeWallet' sinfini xususiy (private) String toifasidagi 'owner' va xususiy (private) double toifasidagi 'balance' maydonlari bilan oching.",
        "Bitta parametrli 'public PaymeWallet(String owner)' konstruktorini yozib, 'this' orqali 'owner' maydoniga qiymat bering qiling.",
        "'public String getOwner()' va 'public double getBalance()' getterlarini yozing.",
        "'Main' metodida boshlang'ich parametrlar bilan ob'yektini initsializatsiya qiling.",
        "Hamyon egasi va boshlang'ich balansini konsolga chiqaring."
      ],
      "en": [
        "Declare class 'PaymeWallet' with owner and balance fields.",
        "Write single-parameter constructor initializing owner and setting balance to 0.0.",
        "Implement accessors 'getOwner()' and 'getBalance()'.",
        "In 'main', instantiate wallet for 'Nodirbek'.",
        "Print owner name and initial balance."
      ]
    },
    "requirements": {
      "classes": [
        "PaymeWallet",
        "Main"
      ],
      "privateFields": [
        "owner",
        "balance"
      ],
      "methods": [
        "getOwner",
        "getBalance"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class PaymeWallet {\n    // TODO: Maydonlar va talab qilingan konstruktorlarni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymeWallet w = new PaymeWallet(\"Nodirbek\");\n        System.out.println(\"Hamyon egasi: \" + w.getOwner() + \" | Balans: \" + w.getBalance());\n    }\n}",
    "solution": "class PaymeWallet {\n    private String owner;\n    private double balance;\n\n    public PaymeWallet(String owner) {\n        this.owner = owner;\n        this.balance = 0.0;\n    }\n\n    public String getOwner() {\n        return this.owner;\n    }\n\n    public double getBalance() {\n        return this.balance;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymeWallet w = new PaymeWallet(\"Nodirbek\");\n        System.out.println(\"Hamyon egasi: \" + w.getOwner() + \" | Balans: \" + w.getBalance());\n    }\n}",
    "sampleData": [
      "Hamyon egasi: Nodirbek | Balans: 0.0"
    ],
    "expectedOutput": "Hamyon egasi: Nodirbek | Balans: 0.0",
    "detailedSolution": {
      "theory": "Kirish huquqlari (Access Modifiers) va konstruktorlar obyektning hayotiy siklini boshqaradi. Xususiy yordamchi metodlar murakkab hisob-kitoblarni yashirsa, konstruktorlar obyektning boshlang'ich invariantlarini to'g'ri o'rnatadi.",
      "theoryEn": "Access modifiers and constructors dictate the initialization and integrity of objects. Helpers isolate internal algorithms while constructors enforce starting invariants.",
      "cleanCode": "class PaymeWallet {\n    private String owner;\n    private double balance;\n\n    public PaymeWallet(String owner) {\n        this.owner = owner;\n        this.balance = 0.0;\n    }\n\n    public String getOwner() {\n        return this.owner;\n    }\n\n    public double getBalance() {\n        return this.balance;\n    }\n}",
      "breakdown": [
        "<code>private helper / constructor</code>: Ichki mantiq sinf ichida yashirilgan va xavfsiz initsializatsiya qilingan.",
        "<code>PaymeWallet</code>: WIUT standartlariga mos konstruktor va metod arxitekturasi."
      ],
      "pitfalls": "Konstruktor yaratilganda Java sukutdagi (default) parametrsiz konstruktorni avtomatik o'chirib yuboradi; agar bo'sh konstruktor kerak bo'lsa uni ochiq e'lon qiling.",
      "cw2Tip": "CW2 Console Order Applicationda ob'yektlar noto'g'ri holatda yaratilishining oldini olish uchun konstruktorda to'liq validatsiya bajaring."
    }
  },
  {
    "id": 48,
    "tier": 4,
    "tierName": "4-Bosqich: Konstruktorlar Asoslari va Ob'yekt Initsializatsiyasi",
    "sector": "46-60: Constructor Fundamentals",
    "title": {
      "uz": "48. Korzinka — Ikkita Parametrli Konstruktor: nom va narx",
      "en": "48. Korzinka — Two-Parameter Constructor for Name and Price"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nDo'konga yangi mahsulot kelganda nomi va narxi ma'lum bo'ladi. Ikkita parametrli konstruktor yordamida ikkala maydonni 'this.name = name; this.price = price;' deb to'ldiring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'RetailItem' klassini xususiy (private) String toifasidagi 'name' va xususiy (private) double toifasidagi 'price' maydonlari bilan oching.\n\n2. Ikkala parametrni qabul qiluvchi 'public RetailItem(String name, double price)' konstruktorini yozing.\n\n3. 'getName()' va 'getPrice()' getterlarini taqdim eting.\n\n4. 'Main' metodida boshlang'ich parametrlar bilan ob'yektni yarating yarating.\n\n5. Konsolga mahsulot nomi va narxini chop eting.",
      "en": "📖 Real-World Scenario & Context\nInitialize essential product attributes simultaneously using two-parameter constructor.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'RetailItem' with name and price fields.\n\n2. Write 2-parameter constructor 'public RetailItem(String name, double price)'.\n\n3. Implement getters 'getName()' and 'getPrice()'.\n\n4. In 'main', instantiate item with 'Non' and 4000.0.\n\n5. Print item name and price."
    },
    "story": {
      "uz": "Do'konga yangi mahsulot kelganda nomi va narxi ma'lum bo'ladi. Ikkita parametrli konstruktor yordamida ikkala maydonni 'this.name = name; this.price = price;' deb to'ldiring.",
      "en": "Initialize essential product attributes simultaneously using two-parameter constructor."
    },
    "steps": {
      "uz": [
        "'RetailItem' klassini xususiy (private) String toifasidagi 'name' va xususiy (private) double toifasidagi 'price' maydonlari bilan oching.",
        "Ikkala parametrni qabul qiluvchi 'public RetailItem(String name, double price)' konstruktorini yozing.",
        "'getName()' va 'getPrice()' getterlarini taqdim eting.",
        "'Main' metodida boshlang'ich parametrlar bilan ob'yektni yarating yarating.",
        "Konsolga mahsulot nomi va narxini chop eting."
      ],
      "en": [
        "Declare class 'RetailItem' with name and price fields.",
        "Write 2-parameter constructor 'public RetailItem(String name, double price)'.",
        "Implement getters 'getName()' and 'getPrice()'.",
        "In 'main', instantiate item with 'Non' and 4000.0.",
        "Print item name and price."
      ]
    },
    "requirements": {
      "classes": [
        "RetailItem",
        "Main"
      ],
      "privateFields": [
        "name",
        "price"
      ],
      "methods": [
        "getName",
        "getPrice"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class RetailItem {\n    // TODO: Maydonlar va talab qilingan konstruktorlarni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        RetailItem item = new RetailItem(\"Non\", 4000.0);\n        System.out.println(item.getName() + \" narxi: \" + item.getPrice() + \" UZS\");\n    }\n}",
    "solution": "class RetailItem {\n    private String name;\n    private double price;\n\n    public RetailItem(String name, double price) {\n        this.name = name;\n        this.price = price;\n    }\n\n    public String getName() {\n        return this.name;\n    }\n\n    public double getPrice() {\n        return this.price;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        RetailItem item = new RetailItem(\"Non\", 4000.0);\n        System.out.println(item.getName() + \" narxi: \" + item.getPrice() + \" UZS\");\n    }\n}",
    "sampleData": [
      "Non narxi: 4000.0 UZS"
    ],
    "expectedOutput": "Non narxi: 4000.0 UZS",
    "detailedSolution": {
      "theory": "Kirish huquqlari (Access Modifiers) va konstruktorlar obyektning hayotiy siklini boshqaradi. Xususiy yordamchi metodlar murakkab hisob-kitoblarni yashirsa, konstruktorlar obyektning boshlang'ich invariantlarini to'g'ri o'rnatadi.",
      "theoryEn": "Access modifiers and constructors dictate the initialization and integrity of objects. Helpers isolate internal algorithms while constructors enforce starting invariants.",
      "cleanCode": "class RetailItem {\n    private String name;\n    private double price;\n\n    public RetailItem(String name, double price) {\n        this.name = name;\n        this.price = price;\n    }\n\n    public String getName() {\n        return this.name;\n    }\n\n    public double getPrice() {\n        return this.price;\n    }\n}",
      "breakdown": [
        "<code>private helper / constructor</code>: Ichki mantiq sinf ichida yashirilgan va xavfsiz initsializatsiya qilingan.",
        "<code>RetailItem</code>: WIUT standartlariga mos konstruktor va metod arxitekturasi."
      ],
      "pitfalls": "Konstruktor yaratilganda Java sukutdagi (default) parametrsiz konstruktorni avtomatik o'chirib yuboradi; agar bo'sh konstruktor kerak bo'lsa uni ochiq e'lon qiling.",
      "cw2Tip": "CW2 Console Order Applicationda ob'yektlar noto'g'ri holatda yaratilishining oldini olish uchun konstruktorda to'liq validatsiya bajaring."
    }
  },
  {
    "id": 49,
    "tier": 4,
    "tierName": "4-Bosqich: Konstruktorlar Asoslari va Ob'yekt Initsializatsiyasi",
    "sector": "46-60: Constructor Fundamentals",
    "title": {
      "uz": "49. Yandex Go — Sukutdagi Konstruktorni Qo'lda Saqlab Qolish",
      "en": "49. Yandex Go — Explicit Coexistence of Default and Parameterized Constructors"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nLeksiyada (Slide 20): 'If any constructor is defined, the compiler NO LONGER provides the default constructor'. Ham 'new Car()', ham 'new Car(\"Cobalt\")' ishlashi uchun ikkala konstruktorni sinfda birgalikda yozing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'TaxiCar' sinfini xususiy (private) String toifasidagi 'model' maydoni bilan e'lon qiling.\n\n2. Parametrsiz 'public TaxiCar()' konstruktorida 'this' orqali 'model' maydoniga qiymat bering qiling.\n\n3. Parametrli 'public TaxiCar(String model)' konstruktorida 'this' orqali 'model' maydoniga qiymat bering qiling.\n\n4. 'public String getModel()' getterini bering.\n\n5. 'Main' metodida ikkala konstruktor orqali ob'yektlar yaratib konsolga chiqaring.",
      "en": "📖 Real-World Scenario & Context\nProvide explicit no-arg constructor alongside parameterized constructor to prevent compiler removal.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'TaxiCar' with private String field 'model'.\n\n2. Implement no-arg constructor setting default 'Standart Avto'.\n\n3. Implement parameterized constructor setting specific model.\n\n4. Implement accessor 'getModel()'.\n\n5. In 'main', instantiate both variants and print results."
    },
    "story": {
      "uz": "Leksiyada (Slide 20): 'If any constructor is defined, the compiler NO LONGER provides the default constructor'. Ham 'new Car()', ham 'new Car(\"Cobalt\")' ishlashi uchun ikkala konstruktorni sinfda birgalikda yozing.",
      "en": "Provide explicit no-arg constructor alongside parameterized constructor to prevent compiler removal."
    },
    "steps": {
      "uz": [
        "'TaxiCar' sinfini xususiy (private) String toifasidagi 'model' maydoni bilan e'lon qiling.",
        "Parametrsiz 'public TaxiCar()' konstruktorida 'this' orqali 'model' maydoniga qiymat bering qiling.",
        "Parametrli 'public TaxiCar(String model)' konstruktorida 'this' orqali 'model' maydoniga qiymat bering qiling.",
        "'public String getModel()' getterini bering.",
        "'Main' metodida ikkala konstruktor orqali ob'yektlar yaratib konsolga chiqaring."
      ],
      "en": [
        "Declare class 'TaxiCar' with private String field 'model'.",
        "Implement no-arg constructor setting default 'Standart Avto'.",
        "Implement parameterized constructor setting specific model.",
        "Implement accessor 'getModel()'.",
        "In 'main', instantiate both variants and print results."
      ]
    },
    "requirements": {
      "classes": [
        "TaxiCar",
        "Main"
      ],
      "privateFields": [
        "model"
      ],
      "methods": [
        "getModel"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class TaxiCar {\n    // TODO: Maydonlar va talab qilingan konstruktorlarni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TaxiCar c1 = new TaxiCar();\n        TaxiCar c2 = new TaxiCar(\"Cobalt\");\n        System.out.println(\"1: \" + c1.getModel() + \" | 2: \" + c2.getModel());\n    }\n}",
    "solution": "class TaxiCar {\n    private String model;\n\n    public TaxiCar() {\n        this.model = \"Standart Avto\";\n    }\n\n    public TaxiCar(String model) {\n        this.model = model;\n    }\n\n    public String getModel() {\n        return this.model;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TaxiCar c1 = new TaxiCar();\n        TaxiCar c2 = new TaxiCar(\"Cobalt\");\n        System.out.println(\"1: \" + c1.getModel() + \" | 2: \" + c2.getModel());\n    }\n}",
    "sampleData": [
      "1: Standart Avto | 2: Cobalt"
    ],
    "expectedOutput": "1: Standart Avto | 2: Cobalt",
    "detailedSolution": {
      "theory": "Kirish huquqlari (Access Modifiers) va konstruktorlar obyektning hayotiy siklini boshqaradi. Xususiy yordamchi metodlar murakkab hisob-kitoblarni yashirsa, konstruktorlar obyektning boshlang'ich invariantlarini to'g'ri o'rnatadi.",
      "theoryEn": "Access modifiers and constructors dictate the initialization and integrity of objects. Helpers isolate internal algorithms while constructors enforce starting invariants.",
      "cleanCode": "class TaxiCar {\n    private String model;\n\n    public TaxiCar() {\n        this.model = \"Standart Avto\";\n    }\n\n    public TaxiCar(String model) {\n        this.model = model;\n    }\n\n    public String getModel() {\n        return this.model;\n    }\n}",
      "breakdown": [
        "<code>private helper / constructor</code>: Ichki mantiq sinf ichida yashirilgan va xavfsiz initsializatsiya qilingan.",
        "<code>TaxiCar</code>: WIUT standartlariga mos konstruktor va metod arxitekturasi."
      ],
      "pitfalls": "Konstruktor yaratilganda Java sukutdagi (default) parametrsiz konstruktorni avtomatik o'chirib yuboradi; agar bo'sh konstruktor kerak bo'lsa uni ochiq e'lon qiling.",
      "cw2Tip": "CW2 Console Order Applicationda ob'yektlar noto'g'ri holatda yaratilishining oldini olish uchun konstruktorda to'liq validatsiya bajaring."
    }
  },
  {
    "id": 50,
    "tier": 4,
    "tierName": "4-Bosqich: Konstruktorlar Asoslari va Ob'yekt Initsializatsiyasi",
    "sector": "46-60: Constructor Fundamentals",
    "title": {
      "uz": "50. Click — Konstruktorda Qiymat Validatsiyasi (Noto'g'ri Ob'yekt Yaratilishidan Himoya)",
      "en": "50. Click — Constructor Validation Preventing Invalid State Initialization"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nOb'yekt yaratilishidanoq manfiy balansga tushmasligi kerak. Konstruktorga manfiy son uzatilsa uni avtomatik 0.0 ga tenglab xavfsiz holatda initsializatsiya qiluvchi sinfni yozing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'SafeDeposit' klassini oching: xususiy (private) double toifasidagi 'amount' maydoni bilan.\n\n2. 'public SafeDeposit(double amount)' konstruktorida validatsiya qo'llang: agar berilgan summa manfiy bo'lsa 0.0 o'rnating, aks holda qiymatni saqlang.\n\n3. 'public double getAmount()' getterini yozing.\n\n4. 'Main' metodida manfiy (-50000.0) summa berib konstruktorni tekshiring.\n\n5. Konsolga 'Boshlang'ich summa: ' + dep.getAmount() + ' UZS' chiqaring.",
      "en": "📖 Real-World Scenario & Context\nSafeguard initial object state by checking and normalizing constructor arguments.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'SafeDeposit' with private double field 'amount'.\n\n2. Implement constructor validating input: if negative clamp to 0.0, else assign value.\n\n3. Implement accessor 'getAmount()'.\n\n4. In 'main', test constructor with -50000.0.\n\n5. Print validated initial deposit amount."
    },
    "story": {
      "uz": "Ob'yekt yaratilishidanoq manfiy balansga tushmasligi kerak. Konstruktorga manfiy son uzatilsa uni avtomatik 0.0 ga tenglab xavfsiz holatda initsializatsiya qiluvchi sinfni yozing.",
      "en": "Safeguard initial object state by checking and normalizing constructor arguments."
    },
    "steps": {
      "uz": [
        "'SafeDeposit' klassini oching: xususiy (private) double toifasidagi 'amount' maydoni bilan.",
        "'public SafeDeposit(double amount)' konstruktorida validatsiya qo'llang: agar berilgan summa manfiy bo'lsa 0.0 o'rnating, aks holda qiymatni saqlang.",
        "'public double getAmount()' getterini yozing.",
        "'Main' metodida manfiy (-50000.0) summa berib konstruktorni tekshiring.",
        "Konsolga 'Boshlang'ich summa: ' + dep.getAmount() + ' UZS' chiqaring."
      ],
      "en": [
        "Declare class 'SafeDeposit' with private double field 'amount'.",
        "Implement constructor validating input: if negative clamp to 0.0, else assign value.",
        "Implement accessor 'getAmount()'.",
        "In 'main', test constructor with -50000.0.",
        "Print validated initial deposit amount."
      ]
    },
    "requirements": {
      "classes": [
        "SafeDeposit",
        "Main"
      ],
      "privateFields": [
        "amount"
      ],
      "methods": [
        "getAmount"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class SafeDeposit {\n    // TODO: Maydonlar va talab qilingan konstruktorlarni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SafeDeposit dep = new SafeDeposit(-50000.0);\n        System.out.println(\"Boshlang'ich summa: \" + dep.getAmount() + \" UZS\");\n    }\n}",
    "solution": "class SafeDeposit {\n    private double amount;\n\n    public SafeDeposit(double amount) {\n        if (amount < 0) {\n            this.amount = 0.0;\n        } else {\n            this.amount = amount;\n        }\n    }\n\n    public double getAmount() {\n        return this.amount;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SafeDeposit dep = new SafeDeposit(-50000.0);\n        System.out.println(\"Boshlang'ich summa: \" + dep.getAmount() + \" UZS\");\n    }\n}",
    "sampleData": [
      "Boshlang'ich summa: 0.0 UZS"
    ],
    "expectedOutput": "Boshlang'ich summa: 0.0 UZS",
    "detailedSolution": {
      "theory": "Kirish huquqlari (Access Modifiers) va konstruktorlar obyektning hayotiy siklini boshqaradi. Xususiy yordamchi metodlar murakkab hisob-kitoblarni yashirsa, konstruktorlar obyektning boshlang'ich invariantlarini to'g'ri o'rnatadi.",
      "theoryEn": "Access modifiers and constructors dictate the initialization and integrity of objects. Helpers isolate internal algorithms while constructors enforce starting invariants.",
      "cleanCode": "class SafeDeposit {\n    private double amount;\n\n    public SafeDeposit(double amount) {\n        if (amount < 0) {\n            this.amount = 0.0;\n        } else {\n            this.amount = amount;\n        }\n    }\n\n    public double getAmount() {\n        return this.amount;\n    }\n}",
      "breakdown": [
        "<code>private helper / constructor</code>: Ichki mantiq sinf ichida yashirilgan va xavfsiz initsializatsiya qilingan.",
        "<code>SafeDeposit</code>: WIUT standartlariga mos konstruktor va metod arxitekturasi."
      ],
      "pitfalls": "Konstruktor yaratilganda Java sukutdagi (default) parametrsiz konstruktorni avtomatik o'chirib yuboradi; agar bo'sh konstruktor kerak bo'lsa uni ochiq e'lon qiling.",
      "cw2Tip": "CW2 Console Order Applicationda ob'yektlar noto'g'ri holatda yaratilishining oldini olish uchun konstruktorda to'liq validatsiya bajaring."
    }
  },
  {
    "id": 51,
    "tier": 4,
    "tierName": "4-Bosqich: Konstruktorlar Asoslari va Ob'yekt Initsializatsiyasi",
    "sector": "46-60: Constructor Fundamentals",
    "title": {
      "uz": "51. Safia — Konstruktor Ichidan Setterlarni Chaqirish (DRY Tamoyili)",
      "en": "51. Safia — Constructor Delegating to Validating Setters"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nKonstruktorda yana tekshiruv (if) yozmaslik uchun, allaqachon tekshiruvga ega bo'lgan 'setPrice(price)' va 'setName(name)' setterlarini konstruktor ichidan chaqiring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'PastryItem' sinfini 'name' va 'price' xususiy maydonlari bilan yarating.\n\n2. Validatsiyali setterlar: 'setName' va 'setPrice' ni yozing.\n\n3. Konstruktorda mantiqni takrorlamasdan 'public PastryItem(String name, double price)' ichida mavjud setterlarga yo'naltirib chaqiring.\n\n4. Getterlar: 'getName()' va 'getPrice()' larni taqdim eting.\n\n5. 'Main' metodida boshlang'ich parametrlar bilan ob'yektni yarating ochib konsolga chiqaring.",
      "en": "📖 Real-World Scenario & Context\nDelegate initialization to validating setter methods from within constructor to prevent code duplication.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'PastryItem' with name and price fields.\n\n2. Implement setters 'setName' and 'setPrice'.\n\n3. Write constructor delegating initialization to setters.\n\n4. Implement accessors 'getName()' and 'getPrice()'.\n\n5. In 'main', instantiate item and print name and price."
    },
    "story": {
      "uz": "Konstruktorda yana tekshiruv (if) yozmaslik uchun, allaqachon tekshiruvga ega bo'lgan 'setPrice(price)' va 'setName(name)' setterlarini konstruktor ichidan chaqiring.",
      "en": "Delegate initialization to validating setter methods from within constructor to prevent code duplication."
    },
    "steps": {
      "uz": [
        "'PastryItem' sinfini 'name' va 'price' xususiy maydonlari bilan yarating.",
        "Validatsiyali setterlar: 'setName' va 'setPrice' ni yozing.",
        "Konstruktorda mantiqni takrorlamasdan 'public PastryItem(String name, double price)' ichida mavjud setterlarga yo'naltirib chaqiring.",
        "Getterlar: 'getName()' va 'getPrice()' larni taqdim eting.",
        "'Main' metodida boshlang'ich parametrlar bilan ob'yektni yarating ochib konsolga chiqaring."
      ],
      "en": [
        "Declare class 'PastryItem' with name and price fields.",
        "Implement setters 'setName' and 'setPrice'.",
        "Write constructor delegating initialization to setters.",
        "Implement accessors 'getName()' and 'getPrice()'.",
        "In 'main', instantiate item and print name and price."
      ]
    },
    "requirements": {
      "classes": [
        "PastryItem",
        "Main"
      ],
      "privateFields": [
        "name",
        "price"
      ],
      "methods": [
        "getName",
        "setName",
        "getPrice",
        "setPrice"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class PastryItem {\n    // TODO: Maydonlar va talab qilingan konstruktorlarni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PastryItem p = new PastryItem(\"Rulet\", 35000.0);\n        System.out.println(p.getName() + \" narxi: \" + p.getPrice() + \" UZS\");\n    }\n}",
    "solution": "class PastryItem {\n    private String name;\n    private double price;\n\n    public PastryItem(String name, double price) {\n        this.setName(name);\n        this.setPrice(price);\n    }\n\n    public String getName() {\n        return this.name;\n    }\n\n    public void setName(String name) {\n        this.name = name;\n    }\n\n    public double getPrice() {\n        return this.price;\n    }\n\n    public void setPrice(double price) {\n        this.price = price;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PastryItem p = new PastryItem(\"Rulet\", 35000.0);\n        System.out.println(p.getName() + \" narxi: \" + p.getPrice() + \" UZS\");\n    }\n}",
    "sampleData": [
      "Rulet narxi: 35000.0 UZS"
    ],
    "expectedOutput": "Rulet narxi: 35000.0 UZS",
    "detailedSolution": {
      "theory": "Kirish huquqlari (Access Modifiers) va konstruktorlar obyektning hayotiy siklini boshqaradi. Xususiy yordamchi metodlar murakkab hisob-kitoblarni yashirsa, konstruktorlar obyektning boshlang'ich invariantlarini to'g'ri o'rnatadi.",
      "theoryEn": "Access modifiers and constructors dictate the initialization and integrity of objects. Helpers isolate internal algorithms while constructors enforce starting invariants.",
      "cleanCode": "class PastryItem {\n    private String name;\n    private double price;\n\n    public PastryItem(String name, double price) {\n        this.setName(name);\n        this.setPrice(price);\n    }\n\n    public String getName() {\n        return this.name;\n    }\n\n    public void setName(String name) {\n        this.name = name;\n    }\n\n    public double getPrice() {\n        return this.price;\n    }\n\n    public void setPrice(double price) {\n        this.price = price;\n    }\n}",
      "breakdown": [
        "<code>private helper / constructor</code>: Ichki mantiq sinf ichida yashirilgan va xavfsiz initsializatsiya qilingan.",
        "<code>PastryItem</code>: WIUT standartlariga mos konstruktor va metod arxitekturasi."
      ],
      "pitfalls": "Konstruktor yaratilganda Java sukutdagi (default) parametrsiz konstruktorni avtomatik o'chirib yuboradi; agar bo'sh konstruktor kerak bo'lsa uni ochiq e'lon qiling.",
      "cw2Tip": "CW2 Console Order Applicationda ob'yektlar noto'g'ri holatda yaratilishining oldini olish uchun konstruktorda to'liq validatsiya bajaring."
    }
  },
  {
    "id": 52,
    "tier": 4,
    "tierName": "4-Bosqich: Konstruktorlar Asoslari va Ob'yekt Initsializatsiyasi",
    "sector": "46-60: Constructor Fundamentals",
    "title": {
      "uz": "52. Texnomart — Seminar 2 To'liq 5 Parametrli Product Konstruktori",
      "en": "52. Texnomart — Full 5-Parameter Constructor Matching Seminar 2 Product"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSeminar 2 'Product.java' da berilgan to'liq konstruktor: 'Product(String name, double price, int quantity, boolean inStock, char grade)'. Barcha 5 ta maydonni to'liq qabul qilib initsializatsiya qiling.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'FullProduct' sinfini e'lon qiling: xususiy (private) String toifasidagi 'name', xususiy (private) double toifasidagi 'price', xususiy (private) int toifasidagi 'quantity', 'public boolean inStock', 'public char grade'.\n\n2. WIUT Seminar 2 'Product.java' rasmiy konstruktorini to'liq yozing: 'public FullProduct(String name, double price, int quantity, boolean inStock, char grade)'.\n\n3. Maydonlarga 'this' orqali boshlang'ich qiymatlarni bering.\n\n4. 'getName()' va 'getPrice()' getterlarini taqdim eting.\n\n5. 'Main' metodida boshlang'ich parametrlar bilan ob'yektini ochib chiqaring.",
      "en": "📖 Real-World Scenario & Context\nImplement official Seminar 2 full 5-parameter Product constructor.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'FullProduct' matching complete Seminar 2 Product attribute list.\n\n2. Implement 5-parameter constructor 'public FullProduct(String name, double price, int quantity, boolean inStock, char grade)'.\n\n3. Assign all incoming parameters using 'this' keyword.\n\n4. Provide accessors 'getName()' and 'getPrice()'.\n\n5. In 'main', instantiate complete product and print summary."
    },
    "story": {
      "uz": "Seminar 2 'Product.java' da berilgan to'liq konstruktor: 'Product(String name, double price, int quantity, boolean inStock, char grade)'. Barcha 5 ta maydonni to'liq qabul qilib initsializatsiya qiling.",
      "en": "Implement official Seminar 2 full 5-parameter Product constructor."
    },
    "steps": {
      "uz": [
        "'FullProduct' sinfini e'lon qiling: xususiy (private) String toifasidagi 'name', xususiy (private) double toifasidagi 'price', xususiy (private) int toifasidagi 'quantity', 'public boolean inStock', 'public char grade'.",
        "WIUT Seminar 2 'Product.java' rasmiy konstruktorini to'liq yozing: 'public FullProduct(String name, double price, int quantity, boolean inStock, char grade)'.",
        "Maydonlarga 'this' orqali boshlang'ich qiymatlarni bering.",
        "'getName()' va 'getPrice()' getterlarini taqdim eting.",
        "'Main' metodida boshlang'ich parametrlar bilan ob'yektini ochib chiqaring."
      ],
      "en": [
        "Declare class 'FullProduct' matching complete Seminar 2 Product attribute list.",
        "Implement 5-parameter constructor 'public FullProduct(String name, double price, int quantity, boolean inStock, char grade)'.",
        "Assign all incoming parameters using 'this' keyword.",
        "Provide accessors 'getName()' and 'getPrice()'.",
        "In 'main', instantiate complete product and print summary."
      ]
    },
    "requirements": {
      "classes": [
        "FullProduct",
        "Main"
      ],
      "privateFields": [
        "name",
        "price",
        "quantity"
      ],
      "methods": [
        "getName",
        "getPrice"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class FullProduct {\n    // TODO: Maydonlar va talab qilingan konstruktorlarni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FullProduct p = new FullProduct(\"Wireless Mouse\", 19.99, 50, true, 'A');\n        System.out.println(p.getName() + \" | Narx: \" + p.getPrice() + \" | Omborda: \" + p.inStock + \" | Sifat: \" + p.grade);\n    }\n}",
    "solution": "class FullProduct {\n    private String name;\n    private double price;\n    private int quantity;\n    public boolean inStock;\n    public char grade;\n\n    public FullProduct(String name, double price, int quantity, boolean inStock, char grade) {\n        this.name = name;\n        this.price = price;\n        this.quantity = quantity;\n        this.inStock = inStock;\n        this.grade = grade;\n    }\n\n    public String getName() {\n        return this.name;\n    }\n\n    public double getPrice() {\n        return this.price;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FullProduct p = new FullProduct(\"Wireless Mouse\", 19.99, 50, true, 'A');\n        System.out.println(p.getName() + \" | Narx: \" + p.getPrice() + \" | Omborda: \" + p.inStock + \" | Sifat: \" + p.grade);\n    }\n}",
    "sampleData": [
      "Wireless Mouse | Narx: 19.99 | Omborda: true | Sifat: A"
    ],
    "expectedOutput": "Wireless Mouse | Narx: 19.99 | Omborda: true | Sifat: A",
    "detailedSolution": {
      "theory": "Kirish huquqlari (Access Modifiers) va konstruktorlar obyektning hayotiy siklini boshqaradi. Xususiy yordamchi metodlar murakkab hisob-kitoblarni yashirsa, konstruktorlar obyektning boshlang'ich invariantlarini to'g'ri o'rnatadi.",
      "theoryEn": "Access modifiers and constructors dictate the initialization and integrity of objects. Helpers isolate internal algorithms while constructors enforce starting invariants.",
      "cleanCode": "class FullProduct {\n    private String name;\n    private double price;\n    private int quantity;\n    public boolean inStock;\n    public char grade;\n\n    public FullProduct(String name, double price, int quantity, boolean inStock, char grade) {\n        this.name = name;\n        this.price = price;\n        this.quantity = quantity;\n        this.inStock = inStock;\n        this.grade = grade;\n    }\n\n    public String getName() {\n        return this.name;\n    }\n\n    public double getPrice() {\n        return this.price;\n    }\n}",
      "breakdown": [
        "<code>private helper / constructor</code>: Ichki mantiq sinf ichida yashirilgan va xavfsiz initsializatsiya qilingan.",
        "<code>FullProduct</code>: WIUT standartlariga mos konstruktor va metod arxitekturasi."
      ],
      "pitfalls": "Konstruktor yaratilganda Java sukutdagi (default) parametrsiz konstruktorni avtomatik o'chirib yuboradi; agar bo'sh konstruktor kerak bo'lsa uni ochiq e'lon qiling.",
      "cw2Tip": "CW2 Console Order Applicationda ob'yektlar noto'g'ri holatda yaratilishining oldini olish uchun konstruktorda to'liq validatsiya bajaring."
    }
  },
  {
    "id": 53,
    "tier": 4,
    "tierName": "4-Bosqich: Konstruktorlar Asoslari va Ob'yekt Initsializatsiyasi",
    "sector": "46-60: Constructor Fundamentals",
    "title": {
      "uz": "53. Medion — Konstruktorda Boshlang'ich Soliqni Hisoblab Saqlash",
      "en": "53. Medion — Constructor Calculating Initial Computed State"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nBemor qabuli yaratilganda bazaviy narx asosida 12% soliq bir marta hisoblanib 'final double totalWithTax' maydoniga saqlanadi. Konstruktorda ushbu hisoblashni bajaring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'ClinicInvoice' klassini xususiy (private) double toifasidagi 'totalWithTax' maydoni bilan e'lon qiling.\n\n2. 'public ClinicInvoice(double baseAmount)' konstruktorida 'this' orqali 'totalWithTax' maydoniga qiymat bering qilib soliq bilan hisoblang.\n\n3. 'public double getTotalWithTax()' getterini yozing.\n\n4. 'Main' metodida 200000.0 bazaviy summa bilan fakturani initsializatsiya qiling.\n\n5. Konsolga 'Soliq bilan jami: ' + inv.getTotalWithTax() + ' UZS' chiqaring.",
      "en": "📖 Real-World Scenario & Context\nConstructor computes VAT and sets final monetary field at object birth time.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'ClinicInvoice' with private double field 'totalWithTax'.\n\n2. Write constructor 'public ClinicInvoice(double baseAmount)' computing and storing tax-inclusive sum.\n\n3. Implement accessor 'getTotalWithTax()'.\n\n4. In 'main', instantiate invoice for 200000.0.\n\n5. Print tax-inclusive invoice total."
    },
    "story": {
      "uz": "Bemor qabuli yaratilganda bazaviy narx asosida 12% soliq bir marta hisoblanib 'final double totalWithTax' maydoniga saqlanadi. Konstruktorda ushbu hisoblashni bajaring.",
      "en": "Constructor computes VAT and sets final monetary field at object birth time."
    },
    "steps": {
      "uz": [
        "'ClinicInvoice' klassini xususiy (private) double toifasidagi 'totalWithTax' maydoni bilan e'lon qiling.",
        "'public ClinicInvoice(double baseAmount)' konstruktorida 'this' orqali 'totalWithTax' maydoniga qiymat bering qilib soliq bilan hisoblang.",
        "'public double getTotalWithTax()' getterini yozing.",
        "'Main' metodida 200000.0 bazaviy summa bilan fakturani initsializatsiya qiling.",
        "Konsolga 'Soliq bilan jami: ' + inv.getTotalWithTax() + ' UZS' chiqaring."
      ],
      "en": [
        "Declare class 'ClinicInvoice' with private double field 'totalWithTax'.",
        "Write constructor 'public ClinicInvoice(double baseAmount)' computing and storing tax-inclusive sum.",
        "Implement accessor 'getTotalWithTax()'.",
        "In 'main', instantiate invoice for 200000.0.",
        "Print tax-inclusive invoice total."
      ]
    },
    "requirements": {
      "classes": [
        "ClinicInvoice",
        "Main"
      ],
      "privateFields": [
        "totalWithTax"
      ],
      "methods": [
        "getTotalWithTax"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class ClinicInvoice {\n    // TODO: Maydonlar va talab qilingan konstruktorlarni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ClinicInvoice inv = new ClinicInvoice(200000.0);\n        System.out.println(\"Soliq bilan jami: \" + inv.getTotalWithTax() + \" UZS\");\n    }\n}",
    "solution": "class ClinicInvoice {\n    private double totalWithTax;\n\n    public ClinicInvoice(double baseAmount) {\n        this.totalWithTax = baseAmount * 1.12;\n    }\n\n    public double getTotalWithTax() {\n        return this.totalWithTax;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ClinicInvoice inv = new ClinicInvoice(200000.0);\n        System.out.println(\"Soliq bilan jami: \" + inv.getTotalWithTax() + \" UZS\");\n    }\n}",
    "sampleData": [
      "Soliq bilan jami: 224000.0 UZS"
    ],
    "expectedOutput": "Soliq bilan jami: 224000.0 UZS",
    "detailedSolution": {
      "theory": "Kirish huquqlari (Access Modifiers) va konstruktorlar obyektning hayotiy siklini boshqaradi. Xususiy yordamchi metodlar murakkab hisob-kitoblarni yashirsa, konstruktorlar obyektning boshlang'ich invariantlarini to'g'ri o'rnatadi.",
      "theoryEn": "Access modifiers and constructors dictate the initialization and integrity of objects. Helpers isolate internal algorithms while constructors enforce starting invariants.",
      "cleanCode": "class ClinicInvoice {\n    private double totalWithTax;\n\n    public ClinicInvoice(double baseAmount) {\n        this.totalWithTax = baseAmount * 1.12;\n    }\n\n    public double getTotalWithTax() {\n        return this.totalWithTax;\n    }\n}",
      "breakdown": [
        "<code>private helper / constructor</code>: Ichki mantiq sinf ichida yashirilgan va xavfsiz initsializatsiya qilingan.",
        "<code>ClinicInvoice</code>: WIUT standartlariga mos konstruktor va metod arxitekturasi."
      ],
      "pitfalls": "Konstruktor yaratilganda Java sukutdagi (default) parametrsiz konstruktorni avtomatik o'chirib yuboradi; agar bo'sh konstruktor kerak bo'lsa uni ochiq e'lon qiling.",
      "cw2Tip": "CW2 Console Order Applicationda ob'yektlar noto'g'ri holatda yaratilishining oldini olish uchun konstruktorda to'liq validatsiya bajaring."
    }
  },
  {
    "id": 54,
    "tier": 4,
    "tierName": "4-Bosqich: Konstruktorlar Asoslari va Ob'yekt Initsializatsiyasi",
    "sector": "46-60: Constructor Fundamentals",
    "title": {
      "uz": "54. Express24 — Null Parametrni Xavfsiz Standartga O'tkazuvchi Konstruktor",
      "en": "54. Express24 — Null-Safe Constructor Normalizing Null to Default"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nAgar yetkazish manzili sifatida 'null' uzatilsa, konstruktor uni 'Markaziy Ombor' deb o'rnatishi kerak. NullPointerException dan himoyalangan konstruktorni yozing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'DeliveryAddressGuard' sinfini xususiy (private) String toifasidagi 'address' maydoni bilan oching.\n\n2. 'public DeliveryAddressGuard(String address)' konstruktorida agar address null bo'lsa 'this' orqali 'address' maydoniga qiymat bering, aks holda 'this' orqali 'address' maydoniga qiymat bering qiling.\n\n3. 'public String getAddress()' getterini yozing.\n\n4. 'Main' metodida 'new DeliveryAddressGuard(null)' yaratib tekshiring.\n\n5. Konsolga yetkazish manzilini chop eting.",
      "en": "📖 Real-World Scenario & Context\nProtect against NPE by substituting fallback location if incoming address is null.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'DeliveryAddressGuard' with private String field 'address'.\n\n2. Implement constructor providing safe fallback 'Markaziy Ombor' if address is null.\n\n3. Implement getter 'getAddress()'.\n\n4. In 'main', pass null to constructor and verify safe fallback.\n\n5. Print delivery address."
    },
    "story": {
      "uz": "Agar yetkazish manzili sifatida 'null' uzatilsa, konstruktor uni 'Markaziy Ombor' deb o'rnatishi kerak. NullPointerException dan himoyalangan konstruktorni yozing.",
      "en": "Protect against NPE by substituting fallback location if incoming address is null."
    },
    "steps": {
      "uz": [
        "'DeliveryAddressGuard' sinfini xususiy (private) String toifasidagi 'address' maydoni bilan oching.",
        "'public DeliveryAddressGuard(String address)' konstruktorida agar address null bo'lsa 'this' orqali 'address' maydoniga qiymat bering, aks holda 'this' orqali 'address' maydoniga qiymat bering qiling.",
        "'public String getAddress()' getterini yozing.",
        "'Main' metodida 'new DeliveryAddressGuard(null)' yaratib tekshiring.",
        "Konsolga yetkazish manzilini chop eting."
      ],
      "en": [
        "Declare class 'DeliveryAddressGuard' with private String field 'address'.",
        "Implement constructor providing safe fallback 'Markaziy Ombor' if address is null.",
        "Implement getter 'getAddress()'.",
        "In 'main', pass null to constructor and verify safe fallback.",
        "Print delivery address."
      ]
    },
    "requirements": {
      "classes": [
        "DeliveryAddressGuard",
        "Main"
      ],
      "privateFields": [
        "address"
      ],
      "methods": [
        "getAddress"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class DeliveryAddressGuard {\n    // TODO: Maydonlar va talab qilingan konstruktorlarni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DeliveryAddressGuard dag = new DeliveryAddressGuard(null);\n        System.out.println(\"Yetkazish manzili: \" + dag.getAddress());\n    }\n}",
    "solution": "class DeliveryAddressGuard {\n    private String address;\n\n    public DeliveryAddressGuard(String address) {\n        if (address == null) {\n            this.address = \"Markaziy Ombor\";\n        } else {\n            this.address = address;\n        }\n    }\n\n    public String getAddress() {\n        return this.address;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DeliveryAddressGuard dag = new DeliveryAddressGuard(null);\n        System.out.println(\"Yetkazish manzili: \" + dag.getAddress());\n    }\n}",
    "sampleData": [
      "Yetkazish manzili: Markaziy Ombor"
    ],
    "expectedOutput": "Yetkazish manzili: Markaziy Ombor",
    "detailedSolution": {
      "theory": "Kirish huquqlari (Access Modifiers) va konstruktorlar obyektning hayotiy siklini boshqaradi. Xususiy yordamchi metodlar murakkab hisob-kitoblarni yashirsa, konstruktorlar obyektning boshlang'ich invariantlarini to'g'ri o'rnatadi.",
      "theoryEn": "Access modifiers and constructors dictate the initialization and integrity of objects. Helpers isolate internal algorithms while constructors enforce starting invariants.",
      "cleanCode": "class DeliveryAddressGuard {\n    private String address;\n\n    public DeliveryAddressGuard(String address) {\n        if (address == null) {\n            this.address = \"Markaziy Ombor\";\n        } else {\n            this.address = address;\n        }\n    }\n\n    public String getAddress() {\n        return this.address;\n    }\n}",
      "breakdown": [
        "<code>private helper / constructor</code>: Ichki mantiq sinf ichida yashirilgan va xavfsiz initsializatsiya qilingan.",
        "<code>DeliveryAddressGuard</code>: WIUT standartlariga mos konstruktor va metod arxitekturasi."
      ],
      "pitfalls": "Konstruktor yaratilganda Java sukutdagi (default) parametrsiz konstruktorni avtomatik o'chirib yuboradi; agar bo'sh konstruktor kerak bo'lsa uni ochiq e'lon qiling.",
      "cw2Tip": "CW2 Console Order Applicationda ob'yektlar noto'g'ri holatda yaratilishining oldini olish uchun konstruktorda to'liq validatsiya bajaring."
    }
  },
  {
    "id": 55,
    "tier": 4,
    "tierName": "4-Bosqich: Konstruktorlar Asoslari va Ob'yekt Initsializatsiyasi",
    "sector": "46-60: Constructor Fundamentals",
    "title": {
      "uz": "55. Asaxiy — Yangi Ob'yektni Avtomatik 'Faol' (active=true) Holatda Ochish",
      "en": "55. Asaxiy — Initial Boolean State Activation in Constructor"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nKitobxon kartasi yaratilganda uning 'isActive' maydoni konstruktordan parametr sifatida so'ralmaydi, balki har doim avtomatik 'true' qilib ochiladi. Konstruktorni shunday sozlang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'LibraryCard' sinfini xususiy (private) String toifasidagi 'cardNo' va xususiy (private) boolean toifasidagi 'active' maydonlari bilan oching.\n\n2. 'public LibraryCard(String cardNo)' konstruktorida karta raqamini qabul qilib, 'this' orqali 'active' maydoniga qiymat bering deb standart faol holatni o'rnating.\n\n3. 'public String getCardNo()' va 'public boolean isActive()' getterlarini bering.\n\n4. 'Main' metodida 'LIB-102' raqamli kartani oching.\n\n5. Karta faolligini konsolga chiqaring.",
      "en": "📖 Real-World Scenario & Context\nConstructor guarantees initial active status without relying on external parameter.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'LibraryCard' with cardNo and active fields.\n\n2. Write constructor initializing cardNo and setting active to true by default.\n\n3. Implement accessors 'getCardNo()' and 'isActive()'.\n\n4. In 'main', instantiate card for 'LIB-102'.\n\n5. Print active status."
    },
    "story": {
      "uz": "Kitobxon kartasi yaratilganda uning 'isActive' maydoni konstruktordan parametr sifatida so'ralmaydi, balki har doim avtomatik 'true' qilib ochiladi. Konstruktorni shunday sozlang.",
      "en": "Constructor guarantees initial active status without relying on external parameter."
    },
    "steps": {
      "uz": [
        "'LibraryCard' sinfini xususiy (private) String toifasidagi 'cardNo' va xususiy (private) boolean toifasidagi 'active' maydonlari bilan oching.",
        "'public LibraryCard(String cardNo)' konstruktorida karta raqamini qabul qilib, 'this' orqali 'active' maydoniga qiymat bering deb standart faol holatni o'rnating.",
        "'public String getCardNo()' va 'public boolean isActive()' getterlarini bering.",
        "'Main' metodida 'LIB-102' raqamli kartani oching.",
        "Karta faolligini konsolga chiqaring."
      ],
      "en": [
        "Declare class 'LibraryCard' with cardNo and active fields.",
        "Write constructor initializing cardNo and setting active to true by default.",
        "Implement accessors 'getCardNo()' and 'isActive()'.",
        "In 'main', instantiate card for 'LIB-102'.",
        "Print active status."
      ]
    },
    "requirements": {
      "classes": [
        "LibraryCard",
        "Main"
      ],
      "privateFields": [
        "cardNo",
        "active"
      ],
      "methods": [
        "getCardNo",
        "isActive"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class LibraryCard {\n    // TODO: Maydonlar va talab qilingan konstruktorlarni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LibraryCard card = new LibraryCard(\"LIB-102\");\n        System.out.println(\"Karta faolmi: \" + card.isActive());\n    }\n}",
    "solution": "class LibraryCard {\n    private String cardNo;\n    private boolean active;\n\n    public LibraryCard(String cardNo) {\n        this.cardNo = cardNo;\n        this.active = true;\n    }\n\n    public String getCardNo() {\n        return this.cardNo;\n    }\n\n    public boolean isActive() {\n        return this.active;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LibraryCard card = new LibraryCard(\"LIB-102\");\n        System.out.println(\"Karta faolmi: \" + card.isActive());\n    }\n}",
    "sampleData": [
      "Karta faolmi: true"
    ],
    "expectedOutput": "Karta faolmi: true",
    "detailedSolution": {
      "theory": "Kirish huquqlari (Access Modifiers) va konstruktorlar obyektning hayotiy siklini boshqaradi. Xususiy yordamchi metodlar murakkab hisob-kitoblarni yashirsa, konstruktorlar obyektning boshlang'ich invariantlarini to'g'ri o'rnatadi.",
      "theoryEn": "Access modifiers and constructors dictate the initialization and integrity of objects. Helpers isolate internal algorithms while constructors enforce starting invariants.",
      "cleanCode": "class LibraryCard {\n    private String cardNo;\n    private boolean active;\n\n    public LibraryCard(String cardNo) {\n        this.cardNo = cardNo;\n        this.active = true;\n    }\n\n    public String getCardNo() {\n        return this.cardNo;\n    }\n\n    public boolean isActive() {\n        return this.active;\n    }\n}",
      "breakdown": [
        "<code>private helper / constructor</code>: Ichki mantiq sinf ichida yashirilgan va xavfsiz initsializatsiya qilingan.",
        "<code>LibraryCard</code>: WIUT standartlariga mos konstruktor va metod arxitekturasi."
      ],
      "pitfalls": "Konstruktor yaratilganda Java sukutdagi (default) parametrsiz konstruktorni avtomatik o'chirib yuboradi; agar bo'sh konstruktor kerak bo'lsa uni ochiq e'lon qiling.",
      "cw2Tip": "CW2 Console Order Applicationda ob'yektlar noto'g'ri holatda yaratilishining oldini olish uchun konstruktorda to'liq validatsiya bajaring."
    }
  },
  {
    "id": 56,
    "tier": 4,
    "tierName": "4-Bosqich: Konstruktorlar Asoslari va Ob'yekt Initsializatsiyasi",
    "sector": "46-60: Constructor Fundamentals",
    "title": {
      "uz": "56. Dodo Pizza — Ichki Ro'yxatni Konstruktorda Initsializatsiya Qilish",
      "en": "56. Dodo Pizza — Collection Field Initialization in Constructor"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nBuyurtma ob'yekti yaratilganda uning ichki pitssalar ro'yxati 'new ArrayList<>()' deb yaratilishi shart, aks holda element qo'shilganda NullPointerException beradi. Konstruktorda ro'yxatni oching.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'PizzaOrderBasket' sinfini xususiy (private) String toifasidagi 'orderId' va xususiy (private) int toifasidagi 'itemCount' maydonlari bilan oching.\n\n2. 'public PizzaOrderBasket(String orderId)' konstruktorida 'this' orqali 'itemCount' maydoniga qiymat bering qilib initsializatsiya qiling.\n\n3. 'public void addPizza(String name)' metodida savatdagi pitsalar sonini bittaga oshirib qiling.\n\n4. 'public int getItemCount()' getterini yozing.\n\n5. 'Main' metodida pitsa qo'shib, savatdagi pitsalar sonini chop eting.",
      "en": "📖 Real-World Scenario & Context\nInitialize internal List inside constructor to guarantee safe collection operations.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'PizzaOrderBasket' with orderId and itemCount fields.\n\n2. Write constructor initializing itemCount to 0.\n\n3. Implement 'addPizza(String name)' incrementing item count.\n\n4. Implement accessor 'getItemCount()'.\n\n5. In 'main', add pizza and print basket count."
    },
    "story": {
      "uz": "Buyurtma ob'yekti yaratilganda uning ichki pitssalar ro'yxati 'new ArrayList<>()' deb yaratilishi shart, aks holda element qo'shilganda NullPointerException beradi. Konstruktorda ro'yxatni oching.",
      "en": "Initialize internal List inside constructor to guarantee safe collection operations."
    },
    "steps": {
      "uz": [
        "'PizzaOrderBasket' sinfini xususiy (private) String toifasidagi 'orderId' va xususiy (private) int toifasidagi 'itemCount' maydonlari bilan oching.",
        "'public PizzaOrderBasket(String orderId)' konstruktorida 'this' orqali 'itemCount' maydoniga qiymat bering qilib initsializatsiya qiling.",
        "'public void addPizza(String name)' metodida savatdagi pitsalar sonini bittaga oshirib qiling.",
        "'public int getItemCount()' getterini yozing.",
        "'Main' metodida pitsa qo'shib, savatdagi pitsalar sonini chop eting."
      ],
      "en": [
        "Declare class 'PizzaOrderBasket' with orderId and itemCount fields.",
        "Write constructor initializing itemCount to 0.",
        "Implement 'addPizza(String name)' incrementing item count.",
        "Implement accessor 'getItemCount()'.",
        "In 'main', add pizza and print basket count."
      ]
    },
    "requirements": {
      "classes": [
        "PizzaOrderBasket",
        "Main"
      ],
      "privateFields": [
        "orderId",
        "itemCount"
      ],
      "methods": [
        "addPizza",
        "getItemCount"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class PizzaOrderBasket {\n    // TODO: Maydonlar va talab qilingan konstruktorlarni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PizzaOrderBasket basket = new PizzaOrderBasket(\"ORD-1\");\n        basket.addPizza(\"Margarita\");\n        System.out.println(\"Savatdagi pitsalar: \" + basket.getItemCount() + \" ta\");\n    }\n}",
    "solution": "class PizzaOrderBasket {\n    private String orderId;\n    private int itemCount;\n\n    public PizzaOrderBasket(String orderId) {\n        this.orderId = orderId;\n        this.itemCount = 0;\n    }\n\n    public void addPizza(String name) {\n        this.itemCount++;\n    }\n\n    public int getItemCount() {\n        return this.itemCount;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PizzaOrderBasket basket = new PizzaOrderBasket(\"ORD-1\");\n        basket.addPizza(\"Margarita\");\n        System.out.println(\"Savatdagi pitsalar: \" + basket.getItemCount() + \" ta\");\n    }\n}",
    "sampleData": [
      "Savatdagi pitsalar: 1 ta"
    ],
    "expectedOutput": "Savatdagi pitsalar: 1 ta",
    "detailedSolution": {
      "theory": "Kirish huquqlari (Access Modifiers) va konstruktorlar obyektning hayotiy siklini boshqaradi. Xususiy yordamchi metodlar murakkab hisob-kitoblarni yashirsa, konstruktorlar obyektning boshlang'ich invariantlarini to'g'ri o'rnatadi.",
      "theoryEn": "Access modifiers and constructors dictate the initialization and integrity of objects. Helpers isolate internal algorithms while constructors enforce starting invariants.",
      "cleanCode": "class PizzaOrderBasket {\n    private String orderId;\n    private int itemCount;\n\n    public PizzaOrderBasket(String orderId) {\n        this.orderId = orderId;\n        this.itemCount = 0;\n    }\n\n    public void addPizza(String name) {\n        this.itemCount++;\n    }\n\n    public int getItemCount() {\n        return this.itemCount;\n    }\n}",
      "breakdown": [
        "<code>private helper / constructor</code>: Ichki mantiq sinf ichida yashirilgan va xavfsiz initsializatsiya qilingan.",
        "<code>PizzaOrderBasket</code>: WIUT standartlariga mos konstruktor va metod arxitekturasi."
      ],
      "pitfalls": "Konstruktor yaratilganda Java sukutdagi (default) parametrsiz konstruktorni avtomatik o'chirib yuboradi; agar bo'sh konstruktor kerak bo'lsa uni ochiq e'lon qiling.",
      "cw2Tip": "CW2 Console Order Applicationda ob'yektlar noto'g'ri holatda yaratilishining oldini olish uchun konstruktorda to'liq validatsiya bajaring."
    }
  },
  {
    "id": 57,
    "tier": 4,
    "tierName": "4-Bosqich: Konstruktorlar Asoslari va Ob'yekt Initsializatsiyasi",
    "sector": "46-60: Constructor Fundamentals",
    "title": {
      "uz": "57. Kapitalbank — Kod Uzunligini Tekshiruvchi Konstruktor",
      "en": "57. Kapitalbank — Strict Code Length Enforcement in Constructor"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nFilial kodi qat'iy 4 ta belgidan iborat bo'lishi shart (masalan, 'KAP1'). Agar boshqa uzunlik berilsa 'DEFAULT' deb o'rnatuvchi konstruktorni yozing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'BankBranch' sinfini xususiy (private) String toifasidagi 'branchCode' maydoni bilan e'lon qiling.\n\n2. 'public BankBranch(String code)' konstruktorida agar kod uzunligi 6 tadan oshsa 'this' orqali 'branchCode' maydoniga qiymat bering, aks holda 'this' orqali 'branchCode' maydoniga qiymat bering qiling.\n\n3. 'public String getBranchCode()' getterini taqdim eting.\n\n4. 'Main' metodida 'TOOLONGCODE' berib tekshiring.\n\n5. Konsolga filial kodini chiqaring.",
      "en": "📖 Real-World Scenario & Context\nConstructor verifies exact string length normalizing invalid codes to safe fallback.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'BankBranch' with private String field 'branchCode'.\n\n2. Implement constructor validating code length: clamp to 'DEFAULT' if length > 6.\n\n3. Implement accessor 'getBranchCode()'.\n\n4. In 'main', pass 'TOOLONGCODE' and verify fallback.\n\n5. Print branch code."
    },
    "story": {
      "uz": "Filial kodi qat'iy 4 ta belgidan iborat bo'lishi shart (masalan, 'KAP1'). Agar boshqa uzunlik berilsa 'DEFAULT' deb o'rnatuvchi konstruktorni yozing.",
      "en": "Constructor verifies exact string length normalizing invalid codes to safe fallback."
    },
    "steps": {
      "uz": [
        "'BankBranch' sinfini xususiy (private) String toifasidagi 'branchCode' maydoni bilan e'lon qiling.",
        "'public BankBranch(String code)' konstruktorida agar kod uzunligi 6 tadan oshsa 'this' orqali 'branchCode' maydoniga qiymat bering, aks holda 'this' orqali 'branchCode' maydoniga qiymat bering qiling.",
        "'public String getBranchCode()' getterini taqdim eting.",
        "'Main' metodida 'TOOLONGCODE' berib tekshiring.",
        "Konsolga filial kodini chiqaring."
      ],
      "en": [
        "Declare class 'BankBranch' with private String field 'branchCode'.",
        "Implement constructor validating code length: clamp to 'DEFAULT' if length > 6.",
        "Implement accessor 'getBranchCode()'.",
        "In 'main', pass 'TOOLONGCODE' and verify fallback.",
        "Print branch code."
      ]
    },
    "requirements": {
      "classes": [
        "BankBranch",
        "Main"
      ],
      "privateFields": [
        "branchCode"
      ],
      "methods": [
        "getBranchCode"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class BankBranch {\n    // TODO: Maydonlar va talab qilingan konstruktorlarni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BankBranch bb = new BankBranch(\"TOOLONGCODE\");\n        System.out.println(\"Filial kodi: \" + bb.getBranchCode());\n    }\n}",
    "solution": "class BankBranch {\n    private String branchCode;\n\n    public BankBranch(String code) {\n        if (code != null && code.length() > 6) {\n            this.branchCode = \"DEFAULT\";\n        } else {\n            this.branchCode = code;\n        }\n    }\n\n    public String getBranchCode() {\n        return this.branchCode;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BankBranch bb = new BankBranch(\"TOOLONGCODE\");\n        System.out.println(\"Filial kodi: \" + bb.getBranchCode());\n    }\n}",
    "sampleData": [
      "Filial kodi: DEFAULT"
    ],
    "expectedOutput": "Filial kodi: DEFAULT",
    "detailedSolution": {
      "theory": "Kirish huquqlari (Access Modifiers) va konstruktorlar obyektning hayotiy siklini boshqaradi. Xususiy yordamchi metodlar murakkab hisob-kitoblarni yashirsa, konstruktorlar obyektning boshlang'ich invariantlarini to'g'ri o'rnatadi.",
      "theoryEn": "Access modifiers and constructors dictate the initialization and integrity of objects. Helpers isolate internal algorithms while constructors enforce starting invariants.",
      "cleanCode": "class BankBranch {\n    private String branchCode;\n\n    public BankBranch(String code) {\n        if (code != null && code.length() > 6) {\n            this.branchCode = \"DEFAULT\";\n        } else {\n            this.branchCode = code;\n        }\n    }\n\n    public String getBranchCode() {\n        return this.branchCode;\n    }\n}",
      "breakdown": [
        "<code>private helper / constructor</code>: Ichki mantiq sinf ichida yashirilgan va xavfsiz initsializatsiya qilingan.",
        "<code>BankBranch</code>: WIUT standartlariga mos konstruktor va metod arxitekturasi."
      ],
      "pitfalls": "Konstruktor yaratilganda Java sukutdagi (default) parametrsiz konstruktorni avtomatik o'chirib yuboradi; agar bo'sh konstruktor kerak bo'lsa uni ochiq e'lon qiling.",
      "cw2Tip": "CW2 Console Order Applicationda ob'yektlar noto'g'ri holatda yaratilishining oldini olish uchun konstruktorda to'liq validatsiya bajaring."
    }
  },
  {
    "id": 58,
    "tier": 4,
    "tierName": "4-Bosqich: Konstruktorlar Asoslari va Ob'yekt Initsializatsiyasi",
    "sector": "46-60: Constructor Fundamentals",
    "title": {
      "uz": "58. Beeline — O'zgarmas (final) Maydonlarni To'ldiruvchi Konstruktor",
      "en": "58. Beeline — Final Immutable Field Initialization via Constructor"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSIM-karta ICCID kodi 'private final String iccid' bo'lib, faqat konstruktor ichida bir marta berilishi mumkin. O'zgarmas maydonli konstruktorni tuzing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'SimCardChip' klassini o'zgarmas 'private final String iccid' maydoni bilan yarating.\n\n2. 'public SimCardChip(String iccid)' konstruktorida 'this' orqali 'iccid' maydoniga qiymat bering orqali o'rnatilishini ta'minlang.\n\n3. 'public String getIccid()' getterini yozing.\n\n4. 'Main' metodida '899980123456' kodi bilan chipni initsializatsiya qiling.\n\n5. Konsolga 'Chip ICCID: ' + chip.getIccid() chop eting.",
      "en": "📖 Real-World Scenario & Context\nInitialize private final field within constructor establishing immutable identity.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'SimCardChip' with immutable 'private final String iccid'.\n\n2. Implement constructor 'public SimCardChip(String iccid)' assigning final field.\n\n3. Implement accessor 'getIccid()'.\n\n4. In 'main', instantiate chip with '899980123456'.\n\n5. Print chip ICCID."
    },
    "story": {
      "uz": "SIM-karta ICCID kodi 'private final String iccid' bo'lib, faqat konstruktor ichida bir marta berilishi mumkin. O'zgarmas maydonli konstruktorni tuzing.",
      "en": "Initialize private final field within constructor establishing immutable identity."
    },
    "steps": {
      "uz": [
        "'SimCardChip' klassini o'zgarmas 'private final String iccid' maydoni bilan yarating.",
        "'public SimCardChip(String iccid)' konstruktorida 'this' orqali 'iccid' maydoniga qiymat bering orqali o'rnatilishini ta'minlang.",
        "'public String getIccid()' getterini yozing.",
        "'Main' metodida '899980123456' kodi bilan chipni initsializatsiya qiling.",
        "Konsolga 'Chip ICCID: ' + chip.getIccid() chop eting."
      ],
      "en": [
        "Declare class 'SimCardChip' with immutable 'private final String iccid'.",
        "Implement constructor 'public SimCardChip(String iccid)' assigning final field.",
        "Implement accessor 'getIccid()'.",
        "In 'main', instantiate chip with '899980123456'.",
        "Print chip ICCID."
      ]
    },
    "requirements": {
      "classes": [
        "SimCardChip",
        "Main"
      ],
      "privateFields": [
        "iccid"
      ],
      "methods": [
        "getIccid"
      ],
      "keywords": [
        "final",
        "this"
      ]
    },
    "starterCode": "class SimCardChip {\n    // TODO: Maydonlar va talab qilingan konstruktorlarni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SimCardChip chip = new SimCardChip(\"899980123456\");\n        System.out.println(\"Chip ICCID: \" + chip.getIccid());\n    }\n}",
    "solution": "class SimCardChip {\n    private final String iccid;\n\n    public SimCardChip(String iccid) {\n        this.iccid = iccid;\n    }\n\n    public String getIccid() {\n        return this.iccid;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SimCardChip chip = new SimCardChip(\"899980123456\");\n        System.out.println(\"Chip ICCID: \" + chip.getIccid());\n    }\n}",
    "sampleData": [
      "Chip ICCID: 899980123456"
    ],
    "expectedOutput": "Chip ICCID: 899980123456",
    "detailedSolution": {
      "theory": "Kirish huquqlari (Access Modifiers) va konstruktorlar obyektning hayotiy siklini boshqaradi. Xususiy yordamchi metodlar murakkab hisob-kitoblarni yashirsa, konstruktorlar obyektning boshlang'ich invariantlarini to'g'ri o'rnatadi.",
      "theoryEn": "Access modifiers and constructors dictate the initialization and integrity of objects. Helpers isolate internal algorithms while constructors enforce starting invariants.",
      "cleanCode": "class SimCardChip {\n    private final String iccid;\n\n    public SimCardChip(String iccid) {\n        this.iccid = iccid;\n    }\n\n    public String getIccid() {\n        return this.iccid;\n    }\n}",
      "breakdown": [
        "<code>private helper / constructor</code>: Ichki mantiq sinf ichida yashirilgan va xavfsiz initsializatsiya qilingan.",
        "<code>SimCardChip</code>: WIUT standartlariga mos konstruktor va metod arxitekturasi."
      ],
      "pitfalls": "Konstruktor yaratilganda Java sukutdagi (default) parametrsiz konstruktorni avtomatik o'chirib yuboradi; agar bo'sh konstruktor kerak bo'lsa uni ochiq e'lon qiling.",
      "cw2Tip": "CW2 Console Order Applicationda ob'yektlar noto'g'ri holatda yaratilishining oldini olish uchun konstruktorda to'liq validatsiya bajaring."
    }
  },
  {
    "id": 59,
    "tier": 4,
    "tierName": "4-Bosqich: Konstruktorlar Asoslari va Ob'yekt Initsializatsiyasi",
    "sector": "46-60: Constructor Fundamentals",
    "title": {
      "uz": "59. UzAirways — Ob'yekt Yaratilganini Bildiruvchi Konstruktor",
      "en": "59. UzAirways — Constructor Announcing Object Creation"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nReys yaratilganda konstruktor konsolga 'Reys ochildi: HY-051' xabarini chiqaradi. Xabar beruvchi konstruktorni dasturlang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'FlightScheduler' sinfini xususiy (private) String toifasidagi 'flightCode' maydoni bilan oching.\n\n2. 'public FlightScheduler(String flightCode)' konstruktorida 'this' orqali 'flightCode' maydoniga qiymat bering qiling va 'System.out.print(\"Reys ochildi: \" + flightCode + \" \")' xabarini bering.\n\n3. 'public String getFlightCode()' getterini yozing.\n\n4. 'Main' metodida 'HY-051' reysini ro'yxatdan o'tkazing.\n\n5. Konsolga 'Tasdiq kodi: ' + fs.getFlightCode() deb chiqaring.",
      "en": "📖 Real-World Scenario & Context\nConstructor executes startup announcement printing creation confirmation message.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'FlightScheduler' with private String field 'flightCode'.\n\n2. Write constructor initializing code and logging creation event via System.out.print.\n\n3. Implement accessor 'getFlightCode()'.\n\n4. In 'main', schedule flight 'HY-051'.\n\n5. Print confirmation code."
    },
    "story": {
      "uz": "Reys yaratilganda konstruktor konsolga 'Reys ochildi: HY-051' xabarini chiqaradi. Xabar beruvchi konstruktorni dasturlang.",
      "en": "Constructor executes startup announcement printing creation confirmation message."
    },
    "steps": {
      "uz": [
        "'FlightScheduler' sinfini xususiy (private) String toifasidagi 'flightCode' maydoni bilan oching.",
        "'public FlightScheduler(String flightCode)' konstruktorida 'this' orqali 'flightCode' maydoniga qiymat bering qiling va 'System.out.print(\"Reys ochildi: \" + flightCode + \" \")' xabarini bering.",
        "'public String getFlightCode()' getterini yozing.",
        "'Main' metodida 'HY-051' reysini ro'yxatdan o'tkazing.",
        "Konsolga 'Tasdiq kodi: ' + fs.getFlightCode() deb chiqaring."
      ],
      "en": [
        "Declare class 'FlightScheduler' with private String field 'flightCode'.",
        "Write constructor initializing code and logging creation event via System.out.print.",
        "Implement accessor 'getFlightCode()'.",
        "In 'main', schedule flight 'HY-051'.",
        "Print confirmation code."
      ]
    },
    "requirements": {
      "classes": [
        "FlightScheduler",
        "Main"
      ],
      "privateFields": [
        "flightCode"
      ],
      "methods": [
        "getFlightCode"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class FlightScheduler {\n    // TODO: Maydonlar va talab qilingan konstruktorlarni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FlightScheduler fs = new FlightScheduler(\"HY-051\");\n        System.out.println(\"Tasdiq kodi: \" + fs.getFlightCode());\n    }\n}",
    "solution": "class FlightScheduler {\n    private String flightCode;\n\n    public FlightScheduler(String flightCode) {\n        this.flightCode = flightCode;\n        System.out.print(\"Reys ochildi: \" + flightCode + \" \");\n    }\n\n    public String getFlightCode() {\n        return this.flightCode;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FlightScheduler fs = new FlightScheduler(\"HY-051\");\n        System.out.println(\"Tasdiq kodi: \" + fs.getFlightCode());\n    }\n}",
    "sampleData": [
      "Reys ochildi: HY-051\nTasdiq kodi: HY-051"
    ],
    "expectedOutput": "Reys ochildi: HY-051\nTasdiq kodi: HY-051",
    "detailedSolution": {
      "theory": "Kirish huquqlari (Access Modifiers) va konstruktorlar obyektning hayotiy siklini boshqaradi. Xususiy yordamchi metodlar murakkab hisob-kitoblarni yashirsa, konstruktorlar obyektning boshlang'ich invariantlarini to'g'ri o'rnatadi.",
      "theoryEn": "Access modifiers and constructors dictate the initialization and integrity of objects. Helpers isolate internal algorithms while constructors enforce starting invariants.",
      "cleanCode": "class FlightScheduler {\n    private String flightCode;\n\n    public FlightScheduler(String flightCode) {\n        this.flightCode = flightCode;\n        System.out.print(\"Reys ochildi: \" + flightCode + \" \");\n    }\n\n    public String getFlightCode() {\n        return this.flightCode;\n    }\n}",
      "breakdown": [
        "<code>private helper / constructor</code>: Ichki mantiq sinf ichida yashirilgan va xavfsiz initsializatsiya qilingan.",
        "<code>FlightScheduler</code>: WIUT standartlariga mos konstruktor va metod arxitekturasi."
      ],
      "pitfalls": "Konstruktor yaratilganda Java sukutdagi (default) parametrsiz konstruktorni avtomatik o'chirib yuboradi; agar bo'sh konstruktor kerak bo'lsa uni ochiq e'lon qiling.",
      "cw2Tip": "CW2 Console Order Applicationda ob'yektlar noto'g'ri holatda yaratilishining oldini olish uchun konstruktorda to'liq validatsiya bajaring."
    }
  },
  {
    "id": 60,
    "tier": 4,
    "tierName": "4-Bosqich: Konstruktorlar Asoslari va Ob'yekt Initsializatsiyasi",
    "sector": "46-60: Constructor Fundamentals",
    "title": {
      "uz": "60. WIUT SRS — Talaba Ro'yxatdan O'tkazuvchi To'liq Konstruktor (Master)",
      "en": "60. WIUT SRS — Comprehensive Validating Registration Constructor Master"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nTalaba yaratilganda ID (bo'sh bo'lmasligi), ism (trim qilinishi) va boshlang'ich kreditlar (0 dan kam bo'lmasligi) tekshiriladi. Barcha shartlarni bitta mustahkam konstruktorda bajaring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'EnrolledStudent' sinfini 'studentId', 'fullName', 'credits' xususiy maydonlari bilan yarating.\n\n2. 3 parametrli 'public EnrolledStudent(String studentId, String fullName, int credits)' master konstruktorida: ismni 'trim()' qiling va kredit 0 dan kichik bo'lsa 0 ga tenglang.\n\n3. 'public String getProfileSummary()' metodida talabaning to'liq ismi, ID raqami va kreditlar sonini birlashtirib namunadagi xulosani qaytaring.\n\n4. 'Main' metodida '00015522', '  Jasur  ', 60 bilan talabani initsializatsiya qiling.\n\n5. Konsolga talaba profilini chiqaring.",
      "en": "📖 Real-World Scenario & Context\nMaster student registration constructor validating ID, sanitizing name, and checking credit bounds.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'EnrolledStudent' with studentId, fullName, and credits fields.\n\n2. Implement master constructor applying complete trimming and non-negative credit validation.\n\n3. Implement summary accessor 'getProfileSummary()'.\n\n4. In 'main', instantiate student with '00015522', '  Jasur  ', and 60 credits.\n\n5. Print verified profile summary to console."
    },
    "story": {
      "uz": "Talaba yaratilganda ID (bo'sh bo'lmasligi), ism (trim qilinishi) va boshlang'ich kreditlar (0 dan kam bo'lmasligi) tekshiriladi. Barcha shartlarni bitta mustahkam konstruktorda bajaring.",
      "en": "Master student registration constructor validating ID, sanitizing name, and checking credit bounds."
    },
    "steps": {
      "uz": [
        "'EnrolledStudent' sinfini 'studentId', 'fullName', 'credits' xususiy maydonlari bilan yarating.",
        "3 parametrli 'public EnrolledStudent(String studentId, String fullName, int credits)' master konstruktorida: ismni 'trim()' qiling va kredit 0 dan kichik bo'lsa 0 ga tenglang.",
        "'public String getProfileSummary()' metodida talabaning to'liq ismi, ID raqami va kreditlar sonini birlashtirib namunadagi xulosani qaytaring.",
        "'Main' metodida '00015522', '  Jasur  ', 60 bilan talabani initsializatsiya qiling.",
        "Konsolga talaba profilini chiqaring."
      ],
      "en": [
        "Declare class 'EnrolledStudent' with studentId, fullName, and credits fields.",
        "Implement master constructor applying complete trimming and non-negative credit validation.",
        "Implement summary accessor 'getProfileSummary()'.",
        "In 'main', instantiate student with '00015522', '  Jasur  ', and 60 credits.",
        "Print verified profile summary to console."
      ]
    },
    "requirements": {
      "classes": [
        "EnrolledStudent",
        "Main"
      ],
      "privateFields": [
        "studentId",
        "fullName",
        "credits"
      ],
      "methods": [
        "getProfileSummary"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class EnrolledStudent {\n    // TODO: Maydonlar va talab qilingan konstruktorlarni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        EnrolledStudent es = new EnrolledStudent(\"00015522\", \"  Jasur  \", 60);\n        System.out.println(es.getProfileSummary());\n    }\n}",
    "solution": "class EnrolledStudent {\n    private String studentId;\n    private String fullName;\n    private int credits;\n\n    public EnrolledStudent(String studentId, String fullName, int credits) {\n        this.studentId = studentId;\n        this.fullName = fullName == null ? \"Noma'lum\" : fullName.trim();\n        this.credits = credits < 0 ? 0 : credits;\n    }\n\n    public String getProfileSummary() {\n        return \"Talaba: \" + this.fullName + \" [\" + this.studentId + \"] | Kreditlar: \" + this.credits;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        EnrolledStudent es = new EnrolledStudent(\"00015522\", \"  Jasur  \", 60);\n        System.out.println(es.getProfileSummary());\n    }\n}",
    "sampleData": [
      "Talaba: Jasur [00015522] | Kreditlar: 60"
    ],
    "expectedOutput": "Talaba: Jasur [00015522] | Kreditlar: 60",
    "detailedSolution": {
      "theory": "Kirish huquqlari (Access Modifiers) va konstruktorlar obyektning hayotiy siklini boshqaradi. Xususiy yordamchi metodlar murakkab hisob-kitoblarni yashirsa, konstruktorlar obyektning boshlang'ich invariantlarini to'g'ri o'rnatadi.",
      "theoryEn": "Access modifiers and constructors dictate the initialization and integrity of objects. Helpers isolate internal algorithms while constructors enforce starting invariants.",
      "cleanCode": "class EnrolledStudent {\n    private String studentId;\n    private String fullName;\n    private int credits;\n\n    public EnrolledStudent(String studentId, String fullName, int credits) {\n        this.studentId = studentId;\n        this.fullName = fullName == null ? \"Noma'lum\" : fullName.trim();\n        this.credits = credits < 0 ? 0 : credits;\n    }\n\n    public String getProfileSummary() {\n        return \"Talaba: \" + this.fullName + \" [\" + this.studentId + \"] | Kreditlar: \" + this.credits;\n    }\n}",
      "breakdown": [
        "<code>private helper / constructor</code>: Ichki mantiq sinf ichida yashirilgan va xavfsiz initsializatsiya qilingan.",
        "<code>EnrolledStudent</code>: WIUT standartlariga mos konstruktor va metod arxitekturasi."
      ],
      "pitfalls": "Konstruktor yaratilganda Java sukutdagi (default) parametrsiz konstruktorni avtomatik o'chirib yuboradi; agar bo'sh konstruktor kerak bo'lsa uni ochiq e'lon qiling.",
      "cw2Tip": "CW2 Console Order Applicationda ob'yektlar noto'g'ri holatda yaratilishining oldini olish uchun konstruktorda to'liq validatsiya bajaring."
    }
  },
  {
    "id": 61,
    "tier": 5,
    "tierName": "5-Bosqich: Konstruktorlarni Qayta Yuklash va Zanjir (this(...))",
    "sector": "61-75: Constructor Overloading & Chaining",
    "title": {
      "uz": "61. Uzum Market — Bo'sh Konstruktordan 2 Parametrli Zanjir: this(name, price)",
      "en": "61. Uzum Market — No-Arg Chaining to Parameterized Constructor via this()"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT leksiyasida (Slide 24): bir konstruktordan boshqasini chaqirish uchun 'this(...)' ishlatiladi. 'Product()' konstruktori 'this(\"Standart\", 1000.0)' orqali asosiy konstruktorga yo'naltirsin.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'ProductChain' klassini xususiy (private) String toifasidagi 'name' va xususiy (private) double toifasidagi 'price' maydonlari bilan oching.\n\n2. Asosiy 2 parametrli 'public ProductChain(String name, double price)' konstruktorini yozing.\n\n3. 'this(\"Standart\", 1000.0)' chaqiruvi orqali default qiymatlarni beruvchi parametrsiz 'public ProductChain()' konstruktorini yarating.\n\n4. 'getName()' va 'getPrice()' getterlarini taqdim eting.\n\n5. 'Main' metodida boshlang'ich parametrlar bilan ob'yektni yarating, konsolga mahsulot nomi va narxini chiqaring.",
      "en": "📖 Real-World Scenario & Context\nChain no-arg constructor to two-parameter constructor using this(...) syntax.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'ProductChain' with name and price fields.\n\n2. Write 2-parameter master constructor.\n\n3. Implement no-arg constructor delegating via 'this(\"Standart\", 1000.0)'.\n\n4. Implement accessors 'getName()' and 'getPrice()'.\n\n5. In 'main', instantiate no-arg constructor and print results."
    },
    "story": {
      "uz": "WIUT leksiyasida (Slide 24): bir konstruktordan boshqasini chaqirish uchun 'this(...)' ishlatiladi. 'Product()' konstruktori 'this(\"Standart\", 1000.0)' orqali asosiy konstruktorga yo'naltirsin.",
      "en": "Chain no-arg constructor to two-parameter constructor using this(...) syntax."
    },
    "steps": {
      "uz": [
        "'ProductChain' klassini xususiy (private) String toifasidagi 'name' va xususiy (private) double toifasidagi 'price' maydonlari bilan oching.",
        "Asosiy 2 parametrli 'public ProductChain(String name, double price)' konstruktorini yozing.",
        "'this(\"Standart\", 1000.0)' chaqiruvi orqali default qiymatlarni beruvchi parametrsiz 'public ProductChain()' konstruktorini yarating.",
        "'getName()' va 'getPrice()' getterlarini taqdim eting.",
        "'Main' metodida boshlang'ich parametrlar bilan ob'yektni yarating, konsolga mahsulot nomi va narxini chiqaring."
      ],
      "en": [
        "Declare class 'ProductChain' with name and price fields.",
        "Write 2-parameter master constructor.",
        "Implement no-arg constructor delegating via 'this(\"Standart\", 1000.0)'.",
        "Implement accessors 'getName()' and 'getPrice()'.",
        "In 'main', instantiate no-arg constructor and print results."
      ]
    },
    "requirements": {
      "classes": [
        "ProductChain",
        "Main"
      ],
      "privateFields": [
        "name",
        "price"
      ],
      "methods": [
        "getName",
        "getPrice"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class ProductChain {\n    // TODO: Asosiy va this(...) orqali zanjirlangan konstruktorlarni yarating\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ProductChain p = new ProductChain();\n        System.out.println(p.getName() + \" narxi: \" + p.getPrice() + \" UZS\");\n    }\n}",
    "solution": "class ProductChain {\n    private String name;\n    private double price;\n\n    public ProductChain() {\n        this(\"Standart\", 1000.0);\n    }\n\n    public ProductChain(String name, double price) {\n        this.name = name;\n        this.price = price;\n    }\n\n    public String getName() {\n        return this.name;\n    }\n\n    public double getPrice() {\n        return this.price;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ProductChain p = new ProductChain();\n        System.out.println(p.getName() + \" narxi: \" + p.getPrice() + \" UZS\");\n    }\n}",
    "sampleData": [
      "Standart narxi: 1000.0 UZS"
    ],
    "expectedOutput": "Standart narxi: 1000.0 UZS",
    "detailedSolution": {
      "theory": "Konstruktorlarni qayta yuklash (Overloading) turli parametrlar bilan ob'yekt yaratish imkonini beradi. 'this(...)' orqali barcha konstruktorlarni bitta markaziy konstruktorga yo'naltirish (Constructor Chaining) DRY qoidasiga amal qilishning eng toza usulidir.",
      "theoryEn": "Constructor chaining with this(...) centralizes initialization logic and avoids code duplication across overloaded constructor variants.",
      "cleanCode": "class ProductChain {\n    private String name;\n    private double price;\n\n    public ProductChain() {\n        this(\"Standart\", 1000.0);\n    }\n\n    public ProductChain(String name, double price) {\n        this.name = name;\n        this.price = price;\n    }\n\n    public String getName() {\n        return this.name;\n    }\n\n    public double getPrice() {\n        return this.price;\n    }\n}",
      "breakdown": [
        "<code>this(...) & Guard Clause</code>: Konstruktorlar zanjiri kod takrorlanishini yo'qotadi, Guard Clause esa chuqur if-else ichma-ichligini to'xtatadi.",
        "<code>ProductChain</code>: Mustahkam himoyalangan va qayta yuklangan toza sinf arxitekturasi."
      ],
      "pitfalls": "'this(...)' chaqiruvi konstruktor tanasida mutlaqo BIRINCHI qatorda joylashishi shart, aks holda kompilyatsiya xatosi ro'y beradi.",
      "cw2Tip": "CW2 tizimida turli toifadagi foydalanuvchilar (Guest, VIP, Corporate) uchun zanjirli konstruktorlardan foydalaning."
    }
  },
  {
    "id": 62,
    "tier": 5,
    "tierName": "5-Bosqich: Konstruktorlarni Qayta Yuklash va Zanjir (this(...))",
    "sector": "61-75: Constructor Overloading & Chaining",
    "title": {
      "uz": "62. Payme — this(...) Birinchi Satrda Bo'lish Qat'iy Qoidasi",
      "en": "62. Payme — this(...) as Strictly the First Statement in Constructor"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nJava kompilyatori qoidasi: 'Call to this() must be first statement in constructor'. Hamyon nomini qabul qiluvchi konstruktor 'this(owner, 0.0)' orqali birinchi satrda chaqirsin.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'WalletChaining' sinfini 'owner' va 'balance' maydonlari bilan oching.\n\n2. 2 parametrli 'public WalletChaining(String owner, double balance)' master konstruktorini yozing.\n\n3. Bitta parametrli 'public WalletChaining(String owner)' konstruktorida 'this(owner, 0.0)' orqali zanjir hosil qiling.\n\n4. 'getOwner()' va 'getBalance()' getterlarini taqdim eting.\n\n5. 'Main' metodida faqat egasini berib hamyon oching va ma'lumotlarni chiqaring.",
      "en": "📖 Real-World Scenario & Context\nDemonstrate that this(...) constructor invocation must strictly appear on the very first line.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'WalletChaining' with owner and balance fields.\n\n2. Write master constructor 'public WalletChaining(String owner, double balance)'.\n\n3. Implement single-param constructor chaining via 'this(owner, 0.0)'.\n\n4. Implement accessors 'getOwner()' and 'getBalance()'.\n\n5. In 'main', instantiate wallet with owner name and verify balance defaults to 0.0."
    },
    "story": {
      "uz": "Java kompilyatori qoidasi: 'Call to this() must be first statement in constructor'. Hamyon nomini qabul qiluvchi konstruktor 'this(owner, 0.0)' orqali birinchi satrda chaqirsin.",
      "en": "Demonstrate that this(...) constructor invocation must strictly appear on the very first line."
    },
    "steps": {
      "uz": [
        "'WalletChaining' sinfini 'owner' va 'balance' maydonlari bilan oching.",
        "2 parametrli 'public WalletChaining(String owner, double balance)' master konstruktorini yozing.",
        "Bitta parametrli 'public WalletChaining(String owner)' konstruktorida 'this(owner, 0.0)' orqali zanjir hosil qiling.",
        "'getOwner()' va 'getBalance()' getterlarini taqdim eting.",
        "'Main' metodida faqat egasini berib hamyon oching va ma'lumotlarni chiqaring."
      ],
      "en": [
        "Declare class 'WalletChaining' with owner and balance fields.",
        "Write master constructor 'public WalletChaining(String owner, double balance)'.",
        "Implement single-param constructor chaining via 'this(owner, 0.0)'.",
        "Implement accessors 'getOwner()' and 'getBalance()'.",
        "In 'main', instantiate wallet with owner name and verify balance defaults to 0.0."
      ]
    },
    "requirements": {
      "classes": [
        "WalletChaining",
        "Main"
      ],
      "privateFields": [
        "owner",
        "balance"
      ],
      "methods": [
        "getOwner",
        "getBalance"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class WalletChaining {\n    // TODO: Asosiy va this(...) orqali zanjirlangan konstruktorlarni yarating\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WalletChaining w = new WalletChaining(\"Akmal\");\n        System.out.println(\"Egasi: \" + w.getOwner() + \" | Balans: \" + w.getBalance());\n    }\n}",
    "solution": "class WalletChaining {\n    private String owner;\n    private double balance;\n\n    public WalletChaining(String owner) {\n        this(owner, 0.0);\n    }\n\n    public WalletChaining(String owner, double balance) {\n        this.owner = owner;\n        this.balance = balance;\n    }\n\n    public String getOwner() {\n        return this.owner;\n    }\n\n    public double getBalance() {\n        return this.balance;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WalletChaining w = new WalletChaining(\"Akmal\");\n        System.out.println(\"Egasi: \" + w.getOwner() + \" | Balans: \" + w.getBalance());\n    }\n}",
    "sampleData": [
      "Egasi: Akmal | Balans: 0.0"
    ],
    "expectedOutput": "Egasi: Akmal | Balans: 0.0",
    "detailedSolution": {
      "theory": "Konstruktorlarni qayta yuklash (Overloading) turli parametrlar bilan ob'yekt yaratish imkonini beradi. 'this(...)' orqali barcha konstruktorlarni bitta markaziy konstruktorga yo'naltirish (Constructor Chaining) DRY qoidasiga amal qilishning eng toza usulidir.",
      "theoryEn": "Constructor chaining with this(...) centralizes initialization logic and avoids code duplication across overloaded constructor variants.",
      "cleanCode": "class WalletChaining {\n    private String owner;\n    private double balance;\n\n    public WalletChaining(String owner) {\n        this(owner, 0.0);\n    }\n\n    public WalletChaining(String owner, double balance) {\n        this.owner = owner;\n        this.balance = balance;\n    }\n\n    public String getOwner() {\n        return this.owner;\n    }\n\n    public double getBalance() {\n        return this.balance;\n    }\n}",
      "breakdown": [
        "<code>this(...) & Guard Clause</code>: Konstruktorlar zanjiri kod takrorlanishini yo'qotadi, Guard Clause esa chuqur if-else ichma-ichligini to'xtatadi.",
        "<code>WalletChaining</code>: Mustahkam himoyalangan va qayta yuklangan toza sinf arxitekturasi."
      ],
      "pitfalls": "'this(...)' chaqiruvi konstruktor tanasida mutlaqo BIRINCHI qatorda joylashishi shart, aks holda kompilyatsiya xatosi ro'y beradi.",
      "cw2Tip": "CW2 tizimida turli toifadagi foydalanuvchilar (Guest, VIP, Corporate) uchun zanjirli konstruktorlardan foydalaning."
    }
  },
  {
    "id": 63,
    "tier": 5,
    "tierName": "5-Bosqich: Konstruktorlarni Qayta Yuklash va Zanjir (this(...))",
    "sector": "61-75: Constructor Overloading & Chaining",
    "title": {
      "uz": "63. Korzinka — 3 Bosqichli Konstruktorlar Zanjiri",
      "en": "63. Korzinka — Three-Stage Constructor Delegation Chain"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nDo'konda 3 xil usulda tovar ochiladi: 1) parametrsiz, 2) faqat nom bilan, 3) nom va narx bilan. Barcha konstruktorlar bir-biriga zanjirlangan holda oxirgi konstruktorga yo'naltirsin.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'ChainedProduct' sinfini 'name' va 'price' xususiy maydonlari bilan oching.\n\n2. 3 bosqichli konstruktorlar zanjirini tuzing: 'ChainedProduct()' -> 'this(\"Noma\\'lum\")'.\n\n3. 'ChainedProduct(String name)' -> 'this(name, 3000.0)'.\n\n4. Asosiy 'public ChainedProduct(String name, double price)' maydonlarni o'zlashtirsin.\n\n5. 'Main' metodida 'new ChainedProduct(\"Non\")' ochib, nom va standart narxni chiqaring.",
      "en": "📖 Real-World Scenario & Context\nImplement 3-tier constructor chain cascading from no-arg down to primary constructor.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'ChainedProduct' with name and price fields.\n\n2. Implement 3-stage constructor chain: () -> (name) -> (name, price).\n\n3. No-arg calls this(\"Noma'lum\"), 1-arg calls this(name, 3000.0).\n\n4. Master constructor initializes fields directly.\n\n5. In 'main', instantiate with 'Non' and print name and chained default price."
    },
    "story": {
      "uz": "Do'konda 3 xil usulda tovar ochiladi: 1) parametrsiz, 2) faqat nom bilan, 3) nom va narx bilan. Barcha konstruktorlar bir-biriga zanjirlangan holda oxirgi konstruktorga yo'naltirsin.",
      "en": "Implement 3-tier constructor chain cascading from no-arg down to primary constructor."
    },
    "steps": {
      "uz": [
        "'ChainedProduct' sinfini 'name' va 'price' xususiy maydonlari bilan oching.",
        "3 bosqichli konstruktorlar zanjirini tuzing: 'ChainedProduct()' -> 'this(\"Noma\\'lum\")'.",
        "'ChainedProduct(String name)' -> 'this(name, 3000.0)'.",
        "Asosiy 'public ChainedProduct(String name, double price)' maydonlarni o'zlashtirsin.",
        "'Main' metodida 'new ChainedProduct(\"Non\")' ochib, nom va standart narxni chiqaring."
      ],
      "en": [
        "Declare class 'ChainedProduct' with name and price fields.",
        "Implement 3-stage constructor chain: () -> (name) -> (name, price).",
        "No-arg calls this(\"Noma'lum\"), 1-arg calls this(name, 3000.0).",
        "Master constructor initializes fields directly.",
        "In 'main', instantiate with 'Non' and print name and chained default price."
      ]
    },
    "requirements": {
      "classes": [
        "ChainedProduct",
        "Main"
      ],
      "privateFields": [
        "name",
        "price"
      ],
      "methods": [
        "getName",
        "getPrice"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class ChainedProduct {\n    // TODO: Asosiy va this(...) orqali zanjirlangan konstruktorlarni yarating\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ChainedProduct p = new ChainedProduct(\"Non\");\n        System.out.println(p.getName() + \" narxi: \" + p.getPrice() + \" UZS\");\n    }\n}",
    "solution": "class ChainedProduct {\n    private String name;\n    private double price;\n\n    public ChainedProduct() {\n        this(\"Noma'lum\");\n    }\n\n    public ChainedProduct(String name) {\n        this(name, 3000.0);\n    }\n\n    public ChainedProduct(String name, double price) {\n        this.name = name;\n        this.price = price;\n    }\n\n    public String getName() {\n        return this.name;\n    }\n\n    public double getPrice() {\n        return this.price;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ChainedProduct p = new ChainedProduct(\"Non\");\n        System.out.println(p.getName() + \" narxi: \" + p.getPrice() + \" UZS\");\n    }\n}",
    "sampleData": [
      "Non narxi: 3000.0 UZS"
    ],
    "expectedOutput": "Non narxi: 3000.0 UZS",
    "detailedSolution": {
      "theory": "Konstruktorlarni qayta yuklash (Overloading) turli parametrlar bilan ob'yekt yaratish imkonini beradi. 'this(...)' orqali barcha konstruktorlarni bitta markaziy konstruktorga yo'naltirish (Constructor Chaining) DRY qoidasiga amal qilishning eng toza usulidir.",
      "theoryEn": "Constructor chaining with this(...) centralizes initialization logic and avoids code duplication across overloaded constructor variants.",
      "cleanCode": "class ChainedProduct {\n    private String name;\n    private double price;\n\n    public ChainedProduct() {\n        this(\"Noma'lum\");\n    }\n\n    public ChainedProduct(String name) {\n        this(name, 3000.0);\n    }\n\n    public ChainedProduct(String name, double price) {\n        this.name = name;\n        this.price = price;\n    }\n\n    public String getName() {\n        return this.name;\n    }\n\n    public double getPrice() {\n        return this.price;\n    }\n}",
      "breakdown": [
        "<code>this(...) & Guard Clause</code>: Konstruktorlar zanjiri kod takrorlanishini yo'qotadi, Guard Clause esa chuqur if-else ichma-ichligini to'xtatadi.",
        "<code>ChainedProduct</code>: Mustahkam himoyalangan va qayta yuklangan toza sinf arxitekturasi."
      ],
      "pitfalls": "'this(...)' chaqiruvi konstruktor tanasida mutlaqo BIRINCHI qatorda joylashishi shart, aks holda kompilyatsiya xatosi ro'y beradi.",
      "cw2Tip": "CW2 tizimida turli toifadagi foydalanuvchilar (Guest, VIP, Corporate) uchun zanjirli konstruktorlardan foydalaning."
    }
  },
  {
    "id": 64,
    "tier": 5,
    "tierName": "5-Bosqich: Konstruktorlarni Qayta Yuklash va Zanjir (this(...))",
    "sector": "61-75: Constructor Overloading & Chaining",
    "title": {
      "uz": "64. Yandex Go — Sukutdagi Miqdor Bilan 4 Bosqichli Zanjir",
      "en": "64. Yandex Go — 4-Stage Cascade with Default Quantity Parameter"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nTaksi ehtiyot qismlari omborida miqdor aytilmasa 1 dona deb olinadi. 4 ta konstruktorni zanjirlab eng to'liq 'CarPart(name, price, qty, inStock)' ga yetib boring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'CarPart' klassini 'name', 'price', 'quantity' maydonlari bilan oching.\n\n2. To'liq 3 parametrli 'public CarPart(String name, double price, int quantity)' konstruktorini yozing.\n\n3. 2 parametrli 'public CarPart(String name, double price)' konstruktorida 'this(name, price, 1)' orqali sukutdagi 1 dona miqdorini bering.\n\n4. 'getName()' va 'getQuantity()' getterlarini taqdim eting.\n\n5. 'Main' metodida ehtiyot qismini yaratib, sukutdagi miqdori 1 dona ekanini tasdiqlang.",
      "en": "📖 Real-World Scenario & Context\nCascade 4 overloaded constructors supplying default quantity of 1 if omitted.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'CarPart' with name, price, and quantity fields.\n\n2. Write 3-parameter master constructor.\n\n3. Implement 2-parameter constructor defaulting quantity to 1 via 'this(name, price, 1)'.\n\n4. Implement accessors 'getName()' and 'getQuantity()'.\n\n5. In 'main', instantiate part and print name and default quantity."
    },
    "story": {
      "uz": "Taksi ehtiyot qismlari omborida miqdor aytilmasa 1 dona deb olinadi. 4 ta konstruktorni zanjirlab eng to'liq 'CarPart(name, price, qty, inStock)' ga yetib boring.",
      "en": "Cascade 4 overloaded constructors supplying default quantity of 1 if omitted."
    },
    "steps": {
      "uz": [
        "'CarPart' klassini 'name', 'price', 'quantity' maydonlari bilan oching.",
        "To'liq 3 parametrli 'public CarPart(String name, double price, int quantity)' konstruktorini yozing.",
        "2 parametrli 'public CarPart(String name, double price)' konstruktorida 'this(name, price, 1)' orqali sukutdagi 1 dona miqdorini bering.",
        "'getName()' va 'getQuantity()' getterlarini taqdim eting.",
        "'Main' metodida ehtiyot qismini yaratib, sukutdagi miqdori 1 dona ekanini tasdiqlang."
      ],
      "en": [
        "Declare class 'CarPart' with name, price, and quantity fields.",
        "Write 3-parameter master constructor.",
        "Implement 2-parameter constructor defaulting quantity to 1 via 'this(name, price, 1)'.",
        "Implement accessors 'getName()' and 'getQuantity()'.",
        "In 'main', instantiate part and print name and default quantity."
      ]
    },
    "requirements": {
      "classes": [
        "CarPart",
        "Main"
      ],
      "privateFields": [
        "name",
        "price",
        "quantity"
      ],
      "methods": [
        "getName",
        "getQuantity"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class CarPart {\n    // TODO: Asosiy va this(...) orqali zanjirlangan konstruktorlarni yarating\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CarPart cp = new CarPart(\"Akkumulyator\", 450000.0);\n        System.out.println(cp.getName() + \" miqdori: \" + cp.getQuantity() + \" dona\");\n    }\n}",
    "solution": "class CarPart {\n    private String name;\n    private double price;\n    private int quantity;\n\n    public CarPart(String name, double price) {\n        this(name, price, 1);\n    }\n\n    public CarPart(String name, double price, int quantity) {\n        this.name = name;\n        this.price = price;\n        this.quantity = quantity;\n    }\n\n    public String getName() {\n        return this.name;\n    }\n\n    public int getQuantity() {\n        return this.quantity;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CarPart cp = new CarPart(\"Akkumulyator\", 450000.0);\n        System.out.println(cp.getName() + \" miqdori: \" + cp.getQuantity() + \" dona\");\n    }\n}",
    "sampleData": [
      "Akkumulyator miqdori: 1 dona"
    ],
    "expectedOutput": "Akkumulyator miqdori: 1 dona",
    "detailedSolution": {
      "theory": "Konstruktorlarni qayta yuklash (Overloading) turli parametrlar bilan ob'yekt yaratish imkonini beradi. 'this(...)' orqali barcha konstruktorlarni bitta markaziy konstruktorga yo'naltirish (Constructor Chaining) DRY qoidasiga amal qilishning eng toza usulidir.",
      "theoryEn": "Constructor chaining with this(...) centralizes initialization logic and avoids code duplication across overloaded constructor variants.",
      "cleanCode": "class CarPart {\n    private String name;\n    private double price;\n    private int quantity;\n\n    public CarPart(String name, double price) {\n        this(name, price, 1);\n    }\n\n    public CarPart(String name, double price, int quantity) {\n        this.name = name;\n        this.price = price;\n        this.quantity = quantity;\n    }\n\n    public String getName() {\n        return this.name;\n    }\n\n    public int getQuantity() {\n        return this.quantity;\n    }\n}",
      "breakdown": [
        "<code>this(...) & Guard Clause</code>: Konstruktorlar zanjiri kod takrorlanishini yo'qotadi, Guard Clause esa chuqur if-else ichma-ichligini to'xtatadi.",
        "<code>CarPart</code>: Mustahkam himoyalangan va qayta yuklangan toza sinf arxitekturasi."
      ],
      "pitfalls": "'this(...)' chaqiruvi konstruktor tanasida mutlaqo BIRINCHI qatorda joylashishi shart, aks holda kompilyatsiya xatosi ro'y beradi.",
      "cw2Tip": "CW2 tizimida turli toifadagi foydalanuvchilar (Guest, VIP, Corporate) uchun zanjirli konstruktorlardan foydalaning."
    }
  },
  {
    "id": 65,
    "tier": 5,
    "tierName": "5-Bosqich: Konstruktorlarni Qayta Yuklash va Zanjir (this(...))",
    "sector": "61-75: Constructor Overloading & Chaining",
    "title": {
      "uz": "65. Click — Seminar 2 Customer Zanjiri: this(name, points, balance)",
      "en": "65. Click — Seminar 2 Customer Constructor Chaining Implementation"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSeminar 2 rasmiy 'Customer.java' dagi zanjir: 'public Customer(String name, int points, double balance, String address) { this(name, points, balance); this.address = address; }'. Aynan shu zanjirni bajaring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'ClickCustomer' sinfini 'name', 'points', 'balance', 'address' maydonlari bilan e'lon qiling.\n\n2. WIUT Seminar 2 'Customer.java' andazasi: 3 parametrli 'public ClickCustomer(String name, int points, double balance)' konstruktorini yozing.\n\n3. 4 parametrli 'public ClickCustomer(String name, int points, double balance, String address)' konstruktorida mavjud 3 parametrli konstruktorni chaqirib, so'ng manzilni maydonga o'zlashtirish orqali zanjir hosil qiling.\n\n4. 'getName()' va 'getAddress()' getterlarini bering.\n\n5. 'Main' metodida 4 parametrli mijoz yaratib ma'lumotlarni konsolga chiqaring.",
      "en": "📖 Real-World Scenario & Context\nImplement Seminar 2 Customer constructor chaining pattern where 4-arg delegates to 3-arg constructor.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'ClickCustomer' matching Seminar 2 Customer fields.\n\n2. Write 3-parameter constructor initializing name, points, balance.\n\n3. Implement 4-parameter constructor chaining: mavjud 3 parametrli konstruktorni chaqirib, so'ng manzilni maydonga o'zlashtirish.\n\n4. Implement accessors 'getName()' and 'getAddress()'.\n\n5. In 'main', instantiate 4-parameter customer and print summary."
    },
    "story": {
      "uz": "Seminar 2 rasmiy 'Customer.java' dagi zanjir: 'public Customer(String name, int points, double balance, String address) { this(name, points, balance); this.address = address; }'. Aynan shu zanjirni bajaring.",
      "en": "Implement Seminar 2 Customer constructor chaining pattern where 4-arg delegates to 3-arg constructor."
    },
    "steps": {
      "uz": [
        "'ClickCustomer' sinfini 'name', 'points', 'balance', 'address' maydonlari bilan e'lon qiling.",
        "WIUT Seminar 2 'Customer.java' andazasi: 3 parametrli 'public ClickCustomer(String name, int points, double balance)' konstruktorini yozing.",
        "4 parametrli 'public ClickCustomer(String name, int points, double balance, String address)' konstruktorida mavjud 3 parametrli konstruktorni chaqirib, so'ng manzilni maydonga o'zlashtirish orqali zanjir hosil qiling.",
        "'getName()' va 'getAddress()' getterlarini bering.",
        "'Main' metodida 4 parametrli mijoz yaratib ma'lumotlarni konsolga chiqaring."
      ],
      "en": [
        "Declare class 'ClickCustomer' matching Seminar 2 Customer fields.",
        "Write 3-parameter constructor initializing name, points, balance.",
        "Implement 4-parameter constructor chaining: mavjud 3 parametrli konstruktorni chaqirib, so'ng manzilni maydonga o'zlashtirish.",
        "Implement accessors 'getName()' and 'getAddress()'.",
        "In 'main', instantiate 4-parameter customer and print summary."
      ]
    },
    "requirements": {
      "classes": [
        "ClickCustomer",
        "Main"
      ],
      "privateFields": [
        "name",
        "points",
        "balance",
        "address"
      ],
      "methods": [
        "getName",
        "getAddress"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class ClickCustomer {\n    // TODO: Asosiy va this(...) orqali zanjirlangan konstruktorlarni yarating\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ClickCustomer c = new ClickCustomer(\"Aziz\", 120, 50000.0, \"Toshkent\");\n        System.out.println(\"Mijoz: \" + c.getName() + \" | Manzil: \" + c.getAddress());\n    }\n}",
    "solution": "class ClickCustomer {\n    private String name;\n    private int points;\n    private double balance;\n    private String address;\n\n    public ClickCustomer(String name, int points, double balance) {\n        this.name = name;\n        this.points = points;\n        this.balance = balance;\n    }\n\n    public ClickCustomer(String name, int points, double balance, String address) {\n        this(name, points, balance);\n        this.address = address;\n    }\n\n    public String getName() {\n        return this.name;\n    }\n\n    public String getAddress() {\n        return this.address;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ClickCustomer c = new ClickCustomer(\"Aziz\", 120, 50000.0, \"Toshkent\");\n        System.out.println(\"Mijoz: \" + c.getName() + \" | Manzil: \" + c.getAddress());\n    }\n}",
    "sampleData": [
      "Mijoz: Aziz | Manzil: Toshkent"
    ],
    "expectedOutput": "Mijoz: Aziz | Manzil: Toshkent",
    "detailedSolution": {
      "theory": "Konstruktorlarni qayta yuklash (Overloading) turli parametrlar bilan ob'yekt yaratish imkonini beradi. 'this(...)' orqali barcha konstruktorlarni bitta markaziy konstruktorga yo'naltirish (Constructor Chaining) DRY qoidasiga amal qilishning eng toza usulidir.",
      "theoryEn": "Constructor chaining with this(...) centralizes initialization logic and avoids code duplication across overloaded constructor variants.",
      "cleanCode": "class ClickCustomer {\n    private String name;\n    private int points;\n    private double balance;\n    private String address;\n\n    public ClickCustomer(String name, int points, double balance) {\n        this.name = name;\n        this.points = points;\n        this.balance = balance;\n    }\n\n    public ClickCustomer(String name, int points, double balance, String address) {\n        this(name, points, balance);\n        this.address = address;\n    }\n\n    public String getName() {\n        return this.name;\n    }\n\n    public String getAddress() {\n        return this.address;\n    }\n}",
      "breakdown": [
        "<code>this(...) & Guard Clause</code>: Konstruktorlar zanjiri kod takrorlanishini yo'qotadi, Guard Clause esa chuqur if-else ichma-ichligini to'xtatadi.",
        "<code>ClickCustomer</code>: Mustahkam himoyalangan va qayta yuklangan toza sinf arxitekturasi."
      ],
      "pitfalls": "'this(...)' chaqiruvi konstruktor tanasida mutlaqo BIRINCHI qatorda joylashishi shart, aks holda kompilyatsiya xatosi ro'y beradi.",
      "cw2Tip": "CW2 tizimida turli toifadagi foydalanuvchilar (Guest, VIP, Corporate) uchun zanjirli konstruktorlardan foydalaning."
    }
  },
  {
    "id": 66,
    "tier": 5,
    "tierName": "5-Bosqich: Konstruktorlarni Qayta Yuklash va Zanjir (this(...))",
    "sector": "61-75: Constructor Overloading & Chaining",
    "title": {
      "uz": "66. Safia — Zanjir Orqali Barcha Validatsiyani 1 Joyda Markazlashtirish",
      "en": "66. Safia — Centralized Validation via Master Constructor Delegation"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nAgar 3 ta konstruktor bo'lsa, har birida 'if (price < 0)' yozish xatodir. Qisqa konstruktorlar 'this(...)' orqali master konstruktorga borsa, tekshiruv faqat 1 ta joyda amalga oshadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'CentralizedCake' sinfini xususiy (private) double toifasidagi 'price' maydoni bilan oching.\n\n2. Parametrsiz 'public CentralizedCake()' konstruktorida 'this(0.0)' chaqiring.\n\n3. Asosiy 'public CentralizedCake(double price)' konstruktorida validatsiyani markazlashtiring: 'this' orqali 'price' maydoniga qiymat bering.\n\n4. 'public double getPrice()' getterini yozing.\n\n5. 'Main' metodida -10000.0 narx berib, 0.0 ga xavfsiz to'g'rilanganini tekshiring.",
      "en": "📖 Real-World Scenario & Context\nFunnel all constructor paths through one master constructor where validation resides.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'CentralizedCake' with private double field 'price'.\n\n2. Implement no-arg constructor chaining to 'this(0.0)'.\n\n3. Centralize input validation in master constructor clamping negative to 0.0.\n\n4. Implement accessor 'getPrice()'.\n\n5. In 'main', pass -10000.0 and verify clamped 0.0 result."
    },
    "story": {
      "uz": "Agar 3 ta konstruktor bo'lsa, har birida 'if (price < 0)' yozish xatodir. Qisqa konstruktorlar 'this(...)' orqali master konstruktorga borsa, tekshiruv faqat 1 ta joyda amalga oshadi.",
      "en": "Funnel all constructor paths through one master constructor where validation resides."
    },
    "steps": {
      "uz": [
        "'CentralizedCake' sinfini xususiy (private) double toifasidagi 'price' maydoni bilan oching.",
        "Parametrsiz 'public CentralizedCake()' konstruktorida 'this(0.0)' chaqiring.",
        "Asosiy 'public CentralizedCake(double price)' konstruktorida validatsiyani markazlashtiring: 'this' orqali 'price' maydoniga qiymat bering.",
        "'public double getPrice()' getterini yozing.",
        "'Main' metodida -10000.0 narx berib, 0.0 ga xavfsiz to'g'rilanganini tekshiring."
      ],
      "en": [
        "Declare class 'CentralizedCake' with private double field 'price'.",
        "Implement no-arg constructor chaining to 'this(0.0)'.",
        "Centralize input validation in master constructor clamping negative to 0.0.",
        "Implement accessor 'getPrice()'.",
        "In 'main', pass -10000.0 and verify clamped 0.0 result."
      ]
    },
    "requirements": {
      "classes": [
        "CentralizedCake",
        "Main"
      ],
      "privateFields": [
        "price"
      ],
      "methods": [
        "getPrice"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class CentralizedCake {\n    // TODO: Asosiy va this(...) orqali zanjirlangan konstruktorlarni yarating\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CentralizedCake cake = new CentralizedCake(-10000.0);\n        System.out.println(\"Xavfsiz narx: \" + cake.getPrice() + \" UZS\");\n    }\n}",
    "solution": "class CentralizedCake {\n    private double price;\n\n    public CentralizedCake() {\n        this(0.0);\n    }\n\n    public CentralizedCake(double price) {\n        this.price = price < 0 ? 0.0 : price;\n    }\n\n    public double getPrice() {\n        return this.price;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CentralizedCake cake = new CentralizedCake(-10000.0);\n        System.out.println(\"Xavfsiz narx: \" + cake.getPrice() + \" UZS\");\n    }\n}",
    "sampleData": [
      "Xavfsiz narx: 0.0 UZS"
    ],
    "expectedOutput": "Xavfsiz narx: 0.0 UZS",
    "detailedSolution": {
      "theory": "Konstruktorlarni qayta yuklash (Overloading) turli parametrlar bilan ob'yekt yaratish imkonini beradi. 'this(...)' orqali barcha konstruktorlarni bitta markaziy konstruktorga yo'naltirish (Constructor Chaining) DRY qoidasiga amal qilishning eng toza usulidir.",
      "theoryEn": "Constructor chaining with this(...) centralizes initialization logic and avoids code duplication across overloaded constructor variants.",
      "cleanCode": "class CentralizedCake {\n    private double price;\n\n    public CentralizedCake() {\n        this(0.0);\n    }\n\n    public CentralizedCake(double price) {\n        this.price = price < 0 ? 0.0 : price;\n    }\n\n    public double getPrice() {\n        return this.price;\n    }\n}",
      "breakdown": [
        "<code>this(...) & Guard Clause</code>: Konstruktorlar zanjiri kod takrorlanishini yo'qotadi, Guard Clause esa chuqur if-else ichma-ichligini to'xtatadi.",
        "<code>CentralizedCake</code>: Mustahkam himoyalangan va qayta yuklangan toza sinf arxitekturasi."
      ],
      "pitfalls": "'this(...)' chaqiruvi konstruktor tanasida mutlaqo BIRINCHI qatorda joylashishi shart, aks holda kompilyatsiya xatosi ro'y beradi.",
      "cw2Tip": "CW2 tizimida turli toifadagi foydalanuvchilar (Guest, VIP, Corporate) uchun zanjirli konstruktorlardan foydalaning."
    }
  },
  {
    "id": 67,
    "tier": 5,
    "tierName": "5-Bosqich: Konstruktorlarni Qayta Yuklash va Zanjir (this(...))",
    "sector": "61-75: Constructor Overloading & Chaining",
    "title": {
      "uz": "67. Dodo Pizza — Parametr Turlari Bo'yicha Qayta Yuklash (int id vs String code)",
      "en": "67. Dodo Pizza — Constructor Overloading by Distinct Parameter Types"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nLeksiyada (Slide 24): konstruktorlar parametrlari turlari bilan farqlanishi mumkin. Biri raqamli buyurtma id ('105'), ikkinchisi matnli kod ('ORD-105') qabul qiluvchi 2 ta konstruktorni yozing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'OrderIdentifier' klassini xususiy (private) String toifasidagi 'code' maydoni bilan e'lon qiling.\n\n2. Butun son qabul qiluvchi 'public OrderIdentifier(int id)' konstruktorida 'this' orqali 'code' maydoniga qiymat bering qiling.\n\n3. Satr qabul qiluvchi 'public OrderIdentifier(String code)' konstruktorida 'this' orqali 'code' maydoniga qiymat bering qiling.\n\n4. 'public String getCode()' getterini yozing.\n\n5. 'Main' metodida ikkala konstruktorni ham ishlatib kodlarni konsolga chiqaring.",
      "en": "📖 Real-World Scenario & Context\nOverload constructor with int identifier and String identifier converting int to string.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'OrderIdentifier' with private String field 'code'.\n\n2. Implement constructor overloading by type: (int id) prepending 'ORD-'.\n\n3. Implement constructor overloading by type: (String code) direct assignment.\n\n4. Implement accessor 'getCode()'.\n\n5. In 'main', instantiate both constructor variants and print results."
    },
    "story": {
      "uz": "Leksiyada (Slide 24): konstruktorlar parametrlari turlari bilan farqlanishi mumkin. Biri raqamli buyurtma id ('105'), ikkinchisi matnli kod ('ORD-105') qabul qiluvchi 2 ta konstruktorni yozing.",
      "en": "Overload constructor with int identifier and String identifier converting int to string."
    },
    "steps": {
      "uz": [
        "'OrderIdentifier' klassini xususiy (private) String toifasidagi 'code' maydoni bilan e'lon qiling.",
        "Butun son qabul qiluvchi 'public OrderIdentifier(int id)' konstruktorida 'this' orqali 'code' maydoniga qiymat bering qiling.",
        "Satr qabul qiluvchi 'public OrderIdentifier(String code)' konstruktorida 'this' orqali 'code' maydoniga qiymat bering qiling.",
        "'public String getCode()' getterini yozing.",
        "'Main' metodida ikkala konstruktorni ham ishlatib kodlarni konsolga chiqaring."
      ],
      "en": [
        "Declare class 'OrderIdentifier' with private String field 'code'.",
        "Implement constructor overloading by type: (int id) prepending 'ORD-'.",
        "Implement constructor overloading by type: (String code) direct assignment.",
        "Implement accessor 'getCode()'.",
        "In 'main', instantiate both constructor variants and print results."
      ]
    },
    "requirements": {
      "classes": [
        "OrderIdentifier",
        "Main"
      ],
      "privateFields": [
        "code"
      ],
      "methods": [
        "getCode"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class OrderIdentifier {\n    // TODO: Asosiy va this(...) orqali zanjirlangan konstruktorlarni yarating\n}\n\nclass Main {\n    public static void main(String[] args) {\n        OrderIdentifier o1 = new OrderIdentifier(105);\n        OrderIdentifier o2 = new OrderIdentifier(\"VIP-99\");\n        System.out.println(\"1: \" + o1.getCode() + \" | 2: \" + o2.getCode());\n    }\n}",
    "solution": "class OrderIdentifier {\n    private String code;\n\n    public OrderIdentifier(int id) {\n        this.code = \"ORD-\" + id;\n    }\n\n    public OrderIdentifier(String code) {\n        this.code = code;\n    }\n\n    public String getCode() {\n        return this.code;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        OrderIdentifier o1 = new OrderIdentifier(105);\n        OrderIdentifier o2 = new OrderIdentifier(\"VIP-99\");\n        System.out.println(\"1: \" + o1.getCode() + \" | 2: \" + o2.getCode());\n    }\n}",
    "sampleData": [
      "1: ORD-105 | 2: VIP-99"
    ],
    "expectedOutput": "1: ORD-105 | 2: VIP-99",
    "detailedSolution": {
      "theory": "Konstruktorlarni qayta yuklash (Overloading) turli parametrlar bilan ob'yekt yaratish imkonini beradi. 'this(...)' orqali barcha konstruktorlarni bitta markaziy konstruktorga yo'naltirish (Constructor Chaining) DRY qoidasiga amal qilishning eng toza usulidir.",
      "theoryEn": "Constructor chaining with this(...) centralizes initialization logic and avoids code duplication across overloaded constructor variants.",
      "cleanCode": "class OrderIdentifier {\n    private String code;\n\n    public OrderIdentifier(int id) {\n        this.code = \"ORD-\" + id;\n    }\n\n    public OrderIdentifier(String code) {\n        this.code = code;\n    }\n\n    public String getCode() {\n        return this.code;\n    }\n}",
      "breakdown": [
        "<code>this(...) & Guard Clause</code>: Konstruktorlar zanjiri kod takrorlanishini yo'qotadi, Guard Clause esa chuqur if-else ichma-ichligini to'xtatadi.",
        "<code>OrderIdentifier</code>: Mustahkam himoyalangan va qayta yuklangan toza sinf arxitekturasi."
      ],
      "pitfalls": "'this(...)' chaqiruvi konstruktor tanasida mutlaqo BIRINCHI qatorda joylashishi shart, aks holda kompilyatsiya xatosi ro'y beradi.",
      "cw2Tip": "CW2 tizimida turli toifadagi foydalanuvchilar (Guest, VIP, Corporate) uchun zanjirli konstruktorlardan foydalaning."
    }
  },
  {
    "id": 68,
    "tier": 5,
    "tierName": "5-Bosqich: Konstruktorlarni Qayta Yuklash va Zanjir (this(...))",
    "sector": "61-75: Constructor Overloading & Chaining",
    "title": {
      "uz": "68. Texnomart — Parametrlar Tartibi va Rollari Bo'yicha Qayta Yuklash",
      "en": "68. Texnomart — Parameter Ordering and Role Differentiated Overloading"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nBitta konstruktor (nom, narx), ikkinchisi esa (nom, narx, kafolatOyi) qabul qiladi. Qisqasi 'this(nom, narx, 12)' orqali standart 12 oy kafolat beruvchi zanjirni yarating.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'ApplianceWarranty' sinfini 'name', 'price', 'warrantyMonths' maydonlari bilan yarating.\n\n2. 3 parametrli 'public ApplianceWarranty(String name, double price, int warrantyMonths)' master konstruktorini yozing.\n\n3. 2 parametrli 'public ApplianceWarranty(String name, double price)' konstruktorida 'this(name, price, 12)' orqali 12 oylik kafolatni o'rnating.\n\n4. 'getName()' va 'getWarrantyMonths()' getterlarini taqdim eting.\n\n5. 'Main' metodida mahsulot yaratib, sukutdagi 12 oylik kafolatni chop eting.",
      "en": "📖 Real-World Scenario & Context\nOverload constructors providing default 12-month warranty when omitted.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'ApplianceWarranty' with name, price, and warrantyMonths fields.\n\n2. Write master constructor 'public ApplianceWarranty(String name, double price, int warrantyMonths)'.\n\n3. Implement 2-parameter constructor chaining: 'this(name, price, 12)'.\n\n4. Implement accessors 'getName()' and 'getWarrantyMonths()'.\n\n5. In 'main', instantiate item and print warranty period."
    },
    "story": {
      "uz": "Bitta konstruktor (nom, narx), ikkinchisi esa (nom, narx, kafolatOyi) qabul qiladi. Qisqasi 'this(nom, narx, 12)' orqali standart 12 oy kafolat beruvchi zanjirni yarating.",
      "en": "Overload constructors providing default 12-month warranty when omitted."
    },
    "steps": {
      "uz": [
        "'ApplianceWarranty' sinfini 'name', 'price', 'warrantyMonths' maydonlari bilan yarating.",
        "3 parametrli 'public ApplianceWarranty(String name, double price, int warrantyMonths)' master konstruktorini yozing.",
        "2 parametrli 'public ApplianceWarranty(String name, double price)' konstruktorida 'this(name, price, 12)' orqali 12 oylik kafolatni o'rnating.",
        "'getName()' va 'getWarrantyMonths()' getterlarini taqdim eting.",
        "'Main' metodida mahsulot yaratib, sukutdagi 12 oylik kafolatni chop eting."
      ],
      "en": [
        "Declare class 'ApplianceWarranty' with name, price, and warrantyMonths fields.",
        "Write master constructor 'public ApplianceWarranty(String name, double price, int warrantyMonths)'.",
        "Implement 2-parameter constructor chaining: 'this(name, price, 12)'.",
        "Implement accessors 'getName()' and 'getWarrantyMonths()'.",
        "In 'main', instantiate item and print warranty period."
      ]
    },
    "requirements": {
      "classes": [
        "ApplianceWarranty",
        "Main"
      ],
      "privateFields": [
        "name",
        "price",
        "warrantyMonths"
      ],
      "methods": [
        "getName",
        "getWarrantyMonths"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class ApplianceWarranty {\n    // TODO: Asosiy va this(...) orqali zanjirlangan konstruktorlarni yarating\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ApplianceWarranty aw = new ApplianceWarranty(\"Dazmol\", 250000.0);\n        System.out.println(aw.getName() + \" kafolat muddati: \" + aw.getWarrantyMonths() + \" oy\");\n    }\n}",
    "solution": "class ApplianceWarranty {\n    private String name;\n    private double price;\n    private int warrantyMonths;\n\n    public ApplianceWarranty(String name, double price) {\n        this(name, price, 12);\n    }\n\n    public ApplianceWarranty(String name, double price, int warrantyMonths) {\n        this.name = name;\n        this.price = price;\n        this.warrantyMonths = warrantyMonths;\n    }\n\n    public String getName() {\n        return this.name;\n    }\n\n    public int getWarrantyMonths() {\n        return this.warrantyMonths;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ApplianceWarranty aw = new ApplianceWarranty(\"Dazmol\", 250000.0);\n        System.out.println(aw.getName() + \" kafolat muddati: \" + aw.getWarrantyMonths() + \" oy\");\n    }\n}",
    "sampleData": [
      "Dazmol kafolat muddati: 12 oy"
    ],
    "expectedOutput": "Dazmol kafolat muddati: 12 oy",
    "detailedSolution": {
      "theory": "Konstruktorlarni qayta yuklash (Overloading) turli parametrlar bilan ob'yekt yaratish imkonini beradi. 'this(...)' orqali barcha konstruktorlarni bitta markaziy konstruktorga yo'naltirish (Constructor Chaining) DRY qoidasiga amal qilishning eng toza usulidir.",
      "theoryEn": "Constructor chaining with this(...) centralizes initialization logic and avoids code duplication across overloaded constructor variants.",
      "cleanCode": "class ApplianceWarranty {\n    private String name;\n    private double price;\n    private int warrantyMonths;\n\n    public ApplianceWarranty(String name, double price) {\n        this(name, price, 12);\n    }\n\n    public ApplianceWarranty(String name, double price, int warrantyMonths) {\n        this.name = name;\n        this.price = price;\n        this.warrantyMonths = warrantyMonths;\n    }\n\n    public String getName() {\n        return this.name;\n    }\n\n    public int getWarrantyMonths() {\n        return this.warrantyMonths;\n    }\n}",
      "breakdown": [
        "<code>this(...) & Guard Clause</code>: Konstruktorlar zanjiri kod takrorlanishini yo'qotadi, Guard Clause esa chuqur if-else ichma-ichligini to'xtatadi.",
        "<code>ApplianceWarranty</code>: Mustahkam himoyalangan va qayta yuklangan toza sinf arxitekturasi."
      ],
      "pitfalls": "'this(...)' chaqiruvi konstruktor tanasida mutlaqo BIRINCHI qatorda joylashishi shart, aks holda kompilyatsiya xatosi ro'y beradi.",
      "cw2Tip": "CW2 tizimida turli toifadagi foydalanuvchilar (Guest, VIP, Corporate) uchun zanjirli konstruktorlardan foydalaning."
    }
  },
  {
    "id": 69,
    "tier": 5,
    "tierName": "5-Bosqich: Konstruktorlarni Qayta Yuklash va Zanjir (this(...))",
    "sector": "61-75: Constructor Overloading & Chaining",
    "title": {
      "uz": "69. Medion — Nusxa Oluvchi Konstruktor (Copy Constructor)",
      "en": "69. Medion — Copy Constructor Duplicating Entity State"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nBemorning eski qabul varaqasi asosida yangi qabul nusxasini yaratish uchun 'PatientRecord(PatientRecord other)' nusxa oluvchi konstruktorini yozing. U mavjud ob'yekt maydonlarini ko'chiradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'PatientRecord' sinfini 'name' va 'age' xususiy maydonlari bilan oching.\n\n2. Parametrli 'public PatientRecord(String name, int age)' konstruktorini yozing.\n\n3. Nusxa konstruktori (Copy Constructor): 'public PatientRecord(PatientRecord other)' ichida 'this(other.name, other.age)' orqali holatni klonlang.\n\n4. 'getName()' va 'getAge()' getterlarini bering.\n\n5. 'Main' metodida birinchi bemordan nusxa olib, nusxa ob'yektining ma'lumotlarini chop eting.",
      "en": "📖 Real-World Scenario & Context\nImplement copy constructor taking existing instance and duplicating fields.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'PatientRecord' with name and age fields.\n\n2. Write standard constructor 'public PatientRecord(String name, int age)'.\n\n3. Implement copy constructor 'public PatientRecord(PatientRecord other)' chaining via 'this(other.name, other.age)'.\n\n4. Implement accessors 'getName()' and 'getAge()'.\n\n5. In 'main', copy record and print cloned state."
    },
    "story": {
      "uz": "Bemorning eski qabul varaqasi asosida yangi qabul nusxasini yaratish uchun 'PatientRecord(PatientRecord other)' nusxa oluvchi konstruktorini yozing. U mavjud ob'yekt maydonlarini ko'chiradi.",
      "en": "Implement copy constructor taking existing instance and duplicating fields."
    },
    "steps": {
      "uz": [
        "'PatientRecord' sinfini 'name' va 'age' xususiy maydonlari bilan oching.",
        "Parametrli 'public PatientRecord(String name, int age)' konstruktorini yozing.",
        "Nusxa konstruktori (Copy Constructor): 'public PatientRecord(PatientRecord other)' ichida 'this(other.name, other.age)' orqali holatni klonlang.",
        "'getName()' va 'getAge()' getterlarini bering.",
        "'Main' metodida birinchi bemordan nusxa olib, nusxa ob'yektining ma'lumotlarini chop eting."
      ],
      "en": [
        "Declare class 'PatientRecord' with name and age fields.",
        "Write standard constructor 'public PatientRecord(String name, int age)'.",
        "Implement copy constructor 'public PatientRecord(PatientRecord other)' chaining via 'this(other.name, other.age)'.",
        "Implement accessors 'getName()' and 'getAge()'.",
        "In 'main', copy record and print cloned state."
      ]
    },
    "requirements": {
      "classes": [
        "PatientRecord",
        "Main"
      ],
      "privateFields": [
        "name",
        "age"
      ],
      "methods": [
        "getName",
        "getAge"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class PatientRecord {\n    // TODO: Asosiy va this(...) orqali zanjirlangan konstruktorlarni yarating\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PatientRecord p1 = new PatientRecord(\"Rustam\", 30);\n        PatientRecord p2 = new PatientRecord(p1);\n        System.out.println(\"Nusxa bemor: \" + p2.getName() + \" | Yoshi: \" + p2.getAge());\n    }\n}",
    "solution": "class PatientRecord {\n    private String name;\n    private int age;\n\n    public PatientRecord(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n\n    public PatientRecord(PatientRecord other) {\n        this(other.name, other.age);\n    }\n\n    public String getName() {\n        return this.name;\n    }\n\n    public int getAge() {\n        return this.age;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PatientRecord p1 = new PatientRecord(\"Rustam\", 30);\n        PatientRecord p2 = new PatientRecord(p1);\n        System.out.println(\"Nusxa bemor: \" + p2.getName() + \" | Yoshi: \" + p2.getAge());\n    }\n}",
    "sampleData": [
      "Nusxa bemor: Rustam | Yoshi: 30"
    ],
    "expectedOutput": "Nusxa bemor: Rustam | Yoshi: 30",
    "detailedSolution": {
      "theory": "Konstruktorlarni qayta yuklash (Overloading) turli parametrlar bilan ob'yekt yaratish imkonini beradi. 'this(...)' orqali barcha konstruktorlarni bitta markaziy konstruktorga yo'naltirish (Constructor Chaining) DRY qoidasiga amal qilishning eng toza usulidir.",
      "theoryEn": "Constructor chaining with this(...) centralizes initialization logic and avoids code duplication across overloaded constructor variants.",
      "cleanCode": "class PatientRecord {\n    private String name;\n    private int age;\n\n    public PatientRecord(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n\n    public PatientRecord(PatientRecord other) {\n        this(other.name, other.age);\n    }\n\n    public String getName() {\n        return this.name;\n    }\n\n    public int getAge() {\n        return this.age;\n    }\n}",
      "breakdown": [
        "<code>this(...) & Guard Clause</code>: Konstruktorlar zanjiri kod takrorlanishini yo'qotadi, Guard Clause esa chuqur if-else ichma-ichligini to'xtatadi.",
        "<code>PatientRecord</code>: Mustahkam himoyalangan va qayta yuklangan toza sinf arxitekturasi."
      ],
      "pitfalls": "'this(...)' chaqiruvi konstruktor tanasida mutlaqo BIRINCHI qatorda joylashishi shart, aks holda kompilyatsiya xatosi ro'y beradi.",
      "cw2Tip": "CW2 tizimida turli toifadagi foydalanuvchilar (Guest, VIP, Corporate) uchun zanjirli konstruktorlardan foydalaning."
    }
  },
  {
    "id": 70,
    "tier": 5,
    "tierName": "5-Bosqich: Konstruktorlarni Qayta Yuklash va Zanjir (this(...))",
    "sector": "61-75: Constructor Overloading & Chaining",
    "title": {
      "uz": "70. Express24 — Zanjirda Boshlang'ich Sodiqlik Balli Berish",
      "en": "70. Express24 — Welcome Bonus Points Preset in Constructor Chain"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nYangi mijoz ro'yxatdan o'tganda faqat ismi kiritilsa, zanjirli konstruktor unga avtomatik 50 ball xush kelibsiz bonusi bilan 'this(name, 50)' deb hisob ochsin.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'CourierClient' sinfini 'name' va 'bonusPoints' maydonlari bilan e'lon qiling.\n\n2. 2 parametrli 'public CourierClient(String name, int bonusPoints)' master konstruktorini yozing.\n\n3. Bitta parametrli 'public CourierClient(String name)' konstruktorida 'this(name, 50)' orqali xush kelibsiz bonusini bering.\n\n4. 'getName()' va 'getBonusPoints()' getterlarini bering.\n\n5. 'Main' metodida 'Dilshod' nomli yangi mijoz ochib, 50 ball berilganini chiqaring.",
      "en": "📖 Real-World Scenario & Context\nChain single-parameter user constructor to provide 50 welcome points automatically.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'CourierClient' with name and bonusPoints fields.\n\n2. Write master constructor 'public CourierClient(String name, int bonusPoints)'.\n\n3. Implement single-param constructor chaining: 'this(name, 50)'.\n\n4. Implement accessors 'getName()' and 'getBonusPoints()'.\n\n5. In 'main', instantiate client and verify welcome bonus points."
    },
    "story": {
      "uz": "Yangi mijoz ro'yxatdan o'tganda faqat ismi kiritilsa, zanjirli konstruktor unga avtomatik 50 ball xush kelibsiz bonusi bilan 'this(name, 50)' deb hisob ochsin.",
      "en": "Chain single-parameter user constructor to provide 50 welcome points automatically."
    },
    "steps": {
      "uz": [
        "'CourierClient' sinfini 'name' va 'bonusPoints' maydonlari bilan e'lon qiling.",
        "2 parametrli 'public CourierClient(String name, int bonusPoints)' master konstruktorini yozing.",
        "Bitta parametrli 'public CourierClient(String name)' konstruktorida 'this(name, 50)' orqali xush kelibsiz bonusini bering.",
        "'getName()' va 'getBonusPoints()' getterlarini bering.",
        "'Main' metodida 'Dilshod' nomli yangi mijoz ochib, 50 ball berilganini chiqaring."
      ],
      "en": [
        "Declare class 'CourierClient' with name and bonusPoints fields.",
        "Write master constructor 'public CourierClient(String name, int bonusPoints)'.",
        "Implement single-param constructor chaining: 'this(name, 50)'.",
        "Implement accessors 'getName()' and 'getBonusPoints()'.",
        "In 'main', instantiate client and verify welcome bonus points."
      ]
    },
    "requirements": {
      "classes": [
        "CourierClient",
        "Main"
      ],
      "privateFields": [
        "name",
        "bonusPoints"
      ],
      "methods": [
        "getName",
        "getBonusPoints"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class CourierClient {\n    // TODO: Asosiy va this(...) orqali zanjirlangan konstruktorlarni yarating\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CourierClient client = new CourierClient(\"Dilshod\");\n        System.out.println(client.getName() + \" ballari: \" + client.getBonusPoints());\n    }\n}",
    "solution": "class CourierClient {\n    private String name;\n    private int bonusPoints;\n\n    public CourierClient(String name) {\n        this(name, 50);\n    }\n\n    public CourierClient(String name, int bonusPoints) {\n        this.name = name;\n        this.bonusPoints = bonusPoints;\n    }\n\n    public String getName() {\n        return this.name;\n    }\n\n    public int getBonusPoints() {\n        return this.bonusPoints;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CourierClient client = new CourierClient(\"Dilshod\");\n        System.out.println(client.getName() + \" ballari: \" + client.getBonusPoints());\n    }\n}",
    "sampleData": [
      "Dilshod ballari: 50"
    ],
    "expectedOutput": "Dilshod ballari: 50",
    "detailedSolution": {
      "theory": "Konstruktorlarni qayta yuklash (Overloading) turli parametrlar bilan ob'yekt yaratish imkonini beradi. 'this(...)' orqali barcha konstruktorlarni bitta markaziy konstruktorga yo'naltirish (Constructor Chaining) DRY qoidasiga amal qilishning eng toza usulidir.",
      "theoryEn": "Constructor chaining with this(...) centralizes initialization logic and avoids code duplication across overloaded constructor variants.",
      "cleanCode": "class CourierClient {\n    private String name;\n    private int bonusPoints;\n\n    public CourierClient(String name) {\n        this(name, 50);\n    }\n\n    public CourierClient(String name, int bonusPoints) {\n        this.name = name;\n        this.bonusPoints = bonusPoints;\n    }\n\n    public String getName() {\n        return this.name;\n    }\n\n    public int getBonusPoints() {\n        return this.bonusPoints;\n    }\n}",
      "breakdown": [
        "<code>this(...) & Guard Clause</code>: Konstruktorlar zanjiri kod takrorlanishini yo'qotadi, Guard Clause esa chuqur if-else ichma-ichligini to'xtatadi.",
        "<code>CourierClient</code>: Mustahkam himoyalangan va qayta yuklangan toza sinf arxitekturasi."
      ],
      "pitfalls": "'this(...)' chaqiruvi konstruktor tanasida mutlaqo BIRINCHI qatorda joylashishi shart, aks holda kompilyatsiya xatosi ro'y beradi.",
      "cw2Tip": "CW2 tizimida turli toifadagi foydalanuvchilar (Guest, VIP, Corporate) uchun zanjirli konstruktorlardan foydalaning."
    }
  },
  {
    "id": 71,
    "tier": 5,
    "tierName": "5-Bosqich: Konstruktorlarni Qayta Yuklash va Zanjir (this(...))",
    "sector": "61-75: Constructor Overloading & Chaining",
    "title": {
      "uz": "71. Asaxiy — Zanjir Orqali Faollik Holatini O'rnatish",
      "en": "71. Asaxiy — Lifecycle Status Preset via Chained Constructor"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nKitob xaridi boshlanganda uning holati 'NEW' bo'ladi. 'BookOrder(String book)' konstruktori 'this(book, \"NEW\")' orqali asosiy konstruktorga murojaat qilsin.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'BookOrderChain' sinfini 'book' va 'status' maydonlari bilan yarating.\n\n2. 2 parametrli 'public BookOrderChain(String book, String status)' master konstruktorini yozing.\n\n3. Bitta parametrli 'public BookOrderChain(String book)' konstruktorida 'this(book, \"NEW\")' deb boshlang'ich holatni o'rnating.\n\n4. 'getBook()' va 'getStatus()' getterlarini taqdim eting.\n\n5. 'Main' metodida kitob buyurtmasi holatini konsolga chiqaring.",
      "en": "📖 Real-World Scenario & Context\nChain book constructor supplying 'NEW' lifecycle state to primary constructor.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'BookOrderChain' with book and status fields.\n\n2. Write master constructor 'public BookOrderChain(String book, String status)'.\n\n3. Implement single-parameter constructor chaining: 'this(book, \"NEW\")'.\n\n4. Implement accessors 'getBook()' and 'getStatus()'.\n\n5. In 'main', instantiate order and print lifecycle status."
    },
    "story": {
      "uz": "Kitob xaridi boshlanganda uning holati 'NEW' bo'ladi. 'BookOrder(String book)' konstruktori 'this(book, \"NEW\")' orqali asosiy konstruktorga murojaat qilsin.",
      "en": "Chain book constructor supplying 'NEW' lifecycle state to primary constructor."
    },
    "steps": {
      "uz": [
        "'BookOrderChain' sinfini 'book' va 'status' maydonlari bilan yarating.",
        "2 parametrli 'public BookOrderChain(String book, String status)' master konstruktorini yozing.",
        "Bitta parametrli 'public BookOrderChain(String book)' konstruktorida 'this(book, \"NEW\")' deb boshlang'ich holatni o'rnating.",
        "'getBook()' va 'getStatus()' getterlarini taqdim eting.",
        "'Main' metodida kitob buyurtmasi holatini konsolga chiqaring."
      ],
      "en": [
        "Declare class 'BookOrderChain' with book and status fields.",
        "Write master constructor 'public BookOrderChain(String book, String status)'.",
        "Implement single-parameter constructor chaining: 'this(book, \"NEW\")'.",
        "Implement accessors 'getBook()' and 'getStatus()'.",
        "In 'main', instantiate order and print lifecycle status."
      ]
    },
    "requirements": {
      "classes": [
        "BookOrderChain",
        "Main"
      ],
      "privateFields": [
        "book",
        "status"
      ],
      "methods": [
        "getBook",
        "getStatus"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class BookOrderChain {\n    // TODO: Asosiy va this(...) orqali zanjirlangan konstruktorlarni yarating\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BookOrderChain bo = new BookOrderChain(\"Ufq\");\n        System.out.println(bo.getBook() + \" holati: \" + bo.getStatus());\n    }\n}",
    "solution": "class BookOrderChain {\n    private String book;\n    private String status;\n\n    public BookOrderChain(String book) {\n        this(book, \"NEW\");\n    }\n\n    public BookOrderChain(String book, String status) {\n        this.book = book;\n        this.status = status;\n    }\n\n    public String getBook() {\n        return this.book;\n    }\n\n    public String getStatus() {\n        return this.status;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BookOrderChain bo = new BookOrderChain(\"Ufq\");\n        System.out.println(bo.getBook() + \" holati: \" + bo.getStatus());\n    }\n}",
    "sampleData": [
      "Ufq holati: NEW"
    ],
    "expectedOutput": "Ufq holati: NEW",
    "detailedSolution": {
      "theory": "Konstruktorlarni qayta yuklash (Overloading) turli parametrlar bilan ob'yekt yaratish imkonini beradi. 'this(...)' orqali barcha konstruktorlarni bitta markaziy konstruktorga yo'naltirish (Constructor Chaining) DRY qoidasiga amal qilishning eng toza usulidir.",
      "theoryEn": "Constructor chaining with this(...) centralizes initialization logic and avoids code duplication across overloaded constructor variants.",
      "cleanCode": "class BookOrderChain {\n    private String book;\n    private String status;\n\n    public BookOrderChain(String book) {\n        this(book, \"NEW\");\n    }\n\n    public BookOrderChain(String book, String status) {\n        this.book = book;\n        this.status = status;\n    }\n\n    public String getBook() {\n        return this.book;\n    }\n\n    public String getStatus() {\n        return this.status;\n    }\n}",
      "breakdown": [
        "<code>this(...) & Guard Clause</code>: Konstruktorlar zanjiri kod takrorlanishini yo'qotadi, Guard Clause esa chuqur if-else ichma-ichligini to'xtatadi.",
        "<code>BookOrderChain</code>: Mustahkam himoyalangan va qayta yuklangan toza sinf arxitekturasi."
      ],
      "pitfalls": "'this(...)' chaqiruvi konstruktor tanasida mutlaqo BIRINCHI qatorda joylashishi shart, aks holda kompilyatsiya xatosi ro'y beradi.",
      "cw2Tip": "CW2 tizimida turli toifadagi foydalanuvchilar (Guest, VIP, Corporate) uchun zanjirli konstruktorlardan foydalaning."
    }
  },
  {
    "id": 72,
    "tier": 5,
    "tierName": "5-Bosqich: Konstruktorlarni Qayta Yuklash va Zanjir (this(...))",
    "sector": "61-75: Constructor Overloading & Chaining",
    "title": {
      "uz": "72. Kapitalbank — Milliy Valyuta (UZS) Standartli Zanjir",
      "en": "72. Kapitalbank — National Currency Default Fallback Constructor Chain"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nValyuta ko'rsatilmaganda 'this(amount, \"UZS\")' deb chaqiriluvchi zanjirli konstruktorni dasturlang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'BankTransferChain' sinfini 'amount' va 'currency' maydonlari bilan oching.\n\n2. 2 parametrli 'public BankTransferChain(double amount, String currency)' master konstruktorini yozing.\n\n3. Bitta parametrli 'public BankTransferChain(double amount)' konstruktorida 'this(amount, \"UZS\")' orqali milliy valyutani standart qiling.\n\n4. 'getAmount()' va 'getCurrency()' getterlarini bering.\n\n5. 'Main' metodida 500000.0 uchun o'tkazma yaratib konsolga chiqaring.",
      "en": "📖 Real-World Scenario & Context\nDefault currency to UZS when not specified via constructor chaining.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'BankTransferChain' with amount and currency fields.\n\n2. Write master constructor 'public BankTransferChain(double amount, String currency)'.\n\n3. Implement single-parameter constructor defaulting currency: 'this(amount, \"UZS\")'.\n\n4. Implement accessors 'getAmount()' and 'getCurrency()'.\n\n5. In 'main', instantiate transfer and print amount and currency."
    },
    "story": {
      "uz": "Valyuta ko'rsatilmaganda 'this(amount, \"UZS\")' deb chaqiriluvchi zanjirli konstruktorni dasturlang.",
      "en": "Default currency to UZS when not specified via constructor chaining."
    },
    "steps": {
      "uz": [
        "'BankTransferChain' sinfini 'amount' va 'currency' maydonlari bilan oching.",
        "2 parametrli 'public BankTransferChain(double amount, String currency)' master konstruktorini yozing.",
        "Bitta parametrli 'public BankTransferChain(double amount)' konstruktorida 'this(amount, \"UZS\")' orqali milliy valyutani standart qiling.",
        "'getAmount()' va 'getCurrency()' getterlarini bering.",
        "'Main' metodida 500000.0 uchun o'tkazma yaratib konsolga chiqaring."
      ],
      "en": [
        "Declare class 'BankTransferChain' with amount and currency fields.",
        "Write master constructor 'public BankTransferChain(double amount, String currency)'.",
        "Implement single-parameter constructor defaulting currency: 'this(amount, \"UZS\")'.",
        "Implement accessors 'getAmount()' and 'getCurrency()'.",
        "In 'main', instantiate transfer and print amount and currency."
      ]
    },
    "requirements": {
      "classes": [
        "BankTransferChain",
        "Main"
      ],
      "privateFields": [
        "amount",
        "currency"
      ],
      "methods": [
        "getAmount",
        "getCurrency"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class BankTransferChain {\n    // TODO: Asosiy va this(...) orqali zanjirlangan konstruktorlarni yarating\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BankTransferChain btc = new BankTransferChain(500000.0);\n        System.out.println(\"O'tkazma: \" + btc.getAmount() + \" \" + btc.getCurrency());\n    }\n}",
    "solution": "class BankTransferChain {\n    private double amount;\n    private String currency;\n\n    public BankTransferChain(double amount) {\n        this(amount, \"UZS\");\n    }\n\n    public BankTransferChain(double amount, String currency) {\n        this.amount = amount;\n        this.currency = currency;\n    }\n\n    public double getAmount() {\n        return this.amount;\n    }\n\n    public String getCurrency() {\n        return this.currency;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BankTransferChain btc = new BankTransferChain(500000.0);\n        System.out.println(\"O'tkazma: \" + btc.getAmount() + \" \" + btc.getCurrency());\n    }\n}",
    "sampleData": [
      "O'tkazma: 500000.0 UZS"
    ],
    "expectedOutput": "O'tkazma: 500000.0 UZS",
    "detailedSolution": {
      "theory": "Konstruktorlarni qayta yuklash (Overloading) turli parametrlar bilan ob'yekt yaratish imkonini beradi. 'this(...)' orqali barcha konstruktorlarni bitta markaziy konstruktorga yo'naltirish (Constructor Chaining) DRY qoidasiga amal qilishning eng toza usulidir.",
      "theoryEn": "Constructor chaining with this(...) centralizes initialization logic and avoids code duplication across overloaded constructor variants.",
      "cleanCode": "class BankTransferChain {\n    private double amount;\n    private String currency;\n\n    public BankTransferChain(double amount) {\n        this(amount, \"UZS\");\n    }\n\n    public BankTransferChain(double amount, String currency) {\n        this.amount = amount;\n        this.currency = currency;\n    }\n\n    public double getAmount() {\n        return this.amount;\n    }\n\n    public String getCurrency() {\n        return this.currency;\n    }\n}",
      "breakdown": [
        "<code>this(...) & Guard Clause</code>: Konstruktorlar zanjiri kod takrorlanishini yo'qotadi, Guard Clause esa chuqur if-else ichma-ichligini to'xtatadi.",
        "<code>BankTransferChain</code>: Mustahkam himoyalangan va qayta yuklangan toza sinf arxitekturasi."
      ],
      "pitfalls": "'this(...)' chaqiruvi konstruktor tanasida mutlaqo BIRINCHI qatorda joylashishi shart, aks holda kompilyatsiya xatosi ro'y beradi.",
      "cw2Tip": "CW2 tizimida turli toifadagi foydalanuvchilar (Guest, VIP, Corporate) uchun zanjirli konstruktorlardan foydalaning."
    }
  },
  {
    "id": 73,
    "tier": 5,
    "tierName": "5-Bosqich: Konstruktorlarni Qayta Yuklash va Zanjir (this(...))",
    "sector": "61-75: Constructor Overloading & Chaining",
    "title": {
      "uz": "73. Beeline — Ichki Obyektni Yangidan Yaratuvchi Xavfsiz Nusxa Konstruktori",
      "en": "73. Beeline — Defensive Copying Constructor for Sub-Objects"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nAbonent nusxasi yaratilayotganda ichki xizmat ob'yekti shunchaki o'zlashtirib qo'yilmasdan, yangi 'new ServicePlan(other.plan)' sifatida xavfsiz nusxa olinsin.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'SubscriberClone' sinfini 'name' va 'planName' maydonlari bilan yarating.\n\n2. 2 parametrli 'public SubscriberClone(String name, String planName)' konstruktorini yozing.\n\n3. Nusxa konstruktori: 'public SubscriberClone(SubscriberClone other)' ichida 'this(other.name, other.planName)' qiling.\n\n4. 'public String getPlanName()' getterini yozing.\n\n5. 'Main' metodida abonentdan nusxa olib, nusxa rejasini ekranga chiqaring.",
      "en": "📖 Real-World Scenario & Context\nEnsure copy constructor creates an independent clone rather than sharing reference.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'SubscriberClone' with name and planName fields.\n\n2. Write standard constructor 'public SubscriberClone(String name, String planName)'.\n\n3. Implement copy constructor 'public SubscriberClone(SubscriberClone other)'.\n\n4. Implement accessor 'getPlanName()'.\n\n5. In 'main', copy subscriber and print plan name."
    },
    "story": {
      "uz": "Abonent nusxasi yaratilayotganda ichki xizmat ob'yekti shunchaki o'zlashtirib qo'yilmasdan, yangi 'new ServicePlan(other.plan)' sifatida xavfsiz nusxa olinsin.",
      "en": "Ensure copy constructor creates an independent clone rather than sharing reference."
    },
    "steps": {
      "uz": [
        "'SubscriberClone' sinfini 'name' va 'planName' maydonlari bilan yarating.",
        "2 parametrli 'public SubscriberClone(String name, String planName)' konstruktorini yozing.",
        "Nusxa konstruktori: 'public SubscriberClone(SubscriberClone other)' ichida 'this(other.name, other.planName)' qiling.",
        "'public String getPlanName()' getterini yozing.",
        "'Main' metodida abonentdan nusxa olib, nusxa rejasini ekranga chiqaring."
      ],
      "en": [
        "Declare class 'SubscriberClone' with name and planName fields.",
        "Write standard constructor 'public SubscriberClone(String name, String planName)'.",
        "Implement copy constructor 'public SubscriberClone(SubscriberClone other)'.",
        "Implement accessor 'getPlanName()'.",
        "In 'main', copy subscriber and print plan name."
      ]
    },
    "requirements": {
      "classes": [
        "SubscriberClone",
        "Main"
      ],
      "privateFields": [
        "name",
        "planName"
      ],
      "methods": [
        "getPlanName"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class SubscriberClone {\n    // TODO: Asosiy va this(...) orqali zanjirlangan konstruktorlarni yarating\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SubscriberClone s1 = new SubscriberClone(\"Ali\", \"Silver\");\n        SubscriberClone s2 = new SubscriberClone(s1);\n        System.out.println(\"Nusxa rejasi: \" + s2.getPlanName());\n    }\n}",
    "solution": "class SubscriberClone {\n    private String name;\n    private String planName;\n\n    public SubscriberClone(String name, String planName) {\n        this.name = name;\n        this.planName = planName;\n    }\n\n    public SubscriberClone(SubscriberClone other) {\n        this(other.name, other.planName);\n    }\n\n    public String getPlanName() {\n        return this.planName;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SubscriberClone s1 = new SubscriberClone(\"Ali\", \"Silver\");\n        SubscriberClone s2 = new SubscriberClone(s1);\n        System.out.println(\"Nusxa rejasi: \" + s2.getPlanName());\n    }\n}",
    "sampleData": [
      "Nusxa rejasi: Silver"
    ],
    "expectedOutput": "Nusxa rejasi: Silver",
    "detailedSolution": {
      "theory": "Konstruktorlarni qayta yuklash (Overloading) turli parametrlar bilan ob'yekt yaratish imkonini beradi. 'this(...)' orqali barcha konstruktorlarni bitta markaziy konstruktorga yo'naltirish (Constructor Chaining) DRY qoidasiga amal qilishning eng toza usulidir.",
      "theoryEn": "Constructor chaining with this(...) centralizes initialization logic and avoids code duplication across overloaded constructor variants.",
      "cleanCode": "class SubscriberClone {\n    private String name;\n    private String planName;\n\n    public SubscriberClone(String name, String planName) {\n        this.name = name;\n        this.planName = planName;\n    }\n\n    public SubscriberClone(SubscriberClone other) {\n        this(other.name, other.planName);\n    }\n\n    public String getPlanName() {\n        return this.planName;\n    }\n}",
      "breakdown": [
        "<code>this(...) & Guard Clause</code>: Konstruktorlar zanjiri kod takrorlanishini yo'qotadi, Guard Clause esa chuqur if-else ichma-ichligini to'xtatadi.",
        "<code>SubscriberClone</code>: Mustahkam himoyalangan va qayta yuklangan toza sinf arxitekturasi."
      ],
      "pitfalls": "'this(...)' chaqiruvi konstruktor tanasida mutlaqo BIRINCHI qatorda joylashishi shart, aks holda kompilyatsiya xatosi ro'y beradi.",
      "cw2Tip": "CW2 tizimida turli toifadagi foydalanuvchilar (Guest, VIP, Corporate) uchun zanjirli konstruktorlardan foydalaning."
    }
  },
  {
    "id": 74,
    "tier": 5,
    "tierName": "5-Bosqich: Konstruktorlarni Qayta Yuklash va Zanjir (this(...))",
    "sector": "61-75: Constructor Overloading & Chaining",
    "title": {
      "uz": "74. UzAirways — Mehmon, Ro'yxatdan O'tgan va Korporativ Yo'lovchi Konstruktorlari",
      "en": "74. UzAirways — Multi-Role Passenger Constructors: Guest, Registered, Corporate"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nUzAirways 3 xil profilli yo'lovchini qabul qiladi: faqat ismli (Mehmon), pasportli (Ro'yxatdan o'tgan) va korporativ kompaniya nomli. 3 ta konstruktor zanjirini tuzing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'PassengerProfile' sinfini 'name' va 'type' maydonlari bilan e'lon qiling.\n\n2. 2 parametrli 'public PassengerProfile(String name, String type)' master konstruktorini yozing.\n\n3. Bitta parametrli 'public PassengerProfile(String name)' konstruktorida 'this(name, \"GUEST\")' deb standart toifani bering.\n\n4. 'getName()' va 'getType()' getterlarini taqdim eting.\n\n5. 'Main' metodida yo'lovchi profilini ochib toifasini chiqaring.",
      "en": "📖 Real-World Scenario & Context\nOverload constructors for Guest, Registered, and Corporate passenger categories.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'PassengerProfile' with name and type fields.\n\n2. Write master constructor 'public PassengerProfile(String name, String type)'.\n\n3. Implement single-parameter constructor defaulting type: 'this(name, \"GUEST\")'.\n\n4. Implement accessors 'getName()' and 'getType()'.\n\n5. In 'main', instantiate passenger and print type."
    },
    "story": {
      "uz": "UzAirways 3 xil profilli yo'lovchini qabul qiladi: faqat ismli (Mehmon), pasportli (Ro'yxatdan o'tgan) va korporativ kompaniya nomli. 3 ta konstruktor zanjirini tuzing.",
      "en": "Overload constructors for Guest, Registered, and Corporate passenger categories."
    },
    "steps": {
      "uz": [
        "'PassengerProfile' sinfini 'name' va 'type' maydonlari bilan e'lon qiling.",
        "2 parametrli 'public PassengerProfile(String name, String type)' master konstruktorini yozing.",
        "Bitta parametrli 'public PassengerProfile(String name)' konstruktorida 'this(name, \"GUEST\")' deb standart toifani bering.",
        "'getName()' va 'getType()' getterlarini taqdim eting.",
        "'Main' metodida yo'lovchi profilini ochib toifasini chiqaring."
      ],
      "en": [
        "Declare class 'PassengerProfile' with name and type fields.",
        "Write master constructor 'public PassengerProfile(String name, String type)'.",
        "Implement single-parameter constructor defaulting type: 'this(name, \"GUEST\")'.",
        "Implement accessors 'getName()' and 'getType()'.",
        "In 'main', instantiate passenger and print type."
      ]
    },
    "requirements": {
      "classes": [
        "PassengerProfile",
        "Main"
      ],
      "privateFields": [
        "name",
        "type"
      ],
      "methods": [
        "getName",
        "getType"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class PassengerProfile {\n    // TODO: Asosiy va this(...) orqali zanjirlangan konstruktorlarni yarating\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PassengerProfile guest = new PassengerProfile(\"Sardor\");\n        System.out.println(guest.getName() + \" toifasi: \" + guest.getType());\n    }\n}",
    "solution": "class PassengerProfile {\n    private String name;\n    private String type;\n\n    public PassengerProfile(String name) {\n        this(name, \"GUEST\");\n    }\n\n    public PassengerProfile(String name, String type) {\n        this.name = name;\n        this.type = type;\n    }\n\n    public String getName() {\n        return this.name;\n    }\n\n    public String getType() {\n        return this.type;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PassengerProfile guest = new PassengerProfile(\"Sardor\");\n        System.out.println(guest.getName() + \" toifasi: \" + guest.getType());\n    }\n}",
    "sampleData": [
      "Sardor toifasi: GUEST"
    ],
    "expectedOutput": "Sardor toifasi: GUEST",
    "detailedSolution": {
      "theory": "Konstruktorlarni qayta yuklash (Overloading) turli parametrlar bilan ob'yekt yaratish imkonini beradi. 'this(...)' orqali barcha konstruktorlarni bitta markaziy konstruktorga yo'naltirish (Constructor Chaining) DRY qoidasiga amal qilishning eng toza usulidir.",
      "theoryEn": "Constructor chaining with this(...) centralizes initialization logic and avoids code duplication across overloaded constructor variants.",
      "cleanCode": "class PassengerProfile {\n    private String name;\n    private String type;\n\n    public PassengerProfile(String name) {\n        this(name, \"GUEST\");\n    }\n\n    public PassengerProfile(String name, String type) {\n        this.name = name;\n        this.type = type;\n    }\n\n    public String getName() {\n        return this.name;\n    }\n\n    public String getType() {\n        return this.type;\n    }\n}",
      "breakdown": [
        "<code>this(...) & Guard Clause</code>: Konstruktorlar zanjiri kod takrorlanishini yo'qotadi, Guard Clause esa chuqur if-else ichma-ichligini to'xtatadi.",
        "<code>PassengerProfile</code>: Mustahkam himoyalangan va qayta yuklangan toza sinf arxitekturasi."
      ],
      "pitfalls": "'this(...)' chaqiruvi konstruktor tanasida mutlaqo BIRINCHI qatorda joylashishi shart, aks holda kompilyatsiya xatosi ro'y beradi.",
      "cw2Tip": "CW2 tizimida turli toifadagi foydalanuvchilar (Guest, VIP, Corporate) uchun zanjirli konstruktorlardan foydalaning."
    }
  },
  {
    "id": 75,
    "tier": 5,
    "tierName": "5-Bosqich: Konstruktorlarni Qayta Yuklash va Zanjir (this(...))",
    "sector": "61-75: Constructor Overloading & Chaining",
    "title": {
      "uz": "75. WIUT SRS — 5 Bosqichli Konstruktorlar Zanjirining To'liq Cho'qqisi (Master)",
      "en": "75. WIUT SRS — 5-Level Constructor Delegation Master Architecture"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nTalaba profili 5 xil darajada ochilishi mumkin (minimaldan to'liqgacha). Barcha 4 ta qisqa konstruktor 'this(...)' orqali yagona 5-chi to'liq master konstruktorga ulanadi va tekshiruvdan o'tadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'MasterEnrollment' sinfini 'id', 'name', 'year', 'credits' maydonlari bilan yarating.\n\n2. 4 bosqichli zanjir: 'MasterEnrollment(String id)' -> 'this(id, \"Noma\\'lum\")'.\n\n3. 'MasterEnrollment(String id, String name)' -> 'this(id, name, 1)'.\n\n4. 'MasterEnrollment(String id, String name, int year)' -> 'this(id, name, year, 0)'.\n\n5. Asosiy 4 parametrli konstruktorda maydonlarni o'zlashtirib, 'getSummary()' orqali talaba xulosasini konsolga chiqaring.",
      "en": "📖 Real-World Scenario & Context\nMaster 5-level constructor cascade funneling completely into one validated primary constructor.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'MasterEnrollment' with id, name, year, and credits fields.\n\n2. Implement 4-stage constructor cascade: (id) -> (id, name) -> (id, name, year) -> (id, name, year, credits).\n\n3. Each chained constructor supplies respective safe defaults.\n\n4. Implement summary accessor 'getSummary()'.\n\n5. In 'main', test single-parameter master enrollment and print summary."
    },
    "story": {
      "uz": "Talaba profili 5 xil darajada ochilishi mumkin (minimaldan to'liqgacha). Barcha 4 ta qisqa konstruktor 'this(...)' orqali yagona 5-chi to'liq master konstruktorga ulanadi va tekshiruvdan o'tadi.",
      "en": "Master 5-level constructor cascade funneling completely into one validated primary constructor."
    },
    "steps": {
      "uz": [
        "'MasterEnrollment' sinfini 'id', 'name', 'year', 'credits' maydonlari bilan yarating.",
        "4 bosqichli zanjir: 'MasterEnrollment(String id)' -> 'this(id, \"Noma\\'lum\")'.",
        "'MasterEnrollment(String id, String name)' -> 'this(id, name, 1)'.",
        "'MasterEnrollment(String id, String name, int year)' -> 'this(id, name, year, 0)'.",
        "Asosiy 4 parametrli konstruktorda maydonlarni o'zlashtirib, 'getSummary()' orqali talaba xulosasini konsolga chiqaring."
      ],
      "en": [
        "Declare class 'MasterEnrollment' with id, name, year, and credits fields.",
        "Implement 4-stage constructor cascade: (id) -> (id, name) -> (id, name, year) -> (id, name, year, credits).",
        "Each chained constructor supplies respective safe defaults.",
        "Implement summary accessor 'getSummary()'.",
        "In 'main', test single-parameter master enrollment and print summary."
      ]
    },
    "requirements": {
      "classes": [
        "MasterEnrollment",
        "Main"
      ],
      "privateFields": [
        "id",
        "name",
        "year",
        "credits"
      ],
      "methods": [
        "getSummary"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class MasterEnrollment {\n    // TODO: Asosiy va this(...) orqali zanjirlangan konstruktorlarni yarating\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MasterEnrollment me = new MasterEnrollment(\"0007788\");\n        System.out.println(me.getSummary());\n    }\n}",
    "solution": "class MasterEnrollment {\n    private String id;\n    private String name;\n    private int year;\n    private int credits;\n\n    public MasterEnrollment(String id) {\n        this(id, \"Noma'lum\");\n    }\n\n    public MasterEnrollment(String id, String name) {\n        this(id, name, 1);\n    }\n\n    public MasterEnrollment(String id, String name, int year) {\n        this(id, name, year, 0);\n    }\n\n    public MasterEnrollment(String id, String name, int year, int credits) {\n        this.id = id;\n        this.name = name;\n        this.year = year;\n        this.credits = credits;\n    }\n\n    public String getSummary() {\n        return \"Talaba ID: \" + this.id + \" | Ism: \" + this.name + \" | Kurs: \" + this.year + \" | Kredit: \" + this.credits;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MasterEnrollment me = new MasterEnrollment(\"0007788\");\n        System.out.println(me.getSummary());\n    }\n}",
    "sampleData": [
      "Talaba ID: 0007788 | Ism: Noma'lum | Kurs: 1 | Kredit: 0"
    ],
    "expectedOutput": "Talaba ID: 0007788 | Ism: Noma'lum | Kurs: 1 | Kredit: 0",
    "detailedSolution": {
      "theory": "Konstruktorlarni qayta yuklash (Overloading) turli parametrlar bilan ob'yekt yaratish imkonini beradi. 'this(...)' orqali barcha konstruktorlarni bitta markaziy konstruktorga yo'naltirish (Constructor Chaining) DRY qoidasiga amal qilishning eng toza usulidir.",
      "theoryEn": "Constructor chaining with this(...) centralizes initialization logic and avoids code duplication across overloaded constructor variants.",
      "cleanCode": "class MasterEnrollment {\n    private String id;\n    private String name;\n    private int year;\n    private int credits;\n\n    public MasterEnrollment(String id) {\n        this(id, \"Noma'lum\");\n    }\n\n    public MasterEnrollment(String id, String name) {\n        this(id, name, 1);\n    }\n\n    public MasterEnrollment(String id, String name, int year) {\n        this(id, name, year, 0);\n    }\n\n    public MasterEnrollment(String id, String name, int year, int credits) {\n        this.id = id;\n        this.name = name;\n        this.year = year;\n        this.credits = credits;\n    }\n\n    public String getSummary() {\n        return \"Talaba ID: \" + this.id + \" | Ism: \" + this.name + \" | Kurs: \" + this.year + \" | Kredit: \" + this.credits;\n    }\n}",
      "breakdown": [
        "<code>this(...) & Guard Clause</code>: Konstruktorlar zanjiri kod takrorlanishini yo'qotadi, Guard Clause esa chuqur if-else ichma-ichligini to'xtatadi.",
        "<code>MasterEnrollment</code>: Mustahkam himoyalangan va qayta yuklangan toza sinf arxitekturasi."
      ],
      "pitfalls": "'this(...)' chaqiruvi konstruktor tanasida mutlaqo BIRINCHI qatorda joylashishi shart, aks holda kompilyatsiya xatosi ro'y beradi.",
      "cw2Tip": "CW2 tizimida turli toifadagi foydalanuvchilar (Guest, VIP, Corporate) uchun zanjirli konstruktorlardan foydalaning."
    }
  },
  {
    "id": 76,
    "tier": 6,
    "tierName": "6-Bosqich: Himoyaviy Dasturlash, Invariantlar va Guard Clauses",
    "sector": "76-90: Invariants & Guard Clauses",
    "title": {
      "uz": "76. Uzum Market — Guard Clause: 'if (price < 0) return;' va Nestingni Yo'qotish",
      "en": "76. Uzum Market — Guard Clause Pattern Eliminating Nested Indentation"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nToza kod (Clean Code) va WIUT Seminar 2 qoidasi: xato holatni boshida tekshirib darhol 'return;' qilish (Guard Clause). Chuqur if-else ichma-ichligini yo'qotuvchi setterni yozing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'GuardClausePricing' sinfini xususiy (private) double toifasidagi 'price' maydoni bilan oching.\n\n2. 'public GuardClausePricing(double price)' konstruktorini yozing.\n\n3. 'public double getPrice()' getterini yozing.\n\n4. Guard Clause andazasi: 'public void setPrice(double price)' setterida 'if (price < 0) return' tekshiruvini boshiga qo'ying va nestingdan qutuling.\n\n5. 'Main' metodida manfiy narx berib narx o'zgarmay saqlanganini chiqaring.",
      "en": "📖 Real-World Scenario & Context\nApply guard clause early return pattern to reject invalid prices cleanly.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'GuardClausePricing' with private double field 'price'.\n\n2. Write constructor 'public GuardClausePricing(double price)'.\n\n3. Write accessor 'getPrice()'.\n\n4. Apply Guard Clause early return: 'if (price < 0) return; this.price = price'.\n\n5. In 'main', pass negative price and print retained value."
    },
    "story": {
      "uz": "Toza kod (Clean Code) va WIUT Seminar 2 qoidasi: xato holatni boshida tekshirib darhol 'return;' qilish (Guard Clause). Chuqur if-else ichma-ichligini yo'qotuvchi setterni yozing.",
      "en": "Apply guard clause early return pattern to reject invalid prices cleanly."
    },
    "steps": {
      "uz": [
        "'GuardClausePricing' sinfini xususiy (private) double toifasidagi 'price' maydoni bilan oching.",
        "'public GuardClausePricing(double price)' konstruktorini yozing.",
        "'public double getPrice()' getterini yozing.",
        "Guard Clause andazasi: 'public void setPrice(double price)' setterida 'if (price < 0) return' tekshiruvini boshiga qo'ying va nestingdan qutuling.",
        "'Main' metodida manfiy narx berib narx o'zgarmay saqlanganini chiqaring."
      ],
      "en": [
        "Declare class 'GuardClausePricing' with private double field 'price'.",
        "Write constructor 'public GuardClausePricing(double price)'.",
        "Write accessor 'getPrice()'.",
        "Apply Guard Clause early return: 'if (price < 0) return; this.price = price'.",
        "In 'main', pass negative price and print retained value."
      ]
    },
    "requirements": {
      "classes": [
        "GuardClausePricing",
        "Main"
      ],
      "privateFields": [
        "price"
      ],
      "methods": [
        "getPrice",
        "setPrice"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class GuardClausePricing {\n    // TODO: Maydonlar va Guard Clause orqali himoyalangan metodlarni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GuardClausePricing gcp = new GuardClausePricing(25000.0);\n        gcp.setPrice(-500.0);\n        System.out.println(\"Narx saqlandi: \" + gcp.getPrice() + \" UZS\");\n    }\n}",
    "solution": "class GuardClausePricing {\n    private double price;\n\n    public GuardClausePricing(double price) {\n        this.price = price;\n    }\n\n    public double getPrice() {\n        return this.price;\n    }\n\n    public void setPrice(double price) {\n        if (price < 0) return;\n        this.price = price;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GuardClausePricing gcp = new GuardClausePricing(25000.0);\n        gcp.setPrice(-500.0);\n        System.out.println(\"Narx saqlandi: \" + gcp.getPrice() + \" UZS\");\n    }\n}",
    "sampleData": [
      "Narx saqlandi: 25000.0 UZS"
    ],
    "expectedOutput": "Narx saqlandi: 25000.0 UZS",
    "detailedSolution": {
      "theory": "Konstruktorlarni qayta yuklash (Overloading) turli parametrlar bilan ob'yekt yaratish imkonini beradi. 'this(...)' orqali barcha konstruktorlarni bitta markaziy konstruktorga yo'naltirish (Constructor Chaining) DRY qoidasiga amal qilishning eng toza usulidir.",
      "theoryEn": "Constructor chaining with this(...) centralizes initialization logic and avoids code duplication across overloaded constructor variants.",
      "cleanCode": "class GuardClausePricing {\n    private double price;\n\n    public GuardClausePricing(double price) {\n        this.price = price;\n    }\n\n    public double getPrice() {\n        return this.price;\n    }\n\n    public void setPrice(double price) {\n        if (price < 0) return;\n        this.price = price;\n    }\n}",
      "breakdown": [
        "<code>this(...) & Guard Clause</code>: Konstruktorlar zanjiri kod takrorlanishini yo'qotadi, Guard Clause esa chuqur if-else ichma-ichligini to'xtatadi.",
        "<code>GuardClausePricing</code>: Mustahkam himoyalangan va qayta yuklangan toza sinf arxitekturasi."
      ],
      "pitfalls": "'this(...)' chaqiruvi konstruktor tanasida mutlaqo BIRINCHI qatorda joylashishi shart, aks holda kompilyatsiya xatosi ro'y beradi.",
      "cw2Tip": "CW2 tizimida turli toifadagi foydalanuvchilar (Guest, VIP, Corporate) uchun zanjirli konstruktorlardan foydalaning."
    }
  },
  {
    "id": 77,
    "tier": 6,
    "tierName": "6-Bosqich: Himoyaviy Dasturlash, Invariantlar va Guard Clauses",
    "sector": "76-90: Invariants & Guard Clauses",
    "title": {
      "uz": "77. Payme — Nol Yoki Manfiy To'lovni Rad Etuvchi Guard Clause",
      "en": "77. Payme — Strictly Positive Transaction Invariant Guard"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nPayme to'lovida summa 0 yoki manfiy bo'lishi aslo mumkin emas. 'if (amount <= 0)' sharti orqali to'lovni rad etuvchi va 'Amount must be positive' xabarini beruvchi metodni tuzing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'StrictPayment' sinfini xususiy (private) double toifasidagi 'balance' maydoni bilan e'lon qiling.\n\n2. 'public StrictPayment(double balance)' konstruktorini yozing.\n\n3. 'public void pay(double amount)' metodida agar 'amount <= 0' bo'lsa 'Amount must be positive' deb ogohlantirib, darhol return qiling.\n\n4. 'public double getBalance()' getterini yozing.\n\n5. 'Main' metodida 0.0 summa to'lashga urinib ogohlantirishni ko'rsating.",
      "en": "📖 Real-World Scenario & Context\nGuard transaction execution enforcing that payment amounts must be strictly positive.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'StrictPayment' with private double field 'balance'.\n\n2. Write constructor 'public StrictPayment(double balance)'.\n\n3. In 'pay(double amount)', guard against amount <= 0 printing 'Amount must be positive'.\n\n4. Implement accessor 'getBalance()'.\n\n5. In 'main', attempt zero payment and print balance."
    },
    "story": {
      "uz": "Payme to'lovida summa 0 yoki manfiy bo'lishi aslo mumkin emas. 'if (amount <= 0)' sharti orqali to'lovni rad etuvchi va 'Amount must be positive' xabarini beruvchi metodni tuzing.",
      "en": "Guard transaction execution enforcing that payment amounts must be strictly positive."
    },
    "steps": {
      "uz": [
        "'StrictPayment' sinfini xususiy (private) double toifasidagi 'balance' maydoni bilan e'lon qiling.",
        "'public StrictPayment(double balance)' konstruktorini yozing.",
        "'public void pay(double amount)' metodida agar 'amount <= 0' bo'lsa 'Amount must be positive' deb ogohlantirib, darhol return qiling.",
        "'public double getBalance()' getterini yozing.",
        "'Main' metodida 0.0 summa to'lashga urinib ogohlantirishni ko'rsating."
      ],
      "en": [
        "Declare class 'StrictPayment' with private double field 'balance'.",
        "Write constructor 'public StrictPayment(double balance)'.",
        "In 'pay(double amount)', guard against amount <= 0 printing 'Amount must be positive'.",
        "Implement accessor 'getBalance()'.",
        "In 'main', attempt zero payment and print balance."
      ]
    },
    "requirements": {
      "classes": [
        "StrictPayment",
        "Main"
      ],
      "privateFields": [
        "balance"
      ],
      "methods": [
        "pay",
        "getBalance"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class StrictPayment {\n    // TODO: Maydonlar va Guard Clause orqali himoyalangan metodlarni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StrictPayment sp = new StrictPayment(100000.0);\n        sp.pay(0.0);\n        System.out.println(\"Balans: \" + sp.getBalance() + \" UZS\");\n    }\n}",
    "solution": "class StrictPayment {\n    private double balance;\n\n    public StrictPayment(double balance) {\n        this.balance = balance;\n    }\n\n    public void pay(double amount) {\n        if (amount <= 0) {\n            System.out.println(\"Amount must be positive\");\n            return;\n        }\n        this.balance -= amount;\n    }\n\n    public double getBalance() {\n        return this.balance;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StrictPayment sp = new StrictPayment(100000.0);\n        sp.pay(0.0);\n        System.out.println(\"Balans: \" + sp.getBalance() + \" UZS\");\n    }\n}",
    "sampleData": [
      "Amount must be positive\nBalans: 100000.0 UZS"
    ],
    "expectedOutput": "Amount must be positive\nBalans: 100000.0 UZS",
    "detailedSolution": {
      "theory": "Konstruktorlarni qayta yuklash (Overloading) turli parametrlar bilan ob'yekt yaratish imkonini beradi. 'this(...)' orqali barcha konstruktorlarni bitta markaziy konstruktorga yo'naltirish (Constructor Chaining) DRY qoidasiga amal qilishning eng toza usulidir.",
      "theoryEn": "Constructor chaining with this(...) centralizes initialization logic and avoids code duplication across overloaded constructor variants.",
      "cleanCode": "class StrictPayment {\n    private double balance;\n\n    public StrictPayment(double balance) {\n        this.balance = balance;\n    }\n\n    public void pay(double amount) {\n        if (amount <= 0) {\n            System.out.println(\"Amount must be positive\");\n            return;\n        }\n        this.balance -= amount;\n    }\n\n    public double getBalance() {\n        return this.balance;\n    }\n}",
      "breakdown": [
        "<code>this(...) & Guard Clause</code>: Konstruktorlar zanjiri kod takrorlanishini yo'qotadi, Guard Clause esa chuqur if-else ichma-ichligini to'xtatadi.",
        "<code>StrictPayment</code>: Mustahkam himoyalangan va qayta yuklangan toza sinf arxitekturasi."
      ],
      "pitfalls": "'this(...)' chaqiruvi konstruktor tanasida mutlaqo BIRINCHI qatorda joylashishi shart, aks holda kompilyatsiya xatosi ro'y beradi.",
      "cw2Tip": "CW2 tizimida turli toifadagi foydalanuvchilar (Guest, VIP, Corporate) uchun zanjirli konstruktorlardan foydalaning."
    }
  },
  {
    "id": 78,
    "tier": 6,
    "tierName": "6-Bosqich: Himoyaviy Dasturlash, Invariantlar va Guard Clauses",
    "sector": "76-90: Invariants & Guard Clauses",
    "title": {
      "uz": "78. Korzinka — Matn Bo'shligi va Minimal Uzunlik Guard Tekshiruvi",
      "en": "78. Korzinka — Non-Blank and Minimum Character Length Guard Clause"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nTovar nomi 'null', bo'sh yoki 2 ta harfdan kam bo'lsa uni qat'iy rad etuvchi va 'Name is too short' degan ogohlantirish beruvchi himoyaviy setterni yozing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'ValidatedItemName' sinfini xususiy (private) String toifasidagi 'name' maydoni bilan oching.\n\n2. 'public ValidatedItemName(String name)' konstruktorini yozing.\n\n3. 'public String getName()' getterini yozing.\n\n4. 'public void setName(String name)' setterida: agar name null yoki uzunligi 2 dan kichik bo'lsa 'Name is too short' deb ogohlantirib return qiling.\n\n5. 'Main' metodida 'A' berib xatolik xabarini tekshiring.",
      "en": "📖 Real-World Scenario & Context\nValidate string parameter checking for null, blank, and minimum 2-character requirement.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'ValidatedItemName' with private String field 'name'.\n\n2. Write constructor 'public ValidatedItemName(String name)'.\n\n3. Write accessor 'getName()'.\n\n4. In 'setName(String name)', guard against null or length < 2 printing 'Name is too short'.\n\n5. In 'main', pass 'A' and verify error handling."
    },
    "story": {
      "uz": "Tovar nomi 'null', bo'sh yoki 2 ta harfdan kam bo'lsa uni qat'iy rad etuvchi va 'Name is too short' degan ogohlantirish beruvchi himoyaviy setterni yozing.",
      "en": "Validate string parameter checking for null, blank, and minimum 2-character requirement."
    },
    "steps": {
      "uz": [
        "'ValidatedItemName' sinfini xususiy (private) String toifasidagi 'name' maydoni bilan oching.",
        "'public ValidatedItemName(String name)' konstruktorini yozing.",
        "'public String getName()' getterini yozing.",
        "'public void setName(String name)' setterida: agar name null yoki uzunligi 2 dan kichik bo'lsa 'Name is too short' deb ogohlantirib return qiling.",
        "'Main' metodida 'A' berib xatolik xabarini tekshiring."
      ],
      "en": [
        "Declare class 'ValidatedItemName' with private String field 'name'.",
        "Write constructor 'public ValidatedItemName(String name)'.",
        "Write accessor 'getName()'.",
        "In 'setName(String name)', guard against null or length < 2 printing 'Name is too short'.",
        "In 'main', pass 'A' and verify error handling."
      ]
    },
    "requirements": {
      "classes": [
        "ValidatedItemName",
        "Main"
      ],
      "privateFields": [
        "name"
      ],
      "methods": [
        "getName",
        "setName"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class ValidatedItemName {\n    // TODO: Maydonlar va Guard Clause orqali himoyalangan metodlarni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ValidatedItemName vin = new ValidatedItemName(\"Olma\");\n        vin.setName(\"A\");\n        System.out.println(\"Tovar nomi: \" + vin.getName());\n    }\n}",
    "solution": "class ValidatedItemName {\n    private String name;\n\n    public ValidatedItemName(String name) {\n        this.name = name;\n    }\n\n    public String getName() {\n        return this.name;\n    }\n\n    public void setName(String name) {\n        if (name == null || name.length() < 2) {\n            System.out.println(\"Name is too short\");\n            return;\n        }\n        this.name = name;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ValidatedItemName vin = new ValidatedItemName(\"Olma\");\n        vin.setName(\"A\");\n        System.out.println(\"Tovar nomi: \" + vin.getName());\n    }\n}",
    "sampleData": [
      "Name is too short\nTovar nomi: Olma"
    ],
    "expectedOutput": "Name is too short\nTovar nomi: Olma",
    "detailedSolution": {
      "theory": "Konstruktorlarni qayta yuklash (Overloading) turli parametrlar bilan ob'yekt yaratish imkonini beradi. 'this(...)' orqali barcha konstruktorlarni bitta markaziy konstruktorga yo'naltirish (Constructor Chaining) DRY qoidasiga amal qilishning eng toza usulidir.",
      "theoryEn": "Constructor chaining with this(...) centralizes initialization logic and avoids code duplication across overloaded constructor variants.",
      "cleanCode": "class ValidatedItemName {\n    private String name;\n\n    public ValidatedItemName(String name) {\n        this.name = name;\n    }\n\n    public String getName() {\n        return this.name;\n    }\n\n    public void setName(String name) {\n        if (name == null || name.length() < 2) {\n            System.out.println(\"Name is too short\");\n            return;\n        }\n        this.name = name;\n    }\n}",
      "breakdown": [
        "<code>this(...) & Guard Clause</code>: Konstruktorlar zanjiri kod takrorlanishini yo'qotadi, Guard Clause esa chuqur if-else ichma-ichligini to'xtatadi.",
        "<code>ValidatedItemName</code>: Mustahkam himoyalangan va qayta yuklangan toza sinf arxitekturasi."
      ],
      "pitfalls": "'this(...)' chaqiruvi konstruktor tanasida mutlaqo BIRINCHI qatorda joylashishi shart, aks holda kompilyatsiya xatosi ro'y beradi.",
      "cw2Tip": "CW2 tizimida turli toifadagi foydalanuvchilar (Guest, VIP, Corporate) uchun zanjirli konstruktorlardan foydalaning."
    }
  },
  {
    "id": 79,
    "tier": 6,
    "tierName": "6-Bosqich: Himoyaviy Dasturlash, Invariantlar va Guard Clauses",
    "sector": "76-90: Invariants & Guard Clauses",
    "title": {
      "uz": "79. Yandex Go — Telefon Raqami Standartini Tekshiruvchi Guard Clause",
      "en": "79. Yandex Go — Phone Prefix and Length Format Verification Guard"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nHaydovchi telefon raqami '+998' bilan boshlanishi va 13 belgidan iborat bo'lishi shart. Boshqa har qanday formatni rad etuvchi xavfsiz setterni yozing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'DriverPhoneGuard' sinfini xususiy (private) String toifasidagi 'phone' maydoni bilan oching.\n\n2. 'public DriverPhoneGuard(String phone)' konstruktorini yozing.\n\n3. 'public String getPhone()' getterini bering.\n\n4. 'public void setPhone(String phone)' setterida: agar raqam null bo'lsa yoki '+998' bilan boshlanmasa darhol return qiling.\n\n5. 'Main' metodida noto'g'ri formatdagi '901112233' ni berib, eski telefon saqlanib qolganini chiqaring.",
      "en": "📖 Real-World Scenario & Context\nValidate international prefix and exact length before storing driver phone number.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'DriverPhoneGuard' with private String field 'phone'.\n\n2. Write constructor 'public DriverPhoneGuard(String phone)'.\n\n3. Write accessor 'getPhone()'.\n\n4. In 'setPhone', guard using early return if phone is null or does not start with '+998'.\n\n5. In 'main', attempt setting invalid phone and print retained phone."
    },
    "story": {
      "uz": "Haydovchi telefon raqami '+998' bilan boshlanishi va 13 belgidan iborat bo'lishi shart. Boshqa har qanday formatni rad etuvchi xavfsiz setterni yozing.",
      "en": "Validate international prefix and exact length before storing driver phone number."
    },
    "steps": {
      "uz": [
        "'DriverPhoneGuard' sinfini xususiy (private) String toifasidagi 'phone' maydoni bilan oching.",
        "'public DriverPhoneGuard(String phone)' konstruktorini yozing.",
        "'public String getPhone()' getterini bering.",
        "'public void setPhone(String phone)' setterida: agar raqam null bo'lsa yoki '+998' bilan boshlanmasa darhol return qiling.",
        "'Main' metodida noto'g'ri formatdagi '901112233' ni berib, eski telefon saqlanib qolganini chiqaring."
      ],
      "en": [
        "Declare class 'DriverPhoneGuard' with private String field 'phone'.",
        "Write constructor 'public DriverPhoneGuard(String phone)'.",
        "Write accessor 'getPhone()'.",
        "In 'setPhone', guard using early return if phone is null or does not start with '+998'.",
        "In 'main', attempt setting invalid phone and print retained phone."
      ]
    },
    "requirements": {
      "classes": [
        "DriverPhoneGuard",
        "Main"
      ],
      "privateFields": [
        "phone"
      ],
      "methods": [
        "getPhone",
        "setPhone"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class DriverPhoneGuard {\n    // TODO: Maydonlar va Guard Clause orqali himoyalangan metodlarni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DriverPhoneGuard dpg = new DriverPhoneGuard(\"+998901112233\");\n        dpg.setPhone(\"901112233\");\n        System.out.println(\"Telefon: \" + dpg.getPhone());\n    }\n}",
    "solution": "class DriverPhoneGuard {\n    private String phone;\n\n    public DriverPhoneGuard(String phone) {\n        this.phone = phone;\n    }\n\n    public String getPhone() {\n        return this.phone;\n    }\n\n    public void setPhone(String phone) {\n        if (phone == null || !phone.startsWith(\"+998\")) return;\n        this.phone = phone;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DriverPhoneGuard dpg = new DriverPhoneGuard(\"+998901112233\");\n        dpg.setPhone(\"901112233\");\n        System.out.println(\"Telefon: \" + dpg.getPhone());\n    }\n}",
    "sampleData": [
      "Telefon: +998901112233"
    ],
    "expectedOutput": "Telefon: +998901112233",
    "detailedSolution": {
      "theory": "Konstruktorlarni qayta yuklash (Overloading) turli parametrlar bilan ob'yekt yaratish imkonini beradi. 'this(...)' orqali barcha konstruktorlarni bitta markaziy konstruktorga yo'naltirish (Constructor Chaining) DRY qoidasiga amal qilishning eng toza usulidir.",
      "theoryEn": "Constructor chaining with this(...) centralizes initialization logic and avoids code duplication across overloaded constructor variants.",
      "cleanCode": "class DriverPhoneGuard {\n    private String phone;\n\n    public DriverPhoneGuard(String phone) {\n        this.phone = phone;\n    }\n\n    public String getPhone() {\n        return this.phone;\n    }\n\n    public void setPhone(String phone) {\n        if (phone == null || !phone.startsWith(\"+998\")) return;\n        this.phone = phone;\n    }\n}",
      "breakdown": [
        "<code>this(...) & Guard Clause</code>: Konstruktorlar zanjiri kod takrorlanishini yo'qotadi, Guard Clause esa chuqur if-else ichma-ichligini to'xtatadi.",
        "<code>DriverPhoneGuard</code>: Mustahkam himoyalangan va qayta yuklangan toza sinf arxitekturasi."
      ],
      "pitfalls": "'this(...)' chaqiruvi konstruktor tanasida mutlaqo BIRINCHI qatorda joylashishi shart, aks holda kompilyatsiya xatosi ro'y beradi.",
      "cw2Tip": "CW2 tizimida turli toifadagi foydalanuvchilar (Guest, VIP, Corporate) uchun zanjirli konstruktorlardan foydalaning."
    }
  },
  {
    "id": 80,
    "tier": 6,
    "tierName": "6-Bosqich: Himoyaviy Dasturlash, Invariantlar va Guard Clauses",
    "sector": "76-90: Invariants & Guard Clauses",
    "title": {
      "uz": "80. Click — Tovar Miqdori Hech Qachon Manfiy Bo'lmasligi Invarianti",
      "en": "80. Click — Inventory Non-Negative Invariant Matching Seminar 2"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSeminar 2 'Product.java' rasmiy kodi: 'if (quantity < 0) { System.out.println(\"Quantity cannot be negative - quantity was not changed.\"); return; }'. Ombordagi miqdor invariantini saqlang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'StockInvariantProduct' sinfini xususiy (private) int toifasidagi 'quantity' maydoni bilan oching.\n\n2. 'public StockInvariantProduct(int quantity)' konstruktorini yozing.\n\n3. 'public int getQuantity()' getterini yozing.\n\n4. Seminar 2 andazasi: 'public void setQuantity(int quantity)' setterida: agar quantity < 0 bo'lsa 'Quantity cannot be negative - quantity was not changed.' deb ogohlantirib return qiling.\n\n5. 'Main' metodida manfiy miqdor (-5) berib ogohlantirish va qoldiqni tekshiring.",
      "en": "📖 Real-World Scenario & Context\nGuard stock quantity preserving non-negative invariant matching Seminar 2.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'StockInvariantProduct' with private int field 'quantity'.\n\n2. Write constructor 'public StockInvariantProduct(int quantity)'.\n\n3. Write accessor 'getQuantity()'.\n\n4. Apply Seminar 2 Product quantity invariant: reject negative values with warning.\n\n5. In 'main', pass -5 and print resulting state."
    },
    "story": {
      "uz": "Seminar 2 'Product.java' rasmiy kodi: 'if (quantity < 0) { System.out.println(\"Quantity cannot be negative - quantity was not changed.\"); return; }'. Ombordagi miqdor invariantini saqlang.",
      "en": "Guard stock quantity preserving non-negative invariant matching Seminar 2."
    },
    "steps": {
      "uz": [
        "'StockInvariantProduct' sinfini xususiy (private) int toifasidagi 'quantity' maydoni bilan oching.",
        "'public StockInvariantProduct(int quantity)' konstruktorini yozing.",
        "'public int getQuantity()' getterini yozing.",
        "Seminar 2 andazasi: 'public void setQuantity(int quantity)' setterida: agar quantity < 0 bo'lsa 'Quantity cannot be negative - quantity was not changed.' deb ogohlantirib return qiling.",
        "'Main' metodida manfiy miqdor (-5) berib ogohlantirish va qoldiqni tekshiring."
      ],
      "en": [
        "Declare class 'StockInvariantProduct' with private int field 'quantity'.",
        "Write constructor 'public StockInvariantProduct(int quantity)'.",
        "Write accessor 'getQuantity()'.",
        "Apply Seminar 2 Product quantity invariant: reject negative values with warning.",
        "In 'main', pass -5 and print resulting state."
      ]
    },
    "requirements": {
      "classes": [
        "StockInvariantProduct",
        "Main"
      ],
      "privateFields": [
        "quantity"
      ],
      "methods": [
        "getQuantity",
        "setQuantity"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class StockInvariantProduct {\n    // TODO: Maydonlar va Guard Clause orqali himoyalangan metodlarni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StockInvariantProduct sip = new StockInvariantProduct(15);\n        sip.setQuantity(-5);\n        System.out.println(\"Miqdor holati: \" + sip.getQuantity());\n    }\n}",
    "solution": "class StockInvariantProduct {\n    private int quantity;\n\n    public StockInvariantProduct(int quantity) {\n        this.quantity = quantity;\n    }\n\n    public int getQuantity() {\n        return this.quantity;\n    }\n\n    public void setQuantity(int quantity) {\n        if (quantity < 0) {\n            System.out.println(\"Quantity cannot be negative - quantity was not changed.\");\n            return;\n        }\n        this.quantity = quantity;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StockInvariantProduct sip = new StockInvariantProduct(15);\n        sip.setQuantity(-5);\n        System.out.println(\"Miqdor holati: \" + sip.getQuantity());\n    }\n}",
    "sampleData": [
      "Quantity cannot be negative - quantity was not changed.\nMiqdor holati: 15"
    ],
    "expectedOutput": "Quantity cannot be negative - quantity was not changed.\nMiqdor holati: 15",
    "detailedSolution": {
      "theory": "Konstruktorlarni qayta yuklash (Overloading) turli parametrlar bilan ob'yekt yaratish imkonini beradi. 'this(...)' orqali barcha konstruktorlarni bitta markaziy konstruktorga yo'naltirish (Constructor Chaining) DRY qoidasiga amal qilishning eng toza usulidir.",
      "theoryEn": "Constructor chaining with this(...) centralizes initialization logic and avoids code duplication across overloaded constructor variants.",
      "cleanCode": "class StockInvariantProduct {\n    private int quantity;\n\n    public StockInvariantProduct(int quantity) {\n        this.quantity = quantity;\n    }\n\n    public int getQuantity() {\n        return this.quantity;\n    }\n\n    public void setQuantity(int quantity) {\n        if (quantity < 0) {\n            System.out.println(\"Quantity cannot be negative - quantity was not changed.\");\n            return;\n        }\n        this.quantity = quantity;\n    }\n}",
      "breakdown": [
        "<code>this(...) & Guard Clause</code>: Konstruktorlar zanjiri kod takrorlanishini yo'qotadi, Guard Clause esa chuqur if-else ichma-ichligini to'xtatadi.",
        "<code>StockInvariantProduct</code>: Mustahkam himoyalangan va qayta yuklangan toza sinf arxitekturasi."
      ],
      "pitfalls": "'this(...)' chaqiruvi konstruktor tanasida mutlaqo BIRINCHI qatorda joylashishi shart, aks holda kompilyatsiya xatosi ro'y beradi.",
      "cw2Tip": "CW2 tizimida turli toifadagi foydalanuvchilar (Guest, VIP, Corporate) uchun zanjirli konstruktorlardan foydalaning."
    }
  },
  {
    "id": 81,
    "tier": 6,
    "tierName": "6-Bosqich: Himoyaviy Dasturlash, Invariantlar va Guard Clauses",
    "sector": "76-90: Invariants & Guard Clauses",
    "title": {
      "uz": "81. Safia — Chegirma Asl Narxdan Oshib Ketmasligi Invarianti",
      "en": "81. Safia — Discount Cannot Exceed Base Price Invariant Check"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nChegirma miqdori (so'mda) tovarning asl narxidan katta bo'lishi mumkin emas. Agar kassir narxdan katta chegirma bersa rad etuvchi himoyaviy metodni yozing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'PastryDiscountGuard' sinfini xususiy (private) double toifasidagi 'price' maydoni bilan oching.\n\n2. 'public PastryDiscountGuard(double price)' konstruktorini yozing.\n\n3. 'public void applyFixedDiscount(double discount)' metodida agar chegirma narxdan katta bo'lsa darhol return qiling.\n\n4. 'public double getPrice()' getterini yozing.\n\n5. 'Main' metodida 50000.0 narxdan 60000.0 chegirma o'tkazishga urinib, narx saqlanganini tekshiring.",
      "en": "📖 Real-World Scenario & Context\nReject discount deduction if it exceeds the underlying product price.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'PastryDiscountGuard' with private double field 'price'.\n\n2. Write constructor 'public PastryDiscountGuard(double price)'.\n\n3. In 'applyFixedDiscount', guard against discount exceeding base price.\n\n4. Implement accessor 'getPrice()'.\n\n5. In 'main', attempt applying 60000.0 discount on 50000.0 item and print price."
    },
    "story": {
      "uz": "Chegirma miqdori (so'mda) tovarning asl narxidan katta bo'lishi mumkin emas. Agar kassir narxdan katta chegirma bersa rad etuvchi himoyaviy metodni yozing.",
      "en": "Reject discount deduction if it exceeds the underlying product price."
    },
    "steps": {
      "uz": [
        "'PastryDiscountGuard' sinfini xususiy (private) double toifasidagi 'price' maydoni bilan oching.",
        "'public PastryDiscountGuard(double price)' konstruktorini yozing.",
        "'public void applyFixedDiscount(double discount)' metodida agar chegirma narxdan katta bo'lsa darhol return qiling.",
        "'public double getPrice()' getterini yozing.",
        "'Main' metodida 50000.0 narxdan 60000.0 chegirma o'tkazishga urinib, narx saqlanganini tekshiring."
      ],
      "en": [
        "Declare class 'PastryDiscountGuard' with private double field 'price'.",
        "Write constructor 'public PastryDiscountGuard(double price)'.",
        "In 'applyFixedDiscount', guard against discount exceeding base price.",
        "Implement accessor 'getPrice()'.",
        "In 'main', attempt applying 60000.0 discount on 50000.0 item and print price."
      ]
    },
    "requirements": {
      "classes": [
        "PastryDiscountGuard",
        "Main"
      ],
      "privateFields": [
        "price"
      ],
      "methods": [
        "applyFixedDiscount",
        "getPrice"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class PastryDiscountGuard {\n    // TODO: Maydonlar va Guard Clause orqali himoyalangan metodlarni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PastryDiscountGuard pdg = new PastryDiscountGuard(50000.0);\n        pdg.applyFixedDiscount(60000.0);\n        System.out.println(\"Chegirmadan keyingi narx: \" + pdg.getPrice() + \" UZS\");\n    }\n}",
    "solution": "class PastryDiscountGuard {\n    private double price;\n\n    public PastryDiscountGuard(double price) {\n        this.price = price;\n    }\n\n    public void applyFixedDiscount(double discount) {\n        if (discount > this.price) return;\n        this.price -= discount;\n    }\n\n    public double getPrice() {\n        return this.price;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PastryDiscountGuard pdg = new PastryDiscountGuard(50000.0);\n        pdg.applyFixedDiscount(60000.0);\n        System.out.println(\"Chegirmadan keyingi narx: \" + pdg.getPrice() + \" UZS\");\n    }\n}",
    "sampleData": [
      "Chegirmadan keyingi narx: 50000.0 UZS"
    ],
    "expectedOutput": "Chegirmadan keyingi narx: 50000.0 UZS",
    "detailedSolution": {
      "theory": "Konstruktorlarni qayta yuklash (Overloading) turli parametrlar bilan ob'yekt yaratish imkonini beradi. 'this(...)' orqali barcha konstruktorlarni bitta markaziy konstruktorga yo'naltirish (Constructor Chaining) DRY qoidasiga amal qilishning eng toza usulidir.",
      "theoryEn": "Constructor chaining with this(...) centralizes initialization logic and avoids code duplication across overloaded constructor variants.",
      "cleanCode": "class PastryDiscountGuard {\n    private double price;\n\n    public PastryDiscountGuard(double price) {\n        this.price = price;\n    }\n\n    public void applyFixedDiscount(double discount) {\n        if (discount > this.price) return;\n        this.price -= discount;\n    }\n\n    public double getPrice() {\n        return this.price;\n    }\n}",
      "breakdown": [
        "<code>this(...) & Guard Clause</code>: Konstruktorlar zanjiri kod takrorlanishini yo'qotadi, Guard Clause esa chuqur if-else ichma-ichligini to'xtatadi.",
        "<code>PastryDiscountGuard</code>: Mustahkam himoyalangan va qayta yuklangan toza sinf arxitekturasi."
      ],
      "pitfalls": "'this(...)' chaqiruvi konstruktor tanasida mutlaqo BIRINCHI qatorda joylashishi shart, aks holda kompilyatsiya xatosi ro'y beradi.",
      "cw2Tip": "CW2 tizimida turli toifadagi foydalanuvchilar (Guest, VIP, Corporate) uchun zanjirli konstruktorlardan foydalaning."
    }
  },
  {
    "id": 82,
    "tier": 6,
    "tierName": "6-Bosqich: Himoyaviy Dasturlash, Invariantlar va Guard Clauses",
    "sector": "76-90: Invariants & Guard Clauses",
    "title": {
      "uz": "82. Dodo Pizza — Kuryer Yoshi Mantiqiy Oralig'i (16 dan 100 gacha)",
      "en": "82. Dodo Pizza — Courier Age Invariant Guard (16 to 100)"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nMehnat qonunchiligiga ko'ra kuryer yoshi 16 dan kam yoki 100 dan katta bo'lishi mumkin emas. Mantiqsiz yosh kiritilganda qiymatni o'zgartirmasdan rad eting.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'CourierAgeGuard' sinfini xususiy (private) int toifasidagi 'age' maydoni bilan oching.\n\n2. 'public CourierAgeGuard(int age)' konstruktorini yozing.\n\n3. 'public int getAge()' getterini yozing.\n\n4. 'public void setAge(int age)' setterida: agar yosh 18 dan kichik yoki 65 dan katta bo'lsa darhol return qiling.\n\n5. 'Main' metodida 12 yosh berib, rad etilganini ko'rsating.",
      "en": "📖 Real-World Scenario & Context\nGuard against illogical human age values preserving 16-100 invariant.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'CourierAgeGuard' with private int field 'age'.\n\n2. Write constructor 'public CourierAgeGuard(int age)'.\n\n3. Write accessor 'getAge()'.\n\n4. In 'setAge(int age)', guard against age < 18 or age > 65 using early return.\n\n5. In 'main', pass 12 and verify age is unchanged."
    },
    "story": {
      "uz": "Mehnat qonunchiligiga ko'ra kuryer yoshi 16 dan kam yoki 100 dan katta bo'lishi mumkin emas. Mantiqsiz yosh kiritilganda qiymatni o'zgartirmasdan rad eting.",
      "en": "Guard against illogical human age values preserving 16-100 invariant."
    },
    "steps": {
      "uz": [
        "'CourierAgeGuard' sinfini xususiy (private) int toifasidagi 'age' maydoni bilan oching.",
        "'public CourierAgeGuard(int age)' konstruktorini yozing.",
        "'public int getAge()' getterini yozing.",
        "'public void setAge(int age)' setterida: agar yosh 18 dan kichik yoki 65 dan katta bo'lsa darhol return qiling.",
        "'Main' metodida 12 yosh berib, rad etilganini ko'rsating."
      ],
      "en": [
        "Declare class 'CourierAgeGuard' with private int field 'age'.",
        "Write constructor 'public CourierAgeGuard(int age)'.",
        "Write accessor 'getAge()'.",
        "In 'setAge(int age)', guard against age < 18 or age > 65 using early return.",
        "In 'main', pass 12 and verify age is unchanged."
      ]
    },
    "requirements": {
      "classes": [
        "CourierAgeGuard",
        "Main"
      ],
      "privateFields": [
        "age"
      ],
      "methods": [
        "getAge",
        "setAge"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class CourierAgeGuard {\n    // TODO: Maydonlar va Guard Clause orqali himoyalangan metodlarni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CourierAgeGuard cag = new CourierAgeGuard(22);\n        cag.setAge(12);\n        System.out.println(\"Kuryer yoshi: \" + cag.getAge());\n    }\n}",
    "solution": "class CourierAgeGuard {\n    private int age;\n\n    public CourierAgeGuard(int age) {\n        this.age = age;\n    }\n\n    public int getAge() {\n        return this.age;\n    }\n\n    public void setAge(int age) {\n        if (age < 18 || age > 65) return;\n        this.age = age;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CourierAgeGuard cag = new CourierAgeGuard(22);\n        cag.setAge(12);\n        System.out.println(\"Kuryer yoshi: \" + cag.getAge());\n    }\n}",
    "sampleData": [
      "Kuryer yoshi: 22"
    ],
    "expectedOutput": "Kuryer yoshi: 22",
    "detailedSolution": {
      "theory": "Konstruktorlarni qayta yuklash (Overloading) turli parametrlar bilan ob'yekt yaratish imkonini beradi. 'this(...)' orqali barcha konstruktorlarni bitta markaziy konstruktorga yo'naltirish (Constructor Chaining) DRY qoidasiga amal qilishning eng toza usulidir.",
      "theoryEn": "Constructor chaining with this(...) centralizes initialization logic and avoids code duplication across overloaded constructor variants.",
      "cleanCode": "class CourierAgeGuard {\n    private int age;\n\n    public CourierAgeGuard(int age) {\n        this.age = age;\n    }\n\n    public int getAge() {\n        return this.age;\n    }\n\n    public void setAge(int age) {\n        if (age < 18 || age > 65) return;\n        this.age = age;\n    }\n}",
      "breakdown": [
        "<code>this(...) & Guard Clause</code>: Konstruktorlar zanjiri kod takrorlanishini yo'qotadi, Guard Clause esa chuqur if-else ichma-ichligini to'xtatadi.",
        "<code>CourierAgeGuard</code>: Mustahkam himoyalangan va qayta yuklangan toza sinf arxitekturasi."
      ],
      "pitfalls": "'this(...)' chaqiruvi konstruktor tanasida mutlaqo BIRINCHI qatorda joylashishi shart, aks holda kompilyatsiya xatosi ro'y beradi.",
      "cw2Tip": "CW2 tizimida turli toifadagi foydalanuvchilar (Guest, VIP, Corporate) uchun zanjirli konstruktorlardan foydalaning."
    }
  },
  {
    "id": 83,
    "tier": 6,
    "tierName": "6-Bosqich: Himoyaviy Dasturlash, Invariantlar va Guard Clauses",
    "sector": "76-90: Invariants & Guard Clauses",
    "title": {
      "uz": "83. Texnomart — Yetarli Qoldiq Mavjudligi Guard Sharti",
      "en": "83. Texnomart — Insufficient Balance Invariant Guard"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nHisobdan pul yechishda 'if (amount > balance)' bo'lsa tranzaksiya rad etilishi va 'Yetarli mablag' yo'q' degan xabar chiqishi shart. Balans invariantini himoyalang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'CustomerCreditLine' sinfini xususiy (private) double toifasidagi 'balance' maydoni bilan yarating.\n\n2. 'public CustomerCreditLine(double balance)' konstruktorini yozing.\n\n3. 'public void withdraw(double amount)' metodida agar 'amount > this.balance' bo'lsa 'Yetarli mablag\\' yo\\'q' deb ogohlantirib return qiling.\n\n4. 'public double getBalance()' getterini bering.\n\n5. 'Main' metodida 100000.0 balansdan 150000.0 yechishga urinib xabar va balansni chiqaring.",
      "en": "📖 Real-World Scenario & Context\nGuard against overdraft by validating that withdrawal amount does not exceed available balance.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'CustomerCreditLine' with private double field 'balance'.\n\n2. Write constructor 'public CustomerCreditLine(double balance)'.\n\n3. In 'withdraw(double amount)', guard against overdraft printing 'Yetarli mablag\\' yo\\'q'.\n\n4. Implement accessor 'getBalance()'.\n\n5. In 'main', attempt over-withdrawing and print balance."
    },
    "story": {
      "uz": "Hisobdan pul yechishda 'if (amount > balance)' bo'lsa tranzaksiya rad etilishi va 'Yetarli mablag' yo'q' degan xabar chiqishi shart. Balans invariantini himoyalang.",
      "en": "Guard against overdraft by validating that withdrawal amount does not exceed available balance."
    },
    "steps": {
      "uz": [
        "'CustomerCreditLine' sinfini xususiy (private) double toifasidagi 'balance' maydoni bilan yarating.",
        "'public CustomerCreditLine(double balance)' konstruktorini yozing.",
        "'public void withdraw(double amount)' metodida agar 'amount > this.balance' bo'lsa 'Yetarli mablag\\' yo\\'q' deb ogohlantirib return qiling.",
        "'public double getBalance()' getterini bering.",
        "'Main' metodida 100000.0 balansdan 150000.0 yechishga urinib xabar va balansni chiqaring."
      ],
      "en": [
        "Declare class 'CustomerCreditLine' with private double field 'balance'.",
        "Write constructor 'public CustomerCreditLine(double balance)'.",
        "In 'withdraw(double amount)', guard against overdraft printing 'Yetarli mablag\\' yo\\'q'.",
        "Implement accessor 'getBalance()'.",
        "In 'main', attempt over-withdrawing and print balance."
      ]
    },
    "requirements": {
      "classes": [
        "CustomerCreditLine",
        "Main"
      ],
      "privateFields": [
        "balance"
      ],
      "methods": [
        "withdraw",
        "getBalance"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class CustomerCreditLine {\n    // TODO: Maydonlar va Guard Clause orqali himoyalangan metodlarni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CustomerCreditLine ccl = new CustomerCreditLine(100000.0);\n        ccl.withdraw(150000.0);\n        System.out.println(\"Balans: \" + ccl.getBalance() + \" UZS\");\n    }\n}",
    "solution": "class CustomerCreditLine {\n    private double balance;\n\n    public CustomerCreditLine(double balance) {\n        this.balance = balance;\n    }\n\n    public void withdraw(double amount) {\n        if (amount > this.balance) {\n            System.out.println(\"Yetarli mablag' yo'q\");\n            return;\n        }\n        this.balance -= amount;\n    }\n\n    public double getBalance() {\n        return this.balance;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CustomerCreditLine ccl = new CustomerCreditLine(100000.0);\n        ccl.withdraw(150000.0);\n        System.out.println(\"Balans: \" + ccl.getBalance() + \" UZS\");\n    }\n}",
    "sampleData": [
      "Yetarli mablag' yo'q\nBalans: 100000.0 UZS"
    ],
    "expectedOutput": "Yetarli mablag' yo'q\nBalans: 100000.0 UZS",
    "detailedSolution": {
      "theory": "Konstruktorlarni qayta yuklash (Overloading) turli parametrlar bilan ob'yekt yaratish imkonini beradi. 'this(...)' orqali barcha konstruktorlarni bitta markaziy konstruktorga yo'naltirish (Constructor Chaining) DRY qoidasiga amal qilishning eng toza usulidir.",
      "theoryEn": "Constructor chaining with this(...) centralizes initialization logic and avoids code duplication across overloaded constructor variants.",
      "cleanCode": "class CustomerCreditLine {\n    private double balance;\n\n    public CustomerCreditLine(double balance) {\n        this.balance = balance;\n    }\n\n    public void withdraw(double amount) {\n        if (amount > this.balance) {\n            System.out.println(\"Yetarli mablag' yo'q\");\n            return;\n        }\n        this.balance -= amount;\n    }\n\n    public double getBalance() {\n        return this.balance;\n    }\n}",
      "breakdown": [
        "<code>this(...) & Guard Clause</code>: Konstruktorlar zanjiri kod takrorlanishini yo'qotadi, Guard Clause esa chuqur if-else ichma-ichligini to'xtatadi.",
        "<code>CustomerCreditLine</code>: Mustahkam himoyalangan va qayta yuklangan toza sinf arxitekturasi."
      ],
      "pitfalls": "'this(...)' chaqiruvi konstruktor tanasida mutlaqo BIRINCHI qatorda joylashishi shart, aks holda kompilyatsiya xatosi ro'y beradi.",
      "cw2Tip": "CW2 tizimida turli toifadagi foydalanuvchilar (Guest, VIP, Corporate) uchun zanjirli konstruktorlardan foydalaning."
    }
  },
  {
    "id": 84,
    "tier": 6,
    "tierName": "6-Bosqich: Himoyaviy Dasturlash, Invariantlar va Guard Clauses",
    "sector": "76-90: Invariants & Guard Clauses",
    "title": {
      "uz": "84. Medion — Parol Murakkabligi Invarianti (8 ta belgi va raqam)",
      "en": "84. Medion — Password Complexity Invariant (Min 8 Characters and Digit)"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nShifokor paroli kamida 8 ta belgidan iborat bo'lishi va ichida kamida 1 ta raqam qatnashishi shart. Zaif parollarni rad etuvchi setterni yozing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'DoctorAuthGuard' sinfini 'password' va 'changed' maydonlari bilan oching.\n\n2. 'public DoctorAuthGuard(String password)' konstruktorida 'this' orqali 'changed' maydoniga qiymat bering qiling.\n\n3. 'public void setPassword(String password)' setterida: agar parol null bo'lsa yoki uzunligi 8 dan kichik bo'lsa return qiling; aks holda parolni o'zgartirib 'this' orqali 'changed' maydoniga qiymat bering qiling.\n\n4. 'public boolean isChanged()' getterini bering.\n\n5. 'Main' metodida qisqa 'simple' parolini berib o'zgarmaganini tekshiring.",
      "en": "📖 Real-World Scenario & Context\nValidate password strength checking for minimum 8 characters and numeric presence.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'DoctorAuthGuard' with password and changed fields.\n\n2. Write constructor initializing changed flag to false.\n\n3. In 'setPassword(String password)', guard against null or length < 8 using early return.\n\n4. Implement accessor 'isChanged()'.\n\n5. In 'main', attempt setting short password and verify changed remains false."
    },
    "story": {
      "uz": "Shifokor paroli kamida 8 ta belgidan iborat bo'lishi va ichida kamida 1 ta raqam qatnashishi shart. Zaif parollarni rad etuvchi setterni yozing.",
      "en": "Validate password strength checking for minimum 8 characters and numeric presence."
    },
    "steps": {
      "uz": [
        "'DoctorAuthGuard' sinfini 'password' va 'changed' maydonlari bilan oching.",
        "'public DoctorAuthGuard(String password)' konstruktorida 'this' orqali 'changed' maydoniga qiymat bering qiling.",
        "'public void setPassword(String password)' setterida: agar parol null bo'lsa yoki uzunligi 8 dan kichik bo'lsa return qiling; aks holda parolni o'zgartirib 'this' orqali 'changed' maydoniga qiymat bering qiling.",
        "'public boolean isChanged()' getterini bering.",
        "'Main' metodida qisqa 'simple' parolini berib o'zgarmaganini tekshiring."
      ],
      "en": [
        "Declare class 'DoctorAuthGuard' with password and changed fields.",
        "Write constructor initializing changed flag to false.",
        "In 'setPassword(String password)', guard against null or length < 8 using early return.",
        "Implement accessor 'isChanged()'.",
        "In 'main', attempt setting short password and verify changed remains false."
      ]
    },
    "requirements": {
      "classes": [
        "DoctorAuthGuard",
        "Main"
      ],
      "privateFields": [
        "password",
        "changed"
      ],
      "methods": [
        "setPassword",
        "isChanged"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class DoctorAuthGuard {\n    // TODO: Maydonlar va Guard Clause orqali himoyalangan metodlarni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DoctorAuthGuard dag = new DoctorAuthGuard(\"Pass12345\");\n        dag.setPassword(\"simple\");\n        System.out.println(\"Parol o'zgarganmi: \" + dag.isChanged());\n    }\n}",
    "solution": "class DoctorAuthGuard {\n    private String password;\n    private boolean changed;\n\n    public DoctorAuthGuard(String password) {\n        this.password = password;\n        this.changed = false;\n    }\n\n    public void setPassword(String password) {\n        if (password == null || password.length() < 8) return;\n        this.password = password;\n        this.changed = true;\n    }\n\n    public boolean isChanged() {\n        return this.changed;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DoctorAuthGuard dag = new DoctorAuthGuard(\"Pass12345\");\n        dag.setPassword(\"simple\");\n        System.out.println(\"Parol o'zgarganmi: \" + dag.isChanged());\n    }\n}",
    "sampleData": [
      "Parol o'zgarganmi: false"
    ],
    "expectedOutput": "Parol o'zgarganmi: false",
    "detailedSolution": {
      "theory": "Konstruktorlarni qayta yuklash (Overloading) turli parametrlar bilan ob'yekt yaratish imkonini beradi. 'this(...)' orqali barcha konstruktorlarni bitta markaziy konstruktorga yo'naltirish (Constructor Chaining) DRY qoidasiga amal qilishning eng toza usulidir.",
      "theoryEn": "Constructor chaining with this(...) centralizes initialization logic and avoids code duplication across overloaded constructor variants.",
      "cleanCode": "class DoctorAuthGuard {\n    private String password;\n    private boolean changed;\n\n    public DoctorAuthGuard(String password) {\n        this.password = password;\n        this.changed = false;\n    }\n\n    public void setPassword(String password) {\n        if (password == null || password.length() < 8) return;\n        this.password = password;\n        this.changed = true;\n    }\n\n    public boolean isChanged() {\n        return this.changed;\n    }\n}",
      "breakdown": [
        "<code>this(...) & Guard Clause</code>: Konstruktorlar zanjiri kod takrorlanishini yo'qotadi, Guard Clause esa chuqur if-else ichma-ichligini to'xtatadi.",
        "<code>DoctorAuthGuard</code>: Mustahkam himoyalangan va qayta yuklangan toza sinf arxitekturasi."
      ],
      "pitfalls": "'this(...)' chaqiruvi konstruktor tanasida mutlaqo BIRINCHI qatorda joylashishi shart, aks holda kompilyatsiya xatosi ro'y beradi.",
      "cw2Tip": "CW2 tizimida turli toifadagi foydalanuvchilar (Guest, VIP, Corporate) uchun zanjirli konstruktorlardan foydalaning."
    }
  },
  {
    "id": 85,
    "tier": 6,
    "tierName": "6-Bosqich: Himoyaviy Dasturlash, Invariantlar va Guard Clauses",
    "sector": "76-90: Invariants & Guard Clauses",
    "title": {
      "uz": "85. Express24 — Email Manzili Shakli Invarianti (@ va . belgisi)",
      "en": "85. Express24 — Email Format Invariant Guarding Customer Profile"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nMijoz elektron pochtasi ichida '@' belgisi va undan keyin nuqta '.' bo'lishi shart. Noto'g'ri elektron pochtani rad etuvchi setterni dasturlang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'CustomerEmailGuard' sinfini xususiy (private) String toifasidagi 'email' maydoni bilan e'lon qiling.\n\n2. 'public CustomerEmailGuard(String email)' konstruktorini yozing.\n\n3. 'public String getEmail()' getterini bering.\n\n4. 'public void setEmail(String email)' setterida: agar email null bo'lsa yoki '@' hamda '.' belgilarini o'z ichiga olmasa darhol return qiling.\n\n5. 'Main' metodida noto'g'ri 'invalidemail' berilganda eski email saqlanib qolganini chiqaring.",
      "en": "📖 Real-World Scenario & Context\nVerify that stored email string contains required @ and domain separator dot.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'CustomerEmailGuard' with private String field 'email'.\n\n2. Write constructor 'public CustomerEmailGuard(String email)'.\n\n3. Write accessor 'getEmail()'.\n\n4. In 'setEmail', guard against null or strings lacking '@' or '.' using early return.\n\n5. In 'main', pass invalid email and verify original email is preserved."
    },
    "story": {
      "uz": "Mijoz elektron pochtasi ichida '@' belgisi va undan keyin nuqta '.' bo'lishi shart. Noto'g'ri elektron pochtani rad etuvchi setterni dasturlang.",
      "en": "Verify that stored email string contains required @ and domain separator dot."
    },
    "steps": {
      "uz": [
        "'CustomerEmailGuard' sinfini xususiy (private) String toifasidagi 'email' maydoni bilan e'lon qiling.",
        "'public CustomerEmailGuard(String email)' konstruktorini yozing.",
        "'public String getEmail()' getterini bering.",
        "'public void setEmail(String email)' setterida: agar email null bo'lsa yoki '@' hamda '.' belgilarini o'z ichiga olmasa darhol return qiling.",
        "'Main' metodida noto'g'ri 'invalidemail' berilganda eski email saqlanib qolganini chiqaring."
      ],
      "en": [
        "Declare class 'CustomerEmailGuard' with private String field 'email'.",
        "Write constructor 'public CustomerEmailGuard(String email)'.",
        "Write accessor 'getEmail()'.",
        "In 'setEmail', guard against null or strings lacking '@' or '.' using early return.",
        "In 'main', pass invalid email and verify original email is preserved."
      ]
    },
    "requirements": {
      "classes": [
        "CustomerEmailGuard",
        "Main"
      ],
      "privateFields": [
        "email"
      ],
      "methods": [
        "getEmail",
        "setEmail"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class CustomerEmailGuard {\n    // TODO: Maydonlar va Guard Clause orqali himoyalangan metodlarni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CustomerEmailGuard ceg = new CustomerEmailGuard(\"user@gmail.com\");\n        ceg.setEmail(\"invalidemail\");\n        System.out.println(\"Email: \" + ceg.getEmail());\n    }\n}",
    "solution": "class CustomerEmailGuard {\n    private String email;\n\n    public CustomerEmailGuard(String email) {\n        this.email = email;\n    }\n\n    public String getEmail() {\n        return this.email;\n    }\n\n    public void setEmail(String email) {\n        if (email == null || !email.contains(\"@\") || !email.contains(\".\")) return;\n        this.email = email;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CustomerEmailGuard ceg = new CustomerEmailGuard(\"user@gmail.com\");\n        ceg.setEmail(\"invalidemail\");\n        System.out.println(\"Email: \" + ceg.getEmail());\n    }\n}",
    "sampleData": [
      "Email: user@gmail.com"
    ],
    "expectedOutput": "Email: user@gmail.com",
    "detailedSolution": {
      "theory": "Konstruktorlarni qayta yuklash (Overloading) turli parametrlar bilan ob'yekt yaratish imkonini beradi. 'this(...)' orqali barcha konstruktorlarni bitta markaziy konstruktorga yo'naltirish (Constructor Chaining) DRY qoidasiga amal qilishning eng toza usulidir.",
      "theoryEn": "Constructor chaining with this(...) centralizes initialization logic and avoids code duplication across overloaded constructor variants.",
      "cleanCode": "class CustomerEmailGuard {\n    private String email;\n\n    public CustomerEmailGuard(String email) {\n        this.email = email;\n    }\n\n    public String getEmail() {\n        return this.email;\n    }\n\n    public void setEmail(String email) {\n        if (email == null || !email.contains(\"@\") || !email.contains(\".\")) return;\n        this.email = email;\n    }\n}",
      "breakdown": [
        "<code>this(...) & Guard Clause</code>: Konstruktorlar zanjiri kod takrorlanishini yo'qotadi, Guard Clause esa chuqur if-else ichma-ichligini to'xtatadi.",
        "<code>CustomerEmailGuard</code>: Mustahkam himoyalangan va qayta yuklangan toza sinf arxitekturasi."
      ],
      "pitfalls": "'this(...)' chaqiruvi konstruktor tanasida mutlaqo BIRINCHI qatorda joylashishi shart, aks holda kompilyatsiya xatosi ro'y beradi.",
      "cw2Tip": "CW2 tizimida turli toifadagi foydalanuvchilar (Guest, VIP, Corporate) uchun zanjirli konstruktorlardan foydalaning."
    }
  },
  {
    "id": 86,
    "tier": 6,
    "tierName": "6-Bosqich: Himoyaviy Dasturlash, Invariantlar va Guard Clauses",
    "sector": "76-90: Invariants & Guard Clauses",
    "title": {
      "uz": "86. Asaxiy — Yakunlangan Buyurtma Holatini Orqaga Qaytarmaslik Invarianti",
      "en": "86. Asaxiy — Terminal Lifecycle State Invariant Guard"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nBuyurtma holati 'DELIVERED' (Yetkazildi) bo'lgach, uni qayta 'PENDING' yoki 'PROCESSING' ga o'zgartirib bo'lmaydi. Yakuniy holat invariantini himoyalang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'OrderLifecycleGuard' sinfini xususiy (private) String toifasidagi 'status' maydoni bilan e'lon qiling.\n\n2. 'public OrderLifecycleGuard(String status)' konstruktorini yozing.\n\n3. 'public String getStatus()' getterini yozing.\n\n4. Terminal holat qoidasi: 'public void setStatus(String status)' setterida agar joriy holat 'DELIVERED' bo'lsa hech qanday o'zgartirish qabul qilinmasdan darhol return qilinsin.\n\n5. 'Main' metodida yetkazilgan buyurtmani PENDING holatiga qaytarishga urinib ko'ring.",
      "en": "📖 Real-World Scenario & Context\nPrevent regression from terminal DELIVERED status back to earlier processing stages.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'OrderLifecycleGuard' with private String field 'status'.\n\n2. Write constructor 'public OrderLifecycleGuard(String status)'.\n\n3. Write accessor 'getStatus()'.\n\n4. In 'setStatus', guard against reverting terminal 'DELIVERED' state via early return.\n\n5. In 'main', attempt reverting delivered order to PENDING and verify status remains DELIVERED."
    },
    "story": {
      "uz": "Buyurtma holati 'DELIVERED' (Yetkazildi) bo'lgach, uni qayta 'PENDING' yoki 'PROCESSING' ga o'zgartirib bo'lmaydi. Yakuniy holat invariantini himoyalang.",
      "en": "Prevent regression from terminal DELIVERED status back to earlier processing stages."
    },
    "steps": {
      "uz": [
        "'OrderLifecycleGuard' sinfini xususiy (private) String toifasidagi 'status' maydoni bilan e'lon qiling.",
        "'public OrderLifecycleGuard(String status)' konstruktorini yozing.",
        "'public String getStatus()' getterini yozing.",
        "Terminal holat qoidasi: 'public void setStatus(String status)' setterida agar joriy holat 'DELIVERED' bo'lsa hech qanday o'zgartirish qabul qilinmasdan darhol return qilinsin.",
        "'Main' metodida yetkazilgan buyurtmani PENDING holatiga qaytarishga urinib ko'ring."
      ],
      "en": [
        "Declare class 'OrderLifecycleGuard' with private String field 'status'.",
        "Write constructor 'public OrderLifecycleGuard(String status)'.",
        "Write accessor 'getStatus()'.",
        "In 'setStatus', guard against reverting terminal 'DELIVERED' state via early return.",
        "In 'main', attempt reverting delivered order to PENDING and verify status remains DELIVERED."
      ]
    },
    "requirements": {
      "classes": [
        "OrderLifecycleGuard",
        "Main"
      ],
      "privateFields": [
        "status"
      ],
      "methods": [
        "getStatus",
        "setStatus"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class OrderLifecycleGuard {\n    // TODO: Maydonlar va Guard Clause orqali himoyalangan metodlarni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        OrderLifecycleGuard olg = new OrderLifecycleGuard(\"DELIVERED\");\n        olg.setStatus(\"PENDING\");\n        System.out.println(\"Buyurtma holati: \" + olg.getStatus());\n    }\n}",
    "solution": "class OrderLifecycleGuard {\n    private String status;\n\n    public OrderLifecycleGuard(String status) {\n        this.status = status;\n    }\n\n    public String getStatus() {\n        return this.status;\n    }\n\n    public void setStatus(String status) {\n        if (\"DELIVERED\".equals(this.status)) return;\n        this.status = status;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        OrderLifecycleGuard olg = new OrderLifecycleGuard(\"DELIVERED\");\n        olg.setStatus(\"PENDING\");\n        System.out.println(\"Buyurtma holati: \" + olg.getStatus());\n    }\n}",
    "sampleData": [
      "Buyurtma holati: DELIVERED"
    ],
    "expectedOutput": "Buyurtma holati: DELIVERED",
    "detailedSolution": {
      "theory": "Konstruktorlarni qayta yuklash (Overloading) turli parametrlar bilan ob'yekt yaratish imkonini beradi. 'this(...)' orqali barcha konstruktorlarni bitta markaziy konstruktorga yo'naltirish (Constructor Chaining) DRY qoidasiga amal qilishning eng toza usulidir.",
      "theoryEn": "Constructor chaining with this(...) centralizes initialization logic and avoids code duplication across overloaded constructor variants.",
      "cleanCode": "class OrderLifecycleGuard {\n    private String status;\n\n    public OrderLifecycleGuard(String status) {\n        this.status = status;\n    }\n\n    public String getStatus() {\n        return this.status;\n    }\n\n    public void setStatus(String status) {\n        if (\"DELIVERED\".equals(this.status)) return;\n        this.status = status;\n    }\n}",
      "breakdown": [
        "<code>this(...) & Guard Clause</code>: Konstruktorlar zanjiri kod takrorlanishini yo'qotadi, Guard Clause esa chuqur if-else ichma-ichligini to'xtatadi.",
        "<code>OrderLifecycleGuard</code>: Mustahkam himoyalangan va qayta yuklangan toza sinf arxitekturasi."
      ],
      "pitfalls": "'this(...)' chaqiruvi konstruktor tanasida mutlaqo BIRINCHI qatorda joylashishi shart, aks holda kompilyatsiya xatosi ro'y beradi.",
      "cw2Tip": "CW2 tizimida turli toifadagi foydalanuvchilar (Guest, VIP, Corporate) uchun zanjirli konstruktorlardan foydalaning."
    }
  },
  {
    "id": 87,
    "tier": 6,
    "tierName": "6-Bosqich: Himoyaviy Dasturlash, Invariantlar va Guard Clauses",
    "sector": "76-90: Invariants & Guard Clauses",
    "title": {
      "uz": "87. Kapitalbank — Nolga Bo'lishdan Himoya (Division by Zero Guard)",
      "en": "87. Kapitalbank — Division by Zero Guard in Average Metric Computation"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nO'rtacha tranzaksiya summasini hisoblashda agar tranzaksiyalar soni 0 bo'lsa, xatolik berish o'rniga 0.0 qaytaruvchi nolga bo'linish guardini yozing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'AverageSpendingGuard' sinfini 'total' va 'count' maydonlari bilan yarating.\n\n2. 'public AverageSpendingGuard(double total, int count)' konstruktorini yozing.\n\n3. Nolga bo'lish xavfini bartaraf etuvchi Guard Clause: 'public double getAverageTxAmount()' ichida 'if (this.count == 0) return 0.0' qilib, so'ng 'this.total / this.count' ni qaytaring.\n\n4. 'Main' metodida total=0.0 va count=0 bilan tekshirib ko'ring.\n\n5. Konsolga o'rtacha summani chiqaring.",
      "en": "📖 Real-World Scenario & Context\nGuard average calculation against division by zero when transaction count is zero.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'AverageSpendingGuard' with total and count fields.\n\n2. Write constructor 'public AverageSpendingGuard(double total, int count)'.\n\n3. In 'getAverageTxAmount()', guard against division by zero returning 0.0 if count == 0.\n\n4. In 'main', test with 0 count.\n\n5. Print average transaction amount."
    },
    "story": {
      "uz": "O'rtacha tranzaksiya summasini hisoblashda agar tranzaksiyalar soni 0 bo'lsa, xatolik berish o'rniga 0.0 qaytaruvchi nolga bo'linish guardini yozing.",
      "en": "Guard average calculation against division by zero when transaction count is zero."
    },
    "steps": {
      "uz": [
        "'AverageSpendingGuard' sinfini 'total' va 'count' maydonlari bilan yarating.",
        "'public AverageSpendingGuard(double total, int count)' konstruktorini yozing.",
        "Nolga bo'lish xavfini bartaraf etuvchi Guard Clause: 'public double getAverageTxAmount()' ichida 'if (this.count == 0) return 0.0' qilib, so'ng 'this.total / this.count' ni qaytaring.",
        "'Main' metodida total=0.0 va count=0 bilan tekshirib ko'ring.",
        "Konsolga o'rtacha summani chiqaring."
      ],
      "en": [
        "Declare class 'AverageSpendingGuard' with total and count fields.",
        "Write constructor 'public AverageSpendingGuard(double total, int count)'.",
        "In 'getAverageTxAmount()', guard against division by zero returning 0.0 if count == 0.",
        "In 'main', test with 0 count.",
        "Print average transaction amount."
      ]
    },
    "requirements": {
      "classes": [
        "AverageSpendingGuard",
        "Main"
      ],
      "privateFields": [
        "total",
        "count"
      ],
      "methods": [
        "getAverageTxAmount"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class AverageSpendingGuard {\n    // TODO: Maydonlar va Guard Clause orqali himoyalangan metodlarni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AverageSpendingGuard asg = new AverageSpendingGuard(0.0, 0);\n        System.out.println(\"O'rtacha summa: \" + asg.getAverageTxAmount() + \" UZS\");\n    }\n}",
    "solution": "class AverageSpendingGuard {\n    private double total;\n    private int count;\n\n    public AverageSpendingGuard(double total, int count) {\n        this.total = total;\n        this.count = count;\n    }\n\n    public double getAverageTxAmount() {\n        if (this.count == 0) return 0.0;\n        return this.total / this.count;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AverageSpendingGuard asg = new AverageSpendingGuard(0.0, 0);\n        System.out.println(\"O'rtacha summa: \" + asg.getAverageTxAmount() + \" UZS\");\n    }\n}",
    "sampleData": [
      "O'rtacha summa: 0.0 UZS"
    ],
    "expectedOutput": "O'rtacha summa: 0.0 UZS",
    "detailedSolution": {
      "theory": "Konstruktorlarni qayta yuklash (Overloading) turli parametrlar bilan ob'yekt yaratish imkonini beradi. 'this(...)' orqali barcha konstruktorlarni bitta markaziy konstruktorga yo'naltirish (Constructor Chaining) DRY qoidasiga amal qilishning eng toza usulidir.",
      "theoryEn": "Constructor chaining with this(...) centralizes initialization logic and avoids code duplication across overloaded constructor variants.",
      "cleanCode": "class AverageSpendingGuard {\n    private double total;\n    private int count;\n\n    public AverageSpendingGuard(double total, int count) {\n        this.total = total;\n        this.count = count;\n    }\n\n    public double getAverageTxAmount() {\n        if (this.count == 0) return 0.0;\n        return this.total / this.count;\n    }\n}",
      "breakdown": [
        "<code>this(...) & Guard Clause</code>: Konstruktorlar zanjiri kod takrorlanishini yo'qotadi, Guard Clause esa chuqur if-else ichma-ichligini to'xtatadi.",
        "<code>AverageSpendingGuard</code>: Mustahkam himoyalangan va qayta yuklangan toza sinf arxitekturasi."
      ],
      "pitfalls": "'this(...)' chaqiruvi konstruktor tanasida mutlaqo BIRINCHI qatorda joylashishi shart, aks holda kompilyatsiya xatosi ro'y beradi.",
      "cw2Tip": "CW2 tizimida turli toifadagi foydalanuvchilar (Guest, VIP, Corporate) uchun zanjirli konstruktorlardan foydalaning."
    }
  },
  {
    "id": 88,
    "tier": 6,
    "tierName": "6-Bosqich: Himoyaviy Dasturlash, Invariantlar va Guard Clauses",
    "sector": "76-90: Invariants & Guard Clauses",
    "title": {
      "uz": "88. Beeline — Maydonlararo Mantiqiy Moslik (Raqamli Tovar Og'irligi 0)",
      "en": "88. Beeline — Cross-Field Consistency Invariant Guard"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nAgar tovar 'isDigital == true' bo'lsa, uning og'irligi 'weightKg' qat'iy 0.0 bo'lishi shart. Agar musbat og'irlik kiritilsa uni rad etuvchi invariantni bajaring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'ProductTypeConsistency' sinfini 'isDigital' va 'weightKg' maydonlari bilan oching.\n\n2. 'public ProductTypeConsistency(boolean isDigital, double weightKg)' konstruktorini yozing.\n\n3. 'public double getWeightKg()' getterini bering.\n\n4. Maydonlararo invariant: 'public void setWeightKg(double weightKg)' metodida agar 'isDigital' true bo'lsa va vazn 0 dan katta berilsa darhol return qiling.\n\n5. 'Main' metodida raqamli tovar vaznini 5.5 kg ga o'zgartirishga urinib ko'ring.",
      "en": "📖 Real-World Scenario & Context\nMaintain cross-field invariant: digital goods cannot possess non-zero weight.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'ProductTypeConsistency' with isDigital and weightKg fields.\n\n2. Write constructor 'public ProductTypeConsistency(boolean isDigital, double weightKg)'.\n\n3. Write accessor 'getWeightKg()'.\n\n4. Enforce cross-field invariant in 'setWeightKg': if digital product, reject weight > 0.\n\n5. In 'main', attempt assigning 5.5 kg to digital product and verify weight remains 0.0."
    },
    "story": {
      "uz": "Agar tovar 'isDigital == true' bo'lsa, uning og'irligi 'weightKg' qat'iy 0.0 bo'lishi shart. Agar musbat og'irlik kiritilsa uni rad etuvchi invariantni bajaring.",
      "en": "Maintain cross-field invariant: digital goods cannot possess non-zero weight."
    },
    "steps": {
      "uz": [
        "'ProductTypeConsistency' sinfini 'isDigital' va 'weightKg' maydonlari bilan oching.",
        "'public ProductTypeConsistency(boolean isDigital, double weightKg)' konstruktorini yozing.",
        "'public double getWeightKg()' getterini bering.",
        "Maydonlararo invariant: 'public void setWeightKg(double weightKg)' metodida agar 'isDigital' true bo'lsa va vazn 0 dan katta berilsa darhol return qiling.",
        "'Main' metodida raqamli tovar vaznini 5.5 kg ga o'zgartirishga urinib ko'ring."
      ],
      "en": [
        "Declare class 'ProductTypeConsistency' with isDigital and weightKg fields.",
        "Write constructor 'public ProductTypeConsistency(boolean isDigital, double weightKg)'.",
        "Write accessor 'getWeightKg()'.",
        "Enforce cross-field invariant in 'setWeightKg': if digital product, reject weight > 0.",
        "In 'main', attempt assigning 5.5 kg to digital product and verify weight remains 0.0."
      ]
    },
    "requirements": {
      "classes": [
        "ProductTypeConsistency",
        "Main"
      ],
      "privateFields": [
        "isDigital",
        "weightKg"
      ],
      "methods": [
        "getWeightKg",
        "setWeightKg"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class ProductTypeConsistency {\n    // TODO: Maydonlar va Guard Clause orqali himoyalangan metodlarni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ProductTypeConsistency ptc = new ProductTypeConsistency(true, 0.0);\n        ptc.setWeightKg(5.5);\n        System.out.println(\"Raqamli mahsulot og'irligi: \" + ptc.getWeightKg() + \" kg\");\n    }\n}",
    "solution": "class ProductTypeConsistency {\n    private boolean isDigital;\n    private double weightKg;\n\n    public ProductTypeConsistency(boolean isDigital, double weightKg) {\n        this.isDigital = isDigital;\n        this.weightKg = weightKg;\n    }\n\n    public double getWeightKg() {\n        return this.weightKg;\n    }\n\n    public void setWeightKg(double weightKg) {\n        if (this.isDigital && weightKg > 0.0) return;\n        this.weightKg = weightKg;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ProductTypeConsistency ptc = new ProductTypeConsistency(true, 0.0);\n        ptc.setWeightKg(5.5);\n        System.out.println(\"Raqamli mahsulot og'irligi: \" + ptc.getWeightKg() + \" kg\");\n    }\n}",
    "sampleData": [
      "Raqamli mahsulot og'irligi: 0.0 kg"
    ],
    "expectedOutput": "Raqamli mahsulot og'irligi: 0.0 kg",
    "detailedSolution": {
      "theory": "Konstruktorlarni qayta yuklash (Overloading) turli parametrlar bilan ob'yekt yaratish imkonini beradi. 'this(...)' orqali barcha konstruktorlarni bitta markaziy konstruktorga yo'naltirish (Constructor Chaining) DRY qoidasiga amal qilishning eng toza usulidir.",
      "theoryEn": "Constructor chaining with this(...) centralizes initialization logic and avoids code duplication across overloaded constructor variants.",
      "cleanCode": "class ProductTypeConsistency {\n    private boolean isDigital;\n    private double weightKg;\n\n    public ProductTypeConsistency(boolean isDigital, double weightKg) {\n        this.isDigital = isDigital;\n        this.weightKg = weightKg;\n    }\n\n    public double getWeightKg() {\n        return this.weightKg;\n    }\n\n    public void setWeightKg(double weightKg) {\n        if (this.isDigital && weightKg > 0.0) return;\n        this.weightKg = weightKg;\n    }\n}",
      "breakdown": [
        "<code>this(...) & Guard Clause</code>: Konstruktorlar zanjiri kod takrorlanishini yo'qotadi, Guard Clause esa chuqur if-else ichma-ichligini to'xtatadi.",
        "<code>ProductTypeConsistency</code>: Mustahkam himoyalangan va qayta yuklangan toza sinf arxitekturasi."
      ],
      "pitfalls": "'this(...)' chaqiruvi konstruktor tanasida mutlaqo BIRINCHI qatorda joylashishi shart, aks holda kompilyatsiya xatosi ro'y beradi.",
      "cw2Tip": "CW2 tizimida turli toifadagi foydalanuvchilar (Guest, VIP, Corporate) uchun zanjirli konstruktorlardan foydalaning."
    }
  },
  {
    "id": 89,
    "tier": 6,
    "tierName": "6-Bosqich: Himoyaviy Dasturlash, Invariantlar va Guard Clauses",
    "sector": "76-90: Invariants & Guard Clauses",
    "title": {
      "uz": "89. UzAirways — Minimal Chegara Maksimaldan Oshmasligi Invarianti",
      "en": "89. UzAirways — Multi-Bound Capacity Invariant Enforcement"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nYuk qabul qilishda minimal ruxsat etilgan vazn maksimal sig'imdan katta bo'lishi mumkin emas ('minWeight <= maxWeight'). Zid oraliqlarni rad eting.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'BaggageCapacityGuard' sinfini 'minWeight' va 'maxWeight' maydonlari bilan e'lon qiling.\n\n2. 'public BaggageCapacityGuard(double minWeight, double maxWeight)' konstruktorini yozing.\n\n3. 'public double getMinWeight()' getterini yozing.\n\n4. 'public void setMinWeight(double minWeight)' setterida: agar yangi minimal vazn mavjud 'maxWeight' dan katta bo'lsa darhol return qiling.\n\n5. 'Main' metodida minWeight ni 40.0 ga (max 32.0 dan katta) o'zgartirishga urinib ko'ring.",
      "en": "📖 Real-World Scenario & Context\nEnforce multi-bound consistency invariant where minimum constraint cannot exceed maximum.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'BaggageCapacityGuard' with minWeight and maxWeight fields.\n\n2. Write constructor 'public BaggageCapacityGuard(double minWeight, double maxWeight)'.\n\n3. Write accessor 'getMinWeight()'.\n\n4. In 'setMinWeight', guard against minWeight exceeding maxWeight via early return.\n\n5. In 'main', pass 40.0 (greater than 32.0 max) and verify minWeight is unchanged."
    },
    "story": {
      "uz": "Yuk qabul qilishda minimal ruxsat etilgan vazn maksimal sig'imdan katta bo'lishi mumkin emas ('minWeight <= maxWeight'). Zid oraliqlarni rad eting.",
      "en": "Enforce multi-bound consistency invariant where minimum constraint cannot exceed maximum."
    },
    "steps": {
      "uz": [
        "'BaggageCapacityGuard' sinfini 'minWeight' va 'maxWeight' maydonlari bilan e'lon qiling.",
        "'public BaggageCapacityGuard(double minWeight, double maxWeight)' konstruktorini yozing.",
        "'public double getMinWeight()' getterini yozing.",
        "'public void setMinWeight(double minWeight)' setterida: agar yangi minimal vazn mavjud 'maxWeight' dan katta bo'lsa darhol return qiling.",
        "'Main' metodida minWeight ni 40.0 ga (max 32.0 dan katta) o'zgartirishga urinib ko'ring."
      ],
      "en": [
        "Declare class 'BaggageCapacityGuard' with minWeight and maxWeight fields.",
        "Write constructor 'public BaggageCapacityGuard(double minWeight, double maxWeight)'.",
        "Write accessor 'getMinWeight()'.",
        "In 'setMinWeight', guard against minWeight exceeding maxWeight via early return.",
        "In 'main', pass 40.0 (greater than 32.0 max) and verify minWeight is unchanged."
      ]
    },
    "requirements": {
      "classes": [
        "BaggageCapacityGuard",
        "Main"
      ],
      "privateFields": [
        "minWeight",
        "maxWeight"
      ],
      "methods": [
        "getMinWeight",
        "setMinWeight"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class BaggageCapacityGuard {\n    // TODO: Maydonlar va Guard Clause orqali himoyalangan metodlarni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaggageCapacityGuard bcg = new BaggageCapacityGuard(5.0, 32.0);\n        bcg.setMinWeight(40.0);\n        System.out.println(\"Minimal vazn: \" + bcg.getMinWeight() + \" kg\");\n    }\n}",
    "solution": "class BaggageCapacityGuard {\n    private double minWeight;\n    private double maxWeight;\n\n    public BaggageCapacityGuard(double minWeight, double maxWeight) {\n        this.minWeight = minWeight;\n        this.maxWeight = maxWeight;\n    }\n\n    public double getMinWeight() {\n        return this.minWeight;\n    }\n\n    public void setMinWeight(double minWeight) {\n        if (minWeight > this.maxWeight) return;\n        this.minWeight = minWeight;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaggageCapacityGuard bcg = new BaggageCapacityGuard(5.0, 32.0);\n        bcg.setMinWeight(40.0);\n        System.out.println(\"Minimal vazn: \" + bcg.getMinWeight() + \" kg\");\n    }\n}",
    "sampleData": [
      "Minimal vazn: 5.0 kg"
    ],
    "expectedOutput": "Minimal vazn: 5.0 kg",
    "detailedSolution": {
      "theory": "Konstruktorlarni qayta yuklash (Overloading) turli parametrlar bilan ob'yekt yaratish imkonini beradi. 'this(...)' orqali barcha konstruktorlarni bitta markaziy konstruktorga yo'naltirish (Constructor Chaining) DRY qoidasiga amal qilishning eng toza usulidir.",
      "theoryEn": "Constructor chaining with this(...) centralizes initialization logic and avoids code duplication across overloaded constructor variants.",
      "cleanCode": "class BaggageCapacityGuard {\n    private double minWeight;\n    private double maxWeight;\n\n    public BaggageCapacityGuard(double minWeight, double maxWeight) {\n        this.minWeight = minWeight;\n        this.maxWeight = maxWeight;\n    }\n\n    public double getMinWeight() {\n        return this.minWeight;\n    }\n\n    public void setMinWeight(double minWeight) {\n        if (minWeight > this.maxWeight) return;\n        this.minWeight = minWeight;\n    }\n}",
      "breakdown": [
        "<code>this(...) & Guard Clause</code>: Konstruktorlar zanjiri kod takrorlanishini yo'qotadi, Guard Clause esa chuqur if-else ichma-ichligini to'xtatadi.",
        "<code>BaggageCapacityGuard</code>: Mustahkam himoyalangan va qayta yuklangan toza sinf arxitekturasi."
      ],
      "pitfalls": "'this(...)' chaqiruvi konstruktor tanasida mutlaqo BIRINCHI qatorda joylashishi shart, aks holda kompilyatsiya xatosi ro'y beradi.",
      "cw2Tip": "CW2 tizimida turli toifadagi foydalanuvchilar (Guest, VIP, Corporate) uchun zanjirli konstruktorlardan foydalaning."
    }
  },
  {
    "id": 90,
    "tier": 6,
    "tierName": "6-Bosqich: Himoyaviy Dasturlash, Invariantlar va Guard Clauses",
    "sector": "76-90: Invariants & Guard Clauses",
    "title": {
      "uz": "90. WIUT SRS — Bank Hisobi 5 Ta Kritik Invariantini Himoyalash (Master)",
      "en": "90. WIUT SRS — Bank Account 5-Invariant Defensive Fortress Master"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nHisob raqami quyidagi 5 ta invariantni qat'iy saqlaydi: 1) Musbat to'ldirish, 2) Yetarli qoldiq, 3) Kunlik limit (5 mln), 4) Bloklanmagan holat, 5) PIN to'g'riligi. Barchasini bitta sinfda himoyalang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'SecureBankAccount' sinfini 'balance' va 'pin' xususiy maydonlari bilan yarating.\n\n2. 'public SecureBankAccount(double balance, String pin)' konstruktorini yozing.\n\n3. 5 ta invariantni tekshiruvchi 'public boolean withdrawWithPin(double amount, String pin)' metodida: summa musbatligi, PIN to'g'riligi va balans yetarliligini tekshirib, xato bo'lsa false, to'g'ri bo'lsa pulni yechib true qaytaring.\n\n4. 'public double getBalance()' getterini bering.\n\n5. 'Main' metodida yetarli bo'lmagan summa (2000000.0) yechishga urinib ko'rib, yechilmaganini va balans saqlanganini chiqaring.",
      "en": "📖 Real-World Scenario & Context\nMaster defensive fortress guarding positive deposit, balance, daily cap, frozen state, and PIN.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'SecureBankAccount' with balance and pin fields.\n\n2. Write constructor 'public SecureBankAccount(double balance, String pin)'.\n\n3. Implement fortress method 'withdrawWithPin(double amount, String pin)' guarding positive amount, PIN match, and sufficient funds.\n\n4. Implement accessor 'getBalance()'.\n\n5. In 'main', attempt overdraft withdrawal and print results."
    },
    "story": {
      "uz": "Hisob raqami quyidagi 5 ta invariantni qat'iy saqlaydi: 1) Musbat to'ldirish, 2) Yetarli qoldiq, 3) Kunlik limit (5 mln), 4) Bloklanmagan holat, 5) PIN to'g'riligi. Barchasini bitta sinfda himoyalang.",
      "en": "Master defensive fortress guarding positive deposit, balance, daily cap, frozen state, and PIN."
    },
    "steps": {
      "uz": [
        "'SecureBankAccount' sinfini 'balance' va 'pin' xususiy maydonlari bilan yarating.",
        "'public SecureBankAccount(double balance, String pin)' konstruktorini yozing.",
        "5 ta invariantni tekshiruvchi 'public boolean withdrawWithPin(double amount, String pin)' metodida: summa musbatligi, PIN to'g'riligi va balans yetarliligini tekshirib, xato bo'lsa false, to'g'ri bo'lsa pulni yechib true qaytaring.",
        "'public double getBalance()' getterini bering.",
        "'Main' metodida yetarli bo'lmagan summa (2000000.0) yechishga urinib ko'rib, yechilmaganini va balans saqlanganini chiqaring."
      ],
      "en": [
        "Declare class 'SecureBankAccount' with balance and pin fields.",
        "Write constructor 'public SecureBankAccount(double balance, String pin)'.",
        "Implement fortress method 'withdrawWithPin(double amount, String pin)' guarding positive amount, PIN match, and sufficient funds.",
        "Implement accessor 'getBalance()'.",
        "In 'main', attempt overdraft withdrawal and print results."
      ]
    },
    "requirements": {
      "classes": [
        "SecureBankAccount",
        "Main"
      ],
      "privateFields": [
        "balance",
        "pin"
      ],
      "methods": [
        "withdrawWithPin",
        "getBalance"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class SecureBankAccount {\n    // TODO: Maydonlar va Guard Clause orqali himoyalangan metodlarni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SecureBankAccount sba = new SecureBankAccount(1000000.0, \"1234\");\n        boolean ok = sba.withdrawWithPin(2000000.0, \"1234\");\n        System.out.println(\"Yechildimi: \" + ok + \" | Qoldiq: \" + sba.getBalance() + \" UZS\");\n    }\n}",
    "solution": "class SecureBankAccount {\n    private double balance;\n    private String pin;\n\n    public SecureBankAccount(double balance, String pin) {\n        this.balance = balance;\n        this.pin = pin;\n    }\n\n    public boolean withdrawWithPin(double amount, String pin) {\n        if (amount <= 0 || !this.pin.equals(pin) || amount > this.balance) return false;\n        this.balance -= amount;\n        return true;\n    }\n\n    public double getBalance() {\n        return this.balance;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SecureBankAccount sba = new SecureBankAccount(1000000.0, \"1234\");\n        boolean ok = sba.withdrawWithPin(2000000.0, \"1234\");\n        System.out.println(\"Yechildimi: \" + ok + \" | Qoldiq: \" + sba.getBalance() + \" UZS\");\n    }\n}",
    "sampleData": [
      "Yechildimi: false | Qoldiq: 1000000.0 UZS"
    ],
    "expectedOutput": "Yechildimi: false | Qoldiq: 1000000.0 UZS",
    "detailedSolution": {
      "theory": "Konstruktorlarni qayta yuklash (Overloading) turli parametrlar bilan ob'yekt yaratish imkonini beradi. 'this(...)' orqali barcha konstruktorlarni bitta markaziy konstruktorga yo'naltirish (Constructor Chaining) DRY qoidasiga amal qilishning eng toza usulidir.",
      "theoryEn": "Constructor chaining with this(...) centralizes initialization logic and avoids code duplication across overloaded constructor variants.",
      "cleanCode": "class SecureBankAccount {\n    private double balance;\n    private String pin;\n\n    public SecureBankAccount(double balance, String pin) {\n        this.balance = balance;\n        this.pin = pin;\n    }\n\n    public boolean withdrawWithPin(double amount, String pin) {\n        if (amount <= 0 || !this.pin.equals(pin) || amount > this.balance) return false;\n        this.balance -= amount;\n        return true;\n    }\n\n    public double getBalance() {\n        return this.balance;\n    }\n}",
      "breakdown": [
        "<code>this(...) & Guard Clause</code>: Konstruktorlar zanjiri kod takrorlanishini yo'qotadi, Guard Clause esa chuqur if-else ichma-ichligini to'xtatadi.",
        "<code>SecureBankAccount</code>: Mustahkam himoyalangan va qayta yuklangan toza sinf arxitekturasi."
      ],
      "pitfalls": "'this(...)' chaqiruvi konstruktor tanasida mutlaqo BIRINCHI qatorda joylashishi shart, aks holda kompilyatsiya xatosi ro'y beradi.",
      "cw2Tip": "CW2 tizimida turli toifadagi foydalanuvchilar (Guest, VIP, Corporate) uchun zanjirli konstruktorlardan foydalaning."
    }
  },
  {
    "id": 91,
    "tier": 7,
    "tierName": "7-Bosqich: Hisoblanuvchi Xususiyatlar (Computed Properties)",
    "sector": "91-105: Hisoblanuvchi Getterlar",
    "title": {
      "uz": "91. Uzum Market — Jami Qiymatni Hisoblash (getTotalValue)",
      "en": "91. Uzum Market — Batch Total Value Computed Getter"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nTovar partiyasi omborda turibdi. Narx va miqdor alohida saqlanadi, lekin jami qiymat maydon sifatida saqlanmasdan 'getTotalValue()' metodi ichida 'price * quantity' ko'rinishida hisoblab qaytarilishi kerak.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. ProductBatch klassini yarating va unga xususiy (private) double toifasidagi 'price', int toifasidagi 'quantity' maydonlarini qo'shing.\n\n2. Parametrlarni qabul qilib maydonlarga o'zlashtiruvchi 'public ProductBatch(double price, int quantity)' konstruktorini yozing.\n\n3. Ortiqcha maydon ochmasdan formulani dinamik hisoblab qaytaruvchi 'public double getTotalValue()' metodini yozing.\n\n4. 'Main' klassi 'main' metodida 'ProductBatch' ob'yektini parametrlar bilan yarating.\n\n5. Hisoblanuvchi xususiyatni namunadagidek konsolga chop eting.",
      "en": "📖 Real-World Scenario & Context\nProduct batches track price and quantity. Expose computed getTotalValue = price * quantity without redundant fields.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Create class 'ProductBatch' with private fields: double 'price', int 'quantity'.\n\n2. Write constructor 'public ProductBatch(double price, int quantity)'.\n\n3. Implement computed getter 'public double getTotalValue()' calculating derived value dynamically.\n\n4. In 'main', instantiate 'ProductBatch'.\n\n5. Print computed property to console."
    },
    "story": {
      "uz": "Tovar partiyasi omborda turibdi. Narx va miqdor alohida saqlanadi, lekin jami qiymat maydon sifatida saqlanmasdan 'getTotalValue()' metodi ichida 'price * quantity' ko'rinishida hisoblab qaytarilishi kerak.",
      "en": "Product batches track price and quantity. Expose computed getTotalValue = price * quantity without redundant fields."
    },
    "steps": {
      "uz": [
        "ProductBatch klassini yarating va unga xususiy (private) double toifasidagi 'price', int toifasidagi 'quantity' maydonlarini qo'shing.",
        "Parametrlarni qabul qilib maydonlarga o'zlashtiruvchi 'public ProductBatch(double price, int quantity)' konstruktorini yozing.",
        "Ortiqcha maydon ochmasdan formulani dinamik hisoblab qaytaruvchi 'public double getTotalValue()' metodini yozing.",
        "'Main' klassi 'main' metodida 'ProductBatch' ob'yektini parametrlar bilan yarating.",
        "Hisoblanuvchi xususiyatni namunadagidek konsolga chop eting."
      ],
      "en": [
        "Create class 'ProductBatch' with private fields: double 'price', int 'quantity'.",
        "Write constructor 'public ProductBatch(double price, int quantity)'.",
        "Implement computed getter 'public double getTotalValue()' calculating derived value dynamically.",
        "In 'main', instantiate 'ProductBatch'.",
        "Print computed property to console."
      ]
    },
    "requirements": {
      "classes": [
        "ProductBatch",
        "Main"
      ],
      "privateFields": [
        "price",
        "quantity"
      ],
      "constructors": [
        "ProductBatch"
      ],
      "methods": [
        "getTotalValue"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class ProductBatch {\n    private double price;\n    private int quantity;\n\n    public ProductBatch(double price, int quantity) {\n        this.price = price; this.quantity = quantity;\n    }\n\n    // TODO: Hisoblanuvchi getterni to'ldiring\n    public double getTotalValue() {\n        return 0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ProductBatch batch = new ProductBatch(150000.0, 4);\nSystem.out.println(\"Jami qiymat: \" + batch.getTotalValue() + \" so'm\");\n    }\n}",
    "solution": "class ProductBatch {\n    private double price;\n    private int quantity;\n\n    public ProductBatch(double price, int quantity) {\n        this.price = price; this.quantity = quantity;\n    }\n\n    public double getTotalValue() {\n        return this.price * this.quantity;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ProductBatch batch = new ProductBatch(150000.0, 4);\nSystem.out.println(\"Jami qiymat: \" + batch.getTotalValue() + \" so'm\");\n    }\n}",
    "sampleData": [
      "Jami qiymat: 600000.0 so'm"
    ],
    "expectedOutput": "Jami qiymat: 600000.0 so'm",
    "detailedSolution": {
      "theory": "Computed Property — sinfda alohida o'zgaruvchi ochmasdan, mavjud maydonlar asosida hisoblab beriladigan getterdir. Bu ma'lumotlar eskirishi (stale data) yoki nomutanosiblik xavfini yo'qotadi.",
      "theoryEn": "Computed properties prevent state desynchronization by deriving values on-the-fly rather than caching duplicate fields.",
      "cleanCode": "public double getTotalValue() {\n    return this.price * this.quantity;\n}",
      "breakdown": [
        "<code>getTotalValue()</code>: Maydon sifatida xotirada saqlanmasdan, mavjud qiymatlardan darhol hisoblab beriluvchi xususiyat."
      ],
      "pitfalls": "'totalValue' degan ortiqcha maydon ochmang, faqat 'getTotalValue()' metodida hisoblab bering.",
      "cw2Tip": "CW2 Console Order Applicationda buyurtma jami summasini har doim hisoblanuvchi getter orqali oling."
    }
  },
  {
    "id": 92,
    "tier": 7,
    "tierName": "7-Bosqich: Hisoblanuvchi Xususiyatlar (Computed Properties)",
    "sector": "91-105: Hisoblanuvchi Getterlar",
    "title": {
      "uz": "92. Payme — Keshbek Summasini Hisoblash (getCashbackAmount)",
      "en": "92. Payme — 1% Cashback Amount Computed Getter"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nPayme to'lovidan 1% keshbek beriladi. 'getCashbackAmount()' metodida to'lov summasining 1 foizini ('amount * 0.01') hisoblab qaytaring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. CashbackPayment klassini yarating va unga xususiy (private) double toifasidagi 'amount' maydonlarini qo'shing.\n\n2. Parametrlarni qabul qilib maydonlarga o'zlashtiruvchi 'public CashbackPayment(double amount)' konstruktorini yozing.\n\n3. Ortiqcha maydon ochmasdan formulani dinamik hisoblab qaytaruvchi 'public double getCashbackAmount()' metodini yozing.\n\n4. 'Main' klassi 'main' metodida 'CashbackPayment' ob'yektini parametrlar bilan yarating.\n\n5. Hisoblanuvchi xususiyatni namunadagidek konsolga chop eting.",
      "en": "📖 Real-World Scenario & Context\nPayme awards 1% cashback on payments. Implement getCashbackAmount returning amount * 0.01.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Create class 'CashbackPayment' with private fields: double 'amount'.\n\n2. Write constructor 'public CashbackPayment(double amount)'.\n\n3. Implement computed getter 'public double getCashbackAmount()' calculating derived value dynamically.\n\n4. In 'main', instantiate 'CashbackPayment'.\n\n5. Print computed property to console."
    },
    "story": {
      "uz": "Payme to'lovidan 1% keshbek beriladi. 'getCashbackAmount()' metodida to'lov summasining 1 foizini ('amount * 0.01') hisoblab qaytaring.",
      "en": "Payme awards 1% cashback on payments. Implement getCashbackAmount returning amount * 0.01."
    },
    "steps": {
      "uz": [
        "CashbackPayment klassini yarating va unga xususiy (private) double toifasidagi 'amount' maydonlarini qo'shing.",
        "Parametrlarni qabul qilib maydonlarga o'zlashtiruvchi 'public CashbackPayment(double amount)' konstruktorini yozing.",
        "Ortiqcha maydon ochmasdan formulani dinamik hisoblab qaytaruvchi 'public double getCashbackAmount()' metodini yozing.",
        "'Main' klassi 'main' metodida 'CashbackPayment' ob'yektini parametrlar bilan yarating.",
        "Hisoblanuvchi xususiyatni namunadagidek konsolga chop eting."
      ],
      "en": [
        "Create class 'CashbackPayment' with private fields: double 'amount'.",
        "Write constructor 'public CashbackPayment(double amount)'.",
        "Implement computed getter 'public double getCashbackAmount()' calculating derived value dynamically.",
        "In 'main', instantiate 'CashbackPayment'.",
        "Print computed property to console."
      ]
    },
    "requirements": {
      "classes": [
        "CashbackPayment",
        "Main"
      ],
      "privateFields": [
        "amount"
      ],
      "constructors": [
        "CashbackPayment"
      ],
      "methods": [
        "getCashbackAmount"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class CashbackPayment {\n    private double amount;\n\n    public CashbackPayment(double amount) {\n        this.amount = amount;\n    }\n\n    // TODO: Hisoblanuvchi getterni to'ldiring\n    public double getCashbackAmount() {\n        return 0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CashbackPayment cb = new CashbackPayment(500000.0);\nSystem.out.println(\"Keshbek: \" + cb.getCashbackAmount() + \" so'm\");\n    }\n}",
    "solution": "class CashbackPayment {\n    private double amount;\n\n    public CashbackPayment(double amount) {\n        this.amount = amount;\n    }\n\n    public double getCashbackAmount() {\n        return this.amount * 0.01;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CashbackPayment cb = new CashbackPayment(500000.0);\nSystem.out.println(\"Keshbek: \" + cb.getCashbackAmount() + \" so'm\");\n    }\n}",
    "sampleData": [
      "Keshbek: 5000.0 so'm"
    ],
    "expectedOutput": "Keshbek: 5000.0 so'm",
    "detailedSolution": {
      "theory": "Keshbek miqdori to'lov summasiga to'g'ridan-to'g'ri bog'liq bo'lib, hisoblanuvchi xususiyat sifatida ifodalanadi.",
      "theoryEn": "Reward calculations derive deterministically from base payment amounts without requiring persistent fields.",
      "cleanCode": "public double getCashbackAmount() {\n    return this.amount * 0.01;\n}",
      "breakdown": [
        "<code>getCashbackAmount()</code>: Maydon sifatida xotirada saqlanmasdan, mavjud qiymatlardan darhol hisoblab beriluvchi xususiyat."
      ],
      "pitfalls": "1 foiz 0.01 ga ko'paytiriladi, 0.1 emas (0.1 bu 10 foiz bo'lib qoladi).",
      "cw2Tip": "Sodiqlik tizimlarida mukofotlarni hisoblanuvchi metodlar orqali ko'rsating."
    }
  },
  {
    "id": 93,
    "tier": 7,
    "tierName": "7-Bosqich: Hisoblanuvchi Xususiyatlar (Computed Properties)",
    "sector": "91-105: Hisoblanuvchi Getterlar",
    "title": {
      "uz": "93. Yandex Go — Safarning Jami Narxi (getTotalFare)",
      "en": "93. Yandex Go — Total Fare Computed Getter"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSafar narxi bazaviy narx va har bir kilometr uchun 2000 so'm qo'shilishidan hosil bo'ladi. 'getTotalFare()' metodi 'baseFare + (distanceKm * 2000.0)' formulasini hisoblab bersin.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. RideBill klassini yarating va unga xususiy (private) double toifasidagi 'baseFare', double toifasidagi 'distanceKm' maydonlarini qo'shing.\n\n2. Parametrlarni qabul qilib maydonlarga o'zlashtiruvchi 'public RideBill(double baseFare, double distanceKm)' konstruktorini yozing.\n\n3. Ortiqcha maydon ochmasdan formulani dinamik hisoblab qaytaruvchi 'public double getTotalFare()' metodini yozing.\n\n4. 'Main' klassi 'main' metodida 'RideBill' ob'yektini parametrlar bilan yarating.\n\n5. Hisoblanuvchi xususiyatni namunadagidek konsolga chop eting.",
      "en": "📖 Real-World Scenario & Context\nYandex Go calculates total fare via baseFare + (distanceKm * 2000.0). Implement getTotalFare.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Create class 'RideBill' with private fields: double 'baseFare', double 'distanceKm'.\n\n2. Write constructor 'public RideBill(double baseFare, double distanceKm)'.\n\n3. Implement computed getter 'public double getTotalFare()' calculating derived value dynamically.\n\n4. In 'main', instantiate 'RideBill'.\n\n5. Print computed property to console."
    },
    "story": {
      "uz": "Safar narxi bazaviy narx va har bir kilometr uchun 2000 so'm qo'shilishidan hosil bo'ladi. 'getTotalFare()' metodi 'baseFare + (distanceKm * 2000.0)' formulasini hisoblab bersin.",
      "en": "Yandex Go calculates total fare via baseFare + (distanceKm * 2000.0). Implement getTotalFare."
    },
    "steps": {
      "uz": [
        "RideBill klassini yarating va unga xususiy (private) double toifasidagi 'baseFare', double toifasidagi 'distanceKm' maydonlarini qo'shing.",
        "Parametrlarni qabul qilib maydonlarga o'zlashtiruvchi 'public RideBill(double baseFare, double distanceKm)' konstruktorini yozing.",
        "Ortiqcha maydon ochmasdan formulani dinamik hisoblab qaytaruvchi 'public double getTotalFare()' metodini yozing.",
        "'Main' klassi 'main' metodida 'RideBill' ob'yektini parametrlar bilan yarating.",
        "Hisoblanuvchi xususiyatni namunadagidek konsolga chop eting."
      ],
      "en": [
        "Create class 'RideBill' with private fields: double 'baseFare', double 'distanceKm'.",
        "Write constructor 'public RideBill(double baseFare, double distanceKm)'.",
        "Implement computed getter 'public double getTotalFare()' calculating derived value dynamically.",
        "In 'main', instantiate 'RideBill'.",
        "Print computed property to console."
      ]
    },
    "requirements": {
      "classes": [
        "RideBill",
        "Main"
      ],
      "privateFields": [
        "baseFare",
        "distanceKm"
      ],
      "constructors": [
        "RideBill"
      ],
      "methods": [
        "getTotalFare"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class RideBill {\n    private double baseFare;\n    private double distanceKm;\n\n    public RideBill(double baseFare, double distanceKm) {\n        this.baseFare = baseFare; this.distanceKm = distanceKm;\n    }\n\n    // TODO: Hisoblanuvchi getterni to'ldiring\n    public double getTotalFare() {\n        return 0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        RideBill bill = new RideBill(6000.0, 5.0);\nSystem.out.println(\"Yakuniy chek: \" + bill.getTotalFare() + \" so'm\");\n    }\n}",
    "solution": "class RideBill {\n    private double baseFare;\n    private double distanceKm;\n\n    public RideBill(double baseFare, double distanceKm) {\n        this.baseFare = baseFare; this.distanceKm = distanceKm;\n    }\n\n    public double getTotalFare() {\n        return this.baseFare + (this.distanceKm * 2000.0);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        RideBill bill = new RideBill(6000.0, 5.0);\nSystem.out.println(\"Yakuniy chek: \" + bill.getTotalFare() + \" so'm\");\n    }\n}",
    "sampleData": [
      "Yakuniy chek: 16000.0 so'm"
    ],
    "expectedOutput": "Yakuniy chek: 16000.0 so'm",
    "detailedSolution": {
      "theory": "Birlashgan tarif hisob-kitoblarida komponentlar saqlanadi, yakuniy summa esa chaqirilganda hosil qilinadi.",
      "theoryEn": "Multi-parameter formulas are computed lazily, guaranteeing total consistency with input fields.",
      "cleanCode": "public double getTotalFare() {\n    return this.baseFare + (this.distanceKm * 2000.0);\n}",
      "breakdown": [
        "<code>getTotalFare()</code>: Maydon sifatida xotirada saqlanmasdan, mavjud qiymatlardan darhol hisoblab beriluvchi xususiyat."
      ],
      "pitfalls": "Qavslar tartibi va arifmetik amallarga e'tibor bering.",
      "cw2Tip": "Taksi yoki yetkazish xizmatlari chekini hisoblovchi getterlar qulay arxitektura namunasidir."
    }
  },
  {
    "id": 94,
    "tier": 7,
    "tierName": "7-Bosqich: Hisoblanuvchi Xususiyatlar (Computed Properties)",
    "sector": "91-105: Hisoblanuvchi Getterlar",
    "title": {
      "uz": "94. Korzinka — Chegirmali Narxni Hisoblash (getFinalPrice)",
      "en": "94. Korzinka — Discounted Final Price Computed Getter"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nAsl narx va chegirma foizi asosida mijoz to'lashi kerak bo'lgan summani hisoblab beruvchi 'getFinalPrice()' metodini yozing: 'price - (price * discountPct / 100.0)'.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. DiscountedProduct klassini yarating va unga xususiy (private) double toifasidagi 'price', double toifasidagi 'discountPct' maydonlarini qo'shing.\n\n2. Parametrlarni qabul qilib maydonlarga o'zlashtiruvchi 'public DiscountedProduct(double price, double discountPct)' konstruktorini yozing.\n\n3. Ortiqcha maydon ochmasdan formulani dinamik hisoblab qaytaruvchi 'public double getFinalPrice()' metodini yozing.\n\n4. 'Main' klassi 'main' metodida 'DiscountedProduct' ob'yektini parametrlar bilan yarating.\n\n5. Hisoblanuvchi xususiyatni namunadagidek konsolga chop eting.",
      "en": "📖 Real-World Scenario & Context\nKorzinka computes final price as price - (price * discountPct / 100.0). Implement getFinalPrice.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Create class 'DiscountedProduct' with private fields: double 'price', double 'discountPct'.\n\n2. Write constructor 'public DiscountedProduct(double price, double discountPct)'.\n\n3. Implement computed getter 'public double getFinalPrice()' calculating derived value dynamically.\n\n4. In 'main', instantiate 'DiscountedProduct'.\n\n5. Print computed property to console."
    },
    "story": {
      "uz": "Asl narx va chegirma foizi asosida mijoz to'lashi kerak bo'lgan summani hisoblab beruvchi 'getFinalPrice()' metodini yozing: 'price - (price * discountPct / 100.0)'.",
      "en": "Korzinka computes final price as price - (price * discountPct / 100.0). Implement getFinalPrice."
    },
    "steps": {
      "uz": [
        "DiscountedProduct klassini yarating va unga xususiy (private) double toifasidagi 'price', double toifasidagi 'discountPct' maydonlarini qo'shing.",
        "Parametrlarni qabul qilib maydonlarga o'zlashtiruvchi 'public DiscountedProduct(double price, double discountPct)' konstruktorini yozing.",
        "Ortiqcha maydon ochmasdan formulani dinamik hisoblab qaytaruvchi 'public double getFinalPrice()' metodini yozing.",
        "'Main' klassi 'main' metodida 'DiscountedProduct' ob'yektini parametrlar bilan yarating.",
        "Hisoblanuvchi xususiyatni namunadagidek konsolga chop eting."
      ],
      "en": [
        "Create class 'DiscountedProduct' with private fields: double 'price', double 'discountPct'.",
        "Write constructor 'public DiscountedProduct(double price, double discountPct)'.",
        "Implement computed getter 'public double getFinalPrice()' calculating derived value dynamically.",
        "In 'main', instantiate 'DiscountedProduct'.",
        "Print computed property to console."
      ]
    },
    "requirements": {
      "classes": [
        "DiscountedProduct",
        "Main"
      ],
      "privateFields": [
        "price",
        "discountPct"
      ],
      "constructors": [
        "DiscountedProduct"
      ],
      "methods": [
        "getFinalPrice"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class DiscountedProduct {\n    private double price;\n    private double discountPct;\n\n    public DiscountedProduct(double price, double discountPct) {\n        this.price = price; this.discountPct = discountPct;\n    }\n\n    // TODO: Hisoblanuvchi getterni to'ldiring\n    public double getFinalPrice() {\n        return 0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DiscountedProduct dp = new DiscountedProduct(200000.0, 15.0);\nSystem.out.println(\"Chegirmali narx: \" + dp.getFinalPrice() + \" so'm\");\n    }\n}",
    "solution": "class DiscountedProduct {\n    private double price;\n    private double discountPct;\n\n    public DiscountedProduct(double price, double discountPct) {\n        this.price = price; this.discountPct = discountPct;\n    }\n\n    public double getFinalPrice() {\n        return this.price - (this.price * this.discountPct / 100.0);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DiscountedProduct dp = new DiscountedProduct(200000.0, 15.0);\nSystem.out.println(\"Chegirmali narx: \" + dp.getFinalPrice() + \" so'm\");\n    }\n}",
    "sampleData": [
      "Chegirmali narx: 170000.0 so'm"
    ],
    "expectedOutput": "Chegirmali narx: 170000.0 so'm",
    "detailedSolution": {
      "theory": "Chegirma foizi o'zgarsa yakuniy narx ham darhol to'g'ri qaytadi, chunki alohida static qiymat saqlanmaydi.",
      "theoryEn": "Dynamic price recalculations react instantly to discount changes when using computed getters.",
      "cleanCode": "public double getFinalPrice() {\n    return this.price - (this.price * this.discountPct / 100.0);\n}",
      "breakdown": [
        "<code>getFinalPrice()</code>: Maydon sifatida xotirada saqlanmasdan, mavjud qiymatlardan darhol hisoblab beriluvchi xususiyat."
      ],
      "pitfalls": "'discountPct / 100.0' da o'nlik kasr (100.0) bilan bo'ling.",
      "cw2Tip": "CW2 savdo aravachasida chegirmali tovarlarni hisoblashda aynan shu formuladan foydalaniladi."
    }
  },
  {
    "id": 95,
    "tier": 7,
    "tierName": "7-Bosqich: Hisoblanuvchi Xususiyatlar (Computed Properties)",
    "sector": "91-105: Hisoblanuvchi Getterlar",
    "title": {
      "uz": "95. Click — To'lov Komissiyasini Hisoblash (getFeeAmount)",
      "en": "95. Click — 0.5% Payment Fee Computed Getter"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nKommunal to'lovdan 0.5% xizmat haqi olinadi. 'getFeeAmount()' metodida 'amount * 0.005' qiymatini qaytaring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. BillTransaction klassini yarating va unga xususiy (private) double toifasidagi 'amount' maydonlarini qo'shing.\n\n2. Parametrlarni qabul qilib maydonlarga o'zlashtiruvchi 'public BillTransaction(double amount)' konstruktorini yozing.\n\n3. Ortiqcha maydon ochmasdan formulani dinamik hisoblab qaytaruvchi 'public double getFeeAmount()' metodini yozing.\n\n4. 'Main' klassi 'main' metodida 'BillTransaction' ob'yektini parametrlar bilan yarating.\n\n5. Hisoblanuvchi xususiyatni namunadagidek konsolga chop eting.",
      "en": "📖 Real-World Scenario & Context\nUtility bills incur 0.5% commission. Provide getFeeAmount returning amount * 0.005.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Create class 'BillTransaction' with private fields: double 'amount'.\n\n2. Write constructor 'public BillTransaction(double amount)'.\n\n3. Implement computed getter 'public double getFeeAmount()' calculating derived value dynamically.\n\n4. In 'main', instantiate 'BillTransaction'.\n\n5. Print computed property to console."
    },
    "story": {
      "uz": "Kommunal to'lovdan 0.5% xizmat haqi olinadi. 'getFeeAmount()' metodida 'amount * 0.005' qiymatini qaytaring.",
      "en": "Utility bills incur 0.5% commission. Provide getFeeAmount returning amount * 0.005."
    },
    "steps": {
      "uz": [
        "BillTransaction klassini yarating va unga xususiy (private) double toifasidagi 'amount' maydonlarini qo'shing.",
        "Parametrlarni qabul qilib maydonlarga o'zlashtiruvchi 'public BillTransaction(double amount)' konstruktorini yozing.",
        "Ortiqcha maydon ochmasdan formulani dinamik hisoblab qaytaruvchi 'public double getFeeAmount()' metodini yozing.",
        "'Main' klassi 'main' metodida 'BillTransaction' ob'yektini parametrlar bilan yarating.",
        "Hisoblanuvchi xususiyatni namunadagidek konsolga chop eting."
      ],
      "en": [
        "Create class 'BillTransaction' with private fields: double 'amount'.",
        "Write constructor 'public BillTransaction(double amount)'.",
        "Implement computed getter 'public double getFeeAmount()' calculating derived value dynamically.",
        "In 'main', instantiate 'BillTransaction'.",
        "Print computed property to console."
      ]
    },
    "requirements": {
      "classes": [
        "BillTransaction",
        "Main"
      ],
      "privateFields": [
        "amount"
      ],
      "constructors": [
        "BillTransaction"
      ],
      "methods": [
        "getFeeAmount"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class BillTransaction {\n    private double amount;\n\n    public BillTransaction(double amount) {\n        this.amount = amount;\n    }\n\n    // TODO: Hisoblanuvchi getterni to'ldiring\n    public double getFeeAmount() {\n        return 0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BillTransaction bill = new BillTransaction(300000.0);\nSystem.out.println(\"Xizmat haqi: \" + bill.getFeeAmount() + \" so'm\");\n    }\n}",
    "solution": "class BillTransaction {\n    private double amount;\n\n    public BillTransaction(double amount) {\n        this.amount = amount;\n    }\n\n    public double getFeeAmount() {\n        return this.amount * 0.005;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BillTransaction bill = new BillTransaction(300000.0);\nSystem.out.println(\"Xizmat haqi: \" + bill.getFeeAmount() + \" so'm\");\n    }\n}",
    "sampleData": [
      "Xizmat haqi: 1500.0 so'm"
    ],
    "expectedOutput": "Xizmat haqi: 1500.0 so'm",
    "detailedSolution": {
      "theory": "Komissiya miqdori tranzaksiya summasidan kelib chiquvchi hisoblanuvchi natijadir.",
      "theoryEn": "Transaction processing surcharges are calculated dynamically from transaction amounts.",
      "cleanCode": "public double getFeeAmount() {\n    return this.amount * 0.005;\n}",
      "breakdown": [
        "<code>getFeeAmount()</code>: Maydon sifatida xotirada saqlanmasdan, mavjud qiymatlardan darhol hisoblab beriluvchi xususiyat."
      ],
      "pitfalls": "0.5% bu 0.005 koeffitsiyent ekanligiga diqqat qiling.",
      "cw2Tip": "Bank komissiyalarini hisoblashda sonli koeffitsiyentlarni to'g'ri tanlang."
    }
  },
  {
    "id": 96,
    "tier": 7,
    "tierName": "7-Bosqich: Hisoblanuvchi Xususiyatlar (Computed Properties)",
    "sector": "91-105: Hisoblanuvchi Getterlar",
    "title": {
      "uz": "96. Asaxiy — Kitobni O'qishga Ketadigan Taxminiy Vaqt",
      "en": "96. Asaxiy — Estimated Reading Hours Computed Getter"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nO'rtacha 1 soatda 30 bet o'qilsa, kitob hajmi bo'yicha ketadigan vaqtni 'getEstimatedReadingHours()' metodida 'pageCount / 30.0' qilib hisoblang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. BookReading klassini yarating va unga xususiy (private) int toifasidagi 'pageCount' maydonlarini qo'shing.\n\n2. Parametrlarni qabul qilib maydonlarga o'zlashtiruvchi 'public BookReading(int pageCount)' konstruktorini yozing.\n\n3. Ortiqcha maydon ochmasdan formulani dinamik hisoblab qaytaruvchi 'public double getEstimatedReadingHours()' metodini yozing.\n\n4. 'Main' klassi 'main' metodida 'BookReading' ob'yektini parametrlar bilan yarating.\n\n5. Hisoblanuvchi xususiyatni namunadagidek konsolga chop eting.",
      "en": "📖 Real-World Scenario & Context\nReading 30 pages/hour on average, compute read time via getEstimatedReadingHours.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Create class 'BookReading' with private fields: int 'pageCount'.\n\n2. Write constructor 'public BookReading(int pageCount)'.\n\n3. Implement computed getter 'public double getEstimatedReadingHours()' calculating derived value dynamically.\n\n4. In 'main', instantiate 'BookReading'.\n\n5. Print computed property to console."
    },
    "story": {
      "uz": "O'rtacha 1 soatda 30 bet o'qilsa, kitob hajmi bo'yicha ketadigan vaqtni 'getEstimatedReadingHours()' metodida 'pageCount / 30.0' qilib hisoblang.",
      "en": "Reading 30 pages/hour on average, compute read time via getEstimatedReadingHours."
    },
    "steps": {
      "uz": [
        "BookReading klassini yarating va unga xususiy (private) int toifasidagi 'pageCount' maydonlarini qo'shing.",
        "Parametrlarni qabul qilib maydonlarga o'zlashtiruvchi 'public BookReading(int pageCount)' konstruktorini yozing.",
        "Ortiqcha maydon ochmasdan formulani dinamik hisoblab qaytaruvchi 'public double getEstimatedReadingHours()' metodini yozing.",
        "'Main' klassi 'main' metodida 'BookReading' ob'yektini parametrlar bilan yarating.",
        "Hisoblanuvchi xususiyatni namunadagidek konsolga chop eting."
      ],
      "en": [
        "Create class 'BookReading' with private fields: int 'pageCount'.",
        "Write constructor 'public BookReading(int pageCount)'.",
        "Implement computed getter 'public double getEstimatedReadingHours()' calculating derived value dynamically.",
        "In 'main', instantiate 'BookReading'.",
        "Print computed property to console."
      ]
    },
    "requirements": {
      "classes": [
        "BookReading",
        "Main"
      ],
      "privateFields": [
        "pageCount"
      ],
      "constructors": [
        "BookReading"
      ],
      "methods": [
        "getEstimatedReadingHours"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class BookReading {\n    private int pageCount;\n\n    public BookReading(int pageCount) {\n        this.pageCount = pageCount;\n    }\n\n    // TODO: Hisoblanuvchi getterni to'ldiring\n    public double getEstimatedReadingHours() {\n        return 0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BookReading br = new BookReading(150);\nSystem.out.println(\"O'qish vaqti: \" + br.getEstimatedReadingHours() + \" soat\");\n    }\n}",
    "solution": "class BookReading {\n    private int pageCount;\n\n    public BookReading(int pageCount) {\n        this.pageCount = pageCount;\n    }\n\n    public double getEstimatedReadingHours() {\n        return this.pageCount / 30.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BookReading br = new BookReading(150);\nSystem.out.println(\"O'qish vaqti: \" + br.getEstimatedReadingHours() + \" soat\");\n    }\n}",
    "sampleData": [
      "O'qish vaqti: 5.0 soat"
    ],
    "expectedOutput": "O'qish vaqti: 5.0 soat",
    "detailedSolution": {
      "theory": "Int turidagi sahifalar sonini double ga bo'lish orqali o'nlik kasrli vaqt ko'rsatkichi hosil qilinadi.",
      "theoryEn": "Dividing integer page metrics by a floating point rate yields precise fractional reading hours.",
      "cleanCode": "public double getEstimatedReadingHours() {\n    return this.pageCount / 30.0;\n}",
      "breakdown": [
        "<code>getEstimatedReadingHours()</code>: Maydon sifatida xotirada saqlanmasdan, mavjud qiymatlardan darhol hisoblab beriluvchi xususiyat."
      ],
      "pitfalls": "'pageCount / 30' emas, 'pageCount / 30.0' deb yozing, aks holda kasr qismi yo'qoladi.",
      "cw2Tip": "Bo'lish amallarida o'nlik kasr aniqligini saqlash uchun '.0' qo'shish qoidasini unutmang."
    }
  },
  {
    "id": 97,
    "tier": 7,
    "tierName": "7-Bosqich: Hisoblanuvchi Xususiyatlar (Computed Properties)",
    "sector": "91-105: Hisoblanuvchi Getterlar",
    "title": {
      "uz": "97. Uztelecom — Trafik Sarflanish Foizi (getUsagePercentage)",
      "en": "97. Uztelecom — Traffic Usage Percentage Computed Getter"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nIshlatilgan megabayt va jami limit nisbatini foizda hisoblovchi 'getUsagePercentage()' metodini yozing: '(usedMb * 100.0) / totalMb'.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. DataUsage klassini yarating va unga xususiy (private) double toifasidagi 'usedMb', double toifasidagi 'totalMb' maydonlarini qo'shing.\n\n2. Parametrlarni qabul qilib maydonlarga o'zlashtiruvchi 'public DataUsage(double usedMb, double totalMb)' konstruktorini yozing.\n\n3. Ortiqcha maydon ochmasdan formulani dinamik hisoblab qaytaruvchi 'public double getUsagePercentage()' metodini yozing.\n\n4. 'Main' klassi 'main' metodida 'DataUsage' ob'yektini parametrlar bilan yarating.\n\n5. Hisoblanuvchi xususiyatni namunadagidek konsolga chop eting.",
      "en": "📖 Real-World Scenario & Context\nTrack consumption ratio using getUsagePercentage returning (usedMb * 100.0) / totalMb.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Create class 'DataUsage' with private fields: double 'usedMb', double 'totalMb'.\n\n2. Write constructor 'public DataUsage(double usedMb, double totalMb)'.\n\n3. Implement computed getter 'public double getUsagePercentage()' calculating derived value dynamically.\n\n4. In 'main', instantiate 'DataUsage'.\n\n5. Print computed property to console."
    },
    "story": {
      "uz": "Ishlatilgan megabayt va jami limit nisbatini foizda hisoblovchi 'getUsagePercentage()' metodini yozing: '(usedMb * 100.0) / totalMb'.",
      "en": "Track consumption ratio using getUsagePercentage returning (usedMb * 100.0) / totalMb."
    },
    "steps": {
      "uz": [
        "DataUsage klassini yarating va unga xususiy (private) double toifasidagi 'usedMb', double toifasidagi 'totalMb' maydonlarini qo'shing.",
        "Parametrlarni qabul qilib maydonlarga o'zlashtiruvchi 'public DataUsage(double usedMb, double totalMb)' konstruktorini yozing.",
        "Ortiqcha maydon ochmasdan formulani dinamik hisoblab qaytaruvchi 'public double getUsagePercentage()' metodini yozing.",
        "'Main' klassi 'main' metodida 'DataUsage' ob'yektini parametrlar bilan yarating.",
        "Hisoblanuvchi xususiyatni namunadagidek konsolga chop eting."
      ],
      "en": [
        "Create class 'DataUsage' with private fields: double 'usedMb', double 'totalMb'.",
        "Write constructor 'public DataUsage(double usedMb, double totalMb)'.",
        "Implement computed getter 'public double getUsagePercentage()' calculating derived value dynamically.",
        "In 'main', instantiate 'DataUsage'.",
        "Print computed property to console."
      ]
    },
    "requirements": {
      "classes": [
        "DataUsage",
        "Main"
      ],
      "privateFields": [
        "usedMb",
        "totalMb"
      ],
      "constructors": [
        "DataUsage"
      ],
      "methods": [
        "getUsagePercentage"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class DataUsage {\n    private double usedMb;\n    private double totalMb;\n\n    public DataUsage(double usedMb, double totalMb) {\n        this.usedMb = usedMb; this.totalMb = totalMb;\n    }\n\n    // TODO: Hisoblanuvchi getterni to'ldiring\n    public double getUsagePercentage() {\n        return 0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DataUsage du = new DataUsage(2500.0, 10000.0);\nSystem.out.println(\"Sarflanish: \" + du.getUsagePercentage() + \"%\");\n    }\n}",
    "solution": "class DataUsage {\n    private double usedMb;\n    private double totalMb;\n\n    public DataUsage(double usedMb, double totalMb) {\n        this.usedMb = usedMb; this.totalMb = totalMb;\n    }\n\n    public double getUsagePercentage() {\n        return (this.usedMb * 100.0) / this.totalMb;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DataUsage du = new DataUsage(2500.0, 10000.0);\nSystem.out.println(\"Sarflanish: \" + du.getUsagePercentage() + \"%\");\n    }\n}",
    "sampleData": [
      "Sarflanish: 25.0%"
    ],
    "expectedOutput": "Sarflanish: 25.0%",
    "detailedSolution": {
      "theory": "Foiz nisbatini hisoblash formulasi getterda bir qatorda chiroyli ifodalanadi.",
      "theoryEn": "Usage ratios are cleanly encapsulated in computed getters without storing intermediate percentages.",
      "cleanCode": "public double getUsagePercentage() {\n    return (this.usedMb * 100.0) / this.totalMb;\n}",
      "breakdown": [
        "<code>getUsagePercentage()</code>: Maydon sifatida xotirada saqlanmasdan, mavjud qiymatlardan darhol hisoblab beriluvchi xususiyat."
      ],
      "pitfalls": "Foizga ko'paytirishni (100.0) bo'lishdan oldin bajaring.",
      "cw2Tip": "Statistika va progress ko'rsatkichlarini getter orqali hisoblash qulaydir."
    }
  },
  {
    "id": 98,
    "tier": 7,
    "tierName": "7-Bosqich: Hisoblanuvchi Xususiyatlar (Computed Properties)",
    "sector": "91-105: Hisoblanuvchi Getterlar",
    "title": {
      "uz": "98. Texnomart — Foyda Marjasini Hisoblash (getProfitMargin)",
      "en": "98. Texnomart — Profit Margin Computed Getter"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSotish narxi va tannarx o'rtasidagi sof foydani 'getProfitMargin()' metodida 'sellingPrice - costPrice' formulasi bilan qaytaring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. SalesItem klassini yarating va unga xususiy (private) double toifasidagi 'sellingPrice', double toifasidagi 'costPrice' maydonlarini qo'shing.\n\n2. Parametrlarni qabul qilib maydonlarga o'zlashtiruvchi 'public SalesItem(double sellingPrice, double costPrice)' konstruktorini yozing.\n\n3. Ortiqcha maydon ochmasdan formulani dinamik hisoblab qaytaruvchi 'public double getProfitMargin()' metodini yozing.\n\n4. 'Main' klassi 'main' metodida 'SalesItem' ob'yektini parametrlar bilan yarating.\n\n5. Hisoblanuvchi xususiyatni namunadagidek konsolga chop eting.",
      "en": "📖 Real-World Scenario & Context\nCompute net product profit via getProfitMargin returning sellingPrice - costPrice.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Create class 'SalesItem' with private fields: double 'sellingPrice', double 'costPrice'.\n\n2. Write constructor 'public SalesItem(double sellingPrice, double costPrice)'.\n\n3. Implement computed getter 'public double getProfitMargin()' calculating derived value dynamically.\n\n4. In 'main', instantiate 'SalesItem'.\n\n5. Print computed property to console."
    },
    "story": {
      "uz": "Sotish narxi va tannarx o'rtasidagi sof foydani 'getProfitMargin()' metodida 'sellingPrice - costPrice' formulasi bilan qaytaring.",
      "en": "Compute net product profit via getProfitMargin returning sellingPrice - costPrice."
    },
    "steps": {
      "uz": [
        "SalesItem klassini yarating va unga xususiy (private) double toifasidagi 'sellingPrice', double toifasidagi 'costPrice' maydonlarini qo'shing.",
        "Parametrlarni qabul qilib maydonlarga o'zlashtiruvchi 'public SalesItem(double sellingPrice, double costPrice)' konstruktorini yozing.",
        "Ortiqcha maydon ochmasdan formulani dinamik hisoblab qaytaruvchi 'public double getProfitMargin()' metodini yozing.",
        "'Main' klassi 'main' metodida 'SalesItem' ob'yektini parametrlar bilan yarating.",
        "Hisoblanuvchi xususiyatni namunadagidek konsolga chop eting."
      ],
      "en": [
        "Create class 'SalesItem' with private fields: double 'sellingPrice', double 'costPrice'.",
        "Write constructor 'public SalesItem(double sellingPrice, double costPrice)'.",
        "Implement computed getter 'public double getProfitMargin()' calculating derived value dynamically.",
        "In 'main', instantiate 'SalesItem'.",
        "Print computed property to console."
      ]
    },
    "requirements": {
      "classes": [
        "SalesItem",
        "Main"
      ],
      "privateFields": [
        "sellingPrice",
        "costPrice"
      ],
      "constructors": [
        "SalesItem"
      ],
      "methods": [
        "getProfitMargin"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class SalesItem {\n    private double sellingPrice;\n    private double costPrice;\n\n    public SalesItem(double sellingPrice, double costPrice) {\n        this.sellingPrice = sellingPrice; this.costPrice = costPrice;\n    }\n\n    // TODO: Hisoblanuvchi getterni to'ldiring\n    public double getProfitMargin() {\n        return 0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SalesItem item = new SalesItem(4500000.0, 3800000.0);\nSystem.out.println(\"Foyda: \" + item.getProfitMargin() + \" so'm\");\n    }\n}",
    "solution": "class SalesItem {\n    private double sellingPrice;\n    private double costPrice;\n\n    public SalesItem(double sellingPrice, double costPrice) {\n        this.sellingPrice = sellingPrice; this.costPrice = costPrice;\n    }\n\n    public double getProfitMargin() {\n        return this.sellingPrice - this.costPrice;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SalesItem item = new SalesItem(4500000.0, 3800000.0);\nSystem.out.println(\"Foyda: \" + item.getProfitMargin() + \" so'm\");\n    }\n}",
    "sampleData": [
      "Foyda: 700000.0 so'm"
    ],
    "expectedOutput": "Foyda: 700000.0 so'm",
    "detailedSolution": {
      "theory": "Foyda marjasi alohida saqlanmasligi kerak, chunki tannarx o'zgarganda xato yuzaga keladi.",
      "theoryEn": "Profit margin is derived dynamically to prevent stale financial state upon price updates.",
      "cleanCode": "public double getProfitMargin() {\n    return this.sellingPrice - this.costPrice;\n}",
      "breakdown": [
        "<code>getProfitMargin()</code>: Maydon sifatida xotirada saqlanmasdan, mavjud qiymatlardan darhol hisoblab beriluvchi xususiyat."
      ],
      "pitfalls": "Sotish narxidan tannarxni ayirish ketma-ketligini adashtirmang.",
      "cw2Tip": "Savdo va moliya dasturlarida hosilaviy ko'rsatkichlarni doimo getterda hisoblang."
    }
  },
  {
    "id": 99,
    "tier": 7,
    "tierName": "7-Bosqich: Hisoblanuvchi Xususiyatlar (Computed Properties)",
    "sector": "91-105: Hisoblanuvchi Getterlar",
    "title": {
      "uz": "99. Milliy Bank — Yillik Foiz Daromadi (getAnnualInterestPayout)",
      "en": "99. Milliy Bank — Annual Interest Payout Computed Getter"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nOmonat summasi va yillik stavka bo'yicha mijoz oladigan yillik daromadni 'getAnnualInterestPayout()' orqali hisoblang: 'depositAmount * interestRate / 100.0'.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. DepositEarning klassini yarating va unga xususiy (private) double toifasidagi 'depositAmount', double toifasidagi 'interestRate' maydonlarini qo'shing.\n\n2. Parametrlarni qabul qilib maydonlarga o'zlashtiruvchi 'public DepositEarning(double depositAmount, double interestRate)' konstruktorini yozing.\n\n3. Ortiqcha maydon ochmasdan formulani dinamik hisoblab qaytaruvchi 'public double getAnnualInterestPayout()' metodini yozing.\n\n4. 'Main' klassi 'main' metodida 'DepositEarning' ob'yektini parametrlar bilan yarating.\n\n5. Hisoblanuvchi xususiyatni namunadagidek konsolga chop eting.",
      "en": "📖 Real-World Scenario & Context\nCompute annual deposit yield using getAnnualInterestPayout = depositAmount * interestRate / 100.0.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Create class 'DepositEarning' with private fields: double 'depositAmount', double 'interestRate'.\n\n2. Write constructor 'public DepositEarning(double depositAmount, double interestRate)'.\n\n3. Implement computed getter 'public double getAnnualInterestPayout()' calculating derived value dynamically.\n\n4. In 'main', instantiate 'DepositEarning'.\n\n5. Print computed property to console."
    },
    "story": {
      "uz": "Omonat summasi va yillik stavka bo'yicha mijoz oladigan yillik daromadni 'getAnnualInterestPayout()' orqali hisoblang: 'depositAmount * interestRate / 100.0'.",
      "en": "Compute annual deposit yield using getAnnualInterestPayout = depositAmount * interestRate / 100.0."
    },
    "steps": {
      "uz": [
        "DepositEarning klassini yarating va unga xususiy (private) double toifasidagi 'depositAmount', double toifasidagi 'interestRate' maydonlarini qo'shing.",
        "Parametrlarni qabul qilib maydonlarga o'zlashtiruvchi 'public DepositEarning(double depositAmount, double interestRate)' konstruktorini yozing.",
        "Ortiqcha maydon ochmasdan formulani dinamik hisoblab qaytaruvchi 'public double getAnnualInterestPayout()' metodini yozing.",
        "'Main' klassi 'main' metodida 'DepositEarning' ob'yektini parametrlar bilan yarating.",
        "Hisoblanuvchi xususiyatni namunadagidek konsolga chop eting."
      ],
      "en": [
        "Create class 'DepositEarning' with private fields: double 'depositAmount', double 'interestRate'.",
        "Write constructor 'public DepositEarning(double depositAmount, double interestRate)'.",
        "Implement computed getter 'public double getAnnualInterestPayout()' calculating derived value dynamically.",
        "In 'main', instantiate 'DepositEarning'.",
        "Print computed property to console."
      ]
    },
    "requirements": {
      "classes": [
        "DepositEarning",
        "Main"
      ],
      "privateFields": [
        "depositAmount",
        "interestRate"
      ],
      "constructors": [
        "DepositEarning"
      ],
      "methods": [
        "getAnnualInterestPayout"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class DepositEarning {\n    private double depositAmount;\n    private double interestRate;\n\n    public DepositEarning(double depositAmount, double interestRate) {\n        this.depositAmount = depositAmount; this.interestRate = interestRate;\n    }\n\n    // TODO: Hisoblanuvchi getterni to'ldiring\n    public double getAnnualInterestPayout() {\n        return 0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DepositEarning dep = new DepositEarning(50000000.0, 21.0);\nSystem.out.println(\"Yillik daromad: \" + dep.getAnnualInterestPayout() + \" so'm\");\n    }\n}",
    "solution": "class DepositEarning {\n    private double depositAmount;\n    private double interestRate;\n\n    public DepositEarning(double depositAmount, double interestRate) {\n        this.depositAmount = depositAmount; this.interestRate = interestRate;\n    }\n\n    public double getAnnualInterestPayout() {\n        return this.depositAmount * this.interestRate / 100.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DepositEarning dep = new DepositEarning(50000000.0, 21.0);\nSystem.out.println(\"Yillik daromad: \" + dep.getAnnualInterestPayout() + \" so'm\");\n    }\n}",
    "sampleData": [
      "Yillik daromad: 10500000.0 so'm"
    ],
    "expectedOutput": "Yillik daromad: 10500000.0 so'm",
    "detailedSolution": {
      "theory": "Bank kalkulyatorlarida omonat yillik to'lovi getter orqali darhol ko'rsatiladi.",
      "theoryEn": "Deposit payout projections are calculated live using current deposit balance and interest rates.",
      "cleanCode": "public double getAnnualInterestPayout() {\n    return this.depositAmount * this.interestRate / 100.0;\n}",
      "breakdown": [
        "<code>getAnnualInterestPayout()</code>: Maydon sifatida xotirada saqlanmasdan, mavjud qiymatlardan darhol hisoblab beriluvchi xususiyat."
      ],
      "pitfalls": "'interestRate / 100.0' ifodasida to'g'ri bo'lishga e'tibor bering.",
      "cw2Tip": "Moliyaviy prognozlarni xavfsiz hisoblash metodlaridan foydalaning."
    }
  },
  {
    "id": 100,
    "tier": 7,
    "tierName": "7-Bosqich: Hisoblanuvchi Xususiyatlar (Computed Properties)",
    "sector": "91-105: Hisoblanuvchi Getterlar",
    "title": {
      "uz": "100. Medion — Tana Massasi Indeksini Hisoblash (getBmi)",
      "en": "100. Medion — BMI Health Metric Computed Getter"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nVrach qabulida bemor vazni (kg) va bo'yi (metrda) bo'yicha BMI ko'rsatkichini hisoblash zarur: 'getBmi()' metodida 'weightKg / (heightM * heightM)' formulasini qaytaring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. HealthMetrics klassini yarating va unga xususiy (private) double toifasidagi 'weightKg', double toifasidagi 'heightM' maydonlarini qo'shing.\n\n2. Parametrlarni qabul qilib maydonlarga o'zlashtiruvchi 'public HealthMetrics(double weightKg, double heightM)' konstruktorini yozing.\n\n3. Ortiqcha maydon ochmasdan formulani dinamik hisoblab qaytaruvchi 'public double getBmi()' metodini yozing.\n\n4. 'Main' klassi 'main' metodida 'HealthMetrics' ob'yektini parametrlar bilan yarating.\n\n5. Hisoblanuvchi xususiyatni namunadagidek konsolga chop eting.",
      "en": "📖 Real-World Scenario & Context\nCompute Body Mass Index via getBmi = weightKg / (heightM * heightM).\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Create class 'HealthMetrics' with private fields: double 'weightKg', double 'heightM'.\n\n2. Write constructor 'public HealthMetrics(double weightKg, double heightM)'.\n\n3. Implement computed getter 'public double getBmi()' calculating derived value dynamically.\n\n4. In 'main', instantiate 'HealthMetrics'.\n\n5. Print computed property to console."
    },
    "story": {
      "uz": "Vrach qabulida bemor vazni (kg) va bo'yi (metrda) bo'yicha BMI ko'rsatkichini hisoblash zarur: 'getBmi()' metodida 'weightKg / (heightM * heightM)' formulasini qaytaring.",
      "en": "Compute Body Mass Index via getBmi = weightKg / (heightM * heightM)."
    },
    "steps": {
      "uz": [
        "HealthMetrics klassini yarating va unga xususiy (private) double toifasidagi 'weightKg', double toifasidagi 'heightM' maydonlarini qo'shing.",
        "Parametrlarni qabul qilib maydonlarga o'zlashtiruvchi 'public HealthMetrics(double weightKg, double heightM)' konstruktorini yozing.",
        "Ortiqcha maydon ochmasdan formulani dinamik hisoblab qaytaruvchi 'public double getBmi()' metodini yozing.",
        "'Main' klassi 'main' metodida 'HealthMetrics' ob'yektini parametrlar bilan yarating.",
        "Hisoblanuvchi xususiyatni namunadagidek konsolga chop eting."
      ],
      "en": [
        "Create class 'HealthMetrics' with private fields: double 'weightKg', double 'heightM'.",
        "Write constructor 'public HealthMetrics(double weightKg, double heightM)'.",
        "Implement computed getter 'public double getBmi()' calculating derived value dynamically.",
        "In 'main', instantiate 'HealthMetrics'.",
        "Print computed property to console."
      ]
    },
    "requirements": {
      "classes": [
        "HealthMetrics",
        "Main"
      ],
      "privateFields": [
        "weightKg",
        "heightM"
      ],
      "constructors": [
        "HealthMetrics"
      ],
      "methods": [
        "getBmi"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class HealthMetrics {\n    private double weightKg;\n    private double heightM;\n\n    public HealthMetrics(double weightKg, double heightM) {\n        this.weightKg = weightKg; this.heightM = heightM;\n    }\n\n    // TODO: Hisoblanuvchi getterni to'ldiring\n    public double getBmi() {\n        return 0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        HealthMetrics hm = new HealthMetrics(72.0, 1.80);\nSystem.out.println(\"BMI ko'rsatkich: \" + hm.getBmi());\n    }\n}",
    "solution": "class HealthMetrics {\n    private double weightKg;\n    private double heightM;\n\n    public HealthMetrics(double weightKg, double heightM) {\n        this.weightKg = weightKg; this.heightM = heightM;\n    }\n\n    public double getBmi() {\n        return this.weightKg / (this.heightM * this.heightM);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        HealthMetrics hm = new HealthMetrics(72.0, 1.80);\nSystem.out.println(\"BMI ko'rsatkich: \" + hm.getBmi());\n    }\n}",
    "sampleData": [
      "BMI ko'rsatkich: 22.22222222222222"
    ],
    "expectedOutput": "BMI ko'rsatkich: 22.22222222222222",
    "detailedSolution": {
      "theory": "BMI tibbiy formulasi ikkita parametrga bog'liq bo'lib, xotirada uchinchi maydon ochishga hojat yo'q.",
      "theoryEn": "Body mass indices compute synchronously from physical vitals without caching.",
      "cleanCode": "public double getBmi() {\n    return this.weightKg / (this.heightM * this.heightM);\n}",
      "breakdown": [
        "<code>getBmi()</code>: Maydon sifatida xotirada saqlanmasdan, mavjud qiymatlardan darhol hisoblab beriluvchi xususiyat."
      ],
      "pitfalls": "Bo'y parametrini santimetrda emas, metrda (1.80) qabul qiling.",
      "cw2Tip": "Kompleks formulalarni getter ichida toza ifodalashni o'rganing."
    }
  },
  {
    "id": 101,
    "tier": 7,
    "tierName": "7-Bosqich: Hisoblanuvchi Xususiyatlar (Computed Properties)",
    "sector": "91-105: Hisoblanuvchi Getterlar",
    "title": {
      "uz": "101. UzAirways — Parvozning Qolgan Masofasi (getRemainingDistanceKm)",
      "en": "101. UzAirways — Flight Remaining Distance Computed Getter"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSamolyot parvozi vaqtida jami masofadan bosib o'tilgan masofa ayirilib, qolgan kilometr 'getRemainingDistanceKm()' metodi orqali hisoblanadi: 'totalKm - flownKm'.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. FlightDistance klassini yarating va unga xususiy (private) double toifasidagi 'totalKm', double toifasidagi 'flownKm' maydonlarini qo'shing.\n\n2. Parametrlarni qabul qilib maydonlarga o'zlashtiruvchi 'public FlightDistance(double totalKm, double flownKm)' konstruktorini yozing.\n\n3. Ortiqcha maydon ochmasdan formulani dinamik hisoblab qaytaruvchi 'public double getRemainingDistanceKm()' metodini yozing.\n\n4. 'Main' klassi 'main' metodida 'FlightDistance' ob'yektini parametrlar bilan yarating.\n\n5. Hisoblanuvchi xususiyatni namunadagidek konsolga chop eting.",
      "en": "📖 Real-World Scenario & Context\nTrack flight progress via getRemainingDistanceKm returning totalKm - flownKm.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Create class 'FlightDistance' with private fields: double 'totalKm', double 'flownKm'.\n\n2. Write constructor 'public FlightDistance(double totalKm, double flownKm)'.\n\n3. Implement computed getter 'public double getRemainingDistanceKm()' calculating derived value dynamically.\n\n4. In 'main', instantiate 'FlightDistance'.\n\n5. Print computed property to console."
    },
    "story": {
      "uz": "Samolyot parvozi vaqtida jami masofadan bosib o'tilgan masofa ayirilib, qolgan kilometr 'getRemainingDistanceKm()' metodi orqali hisoblanadi: 'totalKm - flownKm'.",
      "en": "Track flight progress via getRemainingDistanceKm returning totalKm - flownKm."
    },
    "steps": {
      "uz": [
        "FlightDistance klassini yarating va unga xususiy (private) double toifasidagi 'totalKm', double toifasidagi 'flownKm' maydonlarini qo'shing.",
        "Parametrlarni qabul qilib maydonlarga o'zlashtiruvchi 'public FlightDistance(double totalKm, double flownKm)' konstruktorini yozing.",
        "Ortiqcha maydon ochmasdan formulani dinamik hisoblab qaytaruvchi 'public double getRemainingDistanceKm()' metodini yozing.",
        "'Main' klassi 'main' metodida 'FlightDistance' ob'yektini parametrlar bilan yarating.",
        "Hisoblanuvchi xususiyatni namunadagidek konsolga chop eting."
      ],
      "en": [
        "Create class 'FlightDistance' with private fields: double 'totalKm', double 'flownKm'.",
        "Write constructor 'public FlightDistance(double totalKm, double flownKm)'.",
        "Implement computed getter 'public double getRemainingDistanceKm()' calculating derived value dynamically.",
        "In 'main', instantiate 'FlightDistance'.",
        "Print computed property to console."
      ]
    },
    "requirements": {
      "classes": [
        "FlightDistance",
        "Main"
      ],
      "privateFields": [
        "totalKm",
        "flownKm"
      ],
      "constructors": [
        "FlightDistance"
      ],
      "methods": [
        "getRemainingDistanceKm"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class FlightDistance {\n    private double totalKm;\n    private double flownKm;\n\n    public FlightDistance(double totalKm, double flownKm) {\n        this.totalKm = totalKm; this.flownKm = flownKm;\n    }\n\n    // TODO: Hisoblanuvchi getterni to'ldiring\n    public double getRemainingDistanceKm() {\n        return 0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FlightDistance fd = new FlightDistance(4800.0, 3100.0);\nSystem.out.println(\"Qolgan masofa: \" + fd.getRemainingDistanceKm() + \" km\");\n    }\n}",
    "solution": "class FlightDistance {\n    private double totalKm;\n    private double flownKm;\n\n    public FlightDistance(double totalKm, double flownKm) {\n        this.totalKm = totalKm; this.flownKm = flownKm;\n    }\n\n    public double getRemainingDistanceKm() {\n        return this.totalKm - this.flownKm;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FlightDistance fd = new FlightDistance(4800.0, 3100.0);\nSystem.out.println(\"Qolgan masofa: \" + fd.getRemainingDistanceKm() + \" km\");\n    }\n}",
    "sampleData": [
      "Qolgan masofa: 1700.0 km"
    ],
    "expectedOutput": "Qolgan masofa: 1700.0 km",
    "detailedSolution": {
      "theory": "Qolgan masofa samolyot harakatlangan sari o'zgaradi, shuning uchun getter orqali olinadi.",
      "theoryEn": "Progress telemetry is computed directly from total goals and current progress readings.",
      "cleanCode": "public double getRemainingDistanceKm() {\n    return this.totalKm - this.flownKm;\n}",
      "breakdown": [
        "<code>getRemainingDistanceKm()</code>: Maydon sifatida xotirada saqlanmasdan, mavjud qiymatlardan darhol hisoblab beriluvchi xususiyat."
      ],
      "pitfalls": "Ayirish amalini 'totalKm - flownKm' tartibida bajaring.",
      "cw2Tip": "Jarayonlarni modellashtirishda qoldiq miqdorlarni getter bilan ko'rsating."
    }
  },
  {
    "id": 102,
    "tier": 7,
    "tierName": "7-Bosqich: Hisoblanuvchi Xususiyatlar (Computed Properties)",
    "sector": "91-105: Hisoblanuvchi Getterlar",
    "title": {
      "uz": "102. Express24 — Taomlar va Yetkazish Jami Cheki (getGrandTotal)",
      "en": "102. Express24 — Grand Total Invoice Computed Getter"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nBuyurtma chekida taomlar qiymati va yetkazish xarajati qo'shilib jami to'lov chiqariladi: 'getGrandTotal()' metodi 'foodSubtotal + deliveryFee' ni qaytarsin.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. OrderInvoice klassini yarating va unga xususiy (private) double toifasidagi 'foodSubtotal', double toifasidagi 'deliveryFee' maydonlarini qo'shing.\n\n2. Parametrlarni qabul qilib maydonlarga o'zlashtiruvchi 'public OrderInvoice(double foodSubtotal, double deliveryFee)' konstruktorini yozing.\n\n3. Ortiqcha maydon ochmasdan formulani dinamik hisoblab qaytaruvchi 'public double getGrandTotal()' metodini yozing.\n\n4. 'Main' klassi 'main' metodida 'OrderInvoice' ob'yektini parametrlar bilan yarating.\n\n5. Hisoblanuvchi xususiyatni namunadagidek konsolga chop eting.",
      "en": "📖 Real-World Scenario & Context\nInvoice checkout sums food items and delivery costs via getGrandTotal.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Create class 'OrderInvoice' with private fields: double 'foodSubtotal', double 'deliveryFee'.\n\n2. Write constructor 'public OrderInvoice(double foodSubtotal, double deliveryFee)'.\n\n3. Implement computed getter 'public double getGrandTotal()' calculating derived value dynamically.\n\n4. In 'main', instantiate 'OrderInvoice'.\n\n5. Print computed property to console."
    },
    "story": {
      "uz": "Buyurtma chekida taomlar qiymati va yetkazish xarajati qo'shilib jami to'lov chiqariladi: 'getGrandTotal()' metodi 'foodSubtotal + deliveryFee' ni qaytarsin.",
      "en": "Invoice checkout sums food items and delivery costs via getGrandTotal."
    },
    "steps": {
      "uz": [
        "OrderInvoice klassini yarating va unga xususiy (private) double toifasidagi 'foodSubtotal', double toifasidagi 'deliveryFee' maydonlarini qo'shing.",
        "Parametrlarni qabul qilib maydonlarga o'zlashtiruvchi 'public OrderInvoice(double foodSubtotal, double deliveryFee)' konstruktorini yozing.",
        "Ortiqcha maydon ochmasdan formulani dinamik hisoblab qaytaruvchi 'public double getGrandTotal()' metodini yozing.",
        "'Main' klassi 'main' metodida 'OrderInvoice' ob'yektini parametrlar bilan yarating.",
        "Hisoblanuvchi xususiyatni namunadagidek konsolga chop eting."
      ],
      "en": [
        "Create class 'OrderInvoice' with private fields: double 'foodSubtotal', double 'deliveryFee'.",
        "Write constructor 'public OrderInvoice(double foodSubtotal, double deliveryFee)'.",
        "Implement computed getter 'public double getGrandTotal()' calculating derived value dynamically.",
        "In 'main', instantiate 'OrderInvoice'.",
        "Print computed property to console."
      ]
    },
    "requirements": {
      "classes": [
        "OrderInvoice",
        "Main"
      ],
      "privateFields": [
        "foodSubtotal",
        "deliveryFee"
      ],
      "constructors": [
        "OrderInvoice"
      ],
      "methods": [
        "getGrandTotal"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class OrderInvoice {\n    private double foodSubtotal;\n    private double deliveryFee;\n\n    public OrderInvoice(double foodSubtotal, double deliveryFee) {\n        this.foodSubtotal = foodSubtotal; this.deliveryFee = deliveryFee;\n    }\n\n    // TODO: Hisoblanuvchi getterni to'ldiring\n    public double getGrandTotal() {\n        return 0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        OrderInvoice inv = new OrderInvoice(185000.0, 15000.0);\nSystem.out.println(\"Jami to'lov: \" + inv.getGrandTotal() + \" so'm\");\n    }\n}",
    "solution": "class OrderInvoice {\n    private double foodSubtotal;\n    private double deliveryFee;\n\n    public OrderInvoice(double foodSubtotal, double deliveryFee) {\n        this.foodSubtotal = foodSubtotal; this.deliveryFee = deliveryFee;\n    }\n\n    public double getGrandTotal() {\n        return this.foodSubtotal + this.deliveryFee;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        OrderInvoice inv = new OrderInvoice(185000.0, 15000.0);\nSystem.out.println(\"Jami to'lov: \" + inv.getGrandTotal() + \" so'm\");\n    }\n}",
    "sampleData": [
      "Jami to'lov: 200000.0 so'm"
    ],
    "expectedOutput": "Jami to'lov: 200000.0 so'm",
    "detailedSolution": {
      "theory": "Yakuniy hisob-faktura qiymatini alohida maydonda saqlamaslik chekdagi nomuvofiqliklarni yo'qotadi.",
      "theoryEn": "Summing item subtotals and ancillary logistics fees on demand prevents checkout discrepancies.",
      "cleanCode": "public double getGrandTotal() {\n    return this.foodSubtotal + this.deliveryFee;\n}",
      "breakdown": [
        "<code>getGrandTotal()</code>: Maydon sifatida xotirada saqlanmasdan, mavjud qiymatlardan darhol hisoblab beriluvchi xususiyat."
      ],
      "pitfalls": "Ikkala double maydonni qo'shib qaytaring.",
      "cw2Tip": "CW2 Console Order Applicationda buyurtma yakuniy chekini shu metod bilan tuzasiz."
    }
  },
  {
    "id": 103,
    "tier": 7,
    "tierName": "7-Bosqich: Hisoblanuvchi Xususiyatlar (Computed Properties)",
    "sector": "91-105: Hisoblanuvchi Getterlar",
    "title": {
      "uz": "103. WIUT LMS — Talabaning To'liq Ismi (getFullName)",
      "en": "103. WIUT LMS — Student Full Name String Computed Getter"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nTalaba profilida ism va familiya alohida saqlanadi. 'getFullName()' metodi orqali ularni bitta probel bilan birlashtirib qaytaring: 'firstName + \" \" + lastName'.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. StudentProfile klassini yarating va unga xususiy (private) String toifasidagi 'firstName', String toifasidagi 'lastName' maydonlarini qo'shing.\n\n2. Parametrlarni qabul qilib maydonlarga o'zlashtiruvchi 'public StudentProfile(String firstName, String lastName)' konstruktorini yozing.\n\n3. Ortiqcha maydon ochmasdan formulani dinamik hisoblab qaytaruvchi 'public String getFullName()' metodini yozing.\n\n4. 'Main' klassi 'main' metodida 'StudentProfile' ob'yektini parametrlar bilan yarating.\n\n5. Hisoblanuvchi xususiyatni namunadagidek konsolga chop eting.",
      "en": "📖 Real-World Scenario & Context\nWIUT students store first and last names. Expose concatenated getFullName = firstName + ' ' + lastName.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Create class 'StudentProfile' with private fields: String 'firstName', String 'lastName'.\n\n2. Write constructor 'public StudentProfile(String firstName, String lastName)'.\n\n3. Implement computed getter 'public String getFullName()' calculating derived value dynamically.\n\n4. In 'main', instantiate 'StudentProfile'.\n\n5. Print computed property to console."
    },
    "story": {
      "uz": "Talaba profilida ism va familiya alohida saqlanadi. 'getFullName()' metodi orqali ularni bitta probel bilan birlashtirib qaytaring: 'firstName + \" \" + lastName'.",
      "en": "WIUT students store first and last names. Expose concatenated getFullName = firstName + ' ' + lastName."
    },
    "steps": {
      "uz": [
        "StudentProfile klassini yarating va unga xususiy (private) String toifasidagi 'firstName', String toifasidagi 'lastName' maydonlarini qo'shing.",
        "Parametrlarni qabul qilib maydonlarga o'zlashtiruvchi 'public StudentProfile(String firstName, String lastName)' konstruktorini yozing.",
        "Ortiqcha maydon ochmasdan formulani dinamik hisoblab qaytaruvchi 'public String getFullName()' metodini yozing.",
        "'Main' klassi 'main' metodida 'StudentProfile' ob'yektini parametrlar bilan yarating.",
        "Hisoblanuvchi xususiyatni namunadagidek konsolga chop eting."
      ],
      "en": [
        "Create class 'StudentProfile' with private fields: String 'firstName', String 'lastName'.",
        "Write constructor 'public StudentProfile(String firstName, String lastName)'.",
        "Implement computed getter 'public String getFullName()' calculating derived value dynamically.",
        "In 'main', instantiate 'StudentProfile'.",
        "Print computed property to console."
      ]
    },
    "requirements": {
      "classes": [
        "StudentProfile",
        "Main"
      ],
      "privateFields": [
        "firstName",
        "lastName"
      ],
      "constructors": [
        "StudentProfile"
      ],
      "methods": [
        "getFullName"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class StudentProfile {\n    private String firstName;\n    private String lastName;\n\n    public StudentProfile(String firstName, String lastName) {\n        this.firstName = firstName; this.lastName = lastName;\n    }\n\n    // TODO: Hisoblanuvchi getterni to'ldiring\n    public String getFullName() {\n        return 0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StudentProfile sp = new StudentProfile(\"Jasur\", \"Karimov\");\nSystem.out.println(\"Talaba: \" + sp.getFullName());\n    }\n}",
    "solution": "class StudentProfile {\n    private String firstName;\n    private String lastName;\n\n    public StudentProfile(String firstName, String lastName) {\n        this.firstName = firstName; this.lastName = lastName;\n    }\n\n    public String getFullName() {\n        return this.firstName + \" \" + this.lastName;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StudentProfile sp = new StudentProfile(\"Jasur\", \"Karimov\");\nSystem.out.println(\"Talaba: \" + sp.getFullName());\n    }\n}",
    "sampleData": [
      "Talaba: Jasur Karimov"
    ],
    "expectedOutput": "Talaba: Jasur Karimov",
    "detailedSolution": {
      "theory": "Stringlarni birlashtirish (concatenation) orqali to'liq ismni hisoblab berish 'fullName' degan ortiqcha maydon ochish zaruratini yo'qotadi.",
      "theoryEn": "String concatenation in getters synthesizes compound full names without redundant storage.",
      "cleanCode": "public String getFullName() {\n    return this.firstName + \" \" + this.lastName;\n}",
      "breakdown": [
        "<code>getFullName()</code>: Maydon sifatida xotirada saqlanmasdan, mavjud qiymatlardan darhol hisoblab beriluvchi xususiyat."
      ],
      "pitfalls": "Ism va familiya orasida bo'sh joy (\" \") qo'shishni unutmang.",
      "cw2Tip": "Mijoz va xodim profillarida 'getFullName()' universal metod hisoblanadi."
    }
  },
  {
    "id": 104,
    "tier": 7,
    "tierName": "7-Bosqich: Hisoblanuvchi Xususiyatlar (Computed Properties)",
    "sector": "91-105: Hisoblanuvchi Getterlar",
    "title": {
      "uz": "104. Apex Pizza — Bir Bo'lak Pitsa Narxini Hisoblash",
      "en": "104. Apex Pizza — Single Slice Price Computed Getter"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nDo'stlar davrasida pitsa narxini teng bo'lish uchun 'getSlicePrice()' metodi umumiy narxni bo'laklar soniga bo'lib bersin: 'totalPrice / sliceCount'.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. PizzaSlices klassini yarating va unga xususiy (private) double toifasidagi 'totalPrice', int toifasidagi 'sliceCount' maydonlarini qo'shing.\n\n2. Parametrlarni qabul qilib maydonlarga o'zlashtiruvchi 'public PizzaSlices(double totalPrice, int sliceCount)' konstruktorini yozing.\n\n3. Ortiqcha maydon ochmasdan formulani dinamik hisoblab qaytaruvchi 'public double getSlicePrice()' metodini yozing.\n\n4. 'Main' klassi 'main' metodida 'PizzaSlices' ob'yektini parametrlar bilan yarating.\n\n5. Hisoblanuvchi xususiyatni namunadagidek konsolga chop eting.",
      "en": "📖 Real-World Scenario & Context\nCompute per-slice cost via getSlicePrice returning totalPrice / sliceCount.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Create class 'PizzaSlices' with private fields: double 'totalPrice', int 'sliceCount'.\n\n2. Write constructor 'public PizzaSlices(double totalPrice, int sliceCount)'.\n\n3. Implement computed getter 'public double getSlicePrice()' calculating derived value dynamically.\n\n4. In 'main', instantiate 'PizzaSlices'.\n\n5. Print computed property to console."
    },
    "story": {
      "uz": "Do'stlar davrasida pitsa narxini teng bo'lish uchun 'getSlicePrice()' metodi umumiy narxni bo'laklar soniga bo'lib bersin: 'totalPrice / sliceCount'.",
      "en": "Compute per-slice cost via getSlicePrice returning totalPrice / sliceCount."
    },
    "steps": {
      "uz": [
        "PizzaSlices klassini yarating va unga xususiy (private) double toifasidagi 'totalPrice', int toifasidagi 'sliceCount' maydonlarini qo'shing.",
        "Parametrlarni qabul qilib maydonlarga o'zlashtiruvchi 'public PizzaSlices(double totalPrice, int sliceCount)' konstruktorini yozing.",
        "Ortiqcha maydon ochmasdan formulani dinamik hisoblab qaytaruvchi 'public double getSlicePrice()' metodini yozing.",
        "'Main' klassi 'main' metodida 'PizzaSlices' ob'yektini parametrlar bilan yarating.",
        "Hisoblanuvchi xususiyatni namunadagidek konsolga chop eting."
      ],
      "en": [
        "Create class 'PizzaSlices' with private fields: double 'totalPrice', int 'sliceCount'.",
        "Write constructor 'public PizzaSlices(double totalPrice, int sliceCount)'.",
        "Implement computed getter 'public double getSlicePrice()' calculating derived value dynamically.",
        "In 'main', instantiate 'PizzaSlices'.",
        "Print computed property to console."
      ]
    },
    "requirements": {
      "classes": [
        "PizzaSlices",
        "Main"
      ],
      "privateFields": [
        "totalPrice",
        "sliceCount"
      ],
      "constructors": [
        "PizzaSlices"
      ],
      "methods": [
        "getSlicePrice"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class PizzaSlices {\n    private double totalPrice;\n    private int sliceCount;\n\n    public PizzaSlices(double totalPrice, int sliceCount) {\n        this.totalPrice = totalPrice; this.sliceCount = sliceCount;\n    }\n\n    // TODO: Hisoblanuvchi getterni to'ldiring\n    public double getSlicePrice() {\n        return 0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PizzaSlices ps = new PizzaSlices(80000.0, 8);\nSystem.out.println(\"1 bo'lak narxi: \" + ps.getSlicePrice() + \" so'm\");\n    }\n}",
    "solution": "class PizzaSlices {\n    private double totalPrice;\n    private int sliceCount;\n\n    public PizzaSlices(double totalPrice, int sliceCount) {\n        this.totalPrice = totalPrice; this.sliceCount = sliceCount;\n    }\n\n    public double getSlicePrice() {\n        return this.totalPrice / this.sliceCount;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PizzaSlices ps = new PizzaSlices(80000.0, 8);\nSystem.out.println(\"1 bo'lak narxi: \" + ps.getSlicePrice() + \" so'm\");\n    }\n}",
    "sampleData": [
      "1 bo'lak narxi: 10000.0 so'm"
    ],
    "expectedOutput": "1 bo'lak narxi: 10000.0 so'm",
    "detailedSolution": {
      "theory": "Birlik narxini hisoblash tovar umumiy summasi va miqdori bo'yicha dinamik aniqlanadi.",
      "theoryEn": "Unit cost analysis derives smoothly from aggregate price and component count.",
      "cleanCode": "public double getSlicePrice() {\n    return this.totalPrice / this.sliceCount;\n}",
      "breakdown": [
        "<code>getSlicePrice()</code>: Maydon sifatida xotirada saqlanmasdan, mavjud qiymatlardan darhol hisoblab beriluvchi xususiyat."
      ],
      "pitfalls": "'sliceCount' int bo'lsa ham 'totalPrice' double bo'lgani uchun natija double bo'ladi.",
      "cw2Tip": "Tovarlar bo'yicha dona narxini hisoblashda ushbu tamoyil qo'llaniladi."
    }
  },
  {
    "id": 105,
    "tier": 7,
    "tierName": "7-Bosqich: Hisoblanuvchi Xususiyatlar (Computed Properties)",
    "sector": "91-105: Hisoblanuvchi Getterlar",
    "title": {
      "uz": "105. Safia — Qandolat Kaloriyasini Hisoblash (getTotalCalories)",
      "en": "105. Safia — Pastry Total Calories Computed Getter"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\n100 gramm mahsulotdagi kaloriya va tortning umumiy og'irligi (grammda) asosida jami kaloriyani 'getTotalCalories()' orqali hisoblang: 'caloriesPer100g * (weightGram / 100.0)'.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. PastryCalories klassini yarating va unga xususiy (private) double toifasidagi 'caloriesPer100g', double toifasidagi 'weightGram' maydonlarini qo'shing.\n\n2. Parametrlarni qabul qilib maydonlarga o'zlashtiruvchi 'public PastryCalories(double caloriesPer100g, double weightGram)' konstruktorini yozing.\n\n3. Ortiqcha maydon ochmasdan formulani dinamik hisoblab qaytaruvchi 'public double getTotalCalories()' metodini yozing.\n\n4. 'Main' klassi 'main' metodida 'PastryCalories' ob'yektini parametrlar bilan yarating.\n\n5. Hisoblanuvchi xususiyatni namunadagidek konsolga chop eting.",
      "en": "📖 Real-World Scenario & Context\nCalculate total pastry caloric intake via getTotalCalories.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Create class 'PastryCalories' with private fields: double 'caloriesPer100g', double 'weightGram'.\n\n2. Write constructor 'public PastryCalories(double caloriesPer100g, double weightGram)'.\n\n3. Implement computed getter 'public double getTotalCalories()' calculating derived value dynamically.\n\n4. In 'main', instantiate 'PastryCalories'.\n\n5. Print computed property to console."
    },
    "story": {
      "uz": "100 gramm mahsulotdagi kaloriya va tortning umumiy og'irligi (grammda) asosida jami kaloriyani 'getTotalCalories()' orqali hisoblang: 'caloriesPer100g * (weightGram / 100.0)'.",
      "en": "Calculate total pastry caloric intake via getTotalCalories."
    },
    "steps": {
      "uz": [
        "PastryCalories klassini yarating va unga xususiy (private) double toifasidagi 'caloriesPer100g', double toifasidagi 'weightGram' maydonlarini qo'shing.",
        "Parametrlarni qabul qilib maydonlarga o'zlashtiruvchi 'public PastryCalories(double caloriesPer100g, double weightGram)' konstruktorini yozing.",
        "Ortiqcha maydon ochmasdan formulani dinamik hisoblab qaytaruvchi 'public double getTotalCalories()' metodini yozing.",
        "'Main' klassi 'main' metodida 'PastryCalories' ob'yektini parametrlar bilan yarating.",
        "Hisoblanuvchi xususiyatni namunadagidek konsolga chop eting."
      ],
      "en": [
        "Create class 'PastryCalories' with private fields: double 'caloriesPer100g', double 'weightGram'.",
        "Write constructor 'public PastryCalories(double caloriesPer100g, double weightGram)'.",
        "Implement computed getter 'public double getTotalCalories()' calculating derived value dynamically.",
        "In 'main', instantiate 'PastryCalories'.",
        "Print computed property to console."
      ]
    },
    "requirements": {
      "classes": [
        "PastryCalories",
        "Main"
      ],
      "privateFields": [
        "caloriesPer100g",
        "weightGram"
      ],
      "constructors": [
        "PastryCalories"
      ],
      "methods": [
        "getTotalCalories"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class PastryCalories {\n    private double caloriesPer100g;\n    private double weightGram;\n\n    public PastryCalories(double caloriesPer100g, double weightGram) {\n        this.caloriesPer100g = caloriesPer100g; this.weightGram = weightGram;\n    }\n\n    // TODO: Hisoblanuvchi getterni to'ldiring\n    public double getTotalCalories() {\n        return 0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PastryCalories pc = new PastryCalories(350.0, 400.0);\nSystem.out.println(\"Jami kaloriya: \" + pc.getTotalCalories() + \" kkal\");\n    }\n}",
    "solution": "class PastryCalories {\n    private double caloriesPer100g;\n    private double weightGram;\n\n    public PastryCalories(double caloriesPer100g, double weightGram) {\n        this.caloriesPer100g = caloriesPer100g; this.weightGram = weightGram;\n    }\n\n    public double getTotalCalories() {\n        return this.caloriesPer100g * (this.weightGram / 100.0);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PastryCalories pc = new PastryCalories(350.0, 400.0);\nSystem.out.println(\"Jami kaloriya: \" + pc.getTotalCalories() + \" kkal\");\n    }\n}",
    "sampleData": [
      "Jami kaloriya: 1400.0 kkal"
    ],
    "expectedOutput": "Jami kaloriya: 1400.0 kkal",
    "detailedSolution": {
      "theory": "Oziq-ovqat xavfsizligi va parhez ma'lumotlari hisoblanuvchi formulalar orqali yoritiladi.",
      "theoryEn": "Nutritional aggregates derive cleanly from benchmark density metrics and gross mass.",
      "cleanCode": "public double getTotalCalories() {\n    return this.caloriesPer100g * (this.weightGram / 100.0);\n}",
      "breakdown": [
        "<code>getTotalCalories()</code>: Maydon sifatida xotirada saqlanmasdan, mavjud qiymatlardan darhol hisoblab beriluvchi xususiyat."
      ],
      "pitfalls": "'weightGram / 100.0' qismini qavs ichida ifodalang.",
      "cw2Tip": "Mijozga to'liq tovar tafsilotlarini berishda hisoblanuvchi xususiyatlar juda foydali."
    }
  },
  {
    "id": 106,
    "tier": 8,
    "tierName": "8-Bosqich: Biznes Operatsion Metodlari",
    "sector": "106-120: Domen Operatsiyalari",
    "title": {
      "uz": "106. Uzum Market — Omborga Tovar Qo'shish (restock) va Sotish (sell)",
      "en": "106. Uzum Market — Inventory Restock and Sell Operations"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSeminar 2 da ta'kidlanganidek, shunchaki 'setQuantity' berish o'rniga biznes operatsiyalari yoziladi: 'public void restock(int amount)' miqdorni oshiradi, 'public boolean sell(int amount)' esa yetarli bo'lsa kamaytirib true, bo'lmasa false qaytaradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. ProductStock klassini yarating va unga xususiy (private) int toifasidagi 'quantity' maydonlarini qo'shing.\n\n2. Boshlang'ich holatni o'rnatuvchi 'public ProductStock(...)' konstruktorini e'lon qiling.\n\n3. Biznes operatsiyalarini ifodalovchi domen metodlarini ('restock(...)', 'sell(...)', 'getQuantity(...)') toza mantiq bilan yozing.\n\n4. 'Main' metodida ob'yekt yarating va domen amallarini bajaring.\n\n5. Natijalarni namunadagidek konsolga chiqaring.",
      "en": "📖 Real-World Scenario & Context\nSeminar 2 best practice: replace raw setters with domain operations restock(amount) and sell(amount) returning boolean.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'ProductStock' with private fields: int 'quantity'.\n\n2. Write constructor initializing starting domain state.\n\n3. Implement business methods: 'restock(...)', 'sell(...)', 'getQuantity(...)'.\n\n4. In 'main', instantiate object and invoke domain operations.\n\n5. Print results to console."
    },
    "story": {
      "uz": "Seminar 2 da ta'kidlanganidek, shunchaki 'setQuantity' berish o'rniga biznes operatsiyalari yoziladi: 'public void restock(int amount)' miqdorni oshiradi, 'public boolean sell(int amount)' esa yetarli bo'lsa kamaytirib true, bo'lmasa false qaytaradi.",
      "en": "Seminar 2 best practice: replace raw setters with domain operations restock(amount) and sell(amount) returning boolean."
    },
    "steps": {
      "uz": [
        "ProductStock klassini yarating va unga xususiy (private) int toifasidagi 'quantity' maydonlarini qo'shing.",
        "Boshlang'ich holatni o'rnatuvchi 'public ProductStock(...)' konstruktorini e'lon qiling.",
        "Biznes operatsiyalarini ifodalovchi domen metodlarini ('restock(...)', 'sell(...)', 'getQuantity(...)') toza mantiq bilan yozing.",
        "'Main' metodida ob'yekt yarating va domen amallarini bajaring.",
        "Natijalarni namunadagidek konsolga chiqaring."
      ],
      "en": [
        "Declare class 'ProductStock' with private fields: int 'quantity'.",
        "Write constructor initializing starting domain state.",
        "Implement business methods: 'restock(...)', 'sell(...)', 'getQuantity(...)'.",
        "In 'main', instantiate object and invoke domain operations.",
        "Print results to console."
      ]
    },
    "requirements": {
      "classes": [
        "ProductStock",
        "Main"
      ],
      "privateFields": [
        "quantity"
      ],
      "constructors": [
        "ProductStock"
      ],
      "methods": [
        "restock",
        "sell",
        "getQuantity"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class ProductStock {\n    // TODO: Maydonlar va biznes metodlarini (restock, sell, getQuantity) yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ProductStock stock = new ProductStock(10);\nstock.restock(5);\nboolean s1 = stock.sell(8);\nboolean s2 = stock.sell(10);\nSystem.out.println(\"Sotildi1: \" + s1 + \" | Sotildi2: \" + s2 + \" | Qoldiq: \" + stock.getQuantity());\n    }\n}",
    "solution": "class ProductStock {\n    private int quantity;\n\n    public ProductStock(int quantity) {\n        this.quantity = quantity;\n    }\n\n    public void restock(int amount) {\n        if (amount > 0) this.quantity += amount;\n    }\n\n    public boolean sell(int amount) {\n        if (amount > 0 && this.quantity >= amount) {\n            this.quantity -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public int getQuantity() {\n        return this.quantity;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ProductStock stock = new ProductStock(10);\nstock.restock(5);\nboolean s1 = stock.sell(8);\nboolean s2 = stock.sell(10);\nSystem.out.println(\"Sotildi1: \" + s1 + \" | Sotildi2: \" + s2 + \" | Qoldiq: \" + stock.getQuantity());\n    }\n}",
    "sampleData": [
      "Sotildi1: true | Sotildi2: false | Qoldiq: 7"
    ],
    "expectedOutput": "Sotildi1: true | Sotildi2: false | Qoldiq: 7",
    "detailedSolution": {
      "theory": "Biznes metodlari orqali inkapsulyatsiya — ob'yektga 'nima qilishni aytish' (Tell, Don't Ask) tamoyiliga asoslanadi. Tashqi kod maydonni o'zi o'zgartirmaydi, ob'yektning o'ziga vazifa topshiradi.",
      "theoryEn": "Tell, Don't Ask principle: encapsulate state transitions within domain operations (restock/sell) rather than exposing raw setters.",
      "cleanCode": "class ProductStock {\n    private int quantity;\n\n    public ProductStock(int quantity) {\n        this.quantity = quantity;\n    }\n\n    public void restock(int amount) {\n        if (amount > 0) this.quantity += amount;\n    }\n\n    public boolean sell(int amount) {\n        if (amount > 0 && this.quantity >= amount) {\n            this.quantity -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public int getQuantity() {\n        return this.quantity;\n    }\n}",
      "breakdown": [
        "<code>Tell, Don't Ask</code>: Obyektga to'g'ridan-to'g'ri 'set...' chaqirmasdan, biznes operatsiyalarini ('restock', 'sell') bajarish topshiriladi."
      ],
      "pitfalls": "'sell' metodida yetarli qoldiq borligini tekshirishni unutmaslik kerak (quantity >= amount).",
      "cw2Tip": "CW2 Console Order Applicationda tovar xarid qilinganda uning ombordagi soni 'sell()' kabi metod orqali kamaytirilishi shart."
    }
  },
  {
    "id": 107,
    "tier": 8,
    "tierName": "8-Bosqich: Biznes Operatsion Metodlari",
    "sector": "106-120: Domen Operatsiyalari",
    "title": {
      "uz": "107. Payme — Pul Qo'yish (deposit) va Pul Yechish (withdraw)",
      "en": "107. Payme — Bank Balance Deposit and Withdraw Operations"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nBank hisobiga to'g'ridan-to'g'ri 'setBalance' qilinmaydi! 'public void deposit(double amount)' pul qo'shadi, 'public boolean withdraw(double amount)' esa yetarli mablag' bo'lsagina pul yechadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. WalletBalance klassini yarating va unga xususiy (private) double toifasidagi 'balance' maydonlarini qo'shing.\n\n2. Boshlang'ich holatni o'rnatuvchi 'public WalletBalance(...)' konstruktorini e'lon qiling.\n\n3. Biznes operatsiyalarini ifodalovchi domen metodlarini ('deposit(...)', 'withdraw(...)', 'getBalance(...)') toza mantiq bilan yozing.\n\n4. 'Main' metodida ob'yekt yarating va domen amallarini bajaring.\n\n5. Natijalarni namunadagidek konsolga chiqaring.",
      "en": "📖 Real-World Scenario & Context\nBanks never expose raw setBalance. Implement domain operations deposit(amount) and withdraw(amount) boolean.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'WalletBalance' with private fields: double 'balance'.\n\n2. Write constructor initializing starting domain state.\n\n3. Implement business methods: 'deposit(...)', 'withdraw(...)', 'getBalance(...)'.\n\n4. In 'main', instantiate object and invoke domain operations.\n\n5. Print results to console."
    },
    "story": {
      "uz": "Bank hisobiga to'g'ridan-to'g'ri 'setBalance' qilinmaydi! 'public void deposit(double amount)' pul qo'shadi, 'public boolean withdraw(double amount)' esa yetarli mablag' bo'lsagina pul yechadi.",
      "en": "Banks never expose raw setBalance. Implement domain operations deposit(amount) and withdraw(amount) boolean."
    },
    "steps": {
      "uz": [
        "WalletBalance klassini yarating va unga xususiy (private) double toifasidagi 'balance' maydonlarini qo'shing.",
        "Boshlang'ich holatni o'rnatuvchi 'public WalletBalance(...)' konstruktorini e'lon qiling.",
        "Biznes operatsiyalarini ifodalovchi domen metodlarini ('deposit(...)', 'withdraw(...)', 'getBalance(...)') toza mantiq bilan yozing.",
        "'Main' metodida ob'yekt yarating va domen amallarini bajaring.",
        "Natijalarni namunadagidek konsolga chiqaring."
      ],
      "en": [
        "Declare class 'WalletBalance' with private fields: double 'balance'.",
        "Write constructor initializing starting domain state.",
        "Implement business methods: 'deposit(...)', 'withdraw(...)', 'getBalance(...)'.",
        "In 'main', instantiate object and invoke domain operations.",
        "Print results to console."
      ]
    },
    "requirements": {
      "classes": [
        "WalletBalance",
        "Main"
      ],
      "privateFields": [
        "balance"
      ],
      "constructors": [
        "WalletBalance"
      ],
      "methods": [
        "deposit",
        "withdraw",
        "getBalance"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class WalletBalance {\n    // TODO: Maydonlar va biznes metodlarini (deposit, withdraw, getBalance) yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WalletBalance wb = new WalletBalance(100000.0);\nwb.deposit(50000.0);\nboolean w1 = wb.withdraw(120000.0);\nboolean w2 = wb.withdraw(40000.0);\nSystem.out.println(\"Yechildi1: \" + w1 + \" | Yechildi2: \" + w2 + \" | Qoldiq: \" + wb.getBalance());\n    }\n}",
    "solution": "class WalletBalance {\n    private double balance;\n\n    public WalletBalance(double balance) {\n        this.balance = balance;\n    }\n\n    public void deposit(double amount) {\n        if (amount > 0) this.balance += amount;\n    }\n\n    public boolean withdraw(double amount) {\n        if (amount > 0 && this.balance >= amount) {\n            this.balance -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public double getBalance() {\n        return this.balance;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WalletBalance wb = new WalletBalance(100000.0);\nwb.deposit(50000.0);\nboolean w1 = wb.withdraw(120000.0);\nboolean w2 = wb.withdraw(40000.0);\nSystem.out.println(\"Yechildi1: \" + w1 + \" | Yechildi2: \" + w2 + \" | Qoldiq: \" + wb.getBalance());\n    }\n}",
    "sampleData": [
      "Yechildi1: true | Yechildi2: false | Qoldiq: 30000.0"
    ],
    "expectedOutput": "Yechildi1: true | Yechildi2: false | Qoldiq: 30000.0",
    "detailedSolution": {
      "theory": "Bank hisoblarida 'withdraw' metodi boolean qaytarishi orqali to'lov muvaffaqiyatli o'tgan yoki o'tmaganligini chaqiruvchi kodga xabar qiladi.",
      "theoryEn": "Boolean returns on withdrawal methods communicate operational success without throwing exceptions.",
      "cleanCode": "class WalletBalance {\n    private double balance;\n\n    public WalletBalance(double balance) {\n        this.balance = balance;\n    }\n\n    public void deposit(double amount) {\n        if (amount > 0) this.balance += amount;\n    }\n\n    public boolean withdraw(double amount) {\n        if (amount > 0 && this.balance >= amount) {\n            this.balance -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public double getBalance() {\n        return this.balance;\n    }\n}",
      "breakdown": [
        "<code>Tell, Don't Ask</code>: Obyektga to'g'ridan-to'g'ri 'set...' chaqirmasdan, biznes operatsiyalarini ('deposit', 'withdraw') bajarish topshiriladi."
      ],
      "pitfalls": "Balans yetarli bo'lmasa pul yechilmasligi va 'false' qaytishi lozim.",
      "cw2Tip": "To'lov jarayonini modellashtirishda 'withdraw' metodi standart talabdir."
    }
  },
  {
    "id": 108,
    "tier": 8,
    "tierName": "8-Bosqich: Biznes Operatsion Metodlari",
    "sector": "106-120: Domen Operatsiyalari",
    "title": {
      "uz": "108. Yandex Go — Yoqilg'i Quyish (refuel) va Sarflash (consumeFuel)",
      "en": "108. Yandex Go — Vehicle Fuel Refuel and Consume Operations"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nAvtomobil bakiga benzin quyuvchi 'public void refuel(double liters)' va safar davomida yoqilg'i yetarli bo'lsa sarflovchi 'public boolean consumeFuel(double liters)' metodlarini yozing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. CarFuel klassini yarating va unga xususiy (private) double toifasidagi 'fuelLiters' maydonlarini qo'shing.\n\n2. Boshlang'ich holatni o'rnatuvchi 'public CarFuel(...)' konstruktorini e'lon qiling.\n\n3. Biznes operatsiyalarini ifodalovchi domen metodlarini ('refuel(...)', 'consumeFuel(...)', 'getFuelLiters(...)') toza mantiq bilan yozing.\n\n4. 'Main' metodida ob'yekt yarating va domen amallarini bajaring.\n\n5. Natijalarni namunadagidek konsolga chiqaring.",
      "en": "📖 Real-World Scenario & Context\nManage taxi fuel levels via refuel(liters) and consumeFuel(liters) boolean.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'CarFuel' with private fields: double 'fuelLiters'.\n\n2. Write constructor initializing starting domain state.\n\n3. Implement business methods: 'refuel(...)', 'consumeFuel(...)', 'getFuelLiters(...)'.\n\n4. In 'main', instantiate object and invoke domain operations.\n\n5. Print results to console."
    },
    "story": {
      "uz": "Avtomobil bakiga benzin quyuvchi 'public void refuel(double liters)' va safar davomida yoqilg'i yetarli bo'lsa sarflovchi 'public boolean consumeFuel(double liters)' metodlarini yozing.",
      "en": "Manage taxi fuel levels via refuel(liters) and consumeFuel(liters) boolean."
    },
    "steps": {
      "uz": [
        "CarFuel klassini yarating va unga xususiy (private) double toifasidagi 'fuelLiters' maydonlarini qo'shing.",
        "Boshlang'ich holatni o'rnatuvchi 'public CarFuel(...)' konstruktorini e'lon qiling.",
        "Biznes operatsiyalarini ifodalovchi domen metodlarini ('refuel(...)', 'consumeFuel(...)', 'getFuelLiters(...)') toza mantiq bilan yozing.",
        "'Main' metodida ob'yekt yarating va domen amallarini bajaring.",
        "Natijalarni namunadagidek konsolga chiqaring."
      ],
      "en": [
        "Declare class 'CarFuel' with private fields: double 'fuelLiters'.",
        "Write constructor initializing starting domain state.",
        "Implement business methods: 'refuel(...)', 'consumeFuel(...)', 'getFuelLiters(...)'.",
        "In 'main', instantiate object and invoke domain operations.",
        "Print results to console."
      ]
    },
    "requirements": {
      "classes": [
        "CarFuel",
        "Main"
      ],
      "privateFields": [
        "fuelLiters"
      ],
      "constructors": [
        "CarFuel"
      ],
      "methods": [
        "refuel",
        "consumeFuel",
        "getFuelLiters"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class CarFuel {\n    // TODO: Maydonlar va biznes metodlarini (refuel, consumeFuel, getFuelLiters) yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CarFuel cf = new CarFuel(15.0);\ncf.refuel(20.0);\nboolean c1 = cf.consumeFuel(30.0);\nboolean c2 = cf.consumeFuel(10.0);\nSystem.out.println(\"Sarf1: \" + c1 + \" | Sarf2: \" + c2 + \" | Qoldiq: \" + cf.getFuelLiters());\n    }\n}",
    "solution": "class CarFuel {\n    private double fuelLiters;\n\n    public CarFuel(double fuelLiters) {\n        this.fuelLiters = fuelLiters;\n    }\n\n    public void refuel(double liters) {\n        if (liters > 0) this.fuelLiters += liters;\n    }\n\n    public boolean consumeFuel(double liters) {\n        if (liters > 0 && this.fuelLiters >= liters) {\n            this.fuelLiters -= liters;\n            return true;\n        }\n        return false;\n    }\n\n    public double getFuelLiters() {\n        return this.fuelLiters;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CarFuel cf = new CarFuel(15.0);\ncf.refuel(20.0);\nboolean c1 = cf.consumeFuel(30.0);\nboolean c2 = cf.consumeFuel(10.0);\nSystem.out.println(\"Sarf1: \" + c1 + \" | Sarf2: \" + c2 + \" | Qoldiq: \" + cf.getFuelLiters());\n    }\n}",
    "sampleData": [
      "Sarf1: true | Sarf2: false | Qoldiq: 5.0"
    ],
    "expectedOutput": "Sarf1: true | Sarf2: false | Qoldiq: 5.0",
    "detailedSolution": {
      "theory": "Avtomobilning ichki resurslari (yoqilg'i) operatsion metodlar orqali xavfsiz boshqariladi.",
      "theoryEn": "Fuel resource transitions are governed by encapsulated refueling and consumption domain methods.",
      "cleanCode": "class CarFuel {\n    private double fuelLiters;\n\n    public CarFuel(double fuelLiters) {\n        this.fuelLiters = fuelLiters;\n    }\n\n    public void refuel(double liters) {\n        if (liters > 0) this.fuelLiters += liters;\n    }\n\n    public boolean consumeFuel(double liters) {\n        if (liters > 0 && this.fuelLiters >= liters) {\n            this.fuelLiters -= liters;\n            return true;\n        }\n        return false;\n    }\n\n    public double getFuelLiters() {\n        return this.fuelLiters;\n    }\n}",
      "breakdown": [
        "<code>Tell, Don't Ask</code>: Obyektga to'g'ridan-to'g'ri 'set...' chaqirmasdan, biznes operatsiyalarini ('refuel', 'consumeFuel') bajarish topshiriladi."
      ],
      "pitfalls": "Yoqilg'i miqdori manfiy bo'lib ketishidan 'fuelLiters >= liters' sharti orqali saqlaning.",
      "cw2Tip": "Resurslarni iste'mol qiluvchi ob'yektlarda boolean natija qaytarish qulay usuldir."
    }
  },
  {
    "id": 109,
    "tier": 8,
    "tierName": "8-Bosqich: Biznes Operatsion Metodlari",
    "sector": "106-120: Domen Operatsiyalari",
    "title": {
      "uz": "109. Korzinka — Bonuslarni To'plash (earnPoints) va Sarflash (redeemPoints)",
      "en": "109. Korzinka — Loyalty Points Earn and Redeem Operations"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nXarid uchun bonus to'plovchi 'earnPoints(int pts)' va kassa to'lovida bonus yetarli bo'lsa sarflovchi 'redeemPoints(int pts)' metodlarini yarating.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. BonusTracker klassini yarating va unga xususiy (private) int toifasidagi 'points' maydonlarini qo'shing.\n\n2. Boshlang'ich holatni o'rnatuvchi 'public BonusTracker(...)' konstruktorini e'lon qiling.\n\n3. Biznes operatsiyalarini ifodalovchi domen metodlarini ('earnPoints(...)', 'redeemPoints(...)', 'getPoints(...)') toza mantiq bilan yozing.\n\n4. 'Main' metodida ob'yekt yarating va domen amallarini bajaring.\n\n5. Natijalarni namunadagidek konsolga chiqaring.",
      "en": "📖 Real-World Scenario & Context\nKorzinka rewards earnPoints(pts) and redeems points via boolean redeemPoints(pts).\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'BonusTracker' with private fields: int 'points'.\n\n2. Write constructor initializing starting domain state.\n\n3. Implement business methods: 'earnPoints(...)', 'redeemPoints(...)', 'getPoints(...)'.\n\n4. In 'main', instantiate object and invoke domain operations.\n\n5. Print results to console."
    },
    "story": {
      "uz": "Xarid uchun bonus to'plovchi 'earnPoints(int pts)' va kassa to'lovida bonus yetarli bo'lsa sarflovchi 'redeemPoints(int pts)' metodlarini yarating.",
      "en": "Korzinka rewards earnPoints(pts) and redeems points via boolean redeemPoints(pts)."
    },
    "steps": {
      "uz": [
        "BonusTracker klassini yarating va unga xususiy (private) int toifasidagi 'points' maydonlarini qo'shing.",
        "Boshlang'ich holatni o'rnatuvchi 'public BonusTracker(...)' konstruktorini e'lon qiling.",
        "Biznes operatsiyalarini ifodalovchi domen metodlarini ('earnPoints(...)', 'redeemPoints(...)', 'getPoints(...)') toza mantiq bilan yozing.",
        "'Main' metodida ob'yekt yarating va domen amallarini bajaring.",
        "Natijalarni namunadagidek konsolga chiqaring."
      ],
      "en": [
        "Declare class 'BonusTracker' with private fields: int 'points'.",
        "Write constructor initializing starting domain state.",
        "Implement business methods: 'earnPoints(...)', 'redeemPoints(...)', 'getPoints(...)'.",
        "In 'main', instantiate object and invoke domain operations.",
        "Print results to console."
      ]
    },
    "requirements": {
      "classes": [
        "BonusTracker",
        "Main"
      ],
      "privateFields": [
        "points"
      ],
      "constructors": [
        "BonusTracker"
      ],
      "methods": [
        "earnPoints",
        "redeemPoints",
        "getPoints"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class BonusTracker {\n    // TODO: Maydonlar va biznes metodlarini (earnPoints, redeemPoints, getPoints) yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BonusTracker bt = new BonusTracker(1000);\nbt.earnPoints(500);\nboolean r1 = bt.redeemPoints(1200);\nboolean r2 = bt.redeemPoints(500);\nSystem.out.println(\"Sarfladi1: \" + r1 + \" | Sarfladi2: \" + r2 + \" | Qoldiq: \" + bt.getPoints());\n    }\n}",
    "solution": "class BonusTracker {\n    private int points;\n\n    public BonusTracker(int points) {\n        this.points = points;\n    }\n\n    public void earnPoints(int pts) {\n        if (pts > 0) this.points += pts;\n    }\n\n    public boolean redeemPoints(int pts) {\n        if (pts > 0 && this.points >= pts) {\n            this.points -= pts;\n            return true;\n        }\n        return false;\n    }\n\n    public int getPoints() {\n        return this.points;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BonusTracker bt = new BonusTracker(1000);\nbt.earnPoints(500);\nboolean r1 = bt.redeemPoints(1200);\nboolean r2 = bt.redeemPoints(500);\nSystem.out.println(\"Sarfladi1: \" + r1 + \" | Sarfladi2: \" + r2 + \" | Qoldiq: \" + bt.getPoints());\n    }\n}",
    "sampleData": [
      "Sarfladi1: true | Sarfladi2: false | Qoldiq: 300"
    ],
    "expectedOutput": "Sarfladi1: true | Sarfladi2: false | Qoldiq: 300",
    "detailedSolution": {
      "theory": "Bonuslarni sarflash amaliyoti kassa butunligini ta'minlash uchun qat'iy tekshiruv ostida o'tadi.",
      "theoryEn": "Point redemption protocols encapsulate debit/credit operations behind safe boundary logic.",
      "cleanCode": "class BonusTracker {\n    private int points;\n\n    public BonusTracker(int points) {\n        this.points = points;\n    }\n\n    public void earnPoints(int pts) {\n        if (pts > 0) this.points += pts;\n    }\n\n    public boolean redeemPoints(int pts) {\n        if (pts > 0 && this.points >= pts) {\n            this.points -= pts;\n            return true;\n        }\n        return false;\n    }\n\n    public int getPoints() {\n        return this.points;\n    }\n}",
      "breakdown": [
        "<code>Tell, Don't Ask</code>: Obyektga to'g'ridan-to'g'ri 'set...' chaqirmasdan, biznes operatsiyalarini ('earnPoints', 'redeemPoints') bajarish topshiriladi."
      ],
      "pitfalls": "Yetarli ball bo'lmasa qoldiq o'zgarmasligi lozim.",
      "cw2Tip": "Sodiqlik tizimlarini biznes metodlari yordamida loyihalashni mashq qiling."
    }
  },
  {
    "id": 110,
    "tier": 8,
    "tierName": "8-Bosqich: Biznes Operatsion Metodlari",
    "sector": "106-120: Domen Operatsiyalari",
    "title": {
      "uz": "110. Click — Oylik Xavfsizlik Limitidan Sarflash (spendFromLimit)",
      "en": "110. Click — Monthly Security Spending Limit Operation"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nFoydalanuvchi oylik limitidan pul sarflaydi: 'public boolean spendFromLimit(double amount)' agar summa qolgan limitdan oshmasa uni kamaytiradi va true, oshsa rad etib false qaytaradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. SpendingLimit klassini yarating va unga xususiy (private) double toifasidagi 'remainingLimit' maydonlarini qo'shing.\n\n2. Boshlang'ich holatni o'rnatuvchi 'public SpendingLimit(...)' konstruktorini e'lon qiling.\n\n3. Biznes operatsiyalarini ifodalovchi domen metodlarini ('spendFromLimit(...)', 'getRemainingLimit(...)') toza mantiq bilan yozing.\n\n4. 'Main' metodida ob'yekt yarating va domen amallarini bajaring.\n\n5. Natijalarni namunadagidek konsolga chiqaring.",
      "en": "📖 Real-World Scenario & Context\nClick controls user spending caps via spendFromLimit(amount) boolean.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'SpendingLimit' with private fields: double 'remainingLimit'.\n\n2. Write constructor initializing starting domain state.\n\n3. Implement business methods: 'spendFromLimit(...)', 'getRemainingLimit(...)'.\n\n4. In 'main', instantiate object and invoke domain operations.\n\n5. Print results to console."
    },
    "story": {
      "uz": "Foydalanuvchi oylik limitidan pul sarflaydi: 'public boolean spendFromLimit(double amount)' agar summa qolgan limitdan oshmasa uni kamaytiradi va true, oshsa rad etib false qaytaradi.",
      "en": "Click controls user spending caps via spendFromLimit(amount) boolean."
    },
    "steps": {
      "uz": [
        "SpendingLimit klassini yarating va unga xususiy (private) double toifasidagi 'remainingLimit' maydonlarini qo'shing.",
        "Boshlang'ich holatni o'rnatuvchi 'public SpendingLimit(...)' konstruktorini e'lon qiling.",
        "Biznes operatsiyalarini ifodalovchi domen metodlarini ('spendFromLimit(...)', 'getRemainingLimit(...)') toza mantiq bilan yozing.",
        "'Main' metodida ob'yekt yarating va domen amallarini bajaring.",
        "Natijalarni namunadagidek konsolga chiqaring."
      ],
      "en": [
        "Declare class 'SpendingLimit' with private fields: double 'remainingLimit'.",
        "Write constructor initializing starting domain state.",
        "Implement business methods: 'spendFromLimit(...)', 'getRemainingLimit(...)'.",
        "In 'main', instantiate object and invoke domain operations.",
        "Print results to console."
      ]
    },
    "requirements": {
      "classes": [
        "SpendingLimit",
        "Main"
      ],
      "privateFields": [
        "remainingLimit"
      ],
      "constructors": [
        "SpendingLimit"
      ],
      "methods": [
        "spendFromLimit",
        "getRemainingLimit"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class SpendingLimit {\n    // TODO: Maydonlar va biznes metodlarini (spendFromLimit, getRemainingLimit) yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SpendingLimit sl = new SpendingLimit(1000000.0);\nboolean s1 = sl.spendFromLimit(400000.0);\nboolean s2 = sl.spendFromLimit(700000.0);\nSystem.out.println(\"Sarq1: \" + s1 + \" | Sarf2: \" + s2 + \" | Qoldiq limit: \" + sl.getRemainingLimit());\n    }\n}",
    "solution": "class SpendingLimit {\n    private double remainingLimit;\n\n    public SpendingLimit(double remainingLimit) {\n        this.remainingLimit = remainingLimit;\n    }\n\n    public boolean spendFromLimit(double amount) {\n        if (amount > 0 && this.remainingLimit >= amount) {\n            this.remainingLimit -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public double getRemainingLimit() {\n        return this.remainingLimit;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SpendingLimit sl = new SpendingLimit(1000000.0);\nboolean s1 = sl.spendFromLimit(400000.0);\nboolean s2 = sl.spendFromLimit(700000.0);\nSystem.out.println(\"Sarq1: \" + s1 + \" | Sarf2: \" + s2 + \" | Qoldiq limit: \" + sl.getRemainingLimit());\n    }\n}",
    "sampleData": [
      "Sarq1: true | Sarf2: false | Qoldiq limit: 600000.0"
    ],
    "expectedOutput": "Sarq1: true | Sarf2: false | Qoldiq limit: 600000.0",
    "detailedSolution": {
      "theory": "Xavfsizlik limitlari buzilmasligi uchun pul sarflash faqat ushbu operatsion metod orqali ruxsat etiladi.",
      "theoryEn": "Card safety limits are guarded against overdraw via domain assertion methods.",
      "cleanCode": "class SpendingLimit {\n    private double remainingLimit;\n\n    public SpendingLimit(double remainingLimit) {\n        this.remainingLimit = remainingLimit;\n    }\n\n    public boolean spendFromLimit(double amount) {\n        if (amount > 0 && this.remainingLimit >= amount) {\n            this.remainingLimit -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public double getRemainingLimit() {\n        return this.remainingLimit;\n    }\n}",
      "breakdown": [
        "<code>Tell, Don't Ask</code>: Obyektga to'g'ridan-to'g'ri 'set...' chaqirmasdan, biznes operatsiyalarini ('spendFromLimit', 'getRemainingLimit') bajarish topshiriladi."
      ],
      "pitfalls": "Limit yetmaganda maydon o'zgarmasdan qolishi shart.",
      "cw2Tip": "Foydalanuvchi balansi va limitlarini boshqarishda ushbu usul juda samarali."
    }
  },
  {
    "id": 111,
    "tier": 8,
    "tierName": "8-Bosqich: Biznes Operatsion Metodlari",
    "sector": "106-120: Domen Operatsiyalari",
    "title": {
      "uz": "111. Asaxiy — Kitobni Ijaraga Berish (rentOut) va Qaytarish (returnBook)",
      "en": "111. Asaxiy — Book Rental Inventory Operations"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nKutubxonada nusxalar soni mavjud. 'returnBook(int count)' nusxalar sonini oshiradi, 'rentOut(int count)' esa yetarli kitob bo'lsagina nusxani kamaytirib true qaytaradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. BookInventory klassini yarating va unga xususiy (private) int toifasidagi 'availableCopies' maydonlarini qo'shing.\n\n2. Boshlang'ich holatni o'rnatuvchi 'public BookInventory(...)' konstruktorini e'lon qiling.\n\n3. Biznes operatsiyalarini ifodalovchi domen metodlarini ('returnBook(...)', 'rentOut(...)', 'getAvailableCopies(...)') toza mantiq bilan yozing.\n\n4. 'Main' metodida ob'yekt yarating va domen amallarini bajaring.\n\n5. Natijalarni namunadagidek konsolga chiqaring.",
      "en": "📖 Real-World Scenario & Context\nManage rental copies using returnBook(count) and rentOut(count) boolean.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'BookInventory' with private fields: int 'availableCopies'.\n\n2. Write constructor initializing starting domain state.\n\n3. Implement business methods: 'returnBook(...)', 'rentOut(...)', 'getAvailableCopies(...)'.\n\n4. In 'main', instantiate object and invoke domain operations.\n\n5. Print results to console."
    },
    "story": {
      "uz": "Kutubxonada nusxalar soni mavjud. 'returnBook(int count)' nusxalar sonini oshiradi, 'rentOut(int count)' esa yetarli kitob bo'lsagina nusxani kamaytirib true qaytaradi.",
      "en": "Manage rental copies using returnBook(count) and rentOut(count) boolean."
    },
    "steps": {
      "uz": [
        "BookInventory klassini yarating va unga xususiy (private) int toifasidagi 'availableCopies' maydonlarini qo'shing.",
        "Boshlang'ich holatni o'rnatuvchi 'public BookInventory(...)' konstruktorini e'lon qiling.",
        "Biznes operatsiyalarini ifodalovchi domen metodlarini ('returnBook(...)', 'rentOut(...)', 'getAvailableCopies(...)') toza mantiq bilan yozing.",
        "'Main' metodida ob'yekt yarating va domen amallarini bajaring.",
        "Natijalarni namunadagidek konsolga chiqaring."
      ],
      "en": [
        "Declare class 'BookInventory' with private fields: int 'availableCopies'.",
        "Write constructor initializing starting domain state.",
        "Implement business methods: 'returnBook(...)', 'rentOut(...)', 'getAvailableCopies(...)'.",
        "In 'main', instantiate object and invoke domain operations.",
        "Print results to console."
      ]
    },
    "requirements": {
      "classes": [
        "BookInventory",
        "Main"
      ],
      "privateFields": [
        "availableCopies"
      ],
      "constructors": [
        "BookInventory"
      ],
      "methods": [
        "returnBook",
        "rentOut",
        "getAvailableCopies"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class BookInventory {\n    // TODO: Maydonlar va biznes metodlarini (returnBook, rentOut, getAvailableCopies) yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BookInventory bi = new BookInventory(5);\nbi.returnBook(2);\nboolean r1 = bi.rentOut(4);\nboolean r2 = bi.rentOut(5);\nSystem.out.println(\"Berildi1: \" + r1 + \" | Berildi2: \" + r2 + \" | Qoldiq kitob: \" + bi.getAvailableCopies());\n    }\n}",
    "solution": "class BookInventory {\n    private int availableCopies;\n\n    public BookInventory(int availableCopies) {\n        this.availableCopies = availableCopies;\n    }\n\n    public void returnBook(int count) {\n        if (count > 0) this.availableCopies += count;\n    }\n\n    public boolean rentOut(int count) {\n        if (count > 0 && this.availableCopies >= count) {\n            this.availableCopies -= count;\n            return true;\n        }\n        return false;\n    }\n\n    public int getAvailableCopies() {\n        return this.availableCopies;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BookInventory bi = new BookInventory(5);\nbi.returnBook(2);\nboolean r1 = bi.rentOut(4);\nboolean r2 = bi.rentOut(5);\nSystem.out.println(\"Berildi1: \" + r1 + \" | Berildi2: \" + r2 + \" | Qoldiq kitob: \" + bi.getAvailableCopies());\n    }\n}",
    "sampleData": [
      "Berildi1: true | Berildi2: false | Qoldiq kitob: 3"
    ],
    "expectedOutput": "Berildi1: true | Berildi2: false | Qoldiq kitob: 3",
    "detailedSolution": {
      "theory": "Ijara va qaytarish operatsiyalari inventarizatsiyani nazorat qilishning asosiy qoidalaridir.",
      "theoryEn": "Checkout and return library workflows are cleanly encapsulated in operational mutators.",
      "cleanCode": "class BookInventory {\n    private int availableCopies;\n\n    public BookInventory(int availableCopies) {\n        this.availableCopies = availableCopies;\n    }\n\n    public void returnBook(int count) {\n        if (count > 0) this.availableCopies += count;\n    }\n\n    public boolean rentOut(int count) {\n        if (count > 0 && this.availableCopies >= count) {\n            this.availableCopies -= count;\n            return true;\n        }\n        return false;\n    }\n\n    public int getAvailableCopies() {\n        return this.availableCopies;\n    }\n}",
      "breakdown": [
        "<code>Tell, Don't Ask</code>: Obyektga to'g'ridan-to'g'ri 'set...' chaqirmasdan, biznes operatsiyalarini ('returnBook', 'rentOut') bajarish topshiriladi."
      ],
      "pitfalls": "'rentOut' metodida 'availableCopies >= count' shartini unutmang.",
      "cw2Tip": "Kutubxona yoki ijara tizimlarini loyihalashda ushbu metodlar asosiy rolni o'ynaydi."
    }
  },
  {
    "id": 112,
    "tier": 8,
    "tierName": "8-Bosqich: Biznes Operatsion Metodlari",
    "sector": "106-120: Domen Operatsiyalari",
    "title": {
      "uz": "112. Uztelecom — Megabaytlarni To'ldirish (topUpData) va Sarflash (useData)",
      "en": "112. Uztelecom — Mobile Data TopUp and Consume Operations"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nInternet paket sotib olinganda 'topUpData(int mb)' megabayt qo'shadi, internet ishlatilganda 'useData(int mb)' yetarli bo'lsagina sarflab true qaytaradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. MobileData klassini yarating va unga xususiy (private) int toifasidagi 'remainingMb' maydonlarini qo'shing.\n\n2. Boshlang'ich holatni o'rnatuvchi 'public MobileData(...)' konstruktorini e'lon qiling.\n\n3. Biznes operatsiyalarini ifodalovchi domen metodlarini ('topUpData(...)', 'useData(...)', 'getRemainingMb(...)') toza mantiq bilan yozing.\n\n4. 'Main' metodida ob'yekt yarating va domen amallarini bajaring.\n\n5. Natijalarni namunadagidek konsolga chiqaring.",
      "en": "📖 Real-World Scenario & Context\nTelematics topUpData(mb) and useData(mb) boolean guard connectivity limits.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'MobileData' with private fields: int 'remainingMb'.\n\n2. Write constructor initializing starting domain state.\n\n3. Implement business methods: 'topUpData(...)', 'useData(...)', 'getRemainingMb(...)'.\n\n4. In 'main', instantiate object and invoke domain operations.\n\n5. Print results to console."
    },
    "story": {
      "uz": "Internet paket sotib olinganda 'topUpData(int mb)' megabayt qo'shadi, internet ishlatilganda 'useData(int mb)' yetarli bo'lsagina sarflab true qaytaradi.",
      "en": "Telematics topUpData(mb) and useData(mb) boolean guard connectivity limits."
    },
    "steps": {
      "uz": [
        "MobileData klassini yarating va unga xususiy (private) int toifasidagi 'remainingMb' maydonlarini qo'shing.",
        "Boshlang'ich holatni o'rnatuvchi 'public MobileData(...)' konstruktorini e'lon qiling.",
        "Biznes operatsiyalarini ifodalovchi domen metodlarini ('topUpData(...)', 'useData(...)', 'getRemainingMb(...)') toza mantiq bilan yozing.",
        "'Main' metodida ob'yekt yarating va domen amallarini bajaring.",
        "Natijalarni namunadagidek konsolga chiqaring."
      ],
      "en": [
        "Declare class 'MobileData' with private fields: int 'remainingMb'.",
        "Write constructor initializing starting domain state.",
        "Implement business methods: 'topUpData(...)', 'useData(...)', 'getRemainingMb(...)'.",
        "In 'main', instantiate object and invoke domain operations.",
        "Print results to console."
      ]
    },
    "requirements": {
      "classes": [
        "MobileData",
        "Main"
      ],
      "privateFields": [
        "remainingMb"
      ],
      "constructors": [
        "MobileData"
      ],
      "methods": [
        "topUpData",
        "useData",
        "getRemainingMb"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class MobileData {\n    // TODO: Maydonlar va biznes metodlarini (topUpData, useData, getRemainingMb) yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MobileData md = new MobileData(500);\nmd.topUpData(1000);\nboolean u1 = md.useData(800);\nboolean u2 = md.useData(900);\nSystem.out.println(\"Ishlatildi1: \" + u1 + \" | Ishlatildi2: \" + u2 + \" | Qoldiq: \" + md.getRemainingMb());\n    }\n}",
    "solution": "class MobileData {\n    private int remainingMb;\n\n    public MobileData(int remainingMb) {\n        this.remainingMb = remainingMb;\n    }\n\n    public void topUpData(int mb) {\n        if (mb > 0) this.remainingMb += mb;\n    }\n\n    public boolean useData(int mb) {\n        if (mb > 0 && this.remainingMb >= mb) {\n            this.remainingMb -= mb;\n            return true;\n        }\n        return false;\n    }\n\n    public int getRemainingMb() {\n        return this.remainingMb;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MobileData md = new MobileData(500);\nmd.topUpData(1000);\nboolean u1 = md.useData(800);\nboolean u2 = md.useData(900);\nSystem.out.println(\"Ishlatildi1: \" + u1 + \" | Ishlatildi2: \" + u2 + \" | Qoldiq: \" + md.getRemainingMb());\n    }\n}",
    "sampleData": [
      "Ishlatildi1: true | Ishlatildi2: false | Qoldiq: 700"
    ],
    "expectedOutput": "Ishlatildi1: true | Ishlatildi2: false | Qoldiq: 700",
    "detailedSolution": {
      "theory": "Abonent balansi tugab qolmasligi va internet uzilmasligi uchun sarflanish nazorat qilinadi.",
      "theoryEn": "Data plan meters encapsulate decrement operations behind capacity assertions.",
      "cleanCode": "class MobileData {\n    private int remainingMb;\n\n    public MobileData(int remainingMb) {\n        this.remainingMb = remainingMb;\n    }\n\n    public void topUpData(int mb) {\n        if (mb > 0) this.remainingMb += mb;\n    }\n\n    public boolean useData(int mb) {\n        if (mb > 0 && this.remainingMb >= mb) {\n            this.remainingMb -= mb;\n            return true;\n        }\n        return false;\n    }\n\n    public int getRemainingMb() {\n        return this.remainingMb;\n    }\n}",
      "breakdown": [
        "<code>Tell, Don't Ask</code>: Obyektga to'g'ridan-to'g'ri 'set...' chaqirmasdan, biznes operatsiyalarini ('topUpData', 'useData') bajarish topshiriladi."
      ],
      "pitfalls": "Trafik tugaganda maydon manfiy songa tushib ketmasligi lozim.",
      "cw2Tip": "Hisob-kitob modellarida operatsiyalar xavfsizligini ta'minlang."
    }
  },
  {
    "id": 113,
    "tier": 8,
    "tierName": "8-Bosqich: Biznes Operatsion Metodlari",
    "sector": "106-120: Domen Operatsiyalari",
    "title": {
      "uz": "113. Texnomart — Mahsulotni Band Qilish (reserveItem) va Bo'shatish",
      "en": "113. Texnomart — Product Reservation Operations"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nXaridor tovar tanlaganda 'reserveItem(int count)' agar erkin tovarlar yetarli bo'lsa band qilib true qaytaradi, 'releaseReservation(int count)' esa bekor qilinganda zaxirani kamaytiradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. ItemReservation klassini yarating va unga xususiy (private) int toifasidagi 'reservedCount', int toifasidagi 'availableStock' maydonlarini qo'shing.\n\n2. Boshlang'ich holatni o'rnatuvchi 'public ItemReservation(...)' konstruktorini e'lon qiling.\n\n3. Biznes operatsiyalarini ifodalovchi domen metodlarini ('reserveItem(...)', 'releaseReservation(...)', 'getReservedCount(...)') toza mantiq bilan yozing.\n\n4. 'Main' metodida ob'yekt yarating va domen amallarini bajaring.\n\n5. Natijalarni namunadagidek konsolga chiqaring.",
      "en": "📖 Real-World Scenario & Context\nManage checkout cart reservations using reserveItem(count) and releaseReservation(count).\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'ItemReservation' with private fields: int 'reservedCount', int 'availableStock'.\n\n2. Write constructor initializing starting domain state.\n\n3. Implement business methods: 'reserveItem(...)', 'releaseReservation(...)', 'getReservedCount(...)'.\n\n4. In 'main', instantiate object and invoke domain operations.\n\n5. Print results to console."
    },
    "story": {
      "uz": "Xaridor tovar tanlaganda 'reserveItem(int count)' agar erkin tovarlar yetarli bo'lsa band qilib true qaytaradi, 'releaseReservation(int count)' esa bekor qilinganda zaxirani kamaytiradi.",
      "en": "Manage checkout cart reservations using reserveItem(count) and releaseReservation(count)."
    },
    "steps": {
      "uz": [
        "ItemReservation klassini yarating va unga xususiy (private) int toifasidagi 'reservedCount', int toifasidagi 'availableStock' maydonlarini qo'shing.",
        "Boshlang'ich holatni o'rnatuvchi 'public ItemReservation(...)' konstruktorini e'lon qiling.",
        "Biznes operatsiyalarini ifodalovchi domen metodlarini ('reserveItem(...)', 'releaseReservation(...)', 'getReservedCount(...)') toza mantiq bilan yozing.",
        "'Main' metodida ob'yekt yarating va domen amallarini bajaring.",
        "Natijalarni namunadagidek konsolga chiqaring."
      ],
      "en": [
        "Declare class 'ItemReservation' with private fields: int 'reservedCount', int 'availableStock'.",
        "Write constructor initializing starting domain state.",
        "Implement business methods: 'reserveItem(...)', 'releaseReservation(...)', 'getReservedCount(...)'.",
        "In 'main', instantiate object and invoke domain operations.",
        "Print results to console."
      ]
    },
    "requirements": {
      "classes": [
        "ItemReservation",
        "Main"
      ],
      "privateFields": [
        "reservedCount",
        "availableStock"
      ],
      "constructors": [
        "ItemReservation"
      ],
      "methods": [
        "reserveItem",
        "releaseReservation",
        "getReservedCount"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class ItemReservation {\n    // TODO: Maydonlar va biznes metodlarini (reserveItem, releaseReservation, getReservedCount) yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ItemReservation res = new ItemReservation(10);\nboolean r1 = res.reserveItem(4);\nboolean r2 = res.reserveItem(8);\nres.releaseReservation(2);\nSystem.out.println(\"Band1: \" + r1 + \" | Band2: \" + r2 + \" | Band qoldiq: \" + res.getReservedCount());\n    }\n}",
    "solution": "class ItemReservation {\n    private int availableStock;\n    private int reservedCount;\n\n    public ItemReservation(int availableStock) {\n        this.availableStock = availableStock;\n        this.reservedCount = 0;\n    }\n\n    public boolean reserveItem(int count) {\n        if (count > 0 && (this.availableStock - this.reservedCount) >= count) {\n            this.reservedCount += count;\n            return true;\n        }\n        return false;\n    }\n\n    public void releaseReservation(int count) {\n        if (count > 0 && this.reservedCount >= count) {\n            this.reservedCount -= count;\n        }\n    }\n\n    public int getReservedCount() {\n        return this.reservedCount;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ItemReservation res = new ItemReservation(10);\nboolean r1 = res.reserveItem(4);\nboolean r2 = res.reserveItem(8);\nres.releaseReservation(2);\nSystem.out.println(\"Band1: \" + r1 + \" | Band2: \" + r2 + \" | Band qoldiq: \" + res.getReservedCount());\n    }\n}",
    "sampleData": [
      "Band1: true | Band2: false | Band qoldiq: 2"
    ],
    "expectedOutput": "Band1: true | Band2: false | Band qoldiq: 2",
    "detailedSolution": {
      "theory": "Savatchadagi tovarlarni vaqtincha zaxiraga olish boshqa xaridorlar bilan to'qnashuvni oldini oladi.",
      "theoryEn": "Stock reservations coordinate concurrent cart claims safely inside domain entities.",
      "cleanCode": "class ItemReservation {\n    private int availableStock;\n    private int reservedCount;\n\n    public ItemReservation(int availableStock) {\n        this.availableStock = availableStock;\n        this.reservedCount = 0;\n    }\n\n    public boolean reserveItem(int count) {\n        if (count > 0 && (this.availableStock - this.reservedCount) >= count) {\n            this.reservedCount += count;\n            return true;\n        }\n        return false;\n    }\n\n    public void releaseReservation(int count) {\n        if (count > 0 && this.reservedCount >= count) {\n            this.reservedCount -= count;\n        }\n    }\n\n    public int getReservedCount() {\n        return this.reservedCount;\n    }\n}",
      "breakdown": [
        "<code>Tell, Don't Ask</code>: Obyektga to'g'ridan-to'g'ri 'set...' chaqirmasdan, biznes operatsiyalarini ('reserveItem', 'releaseReservation') bajarish topshiriladi."
      ],
      "pitfalls": "Band qilingan son mavjud erkin zaxiradan oshmasligi kerak.",
      "cw2Tip": "CW2 Console Order ilovasida buyurtma berishdan oldin tovarlarni band qilish mantiqini qo'llang."
    }
  },
  {
    "id": 114,
    "tier": 8,
    "tierName": "8-Bosqich: Biznes Operatsion Metodlari",
    "sector": "106-120: Domen Operatsiyalari",
    "title": {
      "uz": "114. Milliy Bank — Kredit Qarzini Qisman To'lash (repayPrincipal)",
      "en": "114. Milliy Bank — Loan Principal Repayment Operation"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nMijoz kredit qarzini qisman to'laydi: 'repayPrincipal(double amount)' agar to'lov summasi qarzdan oshmasa uni kamaytiradi va true qaytaradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. LoanDebt klassini yarating va unga xususiy (private) double toifasidagi 'remainingDebt' maydonlarini qo'shing.\n\n2. Boshlang'ich holatni o'rnatuvchi 'public LoanDebt(...)' konstruktorini e'lon qiling.\n\n3. Biznes operatsiyalarini ifodalovchi domen metodlarini ('repayPrincipal(...)', 'getRemainingDebt(...)') toza mantiq bilan yozing.\n\n4. 'Main' metodida ob'yekt yarating va domen amallarini bajaring.\n\n5. Natijalarni namunadagidek konsolga chiqaring.",
      "en": "📖 Real-World Scenario & Context\nClients repay credit via repayPrincipal(amount) ensuring amount does not exceed remainingDebt.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'LoanDebt' with private fields: double 'remainingDebt'.\n\n2. Write constructor initializing starting domain state.\n\n3. Implement business methods: 'repayPrincipal(...)', 'getRemainingDebt(...)'.\n\n4. In 'main', instantiate object and invoke domain operations.\n\n5. Print results to console."
    },
    "story": {
      "uz": "Mijoz kredit qarzini qisman to'laydi: 'repayPrincipal(double amount)' agar to'lov summasi qarzdan oshmasa uni kamaytiradi va true qaytaradi.",
      "en": "Clients repay credit via repayPrincipal(amount) ensuring amount does not exceed remainingDebt."
    },
    "steps": {
      "uz": [
        "LoanDebt klassini yarating va unga xususiy (private) double toifasidagi 'remainingDebt' maydonlarini qo'shing.",
        "Boshlang'ich holatni o'rnatuvchi 'public LoanDebt(...)' konstruktorini e'lon qiling.",
        "Biznes operatsiyalarini ifodalovchi domen metodlarini ('repayPrincipal(...)', 'getRemainingDebt(...)') toza mantiq bilan yozing.",
        "'Main' metodida ob'yekt yarating va domen amallarini bajaring.",
        "Natijalarni namunadagidek konsolga chiqaring."
      ],
      "en": [
        "Declare class 'LoanDebt' with private fields: double 'remainingDebt'.",
        "Write constructor initializing starting domain state.",
        "Implement business methods: 'repayPrincipal(...)', 'getRemainingDebt(...)'.",
        "In 'main', instantiate object and invoke domain operations.",
        "Print results to console."
      ]
    },
    "requirements": {
      "classes": [
        "LoanDebt",
        "Main"
      ],
      "privateFields": [
        "remainingDebt"
      ],
      "constructors": [
        "LoanDebt"
      ],
      "methods": [
        "repayPrincipal",
        "getRemainingDebt"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class LoanDebt {\n    // TODO: Maydonlar va biznes metodlarini (repayPrincipal, getRemainingDebt) yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LoanDebt ld = new LoanDebt(5000000.0);\nboolean p1 = ld.repayPrincipal(2000000.0);\nboolean p2 = ld.repayPrincipal(4000000.0);\nSystem.out.println(\"To'landi1: \" + p1 + \" | To'landi2: \" + p2 + \" | Qoldiq qarz: \" + ld.getRemainingDebt());\n    }\n}",
    "solution": "class LoanDebt {\n    private double remainingDebt;\n\n    public LoanDebt(double remainingDebt) {\n        this.remainingDebt = remainingDebt;\n    }\n\n    public boolean repayPrincipal(double amount) {\n        if (amount > 0 && amount <= this.remainingDebt) {\n            this.remainingDebt -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public double getRemainingDebt() {\n        return this.remainingDebt;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LoanDebt ld = new LoanDebt(5000000.0);\nboolean p1 = ld.repayPrincipal(2000000.0);\nboolean p2 = ld.repayPrincipal(4000000.0);\nSystem.out.println(\"To'landi1: \" + p1 + \" | To'landi2: \" + p2 + \" | Qoldiq qarz: \" + ld.getRemainingDebt());\n    }\n}",
    "sampleData": [
      "To'landi1: true | To'landi2: false | Qoldiq qarz: 3000000.0"
    ],
    "expectedOutput": "To'landi1: true | To'landi2: false | Qoldiq qarz: 3000000.0",
    "detailedSolution": {
      "theory": "Qarz summasidan ortiq to'lov qabul qilinmasligi moliyaviy muvozanatni saqlaydi.",
      "theoryEn": "Debt liquidation prevents overpayment through atomic containment logic.",
      "cleanCode": "class LoanDebt {\n    private double remainingDebt;\n\n    public LoanDebt(double remainingDebt) {\n        this.remainingDebt = remainingDebt;\n    }\n\n    public boolean repayPrincipal(double amount) {\n        if (amount > 0 && amount <= this.remainingDebt) {\n            this.remainingDebt -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public double getRemainingDebt() {\n        return this.remainingDebt;\n    }\n}",
      "breakdown": [
        "<code>Tell, Don't Ask</code>: Obyektga to'g'ridan-to'g'ri 'set...' chaqirmasdan, biznes operatsiyalarini ('repayPrincipal', 'getRemainingDebt') bajarish topshiriladi."
      ],
      "pitfalls": "'amount <= remainingDebt' shartini to'g'ri tekshiring.",
      "cw2Tip": "Kreditlarni yopish va to'lovlarni qayd etishda xususiy operatsiyalardan foydalaning."
    }
  },
  {
    "id": 115,
    "tier": 8,
    "tierName": "8-Bosqich: Biznes Operatsion Metodlari",
    "sector": "106-120: Domen Operatsiyalari",
    "title": {
      "uz": "115. Medion — Shifokor Qabul O'rnini Band Qilish (bookSlot)",
      "en": "115. Medion — Doctor Appointment Slot Booking"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nShifokor qabuliga navbat olish: 'bookSlot()' bo'sh joy bo'lsa uni 1 taga kamaytirib true qaytaradi, 'cancelSlot()' esa bekor qilinganda bo'sh o'rinni 1 taga oshiradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. DoctorSchedule klassini yarating va unga xususiy (private) int toifasidagi 'availableSlots' maydonlarini qo'shing.\n\n2. Boshlang'ich holatni o'rnatuvchi 'public DoctorSchedule(...)' konstruktorini e'lon qiling.\n\n3. Biznes operatsiyalarini ifodalovchi domen metodlarini ('bookSlot(...)', 'cancelSlot(...)', 'getAvailableSlots(...)') toza mantiq bilan yozing.\n\n4. 'Main' metodida ob'yekt yarating va domen amallarini bajaring.\n\n5. Natijalarni namunadagidek konsolga chiqaring.",
      "en": "📖 Real-World Scenario & Context\nManage clinic appointment slots using bookSlot() boolean and cancelSlot().\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'DoctorSchedule' with private fields: int 'availableSlots'.\n\n2. Write constructor initializing starting domain state.\n\n3. Implement business methods: 'bookSlot(...)', 'cancelSlot(...)', 'getAvailableSlots(...)'.\n\n4. In 'main', instantiate object and invoke domain operations.\n\n5. Print results to console."
    },
    "story": {
      "uz": "Shifokor qabuliga navbat olish: 'bookSlot()' bo'sh joy bo'lsa uni 1 taga kamaytirib true qaytaradi, 'cancelSlot()' esa bekor qilinganda bo'sh o'rinni 1 taga oshiradi.",
      "en": "Manage clinic appointment slots using bookSlot() boolean and cancelSlot()."
    },
    "steps": {
      "uz": [
        "DoctorSchedule klassini yarating va unga xususiy (private) int toifasidagi 'availableSlots' maydonlarini qo'shing.",
        "Boshlang'ich holatni o'rnatuvchi 'public DoctorSchedule(...)' konstruktorini e'lon qiling.",
        "Biznes operatsiyalarini ifodalovchi domen metodlarini ('bookSlot(...)', 'cancelSlot(...)', 'getAvailableSlots(...)') toza mantiq bilan yozing.",
        "'Main' metodida ob'yekt yarating va domen amallarini bajaring.",
        "Natijalarni namunadagidek konsolga chiqaring."
      ],
      "en": [
        "Declare class 'DoctorSchedule' with private fields: int 'availableSlots'.",
        "Write constructor initializing starting domain state.",
        "Implement business methods: 'bookSlot(...)', 'cancelSlot(...)', 'getAvailableSlots(...)'.",
        "In 'main', instantiate object and invoke domain operations.",
        "Print results to console."
      ]
    },
    "requirements": {
      "classes": [
        "DoctorSchedule",
        "Main"
      ],
      "privateFields": [
        "availableSlots"
      ],
      "constructors": [
        "DoctorSchedule"
      ],
      "methods": [
        "bookSlot",
        "cancelSlot",
        "getAvailableSlots"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class DoctorSchedule {\n    // TODO: Maydonlar va biznes metodlarini (bookSlot, cancelSlot, getAvailableSlots) yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DoctorSchedule ds = new DoctorSchedule(2);\nboolean b1 = ds.bookSlot();\nboolean b2 = ds.bookSlot();\nboolean b3 = ds.bookSlot();\nds.cancelSlot();\nSystem.out.println(\"Band1: \" + b1 + \" | Band3: \" + b3 + \" | Bo'sh o'rin: \" + ds.getAvailableSlots());\n    }\n}",
    "solution": "class DoctorSchedule {\n    private int availableSlots;\n\n    public DoctorSchedule(int availableSlots) {\n        this.availableSlots = availableSlots;\n    }\n\n    public boolean bookSlot() {\n        if (this.availableSlots > 0) {\n            this.availableSlots--;\n            return true;\n        }\n        return false;\n    }\n\n    public void cancelSlot() {\n        this.availableSlots++;\n    }\n\n    public int getAvailableSlots() {\n        return this.availableSlots;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DoctorSchedule ds = new DoctorSchedule(2);\nboolean b1 = ds.bookSlot();\nboolean b2 = ds.bookSlot();\nboolean b3 = ds.bookSlot();\nds.cancelSlot();\nSystem.out.println(\"Band1: \" + b1 + \" | Band3: \" + b3 + \" | Bo'sh o'rin: \" + ds.getAvailableSlots());\n    }\n}",
    "sampleData": [
      "Band1: true | Band3: false | Bo'sh o'rin: 1"
    ],
    "expectedOutput": "Band1: true | Band3: false | Bo'sh o'rin: 1",
    "detailedSolution": {
      "theory": "Qabul o'rinlarini atomik tarzda kamaytirish va oshirish ortiqcha navbat hosil bo'lishini oldini oladi.",
      "theoryEn": "Atomic slot decrement/increment maintains accurate clinic capacity counters.",
      "cleanCode": "class DoctorSchedule {\n    private int availableSlots;\n\n    public DoctorSchedule(int availableSlots) {\n        this.availableSlots = availableSlots;\n    }\n\n    public boolean bookSlot() {\n        if (this.availableSlots > 0) {\n            this.availableSlots--;\n            return true;\n        }\n        return false;\n    }\n\n    public void cancelSlot() {\n        this.availableSlots++;\n    }\n\n    public int getAvailableSlots() {\n        return this.availableSlots;\n    }\n}",
      "breakdown": [
        "<code>Tell, Don't Ask</code>: Obyektga to'g'ridan-to'g'ri 'set...' chaqirmasdan, biznes operatsiyalarini ('bookSlot', 'cancelSlot') bajarish topshiriladi."
      ],
      "pitfalls": "O'rinlar 0 ga teng bo'lganda 'bookSlot' false qaytarishi shart.",
      "cw2Tip": "Xizmat ko'rsatish sig'imini boshqaruvchi modellarni toza loyihalang."
    }
  },
  {
    "id": 116,
    "tier": 8,
    "tierName": "8-Bosqich: Biznes Operatsion Metodlari",
    "sector": "106-120: Domen Operatsiyalari",
    "title": {
      "uz": "116. UzAirways — Yo'lovchini Samolyotga Chiqarish (boardPassenger)",
      "en": "116. UzAirways — Passenger Boarding Operation"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSamolyot eshigida yo'lovchilarni qabul qilish: 'boardPassenger()' agar chiqqanlar soni maksimal sig'imdan kam bo'lsa uni 1 taga oshirib true, to'lgan bo'lsa false qaytaradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. FlightBoarding klassini yarating va unga xususiy (private) int toifasidagi 'boardedCount', int toifasidagi 'maxCapacity' maydonlarini qo'shing.\n\n2. Boshlang'ich holatni o'rnatuvchi 'public FlightBoarding(...)' konstruktorini e'lon qiling.\n\n3. Biznes operatsiyalarini ifodalovchi domen metodlarini ('boardPassenger(...)', 'getBoardedCount(...)') toza mantiq bilan yozing.\n\n4. 'Main' metodida ob'yekt yarating va domen amallarini bajaring.\n\n5. Natijalarni namunadagidek konsolga chiqaring.",
      "en": "📖 Real-World Scenario & Context\nBoard passengers onto flight ensuring capacity limit is not breached.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'FlightBoarding' with private fields: int 'boardedCount', int 'maxCapacity'.\n\n2. Write constructor initializing starting domain state.\n\n3. Implement business methods: 'boardPassenger(...)', 'getBoardedCount(...)'.\n\n4. In 'main', instantiate object and invoke domain operations.\n\n5. Print results to console."
    },
    "story": {
      "uz": "Samolyot eshigida yo'lovchilarni qabul qilish: 'boardPassenger()' agar chiqqanlar soni maksimal sig'imdan kam bo'lsa uni 1 taga oshirib true, to'lgan bo'lsa false qaytaradi.",
      "en": "Board passengers onto flight ensuring capacity limit is not breached."
    },
    "steps": {
      "uz": [
        "FlightBoarding klassini yarating va unga xususiy (private) int toifasidagi 'boardedCount', int toifasidagi 'maxCapacity' maydonlarini qo'shing.",
        "Boshlang'ich holatni o'rnatuvchi 'public FlightBoarding(...)' konstruktorini e'lon qiling.",
        "Biznes operatsiyalarini ifodalovchi domen metodlarini ('boardPassenger(...)', 'getBoardedCount(...)') toza mantiq bilan yozing.",
        "'Main' metodida ob'yekt yarating va domen amallarini bajaring.",
        "Natijalarni namunadagidek konsolga chiqaring."
      ],
      "en": [
        "Declare class 'FlightBoarding' with private fields: int 'boardedCount', int 'maxCapacity'.",
        "Write constructor initializing starting domain state.",
        "Implement business methods: 'boardPassenger(...)', 'getBoardedCount(...)'.",
        "In 'main', instantiate object and invoke domain operations.",
        "Print results to console."
      ]
    },
    "requirements": {
      "classes": [
        "FlightBoarding",
        "Main"
      ],
      "privateFields": [
        "boardedCount",
        "maxCapacity"
      ],
      "constructors": [
        "FlightBoarding"
      ],
      "methods": [
        "boardPassenger",
        "getBoardedCount"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class FlightBoarding {\n    // TODO: Maydonlar va biznes metodlarini (boardPassenger, getBoardedCount) yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FlightBoarding fb = new FlightBoarding(3);\nboolean p1 = fb.boardPassenger();\nboolean p2 = fb.boardPassenger();\nboolean p3 = fb.boardPassenger();\nboolean p4 = fb.boardPassenger();\nSystem.out.println(\"Chiqdi1: \" + p1 + \" | Chiqdi4: \" + p4 + \" | Jami: \" + fb.getBoardedCount());\n    }\n}",
    "solution": "class FlightBoarding {\n    private int maxCapacity;\n    private int boardedCount;\n\n    public FlightBoarding(int maxCapacity) {\n        this.maxCapacity = maxCapacity;\n        this.boardedCount = 0;\n    }\n\n    public boolean boardPassenger() {\n        if (this.boardedCount < this.maxCapacity) {\n            this.boardedCount++;\n            return true;\n        }\n        return false;\n    }\n\n    public int getBoardedCount() {\n        return this.boardedCount;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FlightBoarding fb = new FlightBoarding(3);\nboolean p1 = fb.boardPassenger();\nboolean p2 = fb.boardPassenger();\nboolean p3 = fb.boardPassenger();\nboolean p4 = fb.boardPassenger();\nSystem.out.println(\"Chiqdi1: \" + p1 + \" | Chiqdi4: \" + p4 + \" | Jami: \" + fb.getBoardedCount());\n    }\n}",
    "sampleData": [
      "Chiqdi1: true | Chiqdi4: false | Jami: 3"
    ],
    "expectedOutput": "Chiqdi1: true | Chiqdi4: false | Jami: 3",
    "detailedSolution": {
      "theory": "Maksimal sig'im chegarasini tekshirish samolyot bortiga ruxsatdan ortiq odam chiqishini taqiqlaydi.",
      "theoryEn": "Boundary checks inside operational boardPassenger preserve aviation passenger safety invariants.",
      "cleanCode": "class FlightBoarding {\n    private int maxCapacity;\n    private int boardedCount;\n\n    public FlightBoarding(int maxCapacity) {\n        this.maxCapacity = maxCapacity;\n        this.boardedCount = 0;\n    }\n\n    public boolean boardPassenger() {\n        if (this.boardedCount < this.maxCapacity) {\n            this.boardedCount++;\n            return true;\n        }\n        return false;\n    }\n\n    public int getBoardedCount() {\n        return this.boardedCount;\n    }\n}",
      "breakdown": [
        "<code>Tell, Don't Ask</code>: Obyektga to'g'ridan-to'g'ri 'set...' chaqirmasdan, biznes operatsiyalarini ('boardPassenger', 'getBoardedCount') bajarish topshiriladi."
      ],
      "pitfalls": "'boardedCount < maxCapacity' shartini to'g'ri o'rnating.",
      "cw2Tip": "Sig'im va limitlar bilan ishlashda bunday operatsion metodlar juda qulay."
    }
  },
  {
    "id": 117,
    "tier": 8,
    "tierName": "8-Bosqich: Biznes Operatsion Metodlari",
    "sector": "106-120: Domen Operatsiyalari",
    "title": {
      "uz": "117. Express24 — Buyurtma Bosqichini Oldinga Surish (advanceStatus)",
      "en": "117. Express24 — Order Lifecycle Stage Advancement"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nBuyurtma hayotiy tsikli: 'NEW' -> 'PREPARING' -> 'ON_WAY' -> 'DELIVERED'. 'advanceStatus()' metodi chaqirilganda statusni keyingi bosqichga o'tkazsin.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. OrderStatusTracker klassini yarating va unga xususiy (private) String toifasidagi 'status' maydonlarini qo'shing.\n\n2. Boshlang'ich holatni o'rnatuvchi 'public OrderStatusTracker(...)' konstruktorini e'lon qiling.\n\n3. Biznes operatsiyalarini ifodalovchi domen metodlarini ('advanceStatus(...)', 'getCurrentStatus(...)') toza mantiq bilan yozing.\n\n4. 'Main' metodida ob'yekt yarating va domen amallarini bajaring.\n\n5. Natijalarni namunadagidek konsolga chiqaring.",
      "en": "📖 Real-World Scenario & Context\nOrder lifecycles transition from NEW to DELIVERED. Build advanceStatus state machine.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'OrderStatusTracker' with private fields: String 'status'.\n\n2. Write constructor initializing starting domain state.\n\n3. Implement business methods: 'advanceStatus(...)', 'getCurrentStatus(...)'.\n\n4. In 'main', instantiate object and invoke domain operations.\n\n5. Print results to console."
    },
    "story": {
      "uz": "Buyurtma hayotiy tsikli: 'NEW' -> 'PREPARING' -> 'ON_WAY' -> 'DELIVERED'. 'advanceStatus()' metodi chaqirilganda statusni keyingi bosqichga o'tkazsin.",
      "en": "Order lifecycles transition from NEW to DELIVERED. Build advanceStatus state machine."
    },
    "steps": {
      "uz": [
        "OrderStatusTracker klassini yarating va unga xususiy (private) String toifasidagi 'status' maydonlarini qo'shing.",
        "Boshlang'ich holatni o'rnatuvchi 'public OrderStatusTracker(...)' konstruktorini e'lon qiling.",
        "Biznes operatsiyalarini ifodalovchi domen metodlarini ('advanceStatus(...)', 'getCurrentStatus(...)') toza mantiq bilan yozing.",
        "'Main' metodida ob'yekt yarating va domen amallarini bajaring.",
        "Natijalarni namunadagidek konsolga chiqaring."
      ],
      "en": [
        "Declare class 'OrderStatusTracker' with private fields: String 'status'.",
        "Write constructor initializing starting domain state.",
        "Implement business methods: 'advanceStatus(...)', 'getCurrentStatus(...)'.",
        "In 'main', instantiate object and invoke domain operations.",
        "Print results to console."
      ]
    },
    "requirements": {
      "classes": [
        "OrderStatusTracker",
        "Main"
      ],
      "privateFields": [
        "status"
      ],
      "constructors": [
        "OrderStatusTracker"
      ],
      "methods": [
        "advanceStatus",
        "getCurrentStatus"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class OrderStatusTracker {\n    // TODO: Maydonlar va biznes metodlarini (advanceStatus, getCurrentStatus) yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        OrderStatusTracker ost = new OrderStatusTracker();\nost.advanceStatus();\nost.advanceStatus();\nSystem.out.println(\"Hozirgi holat: \" + ost.getCurrentStatus());\n    }\n}",
    "solution": "class OrderStatusTracker {\n    private String status;\n\n    public OrderStatusTracker() {\n        this.status = \"NEW\";\n    }\n\n    public void advanceStatus() {\n        if (this.status.equals(\"NEW\")) {\n            this.status = \"PREPARING\";\n        } else if (this.status.equals(\"PREPARING\")) {\n            this.status = \"ON_WAY\";\n        } else if (this.status.equals(\"ON_WAY\")) {\n            this.status = \"DELIVERED\";\n        }\n    }\n\n    public String getCurrentStatus() {\n        return this.status;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        OrderStatusTracker ost = new OrderStatusTracker();\nost.advanceStatus();\nost.advanceStatus();\nSystem.out.println(\"Hozirgi holat: \" + ost.getCurrentStatus());\n    }\n}",
    "sampleData": [
      "Hozirgi holat: ON_WAY"
    ],
    "expectedOutput": "Hozirgi holat: ON_WAY",
    "detailedSolution": {
      "theory": "Holat o'tishlari (State Machine) to'g'ridan-to'g'ri setter orqali emas, faqat ruxsat etilgan ketma-ketlikda 'advanceStatus()' kabi metod bilan boshqariladi.",
      "theoryEn": "Finite state machine transitions are safeguarded against illegal jumps by sequential advance methods.",
      "cleanCode": "class OrderStatusTracker {\n    private String status;\n\n    public OrderStatusTracker() {\n        this.status = \"NEW\";\n    }\n\n    public void advanceStatus() {\n        if (this.status.equals(\"NEW\")) {\n            this.status = \"PREPARING\";\n        } else if (this.status.equals(\"PREPARING\")) {\n            this.status = \"ON_WAY\";\n        } else if (this.status.equals(\"ON_WAY\")) {\n            this.status = \"DELIVERED\";\n        }\n    }\n\n    public String getCurrentStatus() {\n        return this.status;\n    }\n}",
      "breakdown": [
        "<code>Tell, Don't Ask</code>: Obyektga to'g'ridan-to'g'ri 'set...' chaqirmasdan, biznes operatsiyalarini ('advanceStatus', 'getCurrentStatus') bajarish topshiriladi."
      ],
      "pitfalls": "Stringlarni '.equals()' orqali solishtiring.",
      "cw2Tip": "CW2 Console Order Applicationda buyurtma holatini boshqarishda ushbu yondashuv tavsiya etiladi."
    }
  },
  {
    "id": 118,
    "tier": 8,
    "tierName": "8-Bosqich: Biznes Operatsion Metodlari",
    "sector": "106-120: Domen Operatsiyalari",
    "title": {
      "uz": "118. WIUT LMS — Dars Qoldirilishini Qayd Qilish (recordAbsence)",
      "en": "118. WIUT LMS — Student Absence Tracking & Barred Status"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nTalaba dars qoldirganda 'recordAbsence(int hours)' soatni qo'shadi, agar qoldirilgan soatlar 12 tadan oshsa 'isBarredFromExam()' true qaytaradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. AbsenceTracker klassini yarating va unga xususiy (private) int toifasidagi 'absenceHours' maydonlarini qo'shing.\n\n2. Boshlang'ich holatni o'rnatuvchi 'public AbsenceTracker(...)' konstruktorini e'lon qiling.\n\n3. Biznes operatsiyalarini ifodalovchi domen metodlarini ('recordAbsence(...)', 'isBarredFromExam(...)', 'getAbsenceHours(...)') toza mantiq bilan yozing.\n\n4. 'Main' metodida ob'yekt yarating va domen amallarini bajaring.\n\n5. Natijalarni namunadagidek konsolga chiqaring.",
      "en": "📖 Real-World Scenario & Context\nTrack student absences via recordAbsence(hours) and flag isBarredFromExam when hours > 12.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'AbsenceTracker' with private fields: int 'absenceHours'.\n\n2. Write constructor initializing starting domain state.\n\n3. Implement business methods: 'recordAbsence(...)', 'isBarredFromExam(...)', 'getAbsenceHours(...)'.\n\n4. In 'main', instantiate object and invoke domain operations.\n\n5. Print results to console."
    },
    "story": {
      "uz": "Talaba dars qoldirganda 'recordAbsence(int hours)' soatni qo'shadi, agar qoldirilgan soatlar 12 tadan oshsa 'isBarredFromExam()' true qaytaradi.",
      "en": "Track student absences via recordAbsence(hours) and flag isBarredFromExam when hours > 12."
    },
    "steps": {
      "uz": [
        "AbsenceTracker klassini yarating va unga xususiy (private) int toifasidagi 'absenceHours' maydonlarini qo'shing.",
        "Boshlang'ich holatni o'rnatuvchi 'public AbsenceTracker(...)' konstruktorini e'lon qiling.",
        "Biznes operatsiyalarini ifodalovchi domen metodlarini ('recordAbsence(...)', 'isBarredFromExam(...)', 'getAbsenceHours(...)') toza mantiq bilan yozing.",
        "'Main' metodida ob'yekt yarating va domen amallarini bajaring.",
        "Natijalarni namunadagidek konsolga chiqaring."
      ],
      "en": [
        "Declare class 'AbsenceTracker' with private fields: int 'absenceHours'.",
        "Write constructor initializing starting domain state.",
        "Implement business methods: 'recordAbsence(...)', 'isBarredFromExam(...)', 'getAbsenceHours(...)'.",
        "In 'main', instantiate object and invoke domain operations.",
        "Print results to console."
      ]
    },
    "requirements": {
      "classes": [
        "AbsenceTracker",
        "Main"
      ],
      "privateFields": [
        "absenceHours"
      ],
      "constructors": [
        "AbsenceTracker"
      ],
      "methods": [
        "recordAbsence",
        "isBarredFromExam",
        "getAbsenceHours"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class AbsenceTracker {\n    // TODO: Maydonlar va biznes metodlarini (recordAbsence, isBarredFromExam, getAbsenceHours) yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbsenceTracker at = new AbsenceTracker();\nat.recordAbsence(8);\nat.recordAbsence(6);\nSystem.out.println(\"Qoldirildi: \" + at.getAbsenceHours() + \" | Imtihondan chetlatildimi: \" + at.isBarredFromExam());\n    }\n}",
    "solution": "class AbsenceTracker {\n    private int absenceHours;\n\n    public AbsenceTracker() {\n        this.absenceHours = 0;\n    }\n\n    public void recordAbsence(int hours) {\n        if (hours > 0) this.absenceHours += hours;\n    }\n\n    public boolean isBarredFromExam() {\n        return this.absenceHours > 12;\n    }\n\n    public int getAbsenceHours() {\n        return this.absenceHours;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbsenceTracker at = new AbsenceTracker();\nat.recordAbsence(8);\nat.recordAbsence(6);\nSystem.out.println(\"Qoldirildi: \" + at.getAbsenceHours() + \" | Imtihondan chetlatildimi: \" + at.isBarredFromExam());\n    }\n}",
    "sampleData": [
      "Qoldirildi: 14 | Imtihondan chetlatildimi: true"
    ],
    "expectedOutput": "Qoldirildi: 14 | Imtihondan chetlatildimi: true",
    "detailedSolution": {
      "theory": "Qoidabuzarlik ko'rsatkichi hisoblangan boolean getter orqali darhol ko'rinadi.",
      "theoryEn": "Cumulative violation counters seamlessly drive boolean status predicates.",
      "cleanCode": "class AbsenceTracker {\n    private int absenceHours;\n\n    public AbsenceTracker() {\n        this.absenceHours = 0;\n    }\n\n    public void recordAbsence(int hours) {\n        if (hours > 0) this.absenceHours += hours;\n    }\n\n    public boolean isBarredFromExam() {\n        return this.absenceHours > 12;\n    }\n\n    public int getAbsenceHours() {\n        return this.absenceHours;\n    }\n}",
      "breakdown": [
        "<code>Tell, Don't Ask</code>: Obyektga to'g'ridan-to'g'ri 'set...' chaqirmasdan, biznes operatsiyalarini ('recordAbsence', 'isBarredFromExam') bajarish topshiriladi."
      ],
      "pitfalls": "'absenceHours > 12' shartini to'g'ri tekshiring.",
      "cw2Tip": "Universitet ichki qoidalariga oid modellarda talabalar intizomini tahlil qilishni o'rganing."
    }
  },
  {
    "id": 119,
    "tier": 8,
    "tierName": "8-Bosqich: Biznes Operatsion Metodlari",
    "sector": "106-120: Domen Operatsiyalari",
    "title": {
      "uz": "119. Apex Pizza — Pech Sig'imini Boshqarish (loadPizza & unloadPizza)",
      "en": "119. Apex Pizza — Pizza Oven Capacity Operations"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nPechga maksimal 4 ta pitsa sig'adi: 'loadPizza()' joy bo'lsa yuklab true qaytaradi, 'unloadPizza()' pishgan pitsani olib sonini bittaga kamaytiradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. PizzaOven klassini yarating va unga xususiy (private) int toifasidagi 'currentLoad', int toifasidagi 'capacity' maydonlarini qo'shing.\n\n2. Boshlang'ich holatni o'rnatuvchi 'public PizzaOven(...)' konstruktorini e'lon qiling.\n\n3. Biznes operatsiyalarini ifodalovchi domen metodlarini ('loadPizza(...)', 'unloadPizza(...)', 'getCurrentLoad(...)') toza mantiq bilan yozing.\n\n4. 'Main' metodida ob'yekt yarating va domen amallarini bajaring.\n\n5. Natijalarni namunadagidek konsolga chiqaring.",
      "en": "📖 Real-World Scenario & Context\nPizzeria ovens hold up to 4 pizzas. Build loadPizza() boolean and unloadPizza().\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'PizzaOven' with private fields: int 'currentLoad', int 'capacity'.\n\n2. Write constructor initializing starting domain state.\n\n3. Implement business methods: 'loadPizza(...)', 'unloadPizza(...)', 'getCurrentLoad(...)'.\n\n4. In 'main', instantiate object and invoke domain operations.\n\n5. Print results to console."
    },
    "story": {
      "uz": "Pechga maksimal 4 ta pitsa sig'adi: 'loadPizza()' joy bo'lsa yuklab true qaytaradi, 'unloadPizza()' pishgan pitsani olib sonini bittaga kamaytiradi.",
      "en": "Pizzeria ovens hold up to 4 pizzas. Build loadPizza() boolean and unloadPizza()."
    },
    "steps": {
      "uz": [
        "PizzaOven klassini yarating va unga xususiy (private) int toifasidagi 'currentLoad', int toifasidagi 'capacity' maydonlarini qo'shing.",
        "Boshlang'ich holatni o'rnatuvchi 'public PizzaOven(...)' konstruktorini e'lon qiling.",
        "Biznes operatsiyalarini ifodalovchi domen metodlarini ('loadPizza(...)', 'unloadPizza(...)', 'getCurrentLoad(...)') toza mantiq bilan yozing.",
        "'Main' metodida ob'yekt yarating va domen amallarini bajaring.",
        "Natijalarni namunadagidek konsolga chiqaring."
      ],
      "en": [
        "Declare class 'PizzaOven' with private fields: int 'currentLoad', int 'capacity'.",
        "Write constructor initializing starting domain state.",
        "Implement business methods: 'loadPizza(...)', 'unloadPizza(...)', 'getCurrentLoad(...)'.",
        "In 'main', instantiate object and invoke domain operations.",
        "Print results to console."
      ]
    },
    "requirements": {
      "classes": [
        "PizzaOven",
        "Main"
      ],
      "privateFields": [
        "currentLoad",
        "capacity"
      ],
      "constructors": [
        "PizzaOven"
      ],
      "methods": [
        "loadPizza",
        "unloadPizza",
        "getCurrentLoad"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class PizzaOven {\n    // TODO: Maydonlar va biznes metodlarini (loadPizza, unloadPizza, getCurrentLoad) yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PizzaOven oven = new PizzaOven(4);\noven.loadPizza();\noven.loadPizza();\noven.unloadPizza();\nSystem.out.println(\"Pechdagi pitsalar: \" + oven.getCurrentLoad());\n    }\n}",
    "solution": "class PizzaOven {\n    private int capacity;\n    private int currentLoad;\n\n    public PizzaOven(int capacity) {\n        this.capacity = capacity;\n        this.currentLoad = 0;\n    }\n\n    public boolean loadPizza() {\n        if (this.currentLoad < this.capacity) {\n            this.currentLoad++;\n            return true;\n        }\n        return false;\n    }\n\n    public void unloadPizza() {\n        if (this.currentLoad > 0) {\n            this.currentLoad--;\n        }\n    }\n\n    public int getCurrentLoad() {\n        return this.currentLoad;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PizzaOven oven = new PizzaOven(4);\noven.loadPizza();\noven.loadPizza();\noven.unloadPizza();\nSystem.out.println(\"Pechdagi pitsalar: \" + oven.getCurrentLoad());\n    }\n}",
    "sampleData": [
      "Pechdagi pitsalar: 1"
    ],
    "expectedOutput": "Pechdagi pitsalar: 1",
    "detailedSolution": {
      "theory": "Uskuna yuklamasini nazorat qiluvchi ushbu metodlar pechning toshib ketishini taqiqlaydi.",
      "theoryEn": "Capacity-constrained equipment models enforce load limits atomically.",
      "cleanCode": "class PizzaOven {\n    private int capacity;\n    private int currentLoad;\n\n    public PizzaOven(int capacity) {\n        this.capacity = capacity;\n        this.currentLoad = 0;\n    }\n\n    public boolean loadPizza() {\n        if (this.currentLoad < this.capacity) {\n            this.currentLoad++;\n            return true;\n        }\n        return false;\n    }\n\n    public void unloadPizza() {\n        if (this.currentLoad > 0) {\n            this.currentLoad--;\n        }\n    }\n\n    public int getCurrentLoad() {\n        return this.currentLoad;\n    }\n}",
      "breakdown": [
        "<code>Tell, Don't Ask</code>: Obyektga to'g'ridan-to'g'ri 'set...' chaqirmasdan, biznes operatsiyalarini ('loadPizza', 'unloadPizza') bajarish topshiriladi."
      ],
      "pitfalls": "'unloadPizza' chaqirilganda yuklama 0 dan kamayib ketmasligi shart.",
      "cw2Tip": "Uskuna va resurslarni boshqarishda bunday juft metodlar juda qulaydir."
    }
  },
  {
    "id": 120,
    "tier": 8,
    "tierName": "8-Bosqich: Biznes Operatsion Metodlari",
    "sector": "106-120: Domen Operatsiyalari",
    "title": {
      "uz": "120. Safia — Kechki Chegirmani Qo'llash (applyDiscount)",
      "en": "120. Safia — Evening Discount Domain Operation"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSoat 20:00 dan keyin shirinliklarga chegirma e'lon qilinadi: 'applyDiscount(double percent)' metodi narxni kiritilgan foizga kamaytiradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. EveningDiscount klassini yarating va unga xususiy (private) double toifasidagi 'finalPrice' maydonlarini qo'shing.\n\n2. Boshlang'ich holatni o'rnatuvchi 'public EveningDiscount(...)' konstruktorini e'lon qiling.\n\n3. Biznes operatsiyalarini ifodalovchi domen metodlarini ('applyDiscount(...)', 'getFinalPrice(...)') toza mantiq bilan yozing.\n\n4. 'Main' metodida ob'yekt yarating va domen amallarini bajaring.\n\n5. Natijalarni namunadagidek konsolga chiqaring.",
      "en": "📖 Real-World Scenario & Context\nSafia applies promotional markdowns via applyDiscount(percent).\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'EveningDiscount' with private fields: double 'finalPrice'.\n\n2. Write constructor initializing starting domain state.\n\n3. Implement business methods: 'applyDiscount(...)', 'getFinalPrice(...)'.\n\n4. In 'main', instantiate object and invoke domain operations.\n\n5. Print results to console."
    },
    "story": {
      "uz": "Soat 20:00 dan keyin shirinliklarga chegirma e'lon qilinadi: 'applyDiscount(double percent)' metodi narxni kiritilgan foizga kamaytiradi.",
      "en": "Safia applies promotional markdowns via applyDiscount(percent)."
    },
    "steps": {
      "uz": [
        "EveningDiscount klassini yarating va unga xususiy (private) double toifasidagi 'finalPrice' maydonlarini qo'shing.",
        "Boshlang'ich holatni o'rnatuvchi 'public EveningDiscount(...)' konstruktorini e'lon qiling.",
        "Biznes operatsiyalarini ifodalovchi domen metodlarini ('applyDiscount(...)', 'getFinalPrice(...)') toza mantiq bilan yozing.",
        "'Main' metodida ob'yekt yarating va domen amallarini bajaring.",
        "Natijalarni namunadagidek konsolga chiqaring."
      ],
      "en": [
        "Declare class 'EveningDiscount' with private fields: double 'finalPrice'.",
        "Write constructor initializing starting domain state.",
        "Implement business methods: 'applyDiscount(...)', 'getFinalPrice(...)'.",
        "In 'main', instantiate object and invoke domain operations.",
        "Print results to console."
      ]
    },
    "requirements": {
      "classes": [
        "EveningDiscount",
        "Main"
      ],
      "privateFields": [
        "finalPrice"
      ],
      "constructors": [
        "EveningDiscount"
      ],
      "methods": [
        "applyDiscount",
        "getFinalPrice"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class EveningDiscount {\n    // TODO: Maydonlar va biznes metodlarini (applyDiscount, getFinalPrice) yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        EveningDiscount ed = new EveningDiscount(40000.0);\ned.applyDiscount(20.0);\nSystem.out.println(\"Aksiya narxi: \" + ed.getFinalPrice() + \" so'm\");\n    }\n}",
    "solution": "class EveningDiscount {\n    private double finalPrice;\n\n    public EveningDiscount(double initialPrice) {\n        this.finalPrice = initialPrice;\n    }\n\n    public void applyDiscount(double percent) {\n        if (percent > 0 && percent <= 100) {\n            this.finalPrice -= (this.finalPrice * percent / 100.0);\n        }\n    }\n\n    public double getFinalPrice() {\n        return this.finalPrice;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        EveningDiscount ed = new EveningDiscount(40000.0);\ned.applyDiscount(20.0);\nSystem.out.println(\"Aksiya narxi: \" + ed.getFinalPrice() + \" so'm\");\n    }\n}",
    "sampleData": [
      "Aksiya narxi: 32000.0 so'm"
    ],
    "expectedOutput": "Aksiya narxi: 32000.0 so'm",
    "detailedSolution": {
      "theory": "Tovar narxini o'zgartirish operatsiyasi chegirma foizini hisobga olib ob'yekt holatini yangilaydi.",
      "theoryEn": "Price markdown operations apply business formulas to transition state directly.",
      "cleanCode": "class EveningDiscount {\n    private double finalPrice;\n\n    public EveningDiscount(double initialPrice) {\n        this.finalPrice = initialPrice;\n    }\n\n    public void applyDiscount(double percent) {\n        if (percent > 0 && percent <= 100) {\n            this.finalPrice -= (this.finalPrice * percent / 100.0);\n        }\n    }\n\n    public double getFinalPrice() {\n        return this.finalPrice;\n    }\n}",
      "breakdown": [
        "<code>Tell, Don't Ask</code>: Obyektga to'g'ridan-to'g'ri 'set...' chaqirmasdan, biznes operatsiyalarini ('applyDiscount', 'getFinalPrice') bajarish topshiriladi."
      ],
      "pitfalls": "Foiz qiymatini 100 ga bo'lib ayirish amalini bajaring.",
      "cw2Tip": "Do'kon aksiyalari va kassa operatsiyalarini shunday metodlar orqali amalga oshiring."
    }
  },
  {
    "id": 121,
    "tier": 9,
    "tierName": "9-Bosqich: Immutability (O'zgarmas Obyektlar)",
    "sector": "121-135: O'zgarmas Klasslar",
    "title": {
      "uz": "121. Uzum Market — Buyurtma Fiskal Cheki (OrderReceipt)",
      "en": "121. Uzum Market — Immutable Order Receipt"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nXarid amalga oshirilgach, soliq va audit talablariga ko'ra chek ma'lumotlari (receiptNo va totalAmount) o'zgarmas bo'lishi shart. Uni 'final' maydonlar va faqat getterlar bilan himoyalang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. OrderReceipt klassini yarating va unga o'zgarmas 'private final' maydonlarini (String toifasidagi 'receiptNo', double toifasidagi 'totalAmount') e'lon qiling.\n\n2. Barcha maydonlarni bir marta initsializatsiya qiluvchi 'public OrderReceipt(String receiptNo, double totalAmount)' konstruktorini yozing.\n\n3. Maydonlarni o'qish uchun getter metodlarini ('getReceiptNo()', 'getTotalAmount()') taqdim eting (ammo hech qanday setter YOZILMASLIGI SHART!).\n\n4. 'Main' klassi 'main' metodida 'OrderReceipt' o'zgarmas ob'yektini yarating.\n\n5. Ma'lumotlarni namunadagidek konsolga chop eting.",
      "en": "📖 Real-World Scenario & Context\nAudit and tax requirements require fiscal receipts to be strictly immutable once generated. Implement with final fields and no setters.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'OrderReceipt' with immutable fields: String 'receiptNo', double 'totalAmount'.\n\n2. Write constructor 'public OrderReceipt(String receiptNo, double totalAmount)' initializing all final fields.\n\n3. Implement read-only accessors: 'getReceiptNo()', 'getTotalAmount()' (do NOT declare any mutator setters).\n\n4. Instantiate immutable 'OrderReceipt' in 'main'.\n\n5. Print state to console."
    },
    "story": {
      "uz": "Xarid amalga oshirilgach, soliq va audit talablariga ko'ra chek ma'lumotlari (receiptNo va totalAmount) o'zgarmas bo'lishi shart. Uni 'final' maydonlar va faqat getterlar bilan himoyalang.",
      "en": "Audit and tax requirements require fiscal receipts to be strictly immutable once generated. Implement with final fields and no setters."
    },
    "steps": {
      "uz": [
        "OrderReceipt klassini yarating va unga o'zgarmas 'private final' maydonlarini (String toifasidagi 'receiptNo', double toifasidagi 'totalAmount') e'lon qiling.",
        "Barcha maydonlarni bir marta initsializatsiya qiluvchi 'public OrderReceipt(String receiptNo, double totalAmount)' konstruktorini yozing.",
        "Maydonlarni o'qish uchun getter metodlarini ('getReceiptNo()', 'getTotalAmount()') taqdim eting (ammo hech qanday setter YOZILMASLIGI SHART!).",
        "'Main' klassi 'main' metodida 'OrderReceipt' o'zgarmas ob'yektini yarating.",
        "Ma'lumotlarni namunadagidek konsolga chop eting."
      ],
      "en": [
        "Declare class 'OrderReceipt' with immutable fields: String 'receiptNo', double 'totalAmount'.",
        "Write constructor 'public OrderReceipt(String receiptNo, double totalAmount)' initializing all final fields.",
        "Implement read-only accessors: 'getReceiptNo()', 'getTotalAmount()' (do NOT declare any mutator setters).",
        "Instantiate immutable 'OrderReceipt' in 'main'.",
        "Print state to console."
      ]
    },
    "requirements": {
      "classes": [
        "OrderReceipt",
        "Main"
      ],
      "privateFields": [
        "receiptNo",
        "totalAmount"
      ],
      "constructors": [
        "OrderReceipt"
      ],
      "methods": [
        "getReceiptNo",
        "getTotalAmount"
      ],
      "keywords": [
        "final",
        "this"
      ]
    },
    "starterCode": "class OrderReceipt {\n    // TODO: private final maydonlarni e'lon qiling va konstruktorda to'ldiring\n    // Diqqat: hech qanday setter YOZILMASLIGI SHART!\n}\n\nclass Main {\n    public static void main(String[] args) {\n        OrderReceipt receipt = new OrderReceipt(\"UZM-9921\", 340000.0);\nSystem.out.println(\"Chek: \" + receipt.getReceiptNo() + \" | Summa: \" + receipt.getTotalAmount() + \" so'm\");\n    }\n}",
    "solution": "class OrderReceipt {\n    private final String receiptNo;\n    private final double totalAmount;\n\n    public OrderReceipt(String receiptNo, double totalAmount) {\n        this.receiptNo = receiptNo; this.totalAmount = totalAmount;\n    }\n\n    public String getReceiptNo() {\n        return this.receiptNo;\n    }\n\n    public double getTotalAmount() {\n        return this.totalAmount;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        OrderReceipt receipt = new OrderReceipt(\"UZM-9921\", 340000.0);\nSystem.out.println(\"Chek: \" + receipt.getReceiptNo() + \" | Summa: \" + receipt.getTotalAmount() + \" so'm\");\n    }\n}",
    "sampleData": [
      "Chek: UZM-9921 | Summa: 340000.0 so'm"
    ],
    "expectedOutput": "Chek: UZM-9921 | Summa: 340000.0 so'm",
    "detailedSolution": {
      "theory": "Immutable (o'zgarmas) obyekt — yaratilgandan so'ng holati (maydonlari) aslo o'zgarmaydigan obyektdir. Buning uchun maydonlar 'private final' e'lon qilinadi va hech qanday setter taqdim etilmaydi.",
      "theoryEn": "An immutable object guarantees thread-safety and data integrity by marking fields 'private final' and omitting mutator methods.",
      "cleanCode": "private final String receiptNo;\n    private final double totalAmount;\npublic OrderReceipt(String receiptNo, double totalAmount) {\n    this.receiptNo = receiptNo; this.totalAmount = totalAmount;\n}",
      "breakdown": [
        "<code>private final</code>: Maydon xotirada faqat bir marta konstruktorda qiymat oladi va keyin aslo o'zgarmaydi.",
        "<code>No Setters</code>: O'zgarmaslik (immutability) ma'lumotlar yaxlitligi va xavfsizligini kafolatlaydi."
      ],
      "pitfalls": "Immutable sinflarda hech qachon setter (setReceiptNo, setTotalAmount) yozilmaydi.",
      "cw2Tip": "CW2 Console Order Applicationda tranzaksiya identifikatorlari va kvitansiyalar uchun immutability tamoyilidan foydalaning."
    }
  },
  {
    "id": 122,
    "tier": 9,
    "tierName": "9-Bosqich: Immutability (O'zgarmas Obyektlar)",
    "sector": "121-135: O'zgarmas Klasslar",
    "title": {
      "uz": "122. Payme — O'zgarmas Tranzaksiya Identyfikatori (TransactionId)",
      "en": "122. Payme — Immutable Transaction Identifier"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nMoliyaviy tranzaksiya unikal identifikatori (prefix va numericCode) to'lov paytida bir marta shakllanadi va keyinchalik o'zgartirilishi xavfsizlikka ziddir.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. TransactionId klassini yarating va unga o'zgarmas 'private final' maydonlarini (String toifasidagi 'prefix', long toifasidagi 'numericCode') e'lon qiling.\n\n2. Barcha maydonlarni bir marta initsializatsiya qiluvchi 'public TransactionId(String prefix, long numericCode)' konstruktorini yozing.\n\n3. Maydonlarni o'qish uchun getter metodlarini ('getPrefix()', 'getNumericCode()') taqdim eting (ammo hech qanday setter YOZILMASLIGI SHART!).\n\n4. 'Main' klassi 'main' metodida 'TransactionId' o'zgarmas ob'yektini yarating.\n\n5. Ma'lumotlarni namunadagidek konsolga chop eting.",
      "en": "📖 Real-World Scenario & Context\nTransaction IDs must never mutate after initiation. Implement an immutable TransactionId holder.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'TransactionId' with immutable fields: String 'prefix', long 'numericCode'.\n\n2. Write constructor 'public TransactionId(String prefix, long numericCode)' initializing all final fields.\n\n3. Implement read-only accessors: 'getPrefix()', 'getNumericCode()' (do NOT declare any mutator setters).\n\n4. Instantiate immutable 'TransactionId' in 'main'.\n\n5. Print state to console."
    },
    "story": {
      "uz": "Moliyaviy tranzaksiya unikal identifikatori (prefix va numericCode) to'lov paytida bir marta shakllanadi va keyinchalik o'zgartirilishi xavfsizlikka ziddir.",
      "en": "Transaction IDs must never mutate after initiation. Implement an immutable TransactionId holder."
    },
    "steps": {
      "uz": [
        "TransactionId klassini yarating va unga o'zgarmas 'private final' maydonlarini (String toifasidagi 'prefix', long toifasidagi 'numericCode') e'lon qiling.",
        "Barcha maydonlarni bir marta initsializatsiya qiluvchi 'public TransactionId(String prefix, long numericCode)' konstruktorini yozing.",
        "Maydonlarni o'qish uchun getter metodlarini ('getPrefix()', 'getNumericCode()') taqdim eting (ammo hech qanday setter YOZILMASLIGI SHART!).",
        "'Main' klassi 'main' metodida 'TransactionId' o'zgarmas ob'yektini yarating.",
        "Ma'lumotlarni namunadagidek konsolga chop eting."
      ],
      "en": [
        "Declare class 'TransactionId' with immutable fields: String 'prefix', long 'numericCode'.",
        "Write constructor 'public TransactionId(String prefix, long numericCode)' initializing all final fields.",
        "Implement read-only accessors: 'getPrefix()', 'getNumericCode()' (do NOT declare any mutator setters).",
        "Instantiate immutable 'TransactionId' in 'main'.",
        "Print state to console."
      ]
    },
    "requirements": {
      "classes": [
        "TransactionId",
        "Main"
      ],
      "privateFields": [
        "prefix",
        "numericCode"
      ],
      "constructors": [
        "TransactionId"
      ],
      "methods": [
        "getPrefix",
        "getNumericCode"
      ],
      "keywords": [
        "final",
        "this"
      ]
    },
    "starterCode": "class TransactionId {\n    // TODO: private final maydonlarni e'lon qiling va konstruktorda to'ldiring\n    // Diqqat: hech qanday setter YOZILMASLIGI SHART!\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TransactionId tx = new TransactionId(\"PAYME-TX\", 8847291045L);\nSystem.out.println(\"ID: \" + tx.getPrefix() + \"-\" + tx.getNumericCode());\n    }\n}",
    "solution": "class TransactionId {\n    private final String prefix;\n    private final long numericCode;\n\n    public TransactionId(String prefix, long numericCode) {\n        this.prefix = prefix; this.numericCode = numericCode;\n    }\n\n    public String getPrefix() {\n        return this.prefix;\n    }\n\n    public long getNumericCode() {\n        return this.numericCode;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TransactionId tx = new TransactionId(\"PAYME-TX\", 8847291045L);\nSystem.out.println(\"ID: \" + tx.getPrefix() + \"-\" + tx.getNumericCode());\n    }\n}",
    "sampleData": [
      "ID: PAYME-TX-8847291045"
    ],
    "expectedOutput": "ID: PAYME-TX-8847291045",
    "detailedSolution": {
      "theory": "'final' kalit so'zi maydon faqat konstruktorda bir marta qiymat olishini va keyinchalik qayta tayinlanmasligini kafolatlaydi.",
      "theoryEn": "The 'final' modifier guarantees that assigned reference and primitive fields cannot be reassigned after construction.",
      "cleanCode": "private final String prefix;\n    private final long numericCode;\npublic TransactionId(String prefix, long numericCode) {\n    this.prefix = prefix; this.numericCode = numericCode;\n}",
      "breakdown": [
        "<code>private final</code>: Maydon xotirada faqat bir marta konstruktorda qiymat oladi va keyin aslo o'zgarmaydi.",
        "<code>No Setters</code>: O'zgarmaslik (immutability) ma'lumotlar yaxlitligi va xavfsizligini kafolatlaydi."
      ],
      "pitfalls": "'final' maydon konstruktorda boshlang'ich qiymat olmasa kompilyatsiya xatosi beradi.",
      "cw2Tip": "Buyurtma ID si kabi yagona kodlarni final qilib yaratish xavfsizlikni oshiradi."
    }
  },
  {
    "id": 123,
    "tier": 9,
    "tierName": "9-Bosqich: Immutability (O'zgarmas Obyektlar)",
    "sector": "121-135: O'zgarmas Klasslar",
    "title": {
      "uz": "123. Yandex Go — Xarita Koordinatasi (GeoLocation)",
      "en": "123. Yandex Go — Immutable Geo Location Coordinate"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nBuyurtma berilgan manzilning GPS kenglik (latitude) va uzunlik (longitude) nuqtasi o'zgarmas qiymat obyekti (Value Object) sifatida yaratilishi kerak.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. GeoLocation klassini yarating va unga o'zgarmas 'private final' maydonlarini (double toifasidagi 'latitude', double toifasidagi 'longitude') e'lon qiling.\n\n2. Barcha maydonlarni bir marta initsializatsiya qiluvchi 'public GeoLocation(double latitude, double longitude)' konstruktorini yozing.\n\n3. Maydonlarni o'qish uchun getter metodlarini ('getLatitude()', 'getLongitude()') taqdim eting (ammo hech qanday setter YOZILMASLIGI SHART!).\n\n4. 'Main' klassi 'main' metodida 'GeoLocation' o'zgarmas ob'yektini yarating.\n\n5. Ma'lumotlarni namunadagidek konsolga chop eting.",
      "en": "📖 Real-World Scenario & Context\nGPS coordinates represent pure value objects that should never mutate once captured from geolocation services.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'GeoLocation' with immutable fields: double 'latitude', double 'longitude'.\n\n2. Write constructor 'public GeoLocation(double latitude, double longitude)' initializing all final fields.\n\n3. Implement read-only accessors: 'getLatitude()', 'getLongitude()' (do NOT declare any mutator setters).\n\n4. Instantiate immutable 'GeoLocation' in 'main'.\n\n5. Print state to console."
    },
    "story": {
      "uz": "Buyurtma berilgan manzilning GPS kenglik (latitude) va uzunlik (longitude) nuqtasi o'zgarmas qiymat obyekti (Value Object) sifatida yaratilishi kerak.",
      "en": "GPS coordinates represent pure value objects that should never mutate once captured from geolocation services."
    },
    "steps": {
      "uz": [
        "GeoLocation klassini yarating va unga o'zgarmas 'private final' maydonlarini (double toifasidagi 'latitude', double toifasidagi 'longitude') e'lon qiling.",
        "Barcha maydonlarni bir marta initsializatsiya qiluvchi 'public GeoLocation(double latitude, double longitude)' konstruktorini yozing.",
        "Maydonlarni o'qish uchun getter metodlarini ('getLatitude()', 'getLongitude()') taqdim eting (ammo hech qanday setter YOZILMASLIGI SHART!).",
        "'Main' klassi 'main' metodida 'GeoLocation' o'zgarmas ob'yektini yarating.",
        "Ma'lumotlarni namunadagidek konsolga chop eting."
      ],
      "en": [
        "Declare class 'GeoLocation' with immutable fields: double 'latitude', double 'longitude'.",
        "Write constructor 'public GeoLocation(double latitude, double longitude)' initializing all final fields.",
        "Implement read-only accessors: 'getLatitude()', 'getLongitude()' (do NOT declare any mutator setters).",
        "Instantiate immutable 'GeoLocation' in 'main'.",
        "Print state to console."
      ]
    },
    "requirements": {
      "classes": [
        "GeoLocation",
        "Main"
      ],
      "privateFields": [
        "latitude",
        "longitude"
      ],
      "constructors": [
        "GeoLocation"
      ],
      "methods": [
        "getLatitude",
        "getLongitude"
      ],
      "keywords": [
        "final",
        "this"
      ]
    },
    "starterCode": "class GeoLocation {\n    // TODO: private final maydonlarni e'lon qiling va konstruktorda to'ldiring\n    // Diqqat: hech qanday setter YOZILMASLIGI SHART!\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GeoLocation loc = new GeoLocation(41.311081, 69.240562);\nSystem.out.println(\"Nuqta: \" + loc.getLatitude() + \", \" + loc.getLongitude());\n    }\n}",
    "solution": "class GeoLocation {\n    private final double latitude;\n    private final double longitude;\n\n    public GeoLocation(double latitude, double longitude) {\n        this.latitude = latitude; this.longitude = longitude;\n    }\n\n    public double getLatitude() {\n        return this.latitude;\n    }\n\n    public double getLongitude() {\n        return this.longitude;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GeoLocation loc = new GeoLocation(41.311081, 69.240562);\nSystem.out.println(\"Nuqta: \" + loc.getLatitude() + \", \" + loc.getLongitude());\n    }\n}",
    "sampleData": [
      "Nuqta: 41.311081, 69.240562"
    ],
    "expectedOutput": "Nuqta: 41.311081, 69.240562",
    "detailedSolution": {
      "theory": "Koordinata, pul, vaqt kabi qiymat obyektlari (Value Objects) doimo 'immutable' qilib loyihalashtirilishi eng yaxshi amaliyotdir.",
      "theoryEn": "Domain value objects (coordinates, monetary amounts, time points) should always be immutable to avoid side-effects.",
      "cleanCode": "private final double latitude;\n    private final double longitude;\npublic GeoLocation(double latitude, double longitude) {\n    this.latitude = latitude; this.longitude = longitude;\n}",
      "breakdown": [
        "<code>private final</code>: Maydon xotirada faqat bir marta konstruktorda qiymat oladi va keyin aslo o'zgarmaydi.",
        "<code>No Setters</code>: O'zgarmaslik (immutability) ma'lumotlar yaxlitligi va xavfsizligini kafolatlaydi."
      ],
      "pitfalls": "Setter metodlarini qo'shmang, koordinatalar yangilansa yangi ob'yekt yaratiladi.",
      "cw2Tip": "Manzil koordinatalari uchun Value Object modelidan foydalanish yuqori baholanadi."
    }
  },
  {
    "id": 124,
    "tier": 9,
    "tierName": "9-Bosqich: Immutability (O'zgarmas Obyektlar)",
    "sector": "121-135: O'zgarmas Klasslar",
    "title": {
      "uz": "124. Soliq Uz — Fiskal Belgisi (FiscalSign)",
      "en": "124. Soliq Uz — Immutable Fiscal Signature"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSoliq qo'mitasi kassa mashinasidan uzatiladigan fiskal belgi (fiscalNumber va terminalId) qalbaki o'zgarishlardan 100% himoyalangan bo'lishi talab etiladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. FiscalSign klassini yarating va unga o'zgarmas 'private final' maydonlarini (String toifasidagi 'fiscalNumber', String toifasidagi 'terminalId') e'lon qiling.\n\n2. Barcha maydonlarni bir marta initsializatsiya qiluvchi 'public FiscalSign(String fiscalNumber, String terminalId)' konstruktorini yozing.\n\n3. Maydonlarni o'qish uchun getter metodlarini ('getFiscalNumber()', 'getTerminalId()') taqdim eting (ammo hech qanday setter YOZILMASLIGI SHART!).\n\n4. 'Main' klassi 'main' metodida 'FiscalSign' o'zgarmas ob'yektini yarating.\n\n5. Ma'lumotlarni namunadagidek konsolga chop eting.",
      "en": "📖 Real-World Scenario & Context\nState fiscal signatures submitted by POS terminals must be immutably sealed against fraudulent tampering.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'FiscalSign' with immutable fields: String 'fiscalNumber', String 'terminalId'.\n\n2. Write constructor 'public FiscalSign(String fiscalNumber, String terminalId)' initializing all final fields.\n\n3. Implement read-only accessors: 'getFiscalNumber()', 'getTerminalId()' (do NOT declare any mutator setters).\n\n4. Instantiate immutable 'FiscalSign' in 'main'.\n\n5. Print state to console."
    },
    "story": {
      "uz": "Soliq qo'mitasi kassa mashinasidan uzatiladigan fiskal belgi (fiscalNumber va terminalId) qalbaki o'zgarishlardan 100% himoyalangan bo'lishi talab etiladi.",
      "en": "State fiscal signatures submitted by POS terminals must be immutably sealed against fraudulent tampering."
    },
    "steps": {
      "uz": [
        "FiscalSign klassini yarating va unga o'zgarmas 'private final' maydonlarini (String toifasidagi 'fiscalNumber', String toifasidagi 'terminalId') e'lon qiling.",
        "Barcha maydonlarni bir marta initsializatsiya qiluvchi 'public FiscalSign(String fiscalNumber, String terminalId)' konstruktorini yozing.",
        "Maydonlarni o'qish uchun getter metodlarini ('getFiscalNumber()', 'getTerminalId()') taqdim eting (ammo hech qanday setter YOZILMASLIGI SHART!).",
        "'Main' klassi 'main' metodida 'FiscalSign' o'zgarmas ob'yektini yarating.",
        "Ma'lumotlarni namunadagidek konsolga chop eting."
      ],
      "en": [
        "Declare class 'FiscalSign' with immutable fields: String 'fiscalNumber', String 'terminalId'.",
        "Write constructor 'public FiscalSign(String fiscalNumber, String terminalId)' initializing all final fields.",
        "Implement read-only accessors: 'getFiscalNumber()', 'getTerminalId()' (do NOT declare any mutator setters).",
        "Instantiate immutable 'FiscalSign' in 'main'.",
        "Print state to console."
      ]
    },
    "requirements": {
      "classes": [
        "FiscalSign",
        "Main"
      ],
      "privateFields": [
        "fiscalNumber",
        "terminalId"
      ],
      "constructors": [
        "FiscalSign"
      ],
      "methods": [
        "getFiscalNumber",
        "getTerminalId"
      ],
      "keywords": [
        "final",
        "this"
      ]
    },
    "starterCode": "class FiscalSign {\n    // TODO: private final maydonlarni e'lon qiling va konstruktorda to'ldiring\n    // Diqqat: hech qanday setter YOZILMASLIGI SHART!\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FiscalSign sign = new FiscalSign(\"FS-2026-X99\", \"TERM-410\");\nSystem.out.println(\"Fiskal belgi: \" + sign.getFiscalNumber() + \" [\" + sign.getTerminalId() + \"]\");\n    }\n}",
    "solution": "class FiscalSign {\n    private final String fiscalNumber;\n    private final String terminalId;\n\n    public FiscalSign(String fiscalNumber, String terminalId) {\n        this.fiscalNumber = fiscalNumber; this.terminalId = terminalId;\n    }\n\n    public String getFiscalNumber() {\n        return this.fiscalNumber;\n    }\n\n    public String getTerminalId() {\n        return this.terminalId;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FiscalSign sign = new FiscalSign(\"FS-2026-X99\", \"TERM-410\");\nSystem.out.println(\"Fiskal belgi: \" + sign.getFiscalNumber() + \" [\" + sign.getTerminalId() + \"]\");\n    }\n}",
    "sampleData": [
      "Fiskal belgi: FS-2026-X99 [TERM-410]"
    ],
    "expectedOutput": "Fiskal belgi: FS-2026-X99 [TERM-410]",
    "detailedSolution": {
      "theory": "Immutable modellar ma'lumotlar buzilishining (data tampering) oldini oladi va tizim xavfsizligini ta'minlaydi.",
      "theoryEn": "Immutable data structures provide architectural security against unwanted state tampering across thread boundaries.",
      "cleanCode": "private final String fiscalNumber;\n    private final String terminalId;\npublic FiscalSign(String fiscalNumber, String terminalId) {\n    this.fiscalNumber = fiscalNumber; this.terminalId = terminalId;\n}",
      "breakdown": [
        "<code>private final</code>: Maydon xotirada faqat bir marta konstruktorda qiymat oladi va keyin aslo o'zgarmaydi.",
        "<code>No Setters</code>: O'zgarmaslik (immutability) ma'lumotlar yaxlitligi va xavfsizligini kafolatlaydi."
      ],
      "pitfalls": "Har ikkala maydon ham 'private final' bo'lishi va faqat getter orqali o'qilishi lozim.",
      "cw2Tip": "Soliq va chek ma'lumotlarini dasturda saqlashda ushbu namunadan foydalaning."
    }
  },
  {
    "id": 125,
    "tier": 9,
    "tierName": "9-Bosqich: Immutability (O'zgarmas Obyektlar)",
    "sector": "121-135: O'zgarmas Klasslar",
    "title": {
      "uz": "125. CBU — Rasmiy Valyuta Kursi Yozuvi (CurrencyUnit)",
      "en": "125. CBU — Immutable Currency Exchange Snapshot"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nMarkaziy bank e'lon qilgan kunlik valyuta kursi (currencyCode va rateInUzs) kun davomida bir xil saqlanishi kerak bo'lgan o'zgarmas fakt yozuvidir.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. CurrencyUnit klassini yarating va unga o'zgarmas 'private final' maydonlarini (String toifasidagi 'currencyCode', double toifasidagi 'rateInUzs') e'lon qiling.\n\n2. Barcha maydonlarni bir marta initsializatsiya qiluvchi 'public CurrencyUnit(String currencyCode, double rateInUzs)' konstruktorini yozing.\n\n3. Maydonlarni o'qish uchun getter metodlarini ('getCurrencyCode()', 'getRateInUzs()') taqdim eting (ammo hech qanday setter YOZILMASLIGI SHART!).\n\n4. 'Main' klassi 'main' metodida 'CurrencyUnit' o'zgarmas ob'yektini yarating.\n\n5. Ma'lumotlarni namunadagidek konsolga chop eting.",
      "en": "📖 Real-World Scenario & Context\nOfficial daily exchange rates published by the Central Bank represent fixed historical facts that must remain immutable.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'CurrencyUnit' with immutable fields: String 'currencyCode', double 'rateInUzs'.\n\n2. Write constructor 'public CurrencyUnit(String currencyCode, double rateInUzs)' initializing all final fields.\n\n3. Implement read-only accessors: 'getCurrencyCode()', 'getRateInUzs()' (do NOT declare any mutator setters).\n\n4. Instantiate immutable 'CurrencyUnit' in 'main'.\n\n5. Print state to console."
    },
    "story": {
      "uz": "Markaziy bank e'lon qilgan kunlik valyuta kursi (currencyCode va rateInUzs) kun davomida bir xil saqlanishi kerak bo'lgan o'zgarmas fakt yozuvidir.",
      "en": "Official daily exchange rates published by the Central Bank represent fixed historical facts that must remain immutable."
    },
    "steps": {
      "uz": [
        "CurrencyUnit klassini yarating va unga o'zgarmas 'private final' maydonlarini (String toifasidagi 'currencyCode', double toifasidagi 'rateInUzs') e'lon qiling.",
        "Barcha maydonlarni bir marta initsializatsiya qiluvchi 'public CurrencyUnit(String currencyCode, double rateInUzs)' konstruktorini yozing.",
        "Maydonlarni o'qish uchun getter metodlarini ('getCurrencyCode()', 'getRateInUzs()') taqdim eting (ammo hech qanday setter YOZILMASLIGI SHART!).",
        "'Main' klassi 'main' metodida 'CurrencyUnit' o'zgarmas ob'yektini yarating.",
        "Ma'lumotlarni namunadagidek konsolga chop eting."
      ],
      "en": [
        "Declare class 'CurrencyUnit' with immutable fields: String 'currencyCode', double 'rateInUzs'.",
        "Write constructor 'public CurrencyUnit(String currencyCode, double rateInUzs)' initializing all final fields.",
        "Implement read-only accessors: 'getCurrencyCode()', 'getRateInUzs()' (do NOT declare any mutator setters).",
        "Instantiate immutable 'CurrencyUnit' in 'main'.",
        "Print state to console."
      ]
    },
    "requirements": {
      "classes": [
        "CurrencyUnit",
        "Main"
      ],
      "privateFields": [
        "currencyCode",
        "rateInUzs"
      ],
      "constructors": [
        "CurrencyUnit"
      ],
      "methods": [
        "getCurrencyCode",
        "getRateInUzs"
      ],
      "keywords": [
        "final",
        "this"
      ]
    },
    "starterCode": "class CurrencyUnit {\n    // TODO: private final maydonlarni e'lon qiling va konstruktorda to'ldiring\n    // Diqqat: hech qanday setter YOZILMASLIGI SHART!\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CurrencyUnit unit = new CurrencyUnit(\"USD\", 12850.0);\nSystem.out.println(\"Kurs: 1 \" + unit.getCurrencyCode() + \" = \" + unit.getRateInUzs() + \" UZS\");\n    }\n}",
    "solution": "class CurrencyUnit {\n    private final String currencyCode;\n    private final double rateInUzs;\n\n    public CurrencyUnit(String currencyCode, double rateInUzs) {\n        this.currencyCode = currencyCode; this.rateInUzs = rateInUzs;\n    }\n\n    public String getCurrencyCode() {\n        return this.currencyCode;\n    }\n\n    public double getRateInUzs() {\n        return this.rateInUzs;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CurrencyUnit unit = new CurrencyUnit(\"USD\", 12850.0);\nSystem.out.println(\"Kurs: 1 \" + unit.getCurrencyCode() + \" = \" + unit.getRateInUzs() + \" UZS\");\n    }\n}",
    "sampleData": [
      "Kurs: 1 USD = 12850.0 UZS"
    ],
    "expectedOutput": "Kurs: 1 USD = 12850.0 UZS",
    "detailedSolution": {
      "theory": "Tarixiy ma'lumotlar va rasmiy kurslar o'zgarishi mumkin emas. Ularni o'zgarmas sinf ko'rinishida saqlash xavfsiz hisoblanadi.",
      "theoryEn": "Historical snapshots and currency fixtures benefit from immutable design, preventing accidental recalculations.",
      "cleanCode": "private final String currencyCode;\n    private final double rateInUzs;\npublic CurrencyUnit(String currencyCode, double rateInUzs) {\n    this.currencyCode = currencyCode; this.rateInUzs = rateInUzs;\n}",
      "breakdown": [
        "<code>private final</code>: Maydon xotirada faqat bir marta konstruktorda qiymat oladi va keyin aslo o'zgarmaydi.",
        "<code>No Setters</code>: O'zgarmaslik (immutability) ma'lumotlar yaxlitligi va xavfsizligini kafolatlaydi."
      ],
      "pitfalls": "Valyuta kodi va kurs qiymati konstruktorda o'rnatilgach qayta o'zgarmaydi.",
      "cw2Tip": "Valyuta konvertatsiyasi uchun foydalaniladigan kurslarni immutable ob'yektlarda saqlang."
    }
  },
  {
    "id": 126,
    "tier": 9,
    "tierName": "9-Bosqich: Immutability (O'zgarmas Obyektlar)",
    "sector": "121-135: O'zgarmas Klasslar",
    "title": {
      "uz": "126. Asaxiy Books — Kitob ISBN Raqami (IsbnNumber)",
      "en": "126. Asaxiy Books — Immutable Book ISBN Record"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nNashr etilgan har bir kitobning xalqaro standart raqami (countryCode va bookCode) umrbod o'zgarmaydi. 'IsbnNumber' sinfini o'zgarmas qilib yarating.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. IsbnNumber klassini yarating va unga o'zgarmas 'private final' maydonlarini (int toifasidagi 'countryCode', String toifasidagi 'bookCode') e'lon qiling.\n\n2. Barcha maydonlarni bir marta initsializatsiya qiluvchi 'public IsbnNumber(int countryCode, String bookCode)' konstruktorini yozing.\n\n3. Maydonlarni o'qish uchun getter metodlarini ('getCountryCode()', 'getBookCode()') taqdim eting (ammo hech qanday setter YOZILMASLIGI SHART!).\n\n4. 'Main' klassi 'main' metodida 'IsbnNumber' o'zgarmas ob'yektini yarating.\n\n5. Ma'lumotlarni namunadagidek konsolga chop eting.",
      "en": "📖 Real-World Scenario & Context\nBook ISBNs uniquely identify publications worldwide and must remain unchanged throughout the catalog life cycle.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'IsbnNumber' with immutable fields: int 'countryCode', String 'bookCode'.\n\n2. Write constructor 'public IsbnNumber(int countryCode, String bookCode)' initializing all final fields.\n\n3. Implement read-only accessors: 'getCountryCode()', 'getBookCode()' (do NOT declare any mutator setters).\n\n4. Instantiate immutable 'IsbnNumber' in 'main'.\n\n5. Print state to console."
    },
    "story": {
      "uz": "Nashr etilgan har bir kitobning xalqaro standart raqami (countryCode va bookCode) umrbod o'zgarmaydi. 'IsbnNumber' sinfini o'zgarmas qilib yarating.",
      "en": "Book ISBNs uniquely identify publications worldwide and must remain unchanged throughout the catalog life cycle."
    },
    "steps": {
      "uz": [
        "IsbnNumber klassini yarating va unga o'zgarmas 'private final' maydonlarini (int toifasidagi 'countryCode', String toifasidagi 'bookCode') e'lon qiling.",
        "Barcha maydonlarni bir marta initsializatsiya qiluvchi 'public IsbnNumber(int countryCode, String bookCode)' konstruktorini yozing.",
        "Maydonlarni o'qish uchun getter metodlarini ('getCountryCode()', 'getBookCode()') taqdim eting (ammo hech qanday setter YOZILMASLIGI SHART!).",
        "'Main' klassi 'main' metodida 'IsbnNumber' o'zgarmas ob'yektini yarating.",
        "Ma'lumotlarni namunadagidek konsolga chop eting."
      ],
      "en": [
        "Declare class 'IsbnNumber' with immutable fields: int 'countryCode', String 'bookCode'.",
        "Write constructor 'public IsbnNumber(int countryCode, String bookCode)' initializing all final fields.",
        "Implement read-only accessors: 'getCountryCode()', 'getBookCode()' (do NOT declare any mutator setters).",
        "Instantiate immutable 'IsbnNumber' in 'main'.",
        "Print state to console."
      ]
    },
    "requirements": {
      "classes": [
        "IsbnNumber",
        "Main"
      ],
      "privateFields": [
        "countryCode",
        "bookCode"
      ],
      "constructors": [
        "IsbnNumber"
      ],
      "methods": [
        "getCountryCode",
        "getBookCode"
      ],
      "keywords": [
        "final",
        "this"
      ]
    },
    "starterCode": "class IsbnNumber {\n    // TODO: private final maydonlarni e'lon qiling va konstruktorda to'ldiring\n    // Diqqat: hech qanday setter YOZILMASLIGI SHART!\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IsbnNumber isbn = new IsbnNumber(978, \"0-13-468599-1\");\nSystem.out.println(\"ISBN: \" + isbn.getCountryCode() + \"-\" + isbn.getBookCode());\n    }\n}",
    "solution": "class IsbnNumber {\n    private final int countryCode;\n    private final String bookCode;\n\n    public IsbnNumber(int countryCode, String bookCode) {\n        this.countryCode = countryCode; this.bookCode = bookCode;\n    }\n\n    public int getCountryCode() {\n        return this.countryCode;\n    }\n\n    public String getBookCode() {\n        return this.bookCode;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IsbnNumber isbn = new IsbnNumber(978, \"0-13-468599-1\");\nSystem.out.println(\"ISBN: \" + isbn.getCountryCode() + \"-\" + isbn.getBookCode());\n    }\n}",
    "sampleData": [
      "ISBN: 978-0-13-468599-1"
    ],
    "expectedOutput": "ISBN: 978-0-13-468599-1",
    "detailedSolution": {
      "theory": "Xalqaro standart kodlar va identifikatorlar tabiiy ravishda o'zgarmas xarakterga ega.",
      "theoryEn": "Standardized international catalog identifiers naturally map to immutable class models.",
      "cleanCode": "private final int countryCode;\n    private final String bookCode;\npublic IsbnNumber(int countryCode, String bookCode) {\n    this.countryCode = countryCode; this.bookCode = bookCode;\n}",
      "breakdown": [
        "<code>private final</code>: Maydon xotirada faqat bir marta konstruktorda qiymat oladi va keyin aslo o'zgarmaydi.",
        "<code>No Setters</code>: O'zgarmaslik (immutability) ma'lumotlar yaxlitligi va xavfsizligini kafolatlaydi."
      ],
      "pitfalls": "countryCode int, bookCode String turida bo'lishi va ikkisi ham 'final' bo'lishi kerak.",
      "cw2Tip": "Mahsulot shtrix-kodi yoki artikulini o'zgarmas maydon sifatida belgilang."
    }
  },
  {
    "id": 127,
    "tier": 9,
    "tierName": "9-Bosqich: Immutability (O'zgarmas Obyektlar)",
    "sector": "121-135: O'zgarmas Klasslar",
    "title": {
      "uz": "127. Ucell — SIM Karta IMSI Identifikatori (ImsiIdentifier)",
      "en": "127. Ucell — Immutable SIM Card IMSI Identifier"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nUyali aloqa operatorida har bir SIM kartaning chipida yozilgan IMSI raqami (mccMnc va subscriberId) o'zgarmas apparat kodi hisoblanadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. ImsiIdentifier klassini yarating va unga o'zgarmas 'private final' maydonlarini (String toifasidagi 'mccMnc', String toifasidagi 'subscriberId') e'lon qiling.\n\n2. Barcha maydonlarni bir marta initsializatsiya qiluvchi 'public ImsiIdentifier(String mccMnc, String subscriberId)' konstruktorini yozing.\n\n3. Maydonlarni o'qish uchun getter metodlarini ('getMccMnc()', 'getSubscriberId()') taqdim eting (ammo hech qanday setter YOZILMASLIGI SHART!).\n\n4. 'Main' klassi 'main' metodida 'ImsiIdentifier' o'zgarmas ob'yektini yarating.\n\n5. Ma'lumotlarni namunadagidek konsolga chop eting.",
      "en": "📖 Real-World Scenario & Context\nMobile network subscriber IMSI chips store permanent network code identifiers that cannot be reassigned.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'ImsiIdentifier' with immutable fields: String 'mccMnc', String 'subscriberId'.\n\n2. Write constructor 'public ImsiIdentifier(String mccMnc, String subscriberId)' initializing all final fields.\n\n3. Implement read-only accessors: 'getMccMnc()', 'getSubscriberId()' (do NOT declare any mutator setters).\n\n4. Instantiate immutable 'ImsiIdentifier' in 'main'.\n\n5. Print state to console."
    },
    "story": {
      "uz": "Uyali aloqa operatorida har bir SIM kartaning chipida yozilgan IMSI raqami (mccMnc va subscriberId) o'zgarmas apparat kodi hisoblanadi.",
      "en": "Mobile network subscriber IMSI chips store permanent network code identifiers that cannot be reassigned."
    },
    "steps": {
      "uz": [
        "ImsiIdentifier klassini yarating va unga o'zgarmas 'private final' maydonlarini (String toifasidagi 'mccMnc', String toifasidagi 'subscriberId') e'lon qiling.",
        "Barcha maydonlarni bir marta initsializatsiya qiluvchi 'public ImsiIdentifier(String mccMnc, String subscriberId)' konstruktorini yozing.",
        "Maydonlarni o'qish uchun getter metodlarini ('getMccMnc()', 'getSubscriberId()') taqdim eting (ammo hech qanday setter YOZILMASLIGI SHART!).",
        "'Main' klassi 'main' metodida 'ImsiIdentifier' o'zgarmas ob'yektini yarating.",
        "Ma'lumotlarni namunadagidek konsolga chop eting."
      ],
      "en": [
        "Declare class 'ImsiIdentifier' with immutable fields: String 'mccMnc', String 'subscriberId'.",
        "Write constructor 'public ImsiIdentifier(String mccMnc, String subscriberId)' initializing all final fields.",
        "Implement read-only accessors: 'getMccMnc()', 'getSubscriberId()' (do NOT declare any mutator setters).",
        "Instantiate immutable 'ImsiIdentifier' in 'main'.",
        "Print state to console."
      ]
    },
    "requirements": {
      "classes": [
        "ImsiIdentifier",
        "Main"
      ],
      "privateFields": [
        "mccMnc",
        "subscriberId"
      ],
      "constructors": [
        "ImsiIdentifier"
      ],
      "methods": [
        "getMccMnc",
        "getSubscriberId"
      ],
      "keywords": [
        "final",
        "this"
      ]
    },
    "starterCode": "class ImsiIdentifier {\n    // TODO: private final maydonlarni e'lon qiling va konstruktorda to'ldiring\n    // Diqqat: hech qanday setter YOZILMASLIGI SHART!\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ImsiIdentifier imsi = new ImsiIdentifier(\"434-05\", \"8999812401\");\nSystem.out.println(\"IMSI: \" + imsi.getMccMnc() + \"-\" + imsi.getSubscriberId());\n    }\n}",
    "solution": "class ImsiIdentifier {\n    private final String mccMnc;\n    private final String subscriberId;\n\n    public ImsiIdentifier(String mccMnc, String subscriberId) {\n        this.mccMnc = mccMnc; this.subscriberId = subscriberId;\n    }\n\n    public String getMccMnc() {\n        return this.mccMnc;\n    }\n\n    public String getSubscriberId() {\n        return this.subscriberId;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ImsiIdentifier imsi = new ImsiIdentifier(\"434-05\", \"8999812401\");\nSystem.out.println(\"IMSI: \" + imsi.getMccMnc() + \"-\" + imsi.getSubscriberId());\n    }\n}",
    "sampleData": [
      "IMSI: 434-05-8999812401"
    ],
    "expectedOutput": "IMSI: 434-05-8999812401",
    "detailedSolution": {
      "theory": "Apparat ta'minoti va chip ma'lumotlari dastur darajasida o'zgarmas sinflar orqali ifodalanadi.",
      "theoryEn": "Hardware serializations and chip identifiers should be protected from accidental mutation via final fields.",
      "cleanCode": "private final String mccMnc;\n    private final String subscriberId;\npublic ImsiIdentifier(String mccMnc, String subscriberId) {\n    this.mccMnc = mccMnc; this.subscriberId = subscriberId;\n}",
      "breakdown": [
        "<code>private final</code>: Maydon xotirada faqat bir marta konstruktorda qiymat oladi va keyin aslo o'zgarmaydi.",
        "<code>No Setters</code>: O'zgarmaslik (immutability) ma'lumotlar yaxlitligi va xavfsizligini kafolatlaydi."
      ],
      "pitfalls": "Maydonlar oldiga 'private final' qo'yishni unutmang.",
      "cw2Tip": "Tizim konfiguratsiyalari va identifikatorlarini immutability tamoyili bilan quring."
    }
  },
  {
    "id": 128,
    "tier": 9,
    "tierName": "9-Bosqich: Immutability (O'zgarmas Obyektlar)",
    "sector": "121-135: O'zgarmas Klasslar",
    "title": {
      "uz": "128. Korzinka Go — Tovar Shtrix-Kodi (BarCode)",
      "en": "128. Korzinka Go — Immutable Product Barcode"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSupermarket kassa skaneridan o'tuvchi tovar shtrix-kodi (countryPrefix va itemDigits) qat'iy o'zgarmas obyekt bo'lishi lozim.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. BarCode klassini yarating va unga o'zgarmas 'private final' maydonlarini (String toifasidagi 'countryPrefix', String toifasidagi 'itemDigits') e'lon qiling.\n\n2. Barcha maydonlarni bir marta initsializatsiya qiluvchi 'public BarCode(String countryPrefix, String itemDigits)' konstruktorini yozing.\n\n3. Maydonlarni o'qish uchun getter metodlarini ('getCountryPrefix()', 'getItemDigits()') taqdim eting (ammo hech qanday setter YOZILMASLIGI SHART!).\n\n4. 'Main' klassi 'main' metodida 'BarCode' o'zgarmas ob'yektini yarating.\n\n5. Ma'lumotlarni namunadagidek konsolga chop eting.",
      "en": "📖 Real-World Scenario & Context\nPoint-of-sale barcode scans represent rigid product identities that must remain immutable.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'BarCode' with immutable fields: String 'countryPrefix', String 'itemDigits'.\n\n2. Write constructor 'public BarCode(String countryPrefix, String itemDigits)' initializing all final fields.\n\n3. Implement read-only accessors: 'getCountryPrefix()', 'getItemDigits()' (do NOT declare any mutator setters).\n\n4. Instantiate immutable 'BarCode' in 'main'.\n\n5. Print state to console."
    },
    "story": {
      "uz": "Supermarket kassa skaneridan o'tuvchi tovar shtrix-kodi (countryPrefix va itemDigits) qat'iy o'zgarmas obyekt bo'lishi lozim.",
      "en": "Point-of-sale barcode scans represent rigid product identities that must remain immutable."
    },
    "steps": {
      "uz": [
        "BarCode klassini yarating va unga o'zgarmas 'private final' maydonlarini (String toifasidagi 'countryPrefix', String toifasidagi 'itemDigits') e'lon qiling.",
        "Barcha maydonlarni bir marta initsializatsiya qiluvchi 'public BarCode(String countryPrefix, String itemDigits)' konstruktorini yozing.",
        "Maydonlarni o'qish uchun getter metodlarini ('getCountryPrefix()', 'getItemDigits()') taqdim eting (ammo hech qanday setter YOZILMASLIGI SHART!).",
        "'Main' klassi 'main' metodida 'BarCode' o'zgarmas ob'yektini yarating.",
        "Ma'lumotlarni namunadagidek konsolga chop eting."
      ],
      "en": [
        "Declare class 'BarCode' with immutable fields: String 'countryPrefix', String 'itemDigits'.",
        "Write constructor 'public BarCode(String countryPrefix, String itemDigits)' initializing all final fields.",
        "Implement read-only accessors: 'getCountryPrefix()', 'getItemDigits()' (do NOT declare any mutator setters).",
        "Instantiate immutable 'BarCode' in 'main'.",
        "Print state to console."
      ]
    },
    "requirements": {
      "classes": [
        "BarCode",
        "Main"
      ],
      "privateFields": [
        "countryPrefix",
        "itemDigits"
      ],
      "constructors": [
        "BarCode"
      ],
      "methods": [
        "getCountryPrefix",
        "getItemDigits"
      ],
      "keywords": [
        "final",
        "this"
      ]
    },
    "starterCode": "class BarCode {\n    // TODO: private final maydonlarni e'lon qiling va konstruktorda to'ldiring\n    // Diqqat: hech qanday setter YOZILMASLIGI SHART!\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BarCode code = new BarCode(\"478\", \"001239912\");\nSystem.out.println(\"Shtrix-kod: \" + code.getCountryPrefix() + code.getItemDigits());\n    }\n}",
    "solution": "class BarCode {\n    private final String countryPrefix;\n    private final String itemDigits;\n\n    public BarCode(String countryPrefix, String itemDigits) {\n        this.countryPrefix = countryPrefix; this.itemDigits = itemDigits;\n    }\n\n    public String getCountryPrefix() {\n        return this.countryPrefix;\n    }\n\n    public String getItemDigits() {\n        return this.itemDigits;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BarCode code = new BarCode(\"478\", \"001239912\");\nSystem.out.println(\"Shtrix-kod: \" + code.getCountryPrefix() + code.getItemDigits());\n    }\n}",
    "sampleData": [
      "Shtrix-kod: 478001239912"
    ],
    "expectedOutput": "Shtrix-kod: 478001239912",
    "detailedSolution": {
      "theory": "Maydonlar bir marta konstruktorda to'ldiriladi va butun dastur ishlashi davomida kafolatlangan yaxlitlikni saqlaydi.",
      "theoryEn": "Once initialized in the constructor, final state preserves deterministic identity throughout runtime execution.",
      "cleanCode": "private final String countryPrefix;\n    private final String itemDigits;\npublic BarCode(String countryPrefix, String itemDigits) {\n    this.countryPrefix = countryPrefix; this.itemDigits = itemDigits;\n}",
      "breakdown": [
        "<code>private final</code>: Maydon xotirada faqat bir marta konstruktorda qiymat oladi va keyin aslo o'zgarmaydi.",
        "<code>No Setters</code>: O'zgarmaslik (immutability) ma'lumotlar yaxlitligi va xavfsizligini kafolatlaydi."
      ],
      "pitfalls": "Getter metodlari qiymatni o'zgartirmaydi, shunchaki qaytaradi.",
      "cw2Tip": "Tovar kodlari va artikullar ustida ishlaganda immutable yondashuvdan foydalaning."
    }
  },
  {
    "id": 129,
    "tier": 9,
    "tierName": "9-Bosqich: Immutability (O'zgarmas Obyektlar)",
    "sector": "121-135: O'zgarmas Klasslar",
    "title": {
      "uz": "129. Ipak Yo'li Bank — Bank MFO Kodu (MfoCode)",
      "en": "129. Ipak Yoli Bank — Immutable Bank MFO Code"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nBanklararo hisob-kitoblar uchun O'zbekiston bank filiallariga berilgan MFO raqami (bankCode va branchSuffix) o'zgarmas yuridik rekvizitdir.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. MfoCode klassini yarating va unga o'zgarmas 'private final' maydonlarini (String toifasidagi 'bankCode', int toifasidagi 'branchSuffix') e'lon qiling.\n\n2. Barcha maydonlarni bir marta initsializatsiya qiluvchi 'public MfoCode(String bankCode, int branchSuffix)' konstruktorini yozing.\n\n3. Maydonlarni o'qish uchun getter metodlarini ('getBankCode()', 'getBranchSuffix()') taqdim eting (ammo hech qanday setter YOZILMASLIGI SHART!).\n\n4. 'Main' klassi 'main' metodida 'MfoCode' o'zgarmas ob'yektini yarating.\n\n5. Ma'lumotlarni namunadagidek konsolga chop eting.",
      "en": "📖 Real-World Scenario & Context\nInterbank branch clearing codes represent immutable legal identifiers that must never be altered.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'MfoCode' with immutable fields: String 'bankCode', int 'branchSuffix'.\n\n2. Write constructor 'public MfoCode(String bankCode, int branchSuffix)' initializing all final fields.\n\n3. Implement read-only accessors: 'getBankCode()', 'getBranchSuffix()' (do NOT declare any mutator setters).\n\n4. Instantiate immutable 'MfoCode' in 'main'.\n\n5. Print state to console."
    },
    "story": {
      "uz": "Banklararo hisob-kitoblar uchun O'zbekiston bank filiallariga berilgan MFO raqami (bankCode va branchSuffix) o'zgarmas yuridik rekvizitdir.",
      "en": "Interbank branch clearing codes represent immutable legal identifiers that must never be altered."
    },
    "steps": {
      "uz": [
        "MfoCode klassini yarating va unga o'zgarmas 'private final' maydonlarini (String toifasidagi 'bankCode', int toifasidagi 'branchSuffix') e'lon qiling.",
        "Barcha maydonlarni bir marta initsializatsiya qiluvchi 'public MfoCode(String bankCode, int branchSuffix)' konstruktorini yozing.",
        "Maydonlarni o'qish uchun getter metodlarini ('getBankCode()', 'getBranchSuffix()') taqdim eting (ammo hech qanday setter YOZILMASLIGI SHART!).",
        "'Main' klassi 'main' metodida 'MfoCode' o'zgarmas ob'yektini yarating.",
        "Ma'lumotlarni namunadagidek konsolga chop eting."
      ],
      "en": [
        "Declare class 'MfoCode' with immutable fields: String 'bankCode', int 'branchSuffix'.",
        "Write constructor 'public MfoCode(String bankCode, int branchSuffix)' initializing all final fields.",
        "Implement read-only accessors: 'getBankCode()', 'getBranchSuffix()' (do NOT declare any mutator setters).",
        "Instantiate immutable 'MfoCode' in 'main'.",
        "Print state to console."
      ]
    },
    "requirements": {
      "classes": [
        "MfoCode",
        "Main"
      ],
      "privateFields": [
        "bankCode",
        "branchSuffix"
      ],
      "constructors": [
        "MfoCode"
      ],
      "methods": [
        "getBankCode",
        "getBranchSuffix"
      ],
      "keywords": [
        "final",
        "this"
      ]
    },
    "starterCode": "class MfoCode {\n    // TODO: private final maydonlarni e'lon qiling va konstruktorda to'ldiring\n    // Diqqat: hech qanday setter YOZILMASLIGI SHART!\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MfoCode mfo = new MfoCode(\"00444\", 102);\nSystem.out.println(\"Bank MFO: \" + mfo.getBankCode() + \"-\" + mfo.getBranchSuffix());\n    }\n}",
    "solution": "class MfoCode {\n    private final String bankCode;\n    private final int branchSuffix;\n\n    public MfoCode(String bankCode, int branchSuffix) {\n        this.bankCode = bankCode; this.branchSuffix = branchSuffix;\n    }\n\n    public String getBankCode() {\n        return this.bankCode;\n    }\n\n    public int getBranchSuffix() {\n        return this.branchSuffix;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MfoCode mfo = new MfoCode(\"00444\", 102);\nSystem.out.println(\"Bank MFO: \" + mfo.getBankCode() + \"-\" + mfo.getBranchSuffix());\n    }\n}",
    "sampleData": [
      "Bank MFO: 00444-102"
    ],
    "expectedOutput": "Bank MFO: 00444-102",
    "detailedSolution": {
      "theory": "Moliyaviy rekvizitlar xavfsizligi va audit ishonchliligi bevosita immutable klasslar bilan kafolatlanadi.",
      "theoryEn": "Banking routing numbers maintain regulatory compliance through strictly immutable domain modeling.",
      "cleanCode": "private final String bankCode;\n    private final int branchSuffix;\npublic MfoCode(String bankCode, int branchSuffix) {\n    this.bankCode = bankCode; this.branchSuffix = branchSuffix;\n}",
      "breakdown": [
        "<code>private final</code>: Maydon xotirada faqat bir marta konstruktorda qiymat oladi va keyin aslo o'zgarmaydi.",
        "<code>No Setters</code>: O'zgarmaslik (immutability) ma'lumotlar yaxlitligi va xavfsizligini kafolatlaydi."
      ],
      "pitfalls": "int va String turlariga mos 'final' maydonlarni to'g'ri e'lon qiling.",
      "cw2Tip": "Bank va to'lov rekvizitlarini modellashtirishda setterlarsiz klasslar yarating."
    }
  },
  {
    "id": 130,
    "tier": 9,
    "tierName": "9-Bosqich: Immutability (O'zgarmas Obyektlar)",
    "sector": "121-135: O'zgarmas Klasslar",
    "title": {
      "uz": "130. Akfa Medline — Qon Guruhi Rekviziti (BloodGroup)",
      "en": "130. Akfa Medline — Immutable Blood Group Record"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nBemorning genetik qon guruhi (groupName, masalan 'A+' va rezus musbatligi rhPositive) inson hayoti davomida o'zgarmaydigan biologik xususiyatdir.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. BloodGroup klassini yarating va unga o'zgarmas 'private final' maydonlarini (String toifasidagi 'groupName', boolean toifasidagi 'rhPositive') e'lon qiling.\n\n2. Barcha maydonlarni bir marta initsializatsiya qiluvchi 'public BloodGroup(String groupName, boolean rhPositive)' konstruktorini yozing.\n\n3. Maydonlarni o'qish uchun getter metodlarini ('getGroupName()', 'isRhPositive()') taqdim eting (ammo hech qanday setter YOZILMASLIGI SHART!).\n\n4. 'Main' klassi 'main' metodida 'BloodGroup' o'zgarmas ob'yektini yarating.\n\n5. Ma'lumotlarni namunadagidek konsolga chop eting.",
      "en": "📖 Real-World Scenario & Context\nA patient's biological blood type is genetically immutable and should never be editable once confirmed by lab tests.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'BloodGroup' with immutable fields: String 'groupName', boolean 'rhPositive'.\n\n2. Write constructor 'public BloodGroup(String groupName, boolean rhPositive)' initializing all final fields.\n\n3. Implement read-only accessors: 'getGroupName()', 'isRhPositive()' (do NOT declare any mutator setters).\n\n4. Instantiate immutable 'BloodGroup' in 'main'.\n\n5. Print state to console."
    },
    "story": {
      "uz": "Bemorning genetik qon guruhi (groupName, masalan 'A+' va rezus musbatligi rhPositive) inson hayoti davomida o'zgarmaydigan biologik xususiyatdir.",
      "en": "A patient's biological blood type is genetically immutable and should never be editable once confirmed by lab tests."
    },
    "steps": {
      "uz": [
        "BloodGroup klassini yarating va unga o'zgarmas 'private final' maydonlarini (String toifasidagi 'groupName', boolean toifasidagi 'rhPositive') e'lon qiling.",
        "Barcha maydonlarni bir marta initsializatsiya qiluvchi 'public BloodGroup(String groupName, boolean rhPositive)' konstruktorini yozing.",
        "Maydonlarni o'qish uchun getter metodlarini ('getGroupName()', 'isRhPositive()') taqdim eting (ammo hech qanday setter YOZILMASLIGI SHART!).",
        "'Main' klassi 'main' metodida 'BloodGroup' o'zgarmas ob'yektini yarating.",
        "Ma'lumotlarni namunadagidek konsolga chop eting."
      ],
      "en": [
        "Declare class 'BloodGroup' with immutable fields: String 'groupName', boolean 'rhPositive'.",
        "Write constructor 'public BloodGroup(String groupName, boolean rhPositive)' initializing all final fields.",
        "Implement read-only accessors: 'getGroupName()', 'isRhPositive()' (do NOT declare any mutator setters).",
        "Instantiate immutable 'BloodGroup' in 'main'.",
        "Print state to console."
      ]
    },
    "requirements": {
      "classes": [
        "BloodGroup",
        "Main"
      ],
      "privateFields": [
        "groupName",
        "rhPositive"
      ],
      "constructors": [
        "BloodGroup"
      ],
      "methods": [
        "getGroupName",
        "isRhPositive"
      ],
      "keywords": [
        "final",
        "this"
      ]
    },
    "starterCode": "class BloodGroup {\n    // TODO: private final maydonlarni e'lon qiling va konstruktorda to'ldiring\n    // Diqqat: hech qanday setter YOZILMASLIGI SHART!\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BloodGroup bg = new BloodGroup(\"O(I)\", true);\nSystem.out.println(\"Guruh: \" + bg.getGroupName() + \" | Rezus+: \" + bg.isRhPositive());\n    }\n}",
    "solution": "class BloodGroup {\n    private final String groupName;\n    private final boolean rhPositive;\n\n    public BloodGroup(String groupName, boolean rhPositive) {\n        this.groupName = groupName; this.rhPositive = rhPositive;\n    }\n\n    public String getGroupName() {\n        return this.groupName;\n    }\n\n    public boolean isRhPositive() {\n        return this.rhPositive;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BloodGroup bg = new BloodGroup(\"O(I)\", true);\nSystem.out.println(\"Guruh: \" + bg.getGroupName() + \" | Rezus+: \" + bg.isRhPositive());\n    }\n}",
    "sampleData": [
      "Guruh: O(I) | Rezus+: true"
    ],
    "expectedOutput": "Guruh: O(I) | Rezus+: true",
    "detailedSolution": {
      "theory": "Biologik va tibbiy ma'lumotlar o'zgarmas faktlar bo'lib, boolean xususiyatlar uchun getter 'is...' prefiksi bilan yoziladi.",
      "theoryEn": "Medical records with constant physiological facts use immutable classes, pairing booleans with 'is...' accessors.",
      "cleanCode": "private final String groupName;\n    private final boolean rhPositive;\npublic BloodGroup(String groupName, boolean rhPositive) {\n    this.groupName = groupName; this.rhPositive = rhPositive;\n}",
      "breakdown": [
        "<code>private final</code>: Maydon xotirada faqat bir marta konstruktorda qiymat oladi va keyin aslo o'zgarmaydi.",
        "<code>No Setters</code>: O'zgarmaslik (immutability) ma'lumotlar yaxlitligi va xavfsizligini kafolatlaydi."
      ],
      "pitfalls": "boolean turdagi getter 'getRhPositive' emas, balki 'isRhPositive' deb nomlanadi.",
      "cw2Tip": "Mijozning o'zgarmas atributlari (masalan pasport raqami) uchun 'final' maydonlardan foydalaning."
    }
  },
  {
    "id": 131,
    "tier": 9,
    "tierName": "9-Bosqich: Immutability (O'zgarmas Obyektlar)",
    "sector": "121-135: O'zgarmas Klasslar",
    "title": {
      "uz": "131. Uzbekistan Airways — Aeroport IATA Kodi (AirportCode)",
      "en": "131. Uzbekistan Airways — Immutable Airport IATA Code"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nXalqaro havo transporti assotsiatsiyasi (IATA) tomonidan Toshkent aeroportiga berilgan 3 harfli kod (iataCode va cityName) o'zgarmas rasmiy belgidir.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. AirportCode klassini yarating va unga o'zgarmas 'private final' maydonlarini (String toifasidagi 'iataCode', String toifasidagi 'cityName') e'lon qiling.\n\n2. Barcha maydonlarni bir marta initsializatsiya qiluvchi 'public AirportCode(String iataCode, String cityName)' konstruktorini yozing.\n\n3. Maydonlarni o'qish uchun getter metodlarini ('getIataCode()', 'getCityName()') taqdim eting (ammo hech qanday setter YOZILMASLIGI SHART!).\n\n4. 'Main' klassi 'main' metodida 'AirportCode' o'zgarmas ob'yektini yarating.\n\n5. Ma'lumotlarni namunadagidek konsolga chop eting.",
      "en": "📖 Real-World Scenario & Context\nInternational airport 3-letter IATA designations are globally static navigation references.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'AirportCode' with immutable fields: String 'iataCode', String 'cityName'.\n\n2. Write constructor 'public AirportCode(String iataCode, String cityName)' initializing all final fields.\n\n3. Implement read-only accessors: 'getIataCode()', 'getCityName()' (do NOT declare any mutator setters).\n\n4. Instantiate immutable 'AirportCode' in 'main'.\n\n5. Print state to console."
    },
    "story": {
      "uz": "Xalqaro havo transporti assotsiatsiyasi (IATA) tomonidan Toshkent aeroportiga berilgan 3 harfli kod (iataCode va cityName) o'zgarmas rasmiy belgidir.",
      "en": "International airport 3-letter IATA designations are globally static navigation references."
    },
    "steps": {
      "uz": [
        "AirportCode klassini yarating va unga o'zgarmas 'private final' maydonlarini (String toifasidagi 'iataCode', String toifasidagi 'cityName') e'lon qiling.",
        "Barcha maydonlarni bir marta initsializatsiya qiluvchi 'public AirportCode(String iataCode, String cityName)' konstruktorini yozing.",
        "Maydonlarni o'qish uchun getter metodlarini ('getIataCode()', 'getCityName()') taqdim eting (ammo hech qanday setter YOZILMASLIGI SHART!).",
        "'Main' klassi 'main' metodida 'AirportCode' o'zgarmas ob'yektini yarating.",
        "Ma'lumotlarni namunadagidek konsolga chop eting."
      ],
      "en": [
        "Declare class 'AirportCode' with immutable fields: String 'iataCode', String 'cityName'.",
        "Write constructor 'public AirportCode(String iataCode, String cityName)' initializing all final fields.",
        "Implement read-only accessors: 'getIataCode()', 'getCityName()' (do NOT declare any mutator setters).",
        "Instantiate immutable 'AirportCode' in 'main'.",
        "Print state to console."
      ]
    },
    "requirements": {
      "classes": [
        "AirportCode",
        "Main"
      ],
      "privateFields": [
        "iataCode",
        "cityName"
      ],
      "constructors": [
        "AirportCode"
      ],
      "methods": [
        "getIataCode",
        "getCityName"
      ],
      "keywords": [
        "final",
        "this"
      ]
    },
    "starterCode": "class AirportCode {\n    // TODO: private final maydonlarni e'lon qiling va konstruktorda to'ldiring\n    // Diqqat: hech qanday setter YOZILMASLIGI SHART!\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AirportCode code = new AirportCode(\"TAS\", \"Toshkent\");\nSystem.out.println(\"Aeroport: \" + code.getIataCode() + \" (\" + code.getCityName() + \")\");\n    }\n}",
    "solution": "class AirportCode {\n    private final String iataCode;\n    private final String cityName;\n\n    public AirportCode(String iataCode, String cityName) {\n        this.iataCode = iataCode; this.cityName = cityName;\n    }\n\n    public String getIataCode() {\n        return this.iataCode;\n    }\n\n    public String getCityName() {\n        return this.cityName;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AirportCode code = new AirportCode(\"TAS\", \"Toshkent\");\nSystem.out.println(\"Aeroport: \" + code.getIataCode() + \" (\" + code.getCityName() + \")\");\n    }\n}",
    "sampleData": [
      "Aeroport: TAS (Toshkent)"
    ],
    "expectedOutput": "Aeroport: TAS (Toshkent)",
    "detailedSolution": {
      "theory": "Aviatsiya va logistika tizimlarida xalqaro kodlar o'zgarmas qilib olinishi xatoliklarning oldini oladi.",
      "theoryEn": "Global logistics codes remain immutable to prevent in-flight navigational or dispatch discrepancies.",
      "cleanCode": "private final String iataCode;\n    private final String cityName;\npublic AirportCode(String iataCode, String cityName) {\n    this.iataCode = iataCode; this.cityName = cityName;\n}",
      "breakdown": [
        "<code>private final</code>: Maydon xotirada faqat bir marta konstruktorda qiymat oladi va keyin aslo o'zgarmaydi.",
        "<code>No Setters</code>: O'zgarmaslik (immutability) ma'lumotlar yaxlitligi va xavfsizligini kafolatlaydi."
      ],
      "pitfalls": "Ikkala maydon ham 'final' bo'lishi va setterlar umuman bo'lmasligi lozim.",
      "cw2Tip": "Parvoz va lokatsiya kodlarini immutable qilib tuzish eng xavfsiz yo'ldir."
    }
  },
  {
    "id": 132,
    "tier": 9,
    "tierName": "9-Bosqich: Immutability (O'zgarmas Obyektlar)",
    "sector": "121-135: O'zgarmas Klasslar",
    "title": {
      "uz": "132. Express24 — Yetkazish Nuqtasi Koordinatasi (DeliveryPoint)",
      "en": "132. Express24 — Immutable Delivery Drop-off Point"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nYetkazib berish buyurtmasi tasdiqlangandan so'ng xaridor manzili va pochta indeksi (addressText va postalCode) o'zgarmas kvitansiya sifatida saqlanadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. DeliveryPoint klassini yarating va unga o'zgarmas 'private final' maydonlarini (String toifasidagi 'addressText', int toifasidagi 'postalCode') e'lon qiling.\n\n2. Barcha maydonlarni bir marta initsializatsiya qiluvchi 'public DeliveryPoint(String addressText, int postalCode)' konstruktorini yozing.\n\n3. Maydonlarni o'qish uchun getter metodlarini ('getAddressText()', 'getPostalCode()') taqdim eting (ammo hech qanday setter YOZILMASLIGI SHART!).\n\n4. 'Main' klassi 'main' metodida 'DeliveryPoint' o'zgarmas ob'yektini yarating.\n\n5. Ma'lumotlarni namunadagidek konsolga chop eting.",
      "en": "📖 Real-World Scenario & Context\nConfirmed order delivery destinations seal the postal code and address string into an immutable dispatch snapshot.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'DeliveryPoint' with immutable fields: String 'addressText', int 'postalCode'.\n\n2. Write constructor 'public DeliveryPoint(String addressText, int postalCode)' initializing all final fields.\n\n3. Implement read-only accessors: 'getAddressText()', 'getPostalCode()' (do NOT declare any mutator setters).\n\n4. Instantiate immutable 'DeliveryPoint' in 'main'.\n\n5. Print state to console."
    },
    "story": {
      "uz": "Yetkazib berish buyurtmasi tasdiqlangandan so'ng xaridor manzili va pochta indeksi (addressText va postalCode) o'zgarmas kvitansiya sifatida saqlanadi.",
      "en": "Confirmed order delivery destinations seal the postal code and address string into an immutable dispatch snapshot."
    },
    "steps": {
      "uz": [
        "DeliveryPoint klassini yarating va unga o'zgarmas 'private final' maydonlarini (String toifasidagi 'addressText', int toifasidagi 'postalCode') e'lon qiling.",
        "Barcha maydonlarni bir marta initsializatsiya qiluvchi 'public DeliveryPoint(String addressText, int postalCode)' konstruktorini yozing.",
        "Maydonlarni o'qish uchun getter metodlarini ('getAddressText()', 'getPostalCode()') taqdim eting (ammo hech qanday setter YOZILMASLIGI SHART!).",
        "'Main' klassi 'main' metodida 'DeliveryPoint' o'zgarmas ob'yektini yarating.",
        "Ma'lumotlarni namunadagidek konsolga chop eting."
      ],
      "en": [
        "Declare class 'DeliveryPoint' with immutable fields: String 'addressText', int 'postalCode'.",
        "Write constructor 'public DeliveryPoint(String addressText, int postalCode)' initializing all final fields.",
        "Implement read-only accessors: 'getAddressText()', 'getPostalCode()' (do NOT declare any mutator setters).",
        "Instantiate immutable 'DeliveryPoint' in 'main'.",
        "Print state to console."
      ]
    },
    "requirements": {
      "classes": [
        "DeliveryPoint",
        "Main"
      ],
      "privateFields": [
        "addressText",
        "postalCode"
      ],
      "constructors": [
        "DeliveryPoint"
      ],
      "methods": [
        "getAddressText",
        "getPostalCode"
      ],
      "keywords": [
        "final",
        "this"
      ]
    },
    "starterCode": "class DeliveryPoint {\n    // TODO: private final maydonlarni e'lon qiling va konstruktorda to'ldiring\n    // Diqqat: hech qanday setter YOZILMASLIGI SHART!\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DeliveryPoint pt = new DeliveryPoint(\"Amir Temur shoh ko'chasi 12\", 100084);\nSystem.out.println(\"Manzil: \" + pt.getAddressText() + \" [Indeks: \" + pt.getPostalCode() + \"]\");\n    }\n}",
    "solution": "class DeliveryPoint {\n    private final String addressText;\n    private final int postalCode;\n\n    public DeliveryPoint(String addressText, int postalCode) {\n        this.addressText = addressText; this.postalCode = postalCode;\n    }\n\n    public String getAddressText() {\n        return this.addressText;\n    }\n\n    public int getPostalCode() {\n        return this.postalCode;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DeliveryPoint pt = new DeliveryPoint(\"Amir Temur shoh ko'chasi 12\", 100084);\nSystem.out.println(\"Manzil: \" + pt.getAddressText() + \" [Indeks: \" + pt.getPostalCode() + \"]\");\n    }\n}",
    "sampleData": [
      "Manzil: Amir Temur shoh ko'chasi 12 [Indeks: 100084]"
    ],
    "expectedOutput": "Manzil: Amir Temur shoh ko'chasi 12 [Indeks: 100084]",
    "detailedSolution": {
      "theory": "Buyurtma shakllangach, kuryer uchun belgilangan manzil o'zgarmas xarakterga ega bo'ladi.",
      "theoryEn": "Dispatch coordinates act as immutable contracts between customer and delivery fleet.",
      "cleanCode": "private final String addressText;\n    private final int postalCode;\npublic DeliveryPoint(String addressText, int postalCode) {\n    this.addressText = addressText; this.postalCode = postalCode;\n}",
      "breakdown": [
        "<code>private final</code>: Maydon xotirada faqat bir marta konstruktorda qiymat oladi va keyin aslo o'zgarmaydi.",
        "<code>No Setters</code>: O'zgarmaslik (immutability) ma'lumotlar yaxlitligi va xavfsizligini kafolatlaydi."
      ],
      "pitfalls": "int va String turlarini o'zaro adashtirmang.",
      "cw2Tip": "Buyurtma manzillarini saqlashda o'zgarmas Value Objectlardan foydalaning."
    }
  },
  {
    "id": 133,
    "tier": 9,
    "tierName": "9-Bosqich: Immutability (O'zgarmas Obyektlar)",
    "sector": "121-135: O'zgarmas Klasslar",
    "title": {
      "uz": "133. WIUT Intranet — Talaba ID Yozuvi (StudentIdRecord)",
      "en": "133. WIUT Intranet — Immutable Student ID Record"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT universitetiga qabul qilingan talabaning 8 xonali ID raqami (studentId) va qabul qilingan o'quv yili (academicYear) o'qish yakunlanguncha o'zgarmaydi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. StudentIdRecord klassini yarating va unga o'zgarmas 'private final' maydonlarini (String toifasidagi 'studentId', int toifasidagi 'academicYear') e'lon qiling.\n\n2. Barcha maydonlarni bir marta initsializatsiya qiluvchi 'public StudentIdRecord(String studentId, int academicYear)' konstruktorini yozing.\n\n3. Maydonlarni o'qish uchun getter metodlarini ('getStudentId()', 'getAcademicYear()') taqdim eting (ammo hech qanday setter YOZILMASLIGI SHART!).\n\n4. 'Main' klassi 'main' metodida 'StudentIdRecord' o'zgarmas ob'yektini yarating.\n\n5. Ma'lumotlarni namunadagidek konsolga chop eting.",
      "en": "📖 Real-World Scenario & Context\nMatriculation credentials issued by WIUT university are immutable records tied permanently to the student dossier.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'StudentIdRecord' with immutable fields: String 'studentId', int 'academicYear'.\n\n2. Write constructor 'public StudentIdRecord(String studentId, int academicYear)' initializing all final fields.\n\n3. Implement read-only accessors: 'getStudentId()', 'getAcademicYear()' (do NOT declare any mutator setters).\n\n4. Instantiate immutable 'StudentIdRecord' in 'main'.\n\n5. Print state to console."
    },
    "story": {
      "uz": "WIUT universitetiga qabul qilingan talabaning 8 xonali ID raqami (studentId) va qabul qilingan o'quv yili (academicYear) o'qish yakunlanguncha o'zgarmaydi.",
      "en": "Matriculation credentials issued by WIUT university are immutable records tied permanently to the student dossier."
    },
    "steps": {
      "uz": [
        "StudentIdRecord klassini yarating va unga o'zgarmas 'private final' maydonlarini (String toifasidagi 'studentId', int toifasidagi 'academicYear') e'lon qiling.",
        "Barcha maydonlarni bir marta initsializatsiya qiluvchi 'public StudentIdRecord(String studentId, int academicYear)' konstruktorini yozing.",
        "Maydonlarni o'qish uchun getter metodlarini ('getStudentId()', 'getAcademicYear()') taqdim eting (ammo hech qanday setter YOZILMASLIGI SHART!).",
        "'Main' klassi 'main' metodida 'StudentIdRecord' o'zgarmas ob'yektini yarating.",
        "Ma'lumotlarni namunadagidek konsolga chop eting."
      ],
      "en": [
        "Declare class 'StudentIdRecord' with immutable fields: String 'studentId', int 'academicYear'.",
        "Write constructor 'public StudentIdRecord(String studentId, int academicYear)' initializing all final fields.",
        "Implement read-only accessors: 'getStudentId()', 'getAcademicYear()' (do NOT declare any mutator setters).",
        "Instantiate immutable 'StudentIdRecord' in 'main'.",
        "Print state to console."
      ]
    },
    "requirements": {
      "classes": [
        "StudentIdRecord",
        "Main"
      ],
      "privateFields": [
        "studentId",
        "academicYear"
      ],
      "constructors": [
        "StudentIdRecord"
      ],
      "methods": [
        "getStudentId",
        "getAcademicYear"
      ],
      "keywords": [
        "final",
        "this"
      ]
    },
    "starterCode": "class StudentIdRecord {\n    // TODO: private final maydonlarni e'lon qiling va konstruktorda to'ldiring\n    // Diqqat: hech qanday setter YOZILMASLIGI SHART!\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StudentIdRecord rec = new StudentIdRecord(\"00014299\", 2026);\nSystem.out.println(\"Talaba: \" + rec.getStudentId() + \" | Qabul yili: \" + rec.getAcademicYear());\n    }\n}",
    "solution": "class StudentIdRecord {\n    private final String studentId;\n    private final int academicYear;\n\n    public StudentIdRecord(String studentId, int academicYear) {\n        this.studentId = studentId; this.academicYear = academicYear;\n    }\n\n    public String getStudentId() {\n        return this.studentId;\n    }\n\n    public int getAcademicYear() {\n        return this.academicYear;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StudentIdRecord rec = new StudentIdRecord(\"00014299\", 2026);\nSystem.out.println(\"Talaba: \" + rec.getStudentId() + \" | Qabul yili: \" + rec.getAcademicYear());\n    }\n}",
    "sampleData": [
      "Talaba: 00014299 | Qabul yili: 2026"
    ],
    "expectedOutput": "Talaba: 00014299 | Qabul yili: 2026",
    "detailedSolution": {
      "theory": "Universitet talaba ID si kabi asosiy identifikatorlar ma'lumotlar yaxlitligini ta'minlash uchun o'zgarmas qilinadi.",
      "theoryEn": "Institutional student identifiers must be safeguarded from alteration through immutability.",
      "cleanCode": "private final String studentId;\n    private final int academicYear;\npublic StudentIdRecord(String studentId, int academicYear) {\n    this.studentId = studentId; this.academicYear = academicYear;\n}",
      "breakdown": [
        "<code>private final</code>: Maydon xotirada faqat bir marta konstruktorda qiymat oladi va keyin aslo o'zgarmaydi.",
        "<code>No Setters</code>: O'zgarmaslik (immutability) ma'lumotlar yaxlitligi va xavfsizligini kafolatlaydi."
      ],
      "pitfalls": "studentId String sifatida saqlanishi kerak (boshidagi nollarni saqlab qolish uchun).",
      "cw2Tip": "CW2 foydalanuvchi tizimida mijoz ID sini immutable qilib yarating."
    }
  },
  {
    "id": 134,
    "tier": 9,
    "tierName": "9-Bosqich: Immutability (O'zgarmas Obyektlar)",
    "sector": "121-135: O'zgarmas Klasslar",
    "title": {
      "uz": "134. Dodo Pizza — Retsept Ingredient Portiyasi (IngredientPortion)",
      "en": "134. Dodo Pizza — Immutable Recipe Ingredient Portion"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nStandart pitsa retseptida har bir ingredient nomi (ingredientName) va uning gramm og'irligi (gramWeight) qat'iy standart bo'lib, pishirish vaqtida o'zgarmasdir.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. IngredientPortion klassini yarating va unga o'zgarmas 'private final' maydonlarini (String toifasidagi 'ingredientName', double toifasidagi 'gramWeight') e'lon qiling.\n\n2. Barcha maydonlarni bir marta initsializatsiya qiluvchi 'public IngredientPortion(String ingredientName, double gramWeight)' konstruktorini yozing.\n\n3. Maydonlarni o'qish uchun getter metodlarini ('getIngredientName()', 'getGramWeight()') taqdim eting (ammo hech qanday setter YOZILMASLIGI SHART!).\n\n4. 'Main' klassi 'main' metodida 'IngredientPortion' o'zgarmas ob'yektini yarating.\n\n5. Ma'lumotlarni namunadagidek konsolga chop eting.",
      "en": "📖 Real-World Scenario & Context\nStandardized culinary recipes specify rigid ingredient portions that serve as immutable preparation formulas.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'IngredientPortion' with immutable fields: String 'ingredientName', double 'gramWeight'.\n\n2. Write constructor 'public IngredientPortion(String ingredientName, double gramWeight)' initializing all final fields.\n\n3. Implement read-only accessors: 'getIngredientName()', 'getGramWeight()' (do NOT declare any mutator setters).\n\n4. Instantiate immutable 'IngredientPortion' in 'main'.\n\n5. Print state to console."
    },
    "story": {
      "uz": "Standart pitsa retseptida har bir ingredient nomi (ingredientName) va uning gramm og'irligi (gramWeight) qat'iy standart bo'lib, pishirish vaqtida o'zgarmasdir.",
      "en": "Standardized culinary recipes specify rigid ingredient portions that serve as immutable preparation formulas."
    },
    "steps": {
      "uz": [
        "IngredientPortion klassini yarating va unga o'zgarmas 'private final' maydonlarini (String toifasidagi 'ingredientName', double toifasidagi 'gramWeight') e'lon qiling.",
        "Barcha maydonlarni bir marta initsializatsiya qiluvchi 'public IngredientPortion(String ingredientName, double gramWeight)' konstruktorini yozing.",
        "Maydonlarni o'qish uchun getter metodlarini ('getIngredientName()', 'getGramWeight()') taqdim eting (ammo hech qanday setter YOZILMASLIGI SHART!).",
        "'Main' klassi 'main' metodida 'IngredientPortion' o'zgarmas ob'yektini yarating.",
        "Ma'lumotlarni namunadagidek konsolga chop eting."
      ],
      "en": [
        "Declare class 'IngredientPortion' with immutable fields: String 'ingredientName', double 'gramWeight'.",
        "Write constructor 'public IngredientPortion(String ingredientName, double gramWeight)' initializing all final fields.",
        "Implement read-only accessors: 'getIngredientName()', 'getGramWeight()' (do NOT declare any mutator setters).",
        "Instantiate immutable 'IngredientPortion' in 'main'.",
        "Print state to console."
      ]
    },
    "requirements": {
      "classes": [
        "IngredientPortion",
        "Main"
      ],
      "privateFields": [
        "ingredientName",
        "gramWeight"
      ],
      "constructors": [
        "IngredientPortion"
      ],
      "methods": [
        "getIngredientName",
        "getGramWeight"
      ],
      "keywords": [
        "final",
        "this"
      ]
    },
    "starterCode": "class IngredientPortion {\n    // TODO: private final maydonlarni e'lon qiling va konstruktorda to'ldiring\n    // Diqqat: hech qanday setter YOZILMASLIGI SHART!\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IngredientPortion p = new IngredientPortion(\"Motsarella pishlog'i\", 120.0);\nSystem.out.println(\"Masalliq: \" + p.getIngredientName() + \" -> \" + p.getGramWeight() + \" gr\");\n    }\n}",
    "solution": "class IngredientPortion {\n    private final String ingredientName;\n    private final double gramWeight;\n\n    public IngredientPortion(String ingredientName, double gramWeight) {\n        this.ingredientName = ingredientName; this.gramWeight = gramWeight;\n    }\n\n    public String getIngredientName() {\n        return this.ingredientName;\n    }\n\n    public double getGramWeight() {\n        return this.gramWeight;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IngredientPortion p = new IngredientPortion(\"Motsarella pishlog'i\", 120.0);\nSystem.out.println(\"Masalliq: \" + p.getIngredientName() + \" -> \" + p.getGramWeight() + \" gr\");\n    }\n}",
    "sampleData": [
      "Masalliq: Motsarella pishlog'i -> 120.0 gr"
    ],
    "expectedOutput": "Masalliq: Motsarella pishlog'i -> 120.0 gr",
    "detailedSolution": {
      "theory": "Retsept va formula elementlari o'zgarmas xususiyatga ega bo'lib, sifat standartini saqlashga xizmat qiladi.",
      "theoryEn": "Recipe formulas preserve quality assurance through fixed immutable ratio components.",
      "cleanCode": "private final String ingredientName;\n    private final double gramWeight;\npublic IngredientPortion(String ingredientName, double gramWeight) {\n    this.ingredientName = ingredientName; this.gramWeight = gramWeight;\n}",
      "breakdown": [
        "<code>private final</code>: Maydon xotirada faqat bir marta konstruktorda qiymat oladi va keyin aslo o'zgarmaydi.",
        "<code>No Setters</code>: O'zgarmaslik (immutability) ma'lumotlar yaxlitligi va xavfsizligini kafolatlaydi."
      ],
      "pitfalls": "double va String maydonlari faqat konstruktorda to'ldiriladi.",
      "cw2Tip": "Taom va mahsulot tarkibini modellashtirishda immutable sinflardan foydalaning."
    }
  },
  {
    "id": 135,
    "tier": 9,
    "tierName": "9-Bosqich: Immutability (O'zgarmas Obyektlar)",
    "sector": "121-135: O'zgarmas Klasslar",
    "title": {
      "uz": "135. Halal Standart — Halal Sertifikat Raqami (HalalCertificate)",
      "en": "135. Halal Standard — Immutable Halal Certificate Stamp"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nGo'sht mahsulotiga berilgan xalqaro Halal sertifikati raqami (certificateId va issuerOrg) o'zgarmas rasmiy guvohnomadir.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. HalalCertificate klassini yarating va unga o'zgarmas 'private final' maydonlarini (String toifasidagi 'certificateId', String toifasidagi 'issuerOrg') e'lon qiling.\n\n2. Barcha maydonlarni bir marta initsializatsiya qiluvchi 'public HalalCertificate(String certificateId, String issuerOrg)' konstruktorini yozing.\n\n3. Maydonlarni o'qish uchun getter metodlarini ('getCertificateId()', 'getIssuerOrg()') taqdim eting (ammo hech qanday setter YOZILMASLIGI SHART!).\n\n4. 'Main' klassi 'main' metodida 'HalalCertificate' o'zgarmas ob'yektini yarating.\n\n5. Ma'lumotlarni namunadagidek konsolga chop eting.",
      "en": "📖 Real-World Scenario & Context\nOfficial Halal compliance certificates are legally sealed credentials that must never be modified.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Declare class 'HalalCertificate' with immutable fields: String 'certificateId', String 'issuerOrg'.\n\n2. Write constructor 'public HalalCertificate(String certificateId, String issuerOrg)' initializing all final fields.\n\n3. Implement read-only accessors: 'getCertificateId()', 'getIssuerOrg()' (do NOT declare any mutator setters).\n\n4. Instantiate immutable 'HalalCertificate' in 'main'.\n\n5. Print state to console."
    },
    "story": {
      "uz": "Go'sht mahsulotiga berilgan xalqaro Halal sertifikati raqami (certificateId va issuerOrg) o'zgarmas rasmiy guvohnomadir.",
      "en": "Official Halal compliance certificates are legally sealed credentials that must never be modified."
    },
    "steps": {
      "uz": [
        "HalalCertificate klassini yarating va unga o'zgarmas 'private final' maydonlarini (String toifasidagi 'certificateId', String toifasidagi 'issuerOrg') e'lon qiling.",
        "Barcha maydonlarni bir marta initsializatsiya qiluvchi 'public HalalCertificate(String certificateId, String issuerOrg)' konstruktorini yozing.",
        "Maydonlarni o'qish uchun getter metodlarini ('getCertificateId()', 'getIssuerOrg()') taqdim eting (ammo hech qanday setter YOZILMASLIGI SHART!).",
        "'Main' klassi 'main' metodida 'HalalCertificate' o'zgarmas ob'yektini yarating.",
        "Ma'lumotlarni namunadagidek konsolga chop eting."
      ],
      "en": [
        "Declare class 'HalalCertificate' with immutable fields: String 'certificateId', String 'issuerOrg'.",
        "Write constructor 'public HalalCertificate(String certificateId, String issuerOrg)' initializing all final fields.",
        "Implement read-only accessors: 'getCertificateId()', 'getIssuerOrg()' (do NOT declare any mutator setters).",
        "Instantiate immutable 'HalalCertificate' in 'main'.",
        "Print state to console."
      ]
    },
    "requirements": {
      "classes": [
        "HalalCertificate",
        "Main"
      ],
      "privateFields": [
        "certificateId",
        "issuerOrg"
      ],
      "constructors": [
        "HalalCertificate"
      ],
      "methods": [
        "getCertificateId",
        "getIssuerOrg"
      ],
      "keywords": [
        "final",
        "this"
      ]
    },
    "starterCode": "class HalalCertificate {\n    // TODO: private final maydonlarni e'lon qiling va konstruktorda to'ldiring\n    // Diqqat: hech qanday setter YOZILMASLIGI SHART!\n}\n\nclass Main {\n    public static void main(String[] args) {\n        HalalCertificate cert = new HalalCertificate(\"HALAL-UZ-881\", \"O'zStandart\");\nSystem.out.println(\"Sertifikat: \" + cert.getCertificateId() + \" | Organ: \" + cert.getIssuerOrg());\n    }\n}",
    "solution": "class HalalCertificate {\n    private final String certificateId;\n    private final String issuerOrg;\n\n    public HalalCertificate(String certificateId, String issuerOrg) {\n        this.certificateId = certificateId; this.issuerOrg = issuerOrg;\n    }\n\n    public String getCertificateId() {\n        return this.certificateId;\n    }\n\n    public String getIssuerOrg() {\n        return this.issuerOrg;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        HalalCertificate cert = new HalalCertificate(\"HALAL-UZ-881\", \"O'zStandart\");\nSystem.out.println(\"Sertifikat: \" + cert.getCertificateId() + \" | Organ: \" + cert.getIssuerOrg());\n    }\n}",
    "sampleData": [
      "Sertifikat: HALAL-UZ-881 | Organ: O'zStandart"
    ],
    "expectedOutput": "Sertifikat: HALAL-UZ-881 | Organ: O'zStandart",
    "detailedSolution": {
      "theory": "Yuridik va diniy standart sertifikatlari audit qoidalariga binoan immutable bo'lishi shart.",
      "theoryEn": "Legal compliance stamps and certification metadata must remain non-modifiable across all layers.",
      "cleanCode": "private final String certificateId;\n    private final String issuerOrg;\npublic HalalCertificate(String certificateId, String issuerOrg) {\n    this.certificateId = certificateId; this.issuerOrg = issuerOrg;\n}",
      "breakdown": [
        "<code>private final</code>: Maydon xotirada faqat bir marta konstruktorda qiymat oladi va keyin aslo o'zgarmaydi.",
        "<code>No Setters</code>: O'zgarmaslik (immutability) ma'lumotlar yaxlitligi va xavfsizligini kafolatlaydi."
      ],
      "pitfalls": "Barcha maydonlar 'private final' ekanligini tekshiring.",
      "cw2Tip": "Sertifikat va litsenziya modellarini immutable tarzda yarating."
    }
  },
  {
    "id": 136,
    "tier": 10,
    "tierName": "10-Bosqich: Kompozitsiya (Composition — Has-A Munosabati)",
    "sector": "136-150: Obyektlar Kompozitsiyasi",
    "title": {
      "uz": "136. Uzum Market — Mijoz va Yetkazish Manzili (Customer & Address)",
      "en": "136. Uzum Market — Customer Has-A Delivery Address"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT Seminar 2 Exercise 6 da o'rganilganidek, 'Customer' sinfi 'Address' obyektini o'z ichiga oladi (Customer has an Address). Mijoz ismi va uning manzilini bog'lab, zanjirli getter orqali shahar nomini oling.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Birinchi tarkibiy sinf 'Address' ni yarating: tegishli maydonlar, konstruktor va getterlar.\n\n2. Asosiy kompozitsiya sinfi 'Customer' ni yarating va unga tarkibiy 'Address' maydonini qo'shing.\n\n3. 'Customer' konstruktorida 'Address' ob'yektini qabul qilib maydonga o'zlashtiring.\n\n4. 'Main' metodida avval 'Address' komponentini, so'ng uni uzatib 'Customer' ob'yektini yarating.\n\n5. Zanjirli getter orqali ma'lumotlarni namunadagidek konsolga chop eting.",
      "en": "📖 Real-World Scenario & Context\nImplementing WIUT Seminar 2 Exercise 6 composition pattern: Customer has an Address. Query the customer's city via chained getters.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Create component class 'Address' with fields, constructor, and getters.\n\n2. Create composite class 'Customer' embedding 'Address' reference.\n\n3. Write 'Customer' constructor receiving component reference.\n\n4. In 'main', instantiate component object first, then composite entity.\n\n5. Print results via chained accessors."
    },
    "story": {
      "uz": "WIUT Seminar 2 Exercise 6 da o'rganilganidek, 'Customer' sinfi 'Address' obyektini o'z ichiga oladi (Customer has an Address). Mijoz ismi va uning manzilini bog'lab, zanjirli getter orqali shahar nomini oling.",
      "en": "Implementing WIUT Seminar 2 Exercise 6 composition pattern: Customer has an Address. Query the customer's city via chained getters."
    },
    "steps": {
      "uz": [
        "Birinchi tarkibiy sinf 'Address' ni yarating: tegishli maydonlar, konstruktor va getterlar.",
        "Asosiy kompozitsiya sinfi 'Customer' ni yarating va unga tarkibiy 'Address' maydonini qo'shing.",
        "'Customer' konstruktorida 'Address' ob'yektini qabul qilib maydonga o'zlashtiring.",
        "'Main' metodida avval 'Address' komponentini, so'ng uni uzatib 'Customer' ob'yektini yarating.",
        "Zanjirli getter orqali ma'lumotlarni namunadagidek konsolga chop eting."
      ],
      "en": [
        "Create component class 'Address' with fields, constructor, and getters.",
        "Create composite class 'Customer' embedding 'Address' reference.",
        "Write 'Customer' constructor receiving component reference.",
        "In 'main', instantiate component object first, then composite entity.",
        "Print results via chained accessors."
      ]
    },
    "requirements": {
      "classes": [
        "Address",
        "Customer",
        "Main"
      ],
      "privateFields": [
        "city",
        "street",
        "fullName",
        "address"
      ],
      "constructors": [
        "Address",
        "Customer"
      ],
      "methods": [
        "getCity",
        "getStreet",
        "getFullName",
        "getAddress"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class Address {\n    private String city;\n    private String street;\n\n    public Address(String city, String street) {\n        this.city = city; this.street = street;\n    }\n\n    public String getCity() {\n        return this.city;\n    }\n\n    public String getStreet() {\n        return this.street;\n    }\n}\n\nclass Customer {\n    // TODO: Tarkibiy Address maydonini saqlab, konstruktor va getterni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Address addr = new Address(\"Toshkent\", \"Chilonzor 9\");\nCustomer cust = new Customer(\"Ali Valiyev\", addr);\nSystem.out.println(\"Mijoz: \" + cust.getFullName() + \" | Shahar: \" + cust.getAddress().getCity());\n    }\n}",
    "solution": "class Address {\n    private String city;\n    private String street;\n\n    public Address(String city, String street) {\n        this.city = city; this.street = street;\n    }\n\n    public String getCity() {\n        return this.city;\n    }\n\n    public String getStreet() {\n        return this.street;\n    }\n}\n\nclass Customer {\n    private String fullName;\n    private Address address;\n\n    public Customer(String fullName, Address address) {\n        this.fullName = fullName; this.address = address;\n    }\n\n    public String getFullName() {\n        return this.fullName;\n    }\n\n    public Address getAddress() {\n        return this.address;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Address addr = new Address(\"Toshkent\", \"Chilonzor 9\");\nCustomer cust = new Customer(\"Ali Valiyev\", addr);\nSystem.out.println(\"Mijoz: \" + cust.getFullName() + \" | Shahar: \" + cust.getAddress().getCity());\n    }\n}",
    "sampleData": [
      "Mijoz: Ali Valiyev | Shahar: Toshkent"
    ],
    "expectedOutput": "Mijoz: Ali Valiyev | Shahar: Toshkent",
    "detailedSolution": {
      "theory": "Kompozitsiya (Composition) — bir obyektning boshqa obyektni o'z ichiga olishi ('Has-A' munosabati). Merosxo'rlikdan ko'ra kompozitsiyani afzal ko'rish (Composition over Inheritance) eng muhim dizayn tamoyillaridan biridir.",
      "theoryEn": "Composition represents a 'Has-A' relationship where a composite class holds a reference to a component class, enabling modularity and reuse.",
      "cleanCode": "class Customer {\n    private String fullName;\n    private Address address;\n\n    public Customer(String fullName, Address address) {\n        this.fullName = fullName; this.address = address;\n    }\n\n    public String getFullName() {\n        return this.fullName;\n    }\n\n    public Address getAddress() {\n        return this.address;\n    }\n}",
      "breakdown": [
        "<code>Address inside Customer</code>: Kompozitsiya ('Has-A') orqali ikki mustaqil ob'yekt o'zaro bog'langan.",
        "<code>Chained Access</code>: 'obj.getComponent().getProperty()' orqali ichki holat xavfsiz o'qiladi."
      ],
      "pitfalls": "Customer ichida shahar va ko'cha uchun alohida String maydon ochmang; u to'g'ridan-to'g'ri 'Address' obyektini saqlashi shart.",
      "cw2Tip": "CW2 Console Order Applicationda 'Order' klassi 'Customer' va 'Product' obyektlarini kompozitsiya orqali o'z ichiga oladi."
    }
  },
  {
    "id": 137,
    "tier": 10,
    "tierName": "10-Bosqich: Kompozitsiya (Composition — Has-A Munosabati)",
    "sector": "136-150: Obyektlar Kompozitsiyasi",
    "title": {
      "uz": "137. Korzinka Go — Tovar va Ta'minotchi (Product & Supplier)",
      "en": "137. Korzinka Go — Product Has-A Supplier"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nHar bir mahsulot (Product) ma'lum bir ta'minotchi kompaniyaga (Supplier) tegishli bo'ladi (Product has a Supplier). Mahsulot orqali ta'minotchi nomini 'product.getSupplier().getCompanyName()' tarzida oling.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Birinchi tarkibiy sinf 'Supplier' ni yarating: tegishli maydonlar, konstruktor va getterlar.\n\n2. Asosiy kompozitsiya sinfi 'Product' ni yarating va unga tarkibiy 'Supplier' maydonini qo'shing.\n\n3. 'Product' konstruktorida 'Supplier' ob'yektini qabul qilib maydonga o'zlashtiring.\n\n4. 'Main' metodida avval 'Supplier' komponentini, so'ng uni uzatib 'Product' ob'yektini yarating.\n\n5. Zanjirli getter orqali ma'lumotlarni namunadagidek konsolga chop eting.",
      "en": "📖 Real-World Scenario & Context\nProduct models hold a reference to their official Supplier. Access supplier company name through chained accessors.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Create component class 'Supplier' with fields, constructor, and getters.\n\n2. Create composite class 'Product' embedding 'Supplier' reference.\n\n3. Write 'Product' constructor receiving component reference.\n\n4. In 'main', instantiate component object first, then composite entity.\n\n5. Print results via chained accessors."
    },
    "story": {
      "uz": "Har bir mahsulot (Product) ma'lum bir ta'minotchi kompaniyaga (Supplier) tegishli bo'ladi (Product has a Supplier). Mahsulot orqali ta'minotchi nomini 'product.getSupplier().getCompanyName()' tarzida oling.",
      "en": "Product models hold a reference to their official Supplier. Access supplier company name through chained accessors."
    },
    "steps": {
      "uz": [
        "Birinchi tarkibiy sinf 'Supplier' ni yarating: tegishli maydonlar, konstruktor va getterlar.",
        "Asosiy kompozitsiya sinfi 'Product' ni yarating va unga tarkibiy 'Supplier' maydonini qo'shing.",
        "'Product' konstruktorida 'Supplier' ob'yektini qabul qilib maydonga o'zlashtiring.",
        "'Main' metodida avval 'Supplier' komponentini, so'ng uni uzatib 'Product' ob'yektini yarating.",
        "Zanjirli getter orqali ma'lumotlarni namunadagidek konsolga chop eting."
      ],
      "en": [
        "Create component class 'Supplier' with fields, constructor, and getters.",
        "Create composite class 'Product' embedding 'Supplier' reference.",
        "Write 'Product' constructor receiving component reference.",
        "In 'main', instantiate component object first, then composite entity.",
        "Print results via chained accessors."
      ]
    },
    "requirements": {
      "classes": [
        "Supplier",
        "Product",
        "Main"
      ],
      "privateFields": [
        "companyName",
        "contactPhone",
        "productName",
        "supplier"
      ],
      "constructors": [
        "Supplier",
        "Product"
      ],
      "methods": [
        "getCompanyName",
        "getContactPhone",
        "getProductName",
        "getSupplier"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class Supplier {\n    private String companyName;\n    private String contactPhone;\n\n    public Supplier(String companyName, String contactPhone) {\n        this.companyName = companyName; this.contactPhone = contactPhone;\n    }\n\n    public String getCompanyName() {\n        return this.companyName;\n    }\n\n    public String getContactPhone() {\n        return this.contactPhone;\n    }\n}\n\nclass Product {\n    // TODO: Tarkibiy Supplier maydonini saqlab, konstruktor va getterni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Supplier sup = new Supplier(\"Nestle O'zbekiston\", \"+998712001122\");\nProduct prod = new Product(\"Nescafe Gold\", sup);\nSystem.out.println(\"Mahsulot: \" + prod.getProductName() + \" | Ta'minotchi: \" + prod.getSupplier().getCompanyName());\n    }\n}",
    "solution": "class Supplier {\n    private String companyName;\n    private String contactPhone;\n\n    public Supplier(String companyName, String contactPhone) {\n        this.companyName = companyName; this.contactPhone = contactPhone;\n    }\n\n    public String getCompanyName() {\n        return this.companyName;\n    }\n\n    public String getContactPhone() {\n        return this.contactPhone;\n    }\n}\n\nclass Product {\n    private String productName;\n    private Supplier supplier;\n\n    public Product(String productName, Supplier supplier) {\n        this.productName = productName; this.supplier = supplier;\n    }\n\n    public String getProductName() {\n        return this.productName;\n    }\n\n    public Supplier getSupplier() {\n        return this.supplier;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Supplier sup = new Supplier(\"Nestle O'zbekiston\", \"+998712001122\");\nProduct prod = new Product(\"Nescafe Gold\", sup);\nSystem.out.println(\"Mahsulot: \" + prod.getProductName() + \" | Ta'minotchi: \" + prod.getSupplier().getCompanyName());\n    }\n}",
    "sampleData": [
      "Mahsulot: Nescafe Gold | Ta'minotchi: Nestle O'zbekiston"
    ],
    "expectedOutput": "Mahsulot: Nescafe Gold | Ta'minotchi: Nestle O'zbekiston",
    "detailedSolution": {
      "theory": "Kompozitsiya tizimni mustaqil modullarga ajratish imkonini beradi: Ta'minotchi alohida, tovar alohida boshqariladi.",
      "theoryEn": "Modular composition cleanly separates supplier details from inventory items, promoting maintainability.",
      "cleanCode": "class Product {\n    private String productName;\n    private Supplier supplier;\n\n    public Product(String productName, Supplier supplier) {\n        this.productName = productName; this.supplier = supplier;\n    }\n\n    public String getProductName() {\n        return this.productName;\n    }\n\n    public Supplier getSupplier() {\n        return this.supplier;\n    }\n}",
      "breakdown": [
        "<code>Supplier inside Product</code>: Kompozitsiya ('Has-A') orqali ikki mustaqil ob'yekt o'zaro bog'langan.",
        "<code>Chained Access</code>: 'obj.getComponent().getProperty()' orqali ichki holat xavfsiz o'qiladi."
      ],
      "pitfalls": "Ta'minotchi ma'lumotlarini tovar ichida takrorlamang, havoladan (reference) foydalaning.",
      "cw2Tip": "CW2 da tovar va toifa (Category) yoki sotuvchi o'rtasidagi bog'lanish kompozitsiya orqali amalga oshiriladi."
    }
  },
  {
    "id": 138,
    "tier": 10,
    "tierName": "10-Bosqich: Kompozitsiya (Composition — Has-A Munosabati)",
    "sector": "136-150: Obyektlar Kompozitsiyasi",
    "title": {
      "uz": "138. Payme — Plastik Karta va Emitent Bank (BankCard & BankIssuer)",
      "en": "138. Payme — BankCard Has-A BankIssuer"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nPlastik karta (BankCard) o'zining emitent banki (BankIssuer) obyektiga ega. Karta orqali bank nomini 'card.getIssuer().getBankName()' tarzida oling.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Birinchi tarkibiy sinf 'BankIssuer' ni yarating: tegishli maydonlar, konstruktor va getterlar.\n\n2. Asosiy kompozitsiya sinfi 'BankCard' ni yarating va unga tarkibiy 'BankIssuer' maydonini qo'shing.\n\n3. 'BankCard' konstruktorida 'BankIssuer' ob'yektini qabul qilib maydonga o'zlashtiring.\n\n4. 'Main' metodida avval 'BankIssuer' komponentini, so'ng uni uzatib 'BankCard' ob'yektini yarating.\n\n5. Zanjirli getter orqali ma'lumotlarni namunadagidek konsolga chop eting.",
      "en": "📖 Real-World Scenario & Context\nPayment cards encapsulate an issuing bank reference. Retrieve bank credentials via composite navigation.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Create component class 'BankIssuer' with fields, constructor, and getters.\n\n2. Create composite class 'BankCard' embedding 'BankIssuer' reference.\n\n3. Write 'BankCard' constructor receiving component reference.\n\n4. In 'main', instantiate component object first, then composite entity.\n\n5. Print results via chained accessors."
    },
    "story": {
      "uz": "Plastik karta (BankCard) o'zining emitent banki (BankIssuer) obyektiga ega. Karta orqali bank nomini 'card.getIssuer().getBankName()' tarzida oling.",
      "en": "Payment cards encapsulate an issuing bank reference. Retrieve bank credentials via composite navigation."
    },
    "steps": {
      "uz": [
        "Birinchi tarkibiy sinf 'BankIssuer' ni yarating: tegishli maydonlar, konstruktor va getterlar.",
        "Asosiy kompozitsiya sinfi 'BankCard' ni yarating va unga tarkibiy 'BankIssuer' maydonini qo'shing.",
        "'BankCard' konstruktorida 'BankIssuer' ob'yektini qabul qilib maydonga o'zlashtiring.",
        "'Main' metodida avval 'BankIssuer' komponentini, so'ng uni uzatib 'BankCard' ob'yektini yarating.",
        "Zanjirli getter orqali ma'lumotlarni namunadagidek konsolga chop eting."
      ],
      "en": [
        "Create component class 'BankIssuer' with fields, constructor, and getters.",
        "Create composite class 'BankCard' embedding 'BankIssuer' reference.",
        "Write 'BankCard' constructor receiving component reference.",
        "In 'main', instantiate component object first, then composite entity.",
        "Print results via chained accessors."
      ]
    },
    "requirements": {
      "classes": [
        "BankIssuer",
        "BankCard",
        "Main"
      ],
      "privateFields": [
        "bankName",
        "mfo",
        "cardNumber",
        "issuer"
      ],
      "constructors": [
        "BankIssuer",
        "BankCard"
      ],
      "methods": [
        "getBankName",
        "getMfo",
        "getCardNumber",
        "getIssuer"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class BankIssuer {\n    private String bankName;\n    private String mfo;\n\n    public BankIssuer(String bankName, String mfo) {\n        this.bankName = bankName; this.mfo = mfo;\n    }\n\n    public String getBankName() {\n        return this.bankName;\n    }\n\n    public String getMfo() {\n        return this.mfo;\n    }\n}\n\nclass BankCard {\n    // TODO: Tarkibiy BankIssuer maydonini saqlab, konstruktor va getterni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BankIssuer issuer = new BankIssuer(\"Kapitalbank\", \"00444\");\nBankCard card = new BankCard(\"8600123456789012\", issuer);\nSystem.out.println(\"Karta: \" + card.getCardNumber() + \" | Bank: \" + card.getIssuer().getBankName());\n    }\n}",
    "solution": "class BankIssuer {\n    private String bankName;\n    private String mfo;\n\n    public BankIssuer(String bankName, String mfo) {\n        this.bankName = bankName; this.mfo = mfo;\n    }\n\n    public String getBankName() {\n        return this.bankName;\n    }\n\n    public String getMfo() {\n        return this.mfo;\n    }\n}\n\nclass BankCard {\n    private String cardNumber;\n    private BankIssuer issuer;\n\n    public BankCard(String cardNumber, BankIssuer issuer) {\n        this.cardNumber = cardNumber; this.issuer = issuer;\n    }\n\n    public String getCardNumber() {\n        return this.cardNumber;\n    }\n\n    public BankIssuer getIssuer() {\n        return this.issuer;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BankIssuer issuer = new BankIssuer(\"Kapitalbank\", \"00444\");\nBankCard card = new BankCard(\"8600123456789012\", issuer);\nSystem.out.println(\"Karta: \" + card.getCardNumber() + \" | Bank: \" + card.getIssuer().getBankName());\n    }\n}",
    "sampleData": [
      "Karta: 8600123456789012 | Bank: Kapitalbank"
    ],
    "expectedOutput": "Karta: 8600123456789012 | Bank: Kapitalbank",
    "detailedSolution": {
      "theory": "Bank kartasi bank tashkilotining bir bo'lagi emas, balki bankka tegishli obyekt havolasini o'z ichida saqlaydi.",
      "theoryEn": "A payment card holds a reference to its financial institution, illustrating classic structural composition.",
      "cleanCode": "class BankCard {\n    private String cardNumber;\n    private BankIssuer issuer;\n\n    public BankCard(String cardNumber, BankIssuer issuer) {\n        this.cardNumber = cardNumber; this.issuer = issuer;\n    }\n\n    public String getCardNumber() {\n        return this.cardNumber;\n    }\n\n    public BankIssuer getIssuer() {\n        return this.issuer;\n    }\n}",
      "breakdown": [
        "<code>BankIssuer inside BankCard</code>: Kompozitsiya ('Has-A') orqali ikki mustaqil ob'yekt o'zaro bog'langan.",
        "<code>Chained Access</code>: 'obj.getComponent().getProperty()' orqali ichki holat xavfsiz o'qiladi."
      ],
      "pitfalls": "BankIssuer obyektini 'null' uzatmaslikka e'tibor bering.",
      "cw2Tip": "To'lov tizimlarida karta va bank o'zaro kompozitsiya orqali bog'lanadi."
    }
  },
  {
    "id": 139,
    "tier": 10,
    "tierName": "10-Bosqich: Kompozitsiya (Composition — Has-A Munosabati)",
    "sector": "136-150: Obyektlar Kompozitsiyasi",
    "title": {
      "uz": "139. Yandex Go — Taksi Avtomobili va Dvigatel (TaxiCar & Engine)",
      "en": "139. Yandex Go — TaxiCar Has-An Engine"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT Seminar 2 Exercise 6 ning ikkinchi klassik namunasi: Taksi avtomobili (TaxiCar) dvigatelga (Engine) ega (Car has an Engine). Avtomobil modeli va dvigatel ot kuchi (horsePower) ni zanjirli getter orqali oling.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Birinchi tarkibiy sinf 'Engine' ni yarating: tegishli maydonlar, konstruktor va getterlar.\n\n2. Asosiy kompozitsiya sinfi 'TaxiCar' ni yarating va unga tarkibiy 'Engine' maydonini qo'shing.\n\n3. 'TaxiCar' konstruktorida 'Engine' ob'yektini qabul qilib maydonga o'zlashtiring.\n\n4. 'Main' metodida avval 'Engine' komponentini, so'ng uni uzatib 'TaxiCar' ob'yektini yarating.\n\n5. Zanjirli getter orqali ma'lumotlarni namunadagidek konsolga chop eting.",
      "en": "📖 Real-World Scenario & Context\nImplementing WIUT Seminar 2 Exercise 6 Car-Engine composition: TaxiCar has an Engine. Access engine horsepower cleanly.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Create component class 'Engine' with fields, constructor, and getters.\n\n2. Create composite class 'TaxiCar' embedding 'Engine' reference.\n\n3. Write 'TaxiCar' constructor receiving component reference.\n\n4. In 'main', instantiate component object first, then composite entity.\n\n5. Print results via chained accessors."
    },
    "story": {
      "uz": "WIUT Seminar 2 Exercise 6 ning ikkinchi klassik namunasi: Taksi avtomobili (TaxiCar) dvigatelga (Engine) ega (Car has an Engine). Avtomobil modeli va dvigatel ot kuchi (horsePower) ni zanjirli getter orqali oling.",
      "en": "Implementing WIUT Seminar 2 Exercise 6 Car-Engine composition: TaxiCar has an Engine. Access engine horsepower cleanly."
    },
    "steps": {
      "uz": [
        "Birinchi tarkibiy sinf 'Engine' ni yarating: tegishli maydonlar, konstruktor va getterlar.",
        "Asosiy kompozitsiya sinfi 'TaxiCar' ni yarating va unga tarkibiy 'Engine' maydonini qo'shing.",
        "'TaxiCar' konstruktorida 'Engine' ob'yektini qabul qilib maydonga o'zlashtiring.",
        "'Main' metodida avval 'Engine' komponentini, so'ng uni uzatib 'TaxiCar' ob'yektini yarating.",
        "Zanjirli getter orqali ma'lumotlarni namunadagidek konsolga chop eting."
      ],
      "en": [
        "Create component class 'Engine' with fields, constructor, and getters.",
        "Create composite class 'TaxiCar' embedding 'Engine' reference.",
        "Write 'TaxiCar' constructor receiving component reference.",
        "In 'main', instantiate component object first, then composite entity.",
        "Print results via chained accessors."
      ]
    },
    "requirements": {
      "classes": [
        "Engine",
        "TaxiCar",
        "Main"
      ],
      "privateFields": [
        "fuelType",
        "horsePower",
        "model",
        "engine"
      ],
      "constructors": [
        "Engine",
        "TaxiCar"
      ],
      "methods": [
        "getFuelType",
        "getHorsePower",
        "getModel",
        "getEngine"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class Engine {\n    private String fuelType;\n    private int horsePower;\n\n    public Engine(String fuelType, int horsePower) {\n        this.fuelType = fuelType; this.horsePower = horsePower;\n    }\n\n    public String getFuelType() {\n        return this.fuelType;\n    }\n\n    public int getHorsePower() {\n        return this.horsePower;\n    }\n}\n\nclass TaxiCar {\n    // TODO: Tarkibiy Engine maydonini saqlab, konstruktor va getterni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Engine eng = new Engine(\"Metan/Benzin\", 106);\nTaxiCar car = new TaxiCar(\"Chevrolet Cobalt\", eng);\nSystem.out.println(\"Taksi: \" + car.getModel() + \" | Dvigatel: \" + car.getEngine().getHorsePower() + \" ot kuchi\");\n    }\n}",
    "solution": "class Engine {\n    private String fuelType;\n    private int horsePower;\n\n    public Engine(String fuelType, int horsePower) {\n        this.fuelType = fuelType; this.horsePower = horsePower;\n    }\n\n    public String getFuelType() {\n        return this.fuelType;\n    }\n\n    public int getHorsePower() {\n        return this.horsePower;\n    }\n}\n\nclass TaxiCar {\n    private String model;\n    private Engine engine;\n\n    public TaxiCar(String model, Engine engine) {\n        this.model = model; this.engine = engine;\n    }\n\n    public String getModel() {\n        return this.model;\n    }\n\n    public Engine getEngine() {\n        return this.engine;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Engine eng = new Engine(\"Metan/Benzin\", 106);\nTaxiCar car = new TaxiCar(\"Chevrolet Cobalt\", eng);\nSystem.out.println(\"Taksi: \" + car.getModel() + \" | Dvigatel: \" + car.getEngine().getHorsePower() + \" ot kuchi\");\n    }\n}",
    "sampleData": [
      "Taksi: Chevrolet Cobalt | Dvigatel: 106 ot kuchi"
    ],
    "expectedOutput": "Taksi: Chevrolet Cobalt | Dvigatel: 106 ot kuchi",
    "detailedSolution": {
      "theory": "Dvigatelsiz mashina to'liq ishlay olmaydi. Kompozitsiyada dvigatel alohida sinf qilinib, avtomobilga maydon sifatida kiritiladi.",
      "theoryEn": "Aggregating an Engine into a Car cleanly illustrates how component sub-systems are encapsulated and combined.",
      "cleanCode": "class TaxiCar {\n    private String model;\n    private Engine engine;\n\n    public TaxiCar(String model, Engine engine) {\n        this.model = model; this.engine = engine;\n    }\n\n    public String getModel() {\n        return this.model;\n    }\n\n    public Engine getEngine() {\n        return this.engine;\n    }\n}",
      "breakdown": [
        "<code>Engine inside TaxiCar</code>: Kompozitsiya ('Has-A') orqali ikki mustaqil ob'yekt o'zaro bog'langan.",
        "<code>Chained Access</code>: 'obj.getComponent().getProperty()' orqali ichki holat xavfsiz o'qiladi."
      ],
      "pitfalls": "Ot kuchi dvigatelga tegishli, mashina ichiga to'g'ridan-to'g'ri 'horsePower' deb qo'shmang.",
      "cw2Tip": "Murakkab transport va yetkazish vositalarini modellashtirishda kompozitsiya qo'llaniladi."
    }
  },
  {
    "id": 140,
    "tier": 10,
    "tierName": "10-Bosqich: Kompozitsiya (Composition — Has-A Munosabati)",
    "sector": "136-150: Obyektlar Kompozitsiyasi",
    "title": {
      "uz": "140. Express24 — Taom Buyurtmasi va Mijoz (FoodOrder & ClientProfile)",
      "en": "140. Express24 — FoodOrder Has-A ClientProfile"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nHar bir taom buyurtmasi (FoodOrder) o'z buyurtmachisiga (ClientProfile) ega. Buyurtma orqali mijoz telefon raqamini 'order.getClient().getPhone()' tarzida oling.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Birinchi tarkibiy sinf 'ClientProfile' ni yarating: tegishli maydonlar, konstruktor va getterlar.\n\n2. Asosiy kompozitsiya sinfi 'FoodOrder' ni yarating va unga tarkibiy 'ClientProfile' maydonini qo'shing.\n\n3. 'FoodOrder' konstruktorida 'ClientProfile' ob'yektini qabul qilib maydonga o'zlashtiring.\n\n4. 'Main' metodida avval 'ClientProfile' komponentini, so'ng uni uzatib 'FoodOrder' ob'yektini yarating.\n\n5. Zanjirli getter orqali ma'lumotlarni namunadagidek konsolga chop eting.",
      "en": "📖 Real-World Scenario & Context\nFood delivery orders associate directly with a client profile object. Query the client contact phone.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Create component class 'ClientProfile' with fields, constructor, and getters.\n\n2. Create composite class 'FoodOrder' embedding 'ClientProfile' reference.\n\n3. Write 'FoodOrder' constructor receiving component reference.\n\n4. In 'main', instantiate component object first, then composite entity.\n\n5. Print results via chained accessors."
    },
    "story": {
      "uz": "Har bir taom buyurtmasi (FoodOrder) o'z buyurtmachisiga (ClientProfile) ega. Buyurtma orqali mijoz telefon raqamini 'order.getClient().getPhone()' tarzida oling.",
      "en": "Food delivery orders associate directly with a client profile object. Query the client contact phone."
    },
    "steps": {
      "uz": [
        "Birinchi tarkibiy sinf 'ClientProfile' ni yarating: tegishli maydonlar, konstruktor va getterlar.",
        "Asosiy kompozitsiya sinfi 'FoodOrder' ni yarating va unga tarkibiy 'ClientProfile' maydonini qo'shing.",
        "'FoodOrder' konstruktorida 'ClientProfile' ob'yektini qabul qilib maydonga o'zlashtiring.",
        "'Main' metodida avval 'ClientProfile' komponentini, so'ng uni uzatib 'FoodOrder' ob'yektini yarating.",
        "Zanjirli getter orqali ma'lumotlarni namunadagidek konsolga chop eting."
      ],
      "en": [
        "Create component class 'ClientProfile' with fields, constructor, and getters.",
        "Create composite class 'FoodOrder' embedding 'ClientProfile' reference.",
        "Write 'FoodOrder' constructor receiving component reference.",
        "In 'main', instantiate component object first, then composite entity.",
        "Print results via chained accessors."
      ]
    },
    "requirements": {
      "classes": [
        "ClientProfile",
        "FoodOrder",
        "Main"
      ],
      "privateFields": [
        "clientName",
        "phone",
        "orderId",
        "client"
      ],
      "constructors": [
        "ClientProfile",
        "FoodOrder"
      ],
      "methods": [
        "getClientName",
        "getPhone",
        "getOrderId",
        "getClient"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class ClientProfile {\n    private String clientName;\n    private String phone;\n\n    public ClientProfile(String clientName, String phone) {\n        this.clientName = clientName; this.phone = phone;\n    }\n\n    public String getClientName() {\n        return this.clientName;\n    }\n\n    public String getPhone() {\n        return this.phone;\n    }\n}\n\nclass FoodOrder {\n    // TODO: Tarkibiy ClientProfile maydonini saqlab, konstruktor va getterni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ClientProfile profile = new ClientProfile(\"Nodira Salimova\", \"+998901112233\");\nFoodOrder ord = new FoodOrder(4091, profile);\nSystem.out.println(\"Buyurtma #\" + ord.getOrderId() + \" | Mijoz tel: \" + ord.getClient().getPhone());\n    }\n}",
    "solution": "class ClientProfile {\n    private String clientName;\n    private String phone;\n\n    public ClientProfile(String clientName, String phone) {\n        this.clientName = clientName; this.phone = phone;\n    }\n\n    public String getClientName() {\n        return this.clientName;\n    }\n\n    public String getPhone() {\n        return this.phone;\n    }\n}\n\nclass FoodOrder {\n    private int orderId;\n    private ClientProfile client;\n\n    public FoodOrder(int orderId, ClientProfile client) {\n        this.orderId = orderId; this.client = client;\n    }\n\n    public int getOrderId() {\n        return this.orderId;\n    }\n\n    public ClientProfile getClient() {\n        return this.client;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ClientProfile profile = new ClientProfile(\"Nodira Salimova\", \"+998901112233\");\nFoodOrder ord = new FoodOrder(4091, profile);\nSystem.out.println(\"Buyurtma #\" + ord.getOrderId() + \" | Mijoz tel: \" + ord.getClient().getPhone());\n    }\n}",
    "sampleData": [
      "Buyurtma #4091 | Mijoz tel: +998901112233"
    ],
    "expectedOutput": "Buyurtma #4091 | Mijoz tel: +998901112233",
    "detailedSolution": {
      "theory": "Buyurtma o'z egasini kompozitsiya orqali taniyadi. Bu ma'lumotlar qayta ishlatilishini osonlashtiradi.",
      "theoryEn": "Orders maintain client references rather than duplicating client contact information across multiple records.",
      "cleanCode": "class FoodOrder {\n    private int orderId;\n    private ClientProfile client;\n\n    public FoodOrder(int orderId, ClientProfile client) {\n        this.orderId = orderId; this.client = client;\n    }\n\n    public int getOrderId() {\n        return this.orderId;\n    }\n\n    public ClientProfile getClient() {\n        return this.client;\n    }\n}",
      "breakdown": [
        "<code>ClientProfile inside FoodOrder</code>: Kompozitsiya ('Has-A') orqali ikki mustaqil ob'yekt o'zaro bog'langan.",
        "<code>Chained Access</code>: 'obj.getComponent().getProperty()' orqali ichki holat xavfsiz o'qiladi."
      ],
      "pitfalls": "client maydoni ClientProfile turida bo'lishi shart.",
      "cw2Tip": "CW2 Console Order Applicationda 'Order' klassi aynan shunday 'Customer' kompozitsiyasiga ega bo'ladi."
    }
  },
  {
    "id": 141,
    "tier": 10,
    "tierName": "10-Bosqich: Kompozitsiya (Composition — Has-A Munosabati)",
    "sector": "136-150: Obyektlar Kompozitsiyasi",
    "title": {
      "uz": "141. Click — To'lov Kvitansiyasi va Tranzaksiya Tafsiloti (PaymentReceipt & TxDetails)",
      "en": "141. Click — PaymentReceipt Has-A TxDetails"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nElektron to'lov cheki (PaymentReceipt) tranzaksiya tafsilotlarini (TxDetails: txId va provider) o'z ichiga oladi. Kvitansiya orqali provayder nomini zanjirli getter bilan oling.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Birinchi tarkibiy sinf 'TxDetails' ni yarating: tegishli maydonlar, konstruktor va getterlar.\n\n2. Asosiy kompozitsiya sinfi 'PaymentReceipt' ni yarating va unga tarkibiy 'TxDetails' maydonini qo'shing.\n\n3. 'PaymentReceipt' konstruktorida 'TxDetails' ob'yektini qabul qilib maydonga o'zlashtiring.\n\n4. 'Main' metodida avval 'TxDetails' komponentini, so'ng uni uzatib 'PaymentReceipt' ob'yektini yarating.\n\n5. Zanjirli getter orqali ma'lumotlarni namunadagidek konsolga chop eting.",
      "en": "📖 Real-World Scenario & Context\nPayment receipts wrap transaction metadata objects. Access the payment service provider via chained calls.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Create component class 'TxDetails' with fields, constructor, and getters.\n\n2. Create composite class 'PaymentReceipt' embedding 'TxDetails' reference.\n\n3. Write 'PaymentReceipt' constructor receiving component reference.\n\n4. In 'main', instantiate component object first, then composite entity.\n\n5. Print results via chained accessors."
    },
    "story": {
      "uz": "Elektron to'lov cheki (PaymentReceipt) tranzaksiya tafsilotlarini (TxDetails: txId va provider) o'z ichiga oladi. Kvitansiya orqali provayder nomini zanjirli getter bilan oling.",
      "en": "Payment receipts wrap transaction metadata objects. Access the payment service provider via chained calls."
    },
    "steps": {
      "uz": [
        "Birinchi tarkibiy sinf 'TxDetails' ni yarating: tegishli maydonlar, konstruktor va getterlar.",
        "Asosiy kompozitsiya sinfi 'PaymentReceipt' ni yarating va unga tarkibiy 'TxDetails' maydonini qo'shing.",
        "'PaymentReceipt' konstruktorida 'TxDetails' ob'yektini qabul qilib maydonga o'zlashtiring.",
        "'Main' metodida avval 'TxDetails' komponentini, so'ng uni uzatib 'PaymentReceipt' ob'yektini yarating.",
        "Zanjirli getter orqali ma'lumotlarni namunadagidek konsolga chop eting."
      ],
      "en": [
        "Create component class 'TxDetails' with fields, constructor, and getters.",
        "Create composite class 'PaymentReceipt' embedding 'TxDetails' reference.",
        "Write 'PaymentReceipt' constructor receiving component reference.",
        "In 'main', instantiate component object first, then composite entity.",
        "Print results via chained accessors."
      ]
    },
    "requirements": {
      "classes": [
        "TxDetails",
        "PaymentReceipt",
        "Main"
      ],
      "privateFields": [
        "txId",
        "provider",
        "receiptId",
        "details"
      ],
      "constructors": [
        "TxDetails",
        "PaymentReceipt"
      ],
      "methods": [
        "getTxId",
        "getProvider",
        "getReceiptId",
        "getDetails"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class TxDetails {\n    private String txId;\n    private String provider;\n\n    public TxDetails(String txId, String provider) {\n        this.txId = txId; this.provider = provider;\n    }\n\n    public String getTxId() {\n        return this.txId;\n    }\n\n    public String getProvider() {\n        return this.provider;\n    }\n}\n\nclass PaymentReceipt {\n    // TODO: Tarkibiy TxDetails maydonini saqlab, konstruktor va getterni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TxDetails det = new TxDetails(\"TX-99014\", \"Beeline Internet\");\nPaymentReceipt rec = new PaymentReceipt(\"RCP-881\", det);\nSystem.out.println(\"Chek: \" + rec.getReceiptId() + \" | Provayder: \" + rec.getDetails().getProvider());\n    }\n}",
    "solution": "class TxDetails {\n    private String txId;\n    private String provider;\n\n    public TxDetails(String txId, String provider) {\n        this.txId = txId; this.provider = provider;\n    }\n\n    public String getTxId() {\n        return this.txId;\n    }\n\n    public String getProvider() {\n        return this.provider;\n    }\n}\n\nclass PaymentReceipt {\n    private String receiptId;\n    private TxDetails details;\n\n    public PaymentReceipt(String receiptId, TxDetails details) {\n        this.receiptId = receiptId; this.details = details;\n    }\n\n    public String getReceiptId() {\n        return this.receiptId;\n    }\n\n    public TxDetails getDetails() {\n        return this.details;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TxDetails det = new TxDetails(\"TX-99014\", \"Beeline Internet\");\nPaymentReceipt rec = new PaymentReceipt(\"RCP-881\", det);\nSystem.out.println(\"Chek: \" + rec.getReceiptId() + \" | Provayder: \" + rec.getDetails().getProvider());\n    }\n}",
    "sampleData": [
      "Chek: RCP-881 | Provayder: Beeline Internet"
    ],
    "expectedOutput": "Chek: RCP-881 | Provayder: Beeline Internet",
    "detailedSolution": {
      "theory": "Kompozitsiya orqali to'lov tafsilotlari chekdan alohida o'rganilishi va sinovdan o'tkazilishi mumkin.",
      "theoryEn": "Encapsulating transaction details within receipt objects supports unit-testability and modular updates.",
      "cleanCode": "class PaymentReceipt {\n    private String receiptId;\n    private TxDetails details;\n\n    public PaymentReceipt(String receiptId, TxDetails details) {\n        this.receiptId = receiptId; this.details = details;\n    }\n\n    public String getReceiptId() {\n        return this.receiptId;\n    }\n\n    public TxDetails getDetails() {\n        return this.details;\n    }\n}",
      "breakdown": [
        "<code>TxDetails inside PaymentReceipt</code>: Kompozitsiya ('Has-A') orqali ikki mustaqil ob'yekt o'zaro bog'langan.",
        "<code>Chained Access</code>: 'obj.getComponent().getProperty()' orqali ichki holat xavfsiz o'qiladi."
      ],
      "pitfalls": "details maydonini getter orqali o'qiganda 'rec.getDetails().getProvider()' zanjiridan foydalaning.",
      "cw2Tip": "To'lov kvitansiyalarini shakllantirishda tranzaksiya obyektini ichki kompozitsiya qiling."
    }
  },
  {
    "id": 142,
    "tier": 10,
    "tierName": "10-Bosqich: Kompozitsiya (Composition — Has-A Munosabati)",
    "sector": "136-150: Obyektlar Kompozitsiyasi",
    "title": {
      "uz": "142. Asaxiy Books — Nashr Kitobi va Muallif (Book & Author)",
      "en": "142. Asaxiy Books — Book Has-An Author"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nKitob (Book) o'z muallifiga (Author) ega (Book has an Author). Kitob sarlavhasi va muallifning tug'ilgan yurtini zanjirli getter orqali konsolga chiqaring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Birinchi tarkibiy sinf 'Author' ni yarating: tegishli maydonlar, konstruktor va getterlar.\n\n2. Asosiy kompozitsiya sinfi 'Book' ni yarating va unga tarkibiy 'Author' maydonini qo'shing.\n\n3. 'Book' konstruktorida 'Author' ob'yektini qabul qilib maydonga o'zlashtiring.\n\n4. 'Main' metodida avval 'Author' komponentini, so'ng uni uzatib 'Book' ob'yektini yarating.\n\n5. Zanjirli getter orqali ma'lumotlarni namunadagidek konsolga chop eting.",
      "en": "📖 Real-World Scenario & Context\nBooks encapsulate an Author reference. Display book title alongside author country of origin.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Create component class 'Author' with fields, constructor, and getters.\n\n2. Create composite class 'Book' embedding 'Author' reference.\n\n3. Write 'Book' constructor receiving component reference.\n\n4. In 'main', instantiate component object first, then composite entity.\n\n5. Print results via chained accessors."
    },
    "story": {
      "uz": "Kitob (Book) o'z muallifiga (Author) ega (Book has an Author). Kitob sarlavhasi va muallifning tug'ilgan yurtini zanjirli getter orqali konsolga chiqaring.",
      "en": "Books encapsulate an Author reference. Display book title alongside author country of origin."
    },
    "steps": {
      "uz": [
        "Birinchi tarkibiy sinf 'Author' ni yarating: tegishli maydonlar, konstruktor va getterlar.",
        "Asosiy kompozitsiya sinfi 'Book' ni yarating va unga tarkibiy 'Author' maydonini qo'shing.",
        "'Book' konstruktorida 'Author' ob'yektini qabul qilib maydonga o'zlashtiring.",
        "'Main' metodida avval 'Author' komponentini, so'ng uni uzatib 'Book' ob'yektini yarating.",
        "Zanjirli getter orqali ma'lumotlarni namunadagidek konsolga chop eting."
      ],
      "en": [
        "Create component class 'Author' with fields, constructor, and getters.",
        "Create composite class 'Book' embedding 'Author' reference.",
        "Write 'Book' constructor receiving component reference.",
        "In 'main', instantiate component object first, then composite entity.",
        "Print results via chained accessors."
      ]
    },
    "requirements": {
      "classes": [
        "Author",
        "Book",
        "Main"
      ],
      "privateFields": [
        "name",
        "country",
        "title",
        "author"
      ],
      "constructors": [
        "Author",
        "Book"
      ],
      "methods": [
        "getName",
        "getCountry",
        "getTitle",
        "getAuthor"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class Author {\n    private String name;\n    private String country;\n\n    public Author(String name, String country) {\n        this.name = name; this.country = country;\n    }\n\n    public String getName() {\n        return this.name;\n    }\n\n    public String getCountry() {\n        return this.country;\n    }\n}\n\nclass Book {\n    // TODO: Tarkibiy Author maydonini saqlab, konstruktor va getterni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Author auth = new Author(\"O'tkir Hoshimov\", \"O'zbekiston\");\nBook bk = new Book(\"Dunyoning Ishlari\", auth);\nSystem.out.println(\"Kitob: \" + bk.getTitle() + \" | Muallif yurti: \" + bk.getAuthor().getCountry());\n    }\n}",
    "solution": "class Author {\n    private String name;\n    private String country;\n\n    public Author(String name, String country) {\n        this.name = name; this.country = country;\n    }\n\n    public String getName() {\n        return this.name;\n    }\n\n    public String getCountry() {\n        return this.country;\n    }\n}\n\nclass Book {\n    private String title;\n    private Author author;\n\n    public Book(String title, Author author) {\n        this.title = title; this.author = author;\n    }\n\n    public String getTitle() {\n        return this.title;\n    }\n\n    public Author getAuthor() {\n        return this.author;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Author auth = new Author(\"O'tkir Hoshimov\", \"O'zbekiston\");\nBook bk = new Book(\"Dunyoning Ishlari\", auth);\nSystem.out.println(\"Kitob: \" + bk.getTitle() + \" | Muallif yurti: \" + bk.getAuthor().getCountry());\n    }\n}",
    "sampleData": [
      "Kitob: Dunyoning Ishlari | Muallif yurti: O'zbekiston"
    ],
    "expectedOutput": "Kitob: Dunyoning Ishlari | Muallif yurti: O'zbekiston",
    "detailedSolution": {
      "theory": "Bir muallif bir nechta kitobga ega bo'lishi mumkin, shuning uchun muallif alohida sinf qilib loyihalanadi.",
      "theoryEn": "Separating Author into an independent class enables author reusability across multiple Book instances.",
      "cleanCode": "class Book {\n    private String title;\n    private Author author;\n\n    public Book(String title, Author author) {\n        this.title = title; this.author = author;\n    }\n\n    public String getTitle() {\n        return this.title;\n    }\n\n    public Author getAuthor() {\n        return this.author;\n    }\n}",
      "breakdown": [
        "<code>Author inside Book</code>: Kompozitsiya ('Has-A') orqali ikki mustaqil ob'yekt o'zaro bog'langan.",
        "<code>Chained Access</code>: 'obj.getComponent().getProperty()' orqali ichki holat xavfsiz o'qiladi."
      ],
      "pitfalls": "Muallif nomini Book ichida shunchaki String qilib qoldirmang, Author obyektidan foydalaning.",
      "cw2Tip": "Katalog tizimlarida muallif yoki ishlab chiqaruvchi obyektlarini alohida sinf qilib kompozitsiyaga oling."
    }
  },
  {
    "id": 143,
    "tier": 10,
    "tierName": "10-Bosqich: Kompozitsiya (Composition — Has-A Munosabati)",
    "sector": "136-150: Obyektlar Kompozitsiyasi",
    "title": {
      "uz": "143. Beeline — Abonent va Tarif Rejasi (Subscriber & TariffPlan)",
      "en": "143. Beeline — Subscriber Has-A TariffPlan"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nMobil aloqa abonenti (Subscriber) muayyan tarif rejasiga (TariffPlan: planName va monthlyPrice) ulangan bo'ladi. Abonent orqali tarif narxini oling.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Birinchi tarkibiy sinf 'TariffPlan' ni yarating: tegishli maydonlar, konstruktor va getterlar.\n\n2. Asosiy kompozitsiya sinfi 'Subscriber' ni yarating va unga tarkibiy 'TariffPlan' maydonini qo'shing.\n\n3. 'Subscriber' konstruktorida 'TariffPlan' ob'yektini qabul qilib maydonga o'zlashtiring.\n\n4. 'Main' metodida avval 'TariffPlan' komponentini, so'ng uni uzatib 'Subscriber' ob'yektini yarating.\n\n5. Zanjirli getter orqali ma'lumotlarni namunadagidek konsolga chop eting.",
      "en": "📖 Real-World Scenario & Context\nTelecom subscribers encapsulate an assigned TariffPlan. Retrieve subscriber monthly tariff charges.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Create component class 'TariffPlan' with fields, constructor, and getters.\n\n2. Create composite class 'Subscriber' embedding 'TariffPlan' reference.\n\n3. Write 'Subscriber' constructor receiving component reference.\n\n4. In 'main', instantiate component object first, then composite entity.\n\n5. Print results via chained accessors."
    },
    "story": {
      "uz": "Mobil aloqa abonenti (Subscriber) muayyan tarif rejasiga (TariffPlan: planName va monthlyPrice) ulangan bo'ladi. Abonent orqali tarif narxini oling.",
      "en": "Telecom subscribers encapsulate an assigned TariffPlan. Retrieve subscriber monthly tariff charges."
    },
    "steps": {
      "uz": [
        "Birinchi tarkibiy sinf 'TariffPlan' ni yarating: tegishli maydonlar, konstruktor va getterlar.",
        "Asosiy kompozitsiya sinfi 'Subscriber' ni yarating va unga tarkibiy 'TariffPlan' maydonini qo'shing.",
        "'Subscriber' konstruktorida 'TariffPlan' ob'yektini qabul qilib maydonga o'zlashtiring.",
        "'Main' metodida avval 'TariffPlan' komponentini, so'ng uni uzatib 'Subscriber' ob'yektini yarating.",
        "Zanjirli getter orqali ma'lumotlarni namunadagidek konsolga chop eting."
      ],
      "en": [
        "Create component class 'TariffPlan' with fields, constructor, and getters.",
        "Create composite class 'Subscriber' embedding 'TariffPlan' reference.",
        "Write 'Subscriber' constructor receiving component reference.",
        "In 'main', instantiate component object first, then composite entity.",
        "Print results via chained accessors."
      ]
    },
    "requirements": {
      "classes": [
        "TariffPlan",
        "Subscriber",
        "Main"
      ],
      "privateFields": [
        "planName",
        "monthlyPrice",
        "phoneNumber",
        "plan"
      ],
      "constructors": [
        "TariffPlan",
        "Subscriber"
      ],
      "methods": [
        "getPlanName",
        "getMonthlyPrice",
        "getPhoneNumber",
        "getPlan"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class TariffPlan {\n    private String planName;\n    private double monthlyPrice;\n\n    public TariffPlan(String planName, double monthlyPrice) {\n        this.planName = planName; this.monthlyPrice = monthlyPrice;\n    }\n\n    public String getPlanName() {\n        return this.planName;\n    }\n\n    public double getMonthlyPrice() {\n        return this.monthlyPrice;\n    }\n}\n\nclass Subscriber {\n    // TODO: Tarkibiy TariffPlan maydonini saqlab, konstruktor va getterni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TariffPlan tp = new TariffPlan(\"Yorqin 50\", 50000.0);\nSubscriber sub = new Subscriber(\"+998901234567\", tp);\nSystem.out.println(\"Abonent: \" + sub.getPhoneNumber() + \" | Tarif: \" + sub.getPlan().getMonthlyPrice() + \" so'm\");\n    }\n}",
    "solution": "class TariffPlan {\n    private String planName;\n    private double monthlyPrice;\n\n    public TariffPlan(String planName, double monthlyPrice) {\n        this.planName = planName; this.monthlyPrice = monthlyPrice;\n    }\n\n    public String getPlanName() {\n        return this.planName;\n    }\n\n    public double getMonthlyPrice() {\n        return this.monthlyPrice;\n    }\n}\n\nclass Subscriber {\n    private String phoneNumber;\n    private TariffPlan plan;\n\n    public Subscriber(String phoneNumber, TariffPlan plan) {\n        this.phoneNumber = phoneNumber; this.plan = plan;\n    }\n\n    public String getPhoneNumber() {\n        return this.phoneNumber;\n    }\n\n    public TariffPlan getPlan() {\n        return this.plan;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TariffPlan tp = new TariffPlan(\"Yorqin 50\", 50000.0);\nSubscriber sub = new Subscriber(\"+998901234567\", tp);\nSystem.out.println(\"Abonent: \" + sub.getPhoneNumber() + \" | Tarif: \" + sub.getPlan().getMonthlyPrice() + \" so'm\");\n    }\n}",
    "sampleData": [
      "Abonent: +998901234567 | Tarif: 50000.0 so'm"
    ],
    "expectedOutput": "Abonent: +998901234567 | Tarif: 50000.0 so'm",
    "detailedSolution": {
      "theory": "Tarif o'zgarsa faqat tarif obyekti almashtiriladi, abonent klassi strukturasi buzilmaydi.",
      "theoryEn": "Composition allows swapping tariff objects at runtime without rewriting subscriber class internals.",
      "cleanCode": "class Subscriber {\n    private String phoneNumber;\n    private TariffPlan plan;\n\n    public Subscriber(String phoneNumber, TariffPlan plan) {\n        this.phoneNumber = phoneNumber; this.plan = plan;\n    }\n\n    public String getPhoneNumber() {\n        return this.phoneNumber;\n    }\n\n    public TariffPlan getPlan() {\n        return this.plan;\n    }\n}",
      "breakdown": [
        "<code>TariffPlan inside Subscriber</code>: Kompozitsiya ('Has-A') orqali ikki mustaqil ob'yekt o'zaro bog'langan.",
        "<code>Chained Access</code>: 'obj.getComponent().getProperty()' orqali ichki holat xavfsiz o'qiladi."
      ],
      "pitfalls": "monthlyPrice double turida ekanligiga e'tibor qarating.",
      "cw2Tip": "Obuna va a'zolik modellarini loyihalashda kompozitsiya strukturasidan foydalaning."
    }
  },
  {
    "id": 144,
    "tier": 10,
    "tierName": "10-Bosqich: Kompozitsiya (Composition — Has-A Munosabati)",
    "sector": "136-150: Obyektlar Kompozitsiyasi",
    "title": {
      "uz": "144. Texnomart — Noutbuk va Protsessor (Laptop & Processor)",
      "en": "144. Texnomart — Laptop Has-A Processor"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nNoutbuk kompyuter (Laptop) protsessor (Processor: brand va coreCount) tarkibiy qismiga ega (Laptop has a Processor). Noutbuk orqali protsessor yadrolar sonini oling.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Birinchi tarkibiy sinf 'Processor' ni yarating: tegishli maydonlar, konstruktor va getterlar.\n\n2. Asosiy kompozitsiya sinfi 'Laptop' ni yarating va unga tarkibiy 'Processor' maydonini qo'shing.\n\n3. 'Laptop' konstruktorida 'Processor' ob'yektini qabul qilib maydonga o'zlashtiring.\n\n4. 'Main' metodida avval 'Processor' komponentini, so'ng uni uzatib 'Laptop' ob'yektini yarating.\n\n5. Zanjirli getter orqali ma'lumotlarni namunadagidek konsolga chop eting.",
      "en": "📖 Real-World Scenario & Context\nLaptops encapsulate an internal processor component. Access processor core count through chained getters.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Create component class 'Processor' with fields, constructor, and getters.\n\n2. Create composite class 'Laptop' embedding 'Processor' reference.\n\n3. Write 'Laptop' constructor receiving component reference.\n\n4. In 'main', instantiate component object first, then composite entity.\n\n5. Print results via chained accessors."
    },
    "story": {
      "uz": "Noutbuk kompyuter (Laptop) protsessor (Processor: brand va coreCount) tarkibiy qismiga ega (Laptop has a Processor). Noutbuk orqali protsessor yadrolar sonini oling.",
      "en": "Laptops encapsulate an internal processor component. Access processor core count through chained getters."
    },
    "steps": {
      "uz": [
        "Birinchi tarkibiy sinf 'Processor' ni yarating: tegishli maydonlar, konstruktor va getterlar.",
        "Asosiy kompozitsiya sinfi 'Laptop' ni yarating va unga tarkibiy 'Processor' maydonini qo'shing.",
        "'Laptop' konstruktorida 'Processor' ob'yektini qabul qilib maydonga o'zlashtiring.",
        "'Main' metodida avval 'Processor' komponentini, so'ng uni uzatib 'Laptop' ob'yektini yarating.",
        "Zanjirli getter orqali ma'lumotlarni namunadagidek konsolga chop eting."
      ],
      "en": [
        "Create component class 'Processor' with fields, constructor, and getters.",
        "Create composite class 'Laptop' embedding 'Processor' reference.",
        "Write 'Laptop' constructor receiving component reference.",
        "In 'main', instantiate component object first, then composite entity.",
        "Print results via chained accessors."
      ]
    },
    "requirements": {
      "classes": [
        "Processor",
        "Laptop",
        "Main"
      ],
      "privateFields": [
        "brand",
        "coreCount",
        "modelName",
        "processor"
      ],
      "constructors": [
        "Processor",
        "Laptop"
      ],
      "methods": [
        "getBrand",
        "getCoreCount",
        "getModelName",
        "getProcessor"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class Processor {\n    private String brand;\n    private int coreCount;\n\n    public Processor(String brand, int coreCount) {\n        this.brand = brand; this.coreCount = coreCount;\n    }\n\n    public String getBrand() {\n        return this.brand;\n    }\n\n    public int getCoreCount() {\n        return this.coreCount;\n    }\n}\n\nclass Laptop {\n    // TODO: Tarkibiy Processor maydonini saqlab, konstruktor va getterni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Processor proc = new Processor(\"Intel Core i7\", 10);\nLaptop lap = new Laptop(\"Lenovo ThinkPad\", proc);\nSystem.out.println(\"Noutbuk: \" + lap.getModelName() + \" | Yadro: \" + lap.getProcessor().getCoreCount());\n    }\n}",
    "solution": "class Processor {\n    private String brand;\n    private int coreCount;\n\n    public Processor(String brand, int coreCount) {\n        this.brand = brand; this.coreCount = coreCount;\n    }\n\n    public String getBrand() {\n        return this.brand;\n    }\n\n    public int getCoreCount() {\n        return this.coreCount;\n    }\n}\n\nclass Laptop {\n    private String modelName;\n    private Processor processor;\n\n    public Laptop(String modelName, Processor processor) {\n        this.modelName = modelName; this.processor = processor;\n    }\n\n    public String getModelName() {\n        return this.modelName;\n    }\n\n    public Processor getProcessor() {\n        return this.processor;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Processor proc = new Processor(\"Intel Core i7\", 10);\nLaptop lap = new Laptop(\"Lenovo ThinkPad\", proc);\nSystem.out.println(\"Noutbuk: \" + lap.getModelName() + \" | Yadro: \" + lap.getProcessor().getCoreCount());\n    }\n}",
    "sampleData": [
      "Noutbuk: Lenovo ThinkPad | Yadro: 10"
    ],
    "expectedOutput": "Noutbuk: Lenovo ThinkPad | Yadro: 10",
    "detailedSolution": {
      "theory": "Apparat ta'minoti qismlarini mustaqil sinflarga ajratish tizimning modulliligini va qayta ishlatilishini ta'minlaydi.",
      "theoryEn": "Component modeling of physical hardware sub-assemblies demonstrates clean separation of concerns.",
      "cleanCode": "class Laptop {\n    private String modelName;\n    private Processor processor;\n\n    public Laptop(String modelName, Processor processor) {\n        this.modelName = modelName; this.processor = processor;\n    }\n\n    public String getModelName() {\n        return this.modelName;\n    }\n\n    public Processor getProcessor() {\n        return this.processor;\n    }\n}",
      "breakdown": [
        "<code>Processor inside Laptop</code>: Kompozitsiya ('Has-A') orqali ikki mustaqil ob'yekt o'zaro bog'langan.",
        "<code>Chained Access</code>: 'obj.getComponent().getProperty()' orqali ichki holat xavfsiz o'qiladi."
      ],
      "pitfalls": "getProcessor() metodi Processor sinfidagi ob'yektni qaytaradi.",
      "cw2Tip": "Qurilmalar va komponentlarni ajratib loyihalashtirish CW2 mezonlariga mos keladi."
    }
  },
  {
    "id": 145,
    "tier": 10,
    "tierName": "10-Bosqich: Kompozitsiya (Composition — Has-A Munosabati)",
    "sector": "136-150: Obyektlar Kompozitsiyasi",
    "title": {
      "uz": "145. Kapitalbank — Bank Hisobi va Mijoz (BankAccount & AccountHolder)",
      "en": "145. Kapitalbank — BankAccount Has-An AccountHolder"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nBank hisobvarag'i (BankAccount) o'z hisob egasiga (AccountHolder: fullName va passportNo) ega. Hisob orqali mijozning pasport seriyasini oling.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Birinchi tarkibiy sinf 'AccountHolder' ni yarating: tegishli maydonlar, konstruktor va getterlar.\n\n2. Asosiy kompozitsiya sinfi 'BankAccount' ni yarating va unga tarkibiy 'AccountHolder' maydonini qo'shing.\n\n3. 'BankAccount' konstruktorida 'AccountHolder' ob'yektini qabul qilib maydonga o'zlashtiring.\n\n4. 'Main' metodida avval 'AccountHolder' komponentini, so'ng uni uzatib 'BankAccount' ob'yektini yarating.\n\n5. Zanjirli getter orqali ma'lumotlarni namunadagidek konsolga chop eting.",
      "en": "📖 Real-World Scenario & Context\nBank accounts encapsulate account holder identity models. Retrieve the holder passport identifier.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Create component class 'AccountHolder' with fields, constructor, and getters.\n\n2. Create composite class 'BankAccount' embedding 'AccountHolder' reference.\n\n3. Write 'BankAccount' constructor receiving component reference.\n\n4. In 'main', instantiate component object first, then composite entity.\n\n5. Print results via chained accessors."
    },
    "story": {
      "uz": "Bank hisobvarag'i (BankAccount) o'z hisob egasiga (AccountHolder: fullName va passportNo) ega. Hisob orqali mijozning pasport seriyasini oling.",
      "en": "Bank accounts encapsulate account holder identity models. Retrieve the holder passport identifier."
    },
    "steps": {
      "uz": [
        "Birinchi tarkibiy sinf 'AccountHolder' ni yarating: tegishli maydonlar, konstruktor va getterlar.",
        "Asosiy kompozitsiya sinfi 'BankAccount' ni yarating va unga tarkibiy 'AccountHolder' maydonini qo'shing.",
        "'BankAccount' konstruktorida 'AccountHolder' ob'yektini qabul qilib maydonga o'zlashtiring.",
        "'Main' metodida avval 'AccountHolder' komponentini, so'ng uni uzatib 'BankAccount' ob'yektini yarating.",
        "Zanjirli getter orqali ma'lumotlarni namunadagidek konsolga chop eting."
      ],
      "en": [
        "Create component class 'AccountHolder' with fields, constructor, and getters.",
        "Create composite class 'BankAccount' embedding 'AccountHolder' reference.",
        "Write 'BankAccount' constructor receiving component reference.",
        "In 'main', instantiate component object first, then composite entity.",
        "Print results via chained accessors."
      ]
    },
    "requirements": {
      "classes": [
        "AccountHolder",
        "BankAccount",
        "Main"
      ],
      "privateFields": [
        "fullName",
        "passportNo",
        "accountIban",
        "holder"
      ],
      "constructors": [
        "AccountHolder",
        "BankAccount"
      ],
      "methods": [
        "getFullName",
        "getPassportNo",
        "getAccountIban",
        "getHolder"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class AccountHolder {\n    private String fullName;\n    private String passportNo;\n\n    public AccountHolder(String fullName, String passportNo) {\n        this.fullName = fullName; this.passportNo = passportNo;\n    }\n\n    public String getFullName() {\n        return this.fullName;\n    }\n\n    public String getPassportNo() {\n        return this.passportNo;\n    }\n}\n\nclass BankAccount {\n    // TODO: Tarkibiy AccountHolder maydonini saqlab, konstruktor va getterni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AccountHolder h = new AccountHolder(\"Bobur Mirzayev\", \"AA7788991\");\nBankAccount acc = new BankAccount(\"UZ2100044499112233\", h);\nSystem.out.println(\"Hisob: \" + acc.getAccountIban() + \" | Pasport: \" + acc.getHolder().getPassportNo());\n    }\n}",
    "solution": "class AccountHolder {\n    private String fullName;\n    private String passportNo;\n\n    public AccountHolder(String fullName, String passportNo) {\n        this.fullName = fullName; this.passportNo = passportNo;\n    }\n\n    public String getFullName() {\n        return this.fullName;\n    }\n\n    public String getPassportNo() {\n        return this.passportNo;\n    }\n}\n\nclass BankAccount {\n    private String accountIban;\n    private AccountHolder holder;\n\n    public BankAccount(String accountIban, AccountHolder holder) {\n        this.accountIban = accountIban; this.holder = holder;\n    }\n\n    public String getAccountIban() {\n        return this.accountIban;\n    }\n\n    public AccountHolder getHolder() {\n        return this.holder;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AccountHolder h = new AccountHolder(\"Bobur Mirzayev\", \"AA7788991\");\nBankAccount acc = new BankAccount(\"UZ2100044499112233\", h);\nSystem.out.println(\"Hisob: \" + acc.getAccountIban() + \" | Pasport: \" + acc.getHolder().getPassportNo());\n    }\n}",
    "sampleData": [
      "Hisob: UZ2100044499112233 | Pasport: AA7788991"
    ],
    "expectedOutput": "Hisob: UZ2100044499112233 | Pasport: AA7788991",
    "detailedSolution": {
      "theory": "Hisobvaraq va shaxs ma'lumotlari alohida saqlanishi kerak; bir shaxs bir nechta hisobga ega bo'lishi mumkin.",
      "theoryEn": "Separating bank account from personal account holder accommodates one-to-many business relationships cleanly.",
      "cleanCode": "class BankAccount {\n    private String accountIban;\n    private AccountHolder holder;\n\n    public BankAccount(String accountIban, AccountHolder holder) {\n        this.accountIban = accountIban; this.holder = holder;\n    }\n\n    public String getAccountIban() {\n        return this.accountIban;\n    }\n\n    public AccountHolder getHolder() {\n        return this.holder;\n    }\n}",
      "breakdown": [
        "<code>AccountHolder inside BankAccount</code>: Kompozitsiya ('Has-A') orqali ikki mustaqil ob'yekt o'zaro bog'langan.",
        "<code>Chained Access</code>: 'obj.getComponent().getProperty()' orqali ichki holat xavfsiz o'qiladi."
      ],
      "pitfalls": "holder maydonini private qilib, faqat getHolder() orqali o'qishga ruxsat bering.",
      "cw2Tip": "Hisob va mijoz munosabatlarini kompozitsiya bilan bog'lang."
    }
  },
  {
    "id": 146,
    "tier": 10,
    "tierName": "10-Bosqich: Kompozitsiya (Composition — Has-A Munosabati)",
    "sector": "136-150: Obyektlar Kompozitsiyasi",
    "title": {
      "uz": "146. Medion Clinic — Bemor Kartasi va Shifokor (PatientRecord & Doctor)",
      "en": "146. Medion Clinic — PatientRecord Has-A Doctor"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nBemorning tibbiy kartasi (PatientRecord) tayinlangan davolovchi shifokor (Doctor: docName va specialization) obyektiga ega. Bemor kartasi orqali shifokor mutaxassisligini oling.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Birinchi tarkibiy sinf 'Doctor' ni yarating: tegishli maydonlar, konstruktor va getterlar.\n\n2. Asosiy kompozitsiya sinfi 'PatientRecord' ni yarating va unga tarkibiy 'Doctor' maydonini qo'shing.\n\n3. 'PatientRecord' konstruktorida 'Doctor' ob'yektini qabul qilib maydonga o'zlashtiring.\n\n4. 'Main' metodida avval 'Doctor' komponentini, so'ng uni uzatib 'PatientRecord' ob'yektini yarating.\n\n5. Zanjirli getter orqali ma'lumotlarni namunadagidek konsolga chop eting.",
      "en": "📖 Real-World Scenario & Context\nClinical patient records encapsulate assigned physician details. Access the doctor's medical specialization.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Create component class 'Doctor' with fields, constructor, and getters.\n\n2. Create composite class 'PatientRecord' embedding 'Doctor' reference.\n\n3. Write 'PatientRecord' constructor receiving component reference.\n\n4. In 'main', instantiate component object first, then composite entity.\n\n5. Print results via chained accessors."
    },
    "story": {
      "uz": "Bemorning tibbiy kartasi (PatientRecord) tayinlangan davolovchi shifokor (Doctor: docName va specialization) obyektiga ega. Bemor kartasi orqali shifokor mutaxassisligini oling.",
      "en": "Clinical patient records encapsulate assigned physician details. Access the doctor's medical specialization."
    },
    "steps": {
      "uz": [
        "Birinchi tarkibiy sinf 'Doctor' ni yarating: tegishli maydonlar, konstruktor va getterlar.",
        "Asosiy kompozitsiya sinfi 'PatientRecord' ni yarating va unga tarkibiy 'Doctor' maydonini qo'shing.",
        "'PatientRecord' konstruktorida 'Doctor' ob'yektini qabul qilib maydonga o'zlashtiring.",
        "'Main' metodida avval 'Doctor' komponentini, so'ng uni uzatib 'PatientRecord' ob'yektini yarating.",
        "Zanjirli getter orqali ma'lumotlarni namunadagidek konsolga chop eting."
      ],
      "en": [
        "Create component class 'Doctor' with fields, constructor, and getters.",
        "Create composite class 'PatientRecord' embedding 'Doctor' reference.",
        "Write 'PatientRecord' constructor receiving component reference.",
        "In 'main', instantiate component object first, then composite entity.",
        "Print results via chained accessors."
      ]
    },
    "requirements": {
      "classes": [
        "Doctor",
        "PatientRecord",
        "Main"
      ],
      "privateFields": [
        "docName",
        "specialization",
        "recordNo",
        "doctor"
      ],
      "constructors": [
        "Doctor",
        "PatientRecord"
      ],
      "methods": [
        "getDocName",
        "getSpecialization",
        "getRecordNo",
        "getDoctor"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class Doctor {\n    private String docName;\n    private String specialization;\n\n    public Doctor(String docName, String specialization) {\n        this.docName = docName; this.specialization = specialization;\n    }\n\n    public String getDocName() {\n        return this.docName;\n    }\n\n    public String getSpecialization() {\n        return this.specialization;\n    }\n}\n\nclass PatientRecord {\n    // TODO: Tarkibiy Doctor maydonini saqlab, konstruktor va getterni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Doctor doc = new Doctor(\"Dr. Saidov\", \"Kardiolog\");\nPatientRecord rec = new PatientRecord(\"MED-5021\", doc);\nSystem.out.println(\"Karta: \" + rec.getRecordNo() + \" | Mutaxassislik: \" + rec.getDoctor().getSpecialization());\n    }\n}",
    "solution": "class Doctor {\n    private String docName;\n    private String specialization;\n\n    public Doctor(String docName, String specialization) {\n        this.docName = docName; this.specialization = specialization;\n    }\n\n    public String getDocName() {\n        return this.docName;\n    }\n\n    public String getSpecialization() {\n        return this.specialization;\n    }\n}\n\nclass PatientRecord {\n    private String recordNo;\n    private Doctor doctor;\n\n    public PatientRecord(String recordNo, Doctor doctor) {\n        this.recordNo = recordNo; this.doctor = doctor;\n    }\n\n    public String getRecordNo() {\n        return this.recordNo;\n    }\n\n    public Doctor getDoctor() {\n        return this.doctor;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Doctor doc = new Doctor(\"Dr. Saidov\", \"Kardiolog\");\nPatientRecord rec = new PatientRecord(\"MED-5021\", doc);\nSystem.out.println(\"Karta: \" + rec.getRecordNo() + \" | Mutaxassislik: \" + rec.getDoctor().getSpecialization());\n    }\n}",
    "sampleData": [
      "Karta: MED-5021 | Mutaxassislik: Kardiolog"
    ],
    "expectedOutput": "Karta: MED-5021 | Mutaxassislik: Kardiolog",
    "detailedSolution": {
      "theory": "Tibbiy tizimlarda shifokor alohida sub'yekt bo'lib, bemor kartasiga kompozitsiya orqali biriktiriladi.",
      "theoryEn": "Physicians operate as standalone entities embedded inside medical charts via object composition.",
      "cleanCode": "class PatientRecord {\n    private String recordNo;\n    private Doctor doctor;\n\n    public PatientRecord(String recordNo, Doctor doctor) {\n        this.recordNo = recordNo; this.doctor = doctor;\n    }\n\n    public String getRecordNo() {\n        return this.recordNo;\n    }\n\n    public Doctor getDoctor() {\n        return this.doctor;\n    }\n}",
      "breakdown": [
        "<code>Doctor inside PatientRecord</code>: Kompozitsiya ('Has-A') orqali ikki mustaqil ob'yekt o'zaro bog'langan.",
        "<code>Chained Access</code>: 'obj.getComponent().getProperty()' orqali ichki holat xavfsiz o'qiladi."
      ],
      "pitfalls": "Shifokor ismi va mutaxassisligi Doctor sinfida saqlanishi kerak.",
      "cw2Tip": "Xizmat ko'rsatuvchi xodim va mijoz/buyurtma munosabatlarini kompozitsiya orqali yarating."
    }
  },
  {
    "id": 147,
    "tier": 10,
    "tierName": "10-Bosqich: Kompozitsiya (Composition — Has-A Munosabati)",
    "sector": "136-150: Obyektlar Kompozitsiyasi",
    "title": {
      "uz": "147. Uzbekistan Airways — Aviaparvoz va Samolyot (Flight & Aircraft)",
      "en": "147. Uzbekistan Airways — Flight Has-An Aircraft"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nHar bir aviaparvoz (Flight) qatnovni amalga oshiruvchi samolyot (Aircraft: planeModel va seatCapacity) obyektiga ega (Flight has an Aircraft). Parvoz orqali samolyot sig'imini oling.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Birinchi tarkibiy sinf 'Aircraft' ni yarating: tegishli maydonlar, konstruktor va getterlar.\n\n2. Asosiy kompozitsiya sinfi 'Flight' ni yarating va unga tarkibiy 'Aircraft' maydonini qo'shing.\n\n3. 'Flight' konstruktorida 'Aircraft' ob'yektini qabul qilib maydonga o'zlashtiring.\n\n4. 'Main' metodida avval 'Aircraft' komponentini, so'ng uni uzatib 'Flight' ob'yektini yarating.\n\n5. Zanjirli getter orqali ma'lumotlarni namunadagidek konsolga chop eting.",
      "en": "📖 Real-World Scenario & Context\nScheduled flights encapsulate assigned aircraft specs. Retrieve the total flight seat capacity.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Create component class 'Aircraft' with fields, constructor, and getters.\n\n2. Create composite class 'Flight' embedding 'Aircraft' reference.\n\n3. Write 'Flight' constructor receiving component reference.\n\n4. In 'main', instantiate component object first, then composite entity.\n\n5. Print results via chained accessors."
    },
    "story": {
      "uz": "Har bir aviaparvoz (Flight) qatnovni amalga oshiruvchi samolyot (Aircraft: planeModel va seatCapacity) obyektiga ega (Flight has an Aircraft). Parvoz orqali samolyot sig'imini oling.",
      "en": "Scheduled flights encapsulate assigned aircraft specs. Retrieve the total flight seat capacity."
    },
    "steps": {
      "uz": [
        "Birinchi tarkibiy sinf 'Aircraft' ni yarating: tegishli maydonlar, konstruktor va getterlar.",
        "Asosiy kompozitsiya sinfi 'Flight' ni yarating va unga tarkibiy 'Aircraft' maydonini qo'shing.",
        "'Flight' konstruktorida 'Aircraft' ob'yektini qabul qilib maydonga o'zlashtiring.",
        "'Main' metodida avval 'Aircraft' komponentini, so'ng uni uzatib 'Flight' ob'yektini yarating.",
        "Zanjirli getter orqali ma'lumotlarni namunadagidek konsolga chop eting."
      ],
      "en": [
        "Create component class 'Aircraft' with fields, constructor, and getters.",
        "Create composite class 'Flight' embedding 'Aircraft' reference.",
        "Write 'Flight' constructor receiving component reference.",
        "In 'main', instantiate component object first, then composite entity.",
        "Print results via chained accessors."
      ]
    },
    "requirements": {
      "classes": [
        "Aircraft",
        "Flight",
        "Main"
      ],
      "privateFields": [
        "planeModel",
        "seatCapacity",
        "flightNumber",
        "aircraft"
      ],
      "constructors": [
        "Aircraft",
        "Flight"
      ],
      "methods": [
        "getPlaneModel",
        "getSeatCapacity",
        "getFlightNumber",
        "getAircraft"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class Aircraft {\n    private String planeModel;\n    private int seatCapacity;\n\n    public Aircraft(String planeModel, int seatCapacity) {\n        this.planeModel = planeModel; this.seatCapacity = seatCapacity;\n    }\n\n    public String getPlaneModel() {\n        return this.planeModel;\n    }\n\n    public int getSeatCapacity() {\n        return this.seatCapacity;\n    }\n}\n\nclass Flight {\n    // TODO: Tarkibiy Aircraft maydonini saqlab, konstruktor va getterni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Aircraft plane = new Aircraft(\"Boeing 787 Dreamliner\", 270);\nFlight fl = new Flight(\"HY-101\", plane);\nSystem.out.println(\"Parvoz: \" + fl.getFlightNumber() + \" | O'rindiqlar: \" + fl.getAircraft().getSeatCapacity());\n    }\n}",
    "solution": "class Aircraft {\n    private String planeModel;\n    private int seatCapacity;\n\n    public Aircraft(String planeModel, int seatCapacity) {\n        this.planeModel = planeModel; this.seatCapacity = seatCapacity;\n    }\n\n    public String getPlaneModel() {\n        return this.planeModel;\n    }\n\n    public int getSeatCapacity() {\n        return this.seatCapacity;\n    }\n}\n\nclass Flight {\n    private String flightNumber;\n    private Aircraft aircraft;\n\n    public Flight(String flightNumber, Aircraft aircraft) {\n        this.flightNumber = flightNumber; this.aircraft = aircraft;\n    }\n\n    public String getFlightNumber() {\n        return this.flightNumber;\n    }\n\n    public Aircraft getAircraft() {\n        return this.aircraft;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Aircraft plane = new Aircraft(\"Boeing 787 Dreamliner\", 270);\nFlight fl = new Flight(\"HY-101\", plane);\nSystem.out.println(\"Parvoz: \" + fl.getFlightNumber() + \" | O'rindiqlar: \" + fl.getAircraft().getSeatCapacity());\n    }\n}",
    "sampleData": [
      "Parvoz: HY-101 | O'rindiqlar: 270"
    ],
    "expectedOutput": "Parvoz: HY-101 | O'rindiqlar: 270",
    "detailedSolution": {
      "theory": "Parvoz jadvali va samolyot texnik parki mustaqil tushunchalar bo'lib, kompozitsiya orqali biriktiriladi.",
      "theoryEn": "Flight scheduling and fleet inventory decouple gracefully through compositional references.",
      "cleanCode": "class Flight {\n    private String flightNumber;\n    private Aircraft aircraft;\n\n    public Flight(String flightNumber, Aircraft aircraft) {\n        this.flightNumber = flightNumber; this.aircraft = aircraft;\n    }\n\n    public String getFlightNumber() {\n        return this.flightNumber;\n    }\n\n    public Aircraft getAircraft() {\n        return this.aircraft;\n    }\n}",
      "breakdown": [
        "<code>Aircraft inside Flight</code>: Kompozitsiya ('Has-A') orqali ikki mustaqil ob'yekt o'zaro bog'langan.",
        "<code>Chained Access</code>: 'obj.getComponent().getProperty()' orqali ichki holat xavfsiz o'qiladi."
      ],
      "pitfalls": "seatCapacity int turida ekanligiga e'tibor qarating.",
      "cw2Tip": "Transport reysi va transport vositasi o'rtasida kompozitsiya munosabatini o'rnating."
    }
  },
  {
    "id": 148,
    "tier": 10,
    "tierName": "10-Bosqich: Kompozitsiya (Composition — Has-A Munosabati)",
    "sector": "136-150: Obyektlar Kompozitsiyasi",
    "title": {
      "uz": "148. Bringo — Kuryerlik Buyurtmasi va Kuryer (DeliveryShipment & Courier)",
      "en": "148. Bringo — DeliveryShipment Has-A Courier"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nYetkazib berish jo'natmasi (DeliveryShipment) tayinlangan kuryer (Courier: courierName va transportType) obyektini o'z ichiga oladi. Jo'natma orqali kuryer transport turini oling.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Birinchi tarkibiy sinf 'Courier' ni yarating: tegishli maydonlar, konstruktor va getterlar.\n\n2. Asosiy kompozitsiya sinfi 'DeliveryShipment' ni yarating va unga tarkibiy 'Courier' maydonini qo'shing.\n\n3. 'DeliveryShipment' konstruktorida 'Courier' ob'yektini qabul qilib maydonga o'zlashtiring.\n\n4. 'Main' metodida avval 'Courier' komponentini, so'ng uni uzatib 'DeliveryShipment' ob'yektini yarating.\n\n5. Zanjirli getter orqali ma'lumotlarni namunadagidek konsolga chop eting.",
      "en": "📖 Real-World Scenario & Context\nDispatched shipments encapsulate assigned courier details. Query the delivery courier transport vehicle type.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Create component class 'Courier' with fields, constructor, and getters.\n\n2. Create composite class 'DeliveryShipment' embedding 'Courier' reference.\n\n3. Write 'DeliveryShipment' constructor receiving component reference.\n\n4. In 'main', instantiate component object first, then composite entity.\n\n5. Print results via chained accessors."
    },
    "story": {
      "uz": "Yetkazib berish jo'natmasi (DeliveryShipment) tayinlangan kuryer (Courier: courierName va transportType) obyektini o'z ichiga oladi. Jo'natma orqali kuryer transport turini oling.",
      "en": "Dispatched shipments encapsulate assigned courier details. Query the delivery courier transport vehicle type."
    },
    "steps": {
      "uz": [
        "Birinchi tarkibiy sinf 'Courier' ni yarating: tegishli maydonlar, konstruktor va getterlar.",
        "Asosiy kompozitsiya sinfi 'DeliveryShipment' ni yarating va unga tarkibiy 'Courier' maydonini qo'shing.",
        "'DeliveryShipment' konstruktorida 'Courier' ob'yektini qabul qilib maydonga o'zlashtiring.",
        "'Main' metodida avval 'Courier' komponentini, so'ng uni uzatib 'DeliveryShipment' ob'yektini yarating.",
        "Zanjirli getter orqali ma'lumotlarni namunadagidek konsolga chop eting."
      ],
      "en": [
        "Create component class 'Courier' with fields, constructor, and getters.",
        "Create composite class 'DeliveryShipment' embedding 'Courier' reference.",
        "Write 'DeliveryShipment' constructor receiving component reference.",
        "In 'main', instantiate component object first, then composite entity.",
        "Print results via chained accessors."
      ]
    },
    "requirements": {
      "classes": [
        "Courier",
        "DeliveryShipment",
        "Main"
      ],
      "privateFields": [
        "courierName",
        "transportType",
        "trackingCode",
        "courier"
      ],
      "constructors": [
        "Courier",
        "DeliveryShipment"
      ],
      "methods": [
        "getCourierName",
        "getTransportType",
        "getTrackingCode",
        "getCourier"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class Courier {\n    private String courierName;\n    private String transportType;\n\n    public Courier(String courierName, String transportType) {\n        this.courierName = courierName; this.transportType = transportType;\n    }\n\n    public String getCourierName() {\n        return this.courierName;\n    }\n\n    public String getTransportType() {\n        return this.transportType;\n    }\n}\n\nclass DeliveryShipment {\n    // TODO: Tarkibiy Courier maydonini saqlab, konstruktor va getterni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Courier cour = new Courier(\"Jasur Temirov\", \"Skuter\");\nDeliveryShipment sh = new DeliveryShipment(\"BR-9941\", cour);\nSystem.out.println(\"Jo'natma: \" + sh.getTrackingCode() + \" | Transport: \" + sh.getCourier().getTransportType());\n    }\n}",
    "solution": "class Courier {\n    private String courierName;\n    private String transportType;\n\n    public Courier(String courierName, String transportType) {\n        this.courierName = courierName; this.transportType = transportType;\n    }\n\n    public String getCourierName() {\n        return this.courierName;\n    }\n\n    public String getTransportType() {\n        return this.transportType;\n    }\n}\n\nclass DeliveryShipment {\n    private String trackingCode;\n    private Courier courier;\n\n    public DeliveryShipment(String trackingCode, Courier courier) {\n        this.trackingCode = trackingCode; this.courier = courier;\n    }\n\n    public String getTrackingCode() {\n        return this.trackingCode;\n    }\n\n    public Courier getCourier() {\n        return this.courier;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Courier cour = new Courier(\"Jasur Temirov\", \"Skuter\");\nDeliveryShipment sh = new DeliveryShipment(\"BR-9941\", cour);\nSystem.out.println(\"Jo'natma: \" + sh.getTrackingCode() + \" | Transport: \" + sh.getCourier().getTransportType());\n    }\n}",
    "sampleData": [
      "Jo'natma: BR-9941 | Transport: Skuter"
    ],
    "expectedOutput": "Jo'natma: BR-9941 | Transport: Skuter",
    "detailedSolution": {
      "theory": "Jo'natma kuryerga ega bo'ladi; kuryer boshqa jo'natmalarga ham biriktirilishi mumkin.",
      "theoryEn": "Couriers and shipments represent decoupled domain entities tied together via composition.",
      "cleanCode": "class DeliveryShipment {\n    private String trackingCode;\n    private Courier courier;\n\n    public DeliveryShipment(String trackingCode, Courier courier) {\n        this.trackingCode = trackingCode; this.courier = courier;\n    }\n\n    public String getTrackingCode() {\n        return this.trackingCode;\n    }\n\n    public Courier getCourier() {\n        return this.courier;\n    }\n}",
      "breakdown": [
        "<code>Courier inside DeliveryShipment</code>: Kompozitsiya ('Has-A') orqali ikki mustaqil ob'yekt o'zaro bog'langan.",
        "<code>Chained Access</code>: 'obj.getComponent().getProperty()' orqali ichki holat xavfsiz o'qiladi."
      ],
      "pitfalls": "Kuryer transport turini shunchaki jo'natma ichida String qilib saqlamang.",
      "cw2Tip": "Logistika va yetkazish tizimlarida buyurtma va kuryerni kompozitsiya bilan bog'lang."
    }
  },
  {
    "id": 149,
    "tier": 10,
    "tierName": "10-Bosqich: Kompozitsiya (Composition — Has-A Munosabati)",
    "sector": "136-150: Obyektlar Kompozitsiyasi",
    "title": {
      "uz": "149. WIUT Registratura — Talaba va Akademik Baholar (Student & AcademicRecord)",
      "en": "149. WIUT Registry — Student Has-An AcademicRecord"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT talabasi (Student) o'zining akademik baholar daftarchasiga (AcademicRecord: gpa va creditsCompleted) ega (Student has an AcademicRecord). Talaba orqali uning to'plagan kreditlarini oling.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Birinchi tarkibiy sinf 'AcademicRecord' ni yarating: tegishli maydonlar, konstruktor va getterlar.\n\n2. Asosiy kompozitsiya sinfi 'Student' ni yarating va unga tarkibiy 'AcademicRecord' maydonini qo'shing.\n\n3. 'Student' konstruktorida 'AcademicRecord' ob'yektini qabul qilib maydonga o'zlashtiring.\n\n4. 'Main' metodida avval 'AcademicRecord' komponentini, so'ng uni uzatib 'Student' ob'yektini yarating.\n\n5. Zanjirli getter orqali ma'lumotlarni namunadagidek konsolga chop eting.",
      "en": "📖 Real-World Scenario & Context\nWIUT student dossiers encapsulate academic records. Retrieve the student completed credit count.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Create component class 'AcademicRecord' with fields, constructor, and getters.\n\n2. Create composite class 'Student' embedding 'AcademicRecord' reference.\n\n3. Write 'Student' constructor receiving component reference.\n\n4. In 'main', instantiate component object first, then composite entity.\n\n5. Print results via chained accessors."
    },
    "story": {
      "uz": "WIUT talabasi (Student) o'zining akademik baholar daftarchasiga (AcademicRecord: gpa va creditsCompleted) ega (Student has an AcademicRecord). Talaba orqali uning to'plagan kreditlarini oling.",
      "en": "WIUT student dossiers encapsulate academic records. Retrieve the student completed credit count."
    },
    "steps": {
      "uz": [
        "Birinchi tarkibiy sinf 'AcademicRecord' ni yarating: tegishli maydonlar, konstruktor va getterlar.",
        "Asosiy kompozitsiya sinfi 'Student' ni yarating va unga tarkibiy 'AcademicRecord' maydonini qo'shing.",
        "'Student' konstruktorida 'AcademicRecord' ob'yektini qabul qilib maydonga o'zlashtiring.",
        "'Main' metodida avval 'AcademicRecord' komponentini, so'ng uni uzatib 'Student' ob'yektini yarating.",
        "Zanjirli getter orqali ma'lumotlarni namunadagidek konsolga chop eting."
      ],
      "en": [
        "Create component class 'AcademicRecord' with fields, constructor, and getters.",
        "Create composite class 'Student' embedding 'AcademicRecord' reference.",
        "Write 'Student' constructor receiving component reference.",
        "In 'main', instantiate component object first, then composite entity.",
        "Print results via chained accessors."
      ]
    },
    "requirements": {
      "classes": [
        "AcademicRecord",
        "Student",
        "Main"
      ],
      "privateFields": [
        "gpa",
        "creditsCompleted",
        "studentName",
        "record"
      ],
      "constructors": [
        "AcademicRecord",
        "Student"
      ],
      "methods": [
        "getGpa",
        "getCreditsCompleted",
        "getStudentName",
        "getRecord"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class AcademicRecord {\n    private double gpa;\n    private int creditsCompleted;\n\n    public AcademicRecord(double gpa, int creditsCompleted) {\n        this.gpa = gpa; this.creditsCompleted = creditsCompleted;\n    }\n\n    public double getGpa() {\n        return this.gpa;\n    }\n\n    public int getCreditsCompleted() {\n        return this.creditsCompleted;\n    }\n}\n\nclass Student {\n    // TODO: Tarkibiy AcademicRecord maydonini saqlab, konstruktor va getterni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AcademicRecord rec = new AcademicRecord(3.85, 120);\nStudent st = new Student(\"Malika Karimova\", rec);\nSystem.out.println(\"Talaba: \" + st.getStudentName() + \" | Kreditlar: \" + st.getRecord().getCreditsCompleted());\n    }\n}",
    "solution": "class AcademicRecord {\n    private double gpa;\n    private int creditsCompleted;\n\n    public AcademicRecord(double gpa, int creditsCompleted) {\n        this.gpa = gpa; this.creditsCompleted = creditsCompleted;\n    }\n\n    public double getGpa() {\n        return this.gpa;\n    }\n\n    public int getCreditsCompleted() {\n        return this.creditsCompleted;\n    }\n}\n\nclass Student {\n    private String studentName;\n    private AcademicRecord record;\n\n    public Student(String studentName, AcademicRecord record) {\n        this.studentName = studentName; this.record = record;\n    }\n\n    public String getStudentName() {\n        return this.studentName;\n    }\n\n    public AcademicRecord getRecord() {\n        return this.record;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AcademicRecord rec = new AcademicRecord(3.85, 120);\nStudent st = new Student(\"Malika Karimova\", rec);\nSystem.out.println(\"Talaba: \" + st.getStudentName() + \" | Kreditlar: \" + st.getRecord().getCreditsCompleted());\n    }\n}",
    "sampleData": [
      "Talaba: Malika Karimova | Kreditlar: 120"
    ],
    "expectedOutput": "Talaba: Malika Karimova | Kreditlar: 120",
    "detailedSolution": {
      "theory": "Shaxsiy profil va akademik natijalarni alohida sinflarga ajratish tizim xavfsizligi va qulayligini ta'minlaydi.",
      "theoryEn": "Partitioning student profile and academic metrics into composite classes cleanly mirrors real registrar systems.",
      "cleanCode": "class Student {\n    private String studentName;\n    private AcademicRecord record;\n\n    public Student(String studentName, AcademicRecord record) {\n        this.studentName = studentName; this.record = record;\n    }\n\n    public String getStudentName() {\n        return this.studentName;\n    }\n\n    public AcademicRecord getRecord() {\n        return this.record;\n    }\n}",
      "breakdown": [
        "<code>AcademicRecord inside Student</code>: Kompozitsiya ('Has-A') orqali ikki mustaqil ob'yekt o'zaro bog'langan.",
        "<code>Chained Access</code>: 'obj.getComponent().getProperty()' orqali ichki holat xavfsiz o'qiladi."
      ],
      "pitfalls": "creditsCompleted int, gpa double turida bo'lishi lozim.",
      "cw2Tip": "Talaba va baholar reytingini modellashtirishda kompozitsiyadan foydalaning."
    }
  },
  {
    "id": 150,
    "tier": 10,
    "tierName": "10-Bosqich: Kompozitsiya (Composition — Has-A Munosabati)",
    "sector": "136-150: Obyektlar Kompozitsiyasi",
    "title": {
      "uz": "150. Dodo Pizza — Pitssa Buyurtmasi va Manzil (PizzaOrder & DeliveryAddress)",
      "en": "150. Dodo Pizza — PizzaOrder Has-A DeliveryAddress"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWeek 2 ning yakuniy 150-masalasi: Pitsaxona buyurtmasi (PizzaOrder) yetkazib berish manziliga (DeliveryAddress: street va apartment) ega. Buyurtma orqali xonadon raqamini 'order.getAddress().getApartment()' tarzida oling.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Birinchi tarkibiy sinf 'DeliveryAddress' ni yarating: tegishli maydonlar, konstruktor va getterlar.\n\n2. Asosiy kompozitsiya sinfi 'PizzaOrder' ni yarating va unga tarkibiy 'DeliveryAddress' maydonini qo'shing.\n\n3. 'PizzaOrder' konstruktorida 'DeliveryAddress' ob'yektini qabul qilib maydonga o'zlashtiring.\n\n4. 'Main' metodida avval 'DeliveryAddress' komponentini, so'ng uni uzatib 'PizzaOrder' ob'yektini yarating.\n\n5. Zanjirli getter orqali ma'lumotlarni namunadagidek konsolga chop eting.",
      "en": "📖 Real-World Scenario & Context\nGrand finale challenge 150: Pizza orders encapsulate a delivery address. Query the customer apartment number.\n\n📋 Actionable Implementation Steps (1 to 5)\n1. Create component class 'DeliveryAddress' with fields, constructor, and getters.\n\n2. Create composite class 'PizzaOrder' embedding 'DeliveryAddress' reference.\n\n3. Write 'PizzaOrder' constructor receiving component reference.\n\n4. In 'main', instantiate component object first, then composite entity.\n\n5. Print results via chained accessors."
    },
    "story": {
      "uz": "Week 2 ning yakuniy 150-masalasi: Pitsaxona buyurtmasi (PizzaOrder) yetkazib berish manziliga (DeliveryAddress: street va apartment) ega. Buyurtma orqali xonadon raqamini 'order.getAddress().getApartment()' tarzida oling.",
      "en": "Grand finale challenge 150: Pizza orders encapsulate a delivery address. Query the customer apartment number."
    },
    "steps": {
      "uz": [
        "Birinchi tarkibiy sinf 'DeliveryAddress' ni yarating: tegishli maydonlar, konstruktor va getterlar.",
        "Asosiy kompozitsiya sinfi 'PizzaOrder' ni yarating va unga tarkibiy 'DeliveryAddress' maydonini qo'shing.",
        "'PizzaOrder' konstruktorida 'DeliveryAddress' ob'yektini qabul qilib maydonga o'zlashtiring.",
        "'Main' metodida avval 'DeliveryAddress' komponentini, so'ng uni uzatib 'PizzaOrder' ob'yektini yarating.",
        "Zanjirli getter orqali ma'lumotlarni namunadagidek konsolga chop eting."
      ],
      "en": [
        "Create component class 'DeliveryAddress' with fields, constructor, and getters.",
        "Create composite class 'PizzaOrder' embedding 'DeliveryAddress' reference.",
        "Write 'PizzaOrder' constructor receiving component reference.",
        "In 'main', instantiate component object first, then composite entity.",
        "Print results via chained accessors."
      ]
    },
    "requirements": {
      "classes": [
        "DeliveryAddress",
        "PizzaOrder",
        "Main"
      ],
      "privateFields": [
        "street",
        "apartment",
        "pizzaName",
        "address"
      ],
      "constructors": [
        "DeliveryAddress",
        "PizzaOrder"
      ],
      "methods": [
        "getStreet",
        "getApartment",
        "getPizzaName",
        "getAddress"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class DeliveryAddress {\n    private String street;\n    private int apartment;\n\n    public DeliveryAddress(String street, int apartment) {\n        this.street = street; this.apartment = apartment;\n    }\n\n    public String getStreet() {\n        return this.street;\n    }\n\n    public int getApartment() {\n        return this.apartment;\n    }\n}\n\nclass PizzaOrder {\n    // TODO: Tarkibiy DeliveryAddress maydonini saqlab, konstruktor va getterni yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DeliveryAddress addr = new DeliveryAddress(\"Navoiy ko'chasi\", 45);\nPizzaOrder po = new PizzaOrder(\"Pepperoni Fresh\", addr);\nSystem.out.println(\"Pitsa: \" + po.getPizzaName() + \" | Xonadon: \" + po.getAddress().getApartment());\n    }\n}",
    "solution": "class DeliveryAddress {\n    private String street;\n    private int apartment;\n\n    public DeliveryAddress(String street, int apartment) {\n        this.street = street; this.apartment = apartment;\n    }\n\n    public String getStreet() {\n        return this.street;\n    }\n\n    public int getApartment() {\n        return this.apartment;\n    }\n}\n\nclass PizzaOrder {\n    private String pizzaName;\n    private DeliveryAddress address;\n\n    public PizzaOrder(String pizzaName, DeliveryAddress address) {\n        this.pizzaName = pizzaName; this.address = address;\n    }\n\n    public String getPizzaName() {\n        return this.pizzaName;\n    }\n\n    public DeliveryAddress getAddress() {\n        return this.address;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DeliveryAddress addr = new DeliveryAddress(\"Navoiy ko'chasi\", 45);\nPizzaOrder po = new PizzaOrder(\"Pepperoni Fresh\", addr);\nSystem.out.println(\"Pitsa: \" + po.getPizzaName() + \" | Xonadon: \" + po.getAddress().getApartment());\n    }\n}",
    "sampleData": [
      "Pitsa: Pepperoni Fresh | Xonadon: 45"
    ],
    "expectedOutput": "Pitsa: Pepperoni Fresh | Xonadon: 45",
    "detailedSolution": {
      "theory": "Kompozitsiya Week 2 ning eng yuqori cho'qqisidir. Obyektlar bir-biri bilan 'Has-A' munosabatida erkin birlashib, yirik korporativ tizimlarni barpo etadi.",
      "theoryEn": "Composition crowns Week 2 encapsulation mastery, demonstrating how modular domain components assemble into robust systems.",
      "cleanCode": "class PizzaOrder {\n    private String pizzaName;\n    private DeliveryAddress address;\n\n    public PizzaOrder(String pizzaName, DeliveryAddress address) {\n        this.pizzaName = pizzaName; this.address = address;\n    }\n\n    public String getPizzaName() {\n        return this.pizzaName;\n    }\n\n    public DeliveryAddress getAddress() {\n        return this.address;\n    }\n}",
      "breakdown": [
        "<code>DeliveryAddress inside PizzaOrder</code>: Kompozitsiya ('Has-A') orqali ikki mustaqil ob'yekt o'zaro bog'langan.",
        "<code>Chained Access</code>: 'obj.getComponent().getProperty()' orqali ichki holat xavfsiz o'qiladi."
      ],
      "pitfalls": "apartment int, street String turida bo'lishi va zanjirli getter orqali to'g'ri olinishi kerak.",
      "cw2Tip": "CW2 Console Order Applicationda butun arxitektura bir nechta obyektlarning (Order, Customer, Product, Address) kompozitsiyasidan iborat bo'ladi."
    }
  }
];
