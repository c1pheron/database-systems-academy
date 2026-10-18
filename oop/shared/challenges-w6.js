// WIUT OOP (5COSC018C) — WEEK 6 DATASET (150 PROGRESSIVE CHALLENGES)
window.OOP_CHALLENGES_W6 = [
  {
    "id": 1,
    "tier": 1,
    "tierName": "1-Bosqich: Creational Patterns (Singleton & Factory)",
    "sector": "GoF Creational",
    "title": {
      "uz": "1. Uzum Market — Yagona Konfiguratsiya (Singleton Pattern)",
      "en": "1. Uzum Market — Singleton Configuration Manager"
    },
    "scenario": {
      "uz": "Uzum Market butun tizimda faqat bitta bo'lishi kerak bo'lgan 'ProductConfig' Singleton sinfini talab qiladi. Konstruktorni 'private' qiling va 'public static ProductConfig getInstance()' metodi orqali yagona instansni qaytaring.",
      "en": "Implement Thread-Safe Lazy Singleton 'ProductConfig' in Uzum Market with private constructor and 'getInstance()'."
    },
    "requirements": {
      "classes": [
        "ProductConfig"
      ],
      "methods": [
        "getInstance"
      ],
      "keywords": [
        "private",
        "static"
      ]
    },
    "starterCode": "",
    "solution": "class ProductConfig {\n    private static ProductConfig instance;\n    private ProductConfig() {}\n\n    public static ProductConfig getInstance() {\n        if (instance == null) {\n            instance = new ProductConfig();\n        }\n        return instance;\n    }\n\n    public void showStatus() {\n        System.out.println(\"Uzum Market: Singleton faol\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ProductConfig s1 = ProductConfig.getInstance();\n        ProductConfig s2 = ProductConfig.getInstance();\n        System.out.println(\"Ikkala havola tengmi: \" + (s1 == s2));\n    }\n}",
    "detailedSolution": {
      "theory": "Singleton Pattern — butun dastur hayotida sinfdan faqat bitta yagona obyekt mavjud bo'lishini va unga hamma joydan yagona kirish nuqtasini ta'minlaydi.",
      "theoryEn": "Singleton ensures a class maintains exactly one instance across application runtime, accessed via a global static method.",
      "cleanCode": "private static ProductConfig instance;\nprivate ProductConfig() {}\npublic static ProductConfig getInstance() {\n    if (instance == null) instance = new ProductConfig();\n    return instance;\n}",
      "breakdown": [
        "<code>private ProductConfig()</code>: Tashqaridan 'new' orqali ikkinchi obyekt yaratilishini mutlaqo taqiqlaydi."
      ],
      "pitfalls": "Konstruktorni 'public' qoldirish Singleton g'oyasini butunlay yo'qqa chiqaradi.",
      "cw2Tip": "CW2 da butun konsol dasturi uchun yagona 'OrderManager' yoki 'AppConfig' yaratishda Singleton qo'llaniladi."
    }
  },
  {
    "id": 2,
    "tier": 1,
    "tierName": "1-Bosqich: Creational Patterns (Singleton & Factory)",
    "sector": "GoF Creational",
    "title": {
      "uz": "2. Payme Wallet — Yagona Konfiguratsiya (Singleton Pattern)",
      "en": "2. Payme Wallet — Singleton Configuration Manager"
    },
    "scenario": {
      "uz": "Payme Wallet butun tizimda faqat bitta bo'lishi kerak bo'lgan 'WalletUserConfig' Singleton sinfini talab qiladi. Konstruktorni 'private' qiling va 'public static WalletUserConfig getInstance()' metodi orqali yagona instansni qaytaring.",
      "en": "Implement Thread-Safe Lazy Singleton 'WalletUserConfig' in Payme Wallet with private constructor and 'getInstance()'."
    },
    "requirements": {
      "classes": [
        "WalletUserConfig"
      ],
      "methods": [
        "getInstance"
      ],
      "keywords": [
        "private",
        "static"
      ]
    },
    "starterCode": "",
    "solution": "class WalletUserConfig {\n    private static WalletUserConfig instance;\n    private WalletUserConfig() {}\n\n    public static WalletUserConfig getInstance() {\n        if (instance == null) {\n            instance = new WalletUserConfig();\n        }\n        return instance;\n    }\n\n    public void showStatus() {\n        System.out.println(\"Payme Wallet: Singleton faol\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WalletUserConfig s1 = WalletUserConfig.getInstance();\n        WalletUserConfig s2 = WalletUserConfig.getInstance();\n        System.out.println(\"Ikkala havola tengmi: \" + (s1 == s2));\n    }\n}",
    "detailedSolution": {
      "theory": "Singleton Pattern — butun dastur hayotida sinfdan faqat bitta yagona obyekt mavjud bo'lishini va unga hamma joydan yagona kirish nuqtasini ta'minlaydi.",
      "theoryEn": "Singleton ensures a class maintains exactly one instance across application runtime, accessed via a global static method.",
      "cleanCode": "private static WalletUserConfig instance;\nprivate WalletUserConfig() {}\npublic static WalletUserConfig getInstance() {\n    if (instance == null) instance = new WalletUserConfig();\n    return instance;\n}",
      "breakdown": [
        "<code>private WalletUserConfig()</code>: Tashqaridan 'new' orqali ikkinchi obyekt yaratilishini mutlaqo taqiqlaydi."
      ],
      "pitfalls": "Konstruktorni 'public' qoldirish Singleton g'oyasini butunlay yo'qqa chiqaradi.",
      "cw2Tip": "CW2 da butun konsol dasturi uchun yagona 'OrderManager' yoki 'AppConfig' yaratishda Singleton qo'llaniladi."
    }
  },
  {
    "id": 3,
    "tier": 1,
    "tierName": "1-Bosqich: Creational Patterns (Singleton & Factory)",
    "sector": "GoF Creational",
    "title": {
      "uz": "3. Yandex Go — Yagona Konfiguratsiya (Singleton Pattern)",
      "en": "3. Yandex Go — Singleton Configuration Manager"
    },
    "scenario": {
      "uz": "Yandex Go butun tizimda faqat bitta bo'lishi kerak bo'lgan 'TaxiRideConfig' Singleton sinfini talab qiladi. Konstruktorni 'private' qiling va 'public static TaxiRideConfig getInstance()' metodi orqali yagona instansni qaytaring.",
      "en": "Implement Thread-Safe Lazy Singleton 'TaxiRideConfig' in Yandex Go with private constructor and 'getInstance()'."
    },
    "requirements": {
      "classes": [
        "TaxiRideConfig"
      ],
      "methods": [
        "getInstance"
      ],
      "keywords": [
        "private",
        "static"
      ]
    },
    "starterCode": "",
    "solution": "class TaxiRideConfig {\n    private static TaxiRideConfig instance;\n    private TaxiRideConfig() {}\n\n    public static TaxiRideConfig getInstance() {\n        if (instance == null) {\n            instance = new TaxiRideConfig();\n        }\n        return instance;\n    }\n\n    public void showStatus() {\n        System.out.println(\"Yandex Go: Singleton faol\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TaxiRideConfig s1 = TaxiRideConfig.getInstance();\n        TaxiRideConfig s2 = TaxiRideConfig.getInstance();\n        System.out.println(\"Ikkala havola tengmi: \" + (s1 == s2));\n    }\n}",
    "detailedSolution": {
      "theory": "Singleton Pattern — butun dastur hayotida sinfdan faqat bitta yagona obyekt mavjud bo'lishini va unga hamma joydan yagona kirish nuqtasini ta'minlaydi.",
      "theoryEn": "Singleton ensures a class maintains exactly one instance across application runtime, accessed via a global static method.",
      "cleanCode": "private static TaxiRideConfig instance;\nprivate TaxiRideConfig() {}\npublic static TaxiRideConfig getInstance() {\n    if (instance == null) instance = new TaxiRideConfig();\n    return instance;\n}",
      "breakdown": [
        "<code>private TaxiRideConfig()</code>: Tashqaridan 'new' orqali ikkinchi obyekt yaratilishini mutlaqo taqiqlaydi."
      ],
      "pitfalls": "Konstruktorni 'public' qoldirish Singleton g'oyasini butunlay yo'qqa chiqaradi.",
      "cw2Tip": "CW2 da butun konsol dasturi uchun yagona 'OrderManager' yoki 'AppConfig' yaratishda Singleton qo'llaniladi."
    }
  },
  {
    "id": 4,
    "tier": 1,
    "tierName": "1-Bosqich: Creational Patterns (Singleton & Factory)",
    "sector": "GoF Creational",
    "title": {
      "uz": "4. Korzinka Go — Yagona Konfiguratsiya (Singleton Pattern)",
      "en": "4. Korzinka Go — Singleton Configuration Manager"
    },
    "scenario": {
      "uz": "Korzinka Go butun tizimda faqat bitta bo'lishi kerak bo'lgan 'LoyaltyCardConfig' Singleton sinfini talab qiladi. Konstruktorni 'private' qiling va 'public static LoyaltyCardConfig getInstance()' metodi orqali yagona instansni qaytaring.",
      "en": "Implement Thread-Safe Lazy Singleton 'LoyaltyCardConfig' in Korzinka Go with private constructor and 'getInstance()'."
    },
    "requirements": {
      "classes": [
        "LoyaltyCardConfig"
      ],
      "methods": [
        "getInstance"
      ],
      "keywords": [
        "private",
        "static"
      ]
    },
    "starterCode": "",
    "solution": "class LoyaltyCardConfig {\n    private static LoyaltyCardConfig instance;\n    private LoyaltyCardConfig() {}\n\n    public static LoyaltyCardConfig getInstance() {\n        if (instance == null) {\n            instance = new LoyaltyCardConfig();\n        }\n        return instance;\n    }\n\n    public void showStatus() {\n        System.out.println(\"Korzinka Go: Singleton faol\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LoyaltyCardConfig s1 = LoyaltyCardConfig.getInstance();\n        LoyaltyCardConfig s2 = LoyaltyCardConfig.getInstance();\n        System.out.println(\"Ikkala havola tengmi: \" + (s1 == s2));\n    }\n}",
    "detailedSolution": {
      "theory": "Singleton Pattern — butun dastur hayotida sinfdan faqat bitta yagona obyekt mavjud bo'lishini va unga hamma joydan yagona kirish nuqtasini ta'minlaydi.",
      "theoryEn": "Singleton ensures a class maintains exactly one instance across application runtime, accessed via a global static method.",
      "cleanCode": "private static LoyaltyCardConfig instance;\nprivate LoyaltyCardConfig() {}\npublic static LoyaltyCardConfig getInstance() {\n    if (instance == null) instance = new LoyaltyCardConfig();\n    return instance;\n}",
      "breakdown": [
        "<code>private LoyaltyCardConfig()</code>: Tashqaridan 'new' orqali ikkinchi obyekt yaratilishini mutlaqo taqiqlaydi."
      ],
      "pitfalls": "Konstruktorni 'public' qoldirish Singleton g'oyasini butunlay yo'qqa chiqaradi.",
      "cw2Tip": "CW2 da butun konsol dasturi uchun yagona 'OrderManager' yoki 'AppConfig' yaratishda Singleton qo'llaniladi."
    }
  },
  {
    "id": 5,
    "tier": 1,
    "tierName": "1-Bosqich: Creational Patterns (Singleton & Factory)",
    "sector": "GoF Creational",
    "title": {
      "uz": "5. WIUT Portal — Yagona Konfiguratsiya (Singleton Pattern)",
      "en": "5. WIUT Portal — Singleton Configuration Manager"
    },
    "scenario": {
      "uz": "WIUT Portal butun tizimda faqat bitta bo'lishi kerak bo'lgan 'StudentConfig' Singleton sinfini talab qiladi. Konstruktorni 'private' qiling va 'public static StudentConfig getInstance()' metodi orqali yagona instansni qaytaring.",
      "en": "Implement Thread-Safe Lazy Singleton 'StudentConfig' in WIUT Portal with private constructor and 'getInstance()'."
    },
    "requirements": {
      "classes": [
        "StudentConfig"
      ],
      "methods": [
        "getInstance"
      ],
      "keywords": [
        "private",
        "static"
      ]
    },
    "starterCode": "",
    "solution": "class StudentConfig {\n    private static StudentConfig instance;\n    private StudentConfig() {}\n\n    public static StudentConfig getInstance() {\n        if (instance == null) {\n            instance = new StudentConfig();\n        }\n        return instance;\n    }\n\n    public void showStatus() {\n        System.out.println(\"WIUT Portal: Singleton faol\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StudentConfig s1 = StudentConfig.getInstance();\n        StudentConfig s2 = StudentConfig.getInstance();\n        System.out.println(\"Ikkala havola tengmi: \" + (s1 == s2));\n    }\n}",
    "detailedSolution": {
      "theory": "Singleton Pattern — butun dastur hayotida sinfdan faqat bitta yagona obyekt mavjud bo'lishini va unga hamma joydan yagona kirish nuqtasini ta'minlaydi.",
      "theoryEn": "Singleton ensures a class maintains exactly one instance across application runtime, accessed via a global static method.",
      "cleanCode": "private static StudentConfig instance;\nprivate StudentConfig() {}\npublic static StudentConfig getInstance() {\n    if (instance == null) instance = new StudentConfig();\n    return instance;\n}",
      "breakdown": [
        "<code>private StudentConfig()</code>: Tashqaridan 'new' orqali ikkinchi obyekt yaratilishini mutlaqo taqiqlaydi."
      ],
      "pitfalls": "Konstruktorni 'public' qoldirish Singleton g'oyasini butunlay yo'qqa chiqaradi.",
      "cw2Tip": "CW2 da butun konsol dasturi uchun yagona 'OrderManager' yoki 'AppConfig' yaratishda Singleton qo'llaniladi."
    }
  },
  {
    "id": 6,
    "tier": 1,
    "tierName": "1-Bosqich: Creational Patterns (Singleton & Factory)",
    "sector": "GoF Creational",
    "title": {
      "uz": "6. Click Pay — Yagona Konfiguratsiya (Singleton Pattern)",
      "en": "6. Click Pay — Singleton Configuration Manager"
    },
    "scenario": {
      "uz": "Click Pay butun tizimda faqat bitta bo'lishi kerak bo'lgan 'PaymentTxnConfig' Singleton sinfini talab qiladi. Konstruktorni 'private' qiling va 'public static PaymentTxnConfig getInstance()' metodi orqali yagona instansni qaytaring.",
      "en": "Implement Thread-Safe Lazy Singleton 'PaymentTxnConfig' in Click Pay with private constructor and 'getInstance()'."
    },
    "requirements": {
      "classes": [
        "PaymentTxnConfig"
      ],
      "methods": [
        "getInstance"
      ],
      "keywords": [
        "private",
        "static"
      ]
    },
    "starterCode": "",
    "solution": "class PaymentTxnConfig {\n    private static PaymentTxnConfig instance;\n    private PaymentTxnConfig() {}\n\n    public static PaymentTxnConfig getInstance() {\n        if (instance == null) {\n            instance = new PaymentTxnConfig();\n        }\n        return instance;\n    }\n\n    public void showStatus() {\n        System.out.println(\"Click Pay: Singleton faol\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentTxnConfig s1 = PaymentTxnConfig.getInstance();\n        PaymentTxnConfig s2 = PaymentTxnConfig.getInstance();\n        System.out.println(\"Ikkala havola tengmi: \" + (s1 == s2));\n    }\n}",
    "detailedSolution": {
      "theory": "Singleton Pattern — butun dastur hayotida sinfdan faqat bitta yagona obyekt mavjud bo'lishini va unga hamma joydan yagona kirish nuqtasini ta'minlaydi.",
      "theoryEn": "Singleton ensures a class maintains exactly one instance across application runtime, accessed via a global static method.",
      "cleanCode": "private static PaymentTxnConfig instance;\nprivate PaymentTxnConfig() {}\npublic static PaymentTxnConfig getInstance() {\n    if (instance == null) instance = new PaymentTxnConfig();\n    return instance;\n}",
      "breakdown": [
        "<code>private PaymentTxnConfig()</code>: Tashqaridan 'new' orqali ikkinchi obyekt yaratilishini mutlaqo taqiqlaydi."
      ],
      "pitfalls": "Konstruktorni 'public' qoldirish Singleton g'oyasini butunlay yo'qqa chiqaradi.",
      "cw2Tip": "CW2 da butun konsol dasturi uchun yagona 'OrderManager' yoki 'AppConfig' yaratishda Singleton qo'llaniladi."
    }
  },
  {
    "id": 7,
    "tier": 1,
    "tierName": "1-Bosqich: Creational Patterns (Singleton & Factory)",
    "sector": "GoF Creational",
    "title": {
      "uz": "7. Telegram Bot — Yagona Konfiguratsiya (Singleton Pattern)",
      "en": "7. Telegram Bot — Singleton Configuration Manager"
    },
    "scenario": {
      "uz": "Telegram Bot butun tizimda faqat bitta bo'lishi kerak bo'lgan 'BotMessageConfig' Singleton sinfini talab qiladi. Konstruktorni 'private' qiling va 'public static BotMessageConfig getInstance()' metodi orqali yagona instansni qaytaring.",
      "en": "Implement Thread-Safe Lazy Singleton 'BotMessageConfig' in Telegram Bot with private constructor and 'getInstance()'."
    },
    "requirements": {
      "classes": [
        "BotMessageConfig"
      ],
      "methods": [
        "getInstance"
      ],
      "keywords": [
        "private",
        "static"
      ]
    },
    "starterCode": "",
    "solution": "class BotMessageConfig {\n    private static BotMessageConfig instance;\n    private BotMessageConfig() {}\n\n    public static BotMessageConfig getInstance() {\n        if (instance == null) {\n            instance = new BotMessageConfig();\n        }\n        return instance;\n    }\n\n    public void showStatus() {\n        System.out.println(\"Telegram Bot: Singleton faol\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BotMessageConfig s1 = BotMessageConfig.getInstance();\n        BotMessageConfig s2 = BotMessageConfig.getInstance();\n        System.out.println(\"Ikkala havola tengmi: \" + (s1 == s2));\n    }\n}",
    "detailedSolution": {
      "theory": "Singleton Pattern — butun dastur hayotida sinfdan faqat bitta yagona obyekt mavjud bo'lishini va unga hamma joydan yagona kirish nuqtasini ta'minlaydi.",
      "theoryEn": "Singleton ensures a class maintains exactly one instance across application runtime, accessed via a global static method.",
      "cleanCode": "private static BotMessageConfig instance;\nprivate BotMessageConfig() {}\npublic static BotMessageConfig getInstance() {\n    if (instance == null) instance = new BotMessageConfig();\n    return instance;\n}",
      "breakdown": [
        "<code>private BotMessageConfig()</code>: Tashqaridan 'new' orqali ikkinchi obyekt yaratilishini mutlaqo taqiqlaydi."
      ],
      "pitfalls": "Konstruktorni 'public' qoldirish Singleton g'oyasini butunlay yo'qqa chiqaradi.",
      "cw2Tip": "CW2 da butun konsol dasturi uchun yagona 'OrderManager' yoki 'AppConfig' yaratishda Singleton qo'llaniladi."
    }
  },
  {
    "id": 8,
    "tier": 1,
    "tierName": "1-Bosqich: Creational Patterns (Singleton & Factory)",
    "sector": "GoF Creational",
    "title": {
      "uz": "8. UzAirways — Yagona Konfiguratsiya (Singleton Pattern)",
      "en": "8. UzAirways — Singleton Configuration Manager"
    },
    "scenario": {
      "uz": "UzAirways butun tizimda faqat bitta bo'lishi kerak bo'lgan 'FlightTicketConfig' Singleton sinfini talab qiladi. Konstruktorni 'private' qiling va 'public static FlightTicketConfig getInstance()' metodi orqali yagona instansni qaytaring.",
      "en": "Implement Thread-Safe Lazy Singleton 'FlightTicketConfig' in UzAirways with private constructor and 'getInstance()'."
    },
    "requirements": {
      "classes": [
        "FlightTicketConfig"
      ],
      "methods": [
        "getInstance"
      ],
      "keywords": [
        "private",
        "static"
      ]
    },
    "starterCode": "",
    "solution": "class FlightTicketConfig {\n    private static FlightTicketConfig instance;\n    private FlightTicketConfig() {}\n\n    public static FlightTicketConfig getInstance() {\n        if (instance == null) {\n            instance = new FlightTicketConfig();\n        }\n        return instance;\n    }\n\n    public void showStatus() {\n        System.out.println(\"UzAirways: Singleton faol\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FlightTicketConfig s1 = FlightTicketConfig.getInstance();\n        FlightTicketConfig s2 = FlightTicketConfig.getInstance();\n        System.out.println(\"Ikkala havola tengmi: \" + (s1 == s2));\n    }\n}",
    "detailedSolution": {
      "theory": "Singleton Pattern — butun dastur hayotida sinfdan faqat bitta yagona obyekt mavjud bo'lishini va unga hamma joydan yagona kirish nuqtasini ta'minlaydi.",
      "theoryEn": "Singleton ensures a class maintains exactly one instance across application runtime, accessed via a global static method.",
      "cleanCode": "private static FlightTicketConfig instance;\nprivate FlightTicketConfig() {}\npublic static FlightTicketConfig getInstance() {\n    if (instance == null) instance = new FlightTicketConfig();\n    return instance;\n}",
      "breakdown": [
        "<code>private FlightTicketConfig()</code>: Tashqaridan 'new' orqali ikkinchi obyekt yaratilishini mutlaqo taqiqlaydi."
      ],
      "pitfalls": "Konstruktorni 'public' qoldirish Singleton g'oyasini butunlay yo'qqa chiqaradi.",
      "cw2Tip": "CW2 da butun konsol dasturi uchun yagona 'OrderManager' yoki 'AppConfig' yaratishda Singleton qo'llaniladi."
    }
  },
  {
    "id": 9,
    "tier": 1,
    "tierName": "1-Bosqich: Creational Patterns (Singleton & Factory)",
    "sector": "GoF Creational",
    "title": {
      "uz": "9. IT Park Academy — Yagona Konfiguratsiya (Singleton Pattern)",
      "en": "9. IT Park Academy — Singleton Configuration Manager"
    },
    "scenario": {
      "uz": "IT Park Academy butun tizimda faqat bitta bo'lishi kerak bo'lgan 'BootcampCourseConfig' Singleton sinfini talab qiladi. Konstruktorni 'private' qiling va 'public static BootcampCourseConfig getInstance()' metodi orqali yagona instansni qaytaring.",
      "en": "Implement Thread-Safe Lazy Singleton 'BootcampCourseConfig' in IT Park Academy with private constructor and 'getInstance()'."
    },
    "requirements": {
      "classes": [
        "BootcampCourseConfig"
      ],
      "methods": [
        "getInstance"
      ],
      "keywords": [
        "private",
        "static"
      ]
    },
    "starterCode": "",
    "solution": "class BootcampCourseConfig {\n    private static BootcampCourseConfig instance;\n    private BootcampCourseConfig() {}\n\n    public static BootcampCourseConfig getInstance() {\n        if (instance == null) {\n            instance = new BootcampCourseConfig();\n        }\n        return instance;\n    }\n\n    public void showStatus() {\n        System.out.println(\"IT Park Academy: Singleton faol\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BootcampCourseConfig s1 = BootcampCourseConfig.getInstance();\n        BootcampCourseConfig s2 = BootcampCourseConfig.getInstance();\n        System.out.println(\"Ikkala havola tengmi: \" + (s1 == s2));\n    }\n}",
    "detailedSolution": {
      "theory": "Singleton Pattern — butun dastur hayotida sinfdan faqat bitta yagona obyekt mavjud bo'lishini va unga hamma joydan yagona kirish nuqtasini ta'minlaydi.",
      "theoryEn": "Singleton ensures a class maintains exactly one instance across application runtime, accessed via a global static method.",
      "cleanCode": "private static BootcampCourseConfig instance;\nprivate BootcampCourseConfig() {}\npublic static BootcampCourseConfig getInstance() {\n    if (instance == null) instance = new BootcampCourseConfig();\n    return instance;\n}",
      "breakdown": [
        "<code>private BootcampCourseConfig()</code>: Tashqaridan 'new' orqali ikkinchi obyekt yaratilishini mutlaqo taqiqlaydi."
      ],
      "pitfalls": "Konstruktorni 'public' qoldirish Singleton g'oyasini butunlay yo'qqa chiqaradi.",
      "cw2Tip": "CW2 da butun konsol dasturi uchun yagona 'OrderManager' yoki 'AppConfig' yaratishda Singleton qo'llaniladi."
    }
  },
  {
    "id": 10,
    "tier": 1,
    "tierName": "1-Bosqich: Creational Patterns (Singleton & Factory)",
    "sector": "GoF Creational",
    "title": {
      "uz": "10. Anorbank — Yagona Konfiguratsiya (Singleton Pattern)",
      "en": "10. Anorbank — Singleton Configuration Manager"
    },
    "scenario": {
      "uz": "Anorbank butun tizimda faqat bitta bo'lishi kerak bo'lgan 'DebitCardConfig' Singleton sinfini talab qiladi. Konstruktorni 'private' qiling va 'public static DebitCardConfig getInstance()' metodi orqali yagona instansni qaytaring.",
      "en": "Implement Thread-Safe Lazy Singleton 'DebitCardConfig' in Anorbank with private constructor and 'getInstance()'."
    },
    "requirements": {
      "classes": [
        "DebitCardConfig"
      ],
      "methods": [
        "getInstance"
      ],
      "keywords": [
        "private",
        "static"
      ]
    },
    "starterCode": "",
    "solution": "class DebitCardConfig {\n    private static DebitCardConfig instance;\n    private DebitCardConfig() {}\n\n    public static DebitCardConfig getInstance() {\n        if (instance == null) {\n            instance = new DebitCardConfig();\n        }\n        return instance;\n    }\n\n    public void showStatus() {\n        System.out.println(\"Anorbank: Singleton faol\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DebitCardConfig s1 = DebitCardConfig.getInstance();\n        DebitCardConfig s2 = DebitCardConfig.getInstance();\n        System.out.println(\"Ikkala havola tengmi: \" + (s1 == s2));\n    }\n}",
    "detailedSolution": {
      "theory": "Singleton Pattern — butun dastur hayotida sinfdan faqat bitta yagona obyekt mavjud bo'lishini va unga hamma joydan yagona kirish nuqtasini ta'minlaydi.",
      "theoryEn": "Singleton ensures a class maintains exactly one instance across application runtime, accessed via a global static method.",
      "cleanCode": "private static DebitCardConfig instance;\nprivate DebitCardConfig() {}\npublic static DebitCardConfig getInstance() {\n    if (instance == null) instance = new DebitCardConfig();\n    return instance;\n}",
      "breakdown": [
        "<code>private DebitCardConfig()</code>: Tashqaridan 'new' orqali ikkinchi obyekt yaratilishini mutlaqo taqiqlaydi."
      ],
      "pitfalls": "Konstruktorni 'public' qoldirish Singleton g'oyasini butunlay yo'qqa chiqaradi.",
      "cw2Tip": "CW2 da butun konsol dasturi uchun yagona 'OrderManager' yoki 'AppConfig' yaratishda Singleton qo'llaniladi."
    }
  },
  {
    "id": 11,
    "tier": 1,
    "tierName": "1-Bosqich: Creational Patterns (Singleton & Factory)",
    "sector": "GoF Creational",
    "title": {
      "uz": "11. Oson Apteka — Yagona Konfiguratsiya (Singleton Pattern)",
      "en": "11. Oson Apteka — Singleton Configuration Manager"
    },
    "scenario": {
      "uz": "Oson Apteka butun tizimda faqat bitta bo'lishi kerak bo'lgan 'MedicineConfig' Singleton sinfini talab qiladi. Konstruktorni 'private' qiling va 'public static MedicineConfig getInstance()' metodi orqali yagona instansni qaytaring.",
      "en": "Implement Thread-Safe Lazy Singleton 'MedicineConfig' in Oson Apteka with private constructor and 'getInstance()'."
    },
    "requirements": {
      "classes": [
        "MedicineConfig"
      ],
      "methods": [
        "getInstance"
      ],
      "keywords": [
        "private",
        "static"
      ]
    },
    "starterCode": "",
    "solution": "class MedicineConfig {\n    private static MedicineConfig instance;\n    private MedicineConfig() {}\n\n    public static MedicineConfig getInstance() {\n        if (instance == null) {\n            instance = new MedicineConfig();\n        }\n        return instance;\n    }\n\n    public void showStatus() {\n        System.out.println(\"Oson Apteka: Singleton faol\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MedicineConfig s1 = MedicineConfig.getInstance();\n        MedicineConfig s2 = MedicineConfig.getInstance();\n        System.out.println(\"Ikkala havola tengmi: \" + (s1 == s2));\n    }\n}",
    "detailedSolution": {
      "theory": "Singleton Pattern — butun dastur hayotida sinfdan faqat bitta yagona obyekt mavjud bo'lishini va unga hamma joydan yagona kirish nuqtasini ta'minlaydi.",
      "theoryEn": "Singleton ensures a class maintains exactly one instance across application runtime, accessed via a global static method.",
      "cleanCode": "private static MedicineConfig instance;\nprivate MedicineConfig() {}\npublic static MedicineConfig getInstance() {\n    if (instance == null) instance = new MedicineConfig();\n    return instance;\n}",
      "breakdown": [
        "<code>private MedicineConfig()</code>: Tashqaridan 'new' orqali ikkinchi obyekt yaratilishini mutlaqo taqiqlaydi."
      ],
      "pitfalls": "Konstruktorni 'public' qoldirish Singleton g'oyasini butunlay yo'qqa chiqaradi.",
      "cw2Tip": "CW2 da butun konsol dasturi uchun yagona 'OrderManager' yoki 'AppConfig' yaratishda Singleton qo'llaniladi."
    }
  },
  {
    "id": 12,
    "tier": 1,
    "tierName": "1-Bosqich: Creational Patterns (Singleton & Factory)",
    "sector": "GoF Creational",
    "title": {
      "uz": "12. Evos FastFood — Yagona Konfiguratsiya (Singleton Pattern)",
      "en": "12. Evos FastFood — Singleton Configuration Manager"
    },
    "scenario": {
      "uz": "Evos FastFood butun tizimda faqat bitta bo'lishi kerak bo'lgan 'FoodOrderConfig' Singleton sinfini talab qiladi. Konstruktorni 'private' qiling va 'public static FoodOrderConfig getInstance()' metodi orqali yagona instansni qaytaring.",
      "en": "Implement Thread-Safe Lazy Singleton 'FoodOrderConfig' in Evos FastFood with private constructor and 'getInstance()'."
    },
    "requirements": {
      "classes": [
        "FoodOrderConfig"
      ],
      "methods": [
        "getInstance"
      ],
      "keywords": [
        "private",
        "static"
      ]
    },
    "starterCode": "",
    "solution": "class FoodOrderConfig {\n    private static FoodOrderConfig instance;\n    private FoodOrderConfig() {}\n\n    public static FoodOrderConfig getInstance() {\n        if (instance == null) {\n            instance = new FoodOrderConfig();\n        }\n        return instance;\n    }\n\n    public void showStatus() {\n        System.out.println(\"Evos FastFood: Singleton faol\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FoodOrderConfig s1 = FoodOrderConfig.getInstance();\n        FoodOrderConfig s2 = FoodOrderConfig.getInstance();\n        System.out.println(\"Ikkala havola tengmi: \" + (s1 == s2));\n    }\n}",
    "detailedSolution": {
      "theory": "Singleton Pattern — butun dastur hayotida sinfdan faqat bitta yagona obyekt mavjud bo'lishini va unga hamma joydan yagona kirish nuqtasini ta'minlaydi.",
      "theoryEn": "Singleton ensures a class maintains exactly one instance across application runtime, accessed via a global static method.",
      "cleanCode": "private static FoodOrderConfig instance;\nprivate FoodOrderConfig() {}\npublic static FoodOrderConfig getInstance() {\n    if (instance == null) instance = new FoodOrderConfig();\n    return instance;\n}",
      "breakdown": [
        "<code>private FoodOrderConfig()</code>: Tashqaridan 'new' orqali ikkinchi obyekt yaratilishini mutlaqo taqiqlaydi."
      ],
      "pitfalls": "Konstruktorni 'public' qoldirish Singleton g'oyasini butunlay yo'qqa chiqaradi.",
      "cw2Tip": "CW2 da butun konsol dasturi uchun yagona 'OrderManager' yoki 'AppConfig' yaratishda Singleton qo'llaniladi."
    }
  },
  {
    "id": 13,
    "tier": 1,
    "tierName": "1-Bosqich: Creational Patterns (Singleton & Factory)",
    "sector": "GoF Creational",
    "title": {
      "uz": "13. Bellissimo Pizza — Yagona Konfiguratsiya (Singleton Pattern)",
      "en": "13. Bellissimo Pizza — Singleton Configuration Manager"
    },
    "scenario": {
      "uz": "Bellissimo Pizza butun tizimda faqat bitta bo'lishi kerak bo'lgan 'PizzaOrderConfig' Singleton sinfini talab qiladi. Konstruktorni 'private' qiling va 'public static PizzaOrderConfig getInstance()' metodi orqali yagona instansni qaytaring.",
      "en": "Implement Thread-Safe Lazy Singleton 'PizzaOrderConfig' in Bellissimo Pizza with private constructor and 'getInstance()'."
    },
    "requirements": {
      "classes": [
        "PizzaOrderConfig"
      ],
      "methods": [
        "getInstance"
      ],
      "keywords": [
        "private",
        "static"
      ]
    },
    "starterCode": "",
    "solution": "class PizzaOrderConfig {\n    private static PizzaOrderConfig instance;\n    private PizzaOrderConfig() {}\n\n    public static PizzaOrderConfig getInstance() {\n        if (instance == null) {\n            instance = new PizzaOrderConfig();\n        }\n        return instance;\n    }\n\n    public void showStatus() {\n        System.out.println(\"Bellissimo Pizza: Singleton faol\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PizzaOrderConfig s1 = PizzaOrderConfig.getInstance();\n        PizzaOrderConfig s2 = PizzaOrderConfig.getInstance();\n        System.out.println(\"Ikkala havola tengmi: \" + (s1 == s2));\n    }\n}",
    "detailedSolution": {
      "theory": "Singleton Pattern — butun dastur hayotida sinfdan faqat bitta yagona obyekt mavjud bo'lishini va unga hamma joydan yagona kirish nuqtasini ta'minlaydi.",
      "theoryEn": "Singleton ensures a class maintains exactly one instance across application runtime, accessed via a global static method.",
      "cleanCode": "private static PizzaOrderConfig instance;\nprivate PizzaOrderConfig() {}\npublic static PizzaOrderConfig getInstance() {\n    if (instance == null) instance = new PizzaOrderConfig();\n    return instance;\n}",
      "breakdown": [
        "<code>private PizzaOrderConfig()</code>: Tashqaridan 'new' orqali ikkinchi obyekt yaratilishini mutlaqo taqiqlaydi."
      ],
      "pitfalls": "Konstruktorni 'public' qoldirish Singleton g'oyasini butunlay yo'qqa chiqaradi.",
      "cw2Tip": "CW2 da butun konsol dasturi uchun yagona 'OrderManager' yoki 'AppConfig' yaratishda Singleton qo'llaniladi."
    }
  },
  {
    "id": 14,
    "tier": 1,
    "tierName": "1-Bosqich: Creational Patterns (Singleton & Factory)",
    "sector": "GoF Creational",
    "title": {
      "uz": "14. Milliy TV — Yagona Konfiguratsiya (Singleton Pattern)",
      "en": "14. Milliy TV — Singleton Configuration Manager"
    },
    "scenario": {
      "uz": "Milliy TV butun tizimda faqat bitta bo'lishi kerak bo'lgan 'BroadcastShowConfig' Singleton sinfini talab qiladi. Konstruktorni 'private' qiling va 'public static BroadcastShowConfig getInstance()' metodi orqali yagona instansni qaytaring.",
      "en": "Implement Thread-Safe Lazy Singleton 'BroadcastShowConfig' in Milliy TV with private constructor and 'getInstance()'."
    },
    "requirements": {
      "classes": [
        "BroadcastShowConfig"
      ],
      "methods": [
        "getInstance"
      ],
      "keywords": [
        "private",
        "static"
      ]
    },
    "starterCode": "",
    "solution": "class BroadcastShowConfig {\n    private static BroadcastShowConfig instance;\n    private BroadcastShowConfig() {}\n\n    public static BroadcastShowConfig getInstance() {\n        if (instance == null) {\n            instance = new BroadcastShowConfig();\n        }\n        return instance;\n    }\n\n    public void showStatus() {\n        System.out.println(\"Milliy TV: Singleton faol\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BroadcastShowConfig s1 = BroadcastShowConfig.getInstance();\n        BroadcastShowConfig s2 = BroadcastShowConfig.getInstance();\n        System.out.println(\"Ikkala havola tengmi: \" + (s1 == s2));\n    }\n}",
    "detailedSolution": {
      "theory": "Singleton Pattern — butun dastur hayotida sinfdan faqat bitta yagona obyekt mavjud bo'lishini va unga hamma joydan yagona kirish nuqtasini ta'minlaydi.",
      "theoryEn": "Singleton ensures a class maintains exactly one instance across application runtime, accessed via a global static method.",
      "cleanCode": "private static BroadcastShowConfig instance;\nprivate BroadcastShowConfig() {}\npublic static BroadcastShowConfig getInstance() {\n    if (instance == null) instance = new BroadcastShowConfig();\n    return instance;\n}",
      "breakdown": [
        "<code>private BroadcastShowConfig()</code>: Tashqaridan 'new' orqali ikkinchi obyekt yaratilishini mutlaqo taqiqlaydi."
      ],
      "pitfalls": "Konstruktorni 'public' qoldirish Singleton g'oyasini butunlay yo'qqa chiqaradi.",
      "cw2Tip": "CW2 da butun konsol dasturi uchun yagona 'OrderManager' yoki 'AppConfig' yaratishda Singleton qo'llaniladi."
    }
  },
  {
    "id": 15,
    "tier": 1,
    "tierName": "1-Bosqich: Creational Patterns (Singleton & Factory)",
    "sector": "GoF Creational",
    "title": {
      "uz": "15. Spotify Sound — Yagona Konfiguratsiya (Singleton Pattern)",
      "en": "15. Spotify Sound — Singleton Configuration Manager"
    },
    "scenario": {
      "uz": "Spotify Sound butun tizimda faqat bitta bo'lishi kerak bo'lgan 'AudioTrackConfig' Singleton sinfini talab qiladi. Konstruktorni 'private' qiling va 'public static AudioTrackConfig getInstance()' metodi orqali yagona instansni qaytaring.",
      "en": "Implement Thread-Safe Lazy Singleton 'AudioTrackConfig' in Spotify Sound with private constructor and 'getInstance()'."
    },
    "requirements": {
      "classes": [
        "AudioTrackConfig"
      ],
      "methods": [
        "getInstance"
      ],
      "keywords": [
        "private",
        "static"
      ]
    },
    "starterCode": "",
    "solution": "class AudioTrackConfig {\n    private static AudioTrackConfig instance;\n    private AudioTrackConfig() {}\n\n    public static AudioTrackConfig getInstance() {\n        if (instance == null) {\n            instance = new AudioTrackConfig();\n        }\n        return instance;\n    }\n\n    public void showStatus() {\n        System.out.println(\"Spotify Sound: Singleton faol\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AudioTrackConfig s1 = AudioTrackConfig.getInstance();\n        AudioTrackConfig s2 = AudioTrackConfig.getInstance();\n        System.out.println(\"Ikkala havola tengmi: \" + (s1 == s2));\n    }\n}",
    "detailedSolution": {
      "theory": "Singleton Pattern — butun dastur hayotida sinfdan faqat bitta yagona obyekt mavjud bo'lishini va unga hamma joydan yagona kirish nuqtasini ta'minlaydi.",
      "theoryEn": "Singleton ensures a class maintains exactly one instance across application runtime, accessed via a global static method.",
      "cleanCode": "private static AudioTrackConfig instance;\nprivate AudioTrackConfig() {}\npublic static AudioTrackConfig getInstance() {\n    if (instance == null) instance = new AudioTrackConfig();\n    return instance;\n}",
      "breakdown": [
        "<code>private AudioTrackConfig()</code>: Tashqaridan 'new' orqali ikkinchi obyekt yaratilishini mutlaqo taqiqlaydi."
      ],
      "pitfalls": "Konstruktorni 'public' qoldirish Singleton g'oyasini butunlay yo'qqa chiqaradi.",
      "cw2Tip": "CW2 da butun konsol dasturi uchun yagona 'OrderManager' yoki 'AppConfig' yaratishda Singleton qo'llaniladi."
    }
  },
  {
    "id": 16,
    "tier": 1,
    "tierName": "1-Bosqich: Creational Patterns (Singleton & Factory)",
    "sector": "GoF Creational",
    "title": {
      "uz": "16. Smart Thermostat — Yagona Konfiguratsiya (Singleton Pattern)",
      "en": "16. Smart Thermostat — Singleton Configuration Manager"
    },
    "scenario": {
      "uz": "Smart Thermostat butun tizimda faqat bitta bo'lishi kerak bo'lgan 'ThermostatConfig' Singleton sinfini talab qiladi. Konstruktorni 'private' qiling va 'public static ThermostatConfig getInstance()' metodi orqali yagona instansni qaytaring.",
      "en": "Implement Thread-Safe Lazy Singleton 'ThermostatConfig' in Smart Thermostat with private constructor and 'getInstance()'."
    },
    "requirements": {
      "classes": [
        "ThermostatConfig"
      ],
      "methods": [
        "getInstance"
      ],
      "keywords": [
        "private",
        "static"
      ]
    },
    "starterCode": "",
    "solution": "class ThermostatConfig {\n    private static ThermostatConfig instance;\n    private ThermostatConfig() {}\n\n    public static ThermostatConfig getInstance() {\n        if (instance == null) {\n            instance = new ThermostatConfig();\n        }\n        return instance;\n    }\n\n    public void showStatus() {\n        System.out.println(\"Smart Thermostat: Singleton faol\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ThermostatConfig s1 = ThermostatConfig.getInstance();\n        ThermostatConfig s2 = ThermostatConfig.getInstance();\n        System.out.println(\"Ikkala havola tengmi: \" + (s1 == s2));\n    }\n}",
    "detailedSolution": {
      "theory": "Singleton Pattern — butun dastur hayotida sinfdan faqat bitta yagona obyekt mavjud bo'lishini va unga hamma joydan yagona kirish nuqtasini ta'minlaydi.",
      "theoryEn": "Singleton ensures a class maintains exactly one instance across application runtime, accessed via a global static method.",
      "cleanCode": "private static ThermostatConfig instance;\nprivate ThermostatConfig() {}\npublic static ThermostatConfig getInstance() {\n    if (instance == null) instance = new ThermostatConfig();\n    return instance;\n}",
      "breakdown": [
        "<code>private ThermostatConfig()</code>: Tashqaridan 'new' orqali ikkinchi obyekt yaratilishini mutlaqo taqiqlaydi."
      ],
      "pitfalls": "Konstruktorni 'public' qoldirish Singleton g'oyasini butunlay yo'qqa chiqaradi.",
      "cw2Tip": "CW2 da butun konsol dasturi uchun yagona 'OrderManager' yoki 'AppConfig' yaratishda Singleton qo'llaniladi."
    }
  },
  {
    "id": 17,
    "tier": 1,
    "tierName": "1-Bosqich: Creational Patterns (Singleton & Factory)",
    "sector": "GoF Creational",
    "title": {
      "uz": "17. Drone Delivery — Yagona Konfiguratsiya (Singleton Pattern)",
      "en": "17. Drone Delivery — Singleton Configuration Manager"
    },
    "scenario": {
      "uz": "Drone Delivery butun tizimda faqat bitta bo'lishi kerak bo'lgan 'DeliveryDroneConfig' Singleton sinfini talab qiladi. Konstruktorni 'private' qiling va 'public static DeliveryDroneConfig getInstance()' metodi orqali yagona instansni qaytaring.",
      "en": "Implement Thread-Safe Lazy Singleton 'DeliveryDroneConfig' in Drone Delivery with private constructor and 'getInstance()'."
    },
    "requirements": {
      "classes": [
        "DeliveryDroneConfig"
      ],
      "methods": [
        "getInstance"
      ],
      "keywords": [
        "private",
        "static"
      ]
    },
    "starterCode": "",
    "solution": "class DeliveryDroneConfig {\n    private static DeliveryDroneConfig instance;\n    private DeliveryDroneConfig() {}\n\n    public static DeliveryDroneConfig getInstance() {\n        if (instance == null) {\n            instance = new DeliveryDroneConfig();\n        }\n        return instance;\n    }\n\n    public void showStatus() {\n        System.out.println(\"Drone Delivery: Singleton faol\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DeliveryDroneConfig s1 = DeliveryDroneConfig.getInstance();\n        DeliveryDroneConfig s2 = DeliveryDroneConfig.getInstance();\n        System.out.println(\"Ikkala havola tengmi: \" + (s1 == s2));\n    }\n}",
    "detailedSolution": {
      "theory": "Singleton Pattern — butun dastur hayotida sinfdan faqat bitta yagona obyekt mavjud bo'lishini va unga hamma joydan yagona kirish nuqtasini ta'minlaydi.",
      "theoryEn": "Singleton ensures a class maintains exactly one instance across application runtime, accessed via a global static method.",
      "cleanCode": "private static DeliveryDroneConfig instance;\nprivate DeliveryDroneConfig() {}\npublic static DeliveryDroneConfig getInstance() {\n    if (instance == null) instance = new DeliveryDroneConfig();\n    return instance;\n}",
      "breakdown": [
        "<code>private DeliveryDroneConfig()</code>: Tashqaridan 'new' orqali ikkinchi obyekt yaratilishini mutlaqo taqiqlaydi."
      ],
      "pitfalls": "Konstruktorni 'public' qoldirish Singleton g'oyasini butunlay yo'qqa chiqaradi.",
      "cw2Tip": "CW2 da butun konsol dasturi uchun yagona 'OrderManager' yoki 'AppConfig' yaratishda Singleton qo'llaniladi."
    }
  },
  {
    "id": 18,
    "tier": 1,
    "tierName": "1-Bosqich: Creational Patterns (Singleton & Factory)",
    "sector": "GoF Creational",
    "title": {
      "uz": "18. Smart Warehouse — Yagona Konfiguratsiya (Singleton Pattern)",
      "en": "18. Smart Warehouse — Singleton Configuration Manager"
    },
    "scenario": {
      "uz": "Smart Warehouse butun tizimda faqat bitta bo'lishi kerak bo'lgan 'StorageBayConfig' Singleton sinfini talab qiladi. Konstruktorni 'private' qiling va 'public static StorageBayConfig getInstance()' metodi orqali yagona instansni qaytaring.",
      "en": "Implement Thread-Safe Lazy Singleton 'StorageBayConfig' in Smart Warehouse with private constructor and 'getInstance()'."
    },
    "requirements": {
      "classes": [
        "StorageBayConfig"
      ],
      "methods": [
        "getInstance"
      ],
      "keywords": [
        "private",
        "static"
      ]
    },
    "starterCode": "",
    "solution": "class StorageBayConfig {\n    private static StorageBayConfig instance;\n    private StorageBayConfig() {}\n\n    public static StorageBayConfig getInstance() {\n        if (instance == null) {\n            instance = new StorageBayConfig();\n        }\n        return instance;\n    }\n\n    public void showStatus() {\n        System.out.println(\"Smart Warehouse: Singleton faol\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StorageBayConfig s1 = StorageBayConfig.getInstance();\n        StorageBayConfig s2 = StorageBayConfig.getInstance();\n        System.out.println(\"Ikkala havola tengmi: \" + (s1 == s2));\n    }\n}",
    "detailedSolution": {
      "theory": "Singleton Pattern — butun dastur hayotida sinfdan faqat bitta yagona obyekt mavjud bo'lishini va unga hamma joydan yagona kirish nuqtasini ta'minlaydi.",
      "theoryEn": "Singleton ensures a class maintains exactly one instance across application runtime, accessed via a global static method.",
      "cleanCode": "private static StorageBayConfig instance;\nprivate StorageBayConfig() {}\npublic static StorageBayConfig getInstance() {\n    if (instance == null) instance = new StorageBayConfig();\n    return instance;\n}",
      "breakdown": [
        "<code>private StorageBayConfig()</code>: Tashqaridan 'new' orqali ikkinchi obyekt yaratilishini mutlaqo taqiqlaydi."
      ],
      "pitfalls": "Konstruktorni 'public' qoldirish Singleton g'oyasini butunlay yo'qqa chiqaradi.",
      "cw2Tip": "CW2 da butun konsol dasturi uchun yagona 'OrderManager' yoki 'AppConfig' yaratishda Singleton qo'llaniladi."
    }
  },
  {
    "id": 19,
    "tier": 1,
    "tierName": "1-Bosqich: Creational Patterns (Singleton & Factory)",
    "sector": "GoF Creational",
    "title": {
      "uz": "19. Crypto Wallet — Yagona Konfiguratsiya (Singleton Pattern)",
      "en": "19. Crypto Wallet — Singleton Configuration Manager"
    },
    "scenario": {
      "uz": "Crypto Wallet butun tizimda faqat bitta bo'lishi kerak bo'lgan 'CryptoAssetConfig' Singleton sinfini talab qiladi. Konstruktorni 'private' qiling va 'public static CryptoAssetConfig getInstance()' metodi orqali yagona instansni qaytaring.",
      "en": "Implement Thread-Safe Lazy Singleton 'CryptoAssetConfig' in Crypto Wallet with private constructor and 'getInstance()'."
    },
    "requirements": {
      "classes": [
        "CryptoAssetConfig"
      ],
      "methods": [
        "getInstance"
      ],
      "keywords": [
        "private",
        "static"
      ]
    },
    "starterCode": "",
    "solution": "class CryptoAssetConfig {\n    private static CryptoAssetConfig instance;\n    private CryptoAssetConfig() {}\n\n    public static CryptoAssetConfig getInstance() {\n        if (instance == null) {\n            instance = new CryptoAssetConfig();\n        }\n        return instance;\n    }\n\n    public void showStatus() {\n        System.out.println(\"Crypto Wallet: Singleton faol\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CryptoAssetConfig s1 = CryptoAssetConfig.getInstance();\n        CryptoAssetConfig s2 = CryptoAssetConfig.getInstance();\n        System.out.println(\"Ikkala havola tengmi: \" + (s1 == s2));\n    }\n}",
    "detailedSolution": {
      "theory": "Singleton Pattern — butun dastur hayotida sinfdan faqat bitta yagona obyekt mavjud bo'lishini va unga hamma joydan yagona kirish nuqtasini ta'minlaydi.",
      "theoryEn": "Singleton ensures a class maintains exactly one instance across application runtime, accessed via a global static method.",
      "cleanCode": "private static CryptoAssetConfig instance;\nprivate CryptoAssetConfig() {}\npublic static CryptoAssetConfig getInstance() {\n    if (instance == null) instance = new CryptoAssetConfig();\n    return instance;\n}",
      "breakdown": [
        "<code>private CryptoAssetConfig()</code>: Tashqaridan 'new' orqali ikkinchi obyekt yaratilishini mutlaqo taqiqlaydi."
      ],
      "pitfalls": "Konstruktorni 'public' qoldirish Singleton g'oyasini butunlay yo'qqa chiqaradi.",
      "cw2Tip": "CW2 da butun konsol dasturi uchun yagona 'OrderManager' yoki 'AppConfig' yaratishda Singleton qo'llaniladi."
    }
  },
  {
    "id": 20,
    "tier": 1,
    "tierName": "1-Bosqich: Creational Patterns (Singleton & Factory)",
    "sector": "GoF Creational",
    "title": {
      "uz": "20. National Library — Yagona Konfiguratsiya (Singleton Pattern)",
      "en": "20. National Library — Singleton Configuration Manager"
    },
    "scenario": {
      "uz": "National Library butun tizimda faqat bitta bo'lishi kerak bo'lgan 'CatalogBookConfig' Singleton sinfini talab qiladi. Konstruktorni 'private' qiling va 'public static CatalogBookConfig getInstance()' metodi orqali yagona instansni qaytaring.",
      "en": "Implement Thread-Safe Lazy Singleton 'CatalogBookConfig' in National Library with private constructor and 'getInstance()'."
    },
    "requirements": {
      "classes": [
        "CatalogBookConfig"
      ],
      "methods": [
        "getInstance"
      ],
      "keywords": [
        "private",
        "static"
      ]
    },
    "starterCode": "",
    "solution": "class CatalogBookConfig {\n    private static CatalogBookConfig instance;\n    private CatalogBookConfig() {}\n\n    public static CatalogBookConfig getInstance() {\n        if (instance == null) {\n            instance = new CatalogBookConfig();\n        }\n        return instance;\n    }\n\n    public void showStatus() {\n        System.out.println(\"National Library: Singleton faol\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CatalogBookConfig s1 = CatalogBookConfig.getInstance();\n        CatalogBookConfig s2 = CatalogBookConfig.getInstance();\n        System.out.println(\"Ikkala havola tengmi: \" + (s1 == s2));\n    }\n}",
    "detailedSolution": {
      "theory": "Singleton Pattern — butun dastur hayotida sinfdan faqat bitta yagona obyekt mavjud bo'lishini va unga hamma joydan yagona kirish nuqtasini ta'minlaydi.",
      "theoryEn": "Singleton ensures a class maintains exactly one instance across application runtime, accessed via a global static method.",
      "cleanCode": "private static CatalogBookConfig instance;\nprivate CatalogBookConfig() {}\npublic static CatalogBookConfig getInstance() {\n    if (instance == null) instance = new CatalogBookConfig();\n    return instance;\n}",
      "breakdown": [
        "<code>private CatalogBookConfig()</code>: Tashqaridan 'new' orqali ikkinchi obyekt yaratilishini mutlaqo taqiqlaydi."
      ],
      "pitfalls": "Konstruktorni 'public' qoldirish Singleton g'oyasini butunlay yo'qqa chiqaradi.",
      "cw2Tip": "CW2 da butun konsol dasturi uchun yagona 'OrderManager' yoki 'AppConfig' yaratishda Singleton qo'llaniladi."
    }
  },
  {
    "id": 21,
    "tier": 1,
    "tierName": "1-Bosqich: Creational Patterns (Singleton & Factory)",
    "sector": "GoF Creational",
    "title": {
      "uz": "21. BeFit Club — Yagona Konfiguratsiya (Singleton Pattern)",
      "en": "21. BeFit Club — Singleton Configuration Manager"
    },
    "scenario": {
      "uz": "BeFit Club butun tizimda faqat bitta bo'lishi kerak bo'lgan 'GymMemberConfig' Singleton sinfini talab qiladi. Konstruktorni 'private' qiling va 'public static GymMemberConfig getInstance()' metodi orqali yagona instansni qaytaring.",
      "en": "Implement Thread-Safe Lazy Singleton 'GymMemberConfig' in BeFit Club with private constructor and 'getInstance()'."
    },
    "requirements": {
      "classes": [
        "GymMemberConfig"
      ],
      "methods": [
        "getInstance"
      ],
      "keywords": [
        "private",
        "static"
      ]
    },
    "starterCode": "",
    "solution": "class GymMemberConfig {\n    private static GymMemberConfig instance;\n    private GymMemberConfig() {}\n\n    public static GymMemberConfig getInstance() {\n        if (instance == null) {\n            instance = new GymMemberConfig();\n        }\n        return instance;\n    }\n\n    public void showStatus() {\n        System.out.println(\"BeFit Club: Singleton faol\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GymMemberConfig s1 = GymMemberConfig.getInstance();\n        GymMemberConfig s2 = GymMemberConfig.getInstance();\n        System.out.println(\"Ikkala havola tengmi: \" + (s1 == s2));\n    }\n}",
    "detailedSolution": {
      "theory": "Singleton Pattern — butun dastur hayotida sinfdan faqat bitta yagona obyekt mavjud bo'lishini va unga hamma joydan yagona kirish nuqtasini ta'minlaydi.",
      "theoryEn": "Singleton ensures a class maintains exactly one instance across application runtime, accessed via a global static method.",
      "cleanCode": "private static GymMemberConfig instance;\nprivate GymMemberConfig() {}\npublic static GymMemberConfig getInstance() {\n    if (instance == null) instance = new GymMemberConfig();\n    return instance;\n}",
      "breakdown": [
        "<code>private GymMemberConfig()</code>: Tashqaridan 'new' orqali ikkinchi obyekt yaratilishini mutlaqo taqiqlaydi."
      ],
      "pitfalls": "Konstruktorni 'public' qoldirish Singleton g'oyasini butunlay yo'qqa chiqaradi.",
      "cw2Tip": "CW2 da butun konsol dasturi uchun yagona 'OrderManager' yoki 'AppConfig' yaratishda Singleton qo'llaniladi."
    }
  },
  {
    "id": 22,
    "tier": 1,
    "tierName": "1-Bosqich: Creational Patterns (Singleton & Factory)",
    "sector": "GoF Creational",
    "title": {
      "uz": "22. Tashkent Parking — Yagona Konfiguratsiya (Singleton Pattern)",
      "en": "22. Tashkent Parking — Singleton Configuration Manager"
    },
    "scenario": {
      "uz": "Tashkent Parking butun tizimda faqat bitta bo'lishi kerak bo'lgan 'ParkingBayConfig' Singleton sinfini talab qiladi. Konstruktorni 'private' qiling va 'public static ParkingBayConfig getInstance()' metodi orqali yagona instansni qaytaring.",
      "en": "Implement Thread-Safe Lazy Singleton 'ParkingBayConfig' in Tashkent Parking with private constructor and 'getInstance()'."
    },
    "requirements": {
      "classes": [
        "ParkingBayConfig"
      ],
      "methods": [
        "getInstance"
      ],
      "keywords": [
        "private",
        "static"
      ]
    },
    "starterCode": "",
    "solution": "class ParkingBayConfig {\n    private static ParkingBayConfig instance;\n    private ParkingBayConfig() {}\n\n    public static ParkingBayConfig getInstance() {\n        if (instance == null) {\n            instance = new ParkingBayConfig();\n        }\n        return instance;\n    }\n\n    public void showStatus() {\n        System.out.println(\"Tashkent Parking: Singleton faol\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ParkingBayConfig s1 = ParkingBayConfig.getInstance();\n        ParkingBayConfig s2 = ParkingBayConfig.getInstance();\n        System.out.println(\"Ikkala havola tengmi: \" + (s1 == s2));\n    }\n}",
    "detailedSolution": {
      "theory": "Singleton Pattern — butun dastur hayotida sinfdan faqat bitta yagona obyekt mavjud bo'lishini va unga hamma joydan yagona kirish nuqtasini ta'minlaydi.",
      "theoryEn": "Singleton ensures a class maintains exactly one instance across application runtime, accessed via a global static method.",
      "cleanCode": "private static ParkingBayConfig instance;\nprivate ParkingBayConfig() {}\npublic static ParkingBayConfig getInstance() {\n    if (instance == null) instance = new ParkingBayConfig();\n    return instance;\n}",
      "breakdown": [
        "<code>private ParkingBayConfig()</code>: Tashqaridan 'new' orqali ikkinchi obyekt yaratilishini mutlaqo taqiqlaydi."
      ],
      "pitfalls": "Konstruktorni 'public' qoldirish Singleton g'oyasini butunlay yo'qqa chiqaradi.",
      "cw2Tip": "CW2 da butun konsol dasturi uchun yagona 'OrderManager' yoki 'AppConfig' yaratishda Singleton qo'llaniladi."
    }
  },
  {
    "id": 23,
    "tier": 1,
    "tierName": "1-Bosqich: Creational Patterns (Singleton & Factory)",
    "sector": "GoF Creational",
    "title": {
      "uz": "23. Medion Clinic — Yagona Konfiguratsiya (Singleton Pattern)",
      "en": "23. Medion Clinic — Singleton Configuration Manager"
    },
    "scenario": {
      "uz": "Medion Clinic butun tizimda faqat bitta bo'lishi kerak bo'lgan 'PatientRecordConfig' Singleton sinfini talab qiladi. Konstruktorni 'private' qiling va 'public static PatientRecordConfig getInstance()' metodi orqali yagona instansni qaytaring.",
      "en": "Implement Thread-Safe Lazy Singleton 'PatientRecordConfig' in Medion Clinic with private constructor and 'getInstance()'."
    },
    "requirements": {
      "classes": [
        "PatientRecordConfig"
      ],
      "methods": [
        "getInstance"
      ],
      "keywords": [
        "private",
        "static"
      ]
    },
    "starterCode": "",
    "solution": "class PatientRecordConfig {\n    private static PatientRecordConfig instance;\n    private PatientRecordConfig() {}\n\n    public static PatientRecordConfig getInstance() {\n        if (instance == null) {\n            instance = new PatientRecordConfig();\n        }\n        return instance;\n    }\n\n    public void showStatus() {\n        System.out.println(\"Medion Clinic: Singleton faol\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PatientRecordConfig s1 = PatientRecordConfig.getInstance();\n        PatientRecordConfig s2 = PatientRecordConfig.getInstance();\n        System.out.println(\"Ikkala havola tengmi: \" + (s1 == s2));\n    }\n}",
    "detailedSolution": {
      "theory": "Singleton Pattern — butun dastur hayotida sinfdan faqat bitta yagona obyekt mavjud bo'lishini va unga hamma joydan yagona kirish nuqtasini ta'minlaydi.",
      "theoryEn": "Singleton ensures a class maintains exactly one instance across application runtime, accessed via a global static method.",
      "cleanCode": "private static PatientRecordConfig instance;\nprivate PatientRecordConfig() {}\npublic static PatientRecordConfig getInstance() {\n    if (instance == null) instance = new PatientRecordConfig();\n    return instance;\n}",
      "breakdown": [
        "<code>private PatientRecordConfig()</code>: Tashqaridan 'new' orqali ikkinchi obyekt yaratilishini mutlaqo taqiqlaydi."
      ],
      "pitfalls": "Konstruktorni 'public' qoldirish Singleton g'oyasini butunlay yo'qqa chiqaradi.",
      "cw2Tip": "CW2 da butun konsol dasturi uchun yagona 'OrderManager' yoki 'AppConfig' yaratishda Singleton qo'llaniladi."
    }
  },
  {
    "id": 24,
    "tier": 1,
    "tierName": "1-Bosqich: Creational Patterns (Singleton & Factory)",
    "sector": "GoF Creational",
    "title": {
      "uz": "24. Hyatt Regency — Yagona Konfiguratsiya (Singleton Pattern)",
      "en": "24. Hyatt Regency — Singleton Configuration Manager"
    },
    "scenario": {
      "uz": "Hyatt Regency butun tizimda faqat bitta bo'lishi kerak bo'lgan 'HotelReservationConfig' Singleton sinfini talab qiladi. Konstruktorni 'private' qiling va 'public static HotelReservationConfig getInstance()' metodi orqali yagona instansni qaytaring.",
      "en": "Implement Thread-Safe Lazy Singleton 'HotelReservationConfig' in Hyatt Regency with private constructor and 'getInstance()'."
    },
    "requirements": {
      "classes": [
        "HotelReservationConfig"
      ],
      "methods": [
        "getInstance"
      ],
      "keywords": [
        "private",
        "static"
      ]
    },
    "starterCode": "",
    "solution": "class HotelReservationConfig {\n    private static HotelReservationConfig instance;\n    private HotelReservationConfig() {}\n\n    public static HotelReservationConfig getInstance() {\n        if (instance == null) {\n            instance = new HotelReservationConfig();\n        }\n        return instance;\n    }\n\n    public void showStatus() {\n        System.out.println(\"Hyatt Regency: Singleton faol\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        HotelReservationConfig s1 = HotelReservationConfig.getInstance();\n        HotelReservationConfig s2 = HotelReservationConfig.getInstance();\n        System.out.println(\"Ikkala havola tengmi: \" + (s1 == s2));\n    }\n}",
    "detailedSolution": {
      "theory": "Singleton Pattern — butun dastur hayotida sinfdan faqat bitta yagona obyekt mavjud bo'lishini va unga hamma joydan yagona kirish nuqtasini ta'minlaydi.",
      "theoryEn": "Singleton ensures a class maintains exactly one instance across application runtime, accessed via a global static method.",
      "cleanCode": "private static HotelReservationConfig instance;\nprivate HotelReservationConfig() {}\npublic static HotelReservationConfig getInstance() {\n    if (instance == null) instance = new HotelReservationConfig();\n    return instance;\n}",
      "breakdown": [
        "<code>private HotelReservationConfig()</code>: Tashqaridan 'new' orqali ikkinchi obyekt yaratilishini mutlaqo taqiqlaydi."
      ],
      "pitfalls": "Konstruktorni 'public' qoldirish Singleton g'oyasini butunlay yo'qqa chiqaradi.",
      "cw2Tip": "CW2 da butun konsol dasturi uchun yagona 'OrderManager' yoki 'AppConfig' yaratishda Singleton qo'llaniladi."
    }
  },
  {
    "id": 25,
    "tier": 1,
    "tierName": "1-Bosqich: Creational Patterns (Singleton & Factory)",
    "sector": "GoF Creational",
    "title": {
      "uz": "25. Premier Cinema — Yagona Konfiguratsiya (Singleton Pattern)",
      "en": "25. Premier Cinema — Singleton Configuration Manager"
    },
    "scenario": {
      "uz": "Premier Cinema butun tizimda faqat bitta bo'lishi kerak bo'lgan 'CinemaTicketConfig' Singleton sinfini talab qiladi. Konstruktorni 'private' qiling va 'public static CinemaTicketConfig getInstance()' metodi orqali yagona instansni qaytaring.",
      "en": "Implement Thread-Safe Lazy Singleton 'CinemaTicketConfig' in Premier Cinema with private constructor and 'getInstance()'."
    },
    "requirements": {
      "classes": [
        "CinemaTicketConfig"
      ],
      "methods": [
        "getInstance"
      ],
      "keywords": [
        "private",
        "static"
      ]
    },
    "starterCode": "",
    "solution": "class CinemaTicketConfig {\n    private static CinemaTicketConfig instance;\n    private CinemaTicketConfig() {}\n\n    public static CinemaTicketConfig getInstance() {\n        if (instance == null) {\n            instance = new CinemaTicketConfig();\n        }\n        return instance;\n    }\n\n    public void showStatus() {\n        System.out.println(\"Premier Cinema: Singleton faol\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CinemaTicketConfig s1 = CinemaTicketConfig.getInstance();\n        CinemaTicketConfig s2 = CinemaTicketConfig.getInstance();\n        System.out.println(\"Ikkala havola tengmi: \" + (s1 == s2));\n    }\n}",
    "detailedSolution": {
      "theory": "Singleton Pattern — butun dastur hayotida sinfdan faqat bitta yagona obyekt mavjud bo'lishini va unga hamma joydan yagona kirish nuqtasini ta'minlaydi.",
      "theoryEn": "Singleton ensures a class maintains exactly one instance across application runtime, accessed via a global static method.",
      "cleanCode": "private static CinemaTicketConfig instance;\nprivate CinemaTicketConfig() {}\npublic static CinemaTicketConfig getInstance() {\n    if (instance == null) instance = new CinemaTicketConfig();\n    return instance;\n}",
      "breakdown": [
        "<code>private CinemaTicketConfig()</code>: Tashqaridan 'new' orqali ikkinchi obyekt yaratilishini mutlaqo taqiqlaydi."
      ],
      "pitfalls": "Konstruktorni 'public' qoldirish Singleton g'oyasini butunlay yo'qqa chiqaradi.",
      "cw2Tip": "CW2 da butun konsol dasturi uchun yagona 'OrderManager' yoki 'AppConfig' yaratishda Singleton qo'llaniladi."
    }
  },
  {
    "id": 26,
    "tier": 1,
    "tierName": "1-Bosqich: Creational Patterns (Singleton & Factory)",
    "sector": "GoF Creational",
    "title": {
      "uz": "26. Yandex Scooter — Yagona Konfiguratsiya (Singleton Pattern)",
      "en": "26. Yandex Scooter — Singleton Configuration Manager"
    },
    "scenario": {
      "uz": "Yandex Scooter butun tizimda faqat bitta bo'lishi kerak bo'lgan 'ElectricScooterConfig' Singleton sinfini talab qiladi. Konstruktorni 'private' qiling va 'public static ElectricScooterConfig getInstance()' metodi orqali yagona instansni qaytaring.",
      "en": "Implement Thread-Safe Lazy Singleton 'ElectricScooterConfig' in Yandex Scooter with private constructor and 'getInstance()'."
    },
    "requirements": {
      "classes": [
        "ElectricScooterConfig"
      ],
      "methods": [
        "getInstance"
      ],
      "keywords": [
        "private",
        "static"
      ]
    },
    "starterCode": "",
    "solution": "class ElectricScooterConfig {\n    private static ElectricScooterConfig instance;\n    private ElectricScooterConfig() {}\n\n    public static ElectricScooterConfig getInstance() {\n        if (instance == null) {\n            instance = new ElectricScooterConfig();\n        }\n        return instance;\n    }\n\n    public void showStatus() {\n        System.out.println(\"Yandex Scooter: Singleton faol\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ElectricScooterConfig s1 = ElectricScooterConfig.getInstance();\n        ElectricScooterConfig s2 = ElectricScooterConfig.getInstance();\n        System.out.println(\"Ikkala havola tengmi: \" + (s1 == s2));\n    }\n}",
    "detailedSolution": {
      "theory": "Singleton Pattern — butun dastur hayotida sinfdan faqat bitta yagona obyekt mavjud bo'lishini va unga hamma joydan yagona kirish nuqtasini ta'minlaydi.",
      "theoryEn": "Singleton ensures a class maintains exactly one instance across application runtime, accessed via a global static method.",
      "cleanCode": "private static ElectricScooterConfig instance;\nprivate ElectricScooterConfig() {}\npublic static ElectricScooterConfig getInstance() {\n    if (instance == null) instance = new ElectricScooterConfig();\n    return instance;\n}",
      "breakdown": [
        "<code>private ElectricScooterConfig()</code>: Tashqaridan 'new' orqali ikkinchi obyekt yaratilishini mutlaqo taqiqlaydi."
      ],
      "pitfalls": "Konstruktorni 'public' qoldirish Singleton g'oyasini butunlay yo'qqa chiqaradi.",
      "cw2Tip": "CW2 da butun konsol dasturi uchun yagona 'OrderManager' yoki 'AppConfig' yaratishda Singleton qo'llaniladi."
    }
  },
  {
    "id": 27,
    "tier": 1,
    "tierName": "1-Bosqich: Creational Patterns (Singleton & Factory)",
    "sector": "GoF Creational",
    "title": {
      "uz": "27. Weather Network — Yagona Konfiguratsiya (Singleton Pattern)",
      "en": "27. Weather Network — Singleton Configuration Manager"
    },
    "scenario": {
      "uz": "Weather Network butun tizimda faqat bitta bo'lishi kerak bo'lgan 'MeteoStationConfig' Singleton sinfini talab qiladi. Konstruktorni 'private' qiling va 'public static MeteoStationConfig getInstance()' metodi orqali yagona instansni qaytaring.",
      "en": "Implement Thread-Safe Lazy Singleton 'MeteoStationConfig' in Weather Network with private constructor and 'getInstance()'."
    },
    "requirements": {
      "classes": [
        "MeteoStationConfig"
      ],
      "methods": [
        "getInstance"
      ],
      "keywords": [
        "private",
        "static"
      ]
    },
    "starterCode": "",
    "solution": "class MeteoStationConfig {\n    private static MeteoStationConfig instance;\n    private MeteoStationConfig() {}\n\n    public static MeteoStationConfig getInstance() {\n        if (instance == null) {\n            instance = new MeteoStationConfig();\n        }\n        return instance;\n    }\n\n    public void showStatus() {\n        System.out.println(\"Weather Network: Singleton faol\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MeteoStationConfig s1 = MeteoStationConfig.getInstance();\n        MeteoStationConfig s2 = MeteoStationConfig.getInstance();\n        System.out.println(\"Ikkala havola tengmi: \" + (s1 == s2));\n    }\n}",
    "detailedSolution": {
      "theory": "Singleton Pattern — butun dastur hayotida sinfdan faqat bitta yagona obyekt mavjud bo'lishini va unga hamma joydan yagona kirish nuqtasini ta'minlaydi.",
      "theoryEn": "Singleton ensures a class maintains exactly one instance across application runtime, accessed via a global static method.",
      "cleanCode": "private static MeteoStationConfig instance;\nprivate MeteoStationConfig() {}\npublic static MeteoStationConfig getInstance() {\n    if (instance == null) instance = new MeteoStationConfig();\n    return instance;\n}",
      "breakdown": [
        "<code>private MeteoStationConfig()</code>: Tashqaridan 'new' orqali ikkinchi obyekt yaratilishini mutlaqo taqiqlaydi."
      ],
      "pitfalls": "Konstruktorni 'public' qoldirish Singleton g'oyasini butunlay yo'qqa chiqaradi.",
      "cw2Tip": "CW2 da butun konsol dasturi uchun yagona 'OrderManager' yoki 'AppConfig' yaratishda Singleton qo'llaniladi."
    }
  },
  {
    "id": 28,
    "tier": 1,
    "tierName": "1-Bosqich: Creational Patterns (Singleton & Factory)",
    "sector": "GoF Creational",
    "title": {
      "uz": "28. OpenMarket Auction — Yagona Konfiguratsiya (Singleton Pattern)",
      "en": "28. OpenMarket Auction — Singleton Configuration Manager"
    },
    "scenario": {
      "uz": "OpenMarket Auction butun tizimda faqat bitta bo'lishi kerak bo'lgan 'AuctionLotConfig' Singleton sinfini talab qiladi. Konstruktorni 'private' qiling va 'public static AuctionLotConfig getInstance()' metodi orqali yagona instansni qaytaring.",
      "en": "Implement Thread-Safe Lazy Singleton 'AuctionLotConfig' in OpenMarket Auction with private constructor and 'getInstance()'."
    },
    "requirements": {
      "classes": [
        "AuctionLotConfig"
      ],
      "methods": [
        "getInstance"
      ],
      "keywords": [
        "private",
        "static"
      ]
    },
    "starterCode": "",
    "solution": "class AuctionLotConfig {\n    private static AuctionLotConfig instance;\n    private AuctionLotConfig() {}\n\n    public static AuctionLotConfig getInstance() {\n        if (instance == null) {\n            instance = new AuctionLotConfig();\n        }\n        return instance;\n    }\n\n    public void showStatus() {\n        System.out.println(\"OpenMarket Auction: Singleton faol\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AuctionLotConfig s1 = AuctionLotConfig.getInstance();\n        AuctionLotConfig s2 = AuctionLotConfig.getInstance();\n        System.out.println(\"Ikkala havola tengmi: \" + (s1 == s2));\n    }\n}",
    "detailedSolution": {
      "theory": "Singleton Pattern — butun dastur hayotida sinfdan faqat bitta yagona obyekt mavjud bo'lishini va unga hamma joydan yagona kirish nuqtasini ta'minlaydi.",
      "theoryEn": "Singleton ensures a class maintains exactly one instance across application runtime, accessed via a global static method.",
      "cleanCode": "private static AuctionLotConfig instance;\nprivate AuctionLotConfig() {}\npublic static AuctionLotConfig getInstance() {\n    if (instance == null) instance = new AuctionLotConfig();\n    return instance;\n}",
      "breakdown": [
        "<code>private AuctionLotConfig()</code>: Tashqaridan 'new' orqali ikkinchi obyekt yaratilishini mutlaqo taqiqlaydi."
      ],
      "pitfalls": "Konstruktorni 'public' qoldirish Singleton g'oyasini butunlay yo'qqa chiqaradi.",
      "cw2Tip": "CW2 da butun konsol dasturi uchun yagona 'OrderManager' yoki 'AppConfig' yaratishda Singleton qo'llaniladi."
    }
  },
  {
    "id": 29,
    "tier": 1,
    "tierName": "1-Bosqich: Creational Patterns (Singleton & Factory)",
    "sector": "GoF Creational",
    "title": {
      "uz": "29. Solar Energy Grid — Yagona Konfiguratsiya (Singleton Pattern)",
      "en": "29. Solar Energy Grid — Singleton Configuration Manager"
    },
    "scenario": {
      "uz": "Solar Energy Grid butun tizimda faqat bitta bo'lishi kerak bo'lgan 'SolarInverterConfig' Singleton sinfini talab qiladi. Konstruktorni 'private' qiling va 'public static SolarInverterConfig getInstance()' metodi orqali yagona instansni qaytaring.",
      "en": "Implement Thread-Safe Lazy Singleton 'SolarInverterConfig' in Solar Energy Grid with private constructor and 'getInstance()'."
    },
    "requirements": {
      "classes": [
        "SolarInverterConfig"
      ],
      "methods": [
        "getInstance"
      ],
      "keywords": [
        "private",
        "static"
      ]
    },
    "starterCode": "",
    "solution": "class SolarInverterConfig {\n    private static SolarInverterConfig instance;\n    private SolarInverterConfig() {}\n\n    public static SolarInverterConfig getInstance() {\n        if (instance == null) {\n            instance = new SolarInverterConfig();\n        }\n        return instance;\n    }\n\n    public void showStatus() {\n        System.out.println(\"Solar Energy Grid: Singleton faol\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SolarInverterConfig s1 = SolarInverterConfig.getInstance();\n        SolarInverterConfig s2 = SolarInverterConfig.getInstance();\n        System.out.println(\"Ikkala havola tengmi: \" + (s1 == s2));\n    }\n}",
    "detailedSolution": {
      "theory": "Singleton Pattern — butun dastur hayotida sinfdan faqat bitta yagona obyekt mavjud bo'lishini va unga hamma joydan yagona kirish nuqtasini ta'minlaydi.",
      "theoryEn": "Singleton ensures a class maintains exactly one instance across application runtime, accessed via a global static method.",
      "cleanCode": "private static SolarInverterConfig instance;\nprivate SolarInverterConfig() {}\npublic static SolarInverterConfig getInstance() {\n    if (instance == null) instance = new SolarInverterConfig();\n    return instance;\n}",
      "breakdown": [
        "<code>private SolarInverterConfig()</code>: Tashqaridan 'new' orqali ikkinchi obyekt yaratilishini mutlaqo taqiqlaydi."
      ],
      "pitfalls": "Konstruktorni 'public' qoldirish Singleton g'oyasini butunlay yo'qqa chiqaradi.",
      "cw2Tip": "CW2 da butun konsol dasturi uchun yagona 'OrderManager' yoki 'AppConfig' yaratishda Singleton qo'llaniladi."
    }
  },
  {
    "id": 30,
    "tier": 1,
    "tierName": "1-Bosqich: Creational Patterns (Singleton & Factory)",
    "sector": "GoF Creational",
    "title": {
      "uz": "30. O'zbekiston Temir Yo'llari — Yagona Konfiguratsiya (Singleton Pattern)",
      "en": "30. O'zbekiston Temir Yo'llari — Singleton Configuration Manager"
    },
    "scenario": {
      "uz": "O'zbekiston Temir Yo'llari butun tizimda faqat bitta bo'lishi kerak bo'lgan 'TrainRouteConfig' Singleton sinfini talab qiladi. Konstruktorni 'private' qiling va 'public static TrainRouteConfig getInstance()' metodi orqali yagona instansni qaytaring.",
      "en": "Implement Thread-Safe Lazy Singleton 'TrainRouteConfig' in O'zbekiston Temir Yo'llari with private constructor and 'getInstance()'."
    },
    "requirements": {
      "classes": [
        "TrainRouteConfig"
      ],
      "methods": [
        "getInstance"
      ],
      "keywords": [
        "private",
        "static"
      ]
    },
    "starterCode": "",
    "solution": "class TrainRouteConfig {\n    private static TrainRouteConfig instance;\n    private TrainRouteConfig() {}\n\n    public static TrainRouteConfig getInstance() {\n        if (instance == null) {\n            instance = new TrainRouteConfig();\n        }\n        return instance;\n    }\n\n    public void showStatus() {\n        System.out.println(\"O'zbekiston Temir Yo'llari: Singleton faol\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TrainRouteConfig s1 = TrainRouteConfig.getInstance();\n        TrainRouteConfig s2 = TrainRouteConfig.getInstance();\n        System.out.println(\"Ikkala havola tengmi: \" + (s1 == s2));\n    }\n}",
    "detailedSolution": {
      "theory": "Singleton Pattern — butun dastur hayotida sinfdan faqat bitta yagona obyekt mavjud bo'lishini va unga hamma joydan yagona kirish nuqtasini ta'minlaydi.",
      "theoryEn": "Singleton ensures a class maintains exactly one instance across application runtime, accessed via a global static method.",
      "cleanCode": "private static TrainRouteConfig instance;\nprivate TrainRouteConfig() {}\npublic static TrainRouteConfig getInstance() {\n    if (instance == null) instance = new TrainRouteConfig();\n    return instance;\n}",
      "breakdown": [
        "<code>private TrainRouteConfig()</code>: Tashqaridan 'new' orqali ikkinchi obyekt yaratilishini mutlaqo taqiqlaydi."
      ],
      "pitfalls": "Konstruktorni 'public' qoldirish Singleton g'oyasini butunlay yo'qqa chiqaradi.",
      "cw2Tip": "CW2 da butun konsol dasturi uchun yagona 'OrderManager' yoki 'AppConfig' yaratishda Singleton qo'llaniladi."
    }
  },
  {
    "id": 31,
    "tier": 2,
    "tierName": "2-Bosqich: Structural Patterns (Decorator Pattern)",
    "sector": "GoF Structural",
    "title": {
      "uz": "31. Uzum Market — Qo'shimcha Xususiyat (Decorator Pattern)",
      "en": "31. Uzum Market — Dynamic Behavior Decorator"
    },
    "scenario": {
      "uz": "Uzum Market da asosiy elementga merosxo'rliksiz qo'shimcha narx va xususiyat qo'shish kerak. 'ProductDecorator' sinfini tuzing: u 'ProductItem' obyektini o'rab olib, 'getCost()' narxiga +15.0 qo'shsin.",
      "en": "Implement Decorator pattern in Uzum Market to wrap 'ProductItem' and augment 'getCost()' by +15.0."
    },
    "requirements": {
      "classes": [
        "ProductItem",
        "ProductDecorator"
      ],
      "methods": [
        "getCost"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class ProductItem {\n    public double getCost() { return 50.0; }\n}\n\nclass ProductDecorator extends ProductItem {\n    private ProductItem wrapped;\n    public ProductDecorator(ProductItem wrapped) {\n        this.wrapped = wrapped;\n    }\n    @Override\n    public double getCost() {\n        return (wrapped != null ? wrapped.getCost() : 0.0) + 15.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ProductItem item = new ProductItem();\n        ProductItem decorated = new ProductDecorator(item);\n        System.out.println(\"Asl narx: $\" + item.getCost());\n        System.out.println(\"Bezatilgan narx: $\" + decorated.getCost());\n    }\n}",
    "detailedSolution": {
      "theory": "Decorator Pattern — ob'yektga yangi majburiyat yoki funksiyalarni dinamik (ish vaqtida) qo'shish imkonini beradi. Har bir yangi xususiyat uchun yangi sinf meros olish shart bo'lmaydi.",
      "theoryEn": "Decorator pattern dynamically attaches additional responsibilities to an object without subclass explosion.",
      "cleanCode": "class ProductDecorator extends ProductItem {\n    private ProductItem wrapped;\n    public ProductDecorator(ProductItem w) { this.wrapped = w; }\n    @Override public double getCost() { return wrapped.getCost() + 15.0; }\n}",
      "breakdown": [
        "<code>ProductDecorator extends ProductItem</code>: Ham o'ralayotgan ob'yekt turida bo'ladi, ham uni o'z ichida saqlaydi."
      ],
      "pitfalls": "O'ralgan obyekt 'null' bo'lganda 'wrapped.getCost()' NullPointerException chaqirmasligini ta'minlang.",
      "cw2Tip": "Kofe ustiga sut yoki sirop qo'shish, pitsaga pishloq qo'shish CW2 ning Decorator talabi hisoblanadi."
    }
  },
  {
    "id": 32,
    "tier": 2,
    "tierName": "2-Bosqich: Structural Patterns (Decorator Pattern)",
    "sector": "GoF Structural",
    "title": {
      "uz": "32. Payme Wallet — Qo'shimcha Xususiyat (Decorator Pattern)",
      "en": "32. Payme Wallet — Dynamic Behavior Decorator"
    },
    "scenario": {
      "uz": "Payme Wallet da asosiy elementga merosxo'rliksiz qo'shimcha narx va xususiyat qo'shish kerak. 'WalletUserDecorator' sinfini tuzing: u 'WalletUserItem' obyektini o'rab olib, 'getCost()' narxiga +15.0 qo'shsin.",
      "en": "Implement Decorator pattern in Payme Wallet to wrap 'WalletUserItem' and augment 'getCost()' by +15.0."
    },
    "requirements": {
      "classes": [
        "WalletUserItem",
        "WalletUserDecorator"
      ],
      "methods": [
        "getCost"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class WalletUserItem {\n    public double getCost() { return 50.0; }\n}\n\nclass WalletUserDecorator extends WalletUserItem {\n    private WalletUserItem wrapped;\n    public WalletUserDecorator(WalletUserItem wrapped) {\n        this.wrapped = wrapped;\n    }\n    @Override\n    public double getCost() {\n        return (wrapped != null ? wrapped.getCost() : 0.0) + 15.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WalletUserItem item = new WalletUserItem();\n        WalletUserItem decorated = new WalletUserDecorator(item);\n        System.out.println(\"Asl narx: $\" + item.getCost());\n        System.out.println(\"Bezatilgan narx: $\" + decorated.getCost());\n    }\n}",
    "detailedSolution": {
      "theory": "Decorator Pattern — ob'yektga yangi majburiyat yoki funksiyalarni dinamik (ish vaqtida) qo'shish imkonini beradi. Har bir yangi xususiyat uchun yangi sinf meros olish shart bo'lmaydi.",
      "theoryEn": "Decorator pattern dynamically attaches additional responsibilities to an object without subclass explosion.",
      "cleanCode": "class WalletUserDecorator extends WalletUserItem {\n    private WalletUserItem wrapped;\n    public WalletUserDecorator(WalletUserItem w) { this.wrapped = w; }\n    @Override public double getCost() { return wrapped.getCost() + 15.0; }\n}",
      "breakdown": [
        "<code>WalletUserDecorator extends WalletUserItem</code>: Ham o'ralayotgan ob'yekt turida bo'ladi, ham uni o'z ichida saqlaydi."
      ],
      "pitfalls": "O'ralgan obyekt 'null' bo'lganda 'wrapped.getCost()' NullPointerException chaqirmasligini ta'minlang.",
      "cw2Tip": "Kofe ustiga sut yoki sirop qo'shish, pitsaga pishloq qo'shish CW2 ning Decorator talabi hisoblanadi."
    }
  },
  {
    "id": 33,
    "tier": 2,
    "tierName": "2-Bosqich: Structural Patterns (Decorator Pattern)",
    "sector": "GoF Structural",
    "title": {
      "uz": "33. Yandex Go — Qo'shimcha Xususiyat (Decorator Pattern)",
      "en": "33. Yandex Go — Dynamic Behavior Decorator"
    },
    "scenario": {
      "uz": "Yandex Go da asosiy elementga merosxo'rliksiz qo'shimcha narx va xususiyat qo'shish kerak. 'TaxiRideDecorator' sinfini tuzing: u 'TaxiRideItem' obyektini o'rab olib, 'getCost()' narxiga +15.0 qo'shsin.",
      "en": "Implement Decorator pattern in Yandex Go to wrap 'TaxiRideItem' and augment 'getCost()' by +15.0."
    },
    "requirements": {
      "classes": [
        "TaxiRideItem",
        "TaxiRideDecorator"
      ],
      "methods": [
        "getCost"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class TaxiRideItem {\n    public double getCost() { return 50.0; }\n}\n\nclass TaxiRideDecorator extends TaxiRideItem {\n    private TaxiRideItem wrapped;\n    public TaxiRideDecorator(TaxiRideItem wrapped) {\n        this.wrapped = wrapped;\n    }\n    @Override\n    public double getCost() {\n        return (wrapped != null ? wrapped.getCost() : 0.0) + 15.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TaxiRideItem item = new TaxiRideItem();\n        TaxiRideItem decorated = new TaxiRideDecorator(item);\n        System.out.println(\"Asl narx: $\" + item.getCost());\n        System.out.println(\"Bezatilgan narx: $\" + decorated.getCost());\n    }\n}",
    "detailedSolution": {
      "theory": "Decorator Pattern — ob'yektga yangi majburiyat yoki funksiyalarni dinamik (ish vaqtida) qo'shish imkonini beradi. Har bir yangi xususiyat uchun yangi sinf meros olish shart bo'lmaydi.",
      "theoryEn": "Decorator pattern dynamically attaches additional responsibilities to an object without subclass explosion.",
      "cleanCode": "class TaxiRideDecorator extends TaxiRideItem {\n    private TaxiRideItem wrapped;\n    public TaxiRideDecorator(TaxiRideItem w) { this.wrapped = w; }\n    @Override public double getCost() { return wrapped.getCost() + 15.0; }\n}",
      "breakdown": [
        "<code>TaxiRideDecorator extends TaxiRideItem</code>: Ham o'ralayotgan ob'yekt turida bo'ladi, ham uni o'z ichida saqlaydi."
      ],
      "pitfalls": "O'ralgan obyekt 'null' bo'lganda 'wrapped.getCost()' NullPointerException chaqirmasligini ta'minlang.",
      "cw2Tip": "Kofe ustiga sut yoki sirop qo'shish, pitsaga pishloq qo'shish CW2 ning Decorator talabi hisoblanadi."
    }
  },
  {
    "id": 34,
    "tier": 2,
    "tierName": "2-Bosqich: Structural Patterns (Decorator Pattern)",
    "sector": "GoF Structural",
    "title": {
      "uz": "34. Korzinka Go — Qo'shimcha Xususiyat (Decorator Pattern)",
      "en": "34. Korzinka Go — Dynamic Behavior Decorator"
    },
    "scenario": {
      "uz": "Korzinka Go da asosiy elementga merosxo'rliksiz qo'shimcha narx va xususiyat qo'shish kerak. 'LoyaltyCardDecorator' sinfini tuzing: u 'LoyaltyCardItem' obyektini o'rab olib, 'getCost()' narxiga +15.0 qo'shsin.",
      "en": "Implement Decorator pattern in Korzinka Go to wrap 'LoyaltyCardItem' and augment 'getCost()' by +15.0."
    },
    "requirements": {
      "classes": [
        "LoyaltyCardItem",
        "LoyaltyCardDecorator"
      ],
      "methods": [
        "getCost"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class LoyaltyCardItem {\n    public double getCost() { return 50.0; }\n}\n\nclass LoyaltyCardDecorator extends LoyaltyCardItem {\n    private LoyaltyCardItem wrapped;\n    public LoyaltyCardDecorator(LoyaltyCardItem wrapped) {\n        this.wrapped = wrapped;\n    }\n    @Override\n    public double getCost() {\n        return (wrapped != null ? wrapped.getCost() : 0.0) + 15.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LoyaltyCardItem item = new LoyaltyCardItem();\n        LoyaltyCardItem decorated = new LoyaltyCardDecorator(item);\n        System.out.println(\"Asl narx: $\" + item.getCost());\n        System.out.println(\"Bezatilgan narx: $\" + decorated.getCost());\n    }\n}",
    "detailedSolution": {
      "theory": "Decorator Pattern — ob'yektga yangi majburiyat yoki funksiyalarni dinamik (ish vaqtida) qo'shish imkonini beradi. Har bir yangi xususiyat uchun yangi sinf meros olish shart bo'lmaydi.",
      "theoryEn": "Decorator pattern dynamically attaches additional responsibilities to an object without subclass explosion.",
      "cleanCode": "class LoyaltyCardDecorator extends LoyaltyCardItem {\n    private LoyaltyCardItem wrapped;\n    public LoyaltyCardDecorator(LoyaltyCardItem w) { this.wrapped = w; }\n    @Override public double getCost() { return wrapped.getCost() + 15.0; }\n}",
      "breakdown": [
        "<code>LoyaltyCardDecorator extends LoyaltyCardItem</code>: Ham o'ralayotgan ob'yekt turida bo'ladi, ham uni o'z ichida saqlaydi."
      ],
      "pitfalls": "O'ralgan obyekt 'null' bo'lganda 'wrapped.getCost()' NullPointerException chaqirmasligini ta'minlang.",
      "cw2Tip": "Kofe ustiga sut yoki sirop qo'shish, pitsaga pishloq qo'shish CW2 ning Decorator talabi hisoblanadi."
    }
  },
  {
    "id": 35,
    "tier": 2,
    "tierName": "2-Bosqich: Structural Patterns (Decorator Pattern)",
    "sector": "GoF Structural",
    "title": {
      "uz": "35. WIUT Portal — Qo'shimcha Xususiyat (Decorator Pattern)",
      "en": "35. WIUT Portal — Dynamic Behavior Decorator"
    },
    "scenario": {
      "uz": "WIUT Portal da asosiy elementga merosxo'rliksiz qo'shimcha narx va xususiyat qo'shish kerak. 'StudentDecorator' sinfini tuzing: u 'StudentItem' obyektini o'rab olib, 'getCost()' narxiga +15.0 qo'shsin.",
      "en": "Implement Decorator pattern in WIUT Portal to wrap 'StudentItem' and augment 'getCost()' by +15.0."
    },
    "requirements": {
      "classes": [
        "StudentItem",
        "StudentDecorator"
      ],
      "methods": [
        "getCost"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class StudentItem {\n    public double getCost() { return 50.0; }\n}\n\nclass StudentDecorator extends StudentItem {\n    private StudentItem wrapped;\n    public StudentDecorator(StudentItem wrapped) {\n        this.wrapped = wrapped;\n    }\n    @Override\n    public double getCost() {\n        return (wrapped != null ? wrapped.getCost() : 0.0) + 15.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StudentItem item = new StudentItem();\n        StudentItem decorated = new StudentDecorator(item);\n        System.out.println(\"Asl narx: $\" + item.getCost());\n        System.out.println(\"Bezatilgan narx: $\" + decorated.getCost());\n    }\n}",
    "detailedSolution": {
      "theory": "Decorator Pattern — ob'yektga yangi majburiyat yoki funksiyalarni dinamik (ish vaqtida) qo'shish imkonini beradi. Har bir yangi xususiyat uchun yangi sinf meros olish shart bo'lmaydi.",
      "theoryEn": "Decorator pattern dynamically attaches additional responsibilities to an object without subclass explosion.",
      "cleanCode": "class StudentDecorator extends StudentItem {\n    private StudentItem wrapped;\n    public StudentDecorator(StudentItem w) { this.wrapped = w; }\n    @Override public double getCost() { return wrapped.getCost() + 15.0; }\n}",
      "breakdown": [
        "<code>StudentDecorator extends StudentItem</code>: Ham o'ralayotgan ob'yekt turida bo'ladi, ham uni o'z ichida saqlaydi."
      ],
      "pitfalls": "O'ralgan obyekt 'null' bo'lganda 'wrapped.getCost()' NullPointerException chaqirmasligini ta'minlang.",
      "cw2Tip": "Kofe ustiga sut yoki sirop qo'shish, pitsaga pishloq qo'shish CW2 ning Decorator talabi hisoblanadi."
    }
  },
  {
    "id": 36,
    "tier": 2,
    "tierName": "2-Bosqich: Structural Patterns (Decorator Pattern)",
    "sector": "GoF Structural",
    "title": {
      "uz": "36. Click Pay — Qo'shimcha Xususiyat (Decorator Pattern)",
      "en": "36. Click Pay — Dynamic Behavior Decorator"
    },
    "scenario": {
      "uz": "Click Pay da asosiy elementga merosxo'rliksiz qo'shimcha narx va xususiyat qo'shish kerak. 'PaymentTxnDecorator' sinfini tuzing: u 'PaymentTxnItem' obyektini o'rab olib, 'getCost()' narxiga +15.0 qo'shsin.",
      "en": "Implement Decorator pattern in Click Pay to wrap 'PaymentTxnItem' and augment 'getCost()' by +15.0."
    },
    "requirements": {
      "classes": [
        "PaymentTxnItem",
        "PaymentTxnDecorator"
      ],
      "methods": [
        "getCost"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class PaymentTxnItem {\n    public double getCost() { return 50.0; }\n}\n\nclass PaymentTxnDecorator extends PaymentTxnItem {\n    private PaymentTxnItem wrapped;\n    public PaymentTxnDecorator(PaymentTxnItem wrapped) {\n        this.wrapped = wrapped;\n    }\n    @Override\n    public double getCost() {\n        return (wrapped != null ? wrapped.getCost() : 0.0) + 15.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentTxnItem item = new PaymentTxnItem();\n        PaymentTxnItem decorated = new PaymentTxnDecorator(item);\n        System.out.println(\"Asl narx: $\" + item.getCost());\n        System.out.println(\"Bezatilgan narx: $\" + decorated.getCost());\n    }\n}",
    "detailedSolution": {
      "theory": "Decorator Pattern — ob'yektga yangi majburiyat yoki funksiyalarni dinamik (ish vaqtida) qo'shish imkonini beradi. Har bir yangi xususiyat uchun yangi sinf meros olish shart bo'lmaydi.",
      "theoryEn": "Decorator pattern dynamically attaches additional responsibilities to an object without subclass explosion.",
      "cleanCode": "class PaymentTxnDecorator extends PaymentTxnItem {\n    private PaymentTxnItem wrapped;\n    public PaymentTxnDecorator(PaymentTxnItem w) { this.wrapped = w; }\n    @Override public double getCost() { return wrapped.getCost() + 15.0; }\n}",
      "breakdown": [
        "<code>PaymentTxnDecorator extends PaymentTxnItem</code>: Ham o'ralayotgan ob'yekt turida bo'ladi, ham uni o'z ichida saqlaydi."
      ],
      "pitfalls": "O'ralgan obyekt 'null' bo'lganda 'wrapped.getCost()' NullPointerException chaqirmasligini ta'minlang.",
      "cw2Tip": "Kofe ustiga sut yoki sirop qo'shish, pitsaga pishloq qo'shish CW2 ning Decorator talabi hisoblanadi."
    }
  },
  {
    "id": 37,
    "tier": 2,
    "tierName": "2-Bosqich: Structural Patterns (Decorator Pattern)",
    "sector": "GoF Structural",
    "title": {
      "uz": "37. Telegram Bot — Qo'shimcha Xususiyat (Decorator Pattern)",
      "en": "37. Telegram Bot — Dynamic Behavior Decorator"
    },
    "scenario": {
      "uz": "Telegram Bot da asosiy elementga merosxo'rliksiz qo'shimcha narx va xususiyat qo'shish kerak. 'BotMessageDecorator' sinfini tuzing: u 'BotMessageItem' obyektini o'rab olib, 'getCost()' narxiga +15.0 qo'shsin.",
      "en": "Implement Decorator pattern in Telegram Bot to wrap 'BotMessageItem' and augment 'getCost()' by +15.0."
    },
    "requirements": {
      "classes": [
        "BotMessageItem",
        "BotMessageDecorator"
      ],
      "methods": [
        "getCost"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class BotMessageItem {\n    public double getCost() { return 50.0; }\n}\n\nclass BotMessageDecorator extends BotMessageItem {\n    private BotMessageItem wrapped;\n    public BotMessageDecorator(BotMessageItem wrapped) {\n        this.wrapped = wrapped;\n    }\n    @Override\n    public double getCost() {\n        return (wrapped != null ? wrapped.getCost() : 0.0) + 15.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BotMessageItem item = new BotMessageItem();\n        BotMessageItem decorated = new BotMessageDecorator(item);\n        System.out.println(\"Asl narx: $\" + item.getCost());\n        System.out.println(\"Bezatilgan narx: $\" + decorated.getCost());\n    }\n}",
    "detailedSolution": {
      "theory": "Decorator Pattern — ob'yektga yangi majburiyat yoki funksiyalarni dinamik (ish vaqtida) qo'shish imkonini beradi. Har bir yangi xususiyat uchun yangi sinf meros olish shart bo'lmaydi.",
      "theoryEn": "Decorator pattern dynamically attaches additional responsibilities to an object without subclass explosion.",
      "cleanCode": "class BotMessageDecorator extends BotMessageItem {\n    private BotMessageItem wrapped;\n    public BotMessageDecorator(BotMessageItem w) { this.wrapped = w; }\n    @Override public double getCost() { return wrapped.getCost() + 15.0; }\n}",
      "breakdown": [
        "<code>BotMessageDecorator extends BotMessageItem</code>: Ham o'ralayotgan ob'yekt turida bo'ladi, ham uni o'z ichida saqlaydi."
      ],
      "pitfalls": "O'ralgan obyekt 'null' bo'lganda 'wrapped.getCost()' NullPointerException chaqirmasligini ta'minlang.",
      "cw2Tip": "Kofe ustiga sut yoki sirop qo'shish, pitsaga pishloq qo'shish CW2 ning Decorator talabi hisoblanadi."
    }
  },
  {
    "id": 38,
    "tier": 2,
    "tierName": "2-Bosqich: Structural Patterns (Decorator Pattern)",
    "sector": "GoF Structural",
    "title": {
      "uz": "38. UzAirways — Qo'shimcha Xususiyat (Decorator Pattern)",
      "en": "38. UzAirways — Dynamic Behavior Decorator"
    },
    "scenario": {
      "uz": "UzAirways da asosiy elementga merosxo'rliksiz qo'shimcha narx va xususiyat qo'shish kerak. 'FlightTicketDecorator' sinfini tuzing: u 'FlightTicketItem' obyektini o'rab olib, 'getCost()' narxiga +15.0 qo'shsin.",
      "en": "Implement Decorator pattern in UzAirways to wrap 'FlightTicketItem' and augment 'getCost()' by +15.0."
    },
    "requirements": {
      "classes": [
        "FlightTicketItem",
        "FlightTicketDecorator"
      ],
      "methods": [
        "getCost"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class FlightTicketItem {\n    public double getCost() { return 50.0; }\n}\n\nclass FlightTicketDecorator extends FlightTicketItem {\n    private FlightTicketItem wrapped;\n    public FlightTicketDecorator(FlightTicketItem wrapped) {\n        this.wrapped = wrapped;\n    }\n    @Override\n    public double getCost() {\n        return (wrapped != null ? wrapped.getCost() : 0.0) + 15.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FlightTicketItem item = new FlightTicketItem();\n        FlightTicketItem decorated = new FlightTicketDecorator(item);\n        System.out.println(\"Asl narx: $\" + item.getCost());\n        System.out.println(\"Bezatilgan narx: $\" + decorated.getCost());\n    }\n}",
    "detailedSolution": {
      "theory": "Decorator Pattern — ob'yektga yangi majburiyat yoki funksiyalarni dinamik (ish vaqtida) qo'shish imkonini beradi. Har bir yangi xususiyat uchun yangi sinf meros olish shart bo'lmaydi.",
      "theoryEn": "Decorator pattern dynamically attaches additional responsibilities to an object without subclass explosion.",
      "cleanCode": "class FlightTicketDecorator extends FlightTicketItem {\n    private FlightTicketItem wrapped;\n    public FlightTicketDecorator(FlightTicketItem w) { this.wrapped = w; }\n    @Override public double getCost() { return wrapped.getCost() + 15.0; }\n}",
      "breakdown": [
        "<code>FlightTicketDecorator extends FlightTicketItem</code>: Ham o'ralayotgan ob'yekt turida bo'ladi, ham uni o'z ichida saqlaydi."
      ],
      "pitfalls": "O'ralgan obyekt 'null' bo'lganda 'wrapped.getCost()' NullPointerException chaqirmasligini ta'minlang.",
      "cw2Tip": "Kofe ustiga sut yoki sirop qo'shish, pitsaga pishloq qo'shish CW2 ning Decorator talabi hisoblanadi."
    }
  },
  {
    "id": 39,
    "tier": 2,
    "tierName": "2-Bosqich: Structural Patterns (Decorator Pattern)",
    "sector": "GoF Structural",
    "title": {
      "uz": "39. IT Park Academy — Qo'shimcha Xususiyat (Decorator Pattern)",
      "en": "39. IT Park Academy — Dynamic Behavior Decorator"
    },
    "scenario": {
      "uz": "IT Park Academy da asosiy elementga merosxo'rliksiz qo'shimcha narx va xususiyat qo'shish kerak. 'BootcampCourseDecorator' sinfini tuzing: u 'BootcampCourseItem' obyektini o'rab olib, 'getCost()' narxiga +15.0 qo'shsin.",
      "en": "Implement Decorator pattern in IT Park Academy to wrap 'BootcampCourseItem' and augment 'getCost()' by +15.0."
    },
    "requirements": {
      "classes": [
        "BootcampCourseItem",
        "BootcampCourseDecorator"
      ],
      "methods": [
        "getCost"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class BootcampCourseItem {\n    public double getCost() { return 50.0; }\n}\n\nclass BootcampCourseDecorator extends BootcampCourseItem {\n    private BootcampCourseItem wrapped;\n    public BootcampCourseDecorator(BootcampCourseItem wrapped) {\n        this.wrapped = wrapped;\n    }\n    @Override\n    public double getCost() {\n        return (wrapped != null ? wrapped.getCost() : 0.0) + 15.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BootcampCourseItem item = new BootcampCourseItem();\n        BootcampCourseItem decorated = new BootcampCourseDecorator(item);\n        System.out.println(\"Asl narx: $\" + item.getCost());\n        System.out.println(\"Bezatilgan narx: $\" + decorated.getCost());\n    }\n}",
    "detailedSolution": {
      "theory": "Decorator Pattern — ob'yektga yangi majburiyat yoki funksiyalarni dinamik (ish vaqtida) qo'shish imkonini beradi. Har bir yangi xususiyat uchun yangi sinf meros olish shart bo'lmaydi.",
      "theoryEn": "Decorator pattern dynamically attaches additional responsibilities to an object without subclass explosion.",
      "cleanCode": "class BootcampCourseDecorator extends BootcampCourseItem {\n    private BootcampCourseItem wrapped;\n    public BootcampCourseDecorator(BootcampCourseItem w) { this.wrapped = w; }\n    @Override public double getCost() { return wrapped.getCost() + 15.0; }\n}",
      "breakdown": [
        "<code>BootcampCourseDecorator extends BootcampCourseItem</code>: Ham o'ralayotgan ob'yekt turida bo'ladi, ham uni o'z ichida saqlaydi."
      ],
      "pitfalls": "O'ralgan obyekt 'null' bo'lganda 'wrapped.getCost()' NullPointerException chaqirmasligini ta'minlang.",
      "cw2Tip": "Kofe ustiga sut yoki sirop qo'shish, pitsaga pishloq qo'shish CW2 ning Decorator talabi hisoblanadi."
    }
  },
  {
    "id": 40,
    "tier": 2,
    "tierName": "2-Bosqich: Structural Patterns (Decorator Pattern)",
    "sector": "GoF Structural",
    "title": {
      "uz": "40. Anorbank — Qo'shimcha Xususiyat (Decorator Pattern)",
      "en": "40. Anorbank — Dynamic Behavior Decorator"
    },
    "scenario": {
      "uz": "Anorbank da asosiy elementga merosxo'rliksiz qo'shimcha narx va xususiyat qo'shish kerak. 'DebitCardDecorator' sinfini tuzing: u 'DebitCardItem' obyektini o'rab olib, 'getCost()' narxiga +15.0 qo'shsin.",
      "en": "Implement Decorator pattern in Anorbank to wrap 'DebitCardItem' and augment 'getCost()' by +15.0."
    },
    "requirements": {
      "classes": [
        "DebitCardItem",
        "DebitCardDecorator"
      ],
      "methods": [
        "getCost"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class DebitCardItem {\n    public double getCost() { return 50.0; }\n}\n\nclass DebitCardDecorator extends DebitCardItem {\n    private DebitCardItem wrapped;\n    public DebitCardDecorator(DebitCardItem wrapped) {\n        this.wrapped = wrapped;\n    }\n    @Override\n    public double getCost() {\n        return (wrapped != null ? wrapped.getCost() : 0.0) + 15.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DebitCardItem item = new DebitCardItem();\n        DebitCardItem decorated = new DebitCardDecorator(item);\n        System.out.println(\"Asl narx: $\" + item.getCost());\n        System.out.println(\"Bezatilgan narx: $\" + decorated.getCost());\n    }\n}",
    "detailedSolution": {
      "theory": "Decorator Pattern — ob'yektga yangi majburiyat yoki funksiyalarni dinamik (ish vaqtida) qo'shish imkonini beradi. Har bir yangi xususiyat uchun yangi sinf meros olish shart bo'lmaydi.",
      "theoryEn": "Decorator pattern dynamically attaches additional responsibilities to an object without subclass explosion.",
      "cleanCode": "class DebitCardDecorator extends DebitCardItem {\n    private DebitCardItem wrapped;\n    public DebitCardDecorator(DebitCardItem w) { this.wrapped = w; }\n    @Override public double getCost() { return wrapped.getCost() + 15.0; }\n}",
      "breakdown": [
        "<code>DebitCardDecorator extends DebitCardItem</code>: Ham o'ralayotgan ob'yekt turida bo'ladi, ham uni o'z ichida saqlaydi."
      ],
      "pitfalls": "O'ralgan obyekt 'null' bo'lganda 'wrapped.getCost()' NullPointerException chaqirmasligini ta'minlang.",
      "cw2Tip": "Kofe ustiga sut yoki sirop qo'shish, pitsaga pishloq qo'shish CW2 ning Decorator talabi hisoblanadi."
    }
  },
  {
    "id": 41,
    "tier": 2,
    "tierName": "2-Bosqich: Structural Patterns (Decorator Pattern)",
    "sector": "GoF Structural",
    "title": {
      "uz": "41. Oson Apteka — Qo'shimcha Xususiyat (Decorator Pattern)",
      "en": "41. Oson Apteka — Dynamic Behavior Decorator"
    },
    "scenario": {
      "uz": "Oson Apteka da asosiy elementga merosxo'rliksiz qo'shimcha narx va xususiyat qo'shish kerak. 'MedicineDecorator' sinfini tuzing: u 'MedicineItem' obyektini o'rab olib, 'getCost()' narxiga +15.0 qo'shsin.",
      "en": "Implement Decorator pattern in Oson Apteka to wrap 'MedicineItem' and augment 'getCost()' by +15.0."
    },
    "requirements": {
      "classes": [
        "MedicineItem",
        "MedicineDecorator"
      ],
      "methods": [
        "getCost"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class MedicineItem {\n    public double getCost() { return 50.0; }\n}\n\nclass MedicineDecorator extends MedicineItem {\n    private MedicineItem wrapped;\n    public MedicineDecorator(MedicineItem wrapped) {\n        this.wrapped = wrapped;\n    }\n    @Override\n    public double getCost() {\n        return (wrapped != null ? wrapped.getCost() : 0.0) + 15.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MedicineItem item = new MedicineItem();\n        MedicineItem decorated = new MedicineDecorator(item);\n        System.out.println(\"Asl narx: $\" + item.getCost());\n        System.out.println(\"Bezatilgan narx: $\" + decorated.getCost());\n    }\n}",
    "detailedSolution": {
      "theory": "Decorator Pattern — ob'yektga yangi majburiyat yoki funksiyalarni dinamik (ish vaqtida) qo'shish imkonini beradi. Har bir yangi xususiyat uchun yangi sinf meros olish shart bo'lmaydi.",
      "theoryEn": "Decorator pattern dynamically attaches additional responsibilities to an object without subclass explosion.",
      "cleanCode": "class MedicineDecorator extends MedicineItem {\n    private MedicineItem wrapped;\n    public MedicineDecorator(MedicineItem w) { this.wrapped = w; }\n    @Override public double getCost() { return wrapped.getCost() + 15.0; }\n}",
      "breakdown": [
        "<code>MedicineDecorator extends MedicineItem</code>: Ham o'ralayotgan ob'yekt turida bo'ladi, ham uni o'z ichida saqlaydi."
      ],
      "pitfalls": "O'ralgan obyekt 'null' bo'lganda 'wrapped.getCost()' NullPointerException chaqirmasligini ta'minlang.",
      "cw2Tip": "Kofe ustiga sut yoki sirop qo'shish, pitsaga pishloq qo'shish CW2 ning Decorator talabi hisoblanadi."
    }
  },
  {
    "id": 42,
    "tier": 2,
    "tierName": "2-Bosqich: Structural Patterns (Decorator Pattern)",
    "sector": "GoF Structural",
    "title": {
      "uz": "42. Evos FastFood — Qo'shimcha Xususiyat (Decorator Pattern)",
      "en": "42. Evos FastFood — Dynamic Behavior Decorator"
    },
    "scenario": {
      "uz": "Evos FastFood da asosiy elementga merosxo'rliksiz qo'shimcha narx va xususiyat qo'shish kerak. 'FoodOrderDecorator' sinfini tuzing: u 'FoodOrderItem' obyektini o'rab olib, 'getCost()' narxiga +15.0 qo'shsin.",
      "en": "Implement Decorator pattern in Evos FastFood to wrap 'FoodOrderItem' and augment 'getCost()' by +15.0."
    },
    "requirements": {
      "classes": [
        "FoodOrderItem",
        "FoodOrderDecorator"
      ],
      "methods": [
        "getCost"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class FoodOrderItem {\n    public double getCost() { return 50.0; }\n}\n\nclass FoodOrderDecorator extends FoodOrderItem {\n    private FoodOrderItem wrapped;\n    public FoodOrderDecorator(FoodOrderItem wrapped) {\n        this.wrapped = wrapped;\n    }\n    @Override\n    public double getCost() {\n        return (wrapped != null ? wrapped.getCost() : 0.0) + 15.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FoodOrderItem item = new FoodOrderItem();\n        FoodOrderItem decorated = new FoodOrderDecorator(item);\n        System.out.println(\"Asl narx: $\" + item.getCost());\n        System.out.println(\"Bezatilgan narx: $\" + decorated.getCost());\n    }\n}",
    "detailedSolution": {
      "theory": "Decorator Pattern — ob'yektga yangi majburiyat yoki funksiyalarni dinamik (ish vaqtida) qo'shish imkonini beradi. Har bir yangi xususiyat uchun yangi sinf meros olish shart bo'lmaydi.",
      "theoryEn": "Decorator pattern dynamically attaches additional responsibilities to an object without subclass explosion.",
      "cleanCode": "class FoodOrderDecorator extends FoodOrderItem {\n    private FoodOrderItem wrapped;\n    public FoodOrderDecorator(FoodOrderItem w) { this.wrapped = w; }\n    @Override public double getCost() { return wrapped.getCost() + 15.0; }\n}",
      "breakdown": [
        "<code>FoodOrderDecorator extends FoodOrderItem</code>: Ham o'ralayotgan ob'yekt turida bo'ladi, ham uni o'z ichida saqlaydi."
      ],
      "pitfalls": "O'ralgan obyekt 'null' bo'lganda 'wrapped.getCost()' NullPointerException chaqirmasligini ta'minlang.",
      "cw2Tip": "Kofe ustiga sut yoki sirop qo'shish, pitsaga pishloq qo'shish CW2 ning Decorator talabi hisoblanadi."
    }
  },
  {
    "id": 43,
    "tier": 2,
    "tierName": "2-Bosqich: Structural Patterns (Decorator Pattern)",
    "sector": "GoF Structural",
    "title": {
      "uz": "43. Bellissimo Pizza — Qo'shimcha Xususiyat (Decorator Pattern)",
      "en": "43. Bellissimo Pizza — Dynamic Behavior Decorator"
    },
    "scenario": {
      "uz": "Bellissimo Pizza da asosiy elementga merosxo'rliksiz qo'shimcha narx va xususiyat qo'shish kerak. 'PizzaOrderDecorator' sinfini tuzing: u 'PizzaOrderItem' obyektini o'rab olib, 'getCost()' narxiga +15.0 qo'shsin.",
      "en": "Implement Decorator pattern in Bellissimo Pizza to wrap 'PizzaOrderItem' and augment 'getCost()' by +15.0."
    },
    "requirements": {
      "classes": [
        "PizzaOrderItem",
        "PizzaOrderDecorator"
      ],
      "methods": [
        "getCost"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class PizzaOrderItem {\n    public double getCost() { return 50.0; }\n}\n\nclass PizzaOrderDecorator extends PizzaOrderItem {\n    private PizzaOrderItem wrapped;\n    public PizzaOrderDecorator(PizzaOrderItem wrapped) {\n        this.wrapped = wrapped;\n    }\n    @Override\n    public double getCost() {\n        return (wrapped != null ? wrapped.getCost() : 0.0) + 15.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PizzaOrderItem item = new PizzaOrderItem();\n        PizzaOrderItem decorated = new PizzaOrderDecorator(item);\n        System.out.println(\"Asl narx: $\" + item.getCost());\n        System.out.println(\"Bezatilgan narx: $\" + decorated.getCost());\n    }\n}",
    "detailedSolution": {
      "theory": "Decorator Pattern — ob'yektga yangi majburiyat yoki funksiyalarni dinamik (ish vaqtida) qo'shish imkonini beradi. Har bir yangi xususiyat uchun yangi sinf meros olish shart bo'lmaydi.",
      "theoryEn": "Decorator pattern dynamically attaches additional responsibilities to an object without subclass explosion.",
      "cleanCode": "class PizzaOrderDecorator extends PizzaOrderItem {\n    private PizzaOrderItem wrapped;\n    public PizzaOrderDecorator(PizzaOrderItem w) { this.wrapped = w; }\n    @Override public double getCost() { return wrapped.getCost() + 15.0; }\n}",
      "breakdown": [
        "<code>PizzaOrderDecorator extends PizzaOrderItem</code>: Ham o'ralayotgan ob'yekt turida bo'ladi, ham uni o'z ichida saqlaydi."
      ],
      "pitfalls": "O'ralgan obyekt 'null' bo'lganda 'wrapped.getCost()' NullPointerException chaqirmasligini ta'minlang.",
      "cw2Tip": "Kofe ustiga sut yoki sirop qo'shish, pitsaga pishloq qo'shish CW2 ning Decorator talabi hisoblanadi."
    }
  },
  {
    "id": 44,
    "tier": 2,
    "tierName": "2-Bosqich: Structural Patterns (Decorator Pattern)",
    "sector": "GoF Structural",
    "title": {
      "uz": "44. Milliy TV — Qo'shimcha Xususiyat (Decorator Pattern)",
      "en": "44. Milliy TV — Dynamic Behavior Decorator"
    },
    "scenario": {
      "uz": "Milliy TV da asosiy elementga merosxo'rliksiz qo'shimcha narx va xususiyat qo'shish kerak. 'BroadcastShowDecorator' sinfini tuzing: u 'BroadcastShowItem' obyektini o'rab olib, 'getCost()' narxiga +15.0 qo'shsin.",
      "en": "Implement Decorator pattern in Milliy TV to wrap 'BroadcastShowItem' and augment 'getCost()' by +15.0."
    },
    "requirements": {
      "classes": [
        "BroadcastShowItem",
        "BroadcastShowDecorator"
      ],
      "methods": [
        "getCost"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class BroadcastShowItem {\n    public double getCost() { return 50.0; }\n}\n\nclass BroadcastShowDecorator extends BroadcastShowItem {\n    private BroadcastShowItem wrapped;\n    public BroadcastShowDecorator(BroadcastShowItem wrapped) {\n        this.wrapped = wrapped;\n    }\n    @Override\n    public double getCost() {\n        return (wrapped != null ? wrapped.getCost() : 0.0) + 15.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BroadcastShowItem item = new BroadcastShowItem();\n        BroadcastShowItem decorated = new BroadcastShowDecorator(item);\n        System.out.println(\"Asl narx: $\" + item.getCost());\n        System.out.println(\"Bezatilgan narx: $\" + decorated.getCost());\n    }\n}",
    "detailedSolution": {
      "theory": "Decorator Pattern — ob'yektga yangi majburiyat yoki funksiyalarni dinamik (ish vaqtida) qo'shish imkonini beradi. Har bir yangi xususiyat uchun yangi sinf meros olish shart bo'lmaydi.",
      "theoryEn": "Decorator pattern dynamically attaches additional responsibilities to an object without subclass explosion.",
      "cleanCode": "class BroadcastShowDecorator extends BroadcastShowItem {\n    private BroadcastShowItem wrapped;\n    public BroadcastShowDecorator(BroadcastShowItem w) { this.wrapped = w; }\n    @Override public double getCost() { return wrapped.getCost() + 15.0; }\n}",
      "breakdown": [
        "<code>BroadcastShowDecorator extends BroadcastShowItem</code>: Ham o'ralayotgan ob'yekt turida bo'ladi, ham uni o'z ichida saqlaydi."
      ],
      "pitfalls": "O'ralgan obyekt 'null' bo'lganda 'wrapped.getCost()' NullPointerException chaqirmasligini ta'minlang.",
      "cw2Tip": "Kofe ustiga sut yoki sirop qo'shish, pitsaga pishloq qo'shish CW2 ning Decorator talabi hisoblanadi."
    }
  },
  {
    "id": 45,
    "tier": 2,
    "tierName": "2-Bosqich: Structural Patterns (Decorator Pattern)",
    "sector": "GoF Structural",
    "title": {
      "uz": "45. Spotify Sound — Qo'shimcha Xususiyat (Decorator Pattern)",
      "en": "45. Spotify Sound — Dynamic Behavior Decorator"
    },
    "scenario": {
      "uz": "Spotify Sound da asosiy elementga merosxo'rliksiz qo'shimcha narx va xususiyat qo'shish kerak. 'AudioTrackDecorator' sinfini tuzing: u 'AudioTrackItem' obyektini o'rab olib, 'getCost()' narxiga +15.0 qo'shsin.",
      "en": "Implement Decorator pattern in Spotify Sound to wrap 'AudioTrackItem' and augment 'getCost()' by +15.0."
    },
    "requirements": {
      "classes": [
        "AudioTrackItem",
        "AudioTrackDecorator"
      ],
      "methods": [
        "getCost"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class AudioTrackItem {\n    public double getCost() { return 50.0; }\n}\n\nclass AudioTrackDecorator extends AudioTrackItem {\n    private AudioTrackItem wrapped;\n    public AudioTrackDecorator(AudioTrackItem wrapped) {\n        this.wrapped = wrapped;\n    }\n    @Override\n    public double getCost() {\n        return (wrapped != null ? wrapped.getCost() : 0.0) + 15.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AudioTrackItem item = new AudioTrackItem();\n        AudioTrackItem decorated = new AudioTrackDecorator(item);\n        System.out.println(\"Asl narx: $\" + item.getCost());\n        System.out.println(\"Bezatilgan narx: $\" + decorated.getCost());\n    }\n}",
    "detailedSolution": {
      "theory": "Decorator Pattern — ob'yektga yangi majburiyat yoki funksiyalarni dinamik (ish vaqtida) qo'shish imkonini beradi. Har bir yangi xususiyat uchun yangi sinf meros olish shart bo'lmaydi.",
      "theoryEn": "Decorator pattern dynamically attaches additional responsibilities to an object without subclass explosion.",
      "cleanCode": "class AudioTrackDecorator extends AudioTrackItem {\n    private AudioTrackItem wrapped;\n    public AudioTrackDecorator(AudioTrackItem w) { this.wrapped = w; }\n    @Override public double getCost() { return wrapped.getCost() + 15.0; }\n}",
      "breakdown": [
        "<code>AudioTrackDecorator extends AudioTrackItem</code>: Ham o'ralayotgan ob'yekt turida bo'ladi, ham uni o'z ichida saqlaydi."
      ],
      "pitfalls": "O'ralgan obyekt 'null' bo'lganda 'wrapped.getCost()' NullPointerException chaqirmasligini ta'minlang.",
      "cw2Tip": "Kofe ustiga sut yoki sirop qo'shish, pitsaga pishloq qo'shish CW2 ning Decorator talabi hisoblanadi."
    }
  },
  {
    "id": 46,
    "tier": 2,
    "tierName": "2-Bosqich: Structural Patterns (Decorator Pattern)",
    "sector": "GoF Structural",
    "title": {
      "uz": "46. Smart Thermostat — Qo'shimcha Xususiyat (Decorator Pattern)",
      "en": "46. Smart Thermostat — Dynamic Behavior Decorator"
    },
    "scenario": {
      "uz": "Smart Thermostat da asosiy elementga merosxo'rliksiz qo'shimcha narx va xususiyat qo'shish kerak. 'ThermostatDecorator' sinfini tuzing: u 'ThermostatItem' obyektini o'rab olib, 'getCost()' narxiga +15.0 qo'shsin.",
      "en": "Implement Decorator pattern in Smart Thermostat to wrap 'ThermostatItem' and augment 'getCost()' by +15.0."
    },
    "requirements": {
      "classes": [
        "ThermostatItem",
        "ThermostatDecorator"
      ],
      "methods": [
        "getCost"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class ThermostatItem {\n    public double getCost() { return 50.0; }\n}\n\nclass ThermostatDecorator extends ThermostatItem {\n    private ThermostatItem wrapped;\n    public ThermostatDecorator(ThermostatItem wrapped) {\n        this.wrapped = wrapped;\n    }\n    @Override\n    public double getCost() {\n        return (wrapped != null ? wrapped.getCost() : 0.0) + 15.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ThermostatItem item = new ThermostatItem();\n        ThermostatItem decorated = new ThermostatDecorator(item);\n        System.out.println(\"Asl narx: $\" + item.getCost());\n        System.out.println(\"Bezatilgan narx: $\" + decorated.getCost());\n    }\n}",
    "detailedSolution": {
      "theory": "Decorator Pattern — ob'yektga yangi majburiyat yoki funksiyalarni dinamik (ish vaqtida) qo'shish imkonini beradi. Har bir yangi xususiyat uchun yangi sinf meros olish shart bo'lmaydi.",
      "theoryEn": "Decorator pattern dynamically attaches additional responsibilities to an object without subclass explosion.",
      "cleanCode": "class ThermostatDecorator extends ThermostatItem {\n    private ThermostatItem wrapped;\n    public ThermostatDecorator(ThermostatItem w) { this.wrapped = w; }\n    @Override public double getCost() { return wrapped.getCost() + 15.0; }\n}",
      "breakdown": [
        "<code>ThermostatDecorator extends ThermostatItem</code>: Ham o'ralayotgan ob'yekt turida bo'ladi, ham uni o'z ichida saqlaydi."
      ],
      "pitfalls": "O'ralgan obyekt 'null' bo'lganda 'wrapped.getCost()' NullPointerException chaqirmasligini ta'minlang.",
      "cw2Tip": "Kofe ustiga sut yoki sirop qo'shish, pitsaga pishloq qo'shish CW2 ning Decorator talabi hisoblanadi."
    }
  },
  {
    "id": 47,
    "tier": 2,
    "tierName": "2-Bosqich: Structural Patterns (Decorator Pattern)",
    "sector": "GoF Structural",
    "title": {
      "uz": "47. Drone Delivery — Qo'shimcha Xususiyat (Decorator Pattern)",
      "en": "47. Drone Delivery — Dynamic Behavior Decorator"
    },
    "scenario": {
      "uz": "Drone Delivery da asosiy elementga merosxo'rliksiz qo'shimcha narx va xususiyat qo'shish kerak. 'DeliveryDroneDecorator' sinfini tuzing: u 'DeliveryDroneItem' obyektini o'rab olib, 'getCost()' narxiga +15.0 qo'shsin.",
      "en": "Implement Decorator pattern in Drone Delivery to wrap 'DeliveryDroneItem' and augment 'getCost()' by +15.0."
    },
    "requirements": {
      "classes": [
        "DeliveryDroneItem",
        "DeliveryDroneDecorator"
      ],
      "methods": [
        "getCost"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class DeliveryDroneItem {\n    public double getCost() { return 50.0; }\n}\n\nclass DeliveryDroneDecorator extends DeliveryDroneItem {\n    private DeliveryDroneItem wrapped;\n    public DeliveryDroneDecorator(DeliveryDroneItem wrapped) {\n        this.wrapped = wrapped;\n    }\n    @Override\n    public double getCost() {\n        return (wrapped != null ? wrapped.getCost() : 0.0) + 15.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DeliveryDroneItem item = new DeliveryDroneItem();\n        DeliveryDroneItem decorated = new DeliveryDroneDecorator(item);\n        System.out.println(\"Asl narx: $\" + item.getCost());\n        System.out.println(\"Bezatilgan narx: $\" + decorated.getCost());\n    }\n}",
    "detailedSolution": {
      "theory": "Decorator Pattern — ob'yektga yangi majburiyat yoki funksiyalarni dinamik (ish vaqtida) qo'shish imkonini beradi. Har bir yangi xususiyat uchun yangi sinf meros olish shart bo'lmaydi.",
      "theoryEn": "Decorator pattern dynamically attaches additional responsibilities to an object without subclass explosion.",
      "cleanCode": "class DeliveryDroneDecorator extends DeliveryDroneItem {\n    private DeliveryDroneItem wrapped;\n    public DeliveryDroneDecorator(DeliveryDroneItem w) { this.wrapped = w; }\n    @Override public double getCost() { return wrapped.getCost() + 15.0; }\n}",
      "breakdown": [
        "<code>DeliveryDroneDecorator extends DeliveryDroneItem</code>: Ham o'ralayotgan ob'yekt turida bo'ladi, ham uni o'z ichida saqlaydi."
      ],
      "pitfalls": "O'ralgan obyekt 'null' bo'lganda 'wrapped.getCost()' NullPointerException chaqirmasligini ta'minlang.",
      "cw2Tip": "Kofe ustiga sut yoki sirop qo'shish, pitsaga pishloq qo'shish CW2 ning Decorator talabi hisoblanadi."
    }
  },
  {
    "id": 48,
    "tier": 2,
    "tierName": "2-Bosqich: Structural Patterns (Decorator Pattern)",
    "sector": "GoF Structural",
    "title": {
      "uz": "48. Smart Warehouse — Qo'shimcha Xususiyat (Decorator Pattern)",
      "en": "48. Smart Warehouse — Dynamic Behavior Decorator"
    },
    "scenario": {
      "uz": "Smart Warehouse da asosiy elementga merosxo'rliksiz qo'shimcha narx va xususiyat qo'shish kerak. 'StorageBayDecorator' sinfini tuzing: u 'StorageBayItem' obyektini o'rab olib, 'getCost()' narxiga +15.0 qo'shsin.",
      "en": "Implement Decorator pattern in Smart Warehouse to wrap 'StorageBayItem' and augment 'getCost()' by +15.0."
    },
    "requirements": {
      "classes": [
        "StorageBayItem",
        "StorageBayDecorator"
      ],
      "methods": [
        "getCost"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class StorageBayItem {\n    public double getCost() { return 50.0; }\n}\n\nclass StorageBayDecorator extends StorageBayItem {\n    private StorageBayItem wrapped;\n    public StorageBayDecorator(StorageBayItem wrapped) {\n        this.wrapped = wrapped;\n    }\n    @Override\n    public double getCost() {\n        return (wrapped != null ? wrapped.getCost() : 0.0) + 15.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StorageBayItem item = new StorageBayItem();\n        StorageBayItem decorated = new StorageBayDecorator(item);\n        System.out.println(\"Asl narx: $\" + item.getCost());\n        System.out.println(\"Bezatilgan narx: $\" + decorated.getCost());\n    }\n}",
    "detailedSolution": {
      "theory": "Decorator Pattern — ob'yektga yangi majburiyat yoki funksiyalarni dinamik (ish vaqtida) qo'shish imkonini beradi. Har bir yangi xususiyat uchun yangi sinf meros olish shart bo'lmaydi.",
      "theoryEn": "Decorator pattern dynamically attaches additional responsibilities to an object without subclass explosion.",
      "cleanCode": "class StorageBayDecorator extends StorageBayItem {\n    private StorageBayItem wrapped;\n    public StorageBayDecorator(StorageBayItem w) { this.wrapped = w; }\n    @Override public double getCost() { return wrapped.getCost() + 15.0; }\n}",
      "breakdown": [
        "<code>StorageBayDecorator extends StorageBayItem</code>: Ham o'ralayotgan ob'yekt turida bo'ladi, ham uni o'z ichida saqlaydi."
      ],
      "pitfalls": "O'ralgan obyekt 'null' bo'lganda 'wrapped.getCost()' NullPointerException chaqirmasligini ta'minlang.",
      "cw2Tip": "Kofe ustiga sut yoki sirop qo'shish, pitsaga pishloq qo'shish CW2 ning Decorator talabi hisoblanadi."
    }
  },
  {
    "id": 49,
    "tier": 2,
    "tierName": "2-Bosqich: Structural Patterns (Decorator Pattern)",
    "sector": "GoF Structural",
    "title": {
      "uz": "49. Crypto Wallet — Qo'shimcha Xususiyat (Decorator Pattern)",
      "en": "49. Crypto Wallet — Dynamic Behavior Decorator"
    },
    "scenario": {
      "uz": "Crypto Wallet da asosiy elementga merosxo'rliksiz qo'shimcha narx va xususiyat qo'shish kerak. 'CryptoAssetDecorator' sinfini tuzing: u 'CryptoAssetItem' obyektini o'rab olib, 'getCost()' narxiga +15.0 qo'shsin.",
      "en": "Implement Decorator pattern in Crypto Wallet to wrap 'CryptoAssetItem' and augment 'getCost()' by +15.0."
    },
    "requirements": {
      "classes": [
        "CryptoAssetItem",
        "CryptoAssetDecorator"
      ],
      "methods": [
        "getCost"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class CryptoAssetItem {\n    public double getCost() { return 50.0; }\n}\n\nclass CryptoAssetDecorator extends CryptoAssetItem {\n    private CryptoAssetItem wrapped;\n    public CryptoAssetDecorator(CryptoAssetItem wrapped) {\n        this.wrapped = wrapped;\n    }\n    @Override\n    public double getCost() {\n        return (wrapped != null ? wrapped.getCost() : 0.0) + 15.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CryptoAssetItem item = new CryptoAssetItem();\n        CryptoAssetItem decorated = new CryptoAssetDecorator(item);\n        System.out.println(\"Asl narx: $\" + item.getCost());\n        System.out.println(\"Bezatilgan narx: $\" + decorated.getCost());\n    }\n}",
    "detailedSolution": {
      "theory": "Decorator Pattern — ob'yektga yangi majburiyat yoki funksiyalarni dinamik (ish vaqtida) qo'shish imkonini beradi. Har bir yangi xususiyat uchun yangi sinf meros olish shart bo'lmaydi.",
      "theoryEn": "Decorator pattern dynamically attaches additional responsibilities to an object without subclass explosion.",
      "cleanCode": "class CryptoAssetDecorator extends CryptoAssetItem {\n    private CryptoAssetItem wrapped;\n    public CryptoAssetDecorator(CryptoAssetItem w) { this.wrapped = w; }\n    @Override public double getCost() { return wrapped.getCost() + 15.0; }\n}",
      "breakdown": [
        "<code>CryptoAssetDecorator extends CryptoAssetItem</code>: Ham o'ralayotgan ob'yekt turida bo'ladi, ham uni o'z ichida saqlaydi."
      ],
      "pitfalls": "O'ralgan obyekt 'null' bo'lganda 'wrapped.getCost()' NullPointerException chaqirmasligini ta'minlang.",
      "cw2Tip": "Kofe ustiga sut yoki sirop qo'shish, pitsaga pishloq qo'shish CW2 ning Decorator talabi hisoblanadi."
    }
  },
  {
    "id": 50,
    "tier": 2,
    "tierName": "2-Bosqich: Structural Patterns (Decorator Pattern)",
    "sector": "GoF Structural",
    "title": {
      "uz": "50. National Library — Qo'shimcha Xususiyat (Decorator Pattern)",
      "en": "50. National Library — Dynamic Behavior Decorator"
    },
    "scenario": {
      "uz": "National Library da asosiy elementga merosxo'rliksiz qo'shimcha narx va xususiyat qo'shish kerak. 'CatalogBookDecorator' sinfini tuzing: u 'CatalogBookItem' obyektini o'rab olib, 'getCost()' narxiga +15.0 qo'shsin.",
      "en": "Implement Decorator pattern in National Library to wrap 'CatalogBookItem' and augment 'getCost()' by +15.0."
    },
    "requirements": {
      "classes": [
        "CatalogBookItem",
        "CatalogBookDecorator"
      ],
      "methods": [
        "getCost"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class CatalogBookItem {\n    public double getCost() { return 50.0; }\n}\n\nclass CatalogBookDecorator extends CatalogBookItem {\n    private CatalogBookItem wrapped;\n    public CatalogBookDecorator(CatalogBookItem wrapped) {\n        this.wrapped = wrapped;\n    }\n    @Override\n    public double getCost() {\n        return (wrapped != null ? wrapped.getCost() : 0.0) + 15.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CatalogBookItem item = new CatalogBookItem();\n        CatalogBookItem decorated = new CatalogBookDecorator(item);\n        System.out.println(\"Asl narx: $\" + item.getCost());\n        System.out.println(\"Bezatilgan narx: $\" + decorated.getCost());\n    }\n}",
    "detailedSolution": {
      "theory": "Decorator Pattern — ob'yektga yangi majburiyat yoki funksiyalarni dinamik (ish vaqtida) qo'shish imkonini beradi. Har bir yangi xususiyat uchun yangi sinf meros olish shart bo'lmaydi.",
      "theoryEn": "Decorator pattern dynamically attaches additional responsibilities to an object without subclass explosion.",
      "cleanCode": "class CatalogBookDecorator extends CatalogBookItem {\n    private CatalogBookItem wrapped;\n    public CatalogBookDecorator(CatalogBookItem w) { this.wrapped = w; }\n    @Override public double getCost() { return wrapped.getCost() + 15.0; }\n}",
      "breakdown": [
        "<code>CatalogBookDecorator extends CatalogBookItem</code>: Ham o'ralayotgan ob'yekt turida bo'ladi, ham uni o'z ichida saqlaydi."
      ],
      "pitfalls": "O'ralgan obyekt 'null' bo'lganda 'wrapped.getCost()' NullPointerException chaqirmasligini ta'minlang.",
      "cw2Tip": "Kofe ustiga sut yoki sirop qo'shish, pitsaga pishloq qo'shish CW2 ning Decorator talabi hisoblanadi."
    }
  },
  {
    "id": 51,
    "tier": 2,
    "tierName": "2-Bosqich: Structural Patterns (Decorator Pattern)",
    "sector": "GoF Structural",
    "title": {
      "uz": "51. BeFit Club — Qo'shimcha Xususiyat (Decorator Pattern)",
      "en": "51. BeFit Club — Dynamic Behavior Decorator"
    },
    "scenario": {
      "uz": "BeFit Club da asosiy elementga merosxo'rliksiz qo'shimcha narx va xususiyat qo'shish kerak. 'GymMemberDecorator' sinfini tuzing: u 'GymMemberItem' obyektini o'rab olib, 'getCost()' narxiga +15.0 qo'shsin.",
      "en": "Implement Decorator pattern in BeFit Club to wrap 'GymMemberItem' and augment 'getCost()' by +15.0."
    },
    "requirements": {
      "classes": [
        "GymMemberItem",
        "GymMemberDecorator"
      ],
      "methods": [
        "getCost"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class GymMemberItem {\n    public double getCost() { return 50.0; }\n}\n\nclass GymMemberDecorator extends GymMemberItem {\n    private GymMemberItem wrapped;\n    public GymMemberDecorator(GymMemberItem wrapped) {\n        this.wrapped = wrapped;\n    }\n    @Override\n    public double getCost() {\n        return (wrapped != null ? wrapped.getCost() : 0.0) + 15.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GymMemberItem item = new GymMemberItem();\n        GymMemberItem decorated = new GymMemberDecorator(item);\n        System.out.println(\"Asl narx: $\" + item.getCost());\n        System.out.println(\"Bezatilgan narx: $\" + decorated.getCost());\n    }\n}",
    "detailedSolution": {
      "theory": "Decorator Pattern — ob'yektga yangi majburiyat yoki funksiyalarni dinamik (ish vaqtida) qo'shish imkonini beradi. Har bir yangi xususiyat uchun yangi sinf meros olish shart bo'lmaydi.",
      "theoryEn": "Decorator pattern dynamically attaches additional responsibilities to an object without subclass explosion.",
      "cleanCode": "class GymMemberDecorator extends GymMemberItem {\n    private GymMemberItem wrapped;\n    public GymMemberDecorator(GymMemberItem w) { this.wrapped = w; }\n    @Override public double getCost() { return wrapped.getCost() + 15.0; }\n}",
      "breakdown": [
        "<code>GymMemberDecorator extends GymMemberItem</code>: Ham o'ralayotgan ob'yekt turida bo'ladi, ham uni o'z ichida saqlaydi."
      ],
      "pitfalls": "O'ralgan obyekt 'null' bo'lganda 'wrapped.getCost()' NullPointerException chaqirmasligini ta'minlang.",
      "cw2Tip": "Kofe ustiga sut yoki sirop qo'shish, pitsaga pishloq qo'shish CW2 ning Decorator talabi hisoblanadi."
    }
  },
  {
    "id": 52,
    "tier": 2,
    "tierName": "2-Bosqich: Structural Patterns (Decorator Pattern)",
    "sector": "GoF Structural",
    "title": {
      "uz": "52. Tashkent Parking — Qo'shimcha Xususiyat (Decorator Pattern)",
      "en": "52. Tashkent Parking — Dynamic Behavior Decorator"
    },
    "scenario": {
      "uz": "Tashkent Parking da asosiy elementga merosxo'rliksiz qo'shimcha narx va xususiyat qo'shish kerak. 'ParkingBayDecorator' sinfini tuzing: u 'ParkingBayItem' obyektini o'rab olib, 'getCost()' narxiga +15.0 qo'shsin.",
      "en": "Implement Decorator pattern in Tashkent Parking to wrap 'ParkingBayItem' and augment 'getCost()' by +15.0."
    },
    "requirements": {
      "classes": [
        "ParkingBayItem",
        "ParkingBayDecorator"
      ],
      "methods": [
        "getCost"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class ParkingBayItem {\n    public double getCost() { return 50.0; }\n}\n\nclass ParkingBayDecorator extends ParkingBayItem {\n    private ParkingBayItem wrapped;\n    public ParkingBayDecorator(ParkingBayItem wrapped) {\n        this.wrapped = wrapped;\n    }\n    @Override\n    public double getCost() {\n        return (wrapped != null ? wrapped.getCost() : 0.0) + 15.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ParkingBayItem item = new ParkingBayItem();\n        ParkingBayItem decorated = new ParkingBayDecorator(item);\n        System.out.println(\"Asl narx: $\" + item.getCost());\n        System.out.println(\"Bezatilgan narx: $\" + decorated.getCost());\n    }\n}",
    "detailedSolution": {
      "theory": "Decorator Pattern — ob'yektga yangi majburiyat yoki funksiyalarni dinamik (ish vaqtida) qo'shish imkonini beradi. Har bir yangi xususiyat uchun yangi sinf meros olish shart bo'lmaydi.",
      "theoryEn": "Decorator pattern dynamically attaches additional responsibilities to an object without subclass explosion.",
      "cleanCode": "class ParkingBayDecorator extends ParkingBayItem {\n    private ParkingBayItem wrapped;\n    public ParkingBayDecorator(ParkingBayItem w) { this.wrapped = w; }\n    @Override public double getCost() { return wrapped.getCost() + 15.0; }\n}",
      "breakdown": [
        "<code>ParkingBayDecorator extends ParkingBayItem</code>: Ham o'ralayotgan ob'yekt turida bo'ladi, ham uni o'z ichida saqlaydi."
      ],
      "pitfalls": "O'ralgan obyekt 'null' bo'lganda 'wrapped.getCost()' NullPointerException chaqirmasligini ta'minlang.",
      "cw2Tip": "Kofe ustiga sut yoki sirop qo'shish, pitsaga pishloq qo'shish CW2 ning Decorator talabi hisoblanadi."
    }
  },
  {
    "id": 53,
    "tier": 2,
    "tierName": "2-Bosqich: Structural Patterns (Decorator Pattern)",
    "sector": "GoF Structural",
    "title": {
      "uz": "53. Medion Clinic — Qo'shimcha Xususiyat (Decorator Pattern)",
      "en": "53. Medion Clinic — Dynamic Behavior Decorator"
    },
    "scenario": {
      "uz": "Medion Clinic da asosiy elementga merosxo'rliksiz qo'shimcha narx va xususiyat qo'shish kerak. 'PatientRecordDecorator' sinfini tuzing: u 'PatientRecordItem' obyektini o'rab olib, 'getCost()' narxiga +15.0 qo'shsin.",
      "en": "Implement Decorator pattern in Medion Clinic to wrap 'PatientRecordItem' and augment 'getCost()' by +15.0."
    },
    "requirements": {
      "classes": [
        "PatientRecordItem",
        "PatientRecordDecorator"
      ],
      "methods": [
        "getCost"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class PatientRecordItem {\n    public double getCost() { return 50.0; }\n}\n\nclass PatientRecordDecorator extends PatientRecordItem {\n    private PatientRecordItem wrapped;\n    public PatientRecordDecorator(PatientRecordItem wrapped) {\n        this.wrapped = wrapped;\n    }\n    @Override\n    public double getCost() {\n        return (wrapped != null ? wrapped.getCost() : 0.0) + 15.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PatientRecordItem item = new PatientRecordItem();\n        PatientRecordItem decorated = new PatientRecordDecorator(item);\n        System.out.println(\"Asl narx: $\" + item.getCost());\n        System.out.println(\"Bezatilgan narx: $\" + decorated.getCost());\n    }\n}",
    "detailedSolution": {
      "theory": "Decorator Pattern — ob'yektga yangi majburiyat yoki funksiyalarni dinamik (ish vaqtida) qo'shish imkonini beradi. Har bir yangi xususiyat uchun yangi sinf meros olish shart bo'lmaydi.",
      "theoryEn": "Decorator pattern dynamically attaches additional responsibilities to an object without subclass explosion.",
      "cleanCode": "class PatientRecordDecorator extends PatientRecordItem {\n    private PatientRecordItem wrapped;\n    public PatientRecordDecorator(PatientRecordItem w) { this.wrapped = w; }\n    @Override public double getCost() { return wrapped.getCost() + 15.0; }\n}",
      "breakdown": [
        "<code>PatientRecordDecorator extends PatientRecordItem</code>: Ham o'ralayotgan ob'yekt turida bo'ladi, ham uni o'z ichida saqlaydi."
      ],
      "pitfalls": "O'ralgan obyekt 'null' bo'lganda 'wrapped.getCost()' NullPointerException chaqirmasligini ta'minlang.",
      "cw2Tip": "Kofe ustiga sut yoki sirop qo'shish, pitsaga pishloq qo'shish CW2 ning Decorator talabi hisoblanadi."
    }
  },
  {
    "id": 54,
    "tier": 2,
    "tierName": "2-Bosqich: Structural Patterns (Decorator Pattern)",
    "sector": "GoF Structural",
    "title": {
      "uz": "54. Hyatt Regency — Qo'shimcha Xususiyat (Decorator Pattern)",
      "en": "54. Hyatt Regency — Dynamic Behavior Decorator"
    },
    "scenario": {
      "uz": "Hyatt Regency da asosiy elementga merosxo'rliksiz qo'shimcha narx va xususiyat qo'shish kerak. 'HotelReservationDecorator' sinfini tuzing: u 'HotelReservationItem' obyektini o'rab olib, 'getCost()' narxiga +15.0 qo'shsin.",
      "en": "Implement Decorator pattern in Hyatt Regency to wrap 'HotelReservationItem' and augment 'getCost()' by +15.0."
    },
    "requirements": {
      "classes": [
        "HotelReservationItem",
        "HotelReservationDecorator"
      ],
      "methods": [
        "getCost"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class HotelReservationItem {\n    public double getCost() { return 50.0; }\n}\n\nclass HotelReservationDecorator extends HotelReservationItem {\n    private HotelReservationItem wrapped;\n    public HotelReservationDecorator(HotelReservationItem wrapped) {\n        this.wrapped = wrapped;\n    }\n    @Override\n    public double getCost() {\n        return (wrapped != null ? wrapped.getCost() : 0.0) + 15.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        HotelReservationItem item = new HotelReservationItem();\n        HotelReservationItem decorated = new HotelReservationDecorator(item);\n        System.out.println(\"Asl narx: $\" + item.getCost());\n        System.out.println(\"Bezatilgan narx: $\" + decorated.getCost());\n    }\n}",
    "detailedSolution": {
      "theory": "Decorator Pattern — ob'yektga yangi majburiyat yoki funksiyalarni dinamik (ish vaqtida) qo'shish imkonini beradi. Har bir yangi xususiyat uchun yangi sinf meros olish shart bo'lmaydi.",
      "theoryEn": "Decorator pattern dynamically attaches additional responsibilities to an object without subclass explosion.",
      "cleanCode": "class HotelReservationDecorator extends HotelReservationItem {\n    private HotelReservationItem wrapped;\n    public HotelReservationDecorator(HotelReservationItem w) { this.wrapped = w; }\n    @Override public double getCost() { return wrapped.getCost() + 15.0; }\n}",
      "breakdown": [
        "<code>HotelReservationDecorator extends HotelReservationItem</code>: Ham o'ralayotgan ob'yekt turida bo'ladi, ham uni o'z ichida saqlaydi."
      ],
      "pitfalls": "O'ralgan obyekt 'null' bo'lganda 'wrapped.getCost()' NullPointerException chaqirmasligini ta'minlang.",
      "cw2Tip": "Kofe ustiga sut yoki sirop qo'shish, pitsaga pishloq qo'shish CW2 ning Decorator talabi hisoblanadi."
    }
  },
  {
    "id": 55,
    "tier": 2,
    "tierName": "2-Bosqich: Structural Patterns (Decorator Pattern)",
    "sector": "GoF Structural",
    "title": {
      "uz": "55. Premier Cinema — Qo'shimcha Xususiyat (Decorator Pattern)",
      "en": "55. Premier Cinema — Dynamic Behavior Decorator"
    },
    "scenario": {
      "uz": "Premier Cinema da asosiy elementga merosxo'rliksiz qo'shimcha narx va xususiyat qo'shish kerak. 'CinemaTicketDecorator' sinfini tuzing: u 'CinemaTicketItem' obyektini o'rab olib, 'getCost()' narxiga +15.0 qo'shsin.",
      "en": "Implement Decorator pattern in Premier Cinema to wrap 'CinemaTicketItem' and augment 'getCost()' by +15.0."
    },
    "requirements": {
      "classes": [
        "CinemaTicketItem",
        "CinemaTicketDecorator"
      ],
      "methods": [
        "getCost"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class CinemaTicketItem {\n    public double getCost() { return 50.0; }\n}\n\nclass CinemaTicketDecorator extends CinemaTicketItem {\n    private CinemaTicketItem wrapped;\n    public CinemaTicketDecorator(CinemaTicketItem wrapped) {\n        this.wrapped = wrapped;\n    }\n    @Override\n    public double getCost() {\n        return (wrapped != null ? wrapped.getCost() : 0.0) + 15.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CinemaTicketItem item = new CinemaTicketItem();\n        CinemaTicketItem decorated = new CinemaTicketDecorator(item);\n        System.out.println(\"Asl narx: $\" + item.getCost());\n        System.out.println(\"Bezatilgan narx: $\" + decorated.getCost());\n    }\n}",
    "detailedSolution": {
      "theory": "Decorator Pattern — ob'yektga yangi majburiyat yoki funksiyalarni dinamik (ish vaqtida) qo'shish imkonini beradi. Har bir yangi xususiyat uchun yangi sinf meros olish shart bo'lmaydi.",
      "theoryEn": "Decorator pattern dynamically attaches additional responsibilities to an object without subclass explosion.",
      "cleanCode": "class CinemaTicketDecorator extends CinemaTicketItem {\n    private CinemaTicketItem wrapped;\n    public CinemaTicketDecorator(CinemaTicketItem w) { this.wrapped = w; }\n    @Override public double getCost() { return wrapped.getCost() + 15.0; }\n}",
      "breakdown": [
        "<code>CinemaTicketDecorator extends CinemaTicketItem</code>: Ham o'ralayotgan ob'yekt turida bo'ladi, ham uni o'z ichida saqlaydi."
      ],
      "pitfalls": "O'ralgan obyekt 'null' bo'lganda 'wrapped.getCost()' NullPointerException chaqirmasligini ta'minlang.",
      "cw2Tip": "Kofe ustiga sut yoki sirop qo'shish, pitsaga pishloq qo'shish CW2 ning Decorator talabi hisoblanadi."
    }
  },
  {
    "id": 56,
    "tier": 2,
    "tierName": "2-Bosqich: Structural Patterns (Decorator Pattern)",
    "sector": "GoF Structural",
    "title": {
      "uz": "56. Yandex Scooter — Qo'shimcha Xususiyat (Decorator Pattern)",
      "en": "56. Yandex Scooter — Dynamic Behavior Decorator"
    },
    "scenario": {
      "uz": "Yandex Scooter da asosiy elementga merosxo'rliksiz qo'shimcha narx va xususiyat qo'shish kerak. 'ElectricScooterDecorator' sinfini tuzing: u 'ElectricScooterItem' obyektini o'rab olib, 'getCost()' narxiga +15.0 qo'shsin.",
      "en": "Implement Decorator pattern in Yandex Scooter to wrap 'ElectricScooterItem' and augment 'getCost()' by +15.0."
    },
    "requirements": {
      "classes": [
        "ElectricScooterItem",
        "ElectricScooterDecorator"
      ],
      "methods": [
        "getCost"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class ElectricScooterItem {\n    public double getCost() { return 50.0; }\n}\n\nclass ElectricScooterDecorator extends ElectricScooterItem {\n    private ElectricScooterItem wrapped;\n    public ElectricScooterDecorator(ElectricScooterItem wrapped) {\n        this.wrapped = wrapped;\n    }\n    @Override\n    public double getCost() {\n        return (wrapped != null ? wrapped.getCost() : 0.0) + 15.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ElectricScooterItem item = new ElectricScooterItem();\n        ElectricScooterItem decorated = new ElectricScooterDecorator(item);\n        System.out.println(\"Asl narx: $\" + item.getCost());\n        System.out.println(\"Bezatilgan narx: $\" + decorated.getCost());\n    }\n}",
    "detailedSolution": {
      "theory": "Decorator Pattern — ob'yektga yangi majburiyat yoki funksiyalarni dinamik (ish vaqtida) qo'shish imkonini beradi. Har bir yangi xususiyat uchun yangi sinf meros olish shart bo'lmaydi.",
      "theoryEn": "Decorator pattern dynamically attaches additional responsibilities to an object without subclass explosion.",
      "cleanCode": "class ElectricScooterDecorator extends ElectricScooterItem {\n    private ElectricScooterItem wrapped;\n    public ElectricScooterDecorator(ElectricScooterItem w) { this.wrapped = w; }\n    @Override public double getCost() { return wrapped.getCost() + 15.0; }\n}",
      "breakdown": [
        "<code>ElectricScooterDecorator extends ElectricScooterItem</code>: Ham o'ralayotgan ob'yekt turida bo'ladi, ham uni o'z ichida saqlaydi."
      ],
      "pitfalls": "O'ralgan obyekt 'null' bo'lganda 'wrapped.getCost()' NullPointerException chaqirmasligini ta'minlang.",
      "cw2Tip": "Kofe ustiga sut yoki sirop qo'shish, pitsaga pishloq qo'shish CW2 ning Decorator talabi hisoblanadi."
    }
  },
  {
    "id": 57,
    "tier": 2,
    "tierName": "2-Bosqich: Structural Patterns (Decorator Pattern)",
    "sector": "GoF Structural",
    "title": {
      "uz": "57. Weather Network — Qo'shimcha Xususiyat (Decorator Pattern)",
      "en": "57. Weather Network — Dynamic Behavior Decorator"
    },
    "scenario": {
      "uz": "Weather Network da asosiy elementga merosxo'rliksiz qo'shimcha narx va xususiyat qo'shish kerak. 'MeteoStationDecorator' sinfini tuzing: u 'MeteoStationItem' obyektini o'rab olib, 'getCost()' narxiga +15.0 qo'shsin.",
      "en": "Implement Decorator pattern in Weather Network to wrap 'MeteoStationItem' and augment 'getCost()' by +15.0."
    },
    "requirements": {
      "classes": [
        "MeteoStationItem",
        "MeteoStationDecorator"
      ],
      "methods": [
        "getCost"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class MeteoStationItem {\n    public double getCost() { return 50.0; }\n}\n\nclass MeteoStationDecorator extends MeteoStationItem {\n    private MeteoStationItem wrapped;\n    public MeteoStationDecorator(MeteoStationItem wrapped) {\n        this.wrapped = wrapped;\n    }\n    @Override\n    public double getCost() {\n        return (wrapped != null ? wrapped.getCost() : 0.0) + 15.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MeteoStationItem item = new MeteoStationItem();\n        MeteoStationItem decorated = new MeteoStationDecorator(item);\n        System.out.println(\"Asl narx: $\" + item.getCost());\n        System.out.println(\"Bezatilgan narx: $\" + decorated.getCost());\n    }\n}",
    "detailedSolution": {
      "theory": "Decorator Pattern — ob'yektga yangi majburiyat yoki funksiyalarni dinamik (ish vaqtida) qo'shish imkonini beradi. Har bir yangi xususiyat uchun yangi sinf meros olish shart bo'lmaydi.",
      "theoryEn": "Decorator pattern dynamically attaches additional responsibilities to an object without subclass explosion.",
      "cleanCode": "class MeteoStationDecorator extends MeteoStationItem {\n    private MeteoStationItem wrapped;\n    public MeteoStationDecorator(MeteoStationItem w) { this.wrapped = w; }\n    @Override public double getCost() { return wrapped.getCost() + 15.0; }\n}",
      "breakdown": [
        "<code>MeteoStationDecorator extends MeteoStationItem</code>: Ham o'ralayotgan ob'yekt turida bo'ladi, ham uni o'z ichida saqlaydi."
      ],
      "pitfalls": "O'ralgan obyekt 'null' bo'lganda 'wrapped.getCost()' NullPointerException chaqirmasligini ta'minlang.",
      "cw2Tip": "Kofe ustiga sut yoki sirop qo'shish, pitsaga pishloq qo'shish CW2 ning Decorator talabi hisoblanadi."
    }
  },
  {
    "id": 58,
    "tier": 2,
    "tierName": "2-Bosqich: Structural Patterns (Decorator Pattern)",
    "sector": "GoF Structural",
    "title": {
      "uz": "58. OpenMarket Auction — Qo'shimcha Xususiyat (Decorator Pattern)",
      "en": "58. OpenMarket Auction — Dynamic Behavior Decorator"
    },
    "scenario": {
      "uz": "OpenMarket Auction da asosiy elementga merosxo'rliksiz qo'shimcha narx va xususiyat qo'shish kerak. 'AuctionLotDecorator' sinfini tuzing: u 'AuctionLotItem' obyektini o'rab olib, 'getCost()' narxiga +15.0 qo'shsin.",
      "en": "Implement Decorator pattern in OpenMarket Auction to wrap 'AuctionLotItem' and augment 'getCost()' by +15.0."
    },
    "requirements": {
      "classes": [
        "AuctionLotItem",
        "AuctionLotDecorator"
      ],
      "methods": [
        "getCost"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class AuctionLotItem {\n    public double getCost() { return 50.0; }\n}\n\nclass AuctionLotDecorator extends AuctionLotItem {\n    private AuctionLotItem wrapped;\n    public AuctionLotDecorator(AuctionLotItem wrapped) {\n        this.wrapped = wrapped;\n    }\n    @Override\n    public double getCost() {\n        return (wrapped != null ? wrapped.getCost() : 0.0) + 15.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AuctionLotItem item = new AuctionLotItem();\n        AuctionLotItem decorated = new AuctionLotDecorator(item);\n        System.out.println(\"Asl narx: $\" + item.getCost());\n        System.out.println(\"Bezatilgan narx: $\" + decorated.getCost());\n    }\n}",
    "detailedSolution": {
      "theory": "Decorator Pattern — ob'yektga yangi majburiyat yoki funksiyalarni dinamik (ish vaqtida) qo'shish imkonini beradi. Har bir yangi xususiyat uchun yangi sinf meros olish shart bo'lmaydi.",
      "theoryEn": "Decorator pattern dynamically attaches additional responsibilities to an object without subclass explosion.",
      "cleanCode": "class AuctionLotDecorator extends AuctionLotItem {\n    private AuctionLotItem wrapped;\n    public AuctionLotDecorator(AuctionLotItem w) { this.wrapped = w; }\n    @Override public double getCost() { return wrapped.getCost() + 15.0; }\n}",
      "breakdown": [
        "<code>AuctionLotDecorator extends AuctionLotItem</code>: Ham o'ralayotgan ob'yekt turida bo'ladi, ham uni o'z ichida saqlaydi."
      ],
      "pitfalls": "O'ralgan obyekt 'null' bo'lganda 'wrapped.getCost()' NullPointerException chaqirmasligini ta'minlang.",
      "cw2Tip": "Kofe ustiga sut yoki sirop qo'shish, pitsaga pishloq qo'shish CW2 ning Decorator talabi hisoblanadi."
    }
  },
  {
    "id": 59,
    "tier": 2,
    "tierName": "2-Bosqich: Structural Patterns (Decorator Pattern)",
    "sector": "GoF Structural",
    "title": {
      "uz": "59. Solar Energy Grid — Qo'shimcha Xususiyat (Decorator Pattern)",
      "en": "59. Solar Energy Grid — Dynamic Behavior Decorator"
    },
    "scenario": {
      "uz": "Solar Energy Grid da asosiy elementga merosxo'rliksiz qo'shimcha narx va xususiyat qo'shish kerak. 'SolarInverterDecorator' sinfini tuzing: u 'SolarInverterItem' obyektini o'rab olib, 'getCost()' narxiga +15.0 qo'shsin.",
      "en": "Implement Decorator pattern in Solar Energy Grid to wrap 'SolarInverterItem' and augment 'getCost()' by +15.0."
    },
    "requirements": {
      "classes": [
        "SolarInverterItem",
        "SolarInverterDecorator"
      ],
      "methods": [
        "getCost"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class SolarInverterItem {\n    public double getCost() { return 50.0; }\n}\n\nclass SolarInverterDecorator extends SolarInverterItem {\n    private SolarInverterItem wrapped;\n    public SolarInverterDecorator(SolarInverterItem wrapped) {\n        this.wrapped = wrapped;\n    }\n    @Override\n    public double getCost() {\n        return (wrapped != null ? wrapped.getCost() : 0.0) + 15.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SolarInverterItem item = new SolarInverterItem();\n        SolarInverterItem decorated = new SolarInverterDecorator(item);\n        System.out.println(\"Asl narx: $\" + item.getCost());\n        System.out.println(\"Bezatilgan narx: $\" + decorated.getCost());\n    }\n}",
    "detailedSolution": {
      "theory": "Decorator Pattern — ob'yektga yangi majburiyat yoki funksiyalarni dinamik (ish vaqtida) qo'shish imkonini beradi. Har bir yangi xususiyat uchun yangi sinf meros olish shart bo'lmaydi.",
      "theoryEn": "Decorator pattern dynamically attaches additional responsibilities to an object without subclass explosion.",
      "cleanCode": "class SolarInverterDecorator extends SolarInverterItem {\n    private SolarInverterItem wrapped;\n    public SolarInverterDecorator(SolarInverterItem w) { this.wrapped = w; }\n    @Override public double getCost() { return wrapped.getCost() + 15.0; }\n}",
      "breakdown": [
        "<code>SolarInverterDecorator extends SolarInverterItem</code>: Ham o'ralayotgan ob'yekt turida bo'ladi, ham uni o'z ichida saqlaydi."
      ],
      "pitfalls": "O'ralgan obyekt 'null' bo'lganda 'wrapped.getCost()' NullPointerException chaqirmasligini ta'minlang.",
      "cw2Tip": "Kofe ustiga sut yoki sirop qo'shish, pitsaga pishloq qo'shish CW2 ning Decorator talabi hisoblanadi."
    }
  },
  {
    "id": 60,
    "tier": 2,
    "tierName": "2-Bosqich: Structural Patterns (Decorator Pattern)",
    "sector": "GoF Structural",
    "title": {
      "uz": "60. O'zbekiston Temir Yo'llari — Qo'shimcha Xususiyat (Decorator Pattern)",
      "en": "60. O'zbekiston Temir Yo'llari — Dynamic Behavior Decorator"
    },
    "scenario": {
      "uz": "O'zbekiston Temir Yo'llari da asosiy elementga merosxo'rliksiz qo'shimcha narx va xususiyat qo'shish kerak. 'TrainRouteDecorator' sinfini tuzing: u 'TrainRouteItem' obyektini o'rab olib, 'getCost()' narxiga +15.0 qo'shsin.",
      "en": "Implement Decorator pattern in O'zbekiston Temir Yo'llari to wrap 'TrainRouteItem' and augment 'getCost()' by +15.0."
    },
    "requirements": {
      "classes": [
        "TrainRouteItem",
        "TrainRouteDecorator"
      ],
      "methods": [
        "getCost"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class TrainRouteItem {\n    public double getCost() { return 50.0; }\n}\n\nclass TrainRouteDecorator extends TrainRouteItem {\n    private TrainRouteItem wrapped;\n    public TrainRouteDecorator(TrainRouteItem wrapped) {\n        this.wrapped = wrapped;\n    }\n    @Override\n    public double getCost() {\n        return (wrapped != null ? wrapped.getCost() : 0.0) + 15.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TrainRouteItem item = new TrainRouteItem();\n        TrainRouteItem decorated = new TrainRouteDecorator(item);\n        System.out.println(\"Asl narx: $\" + item.getCost());\n        System.out.println(\"Bezatilgan narx: $\" + decorated.getCost());\n    }\n}",
    "detailedSolution": {
      "theory": "Decorator Pattern — ob'yektga yangi majburiyat yoki funksiyalarni dinamik (ish vaqtida) qo'shish imkonini beradi. Har bir yangi xususiyat uchun yangi sinf meros olish shart bo'lmaydi.",
      "theoryEn": "Decorator pattern dynamically attaches additional responsibilities to an object without subclass explosion.",
      "cleanCode": "class TrainRouteDecorator extends TrainRouteItem {\n    private TrainRouteItem wrapped;\n    public TrainRouteDecorator(TrainRouteItem w) { this.wrapped = w; }\n    @Override public double getCost() { return wrapped.getCost() + 15.0; }\n}",
      "breakdown": [
        "<code>TrainRouteDecorator extends TrainRouteItem</code>: Ham o'ralayotgan ob'yekt turida bo'ladi, ham uni o'z ichida saqlaydi."
      ],
      "pitfalls": "O'ralgan obyekt 'null' bo'lganda 'wrapped.getCost()' NullPointerException chaqirmasligini ta'minlang.",
      "cw2Tip": "Kofe ustiga sut yoki sirop qo'shish, pitsaga pishloq qo'shish CW2 ning Decorator talabi hisoblanadi."
    }
  },
  {
    "id": 61,
    "tier": 3,
    "tierName": "3-Bosqich: Behavioural Patterns (Strategy Pattern)",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "61. Uzum Market — Chegirma Algoritmlari (Strategy Pattern)",
      "en": "61. Uzum Market — Interchangeable Strategy Pattern"
    },
    "scenario": {
      "uz": "Uzum Market da chegirma hisoblash algoritmini almashtirib turiladigan qiling. 'IProductDiscountStrategy' tuzing va 'ProductOrderCalculator' sinfida strategiyani 'setStrategy()' orqali o'zgartiring.",
      "en": "Build Strategy pattern in Uzum Market: interchangeable discount algorithms via 'IProductDiscountStrategy'."
    },
    "requirements": {
      "classes": [
        "IProductDiscountStrategy",
        "RegularProductDiscount",
        "VipProductDiscount",
        "ProductOrderCalculator"
      ],
      "methods": [
        "applyDiscount"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IProductDiscountStrategy {\n    double applyDiscount(double total);\n}\n\nclass RegularProductDiscount implements IProductDiscountStrategy {\n    @Override public void applyDiscount(double total) { return total * 0.95; }\n}\n\nclass VipProductDiscount implements IProductDiscountStrategy {\n    @Override public double applyDiscount(double total) { return total * 0.80; }\n}\n\nclass ProductOrderCalculator {\n    private IProductDiscountStrategy strategy;\n    public void setStrategy(IProductDiscountStrategy strategy) { this.strategy = strategy; }\n    public double calculate(double total) {\n        return strategy != null ? strategy.applyDiscount(total) : total;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ProductOrderCalculator calc = new ProductOrderCalculator();\n        calc.setStrategy(new VipProductDiscount());\n        System.out.println(\"VIP narx: $\" + calc.calculate(100.0));\n    }\n}",
    "detailedSolution": {
      "theory": "Strategy Pattern — bir xil maqsadga yo'naltirilgan bir nechta algoritmlarni alohida sinflarga ajratadi va ularni ish vaqtida mijozga ko'ra osongina almashtirish imkonini beradi (if-else qatorlarini yo'qotadi).",
      "theoryEn": "Strategy pattern defines a family of algorithms, encapsulating each one, and making them interchangeable at runtime.",
      "cleanCode": "interface IProductDiscountStrategy { double applyDiscount(double total); }",
      "breakdown": [
        "<code>setStrategy(...)</code>: Dastur ishlash jarayonida algoritmni darhol almashtiradi."
      ],
      "pitfalls": "Har safar yangi chegirma chiqqanda if-else yozish Clean Code tamoyillariga ziddir (Open-Closed Principle).",
      "cw2Tip": "CW2 buyurtma ilovasida (Talaba chegirmasi, Yangi yil aksiyasi, VIP karta) aynan Strategy patterni orqali hisoblanadi."
    }
  },
  {
    "id": 62,
    "tier": 3,
    "tierName": "3-Bosqich: Behavioural Patterns (Strategy Pattern)",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "62. Payme Wallet — Chegirma Algoritmlari (Strategy Pattern)",
      "en": "62. Payme Wallet — Interchangeable Strategy Pattern"
    },
    "scenario": {
      "uz": "Payme Wallet da chegirma hisoblash algoritmini almashtirib turiladigan qiling. 'IWalletUserDiscountStrategy' tuzing va 'WalletUserOrderCalculator' sinfida strategiyani 'setStrategy()' orqali o'zgartiring.",
      "en": "Build Strategy pattern in Payme Wallet: interchangeable discount algorithms via 'IWalletUserDiscountStrategy'."
    },
    "requirements": {
      "classes": [
        "IWalletUserDiscountStrategy",
        "RegularWalletUserDiscount",
        "VipWalletUserDiscount",
        "WalletUserOrderCalculator"
      ],
      "methods": [
        "applyDiscount"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IWalletUserDiscountStrategy {\n    double applyDiscount(double total);\n}\n\nclass RegularWalletUserDiscount implements IWalletUserDiscountStrategy {\n    @Override public void applyDiscount(double total) { return total * 0.95; }\n}\n\nclass VipWalletUserDiscount implements IWalletUserDiscountStrategy {\n    @Override public double applyDiscount(double total) { return total * 0.80; }\n}\n\nclass WalletUserOrderCalculator {\n    private IWalletUserDiscountStrategy strategy;\n    public void setStrategy(IWalletUserDiscountStrategy strategy) { this.strategy = strategy; }\n    public double calculate(double total) {\n        return strategy != null ? strategy.applyDiscount(total) : total;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WalletUserOrderCalculator calc = new WalletUserOrderCalculator();\n        calc.setStrategy(new VipWalletUserDiscount());\n        System.out.println(\"VIP narx: $\" + calc.calculate(100.0));\n    }\n}",
    "detailedSolution": {
      "theory": "Strategy Pattern — bir xil maqsadga yo'naltirilgan bir nechta algoritmlarni alohida sinflarga ajratadi va ularni ish vaqtida mijozga ko'ra osongina almashtirish imkonini beradi (if-else qatorlarini yo'qotadi).",
      "theoryEn": "Strategy pattern defines a family of algorithms, encapsulating each one, and making them interchangeable at runtime.",
      "cleanCode": "interface IWalletUserDiscountStrategy { double applyDiscount(double total); }",
      "breakdown": [
        "<code>setStrategy(...)</code>: Dastur ishlash jarayonida algoritmni darhol almashtiradi."
      ],
      "pitfalls": "Har safar yangi chegirma chiqqanda if-else yozish Clean Code tamoyillariga ziddir (Open-Closed Principle).",
      "cw2Tip": "CW2 buyurtma ilovasida (Talaba chegirmasi, Yangi yil aksiyasi, VIP karta) aynan Strategy patterni orqali hisoblanadi."
    }
  },
  {
    "id": 63,
    "tier": 3,
    "tierName": "3-Bosqich: Behavioural Patterns (Strategy Pattern)",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "63. Yandex Go — Chegirma Algoritmlari (Strategy Pattern)",
      "en": "63. Yandex Go — Interchangeable Strategy Pattern"
    },
    "scenario": {
      "uz": "Yandex Go da chegirma hisoblash algoritmini almashtirib turiladigan qiling. 'ITaxiRideDiscountStrategy' tuzing va 'TaxiRideOrderCalculator' sinfida strategiyani 'setStrategy()' orqali o'zgartiring.",
      "en": "Build Strategy pattern in Yandex Go: interchangeable discount algorithms via 'ITaxiRideDiscountStrategy'."
    },
    "requirements": {
      "classes": [
        "ITaxiRideDiscountStrategy",
        "RegularTaxiRideDiscount",
        "VipTaxiRideDiscount",
        "TaxiRideOrderCalculator"
      ],
      "methods": [
        "applyDiscount"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface ITaxiRideDiscountStrategy {\n    double applyDiscount(double total);\n}\n\nclass RegularTaxiRideDiscount implements ITaxiRideDiscountStrategy {\n    @Override public void applyDiscount(double total) { return total * 0.95; }\n}\n\nclass VipTaxiRideDiscount implements ITaxiRideDiscountStrategy {\n    @Override public double applyDiscount(double total) { return total * 0.80; }\n}\n\nclass TaxiRideOrderCalculator {\n    private ITaxiRideDiscountStrategy strategy;\n    public void setStrategy(ITaxiRideDiscountStrategy strategy) { this.strategy = strategy; }\n    public double calculate(double total) {\n        return strategy != null ? strategy.applyDiscount(total) : total;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TaxiRideOrderCalculator calc = new TaxiRideOrderCalculator();\n        calc.setStrategy(new VipTaxiRideDiscount());\n        System.out.println(\"VIP narx: $\" + calc.calculate(100.0));\n    }\n}",
    "detailedSolution": {
      "theory": "Strategy Pattern — bir xil maqsadga yo'naltirilgan bir nechta algoritmlarni alohida sinflarga ajratadi va ularni ish vaqtida mijozga ko'ra osongina almashtirish imkonini beradi (if-else qatorlarini yo'qotadi).",
      "theoryEn": "Strategy pattern defines a family of algorithms, encapsulating each one, and making them interchangeable at runtime.",
      "cleanCode": "interface ITaxiRideDiscountStrategy { double applyDiscount(double total); }",
      "breakdown": [
        "<code>setStrategy(...)</code>: Dastur ishlash jarayonida algoritmni darhol almashtiradi."
      ],
      "pitfalls": "Har safar yangi chegirma chiqqanda if-else yozish Clean Code tamoyillariga ziddir (Open-Closed Principle).",
      "cw2Tip": "CW2 buyurtma ilovasida (Talaba chegirmasi, Yangi yil aksiyasi, VIP karta) aynan Strategy patterni orqali hisoblanadi."
    }
  },
  {
    "id": 64,
    "tier": 3,
    "tierName": "3-Bosqich: Behavioural Patterns (Strategy Pattern)",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "64. Korzinka Go — Chegirma Algoritmlari (Strategy Pattern)",
      "en": "64. Korzinka Go — Interchangeable Strategy Pattern"
    },
    "scenario": {
      "uz": "Korzinka Go da chegirma hisoblash algoritmini almashtirib turiladigan qiling. 'ILoyaltyCardDiscountStrategy' tuzing va 'LoyaltyCardOrderCalculator' sinfida strategiyani 'setStrategy()' orqali o'zgartiring.",
      "en": "Build Strategy pattern in Korzinka Go: interchangeable discount algorithms via 'ILoyaltyCardDiscountStrategy'."
    },
    "requirements": {
      "classes": [
        "ILoyaltyCardDiscountStrategy",
        "RegularLoyaltyCardDiscount",
        "VipLoyaltyCardDiscount",
        "LoyaltyCardOrderCalculator"
      ],
      "methods": [
        "applyDiscount"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface ILoyaltyCardDiscountStrategy {\n    double applyDiscount(double total);\n}\n\nclass RegularLoyaltyCardDiscount implements ILoyaltyCardDiscountStrategy {\n    @Override public void applyDiscount(double total) { return total * 0.95; }\n}\n\nclass VipLoyaltyCardDiscount implements ILoyaltyCardDiscountStrategy {\n    @Override public double applyDiscount(double total) { return total * 0.80; }\n}\n\nclass LoyaltyCardOrderCalculator {\n    private ILoyaltyCardDiscountStrategy strategy;\n    public void setStrategy(ILoyaltyCardDiscountStrategy strategy) { this.strategy = strategy; }\n    public double calculate(double total) {\n        return strategy != null ? strategy.applyDiscount(total) : total;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LoyaltyCardOrderCalculator calc = new LoyaltyCardOrderCalculator();\n        calc.setStrategy(new VipLoyaltyCardDiscount());\n        System.out.println(\"VIP narx: $\" + calc.calculate(100.0));\n    }\n}",
    "detailedSolution": {
      "theory": "Strategy Pattern — bir xil maqsadga yo'naltirilgan bir nechta algoritmlarni alohida sinflarga ajratadi va ularni ish vaqtida mijozga ko'ra osongina almashtirish imkonini beradi (if-else qatorlarini yo'qotadi).",
      "theoryEn": "Strategy pattern defines a family of algorithms, encapsulating each one, and making them interchangeable at runtime.",
      "cleanCode": "interface ILoyaltyCardDiscountStrategy { double applyDiscount(double total); }",
      "breakdown": [
        "<code>setStrategy(...)</code>: Dastur ishlash jarayonida algoritmni darhol almashtiradi."
      ],
      "pitfalls": "Har safar yangi chegirma chiqqanda if-else yozish Clean Code tamoyillariga ziddir (Open-Closed Principle).",
      "cw2Tip": "CW2 buyurtma ilovasida (Talaba chegirmasi, Yangi yil aksiyasi, VIP karta) aynan Strategy patterni orqali hisoblanadi."
    }
  },
  {
    "id": 65,
    "tier": 3,
    "tierName": "3-Bosqich: Behavioural Patterns (Strategy Pattern)",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "65. WIUT Portal — Chegirma Algoritmlari (Strategy Pattern)",
      "en": "65. WIUT Portal — Interchangeable Strategy Pattern"
    },
    "scenario": {
      "uz": "WIUT Portal da chegirma hisoblash algoritmini almashtirib turiladigan qiling. 'IStudentDiscountStrategy' tuzing va 'StudentOrderCalculator' sinfida strategiyani 'setStrategy()' orqali o'zgartiring.",
      "en": "Build Strategy pattern in WIUT Portal: interchangeable discount algorithms via 'IStudentDiscountStrategy'."
    },
    "requirements": {
      "classes": [
        "IStudentDiscountStrategy",
        "RegularStudentDiscount",
        "VipStudentDiscount",
        "StudentOrderCalculator"
      ],
      "methods": [
        "applyDiscount"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IStudentDiscountStrategy {\n    double applyDiscount(double total);\n}\n\nclass RegularStudentDiscount implements IStudentDiscountStrategy {\n    @Override public void applyDiscount(double total) { return total * 0.95; }\n}\n\nclass VipStudentDiscount implements IStudentDiscountStrategy {\n    @Override public double applyDiscount(double total) { return total * 0.80; }\n}\n\nclass StudentOrderCalculator {\n    private IStudentDiscountStrategy strategy;\n    public void setStrategy(IStudentDiscountStrategy strategy) { this.strategy = strategy; }\n    public double calculate(double total) {\n        return strategy != null ? strategy.applyDiscount(total) : total;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StudentOrderCalculator calc = new StudentOrderCalculator();\n        calc.setStrategy(new VipStudentDiscount());\n        System.out.println(\"VIP narx: $\" + calc.calculate(100.0));\n    }\n}",
    "detailedSolution": {
      "theory": "Strategy Pattern — bir xil maqsadga yo'naltirilgan bir nechta algoritmlarni alohida sinflarga ajratadi va ularni ish vaqtida mijozga ko'ra osongina almashtirish imkonini beradi (if-else qatorlarini yo'qotadi).",
      "theoryEn": "Strategy pattern defines a family of algorithms, encapsulating each one, and making them interchangeable at runtime.",
      "cleanCode": "interface IStudentDiscountStrategy { double applyDiscount(double total); }",
      "breakdown": [
        "<code>setStrategy(...)</code>: Dastur ishlash jarayonida algoritmni darhol almashtiradi."
      ],
      "pitfalls": "Har safar yangi chegirma chiqqanda if-else yozish Clean Code tamoyillariga ziddir (Open-Closed Principle).",
      "cw2Tip": "CW2 buyurtma ilovasida (Talaba chegirmasi, Yangi yil aksiyasi, VIP karta) aynan Strategy patterni orqali hisoblanadi."
    }
  },
  {
    "id": 66,
    "tier": 3,
    "tierName": "3-Bosqich: Behavioural Patterns (Strategy Pattern)",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "66. Click Pay — Chegirma Algoritmlari (Strategy Pattern)",
      "en": "66. Click Pay — Interchangeable Strategy Pattern"
    },
    "scenario": {
      "uz": "Click Pay da chegirma hisoblash algoritmini almashtirib turiladigan qiling. 'IPaymentTxnDiscountStrategy' tuzing va 'PaymentTxnOrderCalculator' sinfida strategiyani 'setStrategy()' orqali o'zgartiring.",
      "en": "Build Strategy pattern in Click Pay: interchangeable discount algorithms via 'IPaymentTxnDiscountStrategy'."
    },
    "requirements": {
      "classes": [
        "IPaymentTxnDiscountStrategy",
        "RegularPaymentTxnDiscount",
        "VipPaymentTxnDiscount",
        "PaymentTxnOrderCalculator"
      ],
      "methods": [
        "applyDiscount"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IPaymentTxnDiscountStrategy {\n    double applyDiscount(double total);\n}\n\nclass RegularPaymentTxnDiscount implements IPaymentTxnDiscountStrategy {\n    @Override public void applyDiscount(double total) { return total * 0.95; }\n}\n\nclass VipPaymentTxnDiscount implements IPaymentTxnDiscountStrategy {\n    @Override public double applyDiscount(double total) { return total * 0.80; }\n}\n\nclass PaymentTxnOrderCalculator {\n    private IPaymentTxnDiscountStrategy strategy;\n    public void setStrategy(IPaymentTxnDiscountStrategy strategy) { this.strategy = strategy; }\n    public double calculate(double total) {\n        return strategy != null ? strategy.applyDiscount(total) : total;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentTxnOrderCalculator calc = new PaymentTxnOrderCalculator();\n        calc.setStrategy(new VipPaymentTxnDiscount());\n        System.out.println(\"VIP narx: $\" + calc.calculate(100.0));\n    }\n}",
    "detailedSolution": {
      "theory": "Strategy Pattern — bir xil maqsadga yo'naltirilgan bir nechta algoritmlarni alohida sinflarga ajratadi va ularni ish vaqtida mijozga ko'ra osongina almashtirish imkonini beradi (if-else qatorlarini yo'qotadi).",
      "theoryEn": "Strategy pattern defines a family of algorithms, encapsulating each one, and making them interchangeable at runtime.",
      "cleanCode": "interface IPaymentTxnDiscountStrategy { double applyDiscount(double total); }",
      "breakdown": [
        "<code>setStrategy(...)</code>: Dastur ishlash jarayonida algoritmni darhol almashtiradi."
      ],
      "pitfalls": "Har safar yangi chegirma chiqqanda if-else yozish Clean Code tamoyillariga ziddir (Open-Closed Principle).",
      "cw2Tip": "CW2 buyurtma ilovasida (Talaba chegirmasi, Yangi yil aksiyasi, VIP karta) aynan Strategy patterni orqali hisoblanadi."
    }
  },
  {
    "id": 67,
    "tier": 3,
    "tierName": "3-Bosqich: Behavioural Patterns (Strategy Pattern)",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "67. Telegram Bot — Chegirma Algoritmlari (Strategy Pattern)",
      "en": "67. Telegram Bot — Interchangeable Strategy Pattern"
    },
    "scenario": {
      "uz": "Telegram Bot da chegirma hisoblash algoritmini almashtirib turiladigan qiling. 'IBotMessageDiscountStrategy' tuzing va 'BotMessageOrderCalculator' sinfida strategiyani 'setStrategy()' orqali o'zgartiring.",
      "en": "Build Strategy pattern in Telegram Bot: interchangeable discount algorithms via 'IBotMessageDiscountStrategy'."
    },
    "requirements": {
      "classes": [
        "IBotMessageDiscountStrategy",
        "RegularBotMessageDiscount",
        "VipBotMessageDiscount",
        "BotMessageOrderCalculator"
      ],
      "methods": [
        "applyDiscount"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IBotMessageDiscountStrategy {\n    double applyDiscount(double total);\n}\n\nclass RegularBotMessageDiscount implements IBotMessageDiscountStrategy {\n    @Override public void applyDiscount(double total) { return total * 0.95; }\n}\n\nclass VipBotMessageDiscount implements IBotMessageDiscountStrategy {\n    @Override public double applyDiscount(double total) { return total * 0.80; }\n}\n\nclass BotMessageOrderCalculator {\n    private IBotMessageDiscountStrategy strategy;\n    public void setStrategy(IBotMessageDiscountStrategy strategy) { this.strategy = strategy; }\n    public double calculate(double total) {\n        return strategy != null ? strategy.applyDiscount(total) : total;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BotMessageOrderCalculator calc = new BotMessageOrderCalculator();\n        calc.setStrategy(new VipBotMessageDiscount());\n        System.out.println(\"VIP narx: $\" + calc.calculate(100.0));\n    }\n}",
    "detailedSolution": {
      "theory": "Strategy Pattern — bir xil maqsadga yo'naltirilgan bir nechta algoritmlarni alohida sinflarga ajratadi va ularni ish vaqtida mijozga ko'ra osongina almashtirish imkonini beradi (if-else qatorlarini yo'qotadi).",
      "theoryEn": "Strategy pattern defines a family of algorithms, encapsulating each one, and making them interchangeable at runtime.",
      "cleanCode": "interface IBotMessageDiscountStrategy { double applyDiscount(double total); }",
      "breakdown": [
        "<code>setStrategy(...)</code>: Dastur ishlash jarayonida algoritmni darhol almashtiradi."
      ],
      "pitfalls": "Har safar yangi chegirma chiqqanda if-else yozish Clean Code tamoyillariga ziddir (Open-Closed Principle).",
      "cw2Tip": "CW2 buyurtma ilovasida (Talaba chegirmasi, Yangi yil aksiyasi, VIP karta) aynan Strategy patterni orqali hisoblanadi."
    }
  },
  {
    "id": 68,
    "tier": 3,
    "tierName": "3-Bosqich: Behavioural Patterns (Strategy Pattern)",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "68. UzAirways — Chegirma Algoritmlari (Strategy Pattern)",
      "en": "68. UzAirways — Interchangeable Strategy Pattern"
    },
    "scenario": {
      "uz": "UzAirways da chegirma hisoblash algoritmini almashtirib turiladigan qiling. 'IFlightTicketDiscountStrategy' tuzing va 'FlightTicketOrderCalculator' sinfida strategiyani 'setStrategy()' orqali o'zgartiring.",
      "en": "Build Strategy pattern in UzAirways: interchangeable discount algorithms via 'IFlightTicketDiscountStrategy'."
    },
    "requirements": {
      "classes": [
        "IFlightTicketDiscountStrategy",
        "RegularFlightTicketDiscount",
        "VipFlightTicketDiscount",
        "FlightTicketOrderCalculator"
      ],
      "methods": [
        "applyDiscount"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IFlightTicketDiscountStrategy {\n    double applyDiscount(double total);\n}\n\nclass RegularFlightTicketDiscount implements IFlightTicketDiscountStrategy {\n    @Override public void applyDiscount(double total) { return total * 0.95; }\n}\n\nclass VipFlightTicketDiscount implements IFlightTicketDiscountStrategy {\n    @Override public double applyDiscount(double total) { return total * 0.80; }\n}\n\nclass FlightTicketOrderCalculator {\n    private IFlightTicketDiscountStrategy strategy;\n    public void setStrategy(IFlightTicketDiscountStrategy strategy) { this.strategy = strategy; }\n    public double calculate(double total) {\n        return strategy != null ? strategy.applyDiscount(total) : total;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FlightTicketOrderCalculator calc = new FlightTicketOrderCalculator();\n        calc.setStrategy(new VipFlightTicketDiscount());\n        System.out.println(\"VIP narx: $\" + calc.calculate(100.0));\n    }\n}",
    "detailedSolution": {
      "theory": "Strategy Pattern — bir xil maqsadga yo'naltirilgan bir nechta algoritmlarni alohida sinflarga ajratadi va ularni ish vaqtida mijozga ko'ra osongina almashtirish imkonini beradi (if-else qatorlarini yo'qotadi).",
      "theoryEn": "Strategy pattern defines a family of algorithms, encapsulating each one, and making them interchangeable at runtime.",
      "cleanCode": "interface IFlightTicketDiscountStrategy { double applyDiscount(double total); }",
      "breakdown": [
        "<code>setStrategy(...)</code>: Dastur ishlash jarayonida algoritmni darhol almashtiradi."
      ],
      "pitfalls": "Har safar yangi chegirma chiqqanda if-else yozish Clean Code tamoyillariga ziddir (Open-Closed Principle).",
      "cw2Tip": "CW2 buyurtma ilovasida (Talaba chegirmasi, Yangi yil aksiyasi, VIP karta) aynan Strategy patterni orqali hisoblanadi."
    }
  },
  {
    "id": 69,
    "tier": 3,
    "tierName": "3-Bosqich: Behavioural Patterns (Strategy Pattern)",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "69. IT Park Academy — Chegirma Algoritmlari (Strategy Pattern)",
      "en": "69. IT Park Academy — Interchangeable Strategy Pattern"
    },
    "scenario": {
      "uz": "IT Park Academy da chegirma hisoblash algoritmini almashtirib turiladigan qiling. 'IBootcampCourseDiscountStrategy' tuzing va 'BootcampCourseOrderCalculator' sinfida strategiyani 'setStrategy()' orqali o'zgartiring.",
      "en": "Build Strategy pattern in IT Park Academy: interchangeable discount algorithms via 'IBootcampCourseDiscountStrategy'."
    },
    "requirements": {
      "classes": [
        "IBootcampCourseDiscountStrategy",
        "RegularBootcampCourseDiscount",
        "VipBootcampCourseDiscount",
        "BootcampCourseOrderCalculator"
      ],
      "methods": [
        "applyDiscount"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IBootcampCourseDiscountStrategy {\n    double applyDiscount(double total);\n}\n\nclass RegularBootcampCourseDiscount implements IBootcampCourseDiscountStrategy {\n    @Override public void applyDiscount(double total) { return total * 0.95; }\n}\n\nclass VipBootcampCourseDiscount implements IBootcampCourseDiscountStrategy {\n    @Override public double applyDiscount(double total) { return total * 0.80; }\n}\n\nclass BootcampCourseOrderCalculator {\n    private IBootcampCourseDiscountStrategy strategy;\n    public void setStrategy(IBootcampCourseDiscountStrategy strategy) { this.strategy = strategy; }\n    public double calculate(double total) {\n        return strategy != null ? strategy.applyDiscount(total) : total;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BootcampCourseOrderCalculator calc = new BootcampCourseOrderCalculator();\n        calc.setStrategy(new VipBootcampCourseDiscount());\n        System.out.println(\"VIP narx: $\" + calc.calculate(100.0));\n    }\n}",
    "detailedSolution": {
      "theory": "Strategy Pattern — bir xil maqsadga yo'naltirilgan bir nechta algoritmlarni alohida sinflarga ajratadi va ularni ish vaqtida mijozga ko'ra osongina almashtirish imkonini beradi (if-else qatorlarini yo'qotadi).",
      "theoryEn": "Strategy pattern defines a family of algorithms, encapsulating each one, and making them interchangeable at runtime.",
      "cleanCode": "interface IBootcampCourseDiscountStrategy { double applyDiscount(double total); }",
      "breakdown": [
        "<code>setStrategy(...)</code>: Dastur ishlash jarayonida algoritmni darhol almashtiradi."
      ],
      "pitfalls": "Har safar yangi chegirma chiqqanda if-else yozish Clean Code tamoyillariga ziddir (Open-Closed Principle).",
      "cw2Tip": "CW2 buyurtma ilovasida (Talaba chegirmasi, Yangi yil aksiyasi, VIP karta) aynan Strategy patterni orqali hisoblanadi."
    }
  },
  {
    "id": 70,
    "tier": 3,
    "tierName": "3-Bosqich: Behavioural Patterns (Strategy Pattern)",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "70. Anorbank — Chegirma Algoritmlari (Strategy Pattern)",
      "en": "70. Anorbank — Interchangeable Strategy Pattern"
    },
    "scenario": {
      "uz": "Anorbank da chegirma hisoblash algoritmini almashtirib turiladigan qiling. 'IDebitCardDiscountStrategy' tuzing va 'DebitCardOrderCalculator' sinfida strategiyani 'setStrategy()' orqali o'zgartiring.",
      "en": "Build Strategy pattern in Anorbank: interchangeable discount algorithms via 'IDebitCardDiscountStrategy'."
    },
    "requirements": {
      "classes": [
        "IDebitCardDiscountStrategy",
        "RegularDebitCardDiscount",
        "VipDebitCardDiscount",
        "DebitCardOrderCalculator"
      ],
      "methods": [
        "applyDiscount"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IDebitCardDiscountStrategy {\n    double applyDiscount(double total);\n}\n\nclass RegularDebitCardDiscount implements IDebitCardDiscountStrategy {\n    @Override public void applyDiscount(double total) { return total * 0.95; }\n}\n\nclass VipDebitCardDiscount implements IDebitCardDiscountStrategy {\n    @Override public double applyDiscount(double total) { return total * 0.80; }\n}\n\nclass DebitCardOrderCalculator {\n    private IDebitCardDiscountStrategy strategy;\n    public void setStrategy(IDebitCardDiscountStrategy strategy) { this.strategy = strategy; }\n    public double calculate(double total) {\n        return strategy != null ? strategy.applyDiscount(total) : total;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DebitCardOrderCalculator calc = new DebitCardOrderCalculator();\n        calc.setStrategy(new VipDebitCardDiscount());\n        System.out.println(\"VIP narx: $\" + calc.calculate(100.0));\n    }\n}",
    "detailedSolution": {
      "theory": "Strategy Pattern — bir xil maqsadga yo'naltirilgan bir nechta algoritmlarni alohida sinflarga ajratadi va ularni ish vaqtida mijozga ko'ra osongina almashtirish imkonini beradi (if-else qatorlarini yo'qotadi).",
      "theoryEn": "Strategy pattern defines a family of algorithms, encapsulating each one, and making them interchangeable at runtime.",
      "cleanCode": "interface IDebitCardDiscountStrategy { double applyDiscount(double total); }",
      "breakdown": [
        "<code>setStrategy(...)</code>: Dastur ishlash jarayonida algoritmni darhol almashtiradi."
      ],
      "pitfalls": "Har safar yangi chegirma chiqqanda if-else yozish Clean Code tamoyillariga ziddir (Open-Closed Principle).",
      "cw2Tip": "CW2 buyurtma ilovasida (Talaba chegirmasi, Yangi yil aksiyasi, VIP karta) aynan Strategy patterni orqali hisoblanadi."
    }
  },
  {
    "id": 71,
    "tier": 3,
    "tierName": "3-Bosqich: Behavioural Patterns (Strategy Pattern)",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "71. Oson Apteka — Chegirma Algoritmlari (Strategy Pattern)",
      "en": "71. Oson Apteka — Interchangeable Strategy Pattern"
    },
    "scenario": {
      "uz": "Oson Apteka da chegirma hisoblash algoritmini almashtirib turiladigan qiling. 'IMedicineDiscountStrategy' tuzing va 'MedicineOrderCalculator' sinfida strategiyani 'setStrategy()' orqali o'zgartiring.",
      "en": "Build Strategy pattern in Oson Apteka: interchangeable discount algorithms via 'IMedicineDiscountStrategy'."
    },
    "requirements": {
      "classes": [
        "IMedicineDiscountStrategy",
        "RegularMedicineDiscount",
        "VipMedicineDiscount",
        "MedicineOrderCalculator"
      ],
      "methods": [
        "applyDiscount"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IMedicineDiscountStrategy {\n    double applyDiscount(double total);\n}\n\nclass RegularMedicineDiscount implements IMedicineDiscountStrategy {\n    @Override public void applyDiscount(double total) { return total * 0.95; }\n}\n\nclass VipMedicineDiscount implements IMedicineDiscountStrategy {\n    @Override public double applyDiscount(double total) { return total * 0.80; }\n}\n\nclass MedicineOrderCalculator {\n    private IMedicineDiscountStrategy strategy;\n    public void setStrategy(IMedicineDiscountStrategy strategy) { this.strategy = strategy; }\n    public double calculate(double total) {\n        return strategy != null ? strategy.applyDiscount(total) : total;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MedicineOrderCalculator calc = new MedicineOrderCalculator();\n        calc.setStrategy(new VipMedicineDiscount());\n        System.out.println(\"VIP narx: $\" + calc.calculate(100.0));\n    }\n}",
    "detailedSolution": {
      "theory": "Strategy Pattern — bir xil maqsadga yo'naltirilgan bir nechta algoritmlarni alohida sinflarga ajratadi va ularni ish vaqtida mijozga ko'ra osongina almashtirish imkonini beradi (if-else qatorlarini yo'qotadi).",
      "theoryEn": "Strategy pattern defines a family of algorithms, encapsulating each one, and making them interchangeable at runtime.",
      "cleanCode": "interface IMedicineDiscountStrategy { double applyDiscount(double total); }",
      "breakdown": [
        "<code>setStrategy(...)</code>: Dastur ishlash jarayonida algoritmni darhol almashtiradi."
      ],
      "pitfalls": "Har safar yangi chegirma chiqqanda if-else yozish Clean Code tamoyillariga ziddir (Open-Closed Principle).",
      "cw2Tip": "CW2 buyurtma ilovasida (Talaba chegirmasi, Yangi yil aksiyasi, VIP karta) aynan Strategy patterni orqali hisoblanadi."
    }
  },
  {
    "id": 72,
    "tier": 3,
    "tierName": "3-Bosqich: Behavioural Patterns (Strategy Pattern)",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "72. Evos FastFood — Chegirma Algoritmlari (Strategy Pattern)",
      "en": "72. Evos FastFood — Interchangeable Strategy Pattern"
    },
    "scenario": {
      "uz": "Evos FastFood da chegirma hisoblash algoritmini almashtirib turiladigan qiling. 'IFoodOrderDiscountStrategy' tuzing va 'FoodOrderOrderCalculator' sinfida strategiyani 'setStrategy()' orqali o'zgartiring.",
      "en": "Build Strategy pattern in Evos FastFood: interchangeable discount algorithms via 'IFoodOrderDiscountStrategy'."
    },
    "requirements": {
      "classes": [
        "IFoodOrderDiscountStrategy",
        "RegularFoodOrderDiscount",
        "VipFoodOrderDiscount",
        "FoodOrderOrderCalculator"
      ],
      "methods": [
        "applyDiscount"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IFoodOrderDiscountStrategy {\n    double applyDiscount(double total);\n}\n\nclass RegularFoodOrderDiscount implements IFoodOrderDiscountStrategy {\n    @Override public void applyDiscount(double total) { return total * 0.95; }\n}\n\nclass VipFoodOrderDiscount implements IFoodOrderDiscountStrategy {\n    @Override public double applyDiscount(double total) { return total * 0.80; }\n}\n\nclass FoodOrderOrderCalculator {\n    private IFoodOrderDiscountStrategy strategy;\n    public void setStrategy(IFoodOrderDiscountStrategy strategy) { this.strategy = strategy; }\n    public double calculate(double total) {\n        return strategy != null ? strategy.applyDiscount(total) : total;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FoodOrderOrderCalculator calc = new FoodOrderOrderCalculator();\n        calc.setStrategy(new VipFoodOrderDiscount());\n        System.out.println(\"VIP narx: $\" + calc.calculate(100.0));\n    }\n}",
    "detailedSolution": {
      "theory": "Strategy Pattern — bir xil maqsadga yo'naltirilgan bir nechta algoritmlarni alohida sinflarga ajratadi va ularni ish vaqtida mijozga ko'ra osongina almashtirish imkonini beradi (if-else qatorlarini yo'qotadi).",
      "theoryEn": "Strategy pattern defines a family of algorithms, encapsulating each one, and making them interchangeable at runtime.",
      "cleanCode": "interface IFoodOrderDiscountStrategy { double applyDiscount(double total); }",
      "breakdown": [
        "<code>setStrategy(...)</code>: Dastur ishlash jarayonida algoritmni darhol almashtiradi."
      ],
      "pitfalls": "Har safar yangi chegirma chiqqanda if-else yozish Clean Code tamoyillariga ziddir (Open-Closed Principle).",
      "cw2Tip": "CW2 buyurtma ilovasida (Talaba chegirmasi, Yangi yil aksiyasi, VIP karta) aynan Strategy patterni orqali hisoblanadi."
    }
  },
  {
    "id": 73,
    "tier": 3,
    "tierName": "3-Bosqich: Behavioural Patterns (Strategy Pattern)",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "73. Bellissimo Pizza — Chegirma Algoritmlari (Strategy Pattern)",
      "en": "73. Bellissimo Pizza — Interchangeable Strategy Pattern"
    },
    "scenario": {
      "uz": "Bellissimo Pizza da chegirma hisoblash algoritmini almashtirib turiladigan qiling. 'IPizzaOrderDiscountStrategy' tuzing va 'PizzaOrderOrderCalculator' sinfida strategiyani 'setStrategy()' orqali o'zgartiring.",
      "en": "Build Strategy pattern in Bellissimo Pizza: interchangeable discount algorithms via 'IPizzaOrderDiscountStrategy'."
    },
    "requirements": {
      "classes": [
        "IPizzaOrderDiscountStrategy",
        "RegularPizzaOrderDiscount",
        "VipPizzaOrderDiscount",
        "PizzaOrderOrderCalculator"
      ],
      "methods": [
        "applyDiscount"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IPizzaOrderDiscountStrategy {\n    double applyDiscount(double total);\n}\n\nclass RegularPizzaOrderDiscount implements IPizzaOrderDiscountStrategy {\n    @Override public void applyDiscount(double total) { return total * 0.95; }\n}\n\nclass VipPizzaOrderDiscount implements IPizzaOrderDiscountStrategy {\n    @Override public double applyDiscount(double total) { return total * 0.80; }\n}\n\nclass PizzaOrderOrderCalculator {\n    private IPizzaOrderDiscountStrategy strategy;\n    public void setStrategy(IPizzaOrderDiscountStrategy strategy) { this.strategy = strategy; }\n    public double calculate(double total) {\n        return strategy != null ? strategy.applyDiscount(total) : total;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PizzaOrderOrderCalculator calc = new PizzaOrderOrderCalculator();\n        calc.setStrategy(new VipPizzaOrderDiscount());\n        System.out.println(\"VIP narx: $\" + calc.calculate(100.0));\n    }\n}",
    "detailedSolution": {
      "theory": "Strategy Pattern — bir xil maqsadga yo'naltirilgan bir nechta algoritmlarni alohida sinflarga ajratadi va ularni ish vaqtida mijozga ko'ra osongina almashtirish imkonini beradi (if-else qatorlarini yo'qotadi).",
      "theoryEn": "Strategy pattern defines a family of algorithms, encapsulating each one, and making them interchangeable at runtime.",
      "cleanCode": "interface IPizzaOrderDiscountStrategy { double applyDiscount(double total); }",
      "breakdown": [
        "<code>setStrategy(...)</code>: Dastur ishlash jarayonida algoritmni darhol almashtiradi."
      ],
      "pitfalls": "Har safar yangi chegirma chiqqanda if-else yozish Clean Code tamoyillariga ziddir (Open-Closed Principle).",
      "cw2Tip": "CW2 buyurtma ilovasida (Talaba chegirmasi, Yangi yil aksiyasi, VIP karta) aynan Strategy patterni orqali hisoblanadi."
    }
  },
  {
    "id": 74,
    "tier": 3,
    "tierName": "3-Bosqich: Behavioural Patterns (Strategy Pattern)",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "74. Milliy TV — Chegirma Algoritmlari (Strategy Pattern)",
      "en": "74. Milliy TV — Interchangeable Strategy Pattern"
    },
    "scenario": {
      "uz": "Milliy TV da chegirma hisoblash algoritmini almashtirib turiladigan qiling. 'IBroadcastShowDiscountStrategy' tuzing va 'BroadcastShowOrderCalculator' sinfida strategiyani 'setStrategy()' orqali o'zgartiring.",
      "en": "Build Strategy pattern in Milliy TV: interchangeable discount algorithms via 'IBroadcastShowDiscountStrategy'."
    },
    "requirements": {
      "classes": [
        "IBroadcastShowDiscountStrategy",
        "RegularBroadcastShowDiscount",
        "VipBroadcastShowDiscount",
        "BroadcastShowOrderCalculator"
      ],
      "methods": [
        "applyDiscount"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IBroadcastShowDiscountStrategy {\n    double applyDiscount(double total);\n}\n\nclass RegularBroadcastShowDiscount implements IBroadcastShowDiscountStrategy {\n    @Override public void applyDiscount(double total) { return total * 0.95; }\n}\n\nclass VipBroadcastShowDiscount implements IBroadcastShowDiscountStrategy {\n    @Override public double applyDiscount(double total) { return total * 0.80; }\n}\n\nclass BroadcastShowOrderCalculator {\n    private IBroadcastShowDiscountStrategy strategy;\n    public void setStrategy(IBroadcastShowDiscountStrategy strategy) { this.strategy = strategy; }\n    public double calculate(double total) {\n        return strategy != null ? strategy.applyDiscount(total) : total;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BroadcastShowOrderCalculator calc = new BroadcastShowOrderCalculator();\n        calc.setStrategy(new VipBroadcastShowDiscount());\n        System.out.println(\"VIP narx: $\" + calc.calculate(100.0));\n    }\n}",
    "detailedSolution": {
      "theory": "Strategy Pattern — bir xil maqsadga yo'naltirilgan bir nechta algoritmlarni alohida sinflarga ajratadi va ularni ish vaqtida mijozga ko'ra osongina almashtirish imkonini beradi (if-else qatorlarini yo'qotadi).",
      "theoryEn": "Strategy pattern defines a family of algorithms, encapsulating each one, and making them interchangeable at runtime.",
      "cleanCode": "interface IBroadcastShowDiscountStrategy { double applyDiscount(double total); }",
      "breakdown": [
        "<code>setStrategy(...)</code>: Dastur ishlash jarayonida algoritmni darhol almashtiradi."
      ],
      "pitfalls": "Har safar yangi chegirma chiqqanda if-else yozish Clean Code tamoyillariga ziddir (Open-Closed Principle).",
      "cw2Tip": "CW2 buyurtma ilovasida (Talaba chegirmasi, Yangi yil aksiyasi, VIP karta) aynan Strategy patterni orqali hisoblanadi."
    }
  },
  {
    "id": 75,
    "tier": 3,
    "tierName": "3-Bosqich: Behavioural Patterns (Strategy Pattern)",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "75. Spotify Sound — Chegirma Algoritmlari (Strategy Pattern)",
      "en": "75. Spotify Sound — Interchangeable Strategy Pattern"
    },
    "scenario": {
      "uz": "Spotify Sound da chegirma hisoblash algoritmini almashtirib turiladigan qiling. 'IAudioTrackDiscountStrategy' tuzing va 'AudioTrackOrderCalculator' sinfida strategiyani 'setStrategy()' orqali o'zgartiring.",
      "en": "Build Strategy pattern in Spotify Sound: interchangeable discount algorithms via 'IAudioTrackDiscountStrategy'."
    },
    "requirements": {
      "classes": [
        "IAudioTrackDiscountStrategy",
        "RegularAudioTrackDiscount",
        "VipAudioTrackDiscount",
        "AudioTrackOrderCalculator"
      ],
      "methods": [
        "applyDiscount"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IAudioTrackDiscountStrategy {\n    double applyDiscount(double total);\n}\n\nclass RegularAudioTrackDiscount implements IAudioTrackDiscountStrategy {\n    @Override public void applyDiscount(double total) { return total * 0.95; }\n}\n\nclass VipAudioTrackDiscount implements IAudioTrackDiscountStrategy {\n    @Override public double applyDiscount(double total) { return total * 0.80; }\n}\n\nclass AudioTrackOrderCalculator {\n    private IAudioTrackDiscountStrategy strategy;\n    public void setStrategy(IAudioTrackDiscountStrategy strategy) { this.strategy = strategy; }\n    public double calculate(double total) {\n        return strategy != null ? strategy.applyDiscount(total) : total;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AudioTrackOrderCalculator calc = new AudioTrackOrderCalculator();\n        calc.setStrategy(new VipAudioTrackDiscount());\n        System.out.println(\"VIP narx: $\" + calc.calculate(100.0));\n    }\n}",
    "detailedSolution": {
      "theory": "Strategy Pattern — bir xil maqsadga yo'naltirilgan bir nechta algoritmlarni alohida sinflarga ajratadi va ularni ish vaqtida mijozga ko'ra osongina almashtirish imkonini beradi (if-else qatorlarini yo'qotadi).",
      "theoryEn": "Strategy pattern defines a family of algorithms, encapsulating each one, and making them interchangeable at runtime.",
      "cleanCode": "interface IAudioTrackDiscountStrategy { double applyDiscount(double total); }",
      "breakdown": [
        "<code>setStrategy(...)</code>: Dastur ishlash jarayonida algoritmni darhol almashtiradi."
      ],
      "pitfalls": "Har safar yangi chegirma chiqqanda if-else yozish Clean Code tamoyillariga ziddir (Open-Closed Principle).",
      "cw2Tip": "CW2 buyurtma ilovasida (Talaba chegirmasi, Yangi yil aksiyasi, VIP karta) aynan Strategy patterni orqali hisoblanadi."
    }
  },
  {
    "id": 76,
    "tier": 3,
    "tierName": "3-Bosqich: Behavioural Patterns (Strategy Pattern)",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "76. Smart Thermostat — Chegirma Algoritmlari (Strategy Pattern)",
      "en": "76. Smart Thermostat — Interchangeable Strategy Pattern"
    },
    "scenario": {
      "uz": "Smart Thermostat da chegirma hisoblash algoritmini almashtirib turiladigan qiling. 'IThermostatDiscountStrategy' tuzing va 'ThermostatOrderCalculator' sinfida strategiyani 'setStrategy()' orqali o'zgartiring.",
      "en": "Build Strategy pattern in Smart Thermostat: interchangeable discount algorithms via 'IThermostatDiscountStrategy'."
    },
    "requirements": {
      "classes": [
        "IThermostatDiscountStrategy",
        "RegularThermostatDiscount",
        "VipThermostatDiscount",
        "ThermostatOrderCalculator"
      ],
      "methods": [
        "applyDiscount"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IThermostatDiscountStrategy {\n    double applyDiscount(double total);\n}\n\nclass RegularThermostatDiscount implements IThermostatDiscountStrategy {\n    @Override public void applyDiscount(double total) { return total * 0.95; }\n}\n\nclass VipThermostatDiscount implements IThermostatDiscountStrategy {\n    @Override public double applyDiscount(double total) { return total * 0.80; }\n}\n\nclass ThermostatOrderCalculator {\n    private IThermostatDiscountStrategy strategy;\n    public void setStrategy(IThermostatDiscountStrategy strategy) { this.strategy = strategy; }\n    public double calculate(double total) {\n        return strategy != null ? strategy.applyDiscount(total) : total;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ThermostatOrderCalculator calc = new ThermostatOrderCalculator();\n        calc.setStrategy(new VipThermostatDiscount());\n        System.out.println(\"VIP narx: $\" + calc.calculate(100.0));\n    }\n}",
    "detailedSolution": {
      "theory": "Strategy Pattern — bir xil maqsadga yo'naltirilgan bir nechta algoritmlarni alohida sinflarga ajratadi va ularni ish vaqtida mijozga ko'ra osongina almashtirish imkonini beradi (if-else qatorlarini yo'qotadi).",
      "theoryEn": "Strategy pattern defines a family of algorithms, encapsulating each one, and making them interchangeable at runtime.",
      "cleanCode": "interface IThermostatDiscountStrategy { double applyDiscount(double total); }",
      "breakdown": [
        "<code>setStrategy(...)</code>: Dastur ishlash jarayonida algoritmni darhol almashtiradi."
      ],
      "pitfalls": "Har safar yangi chegirma chiqqanda if-else yozish Clean Code tamoyillariga ziddir (Open-Closed Principle).",
      "cw2Tip": "CW2 buyurtma ilovasida (Talaba chegirmasi, Yangi yil aksiyasi, VIP karta) aynan Strategy patterni orqali hisoblanadi."
    }
  },
  {
    "id": 77,
    "tier": 3,
    "tierName": "3-Bosqich: Behavioural Patterns (Strategy Pattern)",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "77. Drone Delivery — Chegirma Algoritmlari (Strategy Pattern)",
      "en": "77. Drone Delivery — Interchangeable Strategy Pattern"
    },
    "scenario": {
      "uz": "Drone Delivery da chegirma hisoblash algoritmini almashtirib turiladigan qiling. 'IDeliveryDroneDiscountStrategy' tuzing va 'DeliveryDroneOrderCalculator' sinfida strategiyani 'setStrategy()' orqali o'zgartiring.",
      "en": "Build Strategy pattern in Drone Delivery: interchangeable discount algorithms via 'IDeliveryDroneDiscountStrategy'."
    },
    "requirements": {
      "classes": [
        "IDeliveryDroneDiscountStrategy",
        "RegularDeliveryDroneDiscount",
        "VipDeliveryDroneDiscount",
        "DeliveryDroneOrderCalculator"
      ],
      "methods": [
        "applyDiscount"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IDeliveryDroneDiscountStrategy {\n    double applyDiscount(double total);\n}\n\nclass RegularDeliveryDroneDiscount implements IDeliveryDroneDiscountStrategy {\n    @Override public void applyDiscount(double total) { return total * 0.95; }\n}\n\nclass VipDeliveryDroneDiscount implements IDeliveryDroneDiscountStrategy {\n    @Override public double applyDiscount(double total) { return total * 0.80; }\n}\n\nclass DeliveryDroneOrderCalculator {\n    private IDeliveryDroneDiscountStrategy strategy;\n    public void setStrategy(IDeliveryDroneDiscountStrategy strategy) { this.strategy = strategy; }\n    public double calculate(double total) {\n        return strategy != null ? strategy.applyDiscount(total) : total;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DeliveryDroneOrderCalculator calc = new DeliveryDroneOrderCalculator();\n        calc.setStrategy(new VipDeliveryDroneDiscount());\n        System.out.println(\"VIP narx: $\" + calc.calculate(100.0));\n    }\n}",
    "detailedSolution": {
      "theory": "Strategy Pattern — bir xil maqsadga yo'naltirilgan bir nechta algoritmlarni alohida sinflarga ajratadi va ularni ish vaqtida mijozga ko'ra osongina almashtirish imkonini beradi (if-else qatorlarini yo'qotadi).",
      "theoryEn": "Strategy pattern defines a family of algorithms, encapsulating each one, and making them interchangeable at runtime.",
      "cleanCode": "interface IDeliveryDroneDiscountStrategy { double applyDiscount(double total); }",
      "breakdown": [
        "<code>setStrategy(...)</code>: Dastur ishlash jarayonida algoritmni darhol almashtiradi."
      ],
      "pitfalls": "Har safar yangi chegirma chiqqanda if-else yozish Clean Code tamoyillariga ziddir (Open-Closed Principle).",
      "cw2Tip": "CW2 buyurtma ilovasida (Talaba chegirmasi, Yangi yil aksiyasi, VIP karta) aynan Strategy patterni orqali hisoblanadi."
    }
  },
  {
    "id": 78,
    "tier": 3,
    "tierName": "3-Bosqich: Behavioural Patterns (Strategy Pattern)",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "78. Smart Warehouse — Chegirma Algoritmlari (Strategy Pattern)",
      "en": "78. Smart Warehouse — Interchangeable Strategy Pattern"
    },
    "scenario": {
      "uz": "Smart Warehouse da chegirma hisoblash algoritmini almashtirib turiladigan qiling. 'IStorageBayDiscountStrategy' tuzing va 'StorageBayOrderCalculator' sinfida strategiyani 'setStrategy()' orqali o'zgartiring.",
      "en": "Build Strategy pattern in Smart Warehouse: interchangeable discount algorithms via 'IStorageBayDiscountStrategy'."
    },
    "requirements": {
      "classes": [
        "IStorageBayDiscountStrategy",
        "RegularStorageBayDiscount",
        "VipStorageBayDiscount",
        "StorageBayOrderCalculator"
      ],
      "methods": [
        "applyDiscount"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IStorageBayDiscountStrategy {\n    double applyDiscount(double total);\n}\n\nclass RegularStorageBayDiscount implements IStorageBayDiscountStrategy {\n    @Override public void applyDiscount(double total) { return total * 0.95; }\n}\n\nclass VipStorageBayDiscount implements IStorageBayDiscountStrategy {\n    @Override public double applyDiscount(double total) { return total * 0.80; }\n}\n\nclass StorageBayOrderCalculator {\n    private IStorageBayDiscountStrategy strategy;\n    public void setStrategy(IStorageBayDiscountStrategy strategy) { this.strategy = strategy; }\n    public double calculate(double total) {\n        return strategy != null ? strategy.applyDiscount(total) : total;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StorageBayOrderCalculator calc = new StorageBayOrderCalculator();\n        calc.setStrategy(new VipStorageBayDiscount());\n        System.out.println(\"VIP narx: $\" + calc.calculate(100.0));\n    }\n}",
    "detailedSolution": {
      "theory": "Strategy Pattern — bir xil maqsadga yo'naltirilgan bir nechta algoritmlarni alohida sinflarga ajratadi va ularni ish vaqtida mijozga ko'ra osongina almashtirish imkonini beradi (if-else qatorlarini yo'qotadi).",
      "theoryEn": "Strategy pattern defines a family of algorithms, encapsulating each one, and making them interchangeable at runtime.",
      "cleanCode": "interface IStorageBayDiscountStrategy { double applyDiscount(double total); }",
      "breakdown": [
        "<code>setStrategy(...)</code>: Dastur ishlash jarayonida algoritmni darhol almashtiradi."
      ],
      "pitfalls": "Har safar yangi chegirma chiqqanda if-else yozish Clean Code tamoyillariga ziddir (Open-Closed Principle).",
      "cw2Tip": "CW2 buyurtma ilovasida (Talaba chegirmasi, Yangi yil aksiyasi, VIP karta) aynan Strategy patterni orqali hisoblanadi."
    }
  },
  {
    "id": 79,
    "tier": 3,
    "tierName": "3-Bosqich: Behavioural Patterns (Strategy Pattern)",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "79. Crypto Wallet — Chegirma Algoritmlari (Strategy Pattern)",
      "en": "79. Crypto Wallet — Interchangeable Strategy Pattern"
    },
    "scenario": {
      "uz": "Crypto Wallet da chegirma hisoblash algoritmini almashtirib turiladigan qiling. 'ICryptoAssetDiscountStrategy' tuzing va 'CryptoAssetOrderCalculator' sinfida strategiyani 'setStrategy()' orqali o'zgartiring.",
      "en": "Build Strategy pattern in Crypto Wallet: interchangeable discount algorithms via 'ICryptoAssetDiscountStrategy'."
    },
    "requirements": {
      "classes": [
        "ICryptoAssetDiscountStrategy",
        "RegularCryptoAssetDiscount",
        "VipCryptoAssetDiscount",
        "CryptoAssetOrderCalculator"
      ],
      "methods": [
        "applyDiscount"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface ICryptoAssetDiscountStrategy {\n    double applyDiscount(double total);\n}\n\nclass RegularCryptoAssetDiscount implements ICryptoAssetDiscountStrategy {\n    @Override public void applyDiscount(double total) { return total * 0.95; }\n}\n\nclass VipCryptoAssetDiscount implements ICryptoAssetDiscountStrategy {\n    @Override public double applyDiscount(double total) { return total * 0.80; }\n}\n\nclass CryptoAssetOrderCalculator {\n    private ICryptoAssetDiscountStrategy strategy;\n    public void setStrategy(ICryptoAssetDiscountStrategy strategy) { this.strategy = strategy; }\n    public double calculate(double total) {\n        return strategy != null ? strategy.applyDiscount(total) : total;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CryptoAssetOrderCalculator calc = new CryptoAssetOrderCalculator();\n        calc.setStrategy(new VipCryptoAssetDiscount());\n        System.out.println(\"VIP narx: $\" + calc.calculate(100.0));\n    }\n}",
    "detailedSolution": {
      "theory": "Strategy Pattern — bir xil maqsadga yo'naltirilgan bir nechta algoritmlarni alohida sinflarga ajratadi va ularni ish vaqtida mijozga ko'ra osongina almashtirish imkonini beradi (if-else qatorlarini yo'qotadi).",
      "theoryEn": "Strategy pattern defines a family of algorithms, encapsulating each one, and making them interchangeable at runtime.",
      "cleanCode": "interface ICryptoAssetDiscountStrategy { double applyDiscount(double total); }",
      "breakdown": [
        "<code>setStrategy(...)</code>: Dastur ishlash jarayonida algoritmni darhol almashtiradi."
      ],
      "pitfalls": "Har safar yangi chegirma chiqqanda if-else yozish Clean Code tamoyillariga ziddir (Open-Closed Principle).",
      "cw2Tip": "CW2 buyurtma ilovasida (Talaba chegirmasi, Yangi yil aksiyasi, VIP karta) aynan Strategy patterni orqali hisoblanadi."
    }
  },
  {
    "id": 80,
    "tier": 3,
    "tierName": "3-Bosqich: Behavioural Patterns (Strategy Pattern)",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "80. National Library — Chegirma Algoritmlari (Strategy Pattern)",
      "en": "80. National Library — Interchangeable Strategy Pattern"
    },
    "scenario": {
      "uz": "National Library da chegirma hisoblash algoritmini almashtirib turiladigan qiling. 'ICatalogBookDiscountStrategy' tuzing va 'CatalogBookOrderCalculator' sinfida strategiyani 'setStrategy()' orqali o'zgartiring.",
      "en": "Build Strategy pattern in National Library: interchangeable discount algorithms via 'ICatalogBookDiscountStrategy'."
    },
    "requirements": {
      "classes": [
        "ICatalogBookDiscountStrategy",
        "RegularCatalogBookDiscount",
        "VipCatalogBookDiscount",
        "CatalogBookOrderCalculator"
      ],
      "methods": [
        "applyDiscount"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface ICatalogBookDiscountStrategy {\n    double applyDiscount(double total);\n}\n\nclass RegularCatalogBookDiscount implements ICatalogBookDiscountStrategy {\n    @Override public void applyDiscount(double total) { return total * 0.95; }\n}\n\nclass VipCatalogBookDiscount implements ICatalogBookDiscountStrategy {\n    @Override public double applyDiscount(double total) { return total * 0.80; }\n}\n\nclass CatalogBookOrderCalculator {\n    private ICatalogBookDiscountStrategy strategy;\n    public void setStrategy(ICatalogBookDiscountStrategy strategy) { this.strategy = strategy; }\n    public double calculate(double total) {\n        return strategy != null ? strategy.applyDiscount(total) : total;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CatalogBookOrderCalculator calc = new CatalogBookOrderCalculator();\n        calc.setStrategy(new VipCatalogBookDiscount());\n        System.out.println(\"VIP narx: $\" + calc.calculate(100.0));\n    }\n}",
    "detailedSolution": {
      "theory": "Strategy Pattern — bir xil maqsadga yo'naltirilgan bir nechta algoritmlarni alohida sinflarga ajratadi va ularni ish vaqtida mijozga ko'ra osongina almashtirish imkonini beradi (if-else qatorlarini yo'qotadi).",
      "theoryEn": "Strategy pattern defines a family of algorithms, encapsulating each one, and making them interchangeable at runtime.",
      "cleanCode": "interface ICatalogBookDiscountStrategy { double applyDiscount(double total); }",
      "breakdown": [
        "<code>setStrategy(...)</code>: Dastur ishlash jarayonida algoritmni darhol almashtiradi."
      ],
      "pitfalls": "Har safar yangi chegirma chiqqanda if-else yozish Clean Code tamoyillariga ziddir (Open-Closed Principle).",
      "cw2Tip": "CW2 buyurtma ilovasida (Talaba chegirmasi, Yangi yil aksiyasi, VIP karta) aynan Strategy patterni orqali hisoblanadi."
    }
  },
  {
    "id": 81,
    "tier": 3,
    "tierName": "3-Bosqich: Behavioural Patterns (Strategy Pattern)",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "81. BeFit Club — Chegirma Algoritmlari (Strategy Pattern)",
      "en": "81. BeFit Club — Interchangeable Strategy Pattern"
    },
    "scenario": {
      "uz": "BeFit Club da chegirma hisoblash algoritmini almashtirib turiladigan qiling. 'IGymMemberDiscountStrategy' tuzing va 'GymMemberOrderCalculator' sinfida strategiyani 'setStrategy()' orqali o'zgartiring.",
      "en": "Build Strategy pattern in BeFit Club: interchangeable discount algorithms via 'IGymMemberDiscountStrategy'."
    },
    "requirements": {
      "classes": [
        "IGymMemberDiscountStrategy",
        "RegularGymMemberDiscount",
        "VipGymMemberDiscount",
        "GymMemberOrderCalculator"
      ],
      "methods": [
        "applyDiscount"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IGymMemberDiscountStrategy {\n    double applyDiscount(double total);\n}\n\nclass RegularGymMemberDiscount implements IGymMemberDiscountStrategy {\n    @Override public void applyDiscount(double total) { return total * 0.95; }\n}\n\nclass VipGymMemberDiscount implements IGymMemberDiscountStrategy {\n    @Override public double applyDiscount(double total) { return total * 0.80; }\n}\n\nclass GymMemberOrderCalculator {\n    private IGymMemberDiscountStrategy strategy;\n    public void setStrategy(IGymMemberDiscountStrategy strategy) { this.strategy = strategy; }\n    public double calculate(double total) {\n        return strategy != null ? strategy.applyDiscount(total) : total;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GymMemberOrderCalculator calc = new GymMemberOrderCalculator();\n        calc.setStrategy(new VipGymMemberDiscount());\n        System.out.println(\"VIP narx: $\" + calc.calculate(100.0));\n    }\n}",
    "detailedSolution": {
      "theory": "Strategy Pattern — bir xil maqsadga yo'naltirilgan bir nechta algoritmlarni alohida sinflarga ajratadi va ularni ish vaqtida mijozga ko'ra osongina almashtirish imkonini beradi (if-else qatorlarini yo'qotadi).",
      "theoryEn": "Strategy pattern defines a family of algorithms, encapsulating each one, and making them interchangeable at runtime.",
      "cleanCode": "interface IGymMemberDiscountStrategy { double applyDiscount(double total); }",
      "breakdown": [
        "<code>setStrategy(...)</code>: Dastur ishlash jarayonida algoritmni darhol almashtiradi."
      ],
      "pitfalls": "Har safar yangi chegirma chiqqanda if-else yozish Clean Code tamoyillariga ziddir (Open-Closed Principle).",
      "cw2Tip": "CW2 buyurtma ilovasida (Talaba chegirmasi, Yangi yil aksiyasi, VIP karta) aynan Strategy patterni orqali hisoblanadi."
    }
  },
  {
    "id": 82,
    "tier": 3,
    "tierName": "3-Bosqich: Behavioural Patterns (Strategy Pattern)",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "82. Tashkent Parking — Chegirma Algoritmlari (Strategy Pattern)",
      "en": "82. Tashkent Parking — Interchangeable Strategy Pattern"
    },
    "scenario": {
      "uz": "Tashkent Parking da chegirma hisoblash algoritmini almashtirib turiladigan qiling. 'IParkingBayDiscountStrategy' tuzing va 'ParkingBayOrderCalculator' sinfida strategiyani 'setStrategy()' orqali o'zgartiring.",
      "en": "Build Strategy pattern in Tashkent Parking: interchangeable discount algorithms via 'IParkingBayDiscountStrategy'."
    },
    "requirements": {
      "classes": [
        "IParkingBayDiscountStrategy",
        "RegularParkingBayDiscount",
        "VipParkingBayDiscount",
        "ParkingBayOrderCalculator"
      ],
      "methods": [
        "applyDiscount"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IParkingBayDiscountStrategy {\n    double applyDiscount(double total);\n}\n\nclass RegularParkingBayDiscount implements IParkingBayDiscountStrategy {\n    @Override public void applyDiscount(double total) { return total * 0.95; }\n}\n\nclass VipParkingBayDiscount implements IParkingBayDiscountStrategy {\n    @Override public double applyDiscount(double total) { return total * 0.80; }\n}\n\nclass ParkingBayOrderCalculator {\n    private IParkingBayDiscountStrategy strategy;\n    public void setStrategy(IParkingBayDiscountStrategy strategy) { this.strategy = strategy; }\n    public double calculate(double total) {\n        return strategy != null ? strategy.applyDiscount(total) : total;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ParkingBayOrderCalculator calc = new ParkingBayOrderCalculator();\n        calc.setStrategy(new VipParkingBayDiscount());\n        System.out.println(\"VIP narx: $\" + calc.calculate(100.0));\n    }\n}",
    "detailedSolution": {
      "theory": "Strategy Pattern — bir xil maqsadga yo'naltirilgan bir nechta algoritmlarni alohida sinflarga ajratadi va ularni ish vaqtida mijozga ko'ra osongina almashtirish imkonini beradi (if-else qatorlarini yo'qotadi).",
      "theoryEn": "Strategy pattern defines a family of algorithms, encapsulating each one, and making them interchangeable at runtime.",
      "cleanCode": "interface IParkingBayDiscountStrategy { double applyDiscount(double total); }",
      "breakdown": [
        "<code>setStrategy(...)</code>: Dastur ishlash jarayonida algoritmni darhol almashtiradi."
      ],
      "pitfalls": "Har safar yangi chegirma chiqqanda if-else yozish Clean Code tamoyillariga ziddir (Open-Closed Principle).",
      "cw2Tip": "CW2 buyurtma ilovasida (Talaba chegirmasi, Yangi yil aksiyasi, VIP karta) aynan Strategy patterni orqali hisoblanadi."
    }
  },
  {
    "id": 83,
    "tier": 3,
    "tierName": "3-Bosqich: Behavioural Patterns (Strategy Pattern)",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "83. Medion Clinic — Chegirma Algoritmlari (Strategy Pattern)",
      "en": "83. Medion Clinic — Interchangeable Strategy Pattern"
    },
    "scenario": {
      "uz": "Medion Clinic da chegirma hisoblash algoritmini almashtirib turiladigan qiling. 'IPatientRecordDiscountStrategy' tuzing va 'PatientRecordOrderCalculator' sinfida strategiyani 'setStrategy()' orqali o'zgartiring.",
      "en": "Build Strategy pattern in Medion Clinic: interchangeable discount algorithms via 'IPatientRecordDiscountStrategy'."
    },
    "requirements": {
      "classes": [
        "IPatientRecordDiscountStrategy",
        "RegularPatientRecordDiscount",
        "VipPatientRecordDiscount",
        "PatientRecordOrderCalculator"
      ],
      "methods": [
        "applyDiscount"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IPatientRecordDiscountStrategy {\n    double applyDiscount(double total);\n}\n\nclass RegularPatientRecordDiscount implements IPatientRecordDiscountStrategy {\n    @Override public void applyDiscount(double total) { return total * 0.95; }\n}\n\nclass VipPatientRecordDiscount implements IPatientRecordDiscountStrategy {\n    @Override public double applyDiscount(double total) { return total * 0.80; }\n}\n\nclass PatientRecordOrderCalculator {\n    private IPatientRecordDiscountStrategy strategy;\n    public void setStrategy(IPatientRecordDiscountStrategy strategy) { this.strategy = strategy; }\n    public double calculate(double total) {\n        return strategy != null ? strategy.applyDiscount(total) : total;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PatientRecordOrderCalculator calc = new PatientRecordOrderCalculator();\n        calc.setStrategy(new VipPatientRecordDiscount());\n        System.out.println(\"VIP narx: $\" + calc.calculate(100.0));\n    }\n}",
    "detailedSolution": {
      "theory": "Strategy Pattern — bir xil maqsadga yo'naltirilgan bir nechta algoritmlarni alohida sinflarga ajratadi va ularni ish vaqtida mijozga ko'ra osongina almashtirish imkonini beradi (if-else qatorlarini yo'qotadi).",
      "theoryEn": "Strategy pattern defines a family of algorithms, encapsulating each one, and making them interchangeable at runtime.",
      "cleanCode": "interface IPatientRecordDiscountStrategy { double applyDiscount(double total); }",
      "breakdown": [
        "<code>setStrategy(...)</code>: Dastur ishlash jarayonida algoritmni darhol almashtiradi."
      ],
      "pitfalls": "Har safar yangi chegirma chiqqanda if-else yozish Clean Code tamoyillariga ziddir (Open-Closed Principle).",
      "cw2Tip": "CW2 buyurtma ilovasida (Talaba chegirmasi, Yangi yil aksiyasi, VIP karta) aynan Strategy patterni orqali hisoblanadi."
    }
  },
  {
    "id": 84,
    "tier": 3,
    "tierName": "3-Bosqich: Behavioural Patterns (Strategy Pattern)",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "84. Hyatt Regency — Chegirma Algoritmlari (Strategy Pattern)",
      "en": "84. Hyatt Regency — Interchangeable Strategy Pattern"
    },
    "scenario": {
      "uz": "Hyatt Regency da chegirma hisoblash algoritmini almashtirib turiladigan qiling. 'IHotelReservationDiscountStrategy' tuzing va 'HotelReservationOrderCalculator' sinfida strategiyani 'setStrategy()' orqali o'zgartiring.",
      "en": "Build Strategy pattern in Hyatt Regency: interchangeable discount algorithms via 'IHotelReservationDiscountStrategy'."
    },
    "requirements": {
      "classes": [
        "IHotelReservationDiscountStrategy",
        "RegularHotelReservationDiscount",
        "VipHotelReservationDiscount",
        "HotelReservationOrderCalculator"
      ],
      "methods": [
        "applyDiscount"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IHotelReservationDiscountStrategy {\n    double applyDiscount(double total);\n}\n\nclass RegularHotelReservationDiscount implements IHotelReservationDiscountStrategy {\n    @Override public void applyDiscount(double total) { return total * 0.95; }\n}\n\nclass VipHotelReservationDiscount implements IHotelReservationDiscountStrategy {\n    @Override public double applyDiscount(double total) { return total * 0.80; }\n}\n\nclass HotelReservationOrderCalculator {\n    private IHotelReservationDiscountStrategy strategy;\n    public void setStrategy(IHotelReservationDiscountStrategy strategy) { this.strategy = strategy; }\n    public double calculate(double total) {\n        return strategy != null ? strategy.applyDiscount(total) : total;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        HotelReservationOrderCalculator calc = new HotelReservationOrderCalculator();\n        calc.setStrategy(new VipHotelReservationDiscount());\n        System.out.println(\"VIP narx: $\" + calc.calculate(100.0));\n    }\n}",
    "detailedSolution": {
      "theory": "Strategy Pattern — bir xil maqsadga yo'naltirilgan bir nechta algoritmlarni alohida sinflarga ajratadi va ularni ish vaqtida mijozga ko'ra osongina almashtirish imkonini beradi (if-else qatorlarini yo'qotadi).",
      "theoryEn": "Strategy pattern defines a family of algorithms, encapsulating each one, and making them interchangeable at runtime.",
      "cleanCode": "interface IHotelReservationDiscountStrategy { double applyDiscount(double total); }",
      "breakdown": [
        "<code>setStrategy(...)</code>: Dastur ishlash jarayonida algoritmni darhol almashtiradi."
      ],
      "pitfalls": "Har safar yangi chegirma chiqqanda if-else yozish Clean Code tamoyillariga ziddir (Open-Closed Principle).",
      "cw2Tip": "CW2 buyurtma ilovasida (Talaba chegirmasi, Yangi yil aksiyasi, VIP karta) aynan Strategy patterni orqali hisoblanadi."
    }
  },
  {
    "id": 85,
    "tier": 3,
    "tierName": "3-Bosqich: Behavioural Patterns (Strategy Pattern)",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "85. Premier Cinema — Chegirma Algoritmlari (Strategy Pattern)",
      "en": "85. Premier Cinema — Interchangeable Strategy Pattern"
    },
    "scenario": {
      "uz": "Premier Cinema da chegirma hisoblash algoritmini almashtirib turiladigan qiling. 'ICinemaTicketDiscountStrategy' tuzing va 'CinemaTicketOrderCalculator' sinfida strategiyani 'setStrategy()' orqali o'zgartiring.",
      "en": "Build Strategy pattern in Premier Cinema: interchangeable discount algorithms via 'ICinemaTicketDiscountStrategy'."
    },
    "requirements": {
      "classes": [
        "ICinemaTicketDiscountStrategy",
        "RegularCinemaTicketDiscount",
        "VipCinemaTicketDiscount",
        "CinemaTicketOrderCalculator"
      ],
      "methods": [
        "applyDiscount"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface ICinemaTicketDiscountStrategy {\n    double applyDiscount(double total);\n}\n\nclass RegularCinemaTicketDiscount implements ICinemaTicketDiscountStrategy {\n    @Override public void applyDiscount(double total) { return total * 0.95; }\n}\n\nclass VipCinemaTicketDiscount implements ICinemaTicketDiscountStrategy {\n    @Override public double applyDiscount(double total) { return total * 0.80; }\n}\n\nclass CinemaTicketOrderCalculator {\n    private ICinemaTicketDiscountStrategy strategy;\n    public void setStrategy(ICinemaTicketDiscountStrategy strategy) { this.strategy = strategy; }\n    public double calculate(double total) {\n        return strategy != null ? strategy.applyDiscount(total) : total;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CinemaTicketOrderCalculator calc = new CinemaTicketOrderCalculator();\n        calc.setStrategy(new VipCinemaTicketDiscount());\n        System.out.println(\"VIP narx: $\" + calc.calculate(100.0));\n    }\n}",
    "detailedSolution": {
      "theory": "Strategy Pattern — bir xil maqsadga yo'naltirilgan bir nechta algoritmlarni alohida sinflarga ajratadi va ularni ish vaqtida mijozga ko'ra osongina almashtirish imkonini beradi (if-else qatorlarini yo'qotadi).",
      "theoryEn": "Strategy pattern defines a family of algorithms, encapsulating each one, and making them interchangeable at runtime.",
      "cleanCode": "interface ICinemaTicketDiscountStrategy { double applyDiscount(double total); }",
      "breakdown": [
        "<code>setStrategy(...)</code>: Dastur ishlash jarayonida algoritmni darhol almashtiradi."
      ],
      "pitfalls": "Har safar yangi chegirma chiqqanda if-else yozish Clean Code tamoyillariga ziddir (Open-Closed Principle).",
      "cw2Tip": "CW2 buyurtma ilovasida (Talaba chegirmasi, Yangi yil aksiyasi, VIP karta) aynan Strategy patterni orqali hisoblanadi."
    }
  },
  {
    "id": 86,
    "tier": 3,
    "tierName": "3-Bosqich: Behavioural Patterns (Strategy Pattern)",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "86. Yandex Scooter — Chegirma Algoritmlari (Strategy Pattern)",
      "en": "86. Yandex Scooter — Interchangeable Strategy Pattern"
    },
    "scenario": {
      "uz": "Yandex Scooter da chegirma hisoblash algoritmini almashtirib turiladigan qiling. 'IElectricScooterDiscountStrategy' tuzing va 'ElectricScooterOrderCalculator' sinfida strategiyani 'setStrategy()' orqali o'zgartiring.",
      "en": "Build Strategy pattern in Yandex Scooter: interchangeable discount algorithms via 'IElectricScooterDiscountStrategy'."
    },
    "requirements": {
      "classes": [
        "IElectricScooterDiscountStrategy",
        "RegularElectricScooterDiscount",
        "VipElectricScooterDiscount",
        "ElectricScooterOrderCalculator"
      ],
      "methods": [
        "applyDiscount"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IElectricScooterDiscountStrategy {\n    double applyDiscount(double total);\n}\n\nclass RegularElectricScooterDiscount implements IElectricScooterDiscountStrategy {\n    @Override public void applyDiscount(double total) { return total * 0.95; }\n}\n\nclass VipElectricScooterDiscount implements IElectricScooterDiscountStrategy {\n    @Override public double applyDiscount(double total) { return total * 0.80; }\n}\n\nclass ElectricScooterOrderCalculator {\n    private IElectricScooterDiscountStrategy strategy;\n    public void setStrategy(IElectricScooterDiscountStrategy strategy) { this.strategy = strategy; }\n    public double calculate(double total) {\n        return strategy != null ? strategy.applyDiscount(total) : total;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ElectricScooterOrderCalculator calc = new ElectricScooterOrderCalculator();\n        calc.setStrategy(new VipElectricScooterDiscount());\n        System.out.println(\"VIP narx: $\" + calc.calculate(100.0));\n    }\n}",
    "detailedSolution": {
      "theory": "Strategy Pattern — bir xil maqsadga yo'naltirilgan bir nechta algoritmlarni alohida sinflarga ajratadi va ularni ish vaqtida mijozga ko'ra osongina almashtirish imkonini beradi (if-else qatorlarini yo'qotadi).",
      "theoryEn": "Strategy pattern defines a family of algorithms, encapsulating each one, and making them interchangeable at runtime.",
      "cleanCode": "interface IElectricScooterDiscountStrategy { double applyDiscount(double total); }",
      "breakdown": [
        "<code>setStrategy(...)</code>: Dastur ishlash jarayonida algoritmni darhol almashtiradi."
      ],
      "pitfalls": "Har safar yangi chegirma chiqqanda if-else yozish Clean Code tamoyillariga ziddir (Open-Closed Principle).",
      "cw2Tip": "CW2 buyurtma ilovasida (Talaba chegirmasi, Yangi yil aksiyasi, VIP karta) aynan Strategy patterni orqali hisoblanadi."
    }
  },
  {
    "id": 87,
    "tier": 3,
    "tierName": "3-Bosqich: Behavioural Patterns (Strategy Pattern)",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "87. Weather Network — Chegirma Algoritmlari (Strategy Pattern)",
      "en": "87. Weather Network — Interchangeable Strategy Pattern"
    },
    "scenario": {
      "uz": "Weather Network da chegirma hisoblash algoritmini almashtirib turiladigan qiling. 'IMeteoStationDiscountStrategy' tuzing va 'MeteoStationOrderCalculator' sinfida strategiyani 'setStrategy()' orqali o'zgartiring.",
      "en": "Build Strategy pattern in Weather Network: interchangeable discount algorithms via 'IMeteoStationDiscountStrategy'."
    },
    "requirements": {
      "classes": [
        "IMeteoStationDiscountStrategy",
        "RegularMeteoStationDiscount",
        "VipMeteoStationDiscount",
        "MeteoStationOrderCalculator"
      ],
      "methods": [
        "applyDiscount"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IMeteoStationDiscountStrategy {\n    double applyDiscount(double total);\n}\n\nclass RegularMeteoStationDiscount implements IMeteoStationDiscountStrategy {\n    @Override public void applyDiscount(double total) { return total * 0.95; }\n}\n\nclass VipMeteoStationDiscount implements IMeteoStationDiscountStrategy {\n    @Override public double applyDiscount(double total) { return total * 0.80; }\n}\n\nclass MeteoStationOrderCalculator {\n    private IMeteoStationDiscountStrategy strategy;\n    public void setStrategy(IMeteoStationDiscountStrategy strategy) { this.strategy = strategy; }\n    public double calculate(double total) {\n        return strategy != null ? strategy.applyDiscount(total) : total;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MeteoStationOrderCalculator calc = new MeteoStationOrderCalculator();\n        calc.setStrategy(new VipMeteoStationDiscount());\n        System.out.println(\"VIP narx: $\" + calc.calculate(100.0));\n    }\n}",
    "detailedSolution": {
      "theory": "Strategy Pattern — bir xil maqsadga yo'naltirilgan bir nechta algoritmlarni alohida sinflarga ajratadi va ularni ish vaqtida mijozga ko'ra osongina almashtirish imkonini beradi (if-else qatorlarini yo'qotadi).",
      "theoryEn": "Strategy pattern defines a family of algorithms, encapsulating each one, and making them interchangeable at runtime.",
      "cleanCode": "interface IMeteoStationDiscountStrategy { double applyDiscount(double total); }",
      "breakdown": [
        "<code>setStrategy(...)</code>: Dastur ishlash jarayonida algoritmni darhol almashtiradi."
      ],
      "pitfalls": "Har safar yangi chegirma chiqqanda if-else yozish Clean Code tamoyillariga ziddir (Open-Closed Principle).",
      "cw2Tip": "CW2 buyurtma ilovasida (Talaba chegirmasi, Yangi yil aksiyasi, VIP karta) aynan Strategy patterni orqali hisoblanadi."
    }
  },
  {
    "id": 88,
    "tier": 3,
    "tierName": "3-Bosqich: Behavioural Patterns (Strategy Pattern)",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "88. OpenMarket Auction — Chegirma Algoritmlari (Strategy Pattern)",
      "en": "88. OpenMarket Auction — Interchangeable Strategy Pattern"
    },
    "scenario": {
      "uz": "OpenMarket Auction da chegirma hisoblash algoritmini almashtirib turiladigan qiling. 'IAuctionLotDiscountStrategy' tuzing va 'AuctionLotOrderCalculator' sinfida strategiyani 'setStrategy()' orqali o'zgartiring.",
      "en": "Build Strategy pattern in OpenMarket Auction: interchangeable discount algorithms via 'IAuctionLotDiscountStrategy'."
    },
    "requirements": {
      "classes": [
        "IAuctionLotDiscountStrategy",
        "RegularAuctionLotDiscount",
        "VipAuctionLotDiscount",
        "AuctionLotOrderCalculator"
      ],
      "methods": [
        "applyDiscount"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IAuctionLotDiscountStrategy {\n    double applyDiscount(double total);\n}\n\nclass RegularAuctionLotDiscount implements IAuctionLotDiscountStrategy {\n    @Override public void applyDiscount(double total) { return total * 0.95; }\n}\n\nclass VipAuctionLotDiscount implements IAuctionLotDiscountStrategy {\n    @Override public double applyDiscount(double total) { return total * 0.80; }\n}\n\nclass AuctionLotOrderCalculator {\n    private IAuctionLotDiscountStrategy strategy;\n    public void setStrategy(IAuctionLotDiscountStrategy strategy) { this.strategy = strategy; }\n    public double calculate(double total) {\n        return strategy != null ? strategy.applyDiscount(total) : total;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AuctionLotOrderCalculator calc = new AuctionLotOrderCalculator();\n        calc.setStrategy(new VipAuctionLotDiscount());\n        System.out.println(\"VIP narx: $\" + calc.calculate(100.0));\n    }\n}",
    "detailedSolution": {
      "theory": "Strategy Pattern — bir xil maqsadga yo'naltirilgan bir nechta algoritmlarni alohida sinflarga ajratadi va ularni ish vaqtida mijozga ko'ra osongina almashtirish imkonini beradi (if-else qatorlarini yo'qotadi).",
      "theoryEn": "Strategy pattern defines a family of algorithms, encapsulating each one, and making them interchangeable at runtime.",
      "cleanCode": "interface IAuctionLotDiscountStrategy { double applyDiscount(double total); }",
      "breakdown": [
        "<code>setStrategy(...)</code>: Dastur ishlash jarayonida algoritmni darhol almashtiradi."
      ],
      "pitfalls": "Har safar yangi chegirma chiqqanda if-else yozish Clean Code tamoyillariga ziddir (Open-Closed Principle).",
      "cw2Tip": "CW2 buyurtma ilovasida (Talaba chegirmasi, Yangi yil aksiyasi, VIP karta) aynan Strategy patterni orqali hisoblanadi."
    }
  },
  {
    "id": 89,
    "tier": 3,
    "tierName": "3-Bosqich: Behavioural Patterns (Strategy Pattern)",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "89. Solar Energy Grid — Chegirma Algoritmlari (Strategy Pattern)",
      "en": "89. Solar Energy Grid — Interchangeable Strategy Pattern"
    },
    "scenario": {
      "uz": "Solar Energy Grid da chegirma hisoblash algoritmini almashtirib turiladigan qiling. 'ISolarInverterDiscountStrategy' tuzing va 'SolarInverterOrderCalculator' sinfida strategiyani 'setStrategy()' orqali o'zgartiring.",
      "en": "Build Strategy pattern in Solar Energy Grid: interchangeable discount algorithms via 'ISolarInverterDiscountStrategy'."
    },
    "requirements": {
      "classes": [
        "ISolarInverterDiscountStrategy",
        "RegularSolarInverterDiscount",
        "VipSolarInverterDiscount",
        "SolarInverterOrderCalculator"
      ],
      "methods": [
        "applyDiscount"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface ISolarInverterDiscountStrategy {\n    double applyDiscount(double total);\n}\n\nclass RegularSolarInverterDiscount implements ISolarInverterDiscountStrategy {\n    @Override public void applyDiscount(double total) { return total * 0.95; }\n}\n\nclass VipSolarInverterDiscount implements ISolarInverterDiscountStrategy {\n    @Override public double applyDiscount(double total) { return total * 0.80; }\n}\n\nclass SolarInverterOrderCalculator {\n    private ISolarInverterDiscountStrategy strategy;\n    public void setStrategy(ISolarInverterDiscountStrategy strategy) { this.strategy = strategy; }\n    public double calculate(double total) {\n        return strategy != null ? strategy.applyDiscount(total) : total;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SolarInverterOrderCalculator calc = new SolarInverterOrderCalculator();\n        calc.setStrategy(new VipSolarInverterDiscount());\n        System.out.println(\"VIP narx: $\" + calc.calculate(100.0));\n    }\n}",
    "detailedSolution": {
      "theory": "Strategy Pattern — bir xil maqsadga yo'naltirilgan bir nechta algoritmlarni alohida sinflarga ajratadi va ularni ish vaqtida mijozga ko'ra osongina almashtirish imkonini beradi (if-else qatorlarini yo'qotadi).",
      "theoryEn": "Strategy pattern defines a family of algorithms, encapsulating each one, and making them interchangeable at runtime.",
      "cleanCode": "interface ISolarInverterDiscountStrategy { double applyDiscount(double total); }",
      "breakdown": [
        "<code>setStrategy(...)</code>: Dastur ishlash jarayonida algoritmni darhol almashtiradi."
      ],
      "pitfalls": "Har safar yangi chegirma chiqqanda if-else yozish Clean Code tamoyillariga ziddir (Open-Closed Principle).",
      "cw2Tip": "CW2 buyurtma ilovasida (Talaba chegirmasi, Yangi yil aksiyasi, VIP karta) aynan Strategy patterni orqali hisoblanadi."
    }
  },
  {
    "id": 90,
    "tier": 3,
    "tierName": "3-Bosqich: Behavioural Patterns (Strategy Pattern)",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "90. O'zbekiston Temir Yo'llari — Chegirma Algoritmlari (Strategy Pattern)",
      "en": "90. O'zbekiston Temir Yo'llari — Interchangeable Strategy Pattern"
    },
    "scenario": {
      "uz": "O'zbekiston Temir Yo'llari da chegirma hisoblash algoritmini almashtirib turiladigan qiling. 'ITrainRouteDiscountStrategy' tuzing va 'TrainRouteOrderCalculator' sinfida strategiyani 'setStrategy()' orqali o'zgartiring.",
      "en": "Build Strategy pattern in O'zbekiston Temir Yo'llari: interchangeable discount algorithms via 'ITrainRouteDiscountStrategy'."
    },
    "requirements": {
      "classes": [
        "ITrainRouteDiscountStrategy",
        "RegularTrainRouteDiscount",
        "VipTrainRouteDiscount",
        "TrainRouteOrderCalculator"
      ],
      "methods": [
        "applyDiscount"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface ITrainRouteDiscountStrategy {\n    double applyDiscount(double total);\n}\n\nclass RegularTrainRouteDiscount implements ITrainRouteDiscountStrategy {\n    @Override public void applyDiscount(double total) { return total * 0.95; }\n}\n\nclass VipTrainRouteDiscount implements ITrainRouteDiscountStrategy {\n    @Override public double applyDiscount(double total) { return total * 0.80; }\n}\n\nclass TrainRouteOrderCalculator {\n    private ITrainRouteDiscountStrategy strategy;\n    public void setStrategy(ITrainRouteDiscountStrategy strategy) { this.strategy = strategy; }\n    public double calculate(double total) {\n        return strategy != null ? strategy.applyDiscount(total) : total;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TrainRouteOrderCalculator calc = new TrainRouteOrderCalculator();\n        calc.setStrategy(new VipTrainRouteDiscount());\n        System.out.println(\"VIP narx: $\" + calc.calculate(100.0));\n    }\n}",
    "detailedSolution": {
      "theory": "Strategy Pattern — bir xil maqsadga yo'naltirilgan bir nechta algoritmlarni alohida sinflarga ajratadi va ularni ish vaqtida mijozga ko'ra osongina almashtirish imkonini beradi (if-else qatorlarini yo'qotadi).",
      "theoryEn": "Strategy pattern defines a family of algorithms, encapsulating each one, and making them interchangeable at runtime.",
      "cleanCode": "interface ITrainRouteDiscountStrategy { double applyDiscount(double total); }",
      "breakdown": [
        "<code>setStrategy(...)</code>: Dastur ishlash jarayonida algoritmni darhol almashtiradi."
      ],
      "pitfalls": "Har safar yangi chegirma chiqqanda if-else yozish Clean Code tamoyillariga ziddir (Open-Closed Principle).",
      "cw2Tip": "CW2 buyurtma ilovasida (Talaba chegirmasi, Yangi yil aksiyasi, VIP karta) aynan Strategy patterni orqali hisoblanadi."
    }
  },
  {
    "id": 91,
    "tier": 4,
    "tierName": "4-Bosqich: Observer Pattern va Xabardor Qilish",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "91. Uzum Market — Kuzatuvchi Patterni (Observer Pattern)",
      "en": "91. Uzum Market — Observer Event Dispatcher"
    },
    "scenario": {
      "uz": "Uzum Market da holat o'zgarganda bir nechta tinglovchilarni ogohlantiruvchi 'ProductNotifier' sinfini tuzing. 'addObserver(IProductObserver obs)' va 'notifyObservers(String status)' metodlarini qo'shing.",
      "en": "Implement Observer pattern in Uzum Market to notify all registered observers upon status change."
    },
    "requirements": {
      "classes": [
        "IProductObserver",
        "ProductNotifier"
      ],
      "methods": [
        "addObserver",
        "notifyObservers"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\ninterface IProductObserver {\n    void update(String status);\n}\n\nclass ProductNotifier {\n    private List<IProductObserver> observers = new ArrayList<>();\n    public void addObserver(IProductObserver o) { observers.add(o); }\n    public void notifyObservers(String status) {\n        for (IProductObserver o : observers) o.update(status);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ProductNotifier n = new ProductNotifier();\n        n.addObserver(status -> System.out.println(\"Uzum Market Xabari: \" + status));\n        n.notifyObservers(\"BUYURTMA TAYYOR\");\n    }\n}",
    "detailedSolution": {
      "theory": "Observer Pattern — bitta ob'yekt (Subject) holati o'zgarganda, unga obuna bo'lgan barcha boshqa ob'yektlarni (Observers) avtomatik xabardor qiluvchi 1-ko'pga (one-to-many) munosabatdir.",
      "theoryEn": "Observer pattern establishes a one-to-many dependency so that when one object changes state, all its dependents are notified automatically.",
      "cleanCode": "for (IProductObserver o : observers) { o.update(status); }",
      "breakdown": [
        "<code>List<IProductObserver> observers</code>: Tinglovchilar ro'yxatini dinamik saqlaydi."
      ],
      "pitfalls": "Obunachilarni ro'yxatdan o'chirish (removeObserver) imkoniyati bo'lmasa, xotira sizishi (memory leak) yuz berishi mumkin.",
      "cw2Tip": "CW2 da buyurtma tayyor bo'lganda ekranga, kvitansiyaga va konsol loglariga xabar berishda Observer ideal yechimdir."
    }
  },
  {
    "id": 92,
    "tier": 4,
    "tierName": "4-Bosqich: Observer Pattern va Xabardor Qilish",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "92. Payme Wallet — Kuzatuvchi Patterni (Observer Pattern)",
      "en": "92. Payme Wallet — Observer Event Dispatcher"
    },
    "scenario": {
      "uz": "Payme Wallet da holat o'zgarganda bir nechta tinglovchilarni ogohlantiruvchi 'WalletUserNotifier' sinfini tuzing. 'addObserver(IWalletUserObserver obs)' va 'notifyObservers(String status)' metodlarini qo'shing.",
      "en": "Implement Observer pattern in Payme Wallet to notify all registered observers upon status change."
    },
    "requirements": {
      "classes": [
        "IWalletUserObserver",
        "WalletUserNotifier"
      ],
      "methods": [
        "addObserver",
        "notifyObservers"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\ninterface IWalletUserObserver {\n    void update(String status);\n}\n\nclass WalletUserNotifier {\n    private List<IWalletUserObserver> observers = new ArrayList<>();\n    public void addObserver(IWalletUserObserver o) { observers.add(o); }\n    public void notifyObservers(String status) {\n        for (IWalletUserObserver o : observers) o.update(status);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WalletUserNotifier n = new WalletUserNotifier();\n        n.addObserver(status -> System.out.println(\"Payme Wallet Xabari: \" + status));\n        n.notifyObservers(\"BUYURTMA TAYYOR\");\n    }\n}",
    "detailedSolution": {
      "theory": "Observer Pattern — bitta ob'yekt (Subject) holati o'zgarganda, unga obuna bo'lgan barcha boshqa ob'yektlarni (Observers) avtomatik xabardor qiluvchi 1-ko'pga (one-to-many) munosabatdir.",
      "theoryEn": "Observer pattern establishes a one-to-many dependency so that when one object changes state, all its dependents are notified automatically.",
      "cleanCode": "for (IWalletUserObserver o : observers) { o.update(status); }",
      "breakdown": [
        "<code>List<IWalletUserObserver> observers</code>: Tinglovchilar ro'yxatini dinamik saqlaydi."
      ],
      "pitfalls": "Obunachilarni ro'yxatdan o'chirish (removeObserver) imkoniyati bo'lmasa, xotira sizishi (memory leak) yuz berishi mumkin.",
      "cw2Tip": "CW2 da buyurtma tayyor bo'lganda ekranga, kvitansiyaga va konsol loglariga xabar berishda Observer ideal yechimdir."
    }
  },
  {
    "id": 93,
    "tier": 4,
    "tierName": "4-Bosqich: Observer Pattern va Xabardor Qilish",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "93. Yandex Go — Kuzatuvchi Patterni (Observer Pattern)",
      "en": "93. Yandex Go — Observer Event Dispatcher"
    },
    "scenario": {
      "uz": "Yandex Go da holat o'zgarganda bir nechta tinglovchilarni ogohlantiruvchi 'TaxiRideNotifier' sinfini tuzing. 'addObserver(ITaxiRideObserver obs)' va 'notifyObservers(String status)' metodlarini qo'shing.",
      "en": "Implement Observer pattern in Yandex Go to notify all registered observers upon status change."
    },
    "requirements": {
      "classes": [
        "ITaxiRideObserver",
        "TaxiRideNotifier"
      ],
      "methods": [
        "addObserver",
        "notifyObservers"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\ninterface ITaxiRideObserver {\n    void update(String status);\n}\n\nclass TaxiRideNotifier {\n    private List<ITaxiRideObserver> observers = new ArrayList<>();\n    public void addObserver(ITaxiRideObserver o) { observers.add(o); }\n    public void notifyObservers(String status) {\n        for (ITaxiRideObserver o : observers) o.update(status);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TaxiRideNotifier n = new TaxiRideNotifier();\n        n.addObserver(status -> System.out.println(\"Yandex Go Xabari: \" + status));\n        n.notifyObservers(\"BUYURTMA TAYYOR\");\n    }\n}",
    "detailedSolution": {
      "theory": "Observer Pattern — bitta ob'yekt (Subject) holati o'zgarganda, unga obuna bo'lgan barcha boshqa ob'yektlarni (Observers) avtomatik xabardor qiluvchi 1-ko'pga (one-to-many) munosabatdir.",
      "theoryEn": "Observer pattern establishes a one-to-many dependency so that when one object changes state, all its dependents are notified automatically.",
      "cleanCode": "for (ITaxiRideObserver o : observers) { o.update(status); }",
      "breakdown": [
        "<code>List<ITaxiRideObserver> observers</code>: Tinglovchilar ro'yxatini dinamik saqlaydi."
      ],
      "pitfalls": "Obunachilarni ro'yxatdan o'chirish (removeObserver) imkoniyati bo'lmasa, xotira sizishi (memory leak) yuz berishi mumkin.",
      "cw2Tip": "CW2 da buyurtma tayyor bo'lganda ekranga, kvitansiyaga va konsol loglariga xabar berishda Observer ideal yechimdir."
    }
  },
  {
    "id": 94,
    "tier": 4,
    "tierName": "4-Bosqich: Observer Pattern va Xabardor Qilish",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "94. Korzinka Go — Kuzatuvchi Patterni (Observer Pattern)",
      "en": "94. Korzinka Go — Observer Event Dispatcher"
    },
    "scenario": {
      "uz": "Korzinka Go da holat o'zgarganda bir nechta tinglovchilarni ogohlantiruvchi 'LoyaltyCardNotifier' sinfini tuzing. 'addObserver(ILoyaltyCardObserver obs)' va 'notifyObservers(String status)' metodlarini qo'shing.",
      "en": "Implement Observer pattern in Korzinka Go to notify all registered observers upon status change."
    },
    "requirements": {
      "classes": [
        "ILoyaltyCardObserver",
        "LoyaltyCardNotifier"
      ],
      "methods": [
        "addObserver",
        "notifyObservers"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\ninterface ILoyaltyCardObserver {\n    void update(String status);\n}\n\nclass LoyaltyCardNotifier {\n    private List<ILoyaltyCardObserver> observers = new ArrayList<>();\n    public void addObserver(ILoyaltyCardObserver o) { observers.add(o); }\n    public void notifyObservers(String status) {\n        for (ILoyaltyCardObserver o : observers) o.update(status);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LoyaltyCardNotifier n = new LoyaltyCardNotifier();\n        n.addObserver(status -> System.out.println(\"Korzinka Go Xabari: \" + status));\n        n.notifyObservers(\"BUYURTMA TAYYOR\");\n    }\n}",
    "detailedSolution": {
      "theory": "Observer Pattern — bitta ob'yekt (Subject) holati o'zgarganda, unga obuna bo'lgan barcha boshqa ob'yektlarni (Observers) avtomatik xabardor qiluvchi 1-ko'pga (one-to-many) munosabatdir.",
      "theoryEn": "Observer pattern establishes a one-to-many dependency so that when one object changes state, all its dependents are notified automatically.",
      "cleanCode": "for (ILoyaltyCardObserver o : observers) { o.update(status); }",
      "breakdown": [
        "<code>List<ILoyaltyCardObserver> observers</code>: Tinglovchilar ro'yxatini dinamik saqlaydi."
      ],
      "pitfalls": "Obunachilarni ro'yxatdan o'chirish (removeObserver) imkoniyati bo'lmasa, xotira sizishi (memory leak) yuz berishi mumkin.",
      "cw2Tip": "CW2 da buyurtma tayyor bo'lganda ekranga, kvitansiyaga va konsol loglariga xabar berishda Observer ideal yechimdir."
    }
  },
  {
    "id": 95,
    "tier": 4,
    "tierName": "4-Bosqich: Observer Pattern va Xabardor Qilish",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "95. WIUT Portal — Kuzatuvchi Patterni (Observer Pattern)",
      "en": "95. WIUT Portal — Observer Event Dispatcher"
    },
    "scenario": {
      "uz": "WIUT Portal da holat o'zgarganda bir nechta tinglovchilarni ogohlantiruvchi 'StudentNotifier' sinfini tuzing. 'addObserver(IStudentObserver obs)' va 'notifyObservers(String status)' metodlarini qo'shing.",
      "en": "Implement Observer pattern in WIUT Portal to notify all registered observers upon status change."
    },
    "requirements": {
      "classes": [
        "IStudentObserver",
        "StudentNotifier"
      ],
      "methods": [
        "addObserver",
        "notifyObservers"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\ninterface IStudentObserver {\n    void update(String status);\n}\n\nclass StudentNotifier {\n    private List<IStudentObserver> observers = new ArrayList<>();\n    public void addObserver(IStudentObserver o) { observers.add(o); }\n    public void notifyObservers(String status) {\n        for (IStudentObserver o : observers) o.update(status);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StudentNotifier n = new StudentNotifier();\n        n.addObserver(status -> System.out.println(\"WIUT Portal Xabari: \" + status));\n        n.notifyObservers(\"BUYURTMA TAYYOR\");\n    }\n}",
    "detailedSolution": {
      "theory": "Observer Pattern — bitta ob'yekt (Subject) holati o'zgarganda, unga obuna bo'lgan barcha boshqa ob'yektlarni (Observers) avtomatik xabardor qiluvchi 1-ko'pga (one-to-many) munosabatdir.",
      "theoryEn": "Observer pattern establishes a one-to-many dependency so that when one object changes state, all its dependents are notified automatically.",
      "cleanCode": "for (IStudentObserver o : observers) { o.update(status); }",
      "breakdown": [
        "<code>List<IStudentObserver> observers</code>: Tinglovchilar ro'yxatini dinamik saqlaydi."
      ],
      "pitfalls": "Obunachilarni ro'yxatdan o'chirish (removeObserver) imkoniyati bo'lmasa, xotira sizishi (memory leak) yuz berishi mumkin.",
      "cw2Tip": "CW2 da buyurtma tayyor bo'lganda ekranga, kvitansiyaga va konsol loglariga xabar berishda Observer ideal yechimdir."
    }
  },
  {
    "id": 96,
    "tier": 4,
    "tierName": "4-Bosqich: Observer Pattern va Xabardor Qilish",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "96. Click Pay — Kuzatuvchi Patterni (Observer Pattern)",
      "en": "96. Click Pay — Observer Event Dispatcher"
    },
    "scenario": {
      "uz": "Click Pay da holat o'zgarganda bir nechta tinglovchilarni ogohlantiruvchi 'PaymentTxnNotifier' sinfini tuzing. 'addObserver(IPaymentTxnObserver obs)' va 'notifyObservers(String status)' metodlarini qo'shing.",
      "en": "Implement Observer pattern in Click Pay to notify all registered observers upon status change."
    },
    "requirements": {
      "classes": [
        "IPaymentTxnObserver",
        "PaymentTxnNotifier"
      ],
      "methods": [
        "addObserver",
        "notifyObservers"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\ninterface IPaymentTxnObserver {\n    void update(String status);\n}\n\nclass PaymentTxnNotifier {\n    private List<IPaymentTxnObserver> observers = new ArrayList<>();\n    public void addObserver(IPaymentTxnObserver o) { observers.add(o); }\n    public void notifyObservers(String status) {\n        for (IPaymentTxnObserver o : observers) o.update(status);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentTxnNotifier n = new PaymentTxnNotifier();\n        n.addObserver(status -> System.out.println(\"Click Pay Xabari: \" + status));\n        n.notifyObservers(\"BUYURTMA TAYYOR\");\n    }\n}",
    "detailedSolution": {
      "theory": "Observer Pattern — bitta ob'yekt (Subject) holati o'zgarganda, unga obuna bo'lgan barcha boshqa ob'yektlarni (Observers) avtomatik xabardor qiluvchi 1-ko'pga (one-to-many) munosabatdir.",
      "theoryEn": "Observer pattern establishes a one-to-many dependency so that when one object changes state, all its dependents are notified automatically.",
      "cleanCode": "for (IPaymentTxnObserver o : observers) { o.update(status); }",
      "breakdown": [
        "<code>List<IPaymentTxnObserver> observers</code>: Tinglovchilar ro'yxatini dinamik saqlaydi."
      ],
      "pitfalls": "Obunachilarni ro'yxatdan o'chirish (removeObserver) imkoniyati bo'lmasa, xotira sizishi (memory leak) yuz berishi mumkin.",
      "cw2Tip": "CW2 da buyurtma tayyor bo'lganda ekranga, kvitansiyaga va konsol loglariga xabar berishda Observer ideal yechimdir."
    }
  },
  {
    "id": 97,
    "tier": 4,
    "tierName": "4-Bosqich: Observer Pattern va Xabardor Qilish",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "97. Telegram Bot — Kuzatuvchi Patterni (Observer Pattern)",
      "en": "97. Telegram Bot — Observer Event Dispatcher"
    },
    "scenario": {
      "uz": "Telegram Bot da holat o'zgarganda bir nechta tinglovchilarni ogohlantiruvchi 'BotMessageNotifier' sinfini tuzing. 'addObserver(IBotMessageObserver obs)' va 'notifyObservers(String status)' metodlarini qo'shing.",
      "en": "Implement Observer pattern in Telegram Bot to notify all registered observers upon status change."
    },
    "requirements": {
      "classes": [
        "IBotMessageObserver",
        "BotMessageNotifier"
      ],
      "methods": [
        "addObserver",
        "notifyObservers"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\ninterface IBotMessageObserver {\n    void update(String status);\n}\n\nclass BotMessageNotifier {\n    private List<IBotMessageObserver> observers = new ArrayList<>();\n    public void addObserver(IBotMessageObserver o) { observers.add(o); }\n    public void notifyObservers(String status) {\n        for (IBotMessageObserver o : observers) o.update(status);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BotMessageNotifier n = new BotMessageNotifier();\n        n.addObserver(status -> System.out.println(\"Telegram Bot Xabari: \" + status));\n        n.notifyObservers(\"BUYURTMA TAYYOR\");\n    }\n}",
    "detailedSolution": {
      "theory": "Observer Pattern — bitta ob'yekt (Subject) holati o'zgarganda, unga obuna bo'lgan barcha boshqa ob'yektlarni (Observers) avtomatik xabardor qiluvchi 1-ko'pga (one-to-many) munosabatdir.",
      "theoryEn": "Observer pattern establishes a one-to-many dependency so that when one object changes state, all its dependents are notified automatically.",
      "cleanCode": "for (IBotMessageObserver o : observers) { o.update(status); }",
      "breakdown": [
        "<code>List<IBotMessageObserver> observers</code>: Tinglovchilar ro'yxatini dinamik saqlaydi."
      ],
      "pitfalls": "Obunachilarni ro'yxatdan o'chirish (removeObserver) imkoniyati bo'lmasa, xotira sizishi (memory leak) yuz berishi mumkin.",
      "cw2Tip": "CW2 da buyurtma tayyor bo'lganda ekranga, kvitansiyaga va konsol loglariga xabar berishda Observer ideal yechimdir."
    }
  },
  {
    "id": 98,
    "tier": 4,
    "tierName": "4-Bosqich: Observer Pattern va Xabardor Qilish",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "98. UzAirways — Kuzatuvchi Patterni (Observer Pattern)",
      "en": "98. UzAirways — Observer Event Dispatcher"
    },
    "scenario": {
      "uz": "UzAirways da holat o'zgarganda bir nechta tinglovchilarni ogohlantiruvchi 'FlightTicketNotifier' sinfini tuzing. 'addObserver(IFlightTicketObserver obs)' va 'notifyObservers(String status)' metodlarini qo'shing.",
      "en": "Implement Observer pattern in UzAirways to notify all registered observers upon status change."
    },
    "requirements": {
      "classes": [
        "IFlightTicketObserver",
        "FlightTicketNotifier"
      ],
      "methods": [
        "addObserver",
        "notifyObservers"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\ninterface IFlightTicketObserver {\n    void update(String status);\n}\n\nclass FlightTicketNotifier {\n    private List<IFlightTicketObserver> observers = new ArrayList<>();\n    public void addObserver(IFlightTicketObserver o) { observers.add(o); }\n    public void notifyObservers(String status) {\n        for (IFlightTicketObserver o : observers) o.update(status);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FlightTicketNotifier n = new FlightTicketNotifier();\n        n.addObserver(status -> System.out.println(\"UzAirways Xabari: \" + status));\n        n.notifyObservers(\"BUYURTMA TAYYOR\");\n    }\n}",
    "detailedSolution": {
      "theory": "Observer Pattern — bitta ob'yekt (Subject) holati o'zgarganda, unga obuna bo'lgan barcha boshqa ob'yektlarni (Observers) avtomatik xabardor qiluvchi 1-ko'pga (one-to-many) munosabatdir.",
      "theoryEn": "Observer pattern establishes a one-to-many dependency so that when one object changes state, all its dependents are notified automatically.",
      "cleanCode": "for (IFlightTicketObserver o : observers) { o.update(status); }",
      "breakdown": [
        "<code>List<IFlightTicketObserver> observers</code>: Tinglovchilar ro'yxatini dinamik saqlaydi."
      ],
      "pitfalls": "Obunachilarni ro'yxatdan o'chirish (removeObserver) imkoniyati bo'lmasa, xotira sizishi (memory leak) yuz berishi mumkin.",
      "cw2Tip": "CW2 da buyurtma tayyor bo'lganda ekranga, kvitansiyaga va konsol loglariga xabar berishda Observer ideal yechimdir."
    }
  },
  {
    "id": 99,
    "tier": 4,
    "tierName": "4-Bosqich: Observer Pattern va Xabardor Qilish",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "99. IT Park Academy — Kuzatuvchi Patterni (Observer Pattern)",
      "en": "99. IT Park Academy — Observer Event Dispatcher"
    },
    "scenario": {
      "uz": "IT Park Academy da holat o'zgarganda bir nechta tinglovchilarni ogohlantiruvchi 'BootcampCourseNotifier' sinfini tuzing. 'addObserver(IBootcampCourseObserver obs)' va 'notifyObservers(String status)' metodlarini qo'shing.",
      "en": "Implement Observer pattern in IT Park Academy to notify all registered observers upon status change."
    },
    "requirements": {
      "classes": [
        "IBootcampCourseObserver",
        "BootcampCourseNotifier"
      ],
      "methods": [
        "addObserver",
        "notifyObservers"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\ninterface IBootcampCourseObserver {\n    void update(String status);\n}\n\nclass BootcampCourseNotifier {\n    private List<IBootcampCourseObserver> observers = new ArrayList<>();\n    public void addObserver(IBootcampCourseObserver o) { observers.add(o); }\n    public void notifyObservers(String status) {\n        for (IBootcampCourseObserver o : observers) o.update(status);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BootcampCourseNotifier n = new BootcampCourseNotifier();\n        n.addObserver(status -> System.out.println(\"IT Park Academy Xabari: \" + status));\n        n.notifyObservers(\"BUYURTMA TAYYOR\");\n    }\n}",
    "detailedSolution": {
      "theory": "Observer Pattern — bitta ob'yekt (Subject) holati o'zgarganda, unga obuna bo'lgan barcha boshqa ob'yektlarni (Observers) avtomatik xabardor qiluvchi 1-ko'pga (one-to-many) munosabatdir.",
      "theoryEn": "Observer pattern establishes a one-to-many dependency so that when one object changes state, all its dependents are notified automatically.",
      "cleanCode": "for (IBootcampCourseObserver o : observers) { o.update(status); }",
      "breakdown": [
        "<code>List<IBootcampCourseObserver> observers</code>: Tinglovchilar ro'yxatini dinamik saqlaydi."
      ],
      "pitfalls": "Obunachilarni ro'yxatdan o'chirish (removeObserver) imkoniyati bo'lmasa, xotira sizishi (memory leak) yuz berishi mumkin.",
      "cw2Tip": "CW2 da buyurtma tayyor bo'lganda ekranga, kvitansiyaga va konsol loglariga xabar berishda Observer ideal yechimdir."
    }
  },
  {
    "id": 100,
    "tier": 4,
    "tierName": "4-Bosqich: Observer Pattern va Xabardor Qilish",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "100. Anorbank — Kuzatuvchi Patterni (Observer Pattern)",
      "en": "100. Anorbank — Observer Event Dispatcher"
    },
    "scenario": {
      "uz": "Anorbank da holat o'zgarganda bir nechta tinglovchilarni ogohlantiruvchi 'DebitCardNotifier' sinfini tuzing. 'addObserver(IDebitCardObserver obs)' va 'notifyObservers(String status)' metodlarini qo'shing.",
      "en": "Implement Observer pattern in Anorbank to notify all registered observers upon status change."
    },
    "requirements": {
      "classes": [
        "IDebitCardObserver",
        "DebitCardNotifier"
      ],
      "methods": [
        "addObserver",
        "notifyObservers"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\ninterface IDebitCardObserver {\n    void update(String status);\n}\n\nclass DebitCardNotifier {\n    private List<IDebitCardObserver> observers = new ArrayList<>();\n    public void addObserver(IDebitCardObserver o) { observers.add(o); }\n    public void notifyObservers(String status) {\n        for (IDebitCardObserver o : observers) o.update(status);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DebitCardNotifier n = new DebitCardNotifier();\n        n.addObserver(status -> System.out.println(\"Anorbank Xabari: \" + status));\n        n.notifyObservers(\"BUYURTMA TAYYOR\");\n    }\n}",
    "detailedSolution": {
      "theory": "Observer Pattern — bitta ob'yekt (Subject) holati o'zgarganda, unga obuna bo'lgan barcha boshqa ob'yektlarni (Observers) avtomatik xabardor qiluvchi 1-ko'pga (one-to-many) munosabatdir.",
      "theoryEn": "Observer pattern establishes a one-to-many dependency so that when one object changes state, all its dependents are notified automatically.",
      "cleanCode": "for (IDebitCardObserver o : observers) { o.update(status); }",
      "breakdown": [
        "<code>List<IDebitCardObserver> observers</code>: Tinglovchilar ro'yxatini dinamik saqlaydi."
      ],
      "pitfalls": "Obunachilarni ro'yxatdan o'chirish (removeObserver) imkoniyati bo'lmasa, xotira sizishi (memory leak) yuz berishi mumkin.",
      "cw2Tip": "CW2 da buyurtma tayyor bo'lganda ekranga, kvitansiyaga va konsol loglariga xabar berishda Observer ideal yechimdir."
    }
  },
  {
    "id": 101,
    "tier": 4,
    "tierName": "4-Bosqich: Observer Pattern va Xabardor Qilish",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "101. Oson Apteka — Kuzatuvchi Patterni (Observer Pattern)",
      "en": "101. Oson Apteka — Observer Event Dispatcher"
    },
    "scenario": {
      "uz": "Oson Apteka da holat o'zgarganda bir nechta tinglovchilarni ogohlantiruvchi 'MedicineNotifier' sinfini tuzing. 'addObserver(IMedicineObserver obs)' va 'notifyObservers(String status)' metodlarini qo'shing.",
      "en": "Implement Observer pattern in Oson Apteka to notify all registered observers upon status change."
    },
    "requirements": {
      "classes": [
        "IMedicineObserver",
        "MedicineNotifier"
      ],
      "methods": [
        "addObserver",
        "notifyObservers"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\ninterface IMedicineObserver {\n    void update(String status);\n}\n\nclass MedicineNotifier {\n    private List<IMedicineObserver> observers = new ArrayList<>();\n    public void addObserver(IMedicineObserver o) { observers.add(o); }\n    public void notifyObservers(String status) {\n        for (IMedicineObserver o : observers) o.update(status);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MedicineNotifier n = new MedicineNotifier();\n        n.addObserver(status -> System.out.println(\"Oson Apteka Xabari: \" + status));\n        n.notifyObservers(\"BUYURTMA TAYYOR\");\n    }\n}",
    "detailedSolution": {
      "theory": "Observer Pattern — bitta ob'yekt (Subject) holati o'zgarganda, unga obuna bo'lgan barcha boshqa ob'yektlarni (Observers) avtomatik xabardor qiluvchi 1-ko'pga (one-to-many) munosabatdir.",
      "theoryEn": "Observer pattern establishes a one-to-many dependency so that when one object changes state, all its dependents are notified automatically.",
      "cleanCode": "for (IMedicineObserver o : observers) { o.update(status); }",
      "breakdown": [
        "<code>List<IMedicineObserver> observers</code>: Tinglovchilar ro'yxatini dinamik saqlaydi."
      ],
      "pitfalls": "Obunachilarni ro'yxatdan o'chirish (removeObserver) imkoniyati bo'lmasa, xotira sizishi (memory leak) yuz berishi mumkin.",
      "cw2Tip": "CW2 da buyurtma tayyor bo'lganda ekranga, kvitansiyaga va konsol loglariga xabar berishda Observer ideal yechimdir."
    }
  },
  {
    "id": 102,
    "tier": 4,
    "tierName": "4-Bosqich: Observer Pattern va Xabardor Qilish",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "102. Evos FastFood — Kuzatuvchi Patterni (Observer Pattern)",
      "en": "102. Evos FastFood — Observer Event Dispatcher"
    },
    "scenario": {
      "uz": "Evos FastFood da holat o'zgarganda bir nechta tinglovchilarni ogohlantiruvchi 'FoodOrderNotifier' sinfini tuzing. 'addObserver(IFoodOrderObserver obs)' va 'notifyObservers(String status)' metodlarini qo'shing.",
      "en": "Implement Observer pattern in Evos FastFood to notify all registered observers upon status change."
    },
    "requirements": {
      "classes": [
        "IFoodOrderObserver",
        "FoodOrderNotifier"
      ],
      "methods": [
        "addObserver",
        "notifyObservers"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\ninterface IFoodOrderObserver {\n    void update(String status);\n}\n\nclass FoodOrderNotifier {\n    private List<IFoodOrderObserver> observers = new ArrayList<>();\n    public void addObserver(IFoodOrderObserver o) { observers.add(o); }\n    public void notifyObservers(String status) {\n        for (IFoodOrderObserver o : observers) o.update(status);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FoodOrderNotifier n = new FoodOrderNotifier();\n        n.addObserver(status -> System.out.println(\"Evos FastFood Xabari: \" + status));\n        n.notifyObservers(\"BUYURTMA TAYYOR\");\n    }\n}",
    "detailedSolution": {
      "theory": "Observer Pattern — bitta ob'yekt (Subject) holati o'zgarganda, unga obuna bo'lgan barcha boshqa ob'yektlarni (Observers) avtomatik xabardor qiluvchi 1-ko'pga (one-to-many) munosabatdir.",
      "theoryEn": "Observer pattern establishes a one-to-many dependency so that when one object changes state, all its dependents are notified automatically.",
      "cleanCode": "for (IFoodOrderObserver o : observers) { o.update(status); }",
      "breakdown": [
        "<code>List<IFoodOrderObserver> observers</code>: Tinglovchilar ro'yxatini dinamik saqlaydi."
      ],
      "pitfalls": "Obunachilarni ro'yxatdan o'chirish (removeObserver) imkoniyati bo'lmasa, xotira sizishi (memory leak) yuz berishi mumkin.",
      "cw2Tip": "CW2 da buyurtma tayyor bo'lganda ekranga, kvitansiyaga va konsol loglariga xabar berishda Observer ideal yechimdir."
    }
  },
  {
    "id": 103,
    "tier": 4,
    "tierName": "4-Bosqich: Observer Pattern va Xabardor Qilish",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "103. Bellissimo Pizza — Kuzatuvchi Patterni (Observer Pattern)",
      "en": "103. Bellissimo Pizza — Observer Event Dispatcher"
    },
    "scenario": {
      "uz": "Bellissimo Pizza da holat o'zgarganda bir nechta tinglovchilarni ogohlantiruvchi 'PizzaOrderNotifier' sinfini tuzing. 'addObserver(IPizzaOrderObserver obs)' va 'notifyObservers(String status)' metodlarini qo'shing.",
      "en": "Implement Observer pattern in Bellissimo Pizza to notify all registered observers upon status change."
    },
    "requirements": {
      "classes": [
        "IPizzaOrderObserver",
        "PizzaOrderNotifier"
      ],
      "methods": [
        "addObserver",
        "notifyObservers"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\ninterface IPizzaOrderObserver {\n    void update(String status);\n}\n\nclass PizzaOrderNotifier {\n    private List<IPizzaOrderObserver> observers = new ArrayList<>();\n    public void addObserver(IPizzaOrderObserver o) { observers.add(o); }\n    public void notifyObservers(String status) {\n        for (IPizzaOrderObserver o : observers) o.update(status);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PizzaOrderNotifier n = new PizzaOrderNotifier();\n        n.addObserver(status -> System.out.println(\"Bellissimo Pizza Xabari: \" + status));\n        n.notifyObservers(\"BUYURTMA TAYYOR\");\n    }\n}",
    "detailedSolution": {
      "theory": "Observer Pattern — bitta ob'yekt (Subject) holati o'zgarganda, unga obuna bo'lgan barcha boshqa ob'yektlarni (Observers) avtomatik xabardor qiluvchi 1-ko'pga (one-to-many) munosabatdir.",
      "theoryEn": "Observer pattern establishes a one-to-many dependency so that when one object changes state, all its dependents are notified automatically.",
      "cleanCode": "for (IPizzaOrderObserver o : observers) { o.update(status); }",
      "breakdown": [
        "<code>List<IPizzaOrderObserver> observers</code>: Tinglovchilar ro'yxatini dinamik saqlaydi."
      ],
      "pitfalls": "Obunachilarni ro'yxatdan o'chirish (removeObserver) imkoniyati bo'lmasa, xotira sizishi (memory leak) yuz berishi mumkin.",
      "cw2Tip": "CW2 da buyurtma tayyor bo'lganda ekranga, kvitansiyaga va konsol loglariga xabar berishda Observer ideal yechimdir."
    }
  },
  {
    "id": 104,
    "tier": 4,
    "tierName": "4-Bosqich: Observer Pattern va Xabardor Qilish",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "104. Milliy TV — Kuzatuvchi Patterni (Observer Pattern)",
      "en": "104. Milliy TV — Observer Event Dispatcher"
    },
    "scenario": {
      "uz": "Milliy TV da holat o'zgarganda bir nechta tinglovchilarni ogohlantiruvchi 'BroadcastShowNotifier' sinfini tuzing. 'addObserver(IBroadcastShowObserver obs)' va 'notifyObservers(String status)' metodlarini qo'shing.",
      "en": "Implement Observer pattern in Milliy TV to notify all registered observers upon status change."
    },
    "requirements": {
      "classes": [
        "IBroadcastShowObserver",
        "BroadcastShowNotifier"
      ],
      "methods": [
        "addObserver",
        "notifyObservers"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\ninterface IBroadcastShowObserver {\n    void update(String status);\n}\n\nclass BroadcastShowNotifier {\n    private List<IBroadcastShowObserver> observers = new ArrayList<>();\n    public void addObserver(IBroadcastShowObserver o) { observers.add(o); }\n    public void notifyObservers(String status) {\n        for (IBroadcastShowObserver o : observers) o.update(status);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BroadcastShowNotifier n = new BroadcastShowNotifier();\n        n.addObserver(status -> System.out.println(\"Milliy TV Xabari: \" + status));\n        n.notifyObservers(\"BUYURTMA TAYYOR\");\n    }\n}",
    "detailedSolution": {
      "theory": "Observer Pattern — bitta ob'yekt (Subject) holati o'zgarganda, unga obuna bo'lgan barcha boshqa ob'yektlarni (Observers) avtomatik xabardor qiluvchi 1-ko'pga (one-to-many) munosabatdir.",
      "theoryEn": "Observer pattern establishes a one-to-many dependency so that when one object changes state, all its dependents are notified automatically.",
      "cleanCode": "for (IBroadcastShowObserver o : observers) { o.update(status); }",
      "breakdown": [
        "<code>List<IBroadcastShowObserver> observers</code>: Tinglovchilar ro'yxatini dinamik saqlaydi."
      ],
      "pitfalls": "Obunachilarni ro'yxatdan o'chirish (removeObserver) imkoniyati bo'lmasa, xotira sizishi (memory leak) yuz berishi mumkin.",
      "cw2Tip": "CW2 da buyurtma tayyor bo'lganda ekranga, kvitansiyaga va konsol loglariga xabar berishda Observer ideal yechimdir."
    }
  },
  {
    "id": 105,
    "tier": 4,
    "tierName": "4-Bosqich: Observer Pattern va Xabardor Qilish",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "105. Spotify Sound — Kuzatuvchi Patterni (Observer Pattern)",
      "en": "105. Spotify Sound — Observer Event Dispatcher"
    },
    "scenario": {
      "uz": "Spotify Sound da holat o'zgarganda bir nechta tinglovchilarni ogohlantiruvchi 'AudioTrackNotifier' sinfini tuzing. 'addObserver(IAudioTrackObserver obs)' va 'notifyObservers(String status)' metodlarini qo'shing.",
      "en": "Implement Observer pattern in Spotify Sound to notify all registered observers upon status change."
    },
    "requirements": {
      "classes": [
        "IAudioTrackObserver",
        "AudioTrackNotifier"
      ],
      "methods": [
        "addObserver",
        "notifyObservers"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\ninterface IAudioTrackObserver {\n    void update(String status);\n}\n\nclass AudioTrackNotifier {\n    private List<IAudioTrackObserver> observers = new ArrayList<>();\n    public void addObserver(IAudioTrackObserver o) { observers.add(o); }\n    public void notifyObservers(String status) {\n        for (IAudioTrackObserver o : observers) o.update(status);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AudioTrackNotifier n = new AudioTrackNotifier();\n        n.addObserver(status -> System.out.println(\"Spotify Sound Xabari: \" + status));\n        n.notifyObservers(\"BUYURTMA TAYYOR\");\n    }\n}",
    "detailedSolution": {
      "theory": "Observer Pattern — bitta ob'yekt (Subject) holati o'zgarganda, unga obuna bo'lgan barcha boshqa ob'yektlarni (Observers) avtomatik xabardor qiluvchi 1-ko'pga (one-to-many) munosabatdir.",
      "theoryEn": "Observer pattern establishes a one-to-many dependency so that when one object changes state, all its dependents are notified automatically.",
      "cleanCode": "for (IAudioTrackObserver o : observers) { o.update(status); }",
      "breakdown": [
        "<code>List<IAudioTrackObserver> observers</code>: Tinglovchilar ro'yxatini dinamik saqlaydi."
      ],
      "pitfalls": "Obunachilarni ro'yxatdan o'chirish (removeObserver) imkoniyati bo'lmasa, xotira sizishi (memory leak) yuz berishi mumkin.",
      "cw2Tip": "CW2 da buyurtma tayyor bo'lganda ekranga, kvitansiyaga va konsol loglariga xabar berishda Observer ideal yechimdir."
    }
  },
  {
    "id": 106,
    "tier": 4,
    "tierName": "4-Bosqich: Observer Pattern va Xabardor Qilish",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "106. Smart Thermostat — Kuzatuvchi Patterni (Observer Pattern)",
      "en": "106. Smart Thermostat — Observer Event Dispatcher"
    },
    "scenario": {
      "uz": "Smart Thermostat da holat o'zgarganda bir nechta tinglovchilarni ogohlantiruvchi 'ThermostatNotifier' sinfini tuzing. 'addObserver(IThermostatObserver obs)' va 'notifyObservers(String status)' metodlarini qo'shing.",
      "en": "Implement Observer pattern in Smart Thermostat to notify all registered observers upon status change."
    },
    "requirements": {
      "classes": [
        "IThermostatObserver",
        "ThermostatNotifier"
      ],
      "methods": [
        "addObserver",
        "notifyObservers"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\ninterface IThermostatObserver {\n    void update(String status);\n}\n\nclass ThermostatNotifier {\n    private List<IThermostatObserver> observers = new ArrayList<>();\n    public void addObserver(IThermostatObserver o) { observers.add(o); }\n    public void notifyObservers(String status) {\n        for (IThermostatObserver o : observers) o.update(status);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ThermostatNotifier n = new ThermostatNotifier();\n        n.addObserver(status -> System.out.println(\"Smart Thermostat Xabari: \" + status));\n        n.notifyObservers(\"BUYURTMA TAYYOR\");\n    }\n}",
    "detailedSolution": {
      "theory": "Observer Pattern — bitta ob'yekt (Subject) holati o'zgarganda, unga obuna bo'lgan barcha boshqa ob'yektlarni (Observers) avtomatik xabardor qiluvchi 1-ko'pga (one-to-many) munosabatdir.",
      "theoryEn": "Observer pattern establishes a one-to-many dependency so that when one object changes state, all its dependents are notified automatically.",
      "cleanCode": "for (IThermostatObserver o : observers) { o.update(status); }",
      "breakdown": [
        "<code>List<IThermostatObserver> observers</code>: Tinglovchilar ro'yxatini dinamik saqlaydi."
      ],
      "pitfalls": "Obunachilarni ro'yxatdan o'chirish (removeObserver) imkoniyati bo'lmasa, xotira sizishi (memory leak) yuz berishi mumkin.",
      "cw2Tip": "CW2 da buyurtma tayyor bo'lganda ekranga, kvitansiyaga va konsol loglariga xabar berishda Observer ideal yechimdir."
    }
  },
  {
    "id": 107,
    "tier": 4,
    "tierName": "4-Bosqich: Observer Pattern va Xabardor Qilish",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "107. Drone Delivery — Kuzatuvchi Patterni (Observer Pattern)",
      "en": "107. Drone Delivery — Observer Event Dispatcher"
    },
    "scenario": {
      "uz": "Drone Delivery da holat o'zgarganda bir nechta tinglovchilarni ogohlantiruvchi 'DeliveryDroneNotifier' sinfini tuzing. 'addObserver(IDeliveryDroneObserver obs)' va 'notifyObservers(String status)' metodlarini qo'shing.",
      "en": "Implement Observer pattern in Drone Delivery to notify all registered observers upon status change."
    },
    "requirements": {
      "classes": [
        "IDeliveryDroneObserver",
        "DeliveryDroneNotifier"
      ],
      "methods": [
        "addObserver",
        "notifyObservers"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\ninterface IDeliveryDroneObserver {\n    void update(String status);\n}\n\nclass DeliveryDroneNotifier {\n    private List<IDeliveryDroneObserver> observers = new ArrayList<>();\n    public void addObserver(IDeliveryDroneObserver o) { observers.add(o); }\n    public void notifyObservers(String status) {\n        for (IDeliveryDroneObserver o : observers) o.update(status);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DeliveryDroneNotifier n = new DeliveryDroneNotifier();\n        n.addObserver(status -> System.out.println(\"Drone Delivery Xabari: \" + status));\n        n.notifyObservers(\"BUYURTMA TAYYOR\");\n    }\n}",
    "detailedSolution": {
      "theory": "Observer Pattern — bitta ob'yekt (Subject) holati o'zgarganda, unga obuna bo'lgan barcha boshqa ob'yektlarni (Observers) avtomatik xabardor qiluvchi 1-ko'pga (one-to-many) munosabatdir.",
      "theoryEn": "Observer pattern establishes a one-to-many dependency so that when one object changes state, all its dependents are notified automatically.",
      "cleanCode": "for (IDeliveryDroneObserver o : observers) { o.update(status); }",
      "breakdown": [
        "<code>List<IDeliveryDroneObserver> observers</code>: Tinglovchilar ro'yxatini dinamik saqlaydi."
      ],
      "pitfalls": "Obunachilarni ro'yxatdan o'chirish (removeObserver) imkoniyati bo'lmasa, xotira sizishi (memory leak) yuz berishi mumkin.",
      "cw2Tip": "CW2 da buyurtma tayyor bo'lganda ekranga, kvitansiyaga va konsol loglariga xabar berishda Observer ideal yechimdir."
    }
  },
  {
    "id": 108,
    "tier": 4,
    "tierName": "4-Bosqich: Observer Pattern va Xabardor Qilish",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "108. Smart Warehouse — Kuzatuvchi Patterni (Observer Pattern)",
      "en": "108. Smart Warehouse — Observer Event Dispatcher"
    },
    "scenario": {
      "uz": "Smart Warehouse da holat o'zgarganda bir nechta tinglovchilarni ogohlantiruvchi 'StorageBayNotifier' sinfini tuzing. 'addObserver(IStorageBayObserver obs)' va 'notifyObservers(String status)' metodlarini qo'shing.",
      "en": "Implement Observer pattern in Smart Warehouse to notify all registered observers upon status change."
    },
    "requirements": {
      "classes": [
        "IStorageBayObserver",
        "StorageBayNotifier"
      ],
      "methods": [
        "addObserver",
        "notifyObservers"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\ninterface IStorageBayObserver {\n    void update(String status);\n}\n\nclass StorageBayNotifier {\n    private List<IStorageBayObserver> observers = new ArrayList<>();\n    public void addObserver(IStorageBayObserver o) { observers.add(o); }\n    public void notifyObservers(String status) {\n        for (IStorageBayObserver o : observers) o.update(status);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StorageBayNotifier n = new StorageBayNotifier();\n        n.addObserver(status -> System.out.println(\"Smart Warehouse Xabari: \" + status));\n        n.notifyObservers(\"BUYURTMA TAYYOR\");\n    }\n}",
    "detailedSolution": {
      "theory": "Observer Pattern — bitta ob'yekt (Subject) holati o'zgarganda, unga obuna bo'lgan barcha boshqa ob'yektlarni (Observers) avtomatik xabardor qiluvchi 1-ko'pga (one-to-many) munosabatdir.",
      "theoryEn": "Observer pattern establishes a one-to-many dependency so that when one object changes state, all its dependents are notified automatically.",
      "cleanCode": "for (IStorageBayObserver o : observers) { o.update(status); }",
      "breakdown": [
        "<code>List<IStorageBayObserver> observers</code>: Tinglovchilar ro'yxatini dinamik saqlaydi."
      ],
      "pitfalls": "Obunachilarni ro'yxatdan o'chirish (removeObserver) imkoniyati bo'lmasa, xotira sizishi (memory leak) yuz berishi mumkin.",
      "cw2Tip": "CW2 da buyurtma tayyor bo'lganda ekranga, kvitansiyaga va konsol loglariga xabar berishda Observer ideal yechimdir."
    }
  },
  {
    "id": 109,
    "tier": 4,
    "tierName": "4-Bosqich: Observer Pattern va Xabardor Qilish",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "109. Crypto Wallet — Kuzatuvchi Patterni (Observer Pattern)",
      "en": "109. Crypto Wallet — Observer Event Dispatcher"
    },
    "scenario": {
      "uz": "Crypto Wallet da holat o'zgarganda bir nechta tinglovchilarni ogohlantiruvchi 'CryptoAssetNotifier' sinfini tuzing. 'addObserver(ICryptoAssetObserver obs)' va 'notifyObservers(String status)' metodlarini qo'shing.",
      "en": "Implement Observer pattern in Crypto Wallet to notify all registered observers upon status change."
    },
    "requirements": {
      "classes": [
        "ICryptoAssetObserver",
        "CryptoAssetNotifier"
      ],
      "methods": [
        "addObserver",
        "notifyObservers"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\ninterface ICryptoAssetObserver {\n    void update(String status);\n}\n\nclass CryptoAssetNotifier {\n    private List<ICryptoAssetObserver> observers = new ArrayList<>();\n    public void addObserver(ICryptoAssetObserver o) { observers.add(o); }\n    public void notifyObservers(String status) {\n        for (ICryptoAssetObserver o : observers) o.update(status);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CryptoAssetNotifier n = new CryptoAssetNotifier();\n        n.addObserver(status -> System.out.println(\"Crypto Wallet Xabari: \" + status));\n        n.notifyObservers(\"BUYURTMA TAYYOR\");\n    }\n}",
    "detailedSolution": {
      "theory": "Observer Pattern — bitta ob'yekt (Subject) holati o'zgarganda, unga obuna bo'lgan barcha boshqa ob'yektlarni (Observers) avtomatik xabardor qiluvchi 1-ko'pga (one-to-many) munosabatdir.",
      "theoryEn": "Observer pattern establishes a one-to-many dependency so that when one object changes state, all its dependents are notified automatically.",
      "cleanCode": "for (ICryptoAssetObserver o : observers) { o.update(status); }",
      "breakdown": [
        "<code>List<ICryptoAssetObserver> observers</code>: Tinglovchilar ro'yxatini dinamik saqlaydi."
      ],
      "pitfalls": "Obunachilarni ro'yxatdan o'chirish (removeObserver) imkoniyati bo'lmasa, xotira sizishi (memory leak) yuz berishi mumkin.",
      "cw2Tip": "CW2 da buyurtma tayyor bo'lganda ekranga, kvitansiyaga va konsol loglariga xabar berishda Observer ideal yechimdir."
    }
  },
  {
    "id": 110,
    "tier": 4,
    "tierName": "4-Bosqich: Observer Pattern va Xabardor Qilish",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "110. National Library — Kuzatuvchi Patterni (Observer Pattern)",
      "en": "110. National Library — Observer Event Dispatcher"
    },
    "scenario": {
      "uz": "National Library da holat o'zgarganda bir nechta tinglovchilarni ogohlantiruvchi 'CatalogBookNotifier' sinfini tuzing. 'addObserver(ICatalogBookObserver obs)' va 'notifyObservers(String status)' metodlarini qo'shing.",
      "en": "Implement Observer pattern in National Library to notify all registered observers upon status change."
    },
    "requirements": {
      "classes": [
        "ICatalogBookObserver",
        "CatalogBookNotifier"
      ],
      "methods": [
        "addObserver",
        "notifyObservers"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\ninterface ICatalogBookObserver {\n    void update(String status);\n}\n\nclass CatalogBookNotifier {\n    private List<ICatalogBookObserver> observers = new ArrayList<>();\n    public void addObserver(ICatalogBookObserver o) { observers.add(o); }\n    public void notifyObservers(String status) {\n        for (ICatalogBookObserver o : observers) o.update(status);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CatalogBookNotifier n = new CatalogBookNotifier();\n        n.addObserver(status -> System.out.println(\"National Library Xabari: \" + status));\n        n.notifyObservers(\"BUYURTMA TAYYOR\");\n    }\n}",
    "detailedSolution": {
      "theory": "Observer Pattern — bitta ob'yekt (Subject) holati o'zgarganda, unga obuna bo'lgan barcha boshqa ob'yektlarni (Observers) avtomatik xabardor qiluvchi 1-ko'pga (one-to-many) munosabatdir.",
      "theoryEn": "Observer pattern establishes a one-to-many dependency so that when one object changes state, all its dependents are notified automatically.",
      "cleanCode": "for (ICatalogBookObserver o : observers) { o.update(status); }",
      "breakdown": [
        "<code>List<ICatalogBookObserver> observers</code>: Tinglovchilar ro'yxatini dinamik saqlaydi."
      ],
      "pitfalls": "Obunachilarni ro'yxatdan o'chirish (removeObserver) imkoniyati bo'lmasa, xotira sizishi (memory leak) yuz berishi mumkin.",
      "cw2Tip": "CW2 da buyurtma tayyor bo'lganda ekranga, kvitansiyaga va konsol loglariga xabar berishda Observer ideal yechimdir."
    }
  },
  {
    "id": 111,
    "tier": 4,
    "tierName": "4-Bosqich: Observer Pattern va Xabardor Qilish",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "111. BeFit Club — Kuzatuvchi Patterni (Observer Pattern)",
      "en": "111. BeFit Club — Observer Event Dispatcher"
    },
    "scenario": {
      "uz": "BeFit Club da holat o'zgarganda bir nechta tinglovchilarni ogohlantiruvchi 'GymMemberNotifier' sinfini tuzing. 'addObserver(IGymMemberObserver obs)' va 'notifyObservers(String status)' metodlarini qo'shing.",
      "en": "Implement Observer pattern in BeFit Club to notify all registered observers upon status change."
    },
    "requirements": {
      "classes": [
        "IGymMemberObserver",
        "GymMemberNotifier"
      ],
      "methods": [
        "addObserver",
        "notifyObservers"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\ninterface IGymMemberObserver {\n    void update(String status);\n}\n\nclass GymMemberNotifier {\n    private List<IGymMemberObserver> observers = new ArrayList<>();\n    public void addObserver(IGymMemberObserver o) { observers.add(o); }\n    public void notifyObservers(String status) {\n        for (IGymMemberObserver o : observers) o.update(status);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GymMemberNotifier n = new GymMemberNotifier();\n        n.addObserver(status -> System.out.println(\"BeFit Club Xabari: \" + status));\n        n.notifyObservers(\"BUYURTMA TAYYOR\");\n    }\n}",
    "detailedSolution": {
      "theory": "Observer Pattern — bitta ob'yekt (Subject) holati o'zgarganda, unga obuna bo'lgan barcha boshqa ob'yektlarni (Observers) avtomatik xabardor qiluvchi 1-ko'pga (one-to-many) munosabatdir.",
      "theoryEn": "Observer pattern establishes a one-to-many dependency so that when one object changes state, all its dependents are notified automatically.",
      "cleanCode": "for (IGymMemberObserver o : observers) { o.update(status); }",
      "breakdown": [
        "<code>List<IGymMemberObserver> observers</code>: Tinglovchilar ro'yxatini dinamik saqlaydi."
      ],
      "pitfalls": "Obunachilarni ro'yxatdan o'chirish (removeObserver) imkoniyati bo'lmasa, xotira sizishi (memory leak) yuz berishi mumkin.",
      "cw2Tip": "CW2 da buyurtma tayyor bo'lganda ekranga, kvitansiyaga va konsol loglariga xabar berishda Observer ideal yechimdir."
    }
  },
  {
    "id": 112,
    "tier": 4,
    "tierName": "4-Bosqich: Observer Pattern va Xabardor Qilish",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "112. Tashkent Parking — Kuzatuvchi Patterni (Observer Pattern)",
      "en": "112. Tashkent Parking — Observer Event Dispatcher"
    },
    "scenario": {
      "uz": "Tashkent Parking da holat o'zgarganda bir nechta tinglovchilarni ogohlantiruvchi 'ParkingBayNotifier' sinfini tuzing. 'addObserver(IParkingBayObserver obs)' va 'notifyObservers(String status)' metodlarini qo'shing.",
      "en": "Implement Observer pattern in Tashkent Parking to notify all registered observers upon status change."
    },
    "requirements": {
      "classes": [
        "IParkingBayObserver",
        "ParkingBayNotifier"
      ],
      "methods": [
        "addObserver",
        "notifyObservers"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\ninterface IParkingBayObserver {\n    void update(String status);\n}\n\nclass ParkingBayNotifier {\n    private List<IParkingBayObserver> observers = new ArrayList<>();\n    public void addObserver(IParkingBayObserver o) { observers.add(o); }\n    public void notifyObservers(String status) {\n        for (IParkingBayObserver o : observers) o.update(status);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ParkingBayNotifier n = new ParkingBayNotifier();\n        n.addObserver(status -> System.out.println(\"Tashkent Parking Xabari: \" + status));\n        n.notifyObservers(\"BUYURTMA TAYYOR\");\n    }\n}",
    "detailedSolution": {
      "theory": "Observer Pattern — bitta ob'yekt (Subject) holati o'zgarganda, unga obuna bo'lgan barcha boshqa ob'yektlarni (Observers) avtomatik xabardor qiluvchi 1-ko'pga (one-to-many) munosabatdir.",
      "theoryEn": "Observer pattern establishes a one-to-many dependency so that when one object changes state, all its dependents are notified automatically.",
      "cleanCode": "for (IParkingBayObserver o : observers) { o.update(status); }",
      "breakdown": [
        "<code>List<IParkingBayObserver> observers</code>: Tinglovchilar ro'yxatini dinamik saqlaydi."
      ],
      "pitfalls": "Obunachilarni ro'yxatdan o'chirish (removeObserver) imkoniyati bo'lmasa, xotira sizishi (memory leak) yuz berishi mumkin.",
      "cw2Tip": "CW2 da buyurtma tayyor bo'lganda ekranga, kvitansiyaga va konsol loglariga xabar berishda Observer ideal yechimdir."
    }
  },
  {
    "id": 113,
    "tier": 4,
    "tierName": "4-Bosqich: Observer Pattern va Xabardor Qilish",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "113. Medion Clinic — Kuzatuvchi Patterni (Observer Pattern)",
      "en": "113. Medion Clinic — Observer Event Dispatcher"
    },
    "scenario": {
      "uz": "Medion Clinic da holat o'zgarganda bir nechta tinglovchilarni ogohlantiruvchi 'PatientRecordNotifier' sinfini tuzing. 'addObserver(IPatientRecordObserver obs)' va 'notifyObservers(String status)' metodlarini qo'shing.",
      "en": "Implement Observer pattern in Medion Clinic to notify all registered observers upon status change."
    },
    "requirements": {
      "classes": [
        "IPatientRecordObserver",
        "PatientRecordNotifier"
      ],
      "methods": [
        "addObserver",
        "notifyObservers"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\ninterface IPatientRecordObserver {\n    void update(String status);\n}\n\nclass PatientRecordNotifier {\n    private List<IPatientRecordObserver> observers = new ArrayList<>();\n    public void addObserver(IPatientRecordObserver o) { observers.add(o); }\n    public void notifyObservers(String status) {\n        for (IPatientRecordObserver o : observers) o.update(status);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PatientRecordNotifier n = new PatientRecordNotifier();\n        n.addObserver(status -> System.out.println(\"Medion Clinic Xabari: \" + status));\n        n.notifyObservers(\"BUYURTMA TAYYOR\");\n    }\n}",
    "detailedSolution": {
      "theory": "Observer Pattern — bitta ob'yekt (Subject) holati o'zgarganda, unga obuna bo'lgan barcha boshqa ob'yektlarni (Observers) avtomatik xabardor qiluvchi 1-ko'pga (one-to-many) munosabatdir.",
      "theoryEn": "Observer pattern establishes a one-to-many dependency so that when one object changes state, all its dependents are notified automatically.",
      "cleanCode": "for (IPatientRecordObserver o : observers) { o.update(status); }",
      "breakdown": [
        "<code>List<IPatientRecordObserver> observers</code>: Tinglovchilar ro'yxatini dinamik saqlaydi."
      ],
      "pitfalls": "Obunachilarni ro'yxatdan o'chirish (removeObserver) imkoniyati bo'lmasa, xotira sizishi (memory leak) yuz berishi mumkin.",
      "cw2Tip": "CW2 da buyurtma tayyor bo'lganda ekranga, kvitansiyaga va konsol loglariga xabar berishda Observer ideal yechimdir."
    }
  },
  {
    "id": 114,
    "tier": 4,
    "tierName": "4-Bosqich: Observer Pattern va Xabardor Qilish",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "114. Hyatt Regency — Kuzatuvchi Patterni (Observer Pattern)",
      "en": "114. Hyatt Regency — Observer Event Dispatcher"
    },
    "scenario": {
      "uz": "Hyatt Regency da holat o'zgarganda bir nechta tinglovchilarni ogohlantiruvchi 'HotelReservationNotifier' sinfini tuzing. 'addObserver(IHotelReservationObserver obs)' va 'notifyObservers(String status)' metodlarini qo'shing.",
      "en": "Implement Observer pattern in Hyatt Regency to notify all registered observers upon status change."
    },
    "requirements": {
      "classes": [
        "IHotelReservationObserver",
        "HotelReservationNotifier"
      ],
      "methods": [
        "addObserver",
        "notifyObservers"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\ninterface IHotelReservationObserver {\n    void update(String status);\n}\n\nclass HotelReservationNotifier {\n    private List<IHotelReservationObserver> observers = new ArrayList<>();\n    public void addObserver(IHotelReservationObserver o) { observers.add(o); }\n    public void notifyObservers(String status) {\n        for (IHotelReservationObserver o : observers) o.update(status);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        HotelReservationNotifier n = new HotelReservationNotifier();\n        n.addObserver(status -> System.out.println(\"Hyatt Regency Xabari: \" + status));\n        n.notifyObservers(\"BUYURTMA TAYYOR\");\n    }\n}",
    "detailedSolution": {
      "theory": "Observer Pattern — bitta ob'yekt (Subject) holati o'zgarganda, unga obuna bo'lgan barcha boshqa ob'yektlarni (Observers) avtomatik xabardor qiluvchi 1-ko'pga (one-to-many) munosabatdir.",
      "theoryEn": "Observer pattern establishes a one-to-many dependency so that when one object changes state, all its dependents are notified automatically.",
      "cleanCode": "for (IHotelReservationObserver o : observers) { o.update(status); }",
      "breakdown": [
        "<code>List<IHotelReservationObserver> observers</code>: Tinglovchilar ro'yxatini dinamik saqlaydi."
      ],
      "pitfalls": "Obunachilarni ro'yxatdan o'chirish (removeObserver) imkoniyati bo'lmasa, xotira sizishi (memory leak) yuz berishi mumkin.",
      "cw2Tip": "CW2 da buyurtma tayyor bo'lganda ekranga, kvitansiyaga va konsol loglariga xabar berishda Observer ideal yechimdir."
    }
  },
  {
    "id": 115,
    "tier": 4,
    "tierName": "4-Bosqich: Observer Pattern va Xabardor Qilish",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "115. Premier Cinema — Kuzatuvchi Patterni (Observer Pattern)",
      "en": "115. Premier Cinema — Observer Event Dispatcher"
    },
    "scenario": {
      "uz": "Premier Cinema da holat o'zgarganda bir nechta tinglovchilarni ogohlantiruvchi 'CinemaTicketNotifier' sinfini tuzing. 'addObserver(ICinemaTicketObserver obs)' va 'notifyObservers(String status)' metodlarini qo'shing.",
      "en": "Implement Observer pattern in Premier Cinema to notify all registered observers upon status change."
    },
    "requirements": {
      "classes": [
        "ICinemaTicketObserver",
        "CinemaTicketNotifier"
      ],
      "methods": [
        "addObserver",
        "notifyObservers"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\ninterface ICinemaTicketObserver {\n    void update(String status);\n}\n\nclass CinemaTicketNotifier {\n    private List<ICinemaTicketObserver> observers = new ArrayList<>();\n    public void addObserver(ICinemaTicketObserver o) { observers.add(o); }\n    public void notifyObservers(String status) {\n        for (ICinemaTicketObserver o : observers) o.update(status);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CinemaTicketNotifier n = new CinemaTicketNotifier();\n        n.addObserver(status -> System.out.println(\"Premier Cinema Xabari: \" + status));\n        n.notifyObservers(\"BUYURTMA TAYYOR\");\n    }\n}",
    "detailedSolution": {
      "theory": "Observer Pattern — bitta ob'yekt (Subject) holati o'zgarganda, unga obuna bo'lgan barcha boshqa ob'yektlarni (Observers) avtomatik xabardor qiluvchi 1-ko'pga (one-to-many) munosabatdir.",
      "theoryEn": "Observer pattern establishes a one-to-many dependency so that when one object changes state, all its dependents are notified automatically.",
      "cleanCode": "for (ICinemaTicketObserver o : observers) { o.update(status); }",
      "breakdown": [
        "<code>List<ICinemaTicketObserver> observers</code>: Tinglovchilar ro'yxatini dinamik saqlaydi."
      ],
      "pitfalls": "Obunachilarni ro'yxatdan o'chirish (removeObserver) imkoniyati bo'lmasa, xotira sizishi (memory leak) yuz berishi mumkin.",
      "cw2Tip": "CW2 da buyurtma tayyor bo'lganda ekranga, kvitansiyaga va konsol loglariga xabar berishda Observer ideal yechimdir."
    }
  },
  {
    "id": 116,
    "tier": 4,
    "tierName": "4-Bosqich: Observer Pattern va Xabardor Qilish",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "116. Yandex Scooter — Kuzatuvchi Patterni (Observer Pattern)",
      "en": "116. Yandex Scooter — Observer Event Dispatcher"
    },
    "scenario": {
      "uz": "Yandex Scooter da holat o'zgarganda bir nechta tinglovchilarni ogohlantiruvchi 'ElectricScooterNotifier' sinfini tuzing. 'addObserver(IElectricScooterObserver obs)' va 'notifyObservers(String status)' metodlarini qo'shing.",
      "en": "Implement Observer pattern in Yandex Scooter to notify all registered observers upon status change."
    },
    "requirements": {
      "classes": [
        "IElectricScooterObserver",
        "ElectricScooterNotifier"
      ],
      "methods": [
        "addObserver",
        "notifyObservers"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\ninterface IElectricScooterObserver {\n    void update(String status);\n}\n\nclass ElectricScooterNotifier {\n    private List<IElectricScooterObserver> observers = new ArrayList<>();\n    public void addObserver(IElectricScooterObserver o) { observers.add(o); }\n    public void notifyObservers(String status) {\n        for (IElectricScooterObserver o : observers) o.update(status);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ElectricScooterNotifier n = new ElectricScooterNotifier();\n        n.addObserver(status -> System.out.println(\"Yandex Scooter Xabari: \" + status));\n        n.notifyObservers(\"BUYURTMA TAYYOR\");\n    }\n}",
    "detailedSolution": {
      "theory": "Observer Pattern — bitta ob'yekt (Subject) holati o'zgarganda, unga obuna bo'lgan barcha boshqa ob'yektlarni (Observers) avtomatik xabardor qiluvchi 1-ko'pga (one-to-many) munosabatdir.",
      "theoryEn": "Observer pattern establishes a one-to-many dependency so that when one object changes state, all its dependents are notified automatically.",
      "cleanCode": "for (IElectricScooterObserver o : observers) { o.update(status); }",
      "breakdown": [
        "<code>List<IElectricScooterObserver> observers</code>: Tinglovchilar ro'yxatini dinamik saqlaydi."
      ],
      "pitfalls": "Obunachilarni ro'yxatdan o'chirish (removeObserver) imkoniyati bo'lmasa, xotira sizishi (memory leak) yuz berishi mumkin.",
      "cw2Tip": "CW2 da buyurtma tayyor bo'lganda ekranga, kvitansiyaga va konsol loglariga xabar berishda Observer ideal yechimdir."
    }
  },
  {
    "id": 117,
    "tier": 4,
    "tierName": "4-Bosqich: Observer Pattern va Xabardor Qilish",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "117. Weather Network — Kuzatuvchi Patterni (Observer Pattern)",
      "en": "117. Weather Network — Observer Event Dispatcher"
    },
    "scenario": {
      "uz": "Weather Network da holat o'zgarganda bir nechta tinglovchilarni ogohlantiruvchi 'MeteoStationNotifier' sinfini tuzing. 'addObserver(IMeteoStationObserver obs)' va 'notifyObservers(String status)' metodlarini qo'shing.",
      "en": "Implement Observer pattern in Weather Network to notify all registered observers upon status change."
    },
    "requirements": {
      "classes": [
        "IMeteoStationObserver",
        "MeteoStationNotifier"
      ],
      "methods": [
        "addObserver",
        "notifyObservers"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\ninterface IMeteoStationObserver {\n    void update(String status);\n}\n\nclass MeteoStationNotifier {\n    private List<IMeteoStationObserver> observers = new ArrayList<>();\n    public void addObserver(IMeteoStationObserver o) { observers.add(o); }\n    public void notifyObservers(String status) {\n        for (IMeteoStationObserver o : observers) o.update(status);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MeteoStationNotifier n = new MeteoStationNotifier();\n        n.addObserver(status -> System.out.println(\"Weather Network Xabari: \" + status));\n        n.notifyObservers(\"BUYURTMA TAYYOR\");\n    }\n}",
    "detailedSolution": {
      "theory": "Observer Pattern — bitta ob'yekt (Subject) holati o'zgarganda, unga obuna bo'lgan barcha boshqa ob'yektlarni (Observers) avtomatik xabardor qiluvchi 1-ko'pga (one-to-many) munosabatdir.",
      "theoryEn": "Observer pattern establishes a one-to-many dependency so that when one object changes state, all its dependents are notified automatically.",
      "cleanCode": "for (IMeteoStationObserver o : observers) { o.update(status); }",
      "breakdown": [
        "<code>List<IMeteoStationObserver> observers</code>: Tinglovchilar ro'yxatini dinamik saqlaydi."
      ],
      "pitfalls": "Obunachilarni ro'yxatdan o'chirish (removeObserver) imkoniyati bo'lmasa, xotira sizishi (memory leak) yuz berishi mumkin.",
      "cw2Tip": "CW2 da buyurtma tayyor bo'lganda ekranga, kvitansiyaga va konsol loglariga xabar berishda Observer ideal yechimdir."
    }
  },
  {
    "id": 118,
    "tier": 4,
    "tierName": "4-Bosqich: Observer Pattern va Xabardor Qilish",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "118. OpenMarket Auction — Kuzatuvchi Patterni (Observer Pattern)",
      "en": "118. OpenMarket Auction — Observer Event Dispatcher"
    },
    "scenario": {
      "uz": "OpenMarket Auction da holat o'zgarganda bir nechta tinglovchilarni ogohlantiruvchi 'AuctionLotNotifier' sinfini tuzing. 'addObserver(IAuctionLotObserver obs)' va 'notifyObservers(String status)' metodlarini qo'shing.",
      "en": "Implement Observer pattern in OpenMarket Auction to notify all registered observers upon status change."
    },
    "requirements": {
      "classes": [
        "IAuctionLotObserver",
        "AuctionLotNotifier"
      ],
      "methods": [
        "addObserver",
        "notifyObservers"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\ninterface IAuctionLotObserver {\n    void update(String status);\n}\n\nclass AuctionLotNotifier {\n    private List<IAuctionLotObserver> observers = new ArrayList<>();\n    public void addObserver(IAuctionLotObserver o) { observers.add(o); }\n    public void notifyObservers(String status) {\n        for (IAuctionLotObserver o : observers) o.update(status);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AuctionLotNotifier n = new AuctionLotNotifier();\n        n.addObserver(status -> System.out.println(\"OpenMarket Auction Xabari: \" + status));\n        n.notifyObservers(\"BUYURTMA TAYYOR\");\n    }\n}",
    "detailedSolution": {
      "theory": "Observer Pattern — bitta ob'yekt (Subject) holati o'zgarganda, unga obuna bo'lgan barcha boshqa ob'yektlarni (Observers) avtomatik xabardor qiluvchi 1-ko'pga (one-to-many) munosabatdir.",
      "theoryEn": "Observer pattern establishes a one-to-many dependency so that when one object changes state, all its dependents are notified automatically.",
      "cleanCode": "for (IAuctionLotObserver o : observers) { o.update(status); }",
      "breakdown": [
        "<code>List<IAuctionLotObserver> observers</code>: Tinglovchilar ro'yxatini dinamik saqlaydi."
      ],
      "pitfalls": "Obunachilarni ro'yxatdan o'chirish (removeObserver) imkoniyati bo'lmasa, xotira sizishi (memory leak) yuz berishi mumkin.",
      "cw2Tip": "CW2 da buyurtma tayyor bo'lganda ekranga, kvitansiyaga va konsol loglariga xabar berishda Observer ideal yechimdir."
    }
  },
  {
    "id": 119,
    "tier": 4,
    "tierName": "4-Bosqich: Observer Pattern va Xabardor Qilish",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "119. Solar Energy Grid — Kuzatuvchi Patterni (Observer Pattern)",
      "en": "119. Solar Energy Grid — Observer Event Dispatcher"
    },
    "scenario": {
      "uz": "Solar Energy Grid da holat o'zgarganda bir nechta tinglovchilarni ogohlantiruvchi 'SolarInverterNotifier' sinfini tuzing. 'addObserver(ISolarInverterObserver obs)' va 'notifyObservers(String status)' metodlarini qo'shing.",
      "en": "Implement Observer pattern in Solar Energy Grid to notify all registered observers upon status change."
    },
    "requirements": {
      "classes": [
        "ISolarInverterObserver",
        "SolarInverterNotifier"
      ],
      "methods": [
        "addObserver",
        "notifyObservers"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\ninterface ISolarInverterObserver {\n    void update(String status);\n}\n\nclass SolarInverterNotifier {\n    private List<ISolarInverterObserver> observers = new ArrayList<>();\n    public void addObserver(ISolarInverterObserver o) { observers.add(o); }\n    public void notifyObservers(String status) {\n        for (ISolarInverterObserver o : observers) o.update(status);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SolarInverterNotifier n = new SolarInverterNotifier();\n        n.addObserver(status -> System.out.println(\"Solar Energy Grid Xabari: \" + status));\n        n.notifyObservers(\"BUYURTMA TAYYOR\");\n    }\n}",
    "detailedSolution": {
      "theory": "Observer Pattern — bitta ob'yekt (Subject) holati o'zgarganda, unga obuna bo'lgan barcha boshqa ob'yektlarni (Observers) avtomatik xabardor qiluvchi 1-ko'pga (one-to-many) munosabatdir.",
      "theoryEn": "Observer pattern establishes a one-to-many dependency so that when one object changes state, all its dependents are notified automatically.",
      "cleanCode": "for (ISolarInverterObserver o : observers) { o.update(status); }",
      "breakdown": [
        "<code>List<ISolarInverterObserver> observers</code>: Tinglovchilar ro'yxatini dinamik saqlaydi."
      ],
      "pitfalls": "Obunachilarni ro'yxatdan o'chirish (removeObserver) imkoniyati bo'lmasa, xotira sizishi (memory leak) yuz berishi mumkin.",
      "cw2Tip": "CW2 da buyurtma tayyor bo'lganda ekranga, kvitansiyaga va konsol loglariga xabar berishda Observer ideal yechimdir."
    }
  },
  {
    "id": 120,
    "tier": 4,
    "tierName": "4-Bosqich: Observer Pattern va Xabardor Qilish",
    "sector": "GoF Behavioural",
    "title": {
      "uz": "120. O'zbekiston Temir Yo'llari — Kuzatuvchi Patterni (Observer Pattern)",
      "en": "120. O'zbekiston Temir Yo'llari — Observer Event Dispatcher"
    },
    "scenario": {
      "uz": "O'zbekiston Temir Yo'llari da holat o'zgarganda bir nechta tinglovchilarni ogohlantiruvchi 'TrainRouteNotifier' sinfini tuzing. 'addObserver(ITrainRouteObserver obs)' va 'notifyObservers(String status)' metodlarini qo'shing.",
      "en": "Implement Observer pattern in O'zbekiston Temir Yo'llari to notify all registered observers upon status change."
    },
    "requirements": {
      "classes": [
        "ITrainRouteObserver",
        "TrainRouteNotifier"
      ],
      "methods": [
        "addObserver",
        "notifyObservers"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\ninterface ITrainRouteObserver {\n    void update(String status);\n}\n\nclass TrainRouteNotifier {\n    private List<ITrainRouteObserver> observers = new ArrayList<>();\n    public void addObserver(ITrainRouteObserver o) { observers.add(o); }\n    public void notifyObservers(String status) {\n        for (ITrainRouteObserver o : observers) o.update(status);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TrainRouteNotifier n = new TrainRouteNotifier();\n        n.addObserver(status -> System.out.println(\"O'zbekiston Temir Yo'llari Xabari: \" + status));\n        n.notifyObservers(\"BUYURTMA TAYYOR\");\n    }\n}",
    "detailedSolution": {
      "theory": "Observer Pattern — bitta ob'yekt (Subject) holati o'zgarganda, unga obuna bo'lgan barcha boshqa ob'yektlarni (Observers) avtomatik xabardor qiluvchi 1-ko'pga (one-to-many) munosabatdir.",
      "theoryEn": "Observer pattern establishes a one-to-many dependency so that when one object changes state, all its dependents are notified automatically.",
      "cleanCode": "for (ITrainRouteObserver o : observers) { o.update(status); }",
      "breakdown": [
        "<code>List<ITrainRouteObserver> observers</code>: Tinglovchilar ro'yxatini dinamik saqlaydi."
      ],
      "pitfalls": "Obunachilarni ro'yxatdan o'chirish (removeObserver) imkoniyati bo'lmasa, xotira sizishi (memory leak) yuz berishi mumkin.",
      "cw2Tip": "CW2 da buyurtma tayyor bo'lganda ekranga, kvitansiyaga va konsol loglariga xabar berishda Observer ideal yechimdir."
    }
  },
  {
    "id": 121,
    "tier": 5,
    "tierName": "5-Bosqich: To'liq WIUT CW2 Konsol Ilovasi (50%)",
    "sector": "Master • CW2",
    "title": {
      "uz": "121. Uzum Market — CW2 Konsol Buyurtma Tizimi Arxitekturasi",
      "en": "121. Uzum Market — Complete CW2 Console Order Architecture"
    },
    "scenario": {
      "uz": "WIUT CW2 talablari asosida Uzum Market uchun to'liq 'ProductCW2OrderApp' sinfini tuzing: buyurtma kodi ('ORD-xxx'), tovarlar soni, hisoblangan yakuniy chegirma va formatlangan chek chop etish ('printReceipt()').",
      "en": "Construct comprehensive WIUT CW2 'ProductCW2OrderApp' with order code, items total, discount application and formatted receipt printing."
    },
    "requirements": {
      "classes": [
        "ProductCW2OrderApp"
      ],
      "methods": [
        "printReceipt"
      ]
    },
    "starterCode": "",
    "solution": "class ProductCW2OrderApp {\n    private String orderId;\n    private double subtotal;\n    private double discountPct;\n\n    public ProductCW2OrderApp(String orderId, double subtotal, double discountPct) {\n        this.orderId = orderId;\n        this.subtotal = subtotal;\n        this.discountPct = discountPct;\n    }\n\n    public double calculateFinalTotal() {\n        return subtotal * (1.0 - (discountPct / 100.0));\n    }\n\n    public void printReceipt() {\n        System.out.println(\"==========================================\");\n        System.out.println(\"🏢 WIUT CW2: UZUM MARKET CHEKI\");\n        System.out.println(\"Buyurtma ID: \" + orderId);\n        System.out.println(\"Dastlabki summa: $\" + subtotal);\n        System.out.println(\"Chegirma: \" + discountPct + \"%\");\n        System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n        System.out.println(\"==========================================\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ProductCW2OrderApp app = new ProductCW2OrderApp(\"PRD-9001\", 120.0, 15.0);\n        app.printReceipt();\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 5COSC018C Coursework 2 (50%) talablarida asosiy konsol ilovasi toza arxitektura (Clean Architecture), dizayn patternlar va xatosiz chek chop etish qobiliyatini talab qiladi.",
      "theoryEn": "WIUT CW2 specification mandates Clean Architecture, robust design patterns, and formatted terminal receipts.",
      "cleanCode": "public void printReceipt() {\n    System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n}",
      "breakdown": [
        "<code>printReceipt()</code>: Buyurtma ma'lumotlarini formatlangan chiroyli kvitansiyaga aylantirib beradi."
      ],
      "pitfalls": "Manfiy chegirma foizlari kiritilishiga yo'l qo'ymang.",
      "cw2Tip": "Viva savolida examiner chek formati va patternlar integratsiyasini qanday amalga oshirganingizni so'raydi!"
    }
  },
  {
    "id": 122,
    "tier": 5,
    "tierName": "5-Bosqich: To'liq WIUT CW2 Konsol Ilovasi (50%)",
    "sector": "Master • CW2",
    "title": {
      "uz": "122. Payme Wallet — CW2 Konsol Buyurtma Tizimi Arxitekturasi",
      "en": "122. Payme Wallet — Complete CW2 Console Order Architecture"
    },
    "scenario": {
      "uz": "WIUT CW2 talablari asosida Payme Wallet uchun to'liq 'WalletUserCW2OrderApp' sinfini tuzing: buyurtma kodi ('ORD-xxx'), tovarlar soni, hisoblangan yakuniy chegirma va formatlangan chek chop etish ('printReceipt()').",
      "en": "Construct comprehensive WIUT CW2 'WalletUserCW2OrderApp' with order code, items total, discount application and formatted receipt printing."
    },
    "requirements": {
      "classes": [
        "WalletUserCW2OrderApp"
      ],
      "methods": [
        "printReceipt"
      ]
    },
    "starterCode": "",
    "solution": "class WalletUserCW2OrderApp {\n    private String orderId;\n    private double subtotal;\n    private double discountPct;\n\n    public WalletUserCW2OrderApp(String orderId, double subtotal, double discountPct) {\n        this.orderId = orderId;\n        this.subtotal = subtotal;\n        this.discountPct = discountPct;\n    }\n\n    public double calculateFinalTotal() {\n        return subtotal * (1.0 - (discountPct / 100.0));\n    }\n\n    public void printReceipt() {\n        System.out.println(\"==========================================\");\n        System.out.println(\"🏢 WIUT CW2: PAYME WALLET CHEKI\");\n        System.out.println(\"Buyurtma ID: \" + orderId);\n        System.out.println(\"Dastlabki summa: $\" + subtotal);\n        System.out.println(\"Chegirma: \" + discountPct + \"%\");\n        System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n        System.out.println(\"==========================================\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WalletUserCW2OrderApp app = new WalletUserCW2OrderApp(\"ACC-9001\", 120.0, 15.0);\n        app.printReceipt();\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 5COSC018C Coursework 2 (50%) talablarida asosiy konsol ilovasi toza arxitektura (Clean Architecture), dizayn patternlar va xatosiz chek chop etish qobiliyatini talab qiladi.",
      "theoryEn": "WIUT CW2 specification mandates Clean Architecture, robust design patterns, and formatted terminal receipts.",
      "cleanCode": "public void printReceipt() {\n    System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n}",
      "breakdown": [
        "<code>printReceipt()</code>: Buyurtma ma'lumotlarini formatlangan chiroyli kvitansiyaga aylantirib beradi."
      ],
      "pitfalls": "Manfiy chegirma foizlari kiritilishiga yo'l qo'ymang.",
      "cw2Tip": "Viva savolida examiner chek formati va patternlar integratsiyasini qanday amalga oshirganingizni so'raydi!"
    }
  },
  {
    "id": 123,
    "tier": 5,
    "tierName": "5-Bosqich: To'liq WIUT CW2 Konsol Ilovasi (50%)",
    "sector": "Master • CW2",
    "title": {
      "uz": "123. Yandex Go — CW2 Konsol Buyurtma Tizimi Arxitekturasi",
      "en": "123. Yandex Go — Complete CW2 Console Order Architecture"
    },
    "scenario": {
      "uz": "WIUT CW2 talablari asosida Yandex Go uchun to'liq 'TaxiRideCW2OrderApp' sinfini tuzing: buyurtma kodi ('ORD-xxx'), tovarlar soni, hisoblangan yakuniy chegirma va formatlangan chek chop etish ('printReceipt()').",
      "en": "Construct comprehensive WIUT CW2 'TaxiRideCW2OrderApp' with order code, items total, discount application and formatted receipt printing."
    },
    "requirements": {
      "classes": [
        "TaxiRideCW2OrderApp"
      ],
      "methods": [
        "printReceipt"
      ]
    },
    "starterCode": "",
    "solution": "class TaxiRideCW2OrderApp {\n    private String orderId;\n    private double subtotal;\n    private double discountPct;\n\n    public TaxiRideCW2OrderApp(String orderId, double subtotal, double discountPct) {\n        this.orderId = orderId;\n        this.subtotal = subtotal;\n        this.discountPct = discountPct;\n    }\n\n    public double calculateFinalTotal() {\n        return subtotal * (1.0 - (discountPct / 100.0));\n    }\n\n    public void printReceipt() {\n        System.out.println(\"==========================================\");\n        System.out.println(\"🏢 WIUT CW2: YANDEX GO CHEKI\");\n        System.out.println(\"Buyurtma ID: \" + orderId);\n        System.out.println(\"Dastlabki summa: $\" + subtotal);\n        System.out.println(\"Chegirma: \" + discountPct + \"%\");\n        System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n        System.out.println(\"==========================================\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TaxiRideCW2OrderApp app = new TaxiRideCW2OrderApp(\"TAX-9001\", 120.0, 15.0);\n        app.printReceipt();\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 5COSC018C Coursework 2 (50%) talablarida asosiy konsol ilovasi toza arxitektura (Clean Architecture), dizayn patternlar va xatosiz chek chop etish qobiliyatini talab qiladi.",
      "theoryEn": "WIUT CW2 specification mandates Clean Architecture, robust design patterns, and formatted terminal receipts.",
      "cleanCode": "public void printReceipt() {\n    System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n}",
      "breakdown": [
        "<code>printReceipt()</code>: Buyurtma ma'lumotlarini formatlangan chiroyli kvitansiyaga aylantirib beradi."
      ],
      "pitfalls": "Manfiy chegirma foizlari kiritilishiga yo'l qo'ymang.",
      "cw2Tip": "Viva savolida examiner chek formati va patternlar integratsiyasini qanday amalga oshirganingizni so'raydi!"
    }
  },
  {
    "id": 124,
    "tier": 5,
    "tierName": "5-Bosqich: To'liq WIUT CW2 Konsol Ilovasi (50%)",
    "sector": "Master • CW2",
    "title": {
      "uz": "124. Korzinka Go — CW2 Konsol Buyurtma Tizimi Arxitekturasi",
      "en": "124. Korzinka Go — Complete CW2 Console Order Architecture"
    },
    "scenario": {
      "uz": "WIUT CW2 talablari asosida Korzinka Go uchun to'liq 'LoyaltyCardCW2OrderApp' sinfini tuzing: buyurtma kodi ('ORD-xxx'), tovarlar soni, hisoblangan yakuniy chegirma va formatlangan chek chop etish ('printReceipt()').",
      "en": "Construct comprehensive WIUT CW2 'LoyaltyCardCW2OrderApp' with order code, items total, discount application and formatted receipt printing."
    },
    "requirements": {
      "classes": [
        "LoyaltyCardCW2OrderApp"
      ],
      "methods": [
        "printReceipt"
      ]
    },
    "starterCode": "",
    "solution": "class LoyaltyCardCW2OrderApp {\n    private String orderId;\n    private double subtotal;\n    private double discountPct;\n\n    public LoyaltyCardCW2OrderApp(String orderId, double subtotal, double discountPct) {\n        this.orderId = orderId;\n        this.subtotal = subtotal;\n        this.discountPct = discountPct;\n    }\n\n    public double calculateFinalTotal() {\n        return subtotal * (1.0 - (discountPct / 100.0));\n    }\n\n    public void printReceipt() {\n        System.out.println(\"==========================================\");\n        System.out.println(\"🏢 WIUT CW2: KORZINKA GO CHEKI\");\n        System.out.println(\"Buyurtma ID: \" + orderId);\n        System.out.println(\"Dastlabki summa: $\" + subtotal);\n        System.out.println(\"Chegirma: \" + discountPct + \"%\");\n        System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n        System.out.println(\"==========================================\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LoyaltyCardCW2OrderApp app = new LoyaltyCardCW2OrderApp(\"CRD-9001\", 120.0, 15.0);\n        app.printReceipt();\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 5COSC018C Coursework 2 (50%) talablarida asosiy konsol ilovasi toza arxitektura (Clean Architecture), dizayn patternlar va xatosiz chek chop etish qobiliyatini talab qiladi.",
      "theoryEn": "WIUT CW2 specification mandates Clean Architecture, robust design patterns, and formatted terminal receipts.",
      "cleanCode": "public void printReceipt() {\n    System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n}",
      "breakdown": [
        "<code>printReceipt()</code>: Buyurtma ma'lumotlarini formatlangan chiroyli kvitansiyaga aylantirib beradi."
      ],
      "pitfalls": "Manfiy chegirma foizlari kiritilishiga yo'l qo'ymang.",
      "cw2Tip": "Viva savolida examiner chek formati va patternlar integratsiyasini qanday amalga oshirganingizni so'raydi!"
    }
  },
  {
    "id": 125,
    "tier": 5,
    "tierName": "5-Bosqich: To'liq WIUT CW2 Konsol Ilovasi (50%)",
    "sector": "Master • CW2",
    "title": {
      "uz": "125. WIUT Portal — CW2 Konsol Buyurtma Tizimi Arxitekturasi",
      "en": "125. WIUT Portal — Complete CW2 Console Order Architecture"
    },
    "scenario": {
      "uz": "WIUT CW2 talablari asosida WIUT Portal uchun to'liq 'StudentCW2OrderApp' sinfini tuzing: buyurtma kodi ('ORD-xxx'), tovarlar soni, hisoblangan yakuniy chegirma va formatlangan chek chop etish ('printReceipt()').",
      "en": "Construct comprehensive WIUT CW2 'StudentCW2OrderApp' with order code, items total, discount application and formatted receipt printing."
    },
    "requirements": {
      "classes": [
        "StudentCW2OrderApp"
      ],
      "methods": [
        "printReceipt"
      ]
    },
    "starterCode": "",
    "solution": "class StudentCW2OrderApp {\n    private String orderId;\n    private double subtotal;\n    private double discountPct;\n\n    public StudentCW2OrderApp(String orderId, double subtotal, double discountPct) {\n        this.orderId = orderId;\n        this.subtotal = subtotal;\n        this.discountPct = discountPct;\n    }\n\n    public double calculateFinalTotal() {\n        return subtotal * (1.0 - (discountPct / 100.0));\n    }\n\n    public void printReceipt() {\n        System.out.println(\"==========================================\");\n        System.out.println(\"🏢 WIUT CW2: WIUT PORTAL CHEKI\");\n        System.out.println(\"Buyurtma ID: \" + orderId);\n        System.out.println(\"Dastlabki summa: $\" + subtotal);\n        System.out.println(\"Chegirma: \" + discountPct + \"%\");\n        System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n        System.out.println(\"==========================================\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StudentCW2OrderApp app = new StudentCW2OrderApp(\"STU-9001\", 120.0, 15.0);\n        app.printReceipt();\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 5COSC018C Coursework 2 (50%) talablarida asosiy konsol ilovasi toza arxitektura (Clean Architecture), dizayn patternlar va xatosiz chek chop etish qobiliyatini talab qiladi.",
      "theoryEn": "WIUT CW2 specification mandates Clean Architecture, robust design patterns, and formatted terminal receipts.",
      "cleanCode": "public void printReceipt() {\n    System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n}",
      "breakdown": [
        "<code>printReceipt()</code>: Buyurtma ma'lumotlarini formatlangan chiroyli kvitansiyaga aylantirib beradi."
      ],
      "pitfalls": "Manfiy chegirma foizlari kiritilishiga yo'l qo'ymang.",
      "cw2Tip": "Viva savolida examiner chek formati va patternlar integratsiyasini qanday amalga oshirganingizni so'raydi!"
    }
  },
  {
    "id": 126,
    "tier": 5,
    "tierName": "5-Bosqich: To'liq WIUT CW2 Konsol Ilovasi (50%)",
    "sector": "Master • CW2",
    "title": {
      "uz": "126. Click Pay — CW2 Konsol Buyurtma Tizimi Arxitekturasi",
      "en": "126. Click Pay — Complete CW2 Console Order Architecture"
    },
    "scenario": {
      "uz": "WIUT CW2 talablari asosida Click Pay uchun to'liq 'PaymentTxnCW2OrderApp' sinfini tuzing: buyurtma kodi ('ORD-xxx'), tovarlar soni, hisoblangan yakuniy chegirma va formatlangan chek chop etish ('printReceipt()').",
      "en": "Construct comprehensive WIUT CW2 'PaymentTxnCW2OrderApp' with order code, items total, discount application and formatted receipt printing."
    },
    "requirements": {
      "classes": [
        "PaymentTxnCW2OrderApp"
      ],
      "methods": [
        "printReceipt"
      ]
    },
    "starterCode": "",
    "solution": "class PaymentTxnCW2OrderApp {\n    private String orderId;\n    private double subtotal;\n    private double discountPct;\n\n    public PaymentTxnCW2OrderApp(String orderId, double subtotal, double discountPct) {\n        this.orderId = orderId;\n        this.subtotal = subtotal;\n        this.discountPct = discountPct;\n    }\n\n    public double calculateFinalTotal() {\n        return subtotal * (1.0 - (discountPct / 100.0));\n    }\n\n    public void printReceipt() {\n        System.out.println(\"==========================================\");\n        System.out.println(\"🏢 WIUT CW2: CLICK PAY CHEKI\");\n        System.out.println(\"Buyurtma ID: \" + orderId);\n        System.out.println(\"Dastlabki summa: $\" + subtotal);\n        System.out.println(\"Chegirma: \" + discountPct + \"%\");\n        System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n        System.out.println(\"==========================================\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentTxnCW2OrderApp app = new PaymentTxnCW2OrderApp(\"TXN-9001\", 120.0, 15.0);\n        app.printReceipt();\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 5COSC018C Coursework 2 (50%) talablarida asosiy konsol ilovasi toza arxitektura (Clean Architecture), dizayn patternlar va xatosiz chek chop etish qobiliyatini talab qiladi.",
      "theoryEn": "WIUT CW2 specification mandates Clean Architecture, robust design patterns, and formatted terminal receipts.",
      "cleanCode": "public void printReceipt() {\n    System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n}",
      "breakdown": [
        "<code>printReceipt()</code>: Buyurtma ma'lumotlarini formatlangan chiroyli kvitansiyaga aylantirib beradi."
      ],
      "pitfalls": "Manfiy chegirma foizlari kiritilishiga yo'l qo'ymang.",
      "cw2Tip": "Viva savolida examiner chek formati va patternlar integratsiyasini qanday amalga oshirganingizni so'raydi!"
    }
  },
  {
    "id": 127,
    "tier": 5,
    "tierName": "5-Bosqich: To'liq WIUT CW2 Konsol Ilovasi (50%)",
    "sector": "Master • CW2",
    "title": {
      "uz": "127. Telegram Bot — CW2 Konsol Buyurtma Tizimi Arxitekturasi",
      "en": "127. Telegram Bot — Complete CW2 Console Order Architecture"
    },
    "scenario": {
      "uz": "WIUT CW2 talablari asosida Telegram Bot uchun to'liq 'BotMessageCW2OrderApp' sinfini tuzing: buyurtma kodi ('ORD-xxx'), tovarlar soni, hisoblangan yakuniy chegirma va formatlangan chek chop etish ('printReceipt()').",
      "en": "Construct comprehensive WIUT CW2 'BotMessageCW2OrderApp' with order code, items total, discount application and formatted receipt printing."
    },
    "requirements": {
      "classes": [
        "BotMessageCW2OrderApp"
      ],
      "methods": [
        "printReceipt"
      ]
    },
    "starterCode": "",
    "solution": "class BotMessageCW2OrderApp {\n    private String orderId;\n    private double subtotal;\n    private double discountPct;\n\n    public BotMessageCW2OrderApp(String orderId, double subtotal, double discountPct) {\n        this.orderId = orderId;\n        this.subtotal = subtotal;\n        this.discountPct = discountPct;\n    }\n\n    public double calculateFinalTotal() {\n        return subtotal * (1.0 - (discountPct / 100.0));\n    }\n\n    public void printReceipt() {\n        System.out.println(\"==========================================\");\n        System.out.println(\"🏢 WIUT CW2: TELEGRAM BOT CHEKI\");\n        System.out.println(\"Buyurtma ID: \" + orderId);\n        System.out.println(\"Dastlabki summa: $\" + subtotal);\n        System.out.println(\"Chegirma: \" + discountPct + \"%\");\n        System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n        System.out.println(\"==========================================\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BotMessageCW2OrderApp app = new BotMessageCW2OrderApp(\"MSG-9001\", 120.0, 15.0);\n        app.printReceipt();\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 5COSC018C Coursework 2 (50%) talablarida asosiy konsol ilovasi toza arxitektura (Clean Architecture), dizayn patternlar va xatosiz chek chop etish qobiliyatini talab qiladi.",
      "theoryEn": "WIUT CW2 specification mandates Clean Architecture, robust design patterns, and formatted terminal receipts.",
      "cleanCode": "public void printReceipt() {\n    System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n}",
      "breakdown": [
        "<code>printReceipt()</code>: Buyurtma ma'lumotlarini formatlangan chiroyli kvitansiyaga aylantirib beradi."
      ],
      "pitfalls": "Manfiy chegirma foizlari kiritilishiga yo'l qo'ymang.",
      "cw2Tip": "Viva savolida examiner chek formati va patternlar integratsiyasini qanday amalga oshirganingizni so'raydi!"
    }
  },
  {
    "id": 128,
    "tier": 5,
    "tierName": "5-Bosqich: To'liq WIUT CW2 Konsol Ilovasi (50%)",
    "sector": "Master • CW2",
    "title": {
      "uz": "128. UzAirways — CW2 Konsol Buyurtma Tizimi Arxitekturasi",
      "en": "128. UzAirways — Complete CW2 Console Order Architecture"
    },
    "scenario": {
      "uz": "WIUT CW2 talablari asosida UzAirways uchun to'liq 'FlightTicketCW2OrderApp' sinfini tuzing: buyurtma kodi ('ORD-xxx'), tovarlar soni, hisoblangan yakuniy chegirma va formatlangan chek chop etish ('printReceipt()').",
      "en": "Construct comprehensive WIUT CW2 'FlightTicketCW2OrderApp' with order code, items total, discount application and formatted receipt printing."
    },
    "requirements": {
      "classes": [
        "FlightTicketCW2OrderApp"
      ],
      "methods": [
        "printReceipt"
      ]
    },
    "starterCode": "",
    "solution": "class FlightTicketCW2OrderApp {\n    private String orderId;\n    private double subtotal;\n    private double discountPct;\n\n    public FlightTicketCW2OrderApp(String orderId, double subtotal, double discountPct) {\n        this.orderId = orderId;\n        this.subtotal = subtotal;\n        this.discountPct = discountPct;\n    }\n\n    public double calculateFinalTotal() {\n        return subtotal * (1.0 - (discountPct / 100.0));\n    }\n\n    public void printReceipt() {\n        System.out.println(\"==========================================\");\n        System.out.println(\"🏢 WIUT CW2: UZAIRWAYS CHEKI\");\n        System.out.println(\"Buyurtma ID: \" + orderId);\n        System.out.println(\"Dastlabki summa: $\" + subtotal);\n        System.out.println(\"Chegirma: \" + discountPct + \"%\");\n        System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n        System.out.println(\"==========================================\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FlightTicketCW2OrderApp app = new FlightTicketCW2OrderApp(\"HY-9001\", 120.0, 15.0);\n        app.printReceipt();\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 5COSC018C Coursework 2 (50%) talablarida asosiy konsol ilovasi toza arxitektura (Clean Architecture), dizayn patternlar va xatosiz chek chop etish qobiliyatini talab qiladi.",
      "theoryEn": "WIUT CW2 specification mandates Clean Architecture, robust design patterns, and formatted terminal receipts.",
      "cleanCode": "public void printReceipt() {\n    System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n}",
      "breakdown": [
        "<code>printReceipt()</code>: Buyurtma ma'lumotlarini formatlangan chiroyli kvitansiyaga aylantirib beradi."
      ],
      "pitfalls": "Manfiy chegirma foizlari kiritilishiga yo'l qo'ymang.",
      "cw2Tip": "Viva savolida examiner chek formati va patternlar integratsiyasini qanday amalga oshirganingizni so'raydi!"
    }
  },
  {
    "id": 129,
    "tier": 5,
    "tierName": "5-Bosqich: To'liq WIUT CW2 Konsol Ilovasi (50%)",
    "sector": "Master • CW2",
    "title": {
      "uz": "129. IT Park Academy — CW2 Konsol Buyurtma Tizimi Arxitekturasi",
      "en": "129. IT Park Academy — Complete CW2 Console Order Architecture"
    },
    "scenario": {
      "uz": "WIUT CW2 talablari asosida IT Park Academy uchun to'liq 'BootcampCourseCW2OrderApp' sinfini tuzing: buyurtma kodi ('ORD-xxx'), tovarlar soni, hisoblangan yakuniy chegirma va formatlangan chek chop etish ('printReceipt()').",
      "en": "Construct comprehensive WIUT CW2 'BootcampCourseCW2OrderApp' with order code, items total, discount application and formatted receipt printing."
    },
    "requirements": {
      "classes": [
        "BootcampCourseCW2OrderApp"
      ],
      "methods": [
        "printReceipt"
      ]
    },
    "starterCode": "",
    "solution": "class BootcampCourseCW2OrderApp {\n    private String orderId;\n    private double subtotal;\n    private double discountPct;\n\n    public BootcampCourseCW2OrderApp(String orderId, double subtotal, double discountPct) {\n        this.orderId = orderId;\n        this.subtotal = subtotal;\n        this.discountPct = discountPct;\n    }\n\n    public double calculateFinalTotal() {\n        return subtotal * (1.0 - (discountPct / 100.0));\n    }\n\n    public void printReceipt() {\n        System.out.println(\"==========================================\");\n        System.out.println(\"🏢 WIUT CW2: IT PARK ACADEMY CHEKI\");\n        System.out.println(\"Buyurtma ID: \" + orderId);\n        System.out.println(\"Dastlabki summa: $\" + subtotal);\n        System.out.println(\"Chegirma: \" + discountPct + \"%\");\n        System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n        System.out.println(\"==========================================\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BootcampCourseCW2OrderApp app = new BootcampCourseCW2OrderApp(\"ITP-9001\", 120.0, 15.0);\n        app.printReceipt();\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 5COSC018C Coursework 2 (50%) talablarida asosiy konsol ilovasi toza arxitektura (Clean Architecture), dizayn patternlar va xatosiz chek chop etish qobiliyatini talab qiladi.",
      "theoryEn": "WIUT CW2 specification mandates Clean Architecture, robust design patterns, and formatted terminal receipts.",
      "cleanCode": "public void printReceipt() {\n    System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n}",
      "breakdown": [
        "<code>printReceipt()</code>: Buyurtma ma'lumotlarini formatlangan chiroyli kvitansiyaga aylantirib beradi."
      ],
      "pitfalls": "Manfiy chegirma foizlari kiritilishiga yo'l qo'ymang.",
      "cw2Tip": "Viva savolida examiner chek formati va patternlar integratsiyasini qanday amalga oshirganingizni so'raydi!"
    }
  },
  {
    "id": 130,
    "tier": 5,
    "tierName": "5-Bosqich: To'liq WIUT CW2 Konsol Ilovasi (50%)",
    "sector": "Master • CW2",
    "title": {
      "uz": "130. Anorbank — CW2 Konsol Buyurtma Tizimi Arxitekturasi",
      "en": "130. Anorbank — Complete CW2 Console Order Architecture"
    },
    "scenario": {
      "uz": "WIUT CW2 talablari asosida Anorbank uchun to'liq 'DebitCardCW2OrderApp' sinfini tuzing: buyurtma kodi ('ORD-xxx'), tovarlar soni, hisoblangan yakuniy chegirma va formatlangan chek chop etish ('printReceipt()').",
      "en": "Construct comprehensive WIUT CW2 'DebitCardCW2OrderApp' with order code, items total, discount application and formatted receipt printing."
    },
    "requirements": {
      "classes": [
        "DebitCardCW2OrderApp"
      ],
      "methods": [
        "printReceipt"
      ]
    },
    "starterCode": "",
    "solution": "class DebitCardCW2OrderApp {\n    private String orderId;\n    private double subtotal;\n    private double discountPct;\n\n    public DebitCardCW2OrderApp(String orderId, double subtotal, double discountPct) {\n        this.orderId = orderId;\n        this.subtotal = subtotal;\n        this.discountPct = discountPct;\n    }\n\n    public double calculateFinalTotal() {\n        return subtotal * (1.0 - (discountPct / 100.0));\n    }\n\n    public void printReceipt() {\n        System.out.println(\"==========================================\");\n        System.out.println(\"🏢 WIUT CW2: ANORBANK CHEKI\");\n        System.out.println(\"Buyurtma ID: \" + orderId);\n        System.out.println(\"Dastlabki summa: $\" + subtotal);\n        System.out.println(\"Chegirma: \" + discountPct + \"%\");\n        System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n        System.out.println(\"==========================================\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DebitCardCW2OrderApp app = new DebitCardCW2OrderApp(\"ANR-9001\", 120.0, 15.0);\n        app.printReceipt();\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 5COSC018C Coursework 2 (50%) talablarida asosiy konsol ilovasi toza arxitektura (Clean Architecture), dizayn patternlar va xatosiz chek chop etish qobiliyatini talab qiladi.",
      "theoryEn": "WIUT CW2 specification mandates Clean Architecture, robust design patterns, and formatted terminal receipts.",
      "cleanCode": "public void printReceipt() {\n    System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n}",
      "breakdown": [
        "<code>printReceipt()</code>: Buyurtma ma'lumotlarini formatlangan chiroyli kvitansiyaga aylantirib beradi."
      ],
      "pitfalls": "Manfiy chegirma foizlari kiritilishiga yo'l qo'ymang.",
      "cw2Tip": "Viva savolida examiner chek formati va patternlar integratsiyasini qanday amalga oshirganingizni so'raydi!"
    }
  },
  {
    "id": 131,
    "tier": 5,
    "tierName": "5-Bosqich: To'liq WIUT CW2 Konsol Ilovasi (50%)",
    "sector": "Master • CW2",
    "title": {
      "uz": "131. Oson Apteka — CW2 Konsol Buyurtma Tizimi Arxitekturasi",
      "en": "131. Oson Apteka — Complete CW2 Console Order Architecture"
    },
    "scenario": {
      "uz": "WIUT CW2 talablari asosida Oson Apteka uchun to'liq 'MedicineCW2OrderApp' sinfini tuzing: buyurtma kodi ('ORD-xxx'), tovarlar soni, hisoblangan yakuniy chegirma va formatlangan chek chop etish ('printReceipt()').",
      "en": "Construct comprehensive WIUT CW2 'MedicineCW2OrderApp' with order code, items total, discount application and formatted receipt printing."
    },
    "requirements": {
      "classes": [
        "MedicineCW2OrderApp"
      ],
      "methods": [
        "printReceipt"
      ]
    },
    "starterCode": "",
    "solution": "class MedicineCW2OrderApp {\n    private String orderId;\n    private double subtotal;\n    private double discountPct;\n\n    public MedicineCW2OrderApp(String orderId, double subtotal, double discountPct) {\n        this.orderId = orderId;\n        this.subtotal = subtotal;\n        this.discountPct = discountPct;\n    }\n\n    public double calculateFinalTotal() {\n        return subtotal * (1.0 - (discountPct / 100.0));\n    }\n\n    public void printReceipt() {\n        System.out.println(\"==========================================\");\n        System.out.println(\"🏢 WIUT CW2: OSON APTEKA CHEKI\");\n        System.out.println(\"Buyurtma ID: \" + orderId);\n        System.out.println(\"Dastlabki summa: $\" + subtotal);\n        System.out.println(\"Chegirma: \" + discountPct + \"%\");\n        System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n        System.out.println(\"==========================================\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MedicineCW2OrderApp app = new MedicineCW2OrderApp(\"MED-9001\", 120.0, 15.0);\n        app.printReceipt();\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 5COSC018C Coursework 2 (50%) talablarida asosiy konsol ilovasi toza arxitektura (Clean Architecture), dizayn patternlar va xatosiz chek chop etish qobiliyatini talab qiladi.",
      "theoryEn": "WIUT CW2 specification mandates Clean Architecture, robust design patterns, and formatted terminal receipts.",
      "cleanCode": "public void printReceipt() {\n    System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n}",
      "breakdown": [
        "<code>printReceipt()</code>: Buyurtma ma'lumotlarini formatlangan chiroyli kvitansiyaga aylantirib beradi."
      ],
      "pitfalls": "Manfiy chegirma foizlari kiritilishiga yo'l qo'ymang.",
      "cw2Tip": "Viva savolida examiner chek formati va patternlar integratsiyasini qanday amalga oshirganingizni so'raydi!"
    }
  },
  {
    "id": 132,
    "tier": 5,
    "tierName": "5-Bosqich: To'liq WIUT CW2 Konsol Ilovasi (50%)",
    "sector": "Master • CW2",
    "title": {
      "uz": "132. Evos FastFood — CW2 Konsol Buyurtma Tizimi Arxitekturasi",
      "en": "132. Evos FastFood — Complete CW2 Console Order Architecture"
    },
    "scenario": {
      "uz": "WIUT CW2 talablari asosida Evos FastFood uchun to'liq 'FoodOrderCW2OrderApp' sinfini tuzing: buyurtma kodi ('ORD-xxx'), tovarlar soni, hisoblangan yakuniy chegirma va formatlangan chek chop etish ('printReceipt()').",
      "en": "Construct comprehensive WIUT CW2 'FoodOrderCW2OrderApp' with order code, items total, discount application and formatted receipt printing."
    },
    "requirements": {
      "classes": [
        "FoodOrderCW2OrderApp"
      ],
      "methods": [
        "printReceipt"
      ]
    },
    "starterCode": "",
    "solution": "class FoodOrderCW2OrderApp {\n    private String orderId;\n    private double subtotal;\n    private double discountPct;\n\n    public FoodOrderCW2OrderApp(String orderId, double subtotal, double discountPct) {\n        this.orderId = orderId;\n        this.subtotal = subtotal;\n        this.discountPct = discountPct;\n    }\n\n    public double calculateFinalTotal() {\n        return subtotal * (1.0 - (discountPct / 100.0));\n    }\n\n    public void printReceipt() {\n        System.out.println(\"==========================================\");\n        System.out.println(\"🏢 WIUT CW2: EVOS FASTFOOD CHEKI\");\n        System.out.println(\"Buyurtma ID: \" + orderId);\n        System.out.println(\"Dastlabki summa: $\" + subtotal);\n        System.out.println(\"Chegirma: \" + discountPct + \"%\");\n        System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n        System.out.println(\"==========================================\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FoodOrderCW2OrderApp app = new FoodOrderCW2OrderApp(\"ORD-9001\", 120.0, 15.0);\n        app.printReceipt();\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 5COSC018C Coursework 2 (50%) talablarida asosiy konsol ilovasi toza arxitektura (Clean Architecture), dizayn patternlar va xatosiz chek chop etish qobiliyatini talab qiladi.",
      "theoryEn": "WIUT CW2 specification mandates Clean Architecture, robust design patterns, and formatted terminal receipts.",
      "cleanCode": "public void printReceipt() {\n    System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n}",
      "breakdown": [
        "<code>printReceipt()</code>: Buyurtma ma'lumotlarini formatlangan chiroyli kvitansiyaga aylantirib beradi."
      ],
      "pitfalls": "Manfiy chegirma foizlari kiritilishiga yo'l qo'ymang.",
      "cw2Tip": "Viva savolida examiner chek formati va patternlar integratsiyasini qanday amalga oshirganingizni so'raydi!"
    }
  },
  {
    "id": 133,
    "tier": 5,
    "tierName": "5-Bosqich: To'liq WIUT CW2 Konsol Ilovasi (50%)",
    "sector": "Master • CW2",
    "title": {
      "uz": "133. Bellissimo Pizza — CW2 Konsol Buyurtma Tizimi Arxitekturasi",
      "en": "133. Bellissimo Pizza — Complete CW2 Console Order Architecture"
    },
    "scenario": {
      "uz": "WIUT CW2 talablari asosida Bellissimo Pizza uchun to'liq 'PizzaOrderCW2OrderApp' sinfini tuzing: buyurtma kodi ('ORD-xxx'), tovarlar soni, hisoblangan yakuniy chegirma va formatlangan chek chop etish ('printReceipt()').",
      "en": "Construct comprehensive WIUT CW2 'PizzaOrderCW2OrderApp' with order code, items total, discount application and formatted receipt printing."
    },
    "requirements": {
      "classes": [
        "PizzaOrderCW2OrderApp"
      ],
      "methods": [
        "printReceipt"
      ]
    },
    "starterCode": "",
    "solution": "class PizzaOrderCW2OrderApp {\n    private String orderId;\n    private double subtotal;\n    private double discountPct;\n\n    public PizzaOrderCW2OrderApp(String orderId, double subtotal, double discountPct) {\n        this.orderId = orderId;\n        this.subtotal = subtotal;\n        this.discountPct = discountPct;\n    }\n\n    public double calculateFinalTotal() {\n        return subtotal * (1.0 - (discountPct / 100.0));\n    }\n\n    public void printReceipt() {\n        System.out.println(\"==========================================\");\n        System.out.println(\"🏢 WIUT CW2: BELLISSIMO PIZZA CHEKI\");\n        System.out.println(\"Buyurtma ID: \" + orderId);\n        System.out.println(\"Dastlabki summa: $\" + subtotal);\n        System.out.println(\"Chegirma: \" + discountPct + \"%\");\n        System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n        System.out.println(\"==========================================\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PizzaOrderCW2OrderApp app = new PizzaOrderCW2OrderApp(\"PIZ-9001\", 120.0, 15.0);\n        app.printReceipt();\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 5COSC018C Coursework 2 (50%) talablarida asosiy konsol ilovasi toza arxitektura (Clean Architecture), dizayn patternlar va xatosiz chek chop etish qobiliyatini talab qiladi.",
      "theoryEn": "WIUT CW2 specification mandates Clean Architecture, robust design patterns, and formatted terminal receipts.",
      "cleanCode": "public void printReceipt() {\n    System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n}",
      "breakdown": [
        "<code>printReceipt()</code>: Buyurtma ma'lumotlarini formatlangan chiroyli kvitansiyaga aylantirib beradi."
      ],
      "pitfalls": "Manfiy chegirma foizlari kiritilishiga yo'l qo'ymang.",
      "cw2Tip": "Viva savolida examiner chek formati va patternlar integratsiyasini qanday amalga oshirganingizni so'raydi!"
    }
  },
  {
    "id": 134,
    "tier": 5,
    "tierName": "5-Bosqich: To'liq WIUT CW2 Konsol Ilovasi (50%)",
    "sector": "Master • CW2",
    "title": {
      "uz": "134. Milliy TV — CW2 Konsol Buyurtma Tizimi Arxitekturasi",
      "en": "134. Milliy TV — Complete CW2 Console Order Architecture"
    },
    "scenario": {
      "uz": "WIUT CW2 talablari asosida Milliy TV uchun to'liq 'BroadcastShowCW2OrderApp' sinfini tuzing: buyurtma kodi ('ORD-xxx'), tovarlar soni, hisoblangan yakuniy chegirma va formatlangan chek chop etish ('printReceipt()').",
      "en": "Construct comprehensive WIUT CW2 'BroadcastShowCW2OrderApp' with order code, items total, discount application and formatted receipt printing."
    },
    "requirements": {
      "classes": [
        "BroadcastShowCW2OrderApp"
      ],
      "methods": [
        "printReceipt"
      ]
    },
    "starterCode": "",
    "solution": "class BroadcastShowCW2OrderApp {\n    private String orderId;\n    private double subtotal;\n    private double discountPct;\n\n    public BroadcastShowCW2OrderApp(String orderId, double subtotal, double discountPct) {\n        this.orderId = orderId;\n        this.subtotal = subtotal;\n        this.discountPct = discountPct;\n    }\n\n    public double calculateFinalTotal() {\n        return subtotal * (1.0 - (discountPct / 100.0));\n    }\n\n    public void printReceipt() {\n        System.out.println(\"==========================================\");\n        System.out.println(\"🏢 WIUT CW2: MILLIY TV CHEKI\");\n        System.out.println(\"Buyurtma ID: \" + orderId);\n        System.out.println(\"Dastlabki summa: $\" + subtotal);\n        System.out.println(\"Chegirma: \" + discountPct + \"%\");\n        System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n        System.out.println(\"==========================================\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BroadcastShowCW2OrderApp app = new BroadcastShowCW2OrderApp(\"MTV-9001\", 120.0, 15.0);\n        app.printReceipt();\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 5COSC018C Coursework 2 (50%) talablarida asosiy konsol ilovasi toza arxitektura (Clean Architecture), dizayn patternlar va xatosiz chek chop etish qobiliyatini talab qiladi.",
      "theoryEn": "WIUT CW2 specification mandates Clean Architecture, robust design patterns, and formatted terminal receipts.",
      "cleanCode": "public void printReceipt() {\n    System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n}",
      "breakdown": [
        "<code>printReceipt()</code>: Buyurtma ma'lumotlarini formatlangan chiroyli kvitansiyaga aylantirib beradi."
      ],
      "pitfalls": "Manfiy chegirma foizlari kiritilishiga yo'l qo'ymang.",
      "cw2Tip": "Viva savolida examiner chek formati va patternlar integratsiyasini qanday amalga oshirganingizni so'raydi!"
    }
  },
  {
    "id": 135,
    "tier": 5,
    "tierName": "5-Bosqich: To'liq WIUT CW2 Konsol Ilovasi (50%)",
    "sector": "Master • CW2",
    "title": {
      "uz": "135. Spotify Sound — CW2 Konsol Buyurtma Tizimi Arxitekturasi",
      "en": "135. Spotify Sound — Complete CW2 Console Order Architecture"
    },
    "scenario": {
      "uz": "WIUT CW2 talablari asosida Spotify Sound uchun to'liq 'AudioTrackCW2OrderApp' sinfini tuzing: buyurtma kodi ('ORD-xxx'), tovarlar soni, hisoblangan yakuniy chegirma va formatlangan chek chop etish ('printReceipt()').",
      "en": "Construct comprehensive WIUT CW2 'AudioTrackCW2OrderApp' with order code, items total, discount application and formatted receipt printing."
    },
    "requirements": {
      "classes": [
        "AudioTrackCW2OrderApp"
      ],
      "methods": [
        "printReceipt"
      ]
    },
    "starterCode": "",
    "solution": "class AudioTrackCW2OrderApp {\n    private String orderId;\n    private double subtotal;\n    private double discountPct;\n\n    public AudioTrackCW2OrderApp(String orderId, double subtotal, double discountPct) {\n        this.orderId = orderId;\n        this.subtotal = subtotal;\n        this.discountPct = discountPct;\n    }\n\n    public double calculateFinalTotal() {\n        return subtotal * (1.0 - (discountPct / 100.0));\n    }\n\n    public void printReceipt() {\n        System.out.println(\"==========================================\");\n        System.out.println(\"🏢 WIUT CW2: SPOTIFY SOUND CHEKI\");\n        System.out.println(\"Buyurtma ID: \" + orderId);\n        System.out.println(\"Dastlabki summa: $\" + subtotal);\n        System.out.println(\"Chegirma: \" + discountPct + \"%\");\n        System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n        System.out.println(\"==========================================\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AudioTrackCW2OrderApp app = new AudioTrackCW2OrderApp(\"TRK-9001\", 120.0, 15.0);\n        app.printReceipt();\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 5COSC018C Coursework 2 (50%) talablarida asosiy konsol ilovasi toza arxitektura (Clean Architecture), dizayn patternlar va xatosiz chek chop etish qobiliyatini talab qiladi.",
      "theoryEn": "WIUT CW2 specification mandates Clean Architecture, robust design patterns, and formatted terminal receipts.",
      "cleanCode": "public void printReceipt() {\n    System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n}",
      "breakdown": [
        "<code>printReceipt()</code>: Buyurtma ma'lumotlarini formatlangan chiroyli kvitansiyaga aylantirib beradi."
      ],
      "pitfalls": "Manfiy chegirma foizlari kiritilishiga yo'l qo'ymang.",
      "cw2Tip": "Viva savolida examiner chek formati va patternlar integratsiyasini qanday amalga oshirganingizni so'raydi!"
    }
  },
  {
    "id": 136,
    "tier": 5,
    "tierName": "5-Bosqich: To'liq WIUT CW2 Konsol Ilovasi (50%)",
    "sector": "Master • CW2",
    "title": {
      "uz": "136. Smart Thermostat — CW2 Konsol Buyurtma Tizimi Arxitekturasi",
      "en": "136. Smart Thermostat — Complete CW2 Console Order Architecture"
    },
    "scenario": {
      "uz": "WIUT CW2 talablari asosida Smart Thermostat uchun to'liq 'ThermostatCW2OrderApp' sinfini tuzing: buyurtma kodi ('ORD-xxx'), tovarlar soni, hisoblangan yakuniy chegirma va formatlangan chek chop etish ('printReceipt()').",
      "en": "Construct comprehensive WIUT CW2 'ThermostatCW2OrderApp' with order code, items total, discount application and formatted receipt printing."
    },
    "requirements": {
      "classes": [
        "ThermostatCW2OrderApp"
      ],
      "methods": [
        "printReceipt"
      ]
    },
    "starterCode": "",
    "solution": "class ThermostatCW2OrderApp {\n    private String orderId;\n    private double subtotal;\n    private double discountPct;\n\n    public ThermostatCW2OrderApp(String orderId, double subtotal, double discountPct) {\n        this.orderId = orderId;\n        this.subtotal = subtotal;\n        this.discountPct = discountPct;\n    }\n\n    public double calculateFinalTotal() {\n        return subtotal * (1.0 - (discountPct / 100.0));\n    }\n\n    public void printReceipt() {\n        System.out.println(\"==========================================\");\n        System.out.println(\"🏢 WIUT CW2: SMART THERMOSTAT CHEKI\");\n        System.out.println(\"Buyurtma ID: \" + orderId);\n        System.out.println(\"Dastlabki summa: $\" + subtotal);\n        System.out.println(\"Chegirma: \" + discountPct + \"%\");\n        System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n        System.out.println(\"==========================================\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ThermostatCW2OrderApp app = new ThermostatCW2OrderApp(\"THM-9001\", 120.0, 15.0);\n        app.printReceipt();\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 5COSC018C Coursework 2 (50%) talablarida asosiy konsol ilovasi toza arxitektura (Clean Architecture), dizayn patternlar va xatosiz chek chop etish qobiliyatini talab qiladi.",
      "theoryEn": "WIUT CW2 specification mandates Clean Architecture, robust design patterns, and formatted terminal receipts.",
      "cleanCode": "public void printReceipt() {\n    System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n}",
      "breakdown": [
        "<code>printReceipt()</code>: Buyurtma ma'lumotlarini formatlangan chiroyli kvitansiyaga aylantirib beradi."
      ],
      "pitfalls": "Manfiy chegirma foizlari kiritilishiga yo'l qo'ymang.",
      "cw2Tip": "Viva savolida examiner chek formati va patternlar integratsiyasini qanday amalga oshirganingizni so'raydi!"
    }
  },
  {
    "id": 137,
    "tier": 5,
    "tierName": "5-Bosqich: To'liq WIUT CW2 Konsol Ilovasi (50%)",
    "sector": "Master • CW2",
    "title": {
      "uz": "137. Drone Delivery — CW2 Konsol Buyurtma Tizimi Arxitekturasi",
      "en": "137. Drone Delivery — Complete CW2 Console Order Architecture"
    },
    "scenario": {
      "uz": "WIUT CW2 talablari asosida Drone Delivery uchun to'liq 'DeliveryDroneCW2OrderApp' sinfini tuzing: buyurtma kodi ('ORD-xxx'), tovarlar soni, hisoblangan yakuniy chegirma va formatlangan chek chop etish ('printReceipt()').",
      "en": "Construct comprehensive WIUT CW2 'DeliveryDroneCW2OrderApp' with order code, items total, discount application and formatted receipt printing."
    },
    "requirements": {
      "classes": [
        "DeliveryDroneCW2OrderApp"
      ],
      "methods": [
        "printReceipt"
      ]
    },
    "starterCode": "",
    "solution": "class DeliveryDroneCW2OrderApp {\n    private String orderId;\n    private double subtotal;\n    private double discountPct;\n\n    public DeliveryDroneCW2OrderApp(String orderId, double subtotal, double discountPct) {\n        this.orderId = orderId;\n        this.subtotal = subtotal;\n        this.discountPct = discountPct;\n    }\n\n    public double calculateFinalTotal() {\n        return subtotal * (1.0 - (discountPct / 100.0));\n    }\n\n    public void printReceipt() {\n        System.out.println(\"==========================================\");\n        System.out.println(\"🏢 WIUT CW2: DRONE DELIVERY CHEKI\");\n        System.out.println(\"Buyurtma ID: \" + orderId);\n        System.out.println(\"Dastlabki summa: $\" + subtotal);\n        System.out.println(\"Chegirma: \" + discountPct + \"%\");\n        System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n        System.out.println(\"==========================================\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DeliveryDroneCW2OrderApp app = new DeliveryDroneCW2OrderApp(\"DRN-9001\", 120.0, 15.0);\n        app.printReceipt();\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 5COSC018C Coursework 2 (50%) talablarida asosiy konsol ilovasi toza arxitektura (Clean Architecture), dizayn patternlar va xatosiz chek chop etish qobiliyatini talab qiladi.",
      "theoryEn": "WIUT CW2 specification mandates Clean Architecture, robust design patterns, and formatted terminal receipts.",
      "cleanCode": "public void printReceipt() {\n    System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n}",
      "breakdown": [
        "<code>printReceipt()</code>: Buyurtma ma'lumotlarini formatlangan chiroyli kvitansiyaga aylantirib beradi."
      ],
      "pitfalls": "Manfiy chegirma foizlari kiritilishiga yo'l qo'ymang.",
      "cw2Tip": "Viva savolida examiner chek formati va patternlar integratsiyasini qanday amalga oshirganingizni so'raydi!"
    }
  },
  {
    "id": 138,
    "tier": 5,
    "tierName": "5-Bosqich: To'liq WIUT CW2 Konsol Ilovasi (50%)",
    "sector": "Master • CW2",
    "title": {
      "uz": "138. Smart Warehouse — CW2 Konsol Buyurtma Tizimi Arxitekturasi",
      "en": "138. Smart Warehouse — Complete CW2 Console Order Architecture"
    },
    "scenario": {
      "uz": "WIUT CW2 talablari asosida Smart Warehouse uchun to'liq 'StorageBayCW2OrderApp' sinfini tuzing: buyurtma kodi ('ORD-xxx'), tovarlar soni, hisoblangan yakuniy chegirma va formatlangan chek chop etish ('printReceipt()').",
      "en": "Construct comprehensive WIUT CW2 'StorageBayCW2OrderApp' with order code, items total, discount application and formatted receipt printing."
    },
    "requirements": {
      "classes": [
        "StorageBayCW2OrderApp"
      ],
      "methods": [
        "printReceipt"
      ]
    },
    "starterCode": "",
    "solution": "class StorageBayCW2OrderApp {\n    private String orderId;\n    private double subtotal;\n    private double discountPct;\n\n    public StorageBayCW2OrderApp(String orderId, double subtotal, double discountPct) {\n        this.orderId = orderId;\n        this.subtotal = subtotal;\n        this.discountPct = discountPct;\n    }\n\n    public double calculateFinalTotal() {\n        return subtotal * (1.0 - (discountPct / 100.0));\n    }\n\n    public void printReceipt() {\n        System.out.println(\"==========================================\");\n        System.out.println(\"🏢 WIUT CW2: SMART WAREHOUSE CHEKI\");\n        System.out.println(\"Buyurtma ID: \" + orderId);\n        System.out.println(\"Dastlabki summa: $\" + subtotal);\n        System.out.println(\"Chegirma: \" + discountPct + \"%\");\n        System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n        System.out.println(\"==========================================\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StorageBayCW2OrderApp app = new StorageBayCW2OrderApp(\"BAY-9001\", 120.0, 15.0);\n        app.printReceipt();\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 5COSC018C Coursework 2 (50%) talablarida asosiy konsol ilovasi toza arxitektura (Clean Architecture), dizayn patternlar va xatosiz chek chop etish qobiliyatini talab qiladi.",
      "theoryEn": "WIUT CW2 specification mandates Clean Architecture, robust design patterns, and formatted terminal receipts.",
      "cleanCode": "public void printReceipt() {\n    System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n}",
      "breakdown": [
        "<code>printReceipt()</code>: Buyurtma ma'lumotlarini formatlangan chiroyli kvitansiyaga aylantirib beradi."
      ],
      "pitfalls": "Manfiy chegirma foizlari kiritilishiga yo'l qo'ymang.",
      "cw2Tip": "Viva savolida examiner chek formati va patternlar integratsiyasini qanday amalga oshirganingizni so'raydi!"
    }
  },
  {
    "id": 139,
    "tier": 5,
    "tierName": "5-Bosqich: To'liq WIUT CW2 Konsol Ilovasi (50%)",
    "sector": "Master • CW2",
    "title": {
      "uz": "139. Crypto Wallet — CW2 Konsol Buyurtma Tizimi Arxitekturasi",
      "en": "139. Crypto Wallet — Complete CW2 Console Order Architecture"
    },
    "scenario": {
      "uz": "WIUT CW2 talablari asosida Crypto Wallet uchun to'liq 'CryptoAssetCW2OrderApp' sinfini tuzing: buyurtma kodi ('ORD-xxx'), tovarlar soni, hisoblangan yakuniy chegirma va formatlangan chek chop etish ('printReceipt()').",
      "en": "Construct comprehensive WIUT CW2 'CryptoAssetCW2OrderApp' with order code, items total, discount application and formatted receipt printing."
    },
    "requirements": {
      "classes": [
        "CryptoAssetCW2OrderApp"
      ],
      "methods": [
        "printReceipt"
      ]
    },
    "starterCode": "",
    "solution": "class CryptoAssetCW2OrderApp {\n    private String orderId;\n    private double subtotal;\n    private double discountPct;\n\n    public CryptoAssetCW2OrderApp(String orderId, double subtotal, double discountPct) {\n        this.orderId = orderId;\n        this.subtotal = subtotal;\n        this.discountPct = discountPct;\n    }\n\n    public double calculateFinalTotal() {\n        return subtotal * (1.0 - (discountPct / 100.0));\n    }\n\n    public void printReceipt() {\n        System.out.println(\"==========================================\");\n        System.out.println(\"🏢 WIUT CW2: CRYPTO WALLET CHEKI\");\n        System.out.println(\"Buyurtma ID: \" + orderId);\n        System.out.println(\"Dastlabki summa: $\" + subtotal);\n        System.out.println(\"Chegirma: \" + discountPct + \"%\");\n        System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n        System.out.println(\"==========================================\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CryptoAssetCW2OrderApp app = new CryptoAssetCW2OrderApp(\"CPT-9001\", 120.0, 15.0);\n        app.printReceipt();\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 5COSC018C Coursework 2 (50%) talablarida asosiy konsol ilovasi toza arxitektura (Clean Architecture), dizayn patternlar va xatosiz chek chop etish qobiliyatini talab qiladi.",
      "theoryEn": "WIUT CW2 specification mandates Clean Architecture, robust design patterns, and formatted terminal receipts.",
      "cleanCode": "public void printReceipt() {\n    System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n}",
      "breakdown": [
        "<code>printReceipt()</code>: Buyurtma ma'lumotlarini formatlangan chiroyli kvitansiyaga aylantirib beradi."
      ],
      "pitfalls": "Manfiy chegirma foizlari kiritilishiga yo'l qo'ymang.",
      "cw2Tip": "Viva savolida examiner chek formati va patternlar integratsiyasini qanday amalga oshirganingizni so'raydi!"
    }
  },
  {
    "id": 140,
    "tier": 5,
    "tierName": "5-Bosqich: To'liq WIUT CW2 Konsol Ilovasi (50%)",
    "sector": "Master • CW2",
    "title": {
      "uz": "140. National Library — CW2 Konsol Buyurtma Tizimi Arxitekturasi",
      "en": "140. National Library — Complete CW2 Console Order Architecture"
    },
    "scenario": {
      "uz": "WIUT CW2 talablari asosida National Library uchun to'liq 'CatalogBookCW2OrderApp' sinfini tuzing: buyurtma kodi ('ORD-xxx'), tovarlar soni, hisoblangan yakuniy chegirma va formatlangan chek chop etish ('printReceipt()').",
      "en": "Construct comprehensive WIUT CW2 'CatalogBookCW2OrderApp' with order code, items total, discount application and formatted receipt printing."
    },
    "requirements": {
      "classes": [
        "CatalogBookCW2OrderApp"
      ],
      "methods": [
        "printReceipt"
      ]
    },
    "starterCode": "",
    "solution": "class CatalogBookCW2OrderApp {\n    private String orderId;\n    private double subtotal;\n    private double discountPct;\n\n    public CatalogBookCW2OrderApp(String orderId, double subtotal, double discountPct) {\n        this.orderId = orderId;\n        this.subtotal = subtotal;\n        this.discountPct = discountPct;\n    }\n\n    public double calculateFinalTotal() {\n        return subtotal * (1.0 - (discountPct / 100.0));\n    }\n\n    public void printReceipt() {\n        System.out.println(\"==========================================\");\n        System.out.println(\"🏢 WIUT CW2: NATIONAL LIBRARY CHEKI\");\n        System.out.println(\"Buyurtma ID: \" + orderId);\n        System.out.println(\"Dastlabki summa: $\" + subtotal);\n        System.out.println(\"Chegirma: \" + discountPct + \"%\");\n        System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n        System.out.println(\"==========================================\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CatalogBookCW2OrderApp app = new CatalogBookCW2OrderApp(\"BOK-9001\", 120.0, 15.0);\n        app.printReceipt();\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 5COSC018C Coursework 2 (50%) talablarida asosiy konsol ilovasi toza arxitektura (Clean Architecture), dizayn patternlar va xatosiz chek chop etish qobiliyatini talab qiladi.",
      "theoryEn": "WIUT CW2 specification mandates Clean Architecture, robust design patterns, and formatted terminal receipts.",
      "cleanCode": "public void printReceipt() {\n    System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n}",
      "breakdown": [
        "<code>printReceipt()</code>: Buyurtma ma'lumotlarini formatlangan chiroyli kvitansiyaga aylantirib beradi."
      ],
      "pitfalls": "Manfiy chegirma foizlari kiritilishiga yo'l qo'ymang.",
      "cw2Tip": "Viva savolida examiner chek formati va patternlar integratsiyasini qanday amalga oshirganingizni so'raydi!"
    }
  },
  {
    "id": 141,
    "tier": 5,
    "tierName": "5-Bosqich: To'liq WIUT CW2 Konsol Ilovasi (50%)",
    "sector": "Master • CW2",
    "title": {
      "uz": "141. BeFit Club — CW2 Konsol Buyurtma Tizimi Arxitekturasi",
      "en": "141. BeFit Club — Complete CW2 Console Order Architecture"
    },
    "scenario": {
      "uz": "WIUT CW2 talablari asosida BeFit Club uchun to'liq 'GymMemberCW2OrderApp' sinfini tuzing: buyurtma kodi ('ORD-xxx'), tovarlar soni, hisoblangan yakuniy chegirma va formatlangan chek chop etish ('printReceipt()').",
      "en": "Construct comprehensive WIUT CW2 'GymMemberCW2OrderApp' with order code, items total, discount application and formatted receipt printing."
    },
    "requirements": {
      "classes": [
        "GymMemberCW2OrderApp"
      ],
      "methods": [
        "printReceipt"
      ]
    },
    "starterCode": "",
    "solution": "class GymMemberCW2OrderApp {\n    private String orderId;\n    private double subtotal;\n    private double discountPct;\n\n    public GymMemberCW2OrderApp(String orderId, double subtotal, double discountPct) {\n        this.orderId = orderId;\n        this.subtotal = subtotal;\n        this.discountPct = discountPct;\n    }\n\n    public double calculateFinalTotal() {\n        return subtotal * (1.0 - (discountPct / 100.0));\n    }\n\n    public void printReceipt() {\n        System.out.println(\"==========================================\");\n        System.out.println(\"🏢 WIUT CW2: BEFIT CLUB CHEKI\");\n        System.out.println(\"Buyurtma ID: \" + orderId);\n        System.out.println(\"Dastlabki summa: $\" + subtotal);\n        System.out.println(\"Chegirma: \" + discountPct + \"%\");\n        System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n        System.out.println(\"==========================================\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GymMemberCW2OrderApp app = new GymMemberCW2OrderApp(\"MEM-9001\", 120.0, 15.0);\n        app.printReceipt();\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 5COSC018C Coursework 2 (50%) talablarida asosiy konsol ilovasi toza arxitektura (Clean Architecture), dizayn patternlar va xatosiz chek chop etish qobiliyatini talab qiladi.",
      "theoryEn": "WIUT CW2 specification mandates Clean Architecture, robust design patterns, and formatted terminal receipts.",
      "cleanCode": "public void printReceipt() {\n    System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n}",
      "breakdown": [
        "<code>printReceipt()</code>: Buyurtma ma'lumotlarini formatlangan chiroyli kvitansiyaga aylantirib beradi."
      ],
      "pitfalls": "Manfiy chegirma foizlari kiritilishiga yo'l qo'ymang.",
      "cw2Tip": "Viva savolida examiner chek formati va patternlar integratsiyasini qanday amalga oshirganingizni so'raydi!"
    }
  },
  {
    "id": 142,
    "tier": 5,
    "tierName": "5-Bosqich: To'liq WIUT CW2 Konsol Ilovasi (50%)",
    "sector": "Master • CW2",
    "title": {
      "uz": "142. Tashkent Parking — CW2 Konsol Buyurtma Tizimi Arxitekturasi",
      "en": "142. Tashkent Parking — Complete CW2 Console Order Architecture"
    },
    "scenario": {
      "uz": "WIUT CW2 talablari asosida Tashkent Parking uchun to'liq 'ParkingBayCW2OrderApp' sinfini tuzing: buyurtma kodi ('ORD-xxx'), tovarlar soni, hisoblangan yakuniy chegirma va formatlangan chek chop etish ('printReceipt()').",
      "en": "Construct comprehensive WIUT CW2 'ParkingBayCW2OrderApp' with order code, items total, discount application and formatted receipt printing."
    },
    "requirements": {
      "classes": [
        "ParkingBayCW2OrderApp"
      ],
      "methods": [
        "printReceipt"
      ]
    },
    "starterCode": "",
    "solution": "class ParkingBayCW2OrderApp {\n    private String orderId;\n    private double subtotal;\n    private double discountPct;\n\n    public ParkingBayCW2OrderApp(String orderId, double subtotal, double discountPct) {\n        this.orderId = orderId;\n        this.subtotal = subtotal;\n        this.discountPct = discountPct;\n    }\n\n    public double calculateFinalTotal() {\n        return subtotal * (1.0 - (discountPct / 100.0));\n    }\n\n    public void printReceipt() {\n        System.out.println(\"==========================================\");\n        System.out.println(\"🏢 WIUT CW2: TASHKENT PARKING CHEKI\");\n        System.out.println(\"Buyurtma ID: \" + orderId);\n        System.out.println(\"Dastlabki summa: $\" + subtotal);\n        System.out.println(\"Chegirma: \" + discountPct + \"%\");\n        System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n        System.out.println(\"==========================================\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ParkingBayCW2OrderApp app = new ParkingBayCW2OrderApp(\"PRK-9001\", 120.0, 15.0);\n        app.printReceipt();\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 5COSC018C Coursework 2 (50%) talablarida asosiy konsol ilovasi toza arxitektura (Clean Architecture), dizayn patternlar va xatosiz chek chop etish qobiliyatini talab qiladi.",
      "theoryEn": "WIUT CW2 specification mandates Clean Architecture, robust design patterns, and formatted terminal receipts.",
      "cleanCode": "public void printReceipt() {\n    System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n}",
      "breakdown": [
        "<code>printReceipt()</code>: Buyurtma ma'lumotlarini formatlangan chiroyli kvitansiyaga aylantirib beradi."
      ],
      "pitfalls": "Manfiy chegirma foizlari kiritilishiga yo'l qo'ymang.",
      "cw2Tip": "Viva savolida examiner chek formati va patternlar integratsiyasini qanday amalga oshirganingizni so'raydi!"
    }
  },
  {
    "id": 143,
    "tier": 5,
    "tierName": "5-Bosqich: To'liq WIUT CW2 Konsol Ilovasi (50%)",
    "sector": "Master • CW2",
    "title": {
      "uz": "143. Medion Clinic — CW2 Konsol Buyurtma Tizimi Arxitekturasi",
      "en": "143. Medion Clinic — Complete CW2 Console Order Architecture"
    },
    "scenario": {
      "uz": "WIUT CW2 talablari asosida Medion Clinic uchun to'liq 'PatientRecordCW2OrderApp' sinfini tuzing: buyurtma kodi ('ORD-xxx'), tovarlar soni, hisoblangan yakuniy chegirma va formatlangan chek chop etish ('printReceipt()').",
      "en": "Construct comprehensive WIUT CW2 'PatientRecordCW2OrderApp' with order code, items total, discount application and formatted receipt printing."
    },
    "requirements": {
      "classes": [
        "PatientRecordCW2OrderApp"
      ],
      "methods": [
        "printReceipt"
      ]
    },
    "starterCode": "",
    "solution": "class PatientRecordCW2OrderApp {\n    private String orderId;\n    private double subtotal;\n    private double discountPct;\n\n    public PatientRecordCW2OrderApp(String orderId, double subtotal, double discountPct) {\n        this.orderId = orderId;\n        this.subtotal = subtotal;\n        this.discountPct = discountPct;\n    }\n\n    public double calculateFinalTotal() {\n        return subtotal * (1.0 - (discountPct / 100.0));\n    }\n\n    public void printReceipt() {\n        System.out.println(\"==========================================\");\n        System.out.println(\"🏢 WIUT CW2: MEDION CLINIC CHEKI\");\n        System.out.println(\"Buyurtma ID: \" + orderId);\n        System.out.println(\"Dastlabki summa: $\" + subtotal);\n        System.out.println(\"Chegirma: \" + discountPct + \"%\");\n        System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n        System.out.println(\"==========================================\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PatientRecordCW2OrderApp app = new PatientRecordCW2OrderApp(\"PAT-9001\", 120.0, 15.0);\n        app.printReceipt();\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 5COSC018C Coursework 2 (50%) talablarida asosiy konsol ilovasi toza arxitektura (Clean Architecture), dizayn patternlar va xatosiz chek chop etish qobiliyatini talab qiladi.",
      "theoryEn": "WIUT CW2 specification mandates Clean Architecture, robust design patterns, and formatted terminal receipts.",
      "cleanCode": "public void printReceipt() {\n    System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n}",
      "breakdown": [
        "<code>printReceipt()</code>: Buyurtma ma'lumotlarini formatlangan chiroyli kvitansiyaga aylantirib beradi."
      ],
      "pitfalls": "Manfiy chegirma foizlari kiritilishiga yo'l qo'ymang.",
      "cw2Tip": "Viva savolida examiner chek formati va patternlar integratsiyasini qanday amalga oshirganingizni so'raydi!"
    }
  },
  {
    "id": 144,
    "tier": 5,
    "tierName": "5-Bosqich: To'liq WIUT CW2 Konsol Ilovasi (50%)",
    "sector": "Master • CW2",
    "title": {
      "uz": "144. Hyatt Regency — CW2 Konsol Buyurtma Tizimi Arxitekturasi",
      "en": "144. Hyatt Regency — Complete CW2 Console Order Architecture"
    },
    "scenario": {
      "uz": "WIUT CW2 talablari asosida Hyatt Regency uchun to'liq 'HotelReservationCW2OrderApp' sinfini tuzing: buyurtma kodi ('ORD-xxx'), tovarlar soni, hisoblangan yakuniy chegirma va formatlangan chek chop etish ('printReceipt()').",
      "en": "Construct comprehensive WIUT CW2 'HotelReservationCW2OrderApp' with order code, items total, discount application and formatted receipt printing."
    },
    "requirements": {
      "classes": [
        "HotelReservationCW2OrderApp"
      ],
      "methods": [
        "printReceipt"
      ]
    },
    "starterCode": "",
    "solution": "class HotelReservationCW2OrderApp {\n    private String orderId;\n    private double subtotal;\n    private double discountPct;\n\n    public HotelReservationCW2OrderApp(String orderId, double subtotal, double discountPct) {\n        this.orderId = orderId;\n        this.subtotal = subtotal;\n        this.discountPct = discountPct;\n    }\n\n    public double calculateFinalTotal() {\n        return subtotal * (1.0 - (discountPct / 100.0));\n    }\n\n    public void printReceipt() {\n        System.out.println(\"==========================================\");\n        System.out.println(\"🏢 WIUT CW2: HYATT REGENCY CHEKI\");\n        System.out.println(\"Buyurtma ID: \" + orderId);\n        System.out.println(\"Dastlabki summa: $\" + subtotal);\n        System.out.println(\"Chegirma: \" + discountPct + \"%\");\n        System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n        System.out.println(\"==========================================\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        HotelReservationCW2OrderApp app = new HotelReservationCW2OrderApp(\"RSV-9001\", 120.0, 15.0);\n        app.printReceipt();\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 5COSC018C Coursework 2 (50%) talablarida asosiy konsol ilovasi toza arxitektura (Clean Architecture), dizayn patternlar va xatosiz chek chop etish qobiliyatini talab qiladi.",
      "theoryEn": "WIUT CW2 specification mandates Clean Architecture, robust design patterns, and formatted terminal receipts.",
      "cleanCode": "public void printReceipt() {\n    System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n}",
      "breakdown": [
        "<code>printReceipt()</code>: Buyurtma ma'lumotlarini formatlangan chiroyli kvitansiyaga aylantirib beradi."
      ],
      "pitfalls": "Manfiy chegirma foizlari kiritilishiga yo'l qo'ymang.",
      "cw2Tip": "Viva savolida examiner chek formati va patternlar integratsiyasini qanday amalga oshirganingizni so'raydi!"
    }
  },
  {
    "id": 145,
    "tier": 5,
    "tierName": "5-Bosqich: To'liq WIUT CW2 Konsol Ilovasi (50%)",
    "sector": "Master • CW2",
    "title": {
      "uz": "145. Premier Cinema — CW2 Konsol Buyurtma Tizimi Arxitekturasi",
      "en": "145. Premier Cinema — Complete CW2 Console Order Architecture"
    },
    "scenario": {
      "uz": "WIUT CW2 talablari asosida Premier Cinema uchun to'liq 'CinemaTicketCW2OrderApp' sinfini tuzing: buyurtma kodi ('ORD-xxx'), tovarlar soni, hisoblangan yakuniy chegirma va formatlangan chek chop etish ('printReceipt()').",
      "en": "Construct comprehensive WIUT CW2 'CinemaTicketCW2OrderApp' with order code, items total, discount application and formatted receipt printing."
    },
    "requirements": {
      "classes": [
        "CinemaTicketCW2OrderApp"
      ],
      "methods": [
        "printReceipt"
      ]
    },
    "starterCode": "",
    "solution": "class CinemaTicketCW2OrderApp {\n    private String orderId;\n    private double subtotal;\n    private double discountPct;\n\n    public CinemaTicketCW2OrderApp(String orderId, double subtotal, double discountPct) {\n        this.orderId = orderId;\n        this.subtotal = subtotal;\n        this.discountPct = discountPct;\n    }\n\n    public double calculateFinalTotal() {\n        return subtotal * (1.0 - (discountPct / 100.0));\n    }\n\n    public void printReceipt() {\n        System.out.println(\"==========================================\");\n        System.out.println(\"🏢 WIUT CW2: PREMIER CINEMA CHEKI\");\n        System.out.println(\"Buyurtma ID: \" + orderId);\n        System.out.println(\"Dastlabki summa: $\" + subtotal);\n        System.out.println(\"Chegirma: \" + discountPct + \"%\");\n        System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n        System.out.println(\"==========================================\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CinemaTicketCW2OrderApp app = new CinemaTicketCW2OrderApp(\"TKT-9001\", 120.0, 15.0);\n        app.printReceipt();\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 5COSC018C Coursework 2 (50%) talablarida asosiy konsol ilovasi toza arxitektura (Clean Architecture), dizayn patternlar va xatosiz chek chop etish qobiliyatini talab qiladi.",
      "theoryEn": "WIUT CW2 specification mandates Clean Architecture, robust design patterns, and formatted terminal receipts.",
      "cleanCode": "public void printReceipt() {\n    System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n}",
      "breakdown": [
        "<code>printReceipt()</code>: Buyurtma ma'lumotlarini formatlangan chiroyli kvitansiyaga aylantirib beradi."
      ],
      "pitfalls": "Manfiy chegirma foizlari kiritilishiga yo'l qo'ymang.",
      "cw2Tip": "Viva savolida examiner chek formati va patternlar integratsiyasini qanday amalga oshirganingizni so'raydi!"
    }
  },
  {
    "id": 146,
    "tier": 5,
    "tierName": "5-Bosqich: To'liq WIUT CW2 Konsol Ilovasi (50%)",
    "sector": "Master • CW2",
    "title": {
      "uz": "146. Yandex Scooter — CW2 Konsol Buyurtma Tizimi Arxitekturasi",
      "en": "146. Yandex Scooter — Complete CW2 Console Order Architecture"
    },
    "scenario": {
      "uz": "WIUT CW2 talablari asosida Yandex Scooter uchun to'liq 'ElectricScooterCW2OrderApp' sinfini tuzing: buyurtma kodi ('ORD-xxx'), tovarlar soni, hisoblangan yakuniy chegirma va formatlangan chek chop etish ('printReceipt()').",
      "en": "Construct comprehensive WIUT CW2 'ElectricScooterCW2OrderApp' with order code, items total, discount application and formatted receipt printing."
    },
    "requirements": {
      "classes": [
        "ElectricScooterCW2OrderApp"
      ],
      "methods": [
        "printReceipt"
      ]
    },
    "starterCode": "",
    "solution": "class ElectricScooterCW2OrderApp {\n    private String orderId;\n    private double subtotal;\n    private double discountPct;\n\n    public ElectricScooterCW2OrderApp(String orderId, double subtotal, double discountPct) {\n        this.orderId = orderId;\n        this.subtotal = subtotal;\n        this.discountPct = discountPct;\n    }\n\n    public double calculateFinalTotal() {\n        return subtotal * (1.0 - (discountPct / 100.0));\n    }\n\n    public void printReceipt() {\n        System.out.println(\"==========================================\");\n        System.out.println(\"🏢 WIUT CW2: YANDEX SCOOTER CHEKI\");\n        System.out.println(\"Buyurtma ID: \" + orderId);\n        System.out.println(\"Dastlabki summa: $\" + subtotal);\n        System.out.println(\"Chegirma: \" + discountPct + \"%\");\n        System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n        System.out.println(\"==========================================\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ElectricScooterCW2OrderApp app = new ElectricScooterCW2OrderApp(\"SCT-9001\", 120.0, 15.0);\n        app.printReceipt();\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 5COSC018C Coursework 2 (50%) talablarida asosiy konsol ilovasi toza arxitektura (Clean Architecture), dizayn patternlar va xatosiz chek chop etish qobiliyatini talab qiladi.",
      "theoryEn": "WIUT CW2 specification mandates Clean Architecture, robust design patterns, and formatted terminal receipts.",
      "cleanCode": "public void printReceipt() {\n    System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n}",
      "breakdown": [
        "<code>printReceipt()</code>: Buyurtma ma'lumotlarini formatlangan chiroyli kvitansiyaga aylantirib beradi."
      ],
      "pitfalls": "Manfiy chegirma foizlari kiritilishiga yo'l qo'ymang.",
      "cw2Tip": "Viva savolida examiner chek formati va patternlar integratsiyasini qanday amalga oshirganingizni so'raydi!"
    }
  },
  {
    "id": 147,
    "tier": 5,
    "tierName": "5-Bosqich: To'liq WIUT CW2 Konsol Ilovasi (50%)",
    "sector": "Master • CW2",
    "title": {
      "uz": "147. Weather Network — CW2 Konsol Buyurtma Tizimi Arxitekturasi",
      "en": "147. Weather Network — Complete CW2 Console Order Architecture"
    },
    "scenario": {
      "uz": "WIUT CW2 talablari asosida Weather Network uchun to'liq 'MeteoStationCW2OrderApp' sinfini tuzing: buyurtma kodi ('ORD-xxx'), tovarlar soni, hisoblangan yakuniy chegirma va formatlangan chek chop etish ('printReceipt()').",
      "en": "Construct comprehensive WIUT CW2 'MeteoStationCW2OrderApp' with order code, items total, discount application and formatted receipt printing."
    },
    "requirements": {
      "classes": [
        "MeteoStationCW2OrderApp"
      ],
      "methods": [
        "printReceipt"
      ]
    },
    "starterCode": "",
    "solution": "class MeteoStationCW2OrderApp {\n    private String orderId;\n    private double subtotal;\n    private double discountPct;\n\n    public MeteoStationCW2OrderApp(String orderId, double subtotal, double discountPct) {\n        this.orderId = orderId;\n        this.subtotal = subtotal;\n        this.discountPct = discountPct;\n    }\n\n    public double calculateFinalTotal() {\n        return subtotal * (1.0 - (discountPct / 100.0));\n    }\n\n    public void printReceipt() {\n        System.out.println(\"==========================================\");\n        System.out.println(\"🏢 WIUT CW2: WEATHER NETWORK CHEKI\");\n        System.out.println(\"Buyurtma ID: \" + orderId);\n        System.out.println(\"Dastlabki summa: $\" + subtotal);\n        System.out.println(\"Chegirma: \" + discountPct + \"%\");\n        System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n        System.out.println(\"==========================================\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MeteoStationCW2OrderApp app = new MeteoStationCW2OrderApp(\"WTH-9001\", 120.0, 15.0);\n        app.printReceipt();\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 5COSC018C Coursework 2 (50%) talablarida asosiy konsol ilovasi toza arxitektura (Clean Architecture), dizayn patternlar va xatosiz chek chop etish qobiliyatini talab qiladi.",
      "theoryEn": "WIUT CW2 specification mandates Clean Architecture, robust design patterns, and formatted terminal receipts.",
      "cleanCode": "public void printReceipt() {\n    System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n}",
      "breakdown": [
        "<code>printReceipt()</code>: Buyurtma ma'lumotlarini formatlangan chiroyli kvitansiyaga aylantirib beradi."
      ],
      "pitfalls": "Manfiy chegirma foizlari kiritilishiga yo'l qo'ymang.",
      "cw2Tip": "Viva savolida examiner chek formati va patternlar integratsiyasini qanday amalga oshirganingizni so'raydi!"
    }
  },
  {
    "id": 148,
    "tier": 5,
    "tierName": "5-Bosqich: To'liq WIUT CW2 Konsol Ilovasi (50%)",
    "sector": "Master • CW2",
    "title": {
      "uz": "148. OpenMarket Auction — CW2 Konsol Buyurtma Tizimi Arxitekturasi",
      "en": "148. OpenMarket Auction — Complete CW2 Console Order Architecture"
    },
    "scenario": {
      "uz": "WIUT CW2 talablari asosida OpenMarket Auction uchun to'liq 'AuctionLotCW2OrderApp' sinfini tuzing: buyurtma kodi ('ORD-xxx'), tovarlar soni, hisoblangan yakuniy chegirma va formatlangan chek chop etish ('printReceipt()').",
      "en": "Construct comprehensive WIUT CW2 'AuctionLotCW2OrderApp' with order code, items total, discount application and formatted receipt printing."
    },
    "requirements": {
      "classes": [
        "AuctionLotCW2OrderApp"
      ],
      "methods": [
        "printReceipt"
      ]
    },
    "starterCode": "",
    "solution": "class AuctionLotCW2OrderApp {\n    private String orderId;\n    private double subtotal;\n    private double discountPct;\n\n    public AuctionLotCW2OrderApp(String orderId, double subtotal, double discountPct) {\n        this.orderId = orderId;\n        this.subtotal = subtotal;\n        this.discountPct = discountPct;\n    }\n\n    public double calculateFinalTotal() {\n        return subtotal * (1.0 - (discountPct / 100.0));\n    }\n\n    public void printReceipt() {\n        System.out.println(\"==========================================\");\n        System.out.println(\"🏢 WIUT CW2: OPENMARKET AUCTION CHEKI\");\n        System.out.println(\"Buyurtma ID: \" + orderId);\n        System.out.println(\"Dastlabki summa: $\" + subtotal);\n        System.out.println(\"Chegirma: \" + discountPct + \"%\");\n        System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n        System.out.println(\"==========================================\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AuctionLotCW2OrderApp app = new AuctionLotCW2OrderApp(\"LOT-9001\", 120.0, 15.0);\n        app.printReceipt();\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 5COSC018C Coursework 2 (50%) talablarida asosiy konsol ilovasi toza arxitektura (Clean Architecture), dizayn patternlar va xatosiz chek chop etish qobiliyatini talab qiladi.",
      "theoryEn": "WIUT CW2 specification mandates Clean Architecture, robust design patterns, and formatted terminal receipts.",
      "cleanCode": "public void printReceipt() {\n    System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n}",
      "breakdown": [
        "<code>printReceipt()</code>: Buyurtma ma'lumotlarini formatlangan chiroyli kvitansiyaga aylantirib beradi."
      ],
      "pitfalls": "Manfiy chegirma foizlari kiritilishiga yo'l qo'ymang.",
      "cw2Tip": "Viva savolida examiner chek formati va patternlar integratsiyasini qanday amalga oshirganingizni so'raydi!"
    }
  },
  {
    "id": 149,
    "tier": 5,
    "tierName": "5-Bosqich: To'liq WIUT CW2 Konsol Ilovasi (50%)",
    "sector": "Master • CW2",
    "title": {
      "uz": "149. Solar Energy Grid — CW2 Konsol Buyurtma Tizimi Arxitekturasi",
      "en": "149. Solar Energy Grid — Complete CW2 Console Order Architecture"
    },
    "scenario": {
      "uz": "WIUT CW2 talablari asosida Solar Energy Grid uchun to'liq 'SolarInverterCW2OrderApp' sinfini tuzing: buyurtma kodi ('ORD-xxx'), tovarlar soni, hisoblangan yakuniy chegirma va formatlangan chek chop etish ('printReceipt()').",
      "en": "Construct comprehensive WIUT CW2 'SolarInverterCW2OrderApp' with order code, items total, discount application and formatted receipt printing."
    },
    "requirements": {
      "classes": [
        "SolarInverterCW2OrderApp"
      ],
      "methods": [
        "printReceipt"
      ]
    },
    "starterCode": "",
    "solution": "class SolarInverterCW2OrderApp {\n    private String orderId;\n    private double subtotal;\n    private double discountPct;\n\n    public SolarInverterCW2OrderApp(String orderId, double subtotal, double discountPct) {\n        this.orderId = orderId;\n        this.subtotal = subtotal;\n        this.discountPct = discountPct;\n    }\n\n    public double calculateFinalTotal() {\n        return subtotal * (1.0 - (discountPct / 100.0));\n    }\n\n    public void printReceipt() {\n        System.out.println(\"==========================================\");\n        System.out.println(\"🏢 WIUT CW2: SOLAR ENERGY GRID CHEKI\");\n        System.out.println(\"Buyurtma ID: \" + orderId);\n        System.out.println(\"Dastlabki summa: $\" + subtotal);\n        System.out.println(\"Chegirma: \" + discountPct + \"%\");\n        System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n        System.out.println(\"==========================================\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SolarInverterCW2OrderApp app = new SolarInverterCW2OrderApp(\"SLR-9001\", 120.0, 15.0);\n        app.printReceipt();\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 5COSC018C Coursework 2 (50%) talablarida asosiy konsol ilovasi toza arxitektura (Clean Architecture), dizayn patternlar va xatosiz chek chop etish qobiliyatini talab qiladi.",
      "theoryEn": "WIUT CW2 specification mandates Clean Architecture, robust design patterns, and formatted terminal receipts.",
      "cleanCode": "public void printReceipt() {\n    System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n}",
      "breakdown": [
        "<code>printReceipt()</code>: Buyurtma ma'lumotlarini formatlangan chiroyli kvitansiyaga aylantirib beradi."
      ],
      "pitfalls": "Manfiy chegirma foizlari kiritilishiga yo'l qo'ymang.",
      "cw2Tip": "Viva savolida examiner chek formati va patternlar integratsiyasini qanday amalga oshirganingizni so'raydi!"
    }
  },
  {
    "id": 150,
    "tier": 5,
    "tierName": "5-Bosqich: To'liq WIUT CW2 Konsol Ilovasi (50%)",
    "sector": "Master • CW2",
    "title": {
      "uz": "150. O'zbekiston Temir Yo'llari — CW2 Konsol Buyurtma Tizimi Arxitekturasi",
      "en": "150. O'zbekiston Temir Yo'llari — Complete CW2 Console Order Architecture"
    },
    "scenario": {
      "uz": "WIUT CW2 talablari asosida O'zbekiston Temir Yo'llari uchun to'liq 'TrainRouteCW2OrderApp' sinfini tuzing: buyurtma kodi ('ORD-xxx'), tovarlar soni, hisoblangan yakuniy chegirma va formatlangan chek chop etish ('printReceipt()').",
      "en": "Construct comprehensive WIUT CW2 'TrainRouteCW2OrderApp' with order code, items total, discount application and formatted receipt printing."
    },
    "requirements": {
      "classes": [
        "TrainRouteCW2OrderApp"
      ],
      "methods": [
        "printReceipt"
      ]
    },
    "starterCode": "",
    "solution": "class TrainRouteCW2OrderApp {\n    private String orderId;\n    private double subtotal;\n    private double discountPct;\n\n    public TrainRouteCW2OrderApp(String orderId, double subtotal, double discountPct) {\n        this.orderId = orderId;\n        this.subtotal = subtotal;\n        this.discountPct = discountPct;\n    }\n\n    public double calculateFinalTotal() {\n        return subtotal * (1.0 - (discountPct / 100.0));\n    }\n\n    public void printReceipt() {\n        System.out.println(\"==========================================\");\n        System.out.println(\"🏢 WIUT CW2: O'ZBEKISTON TEMIR YO'LLARI CHEKI\");\n        System.out.println(\"Buyurtma ID: \" + orderId);\n        System.out.println(\"Dastlabki summa: $\" + subtotal);\n        System.out.println(\"Chegirma: \" + discountPct + \"%\");\n        System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n        System.out.println(\"==========================================\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TrainRouteCW2OrderApp app = new TrainRouteCW2OrderApp(\"TRN-9001\", 120.0, 15.0);\n        app.printReceipt();\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT 5COSC018C Coursework 2 (50%) talablarida asosiy konsol ilovasi toza arxitektura (Clean Architecture), dizayn patternlar va xatosiz chek chop etish qobiliyatini talab qiladi.",
      "theoryEn": "WIUT CW2 specification mandates Clean Architecture, robust design patterns, and formatted terminal receipts.",
      "cleanCode": "public void printReceipt() {\n    System.out.println(\"YAKUNIY TO'LOV: $\" + calculateFinalTotal());\n}",
      "breakdown": [
        "<code>printReceipt()</code>: Buyurtma ma'lumotlarini formatlangan chiroyli kvitansiyaga aylantirib beradi."
      ],
      "pitfalls": "Manfiy chegirma foizlari kiritilishiga yo'l qo'ymang.",
      "cw2Tip": "Viva savolida examiner chek formati va patternlar integratsiyasini qanday amalga oshirganingizni so'raydi!"
    }
  }
];
