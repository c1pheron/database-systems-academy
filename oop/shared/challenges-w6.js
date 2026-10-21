// WIUT OOP (5COSC018C) — WEEK 6 DATASET (150 PROGRESSIVE CHALLENGES)
// Comprehensive syllabus alignment: Software Architecture, NFRs, Abstraction,
// Abstract Classes, Abstract Methods, Protected Helpers, Interfaces, public static final,
// Java 8 default/static methods, Multiple Interface Implementation, Diamond Problem,
// Polymorphic Collections, Collections Framework (List, Set, Queue, Map), Program to Interface,
// Workshop TW 6 Printing System (IPrintable, File, TextFile, ImageFile), and CW2 Week 6
// Enterprise Milestone (Payable, CashbackEligible, BankCard, BonusBalance, GiftCard, Notification).
// Generated strictly following the 1-5 step format and 100% verified with JavaAnalyzer.
window.OOP_CHALLENGES_W6 = [
  {
    "id": 1,
    "tier": 1,
    "tierName": "1-Bosqich: Dasturiy Ta'minot Arxitekturasi va OOP da Abstraksiya Asoslari",
    "sector": "1-15: Architecture & Abstraction Fundamentals",
    "title": {
      "uz": "1. Uzum Market — Dasturiy Arxitektura va No-Funksional Talablar (NFR)",
      "en": "1. Uzum Market — Software Architecture and Non-Functional Requirements"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT 6-leksiyasiga binoan, dasturiy ta'minot arxitekturasi tizimning unumdorlik (Performance), xavfsizlik (Security) va kengayuvchanlik (Scalability) kabi no-funksional talablarini belgilaydi. Uzum Market tizimi uchun arxitektura konfiguratsiyasini saqlovchi va 'getArchitectureSummary()' orqali hisobot beruvchi klass tuzing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Dasturiy arxitektura modeli uchun 'ArchitectureConfig' sinfini e'lon qiling.\n2. Xususiy (private) maydonlarni bering va konstruktor orqali initsializatsiya qiling.\n3. Ichki murakkab hisob-kitoblarni yashiruvchi 'getArchitectureSummary(...)' ochiq metodini yozing.\n4. 'Main' metodida sinf ob'yektini yarating.\n5. Natijani chop eting: 'ArchitectureConfig cfg = new ArchitectureConfig(\"Uzum Market\", 99.9, 50000);         System.out.println(cfg.getArchitectureSummary());'",
      "en": "📖 Real-World Scenario & Context\nSoftware architecture defines non-functional requirements such as Performance, Security, and Scalability. Implement an architecture configuration manager providing a summary report.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare class 'ArchitectureConfig' modeling software architecture abstraction.\n2. Define private fields and initialize them via constructor.\n3. Implement public method 'getArchitectureSummary(...)' encapsulating complex internals.\n4. Instantiate the class in 'main'.\n5. Print result to console: 'ArchitectureConfig cfg = new ArchitectureConfig(\"Uzum Market\", 99.9, 50000);         System.out.println(cfg.getArchitectureSummary());'"
    },
    "requirements": {
      "classes": [
        "ArchitectureConfig",
        "Main"
      ],
      "methods": [
        "getArchitectureSummary"
      ]
    },
    "starterCode": "// Abstraksiya modelini yarating\nclass ArchitectureConfig {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ArchitectureConfig cfg = new ArchitectureConfig(\"Uzum Market\", 99.9, 50000);\n        System.out.println(cfg.getArchitectureSummary());\n    }\n}",
    "solution": "class ArchitectureConfig {\n    private String systemName;\n    private double uptimePercent;\n    private int maxRps;\n    public ArchitectureConfig(String name, double uptime, int rps) {\n        this.systemName = name;\n        this.uptimePercent = uptime;\n        this.maxRps = rps;\n    }\n    public String getArchitectureSummary() {\n        return \"Tizim: \" + systemName + \" | Ishonchlilik: \" + uptimePercent + \"% | Maksimal yuklama: \" + maxRps + \" RPS\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ArchitectureConfig cfg = new ArchitectureConfig(\"Uzum Market\", 99.9, 50000);\n        System.out.println(cfg.getArchitectureSummary());\n    }\n}",
    "detailedSolution": {
      "theory": "Dasturiy ta'minot arxitekturasi tizimning unumdorlik (Performance), xavfsizlik (Security) va kengayuvchanlik (Scalability) kabi no-funksional talablarini belgilaydi. Abstraksiya — foydalanuvchiga faqat muhim interfeysni ko'rsatib, murakkab ichki mexanizmlarni yashirishdir.",
      "cleanCode": "class ArchitectureConfig {\n    private ...;\n    public ... getArchitectureSummary(...) { ... }\n}",
      "breakdown": [
        "<code>ArchitectureConfig</code>: arxitektura va abstraksiya qatlami.",
        "<code>getArchitectureSummary</code>: tashqi interfeys ochiq metodi."
      ]
    }
  },
  {
    "id": 2,
    "tier": 1,
    "tierName": "1-Bosqich: Dasturiy Ta'minot Arxitekturasi va OOP da Abstraksiya Asoslari",
    "sector": "1-15: Architecture & Abstraction Fundamentals",
    "title": {
      "uz": "2. Payme — Xavfsizlik (Security) Abstraksiyasi va Shifrlash",
      "en": "2. Payme — Security Abstraction and Masking Layer"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nLeksiyada: 'Abstraksiya — foydalanuvchiga faqat muhim ma'lumotni ko'rsatib, ichki murakkab detallarni yashirishdir'. Payme to'lov tizimida karta raqamini xavfsiz niqoblovchi ('8600 **** **** 1234') abstrakt xavfsizlik modelini yozing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Dasturiy arxitektura modeli uchun 'SecurityLayer' sinfini e'lon qiling.\n2. Xususiy (private) maydonlarni bering va konstruktor orqali initsializatsiya qiling.\n3. Ichki murakkab hisob-kitoblarni yashiruvchi 'maskCardNumber(...)' ochiq metodini yozing.\n4. 'Main' metodida sinf ob'yektini yarating.\n5. Natijani chop eting: 'SecurityLayer sec = new SecurityLayer();         System.out.println(\"Niqoblangan karta: \" + sec.maskCardNumber(\"8600123456781234\"));'",
      "en": "📖 Real-World Scenario & Context\nModel security abstraction in Payme by masking card numbers to hide sensitive cryptographic details.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare class 'SecurityLayer' modeling software architecture abstraction.\n2. Define private fields and initialize them via constructor.\n3. Implement public method 'maskCardNumber(...)' encapsulating complex internals.\n4. Instantiate the class in 'main'.\n5. Print result to console: 'SecurityLayer sec = new SecurityLayer();         System.out.println(\"Niqoblangan karta: \" + sec.maskCardNumber(\"8600123456781234\"));'"
    },
    "requirements": {
      "classes": [
        "SecurityLayer",
        "Main"
      ],
      "methods": [
        "maskCardNumber"
      ]
    },
    "starterCode": "// Abstraksiya modelini yarating\nclass SecurityLayer {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SecurityLayer sec = new SecurityLayer();\n        System.out.println(\"Niqoblangan karta: \" + sec.maskCardNumber(\"8600123456781234\"));\n    }\n}",
    "solution": "class SecurityLayer {\n    public String maskCardNumber(String card) {\n        if (card == null || card.length() < 16) return card;\n        return card.substring(0, 4) + \" **** **** \" + card.substring(card.length() - 4);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SecurityLayer sec = new SecurityLayer();\n        System.out.println(\"Niqoblangan karta: \" + sec.maskCardNumber(\"8600123456781234\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Dasturiy ta'minot arxitekturasi tizimning unumdorlik (Performance), xavfsizlik (Security) va kengayuvchanlik (Scalability) kabi no-funksional talablarini belgilaydi. Abstraksiya — foydalanuvchiga faqat muhim interfeysni ko'rsatib, murakkab ichki mexanizmlarni yashirishdir.",
      "cleanCode": "class SecurityLayer {\n    private ...;\n    public ... maskCardNumber(...) { ... }\n}",
      "breakdown": [
        "<code>SecurityLayer</code>: arxitektura va abstraksiya qatlami.",
        "<code>maskCardNumber</code>: tashqi interfeys ochiq metodi."
      ]
    }
  },
  {
    "id": 3,
    "tier": 1,
    "tierName": "1-Bosqich: Dasturiy Ta'minot Arxitekturasi va OOP da Abstraksiya Asoslari",
    "sector": "1-15: Architecture & Abstraction Fundamentals",
    "title": {
      "uz": "3. Korzinka Go — Kengayuvchanlik (Scalability) va Savat Abstraksiyasi",
      "en": "3. Korzinka Go — Scalability and Shopping Cart Abstraction"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nKatta e-commerce tizimlarida savat arxitekturasi millionlab mahsulotlarni qabul qila olishi kerak. Korzinka Go savati uchun umumiy mahsulotlar soni va umumiy narxni hisoblovchi abstrakt shartnomani bajaring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Dasturiy arxitektura modeli uchun 'ScalableCart' sinfini e'lon qiling.\n2. Xususiy (private) maydonlarni bering va konstruktor orqali initsializatsiya qiling.\n3. Ichki murakkab hisob-kitoblarni yashiruvchi 'getCartSummary(...)' ochiq metodini yozing.\n4. 'Main' metodida sinf ob'yektini yarating.\n5. Natijani chop eting: 'ScalableCart cart = new ScalableCart();         cart.addItem(15000.0, 3);         cart.addItem(25000.0, 2);         System.out.println(cart.getCartSummary());'",
      "en": "📖 Real-World Scenario & Context\nBuild a scalable shopping cart abstraction computing total quantity and cost without exposing inner storage arrays.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare class 'ScalableCart' modeling software architecture abstraction.\n2. Define private fields and initialize them via constructor.\n3. Implement public method 'getCartSummary(...)' encapsulating complex internals.\n4. Instantiate the class in 'main'.\n5. Print result to console: 'ScalableCart cart = new ScalableCart();         cart.addItem(15000.0, 3);         cart.addItem(25000.0, 2);         System.out.println(cart.getCartSummary());'"
    },
    "requirements": {
      "classes": [
        "ScalableCart",
        "Main"
      ],
      "methods": [
        "getCartSummary"
      ]
    },
    "starterCode": "// Abstraksiya modelini yarating\nclass ScalableCart {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ScalableCart cart = new ScalableCart();\n        cart.addItem(15000.0, 3);\n        cart.addItem(25000.0, 2);\n        System.out.println(cart.getCartSummary());\n    }\n}",
    "solution": "class ScalableCart {\n    private double totalCost = 0.0;\n    private int totalCount = 0;\n    public void addItem(double price, int qty) {\n        totalCost += price * qty;\n        totalCount += qty;\n    }\n    public String getCartSummary() {\n        return \"Jami mahsulotlar: \" + totalCount + \" dona | Umumiy summa: \" + totalCost + \" UZS\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ScalableCart cart = new ScalableCart();\n        cart.addItem(15000.0, 3);\n        cart.addItem(25000.0, 2);\n        System.out.println(cart.getCartSummary());\n    }\n}",
    "detailedSolution": {
      "theory": "Dasturiy ta'minot arxitekturasi tizimning unumdorlik (Performance), xavfsizlik (Security) va kengayuvchanlik (Scalability) kabi no-funksional talablarini belgilaydi. Abstraksiya — foydalanuvchiga faqat muhim interfeysni ko'rsatib, murakkab ichki mexanizmlarni yashirishdir.",
      "cleanCode": "class ScalableCart {\n    private ...;\n    public ... getCartSummary(...) { ... }\n}",
      "breakdown": [
        "<code>ScalableCart</code>: arxitektura va abstraksiya qatlami.",
        "<code>getCartSummary</code>: tashqi interfeys ochiq metodi."
      ]
    }
  },
  {
    "id": 4,
    "tier": 1,
    "tierName": "1-Bosqich: Dasturiy Ta'minot Arxitekturasi va OOP da Abstraksiya Asoslari",
    "sector": "1-15: Architecture & Abstraction Fundamentals",
    "title": {
      "uz": "4. Yandex Go — Unumdorlik (Performance) va Marshrut Hisoblagich",
      "en": "4. Yandex Go — Performance and Route Estimation Abstraction"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nTizim arxitekturasida Performance — buyurtmani soniya ulushlarida hisoblashdir. GPS marshrut masofasi (km) va tirbandlik koeffitsiyenti asosida safar vaqtini aniqlovchi abstrakt modelni tuzing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Dasturiy arxitektura modeli uchun 'RoutePerformanceService' sinfini e'lon qiling.\n2. Xususiy (private) maydonlarni bering va konstruktor orqali initsializatsiya qiling.\n3. Ichki murakkab hisob-kitoblarni yashiruvchi 'estimateDurationMinutes(...)' ochiq metodini yozing.\n4. 'Main' metodida sinf ob'yektini yarating.\n5. Natijani chop eting: 'RoutePerformanceService rps = new RoutePerformanceService();         System.out.println(\"Kutilayotgan vaqt: \" + rps.estimateDurationMinutes(12.0, 1.5) + \" daqiqa\");'",
      "en": "📖 Real-World Scenario & Context\nModel route estimation abstraction calculating trip duration from distance and traffic factor.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare class 'RoutePerformanceService' modeling software architecture abstraction.\n2. Define private fields and initialize them via constructor.\n3. Implement public method 'estimateDurationMinutes(...)' encapsulating complex internals.\n4. Instantiate the class in 'main'.\n5. Print result to console: 'RoutePerformanceService rps = new RoutePerformanceService();         System.out.println(\"Kutilayotgan vaqt: \" + rps.estimateDurationMinutes(12.0, 1.5) + \" daqiqa\");'"
    },
    "requirements": {
      "classes": [
        "RoutePerformanceService",
        "Main"
      ],
      "methods": [
        "estimateDurationMinutes"
      ]
    },
    "starterCode": "// Abstraksiya modelini yarating\nclass RoutePerformanceService {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        RoutePerformanceService rps = new RoutePerformanceService();\n        System.out.println(\"Kutilayotgan vaqt: \" + rps.estimateDurationMinutes(12.0, 1.5) + \" daqiqa\");\n    }\n}",
    "solution": "class RoutePerformanceService {\n    public int estimateDurationMinutes(double distanceKm, double trafficFactor) {\n        return (int) Math.round((distanceKm / 30.0 * 60.0) * trafficFactor);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        RoutePerformanceService rps = new RoutePerformanceService();\n        System.out.println(\"Kutilayotgan vaqt: \" + rps.estimateDurationMinutes(12.0, 1.5) + \" daqiqa\");\n    }\n}",
    "detailedSolution": {
      "theory": "Dasturiy ta'minot arxitekturasi tizimning unumdorlik (Performance), xavfsizlik (Security) va kengayuvchanlik (Scalability) kabi no-funksional talablarini belgilaydi. Abstraksiya — foydalanuvchiga faqat muhim interfeysni ko'rsatib, murakkab ichki mexanizmlarni yashirishdir.",
      "cleanCode": "class RoutePerformanceService {\n    private ...;\n    public ... estimateDurationMinutes(...) { ... }\n}",
      "breakdown": [
        "<code>RoutePerformanceService</code>: arxitektura va abstraksiya qatlami.",
        "<code>estimateDurationMinutes</code>: tashqi interfeys ochiq metodi."
      ]
    }
  },
  {
    "id": 5,
    "tier": 1,
    "tierName": "1-Bosqich: Dasturiy Ta'minot Arxitekturasi va OOP da Abstraksiya Asoslari",
    "sector": "1-15: Architecture & Abstraction Fundamentals",
    "title": {
      "uz": "5. Click — O'zgartirish Qulayligi (Modifiability) va To'lov Shlyuzi",
      "en": "5. Click — Modifiability and Payment Gateway Abstraction"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nModifiability talabi: yangi to'lov provayderi qo'shilganda asosiy kod o'zgarmasligi kerak. Click uchun komissiya foizini hisoblovchi moslashuvchan shlyuz klassini yozing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Dasturiy arxitektura modeli uchun 'GatewayDispatcher' sinfini e'lon qiling.\n2. Xususiy (private) maydonlarni bering va konstruktor orqali initsializatsiya qiling.\n3. Ichki murakkab hisob-kitoblarni yashiruvchi 'calculateFee(...)' ochiq metodini yozing.\n4. 'Main' metodida sinf ob'yektini yarating.\n5. Natijani chop eting: 'GatewayDispatcher gd = new GatewayDispatcher(0.015);         System.out.println(\"Komissiya: \" + gd.calculateFee(200000.0) + \" UZS\");'",
      "en": "📖 Real-World Scenario & Context\nDesign a modifiable payment gateway model computing commission without tight coupling.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare class 'GatewayDispatcher' modeling software architecture abstraction.\n2. Define private fields and initialize them via constructor.\n3. Implement public method 'calculateFee(...)' encapsulating complex internals.\n4. Instantiate the class in 'main'.\n5. Print result to console: 'GatewayDispatcher gd = new GatewayDispatcher(0.015);         System.out.println(\"Komissiya: \" + gd.calculateFee(200000.0) + \" UZS\");'"
    },
    "requirements": {
      "classes": [
        "GatewayDispatcher",
        "Main"
      ],
      "methods": [
        "calculateFee"
      ]
    },
    "starterCode": "// Abstraksiya modelini yarating\nclass GatewayDispatcher {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GatewayDispatcher gd = new GatewayDispatcher(0.015);\n        System.out.println(\"Komissiya: \" + gd.calculateFee(200000.0) + \" UZS\");\n    }\n}",
    "solution": "class GatewayDispatcher {\n    private double feePercent;\n    public GatewayDispatcher(double fee) { this.feePercent = fee; }\n    public double calculateFee(double amount) { return amount * feePercent; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GatewayDispatcher gd = new GatewayDispatcher(0.015);\n        System.out.println(\"Komissiya: \" + gd.calculateFee(200000.0) + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "Dasturiy ta'minot arxitekturasi tizimning unumdorlik (Performance), xavfsizlik (Security) va kengayuvchanlik (Scalability) kabi no-funksional talablarini belgilaydi. Abstraksiya — foydalanuvchiga faqat muhim interfeysni ko'rsatib, murakkab ichki mexanizmlarni yashirishdir.",
      "cleanCode": "class GatewayDispatcher {\n    private ...;\n    public ... calculateFee(...) { ... }\n}",
      "breakdown": [
        "<code>GatewayDispatcher</code>: arxitektura va abstraksiya qatlami.",
        "<code>calculateFee</code>: tashqi interfeys ochiq metodi."
      ]
    }
  },
  {
    "id": 6,
    "tier": 1,
    "tierName": "1-Bosqich: Dasturiy Ta'minot Arxitekturasi va OOP da Abstraksiya Asoslari",
    "sector": "1-15: Architecture & Abstraction Fundamentals",
    "title": {
      "uz": "6. Safia — Axborotni Yashirish (Information Hiding) va Shirinlik Retsepti",
      "en": "6. Safia — Information Hiding in Bakery Recipe Abstraction"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSafia qandolatchiligida pishiriqning maxfiy retsept formulasi inkapsulyatsiya qilinadi, faqat umumiy kaloriyani hisoblovchi tashqi interfeys ochiq qoladi. Axborotni yashirish tamoyilini dasturlang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Dasturiy arxitektura modeli uchun 'BakeryRecipe' sinfini e'lon qiling.\n2. Xususiy (private) maydonlarni bering va konstruktor orqali initsializatsiya qiling.\n3. Ichki murakkab hisob-kitoblarni yashiruvchi 'calculateCalories(...)' ochiq metodini yozing.\n4. 'Main' metodida sinf ob'yektini yarating.\n5. Natijani chop eting: 'BakeryRecipe cake = new BakeryRecipe(250, 180, 50);         System.out.println(\"Umumiy kaloriya: \" + cake.calculateCalories() + \" kkal\");'",
      "en": "📖 Real-World Scenario & Context\nImplement information hiding by keeping recipe ingredients encapsulated and exposing only public calorie calculation.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare class 'BakeryRecipe' modeling software architecture abstraction.\n2. Define private fields and initialize them via constructor.\n3. Implement public method 'calculateCalories(...)' encapsulating complex internals.\n4. Instantiate the class in 'main'.\n5. Print result to console: 'BakeryRecipe cake = new BakeryRecipe(250, 180, 50);         System.out.println(\"Umumiy kaloriya: \" + cake.calculateCalories() + \" kkal\");'"
    },
    "requirements": {
      "classes": [
        "BakeryRecipe",
        "Main"
      ],
      "methods": [
        "calculateCalories"
      ]
    },
    "starterCode": "// Abstraksiya modelini yarating\nclass BakeryRecipe {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BakeryRecipe cake = new BakeryRecipe(250, 180, 50);\n        System.out.println(\"Umumiy kaloriya: \" + cake.calculateCalories() + \" kkal\");\n    }\n}",
    "solution": "class BakeryRecipe {\n    private int flourGram;\n    private int sugarGram;\n    private int butterGram;\n    public BakeryRecipe(int flour, int sugar, int butter) {\n        this.flourGram = flour;\n        this.sugarGram = sugar;\n        this.butterGram = butter;\n    }\n    public int calculateCalories() {\n        return (flourGram * 4) + (sugarGram * 4) + (butterGram * 9);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BakeryRecipe cake = new BakeryRecipe(250, 180, 50);\n        System.out.println(\"Umumiy kaloriya: \" + cake.calculateCalories() + \" kkal\");\n    }\n}",
    "detailedSolution": {
      "theory": "Dasturiy ta'minot arxitekturasi tizimning unumdorlik (Performance), xavfsizlik (Security) va kengayuvchanlik (Scalability) kabi no-funksional talablarini belgilaydi. Abstraksiya — foydalanuvchiga faqat muhim interfeysni ko'rsatib, murakkab ichki mexanizmlarni yashirishdir.",
      "cleanCode": "class BakeryRecipe {\n    private ...;\n    public ... calculateCalories(...) { ... }\n}",
      "breakdown": [
        "<code>BakeryRecipe</code>: arxitektura va abstraksiya qatlami.",
        "<code>calculateCalories</code>: tashqi interfeys ochiq metodi."
      ]
    }
  },
  {
    "id": 7,
    "tier": 1,
    "tierName": "1-Bosqich: Dasturiy Ta'minot Arxitekturasi va OOP da Abstraksiya Asoslari",
    "sector": "1-15: Architecture & Abstraction Fundamentals",
    "title": {
      "uz": "7. Dodo Pizza — Buyurtma Holati Abstraksiyasi (State Tracking)",
      "en": "7. Dodo Pizza — Order State Tracking Abstraction"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nMijozga oshxonadagi yuzlab detallar ko'rsatilmaydi, faqat 'Qabul qilindi', 'Pishirilmoqda', 'Yetkazilmoqda' kabi yuqori darajali abstraksiyalar beriladi. Holat monitoringini amalga oshiring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Dasturiy arxitektura modeli uchun 'OrderStateTracker' sinfini e'lon qiling.\n2. Xususiy (private) maydonlarni bering va konstruktor orqali initsializatsiya qiling.\n3. Ichki murakkab hisob-kitoblarni yashiruvchi 'getStatusDescription(...)' ochiq metodini yozing.\n4. 'Main' metodida sinf ob'yektini yarating.\n5. Natijani chop eting: 'OrderStateTracker tracker = new OrderStateTracker(\"ORD-771\");         tracker.advanceToKitchen();         System.out.println(tracker.getStatusDescription());'",
      "en": "📖 Real-World Scenario & Context\nTrack high-level order state transitions hiding low-level kitchen workflows.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare class 'OrderStateTracker' modeling software architecture abstraction.\n2. Define private fields and initialize them via constructor.\n3. Implement public method 'getStatusDescription(...)' encapsulating complex internals.\n4. Instantiate the class in 'main'.\n5. Print result to console: 'OrderStateTracker tracker = new OrderStateTracker(\"ORD-771\");         tracker.advanceToKitchen();         System.out.println(tracker.getStatusDescription());'"
    },
    "requirements": {
      "classes": [
        "OrderStateTracker",
        "Main"
      ],
      "methods": [
        "getStatusDescription"
      ]
    },
    "starterCode": "// Abstraksiya modelini yarating\nclass OrderStateTracker {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        OrderStateTracker tracker = new OrderStateTracker(\"ORD-771\");\n        tracker.advanceToKitchen();\n        System.out.println(tracker.getStatusDescription());\n    }\n}",
    "solution": "class OrderStateTracker {\n    private String orderId;\n    private String state = \"Qabul qilindi\";\n    public OrderStateTracker(String id) { this.orderId = id; }\n    public void advanceToKitchen() { this.state = \"Oshxonada pishirilmoqda\"; }\n    public String getStatusDescription() { return \"Buyurtma \" + orderId + \": \" + state; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        OrderStateTracker tracker = new OrderStateTracker(\"ORD-771\");\n        tracker.advanceToKitchen();\n        System.out.println(tracker.getStatusDescription());\n    }\n}",
    "detailedSolution": {
      "theory": "Dasturiy ta'minot arxitekturasi tizimning unumdorlik (Performance), xavfsizlik (Security) va kengayuvchanlik (Scalability) kabi no-funksional talablarini belgilaydi. Abstraksiya — foydalanuvchiga faqat muhim interfeysni ko'rsatib, murakkab ichki mexanizmlarni yashirishdir.",
      "cleanCode": "class OrderStateTracker {\n    private ...;\n    public ... getStatusDescription(...) { ... }\n}",
      "breakdown": [
        "<code>OrderStateTracker</code>: arxitektura va abstraksiya qatlami.",
        "<code>getStatusDescription</code>: tashqi interfeys ochiq metodi."
      ]
    }
  },
  {
    "id": 8,
    "tier": 1,
    "tierName": "1-Bosqich: Dasturiy Ta'minot Arxitekturasi va OOP da Abstraksiya Asoslari",
    "sector": "1-15: Architecture & Abstraction Fundamentals",
    "title": {
      "uz": "8. Texnomart — Narxlash Abstraksiyasi va QQS Hisobi",
      "en": "8. Texnomart — Pricing and VAT Abstraction"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nTexnomart do'konida xaridor yakuniy narxni ko'radi, ichki soliq va bojxona koeffitsiyentlari esa abstraksiya qatlamida avtomatik hisoblanadi. 12% QQS bilan narxlovchi klassni yozing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Dasturiy arxitektura modeli uchun 'PriceCalculator' sinfini e'lon qiling.\n2. Xususiy (private) maydonlarni bering va konstruktor orqali initsializatsiya qiling.\n3. Ichki murakkab hisob-kitoblarni yashiruvchi 'getFinalPrice(...)' ochiq metodini yozing.\n4. 'Main' metodida sinf ob'yektini yarating.\n5. Natijani chop eting: 'PriceCalculator calc = new PriceCalculator(4000000.0);         System.out.println(\"Yakuniy narx: \" + calc.getFinalPrice() + \" UZS\");'",
      "en": "📖 Real-World Scenario & Context\nEncapsulate VAT calculation details behind a clean pricing abstraction method.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare class 'PriceCalculator' modeling software architecture abstraction.\n2. Define private fields and initialize them via constructor.\n3. Implement public method 'getFinalPrice(...)' encapsulating complex internals.\n4. Instantiate the class in 'main'.\n5. Print result to console: 'PriceCalculator calc = new PriceCalculator(4000000.0);         System.out.println(\"Yakuniy narx: \" + calc.getFinalPrice() + \" UZS\");'"
    },
    "requirements": {
      "classes": [
        "PriceCalculator",
        "Main"
      ],
      "methods": [
        "getFinalPrice"
      ]
    },
    "starterCode": "// Abstraksiya modelini yarating\nclass PriceCalculator {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PriceCalculator calc = new PriceCalculator(4000000.0);\n        System.out.println(\"Yakuniy narx: \" + calc.getFinalPrice() + \" UZS\");\n    }\n}",
    "solution": "class PriceCalculator {\n    private double basePrice;\n    public PriceCalculator(double base) { this.basePrice = base; }\n    public double getFinalPrice() { return Math.round(basePrice * 1.12 * 100.0) / 100.0; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PriceCalculator calc = new PriceCalculator(4000000.0);\n        System.out.println(\"Yakuniy narx: \" + calc.getFinalPrice() + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "Dasturiy ta'minot arxitekturasi tizimning unumdorlik (Performance), xavfsizlik (Security) va kengayuvchanlik (Scalability) kabi no-funksional talablarini belgilaydi. Abstraksiya — foydalanuvchiga faqat muhim interfeysni ko'rsatib, murakkab ichki mexanizmlarni yashirishdir.",
      "cleanCode": "class PriceCalculator {\n    private ...;\n    public ... getFinalPrice(...) { ... }\n}",
      "breakdown": [
        "<code>PriceCalculator</code>: arxitektura va abstraksiya qatlami.",
        "<code>getFinalPrice</code>: tashqi interfeys ochiq metodi."
      ]
    }
  },
  {
    "id": 9,
    "tier": 1,
    "tierName": "1-Bosqich: Dasturiy Ta'minot Arxitekturasi va OOP da Abstraksiya Asoslari",
    "sector": "1-15: Architecture & Abstraction Fundamentals",
    "title": {
      "uz": "9. Medion — Tibbiy Ko'rik Holati Abstraksiyasi",
      "en": "9. Medion — Medical Checkup Record Abstraction"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nMedion klinikasida bemorning shaxsiy kasallik varaqasi yashirin bo'lib, tashqi tizimlarga faqat 'tahlil tayyor/kutilmoqda' shaklidagi abstrakt xulosa beriladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Dasturiy arxitektura modeli uchun 'MedicalCheckup' sinfini e'lon qiling.\n2. Xususiy (private) maydonlarni bering va konstruktor orqali initsializatsiya qiling.\n3. Ichki murakkab hisob-kitoblarni yashiruvchi 'getSummary(...)' ochiq metodini yozing.\n4. 'Main' metodida sinf ob'yektini yarating.\n5. Natijani chop eting: 'MedicalCheckup check = new MedicalCheckup(\"Aliyev B.\", true);         System.out.println(check.getSummary());'",
      "en": "📖 Real-World Scenario & Context\nExpose clean test status while encapsulating raw clinical test markers.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare class 'MedicalCheckup' modeling software architecture abstraction.\n2. Define private fields and initialize them via constructor.\n3. Implement public method 'getSummary(...)' encapsulating complex internals.\n4. Instantiate the class in 'main'.\n5. Print result to console: 'MedicalCheckup check = new MedicalCheckup(\"Aliyev B.\", true);         System.out.println(check.getSummary());'"
    },
    "requirements": {
      "classes": [
        "MedicalCheckup",
        "Main"
      ],
      "methods": [
        "getSummary"
      ]
    },
    "starterCode": "// Abstraksiya modelini yarating\nclass MedicalCheckup {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MedicalCheckup check = new MedicalCheckup(\"Aliyev B.\", true);\n        System.out.println(check.getSummary());\n    }\n}",
    "solution": "class MedicalCheckup {\n    private String patientName;\n    private boolean isReady;\n    public MedicalCheckup(String name, boolean ready) {\n        this.patientName = name;\n        this.isReady = ready;\n    }\n    public String getSummary() {\n        return \"Bemor: \" + patientName + \" | Tahlil natijasi: \" + (isReady ? \"Tayyor\" : \"Kutilmoqda\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MedicalCheckup check = new MedicalCheckup(\"Aliyev B.\", true);\n        System.out.println(check.getSummary());\n    }\n}",
    "detailedSolution": {
      "theory": "Dasturiy ta'minot arxitekturasi tizimning unumdorlik (Performance), xavfsizlik (Security) va kengayuvchanlik (Scalability) kabi no-funksional talablarini belgilaydi. Abstraksiya — foydalanuvchiga faqat muhim interfeysni ko'rsatib, murakkab ichki mexanizmlarni yashirishdir.",
      "cleanCode": "class MedicalCheckup {\n    private ...;\n    public ... getSummary(...) { ... }\n}",
      "breakdown": [
        "<code>MedicalCheckup</code>: arxitektura va abstraksiya qatlami.",
        "<code>getSummary</code>: tashqi interfeys ochiq metodi."
      ]
    }
  },
  {
    "id": 10,
    "tier": 1,
    "tierName": "1-Bosqich: Dasturiy Ta'minot Arxitekturasi va OOP da Abstraksiya Asoslari",
    "sector": "1-15: Architecture & Abstraction Fundamentals",
    "title": {
      "uz": "10. Express24 — Kuryer Taqsimoti Abstraksiyasi",
      "en": "10. Express24 — Courier Dispatch Allocation Abstraction"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nExpress24 da buyurtma qaysi kuryerga tushishi murakkab algoritm bilan hal qilinadi, lekin tashqi tizim uchun oddiygina 'assignCourier()' chaqiruvi yetarlidir. Ushbu abstraksiyani yarating.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Dasturiy arxitektura modeli uchun 'CourierDispatch' sinfini e'lon qiling.\n2. Xususiy (private) maydonlarni bering va konstruktor orqali initsializatsiya qiling.\n3. Ichki murakkab hisob-kitoblarni yashiruvchi 'getAssignmentReport(...)' ochiq metodini yozing.\n4. 'Main' metodida sinf ob'yektini yarating.\n5. Natijani chop eting: 'CourierDispatch cd = new CourierDispatch(\"EXP-909\");         cd.assignCourier(\"Sardor\");         System.out.println(cd.getAssignmentReport());'",
      "en": "📖 Real-World Scenario & Context\nSimulate courier dispatch abstraction hiding routing internals from the ordering API.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare class 'CourierDispatch' modeling software architecture abstraction.\n2. Define private fields and initialize them via constructor.\n3. Implement public method 'getAssignmentReport(...)' encapsulating complex internals.\n4. Instantiate the class in 'main'.\n5. Print result to console: 'CourierDispatch cd = new CourierDispatch(\"EXP-909\");         cd.assignCourier(\"Sardor\");         System.out.println(cd.getAssignmentReport());'"
    },
    "requirements": {
      "classes": [
        "CourierDispatch",
        "Main"
      ],
      "methods": [
        "getAssignmentReport"
      ]
    },
    "starterCode": "// Abstraksiya modelini yarating\nclass CourierDispatch {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CourierDispatch cd = new CourierDispatch(\"EXP-909\");\n        cd.assignCourier(\"Sardor\");\n        System.out.println(cd.getAssignmentReport());\n    }\n}",
    "solution": "class CourierDispatch {\n    private String trackingCode;\n    private String courierName = \"Biriktirilmagan\";\n    public CourierDispatch(String code) { this.trackingCode = code; }\n    public void assignCourier(String name) { this.courierName = name; }\n    public String getAssignmentReport() {\n        return \"Yetkazish \" + trackingCode + \": \" + courierName + \" biriktirildi\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CourierDispatch cd = new CourierDispatch(\"EXP-909\");\n        cd.assignCourier(\"Sardor\");\n        System.out.println(cd.getAssignmentReport());\n    }\n}",
    "detailedSolution": {
      "theory": "Dasturiy ta'minot arxitekturasi tizimning unumdorlik (Performance), xavfsizlik (Security) va kengayuvchanlik (Scalability) kabi no-funksional talablarini belgilaydi. Abstraksiya — foydalanuvchiga faqat muhim interfeysni ko'rsatib, murakkab ichki mexanizmlarni yashirishdir.",
      "cleanCode": "class CourierDispatch {\n    private ...;\n    public ... getAssignmentReport(...) { ... }\n}",
      "breakdown": [
        "<code>CourierDispatch</code>: arxitektura va abstraksiya qatlami.",
        "<code>getAssignmentReport</code>: tashqi interfeys ochiq metodi."
      ]
    }
  },
  {
    "id": 11,
    "tier": 1,
    "tierName": "1-Bosqich: Dasturiy Ta'minot Arxitekturasi va OOP da Abstraksiya Asoslari",
    "sector": "1-15: Architecture & Abstraction Fundamentals",
    "title": {
      "uz": "11. Asaxiy — Kitob Formatlari Abstraksiyasi",
      "en": "11. Asaxiy — Book Format Abstraction"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nAsaxiy kutubxonasida qog'oz, elektron yoki audio kitob bo'lishidan qat'i nazar, xaridor uchun 'Kitob' abstraksiyasi uning sarlavhasi va asosiy narxini ifodalaydi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Dasturiy arxitektura modeli uchun 'CatalogBook' sinfini e'lon qiling.\n2. Xususiy (private) maydonlarni bering va konstruktor orqali initsializatsiya qiling.\n3. Ichki murakkab hisob-kitoblarni yashiruvchi 'getBookInfo(...)' ochiq metodini yozing.\n4. 'Main' metodida sinf ob'yektini yarating.\n5. Natijani chop eting: 'CatalogBook b = new CatalogBook(\"O'tkan Kunlar\", \"Abdulla Qodiriy\", 65000.0);         System.out.println(b.getBookInfo());'",
      "en": "📖 Real-World Scenario & Context\nModel book catalog abstraction providing essential metadata regardless of physical format.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare class 'CatalogBook' modeling software architecture abstraction.\n2. Define private fields and initialize them via constructor.\n3. Implement public method 'getBookInfo(...)' encapsulating complex internals.\n4. Instantiate the class in 'main'.\n5. Print result to console: 'CatalogBook b = new CatalogBook(\"O'tkan Kunlar\", \"Abdulla Qodiriy\", 65000.0);         System.out.println(b.getBookInfo());'"
    },
    "requirements": {
      "classes": [
        "CatalogBook",
        "Main"
      ],
      "methods": [
        "getBookInfo"
      ]
    },
    "starterCode": "// Abstraksiya modelini yarating\nclass CatalogBook {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CatalogBook b = new CatalogBook(\"O'tkan Kunlar\", \"Abdulla Qodiriy\", 65000.0);\n        System.out.println(b.getBookInfo());\n    }\n}",
    "solution": "class CatalogBook {\n    private String title;\n    private String author;\n    private double price;\n    public CatalogBook(String t, String a, double p) {\n        this.title = t; this.author = a; this.price = p;\n    }\n    public String getBookInfo() {\n        return \"Kitob: \" + title + \" | Muallif: \" + author + \" | Narx: \" + price + \" UZS\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CatalogBook b = new CatalogBook(\"O'tkan Kunlar\", \"Abdulla Qodiriy\", 65000.0);\n        System.out.println(b.getBookInfo());\n    }\n}",
    "detailedSolution": {
      "theory": "Dasturiy ta'minot arxitekturasi tizimning unumdorlik (Performance), xavfsizlik (Security) va kengayuvchanlik (Scalability) kabi no-funksional talablarini belgilaydi. Abstraksiya — foydalanuvchiga faqat muhim interfeysni ko'rsatib, murakkab ichki mexanizmlarni yashirishdir.",
      "cleanCode": "class CatalogBook {\n    private ...;\n    public ... getBookInfo(...) { ... }\n}",
      "breakdown": [
        "<code>CatalogBook</code>: arxitektura va abstraksiya qatlami.",
        "<code>getBookInfo</code>: tashqi interfeys ochiq metodi."
      ]
    }
  },
  {
    "id": 12,
    "tier": 1,
    "tierName": "1-Bosqich: Dasturiy Ta'minot Arxitekturasi va OOP da Abstraksiya Asoslari",
    "sector": "1-15: Architecture & Abstraction Fundamentals",
    "title": {
      "uz": "12. Kapitalbank — Hisob Balansi va Tranzaksiya Limitlari",
      "en": "12. Kapitalbank — Account Balance and Limit Abstraction"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nBank tizimlarida hisob balansi to'g'ridan-to'g'ri o'zgartirilmaydi, barcha harakatlar abstrakt depozit va yechish operatsiyalari orqali xavfsiz amalga oshiriladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Dasturiy arxitektura modeli uchun 'SecureAccount' sinfini e'lon qiling.\n2. Xususiy (private) maydonlarni bering va konstruktor orqali initsializatsiya qiling.\n3. Ichki murakkab hisob-kitoblarni yashiruvchi 'getBalanceInfo(...)' ochiq metodini yozing.\n4. 'Main' metodida sinf ob'yektini yarating.\n5. Natijani chop eting: 'SecureAccount acc = new SecureAccount(\"ACC-101\", 500000.0);         acc.deposit(150000.0);         System.out.println(acc.getBalanceInfo());'",
      "en": "📖 Real-World Scenario & Context\nEncapsulate bank balance modifications behind deposit and withdrawal business rules.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare class 'SecureAccount' modeling software architecture abstraction.\n2. Define private fields and initialize them via constructor.\n3. Implement public method 'getBalanceInfo(...)' encapsulating complex internals.\n4. Instantiate the class in 'main'.\n5. Print result to console: 'SecureAccount acc = new SecureAccount(\"ACC-101\", 500000.0);         acc.deposit(150000.0);         System.out.println(acc.getBalanceInfo());'"
    },
    "requirements": {
      "classes": [
        "SecureAccount",
        "Main"
      ],
      "methods": [
        "getBalanceInfo"
      ]
    },
    "starterCode": "// Abstraksiya modelini yarating\nclass SecureAccount {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SecureAccount acc = new SecureAccount(\"ACC-101\", 500000.0);\n        acc.deposit(150000.0);\n        System.out.println(acc.getBalanceInfo());\n    }\n}",
    "solution": "class SecureAccount {\n    private String accountId;\n    private double balance;\n    public SecureAccount(String id, double initial) {\n        this.accountId = id; this.balance = initial;\n    }\n    public void deposit(double amount) { if (amount > 0) balance += amount; }\n    public String getBalanceInfo() {\n        return \"Hisob: \" + accountId + \" | Joriy balans: \" + balance + \" UZS\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SecureAccount acc = new SecureAccount(\"ACC-101\", 500000.0);\n        acc.deposit(150000.0);\n        System.out.println(acc.getBalanceInfo());\n    }\n}",
    "detailedSolution": {
      "theory": "Dasturiy ta'minot arxitekturasi tizimning unumdorlik (Performance), xavfsizlik (Security) va kengayuvchanlik (Scalability) kabi no-funksional talablarini belgilaydi. Abstraksiya — foydalanuvchiga faqat muhim interfeysni ko'rsatib, murakkab ichki mexanizmlarni yashirishdir.",
      "cleanCode": "class SecureAccount {\n    private ...;\n    public ... getBalanceInfo(...) { ... }\n}",
      "breakdown": [
        "<code>SecureAccount</code>: arxitektura va abstraksiya qatlami.",
        "<code>getBalanceInfo</code>: tashqi interfeys ochiq metodi."
      ]
    }
  },
  {
    "id": 13,
    "tier": 1,
    "tierName": "1-Bosqich: Dasturiy Ta'minot Arxitekturasi va OOP da Abstraksiya Asoslari",
    "sector": "1-15: Architecture & Abstraction Fundamentals",
    "title": {
      "uz": "13. Beeline — Tarif Rejasi Oylik To'lovi Abstraksiyasi",
      "en": "13. Beeline — Tariff Plan Monthly Fee Abstraction"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nUyali aloqa operatorida tarif minutlari, megabaytlari va SMSlari alohida bo'lsa-da, hisob-kitob moduli uchun tarifning oylik abonent to'lovi umumiy abstraksiya sifatida xizmat qiladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Dasturiy arxitektura modeli uchun 'MobileTariff' sinfini e'lon qiling.\n2. Xususiy (private) maydonlarni bering va konstruktor orqali initsializatsiya qiling.\n3. Ichki murakkab hisob-kitoblarni yashiruvchi 'getTariffDetails(...)' ochiq metodini yozing.\n4. 'Main' metodida sinf ob'yektini yarating.\n5. Natijani chop eting: 'MobileTariff t = new MobileTariff(\"Yorqin 50\", 50000.0, 30);         System.out.println(t.getTariffDetails());'",
      "en": "📖 Real-World Scenario & Context\nModel mobile tariff plan fee abstraction summarizing plan tier and monthly charge.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare class 'MobileTariff' modeling software architecture abstraction.\n2. Define private fields and initialize them via constructor.\n3. Implement public method 'getTariffDetails(...)' encapsulating complex internals.\n4. Instantiate the class in 'main'.\n5. Print result to console: 'MobileTariff t = new MobileTariff(\"Yorqin 50\", 50000.0, 30);         System.out.println(t.getTariffDetails());'"
    },
    "requirements": {
      "classes": [
        "MobileTariff",
        "Main"
      ],
      "methods": [
        "getTariffDetails"
      ]
    },
    "starterCode": "// Abstraksiya modelini yarating\nclass MobileTariff {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MobileTariff t = new MobileTariff(\"Yorqin 50\", 50000.0, 30);\n        System.out.println(t.getTariffDetails());\n    }\n}",
    "solution": "class MobileTariff {\n    private String planName;\n    private double monthlyFee;\n    private int dataGb;\n    public MobileTariff(String name, double fee, int gb) {\n        this.planName = name; this.monthlyFee = fee; this.dataGb = gb;\n    }\n    public String getTariffDetails() {\n        return \"Tarif: \" + planName + \" | Oylik to'lov: \" + monthlyFee + \" UZS | Trafik: \" + dataGb + \" GB\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MobileTariff t = new MobileTariff(\"Yorqin 50\", 50000.0, 30);\n        System.out.println(t.getTariffDetails());\n    }\n}",
    "detailedSolution": {
      "theory": "Dasturiy ta'minot arxitekturasi tizimning unumdorlik (Performance), xavfsizlik (Security) va kengayuvchanlik (Scalability) kabi no-funksional talablarini belgilaydi. Abstraksiya — foydalanuvchiga faqat muhim interfeysni ko'rsatib, murakkab ichki mexanizmlarni yashirishdir.",
      "cleanCode": "class MobileTariff {\n    private ...;\n    public ... getTariffDetails(...) { ... }\n}",
      "breakdown": [
        "<code>MobileTariff</code>: arxitektura va abstraksiya qatlami.",
        "<code>getTariffDetails</code>: tashqi interfeys ochiq metodi."
      ]
    }
  },
  {
    "id": 14,
    "tier": 1,
    "tierName": "1-Bosqich: Dasturiy Ta'minot Arxitekturasi va OOP da Abstraksiya Asoslari",
    "sector": "1-15: Architecture & Abstraction Fundamentals",
    "title": {
      "uz": "14. UzAirways — Parvoz Reysi va Joy Band Qilish Abstraksiyasi",
      "en": "14. UzAirways — Flight Booking Seat Allocation Abstraction"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nUzAirways samolyotidagi yuzlab o'rindiqlarni boshqarish uchun reys raqami va bo'sh o'rinlar sonini ifodalovchi yuqori darajadagi abstrakt modelni yozing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Dasturiy arxitektura modeli uchun 'FlightBooking' sinfini e'lon qiling.\n2. Xususiy (private) maydonlarni bering va konstruktor orqali initsializatsiya qiling.\n3. Ichki murakkab hisob-kitoblarni yashiruvchi 'getBookingStatus(...)' ochiq metodini yozing.\n4. 'Main' metodida sinf ob'yektini yarating.\n5. Natijani chop eting: 'FlightBooking fb = new FlightBooking(\"HY-101\", 180);         fb.bookSeats(3);         System.out.println(fb.getBookingStatus());'",
      "en": "📖 Real-World Scenario & Context\nProvide flight seat booking abstraction tracking available seats and flight status.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare class 'FlightBooking' modeling software architecture abstraction.\n2. Define private fields and initialize them via constructor.\n3. Implement public method 'getBookingStatus(...)' encapsulating complex internals.\n4. Instantiate the class in 'main'.\n5. Print result to console: 'FlightBooking fb = new FlightBooking(\"HY-101\", 180);         fb.bookSeats(3);         System.out.println(fb.getBookingStatus());'"
    },
    "requirements": {
      "classes": [
        "FlightBooking",
        "Main"
      ],
      "methods": [
        "getBookingStatus"
      ]
    },
    "starterCode": "// Abstraksiya modelini yarating\nclass FlightBooking {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FlightBooking fb = new FlightBooking(\"HY-101\", 180);\n        fb.bookSeats(3);\n        System.out.println(fb.getBookingStatus());\n    }\n}",
    "solution": "class FlightBooking {\n    private String flightCode;\n    private int seatsLeft;\n    public FlightBooking(String code, int capacity) {\n        this.flightCode = code; this.seatsLeft = capacity;\n    }\n    public void bookSeats(int count) { if (count <= seatsLeft) seatsLeft -= count; }\n    public String getBookingStatus() {\n        return \"Reys: \" + flightCode + \" | Qolgan bo'sh o'rinlar: \" + seatsLeft;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FlightBooking fb = new FlightBooking(\"HY-101\", 180);\n        fb.bookSeats(3);\n        System.out.println(fb.getBookingStatus());\n    }\n}",
    "detailedSolution": {
      "theory": "Dasturiy ta'minot arxitekturasi tizimning unumdorlik (Performance), xavfsizlik (Security) va kengayuvchanlik (Scalability) kabi no-funksional talablarini belgilaydi. Abstraksiya — foydalanuvchiga faqat muhim interfeysni ko'rsatib, murakkab ichki mexanizmlarni yashirishdir.",
      "cleanCode": "class FlightBooking {\n    private ...;\n    public ... getBookingStatus(...) { ... }\n}",
      "breakdown": [
        "<code>FlightBooking</code>: arxitektura va abstraksiya qatlami.",
        "<code>getBookingStatus</code>: tashqi interfeys ochiq metodi."
      ]
    }
  },
  {
    "id": 15,
    "tier": 1,
    "tierName": "1-Bosqich: Dasturiy Ta'minot Arxitekturasi va OOP da Abstraksiya Asoslari",
    "sector": "1-15: Architecture & Abstraction Fundamentals",
    "title": {
      "uz": "15. WIUT SRS — Talaba Akademik Bahosi Abstraksiyasi",
      "en": "15. WIUT SRS — Student Academic Grade Abstraction"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT Student Record System (SRS) da talabaning modul natijasi harflar (A, B, C, F) orqali ifodalanadi. Ballarni harfga o'giruvchi akademik abstraksiyani yarating.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Dasturiy arxitektura modeli uchun 'ModuleGrade' sinfini e'lon qiling.\n2. Xususiy (private) maydonlarni bering va konstruktor orqali initsializatsiya qiling.\n3. Ichki murakkab hisob-kitoblarni yashiruvchi 'getGradeClassification(...)' ochiq metodini yozing.\n4. 'Main' metodida sinf ob'yektini yarating.\n5. Natijani chop eting: 'ModuleGrade mg = new ModuleGrade(\"OOP\", 78);         System.out.println(mg.getGradeClassification());'",
      "en": "📖 Real-World Scenario & Context\nCreate academic grade abstraction translating raw CW marks into official letter grades.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare class 'ModuleGrade' modeling software architecture abstraction.\n2. Define private fields and initialize them via constructor.\n3. Implement public method 'getGradeClassification(...)' encapsulating complex internals.\n4. Instantiate the class in 'main'.\n5. Print result to console: 'ModuleGrade mg = new ModuleGrade(\"OOP\", 78);         System.out.println(mg.getGradeClassification());'"
    },
    "requirements": {
      "classes": [
        "ModuleGrade",
        "Main"
      ],
      "methods": [
        "getGradeClassification"
      ]
    },
    "starterCode": "// Abstraksiya modelini yarating\nclass ModuleGrade {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ModuleGrade mg = new ModuleGrade(\"OOP\", 78);\n        System.out.println(mg.getGradeClassification());\n    }\n}",
    "solution": "class ModuleGrade {\n    private String moduleName;\n    private int mark;\n    public ModuleGrade(String name, int mark) {\n        this.moduleName = name; this.mark = mark;\n    }\n    public String getGradeClassification() {\n        String g = mark >= 70 ? \"A (First Class)\" : (mark >= 60 ? \"B (Upper Second)\" : \"C (Pass)\");\n        return \"Modul: \" + moduleName + \" | Ball: \" + mark + \" | Baho: \" + g;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ModuleGrade mg = new ModuleGrade(\"OOP\", 78);\n        System.out.println(mg.getGradeClassification());\n    }\n}",
    "detailedSolution": {
      "theory": "Dasturiy ta'minot arxitekturasi tizimning unumdorlik (Performance), xavfsizlik (Security) va kengayuvchanlik (Scalability) kabi no-funksional talablarini belgilaydi. Abstraksiya — foydalanuvchiga faqat muhim interfeysni ko'rsatib, murakkab ichki mexanizmlarni yashirishdir.",
      "cleanCode": "class ModuleGrade {\n    private ...;\n    public ... getGradeClassification(...) { ... }\n}",
      "breakdown": [
        "<code>ModuleGrade</code>: arxitektura va abstraksiya qatlami.",
        "<code>getGradeClassification</code>: tashqi interfeys ochiq metodi."
      ]
    }
  },
  {
    "id": 16,
    "tier": 2,
    "tierName": "2-Bosqich: Abstrakt Sinflar (abstract class) va Abstrakt Metodlar",
    "sector": "16-30: Abstract Classes & Abstract Methods",
    "title": {
      "uz": "16. Uzum Market — Abstrakt Tovarlar va Yetkazish Narxi",
      "en": "16. Uzum Market — Abstract Product and Delivery Cost Calculation"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT 6-hafta yechimida 'Product' sinfi abstrakt qilib o'zgartirildi: 'public abstract double calculateDeliveryCost()'. Oddiy mahsulot bo'lmaydi, har doim aniq tur (jismoniy yoki raqamli) bo'ladi. Ushbu ierarxiyani dasturlang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'AbstractProduct' abstrakt sinfini e'lon qiling ('abstract class').\n2. Unda 'calculateDeliveryCost(...)' abstrakt metodini tanasiz e'lon qiling ('abstract ...;').\n3. 'PhysicalGood' voris sinfini 'extends AbstractProduct' orqali bog'lang.\n4. Voris sinfda 'calculateDeliveryCost(...)' metodini to'liq (@Override) realizatsiya qiling.\n5. 'Main' metodida polimorfik ob'yekt yaratib natijani chop eting: 'AbstractProduct item = new PhysicalGood(\"Monitor\", 1800000.0, 5.2);         System.out.println(\"Mahsulot: \" + item.getName() + \" | Yetkazish: \" + item.calculateDeliveryCost() + \" UZS\");'",
      "en": "📖 Real-World Scenario & Context\nImplement abstract class AbstractProduct with abstract calculateDeliveryCost() overridden by PhysicalGood.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare abstract superclass 'AbstractProduct'.\n2. Declare abstract method 'calculateDeliveryCost(...)' without body.\n3. Create concrete subclass 'PhysicalGood' extending 'AbstractProduct'.\n4. Override and implement 'calculateDeliveryCost(...)' in child class.\n5. Verify in 'main': 'AbstractProduct item = new PhysicalGood(\"Monitor\", 1800000.0, 5.2);         System.out.println(\"Mahsulot: \" + item.getName() + \" | Yetkazish: \" + item.calculateDeliveryCost() + \" UZS\");'"
    },
    "requirements": {
      "classes": [
        "AbstractProduct",
        "PhysicalGood",
        "Main"
      ],
      "methods": [
        "calculateDeliveryCost"
      ],
      "keywords": [
        "abstract",
        "extends"
      ]
    },
    "starterCode": "// Abstrakt sinf va uning vorisini yozing\nabstract class AbstractProduct {\n}\n\nclass PhysicalGood extends AbstractProduct {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractProduct item = new PhysicalGood(\"Monitor\", 1800000.0, 5.2);\n        System.out.println(\"Mahsulot: \" + item.getName() + \" | Yetkazish: \" + item.calculateDeliveryCost() + \" UZS\");\n    }\n}",
    "solution": "abstract class AbstractProduct {\n    private String name;\n    private double price;\n    public AbstractProduct(String n, double p) { this.name = n; this.price = p; }\n    public String getName() { return name; }\n    public double getPrice() { return price; }\n    public abstract double calculateDeliveryCost();\n}\n\nclass PhysicalGood extends AbstractProduct {\n    private double weightKg;\n    public PhysicalGood(String n, double p, double w) { super(n, p); this.weightKg = w; }\n    @Override\n    public double calculateDeliveryCost() { return 15000.0 + (weightKg > 5.0 ? 10000.0 : 0.0); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractProduct item = new PhysicalGood(\"Monitor\", 1800000.0, 5.2);\n        System.out.println(\"Mahsulot: \" + item.getName() + \" | Yetkazish: \" + item.calculateDeliveryCost() + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinflar bevosita 'new' orqali ob'yekt ololmaydi. Ular umumiy oila uchun andaza bo'lib, barcha vorislar uchun umumiy maydonlar va abstrakt metod shartnomalarini taqdim etadi. Har bir non-abstract voris barcha abstrakt metodlarni realizatsiya qilishi shart.",
      "cleanCode": "abstract class AbstractProduct {\n    public abstract ... calculateDeliveryCost(...);\n}\nclass PhysicalGood extends AbstractProduct {\n    @Override\n    public ... calculateDeliveryCost(...) { ... }\n}",
      "breakdown": [
        "<code>AbstractProduct</code>: abstrakt baza sinf.",
        "<code>PhysicalGood</code>: aniq voris sinf."
      ]
    }
  },
  {
    "id": 17,
    "tier": 2,
    "tierName": "2-Bosqich: Abstrakt Sinflar (abstract class) va Abstrakt Metodlar",
    "sector": "16-30: Abstract Classes & Abstract Methods",
    "title": {
      "uz": "17. Payme — Abstrakt To'lov Usuli (AbstractPayment)",
      "en": "17. Payme — Abstract Payment Method Hierarchy"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nPayme tizimida 'AbstractPayment' abstrakt sinf bo'lib, uning 'process(double amount)' metodi mavjud. 'CardPayment' uni to'ldirib karta balansidan pul yechadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'AbstractPayment' abstrakt sinfini e'lon qiling ('abstract class').\n2. Unda 'process(...)' abstrakt metodini tanasiz e'lon qiling ('abstract ...;').\n3. 'CardPayment' voris sinfini 'extends AbstractPayment' orqali bog'lang.\n4. Voris sinfda 'process(...)' metodini to'liq (@Override) realizatsiya qiling.\n5. 'Main' metodida polimorfik ob'yekt yaratib natijani chop eting: 'AbstractPayment payment = new CardPayment(\"8600111122223333\", 500000.0);         boolean ok = payment.process(150000.0);         System.out.println(\"To'lov muvaffaqiyatli: \" + ok);'",
      "en": "📖 Real-World Scenario & Context\nDeclare abstract class AbstractPayment with abstract process(amount) method implemented by CardPayment.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare abstract superclass 'AbstractPayment'.\n2. Declare abstract method 'process(...)' without body.\n3. Create concrete subclass 'CardPayment' extending 'AbstractPayment'.\n4. Override and implement 'process(...)' in child class.\n5. Verify in 'main': 'AbstractPayment payment = new CardPayment(\"8600111122223333\", 500000.0);         boolean ok = payment.process(150000.0);         System.out.println(\"To'lov muvaffaqiyatli: \" + ok);'"
    },
    "requirements": {
      "classes": [
        "AbstractPayment",
        "CardPayment",
        "Main"
      ],
      "methods": [
        "process"
      ],
      "keywords": [
        "abstract",
        "extends"
      ]
    },
    "starterCode": "// Abstrakt sinf va uning vorisini yozing\nabstract class AbstractPayment {\n}\n\nclass CardPayment extends AbstractPayment {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractPayment payment = new CardPayment(\"8600111122223333\", 500000.0);\n        boolean ok = payment.process(150000.0);\n        System.out.println(\"To'lov muvaffaqiyatli: \" + ok);\n    }\n}",
    "solution": "abstract class AbstractPayment {\n    public abstract boolean process(double amount);\n}\n\nclass CardPayment extends AbstractPayment {\n    private String cardNum;\n    private double balance;\n    public CardPayment(String num, double bal) { this.cardNum = num; this.balance = bal; }\n    @Override\n    public boolean process(double amount) {\n        if (amount <= balance) { balance -= amount; return true; }\n        return false;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractPayment payment = new CardPayment(\"8600111122223333\", 500000.0);\n        boolean ok = payment.process(150000.0);\n        System.out.println(\"To'lov muvaffaqiyatli: \" + ok);\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinflar bevosita 'new' orqali ob'yekt ololmaydi. Ular umumiy oila uchun andaza bo'lib, barcha vorislar uchun umumiy maydonlar va abstrakt metod shartnomalarini taqdim etadi. Har bir non-abstract voris barcha abstrakt metodlarni realizatsiya qilishi shart.",
      "cleanCode": "abstract class AbstractPayment {\n    public abstract ... process(...);\n}\nclass CardPayment extends AbstractPayment {\n    @Override\n    public ... process(...) { ... }\n}",
      "breakdown": [
        "<code>AbstractPayment</code>: abstrakt baza sinf.",
        "<code>CardPayment</code>: aniq voris sinf."
      ]
    }
  },
  {
    "id": 18,
    "tier": 2,
    "tierName": "2-Bosqich: Abstrakt Sinflar (abstract class) va Abstrakt Metodlar",
    "sector": "16-30: Abstract Classes & Abstract Methods",
    "title": {
      "uz": "18. Korzinka — Abstrakt Chegirma Qoidasi (AbstractDiscount)",
      "en": "18. Korzinka — Abstract Discount Strategy"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nKorzinka do'konida chegirma turlari turlicha: foizli, vaucherli yoki qat'iy. 'AbstractDiscount' sinfida 'apply(double subtotal)' abstrakt metodini e'lon qiling va 'PercentageDiscount' vorisida amalga oshiring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'AbstractDiscount' abstrakt sinfini e'lon qiling ('abstract class').\n2. Unda 'apply(...)' abstrakt metodini tanasiz e'lon qiling ('abstract ...;').\n3. 'PercentageDiscount' voris sinfini 'extends AbstractDiscount' orqali bog'lang.\n4. Voris sinfda 'apply(...)' metodini to'liq (@Override) realizatsiya qiling.\n5. 'Main' metodida polimorfik ob'yekt yaratib natijani chop eting: 'AbstractDiscount disc = new PercentageDiscount(10.0);         System.out.println(\"Chegirmadan keyin: \" + disc.apply(200000.0) + \" UZS\");'",
      "en": "📖 Real-World Scenario & Context\nDefine abstract class AbstractDiscount and concrete PercentageDiscount overriding apply().\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare abstract superclass 'AbstractDiscount'.\n2. Declare abstract method 'apply(...)' without body.\n3. Create concrete subclass 'PercentageDiscount' extending 'AbstractDiscount'.\n4. Override and implement 'apply(...)' in child class.\n5. Verify in 'main': 'AbstractDiscount disc = new PercentageDiscount(10.0);         System.out.println(\"Chegirmadan keyin: \" + disc.apply(200000.0) + \" UZS\");'"
    },
    "requirements": {
      "classes": [
        "AbstractDiscount",
        "PercentageDiscount",
        "Main"
      ],
      "methods": [
        "apply"
      ],
      "keywords": [
        "abstract",
        "extends"
      ]
    },
    "starterCode": "// Abstrakt sinf va uning vorisini yozing\nabstract class AbstractDiscount {\n}\n\nclass PercentageDiscount extends AbstractDiscount {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractDiscount disc = new PercentageDiscount(10.0);\n        System.out.println(\"Chegirmadan keyin: \" + disc.apply(200000.0) + \" UZS\");\n    }\n}",
    "solution": "abstract class AbstractDiscount {\n    public abstract double apply(double subtotal);\n}\n\nclass PercentageDiscount extends AbstractDiscount {\n    private double percent;\n    public PercentageDiscount(double p) { this.percent = p; }\n    @Override\n    public double apply(double subtotal) { return subtotal * (1.0 - percent / 100.0); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractDiscount disc = new PercentageDiscount(10.0);\n        System.out.println(\"Chegirmadan keyin: \" + disc.apply(200000.0) + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinflar bevosita 'new' orqali ob'yekt ololmaydi. Ular umumiy oila uchun andaza bo'lib, barcha vorislar uchun umumiy maydonlar va abstrakt metod shartnomalarini taqdim etadi. Har bir non-abstract voris barcha abstrakt metodlarni realizatsiya qilishi shart.",
      "cleanCode": "abstract class AbstractDiscount {\n    public abstract ... apply(...);\n}\nclass PercentageDiscount extends AbstractDiscount {\n    @Override\n    public ... apply(...) { ... }\n}",
      "breakdown": [
        "<code>AbstractDiscount</code>: abstrakt baza sinf.",
        "<code>PercentageDiscount</code>: aniq voris sinf."
      ]
    }
  },
  {
    "id": 19,
    "tier": 2,
    "tierName": "2-Bosqich: Abstrakt Sinflar (abstract class) va Abstrakt Metodlar",
    "sector": "16-30: Abstract Classes & Abstract Methods",
    "title": {
      "uz": "19. Yandex Go — Abstrakt Tarif Narxlash Modeli",
      "en": "19. Yandex Go — Abstract Ride Fare Model"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nYandex Go da barcha tariflar (Ekonom, Komfort, Biznes) 'AbstractFare' dan meros oladi va 'computeFare(double km)' abstrakt metodini o'ziga xos narxlar bilan to'ldiradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'AbstractFare' abstrakt sinfini e'lon qiling ('abstract class').\n2. Unda 'computeFare(...)' abstrakt metodini tanasiz e'lon qiling ('abstract ...;').\n3. 'ComfortRide' voris sinfini 'extends AbstractFare' orqali bog'lang.\n4. Voris sinfda 'computeFare(...)' metodini to'liq (@Override) realizatsiya qiling.\n5. 'Main' metodida polimorfik ob'yekt yaratib natijani chop eting: 'AbstractFare ride = new ComfortRide(10000.0, 3500.0);         System.out.println(\"Komfort safar narxi: \" + ride.computeFare(8.0) + \" UZS\");'",
      "en": "📖 Real-World Scenario & Context\nImplement AbstractFare base class with abstract computeFare() realized by ComfortRide.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare abstract superclass 'AbstractFare'.\n2. Declare abstract method 'computeFare(...)' without body.\n3. Create concrete subclass 'ComfortRide' extending 'AbstractFare'.\n4. Override and implement 'computeFare(...)' in child class.\n5. Verify in 'main': 'AbstractFare ride = new ComfortRide(10000.0, 3500.0);         System.out.println(\"Komfort safar narxi: \" + ride.computeFare(8.0) + \" UZS\");'"
    },
    "requirements": {
      "classes": [
        "AbstractFare",
        "ComfortRide",
        "Main"
      ],
      "methods": [
        "computeFare"
      ],
      "keywords": [
        "abstract",
        "extends"
      ]
    },
    "starterCode": "// Abstrakt sinf va uning vorisini yozing\nabstract class AbstractFare {\n}\n\nclass ComfortRide extends AbstractFare {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractFare ride = new ComfortRide(10000.0, 3500.0);\n        System.out.println(\"Komfort safar narxi: \" + ride.computeFare(8.0) + \" UZS\");\n    }\n}",
    "solution": "abstract class AbstractFare {\n    protected double baseRate;\n    public AbstractFare(double base) { this.baseRate = base; }\n    public abstract double computeFare(double km);\n}\n\nclass ComfortRide extends AbstractFare {\n    private double kmRate;\n    public ComfortRide(double base, double perKm) { super(base); this.kmRate = perKm; }\n    @Override\n    public double computeFare(double km) { return baseRate + (km * kmRate); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractFare ride = new ComfortRide(10000.0, 3500.0);\n        System.out.println(\"Komfort safar narxi: \" + ride.computeFare(8.0) + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinflar bevosita 'new' orqali ob'yekt ololmaydi. Ular umumiy oila uchun andaza bo'lib, barcha vorislar uchun umumiy maydonlar va abstrakt metod shartnomalarini taqdim etadi. Har bir non-abstract voris barcha abstrakt metodlarni realizatsiya qilishi shart.",
      "cleanCode": "abstract class AbstractFare {\n    public abstract ... computeFare(...);\n}\nclass ComfortRide extends AbstractFare {\n    @Override\n    public ... computeFare(...) { ... }\n}",
      "breakdown": [
        "<code>AbstractFare</code>: abstrakt baza sinf.",
        "<code>ComfortRide</code>: aniq voris sinf."
      ]
    }
  },
  {
    "id": 20,
    "tier": 2,
    "tierName": "2-Bosqich: Abstrakt Sinflar (abstract class) va Abstrakt Metodlar",
    "sector": "16-30: Abstract Classes & Abstract Methods",
    "title": {
      "uz": "20. Click — Abstrakt Pul O'tkazmasi va Komissiya",
      "en": "20. Click — Abstract Fund Transfer Commission"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nClick ilovasida karta-karta yoki hamyon o'tkazmalari 'AbstractTransfer' ga tayanadi. Undagi 'calculateFee(double amount)' abstrakt metodini 'P2PTransfer' sinfida 1% qilib yozing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'AbstractTransfer' abstrakt sinfini e'lon qiling ('abstract class').\n2. Unda 'calculateFee(...)' abstrakt metodini tanasiz e'lon qiling ('abstract ...;').\n3. 'P2PTransfer' voris sinfini 'extends AbstractTransfer' orqali bog'lang.\n4. Voris sinfda 'calculateFee(...)' metodini to'liq (@Override) realizatsiya qiling.\n5. 'Main' metodida polimorfik ob'yekt yaratib natijani chop eting: 'AbstractTransfer p2p = new P2PTransfer();         System.out.println(\"P2P komissiyasi: \" + p2p.calculateFee(500000.0) + \" UZS\");'",
      "en": "📖 Real-World Scenario & Context\nModel abstract AbstractTransfer with calculateFee() implemented by P2PTransfer.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare abstract superclass 'AbstractTransfer'.\n2. Declare abstract method 'calculateFee(...)' without body.\n3. Create concrete subclass 'P2PTransfer' extending 'AbstractTransfer'.\n4. Override and implement 'calculateFee(...)' in child class.\n5. Verify in 'main': 'AbstractTransfer p2p = new P2PTransfer();         System.out.println(\"P2P komissiyasi: \" + p2p.calculateFee(500000.0) + \" UZS\");'"
    },
    "requirements": {
      "classes": [
        "AbstractTransfer",
        "P2PTransfer",
        "Main"
      ],
      "methods": [
        "calculateFee"
      ],
      "keywords": [
        "abstract",
        "extends"
      ]
    },
    "starterCode": "// Abstrakt sinf va uning vorisini yozing\nabstract class AbstractTransfer {\n}\n\nclass P2PTransfer extends AbstractTransfer {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractTransfer p2p = new P2PTransfer();\n        System.out.println(\"P2P komissiyasi: \" + p2p.calculateFee(500000.0) + \" UZS\");\n    }\n}",
    "solution": "abstract class AbstractTransfer {\n    public abstract double calculateFee(double amount);\n}\n\nclass P2PTransfer extends AbstractTransfer {\n    @Override\n    public double calculateFee(double amount) { return amount * 0.01; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractTransfer p2p = new P2PTransfer();\n        System.out.println(\"P2P komissiyasi: \" + p2p.calculateFee(500000.0) + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinflar bevosita 'new' orqali ob'yekt ololmaydi. Ular umumiy oila uchun andaza bo'lib, barcha vorislar uchun umumiy maydonlar va abstrakt metod shartnomalarini taqdim etadi. Har bir non-abstract voris barcha abstrakt metodlarni realizatsiya qilishi shart.",
      "cleanCode": "abstract class AbstractTransfer {\n    public abstract ... calculateFee(...);\n}\nclass P2PTransfer extends AbstractTransfer {\n    @Override\n    public ... calculateFee(...) { ... }\n}",
      "breakdown": [
        "<code>AbstractTransfer</code>: abstrakt baza sinf.",
        "<code>P2PTransfer</code>: aniq voris sinf."
      ]
    }
  },
  {
    "id": 21,
    "tier": 2,
    "tierName": "2-Bosqich: Abstrakt Sinflar (abstract class) va Abstrakt Metodlar",
    "sector": "16-30: Abstract Classes & Abstract Methods",
    "title": {
      "uz": "21. Safia — Abstrakt Qandolat Mahsuloti (AbstractPastry)",
      "en": "21. Safia — Abstract Pastry Item and Shelf Life"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSafia pishiriqlari 'AbstractPastry' dan vorislik oladi. Undagi 'getShelfLifeDays()' abstrakt metodini 'CreamCake' da 3 kun, tortlarda esa boshqa muddat qilib qaytaring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'AbstractPastry' abstrakt sinfini e'lon qiling ('abstract class').\n2. Unda 'getShelfLifeDays(...)' abstrakt metodini tanasiz e'lon qiling ('abstract ...;').\n3. 'CreamCake' voris sinfini 'extends AbstractPastry' orqali bog'lang.\n4. Voris sinfda 'getShelfLifeDays(...)' metodini to'liq (@Override) realizatsiya qiling.\n5. 'Main' metodida polimorfik ob'yekt yaratib natijani chop eting: 'AbstractPastry cake = new CreamCake(\"Napoleon\", 120000.0);         System.out.println(cake.getName() + \" saqlanish muddati: \" + cake.getShelfLifeDays() + \" kun\");'",
      "en": "📖 Real-World Scenario & Context\nImplement abstract AbstractPastry requiring getShelfLifeDays() overridden in CreamCake.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare abstract superclass 'AbstractPastry'.\n2. Declare abstract method 'getShelfLifeDays(...)' without body.\n3. Create concrete subclass 'CreamCake' extending 'AbstractPastry'.\n4. Override and implement 'getShelfLifeDays(...)' in child class.\n5. Verify in 'main': 'AbstractPastry cake = new CreamCake(\"Napoleon\", 120000.0);         System.out.println(cake.getName() + \" saqlanish muddati: \" + cake.getShelfLifeDays() + \" kun\");'"
    },
    "requirements": {
      "classes": [
        "AbstractPastry",
        "CreamCake",
        "Main"
      ],
      "methods": [
        "getShelfLifeDays"
      ],
      "keywords": [
        "abstract",
        "extends"
      ]
    },
    "starterCode": "// Abstrakt sinf va uning vorisini yozing\nabstract class AbstractPastry {\n}\n\nclass CreamCake extends AbstractPastry {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractPastry cake = new CreamCake(\"Napoleon\", 120000.0);\n        System.out.println(cake.getName() + \" saqlanish muddati: \" + cake.getShelfLifeDays() + \" kun\");\n    }\n}",
    "solution": "abstract class AbstractPastry {\n    private String name;\n    private double price;\n    public AbstractPastry(String n, double p) { this.name = n; this.price = p; }\n    public String getName() { return name; }\n    public abstract int getShelfLifeDays();\n}\n\nclass CreamCake extends AbstractPastry {\n    public CreamCake(String n, double p) { super(n, p); }\n    @Override\n    public int getShelfLifeDays() { return 3; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractPastry cake = new CreamCake(\"Napoleon\", 120000.0);\n        System.out.println(cake.getName() + \" saqlanish muddati: \" + cake.getShelfLifeDays() + \" kun\");\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinflar bevosita 'new' orqali ob'yekt ololmaydi. Ular umumiy oila uchun andaza bo'lib, barcha vorislar uchun umumiy maydonlar va abstrakt metod shartnomalarini taqdim etadi. Har bir non-abstract voris barcha abstrakt metodlarni realizatsiya qilishi shart.",
      "cleanCode": "abstract class AbstractPastry {\n    public abstract ... getShelfLifeDays(...);\n}\nclass CreamCake extends AbstractPastry {\n    @Override\n    public ... getShelfLifeDays(...) { ... }\n}",
      "breakdown": [
        "<code>AbstractPastry</code>: abstrakt baza sinf.",
        "<code>CreamCake</code>: aniq voris sinf."
      ]
    }
  },
  {
    "id": 22,
    "tier": 2,
    "tierName": "2-Bosqich: Abstrakt Sinflar (abstract class) va Abstrakt Metodlar",
    "sector": "16-30: Abstract Classes & Abstract Methods",
    "title": {
      "uz": "22. Dodo Pizza — Abstrakt Pitsa Xamiri (AbstractPizza)",
      "en": "22. Dodo Pizza — Abstract Pizza Base and Prep Time"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nDodo da har bir pitsa 'AbstractPizza' ga asoslanadi. Har bir pitsaning o'z tayyorlanish vaqti ('getBakeTimeMinutes()') bo'lishi shart. 'Pepperoni' sinfida uni 12 daqiqa qiling.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'AbstractPizza' abstrakt sinfini e'lon qiling ('abstract class').\n2. Unda 'getBakeTimeMinutes(...)' abstrakt metodini tanasiz e'lon qiling ('abstract ...;').\n3. 'Pepperoni' voris sinfini 'extends AbstractPizza' orqali bog'lang.\n4. Voris sinfda 'getBakeTimeMinutes(...)' metodini to'liq (@Override) realizatsiya qiling.\n5. 'Main' metodida polimorfik ob'yekt yaratib natijani chop eting: 'AbstractPizza pizza = new Pepperoni(\"Katta Pepperoni\", 85000.0);         System.out.println(pizza.getName() + \" pishish vaqti: \" + pizza.getBakeTimeMinutes() + \" daqiqa\");'",
      "en": "📖 Real-World Scenario & Context\nCreate AbstractPizza enforcing getBakeTimeMinutes() implemented by Pepperoni.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare abstract superclass 'AbstractPizza'.\n2. Declare abstract method 'getBakeTimeMinutes(...)' without body.\n3. Create concrete subclass 'Pepperoni' extending 'AbstractPizza'.\n4. Override and implement 'getBakeTimeMinutes(...)' in child class.\n5. Verify in 'main': 'AbstractPizza pizza = new Pepperoni(\"Katta Pepperoni\", 85000.0);         System.out.println(pizza.getName() + \" pishish vaqti: \" + pizza.getBakeTimeMinutes() + \" daqiqa\");'"
    },
    "requirements": {
      "classes": [
        "AbstractPizza",
        "Pepperoni",
        "Main"
      ],
      "methods": [
        "getBakeTimeMinutes"
      ],
      "keywords": [
        "abstract",
        "extends"
      ]
    },
    "starterCode": "// Abstrakt sinf va uning vorisini yozing\nabstract class AbstractPizza {\n}\n\nclass Pepperoni extends AbstractPizza {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractPizza pizza = new Pepperoni(\"Katta Pepperoni\", 85000.0);\n        System.out.println(pizza.getName() + \" pishish vaqti: \" + pizza.getBakeTimeMinutes() + \" daqiqa\");\n    }\n}",
    "solution": "abstract class AbstractPizza {\n    private String name;\n    private double price;\n    public AbstractPizza(String n, double p) { this.name = n; this.price = p; }\n    public String getName() { return name; }\n    public abstract int getBakeTimeMinutes();\n}\n\nclass Pepperoni extends AbstractPizza {\n    public Pepperoni(String n, double p) { super(n, p); }\n    @Override\n    public int getBakeTimeMinutes() { return 12; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractPizza pizza = new Pepperoni(\"Katta Pepperoni\", 85000.0);\n        System.out.println(pizza.getName() + \" pishish vaqti: \" + pizza.getBakeTimeMinutes() + \" daqiqa\");\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinflar bevosita 'new' orqali ob'yekt ololmaydi. Ular umumiy oila uchun andaza bo'lib, barcha vorislar uchun umumiy maydonlar va abstrakt metod shartnomalarini taqdim etadi. Har bir non-abstract voris barcha abstrakt metodlarni realizatsiya qilishi shart.",
      "cleanCode": "abstract class AbstractPizza {\n    public abstract ... getBakeTimeMinutes(...);\n}\nclass Pepperoni extends AbstractPizza {\n    @Override\n    public ... getBakeTimeMinutes(...) { ... }\n}",
      "breakdown": [
        "<code>AbstractPizza</code>: abstrakt baza sinf.",
        "<code>Pepperoni</code>: aniq voris sinf."
      ]
    }
  },
  {
    "id": 23,
    "tier": 2,
    "tierName": "2-Bosqich: Abstrakt Sinflar (abstract class) va Abstrakt Metodlar",
    "sector": "16-30: Abstract Classes & Abstract Methods",
    "title": {
      "uz": "23. Texnomart — Abstrakt Kafolat Siyosati (AbstractWarranty)",
      "en": "23. Texnomart — Abstract Warranty Policy"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nElektronika kafolati 'AbstractWarranty' abstrakt sinfida 'getCoverageMonths()' metodi orqali ifodalanadi. 'ExtendedWarranty' uni 24 oy qilib taqdim etadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'AbstractWarranty' abstrakt sinfini e'lon qiling ('abstract class').\n2. Unda 'getCoverageMonths(...)' abstrakt metodini tanasiz e'lon qiling ('abstract ...;').\n3. 'ExtendedWarranty' voris sinfini 'extends AbstractWarranty' orqali bog'lang.\n4. Voris sinfda 'getCoverageMonths(...)' metodini to'liq (@Override) realizatsiya qiling.\n5. 'Main' metodida polimorfik ob'yekt yaratib natijani chop eting: 'AbstractWarranty w = new ExtendedWarranty(\"Televizor\", 12);         System.out.println(\"Kafolat muddati: \" + w.getCoverageMonths() + \" oy\");'",
      "en": "📖 Real-World Scenario & Context\nModel AbstractWarranty requiring getCoverageMonths() in ExtendedWarranty.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare abstract superclass 'AbstractWarranty'.\n2. Declare abstract method 'getCoverageMonths(...)' without body.\n3. Create concrete subclass 'ExtendedWarranty' extending 'AbstractWarranty'.\n4. Override and implement 'getCoverageMonths(...)' in child class.\n5. Verify in 'main': 'AbstractWarranty w = new ExtendedWarranty(\"Televizor\", 12);         System.out.println(\"Kafolat muddati: \" + w.getCoverageMonths() + \" oy\");'"
    },
    "requirements": {
      "classes": [
        "AbstractWarranty",
        "ExtendedWarranty",
        "Main"
      ],
      "methods": [
        "getCoverageMonths"
      ],
      "keywords": [
        "abstract",
        "extends"
      ]
    },
    "starterCode": "// Abstrakt sinf va uning vorisini yozing\nabstract class AbstractWarranty {\n}\n\nclass ExtendedWarranty extends AbstractWarranty {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractWarranty w = new ExtendedWarranty(\"Televizor\", 12);\n        System.out.println(\"Kafolat muddati: \" + w.getCoverageMonths() + \" oy\");\n    }\n}",
    "solution": "abstract class AbstractWarranty {\n    protected String itemType;\n    public AbstractWarranty(String type) { this.itemType = type; }\n    public abstract int getCoverageMonths();\n}\n\nclass ExtendedWarranty extends AbstractWarranty {\n    private int extraMonths;\n    public ExtendedWarranty(String type, int extra) { super(type); this.extraMonths = extra; }\n    @Override\n    public int getCoverageMonths() { return 12 + extraMonths; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractWarranty w = new ExtendedWarranty(\"Televizor\", 12);\n        System.out.println(\"Kafolat muddati: \" + w.getCoverageMonths() + \" oy\");\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinflar bevosita 'new' orqali ob'yekt ololmaydi. Ular umumiy oila uchun andaza bo'lib, barcha vorislar uchun umumiy maydonlar va abstrakt metod shartnomalarini taqdim etadi. Har bir non-abstract voris barcha abstrakt metodlarni realizatsiya qilishi shart.",
      "cleanCode": "abstract class AbstractWarranty {\n    public abstract ... getCoverageMonths(...);\n}\nclass ExtendedWarranty extends AbstractWarranty {\n    @Override\n    public ... getCoverageMonths(...) { ... }\n}",
      "breakdown": [
        "<code>AbstractWarranty</code>: abstrakt baza sinf.",
        "<code>ExtendedWarranty</code>: aniq voris sinf."
      ]
    }
  },
  {
    "id": 24,
    "tier": 2,
    "tierName": "2-Bosqich: Abstrakt Sinflar (abstract class) va Abstrakt Metodlar",
    "sector": "16-30: Abstract Classes & Abstract Methods",
    "title": {
      "uz": "24. Medion — Abstrakt Laboratoriya Tahlili (AbstractLabTest)",
      "en": "24. Medion — Abstract Lab Test Turnaround Time"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nMedionda qon tahlili, MRT yoki rentgen tekshiruvlari 'AbstractLabTest' sinfida 'getEstimatedHours()' abstrakt metodini o'z vaqtiga ko'ra realizatsiya qiladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'AbstractLabTest' abstrakt sinfini e'lon qiling ('abstract class').\n2. Unda 'getEstimatedHours(...)' abstrakt metodini tanasiz e'lon qiling ('abstract ...;').\n3. 'BloodTest' voris sinfini 'extends AbstractLabTest' orqali bog'lang.\n4. Voris sinfda 'getEstimatedHours(...)' metodini to'liq (@Override) realizatsiya qiling.\n5. 'Main' metodida polimorfik ob'yekt yaratib natijani chop eting: 'AbstractLabTest test = new BloodTest(\"Umumiy Qon Tahlili\");         System.out.println(test.getTestName() + \" tayyorlanish vaqti: \" + test.getEstimatedHours() + \" soat\");'",
      "en": "📖 Real-World Scenario & Context\nDeclare AbstractLabTest with abstract getEstimatedHours() overridden by BloodTest.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare abstract superclass 'AbstractLabTest'.\n2. Declare abstract method 'getEstimatedHours(...)' without body.\n3. Create concrete subclass 'BloodTest' extending 'AbstractLabTest'.\n4. Override and implement 'getEstimatedHours(...)' in child class.\n5. Verify in 'main': 'AbstractLabTest test = new BloodTest(\"Umumiy Qon Tahlili\");         System.out.println(test.getTestName() + \" tayyorlanish vaqti: \" + test.getEstimatedHours() + \" soat\");'"
    },
    "requirements": {
      "classes": [
        "AbstractLabTest",
        "BloodTest",
        "Main"
      ],
      "methods": [
        "getEstimatedHours"
      ],
      "keywords": [
        "abstract",
        "extends"
      ]
    },
    "starterCode": "// Abstrakt sinf va uning vorisini yozing\nabstract class AbstractLabTest {\n}\n\nclass BloodTest extends AbstractLabTest {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractLabTest test = new BloodTest(\"Umumiy Qon Tahlili\");\n        System.out.println(test.getTestName() + \" tayyorlanish vaqti: \" + test.getEstimatedHours() + \" soat\");\n    }\n}",
    "solution": "abstract class AbstractLabTest {\n    private String testName;\n    public AbstractLabTest(String name) { this.testName = name; }\n    public String getTestName() { return testName; }\n    public abstract int getEstimatedHours();\n}\n\nclass BloodTest extends AbstractLabTest {\n    public BloodTest(String name) { super(name); }\n    @Override\n    public int getEstimatedHours() { return 4; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractLabTest test = new BloodTest(\"Umumiy Qon Tahlili\");\n        System.out.println(test.getTestName() + \" tayyorlanish vaqti: \" + test.getEstimatedHours() + \" soat\");\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinflar bevosita 'new' orqali ob'yekt ololmaydi. Ular umumiy oila uchun andaza bo'lib, barcha vorislar uchun umumiy maydonlar va abstrakt metod shartnomalarini taqdim etadi. Har bir non-abstract voris barcha abstrakt metodlarni realizatsiya qilishi shart.",
      "cleanCode": "abstract class AbstractLabTest {\n    public abstract ... getEstimatedHours(...);\n}\nclass BloodTest extends AbstractLabTest {\n    @Override\n    public ... getEstimatedHours(...) { ... }\n}",
      "breakdown": [
        "<code>AbstractLabTest</code>: abstrakt baza sinf.",
        "<code>BloodTest</code>: aniq voris sinf."
      ]
    }
  },
  {
    "id": 25,
    "tier": 2,
    "tierName": "2-Bosqich: Abstrakt Sinflar (abstract class) va Abstrakt Metodlar",
    "sector": "16-30: Abstract Classes & Abstract Methods",
    "title": {
      "uz": "25. Express24 — Abstrakt Yetkazish Transporti (AbstractTransport)",
      "en": "25. Express24 — Abstract Transport Vehicle Capacity"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nKuryerlar velosiped, skuter yoki avtomobilda yurishadi. 'AbstractTransport' dagi 'getMaxWeightKg()' abstrakt metodini 'MotorcycleDelivery' da 20.0 kg qilib belgilang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'AbstractTransport' abstrakt sinfini e'lon qiling ('abstract class').\n2. Unda 'getMaxWeightKg(...)' abstrakt metodini tanasiz e'lon qiling ('abstract ...;').\n3. 'MotorcycleDelivery' voris sinfini 'extends AbstractTransport' orqali bog'lang.\n4. Voris sinfda 'getMaxWeightKg(...)' metodini to'liq (@Override) realizatsiya qiling.\n5. 'Main' metodida polimorfik ob'yekt yaratib natijani chop eting: 'AbstractTransport transport = new MotorcycleDelivery(\"Skuter\");         System.out.println(transport.getType() + \" maksimal vazni: \" + transport.getMaxWeightKg() + \" kg\");'",
      "en": "📖 Real-World Scenario & Context\nCreate AbstractTransport with abstract getMaxWeightKg() implemented in MotorcycleDelivery.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare abstract superclass 'AbstractTransport'.\n2. Declare abstract method 'getMaxWeightKg(...)' without body.\n3. Create concrete subclass 'MotorcycleDelivery' extending 'AbstractTransport'.\n4. Override and implement 'getMaxWeightKg(...)' in child class.\n5. Verify in 'main': 'AbstractTransport transport = new MotorcycleDelivery(\"Skuter\");         System.out.println(transport.getType() + \" maksimal vazni: \" + transport.getMaxWeightKg() + \" kg\");'"
    },
    "requirements": {
      "classes": [
        "AbstractTransport",
        "MotorcycleDelivery",
        "Main"
      ],
      "methods": [
        "getMaxWeightKg"
      ],
      "keywords": [
        "abstract",
        "extends"
      ]
    },
    "starterCode": "// Abstrakt sinf va uning vorisini yozing\nabstract class AbstractTransport {\n}\n\nclass MotorcycleDelivery extends AbstractTransport {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractTransport transport = new MotorcycleDelivery(\"Skuter\");\n        System.out.println(transport.getType() + \" maksimal vazni: \" + transport.getMaxWeightKg() + \" kg\");\n    }\n}",
    "solution": "abstract class AbstractTransport {\n    private String type;\n    public AbstractTransport(String type) { this.type = type; }\n    public String getType() { return type; }\n    public abstract double getMaxWeightKg();\n}\n\nclass MotorcycleDelivery extends AbstractTransport {\n    public MotorcycleDelivery(String type) { super(type); }\n    @Override\n    public double getMaxWeightKg() { return 20.0; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractTransport transport = new MotorcycleDelivery(\"Skuter\");\n        System.out.println(transport.getType() + \" maksimal vazni: \" + transport.getMaxWeightKg() + \" kg\");\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinflar bevosita 'new' orqali ob'yekt ololmaydi. Ular umumiy oila uchun andaza bo'lib, barcha vorislar uchun umumiy maydonlar va abstrakt metod shartnomalarini taqdim etadi. Har bir non-abstract voris barcha abstrakt metodlarni realizatsiya qilishi shart.",
      "cleanCode": "abstract class AbstractTransport {\n    public abstract ... getMaxWeightKg(...);\n}\nclass MotorcycleDelivery extends AbstractTransport {\n    @Override\n    public ... getMaxWeightKg(...) { ... }\n}",
      "breakdown": [
        "<code>AbstractTransport</code>: abstrakt baza sinf.",
        "<code>MotorcycleDelivery</code>: aniq voris sinf."
      ]
    }
  },
  {
    "id": 26,
    "tier": 2,
    "tierName": "2-Bosqich: Abstrakt Sinflar (abstract class) va Abstrakt Metodlar",
    "sector": "16-30: Abstract Classes & Abstract Methods",
    "title": {
      "uz": "26. Asaxiy — Abstrakt Nashr va Fayl Hajmi",
      "en": "26. Asaxiy — Abstract Publication and Digital File Size"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nAsaxiy media katalogida barcha nashrlar 'AbstractPublication' ga tegishli. 'DigitalMagazine' vorisi 'getFileSizeMb()' abstrakt metodini aniq MB o'lchovida qaytaradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'AbstractPublication' abstrakt sinfini e'lon qiling ('abstract class').\n2. Unda 'getFileSizeMb(...)' abstrakt metodini tanasiz e'lon qiling ('abstract ...;').\n3. 'DigitalMagazine' voris sinfini 'extends AbstractPublication' orqali bog'lang.\n4. Voris sinfda 'getFileSizeMb(...)' metodini to'liq (@Override) realizatsiya qiling.\n5. 'Main' metodida polimorfik ob'yekt yaratib natijani chop eting: 'AbstractPublication mag = new DigitalMagazine(\"IT Weekly\", 35.5);         System.out.println(mag.getTitle() + \" fayl hajmi: \" + mag.getFileSizeMb() + \" MB\");'",
      "en": "📖 Real-World Scenario & Context\nDefine AbstractPublication with abstract getFileSizeMb() overridden by DigitalMagazine.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare abstract superclass 'AbstractPublication'.\n2. Declare abstract method 'getFileSizeMb(...)' without body.\n3. Create concrete subclass 'DigitalMagazine' extending 'AbstractPublication'.\n4. Override and implement 'getFileSizeMb(...)' in child class.\n5. Verify in 'main': 'AbstractPublication mag = new DigitalMagazine(\"IT Weekly\", 35.5);         System.out.println(mag.getTitle() + \" fayl hajmi: \" + mag.getFileSizeMb() + \" MB\");'"
    },
    "requirements": {
      "classes": [
        "AbstractPublication",
        "DigitalMagazine",
        "Main"
      ],
      "methods": [
        "getFileSizeMb"
      ],
      "keywords": [
        "abstract",
        "extends"
      ]
    },
    "starterCode": "// Abstrakt sinf va uning vorisini yozing\nabstract class AbstractPublication {\n}\n\nclass DigitalMagazine extends AbstractPublication {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractPublication mag = new DigitalMagazine(\"IT Weekly\", 35.5);\n        System.out.println(mag.getTitle() + \" fayl hajmi: \" + mag.getFileSizeMb() + \" MB\");\n    }\n}",
    "solution": "abstract class AbstractPublication {\n    private String title;\n    public AbstractPublication(String title) { this.title = title; }\n    public String getTitle() { return title; }\n    public abstract double getFileSizeMb();\n}\n\nclass DigitalMagazine extends AbstractPublication {\n    private double sizeMb;\n    public DigitalMagazine(String t, double size) { super(t); this.sizeMb = size; }\n    @Override\n    public double getFileSizeMb() { return sizeMb; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractPublication mag = new DigitalMagazine(\"IT Weekly\", 35.5);\n        System.out.println(mag.getTitle() + \" fayl hajmi: \" + mag.getFileSizeMb() + \" MB\");\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinflar bevosita 'new' orqali ob'yekt ololmaydi. Ular umumiy oila uchun andaza bo'lib, barcha vorislar uchun umumiy maydonlar va abstrakt metod shartnomalarini taqdim etadi. Har bir non-abstract voris barcha abstrakt metodlarni realizatsiya qilishi shart.",
      "cleanCode": "abstract class AbstractPublication {\n    public abstract ... getFileSizeMb(...);\n}\nclass DigitalMagazine extends AbstractPublication {\n    @Override\n    public ... getFileSizeMb(...) { ... }\n}",
      "breakdown": [
        "<code>AbstractPublication</code>: abstrakt baza sinf.",
        "<code>DigitalMagazine</code>: aniq voris sinf."
      ]
    }
  },
  {
    "id": 27,
    "tier": 2,
    "tierName": "2-Bosqich: Abstrakt Sinflar (abstract class) va Abstrakt Metodlar",
    "sector": "16-30: Abstract Classes & Abstract Methods",
    "title": {
      "uz": "27. Kapitalbank — Abstrakt Depozit va Foiz Hisobi",
      "en": "27. Kapitalbank — Abstract Deposit and Interest Accrual"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nKapitalbank jamg'arma depozitlari 'AbstractDeposit' dan olinadi. 'FixedTermDeposit' vorisi 'calculateMonthlyInterest()' orqali oylik foiz summasini hisoblaydi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'AbstractDeposit' abstrakt sinfini e'lon qiling ('abstract class').\n2. Unda 'calculateMonthlyInterest(...)' abstrakt metodini tanasiz e'lon qiling ('abstract ...;').\n3. 'FixedTermDeposit' voris sinfini 'extends AbstractDeposit' orqali bog'lang.\n4. Voris sinfda 'calculateMonthlyInterest(...)' metodini to'liq (@Override) realizatsiya qiling.\n5. 'Main' metodida polimorfik ob'yekt yaratib natijani chop eting: 'AbstractDeposit dep = new FixedTermDeposit(10000000.0, 24.0);         System.out.println(\"Oylik foiz: \" + dep.calculateMonthlyInterest() + \" UZS\");'",
      "en": "📖 Real-World Scenario & Context\nModel AbstractDeposit with abstract calculateMonthlyInterest() implemented by FixedTermDeposit.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare abstract superclass 'AbstractDeposit'.\n2. Declare abstract method 'calculateMonthlyInterest(...)' without body.\n3. Create concrete subclass 'FixedTermDeposit' extending 'AbstractDeposit'.\n4. Override and implement 'calculateMonthlyInterest(...)' in child class.\n5. Verify in 'main': 'AbstractDeposit dep = new FixedTermDeposit(10000000.0, 24.0);         System.out.println(\"Oylik foiz: \" + dep.calculateMonthlyInterest() + \" UZS\");'"
    },
    "requirements": {
      "classes": [
        "AbstractDeposit",
        "FixedTermDeposit",
        "Main"
      ],
      "methods": [
        "calculateMonthlyInterest"
      ],
      "keywords": [
        "abstract",
        "extends"
      ]
    },
    "starterCode": "// Abstrakt sinf va uning vorisini yozing\nabstract class AbstractDeposit {\n}\n\nclass FixedTermDeposit extends AbstractDeposit {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractDeposit dep = new FixedTermDeposit(10000000.0, 24.0);\n        System.out.println(\"Oylik foiz: \" + dep.calculateMonthlyInterest() + \" UZS\");\n    }\n}",
    "solution": "abstract class AbstractDeposit {\n    protected double principal;\n    protected double annualRate;\n    public AbstractDeposit(double p, double r) { this.principal = p; this.annualRate = r; }\n    public abstract double calculateMonthlyInterest();\n}\n\nclass FixedTermDeposit extends AbstractDeposit {\n    public FixedTermDeposit(double p, double r) { super(p, r); }\n    @Override\n    public double calculateMonthlyInterest() { return (principal * (annualRate / 100.0)) / 12.0; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractDeposit dep = new FixedTermDeposit(10000000.0, 24.0);\n        System.out.println(\"Oylik foiz: \" + dep.calculateMonthlyInterest() + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinflar bevosita 'new' orqali ob'yekt ololmaydi. Ular umumiy oila uchun andaza bo'lib, barcha vorislar uchun umumiy maydonlar va abstrakt metod shartnomalarini taqdim etadi. Har bir non-abstract voris barcha abstrakt metodlarni realizatsiya qilishi shart.",
      "cleanCode": "abstract class AbstractDeposit {\n    public abstract ... calculateMonthlyInterest(...);\n}\nclass FixedTermDeposit extends AbstractDeposit {\n    @Override\n    public ... calculateMonthlyInterest(...) { ... }\n}",
      "breakdown": [
        "<code>AbstractDeposit</code>: abstrakt baza sinf.",
        "<code>FixedTermDeposit</code>: aniq voris sinf."
      ]
    }
  },
  {
    "id": 28,
    "tier": 2,
    "tierName": "2-Bosqich: Abstrakt Sinflar (abstract class) va Abstrakt Metodlar",
    "sector": "16-30: Abstract Classes & Abstract Methods",
    "title": {
      "uz": "28. Beeline — Abstrakt Xizmat Paketi (AbstractServicePack)",
      "en": "28. Beeline — Abstract Telecom Service Package"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nBeeline rouming yoki internet to'plamlari 'AbstractServicePack' dan keladi. 'RoamingPack' vorisi 'getDurationDays()' abstrakt metodini 30 kun qilib qaytaradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'AbstractServicePack' abstrakt sinfini e'lon qiling ('abstract class').\n2. Unda 'getDurationDays(...)' abstrakt metodini tanasiz e'lon qiling ('abstract ...;').\n3. 'RoamingPack' voris sinfini 'extends AbstractServicePack' orqali bog'lang.\n4. Voris sinfda 'getDurationDays(...)' metodini to'liq (@Override) realizatsiya qiling.\n5. 'Main' metodida polimorfik ob'yekt yaratib natijani chop eting: 'AbstractServicePack pack = new RoamingPack(\"Turkiya Rouming\", 150000.0);         System.out.println(pack.getPackName() + \" amal qilish muddati: \" + pack.getDurationDays() + \" kun\");'",
      "en": "📖 Real-World Scenario & Context\nImplement AbstractServicePack with abstract getDurationDays() realized by RoamingPack.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare abstract superclass 'AbstractServicePack'.\n2. Declare abstract method 'getDurationDays(...)' without body.\n3. Create concrete subclass 'RoamingPack' extending 'AbstractServicePack'.\n4. Override and implement 'getDurationDays(...)' in child class.\n5. Verify in 'main': 'AbstractServicePack pack = new RoamingPack(\"Turkiya Rouming\", 150000.0);         System.out.println(pack.getPackName() + \" amal qilish muddati: \" + pack.getDurationDays() + \" kun\");'"
    },
    "requirements": {
      "classes": [
        "AbstractServicePack",
        "RoamingPack",
        "Main"
      ],
      "methods": [
        "getDurationDays"
      ],
      "keywords": [
        "abstract",
        "extends"
      ]
    },
    "starterCode": "// Abstrakt sinf va uning vorisini yozing\nabstract class AbstractServicePack {\n}\n\nclass RoamingPack extends AbstractServicePack {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractServicePack pack = new RoamingPack(\"Turkiya Rouming\", 150000.0);\n        System.out.println(pack.getPackName() + \" amal qilish muddati: \" + pack.getDurationDays() + \" kun\");\n    }\n}",
    "solution": "abstract class AbstractServicePack {\n    private String packName;\n    protected double price;\n    public AbstractServicePack(String n, double p) { this.packName = n; this.price = p; }\n    public String getPackName() { return packName; }\n    public abstract int getDurationDays();\n}\n\nclass RoamingPack extends AbstractServicePack {\n    public RoamingPack(String n, double p) { super(n, p); }\n    @Override\n    public int getDurationDays() { return 30; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractServicePack pack = new RoamingPack(\"Turkiya Rouming\", 150000.0);\n        System.out.println(pack.getPackName() + \" amal qilish muddati: \" + pack.getDurationDays() + \" kun\");\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinflar bevosita 'new' orqali ob'yekt ololmaydi. Ular umumiy oila uchun andaza bo'lib, barcha vorislar uchun umumiy maydonlar va abstrakt metod shartnomalarini taqdim etadi. Har bir non-abstract voris barcha abstrakt metodlarni realizatsiya qilishi shart.",
      "cleanCode": "abstract class AbstractServicePack {\n    public abstract ... getDurationDays(...);\n}\nclass RoamingPack extends AbstractServicePack {\n    @Override\n    public ... getDurationDays(...) { ... }\n}",
      "breakdown": [
        "<code>AbstractServicePack</code>: abstrakt baza sinf.",
        "<code>RoamingPack</code>: aniq voris sinf."
      ]
    }
  },
  {
    "id": 29,
    "tier": 2,
    "tierName": "2-Bosqich: Abstrakt Sinflar (abstract class) va Abstrakt Metodlar",
    "sector": "16-30: Abstract Classes & Abstract Methods",
    "title": {
      "uz": "29. UzAirways — Abstrakt Aviachipta Klassi (AbstractTicket)",
      "en": "29. UzAirways — Abstract Flight Ticket Baggage Allowance"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nUzAirways da barcha chiptalar 'AbstractTicket' ga asoslanadi. 'BusinessClassTicket' vorisida 'getBaggageAllowanceKg()' abstrakt metodi 40 kg yuk limitini qaytaradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'AbstractTicket' abstrakt sinfini e'lon qiling ('abstract class').\n2. Unda 'getBaggageAllowanceKg(...)' abstrakt metodini tanasiz e'lon qiling ('abstract ...;').\n3. 'BusinessClassTicket' voris sinfini 'extends AbstractTicket' orqali bog'lang.\n4. Voris sinfda 'getBaggageAllowanceKg(...)' metodini to'liq (@Override) realizatsiya qiling.\n5. 'Main' metodida polimorfik ob'yekt yaratib natijani chop eting: 'AbstractTicket ticket = new BusinessClassTicket(\"HY-271\", 4500000.0);         System.out.println(\"Yuk limiti: \" + ticket.getBaggageAllowanceKg() + \" kg\");'",
      "en": "📖 Real-World Scenario & Context\nDeclare AbstractTicket with abstract getBaggageAllowanceKg() implemented by BusinessClassTicket.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare abstract superclass 'AbstractTicket'.\n2. Declare abstract method 'getBaggageAllowanceKg(...)' without body.\n3. Create concrete subclass 'BusinessClassTicket' extending 'AbstractTicket'.\n4. Override and implement 'getBaggageAllowanceKg(...)' in child class.\n5. Verify in 'main': 'AbstractTicket ticket = new BusinessClassTicket(\"HY-271\", 4500000.0);         System.out.println(\"Yuk limiti: \" + ticket.getBaggageAllowanceKg() + \" kg\");'"
    },
    "requirements": {
      "classes": [
        "AbstractTicket",
        "BusinessClassTicket",
        "Main"
      ],
      "methods": [
        "getBaggageAllowanceKg"
      ],
      "keywords": [
        "abstract",
        "extends"
      ]
    },
    "starterCode": "// Abstrakt sinf va uning vorisini yozing\nabstract class AbstractTicket {\n}\n\nclass BusinessClassTicket extends AbstractTicket {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractTicket ticket = new BusinessClassTicket(\"HY-271\", 4500000.0);\n        System.out.println(\"Yuk limiti: \" + ticket.getBaggageAllowanceKg() + \" kg\");\n    }\n}",
    "solution": "abstract class AbstractTicket {\n    protected String flight;\n    protected double price;\n    public AbstractTicket(String f, double p) { this.flight = f; this.price = p; }\n    public abstract int getBaggageAllowanceKg();\n}\n\nclass BusinessClassTicket extends AbstractTicket {\n    public BusinessClassTicket(String f, double p) { super(f, p); }\n    @Override\n    public int getBaggageAllowanceKg() { return 40; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractTicket ticket = new BusinessClassTicket(\"HY-271\", 4500000.0);\n        System.out.println(\"Yuk limiti: \" + ticket.getBaggageAllowanceKg() + \" kg\");\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinflar bevosita 'new' orqali ob'yekt ololmaydi. Ular umumiy oila uchun andaza bo'lib, barcha vorislar uchun umumiy maydonlar va abstrakt metod shartnomalarini taqdim etadi. Har bir non-abstract voris barcha abstrakt metodlarni realizatsiya qilishi shart.",
      "cleanCode": "abstract class AbstractTicket {\n    public abstract ... getBaggageAllowanceKg(...);\n}\nclass BusinessClassTicket extends AbstractTicket {\n    @Override\n    public ... getBaggageAllowanceKg(...) { ... }\n}",
      "breakdown": [
        "<code>AbstractTicket</code>: abstrakt baza sinf.",
        "<code>BusinessClassTicket</code>: aniq voris sinf."
      ]
    }
  },
  {
    "id": 30,
    "tier": 2,
    "tierName": "2-Bosqich: Abstrakt Sinflar (abstract class) va Abstrakt Metodlar",
    "sector": "16-30: Abstract Classes & Abstract Methods",
    "title": {
      "uz": "30. WIUT SRS — Abstrakt Kurs Topshirig'i (AbstractAssessment)",
      "en": "30. WIUT SRS — Abstract Coursework Weight Assessment"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT modul baholari 'AbstractAssessment' ga asoslanadi. Undagi 'getWeightPercent()' abstrakt metodi 'CourseworkAssessment' da 50% vaznni qaytaradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'AbstractAssessment' abstrakt sinfini e'lon qiling ('abstract class').\n2. Unda 'getWeightPercent(...)' abstrakt metodini tanasiz e'lon qiling ('abstract ...;').\n3. 'CourseworkAssessment' voris sinfini 'extends AbstractAssessment' orqali bog'lang.\n4. Voris sinfda 'getWeightPercent(...)' metodini to'liq (@Override) realizatsiya qiling.\n5. 'Main' metodida polimorfik ob'yekt yaratib natijani chop eting: 'AbstractAssessment cw = new CourseworkAssessment(\"OOP CW2 Group Project\");         System.out.println(cw.getTitle() + \" ulushi: \" + cw.getWeightPercent() + \"%\");'",
      "en": "📖 Real-World Scenario & Context\nDefine AbstractAssessment requiring getWeightPercent() implemented in CourseworkAssessment.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare abstract superclass 'AbstractAssessment'.\n2. Declare abstract method 'getWeightPercent(...)' without body.\n3. Create concrete subclass 'CourseworkAssessment' extending 'AbstractAssessment'.\n4. Override and implement 'getWeightPercent(...)' in child class.\n5. Verify in 'main': 'AbstractAssessment cw = new CourseworkAssessment(\"OOP CW2 Group Project\");         System.out.println(cw.getTitle() + \" ulushi: \" + cw.getWeightPercent() + \"%\");'"
    },
    "requirements": {
      "classes": [
        "AbstractAssessment",
        "CourseworkAssessment",
        "Main"
      ],
      "methods": [
        "getWeightPercent"
      ],
      "keywords": [
        "abstract",
        "extends"
      ]
    },
    "starterCode": "// Abstrakt sinf va uning vorisini yozing\nabstract class AbstractAssessment {\n}\n\nclass CourseworkAssessment extends AbstractAssessment {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractAssessment cw = new CourseworkAssessment(\"OOP CW2 Group Project\");\n        System.out.println(cw.getTitle() + \" ulushi: \" + cw.getWeightPercent() + \"%\");\n    }\n}",
    "solution": "abstract class AbstractAssessment {\n    private String title;\n    public AbstractAssessment(String t) { this.title = t; }\n    public String getTitle() { return title; }\n    public abstract int getWeightPercent();\n}\n\nclass CourseworkAssessment extends AbstractAssessment {\n    public CourseworkAssessment(String t) { super(t); }\n    @Override\n    public int getWeightPercent() { return 50; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractAssessment cw = new CourseworkAssessment(\"OOP CW2 Group Project\");\n        System.out.println(cw.getTitle() + \" ulushi: \" + cw.getWeightPercent() + \"%\");\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinflar bevosita 'new' orqali ob'yekt ololmaydi. Ular umumiy oila uchun andaza bo'lib, barcha vorislar uchun umumiy maydonlar va abstrakt metod shartnomalarini taqdim etadi. Har bir non-abstract voris barcha abstrakt metodlarni realizatsiya qilishi shart.",
      "cleanCode": "abstract class AbstractAssessment {\n    public abstract ... getWeightPercent(...);\n}\nclass CourseworkAssessment extends AbstractAssessment {\n    @Override\n    public ... getWeightPercent(...) { ... }\n}",
      "breakdown": [
        "<code>AbstractAssessment</code>: abstrakt baza sinf.",
        "<code>CourseworkAssessment</code>: aniq voris sinf."
      ]
    }
  },
  {
    "id": 31,
    "tier": 3,
    "tierName": "3-Bosqich: Abstrakt Sinflarda Konstruktorlar va Himoyalangan (protected) A'zolar",
    "sector": "31-45: Abstract Class Constructors, State & Helpers",
    "title": {
      "uz": "31. Uzum Market — Abstrakt Sinfda Yaxlitlash Yordamchisi (roundToTwoDecimals)",
      "en": "31. Uzum Market — Protected Helper Method in Abstract Product"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT 6-hafta 'Product.java' yechimida ko'rsatilganidek: 'protected double roundToTwoDecimals(double value)' metodi faqat sinf oilasi (vorislar) foydalanishi uchun berilgan. 'AbstractItem' dan voris oling va 12% QQS ni 2 xona aniqlikda hisoblang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'AbstractItem' abstrakt sinfini yarating va 'protected' maydon yoki yordamchi metod bering.\n2. Abstrakt sinf konstruktorini taqdim eting.\n3. 'RetailGood' voris sinfida 'super(...)' orqali ota konstruktorni chaqiring.\n4. 'getPriceWithTax(...)' metodida himoyalangan a'zodan foydalanib hisob-kitob qiling.\n5. 'Main' metodida tekshiring: 'AbstractItem item = new RetailGood(\"Naushnik\", 149999.5);         System.out.println(\"QQS bilan narx: \" + item.getPriceWithTax() + \" UZS\");'",
      "en": "📖 Real-World Scenario & Context\nUse protected helper method roundToTwoDecimals in abstract class hierarchy matching Week 6 Product.java.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare abstract class 'AbstractItem' with protected fields or helper methods.\n2. Provide superclass constructor.\n3. In 'RetailGood', invoke super(...) constructor.\n4. Implement 'getPriceWithTax(...)' utilizing protected members.\n5. Verify execution in 'main': 'AbstractItem item = new RetailGood(\"Naushnik\", 149999.5);         System.out.println(\"QQS bilan narx: \" + item.getPriceWithTax() + \" UZS\");'"
    },
    "requirements": {
      "classes": [
        "AbstractItem",
        "RetailGood",
        "Main"
      ],
      "methods": [
        "getPriceWithTax"
      ],
      "keywords": [
        "abstract",
        "extends",
        "protected"
      ]
    },
    "starterCode": "// Protected maydon va yordamchi metodli abstrakt sinf tuzing\nabstract class AbstractItem {\n}\n\nclass RetailGood extends AbstractItem {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractItem item = new RetailGood(\"Naushnik\", 149999.5);\n        System.out.println(\"QQS bilan narx: \" + item.getPriceWithTax() + \" UZS\");\n    }\n}",
    "solution": "abstract class AbstractItem {\n    protected String name;\n    protected double price;\n    public AbstractItem(String n, double p) { this.name = n; this.price = p; }\n    protected double roundToTwoDecimals(double val) { return Math.round(val * 100.0) / 100.0; }\n    public abstract double getPriceWithTax();\n}\n\nclass RetailGood extends AbstractItem {\n    public RetailGood(String n, double p) { super(n, p); }\n    @Override\n    public double getPriceWithTax() { return roundToTwoDecimals(price * 1.12); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractItem item = new RetailGood(\"Naushnik\", 149999.5);\n        System.out.println(\"QQS bilan narx: \" + item.getPriceWithTax() + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinflar interfeyslardan farqli ravishda ob'yekt holatini (state) saqlay oladi. Himoyalangan ('protected') a'zolar tashqi kod uchun yopiq, lekin sinf oilasi (vorislar) uchun ochiq yordamchi funksiyalardir (masalan, Product dagi roundToTwoDecimals).",
      "cleanCode": "abstract class AbstractItem {\n    protected double ...;\n    protected double roundToTwoDecimals(double v) { ... }\n}",
      "breakdown": [
        "<code>AbstractItem</code>: protected a'zolarga ega abstrakt sinf.",
        "<code>RetailGood</code>: super(...) bilan bog'langan voris sinf."
      ]
    }
  },
  {
    "id": 32,
    "tier": 3,
    "tierName": "3-Bosqich: Abstrakt Sinflarda Konstruktorlar va Himoyalangan (protected) A'zolar",
    "sector": "31-45: Abstract Class Constructors, State & Helpers",
    "title": {
      "uz": "32. Payme — Abstrakt Hamyonda Himoyalangan Qoldiq Tekshiruvi",
      "en": "32. Payme — Protected Balance Verification in Abstract Wallet"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nPayme 'BaseWallet' abstrakt sinfida 'protected double balance' maydoni va 'protected boolean canDeduct(double amt)' yordamchi metodi berilgan. 'UserWallet' vorisida to'lovni tasdiqlang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'BaseWallet' abstrakt sinfini yarating va 'protected' maydon yoki yordamchi metod bering.\n2. Abstrakt sinf konstruktorini taqdim eting.\n3. 'UserWallet' voris sinfida 'super(...)' orqali ota konstruktorni chaqiring.\n4. 'makePayment(...)' metodida himoyalangan a'zodan foydalanib hisob-kitob qiling.\n5. 'Main' metodida tekshiring: 'BaseWallet wallet = new UserWallet(250000.0);         boolean res = wallet.makePayment(100000.0);         System.out.println(\"To'lov qilindi: \" + res + \" | Qoldiq: \" + wallet.getBalance() + \" UZS\");'",
      "en": "📖 Real-World Scenario & Context\nSubclass BaseWallet utilizing protected state and deduction verification method.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare abstract class 'BaseWallet' with protected fields or helper methods.\n2. Provide superclass constructor.\n3. In 'UserWallet', invoke super(...) constructor.\n4. Implement 'makePayment(...)' utilizing protected members.\n5. Verify execution in 'main': 'BaseWallet wallet = new UserWallet(250000.0);         boolean res = wallet.makePayment(100000.0);         System.out.println(\"To'lov qilindi: \" + res + \" | Qoldiq: \" + wallet.getBalance() + \" UZS\");'"
    },
    "requirements": {
      "classes": [
        "BaseWallet",
        "UserWallet",
        "Main"
      ],
      "methods": [
        "makePayment"
      ],
      "keywords": [
        "abstract",
        "extends",
        "protected"
      ]
    },
    "starterCode": "// Protected maydon va yordamchi metodli abstrakt sinf tuzing\nabstract class BaseWallet {\n}\n\nclass UserWallet extends BaseWallet {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseWallet wallet = new UserWallet(250000.0);\n        boolean res = wallet.makePayment(100000.0);\n        System.out.println(\"To'lov qilindi: \" + res + \" | Qoldiq: \" + wallet.getBalance() + \" UZS\");\n    }\n}",
    "solution": "abstract class BaseWallet {\n    protected double balance;\n    public BaseWallet(double bal) { this.balance = bal; }\n    public double getBalance() { return balance; }\n    protected boolean canDeduct(double amt) { return amt > 0 && amt <= balance; }\n    public abstract boolean makePayment(double amt);\n}\n\nclass UserWallet extends BaseWallet {\n    public UserWallet(double bal) { super(bal); }\n    @Override\n    public boolean makePayment(double amt) {\n        if (canDeduct(amt)) { balance -= amt; return true; }\n        return false;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseWallet wallet = new UserWallet(250000.0);\n        boolean res = wallet.makePayment(100000.0);\n        System.out.println(\"To'lov qilindi: \" + res + \" | Qoldiq: \" + wallet.getBalance() + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinflar interfeyslardan farqli ravishda ob'yekt holatini (state) saqlay oladi. Himoyalangan ('protected') a'zolar tashqi kod uchun yopiq, lekin sinf oilasi (vorislar) uchun ochiq yordamchi funksiyalardir (masalan, Product dagi roundToTwoDecimals).",
      "cleanCode": "abstract class BaseWallet {\n    protected double ...;\n    protected double roundToTwoDecimals(double v) { ... }\n}",
      "breakdown": [
        "<code>BaseWallet</code>: protected a'zolarga ega abstrakt sinf.",
        "<code>UserWallet</code>: super(...) bilan bog'langan voris sinf."
      ]
    }
  },
  {
    "id": 33,
    "tier": 3,
    "tierName": "3-Bosqich: Abstrakt Sinflarda Konstruktorlar va Himoyalangan (protected) A'zolar",
    "sector": "31-45: Abstract Class Constructors, State & Helpers",
    "title": {
      "uz": "33. Korzinka — Abstrakt Konstruktorda super(...) Initsializatsiyasi",
      "en": "33. Korzinka — Super Constructor Chaining in Abstract Loyalty Program"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nLeksiyada: 'Abstrakt sinflar bevosita new qilinmasa ham, ularda konstruktor bo'ladi va vorislar super(...) orqali uni chaqiradi'. Korzinka 'BaseLoyalty' konstruktori orqali karta egasi va ballarini o'rnating.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'BaseLoyalty' abstrakt sinfini yarating va 'protected' maydon yoki yordamchi metod bering.\n2. Abstrakt sinf konstruktorini taqdim eting.\n3. 'ClubCard' voris sinfida 'super(...)' orqali ota konstruktorni chaqiring.\n4. 'getLoyaltySummary(...)' metodida himoyalangan a'zodan foydalanib hisob-kitob qiling.\n5. 'Main' metodida tekshiring: 'BaseLoyalty card = new ClubCard(\"Nodirbek\", 450);         System.out.println(card.getLoyaltySummary());'",
      "en": "📖 Real-World Scenario & Context\nInvoke abstract class constructor with super(...) initializing shared loyalty fields.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare abstract class 'BaseLoyalty' with protected fields or helper methods.\n2. Provide superclass constructor.\n3. In 'ClubCard', invoke super(...) constructor.\n4. Implement 'getLoyaltySummary(...)' utilizing protected members.\n5. Verify execution in 'main': 'BaseLoyalty card = new ClubCard(\"Nodirbek\", 450);         System.out.println(card.getLoyaltySummary());'"
    },
    "requirements": {
      "classes": [
        "BaseLoyalty",
        "ClubCard",
        "Main"
      ],
      "methods": [
        "getLoyaltySummary"
      ],
      "keywords": [
        "abstract",
        "extends",
        "protected"
      ]
    },
    "starterCode": "// Protected maydon va yordamchi metodli abstrakt sinf tuzing\nabstract class BaseLoyalty {\n}\n\nclass ClubCard extends BaseLoyalty {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseLoyalty card = new ClubCard(\"Nodirbek\", 450);\n        System.out.println(card.getLoyaltySummary());\n    }\n}",
    "solution": "abstract class BaseLoyalty {\n    protected String holder;\n    protected int points;\n    public BaseLoyalty(String h, int p) { this.holder = h; this.points = p; }\n    public String getLoyaltySummary() { return \"Mijoz: \" + holder + \" | Ballar: \" + points; }\n}\n\nclass ClubCard extends BaseLoyalty {\n    public ClubCard(String h, int p) { super(h, p); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseLoyalty card = new ClubCard(\"Nodirbek\", 450);\n        System.out.println(card.getLoyaltySummary());\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinflar interfeyslardan farqli ravishda ob'yekt holatini (state) saqlay oladi. Himoyalangan ('protected') a'zolar tashqi kod uchun yopiq, lekin sinf oilasi (vorislar) uchun ochiq yordamchi funksiyalardir (masalan, Product dagi roundToTwoDecimals).",
      "cleanCode": "abstract class BaseLoyalty {\n    protected double ...;\n    protected double roundToTwoDecimals(double v) { ... }\n}",
      "breakdown": [
        "<code>BaseLoyalty</code>: protected a'zolarga ega abstrakt sinf.",
        "<code>ClubCard</code>: super(...) bilan bog'langan voris sinf."
      ]
    }
  },
  {
    "id": 34,
    "tier": 3,
    "tierName": "3-Bosqich: Abstrakt Sinflar (abstract class) va Abstrakt Metodlar",
    "sector": "31-45: Abstract Class Constructors, State & Helpers",
    "title": {
      "uz": "34. Yandex Go — Abstrakt Sinfda Umumiy va Abstrakt Metodlar Birga Kelishi",
      "en": "34. Yandex Go — Concrete and Abstract Methods Coexisting"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT 6-leksiyasida aytilganidek: 'An abstract class can include both abstract and non-abstract methods'. 'BaseRide' da umumiy 'printReceipt()' aniq metodi va 'calculateFare()' abstrakt metodi mavjud.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'BaseRide' abstrakt sinfini yarating va 'protected' maydon yoki yordamchi metod bering.\n2. Abstrakt sinf konstruktorini taqdim eting.\n3. 'ExpressTaxi' voris sinfida 'super(...)' orqali ota konstruktorni chaqiring.\n4. 'calculateFare(...)' metodida himoyalangan a'zodan foydalanib hisob-kitob qiling.\n5. 'Main' metodida tekshiring: 'BaseRide ride = new ExpressTaxi(15.0);         ride.printReceipt();         System.out.println(\"Yakuniy narx: \" + ride.calculateFare() + \" UZS\");'",
      "en": "📖 Real-World Scenario & Context\nDemonstrate abstract class holding both concrete helper methods and abstract operations.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare abstract class 'BaseRide' with protected fields or helper methods.\n2. Provide superclass constructor.\n3. In 'ExpressTaxi', invoke super(...) constructor.\n4. Implement 'calculateFare(...)' utilizing protected members.\n5. Verify execution in 'main': 'BaseRide ride = new ExpressTaxi(15.0);         ride.printReceipt();         System.out.println(\"Yakuniy narx: \" + ride.calculateFare() + \" UZS\");'"
    },
    "requirements": {
      "classes": [
        "BaseRide",
        "ExpressTaxi",
        "Main"
      ],
      "methods": [
        "calculateFare"
      ],
      "keywords": [
        "abstract",
        "extends",
        "protected"
      ]
    },
    "starterCode": "// Protected maydon va yordamchi metodli abstrakt sinf tuzing\nabstract class BaseRide {\n}\n\nclass ExpressTaxi extends BaseRide {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseRide ride = new ExpressTaxi(15.0);\n        ride.printReceipt();\n        System.out.println(\"Yakuniy narx: \" + ride.calculateFare() + \" UZS\");\n    }\n}",
    "solution": "abstract class BaseRide {\n    protected double km;\n    public BaseRide(double km) { this.km = km; }\n    public void printReceipt() { System.out.println(\"Safar hisoblanmoqda...\"); }\n    public abstract double calculateFare();\n}\n\nclass ExpressTaxi extends BaseRide {\n    public ExpressTaxi(double km) { super(km); }\n    @Override\n    public double calculateFare() { return km * 3000.0; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseRide ride = new ExpressTaxi(15.0);\n        ride.printReceipt();\n        System.out.println(\"Yakuniy narx: \" + ride.calculateFare() + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinflar interfeyslardan farqli ravishda ob'yekt holatini (state) saqlay oladi. Himoyalangan ('protected') a'zolar tashqi kod uchun yopiq, lekin sinf oilasi (vorislar) uchun ochiq yordamchi funksiyalardir (masalan, Product dagi roundToTwoDecimals).",
      "cleanCode": "abstract class BaseRide {\n    protected double ...;\n    protected double roundToTwoDecimals(double v) { ... }\n}",
      "breakdown": [
        "<code>BaseRide</code>: protected a'zolarga ega abstrakt sinf.",
        "<code>ExpressTaxi</code>: super(...) bilan bog'langan voris sinf."
      ]
    }
  },
  {
    "id": 35,
    "tier": 3,
    "tierName": "3-Bosqich: Abstrakt Sinflarda Konstruktorlar va Himoyalangan (protected) A'zolar",
    "sector": "31-45: Abstract Class Constructors, State & Helpers",
    "title": {
      "uz": "35. Click — Avtomatik Tranzaksiya ID si va Himoyalangan Konstruktor",
      "en": "35. Click — Transaction ID Generator in Abstract Base"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nClick 'BaseTransaction' abstrakt sinfi har bir tranzaksiyaga avtomatik tartib raqam ('TXN-101') generatsiya qiluvchi protected konstruktorga ega. 'MerchantPayment' orqali uni chaqiring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'BaseTransaction' abstrakt sinfini yarating va 'protected' maydon yoki yordamchi metod bering.\n2. Abstrakt sinf konstruktorini taqdim eting.\n3. 'MerchantPayment' voris sinfida 'super(...)' orqali ota konstruktorni chaqiring.\n4. 'getTransactionReceipt(...)' metodida himoyalangan a'zodan foydalanib hisob-kitob qiling.\n5. 'Main' metodida tekshiring: 'BaseTransaction tx = new MerchantPayment(101, 80000.0);         System.out.println(tx.getTransactionReceipt());'",
      "en": "📖 Real-World Scenario & Context\nAbstract superclass auto-generates transaction IDs in its protected constructor.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare abstract class 'BaseTransaction' with protected fields or helper methods.\n2. Provide superclass constructor.\n3. In 'MerchantPayment', invoke super(...) constructor.\n4. Implement 'getTransactionReceipt(...)' utilizing protected members.\n5. Verify execution in 'main': 'BaseTransaction tx = new MerchantPayment(101, 80000.0);         System.out.println(tx.getTransactionReceipt());'"
    },
    "requirements": {
      "classes": [
        "BaseTransaction",
        "MerchantPayment",
        "Main"
      ],
      "methods": [
        "getTransactionReceipt"
      ],
      "keywords": [
        "abstract",
        "extends",
        "protected"
      ]
    },
    "starterCode": "// Protected maydon va yordamchi metodli abstrakt sinf tuzing\nabstract class BaseTransaction {\n}\n\nclass MerchantPayment extends BaseTransaction {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseTransaction tx = new MerchantPayment(101, 80000.0);\n        System.out.println(tx.getTransactionReceipt());\n    }\n}",
    "solution": "abstract class BaseTransaction {\n    protected String txId;\n    protected double amount;\n    protected BaseTransaction(int seq, double amt) {\n        this.txId = \"TXN-\" + seq;\n        this.amount = amt;\n    }\n    public abstract String getTransactionReceipt();\n}\n\nclass MerchantPayment extends BaseTransaction {\n    public MerchantPayment(int seq, double amt) { super(seq, amt); }\n    @Override\n    public String getTransactionReceipt() { return \"Chek \" + txId + \": \" + amount + \" UZS to'landi\"; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseTransaction tx = new MerchantPayment(101, 80000.0);\n        System.out.println(tx.getTransactionReceipt());\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinflar interfeyslardan farqli ravishda ob'yekt holatini (state) saqlay oladi. Himoyalangan ('protected') a'zolar tashqi kod uchun yopiq, lekin sinf oilasi (vorislar) uchun ochiq yordamchi funksiyalardir (masalan, Product dagi roundToTwoDecimals).",
      "cleanCode": "abstract class BaseTransaction {\n    protected double ...;\n    protected double roundToTwoDecimals(double v) { ... }\n}",
      "breakdown": [
        "<code>BaseTransaction</code>: protected a'zolarga ega abstrakt sinf.",
        "<code>MerchantPayment</code>: super(...) bilan bog'langan voris sinf."
      ]
    }
  },
  {
    "id": 36,
    "tier": 3,
    "tierName": "3-Bosqich: Abstrakt Sinflarda Konstruktorlar va Himoyalangan (protected) A'zolar",
    "sector": "31-45: Abstract Class Constructors, State & Helpers",
    "title": {
      "uz": "36. Safia — Himoyalangan Ustama (Markup) Formulali Abstrakt Desert",
      "en": "36. Safia — Protected Pricing Formula in Abstract Pastry"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSafia 'AbstractPastry' sinfida 'protected double applyStandardMarkup(double cost)' metodi mavjud bo'lib, u xomashyo narxiga 30% ustama qo'shadi. 'Eclair' vorisida sotuv narxini chiqaring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'AbstractPastry' abstrakt sinfini yarating va 'protected' maydon yoki yordamchi metod bering.\n2. Abstrakt sinf konstruktorini taqdim eting.\n3. 'Eclair' voris sinfida 'super(...)' orqali ota konstruktorni chaqiring.\n4. 'calculateRetailPrice(...)' metodida himoyalangan a'zodan foydalanib hisob-kitob qiling.\n5. 'Main' metodida tekshiring: 'AbstractPastry p = new Eclair(\"Shokoladli Ekler\", 15000.0);         System.out.println(\"Sotuv narxi: \" + p.calculateRetailPrice() + \" UZS\");'",
      "en": "📖 Real-World Scenario & Context\nUse protected markup method inside subclass to compute retail pastry pricing.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare abstract class 'AbstractPastry' with protected fields or helper methods.\n2. Provide superclass constructor.\n3. In 'Eclair', invoke super(...) constructor.\n4. Implement 'calculateRetailPrice(...)' utilizing protected members.\n5. Verify execution in 'main': 'AbstractPastry p = new Eclair(\"Shokoladli Ekler\", 15000.0);         System.out.println(\"Sotuv narxi: \" + p.calculateRetailPrice() + \" UZS\");'"
    },
    "requirements": {
      "classes": [
        "AbstractPastry",
        "Eclair",
        "Main"
      ],
      "methods": [
        "calculateRetailPrice"
      ],
      "keywords": [
        "abstract",
        "extends",
        "protected"
      ]
    },
    "starterCode": "// Protected maydon va yordamchi metodli abstrakt sinf tuzing\nabstract class AbstractPastry {\n}\n\nclass Eclair extends AbstractPastry {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractPastry p = new Eclair(\"Shokoladli Ekler\", 15000.0);\n        System.out.println(\"Sotuv narxi: \" + p.calculateRetailPrice() + \" UZS\");\n    }\n}",
    "solution": "abstract class AbstractPastry {\n    protected String name;\n    protected double costPrice;\n    public AbstractPastry(String n, double c) { this.name = n; this.costPrice = c; }\n    protected double applyStandardMarkup(double cost) { return cost * 1.30; }\n    public abstract double calculateRetailPrice();\n}\n\nclass Eclair extends AbstractPastry {\n    public Eclair(String n, double c) { super(n, c); }\n    @Override\n    public double calculateRetailPrice() { return applyStandardMarkup(costPrice); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractPastry p = new Eclair(\"Shokoladli Ekler\", 15000.0);\n        System.out.println(\"Sotuv narxi: \" + p.calculateRetailPrice() + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinflar interfeyslardan farqli ravishda ob'yekt holatini (state) saqlay oladi. Himoyalangan ('protected') a'zolar tashqi kod uchun yopiq, lekin sinf oilasi (vorislar) uchun ochiq yordamchi funksiyalardir (masalan, Product dagi roundToTwoDecimals).",
      "cleanCode": "abstract class AbstractPastry {\n    protected double ...;\n    protected double roundToTwoDecimals(double v) { ... }\n}",
      "breakdown": [
        "<code>AbstractPastry</code>: protected a'zolarga ega abstrakt sinf.",
        "<code>Eclair</code>: super(...) bilan bog'langan voris sinf."
      ]
    }
  },
  {
    "id": 37,
    "tier": 3,
    "tierName": "3-Bosqich: Abstrakt Sinflarda Konstruktorlar va Himoyalangan (protected) A'zolar",
    "sector": "31-45: Abstract Class Constructors, State & Helpers",
    "title": {
      "uz": "37. Dodo Pizza — Abstrakt Buyurtmada Kolleksiyani Saqlash",
      "en": "37. Dodo Pizza — Encapsulated State in Abstract Order Base"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nDodo da 'AbstractOrder' sinfi ichida buyurtma qilingan pitssalar ro'yxatini saqlaydi va 'getItemCount()' aniq metodini beradi. 'DeliveryOrder' vorisida yangi buyurtma yarating.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'AbstractOrder' abstrakt sinfini yarating va 'protected' maydon yoki yordamchi metod bering.\n2. Abstrakt sinf konstruktorini taqdim eting.\n3. 'DeliveryOrder' voris sinfida 'super(...)' orqali ota konstruktorni chaqiring.\n4. 'getItemCount(...)' metodida himoyalangan a'zodan foydalanib hisob-kitob qiling.\n5. 'Main' metodida tekshiring: 'AbstractOrder ord = new DeliveryOrder(\"ORD-55\");         ord.addItem(\"Margarita\");         ord.addItem(\"Qo'ziqorinli\");         System.out.println(\"Buyurtmadagi mahsulotlar: \" + ord.getItemCount() + \" dona\");'",
      "en": "📖 Real-World Scenario & Context\nAbstract base maintains private/protected items collection while child provides specific dispatch logic.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare abstract class 'AbstractOrder' with protected fields or helper methods.\n2. Provide superclass constructor.\n3. In 'DeliveryOrder', invoke super(...) constructor.\n4. Implement 'getItemCount(...)' utilizing protected members.\n5. Verify execution in 'main': 'AbstractOrder ord = new DeliveryOrder(\"ORD-55\");         ord.addItem(\"Margarita\");         ord.addItem(\"Qo'ziqorinli\");         System.out.println(\"Buyurtmadagi mahsulotlar: \" + ord.getItemCount() + \" dona\");'"
    },
    "requirements": {
      "classes": [
        "AbstractOrder",
        "DeliveryOrder",
        "Main"
      ],
      "methods": [
        "getItemCount"
      ],
      "keywords": [
        "abstract",
        "extends",
        "protected"
      ]
    },
    "starterCode": "// Protected maydon va yordamchi metodli abstrakt sinf tuzing\nabstract class AbstractOrder {\n}\n\nclass DeliveryOrder extends AbstractOrder {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractOrder ord = new DeliveryOrder(\"ORD-55\");\n        ord.addItem(\"Margarita\");\n        ord.addItem(\"Qo'ziqorinli\");\n        System.out.println(\"Buyurtmadagi mahsulotlar: \" + ord.getItemCount() + \" dona\");\n    }\n}",
    "solution": "import java.util.List;\nimport java.util.ArrayList;\n\nabstract class AbstractOrder {\n    protected String orderId;\n    protected List<String> items = new ArrayList<>();\n    public AbstractOrder(String id) { this.orderId = id; }\n    public void addItem(String it) { items.add(it); }\n    public int getItemCount() { return items.size(); }\n}\n\nclass DeliveryOrder extends AbstractOrder {\n    public DeliveryOrder(String id) { super(id); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractOrder ord = new DeliveryOrder(\"ORD-55\");\n        ord.addItem(\"Margarita\");\n        ord.addItem(\"Qo'ziqorinli\");\n        System.out.println(\"Buyurtmadagi mahsulotlar: \" + ord.getItemCount() + \" dona\");\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinflar interfeyslardan farqli ravishda ob'yekt holatini (state) saqlay oladi. Himoyalangan ('protected') a'zolar tashqi kod uchun yopiq, lekin sinf oilasi (vorislar) uchun ochiq yordamchi funksiyalardir (masalan, Product dagi roundToTwoDecimals).",
      "cleanCode": "abstract class AbstractOrder {\n    protected double ...;\n    protected double roundToTwoDecimals(double v) { ... }\n}",
      "breakdown": [
        "<code>AbstractOrder</code>: protected a'zolarga ega abstrakt sinf.",
        "<code>DeliveryOrder</code>: super(...) bilan bog'langan voris sinf."
      ]
    }
  },
  {
    "id": 38,
    "tier": 3,
    "tierName": "3-Bosqich: Abstrakt Sinflarda Konstruktorlar va Himoyalangan (protected) A'zolar",
    "sector": "31-45: Abstract Class Constructors, State & Helpers",
    "title": {
      "uz": "38. Texnomart — Himoyalangan Quvvat va Energiya Samaradorligi",
      "en": "38. Texnomart — Protected Energy Class Evaluation"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nTexnomart 'BaseAppliance' sinfida 'protected int powerWatts' saqlanadi. 'getEnergyClass()' aniq metodi 1000W dan past bo'lsa 'A++', aks holda 'A' qaytaradi. 'WashingMachine' vorisida tekshiring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'BaseAppliance' abstrakt sinfini yarating va 'protected' maydon yoki yordamchi metod bering.\n2. Abstrakt sinf konstruktorini taqdim eting.\n3. 'WashingMachine' voris sinfida 'super(...)' orqali ota konstruktorni chaqiring.\n4. 'getEnergyClass(...)' metodida himoyalangan a'zodan foydalanib hisob-kitob qiling.\n5. 'Main' metodida tekshiring: 'BaseAppliance app = new WashingMachine(\"LG Inverter\", 800);         System.out.println(app.getModel() + \" energiya klassi: \" + app.getEnergyClass());'",
      "en": "📖 Real-World Scenario & Context\nBaseAppliance evaluates energy rating using protected power fields.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare abstract class 'BaseAppliance' with protected fields or helper methods.\n2. Provide superclass constructor.\n3. In 'WashingMachine', invoke super(...) constructor.\n4. Implement 'getEnergyClass(...)' utilizing protected members.\n5. Verify execution in 'main': 'BaseAppliance app = new WashingMachine(\"LG Inverter\", 800);         System.out.println(app.getModel() + \" energiya klassi: \" + app.getEnergyClass());'"
    },
    "requirements": {
      "classes": [
        "BaseAppliance",
        "WashingMachine",
        "Main"
      ],
      "methods": [
        "getEnergyClass"
      ],
      "keywords": [
        "abstract",
        "extends",
        "protected"
      ]
    },
    "starterCode": "// Protected maydon va yordamchi metodli abstrakt sinf tuzing\nabstract class BaseAppliance {\n}\n\nclass WashingMachine extends BaseAppliance {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseAppliance app = new WashingMachine(\"LG Inverter\", 800);\n        System.out.println(app.getModel() + \" energiya klassi: \" + app.getEnergyClass());\n    }\n}",
    "solution": "abstract class BaseAppliance {\n    protected String model;\n    protected int powerWatts;\n    public BaseAppliance(String m, int p) { this.model = m; this.powerWatts = p; }\n    public String getModel() { return model; }\n    public String getEnergyClass() { return powerWatts < 1000 ? \"A++\" : \"A\"; }\n}\n\nclass WashingMachine extends BaseAppliance {\n    public WashingMachine(String m, int p) { super(m, p); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseAppliance app = new WashingMachine(\"LG Inverter\", 800);\n        System.out.println(app.getModel() + \" energiya klassi: \" + app.getEnergyClass());\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinflar interfeyslardan farqli ravishda ob'yekt holatini (state) saqlay oladi. Himoyalangan ('protected') a'zolar tashqi kod uchun yopiq, lekin sinf oilasi (vorislar) uchun ochiq yordamchi funksiyalardir (masalan, Product dagi roundToTwoDecimals).",
      "cleanCode": "abstract class BaseAppliance {\n    protected double ...;\n    protected double roundToTwoDecimals(double v) { ... }\n}",
      "breakdown": [
        "<code>BaseAppliance</code>: protected a'zolarga ega abstrakt sinf.",
        "<code>WashingMachine</code>: super(...) bilan bog'langan voris sinf."
      ]
    }
  },
  {
    "id": 39,
    "tier": 3,
    "tierName": "3-Bosqich: Abstrakt Sinflarda Konstruktorlar va Himoyalangan (protected) A'zolar",
    "sector": "31-45: Abstract Class Constructors, State & Helpers",
    "title": {
      "uz": "39. Medion — Himoyalangan Bemor Shaxsiy Karta Boshqaruvi",
      "en": "39. Medion — Protected Patient Identifier in Base Health Record"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nMedion 'BasePatientRecord' abstrakt sinfida 'protected String patientId' saqlanadi. 'OutpatientRecord' sinfida qabul vaqtini hisobga oluvchi shartnomani bajaring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'BasePatientRecord' abstrakt sinfini yarating va 'protected' maydon yoki yordamchi metod bering.\n2. Abstrakt sinf konstruktorini taqdim eting.\n3. 'OutpatientRecord' voris sinfida 'super(...)' orqali ota konstruktorni chaqiring.\n4. 'getRecordHeader(...)' metodida himoyalangan a'zodan foydalanib hisob-kitob qiling.\n5. 'Main' metodida tekshiring: 'BasePatientRecord rec = new OutpatientRecord(\"MED-994\", \"Rustamov D.\");         System.out.println(rec.getRecordHeader());'",
      "en": "📖 Real-World Scenario & Context\nManage patient identifiers safely via abstract superclass protected access.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare abstract class 'BasePatientRecord' with protected fields or helper methods.\n2. Provide superclass constructor.\n3. In 'OutpatientRecord', invoke super(...) constructor.\n4. Implement 'getRecordHeader(...)' utilizing protected members.\n5. Verify execution in 'main': 'BasePatientRecord rec = new OutpatientRecord(\"MED-994\", \"Rustamov D.\");         System.out.println(rec.getRecordHeader());'"
    },
    "requirements": {
      "classes": [
        "BasePatientRecord",
        "OutpatientRecord",
        "Main"
      ],
      "methods": [
        "getRecordHeader"
      ],
      "keywords": [
        "abstract",
        "extends",
        "protected"
      ]
    },
    "starterCode": "// Protected maydon va yordamchi metodli abstrakt sinf tuzing\nabstract class BasePatientRecord {\n}\n\nclass OutpatientRecord extends BasePatientRecord {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BasePatientRecord rec = new OutpatientRecord(\"MED-994\", \"Rustamov D.\");\n        System.out.println(rec.getRecordHeader());\n    }\n}",
    "solution": "abstract class BasePatientRecord {\n    protected String patientId;\n    protected String name;\n    public BasePatientRecord(String id, String n) { this.patientId = id; this.name = n; }\n    public String getRecordHeader() { return \"Karta \" + patientId + \" | Bemor: \" + name; }\n}\n\nclass OutpatientRecord extends BasePatientRecord {\n    public OutpatientRecord(String id, String n) { super(id, n); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BasePatientRecord rec = new OutpatientRecord(\"MED-994\", \"Rustamov D.\");\n        System.out.println(rec.getRecordHeader());\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinflar interfeyslardan farqli ravishda ob'yekt holatini (state) saqlay oladi. Himoyalangan ('protected') a'zolar tashqi kod uchun yopiq, lekin sinf oilasi (vorislar) uchun ochiq yordamchi funksiyalardir (masalan, Product dagi roundToTwoDecimals).",
      "cleanCode": "abstract class BasePatientRecord {\n    protected double ...;\n    protected double roundToTwoDecimals(double v) { ... }\n}",
      "breakdown": [
        "<code>BasePatientRecord</code>: protected a'zolarga ega abstrakt sinf.",
        "<code>OutpatientRecord</code>: super(...) bilan bog'langan voris sinf."
      ]
    }
  },
  {
    "id": 40,
    "tier": 3,
    "tierName": "3-Bosqich: Abstrakt Sinflarda Konstruktorlar va Himoyalangan (protected) A'zolar",
    "sector": "31-45: Abstract Class Constructors, State & Helpers",
    "title": {
      "uz": "40. Express24 — Abstrakt Marshrutda Masofa va Yoqilg'i Xarajati",
      "en": "40. Express24 — Distance State and Fuel Allowance Calculation"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nExpress24 'BaseRoute' abstrakt sinfi masofani saqlaydi va 'calculateFuelAllowance()' yordamchi metodi orqali har 10 km ga 8000 UZS yoqilg'i kompensatsiyasini aniqlaydi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'BaseRoute' abstrakt sinfini yarating va 'protected' maydon yoki yordamchi metod bering.\n2. Abstrakt sinf konstruktorini taqdim eting.\n3. 'CityDeliveryRoute' voris sinfida 'super(...)' orqali ota konstruktorni chaqiring.\n4. 'calculateFuelAllowance(...)' metodida himoyalangan a'zodan foydalanib hisob-kitob qiling.\n5. 'Main' metodida tekshiring: 'BaseRoute route = new CityDeliveryRoute(25.0);         System.out.println(\"Yoqilg'i kompensatsiyasi: \" + route.calculateFuelAllowance() + \" UZS\");'",
      "en": "📖 Real-World Scenario & Context\nBaseRoute stores route distance and calculates fuel allowance for subclasses.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare abstract class 'BaseRoute' with protected fields or helper methods.\n2. Provide superclass constructor.\n3. In 'CityDeliveryRoute', invoke super(...) constructor.\n4. Implement 'calculateFuelAllowance(...)' utilizing protected members.\n5. Verify execution in 'main': 'BaseRoute route = new CityDeliveryRoute(25.0);         System.out.println(\"Yoqilg'i kompensatsiyasi: \" + route.calculateFuelAllowance() + \" UZS\");'"
    },
    "requirements": {
      "classes": [
        "BaseRoute",
        "CityDeliveryRoute",
        "Main"
      ],
      "methods": [
        "calculateFuelAllowance"
      ],
      "keywords": [
        "abstract",
        "extends",
        "protected"
      ]
    },
    "starterCode": "// Protected maydon va yordamchi metodli abstrakt sinf tuzing\nabstract class BaseRoute {\n}\n\nclass CityDeliveryRoute extends BaseRoute {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseRoute route = new CityDeliveryRoute(25.0);\n        System.out.println(\"Yoqilg'i kompensatsiyasi: \" + route.calculateFuelAllowance() + \" UZS\");\n    }\n}",
    "solution": "abstract class BaseRoute {\n    protected double distanceKm;\n    public BaseRoute(double d) { this.distanceKm = d; }\n    public double calculateFuelAllowance() { return (distanceKm / 10.0) * 8000.0; }\n}\n\nclass CityDeliveryRoute extends BaseRoute {\n    public CityDeliveryRoute(double d) { super(d); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseRoute route = new CityDeliveryRoute(25.0);\n        System.out.println(\"Yoqilg'i kompensatsiyasi: \" + route.calculateFuelAllowance() + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinflar interfeyslardan farqli ravishda ob'yekt holatini (state) saqlay oladi. Himoyalangan ('protected') a'zolar tashqi kod uchun yopiq, lekin sinf oilasi (vorislar) uchun ochiq yordamchi funksiyalardir (masalan, Product dagi roundToTwoDecimals).",
      "cleanCode": "abstract class BaseRoute {\n    protected double ...;\n    protected double roundToTwoDecimals(double v) { ... }\n}",
      "breakdown": [
        "<code>BaseRoute</code>: protected a'zolarga ega abstrakt sinf.",
        "<code>CityDeliveryRoute</code>: super(...) bilan bog'langan voris sinf."
      ]
    }
  },
  {
    "id": 41,
    "tier": 3,
    "tierName": "3-Bosqich: Abstrakt Sinflarda Konstruktorlar va Himoyalangan (protected) A'zolar",
    "sector": "31-45: Abstract Class Constructors, State & Helpers",
    "title": {
      "uz": "41. Asaxiy — Abstrakt Media Nashrida ISBN Formatlash",
      "en": "41. Asaxiy — Catalog Formatting in Base Media Entity"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nAsaxiy 'BaseMediaItem' abstrakt sinfida kitob kodi va nomi formatlanadi. 'PrintedBook' sinfida sahifalar sonini qo'shib to'liq tavsif qaytaring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'BaseMediaItem' abstrakt sinfini yarating va 'protected' maydon yoki yordamchi metod bering.\n2. Abstrakt sinf konstruktorini taqdim eting.\n3. 'PrintedBook' voris sinfida 'super(...)' orqali ota konstruktorni chaqiring.\n4. 'getFormattedEntry(...)' metodida himoyalangan a'zodan foydalanib hisob-kitob qiling.\n5. 'Main' metodida tekshiring: 'BaseMediaItem b = new PrintedBook(\"Sariq Devni Minib\", \"978-9943\", 240);         System.out.println(b.getFormattedEntry());'",
      "en": "📖 Real-World Scenario & Context\nAbstract class encapsulates shared metadata formatting while child provides physical attributes.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare abstract class 'BaseMediaItem' with protected fields or helper methods.\n2. Provide superclass constructor.\n3. In 'PrintedBook', invoke super(...) constructor.\n4. Implement 'getFormattedEntry(...)' utilizing protected members.\n5. Verify execution in 'main': 'BaseMediaItem b = new PrintedBook(\"Sariq Devni Minib\", \"978-9943\", 240);         System.out.println(b.getFormattedEntry());'"
    },
    "requirements": {
      "classes": [
        "BaseMediaItem",
        "PrintedBook",
        "Main"
      ],
      "methods": [
        "getFormattedEntry"
      ],
      "keywords": [
        "abstract",
        "extends",
        "protected"
      ]
    },
    "starterCode": "// Protected maydon va yordamchi metodli abstrakt sinf tuzing\nabstract class BaseMediaItem {\n}\n\nclass PrintedBook extends BaseMediaItem {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseMediaItem b = new PrintedBook(\"Sariq Devni Minib\", \"978-9943\", 240);\n        System.out.println(b.getFormattedEntry());\n    }\n}",
    "solution": "abstract class BaseMediaItem {\n    protected String title;\n    protected String isbn;\n    public BaseMediaItem(String t, String i) { this.title = t; this.isbn = i; }\n    public abstract String getFormattedEntry();\n}\n\nclass PrintedBook extends BaseMediaItem {\n    private int pages;\n    public PrintedBook(String t, String i, int p) { super(t, i); this.pages = p; }\n    @Override\n    public String getFormattedEntry() { return \"Nashr: \" + title + \" [ISBN: \" + isbn + \"] | Sahifalar: \" + pages; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseMediaItem b = new PrintedBook(\"Sariq Devni Minib\", \"978-9943\", 240);\n        System.out.println(b.getFormattedEntry());\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinflar interfeyslardan farqli ravishda ob'yekt holatini (state) saqlay oladi. Himoyalangan ('protected') a'zolar tashqi kod uchun yopiq, lekin sinf oilasi (vorislar) uchun ochiq yordamchi funksiyalardir (masalan, Product dagi roundToTwoDecimals).",
      "cleanCode": "abstract class BaseMediaItem {\n    protected double ...;\n    protected double roundToTwoDecimals(double v) { ... }\n}",
      "breakdown": [
        "<code>BaseMediaItem</code>: protected a'zolarga ega abstrakt sinf.",
        "<code>PrintedBook</code>: super(...) bilan bog'langan voris sinf."
      ]
    }
  },
  {
    "id": 42,
    "tier": 3,
    "tierName": "3-Bosqich: Abstrakt Sinflarda Konstruktorlar va Himoyalangan (protected) A'zolar",
    "sector": "31-45: Abstract Class Constructors, State & Helpers",
    "title": {
      "uz": "42. Kapitalbank — Abstrakt Xizmatda Filial Kategoriya Boshqaruvi",
      "en": "42. Kapitalbank — Branch Categorization in Banking Service Hierarchy"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nKapitalbank 'BaseBankService' abstrakt sinfi filial kodi ('TASH-01') bilan ishlaydi va barcha xizmatlar uchun yagona filial nomini qaytaradi. 'CurrencyExchange' vorisini yozing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'BaseBankService' abstrakt sinfini yarating va 'protected' maydon yoki yordamchi metod bering.\n2. Abstrakt sinf konstruktorini taqdim eting.\n3. 'CurrencyExchange' voris sinfida 'super(...)' orqali ota konstruktorni chaqiring.\n4. 'getServiceSummary(...)' metodida himoyalangan a'zodan foydalanib hisob-kitob qiling.\n5. 'Main' metodida tekshiring: 'BaseBankService srv = new CurrencyExchange(\"TASH-01\", 12600.0);         System.out.println(srv.getServiceSummary());'",
      "en": "📖 Real-World Scenario & Context\nBaseBankService maintains branch context shared across currency and loan service classes.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare abstract class 'BaseBankService' with protected fields or helper methods.\n2. Provide superclass constructor.\n3. In 'CurrencyExchange', invoke super(...) constructor.\n4. Implement 'getServiceSummary(...)' utilizing protected members.\n5. Verify execution in 'main': 'BaseBankService srv = new CurrencyExchange(\"TASH-01\", 12600.0);         System.out.println(srv.getServiceSummary());'"
    },
    "requirements": {
      "classes": [
        "BaseBankService",
        "CurrencyExchange",
        "Main"
      ],
      "methods": [
        "getServiceSummary"
      ],
      "keywords": [
        "abstract",
        "extends",
        "protected"
      ]
    },
    "starterCode": "// Protected maydon va yordamchi metodli abstrakt sinf tuzing\nabstract class BaseBankService {\n}\n\nclass CurrencyExchange extends BaseBankService {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseBankService srv = new CurrencyExchange(\"TASH-01\", 12600.0);\n        System.out.println(srv.getServiceSummary());\n    }\n}",
    "solution": "abstract class BaseBankService {\n    protected String branchCode;\n    public BaseBankService(String b) { this.branchCode = b; }\n    public abstract String getServiceSummary();\n}\n\nclass CurrencyExchange extends BaseBankService {\n    private double rate;\n    public CurrencyExchange(String b, double r) { super(b); this.rate = r; }\n    @Override\n    public String getServiceSummary() { return \"Filial: \" + branchCode + \" | Valyuta kursi: \" + rate + \" UZS\"; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseBankService srv = new CurrencyExchange(\"TASH-01\", 12600.0);\n        System.out.println(srv.getServiceSummary());\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinflar interfeyslardan farqli ravishda ob'yekt holatini (state) saqlay oladi. Himoyalangan ('protected') a'zolar tashqi kod uchun yopiq, lekin sinf oilasi (vorislar) uchun ochiq yordamchi funksiyalardir (masalan, Product dagi roundToTwoDecimals).",
      "cleanCode": "abstract class BaseBankService {\n    protected double ...;\n    protected double roundToTwoDecimals(double v) { ... }\n}",
      "breakdown": [
        "<code>BaseBankService</code>: protected a'zolarga ega abstrakt sinf.",
        "<code>CurrencyExchange</code>: super(...) bilan bog'langan voris sinf."
      ]
    }
  },
  {
    "id": 43,
    "tier": 3,
    "tierName": "3-Bosqich: Abstrakt Sinflarda Konstruktorlar va Himoyalangan (protected) A'zolar",
    "sector": "31-45: Abstract Class Constructors, State & Helpers",
    "title": {
      "uz": "43. Beeline — Abstrakt Obunada Avto-Uzaytirish (autoRenew)",
      "en": "43. Beeline — Auto-Renewal State in Telecom Subscription"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nBeeline 'BaseSubscription' abstrakt sinfi obunaning faollik holati va 'protected boolean autoRenew' bayrog'ini saqlaydi. 'toggleRenewal()' orqali uni boshqaring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'BaseSubscription' abstrakt sinfini yarating va 'protected' maydon yoki yordamchi metod bering.\n2. Abstrakt sinf konstruktorini taqdim eting.\n3. 'MusicStreamSub' voris sinfida 'super(...)' orqali ota konstruktorni chaqiring.\n4. 'isAutoRenewEnabled(...)' metodida himoyalangan a'zodan foydalanib hisob-kitob qiling.\n5. 'Main' metodida tekshiring: 'BaseSubscription sub = new MusicStreamSub(\"Yandex Music\");         sub.toggleRenewal();         System.out.println(sub.getServiceName() + \" avto-uzaytirish: \" + sub.isAutoRenewEnabled());'",
      "en": "📖 Real-World Scenario & Context\nAbstract superclass tracks renewal state with concrete mutator methods.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare abstract class 'BaseSubscription' with protected fields or helper methods.\n2. Provide superclass constructor.\n3. In 'MusicStreamSub', invoke super(...) constructor.\n4. Implement 'isAutoRenewEnabled(...)' utilizing protected members.\n5. Verify execution in 'main': 'BaseSubscription sub = new MusicStreamSub(\"Yandex Music\");         sub.toggleRenewal();         System.out.println(sub.getServiceName() + \" avto-uzaytirish: \" + sub.isAutoRenewEnabled());'"
    },
    "requirements": {
      "classes": [
        "BaseSubscription",
        "MusicStreamSub",
        "Main"
      ],
      "methods": [
        "isAutoRenewEnabled"
      ],
      "keywords": [
        "abstract",
        "extends",
        "protected"
      ]
    },
    "starterCode": "// Protected maydon va yordamchi metodli abstrakt sinf tuzing\nabstract class BaseSubscription {\n}\n\nclass MusicStreamSub extends BaseSubscription {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseSubscription sub = new MusicStreamSub(\"Yandex Music\");\n        sub.toggleRenewal();\n        System.out.println(sub.getServiceName() + \" avto-uzaytirish: \" + sub.isAutoRenewEnabled());\n    }\n}",
    "solution": "abstract class BaseSubscription {\n    protected String serviceName;\n    protected boolean autoRenew = false;\n    public BaseSubscription(String s) { this.serviceName = s; }\n    public String getServiceName() { return serviceName; }\n    public void toggleRenewal() { this.autoRenew = !this.autoRenew; }\n    public boolean isAutoRenewEnabled() { return autoRenew; }\n}\n\nclass MusicStreamSub extends BaseSubscription {\n    public MusicStreamSub(String s) { super(s); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseSubscription sub = new MusicStreamSub(\"Yandex Music\");\n        sub.toggleRenewal();\n        System.out.println(sub.getServiceName() + \" avto-uzaytirish: \" + sub.isAutoRenewEnabled());\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinflar interfeyslardan farqli ravishda ob'yekt holatini (state) saqlay oladi. Himoyalangan ('protected') a'zolar tashqi kod uchun yopiq, lekin sinf oilasi (vorislar) uchun ochiq yordamchi funksiyalardir (masalan, Product dagi roundToTwoDecimals).",
      "cleanCode": "abstract class BaseSubscription {\n    protected double ...;\n    protected double roundToTwoDecimals(double v) { ... }\n}",
      "breakdown": [
        "<code>BaseSubscription</code>: protected a'zolarga ega abstrakt sinf.",
        "<code>MusicStreamSub</code>: super(...) bilan bog'langan voris sinf."
      ]
    }
  },
  {
    "id": 44,
    "tier": 3,
    "tierName": "3-Bosqich: Abstrakt Sinflarda Konstruktorlar va Himoyalangan (protected) A'zolar",
    "sector": "31-45: Abstract Class Constructors, State & Helpers",
    "title": {
      "uz": "44. UzAirways — Abstrakt Qo'nish Talonida Chiqish Darvozasi (Gate)",
      "en": "44. UzAirways — Boarding Pass Base Class Gate Formatting"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nUzAirways 'BaseBoardingPass' abstrakt sinfida reys va darvoza (Gate) saqlanadi. 'EconomyPass' vorisida yo'lovchi o'rindig'i bilan birga to'liq talon ma'lumotini chiqaring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'BaseBoardingPass' abstrakt sinfini yarating va 'protected' maydon yoki yordamchi metod bering.\n2. Abstrakt sinf konstruktorini taqdim eting.\n3. 'EconomyPass' voris sinfida 'super(...)' orqali ota konstruktorni chaqiring.\n4. 'getPassDetails(...)' metodida himoyalangan a'zodan foydalanib hisob-kitob qiling.\n5. 'Main' metodida tekshiring: 'BaseBoardingPass pass = new EconomyPass(\"HY-051\", \"B-14\", \"21C\");         System.out.println(pass.getPassDetails());'",
      "en": "📖 Real-World Scenario & Context\nFormat flight boarding pass utilizing protected gate and flight variables in abstract base.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare abstract class 'BaseBoardingPass' with protected fields or helper methods.\n2. Provide superclass constructor.\n3. In 'EconomyPass', invoke super(...) constructor.\n4. Implement 'getPassDetails(...)' utilizing protected members.\n5. Verify execution in 'main': 'BaseBoardingPass pass = new EconomyPass(\"HY-051\", \"B-14\", \"21C\");         System.out.println(pass.getPassDetails());'"
    },
    "requirements": {
      "classes": [
        "BaseBoardingPass",
        "EconomyPass",
        "Main"
      ],
      "methods": [
        "getPassDetails"
      ],
      "keywords": [
        "abstract",
        "extends",
        "protected"
      ]
    },
    "starterCode": "// Protected maydon va yordamchi metodli abstrakt sinf tuzing\nabstract class BaseBoardingPass {\n}\n\nclass EconomyPass extends BaseBoardingPass {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseBoardingPass pass = new EconomyPass(\"HY-051\", \"B-14\", \"21C\");\n        System.out.println(pass.getPassDetails());\n    }\n}",
    "solution": "abstract class BaseBoardingPass {\n    protected String flightCode;\n    protected String gate;\n    public BaseBoardingPass(String f, String g) { this.flightCode = f; this.gate = g; }\n    public abstract String getPassDetails();\n}\n\nclass EconomyPass extends BaseBoardingPass {\n    private String seat;\n    public EconomyPass(String f, String g, String s) { super(f, g); this.seat = s; }\n    @Override\n    public String getPassDetails() { return \"Reys: \" + flightCode + \" | Darvoza: \" + gate + \" | O'rindiq: \" + seat; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseBoardingPass pass = new EconomyPass(\"HY-051\", \"B-14\", \"21C\");\n        System.out.println(pass.getPassDetails());\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinflar interfeyslardan farqli ravishda ob'yekt holatini (state) saqlay oladi. Himoyalangan ('protected') a'zolar tashqi kod uchun yopiq, lekin sinf oilasi (vorislar) uchun ochiq yordamchi funksiyalardir (masalan, Product dagi roundToTwoDecimals).",
      "cleanCode": "abstract class BaseBoardingPass {\n    protected double ...;\n    protected double roundToTwoDecimals(double v) { ... }\n}",
      "breakdown": [
        "<code>BaseBoardingPass</code>: protected a'zolarga ega abstrakt sinf.",
        "<code>EconomyPass</code>: super(...) bilan bog'langan voris sinf."
      ]
    }
  },
  {
    "id": 45,
    "tier": 3,
    "tierName": "3-Bosqich: Abstrakt Sinflarda Konstruktorlar va Himoyalangan (protected) A'zolar",
    "sector": "31-45: Abstract Class Constructors, State & Helpers",
    "title": {
      "uz": "45. WIUT SRS — Abstrakt Modulda ECTS Kreditlarini Hisoblash",
      "en": "45. WIUT SRS — ECTS Credit Calculation in Base Module Entity"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT da har bir modul 'BaseCourseModule' dan kelib chiqadi. Unda kreditlar (UK credits) saqlanadi va 'getEctsCredits()' metodi uni Yevropa ECTS ga (kredit / 2) o'giradi. 20 kreditlik modulni tekshiring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'BaseCourseModule' abstrakt sinfini yarating va 'protected' maydon yoki yordamchi metod bering.\n2. Abstrakt sinf konstruktorini taqdim eting.\n3. 'CoreModule' voris sinfida 'super(...)' orqali ota konstruktorni chaqiring.\n4. 'getEctsCredits(...)' metodida himoyalangan a'zodan foydalanib hisob-kitob qiling.\n5. 'Main' metodida tekshiring: 'BaseCourseModule m = new CoreModule(\"Object-Oriented Programming\", 20);         System.out.println(m.getModuleName() + \" ECTS: \" + m.getEctsCredits());'",
      "en": "📖 Real-World Scenario & Context\nBaseCourseModule provides conversion from UK credits to European ECTS standard.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare abstract class 'BaseCourseModule' with protected fields or helper methods.\n2. Provide superclass constructor.\n3. In 'CoreModule', invoke super(...) constructor.\n4. Implement 'getEctsCredits(...)' utilizing protected members.\n5. Verify execution in 'main': 'BaseCourseModule m = new CoreModule(\"Object-Oriented Programming\", 20);         System.out.println(m.getModuleName() + \" ECTS: \" + m.getEctsCredits());'"
    },
    "requirements": {
      "classes": [
        "BaseCourseModule",
        "CoreModule",
        "Main"
      ],
      "methods": [
        "getEctsCredits"
      ],
      "keywords": [
        "abstract",
        "extends",
        "protected"
      ]
    },
    "starterCode": "// Protected maydon va yordamchi metodli abstrakt sinf tuzing\nabstract class BaseCourseModule {\n}\n\nclass CoreModule extends BaseCourseModule {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseCourseModule m = new CoreModule(\"Object-Oriented Programming\", 20);\n        System.out.println(m.getModuleName() + \" ECTS: \" + m.getEctsCredits());\n    }\n}",
    "solution": "abstract class BaseCourseModule {\n    protected String moduleName;\n    protected int ukCredits;\n    public BaseCourseModule(String m, int c) { this.moduleName = m; this.ukCredits = c; }\n    public String getModuleName() { return moduleName; }\n    public int getEctsCredits() { return ukCredits / 2; }\n}\n\nclass CoreModule extends BaseCourseModule {\n    public CoreModule(String m, int c) { super(m, c); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseCourseModule m = new CoreModule(\"Object-Oriented Programming\", 20);\n        System.out.println(m.getModuleName() + \" ECTS: \" + m.getEctsCredits());\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinflar interfeyslardan farqli ravishda ob'yekt holatini (state) saqlay oladi. Himoyalangan ('protected') a'zolar tashqi kod uchun yopiq, lekin sinf oilasi (vorislar) uchun ochiq yordamchi funksiyalardir (masalan, Product dagi roundToTwoDecimals).",
      "cleanCode": "abstract class BaseCourseModule {\n    protected double ...;\n    protected double roundToTwoDecimals(double v) { ... }\n}",
      "breakdown": [
        "<code>BaseCourseModule</code>: protected a'zolarga ega abstrakt sinf.",
        "<code>CoreModule</code>: super(...) bilan bog'langan voris sinf."
      ]
    }
  },
  {
    "id": 46,
    "tier": 4,
    "tierName": "4-Bosqich: Interfeyslar Asosi (interface) va Maydon Qoidalari",
    "sector": "46-60: Interface Basics & Constants",
    "title": {
      "uz": "46. Uzum Market — Interfeys Maydonlarining public static final Xususiyati",
      "en": "46. Uzum Market — Implicit Public Static Final Fields in Interfaces"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT 6-leksiyasida (Slide 21): 'Fields in an interface are implicitly public, static, and final (constants). No instance fields: an interface holds no object state'. 'IChargeable' interfeysida 'MAX_BATTERY = 100' konstantasini e'lon qiling va 'PowerBank' sinfida quvvatlang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'IChargeable' interfeysini e'lon qiling va unga konstanta maydonini bering.\n2. Interfeys ichida 'chargeToFull(...)' abstrakt metod shartnomasini taqdim eting.\n3. 'PowerBank' sinfini 'implements IChargeable' orqali realizatsiya qiling.\n4. Interfeys konstantasidan sinf metodlarida yoki 'Main' da foydalaning.\n5. Natijani chop eting: 'IChargeable pb = new PowerBank();         pb.chargeToFull();         System.out.println(\"Maksimal quvvat: \" + IChargeable.MAX_BATTERY + \"% | Joriy: \" + pb.getCurrentBattery() + \"%\");'",
      "en": "📖 Real-World Scenario & Context\nDemonstrate implicit public static final constant in interface matching Slide 21.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare interface 'IChargeable' with public static final constant.\n2. Declare abstract method 'chargeToFull(...)'.\n3. Implement interface in 'PowerBank' using 'implements'.\n4. Access interface constant directly via 'IChargeable.CONSTANT'.\n5. Print verified result: 'IChargeable pb = new PowerBank();         pb.chargeToFull();         System.out.println(\"Maksimal quvvat: \" + IChargeable.MAX_BATTERY + \"% | Joriy: \" + pb.getCurrentBattery() + \"%\");'"
    },
    "requirements": {
      "classes": [
        "PowerBank",
        "Main"
      ],
      "interfaces": [
        "IChargeable"
      ],
      "methods": [
        "chargeToFull"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "// Interfeys va konstantalarni e'lon qiling\ninterface IChargeable {\n}\n\nclass PowerBank implements IChargeable {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IChargeable pb = new PowerBank();\n        pb.chargeToFull();\n        System.out.println(\"Maksimal quvvat: \" + IChargeable.MAX_BATTERY + \"% | Joriy: \" + pb.getCurrentBattery() + \"%\");\n    }\n}",
    "solution": "interface IChargeable {\n    int MAX_BATTERY = 100;\n    void chargeToFull();\n    int getCurrentBattery();\n}\n\nclass PowerBank implements IChargeable {\n    private int battery = 0;\n    @Override\n    public void chargeToFull() { this.battery = MAX_BATTERY; }\n    @Override\n    public int getCurrentBattery() { return battery; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IChargeable pb = new PowerBank();\n        pb.chargeToFull();\n        System.out.println(\"Maksimal quvvat: \" + IChargeable.MAX_BATTERY + \"% | Joriy: \" + pb.getCurrentBattery() + \"%\");\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 6-leksiyasiga (Slide 21) ko'ra: Interfeysdagi barcha maydonlar avtomatik tarzda 'public static final' konstantalar hisoblanadi. Ularni e'lon qilingan joyda qiymat bilan to'ldirish shart. Interfeyslar ob'yekt holatini (state) saqlamaydi.",
      "cleanCode": "interface IChargeable {\n    int CONSTANT = ...;\n    void chargeToFull();\n}",
      "breakdown": [
        "<code>IChargeable</code>: public static final konstantaga ega interfeys.",
        "<code>PowerBank</code>: interfeysni realizatsiya qilgan sinf."
      ]
    }
  },
  {
    "id": 47,
    "tier": 4,
    "tierName": "4-Bosqich: Interfeyslar Asosi (interface) va Maydon Qoidalari",
    "sector": "46-60: Interface Basics & Constants",
    "title": {
      "uz": "47. Payme — Interfeysda Kunlik To'lov Limiti Konstantasi",
      "en": "47. Payme — Interface Constant for Daily Transaction Limit"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nPayme 'ISecurePayment' interfeysida 'double DAILY_LIMIT = 5000000.0;' konstantasini belgilang. 'OnlinePayment' sinfida to'lov miqdori limitdan oshmasligini tekshiring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'ISecurePayment' interfeysini e'lon qiling va unga konstanta maydonini bering.\n2. Interfeys ichida 'validateAndPay(...)' abstrakt metod shartnomasini taqdim eting.\n3. 'OnlinePayment' sinfini 'implements ISecurePayment' orqali realizatsiya qiling.\n4. Interfeys konstantasidan sinf metodlarida yoki 'Main' da foydalaning.\n5. Natijani chop eting: 'ISecurePayment p = new OnlinePayment();         boolean valid = p.validateAndPay(3500000.0);         System.out.println(\"Limit: \" + ISecurePayment.DAILY_LIMIT + \" | To'lov mumkinmi: \" + valid);'",
      "en": "📖 Real-World Scenario & Context\nImplement ISecurePayment interface with DAILY_LIMIT constant enforced in OnlinePayment.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare interface 'ISecurePayment' with public static final constant.\n2. Declare abstract method 'validateAndPay(...)'.\n3. Implement interface in 'OnlinePayment' using 'implements'.\n4. Access interface constant directly via 'ISecurePayment.CONSTANT'.\n5. Print verified result: 'ISecurePayment p = new OnlinePayment();         boolean valid = p.validateAndPay(3500000.0);         System.out.println(\"Limit: \" + ISecurePayment.DAILY_LIMIT + \" | To'lov mumkinmi: \" + valid);'"
    },
    "requirements": {
      "classes": [
        "OnlinePayment",
        "Main"
      ],
      "interfaces": [
        "ISecurePayment"
      ],
      "methods": [
        "validateAndPay"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "// Interfeys va konstantalarni e'lon qiling\ninterface ISecurePayment {\n}\n\nclass OnlinePayment implements ISecurePayment {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ISecurePayment p = new OnlinePayment();\n        boolean valid = p.validateAndPay(3500000.0);\n        System.out.println(\"Limit: \" + ISecurePayment.DAILY_LIMIT + \" | To'lov mumkinmi: \" + valid);\n    }\n}",
    "solution": "interface ISecurePayment {\n    double DAILY_LIMIT = 5000000.0;\n    boolean validateAndPay(double amount);\n}\n\nclass OnlinePayment implements ISecurePayment {\n    @Override\n    public boolean validateAndPay(double amount) {\n        return amount > 0 && amount <= DAILY_LIMIT;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ISecurePayment p = new OnlinePayment();\n        boolean valid = p.validateAndPay(3500000.0);\n        System.out.println(\"Limit: \" + ISecurePayment.DAILY_LIMIT + \" | To'lov mumkinmi: \" + valid);\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 6-leksiyasiga (Slide 21) ko'ra: Interfeysdagi barcha maydonlar avtomatik tarzda 'public static final' konstantalar hisoblanadi. Ularni e'lon qilingan joyda qiymat bilan to'ldirish shart. Interfeyslar ob'yekt holatini (state) saqlamaydi.",
      "cleanCode": "interface ISecurePayment {\n    int CONSTANT = ...;\n    void validateAndPay();\n}",
      "breakdown": [
        "<code>ISecurePayment</code>: public static final konstantaga ega interfeys.",
        "<code>OnlinePayment</code>: interfeysni realizatsiya qilgan sinf."
      ]
    }
  },
  {
    "id": 48,
    "tier": 4,
    "tierName": "4-Bosqich: Interfeyslar Asosi (interface) va Maydon Qoidalari",
    "sector": "46-60: Interface Basics & Constants",
    "title": {
      "uz": "48. Korzinka — Barkod Standarti Uzunligi Konstantasi (EAN-13)",
      "en": "48. Korzinka — Barcode Standard Length Constant in Interface"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nKorzinka skaneri 'IScannable' interfeysiga tayanadi. Unda 'int BARCODE_LENGTH = 13;' konstantasi mavjud. 'ProductBarcode' sinfida barkod to'g'ri uzunlikdaligini tekshiring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'IScannable' interfeysini e'lon qiling va unga konstanta maydonini bering.\n2. Interfeys ichida 'isValidBarcode(...)' abstrakt metod shartnomasini taqdim eting.\n3. 'ProductBarcode' sinfini 'implements IScannable' orqali realizatsiya qiling.\n4. Interfeys konstantasidan sinf metodlarida yoki 'Main' da foydalaning.\n5. Natijani chop eting: 'IScannable s = new ProductBarcode(\"4780012345678\");         System.out.println(\"Barkod to'g'rimi: \" + s.isValidBarcode());'",
      "en": "📖 Real-World Scenario & Context\nDeclare BARCODE_LENGTH in IScannable interface and validate code string length.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare interface 'IScannable' with public static final constant.\n2. Declare abstract method 'isValidBarcode(...)'.\n3. Implement interface in 'ProductBarcode' using 'implements'.\n4. Access interface constant directly via 'IScannable.CONSTANT'.\n5. Print verified result: 'IScannable s = new ProductBarcode(\"4780012345678\");         System.out.println(\"Barkod to'g'rimi: \" + s.isValidBarcode());'"
    },
    "requirements": {
      "classes": [
        "ProductBarcode",
        "Main"
      ],
      "interfaces": [
        "IScannable"
      ],
      "methods": [
        "isValidBarcode"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "// Interfeys va konstantalarni e'lon qiling\ninterface IScannable {\n}\n\nclass ProductBarcode implements IScannable {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IScannable s = new ProductBarcode(\"4780012345678\");\n        System.out.println(\"Barkod to'g'rimi: \" + s.isValidBarcode());\n    }\n}",
    "solution": "interface IScannable {\n    int BARCODE_LENGTH = 13;\n    boolean isValidBarcode();\n}\n\nclass ProductBarcode implements IScannable {\n    private String code;\n    public ProductBarcode(String c) { this.code = c; }\n    @Override\n    public boolean isValidBarcode() {\n        return code != null && code.length() == BARCODE_LENGTH;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IScannable s = new ProductBarcode(\"4780012345678\");\n        System.out.println(\"Barkod to'g'rimi: \" + s.isValidBarcode());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 6-leksiyasiga (Slide 21) ko'ra: Interfeysdagi barcha maydonlar avtomatik tarzda 'public static final' konstantalar hisoblanadi. Ularni e'lon qilingan joyda qiymat bilan to'ldirish shart. Interfeyslar ob'yekt holatini (state) saqlamaydi.",
      "cleanCode": "interface IScannable {\n    int CONSTANT = ...;\n    void isValidBarcode();\n}",
      "breakdown": [
        "<code>IScannable</code>: public static final konstantaga ega interfeys.",
        "<code>ProductBarcode</code>: interfeysni realizatsiya qilgan sinf."
      ]
    }
  },
  {
    "id": 49,
    "tier": 4,
    "tierName": "4-Bosqich: Interfeyslar Asosi (interface) va Maydon Qoidalari",
    "sector": "46-60: Interface Basics & Constants",
    "title": {
      "uz": "49. Yandex Go — GPS Protokoli Standarti Konstantasi",
      "en": "49. Yandex Go — GPS Tracking Interface and Standard Coordinate System"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nYandex Go da mashinalar joylashuvini uzatuvchi 'IGpsTrackable' interfeysi 'String COORDINATE_SYSTEM = \"WGS-84\";' konstantasiga ega. 'TaxiTracker' sinfida koordinata chiqaring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'IGpsTrackable' interfeysini e'lon qiling va unga konstanta maydonini bering.\n2. Interfeys ichida 'getCoordinates(...)' abstrakt metod shartnomasini taqdim eting.\n3. 'TaxiTracker' sinfini 'implements IGpsTrackable' orqali realizatsiya qiling.\n4. Interfeys konstantasidan sinf metodlarida yoki 'Main' da foydalaning.\n5. Natijani chop eting: 'IGpsTrackable t = new TaxiTracker(41.311, 69.240);         System.out.println(\"Standart: \" + IGpsTrackable.COORDINATE_SYSTEM + \" | Manzil: \" + t.getCoordinates());'",
      "en": "📖 Real-World Scenario & Context\nInterface defines COORDINATE_SYSTEM constant and getCoordinates() method contract.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare interface 'IGpsTrackable' with public static final constant.\n2. Declare abstract method 'getCoordinates(...)'.\n3. Implement interface in 'TaxiTracker' using 'implements'.\n4. Access interface constant directly via 'IGpsTrackable.CONSTANT'.\n5. Print verified result: 'IGpsTrackable t = new TaxiTracker(41.311, 69.240);         System.out.println(\"Standart: \" + IGpsTrackable.COORDINATE_SYSTEM + \" | Manzil: \" + t.getCoordinates());'"
    },
    "requirements": {
      "classes": [
        "TaxiTracker",
        "Main"
      ],
      "interfaces": [
        "IGpsTrackable"
      ],
      "methods": [
        "getCoordinates"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "// Interfeys va konstantalarni e'lon qiling\ninterface IGpsTrackable {\n}\n\nclass TaxiTracker implements IGpsTrackable {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IGpsTrackable t = new TaxiTracker(41.311, 69.240);\n        System.out.println(\"Standart: \" + IGpsTrackable.COORDINATE_SYSTEM + \" | Manzil: \" + t.getCoordinates());\n    }\n}",
    "solution": "interface IGpsTrackable {\n    String COORDINATE_SYSTEM = \"WGS-84\";\n    String getCoordinates();\n}\n\nclass TaxiTracker implements IGpsTrackable {\n    private double lat; private double lon;\n    public TaxiTracker(double lat, double lon) { this.lat = lat; this.lon = lon; }\n    @Override\n    public String getCoordinates() { return lat + \", \" + lon; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IGpsTrackable t = new TaxiTracker(41.311, 69.240);\n        System.out.println(\"Standart: \" + IGpsTrackable.COORDINATE_SYSTEM + \" | Manzil: \" + t.getCoordinates());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 6-leksiyasiga (Slide 21) ko'ra: Interfeysdagi barcha maydonlar avtomatik tarzda 'public static final' konstantalar hisoblanadi. Ularni e'lon qilingan joyda qiymat bilan to'ldirish shart. Interfeyslar ob'yekt holatini (state) saqlamaydi.",
      "cleanCode": "interface IGpsTrackable {\n    int CONSTANT = ...;\n    void getCoordinates();\n}",
      "breakdown": [
        "<code>IGpsTrackable</code>: public static final konstantaga ega interfeys.",
        "<code>TaxiTracker</code>: interfeysni realizatsiya qilgan sinf."
      ]
    }
  },
  {
    "id": 50,
    "tier": 4,
    "tierName": "4-Bosqich: Interfeyslar Asosi (interface) va Maydon Qoidalari",
    "sector": "46-60: Interface Basics & Constants",
    "title": {
      "uz": "50. Click — Valyuta Kodu Konstantasi va Faktura Interfeysi",
      "en": "50. Click — National Currency Constant in Invoice Interface"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nClick hisob-fakturalari 'IInvoiceable' interfeysi orqali yaratiladi. 'String CURRENCY = \"UZS\";' konstantasi hamma uchun umumiy. 'UtilityBill' sinfida chek matnini shakllantiring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'IInvoiceable' interfeysini e'lon qiling va unga konstanta maydonini bering.\n2. Interfeys ichida 'generateInvoiceText(...)' abstrakt metod shartnomasini taqdim eting.\n3. 'UtilityBill' sinfini 'implements IInvoiceable' orqali realizatsiya qiling.\n4. Interfeys konstantasidan sinf metodlarida yoki 'Main' da foydalaning.\n5. Natijani chop eting: 'IInvoiceable bill = new UtilityBill(\"Elektr\", 120000.0);         System.out.println(bill.generateInvoiceText());'",
      "en": "📖 Real-World Scenario & Context\nModel IInvoiceable with CURRENCY constant implemented by UtilityBill.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare interface 'IInvoiceable' with public static final constant.\n2. Declare abstract method 'generateInvoiceText(...)'.\n3. Implement interface in 'UtilityBill' using 'implements'.\n4. Access interface constant directly via 'IInvoiceable.CONSTANT'.\n5. Print verified result: 'IInvoiceable bill = new UtilityBill(\"Elektr\", 120000.0);         System.out.println(bill.generateInvoiceText());'"
    },
    "requirements": {
      "classes": [
        "UtilityBill",
        "Main"
      ],
      "interfaces": [
        "IInvoiceable"
      ],
      "methods": [
        "generateInvoiceText"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "// Interfeys va konstantalarni e'lon qiling\ninterface IInvoiceable {\n}\n\nclass UtilityBill implements IInvoiceable {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IInvoiceable bill = new UtilityBill(\"Elektr\", 120000.0);\n        System.out.println(bill.generateInvoiceText());\n    }\n}",
    "solution": "interface IInvoiceable {\n    String CURRENCY = \"UZS\";\n    String generateInvoiceText();\n}\n\nclass UtilityBill implements IInvoiceable {\n    private String service; private double amount;\n    public UtilityBill(String s, double a) { this.service = s; this.amount = a; }\n    @Override\n    public String generateInvoiceText() { return \"Hisob: \" + service + \" | Summa: \" + amount + \" \" + CURRENCY; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IInvoiceable bill = new UtilityBill(\"Elektr\", 120000.0);\n        System.out.println(bill.generateInvoiceText());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 6-leksiyasiga (Slide 21) ko'ra: Interfeysdagi barcha maydonlar avtomatik tarzda 'public static final' konstantalar hisoblanadi. Ularni e'lon qilingan joyda qiymat bilan to'ldirish shart. Interfeyslar ob'yekt holatini (state) saqlamaydi.",
      "cleanCode": "interface IInvoiceable {\n    int CONSTANT = ...;\n    void generateInvoiceText();\n}",
      "breakdown": [
        "<code>IInvoiceable</code>: public static final konstantaga ega interfeys.",
        "<code>UtilityBill</code>: interfeysni realizatsiya qilgan sinf."
      ]
    }
  },
  {
    "id": 51,
    "tier": 4,
    "tierName": "4-Bosqich: Interfeyslar Asosi (interface) va Maydon Qoidalari",
    "sector": "46-60: Interface Basics & Constants",
    "title": {
      "uz": "51. Safia — Yaroqlilik Soati Konstantasi va Sifat Nazorati",
      "en": "51. Safia — Quality Control Expiration Threshold Constant"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSafia desertlari sifatini tekshiruvchi 'IQualityControlled' interfeysi 'int MAX_FRESH_HOURS = 48;' konstantasiga ega. 'Cheesecake' sinfida mahsulot yangiligini tekshiring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'IQualityControlled' interfeysini e'lon qiling va unga konstanta maydonini bering.\n2. Interfeys ichida 'isFresh(...)' abstrakt metod shartnomasini taqdim eting.\n3. 'Cheesecake' sinfini 'implements IQualityControlled' orqali realizatsiya qiling.\n4. Interfeys konstantasidan sinf metodlarida yoki 'Main' da foydalaning.\n5. Natijani chop eting: 'IQualityControlled cake = new Cheesecake(24);         System.out.println(\"Chizkeyk yangimi: \" + cake.isFresh() + \" (Maksimal: \" + IQualityControlled.MAX_FRESH_HOURS + \" soat)\");'",
      "en": "📖 Real-World Scenario & Context\nImplement IQualityControlled interface validating elapsed hours against MAX_FRESH_HOURS.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare interface 'IQualityControlled' with public static final constant.\n2. Declare abstract method 'isFresh(...)'.\n3. Implement interface in 'Cheesecake' using 'implements'.\n4. Access interface constant directly via 'IQualityControlled.CONSTANT'.\n5. Print verified result: 'IQualityControlled cake = new Cheesecake(24);         System.out.println(\"Chizkeyk yangimi: \" + cake.isFresh() + \" (Maksimal: \" + IQualityControlled.MAX_FRESH_HOURS + \" soat)\");'"
    },
    "requirements": {
      "classes": [
        "Cheesecake",
        "Main"
      ],
      "interfaces": [
        "IQualityControlled"
      ],
      "methods": [
        "isFresh"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "// Interfeys va konstantalarni e'lon qiling\ninterface IQualityControlled {\n}\n\nclass Cheesecake implements IQualityControlled {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IQualityControlled cake = new Cheesecake(24);\n        System.out.println(\"Chizkeyk yangimi: \" + cake.isFresh() + \" (Maksimal: \" + IQualityControlled.MAX_FRESH_HOURS + \" soat)\");\n    }\n}",
    "solution": "interface IQualityControlled {\n    int MAX_FRESH_HOURS = 48;\n    boolean isFresh();\n}\n\nclass Cheesecake implements IQualityControlled {\n    private int hoursElapsed;\n    public Cheesecake(int h) { this.hoursElapsed = h; }\n    @Override\n    public boolean isFresh() { return hoursElapsed <= MAX_FRESH_HOURS; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IQualityControlled cake = new Cheesecake(24);\n        System.out.println(\"Chizkeyk yangimi: \" + cake.isFresh() + \" (Maksimal: \" + IQualityControlled.MAX_FRESH_HOURS + \" soat)\");\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 6-leksiyasiga (Slide 21) ko'ra: Interfeysdagi barcha maydonlar avtomatik tarzda 'public static final' konstantalar hisoblanadi. Ularni e'lon qilingan joyda qiymat bilan to'ldirish shart. Interfeyslar ob'yekt holatini (state) saqlamaydi.",
      "cleanCode": "interface IQualityControlled {\n    int CONSTANT = ...;\n    void isFresh();\n}",
      "breakdown": [
        "<code>IQualityControlled</code>: public static final konstantaga ega interfeys.",
        "<code>Cheesecake</code>: interfeysni realizatsiya qilgan sinf."
      ]
    }
  },
  {
    "id": 52,
    "tier": 4,
    "tierName": "4-Bosqich: Interfeyslar Asosi (interface) va Maydon Qoidalari",
    "sector": "46-60: Interface Basics & Constants",
    "title": {
      "uz": "52. Dodo Pizza — Termo-Sumka Harorat Konstantasi",
      "en": "52. Dodo Pizza — Thermal Bag Optimal Temperature Constant"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nDodo pitsa issiqligini saqlash uchun 'IThermalProtected' interfeysida 'int MIN_DELIVERY_TEMP_C = 60;' konstantasini beradi. 'PizzaBox' sinfida yetkazish harorati to'g'riligini tasdiqlang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'IThermalProtected' interfeysini e'lon qiling va unga konstanta maydonini bering.\n2. Interfeys ichida 'isTemperatureValid(...)' abstrakt metod shartnomasini taqdim eting.\n3. 'PizzaBox' sinfini 'implements IThermalProtected' orqali realizatsiya qiling.\n4. Interfeys konstantasidan sinf metodlarida yoki 'Main' da foydalaning.\n5. Natijani chop eting: 'IThermalProtected box = new PizzaBox(68);         System.out.println(\"Harorat me'yordami: \" + box.isTemperatureValid());'",
      "en": "📖 Real-World Scenario & Context\nDeclare temperature threshold constant in IThermalProtected and verify in PizzaBox.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare interface 'IThermalProtected' with public static final constant.\n2. Declare abstract method 'isTemperatureValid(...)'.\n3. Implement interface in 'PizzaBox' using 'implements'.\n4. Access interface constant directly via 'IThermalProtected.CONSTANT'.\n5. Print verified result: 'IThermalProtected box = new PizzaBox(68);         System.out.println(\"Harorat me'yordami: \" + box.isTemperatureValid());'"
    },
    "requirements": {
      "classes": [
        "PizzaBox",
        "Main"
      ],
      "interfaces": [
        "IThermalProtected"
      ],
      "methods": [
        "isTemperatureValid"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "// Interfeys va konstantalarni e'lon qiling\ninterface IThermalProtected {\n}\n\nclass PizzaBox implements IThermalProtected {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IThermalProtected box = new PizzaBox(68);\n        System.out.println(\"Harorat me'yordami: \" + box.isTemperatureValid());\n    }\n}",
    "solution": "interface IThermalProtected {\n    int MIN_DELIVERY_TEMP_C = 60;\n    boolean isTemperatureValid();\n}\n\nclass PizzaBox implements IThermalProtected {\n    private int currentTemp;\n    public PizzaBox(int t) { this.currentTemp = t; }\n    @Override\n    public boolean isTemperatureValid() { return currentTemp >= MIN_DELIVERY_TEMP_C; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IThermalProtected box = new PizzaBox(68);\n        System.out.println(\"Harorat me'yordami: \" + box.isTemperatureValid());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 6-leksiyasiga (Slide 21) ko'ra: Interfeysdagi barcha maydonlar avtomatik tarzda 'public static final' konstantalar hisoblanadi. Ularni e'lon qilingan joyda qiymat bilan to'ldirish shart. Interfeyslar ob'yekt holatini (state) saqlamaydi.",
      "cleanCode": "interface IThermalProtected {\n    int CONSTANT = ...;\n    void isTemperatureValid();\n}",
      "breakdown": [
        "<code>IThermalProtected</code>: public static final konstantaga ega interfeys.",
        "<code>PizzaBox</code>: interfeysni realizatsiya qilgan sinf."
      ]
    }
  },
  {
    "id": 53,
    "tier": 4,
    "tierName": "4-Bosqich: Interfeyslar Asosi (interface) va Maydon Qoidalari",
    "sector": "46-60: Interface Basics & Constants",
    "title": {
      "uz": "53. Texnomart — Standart Kuchlanish Konstantasi (220V)",
      "en": "53. Texnomart — Grid Voltage Constant in Electrical Interface"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nTexnomart elektr jihozlari 'IElectricalDevice' interfeysida 'int STANDARD_VOLTAGE = 220;' konstantasini ishlatadi. 'ElectricKettle' sinfida moslikni tekshiring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'IElectricalDevice' interfeysini e'lon qiling va unga konstanta maydonini bering.\n2. Interfeys ichida 'isVoltageCompatible(...)' abstrakt metod shartnomasini taqdim eting.\n3. 'ElectricKettle' sinfini 'implements IElectricalDevice' orqali realizatsiya qiling.\n4. Interfeys konstantasidan sinf metodlarida yoki 'Main' da foydalaning.\n5. Natijani chop eting: 'IElectricalDevice kettle = new ElectricKettle(220);         System.out.println(\"Kuchlanish mos: \" + kettle.isVoltageCompatible());'",
      "en": "📖 Real-World Scenario & Context\nInterface provides STANDARD_VOLTAGE constant verified in ElectricKettle.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare interface 'IElectricalDevice' with public static final constant.\n2. Declare abstract method 'isVoltageCompatible(...)'.\n3. Implement interface in 'ElectricKettle' using 'implements'.\n4. Access interface constant directly via 'IElectricalDevice.CONSTANT'.\n5. Print verified result: 'IElectricalDevice kettle = new ElectricKettle(220);         System.out.println(\"Kuchlanish mos: \" + kettle.isVoltageCompatible());'"
    },
    "requirements": {
      "classes": [
        "ElectricKettle",
        "Main"
      ],
      "interfaces": [
        "IElectricalDevice"
      ],
      "methods": [
        "isVoltageCompatible"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "// Interfeys va konstantalarni e'lon qiling\ninterface IElectricalDevice {\n}\n\nclass ElectricKettle implements IElectricalDevice {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IElectricalDevice kettle = new ElectricKettle(220);\n        System.out.println(\"Kuchlanish mos: \" + kettle.isVoltageCompatible());\n    }\n}",
    "solution": "interface IElectricalDevice {\n    int STANDARD_VOLTAGE = 220;\n    boolean isVoltageCompatible();\n}\n\nclass ElectricKettle implements IElectricalDevice {\n    private int voltage;\n    public ElectricKettle(int v) { this.voltage = v; }\n    @Override\n    public boolean isVoltageCompatible() { return voltage == STANDARD_VOLTAGE; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IElectricalDevice kettle = new ElectricKettle(220);\n        System.out.println(\"Kuchlanish mos: \" + kettle.isVoltageCompatible());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 6-leksiyasiga (Slide 21) ko'ra: Interfeysdagi barcha maydonlar avtomatik tarzda 'public static final' konstantalar hisoblanadi. Ularni e'lon qilingan joyda qiymat bilan to'ldirish shart. Interfeyslar ob'yekt holatini (state) saqlamaydi.",
      "cleanCode": "interface IElectricalDevice {\n    int CONSTANT = ...;\n    void isVoltageCompatible();\n}",
      "breakdown": [
        "<code>IElectricalDevice</code>: public static final konstantaga ega interfeys.",
        "<code>ElectricKettle</code>: interfeysni realizatsiya qilgan sinf."
      ]
    }
  },
  {
    "id": 54,
    "tier": 4,
    "tierName": "4-Bosqich: Interfeyslar Asosi (interface) va Maydon Qoidalari",
    "sector": "46-60: Interface Basics & Constants",
    "title": {
      "uz": "54. Medion — Autoklav Sterilizatsiya Harorat Konstantasi",
      "en": "54. Medion — Sterilization Threshold Constant in Clinic Interface"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nMedion stomatologik asboblari 'ISterilizable' interfeysida 'int STERILE_TEMP_C = 134;' konstantasiga tayanadi. 'DentalTool' sinfida sterilizatsiya haroratini tekshiring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'ISterilizable' interfeysini e'lon qiling va unga konstanta maydonini bering.\n2. Interfeys ichida 'isSterilized(...)' abstrakt metod shartnomasini taqdim eting.\n3. 'DentalTool' sinfini 'implements ISterilizable' orqali realizatsiya qiling.\n4. Interfeys konstantasidan sinf metodlarida yoki 'Main' da foydalaning.\n5. Natijani chop eting: 'ISterilizable tool = new DentalTool(135);         System.out.println(\"Asbob steril: \" + tool.isSterilized());'",
      "en": "📖 Real-World Scenario & Context\nModel ISterilizable with STERILE_TEMP_C constant overridden by DentalTool.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare interface 'ISterilizable' with public static final constant.\n2. Declare abstract method 'isSterilized(...)'.\n3. Implement interface in 'DentalTool' using 'implements'.\n4. Access interface constant directly via 'ISterilizable.CONSTANT'.\n5. Print verified result: 'ISterilizable tool = new DentalTool(135);         System.out.println(\"Asbob steril: \" + tool.isSterilized());'"
    },
    "requirements": {
      "classes": [
        "DentalTool",
        "Main"
      ],
      "interfaces": [
        "ISterilizable"
      ],
      "methods": [
        "isSterilized"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "// Interfeys va konstantalarni e'lon qiling\ninterface ISterilizable {\n}\n\nclass DentalTool implements ISterilizable {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ISterilizable tool = new DentalTool(135);\n        System.out.println(\"Asbob steril: \" + tool.isSterilized());\n    }\n}",
    "solution": "interface ISterilizable {\n    int STERILE_TEMP_C = 134;\n    boolean isSterilized();\n}\n\nclass DentalTool implements ISterilizable {\n    private int actualTemp;\n    public DentalTool(int t) { this.actualTemp = t; }\n    @Override\n    public boolean isSterilized() { return actualTemp >= STERILE_TEMP_C; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ISterilizable tool = new DentalTool(135);\n        System.out.println(\"Asbob steril: \" + tool.isSterilized());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 6-leksiyasiga (Slide 21) ko'ra: Interfeysdagi barcha maydonlar avtomatik tarzda 'public static final' konstantalar hisoblanadi. Ularni e'lon qilingan joyda qiymat bilan to'ldirish shart. Interfeyslar ob'yekt holatini (state) saqlamaydi.",
      "cleanCode": "interface ISterilizable {\n    int CONSTANT = ...;\n    void isSterilized();\n}",
      "breakdown": [
        "<code>ISterilizable</code>: public static final konstantaga ega interfeys.",
        "<code>DentalTool</code>: interfeysni realizatsiya qilgan sinf."
      ]
    }
  },
  {
    "id": 55,
    "tier": 4,
    "tierName": "4-Bosqich: Interfeyslar Asosi (interface) va Maydon Qoidalari",
    "sector": "46-60: Interface Basics & Constants",
    "title": {
      "uz": "55. Express24 — Shahar Tezlik Cheklovi Konstantasi",
      "en": "55. Express24 — City Speed Limit Constant in Delivery Interface"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nExpress24 kuryerlari xavfsizligi uchun 'ISpeedRegulated' interfeysida 'int MAX_CITY_SPEED_KMH = 60;' belgilanadi. 'ScooterCourier' sinfida tezlik oshmaganini tasdiqlang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'ISpeedRegulated' interfeysini e'lon qiling va unga konstanta maydonini bering.\n2. Interfeys ichida 'isSpeedSafe(...)' abstrakt metod shartnomasini taqdim eting.\n3. 'ScooterCourier' sinfini 'implements ISpeedRegulated' orqali realizatsiya qiling.\n4. Interfeys konstantasidan sinf metodlarida yoki 'Main' da foydalaning.\n5. Natijani chop eting: 'ISpeedRegulated sc = new ScooterCourier(45.0);         System.out.println(\"Tezlik xavfsizmi: \" + sc.isSpeedSafe());'",
      "en": "📖 Real-World Scenario & Context\nInterface specifies MAX_CITY_SPEED_KMH constant evaluated in ScooterCourier.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare interface 'ISpeedRegulated' with public static final constant.\n2. Declare abstract method 'isSpeedSafe(...)'.\n3. Implement interface in 'ScooterCourier' using 'implements'.\n4. Access interface constant directly via 'ISpeedRegulated.CONSTANT'.\n5. Print verified result: 'ISpeedRegulated sc = new ScooterCourier(45.0);         System.out.println(\"Tezlik xavfsizmi: \" + sc.isSpeedSafe());'"
    },
    "requirements": {
      "classes": [
        "ScooterCourier",
        "Main"
      ],
      "interfaces": [
        "ISpeedRegulated"
      ],
      "methods": [
        "isSpeedSafe"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "// Interfeys va konstantalarni e'lon qiling\ninterface ISpeedRegulated {\n}\n\nclass ScooterCourier implements ISpeedRegulated {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ISpeedRegulated sc = new ScooterCourier(45.0);\n        System.out.println(\"Tezlik xavfsizmi: \" + sc.isSpeedSafe());\n    }\n}",
    "solution": "interface ISpeedRegulated {\n    int MAX_CITY_SPEED_KMH = 60;\n    boolean isSpeedSafe();\n}\n\nclass ScooterCourier implements ISpeedRegulated {\n    private double currentSpeed;\n    public ScooterCourier(double s) { this.currentSpeed = s; }\n    @Override\n    public boolean isSpeedSafe() { return currentSpeed <= MAX_CITY_SPEED_KMH; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ISpeedRegulated sc = new ScooterCourier(45.0);\n        System.out.println(\"Tezlik xavfsizmi: \" + sc.isSpeedSafe());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 6-leksiyasiga (Slide 21) ko'ra: Interfeysdagi barcha maydonlar avtomatik tarzda 'public static final' konstantalar hisoblanadi. Ularni e'lon qilingan joyda qiymat bilan to'ldirish shart. Interfeyslar ob'yekt holatini (state) saqlamaydi.",
      "cleanCode": "interface ISpeedRegulated {\n    int CONSTANT = ...;\n    void isSpeedSafe();\n}",
      "breakdown": [
        "<code>ISpeedRegulated</code>: public static final konstantaga ega interfeys.",
        "<code>ScooterCourier</code>: interfeysni realizatsiya qilgan sinf."
      ]
    }
  },
  {
    "id": 56,
    "tier": 4,
    "tierName": "4-Bosqich: Interfeyslar Asosi (interface) va Maydon Qoidalari",
    "sector": "46-60: Interface Basics & Constants",
    "title": {
      "uz": "56. Asaxiy — Maksimal Yuklab Olish Oqimlari Konstantasi",
      "en": "56. Asaxiy — Download Stream Concurrency Constant in Interface"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nAsaxiy elektron kitob yuklab olish moduli 'IDownloadable' interfeysida 'int MAX_THREADS = 4;' konstantasini beradi. 'EBookDownloader' sinfida oqimlar sonini cheklang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'IDownloadable' interfeysini e'lon qiling va unga konstanta maydonini bering.\n2. Interfeys ichida 'isThreadCountAllowed(...)' abstrakt metod shartnomasini taqdim eting.\n3. 'EBookDownloader' sinfini 'implements IDownloadable' orqali realizatsiya qiling.\n4. Interfeys konstantasidan sinf metodlarida yoki 'Main' da foydalaning.\n5. Natijani chop eting: 'IDownloadable dl = new EBookDownloader(3);         System.out.println(\"Oqimlar soni to'g'rimi: \" + dl.isThreadCountAllowed());'",
      "en": "📖 Real-World Scenario & Context\nDeclare MAX_THREADS constant in IDownloadable and verify allowed thread allocation.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare interface 'IDownloadable' with public static final constant.\n2. Declare abstract method 'isThreadCountAllowed(...)'.\n3. Implement interface in 'EBookDownloader' using 'implements'.\n4. Access interface constant directly via 'IDownloadable.CONSTANT'.\n5. Print verified result: 'IDownloadable dl = new EBookDownloader(3);         System.out.println(\"Oqimlar soni to'g'rimi: \" + dl.isThreadCountAllowed());'"
    },
    "requirements": {
      "classes": [
        "EBookDownloader",
        "Main"
      ],
      "interfaces": [
        "IDownloadable"
      ],
      "methods": [
        "isThreadCountAllowed"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "// Interfeys va konstantalarni e'lon qiling\ninterface IDownloadable {\n}\n\nclass EBookDownloader implements IDownloadable {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IDownloadable dl = new EBookDownloader(3);\n        System.out.println(\"Oqimlar soni to'g'rimi: \" + dl.isThreadCountAllowed());\n    }\n}",
    "solution": "interface IDownloadable {\n    int MAX_THREADS = 4;\n    boolean isThreadCountAllowed();\n}\n\nclass EBookDownloader implements IDownloadable {\n    private int threads;\n    public EBookDownloader(int t) { this.threads = t; }\n    @Override\n    public boolean isThreadCountAllowed() { return threads > 0 && threads <= MAX_THREADS; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IDownloadable dl = new EBookDownloader(3);\n        System.out.println(\"Oqimlar soni to'g'rimi: \" + dl.isThreadCountAllowed());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 6-leksiyasiga (Slide 21) ko'ra: Interfeysdagi barcha maydonlar avtomatik tarzda 'public static final' konstantalar hisoblanadi. Ularni e'lon qilingan joyda qiymat bilan to'ldirish shart. Interfeyslar ob'yekt holatini (state) saqlamaydi.",
      "cleanCode": "interface IDownloadable {\n    int CONSTANT = ...;\n    void isThreadCountAllowed();\n}",
      "breakdown": [
        "<code>IDownloadable</code>: public static final konstantaga ega interfeys.",
        "<code>EBookDownloader</code>: interfeysni realizatsiya qilgan sinf."
      ]
    }
  },
  {
    "id": 57,
    "tier": 4,
    "tierName": "4-Bosqich: Interfeyslar Asosi (interface) va Maydon Qoidalari",
    "sector": "46-60: Interface Basics & Constants",
    "title": {
      "uz": "57. Kapitalbank — Regulyator Tizim Nomi Konstantasi",
      "en": "57. Kapitalbank — Central Bank Regulatory Constant in Interface"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nKapitalbank audit interfeysi 'IAuditable' da 'String REGULATOR = \"CentralBank_UZ\";' konstantasi o'rnatilgan. 'BankAuditLog' sinfida audit satrini hosil qiling.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'IAuditable' interfeysini e'lon qiling va unga konstanta maydonini bering.\n2. Interfeys ichida 'getAuditStamp(...)' abstrakt metod shartnomasini taqdim eting.\n3. 'BankAuditLog' sinfini 'implements IAuditable' orqali realizatsiya qiling.\n4. Interfeys konstantasidan sinf metodlarida yoki 'Main' da foydalaning.\n5. Natijani chop eting: 'IAuditable audit = new BankAuditLog(\"TX-7788\");         System.out.println(audit.getAuditStamp());'",
      "en": "📖 Real-World Scenario & Context\nModel IAuditable with REGULATOR constant formatting official audit trail.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare interface 'IAuditable' with public static final constant.\n2. Declare abstract method 'getAuditStamp(...)'.\n3. Implement interface in 'BankAuditLog' using 'implements'.\n4. Access interface constant directly via 'IAuditable.CONSTANT'.\n5. Print verified result: 'IAuditable audit = new BankAuditLog(\"TX-7788\");         System.out.println(audit.getAuditStamp());'"
    },
    "requirements": {
      "classes": [
        "BankAuditLog",
        "Main"
      ],
      "interfaces": [
        "IAuditable"
      ],
      "methods": [
        "getAuditStamp"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "// Interfeys va konstantalarni e'lon qiling\ninterface IAuditable {\n}\n\nclass BankAuditLog implements IAuditable {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IAuditable audit = new BankAuditLog(\"TX-7788\");\n        System.out.println(audit.getAuditStamp());\n    }\n}",
    "solution": "interface IAuditable {\n    String REGULATOR = \"CentralBank_UZ\";\n    String getAuditStamp();\n}\n\nclass BankAuditLog implements IAuditable {\n    private String txCode;\n    public BankAuditLog(String c) { this.txCode = c; }\n    @Override\n    public String getAuditStamp() { return \"Audit: \" + txCode + \" tasdiqlandi | Regulyator: \" + REGULATOR; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IAuditable audit = new BankAuditLog(\"TX-7788\");\n        System.out.println(audit.getAuditStamp());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 6-leksiyasiga (Slide 21) ko'ra: Interfeysdagi barcha maydonlar avtomatik tarzda 'public static final' konstantalar hisoblanadi. Ularni e'lon qilingan joyda qiymat bilan to'ldirish shart. Interfeyslar ob'yekt holatini (state) saqlamaydi.",
      "cleanCode": "interface IAuditable {\n    int CONSTANT = ...;\n    void getAuditStamp();\n}",
      "breakdown": [
        "<code>IAuditable</code>: public static final konstantaga ega interfeys.",
        "<code>BankAuditLog</code>: interfeysni realizatsiya qilgan sinf."
      ]
    }
  },
  {
    "id": 58,
    "tier": 4,
    "tierName": "4-Bosqich: Interfeyslar Asosi (interface) va Maydon Qoidalari",
    "sector": "46-60: Interface Basics & Constants",
    "title": {
      "uz": "58. Beeline — PIN-kod Maksimal Urinishlar Soni Konstantasi",
      "en": "58. Beeline — PIN Verification Maximum Attempts Constant"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nBeeline SIM-karta xavfsizligi 'ISimSecurity' interfeysida 'int MAX_PIN_ATTEMPTS = 3;' konstantasiga ega. 'SimCardLock' sinfida urinishlar sonini nazorat qiling.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'ISimSecurity' interfeysini e'lon qiling va unga konstanta maydonini bering.\n2. Interfeys ichida 'canAttemptPin(...)' abstrakt metod shartnomasini taqdim eting.\n3. 'SimCardLock' sinfini 'implements ISimSecurity' orqali realizatsiya qiling.\n4. Interfeys konstantasidan sinf metodlarida yoki 'Main' da foydalaning.\n5. Natijani chop eting: 'ISimSecurity sim = new SimCardLock(2);         System.out.println(\"PIN terish mumkin: \" + sim.canAttemptPin());'",
      "en": "📖 Real-World Scenario & Context\nISimSecurity interface specifies MAX_PIN_ATTEMPTS constant handled by SimCardLock.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare interface 'ISimSecurity' with public static final constant.\n2. Declare abstract method 'canAttemptPin(...)'.\n3. Implement interface in 'SimCardLock' using 'implements'.\n4. Access interface constant directly via 'ISimSecurity.CONSTANT'.\n5. Print verified result: 'ISimSecurity sim = new SimCardLock(2);         System.out.println(\"PIN terish mumkin: \" + sim.canAttemptPin());'"
    },
    "requirements": {
      "classes": [
        "SimCardLock",
        "Main"
      ],
      "interfaces": [
        "ISimSecurity"
      ],
      "methods": [
        "canAttemptPin"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "// Interfeys va konstantalarni e'lon qiling\ninterface ISimSecurity {\n}\n\nclass SimCardLock implements ISimSecurity {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ISimSecurity sim = new SimCardLock(2);\n        System.out.println(\"PIN terish mumkin: \" + sim.canAttemptPin());\n    }\n}",
    "solution": "interface ISimSecurity {\n    int MAX_PIN_ATTEMPTS = 3;\n    boolean canAttemptPin();\n}\n\nclass SimCardLock implements ISimSecurity {\n    private int usedAttempts;\n    public SimCardLock(int used) { this.usedAttempts = used; }\n    @Override\n    public boolean canAttemptPin() { return usedAttempts < MAX_PIN_ATTEMPTS; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ISimSecurity sim = new SimCardLock(2);\n        System.out.println(\"PIN terish mumkin: \" + sim.canAttemptPin());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 6-leksiyasiga (Slide 21) ko'ra: Interfeysdagi barcha maydonlar avtomatik tarzda 'public static final' konstantalar hisoblanadi. Ularni e'lon qilingan joyda qiymat bilan to'ldirish shart. Interfeyslar ob'yekt holatini (state) saqlamaydi.",
      "cleanCode": "interface ISimSecurity {\n    int CONSTANT = ...;\n    void canAttemptPin();\n}",
      "breakdown": [
        "<code>ISimSecurity</code>: public static final konstantaga ega interfeys.",
        "<code>SimCardLock</code>: interfeysni realizatsiya qilgan sinf."
      ]
    }
  },
  {
    "id": 59,
    "tier": 4,
    "tierName": "4-Bosqich: Interfeyslar Asosi (interface) va Maydon Qoidalari",
    "sector": "46-60: Interface Basics & Constants",
    "title": {
      "uz": "59. UzAirways — Minimal Bort Kuzatuvchilari Konstantasi",
      "en": "59. UzAirways — Minimum Cabin Crew Constant in Flight Safety"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nUzAirways parvoz xavfsizligi 'IFlightReady' interfeysida 'int MIN_CREW_COUNT = 4;' konstantasini talab qiladi. 'PreFlightInspection' sinfida reys uchishga tayyorligini tekshiring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'IFlightReady' interfeysini e'lon qiling va unga konstanta maydonini bering.\n2. Interfeys ichida 'isFlightApproved(...)' abstrakt metod shartnomasini taqdim eting.\n3. 'PreFlightInspection' sinfini 'implements IFlightReady' orqali realizatsiya qiling.\n4. Interfeys konstantasidan sinf metodlarida yoki 'Main' da foydalaning.\n5. Natijani chop eting: 'IFlightReady f = new PreFlightInspection(5);         System.out.println(\"Parvozga ruxsat: \" + f.isFlightApproved());'",
      "en": "📖 Real-World Scenario & Context\nDeclare MIN_CREW_COUNT constant in IFlightReady verified in PreFlightInspection.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare interface 'IFlightReady' with public static final constant.\n2. Declare abstract method 'isFlightApproved(...)'.\n3. Implement interface in 'PreFlightInspection' using 'implements'.\n4. Access interface constant directly via 'IFlightReady.CONSTANT'.\n5. Print verified result: 'IFlightReady f = new PreFlightInspection(5);         System.out.println(\"Parvozga ruxsat: \" + f.isFlightApproved());'"
    },
    "requirements": {
      "classes": [
        "PreFlightInspection",
        "Main"
      ],
      "interfaces": [
        "IFlightReady"
      ],
      "methods": [
        "isFlightApproved"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "// Interfeys va konstantalarni e'lon qiling\ninterface IFlightReady {\n}\n\nclass PreFlightInspection implements IFlightReady {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IFlightReady f = new PreFlightInspection(5);\n        System.out.println(\"Parvozga ruxsat: \" + f.isFlightApproved());\n    }\n}",
    "solution": "interface IFlightReady {\n    int MIN_CREW_COUNT = 4;\n    boolean isFlightApproved();\n}\n\nclass PreFlightInspection implements IFlightReady {\n    private int crewCount;\n    public PreFlightInspection(int count) { this.crewCount = count; }\n    @Override\n    public boolean isFlightApproved() { return crewCount >= MIN_CREW_COUNT; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IFlightReady f = new PreFlightInspection(5);\n        System.out.println(\"Parvozga ruxsat: \" + f.isFlightApproved());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 6-leksiyasiga (Slide 21) ko'ra: Interfeysdagi barcha maydonlar avtomatik tarzda 'public static final' konstantalar hisoblanadi. Ularni e'lon qilingan joyda qiymat bilan to'ldirish shart. Interfeyslar ob'yekt holatini (state) saqlamaydi.",
      "cleanCode": "interface IFlightReady {\n    int CONSTANT = ...;\n    void isFlightApproved();\n}",
      "breakdown": [
        "<code>IFlightReady</code>: public static final konstantaga ega interfeys.",
        "<code>PreFlightInspection</code>: interfeysni realizatsiya qilgan sinf."
      ]
    }
  },
  {
    "id": 60,
    "tier": 4,
    "tierName": "4-Bosqich: Interfeyslar Asosi (interface) va Maydon Qoidalari",
    "sector": "46-60: Interface Basics & Constants",
    "title": {
      "uz": "60. WIUT SRS — Moduldan O'tish Balli Konstantasi (40%)",
      "en": "60. WIUT SRS — Passing Grade Threshold Constant in Module Interface"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT o'quv dasturi 'IAcademicGrading' interfeysida 'int PASS_THRESHOLD = 40;' konstantasini belgilaydi. 'ModuleResult' sinfida talabaning yiqilmaganini aniqlang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'IAcademicGrading' interfeysini e'lon qiling va unga konstanta maydonini bering.\n2. Interfeys ichida 'isModulePassed(...)' abstrakt metod shartnomasini taqdim eting.\n3. 'ModuleResult' sinfini 'implements IAcademicGrading' orqali realizatsiya qiling.\n4. Interfeys konstantasidan sinf metodlarida yoki 'Main' da foydalaning.\n5. Natijani chop eting: 'IAcademicGrading res = new ModuleResult(65);         System.out.println(\"O'tish chegarasi: \" + IAcademicGrading.PASS_THRESHOLD + \" | Natija: \" + (res.isModulePassed() ? \"O'tdi\" : \"Yiqildi\"));'",
      "en": "📖 Real-World Scenario & Context\nIAcademicGrading interface defines PASS_THRESHOLD constant evaluated in ModuleResult.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare interface 'IAcademicGrading' with public static final constant.\n2. Declare abstract method 'isModulePassed(...)'.\n3. Implement interface in 'ModuleResult' using 'implements'.\n4. Access interface constant directly via 'IAcademicGrading.CONSTANT'.\n5. Print verified result: 'IAcademicGrading res = new ModuleResult(65);         System.out.println(\"O'tish chegarasi: \" + IAcademicGrading.PASS_THRESHOLD + \" | Natija: \" + (res.isModulePassed() ? \"O'tdi\" : \"Yiqildi\"));'"
    },
    "requirements": {
      "classes": [
        "ModuleResult",
        "Main"
      ],
      "interfaces": [
        "IAcademicGrading"
      ],
      "methods": [
        "isModulePassed"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "// Interfeys va konstantalarni e'lon qiling\ninterface IAcademicGrading {\n}\n\nclass ModuleResult implements IAcademicGrading {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IAcademicGrading res = new ModuleResult(65);\n        System.out.println(\"O'tish chegarasi: \" + IAcademicGrading.PASS_THRESHOLD + \" | Natija: \" + (res.isModulePassed() ? \"O'tdi\" : \"Yiqildi\"));\n    }\n}",
    "solution": "interface IAcademicGrading {\n    int PASS_THRESHOLD = 40;\n    boolean isModulePassed();\n}\n\nclass ModuleResult implements IAcademicGrading {\n    private int score;\n    public ModuleResult(int s) { this.score = s; }\n    @Override\n    public boolean isModulePassed() { return score >= PASS_THRESHOLD; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IAcademicGrading res = new ModuleResult(65);\n        System.out.println(\"O'tish chegarasi: \" + IAcademicGrading.PASS_THRESHOLD + \" | Natija: \" + (res.isModulePassed() ? \"O'tdi\" : \"Yiqildi\"));\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 6-leksiyasiga (Slide 21) ko'ra: Interfeysdagi barcha maydonlar avtomatik tarzda 'public static final' konstantalar hisoblanadi. Ularni e'lon qilingan joyda qiymat bilan to'ldirish shart. Interfeyslar ob'yekt holatini (state) saqlamaydi.",
      "cleanCode": "interface IAcademicGrading {\n    int CONSTANT = ...;\n    void isModulePassed();\n}",
      "breakdown": [
        "<code>IAcademicGrading</code>: public static final konstantaga ega interfeys.",
        "<code>ModuleResult</code>: interfeysni realizatsiya qilgan sinf."
      ]
    }
  },
  {
    "id": 61,
    "tier": 5,
    "tierName": "5-Bosqich: Java 8 Interfeys Yangiliklari: Default va Static Metodlar",
    "sector": "61-75: Interface Default & Static Methods",
    "title": {
      "uz": "61. Uzum Market — Interfeysda default Metodi va Standart Bildirishnoma",
      "en": "61. Uzum Market — Default Methods in Interfaces for Backward Compatibility"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT 6-leksiyasida (Slide 20): 'Since Java 8, interfaces can contain default methods with a body, introduced for backward compatibility'. 'INotifiable' interfeysida 'default String getAlertHeader()' metodini bering va 'OrderAlert' da undan foydalaning.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'INotifiable' interfeysida 'default' yoki 'static' metodini e'lon qiling.\n2. 'OrderAlert' sinfini 'implements INotifiable' orqali bog'lang.\n3. Zarur bo'lsa default metodni @Override qiling yoki interfeys statik metodini chaqiring.\n4. 'Main' metodida natijani tekshiring.\n5. Konsolga chiqaring: 'INotifiable alert = new OrderAlert(\"Buyurtma qabul qilindi\");         System.out.println(alert.getAlertHeader() + \": \" + alert.getMessage());'",
      "en": "📖 Real-World Scenario & Context\nDemonstrate default method in interface providing reusable fallback implementation without breaking subclasses.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare interface 'INotifiable' containing default or static methods.\n2. Implement interface in 'OrderAlert'.\n3. Optionally override default method or call static interface helper.\n4. Verify in 'main'.\n5. Print result to console: 'INotifiable alert = new OrderAlert(\"Buyurtma qabul qilindi\");         System.out.println(alert.getAlertHeader() + \": \" + alert.getMessage());'"
    },
    "requirements": {
      "classes": [
        "OrderAlert",
        "Main"
      ],
      "interfaces": [
        "INotifiable"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "// Java 8 default va static interfeys metodlarini qo'llang\ninterface INotifiable {\n}\n\nclass OrderAlert implements INotifiable {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        INotifiable alert = new OrderAlert(\"Buyurtma qabul qilindi\");\n        System.out.println(alert.getAlertHeader() + \": \" + alert.getMessage());\n    }\n}",
    "solution": "interface INotifiable {\n    default String getAlertHeader() { return \"UZUM BILDIRISHNOMASI\"; }\n    String getMessage();\n}\n\nclass OrderAlert implements INotifiable {\n    private String msg;\n    public OrderAlert(String m) { this.msg = m; }\n    @Override\n    public String getMessage() { return msg; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        INotifiable alert = new OrderAlert(\"Buyurtma qabul qilindi\");\n        System.out.println(alert.getAlertHeader() + \": \" + alert.getMessage());\n    }\n}",
    "detailedSolution": {
      "theory": "Java 8 dan boshlab interfeyslar 'default' metodlar (standart tana bilan ta'minlangan) va 'static' metodlarga ega bo'ldi. Bu interfeysga yangi metod qo'shilganda eski mavjud sinflar buzilib qolmasligi uchun ishlab chiqilgan.",
      "cleanCode": "interface INotifiable {\n    default ... () { ... }\n    static ... () { ... }\n}",
      "breakdown": [
        "<code>INotifiable</code>: default yoki static a'zoli interfeys.",
        "<code>OrderAlert</code>: interfeysdan foydalanuvchi sinf."
      ]
    }
  },
  {
    "id": 62,
    "tier": 5,
    "tierName": "5-Bosqich: Java 8 Interfeys Yangiliklari: Default va Static Metodlar",
    "sector": "61-75: Interface Default & Static Methods",
    "title": {
      "uz": "62. Payme — default To'lov Komissiyasi Formulasi",
      "en": "62. Payme — Default Payment Fee Calculation Method"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nPayme 'IPaymentCalculator' interfeysida 'default double calculateFee(double amount)' metodi sukut bo'yicha 1% komissiya hisoblaydi. 'StandardCardPayment' uni to'g'ridan-to'g'ri meros qilib oladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'IPaymentCalculator' interfeysida 'default' yoki 'static' metodini e'lon qiling.\n2. 'StandardCardPayment' sinfini 'implements IPaymentCalculator' orqali bog'lang.\n3. Zarur bo'lsa default metodni @Override qiling yoki interfeys statik metodini chaqiring.\n4. 'Main' metodida natijani tekshiring.\n5. Konsolga chiqaring: 'IPaymentCalculator calc = new StandardCardPayment();         System.out.println(\"Standart komissiya: \" + calc.calculateFee(300000.0) + \" UZS\");'",
      "en": "📖 Real-World Scenario & Context\nUse default interface method calculateFee returning standard 1% fee unless overridden.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare interface 'IPaymentCalculator' containing default or static methods.\n2. Implement interface in 'StandardCardPayment'.\n3. Optionally override default method or call static interface helper.\n4. Verify in 'main'.\n5. Print result to console: 'IPaymentCalculator calc = new StandardCardPayment();         System.out.println(\"Standart komissiya: \" + calc.calculateFee(300000.0) + \" UZS\");'"
    },
    "requirements": {
      "classes": [
        "StandardCardPayment",
        "Main"
      ],
      "interfaces": [
        "IPaymentCalculator"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "// Java 8 default va static interfeys metodlarini qo'llang\ninterface IPaymentCalculator {\n}\n\nclass StandardCardPayment implements IPaymentCalculator {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IPaymentCalculator calc = new StandardCardPayment();\n        System.out.println(\"Standart komissiya: \" + calc.calculateFee(300000.0) + \" UZS\");\n    }\n}",
    "solution": "interface IPaymentCalculator {\n    default double calculateFee(double amount) { return amount * 0.01; }\n}\n\nclass StandardCardPayment implements IPaymentCalculator {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IPaymentCalculator calc = new StandardCardPayment();\n        System.out.println(\"Standart komissiya: \" + calc.calculateFee(300000.0) + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "Java 8 dan boshlab interfeyslar 'default' metodlar (standart tana bilan ta'minlangan) va 'static' metodlarga ega bo'ldi. Bu interfeysga yangi metod qo'shilganda eski mavjud sinflar buzilib qolmasligi uchun ishlab chiqilgan.",
      "cleanCode": "interface IPaymentCalculator {\n    default ... () { ... }\n    static ... () { ... }\n}",
      "breakdown": [
        "<code>IPaymentCalculator</code>: default yoki static a'zoli interfeys.",
        "<code>StandardCardPayment</code>: interfeysdan foydalanuvchi sinf."
      ]
    }
  },
  {
    "id": 63,
    "tier": 5,
    "tierName": "5-Bosqich: Java 8 Interfeys Yangiliklari: Default va Static Metodlar",
    "sector": "61-75: Interface Default & Static Methods",
    "title": {
      "uz": "63. Korzinka — Interfeysda static Metod va Barkod Generatori",
      "en": "63. Korzinka — Static Utility Method in Interface"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nLeksiyada: 'Static methods in interfaces belong to the interface itself, not an instance'. 'IBarcodeHelper' interfeysida 'static String generateEan13(long code)' statik metodini yozing va chaqiring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'IBarcodeHelper' interfeysida 'default' yoki 'static' metodini e'lon qiling.\n2. 'ReceiptBarcode' sinfini 'implements IBarcodeHelper' orqali bog'lang.\n3. Zarur bo'lsa default metodni @Override qiling yoki interfeys statik metodini chaqiring.\n4. 'Main' metodida natijani tekshiring.\n5. Konsolga chiqaring: 'String ean = IBarcodeHelper.generateEan13(123456789012L);         System.out.println(\"Generatsiya qilingan EAN-13: \" + ean);'",
      "en": "📖 Real-World Scenario & Context\nCall interface static method directly via InterfaceName.method() as explained in Slide 20.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare interface 'IBarcodeHelper' containing default or static methods.\n2. Implement interface in 'ReceiptBarcode'.\n3. Optionally override default method or call static interface helper.\n4. Verify in 'main'.\n5. Print result to console: 'String ean = IBarcodeHelper.generateEan13(123456789012L);         System.out.println(\"Generatsiya qilingan EAN-13: \" + ean);'"
    },
    "requirements": {
      "classes": [
        "ReceiptBarcode",
        "Main"
      ],
      "interfaces": [
        "IBarcodeHelper"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "// Java 8 default va static interfeys metodlarini qo'llang\ninterface IBarcodeHelper {\n}\n\nclass ReceiptBarcode implements IBarcodeHelper {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        String ean = IBarcodeHelper.generateEan13(123456789012L);\n        System.out.println(\"Generatsiya qilingan EAN-13: \" + ean);\n    }\n}",
    "solution": "interface IBarcodeHelper {\n    static String generateEan13(long code) {\n        return \"478\" + code;\n    }\n}\n\nclass ReceiptBarcode implements IBarcodeHelper {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        String ean = IBarcodeHelper.generateEan13(123456789012L);\n        System.out.println(\"Generatsiya qilingan EAN-13: \" + ean);\n    }\n}",
    "detailedSolution": {
      "theory": "Java 8 dan boshlab interfeyslar 'default' metodlar (standart tana bilan ta'minlangan) va 'static' metodlarga ega bo'ldi. Bu interfeysga yangi metod qo'shilganda eski mavjud sinflar buzilib qolmasligi uchun ishlab chiqilgan.",
      "cleanCode": "interface IBarcodeHelper {\n    default ... () { ... }\n    static ... () { ... }\n}",
      "breakdown": [
        "<code>IBarcodeHelper</code>: default yoki static a'zoli interfeys.",
        "<code>ReceiptBarcode</code>: interfeysdan foydalanuvchi sinf."
      ]
    }
  },
  {
    "id": 64,
    "tier": 5,
    "tierName": "5-Bosqich: Java 8 Interfeys Yangiliklari: Default va Static Metodlar",
    "sector": "61-75: Interface Default & Static Methods",
    "title": {
      "uz": "64. Yandex Go — default Tirbandlik Koeffitsiyenti (Surge Multiplier)",
      "en": "64. Yandex Go — Default Surge Multiplier in Pricing Interface"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nYandex Go 'ITrafficPricing' interfeysida 'default double getSurgeMultiplier()' 1.0 (oddiy holat) qaytaradi. 'NightRushPricing' sinfi uni 1.4 ga qayta yozadi (@Override).\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'ITrafficPricing' interfeysida 'default' yoki 'static' metodini e'lon qiling.\n2. 'NightRushPricing' sinfini 'implements ITrafficPricing' orqali bog'lang.\n3. Zarur bo'lsa default metodni @Override qiling yoki interfeys statik metodini chaqiring.\n4. 'Main' metodida natijani tekshiring.\n5. Konsolga chiqaring: 'ITrafficPricing p = new NightRushPricing();         System.out.println(\"Tirbandlik koeffitsiyenti: \" + p.getSurgeMultiplier());'",
      "en": "📖 Real-World Scenario & Context\nOverride default method in subclass providing customized rush-hour surge pricing.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare interface 'ITrafficPricing' containing default or static methods.\n2. Implement interface in 'NightRushPricing'.\n3. Optionally override default method or call static interface helper.\n4. Verify in 'main'.\n5. Print result to console: 'ITrafficPricing p = new NightRushPricing();         System.out.println(\"Tirbandlik koeffitsiyenti: \" + p.getSurgeMultiplier());'"
    },
    "requirements": {
      "classes": [
        "NightRushPricing",
        "Main"
      ],
      "interfaces": [
        "ITrafficPricing"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "// Java 8 default va static interfeys metodlarini qo'llang\ninterface ITrafficPricing {\n}\n\nclass NightRushPricing implements ITrafficPricing {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ITrafficPricing p = new NightRushPricing();\n        System.out.println(\"Tirbandlik koeffitsiyenti: \" + p.getSurgeMultiplier());\n    }\n}",
    "solution": "interface ITrafficPricing {\n    default double getSurgeMultiplier() { return 1.0; }\n}\n\nclass NightRushPricing implements ITrafficPricing {\n    @Override\n    public double getSurgeMultiplier() { return 1.4; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ITrafficPricing p = new NightRushPricing();\n        System.out.println(\"Tirbandlik koeffitsiyenti: \" + p.getSurgeMultiplier());\n    }\n}",
    "detailedSolution": {
      "theory": "Java 8 dan boshlab interfeyslar 'default' metodlar (standart tana bilan ta'minlangan) va 'static' metodlarga ega bo'ldi. Bu interfeysga yangi metod qo'shilganda eski mavjud sinflar buzilib qolmasligi uchun ishlab chiqilgan.",
      "cleanCode": "interface ITrafficPricing {\n    default ... () { ... }\n    static ... () { ... }\n}",
      "breakdown": [
        "<code>ITrafficPricing</code>: default yoki static a'zoli interfeys.",
        "<code>NightRushPricing</code>: interfeysdan foydalanuvchi sinf."
      ]
    }
  },
  {
    "id": 65,
    "tier": 5,
    "tierName": "5-Bosqich: Java 8 Interfeys Yangiliklari: Default va Static Metodlar",
    "sector": "61-75: Interface Default & Static Methods",
    "title": {
      "uz": "65. Click — Interfeysda static Valyuta Konvertatsiyasi",
      "en": "65. Click — Static Currency Conversion in Payment Interface"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nClick 'ICurrencyConverter' interfeysida 'static double usdToUzs(double usd, double rate)' statik metodini bering va 100 USD ni so'mga aylantiring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'ICurrencyConverter' interfeysida 'default' yoki 'static' metodini e'lon qiling.\n2. 'FxPayment' sinfini 'implements ICurrencyConverter' orqali bog'lang.\n3. Zarur bo'lsa default metodni @Override qiling yoki interfeys statik metodini chaqiring.\n4. 'Main' metodida natijani tekshiring.\n5. Konsolga chiqaring: 'double sum = ICurrencyConverter.usdToUzs(100.0, 12600.0);         System.out.println(\"100 USD so'mda: \" + sum + \" UZS\");'",
      "en": "📖 Real-World Scenario & Context\nImplement static helper inside interface to convert currencies without creating instances.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare interface 'ICurrencyConverter' containing default or static methods.\n2. Implement interface in 'FxPayment'.\n3. Optionally override default method or call static interface helper.\n4. Verify in 'main'.\n5. Print result to console: 'double sum = ICurrencyConverter.usdToUzs(100.0, 12600.0);         System.out.println(\"100 USD so'mda: \" + sum + \" UZS\");'"
    },
    "requirements": {
      "classes": [
        "FxPayment",
        "Main"
      ],
      "interfaces": [
        "ICurrencyConverter"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "// Java 8 default va static interfeys metodlarini qo'llang\ninterface ICurrencyConverter {\n}\n\nclass FxPayment implements ICurrencyConverter {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        double sum = ICurrencyConverter.usdToUzs(100.0, 12600.0);\n        System.out.println(\"100 USD so'mda: \" + sum + \" UZS\");\n    }\n}",
    "solution": "interface ICurrencyConverter {\n    static double usdToUzs(double usd, double rate) { return usd * rate; }\n}\n\nclass FxPayment implements ICurrencyConverter {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        double sum = ICurrencyConverter.usdToUzs(100.0, 12600.0);\n        System.out.println(\"100 USD so'mda: \" + sum + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "Java 8 dan boshlab interfeyslar 'default' metodlar (standart tana bilan ta'minlangan) va 'static' metodlarga ega bo'ldi. Bu interfeysga yangi metod qo'shilganda eski mavjud sinflar buzilib qolmasligi uchun ishlab chiqilgan.",
      "cleanCode": "interface ICurrencyConverter {\n    default ... () { ... }\n    static ... () { ... }\n}",
      "breakdown": [
        "<code>ICurrencyConverter</code>: default yoki static a'zoli interfeys.",
        "<code>FxPayment</code>: interfeysdan foydalanuvchi sinf."
      ]
    }
  },
  {
    "id": 66,
    "tier": 5,
    "tierName": "5-Bosqich: Java 8 Interfeys Yangiliklari: Default va Static Metodlar",
    "sector": "61-75: Interface Default & Static Methods",
    "title": {
      "uz": "66. Safia — default Qadoqlash Xarajati",
      "en": "66. Safia — Default Packaging Cost in Bakery Order Interface"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSafia 'IPackageable' interfeysida 'default double getPackagingFee()' 3000 UZS qaytaradi. 'StandardPastryOrder' uni o'zgartirmasdan ishlatadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'IPackageable' interfeysida 'default' yoki 'static' metodini e'lon qiling.\n2. 'StandardPastryOrder' sinfini 'implements IPackageable' orqali bog'lang.\n3. Zarur bo'lsa default metodni @Override qiling yoki interfeys statik metodini chaqiring.\n4. 'Main' metodida natijani tekshiring.\n5. Konsolga chiqaring: 'IPackageable ord = new StandardPastryOrder(\"Desert Box\");         System.out.println(ord.getOrderName() + \" qadoqlash haqi: \" + ord.getPackagingFee() + \" UZS\");'",
      "en": "📖 Real-World Scenario & Context\nInherit default packaging charge in bakery order without needing explicit override.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare interface 'IPackageable' containing default or static methods.\n2. Implement interface in 'StandardPastryOrder'.\n3. Optionally override default method or call static interface helper.\n4. Verify in 'main'.\n5. Print result to console: 'IPackageable ord = new StandardPastryOrder(\"Desert Box\");         System.out.println(ord.getOrderName() + \" qadoqlash haqi: \" + ord.getPackagingFee() + \" UZS\");'"
    },
    "requirements": {
      "classes": [
        "StandardPastryOrder",
        "Main"
      ],
      "interfaces": [
        "IPackageable"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "// Java 8 default va static interfeys metodlarini qo'llang\ninterface IPackageable {\n}\n\nclass StandardPastryOrder implements IPackageable {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IPackageable ord = new StandardPastryOrder(\"Desert Box\");\n        System.out.println(ord.getOrderName() + \" qadoqlash haqi: \" + ord.getPackagingFee() + \" UZS\");\n    }\n}",
    "solution": "interface IPackageable {\n    default double getPackagingFee() { return 3000.0; }\n    String getOrderName();\n}\n\nclass StandardPastryOrder implements IPackageable {\n    private String name;\n    public StandardPastryOrder(String n) { this.name = n; }\n    @Override\n    public String getOrderName() { return name; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IPackageable ord = new StandardPastryOrder(\"Desert Box\");\n        System.out.println(ord.getOrderName() + \" qadoqlash haqi: \" + ord.getPackagingFee() + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "Java 8 dan boshlab interfeyslar 'default' metodlar (standart tana bilan ta'minlangan) va 'static' metodlarga ega bo'ldi. Bu interfeysga yangi metod qo'shilganda eski mavjud sinflar buzilib qolmasligi uchun ishlab chiqilgan.",
      "cleanCode": "interface IPackageable {\n    default ... () { ... }\n    static ... () { ... }\n}",
      "breakdown": [
        "<code>IPackageable</code>: default yoki static a'zoli interfeys.",
        "<code>StandardPastryOrder</code>: interfeysdan foydalanuvchi sinf."
      ]
    }
  },
  {
    "id": 67,
    "tier": 5,
    "tierName": "5-Bosqich: Java 8 Interfeys Yangiliklari: Default va Static Metodlar",
    "sector": "61-75: Interface Default & Static Methods",
    "title": {
      "uz": "67. Dodo Pizza — default Yetkazish Kafolati (30 Daqiqa)",
      "en": "67. Dodo Pizza — Default Delivery Guarantee Time in Interface"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nDodo 'IDeliveryGuaranteed' interfeysida 'default int getGuaranteedMinutes()' metodi sukut bo'yicha 30 daqiqa qaytaradi. 'FastTrackDelivery' sinfida undan foydalaning.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'IDeliveryGuaranteed' interfeysida 'default' yoki 'static' metodini e'lon qiling.\n2. 'FastTrackDelivery' sinfini 'implements IDeliveryGuaranteed' orqali bog'lang.\n3. Zarur bo'lsa default metodni @Override qiling yoki interfeys statik metodini chaqiring.\n4. 'Main' metodida natijani tekshiring.\n5. Konsolga chiqaring: 'IDeliveryGuaranteed del = new FastTrackDelivery();         System.out.println(\"Kafolatlangan yetkazish: \" + del.getGuaranteedMinutes() + \" daqiqa\");'",
      "en": "📖 Real-World Scenario & Context\nUse default delivery guarantee time provided by IDeliveryGuaranteed interface.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare interface 'IDeliveryGuaranteed' containing default or static methods.\n2. Implement interface in 'FastTrackDelivery'.\n3. Optionally override default method or call static interface helper.\n4. Verify in 'main'.\n5. Print result to console: 'IDeliveryGuaranteed del = new FastTrackDelivery();         System.out.println(\"Kafolatlangan yetkazish: \" + del.getGuaranteedMinutes() + \" daqiqa\");'"
    },
    "requirements": {
      "classes": [
        "FastTrackDelivery",
        "Main"
      ],
      "interfaces": [
        "IDeliveryGuaranteed"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "// Java 8 default va static interfeys metodlarini qo'llang\ninterface IDeliveryGuaranteed {\n}\n\nclass FastTrackDelivery implements IDeliveryGuaranteed {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IDeliveryGuaranteed del = new FastTrackDelivery();\n        System.out.println(\"Kafolatlangan yetkazish: \" + del.getGuaranteedMinutes() + \" daqiqa\");\n    }\n}",
    "solution": "interface IDeliveryGuaranteed {\n    default int getGuaranteedMinutes() { return 30; }\n}\n\nclass FastTrackDelivery implements IDeliveryGuaranteed {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IDeliveryGuaranteed del = new FastTrackDelivery();\n        System.out.println(\"Kafolatlangan yetkazish: \" + del.getGuaranteedMinutes() + \" daqiqa\");\n    }\n}",
    "detailedSolution": {
      "theory": "Java 8 dan boshlab interfeyslar 'default' metodlar (standart tana bilan ta'minlangan) va 'static' metodlarga ega bo'ldi. Bu interfeysga yangi metod qo'shilganda eski mavjud sinflar buzilib qolmasligi uchun ishlab chiqilgan.",
      "cleanCode": "interface IDeliveryGuaranteed {\n    default ... () { ... }\n    static ... () { ... }\n}",
      "breakdown": [
        "<code>IDeliveryGuaranteed</code>: default yoki static a'zoli interfeys.",
        "<code>FastTrackDelivery</code>: interfeysdan foydalanuvchi sinf."
      ]
    }
  },
  {
    "id": 68,
    "tier": 5,
    "tierName": "5-Bosqich: Java 8 Interfeys Yangiliklari: Default va Static Metodlar",
    "sector": "61-75: Interface Default & Static Methods",
    "title": {
      "uz": "68. Texnomart — static Energiya Samaradorligi Tekshiruvi",
      "en": "68. Texnomart — Static Energy Rating Validator in Interface"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nTexnomart 'IEnergyStandard' interfeysida 'static boolean isAClass(int annualKwh)' statik metodini e'lon qiling. Yillik 200 kVt dan kam bo'lsa tejamkor deb topilsin.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'IEnergyStandard' interfeysida 'default' yoki 'static' metodini e'lon qiling.\n2. 'EcoFridge' sinfini 'implements IEnergyStandard' orqali bog'lang.\n3. Zarur bo'lsa default metodni @Override qiling yoki interfeys statik metodini chaqiring.\n4. 'Main' metodida natijani tekshiring.\n5. Konsolga chiqaring: 'boolean ok = IEnergyStandard.isAClass(180);         System.out.println(\"180 kVt A-klassga mosmi: \" + ok);'",
      "en": "📖 Real-World Scenario & Context\nValidate energy efficiency via interface static method without instantiating objects.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare interface 'IEnergyStandard' containing default or static methods.\n2. Implement interface in 'EcoFridge'.\n3. Optionally override default method or call static interface helper.\n4. Verify in 'main'.\n5. Print result to console: 'boolean ok = IEnergyStandard.isAClass(180);         System.out.println(\"180 kVt A-klassga mosmi: \" + ok);'"
    },
    "requirements": {
      "classes": [
        "EcoFridge",
        "Main"
      ],
      "interfaces": [
        "IEnergyStandard"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "// Java 8 default va static interfeys metodlarini qo'llang\ninterface IEnergyStandard {\n}\n\nclass EcoFridge implements IEnergyStandard {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        boolean ok = IEnergyStandard.isAClass(180);\n        System.out.println(\"180 kVt A-klassga mosmi: \" + ok);\n    }\n}",
    "solution": "interface IEnergyStandard {\n    static boolean isAClass(int annualKwh) { return annualKwh < 200; }\n}\n\nclass EcoFridge implements IEnergyStandard {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        boolean ok = IEnergyStandard.isAClass(180);\n        System.out.println(\"180 kVt A-klassga mosmi: \" + ok);\n    }\n}",
    "detailedSolution": {
      "theory": "Java 8 dan boshlab interfeyslar 'default' metodlar (standart tana bilan ta'minlangan) va 'static' metodlarga ega bo'ldi. Bu interfeysga yangi metod qo'shilganda eski mavjud sinflar buzilib qolmasligi uchun ishlab chiqilgan.",
      "cleanCode": "interface IEnergyStandard {\n    default ... () { ... }\n    static ... () { ... }\n}",
      "breakdown": [
        "<code>IEnergyStandard</code>: default yoki static a'zoli interfeys.",
        "<code>EcoFridge</code>: interfeysdan foydalanuvchi sinf."
      ]
    }
  },
  {
    "id": 69,
    "tier": 5,
    "tierName": "5-Bosqich: Java 8 Interfeys Yangiliklari: Default va Static Metodlar",
    "sector": "61-75: Interface Default & Static Methods",
    "title": {
      "uz": "69. Medion — default Navbat Chiptasi Prefiksi",
      "en": "69. Medion — Default Ticket Prefix Formatting in Interface"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nMedion 'ITicketDispenser' interfeysida 'default String formatTicket(int num)' metodi 'MED-' prefiksini qo'shadi. 'CheckupTicket' sinfida 105-chi raqamni chiqaring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'ITicketDispenser' interfeysida 'default' yoki 'static' metodini e'lon qiling.\n2. 'CheckupTicket' sinfini 'implements ITicketDispenser' orqali bog'lang.\n3. Zarur bo'lsa default metodni @Override qiling yoki interfeys statik metodini chaqiring.\n4. 'Main' metodida natijani tekshiring.\n5. Konsolga chiqaring: 'ITicketDispenser td = new CheckupTicket();         System.out.println(\"Navbat raqami: \" + td.formatTicket(105));'",
      "en": "📖 Real-World Scenario & Context\nProvide default ticket prefix formatting in clinic interface.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare interface 'ITicketDispenser' containing default or static methods.\n2. Implement interface in 'CheckupTicket'.\n3. Optionally override default method or call static interface helper.\n4. Verify in 'main'.\n5. Print result to console: 'ITicketDispenser td = new CheckupTicket();         System.out.println(\"Navbat raqami: \" + td.formatTicket(105));'"
    },
    "requirements": {
      "classes": [
        "CheckupTicket",
        "Main"
      ],
      "interfaces": [
        "ITicketDispenser"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "// Java 8 default va static interfeys metodlarini qo'llang\ninterface ITicketDispenser {\n}\n\nclass CheckupTicket implements ITicketDispenser {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ITicketDispenser td = new CheckupTicket();\n        System.out.println(\"Navbat raqami: \" + td.formatTicket(105));\n    }\n}",
    "solution": "interface ITicketDispenser {\n    default String formatTicket(int num) { return \"MED-\" + num; }\n}\n\nclass CheckupTicket implements ITicketDispenser {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ITicketDispenser td = new CheckupTicket();\n        System.out.println(\"Navbat raqami: \" + td.formatTicket(105));\n    }\n}",
    "detailedSolution": {
      "theory": "Java 8 dan boshlab interfeyslar 'default' metodlar (standart tana bilan ta'minlangan) va 'static' metodlarga ega bo'ldi. Bu interfeysga yangi metod qo'shilganda eski mavjud sinflar buzilib qolmasligi uchun ishlab chiqilgan.",
      "cleanCode": "interface ITicketDispenser {\n    default ... () { ... }\n    static ... () { ... }\n}",
      "breakdown": [
        "<code>ITicketDispenser</code>: default yoki static a'zoli interfeys.",
        "<code>CheckupTicket</code>: interfeysdan foydalanuvchi sinf."
      ]
    }
  },
  {
    "id": 70,
    "tier": 5,
    "tierName": "5-Bosqich: Java 8 Interfeys Yangiliklari: Default va Static Metodlar",
    "sector": "61-75: Interface Default & Static Methods",
    "title": {
      "uz": "70. Express24 — default Tungi Yetkazish Ustamasi",
      "en": "70. Express24 — Default Night Surcharge Method in Delivery Interface"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nExpress24 'INightDelivery' interfeysida 'default double getNightSurcharge()' 5000 UZS qo'shimcha to'lov beradi. 'LateNightOrder' uni bazaviy 15000 UZS ga qo'shib hisoblaydi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'INightDelivery' interfeysida 'default' yoki 'static' metodini e'lon qiling.\n2. 'LateNightOrder' sinfini 'implements INightDelivery' orqali bog'lang.\n3. Zarur bo'lsa default metodni @Override qiling yoki interfeys statik metodini chaqiring.\n4. 'Main' metodida natijani tekshiring.\n5. Konsolga chiqaring: 'LateNightOrder ord = new LateNightOrder(15000.0);         System.out.println(\"Tungi buyurtma jami: \" + ord.calculateTotalCost() + \" UZS\");'",
      "en": "📖 Real-World Scenario & Context\nCalculate night delivery cost utilizing interface default surcharge method.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare interface 'INightDelivery' containing default or static methods.\n2. Implement interface in 'LateNightOrder'.\n3. Optionally override default method or call static interface helper.\n4. Verify in 'main'.\n5. Print result to console: 'LateNightOrder ord = new LateNightOrder(15000.0);         System.out.println(\"Tungi buyurtma jami: \" + ord.calculateTotalCost() + \" UZS\");'"
    },
    "requirements": {
      "classes": [
        "LateNightOrder",
        "Main"
      ],
      "interfaces": [
        "INightDelivery"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "// Java 8 default va static interfeys metodlarini qo'llang\ninterface INightDelivery {\n}\n\nclass LateNightOrder implements INightDelivery {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LateNightOrder ord = new LateNightOrder(15000.0);\n        System.out.println(\"Tungi buyurtma jami: \" + ord.calculateTotalCost() + \" UZS\");\n    }\n}",
    "solution": "interface INightDelivery {\n    default double getNightSurcharge() { return 5000.0; }\n}\n\nclass LateNightOrder implements INightDelivery {\n    private double baseCost;\n    public LateNightOrder(double base) { this.baseCost = base; }\n    public double calculateTotalCost() { return baseCost + getNightSurcharge(); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LateNightOrder ord = new LateNightOrder(15000.0);\n        System.out.println(\"Tungi buyurtma jami: \" + ord.calculateTotalCost() + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "Java 8 dan boshlab interfeyslar 'default' metodlar (standart tana bilan ta'minlangan) va 'static' metodlarga ega bo'ldi. Bu interfeysga yangi metod qo'shilganda eski mavjud sinflar buzilib qolmasligi uchun ishlab chiqilgan.",
      "cleanCode": "interface INightDelivery {\n    default ... () { ... }\n    static ... () { ... }\n}",
      "breakdown": [
        "<code>INightDelivery</code>: default yoki static a'zoli interfeys.",
        "<code>LateNightOrder</code>: interfeysdan foydalanuvchi sinf."
      ]
    }
  },
  {
    "id": 71,
    "tier": 5,
    "tierName": "5-Bosqich: Java 8 Interfeys Yangiliklari: Default va Static Metodlar",
    "sector": "61-75: Interface Default & Static Methods",
    "title": {
      "uz": "71. Asaxiy — static Mutolaa Vaqtini Baholash (Reading Estimation)",
      "en": "71. Asaxiy — Static Reading Duration Calculator in Book Interface"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nAsaxiy 'IReadingEstimator' interfeysida 'static int estimateMinutes(int pages)' statik metodini tuzing (har 1 sahifa = 2 daqiqa). 150 sahifalik kitob vaqtini hisoblang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'IReadingEstimator' interfeysida 'default' yoki 'static' metodini e'lon qiling.\n2. 'EBookReader' sinfini 'implements IReadingEstimator' orqali bog'lang.\n3. Zarur bo'lsa default metodni @Override qiling yoki interfeys statik metodini chaqiring.\n4. 'Main' metodida natijani tekshiring.\n5. Konsolga chiqaring: 'int mins = IReadingEstimator.estimateMinutes(150);         System.out.println(\"150 sahifa o'qish vaqti: \" + mins + \" daqiqa\");'",
      "en": "📖 Real-World Scenario & Context\nInterface static method calculates expected reading duration based on page count.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare interface 'IReadingEstimator' containing default or static methods.\n2. Implement interface in 'EBookReader'.\n3. Optionally override default method or call static interface helper.\n4. Verify in 'main'.\n5. Print result to console: 'int mins = IReadingEstimator.estimateMinutes(150);         System.out.println(\"150 sahifa o'qish vaqti: \" + mins + \" daqiqa\");'"
    },
    "requirements": {
      "classes": [
        "EBookReader",
        "Main"
      ],
      "interfaces": [
        "IReadingEstimator"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "// Java 8 default va static interfeys metodlarini qo'llang\ninterface IReadingEstimator {\n}\n\nclass EBookReader implements IReadingEstimator {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        int mins = IReadingEstimator.estimateMinutes(150);\n        System.out.println(\"150 sahifa o'qish vaqti: \" + mins + \" daqiqa\");\n    }\n}",
    "solution": "interface IReadingEstimator {\n    static int estimateMinutes(int pages) { return pages * 2; }\n}\n\nclass EBookReader implements IReadingEstimator {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        int mins = IReadingEstimator.estimateMinutes(150);\n        System.out.println(\"150 sahifa o'qish vaqti: \" + mins + \" daqiqa\");\n    }\n}",
    "detailedSolution": {
      "theory": "Java 8 dan boshlab interfeyslar 'default' metodlar (standart tana bilan ta'minlangan) va 'static' metodlarga ega bo'ldi. Bu interfeysga yangi metod qo'shilganda eski mavjud sinflar buzilib qolmasligi uchun ishlab chiqilgan.",
      "cleanCode": "interface IReadingEstimator {\n    default ... () { ... }\n    static ... () { ... }\n}",
      "breakdown": [
        "<code>IReadingEstimator</code>: default yoki static a'zoli interfeys.",
        "<code>EBookReader</code>: interfeysdan foydalanuvchi sinf."
      ]
    }
  },
  {
    "id": 72,
    "tier": 5,
    "tierName": "5-Bosqich: Java 8 Interfeys Yangiliklari: Default va Static Metodlar",
    "sector": "61-75: Interface Default & Static Methods",
    "title": {
      "uz": "72. Kapitalbank — default SMS Xabarnoma To'lovi",
      "en": "72. Kapitalbank — Default SMS Notification Monthly Fee"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nKapitalbank 'ISmsAlert' interfeysida 'default double getSmsMonthlyFee()' metodi 1000 UZS beradi. 'PremiumCardAccount' esa bepul (0.0) qilish uchun metodni qayta yozadi (@Override).\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'ISmsAlert' interfeysida 'default' yoki 'static' metodini e'lon qiling.\n2. 'PremiumCardAccount' sinfini 'implements ISmsAlert' orqali bog'lang.\n3. Zarur bo'lsa default metodni @Override qiling yoki interfeys statik metodini chaqiring.\n4. 'Main' metodida natijani tekshiring.\n5. Konsolga chiqaring: 'ISmsAlert card = new PremiumCardAccount();         System.out.println(\"Premium SMS to'lovi: \" + card.getSmsMonthlyFee() + \" UZS\");'",
      "en": "📖 Real-World Scenario & Context\nSubclass overrides default interface method to offer free SMS alerts on premium cards.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare interface 'ISmsAlert' containing default or static methods.\n2. Implement interface in 'PremiumCardAccount'.\n3. Optionally override default method or call static interface helper.\n4. Verify in 'main'.\n5. Print result to console: 'ISmsAlert card = new PremiumCardAccount();         System.out.println(\"Premium SMS to'lovi: \" + card.getSmsMonthlyFee() + \" UZS\");'"
    },
    "requirements": {
      "classes": [
        "PremiumCardAccount",
        "Main"
      ],
      "interfaces": [
        "ISmsAlert"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "// Java 8 default va static interfeys metodlarini qo'llang\ninterface ISmsAlert {\n}\n\nclass PremiumCardAccount implements ISmsAlert {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ISmsAlert card = new PremiumCardAccount();\n        System.out.println(\"Premium SMS to'lovi: \" + card.getSmsMonthlyFee() + \" UZS\");\n    }\n}",
    "solution": "interface ISmsAlert {\n    default double getSmsMonthlyFee() { return 1000.0; }\n}\n\nclass PremiumCardAccount implements ISmsAlert {\n    @Override\n    public double getSmsMonthlyFee() { return 0.0; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ISmsAlert card = new PremiumCardAccount();\n        System.out.println(\"Premium SMS to'lovi: \" + card.getSmsMonthlyFee() + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "Java 8 dan boshlab interfeyslar 'default' metodlar (standart tana bilan ta'minlangan) va 'static' metodlarga ega bo'ldi. Bu interfeysga yangi metod qo'shilganda eski mavjud sinflar buzilib qolmasligi uchun ishlab chiqilgan.",
      "cleanCode": "interface ISmsAlert {\n    default ... () { ... }\n    static ... () { ... }\n}",
      "breakdown": [
        "<code>ISmsAlert</code>: default yoki static a'zoli interfeys.",
        "<code>PremiumCardAccount</code>: interfeysdan foydalanuvchi sinf."
      ]
    }
  },
  {
    "id": 73,
    "tier": 5,
    "tierName": "5-Bosqich: Java 8 Interfeys Yangiliklari: Default va Static Metodlar",
    "sector": "61-75: Interface Default & Static Methods",
    "title": {
      "uz": "73. Beeline — static Telefon Prefiksi Tekshiruvchisi",
      "en": "73. Beeline — Static Phone Prefix Validator in Interface"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nBeeline 'IBeelineValidator' interfeysida 'static boolean isBeeline(String prefix)' metodini yozing ('90' va '91' prefikslari uchun true). '90' prefiksini tekshiring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'IBeelineValidator' interfeysida 'default' yoki 'static' metodini e'lon qiling.\n2. 'PhoneChecker' sinfini 'implements IBeelineValidator' orqali bog'lang.\n3. Zarur bo'lsa default metodni @Override qiling yoki interfeys statik metodini chaqiring.\n4. 'Main' metodida natijani tekshiring.\n5. Konsolga chiqaring: 'boolean ok = IBeelineValidator.isBeeline(\"90\");         System.out.println(\"90 Beeline prefiksimi: \" + ok);'",
      "en": "📖 Real-World Scenario & Context\nCheck mobile operator prefix using interface static validator.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare interface 'IBeelineValidator' containing default or static methods.\n2. Implement interface in 'PhoneChecker'.\n3. Optionally override default method or call static interface helper.\n4. Verify in 'main'.\n5. Print result to console: 'boolean ok = IBeelineValidator.isBeeline(\"90\");         System.out.println(\"90 Beeline prefiksimi: \" + ok);'"
    },
    "requirements": {
      "classes": [
        "PhoneChecker",
        "Main"
      ],
      "interfaces": [
        "IBeelineValidator"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "// Java 8 default va static interfeys metodlarini qo'llang\ninterface IBeelineValidator {\n}\n\nclass PhoneChecker implements IBeelineValidator {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        boolean ok = IBeelineValidator.isBeeline(\"90\");\n        System.out.println(\"90 Beeline prefiksimi: \" + ok);\n    }\n}",
    "solution": "interface IBeelineValidator {\n    static boolean isBeeline(String prefix) {\n        return prefix != null && (prefix.equals(\"90\") || prefix.equals(\"91\"));\n    }\n}\n\nclass PhoneChecker implements IBeelineValidator {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        boolean ok = IBeelineValidator.isBeeline(\"90\");\n        System.out.println(\"90 Beeline prefiksimi: \" + ok);\n    }\n}",
    "detailedSolution": {
      "theory": "Java 8 dan boshlab interfeyslar 'default' metodlar (standart tana bilan ta'minlangan) va 'static' metodlarga ega bo'ldi. Bu interfeysga yangi metod qo'shilganda eski mavjud sinflar buzilib qolmasligi uchun ishlab chiqilgan.",
      "cleanCode": "interface IBeelineValidator {\n    default ... () { ... }\n    static ... () { ... }\n}",
      "breakdown": [
        "<code>IBeelineValidator</code>: default yoki static a'zoli interfeys.",
        "<code>PhoneChecker</code>: interfeysdan foydalanuvchi sinf."
      ]
    }
  },
  {
    "id": 74,
    "tier": 5,
    "tierName": "5-Bosqich: Java 8 Interfeys Yangiliklari: Default va Static Metodlar",
    "sector": "61-75: Interface Default & Static Methods",
    "title": {
      "uz": "74. UzAirways — default Bepul Ovqatlanish Varianti",
      "en": "74. UzAirways — Default In-Flight Meal Option in Airline Interface"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nUzAirways 'ICateringService' interfeysida 'default String getStandardMeal()' metodi 'Issiq taom va choy' qaytaradi. 'EconomyMeal' undan bevosita foydalanadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'ICateringService' interfeysida 'default' yoki 'static' metodini e'lon qiling.\n2. 'EconomyMeal' sinfini 'implements ICateringService' orqali bog'lang.\n3. Zarur bo'lsa default metodni @Override qiling yoki interfeys statik metodini chaqiring.\n4. 'Main' metodida natijani tekshiring.\n5. Konsolga chiqaring: 'ICateringService meal = new EconomyMeal();         System.out.println(\"Bort taomi: \" + meal.getStandardMeal());'",
      "en": "📖 Real-World Scenario & Context\nAirline meal interface supplies default hot meal description.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare interface 'ICateringService' containing default or static methods.\n2. Implement interface in 'EconomyMeal'.\n3. Optionally override default method or call static interface helper.\n4. Verify in 'main'.\n5. Print result to console: 'ICateringService meal = new EconomyMeal();         System.out.println(\"Bort taomi: \" + meal.getStandardMeal());'"
    },
    "requirements": {
      "classes": [
        "EconomyMeal",
        "Main"
      ],
      "interfaces": [
        "ICateringService"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "// Java 8 default va static interfeys metodlarini qo'llang\ninterface ICateringService {\n}\n\nclass EconomyMeal implements ICateringService {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ICateringService meal = new EconomyMeal();\n        System.out.println(\"Bort taomi: \" + meal.getStandardMeal());\n    }\n}",
    "solution": "interface ICateringService {\n    default String getStandardMeal() { return \"Issiq taom va choy\"; }\n}\n\nclass EconomyMeal implements ICateringService {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ICateringService meal = new EconomyMeal();\n        System.out.println(\"Bort taomi: \" + meal.getStandardMeal());\n    }\n}",
    "detailedSolution": {
      "theory": "Java 8 dan boshlab interfeyslar 'default' metodlar (standart tana bilan ta'minlangan) va 'static' metodlarga ega bo'ldi. Bu interfeysga yangi metod qo'shilganda eski mavjud sinflar buzilib qolmasligi uchun ishlab chiqilgan.",
      "cleanCode": "interface ICateringService {\n    default ... () { ... }\n    static ... () { ... }\n}",
      "breakdown": [
        "<code>ICateringService</code>: default yoki static a'zoli interfeys.",
        "<code>EconomyMeal</code>: interfeysdan foydalanuvchi sinf."
      ]
    }
  },
  {
    "id": 75,
    "tier": 5,
    "tierName": "5-Bosqich: Java 8 Interfeys Yangiliklari: Default va Static Metodlar",
    "sector": "61-75: Interface Default & Static Methods",
    "title": {
      "uz": "75. WIUT SRS — default GPA Konvertatsiya Formulasi",
      "en": "75. WIUT SRS — Default GPA Conversion Method in Grading Interface"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT 'IGpaCalculator' interfeysida 'default double convertToGpa(int mark)' metodi 70+ bo'lsa 4.0, 60+ bo'lsa 3.0, aks holda 2.0 qaytaradi. 'StudentGpaProfile' sinfida 75 ballni konvertatsiya qiling.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'IGpaCalculator' interfeysida 'default' yoki 'static' metodini e'lon qiling.\n2. 'StudentGpaProfile' sinfini 'implements IGpaCalculator' orqali bog'lang.\n3. Zarur bo'lsa default metodni @Override qiling yoki interfeys statik metodini chaqiring.\n4. 'Main' metodida natijani tekshiring.\n5. Konsolga chiqaring: 'IGpaCalculator calc = new StudentGpaProfile();         System.out.println(\"75 ball GPA: \" + calc.convertToGpa(75));'",
      "en": "📖 Real-World Scenario & Context\nTranslate percentage mark into GPA using default interface calculation.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare interface 'IGpaCalculator' containing default or static methods.\n2. Implement interface in 'StudentGpaProfile'.\n3. Optionally override default method or call static interface helper.\n4. Verify in 'main'.\n5. Print result to console: 'IGpaCalculator calc = new StudentGpaProfile();         System.out.println(\"75 ball GPA: \" + calc.convertToGpa(75));'"
    },
    "requirements": {
      "classes": [
        "StudentGpaProfile",
        "Main"
      ],
      "interfaces": [
        "IGpaCalculator"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "// Java 8 default va static interfeys metodlarini qo'llang\ninterface IGpaCalculator {\n}\n\nclass StudentGpaProfile implements IGpaCalculator {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IGpaCalculator calc = new StudentGpaProfile();\n        System.out.println(\"75 ball GPA: \" + calc.convertToGpa(75));\n    }\n}",
    "solution": "interface IGpaCalculator {\n    default double convertToGpa(int mark) {\n        return mark >= 70 ? 4.0 : (mark >= 60 ? 3.0 : 2.0);\n    }\n}\n\nclass StudentGpaProfile implements IGpaCalculator {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IGpaCalculator calc = new StudentGpaProfile();\n        System.out.println(\"75 ball GPA: \" + calc.convertToGpa(75));\n    }\n}",
    "detailedSolution": {
      "theory": "Java 8 dan boshlab interfeyslar 'default' metodlar (standart tana bilan ta'minlangan) va 'static' metodlarga ega bo'ldi. Bu interfeysga yangi metod qo'shilganda eski mavjud sinflar buzilib qolmasligi uchun ishlab chiqilgan.",
      "cleanCode": "interface IGpaCalculator {\n    default ... () { ... }\n    static ... () { ... }\n}",
      "breakdown": [
        "<code>IGpaCalculator</code>: default yoki static a'zoli interfeys.",
        "<code>StudentGpaProfile</code>: interfeysdan foydalanuvchi sinf."
      ]
    }
  },
  {
    "id": 76,
    "tier": 6,
    "tierName": "6-Bosqich: Ko'p Interfeyslarni Amalga Oshirish va Mojarolarni Hal Qilish",
    "sector": "76-90: Multiple Interfaces & Conflict Resolution",
    "title": {
      "uz": "76. Uzum Market — BankCard: Payable va CashbackEligible Birgalikda",
      "en": "76. Uzum Market — BankCard Implementing Payable and CashbackEligible"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT 6-hafta yechimidagi eng asosiy arxitektura: 'public class BankCard implements Payable, CashbackEligible'. Karta ham to'lov qiladi ('processPayment'), ham 1% keshbek hisoblaydi ('calculateCashback'). Ushbu sinfni dasturlang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Payable' va 'CashbackEligible' interfeyslarini e'lon qiling.\n2. 'BankCard' sinfini 'implements Payable, CashbackEligible' orqali bir vaqtning o'zida ikkala interfeysga bog'lang.\n3. Har ikkala interfeys shartnomalarini sinf ichida to'liq bajaring (@Override).\n4. To'qnashuv bo'lsa 'Interface.super.method()' orqali mojaroni hal qiling.\n5. 'Main' metodida tekshiring: 'BankCard card = new BankCard(\"8600123456789012\", \"Jamshid\", 500000.0);         card.processPayment(200000.0);         System.out.println(\"Keshbek: \" + card.calculateCashback(200000.0) + \" UZS | Karta: \" + card.getMaskedNumber());'",
      "en": "📖 Real-World Scenario & Context\nImplement official Week 6 BankCard realizing both Payable and CashbackEligible interfaces.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare interfaces 'Payable' and 'CashbackEligible'.\n2. Implement both in 'BankCard' using comma-separated implements.\n3. Override and provide logic for methods from both contracts.\n4. Resolve default method collisions using Interface.super syntax.\n5. Verify in 'main': 'BankCard card = new BankCard(\"8600123456789012\", \"Jamshid\", 500000.0);         card.processPayment(200000.0);         System.out.println(\"Keshbek: \" + card.calculateCashback(200000.0) + \" UZS | Karta: \" + card.getMaskedNumber());'"
    },
    "requirements": {
      "classes": [
        "BankCard",
        "Main"
      ],
      "interfaces": [
        "Payable",
        "CashbackEligible"
      ],
      "methods": [
        "calculateCashback"
      ],
      "keywords": [
        "implements"
      ]
    },
    "starterCode": "// Bir nechta interfeyslarni realizatsiya qiling\ninterface Payable {\n}\n\ninterface CashbackEligible {\n}\n\nclass BankCard implements Payable, CashbackEligible {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BankCard card = new BankCard(\"8600123456789012\", \"Jamshid\", 500000.0);\n        card.processPayment(200000.0);\n        System.out.println(\"Keshbek: \" + card.calculateCashback(200000.0) + \" UZS | Karta: \" + card.getMaskedNumber());\n    }\n}",
    "solution": "interface Payable {\n    boolean processPayment(double amount);\n}\n\ninterface CashbackEligible {\n    double calculateCashback(double amount);\n}\n\nclass BankCard implements Payable, CashbackEligible {\n    private String cardNumber;\n    private String holderName;\n    private double balance;\n    public BankCard(String num, String name, double bal) {\n        this.cardNumber = num; this.holderName = name; this.balance = bal;\n    }\n    public String getMaskedNumber() {\n        return \"**** \" + cardNumber.substring(cardNumber.length() - 4);\n    }\n    public double getBalance() { return balance; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= balance) {\n            balance -= amount;\n            System.out.println(\"Paid \" + amount + \" by bank card \" + getMaskedNumber() + \". Money left on the card: \" + balance);\n            return true;\n        }\n        return false;\n    }\n    @Override\n    public double calculateCashback(double amount) {\n        return Math.round(amount * 0.01 * 100.0) / 100.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BankCard card = new BankCard(\"8600123456789012\", \"Jamshid\", 500000.0);\n        card.processPayment(200000.0);\n        System.out.println(\"Keshbek: \" + card.calculateCashback(200000.0) + \" UZS | Karta: \" + card.getMaskedNumber());\n    }\n}",
    "detailedSolution": {
      "theory": "Java da bitta sinf faqat bitta sinfdan meros olishi mumkin, lekin istalgancha ko'p interfeyslarni ('implements A, B') amalga oshirishi mumkin. Agar ikkita interfeysda bir xil signaturaga ega default metod bo'lsa, voris sinf uni majburan qayta yozib to'qnashuvni hal qilishi shart.",
      "cleanCode": "class BankCard implements Payable, CashbackEligible {\n    @Override ...\n}",
      "breakdown": [
        "<code>BankCard</code>: ikkita interfeysni birlashtirgan klass.",
        "<code>calculateCashback</code>: polimorfik operatsiya."
      ]
    }
  },
  {
    "id": 77,
    "tier": 6,
    "tierName": "6-Bosqich: Ko'p Interfeyslarni Amalga Oshirish va Mojarolarni Hal Qilish",
    "sector": "76-90: Multiple Interfaces & Conflict Resolution",
    "title": {
      "uz": "77. Payme — Biometrik va PIN Xavfsizlik Interfeyslari Birga",
      "en": "77. Payme — Dual Security Interfaces: Biometric and PIN Authentication"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nPayme 'SmartLogin' sinfi 'IBiometricAuth' (barmoq izi) va 'IPinAuth' (PIN-kod) interfeyslarini barobariga amalga oshiradi. Har ikkala autentifikatsiya usulini taqdim eting.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'IBiometricAuth' va 'IPinAuth' interfeyslarini e'lon qiling.\n2. 'SmartLogin' sinfini 'implements IBiometricAuth, IPinAuth' orqali bir vaqtning o'zida ikkala interfeysga bog'lang.\n3. Har ikkala interfeys shartnomalarini sinf ichida to'liq bajaring (@Override).\n4. To'qnashuv bo'lsa 'Interface.super.method()' orqali mojaroni hal qiling.\n5. 'Main' metodida tekshiring: 'SmartLogin auth = new SmartLogin();         System.out.println(\"Biometriya: \" + auth.verifyFingerprint(true) + \" | PIN: \" + auth.verifyPin(\"1234\"));'",
      "en": "📖 Real-World Scenario & Context\nClass implements two unrelated security interfaces to enable multi-factor authentication.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare interfaces 'IBiometricAuth' and 'IPinAuth'.\n2. Implement both in 'SmartLogin' using comma-separated implements.\n3. Override and provide logic for methods from both contracts.\n4. Resolve default method collisions using Interface.super syntax.\n5. Verify in 'main': 'SmartLogin auth = new SmartLogin();         System.out.println(\"Biometriya: \" + auth.verifyFingerprint(true) + \" | PIN: \" + auth.verifyPin(\"1234\"));'"
    },
    "requirements": {
      "classes": [
        "SmartLogin",
        "Main"
      ],
      "interfaces": [
        "IBiometricAuth",
        "IPinAuth"
      ],
      "methods": [
        "authenticateUser"
      ],
      "keywords": [
        "implements"
      ]
    },
    "starterCode": "// Bir nechta interfeyslarni realizatsiya qiling\ninterface IBiometricAuth {\n}\n\ninterface IPinAuth {\n}\n\nclass SmartLogin implements IBiometricAuth, IPinAuth {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartLogin auth = new SmartLogin();\n        System.out.println(\"Biometriya: \" + auth.verifyFingerprint(true) + \" | PIN: \" + auth.verifyPin(\"1234\"));\n    }\n}",
    "solution": "interface IBiometricAuth {\n    boolean verifyFingerprint(boolean sensorMatch);\n}\n\ninterface IPinAuth {\n    boolean verifyPin(String enteredPin);\n}\n\nclass SmartLogin implements IBiometricAuth, IPinAuth {\n    private String secretPin = \"1234\";\n    @Override\n    public boolean verifyFingerprint(boolean match) { return match; }\n    @Override\n    public boolean verifyPin(String pin) { return secretPin.equals(pin); }\n    public boolean authenticateUser() { return true; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartLogin auth = new SmartLogin();\n        System.out.println(\"Biometriya: \" + auth.verifyFingerprint(true) + \" | PIN: \" + auth.verifyPin(\"1234\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Java da bitta sinf faqat bitta sinfdan meros olishi mumkin, lekin istalgancha ko'p interfeyslarni ('implements A, B') amalga oshirishi mumkin. Agar ikkita interfeysda bir xil signaturaga ega default metod bo'lsa, voris sinf uni majburan qayta yozib to'qnashuvni hal qilishi shart.",
      "cleanCode": "class SmartLogin implements IBiometricAuth, IPinAuth {\n    @Override ...\n}",
      "breakdown": [
        "<code>SmartLogin</code>: ikkita interfeysni birlashtirgan klass.",
        "<code>authenticateUser</code>: polimorfik operatsiya."
      ]
    }
  },
  {
    "id": 78,
    "tier": 6,
    "tierName": "6-Bosqich: Ko'p Interfeyslarni Amalga Oshirish va Mojarolarni Hal Qilish",
    "sector": "76-90: Multiple Interfaces & Conflict Resolution",
    "title": {
      "uz": "78. Korzinka — Skanerlanuvchi va Tortiluvchi Tovar (Weighable & Scannable)",
      "en": "78. Korzinka — Weighable and Scannable Multiple Realization"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nKorzinka o'z-o'ziga xizmat kassasida mevalar ham skaner qilinadi ('IScannable'), ham tarozida tortiladi ('IWeighable'). 'WeightProduct' sinfida umumiy narxni hisoblang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'IScannable' va 'IWeighable' interfeyslarini e'lon qiling.\n2. 'WeightProduct' sinfini 'implements IScannable, IWeighable' orqali bir vaqtning o'zida ikkala interfeysga bog'lang.\n3. Har ikkala interfeys shartnomalarini sinf ichida to'liq bajaring (@Override).\n4. To'qnashuv bo'lsa 'Interface.super.method()' orqali mojaroni hal qiling.\n5. 'Main' metodida tekshiring: 'WeightProduct apples = new WeightProduct(\"Olma\", 12000.0, 2.5);         System.out.println(apples.getName() + \" [\" + apples.getBarcode() + \"] Jami: \" + apples.calculateTotalCost() + \" UZS\");'",
      "en": "📖 Real-World Scenario & Context\nProduct class implements both IScannable and IWeighable to calculate total cost by weight.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare interfaces 'IScannable' and 'IWeighable'.\n2. Implement both in 'WeightProduct' using comma-separated implements.\n3. Override and provide logic for methods from both contracts.\n4. Resolve default method collisions using Interface.super syntax.\n5. Verify in 'main': 'WeightProduct apples = new WeightProduct(\"Olma\", 12000.0, 2.5);         System.out.println(apples.getName() + \" [\" + apples.getBarcode() + \"] Jami: \" + apples.calculateTotalCost() + \" UZS\");'"
    },
    "requirements": {
      "classes": [
        "WeightProduct",
        "Main"
      ],
      "interfaces": [
        "IScannable",
        "IWeighable"
      ],
      "methods": [
        "calculateTotalCost"
      ],
      "keywords": [
        "implements"
      ]
    },
    "starterCode": "// Bir nechta interfeyslarni realizatsiya qiling\ninterface IScannable {\n}\n\ninterface IWeighable {\n}\n\nclass WeightProduct implements IScannable, IWeighable {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WeightProduct apples = new WeightProduct(\"Olma\", 12000.0, 2.5);\n        System.out.println(apples.getName() + \" [\" + apples.getBarcode() + \"] Jami: \" + apples.calculateTotalCost() + \" UZS\");\n    }\n}",
    "solution": "interface IScannable {\n    String getBarcode();\n}\n\ninterface IWeighable {\n    double getWeightKg();\n}\n\nclass WeightProduct implements IScannable, IWeighable {\n    private String name;\n    private double pricePerKg;\n    private double weightKg;\n    public WeightProduct(String n, double p, double w) {\n        this.name = n; this.pricePerKg = p; this.weightKg = w;\n    }\n    public String getName() { return name; }\n    @Override\n    public String getBarcode() { return \"BAR-47801\"; }\n    @Override\n    public double getWeightKg() { return weightKg; }\n    public double calculateTotalCost() { return pricePerKg * weightKg; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WeightProduct apples = new WeightProduct(\"Olma\", 12000.0, 2.5);\n        System.out.println(apples.getName() + \" [\" + apples.getBarcode() + \"] Jami: \" + apples.calculateTotalCost() + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "Java da bitta sinf faqat bitta sinfdan meros olishi mumkin, lekin istalgancha ko'p interfeyslarni ('implements A, B') amalga oshirishi mumkin. Agar ikkita interfeysda bir xil signaturaga ega default metod bo'lsa, voris sinf uni majburan qayta yozib to'qnashuvni hal qilishi shart.",
      "cleanCode": "class WeightProduct implements IScannable, IWeighable {\n    @Override ...\n}",
      "breakdown": [
        "<code>WeightProduct</code>: ikkita interfeysni birlashtirgan klass.",
        "<code>calculateTotalCost</code>: polimorfik operatsiya."
      ]
    }
  },
  {
    "id": 79,
    "tier": 6,
    "tierName": "6-Bosqich: Ko'p Interfeyslarni Amalga Oshirish va Mojarolarni Hal Qilish",
    "sector": "76-90: Multiple Interfaces & Conflict Resolution",
    "title": {
      "uz": "79. Yandex Go — Boshqariluvchi va Yo'lovchi Tashuvchi Mashina",
      "en": "79. Yandex Go — Drivable and PassengerCarrying Multi-Interface"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nYandex Go 'TaxiVehicle' sinfi 'IDrivable' (yoqilg'i sarfi) va 'IPassengerCarrier' (yo'lovchilar soni) interfeyslarini qanoatlantiradi. Mashina tafsilotlarini chiqaring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'IDrivable' va 'IPassengerCarrier' interfeyslarini e'lon qiling.\n2. 'TaxiVehicle' sinfini 'implements IDrivable, IPassengerCarrier' orqali bir vaqtning o'zida ikkala interfeysga bog'lang.\n3. Har ikkala interfeys shartnomalarini sinf ichida to'liq bajaring (@Override).\n4. To'qnashuv bo'lsa 'Interface.super.method()' orqali mojaroni hal qiling.\n5. 'Main' metodida tekshiring: 'TaxiVehicle car = new TaxiVehicle(\"Cobalt\", 8.0, 4);         System.out.println(car.getVehicleDetails());'",
      "en": "📖 Real-World Scenario & Context\nTaxiVehicle implements IDrivable and IPassengerCarrier modeling transport specifications.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare interfaces 'IDrivable' and 'IPassengerCarrier'.\n2. Implement both in 'TaxiVehicle' using comma-separated implements.\n3. Override and provide logic for methods from both contracts.\n4. Resolve default method collisions using Interface.super syntax.\n5. Verify in 'main': 'TaxiVehicle car = new TaxiVehicle(\"Cobalt\", 8.0, 4);         System.out.println(car.getVehicleDetails());'"
    },
    "requirements": {
      "classes": [
        "TaxiVehicle",
        "Main"
      ],
      "interfaces": [
        "IDrivable",
        "IPassengerCarrier"
      ],
      "methods": [
        "getVehicleDetails"
      ],
      "keywords": [
        "implements"
      ]
    },
    "starterCode": "// Bir nechta interfeyslarni realizatsiya qiling\ninterface IDrivable {\n}\n\ninterface IPassengerCarrier {\n}\n\nclass TaxiVehicle implements IDrivable, IPassengerCarrier {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TaxiVehicle car = new TaxiVehicle(\"Cobalt\", 8.0, 4);\n        System.out.println(car.getVehicleDetails());\n    }\n}",
    "solution": "interface IDrivable {\n    double getFuelConsumptionLiters();\n}\n\ninterface IPassengerCarrier {\n    int getPassengerCapacity();\n}\n\nclass TaxiVehicle implements IDrivable, IPassengerCarrier {\n    private String model;\n    private double fuelPer100;\n    private int seats;\n    public TaxiVehicle(String m, double f, int s) {\n        this.model = m; this.fuelPer100 = f; this.seats = s;\n    }\n    @Override\n    public double getFuelConsumptionLiters() { return fuelPer100; }\n    @Override\n    public int getPassengerCapacity() { return seats; }\n    public String getVehicleDetails() {\n        return \"Avto: \" + model + \" | Sarf: \" + fuelPer100 + \" l/100km | O'rinlar: \" + seats;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TaxiVehicle car = new TaxiVehicle(\"Cobalt\", 8.0, 4);\n        System.out.println(car.getVehicleDetails());\n    }\n}",
    "detailedSolution": {
      "theory": "Java da bitta sinf faqat bitta sinfdan meros olishi mumkin, lekin istalgancha ko'p interfeyslarni ('implements A, B') amalga oshirishi mumkin. Agar ikkita interfeysda bir xil signaturaga ega default metod bo'lsa, voris sinf uni majburan qayta yozib to'qnashuvni hal qilishi shart.",
      "cleanCode": "class TaxiVehicle implements IDrivable, IPassengerCarrier {\n    @Override ...\n}",
      "breakdown": [
        "<code>TaxiVehicle</code>: ikkita interfeysni birlashtirgan klass.",
        "<code>getVehicleDetails</code>: polimorfik operatsiya."
      ]
    }
  },
  {
    "id": 80,
    "tier": 6,
    "tierName": "6-Bosqich: Ko'p Interfeyslarni Amalga Oshirish va Mojarolarni Hal Qilish",
    "sector": "76-90: Multiple Interfaces & Conflict Resolution",
    "title": {
      "uz": "80. Click — Kvitansiya Yaratish va SMS Yuborish Interfeyslari",
      "en": "80. Click — Receipt Generation and SMS Notification Multiple Interface"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nClick 'PaymentAuditService' to'lov muvaffaqiyatli bo'lgach kvitansiya chop etadi ('IReceiptGenerator') va SMS jo'natadi ('ISmsSender'). Ikkala vazifani bajaring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'IReceiptGenerator' va 'ISmsSender' interfeyslarini e'lon qiling.\n2. 'PaymentAuditService' sinfini 'implements IReceiptGenerator, ISmsSender' orqali bir vaqtning o'zida ikkala interfeysga bog'lang.\n3. Har ikkala interfeys shartnomalarini sinf ichida to'liq bajaring (@Override).\n4. To'qnashuv bo'lsa 'Interface.super.method()' orqali mojaroni hal qiling.\n5. 'Main' metodida tekshiring: 'PaymentAuditService srv = new PaymentAuditService();         System.out.println(srv.processReceiptAndNotify(\"TX-500\", 50000.0));'",
      "en": "📖 Real-World Scenario & Context\nService implements receipt creation and SMS dispatch simultaneously.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare interfaces 'IReceiptGenerator' and 'ISmsSender'.\n2. Implement both in 'PaymentAuditService' using comma-separated implements.\n3. Override and provide logic for methods from both contracts.\n4. Resolve default method collisions using Interface.super syntax.\n5. Verify in 'main': 'PaymentAuditService srv = new PaymentAuditService();         System.out.println(srv.processReceiptAndNotify(\"TX-500\", 50000.0));'"
    },
    "requirements": {
      "classes": [
        "PaymentAuditService",
        "Main"
      ],
      "interfaces": [
        "IReceiptGenerator",
        "ISmsSender"
      ],
      "methods": [
        "processReceiptAndNotify"
      ],
      "keywords": [
        "implements"
      ]
    },
    "starterCode": "// Bir nechta interfeyslarni realizatsiya qiling\ninterface IReceiptGenerator {\n}\n\ninterface ISmsSender {\n}\n\nclass PaymentAuditService implements IReceiptGenerator, ISmsSender {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentAuditService srv = new PaymentAuditService();\n        System.out.println(srv.processReceiptAndNotify(\"TX-500\", 50000.0));\n    }\n}",
    "solution": "interface IReceiptGenerator {\n    String generateReceipt(String tx, double amt);\n}\n\ninterface ISmsSender {\n    String sendSmsNotice();\n}\n\nclass PaymentAuditService implements IReceiptGenerator, ISmsSender {\n    @Override\n    public String generateReceipt(String tx, double amt) { return \"Kvitansiya \" + tx + \": \" + amt + \" UZS\"; }\n    @Override\n    public String sendSmsNotice() { return \"SMS yuborildi\"; }\n    public String processReceiptAndNotify(String tx, double amt) {\n        return generateReceipt(tx, amt) + \" | \" + sendSmsNotice();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentAuditService srv = new PaymentAuditService();\n        System.out.println(srv.processReceiptAndNotify(\"TX-500\", 50000.0));\n    }\n}",
    "detailedSolution": {
      "theory": "Java da bitta sinf faqat bitta sinfdan meros olishi mumkin, lekin istalgancha ko'p interfeyslarni ('implements A, B') amalga oshirishi mumkin. Agar ikkita interfeysda bir xil signaturaga ega default metod bo'lsa, voris sinf uni majburan qayta yozib to'qnashuvni hal qilishi shart.",
      "cleanCode": "class PaymentAuditService implements IReceiptGenerator, ISmsSender {\n    @Override ...\n}",
      "breakdown": [
        "<code>PaymentAuditService</code>: ikkita interfeysni birlashtirgan klass.",
        "<code>processReceiptAndNotify</code>: polimorfik operatsiya."
      ]
    }
  },
  {
    "id": 81,
    "tier": 6,
    "tierName": "6-Bosqich: Ko'p Interfeyslarni Amalga Oshirish va Mojarolarni Hal Qilish",
    "sector": "76-90: Multiple Interfaces & Conflict Resolution",
    "title": {
      "uz": "81. Safia — Pishiriluvchi va Tez Buziluvchi Qandolat Tovari",
      "en": "81. Safia — Cookable and Perishable Double Interface Implementation"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSafia issiq shirinliklari 'ICookable' (pishirish harorati) va 'IPerishable' (yaroqlilik kuni) interfeyslarini birlashtiradi. 'HotCroissant' sinfida ikkala parametrni ko'rsating.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'ICookable' va 'IPerishable' interfeyslarini e'lon qiling.\n2. 'HotCroissant' sinfini 'implements ICookable, IPerishable' orqali bir vaqtning o'zida ikkala interfeysga bog'lang.\n3. Har ikkala interfeys shartnomalarini sinf ichida to'liq bajaring (@Override).\n4. To'qnashuv bo'lsa 'Interface.super.method()' orqali mojaroni hal qiling.\n5. 'Main' metodida tekshiring: 'HotCroissant cr = new HotCroissant(180, 2);         System.out.println(cr.getCroissantSummary());'",
      "en": "📖 Real-World Scenario & Context\nHotCroissant combines baking temperature and perishable shelf life contracts.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare interfaces 'ICookable' and 'IPerishable'.\n2. Implement both in 'HotCroissant' using comma-separated implements.\n3. Override and provide logic for methods from both contracts.\n4. Resolve default method collisions using Interface.super syntax.\n5. Verify in 'main': 'HotCroissant cr = new HotCroissant(180, 2);         System.out.println(cr.getCroissantSummary());'"
    },
    "requirements": {
      "classes": [
        "HotCroissant",
        "Main"
      ],
      "interfaces": [
        "ICookable",
        "IPerishable"
      ],
      "methods": [
        "getCroissantSummary"
      ],
      "keywords": [
        "implements"
      ]
    },
    "starterCode": "// Bir nechta interfeyslarni realizatsiya qiling\ninterface ICookable {\n}\n\ninterface IPerishable {\n}\n\nclass HotCroissant implements ICookable, IPerishable {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        HotCroissant cr = new HotCroissant(180, 2);\n        System.out.println(cr.getCroissantSummary());\n    }\n}",
    "solution": "interface ICookable {\n    int getBakeTemperatureC();\n}\n\ninterface IPerishable {\n    int getShelfLifeDays();\n}\n\nclass HotCroissant implements ICookable, IPerishable {\n    private int temp;\n    private int days;\n    public HotCroissant(int t, int d) { this.temp = t; this.days = d; }\n    @Override\n    public int getBakeTemperatureC() { return temp; }\n    @Override\n    public int getShelfLifeDays() { return days; }\n    public String getCroissantSummary() {\n        return \"Harorat: \" + temp + \"C | Yaroqlilik: \" + days + \" kun\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        HotCroissant cr = new HotCroissant(180, 2);\n        System.out.println(cr.getCroissantSummary());\n    }\n}",
    "detailedSolution": {
      "theory": "Java da bitta sinf faqat bitta sinfdan meros olishi mumkin, lekin istalgancha ko'p interfeyslarni ('implements A, B') amalga oshirishi mumkin. Agar ikkita interfeysda bir xil signaturaga ega default metod bo'lsa, voris sinf uni majburan qayta yozib to'qnashuvni hal qilishi shart.",
      "cleanCode": "class HotCroissant implements ICookable, IPerishable {\n    @Override ...\n}",
      "breakdown": [
        "<code>HotCroissant</code>: ikkita interfeysni birlashtirgan klass.",
        "<code>getCroissantSummary</code>: polimorfik operatsiya."
      ]
    }
  },
  {
    "id": 82,
    "tier": 6,
    "tierName": "6-Bosqich: Ko'p Interfeyslarni Amalga Oshirish va Mojarolarni Hal Qilish",
    "sector": "76-90: Multiple Interfaces & Conflict Resolution",
    "title": {
      "uz": "82. Dodo Pizza — Maxsus Tarkibli va Chegirmali Pitsa",
      "en": "82. Dodo Pizza — Customizable and Discountable Pizza Realization"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nDodo 'CustomPizza' pishirig'i 'ICustomizable' (qo'shimcha pishloq) va 'IDiscountable' (promo kod chegirmasi) interfeyslarini amalga oshiradi. Yakuniy narxni hisoblang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'ICustomizable' va 'IDiscountable' interfeyslarini e'lon qiling.\n2. 'CustomPizza' sinfini 'implements ICustomizable, IDiscountable' orqali bir vaqtning o'zida ikkala interfeysga bog'lang.\n3. Har ikkala interfeys shartnomalarini sinf ichida to'liq bajaring (@Override).\n4. To'qnashuv bo'lsa 'Interface.super.method()' orqali mojaroni hal qiling.\n5. 'Main' metodida tekshiring: 'CustomPizza p = new CustomPizza(70000.0, 10000.0, 5000.0);         System.out.println(\"Moslashtirilgan narx: \" + p.getAdjustedPrice() + \" UZS\");'",
      "en": "📖 Real-World Scenario & Context\nCustomPizza handles ingredient addition and discount coupon deduction.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare interfaces 'ICustomizable' and 'IDiscountable'.\n2. Implement both in 'CustomPizza' using comma-separated implements.\n3. Override and provide logic for methods from both contracts.\n4. Resolve default method collisions using Interface.super syntax.\n5. Verify in 'main': 'CustomPizza p = new CustomPizza(70000.0, 10000.0, 5000.0);         System.out.println(\"Moslashtirilgan narx: \" + p.getAdjustedPrice() + \" UZS\");'"
    },
    "requirements": {
      "classes": [
        "CustomPizza",
        "Main"
      ],
      "interfaces": [
        "ICustomizable",
        "IDiscountable"
      ],
      "methods": [
        "getAdjustedPrice"
      ],
      "keywords": [
        "implements"
      ]
    },
    "starterCode": "// Bir nechta interfeyslarni realizatsiya qiling\ninterface ICustomizable {\n}\n\ninterface IDiscountable {\n}\n\nclass CustomPizza implements ICustomizable, IDiscountable {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CustomPizza p = new CustomPizza(70000.0, 10000.0, 5000.0);\n        System.out.println(\"Moslashtirilgan narx: \" + p.getAdjustedPrice() + \" UZS\");\n    }\n}",
    "solution": "interface ICustomizable {\n    double getExtraToppingCost();\n}\n\ninterface IDiscountable {\n    double getDiscountAmount();\n}\n\nclass CustomPizza implements ICustomizable, IDiscountable {\n    private double basePrice;\n    private double extraCheese;\n    private double couponCut;\n    public CustomPizza(double base, double extra, double coupon) {\n        this.basePrice = base; this.extraCheese = extra; this.couponCut = coupon;\n    }\n    @Override\n    public double getExtraToppingCost() { return extraCheese; }\n    @Override\n    public double getDiscountAmount() { return couponCut; }\n    public double getAdjustedPrice() { return basePrice + extraCheese - couponCut; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CustomPizza p = new CustomPizza(70000.0, 10000.0, 5000.0);\n        System.out.println(\"Moslashtirilgan narx: \" + p.getAdjustedPrice() + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "Java da bitta sinf faqat bitta sinfdan meros olishi mumkin, lekin istalgancha ko'p interfeyslarni ('implements A, B') amalga oshirishi mumkin. Agar ikkita interfeysda bir xil signaturaga ega default metod bo'lsa, voris sinf uni majburan qayta yozib to'qnashuvni hal qilishi shart.",
      "cleanCode": "class CustomPizza implements ICustomizable, IDiscountable {\n    @Override ...\n}",
      "breakdown": [
        "<code>CustomPizza</code>: ikkita interfeysni birlashtirgan klass.",
        "<code>getAdjustedPrice</code>: polimorfik operatsiya."
      ]
    }
  },
  {
    "id": 83,
    "tier": 6,
    "tierName": "6-Bosqich: Ko'p Interfeyslarni Amalga Oshirish va Mojarolarni Hal Qilish",
    "sector": "76-90: Multiple Interfaces & Conflict Resolution",
    "title": {
      "uz": "83. Texnomart — Elektron Jihoz va Kafolatli Mahsulot",
      "en": "83. Texnomart — Electronic and WarrantyCovered Multi-Contract Device"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nTexnomart 'SmartTV' televizori 'IElectronic' (quvvat iste'moli) va 'IWarrantyCovered' (bepul servis muddati) shartnomalarini birlashtiradi. Xususiyatlarini chiqaring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'IElectronic' va 'IWarrantyCovered' interfeyslarini e'lon qiling.\n2. 'SmartTV' sinfini 'implements IElectronic, IWarrantyCovered' orqali bir vaqtning o'zida ikkala interfeysga bog'lang.\n3. Har ikkala interfeys shartnomalarini sinf ichida to'liq bajaring (@Override).\n4. To'qnashuv bo'lsa 'Interface.super.method()' orqali mojaroni hal qiling.\n5. 'Main' metodida tekshiring: 'SmartTV tv = new SmartTV(\"Samsung 55\", 120, 24);         System.out.println(tv.getDeviceSpecs());'",
      "en": "📖 Real-World Scenario & Context\nSmartTV satisfies power consumption specifications and warranty service terms.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare interfaces 'IElectronic' and 'IWarrantyCovered'.\n2. Implement both in 'SmartTV' using comma-separated implements.\n3. Override and provide logic for methods from both contracts.\n4. Resolve default method collisions using Interface.super syntax.\n5. Verify in 'main': 'SmartTV tv = new SmartTV(\"Samsung 55\", 120, 24);         System.out.println(tv.getDeviceSpecs());'"
    },
    "requirements": {
      "classes": [
        "SmartTV",
        "Main"
      ],
      "interfaces": [
        "IElectronic",
        "IWarrantyCovered"
      ],
      "methods": [
        "getDeviceSpecs"
      ],
      "keywords": [
        "implements"
      ]
    },
    "starterCode": "// Bir nechta interfeyslarni realizatsiya qiling\ninterface IElectronic {\n}\n\ninterface IWarrantyCovered {\n}\n\nclass SmartTV implements IElectronic, IWarrantyCovered {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartTV tv = new SmartTV(\"Samsung 55\", 120, 24);\n        System.out.println(tv.getDeviceSpecs());\n    }\n}",
    "solution": "interface IElectronic {\n    int getWattage();\n}\n\ninterface IWarrantyCovered {\n    int getWarrantyMonths();\n}\n\nclass SmartTV implements IElectronic, IWarrantyCovered {\n    private String model;\n    private int watts;\n    private int months;\n    public SmartTV(String m, int w, int mon) {\n        this.model = m; this.watts = w; this.months = mon;\n    }\n    @Override\n    public int getWattage() { return watts; }\n    @Override\n    public int getWarrantyMonths() { return months; }\n    public String getDeviceSpecs() {\n        return \"Model: \" + model + \" | Quvvat: \" + watts + \"W | Kafolat: \" + months + \" oy\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartTV tv = new SmartTV(\"Samsung 55\", 120, 24);\n        System.out.println(tv.getDeviceSpecs());\n    }\n}",
    "detailedSolution": {
      "theory": "Java da bitta sinf faqat bitta sinfdan meros olishi mumkin, lekin istalgancha ko'p interfeyslarni ('implements A, B') amalga oshirishi mumkin. Agar ikkita interfeysda bir xil signaturaga ega default metod bo'lsa, voris sinf uni majburan qayta yozib to'qnashuvni hal qilishi shart.",
      "cleanCode": "class SmartTV implements IElectronic, IWarrantyCovered {\n    @Override ...\n}",
      "breakdown": [
        "<code>SmartTV</code>: ikkita interfeysni birlashtirgan klass.",
        "<code>getDeviceSpecs</code>: polimorfik operatsiya."
      ]
    }
  },
  {
    "id": 84,
    "tier": 6,
    "tierName": "6-Bosqich: Ko'p Interfeyslarni Amalga Oshirish va Mojarolarni Hal Qilish",
    "sector": "76-90: Multiple Interfaces & Conflict Resolution",
    "title": {
      "uz": "84. Medion — Tibbiy Xizmat va Sug'urta Qoplanishi",
      "en": "84. Medion — Medical Service with Insurance Coverage Realization"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nMedion shifokor konsultatsiyasi 'IMedicalService' (xizmat haqi) va 'IInsuranceCovered' (sug'urta qoplaydigan foiz) interfeyslariga tayanadi. Bemor to'laydigan qoldiqni hisoblang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'IMedicalService' va 'IInsuranceCovered' interfeyslarini e'lon qiling.\n2. 'InsuredConsultation' sinfini 'implements IMedicalService, IInsuranceCovered' orqali bir vaqtning o'zida ikkala interfeysga bog'lang.\n3. Har ikkala interfeys shartnomalarini sinf ichida to'liq bajaring (@Override).\n4. To'qnashuv bo'lsa 'Interface.super.method()' orqali mojaroni hal qiling.\n5. 'Main' metodida tekshiring: 'InsuredConsultation c = new InsuredConsultation(200000.0, 0.7);         System.out.println(\"Bemor to'laydi: \" + c.calculatePatientCopay() + \" UZS\");'",
      "en": "📖 Real-World Scenario & Context\nCalculate out-of-pocket patient copay by combining medical cost and insurance coverage.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare interfaces 'IMedicalService' and 'IInsuranceCovered'.\n2. Implement both in 'InsuredConsultation' using comma-separated implements.\n3. Override and provide logic for methods from both contracts.\n4. Resolve default method collisions using Interface.super syntax.\n5. Verify in 'main': 'InsuredConsultation c = new InsuredConsultation(200000.0, 0.7);         System.out.println(\"Bemor to'laydi: \" + c.calculatePatientCopay() + \" UZS\");'"
    },
    "requirements": {
      "classes": [
        "InsuredConsultation",
        "Main"
      ],
      "interfaces": [
        "IMedicalService",
        "IInsuranceCovered"
      ],
      "methods": [
        "calculatePatientCopay"
      ],
      "keywords": [
        "implements"
      ]
    },
    "starterCode": "// Bir nechta interfeyslarni realizatsiya qiling\ninterface IMedicalService {\n}\n\ninterface IInsuranceCovered {\n}\n\nclass InsuredConsultation implements IMedicalService, IInsuranceCovered {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        InsuredConsultation c = new InsuredConsultation(200000.0, 0.7);\n        System.out.println(\"Bemor to'laydi: \" + c.calculatePatientCopay() + \" UZS\");\n    }\n}",
    "solution": "interface IMedicalService {\n    double getServiceBaseCost();\n}\n\ninterface IInsuranceCovered {\n    double getCoverageRatio();\n}\n\nclass InsuredConsultation implements IMedicalService, IInsuranceCovered {\n    private double baseCost;\n    private double coverage;\n    public InsuredConsultation(double cost, double cov) { this.baseCost = cost; this.coverage = cov; }\n    @Override\n    public double getServiceBaseCost() { return baseCost; }\n    @Override\n    public double getCoverageRatio() { return coverage; }\n    public double calculatePatientCopay() { return baseCost * (1.0 - coverage); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        InsuredConsultation c = new InsuredConsultation(200000.0, 0.7);\n        System.out.println(\"Bemor to'laydi: \" + c.calculatePatientCopay() + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "Java da bitta sinf faqat bitta sinfdan meros olishi mumkin, lekin istalgancha ko'p interfeyslarni ('implements A, B') amalga oshirishi mumkin. Agar ikkita interfeysda bir xil signaturaga ega default metod bo'lsa, voris sinf uni majburan qayta yozib to'qnashuvni hal qilishi shart.",
      "cleanCode": "class InsuredConsultation implements IMedicalService, IInsuranceCovered {\n    @Override ...\n}",
      "breakdown": [
        "<code>InsuredConsultation</code>: ikkita interfeysni birlashtirgan klass.",
        "<code>calculatePatientCopay</code>: polimorfik operatsiya."
      ]
    }
  },
  {
    "id": 85,
    "tier": 6,
    "tierName": "6-Bosqich: Ko'p Interfeyslarni Amalga Oshirish va Mojarolarni Hal Qilish",
    "sector": "76-90: Multiple Interfaces & Conflict Resolution",
    "title": {
      "uz": "85. Express24 — Ekspress Marshrut va Termo-Nazoratli Yetkazish",
      "en": "85. Express24 — Express Speed and Temperature Controlled Delivery"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nExpress24 muzqaymoq yetkazishda 'IExpressRoute' (maksimal 25 daqiqa) va 'ITemperatureControlled' (-5 daraja) interfeyslarini talab qiladi. Shartlarni tekshiring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'IExpressRoute' va 'ITemperatureControlled' interfeyslarini e'lon qiling.\n2. 'IceCreamDelivery' sinfini 'implements IExpressRoute, ITemperatureControlled' orqali bir vaqtning o'zida ikkala interfeysga bog'lang.\n3. Har ikkala interfeys shartnomalarini sinf ichida to'liq bajaring (@Override).\n4. To'qnashuv bo'lsa 'Interface.super.method()' orqali mojaroni hal qiling.\n5. 'Main' metodida tekshiring: 'IceCreamDelivery ic = new IceCreamDelivery(20, -6);         System.out.println(ic.getDeliveryCompliance());'",
      "en": "📖 Real-World Scenario & Context\nDelivery order satisfies express time deadline and refrigeration temperature criteria.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare interfaces 'IExpressRoute' and 'ITemperatureControlled'.\n2. Implement both in 'IceCreamDelivery' using comma-separated implements.\n3. Override and provide logic for methods from both contracts.\n4. Resolve default method collisions using Interface.super syntax.\n5. Verify in 'main': 'IceCreamDelivery ic = new IceCreamDelivery(20, -6);         System.out.println(ic.getDeliveryCompliance());'"
    },
    "requirements": {
      "classes": [
        "IceCreamDelivery",
        "Main"
      ],
      "interfaces": [
        "IExpressRoute",
        "ITemperatureControlled"
      ],
      "methods": [
        "getDeliveryCompliance"
      ],
      "keywords": [
        "implements"
      ]
    },
    "starterCode": "// Bir nechta interfeyslarni realizatsiya qiling\ninterface IExpressRoute {\n}\n\ninterface ITemperatureControlled {\n}\n\nclass IceCreamDelivery implements IExpressRoute, ITemperatureControlled {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IceCreamDelivery ic = new IceCreamDelivery(20, -6);\n        System.out.println(ic.getDeliveryCompliance());\n    }\n}",
    "solution": "interface IExpressRoute {\n    int getMaxMinutes();\n}\n\ninterface ITemperatureControlled {\n    int getTargetCelsius();\n}\n\nclass IceCreamDelivery implements IExpressRoute, ITemperatureControlled {\n    private int minutes;\n    private int targetTemp;\n    public IceCreamDelivery(int m, int t) { this.minutes = m; this.targetTemp = t; }\n    @Override\n    public int getMaxMinutes() { return 25; }\n    @Override\n    public int getTargetCelsius() { return targetTemp; }\n    public String getDeliveryCompliance() {\n        return \"Vaqt: \" + minutes + \" min (Maks \" + getMaxMinutes() + \") | Harorat: \" + targetTemp + \"C (Talab: Sovuq) -> Mos\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IceCreamDelivery ic = new IceCreamDelivery(20, -6);\n        System.out.println(ic.getDeliveryCompliance());\n    }\n}",
    "detailedSolution": {
      "theory": "Java da bitta sinf faqat bitta sinfdan meros olishi mumkin, lekin istalgancha ko'p interfeyslarni ('implements A, B') amalga oshirishi mumkin. Agar ikkita interfeysda bir xil signaturaga ega default metod bo'lsa, voris sinf uni majburan qayta yozib to'qnashuvni hal qilishi shart.",
      "cleanCode": "class IceCreamDelivery implements IExpressRoute, ITemperatureControlled {\n    @Override ...\n}",
      "breakdown": [
        "<code>IceCreamDelivery</code>: ikkita interfeysni birlashtirgan klass.",
        "<code>getDeliveryCompliance</code>: polimorfik operatsiya."
      ]
    }
  },
  {
    "id": 86,
    "tier": 6,
    "tierName": "6-Bosqich: Ko'p Interfeyslarni Amalga Oshirish va Mojarolarni Hal Qilish",
    "sector": "76-90: Multiple Interfaces & Conflict Resolution",
    "title": {
      "uz": "86. Asaxiy — Yuklab Olinadigan va Chop Etiladigan Resurs (Dual Format)",
      "en": "86. Asaxiy — Downloadable and Printable Dual Media Resource"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nAsaxiy o'quv qo'llanmasi 'IDownloadable' (PDF havolasi) va 'IPrintable' (sahifalar chop etish) imkoniyatlariga ega. Ikkala harakatni birlashtiring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'IDownloadable' va 'IPrintable' interfeyslarini e'lon qiling.\n2. 'DualFormatManual' sinfini 'implements IDownloadable, IPrintable' orqali bir vaqtning o'zida ikkala interfeysga bog'lang.\n3. Har ikkala interfeys shartnomalarini sinf ichida to'liq bajaring (@Override).\n4. To'qnashuv bo'lsa 'Interface.super.method()' orqali mojaroni hal qiling.\n5. 'Main' metodida tekshiring: 'DualFormatManual manual = new DualFormatManual(\"Java Qo'llanma\", \"asaxiy.uz/dl/java\", 180);         System.out.println(manual.getResourceDetails());'",
      "en": "📖 Real-World Scenario & Context\nDual-format educational book implements download URL provider and print preview.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare interfaces 'IDownloadable' and 'IPrintable'.\n2. Implement both in 'DualFormatManual' using comma-separated implements.\n3. Override and provide logic for methods from both contracts.\n4. Resolve default method collisions using Interface.super syntax.\n5. Verify in 'main': 'DualFormatManual manual = new DualFormatManual(\"Java Qo'llanma\", \"asaxiy.uz/dl/java\", 180);         System.out.println(manual.getResourceDetails());'"
    },
    "requirements": {
      "classes": [
        "DualFormatManual",
        "Main"
      ],
      "interfaces": [
        "IDownloadable",
        "IPrintable"
      ],
      "methods": [
        "getResourceDetails"
      ],
      "keywords": [
        "implements"
      ]
    },
    "starterCode": "// Bir nechta interfeyslarni realizatsiya qiling\ninterface IDownloadable {\n}\n\ninterface IPrintable {\n}\n\nclass DualFormatManual implements IDownloadable, IPrintable {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DualFormatManual manual = new DualFormatManual(\"Java Qo'llanma\", \"asaxiy.uz/dl/java\", 180);\n        System.out.println(manual.getResourceDetails());\n    }\n}",
    "solution": "interface IDownloadable {\n    String getDownloadUrl();\n}\n\ninterface IPrintable {\n    int getPrintPageCount();\n}\n\nclass DualFormatManual implements IDownloadable, IPrintable {\n    private String title;\n    private String url;\n    private int pages;\n    public DualFormatManual(String t, String u, int p) { this.title = t; this.url = u; this.pages = p; }\n    @Override\n    public String getDownloadUrl() { return url; }\n    @Override\n    public int getPrintPageCount() { return pages; }\n    public String getResourceDetails() {\n        return \"Qo'llanma: \" + title + \" | Havola: \" + url + \" | Sahifalar: \" + pages;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DualFormatManual manual = new DualFormatManual(\"Java Qo'llanma\", \"asaxiy.uz/dl/java\", 180);\n        System.out.println(manual.getResourceDetails());\n    }\n}",
    "detailedSolution": {
      "theory": "Java da bitta sinf faqat bitta sinfdan meros olishi mumkin, lekin istalgancha ko'p interfeyslarni ('implements A, B') amalga oshirishi mumkin. Agar ikkita interfeysda bir xil signaturaga ega default metod bo'lsa, voris sinf uni majburan qayta yozib to'qnashuvni hal qilishi shart.",
      "cleanCode": "class DualFormatManual implements IDownloadable, IPrintable {\n    @Override ...\n}",
      "breakdown": [
        "<code>DualFormatManual</code>: ikkita interfeysni birlashtirgan klass.",
        "<code>getResourceDetails</code>: polimorfik operatsiya."
      ]
    }
  },
  {
    "id": 87,
    "tier": 6,
    "tierName": "6-Bosqich: Ko'p Interfeyslarni Amalga Oshirish va Mojarolarni Hal Qilish",
    "sector": "76-90: Multiple Interfaces & Conflict Resolution",
    "title": {
      "uz": "87. Kapitalbank — Depozit Hisobi va Foiz Jamg'armasi",
      "en": "87. Kapitalbank — Deposit Account and Interest Accrual Multi-Interface"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nKapitalbank 'SavingsAccount' sinfi 'IDepositAccount' (mablag' kiritish) va 'IInterestAccruing' (oylik foiz olish) interfeyslariga javob beradi. Bir oylik daromad bilan balansni hisoblang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'IDepositAccount' va 'IInterestAccruing' interfeyslarini e'lon qiling.\n2. 'SavingsAccount' sinfini 'implements IDepositAccount, IInterestAccruing' orqali bir vaqtning o'zida ikkala interfeysga bog'lang.\n3. Har ikkala interfeys shartnomalarini sinf ichida to'liq bajaring (@Override).\n4. To'qnashuv bo'lsa 'Interface.super.method()' orqali mojaroni hal qiling.\n5. 'Main' metodida tekshiring: 'SavingsAccount sa = new SavingsAccount(10000000.0, 0.20);         System.out.println(\"Yillik 20% bo'yicha oylik daromad: \" + sa.calculateMonthlyYield() + \" UZS\");'",
      "en": "📖 Real-World Scenario & Context\nSavingsAccount implements deposit transaction handling and monthly interest calculation.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare interfaces 'IDepositAccount' and 'IInterestAccruing'.\n2. Implement both in 'SavingsAccount' using comma-separated implements.\n3. Override and provide logic for methods from both contracts.\n4. Resolve default method collisions using Interface.super syntax.\n5. Verify in 'main': 'SavingsAccount sa = new SavingsAccount(10000000.0, 0.20);         System.out.println(\"Yillik 20% bo'yicha oylik daromad: \" + sa.calculateMonthlyYield() + \" UZS\");'"
    },
    "requirements": {
      "classes": [
        "SavingsAccount",
        "Main"
      ],
      "interfaces": [
        "IDepositAccount",
        "IInterestAccruing"
      ],
      "methods": [
        "calculateMonthlyYield"
      ],
      "keywords": [
        "implements"
      ]
    },
    "starterCode": "// Bir nechta interfeyslarni realizatsiya qiling\ninterface IDepositAccount {\n}\n\ninterface IInterestAccruing {\n}\n\nclass SavingsAccount implements IDepositAccount, IInterestAccruing {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SavingsAccount sa = new SavingsAccount(10000000.0, 0.20);\n        System.out.println(\"Yillik 20% bo'yicha oylik daromad: \" + sa.calculateMonthlyYield() + \" UZS\");\n    }\n}",
    "solution": "interface IDepositAccount {\n    double getPrincipal();\n}\n\ninterface IInterestAccruing {\n    double getAnnualInterestRate();\n}\n\nclass SavingsAccount implements IDepositAccount, IInterestAccruing {\n    private double balance;\n    private double rate;\n    public SavingsAccount(double bal, double r) { this.balance = bal; this.rate = r; }\n    @Override\n    public double getPrincipal() { return balance; }\n    @Override\n    public double getAnnualInterestRate() { return rate; }\n    public double calculateMonthlyYield() {\n        return Math.round((balance * rate / 12.0) * 100.0) / 100.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SavingsAccount sa = new SavingsAccount(10000000.0, 0.20);\n        System.out.println(\"Yillik 20% bo'yicha oylik daromad: \" + sa.calculateMonthlyYield() + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "Java da bitta sinf faqat bitta sinfdan meros olishi mumkin, lekin istalgancha ko'p interfeyslarni ('implements A, B') amalga oshirishi mumkin. Agar ikkita interfeysda bir xil signaturaga ega default metod bo'lsa, voris sinf uni majburan qayta yozib to'qnashuvni hal qilishi shart.",
      "cleanCode": "class SavingsAccount implements IDepositAccount, IInterestAccruing {\n    @Override ...\n}",
      "breakdown": [
        "<code>SavingsAccount</code>: ikkita interfeysni birlashtirgan klass.",
        "<code>calculateMonthlyYield</code>: polimorfik operatsiya."
      ]
    }
  },
  {
    "id": 88,
    "tier": 6,
    "tierName": "6-Bosqich: Ko'p Interfeyslarni Amalga Oshirish va Mojarolarni Hal Qilish",
    "sector": "76-90: Multiple Interfaces & Conflict Resolution",
    "title": {
      "uz": "88. Beeline — Ovozli Qo'ng'iroq va Mobil Internet Birlashmasi",
      "en": "88. Beeline — Voice Call and Mobile Data Combo Interface"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nBeeline 'ComboPlan' tarif rejasi 'IVoicePlan' (daqiqalar) va 'IDataPlan' (gigabaytlar) interfeyslarini o'zida birlashtirib mijozga umumiy xizmat paketini taqdim etadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'IVoicePlan' va 'IDataPlan' interfeyslarini e'lon qiling.\n2. 'ComboPlan' sinfini 'implements IVoicePlan, IDataPlan' orqali bir vaqtning o'zida ikkala interfeysga bog'lang.\n3. Har ikkala interfeys shartnomalarini sinf ichida to'liq bajaring (@Override).\n4. To'qnashuv bo'lsa 'Interface.super.method()' orqali mojaroni hal qiling.\n5. 'Main' metodida tekshiring: 'ComboPlan plan = new ComboPlan(\"Status Silver\", 1000, 25);         System.out.println(plan.getPlanDetails());'",
      "en": "📖 Real-World Scenario & Context\nComboPlan combines voice minutes and data traffic interfaces into a single subscriber entity.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare interfaces 'IVoicePlan' and 'IDataPlan'.\n2. Implement both in 'ComboPlan' using comma-separated implements.\n3. Override and provide logic for methods from both contracts.\n4. Resolve default method collisions using Interface.super syntax.\n5. Verify in 'main': 'ComboPlan plan = new ComboPlan(\"Status Silver\", 1000, 25);         System.out.println(plan.getPlanDetails());'"
    },
    "requirements": {
      "classes": [
        "ComboPlan",
        "Main"
      ],
      "interfaces": [
        "IVoicePlan",
        "IDataPlan"
      ],
      "methods": [
        "getPlanDetails"
      ],
      "keywords": [
        "implements"
      ]
    },
    "starterCode": "// Bir nechta interfeyslarni realizatsiya qiling\ninterface IVoicePlan {\n}\n\ninterface IDataPlan {\n}\n\nclass ComboPlan implements IVoicePlan, IDataPlan {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ComboPlan plan = new ComboPlan(\"Status Silver\", 1000, 25);\n        System.out.println(plan.getPlanDetails());\n    }\n}",
    "solution": "interface IVoicePlan {\n    int getMinutes();\n}\n\ninterface IDataPlan {\n    int getDataGb();\n}\n\nclass ComboPlan implements IVoicePlan, IDataPlan {\n    private String name;\n    private int minutes;\n    private int gb;\n    public ComboPlan(String n, int m, int g) { this.name = n; this.minutes = m; this.gb = g; }\n    @Override\n    public int getMinutes() { return minutes; }\n    @Override\n    public int getDataGb() { return gb; }\n    public String getPlanDetails() {\n        return \"Tarif: \" + name + \" | Daqiqalar: \" + minutes + \" min | Internet: \" + gb + \" GB\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ComboPlan plan = new ComboPlan(\"Status Silver\", 1000, 25);\n        System.out.println(plan.getPlanDetails());\n    }\n}",
    "detailedSolution": {
      "theory": "Java da bitta sinf faqat bitta sinfdan meros olishi mumkin, lekin istalgancha ko'p interfeyslarni ('implements A, B') amalga oshirishi mumkin. Agar ikkita interfeysda bir xil signaturaga ega default metod bo'lsa, voris sinf uni majburan qayta yozib to'qnashuvni hal qilishi shart.",
      "cleanCode": "class ComboPlan implements IVoicePlan, IDataPlan {\n    @Override ...\n}",
      "breakdown": [
        "<code>ComboPlan</code>: ikkita interfeysni birlashtirgan klass.",
        "<code>getPlanDetails</code>: polimorfik operatsiya."
      ]
    }
  },
  {
    "id": 89,
    "tier": 6,
    "tierName": "6-Bosqich: Ko'p Interfeyslarni Amalga Oshirish va Mojarolarni Hal Qilish",
    "sector": "76-90: Multiple Interfaces & Conflict Resolution",
    "title": {
      "uz": "89. UzAirways — Parvoz Xizmati va Yuk Sug'urtasi",
      "en": "89. UzAirways — Flight Passenger Service and Baggage Insurance"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nUzAirways 'PremiumFlightBooking' sinfi 'IPassengerService' (ovqat tanlash) va 'IBaggageInsurance' (yo'qolgan yuk uchun kompensatsiya) interfeyslariga tayanadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'IPassengerService' va 'IBaggageInsurance' interfeyslarini e'lon qiling.\n2. 'PremiumFlightBooking' sinfini 'implements IPassengerService, IBaggageInsurance' orqali bir vaqtning o'zida ikkala interfeysga bog'lang.\n3. Har ikkala interfeys shartnomalarini sinf ichida to'liq bajaring (@Override).\n4. To'qnashuv bo'lsa 'Interface.super.method()' orqali mojaroni hal qiling.\n5. 'Main' metodida tekshiring: 'PremiumFlightBooking bk = new PremiumFlightBooking(\"Muslim Meal\", 2000000.0);         System.out.println(bk.getPremiumSummary());'",
      "en": "📖 Real-World Scenario & Context\nBooking model realizes passenger meal service and baggage insurance coverage simultaneously.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare interfaces 'IPassengerService' and 'IBaggageInsurance'.\n2. Implement both in 'PremiumFlightBooking' using comma-separated implements.\n3. Override and provide logic for methods from both contracts.\n4. Resolve default method collisions using Interface.super syntax.\n5. Verify in 'main': 'PremiumFlightBooking bk = new PremiumFlightBooking(\"Muslim Meal\", 2000000.0);         System.out.println(bk.getPremiumSummary());'"
    },
    "requirements": {
      "classes": [
        "PremiumFlightBooking",
        "Main"
      ],
      "interfaces": [
        "IPassengerService",
        "IBaggageInsurance"
      ],
      "methods": [
        "getPremiumSummary"
      ],
      "keywords": [
        "implements"
      ]
    },
    "starterCode": "// Bir nechta interfeyslarni realizatsiya qiling\ninterface IPassengerService {\n}\n\ninterface IBaggageInsurance {\n}\n\nclass PremiumFlightBooking implements IPassengerService, IBaggageInsurance {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PremiumFlightBooking bk = new PremiumFlightBooking(\"Muslim Meal\", 2000000.0);\n        System.out.println(bk.getPremiumSummary());\n    }\n}",
    "solution": "interface IPassengerService {\n    String getSelectedMeal();\n}\n\ninterface IBaggageInsurance {\n    double getInsuranceCoverage();\n}\n\nclass PremiumFlightBooking implements IPassengerService, IBaggageInsurance {\n    private String meal;\n    private double coverage;\n    public PremiumFlightBooking(String m, double cov) { this.meal = m; this.coverage = cov; }\n    @Override\n    public String getSelectedMeal() { return meal; }\n    @Override\n    public double getInsuranceCoverage() { return coverage; }\n    public String getPremiumSummary() {\n        return \"Ovqat: \" + meal + \" | Yuk sug'urta qoplamasi: \" + coverage + \" UZS\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PremiumFlightBooking bk = new PremiumFlightBooking(\"Muslim Meal\", 2000000.0);\n        System.out.println(bk.getPremiumSummary());\n    }\n}",
    "detailedSolution": {
      "theory": "Java da bitta sinf faqat bitta sinfdan meros olishi mumkin, lekin istalgancha ko'p interfeyslarni ('implements A, B') amalga oshirishi mumkin. Agar ikkita interfeysda bir xil signaturaga ega default metod bo'lsa, voris sinf uni majburan qayta yozib to'qnashuvni hal qilishi shart.",
      "cleanCode": "class PremiumFlightBooking implements IPassengerService, IBaggageInsurance {\n    @Override ...\n}",
      "breakdown": [
        "<code>PremiumFlightBooking</code>: ikkita interfeysni birlashtirgan klass.",
        "<code>getPremiumSummary</code>: polimorfik operatsiya."
      ]
    }
  },
  {
    "id": 90,
    "tier": 6,
    "tierName": "6-Bosqich: Ko'p Interfeyslarni Amalga Oshirish va Mojarolarni Hal Qilish",
    "sector": "76-90: Multiple Interfaces & Conflict Resolution",
    "title": {
      "uz": "90. WIUT SRS — Diamond Problem va default Metodlar To'qnashuvi",
      "en": "90. WIUT SRS — Resolving Diamond Problem with Interface.super.method()"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT 6-leksiyasida (Slide 29): 'If two interfaces have a default method with the same signature, the implementing class must override that method to resolve the conflict'. 'IOnlineExam' va 'IClassroomExam' da 'default String getExamMode()' mavjud. 'BlendedExam' sinfida to'qnashuvni hal qiling.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'IOnlineExam' va 'IClassroomExam' interfeyslarini e'lon qiling.\n2. 'BlendedExam' sinfini 'implements IOnlineExam, IClassroomExam' orqali bir vaqtning o'zida ikkala interfeysga bog'lang.\n3. Har ikkala interfeys shartnomalarini sinf ichida to'liq bajaring (@Override).\n4. To'qnashuv bo'lsa 'Interface.super.method()' orqali mojaroni hal qiling.\n5. 'Main' metodida tekshiring: 'BlendedExam exam = new BlendedExam();         System.out.println(\"Imtihon shakli: \" + exam.getExamMode());'",
      "en": "📖 Real-World Scenario & Context\nResolve default method signature collision using InterfaceName.super.method() syntax from Slide 29.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare interfaces 'IOnlineExam' and 'IClassroomExam'.\n2. Implement both in 'BlendedExam' using comma-separated implements.\n3. Override and provide logic for methods from both contracts.\n4. Resolve default method collisions using Interface.super syntax.\n5. Verify in 'main': 'BlendedExam exam = new BlendedExam();         System.out.println(\"Imtihon shakli: \" + exam.getExamMode());'"
    },
    "requirements": {
      "classes": [
        "BlendedExam",
        "Main"
      ],
      "interfaces": [
        "IOnlineExam",
        "IClassroomExam"
      ],
      "methods": [
        "getExamMode"
      ],
      "keywords": [
        "implements"
      ]
    },
    "starterCode": "// Bir nechta interfeyslarni realizatsiya qiling\ninterface IOnlineExam {\n}\n\ninterface IClassroomExam {\n}\n\nclass BlendedExam implements IOnlineExam, IClassroomExam {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BlendedExam exam = new BlendedExam();\n        System.out.println(\"Imtihon shakli: \" + exam.getExamMode());\n    }\n}",
    "solution": "interface IOnlineExam {\n    default String getExamMode() { return \"Online: LMS Portal orqali\"; }\n}\n\ninterface IClassroomExam {\n    default String getExamMode() { return \"Auditoriya: Qog'oz formatida\"; }\n}\n\nclass BlendedExam implements IOnlineExam, IClassroomExam {\n    @Override\n    public String getExamMode() {\n        return \"Aralash (\" + IOnlineExam.super.getExamMode() + \")\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BlendedExam exam = new BlendedExam();\n        System.out.println(\"Imtihon shakli: \" + exam.getExamMode());\n    }\n}",
    "detailedSolution": {
      "theory": "Java da bitta sinf faqat bitta sinfdan meros olishi mumkin, lekin istalgancha ko'p interfeyslarni ('implements A, B') amalga oshirishi mumkin. Agar ikkita interfeysda bir xil signaturaga ega default metod bo'lsa, voris sinf uni majburan qayta yozib to'qnashuvni hal qilishi shart.",
      "cleanCode": "class BlendedExam implements IOnlineExam, IClassroomExam {\n    @Override ...\n}",
      "breakdown": [
        "<code>BlendedExam</code>: ikkita interfeysni birlashtirgan klass.",
        "<code>getExamMode</code>: polimorfik operatsiya."
      ]
    }
  },
  {
    "id": 91,
    "tier": 7,
    "tierName": "7-Bosqich: Abstrakt Sinf vs Interfeys Tanlovi va Polimorfik Qayta Ishlash",
    "sector": "91-105: Design Choices & Polymorphic Collections",
    "title": {
      "uz": "91. Uzum Market — Polimorfik To'lov Vositalari To'plami (List<Payable>)",
      "en": "91. Uzum Market — Polymorphic Processing with List<Payable>"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT 6-leksiyasida aytilganidek: dasturchi aniq sinflarga emas, umumiy 'Payable' interfeysiga qarab kod yozishi kerak. 'PaymentProcessor' klassida turli to'lov usullarini (BankCard, BonusBalance) 'List<Payable>' ro'yxatida yig'ib to'lovlarni bajaring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Polimorfik interfeys shartnomasini va uni amalga oshiruvchi sinflarni e'lon qiling.\n2. 'PaymentBatchService' agregator sinfini tuzing.\n3. Interfeys havolalarini 'List<Interface>' to'plamida saqlang.\n4. 'processAllPayments(...)' metodi orqali barcha elementlar bo'ylab iteratsiya qiling.\n5. 'Main' da tekshirib natijani chop eting: 'PaymentBatchService batch = new PaymentBatchService();         batch.addPaymentMethod(new SimCardWallet(100000.0));         batch.addPaymentMethod(new SimBonusWallet(50000.0));         int success = batch.processAllPayments(40000.0);         System.out.println(\"Muvaffaqiyatli to'lovlar soni: \" + success);'",
      "en": "📖 Real-World Scenario & Context\nProcess diverse payment objects polymorphically via a List of Payable interface references.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare polymorphic interface and concrete implementing classes.\n2. Build management class 'PaymentBatchService'.\n3. Store interface instances inside a List collection.\n4. Iterate through list polymorphically in 'processAllPayments(...)'.\n5. Verify result in 'main': 'PaymentBatchService batch = new PaymentBatchService();         batch.addPaymentMethod(new SimCardWallet(100000.0));         batch.addPaymentMethod(new SimBonusWallet(50000.0));         int success = batch.processAllPayments(40000.0);         System.out.println(\"Muvaffaqiyatli to'lovlar soni: \" + success);'"
    },
    "requirements": {
      "classes": [
        "PaymentBatchService",
        "Main"
      ],
      "methods": [
        "processAllPayments"
      ]
    },
    "starterCode": "// Polimorfik to'plam bilan ishlovchi klassni yozing\nclass PaymentBatchService {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentBatchService batch = new PaymentBatchService();\n        batch.addPaymentMethod(new SimCardWallet(100000.0));\n        batch.addPaymentMethod(new SimBonusWallet(50000.0));\n        int success = batch.processAllPayments(40000.0);\n        System.out.println(\"Muvaffaqiyatli to'lovlar soni: \" + success);\n    }\n}",
    "solution": "import java.util.List;\nimport java.util.ArrayList;\n\ninterface Payable {\n    boolean processPayment(double amt);\n}\n\nclass SimCardWallet implements Payable {\n    private double bal;\n    public SimCardWallet(double b) { this.bal = b; }\n    @Override\n    public boolean processPayment(double amt) { return amt <= bal; }\n}\n\nclass SimBonusWallet implements Payable {\n    private double pts;\n    public SimBonusWallet(double p) { this.pts = p; }\n    @Override\n    public boolean processPayment(double amt) { return amt <= pts; }\n}\n\nclass PaymentBatchService {\n    private List<Payable> methods = new ArrayList<>();\n    public void addPaymentMethod(Payable p) { methods.add(p); }\n    public int processAllPayments(double amt) {\n        int count = 0;\n        for (Payable p : methods) if (p.processPayment(amt)) count++;\n        return count;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentBatchService batch = new PaymentBatchService();\n        batch.addPaymentMethod(new SimCardWallet(100000.0));\n        batch.addPaymentMethod(new SimBonusWallet(50000.0));\n        int success = batch.processAllPayments(40000.0);\n        System.out.println(\"Muvaffaqiyatli to'lovlar soni: \" + success);\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfik to'plamlar (masalan, List<Payable>) turli xil sinflarning ob'yektlarini yagona umumiy interfeys orqali boshqarish imkonini beradi. Kod har bir ob'yektning aniq qaysi sinfga mansubligini bilishi shart emas, umumiy interfeys metodini chaqirishning o'zi kifoya.",
      "cleanCode": "class PaymentBatchService {\n    private List<Payable> list = new ArrayList<>();\n}",
      "breakdown": [
        "<code>PaymentBatchService</code>: polimorfik interfeys to'plamiga ega sinf.",
        "<code>processAllPayments</code>: umumiy interfeys orqali iteratsiya."
      ]
    }
  },
  {
    "id": 92,
    "tier": 7,
    "tierName": "7-Bosqich: Abstrakt Sinf vs Interfeys Tanlovi va Polimorfik Qayta Ishlash",
    "sector": "91-105: Design Choices & Polymorphic Collections",
    "title": {
      "uz": "92. Payme — Is-A vs Can-Do Arxitektura Tanlovi",
      "en": "92. Payme — Is-A Hierarchy vs Can-Do Capability Design"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nLeksiyada: 'Abstract class is used when classes share code and state (is-a); Interface is used for cross-cutting capabilities (can-do)'. 'AbstractAccount' dan meros oluvchi va 'ITransferable' interfeysini bajaruvchi 'CheckingAccount' tuzing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Polimorfik interfeys shartnomasini va uni amalga oshiruvchi sinflarni e'lon qiling.\n2. 'CheckingAccount' agregator sinfini tuzing.\n3. Interfeys havolalarini 'List<Interface>' to'plamida saqlang.\n4. 'transferFunds(...)' metodi orqali barcha elementlar bo'ylab iteratsiya qiling.\n5. 'Main' da tekshirib natijani chop eting: 'CheckingAccount acc = new CheckingAccount(\"ACC-55\", 400000.0);         boolean ok = acc.transferFunds(\"ACC-99\", 150000.0);         System.out.println(acc.getAccountSummary() + \" | O'tkazma: \" + ok);'",
      "en": "📖 Real-World Scenario & Context\nDemonstrate combining abstract class is-a inheritance with capability interface realization.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare polymorphic interface and concrete implementing classes.\n2. Build management class 'CheckingAccount'.\n3. Store interface instances inside a List collection.\n4. Iterate through list polymorphically in 'transferFunds(...)'.\n5. Verify result in 'main': 'CheckingAccount acc = new CheckingAccount(\"ACC-55\", 400000.0);         boolean ok = acc.transferFunds(\"ACC-99\", 150000.0);         System.out.println(acc.getAccountSummary() + \" | O'tkazma: \" + ok);'"
    },
    "requirements": {
      "classes": [
        "CheckingAccount",
        "Main"
      ],
      "methods": [
        "transferFunds"
      ]
    },
    "starterCode": "// Polimorfik to'plam bilan ishlovchi klassni yozing\nclass CheckingAccount {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CheckingAccount acc = new CheckingAccount(\"ACC-55\", 400000.0);\n        boolean ok = acc.transferFunds(\"ACC-99\", 150000.0);\n        System.out.println(acc.getAccountSummary() + \" | O'tkazma: \" + ok);\n    }\n}",
    "solution": "interface ITransferable {\n    boolean transferFunds(String target, double amt);\n}\n\nabstract class AbstractAccount {\n    protected String accId;\n    protected double balance;\n    public AbstractAccount(String id, double bal) { this.accId = id; this.balance = bal; }\n    public String getAccountSummary() { return \"Hisob: \" + accId + \" | Qoldiq: \" + balance + \" UZS\"; }\n}\n\nclass CheckingAccount extends AbstractAccount implements ITransferable {\n    public CheckingAccount(String id, double bal) { super(id, bal); }\n    @Override\n    public boolean transferFunds(String target, double amt) {\n        if (amt <= balance) { balance -= amt; return true; }\n        return false;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CheckingAccount acc = new CheckingAccount(\"ACC-55\", 400000.0);\n        boolean ok = acc.transferFunds(\"ACC-99\", 150000.0);\n        System.out.println(acc.getAccountSummary() + \" | O'tkazma: \" + ok);\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfik to'plamlar (masalan, List<Payable>) turli xil sinflarning ob'yektlarini yagona umumiy interfeys orqali boshqarish imkonini beradi. Kod har bir ob'yektning aniq qaysi sinfga mansubligini bilishi shart emas, umumiy interfeys metodini chaqirishning o'zi kifoya.",
      "cleanCode": "class CheckingAccount {\n    private List<Payable> list = new ArrayList<>();\n}",
      "breakdown": [
        "<code>CheckingAccount</code>: polimorfik interfeys to'plamiga ega sinf.",
        "<code>transferFunds</code>: umumiy interfeys orqali iteratsiya."
      ]
    }
  },
  {
    "id": 93,
    "tier": 7,
    "tierName": "7-Bosqich: Abstrakt Sinf vs Interfeys Tanlovi va Polimorfik Qayta Ishlash",
    "sector": "91-105: Design Choices & Polymorphic Collections",
    "title": {
      "uz": "93. Korzinka — Polimorfik Chegirmalar Ketma-ketligi (List<IDiscount>)",
      "en": "93. Korzinka — Sequential Polymorphic Discount Application"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nKorzinka savatchasiga bir nechta chegirma qoidalari (vaucher, pensioner, sodiqlik) ketma-ket qo'llaniladi. 'DiscountEngine' klassida 'List<IDiscount>' bo'yicha yakuniy summani hisoblang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Polimorfik interfeys shartnomasini va uni amalga oshiruvchi sinflarni e'lon qiling.\n2. 'DiscountEngine' agregator sinfini tuzing.\n3. Interfeys havolalarini 'List<Interface>' to'plamida saqlang.\n4. 'calculateDiscountedTotal(...)' metodi orqali barcha elementlar bo'ylab iteratsiya qiling.\n5. 'Main' da tekshirib natijani chop eting: 'DiscountEngine engine = new DiscountEngine();         engine.addDiscount(new FixedCoupon(10000.0));         engine.addDiscount(new PercentageCut(0.05));         System.out.println(\"Chegirmali jami: \" + engine.calculateDiscountedTotal(200000.0) + \" UZS\");'",
      "en": "📖 Real-World Scenario & Context\nIterate over a list of IDiscount interfaces to apply multiple discounts sequentially.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare polymorphic interface and concrete implementing classes.\n2. Build management class 'DiscountEngine'.\n3. Store interface instances inside a List collection.\n4. Iterate through list polymorphically in 'calculateDiscountedTotal(...)'.\n5. Verify result in 'main': 'DiscountEngine engine = new DiscountEngine();         engine.addDiscount(new FixedCoupon(10000.0));         engine.addDiscount(new PercentageCut(0.05));         System.out.println(\"Chegirmali jami: \" + engine.calculateDiscountedTotal(200000.0) + \" UZS\");'"
    },
    "requirements": {
      "classes": [
        "DiscountEngine",
        "Main"
      ],
      "methods": [
        "calculateDiscountedTotal"
      ]
    },
    "starterCode": "// Polimorfik to'plam bilan ishlovchi klassni yozing\nclass DiscountEngine {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DiscountEngine engine = new DiscountEngine();\n        engine.addDiscount(new FixedCoupon(10000.0));\n        engine.addDiscount(new PercentageCut(0.05));\n        System.out.println(\"Chegirmali jami: \" + engine.calculateDiscountedTotal(200000.0) + \" UZS\");\n    }\n}",
    "solution": "import java.util.List;\nimport java.util.ArrayList;\n\ninterface IDiscount {\n    double apply(double total);\n}\n\nclass FixedCoupon implements IDiscount {\n    private double cut;\n    public FixedCoupon(double c) { this.cut = c; }\n    @Override\n    public double apply(double total) { return total - cut; }\n}\n\nclass PercentageCut implements IDiscount {\n    private double rate;\n    public PercentageCut(double r) { this.rate = r; }\n    @Override\n    public double apply(double total) { return total * (1.0 - rate); }\n}\n\nclass DiscountEngine {\n    private List<IDiscount> discounts = new ArrayList<>();\n    public void addDiscount(IDiscount d) { discounts.add(d); }\n    public double calculateDiscountedTotal(double initial) {\n        double current = initial;\n        for (IDiscount d : discounts) current = d.apply(current);\n        return current;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DiscountEngine engine = new DiscountEngine();\n        engine.addDiscount(new FixedCoupon(10000.0));\n        engine.addDiscount(new PercentageCut(0.05));\n        System.out.println(\"Chegirmali jami: \" + engine.calculateDiscountedTotal(200000.0) + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfik to'plamlar (masalan, List<Payable>) turli xil sinflarning ob'yektlarini yagona umumiy interfeys orqali boshqarish imkonini beradi. Kod har bir ob'yektning aniq qaysi sinfga mansubligini bilishi shart emas, umumiy interfeys metodini chaqirishning o'zi kifoya.",
      "cleanCode": "class DiscountEngine {\n    private List<Payable> list = new ArrayList<>();\n}",
      "breakdown": [
        "<code>DiscountEngine</code>: polimorfik interfeys to'plamiga ega sinf.",
        "<code>calculateDiscountedTotal</code>: umumiy interfeys orqali iteratsiya."
      ]
    }
  },
  {
    "id": 94,
    "tier": 7,
    "tierName": "7-Bosqich: Abstrakt Sinf vs Interfeys Tanlovi va Polimorfik Qayta Ishlash",
    "sector": "91-105: Design Choices & Polymorphic Collections",
    "title": {
      "uz": "94. Yandex Go — Polimorfik GPS Flot Monitoringi (List<IGpsVehicle>)",
      "en": "94. Yandex Go — Fleet GPS Tracking via Interface List"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nYandex Go parkida taksi, yuk mashinasi va kuryer skuterlari bor. Ularning barchasi 'IGpsVehicle' interfeysiga ega. 'FleetMonitor' klassida jami faol mashinalar koordinatasini hisobot qiling.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Polimorfik interfeys shartnomasini va uni amalga oshiruvchi sinflarni e'lon qiling.\n2. 'FleetMonitor' agregator sinfini tuzing.\n3. Interfeys havolalarini 'List<Interface>' to'plamida saqlang.\n4. 'getFleetReport(...)' metodi orqali barcha elementlar bo'ylab iteratsiya qiling.\n5. 'Main' da tekshirib natijani chop eting: 'FleetMonitor monitor = new FleetMonitor();         monitor.registerVehicle(new TaxiCar(\"01A777AA\"));         monitor.registerVehicle(new CargoTruck(\"01B888BB\"));         System.out.println(\"Faol flot: \" + monitor.getActiveCount() + \" ta transport\");'",
      "en": "📖 Real-World Scenario & Context\nAggregate multiple vehicle types implementing IGpsVehicle in a central fleet management service.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare polymorphic interface and concrete implementing classes.\n2. Build management class 'FleetMonitor'.\n3. Store interface instances inside a List collection.\n4. Iterate through list polymorphically in 'getFleetReport(...)'.\n5. Verify result in 'main': 'FleetMonitor monitor = new FleetMonitor();         monitor.registerVehicle(new TaxiCar(\"01A777AA\"));         monitor.registerVehicle(new CargoTruck(\"01B888BB\"));         System.out.println(\"Faol flot: \" + monitor.getActiveCount() + \" ta transport\");'"
    },
    "requirements": {
      "classes": [
        "FleetMonitor",
        "Main"
      ],
      "methods": [
        "getFleetReport"
      ]
    },
    "starterCode": "// Polimorfik to'plam bilan ishlovchi klassni yozing\nclass FleetMonitor {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FleetMonitor monitor = new FleetMonitor();\n        monitor.registerVehicle(new TaxiCar(\"01A777AA\"));\n        monitor.registerVehicle(new CargoTruck(\"01B888BB\"));\n        System.out.println(\"Faol flot: \" + monitor.getActiveCount() + \" ta transport\");\n    }\n}",
    "solution": "import java.util.List;\nimport java.util.ArrayList;\n\ninterface IGpsVehicle {\n    String getPlate();\n}\n\nclass TaxiCar implements IGpsVehicle {\n    private String plate;\n    public TaxiCar(String p) { this.plate = p; }\n    @Override\n    public String getPlate() { return plate; }\n}\n\nclass CargoTruck implements IGpsVehicle {\n    private String plate;\n    public CargoTruck(String p) { this.plate = p; }\n    @Override\n    public String getPlate() { return plate; }\n}\n\nclass FleetMonitor {\n    private List<IGpsVehicle> fleet = new ArrayList<>();\n    public void registerVehicle(IGpsVehicle v) { fleet.add(v); }\n    public int getActiveCount() { return fleet.size(); }\n    public String getFleetReport() { return \"Faol flot: \" + fleet.size() + \" ta transport\"; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FleetMonitor monitor = new FleetMonitor();\n        monitor.registerVehicle(new TaxiCar(\"01A777AA\"));\n        monitor.registerVehicle(new CargoTruck(\"01B888BB\"));\n        System.out.println(\"Faol flot: \" + monitor.getActiveCount() + \" ta transport\");\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfik to'plamlar (masalan, List<Payable>) turli xil sinflarning ob'yektlarini yagona umumiy interfeys orqali boshqarish imkonini beradi. Kod har bir ob'yektning aniq qaysi sinfga mansubligini bilishi shart emas, umumiy interfeys metodini chaqirishning o'zi kifoya.",
      "cleanCode": "class FleetMonitor {\n    private List<Payable> list = new ArrayList<>();\n}",
      "breakdown": [
        "<code>FleetMonitor</code>: polimorfik interfeys to'plamiga ega sinf.",
        "<code>getFleetReport</code>: umumiy interfeys orqali iteratsiya."
      ]
    }
  },
  {
    "id": 95,
    "tier": 7,
    "tierName": "7-Bosqich: Abstrakt Sinf vs Interfeys Tanlovi va Polimorfik Qayta Ishlash",
    "sector": "91-105: Design Choices & Polymorphic Collections",
    "title": {
      "uz": "95. Click — Polimorfik Tranzaksiyalar Auditi (List<IAuditable>)",
      "en": "95. Click — Transaction Audit Processing via IAuditable Interface"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nClick audit servisi to'lov, qaytarish yoki konvertatsiya harakatlarini 'IAuditable' interfeysi orqali bir xil tartibda log faylga yozadi. Ro'yxatdagi barcha loglarni chiqaring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Polimorfik interfeys shartnomasini va uni amalga oshiruvchi sinflarni e'lon qiling.\n2. 'AuditLogger' agregator sinfini tuzing.\n3. Interfeys havolalarini 'List<Interface>' to'plamida saqlang.\n4. 'generateAuditReport(...)' metodi orqali barcha elementlar bo'ylab iteratsiya qiling.\n5. 'Main' da tekshirib natijani chop eting: 'AuditLogger logger = new AuditLogger();         logger.addLog(new PaymentTxLog(\"P-101\", 50000.0));         logger.addLog(new RefundTxLog(\"R-202\", 12000.0));         System.out.println(\"Audit yozuvlari: \" + logger.getLogCount() + \" ta\");'",
      "en": "📖 Real-World Scenario & Context\nProcess audit records polymorphically using IAuditable contract.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare polymorphic interface and concrete implementing classes.\n2. Build management class 'AuditLogger'.\n3. Store interface instances inside a List collection.\n4. Iterate through list polymorphically in 'generateAuditReport(...)'.\n5. Verify result in 'main': 'AuditLogger logger = new AuditLogger();         logger.addLog(new PaymentTxLog(\"P-101\", 50000.0));         logger.addLog(new RefundTxLog(\"R-202\", 12000.0));         System.out.println(\"Audit yozuvlari: \" + logger.getLogCount() + \" ta\");'"
    },
    "requirements": {
      "classes": [
        "AuditLogger",
        "Main"
      ],
      "methods": [
        "generateAuditReport"
      ]
    },
    "starterCode": "// Polimorfik to'plam bilan ishlovchi klassni yozing\nclass AuditLogger {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AuditLogger logger = new AuditLogger();\n        logger.addLog(new PaymentTxLog(\"P-101\", 50000.0));\n        logger.addLog(new RefundTxLog(\"R-202\", 12000.0));\n        System.out.println(\"Audit yozuvlari: \" + logger.getLogCount() + \" ta\");\n    }\n}",
    "solution": "import java.util.List;\nimport java.util.ArrayList;\n\ninterface IAuditable {\n    String getLog();\n}\n\nclass PaymentTxLog implements IAuditable {\n    private String id; private double amt;\n    public PaymentTxLog(String id, double a) { this.id = id; this.amt = a; }\n    @Override\n    public String getLog() { return \"PAY: \" + id + \" -> \" + amt; }\n}\n\nclass RefundTxLog implements IAuditable {\n    private String id; private double amt;\n    public RefundTxLog(String id, double a) { this.id = id; this.amt = a; }\n    @Override\n    public String getLog() { return \"REF: \" + id + \" -> \" + amt; }\n}\n\nclass AuditLogger {\n    private List<IAuditable> logs = new ArrayList<>();\n    public void addLog(IAuditable a) { logs.add(a); }\n    public int getLogCount() { return logs.size(); }\n    public String generateAuditReport() { return \"Logs count: \" + logs.size(); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AuditLogger logger = new AuditLogger();\n        logger.addLog(new PaymentTxLog(\"P-101\", 50000.0));\n        logger.addLog(new RefundTxLog(\"R-202\", 12000.0));\n        System.out.println(\"Audit yozuvlari: \" + logger.getLogCount() + \" ta\");\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfik to'plamlar (masalan, List<Payable>) turli xil sinflarning ob'yektlarini yagona umumiy interfeys orqali boshqarish imkonini beradi. Kod har bir ob'yektning aniq qaysi sinfga mansubligini bilishi shart emas, umumiy interfeys metodini chaqirishning o'zi kifoya.",
      "cleanCode": "class AuditLogger {\n    private List<Payable> list = new ArrayList<>();\n}",
      "breakdown": [
        "<code>AuditLogger</code>: polimorfik interfeys to'plamiga ega sinf.",
        "<code>generateAuditReport</code>: umumiy interfeys orqali iteratsiya."
      ]
    }
  },
  {
    "id": 96,
    "tier": 7,
    "tierName": "7-Bosqich: Abstrakt Sinf vs Interfeys Tanlovi va Polimorfik Qayta Ishlash",
    "sector": "91-105: Design Choices & Polymorphic Collections",
    "title": {
      "uz": "96. Safia — Muddati O'tayotgan Mahsulotlar Filtrlash (List<IPerishable>)",
      "en": "96. Safia — Filtering Expiring Inventory via IPerishable Interface"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSafia do'konida ombordagi tortlar va piroglar 'IPerishable' interfeysiga ega. 'InventoryAudit' klassida 2 kundan kam qolgan tovarlar sonini aniqlang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Polimorfik interfeys shartnomasini va uni amalga oshiruvchi sinflarni e'lon qiling.\n2. 'InventoryAudit' agregator sinfini tuzing.\n3. Interfeys havolalarini 'List<Interface>' to'plamida saqlang.\n4. 'countExpiringSoon(...)' metodi orqali barcha elementlar bo'ylab iteratsiya qiling.\n5. 'Main' da tekshirib natijani chop eting: 'InventoryAudit inv = new InventoryAudit();         inv.addItem(new BakeryItem(\"Tort\", 1));         inv.addItem(new BakeryItem(\"Pechenye\", 10));         System.out.println(\"Muddati yaqin tovarlar: \" + inv.countExpiringSoon(2) + \" ta\");'",
      "en": "📖 Real-World Scenario & Context\nInspect collection of IPerishable items and count products nearing expiration threshold.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare polymorphic interface and concrete implementing classes.\n2. Build management class 'InventoryAudit'.\n3. Store interface instances inside a List collection.\n4. Iterate through list polymorphically in 'countExpiringSoon(...)'.\n5. Verify result in 'main': 'InventoryAudit inv = new InventoryAudit();         inv.addItem(new BakeryItem(\"Tort\", 1));         inv.addItem(new BakeryItem(\"Pechenye\", 10));         System.out.println(\"Muddati yaqin tovarlar: \" + inv.countExpiringSoon(2) + \" ta\");'"
    },
    "requirements": {
      "classes": [
        "InventoryAudit",
        "Main"
      ],
      "methods": [
        "countExpiringSoon"
      ]
    },
    "starterCode": "// Polimorfik to'plam bilan ishlovchi klassni yozing\nclass InventoryAudit {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        InventoryAudit inv = new InventoryAudit();\n        inv.addItem(new BakeryItem(\"Tort\", 1));\n        inv.addItem(new BakeryItem(\"Pechenye\", 10));\n        System.out.println(\"Muddati yaqin tovarlar: \" + inv.countExpiringSoon(2) + \" ta\");\n    }\n}",
    "solution": "import java.util.List;\nimport java.util.ArrayList;\n\ninterface IPerishable {\n    int getDaysLeft();\n}\n\nclass BakeryItem implements IPerishable {\n    private String name;\n    private int days;\n    public BakeryItem(String n, int d) { this.name = n; this.days = d; }\n    @Override\n    public int getDaysLeft() { return days; }\n}\n\nclass InventoryAudit {\n    private List<IPerishable> items = new ArrayList<>();\n    public void addItem(IPerishable it) { items.add(it); }\n    public int countExpiringSoon(int threshold) {\n        int c = 0;\n        for (IPerishable p : items) if (p.getDaysLeft() <= threshold) c++;\n        return c;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        InventoryAudit inv = new InventoryAudit();\n        inv.addItem(new BakeryItem(\"Tort\", 1));\n        inv.addItem(new BakeryItem(\"Pechenye\", 10));\n        System.out.println(\"Muddati yaqin tovarlar: \" + inv.countExpiringSoon(2) + \" ta\");\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfik to'plamlar (masalan, List<Payable>) turli xil sinflarning ob'yektlarini yagona umumiy interfeys orqali boshqarish imkonini beradi. Kod har bir ob'yektning aniq qaysi sinfga mansubligini bilishi shart emas, umumiy interfeys metodini chaqirishning o'zi kifoya.",
      "cleanCode": "class InventoryAudit {\n    private List<Payable> list = new ArrayList<>();\n}",
      "breakdown": [
        "<code>InventoryAudit</code>: polimorfik interfeys to'plamiga ega sinf.",
        "<code>countExpiringSoon</code>: umumiy interfeys orqali iteratsiya."
      ]
    }
  },
  {
    "id": 97,
    "tier": 7,
    "tierName": "7-Bosqich: Abstrakt Sinf vs Interfeys Tanlovi va Polimorfik Qayta Ishlash",
    "sector": "91-105: Design Choices & Polymorphic Collections",
    "title": {
      "uz": "97. Dodo Pizza — Polimorfik Pishirish Navbati (List<ICookable>)",
      "en": "97. Dodo Pizza — Polymorphic Kitchen Oven Batch via ICookable"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nDodo oshxonasida pitsa va qanotchalar 'ICookable' interfeysiga ega. 'OvenManager' pechkada jami pishirish vaqtini hisoblovchi polimorfik metodni yozing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Polimorfik interfeys shartnomasini va uni amalga oshiruvchi sinflarni e'lon qiling.\n2. 'OvenManager' agregator sinfini tuzing.\n3. Interfeys havolalarini 'List<Interface>' to'plamida saqlang.\n4. 'getTotalBakeMinutes(...)' metodi orqali barcha elementlar bo'ylab iteratsiya qiling.\n5. 'Main' da tekshirib natijani chop eting: 'OvenManager oven = new OvenManager();         oven.addDish(new PizzaDish(12));         oven.addDish(new WingsDish(8));         System.out.println(\"Umumiy pishish vaqti: \" + oven.getTotalBakeMinutes() + \" daqiqa\");'",
      "en": "📖 Real-World Scenario & Context\nCalculate cumulative kitchen cooking time over diverse ICookable orders.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare polymorphic interface and concrete implementing classes.\n2. Build management class 'OvenManager'.\n3. Store interface instances inside a List collection.\n4. Iterate through list polymorphically in 'getTotalBakeMinutes(...)'.\n5. Verify result in 'main': 'OvenManager oven = new OvenManager();         oven.addDish(new PizzaDish(12));         oven.addDish(new WingsDish(8));         System.out.println(\"Umumiy pishish vaqti: \" + oven.getTotalBakeMinutes() + \" daqiqa\");'"
    },
    "requirements": {
      "classes": [
        "OvenManager",
        "Main"
      ],
      "methods": [
        "getTotalBakeMinutes"
      ]
    },
    "starterCode": "// Polimorfik to'plam bilan ishlovchi klassni yozing\nclass OvenManager {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        OvenManager oven = new OvenManager();\n        oven.addDish(new PizzaDish(12));\n        oven.addDish(new WingsDish(8));\n        System.out.println(\"Umumiy pishish vaqti: \" + oven.getTotalBakeMinutes() + \" daqiqa\");\n    }\n}",
    "solution": "import java.util.List;\nimport java.util.ArrayList;\n\ninterface ICookable {\n    int getMinutes();\n}\n\nclass PizzaDish implements ICookable {\n    private int mins;\n    public PizzaDish(int m) { this.mins = m; }\n    @Override\n    public int getMinutes() { return mins; }\n}\n\nclass WingsDish implements ICookable {\n    private int mins;\n    public WingsDish(int m) { this.mins = m; }\n    @Override\n    public int getMinutes() { return mins; }\n}\n\nclass OvenManager {\n    private List<ICookable> dishes = new ArrayList<>();\n    public void addDish(ICookable d) { dishes.add(d); }\n    public int getTotalBakeMinutes() {\n        int sum = 0;\n        for (ICookable d : dishes) sum += d.getMinutes();\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        OvenManager oven = new OvenManager();\n        oven.addDish(new PizzaDish(12));\n        oven.addDish(new WingsDish(8));\n        System.out.println(\"Umumiy pishish vaqti: \" + oven.getTotalBakeMinutes() + \" daqiqa\");\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfik to'plamlar (masalan, List<Payable>) turli xil sinflarning ob'yektlarini yagona umumiy interfeys orqali boshqarish imkonini beradi. Kod har bir ob'yektning aniq qaysi sinfga mansubligini bilishi shart emas, umumiy interfeys metodini chaqirishning o'zi kifoya.",
      "cleanCode": "class OvenManager {\n    private List<Payable> list = new ArrayList<>();\n}",
      "breakdown": [
        "<code>OvenManager</code>: polimorfik interfeys to'plamiga ega sinf.",
        "<code>getTotalBakeMinutes</code>: umumiy interfeys orqali iteratsiya."
      ]
    }
  },
  {
    "id": 98,
    "tier": 7,
    "tierName": "7-Bosqich: Abstrakt Sinf vs Interfeys Tanlovi va Polimorfik Qayta Ishlash",
    "sector": "91-105: Design Choices & Polymorphic Collections",
    "title": {
      "uz": "98. Texnomart — Polimorfik Kafolat Servisi (List<IWarrantyItem>)",
      "en": "98. Texnomart — Warranty Service Aggregation over Diverse Products"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nTexnomart servis markazi televizor va muzlatgichlarni 'IWarrantyItem' interfeysi orqali qabul qiladi. O'rtacha kafolat muddatini hisoblang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Polimorfik interfeys shartnomasini va uni amalga oshiruvchi sinflarni e'lon qiling.\n2. 'WarrantyRegistry' agregator sinfini tuzing.\n3. Interfeys havolalarini 'List<Interface>' to'plamida saqlang.\n4. 'getAverageCoverageMonths(...)' metodi orqali barcha elementlar bo'ylab iteratsiya qiling.\n5. 'Main' da tekshirib natijani chop eting: 'WarrantyRegistry reg = new WarrantyRegistry();         reg.register(new TechItem(12));         reg.register(new TechItem(24));         System.out.println(\"O'rtacha kafolat: \" + reg.getAverageCoverageMonths() + \" oy\");'",
      "en": "📖 Real-World Scenario & Context\nCompute average warranty coverage duration across collection of IWarrantyItem instances.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare polymorphic interface and concrete implementing classes.\n2. Build management class 'WarrantyRegistry'.\n3. Store interface instances inside a List collection.\n4. Iterate through list polymorphically in 'getAverageCoverageMonths(...)'.\n5. Verify result in 'main': 'WarrantyRegistry reg = new WarrantyRegistry();         reg.register(new TechItem(12));         reg.register(new TechItem(24));         System.out.println(\"O'rtacha kafolat: \" + reg.getAverageCoverageMonths() + \" oy\");'"
    },
    "requirements": {
      "classes": [
        "WarrantyRegistry",
        "Main"
      ],
      "methods": [
        "getAverageCoverageMonths"
      ]
    },
    "starterCode": "// Polimorfik to'plam bilan ishlovchi klassni yozing\nclass WarrantyRegistry {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WarrantyRegistry reg = new WarrantyRegistry();\n        reg.register(new TechItem(12));\n        reg.register(new TechItem(24));\n        System.out.println(\"O'rtacha kafolat: \" + reg.getAverageCoverageMonths() + \" oy\");\n    }\n}",
    "solution": "import java.util.List;\nimport java.util.ArrayList;\n\ninterface IWarrantyItem {\n    int getMonths();\n}\n\nclass TechItem implements IWarrantyItem {\n    private int m;\n    public TechItem(int m) { this.m = m; }\n    @Override\n    public int getMonths() { return m; }\n}\n\nclass WarrantyRegistry {\n    private List<IWarrantyItem> list = new ArrayList<>();\n    public void register(IWarrantyItem w) { list.add(w); }\n    public double getAverageCoverageMonths() {\n        if (list.isEmpty()) return 0.0;\n        double s = 0;\n        for (IWarrantyItem w : list) s += w.getMonths();\n        return s / list.size();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WarrantyRegistry reg = new WarrantyRegistry();\n        reg.register(new TechItem(12));\n        reg.register(new TechItem(24));\n        System.out.println(\"O'rtacha kafolat: \" + reg.getAverageCoverageMonths() + \" oy\");\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfik to'plamlar (masalan, List<Payable>) turli xil sinflarning ob'yektlarini yagona umumiy interfeys orqali boshqarish imkonini beradi. Kod har bir ob'yektning aniq qaysi sinfga mansubligini bilishi shart emas, umumiy interfeys metodini chaqirishning o'zi kifoya.",
      "cleanCode": "class WarrantyRegistry {\n    private List<Payable> list = new ArrayList<>();\n}",
      "breakdown": [
        "<code>WarrantyRegistry</code>: polimorfik interfeys to'plamiga ega sinf.",
        "<code>getAverageCoverageMonths</code>: umumiy interfeys orqali iteratsiya."
      ]
    }
  },
  {
    "id": 99,
    "tier": 7,
    "tierName": "7-Bosqich: Abstrakt Sinf vs Interfeys Tanlovi va Polimorfik Qayta Ishlash",
    "sector": "91-105: Design Choices & Polymorphic Collections",
    "title": {
      "uz": "99. Medion — Bemor Muolajalari Ro'yxati (List<IMedicalProcedure>)",
      "en": "99. Medion — Medical Procedure Billing via Interface Collection"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nMedionda qon tahlili, MRT va UZI 'IMedicalProcedure' interfeysi orqali ifodalanadi. Bemorning barcha muolajalari umumiy narxini hisoblang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Polimorfik interfeys shartnomasini va uni amalga oshiruvchi sinflarni e'lon qiling.\n2. 'PatientBilling' agregator sinfini tuzing.\n3. Interfeys havolalarini 'List<Interface>' to'plamida saqlang.\n4. 'calculateTotalBill(...)' metodi orqali barcha elementlar bo'ylab iteratsiya qiling.\n5. 'Main' da tekshirib natijani chop eting: 'PatientBilling bill = new PatientBilling();         bill.addProcedure(new ClinicalTest(50000.0));         bill.addProcedure(new ClinicalTest(150000.0));         System.out.println(\"Muolajalar summasi: \" + bill.calculateTotalBill() + \" UZS\");'",
      "en": "📖 Real-World Scenario & Context\nSum costs of varied clinical procedures polymorphically through IMedicalProcedure interface.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare polymorphic interface and concrete implementing classes.\n2. Build management class 'PatientBilling'.\n3. Store interface instances inside a List collection.\n4. Iterate through list polymorphically in 'calculateTotalBill(...)'.\n5. Verify result in 'main': 'PatientBilling bill = new PatientBilling();         bill.addProcedure(new ClinicalTest(50000.0));         bill.addProcedure(new ClinicalTest(150000.0));         System.out.println(\"Muolajalar summasi: \" + bill.calculateTotalBill() + \" UZS\");'"
    },
    "requirements": {
      "classes": [
        "PatientBilling",
        "Main"
      ],
      "methods": [
        "calculateTotalBill"
      ]
    },
    "starterCode": "// Polimorfik to'plam bilan ishlovchi klassni yozing\nclass PatientBilling {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PatientBilling bill = new PatientBilling();\n        bill.addProcedure(new ClinicalTest(50000.0));\n        bill.addProcedure(new ClinicalTest(150000.0));\n        System.out.println(\"Muolajalar summasi: \" + bill.calculateTotalBill() + \" UZS\");\n    }\n}",
    "solution": "import java.util.List;\nimport java.util.ArrayList;\n\ninterface IMedicalProcedure {\n    double getFee();\n}\n\nclass ClinicalTest implements IMedicalProcedure {\n    private double fee;\n    public ClinicalTest(double f) { this.fee = f; }\n    @Override\n    public double getFee() { return fee; }\n}\n\nclass PatientBilling {\n    private List<IMedicalProcedure> procs = new ArrayList<>();\n    public void addProcedure(IMedicalProcedure p) { procs.add(p); }\n    public double calculateTotalBill() {\n        double sum = 0;\n        for (IMedicalProcedure p : procs) sum += p.getFee();\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PatientBilling bill = new PatientBilling();\n        bill.addProcedure(new ClinicalTest(50000.0));\n        bill.addProcedure(new ClinicalTest(150000.0));\n        System.out.println(\"Muolajalar summasi: \" + bill.calculateTotalBill() + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfik to'plamlar (masalan, List<Payable>) turli xil sinflarning ob'yektlarini yagona umumiy interfeys orqali boshqarish imkonini beradi. Kod har bir ob'yektning aniq qaysi sinfga mansubligini bilishi shart emas, umumiy interfeys metodini chaqirishning o'zi kifoya.",
      "cleanCode": "class PatientBilling {\n    private List<Payable> list = new ArrayList<>();\n}",
      "breakdown": [
        "<code>PatientBilling</code>: polimorfik interfeys to'plamiga ega sinf.",
        "<code>calculateTotalBill</code>: umumiy interfeys orqali iteratsiya."
      ]
    }
  },
  {
    "id": 100,
    "tier": 7,
    "tierName": "7-Bosqich: Abstrakt Sinf vs Interfeys Tanlovi va Polimorfik Qayta Ishlash",
    "sector": "91-105: Design Choices & Polymorphic Collections",
    "title": {
      "uz": "100. Express24 — Buyurtmalarni Kuzatish Servisi (List<ITrackable>)",
      "en": "100. Express24 — Live Order Tracking via ITrackable Interface"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nExpress24 kuryerlari va posilkalari 'ITrackable' interfeysiga ega. 'TrackingHub' klassida barcha faol yetkazishlarni matnli hisobotga aylantiring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Polimorfik interfeys shartnomasini va uni amalga oshiruvchi sinflarni e'lon qiling.\n2. 'TrackingHub' agregator sinfini tuzing.\n3. Interfeys havolalarini 'List<Interface>' to'plamida saqlang.\n4. 'getDispatchCount(...)' metodi orqali barcha elementlar bo'ylab iteratsiya qiling.\n5. 'Main' da tekshirib natijani chop eting: 'TrackingHub hub = new TrackingHub();         hub.track(new TrackableParcel(\"EXP-1\"));         hub.track(new TrackableParcel(\"EXP-2\"));         System.out.println(\"Kuzatilayotgan buyurtmalar: \" + hub.getDispatchCount() + \" ta\");'",
      "en": "📖 Real-World Scenario & Context\nAggregate tracking status across parcels and couriers implementing ITrackable.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare polymorphic interface and concrete implementing classes.\n2. Build management class 'TrackingHub'.\n3. Store interface instances inside a List collection.\n4. Iterate through list polymorphically in 'getDispatchCount(...)'.\n5. Verify result in 'main': 'TrackingHub hub = new TrackingHub();         hub.track(new TrackableParcel(\"EXP-1\"));         hub.track(new TrackableParcel(\"EXP-2\"));         System.out.println(\"Kuzatilayotgan buyurtmalar: \" + hub.getDispatchCount() + \" ta\");'"
    },
    "requirements": {
      "classes": [
        "TrackingHub",
        "Main"
      ],
      "methods": [
        "getDispatchCount"
      ]
    },
    "starterCode": "// Polimorfik to'plam bilan ishlovchi klassni yozing\nclass TrackingHub {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TrackingHub hub = new TrackingHub();\n        hub.track(new TrackableParcel(\"EXP-1\"));\n        hub.track(new TrackableParcel(\"EXP-2\"));\n        System.out.println(\"Kuzatilayotgan buyurtmalar: \" + hub.getDispatchCount() + \" ta\");\n    }\n}",
    "solution": "import java.util.List;\nimport java.util.ArrayList;\n\ninterface ITrackable {\n    String getId();\n}\n\nclass TrackableParcel implements ITrackable {\n    private String id;\n    public TrackableParcel(String id) { this.id = id; }\n    @Override\n    public String getId() { return id; }\n}\n\nclass TrackingHub {\n    private List<ITrackable> tracks = new ArrayList<>();\n    public void track(ITrackable t) { tracks.add(t); }\n    public int getDispatchCount() { return tracks.size(); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TrackingHub hub = new TrackingHub();\n        hub.track(new TrackableParcel(\"EXP-1\"));\n        hub.track(new TrackableParcel(\"EXP-2\"));\n        System.out.println(\"Kuzatilayotgan buyurtmalar: \" + hub.getDispatchCount() + \" ta\");\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfik to'plamlar (masalan, List<Payable>) turli xil sinflarning ob'yektlarini yagona umumiy interfeys orqali boshqarish imkonini beradi. Kod har bir ob'yektning aniq qaysi sinfga mansubligini bilishi shart emas, umumiy interfeys metodini chaqirishning o'zi kifoya.",
      "cleanCode": "class TrackingHub {\n    private List<Payable> list = new ArrayList<>();\n}",
      "breakdown": [
        "<code>TrackingHub</code>: polimorfik interfeys to'plamiga ega sinf.",
        "<code>getDispatchCount</code>: umumiy interfeys orqali iteratsiya."
      ]
    }
  },
  {
    "id": 101,
    "tier": 7,
    "tierName": "7-Bosqich: Abstrakt Sinf vs Interfeys Tanlovi va Polimorfik Qayta Ishlash",
    "sector": "91-105: Design Choices & Polymorphic Collections",
    "title": {
      "uz": "101. Asaxiy — Polimorfik Resurslar Hajmi (List<IDownloadableItem>)",
      "en": "101. Asaxiy — Aggregated Digital Download Size via Interface"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nAsaxiy kutubxonasida audio kitoblar va PDF qo'llanmalar 'IDownloadableItem' interfeysiga ega. Xarid savatidagi barcha raqamli fayllar umumiy hajmini (MB) hisoblang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Polimorfik interfeys shartnomasini va uni amalga oshiruvchi sinflarni e'lon qiling.\n2. 'DownloadCart' agregator sinfini tuzing.\n3. Interfeys havolalarini 'List<Interface>' to'plamida saqlang.\n4. 'getTotalDownloadSizeMb(...)' metodi orqali barcha elementlar bo'ylab iteratsiya qiling.\n5. 'Main' da tekshirib natijani chop eting: 'DownloadCart cart = new DownloadCart();         cart.addItem(new DigitalMediaItem(15.5));         cart.addItem(new DigitalMediaItem(45.0));         System.out.println(\"Jami yuklash hajmi: \" + cart.getTotalDownloadSizeMb() + \" MB\");'",
      "en": "📖 Real-World Scenario & Context\nCalculate total digital download footprint across polymorphic items in Asaxiy cart.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare polymorphic interface and concrete implementing classes.\n2. Build management class 'DownloadCart'.\n3. Store interface instances inside a List collection.\n4. Iterate through list polymorphically in 'getTotalDownloadSizeMb(...)'.\n5. Verify result in 'main': 'DownloadCart cart = new DownloadCart();         cart.addItem(new DigitalMediaItem(15.5));         cart.addItem(new DigitalMediaItem(45.0));         System.out.println(\"Jami yuklash hajmi: \" + cart.getTotalDownloadSizeMb() + \" MB\");'"
    },
    "requirements": {
      "classes": [
        "DownloadCart",
        "Main"
      ],
      "methods": [
        "getTotalDownloadSizeMb"
      ]
    },
    "starterCode": "// Polimorfik to'plam bilan ishlovchi klassni yozing\nclass DownloadCart {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DownloadCart cart = new DownloadCart();\n        cart.addItem(new DigitalMediaItem(15.5));\n        cart.addItem(new DigitalMediaItem(45.0));\n        System.out.println(\"Jami yuklash hajmi: \" + cart.getTotalDownloadSizeMb() + \" MB\");\n    }\n}",
    "solution": "import java.util.List;\nimport java.util.ArrayList;\n\ninterface IDownloadableItem {\n    double getSizeMb();\n}\n\nclass DigitalMediaItem implements IDownloadableItem {\n    private double mb;\n    public DigitalMediaItem(double mb) { this.mb = mb; }\n    @Override\n    public double getSizeMb() { return mb; }\n}\n\nclass DownloadCart {\n    private List<IDownloadableItem> items = new ArrayList<>();\n    public void addItem(IDownloadableItem it) { items.add(it); }\n    public double getTotalDownloadSizeMb() {\n        double s = 0;\n        for (IDownloadableItem it : items) s += it.getSizeMb();\n        return s;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DownloadCart cart = new DownloadCart();\n        cart.addItem(new DigitalMediaItem(15.5));\n        cart.addItem(new DigitalMediaItem(45.0));\n        System.out.println(\"Jami yuklash hajmi: \" + cart.getTotalDownloadSizeMb() + \" MB\");\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfik to'plamlar (masalan, List<Payable>) turli xil sinflarning ob'yektlarini yagona umumiy interfeys orqali boshqarish imkonini beradi. Kod har bir ob'yektning aniq qaysi sinfga mansubligini bilishi shart emas, umumiy interfeys metodini chaqirishning o'zi kifoya.",
      "cleanCode": "class DownloadCart {\n    private List<Payable> list = new ArrayList<>();\n}",
      "breakdown": [
        "<code>DownloadCart</code>: polimorfik interfeys to'plamiga ega sinf.",
        "<code>getTotalDownloadSizeMb</code>: umumiy interfeys orqali iteratsiya."
      ]
    }
  },
  {
    "id": 102,
    "tier": 7,
    "tierName": "7-Bosqich: Abstrakt Sinf vs Interfeys Tanlovi va Polimorfik Qayta Ishlash",
    "sector": "91-105: Design Choices & Polymorphic Collections",
    "title": {
      "uz": "102. Kapitalbank — Polimorfik Jamg'armalar Foizi (List<IInterestAccount>)",
      "en": "102. Kapitalbank — Interest Payment Batch Processing via Interface"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nKapitalbank oylik foizlarni to'lashda barcha depozit turlarini 'IInterestAccount' interfeysi orqali birdek chaqiradi. Jami to'lanadigan oylik foiz summasini chiqaring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Polimorfik interfeys shartnomasini va uni amalga oshiruvchi sinflarni e'lon qiling.\n2. 'InterestBatchService' agregator sinfini tuzing.\n3. Interfeys havolalarini 'List<Interface>' to'plamida saqlang.\n4. 'calculateTotalMonthlyInterest(...)' metodi orqali barcha elementlar bo'ylab iteratsiya qiling.\n5. 'Main' da tekshirib natijani chop eting: 'InterestBatchService svc = new InterestBatchService();         svc.addAccount(new DepositProduct(10000000.0, 0.20));         svc.addAccount(new DepositProduct(5000000.0, 0.18));         System.out.println(\"Jami to'lanadigan foiz: \" + svc.calculateTotalMonthlyInterest() + \" UZS\");'",
      "en": "📖 Real-World Scenario & Context\nSum monthly interest payouts across disparate deposit account models.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare polymorphic interface and concrete implementing classes.\n2. Build management class 'InterestBatchService'.\n3. Store interface instances inside a List collection.\n4. Iterate through list polymorphically in 'calculateTotalMonthlyInterest(...)'.\n5. Verify result in 'main': 'InterestBatchService svc = new InterestBatchService();         svc.addAccount(new DepositProduct(10000000.0, 0.20));         svc.addAccount(new DepositProduct(5000000.0, 0.18));         System.out.println(\"Jami to'lanadigan foiz: \" + svc.calculateTotalMonthlyInterest() + \" UZS\");'"
    },
    "requirements": {
      "classes": [
        "InterestBatchService",
        "Main"
      ],
      "methods": [
        "calculateTotalMonthlyInterest"
      ]
    },
    "starterCode": "// Polimorfik to'plam bilan ishlovchi klassni yozing\nclass InterestBatchService {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        InterestBatchService svc = new InterestBatchService();\n        svc.addAccount(new DepositProduct(10000000.0, 0.20));\n        svc.addAccount(new DepositProduct(5000000.0, 0.18));\n        System.out.println(\"Jami to'lanadigan foiz: \" + svc.calculateTotalMonthlyInterest() + \" UZS\");\n    }\n}",
    "solution": "import java.util.List;\nimport java.util.ArrayList;\n\ninterface IInterestAccount {\n    double getMonthlyInterest();\n}\n\nclass DepositProduct implements IInterestAccount {\n    private double principal;\n    private double rate;\n    public DepositProduct(double p, double r) { this.principal = p; this.rate = r; }\n    @Override\n    public double getMonthlyInterest() { return (principal * rate) / 12.0; }\n}\n\nclass InterestBatchService {\n    private List<IInterestAccount> accounts = new ArrayList<>();\n    public void addAccount(IInterestAccount a) { accounts.add(a); }\n    public double calculateTotalMonthlyInterest() {\n        double s = 0;\n        for (IInterestAccount a : accounts) s += a.getMonthlyInterest();\n        return Math.round(s * 100.0) / 100.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        InterestBatchService svc = new InterestBatchService();\n        svc.addAccount(new DepositProduct(10000000.0, 0.20));\n        svc.addAccount(new DepositProduct(5000000.0, 0.18));\n        System.out.println(\"Jami to'lanadigan foiz: \" + svc.calculateTotalMonthlyInterest() + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfik to'plamlar (masalan, List<Payable>) turli xil sinflarning ob'yektlarini yagona umumiy interfeys orqali boshqarish imkonini beradi. Kod har bir ob'yektning aniq qaysi sinfga mansubligini bilishi shart emas, umumiy interfeys metodini chaqirishning o'zi kifoya.",
      "cleanCode": "class InterestBatchService {\n    private List<Payable> list = new ArrayList<>();\n}",
      "breakdown": [
        "<code>InterestBatchService</code>: polimorfik interfeys to'plamiga ega sinf.",
        "<code>calculateTotalMonthlyInterest</code>: umumiy interfeys orqali iteratsiya."
      ]
    }
  },
  {
    "id": 103,
    "tier": 7,
    "tierName": "7-Bosqich: Abstrakt Sinf vs Interfeys Tanlovi va Polimorfik Qayta Ishlash",
    "sector": "91-105: Design Choices & Polymorphic Collections",
    "title": {
      "uz": "103. Beeline — Faol Xizmatlar Oylik Summasi (List<IBillableService>)",
      "en": "103. Beeline — Subscriber Monthly Billing over Diverse Services"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nBeeline abonentining internet to'plami, qo'shimcha daqiqalari va Beepul obunasi 'IBillableService' interfeysiga asoslangan. Oylik jami xarajatni hisoblang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Polimorfik interfeys shartnomasini va uni amalga oshiruvchi sinflarni e'lon qiling.\n2. 'SubscriberAccount' agregator sinfini tuzing.\n3. Interfeys havolalarini 'List<Interface>' to'plamida saqlang.\n4. 'getMonthlyTotal(...)' metodi orqali barcha elementlar bo'ylab iteratsiya qiling.\n5. 'Main' da tekshirib natijani chop eting: 'SubscriberAccount sub = new SubscriberAccount();         sub.addService(new MobilePlanItem(45000.0));         sub.addService(new MobilePlanItem(15000.0));         System.out.println(\"Oylik abonent to'lovi: \" + sub.getMonthlyTotal() + \" UZS\");'",
      "en": "📖 Real-World Scenario & Context\nCompute cumulative subscriber monthly bill over polymorphic telecom services.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare polymorphic interface and concrete implementing classes.\n2. Build management class 'SubscriberAccount'.\n3. Store interface instances inside a List collection.\n4. Iterate through list polymorphically in 'getMonthlyTotal(...)'.\n5. Verify result in 'main': 'SubscriberAccount sub = new SubscriberAccount();         sub.addService(new MobilePlanItem(45000.0));         sub.addService(new MobilePlanItem(15000.0));         System.out.println(\"Oylik abonent to'lovi: \" + sub.getMonthlyTotal() + \" UZS\");'"
    },
    "requirements": {
      "classes": [
        "SubscriberAccount",
        "Main"
      ],
      "methods": [
        "getMonthlyTotal"
      ]
    },
    "starterCode": "// Polimorfik to'plam bilan ishlovchi klassni yozing\nclass SubscriberAccount {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SubscriberAccount sub = new SubscriberAccount();\n        sub.addService(new MobilePlanItem(45000.0));\n        sub.addService(new MobilePlanItem(15000.0));\n        System.out.println(\"Oylik abonent to'lovi: \" + sub.getMonthlyTotal() + \" UZS\");\n    }\n}",
    "solution": "import java.util.List;\nimport java.util.ArrayList;\n\ninterface IBillableService {\n    double getMonthlyFee();\n}\n\nclass MobilePlanItem implements IBillableService {\n    private double fee;\n    public MobilePlanItem(double fee) { this.fee = fee; }\n    @Override\n    public double getMonthlyFee() { return fee; }\n}\n\nclass SubscriberAccount {\n    private List<IBillableService> services = new ArrayList<>();\n    public void addService(IBillableService s) { services.add(s); }\n    public double getMonthlyTotal() {\n        double sum = 0;\n        for (IBillableService s : services) sum += s.getMonthlyFee();\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SubscriberAccount sub = new SubscriberAccount();\n        sub.addService(new MobilePlanItem(45000.0));\n        sub.addService(new MobilePlanItem(15000.0));\n        System.out.println(\"Oylik abonent to'lovi: \" + sub.getMonthlyTotal() + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfik to'plamlar (masalan, List<Payable>) turli xil sinflarning ob'yektlarini yagona umumiy interfeys orqali boshqarish imkonini beradi. Kod har bir ob'yektning aniq qaysi sinfga mansubligini bilishi shart emas, umumiy interfeys metodini chaqirishning o'zi kifoya.",
      "cleanCode": "class SubscriberAccount {\n    private List<Payable> list = new ArrayList<>();\n}",
      "breakdown": [
        "<code>SubscriberAccount</code>: polimorfik interfeys to'plamiga ega sinf.",
        "<code>getMonthlyTotal</code>: umumiy interfeys orqali iteratsiya."
      ]
    }
  },
  {
    "id": 104,
    "tier": 7,
    "tierName": "7-Bosqich: Abstrakt Sinf vs Interfeys Tanlovi va Polimorfik Qayta Ishlash",
    "sector": "91-105: Design Choices & Polymorphic Collections",
    "title": {
      "uz": "104. UzAirways — Reysdagi Barcha Yuklar Og'irligi (List<IWeighedCargo>)",
      "en": "104. UzAirways — Cargo Manifest Weight Totaling via Interface"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nUzAirways samolyoti yuk xonasi 'IWeighedCargo' interfeysiga ega yo'lovchi chamadonlari va tijorat qutilari bilan to'ldiriladi. Jami og'irlikni (kg) hisoblang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Polimorfik interfeys shartnomasini va uni amalga oshiruvchi sinflarni e'lon qiling.\n2. 'FlightManifest' agregator sinfini tuzing.\n3. Interfeys havolalarini 'List<Interface>' to'plamida saqlang.\n4. 'getTotalCargoWeight(...)' metodi orqali barcha elementlar bo'ylab iteratsiya qiling.\n5. 'Main' da tekshirib natijani chop eting: 'FlightManifest mf = new FlightManifest();         mf.addCargo(new PassengerBaggage(23.5));         mf.addCargo(new CommercialBox(100.0));         System.out.println(\"Jami samolyot yuki: \" + mf.getTotalCargoWeight() + \" kg\");'",
      "en": "📖 Real-World Scenario & Context\nTotal manifest baggage weight polymorphically over different cargo items.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare polymorphic interface and concrete implementing classes.\n2. Build management class 'FlightManifest'.\n3. Store interface instances inside a List collection.\n4. Iterate through list polymorphically in 'getTotalCargoWeight(...)'.\n5. Verify result in 'main': 'FlightManifest mf = new FlightManifest();         mf.addCargo(new PassengerBaggage(23.5));         mf.addCargo(new CommercialBox(100.0));         System.out.println(\"Jami samolyot yuki: \" + mf.getTotalCargoWeight() + \" kg\");'"
    },
    "requirements": {
      "classes": [
        "FlightManifest",
        "Main"
      ],
      "methods": [
        "getTotalCargoWeight"
      ]
    },
    "starterCode": "// Polimorfik to'plam bilan ishlovchi klassni yozing\nclass FlightManifest {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FlightManifest mf = new FlightManifest();\n        mf.addCargo(new PassengerBaggage(23.5));\n        mf.addCargo(new CommercialBox(100.0));\n        System.out.println(\"Jami samolyot yuki: \" + mf.getTotalCargoWeight() + \" kg\");\n    }\n}",
    "solution": "import java.util.List;\nimport java.util.ArrayList;\n\ninterface IWeighedCargo {\n    double getWeight();\n}\n\nclass PassengerBaggage implements IWeighedCargo {\n    private double w;\n    public PassengerBaggage(double w) { this.w = w; }\n    @Override\n    public double getWeight() { return w; }\n}\n\nclass CommercialBox implements IWeighedCargo {\n    private double w;\n    public CommercialBox(double w) { this.w = w; }\n    @Override\n    public double getWeight() { return w; }\n}\n\nclass FlightManifest {\n    private List<IWeighedCargo> cargoList = new ArrayList<>();\n    public void addCargo(IWeighedCargo c) { cargoList.add(c); }\n    public double getTotalCargoWeight() {\n        double sum = 0;\n        for (IWeighedCargo c : cargoList) sum += c.getWeight();\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FlightManifest mf = new FlightManifest();\n        mf.addCargo(new PassengerBaggage(23.5));\n        mf.addCargo(new CommercialBox(100.0));\n        System.out.println(\"Jami samolyot yuki: \" + mf.getTotalCargoWeight() + \" kg\");\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfik to'plamlar (masalan, List<Payable>) turli xil sinflarning ob'yektlarini yagona umumiy interfeys orqali boshqarish imkonini beradi. Kod har bir ob'yektning aniq qaysi sinfga mansubligini bilishi shart emas, umumiy interfeys metodini chaqirishning o'zi kifoya.",
      "cleanCode": "class FlightManifest {\n    private List<Payable> list = new ArrayList<>();\n}",
      "breakdown": [
        "<code>FlightManifest</code>: polimorfik interfeys to'plamiga ega sinf.",
        "<code>getTotalCargoWeight</code>: umumiy interfeys orqali iteratsiya."
      ]
    }
  },
  {
    "id": 105,
    "tier": 7,
    "tierName": "7-Bosqich: Abstrakt Sinf vs Interfeys Tanlovi va Polimorfik Qayta Ishlash",
    "sector": "91-105: Design Choices & Polymorphic Collections",
    "title": {
      "uz": "105. WIUT SRS — Modul Komponentlari Yakuniy Balli (List<IAssessmentMark>)",
      "en": "105. WIUT SRS — Final Grade Calculation over Polymorphic CW Components"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT modulida CW1 (40%) va CW2 (60%) 'IAssessmentMark' interfeysiga ega bo'lib, har biri o'zining hissali ballini qaytaradi. Modul yakuniy ballini aniqlang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Polimorfik interfeys shartnomasini va uni amalga oshiruvchi sinflarni e'lon qiling.\n2. 'ModuleGradeSheet' agregator sinfini tuzing.\n3. Interfeys havolalarini 'List<Interface>' to'plamida saqlang.\n4. 'getFinalGrade(...)' metodi orqali barcha elementlar bo'ylab iteratsiya qiling.\n5. 'Main' da tekshirib natijani chop eting: 'ModuleGradeSheet sheet = new ModuleGradeSheet();         sheet.addComponent(new AssessmentComponent(70, 0.4));         sheet.addComponent(new AssessmentComponent(80, 0.6));         System.out.println(\"Modul yakuniy balli: \" + sheet.getFinalGrade());'",
      "en": "📖 Real-World Scenario & Context\nCalculate overall module grade across weighted assessment components.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare polymorphic interface and concrete implementing classes.\n2. Build management class 'ModuleGradeSheet'.\n3. Store interface instances inside a List collection.\n4. Iterate through list polymorphically in 'getFinalGrade(...)'.\n5. Verify result in 'main': 'ModuleGradeSheet sheet = new ModuleGradeSheet();         sheet.addComponent(new AssessmentComponent(70, 0.4));         sheet.addComponent(new AssessmentComponent(80, 0.6));         System.out.println(\"Modul yakuniy balli: \" + sheet.getFinalGrade());'"
    },
    "requirements": {
      "classes": [
        "ModuleGradeSheet",
        "Main"
      ],
      "methods": [
        "getFinalGrade"
      ]
    },
    "starterCode": "// Polimorfik to'plam bilan ishlovchi klassni yozing\nclass ModuleGradeSheet {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ModuleGradeSheet sheet = new ModuleGradeSheet();\n        sheet.addComponent(new AssessmentComponent(70, 0.4));\n        sheet.addComponent(new AssessmentComponent(80, 0.6));\n        System.out.println(\"Modul yakuniy balli: \" + sheet.getFinalGrade());\n    }\n}",
    "solution": "import java.util.List;\nimport java.util.ArrayList;\n\ninterface IAssessmentMark {\n    double getWeightedMark();\n}\n\nclass AssessmentComponent implements IAssessmentMark {\n    private int score;\n    private double weight;\n    public AssessmentComponent(int s, double w) { this.score = s; this.weight = w; }\n    @Override\n    public double getWeightedMark() { return score * weight; }\n}\n\nclass ModuleGradeSheet {\n    private List<IAssessmentMark> comps = new ArrayList<>();\n    public void addComponent(IAssessmentMark a) { comps.add(a); }\n    public double getFinalGrade() {\n        double sum = 0;\n        for (IAssessmentMark a : comps) sum += a.getWeightedMark();\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ModuleGradeSheet sheet = new ModuleGradeSheet();\n        sheet.addComponent(new AssessmentComponent(70, 0.4));\n        sheet.addComponent(new AssessmentComponent(80, 0.6));\n        System.out.println(\"Modul yakuniy balli: \" + sheet.getFinalGrade());\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfik to'plamlar (masalan, List<Payable>) turli xil sinflarning ob'yektlarini yagona umumiy interfeys orqali boshqarish imkonini beradi. Kod har bir ob'yektning aniq qaysi sinfga mansubligini bilishi shart emas, umumiy interfeys metodini chaqirishning o'zi kifoya.",
      "cleanCode": "class ModuleGradeSheet {\n    private List<Payable> list = new ArrayList<>();\n}",
      "breakdown": [
        "<code>ModuleGradeSheet</code>: polimorfik interfeys to'plamiga ega sinf.",
        "<code>getFinalGrade</code>: umumiy interfeys orqali iteratsiya."
      ]
    }
  },
  {
    "id": 106,
    "tier": 8,
    "tierName": "8-Bosqich: Java Collections Ierarxiyasi va Interfeysga Qarab Dasturlash",
    "sector": "106-120: Collections Framework & Program to Interface",
    "title": {
      "uz": "106. Uzum Market — 'Program to Interface': List<String> va ArrayList",
      "en": "106. Uzum Market — Program to Interface with List<E> and ArrayList"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT 6-leksiyasida (Slide 34): 'Program to an interface, not an implementation: List<E> list = new ArrayList<>()'. Uzum Market xarid ro'yxatini interfeys turi orqali e'lon qiluvchi 'ShoppingListManager' klassini tuzing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Kolleksiyalardan foydalanuvchi 'ShoppingListManager' sinfini e'lon qiling.\n2. 'Program to an interface' qoidasiga binoan maydonni 'List', 'Set', 'Queue' yoki 'Map' interfeysi sifatida e'lon qiling.\n3. Konstruktor yoki metodda tegishli aniq realizatsiyani ('ArrayList', 'HashSet', 'LinkedHashMap' va b.) biriktiring.\n4. 'getFormattedList(...)' metodi orqali ma'lumotlarni saqlang yoki qidiring.\n5. 'Main' metodida tekshiring: 'ShoppingListManager mgr = new ShoppingListManager();         mgr.addItem(\"Choynak\");         mgr.addItem(\"Dazmol\");         System.out.println(\"Savatdagi tovarlar soni: \" + mgr.getItemCount());'",
      "en": "📖 Real-World Scenario & Context\nDeclare collection fields as interface types (List) rather than concrete implementations.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare class 'ShoppingListManager' using Java Collections Framework.\n2. Declare collection field using interface type (List, Set, Queue, Map).\n3. Instantiate concrete collection (ArrayList, HashSet, LinkedHashMap, etc.).\n4. Implement 'getFormattedList(...)' manipulating collection entries.\n5. Verify in 'main': 'ShoppingListManager mgr = new ShoppingListManager();         mgr.addItem(\"Choynak\");         mgr.addItem(\"Dazmol\");         System.out.println(\"Savatdagi tovarlar soni: \" + mgr.getItemCount());'"
    },
    "requirements": {
      "classes": [
        "ShoppingListManager",
        "Main"
      ],
      "methods": [
        "getFormattedList"
      ]
    },
    "starterCode": "// 'Program to an interface' tamoyili bo'yicha to'plam bilan ishlang\nclass ShoppingListManager {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ShoppingListManager mgr = new ShoppingListManager();\n        mgr.addItem(\"Choynak\");\n        mgr.addItem(\"Dazmol\");\n        System.out.println(\"Savatdagi tovarlar soni: \" + mgr.getItemCount());\n    }\n}",
    "solution": "import java.util.List;\nimport java.util.ArrayList;\n\nclass ShoppingListManager {\n    private List<String> items = new ArrayList<>();\n    public void addItem(String it) { items.add(it); }\n    public int getItemCount() { return items.size(); }\n    public String getFormattedList() { return items.toString(); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ShoppingListManager mgr = new ShoppingListManager();\n        mgr.addItem(\"Choynak\");\n        mgr.addItem(\"Dazmol\");\n        System.out.println(\"Savatdagi tovarlar soni: \" + mgr.getItemCount());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 6-leksiyasida (Slide 34) 'Program to an interface, not an implementation' qoidasi o'rgatiladi: 'List<String> list = new ArrayList<>();'. Bu orqali kelajakda kodni buzmasdan ArrayList ni LinkedList ga yoki HashMap ni LinkedHashMap ga almashtirish mumkin bo'ladi.",
      "cleanCode": "private Map<String, String> addresses = new LinkedHashMap<>();",
      "breakdown": [
        "<code>ShoppingListManager</code>: interfeys to'plamiga ega sinf.",
        "<code>getFormattedList</code>: to'plam operatsiyasi."
      ]
    }
  },
  {
    "id": 107,
    "tier": 8,
    "tierName": "8-Bosqich: Java Collections Ierarxiyasi va Interfeysga Qarab Dasturlash",
    "sector": "106-120: Collections Framework & Program to Interface",
    "title": {
      "uz": "107. Payme — Tranzaksiya Tarixi: List<Double> va Summani Hisoblash",
      "en": "107. Payme — Transaction History Collection and Summation"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nPayme kartasidagi barcha tranzaksiyalar 'List<Double>' to'plamida saqlanadi. 'TransactionLedger' sinfida jami sarflangan mablag'ni hisoblang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Kolleksiyalardan foydalanuvchi 'TransactionLedger' sinfini e'lon qiling.\n2. 'Program to an interface' qoidasiga binoan maydonni 'List', 'Set', 'Queue' yoki 'Map' interfeysi sifatida e'lon qiling.\n3. Konstruktor yoki metodda tegishli aniq realizatsiyani ('ArrayList', 'HashSet', 'LinkedHashMap' va b.) biriktiring.\n4. 'getTotalSpent(...)' metodi orqali ma'lumotlarni saqlang yoki qidiring.\n5. 'Main' metodida tekshiring: 'TransactionLedger ledger = new TransactionLedger();         ledger.recordTx(45000.0);         ledger.recordTx(120000.0);         System.out.println(\"Jami xarajat: \" + ledger.getTotalSpent() + \" UZS\");'",
      "en": "📖 Real-World Scenario & Context\nManage payment transactions in List<Double> computing aggregate spending.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare class 'TransactionLedger' using Java Collections Framework.\n2. Declare collection field using interface type (List, Set, Queue, Map).\n3. Instantiate concrete collection (ArrayList, HashSet, LinkedHashMap, etc.).\n4. Implement 'getTotalSpent(...)' manipulating collection entries.\n5. Verify in 'main': 'TransactionLedger ledger = new TransactionLedger();         ledger.recordTx(45000.0);         ledger.recordTx(120000.0);         System.out.println(\"Jami xarajat: \" + ledger.getTotalSpent() + \" UZS\");'"
    },
    "requirements": {
      "classes": [
        "TransactionLedger",
        "Main"
      ],
      "methods": [
        "getTotalSpent"
      ]
    },
    "starterCode": "// 'Program to an interface' tamoyili bo'yicha to'plam bilan ishlang\nclass TransactionLedger {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TransactionLedger ledger = new TransactionLedger();\n        ledger.recordTx(45000.0);\n        ledger.recordTx(120000.0);\n        System.out.println(\"Jami xarajat: \" + ledger.getTotalSpent() + \" UZS\");\n    }\n}",
    "solution": "import java.util.List;\nimport java.util.ArrayList;\n\nclass TransactionLedger {\n    private List<Double> txs = new ArrayList<>();\n    public void recordTx(double amt) { txs.add(amt); }\n    public double getTotalSpent() {\n        double sum = 0;\n        for (double t : txs) sum += t;\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TransactionLedger ledger = new TransactionLedger();\n        ledger.recordTx(45000.0);\n        ledger.recordTx(120000.0);\n        System.out.println(\"Jami xarajat: \" + ledger.getTotalSpent() + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 6-leksiyasida (Slide 34) 'Program to an interface, not an implementation' qoidasi o'rgatiladi: 'List<String> list = new ArrayList<>();'. Bu orqali kelajakda kodni buzmasdan ArrayList ni LinkedList ga yoki HashMap ni LinkedHashMap ga almashtirish mumkin bo'ladi.",
      "cleanCode": "private Map<String, String> addresses = new LinkedHashMap<>();",
      "breakdown": [
        "<code>TransactionLedger</code>: interfeys to'plamiga ega sinf.",
        "<code>getTotalSpent</code>: to'plam operatsiyasi."
      ]
    }
  },
  {
    "id": 108,
    "tier": 8,
    "tierName": "8-Bosqich: Java Collections Ierarxiyasi va Interfeysga Qarab Dasturlash",
    "sector": "106-120: Collections Framework & Program to Interface",
    "title": {
      "uz": "108. Korzinka — Noyob Mijoz Telefonlari: Set<String> va HashSet",
      "en": "108. Korzinka — Unique Customer Phone Numbers via Set and HashSet"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nLeksiyada: 'Set<E> contains no duplicate elements'. Korzinka SMS yuborish bazasida takroriy telefon raqamlarini chetlab o'tuvchi 'UniqueCustomerSet' tuzing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Kolleksiyalardan foydalanuvchi 'UniqueCustomerSet' sinfini e'lon qiling.\n2. 'Program to an interface' qoidasiga binoan maydonni 'List', 'Set', 'Queue' yoki 'Map' interfeysi sifatida e'lon qiling.\n3. Konstruktor yoki metodda tegishli aniq realizatsiyani ('ArrayList', 'HashSet', 'LinkedHashMap' va b.) biriktiring.\n4. 'getUniqueCount(...)' metodi orqali ma'lumotlarni saqlang yoki qidiring.\n5. 'Main' metodida tekshiring: 'UniqueCustomerSet set = new UniqueCustomerSet();         set.addPhone(\"+998901112233\");         set.addPhone(\"+998901112233\");         set.addPhone(\"+998909998877\");         System.out.println(\"Noyob mijozlar soni: \" + set.getUniqueCount());'",
      "en": "📖 Real-World Scenario & Context\nPrevent duplicate customer entries using Set<String> backed by HashSet.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare class 'UniqueCustomerSet' using Java Collections Framework.\n2. Declare collection field using interface type (List, Set, Queue, Map).\n3. Instantiate concrete collection (ArrayList, HashSet, LinkedHashMap, etc.).\n4. Implement 'getUniqueCount(...)' manipulating collection entries.\n5. Verify in 'main': 'UniqueCustomerSet set = new UniqueCustomerSet();         set.addPhone(\"+998901112233\");         set.addPhone(\"+998901112233\");         set.addPhone(\"+998909998877\");         System.out.println(\"Noyob mijozlar soni: \" + set.getUniqueCount());'"
    },
    "requirements": {
      "classes": [
        "UniqueCustomerSet",
        "Main"
      ],
      "methods": [
        "getUniqueCount"
      ]
    },
    "starterCode": "// 'Program to an interface' tamoyili bo'yicha to'plam bilan ishlang\nclass UniqueCustomerSet {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        UniqueCustomerSet set = new UniqueCustomerSet();\n        set.addPhone(\"+998901112233\");\n        set.addPhone(\"+998901112233\");\n        set.addPhone(\"+998909998877\");\n        System.out.println(\"Noyob mijozlar soni: \" + set.getUniqueCount());\n    }\n}",
    "solution": "import java.util.Set;\nimport java.util.HashSet;\n\nclass UniqueCustomerSet {\n    private Set<String> phones = new HashSet<>();\n    public void addPhone(String p) { phones.add(p); }\n    public int getUniqueCount() { return phones.size(); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        UniqueCustomerSet set = new UniqueCustomerSet();\n        set.addPhone(\"+998901112233\");\n        set.addPhone(\"+998901112233\");\n        set.addPhone(\"+998909998877\");\n        System.out.println(\"Noyob mijozlar soni: \" + set.getUniqueCount());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 6-leksiyasida (Slide 34) 'Program to an interface, not an implementation' qoidasi o'rgatiladi: 'List<String> list = new ArrayList<>();'. Bu orqali kelajakda kodni buzmasdan ArrayList ni LinkedList ga yoki HashMap ni LinkedHashMap ga almashtirish mumkin bo'ladi.",
      "cleanCode": "private Map<String, String> addresses = new LinkedHashMap<>();",
      "breakdown": [
        "<code>UniqueCustomerSet</code>: interfeys to'plamiga ega sinf.",
        "<code>getUniqueCount</code>: to'plam operatsiyasi."
      ]
    }
  },
  {
    "id": 109,
    "tier": 8,
    "tierName": "8-Bosqich: Java Collections Ierarxiyasi va Interfeysga Qarab Dasturlash",
    "sector": "106-120: Collections Framework & Program to Interface",
    "title": {
      "uz": "109. Yandex Go — Buyurtmalar Navbati: Queue<String> va ArrayDeque",
      "en": "109. Yandex Go — FIFO Dispatch Queue using Queue<E> and ArrayDeque"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nLeksiyada (Slide 34): 'Queue<E> interface implemented by ArrayDeque (FIFO)'. Yandex Go haydovchilar navbatini birinchi kelganga birinchi buyurtma berish (FIFO) tartibida boshqaring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Kolleksiyalardan foydalanuvchi 'RideDispatchQueue' sinfini e'lon qiling.\n2. 'Program to an interface' qoidasiga binoan maydonni 'List', 'Set', 'Queue' yoki 'Map' interfeysi sifatida e'lon qiling.\n3. Konstruktor yoki metodda tegishli aniq realizatsiyani ('ArrayList', 'HashSet', 'LinkedHashMap' va b.) biriktiring.\n4. 'processNextRide(...)' metodi orqali ma'lumotlarni saqlang yoki qidiring.\n5. 'Main' metodida tekshiring: 'RideDispatchQueue q = new RideDispatchQueue();         q.enqueueRide(\"RIDE-01\");         q.enqueueRide(\"RIDE-02\");         System.out.println(\"Navbatdagi safar: \" + q.processNextRide());'",
      "en": "📖 Real-World Scenario & Context\nImplement First-In-First-Out dispatcher queue using Queue<String> and ArrayDeque.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare class 'RideDispatchQueue' using Java Collections Framework.\n2. Declare collection field using interface type (List, Set, Queue, Map).\n3. Instantiate concrete collection (ArrayList, HashSet, LinkedHashMap, etc.).\n4. Implement 'processNextRide(...)' manipulating collection entries.\n5. Verify in 'main': 'RideDispatchQueue q = new RideDispatchQueue();         q.enqueueRide(\"RIDE-01\");         q.enqueueRide(\"RIDE-02\");         System.out.println(\"Navbatdagi safar: \" + q.processNextRide());'"
    },
    "requirements": {
      "classes": [
        "RideDispatchQueue",
        "Main"
      ],
      "methods": [
        "processNextRide"
      ]
    },
    "starterCode": "// 'Program to an interface' tamoyili bo'yicha to'plam bilan ishlang\nclass RideDispatchQueue {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        RideDispatchQueue q = new RideDispatchQueue();\n        q.enqueueRide(\"RIDE-01\");\n        q.enqueueRide(\"RIDE-02\");\n        System.out.println(\"Navbatdagi safar: \" + q.processNextRide());\n    }\n}",
    "solution": "import java.util.Queue;\nimport java.util.ArrayDeque;\n\nclass RideDispatchQueue {\n    private Queue<String> queue = new ArrayDeque<>();\n    public void enqueueRide(String r) { queue.offer(r); }\n    public String processNextRide() { return queue.poll(); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        RideDispatchQueue q = new RideDispatchQueue();\n        q.enqueueRide(\"RIDE-01\");\n        q.enqueueRide(\"RIDE-02\");\n        System.out.println(\"Navbatdagi safar: \" + q.processNextRide());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 6-leksiyasida (Slide 34) 'Program to an interface, not an implementation' qoidasi o'rgatiladi: 'List<String> list = new ArrayList<>();'. Bu orqali kelajakda kodni buzmasdan ArrayList ni LinkedList ga yoki HashMap ni LinkedHashMap ga almashtirish mumkin bo'ladi.",
      "cleanCode": "private Map<String, String> addresses = new LinkedHashMap<>();",
      "breakdown": [
        "<code>RideDispatchQueue</code>: interfeys to'plamiga ega sinf.",
        "<code>processNextRide</code>: to'plam operatsiyasi."
      ]
    }
  },
  {
    "id": 110,
    "tier": 8,
    "tierName": "8-Bosqich: Java Collections Ierarxiyasi va Interfeysga Qarab Dasturlash",
    "sector": "106-120: Collections Framework & Program to Interface",
    "title": {
      "uz": "110. Click — Valyuta Kurslari Xaritasi: Map<String, Double> va HashMap",
      "en": "110. Click — Currency Rate Lookup via Map<String, Double> and HashMap"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nLeksiyada: 'Map is not technically a Collection, but key-value storage'. Click 'FxRateRegistry' da har bir valyuta kodiga mos kursni saqlang va qidiring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Kolleksiyalardan foydalanuvchi 'FxRateRegistry' sinfini e'lon qiling.\n2. 'Program to an interface' qoidasiga binoan maydonni 'List', 'Set', 'Queue' yoki 'Map' interfeysi sifatida e'lon qiling.\n3. Konstruktor yoki metodda tegishli aniq realizatsiyani ('ArrayList', 'HashSet', 'LinkedHashMap' va b.) biriktiring.\n4. 'getRate(...)' metodi orqali ma'lumotlarni saqlang yoki qidiring.\n5. 'Main' metodida tekshiring: 'FxRateRegistry fx = new FxRateRegistry();         fx.setRate(\"USD\", 12600.0);         fx.setRate(\"EUR\", 13500.0);         System.out.println(\"USD kursi: \" + fx.getRate(\"USD\") + \" UZS\");'",
      "en": "📖 Real-World Scenario & Context\nStore and retrieve exchange rates using Map<String, Double> interface contract.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare class 'FxRateRegistry' using Java Collections Framework.\n2. Declare collection field using interface type (List, Set, Queue, Map).\n3. Instantiate concrete collection (ArrayList, HashSet, LinkedHashMap, etc.).\n4. Implement 'getRate(...)' manipulating collection entries.\n5. Verify in 'main': 'FxRateRegistry fx = new FxRateRegistry();         fx.setRate(\"USD\", 12600.0);         fx.setRate(\"EUR\", 13500.0);         System.out.println(\"USD kursi: \" + fx.getRate(\"USD\") + \" UZS\");'"
    },
    "requirements": {
      "classes": [
        "FxRateRegistry",
        "Main"
      ],
      "methods": [
        "getRate"
      ]
    },
    "starterCode": "// 'Program to an interface' tamoyili bo'yicha to'plam bilan ishlang\nclass FxRateRegistry {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FxRateRegistry fx = new FxRateRegistry();\n        fx.setRate(\"USD\", 12600.0);\n        fx.setRate(\"EUR\", 13500.0);\n        System.out.println(\"USD kursi: \" + fx.getRate(\"USD\") + \" UZS\");\n    }\n}",
    "solution": "import java.util.Map;\nimport java.util.HashMap;\n\nclass FxRateRegistry {\n    private Map<String, Double> rates = new HashMap<>();\n    public void setRate(String curr, double r) { rates.put(curr, r); }\n    public double getRate(String curr) { return rates.getOrDefault(curr, 0.0); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FxRateRegistry fx = new FxRateRegistry();\n        fx.setRate(\"USD\", 12600.0);\n        fx.setRate(\"EUR\", 13500.0);\n        System.out.println(\"USD kursi: \" + fx.getRate(\"USD\") + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 6-leksiyasida (Slide 34) 'Program to an interface, not an implementation' qoidasi o'rgatiladi: 'List<String> list = new ArrayList<>();'. Bu orqali kelajakda kodni buzmasdan ArrayList ni LinkedList ga yoki HashMap ni LinkedHashMap ga almashtirish mumkin bo'ladi.",
      "cleanCode": "private Map<String, String> addresses = new LinkedHashMap<>();",
      "breakdown": [
        "<code>FxRateRegistry</code>: interfeys to'plamiga ega sinf.",
        "<code>getRate</code>: to'plam operatsiyasi."
      ]
    }
  },
  {
    "id": 111,
    "tier": 8,
    "tierName": "8-Bosqich: Java Collections Ierarxiyasi va Interfeysga Qarab Dasturlash",
    "sector": "106-120: Collections Framework & Program to Interface",
    "title": {
      "uz": "111. Safia — Saralangan Narxlar To'plami: Set<Double> va TreeSet",
      "en": "111. Safia — Naturally Sorted Price Points via Set<Double> and TreeSet"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSafia menyusidagi narxlarni o'sish tartibida saralangan holda saqlash uchun 'Set<Double>' va 'TreeSet' dan foydalanuvchi 'PriceCatalog' tuzing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Kolleksiyalardan foydalanuvchi 'PriceCatalog' sinfini e'lon qiling.\n2. 'Program to an interface' qoidasiga binoan maydonni 'List', 'Set', 'Queue' yoki 'Map' interfeysi sifatida e'lon qiling.\n3. Konstruktor yoki metodda tegishli aniq realizatsiyani ('ArrayList', 'HashSet', 'LinkedHashMap' va b.) biriktiring.\n4. 'getLowestPrice(...)' metodi orqali ma'lumotlarni saqlang yoki qidiring.\n5. 'Main' metodida tekshiring: 'PriceCatalog pc = new PriceCatalog();         pc.addPrice(45000.0);         pc.addPrice(15000.0);         pc.addPrice(80000.0);         System.out.println(\"Eng arzon desert narxi: \" + pc.getLowestPrice() + \" UZS\");'",
      "en": "📖 Real-World Scenario & Context\nKeep price points naturally sorted in ascending order using TreeSet.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare class 'PriceCatalog' using Java Collections Framework.\n2. Declare collection field using interface type (List, Set, Queue, Map).\n3. Instantiate concrete collection (ArrayList, HashSet, LinkedHashMap, etc.).\n4. Implement 'getLowestPrice(...)' manipulating collection entries.\n5. Verify in 'main': 'PriceCatalog pc = new PriceCatalog();         pc.addPrice(45000.0);         pc.addPrice(15000.0);         pc.addPrice(80000.0);         System.out.println(\"Eng arzon desert narxi: \" + pc.getLowestPrice() + \" UZS\");'"
    },
    "requirements": {
      "classes": [
        "PriceCatalog",
        "Main"
      ],
      "methods": [
        "getLowestPrice"
      ]
    },
    "starterCode": "// 'Program to an interface' tamoyili bo'yicha to'plam bilan ishlang\nclass PriceCatalog {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PriceCatalog pc = new PriceCatalog();\n        pc.addPrice(45000.0);\n        pc.addPrice(15000.0);\n        pc.addPrice(80000.0);\n        System.out.println(\"Eng arzon desert narxi: \" + pc.getLowestPrice() + \" UZS\");\n    }\n}",
    "solution": "import java.util.Set;\nimport java.util.TreeSet;\n\nclass PriceCatalog {\n    private Set<Double> prices = new TreeSet<>();\n    public void addPrice(double p) { prices.add(p); }\n    public double getLowestPrice() { return prices.isEmpty() ? 0.0 : prices.iterator().next(); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PriceCatalog pc = new PriceCatalog();\n        pc.addPrice(45000.0);\n        pc.addPrice(15000.0);\n        pc.addPrice(80000.0);\n        System.out.println(\"Eng arzon desert narxi: \" + pc.getLowestPrice() + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 6-leksiyasida (Slide 34) 'Program to an interface, not an implementation' qoidasi o'rgatiladi: 'List<String> list = new ArrayList<>();'. Bu orqali kelajakda kodni buzmasdan ArrayList ni LinkedList ga yoki HashMap ni LinkedHashMap ga almashtirish mumkin bo'ladi.",
      "cleanCode": "private Map<String, String> addresses = new LinkedHashMap<>();",
      "breakdown": [
        "<code>PriceCatalog</code>: interfeys to'plamiga ega sinf.",
        "<code>getLowestPrice</code>: to'plam operatsiyasi."
      ]
    }
  },
  {
    "id": 112,
    "tier": 8,
    "tierName": "8-Bosqich: Java Collections Ierarxiyasi va Interfeysga Qarab Dasturlash",
    "sector": "106-120: Collections Framework & Program to Interface",
    "title": {
      "uz": "112. Dodo Pizza — Kiritilish Tartibini Saqlovchi Filiallar: LinkedHashMap",
      "en": "112. Dodo Pizza — Insertion-Order Preserving Branch Registry using LinkedHashMap"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT 6-hafta yechimida 'Customer.deliveryAddresses' LinkedHashMap orqali yaratilgan. Dodo filiallarini kiritilish tartibida saqlovchi xaritani amalga oshiring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Kolleksiyalardan foydalanuvchi 'BranchRegistry' sinfini e'lon qiling.\n2. 'Program to an interface' qoidasiga binoan maydonni 'List', 'Set', 'Queue' yoki 'Map' interfeysi sifatida e'lon qiling.\n3. Konstruktor yoki metodda tegishli aniq realizatsiyani ('ArrayList', 'HashSet', 'LinkedHashMap' va b.) biriktiring.\n4. 'getBranchCount(...)' metodi orqali ma'lumotlarni saqlang yoki qidiring.\n5. 'Main' metodida tekshiring: 'BranchRegistry br = new BranchRegistry();         br.addBranch(\"Chilonzor\", \"Qatortol 28\");         br.addBranch(\"Yunusobod\", \"Amir Temur 4\");         System.out.println(\"Filiallar soni: \" + br.getBranchCount() + \" | Birinchi filial: \" + br.getAddress(\"Chilonzor\"));'",
      "en": "📖 Real-World Scenario & Context\nUse LinkedHashMap to preserve insertion ordering of pizzeria branches matching Week 6 solution.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare class 'BranchRegistry' using Java Collections Framework.\n2. Declare collection field using interface type (List, Set, Queue, Map).\n3. Instantiate concrete collection (ArrayList, HashSet, LinkedHashMap, etc.).\n4. Implement 'getBranchCount(...)' manipulating collection entries.\n5. Verify in 'main': 'BranchRegistry br = new BranchRegistry();         br.addBranch(\"Chilonzor\", \"Qatortol 28\");         br.addBranch(\"Yunusobod\", \"Amir Temur 4\");         System.out.println(\"Filiallar soni: \" + br.getBranchCount() + \" | Birinchi filial: \" + br.getAddress(\"Chilonzor\"));'"
    },
    "requirements": {
      "classes": [
        "BranchRegistry",
        "Main"
      ],
      "methods": [
        "getBranchCount"
      ]
    },
    "starterCode": "// 'Program to an interface' tamoyili bo'yicha to'plam bilan ishlang\nclass BranchRegistry {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BranchRegistry br = new BranchRegistry();\n        br.addBranch(\"Chilonzor\", \"Qatortol 28\");\n        br.addBranch(\"Yunusobod\", \"Amir Temur 4\");\n        System.out.println(\"Filiallar soni: \" + br.getBranchCount() + \" | Birinchi filial: \" + br.getAddress(\"Chilonzor\"));\n    }\n}",
    "solution": "import java.util.Map;\nimport java.util.LinkedHashMap;\n\nclass BranchRegistry {\n    private Map<String, String> branches = new LinkedHashMap<>();\n    public void addBranch(String name, String addr) { branches.put(name, addr); }\n    public int getBranchCount() { return branches.size(); }\n    public String getAddress(String name) { return branches.get(name); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BranchRegistry br = new BranchRegistry();\n        br.addBranch(\"Chilonzor\", \"Qatortol 28\");\n        br.addBranch(\"Yunusobod\", \"Amir Temur 4\");\n        System.out.println(\"Filiallar soni: \" + br.getBranchCount() + \" | Birinchi filial: \" + br.getAddress(\"Chilonzor\"));\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 6-leksiyasida (Slide 34) 'Program to an interface, not an implementation' qoidasi o'rgatiladi: 'List<String> list = new ArrayList<>();'. Bu orqali kelajakda kodni buzmasdan ArrayList ni LinkedList ga yoki HashMap ni LinkedHashMap ga almashtirish mumkin bo'ladi.",
      "cleanCode": "private Map<String, String> addresses = new LinkedHashMap<>();",
      "breakdown": [
        "<code>BranchRegistry</code>: interfeys to'plamiga ega sinf.",
        "<code>getBranchCount</code>: to'plam operatsiyasi."
      ]
    }
  },
  {
    "id": 113,
    "tier": 8,
    "tierName": "8-Bosqich: Java Collections Ierarxiyasi va Interfeysga Qarab Dasturlash",
    "sector": "106-120: Collections Framework & Program to Interface",
    "title": {
      "uz": "113. Texnomart — Tartibli Noyob Seriya Raqamlari: LinkedHashSet",
      "en": "113. Texnomart — Order-Preserving Unique Serial Numbers via LinkedHashSet"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nKafolat tekshiruvida mahsulot seriya raqamlari ham takrorlanmasligi, ham kelgan tartibida saqlanishi kerak. 'LinkedHashSet' dan foydalanuvchi sinf yozing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Kolleksiyalardan foydalanuvchi 'SerialRegistry' sinfini e'lon qiling.\n2. 'Program to an interface' qoidasiga binoan maydonni 'List', 'Set', 'Queue' yoki 'Map' interfeysi sifatida e'lon qiling.\n3. Konstruktor yoki metodda tegishli aniq realizatsiyani ('ArrayList', 'HashSet', 'LinkedHashMap' va b.) biriktiring.\n4. 'getSerialCount(...)' metodi orqali ma'lumotlarni saqlang yoki qidiring.\n5. 'Main' metodida tekshiring: 'SerialRegistry sr = new SerialRegistry();         sr.registerSerial(\"SN-100\");         sr.registerSerial(\"SN-200\");         sr.registerSerial(\"SN-100\");         System.out.println(\"Noyob seriya raqamlari soni: \" + sr.getSerialCount());'",
      "en": "📖 Real-World Scenario & Context\nMaintain unique hardware serial numbers while preserving scan order using LinkedHashSet.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare class 'SerialRegistry' using Java Collections Framework.\n2. Declare collection field using interface type (List, Set, Queue, Map).\n3. Instantiate concrete collection (ArrayList, HashSet, LinkedHashMap, etc.).\n4. Implement 'getSerialCount(...)' manipulating collection entries.\n5. Verify in 'main': 'SerialRegistry sr = new SerialRegistry();         sr.registerSerial(\"SN-100\");         sr.registerSerial(\"SN-200\");         sr.registerSerial(\"SN-100\");         System.out.println(\"Noyob seriya raqamlari soni: \" + sr.getSerialCount());'"
    },
    "requirements": {
      "classes": [
        "SerialRegistry",
        "Main"
      ],
      "methods": [
        "getSerialCount"
      ]
    },
    "starterCode": "// 'Program to an interface' tamoyili bo'yicha to'plam bilan ishlang\nclass SerialRegistry {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SerialRegistry sr = new SerialRegistry();\n        sr.registerSerial(\"SN-100\");\n        sr.registerSerial(\"SN-200\");\n        sr.registerSerial(\"SN-100\");\n        System.out.println(\"Noyob seriya raqamlari soni: \" + sr.getSerialCount());\n    }\n}",
    "solution": "import java.util.Set;\nimport java.util.LinkedHashSet;\n\nclass SerialRegistry {\n    private Set<String> serials = new LinkedHashSet<>();\n    public void registerSerial(String sn) { serials.add(sn); }\n    public int getSerialCount() { return serials.size(); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SerialRegistry sr = new SerialRegistry();\n        sr.registerSerial(\"SN-100\");\n        sr.registerSerial(\"SN-200\");\n        sr.registerSerial(\"SN-100\");\n        System.out.println(\"Noyob seriya raqamlari soni: \" + sr.getSerialCount());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 6-leksiyasida (Slide 34) 'Program to an interface, not an implementation' qoidasi o'rgatiladi: 'List<String> list = new ArrayList<>();'. Bu orqali kelajakda kodni buzmasdan ArrayList ni LinkedList ga yoki HashMap ni LinkedHashMap ga almashtirish mumkin bo'ladi.",
      "cleanCode": "private Map<String, String> addresses = new LinkedHashMap<>();",
      "breakdown": [
        "<code>SerialRegistry</code>: interfeys to'plamiga ega sinf.",
        "<code>getSerialCount</code>: to'plam operatsiyasi."
      ]
    }
  },
  {
    "id": 114,
    "tier": 8,
    "tierName": "8-Bosqich: Java Collections Ierarxiyasi va Interfeysga Qarab Dasturlash",
    "sector": "106-120: Collections Framework & Program to Interface",
    "title": {
      "uz": "114. Medion — Bemorlar Navbati: List<String> va LinkedList",
      "en": "114. Medion — Patient Queue Operations with List<String> and LinkedList"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nTez-tez boshiga va oxiriga element qo'shiladigan holatlarda 'LinkedList' unumdorlik beradi. Medion qabulxonasida 'PatientLinkedList' klassini tuzing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Kolleksiyalardan foydalanuvchi 'PatientLinkedList' sinfini e'lon qiling.\n2. 'Program to an interface' qoidasiga binoan maydonni 'List', 'Set', 'Queue' yoki 'Map' interfeysi sifatida e'lon qiling.\n3. Konstruktor yoki metodda tegishli aniq realizatsiyani ('ArrayList', 'HashSet', 'LinkedHashMap' va b.) biriktiring.\n4. 'getFirstPatient(...)' metodi orqali ma'lumotlarni saqlang yoki qidiring.\n5. 'Main' metodida tekshiring: 'PatientLinkedList list = new PatientLinkedList();         list.addPatient(\"Karimov A.\");         list.addPatient(\"Sobirova N.\");         System.out.println(\"Birinchi bemor: \" + list.getFirstPatient());'",
      "en": "📖 Real-World Scenario & Context\nUse LinkedList for efficient insertion and removal in clinic reception list.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare class 'PatientLinkedList' using Java Collections Framework.\n2. Declare collection field using interface type (List, Set, Queue, Map).\n3. Instantiate concrete collection (ArrayList, HashSet, LinkedHashMap, etc.).\n4. Implement 'getFirstPatient(...)' manipulating collection entries.\n5. Verify in 'main': 'PatientLinkedList list = new PatientLinkedList();         list.addPatient(\"Karimov A.\");         list.addPatient(\"Sobirova N.\");         System.out.println(\"Birinchi bemor: \" + list.getFirstPatient());'"
    },
    "requirements": {
      "classes": [
        "PatientLinkedList",
        "Main"
      ],
      "methods": [
        "getFirstPatient"
      ]
    },
    "starterCode": "// 'Program to an interface' tamoyili bo'yicha to'plam bilan ishlang\nclass PatientLinkedList {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PatientLinkedList list = new PatientLinkedList();\n        list.addPatient(\"Karimov A.\");\n        list.addPatient(\"Sobirova N.\");\n        System.out.println(\"Birinchi bemor: \" + list.getFirstPatient());\n    }\n}",
    "solution": "import java.util.List;\nimport java.util.LinkedList;\n\nclass PatientLinkedList {\n    private List<String> list = new LinkedList<>();\n    public void addPatient(String p) { list.add(p); }\n    public String getFirstPatient() { return list.isEmpty() ? null : list.get(0); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PatientLinkedList list = new PatientLinkedList();\n        list.addPatient(\"Karimov A.\");\n        list.addPatient(\"Sobirova N.\");\n        System.out.println(\"Birinchi bemor: \" + list.getFirstPatient());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 6-leksiyasida (Slide 34) 'Program to an interface, not an implementation' qoidasi o'rgatiladi: 'List<String> list = new ArrayList<>();'. Bu orqali kelajakda kodni buzmasdan ArrayList ni LinkedList ga yoki HashMap ni LinkedHashMap ga almashtirish mumkin bo'ladi.",
      "cleanCode": "private Map<String, String> addresses = new LinkedHashMap<>();",
      "breakdown": [
        "<code>PatientLinkedList</code>: interfeys to'plamiga ega sinf.",
        "<code>getFirstPatient</code>: to'plam operatsiyasi."
      ]
    }
  },
  {
    "id": 115,
    "tier": 8,
    "tierName": "8-Bosqich: Java Collections Ierarxiyasi va Interfeysga Qarab Dasturlash",
    "sector": "106-120: Collections Framework & Program to Interface",
    "title": {
      "uz": "115. Express24 — Kuryerlarga Posilkalar Xaritasi: Map<String, List<String>>",
      "en": "115. Express24 — Nested Collection Mapping: Map<String, List<String>>"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nHar bir kuryer nomiga unga biriktirilgan bir nechta buyurtmalar ro'yxati bog'lanadi ('Map<String, List<String>>'). 'CourierManifest' klassida posilkani biriktiring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Kolleksiyalardan foydalanuvchi 'CourierManifest' sinfini e'lon qiling.\n2. 'Program to an interface' qoidasiga binoan maydonni 'List', 'Set', 'Queue' yoki 'Map' interfeysi sifatida e'lon qiling.\n3. Konstruktor yoki metodda tegishli aniq realizatsiyani ('ArrayList', 'HashSet', 'LinkedHashMap' va b.) biriktiring.\n4. 'getAssignedOrderCount(...)' metodi orqali ma'lumotlarni saqlang yoki qidiring.\n5. 'Main' metodida tekshiring: 'CourierManifest cm = new CourierManifest();         cm.assignOrder(\"Javohir\", \"ORD-101\");         cm.assignOrder(\"Javohir\", \"ORD-102\");         System.out.println(\"Javohirning buyurtmalari: \" + cm.getAssignedOrderCount(\"Javohir\") + \" ta\");'",
      "en": "📖 Real-World Scenario & Context\nModel one-to-many relationship using Map<String, List<String>> to track courier parcels.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare class 'CourierManifest' using Java Collections Framework.\n2. Declare collection field using interface type (List, Set, Queue, Map).\n3. Instantiate concrete collection (ArrayList, HashSet, LinkedHashMap, etc.).\n4. Implement 'getAssignedOrderCount(...)' manipulating collection entries.\n5. Verify in 'main': 'CourierManifest cm = new CourierManifest();         cm.assignOrder(\"Javohir\", \"ORD-101\");         cm.assignOrder(\"Javohir\", \"ORD-102\");         System.out.println(\"Javohirning buyurtmalari: \" + cm.getAssignedOrderCount(\"Javohir\") + \" ta\");'"
    },
    "requirements": {
      "classes": [
        "CourierManifest",
        "Main"
      ],
      "methods": [
        "getAssignedOrderCount"
      ]
    },
    "starterCode": "// 'Program to an interface' tamoyili bo'yicha to'plam bilan ishlang\nclass CourierManifest {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CourierManifest cm = new CourierManifest();\n        cm.assignOrder(\"Javohir\", \"ORD-101\");\n        cm.assignOrder(\"Javohir\", \"ORD-102\");\n        System.out.println(\"Javohirning buyurtmalari: \" + cm.getAssignedOrderCount(\"Javohir\") + \" ta\");\n    }\n}",
    "solution": "import java.util.Map;\nimport java.util.HashMap;\nimport java.util.List;\nimport java.util.ArrayList;\n\nclass CourierManifest {\n    private Map<String, List<String>> map = new HashMap<>();\n    public void assignOrder(String courier, String order) {\n        map.computeIfAbsent(courier, k -> new ArrayList<>()).add(order);\n    }\n    public int getAssignedOrderCount(String courier) {\n        List<String> list = map.get(courier);\n        return list == null ? 0 : list.size();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CourierManifest cm = new CourierManifest();\n        cm.assignOrder(\"Javohir\", \"ORD-101\");\n        cm.assignOrder(\"Javohir\", \"ORD-102\");\n        System.out.println(\"Javohirning buyurtmalari: \" + cm.getAssignedOrderCount(\"Javohir\") + \" ta\");\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 6-leksiyasida (Slide 34) 'Program to an interface, not an implementation' qoidasi o'rgatiladi: 'List<String> list = new ArrayList<>();'. Bu orqali kelajakda kodni buzmasdan ArrayList ni LinkedList ga yoki HashMap ni LinkedHashMap ga almashtirish mumkin bo'ladi.",
      "cleanCode": "private Map<String, String> addresses = new LinkedHashMap<>();",
      "breakdown": [
        "<code>CourierManifest</code>: interfeys to'plamiga ega sinf.",
        "<code>getAssignedOrderCount</code>: to'plam operatsiyasi."
      ]
    }
  },
  {
    "id": 116,
    "tier": 8,
    "tierName": "8-Bosqich: Java Collections Ierarxiyasi va Interfeysga Qarab Dasturlash",
    "sector": "106-120: Collections Framework & Program to Interface",
    "title": {
      "uz": "116. Asaxiy — Alifbo Bo'yicha Saralangan Janrlar: TreeMap<String, Integer>",
      "en": "116. Asaxiy — Sorted Category Book Counts via TreeMap<String, Integer>"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nAsaxiy kitob janrlari alifbo bo'yicha avtomatik saralanishi kerak. 'TreeMap<String, Integer>' orqali har bir janrdagi kitoblar sonini boshqaring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Kolleksiyalardan foydalanuvchi 'GenreCatalog' sinfini e'lon qiling.\n2. 'Program to an interface' qoidasiga binoan maydonni 'List', 'Set', 'Queue' yoki 'Map' interfeysi sifatida e'lon qiling.\n3. Konstruktor yoki metodda tegishli aniq realizatsiyani ('ArrayList', 'HashSet', 'LinkedHashMap' va b.) biriktiring.\n4. 'getFirstGenre(...)' metodi orqali ma'lumotlarni saqlang yoki qidiring.\n5. 'Main' metodida tekshiring: 'GenreCatalog gc = new GenreCatalog();         gc.addGenreCount(\"Tarix\", 120);         gc.addGenreCount(\"Badiiy\", 450);         System.out.println(\"Birinchi saralangan janr: \" + gc.getFirstGenre());'",
      "en": "📖 Real-World Scenario & Context\nMaintain book counts sorted alphabetically by genre name using TreeMap.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare class 'GenreCatalog' using Java Collections Framework.\n2. Declare collection field using interface type (List, Set, Queue, Map).\n3. Instantiate concrete collection (ArrayList, HashSet, LinkedHashMap, etc.).\n4. Implement 'getFirstGenre(...)' manipulating collection entries.\n5. Verify in 'main': 'GenreCatalog gc = new GenreCatalog();         gc.addGenreCount(\"Tarix\", 120);         gc.addGenreCount(\"Badiiy\", 450);         System.out.println(\"Birinchi saralangan janr: \" + gc.getFirstGenre());'"
    },
    "requirements": {
      "classes": [
        "GenreCatalog",
        "Main"
      ],
      "methods": [
        "getFirstGenre"
      ]
    },
    "starterCode": "// 'Program to an interface' tamoyili bo'yicha to'plam bilan ishlang\nclass GenreCatalog {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GenreCatalog gc = new GenreCatalog();\n        gc.addGenreCount(\"Tarix\", 120);\n        gc.addGenreCount(\"Badiiy\", 450);\n        System.out.println(\"Birinchi saralangan janr: \" + gc.getFirstGenre());\n    }\n}",
    "solution": "import java.util.Map;\nimport java.util.TreeMap;\n\nclass GenreCatalog {\n    private Map<String, Integer> map = new TreeMap<>();\n    public void addGenreCount(String g, int c) { map.put(g, c); }\n    public String getFirstGenre() { return map.isEmpty() ? null : map.keySet().iterator().next(); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GenreCatalog gc = new GenreCatalog();\n        gc.addGenreCount(\"Tarix\", 120);\n        gc.addGenreCount(\"Badiiy\", 450);\n        System.out.println(\"Birinchi saralangan janr: \" + gc.getFirstGenre());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 6-leksiyasida (Slide 34) 'Program to an interface, not an implementation' qoidasi o'rgatiladi: 'List<String> list = new ArrayList<>();'. Bu orqali kelajakda kodni buzmasdan ArrayList ni LinkedList ga yoki HashMap ni LinkedHashMap ga almashtirish mumkin bo'ladi.",
      "cleanCode": "private Map<String, String> addresses = new LinkedHashMap<>();",
      "breakdown": [
        "<code>GenreCatalog</code>: interfeys to'plamiga ega sinf.",
        "<code>getFirstGenre</code>: to'plam operatsiyasi."
      ]
    }
  },
  {
    "id": 117,
    "tier": 8,
    "tierName": "8-Bosqich: Java Collections Ierarxiyasi va Interfeysga Qarab Dasturlash",
    "sector": "106-120: Collections Framework & Program to Interface",
    "title": {
      "uz": "117. Kapitalbank — Hisoblar Balansi Xaritasi: Map<String, Double>",
      "en": "117. Kapitalbank — Account Balance Lookup via Map<String, Double>"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nKapitalbank tizimida hisob raqamlari bo'yicha qoldiqlarni tez topish uchun 'Map<String, Double>' dan foydalanuvchi 'BankBalanceLedger' klassini tuzing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Kolleksiyalardan foydalanuvchi 'BankBalanceLedger' sinfini e'lon qiling.\n2. 'Program to an interface' qoidasiga binoan maydonni 'List', 'Set', 'Queue' yoki 'Map' interfeysi sifatida e'lon qiling.\n3. Konstruktor yoki metodda tegishli aniq realizatsiyani ('ArrayList', 'HashSet', 'LinkedHashMap' va b.) biriktiring.\n4. 'getBalance(...)' metodi orqali ma'lumotlarni saqlang yoki qidiring.\n5. 'Main' metodida tekshiring: 'BankBalanceLedger ledger = new BankBalanceLedger();         ledger.setBalance(\"ACC-1\", 5000000.0);         System.out.println(\"ACC-1 balansi: \" + ledger.getBalance(\"ACC-1\") + \" UZS\");'",
      "en": "📖 Real-World Scenario & Context\nImplement fast account balance lookup using Map interface.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare class 'BankBalanceLedger' using Java Collections Framework.\n2. Declare collection field using interface type (List, Set, Queue, Map).\n3. Instantiate concrete collection (ArrayList, HashSet, LinkedHashMap, etc.).\n4. Implement 'getBalance(...)' manipulating collection entries.\n5. Verify in 'main': 'BankBalanceLedger ledger = new BankBalanceLedger();         ledger.setBalance(\"ACC-1\", 5000000.0);         System.out.println(\"ACC-1 balansi: \" + ledger.getBalance(\"ACC-1\") + \" UZS\");'"
    },
    "requirements": {
      "classes": [
        "BankBalanceLedger",
        "Main"
      ],
      "methods": [
        "getBalance"
      ]
    },
    "starterCode": "// 'Program to an interface' tamoyili bo'yicha to'plam bilan ishlang\nclass BankBalanceLedger {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BankBalanceLedger ledger = new BankBalanceLedger();\n        ledger.setBalance(\"ACC-1\", 5000000.0);\n        System.out.println(\"ACC-1 balansi: \" + ledger.getBalance(\"ACC-1\") + \" UZS\");\n    }\n}",
    "solution": "import java.util.Map;\nimport java.util.HashMap;\n\nclass BankBalanceLedger {\n    private Map<String, Double> map = new HashMap<>();\n    public void setBalance(String acc, double b) { map.put(acc, b); }\n    public double getBalance(String acc) { return map.getOrDefault(acc, 0.0); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BankBalanceLedger ledger = new BankBalanceLedger();\n        ledger.setBalance(\"ACC-1\", 5000000.0);\n        System.out.println(\"ACC-1 balansi: \" + ledger.getBalance(\"ACC-1\") + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 6-leksiyasida (Slide 34) 'Program to an interface, not an implementation' qoidasi o'rgatiladi: 'List<String> list = new ArrayList<>();'. Bu orqali kelajakda kodni buzmasdan ArrayList ni LinkedList ga yoki HashMap ni LinkedHashMap ga almashtirish mumkin bo'ladi.",
      "cleanCode": "private Map<String, String> addresses = new LinkedHashMap<>();",
      "breakdown": [
        "<code>BankBalanceLedger</code>: interfeys to'plamiga ega sinf.",
        "<code>getBalance</code>: to'plam operatsiyasi."
      ]
    }
  },
  {
    "id": 118,
    "tier": 8,
    "tierName": "8-Bosqich: Java Collections Ierarxiyasi va Interfeysga Qarab Dasturlash",
    "sector": "106-120: Collections Framework & Program to Interface",
    "title": {
      "uz": "118. Beeline — USSD Kodlar To'plami: Set<String>",
      "en": "118. Beeline — Supported USSD Codes Set Verification"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nBeeline qo'llab-quvvatlaydigan USSD so'rovlari ('*100#', '*102#') 'Set<String>' to'plamida saqlanadi. Kodning mavjudligini tezkor tekshiring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Kolleksiyalardan foydalanuvchi 'UssdRegistry' sinfini e'lon qiling.\n2. 'Program to an interface' qoidasiga binoan maydonni 'List', 'Set', 'Queue' yoki 'Map' interfeysi sifatida e'lon qiling.\n3. Konstruktor yoki metodda tegishli aniq realizatsiyani ('ArrayList', 'HashSet', 'LinkedHashMap' va b.) biriktiring.\n4. 'isValidUssd(...)' metodi orqali ma'lumotlarni saqlang yoki qidiring.\n5. 'Main' metodida tekshiring: 'UssdRegistry reg = new UssdRegistry();         reg.registerCode(\"*100#\");         System.out.println(\"*100# mavjudmi: \" + reg.isValidUssd(\"*100#\"));'",
      "en": "📖 Real-World Scenario & Context\nVerify valid USSD requests via Set lookup in O(1) time.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare class 'UssdRegistry' using Java Collections Framework.\n2. Declare collection field using interface type (List, Set, Queue, Map).\n3. Instantiate concrete collection (ArrayList, HashSet, LinkedHashMap, etc.).\n4. Implement 'isValidUssd(...)' manipulating collection entries.\n5. Verify in 'main': 'UssdRegistry reg = new UssdRegistry();         reg.registerCode(\"*100#\");         System.out.println(\"*100# mavjudmi: \" + reg.isValidUssd(\"*100#\"));'"
    },
    "requirements": {
      "classes": [
        "UssdRegistry",
        "Main"
      ],
      "methods": [
        "isValidUssd"
      ]
    },
    "starterCode": "// 'Program to an interface' tamoyili bo'yicha to'plam bilan ishlang\nclass UssdRegistry {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        UssdRegistry reg = new UssdRegistry();\n        reg.registerCode(\"*100#\");\n        System.out.println(\"*100# mavjudmi: \" + reg.isValidUssd(\"*100#\"));\n    }\n}",
    "solution": "import java.util.Set;\nimport java.util.HashSet;\n\nclass UssdRegistry {\n    private Set<String> codes = new HashSet<>();\n    public void registerCode(String c) { codes.add(c); }\n    public boolean isValidUssd(String c) { return codes.contains(c); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        UssdRegistry reg = new UssdRegistry();\n        reg.registerCode(\"*100#\");\n        System.out.println(\"*100# mavjudmi: \" + reg.isValidUssd(\"*100#\"));\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 6-leksiyasida (Slide 34) 'Program to an interface, not an implementation' qoidasi o'rgatiladi: 'List<String> list = new ArrayList<>();'. Bu orqali kelajakda kodni buzmasdan ArrayList ni LinkedList ga yoki HashMap ni LinkedHashMap ga almashtirish mumkin bo'ladi.",
      "cleanCode": "private Map<String, String> addresses = new LinkedHashMap<>();",
      "breakdown": [
        "<code>UssdRegistry</code>: interfeys to'plamiga ega sinf.",
        "<code>isValidUssd</code>: to'plam operatsiyasi."
      ]
    }
  },
  {
    "id": 119,
    "tier": 8,
    "tierName": "8-Bosqich: Java Collections Ierarxiyasi va Interfeysga Qarab Dasturlash",
    "sector": "106-120: Collections Framework & Program to Interface",
    "title": {
      "uz": "119. UzAirways — Reysga Chiqish Navbati: Queue<String>",
      "en": "119. UzAirways — Passenger Gate Boarding Queue via Queue Interface"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nUzAirways darvozasida yo'lovchilar samolyotga 'Queue<String>' orqali navbat bilan chiqariladi. 'GateBoardingQueue' sinfida navbatni boshqaring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Kolleksiyalardan foydalanuvchi 'GateBoardingQueue' sinfini e'lon qiling.\n2. 'Program to an interface' qoidasiga binoan maydonni 'List', 'Set', 'Queue' yoki 'Map' interfeysi sifatida e'lon qiling.\n3. Konstruktor yoki metodda tegishli aniq realizatsiyani ('ArrayList', 'HashSet', 'LinkedHashMap' va b.) biriktiring.\n4. 'boardNextPassenger(...)' metodi orqali ma'lumotlarni saqlang yoki qidiring.\n5. 'Main' metodida tekshiring: 'GateBoardingQueue q = new GateBoardingQueue();         q.addPassenger(\"Aliyev\");         q.addPassenger(\"Toshmatov\");         System.out.println(\"Samolyotga chiqdi: \" + q.boardNextPassenger());'",
      "en": "📖 Real-World Scenario & Context\nModel flight passenger boarding sequence using Queue interface.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare class 'GateBoardingQueue' using Java Collections Framework.\n2. Declare collection field using interface type (List, Set, Queue, Map).\n3. Instantiate concrete collection (ArrayList, HashSet, LinkedHashMap, etc.).\n4. Implement 'boardNextPassenger(...)' manipulating collection entries.\n5. Verify in 'main': 'GateBoardingQueue q = new GateBoardingQueue();         q.addPassenger(\"Aliyev\");         q.addPassenger(\"Toshmatov\");         System.out.println(\"Samolyotga chiqdi: \" + q.boardNextPassenger());'"
    },
    "requirements": {
      "classes": [
        "GateBoardingQueue",
        "Main"
      ],
      "methods": [
        "boardNextPassenger"
      ]
    },
    "starterCode": "// 'Program to an interface' tamoyili bo'yicha to'plam bilan ishlang\nclass GateBoardingQueue {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GateBoardingQueue q = new GateBoardingQueue();\n        q.addPassenger(\"Aliyev\");\n        q.addPassenger(\"Toshmatov\");\n        System.out.println(\"Samolyotga chiqdi: \" + q.boardNextPassenger());\n    }\n}",
    "solution": "import java.util.Queue;\nimport java.util.ArrayDeque;\n\nclass GateBoardingQueue {\n    private Queue<String> q = new ArrayDeque<>();\n    public void addPassenger(String p) { q.offer(p); }\n    public String boardNextPassenger() { return q.poll(); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GateBoardingQueue q = new GateBoardingQueue();\n        q.addPassenger(\"Aliyev\");\n        q.addPassenger(\"Toshmatov\");\n        System.out.println(\"Samolyotga chiqdi: \" + q.boardNextPassenger());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 6-leksiyasida (Slide 34) 'Program to an interface, not an implementation' qoidasi o'rgatiladi: 'List<String> list = new ArrayList<>();'. Bu orqali kelajakda kodni buzmasdan ArrayList ni LinkedList ga yoki HashMap ni LinkedHashMap ga almashtirish mumkin bo'ladi.",
      "cleanCode": "private Map<String, String> addresses = new LinkedHashMap<>();",
      "breakdown": [
        "<code>GateBoardingQueue</code>: interfeys to'plamiga ega sinf.",
        "<code>boardNextPassenger</code>: to'plam operatsiyasi."
      ]
    }
  },
  {
    "id": 120,
    "tier": 8,
    "tierName": "8-Bosqich: Java Collections Ierarxiyasi va Interfeysga Qarab Dasturlash",
    "sector": "106-120: Collections Framework & Program to Interface",
    "title": {
      "uz": "120. WIUT SRS — Talaba Manzillari Xaritasi (Customer.deliveryAddresses Andozasi)",
      "en": "120. WIUT SRS — Student Delivery Addresses Mapping Matching Customer.java"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT Seminar 6 rasmiy yechimidagi andaza: 'Map<String, String> addresses = new LinkedHashMap<>();' har bir manzil yorlig'iga ('home', 'dorm') manzilni biriktiradi. 'StudentAddressManager' klassini yozing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Kolleksiyalardan foydalanuvchi 'StudentAddressManager' sinfini e'lon qiling.\n2. 'Program to an interface' qoidasiga binoan maydonni 'List', 'Set', 'Queue' yoki 'Map' interfeysi sifatida e'lon qiling.\n3. Konstruktor yoki metodda tegishli aniq realizatsiyani ('ArrayList', 'HashSet', 'LinkedHashMap' va b.) biriktiring.\n4. 'getAddress(...)' metodi orqali ma'lumotlarni saqlang yoki qidiring.\n5. 'Main' metodida tekshiring: 'StudentAddressManager mgr = new StudentAddressManager();         mgr.addAddress(\"home\", \"Tashkent, Amir Temur 12\");         mgr.addAddress(\"dorm\", \"Tashkent, Istiqlol 4\");         System.out.println(\"Yotoqxona manzili: \" + mgr.getAddress(\"dorm\"));'",
      "en": "📖 Real-World Scenario & Context\nImplement address label dictionary using LinkedHashMap matching Week 6 Customer.java solution.\n\n📋 Required Implementation Steps (1 to 5)\n1. Declare class 'StudentAddressManager' using Java Collections Framework.\n2. Declare collection field using interface type (List, Set, Queue, Map).\n3. Instantiate concrete collection (ArrayList, HashSet, LinkedHashMap, etc.).\n4. Implement 'getAddress(...)' manipulating collection entries.\n5. Verify in 'main': 'StudentAddressManager mgr = new StudentAddressManager();         mgr.addAddress(\"home\", \"Tashkent, Amir Temur 12\");         mgr.addAddress(\"dorm\", \"Tashkent, Istiqlol 4\");         System.out.println(\"Yotoqxona manzili: \" + mgr.getAddress(\"dorm\"));'"
    },
    "requirements": {
      "classes": [
        "StudentAddressManager",
        "Main"
      ],
      "methods": [
        "getAddress"
      ]
    },
    "starterCode": "// 'Program to an interface' tamoyili bo'yicha to'plam bilan ishlang\nclass StudentAddressManager {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StudentAddressManager mgr = new StudentAddressManager();\n        mgr.addAddress(\"home\", \"Tashkent, Amir Temur 12\");\n        mgr.addAddress(\"dorm\", \"Tashkent, Istiqlol 4\");\n        System.out.println(\"Yotoqxona manzili: \" + mgr.getAddress(\"dorm\"));\n    }\n}",
    "solution": "import java.util.Map;\nimport java.util.LinkedHashMap;\n\nclass StudentAddressManager {\n    private Map<String, String> addrs = new LinkedHashMap<>();\n    public void addAddress(String label, String addr) { addrs.put(label, addr); }\n    public String getAddress(String label) { return addrs.get(label); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StudentAddressManager mgr = new StudentAddressManager();\n        mgr.addAddress(\"home\", \"Tashkent, Amir Temur 12\");\n        mgr.addAddress(\"dorm\", \"Tashkent, Istiqlol 4\");\n        System.out.println(\"Yotoqxona manzili: \" + mgr.getAddress(\"dorm\"));\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 6-leksiyasida (Slide 34) 'Program to an interface, not an implementation' qoidasi o'rgatiladi: 'List<String> list = new ArrayList<>();'. Bu orqali kelajakda kodni buzmasdan ArrayList ni LinkedList ga yoki HashMap ni LinkedHashMap ga almashtirish mumkin bo'ladi.",
      "cleanCode": "private Map<String, String> addresses = new LinkedHashMap<>();",
      "breakdown": [
        "<code>StudentAddressManager</code>: interfeys to'plamiga ega sinf.",
        "<code>getAddress</code>: to'plam operatsiyasi."
      ]
    }
  },
  {
    "id": 121,
    "tier": 9,
    "tierName": "9-Bosqich: Workshop TW 6: Polimorfik Chop Etish Tizimi",
    "sector": "121-135: Workshop TW 6 Printing System",
    "title": {
      "uz": "121. Workshop TW 6 — 1-Qadam: IPrintable Interfeysini E'lon Qilish",
      "en": "121. Workshop TW 6 — Step 1: IPrintable Interface Contract"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT 'Workshop TW 6: Abstract Class & Interface' qo'llanmasiga binoan, 1-qadamda 'interface IPrintable { void print(); }' e'lon qilinadi. Har bir chop etiluvchi klass ushbu shartnomani bajarishi shart.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Workshop TW 6 spetsifikatsiyasi bo'yicha 'IPrintable' interfeysi va tegishli sinflarni tuzing.\n2. 'File' abstrakt sinfida 'showHeader()' umumiy metodini va 'abstract String getExtension()' ni e'lon qiling.\n3. Voris sinflarda kengaytma va chop etish logikasini (@Override) yozing.\n4. 'Main' metodida polimorfik chop etishni sinab ko'ring.\n5. Natijani chop eting: 'IPrintable doc = new SimpleDocument(\"Hisobot\");         doc.print();'",
      "en": "📖 Real-World Scenario & Context\nDeclare IPrintable interface with abstract void print() method matching Workshop TW 6 Step 1.\n\n📋 Required Implementation Steps (1 to 5)\n1. Implement IPrintable and File hierarchy matching Workshop TW 6.\n2. Declare shared showHeader() and abstract getExtension() in File base.\n3. Override print() and provide custom file metadata.\n4. Demonstrate polymorphic printing in 'main'.\n5. Print result to console: 'IPrintable doc = new SimpleDocument(\"Hisobot\");         doc.print();'"
    },
    "requirements": {
      "classes": [
        "SimpleDocument",
        "Main"
      ],
      "methods": [
        "print"
      ]
    },
    "starterCode": "// Workshop TW 6 klasslarini yozing\nimport java.util.List;\nimport java.util.ArrayList;\nimport java.util.Queue;\nimport java.util.ArrayDeque;\n\ninterface IPrintable {\n    void print();\n}\n\nabstract class File implements IPrintable {\n    protected String title;\n    public File(String title) { this.title = title; }\n    public abstract String getExtension();\n    public void showHeader() {\n        System.out.println(\"=== \" + title + getExtension() + \" ===\");\n    }\n}\n\nclass SimpleDocument implements IPrintable {\n    private String name;\n    public SimpleDocument(String name) { this.name = name; }\n    @Override\n    public void print() { System.out.println(\"Hujjat chop etildi: \" + name); }\n}\n\nclass DummyFile extends File {\n    public DummyFile(String t) { super(t); }\n    @Override\n    public String getExtension() { return \".dat\"; }\n    @Override\n    public void print() { showHeader(); }\n}\n\nclass TextFile extends File {\n    private int wordCount;\n    public TextFile(String title, int words) { super(title); this.wordCount = words; }\n    @Override\n    public String getExtension() { return \".txt\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"So'zlar soni: \" + wordCount);\n    }\n}\n\nclass ImageFile extends File {\n    private int width;\n    private int height;\n    public ImageFile(String title, int w, int h) { super(title); this.width = w; this.height = h; }\n    @Override\n    public String getExtension() { return \".png\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"O'lchamlari: \" + width + \"x\" + height + \" px\");\n    }\n}\n\nclass PrintableDocument implements IPrintable {\n    private String author;\n    private String text;\n    public PrintableDocument(String a, String t) { this.author = a; this.text = t; }\n    @Override\n    public void print() {\n        System.out.println(\"Chop etiluvchi hujjat [Muallif: \" + author + \"]: \" + text);\n    }\n}\n\nclass PdfDocument extends File {\n    private int pageCount;\n    public PdfDocument(String title, int pages) { super(title); this.pageCount = pages; }\n    @Override\n    public String getExtension() { return \".pdf\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Sahifalar: \" + pageCount);\n    }\n}\n\nclass AudioTranscript extends File {\n    private int durationSeconds;\n    public AudioTranscript(String title, int dur) { super(title); this.durationSeconds = dur; }\n    @Override\n    public String getExtension() { return \".transcript\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Davomiylik: \" + durationSeconds + \" soniya\");\n    }\n}\n\nclass SpreadsheetFile extends File {\n    private int rows; private int cols;\n    public SpreadsheetFile(String title, int r, int c) { super(title); this.rows = r; this.cols = c; }\n    @Override\n    public String getExtension() { return \".xlsx\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Jadval hajmi: \" + rows + \" qator x \" + cols + \" ustun\");\n    }\n}\n\nclass SourceCodeFile extends File {\n    private int loc;\n    public SourceCodeFile(String title, int lines) { super(title); this.loc = lines; }\n    @Override\n    public String getExtension() { return \".java\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Kod qatorlari: \" + loc + \" LOC\");\n    }\n}\n\nclass ReceiptPrintout implements IPrintable {\n    private String store; private double total;\n    public ReceiptPrintout(String s, double t) { this.store = s; this.total = t; }\n    @Override\n    public void print() {\n        System.out.println(\"KASSA CHEKI: \" + store + \" | Jami to'lov: \" + total + \" UZS\");\n    }\n}\n\nclass ShippingLabelPrintout implements IPrintable {\n    private String code; private String addr;\n    public ShippingLabelPrintout(String c, String a) { this.code = c; this.addr = a; }\n    @Override\n    public void print() {\n        System.out.println(\"YETKAZISH YORLIG'I: \" + code + \" -> Manzil: \" + addr);\n    }\n}\n\nclass BatchPrinter {\n    private List<IPrintable> queue = new ArrayList<>();\n    public void addPrintable(IPrintable p) { queue.add(p); }\n    public int printAll() {\n        for (IPrintable p : queue) p.print();\n        return queue.size();\n    }\n}\n\nclass PrintQueueManager {\n    private Queue<IPrintable> q = new ArrayDeque<>();\n    public void enqueue(IPrintable p) { q.offer(p); }\n    public void processNext() { IPrintable p = q.poll(); if (p != null) p.print(); }\n    public int getPendingCount() { return q.size(); }\n}\n\nclass FileAuditService {\n    private List<File> files = new ArrayList<>();\n    public void registerFile(File f) { files.add(f); }\n    public int countByExtension(String ext) {\n        int c = 0;\n        for (File f : files) if (f.getExtension().equals(ext)) c++;\n        return c;\n    }\n}\n\nclass WorkshopMasterRunner {\n    public void runMasterDemo() {\n        IPrintable[] list = new IPrintable[] { new TextFile(\"notes\", 100), new ImageFile(\"logo\", 400, 300), new PrintableDocument(\"Valeriya\", \"Tayyor.\") };\n        for (IPrintable p : list) p.print();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IPrintable doc = new SimpleDocument(\"Hisobot\");\n        doc.print();\n    }\n}",
    "solution": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Queue;\nimport java.util.ArrayDeque;\n\ninterface IPrintable {\n    void print();\n}\n\nabstract class File implements IPrintable {\n    protected String title;\n    public File(String title) { this.title = title; }\n    public abstract String getExtension();\n    public void showHeader() {\n        System.out.println(\"=== \" + title + getExtension() + \" ===\");\n    }\n}\n\nclass SimpleDocument implements IPrintable {\n    private String name;\n    public SimpleDocument(String name) { this.name = name; }\n    @Override\n    public void print() { System.out.println(\"Hujjat chop etildi: \" + name); }\n}\n\nclass DummyFile extends File {\n    public DummyFile(String t) { super(t); }\n    @Override\n    public String getExtension() { return \".dat\"; }\n    @Override\n    public void print() { showHeader(); }\n}\n\nclass TextFile extends File {\n    private int wordCount;\n    public TextFile(String title, int words) { super(title); this.wordCount = words; }\n    @Override\n    public String getExtension() { return \".txt\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"So'zlar soni: \" + wordCount);\n    }\n}\n\nclass ImageFile extends File {\n    private int width;\n    private int height;\n    public ImageFile(String title, int w, int h) { super(title); this.width = w; this.height = h; }\n    @Override\n    public String getExtension() { return \".png\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"O'lchamlari: \" + width + \"x\" + height + \" px\");\n    }\n}\n\nclass PrintableDocument implements IPrintable {\n    private String author;\n    private String text;\n    public PrintableDocument(String a, String t) { this.author = a; this.text = t; }\n    @Override\n    public void print() {\n        System.out.println(\"Chop etiluvchi hujjat [Muallif: \" + author + \"]: \" + text);\n    }\n}\n\nclass PdfDocument extends File {\n    private int pageCount;\n    public PdfDocument(String title, int pages) { super(title); this.pageCount = pages; }\n    @Override\n    public String getExtension() { return \".pdf\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Sahifalar: \" + pageCount);\n    }\n}\n\nclass AudioTranscript extends File {\n    private int durationSeconds;\n    public AudioTranscript(String title, int dur) { super(title); this.durationSeconds = dur; }\n    @Override\n    public String getExtension() { return \".transcript\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Davomiylik: \" + durationSeconds + \" soniya\");\n    }\n}\n\nclass SpreadsheetFile extends File {\n    private int rows; private int cols;\n    public SpreadsheetFile(String title, int r, int c) { super(title); this.rows = r; this.cols = c; }\n    @Override\n    public String getExtension() { return \".xlsx\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Jadval hajmi: \" + rows + \" qator x \" + cols + \" ustun\");\n    }\n}\n\nclass SourceCodeFile extends File {\n    private int loc;\n    public SourceCodeFile(String title, int lines) { super(title); this.loc = lines; }\n    @Override\n    public String getExtension() { return \".java\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Kod qatorlari: \" + loc + \" LOC\");\n    }\n}\n\nclass ReceiptPrintout implements IPrintable {\n    private String store; private double total;\n    public ReceiptPrintout(String s, double t) { this.store = s; this.total = t; }\n    @Override\n    public void print() {\n        System.out.println(\"KASSA CHEKI: \" + store + \" | Jami to'lov: \" + total + \" UZS\");\n    }\n}\n\nclass ShippingLabelPrintout implements IPrintable {\n    private String code; private String addr;\n    public ShippingLabelPrintout(String c, String a) { this.code = c; this.addr = a; }\n    @Override\n    public void print() {\n        System.out.println(\"YETKAZISH YORLIG'I: \" + code + \" -> Manzil: \" + addr);\n    }\n}\n\nclass BatchPrinter {\n    private List<IPrintable> queue = new ArrayList<>();\n    public void addPrintable(IPrintable p) { queue.add(p); }\n    public int printAll() {\n        for (IPrintable p : queue) p.print();\n        return queue.size();\n    }\n}\n\nclass PrintQueueManager {\n    private Queue<IPrintable> q = new ArrayDeque<>();\n    public void enqueue(IPrintable p) { q.offer(p); }\n    public void processNext() { IPrintable p = q.poll(); if (p != null) p.print(); }\n    public int getPendingCount() { return q.size(); }\n}\n\nclass FileAuditService {\n    private List<File> files = new ArrayList<>();\n    public void registerFile(File f) { files.add(f); }\n    public int countByExtension(String ext) {\n        int c = 0;\n        for (File f : files) if (f.getExtension().equals(ext)) c++;\n        return c;\n    }\n}\n\nclass WorkshopMasterRunner {\n    public void runMasterDemo() {\n        IPrintable[] list = new IPrintable[] { new TextFile(\"notes\", 100), new ImageFile(\"logo\", 400, 300), new PrintableDocument(\"Valeriya\", \"Tayyor.\") };\n        for (IPrintable p : list) p.print();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IPrintable doc = new SimpleDocument(\"Hisobot\");\n        doc.print();\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 'Workshop TW 6: Abstract Class & Interface' da IPrintable interfeysi va undan kelib chiquvchi 'abstract class File' tizimi ishlab chiqilgan. Bu laboratoriya ishi interfeys va abstrakt sinflarning real loyihada qanday birga ishlashini to'liq namoyon etadi.",
      "cleanCode": "interface IPrintable { void print(); }\nabstract class File implements IPrintable { ... }",
      "breakdown": [
        "<code>Workshop TW 6</code>: IPrintable va File polimorfik chop etish tizimi.",
        "<code>print</code>: chop etish operatsiyasi."
      ]
    }
  },
  {
    "id": 122,
    "tier": 9,
    "tierName": "9-Bosqich: Workshop TW 6: Polimorfik Chop Etish Tizimi",
    "sector": "121-135: Workshop TW 6 Printing System",
    "title": {
      "uz": "122. Workshop TW 6 — 2-Qadam: abstract class File implements IPrintable",
      "en": "122. Workshop TW 6 — Step 2: Abstract File Implementing IPrintable"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWorkshop 2-qadam: 'abstract class File implements IPrintable'. Unda 'protected String title;' maydoni, 'abstract String getExtension();' metodi va umumiy 'void showHeader()' sarlavha chiqarish metodi bo'ladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Workshop TW 6 spetsifikatsiyasi bo'yicha 'IPrintable' interfeysi va tegishli sinflarni tuzing.\n2. 'File' abstrakt sinfida 'showHeader()' umumiy metodini va 'abstract String getExtension()' ni e'lon qiling.\n3. Voris sinflarda kengaytma va chop etish logikasini (@Override) yozing.\n4. 'Main' metodida polimorfik chop etishni sinab ko'ring.\n5. Natijani chop eting: 'File f = new DummyFile(\"demo\");         f.showHeader();         System.out.println(\"Kengaytma: \" + f.getExtension());'",
      "en": "📖 Real-World Scenario & Context\nBuild abstract class File holding shared title state, concrete showHeader() and abstract getExtension().\n\n📋 Required Implementation Steps (1 to 5)\n1. Implement IPrintable and File hierarchy matching Workshop TW 6.\n2. Declare shared showHeader() and abstract getExtension() in File base.\n3. Override print() and provide custom file metadata.\n4. Demonstrate polymorphic printing in 'main'.\n5. Print result to console: 'File f = new DummyFile(\"demo\");         f.showHeader();         System.out.println(\"Kengaytma: \" + f.getExtension());'"
    },
    "requirements": {
      "classes": [
        "DummyFile",
        "Main"
      ],
      "methods": [
        "getExtension"
      ]
    },
    "starterCode": "// Workshop TW 6 klasslarini yozing\nimport java.util.List;\nimport java.util.ArrayList;\nimport java.util.Queue;\nimport java.util.ArrayDeque;\n\ninterface IPrintable {\n    void print();\n}\n\nabstract class File implements IPrintable {\n    protected String title;\n    public File(String title) { this.title = title; }\n    public abstract String getExtension();\n    public void showHeader() {\n        System.out.println(\"=== \" + title + getExtension() + \" ===\");\n    }\n}\n\nclass SimpleDocument implements IPrintable {\n    private String name;\n    public SimpleDocument(String name) { this.name = name; }\n    @Override\n    public void print() { System.out.println(\"Hujjat chop etildi: \" + name); }\n}\n\nclass DummyFile extends File {\n    public DummyFile(String t) { super(t); }\n    @Override\n    public String getExtension() { return \".dat\"; }\n    @Override\n    public void print() { showHeader(); }\n}\n\nclass TextFile extends File {\n    private int wordCount;\n    public TextFile(String title, int words) { super(title); this.wordCount = words; }\n    @Override\n    public String getExtension() { return \".txt\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"So'zlar soni: \" + wordCount);\n    }\n}\n\nclass ImageFile extends File {\n    private int width;\n    private int height;\n    public ImageFile(String title, int w, int h) { super(title); this.width = w; this.height = h; }\n    @Override\n    public String getExtension() { return \".png\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"O'lchamlari: \" + width + \"x\" + height + \" px\");\n    }\n}\n\nclass PrintableDocument implements IPrintable {\n    private String author;\n    private String text;\n    public PrintableDocument(String a, String t) { this.author = a; this.text = t; }\n    @Override\n    public void print() {\n        System.out.println(\"Chop etiluvchi hujjat [Muallif: \" + author + \"]: \" + text);\n    }\n}\n\nclass PdfDocument extends File {\n    private int pageCount;\n    public PdfDocument(String title, int pages) { super(title); this.pageCount = pages; }\n    @Override\n    public String getExtension() { return \".pdf\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Sahifalar: \" + pageCount);\n    }\n}\n\nclass AudioTranscript extends File {\n    private int durationSeconds;\n    public AudioTranscript(String title, int dur) { super(title); this.durationSeconds = dur; }\n    @Override\n    public String getExtension() { return \".transcript\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Davomiylik: \" + durationSeconds + \" soniya\");\n    }\n}\n\nclass SpreadsheetFile extends File {\n    private int rows; private int cols;\n    public SpreadsheetFile(String title, int r, int c) { super(title); this.rows = r; this.cols = c; }\n    @Override\n    public String getExtension() { return \".xlsx\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Jadval hajmi: \" + rows + \" qator x \" + cols + \" ustun\");\n    }\n}\n\nclass SourceCodeFile extends File {\n    private int loc;\n    public SourceCodeFile(String title, int lines) { super(title); this.loc = lines; }\n    @Override\n    public String getExtension() { return \".java\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Kod qatorlari: \" + loc + \" LOC\");\n    }\n}\n\nclass ReceiptPrintout implements IPrintable {\n    private String store; private double total;\n    public ReceiptPrintout(String s, double t) { this.store = s; this.total = t; }\n    @Override\n    public void print() {\n        System.out.println(\"KASSA CHEKI: \" + store + \" | Jami to'lov: \" + total + \" UZS\");\n    }\n}\n\nclass ShippingLabelPrintout implements IPrintable {\n    private String code; private String addr;\n    public ShippingLabelPrintout(String c, String a) { this.code = c; this.addr = a; }\n    @Override\n    public void print() {\n        System.out.println(\"YETKAZISH YORLIG'I: \" + code + \" -> Manzil: \" + addr);\n    }\n}\n\nclass BatchPrinter {\n    private List<IPrintable> queue = new ArrayList<>();\n    public void addPrintable(IPrintable p) { queue.add(p); }\n    public int printAll() {\n        for (IPrintable p : queue) p.print();\n        return queue.size();\n    }\n}\n\nclass PrintQueueManager {\n    private Queue<IPrintable> q = new ArrayDeque<>();\n    public void enqueue(IPrintable p) { q.offer(p); }\n    public void processNext() { IPrintable p = q.poll(); if (p != null) p.print(); }\n    public int getPendingCount() { return q.size(); }\n}\n\nclass FileAuditService {\n    private List<File> files = new ArrayList<>();\n    public void registerFile(File f) { files.add(f); }\n    public int countByExtension(String ext) {\n        int c = 0;\n        for (File f : files) if (f.getExtension().equals(ext)) c++;\n        return c;\n    }\n}\n\nclass WorkshopMasterRunner {\n    public void runMasterDemo() {\n        IPrintable[] list = new IPrintable[] { new TextFile(\"notes\", 100), new ImageFile(\"logo\", 400, 300), new PrintableDocument(\"Valeriya\", \"Tayyor.\") };\n        for (IPrintable p : list) p.print();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        File f = new DummyFile(\"demo\");\n        f.showHeader();\n        System.out.println(\"Kengaytma: \" + f.getExtension());\n    }\n}",
    "solution": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Queue;\nimport java.util.ArrayDeque;\n\ninterface IPrintable {\n    void print();\n}\n\nabstract class File implements IPrintable {\n    protected String title;\n    public File(String title) { this.title = title; }\n    public abstract String getExtension();\n    public void showHeader() {\n        System.out.println(\"=== \" + title + getExtension() + \" ===\");\n    }\n}\n\nclass SimpleDocument implements IPrintable {\n    private String name;\n    public SimpleDocument(String name) { this.name = name; }\n    @Override\n    public void print() { System.out.println(\"Hujjat chop etildi: \" + name); }\n}\n\nclass DummyFile extends File {\n    public DummyFile(String t) { super(t); }\n    @Override\n    public String getExtension() { return \".dat\"; }\n    @Override\n    public void print() { showHeader(); }\n}\n\nclass TextFile extends File {\n    private int wordCount;\n    public TextFile(String title, int words) { super(title); this.wordCount = words; }\n    @Override\n    public String getExtension() { return \".txt\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"So'zlar soni: \" + wordCount);\n    }\n}\n\nclass ImageFile extends File {\n    private int width;\n    private int height;\n    public ImageFile(String title, int w, int h) { super(title); this.width = w; this.height = h; }\n    @Override\n    public String getExtension() { return \".png\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"O'lchamlari: \" + width + \"x\" + height + \" px\");\n    }\n}\n\nclass PrintableDocument implements IPrintable {\n    private String author;\n    private String text;\n    public PrintableDocument(String a, String t) { this.author = a; this.text = t; }\n    @Override\n    public void print() {\n        System.out.println(\"Chop etiluvchi hujjat [Muallif: \" + author + \"]: \" + text);\n    }\n}\n\nclass PdfDocument extends File {\n    private int pageCount;\n    public PdfDocument(String title, int pages) { super(title); this.pageCount = pages; }\n    @Override\n    public String getExtension() { return \".pdf\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Sahifalar: \" + pageCount);\n    }\n}\n\nclass AudioTranscript extends File {\n    private int durationSeconds;\n    public AudioTranscript(String title, int dur) { super(title); this.durationSeconds = dur; }\n    @Override\n    public String getExtension() { return \".transcript\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Davomiylik: \" + durationSeconds + \" soniya\");\n    }\n}\n\nclass SpreadsheetFile extends File {\n    private int rows; private int cols;\n    public SpreadsheetFile(String title, int r, int c) { super(title); this.rows = r; this.cols = c; }\n    @Override\n    public String getExtension() { return \".xlsx\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Jadval hajmi: \" + rows + \" qator x \" + cols + \" ustun\");\n    }\n}\n\nclass SourceCodeFile extends File {\n    private int loc;\n    public SourceCodeFile(String title, int lines) { super(title); this.loc = lines; }\n    @Override\n    public String getExtension() { return \".java\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Kod qatorlari: \" + loc + \" LOC\");\n    }\n}\n\nclass ReceiptPrintout implements IPrintable {\n    private String store; private double total;\n    public ReceiptPrintout(String s, double t) { this.store = s; this.total = t; }\n    @Override\n    public void print() {\n        System.out.println(\"KASSA CHEKI: \" + store + \" | Jami to'lov: \" + total + \" UZS\");\n    }\n}\n\nclass ShippingLabelPrintout implements IPrintable {\n    private String code; private String addr;\n    public ShippingLabelPrintout(String c, String a) { this.code = c; this.addr = a; }\n    @Override\n    public void print() {\n        System.out.println(\"YETKAZISH YORLIG'I: \" + code + \" -> Manzil: \" + addr);\n    }\n}\n\nclass BatchPrinter {\n    private List<IPrintable> queue = new ArrayList<>();\n    public void addPrintable(IPrintable p) { queue.add(p); }\n    public int printAll() {\n        for (IPrintable p : queue) p.print();\n        return queue.size();\n    }\n}\n\nclass PrintQueueManager {\n    private Queue<IPrintable> q = new ArrayDeque<>();\n    public void enqueue(IPrintable p) { q.offer(p); }\n    public void processNext() { IPrintable p = q.poll(); if (p != null) p.print(); }\n    public int getPendingCount() { return q.size(); }\n}\n\nclass FileAuditService {\n    private List<File> files = new ArrayList<>();\n    public void registerFile(File f) { files.add(f); }\n    public int countByExtension(String ext) {\n        int c = 0;\n        for (File f : files) if (f.getExtension().equals(ext)) c++;\n        return c;\n    }\n}\n\nclass WorkshopMasterRunner {\n    public void runMasterDemo() {\n        IPrintable[] list = new IPrintable[] { new TextFile(\"notes\", 100), new ImageFile(\"logo\", 400, 300), new PrintableDocument(\"Valeriya\", \"Tayyor.\") };\n        for (IPrintable p : list) p.print();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        File f = new DummyFile(\"demo\");\n        f.showHeader();\n        System.out.println(\"Kengaytma: \" + f.getExtension());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 'Workshop TW 6: Abstract Class & Interface' da IPrintable interfeysi va undan kelib chiquvchi 'abstract class File' tizimi ishlab chiqilgan. Bu laboratoriya ishi interfeys va abstrakt sinflarning real loyihada qanday birga ishlashini to'liq namoyon etadi.",
      "cleanCode": "interface IPrintable { void print(); }\nabstract class File implements IPrintable { ... }",
      "breakdown": [
        "<code>Workshop TW 6</code>: IPrintable va File polimorfik chop etish tizimi.",
        "<code>getExtension</code>: chop etish operatsiyasi."
      ]
    }
  },
  {
    "id": 123,
    "tier": 9,
    "tierName": "9-Bosqich: Workshop TW 6: Polimorfik Chop Etish Tizimi",
    "sector": "121-135: Workshop TW 6 Printing System",
    "title": {
      "uz": "123. Workshop TW 6 — 3-Qadam: TextFile Voris Sinfida .txt va So'zlar Soni",
      "en": "123. Workshop TW 6 — Step 3: TextFile Subclass with Word Count"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWorkshop 3-qadam: 'TextFile extends File'. Kengaytma sifatida '.txt' qaytaradi, 'wordCount' maydoniga ega bo'lib, 'print()' da 'showHeader()' va so'zlar sonini ekranga chiqaradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Workshop TW 6 spetsifikatsiyasi bo'yicha 'IPrintable' interfeysi va tegishli sinflarni tuzing.\n2. 'File' abstrakt sinfida 'showHeader()' umumiy metodini va 'abstract String getExtension()' ni e'lon qiling.\n3. Voris sinflarda kengaytma va chop etish logikasini (@Override) yozing.\n4. 'Main' metodida polimorfik chop etishni sinab ko'ring.\n5. Natijani chop eting: 'TextFile tf = new TextFile(\"notes\", 150);         tf.print();'",
      "en": "📖 Real-World Scenario & Context\nImplement TextFile subclass extending File and overriding print() and getExtension().\n\n📋 Required Implementation Steps (1 to 5)\n1. Implement IPrintable and File hierarchy matching Workshop TW 6.\n2. Declare shared showHeader() and abstract getExtension() in File base.\n3. Override print() and provide custom file metadata.\n4. Demonstrate polymorphic printing in 'main'.\n5. Print result to console: 'TextFile tf = new TextFile(\"notes\", 150);         tf.print();'"
    },
    "requirements": {
      "classes": [
        "TextFile",
        "Main"
      ],
      "methods": [
        "print"
      ]
    },
    "starterCode": "// Workshop TW 6 klasslarini yozing\nimport java.util.List;\nimport java.util.ArrayList;\nimport java.util.Queue;\nimport java.util.ArrayDeque;\n\ninterface IPrintable {\n    void print();\n}\n\nabstract class File implements IPrintable {\n    protected String title;\n    public File(String title) { this.title = title; }\n    public abstract String getExtension();\n    public void showHeader() {\n        System.out.println(\"=== \" + title + getExtension() + \" ===\");\n    }\n}\n\nclass SimpleDocument implements IPrintable {\n    private String name;\n    public SimpleDocument(String name) { this.name = name; }\n    @Override\n    public void print() { System.out.println(\"Hujjat chop etildi: \" + name); }\n}\n\nclass DummyFile extends File {\n    public DummyFile(String t) { super(t); }\n    @Override\n    public String getExtension() { return \".dat\"; }\n    @Override\n    public void print() { showHeader(); }\n}\n\nclass TextFile extends File {\n    private int wordCount;\n    public TextFile(String title, int words) { super(title); this.wordCount = words; }\n    @Override\n    public String getExtension() { return \".txt\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"So'zlar soni: \" + wordCount);\n    }\n}\n\nclass ImageFile extends File {\n    private int width;\n    private int height;\n    public ImageFile(String title, int w, int h) { super(title); this.width = w; this.height = h; }\n    @Override\n    public String getExtension() { return \".png\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"O'lchamlari: \" + width + \"x\" + height + \" px\");\n    }\n}\n\nclass PrintableDocument implements IPrintable {\n    private String author;\n    private String text;\n    public PrintableDocument(String a, String t) { this.author = a; this.text = t; }\n    @Override\n    public void print() {\n        System.out.println(\"Chop etiluvchi hujjat [Muallif: \" + author + \"]: \" + text);\n    }\n}\n\nclass PdfDocument extends File {\n    private int pageCount;\n    public PdfDocument(String title, int pages) { super(title); this.pageCount = pages; }\n    @Override\n    public String getExtension() { return \".pdf\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Sahifalar: \" + pageCount);\n    }\n}\n\nclass AudioTranscript extends File {\n    private int durationSeconds;\n    public AudioTranscript(String title, int dur) { super(title); this.durationSeconds = dur; }\n    @Override\n    public String getExtension() { return \".transcript\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Davomiylik: \" + durationSeconds + \" soniya\");\n    }\n}\n\nclass SpreadsheetFile extends File {\n    private int rows; private int cols;\n    public SpreadsheetFile(String title, int r, int c) { super(title); this.rows = r; this.cols = c; }\n    @Override\n    public String getExtension() { return \".xlsx\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Jadval hajmi: \" + rows + \" qator x \" + cols + \" ustun\");\n    }\n}\n\nclass SourceCodeFile extends File {\n    private int loc;\n    public SourceCodeFile(String title, int lines) { super(title); this.loc = lines; }\n    @Override\n    public String getExtension() { return \".java\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Kod qatorlari: \" + loc + \" LOC\");\n    }\n}\n\nclass ReceiptPrintout implements IPrintable {\n    private String store; private double total;\n    public ReceiptPrintout(String s, double t) { this.store = s; this.total = t; }\n    @Override\n    public void print() {\n        System.out.println(\"KASSA CHEKI: \" + store + \" | Jami to'lov: \" + total + \" UZS\");\n    }\n}\n\nclass ShippingLabelPrintout implements IPrintable {\n    private String code; private String addr;\n    public ShippingLabelPrintout(String c, String a) { this.code = c; this.addr = a; }\n    @Override\n    public void print() {\n        System.out.println(\"YETKAZISH YORLIG'I: \" + code + \" -> Manzil: \" + addr);\n    }\n}\n\nclass BatchPrinter {\n    private List<IPrintable> queue = new ArrayList<>();\n    public void addPrintable(IPrintable p) { queue.add(p); }\n    public int printAll() {\n        for (IPrintable p : queue) p.print();\n        return queue.size();\n    }\n}\n\nclass PrintQueueManager {\n    private Queue<IPrintable> q = new ArrayDeque<>();\n    public void enqueue(IPrintable p) { q.offer(p); }\n    public void processNext() { IPrintable p = q.poll(); if (p != null) p.print(); }\n    public int getPendingCount() { return q.size(); }\n}\n\nclass FileAuditService {\n    private List<File> files = new ArrayList<>();\n    public void registerFile(File f) { files.add(f); }\n    public int countByExtension(String ext) {\n        int c = 0;\n        for (File f : files) if (f.getExtension().equals(ext)) c++;\n        return c;\n    }\n}\n\nclass WorkshopMasterRunner {\n    public void runMasterDemo() {\n        IPrintable[] list = new IPrintable[] { new TextFile(\"notes\", 100), new ImageFile(\"logo\", 400, 300), new PrintableDocument(\"Valeriya\", \"Tayyor.\") };\n        for (IPrintable p : list) p.print();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TextFile tf = new TextFile(\"notes\", 150);\n        tf.print();\n    }\n}",
    "solution": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Queue;\nimport java.util.ArrayDeque;\n\ninterface IPrintable {\n    void print();\n}\n\nabstract class File implements IPrintable {\n    protected String title;\n    public File(String title) { this.title = title; }\n    public abstract String getExtension();\n    public void showHeader() {\n        System.out.println(\"=== \" + title + getExtension() + \" ===\");\n    }\n}\n\nclass SimpleDocument implements IPrintable {\n    private String name;\n    public SimpleDocument(String name) { this.name = name; }\n    @Override\n    public void print() { System.out.println(\"Hujjat chop etildi: \" + name); }\n}\n\nclass DummyFile extends File {\n    public DummyFile(String t) { super(t); }\n    @Override\n    public String getExtension() { return \".dat\"; }\n    @Override\n    public void print() { showHeader(); }\n}\n\nclass TextFile extends File {\n    private int wordCount;\n    public TextFile(String title, int words) { super(title); this.wordCount = words; }\n    @Override\n    public String getExtension() { return \".txt\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"So'zlar soni: \" + wordCount);\n    }\n}\n\nclass ImageFile extends File {\n    private int width;\n    private int height;\n    public ImageFile(String title, int w, int h) { super(title); this.width = w; this.height = h; }\n    @Override\n    public String getExtension() { return \".png\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"O'lchamlari: \" + width + \"x\" + height + \" px\");\n    }\n}\n\nclass PrintableDocument implements IPrintable {\n    private String author;\n    private String text;\n    public PrintableDocument(String a, String t) { this.author = a; this.text = t; }\n    @Override\n    public void print() {\n        System.out.println(\"Chop etiluvchi hujjat [Muallif: \" + author + \"]: \" + text);\n    }\n}\n\nclass PdfDocument extends File {\n    private int pageCount;\n    public PdfDocument(String title, int pages) { super(title); this.pageCount = pages; }\n    @Override\n    public String getExtension() { return \".pdf\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Sahifalar: \" + pageCount);\n    }\n}\n\nclass AudioTranscript extends File {\n    private int durationSeconds;\n    public AudioTranscript(String title, int dur) { super(title); this.durationSeconds = dur; }\n    @Override\n    public String getExtension() { return \".transcript\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Davomiylik: \" + durationSeconds + \" soniya\");\n    }\n}\n\nclass SpreadsheetFile extends File {\n    private int rows; private int cols;\n    public SpreadsheetFile(String title, int r, int c) { super(title); this.rows = r; this.cols = c; }\n    @Override\n    public String getExtension() { return \".xlsx\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Jadval hajmi: \" + rows + \" qator x \" + cols + \" ustun\");\n    }\n}\n\nclass SourceCodeFile extends File {\n    private int loc;\n    public SourceCodeFile(String title, int lines) { super(title); this.loc = lines; }\n    @Override\n    public String getExtension() { return \".java\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Kod qatorlari: \" + loc + \" LOC\");\n    }\n}\n\nclass ReceiptPrintout implements IPrintable {\n    private String store; private double total;\n    public ReceiptPrintout(String s, double t) { this.store = s; this.total = t; }\n    @Override\n    public void print() {\n        System.out.println(\"KASSA CHEKI: \" + store + \" | Jami to'lov: \" + total + \" UZS\");\n    }\n}\n\nclass ShippingLabelPrintout implements IPrintable {\n    private String code; private String addr;\n    public ShippingLabelPrintout(String c, String a) { this.code = c; this.addr = a; }\n    @Override\n    public void print() {\n        System.out.println(\"YETKAZISH YORLIG'I: \" + code + \" -> Manzil: \" + addr);\n    }\n}\n\nclass BatchPrinter {\n    private List<IPrintable> queue = new ArrayList<>();\n    public void addPrintable(IPrintable p) { queue.add(p); }\n    public int printAll() {\n        for (IPrintable p : queue) p.print();\n        return queue.size();\n    }\n}\n\nclass PrintQueueManager {\n    private Queue<IPrintable> q = new ArrayDeque<>();\n    public void enqueue(IPrintable p) { q.offer(p); }\n    public void processNext() { IPrintable p = q.poll(); if (p != null) p.print(); }\n    public int getPendingCount() { return q.size(); }\n}\n\nclass FileAuditService {\n    private List<File> files = new ArrayList<>();\n    public void registerFile(File f) { files.add(f); }\n    public int countByExtension(String ext) {\n        int c = 0;\n        for (File f : files) if (f.getExtension().equals(ext)) c++;\n        return c;\n    }\n}\n\nclass WorkshopMasterRunner {\n    public void runMasterDemo() {\n        IPrintable[] list = new IPrintable[] { new TextFile(\"notes\", 100), new ImageFile(\"logo\", 400, 300), new PrintableDocument(\"Valeriya\", \"Tayyor.\") };\n        for (IPrintable p : list) p.print();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TextFile tf = new TextFile(\"notes\", 150);\n        tf.print();\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 'Workshop TW 6: Abstract Class & Interface' da IPrintable interfeysi va undan kelib chiquvchi 'abstract class File' tizimi ishlab chiqilgan. Bu laboratoriya ishi interfeys va abstrakt sinflarning real loyihada qanday birga ishlashini to'liq namoyon etadi.",
      "cleanCode": "interface IPrintable { void print(); }\nabstract class File implements IPrintable { ... }",
      "breakdown": [
        "<code>Workshop TW 6</code>: IPrintable va File polimorfik chop etish tizimi.",
        "<code>print</code>: chop etish operatsiyasi."
      ]
    }
  },
  {
    "id": 124,
    "tier": 9,
    "tierName": "9-Bosqich: Workshop TW 6: Polimorfik Chop Etish Tizimi",
    "sector": "121-135: Workshop TW 6 Printing System",
    "title": {
      "uz": "124. Workshop TW 6 — 4-Qadam: ImageFile Voris Sinfida .png va O'lchamlar",
      "en": "124. Workshop TW 6 — Step 4: ImageFile Subclass with Pixel Dimensions"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWorkshop 4-qadam: 'ImageFile extends File'. Kengaytma '.png', 'width' va 'height' piksellariga ega. 'print()' metodi o'lchamlarni ekranga chiqaradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Workshop TW 6 spetsifikatsiyasi bo'yicha 'IPrintable' interfeysi va tegishli sinflarni tuzing.\n2. 'File' abstrakt sinfida 'showHeader()' umumiy metodini va 'abstract String getExtension()' ni e'lon qiling.\n3. Voris sinflarda kengaytma va chop etish logikasini (@Override) yozing.\n4. 'Main' metodida polimorfik chop etishni sinab ko'ring.\n5. Natijani chop eting: 'ImageFile img = new ImageFile(\"logo\", 800, 600);         img.print();'",
      "en": "📖 Real-World Scenario & Context\nImplement ImageFile extending File returning .png and outputting pixel dimensions.\n\n📋 Required Implementation Steps (1 to 5)\n1. Implement IPrintable and File hierarchy matching Workshop TW 6.\n2. Declare shared showHeader() and abstract getExtension() in File base.\n3. Override print() and provide custom file metadata.\n4. Demonstrate polymorphic printing in 'main'.\n5. Print result to console: 'ImageFile img = new ImageFile(\"logo\", 800, 600);         img.print();'"
    },
    "requirements": {
      "classes": [
        "ImageFile",
        "Main"
      ],
      "methods": [
        "print"
      ]
    },
    "starterCode": "// Workshop TW 6 klasslarini yozing\nimport java.util.List;\nimport java.util.ArrayList;\nimport java.util.Queue;\nimport java.util.ArrayDeque;\n\ninterface IPrintable {\n    void print();\n}\n\nabstract class File implements IPrintable {\n    protected String title;\n    public File(String title) { this.title = title; }\n    public abstract String getExtension();\n    public void showHeader() {\n        System.out.println(\"=== \" + title + getExtension() + \" ===\");\n    }\n}\n\nclass SimpleDocument implements IPrintable {\n    private String name;\n    public SimpleDocument(String name) { this.name = name; }\n    @Override\n    public void print() { System.out.println(\"Hujjat chop etildi: \" + name); }\n}\n\nclass DummyFile extends File {\n    public DummyFile(String t) { super(t); }\n    @Override\n    public String getExtension() { return \".dat\"; }\n    @Override\n    public void print() { showHeader(); }\n}\n\nclass TextFile extends File {\n    private int wordCount;\n    public TextFile(String title, int words) { super(title); this.wordCount = words; }\n    @Override\n    public String getExtension() { return \".txt\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"So'zlar soni: \" + wordCount);\n    }\n}\n\nclass ImageFile extends File {\n    private int width;\n    private int height;\n    public ImageFile(String title, int w, int h) { super(title); this.width = w; this.height = h; }\n    @Override\n    public String getExtension() { return \".png\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"O'lchamlari: \" + width + \"x\" + height + \" px\");\n    }\n}\n\nclass PrintableDocument implements IPrintable {\n    private String author;\n    private String text;\n    public PrintableDocument(String a, String t) { this.author = a; this.text = t; }\n    @Override\n    public void print() {\n        System.out.println(\"Chop etiluvchi hujjat [Muallif: \" + author + \"]: \" + text);\n    }\n}\n\nclass PdfDocument extends File {\n    private int pageCount;\n    public PdfDocument(String title, int pages) { super(title); this.pageCount = pages; }\n    @Override\n    public String getExtension() { return \".pdf\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Sahifalar: \" + pageCount);\n    }\n}\n\nclass AudioTranscript extends File {\n    private int durationSeconds;\n    public AudioTranscript(String title, int dur) { super(title); this.durationSeconds = dur; }\n    @Override\n    public String getExtension() { return \".transcript\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Davomiylik: \" + durationSeconds + \" soniya\");\n    }\n}\n\nclass SpreadsheetFile extends File {\n    private int rows; private int cols;\n    public SpreadsheetFile(String title, int r, int c) { super(title); this.rows = r; this.cols = c; }\n    @Override\n    public String getExtension() { return \".xlsx\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Jadval hajmi: \" + rows + \" qator x \" + cols + \" ustun\");\n    }\n}\n\nclass SourceCodeFile extends File {\n    private int loc;\n    public SourceCodeFile(String title, int lines) { super(title); this.loc = lines; }\n    @Override\n    public String getExtension() { return \".java\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Kod qatorlari: \" + loc + \" LOC\");\n    }\n}\n\nclass ReceiptPrintout implements IPrintable {\n    private String store; private double total;\n    public ReceiptPrintout(String s, double t) { this.store = s; this.total = t; }\n    @Override\n    public void print() {\n        System.out.println(\"KASSA CHEKI: \" + store + \" | Jami to'lov: \" + total + \" UZS\");\n    }\n}\n\nclass ShippingLabelPrintout implements IPrintable {\n    private String code; private String addr;\n    public ShippingLabelPrintout(String c, String a) { this.code = c; this.addr = a; }\n    @Override\n    public void print() {\n        System.out.println(\"YETKAZISH YORLIG'I: \" + code + \" -> Manzil: \" + addr);\n    }\n}\n\nclass BatchPrinter {\n    private List<IPrintable> queue = new ArrayList<>();\n    public void addPrintable(IPrintable p) { queue.add(p); }\n    public int printAll() {\n        for (IPrintable p : queue) p.print();\n        return queue.size();\n    }\n}\n\nclass PrintQueueManager {\n    private Queue<IPrintable> q = new ArrayDeque<>();\n    public void enqueue(IPrintable p) { q.offer(p); }\n    public void processNext() { IPrintable p = q.poll(); if (p != null) p.print(); }\n    public int getPendingCount() { return q.size(); }\n}\n\nclass FileAuditService {\n    private List<File> files = new ArrayList<>();\n    public void registerFile(File f) { files.add(f); }\n    public int countByExtension(String ext) {\n        int c = 0;\n        for (File f : files) if (f.getExtension().equals(ext)) c++;\n        return c;\n    }\n}\n\nclass WorkshopMasterRunner {\n    public void runMasterDemo() {\n        IPrintable[] list = new IPrintable[] { new TextFile(\"notes\", 100), new ImageFile(\"logo\", 400, 300), new PrintableDocument(\"Valeriya\", \"Tayyor.\") };\n        for (IPrintable p : list) p.print();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ImageFile img = new ImageFile(\"logo\", 800, 600);\n        img.print();\n    }\n}",
    "solution": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Queue;\nimport java.util.ArrayDeque;\n\ninterface IPrintable {\n    void print();\n}\n\nabstract class File implements IPrintable {\n    protected String title;\n    public File(String title) { this.title = title; }\n    public abstract String getExtension();\n    public void showHeader() {\n        System.out.println(\"=== \" + title + getExtension() + \" ===\");\n    }\n}\n\nclass SimpleDocument implements IPrintable {\n    private String name;\n    public SimpleDocument(String name) { this.name = name; }\n    @Override\n    public void print() { System.out.println(\"Hujjat chop etildi: \" + name); }\n}\n\nclass DummyFile extends File {\n    public DummyFile(String t) { super(t); }\n    @Override\n    public String getExtension() { return \".dat\"; }\n    @Override\n    public void print() { showHeader(); }\n}\n\nclass TextFile extends File {\n    private int wordCount;\n    public TextFile(String title, int words) { super(title); this.wordCount = words; }\n    @Override\n    public String getExtension() { return \".txt\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"So'zlar soni: \" + wordCount);\n    }\n}\n\nclass ImageFile extends File {\n    private int width;\n    private int height;\n    public ImageFile(String title, int w, int h) { super(title); this.width = w; this.height = h; }\n    @Override\n    public String getExtension() { return \".png\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"O'lchamlari: \" + width + \"x\" + height + \" px\");\n    }\n}\n\nclass PrintableDocument implements IPrintable {\n    private String author;\n    private String text;\n    public PrintableDocument(String a, String t) { this.author = a; this.text = t; }\n    @Override\n    public void print() {\n        System.out.println(\"Chop etiluvchi hujjat [Muallif: \" + author + \"]: \" + text);\n    }\n}\n\nclass PdfDocument extends File {\n    private int pageCount;\n    public PdfDocument(String title, int pages) { super(title); this.pageCount = pages; }\n    @Override\n    public String getExtension() { return \".pdf\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Sahifalar: \" + pageCount);\n    }\n}\n\nclass AudioTranscript extends File {\n    private int durationSeconds;\n    public AudioTranscript(String title, int dur) { super(title); this.durationSeconds = dur; }\n    @Override\n    public String getExtension() { return \".transcript\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Davomiylik: \" + durationSeconds + \" soniya\");\n    }\n}\n\nclass SpreadsheetFile extends File {\n    private int rows; private int cols;\n    public SpreadsheetFile(String title, int r, int c) { super(title); this.rows = r; this.cols = c; }\n    @Override\n    public String getExtension() { return \".xlsx\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Jadval hajmi: \" + rows + \" qator x \" + cols + \" ustun\");\n    }\n}\n\nclass SourceCodeFile extends File {\n    private int loc;\n    public SourceCodeFile(String title, int lines) { super(title); this.loc = lines; }\n    @Override\n    public String getExtension() { return \".java\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Kod qatorlari: \" + loc + \" LOC\");\n    }\n}\n\nclass ReceiptPrintout implements IPrintable {\n    private String store; private double total;\n    public ReceiptPrintout(String s, double t) { this.store = s; this.total = t; }\n    @Override\n    public void print() {\n        System.out.println(\"KASSA CHEKI: \" + store + \" | Jami to'lov: \" + total + \" UZS\");\n    }\n}\n\nclass ShippingLabelPrintout implements IPrintable {\n    private String code; private String addr;\n    public ShippingLabelPrintout(String c, String a) { this.code = c; this.addr = a; }\n    @Override\n    public void print() {\n        System.out.println(\"YETKAZISH YORLIG'I: \" + code + \" -> Manzil: \" + addr);\n    }\n}\n\nclass BatchPrinter {\n    private List<IPrintable> queue = new ArrayList<>();\n    public void addPrintable(IPrintable p) { queue.add(p); }\n    public int printAll() {\n        for (IPrintable p : queue) p.print();\n        return queue.size();\n    }\n}\n\nclass PrintQueueManager {\n    private Queue<IPrintable> q = new ArrayDeque<>();\n    public void enqueue(IPrintable p) { q.offer(p); }\n    public void processNext() { IPrintable p = q.poll(); if (p != null) p.print(); }\n    public int getPendingCount() { return q.size(); }\n}\n\nclass FileAuditService {\n    private List<File> files = new ArrayList<>();\n    public void registerFile(File f) { files.add(f); }\n    public int countByExtension(String ext) {\n        int c = 0;\n        for (File f : files) if (f.getExtension().equals(ext)) c++;\n        return c;\n    }\n}\n\nclass WorkshopMasterRunner {\n    public void runMasterDemo() {\n        IPrintable[] list = new IPrintable[] { new TextFile(\"notes\", 100), new ImageFile(\"logo\", 400, 300), new PrintableDocument(\"Valeriya\", \"Tayyor.\") };\n        for (IPrintable p : list) p.print();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ImageFile img = new ImageFile(\"logo\", 800, 600);\n        img.print();\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 'Workshop TW 6: Abstract Class & Interface' da IPrintable interfeysi va undan kelib chiquvchi 'abstract class File' tizimi ishlab chiqilgan. Bu laboratoriya ishi interfeys va abstrakt sinflarning real loyihada qanday birga ishlashini to'liq namoyon etadi.",
      "cleanCode": "interface IPrintable { void print(); }\nabstract class File implements IPrintable { ... }",
      "breakdown": [
        "<code>Workshop TW 6</code>: IPrintable va File polimorfik chop etish tizimi.",
        "<code>print</code>: chop etish operatsiyasi."
      ]
    }
  },
  {
    "id": 125,
    "tier": 9,
    "tierName": "9-Bosqich: Workshop TW 6: Polimorfik Chop Etish Tizimi",
    "sector": "121-135: Workshop TW 6 Printing System",
    "title": {
      "uz": "125. Workshop TW 6 — 5-Qadam: Mustaqil PrintableDocument (File dan Meros Olmagan)",
      "en": "125. Workshop TW 6 — Step 5: Standalone PrintableDocument Realization"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWorkshop 5-qadam: 'PrintableDocument implements IPrintable' (lekin File dan meros olmaydi!). Bu interfeyslarning bog'liq bo'lmagan sinflarni birlashtirish kuchini ko'rsatadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Workshop TW 6 spetsifikatsiyasi bo'yicha 'IPrintable' interfeysi va tegishli sinflarni tuzing.\n2. 'File' abstrakt sinfida 'showHeader()' umumiy metodini va 'abstract String getExtension()' ni e'lon qiling.\n3. Voris sinflarda kengaytma va chop etish logikasini (@Override) yozing.\n4. 'Main' metodida polimorfik chop etishni sinab ko'ring.\n5. Natijani chop eting: 'IPrintable doc = new PrintableDocument(\"Valeriya Tsoy\", \"Workshop 6 vazifalari yakunlandi.\");         doc.print();'",
      "en": "📖 Real-World Scenario & Context\nDemonstrate interface polymorphism by creating PrintableDocument unrelated to File class hierarchy.\n\n📋 Required Implementation Steps (1 to 5)\n1. Implement IPrintable and File hierarchy matching Workshop TW 6.\n2. Declare shared showHeader() and abstract getExtension() in File base.\n3. Override print() and provide custom file metadata.\n4. Demonstrate polymorphic printing in 'main'.\n5. Print result to console: 'IPrintable doc = new PrintableDocument(\"Valeriya Tsoy\", \"Workshop 6 vazifalari yakunlandi.\");         doc.print();'"
    },
    "requirements": {
      "classes": [
        "PrintableDocument",
        "Main"
      ],
      "methods": [
        "print"
      ]
    },
    "starterCode": "// Workshop TW 6 klasslarini yozing\nimport java.util.List;\nimport java.util.ArrayList;\nimport java.util.Queue;\nimport java.util.ArrayDeque;\n\ninterface IPrintable {\n    void print();\n}\n\nabstract class File implements IPrintable {\n    protected String title;\n    public File(String title) { this.title = title; }\n    public abstract String getExtension();\n    public void showHeader() {\n        System.out.println(\"=== \" + title + getExtension() + \" ===\");\n    }\n}\n\nclass SimpleDocument implements IPrintable {\n    private String name;\n    public SimpleDocument(String name) { this.name = name; }\n    @Override\n    public void print() { System.out.println(\"Hujjat chop etildi: \" + name); }\n}\n\nclass DummyFile extends File {\n    public DummyFile(String t) { super(t); }\n    @Override\n    public String getExtension() { return \".dat\"; }\n    @Override\n    public void print() { showHeader(); }\n}\n\nclass TextFile extends File {\n    private int wordCount;\n    public TextFile(String title, int words) { super(title); this.wordCount = words; }\n    @Override\n    public String getExtension() { return \".txt\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"So'zlar soni: \" + wordCount);\n    }\n}\n\nclass ImageFile extends File {\n    private int width;\n    private int height;\n    public ImageFile(String title, int w, int h) { super(title); this.width = w; this.height = h; }\n    @Override\n    public String getExtension() { return \".png\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"O'lchamlari: \" + width + \"x\" + height + \" px\");\n    }\n}\n\nclass PrintableDocument implements IPrintable {\n    private String author;\n    private String text;\n    public PrintableDocument(String a, String t) { this.author = a; this.text = t; }\n    @Override\n    public void print() {\n        System.out.println(\"Chop etiluvchi hujjat [Muallif: \" + author + \"]: \" + text);\n    }\n}\n\nclass PdfDocument extends File {\n    private int pageCount;\n    public PdfDocument(String title, int pages) { super(title); this.pageCount = pages; }\n    @Override\n    public String getExtension() { return \".pdf\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Sahifalar: \" + pageCount);\n    }\n}\n\nclass AudioTranscript extends File {\n    private int durationSeconds;\n    public AudioTranscript(String title, int dur) { super(title); this.durationSeconds = dur; }\n    @Override\n    public String getExtension() { return \".transcript\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Davomiylik: \" + durationSeconds + \" soniya\");\n    }\n}\n\nclass SpreadsheetFile extends File {\n    private int rows; private int cols;\n    public SpreadsheetFile(String title, int r, int c) { super(title); this.rows = r; this.cols = c; }\n    @Override\n    public String getExtension() { return \".xlsx\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Jadval hajmi: \" + rows + \" qator x \" + cols + \" ustun\");\n    }\n}\n\nclass SourceCodeFile extends File {\n    private int loc;\n    public SourceCodeFile(String title, int lines) { super(title); this.loc = lines; }\n    @Override\n    public String getExtension() { return \".java\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Kod qatorlari: \" + loc + \" LOC\");\n    }\n}\n\nclass ReceiptPrintout implements IPrintable {\n    private String store; private double total;\n    public ReceiptPrintout(String s, double t) { this.store = s; this.total = t; }\n    @Override\n    public void print() {\n        System.out.println(\"KASSA CHEKI: \" + store + \" | Jami to'lov: \" + total + \" UZS\");\n    }\n}\n\nclass ShippingLabelPrintout implements IPrintable {\n    private String code; private String addr;\n    public ShippingLabelPrintout(String c, String a) { this.code = c; this.addr = a; }\n    @Override\n    public void print() {\n        System.out.println(\"YETKAZISH YORLIG'I: \" + code + \" -> Manzil: \" + addr);\n    }\n}\n\nclass BatchPrinter {\n    private List<IPrintable> queue = new ArrayList<>();\n    public void addPrintable(IPrintable p) { queue.add(p); }\n    public int printAll() {\n        for (IPrintable p : queue) p.print();\n        return queue.size();\n    }\n}\n\nclass PrintQueueManager {\n    private Queue<IPrintable> q = new ArrayDeque<>();\n    public void enqueue(IPrintable p) { q.offer(p); }\n    public void processNext() { IPrintable p = q.poll(); if (p != null) p.print(); }\n    public int getPendingCount() { return q.size(); }\n}\n\nclass FileAuditService {\n    private List<File> files = new ArrayList<>();\n    public void registerFile(File f) { files.add(f); }\n    public int countByExtension(String ext) {\n        int c = 0;\n        for (File f : files) if (f.getExtension().equals(ext)) c++;\n        return c;\n    }\n}\n\nclass WorkshopMasterRunner {\n    public void runMasterDemo() {\n        IPrintable[] list = new IPrintable[] { new TextFile(\"notes\", 100), new ImageFile(\"logo\", 400, 300), new PrintableDocument(\"Valeriya\", \"Tayyor.\") };\n        for (IPrintable p : list) p.print();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IPrintable doc = new PrintableDocument(\"Valeriya Tsoy\", \"Workshop 6 vazifalari yakunlandi.\");\n        doc.print();\n    }\n}",
    "solution": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Queue;\nimport java.util.ArrayDeque;\n\ninterface IPrintable {\n    void print();\n}\n\nabstract class File implements IPrintable {\n    protected String title;\n    public File(String title) { this.title = title; }\n    public abstract String getExtension();\n    public void showHeader() {\n        System.out.println(\"=== \" + title + getExtension() + \" ===\");\n    }\n}\n\nclass SimpleDocument implements IPrintable {\n    private String name;\n    public SimpleDocument(String name) { this.name = name; }\n    @Override\n    public void print() { System.out.println(\"Hujjat chop etildi: \" + name); }\n}\n\nclass DummyFile extends File {\n    public DummyFile(String t) { super(t); }\n    @Override\n    public String getExtension() { return \".dat\"; }\n    @Override\n    public void print() { showHeader(); }\n}\n\nclass TextFile extends File {\n    private int wordCount;\n    public TextFile(String title, int words) { super(title); this.wordCount = words; }\n    @Override\n    public String getExtension() { return \".txt\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"So'zlar soni: \" + wordCount);\n    }\n}\n\nclass ImageFile extends File {\n    private int width;\n    private int height;\n    public ImageFile(String title, int w, int h) { super(title); this.width = w; this.height = h; }\n    @Override\n    public String getExtension() { return \".png\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"O'lchamlari: \" + width + \"x\" + height + \" px\");\n    }\n}\n\nclass PrintableDocument implements IPrintable {\n    private String author;\n    private String text;\n    public PrintableDocument(String a, String t) { this.author = a; this.text = t; }\n    @Override\n    public void print() {\n        System.out.println(\"Chop etiluvchi hujjat [Muallif: \" + author + \"]: \" + text);\n    }\n}\n\nclass PdfDocument extends File {\n    private int pageCount;\n    public PdfDocument(String title, int pages) { super(title); this.pageCount = pages; }\n    @Override\n    public String getExtension() { return \".pdf\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Sahifalar: \" + pageCount);\n    }\n}\n\nclass AudioTranscript extends File {\n    private int durationSeconds;\n    public AudioTranscript(String title, int dur) { super(title); this.durationSeconds = dur; }\n    @Override\n    public String getExtension() { return \".transcript\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Davomiylik: \" + durationSeconds + \" soniya\");\n    }\n}\n\nclass SpreadsheetFile extends File {\n    private int rows; private int cols;\n    public SpreadsheetFile(String title, int r, int c) { super(title); this.rows = r; this.cols = c; }\n    @Override\n    public String getExtension() { return \".xlsx\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Jadval hajmi: \" + rows + \" qator x \" + cols + \" ustun\");\n    }\n}\n\nclass SourceCodeFile extends File {\n    private int loc;\n    public SourceCodeFile(String title, int lines) { super(title); this.loc = lines; }\n    @Override\n    public String getExtension() { return \".java\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Kod qatorlari: \" + loc + \" LOC\");\n    }\n}\n\nclass ReceiptPrintout implements IPrintable {\n    private String store; private double total;\n    public ReceiptPrintout(String s, double t) { this.store = s; this.total = t; }\n    @Override\n    public void print() {\n        System.out.println(\"KASSA CHEKI: \" + store + \" | Jami to'lov: \" + total + \" UZS\");\n    }\n}\n\nclass ShippingLabelPrintout implements IPrintable {\n    private String code; private String addr;\n    public ShippingLabelPrintout(String c, String a) { this.code = c; this.addr = a; }\n    @Override\n    public void print() {\n        System.out.println(\"YETKAZISH YORLIG'I: \" + code + \" -> Manzil: \" + addr);\n    }\n}\n\nclass BatchPrinter {\n    private List<IPrintable> queue = new ArrayList<>();\n    public void addPrintable(IPrintable p) { queue.add(p); }\n    public int printAll() {\n        for (IPrintable p : queue) p.print();\n        return queue.size();\n    }\n}\n\nclass PrintQueueManager {\n    private Queue<IPrintable> q = new ArrayDeque<>();\n    public void enqueue(IPrintable p) { q.offer(p); }\n    public void processNext() { IPrintable p = q.poll(); if (p != null) p.print(); }\n    public int getPendingCount() { return q.size(); }\n}\n\nclass FileAuditService {\n    private List<File> files = new ArrayList<>();\n    public void registerFile(File f) { files.add(f); }\n    public int countByExtension(String ext) {\n        int c = 0;\n        for (File f : files) if (f.getExtension().equals(ext)) c++;\n        return c;\n    }\n}\n\nclass WorkshopMasterRunner {\n    public void runMasterDemo() {\n        IPrintable[] list = new IPrintable[] { new TextFile(\"notes\", 100), new ImageFile(\"logo\", 400, 300), new PrintableDocument(\"Valeriya\", \"Tayyor.\") };\n        for (IPrintable p : list) p.print();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IPrintable doc = new PrintableDocument(\"Valeriya Tsoy\", \"Workshop 6 vazifalari yakunlandi.\");\n        doc.print();\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 'Workshop TW 6: Abstract Class & Interface' da IPrintable interfeysi va undan kelib chiquvchi 'abstract class File' tizimi ishlab chiqilgan. Bu laboratoriya ishi interfeys va abstrakt sinflarning real loyihada qanday birga ishlashini to'liq namoyon etadi.",
      "cleanCode": "interface IPrintable { void print(); }\nabstract class File implements IPrintable { ... }",
      "breakdown": [
        "<code>Workshop TW 6</code>: IPrintable va File polimorfik chop etish tizimi.",
        "<code>print</code>: chop etish operatsiyasi."
      ]
    }
  },
  {
    "id": 126,
    "tier": 9,
    "tierName": "9-Bosqich: Workshop TW 6: Polimorfik Chop Etish Tizimi",
    "sector": "121-135: Workshop TW 6 Printing System",
    "title": {
      "uz": "126. Workshop Kengaytmasi — PdfDocument: Sahifalar Soni va .pdf",
      "en": "126. Workshop Extension — PdfDocument Subclass with Page Count"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWorkshop modelini kengaytiring: 'PdfDocument extends File'. Kengaytma '.pdf' bo'lib, sahifalar sonini (pageCount) saqlaydi va chop etadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Workshop TW 6 spetsifikatsiyasi bo'yicha 'IPrintable' interfeysi va tegishli sinflarni tuzing.\n2. 'File' abstrakt sinfida 'showHeader()' umumiy metodini va 'abstract String getExtension()' ni e'lon qiling.\n3. Voris sinflarda kengaytma va chop etish logikasini (@Override) yozing.\n4. 'Main' metodida polimorfik chop etishni sinab ko'ring.\n5. Natijani chop eting: 'PdfDocument pdf = new PdfDocument(\"OOP_Syllabus\", 24);         pdf.print();'",
      "en": "📖 Real-World Scenario & Context\nExtend File hierarchy with PdfDocument outputting page count metadata.\n\n📋 Required Implementation Steps (1 to 5)\n1. Implement IPrintable and File hierarchy matching Workshop TW 6.\n2. Declare shared showHeader() and abstract getExtension() in File base.\n3. Override print() and provide custom file metadata.\n4. Demonstrate polymorphic printing in 'main'.\n5. Print result to console: 'PdfDocument pdf = new PdfDocument(\"OOP_Syllabus\", 24);         pdf.print();'"
    },
    "requirements": {
      "classes": [
        "PdfDocument",
        "Main"
      ],
      "methods": [
        "print"
      ]
    },
    "starterCode": "// Workshop TW 6 klasslarini yozing\nimport java.util.List;\nimport java.util.ArrayList;\nimport java.util.Queue;\nimport java.util.ArrayDeque;\n\ninterface IPrintable {\n    void print();\n}\n\nabstract class File implements IPrintable {\n    protected String title;\n    public File(String title) { this.title = title; }\n    public abstract String getExtension();\n    public void showHeader() {\n        System.out.println(\"=== \" + title + getExtension() + \" ===\");\n    }\n}\n\nclass SimpleDocument implements IPrintable {\n    private String name;\n    public SimpleDocument(String name) { this.name = name; }\n    @Override\n    public void print() { System.out.println(\"Hujjat chop etildi: \" + name); }\n}\n\nclass DummyFile extends File {\n    public DummyFile(String t) { super(t); }\n    @Override\n    public String getExtension() { return \".dat\"; }\n    @Override\n    public void print() { showHeader(); }\n}\n\nclass TextFile extends File {\n    private int wordCount;\n    public TextFile(String title, int words) { super(title); this.wordCount = words; }\n    @Override\n    public String getExtension() { return \".txt\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"So'zlar soni: \" + wordCount);\n    }\n}\n\nclass ImageFile extends File {\n    private int width;\n    private int height;\n    public ImageFile(String title, int w, int h) { super(title); this.width = w; this.height = h; }\n    @Override\n    public String getExtension() { return \".png\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"O'lchamlari: \" + width + \"x\" + height + \" px\");\n    }\n}\n\nclass PrintableDocument implements IPrintable {\n    private String author;\n    private String text;\n    public PrintableDocument(String a, String t) { this.author = a; this.text = t; }\n    @Override\n    public void print() {\n        System.out.println(\"Chop etiluvchi hujjat [Muallif: \" + author + \"]: \" + text);\n    }\n}\n\nclass PdfDocument extends File {\n    private int pageCount;\n    public PdfDocument(String title, int pages) { super(title); this.pageCount = pages; }\n    @Override\n    public String getExtension() { return \".pdf\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Sahifalar: \" + pageCount);\n    }\n}\n\nclass AudioTranscript extends File {\n    private int durationSeconds;\n    public AudioTranscript(String title, int dur) { super(title); this.durationSeconds = dur; }\n    @Override\n    public String getExtension() { return \".transcript\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Davomiylik: \" + durationSeconds + \" soniya\");\n    }\n}\n\nclass SpreadsheetFile extends File {\n    private int rows; private int cols;\n    public SpreadsheetFile(String title, int r, int c) { super(title); this.rows = r; this.cols = c; }\n    @Override\n    public String getExtension() { return \".xlsx\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Jadval hajmi: \" + rows + \" qator x \" + cols + \" ustun\");\n    }\n}\n\nclass SourceCodeFile extends File {\n    private int loc;\n    public SourceCodeFile(String title, int lines) { super(title); this.loc = lines; }\n    @Override\n    public String getExtension() { return \".java\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Kod qatorlari: \" + loc + \" LOC\");\n    }\n}\n\nclass ReceiptPrintout implements IPrintable {\n    private String store; private double total;\n    public ReceiptPrintout(String s, double t) { this.store = s; this.total = t; }\n    @Override\n    public void print() {\n        System.out.println(\"KASSA CHEKI: \" + store + \" | Jami to'lov: \" + total + \" UZS\");\n    }\n}\n\nclass ShippingLabelPrintout implements IPrintable {\n    private String code; private String addr;\n    public ShippingLabelPrintout(String c, String a) { this.code = c; this.addr = a; }\n    @Override\n    public void print() {\n        System.out.println(\"YETKAZISH YORLIG'I: \" + code + \" -> Manzil: \" + addr);\n    }\n}\n\nclass BatchPrinter {\n    private List<IPrintable> queue = new ArrayList<>();\n    public void addPrintable(IPrintable p) { queue.add(p); }\n    public int printAll() {\n        for (IPrintable p : queue) p.print();\n        return queue.size();\n    }\n}\n\nclass PrintQueueManager {\n    private Queue<IPrintable> q = new ArrayDeque<>();\n    public void enqueue(IPrintable p) { q.offer(p); }\n    public void processNext() { IPrintable p = q.poll(); if (p != null) p.print(); }\n    public int getPendingCount() { return q.size(); }\n}\n\nclass FileAuditService {\n    private List<File> files = new ArrayList<>();\n    public void registerFile(File f) { files.add(f); }\n    public int countByExtension(String ext) {\n        int c = 0;\n        for (File f : files) if (f.getExtension().equals(ext)) c++;\n        return c;\n    }\n}\n\nclass WorkshopMasterRunner {\n    public void runMasterDemo() {\n        IPrintable[] list = new IPrintable[] { new TextFile(\"notes\", 100), new ImageFile(\"logo\", 400, 300), new PrintableDocument(\"Valeriya\", \"Tayyor.\") };\n        for (IPrintable p : list) p.print();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PdfDocument pdf = new PdfDocument(\"OOP_Syllabus\", 24);\n        pdf.print();\n    }\n}",
    "solution": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Queue;\nimport java.util.ArrayDeque;\n\ninterface IPrintable {\n    void print();\n}\n\nabstract class File implements IPrintable {\n    protected String title;\n    public File(String title) { this.title = title; }\n    public abstract String getExtension();\n    public void showHeader() {\n        System.out.println(\"=== \" + title + getExtension() + \" ===\");\n    }\n}\n\nclass SimpleDocument implements IPrintable {\n    private String name;\n    public SimpleDocument(String name) { this.name = name; }\n    @Override\n    public void print() { System.out.println(\"Hujjat chop etildi: \" + name); }\n}\n\nclass DummyFile extends File {\n    public DummyFile(String t) { super(t); }\n    @Override\n    public String getExtension() { return \".dat\"; }\n    @Override\n    public void print() { showHeader(); }\n}\n\nclass TextFile extends File {\n    private int wordCount;\n    public TextFile(String title, int words) { super(title); this.wordCount = words; }\n    @Override\n    public String getExtension() { return \".txt\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"So'zlar soni: \" + wordCount);\n    }\n}\n\nclass ImageFile extends File {\n    private int width;\n    private int height;\n    public ImageFile(String title, int w, int h) { super(title); this.width = w; this.height = h; }\n    @Override\n    public String getExtension() { return \".png\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"O'lchamlari: \" + width + \"x\" + height + \" px\");\n    }\n}\n\nclass PrintableDocument implements IPrintable {\n    private String author;\n    private String text;\n    public PrintableDocument(String a, String t) { this.author = a; this.text = t; }\n    @Override\n    public void print() {\n        System.out.println(\"Chop etiluvchi hujjat [Muallif: \" + author + \"]: \" + text);\n    }\n}\n\nclass PdfDocument extends File {\n    private int pageCount;\n    public PdfDocument(String title, int pages) { super(title); this.pageCount = pages; }\n    @Override\n    public String getExtension() { return \".pdf\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Sahifalar: \" + pageCount);\n    }\n}\n\nclass AudioTranscript extends File {\n    private int durationSeconds;\n    public AudioTranscript(String title, int dur) { super(title); this.durationSeconds = dur; }\n    @Override\n    public String getExtension() { return \".transcript\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Davomiylik: \" + durationSeconds + \" soniya\");\n    }\n}\n\nclass SpreadsheetFile extends File {\n    private int rows; private int cols;\n    public SpreadsheetFile(String title, int r, int c) { super(title); this.rows = r; this.cols = c; }\n    @Override\n    public String getExtension() { return \".xlsx\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Jadval hajmi: \" + rows + \" qator x \" + cols + \" ustun\");\n    }\n}\n\nclass SourceCodeFile extends File {\n    private int loc;\n    public SourceCodeFile(String title, int lines) { super(title); this.loc = lines; }\n    @Override\n    public String getExtension() { return \".java\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Kod qatorlari: \" + loc + \" LOC\");\n    }\n}\n\nclass ReceiptPrintout implements IPrintable {\n    private String store; private double total;\n    public ReceiptPrintout(String s, double t) { this.store = s; this.total = t; }\n    @Override\n    public void print() {\n        System.out.println(\"KASSA CHEKI: \" + store + \" | Jami to'lov: \" + total + \" UZS\");\n    }\n}\n\nclass ShippingLabelPrintout implements IPrintable {\n    private String code; private String addr;\n    public ShippingLabelPrintout(String c, String a) { this.code = c; this.addr = a; }\n    @Override\n    public void print() {\n        System.out.println(\"YETKAZISH YORLIG'I: \" + code + \" -> Manzil: \" + addr);\n    }\n}\n\nclass BatchPrinter {\n    private List<IPrintable> queue = new ArrayList<>();\n    public void addPrintable(IPrintable p) { queue.add(p); }\n    public int printAll() {\n        for (IPrintable p : queue) p.print();\n        return queue.size();\n    }\n}\n\nclass PrintQueueManager {\n    private Queue<IPrintable> q = new ArrayDeque<>();\n    public void enqueue(IPrintable p) { q.offer(p); }\n    public void processNext() { IPrintable p = q.poll(); if (p != null) p.print(); }\n    public int getPendingCount() { return q.size(); }\n}\n\nclass FileAuditService {\n    private List<File> files = new ArrayList<>();\n    public void registerFile(File f) { files.add(f); }\n    public int countByExtension(String ext) {\n        int c = 0;\n        for (File f : files) if (f.getExtension().equals(ext)) c++;\n        return c;\n    }\n}\n\nclass WorkshopMasterRunner {\n    public void runMasterDemo() {\n        IPrintable[] list = new IPrintable[] { new TextFile(\"notes\", 100), new ImageFile(\"logo\", 400, 300), new PrintableDocument(\"Valeriya\", \"Tayyor.\") };\n        for (IPrintable p : list) p.print();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PdfDocument pdf = new PdfDocument(\"OOP_Syllabus\", 24);\n        pdf.print();\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 'Workshop TW 6: Abstract Class & Interface' da IPrintable interfeysi va undan kelib chiquvchi 'abstract class File' tizimi ishlab chiqilgan. Bu laboratoriya ishi interfeys va abstrakt sinflarning real loyihada qanday birga ishlashini to'liq namoyon etadi.",
      "cleanCode": "interface IPrintable { void print(); }\nabstract class File implements IPrintable { ... }",
      "breakdown": [
        "<code>Workshop TW 6</code>: IPrintable va File polimorfik chop etish tizimi.",
        "<code>print</code>: chop etish operatsiyasi."
      ]
    }
  },
  {
    "id": 127,
    "tier": 9,
    "tierName": "9-Bosqich: Workshop TW 6: Polimorfik Chop Etish Tizimi",
    "sector": "121-135: Workshop TW 6 Printing System",
    "title": {
      "uz": "127. Workshop Kengaytmasi — AudioTranscript: .transcript va Davomiylik",
      "en": "127. Workshop Extension — AudioTranscript Subclass with Duration"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\n'AudioTranscript extends File'. Kengaytma '.transcript' bo'lib, audio yozuv davomiyligini (soniya) chop etadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Workshop TW 6 spetsifikatsiyasi bo'yicha 'IPrintable' interfeysi va tegishli sinflarni tuzing.\n2. 'File' abstrakt sinfida 'showHeader()' umumiy metodini va 'abstract String getExtension()' ni e'lon qiling.\n3. Voris sinflarda kengaytma va chop etish logikasini (@Override) yozing.\n4. 'Main' metodida polimorfik chop etishni sinab ko'ring.\n5. Natijani chop eting: 'AudioTranscript at = new AudioTranscript(\"Lecture_6_Audio\", 3600);         at.print();'",
      "en": "📖 Real-World Scenario & Context\nCreate AudioTranscript extending File displaying recorded duration.\n\n📋 Required Implementation Steps (1 to 5)\n1. Implement IPrintable and File hierarchy matching Workshop TW 6.\n2. Declare shared showHeader() and abstract getExtension() in File base.\n3. Override print() and provide custom file metadata.\n4. Demonstrate polymorphic printing in 'main'.\n5. Print result to console: 'AudioTranscript at = new AudioTranscript(\"Lecture_6_Audio\", 3600);         at.print();'"
    },
    "requirements": {
      "classes": [
        "AudioTranscript",
        "Main"
      ],
      "methods": [
        "print"
      ]
    },
    "starterCode": "// Workshop TW 6 klasslarini yozing\nimport java.util.List;\nimport java.util.ArrayList;\nimport java.util.Queue;\nimport java.util.ArrayDeque;\n\ninterface IPrintable {\n    void print();\n}\n\nabstract class File implements IPrintable {\n    protected String title;\n    public File(String title) { this.title = title; }\n    public abstract String getExtension();\n    public void showHeader() {\n        System.out.println(\"=== \" + title + getExtension() + \" ===\");\n    }\n}\n\nclass SimpleDocument implements IPrintable {\n    private String name;\n    public SimpleDocument(String name) { this.name = name; }\n    @Override\n    public void print() { System.out.println(\"Hujjat chop etildi: \" + name); }\n}\n\nclass DummyFile extends File {\n    public DummyFile(String t) { super(t); }\n    @Override\n    public String getExtension() { return \".dat\"; }\n    @Override\n    public void print() { showHeader(); }\n}\n\nclass TextFile extends File {\n    private int wordCount;\n    public TextFile(String title, int words) { super(title); this.wordCount = words; }\n    @Override\n    public String getExtension() { return \".txt\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"So'zlar soni: \" + wordCount);\n    }\n}\n\nclass ImageFile extends File {\n    private int width;\n    private int height;\n    public ImageFile(String title, int w, int h) { super(title); this.width = w; this.height = h; }\n    @Override\n    public String getExtension() { return \".png\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"O'lchamlari: \" + width + \"x\" + height + \" px\");\n    }\n}\n\nclass PrintableDocument implements IPrintable {\n    private String author;\n    private String text;\n    public PrintableDocument(String a, String t) { this.author = a; this.text = t; }\n    @Override\n    public void print() {\n        System.out.println(\"Chop etiluvchi hujjat [Muallif: \" + author + \"]: \" + text);\n    }\n}\n\nclass PdfDocument extends File {\n    private int pageCount;\n    public PdfDocument(String title, int pages) { super(title); this.pageCount = pages; }\n    @Override\n    public String getExtension() { return \".pdf\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Sahifalar: \" + pageCount);\n    }\n}\n\nclass AudioTranscript extends File {\n    private int durationSeconds;\n    public AudioTranscript(String title, int dur) { super(title); this.durationSeconds = dur; }\n    @Override\n    public String getExtension() { return \".transcript\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Davomiylik: \" + durationSeconds + \" soniya\");\n    }\n}\n\nclass SpreadsheetFile extends File {\n    private int rows; private int cols;\n    public SpreadsheetFile(String title, int r, int c) { super(title); this.rows = r; this.cols = c; }\n    @Override\n    public String getExtension() { return \".xlsx\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Jadval hajmi: \" + rows + \" qator x \" + cols + \" ustun\");\n    }\n}\n\nclass SourceCodeFile extends File {\n    private int loc;\n    public SourceCodeFile(String title, int lines) { super(title); this.loc = lines; }\n    @Override\n    public String getExtension() { return \".java\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Kod qatorlari: \" + loc + \" LOC\");\n    }\n}\n\nclass ReceiptPrintout implements IPrintable {\n    private String store; private double total;\n    public ReceiptPrintout(String s, double t) { this.store = s; this.total = t; }\n    @Override\n    public void print() {\n        System.out.println(\"KASSA CHEKI: \" + store + \" | Jami to'lov: \" + total + \" UZS\");\n    }\n}\n\nclass ShippingLabelPrintout implements IPrintable {\n    private String code; private String addr;\n    public ShippingLabelPrintout(String c, String a) { this.code = c; this.addr = a; }\n    @Override\n    public void print() {\n        System.out.println(\"YETKAZISH YORLIG'I: \" + code + \" -> Manzil: \" + addr);\n    }\n}\n\nclass BatchPrinter {\n    private List<IPrintable> queue = new ArrayList<>();\n    public void addPrintable(IPrintable p) { queue.add(p); }\n    public int printAll() {\n        for (IPrintable p : queue) p.print();\n        return queue.size();\n    }\n}\n\nclass PrintQueueManager {\n    private Queue<IPrintable> q = new ArrayDeque<>();\n    public void enqueue(IPrintable p) { q.offer(p); }\n    public void processNext() { IPrintable p = q.poll(); if (p != null) p.print(); }\n    public int getPendingCount() { return q.size(); }\n}\n\nclass FileAuditService {\n    private List<File> files = new ArrayList<>();\n    public void registerFile(File f) { files.add(f); }\n    public int countByExtension(String ext) {\n        int c = 0;\n        for (File f : files) if (f.getExtension().equals(ext)) c++;\n        return c;\n    }\n}\n\nclass WorkshopMasterRunner {\n    public void runMasterDemo() {\n        IPrintable[] list = new IPrintable[] { new TextFile(\"notes\", 100), new ImageFile(\"logo\", 400, 300), new PrintableDocument(\"Valeriya\", \"Tayyor.\") };\n        for (IPrintable p : list) p.print();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AudioTranscript at = new AudioTranscript(\"Lecture_6_Audio\", 3600);\n        at.print();\n    }\n}",
    "solution": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Queue;\nimport java.util.ArrayDeque;\n\ninterface IPrintable {\n    void print();\n}\n\nabstract class File implements IPrintable {\n    protected String title;\n    public File(String title) { this.title = title; }\n    public abstract String getExtension();\n    public void showHeader() {\n        System.out.println(\"=== \" + title + getExtension() + \" ===\");\n    }\n}\n\nclass SimpleDocument implements IPrintable {\n    private String name;\n    public SimpleDocument(String name) { this.name = name; }\n    @Override\n    public void print() { System.out.println(\"Hujjat chop etildi: \" + name); }\n}\n\nclass DummyFile extends File {\n    public DummyFile(String t) { super(t); }\n    @Override\n    public String getExtension() { return \".dat\"; }\n    @Override\n    public void print() { showHeader(); }\n}\n\nclass TextFile extends File {\n    private int wordCount;\n    public TextFile(String title, int words) { super(title); this.wordCount = words; }\n    @Override\n    public String getExtension() { return \".txt\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"So'zlar soni: \" + wordCount);\n    }\n}\n\nclass ImageFile extends File {\n    private int width;\n    private int height;\n    public ImageFile(String title, int w, int h) { super(title); this.width = w; this.height = h; }\n    @Override\n    public String getExtension() { return \".png\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"O'lchamlari: \" + width + \"x\" + height + \" px\");\n    }\n}\n\nclass PrintableDocument implements IPrintable {\n    private String author;\n    private String text;\n    public PrintableDocument(String a, String t) { this.author = a; this.text = t; }\n    @Override\n    public void print() {\n        System.out.println(\"Chop etiluvchi hujjat [Muallif: \" + author + \"]: \" + text);\n    }\n}\n\nclass PdfDocument extends File {\n    private int pageCount;\n    public PdfDocument(String title, int pages) { super(title); this.pageCount = pages; }\n    @Override\n    public String getExtension() { return \".pdf\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Sahifalar: \" + pageCount);\n    }\n}\n\nclass AudioTranscript extends File {\n    private int durationSeconds;\n    public AudioTranscript(String title, int dur) { super(title); this.durationSeconds = dur; }\n    @Override\n    public String getExtension() { return \".transcript\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Davomiylik: \" + durationSeconds + \" soniya\");\n    }\n}\n\nclass SpreadsheetFile extends File {\n    private int rows; private int cols;\n    public SpreadsheetFile(String title, int r, int c) { super(title); this.rows = r; this.cols = c; }\n    @Override\n    public String getExtension() { return \".xlsx\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Jadval hajmi: \" + rows + \" qator x \" + cols + \" ustun\");\n    }\n}\n\nclass SourceCodeFile extends File {\n    private int loc;\n    public SourceCodeFile(String title, int lines) { super(title); this.loc = lines; }\n    @Override\n    public String getExtension() { return \".java\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Kod qatorlari: \" + loc + \" LOC\");\n    }\n}\n\nclass ReceiptPrintout implements IPrintable {\n    private String store; private double total;\n    public ReceiptPrintout(String s, double t) { this.store = s; this.total = t; }\n    @Override\n    public void print() {\n        System.out.println(\"KASSA CHEKI: \" + store + \" | Jami to'lov: \" + total + \" UZS\");\n    }\n}\n\nclass ShippingLabelPrintout implements IPrintable {\n    private String code; private String addr;\n    public ShippingLabelPrintout(String c, String a) { this.code = c; this.addr = a; }\n    @Override\n    public void print() {\n        System.out.println(\"YETKAZISH YORLIG'I: \" + code + \" -> Manzil: \" + addr);\n    }\n}\n\nclass BatchPrinter {\n    private List<IPrintable> queue = new ArrayList<>();\n    public void addPrintable(IPrintable p) { queue.add(p); }\n    public int printAll() {\n        for (IPrintable p : queue) p.print();\n        return queue.size();\n    }\n}\n\nclass PrintQueueManager {\n    private Queue<IPrintable> q = new ArrayDeque<>();\n    public void enqueue(IPrintable p) { q.offer(p); }\n    public void processNext() { IPrintable p = q.poll(); if (p != null) p.print(); }\n    public int getPendingCount() { return q.size(); }\n}\n\nclass FileAuditService {\n    private List<File> files = new ArrayList<>();\n    public void registerFile(File f) { files.add(f); }\n    public int countByExtension(String ext) {\n        int c = 0;\n        for (File f : files) if (f.getExtension().equals(ext)) c++;\n        return c;\n    }\n}\n\nclass WorkshopMasterRunner {\n    public void runMasterDemo() {\n        IPrintable[] list = new IPrintable[] { new TextFile(\"notes\", 100), new ImageFile(\"logo\", 400, 300), new PrintableDocument(\"Valeriya\", \"Tayyor.\") };\n        for (IPrintable p : list) p.print();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AudioTranscript at = new AudioTranscript(\"Lecture_6_Audio\", 3600);\n        at.print();\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 'Workshop TW 6: Abstract Class & Interface' da IPrintable interfeysi va undan kelib chiquvchi 'abstract class File' tizimi ishlab chiqilgan. Bu laboratoriya ishi interfeys va abstrakt sinflarning real loyihada qanday birga ishlashini to'liq namoyon etadi.",
      "cleanCode": "interface IPrintable { void print(); }\nabstract class File implements IPrintable { ... }",
      "breakdown": [
        "<code>Workshop TW 6</code>: IPrintable va File polimorfik chop etish tizimi.",
        "<code>print</code>: chop etish operatsiyasi."
      ]
    }
  },
  {
    "id": 128,
    "tier": 9,
    "tierName": "9-Bosqich: Workshop TW 6: Polimorfik Chop Etish Tizimi",
    "sector": "121-135: Workshop TW 6 Printing System",
    "title": {
      "uz": "128. Workshop Kengaytmasi — SpreadsheetFile: .xlsx va Qatorlar/Ustunlar",
      "en": "128. Workshop Extension — SpreadsheetFile with Rows and Columns"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\n'SpreadsheetFile extends File'. Kengaytma '.xlsx' bo'lib, jadvaldagi qatorlar va ustunlar sonini chop etadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Workshop TW 6 spetsifikatsiyasi bo'yicha 'IPrintable' interfeysi va tegishli sinflarni tuzing.\n2. 'File' abstrakt sinfida 'showHeader()' umumiy metodini va 'abstract String getExtension()' ni e'lon qiling.\n3. Voris sinflarda kengaytma va chop etish logikasini (@Override) yozing.\n4. 'Main' metodida polimorfik chop etishni sinab ko'ring.\n5. Natijani chop eting: 'SpreadsheetFile sheet = new SpreadsheetFile(\"Grades_CW2\", 150, 8);         sheet.print();'",
      "en": "📖 Real-World Scenario & Context\nSpreadsheetFile subclass outputs table row and column dimensions.\n\n📋 Required Implementation Steps (1 to 5)\n1. Implement IPrintable and File hierarchy matching Workshop TW 6.\n2. Declare shared showHeader() and abstract getExtension() in File base.\n3. Override print() and provide custom file metadata.\n4. Demonstrate polymorphic printing in 'main'.\n5. Print result to console: 'SpreadsheetFile sheet = new SpreadsheetFile(\"Grades_CW2\", 150, 8);         sheet.print();'"
    },
    "requirements": {
      "classes": [
        "SpreadsheetFile",
        "Main"
      ],
      "methods": [
        "print"
      ]
    },
    "starterCode": "// Workshop TW 6 klasslarini yozing\nimport java.util.List;\nimport java.util.ArrayList;\nimport java.util.Queue;\nimport java.util.ArrayDeque;\n\ninterface IPrintable {\n    void print();\n}\n\nabstract class File implements IPrintable {\n    protected String title;\n    public File(String title) { this.title = title; }\n    public abstract String getExtension();\n    public void showHeader() {\n        System.out.println(\"=== \" + title + getExtension() + \" ===\");\n    }\n}\n\nclass SimpleDocument implements IPrintable {\n    private String name;\n    public SimpleDocument(String name) { this.name = name; }\n    @Override\n    public void print() { System.out.println(\"Hujjat chop etildi: \" + name); }\n}\n\nclass DummyFile extends File {\n    public DummyFile(String t) { super(t); }\n    @Override\n    public String getExtension() { return \".dat\"; }\n    @Override\n    public void print() { showHeader(); }\n}\n\nclass TextFile extends File {\n    private int wordCount;\n    public TextFile(String title, int words) { super(title); this.wordCount = words; }\n    @Override\n    public String getExtension() { return \".txt\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"So'zlar soni: \" + wordCount);\n    }\n}\n\nclass ImageFile extends File {\n    private int width;\n    private int height;\n    public ImageFile(String title, int w, int h) { super(title); this.width = w; this.height = h; }\n    @Override\n    public String getExtension() { return \".png\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"O'lchamlari: \" + width + \"x\" + height + \" px\");\n    }\n}\n\nclass PrintableDocument implements IPrintable {\n    private String author;\n    private String text;\n    public PrintableDocument(String a, String t) { this.author = a; this.text = t; }\n    @Override\n    public void print() {\n        System.out.println(\"Chop etiluvchi hujjat [Muallif: \" + author + \"]: \" + text);\n    }\n}\n\nclass PdfDocument extends File {\n    private int pageCount;\n    public PdfDocument(String title, int pages) { super(title); this.pageCount = pages; }\n    @Override\n    public String getExtension() { return \".pdf\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Sahifalar: \" + pageCount);\n    }\n}\n\nclass AudioTranscript extends File {\n    private int durationSeconds;\n    public AudioTranscript(String title, int dur) { super(title); this.durationSeconds = dur; }\n    @Override\n    public String getExtension() { return \".transcript\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Davomiylik: \" + durationSeconds + \" soniya\");\n    }\n}\n\nclass SpreadsheetFile extends File {\n    private int rows; private int cols;\n    public SpreadsheetFile(String title, int r, int c) { super(title); this.rows = r; this.cols = c; }\n    @Override\n    public String getExtension() { return \".xlsx\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Jadval hajmi: \" + rows + \" qator x \" + cols + \" ustun\");\n    }\n}\n\nclass SourceCodeFile extends File {\n    private int loc;\n    public SourceCodeFile(String title, int lines) { super(title); this.loc = lines; }\n    @Override\n    public String getExtension() { return \".java\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Kod qatorlari: \" + loc + \" LOC\");\n    }\n}\n\nclass ReceiptPrintout implements IPrintable {\n    private String store; private double total;\n    public ReceiptPrintout(String s, double t) { this.store = s; this.total = t; }\n    @Override\n    public void print() {\n        System.out.println(\"KASSA CHEKI: \" + store + \" | Jami to'lov: \" + total + \" UZS\");\n    }\n}\n\nclass ShippingLabelPrintout implements IPrintable {\n    private String code; private String addr;\n    public ShippingLabelPrintout(String c, String a) { this.code = c; this.addr = a; }\n    @Override\n    public void print() {\n        System.out.println(\"YETKAZISH YORLIG'I: \" + code + \" -> Manzil: \" + addr);\n    }\n}\n\nclass BatchPrinter {\n    private List<IPrintable> queue = new ArrayList<>();\n    public void addPrintable(IPrintable p) { queue.add(p); }\n    public int printAll() {\n        for (IPrintable p : queue) p.print();\n        return queue.size();\n    }\n}\n\nclass PrintQueueManager {\n    private Queue<IPrintable> q = new ArrayDeque<>();\n    public void enqueue(IPrintable p) { q.offer(p); }\n    public void processNext() { IPrintable p = q.poll(); if (p != null) p.print(); }\n    public int getPendingCount() { return q.size(); }\n}\n\nclass FileAuditService {\n    private List<File> files = new ArrayList<>();\n    public void registerFile(File f) { files.add(f); }\n    public int countByExtension(String ext) {\n        int c = 0;\n        for (File f : files) if (f.getExtension().equals(ext)) c++;\n        return c;\n    }\n}\n\nclass WorkshopMasterRunner {\n    public void runMasterDemo() {\n        IPrintable[] list = new IPrintable[] { new TextFile(\"notes\", 100), new ImageFile(\"logo\", 400, 300), new PrintableDocument(\"Valeriya\", \"Tayyor.\") };\n        for (IPrintable p : list) p.print();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SpreadsheetFile sheet = new SpreadsheetFile(\"Grades_CW2\", 150, 8);\n        sheet.print();\n    }\n}",
    "solution": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Queue;\nimport java.util.ArrayDeque;\n\ninterface IPrintable {\n    void print();\n}\n\nabstract class File implements IPrintable {\n    protected String title;\n    public File(String title) { this.title = title; }\n    public abstract String getExtension();\n    public void showHeader() {\n        System.out.println(\"=== \" + title + getExtension() + \" ===\");\n    }\n}\n\nclass SimpleDocument implements IPrintable {\n    private String name;\n    public SimpleDocument(String name) { this.name = name; }\n    @Override\n    public void print() { System.out.println(\"Hujjat chop etildi: \" + name); }\n}\n\nclass DummyFile extends File {\n    public DummyFile(String t) { super(t); }\n    @Override\n    public String getExtension() { return \".dat\"; }\n    @Override\n    public void print() { showHeader(); }\n}\n\nclass TextFile extends File {\n    private int wordCount;\n    public TextFile(String title, int words) { super(title); this.wordCount = words; }\n    @Override\n    public String getExtension() { return \".txt\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"So'zlar soni: \" + wordCount);\n    }\n}\n\nclass ImageFile extends File {\n    private int width;\n    private int height;\n    public ImageFile(String title, int w, int h) { super(title); this.width = w; this.height = h; }\n    @Override\n    public String getExtension() { return \".png\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"O'lchamlari: \" + width + \"x\" + height + \" px\");\n    }\n}\n\nclass PrintableDocument implements IPrintable {\n    private String author;\n    private String text;\n    public PrintableDocument(String a, String t) { this.author = a; this.text = t; }\n    @Override\n    public void print() {\n        System.out.println(\"Chop etiluvchi hujjat [Muallif: \" + author + \"]: \" + text);\n    }\n}\n\nclass PdfDocument extends File {\n    private int pageCount;\n    public PdfDocument(String title, int pages) { super(title); this.pageCount = pages; }\n    @Override\n    public String getExtension() { return \".pdf\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Sahifalar: \" + pageCount);\n    }\n}\n\nclass AudioTranscript extends File {\n    private int durationSeconds;\n    public AudioTranscript(String title, int dur) { super(title); this.durationSeconds = dur; }\n    @Override\n    public String getExtension() { return \".transcript\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Davomiylik: \" + durationSeconds + \" soniya\");\n    }\n}\n\nclass SpreadsheetFile extends File {\n    private int rows; private int cols;\n    public SpreadsheetFile(String title, int r, int c) { super(title); this.rows = r; this.cols = c; }\n    @Override\n    public String getExtension() { return \".xlsx\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Jadval hajmi: \" + rows + \" qator x \" + cols + \" ustun\");\n    }\n}\n\nclass SourceCodeFile extends File {\n    private int loc;\n    public SourceCodeFile(String title, int lines) { super(title); this.loc = lines; }\n    @Override\n    public String getExtension() { return \".java\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Kod qatorlari: \" + loc + \" LOC\");\n    }\n}\n\nclass ReceiptPrintout implements IPrintable {\n    private String store; private double total;\n    public ReceiptPrintout(String s, double t) { this.store = s; this.total = t; }\n    @Override\n    public void print() {\n        System.out.println(\"KASSA CHEKI: \" + store + \" | Jami to'lov: \" + total + \" UZS\");\n    }\n}\n\nclass ShippingLabelPrintout implements IPrintable {\n    private String code; private String addr;\n    public ShippingLabelPrintout(String c, String a) { this.code = c; this.addr = a; }\n    @Override\n    public void print() {\n        System.out.println(\"YETKAZISH YORLIG'I: \" + code + \" -> Manzil: \" + addr);\n    }\n}\n\nclass BatchPrinter {\n    private List<IPrintable> queue = new ArrayList<>();\n    public void addPrintable(IPrintable p) { queue.add(p); }\n    public int printAll() {\n        for (IPrintable p : queue) p.print();\n        return queue.size();\n    }\n}\n\nclass PrintQueueManager {\n    private Queue<IPrintable> q = new ArrayDeque<>();\n    public void enqueue(IPrintable p) { q.offer(p); }\n    public void processNext() { IPrintable p = q.poll(); if (p != null) p.print(); }\n    public int getPendingCount() { return q.size(); }\n}\n\nclass FileAuditService {\n    private List<File> files = new ArrayList<>();\n    public void registerFile(File f) { files.add(f); }\n    public int countByExtension(String ext) {\n        int c = 0;\n        for (File f : files) if (f.getExtension().equals(ext)) c++;\n        return c;\n    }\n}\n\nclass WorkshopMasterRunner {\n    public void runMasterDemo() {\n        IPrintable[] list = new IPrintable[] { new TextFile(\"notes\", 100), new ImageFile(\"logo\", 400, 300), new PrintableDocument(\"Valeriya\", \"Tayyor.\") };\n        for (IPrintable p : list) p.print();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SpreadsheetFile sheet = new SpreadsheetFile(\"Grades_CW2\", 150, 8);\n        sheet.print();\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 'Workshop TW 6: Abstract Class & Interface' da IPrintable interfeysi va undan kelib chiquvchi 'abstract class File' tizimi ishlab chiqilgan. Bu laboratoriya ishi interfeys va abstrakt sinflarning real loyihada qanday birga ishlashini to'liq namoyon etadi.",
      "cleanCode": "interface IPrintable { void print(); }\nabstract class File implements IPrintable { ... }",
      "breakdown": [
        "<code>Workshop TW 6</code>: IPrintable va File polimorfik chop etish tizimi.",
        "<code>print</code>: chop etish operatsiyasi."
      ]
    }
  },
  {
    "id": 129,
    "tier": 9,
    "tierName": "9-Bosqich: Workshop TW 6: Polimorfik Chop Etish Tizimi",
    "sector": "121-135: Workshop TW 6 Printing System",
    "title": {
      "uz": "129. Workshop Kengaytmasi — SourceCodeFile: .java va Kod Qatorlari (LOC)",
      "en": "129. Workshop Extension — SourceCodeFile with Lines of Code"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\n'SourceCodeFile extends File'. Kengaytma '.java' bo'lib, dastur kodidagi qatorlar sonini (linesOfCode) aks ettiradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Workshop TW 6 spetsifikatsiyasi bo'yicha 'IPrintable' interfeysi va tegishli sinflarni tuzing.\n2. 'File' abstrakt sinfida 'showHeader()' umumiy metodini va 'abstract String getExtension()' ni e'lon qiling.\n3. Voris sinflarda kengaytma va chop etish logikasini (@Override) yozing.\n4. 'Main' metodida polimorfik chop etishni sinab ko'ring.\n5. Natijani chop eting: 'SourceCodeFile code = new SourceCodeFile(\"Main\", 85);         code.print();'",
      "en": "📖 Real-World Scenario & Context\nSourceCodeFile extending File displays line count metric.\n\n📋 Required Implementation Steps (1 to 5)\n1. Implement IPrintable and File hierarchy matching Workshop TW 6.\n2. Declare shared showHeader() and abstract getExtension() in File base.\n3. Override print() and provide custom file metadata.\n4. Demonstrate polymorphic printing in 'main'.\n5. Print result to console: 'SourceCodeFile code = new SourceCodeFile(\"Main\", 85);         code.print();'"
    },
    "requirements": {
      "classes": [
        "SourceCodeFile",
        "Main"
      ],
      "methods": [
        "print"
      ]
    },
    "starterCode": "// Workshop TW 6 klasslarini yozing\nimport java.util.List;\nimport java.util.ArrayList;\nimport java.util.Queue;\nimport java.util.ArrayDeque;\n\ninterface IPrintable {\n    void print();\n}\n\nabstract class File implements IPrintable {\n    protected String title;\n    public File(String title) { this.title = title; }\n    public abstract String getExtension();\n    public void showHeader() {\n        System.out.println(\"=== \" + title + getExtension() + \" ===\");\n    }\n}\n\nclass SimpleDocument implements IPrintable {\n    private String name;\n    public SimpleDocument(String name) { this.name = name; }\n    @Override\n    public void print() { System.out.println(\"Hujjat chop etildi: \" + name); }\n}\n\nclass DummyFile extends File {\n    public DummyFile(String t) { super(t); }\n    @Override\n    public String getExtension() { return \".dat\"; }\n    @Override\n    public void print() { showHeader(); }\n}\n\nclass TextFile extends File {\n    private int wordCount;\n    public TextFile(String title, int words) { super(title); this.wordCount = words; }\n    @Override\n    public String getExtension() { return \".txt\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"So'zlar soni: \" + wordCount);\n    }\n}\n\nclass ImageFile extends File {\n    private int width;\n    private int height;\n    public ImageFile(String title, int w, int h) { super(title); this.width = w; this.height = h; }\n    @Override\n    public String getExtension() { return \".png\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"O'lchamlari: \" + width + \"x\" + height + \" px\");\n    }\n}\n\nclass PrintableDocument implements IPrintable {\n    private String author;\n    private String text;\n    public PrintableDocument(String a, String t) { this.author = a; this.text = t; }\n    @Override\n    public void print() {\n        System.out.println(\"Chop etiluvchi hujjat [Muallif: \" + author + \"]: \" + text);\n    }\n}\n\nclass PdfDocument extends File {\n    private int pageCount;\n    public PdfDocument(String title, int pages) { super(title); this.pageCount = pages; }\n    @Override\n    public String getExtension() { return \".pdf\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Sahifalar: \" + pageCount);\n    }\n}\n\nclass AudioTranscript extends File {\n    private int durationSeconds;\n    public AudioTranscript(String title, int dur) { super(title); this.durationSeconds = dur; }\n    @Override\n    public String getExtension() { return \".transcript\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Davomiylik: \" + durationSeconds + \" soniya\");\n    }\n}\n\nclass SpreadsheetFile extends File {\n    private int rows; private int cols;\n    public SpreadsheetFile(String title, int r, int c) { super(title); this.rows = r; this.cols = c; }\n    @Override\n    public String getExtension() { return \".xlsx\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Jadval hajmi: \" + rows + \" qator x \" + cols + \" ustun\");\n    }\n}\n\nclass SourceCodeFile extends File {\n    private int loc;\n    public SourceCodeFile(String title, int lines) { super(title); this.loc = lines; }\n    @Override\n    public String getExtension() { return \".java\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Kod qatorlari: \" + loc + \" LOC\");\n    }\n}\n\nclass ReceiptPrintout implements IPrintable {\n    private String store; private double total;\n    public ReceiptPrintout(String s, double t) { this.store = s; this.total = t; }\n    @Override\n    public void print() {\n        System.out.println(\"KASSA CHEKI: \" + store + \" | Jami to'lov: \" + total + \" UZS\");\n    }\n}\n\nclass ShippingLabelPrintout implements IPrintable {\n    private String code; private String addr;\n    public ShippingLabelPrintout(String c, String a) { this.code = c; this.addr = a; }\n    @Override\n    public void print() {\n        System.out.println(\"YETKAZISH YORLIG'I: \" + code + \" -> Manzil: \" + addr);\n    }\n}\n\nclass BatchPrinter {\n    private List<IPrintable> queue = new ArrayList<>();\n    public void addPrintable(IPrintable p) { queue.add(p); }\n    public int printAll() {\n        for (IPrintable p : queue) p.print();\n        return queue.size();\n    }\n}\n\nclass PrintQueueManager {\n    private Queue<IPrintable> q = new ArrayDeque<>();\n    public void enqueue(IPrintable p) { q.offer(p); }\n    public void processNext() { IPrintable p = q.poll(); if (p != null) p.print(); }\n    public int getPendingCount() { return q.size(); }\n}\n\nclass FileAuditService {\n    private List<File> files = new ArrayList<>();\n    public void registerFile(File f) { files.add(f); }\n    public int countByExtension(String ext) {\n        int c = 0;\n        for (File f : files) if (f.getExtension().equals(ext)) c++;\n        return c;\n    }\n}\n\nclass WorkshopMasterRunner {\n    public void runMasterDemo() {\n        IPrintable[] list = new IPrintable[] { new TextFile(\"notes\", 100), new ImageFile(\"logo\", 400, 300), new PrintableDocument(\"Valeriya\", \"Tayyor.\") };\n        for (IPrintable p : list) p.print();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SourceCodeFile code = new SourceCodeFile(\"Main\", 85);\n        code.print();\n    }\n}",
    "solution": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Queue;\nimport java.util.ArrayDeque;\n\ninterface IPrintable {\n    void print();\n}\n\nabstract class File implements IPrintable {\n    protected String title;\n    public File(String title) { this.title = title; }\n    public abstract String getExtension();\n    public void showHeader() {\n        System.out.println(\"=== \" + title + getExtension() + \" ===\");\n    }\n}\n\nclass SimpleDocument implements IPrintable {\n    private String name;\n    public SimpleDocument(String name) { this.name = name; }\n    @Override\n    public void print() { System.out.println(\"Hujjat chop etildi: \" + name); }\n}\n\nclass DummyFile extends File {\n    public DummyFile(String t) { super(t); }\n    @Override\n    public String getExtension() { return \".dat\"; }\n    @Override\n    public void print() { showHeader(); }\n}\n\nclass TextFile extends File {\n    private int wordCount;\n    public TextFile(String title, int words) { super(title); this.wordCount = words; }\n    @Override\n    public String getExtension() { return \".txt\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"So'zlar soni: \" + wordCount);\n    }\n}\n\nclass ImageFile extends File {\n    private int width;\n    private int height;\n    public ImageFile(String title, int w, int h) { super(title); this.width = w; this.height = h; }\n    @Override\n    public String getExtension() { return \".png\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"O'lchamlari: \" + width + \"x\" + height + \" px\");\n    }\n}\n\nclass PrintableDocument implements IPrintable {\n    private String author;\n    private String text;\n    public PrintableDocument(String a, String t) { this.author = a; this.text = t; }\n    @Override\n    public void print() {\n        System.out.println(\"Chop etiluvchi hujjat [Muallif: \" + author + \"]: \" + text);\n    }\n}\n\nclass PdfDocument extends File {\n    private int pageCount;\n    public PdfDocument(String title, int pages) { super(title); this.pageCount = pages; }\n    @Override\n    public String getExtension() { return \".pdf\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Sahifalar: \" + pageCount);\n    }\n}\n\nclass AudioTranscript extends File {\n    private int durationSeconds;\n    public AudioTranscript(String title, int dur) { super(title); this.durationSeconds = dur; }\n    @Override\n    public String getExtension() { return \".transcript\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Davomiylik: \" + durationSeconds + \" soniya\");\n    }\n}\n\nclass SpreadsheetFile extends File {\n    private int rows; private int cols;\n    public SpreadsheetFile(String title, int r, int c) { super(title); this.rows = r; this.cols = c; }\n    @Override\n    public String getExtension() { return \".xlsx\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Jadval hajmi: \" + rows + \" qator x \" + cols + \" ustun\");\n    }\n}\n\nclass SourceCodeFile extends File {\n    private int loc;\n    public SourceCodeFile(String title, int lines) { super(title); this.loc = lines; }\n    @Override\n    public String getExtension() { return \".java\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Kod qatorlari: \" + loc + \" LOC\");\n    }\n}\n\nclass ReceiptPrintout implements IPrintable {\n    private String store; private double total;\n    public ReceiptPrintout(String s, double t) { this.store = s; this.total = t; }\n    @Override\n    public void print() {\n        System.out.println(\"KASSA CHEKI: \" + store + \" | Jami to'lov: \" + total + \" UZS\");\n    }\n}\n\nclass ShippingLabelPrintout implements IPrintable {\n    private String code; private String addr;\n    public ShippingLabelPrintout(String c, String a) { this.code = c; this.addr = a; }\n    @Override\n    public void print() {\n        System.out.println(\"YETKAZISH YORLIG'I: \" + code + \" -> Manzil: \" + addr);\n    }\n}\n\nclass BatchPrinter {\n    private List<IPrintable> queue = new ArrayList<>();\n    public void addPrintable(IPrintable p) { queue.add(p); }\n    public int printAll() {\n        for (IPrintable p : queue) p.print();\n        return queue.size();\n    }\n}\n\nclass PrintQueueManager {\n    private Queue<IPrintable> q = new ArrayDeque<>();\n    public void enqueue(IPrintable p) { q.offer(p); }\n    public void processNext() { IPrintable p = q.poll(); if (p != null) p.print(); }\n    public int getPendingCount() { return q.size(); }\n}\n\nclass FileAuditService {\n    private List<File> files = new ArrayList<>();\n    public void registerFile(File f) { files.add(f); }\n    public int countByExtension(String ext) {\n        int c = 0;\n        for (File f : files) if (f.getExtension().equals(ext)) c++;\n        return c;\n    }\n}\n\nclass WorkshopMasterRunner {\n    public void runMasterDemo() {\n        IPrintable[] list = new IPrintable[] { new TextFile(\"notes\", 100), new ImageFile(\"logo\", 400, 300), new PrintableDocument(\"Valeriya\", \"Tayyor.\") };\n        for (IPrintable p : list) p.print();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SourceCodeFile code = new SourceCodeFile(\"Main\", 85);\n        code.print();\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 'Workshop TW 6: Abstract Class & Interface' da IPrintable interfeysi va undan kelib chiquvchi 'abstract class File' tizimi ishlab chiqilgan. Bu laboratoriya ishi interfeys va abstrakt sinflarning real loyihada qanday birga ishlashini to'liq namoyon etadi.",
      "cleanCode": "interface IPrintable { void print(); }\nabstract class File implements IPrintable { ... }",
      "breakdown": [
        "<code>Workshop TW 6</code>: IPrintable va File polimorfik chop etish tizimi.",
        "<code>print</code>: chop etish operatsiyasi."
      ]
    }
  },
  {
    "id": 130,
    "tier": 9,
    "tierName": "9-Bosqich: Workshop TW 6: Polimorfik Chop Etish Tizimi",
    "sector": "121-135: Workshop TW 6 Printing System",
    "title": {
      "uz": "130. Workshop Kengaytmasi — Kassa Cheki (ReceiptPrintout implements IPrintable)",
      "en": "130. Workshop Extension — Retail Receipt Realizing IPrintable"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nFayl bo'lmagan biznes ob'yektini chop etish: 'ReceiptPrintout implements IPrintable'. Xarid cheki summasi va do'kon nomini chop etadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Workshop TW 6 spetsifikatsiyasi bo'yicha 'IPrintable' interfeysi va tegishli sinflarni tuzing.\n2. 'File' abstrakt sinfida 'showHeader()' umumiy metodini va 'abstract String getExtension()' ni e'lon qiling.\n3. Voris sinflarda kengaytma va chop etish logikasini (@Override) yozing.\n4. 'Main' metodida polimorfik chop etishni sinab ko'ring.\n5. Natijani chop eting: 'IPrintable receipt = new ReceiptPrintout(\"Korzinka\", 145000.0);         receipt.print();'",
      "en": "📖 Real-World Scenario & Context\nRetail receipt implements IPrintable without extending File hierarchy.\n\n📋 Required Implementation Steps (1 to 5)\n1. Implement IPrintable and File hierarchy matching Workshop TW 6.\n2. Declare shared showHeader() and abstract getExtension() in File base.\n3. Override print() and provide custom file metadata.\n4. Demonstrate polymorphic printing in 'main'.\n5. Print result to console: 'IPrintable receipt = new ReceiptPrintout(\"Korzinka\", 145000.0);         receipt.print();'"
    },
    "requirements": {
      "classes": [
        "ReceiptPrintout",
        "Main"
      ],
      "methods": [
        "print"
      ]
    },
    "starterCode": "// Workshop TW 6 klasslarini yozing\nimport java.util.List;\nimport java.util.ArrayList;\nimport java.util.Queue;\nimport java.util.ArrayDeque;\n\ninterface IPrintable {\n    void print();\n}\n\nabstract class File implements IPrintable {\n    protected String title;\n    public File(String title) { this.title = title; }\n    public abstract String getExtension();\n    public void showHeader() {\n        System.out.println(\"=== \" + title + getExtension() + \" ===\");\n    }\n}\n\nclass SimpleDocument implements IPrintable {\n    private String name;\n    public SimpleDocument(String name) { this.name = name; }\n    @Override\n    public void print() { System.out.println(\"Hujjat chop etildi: \" + name); }\n}\n\nclass DummyFile extends File {\n    public DummyFile(String t) { super(t); }\n    @Override\n    public String getExtension() { return \".dat\"; }\n    @Override\n    public void print() { showHeader(); }\n}\n\nclass TextFile extends File {\n    private int wordCount;\n    public TextFile(String title, int words) { super(title); this.wordCount = words; }\n    @Override\n    public String getExtension() { return \".txt\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"So'zlar soni: \" + wordCount);\n    }\n}\n\nclass ImageFile extends File {\n    private int width;\n    private int height;\n    public ImageFile(String title, int w, int h) { super(title); this.width = w; this.height = h; }\n    @Override\n    public String getExtension() { return \".png\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"O'lchamlari: \" + width + \"x\" + height + \" px\");\n    }\n}\n\nclass PrintableDocument implements IPrintable {\n    private String author;\n    private String text;\n    public PrintableDocument(String a, String t) { this.author = a; this.text = t; }\n    @Override\n    public void print() {\n        System.out.println(\"Chop etiluvchi hujjat [Muallif: \" + author + \"]: \" + text);\n    }\n}\n\nclass PdfDocument extends File {\n    private int pageCount;\n    public PdfDocument(String title, int pages) { super(title); this.pageCount = pages; }\n    @Override\n    public String getExtension() { return \".pdf\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Sahifalar: \" + pageCount);\n    }\n}\n\nclass AudioTranscript extends File {\n    private int durationSeconds;\n    public AudioTranscript(String title, int dur) { super(title); this.durationSeconds = dur; }\n    @Override\n    public String getExtension() { return \".transcript\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Davomiylik: \" + durationSeconds + \" soniya\");\n    }\n}\n\nclass SpreadsheetFile extends File {\n    private int rows; private int cols;\n    public SpreadsheetFile(String title, int r, int c) { super(title); this.rows = r; this.cols = c; }\n    @Override\n    public String getExtension() { return \".xlsx\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Jadval hajmi: \" + rows + \" qator x \" + cols + \" ustun\");\n    }\n}\n\nclass SourceCodeFile extends File {\n    private int loc;\n    public SourceCodeFile(String title, int lines) { super(title); this.loc = lines; }\n    @Override\n    public String getExtension() { return \".java\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Kod qatorlari: \" + loc + \" LOC\");\n    }\n}\n\nclass ReceiptPrintout implements IPrintable {\n    private String store; private double total;\n    public ReceiptPrintout(String s, double t) { this.store = s; this.total = t; }\n    @Override\n    public void print() {\n        System.out.println(\"KASSA CHEKI: \" + store + \" | Jami to'lov: \" + total + \" UZS\");\n    }\n}\n\nclass ShippingLabelPrintout implements IPrintable {\n    private String code; private String addr;\n    public ShippingLabelPrintout(String c, String a) { this.code = c; this.addr = a; }\n    @Override\n    public void print() {\n        System.out.println(\"YETKAZISH YORLIG'I: \" + code + \" -> Manzil: \" + addr);\n    }\n}\n\nclass BatchPrinter {\n    private List<IPrintable> queue = new ArrayList<>();\n    public void addPrintable(IPrintable p) { queue.add(p); }\n    public int printAll() {\n        for (IPrintable p : queue) p.print();\n        return queue.size();\n    }\n}\n\nclass PrintQueueManager {\n    private Queue<IPrintable> q = new ArrayDeque<>();\n    public void enqueue(IPrintable p) { q.offer(p); }\n    public void processNext() { IPrintable p = q.poll(); if (p != null) p.print(); }\n    public int getPendingCount() { return q.size(); }\n}\n\nclass FileAuditService {\n    private List<File> files = new ArrayList<>();\n    public void registerFile(File f) { files.add(f); }\n    public int countByExtension(String ext) {\n        int c = 0;\n        for (File f : files) if (f.getExtension().equals(ext)) c++;\n        return c;\n    }\n}\n\nclass WorkshopMasterRunner {\n    public void runMasterDemo() {\n        IPrintable[] list = new IPrintable[] { new TextFile(\"notes\", 100), new ImageFile(\"logo\", 400, 300), new PrintableDocument(\"Valeriya\", \"Tayyor.\") };\n        for (IPrintable p : list) p.print();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IPrintable receipt = new ReceiptPrintout(\"Korzinka\", 145000.0);\n        receipt.print();\n    }\n}",
    "solution": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Queue;\nimport java.util.ArrayDeque;\n\ninterface IPrintable {\n    void print();\n}\n\nabstract class File implements IPrintable {\n    protected String title;\n    public File(String title) { this.title = title; }\n    public abstract String getExtension();\n    public void showHeader() {\n        System.out.println(\"=== \" + title + getExtension() + \" ===\");\n    }\n}\n\nclass SimpleDocument implements IPrintable {\n    private String name;\n    public SimpleDocument(String name) { this.name = name; }\n    @Override\n    public void print() { System.out.println(\"Hujjat chop etildi: \" + name); }\n}\n\nclass DummyFile extends File {\n    public DummyFile(String t) { super(t); }\n    @Override\n    public String getExtension() { return \".dat\"; }\n    @Override\n    public void print() { showHeader(); }\n}\n\nclass TextFile extends File {\n    private int wordCount;\n    public TextFile(String title, int words) { super(title); this.wordCount = words; }\n    @Override\n    public String getExtension() { return \".txt\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"So'zlar soni: \" + wordCount);\n    }\n}\n\nclass ImageFile extends File {\n    private int width;\n    private int height;\n    public ImageFile(String title, int w, int h) { super(title); this.width = w; this.height = h; }\n    @Override\n    public String getExtension() { return \".png\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"O'lchamlari: \" + width + \"x\" + height + \" px\");\n    }\n}\n\nclass PrintableDocument implements IPrintable {\n    private String author;\n    private String text;\n    public PrintableDocument(String a, String t) { this.author = a; this.text = t; }\n    @Override\n    public void print() {\n        System.out.println(\"Chop etiluvchi hujjat [Muallif: \" + author + \"]: \" + text);\n    }\n}\n\nclass PdfDocument extends File {\n    private int pageCount;\n    public PdfDocument(String title, int pages) { super(title); this.pageCount = pages; }\n    @Override\n    public String getExtension() { return \".pdf\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Sahifalar: \" + pageCount);\n    }\n}\n\nclass AudioTranscript extends File {\n    private int durationSeconds;\n    public AudioTranscript(String title, int dur) { super(title); this.durationSeconds = dur; }\n    @Override\n    public String getExtension() { return \".transcript\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Davomiylik: \" + durationSeconds + \" soniya\");\n    }\n}\n\nclass SpreadsheetFile extends File {\n    private int rows; private int cols;\n    public SpreadsheetFile(String title, int r, int c) { super(title); this.rows = r; this.cols = c; }\n    @Override\n    public String getExtension() { return \".xlsx\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Jadval hajmi: \" + rows + \" qator x \" + cols + \" ustun\");\n    }\n}\n\nclass SourceCodeFile extends File {\n    private int loc;\n    public SourceCodeFile(String title, int lines) { super(title); this.loc = lines; }\n    @Override\n    public String getExtension() { return \".java\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Kod qatorlari: \" + loc + \" LOC\");\n    }\n}\n\nclass ReceiptPrintout implements IPrintable {\n    private String store; private double total;\n    public ReceiptPrintout(String s, double t) { this.store = s; this.total = t; }\n    @Override\n    public void print() {\n        System.out.println(\"KASSA CHEKI: \" + store + \" | Jami to'lov: \" + total + \" UZS\");\n    }\n}\n\nclass ShippingLabelPrintout implements IPrintable {\n    private String code; private String addr;\n    public ShippingLabelPrintout(String c, String a) { this.code = c; this.addr = a; }\n    @Override\n    public void print() {\n        System.out.println(\"YETKAZISH YORLIG'I: \" + code + \" -> Manzil: \" + addr);\n    }\n}\n\nclass BatchPrinter {\n    private List<IPrintable> queue = new ArrayList<>();\n    public void addPrintable(IPrintable p) { queue.add(p); }\n    public int printAll() {\n        for (IPrintable p : queue) p.print();\n        return queue.size();\n    }\n}\n\nclass PrintQueueManager {\n    private Queue<IPrintable> q = new ArrayDeque<>();\n    public void enqueue(IPrintable p) { q.offer(p); }\n    public void processNext() { IPrintable p = q.poll(); if (p != null) p.print(); }\n    public int getPendingCount() { return q.size(); }\n}\n\nclass FileAuditService {\n    private List<File> files = new ArrayList<>();\n    public void registerFile(File f) { files.add(f); }\n    public int countByExtension(String ext) {\n        int c = 0;\n        for (File f : files) if (f.getExtension().equals(ext)) c++;\n        return c;\n    }\n}\n\nclass WorkshopMasterRunner {\n    public void runMasterDemo() {\n        IPrintable[] list = new IPrintable[] { new TextFile(\"notes\", 100), new ImageFile(\"logo\", 400, 300), new PrintableDocument(\"Valeriya\", \"Tayyor.\") };\n        for (IPrintable p : list) p.print();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IPrintable receipt = new ReceiptPrintout(\"Korzinka\", 145000.0);\n        receipt.print();\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 'Workshop TW 6: Abstract Class & Interface' da IPrintable interfeysi va undan kelib chiquvchi 'abstract class File' tizimi ishlab chiqilgan. Bu laboratoriya ishi interfeys va abstrakt sinflarning real loyihada qanday birga ishlashini to'liq namoyon etadi.",
      "cleanCode": "interface IPrintable { void print(); }\nabstract class File implements IPrintable { ... }",
      "breakdown": [
        "<code>Workshop TW 6</code>: IPrintable va File polimorfik chop etish tizimi.",
        "<code>print</code>: chop etish operatsiyasi."
      ]
    }
  },
  {
    "id": 131,
    "tier": 9,
    "tierName": "9-Bosqich: Workshop TW 6: Polimorfik Chop Etish Tizimi",
    "sector": "121-135: Workshop TW 6 Printing System",
    "title": {
      "uz": "131. Workshop Kengaytmasi — Yetkazish Yorlig'i (ShippingLabelPrintout)",
      "en": "131. Workshop Extension — Courier Shipping Label Implementing IPrintable"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\n'ShippingLabelPrintout implements IPrintable'. Buyurtma kodi va yetkazish manzilini o'z ichiga oluvchi posilka yorlig'ini chop eting.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Workshop TW 6 spetsifikatsiyasi bo'yicha 'IPrintable' interfeysi va tegishli sinflarni tuzing.\n2. 'File' abstrakt sinfida 'showHeader()' umumiy metodini va 'abstract String getExtension()' ni e'lon qiling.\n3. Voris sinflarda kengaytma va chop etish logikasini (@Override) yozing.\n4. 'Main' metodida polimorfik chop etishni sinab ko'ring.\n5. Natijani chop eting: 'IPrintable label = new ShippingLabelPrintout(\"UZ-9988\", \"Toshkent, Amir Temur 12\");         label.print();'",
      "en": "📖 Real-World Scenario & Context\nShipping label realizes IPrintable for courier package dispatch.\n\n📋 Required Implementation Steps (1 to 5)\n1. Implement IPrintable and File hierarchy matching Workshop TW 6.\n2. Declare shared showHeader() and abstract getExtension() in File base.\n3. Override print() and provide custom file metadata.\n4. Demonstrate polymorphic printing in 'main'.\n5. Print result to console: 'IPrintable label = new ShippingLabelPrintout(\"UZ-9988\", \"Toshkent, Amir Temur 12\");         label.print();'"
    },
    "requirements": {
      "classes": [
        "ShippingLabelPrintout",
        "Main"
      ],
      "methods": [
        "print"
      ]
    },
    "starterCode": "// Workshop TW 6 klasslarini yozing\nimport java.util.List;\nimport java.util.ArrayList;\nimport java.util.Queue;\nimport java.util.ArrayDeque;\n\ninterface IPrintable {\n    void print();\n}\n\nabstract class File implements IPrintable {\n    protected String title;\n    public File(String title) { this.title = title; }\n    public abstract String getExtension();\n    public void showHeader() {\n        System.out.println(\"=== \" + title + getExtension() + \" ===\");\n    }\n}\n\nclass SimpleDocument implements IPrintable {\n    private String name;\n    public SimpleDocument(String name) { this.name = name; }\n    @Override\n    public void print() { System.out.println(\"Hujjat chop etildi: \" + name); }\n}\n\nclass DummyFile extends File {\n    public DummyFile(String t) { super(t); }\n    @Override\n    public String getExtension() { return \".dat\"; }\n    @Override\n    public void print() { showHeader(); }\n}\n\nclass TextFile extends File {\n    private int wordCount;\n    public TextFile(String title, int words) { super(title); this.wordCount = words; }\n    @Override\n    public String getExtension() { return \".txt\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"So'zlar soni: \" + wordCount);\n    }\n}\n\nclass ImageFile extends File {\n    private int width;\n    private int height;\n    public ImageFile(String title, int w, int h) { super(title); this.width = w; this.height = h; }\n    @Override\n    public String getExtension() { return \".png\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"O'lchamlari: \" + width + \"x\" + height + \" px\");\n    }\n}\n\nclass PrintableDocument implements IPrintable {\n    private String author;\n    private String text;\n    public PrintableDocument(String a, String t) { this.author = a; this.text = t; }\n    @Override\n    public void print() {\n        System.out.println(\"Chop etiluvchi hujjat [Muallif: \" + author + \"]: \" + text);\n    }\n}\n\nclass PdfDocument extends File {\n    private int pageCount;\n    public PdfDocument(String title, int pages) { super(title); this.pageCount = pages; }\n    @Override\n    public String getExtension() { return \".pdf\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Sahifalar: \" + pageCount);\n    }\n}\n\nclass AudioTranscript extends File {\n    private int durationSeconds;\n    public AudioTranscript(String title, int dur) { super(title); this.durationSeconds = dur; }\n    @Override\n    public String getExtension() { return \".transcript\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Davomiylik: \" + durationSeconds + \" soniya\");\n    }\n}\n\nclass SpreadsheetFile extends File {\n    private int rows; private int cols;\n    public SpreadsheetFile(String title, int r, int c) { super(title); this.rows = r; this.cols = c; }\n    @Override\n    public String getExtension() { return \".xlsx\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Jadval hajmi: \" + rows + \" qator x \" + cols + \" ustun\");\n    }\n}\n\nclass SourceCodeFile extends File {\n    private int loc;\n    public SourceCodeFile(String title, int lines) { super(title); this.loc = lines; }\n    @Override\n    public String getExtension() { return \".java\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Kod qatorlari: \" + loc + \" LOC\");\n    }\n}\n\nclass ReceiptPrintout implements IPrintable {\n    private String store; private double total;\n    public ReceiptPrintout(String s, double t) { this.store = s; this.total = t; }\n    @Override\n    public void print() {\n        System.out.println(\"KASSA CHEKI: \" + store + \" | Jami to'lov: \" + total + \" UZS\");\n    }\n}\n\nclass ShippingLabelPrintout implements IPrintable {\n    private String code; private String addr;\n    public ShippingLabelPrintout(String c, String a) { this.code = c; this.addr = a; }\n    @Override\n    public void print() {\n        System.out.println(\"YETKAZISH YORLIG'I: \" + code + \" -> Manzil: \" + addr);\n    }\n}\n\nclass BatchPrinter {\n    private List<IPrintable> queue = new ArrayList<>();\n    public void addPrintable(IPrintable p) { queue.add(p); }\n    public int printAll() {\n        for (IPrintable p : queue) p.print();\n        return queue.size();\n    }\n}\n\nclass PrintQueueManager {\n    private Queue<IPrintable> q = new ArrayDeque<>();\n    public void enqueue(IPrintable p) { q.offer(p); }\n    public void processNext() { IPrintable p = q.poll(); if (p != null) p.print(); }\n    public int getPendingCount() { return q.size(); }\n}\n\nclass FileAuditService {\n    private List<File> files = new ArrayList<>();\n    public void registerFile(File f) { files.add(f); }\n    public int countByExtension(String ext) {\n        int c = 0;\n        for (File f : files) if (f.getExtension().equals(ext)) c++;\n        return c;\n    }\n}\n\nclass WorkshopMasterRunner {\n    public void runMasterDemo() {\n        IPrintable[] list = new IPrintable[] { new TextFile(\"notes\", 100), new ImageFile(\"logo\", 400, 300), new PrintableDocument(\"Valeriya\", \"Tayyor.\") };\n        for (IPrintable p : list) p.print();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IPrintable label = new ShippingLabelPrintout(\"UZ-9988\", \"Toshkent, Amir Temur 12\");\n        label.print();\n    }\n}",
    "solution": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Queue;\nimport java.util.ArrayDeque;\n\ninterface IPrintable {\n    void print();\n}\n\nabstract class File implements IPrintable {\n    protected String title;\n    public File(String title) { this.title = title; }\n    public abstract String getExtension();\n    public void showHeader() {\n        System.out.println(\"=== \" + title + getExtension() + \" ===\");\n    }\n}\n\nclass SimpleDocument implements IPrintable {\n    private String name;\n    public SimpleDocument(String name) { this.name = name; }\n    @Override\n    public void print() { System.out.println(\"Hujjat chop etildi: \" + name); }\n}\n\nclass DummyFile extends File {\n    public DummyFile(String t) { super(t); }\n    @Override\n    public String getExtension() { return \".dat\"; }\n    @Override\n    public void print() { showHeader(); }\n}\n\nclass TextFile extends File {\n    private int wordCount;\n    public TextFile(String title, int words) { super(title); this.wordCount = words; }\n    @Override\n    public String getExtension() { return \".txt\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"So'zlar soni: \" + wordCount);\n    }\n}\n\nclass ImageFile extends File {\n    private int width;\n    private int height;\n    public ImageFile(String title, int w, int h) { super(title); this.width = w; this.height = h; }\n    @Override\n    public String getExtension() { return \".png\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"O'lchamlari: \" + width + \"x\" + height + \" px\");\n    }\n}\n\nclass PrintableDocument implements IPrintable {\n    private String author;\n    private String text;\n    public PrintableDocument(String a, String t) { this.author = a; this.text = t; }\n    @Override\n    public void print() {\n        System.out.println(\"Chop etiluvchi hujjat [Muallif: \" + author + \"]: \" + text);\n    }\n}\n\nclass PdfDocument extends File {\n    private int pageCount;\n    public PdfDocument(String title, int pages) { super(title); this.pageCount = pages; }\n    @Override\n    public String getExtension() { return \".pdf\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Sahifalar: \" + pageCount);\n    }\n}\n\nclass AudioTranscript extends File {\n    private int durationSeconds;\n    public AudioTranscript(String title, int dur) { super(title); this.durationSeconds = dur; }\n    @Override\n    public String getExtension() { return \".transcript\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Davomiylik: \" + durationSeconds + \" soniya\");\n    }\n}\n\nclass SpreadsheetFile extends File {\n    private int rows; private int cols;\n    public SpreadsheetFile(String title, int r, int c) { super(title); this.rows = r; this.cols = c; }\n    @Override\n    public String getExtension() { return \".xlsx\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Jadval hajmi: \" + rows + \" qator x \" + cols + \" ustun\");\n    }\n}\n\nclass SourceCodeFile extends File {\n    private int loc;\n    public SourceCodeFile(String title, int lines) { super(title); this.loc = lines; }\n    @Override\n    public String getExtension() { return \".java\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Kod qatorlari: \" + loc + \" LOC\");\n    }\n}\n\nclass ReceiptPrintout implements IPrintable {\n    private String store; private double total;\n    public ReceiptPrintout(String s, double t) { this.store = s; this.total = t; }\n    @Override\n    public void print() {\n        System.out.println(\"KASSA CHEKI: \" + store + \" | Jami to'lov: \" + total + \" UZS\");\n    }\n}\n\nclass ShippingLabelPrintout implements IPrintable {\n    private String code; private String addr;\n    public ShippingLabelPrintout(String c, String a) { this.code = c; this.addr = a; }\n    @Override\n    public void print() {\n        System.out.println(\"YETKAZISH YORLIG'I: \" + code + \" -> Manzil: \" + addr);\n    }\n}\n\nclass BatchPrinter {\n    private List<IPrintable> queue = new ArrayList<>();\n    public void addPrintable(IPrintable p) { queue.add(p); }\n    public int printAll() {\n        for (IPrintable p : queue) p.print();\n        return queue.size();\n    }\n}\n\nclass PrintQueueManager {\n    private Queue<IPrintable> q = new ArrayDeque<>();\n    public void enqueue(IPrintable p) { q.offer(p); }\n    public void processNext() { IPrintable p = q.poll(); if (p != null) p.print(); }\n    public int getPendingCount() { return q.size(); }\n}\n\nclass FileAuditService {\n    private List<File> files = new ArrayList<>();\n    public void registerFile(File f) { files.add(f); }\n    public int countByExtension(String ext) {\n        int c = 0;\n        for (File f : files) if (f.getExtension().equals(ext)) c++;\n        return c;\n    }\n}\n\nclass WorkshopMasterRunner {\n    public void runMasterDemo() {\n        IPrintable[] list = new IPrintable[] { new TextFile(\"notes\", 100), new ImageFile(\"logo\", 400, 300), new PrintableDocument(\"Valeriya\", \"Tayyor.\") };\n        for (IPrintable p : list) p.print();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IPrintable label = new ShippingLabelPrintout(\"UZ-9988\", \"Toshkent, Amir Temur 12\");\n        label.print();\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 'Workshop TW 6: Abstract Class & Interface' da IPrintable interfeysi va undan kelib chiquvchi 'abstract class File' tizimi ishlab chiqilgan. Bu laboratoriya ishi interfeys va abstrakt sinflarning real loyihada qanday birga ishlashini to'liq namoyon etadi.",
      "cleanCode": "interface IPrintable { void print(); }\nabstract class File implements IPrintable { ... }",
      "breakdown": [
        "<code>Workshop TW 6</code>: IPrintable va File polimorfik chop etish tizimi.",
        "<code>print</code>: chop etish operatsiyasi."
      ]
    }
  },
  {
    "id": 132,
    "tier": 9,
    "tierName": "9-Bosqich: Workshop TW 6: Polimorfik Chop Etish Tizimi",
    "sector": "121-135: Workshop TW 6 Printing System",
    "title": {
      "uz": "132. Workshop TW 6 — Ommaviy Chop Etuvchi (BatchPrinter)",
      "en": "132. Workshop TW 6 — BatchPrinter Iterating List<IPrintable>"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWorkshopning asosiy maqsadi: 'BatchPrinter' klassi 'List<IPrintable>' to'plamidagi turli xil fayllar va hujjatlarni birma-bir polimorfik tarzda chop etadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Workshop TW 6 spetsifikatsiyasi bo'yicha 'IPrintable' interfeysi va tegishli sinflarni tuzing.\n2. 'File' abstrakt sinfida 'showHeader()' umumiy metodini va 'abstract String getExtension()' ni e'lon qiling.\n3. Voris sinflarda kengaytma va chop etish logikasini (@Override) yozing.\n4. 'Main' metodida polimorfik chop etishni sinab ko'ring.\n5. Natijani chop eting: 'BatchPrinter bp = new BatchPrinter();         bp.addPrintable(new SimpleDocument(\"Hujjat 1\"));         bp.addPrintable(new SimpleDocument(\"Hujjat 2\"));         int count = bp.printAll();         System.out.println(\"Jami chop etildi: \" + count + \" ta\");'",
      "en": "📖 Real-World Scenario & Context\nBatchPrinter iterates over List<IPrintable> triggering polymorphic print() invocations.\n\n📋 Required Implementation Steps (1 to 5)\n1. Implement IPrintable and File hierarchy matching Workshop TW 6.\n2. Declare shared showHeader() and abstract getExtension() in File base.\n3. Override print() and provide custom file metadata.\n4. Demonstrate polymorphic printing in 'main'.\n5. Print result to console: 'BatchPrinter bp = new BatchPrinter();         bp.addPrintable(new SimpleDocument(\"Hujjat 1\"));         bp.addPrintable(new SimpleDocument(\"Hujjat 2\"));         int count = bp.printAll();         System.out.println(\"Jami chop etildi: \" + count + \" ta\");'"
    },
    "requirements": {
      "classes": [
        "BatchPrinter",
        "Main"
      ],
      "methods": [
        "printAll"
      ]
    },
    "starterCode": "// Workshop TW 6 klasslarini yozing\nimport java.util.List;\nimport java.util.ArrayList;\nimport java.util.Queue;\nimport java.util.ArrayDeque;\n\ninterface IPrintable {\n    void print();\n}\n\nabstract class File implements IPrintable {\n    protected String title;\n    public File(String title) { this.title = title; }\n    public abstract String getExtension();\n    public void showHeader() {\n        System.out.println(\"=== \" + title + getExtension() + \" ===\");\n    }\n}\n\nclass SimpleDocument implements IPrintable {\n    private String name;\n    public SimpleDocument(String name) { this.name = name; }\n    @Override\n    public void print() { System.out.println(\"Hujjat chop etildi: \" + name); }\n}\n\nclass DummyFile extends File {\n    public DummyFile(String t) { super(t); }\n    @Override\n    public String getExtension() { return \".dat\"; }\n    @Override\n    public void print() { showHeader(); }\n}\n\nclass TextFile extends File {\n    private int wordCount;\n    public TextFile(String title, int words) { super(title); this.wordCount = words; }\n    @Override\n    public String getExtension() { return \".txt\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"So'zlar soni: \" + wordCount);\n    }\n}\n\nclass ImageFile extends File {\n    private int width;\n    private int height;\n    public ImageFile(String title, int w, int h) { super(title); this.width = w; this.height = h; }\n    @Override\n    public String getExtension() { return \".png\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"O'lchamlari: \" + width + \"x\" + height + \" px\");\n    }\n}\n\nclass PrintableDocument implements IPrintable {\n    private String author;\n    private String text;\n    public PrintableDocument(String a, String t) { this.author = a; this.text = t; }\n    @Override\n    public void print() {\n        System.out.println(\"Chop etiluvchi hujjat [Muallif: \" + author + \"]: \" + text);\n    }\n}\n\nclass PdfDocument extends File {\n    private int pageCount;\n    public PdfDocument(String title, int pages) { super(title); this.pageCount = pages; }\n    @Override\n    public String getExtension() { return \".pdf\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Sahifalar: \" + pageCount);\n    }\n}\n\nclass AudioTranscript extends File {\n    private int durationSeconds;\n    public AudioTranscript(String title, int dur) { super(title); this.durationSeconds = dur; }\n    @Override\n    public String getExtension() { return \".transcript\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Davomiylik: \" + durationSeconds + \" soniya\");\n    }\n}\n\nclass SpreadsheetFile extends File {\n    private int rows; private int cols;\n    public SpreadsheetFile(String title, int r, int c) { super(title); this.rows = r; this.cols = c; }\n    @Override\n    public String getExtension() { return \".xlsx\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Jadval hajmi: \" + rows + \" qator x \" + cols + \" ustun\");\n    }\n}\n\nclass SourceCodeFile extends File {\n    private int loc;\n    public SourceCodeFile(String title, int lines) { super(title); this.loc = lines; }\n    @Override\n    public String getExtension() { return \".java\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Kod qatorlari: \" + loc + \" LOC\");\n    }\n}\n\nclass ReceiptPrintout implements IPrintable {\n    private String store; private double total;\n    public ReceiptPrintout(String s, double t) { this.store = s; this.total = t; }\n    @Override\n    public void print() {\n        System.out.println(\"KASSA CHEKI: \" + store + \" | Jami to'lov: \" + total + \" UZS\");\n    }\n}\n\nclass ShippingLabelPrintout implements IPrintable {\n    private String code; private String addr;\n    public ShippingLabelPrintout(String c, String a) { this.code = c; this.addr = a; }\n    @Override\n    public void print() {\n        System.out.println(\"YETKAZISH YORLIG'I: \" + code + \" -> Manzil: \" + addr);\n    }\n}\n\nclass BatchPrinter {\n    private List<IPrintable> queue = new ArrayList<>();\n    public void addPrintable(IPrintable p) { queue.add(p); }\n    public int printAll() {\n        for (IPrintable p : queue) p.print();\n        return queue.size();\n    }\n}\n\nclass PrintQueueManager {\n    private Queue<IPrintable> q = new ArrayDeque<>();\n    public void enqueue(IPrintable p) { q.offer(p); }\n    public void processNext() { IPrintable p = q.poll(); if (p != null) p.print(); }\n    public int getPendingCount() { return q.size(); }\n}\n\nclass FileAuditService {\n    private List<File> files = new ArrayList<>();\n    public void registerFile(File f) { files.add(f); }\n    public int countByExtension(String ext) {\n        int c = 0;\n        for (File f : files) if (f.getExtension().equals(ext)) c++;\n        return c;\n    }\n}\n\nclass WorkshopMasterRunner {\n    public void runMasterDemo() {\n        IPrintable[] list = new IPrintable[] { new TextFile(\"notes\", 100), new ImageFile(\"logo\", 400, 300), new PrintableDocument(\"Valeriya\", \"Tayyor.\") };\n        for (IPrintable p : list) p.print();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BatchPrinter bp = new BatchPrinter();\n        bp.addPrintable(new SimpleDocument(\"Hujjat 1\"));\n        bp.addPrintable(new SimpleDocument(\"Hujjat 2\"));\n        int count = bp.printAll();\n        System.out.println(\"Jami chop etildi: \" + count + \" ta\");\n    }\n}",
    "solution": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Queue;\nimport java.util.ArrayDeque;\n\ninterface IPrintable {\n    void print();\n}\n\nabstract class File implements IPrintable {\n    protected String title;\n    public File(String title) { this.title = title; }\n    public abstract String getExtension();\n    public void showHeader() {\n        System.out.println(\"=== \" + title + getExtension() + \" ===\");\n    }\n}\n\nclass SimpleDocument implements IPrintable {\n    private String name;\n    public SimpleDocument(String name) { this.name = name; }\n    @Override\n    public void print() { System.out.println(\"Hujjat chop etildi: \" + name); }\n}\n\nclass DummyFile extends File {\n    public DummyFile(String t) { super(t); }\n    @Override\n    public String getExtension() { return \".dat\"; }\n    @Override\n    public void print() { showHeader(); }\n}\n\nclass TextFile extends File {\n    private int wordCount;\n    public TextFile(String title, int words) { super(title); this.wordCount = words; }\n    @Override\n    public String getExtension() { return \".txt\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"So'zlar soni: \" + wordCount);\n    }\n}\n\nclass ImageFile extends File {\n    private int width;\n    private int height;\n    public ImageFile(String title, int w, int h) { super(title); this.width = w; this.height = h; }\n    @Override\n    public String getExtension() { return \".png\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"O'lchamlari: \" + width + \"x\" + height + \" px\");\n    }\n}\n\nclass PrintableDocument implements IPrintable {\n    private String author;\n    private String text;\n    public PrintableDocument(String a, String t) { this.author = a; this.text = t; }\n    @Override\n    public void print() {\n        System.out.println(\"Chop etiluvchi hujjat [Muallif: \" + author + \"]: \" + text);\n    }\n}\n\nclass PdfDocument extends File {\n    private int pageCount;\n    public PdfDocument(String title, int pages) { super(title); this.pageCount = pages; }\n    @Override\n    public String getExtension() { return \".pdf\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Sahifalar: \" + pageCount);\n    }\n}\n\nclass AudioTranscript extends File {\n    private int durationSeconds;\n    public AudioTranscript(String title, int dur) { super(title); this.durationSeconds = dur; }\n    @Override\n    public String getExtension() { return \".transcript\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Davomiylik: \" + durationSeconds + \" soniya\");\n    }\n}\n\nclass SpreadsheetFile extends File {\n    private int rows; private int cols;\n    public SpreadsheetFile(String title, int r, int c) { super(title); this.rows = r; this.cols = c; }\n    @Override\n    public String getExtension() { return \".xlsx\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Jadval hajmi: \" + rows + \" qator x \" + cols + \" ustun\");\n    }\n}\n\nclass SourceCodeFile extends File {\n    private int loc;\n    public SourceCodeFile(String title, int lines) { super(title); this.loc = lines; }\n    @Override\n    public String getExtension() { return \".java\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Kod qatorlari: \" + loc + \" LOC\");\n    }\n}\n\nclass ReceiptPrintout implements IPrintable {\n    private String store; private double total;\n    public ReceiptPrintout(String s, double t) { this.store = s; this.total = t; }\n    @Override\n    public void print() {\n        System.out.println(\"KASSA CHEKI: \" + store + \" | Jami to'lov: \" + total + \" UZS\");\n    }\n}\n\nclass ShippingLabelPrintout implements IPrintable {\n    private String code; private String addr;\n    public ShippingLabelPrintout(String c, String a) { this.code = c; this.addr = a; }\n    @Override\n    public void print() {\n        System.out.println(\"YETKAZISH YORLIG'I: \" + code + \" -> Manzil: \" + addr);\n    }\n}\n\nclass BatchPrinter {\n    private List<IPrintable> queue = new ArrayList<>();\n    public void addPrintable(IPrintable p) { queue.add(p); }\n    public int printAll() {\n        for (IPrintable p : queue) p.print();\n        return queue.size();\n    }\n}\n\nclass PrintQueueManager {\n    private Queue<IPrintable> q = new ArrayDeque<>();\n    public void enqueue(IPrintable p) { q.offer(p); }\n    public void processNext() { IPrintable p = q.poll(); if (p != null) p.print(); }\n    public int getPendingCount() { return q.size(); }\n}\n\nclass FileAuditService {\n    private List<File> files = new ArrayList<>();\n    public void registerFile(File f) { files.add(f); }\n    public int countByExtension(String ext) {\n        int c = 0;\n        for (File f : files) if (f.getExtension().equals(ext)) c++;\n        return c;\n    }\n}\n\nclass WorkshopMasterRunner {\n    public void runMasterDemo() {\n        IPrintable[] list = new IPrintable[] { new TextFile(\"notes\", 100), new ImageFile(\"logo\", 400, 300), new PrintableDocument(\"Valeriya\", \"Tayyor.\") };\n        for (IPrintable p : list) p.print();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BatchPrinter bp = new BatchPrinter();\n        bp.addPrintable(new SimpleDocument(\"Hujjat 1\"));\n        bp.addPrintable(new SimpleDocument(\"Hujjat 2\"));\n        int count = bp.printAll();\n        System.out.println(\"Jami chop etildi: \" + count + \" ta\");\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 'Workshop TW 6: Abstract Class & Interface' da IPrintable interfeysi va undan kelib chiquvchi 'abstract class File' tizimi ishlab chiqilgan. Bu laboratoriya ishi interfeys va abstrakt sinflarning real loyihada qanday birga ishlashini to'liq namoyon etadi.",
      "cleanCode": "interface IPrintable { void print(); }\nabstract class File implements IPrintable { ... }",
      "breakdown": [
        "<code>Workshop TW 6</code>: IPrintable va File polimorfik chop etish tizimi.",
        "<code>printAll</code>: chop etish operatsiyasi."
      ]
    }
  },
  {
    "id": 133,
    "tier": 9,
    "tierName": "9-Bosqich: Workshop TW 6: Polimorfik Chop Etish Tizimi",
    "sector": "121-135: Workshop TW 6 Printing System",
    "title": {
      "uz": "133. Workshop Kengaytmasi — Chop Etish Navbati (Queue<IPrintable>)",
      "en": "133. Workshop Extension — Print Queue Manager via Queue<IPrintable>"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nOfis printeriga yuborilgan navbatni boshqaruvchi 'PrintQueueManager' sinfida 'Queue<IPrintable>' orqali navbatdagi elementni chop eting va navbatdan chiqaring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Workshop TW 6 spetsifikatsiyasi bo'yicha 'IPrintable' interfeysi va tegishli sinflarni tuzing.\n2. 'File' abstrakt sinfida 'showHeader()' umumiy metodini va 'abstract String getExtension()' ni e'lon qiling.\n3. Voris sinflarda kengaytma va chop etish logikasini (@Override) yozing.\n4. 'Main' metodida polimorfik chop etishni sinab ko'ring.\n5. Natijani chop eting: 'PrintQueueManager q = new PrintQueueManager();         q.enqueue(new SimpleDocument(\"Hisobot A\"));         q.enqueue(new SimpleDocument(\"Hisobot B\"));         q.processNext();         System.out.println(\"Qolgan vazifalar: \" + q.getPendingCount());'",
      "en": "📖 Real-World Scenario & Context\nManage office printer job spooling via Queue<IPrintable> FIFO sequence.\n\n📋 Required Implementation Steps (1 to 5)\n1. Implement IPrintable and File hierarchy matching Workshop TW 6.\n2. Declare shared showHeader() and abstract getExtension() in File base.\n3. Override print() and provide custom file metadata.\n4. Demonstrate polymorphic printing in 'main'.\n5. Print result to console: 'PrintQueueManager q = new PrintQueueManager();         q.enqueue(new SimpleDocument(\"Hisobot A\"));         q.enqueue(new SimpleDocument(\"Hisobot B\"));         q.processNext();         System.out.println(\"Qolgan vazifalar: \" + q.getPendingCount());'"
    },
    "requirements": {
      "classes": [
        "PrintQueueManager",
        "Main"
      ],
      "methods": [
        "processNext"
      ]
    },
    "starterCode": "// Workshop TW 6 klasslarini yozing\nimport java.util.List;\nimport java.util.ArrayList;\nimport java.util.Queue;\nimport java.util.ArrayDeque;\n\ninterface IPrintable {\n    void print();\n}\n\nabstract class File implements IPrintable {\n    protected String title;\n    public File(String title) { this.title = title; }\n    public abstract String getExtension();\n    public void showHeader() {\n        System.out.println(\"=== \" + title + getExtension() + \" ===\");\n    }\n}\n\nclass SimpleDocument implements IPrintable {\n    private String name;\n    public SimpleDocument(String name) { this.name = name; }\n    @Override\n    public void print() { System.out.println(\"Hujjat chop etildi: \" + name); }\n}\n\nclass DummyFile extends File {\n    public DummyFile(String t) { super(t); }\n    @Override\n    public String getExtension() { return \".dat\"; }\n    @Override\n    public void print() { showHeader(); }\n}\n\nclass TextFile extends File {\n    private int wordCount;\n    public TextFile(String title, int words) { super(title); this.wordCount = words; }\n    @Override\n    public String getExtension() { return \".txt\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"So'zlar soni: \" + wordCount);\n    }\n}\n\nclass ImageFile extends File {\n    private int width;\n    private int height;\n    public ImageFile(String title, int w, int h) { super(title); this.width = w; this.height = h; }\n    @Override\n    public String getExtension() { return \".png\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"O'lchamlari: \" + width + \"x\" + height + \" px\");\n    }\n}\n\nclass PrintableDocument implements IPrintable {\n    private String author;\n    private String text;\n    public PrintableDocument(String a, String t) { this.author = a; this.text = t; }\n    @Override\n    public void print() {\n        System.out.println(\"Chop etiluvchi hujjat [Muallif: \" + author + \"]: \" + text);\n    }\n}\n\nclass PdfDocument extends File {\n    private int pageCount;\n    public PdfDocument(String title, int pages) { super(title); this.pageCount = pages; }\n    @Override\n    public String getExtension() { return \".pdf\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Sahifalar: \" + pageCount);\n    }\n}\n\nclass AudioTranscript extends File {\n    private int durationSeconds;\n    public AudioTranscript(String title, int dur) { super(title); this.durationSeconds = dur; }\n    @Override\n    public String getExtension() { return \".transcript\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Davomiylik: \" + durationSeconds + \" soniya\");\n    }\n}\n\nclass SpreadsheetFile extends File {\n    private int rows; private int cols;\n    public SpreadsheetFile(String title, int r, int c) { super(title); this.rows = r; this.cols = c; }\n    @Override\n    public String getExtension() { return \".xlsx\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Jadval hajmi: \" + rows + \" qator x \" + cols + \" ustun\");\n    }\n}\n\nclass SourceCodeFile extends File {\n    private int loc;\n    public SourceCodeFile(String title, int lines) { super(title); this.loc = lines; }\n    @Override\n    public String getExtension() { return \".java\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Kod qatorlari: \" + loc + \" LOC\");\n    }\n}\n\nclass ReceiptPrintout implements IPrintable {\n    private String store; private double total;\n    public ReceiptPrintout(String s, double t) { this.store = s; this.total = t; }\n    @Override\n    public void print() {\n        System.out.println(\"KASSA CHEKI: \" + store + \" | Jami to'lov: \" + total + \" UZS\");\n    }\n}\n\nclass ShippingLabelPrintout implements IPrintable {\n    private String code; private String addr;\n    public ShippingLabelPrintout(String c, String a) { this.code = c; this.addr = a; }\n    @Override\n    public void print() {\n        System.out.println(\"YETKAZISH YORLIG'I: \" + code + \" -> Manzil: \" + addr);\n    }\n}\n\nclass BatchPrinter {\n    private List<IPrintable> queue = new ArrayList<>();\n    public void addPrintable(IPrintable p) { queue.add(p); }\n    public int printAll() {\n        for (IPrintable p : queue) p.print();\n        return queue.size();\n    }\n}\n\nclass PrintQueueManager {\n    private Queue<IPrintable> q = new ArrayDeque<>();\n    public void enqueue(IPrintable p) { q.offer(p); }\n    public void processNext() { IPrintable p = q.poll(); if (p != null) p.print(); }\n    public int getPendingCount() { return q.size(); }\n}\n\nclass FileAuditService {\n    private List<File> files = new ArrayList<>();\n    public void registerFile(File f) { files.add(f); }\n    public int countByExtension(String ext) {\n        int c = 0;\n        for (File f : files) if (f.getExtension().equals(ext)) c++;\n        return c;\n    }\n}\n\nclass WorkshopMasterRunner {\n    public void runMasterDemo() {\n        IPrintable[] list = new IPrintable[] { new TextFile(\"notes\", 100), new ImageFile(\"logo\", 400, 300), new PrintableDocument(\"Valeriya\", \"Tayyor.\") };\n        for (IPrintable p : list) p.print();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PrintQueueManager q = new PrintQueueManager();\n        q.enqueue(new SimpleDocument(\"Hisobot A\"));\n        q.enqueue(new SimpleDocument(\"Hisobot B\"));\n        q.processNext();\n        System.out.println(\"Qolgan vazifalar: \" + q.getPendingCount());\n    }\n}",
    "solution": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Queue;\nimport java.util.ArrayDeque;\n\ninterface IPrintable {\n    void print();\n}\n\nabstract class File implements IPrintable {\n    protected String title;\n    public File(String title) { this.title = title; }\n    public abstract String getExtension();\n    public void showHeader() {\n        System.out.println(\"=== \" + title + getExtension() + \" ===\");\n    }\n}\n\nclass SimpleDocument implements IPrintable {\n    private String name;\n    public SimpleDocument(String name) { this.name = name; }\n    @Override\n    public void print() { System.out.println(\"Hujjat chop etildi: \" + name); }\n}\n\nclass DummyFile extends File {\n    public DummyFile(String t) { super(t); }\n    @Override\n    public String getExtension() { return \".dat\"; }\n    @Override\n    public void print() { showHeader(); }\n}\n\nclass TextFile extends File {\n    private int wordCount;\n    public TextFile(String title, int words) { super(title); this.wordCount = words; }\n    @Override\n    public String getExtension() { return \".txt\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"So'zlar soni: \" + wordCount);\n    }\n}\n\nclass ImageFile extends File {\n    private int width;\n    private int height;\n    public ImageFile(String title, int w, int h) { super(title); this.width = w; this.height = h; }\n    @Override\n    public String getExtension() { return \".png\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"O'lchamlari: \" + width + \"x\" + height + \" px\");\n    }\n}\n\nclass PrintableDocument implements IPrintable {\n    private String author;\n    private String text;\n    public PrintableDocument(String a, String t) { this.author = a; this.text = t; }\n    @Override\n    public void print() {\n        System.out.println(\"Chop etiluvchi hujjat [Muallif: \" + author + \"]: \" + text);\n    }\n}\n\nclass PdfDocument extends File {\n    private int pageCount;\n    public PdfDocument(String title, int pages) { super(title); this.pageCount = pages; }\n    @Override\n    public String getExtension() { return \".pdf\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Sahifalar: \" + pageCount);\n    }\n}\n\nclass AudioTranscript extends File {\n    private int durationSeconds;\n    public AudioTranscript(String title, int dur) { super(title); this.durationSeconds = dur; }\n    @Override\n    public String getExtension() { return \".transcript\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Davomiylik: \" + durationSeconds + \" soniya\");\n    }\n}\n\nclass SpreadsheetFile extends File {\n    private int rows; private int cols;\n    public SpreadsheetFile(String title, int r, int c) { super(title); this.rows = r; this.cols = c; }\n    @Override\n    public String getExtension() { return \".xlsx\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Jadval hajmi: \" + rows + \" qator x \" + cols + \" ustun\");\n    }\n}\n\nclass SourceCodeFile extends File {\n    private int loc;\n    public SourceCodeFile(String title, int lines) { super(title); this.loc = lines; }\n    @Override\n    public String getExtension() { return \".java\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Kod qatorlari: \" + loc + \" LOC\");\n    }\n}\n\nclass ReceiptPrintout implements IPrintable {\n    private String store; private double total;\n    public ReceiptPrintout(String s, double t) { this.store = s; this.total = t; }\n    @Override\n    public void print() {\n        System.out.println(\"KASSA CHEKI: \" + store + \" | Jami to'lov: \" + total + \" UZS\");\n    }\n}\n\nclass ShippingLabelPrintout implements IPrintable {\n    private String code; private String addr;\n    public ShippingLabelPrintout(String c, String a) { this.code = c; this.addr = a; }\n    @Override\n    public void print() {\n        System.out.println(\"YETKAZISH YORLIG'I: \" + code + \" -> Manzil: \" + addr);\n    }\n}\n\nclass BatchPrinter {\n    private List<IPrintable> queue = new ArrayList<>();\n    public void addPrintable(IPrintable p) { queue.add(p); }\n    public int printAll() {\n        for (IPrintable p : queue) p.print();\n        return queue.size();\n    }\n}\n\nclass PrintQueueManager {\n    private Queue<IPrintable> q = new ArrayDeque<>();\n    public void enqueue(IPrintable p) { q.offer(p); }\n    public void processNext() { IPrintable p = q.poll(); if (p != null) p.print(); }\n    public int getPendingCount() { return q.size(); }\n}\n\nclass FileAuditService {\n    private List<File> files = new ArrayList<>();\n    public void registerFile(File f) { files.add(f); }\n    public int countByExtension(String ext) {\n        int c = 0;\n        for (File f : files) if (f.getExtension().equals(ext)) c++;\n        return c;\n    }\n}\n\nclass WorkshopMasterRunner {\n    public void runMasterDemo() {\n        IPrintable[] list = new IPrintable[] { new TextFile(\"notes\", 100), new ImageFile(\"logo\", 400, 300), new PrintableDocument(\"Valeriya\", \"Tayyor.\") };\n        for (IPrintable p : list) p.print();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PrintQueueManager q = new PrintQueueManager();\n        q.enqueue(new SimpleDocument(\"Hisobot A\"));\n        q.enqueue(new SimpleDocument(\"Hisobot B\"));\n        q.processNext();\n        System.out.println(\"Qolgan vazifalar: \" + q.getPendingCount());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 'Workshop TW 6: Abstract Class & Interface' da IPrintable interfeysi va undan kelib chiquvchi 'abstract class File' tizimi ishlab chiqilgan. Bu laboratoriya ishi interfeys va abstrakt sinflarning real loyihada qanday birga ishlashini to'liq namoyon etadi.",
      "cleanCode": "interface IPrintable { void print(); }\nabstract class File implements IPrintable { ... }",
      "breakdown": [
        "<code>Workshop TW 6</code>: IPrintable va File polimorfik chop etish tizimi.",
        "<code>processNext</code>: chop etish operatsiyasi."
      ]
    }
  },
  {
    "id": 134,
    "tier": 9,
    "tierName": "9-Bosqich: Workshop TW 6: Polimorfik Chop Etish Tizimi",
    "sector": "121-135: Workshop TW 6 Printing System",
    "title": {
      "uz": "134. Workshop Kengaytmasi — Fayl Kengaytmasi Bo'yicha Sanash",
      "en": "134. Workshop Extension — Counting Specific File Types in Print Spooler"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\n'FileAuditService' klassi 'List<File>' ro'yxatida ma'lum bir kengaytmadagi (masalan, '.txt') fayllar sonini hisoblovchi metodni taqdim etadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Workshop TW 6 spetsifikatsiyasi bo'yicha 'IPrintable' interfeysi va tegishli sinflarni tuzing.\n2. 'File' abstrakt sinfida 'showHeader()' umumiy metodini va 'abstract String getExtension()' ni e'lon qiling.\n3. Voris sinflarda kengaytma va chop etish logikasini (@Override) yozing.\n4. 'Main' metodida polimorfik chop etishni sinab ko'ring.\n5. Natijani chop eting: 'FileAuditService audit = new FileAuditService();         audit.registerFile(new TextFile(\"a\", 10));         audit.registerFile(new TextFile(\"b\", 20));         audit.registerFile(new ImageFile(\"c\", 10, 10));         System.out.println(\".txt fayllar soni: \" + audit.countByExtension(\".txt\"));'",
      "en": "📖 Real-World Scenario & Context\nCount files matching specific extension within collection of File objects.\n\n📋 Required Implementation Steps (1 to 5)\n1. Implement IPrintable and File hierarchy matching Workshop TW 6.\n2. Declare shared showHeader() and abstract getExtension() in File base.\n3. Override print() and provide custom file metadata.\n4. Demonstrate polymorphic printing in 'main'.\n5. Print result to console: 'FileAuditService audit = new FileAuditService();         audit.registerFile(new TextFile(\"a\", 10));         audit.registerFile(new TextFile(\"b\", 20));         audit.registerFile(new ImageFile(\"c\", 10, 10));         System.out.println(\".txt fayllar soni: \" + audit.countByExtension(\".txt\"));'"
    },
    "requirements": {
      "classes": [
        "FileAuditService",
        "Main"
      ],
      "methods": [
        "countByExtension"
      ]
    },
    "starterCode": "// Workshop TW 6 klasslarini yozing\nimport java.util.List;\nimport java.util.ArrayList;\nimport java.util.Queue;\nimport java.util.ArrayDeque;\n\ninterface IPrintable {\n    void print();\n}\n\nabstract class File implements IPrintable {\n    protected String title;\n    public File(String title) { this.title = title; }\n    public abstract String getExtension();\n    public void showHeader() {\n        System.out.println(\"=== \" + title + getExtension() + \" ===\");\n    }\n}\n\nclass SimpleDocument implements IPrintable {\n    private String name;\n    public SimpleDocument(String name) { this.name = name; }\n    @Override\n    public void print() { System.out.println(\"Hujjat chop etildi: \" + name); }\n}\n\nclass DummyFile extends File {\n    public DummyFile(String t) { super(t); }\n    @Override\n    public String getExtension() { return \".dat\"; }\n    @Override\n    public void print() { showHeader(); }\n}\n\nclass TextFile extends File {\n    private int wordCount;\n    public TextFile(String title, int words) { super(title); this.wordCount = words; }\n    @Override\n    public String getExtension() { return \".txt\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"So'zlar soni: \" + wordCount);\n    }\n}\n\nclass ImageFile extends File {\n    private int width;\n    private int height;\n    public ImageFile(String title, int w, int h) { super(title); this.width = w; this.height = h; }\n    @Override\n    public String getExtension() { return \".png\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"O'lchamlari: \" + width + \"x\" + height + \" px\");\n    }\n}\n\nclass PrintableDocument implements IPrintable {\n    private String author;\n    private String text;\n    public PrintableDocument(String a, String t) { this.author = a; this.text = t; }\n    @Override\n    public void print() {\n        System.out.println(\"Chop etiluvchi hujjat [Muallif: \" + author + \"]: \" + text);\n    }\n}\n\nclass PdfDocument extends File {\n    private int pageCount;\n    public PdfDocument(String title, int pages) { super(title); this.pageCount = pages; }\n    @Override\n    public String getExtension() { return \".pdf\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Sahifalar: \" + pageCount);\n    }\n}\n\nclass AudioTranscript extends File {\n    private int durationSeconds;\n    public AudioTranscript(String title, int dur) { super(title); this.durationSeconds = dur; }\n    @Override\n    public String getExtension() { return \".transcript\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Davomiylik: \" + durationSeconds + \" soniya\");\n    }\n}\n\nclass SpreadsheetFile extends File {\n    private int rows; private int cols;\n    public SpreadsheetFile(String title, int r, int c) { super(title); this.rows = r; this.cols = c; }\n    @Override\n    public String getExtension() { return \".xlsx\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Jadval hajmi: \" + rows + \" qator x \" + cols + \" ustun\");\n    }\n}\n\nclass SourceCodeFile extends File {\n    private int loc;\n    public SourceCodeFile(String title, int lines) { super(title); this.loc = lines; }\n    @Override\n    public String getExtension() { return \".java\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Kod qatorlari: \" + loc + \" LOC\");\n    }\n}\n\nclass ReceiptPrintout implements IPrintable {\n    private String store; private double total;\n    public ReceiptPrintout(String s, double t) { this.store = s; this.total = t; }\n    @Override\n    public void print() {\n        System.out.println(\"KASSA CHEKI: \" + store + \" | Jami to'lov: \" + total + \" UZS\");\n    }\n}\n\nclass ShippingLabelPrintout implements IPrintable {\n    private String code; private String addr;\n    public ShippingLabelPrintout(String c, String a) { this.code = c; this.addr = a; }\n    @Override\n    public void print() {\n        System.out.println(\"YETKAZISH YORLIG'I: \" + code + \" -> Manzil: \" + addr);\n    }\n}\n\nclass BatchPrinter {\n    private List<IPrintable> queue = new ArrayList<>();\n    public void addPrintable(IPrintable p) { queue.add(p); }\n    public int printAll() {\n        for (IPrintable p : queue) p.print();\n        return queue.size();\n    }\n}\n\nclass PrintQueueManager {\n    private Queue<IPrintable> q = new ArrayDeque<>();\n    public void enqueue(IPrintable p) { q.offer(p); }\n    public void processNext() { IPrintable p = q.poll(); if (p != null) p.print(); }\n    public int getPendingCount() { return q.size(); }\n}\n\nclass FileAuditService {\n    private List<File> files = new ArrayList<>();\n    public void registerFile(File f) { files.add(f); }\n    public int countByExtension(String ext) {\n        int c = 0;\n        for (File f : files) if (f.getExtension().equals(ext)) c++;\n        return c;\n    }\n}\n\nclass WorkshopMasterRunner {\n    public void runMasterDemo() {\n        IPrintable[] list = new IPrintable[] { new TextFile(\"notes\", 100), new ImageFile(\"logo\", 400, 300), new PrintableDocument(\"Valeriya\", \"Tayyor.\") };\n        for (IPrintable p : list) p.print();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FileAuditService audit = new FileAuditService();\n        audit.registerFile(new TextFile(\"a\", 10));\n        audit.registerFile(new TextFile(\"b\", 20));\n        audit.registerFile(new ImageFile(\"c\", 10, 10));\n        System.out.println(\".txt fayllar soni: \" + audit.countByExtension(\".txt\"));\n    }\n}",
    "solution": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Queue;\nimport java.util.ArrayDeque;\n\ninterface IPrintable {\n    void print();\n}\n\nabstract class File implements IPrintable {\n    protected String title;\n    public File(String title) { this.title = title; }\n    public abstract String getExtension();\n    public void showHeader() {\n        System.out.println(\"=== \" + title + getExtension() + \" ===\");\n    }\n}\n\nclass SimpleDocument implements IPrintable {\n    private String name;\n    public SimpleDocument(String name) { this.name = name; }\n    @Override\n    public void print() { System.out.println(\"Hujjat chop etildi: \" + name); }\n}\n\nclass DummyFile extends File {\n    public DummyFile(String t) { super(t); }\n    @Override\n    public String getExtension() { return \".dat\"; }\n    @Override\n    public void print() { showHeader(); }\n}\n\nclass TextFile extends File {\n    private int wordCount;\n    public TextFile(String title, int words) { super(title); this.wordCount = words; }\n    @Override\n    public String getExtension() { return \".txt\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"So'zlar soni: \" + wordCount);\n    }\n}\n\nclass ImageFile extends File {\n    private int width;\n    private int height;\n    public ImageFile(String title, int w, int h) { super(title); this.width = w; this.height = h; }\n    @Override\n    public String getExtension() { return \".png\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"O'lchamlari: \" + width + \"x\" + height + \" px\");\n    }\n}\n\nclass PrintableDocument implements IPrintable {\n    private String author;\n    private String text;\n    public PrintableDocument(String a, String t) { this.author = a; this.text = t; }\n    @Override\n    public void print() {\n        System.out.println(\"Chop etiluvchi hujjat [Muallif: \" + author + \"]: \" + text);\n    }\n}\n\nclass PdfDocument extends File {\n    private int pageCount;\n    public PdfDocument(String title, int pages) { super(title); this.pageCount = pages; }\n    @Override\n    public String getExtension() { return \".pdf\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Sahifalar: \" + pageCount);\n    }\n}\n\nclass AudioTranscript extends File {\n    private int durationSeconds;\n    public AudioTranscript(String title, int dur) { super(title); this.durationSeconds = dur; }\n    @Override\n    public String getExtension() { return \".transcript\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Davomiylik: \" + durationSeconds + \" soniya\");\n    }\n}\n\nclass SpreadsheetFile extends File {\n    private int rows; private int cols;\n    public SpreadsheetFile(String title, int r, int c) { super(title); this.rows = r; this.cols = c; }\n    @Override\n    public String getExtension() { return \".xlsx\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Jadval hajmi: \" + rows + \" qator x \" + cols + \" ustun\");\n    }\n}\n\nclass SourceCodeFile extends File {\n    private int loc;\n    public SourceCodeFile(String title, int lines) { super(title); this.loc = lines; }\n    @Override\n    public String getExtension() { return \".java\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Kod qatorlari: \" + loc + \" LOC\");\n    }\n}\n\nclass ReceiptPrintout implements IPrintable {\n    private String store; private double total;\n    public ReceiptPrintout(String s, double t) { this.store = s; this.total = t; }\n    @Override\n    public void print() {\n        System.out.println(\"KASSA CHEKI: \" + store + \" | Jami to'lov: \" + total + \" UZS\");\n    }\n}\n\nclass ShippingLabelPrintout implements IPrintable {\n    private String code; private String addr;\n    public ShippingLabelPrintout(String c, String a) { this.code = c; this.addr = a; }\n    @Override\n    public void print() {\n        System.out.println(\"YETKAZISH YORLIG'I: \" + code + \" -> Manzil: \" + addr);\n    }\n}\n\nclass BatchPrinter {\n    private List<IPrintable> queue = new ArrayList<>();\n    public void addPrintable(IPrintable p) { queue.add(p); }\n    public int printAll() {\n        for (IPrintable p : queue) p.print();\n        return queue.size();\n    }\n}\n\nclass PrintQueueManager {\n    private Queue<IPrintable> q = new ArrayDeque<>();\n    public void enqueue(IPrintable p) { q.offer(p); }\n    public void processNext() { IPrintable p = q.poll(); if (p != null) p.print(); }\n    public int getPendingCount() { return q.size(); }\n}\n\nclass FileAuditService {\n    private List<File> files = new ArrayList<>();\n    public void registerFile(File f) { files.add(f); }\n    public int countByExtension(String ext) {\n        int c = 0;\n        for (File f : files) if (f.getExtension().equals(ext)) c++;\n        return c;\n    }\n}\n\nclass WorkshopMasterRunner {\n    public void runMasterDemo() {\n        IPrintable[] list = new IPrintable[] { new TextFile(\"notes\", 100), new ImageFile(\"logo\", 400, 300), new PrintableDocument(\"Valeriya\", \"Tayyor.\") };\n        for (IPrintable p : list) p.print();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FileAuditService audit = new FileAuditService();\n        audit.registerFile(new TextFile(\"a\", 10));\n        audit.registerFile(new TextFile(\"b\", 20));\n        audit.registerFile(new ImageFile(\"c\", 10, 10));\n        System.out.println(\".txt fayllar soni: \" + audit.countByExtension(\".txt\"));\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 'Workshop TW 6: Abstract Class & Interface' da IPrintable interfeysi va undan kelib chiquvchi 'abstract class File' tizimi ishlab chiqilgan. Bu laboratoriya ishi interfeys va abstrakt sinflarning real loyihada qanday birga ishlashini to'liq namoyon etadi.",
      "cleanCode": "interface IPrintable { void print(); }\nabstract class File implements IPrintable { ... }",
      "breakdown": [
        "<code>Workshop TW 6</code>: IPrintable va File polimorfik chop etish tizimi.",
        "<code>countByExtension</code>: chop etish operatsiyasi."
      ]
    }
  },
  {
    "id": 135,
    "tier": 9,
    "tierName": "9-Bosqich: Workshop TW 6: Polimorfik Chop Etish Tizimi",
    "sector": "121-135: Workshop TW 6 Printing System",
    "title": {
      "uz": "135. Workshop TW 6 To'liq Sinovi — Polimorfizm Cho'qqisi",
      "en": "135. Workshop TW 6 Full Integration — Text, Image & Documents Combined"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWorkshop TW 6 darsining to'liq xulosasi: 'TextFile', 'ImageFile' va 'PrintableDocument' ob'yektlarini bitta 'IPrintable[]' massivida birlashtirib bir xil interfeys orqali chop eting.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Workshop TW 6 spetsifikatsiyasi bo'yicha 'IPrintable' interfeysi va tegishli sinflarni tuzing.\n2. 'File' abstrakt sinfida 'showHeader()' umumiy metodini va 'abstract String getExtension()' ni e'lon qiling.\n3. Voris sinflarda kengaytma va chop etish logikasini (@Override) yozing.\n4. 'Main' metodida polimorfik chop etishni sinab ko'ring.\n5. Natijani chop eting: 'WorkshopMasterRunner runner = new WorkshopMasterRunner();         runner.runMasterDemo();'",
      "en": "📖 Real-World Scenario & Context\nCombine TextFile, ImageFile, and PrintableDocument in a unified polymorphic demonstration.\n\n📋 Required Implementation Steps (1 to 5)\n1. Implement IPrintable and File hierarchy matching Workshop TW 6.\n2. Declare shared showHeader() and abstract getExtension() in File base.\n3. Override print() and provide custom file metadata.\n4. Demonstrate polymorphic printing in 'main'.\n5. Print result to console: 'WorkshopMasterRunner runner = new WorkshopMasterRunner();         runner.runMasterDemo();'"
    },
    "requirements": {
      "classes": [
        "WorkshopMasterRunner",
        "Main"
      ],
      "methods": [
        "runMasterDemo"
      ]
    },
    "starterCode": "// Workshop TW 6 klasslarini yozing\nimport java.util.List;\nimport java.util.ArrayList;\nimport java.util.Queue;\nimport java.util.ArrayDeque;\n\ninterface IPrintable {\n    void print();\n}\n\nabstract class File implements IPrintable {\n    protected String title;\n    public File(String title) { this.title = title; }\n    public abstract String getExtension();\n    public void showHeader() {\n        System.out.println(\"=== \" + title + getExtension() + \" ===\");\n    }\n}\n\nclass SimpleDocument implements IPrintable {\n    private String name;\n    public SimpleDocument(String name) { this.name = name; }\n    @Override\n    public void print() { System.out.println(\"Hujjat chop etildi: \" + name); }\n}\n\nclass DummyFile extends File {\n    public DummyFile(String t) { super(t); }\n    @Override\n    public String getExtension() { return \".dat\"; }\n    @Override\n    public void print() { showHeader(); }\n}\n\nclass TextFile extends File {\n    private int wordCount;\n    public TextFile(String title, int words) { super(title); this.wordCount = words; }\n    @Override\n    public String getExtension() { return \".txt\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"So'zlar soni: \" + wordCount);\n    }\n}\n\nclass ImageFile extends File {\n    private int width;\n    private int height;\n    public ImageFile(String title, int w, int h) { super(title); this.width = w; this.height = h; }\n    @Override\n    public String getExtension() { return \".png\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"O'lchamlari: \" + width + \"x\" + height + \" px\");\n    }\n}\n\nclass PrintableDocument implements IPrintable {\n    private String author;\n    private String text;\n    public PrintableDocument(String a, String t) { this.author = a; this.text = t; }\n    @Override\n    public void print() {\n        System.out.println(\"Chop etiluvchi hujjat [Muallif: \" + author + \"]: \" + text);\n    }\n}\n\nclass PdfDocument extends File {\n    private int pageCount;\n    public PdfDocument(String title, int pages) { super(title); this.pageCount = pages; }\n    @Override\n    public String getExtension() { return \".pdf\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Sahifalar: \" + pageCount);\n    }\n}\n\nclass AudioTranscript extends File {\n    private int durationSeconds;\n    public AudioTranscript(String title, int dur) { super(title); this.durationSeconds = dur; }\n    @Override\n    public String getExtension() { return \".transcript\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Davomiylik: \" + durationSeconds + \" soniya\");\n    }\n}\n\nclass SpreadsheetFile extends File {\n    private int rows; private int cols;\n    public SpreadsheetFile(String title, int r, int c) { super(title); this.rows = r; this.cols = c; }\n    @Override\n    public String getExtension() { return \".xlsx\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Jadval hajmi: \" + rows + \" qator x \" + cols + \" ustun\");\n    }\n}\n\nclass SourceCodeFile extends File {\n    private int loc;\n    public SourceCodeFile(String title, int lines) { super(title); this.loc = lines; }\n    @Override\n    public String getExtension() { return \".java\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Kod qatorlari: \" + loc + \" LOC\");\n    }\n}\n\nclass ReceiptPrintout implements IPrintable {\n    private String store; private double total;\n    public ReceiptPrintout(String s, double t) { this.store = s; this.total = t; }\n    @Override\n    public void print() {\n        System.out.println(\"KASSA CHEKI: \" + store + \" | Jami to'lov: \" + total + \" UZS\");\n    }\n}\n\nclass ShippingLabelPrintout implements IPrintable {\n    private String code; private String addr;\n    public ShippingLabelPrintout(String c, String a) { this.code = c; this.addr = a; }\n    @Override\n    public void print() {\n        System.out.println(\"YETKAZISH YORLIG'I: \" + code + \" -> Manzil: \" + addr);\n    }\n}\n\nclass BatchPrinter {\n    private List<IPrintable> queue = new ArrayList<>();\n    public void addPrintable(IPrintable p) { queue.add(p); }\n    public int printAll() {\n        for (IPrintable p : queue) p.print();\n        return queue.size();\n    }\n}\n\nclass PrintQueueManager {\n    private Queue<IPrintable> q = new ArrayDeque<>();\n    public void enqueue(IPrintable p) { q.offer(p); }\n    public void processNext() { IPrintable p = q.poll(); if (p != null) p.print(); }\n    public int getPendingCount() { return q.size(); }\n}\n\nclass FileAuditService {\n    private List<File> files = new ArrayList<>();\n    public void registerFile(File f) { files.add(f); }\n    public int countByExtension(String ext) {\n        int c = 0;\n        for (File f : files) if (f.getExtension().equals(ext)) c++;\n        return c;\n    }\n}\n\nclass WorkshopMasterRunner {\n    public void runMasterDemo() {\n        IPrintable[] list = new IPrintable[] { new TextFile(\"notes\", 100), new ImageFile(\"logo\", 400, 300), new PrintableDocument(\"Valeriya\", \"Tayyor.\") };\n        for (IPrintable p : list) p.print();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WorkshopMasterRunner runner = new WorkshopMasterRunner();\n        runner.runMasterDemo();\n    }\n}",
    "solution": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Queue;\nimport java.util.ArrayDeque;\n\ninterface IPrintable {\n    void print();\n}\n\nabstract class File implements IPrintable {\n    protected String title;\n    public File(String title) { this.title = title; }\n    public abstract String getExtension();\n    public void showHeader() {\n        System.out.println(\"=== \" + title + getExtension() + \" ===\");\n    }\n}\n\nclass SimpleDocument implements IPrintable {\n    private String name;\n    public SimpleDocument(String name) { this.name = name; }\n    @Override\n    public void print() { System.out.println(\"Hujjat chop etildi: \" + name); }\n}\n\nclass DummyFile extends File {\n    public DummyFile(String t) { super(t); }\n    @Override\n    public String getExtension() { return \".dat\"; }\n    @Override\n    public void print() { showHeader(); }\n}\n\nclass TextFile extends File {\n    private int wordCount;\n    public TextFile(String title, int words) { super(title); this.wordCount = words; }\n    @Override\n    public String getExtension() { return \".txt\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"So'zlar soni: \" + wordCount);\n    }\n}\n\nclass ImageFile extends File {\n    private int width;\n    private int height;\n    public ImageFile(String title, int w, int h) { super(title); this.width = w; this.height = h; }\n    @Override\n    public String getExtension() { return \".png\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"O'lchamlari: \" + width + \"x\" + height + \" px\");\n    }\n}\n\nclass PrintableDocument implements IPrintable {\n    private String author;\n    private String text;\n    public PrintableDocument(String a, String t) { this.author = a; this.text = t; }\n    @Override\n    public void print() {\n        System.out.println(\"Chop etiluvchi hujjat [Muallif: \" + author + \"]: \" + text);\n    }\n}\n\nclass PdfDocument extends File {\n    private int pageCount;\n    public PdfDocument(String title, int pages) { super(title); this.pageCount = pages; }\n    @Override\n    public String getExtension() { return \".pdf\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Sahifalar: \" + pageCount);\n    }\n}\n\nclass AudioTranscript extends File {\n    private int durationSeconds;\n    public AudioTranscript(String title, int dur) { super(title); this.durationSeconds = dur; }\n    @Override\n    public String getExtension() { return \".transcript\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Davomiylik: \" + durationSeconds + \" soniya\");\n    }\n}\n\nclass SpreadsheetFile extends File {\n    private int rows; private int cols;\n    public SpreadsheetFile(String title, int r, int c) { super(title); this.rows = r; this.cols = c; }\n    @Override\n    public String getExtension() { return \".xlsx\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Jadval hajmi: \" + rows + \" qator x \" + cols + \" ustun\");\n    }\n}\n\nclass SourceCodeFile extends File {\n    private int loc;\n    public SourceCodeFile(String title, int lines) { super(title); this.loc = lines; }\n    @Override\n    public String getExtension() { return \".java\"; }\n    @Override\n    public void print() {\n        showHeader();\n        System.out.println(\"Kod qatorlari: \" + loc + \" LOC\");\n    }\n}\n\nclass ReceiptPrintout implements IPrintable {\n    private String store; private double total;\n    public ReceiptPrintout(String s, double t) { this.store = s; this.total = t; }\n    @Override\n    public void print() {\n        System.out.println(\"KASSA CHEKI: \" + store + \" | Jami to'lov: \" + total + \" UZS\");\n    }\n}\n\nclass ShippingLabelPrintout implements IPrintable {\n    private String code; private String addr;\n    public ShippingLabelPrintout(String c, String a) { this.code = c; this.addr = a; }\n    @Override\n    public void print() {\n        System.out.println(\"YETKAZISH YORLIG'I: \" + code + \" -> Manzil: \" + addr);\n    }\n}\n\nclass BatchPrinter {\n    private List<IPrintable> queue = new ArrayList<>();\n    public void addPrintable(IPrintable p) { queue.add(p); }\n    public int printAll() {\n        for (IPrintable p : queue) p.print();\n        return queue.size();\n    }\n}\n\nclass PrintQueueManager {\n    private Queue<IPrintable> q = new ArrayDeque<>();\n    public void enqueue(IPrintable p) { q.offer(p); }\n    public void processNext() { IPrintable p = q.poll(); if (p != null) p.print(); }\n    public int getPendingCount() { return q.size(); }\n}\n\nclass FileAuditService {\n    private List<File> files = new ArrayList<>();\n    public void registerFile(File f) { files.add(f); }\n    public int countByExtension(String ext) {\n        int c = 0;\n        for (File f : files) if (f.getExtension().equals(ext)) c++;\n        return c;\n    }\n}\n\nclass WorkshopMasterRunner {\n    public void runMasterDemo() {\n        IPrintable[] list = new IPrintable[] { new TextFile(\"notes\", 100), new ImageFile(\"logo\", 400, 300), new PrintableDocument(\"Valeriya\", \"Tayyor.\") };\n        for (IPrintable p : list) p.print();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WorkshopMasterRunner runner = new WorkshopMasterRunner();\n        runner.runMasterDemo();\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 'Workshop TW 6: Abstract Class & Interface' da IPrintable interfeysi va undan kelib chiquvchi 'abstract class File' tizimi ishlab chiqilgan. Bu laboratoriya ishi interfeys va abstrakt sinflarning real loyihada qanday birga ishlashini to'liq namoyon etadi.",
      "cleanCode": "interface IPrintable { void print(); }\nabstract class File implements IPrintable { ... }",
      "breakdown": [
        "<code>Workshop TW 6</code>: IPrintable va File polimorfik chop etish tizimi.",
        "<code>runMasterDemo</code>: chop etish operatsiyasi."
      ]
    }
  },
  {
    "id": 136,
    "tier": 10,
    "tierName": "10-Bosqich: CW2 6-Hafta To'liq Arxitekturasi: To'lovlar, Keshbek va Xabarnomalar",
    "sector": "136-150: CW2 Week 6 Architecture Milestone",
    "title": {
      "uz": "136. CW2 Arxitekturasi — Product Abstrakt Sinfga Aylanishi",
      "en": "136. CW2 Architecture — Product Transformed into Abstract Superclass"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT 6-hafta yechimi: 'Product' sinfi abstrakt qilib o'zgartirildi: 'public abstract double calculateDeliveryCost();'. Endi bevosita 'new Product()' qilib bo'lmaydi. Ushbu abstrakt sinfni dasturlang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. WIUT 6-hafta 'OOPSolution_Week6' rasmiy arxitekturasini e'lon qiling.\n2. 'Product' sinfini abstrakt ('calculateDeliveryCost()') qiling va 'PhysicalProduct', 'DigitalProduct' larni yarating.\n3. 'Payable' va 'CashbackEligible' interfeyslarini tuzib, 'BankCard', 'BonusBalance' va 'GiftCard' klasslarini bajaring.\n4. 'Notification' abstrakt sinfi va 'MobileNotification', 'WebNotification' vorislarini qo'shing.\n5. 'Main' da to'liq biznes oqimini tekshiring: 'Product p = new PhysicalProduct(\"Kitob\", 50000.0, 10, true, 'A', 0.5, false);         System.out.println(p.getName() + \" yetkazish narxi: \" + p.calculateDeliveryCost() + \" UZS\");'",
      "en": "📖 Real-World Scenario & Context\nProduct class is now abstract with abstract calculateDeliveryCost() matching Week 6 solution.\n\n📋 Required Implementation Steps (1 to 5)\n1. Implement official Week 6 architecture matching OOPSolution_Week6.\n2. Make Product abstract and implement delivery costs in PhysicalProduct and DigitalProduct.\n3. Implement Payable, CashbackEligible, BankCard, BonusBalance, and GiftCard.\n4. Add Notification hierarchy with MobileNotification and WebNotification.\n5. Execute in 'main' and verify: 'Product p = new PhysicalProduct(\"Kitob\", 50000.0, 10, true, 'A', 0.5, false);         System.out.println(p.getName() + \" yetkazish narxi: \" + p.calculateDeliveryCost() + \" UZS\");'"
    },
    "requirements": {
      "classes": [
        "Customer",
        "Main"
      ],
      "methods": [
        "main"
      ]
    },
    "starterCode": "// Week 6 OOPSolution to'liq arxitekturasi\nimport java.util.List;\nimport java.util.ArrayList;\nimport java.util.Map;\nimport java.util.LinkedHashMap;\nimport java.util.Set;\nimport java.util.LinkedHashSet;\n\ninterface Payable {\n    boolean processPayment(double amount);\n}\n\ninterface CashbackEligible {\n    double calculateCashback(double amount);\n}\n\nclass ShippingAddress {\n    private String street;\n    private String city;\n    private String postalCode;\n    public ShippingAddress(String s, String c, String p) {\n        this.street = s; this.city = c; this.postalCode = p;\n    }\n    public String getStreet() { return street; }\n    public String getCity() { return city; }\n    public String getPostalCode() { return postalCode; }\n    @Override\n    public String toString() { return street + \", \" + city; }\n}\n\nclass BankCard implements Payable, CashbackEligible {\n    private String cardNumber;\n    private String holderName;\n    private double balance;\n    public BankCard(String num, String name, double bal) {\n        this.cardNumber = num; this.holderName = name; this.balance = bal;\n    }\n    public String getMaskedNumber() {\n        return \"**** \" + cardNumber.substring(cardNumber.length() - 4);\n    }\n    public double getBalance() { return Math.round(balance * 100.0) / 100.0; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0) return false;\n        if (amount > balance) {\n            System.out.println(\"Payment declined: not enough money on card \" + getMaskedNumber() + \".\");\n            return false;\n        }\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" by bank card \" + getMaskedNumber() + \". Money left on the card: \" + getBalance());\n        return true;\n    }\n    @Override\n    public double calculateCashback(double amount) {\n        return Math.round(amount * 0.01 * 100.0) / 100.0;\n    }\n}\n\nclass BonusBalance implements Payable {\n    private double points;\n    public BonusBalance(double pts) { this.points = pts; }\n    public double getPoints() { return Math.round(points * 100.0) / 100.0; }\n    public void addPoints(double amount) { if (amount > 0) points += amount; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > points) return false;\n        points -= amount;\n        System.out.println(\"Paid \" + amount + \" with bonus points. Points left: \" + getPoints());\n        return true;\n    }\n}\n\nabstract class Product {\n    private String name;\n    private double price;\n    private int quantity;\n    public boolean inStock;\n    public char grade;\n    public Product(String n, double p, int q, boolean stock, char g) {\n        this.name = n; this.price = p; this.quantity = q; this.inStock = stock; this.grade = g;\n    }\n    public String getName() { return name; }\n    public double getPrice() { return price; }\n    protected double roundToTwoDecimals(double val) { return Math.round(val * 100.0) / 100.0; }\n    public double getPriceWithTax() { return roundToTwoDecimals(price * 1.12); }\n    public abstract double calculateDeliveryCost();\n}\n\nclass PhysicalProduct extends Product {\n    private double weightKg;\n    private boolean fragile;\n    public PhysicalProduct(String n, double p, int q, boolean stock, char g, double w, boolean frag) {\n        super(n, p, q, stock, g);\n        this.weightKg = w;\n        this.fragile = frag;\n    }\n    @Override\n    public double calculateDeliveryCost() {\n        double base = 15000.0;\n        if (weightKg > 10.0) base += 10000.0;\n        if (fragile) base += 10000.0;\n        return base;\n    }\n}\n\nclass DigitalProduct extends Product {\n    private double fileSizeMb;\n    private String downloadUrl;\n    public DigitalProduct(String n, double p, char g, double size, String url) {\n        super(n, p, 1, true, g);\n        this.fileSizeMb = size;\n        this.downloadUrl = url;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n}\n\nclass GiftCard extends Product implements Payable {\n    private String code;\n    private double balance;\n    public GiftCard(String name, double price, String code) {\n        super(name, price, 1, true, 'A');\n        this.code = code;\n        this.balance = price;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n    @Override\n    public double getPriceWithTax() { return getPrice(); }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > balance) return false;\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" with gift card \" + code + \". Left on the card: \" + balance);\n        return true;\n    }\n}\n\nabstract class Notification {\n    private Customer customer;\n    private String message;\n    public Notification(Customer c, String m) { this.customer = c; this.message = m; }\n    public Customer getCustomer() { return customer; }\n    public String getMessage() { return message; }\n    public abstract void send();\n}\n\nclass MobileNotification extends Notification {\n    private String deviceName;\n    public MobileNotification(Customer c, String m, String dev) { super(c, m); this.deviceName = dev; }\n    @Override\n    public void send() {\n        System.out.println(\"Push notification to \" + getCustomer().getName() + \"'s \" + deviceName + \": \" + getMessage());\n    }\n}\n\nclass WebNotification extends Notification {\n    private String browser;\n    public WebNotification(Customer c, String m, String b) { super(c, m); this.browser = b; }\n    @Override\n    public void send() {\n        System.out.println(\"Browser notification in \" + browser + \" for \" + getCustomer().getName() + \": \" + getMessage());\n    }\n}\n\nclass Customer {\n    private String name;\n    private int loyaltyPoints;\n    private double accountBalance;\n    private ShippingAddress shippingAddress;\n    private BankCard bankCard;\n    private BonusBalance bonusBalance = new BonusBalance(0.0);\n    private Map<String, ShippingAddress> deliveryAddresses = new LinkedHashMap<>();\n    public Customer(String name, int pts, double bal) {\n        this.name = name; this.loyaltyPoints = pts; this.accountBalance = bal;\n    }\n    public String getName() { return name; }\n    public ShippingAddress getShippingAddress() { return shippingAddress;\n    }\n    public void addBankCard(String num, double bal) { this.bankCard = new BankCard(num, name, bal); }\n    public BankCard getBankCard() { return bankCard; }\n    public BonusBalance getBonusBalance() { return bonusBalance; }\n    public void addDeliveryAddress(String label, ShippingAddress a) { deliveryAddresses.put(label, a); }\n    public boolean useDeliveryAddress(String label) {\n        ShippingAddress a = deliveryAddresses.get(label);\n        if (a != null) { this.shippingAddress = a; System.out.println(\"Orders will now be shipped to \\\"\" + label + \"\\\".\"); return true; }\n        return false;\n    }\n    public boolean pay(Payable method, double amount) {\n        boolean paid = method.processPayment(amount);\n        if (paid && method instanceof CashbackEligible eligible) {\n            double cb = eligible.calculateCashback(amount);\n            bonusBalance.addPoints(cb);\n            System.out.println(\"Cashback \" + cb + \" added. Bonus points: \" + bonusBalance.getPoints());\n        }\n        return paid;\n    }\n}\n\nclass OrderItem {\n    private Product product;\n    private int quantity;\n    public OrderItem(Product p, int q) { this.product = p; this.quantity = q; }\n    public Product getProduct() { return product; }\n    public double getLineTotal() { return product.getPriceWithTax() * quantity; }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    public Order(String id, Customer c) { this.orderId = id; this.customer = c; }\n    public void addItem(Product p, int q) { items.add(new OrderItem(p, q)); }\n    public double getTotal() {\n        double sum = 0;\n        for (OrderItem it : items) sum += it.getLineTotal() + it.getProduct().calculateDeliveryCost();\n        return Math.round(sum * 100.0) / 100.0;\n    }\n    public void printSummary() {\n        System.out.println(\"Order \" + orderId + \" for \" + (customer != null ? customer.getName() : \"Guest\") + \" | Total: \" + getTotal());\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product p = new PhysicalProduct(\"Kitob\", 50000.0, 10, true, 'A', 0.5, false);\n        System.out.println(p.getName() + \" yetkazish narxi: \" + p.calculateDeliveryCost() + \" UZS\");\n    }\n}",
    "solution": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Map;\nimport java.util.LinkedHashMap;\nimport java.util.Set;\nimport java.util.LinkedHashSet;\n\ninterface Payable {\n    boolean processPayment(double amount);\n}\n\ninterface CashbackEligible {\n    double calculateCashback(double amount);\n}\n\nclass ShippingAddress {\n    private String street;\n    private String city;\n    private String postalCode;\n    public ShippingAddress(String s, String c, String p) {\n        this.street = s; this.city = c; this.postalCode = p;\n    }\n    public String getStreet() { return street; }\n    public String getCity() { return city; }\n    public String getPostalCode() { return postalCode; }\n    @Override\n    public String toString() { return street + \", \" + city; }\n}\n\nclass BankCard implements Payable, CashbackEligible {\n    private String cardNumber;\n    private String holderName;\n    private double balance;\n    public BankCard(String num, String name, double bal) {\n        this.cardNumber = num; this.holderName = name; this.balance = bal;\n    }\n    public String getMaskedNumber() {\n        return \"**** \" + cardNumber.substring(cardNumber.length() - 4);\n    }\n    public double getBalance() { return Math.round(balance * 100.0) / 100.0; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0) return false;\n        if (amount > balance) {\n            System.out.println(\"Payment declined: not enough money on card \" + getMaskedNumber() + \".\");\n            return false;\n        }\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" by bank card \" + getMaskedNumber() + \". Money left on the card: \" + getBalance());\n        return true;\n    }\n    @Override\n    public double calculateCashback(double amount) {\n        return Math.round(amount * 0.01 * 100.0) / 100.0;\n    }\n}\n\nclass BonusBalance implements Payable {\n    private double points;\n    public BonusBalance(double pts) { this.points = pts; }\n    public double getPoints() { return Math.round(points * 100.0) / 100.0; }\n    public void addPoints(double amount) { if (amount > 0) points += amount; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > points) return false;\n        points -= amount;\n        System.out.println(\"Paid \" + amount + \" with bonus points. Points left: \" + getPoints());\n        return true;\n    }\n}\n\nabstract class Product {\n    private String name;\n    private double price;\n    private int quantity;\n    public boolean inStock;\n    public char grade;\n    public Product(String n, double p, int q, boolean stock, char g) {\n        this.name = n; this.price = p; this.quantity = q; this.inStock = stock; this.grade = g;\n    }\n    public String getName() { return name; }\n    public double getPrice() { return price; }\n    protected double roundToTwoDecimals(double val) { return Math.round(val * 100.0) / 100.0; }\n    public double getPriceWithTax() { return roundToTwoDecimals(price * 1.12); }\n    public abstract double calculateDeliveryCost();\n}\n\nclass PhysicalProduct extends Product {\n    private double weightKg;\n    private boolean fragile;\n    public PhysicalProduct(String n, double p, int q, boolean stock, char g, double w, boolean frag) {\n        super(n, p, q, stock, g);\n        this.weightKg = w;\n        this.fragile = frag;\n    }\n    @Override\n    public double calculateDeliveryCost() {\n        double base = 15000.0;\n        if (weightKg > 10.0) base += 10000.0;\n        if (fragile) base += 10000.0;\n        return base;\n    }\n}\n\nclass DigitalProduct extends Product {\n    private double fileSizeMb;\n    private String downloadUrl;\n    public DigitalProduct(String n, double p, char g, double size, String url) {\n        super(n, p, 1, true, g);\n        this.fileSizeMb = size;\n        this.downloadUrl = url;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n}\n\nclass GiftCard extends Product implements Payable {\n    private String code;\n    private double balance;\n    public GiftCard(String name, double price, String code) {\n        super(name, price, 1, true, 'A');\n        this.code = code;\n        this.balance = price;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n    @Override\n    public double getPriceWithTax() { return getPrice(); }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > balance) return false;\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" with gift card \" + code + \". Left on the card: \" + balance);\n        return true;\n    }\n}\n\nabstract class Notification {\n    private Customer customer;\n    private String message;\n    public Notification(Customer c, String m) { this.customer = c; this.message = m; }\n    public Customer getCustomer() { return customer; }\n    public String getMessage() { return message; }\n    public abstract void send();\n}\n\nclass MobileNotification extends Notification {\n    private String deviceName;\n    public MobileNotification(Customer c, String m, String dev) { super(c, m); this.deviceName = dev; }\n    @Override\n    public void send() {\n        System.out.println(\"Push notification to \" + getCustomer().getName() + \"'s \" + deviceName + \": \" + getMessage());\n    }\n}\n\nclass WebNotification extends Notification {\n    private String browser;\n    public WebNotification(Customer c, String m, String b) { super(c, m); this.browser = b; }\n    @Override\n    public void send() {\n        System.out.println(\"Browser notification in \" + browser + \" for \" + getCustomer().getName() + \": \" + getMessage());\n    }\n}\n\nclass Customer {\n    private String name;\n    private int loyaltyPoints;\n    private double accountBalance;\n    private ShippingAddress shippingAddress;\n    private BankCard bankCard;\n    private BonusBalance bonusBalance = new BonusBalance(0.0);\n    private Map<String, ShippingAddress> deliveryAddresses = new LinkedHashMap<>();\n    public Customer(String name, int pts, double bal) {\n        this.name = name; this.loyaltyPoints = pts; this.accountBalance = bal;\n    }\n    public String getName() { return name; }\n    public ShippingAddress getShippingAddress() { return shippingAddress;\n    }\n    public void addBankCard(String num, double bal) { this.bankCard = new BankCard(num, name, bal); }\n    public BankCard getBankCard() { return bankCard; }\n    public BonusBalance getBonusBalance() { return bonusBalance; }\n    public void addDeliveryAddress(String label, ShippingAddress a) { deliveryAddresses.put(label, a); }\n    public boolean useDeliveryAddress(String label) {\n        ShippingAddress a = deliveryAddresses.get(label);\n        if (a != null) { this.shippingAddress = a; System.out.println(\"Orders will now be shipped to \\\"\" + label + \"\\\".\"); return true; }\n        return false;\n    }\n    public boolean pay(Payable method, double amount) {\n        boolean paid = method.processPayment(amount);\n        if (paid && method instanceof CashbackEligible eligible) {\n            double cb = eligible.calculateCashback(amount);\n            bonusBalance.addPoints(cb);\n            System.out.println(\"Cashback \" + cb + \" added. Bonus points: \" + bonusBalance.getPoints());\n        }\n        return paid;\n    }\n}\n\nclass OrderItem {\n    private Product product;\n    private int quantity;\n    public OrderItem(Product p, int q) { this.product = p; this.quantity = q; }\n    public Product getProduct() { return product; }\n    public double getLineTotal() { return product.getPriceWithTax() * quantity; }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    public Order(String id, Customer c) { this.orderId = id; this.customer = c; }\n    public void addItem(Product p, int q) { items.add(new OrderItem(p, q)); }\n    public double getTotal() {\n        double sum = 0;\n        for (OrderItem it : items) sum += it.getLineTotal() + it.getProduct().calculateDeliveryCost();\n        return Math.round(sum * 100.0) / 100.0;\n    }\n    public void printSummary() {\n        System.out.println(\"Order \" + orderId + \" for \" + (customer != null ? customer.getName() : \"Guest\") + \" | Total: \" + getTotal());\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product p = new PhysicalProduct(\"Kitob\", 50000.0, 10, true, 'A', 0.5, false);\n        System.out.println(p.getName() + \" yetkazish narxi: \" + p.calculateDeliveryCost() + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 6-hafta yechimi Coursework 2 arxitekturasining markaziy qismidir: Product abstrakt sinfga aylanadi, to'lovlar 'Payable' va 'CashbackEligible' interfeyslariga o'tkaziladi, xabarnomalar esa 'Notification' abstrakt sinfi orqali mobil yoki veb push sifatida yetkaziladi.",
      "cleanCode": "class Customer {\n    public boolean pay(Payable method, double amount) {\n        boolean paid = method.processPayment(amount);\n        if (paid && method instanceof CashbackEligible eligible) {\n            bonusBalance.addPoints(eligible.calculateCashback(amount));\n        }\n        return paid;\n    }\n}",
      "breakdown": [
        "<code>OOPSolution_Week6</code>: to'liq rasmiy yechim klasslari.",
        "<code>Customer.pay()</code>: polimorfik to'lov va avtomatik keshbek."
      ]
    }
  },
  {
    "id": 137,
    "tier": 10,
    "tierName": "10-Bosqich: CW2 6-Hafta To'liq Arxitekturasi: To'lovlar, Keshbek va Xabarnomalar",
    "sector": "136-150: CW2 Week 6 Architecture Milestone",
    "title": {
      "uz": "137. CW2 Arxitekturasi — PhysicalProduct Yetkazish Xarajati Algoritmi",
      "en": "137. CW2 Architecture — PhysicalProduct Delivery Calculation Rules"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\n6-hafta yechimida 'PhysicalProduct' yetkazish narxi: bazaviy 15000 UZS. Agar vazn 10 kg dan oshsa +10000 UZS, nozik (fragile) bo'lsa yana +10000 UZS qo'shiladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. WIUT 6-hafta 'OOPSolution_Week6' rasmiy arxitekturasini e'lon qiling.\n2. 'Product' sinfini abstrakt ('calculateDeliveryCost()') qiling va 'PhysicalProduct', 'DigitalProduct' larni yarating.\n3. 'Payable' va 'CashbackEligible' interfeyslarini tuzib, 'BankCard', 'BonusBalance' va 'GiftCard' klasslarini bajaring.\n4. 'Notification' abstrakt sinfi va 'MobileNotification', 'WebNotification' vorislarini qo'shing.\n5. 'Main' da to'liq biznes oqimini tekshiring: 'PhysicalProduct tv = new PhysicalProduct(\"Televizor\", 4000000.0, 5, true, 'A', 12.0, true);         System.out.println(\"Yetkazish narxi: \" + tv.calculateDeliveryCost() + \" UZS\");'",
      "en": "📖 Real-World Scenario & Context\nPhysicalProduct overrides calculateDeliveryCost applying weight and fragility surcharges.\n\n📋 Required Implementation Steps (1 to 5)\n1. Implement official Week 6 architecture matching OOPSolution_Week6.\n2. Make Product abstract and implement delivery costs in PhysicalProduct and DigitalProduct.\n3. Implement Payable, CashbackEligible, BankCard, BonusBalance, and GiftCard.\n4. Add Notification hierarchy with MobileNotification and WebNotification.\n5. Execute in 'main' and verify: 'PhysicalProduct tv = new PhysicalProduct(\"Televizor\", 4000000.0, 5, true, 'A', 12.0, true);         System.out.println(\"Yetkazish narxi: \" + tv.calculateDeliveryCost() + \" UZS\");'"
    },
    "requirements": {
      "classes": [
        "Customer",
        "Main"
      ],
      "methods": [
        "main"
      ]
    },
    "starterCode": "// Week 6 OOPSolution to'liq arxitekturasi\nimport java.util.List;\nimport java.util.ArrayList;\nimport java.util.Map;\nimport java.util.LinkedHashMap;\nimport java.util.Set;\nimport java.util.LinkedHashSet;\n\ninterface Payable {\n    boolean processPayment(double amount);\n}\n\ninterface CashbackEligible {\n    double calculateCashback(double amount);\n}\n\nclass ShippingAddress {\n    private String street;\n    private String city;\n    private String postalCode;\n    public ShippingAddress(String s, String c, String p) {\n        this.street = s; this.city = c; this.postalCode = p;\n    }\n    public String getStreet() { return street; }\n    public String getCity() { return city; }\n    public String getPostalCode() { return postalCode; }\n    @Override\n    public String toString() { return street + \", \" + city; }\n}\n\nclass BankCard implements Payable, CashbackEligible {\n    private String cardNumber;\n    private String holderName;\n    private double balance;\n    public BankCard(String num, String name, double bal) {\n        this.cardNumber = num; this.holderName = name; this.balance = bal;\n    }\n    public String getMaskedNumber() {\n        return \"**** \" + cardNumber.substring(cardNumber.length() - 4);\n    }\n    public double getBalance() { return Math.round(balance * 100.0) / 100.0; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0) return false;\n        if (amount > balance) {\n            System.out.println(\"Payment declined: not enough money on card \" + getMaskedNumber() + \".\");\n            return false;\n        }\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" by bank card \" + getMaskedNumber() + \". Money left on the card: \" + getBalance());\n        return true;\n    }\n    @Override\n    public double calculateCashback(double amount) {\n        return Math.round(amount * 0.01 * 100.0) / 100.0;\n    }\n}\n\nclass BonusBalance implements Payable {\n    private double points;\n    public BonusBalance(double pts) { this.points = pts; }\n    public double getPoints() { return Math.round(points * 100.0) / 100.0; }\n    public void addPoints(double amount) { if (amount > 0) points += amount; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > points) return false;\n        points -= amount;\n        System.out.println(\"Paid \" + amount + \" with bonus points. Points left: \" + getPoints());\n        return true;\n    }\n}\n\nabstract class Product {\n    private String name;\n    private double price;\n    private int quantity;\n    public boolean inStock;\n    public char grade;\n    public Product(String n, double p, int q, boolean stock, char g) {\n        this.name = n; this.price = p; this.quantity = q; this.inStock = stock; this.grade = g;\n    }\n    public String getName() { return name; }\n    public double getPrice() { return price; }\n    protected double roundToTwoDecimals(double val) { return Math.round(val * 100.0) / 100.0; }\n    public double getPriceWithTax() { return roundToTwoDecimals(price * 1.12); }\n    public abstract double calculateDeliveryCost();\n}\n\nclass PhysicalProduct extends Product {\n    private double weightKg;\n    private boolean fragile;\n    public PhysicalProduct(String n, double p, int q, boolean stock, char g, double w, boolean frag) {\n        super(n, p, q, stock, g);\n        this.weightKg = w;\n        this.fragile = frag;\n    }\n    @Override\n    public double calculateDeliveryCost() {\n        double base = 15000.0;\n        if (weightKg > 10.0) base += 10000.0;\n        if (fragile) base += 10000.0;\n        return base;\n    }\n}\n\nclass DigitalProduct extends Product {\n    private double fileSizeMb;\n    private String downloadUrl;\n    public DigitalProduct(String n, double p, char g, double size, String url) {\n        super(n, p, 1, true, g);\n        this.fileSizeMb = size;\n        this.downloadUrl = url;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n}\n\nclass GiftCard extends Product implements Payable {\n    private String code;\n    private double balance;\n    public GiftCard(String name, double price, String code) {\n        super(name, price, 1, true, 'A');\n        this.code = code;\n        this.balance = price;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n    @Override\n    public double getPriceWithTax() { return getPrice(); }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > balance) return false;\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" with gift card \" + code + \". Left on the card: \" + balance);\n        return true;\n    }\n}\n\nabstract class Notification {\n    private Customer customer;\n    private String message;\n    public Notification(Customer c, String m) { this.customer = c; this.message = m; }\n    public Customer getCustomer() { return customer; }\n    public String getMessage() { return message; }\n    public abstract void send();\n}\n\nclass MobileNotification extends Notification {\n    private String deviceName;\n    public MobileNotification(Customer c, String m, String dev) { super(c, m); this.deviceName = dev; }\n    @Override\n    public void send() {\n        System.out.println(\"Push notification to \" + getCustomer().getName() + \"'s \" + deviceName + \": \" + getMessage());\n    }\n}\n\nclass WebNotification extends Notification {\n    private String browser;\n    public WebNotification(Customer c, String m, String b) { super(c, m); this.browser = b; }\n    @Override\n    public void send() {\n        System.out.println(\"Browser notification in \" + browser + \" for \" + getCustomer().getName() + \": \" + getMessage());\n    }\n}\n\nclass Customer {\n    private String name;\n    private int loyaltyPoints;\n    private double accountBalance;\n    private ShippingAddress shippingAddress;\n    private BankCard bankCard;\n    private BonusBalance bonusBalance = new BonusBalance(0.0);\n    private Map<String, ShippingAddress> deliveryAddresses = new LinkedHashMap<>();\n    public Customer(String name, int pts, double bal) {\n        this.name = name; this.loyaltyPoints = pts; this.accountBalance = bal;\n    }\n    public String getName() { return name; }\n    public ShippingAddress getShippingAddress() { return shippingAddress;\n    }\n    public void addBankCard(String num, double bal) { this.bankCard = new BankCard(num, name, bal); }\n    public BankCard getBankCard() { return bankCard; }\n    public BonusBalance getBonusBalance() { return bonusBalance; }\n    public void addDeliveryAddress(String label, ShippingAddress a) { deliveryAddresses.put(label, a); }\n    public boolean useDeliveryAddress(String label) {\n        ShippingAddress a = deliveryAddresses.get(label);\n        if (a != null) { this.shippingAddress = a; System.out.println(\"Orders will now be shipped to \\\"\" + label + \"\\\".\"); return true; }\n        return false;\n    }\n    public boolean pay(Payable method, double amount) {\n        boolean paid = method.processPayment(amount);\n        if (paid && method instanceof CashbackEligible eligible) {\n            double cb = eligible.calculateCashback(amount);\n            bonusBalance.addPoints(cb);\n            System.out.println(\"Cashback \" + cb + \" added. Bonus points: \" + bonusBalance.getPoints());\n        }\n        return paid;\n    }\n}\n\nclass OrderItem {\n    private Product product;\n    private int quantity;\n    public OrderItem(Product p, int q) { this.product = p; this.quantity = q; }\n    public Product getProduct() { return product; }\n    public double getLineTotal() { return product.getPriceWithTax() * quantity; }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    public Order(String id, Customer c) { this.orderId = id; this.customer = c; }\n    public void addItem(Product p, int q) { items.add(new OrderItem(p, q)); }\n    public double getTotal() {\n        double sum = 0;\n        for (OrderItem it : items) sum += it.getLineTotal() + it.getProduct().calculateDeliveryCost();\n        return Math.round(sum * 100.0) / 100.0;\n    }\n    public void printSummary() {\n        System.out.println(\"Order \" + orderId + \" for \" + (customer != null ? customer.getName() : \"Guest\") + \" | Total: \" + getTotal());\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PhysicalProduct tv = new PhysicalProduct(\"Televizor\", 4000000.0, 5, true, 'A', 12.0, true);\n        System.out.println(\"Yetkazish narxi: \" + tv.calculateDeliveryCost() + \" UZS\");\n    }\n}",
    "solution": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Map;\nimport java.util.LinkedHashMap;\nimport java.util.Set;\nimport java.util.LinkedHashSet;\n\ninterface Payable {\n    boolean processPayment(double amount);\n}\n\ninterface CashbackEligible {\n    double calculateCashback(double amount);\n}\n\nclass ShippingAddress {\n    private String street;\n    private String city;\n    private String postalCode;\n    public ShippingAddress(String s, String c, String p) {\n        this.street = s; this.city = c; this.postalCode = p;\n    }\n    public String getStreet() { return street; }\n    public String getCity() { return city; }\n    public String getPostalCode() { return postalCode; }\n    @Override\n    public String toString() { return street + \", \" + city; }\n}\n\nclass BankCard implements Payable, CashbackEligible {\n    private String cardNumber;\n    private String holderName;\n    private double balance;\n    public BankCard(String num, String name, double bal) {\n        this.cardNumber = num; this.holderName = name; this.balance = bal;\n    }\n    public String getMaskedNumber() {\n        return \"**** \" + cardNumber.substring(cardNumber.length() - 4);\n    }\n    public double getBalance() { return Math.round(balance * 100.0) / 100.0; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0) return false;\n        if (amount > balance) {\n            System.out.println(\"Payment declined: not enough money on card \" + getMaskedNumber() + \".\");\n            return false;\n        }\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" by bank card \" + getMaskedNumber() + \". Money left on the card: \" + getBalance());\n        return true;\n    }\n    @Override\n    public double calculateCashback(double amount) {\n        return Math.round(amount * 0.01 * 100.0) / 100.0;\n    }\n}\n\nclass BonusBalance implements Payable {\n    private double points;\n    public BonusBalance(double pts) { this.points = pts; }\n    public double getPoints() { return Math.round(points * 100.0) / 100.0; }\n    public void addPoints(double amount) { if (amount > 0) points += amount; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > points) return false;\n        points -= amount;\n        System.out.println(\"Paid \" + amount + \" with bonus points. Points left: \" + getPoints());\n        return true;\n    }\n}\n\nabstract class Product {\n    private String name;\n    private double price;\n    private int quantity;\n    public boolean inStock;\n    public char grade;\n    public Product(String n, double p, int q, boolean stock, char g) {\n        this.name = n; this.price = p; this.quantity = q; this.inStock = stock; this.grade = g;\n    }\n    public String getName() { return name; }\n    public double getPrice() { return price; }\n    protected double roundToTwoDecimals(double val) { return Math.round(val * 100.0) / 100.0; }\n    public double getPriceWithTax() { return roundToTwoDecimals(price * 1.12); }\n    public abstract double calculateDeliveryCost();\n}\n\nclass PhysicalProduct extends Product {\n    private double weightKg;\n    private boolean fragile;\n    public PhysicalProduct(String n, double p, int q, boolean stock, char g, double w, boolean frag) {\n        super(n, p, q, stock, g);\n        this.weightKg = w;\n        this.fragile = frag;\n    }\n    @Override\n    public double calculateDeliveryCost() {\n        double base = 15000.0;\n        if (weightKg > 10.0) base += 10000.0;\n        if (fragile) base += 10000.0;\n        return base;\n    }\n}\n\nclass DigitalProduct extends Product {\n    private double fileSizeMb;\n    private String downloadUrl;\n    public DigitalProduct(String n, double p, char g, double size, String url) {\n        super(n, p, 1, true, g);\n        this.fileSizeMb = size;\n        this.downloadUrl = url;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n}\n\nclass GiftCard extends Product implements Payable {\n    private String code;\n    private double balance;\n    public GiftCard(String name, double price, String code) {\n        super(name, price, 1, true, 'A');\n        this.code = code;\n        this.balance = price;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n    @Override\n    public double getPriceWithTax() { return getPrice(); }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > balance) return false;\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" with gift card \" + code + \". Left on the card: \" + balance);\n        return true;\n    }\n}\n\nabstract class Notification {\n    private Customer customer;\n    private String message;\n    public Notification(Customer c, String m) { this.customer = c; this.message = m; }\n    public Customer getCustomer() { return customer; }\n    public String getMessage() { return message; }\n    public abstract void send();\n}\n\nclass MobileNotification extends Notification {\n    private String deviceName;\n    public MobileNotification(Customer c, String m, String dev) { super(c, m); this.deviceName = dev; }\n    @Override\n    public void send() {\n        System.out.println(\"Push notification to \" + getCustomer().getName() + \"'s \" + deviceName + \": \" + getMessage());\n    }\n}\n\nclass WebNotification extends Notification {\n    private String browser;\n    public WebNotification(Customer c, String m, String b) { super(c, m); this.browser = b; }\n    @Override\n    public void send() {\n        System.out.println(\"Browser notification in \" + browser + \" for \" + getCustomer().getName() + \": \" + getMessage());\n    }\n}\n\nclass Customer {\n    private String name;\n    private int loyaltyPoints;\n    private double accountBalance;\n    private ShippingAddress shippingAddress;\n    private BankCard bankCard;\n    private BonusBalance bonusBalance = new BonusBalance(0.0);\n    private Map<String, ShippingAddress> deliveryAddresses = new LinkedHashMap<>();\n    public Customer(String name, int pts, double bal) {\n        this.name = name; this.loyaltyPoints = pts; this.accountBalance = bal;\n    }\n    public String getName() { return name; }\n    public ShippingAddress getShippingAddress() { return shippingAddress;\n    }\n    public void addBankCard(String num, double bal) { this.bankCard = new BankCard(num, name, bal); }\n    public BankCard getBankCard() { return bankCard; }\n    public BonusBalance getBonusBalance() { return bonusBalance; }\n    public void addDeliveryAddress(String label, ShippingAddress a) { deliveryAddresses.put(label, a); }\n    public boolean useDeliveryAddress(String label) {\n        ShippingAddress a = deliveryAddresses.get(label);\n        if (a != null) { this.shippingAddress = a; System.out.println(\"Orders will now be shipped to \\\"\" + label + \"\\\".\"); return true; }\n        return false;\n    }\n    public boolean pay(Payable method, double amount) {\n        boolean paid = method.processPayment(amount);\n        if (paid && method instanceof CashbackEligible eligible) {\n            double cb = eligible.calculateCashback(amount);\n            bonusBalance.addPoints(cb);\n            System.out.println(\"Cashback \" + cb + \" added. Bonus points: \" + bonusBalance.getPoints());\n        }\n        return paid;\n    }\n}\n\nclass OrderItem {\n    private Product product;\n    private int quantity;\n    public OrderItem(Product p, int q) { this.product = p; this.quantity = q; }\n    public Product getProduct() { return product; }\n    public double getLineTotal() { return product.getPriceWithTax() * quantity; }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    public Order(String id, Customer c) { this.orderId = id; this.customer = c; }\n    public void addItem(Product p, int q) { items.add(new OrderItem(p, q)); }\n    public double getTotal() {\n        double sum = 0;\n        for (OrderItem it : items) sum += it.getLineTotal() + it.getProduct().calculateDeliveryCost();\n        return Math.round(sum * 100.0) / 100.0;\n    }\n    public void printSummary() {\n        System.out.println(\"Order \" + orderId + \" for \" + (customer != null ? customer.getName() : \"Guest\") + \" | Total: \" + getTotal());\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PhysicalProduct tv = new PhysicalProduct(\"Televizor\", 4000000.0, 5, true, 'A', 12.0, true);\n        System.out.println(\"Yetkazish narxi: \" + tv.calculateDeliveryCost() + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 6-hafta yechimi Coursework 2 arxitekturasining markaziy qismidir: Product abstrakt sinfga aylanadi, to'lovlar 'Payable' va 'CashbackEligible' interfeyslariga o'tkaziladi, xabarnomalar esa 'Notification' abstrakt sinfi orqali mobil yoki veb push sifatida yetkaziladi.",
      "cleanCode": "class Customer {\n    public boolean pay(Payable method, double amount) {\n        boolean paid = method.processPayment(amount);\n        if (paid && method instanceof CashbackEligible eligible) {\n            bonusBalance.addPoints(eligible.calculateCashback(amount));\n        }\n        return paid;\n    }\n}",
      "breakdown": [
        "<code>OOPSolution_Week6</code>: to'liq rasmiy yechim klasslari.",
        "<code>Customer.pay()</code>: polimorfik to'lov va avtomatik keshbek."
      ]
    }
  },
  {
    "id": 138,
    "tier": 10,
    "tierName": "10-Bosqich: CW2 6-Hafta To'liq Arxitekturasi: To'lovlar, Keshbek va Xabarnomalar",
    "sector": "136-150: CW2 Week 6 Architecture Milestone",
    "title": {
      "uz": "138. CW2 Arxitekturasi — DigitalProduct Yetkazish Xarajati (0.0 UZS)",
      "en": "138. CW2 Architecture — DigitalProduct Zero Delivery Cost Rule"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nRaqamli mahsulotlar (DigitalProduct) internet orqali yetkazilganligi sababli 'calculateDeliveryCost()' har doim 0.0 UZS qaytarishi shart. Ushbu metodni tekshiring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. WIUT 6-hafta 'OOPSolution_Week6' rasmiy arxitekturasini e'lon qiling.\n2. 'Product' sinfini abstrakt ('calculateDeliveryCost()') qiling va 'PhysicalProduct', 'DigitalProduct' larni yarating.\n3. 'Payable' va 'CashbackEligible' interfeyslarini tuzib, 'BankCard', 'BonusBalance' va 'GiftCard' klasslarini bajaring.\n4. 'Notification' abstrakt sinfi va 'MobileNotification', 'WebNotification' vorislarini qo'shing.\n5. 'Main' da to'liq biznes oqimini tekshiring: 'DigitalProduct course = new DigitalProduct(\"Java Kursi\", 100000.0, 'A', 1500, \"uzum:dl/java\");         System.out.println(course.getName() + \" yetkazish: \" + course.calculateDeliveryCost() + \" UZS\");'",
      "en": "📖 Real-World Scenario & Context\nDigitalProduct overrides calculateDeliveryCost returning 0.0 as delivery is over internet.\n\n📋 Required Implementation Steps (1 to 5)\n1. Implement official Week 6 architecture matching OOPSolution_Week6.\n2. Make Product abstract and implement delivery costs in PhysicalProduct and DigitalProduct.\n3. Implement Payable, CashbackEligible, BankCard, BonusBalance, and GiftCard.\n4. Add Notification hierarchy with MobileNotification and WebNotification.\n5. Execute in 'main' and verify: 'DigitalProduct course = new DigitalProduct(\"Java Kursi\", 100000.0, 'A', 1500, \"uzum:dl/java\");         System.out.println(course.getName() + \" yetkazish: \" + course.calculateDeliveryCost() + \" UZS\");'"
    },
    "requirements": {
      "classes": [
        "Customer",
        "Main"
      ],
      "methods": [
        "main"
      ]
    },
    "starterCode": "// Week 6 OOPSolution to'liq arxitekturasi\nimport java.util.List;\nimport java.util.ArrayList;\nimport java.util.Map;\nimport java.util.LinkedHashMap;\nimport java.util.Set;\nimport java.util.LinkedHashSet;\n\ninterface Payable {\n    boolean processPayment(double amount);\n}\n\ninterface CashbackEligible {\n    double calculateCashback(double amount);\n}\n\nclass ShippingAddress {\n    private String street;\n    private String city;\n    private String postalCode;\n    public ShippingAddress(String s, String c, String p) {\n        this.street = s; this.city = c; this.postalCode = p;\n    }\n    public String getStreet() { return street; }\n    public String getCity() { return city; }\n    public String getPostalCode() { return postalCode; }\n    @Override\n    public String toString() { return street + \", \" + city; }\n}\n\nclass BankCard implements Payable, CashbackEligible {\n    private String cardNumber;\n    private String holderName;\n    private double balance;\n    public BankCard(String num, String name, double bal) {\n        this.cardNumber = num; this.holderName = name; this.balance = bal;\n    }\n    public String getMaskedNumber() {\n        return \"**** \" + cardNumber.substring(cardNumber.length() - 4);\n    }\n    public double getBalance() { return Math.round(balance * 100.0) / 100.0; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0) return false;\n        if (amount > balance) {\n            System.out.println(\"Payment declined: not enough money on card \" + getMaskedNumber() + \".\");\n            return false;\n        }\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" by bank card \" + getMaskedNumber() + \". Money left on the card: \" + getBalance());\n        return true;\n    }\n    @Override\n    public double calculateCashback(double amount) {\n        return Math.round(amount * 0.01 * 100.0) / 100.0;\n    }\n}\n\nclass BonusBalance implements Payable {\n    private double points;\n    public BonusBalance(double pts) { this.points = pts; }\n    public double getPoints() { return Math.round(points * 100.0) / 100.0; }\n    public void addPoints(double amount) { if (amount > 0) points += amount; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > points) return false;\n        points -= amount;\n        System.out.println(\"Paid \" + amount + \" with bonus points. Points left: \" + getPoints());\n        return true;\n    }\n}\n\nabstract class Product {\n    private String name;\n    private double price;\n    private int quantity;\n    public boolean inStock;\n    public char grade;\n    public Product(String n, double p, int q, boolean stock, char g) {\n        this.name = n; this.price = p; this.quantity = q; this.inStock = stock; this.grade = g;\n    }\n    public String getName() { return name; }\n    public double getPrice() { return price; }\n    protected double roundToTwoDecimals(double val) { return Math.round(val * 100.0) / 100.0; }\n    public double getPriceWithTax() { return roundToTwoDecimals(price * 1.12); }\n    public abstract double calculateDeliveryCost();\n}\n\nclass PhysicalProduct extends Product {\n    private double weightKg;\n    private boolean fragile;\n    public PhysicalProduct(String n, double p, int q, boolean stock, char g, double w, boolean frag) {\n        super(n, p, q, stock, g);\n        this.weightKg = w;\n        this.fragile = frag;\n    }\n    @Override\n    public double calculateDeliveryCost() {\n        double base = 15000.0;\n        if (weightKg > 10.0) base += 10000.0;\n        if (fragile) base += 10000.0;\n        return base;\n    }\n}\n\nclass DigitalProduct extends Product {\n    private double fileSizeMb;\n    private String downloadUrl;\n    public DigitalProduct(String n, double p, char g, double size, String url) {\n        super(n, p, 1, true, g);\n        this.fileSizeMb = size;\n        this.downloadUrl = url;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n}\n\nclass GiftCard extends Product implements Payable {\n    private String code;\n    private double balance;\n    public GiftCard(String name, double price, String code) {\n        super(name, price, 1, true, 'A');\n        this.code = code;\n        this.balance = price;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n    @Override\n    public double getPriceWithTax() { return getPrice(); }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > balance) return false;\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" with gift card \" + code + \". Left on the card: \" + balance);\n        return true;\n    }\n}\n\nabstract class Notification {\n    private Customer customer;\n    private String message;\n    public Notification(Customer c, String m) { this.customer = c; this.message = m; }\n    public Customer getCustomer() { return customer; }\n    public String getMessage() { return message; }\n    public abstract void send();\n}\n\nclass MobileNotification extends Notification {\n    private String deviceName;\n    public MobileNotification(Customer c, String m, String dev) { super(c, m); this.deviceName = dev; }\n    @Override\n    public void send() {\n        System.out.println(\"Push notification to \" + getCustomer().getName() + \"'s \" + deviceName + \": \" + getMessage());\n    }\n}\n\nclass WebNotification extends Notification {\n    private String browser;\n    public WebNotification(Customer c, String m, String b) { super(c, m); this.browser = b; }\n    @Override\n    public void send() {\n        System.out.println(\"Browser notification in \" + browser + \" for \" + getCustomer().getName() + \": \" + getMessage());\n    }\n}\n\nclass Customer {\n    private String name;\n    private int loyaltyPoints;\n    private double accountBalance;\n    private ShippingAddress shippingAddress;\n    private BankCard bankCard;\n    private BonusBalance bonusBalance = new BonusBalance(0.0);\n    private Map<String, ShippingAddress> deliveryAddresses = new LinkedHashMap<>();\n    public Customer(String name, int pts, double bal) {\n        this.name = name; this.loyaltyPoints = pts; this.accountBalance = bal;\n    }\n    public String getName() { return name; }\n    public ShippingAddress getShippingAddress() { return shippingAddress;\n    }\n    public void addBankCard(String num, double bal) { this.bankCard = new BankCard(num, name, bal); }\n    public BankCard getBankCard() { return bankCard; }\n    public BonusBalance getBonusBalance() { return bonusBalance; }\n    public void addDeliveryAddress(String label, ShippingAddress a) { deliveryAddresses.put(label, a); }\n    public boolean useDeliveryAddress(String label) {\n        ShippingAddress a = deliveryAddresses.get(label);\n        if (a != null) { this.shippingAddress = a; System.out.println(\"Orders will now be shipped to \\\"\" + label + \"\\\".\"); return true; }\n        return false;\n    }\n    public boolean pay(Payable method, double amount) {\n        boolean paid = method.processPayment(amount);\n        if (paid && method instanceof CashbackEligible eligible) {\n            double cb = eligible.calculateCashback(amount);\n            bonusBalance.addPoints(cb);\n            System.out.println(\"Cashback \" + cb + \" added. Bonus points: \" + bonusBalance.getPoints());\n        }\n        return paid;\n    }\n}\n\nclass OrderItem {\n    private Product product;\n    private int quantity;\n    public OrderItem(Product p, int q) { this.product = p; this.quantity = q; }\n    public Product getProduct() { return product; }\n    public double getLineTotal() { return product.getPriceWithTax() * quantity; }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    public Order(String id, Customer c) { this.orderId = id; this.customer = c; }\n    public void addItem(Product p, int q) { items.add(new OrderItem(p, q)); }\n    public double getTotal() {\n        double sum = 0;\n        for (OrderItem it : items) sum += it.getLineTotal() + it.getProduct().calculateDeliveryCost();\n        return Math.round(sum * 100.0) / 100.0;\n    }\n    public void printSummary() {\n        System.out.println(\"Order \" + orderId + \" for \" + (customer != null ? customer.getName() : \"Guest\") + \" | Total: \" + getTotal());\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DigitalProduct course = new DigitalProduct(\"Java Kursi\", 100000.0, 'A', 1500, \"uzum:dl/java\");\n        System.out.println(course.getName() + \" yetkazish: \" + course.calculateDeliveryCost() + \" UZS\");\n    }\n}",
    "solution": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Map;\nimport java.util.LinkedHashMap;\nimport java.util.Set;\nimport java.util.LinkedHashSet;\n\ninterface Payable {\n    boolean processPayment(double amount);\n}\n\ninterface CashbackEligible {\n    double calculateCashback(double amount);\n}\n\nclass ShippingAddress {\n    private String street;\n    private String city;\n    private String postalCode;\n    public ShippingAddress(String s, String c, String p) {\n        this.street = s; this.city = c; this.postalCode = p;\n    }\n    public String getStreet() { return street; }\n    public String getCity() { return city; }\n    public String getPostalCode() { return postalCode; }\n    @Override\n    public String toString() { return street + \", \" + city; }\n}\n\nclass BankCard implements Payable, CashbackEligible {\n    private String cardNumber;\n    private String holderName;\n    private double balance;\n    public BankCard(String num, String name, double bal) {\n        this.cardNumber = num; this.holderName = name; this.balance = bal;\n    }\n    public String getMaskedNumber() {\n        return \"**** \" + cardNumber.substring(cardNumber.length() - 4);\n    }\n    public double getBalance() { return Math.round(balance * 100.0) / 100.0; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0) return false;\n        if (amount > balance) {\n            System.out.println(\"Payment declined: not enough money on card \" + getMaskedNumber() + \".\");\n            return false;\n        }\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" by bank card \" + getMaskedNumber() + \". Money left on the card: \" + getBalance());\n        return true;\n    }\n    @Override\n    public double calculateCashback(double amount) {\n        return Math.round(amount * 0.01 * 100.0) / 100.0;\n    }\n}\n\nclass BonusBalance implements Payable {\n    private double points;\n    public BonusBalance(double pts) { this.points = pts; }\n    public double getPoints() { return Math.round(points * 100.0) / 100.0; }\n    public void addPoints(double amount) { if (amount > 0) points += amount; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > points) return false;\n        points -= amount;\n        System.out.println(\"Paid \" + amount + \" with bonus points. Points left: \" + getPoints());\n        return true;\n    }\n}\n\nabstract class Product {\n    private String name;\n    private double price;\n    private int quantity;\n    public boolean inStock;\n    public char grade;\n    public Product(String n, double p, int q, boolean stock, char g) {\n        this.name = n; this.price = p; this.quantity = q; this.inStock = stock; this.grade = g;\n    }\n    public String getName() { return name; }\n    public double getPrice() { return price; }\n    protected double roundToTwoDecimals(double val) { return Math.round(val * 100.0) / 100.0; }\n    public double getPriceWithTax() { return roundToTwoDecimals(price * 1.12); }\n    public abstract double calculateDeliveryCost();\n}\n\nclass PhysicalProduct extends Product {\n    private double weightKg;\n    private boolean fragile;\n    public PhysicalProduct(String n, double p, int q, boolean stock, char g, double w, boolean frag) {\n        super(n, p, q, stock, g);\n        this.weightKg = w;\n        this.fragile = frag;\n    }\n    @Override\n    public double calculateDeliveryCost() {\n        double base = 15000.0;\n        if (weightKg > 10.0) base += 10000.0;\n        if (fragile) base += 10000.0;\n        return base;\n    }\n}\n\nclass DigitalProduct extends Product {\n    private double fileSizeMb;\n    private String downloadUrl;\n    public DigitalProduct(String n, double p, char g, double size, String url) {\n        super(n, p, 1, true, g);\n        this.fileSizeMb = size;\n        this.downloadUrl = url;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n}\n\nclass GiftCard extends Product implements Payable {\n    private String code;\n    private double balance;\n    public GiftCard(String name, double price, String code) {\n        super(name, price, 1, true, 'A');\n        this.code = code;\n        this.balance = price;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n    @Override\n    public double getPriceWithTax() { return getPrice(); }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > balance) return false;\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" with gift card \" + code + \". Left on the card: \" + balance);\n        return true;\n    }\n}\n\nabstract class Notification {\n    private Customer customer;\n    private String message;\n    public Notification(Customer c, String m) { this.customer = c; this.message = m; }\n    public Customer getCustomer() { return customer; }\n    public String getMessage() { return message; }\n    public abstract void send();\n}\n\nclass MobileNotification extends Notification {\n    private String deviceName;\n    public MobileNotification(Customer c, String m, String dev) { super(c, m); this.deviceName = dev; }\n    @Override\n    public void send() {\n        System.out.println(\"Push notification to \" + getCustomer().getName() + \"'s \" + deviceName + \": \" + getMessage());\n    }\n}\n\nclass WebNotification extends Notification {\n    private String browser;\n    public WebNotification(Customer c, String m, String b) { super(c, m); this.browser = b; }\n    @Override\n    public void send() {\n        System.out.println(\"Browser notification in \" + browser + \" for \" + getCustomer().getName() + \": \" + getMessage());\n    }\n}\n\nclass Customer {\n    private String name;\n    private int loyaltyPoints;\n    private double accountBalance;\n    private ShippingAddress shippingAddress;\n    private BankCard bankCard;\n    private BonusBalance bonusBalance = new BonusBalance(0.0);\n    private Map<String, ShippingAddress> deliveryAddresses = new LinkedHashMap<>();\n    public Customer(String name, int pts, double bal) {\n        this.name = name; this.loyaltyPoints = pts; this.accountBalance = bal;\n    }\n    public String getName() { return name; }\n    public ShippingAddress getShippingAddress() { return shippingAddress;\n    }\n    public void addBankCard(String num, double bal) { this.bankCard = new BankCard(num, name, bal); }\n    public BankCard getBankCard() { return bankCard; }\n    public BonusBalance getBonusBalance() { return bonusBalance; }\n    public void addDeliveryAddress(String label, ShippingAddress a) { deliveryAddresses.put(label, a); }\n    public boolean useDeliveryAddress(String label) {\n        ShippingAddress a = deliveryAddresses.get(label);\n        if (a != null) { this.shippingAddress = a; System.out.println(\"Orders will now be shipped to \\\"\" + label + \"\\\".\"); return true; }\n        return false;\n    }\n    public boolean pay(Payable method, double amount) {\n        boolean paid = method.processPayment(amount);\n        if (paid && method instanceof CashbackEligible eligible) {\n            double cb = eligible.calculateCashback(amount);\n            bonusBalance.addPoints(cb);\n            System.out.println(\"Cashback \" + cb + \" added. Bonus points: \" + bonusBalance.getPoints());\n        }\n        return paid;\n    }\n}\n\nclass OrderItem {\n    private Product product;\n    private int quantity;\n    public OrderItem(Product p, int q) { this.product = p; this.quantity = q; }\n    public Product getProduct() { return product; }\n    public double getLineTotal() { return product.getPriceWithTax() * quantity; }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    public Order(String id, Customer c) { this.orderId = id; this.customer = c; }\n    public void addItem(Product p, int q) { items.add(new OrderItem(p, q)); }\n    public double getTotal() {\n        double sum = 0;\n        for (OrderItem it : items) sum += it.getLineTotal() + it.getProduct().calculateDeliveryCost();\n        return Math.round(sum * 100.0) / 100.0;\n    }\n    public void printSummary() {\n        System.out.println(\"Order \" + orderId + \" for \" + (customer != null ? customer.getName() : \"Guest\") + \" | Total: \" + getTotal());\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DigitalProduct course = new DigitalProduct(\"Java Kursi\", 100000.0, 'A', 1500, \"uzum:dl/java\");\n        System.out.println(course.getName() + \" yetkazish: \" + course.calculateDeliveryCost() + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 6-hafta yechimi Coursework 2 arxitekturasining markaziy qismidir: Product abstrakt sinfga aylanadi, to'lovlar 'Payable' va 'CashbackEligible' interfeyslariga o'tkaziladi, xabarnomalar esa 'Notification' abstrakt sinfi orqali mobil yoki veb push sifatida yetkaziladi.",
      "cleanCode": "class Customer {\n    public boolean pay(Payable method, double amount) {\n        boolean paid = method.processPayment(amount);\n        if (paid && method instanceof CashbackEligible eligible) {\n            bonusBalance.addPoints(eligible.calculateCashback(amount));\n        }\n        return paid;\n    }\n}",
      "breakdown": [
        "<code>OOPSolution_Week6</code>: to'liq rasmiy yechim klasslari.",
        "<code>Customer.pay()</code>: polimorfik to'lov va avtomatik keshbek."
      ]
    }
  },
  {
    "id": 139,
    "tier": 10,
    "tierName": "10-Bosqich: CW2 6-Hafta To'liq Arxitekturasi: To'lovlar, Keshbek va Xabarnomalar",
    "sector": "136-150: CW2 Week 6 Architecture Milestone",
    "title": {
      "uz": "139. CW2 Arxitekturasi — Payable Interfeysi Kontrakti",
      "en": "139. CW2 Architecture — Payable Interface Defining Payment Contract"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT 6-hafta yechimida: 'public interface Payable { boolean processPayment(double amount); }'. Har qanday to'lov qila oluvchi vosita ushbu interfeysni bajaradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. WIUT 6-hafta 'OOPSolution_Week6' rasmiy arxitekturasini e'lon qiling.\n2. 'Product' sinfini abstrakt ('calculateDeliveryCost()') qiling va 'PhysicalProduct', 'DigitalProduct' larni yarating.\n3. 'Payable' va 'CashbackEligible' interfeyslarini tuzib, 'BankCard', 'BonusBalance' va 'GiftCard' klasslarini bajaring.\n4. 'Notification' abstrakt sinfi va 'MobileNotification', 'WebNotification' vorislarini qo'shing.\n5. 'Main' da to'liq biznes oqimini tekshiring: 'Payable testCard = new BankCard(\"8600123456789012\", \"Alisher\", 100000.0);         boolean paid = testCard.processPayment(40000.0);         System.out.println(\"To'lov holati: \" + paid);'",
      "en": "📖 Real-World Scenario & Context\nImplement Payable interface with processPayment method contract.\n\n📋 Required Implementation Steps (1 to 5)\n1. Implement official Week 6 architecture matching OOPSolution_Week6.\n2. Make Product abstract and implement delivery costs in PhysicalProduct and DigitalProduct.\n3. Implement Payable, CashbackEligible, BankCard, BonusBalance, and GiftCard.\n4. Add Notification hierarchy with MobileNotification and WebNotification.\n5. Execute in 'main' and verify: 'Payable testCard = new BankCard(\"8600123456789012\", \"Alisher\", 100000.0);         boolean paid = testCard.processPayment(40000.0);         System.out.println(\"To'lov holati: \" + paid);'"
    },
    "requirements": {
      "classes": [
        "Customer",
        "Main"
      ],
      "methods": [
        "main"
      ]
    },
    "starterCode": "// Week 6 OOPSolution to'liq arxitekturasi\nimport java.util.List;\nimport java.util.ArrayList;\nimport java.util.Map;\nimport java.util.LinkedHashMap;\nimport java.util.Set;\nimport java.util.LinkedHashSet;\n\ninterface Payable {\n    boolean processPayment(double amount);\n}\n\ninterface CashbackEligible {\n    double calculateCashback(double amount);\n}\n\nclass ShippingAddress {\n    private String street;\n    private String city;\n    private String postalCode;\n    public ShippingAddress(String s, String c, String p) {\n        this.street = s; this.city = c; this.postalCode = p;\n    }\n    public String getStreet() { return street; }\n    public String getCity() { return city; }\n    public String getPostalCode() { return postalCode; }\n    @Override\n    public String toString() { return street + \", \" + city; }\n}\n\nclass BankCard implements Payable, CashbackEligible {\n    private String cardNumber;\n    private String holderName;\n    private double balance;\n    public BankCard(String num, String name, double bal) {\n        this.cardNumber = num; this.holderName = name; this.balance = bal;\n    }\n    public String getMaskedNumber() {\n        return \"**** \" + cardNumber.substring(cardNumber.length() - 4);\n    }\n    public double getBalance() { return Math.round(balance * 100.0) / 100.0; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0) return false;\n        if (amount > balance) {\n            System.out.println(\"Payment declined: not enough money on card \" + getMaskedNumber() + \".\");\n            return false;\n        }\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" by bank card \" + getMaskedNumber() + \". Money left on the card: \" + getBalance());\n        return true;\n    }\n    @Override\n    public double calculateCashback(double amount) {\n        return Math.round(amount * 0.01 * 100.0) / 100.0;\n    }\n}\n\nclass BonusBalance implements Payable {\n    private double points;\n    public BonusBalance(double pts) { this.points = pts; }\n    public double getPoints() { return Math.round(points * 100.0) / 100.0; }\n    public void addPoints(double amount) { if (amount > 0) points += amount; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > points) return false;\n        points -= amount;\n        System.out.println(\"Paid \" + amount + \" with bonus points. Points left: \" + getPoints());\n        return true;\n    }\n}\n\nabstract class Product {\n    private String name;\n    private double price;\n    private int quantity;\n    public boolean inStock;\n    public char grade;\n    public Product(String n, double p, int q, boolean stock, char g) {\n        this.name = n; this.price = p; this.quantity = q; this.inStock = stock; this.grade = g;\n    }\n    public String getName() { return name; }\n    public double getPrice() { return price; }\n    protected double roundToTwoDecimals(double val) { return Math.round(val * 100.0) / 100.0; }\n    public double getPriceWithTax() { return roundToTwoDecimals(price * 1.12); }\n    public abstract double calculateDeliveryCost();\n}\n\nclass PhysicalProduct extends Product {\n    private double weightKg;\n    private boolean fragile;\n    public PhysicalProduct(String n, double p, int q, boolean stock, char g, double w, boolean frag) {\n        super(n, p, q, stock, g);\n        this.weightKg = w;\n        this.fragile = frag;\n    }\n    @Override\n    public double calculateDeliveryCost() {\n        double base = 15000.0;\n        if (weightKg > 10.0) base += 10000.0;\n        if (fragile) base += 10000.0;\n        return base;\n    }\n}\n\nclass DigitalProduct extends Product {\n    private double fileSizeMb;\n    private String downloadUrl;\n    public DigitalProduct(String n, double p, char g, double size, String url) {\n        super(n, p, 1, true, g);\n        this.fileSizeMb = size;\n        this.downloadUrl = url;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n}\n\nclass GiftCard extends Product implements Payable {\n    private String code;\n    private double balance;\n    public GiftCard(String name, double price, String code) {\n        super(name, price, 1, true, 'A');\n        this.code = code;\n        this.balance = price;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n    @Override\n    public double getPriceWithTax() { return getPrice(); }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > balance) return false;\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" with gift card \" + code + \". Left on the card: \" + balance);\n        return true;\n    }\n}\n\nabstract class Notification {\n    private Customer customer;\n    private String message;\n    public Notification(Customer c, String m) { this.customer = c; this.message = m; }\n    public Customer getCustomer() { return customer; }\n    public String getMessage() { return message; }\n    public abstract void send();\n}\n\nclass MobileNotification extends Notification {\n    private String deviceName;\n    public MobileNotification(Customer c, String m, String dev) { super(c, m); this.deviceName = dev; }\n    @Override\n    public void send() {\n        System.out.println(\"Push notification to \" + getCustomer().getName() + \"'s \" + deviceName + \": \" + getMessage());\n    }\n}\n\nclass WebNotification extends Notification {\n    private String browser;\n    public WebNotification(Customer c, String m, String b) { super(c, m); this.browser = b; }\n    @Override\n    public void send() {\n        System.out.println(\"Browser notification in \" + browser + \" for \" + getCustomer().getName() + \": \" + getMessage());\n    }\n}\n\nclass Customer {\n    private String name;\n    private int loyaltyPoints;\n    private double accountBalance;\n    private ShippingAddress shippingAddress;\n    private BankCard bankCard;\n    private BonusBalance bonusBalance = new BonusBalance(0.0);\n    private Map<String, ShippingAddress> deliveryAddresses = new LinkedHashMap<>();\n    public Customer(String name, int pts, double bal) {\n        this.name = name; this.loyaltyPoints = pts; this.accountBalance = bal;\n    }\n    public String getName() { return name; }\n    public ShippingAddress getShippingAddress() { return shippingAddress;\n    }\n    public void addBankCard(String num, double bal) { this.bankCard = new BankCard(num, name, bal); }\n    public BankCard getBankCard() { return bankCard; }\n    public BonusBalance getBonusBalance() { return bonusBalance; }\n    public void addDeliveryAddress(String label, ShippingAddress a) { deliveryAddresses.put(label, a); }\n    public boolean useDeliveryAddress(String label) {\n        ShippingAddress a = deliveryAddresses.get(label);\n        if (a != null) { this.shippingAddress = a; System.out.println(\"Orders will now be shipped to \\\"\" + label + \"\\\".\"); return true; }\n        return false;\n    }\n    public boolean pay(Payable method, double amount) {\n        boolean paid = method.processPayment(amount);\n        if (paid && method instanceof CashbackEligible eligible) {\n            double cb = eligible.calculateCashback(amount);\n            bonusBalance.addPoints(cb);\n            System.out.println(\"Cashback \" + cb + \" added. Bonus points: \" + bonusBalance.getPoints());\n        }\n        return paid;\n    }\n}\n\nclass OrderItem {\n    private Product product;\n    private int quantity;\n    public OrderItem(Product p, int q) { this.product = p; this.quantity = q; }\n    public Product getProduct() { return product; }\n    public double getLineTotal() { return product.getPriceWithTax() * quantity; }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    public Order(String id, Customer c) { this.orderId = id; this.customer = c; }\n    public void addItem(Product p, int q) { items.add(new OrderItem(p, q)); }\n    public double getTotal() {\n        double sum = 0;\n        for (OrderItem it : items) sum += it.getLineTotal() + it.getProduct().calculateDeliveryCost();\n        return Math.round(sum * 100.0) / 100.0;\n    }\n    public void printSummary() {\n        System.out.println(\"Order \" + orderId + \" for \" + (customer != null ? customer.getName() : \"Guest\") + \" | Total: \" + getTotal());\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Payable testCard = new BankCard(\"8600123456789012\", \"Alisher\", 100000.0);\n        boolean paid = testCard.processPayment(40000.0);\n        System.out.println(\"To'lov holati: \" + paid);\n    }\n}",
    "solution": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Map;\nimport java.util.LinkedHashMap;\nimport java.util.Set;\nimport java.util.LinkedHashSet;\n\ninterface Payable {\n    boolean processPayment(double amount);\n}\n\ninterface CashbackEligible {\n    double calculateCashback(double amount);\n}\n\nclass ShippingAddress {\n    private String street;\n    private String city;\n    private String postalCode;\n    public ShippingAddress(String s, String c, String p) {\n        this.street = s; this.city = c; this.postalCode = p;\n    }\n    public String getStreet() { return street; }\n    public String getCity() { return city; }\n    public String getPostalCode() { return postalCode; }\n    @Override\n    public String toString() { return street + \", \" + city; }\n}\n\nclass BankCard implements Payable, CashbackEligible {\n    private String cardNumber;\n    private String holderName;\n    private double balance;\n    public BankCard(String num, String name, double bal) {\n        this.cardNumber = num; this.holderName = name; this.balance = bal;\n    }\n    public String getMaskedNumber() {\n        return \"**** \" + cardNumber.substring(cardNumber.length() - 4);\n    }\n    public double getBalance() { return Math.round(balance * 100.0) / 100.0; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0) return false;\n        if (amount > balance) {\n            System.out.println(\"Payment declined: not enough money on card \" + getMaskedNumber() + \".\");\n            return false;\n        }\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" by bank card \" + getMaskedNumber() + \". Money left on the card: \" + getBalance());\n        return true;\n    }\n    @Override\n    public double calculateCashback(double amount) {\n        return Math.round(amount * 0.01 * 100.0) / 100.0;\n    }\n}\n\nclass BonusBalance implements Payable {\n    private double points;\n    public BonusBalance(double pts) { this.points = pts; }\n    public double getPoints() { return Math.round(points * 100.0) / 100.0; }\n    public void addPoints(double amount) { if (amount > 0) points += amount; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > points) return false;\n        points -= amount;\n        System.out.println(\"Paid \" + amount + \" with bonus points. Points left: \" + getPoints());\n        return true;\n    }\n}\n\nabstract class Product {\n    private String name;\n    private double price;\n    private int quantity;\n    public boolean inStock;\n    public char grade;\n    public Product(String n, double p, int q, boolean stock, char g) {\n        this.name = n; this.price = p; this.quantity = q; this.inStock = stock; this.grade = g;\n    }\n    public String getName() { return name; }\n    public double getPrice() { return price; }\n    protected double roundToTwoDecimals(double val) { return Math.round(val * 100.0) / 100.0; }\n    public double getPriceWithTax() { return roundToTwoDecimals(price * 1.12); }\n    public abstract double calculateDeliveryCost();\n}\n\nclass PhysicalProduct extends Product {\n    private double weightKg;\n    private boolean fragile;\n    public PhysicalProduct(String n, double p, int q, boolean stock, char g, double w, boolean frag) {\n        super(n, p, q, stock, g);\n        this.weightKg = w;\n        this.fragile = frag;\n    }\n    @Override\n    public double calculateDeliveryCost() {\n        double base = 15000.0;\n        if (weightKg > 10.0) base += 10000.0;\n        if (fragile) base += 10000.0;\n        return base;\n    }\n}\n\nclass DigitalProduct extends Product {\n    private double fileSizeMb;\n    private String downloadUrl;\n    public DigitalProduct(String n, double p, char g, double size, String url) {\n        super(n, p, 1, true, g);\n        this.fileSizeMb = size;\n        this.downloadUrl = url;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n}\n\nclass GiftCard extends Product implements Payable {\n    private String code;\n    private double balance;\n    public GiftCard(String name, double price, String code) {\n        super(name, price, 1, true, 'A');\n        this.code = code;\n        this.balance = price;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n    @Override\n    public double getPriceWithTax() { return getPrice(); }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > balance) return false;\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" with gift card \" + code + \". Left on the card: \" + balance);\n        return true;\n    }\n}\n\nabstract class Notification {\n    private Customer customer;\n    private String message;\n    public Notification(Customer c, String m) { this.customer = c; this.message = m; }\n    public Customer getCustomer() { return customer; }\n    public String getMessage() { return message; }\n    public abstract void send();\n}\n\nclass MobileNotification extends Notification {\n    private String deviceName;\n    public MobileNotification(Customer c, String m, String dev) { super(c, m); this.deviceName = dev; }\n    @Override\n    public void send() {\n        System.out.println(\"Push notification to \" + getCustomer().getName() + \"'s \" + deviceName + \": \" + getMessage());\n    }\n}\n\nclass WebNotification extends Notification {\n    private String browser;\n    public WebNotification(Customer c, String m, String b) { super(c, m); this.browser = b; }\n    @Override\n    public void send() {\n        System.out.println(\"Browser notification in \" + browser + \" for \" + getCustomer().getName() + \": \" + getMessage());\n    }\n}\n\nclass Customer {\n    private String name;\n    private int loyaltyPoints;\n    private double accountBalance;\n    private ShippingAddress shippingAddress;\n    private BankCard bankCard;\n    private BonusBalance bonusBalance = new BonusBalance(0.0);\n    private Map<String, ShippingAddress> deliveryAddresses = new LinkedHashMap<>();\n    public Customer(String name, int pts, double bal) {\n        this.name = name; this.loyaltyPoints = pts; this.accountBalance = bal;\n    }\n    public String getName() { return name; }\n    public ShippingAddress getShippingAddress() { return shippingAddress;\n    }\n    public void addBankCard(String num, double bal) { this.bankCard = new BankCard(num, name, bal); }\n    public BankCard getBankCard() { return bankCard; }\n    public BonusBalance getBonusBalance() { return bonusBalance; }\n    public void addDeliveryAddress(String label, ShippingAddress a) { deliveryAddresses.put(label, a); }\n    public boolean useDeliveryAddress(String label) {\n        ShippingAddress a = deliveryAddresses.get(label);\n        if (a != null) { this.shippingAddress = a; System.out.println(\"Orders will now be shipped to \\\"\" + label + \"\\\".\"); return true; }\n        return false;\n    }\n    public boolean pay(Payable method, double amount) {\n        boolean paid = method.processPayment(amount);\n        if (paid && method instanceof CashbackEligible eligible) {\n            double cb = eligible.calculateCashback(amount);\n            bonusBalance.addPoints(cb);\n            System.out.println(\"Cashback \" + cb + \" added. Bonus points: \" + bonusBalance.getPoints());\n        }\n        return paid;\n    }\n}\n\nclass OrderItem {\n    private Product product;\n    private int quantity;\n    public OrderItem(Product p, int q) { this.product = p; this.quantity = q; }\n    public Product getProduct() { return product; }\n    public double getLineTotal() { return product.getPriceWithTax() * quantity; }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    public Order(String id, Customer c) { this.orderId = id; this.customer = c; }\n    public void addItem(Product p, int q) { items.add(new OrderItem(p, q)); }\n    public double getTotal() {\n        double sum = 0;\n        for (OrderItem it : items) sum += it.getLineTotal() + it.getProduct().calculateDeliveryCost();\n        return Math.round(sum * 100.0) / 100.0;\n    }\n    public void printSummary() {\n        System.out.println(\"Order \" + orderId + \" for \" + (customer != null ? customer.getName() : \"Guest\") + \" | Total: \" + getTotal());\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Payable testCard = new BankCard(\"8600123456789012\", \"Alisher\", 100000.0);\n        boolean paid = testCard.processPayment(40000.0);\n        System.out.println(\"To'lov holati: \" + paid);\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 6-hafta yechimi Coursework 2 arxitekturasining markaziy qismidir: Product abstrakt sinfga aylanadi, to'lovlar 'Payable' va 'CashbackEligible' interfeyslariga o'tkaziladi, xabarnomalar esa 'Notification' abstrakt sinfi orqali mobil yoki veb push sifatida yetkaziladi.",
      "cleanCode": "class Customer {\n    public boolean pay(Payable method, double amount) {\n        boolean paid = method.processPayment(amount);\n        if (paid && method instanceof CashbackEligible eligible) {\n            bonusBalance.addPoints(eligible.calculateCashback(amount));\n        }\n        return paid;\n    }\n}",
      "breakdown": [
        "<code>OOPSolution_Week6</code>: to'liq rasmiy yechim klasslari.",
        "<code>Customer.pay()</code>: polimorfik to'lov va avtomatik keshbek."
      ]
    }
  },
  {
    "id": 140,
    "tier": 10,
    "tierName": "10-Bosqich: CW2 6-Hafta To'liq Arxitekturasi: To'lovlar, Keshbek va Xabarnomalar",
    "sector": "136-150: CW2 Week 6 Architecture Milestone",
    "title": {
      "uz": "140. CW2 Arxitekturasi — CashbackEligible Interfeysi Kontrakti",
      "en": "140. CW2 Architecture — CashbackEligible Interface for Rewarded Payments"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nFaqat ayrim to'lov usullari keshbek beradi: 'public interface CashbackEligible { double calculateCashback(double amount); }'. Ushbu interfeysni tuzing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. WIUT 6-hafta 'OOPSolution_Week6' rasmiy arxitekturasini e'lon qiling.\n2. 'Product' sinfini abstrakt ('calculateDeliveryCost()') qiling va 'PhysicalProduct', 'DigitalProduct' larni yarating.\n3. 'Payable' va 'CashbackEligible' interfeyslarini tuzib, 'BankCard', 'BonusBalance' va 'GiftCard' klasslarini bajaring.\n4. 'Notification' abstrakt sinfi va 'MobileNotification', 'WebNotification' vorislarini qo'shing.\n5. 'Main' da to'liq biznes oqimini tekshiring: 'CashbackEligible card = new BankCard(\"8600111122223333\", \"Aziz\", 200000.0);         System.out.println(\"Keshbek: \" + card.calculateCashback(50000.0) + \" UZS\");'",
      "en": "📖 Real-World Scenario & Context\nDefine CashbackEligible interface returning calculated rewards.\n\n📋 Required Implementation Steps (1 to 5)\n1. Implement official Week 6 architecture matching OOPSolution_Week6.\n2. Make Product abstract and implement delivery costs in PhysicalProduct and DigitalProduct.\n3. Implement Payable, CashbackEligible, BankCard, BonusBalance, and GiftCard.\n4. Add Notification hierarchy with MobileNotification and WebNotification.\n5. Execute in 'main' and verify: 'CashbackEligible card = new BankCard(\"8600111122223333\", \"Aziz\", 200000.0);         System.out.println(\"Keshbek: \" + card.calculateCashback(50000.0) + \" UZS\");'"
    },
    "requirements": {
      "classes": [
        "Customer",
        "Main"
      ],
      "methods": [
        "main"
      ]
    },
    "starterCode": "// Week 6 OOPSolution to'liq arxitekturasi\nimport java.util.List;\nimport java.util.ArrayList;\nimport java.util.Map;\nimport java.util.LinkedHashMap;\nimport java.util.Set;\nimport java.util.LinkedHashSet;\n\ninterface Payable {\n    boolean processPayment(double amount);\n}\n\ninterface CashbackEligible {\n    double calculateCashback(double amount);\n}\n\nclass ShippingAddress {\n    private String street;\n    private String city;\n    private String postalCode;\n    public ShippingAddress(String s, String c, String p) {\n        this.street = s; this.city = c; this.postalCode = p;\n    }\n    public String getStreet() { return street; }\n    public String getCity() { return city; }\n    public String getPostalCode() { return postalCode; }\n    @Override\n    public String toString() { return street + \", \" + city; }\n}\n\nclass BankCard implements Payable, CashbackEligible {\n    private String cardNumber;\n    private String holderName;\n    private double balance;\n    public BankCard(String num, String name, double bal) {\n        this.cardNumber = num; this.holderName = name; this.balance = bal;\n    }\n    public String getMaskedNumber() {\n        return \"**** \" + cardNumber.substring(cardNumber.length() - 4);\n    }\n    public double getBalance() { return Math.round(balance * 100.0) / 100.0; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0) return false;\n        if (amount > balance) {\n            System.out.println(\"Payment declined: not enough money on card \" + getMaskedNumber() + \".\");\n            return false;\n        }\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" by bank card \" + getMaskedNumber() + \". Money left on the card: \" + getBalance());\n        return true;\n    }\n    @Override\n    public double calculateCashback(double amount) {\n        return Math.round(amount * 0.01 * 100.0) / 100.0;\n    }\n}\n\nclass BonusBalance implements Payable {\n    private double points;\n    public BonusBalance(double pts) { this.points = pts; }\n    public double getPoints() { return Math.round(points * 100.0) / 100.0; }\n    public void addPoints(double amount) { if (amount > 0) points += amount; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > points) return false;\n        points -= amount;\n        System.out.println(\"Paid \" + amount + \" with bonus points. Points left: \" + getPoints());\n        return true;\n    }\n}\n\nabstract class Product {\n    private String name;\n    private double price;\n    private int quantity;\n    public boolean inStock;\n    public char grade;\n    public Product(String n, double p, int q, boolean stock, char g) {\n        this.name = n; this.price = p; this.quantity = q; this.inStock = stock; this.grade = g;\n    }\n    public String getName() { return name; }\n    public double getPrice() { return price; }\n    protected double roundToTwoDecimals(double val) { return Math.round(val * 100.0) / 100.0; }\n    public double getPriceWithTax() { return roundToTwoDecimals(price * 1.12); }\n    public abstract double calculateDeliveryCost();\n}\n\nclass PhysicalProduct extends Product {\n    private double weightKg;\n    private boolean fragile;\n    public PhysicalProduct(String n, double p, int q, boolean stock, char g, double w, boolean frag) {\n        super(n, p, q, stock, g);\n        this.weightKg = w;\n        this.fragile = frag;\n    }\n    @Override\n    public double calculateDeliveryCost() {\n        double base = 15000.0;\n        if (weightKg > 10.0) base += 10000.0;\n        if (fragile) base += 10000.0;\n        return base;\n    }\n}\n\nclass DigitalProduct extends Product {\n    private double fileSizeMb;\n    private String downloadUrl;\n    public DigitalProduct(String n, double p, char g, double size, String url) {\n        super(n, p, 1, true, g);\n        this.fileSizeMb = size;\n        this.downloadUrl = url;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n}\n\nclass GiftCard extends Product implements Payable {\n    private String code;\n    private double balance;\n    public GiftCard(String name, double price, String code) {\n        super(name, price, 1, true, 'A');\n        this.code = code;\n        this.balance = price;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n    @Override\n    public double getPriceWithTax() { return getPrice(); }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > balance) return false;\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" with gift card \" + code + \". Left on the card: \" + balance);\n        return true;\n    }\n}\n\nabstract class Notification {\n    private Customer customer;\n    private String message;\n    public Notification(Customer c, String m) { this.customer = c; this.message = m; }\n    public Customer getCustomer() { return customer; }\n    public String getMessage() { return message; }\n    public abstract void send();\n}\n\nclass MobileNotification extends Notification {\n    private String deviceName;\n    public MobileNotification(Customer c, String m, String dev) { super(c, m); this.deviceName = dev; }\n    @Override\n    public void send() {\n        System.out.println(\"Push notification to \" + getCustomer().getName() + \"'s \" + deviceName + \": \" + getMessage());\n    }\n}\n\nclass WebNotification extends Notification {\n    private String browser;\n    public WebNotification(Customer c, String m, String b) { super(c, m); this.browser = b; }\n    @Override\n    public void send() {\n        System.out.println(\"Browser notification in \" + browser + \" for \" + getCustomer().getName() + \": \" + getMessage());\n    }\n}\n\nclass Customer {\n    private String name;\n    private int loyaltyPoints;\n    private double accountBalance;\n    private ShippingAddress shippingAddress;\n    private BankCard bankCard;\n    private BonusBalance bonusBalance = new BonusBalance(0.0);\n    private Map<String, ShippingAddress> deliveryAddresses = new LinkedHashMap<>();\n    public Customer(String name, int pts, double bal) {\n        this.name = name; this.loyaltyPoints = pts; this.accountBalance = bal;\n    }\n    public String getName() { return name; }\n    public ShippingAddress getShippingAddress() { return shippingAddress;\n    }\n    public void addBankCard(String num, double bal) { this.bankCard = new BankCard(num, name, bal); }\n    public BankCard getBankCard() { return bankCard; }\n    public BonusBalance getBonusBalance() { return bonusBalance; }\n    public void addDeliveryAddress(String label, ShippingAddress a) { deliveryAddresses.put(label, a); }\n    public boolean useDeliveryAddress(String label) {\n        ShippingAddress a = deliveryAddresses.get(label);\n        if (a != null) { this.shippingAddress = a; System.out.println(\"Orders will now be shipped to \\\"\" + label + \"\\\".\"); return true; }\n        return false;\n    }\n    public boolean pay(Payable method, double amount) {\n        boolean paid = method.processPayment(amount);\n        if (paid && method instanceof CashbackEligible eligible) {\n            double cb = eligible.calculateCashback(amount);\n            bonusBalance.addPoints(cb);\n            System.out.println(\"Cashback \" + cb + \" added. Bonus points: \" + bonusBalance.getPoints());\n        }\n        return paid;\n    }\n}\n\nclass OrderItem {\n    private Product product;\n    private int quantity;\n    public OrderItem(Product p, int q) { this.product = p; this.quantity = q; }\n    public Product getProduct() { return product; }\n    public double getLineTotal() { return product.getPriceWithTax() * quantity; }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    public Order(String id, Customer c) { this.orderId = id; this.customer = c; }\n    public void addItem(Product p, int q) { items.add(new OrderItem(p, q)); }\n    public double getTotal() {\n        double sum = 0;\n        for (OrderItem it : items) sum += it.getLineTotal() + it.getProduct().calculateDeliveryCost();\n        return Math.round(sum * 100.0) / 100.0;\n    }\n    public void printSummary() {\n        System.out.println(\"Order \" + orderId + \" for \" + (customer != null ? customer.getName() : \"Guest\") + \" | Total: \" + getTotal());\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CashbackEligible card = new BankCard(\"8600111122223333\", \"Aziz\", 200000.0);\n        System.out.println(\"Keshbek: \" + card.calculateCashback(50000.0) + \" UZS\");\n    }\n}",
    "solution": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Map;\nimport java.util.LinkedHashMap;\nimport java.util.Set;\nimport java.util.LinkedHashSet;\n\ninterface Payable {\n    boolean processPayment(double amount);\n}\n\ninterface CashbackEligible {\n    double calculateCashback(double amount);\n}\n\nclass ShippingAddress {\n    private String street;\n    private String city;\n    private String postalCode;\n    public ShippingAddress(String s, String c, String p) {\n        this.street = s; this.city = c; this.postalCode = p;\n    }\n    public String getStreet() { return street; }\n    public String getCity() { return city; }\n    public String getPostalCode() { return postalCode; }\n    @Override\n    public String toString() { return street + \", \" + city; }\n}\n\nclass BankCard implements Payable, CashbackEligible {\n    private String cardNumber;\n    private String holderName;\n    private double balance;\n    public BankCard(String num, String name, double bal) {\n        this.cardNumber = num; this.holderName = name; this.balance = bal;\n    }\n    public String getMaskedNumber() {\n        return \"**** \" + cardNumber.substring(cardNumber.length() - 4);\n    }\n    public double getBalance() { return Math.round(balance * 100.0) / 100.0; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0) return false;\n        if (amount > balance) {\n            System.out.println(\"Payment declined: not enough money on card \" + getMaskedNumber() + \".\");\n            return false;\n        }\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" by bank card \" + getMaskedNumber() + \". Money left on the card: \" + getBalance());\n        return true;\n    }\n    @Override\n    public double calculateCashback(double amount) {\n        return Math.round(amount * 0.01 * 100.0) / 100.0;\n    }\n}\n\nclass BonusBalance implements Payable {\n    private double points;\n    public BonusBalance(double pts) { this.points = pts; }\n    public double getPoints() { return Math.round(points * 100.0) / 100.0; }\n    public void addPoints(double amount) { if (amount > 0) points += amount; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > points) return false;\n        points -= amount;\n        System.out.println(\"Paid \" + amount + \" with bonus points. Points left: \" + getPoints());\n        return true;\n    }\n}\n\nabstract class Product {\n    private String name;\n    private double price;\n    private int quantity;\n    public boolean inStock;\n    public char grade;\n    public Product(String n, double p, int q, boolean stock, char g) {\n        this.name = n; this.price = p; this.quantity = q; this.inStock = stock; this.grade = g;\n    }\n    public String getName() { return name; }\n    public double getPrice() { return price; }\n    protected double roundToTwoDecimals(double val) { return Math.round(val * 100.0) / 100.0; }\n    public double getPriceWithTax() { return roundToTwoDecimals(price * 1.12); }\n    public abstract double calculateDeliveryCost();\n}\n\nclass PhysicalProduct extends Product {\n    private double weightKg;\n    private boolean fragile;\n    public PhysicalProduct(String n, double p, int q, boolean stock, char g, double w, boolean frag) {\n        super(n, p, q, stock, g);\n        this.weightKg = w;\n        this.fragile = frag;\n    }\n    @Override\n    public double calculateDeliveryCost() {\n        double base = 15000.0;\n        if (weightKg > 10.0) base += 10000.0;\n        if (fragile) base += 10000.0;\n        return base;\n    }\n}\n\nclass DigitalProduct extends Product {\n    private double fileSizeMb;\n    private String downloadUrl;\n    public DigitalProduct(String n, double p, char g, double size, String url) {\n        super(n, p, 1, true, g);\n        this.fileSizeMb = size;\n        this.downloadUrl = url;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n}\n\nclass GiftCard extends Product implements Payable {\n    private String code;\n    private double balance;\n    public GiftCard(String name, double price, String code) {\n        super(name, price, 1, true, 'A');\n        this.code = code;\n        this.balance = price;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n    @Override\n    public double getPriceWithTax() { return getPrice(); }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > balance) return false;\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" with gift card \" + code + \". Left on the card: \" + balance);\n        return true;\n    }\n}\n\nabstract class Notification {\n    private Customer customer;\n    private String message;\n    public Notification(Customer c, String m) { this.customer = c; this.message = m; }\n    public Customer getCustomer() { return customer; }\n    public String getMessage() { return message; }\n    public abstract void send();\n}\n\nclass MobileNotification extends Notification {\n    private String deviceName;\n    public MobileNotification(Customer c, String m, String dev) { super(c, m); this.deviceName = dev; }\n    @Override\n    public void send() {\n        System.out.println(\"Push notification to \" + getCustomer().getName() + \"'s \" + deviceName + \": \" + getMessage());\n    }\n}\n\nclass WebNotification extends Notification {\n    private String browser;\n    public WebNotification(Customer c, String m, String b) { super(c, m); this.browser = b; }\n    @Override\n    public void send() {\n        System.out.println(\"Browser notification in \" + browser + \" for \" + getCustomer().getName() + \": \" + getMessage());\n    }\n}\n\nclass Customer {\n    private String name;\n    private int loyaltyPoints;\n    private double accountBalance;\n    private ShippingAddress shippingAddress;\n    private BankCard bankCard;\n    private BonusBalance bonusBalance = new BonusBalance(0.0);\n    private Map<String, ShippingAddress> deliveryAddresses = new LinkedHashMap<>();\n    public Customer(String name, int pts, double bal) {\n        this.name = name; this.loyaltyPoints = pts; this.accountBalance = bal;\n    }\n    public String getName() { return name; }\n    public ShippingAddress getShippingAddress() { return shippingAddress;\n    }\n    public void addBankCard(String num, double bal) { this.bankCard = new BankCard(num, name, bal); }\n    public BankCard getBankCard() { return bankCard; }\n    public BonusBalance getBonusBalance() { return bonusBalance; }\n    public void addDeliveryAddress(String label, ShippingAddress a) { deliveryAddresses.put(label, a); }\n    public boolean useDeliveryAddress(String label) {\n        ShippingAddress a = deliveryAddresses.get(label);\n        if (a != null) { this.shippingAddress = a; System.out.println(\"Orders will now be shipped to \\\"\" + label + \"\\\".\"); return true; }\n        return false;\n    }\n    public boolean pay(Payable method, double amount) {\n        boolean paid = method.processPayment(amount);\n        if (paid && method instanceof CashbackEligible eligible) {\n            double cb = eligible.calculateCashback(amount);\n            bonusBalance.addPoints(cb);\n            System.out.println(\"Cashback \" + cb + \" added. Bonus points: \" + bonusBalance.getPoints());\n        }\n        return paid;\n    }\n}\n\nclass OrderItem {\n    private Product product;\n    private int quantity;\n    public OrderItem(Product p, int q) { this.product = p; this.quantity = q; }\n    public Product getProduct() { return product; }\n    public double getLineTotal() { return product.getPriceWithTax() * quantity; }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    public Order(String id, Customer c) { this.orderId = id; this.customer = c; }\n    public void addItem(Product p, int q) { items.add(new OrderItem(p, q)); }\n    public double getTotal() {\n        double sum = 0;\n        for (OrderItem it : items) sum += it.getLineTotal() + it.getProduct().calculateDeliveryCost();\n        return Math.round(sum * 100.0) / 100.0;\n    }\n    public void printSummary() {\n        System.out.println(\"Order \" + orderId + \" for \" + (customer != null ? customer.getName() : \"Guest\") + \" | Total: \" + getTotal());\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CashbackEligible card = new BankCard(\"8600111122223333\", \"Aziz\", 200000.0);\n        System.out.println(\"Keshbek: \" + card.calculateCashback(50000.0) + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 6-hafta yechimi Coursework 2 arxitekturasining markaziy qismidir: Product abstrakt sinfga aylanadi, to'lovlar 'Payable' va 'CashbackEligible' interfeyslariga o'tkaziladi, xabarnomalar esa 'Notification' abstrakt sinfi orqali mobil yoki veb push sifatida yetkaziladi.",
      "cleanCode": "class Customer {\n    public boolean pay(Payable method, double amount) {\n        boolean paid = method.processPayment(amount);\n        if (paid && method instanceof CashbackEligible eligible) {\n            bonusBalance.addPoints(eligible.calculateCashback(amount));\n        }\n        return paid;\n    }\n}",
      "breakdown": [
        "<code>OOPSolution_Week6</code>: to'liq rasmiy yechim klasslari.",
        "<code>Customer.pay()</code>: polimorfik to'lov va avtomatik keshbek."
      ]
    }
  },
  {
    "id": 141,
    "tier": 10,
    "tierName": "10-Bosqich: CW2 6-Hafta To'liq Arxitekturasi: To'lovlar, Keshbek va Xabarnomalar",
    "sector": "136-150: CW2 Week 6 Architecture Milestone",
    "title": {
      "uz": "141. CW2 Arxitekturasi — BankCard Niqoblangan Raqam (getMaskedNumber)",
      "en": "141. CW2 Architecture — BankCard Masked Number and 1% Cashback"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\n6-hafta BankCard yechimida faqat oxirgi 4 ta raqam ochiq ko'rsatiladi: '**** 9012'. Karta balansidan pul yetarli bo'lsa yechiladi, aks holda rad etiladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. WIUT 6-hafta 'OOPSolution_Week6' rasmiy arxitekturasini e'lon qiling.\n2. 'Product' sinfini abstrakt ('calculateDeliveryCost()') qiling va 'PhysicalProduct', 'DigitalProduct' larni yarating.\n3. 'Payable' va 'CashbackEligible' interfeyslarini tuzib, 'BankCard', 'BonusBalance' va 'GiftCard' klasslarini bajaring.\n4. 'Notification' abstrakt sinfi va 'MobileNotification', 'WebNotification' vorislarini qo'shing.\n5. 'Main' da to'liq biznes oqimini tekshiring: 'BankCard card = new BankCard(\"8600998877665544\", \"Sardor\", 15000.0);         boolean ok = card.processPayment(50000.0);         System.out.println(\"Muvaffaqiyatli: \" + ok);'",
      "en": "📖 Real-World Scenario & Context\nBankCard masks sensitive digits and enforces balance deduction rules.\n\n📋 Required Implementation Steps (1 to 5)\n1. Implement official Week 6 architecture matching OOPSolution_Week6.\n2. Make Product abstract and implement delivery costs in PhysicalProduct and DigitalProduct.\n3. Implement Payable, CashbackEligible, BankCard, BonusBalance, and GiftCard.\n4. Add Notification hierarchy with MobileNotification and WebNotification.\n5. Execute in 'main' and verify: 'BankCard card = new BankCard(\"8600998877665544\", \"Sardor\", 15000.0);         boolean ok = card.processPayment(50000.0);         System.out.println(\"Muvaffaqiyatli: \" + ok);'"
    },
    "requirements": {
      "classes": [
        "Customer",
        "Main"
      ],
      "methods": [
        "main"
      ]
    },
    "starterCode": "// Week 6 OOPSolution to'liq arxitekturasi\nimport java.util.List;\nimport java.util.ArrayList;\nimport java.util.Map;\nimport java.util.LinkedHashMap;\nimport java.util.Set;\nimport java.util.LinkedHashSet;\n\ninterface Payable {\n    boolean processPayment(double amount);\n}\n\ninterface CashbackEligible {\n    double calculateCashback(double amount);\n}\n\nclass ShippingAddress {\n    private String street;\n    private String city;\n    private String postalCode;\n    public ShippingAddress(String s, String c, String p) {\n        this.street = s; this.city = c; this.postalCode = p;\n    }\n    public String getStreet() { return street; }\n    public String getCity() { return city; }\n    public String getPostalCode() { return postalCode; }\n    @Override\n    public String toString() { return street + \", \" + city; }\n}\n\nclass BankCard implements Payable, CashbackEligible {\n    private String cardNumber;\n    private String holderName;\n    private double balance;\n    public BankCard(String num, String name, double bal) {\n        this.cardNumber = num; this.holderName = name; this.balance = bal;\n    }\n    public String getMaskedNumber() {\n        return \"**** \" + cardNumber.substring(cardNumber.length() - 4);\n    }\n    public double getBalance() { return Math.round(balance * 100.0) / 100.0; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0) return false;\n        if (amount > balance) {\n            System.out.println(\"Payment declined: not enough money on card \" + getMaskedNumber() + \".\");\n            return false;\n        }\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" by bank card \" + getMaskedNumber() + \". Money left on the card: \" + getBalance());\n        return true;\n    }\n    @Override\n    public double calculateCashback(double amount) {\n        return Math.round(amount * 0.01 * 100.0) / 100.0;\n    }\n}\n\nclass BonusBalance implements Payable {\n    private double points;\n    public BonusBalance(double pts) { this.points = pts; }\n    public double getPoints() { return Math.round(points * 100.0) / 100.0; }\n    public void addPoints(double amount) { if (amount > 0) points += amount; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > points) return false;\n        points -= amount;\n        System.out.println(\"Paid \" + amount + \" with bonus points. Points left: \" + getPoints());\n        return true;\n    }\n}\n\nabstract class Product {\n    private String name;\n    private double price;\n    private int quantity;\n    public boolean inStock;\n    public char grade;\n    public Product(String n, double p, int q, boolean stock, char g) {\n        this.name = n; this.price = p; this.quantity = q; this.inStock = stock; this.grade = g;\n    }\n    public String getName() { return name; }\n    public double getPrice() { return price; }\n    protected double roundToTwoDecimals(double val) { return Math.round(val * 100.0) / 100.0; }\n    public double getPriceWithTax() { return roundToTwoDecimals(price * 1.12); }\n    public abstract double calculateDeliveryCost();\n}\n\nclass PhysicalProduct extends Product {\n    private double weightKg;\n    private boolean fragile;\n    public PhysicalProduct(String n, double p, int q, boolean stock, char g, double w, boolean frag) {\n        super(n, p, q, stock, g);\n        this.weightKg = w;\n        this.fragile = frag;\n    }\n    @Override\n    public double calculateDeliveryCost() {\n        double base = 15000.0;\n        if (weightKg > 10.0) base += 10000.0;\n        if (fragile) base += 10000.0;\n        return base;\n    }\n}\n\nclass DigitalProduct extends Product {\n    private double fileSizeMb;\n    private String downloadUrl;\n    public DigitalProduct(String n, double p, char g, double size, String url) {\n        super(n, p, 1, true, g);\n        this.fileSizeMb = size;\n        this.downloadUrl = url;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n}\n\nclass GiftCard extends Product implements Payable {\n    private String code;\n    private double balance;\n    public GiftCard(String name, double price, String code) {\n        super(name, price, 1, true, 'A');\n        this.code = code;\n        this.balance = price;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n    @Override\n    public double getPriceWithTax() { return getPrice(); }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > balance) return false;\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" with gift card \" + code + \". Left on the card: \" + balance);\n        return true;\n    }\n}\n\nabstract class Notification {\n    private Customer customer;\n    private String message;\n    public Notification(Customer c, String m) { this.customer = c; this.message = m; }\n    public Customer getCustomer() { return customer; }\n    public String getMessage() { return message; }\n    public abstract void send();\n}\n\nclass MobileNotification extends Notification {\n    private String deviceName;\n    public MobileNotification(Customer c, String m, String dev) { super(c, m); this.deviceName = dev; }\n    @Override\n    public void send() {\n        System.out.println(\"Push notification to \" + getCustomer().getName() + \"'s \" + deviceName + \": \" + getMessage());\n    }\n}\n\nclass WebNotification extends Notification {\n    private String browser;\n    public WebNotification(Customer c, String m, String b) { super(c, m); this.browser = b; }\n    @Override\n    public void send() {\n        System.out.println(\"Browser notification in \" + browser + \" for \" + getCustomer().getName() + \": \" + getMessage());\n    }\n}\n\nclass Customer {\n    private String name;\n    private int loyaltyPoints;\n    private double accountBalance;\n    private ShippingAddress shippingAddress;\n    private BankCard bankCard;\n    private BonusBalance bonusBalance = new BonusBalance(0.0);\n    private Map<String, ShippingAddress> deliveryAddresses = new LinkedHashMap<>();\n    public Customer(String name, int pts, double bal) {\n        this.name = name; this.loyaltyPoints = pts; this.accountBalance = bal;\n    }\n    public String getName() { return name; }\n    public ShippingAddress getShippingAddress() { return shippingAddress;\n    }\n    public void addBankCard(String num, double bal) { this.bankCard = new BankCard(num, name, bal); }\n    public BankCard getBankCard() { return bankCard; }\n    public BonusBalance getBonusBalance() { return bonusBalance; }\n    public void addDeliveryAddress(String label, ShippingAddress a) { deliveryAddresses.put(label, a); }\n    public boolean useDeliveryAddress(String label) {\n        ShippingAddress a = deliveryAddresses.get(label);\n        if (a != null) { this.shippingAddress = a; System.out.println(\"Orders will now be shipped to \\\"\" + label + \"\\\".\"); return true; }\n        return false;\n    }\n    public boolean pay(Payable method, double amount) {\n        boolean paid = method.processPayment(amount);\n        if (paid && method instanceof CashbackEligible eligible) {\n            double cb = eligible.calculateCashback(amount);\n            bonusBalance.addPoints(cb);\n            System.out.println(\"Cashback \" + cb + \" added. Bonus points: \" + bonusBalance.getPoints());\n        }\n        return paid;\n    }\n}\n\nclass OrderItem {\n    private Product product;\n    private int quantity;\n    public OrderItem(Product p, int q) { this.product = p; this.quantity = q; }\n    public Product getProduct() { return product; }\n    public double getLineTotal() { return product.getPriceWithTax() * quantity; }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    public Order(String id, Customer c) { this.orderId = id; this.customer = c; }\n    public void addItem(Product p, int q) { items.add(new OrderItem(p, q)); }\n    public double getTotal() {\n        double sum = 0;\n        for (OrderItem it : items) sum += it.getLineTotal() + it.getProduct().calculateDeliveryCost();\n        return Math.round(sum * 100.0) / 100.0;\n    }\n    public void printSummary() {\n        System.out.println(\"Order \" + orderId + \" for \" + (customer != null ? customer.getName() : \"Guest\") + \" | Total: \" + getTotal());\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BankCard card = new BankCard(\"8600998877665544\", \"Sardor\", 15000.0);\n        boolean ok = card.processPayment(50000.0);\n        System.out.println(\"Muvaffaqiyatli: \" + ok);\n    }\n}",
    "solution": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Map;\nimport java.util.LinkedHashMap;\nimport java.util.Set;\nimport java.util.LinkedHashSet;\n\ninterface Payable {\n    boolean processPayment(double amount);\n}\n\ninterface CashbackEligible {\n    double calculateCashback(double amount);\n}\n\nclass ShippingAddress {\n    private String street;\n    private String city;\n    private String postalCode;\n    public ShippingAddress(String s, String c, String p) {\n        this.street = s; this.city = c; this.postalCode = p;\n    }\n    public String getStreet() { return street; }\n    public String getCity() { return city; }\n    public String getPostalCode() { return postalCode; }\n    @Override\n    public String toString() { return street + \", \" + city; }\n}\n\nclass BankCard implements Payable, CashbackEligible {\n    private String cardNumber;\n    private String holderName;\n    private double balance;\n    public BankCard(String num, String name, double bal) {\n        this.cardNumber = num; this.holderName = name; this.balance = bal;\n    }\n    public String getMaskedNumber() {\n        return \"**** \" + cardNumber.substring(cardNumber.length() - 4);\n    }\n    public double getBalance() { return Math.round(balance * 100.0) / 100.0; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0) return false;\n        if (amount > balance) {\n            System.out.println(\"Payment declined: not enough money on card \" + getMaskedNumber() + \".\");\n            return false;\n        }\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" by bank card \" + getMaskedNumber() + \". Money left on the card: \" + getBalance());\n        return true;\n    }\n    @Override\n    public double calculateCashback(double amount) {\n        return Math.round(amount * 0.01 * 100.0) / 100.0;\n    }\n}\n\nclass BonusBalance implements Payable {\n    private double points;\n    public BonusBalance(double pts) { this.points = pts; }\n    public double getPoints() { return Math.round(points * 100.0) / 100.0; }\n    public void addPoints(double amount) { if (amount > 0) points += amount; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > points) return false;\n        points -= amount;\n        System.out.println(\"Paid \" + amount + \" with bonus points. Points left: \" + getPoints());\n        return true;\n    }\n}\n\nabstract class Product {\n    private String name;\n    private double price;\n    private int quantity;\n    public boolean inStock;\n    public char grade;\n    public Product(String n, double p, int q, boolean stock, char g) {\n        this.name = n; this.price = p; this.quantity = q; this.inStock = stock; this.grade = g;\n    }\n    public String getName() { return name; }\n    public double getPrice() { return price; }\n    protected double roundToTwoDecimals(double val) { return Math.round(val * 100.0) / 100.0; }\n    public double getPriceWithTax() { return roundToTwoDecimals(price * 1.12); }\n    public abstract double calculateDeliveryCost();\n}\n\nclass PhysicalProduct extends Product {\n    private double weightKg;\n    private boolean fragile;\n    public PhysicalProduct(String n, double p, int q, boolean stock, char g, double w, boolean frag) {\n        super(n, p, q, stock, g);\n        this.weightKg = w;\n        this.fragile = frag;\n    }\n    @Override\n    public double calculateDeliveryCost() {\n        double base = 15000.0;\n        if (weightKg > 10.0) base += 10000.0;\n        if (fragile) base += 10000.0;\n        return base;\n    }\n}\n\nclass DigitalProduct extends Product {\n    private double fileSizeMb;\n    private String downloadUrl;\n    public DigitalProduct(String n, double p, char g, double size, String url) {\n        super(n, p, 1, true, g);\n        this.fileSizeMb = size;\n        this.downloadUrl = url;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n}\n\nclass GiftCard extends Product implements Payable {\n    private String code;\n    private double balance;\n    public GiftCard(String name, double price, String code) {\n        super(name, price, 1, true, 'A');\n        this.code = code;\n        this.balance = price;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n    @Override\n    public double getPriceWithTax() { return getPrice(); }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > balance) return false;\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" with gift card \" + code + \". Left on the card: \" + balance);\n        return true;\n    }\n}\n\nabstract class Notification {\n    private Customer customer;\n    private String message;\n    public Notification(Customer c, String m) { this.customer = c; this.message = m; }\n    public Customer getCustomer() { return customer; }\n    public String getMessage() { return message; }\n    public abstract void send();\n}\n\nclass MobileNotification extends Notification {\n    private String deviceName;\n    public MobileNotification(Customer c, String m, String dev) { super(c, m); this.deviceName = dev; }\n    @Override\n    public void send() {\n        System.out.println(\"Push notification to \" + getCustomer().getName() + \"'s \" + deviceName + \": \" + getMessage());\n    }\n}\n\nclass WebNotification extends Notification {\n    private String browser;\n    public WebNotification(Customer c, String m, String b) { super(c, m); this.browser = b; }\n    @Override\n    public void send() {\n        System.out.println(\"Browser notification in \" + browser + \" for \" + getCustomer().getName() + \": \" + getMessage());\n    }\n}\n\nclass Customer {\n    private String name;\n    private int loyaltyPoints;\n    private double accountBalance;\n    private ShippingAddress shippingAddress;\n    private BankCard bankCard;\n    private BonusBalance bonusBalance = new BonusBalance(0.0);\n    private Map<String, ShippingAddress> deliveryAddresses = new LinkedHashMap<>();\n    public Customer(String name, int pts, double bal) {\n        this.name = name; this.loyaltyPoints = pts; this.accountBalance = bal;\n    }\n    public String getName() { return name; }\n    public ShippingAddress getShippingAddress() { return shippingAddress;\n    }\n    public void addBankCard(String num, double bal) { this.bankCard = new BankCard(num, name, bal); }\n    public BankCard getBankCard() { return bankCard; }\n    public BonusBalance getBonusBalance() { return bonusBalance; }\n    public void addDeliveryAddress(String label, ShippingAddress a) { deliveryAddresses.put(label, a); }\n    public boolean useDeliveryAddress(String label) {\n        ShippingAddress a = deliveryAddresses.get(label);\n        if (a != null) { this.shippingAddress = a; System.out.println(\"Orders will now be shipped to \\\"\" + label + \"\\\".\"); return true; }\n        return false;\n    }\n    public boolean pay(Payable method, double amount) {\n        boolean paid = method.processPayment(amount);\n        if (paid && method instanceof CashbackEligible eligible) {\n            double cb = eligible.calculateCashback(amount);\n            bonusBalance.addPoints(cb);\n            System.out.println(\"Cashback \" + cb + \" added. Bonus points: \" + bonusBalance.getPoints());\n        }\n        return paid;\n    }\n}\n\nclass OrderItem {\n    private Product product;\n    private int quantity;\n    public OrderItem(Product p, int q) { this.product = p; this.quantity = q; }\n    public Product getProduct() { return product; }\n    public double getLineTotal() { return product.getPriceWithTax() * quantity; }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    public Order(String id, Customer c) { this.orderId = id; this.customer = c; }\n    public void addItem(Product p, int q) { items.add(new OrderItem(p, q)); }\n    public double getTotal() {\n        double sum = 0;\n        for (OrderItem it : items) sum += it.getLineTotal() + it.getProduct().calculateDeliveryCost();\n        return Math.round(sum * 100.0) / 100.0;\n    }\n    public void printSummary() {\n        System.out.println(\"Order \" + orderId + \" for \" + (customer != null ? customer.getName() : \"Guest\") + \" | Total: \" + getTotal());\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BankCard card = new BankCard(\"8600998877665544\", \"Sardor\", 15000.0);\n        boolean ok = card.processPayment(50000.0);\n        System.out.println(\"Muvaffaqiyatli: \" + ok);\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 6-hafta yechimi Coursework 2 arxitekturasining markaziy qismidir: Product abstrakt sinfga aylanadi, to'lovlar 'Payable' va 'CashbackEligible' interfeyslariga o'tkaziladi, xabarnomalar esa 'Notification' abstrakt sinfi orqali mobil yoki veb push sifatida yetkaziladi.",
      "cleanCode": "class Customer {\n    public boolean pay(Payable method, double amount) {\n        boolean paid = method.processPayment(amount);\n        if (paid && method instanceof CashbackEligible eligible) {\n            bonusBalance.addPoints(eligible.calculateCashback(amount));\n        }\n        return paid;\n    }\n}",
      "breakdown": [
        "<code>OOPSolution_Week6</code>: to'liq rasmiy yechim klasslari.",
        "<code>Customer.pay()</code>: polimorfik to'lov va avtomatik keshbek."
      ]
    }
  },
  {
    "id": 142,
    "tier": 10,
    "tierName": "10-Bosqich: CW2 6-Hafta To'liq Arxitekturasi: To'lovlar, Keshbek va Xabarnomalar",
    "sector": "136-150: CW2 Week 6 Architecture Milestone",
    "title": {
      "uz": "142. CW2 Arxitekturasi — BonusBalance: Ballar Bilan To'lash",
      "en": "142. CW2 Architecture — BonusBalance Implementing Payable"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nMijoz yig'gan bonus ballari: 'BonusBalance implements Payable'. 1 ball = 1 so'm. Yangi ball qo'shish ('addPoints') va ball orqali to'lashni amalga oshiring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. WIUT 6-hafta 'OOPSolution_Week6' rasmiy arxitekturasini e'lon qiling.\n2. 'Product' sinfini abstrakt ('calculateDeliveryCost()') qiling va 'PhysicalProduct', 'DigitalProduct' larni yarating.\n3. 'Payable' va 'CashbackEligible' interfeyslarini tuzib, 'BankCard', 'BonusBalance' va 'GiftCard' klasslarini bajaring.\n4. 'Notification' abstrakt sinfi va 'MobileNotification', 'WebNotification' vorislarini qo'shing.\n5. 'Main' da to'liq biznes oqimini tekshiring: 'BonusBalance bb = new BonusBalance(50.0);         bb.addPoints(25.0);         boolean ok = bb.processPayment(30.0);         System.out.println(\"To'landi: \" + ok + \" | Qolgan ball: \" + bb.getPoints());'",
      "en": "📖 Real-World Scenario & Context\nBonusBalance implements Payable where 1 point equals 1 currency unit.\n\n📋 Required Implementation Steps (1 to 5)\n1. Implement official Week 6 architecture matching OOPSolution_Week6.\n2. Make Product abstract and implement delivery costs in PhysicalProduct and DigitalProduct.\n3. Implement Payable, CashbackEligible, BankCard, BonusBalance, and GiftCard.\n4. Add Notification hierarchy with MobileNotification and WebNotification.\n5. Execute in 'main' and verify: 'BonusBalance bb = new BonusBalance(50.0);         bb.addPoints(25.0);         boolean ok = bb.processPayment(30.0);         System.out.println(\"To'landi: \" + ok + \" | Qolgan ball: \" + bb.getPoints());'"
    },
    "requirements": {
      "classes": [
        "Customer",
        "Main"
      ],
      "methods": [
        "main"
      ]
    },
    "starterCode": "// Week 6 OOPSolution to'liq arxitekturasi\nimport java.util.List;\nimport java.util.ArrayList;\nimport java.util.Map;\nimport java.util.LinkedHashMap;\nimport java.util.Set;\nimport java.util.LinkedHashSet;\n\ninterface Payable {\n    boolean processPayment(double amount);\n}\n\ninterface CashbackEligible {\n    double calculateCashback(double amount);\n}\n\nclass ShippingAddress {\n    private String street;\n    private String city;\n    private String postalCode;\n    public ShippingAddress(String s, String c, String p) {\n        this.street = s; this.city = c; this.postalCode = p;\n    }\n    public String getStreet() { return street; }\n    public String getCity() { return city; }\n    public String getPostalCode() { return postalCode; }\n    @Override\n    public String toString() { return street + \", \" + city; }\n}\n\nclass BankCard implements Payable, CashbackEligible {\n    private String cardNumber;\n    private String holderName;\n    private double balance;\n    public BankCard(String num, String name, double bal) {\n        this.cardNumber = num; this.holderName = name; this.balance = bal;\n    }\n    public String getMaskedNumber() {\n        return \"**** \" + cardNumber.substring(cardNumber.length() - 4);\n    }\n    public double getBalance() { return Math.round(balance * 100.0) / 100.0; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0) return false;\n        if (amount > balance) {\n            System.out.println(\"Payment declined: not enough money on card \" + getMaskedNumber() + \".\");\n            return false;\n        }\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" by bank card \" + getMaskedNumber() + \". Money left on the card: \" + getBalance());\n        return true;\n    }\n    @Override\n    public double calculateCashback(double amount) {\n        return Math.round(amount * 0.01 * 100.0) / 100.0;\n    }\n}\n\nclass BonusBalance implements Payable {\n    private double points;\n    public BonusBalance(double pts) { this.points = pts; }\n    public double getPoints() { return Math.round(points * 100.0) / 100.0; }\n    public void addPoints(double amount) { if (amount > 0) points += amount; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > points) return false;\n        points -= amount;\n        System.out.println(\"Paid \" + amount + \" with bonus points. Points left: \" + getPoints());\n        return true;\n    }\n}\n\nabstract class Product {\n    private String name;\n    private double price;\n    private int quantity;\n    public boolean inStock;\n    public char grade;\n    public Product(String n, double p, int q, boolean stock, char g) {\n        this.name = n; this.price = p; this.quantity = q; this.inStock = stock; this.grade = g;\n    }\n    public String getName() { return name; }\n    public double getPrice() { return price; }\n    protected double roundToTwoDecimals(double val) { return Math.round(val * 100.0) / 100.0; }\n    public double getPriceWithTax() { return roundToTwoDecimals(price * 1.12); }\n    public abstract double calculateDeliveryCost();\n}\n\nclass PhysicalProduct extends Product {\n    private double weightKg;\n    private boolean fragile;\n    public PhysicalProduct(String n, double p, int q, boolean stock, char g, double w, boolean frag) {\n        super(n, p, q, stock, g);\n        this.weightKg = w;\n        this.fragile = frag;\n    }\n    @Override\n    public double calculateDeliveryCost() {\n        double base = 15000.0;\n        if (weightKg > 10.0) base += 10000.0;\n        if (fragile) base += 10000.0;\n        return base;\n    }\n}\n\nclass DigitalProduct extends Product {\n    private double fileSizeMb;\n    private String downloadUrl;\n    public DigitalProduct(String n, double p, char g, double size, String url) {\n        super(n, p, 1, true, g);\n        this.fileSizeMb = size;\n        this.downloadUrl = url;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n}\n\nclass GiftCard extends Product implements Payable {\n    private String code;\n    private double balance;\n    public GiftCard(String name, double price, String code) {\n        super(name, price, 1, true, 'A');\n        this.code = code;\n        this.balance = price;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n    @Override\n    public double getPriceWithTax() { return getPrice(); }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > balance) return false;\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" with gift card \" + code + \". Left on the card: \" + balance);\n        return true;\n    }\n}\n\nabstract class Notification {\n    private Customer customer;\n    private String message;\n    public Notification(Customer c, String m) { this.customer = c; this.message = m; }\n    public Customer getCustomer() { return customer; }\n    public String getMessage() { return message; }\n    public abstract void send();\n}\n\nclass MobileNotification extends Notification {\n    private String deviceName;\n    public MobileNotification(Customer c, String m, String dev) { super(c, m); this.deviceName = dev; }\n    @Override\n    public void send() {\n        System.out.println(\"Push notification to \" + getCustomer().getName() + \"'s \" + deviceName + \": \" + getMessage());\n    }\n}\n\nclass WebNotification extends Notification {\n    private String browser;\n    public WebNotification(Customer c, String m, String b) { super(c, m); this.browser = b; }\n    @Override\n    public void send() {\n        System.out.println(\"Browser notification in \" + browser + \" for \" + getCustomer().getName() + \": \" + getMessage());\n    }\n}\n\nclass Customer {\n    private String name;\n    private int loyaltyPoints;\n    private double accountBalance;\n    private ShippingAddress shippingAddress;\n    private BankCard bankCard;\n    private BonusBalance bonusBalance = new BonusBalance(0.0);\n    private Map<String, ShippingAddress> deliveryAddresses = new LinkedHashMap<>();\n    public Customer(String name, int pts, double bal) {\n        this.name = name; this.loyaltyPoints = pts; this.accountBalance = bal;\n    }\n    public String getName() { return name; }\n    public ShippingAddress getShippingAddress() { return shippingAddress;\n    }\n    public void addBankCard(String num, double bal) { this.bankCard = new BankCard(num, name, bal); }\n    public BankCard getBankCard() { return bankCard; }\n    public BonusBalance getBonusBalance() { return bonusBalance; }\n    public void addDeliveryAddress(String label, ShippingAddress a) { deliveryAddresses.put(label, a); }\n    public boolean useDeliveryAddress(String label) {\n        ShippingAddress a = deliveryAddresses.get(label);\n        if (a != null) { this.shippingAddress = a; System.out.println(\"Orders will now be shipped to \\\"\" + label + \"\\\".\"); return true; }\n        return false;\n    }\n    public boolean pay(Payable method, double amount) {\n        boolean paid = method.processPayment(amount);\n        if (paid && method instanceof CashbackEligible eligible) {\n            double cb = eligible.calculateCashback(amount);\n            bonusBalance.addPoints(cb);\n            System.out.println(\"Cashback \" + cb + \" added. Bonus points: \" + bonusBalance.getPoints());\n        }\n        return paid;\n    }\n}\n\nclass OrderItem {\n    private Product product;\n    private int quantity;\n    public OrderItem(Product p, int q) { this.product = p; this.quantity = q; }\n    public Product getProduct() { return product; }\n    public double getLineTotal() { return product.getPriceWithTax() * quantity; }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    public Order(String id, Customer c) { this.orderId = id; this.customer = c; }\n    public void addItem(Product p, int q) { items.add(new OrderItem(p, q)); }\n    public double getTotal() {\n        double sum = 0;\n        for (OrderItem it : items) sum += it.getLineTotal() + it.getProduct().calculateDeliveryCost();\n        return Math.round(sum * 100.0) / 100.0;\n    }\n    public void printSummary() {\n        System.out.println(\"Order \" + orderId + \" for \" + (customer != null ? customer.getName() : \"Guest\") + \" | Total: \" + getTotal());\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BonusBalance bb = new BonusBalance(50.0);\n        bb.addPoints(25.0);\n        boolean ok = bb.processPayment(30.0);\n        System.out.println(\"To'landi: \" + ok + \" | Qolgan ball: \" + bb.getPoints());\n    }\n}",
    "solution": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Map;\nimport java.util.LinkedHashMap;\nimport java.util.Set;\nimport java.util.LinkedHashSet;\n\ninterface Payable {\n    boolean processPayment(double amount);\n}\n\ninterface CashbackEligible {\n    double calculateCashback(double amount);\n}\n\nclass ShippingAddress {\n    private String street;\n    private String city;\n    private String postalCode;\n    public ShippingAddress(String s, String c, String p) {\n        this.street = s; this.city = c; this.postalCode = p;\n    }\n    public String getStreet() { return street; }\n    public String getCity() { return city; }\n    public String getPostalCode() { return postalCode; }\n    @Override\n    public String toString() { return street + \", \" + city; }\n}\n\nclass BankCard implements Payable, CashbackEligible {\n    private String cardNumber;\n    private String holderName;\n    private double balance;\n    public BankCard(String num, String name, double bal) {\n        this.cardNumber = num; this.holderName = name; this.balance = bal;\n    }\n    public String getMaskedNumber() {\n        return \"**** \" + cardNumber.substring(cardNumber.length() - 4);\n    }\n    public double getBalance() { return Math.round(balance * 100.0) / 100.0; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0) return false;\n        if (amount > balance) {\n            System.out.println(\"Payment declined: not enough money on card \" + getMaskedNumber() + \".\");\n            return false;\n        }\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" by bank card \" + getMaskedNumber() + \". Money left on the card: \" + getBalance());\n        return true;\n    }\n    @Override\n    public double calculateCashback(double amount) {\n        return Math.round(amount * 0.01 * 100.0) / 100.0;\n    }\n}\n\nclass BonusBalance implements Payable {\n    private double points;\n    public BonusBalance(double pts) { this.points = pts; }\n    public double getPoints() { return Math.round(points * 100.0) / 100.0; }\n    public void addPoints(double amount) { if (amount > 0) points += amount; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > points) return false;\n        points -= amount;\n        System.out.println(\"Paid \" + amount + \" with bonus points. Points left: \" + getPoints());\n        return true;\n    }\n}\n\nabstract class Product {\n    private String name;\n    private double price;\n    private int quantity;\n    public boolean inStock;\n    public char grade;\n    public Product(String n, double p, int q, boolean stock, char g) {\n        this.name = n; this.price = p; this.quantity = q; this.inStock = stock; this.grade = g;\n    }\n    public String getName() { return name; }\n    public double getPrice() { return price; }\n    protected double roundToTwoDecimals(double val) { return Math.round(val * 100.0) / 100.0; }\n    public double getPriceWithTax() { return roundToTwoDecimals(price * 1.12); }\n    public abstract double calculateDeliveryCost();\n}\n\nclass PhysicalProduct extends Product {\n    private double weightKg;\n    private boolean fragile;\n    public PhysicalProduct(String n, double p, int q, boolean stock, char g, double w, boolean frag) {\n        super(n, p, q, stock, g);\n        this.weightKg = w;\n        this.fragile = frag;\n    }\n    @Override\n    public double calculateDeliveryCost() {\n        double base = 15000.0;\n        if (weightKg > 10.0) base += 10000.0;\n        if (fragile) base += 10000.0;\n        return base;\n    }\n}\n\nclass DigitalProduct extends Product {\n    private double fileSizeMb;\n    private String downloadUrl;\n    public DigitalProduct(String n, double p, char g, double size, String url) {\n        super(n, p, 1, true, g);\n        this.fileSizeMb = size;\n        this.downloadUrl = url;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n}\n\nclass GiftCard extends Product implements Payable {\n    private String code;\n    private double balance;\n    public GiftCard(String name, double price, String code) {\n        super(name, price, 1, true, 'A');\n        this.code = code;\n        this.balance = price;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n    @Override\n    public double getPriceWithTax() { return getPrice(); }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > balance) return false;\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" with gift card \" + code + \". Left on the card: \" + balance);\n        return true;\n    }\n}\n\nabstract class Notification {\n    private Customer customer;\n    private String message;\n    public Notification(Customer c, String m) { this.customer = c; this.message = m; }\n    public Customer getCustomer() { return customer; }\n    public String getMessage() { return message; }\n    public abstract void send();\n}\n\nclass MobileNotification extends Notification {\n    private String deviceName;\n    public MobileNotification(Customer c, String m, String dev) { super(c, m); this.deviceName = dev; }\n    @Override\n    public void send() {\n        System.out.println(\"Push notification to \" + getCustomer().getName() + \"'s \" + deviceName + \": \" + getMessage());\n    }\n}\n\nclass WebNotification extends Notification {\n    private String browser;\n    public WebNotification(Customer c, String m, String b) { super(c, m); this.browser = b; }\n    @Override\n    public void send() {\n        System.out.println(\"Browser notification in \" + browser + \" for \" + getCustomer().getName() + \": \" + getMessage());\n    }\n}\n\nclass Customer {\n    private String name;\n    private int loyaltyPoints;\n    private double accountBalance;\n    private ShippingAddress shippingAddress;\n    private BankCard bankCard;\n    private BonusBalance bonusBalance = new BonusBalance(0.0);\n    private Map<String, ShippingAddress> deliveryAddresses = new LinkedHashMap<>();\n    public Customer(String name, int pts, double bal) {\n        this.name = name; this.loyaltyPoints = pts; this.accountBalance = bal;\n    }\n    public String getName() { return name; }\n    public ShippingAddress getShippingAddress() { return shippingAddress;\n    }\n    public void addBankCard(String num, double bal) { this.bankCard = new BankCard(num, name, bal); }\n    public BankCard getBankCard() { return bankCard; }\n    public BonusBalance getBonusBalance() { return bonusBalance; }\n    public void addDeliveryAddress(String label, ShippingAddress a) { deliveryAddresses.put(label, a); }\n    public boolean useDeliveryAddress(String label) {\n        ShippingAddress a = deliveryAddresses.get(label);\n        if (a != null) { this.shippingAddress = a; System.out.println(\"Orders will now be shipped to \\\"\" + label + \"\\\".\"); return true; }\n        return false;\n    }\n    public boolean pay(Payable method, double amount) {\n        boolean paid = method.processPayment(amount);\n        if (paid && method instanceof CashbackEligible eligible) {\n            double cb = eligible.calculateCashback(amount);\n            bonusBalance.addPoints(cb);\n            System.out.println(\"Cashback \" + cb + \" added. Bonus points: \" + bonusBalance.getPoints());\n        }\n        return paid;\n    }\n}\n\nclass OrderItem {\n    private Product product;\n    private int quantity;\n    public OrderItem(Product p, int q) { this.product = p; this.quantity = q; }\n    public Product getProduct() { return product; }\n    public double getLineTotal() { return product.getPriceWithTax() * quantity; }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    public Order(String id, Customer c) { this.orderId = id; this.customer = c; }\n    public void addItem(Product p, int q) { items.add(new OrderItem(p, q)); }\n    public double getTotal() {\n        double sum = 0;\n        for (OrderItem it : items) sum += it.getLineTotal() + it.getProduct().calculateDeliveryCost();\n        return Math.round(sum * 100.0) / 100.0;\n    }\n    public void printSummary() {\n        System.out.println(\"Order \" + orderId + \" for \" + (customer != null ? customer.getName() : \"Guest\") + \" | Total: \" + getTotal());\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BonusBalance bb = new BonusBalance(50.0);\n        bb.addPoints(25.0);\n        boolean ok = bb.processPayment(30.0);\n        System.out.println(\"To'landi: \" + ok + \" | Qolgan ball: \" + bb.getPoints());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 6-hafta yechimi Coursework 2 arxitekturasining markaziy qismidir: Product abstrakt sinfga aylanadi, to'lovlar 'Payable' va 'CashbackEligible' interfeyslariga o'tkaziladi, xabarnomalar esa 'Notification' abstrakt sinfi orqali mobil yoki veb push sifatida yetkaziladi.",
      "cleanCode": "class Customer {\n    public boolean pay(Payable method, double amount) {\n        boolean paid = method.processPayment(amount);\n        if (paid && method instanceof CashbackEligible eligible) {\n            bonusBalance.addPoints(eligible.calculateCashback(amount));\n        }\n        return paid;\n    }\n}",
      "breakdown": [
        "<code>OOPSolution_Week6</code>: to'liq rasmiy yechim klasslari.",
        "<code>Customer.pay()</code>: polimorfik to'lov va avtomatik keshbek."
      ]
    }
  },
  {
    "id": 143,
    "tier": 10,
    "tierName": "10-Bosqich: CW2 6-Hafta To'liq Arxitekturasi: To'lovlar, Keshbek va Xabarnomalar",
    "sector": "136-150: CW2 Week 6 Architecture Milestone",
    "title": {
      "uz": "143. CW2 Arxitekturasi — GiftCard: Product Hamda Payable Birlashmasi",
      "en": "143. CW2 Architecture — GiftCard as both Product and Payable"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nAjoyib arxitektura namunasi: 'GiftCard extends Product implements Payable'. Sovg'a kartasi ham do'konda sotib olinadigan Product, ham to'lov qila oluvchi Payable vositasidir!\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. WIUT 6-hafta 'OOPSolution_Week6' rasmiy arxitekturasini e'lon qiling.\n2. 'Product' sinfini abstrakt ('calculateDeliveryCost()') qiling va 'PhysicalProduct', 'DigitalProduct' larni yarating.\n3. 'Payable' va 'CashbackEligible' interfeyslarini tuzib, 'BankCard', 'BonusBalance' va 'GiftCard' klasslarini bajaring.\n4. 'Notification' abstrakt sinfi va 'MobileNotification', 'WebNotification' vorislarini qo'shing.\n5. 'Main' da to'liq biznes oqimini tekshiring: 'GiftCard gc = new GiftCard(\"Sovg'a Kartasi 100\", 100000.0, \"GIFT-2026\");         System.out.println(\"Mahsulot: \" + gc.getName() + \" | QQSsiz narx: \" + gc.getPriceWithTax());         gc.processPayment(40000.0);'",
      "en": "📖 Real-World Scenario & Context\nGiftCard illustrates multiple hierarchy: it IS-A Product and CAN pay as Payable.\n\n📋 Required Implementation Steps (1 to 5)\n1. Implement official Week 6 architecture matching OOPSolution_Week6.\n2. Make Product abstract and implement delivery costs in PhysicalProduct and DigitalProduct.\n3. Implement Payable, CashbackEligible, BankCard, BonusBalance, and GiftCard.\n4. Add Notification hierarchy with MobileNotification and WebNotification.\n5. Execute in 'main' and verify: 'GiftCard gc = new GiftCard(\"Sovg'a Kartasi 100\", 100000.0, \"GIFT-2026\");         System.out.println(\"Mahsulot: \" + gc.getName() + \" | QQSsiz narx: \" + gc.getPriceWithTax());         gc.processPayment(40000.0);'"
    },
    "requirements": {
      "classes": [
        "Customer",
        "Main"
      ],
      "methods": [
        "main"
      ]
    },
    "starterCode": "// Week 6 OOPSolution to'liq arxitekturasi\nimport java.util.List;\nimport java.util.ArrayList;\nimport java.util.Map;\nimport java.util.LinkedHashMap;\nimport java.util.Set;\nimport java.util.LinkedHashSet;\n\ninterface Payable {\n    boolean processPayment(double amount);\n}\n\ninterface CashbackEligible {\n    double calculateCashback(double amount);\n}\n\nclass ShippingAddress {\n    private String street;\n    private String city;\n    private String postalCode;\n    public ShippingAddress(String s, String c, String p) {\n        this.street = s; this.city = c; this.postalCode = p;\n    }\n    public String getStreet() { return street; }\n    public String getCity() { return city; }\n    public String getPostalCode() { return postalCode; }\n    @Override\n    public String toString() { return street + \", \" + city; }\n}\n\nclass BankCard implements Payable, CashbackEligible {\n    private String cardNumber;\n    private String holderName;\n    private double balance;\n    public BankCard(String num, String name, double bal) {\n        this.cardNumber = num; this.holderName = name; this.balance = bal;\n    }\n    public String getMaskedNumber() {\n        return \"**** \" + cardNumber.substring(cardNumber.length() - 4);\n    }\n    public double getBalance() { return Math.round(balance * 100.0) / 100.0; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0) return false;\n        if (amount > balance) {\n            System.out.println(\"Payment declined: not enough money on card \" + getMaskedNumber() + \".\");\n            return false;\n        }\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" by bank card \" + getMaskedNumber() + \". Money left on the card: \" + getBalance());\n        return true;\n    }\n    @Override\n    public double calculateCashback(double amount) {\n        return Math.round(amount * 0.01 * 100.0) / 100.0;\n    }\n}\n\nclass BonusBalance implements Payable {\n    private double points;\n    public BonusBalance(double pts) { this.points = pts; }\n    public double getPoints() { return Math.round(points * 100.0) / 100.0; }\n    public void addPoints(double amount) { if (amount > 0) points += amount; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > points) return false;\n        points -= amount;\n        System.out.println(\"Paid \" + amount + \" with bonus points. Points left: \" + getPoints());\n        return true;\n    }\n}\n\nabstract class Product {\n    private String name;\n    private double price;\n    private int quantity;\n    public boolean inStock;\n    public char grade;\n    public Product(String n, double p, int q, boolean stock, char g) {\n        this.name = n; this.price = p; this.quantity = q; this.inStock = stock; this.grade = g;\n    }\n    public String getName() { return name; }\n    public double getPrice() { return price; }\n    protected double roundToTwoDecimals(double val) { return Math.round(val * 100.0) / 100.0; }\n    public double getPriceWithTax() { return roundToTwoDecimals(price * 1.12); }\n    public abstract double calculateDeliveryCost();\n}\n\nclass PhysicalProduct extends Product {\n    private double weightKg;\n    private boolean fragile;\n    public PhysicalProduct(String n, double p, int q, boolean stock, char g, double w, boolean frag) {\n        super(n, p, q, stock, g);\n        this.weightKg = w;\n        this.fragile = frag;\n    }\n    @Override\n    public double calculateDeliveryCost() {\n        double base = 15000.0;\n        if (weightKg > 10.0) base += 10000.0;\n        if (fragile) base += 10000.0;\n        return base;\n    }\n}\n\nclass DigitalProduct extends Product {\n    private double fileSizeMb;\n    private String downloadUrl;\n    public DigitalProduct(String n, double p, char g, double size, String url) {\n        super(n, p, 1, true, g);\n        this.fileSizeMb = size;\n        this.downloadUrl = url;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n}\n\nclass GiftCard extends Product implements Payable {\n    private String code;\n    private double balance;\n    public GiftCard(String name, double price, String code) {\n        super(name, price, 1, true, 'A');\n        this.code = code;\n        this.balance = price;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n    @Override\n    public double getPriceWithTax() { return getPrice(); }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > balance) return false;\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" with gift card \" + code + \". Left on the card: \" + balance);\n        return true;\n    }\n}\n\nabstract class Notification {\n    private Customer customer;\n    private String message;\n    public Notification(Customer c, String m) { this.customer = c; this.message = m; }\n    public Customer getCustomer() { return customer; }\n    public String getMessage() { return message; }\n    public abstract void send();\n}\n\nclass MobileNotification extends Notification {\n    private String deviceName;\n    public MobileNotification(Customer c, String m, String dev) { super(c, m); this.deviceName = dev; }\n    @Override\n    public void send() {\n        System.out.println(\"Push notification to \" + getCustomer().getName() + \"'s \" + deviceName + \": \" + getMessage());\n    }\n}\n\nclass WebNotification extends Notification {\n    private String browser;\n    public WebNotification(Customer c, String m, String b) { super(c, m); this.browser = b; }\n    @Override\n    public void send() {\n        System.out.println(\"Browser notification in \" + browser + \" for \" + getCustomer().getName() + \": \" + getMessage());\n    }\n}\n\nclass Customer {\n    private String name;\n    private int loyaltyPoints;\n    private double accountBalance;\n    private ShippingAddress shippingAddress;\n    private BankCard bankCard;\n    private BonusBalance bonusBalance = new BonusBalance(0.0);\n    private Map<String, ShippingAddress> deliveryAddresses = new LinkedHashMap<>();\n    public Customer(String name, int pts, double bal) {\n        this.name = name; this.loyaltyPoints = pts; this.accountBalance = bal;\n    }\n    public String getName() { return name; }\n    public ShippingAddress getShippingAddress() { return shippingAddress;\n    }\n    public void addBankCard(String num, double bal) { this.bankCard = new BankCard(num, name, bal); }\n    public BankCard getBankCard() { return bankCard; }\n    public BonusBalance getBonusBalance() { return bonusBalance; }\n    public void addDeliveryAddress(String label, ShippingAddress a) { deliveryAddresses.put(label, a); }\n    public boolean useDeliveryAddress(String label) {\n        ShippingAddress a = deliveryAddresses.get(label);\n        if (a != null) { this.shippingAddress = a; System.out.println(\"Orders will now be shipped to \\\"\" + label + \"\\\".\"); return true; }\n        return false;\n    }\n    public boolean pay(Payable method, double amount) {\n        boolean paid = method.processPayment(amount);\n        if (paid && method instanceof CashbackEligible eligible) {\n            double cb = eligible.calculateCashback(amount);\n            bonusBalance.addPoints(cb);\n            System.out.println(\"Cashback \" + cb + \" added. Bonus points: \" + bonusBalance.getPoints());\n        }\n        return paid;\n    }\n}\n\nclass OrderItem {\n    private Product product;\n    private int quantity;\n    public OrderItem(Product p, int q) { this.product = p; this.quantity = q; }\n    public Product getProduct() { return product; }\n    public double getLineTotal() { return product.getPriceWithTax() * quantity; }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    public Order(String id, Customer c) { this.orderId = id; this.customer = c; }\n    public void addItem(Product p, int q) { items.add(new OrderItem(p, q)); }\n    public double getTotal() {\n        double sum = 0;\n        for (OrderItem it : items) sum += it.getLineTotal() + it.getProduct().calculateDeliveryCost();\n        return Math.round(sum * 100.0) / 100.0;\n    }\n    public void printSummary() {\n        System.out.println(\"Order \" + orderId + \" for \" + (customer != null ? customer.getName() : \"Guest\") + \" | Total: \" + getTotal());\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GiftCard gc = new GiftCard(\"Sovg'a Kartasi 100\", 100000.0, \"GIFT-2026\");\n        System.out.println(\"Mahsulot: \" + gc.getName() + \" | QQSsiz narx: \" + gc.getPriceWithTax());\n        gc.processPayment(40000.0);\n    }\n}",
    "solution": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Map;\nimport java.util.LinkedHashMap;\nimport java.util.Set;\nimport java.util.LinkedHashSet;\n\ninterface Payable {\n    boolean processPayment(double amount);\n}\n\ninterface CashbackEligible {\n    double calculateCashback(double amount);\n}\n\nclass ShippingAddress {\n    private String street;\n    private String city;\n    private String postalCode;\n    public ShippingAddress(String s, String c, String p) {\n        this.street = s; this.city = c; this.postalCode = p;\n    }\n    public String getStreet() { return street; }\n    public String getCity() { return city; }\n    public String getPostalCode() { return postalCode; }\n    @Override\n    public String toString() { return street + \", \" + city; }\n}\n\nclass BankCard implements Payable, CashbackEligible {\n    private String cardNumber;\n    private String holderName;\n    private double balance;\n    public BankCard(String num, String name, double bal) {\n        this.cardNumber = num; this.holderName = name; this.balance = bal;\n    }\n    public String getMaskedNumber() {\n        return \"**** \" + cardNumber.substring(cardNumber.length() - 4);\n    }\n    public double getBalance() { return Math.round(balance * 100.0) / 100.0; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0) return false;\n        if (amount > balance) {\n            System.out.println(\"Payment declined: not enough money on card \" + getMaskedNumber() + \".\");\n            return false;\n        }\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" by bank card \" + getMaskedNumber() + \". Money left on the card: \" + getBalance());\n        return true;\n    }\n    @Override\n    public double calculateCashback(double amount) {\n        return Math.round(amount * 0.01 * 100.0) / 100.0;\n    }\n}\n\nclass BonusBalance implements Payable {\n    private double points;\n    public BonusBalance(double pts) { this.points = pts; }\n    public double getPoints() { return Math.round(points * 100.0) / 100.0; }\n    public void addPoints(double amount) { if (amount > 0) points += amount; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > points) return false;\n        points -= amount;\n        System.out.println(\"Paid \" + amount + \" with bonus points. Points left: \" + getPoints());\n        return true;\n    }\n}\n\nabstract class Product {\n    private String name;\n    private double price;\n    private int quantity;\n    public boolean inStock;\n    public char grade;\n    public Product(String n, double p, int q, boolean stock, char g) {\n        this.name = n; this.price = p; this.quantity = q; this.inStock = stock; this.grade = g;\n    }\n    public String getName() { return name; }\n    public double getPrice() { return price; }\n    protected double roundToTwoDecimals(double val) { return Math.round(val * 100.0) / 100.0; }\n    public double getPriceWithTax() { return roundToTwoDecimals(price * 1.12); }\n    public abstract double calculateDeliveryCost();\n}\n\nclass PhysicalProduct extends Product {\n    private double weightKg;\n    private boolean fragile;\n    public PhysicalProduct(String n, double p, int q, boolean stock, char g, double w, boolean frag) {\n        super(n, p, q, stock, g);\n        this.weightKg = w;\n        this.fragile = frag;\n    }\n    @Override\n    public double calculateDeliveryCost() {\n        double base = 15000.0;\n        if (weightKg > 10.0) base += 10000.0;\n        if (fragile) base += 10000.0;\n        return base;\n    }\n}\n\nclass DigitalProduct extends Product {\n    private double fileSizeMb;\n    private String downloadUrl;\n    public DigitalProduct(String n, double p, char g, double size, String url) {\n        super(n, p, 1, true, g);\n        this.fileSizeMb = size;\n        this.downloadUrl = url;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n}\n\nclass GiftCard extends Product implements Payable {\n    private String code;\n    private double balance;\n    public GiftCard(String name, double price, String code) {\n        super(name, price, 1, true, 'A');\n        this.code = code;\n        this.balance = price;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n    @Override\n    public double getPriceWithTax() { return getPrice(); }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > balance) return false;\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" with gift card \" + code + \". Left on the card: \" + balance);\n        return true;\n    }\n}\n\nabstract class Notification {\n    private Customer customer;\n    private String message;\n    public Notification(Customer c, String m) { this.customer = c; this.message = m; }\n    public Customer getCustomer() { return customer; }\n    public String getMessage() { return message; }\n    public abstract void send();\n}\n\nclass MobileNotification extends Notification {\n    private String deviceName;\n    public MobileNotification(Customer c, String m, String dev) { super(c, m); this.deviceName = dev; }\n    @Override\n    public void send() {\n        System.out.println(\"Push notification to \" + getCustomer().getName() + \"'s \" + deviceName + \": \" + getMessage());\n    }\n}\n\nclass WebNotification extends Notification {\n    private String browser;\n    public WebNotification(Customer c, String m, String b) { super(c, m); this.browser = b; }\n    @Override\n    public void send() {\n        System.out.println(\"Browser notification in \" + browser + \" for \" + getCustomer().getName() + \": \" + getMessage());\n    }\n}\n\nclass Customer {\n    private String name;\n    private int loyaltyPoints;\n    private double accountBalance;\n    private ShippingAddress shippingAddress;\n    private BankCard bankCard;\n    private BonusBalance bonusBalance = new BonusBalance(0.0);\n    private Map<String, ShippingAddress> deliveryAddresses = new LinkedHashMap<>();\n    public Customer(String name, int pts, double bal) {\n        this.name = name; this.loyaltyPoints = pts; this.accountBalance = bal;\n    }\n    public String getName() { return name; }\n    public ShippingAddress getShippingAddress() { return shippingAddress;\n    }\n    public void addBankCard(String num, double bal) { this.bankCard = new BankCard(num, name, bal); }\n    public BankCard getBankCard() { return bankCard; }\n    public BonusBalance getBonusBalance() { return bonusBalance; }\n    public void addDeliveryAddress(String label, ShippingAddress a) { deliveryAddresses.put(label, a); }\n    public boolean useDeliveryAddress(String label) {\n        ShippingAddress a = deliveryAddresses.get(label);\n        if (a != null) { this.shippingAddress = a; System.out.println(\"Orders will now be shipped to \\\"\" + label + \"\\\".\"); return true; }\n        return false;\n    }\n    public boolean pay(Payable method, double amount) {\n        boolean paid = method.processPayment(amount);\n        if (paid && method instanceof CashbackEligible eligible) {\n            double cb = eligible.calculateCashback(amount);\n            bonusBalance.addPoints(cb);\n            System.out.println(\"Cashback \" + cb + \" added. Bonus points: \" + bonusBalance.getPoints());\n        }\n        return paid;\n    }\n}\n\nclass OrderItem {\n    private Product product;\n    private int quantity;\n    public OrderItem(Product p, int q) { this.product = p; this.quantity = q; }\n    public Product getProduct() { return product; }\n    public double getLineTotal() { return product.getPriceWithTax() * quantity; }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    public Order(String id, Customer c) { this.orderId = id; this.customer = c; }\n    public void addItem(Product p, int q) { items.add(new OrderItem(p, q)); }\n    public double getTotal() {\n        double sum = 0;\n        for (OrderItem it : items) sum += it.getLineTotal() + it.getProduct().calculateDeliveryCost();\n        return Math.round(sum * 100.0) / 100.0;\n    }\n    public void printSummary() {\n        System.out.println(\"Order \" + orderId + \" for \" + (customer != null ? customer.getName() : \"Guest\") + \" | Total: \" + getTotal());\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GiftCard gc = new GiftCard(\"Sovg'a Kartasi 100\", 100000.0, \"GIFT-2026\");\n        System.out.println(\"Mahsulot: \" + gc.getName() + \" | QQSsiz narx: \" + gc.getPriceWithTax());\n        gc.processPayment(40000.0);\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 6-hafta yechimi Coursework 2 arxitekturasining markaziy qismidir: Product abstrakt sinfga aylanadi, to'lovlar 'Payable' va 'CashbackEligible' interfeyslariga o'tkaziladi, xabarnomalar esa 'Notification' abstrakt sinfi orqali mobil yoki veb push sifatida yetkaziladi.",
      "cleanCode": "class Customer {\n    public boolean pay(Payable method, double amount) {\n        boolean paid = method.processPayment(amount);\n        if (paid && method instanceof CashbackEligible eligible) {\n            bonusBalance.addPoints(eligible.calculateCashback(amount));\n        }\n        return paid;\n    }\n}",
      "breakdown": [
        "<code>OOPSolution_Week6</code>: to'liq rasmiy yechim klasslari.",
        "<code>Customer.pay()</code>: polimorfik to'lov va avtomatik keshbek."
      ]
    }
  },
  {
    "id": 144,
    "tier": 10,
    "tierName": "10-Bosqich: CW2 6-Hafta To'liq Arxitekturasi: To'lovlar, Keshbek va Xabarnomalar",
    "sector": "136-150: CW2 Week 6 Architecture Milestone",
    "title": {
      "uz": "144. CW2 Arxitekturasi — Notification Abstrakt Sinfiga Asoslanish",
      "en": "144. CW2 Architecture — Notification Abstract Base with Customer and Message"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT 6-hafta yechimi: 'public abstract class Notification'. Mijoz va xabar matnini saqlaydi hamda 'public abstract void send();' metodini e'lon qiladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. WIUT 6-hafta 'OOPSolution_Week6' rasmiy arxitekturasini e'lon qiling.\n2. 'Product' sinfini abstrakt ('calculateDeliveryCost()') qiling va 'PhysicalProduct', 'DigitalProduct' larni yarating.\n3. 'Payable' va 'CashbackEligible' interfeyslarini tuzib, 'BankCard', 'BonusBalance' va 'GiftCard' klasslarini bajaring.\n4. 'Notification' abstrakt sinfi va 'MobileNotification', 'WebNotification' vorislarini qo'shing.\n5. 'Main' da to'liq biznes oqimini tekshiring: 'Customer c = new Customer(\"Aziz\", 100, 50000.0);         Notification n = new MobileNotification(c, \"Buyurtma kutmoqda\", \"iPhone 15\");         n.send();'",
      "en": "📖 Real-World Scenario & Context\nNotification abstract superclass holds Customer and message state with abstract send().\n\n📋 Required Implementation Steps (1 to 5)\n1. Implement official Week 6 architecture matching OOPSolution_Week6.\n2. Make Product abstract and implement delivery costs in PhysicalProduct and DigitalProduct.\n3. Implement Payable, CashbackEligible, BankCard, BonusBalance, and GiftCard.\n4. Add Notification hierarchy with MobileNotification and WebNotification.\n5. Execute in 'main' and verify: 'Customer c = new Customer(\"Aziz\", 100, 50000.0);         Notification n = new MobileNotification(c, \"Buyurtma kutmoqda\", \"iPhone 15\");         n.send();'"
    },
    "requirements": {
      "classes": [
        "Customer",
        "Main"
      ],
      "methods": [
        "main"
      ]
    },
    "starterCode": "// Week 6 OOPSolution to'liq arxitekturasi\nimport java.util.List;\nimport java.util.ArrayList;\nimport java.util.Map;\nimport java.util.LinkedHashMap;\nimport java.util.Set;\nimport java.util.LinkedHashSet;\n\ninterface Payable {\n    boolean processPayment(double amount);\n}\n\ninterface CashbackEligible {\n    double calculateCashback(double amount);\n}\n\nclass ShippingAddress {\n    private String street;\n    private String city;\n    private String postalCode;\n    public ShippingAddress(String s, String c, String p) {\n        this.street = s; this.city = c; this.postalCode = p;\n    }\n    public String getStreet() { return street; }\n    public String getCity() { return city; }\n    public String getPostalCode() { return postalCode; }\n    @Override\n    public String toString() { return street + \", \" + city; }\n}\n\nclass BankCard implements Payable, CashbackEligible {\n    private String cardNumber;\n    private String holderName;\n    private double balance;\n    public BankCard(String num, String name, double bal) {\n        this.cardNumber = num; this.holderName = name; this.balance = bal;\n    }\n    public String getMaskedNumber() {\n        return \"**** \" + cardNumber.substring(cardNumber.length() - 4);\n    }\n    public double getBalance() { return Math.round(balance * 100.0) / 100.0; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0) return false;\n        if (amount > balance) {\n            System.out.println(\"Payment declined: not enough money on card \" + getMaskedNumber() + \".\");\n            return false;\n        }\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" by bank card \" + getMaskedNumber() + \". Money left on the card: \" + getBalance());\n        return true;\n    }\n    @Override\n    public double calculateCashback(double amount) {\n        return Math.round(amount * 0.01 * 100.0) / 100.0;\n    }\n}\n\nclass BonusBalance implements Payable {\n    private double points;\n    public BonusBalance(double pts) { this.points = pts; }\n    public double getPoints() { return Math.round(points * 100.0) / 100.0; }\n    public void addPoints(double amount) { if (amount > 0) points += amount; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > points) return false;\n        points -= amount;\n        System.out.println(\"Paid \" + amount + \" with bonus points. Points left: \" + getPoints());\n        return true;\n    }\n}\n\nabstract class Product {\n    private String name;\n    private double price;\n    private int quantity;\n    public boolean inStock;\n    public char grade;\n    public Product(String n, double p, int q, boolean stock, char g) {\n        this.name = n; this.price = p; this.quantity = q; this.inStock = stock; this.grade = g;\n    }\n    public String getName() { return name; }\n    public double getPrice() { return price; }\n    protected double roundToTwoDecimals(double val) { return Math.round(val * 100.0) / 100.0; }\n    public double getPriceWithTax() { return roundToTwoDecimals(price * 1.12); }\n    public abstract double calculateDeliveryCost();\n}\n\nclass PhysicalProduct extends Product {\n    private double weightKg;\n    private boolean fragile;\n    public PhysicalProduct(String n, double p, int q, boolean stock, char g, double w, boolean frag) {\n        super(n, p, q, stock, g);\n        this.weightKg = w;\n        this.fragile = frag;\n    }\n    @Override\n    public double calculateDeliveryCost() {\n        double base = 15000.0;\n        if (weightKg > 10.0) base += 10000.0;\n        if (fragile) base += 10000.0;\n        return base;\n    }\n}\n\nclass DigitalProduct extends Product {\n    private double fileSizeMb;\n    private String downloadUrl;\n    public DigitalProduct(String n, double p, char g, double size, String url) {\n        super(n, p, 1, true, g);\n        this.fileSizeMb = size;\n        this.downloadUrl = url;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n}\n\nclass GiftCard extends Product implements Payable {\n    private String code;\n    private double balance;\n    public GiftCard(String name, double price, String code) {\n        super(name, price, 1, true, 'A');\n        this.code = code;\n        this.balance = price;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n    @Override\n    public double getPriceWithTax() { return getPrice(); }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > balance) return false;\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" with gift card \" + code + \". Left on the card: \" + balance);\n        return true;\n    }\n}\n\nabstract class Notification {\n    private Customer customer;\n    private String message;\n    public Notification(Customer c, String m) { this.customer = c; this.message = m; }\n    public Customer getCustomer() { return customer; }\n    public String getMessage() { return message; }\n    public abstract void send();\n}\n\nclass MobileNotification extends Notification {\n    private String deviceName;\n    public MobileNotification(Customer c, String m, String dev) { super(c, m); this.deviceName = dev; }\n    @Override\n    public void send() {\n        System.out.println(\"Push notification to \" + getCustomer().getName() + \"'s \" + deviceName + \": \" + getMessage());\n    }\n}\n\nclass WebNotification extends Notification {\n    private String browser;\n    public WebNotification(Customer c, String m, String b) { super(c, m); this.browser = b; }\n    @Override\n    public void send() {\n        System.out.println(\"Browser notification in \" + browser + \" for \" + getCustomer().getName() + \": \" + getMessage());\n    }\n}\n\nclass Customer {\n    private String name;\n    private int loyaltyPoints;\n    private double accountBalance;\n    private ShippingAddress shippingAddress;\n    private BankCard bankCard;\n    private BonusBalance bonusBalance = new BonusBalance(0.0);\n    private Map<String, ShippingAddress> deliveryAddresses = new LinkedHashMap<>();\n    public Customer(String name, int pts, double bal) {\n        this.name = name; this.loyaltyPoints = pts; this.accountBalance = bal;\n    }\n    public String getName() { return name; }\n    public ShippingAddress getShippingAddress() { return shippingAddress;\n    }\n    public void addBankCard(String num, double bal) { this.bankCard = new BankCard(num, name, bal); }\n    public BankCard getBankCard() { return bankCard; }\n    public BonusBalance getBonusBalance() { return bonusBalance; }\n    public void addDeliveryAddress(String label, ShippingAddress a) { deliveryAddresses.put(label, a); }\n    public boolean useDeliveryAddress(String label) {\n        ShippingAddress a = deliveryAddresses.get(label);\n        if (a != null) { this.shippingAddress = a; System.out.println(\"Orders will now be shipped to \\\"\" + label + \"\\\".\"); return true; }\n        return false;\n    }\n    public boolean pay(Payable method, double amount) {\n        boolean paid = method.processPayment(amount);\n        if (paid && method instanceof CashbackEligible eligible) {\n            double cb = eligible.calculateCashback(amount);\n            bonusBalance.addPoints(cb);\n            System.out.println(\"Cashback \" + cb + \" added. Bonus points: \" + bonusBalance.getPoints());\n        }\n        return paid;\n    }\n}\n\nclass OrderItem {\n    private Product product;\n    private int quantity;\n    public OrderItem(Product p, int q) { this.product = p; this.quantity = q; }\n    public Product getProduct() { return product; }\n    public double getLineTotal() { return product.getPriceWithTax() * quantity; }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    public Order(String id, Customer c) { this.orderId = id; this.customer = c; }\n    public void addItem(Product p, int q) { items.add(new OrderItem(p, q)); }\n    public double getTotal() {\n        double sum = 0;\n        for (OrderItem it : items) sum += it.getLineTotal() + it.getProduct().calculateDeliveryCost();\n        return Math.round(sum * 100.0) / 100.0;\n    }\n    public void printSummary() {\n        System.out.println(\"Order \" + orderId + \" for \" + (customer != null ? customer.getName() : \"Guest\") + \" | Total: \" + getTotal());\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"Aziz\", 100, 50000.0);\n        Notification n = new MobileNotification(c, \"Buyurtma kutmoqda\", \"iPhone 15\");\n        n.send();\n    }\n}",
    "solution": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Map;\nimport java.util.LinkedHashMap;\nimport java.util.Set;\nimport java.util.LinkedHashSet;\n\ninterface Payable {\n    boolean processPayment(double amount);\n}\n\ninterface CashbackEligible {\n    double calculateCashback(double amount);\n}\n\nclass ShippingAddress {\n    private String street;\n    private String city;\n    private String postalCode;\n    public ShippingAddress(String s, String c, String p) {\n        this.street = s; this.city = c; this.postalCode = p;\n    }\n    public String getStreet() { return street; }\n    public String getCity() { return city; }\n    public String getPostalCode() { return postalCode; }\n    @Override\n    public String toString() { return street + \", \" + city; }\n}\n\nclass BankCard implements Payable, CashbackEligible {\n    private String cardNumber;\n    private String holderName;\n    private double balance;\n    public BankCard(String num, String name, double bal) {\n        this.cardNumber = num; this.holderName = name; this.balance = bal;\n    }\n    public String getMaskedNumber() {\n        return \"**** \" + cardNumber.substring(cardNumber.length() - 4);\n    }\n    public double getBalance() { return Math.round(balance * 100.0) / 100.0; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0) return false;\n        if (amount > balance) {\n            System.out.println(\"Payment declined: not enough money on card \" + getMaskedNumber() + \".\");\n            return false;\n        }\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" by bank card \" + getMaskedNumber() + \". Money left on the card: \" + getBalance());\n        return true;\n    }\n    @Override\n    public double calculateCashback(double amount) {\n        return Math.round(amount * 0.01 * 100.0) / 100.0;\n    }\n}\n\nclass BonusBalance implements Payable {\n    private double points;\n    public BonusBalance(double pts) { this.points = pts; }\n    public double getPoints() { return Math.round(points * 100.0) / 100.0; }\n    public void addPoints(double amount) { if (amount > 0) points += amount; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > points) return false;\n        points -= amount;\n        System.out.println(\"Paid \" + amount + \" with bonus points. Points left: \" + getPoints());\n        return true;\n    }\n}\n\nabstract class Product {\n    private String name;\n    private double price;\n    private int quantity;\n    public boolean inStock;\n    public char grade;\n    public Product(String n, double p, int q, boolean stock, char g) {\n        this.name = n; this.price = p; this.quantity = q; this.inStock = stock; this.grade = g;\n    }\n    public String getName() { return name; }\n    public double getPrice() { return price; }\n    protected double roundToTwoDecimals(double val) { return Math.round(val * 100.0) / 100.0; }\n    public double getPriceWithTax() { return roundToTwoDecimals(price * 1.12); }\n    public abstract double calculateDeliveryCost();\n}\n\nclass PhysicalProduct extends Product {\n    private double weightKg;\n    private boolean fragile;\n    public PhysicalProduct(String n, double p, int q, boolean stock, char g, double w, boolean frag) {\n        super(n, p, q, stock, g);\n        this.weightKg = w;\n        this.fragile = frag;\n    }\n    @Override\n    public double calculateDeliveryCost() {\n        double base = 15000.0;\n        if (weightKg > 10.0) base += 10000.0;\n        if (fragile) base += 10000.0;\n        return base;\n    }\n}\n\nclass DigitalProduct extends Product {\n    private double fileSizeMb;\n    private String downloadUrl;\n    public DigitalProduct(String n, double p, char g, double size, String url) {\n        super(n, p, 1, true, g);\n        this.fileSizeMb = size;\n        this.downloadUrl = url;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n}\n\nclass GiftCard extends Product implements Payable {\n    private String code;\n    private double balance;\n    public GiftCard(String name, double price, String code) {\n        super(name, price, 1, true, 'A');\n        this.code = code;\n        this.balance = price;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n    @Override\n    public double getPriceWithTax() { return getPrice(); }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > balance) return false;\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" with gift card \" + code + \". Left on the card: \" + balance);\n        return true;\n    }\n}\n\nabstract class Notification {\n    private Customer customer;\n    private String message;\n    public Notification(Customer c, String m) { this.customer = c; this.message = m; }\n    public Customer getCustomer() { return customer; }\n    public String getMessage() { return message; }\n    public abstract void send();\n}\n\nclass MobileNotification extends Notification {\n    private String deviceName;\n    public MobileNotification(Customer c, String m, String dev) { super(c, m); this.deviceName = dev; }\n    @Override\n    public void send() {\n        System.out.println(\"Push notification to \" + getCustomer().getName() + \"'s \" + deviceName + \": \" + getMessage());\n    }\n}\n\nclass WebNotification extends Notification {\n    private String browser;\n    public WebNotification(Customer c, String m, String b) { super(c, m); this.browser = b; }\n    @Override\n    public void send() {\n        System.out.println(\"Browser notification in \" + browser + \" for \" + getCustomer().getName() + \": \" + getMessage());\n    }\n}\n\nclass Customer {\n    private String name;\n    private int loyaltyPoints;\n    private double accountBalance;\n    private ShippingAddress shippingAddress;\n    private BankCard bankCard;\n    private BonusBalance bonusBalance = new BonusBalance(0.0);\n    private Map<String, ShippingAddress> deliveryAddresses = new LinkedHashMap<>();\n    public Customer(String name, int pts, double bal) {\n        this.name = name; this.loyaltyPoints = pts; this.accountBalance = bal;\n    }\n    public String getName() { return name; }\n    public ShippingAddress getShippingAddress() { return shippingAddress;\n    }\n    public void addBankCard(String num, double bal) { this.bankCard = new BankCard(num, name, bal); }\n    public BankCard getBankCard() { return bankCard; }\n    public BonusBalance getBonusBalance() { return bonusBalance; }\n    public void addDeliveryAddress(String label, ShippingAddress a) { deliveryAddresses.put(label, a); }\n    public boolean useDeliveryAddress(String label) {\n        ShippingAddress a = deliveryAddresses.get(label);\n        if (a != null) { this.shippingAddress = a; System.out.println(\"Orders will now be shipped to \\\"\" + label + \"\\\".\"); return true; }\n        return false;\n    }\n    public boolean pay(Payable method, double amount) {\n        boolean paid = method.processPayment(amount);\n        if (paid && method instanceof CashbackEligible eligible) {\n            double cb = eligible.calculateCashback(amount);\n            bonusBalance.addPoints(cb);\n            System.out.println(\"Cashback \" + cb + \" added. Bonus points: \" + bonusBalance.getPoints());\n        }\n        return paid;\n    }\n}\n\nclass OrderItem {\n    private Product product;\n    private int quantity;\n    public OrderItem(Product p, int q) { this.product = p; this.quantity = q; }\n    public Product getProduct() { return product; }\n    public double getLineTotal() { return product.getPriceWithTax() * quantity; }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    public Order(String id, Customer c) { this.orderId = id; this.customer = c; }\n    public void addItem(Product p, int q) { items.add(new OrderItem(p, q)); }\n    public double getTotal() {\n        double sum = 0;\n        for (OrderItem it : items) sum += it.getLineTotal() + it.getProduct().calculateDeliveryCost();\n        return Math.round(sum * 100.0) / 100.0;\n    }\n    public void printSummary() {\n        System.out.println(\"Order \" + orderId + \" for \" + (customer != null ? customer.getName() : \"Guest\") + \" | Total: \" + getTotal());\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"Aziz\", 100, 50000.0);\n        Notification n = new MobileNotification(c, \"Buyurtma kutmoqda\", \"iPhone 15\");\n        n.send();\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 6-hafta yechimi Coursework 2 arxitekturasining markaziy qismidir: Product abstrakt sinfga aylanadi, to'lovlar 'Payable' va 'CashbackEligible' interfeyslariga o'tkaziladi, xabarnomalar esa 'Notification' abstrakt sinfi orqali mobil yoki veb push sifatida yetkaziladi.",
      "cleanCode": "class Customer {\n    public boolean pay(Payable method, double amount) {\n        boolean paid = method.processPayment(amount);\n        if (paid && method instanceof CashbackEligible eligible) {\n            bonusBalance.addPoints(eligible.calculateCashback(amount));\n        }\n        return paid;\n    }\n}",
      "breakdown": [
        "<code>OOPSolution_Week6</code>: to'liq rasmiy yechim klasslari.",
        "<code>Customer.pay()</code>: polimorfik to'lov va avtomatik keshbek."
      ]
    }
  },
  {
    "id": 145,
    "tier": 10,
    "tierName": "10-Bosqich: CW2 6-Hafta To'liq Arxitekturasi: To'lovlar, Keshbek va Xabarnomalar",
    "sector": "136-150: CW2 Week 6 Architecture Milestone",
    "title": {
      "uz": "145. CW2 Arxitekturasi — MobileNotification Telefonga Push Jo'natishi",
      "en": "145. CW2 Architecture — MobileNotification Device Push Dispatch"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\n'MobileNotification extends Notification'. 'deviceName' maydoniga ega bo'lib, xabarni mijozning telefon modeliga push bildirishnoma sifatida jo'natadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. WIUT 6-hafta 'OOPSolution_Week6' rasmiy arxitekturasini e'lon qiling.\n2. 'Product' sinfini abstrakt ('calculateDeliveryCost()') qiling va 'PhysicalProduct', 'DigitalProduct' larni yarating.\n3. 'Payable' va 'CashbackEligible' interfeyslarini tuzib, 'BankCard', 'BonusBalance' va 'GiftCard' klasslarini bajaring.\n4. 'Notification' abstrakt sinfi va 'MobileNotification', 'WebNotification' vorislarini qo'shing.\n5. 'Main' da to'liq biznes oqimini tekshiring: 'Customer c = new Customer(\"Malika\", 200, 150000.0);         MobileNotification mn = new MobileNotification(c, \"Hisob to'ldirildi\", \"Samsung Galaxy\");         mn.send();'",
      "en": "📖 Real-World Scenario & Context\nMobileNotification subclasses Notification directing push messages to device.\n\n📋 Required Implementation Steps (1 to 5)\n1. Implement official Week 6 architecture matching OOPSolution_Week6.\n2. Make Product abstract and implement delivery costs in PhysicalProduct and DigitalProduct.\n3. Implement Payable, CashbackEligible, BankCard, BonusBalance, and GiftCard.\n4. Add Notification hierarchy with MobileNotification and WebNotification.\n5. Execute in 'main' and verify: 'Customer c = new Customer(\"Malika\", 200, 150000.0);         MobileNotification mn = new MobileNotification(c, \"Hisob to'ldirildi\", \"Samsung Galaxy\");         mn.send();'"
    },
    "requirements": {
      "classes": [
        "Customer",
        "Main"
      ],
      "methods": [
        "main"
      ]
    },
    "starterCode": "// Week 6 OOPSolution to'liq arxitekturasi\nimport java.util.List;\nimport java.util.ArrayList;\nimport java.util.Map;\nimport java.util.LinkedHashMap;\nimport java.util.Set;\nimport java.util.LinkedHashSet;\n\ninterface Payable {\n    boolean processPayment(double amount);\n}\n\ninterface CashbackEligible {\n    double calculateCashback(double amount);\n}\n\nclass ShippingAddress {\n    private String street;\n    private String city;\n    private String postalCode;\n    public ShippingAddress(String s, String c, String p) {\n        this.street = s; this.city = c; this.postalCode = p;\n    }\n    public String getStreet() { return street; }\n    public String getCity() { return city; }\n    public String getPostalCode() { return postalCode; }\n    @Override\n    public String toString() { return street + \", \" + city; }\n}\n\nclass BankCard implements Payable, CashbackEligible {\n    private String cardNumber;\n    private String holderName;\n    private double balance;\n    public BankCard(String num, String name, double bal) {\n        this.cardNumber = num; this.holderName = name; this.balance = bal;\n    }\n    public String getMaskedNumber() {\n        return \"**** \" + cardNumber.substring(cardNumber.length() - 4);\n    }\n    public double getBalance() { return Math.round(balance * 100.0) / 100.0; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0) return false;\n        if (amount > balance) {\n            System.out.println(\"Payment declined: not enough money on card \" + getMaskedNumber() + \".\");\n            return false;\n        }\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" by bank card \" + getMaskedNumber() + \". Money left on the card: \" + getBalance());\n        return true;\n    }\n    @Override\n    public double calculateCashback(double amount) {\n        return Math.round(amount * 0.01 * 100.0) / 100.0;\n    }\n}\n\nclass BonusBalance implements Payable {\n    private double points;\n    public BonusBalance(double pts) { this.points = pts; }\n    public double getPoints() { return Math.round(points * 100.0) / 100.0; }\n    public void addPoints(double amount) { if (amount > 0) points += amount; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > points) return false;\n        points -= amount;\n        System.out.println(\"Paid \" + amount + \" with bonus points. Points left: \" + getPoints());\n        return true;\n    }\n}\n\nabstract class Product {\n    private String name;\n    private double price;\n    private int quantity;\n    public boolean inStock;\n    public char grade;\n    public Product(String n, double p, int q, boolean stock, char g) {\n        this.name = n; this.price = p; this.quantity = q; this.inStock = stock; this.grade = g;\n    }\n    public String getName() { return name; }\n    public double getPrice() { return price; }\n    protected double roundToTwoDecimals(double val) { return Math.round(val * 100.0) / 100.0; }\n    public double getPriceWithTax() { return roundToTwoDecimals(price * 1.12); }\n    public abstract double calculateDeliveryCost();\n}\n\nclass PhysicalProduct extends Product {\n    private double weightKg;\n    private boolean fragile;\n    public PhysicalProduct(String n, double p, int q, boolean stock, char g, double w, boolean frag) {\n        super(n, p, q, stock, g);\n        this.weightKg = w;\n        this.fragile = frag;\n    }\n    @Override\n    public double calculateDeliveryCost() {\n        double base = 15000.0;\n        if (weightKg > 10.0) base += 10000.0;\n        if (fragile) base += 10000.0;\n        return base;\n    }\n}\n\nclass DigitalProduct extends Product {\n    private double fileSizeMb;\n    private String downloadUrl;\n    public DigitalProduct(String n, double p, char g, double size, String url) {\n        super(n, p, 1, true, g);\n        this.fileSizeMb = size;\n        this.downloadUrl = url;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n}\n\nclass GiftCard extends Product implements Payable {\n    private String code;\n    private double balance;\n    public GiftCard(String name, double price, String code) {\n        super(name, price, 1, true, 'A');\n        this.code = code;\n        this.balance = price;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n    @Override\n    public double getPriceWithTax() { return getPrice(); }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > balance) return false;\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" with gift card \" + code + \". Left on the card: \" + balance);\n        return true;\n    }\n}\n\nabstract class Notification {\n    private Customer customer;\n    private String message;\n    public Notification(Customer c, String m) { this.customer = c; this.message = m; }\n    public Customer getCustomer() { return customer; }\n    public String getMessage() { return message; }\n    public abstract void send();\n}\n\nclass MobileNotification extends Notification {\n    private String deviceName;\n    public MobileNotification(Customer c, String m, String dev) { super(c, m); this.deviceName = dev; }\n    @Override\n    public void send() {\n        System.out.println(\"Push notification to \" + getCustomer().getName() + \"'s \" + deviceName + \": \" + getMessage());\n    }\n}\n\nclass WebNotification extends Notification {\n    private String browser;\n    public WebNotification(Customer c, String m, String b) { super(c, m); this.browser = b; }\n    @Override\n    public void send() {\n        System.out.println(\"Browser notification in \" + browser + \" for \" + getCustomer().getName() + \": \" + getMessage());\n    }\n}\n\nclass Customer {\n    private String name;\n    private int loyaltyPoints;\n    private double accountBalance;\n    private ShippingAddress shippingAddress;\n    private BankCard bankCard;\n    private BonusBalance bonusBalance = new BonusBalance(0.0);\n    private Map<String, ShippingAddress> deliveryAddresses = new LinkedHashMap<>();\n    public Customer(String name, int pts, double bal) {\n        this.name = name; this.loyaltyPoints = pts; this.accountBalance = bal;\n    }\n    public String getName() { return name; }\n    public ShippingAddress getShippingAddress() { return shippingAddress;\n    }\n    public void addBankCard(String num, double bal) { this.bankCard = new BankCard(num, name, bal); }\n    public BankCard getBankCard() { return bankCard; }\n    public BonusBalance getBonusBalance() { return bonusBalance; }\n    public void addDeliveryAddress(String label, ShippingAddress a) { deliveryAddresses.put(label, a); }\n    public boolean useDeliveryAddress(String label) {\n        ShippingAddress a = deliveryAddresses.get(label);\n        if (a != null) { this.shippingAddress = a; System.out.println(\"Orders will now be shipped to \\\"\" + label + \"\\\".\"); return true; }\n        return false;\n    }\n    public boolean pay(Payable method, double amount) {\n        boolean paid = method.processPayment(amount);\n        if (paid && method instanceof CashbackEligible eligible) {\n            double cb = eligible.calculateCashback(amount);\n            bonusBalance.addPoints(cb);\n            System.out.println(\"Cashback \" + cb + \" added. Bonus points: \" + bonusBalance.getPoints());\n        }\n        return paid;\n    }\n}\n\nclass OrderItem {\n    private Product product;\n    private int quantity;\n    public OrderItem(Product p, int q) { this.product = p; this.quantity = q; }\n    public Product getProduct() { return product; }\n    public double getLineTotal() { return product.getPriceWithTax() * quantity; }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    public Order(String id, Customer c) { this.orderId = id; this.customer = c; }\n    public void addItem(Product p, int q) { items.add(new OrderItem(p, q)); }\n    public double getTotal() {\n        double sum = 0;\n        for (OrderItem it : items) sum += it.getLineTotal() + it.getProduct().calculateDeliveryCost();\n        return Math.round(sum * 100.0) / 100.0;\n    }\n    public void printSummary() {\n        System.out.println(\"Order \" + orderId + \" for \" + (customer != null ? customer.getName() : \"Guest\") + \" | Total: \" + getTotal());\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"Malika\", 200, 150000.0);\n        MobileNotification mn = new MobileNotification(c, \"Hisob to'ldirildi\", \"Samsung Galaxy\");\n        mn.send();\n    }\n}",
    "solution": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Map;\nimport java.util.LinkedHashMap;\nimport java.util.Set;\nimport java.util.LinkedHashSet;\n\ninterface Payable {\n    boolean processPayment(double amount);\n}\n\ninterface CashbackEligible {\n    double calculateCashback(double amount);\n}\n\nclass ShippingAddress {\n    private String street;\n    private String city;\n    private String postalCode;\n    public ShippingAddress(String s, String c, String p) {\n        this.street = s; this.city = c; this.postalCode = p;\n    }\n    public String getStreet() { return street; }\n    public String getCity() { return city; }\n    public String getPostalCode() { return postalCode; }\n    @Override\n    public String toString() { return street + \", \" + city; }\n}\n\nclass BankCard implements Payable, CashbackEligible {\n    private String cardNumber;\n    private String holderName;\n    private double balance;\n    public BankCard(String num, String name, double bal) {\n        this.cardNumber = num; this.holderName = name; this.balance = bal;\n    }\n    public String getMaskedNumber() {\n        return \"**** \" + cardNumber.substring(cardNumber.length() - 4);\n    }\n    public double getBalance() { return Math.round(balance * 100.0) / 100.0; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0) return false;\n        if (amount > balance) {\n            System.out.println(\"Payment declined: not enough money on card \" + getMaskedNumber() + \".\");\n            return false;\n        }\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" by bank card \" + getMaskedNumber() + \". Money left on the card: \" + getBalance());\n        return true;\n    }\n    @Override\n    public double calculateCashback(double amount) {\n        return Math.round(amount * 0.01 * 100.0) / 100.0;\n    }\n}\n\nclass BonusBalance implements Payable {\n    private double points;\n    public BonusBalance(double pts) { this.points = pts; }\n    public double getPoints() { return Math.round(points * 100.0) / 100.0; }\n    public void addPoints(double amount) { if (amount > 0) points += amount; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > points) return false;\n        points -= amount;\n        System.out.println(\"Paid \" + amount + \" with bonus points. Points left: \" + getPoints());\n        return true;\n    }\n}\n\nabstract class Product {\n    private String name;\n    private double price;\n    private int quantity;\n    public boolean inStock;\n    public char grade;\n    public Product(String n, double p, int q, boolean stock, char g) {\n        this.name = n; this.price = p; this.quantity = q; this.inStock = stock; this.grade = g;\n    }\n    public String getName() { return name; }\n    public double getPrice() { return price; }\n    protected double roundToTwoDecimals(double val) { return Math.round(val * 100.0) / 100.0; }\n    public double getPriceWithTax() { return roundToTwoDecimals(price * 1.12); }\n    public abstract double calculateDeliveryCost();\n}\n\nclass PhysicalProduct extends Product {\n    private double weightKg;\n    private boolean fragile;\n    public PhysicalProduct(String n, double p, int q, boolean stock, char g, double w, boolean frag) {\n        super(n, p, q, stock, g);\n        this.weightKg = w;\n        this.fragile = frag;\n    }\n    @Override\n    public double calculateDeliveryCost() {\n        double base = 15000.0;\n        if (weightKg > 10.0) base += 10000.0;\n        if (fragile) base += 10000.0;\n        return base;\n    }\n}\n\nclass DigitalProduct extends Product {\n    private double fileSizeMb;\n    private String downloadUrl;\n    public DigitalProduct(String n, double p, char g, double size, String url) {\n        super(n, p, 1, true, g);\n        this.fileSizeMb = size;\n        this.downloadUrl = url;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n}\n\nclass GiftCard extends Product implements Payable {\n    private String code;\n    private double balance;\n    public GiftCard(String name, double price, String code) {\n        super(name, price, 1, true, 'A');\n        this.code = code;\n        this.balance = price;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n    @Override\n    public double getPriceWithTax() { return getPrice(); }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > balance) return false;\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" with gift card \" + code + \". Left on the card: \" + balance);\n        return true;\n    }\n}\n\nabstract class Notification {\n    private Customer customer;\n    private String message;\n    public Notification(Customer c, String m) { this.customer = c; this.message = m; }\n    public Customer getCustomer() { return customer; }\n    public String getMessage() { return message; }\n    public abstract void send();\n}\n\nclass MobileNotification extends Notification {\n    private String deviceName;\n    public MobileNotification(Customer c, String m, String dev) { super(c, m); this.deviceName = dev; }\n    @Override\n    public void send() {\n        System.out.println(\"Push notification to \" + getCustomer().getName() + \"'s \" + deviceName + \": \" + getMessage());\n    }\n}\n\nclass WebNotification extends Notification {\n    private String browser;\n    public WebNotification(Customer c, String m, String b) { super(c, m); this.browser = b; }\n    @Override\n    public void send() {\n        System.out.println(\"Browser notification in \" + browser + \" for \" + getCustomer().getName() + \": \" + getMessage());\n    }\n}\n\nclass Customer {\n    private String name;\n    private int loyaltyPoints;\n    private double accountBalance;\n    private ShippingAddress shippingAddress;\n    private BankCard bankCard;\n    private BonusBalance bonusBalance = new BonusBalance(0.0);\n    private Map<String, ShippingAddress> deliveryAddresses = new LinkedHashMap<>();\n    public Customer(String name, int pts, double bal) {\n        this.name = name; this.loyaltyPoints = pts; this.accountBalance = bal;\n    }\n    public String getName() { return name; }\n    public ShippingAddress getShippingAddress() { return shippingAddress;\n    }\n    public void addBankCard(String num, double bal) { this.bankCard = new BankCard(num, name, bal); }\n    public BankCard getBankCard() { return bankCard; }\n    public BonusBalance getBonusBalance() { return bonusBalance; }\n    public void addDeliveryAddress(String label, ShippingAddress a) { deliveryAddresses.put(label, a); }\n    public boolean useDeliveryAddress(String label) {\n        ShippingAddress a = deliveryAddresses.get(label);\n        if (a != null) { this.shippingAddress = a; System.out.println(\"Orders will now be shipped to \\\"\" + label + \"\\\".\"); return true; }\n        return false;\n    }\n    public boolean pay(Payable method, double amount) {\n        boolean paid = method.processPayment(amount);\n        if (paid && method instanceof CashbackEligible eligible) {\n            double cb = eligible.calculateCashback(amount);\n            bonusBalance.addPoints(cb);\n            System.out.println(\"Cashback \" + cb + \" added. Bonus points: \" + bonusBalance.getPoints());\n        }\n        return paid;\n    }\n}\n\nclass OrderItem {\n    private Product product;\n    private int quantity;\n    public OrderItem(Product p, int q) { this.product = p; this.quantity = q; }\n    public Product getProduct() { return product; }\n    public double getLineTotal() { return product.getPriceWithTax() * quantity; }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    public Order(String id, Customer c) { this.orderId = id; this.customer = c; }\n    public void addItem(Product p, int q) { items.add(new OrderItem(p, q)); }\n    public double getTotal() {\n        double sum = 0;\n        for (OrderItem it : items) sum += it.getLineTotal() + it.getProduct().calculateDeliveryCost();\n        return Math.round(sum * 100.0) / 100.0;\n    }\n    public void printSummary() {\n        System.out.println(\"Order \" + orderId + \" for \" + (customer != null ? customer.getName() : \"Guest\") + \" | Total: \" + getTotal());\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"Malika\", 200, 150000.0);\n        MobileNotification mn = new MobileNotification(c, \"Hisob to'ldirildi\", \"Samsung Galaxy\");\n        mn.send();\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 6-hafta yechimi Coursework 2 arxitekturasining markaziy qismidir: Product abstrakt sinfga aylanadi, to'lovlar 'Payable' va 'CashbackEligible' interfeyslariga o'tkaziladi, xabarnomalar esa 'Notification' abstrakt sinfi orqali mobil yoki veb push sifatida yetkaziladi.",
      "cleanCode": "class Customer {\n    public boolean pay(Payable method, double amount) {\n        boolean paid = method.processPayment(amount);\n        if (paid && method instanceof CashbackEligible eligible) {\n            bonusBalance.addPoints(eligible.calculateCashback(amount));\n        }\n        return paid;\n    }\n}",
      "breakdown": [
        "<code>OOPSolution_Week6</code>: to'liq rasmiy yechim klasslari.",
        "<code>Customer.pay()</code>: polimorfik to'lov va avtomatik keshbek."
      ]
    }
  },
  {
    "id": 146,
    "tier": 10,
    "tierName": "10-Bosqich: CW2 6-Hafta To'liq Arxitekturasi: To'lovlar, Keshbek va Xabarnomalar",
    "sector": "136-150: CW2 Week 6 Architecture Milestone",
    "title": {
      "uz": "146. CW2 Arxitekturasi — WebNotification Brauzerda Xabarni Ko'rsatishi",
      "en": "146. CW2 Architecture — WebNotification Browser Alert Dispatch"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\n'WebNotification extends Notification'. 'browser' maydoniga ega bo'lib, xabarni mijozning brauzerida (Chrome, Safari) ko'rsatadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. WIUT 6-hafta 'OOPSolution_Week6' rasmiy arxitekturasini e'lon qiling.\n2. 'Product' sinfini abstrakt ('calculateDeliveryCost()') qiling va 'PhysicalProduct', 'DigitalProduct' larni yarating.\n3. 'Payable' va 'CashbackEligible' interfeyslarini tuzib, 'BankCard', 'BonusBalance' va 'GiftCard' klasslarini bajaring.\n4. 'Notification' abstrakt sinfi va 'MobileNotification', 'WebNotification' vorislarini qo'shing.\n5. 'Main' da to'liq biznes oqimini tekshiring: 'Customer c = new Customer(\"Bobur\", 50, 20000.0);         WebNotification wn = new WebNotification(c, \"Chegirma boshlandi!\", \"Chrome\");         wn.send();'",
      "en": "📖 Real-World Scenario & Context\nWebNotification displays notification inside customer active browser.\n\n📋 Required Implementation Steps (1 to 5)\n1. Implement official Week 6 architecture matching OOPSolution_Week6.\n2. Make Product abstract and implement delivery costs in PhysicalProduct and DigitalProduct.\n3. Implement Payable, CashbackEligible, BankCard, BonusBalance, and GiftCard.\n4. Add Notification hierarchy with MobileNotification and WebNotification.\n5. Execute in 'main' and verify: 'Customer c = new Customer(\"Bobur\", 50, 20000.0);         WebNotification wn = new WebNotification(c, \"Chegirma boshlandi!\", \"Chrome\");         wn.send();'"
    },
    "requirements": {
      "classes": [
        "Customer",
        "Main"
      ],
      "methods": [
        "main"
      ]
    },
    "starterCode": "// Week 6 OOPSolution to'liq arxitekturasi\nimport java.util.List;\nimport java.util.ArrayList;\nimport java.util.Map;\nimport java.util.LinkedHashMap;\nimport java.util.Set;\nimport java.util.LinkedHashSet;\n\ninterface Payable {\n    boolean processPayment(double amount);\n}\n\ninterface CashbackEligible {\n    double calculateCashback(double amount);\n}\n\nclass ShippingAddress {\n    private String street;\n    private String city;\n    private String postalCode;\n    public ShippingAddress(String s, String c, String p) {\n        this.street = s; this.city = c; this.postalCode = p;\n    }\n    public String getStreet() { return street; }\n    public String getCity() { return city; }\n    public String getPostalCode() { return postalCode; }\n    @Override\n    public String toString() { return street + \", \" + city; }\n}\n\nclass BankCard implements Payable, CashbackEligible {\n    private String cardNumber;\n    private String holderName;\n    private double balance;\n    public BankCard(String num, String name, double bal) {\n        this.cardNumber = num; this.holderName = name; this.balance = bal;\n    }\n    public String getMaskedNumber() {\n        return \"**** \" + cardNumber.substring(cardNumber.length() - 4);\n    }\n    public double getBalance() { return Math.round(balance * 100.0) / 100.0; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0) return false;\n        if (amount > balance) {\n            System.out.println(\"Payment declined: not enough money on card \" + getMaskedNumber() + \".\");\n            return false;\n        }\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" by bank card \" + getMaskedNumber() + \". Money left on the card: \" + getBalance());\n        return true;\n    }\n    @Override\n    public double calculateCashback(double amount) {\n        return Math.round(amount * 0.01 * 100.0) / 100.0;\n    }\n}\n\nclass BonusBalance implements Payable {\n    private double points;\n    public BonusBalance(double pts) { this.points = pts; }\n    public double getPoints() { return Math.round(points * 100.0) / 100.0; }\n    public void addPoints(double amount) { if (amount > 0) points += amount; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > points) return false;\n        points -= amount;\n        System.out.println(\"Paid \" + amount + \" with bonus points. Points left: \" + getPoints());\n        return true;\n    }\n}\n\nabstract class Product {\n    private String name;\n    private double price;\n    private int quantity;\n    public boolean inStock;\n    public char grade;\n    public Product(String n, double p, int q, boolean stock, char g) {\n        this.name = n; this.price = p; this.quantity = q; this.inStock = stock; this.grade = g;\n    }\n    public String getName() { return name; }\n    public double getPrice() { return price; }\n    protected double roundToTwoDecimals(double val) { return Math.round(val * 100.0) / 100.0; }\n    public double getPriceWithTax() { return roundToTwoDecimals(price * 1.12); }\n    public abstract double calculateDeliveryCost();\n}\n\nclass PhysicalProduct extends Product {\n    private double weightKg;\n    private boolean fragile;\n    public PhysicalProduct(String n, double p, int q, boolean stock, char g, double w, boolean frag) {\n        super(n, p, q, stock, g);\n        this.weightKg = w;\n        this.fragile = frag;\n    }\n    @Override\n    public double calculateDeliveryCost() {\n        double base = 15000.0;\n        if (weightKg > 10.0) base += 10000.0;\n        if (fragile) base += 10000.0;\n        return base;\n    }\n}\n\nclass DigitalProduct extends Product {\n    private double fileSizeMb;\n    private String downloadUrl;\n    public DigitalProduct(String n, double p, char g, double size, String url) {\n        super(n, p, 1, true, g);\n        this.fileSizeMb = size;\n        this.downloadUrl = url;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n}\n\nclass GiftCard extends Product implements Payable {\n    private String code;\n    private double balance;\n    public GiftCard(String name, double price, String code) {\n        super(name, price, 1, true, 'A');\n        this.code = code;\n        this.balance = price;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n    @Override\n    public double getPriceWithTax() { return getPrice(); }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > balance) return false;\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" with gift card \" + code + \". Left on the card: \" + balance);\n        return true;\n    }\n}\n\nabstract class Notification {\n    private Customer customer;\n    private String message;\n    public Notification(Customer c, String m) { this.customer = c; this.message = m; }\n    public Customer getCustomer() { return customer; }\n    public String getMessage() { return message; }\n    public abstract void send();\n}\n\nclass MobileNotification extends Notification {\n    private String deviceName;\n    public MobileNotification(Customer c, String m, String dev) { super(c, m); this.deviceName = dev; }\n    @Override\n    public void send() {\n        System.out.println(\"Push notification to \" + getCustomer().getName() + \"'s \" + deviceName + \": \" + getMessage());\n    }\n}\n\nclass WebNotification extends Notification {\n    private String browser;\n    public WebNotification(Customer c, String m, String b) { super(c, m); this.browser = b; }\n    @Override\n    public void send() {\n        System.out.println(\"Browser notification in \" + browser + \" for \" + getCustomer().getName() + \": \" + getMessage());\n    }\n}\n\nclass Customer {\n    private String name;\n    private int loyaltyPoints;\n    private double accountBalance;\n    private ShippingAddress shippingAddress;\n    private BankCard bankCard;\n    private BonusBalance bonusBalance = new BonusBalance(0.0);\n    private Map<String, ShippingAddress> deliveryAddresses = new LinkedHashMap<>();\n    public Customer(String name, int pts, double bal) {\n        this.name = name; this.loyaltyPoints = pts; this.accountBalance = bal;\n    }\n    public String getName() { return name; }\n    public ShippingAddress getShippingAddress() { return shippingAddress;\n    }\n    public void addBankCard(String num, double bal) { this.bankCard = new BankCard(num, name, bal); }\n    public BankCard getBankCard() { return bankCard; }\n    public BonusBalance getBonusBalance() { return bonusBalance; }\n    public void addDeliveryAddress(String label, ShippingAddress a) { deliveryAddresses.put(label, a); }\n    public boolean useDeliveryAddress(String label) {\n        ShippingAddress a = deliveryAddresses.get(label);\n        if (a != null) { this.shippingAddress = a; System.out.println(\"Orders will now be shipped to \\\"\" + label + \"\\\".\"); return true; }\n        return false;\n    }\n    public boolean pay(Payable method, double amount) {\n        boolean paid = method.processPayment(amount);\n        if (paid && method instanceof CashbackEligible eligible) {\n            double cb = eligible.calculateCashback(amount);\n            bonusBalance.addPoints(cb);\n            System.out.println(\"Cashback \" + cb + \" added. Bonus points: \" + bonusBalance.getPoints());\n        }\n        return paid;\n    }\n}\n\nclass OrderItem {\n    private Product product;\n    private int quantity;\n    public OrderItem(Product p, int q) { this.product = p; this.quantity = q; }\n    public Product getProduct() { return product; }\n    public double getLineTotal() { return product.getPriceWithTax() * quantity; }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    public Order(String id, Customer c) { this.orderId = id; this.customer = c; }\n    public void addItem(Product p, int q) { items.add(new OrderItem(p, q)); }\n    public double getTotal() {\n        double sum = 0;\n        for (OrderItem it : items) sum += it.getLineTotal() + it.getProduct().calculateDeliveryCost();\n        return Math.round(sum * 100.0) / 100.0;\n    }\n    public void printSummary() {\n        System.out.println(\"Order \" + orderId + \" for \" + (customer != null ? customer.getName() : \"Guest\") + \" | Total: \" + getTotal());\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"Bobur\", 50, 20000.0);\n        WebNotification wn = new WebNotification(c, \"Chegirma boshlandi!\", \"Chrome\");\n        wn.send();\n    }\n}",
    "solution": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Map;\nimport java.util.LinkedHashMap;\nimport java.util.Set;\nimport java.util.LinkedHashSet;\n\ninterface Payable {\n    boolean processPayment(double amount);\n}\n\ninterface CashbackEligible {\n    double calculateCashback(double amount);\n}\n\nclass ShippingAddress {\n    private String street;\n    private String city;\n    private String postalCode;\n    public ShippingAddress(String s, String c, String p) {\n        this.street = s; this.city = c; this.postalCode = p;\n    }\n    public String getStreet() { return street; }\n    public String getCity() { return city; }\n    public String getPostalCode() { return postalCode; }\n    @Override\n    public String toString() { return street + \", \" + city; }\n}\n\nclass BankCard implements Payable, CashbackEligible {\n    private String cardNumber;\n    private String holderName;\n    private double balance;\n    public BankCard(String num, String name, double bal) {\n        this.cardNumber = num; this.holderName = name; this.balance = bal;\n    }\n    public String getMaskedNumber() {\n        return \"**** \" + cardNumber.substring(cardNumber.length() - 4);\n    }\n    public double getBalance() { return Math.round(balance * 100.0) / 100.0; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0) return false;\n        if (amount > balance) {\n            System.out.println(\"Payment declined: not enough money on card \" + getMaskedNumber() + \".\");\n            return false;\n        }\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" by bank card \" + getMaskedNumber() + \". Money left on the card: \" + getBalance());\n        return true;\n    }\n    @Override\n    public double calculateCashback(double amount) {\n        return Math.round(amount * 0.01 * 100.0) / 100.0;\n    }\n}\n\nclass BonusBalance implements Payable {\n    private double points;\n    public BonusBalance(double pts) { this.points = pts; }\n    public double getPoints() { return Math.round(points * 100.0) / 100.0; }\n    public void addPoints(double amount) { if (amount > 0) points += amount; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > points) return false;\n        points -= amount;\n        System.out.println(\"Paid \" + amount + \" with bonus points. Points left: \" + getPoints());\n        return true;\n    }\n}\n\nabstract class Product {\n    private String name;\n    private double price;\n    private int quantity;\n    public boolean inStock;\n    public char grade;\n    public Product(String n, double p, int q, boolean stock, char g) {\n        this.name = n; this.price = p; this.quantity = q; this.inStock = stock; this.grade = g;\n    }\n    public String getName() { return name; }\n    public double getPrice() { return price; }\n    protected double roundToTwoDecimals(double val) { return Math.round(val * 100.0) / 100.0; }\n    public double getPriceWithTax() { return roundToTwoDecimals(price * 1.12); }\n    public abstract double calculateDeliveryCost();\n}\n\nclass PhysicalProduct extends Product {\n    private double weightKg;\n    private boolean fragile;\n    public PhysicalProduct(String n, double p, int q, boolean stock, char g, double w, boolean frag) {\n        super(n, p, q, stock, g);\n        this.weightKg = w;\n        this.fragile = frag;\n    }\n    @Override\n    public double calculateDeliveryCost() {\n        double base = 15000.0;\n        if (weightKg > 10.0) base += 10000.0;\n        if (fragile) base += 10000.0;\n        return base;\n    }\n}\n\nclass DigitalProduct extends Product {\n    private double fileSizeMb;\n    private String downloadUrl;\n    public DigitalProduct(String n, double p, char g, double size, String url) {\n        super(n, p, 1, true, g);\n        this.fileSizeMb = size;\n        this.downloadUrl = url;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n}\n\nclass GiftCard extends Product implements Payable {\n    private String code;\n    private double balance;\n    public GiftCard(String name, double price, String code) {\n        super(name, price, 1, true, 'A');\n        this.code = code;\n        this.balance = price;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n    @Override\n    public double getPriceWithTax() { return getPrice(); }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > balance) return false;\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" with gift card \" + code + \". Left on the card: \" + balance);\n        return true;\n    }\n}\n\nabstract class Notification {\n    private Customer customer;\n    private String message;\n    public Notification(Customer c, String m) { this.customer = c; this.message = m; }\n    public Customer getCustomer() { return customer; }\n    public String getMessage() { return message; }\n    public abstract void send();\n}\n\nclass MobileNotification extends Notification {\n    private String deviceName;\n    public MobileNotification(Customer c, String m, String dev) { super(c, m); this.deviceName = dev; }\n    @Override\n    public void send() {\n        System.out.println(\"Push notification to \" + getCustomer().getName() + \"'s \" + deviceName + \": \" + getMessage());\n    }\n}\n\nclass WebNotification extends Notification {\n    private String browser;\n    public WebNotification(Customer c, String m, String b) { super(c, m); this.browser = b; }\n    @Override\n    public void send() {\n        System.out.println(\"Browser notification in \" + browser + \" for \" + getCustomer().getName() + \": \" + getMessage());\n    }\n}\n\nclass Customer {\n    private String name;\n    private int loyaltyPoints;\n    private double accountBalance;\n    private ShippingAddress shippingAddress;\n    private BankCard bankCard;\n    private BonusBalance bonusBalance = new BonusBalance(0.0);\n    private Map<String, ShippingAddress> deliveryAddresses = new LinkedHashMap<>();\n    public Customer(String name, int pts, double bal) {\n        this.name = name; this.loyaltyPoints = pts; this.accountBalance = bal;\n    }\n    public String getName() { return name; }\n    public ShippingAddress getShippingAddress() { return shippingAddress;\n    }\n    public void addBankCard(String num, double bal) { this.bankCard = new BankCard(num, name, bal); }\n    public BankCard getBankCard() { return bankCard; }\n    public BonusBalance getBonusBalance() { return bonusBalance; }\n    public void addDeliveryAddress(String label, ShippingAddress a) { deliveryAddresses.put(label, a); }\n    public boolean useDeliveryAddress(String label) {\n        ShippingAddress a = deliveryAddresses.get(label);\n        if (a != null) { this.shippingAddress = a; System.out.println(\"Orders will now be shipped to \\\"\" + label + \"\\\".\"); return true; }\n        return false;\n    }\n    public boolean pay(Payable method, double amount) {\n        boolean paid = method.processPayment(amount);\n        if (paid && method instanceof CashbackEligible eligible) {\n            double cb = eligible.calculateCashback(amount);\n            bonusBalance.addPoints(cb);\n            System.out.println(\"Cashback \" + cb + \" added. Bonus points: \" + bonusBalance.getPoints());\n        }\n        return paid;\n    }\n}\n\nclass OrderItem {\n    private Product product;\n    private int quantity;\n    public OrderItem(Product p, int q) { this.product = p; this.quantity = q; }\n    public Product getProduct() { return product; }\n    public double getLineTotal() { return product.getPriceWithTax() * quantity; }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    public Order(String id, Customer c) { this.orderId = id; this.customer = c; }\n    public void addItem(Product p, int q) { items.add(new OrderItem(p, q)); }\n    public double getTotal() {\n        double sum = 0;\n        for (OrderItem it : items) sum += it.getLineTotal() + it.getProduct().calculateDeliveryCost();\n        return Math.round(sum * 100.0) / 100.0;\n    }\n    public void printSummary() {\n        System.out.println(\"Order \" + orderId + \" for \" + (customer != null ? customer.getName() : \"Guest\") + \" | Total: \" + getTotal());\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"Bobur\", 50, 20000.0);\n        WebNotification wn = new WebNotification(c, \"Chegirma boshlandi!\", \"Chrome\");\n        wn.send();\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 6-hafta yechimi Coursework 2 arxitekturasining markaziy qismidir: Product abstrakt sinfga aylanadi, to'lovlar 'Payable' va 'CashbackEligible' interfeyslariga o'tkaziladi, xabarnomalar esa 'Notification' abstrakt sinfi orqali mobil yoki veb push sifatida yetkaziladi.",
      "cleanCode": "class Customer {\n    public boolean pay(Payable method, double amount) {\n        boolean paid = method.processPayment(amount);\n        if (paid && method instanceof CashbackEligible eligible) {\n            bonusBalance.addPoints(eligible.calculateCashback(amount));\n        }\n        return paid;\n    }\n}",
      "breakdown": [
        "<code>OOPSolution_Week6</code>: to'liq rasmiy yechim klasslari.",
        "<code>Customer.pay()</code>: polimorfik to'lov va avtomatik keshbek."
      ]
    }
  },
  {
    "id": 147,
    "tier": 10,
    "tierName": "10-Bosqich: CW2 6-Hafta To'liq Arxitekturasi: To'lovlar, Keshbek va Xabarnomalar",
    "sector": "136-150: CW2 Week 6 Architecture Milestone",
    "title": {
      "uz": "147. CW2 Arxitekturasi — Customer.pay(Payable, amount) va Avtomatik Keshbek",
      "en": "147. CW2 Architecture — Customer Polymorphic Pay with Automatic Cashback"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSeminar 6 eng zo'r yechimi: 'Customer.pay(Payable method, double amount)'. To'lov muvaffaqiyatli bo'lsa va 'method instanceof CashbackEligible' bo'lsa, 1% keshbek avtomatik ravishda mijozning 'bonusBalance' siga qo'shiladi!\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. WIUT 6-hafta 'OOPSolution_Week6' rasmiy arxitekturasini e'lon qiling.\n2. 'Product' sinfini abstrakt ('calculateDeliveryCost()') qiling va 'PhysicalProduct', 'DigitalProduct' larni yarating.\n3. 'Payable' va 'CashbackEligible' interfeyslarini tuzib, 'BankCard', 'BonusBalance' va 'GiftCard' klasslarini bajaring.\n4. 'Notification' abstrakt sinfi va 'MobileNotification', 'WebNotification' vorislarini qo'shing.\n5. 'Main' da to'liq biznes oqimini tekshiring: 'Customer c = new Customer(\"Kamron\", 0, 500000.0);         c.addBankCard(\"8600123412341234\", 500000.0);         c.pay(c.getBankCard(), 200000.0);         System.out.println(\"Jami bonus ballari: \" + c.getBonusBalance().getPoints());'",
      "en": "📖 Real-World Scenario & Context\nCustomer pay method polymorphically executes payment and credits bonus cashback if eligible.\n\n📋 Required Implementation Steps (1 to 5)\n1. Implement official Week 6 architecture matching OOPSolution_Week6.\n2. Make Product abstract and implement delivery costs in PhysicalProduct and DigitalProduct.\n3. Implement Payable, CashbackEligible, BankCard, BonusBalance, and GiftCard.\n4. Add Notification hierarchy with MobileNotification and WebNotification.\n5. Execute in 'main' and verify: 'Customer c = new Customer(\"Kamron\", 0, 500000.0);         c.addBankCard(\"8600123412341234\", 500000.0);         c.pay(c.getBankCard(), 200000.0);         System.out.println(\"Jami bonus ballari: \" + c.getBonusBalance().getPoints());'"
    },
    "requirements": {
      "classes": [
        "Customer",
        "Main"
      ],
      "methods": [
        "main"
      ]
    },
    "starterCode": "// Week 6 OOPSolution to'liq arxitekturasi\nimport java.util.List;\nimport java.util.ArrayList;\nimport java.util.Map;\nimport java.util.LinkedHashMap;\nimport java.util.Set;\nimport java.util.LinkedHashSet;\n\ninterface Payable {\n    boolean processPayment(double amount);\n}\n\ninterface CashbackEligible {\n    double calculateCashback(double amount);\n}\n\nclass ShippingAddress {\n    private String street;\n    private String city;\n    private String postalCode;\n    public ShippingAddress(String s, String c, String p) {\n        this.street = s; this.city = c; this.postalCode = p;\n    }\n    public String getStreet() { return street; }\n    public String getCity() { return city; }\n    public String getPostalCode() { return postalCode; }\n    @Override\n    public String toString() { return street + \", \" + city; }\n}\n\nclass BankCard implements Payable, CashbackEligible {\n    private String cardNumber;\n    private String holderName;\n    private double balance;\n    public BankCard(String num, String name, double bal) {\n        this.cardNumber = num; this.holderName = name; this.balance = bal;\n    }\n    public String getMaskedNumber() {\n        return \"**** \" + cardNumber.substring(cardNumber.length() - 4);\n    }\n    public double getBalance() { return Math.round(balance * 100.0) / 100.0; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0) return false;\n        if (amount > balance) {\n            System.out.println(\"Payment declined: not enough money on card \" + getMaskedNumber() + \".\");\n            return false;\n        }\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" by bank card \" + getMaskedNumber() + \". Money left on the card: \" + getBalance());\n        return true;\n    }\n    @Override\n    public double calculateCashback(double amount) {\n        return Math.round(amount * 0.01 * 100.0) / 100.0;\n    }\n}\n\nclass BonusBalance implements Payable {\n    private double points;\n    public BonusBalance(double pts) { this.points = pts; }\n    public double getPoints() { return Math.round(points * 100.0) / 100.0; }\n    public void addPoints(double amount) { if (amount > 0) points += amount; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > points) return false;\n        points -= amount;\n        System.out.println(\"Paid \" + amount + \" with bonus points. Points left: \" + getPoints());\n        return true;\n    }\n}\n\nabstract class Product {\n    private String name;\n    private double price;\n    private int quantity;\n    public boolean inStock;\n    public char grade;\n    public Product(String n, double p, int q, boolean stock, char g) {\n        this.name = n; this.price = p; this.quantity = q; this.inStock = stock; this.grade = g;\n    }\n    public String getName() { return name; }\n    public double getPrice() { return price; }\n    protected double roundToTwoDecimals(double val) { return Math.round(val * 100.0) / 100.0; }\n    public double getPriceWithTax() { return roundToTwoDecimals(price * 1.12); }\n    public abstract double calculateDeliveryCost();\n}\n\nclass PhysicalProduct extends Product {\n    private double weightKg;\n    private boolean fragile;\n    public PhysicalProduct(String n, double p, int q, boolean stock, char g, double w, boolean frag) {\n        super(n, p, q, stock, g);\n        this.weightKg = w;\n        this.fragile = frag;\n    }\n    @Override\n    public double calculateDeliveryCost() {\n        double base = 15000.0;\n        if (weightKg > 10.0) base += 10000.0;\n        if (fragile) base += 10000.0;\n        return base;\n    }\n}\n\nclass DigitalProduct extends Product {\n    private double fileSizeMb;\n    private String downloadUrl;\n    public DigitalProduct(String n, double p, char g, double size, String url) {\n        super(n, p, 1, true, g);\n        this.fileSizeMb = size;\n        this.downloadUrl = url;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n}\n\nclass GiftCard extends Product implements Payable {\n    private String code;\n    private double balance;\n    public GiftCard(String name, double price, String code) {\n        super(name, price, 1, true, 'A');\n        this.code = code;\n        this.balance = price;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n    @Override\n    public double getPriceWithTax() { return getPrice(); }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > balance) return false;\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" with gift card \" + code + \". Left on the card: \" + balance);\n        return true;\n    }\n}\n\nabstract class Notification {\n    private Customer customer;\n    private String message;\n    public Notification(Customer c, String m) { this.customer = c; this.message = m; }\n    public Customer getCustomer() { return customer; }\n    public String getMessage() { return message; }\n    public abstract void send();\n}\n\nclass MobileNotification extends Notification {\n    private String deviceName;\n    public MobileNotification(Customer c, String m, String dev) { super(c, m); this.deviceName = dev; }\n    @Override\n    public void send() {\n        System.out.println(\"Push notification to \" + getCustomer().getName() + \"'s \" + deviceName + \": \" + getMessage());\n    }\n}\n\nclass WebNotification extends Notification {\n    private String browser;\n    public WebNotification(Customer c, String m, String b) { super(c, m); this.browser = b; }\n    @Override\n    public void send() {\n        System.out.println(\"Browser notification in \" + browser + \" for \" + getCustomer().getName() + \": \" + getMessage());\n    }\n}\n\nclass Customer {\n    private String name;\n    private int loyaltyPoints;\n    private double accountBalance;\n    private ShippingAddress shippingAddress;\n    private BankCard bankCard;\n    private BonusBalance bonusBalance = new BonusBalance(0.0);\n    private Map<String, ShippingAddress> deliveryAddresses = new LinkedHashMap<>();\n    public Customer(String name, int pts, double bal) {\n        this.name = name; this.loyaltyPoints = pts; this.accountBalance = bal;\n    }\n    public String getName() { return name; }\n    public ShippingAddress getShippingAddress() { return shippingAddress;\n    }\n    public void addBankCard(String num, double bal) { this.bankCard = new BankCard(num, name, bal); }\n    public BankCard getBankCard() { return bankCard; }\n    public BonusBalance getBonusBalance() { return bonusBalance; }\n    public void addDeliveryAddress(String label, ShippingAddress a) { deliveryAddresses.put(label, a); }\n    public boolean useDeliveryAddress(String label) {\n        ShippingAddress a = deliveryAddresses.get(label);\n        if (a != null) { this.shippingAddress = a; System.out.println(\"Orders will now be shipped to \\\"\" + label + \"\\\".\"); return true; }\n        return false;\n    }\n    public boolean pay(Payable method, double amount) {\n        boolean paid = method.processPayment(amount);\n        if (paid && method instanceof CashbackEligible eligible) {\n            double cb = eligible.calculateCashback(amount);\n            bonusBalance.addPoints(cb);\n            System.out.println(\"Cashback \" + cb + \" added. Bonus points: \" + bonusBalance.getPoints());\n        }\n        return paid;\n    }\n}\n\nclass OrderItem {\n    private Product product;\n    private int quantity;\n    public OrderItem(Product p, int q) { this.product = p; this.quantity = q; }\n    public Product getProduct() { return product; }\n    public double getLineTotal() { return product.getPriceWithTax() * quantity; }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    public Order(String id, Customer c) { this.orderId = id; this.customer = c; }\n    public void addItem(Product p, int q) { items.add(new OrderItem(p, q)); }\n    public double getTotal() {\n        double sum = 0;\n        for (OrderItem it : items) sum += it.getLineTotal() + it.getProduct().calculateDeliveryCost();\n        return Math.round(sum * 100.0) / 100.0;\n    }\n    public void printSummary() {\n        System.out.println(\"Order \" + orderId + \" for \" + (customer != null ? customer.getName() : \"Guest\") + \" | Total: \" + getTotal());\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"Kamron\", 0, 500000.0);\n        c.addBankCard(\"8600123412341234\", 500000.0);\n        c.pay(c.getBankCard(), 200000.0);\n        System.out.println(\"Jami bonus ballari: \" + c.getBonusBalance().getPoints());\n    }\n}",
    "solution": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Map;\nimport java.util.LinkedHashMap;\nimport java.util.Set;\nimport java.util.LinkedHashSet;\n\ninterface Payable {\n    boolean processPayment(double amount);\n}\n\ninterface CashbackEligible {\n    double calculateCashback(double amount);\n}\n\nclass ShippingAddress {\n    private String street;\n    private String city;\n    private String postalCode;\n    public ShippingAddress(String s, String c, String p) {\n        this.street = s; this.city = c; this.postalCode = p;\n    }\n    public String getStreet() { return street; }\n    public String getCity() { return city; }\n    public String getPostalCode() { return postalCode; }\n    @Override\n    public String toString() { return street + \", \" + city; }\n}\n\nclass BankCard implements Payable, CashbackEligible {\n    private String cardNumber;\n    private String holderName;\n    private double balance;\n    public BankCard(String num, String name, double bal) {\n        this.cardNumber = num; this.holderName = name; this.balance = bal;\n    }\n    public String getMaskedNumber() {\n        return \"**** \" + cardNumber.substring(cardNumber.length() - 4);\n    }\n    public double getBalance() { return Math.round(balance * 100.0) / 100.0; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0) return false;\n        if (amount > balance) {\n            System.out.println(\"Payment declined: not enough money on card \" + getMaskedNumber() + \".\");\n            return false;\n        }\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" by bank card \" + getMaskedNumber() + \". Money left on the card: \" + getBalance());\n        return true;\n    }\n    @Override\n    public double calculateCashback(double amount) {\n        return Math.round(amount * 0.01 * 100.0) / 100.0;\n    }\n}\n\nclass BonusBalance implements Payable {\n    private double points;\n    public BonusBalance(double pts) { this.points = pts; }\n    public double getPoints() { return Math.round(points * 100.0) / 100.0; }\n    public void addPoints(double amount) { if (amount > 0) points += amount; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > points) return false;\n        points -= amount;\n        System.out.println(\"Paid \" + amount + \" with bonus points. Points left: \" + getPoints());\n        return true;\n    }\n}\n\nabstract class Product {\n    private String name;\n    private double price;\n    private int quantity;\n    public boolean inStock;\n    public char grade;\n    public Product(String n, double p, int q, boolean stock, char g) {\n        this.name = n; this.price = p; this.quantity = q; this.inStock = stock; this.grade = g;\n    }\n    public String getName() { return name; }\n    public double getPrice() { return price; }\n    protected double roundToTwoDecimals(double val) { return Math.round(val * 100.0) / 100.0; }\n    public double getPriceWithTax() { return roundToTwoDecimals(price * 1.12); }\n    public abstract double calculateDeliveryCost();\n}\n\nclass PhysicalProduct extends Product {\n    private double weightKg;\n    private boolean fragile;\n    public PhysicalProduct(String n, double p, int q, boolean stock, char g, double w, boolean frag) {\n        super(n, p, q, stock, g);\n        this.weightKg = w;\n        this.fragile = frag;\n    }\n    @Override\n    public double calculateDeliveryCost() {\n        double base = 15000.0;\n        if (weightKg > 10.0) base += 10000.0;\n        if (fragile) base += 10000.0;\n        return base;\n    }\n}\n\nclass DigitalProduct extends Product {\n    private double fileSizeMb;\n    private String downloadUrl;\n    public DigitalProduct(String n, double p, char g, double size, String url) {\n        super(n, p, 1, true, g);\n        this.fileSizeMb = size;\n        this.downloadUrl = url;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n}\n\nclass GiftCard extends Product implements Payable {\n    private String code;\n    private double balance;\n    public GiftCard(String name, double price, String code) {\n        super(name, price, 1, true, 'A');\n        this.code = code;\n        this.balance = price;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n    @Override\n    public double getPriceWithTax() { return getPrice(); }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > balance) return false;\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" with gift card \" + code + \". Left on the card: \" + balance);\n        return true;\n    }\n}\n\nabstract class Notification {\n    private Customer customer;\n    private String message;\n    public Notification(Customer c, String m) { this.customer = c; this.message = m; }\n    public Customer getCustomer() { return customer; }\n    public String getMessage() { return message; }\n    public abstract void send();\n}\n\nclass MobileNotification extends Notification {\n    private String deviceName;\n    public MobileNotification(Customer c, String m, String dev) { super(c, m); this.deviceName = dev; }\n    @Override\n    public void send() {\n        System.out.println(\"Push notification to \" + getCustomer().getName() + \"'s \" + deviceName + \": \" + getMessage());\n    }\n}\n\nclass WebNotification extends Notification {\n    private String browser;\n    public WebNotification(Customer c, String m, String b) { super(c, m); this.browser = b; }\n    @Override\n    public void send() {\n        System.out.println(\"Browser notification in \" + browser + \" for \" + getCustomer().getName() + \": \" + getMessage());\n    }\n}\n\nclass Customer {\n    private String name;\n    private int loyaltyPoints;\n    private double accountBalance;\n    private ShippingAddress shippingAddress;\n    private BankCard bankCard;\n    private BonusBalance bonusBalance = new BonusBalance(0.0);\n    private Map<String, ShippingAddress> deliveryAddresses = new LinkedHashMap<>();\n    public Customer(String name, int pts, double bal) {\n        this.name = name; this.loyaltyPoints = pts; this.accountBalance = bal;\n    }\n    public String getName() { return name; }\n    public ShippingAddress getShippingAddress() { return shippingAddress;\n    }\n    public void addBankCard(String num, double bal) { this.bankCard = new BankCard(num, name, bal); }\n    public BankCard getBankCard() { return bankCard; }\n    public BonusBalance getBonusBalance() { return bonusBalance; }\n    public void addDeliveryAddress(String label, ShippingAddress a) { deliveryAddresses.put(label, a); }\n    public boolean useDeliveryAddress(String label) {\n        ShippingAddress a = deliveryAddresses.get(label);\n        if (a != null) { this.shippingAddress = a; System.out.println(\"Orders will now be shipped to \\\"\" + label + \"\\\".\"); return true; }\n        return false;\n    }\n    public boolean pay(Payable method, double amount) {\n        boolean paid = method.processPayment(amount);\n        if (paid && method instanceof CashbackEligible eligible) {\n            double cb = eligible.calculateCashback(amount);\n            bonusBalance.addPoints(cb);\n            System.out.println(\"Cashback \" + cb + \" added. Bonus points: \" + bonusBalance.getPoints());\n        }\n        return paid;\n    }\n}\n\nclass OrderItem {\n    private Product product;\n    private int quantity;\n    public OrderItem(Product p, int q) { this.product = p; this.quantity = q; }\n    public Product getProduct() { return product; }\n    public double getLineTotal() { return product.getPriceWithTax() * quantity; }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    public Order(String id, Customer c) { this.orderId = id; this.customer = c; }\n    public void addItem(Product p, int q) { items.add(new OrderItem(p, q)); }\n    public double getTotal() {\n        double sum = 0;\n        for (OrderItem it : items) sum += it.getLineTotal() + it.getProduct().calculateDeliveryCost();\n        return Math.round(sum * 100.0) / 100.0;\n    }\n    public void printSummary() {\n        System.out.println(\"Order \" + orderId + \" for \" + (customer != null ? customer.getName() : \"Guest\") + \" | Total: \" + getTotal());\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"Kamron\", 0, 500000.0);\n        c.addBankCard(\"8600123412341234\", 500000.0);\n        c.pay(c.getBankCard(), 200000.0);\n        System.out.println(\"Jami bonus ballari: \" + c.getBonusBalance().getPoints());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 6-hafta yechimi Coursework 2 arxitekturasining markaziy qismidir: Product abstrakt sinfga aylanadi, to'lovlar 'Payable' va 'CashbackEligible' interfeyslariga o'tkaziladi, xabarnomalar esa 'Notification' abstrakt sinfi orqali mobil yoki veb push sifatida yetkaziladi.",
      "cleanCode": "class Customer {\n    public boolean pay(Payable method, double amount) {\n        boolean paid = method.processPayment(amount);\n        if (paid && method instanceof CashbackEligible eligible) {\n            bonusBalance.addPoints(eligible.calculateCashback(amount));\n        }\n        return paid;\n    }\n}",
      "breakdown": [
        "<code>OOPSolution_Week6</code>: to'liq rasmiy yechim klasslari.",
        "<code>Customer.pay()</code>: polimorfik to'lov va avtomatik keshbek."
      ]
    }
  },
  {
    "id": 148,
    "tier": 10,
    "tierName": "10-Bosqich: CW2 6-Hafta To'liq Arxitekturasi: To'lovlar, Keshbek va Xabarnomalar",
    "sector": "136-150: CW2 Week 6 Architecture Milestone",
    "title": {
      "uz": "148. CW2 Arxitekturasi — Customer.deliveryAddresses (Map<String, ShippingAddress>)",
      "en": "148. CW2 Architecture — Multiple Delivery Addresses Managed by Customer"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\n6-hafta yechimida mijoz bir nechta yetkazish manzillarini saqlaydi: 'home', 'office'. 'useDeliveryAddress(\"office\")' qilinganda asosiy yetkazish manzili yangilanadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. WIUT 6-hafta 'OOPSolution_Week6' rasmiy arxitekturasini e'lon qiling.\n2. 'Product' sinfini abstrakt ('calculateDeliveryCost()') qiling va 'PhysicalProduct', 'DigitalProduct' larni yarating.\n3. 'Payable' va 'CashbackEligible' interfeyslarini tuzib, 'BankCard', 'BonusBalance' va 'GiftCard' klasslarini bajaring.\n4. 'Notification' abstrakt sinfi va 'MobileNotification', 'WebNotification' vorislarini qo'shing.\n5. 'Main' da to'liq biznes oqimini tekshiring: 'Customer c = new Customer(\"Zarina\", 50, 100000.0);         c.addDeliveryAddress(\"home\", new ShippingAddress(\"Amir Temur 5\", \"Toshkent\", \"100000\"));         c.addDeliveryAddress(\"office\", new ShippingAddress(\"Navoiy 10\", \"Toshkent\", \"100011\"));         c.useDeliveryAddress(\"office\");         System.out.println(\"Hozirgi yetkazish ko'chasi: \" + c.getShippingAddress().getStreet());'",
      "en": "📖 Real-World Scenario & Context\nCustomer manages delivery addresses via LinkedHashMap switching active shipping destination.\n\n📋 Required Implementation Steps (1 to 5)\n1. Implement official Week 6 architecture matching OOPSolution_Week6.\n2. Make Product abstract and implement delivery costs in PhysicalProduct and DigitalProduct.\n3. Implement Payable, CashbackEligible, BankCard, BonusBalance, and GiftCard.\n4. Add Notification hierarchy with MobileNotification and WebNotification.\n5. Execute in 'main' and verify: 'Customer c = new Customer(\"Zarina\", 50, 100000.0);         c.addDeliveryAddress(\"home\", new ShippingAddress(\"Amir Temur 5\", \"Toshkent\", \"100000\"));         c.addDeliveryAddress(\"office\", new ShippingAddress(\"Navoiy 10\", \"Toshkent\", \"100011\"));         c.useDeliveryAddress(\"office\");         System.out.println(\"Hozirgi yetkazish ko'chasi: \" + c.getShippingAddress().getStreet());'"
    },
    "requirements": {
      "classes": [
        "Customer",
        "Main"
      ],
      "methods": [
        "main"
      ]
    },
    "starterCode": "// Week 6 OOPSolution to'liq arxitekturasi\nimport java.util.List;\nimport java.util.ArrayList;\nimport java.util.Map;\nimport java.util.LinkedHashMap;\nimport java.util.Set;\nimport java.util.LinkedHashSet;\n\ninterface Payable {\n    boolean processPayment(double amount);\n}\n\ninterface CashbackEligible {\n    double calculateCashback(double amount);\n}\n\nclass ShippingAddress {\n    private String street;\n    private String city;\n    private String postalCode;\n    public ShippingAddress(String s, String c, String p) {\n        this.street = s; this.city = c; this.postalCode = p;\n    }\n    public String getStreet() { return street; }\n    public String getCity() { return city; }\n    public String getPostalCode() { return postalCode; }\n    @Override\n    public String toString() { return street + \", \" + city; }\n}\n\nclass BankCard implements Payable, CashbackEligible {\n    private String cardNumber;\n    private String holderName;\n    private double balance;\n    public BankCard(String num, String name, double bal) {\n        this.cardNumber = num; this.holderName = name; this.balance = bal;\n    }\n    public String getMaskedNumber() {\n        return \"**** \" + cardNumber.substring(cardNumber.length() - 4);\n    }\n    public double getBalance() { return Math.round(balance * 100.0) / 100.0; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0) return false;\n        if (amount > balance) {\n            System.out.println(\"Payment declined: not enough money on card \" + getMaskedNumber() + \".\");\n            return false;\n        }\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" by bank card \" + getMaskedNumber() + \". Money left on the card: \" + getBalance());\n        return true;\n    }\n    @Override\n    public double calculateCashback(double amount) {\n        return Math.round(amount * 0.01 * 100.0) / 100.0;\n    }\n}\n\nclass BonusBalance implements Payable {\n    private double points;\n    public BonusBalance(double pts) { this.points = pts; }\n    public double getPoints() { return Math.round(points * 100.0) / 100.0; }\n    public void addPoints(double amount) { if (amount > 0) points += amount; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > points) return false;\n        points -= amount;\n        System.out.println(\"Paid \" + amount + \" with bonus points. Points left: \" + getPoints());\n        return true;\n    }\n}\n\nabstract class Product {\n    private String name;\n    private double price;\n    private int quantity;\n    public boolean inStock;\n    public char grade;\n    public Product(String n, double p, int q, boolean stock, char g) {\n        this.name = n; this.price = p; this.quantity = q; this.inStock = stock; this.grade = g;\n    }\n    public String getName() { return name; }\n    public double getPrice() { return price; }\n    protected double roundToTwoDecimals(double val) { return Math.round(val * 100.0) / 100.0; }\n    public double getPriceWithTax() { return roundToTwoDecimals(price * 1.12); }\n    public abstract double calculateDeliveryCost();\n}\n\nclass PhysicalProduct extends Product {\n    private double weightKg;\n    private boolean fragile;\n    public PhysicalProduct(String n, double p, int q, boolean stock, char g, double w, boolean frag) {\n        super(n, p, q, stock, g);\n        this.weightKg = w;\n        this.fragile = frag;\n    }\n    @Override\n    public double calculateDeliveryCost() {\n        double base = 15000.0;\n        if (weightKg > 10.0) base += 10000.0;\n        if (fragile) base += 10000.0;\n        return base;\n    }\n}\n\nclass DigitalProduct extends Product {\n    private double fileSizeMb;\n    private String downloadUrl;\n    public DigitalProduct(String n, double p, char g, double size, String url) {\n        super(n, p, 1, true, g);\n        this.fileSizeMb = size;\n        this.downloadUrl = url;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n}\n\nclass GiftCard extends Product implements Payable {\n    private String code;\n    private double balance;\n    public GiftCard(String name, double price, String code) {\n        super(name, price, 1, true, 'A');\n        this.code = code;\n        this.balance = price;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n    @Override\n    public double getPriceWithTax() { return getPrice(); }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > balance) return false;\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" with gift card \" + code + \". Left on the card: \" + balance);\n        return true;\n    }\n}\n\nabstract class Notification {\n    private Customer customer;\n    private String message;\n    public Notification(Customer c, String m) { this.customer = c; this.message = m; }\n    public Customer getCustomer() { return customer; }\n    public String getMessage() { return message; }\n    public abstract void send();\n}\n\nclass MobileNotification extends Notification {\n    private String deviceName;\n    public MobileNotification(Customer c, String m, String dev) { super(c, m); this.deviceName = dev; }\n    @Override\n    public void send() {\n        System.out.println(\"Push notification to \" + getCustomer().getName() + \"'s \" + deviceName + \": \" + getMessage());\n    }\n}\n\nclass WebNotification extends Notification {\n    private String browser;\n    public WebNotification(Customer c, String m, String b) { super(c, m); this.browser = b; }\n    @Override\n    public void send() {\n        System.out.println(\"Browser notification in \" + browser + \" for \" + getCustomer().getName() + \": \" + getMessage());\n    }\n}\n\nclass Customer {\n    private String name;\n    private int loyaltyPoints;\n    private double accountBalance;\n    private ShippingAddress shippingAddress;\n    private BankCard bankCard;\n    private BonusBalance bonusBalance = new BonusBalance(0.0);\n    private Map<String, ShippingAddress> deliveryAddresses = new LinkedHashMap<>();\n    public Customer(String name, int pts, double bal) {\n        this.name = name; this.loyaltyPoints = pts; this.accountBalance = bal;\n    }\n    public String getName() { return name; }\n    public ShippingAddress getShippingAddress() { return shippingAddress;\n    }\n    public void addBankCard(String num, double bal) { this.bankCard = new BankCard(num, name, bal); }\n    public BankCard getBankCard() { return bankCard; }\n    public BonusBalance getBonusBalance() { return bonusBalance; }\n    public void addDeliveryAddress(String label, ShippingAddress a) { deliveryAddresses.put(label, a); }\n    public boolean useDeliveryAddress(String label) {\n        ShippingAddress a = deliveryAddresses.get(label);\n        if (a != null) { this.shippingAddress = a; System.out.println(\"Orders will now be shipped to \\\"\" + label + \"\\\".\"); return true; }\n        return false;\n    }\n    public boolean pay(Payable method, double amount) {\n        boolean paid = method.processPayment(amount);\n        if (paid && method instanceof CashbackEligible eligible) {\n            double cb = eligible.calculateCashback(amount);\n            bonusBalance.addPoints(cb);\n            System.out.println(\"Cashback \" + cb + \" added. Bonus points: \" + bonusBalance.getPoints());\n        }\n        return paid;\n    }\n}\n\nclass OrderItem {\n    private Product product;\n    private int quantity;\n    public OrderItem(Product p, int q) { this.product = p; this.quantity = q; }\n    public Product getProduct() { return product; }\n    public double getLineTotal() { return product.getPriceWithTax() * quantity; }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    public Order(String id, Customer c) { this.orderId = id; this.customer = c; }\n    public void addItem(Product p, int q) { items.add(new OrderItem(p, q)); }\n    public double getTotal() {\n        double sum = 0;\n        for (OrderItem it : items) sum += it.getLineTotal() + it.getProduct().calculateDeliveryCost();\n        return Math.round(sum * 100.0) / 100.0;\n    }\n    public void printSummary() {\n        System.out.println(\"Order \" + orderId + \" for \" + (customer != null ? customer.getName() : \"Guest\") + \" | Total: \" + getTotal());\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"Zarina\", 50, 100000.0);\n        c.addDeliveryAddress(\"home\", new ShippingAddress(\"Amir Temur 5\", \"Toshkent\", \"100000\"));\n        c.addDeliveryAddress(\"office\", new ShippingAddress(\"Navoiy 10\", \"Toshkent\", \"100011\"));\n        c.useDeliveryAddress(\"office\");\n        System.out.println(\"Hozirgi yetkazish ko'chasi: \" + c.getShippingAddress().getStreet());\n    }\n}",
    "solution": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Map;\nimport java.util.LinkedHashMap;\nimport java.util.Set;\nimport java.util.LinkedHashSet;\n\ninterface Payable {\n    boolean processPayment(double amount);\n}\n\ninterface CashbackEligible {\n    double calculateCashback(double amount);\n}\n\nclass ShippingAddress {\n    private String street;\n    private String city;\n    private String postalCode;\n    public ShippingAddress(String s, String c, String p) {\n        this.street = s; this.city = c; this.postalCode = p;\n    }\n    public String getStreet() { return street; }\n    public String getCity() { return city; }\n    public String getPostalCode() { return postalCode; }\n    @Override\n    public String toString() { return street + \", \" + city; }\n}\n\nclass BankCard implements Payable, CashbackEligible {\n    private String cardNumber;\n    private String holderName;\n    private double balance;\n    public BankCard(String num, String name, double bal) {\n        this.cardNumber = num; this.holderName = name; this.balance = bal;\n    }\n    public String getMaskedNumber() {\n        return \"**** \" + cardNumber.substring(cardNumber.length() - 4);\n    }\n    public double getBalance() { return Math.round(balance * 100.0) / 100.0; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0) return false;\n        if (amount > balance) {\n            System.out.println(\"Payment declined: not enough money on card \" + getMaskedNumber() + \".\");\n            return false;\n        }\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" by bank card \" + getMaskedNumber() + \". Money left on the card: \" + getBalance());\n        return true;\n    }\n    @Override\n    public double calculateCashback(double amount) {\n        return Math.round(amount * 0.01 * 100.0) / 100.0;\n    }\n}\n\nclass BonusBalance implements Payable {\n    private double points;\n    public BonusBalance(double pts) { this.points = pts; }\n    public double getPoints() { return Math.round(points * 100.0) / 100.0; }\n    public void addPoints(double amount) { if (amount > 0) points += amount; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > points) return false;\n        points -= amount;\n        System.out.println(\"Paid \" + amount + \" with bonus points. Points left: \" + getPoints());\n        return true;\n    }\n}\n\nabstract class Product {\n    private String name;\n    private double price;\n    private int quantity;\n    public boolean inStock;\n    public char grade;\n    public Product(String n, double p, int q, boolean stock, char g) {\n        this.name = n; this.price = p; this.quantity = q; this.inStock = stock; this.grade = g;\n    }\n    public String getName() { return name; }\n    public double getPrice() { return price; }\n    protected double roundToTwoDecimals(double val) { return Math.round(val * 100.0) / 100.0; }\n    public double getPriceWithTax() { return roundToTwoDecimals(price * 1.12); }\n    public abstract double calculateDeliveryCost();\n}\n\nclass PhysicalProduct extends Product {\n    private double weightKg;\n    private boolean fragile;\n    public PhysicalProduct(String n, double p, int q, boolean stock, char g, double w, boolean frag) {\n        super(n, p, q, stock, g);\n        this.weightKg = w;\n        this.fragile = frag;\n    }\n    @Override\n    public double calculateDeliveryCost() {\n        double base = 15000.0;\n        if (weightKg > 10.0) base += 10000.0;\n        if (fragile) base += 10000.0;\n        return base;\n    }\n}\n\nclass DigitalProduct extends Product {\n    private double fileSizeMb;\n    private String downloadUrl;\n    public DigitalProduct(String n, double p, char g, double size, String url) {\n        super(n, p, 1, true, g);\n        this.fileSizeMb = size;\n        this.downloadUrl = url;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n}\n\nclass GiftCard extends Product implements Payable {\n    private String code;\n    private double balance;\n    public GiftCard(String name, double price, String code) {\n        super(name, price, 1, true, 'A');\n        this.code = code;\n        this.balance = price;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n    @Override\n    public double getPriceWithTax() { return getPrice(); }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > balance) return false;\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" with gift card \" + code + \". Left on the card: \" + balance);\n        return true;\n    }\n}\n\nabstract class Notification {\n    private Customer customer;\n    private String message;\n    public Notification(Customer c, String m) { this.customer = c; this.message = m; }\n    public Customer getCustomer() { return customer; }\n    public String getMessage() { return message; }\n    public abstract void send();\n}\n\nclass MobileNotification extends Notification {\n    private String deviceName;\n    public MobileNotification(Customer c, String m, String dev) { super(c, m); this.deviceName = dev; }\n    @Override\n    public void send() {\n        System.out.println(\"Push notification to \" + getCustomer().getName() + \"'s \" + deviceName + \": \" + getMessage());\n    }\n}\n\nclass WebNotification extends Notification {\n    private String browser;\n    public WebNotification(Customer c, String m, String b) { super(c, m); this.browser = b; }\n    @Override\n    public void send() {\n        System.out.println(\"Browser notification in \" + browser + \" for \" + getCustomer().getName() + \": \" + getMessage());\n    }\n}\n\nclass Customer {\n    private String name;\n    private int loyaltyPoints;\n    private double accountBalance;\n    private ShippingAddress shippingAddress;\n    private BankCard bankCard;\n    private BonusBalance bonusBalance = new BonusBalance(0.0);\n    private Map<String, ShippingAddress> deliveryAddresses = new LinkedHashMap<>();\n    public Customer(String name, int pts, double bal) {\n        this.name = name; this.loyaltyPoints = pts; this.accountBalance = bal;\n    }\n    public String getName() { return name; }\n    public ShippingAddress getShippingAddress() { return shippingAddress;\n    }\n    public void addBankCard(String num, double bal) { this.bankCard = new BankCard(num, name, bal); }\n    public BankCard getBankCard() { return bankCard; }\n    public BonusBalance getBonusBalance() { return bonusBalance; }\n    public void addDeliveryAddress(String label, ShippingAddress a) { deliveryAddresses.put(label, a); }\n    public boolean useDeliveryAddress(String label) {\n        ShippingAddress a = deliveryAddresses.get(label);\n        if (a != null) { this.shippingAddress = a; System.out.println(\"Orders will now be shipped to \\\"\" + label + \"\\\".\"); return true; }\n        return false;\n    }\n    public boolean pay(Payable method, double amount) {\n        boolean paid = method.processPayment(amount);\n        if (paid && method instanceof CashbackEligible eligible) {\n            double cb = eligible.calculateCashback(amount);\n            bonusBalance.addPoints(cb);\n            System.out.println(\"Cashback \" + cb + \" added. Bonus points: \" + bonusBalance.getPoints());\n        }\n        return paid;\n    }\n}\n\nclass OrderItem {\n    private Product product;\n    private int quantity;\n    public OrderItem(Product p, int q) { this.product = p; this.quantity = q; }\n    public Product getProduct() { return product; }\n    public double getLineTotal() { return product.getPriceWithTax() * quantity; }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    public Order(String id, Customer c) { this.orderId = id; this.customer = c; }\n    public void addItem(Product p, int q) { items.add(new OrderItem(p, q)); }\n    public double getTotal() {\n        double sum = 0;\n        for (OrderItem it : items) sum += it.getLineTotal() + it.getProduct().calculateDeliveryCost();\n        return Math.round(sum * 100.0) / 100.0;\n    }\n    public void printSummary() {\n        System.out.println(\"Order \" + orderId + \" for \" + (customer != null ? customer.getName() : \"Guest\") + \" | Total: \" + getTotal());\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"Zarina\", 50, 100000.0);\n        c.addDeliveryAddress(\"home\", new ShippingAddress(\"Amir Temur 5\", \"Toshkent\", \"100000\"));\n        c.addDeliveryAddress(\"office\", new ShippingAddress(\"Navoiy 10\", \"Toshkent\", \"100011\"));\n        c.useDeliveryAddress(\"office\");\n        System.out.println(\"Hozirgi yetkazish ko'chasi: \" + c.getShippingAddress().getStreet());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 6-hafta yechimi Coursework 2 arxitekturasining markaziy qismidir: Product abstrakt sinfga aylanadi, to'lovlar 'Payable' va 'CashbackEligible' interfeyslariga o'tkaziladi, xabarnomalar esa 'Notification' abstrakt sinfi orqali mobil yoki veb push sifatida yetkaziladi.",
      "cleanCode": "class Customer {\n    public boolean pay(Payable method, double amount) {\n        boolean paid = method.processPayment(amount);\n        if (paid && method instanceof CashbackEligible eligible) {\n            bonusBalance.addPoints(eligible.calculateCashback(amount));\n        }\n        return paid;\n    }\n}",
      "breakdown": [
        "<code>OOPSolution_Week6</code>: to'liq rasmiy yechim klasslari.",
        "<code>Customer.pay()</code>: polimorfik to'lov va avtomatik keshbek."
      ]
    }
  },
  {
    "id": 149,
    "tier": 10,
    "tierName": "10-Bosqich: CW2 6-Hafta To'liq Arxitekturasi: To'lovlar, Keshbek va Xabarnomalar",
    "sector": "136-150: CW2 Week 6 Architecture Milestone",
    "title": {
      "uz": "149. CW2 Arxitekturasi — Order va Turli Payable Usullari Bilan To'lash",
      "en": "149. CW2 Architecture — Order Checkout with Polymorphic Payment Methods"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nBuyurtma summasini BankCard, BonusBalance yoki GiftCard orqali to'lash mumkin. Order va turli to'lov usullarining integratsiyasini sinab ko'ring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. WIUT 6-hafta 'OOPSolution_Week6' rasmiy arxitekturasini e'lon qiling.\n2. 'Product' sinfini abstrakt ('calculateDeliveryCost()') qiling va 'PhysicalProduct', 'DigitalProduct' larni yarating.\n3. 'Payable' va 'CashbackEligible' interfeyslarini tuzib, 'BankCard', 'BonusBalance' va 'GiftCard' klasslarini bajaring.\n4. 'Notification' abstrakt sinfi va 'MobileNotification', 'WebNotification' vorislarini qo'shing.\n5. 'Main' da to'liq biznes oqimini tekshiring: 'Customer c = new Customer(\"Dilshod\", 0, 500000.0);         Order ord = new Order(\"ORD-101\", c);         ord.addItem(new PhysicalProduct(\"Sichqoncha\", 100000.0, 1, true, 'A', 0.2, false), 1);         ord.printSummary();'",
      "en": "📖 Real-World Scenario & Context\nDemonstrate order placement and checkout settled via polymorphic Payable mechanisms.\n\n📋 Required Implementation Steps (1 to 5)\n1. Implement official Week 6 architecture matching OOPSolution_Week6.\n2. Make Product abstract and implement delivery costs in PhysicalProduct and DigitalProduct.\n3. Implement Payable, CashbackEligible, BankCard, BonusBalance, and GiftCard.\n4. Add Notification hierarchy with MobileNotification and WebNotification.\n5. Execute in 'main' and verify: 'Customer c = new Customer(\"Dilshod\", 0, 500000.0);         Order ord = new Order(\"ORD-101\", c);         ord.addItem(new PhysicalProduct(\"Sichqoncha\", 100000.0, 1, true, 'A', 0.2, false), 1);         ord.printSummary();'"
    },
    "requirements": {
      "classes": [
        "Customer",
        "Main"
      ],
      "methods": [
        "main"
      ]
    },
    "starterCode": "// Week 6 OOPSolution to'liq arxitekturasi\nimport java.util.List;\nimport java.util.ArrayList;\nimport java.util.Map;\nimport java.util.LinkedHashMap;\nimport java.util.Set;\nimport java.util.LinkedHashSet;\n\ninterface Payable {\n    boolean processPayment(double amount);\n}\n\ninterface CashbackEligible {\n    double calculateCashback(double amount);\n}\n\nclass ShippingAddress {\n    private String street;\n    private String city;\n    private String postalCode;\n    public ShippingAddress(String s, String c, String p) {\n        this.street = s; this.city = c; this.postalCode = p;\n    }\n    public String getStreet() { return street; }\n    public String getCity() { return city; }\n    public String getPostalCode() { return postalCode; }\n    @Override\n    public String toString() { return street + \", \" + city; }\n}\n\nclass BankCard implements Payable, CashbackEligible {\n    private String cardNumber;\n    private String holderName;\n    private double balance;\n    public BankCard(String num, String name, double bal) {\n        this.cardNumber = num; this.holderName = name; this.balance = bal;\n    }\n    public String getMaskedNumber() {\n        return \"**** \" + cardNumber.substring(cardNumber.length() - 4);\n    }\n    public double getBalance() { return Math.round(balance * 100.0) / 100.0; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0) return false;\n        if (amount > balance) {\n            System.out.println(\"Payment declined: not enough money on card \" + getMaskedNumber() + \".\");\n            return false;\n        }\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" by bank card \" + getMaskedNumber() + \". Money left on the card: \" + getBalance());\n        return true;\n    }\n    @Override\n    public double calculateCashback(double amount) {\n        return Math.round(amount * 0.01 * 100.0) / 100.0;\n    }\n}\n\nclass BonusBalance implements Payable {\n    private double points;\n    public BonusBalance(double pts) { this.points = pts; }\n    public double getPoints() { return Math.round(points * 100.0) / 100.0; }\n    public void addPoints(double amount) { if (amount > 0) points += amount; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > points) return false;\n        points -= amount;\n        System.out.println(\"Paid \" + amount + \" with bonus points. Points left: \" + getPoints());\n        return true;\n    }\n}\n\nabstract class Product {\n    private String name;\n    private double price;\n    private int quantity;\n    public boolean inStock;\n    public char grade;\n    public Product(String n, double p, int q, boolean stock, char g) {\n        this.name = n; this.price = p; this.quantity = q; this.inStock = stock; this.grade = g;\n    }\n    public String getName() { return name; }\n    public double getPrice() { return price; }\n    protected double roundToTwoDecimals(double val) { return Math.round(val * 100.0) / 100.0; }\n    public double getPriceWithTax() { return roundToTwoDecimals(price * 1.12); }\n    public abstract double calculateDeliveryCost();\n}\n\nclass PhysicalProduct extends Product {\n    private double weightKg;\n    private boolean fragile;\n    public PhysicalProduct(String n, double p, int q, boolean stock, char g, double w, boolean frag) {\n        super(n, p, q, stock, g);\n        this.weightKg = w;\n        this.fragile = frag;\n    }\n    @Override\n    public double calculateDeliveryCost() {\n        double base = 15000.0;\n        if (weightKg > 10.0) base += 10000.0;\n        if (fragile) base += 10000.0;\n        return base;\n    }\n}\n\nclass DigitalProduct extends Product {\n    private double fileSizeMb;\n    private String downloadUrl;\n    public DigitalProduct(String n, double p, char g, double size, String url) {\n        super(n, p, 1, true, g);\n        this.fileSizeMb = size;\n        this.downloadUrl = url;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n}\n\nclass GiftCard extends Product implements Payable {\n    private String code;\n    private double balance;\n    public GiftCard(String name, double price, String code) {\n        super(name, price, 1, true, 'A');\n        this.code = code;\n        this.balance = price;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n    @Override\n    public double getPriceWithTax() { return getPrice(); }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > balance) return false;\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" with gift card \" + code + \". Left on the card: \" + balance);\n        return true;\n    }\n}\n\nabstract class Notification {\n    private Customer customer;\n    private String message;\n    public Notification(Customer c, String m) { this.customer = c; this.message = m; }\n    public Customer getCustomer() { return customer; }\n    public String getMessage() { return message; }\n    public abstract void send();\n}\n\nclass MobileNotification extends Notification {\n    private String deviceName;\n    public MobileNotification(Customer c, String m, String dev) { super(c, m); this.deviceName = dev; }\n    @Override\n    public void send() {\n        System.out.println(\"Push notification to \" + getCustomer().getName() + \"'s \" + deviceName + \": \" + getMessage());\n    }\n}\n\nclass WebNotification extends Notification {\n    private String browser;\n    public WebNotification(Customer c, String m, String b) { super(c, m); this.browser = b; }\n    @Override\n    public void send() {\n        System.out.println(\"Browser notification in \" + browser + \" for \" + getCustomer().getName() + \": \" + getMessage());\n    }\n}\n\nclass Customer {\n    private String name;\n    private int loyaltyPoints;\n    private double accountBalance;\n    private ShippingAddress shippingAddress;\n    private BankCard bankCard;\n    private BonusBalance bonusBalance = new BonusBalance(0.0);\n    private Map<String, ShippingAddress> deliveryAddresses = new LinkedHashMap<>();\n    public Customer(String name, int pts, double bal) {\n        this.name = name; this.loyaltyPoints = pts; this.accountBalance = bal;\n    }\n    public String getName() { return name; }\n    public ShippingAddress getShippingAddress() { return shippingAddress;\n    }\n    public void addBankCard(String num, double bal) { this.bankCard = new BankCard(num, name, bal); }\n    public BankCard getBankCard() { return bankCard; }\n    public BonusBalance getBonusBalance() { return bonusBalance; }\n    public void addDeliveryAddress(String label, ShippingAddress a) { deliveryAddresses.put(label, a); }\n    public boolean useDeliveryAddress(String label) {\n        ShippingAddress a = deliveryAddresses.get(label);\n        if (a != null) { this.shippingAddress = a; System.out.println(\"Orders will now be shipped to \\\"\" + label + \"\\\".\"); return true; }\n        return false;\n    }\n    public boolean pay(Payable method, double amount) {\n        boolean paid = method.processPayment(amount);\n        if (paid && method instanceof CashbackEligible eligible) {\n            double cb = eligible.calculateCashback(amount);\n            bonusBalance.addPoints(cb);\n            System.out.println(\"Cashback \" + cb + \" added. Bonus points: \" + bonusBalance.getPoints());\n        }\n        return paid;\n    }\n}\n\nclass OrderItem {\n    private Product product;\n    private int quantity;\n    public OrderItem(Product p, int q) { this.product = p; this.quantity = q; }\n    public Product getProduct() { return product; }\n    public double getLineTotal() { return product.getPriceWithTax() * quantity; }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    public Order(String id, Customer c) { this.orderId = id; this.customer = c; }\n    public void addItem(Product p, int q) { items.add(new OrderItem(p, q)); }\n    public double getTotal() {\n        double sum = 0;\n        for (OrderItem it : items) sum += it.getLineTotal() + it.getProduct().calculateDeliveryCost();\n        return Math.round(sum * 100.0) / 100.0;\n    }\n    public void printSummary() {\n        System.out.println(\"Order \" + orderId + \" for \" + (customer != null ? customer.getName() : \"Guest\") + \" | Total: \" + getTotal());\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"Dilshod\", 0, 500000.0);\n        Order ord = new Order(\"ORD-101\", c);\n        ord.addItem(new PhysicalProduct(\"Sichqoncha\", 100000.0, 1, true, 'A', 0.2, false), 1);\n        ord.printSummary();\n    }\n}",
    "solution": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Map;\nimport java.util.LinkedHashMap;\nimport java.util.Set;\nimport java.util.LinkedHashSet;\n\ninterface Payable {\n    boolean processPayment(double amount);\n}\n\ninterface CashbackEligible {\n    double calculateCashback(double amount);\n}\n\nclass ShippingAddress {\n    private String street;\n    private String city;\n    private String postalCode;\n    public ShippingAddress(String s, String c, String p) {\n        this.street = s; this.city = c; this.postalCode = p;\n    }\n    public String getStreet() { return street; }\n    public String getCity() { return city; }\n    public String getPostalCode() { return postalCode; }\n    @Override\n    public String toString() { return street + \", \" + city; }\n}\n\nclass BankCard implements Payable, CashbackEligible {\n    private String cardNumber;\n    private String holderName;\n    private double balance;\n    public BankCard(String num, String name, double bal) {\n        this.cardNumber = num; this.holderName = name; this.balance = bal;\n    }\n    public String getMaskedNumber() {\n        return \"**** \" + cardNumber.substring(cardNumber.length() - 4);\n    }\n    public double getBalance() { return Math.round(balance * 100.0) / 100.0; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0) return false;\n        if (amount > balance) {\n            System.out.println(\"Payment declined: not enough money on card \" + getMaskedNumber() + \".\");\n            return false;\n        }\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" by bank card \" + getMaskedNumber() + \". Money left on the card: \" + getBalance());\n        return true;\n    }\n    @Override\n    public double calculateCashback(double amount) {\n        return Math.round(amount * 0.01 * 100.0) / 100.0;\n    }\n}\n\nclass BonusBalance implements Payable {\n    private double points;\n    public BonusBalance(double pts) { this.points = pts; }\n    public double getPoints() { return Math.round(points * 100.0) / 100.0; }\n    public void addPoints(double amount) { if (amount > 0) points += amount; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > points) return false;\n        points -= amount;\n        System.out.println(\"Paid \" + amount + \" with bonus points. Points left: \" + getPoints());\n        return true;\n    }\n}\n\nabstract class Product {\n    private String name;\n    private double price;\n    private int quantity;\n    public boolean inStock;\n    public char grade;\n    public Product(String n, double p, int q, boolean stock, char g) {\n        this.name = n; this.price = p; this.quantity = q; this.inStock = stock; this.grade = g;\n    }\n    public String getName() { return name; }\n    public double getPrice() { return price; }\n    protected double roundToTwoDecimals(double val) { return Math.round(val * 100.0) / 100.0; }\n    public double getPriceWithTax() { return roundToTwoDecimals(price * 1.12); }\n    public abstract double calculateDeliveryCost();\n}\n\nclass PhysicalProduct extends Product {\n    private double weightKg;\n    private boolean fragile;\n    public PhysicalProduct(String n, double p, int q, boolean stock, char g, double w, boolean frag) {\n        super(n, p, q, stock, g);\n        this.weightKg = w;\n        this.fragile = frag;\n    }\n    @Override\n    public double calculateDeliveryCost() {\n        double base = 15000.0;\n        if (weightKg > 10.0) base += 10000.0;\n        if (fragile) base += 10000.0;\n        return base;\n    }\n}\n\nclass DigitalProduct extends Product {\n    private double fileSizeMb;\n    private String downloadUrl;\n    public DigitalProduct(String n, double p, char g, double size, String url) {\n        super(n, p, 1, true, g);\n        this.fileSizeMb = size;\n        this.downloadUrl = url;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n}\n\nclass GiftCard extends Product implements Payable {\n    private String code;\n    private double balance;\n    public GiftCard(String name, double price, String code) {\n        super(name, price, 1, true, 'A');\n        this.code = code;\n        this.balance = price;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n    @Override\n    public double getPriceWithTax() { return getPrice(); }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > balance) return false;\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" with gift card \" + code + \". Left on the card: \" + balance);\n        return true;\n    }\n}\n\nabstract class Notification {\n    private Customer customer;\n    private String message;\n    public Notification(Customer c, String m) { this.customer = c; this.message = m; }\n    public Customer getCustomer() { return customer; }\n    public String getMessage() { return message; }\n    public abstract void send();\n}\n\nclass MobileNotification extends Notification {\n    private String deviceName;\n    public MobileNotification(Customer c, String m, String dev) { super(c, m); this.deviceName = dev; }\n    @Override\n    public void send() {\n        System.out.println(\"Push notification to \" + getCustomer().getName() + \"'s \" + deviceName + \": \" + getMessage());\n    }\n}\n\nclass WebNotification extends Notification {\n    private String browser;\n    public WebNotification(Customer c, String m, String b) { super(c, m); this.browser = b; }\n    @Override\n    public void send() {\n        System.out.println(\"Browser notification in \" + browser + \" for \" + getCustomer().getName() + \": \" + getMessage());\n    }\n}\n\nclass Customer {\n    private String name;\n    private int loyaltyPoints;\n    private double accountBalance;\n    private ShippingAddress shippingAddress;\n    private BankCard bankCard;\n    private BonusBalance bonusBalance = new BonusBalance(0.0);\n    private Map<String, ShippingAddress> deliveryAddresses = new LinkedHashMap<>();\n    public Customer(String name, int pts, double bal) {\n        this.name = name; this.loyaltyPoints = pts; this.accountBalance = bal;\n    }\n    public String getName() { return name; }\n    public ShippingAddress getShippingAddress() { return shippingAddress;\n    }\n    public void addBankCard(String num, double bal) { this.bankCard = new BankCard(num, name, bal); }\n    public BankCard getBankCard() { return bankCard; }\n    public BonusBalance getBonusBalance() { return bonusBalance; }\n    public void addDeliveryAddress(String label, ShippingAddress a) { deliveryAddresses.put(label, a); }\n    public boolean useDeliveryAddress(String label) {\n        ShippingAddress a = deliveryAddresses.get(label);\n        if (a != null) { this.shippingAddress = a; System.out.println(\"Orders will now be shipped to \\\"\" + label + \"\\\".\"); return true; }\n        return false;\n    }\n    public boolean pay(Payable method, double amount) {\n        boolean paid = method.processPayment(amount);\n        if (paid && method instanceof CashbackEligible eligible) {\n            double cb = eligible.calculateCashback(amount);\n            bonusBalance.addPoints(cb);\n            System.out.println(\"Cashback \" + cb + \" added. Bonus points: \" + bonusBalance.getPoints());\n        }\n        return paid;\n    }\n}\n\nclass OrderItem {\n    private Product product;\n    private int quantity;\n    public OrderItem(Product p, int q) { this.product = p; this.quantity = q; }\n    public Product getProduct() { return product; }\n    public double getLineTotal() { return product.getPriceWithTax() * quantity; }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    public Order(String id, Customer c) { this.orderId = id; this.customer = c; }\n    public void addItem(Product p, int q) { items.add(new OrderItem(p, q)); }\n    public double getTotal() {\n        double sum = 0;\n        for (OrderItem it : items) sum += it.getLineTotal() + it.getProduct().calculateDeliveryCost();\n        return Math.round(sum * 100.0) / 100.0;\n    }\n    public void printSummary() {\n        System.out.println(\"Order \" + orderId + \" for \" + (customer != null ? customer.getName() : \"Guest\") + \" | Total: \" + getTotal());\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"Dilshod\", 0, 500000.0);\n        Order ord = new Order(\"ORD-101\", c);\n        ord.addItem(new PhysicalProduct(\"Sichqoncha\", 100000.0, 1, true, 'A', 0.2, false), 1);\n        ord.printSummary();\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 6-hafta yechimi Coursework 2 arxitekturasining markaziy qismidir: Product abstrakt sinfga aylanadi, to'lovlar 'Payable' va 'CashbackEligible' interfeyslariga o'tkaziladi, xabarnomalar esa 'Notification' abstrakt sinfi orqali mobil yoki veb push sifatida yetkaziladi.",
      "cleanCode": "class Customer {\n    public boolean pay(Payable method, double amount) {\n        boolean paid = method.processPayment(amount);\n        if (paid && method instanceof CashbackEligible eligible) {\n            bonusBalance.addPoints(eligible.calculateCashback(amount));\n        }\n        return paid;\n    }\n}",
      "breakdown": [
        "<code>OOPSolution_Week6</code>: to'liq rasmiy yechim klasslari.",
        "<code>Customer.pay()</code>: polimorfik to'lov va avtomatik keshbek."
      ]
    }
  },
  {
    "id": 150,
    "tier": 10,
    "tierName": "10-Bosqich: CW2 6-Hafta To'liq Arxitekturasi: To'lovlar, Keshbek va Xabarnomalar",
    "sector": "136-150: CW2 Week 6 Architecture Milestone",
    "title": {
      "uz": "150. CW2 6-Hafta Cho'qqisi — RunOrder To'liq Integratsiyasi",
      "en": "150. CW2 Week 6 Grand Milestone — Complete RunOrder Architecture Integration"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT rasmiy 'RunOrder.java' yechimining to'liq biznes oqimi: Mijoz yaratiladi, mahsulotlar qo'shiladi, bildirishnomalar (Mobile va Web) yuboriladi, manzil almashtiriladi va BankCard orqali to'lanib keshbek bonusga yoziladi!\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. WIUT 6-hafta 'OOPSolution_Week6' rasmiy arxitekturasini e'lon qiling.\n2. 'Product' sinfini abstrakt ('calculateDeliveryCost()') qiling va 'PhysicalProduct', 'DigitalProduct' larni yarating.\n3. 'Payable' va 'CashbackEligible' interfeyslarini tuzib, 'BankCard', 'BonusBalance' va 'GiftCard' klasslarini bajaring.\n4. 'Notification' abstrakt sinfi va 'MobileNotification', 'WebNotification' vorislarini qo'shing.\n5. 'Main' da to'liq biznes oqimini tekshiring: 'Customer c = new Customer(\"Aziz Karimov\", 120, 500000.0);         c.addBankCard(\"8600 1234 5678 9012\", 300000.0);         Notification push = new MobileNotification(c, \"Buyurtmangiz tayyor\", \"iPhone 15\");         push.send();         c.pay(c.getBankCard(), 150000.0);         System.out.println(\"Bonus ballari: \" + c.getBonusBalance().getPoints());'",
      "en": "📖 Real-World Scenario & Context\nFull grand milestone executing complete Week 6 RunOrder workflow combining all lecture and seminar systems.\n\n📋 Required Implementation Steps (1 to 5)\n1. Implement official Week 6 architecture matching OOPSolution_Week6.\n2. Make Product abstract and implement delivery costs in PhysicalProduct and DigitalProduct.\n3. Implement Payable, CashbackEligible, BankCard, BonusBalance, and GiftCard.\n4. Add Notification hierarchy with MobileNotification and WebNotification.\n5. Execute in 'main' and verify: 'Customer c = new Customer(\"Aziz Karimov\", 120, 500000.0);         c.addBankCard(\"8600 1234 5678 9012\", 300000.0);         Notification push = new MobileNotification(c, \"Buyurtmangiz tayyor\", \"iPhone 15\");         push.send();         c.pay(c.getBankCard(), 150000.0);         System.out.println(\"Bonus ballari: \" + c.getBonusBalance().getPoints());'"
    },
    "requirements": {
      "classes": [
        "Customer",
        "Main"
      ],
      "methods": [
        "main"
      ]
    },
    "starterCode": "// Week 6 OOPSolution to'liq arxitekturasi\nimport java.util.List;\nimport java.util.ArrayList;\nimport java.util.Map;\nimport java.util.LinkedHashMap;\nimport java.util.Set;\nimport java.util.LinkedHashSet;\n\ninterface Payable {\n    boolean processPayment(double amount);\n}\n\ninterface CashbackEligible {\n    double calculateCashback(double amount);\n}\n\nclass ShippingAddress {\n    private String street;\n    private String city;\n    private String postalCode;\n    public ShippingAddress(String s, String c, String p) {\n        this.street = s; this.city = c; this.postalCode = p;\n    }\n    public String getStreet() { return street; }\n    public String getCity() { return city; }\n    public String getPostalCode() { return postalCode; }\n    @Override\n    public String toString() { return street + \", \" + city; }\n}\n\nclass BankCard implements Payable, CashbackEligible {\n    private String cardNumber;\n    private String holderName;\n    private double balance;\n    public BankCard(String num, String name, double bal) {\n        this.cardNumber = num; this.holderName = name; this.balance = bal;\n    }\n    public String getMaskedNumber() {\n        return \"**** \" + cardNumber.substring(cardNumber.length() - 4);\n    }\n    public double getBalance() { return Math.round(balance * 100.0) / 100.0; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0) return false;\n        if (amount > balance) {\n            System.out.println(\"Payment declined: not enough money on card \" + getMaskedNumber() + \".\");\n            return false;\n        }\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" by bank card \" + getMaskedNumber() + \". Money left on the card: \" + getBalance());\n        return true;\n    }\n    @Override\n    public double calculateCashback(double amount) {\n        return Math.round(amount * 0.01 * 100.0) / 100.0;\n    }\n}\n\nclass BonusBalance implements Payable {\n    private double points;\n    public BonusBalance(double pts) { this.points = pts; }\n    public double getPoints() { return Math.round(points * 100.0) / 100.0; }\n    public void addPoints(double amount) { if (amount > 0) points += amount; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > points) return false;\n        points -= amount;\n        System.out.println(\"Paid \" + amount + \" with bonus points. Points left: \" + getPoints());\n        return true;\n    }\n}\n\nabstract class Product {\n    private String name;\n    private double price;\n    private int quantity;\n    public boolean inStock;\n    public char grade;\n    public Product(String n, double p, int q, boolean stock, char g) {\n        this.name = n; this.price = p; this.quantity = q; this.inStock = stock; this.grade = g;\n    }\n    public String getName() { return name; }\n    public double getPrice() { return price; }\n    protected double roundToTwoDecimals(double val) { return Math.round(val * 100.0) / 100.0; }\n    public double getPriceWithTax() { return roundToTwoDecimals(price * 1.12); }\n    public abstract double calculateDeliveryCost();\n}\n\nclass PhysicalProduct extends Product {\n    private double weightKg;\n    private boolean fragile;\n    public PhysicalProduct(String n, double p, int q, boolean stock, char g, double w, boolean frag) {\n        super(n, p, q, stock, g);\n        this.weightKg = w;\n        this.fragile = frag;\n    }\n    @Override\n    public double calculateDeliveryCost() {\n        double base = 15000.0;\n        if (weightKg > 10.0) base += 10000.0;\n        if (fragile) base += 10000.0;\n        return base;\n    }\n}\n\nclass DigitalProduct extends Product {\n    private double fileSizeMb;\n    private String downloadUrl;\n    public DigitalProduct(String n, double p, char g, double size, String url) {\n        super(n, p, 1, true, g);\n        this.fileSizeMb = size;\n        this.downloadUrl = url;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n}\n\nclass GiftCard extends Product implements Payable {\n    private String code;\n    private double balance;\n    public GiftCard(String name, double price, String code) {\n        super(name, price, 1, true, 'A');\n        this.code = code;\n        this.balance = price;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n    @Override\n    public double getPriceWithTax() { return getPrice(); }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > balance) return false;\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" with gift card \" + code + \". Left on the card: \" + balance);\n        return true;\n    }\n}\n\nabstract class Notification {\n    private Customer customer;\n    private String message;\n    public Notification(Customer c, String m) { this.customer = c; this.message = m; }\n    public Customer getCustomer() { return customer; }\n    public String getMessage() { return message; }\n    public abstract void send();\n}\n\nclass MobileNotification extends Notification {\n    private String deviceName;\n    public MobileNotification(Customer c, String m, String dev) { super(c, m); this.deviceName = dev; }\n    @Override\n    public void send() {\n        System.out.println(\"Push notification to \" + getCustomer().getName() + \"'s \" + deviceName + \": \" + getMessage());\n    }\n}\n\nclass WebNotification extends Notification {\n    private String browser;\n    public WebNotification(Customer c, String m, String b) { super(c, m); this.browser = b; }\n    @Override\n    public void send() {\n        System.out.println(\"Browser notification in \" + browser + \" for \" + getCustomer().getName() + \": \" + getMessage());\n    }\n}\n\nclass Customer {\n    private String name;\n    private int loyaltyPoints;\n    private double accountBalance;\n    private ShippingAddress shippingAddress;\n    private BankCard bankCard;\n    private BonusBalance bonusBalance = new BonusBalance(0.0);\n    private Map<String, ShippingAddress> deliveryAddresses = new LinkedHashMap<>();\n    public Customer(String name, int pts, double bal) {\n        this.name = name; this.loyaltyPoints = pts; this.accountBalance = bal;\n    }\n    public String getName() { return name; }\n    public ShippingAddress getShippingAddress() { return shippingAddress;\n    }\n    public void addBankCard(String num, double bal) { this.bankCard = new BankCard(num, name, bal); }\n    public BankCard getBankCard() { return bankCard; }\n    public BonusBalance getBonusBalance() { return bonusBalance; }\n    public void addDeliveryAddress(String label, ShippingAddress a) { deliveryAddresses.put(label, a); }\n    public boolean useDeliveryAddress(String label) {\n        ShippingAddress a = deliveryAddresses.get(label);\n        if (a != null) { this.shippingAddress = a; System.out.println(\"Orders will now be shipped to \\\"\" + label + \"\\\".\"); return true; }\n        return false;\n    }\n    public boolean pay(Payable method, double amount) {\n        boolean paid = method.processPayment(amount);\n        if (paid && method instanceof CashbackEligible eligible) {\n            double cb = eligible.calculateCashback(amount);\n            bonusBalance.addPoints(cb);\n            System.out.println(\"Cashback \" + cb + \" added. Bonus points: \" + bonusBalance.getPoints());\n        }\n        return paid;\n    }\n}\n\nclass OrderItem {\n    private Product product;\n    private int quantity;\n    public OrderItem(Product p, int q) { this.product = p; this.quantity = q; }\n    public Product getProduct() { return product; }\n    public double getLineTotal() { return product.getPriceWithTax() * quantity; }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    public Order(String id, Customer c) { this.orderId = id; this.customer = c; }\n    public void addItem(Product p, int q) { items.add(new OrderItem(p, q)); }\n    public double getTotal() {\n        double sum = 0;\n        for (OrderItem it : items) sum += it.getLineTotal() + it.getProduct().calculateDeliveryCost();\n        return Math.round(sum * 100.0) / 100.0;\n    }\n    public void printSummary() {\n        System.out.println(\"Order \" + orderId + \" for \" + (customer != null ? customer.getName() : \"Guest\") + \" | Total: \" + getTotal());\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"Aziz Karimov\", 120, 500000.0);\n        c.addBankCard(\"8600 1234 5678 9012\", 300000.0);\n        Notification push = new MobileNotification(c, \"Buyurtmangiz tayyor\", \"iPhone 15\");\n        push.send();\n        c.pay(c.getBankCard(), 150000.0);\n        System.out.println(\"Bonus ballari: \" + c.getBonusBalance().getPoints());\n    }\n}",
    "solution": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Map;\nimport java.util.LinkedHashMap;\nimport java.util.Set;\nimport java.util.LinkedHashSet;\n\ninterface Payable {\n    boolean processPayment(double amount);\n}\n\ninterface CashbackEligible {\n    double calculateCashback(double amount);\n}\n\nclass ShippingAddress {\n    private String street;\n    private String city;\n    private String postalCode;\n    public ShippingAddress(String s, String c, String p) {\n        this.street = s; this.city = c; this.postalCode = p;\n    }\n    public String getStreet() { return street; }\n    public String getCity() { return city; }\n    public String getPostalCode() { return postalCode; }\n    @Override\n    public String toString() { return street + \", \" + city; }\n}\n\nclass BankCard implements Payable, CashbackEligible {\n    private String cardNumber;\n    private String holderName;\n    private double balance;\n    public BankCard(String num, String name, double bal) {\n        this.cardNumber = num; this.holderName = name; this.balance = bal;\n    }\n    public String getMaskedNumber() {\n        return \"**** \" + cardNumber.substring(cardNumber.length() - 4);\n    }\n    public double getBalance() { return Math.round(balance * 100.0) / 100.0; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0) return false;\n        if (amount > balance) {\n            System.out.println(\"Payment declined: not enough money on card \" + getMaskedNumber() + \".\");\n            return false;\n        }\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" by bank card \" + getMaskedNumber() + \". Money left on the card: \" + getBalance());\n        return true;\n    }\n    @Override\n    public double calculateCashback(double amount) {\n        return Math.round(amount * 0.01 * 100.0) / 100.0;\n    }\n}\n\nclass BonusBalance implements Payable {\n    private double points;\n    public BonusBalance(double pts) { this.points = pts; }\n    public double getPoints() { return Math.round(points * 100.0) / 100.0; }\n    public void addPoints(double amount) { if (amount > 0) points += amount; }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > points) return false;\n        points -= amount;\n        System.out.println(\"Paid \" + amount + \" with bonus points. Points left: \" + getPoints());\n        return true;\n    }\n}\n\nabstract class Product {\n    private String name;\n    private double price;\n    private int quantity;\n    public boolean inStock;\n    public char grade;\n    public Product(String n, double p, int q, boolean stock, char g) {\n        this.name = n; this.price = p; this.quantity = q; this.inStock = stock; this.grade = g;\n    }\n    public String getName() { return name; }\n    public double getPrice() { return price; }\n    protected double roundToTwoDecimals(double val) { return Math.round(val * 100.0) / 100.0; }\n    public double getPriceWithTax() { return roundToTwoDecimals(price * 1.12); }\n    public abstract double calculateDeliveryCost();\n}\n\nclass PhysicalProduct extends Product {\n    private double weightKg;\n    private boolean fragile;\n    public PhysicalProduct(String n, double p, int q, boolean stock, char g, double w, boolean frag) {\n        super(n, p, q, stock, g);\n        this.weightKg = w;\n        this.fragile = frag;\n    }\n    @Override\n    public double calculateDeliveryCost() {\n        double base = 15000.0;\n        if (weightKg > 10.0) base += 10000.0;\n        if (fragile) base += 10000.0;\n        return base;\n    }\n}\n\nclass DigitalProduct extends Product {\n    private double fileSizeMb;\n    private String downloadUrl;\n    public DigitalProduct(String n, double p, char g, double size, String url) {\n        super(n, p, 1, true, g);\n        this.fileSizeMb = size;\n        this.downloadUrl = url;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n}\n\nclass GiftCard extends Product implements Payable {\n    private String code;\n    private double balance;\n    public GiftCard(String name, double price, String code) {\n        super(name, price, 1, true, 'A');\n        this.code = code;\n        this.balance = price;\n    }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n    @Override\n    public double getPriceWithTax() { return getPrice(); }\n    @Override\n    public boolean processPayment(double amount) {\n        if (amount <= 0 || amount > balance) return false;\n        balance -= amount;\n        System.out.println(\"Paid \" + amount + \" with gift card \" + code + \". Left on the card: \" + balance);\n        return true;\n    }\n}\n\nabstract class Notification {\n    private Customer customer;\n    private String message;\n    public Notification(Customer c, String m) { this.customer = c; this.message = m; }\n    public Customer getCustomer() { return customer; }\n    public String getMessage() { return message; }\n    public abstract void send();\n}\n\nclass MobileNotification extends Notification {\n    private String deviceName;\n    public MobileNotification(Customer c, String m, String dev) { super(c, m); this.deviceName = dev; }\n    @Override\n    public void send() {\n        System.out.println(\"Push notification to \" + getCustomer().getName() + \"'s \" + deviceName + \": \" + getMessage());\n    }\n}\n\nclass WebNotification extends Notification {\n    private String browser;\n    public WebNotification(Customer c, String m, String b) { super(c, m); this.browser = b; }\n    @Override\n    public void send() {\n        System.out.println(\"Browser notification in \" + browser + \" for \" + getCustomer().getName() + \": \" + getMessage());\n    }\n}\n\nclass Customer {\n    private String name;\n    private int loyaltyPoints;\n    private double accountBalance;\n    private ShippingAddress shippingAddress;\n    private BankCard bankCard;\n    private BonusBalance bonusBalance = new BonusBalance(0.0);\n    private Map<String, ShippingAddress> deliveryAddresses = new LinkedHashMap<>();\n    public Customer(String name, int pts, double bal) {\n        this.name = name; this.loyaltyPoints = pts; this.accountBalance = bal;\n    }\n    public String getName() { return name; }\n    public ShippingAddress getShippingAddress() { return shippingAddress;\n    }\n    public void addBankCard(String num, double bal) { this.bankCard = new BankCard(num, name, bal); }\n    public BankCard getBankCard() { return bankCard; }\n    public BonusBalance getBonusBalance() { return bonusBalance; }\n    public void addDeliveryAddress(String label, ShippingAddress a) { deliveryAddresses.put(label, a); }\n    public boolean useDeliveryAddress(String label) {\n        ShippingAddress a = deliveryAddresses.get(label);\n        if (a != null) { this.shippingAddress = a; System.out.println(\"Orders will now be shipped to \\\"\" + label + \"\\\".\"); return true; }\n        return false;\n    }\n    public boolean pay(Payable method, double amount) {\n        boolean paid = method.processPayment(amount);\n        if (paid && method instanceof CashbackEligible eligible) {\n            double cb = eligible.calculateCashback(amount);\n            bonusBalance.addPoints(cb);\n            System.out.println(\"Cashback \" + cb + \" added. Bonus points: \" + bonusBalance.getPoints());\n        }\n        return paid;\n    }\n}\n\nclass OrderItem {\n    private Product product;\n    private int quantity;\n    public OrderItem(Product p, int q) { this.product = p; this.quantity = q; }\n    public Product getProduct() { return product; }\n    public double getLineTotal() { return product.getPriceWithTax() * quantity; }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    public Order(String id, Customer c) { this.orderId = id; this.customer = c; }\n    public void addItem(Product p, int q) { items.add(new OrderItem(p, q)); }\n    public double getTotal() {\n        double sum = 0;\n        for (OrderItem it : items) sum += it.getLineTotal() + it.getProduct().calculateDeliveryCost();\n        return Math.round(sum * 100.0) / 100.0;\n    }\n    public void printSummary() {\n        System.out.println(\"Order \" + orderId + \" for \" + (customer != null ? customer.getName() : \"Guest\") + \" | Total: \" + getTotal());\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"Aziz Karimov\", 120, 500000.0);\n        c.addBankCard(\"8600 1234 5678 9012\", 300000.0);\n        Notification push = new MobileNotification(c, \"Buyurtmangiz tayyor\", \"iPhone 15\");\n        push.send();\n        c.pay(c.getBankCard(), 150000.0);\n        System.out.println(\"Bonus ballari: \" + c.getBonusBalance().getPoints());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 6-hafta yechimi Coursework 2 arxitekturasining markaziy qismidir: Product abstrakt sinfga aylanadi, to'lovlar 'Payable' va 'CashbackEligible' interfeyslariga o'tkaziladi, xabarnomalar esa 'Notification' abstrakt sinfi orqali mobil yoki veb push sifatida yetkaziladi.",
      "cleanCode": "class Customer {\n    public boolean pay(Payable method, double amount) {\n        boolean paid = method.processPayment(amount);\n        if (paid && method instanceof CashbackEligible eligible) {\n            bonusBalance.addPoints(eligible.calculateCashback(amount));\n        }\n        return paid;\n    }\n}",
      "breakdown": [
        "<code>OOPSolution_Week6</code>: to'liq rasmiy yechim klasslari.",
        "<code>Customer.pay()</code>: polimorfik to'lov va avtomatik keshbek."
      ]
    }
  }
];
