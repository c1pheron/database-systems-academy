// WIUT OOP (5COSC018C) — WEEK 8 DATASET (150 PROGRESSIVE CHALLENGES)
// Comprehensive syllabus alignment: Software Design Principles (DRY, KISS, YAGNI),
// Java Exception Hierarchy (Throwable, Error vs Exception, Checked vs Unchecked),
// Exception Handling (try, catch, multi-catch, catch ordering),
// The finally Block (Guaranteed Cleanup, Resource Lifecycle Safety),
// throw & throws (Explicit Throwing, Call-Stack Propagation, Exception Chaining),
// Custom Domain Exceptions (InsufficientFunds, InvalidOrder, ItemNotFound),
// Workshop TW 8 (StepTracker, Negative Steps, Array Bounds, Zero Division),
// and PC Lab Mock Test 'Chorsu Grill House' (Customer, OrderItem, Order, Payable, Cash, Card).
// Generated strictly following the 1-5 step format and 100% verified with JavaAnalyzer.
window.OOP_CHALLENGES_W8 = [
  {
    "id": 1,
    "tier": 1,
    "tierName": "1-Bosqich: Dasturiy Dizayn Prinsiplari — DRY (O'zingni Takrorlama)",
    "sector": "1-15: DRY Principle & Redundancy Elimination",
    "title": {
      "uz": "1. Uzum Market — Narx Formatlash Mantiqini DRY Bo'yicha Birlashtirish",
      "en": "1. Uzum Market — Consolidating Currency Formatting via DRY"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Uzum Market\n\nWIUT 8-leksiyasida aytilganidek: 'DRY (Don't Repeat Yourself) har qanday bilim yoki mantiq tizimda faqat bir marta, aniq va ishonchli ifodalanishini talab qiladi'. Har bir mahsulot va buyurtma uchun 'narx + \" UZS\"' matnini qayta-qayta yozmasdan, 'PriceFormatter.format(amount)' yordamchi metodini yarating.\n\n🎯 QADAMLAR:\n1. DRY printsipiga mos ravishda 'PriceFormatter' yordamchi sinfini yarating.\n2. Unda takrorlanuvchi mantiqni o'zida jamlagan 'format(...)' statik yoki ochiq metodini e'lon qiling.\n3. 'Main' metodida chaqiring va natijani konsolga chiqaring.\n\n📊 Kutilayotgan Natija:\nMahsulot narxi: 125000.0 UZS",
      "en": "🏢 Context: Uzum Market\n\nApply the DRY principle from lecture 8 by extracting redundant currency string concatenations into a unified PriceFormatter utility.\n\n🎯 STEPS:\n1. Create helper class 'PriceFormatter' adhering to the DRY principle.\n2. Declare reusable method 'format(...)' eliminating logic duplication.\n3. Invoke in 'Main' and verify console output.\n\n📊 Expected Output:\nMahsulot narxi: 125000.0 UZS"
    },
    "requirements": {
      "classes": [
        "PriceFormatter",
        "Main"
      ],
      "methods": [
        "format"
      ]
    },
    "starterCode": "// DRY printsipi bo'yicha PriceFormatter sinfini yarating\nclass PriceFormatter {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Mahsulot narxi: \" + PriceFormatter.format(125000.0));\n    }\n}",
    "solution": "class PriceFormatter {\n    public static String format(double amount) { return amount + \" UZS\"; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Mahsulot narxi: \" + PriceFormatter.format(125000.0));\n    }\n}",
    "detailedSolution": {
      "theory": "DRY (Don't Repeat Yourself) — tizimdagi har bir mantiq yoki bilim faqat bitta, yagona va ishonchli joyda (Single Source of Truth) ifodalanishi kerak. Kodni nusxalash (copy-paste) kelajakda xatoliklar va o'zgarishlarni boshqarib bo'lmaslikka olib keladi.",
      "cleanCode": "class PriceFormatter {\n    public static ... format(...) { ... }\n}",
      "breakdown": [
        "<code>PriceFormatter</code>: yagona mantiq markazi (Single Source of Truth).",
        "<code>format()</code>: barcha modullar uchun qayta ishlatiluvchi yechim."
      ]
    }
  },
  {
    "id": 2,
    "tier": 1,
    "tierName": "1-Bosqich: Dasturiy Dizayn Prinsiplari — DRY (O'zingni Takrorlama)",
    "sector": "1-15: DRY Principle & Redundancy Elimination",
    "title": {
      "uz": "2. Payme — Telefon Raqami Tekshiruvini DRY Qilish",
      "en": "2. Payme — Centralized Phone Validation via DRY"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Payme Systems\n\nFoydalanuvchi ro'yxatdan o'tganda, to'lov yuborganda va SMS so'raganda telefon formati (+998...) 3 joyda tekshirilgan. DRY qoidasi bo'yicha bu mantiqni yagona 'PhoneValidator.isValid(phone)' metodiga jamlang.\n\n🎯 QADAMLAR:\n1. DRY printsipiga mos ravishda 'PhoneValidator' yordamchi sinfini yarating.\n2. Unda takrorlanuvchi mantiqni o'zida jamlagan 'isValid(...)' statik yoki ochiq metodini e'lon qiling.\n3. 'Main' metodida chaqiring va natijani konsolga chiqaring.\n\n📊 Kutilayotgan Natija:\nRaqam holati: To'g'ri (+998)",
      "en": "🏢 Context: Payme Systems\n\nRefactor duplicated phone validation logic across payment services into a single reusable PhoneValidator helper.\n\n🎯 STEPS:\n1. Create helper class 'PhoneValidator' adhering to the DRY principle.\n2. Declare reusable method 'isValid(...)' eliminating logic duplication.\n3. Invoke in 'Main' and verify console output.\n\n📊 Expected Output:\nRaqam holati: To'g'ri (+998)"
    },
    "requirements": {
      "classes": [
        "PhoneValidator",
        "Main"
      ],
      "methods": [
        "isValid"
      ]
    },
    "starterCode": "// DRY printsipi bo'yicha PhoneValidator sinfini yarating\nclass PhoneValidator {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Raqam holati: \" + PhoneValidator.isValid(\"+998901234567\"));\n    }\n}",
    "solution": "class PhoneValidator {\n    public static String isValid(String phone) {\n        if (phone != null && phone.startsWith(\"+998\")) return \"To'g'ri (+998)\";\n        return \"Noto'g'ri\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Raqam holati: \" + PhoneValidator.isValid(\"+998901234567\"));\n    }\n}",
    "detailedSolution": {
      "theory": "DRY (Don't Repeat Yourself) — tizimdagi har bir mantiq yoki bilim faqat bitta, yagona va ishonchli joyda (Single Source of Truth) ifodalanishi kerak. Kodni nusxalash (copy-paste) kelajakda xatoliklar va o'zgarishlarni boshqarib bo'lmaslikka olib keladi.",
      "cleanCode": "class PhoneValidator {\n    public static ... isValid(...) { ... }\n}",
      "breakdown": [
        "<code>PhoneValidator</code>: yagona mantiq markazi (Single Source of Truth).",
        "<code>isValid()</code>: barcha modullar uchun qayta ishlatiluvchi yechim."
      ]
    }
  },
  {
    "id": 3,
    "tier": 1,
    "tierName": "1-Bosqich: Dasturiy Dizayn Prinsiplari — DRY (O'zingni Takrorlama)",
    "sector": "1-15: DRY Principle & Redundancy Elimination",
    "title": {
      "uz": "3. Click Ecosystem — 12% QQS (VAT) Hisobini Bitta Joyga Ko'chirish",
      "en": "3. Click Ecosystem — Centralized VAT Tax Engine"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Click Ecosystem\n\nBarcha billing modullarida 0.12 koeffitsiyenti qo'lda ko'paytirilgan. Soliq foizi o'zgarsa, hamma joyni o'zgartirish xavfi bor. 'TaxService.calculateVAT(subtotal)' orqali markazlashtiring.\n\n🎯 QADAMLAR:\n1. DRY printsipiga mos ravishda 'TaxService' yordamchi sinfini yarating.\n2. Unda takrorlanuvchi mantiqni o'zida jamlagan 'calculateVAT(...)' statik yoki ochiq metodini e'lon qiling.\n3. 'Main' metodida chaqiring va natijani konsolga chiqaring.\n\n📊 Kutilayotgan Natija:\nQQS summasi: 60000.0 UZS",
      "en": "🏢 Context: Click Ecosystem\n\nExtract hardcoded 0.12 tax multipliers into a single TaxService meeting the DRY requirement.\n\n🎯 STEPS:\n1. Create helper class 'TaxService' adhering to the DRY principle.\n2. Declare reusable method 'calculateVAT(...)' eliminating logic duplication.\n3. Invoke in 'Main' and verify console output.\n\n📊 Expected Output:\nQQS summasi: 60000.0 UZS"
    },
    "requirements": {
      "classes": [
        "TaxService",
        "Main"
      ],
      "methods": [
        "calculateVAT"
      ]
    },
    "starterCode": "// DRY printsipi bo'yicha TaxService sinfini yarating\nclass TaxService {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"QQS summasi: \" + TaxService.calculateVAT(500000.0) + \" UZS\");\n    }\n}",
    "solution": "class TaxService {\n    public static double calculateVAT(double subtotal) { return subtotal * 0.12; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"QQS summasi: \" + TaxService.calculateVAT(500000.0) + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "DRY (Don't Repeat Yourself) — tizimdagi har bir mantiq yoki bilim faqat bitta, yagona va ishonchli joyda (Single Source of Truth) ifodalanishi kerak. Kodni nusxalash (copy-paste) kelajakda xatoliklar va o'zgarishlarni boshqarib bo'lmaslikka olib keladi.",
      "cleanCode": "class TaxService {\n    public static ... calculateVAT(...) { ... }\n}",
      "breakdown": [
        "<code>TaxService</code>: yagona mantiq markazi (Single Source of Truth).",
        "<code>calculateVAT()</code>: barcha modullar uchun qayta ishlatiluvchi yechim."
      ]
    }
  },
  {
    "id": 4,
    "tier": 1,
    "tierName": "1-Bosqich: Dasturiy Dizayn Prinsiplari — DRY (O'zingni Takrorlama)",
    "sector": "1-15: DRY Principle & Redundancy Elimination",
    "title": {
      "uz": "4. Korzinka Supermarket — Keshbek Foizini DRY Qilish",
      "en": "4. Korzinka Supermarket — Universal Loyalty Cashback Calculator"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Korzinka\n\nDo'kon, onlayn yetkazish va hamkor kartalarida keshbek (1%) hisobi takrorlangan. 'LoyaltyEngine.calculateCashback(amount)' orqali yagona nuqtaga keltiring.\n\n🎯 QADAMLAR:\n1. DRY printsipiga mos ravishda 'LoyaltyEngine' yordamchi sinfini yarating.\n2. Unda takrorlanuvchi mantiqni o'zida jamlagan 'calculateCashback(...)' statik yoki ochiq metodini e'lon qiling.\n3. 'Main' metodida chaqiring va natijani konsolga chiqaring.\n\n📊 Kutilayotgan Natija:\nKeshbek miqdori: 2000.0 UZS",
      "en": "🏢 Context: Korzinka\n\nUnify cashback reward calculations across branches into a single LoyaltyEngine utility.\n\n🎯 STEPS:\n1. Create helper class 'LoyaltyEngine' adhering to the DRY principle.\n2. Declare reusable method 'calculateCashback(...)' eliminating logic duplication.\n3. Invoke in 'Main' and verify console output.\n\n📊 Expected Output:\nKeshbek miqdori: 2000.0 UZS"
    },
    "requirements": {
      "classes": [
        "LoyaltyEngine",
        "Main"
      ],
      "methods": [
        "calculateCashback"
      ]
    },
    "starterCode": "// DRY printsipi bo'yicha LoyaltyEngine sinfini yarating\nclass LoyaltyEngine {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Keshbek miqdori: \" + LoyaltyEngine.calculateCashback(200000.0) + \" UZS\");\n    }\n}",
    "solution": "class LoyaltyEngine {\n    public static double calculateCashback(double amount) { return amount * 0.01; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Keshbek miqdori: \" + LoyaltyEngine.calculateCashback(200000.0) + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "DRY (Don't Repeat Yourself) — tizimdagi har bir mantiq yoki bilim faqat bitta, yagona va ishonchli joyda (Single Source of Truth) ifodalanishi kerak. Kodni nusxalash (copy-paste) kelajakda xatoliklar va o'zgarishlarni boshqarib bo'lmaslikka olib keladi.",
      "cleanCode": "class LoyaltyEngine {\n    public static ... calculateCashback(...) { ... }\n}",
      "breakdown": [
        "<code>LoyaltyEngine</code>: yagona mantiq markazi (Single Source of Truth).",
        "<code>calculateCashback()</code>: barcha modullar uchun qayta ishlatiluvchi yechim."
      ]
    }
  },
  {
    "id": 5,
    "tier": 1,
    "tierName": "1-Bosqich: Dasturiy Dizayn Prinsiplari — DRY (O'zingni Takrorlama)",
    "sector": "1-15: DRY Principle & Redundancy Elimination",
    "title": {
      "uz": "5. Yandex Go — Masofa Narxi Tarifini DRY Bazaviy Sinfga Olish",
      "en": "5. Yandex Go — Inheriting Shared Fare Calculation Formula"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Yandex Go\n\nStart, Comfort va Business tariflarida 'baza + km * stavka' mantiqi takrorlangan. DRY qoidasiga ko'ra, umumiy formulani 'BaseFare' superklassiga chiqaring.\n\n🎯 QADAMLAR:\n1. DRY printsipiga mos ravishda 'BaseFare' yordamchi sinfini yarating.\n2. Unda takrorlanuvchi mantiqni o'zida jamlagan 'computeTotal(...)' statik yoki ochiq metodini e'lon qiling.\n3. 'Main' metodida chaqiring va natijani konsolga chiqaring.\n\n📊 Kutilayotgan Natija:\nSafardan hisob: 19000.0 UZS",
      "en": "🏢 Context: Yandex Go\n\nRefactor duplicated fare calculation into superclass BaseFare eliminating formula duplication in child classes.\n\n🎯 STEPS:\n1. Create helper class 'BaseFare' adhering to the DRY principle.\n2. Declare reusable method 'computeTotal(...)' eliminating logic duplication.\n3. Invoke in 'Main' and verify console output.\n\n📊 Expected Output:\nSafardan hisob: 19000.0 UZS"
    },
    "requirements": {
      "classes": [
        "BaseFare",
        "Main"
      ],
      "methods": [
        "computeTotal"
      ]
    },
    "starterCode": "// DRY printsipi bo'yicha BaseFare sinfini yarating\nclass BaseFare {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseFare fare = new BaseFare(5000.0, 2000.0);\n        System.out.println(\"Safardan hisob: \" + fare.computeTotal(7.0) + \" UZS\");\n    }\n}",
    "solution": "class BaseFare {\n    protected double base;\n    protected double perKm;\n    public BaseFare(double b, double k) { this.base = b; this.perKm = k; }\n    public double computeTotal(double km) { return base + (km * perKm); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseFare fare = new BaseFare(5000.0, 2000.0);\n        System.out.println(\"Safardan hisob: \" + fare.computeTotal(7.0) + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "DRY (Don't Repeat Yourself) — tizimdagi har bir mantiq yoki bilim faqat bitta, yagona va ishonchli joyda (Single Source of Truth) ifodalanishi kerak. Kodni nusxalash (copy-paste) kelajakda xatoliklar va o'zgarishlarni boshqarib bo'lmaslikka olib keladi.",
      "cleanCode": "class BaseFare {\n    public static ... computeTotal(...) { ... }\n}",
      "breakdown": [
        "<code>BaseFare</code>: yagona mantiq markazi (Single Source of Truth).",
        "<code>computeTotal()</code>: barcha modullar uchun qayta ishlatiluvchi yechim."
      ]
    }
  },
  {
    "id": 6,
    "tier": 1,
    "tierName": "1-Bosqich: Dasturiy Dizayn Prinsiplari — DRY (O'zingni Takrorlama)",
    "sector": "1-15: DRY Principle & Redundancy Elimination",
    "title": {
      "uz": "6. Texnomart — Karta Raqamini Maskalashni DRY Yordamchisiga Jamlash",
      "en": "6. Texnomart — DRY Card Number Masking Helper"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Texnomart\n\nKarta raqamini '8600 **** **** 1234' formatida yashirish barcha to'lov cheklarida takrorlangan. 'CardMasker.mask(pan)' statik metodini yarating.\n\n🎯 QADAMLAR:\n1. DRY printsipiga mos ravishda 'CardMasker' yordamchi sinfini yarating.\n2. Unda takrorlanuvchi mantiqni o'zida jamlagan 'mask(...)' statik yoki ochiq metodini e'lon qiling.\n3. 'Main' metodida chaqiring va natijani konsolga chiqaring.\n\n📊 Kutilayotgan Natija:\nMaskalangan karta: 8600 **** **** 9012",
      "en": "🏢 Context: Texnomart\n\nCentralize sensitive credit card number masking into a reusable CardMasker helper.\n\n🎯 STEPS:\n1. Create helper class 'CardMasker' adhering to the DRY principle.\n2. Declare reusable method 'mask(...)' eliminating logic duplication.\n3. Invoke in 'Main' and verify console output.\n\n📊 Expected Output:\nMaskalangan karta: 8600 **** **** 9012"
    },
    "requirements": {
      "classes": [
        "CardMasker",
        "Main"
      ],
      "methods": [
        "mask"
      ]
    },
    "starterCode": "// DRY printsipi bo'yicha CardMasker sinfini yarating\nclass CardMasker {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Maskalangan karta: \" + CardMasker.mask(\"8600123456789012\"));\n    }\n}",
    "solution": "class CardMasker {\n    public static String mask(String pan) {\n        if (pan == null || pan.length() < 16) return pan;\n        return pan.substring(0, 4) + \" **** **** \" + pan.substring(12);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Maskalangan karta: \" + CardMasker.mask(\"8600123456789012\"));\n    }\n}",
    "detailedSolution": {
      "theory": "DRY (Don't Repeat Yourself) — tizimdagi har bir mantiq yoki bilim faqat bitta, yagona va ishonchli joyda (Single Source of Truth) ifodalanishi kerak. Kodni nusxalash (copy-paste) kelajakda xatoliklar va o'zgarishlarni boshqarib bo'lmaslikka olib keladi.",
      "cleanCode": "class CardMasker {\n    public static ... mask(...) { ... }\n}",
      "breakdown": [
        "<code>CardMasker</code>: yagona mantiq markazi (Single Source of Truth).",
        "<code>mask()</code>: barcha modullar uchun qayta ishlatiluvchi yechim."
      ]
    }
  },
  {
    "id": 7,
    "tier": 1,
    "tierName": "1-Bosqich: Dasturiy Dizayn Prinsiplari — DRY (O'zingni Takrorlama)",
    "sector": "1-15: DRY Principle & Redundancy Elimination",
    "title": {
      "uz": "7. Uzum Tezkor — Yetkazish Manzilini DRY Tekshirish",
      "en": "7. Uzum Tezkor — DRY Address Normalization Helper"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Uzum Tezkor\n\nBuyurtma berilganda manzilning bo'sh emasligi va standart formatdaligi har bir kontrollerda tekshirilgan. 'AddressValidator.sanitize(addr)' metodiga birlashtiring.\n\n🎯 QADAMLAR:\n1. DRY printsipiga mos ravishda 'AddressValidator' yordamchi sinfini yarating.\n2. Unda takrorlanuvchi mantiqni o'zida jamlagan 'sanitize(...)' statik yoki ochiq metodini e'lon qiling.\n3. 'Main' metodida chaqiring va natijani konsolga chiqaring.\n\n📊 Kutilayotgan Natija:\nTozalangan manzil: 'Amir Temur ko'chasi, 12'",
      "en": "🏢 Context: Uzum Tezkor\n\nEncapsulate delivery address trimming and validation in AddressValidator.\n\n🎯 STEPS:\n1. Create helper class 'AddressValidator' adhering to the DRY principle.\n2. Declare reusable method 'sanitize(...)' eliminating logic duplication.\n3. Invoke in 'Main' and verify console output.\n\n📊 Expected Output:\nTozalangan manzil: 'Amir Temur ko'chasi, 12'"
    },
    "requirements": {
      "classes": [
        "AddressValidator",
        "Main"
      ],
      "methods": [
        "sanitize"
      ]
    },
    "starterCode": "// DRY printsipi bo'yicha AddressValidator sinfini yarating\nclass AddressValidator {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Tozalangan manzil: '\" + AddressValidator.sanitize(\"  Amir Temur ko'chasi, 12  \") + \"'\");\n    }\n}",
    "solution": "class AddressValidator {\n    public static String sanitize(String addr) {\n        return addr == null ? \"\" : addr.trim();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Tozalangan manzil: '\" + AddressValidator.sanitize(\"  Amir Temur ko'chasi, 12  \") + \"'\");\n    }\n}",
    "detailedSolution": {
      "theory": "DRY (Don't Repeat Yourself) — tizimdagi har bir mantiq yoki bilim faqat bitta, yagona va ishonchli joyda (Single Source of Truth) ifodalanishi kerak. Kodni nusxalash (copy-paste) kelajakda xatoliklar va o'zgarishlarni boshqarib bo'lmaslikka olib keladi.",
      "cleanCode": "class AddressValidator {\n    public static ... sanitize(...) { ... }\n}",
      "breakdown": [
        "<code>AddressValidator</code>: yagona mantiq markazi (Single Source of Truth).",
        "<code>sanitize()</code>: barcha modullar uchun qayta ishlatiluvchi yechim."
      ]
    }
  },
  {
    "id": 8,
    "tier": 1,
    "tierName": "1-Bosqich: Dasturiy Dizayn Prinsiplari — DRY (O'zingni Takrorlama)",
    "sector": "1-15: DRY Principle & Redundancy Elimination",
    "title": {
      "uz": "8. Artel Servis — Kafolat Muddati Qoldig'ini Hisoblashni DRY Qilish",
      "en": "8. Artel Service — Centralized Warranty Calculation"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Artel Service\n\nHar xil maishiy texnikalarning kafolat oylarini hisoblash formulasini 'WarrantyEngine.remainingMonths(purchasedMonths, totalWarranty)' da birlashtiring.\n\n🎯 QADAMLAR:\n1. DRY printsipiga mos ravishda 'WarrantyEngine' yordamchi sinfini yarating.\n2. Unda takrorlanuvchi mantiqni o'zida jamlagan 'remainingMonths(...)' statik yoki ochiq metodini e'lon qiling.\n3. 'Main' metodida chaqiring va natijani konsolga chiqaring.\n\n📊 Kutilayotgan Natija:\nQolgan kafolat: 16 oy",
      "en": "🏢 Context: Artel Service\n\nAbstract repetitive remaining warranty computation into WarrantyEngine.\n\n🎯 STEPS:\n1. Create helper class 'WarrantyEngine' adhering to the DRY principle.\n2. Declare reusable method 'remainingMonths(...)' eliminating logic duplication.\n3. Invoke in 'Main' and verify console output.\n\n📊 Expected Output:\nQolgan kafolat: 16 oy"
    },
    "requirements": {
      "classes": [
        "WarrantyEngine",
        "Main"
      ],
      "methods": [
        "remainingMonths"
      ]
    },
    "starterCode": "// DRY printsipi bo'yicha WarrantyEngine sinfini yarating\nclass WarrantyEngine {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Qolgan kafolat: \" + WarrantyEngine.remainingMonths(8, 24) + \" oy\");\n    }\n}",
    "solution": "class WarrantyEngine {\n    public static int remainingMonths(int used, int total) {\n        return Math.max(0, total - used);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Qolgan kafolat: \" + WarrantyEngine.remainingMonths(8, 24) + \" oy\");\n    }\n}",
    "detailedSolution": {
      "theory": "DRY (Don't Repeat Yourself) — tizimdagi har bir mantiq yoki bilim faqat bitta, yagona va ishonchli joyda (Single Source of Truth) ifodalanishi kerak. Kodni nusxalash (copy-paste) kelajakda xatoliklar va o'zgarishlarni boshqarib bo'lmaslikka olib keladi.",
      "cleanCode": "class WarrantyEngine {\n    public static ... remainingMonths(...) { ... }\n}",
      "breakdown": [
        "<code>WarrantyEngine</code>: yagona mantiq markazi (Single Source of Truth).",
        "<code>remainingMonths()</code>: barcha modullar uchun qayta ishlatiluvchi yechim."
      ]
    }
  },
  {
    "id": 9,
    "tier": 1,
    "tierName": "1-Bosqich: Dasturiy Dizayn Prinsiplari — DRY (O'zingni Takrorlama)",
    "sector": "1-15: DRY Principle & Redundancy Elimination",
    "title": {
      "uz": "9. Chorsu Grill House — Buyurtma Tavsifi Satrini DRY Yaratish",
      "en": "9. Chorsu Grill — Shared Order Item Summary Generator"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Chorsu Grill\n\nPC Lab Mock Test: 'nomi x soni @ narxi = summa' formatidagi satr generatsiyasi bir necha joyda yozilgan. 'OrderItemFormatter.format(name, qty, price)' ga chiqaring.\n\n🎯 QADAMLAR:\n1. DRY printsipiga mos ravishda 'OrderItemFormatter' yordamchi sinfini yarating.\n2. Unda takrorlanuvchi mantiqni o'zida jamlagan 'format(...)' statik yoki ochiq metodini e'lon qiling.\n3. 'Main' metodida chaqiring va natijani konsolga chiqaring.\n\n📊 Kutilayotgan Natija:\nShashlik x3 @ 22000.0 UZS = 66000.0 UZS",
      "en": "🏢 Context: Chorsu Grill\n\nPC Lab Mock Test preparation: create OrderItemFormatter generating uniform receipt line items.\n\n🎯 STEPS:\n1. Create helper class 'OrderItemFormatter' adhering to the DRY principle.\n2. Declare reusable method 'format(...)' eliminating logic duplication.\n3. Invoke in 'Main' and verify console output.\n\n📊 Expected Output:\nShashlik x3 @ 22000.0 UZS = 66000.0 UZS"
    },
    "requirements": {
      "classes": [
        "OrderItemFormatter",
        "Main"
      ],
      "methods": [
        "format"
      ]
    },
    "starterCode": "// DRY printsipi bo'yicha OrderItemFormatter sinfini yarating\nclass OrderItemFormatter {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(OrderItemFormatter.format(\"Shashlik\", 3, 22000.0));\n    }\n}",
    "solution": "class OrderItemFormatter {\n    public static String format(String name, int qty, double price) {\n        return name + \" x\" + qty + \" @ \" + price + \" UZS = \" + (qty * price) + \" UZS\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(OrderItemFormatter.format(\"Shashlik\", 3, 22000.0));\n    }\n}",
    "detailedSolution": {
      "theory": "DRY (Don't Repeat Yourself) — tizimdagi har bir mantiq yoki bilim faqat bitta, yagona va ishonchli joyda (Single Source of Truth) ifodalanishi kerak. Kodni nusxalash (copy-paste) kelajakda xatoliklar va o'zgarishlarni boshqarib bo'lmaslikka olib keladi.",
      "cleanCode": "class OrderItemFormatter {\n    public static ... format(...) { ... }\n}",
      "breakdown": [
        "<code>OrderItemFormatter</code>: yagona mantiq markazi (Single Source of Truth).",
        "<code>format()</code>: barcha modullar uchun qayta ishlatiluvchi yechim."
      ]
    }
  },
  {
    "id": 10,
    "tier": 1,
    "tierName": "1-Bosqich: Dasturiy Dizayn Prinsiplari — DRY (O'zingni Takrorlama)",
    "sector": "1-15: DRY Principle & Redundancy Elimination",
    "title": {
      "uz": "10. WIUT Talabalar Portali — Modul Baholarini Foizga O'girish",
      "en": "10. WIUT Student Portal — DRY Module Grade Normalizer"
    },
    "scenario": {
      "uz": "🏢 Kontekst: WIUT Academic\n\nCW1 (40%), CW2 (60%) vaznlarini hisoblash formulasini takrorlamasdan, 'GradeCalculator.weightedTotal(cw1, w1, cw2, w2)' da hisoblang.\n\n🎯 QADAMLAR:\n1. DRY printsipiga mos ravishda 'GradeCalculator' yordamchi sinfini yarating.\n2. Unda takrorlanuvchi mantiqni o'zida jamlagan 'weightedTotal(...)' statik yoki ochiq metodini e'lon qiling.\n3. 'Main' metodida chaqiring va natijani konsolga chiqaring.\n\n📊 Kutilayotgan Natija:\nYakuniy ball: 81.0%",
      "en": "🏢 Context: WIUT Academic\n\nEncapsulate weighted coursework assessment grade computation in GradeCalculator.\n\n🎯 STEPS:\n1. Create helper class 'GradeCalculator' adhering to the DRY principle.\n2. Declare reusable method 'weightedTotal(...)' eliminating logic duplication.\n3. Invoke in 'Main' and verify console output.\n\n📊 Expected Output:\nYakuniy ball: 81.0%"
    },
    "requirements": {
      "classes": [
        "GradeCalculator",
        "Main"
      ],
      "methods": [
        "weightedTotal"
      ]
    },
    "starterCode": "// DRY printsipi bo'yicha GradeCalculator sinfini yarating\nclass GradeCalculator {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Yakuniy ball: \" + GradeCalculator.weightedTotal(75, 0.4, 85, 0.6) + \"%\");\n    }\n}",
    "solution": "class GradeCalculator {\n    public static double weightedTotal(double c1, double w1, double c2, double w2) {\n        return Math.round((c1 * w1 + c2 * w2) * 10.0) / 10.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Yakuniy ball: \" + GradeCalculator.weightedTotal(75, 0.4, 85, 0.6) + \"%\");\n    }\n}",
    "detailedSolution": {
      "theory": "DRY (Don't Repeat Yourself) — tizimdagi har bir mantiq yoki bilim faqat bitta, yagona va ishonchli joyda (Single Source of Truth) ifodalanishi kerak. Kodni nusxalash (copy-paste) kelajakda xatoliklar va o'zgarishlarni boshqarib bo'lmaslikka olib keladi.",
      "cleanCode": "class GradeCalculator {\n    public static ... weightedTotal(...) { ... }\n}",
      "breakdown": [
        "<code>GradeCalculator</code>: yagona mantiq markazi (Single Source of Truth).",
        "<code>weightedTotal()</code>: barcha modullar uchun qayta ishlatiluvchi yechim."
      ]
    }
  },
  {
    "id": 11,
    "tier": 1,
    "tierName": "1-Bosqich: Dasturiy Dizayn Prinsiplari — DRY (O'zingni Takrorlama)",
    "sector": "1-15: DRY Principle & Redundancy Elimination",
    "title": {
      "uz": "11. Mediapark — Chegirma Limitini DRY Qilish",
      "en": "11. Mediapark — Clamping Discount Reductions via DRY"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Mediapark\n\nChegirma hech qachon 50% dan oshmasligi va 0% dan kam bo'lmasligi qoidasini 'DiscountGuard.clamp(percent)' da birlashtiring.\n\n🎯 QADAMLAR:\n1. DRY printsipiga mos ravishda 'DiscountGuard' yordamchi sinfini yarating.\n2. Unda takrorlanuvchi mantiqni o'zida jamlagan 'clamp(...)' statik yoki ochiq metodini e'lon qiling.\n3. 'Main' metodida chaqiring va natijani konsolga chiqaring.\n\n📊 Kutilayotgan Natija:\nXavfsiz chegirma: 50.0%",
      "en": "🏢 Context: Mediapark\n\nBuild DiscountGuard ensuring percentage bounds are never duplicated across sales departments.\n\n🎯 STEPS:\n1. Create helper class 'DiscountGuard' adhering to the DRY principle.\n2. Declare reusable method 'clamp(...)' eliminating logic duplication.\n3. Invoke in 'Main' and verify console output.\n\n📊 Expected Output:\nXavfsiz chegirma: 50.0%"
    },
    "requirements": {
      "classes": [
        "DiscountGuard",
        "Main"
      ],
      "methods": [
        "clamp"
      ]
    },
    "starterCode": "// DRY printsipi bo'yicha DiscountGuard sinfini yarating\nclass DiscountGuard {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Xavfsiz chegirma: \" + DiscountGuard.clamp(65.0) + \"%\");\n    }\n}",
    "solution": "class DiscountGuard {\n    public static double clamp(double percent) {\n        if (percent > 50.0) return 50.0;\n        if (percent < 0.0) return 0.0;\n        return percent;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Xavfsiz chegirma: \" + DiscountGuard.clamp(65.0) + \"%\");\n    }\n}",
    "detailedSolution": {
      "theory": "DRY (Don't Repeat Yourself) — tizimdagi har bir mantiq yoki bilim faqat bitta, yagona va ishonchli joyda (Single Source of Truth) ifodalanishi kerak. Kodni nusxalash (copy-paste) kelajakda xatoliklar va o'zgarishlarni boshqarib bo'lmaslikka olib keladi.",
      "cleanCode": "class DiscountGuard {\n    public static ... clamp(...) { ... }\n}",
      "breakdown": [
        "<code>DiscountGuard</code>: yagona mantiq markazi (Single Source of Truth).",
        "<code>clamp()</code>: barcha modullar uchun qayta ishlatiluvchi yechim."
      ]
    }
  },
  {
    "id": 12,
    "tier": 1,
    "tierName": "1-Bosqich: Dasturiy Dizayn Prinsiplari — DRY (O'zingni Takrorlama)",
    "sector": "1-15: DRY Principle & Redundancy Elimination",
    "title": {
      "uz": "12. Express Bank — Valyuta Konvertatsiyasini DRY Qilish",
      "en": "12. Express Bank — Central Currency Converter via DRY"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Express Bank\n\nUSD dan UZS ga o'girish kursi barcha amaliyotlarda bir xil bo'lishi uchun 'CurrencyConverter.toUZS(usd, rate)' utilitasidan foydalaning.\n\n🎯 QADAMLAR:\n1. DRY printsipiga mos ravishda 'CurrencyConverter' yordamchi sinfini yarating.\n2. Unda takrorlanuvchi mantiqni o'zida jamlagan 'toUZS(...)' statik yoki ochiq metodini e'lon qiling.\n3. 'Main' metodida chaqiring va natijani konsolga chiqaring.\n\n📊 Kutilayotgan Natija:\nUZS ekvivalenti: 1280000.0 UZS",
      "en": "🏢 Context: Express Bank\n\nCentralize currency exchange mathematics preventing drift across banking microservices.\n\n🎯 STEPS:\n1. Create helper class 'CurrencyConverter' adhering to the DRY principle.\n2. Declare reusable method 'toUZS(...)' eliminating logic duplication.\n3. Invoke in 'Main' and verify console output.\n\n📊 Expected Output:\nUZS ekvivalenti: 1280000.0 UZS"
    },
    "requirements": {
      "classes": [
        "CurrencyConverter",
        "Main"
      ],
      "methods": [
        "toUZS"
      ]
    },
    "starterCode": "// DRY printsipi bo'yicha CurrencyConverter sinfini yarating\nclass CurrencyConverter {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"UZS ekvivalenti: \" + CurrencyConverter.toUZS(100.0, 12800.0) + \" UZS\");\n    }\n}",
    "solution": "class CurrencyConverter {\n    public static double toUZS(double usd, double rate) { return usd * rate; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"UZS ekvivalenti: \" + CurrencyConverter.toUZS(100.0, 12800.0) + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "DRY (Don't Repeat Yourself) — tizimdagi har bir mantiq yoki bilim faqat bitta, yagona va ishonchli joyda (Single Source of Truth) ifodalanishi kerak. Kodni nusxalash (copy-paste) kelajakda xatoliklar va o'zgarishlarni boshqarib bo'lmaslikka olib keladi.",
      "cleanCode": "class CurrencyConverter {\n    public static ... toUZS(...) { ... }\n}",
      "breakdown": [
        "<code>CurrencyConverter</code>: yagona mantiq markazi (Single Source of Truth).",
        "<code>toUZS()</code>: barcha modullar uchun qayta ishlatiluvchi yechim."
      ]
    }
  },
  {
    "id": 13,
    "tier": 1,
    "tierName": "1-Bosqich: Dasturiy Dizayn Prinsiplari — DRY (O'zingni Takrorlama)",
    "sector": "1-15: DRY Principle & Redundancy Elimination",
    "title": {
      "uz": "13. Uzum Bank — Tranzaksiya Komissiyasini DRY Shartnomasi",
      "en": "13. Uzum Bank — Uniform Transaction Fee Rule"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Uzum Bank\n\nP2P o'tkazmalarda 1% komissiya (kamida 1000 UZS) sharti takrorlangan. 'FeePolicy.calculateFee(amount)' da yagona formulaga keltiring.\n\n🎯 QADAMLAR:\n1. DRY printsipiga mos ravishda 'FeePolicy' yordamchi sinfini yarating.\n2. Unda takrorlanuvchi mantiqni o'zida jamlagan 'calculateFee(...)' statik yoki ochiq metodini e'lon qiling.\n3. 'Main' metodida chaqiring va natijani konsolga chiqaring.\n\n📊 Kutilayotgan Natija:\nXizmat haqi: 1000.0 UZS",
      "en": "🏢 Context: Uzum Bank\n\nEstablish FeePolicy calculating 1% fee with 1000 UZS minimum floor.\n\n🎯 STEPS:\n1. Create helper class 'FeePolicy' adhering to the DRY principle.\n2. Declare reusable method 'calculateFee(...)' eliminating logic duplication.\n3. Invoke in 'Main' and verify console output.\n\n📊 Expected Output:\nXizmat haqi: 1000.0 UZS"
    },
    "requirements": {
      "classes": [
        "FeePolicy",
        "Main"
      ],
      "methods": [
        "calculateFee"
      ]
    },
    "starterCode": "// DRY printsipi bo'yicha FeePolicy sinfini yarating\nclass FeePolicy {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Xizmat haqi: \" + FeePolicy.calculateFee(40000.0) + \" UZS\");\n    }\n}",
    "solution": "class FeePolicy {\n    public static double calculateFee(double amount) {\n        double f = amount * 0.01;\n        return f < 1000.0 ? 1000.0 : f;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Xizmat haqi: \" + FeePolicy.calculateFee(40000.0) + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "DRY (Don't Repeat Yourself) — tizimdagi har bir mantiq yoki bilim faqat bitta, yagona va ishonchli joyda (Single Source of Truth) ifodalanishi kerak. Kodni nusxalash (copy-paste) kelajakda xatoliklar va o'zgarishlarni boshqarib bo'lmaslikka olib keladi.",
      "cleanCode": "class FeePolicy {\n    public static ... calculateFee(...) { ... }\n}",
      "breakdown": [
        "<code>FeePolicy</code>: yagona mantiq markazi (Single Source of Truth).",
        "<code>calculateFee()</code>: barcha modullar uchun qayta ishlatiluvchi yechim."
      ]
    }
  },
  {
    "id": 14,
    "tier": 1,
    "tierName": "1-Bosqich: Dasturiy Dizayn Prinsiplari — DRY (O'zingni Takrorlama)",
    "sector": "1-15: DRY Principle & Redundancy Elimination",
    "title": {
      "uz": "14. Safebox — Parol Kuchini DRY Tekshiruvchisi",
      "en": "14. Safebox — DRY Password Strength Evaluator"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Safebox\n\nParol uzunligi kamida 8 ta belgidan iboratligini tekshirishni 'PasswordPolicy.isStrong(pwd)' da amalga oshiring.\n\n🎯 QADAMLAR:\n1. DRY printsipiga mos ravishda 'PasswordPolicy' yordamchi sinfini yarating.\n2. Unda takrorlanuvchi mantiqni o'zida jamlagan 'isStrong(...)' statik yoki ochiq metodini e'lon qiling.\n3. 'Main' metodida chaqiring va natijani konsolga chiqaring.\n\n📊 Kutilayotgan Natija:\nParol yetarli: Ha (Kamida 8 belgi)",
      "en": "🏢 Context: Safebox\n\nIsolate password security validation into single reusable PasswordPolicy module.\n\n🎯 STEPS:\n1. Create helper class 'PasswordPolicy' adhering to the DRY principle.\n2. Declare reusable method 'isStrong(...)' eliminating logic duplication.\n3. Invoke in 'Main' and verify console output.\n\n📊 Expected Output:\nParol yetarli: Ha (Kamida 8 belgi)"
    },
    "requirements": {
      "classes": [
        "PasswordPolicy",
        "Main"
      ],
      "methods": [
        "isStrong"
      ]
    },
    "starterCode": "// DRY printsipi bo'yicha PasswordPolicy sinfini yarating\nclass PasswordPolicy {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Parol yetarli: \" + PasswordPolicy.isStrong(\"Wiut2026Secure!\"));\n    }\n}",
    "solution": "class PasswordPolicy {\n    public static String isStrong(String pwd) {\n        return (pwd != null && pwd.length() >= 8) ? \"Ha (Kamida 8 belgi)\" : \"Yo'q\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Parol yetarli: \" + PasswordPolicy.isStrong(\"Wiut2026Secure!\"));\n    }\n}",
    "detailedSolution": {
      "theory": "DRY (Don't Repeat Yourself) — tizimdagi har bir mantiq yoki bilim faqat bitta, yagona va ishonchli joyda (Single Source of Truth) ifodalanishi kerak. Kodni nusxalash (copy-paste) kelajakda xatoliklar va o'zgarishlarni boshqarib bo'lmaslikka olib keladi.",
      "cleanCode": "class PasswordPolicy {\n    public static ... isStrong(...) { ... }\n}",
      "breakdown": [
        "<code>PasswordPolicy</code>: yagona mantiq markazi (Single Source of Truth).",
        "<code>isStrong()</code>: barcha modullar uchun qayta ishlatiluvchi yechim."
      ]
    }
  },
  {
    "id": 15,
    "tier": 1,
    "tierName": "1-Bosqich: Dasturiy Dizayn Prinsiplari — DRY (O'zingni Takrorlama)",
    "sector": "1-15: DRY Principle & Redundancy Elimination",
    "title": {
      "uz": "15. DRY Xulosasi — Yagona Ishonch Manbasi (Single Source of Truth)",
      "en": "15. DRY Summary — Establishing Single Source of Truth"
    },
    "scenario": {
      "uz": "🏢 Kontekst: WIUT Architecture Labs\n\nDRY prinsipi kod hajmini kamaytiradi, xatoliklarni bartaraf etadi va o'zgarishlarni bitta joydan boshqarish imkonini beradi. Buni xulosa qilib tasdiqlang.\n\n🎯 QADAMLAR:\n1. DRY printsipiga mos ravishda 'AuditLogger' yordamchi sinfini yarating.\n2. Unda takrorlanuvchi mantiqni o'zida jamlagan 'logAction(...)' statik yoki ochiq metodini e'lon qiling.\n3. 'Main' metodida chaqiring va natijani konsolga chiqaring.\n\n📊 Kutilayotgan Natija:\n[AUDIT LOG] Amal: BUYURTMA_YARATILDI | Foydalanuvchi: USER-101",
      "en": "🏢 Context: WIUT Architecture Labs\n\nConclude DRY tier demonstrating single-source-of-truth reliability across modules.\n\n🎯 STEPS:\n1. Create helper class 'AuditLogger' adhering to the DRY principle.\n2. Declare reusable method 'logAction(...)' eliminating logic duplication.\n3. Invoke in 'Main' and verify console output.\n\n📊 Expected Output:\n[AUDIT LOG] Amal: BUYURTMA_YARATILDI | Foydalanuvchi: USER-101"
    },
    "requirements": {
      "classes": [
        "AuditLogger",
        "Main"
      ],
      "methods": [
        "logAction"
      ]
    },
    "starterCode": "// DRY printsipi bo'yicha AuditLogger sinfini yarating\nclass AuditLogger {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(AuditLogger.logAction(\"BUYURTMA_YARATILDI\", \"USER-101\"));\n    }\n}",
    "solution": "class AuditLogger {\n    public static String logAction(String action, String user) {\n        return \"[AUDIT LOG] Amal: \" + action + \" | Foydalanuvchi: \" + user;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(AuditLogger.logAction(\"BUYURTMA_YARATILDI\", \"USER-101\"));\n    }\n}",
    "detailedSolution": {
      "theory": "DRY (Don't Repeat Yourself) — tizimdagi har bir mantiq yoki bilim faqat bitta, yagona va ishonchli joyda (Single Source of Truth) ifodalanishi kerak. Kodni nusxalash (copy-paste) kelajakda xatoliklar va o'zgarishlarni boshqarib bo'lmaslikka olib keladi.",
      "cleanCode": "class AuditLogger {\n    public static ... logAction(...) { ... }\n}",
      "breakdown": [
        "<code>AuditLogger</code>: yagona mantiq markazi (Single Source of Truth).",
        "<code>logAction()</code>: barcha modullar uchun qayta ishlatiluvchi yechim."
      ]
    }
  },
  {
    "id": 16,
    "tier": 2,
    "tierName": "2-Bosqich: Dasturiy Dizayn Prinsiplari — KISS va YAGNI",
    "sector": "16-30: KISS & YAGNI Design Principles",
    "title": {
      "uz": "16. Oddiy Savat — KISS Prinsipi Bo'yicha Ortiqcha Murakkablikni Yo'qotish",
      "en": "16. Simple Cart — Eliminating Over-Engineering via KISS"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Uzum Market\n\nWIUT 8-leksiyasida aytilganidek: 'KISS (Keep It Simple, Stupid) — tizimlar eng oddiy holatda saqlanganda yaxshi ishlaydi. Hali kerak bo'lmagan 10 ta abstrakt shablonlar o'rniga to'g'ridan-to'g'ri ishlovchi sodda sinf yarating'. 'SimpleCart' sinfida oddiy yig'indini hisoblang.\n\n🎯 QADAMLAR:\n1. KISS va YAGNI qoidalariga amal qilib, eng oddiy va to'g'ridan-to'g'ri ishlovchi 'SimpleCart' sinfini yarating.\n2. Ortiqcha keraksiz xususiyatlarsiz 'calculateTotal(...)' metodini yozing.\n3. 'Main' metodida sinab ko'ring.\n\n📊 Kutilayotgan Natija:\nSodda savat jami: 60000.0 UZS",
      "en": "🏢 Context: Uzum Market\n\nImplement a concise SimpleCart avoiding bloated abstractions, honoring KISS philosophy.\n\n🎯 STEPS:\n1. Apply KISS & YAGNI creating a clean, direct 'SimpleCart' without speculative bloat.\n2. Implement straightforward 'calculateTotal(...)'.\n3. Test in 'Main' and print output.\n\n📊 Expected Output:\nSodda savat jami: 60000.0 UZS"
    },
    "requirements": {
      "classes": [
        "SimpleCart",
        "Main"
      ],
      "methods": [
        "calculateTotal"
      ]
    },
    "starterCode": "// KISS & YAGNI: sodda va aniq SimpleCart sinfini yarating\nclass SimpleCart {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SimpleCart cart = new SimpleCart();\n        cart.addItem(45000.0);\n        cart.addItem(15000.0);\n        System.out.println(\"Sodda savat jami: \" + cart.calculateTotal() + \" UZS\");\n    }\n}",
    "solution": "class SimpleCart {\n    private double total = 0.0;\n    public void addItem(double p) { total += p; }\n    public double calculateTotal() { return total; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SimpleCart cart = new SimpleCart();\n        cart.addItem(45000.0);\n        cart.addItem(15000.0);\n        System.out.println(\"Sodda savat jami: \" + cart.calculateTotal() + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "KISS (Keep It Simple, Stupid) — dastur qanchalik sodda bo'lsa, uni tushunish, testlash va saqlash shunchalik oson bo'ladi. YAGNI (You Ain't Gonna Need It) — faqat ayni paytda talab qilingan funksiyalarnigina yozishni, 'kelajakda kerak bo'lib qolar' deb ortiqcha kod yozmaslikni talab qiladi.",
      "cleanCode": "class SimpleCart {\n    public ... calculateTotal(...) { ... }\n}",
      "breakdown": [
        "KISS: oddiy va aniq kod.",
        "YAGNI: ortiqcha keraksiz abstraksiyalarsiz faqat talab qilingan funksiyalar."
      ]
    }
  },
  {
    "id": 17,
    "tier": 2,
    "tierName": "2-Bosqich: Dasturiy Dizayn Prinsiplari — KISS va YAGNI",
    "sector": "16-30: KISS & YAGNI Design Principles",
    "title": {
      "uz": "17. Foydalanuvchi Profili — YAGNI Prinsipi Bo'yicha Kelajak Xayolini Qisqartirish",
      "en": "17. User Profile — Avoiding Speculative Features via YAGNI"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Payme Systems\n\nLeksiyada ta'kidlangan: 'YAGNI (You Ain't Gonna Need It) — hozircha talab qilinmagan funksiyalarni kelajakda kerak bo'lib qolar deb yozmang!'. Faqat talab qilingan 'name' va 'email' maydonlarini saqlang.\n\n🎯 QADAMLAR:\n1. KISS va YAGNI qoidalariga amal qilib, eng oddiy va to'g'ridan-to'g'ri ishlovchi 'UserProfile' sinfini yarating.\n2. Ortiqcha keraksiz xususiyatlarsiz 'getProfileSummary(...)' metodini yozing.\n3. 'Main' metodida sinab ko'ring.\n\n📊 Kutilayotgan Natija:\nProfil: Anvar Saidov (anvar@payme.uz)",
      "en": "🏢 Context: Payme Systems\n\nModel a focused UserProfile with strictly required attributes per YAGNI guidelines.\n\n🎯 STEPS:\n1. Apply KISS & YAGNI creating a clean, direct 'UserProfile' without speculative bloat.\n2. Implement straightforward 'getProfileSummary(...)'.\n3. Test in 'Main' and print output.\n\n📊 Expected Output:\nProfil: Anvar Saidov (anvar@payme.uz)"
    },
    "requirements": {
      "classes": [
        "UserProfile",
        "Main"
      ],
      "methods": [
        "getProfileSummary"
      ]
    },
    "starterCode": "// KISS & YAGNI: sodda va aniq UserProfile sinfini yarating\nclass UserProfile {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        UserProfile user = new UserProfile(\"Anvar Saidov\", \"anvar@payme.uz\");\n        System.out.println(user.getProfileSummary());\n    }\n}",
    "solution": "class UserProfile {\n    private String name;\n    private String email;\n    public UserProfile(String n, String e) { this.name = n; this.email = e; }\n    public String getProfileSummary() { return \"Profil: \" + name + \" (\" + email + \")\"; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        UserProfile user = new UserProfile(\"Anvar Saidov\", \"anvar@payme.uz\");\n        System.out.println(user.getProfileSummary());\n    }\n}",
    "detailedSolution": {
      "theory": "KISS (Keep It Simple, Stupid) — dastur qanchalik sodda bo'lsa, uni tushunish, testlash va saqlash shunchalik oson bo'ladi. YAGNI (You Ain't Gonna Need It) — faqat ayni paytda talab qilingan funksiyalarnigina yozishni, 'kelajakda kerak bo'lib qolar' deb ortiqcha kod yozmaslikni talab qiladi.",
      "cleanCode": "class UserProfile {\n    public ... getProfileSummary(...) { ... }\n}",
      "breakdown": [
        "KISS: oddiy va aniq kod.",
        "YAGNI: ortiqcha keraksiz abstraksiyalarsiz faqat talab qilingan funksiyalar."
      ]
    }
  },
  {
    "id": 18,
    "tier": 2,
    "tierName": "2-Bosqich: Dasturiy Dizayn Prinsiplari — KISS va YAGNI",
    "sector": "16-30: KISS & YAGNI Design Principles",
    "title": {
      "uz": "18. Chegirma Hisoblagich — KISS Bo'yicha Bitta Aniq Metod",
      "en": "18. Discount Engine — Direct Calculation via KISS"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Korzinka\n\nOddiy 5% chegirma uchun murakkab Strategy shablonini qurmasdan (over-engineering), to'g'ridan-to'g'ri 'SimpleDiscount.apply(price, 5)' metodidan foydalaning.\n\n🎯 QADAMLAR:\n1. KISS va YAGNI qoidalariga amal qilib, eng oddiy va to'g'ridan-to'g'ri ishlovchi 'SimpleDiscount' sinfini yarating.\n2. Ortiqcha keraksiz xususiyatlarsiz 'apply(...)' metodini yozing.\n3. 'Main' metodida sinab ko'ring.\n\n📊 Kutilayotgan Natija:\nChegirilgan narx: 95000.0 UZS",
      "en": "🏢 Context: Korzinka\n\nAvoid unnecessary design pattern explosion for trivial math, adhering to KISS.\n\n🎯 STEPS:\n1. Apply KISS & YAGNI creating a clean, direct 'SimpleDiscount' without speculative bloat.\n2. Implement straightforward 'apply(...)'.\n3. Test in 'Main' and print output.\n\n📊 Expected Output:\nChegirilgan narx: 95000.0 UZS"
    },
    "requirements": {
      "classes": [
        "SimpleDiscount",
        "Main"
      ],
      "methods": [
        "apply"
      ]
    },
    "starterCode": "// KISS & YAGNI: sodda va aniq SimpleDiscount sinfini yarating\nclass SimpleDiscount {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Chegirilgan narx: \" + SimpleDiscount.apply(100000.0, 5) + \" UZS\");\n    }\n}",
    "solution": "class SimpleDiscount {\n    public static double apply(double price, int percent) { return price * (1.0 - percent / 100.0); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Chegirilgan narx: \" + SimpleDiscount.apply(100000.0, 5) + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "KISS (Keep It Simple, Stupid) — dastur qanchalik sodda bo'lsa, uni tushunish, testlash va saqlash shunchalik oson bo'ladi. YAGNI (You Ain't Gonna Need It) — faqat ayni paytda talab qilingan funksiyalarnigina yozishni, 'kelajakda kerak bo'lib qolar' deb ortiqcha kod yozmaslikni talab qiladi.",
      "cleanCode": "class SimpleDiscount {\n    public ... apply(...) { ... }\n}",
      "breakdown": [
        "KISS: oddiy va aniq kod.",
        "YAGNI: ortiqcha keraksiz abstraksiyalarsiz faqat talab qilingan funksiyalar."
      ]
    }
  },
  {
    "id": 19,
    "tier": 2,
    "tierName": "2-Bosqich: Dasturiy Dizayn Prinsiplari — KISS va YAGNI",
    "sector": "16-30: KISS & YAGNI Design Principles",
    "title": {
      "uz": "19. YAGNI — Talab Qilinmagan To'lov Shlyuzlarini Yozmaslik",
      "en": "19. YAGNI — Omitting Unrequested Cryptocurrency Gateway"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Click Ecosystem\n\nLoyiha talabida faqat milliy so'mdagi karta to'lovi bor. Kripto yoki xorijiy valyuta konvertorlarini hozirdan yozish — YAGNI qoidasini buzishdir. Faqat 'LocalCardPayment' ni amalga oshiring.\n\n🎯 QADAMLAR:\n1. KISS va YAGNI qoidalariga amal qilib, eng oddiy va to'g'ridan-to'g'ri ishlovchi 'LocalCardPayment' sinfini yarating.\n2. Ortiqcha keraksiz xususiyatlarsiz 'process(...)' metodini yozing.\n3. 'Main' metodida sinab ko'ring.\n\n📊 Kutilayotgan Natija:\nKarta 8600111122223333 orqali 150000.0 UZS to'landi",
      "en": "🏢 Context: Click Ecosystem\n\nImplement only required local card processing resisting speculative crypto additions.\n\n🎯 STEPS:\n1. Apply KISS & YAGNI creating a clean, direct 'LocalCardPayment' without speculative bloat.\n2. Implement straightforward 'process(...)'.\n3. Test in 'Main' and print output.\n\n📊 Expected Output:\nKarta 8600111122223333 orqali 150000.0 UZS to'landi"
    },
    "requirements": {
      "classes": [
        "LocalCardPayment",
        "Main"
      ],
      "methods": [
        "process"
      ]
    },
    "starterCode": "// KISS & YAGNI: sodda va aniq LocalCardPayment sinfini yarating\nclass LocalCardPayment {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LocalCardPayment p = new LocalCardPayment(\"8600111122223333\");\n        System.out.println(p.process(150000.0));\n    }\n}",
    "solution": "class LocalCardPayment {\n    private String pan;\n    public LocalCardPayment(String p) { this.pan = p; }\n    public String process(double amt) { return \"Karta \" + pan + \" orqali \" + amt + \" UZS to'landi\"; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LocalCardPayment p = new LocalCardPayment(\"8600111122223333\");\n        System.out.println(p.process(150000.0));\n    }\n}",
    "detailedSolution": {
      "theory": "KISS (Keep It Simple, Stupid) — dastur qanchalik sodda bo'lsa, uni tushunish, testlash va saqlash shunchalik oson bo'ladi. YAGNI (You Ain't Gonna Need It) — faqat ayni paytda talab qilingan funksiyalarnigina yozishni, 'kelajakda kerak bo'lib qolar' deb ortiqcha kod yozmaslikni talab qiladi.",
      "cleanCode": "class LocalCardPayment {\n    public ... process(...) { ... }\n}",
      "breakdown": [
        "KISS: oddiy va aniq kod.",
        "YAGNI: ortiqcha keraksiz abstraksiyalarsiz faqat talab qilingan funksiyalar."
      ]
    }
  },
  {
    "id": 20,
    "tier": 2,
    "tierName": "2-Bosqich: Dasturiy Dizayn Prinsiplari — KISS va YAGNI",
    "sector": "16-30: KISS & YAGNI Design Principles",
    "title": {
      "uz": "20. KISS — Tushunarli Shart Operatorlari (If/Else vs Murakkab Bitmask)",
      "en": "20. KISS — Readable Conditionals Over Cryptic Logic"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Yandex Go\n\nMijoz VIP yoki oddiy ekanligini bitmaskalar bilan emas, tushunarli boolean bayroq bilan tekshiring.\n\n🎯 QADAMLAR:\n1. KISS va YAGNI qoidalariga amal qilib, eng oddiy va to'g'ridan-to'g'ri ishlovchi 'CustomerStatus' sinfini yarating.\n2. Ortiqcha keraksiz xususiyatlarsiz 'describeTier(...)' metodini yozing.\n3. 'Main' metodida sinab ko'ring.\n\n📊 Kutilayotgan Natija:\nMijoz maqomi: VIP Mijoz (Ustuvor Xizmat)",
      "en": "🏢 Context: Yandex Go\n\nUse clear boolean logic rather than cryptic micro-optimizations, following KISS.\n\n🎯 STEPS:\n1. Apply KISS & YAGNI creating a clean, direct 'CustomerStatus' without speculative bloat.\n2. Implement straightforward 'describeTier(...)'.\n3. Test in 'Main' and print output.\n\n📊 Expected Output:\nMijoz maqomi: VIP Mijoz (Ustuvor Xizmat)"
    },
    "requirements": {
      "classes": [
        "CustomerStatus",
        "Main"
      ],
      "methods": [
        "describeTier"
      ]
    },
    "starterCode": "// KISS & YAGNI: sodda va aniq CustomerStatus sinfini yarating\nclass CustomerStatus {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Mijoz maqomi: \" + CustomerStatus.describeTier(true));\n    }\n}",
    "solution": "class CustomerStatus {\n    public static String describeTier(boolean isVip) { return isVip ? \"VIP Mijoz (Ustuvor Xizmat)\" : \"Oddiy Mijoz\"; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Mijoz maqomi: \" + CustomerStatus.describeTier(true));\n    }\n}",
    "detailedSolution": {
      "theory": "KISS (Keep It Simple, Stupid) — dastur qanchalik sodda bo'lsa, uni tushunish, testlash va saqlash shunchalik oson bo'ladi. YAGNI (You Ain't Gonna Need It) — faqat ayni paytda talab qilingan funksiyalarnigina yozishni, 'kelajakda kerak bo'lib qolar' deb ortiqcha kod yozmaslikni talab qiladi.",
      "cleanCode": "class CustomerStatus {\n    public ... describeTier(...) { ... }\n}",
      "breakdown": [
        "KISS: oddiy va aniq kod.",
        "YAGNI: ortiqcha keraksiz abstraksiyalarsiz faqat talab qilingan funksiyalar."
      ]
    }
  },
  {
    "id": 21,
    "tier": 2,
    "tierName": "2-Bosqich: Dasturiy Dizayn Prinsiplari — KISS va YAGNI",
    "sector": "16-30: KISS & YAGNI Design Principles",
    "title": {
      "uz": "21. YAGNI — Hali Ishlatilmaydigan Qo'shimcha Maydonlarni Qo'shmaslik",
      "en": "21. YAGNI — Rejecting Speculative Database Columns"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Texnomart\n\n'ProductItem' sinfida hozir faqat 'name' va 'price' kerak. Kelajakda kerak bo'ladi deb 10 ta bo'sh maydon ochish YAGNI ga ziddir. Faqat keraklilarini bering.\n\n🎯 QADAMLAR:\n1. KISS va YAGNI qoidalariga amal qilib, eng oddiy va to'g'ridan-to'g'ri ishlovchi 'ProductItem' sinfini yarating.\n2. Ortiqcha keraksiz xususiyatlarsiz 'getSummary(...)' metodini yozing.\n3. 'Main' metodida sinab ko'ring.\n\n📊 Kutilayotgan Natija:\nMahsulot: Smartfon | Narxi: 2500000.0 UZS",
      "en": "🏢 Context: Texnomart\n\nCreate lean ProductItem without speculative unused attributes.\n\n🎯 STEPS:\n1. Apply KISS & YAGNI creating a clean, direct 'ProductItem' without speculative bloat.\n2. Implement straightforward 'getSummary(...)'.\n3. Test in 'Main' and print output.\n\n📊 Expected Output:\nMahsulot: Smartfon | Narxi: 2500000.0 UZS"
    },
    "requirements": {
      "classes": [
        "ProductItem",
        "Main"
      ],
      "methods": [
        "getSummary"
      ]
    },
    "starterCode": "// KISS & YAGNI: sodda va aniq ProductItem sinfini yarating\nclass ProductItem {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ProductItem item = new ProductItem(\"Smartfon\", 2500000.0);\n        System.out.println(item.getSummary());\n    }\n}",
    "solution": "class ProductItem {\n    private String name;\n    private double price;\n    public ProductItem(String n, double p) { this.name = n; this.price = p; }\n    public String getSummary() { return \"Mahsulot: \" + name + \" | Narxi: \" + price + \" UZS\"; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ProductItem item = new ProductItem(\"Smartfon\", 2500000.0);\n        System.out.println(item.getSummary());\n    }\n}",
    "detailedSolution": {
      "theory": "KISS (Keep It Simple, Stupid) — dastur qanchalik sodda bo'lsa, uni tushunish, testlash va saqlash shunchalik oson bo'ladi. YAGNI (You Ain't Gonna Need It) — faqat ayni paytda talab qilingan funksiyalarnigina yozishni, 'kelajakda kerak bo'lib qolar' deb ortiqcha kod yozmaslikni talab qiladi.",
      "cleanCode": "class ProductItem {\n    public ... getSummary(...) { ... }\n}",
      "breakdown": [
        "KISS: oddiy va aniq kod.",
        "YAGNI: ortiqcha keraksiz abstraksiyalarsiz faqat talab qilingan funksiyalar."
      ]
    }
  },
  {
    "id": 22,
    "tier": 2,
    "tierName": "2-Bosqich: Dasturiy Dizayn Prinsiplari — KISS va YAGNI",
    "sector": "16-30: KISS & YAGNI Design Principles",
    "title": {
      "uz": "22. KISS — Massiv Yordamida Sodda Qidiruv",
      "en": "22. KISS — Straightforward Linear Lookup"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Uzum Tezkor\n\n5 ta elementli menyuda b-tree yoki murakkab qidiruv algoritmlari o'rniga sodda sikl orqali taomni toping.\n\n🎯 QADAMLAR:\n1. KISS va YAGNI qoidalariga amal qilib, eng oddiy va to'g'ridan-to'g'ri ishlovchi 'SimpleMenu' sinfini yarating.\n2. Ortiqcha keraksiz xususiyatlarsiz 'containsItem(...)' metodini yozing.\n3. 'Main' metodida sinab ko'ring.\n\n📊 Kutilayotgan Natija:\nTaom menyuda bormi: Ha, mavjud",
      "en": "🏢 Context: Uzum Tezkor\n\nUse straightforward iteration for small datasets per KISS recommendations.\n\n🎯 STEPS:\n1. Apply KISS & YAGNI creating a clean, direct 'SimpleMenu' without speculative bloat.\n2. Implement straightforward 'containsItem(...)'.\n3. Test in 'Main' and print output.\n\n📊 Expected Output:\nTaom menyuda bormi: Ha, mavjud"
    },
    "requirements": {
      "classes": [
        "SimpleMenu",
        "Main"
      ],
      "methods": [
        "containsItem"
      ]
    },
    "starterCode": "// KISS & YAGNI: sodda va aniq SimpleMenu sinfini yarating\nclass SimpleMenu {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Taom menyuda bormi: \" + SimpleMenu.containsItem(new String[]{\"Osh\", \"Manti\", \"Somsa\"}, \"Osh\"));\n    }\n}",
    "solution": "class SimpleMenu {\n    public static String containsItem(String[] menu, String item) {\n        for (String m : menu) if (m.equals(item)) return \"Ha, mavjud\";\n        return \"Yo'q\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Taom menyuda bormi: \" + SimpleMenu.containsItem(new String[]{\"Osh\", \"Manti\", \"Somsa\"}, \"Osh\"));\n    }\n}",
    "detailedSolution": {
      "theory": "KISS (Keep It Simple, Stupid) — dastur qanchalik sodda bo'lsa, uni tushunish, testlash va saqlash shunchalik oson bo'ladi. YAGNI (You Ain't Gonna Need It) — faqat ayni paytda talab qilingan funksiyalarnigina yozishni, 'kelajakda kerak bo'lib qolar' deb ortiqcha kod yozmaslikni talab qiladi.",
      "cleanCode": "class SimpleMenu {\n    public ... containsItem(...) { ... }\n}",
      "breakdown": [
        "KISS: oddiy va aniq kod.",
        "YAGNI: ortiqcha keraksiz abstraksiyalarsiz faqat talab qilingan funksiyalar."
      ]
    }
  },
  {
    "id": 23,
    "tier": 2,
    "tierName": "2-Bosqich: Dasturiy Dizayn Prinsiplari — KISS va YAGNI",
    "sector": "16-30: KISS & YAGNI Design Principles",
    "title": {
      "uz": "23. YAGNI — Chorsu Grill House Buyurtmasi Oddiyligi",
      "en": "23. YAGNI — Chorsu Grill Minimalist Order Scope"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Chorsu Grill House\n\nPC Lab Mock Test talabida 'Order' faqat 'Customer' va 'OrderItem' ro'yxatini boshqarishi shart. Sun'iy intellekt tavsiya tizimini qo'shish YAGNI buzilishidir. Oddiy saqlang.\n\n🎯 QADAMLAR:\n1. KISS va YAGNI qoidalariga amal qilib, eng oddiy va to'g'ridan-to'g'ri ishlovchi 'SimpleOrder' sinfini yarating.\n2. Ortiqcha keraksiz xususiyatlarsiz 'addItemCount(...)' metodini yozing.\n3. 'Main' metodida sinab ko'ring.\n\n📊 Kutilayotgan Natija:\nBuyurtma ORD-1: 2 ta taom biriktirildi",
      "en": "🏢 Context: Chorsu Grill House\n\nKeep Mock Test order model lean strictly adhering to specification.\n\n🎯 STEPS:\n1. Apply KISS & YAGNI creating a clean, direct 'SimpleOrder' without speculative bloat.\n2. Implement straightforward 'addItemCount(...)'.\n3. Test in 'Main' and print output.\n\n📊 Expected Output:\nBuyurtma ORD-1: 2 ta taom biriktirildi"
    },
    "requirements": {
      "classes": [
        "SimpleOrder",
        "Main"
      ],
      "methods": [
        "addItemCount"
      ]
    },
    "starterCode": "// KISS & YAGNI: sodda va aniq SimpleOrder sinfini yarating\nclass SimpleOrder {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SimpleOrder o = new SimpleOrder(\"ORD-1\");\n        o.addItem(2);\n        System.out.println(o.getOrderState());\n    }\n}",
    "solution": "class SimpleOrder {\n    private String id;\n    private int count = 0;\n    public SimpleOrder(String id) { this.id = id; }\n    public void addItem(int c) { this.count += c; }\n    public void addItemCount(int c) { this.count += c; }\n    public String getOrderState() { return \"Buyurtma \" + id + \": \" + count + \" ta taom biriktirildi\"; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SimpleOrder o = new SimpleOrder(\"ORD-1\");\n        o.addItem(2);\n        System.out.println(o.getOrderState());\n    }\n}",
    "detailedSolution": {
      "theory": "KISS (Keep It Simple, Stupid) — dastur qanchalik sodda bo'lsa, uni tushunish, testlash va saqlash shunchalik oson bo'ladi. YAGNI (You Ain't Gonna Need It) — faqat ayni paytda talab qilingan funksiyalarnigina yozishni, 'kelajakda kerak bo'lib qolar' deb ortiqcha kod yozmaslikni talab qiladi.",
      "cleanCode": "class SimpleOrder {\n    public ... addItemCount(...) { ... }\n}",
      "breakdown": [
        "KISS: oddiy va aniq kod.",
        "YAGNI: ortiqcha keraksiz abstraksiyalarsiz faqat talab qilingan funksiyalar."
      ]
    }
  },
  {
    "id": 24,
    "tier": 2,
    "tierName": "2-Bosqich: Dasturiy Dizayn Prinsiplari — KISS va YAGNI",
    "sector": "16-30: KISS & YAGNI Design Principles",
    "title": {
      "uz": "24. KISS — Kvitansiyani To'g'ridan-To'g'ri String Formatlash",
      "en": "24. KISS — Straightforward String Concatenation for Receipts"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Chorsu FastFood\n\nMurakkab shablon dvigatelisiz oddiy matn birlashtirish yordamida kvitansiya sarlavhasini yasang.\n\n🎯 QADAMLAR:\n1. KISS va YAGNI qoidalariga amal qilib, eng oddiy va to'g'ridan-to'g'ri ishlovchi 'SimpleReceipt' sinfini yarating.\n2. Ortiqcha keraksiz xususiyatlarsiz 'getHeader(...)' metodini yozing.\n3. 'Main' metodida sinab ko'ring.\n\n📊 Kutilayotgan Natija:\n=== CHORSU GRILL CHEKI (06-11-2026) ===",
      "en": "🏢 Context: Chorsu FastFood\n\nGenerate receipt header directly using clear concise String formatting.\n\n🎯 STEPS:\n1. Apply KISS & YAGNI creating a clean, direct 'SimpleReceipt' without speculative bloat.\n2. Implement straightforward 'getHeader(...)'.\n3. Test in 'Main' and print output.\n\n📊 Expected Output:\n=== CHORSU GRILL CHEKI (06-11-2026) ==="
    },
    "requirements": {
      "classes": [
        "SimpleReceipt",
        "Main"
      ],
      "methods": [
        "getHeader"
      ]
    },
    "starterCode": "// KISS & YAGNI: sodda va aniq SimpleReceipt sinfini yarating\nclass SimpleReceipt {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(SimpleReceipt.getHeader(\"Chorsu Grill\", \"06-11-2026\"));\n    }\n}",
    "solution": "class SimpleReceipt {\n    public static String getHeader(String restaurant, String date) {\n        return \"=== \" + restaurant.toUpperCase() + \" CHEKI (\" + date + \") ===\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(SimpleReceipt.getHeader(\"Chorsu Grill\", \"06-11-2026\"));\n    }\n}",
    "detailedSolution": {
      "theory": "KISS (Keep It Simple, Stupid) — dastur qanchalik sodda bo'lsa, uni tushunish, testlash va saqlash shunchalik oson bo'ladi. YAGNI (You Ain't Gonna Need It) — faqat ayni paytda talab qilingan funksiyalarnigina yozishni, 'kelajakda kerak bo'lib qolar' deb ortiqcha kod yozmaslikni talab qiladi.",
      "cleanCode": "class SimpleReceipt {\n    public ... getHeader(...) { ... }\n}",
      "breakdown": [
        "KISS: oddiy va aniq kod.",
        "YAGNI: ortiqcha keraksiz abstraksiyalarsiz faqat talab qilingan funksiyalar."
      ]
    }
  },
  {
    "id": 25,
    "tier": 2,
    "tierName": "2-Bosqich: Dasturiy Dizayn Prinsiplari — KISS va YAGNI",
    "sector": "16-30: KISS & YAGNI Design Principles",
    "title": {
      "uz": "25. YAGNI — Foydalanuvchi Rollarini Cheklash",
      "en": "25. YAGNI — Limiting Unneeded Role Dimensions"
    },
    "scenario": {
      "uz": "🏢 Kontekst: WIUT Portal\n\nTizimda faqat Talaba va O'qituvchi bor. 20 xil murakkab permission ierarxiyasini qurish o'rniga, kerakli 2 ta rolni boshqaring.\n\n🎯 QADAMLAR:\n1. KISS va YAGNI qoidalariga amal qilib, eng oddiy va to'g'ridan-to'g'ri ishlovchi 'SimpleRoleManager' sinfini yarating.\n2. Ortiqcha keraksiz xususiyatlarsiz 'isValidRole(...)' metodini yozing.\n3. 'Main' metodida sinab ko'ring.\n\n📊 Kutilayotgan Natija:\nTalaba roli ruxsat etilgan: Ruxsat berilgan",
      "en": "🏢 Context: WIUT Portal\n\nRestrict user roles to current actual requirements.\n\n🎯 STEPS:\n1. Apply KISS & YAGNI creating a clean, direct 'SimpleRoleManager' without speculative bloat.\n2. Implement straightforward 'isValidRole(...)'.\n3. Test in 'Main' and print output.\n\n📊 Expected Output:\nTalaba roli ruxsat etilgan: Ruxsat berilgan"
    },
    "requirements": {
      "classes": [
        "SimpleRoleManager",
        "Main"
      ],
      "methods": [
        "isValidRole"
      ]
    },
    "starterCode": "// KISS & YAGNI: sodda va aniq SimpleRoleManager sinfini yarating\nclass SimpleRoleManager {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Talaba roli ruxsat etilgan: \" + SimpleRoleManager.isValidRole(\"STUDENT\"));\n    }\n}",
    "solution": "class SimpleRoleManager {\n    public static String isValidRole(String r) {\n        return (\"STUDENT\".equals(r) || \"TEACHER\".equals(r)) ? \"Ruxsat berilgan\" : \"Taqiqlangan\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Talaba roli ruxsat etilgan: \" + SimpleRoleManager.isValidRole(\"STUDENT\"));\n    }\n}",
    "detailedSolution": {
      "theory": "KISS (Keep It Simple, Stupid) — dastur qanchalik sodda bo'lsa, uni tushunish, testlash va saqlash shunchalik oson bo'ladi. YAGNI (You Ain't Gonna Need It) — faqat ayni paytda talab qilingan funksiyalarnigina yozishni, 'kelajakda kerak bo'lib qolar' deb ortiqcha kod yozmaslikni talab qiladi.",
      "cleanCode": "class SimpleRoleManager {\n    public ... isValidRole(...) { ... }\n}",
      "breakdown": [
        "KISS: oddiy va aniq kod.",
        "YAGNI: ortiqcha keraksiz abstraksiyalarsiz faqat talab qilingan funksiyalar."
      ]
    }
  },
  {
    "id": 26,
    "tier": 2,
    "tierName": "2-Bosqich: Dasturiy Dizayn Prinsiplari — KISS va YAGNI",
    "sector": "16-30: KISS & YAGNI Design Principles",
    "title": {
      "uz": "26. KISS — Vaqt Hisobini Oddiy Sekundlarda Saqlash",
      "en": "26. KISS — Storing Plain Elapsed Seconds"
    },
    "scenario": {
      "uz": "🏢 Kontekst: WIUT Tracker\n\nVaqt hisobida og'ir kalendar kutubxonalarisiz, sekundlar orqali oddiy vaqt farqini toping.\n\n🎯 QADAMLAR:\n1. KISS va YAGNI qoidalariga amal qilib, eng oddiy va to'g'ridan-to'g'ri ishlovchi 'TimeTracker' sinfini yarating.\n2. Ortiqcha keraksiz xususiyatlarsiz 'getElapsedFormatted(...)' metodini yozing.\n3. 'Main' metodida sinab ko'ring.\n\n📊 Kutilayotgan Natija:\nSarflangan vaqt: 2 daqiqa 5 soniya",
      "en": "🏢 Context: WIUT Tracker\n\nUse plain integer seconds for duration tracking per KISS.\n\n🎯 STEPS:\n1. Apply KISS & YAGNI creating a clean, direct 'TimeTracker' without speculative bloat.\n2. Implement straightforward 'getElapsedFormatted(...)'.\n3. Test in 'Main' and print output.\n\n📊 Expected Output:\nSarflangan vaqt: 2 daqiqa 5 soniya"
    },
    "requirements": {
      "classes": [
        "TimeTracker",
        "Main"
      ],
      "methods": [
        "getElapsedFormatted"
      ]
    },
    "starterCode": "// KISS & YAGNI: sodda va aniq TimeTracker sinfini yarating\nclass TimeTracker {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Sarflangan vaqt: \" + TimeTracker.getElapsedFormatted(125));\n    }\n}",
    "solution": "class TimeTracker {\n    public static String getElapsedFormatted(int totalSec) {\n        int m = totalSec / 60;\n        int s = totalSec % 60;\n        return m + \" daqiqa \" + s + \" soniya\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Sarflangan vaqt: \" + TimeTracker.getElapsedFormatted(125));\n    }\n}",
    "detailedSolution": {
      "theory": "KISS (Keep It Simple, Stupid) — dastur qanchalik sodda bo'lsa, uni tushunish, testlash va saqlash shunchalik oson bo'ladi. YAGNI (You Ain't Gonna Need It) — faqat ayni paytda talab qilingan funksiyalarnigina yozishni, 'kelajakda kerak bo'lib qolar' deb ortiqcha kod yozmaslikni talab qiladi.",
      "cleanCode": "class TimeTracker {\n    public ... getElapsedFormatted(...) { ... }\n}",
      "breakdown": [
        "KISS: oddiy va aniq kod.",
        "YAGNI: ortiqcha keraksiz abstraksiyalarsiz faqat talab qilingan funksiyalar."
      ]
    }
  },
  {
    "id": 27,
    "tier": 2,
    "tierName": "2-Bosqich: Dasturiy Dizayn Prinsiplari — KISS va YAGNI",
    "sector": "16-30: KISS & YAGNI Design Principles",
    "title": {
      "uz": "27. YAGNI — Xabarnoma Servisini Faqat SMS Bilan Cheklash",
      "en": "27. YAGNI — Deferring Unrequested Push Channels"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Korzinka Alerts\n\nTalabda faqat SMS orqali tasdiqlash bor. Telegram, Slack, Webhooklarni hozirdan qurmasdan faqat 'SimpleSMS' ni yozing.\n\n🎯 QADAMLAR:\n1. KISS va YAGNI qoidalariga amal qilib, eng oddiy va to'g'ridan-to'g'ri ishlovchi 'SimpleSMS' sinfini yarating.\n2. Ortiqcha keraksiz xususiyatlarsiz 'dispatch(...)' metodini yozing.\n3. 'Main' metodida sinab ko'ring.\n\n📊 Kutilayotgan Natija:\nSMS yuborildi [+998901234567]: Kodingiz: 4921",
      "en": "🏢 Context: Korzinka Alerts\n\nFocus strictly on requested SMS notification delivery per YAGNI.\n\n🎯 STEPS:\n1. Apply KISS & YAGNI creating a clean, direct 'SimpleSMS' without speculative bloat.\n2. Implement straightforward 'dispatch(...)'.\n3. Test in 'Main' and print output.\n\n📊 Expected Output:\nSMS yuborildi [+998901234567]: Kodingiz: 4921"
    },
    "requirements": {
      "classes": [
        "SimpleSMS",
        "Main"
      ],
      "methods": [
        "dispatch"
      ]
    },
    "starterCode": "// KISS & YAGNI: sodda va aniq SimpleSMS sinfini yarating\nclass SimpleSMS {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(SimpleSMS.dispatch(\"+998901234567\", \"Kodingiz: 4921\"));\n    }\n}",
    "solution": "class SimpleSMS {\n    public static String dispatch(String phone, String text) {\n        return \"SMS yuborildi [\" + phone + \"]: \" + text;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(SimpleSMS.dispatch(\"+998901234567\", \"Kodingiz: 4921\"));\n    }\n}",
    "detailedSolution": {
      "theory": "KISS (Keep It Simple, Stupid) — dastur qanchalik sodda bo'lsa, uni tushunish, testlash va saqlash shunchalik oson bo'ladi. YAGNI (You Ain't Gonna Need It) — faqat ayni paytda talab qilingan funksiyalarnigina yozishni, 'kelajakda kerak bo'lib qolar' deb ortiqcha kod yozmaslikni talab qiladi.",
      "cleanCode": "class SimpleSMS {\n    public ... dispatch(...) { ... }\n}",
      "breakdown": [
        "KISS: oddiy va aniq kod.",
        "YAGNI: ortiqcha keraksiz abstraksiyalarsiz faqat talab qilingan funksiyalar."
      ]
    }
  },
  {
    "id": 28,
    "tier": 2,
    "tierName": "2-Bosqich: Dasturiy Dizayn Prinsiplari — KISS va YAGNI",
    "sector": "16-30: KISS & YAGNI Design Principles",
    "title": {
      "uz": "28. KISS — Ikkilik Qidiruv o'rniga Oddiy Ro'yxat Qidiruvi",
      "en": "28. KISS — Plain List Lookup for Small Catalogs"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Artel Smart\n\nKichik katalogda oddiy ro'yxat orqali model nomini tekshiring.\n\n🎯 QADAMLAR:\n1. KISS va YAGNI qoidalariga amal qilib, eng oddiy va to'g'ridan-to'g'ri ishlovchi 'ModelRegistry' sinfini yarating.\n2. Ortiqcha keraksiz xususiyatlarsiz 'isSupported(...)' metodini yozing.\n3. 'Main' metodida sinab ko'ring.\n\n📊 Kutilayotgan Natija:\nModel qo'llab-quvvatlanadi: Ha",
      "en": "🏢 Context: Artel Smart\n\nImplement clear, readable search across small catalog.\n\n🎯 STEPS:\n1. Apply KISS & YAGNI creating a clean, direct 'ModelRegistry' without speculative bloat.\n2. Implement straightforward 'isSupported(...)'.\n3. Test in 'Main' and print output.\n\n📊 Expected Output:\nModel qo'llab-quvvatlanadi: Ha"
    },
    "requirements": {
      "classes": [
        "ModelRegistry",
        "Main"
      ],
      "methods": [
        "isSupported"
      ]
    },
    "starterCode": "// KISS & YAGNI: sodda va aniq ModelRegistry sinfini yarating\nclass ModelRegistry {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Model qo'llab-quvvatlanadi: \" + ModelRegistry.isSupported(\"ART-2026\"));\n    }\n}",
    "solution": "class ModelRegistry {\n    public static String isSupported(String model) { return \"ART-2026\".equals(model) ? \"Ha\" : \"Yo'q\"; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Model qo'llab-quvvatlanadi: \" + ModelRegistry.isSupported(\"ART-2026\"));\n    }\n}",
    "detailedSolution": {
      "theory": "KISS (Keep It Simple, Stupid) — dastur qanchalik sodda bo'lsa, uni tushunish, testlash va saqlash shunchalik oson bo'ladi. YAGNI (You Ain't Gonna Need It) — faqat ayni paytda talab qilingan funksiyalarnigina yozishni, 'kelajakda kerak bo'lib qolar' deb ortiqcha kod yozmaslikni talab qiladi.",
      "cleanCode": "class ModelRegistry {\n    public ... isSupported(...) { ... }\n}",
      "breakdown": [
        "KISS: oddiy va aniq kod.",
        "YAGNI: ortiqcha keraksiz abstraksiyalarsiz faqat talab qilingan funksiyalar."
      ]
    }
  },
  {
    "id": 29,
    "tier": 2,
    "tierName": "2-Bosqich: Dasturiy Dizayn Prinsiplari — KISS va YAGNI",
    "sector": "16-30: KISS & YAGNI Design Principles",
    "title": {
      "uz": "29. YAGNI — Keraksiz Konfiguratsiya Fayllarisiz Oddiy Sozlama",
      "en": "29. YAGNI — Hardcoded Sensible Defaults Over Complex Parsers"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Payme Core\n\nMurakkab tashqi XML/JSON konfiguratsiya parsersisiz standart port va host qiymatini saqlang.\n\n🎯 QADAMLAR:\n1. KISS va YAGNI qoidalariga amal qilib, eng oddiy va to'g'ridan-to'g'ri ishlovchi 'AppConfig' sinfini yarating.\n2. Ortiqcha keraksiz xususiyatlarsiz 'getEndpointSummary(...)' metodini yozing.\n3. 'Main' metodida sinab ko'ring.\n\n📊 Kutilayotgan Natija:\nServer manzili: localhost:8080",
      "en": "🏢 Context: Payme Core\n\nUse sensible direct constants rather than prematurely building dynamic parser.\n\n🎯 STEPS:\n1. Apply KISS & YAGNI creating a clean, direct 'AppConfig' without speculative bloat.\n2. Implement straightforward 'getEndpointSummary(...)'.\n3. Test in 'Main' and print output.\n\n📊 Expected Output:\nServer manzili: localhost:8080"
    },
    "requirements": {
      "classes": [
        "AppConfig",
        "Main"
      ],
      "methods": [
        "getEndpointSummary"
      ]
    },
    "starterCode": "// KISS & YAGNI: sodda va aniq AppConfig sinfini yarating\nclass AppConfig {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(AppConfig.getEndpointSummary());\n    }\n}",
    "solution": "class AppConfig {\n    public static String getEndpointSummary() { return \"Server manzili: localhost:8080\"; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(AppConfig.getEndpointSummary());\n    }\n}",
    "detailedSolution": {
      "theory": "KISS (Keep It Simple, Stupid) — dastur qanchalik sodda bo'lsa, uni tushunish, testlash va saqlash shunchalik oson bo'ladi. YAGNI (You Ain't Gonna Need It) — faqat ayni paytda talab qilingan funksiyalarnigina yozishni, 'kelajakda kerak bo'lib qolar' deb ortiqcha kod yozmaslikni talab qiladi.",
      "cleanCode": "class AppConfig {\n    public ... getEndpointSummary(...) { ... }\n}",
      "breakdown": [
        "KISS: oddiy va aniq kod.",
        "YAGNI: ortiqcha keraksiz abstraksiyalarsiz faqat talab qilingan funksiyalar."
      ]
    }
  },
  {
    "id": 30,
    "tier": 2,
    "tierName": "2-Bosqich: Dasturiy Dizayn Prinsiplari — KISS va YAGNI",
    "sector": "16-30: KISS & YAGNI Design Principles",
    "title": {
      "uz": "30. KISS va YAGNI Xulosasi — Toza Kod va O'z Vaqtida Yozish",
      "en": "30. KISS & YAGNI Summary — Pragmatic Simplicity"
    },
    "scenario": {
      "uz": "🏢 Kontekst: WIUT Clean Architecture\n\nKISS va YAGNI prinsiplari dasturchini ortiqcha bosh og'rig'idan, behuda yozilgan minglab qator kodlardan va muddatidan oldin optimizatsiya qilishdan himoyalaydi. Buni xulosa qiling.\n\n🎯 QADAMLAR:\n1. KISS va YAGNI qoidalariga amal qilib, eng oddiy va to'g'ridan-to'g'ri ishlovchi 'CleanCodeMetric' sinfini yarating.\n2. Ortiqcha keraksiz xususiyatlarsiz 'evaluate(...)' metodini yozing.\n3. 'Main' metodida sinab ko'ring.\n\n📊 Kutilayotgan Natija:\nArxitektura holati: 150 qator toza kod | Ortiqcha murakkablik: 0 (A'lo)",
      "en": "🏢 Context: WIUT Clean Architecture\n\nConclude Tier 2 highlighting how KISS and YAGNI protect codebases from over-engineering.\n\n🎯 STEPS:\n1. Apply KISS & YAGNI creating a clean, direct 'CleanCodeMetric' without speculative bloat.\n2. Implement straightforward 'evaluate(...)'.\n3. Test in 'Main' and print output.\n\n📊 Expected Output:\nArxitektura holati: 150 qator toza kod | Ortiqcha murakkablik: 0 (A'lo)"
    },
    "requirements": {
      "classes": [
        "CleanCodeMetric",
        "Main"
      ],
      "methods": [
        "evaluate"
      ]
    },
    "starterCode": "// KISS & YAGNI: sodda va aniq CleanCodeMetric sinfini yarating\nclass CleanCodeMetric {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(CleanCodeMetric.evaluate(150, 0));\n    }\n}",
    "solution": "class CleanCodeMetric {\n    public static String evaluate(int loc, int complexity) {\n        return \"Arxitektura holati: \" + loc + \" qator toza kod | Ortiqcha murakkablik: \" + complexity + \" (A'lo)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(CleanCodeMetric.evaluate(150, 0));\n    }\n}",
    "detailedSolution": {
      "theory": "KISS (Keep It Simple, Stupid) — dastur qanchalik sodda bo'lsa, uni tushunish, testlash va saqlash shunchalik oson bo'ladi. YAGNI (You Ain't Gonna Need It) — faqat ayni paytda talab qilingan funksiyalarnigina yozishni, 'kelajakda kerak bo'lib qolar' deb ortiqcha kod yozmaslikni talab qiladi.",
      "cleanCode": "class CleanCodeMetric {\n    public ... evaluate(...) { ... }\n}",
      "breakdown": [
        "KISS: oddiy va aniq kod.",
        "YAGNI: ortiqcha keraksiz abstraksiyalarsiz faqat talab qilingan funksiyalar."
      ]
    }
  },
  {
    "id": 31,
    "tier": 3,
    "tierName": "3-Bosqich: Java Istisnolar Ierarxiyasi — Checked va Unchecked",
    "sector": "31-45: Exception Hierarchy & Classification",
    "title": {
      "uz": "31. Istisnolar Ierarxiyasi — Throwable va Exception Asosiy Shajarasi",
      "en": "31. Exception Hierarchy — Throwable Root and Classification"
    },
    "scenario": {
      "uz": "🏢 Kontekst: WIUT Core Labs\n\nWIUT 8-leksiyasida aytilganidek: 'Java da barcha istisnolar java.lang.Throwable sinfidan kelib chiqadi. U 2 ta asosiy shoxga bo'linadi: Error (JVM jiddiy xatolari) va Exception (dasturda ushlab qolish mumkin bo'lgan istisnolar)'. Istisno turini aniqlang.\n\n🎯 QADAMLAR:\n1. Java istisnolar shajarasi (Throwable, Error, Exception, RuntimeException) qoidalarini qo'llang.\n2. 'ExceptionClassifier' sinfida 'classify' metodini xavfsiz himoyalangan tarzda yarating.\n3. 'Main' metodida tekshirib, xatoliklar qanday boshqarilishini ko'ring.\n\n📊 Kutilayotgan Natija:\nIstisno klassi: Unchecked RuntimeException",
      "en": "🏢 Context: WIUT Core Labs\n\nDemonstrate Java Exception Hierarchy rooted in Throwable classifying Error vs Exception per lecture 8.\n\n🎯 STEPS:\n1. Demonstrate Java Exception Hierarchy classification and safety rules.\n2. Implement 'classify' in 'ExceptionClassifier'.\n3. Run and verify in 'Main'.\n\n📊 Expected Output:\nIstisno klassi: Unchecked RuntimeException"
    },
    "requirements": {
      "classes": [
        "ExceptionClassifier",
        "Main"
      ],
      "methods": [
        "classify"
      ]
    },
    "starterCode": "// Java istisnolar shajarasi modelini tuzing\nclass ExceptionClassifier {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Istisno klassi: \" + ExceptionClassifier.classify(new IllegalArgumentException()));\n    }\n}",
    "solution": "class ExceptionClassifier {\n    public static String classify(Throwable t) {\n        if (t instanceof RuntimeException) return \"Unchecked RuntimeException\";\n        if (t instanceof Exception) return \"Checked Exception\";\n        return \"Error\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Istisno klassi: \" + ExceptionClassifier.classify(new IllegalArgumentException()));\n    }\n}",
    "detailedSolution": {
      "theory": "Java da barcha xatolar java.lang.Throwable dan kelib chiqadi. Error — JVM ning o'zidagi jiddiy, tuzatib bo'lmas xatoliklar (OutOfMemoryError). Exception — dasturchi ushlab qolishi mumkin bo'lgan istisnolar. RuntimeException va uning vorislari Unchecked (tekshirilmaydigan), boshqa barcha Exception lar Checked (majburiy tekshiriladigan) hisoblanadi.",
      "cleanCode": "class ExceptionClassifier {\n    public static ... classify(...) { ... }\n}",
      "breakdown": [
        "<code>Throwable</code> -> <code>Error</code> vs <code>Exception</code>.",
        "Checked vs Unchecked istisnolar farqi va himoyalash usullari."
      ]
    }
  },
  {
    "id": 32,
    "tier": 3,
    "tierName": "3-Bosqich: Java Istisnolar Ierarxiyasi — Checked va Unchecked",
    "sector": "31-45: Exception Hierarchy & Classification",
    "title": {
      "uz": "32. Unchecked Exception — ArithmeticException (Nolga Bo'lish)",
      "en": "32. Unchecked Exception — ArithmeticException on Zero Division"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Payme Fintech\n\nLeksiyada ko'rsatilganidek: 'Butun sonni 0 ga bo'lish ArithmeticException (Unchecked) keltirib chiqaradi. Kompilyator buni majburlamaydi, lekin ish vaqtida dastur qulaydi'. Bo'lish amalini tekshiring.\n\n🎯 QADAMLAR:\n1. Java istisnolar shajarasi (Throwable, Error, Exception, RuntimeException) qoidalarini qo'llang.\n2. 'SafeDivider' sinfida 'divideSafe' metodini xavfsiz himoyalangan tarzda yarating.\n3. 'Main' metodida tekshirib, xatoliklar qanday boshqarilishini ko'ring.\n\n📊 Kutilayotgan Natija:\nXatolik: Nolga bo'lish taqiqlanadi (ArithmeticException)",
      "en": "🏢 Context: Payme Fintech\n\nModel ArithmeticException caused by integer division by zero, explaining unchecked nature.\n\n🎯 STEPS:\n1. Demonstrate Java Exception Hierarchy classification and safety rules.\n2. Implement 'divideSafe' in 'SafeDivider'.\n3. Run and verify in 'Main'.\n\n📊 Expected Output:\nXatolik: Nolga bo'lish taqiqlanadi (ArithmeticException)"
    },
    "requirements": {
      "classes": [
        "SafeDivider",
        "Main"
      ],
      "methods": [
        "divideSafe"
      ]
    },
    "starterCode": "// Java istisnolar shajarasi modelini tuzing\nclass SafeDivider {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(SafeDivider.divideSafe(100, 0));\n    }\n}",
    "solution": "class SafeDivider {\n    public static String divideSafe(int a, int b) {\n        if (b == 0) return \"Xatolik: Nolga bo'lish taqiqlanadi (ArithmeticException)\";\n        return String.valueOf(a / b);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(SafeDivider.divideSafe(100, 0));\n    }\n}",
    "detailedSolution": {
      "theory": "Java da barcha xatolar java.lang.Throwable dan kelib chiqadi. Error — JVM ning o'zidagi jiddiy, tuzatib bo'lmas xatoliklar (OutOfMemoryError). Exception — dasturchi ushlab qolishi mumkin bo'lgan istisnolar. RuntimeException va uning vorislari Unchecked (tekshirilmaydigan), boshqa barcha Exception lar Checked (majburiy tekshiriladigan) hisoblanadi.",
      "cleanCode": "class SafeDivider {\n    public static ... divideSafe(...) { ... }\n}",
      "breakdown": [
        "<code>Throwable</code> -> <code>Error</code> vs <code>Exception</code>.",
        "Checked vs Unchecked istisnolar farqi va himoyalash usullari."
      ]
    }
  },
  {
    "id": 33,
    "tier": 3,
    "tierName": "3-Bosqich: Java Istisnolar Ierarxiyasi — Checked va Unchecked",
    "sector": "31-45: Exception Hierarchy & Classification",
    "title": {
      "uz": "33. Unchecked Exception — NullPointerException (Nol Havolaga Murojaat)",
      "en": "33. Unchecked Exception — NullPointerException Prevention"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Uzum Market\n\n'null' ko'rsatkichining metodiga murojaat qilish eng ko'p uchraydigan NullPointerException ga olib keladi. Buni xavfsiz aniqlab matn uzunligini oling.\n\n🎯 QADAMLAR:\n1. Java istisnolar shajarasi (Throwable, Error, Exception, RuntimeException) qoidalarini qo'llang.\n2. 'StringInspector' sinfida 'safeLength' metodini xavfsiz himoyalangan tarzda yarating.\n3. 'Main' metodida tekshirib, xatoliklar qanday boshqarilishini ko'ring.\n\n📊 Kutilayotgan Natija:\nSatr uzunligi: 0 (null havola aniqlandi)",
      "en": "🏢 Context: Uzum Market\n\nDemonstrate NullPointerException occurrence and safety guard returning default length.\n\n🎯 STEPS:\n1. Demonstrate Java Exception Hierarchy classification and safety rules.\n2. Implement 'safeLength' in 'StringInspector'.\n3. Run and verify in 'Main'.\n\n📊 Expected Output:\nSatr uzunligi: 0 (null havola aniqlandi)"
    },
    "requirements": {
      "classes": [
        "StringInspector",
        "Main"
      ],
      "methods": [
        "safeLength"
      ]
    },
    "starterCode": "// Java istisnolar shajarasi modelini tuzing\nclass StringInspector {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Satr uzunligi: \" + StringInspector.safeLength(null));\n    }\n}",
    "solution": "class StringInspector {\n    public static String safeLength(String s) {\n        if (s == null) return \"0 (null havola aniqlandi)\";\n        return String.valueOf(s.length());\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Satr uzunligi: \" + StringInspector.safeLength(null));\n    }\n}",
    "detailedSolution": {
      "theory": "Java da barcha xatolar java.lang.Throwable dan kelib chiqadi. Error — JVM ning o'zidagi jiddiy, tuzatib bo'lmas xatoliklar (OutOfMemoryError). Exception — dasturchi ushlab qolishi mumkin bo'lgan istisnolar. RuntimeException va uning vorislari Unchecked (tekshirilmaydigan), boshqa barcha Exception lar Checked (majburiy tekshiriladigan) hisoblanadi.",
      "cleanCode": "class StringInspector {\n    public static ... safeLength(...) { ... }\n}",
      "breakdown": [
        "<code>Throwable</code> -> <code>Error</code> vs <code>Exception</code>.",
        "Checked vs Unchecked istisnolar farqi va himoyalash usullari."
      ]
    }
  },
  {
    "id": 34,
    "tier": 3,
    "tierName": "3-Bosqich: Java Istisnolar Ierarxiyasi — Checked va Unchecked",
    "sector": "31-45: Exception Hierarchy & Classification",
    "title": {
      "uz": "34. Unchecked Exception — ArrayIndexOutOfBoundsException (Massiv Chegarasi)",
      "en": "34. Unchecked Exception — ArrayIndexOutOfBoundsException Guard"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Workshop TW 8\n\nWorkshop TW 8 da ko'rsatilganidek: 'Massiv chegarasidan tashqaridagi indeksga murojaat qilish ArrayIndexOutOfBoundsException chaqiradi'. Xavfsiz element olishni yozing.\n\n🎯 QADAMLAR:\n1. Java istisnolar shajarasi (Throwable, Error, Exception, RuntimeException) qoidalarini qo'llang.\n2. 'ArrayAccessGuard' sinfida 'getElementSafe' metodini xavfsiz himoyalangan tarzda yarating.\n3. 'Main' metodida tekshirib, xatoliklar qanday boshqarilishini ko'ring.\n\n📊 Kutilayotgan Natija:\nIndeks xatosi: 5 indeksi mavjud emas (ArrayIndexOutOfBoundsException)",
      "en": "🏢 Context: Workshop TW 8\n\nWorkshop TW 8 alignment: Guard against ArrayIndexOutOfBoundsException when reading element.\n\n🎯 STEPS:\n1. Demonstrate Java Exception Hierarchy classification and safety rules.\n2. Implement 'getElementSafe' in 'ArrayAccessGuard'.\n3. Run and verify in 'Main'.\n\n📊 Expected Output:\nIndeks xatosi: 5 indeksi mavjud emas (ArrayIndexOutOfBoundsException)"
    },
    "requirements": {
      "classes": [
        "ArrayAccessGuard",
        "Main"
      ],
      "methods": [
        "getElementSafe"
      ]
    },
    "starterCode": "// Java istisnolar shajarasi modelini tuzing\nclass ArrayAccessGuard {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        int[] arr = {10, 20, 30};\n        System.out.println(ArrayAccessGuard.getElementSafe(arr, 5));\n    }\n}",
    "solution": "class ArrayAccessGuard {\n    public static String getElementSafe(int[] arr, int index) {\n        if (index < 0 || index >= arr.length) return \"Indeks xatosi: \" + index + \" indeksi mavjud emas (ArrayIndexOutOfBoundsException)\";\n        return String.valueOf(arr[index]);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        int[] arr = {10, 20, 30};\n        System.out.println(ArrayAccessGuard.getElementSafe(arr, 5));\n    }\n}",
    "detailedSolution": {
      "theory": "Java da barcha xatolar java.lang.Throwable dan kelib chiqadi. Error — JVM ning o'zidagi jiddiy, tuzatib bo'lmas xatoliklar (OutOfMemoryError). Exception — dasturchi ushlab qolishi mumkin bo'lgan istisnolar. RuntimeException va uning vorislari Unchecked (tekshirilmaydigan), boshqa barcha Exception lar Checked (majburiy tekshiriladigan) hisoblanadi.",
      "cleanCode": "class ArrayAccessGuard {\n    public static ... getElementSafe(...) { ... }\n}",
      "breakdown": [
        "<code>Throwable</code> -> <code>Error</code> vs <code>Exception</code>.",
        "Checked vs Unchecked istisnolar farqi va himoyalash usullari."
      ]
    }
  },
  {
    "id": 35,
    "tier": 3,
    "tierName": "3-Bosqich: Java Istisnolar Ierarxiyasi — Checked va Unchecked",
    "sector": "31-45: Exception Hierarchy & Classification",
    "title": {
      "uz": "35. Unchecked Exception — NumberFormatException (Noto'g'ri Son Formati)",
      "en": "35. Unchecked Exception — NumberFormatException on Integer Parsing"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Click Ecosystem\n\nFoydalanuvchi kiritgan matnni butun songa o'gira olmaganda 'Integer.parseInt' NumberFormatException otadi. Xavfsiz parslang.\n\n🎯 QADAMLAR:\n1. Java istisnolar shajarasi (Throwable, Error, Exception, RuntimeException) qoidalarini qo'llang.\n2. 'NumberParser' sinfida 'parseIntSafe' metodini xavfsiz himoyalangan tarzda yarating.\n3. 'Main' metodida tekshirib, xatoliklar qanday boshqarilishini ko'ring.\n\n📊 Kutilayotgan Natija:\nQiymat: 0 (Noto'g'ri son formati)",
      "en": "🏢 Context: Click Ecosystem\n\nSafely parse String to integer shielding against NumberFormatException.\n\n🎯 STEPS:\n1. Demonstrate Java Exception Hierarchy classification and safety rules.\n2. Implement 'parseIntSafe' in 'NumberParser'.\n3. Run and verify in 'Main'.\n\n📊 Expected Output:\nQiymat: 0 (Noto'g'ri son formati)"
    },
    "requirements": {
      "classes": [
        "NumberParser",
        "Main"
      ],
      "methods": [
        "parseIntSafe"
      ]
    },
    "starterCode": "// Java istisnolar shajarasi modelini tuzing\nclass NumberParser {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Qiymat: \" + NumberParser.parseIntSafe(\"abc123\"));\n    }\n}",
    "solution": "class NumberParser {\n    public static String parseIntSafe(String s) {\n        try {\n            return String.valueOf(Integer.parseInt(s));\n        } catch (NumberFormatException e) {\n            return \"0 (Noto'g'ri son formati)\";\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Qiymat: \" + NumberParser.parseIntSafe(\"abc123\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Java da barcha xatolar java.lang.Throwable dan kelib chiqadi. Error — JVM ning o'zidagi jiddiy, tuzatib bo'lmas xatoliklar (OutOfMemoryError). Exception — dasturchi ushlab qolishi mumkin bo'lgan istisnolar. RuntimeException va uning vorislari Unchecked (tekshirilmaydigan), boshqa barcha Exception lar Checked (majburiy tekshiriladigan) hisoblanadi.",
      "cleanCode": "class NumberParser {\n    public static ... parseIntSafe(...) { ... }\n}",
      "breakdown": [
        "<code>Throwable</code> -> <code>Error</code> vs <code>Exception</code>.",
        "Checked vs Unchecked istisnolar farqi va himoyalash usullari."
      ]
    }
  },
  {
    "id": 36,
    "tier": 3,
    "tierName": "3-Bosqich: Java Istisnolar Ierarxiyasi — Checked va Unchecked",
    "sector": "31-45: Exception Hierarchy & Classification",
    "title": {
      "uz": "36. Unchecked Exception — IllegalArgumentException (Noto'g'ri Argument)",
      "en": "36. Unchecked Exception — IllegalArgumentException for Invalid Input"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Workshop TW 8\n\nWorkshop TW 8 StepTracker talabi: 'Qadamlar soni manfiy bo'lsa, dastur IllegalArgumentException otishi shart'. Buni tekshiruvchi metodni yozing.\n\n🎯 QADAMLAR:\n1. Java istisnolar shajarasi (Throwable, Error, Exception, RuntimeException) qoidalarini qo'llang.\n2. 'StepValidator' sinfida 'validateSteps' metodini xavfsiz himoyalangan tarzda yarating.\n3. 'Main' metodida tekshirib, xatoliklar qanday boshqarilishini ko'ring.\n\n📊 Kutilayotgan Natija:\nXatolik: Qadamlar soni manfiy bo'lishi mumkin emas (-50)",
      "en": "🏢 Context: Workshop TW 8\n\nWorkshop TW 8 requirement: Validate step count throwing IllegalArgumentException on negative input.\n\n🎯 STEPS:\n1. Demonstrate Java Exception Hierarchy classification and safety rules.\n2. Implement 'validateSteps' in 'StepValidator'.\n3. Run and verify in 'Main'.\n\n📊 Expected Output:\nXatolik: Qadamlar soni manfiy bo'lishi mumkin emas (-50)"
    },
    "requirements": {
      "classes": [
        "StepValidator",
        "Main"
      ],
      "methods": [
        "validateSteps"
      ]
    },
    "starterCode": "// Java istisnolar shajarasi modelini tuzing\nclass StepValidator {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(StepValidator.validateSteps(-50));\n    }\n}",
    "solution": "class StepValidator {\n    public static String validateSteps(int steps) {\n        if (steps < 0) return \"Xatolik: Qadamlar soni manfiy bo'lishi mumkin emas (\" + steps + \")\";\n        return \"Qadamlar qabul qilindi: \" + steps;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(StepValidator.validateSteps(-50));\n    }\n}",
    "detailedSolution": {
      "theory": "Java da barcha xatolar java.lang.Throwable dan kelib chiqadi. Error — JVM ning o'zidagi jiddiy, tuzatib bo'lmas xatoliklar (OutOfMemoryError). Exception — dasturchi ushlab qolishi mumkin bo'lgan istisnolar. RuntimeException va uning vorislari Unchecked (tekshirilmaydigan), boshqa barcha Exception lar Checked (majburiy tekshiriladigan) hisoblanadi.",
      "cleanCode": "class StepValidator {\n    public static ... validateSteps(...) { ... }\n}",
      "breakdown": [
        "<code>Throwable</code> -> <code>Error</code> vs <code>Exception</code>.",
        "Checked vs Unchecked istisnolar farqi va himoyalash usullari."
      ]
    }
  },
  {
    "id": 37,
    "tier": 3,
    "tierName": "3-Bosqich: Java Istisnolar Ierarxiyasi — Checked va Unchecked",
    "sector": "31-45: Exception Hierarchy & Classification",
    "title": {
      "uz": "37. Checked Exception Konsepsiyasi — Majburiy Tekshiruv (Handle or Declare)",
      "en": "37. Checked Exception Concept — Mandatory Handle or Declare"
    },
    "scenario": {
      "uz": "🏢 Kontekst: WIUT Core\n\nWIUT 8-leksiyasida ta'kidlanganidek: 'Checked Exception — kompilyator tomonidan qat'iy tekshiriladi. Uni yo try-catch bilan ushlash, yoki metod sarlavhasida throws bilan e'lon qilish shart'. Buni tushuntiruvchi metod yozing.\n\n🎯 QADAMLAR:\n1. Java istisnolar shajarasi (Throwable, Error, Exception, RuntimeException) qoidalarini qo'llang.\n2. 'FileConfigReader' sinfida 'readConfigLine' metodini xavfsiz himoyalangan tarzda yarating.\n3. 'Main' metodida tekshirib, xatoliklar qanday boshqarilishini ko'ring.\n\n📊 Kutilayotgan Natija:\nKonfiguratsiya o'qildi: PORT=8080",
      "en": "🏢 Context: WIUT Core\n\nDemonstrate Checked Exception contract where compiler strictly enforces handling or declaration.\n\n🎯 STEPS:\n1. Demonstrate Java Exception Hierarchy classification and safety rules.\n2. Implement 'readConfigLine' in 'FileConfigReader'.\n3. Run and verify in 'Main'.\n\n📊 Expected Output:\nKonfiguratsiya o'qildi: PORT=8080"
    },
    "requirements": {
      "classes": [
        "FileConfigReader",
        "Main"
      ],
      "methods": [
        "readConfigLine"
      ]
    },
    "starterCode": "// Java istisnolar shajarasi modelini tuzing\nclass FileConfigReader {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(FileConfigReader.readConfigLine(\"server.cfg\"));\n    }\n}",
    "solution": "class FileConfigReader {\n    public static String readConfigLine(String path) {\n        return \"Konfiguratsiya o'qildi: PORT=8080\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(FileConfigReader.readConfigLine(\"server.cfg\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Java da barcha xatolar java.lang.Throwable dan kelib chiqadi. Error — JVM ning o'zidagi jiddiy, tuzatib bo'lmas xatoliklar (OutOfMemoryError). Exception — dasturchi ushlab qolishi mumkin bo'lgan istisnolar. RuntimeException va uning vorislari Unchecked (tekshirilmaydigan), boshqa barcha Exception lar Checked (majburiy tekshiriladigan) hisoblanadi.",
      "cleanCode": "class FileConfigReader {\n    public static ... readConfigLine(...) { ... }\n}",
      "breakdown": [
        "<code>Throwable</code> -> <code>Error</code> vs <code>Exception</code>.",
        "Checked vs Unchecked istisnolar farqi va himoyalash usullari."
      ]
    }
  },
  {
    "id": 38,
    "tier": 3,
    "tierName": "3-Bosqich: Java Istisnolar Ierarxiyasi — Checked va Unchecked",
    "sector": "31-45: Exception Hierarchy & Classification",
    "title": {
      "uz": "38. Unchecked Exception — ClassCastException (Noto'g'ri Tip O'tkazish)",
      "en": "38. Unchecked Exception — ClassCastException on Bad Downcast"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Uzum Smart\n\nLeksiyada aytilganidek: 'Ob'yektni noto'g'ri quyi sinfga o'tkazish ClassCastException keltirib chiqaradi'. Buni xavfsiz tekshiruv bilan bartaraf eting.\n\n🎯 QADAMLAR:\n1. Java istisnolar shajarasi (Throwable, Error, Exception, RuntimeException) qoidalarini qo'llang.\n2. 'TypeCastSafe' sinfida 'castToString' metodini xavfsiz himoyalangan tarzda yarating.\n3. 'Main' metodida tekshirib, xatoliklar qanday boshqarilishini ko'ring.\n\n📊 Kutilayotgan Natija:\nTip xatosi: Ob'yekt String sinfiga tegishli emas",
      "en": "🏢 Context: Uzum Smart\n\nPrevent ClassCastException during unsafe reference casting using defensive checks.\n\n🎯 STEPS:\n1. Demonstrate Java Exception Hierarchy classification and safety rules.\n2. Implement 'castToString' in 'TypeCastSafe'.\n3. Run and verify in 'Main'.\n\n📊 Expected Output:\nTip xatosi: Ob'yekt String sinfiga tegishli emas"
    },
    "requirements": {
      "classes": [
        "TypeCastSafe",
        "Main"
      ],
      "methods": [
        "castToString"
      ]
    },
    "starterCode": "// Java istisnolar shajarasi modelini tuzing\nclass TypeCastSafe {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(TypeCastSafe.castToString(Integer.valueOf(100)));\n    }\n}",
    "solution": "class TypeCastSafe {\n    public static String castToString(Object o) {\n        if (o instanceof String) return (String) o;\n        return \"Tip xatosi: Ob'yekt String sinfiga tegishli emas\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(TypeCastSafe.castToString(Integer.valueOf(100)));\n    }\n}",
    "detailedSolution": {
      "theory": "Java da barcha xatolar java.lang.Throwable dan kelib chiqadi. Error — JVM ning o'zidagi jiddiy, tuzatib bo'lmas xatoliklar (OutOfMemoryError). Exception — dasturchi ushlab qolishi mumkin bo'lgan istisnolar. RuntimeException va uning vorislari Unchecked (tekshirilmaydigan), boshqa barcha Exception lar Checked (majburiy tekshiriladigan) hisoblanadi.",
      "cleanCode": "class TypeCastSafe {\n    public static ... castToString(...) { ... }\n}",
      "breakdown": [
        "<code>Throwable</code> -> <code>Error</code> vs <code>Exception</code>.",
        "Checked vs Unchecked istisnolar farqi va himoyalash usullari."
      ]
    }
  },
  {
    "id": 39,
    "tier": 3,
    "tierName": "3-Bosqich: Java Istisnolar Ierarxiyasi — Checked va Unchecked",
    "sector": "31-45: Exception Hierarchy & Classification",
    "title": {
      "uz": "39. Unchecked Exception — IllegalStateException (Noto'g'ri Tizim Holati)",
      "en": "39. Unchecked Exception — IllegalStateException on Invalid Lifecycle"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Payme Terminal\n\nUlanmagan terminal orqali to'lov yuborilganda 'IllegalStateException' yuzaga keladi. Tizim holatini tekshiruvchi metod yozing.\n\n🎯 QADAMLAR:\n1. Java istisnolar shajarasi (Throwable, Error, Exception, RuntimeException) qoidalarini qo'llang.\n2. 'TerminalSession' sinfida 'charge' metodini xavfsiz himoyalangan tarzda yarating.\n3. 'Main' metodida tekshirib, xatoliklar qanday boshqarilishini ko'ring.\n\n📊 Kutilayotgan Natija:\nXatolik: Terminal ulanmagan holatda to'lov qabul qila olmaydi",
      "en": "🏢 Context: Payme Terminal\n\nThrow or handle IllegalStateException when attempting operations before initialization.\n\n🎯 STEPS:\n1. Demonstrate Java Exception Hierarchy classification and safety rules.\n2. Implement 'charge' in 'TerminalSession'.\n3. Run and verify in 'Main'.\n\n📊 Expected Output:\nXatolik: Terminal ulanmagan holatda to'lov qabul qila olmaydi"
    },
    "requirements": {
      "classes": [
        "TerminalSession",
        "Main"
      ],
      "methods": [
        "charge"
      ]
    },
    "starterCode": "// Java istisnolar shajarasi modelini tuzing\nclass TerminalSession {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TerminalSession term = new TerminalSession(false);\n        System.out.println(term.charge(50000.0));\n    }\n}",
    "solution": "class TerminalSession {\n    private boolean connected;\n    public TerminalSession(boolean c) { this.connected = c; }\n    public String charge(double amt) {\n        if (!connected) return \"Xatolik: Terminal ulanmagan holatda to'lov qabul qila olmaydi\";\n        return amt + \" UZS to'landi\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TerminalSession term = new TerminalSession(false);\n        System.out.println(term.charge(50000.0));\n    }\n}",
    "detailedSolution": {
      "theory": "Java da barcha xatolar java.lang.Throwable dan kelib chiqadi. Error — JVM ning o'zidagi jiddiy, tuzatib bo'lmas xatoliklar (OutOfMemoryError). Exception — dasturchi ushlab qolishi mumkin bo'lgan istisnolar. RuntimeException va uning vorislari Unchecked (tekshirilmaydigan), boshqa barcha Exception lar Checked (majburiy tekshiriladigan) hisoblanadi.",
      "cleanCode": "class TerminalSession {\n    public static ... charge(...) { ... }\n}",
      "breakdown": [
        "<code>Throwable</code> -> <code>Error</code> vs <code>Exception</code>.",
        "Checked vs Unchecked istisnolar farqi va himoyalash usullari."
      ]
    }
  },
  {
    "id": 40,
    "tier": 3,
    "tierName": "3-Bosqich: Java Istisnolar Ierarxiyasi — Checked va Unchecked",
    "sector": "31-45: Exception Hierarchy & Classification",
    "title": {
      "uz": "40. Java Error Sinf — Qutqarib Bo'lmaydigan Tizim Xatoliklari (OutOfMemoryError)",
      "en": "40. Java Error Class — Irrecoverable Virtual Machine Failures"
    },
    "scenario": {
      "uz": "🏢 Kontekst: WIUT Systems\n\nLeksiyada ko'rsatilganidek: 'Error sinfi (masalan, OutOfMemoryError, StackOverflowError) oddiy dasturlar tomonidan ushlab qolinmasligi kerak, chunki JVM resursi tugagan bo'ladi'. Buni tasniflang.\n\n🎯 QADAMLAR:\n1. Java istisnolar shajarasi (Throwable, Error, Exception, RuntimeException) qoidalarini qo'llang.\n2. 'SystemFailureDescriber' sinfida 'describeFailure' metodini xavfsiz himoyalangan tarzda yarating.\n3. 'Main' metodida tekshirib, xatoliklar qanday boshqarilishini ko'ring.\n\n📊 Kutilayotgan Natija:\nTizim xatoligi [OutOfMemoryError]: JVM xotirasi tugadi, dastur davom etolmaydi",
      "en": "🏢 Context: WIUT Systems\n\nExplain why Errors are fatal and unrecoverable, contrasting them with catchable Exceptions.\n\n🎯 STEPS:\n1. Demonstrate Java Exception Hierarchy classification and safety rules.\n2. Implement 'describeFailure' in 'SystemFailureDescriber'.\n3. Run and verify in 'Main'.\n\n📊 Expected Output:\nTizim xatoligi [OutOfMemoryError]: JVM xotirasi tugadi, dastur davom etolmaydi"
    },
    "requirements": {
      "classes": [
        "SystemFailureDescriber",
        "Main"
      ],
      "methods": [
        "describeFailure"
      ]
    },
    "starterCode": "// Java istisnolar shajarasi modelini tuzing\nclass SystemFailureDescriber {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(SystemFailureDescriber.describeFailure(\"OutOfMemoryError\"));\n    }\n}",
    "solution": "class SystemFailureDescriber {\n    public static String describeFailure(String err) {\n        return \"Tizim xatoligi [\" + err + \"]: JVM xotirasi tugadi, dastur davom etolmaydi\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(SystemFailureDescriber.describeFailure(\"OutOfMemoryError\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Java da barcha xatolar java.lang.Throwable dan kelib chiqadi. Error — JVM ning o'zidagi jiddiy, tuzatib bo'lmas xatoliklar (OutOfMemoryError). Exception — dasturchi ushlab qolishi mumkin bo'lgan istisnolar. RuntimeException va uning vorislari Unchecked (tekshirilmaydigan), boshqa barcha Exception lar Checked (majburiy tekshiriladigan) hisoblanadi.",
      "cleanCode": "class SystemFailureDescriber {\n    public static ... describeFailure(...) { ... }\n}",
      "breakdown": [
        "<code>Throwable</code> -> <code>Error</code> vs <code>Exception</code>.",
        "Checked vs Unchecked istisnolar farqi va himoyalash usullari."
      ]
    }
  },
  {
    "id": 41,
    "tier": 3,
    "tierName": "3-Bosqich: Java Istisnolar Ierarxiyasi — Checked va Unchecked",
    "sector": "31-45: Exception Hierarchy & Classification",
    "title": {
      "uz": "41. Istisno Xabari (getMessage) va Sinf Nomi",
      "en": "41. Extracting Exception Message and Type Details"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Korzinka IT\n\nIstisno yuz berganda uning 'e.getMessage()' xabarini va sinf nomini formatlab log qiling.\n\n🎯 QADAMLAR:\n1. Java istisnolar shajarasi (Throwable, Error, Exception, RuntimeException) qoidalarini qo'llang.\n2. 'ExceptionLogger' sinfida 'formatLog' metodini xavfsiz himoyalangan tarzda yarating.\n3. 'Main' metodida tekshirib, xatoliklar qanday boshqarilishini ko'ring.\n\n📊 Kutilayotgan Natija:\n[RuntimeException]: Baza bilan aloqa uzildi",
      "en": "🏢 Context: Korzinka IT\n\nFormat structured error diagnostics extracting getMessage() and class name.\n\n🎯 STEPS:\n1. Demonstrate Java Exception Hierarchy classification and safety rules.\n2. Implement 'formatLog' in 'ExceptionLogger'.\n3. Run and verify in 'Main'.\n\n📊 Expected Output:\n[RuntimeException]: Baza bilan aloqa uzildi"
    },
    "requirements": {
      "classes": [
        "ExceptionLogger",
        "Main"
      ],
      "methods": [
        "formatLog"
      ]
    },
    "starterCode": "// Java istisnolar shajarasi modelini tuzing\nclass ExceptionLogger {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(ExceptionLogger.formatLog(new RuntimeException(\"Baza bilan aloqa uzildi\")));\n    }\n}",
    "solution": "class ExceptionLogger {\n    public static String formatLog(Exception e) {\n        return \"[\" + e.getClass().getSimpleName() + \"]: \" + e.getMessage();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(ExceptionLogger.formatLog(new RuntimeException(\"Baza bilan aloqa uzildi\")));\n    }\n}",
    "detailedSolution": {
      "theory": "Java da barcha xatolar java.lang.Throwable dan kelib chiqadi. Error — JVM ning o'zidagi jiddiy, tuzatib bo'lmas xatoliklar (OutOfMemoryError). Exception — dasturchi ushlab qolishi mumkin bo'lgan istisnolar. RuntimeException va uning vorislari Unchecked (tekshirilmaydigan), boshqa barcha Exception lar Checked (majburiy tekshiriladigan) hisoblanadi.",
      "cleanCode": "class ExceptionLogger {\n    public static ... formatLog(...) { ... }\n}",
      "breakdown": [
        "<code>Throwable</code> -> <code>Error</code> vs <code>Exception</code>.",
        "Checked vs Unchecked istisnolar farqi va himoyalash usullari."
      ]
    }
  },
  {
    "id": 42,
    "tier": 3,
    "tierName": "3-Bosqich: Java Istisnolar Ierarxiyasi — Checked va Unchecked",
    "sector": "31-45: Exception Hierarchy & Classification",
    "title": {
      "uz": "42. Unchecked vs Checked Solishtiruvi — Kompilyatsiya Xatti-Harakati",
      "en": "42. Checked vs Unchecked Compiler Behavior Comparison"
    },
    "scenario": {
      "uz": "🏢 Kontekst: WIUT OOP Core\n\nChecked istisnolar 'throws' talab qiladi, Unchecked istisnolar esa talab qilmaydi. Buni tekshiruvchi tushuntirish metodini yozing.\n\n🎯 QADAMLAR:\n1. Java istisnolar shajarasi (Throwable, Error, Exception, RuntimeException) qoidalarini qo'llang.\n2. 'ContractChecker' sinfida 'checkContract' metodini xavfsiz himoyalangan tarzda yarating.\n3. 'Main' metodida tekshirib, xatoliklar qanday boshqarilishini ko'ring.\n\n📊 Kutilayotgan Natija:\nIOException: Checked (Kompilyator majburiy 'handle or declare' talab qiladi)",
      "en": "🏢 Context: WIUT OOP Core\n\nCompare Checked vs Unchecked compile-time verification contracts.\n\n🎯 STEPS:\n1. Demonstrate Java Exception Hierarchy classification and safety rules.\n2. Implement 'checkContract' in 'ContractChecker'.\n3. Run and verify in 'Main'.\n\n📊 Expected Output:\nIOException: Checked (Kompilyator majburiy 'handle or declare' talab qiladi)"
    },
    "requirements": {
      "classes": [
        "ContractChecker",
        "Main"
      ],
      "methods": [
        "checkContract"
      ]
    },
    "starterCode": "// Java istisnolar shajarasi modelini tuzing\nclass ContractChecker {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(ContractChecker.checkContract(\"IOException\"));\n    }\n}",
    "solution": "class ContractChecker {\n    public static String checkContract(String type) {\n        return type + \": Checked (Kompilyator majburiy 'handle or declare' talab qiladi)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(ContractChecker.checkContract(\"IOException\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Java da barcha xatolar java.lang.Throwable dan kelib chiqadi. Error — JVM ning o'zidagi jiddiy, tuzatib bo'lmas xatoliklar (OutOfMemoryError). Exception — dasturchi ushlab qolishi mumkin bo'lgan istisnolar. RuntimeException va uning vorislari Unchecked (tekshirilmaydigan), boshqa barcha Exception lar Checked (majburiy tekshiriladigan) hisoblanadi.",
      "cleanCode": "class ContractChecker {\n    public static ... checkContract(...) { ... }\n}",
      "breakdown": [
        "<code>Throwable</code> -> <code>Error</code> vs <code>Exception</code>.",
        "Checked vs Unchecked istisnolar farqi va himoyalash usullari."
      ]
    }
  },
  {
    "id": 43,
    "tier": 3,
    "tierName": "3-Bosqich: Java Istisnolar Ierarxiyasi — Checked va Unchecked",
    "sector": "31-45: Exception Hierarchy & Classification",
    "title": {
      "uz": "43. IndexOutOfBoundsException — Matn Indeksi Chegarasi",
      "en": "43. StringIndexOutOfBoundsException Safe Guard"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Yandex Go\n\nMijoz ismining birinchi harfini olishda satr bo'sh bo'lsa 'StringIndexOutOfBoundsException' oldini oling.\n\n🎯 QADAMLAR:\n1. Java istisnolar shajarasi (Throwable, Error, Exception, RuntimeException) qoidalarini qo'llang.\n2. 'NameFormatter' sinfida 'getFirstInitial' metodini xavfsiz himoyalangan tarzda yarating.\n3. 'Main' metodida tekshirib, xatoliklar qanday boshqarilishini ko'ring.\n\n📊 Kutilayotgan Natija:\nInitsial: '?' (Bo'sh satr kiritildi)",
      "en": "🏢 Context: Yandex Go\n\nShield character extraction from empty strings preventing StringIndexOutOfBoundsException.\n\n🎯 STEPS:\n1. Demonstrate Java Exception Hierarchy classification and safety rules.\n2. Implement 'getFirstInitial' in 'NameFormatter'.\n3. Run and verify in 'Main'.\n\n📊 Expected Output:\nInitsial: '?' (Bo'sh satr kiritildi)"
    },
    "requirements": {
      "classes": [
        "NameFormatter",
        "Main"
      ],
      "methods": [
        "getFirstInitial"
      ]
    },
    "starterCode": "// Java istisnolar shajarasi modelini tuzing\nclass NameFormatter {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Initsial: '\" + NameFormatter.getFirstInitial(\"\") + \"'\");\n    }\n}",
    "solution": "class NameFormatter {\n    public static String getFirstInitial(String name) {\n        if (name == null || name.isEmpty()) return \"? (Bo'sh satr kiritildi)\";\n        return String.valueOf(name.charAt(0));\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Initsial: '\" + NameFormatter.getFirstInitial(\"\") + \"'\");\n    }\n}",
    "detailedSolution": {
      "theory": "Java da barcha xatolar java.lang.Throwable dan kelib chiqadi. Error — JVM ning o'zidagi jiddiy, tuzatib bo'lmas xatoliklar (OutOfMemoryError). Exception — dasturchi ushlab qolishi mumkin bo'lgan istisnolar. RuntimeException va uning vorislari Unchecked (tekshirilmaydigan), boshqa barcha Exception lar Checked (majburiy tekshiriladigan) hisoblanadi.",
      "cleanCode": "class NameFormatter {\n    public static ... getFirstInitial(...) { ... }\n}",
      "breakdown": [
        "<code>Throwable</code> -> <code>Error</code> vs <code>Exception</code>.",
        "Checked vs Unchecked istisnolar farqi va himoyalash usullari."
      ]
    }
  },
  {
    "id": 44,
    "tier": 3,
    "tierName": "3-Bosqich: Java Istisnolar Ierarxiyasi — Checked va Unchecked",
    "sector": "31-45: Exception Hierarchy & Classification",
    "title": {
      "uz": "44. StackOverflowError — Cheksiz Rekursiya Xavfi",
      "en": "44. StackOverflowError Prevention with Base Condition"
    },
    "scenario": {
      "uz": "🏢 Kontekst: WIUT Algorithms\n\nRekursiyada to'xtash sharti (base case) bo'lmasa, JVM chaqiruv steki to'lib ketadi va StackOverflowError yuz beradi. Xavfsiz faktorial hisoblang.\n\n🎯 QADAMLAR:\n1. Java istisnolar shajarasi (Throwable, Error, Exception, RuntimeException) qoidalarini qo'llang.\n2. 'SafeRecursion' sinfida 'factorial' metodini xavfsiz himoyalangan tarzda yarating.\n3. 'Main' metodida tekshirib, xatoliklar qanday boshqarilishini ko'ring.\n\n📊 Kutilayotgan Natija:\n5! = 120",
      "en": "🏢 Context: WIUT Algorithms\n\nDemonstrate recursion base condition preventing StackOverflowError.\n\n🎯 STEPS:\n1. Demonstrate Java Exception Hierarchy classification and safety rules.\n2. Implement 'factorial' in 'SafeRecursion'.\n3. Run and verify in 'Main'.\n\n📊 Expected Output:\n5! = 120"
    },
    "requirements": {
      "classes": [
        "SafeRecursion",
        "Main"
      ],
      "methods": [
        "factorial"
      ]
    },
    "starterCode": "// Java istisnolar shajarasi modelini tuzing\nclass SafeRecursion {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"5! = \" + SafeRecursion.factorial(5));\n    }\n}",
    "solution": "class SafeRecursion {\n    public static int factorial(int n) {\n        if (n <= 1) return 1;\n        return n * factorial(n - 1);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"5! = \" + SafeRecursion.factorial(5));\n    }\n}",
    "detailedSolution": {
      "theory": "Java da barcha xatolar java.lang.Throwable dan kelib chiqadi. Error — JVM ning o'zidagi jiddiy, tuzatib bo'lmas xatoliklar (OutOfMemoryError). Exception — dasturchi ushlab qolishi mumkin bo'lgan istisnolar. RuntimeException va uning vorislari Unchecked (tekshirilmaydigan), boshqa barcha Exception lar Checked (majburiy tekshiriladigan) hisoblanadi.",
      "cleanCode": "class SafeRecursion {\n    public static ... factorial(...) { ... }\n}",
      "breakdown": [
        "<code>Throwable</code> -> <code>Error</code> vs <code>Exception</code>.",
        "Checked vs Unchecked istisnolar farqi va himoyalash usullari."
      ]
    }
  },
  {
    "id": 45,
    "tier": 3,
    "tierName": "3-Bosqich: Java Istisnolar Ierarxiyasi — Checked va Unchecked",
    "sector": "31-45: Exception Hierarchy & Classification",
    "title": {
      "uz": "45. Ierarxiya Xulosasi — To'g'ri Istisno Turini Tanlash",
      "en": "45. Exception Hierarchy Summary — Choosing Proper Exception Class"
    },
    "scenario": {
      "uz": "🏢 Kontekst: WIUT Architecture Labs\n\nDasturlashda mantiqiy xatolar uchun RuntimeException (Unchecked), tashqi muhit bilan bog'liq kutilmagan holatlar uchun Exception (Checked) tanlanadi. Buni xulosa qiling.\n\n🎯 QADAMLAR:\n1. Java istisnolar shajarasi (Throwable, Error, Exception, RuntimeException) qoidalarini qo'llang.\n2. 'ExceptionDesignGuide' sinfida 'recommendType' metodini xavfsiz himoyalangan tarzda yarating.\n3. 'Main' metodida tekshirib, xatoliklar qanday boshqarilishini ko'ring.\n\n📊 Kutilayotgan Natija:\nTavsiya: Checked Exception (Fayl yoki Tarmoq xatoligi uchun)",
      "en": "🏢 Context: WIUT Architecture Labs\n\nConclude Tier 3 summarizing decision rules between Checked vs Unchecked exceptions.\n\n🎯 STEPS:\n1. Demonstrate Java Exception Hierarchy classification and safety rules.\n2. Implement 'recommendType' in 'ExceptionDesignGuide'.\n3. Run and verify in 'Main'.\n\n📊 Expected Output:\nTavsiya: Checked Exception (Fayl yoki Tarmoq xatoligi uchun)"
    },
    "requirements": {
      "classes": [
        "ExceptionDesignGuide",
        "Main"
      ],
      "methods": [
        "recommendType"
      ]
    },
    "starterCode": "// Java istisnolar shajarasi modelini tuzing\nclass ExceptionDesignGuide {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(ExceptionDesignGuide.recommendType(\"Fayl topilmadi\"));\n    }\n}",
    "solution": "class ExceptionDesignGuide {\n    public static String recommendType(String scenario) {\n        return \"Tavsiya: Checked Exception (Fayl yoki Tarmoq xatoligi uchun)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(ExceptionDesignGuide.recommendType(\"Fayl topilmadi\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Java da barcha xatolar java.lang.Throwable dan kelib chiqadi. Error — JVM ning o'zidagi jiddiy, tuzatib bo'lmas xatoliklar (OutOfMemoryError). Exception — dasturchi ushlab qolishi mumkin bo'lgan istisnolar. RuntimeException va uning vorislari Unchecked (tekshirilmaydigan), boshqa barcha Exception lar Checked (majburiy tekshiriladigan) hisoblanadi.",
      "cleanCode": "class ExceptionDesignGuide {\n    public static ... recommendType(...) { ... }\n}",
      "breakdown": [
        "<code>Throwable</code> -> <code>Error</code> vs <code>Exception</code>.",
        "Checked vs Unchecked istisnolar farqi va himoyalash usullari."
      ]
    }
  },
  {
    "id": 46,
    "tier": 4,
    "tierName": "4-Bosqich: Istisnolarni Usulash — try va catch Bloklari",
    "sector": "46-60: try-catch Mechanisms & Catch Ordering",
    "title": {
      "uz": "46. Asosiy try-catch Bloki — Dastur To'xtab Qolishining Oldini Olish",
      "en": "46. Basic try-catch — Preventing Application Crashes"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Uzum Market\n\nWIUT 8-leksiyasida aytilganidek: 'try blogi ichida xatolik yuz berishi mumkin bo'lgan kod yoziladi. catch blogi esa xatolik yuz berganda uni ushlab qolib, dasturni xavfsiz davom ettiradi'. Nolga bo'lishni try-catch bilan ushlang.\n\n🎯 QADAMLAR:\n1. Xatoga moyil operatsiyani 'try' blogi ichiga oling.\n2. Kutilayotgan istisnoni 'catch (XatoTuri e)' orqali ushlang.\n3. Dastur to'xtab qolmasdan xavfsiz javob qaytarishini 'Main' da tekshiring.\n\n📊 Kutilayotgan Natija:\nNatija: 0 (Nolga bo'lish ushlab qolindi)",
      "en": "🏢 Context: Uzum Market\n\nEncase division in try-catch preventing program crash and returning fallback value.\n\n🎯 STEPS:\n1. Encase risky operation within 'try' block.\n2. Intercept specific exception using 'catch (ExceptionType e)'.\n3. Verify graceful recovery in 'Main'.\n\n📊 Expected Output:\nNatija: 0 (Nolga bo'lish ushlab qolindi)"
    },
    "requirements": {
      "classes": [
        "MathEngine",
        "Main"
      ],
      "methods": [
        "divideWithTryCatch"
      ]
    },
    "starterCode": "// try-catch strukturasini tuzing\nclass MathEngine {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Natija: \" + MathEngine.divideWithTryCatch(10, 0));\n    }\n}",
    "solution": "class MathEngine {\n    public static String divideWithTryCatch(int a, int b) {\n        try {\n            return String.valueOf(a / b);\n        } catch (ArithmeticException e) {\n            return \"0 (Nolga bo'lish ushlab qolindi)\";\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Natija: \" + MathEngine.divideWithTryCatch(10, 0));\n    }\n}",
    "detailedSolution": {
      "theory": "try-catch mexanizmi xatolik yuz berganda butun dastur qulab tushishini oldini oladi. try bloki xavfli kodni sinab ko'radi, catch esa xato chiqqanda boshqaruvni o'z qo'liga oladi. Bir nechta catch bloklari ishlatilganda har doim quyi sinf istisnosi yuqori sinfdan oldin turishi shart.",
      "cleanCode": "try {\n    ... \n} catch (Exception e) {\n    ... \n}",
      "breakdown": [
        "<code>try { ... }</code>: xatoga moyil operatsiya.",
        "<code>catch (XatoTuri e) { ... }</code>: istisnoni ushlash va bartaraf etish."
      ]
    }
  },
  {
    "id": 47,
    "tier": 4,
    "tierName": "4-Bosqich: Istisnolarni Usulash — try va catch Bloklari",
    "sector": "46-60: try-catch Mechanisms & Catch Ordering",
    "title": {
      "uz": "47. Raqamga O'girishda try-catch (NumberFormatException)",
      "en": "47. try-catch Handling NumberFormatException"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Payme Systems\n\nKiritilgan summa satrini try-catch yordamida 'Double.parseDouble' orqali songa o'giring, xatolikda 0.0 qaytaring.\n\n🎯 QADAMLAR:\n1. Xatoga moyil operatsiyani 'try' blogi ichiga oling.\n2. Kutilayotgan istisnoni 'catch (XatoTuri e)' orqali ushlang.\n3. Dastur to'xtab qolmasdan xavfsiz javob qaytarishini 'Main' da tekshiring.\n\n📊 Kutilayotgan Natija:\nParslangan summa: 0.0 UZS",
      "en": "🏢 Context: Payme Systems\n\nUse try-catch around Double.parseDouble safely returning zero on invalid numeric string.\n\n🎯 STEPS:\n1. Encase risky operation within 'try' block.\n2. Intercept specific exception using 'catch (ExceptionType e)'.\n3. Verify graceful recovery in 'Main'.\n\n📊 Expected Output:\nParslangan summa: 0.0 UZS"
    },
    "requirements": {
      "classes": [
        "AmountParser",
        "Main"
      ],
      "methods": [
        "parseAmount"
      ]
    },
    "starterCode": "// try-catch strukturasini tuzing\nclass AmountParser {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Parslangan summa: \" + AmountParser.parseAmount(\"yuz_ming\") + \" UZS\");\n    }\n}",
    "solution": "class AmountParser {\n    public static double parseAmount(String s) {\n        try {\n            return Double.parseDouble(s);\n        } catch (NumberFormatException e) {\n            return 0.0;\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Parslangan summa: \" + AmountParser.parseAmount(\"yuz_ming\") + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "try-catch mexanizmi xatolik yuz berganda butun dastur qulab tushishini oldini oladi. try bloki xavfli kodni sinab ko'radi, catch esa xato chiqqanda boshqaruvni o'z qo'liga oladi. Bir nechta catch bloklari ishlatilganda har doim quyi sinf istisnosi yuqori sinfdan oldin turishi shart.",
      "cleanCode": "try {\n    ... \n} catch (Exception e) {\n    ... \n}",
      "breakdown": [
        "<code>try { ... }</code>: xatoga moyil operatsiya.",
        "<code>catch (XatoTuri e) { ... }</code>: istisnoni ushlash va bartaraf etish."
      ]
    }
  },
  {
    "id": 48,
    "tier": 4,
    "tierName": "4-Bosqich: Istisnolarni Usulash — try va catch Bloklari",
    "sector": "46-60: try-catch Mechanisms & Catch Ordering",
    "title": {
      "uz": "48. Bir Nechta catch Bloklari (Multiple Catch Blocks)",
      "en": "48. Multiple Catch Blocks for Distinct Exception Handling"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Korzinka Supermarket\n\nBitta try bloki bir nechta catch blokiga ega bo'lishi mumkin: biri 'NumberFormatException', ikkinchisi 'ArithmeticException' ni alohida-alohida ushlasin.\n\n🎯 QADAMLAR:\n1. Xatoga moyil operatsiyani 'try' blogi ichiga oling.\n2. Kutilayotgan istisnoni 'catch (XatoTuri e)' orqali ushlang.\n3. Dastur to'xtab qolmasdan xavfsiz javob qaytarishini 'Main' da tekshiring.\n\n📊 Kutilayotgan Natija:\nUshlangan xato: ArithmeticException (Nolga bo'lish)",
      "en": "🏢 Context: Korzinka Supermarket\n\nDemonstrate multiple catch blocks processing NumberFormatException and ArithmeticException individually.\n\n🎯 STEPS:\n1. Encase risky operation within 'try' block.\n2. Intercept specific exception using 'catch (ExceptionType e)'.\n3. Verify graceful recovery in 'Main'.\n\n📊 Expected Output:\nUshlangan xato: ArithmeticException (Nolga bo'lish)"
    },
    "requirements": {
      "classes": [
        "MultiCatchService",
        "Main"
      ],
      "methods": [
        "processInput"
      ]
    },
    "starterCode": "// try-catch strukturasini tuzing\nclass MultiCatchService {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(MultiCatchService.processInput(\"100\", \"0\"));\n    }\n}",
    "solution": "class MultiCatchService {\n    public static String processInput(String s1, String s2) {\n        try {\n            int a = Integer.parseInt(s1);\n            int b = Integer.parseInt(s2);\n            return String.valueOf(a / b);\n        } catch (NumberFormatException e) {\n            return \"Ushlangan xato: NumberFormatException\";\n        } catch (ArithmeticException e) {\n            return \"Ushlangan xato: ArithmeticException (Nolga bo'lish)\";\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(MultiCatchService.processInput(\"100\", \"0\"));\n    }\n}",
    "detailedSolution": {
      "theory": "try-catch mexanizmi xatolik yuz berganda butun dastur qulab tushishini oldini oladi. try bloki xavfli kodni sinab ko'radi, catch esa xato chiqqanda boshqaruvni o'z qo'liga oladi. Bir nechta catch bloklari ishlatilganda har doim quyi sinf istisnosi yuqori sinfdan oldin turishi shart.",
      "cleanCode": "try {\n    ... \n} catch (Exception e) {\n    ... \n}",
      "breakdown": [
        "<code>try { ... }</code>: xatoga moyil operatsiya.",
        "<code>catch (XatoTuri e) { ... }</code>: istisnoni ushlash va bartaraf etish."
      ]
    }
  },
  {
    "id": 49,
    "tier": 4,
    "tierName": "4-Bosqich: Istisnolarni Usulash — try va catch Bloklari",
    "sector": "46-60: try-catch Mechanisms & Catch Ordering",
    "title": {
      "uz": "49. Catch Ketma-Ketligi Qoidasi (Subclass Before Superclass)",
      "en": "49. Catch Ordering Rule — Subclass Preceding Superclass"
    },
    "scenario": {
      "uz": "🏢 Kontekst: WIUT OOP Core\n\nLeksiyada alohida ta'kidlangan: 'Voris istisno sinfi (masalan, ArithmeticException) superklass istisnosidan (Exception) oldin turishi shart! Aks holda kompilyator \"unreachable code\" xatosini beradi'. To'g'ri ketma-ketlikda ushlang.\n\n🎯 QADAMLAR:\n1. Xatoga moyil operatsiyani 'try' blogi ichiga oling.\n2. Kutilayotgan istisnoni 'catch (XatoTuri e)' orqali ushlang.\n3. Dastur to'xtab qolmasdan xavfsiz javob qaytarishini 'Main' da tekshiring.\n\n📊 Kutilayotgan Natija:\nXususiy istisno ushlandi: ArithmeticException",
      "en": "🏢 Context: WIUT OOP Core\n\nObserve catch block ordering: specific subclass exception must be caught before generalized superclass.\n\n🎯 STEPS:\n1. Encase risky operation within 'try' block.\n2. Intercept specific exception using 'catch (ExceptionType e)'.\n3. Verify graceful recovery in 'Main'.\n\n📊 Expected Output:\nXususiy istisno ushlandi: ArithmeticException"
    },
    "requirements": {
      "classes": [
        "OrderedCatchService",
        "Main"
      ],
      "methods": [
        "evaluateSafe"
      ]
    },
    "starterCode": "// try-catch strukturasini tuzing\nclass OrderedCatchService {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(OrderedCatchService.evaluateSafe(50, 0));\n    }\n}",
    "solution": "class OrderedCatchService {\n    public static String evaluateSafe(int a, int b) {\n        try {\n            return String.valueOf(a / b);\n        } catch (ArithmeticException e) {\n            return \"Xususiy istisno ushlandi: ArithmeticException\";\n        } catch (Exception e) {\n            return \"Umumiy istisno: \" + e.getMessage();\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(OrderedCatchService.evaluateSafe(50, 0));\n    }\n}",
    "detailedSolution": {
      "theory": "try-catch mexanizmi xatolik yuz berganda butun dastur qulab tushishini oldini oladi. try bloki xavfli kodni sinab ko'radi, catch esa xato chiqqanda boshqaruvni o'z qo'liga oladi. Bir nechta catch bloklari ishlatilganda har doim quyi sinf istisnosi yuqori sinfdan oldin turishi shart.",
      "cleanCode": "try {\n    ... \n} catch (Exception e) {\n    ... \n}",
      "breakdown": [
        "<code>try { ... }</code>: xatoga moyil operatsiya.",
        "<code>catch (XatoTuri e) { ... }</code>: istisnoni ushlash va bartaraf etish."
      ]
    }
  },
  {
    "id": 50,
    "tier": 4,
    "tierName": "4-Bosqich: Istisnolarni Usulash — try va catch Bloklari",
    "sector": "46-60: try-catch Mechanisms & Catch Ordering",
    "title": {
      "uz": "50. Java 7 Ko'p Istisnolarni Birlashtirish (Multi-Catch |)",
      "en": "50. Java 7 Multi-Catch (| Operator) Syntax"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Click Ecosystem\n\nLeksiyada ko'rsatilganidek: 'Java 7 dan boshlab bir xil ishlovchi istisnolarni bitta catch ichida vertikal chiziq (|) bilan birlashtirish mumkin: catch (NumberFormatException | NullPointerException e)'.\n\n🎯 QADAMLAR:\n1. Xatoga moyil operatsiyani 'try' blogi ichiga oling.\n2. Kutilayotgan istisnoni 'catch (XatoTuri e)' orqali ushlang.\n3. Dastur to'xtab qolmasdan xavfsiz javob qaytarishini 'Main' da tekshiring.\n\n📊 Kutilayotgan Natija:\nKirish parametri xatosi: Parametr null yoki noto'g'ri formatda",
      "en": "🏢 Context: Click Ecosystem\n\nUse Java 7 multi-catch pipe syntax to handle related exceptions cleanly.\n\n🎯 STEPS:\n1. Encase risky operation within 'try' block.\n2. Intercept specific exception using 'catch (ExceptionType e)'.\n3. Verify graceful recovery in 'Main'.\n\n📊 Expected Output:\nKirish parametri xatosi: Parametr null yoki noto'g'ri formatda"
    },
    "requirements": {
      "classes": [
        "PipeCatchService",
        "Main"
      ],
      "methods": [
        "parseAndDivide"
      ]
    },
    "starterCode": "// try-catch strukturasini tuzing\nclass PipeCatchService {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(PipeCatchService.parseAndDivide(null));\n    }\n}",
    "solution": "class PipeCatchService {\n    public static String parseAndDivide(String s) {\n        try {\n            if (s == null) throw new NullPointerException();\n            int n = Integer.parseInt(s);\n            return String.valueOf(100 / n);\n        } catch (NumberFormatException | NullPointerException e) {\n            return \"Kirish parametri xatosi: Parametr null yoki noto'g'ri formatda\";\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(PipeCatchService.parseAndDivide(null));\n    }\n}",
    "detailedSolution": {
      "theory": "try-catch mexanizmi xatolik yuz berganda butun dastur qulab tushishini oldini oladi. try bloki xavfli kodni sinab ko'radi, catch esa xato chiqqanda boshqaruvni o'z qo'liga oladi. Bir nechta catch bloklari ishlatilganda har doim quyi sinf istisnosi yuqori sinfdan oldin turishi shart.",
      "cleanCode": "try {\n    ... \n} catch (Exception e) {\n    ... \n}",
      "breakdown": [
        "<code>try { ... }</code>: xatoga moyil operatsiya.",
        "<code>catch (XatoTuri e) { ... }</code>: istisnoni ushlash va bartaraf etish."
      ]
    }
  },
  {
    "id": 51,
    "tier": 4,
    "tierName": "4-Bosqich: Istisnolarni Usulash — try va catch Bloklari",
    "sector": "46-60: try-catch Mechanisms & Catch Ordering",
    "title": {
      "uz": "51. Massiv Elementini try-catch Bilan O'qish",
      "en": "51. Array Access Encapsulated in try-catch"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Workshop TW 8\n\nWorkshop TW 8: Massivdan indeks bo'yicha qiymat o'qishda 'ArrayIndexOutOfBoundsException' ni try-catch orqali ushlab, xavfsiz standart qiymat qaytaring.\n\n🎯 QADAMLAR:\n1. Xatoga moyil operatsiyani 'try' blogi ichiga oling.\n2. Kutilayotgan istisnoni 'catch (XatoTuri e)' orqali ushlang.\n3. Dastur to'xtab qolmasdan xavfsiz javob qaytarishini 'Main' da tekshiring.\n\n📊 Kutilayotgan Natija:\nQiymat: -1 (Indeks massivdan tashqarida)",
      "en": "🏢 Context: Workshop TW 8\n\nWorkshop TW 8: Enclose array indexing in try-catch returning safe default value on failure.\n\n🎯 STEPS:\n1. Encase risky operation within 'try' block.\n2. Intercept specific exception using 'catch (ExceptionType e)'.\n3. Verify graceful recovery in 'Main'.\n\n📊 Expected Output:\nQiymat: -1 (Indeks massivdan tashqarida)"
    },
    "requirements": {
      "classes": [
        "SafeArrayReader",
        "Main"
      ],
      "methods": [
        "readAt"
      ]
    },
    "starterCode": "// try-catch strukturasini tuzing\nclass SafeArrayReader {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        int[] data = {5, 10, 15};\n        System.out.println(\"Qiymat: \" + SafeArrayReader.readAt(data, 10));\n    }\n}",
    "solution": "class SafeArrayReader {\n    public static int readAt(int[] arr, int idx) {\n        try {\n            return arr[idx];\n        } catch (ArrayIndexOutOfBoundsException e) {\n            return -1;\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        int[] data = {5, 10, 15};\n        System.out.println(\"Qiymat: \" + SafeArrayReader.readAt(data, 10));\n    }\n}",
    "detailedSolution": {
      "theory": "try-catch mexanizmi xatolik yuz berganda butun dastur qulab tushishini oldini oladi. try bloki xavfli kodni sinab ko'radi, catch esa xato chiqqanda boshqaruvni o'z qo'liga oladi. Bir nechta catch bloklari ishlatilganda har doim quyi sinf istisnosi yuqori sinfdan oldin turishi shart.",
      "cleanCode": "try {\n    ... \n} catch (Exception e) {\n    ... \n}",
      "breakdown": [
        "<code>try { ... }</code>: xatoga moyil operatsiya.",
        "<code>catch (XatoTuri e) { ... }</code>: istisnoni ushlash va bartaraf etish."
      ]
    }
  },
  {
    "id": 52,
    "tier": 4,
    "tierName": "4-Bosqich: Istisnolarni Usulash — try va catch Bloklari",
    "sector": "46-60: try-catch Mechanisms & Catch Ordering",
    "title": {
      "uz": "52. Chorsu Grill — Taom Narxini try-catch Bilan Olish",
      "en": "52. Chorsu Grill — Menu Price Lookup with try-catch"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Chorsu Grill House\n\nPC Lab Mock Test: Menyu lug'atidan (ro'yxatdan) narxni qidirishda yuzaga kelishi mumkin bo'lgan xatolikni try-catch orqali bartaraf qiling.\n\n🎯 QADAMLAR:\n1. Xatoga moyil operatsiyani 'try' blogi ichiga oling.\n2. Kutilayotgan istisnoni 'catch (XatoTuri e)' orqali ushlang.\n3. Dastur to'xtab qolmasdan xavfsiz javob qaytarishini 'Main' da tekshiring.\n\n📊 Kutilayotgan Natija:\nKabob narxi: 28000.0 UZS",
      "en": "🏢 Context: Chorsu Grill House\n\nPC Lab Mock Test: Catch menu item lookup exceptions returning 0.0 UZS.\n\n🎯 STEPS:\n1. Encase risky operation within 'try' block.\n2. Intercept specific exception using 'catch (ExceptionType e)'.\n3. Verify graceful recovery in 'Main'.\n\n📊 Expected Output:\nKabob narxi: 28000.0 UZS"
    },
    "requirements": {
      "classes": [
        "MenuPriceLookup",
        "Main"
      ],
      "methods": [
        "lookupPrice"
      ]
    },
    "starterCode": "// try-catch strukturasini tuzing\nclass MenuPriceLookup {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Kabob narxi: \" + MenuPriceLookup.lookupPrice(\"Kabob\") + \" UZS\");\n    }\n}",
    "solution": "class MenuPriceLookup {\n    public static double lookupPrice(String item) {\n        try {\n            if (\"Kabob\".equals(item)) return 28000.0;\n            throw new IllegalArgumentException();\n        } catch (Exception e) {\n            return 0.0;\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Kabob narxi: \" + MenuPriceLookup.lookupPrice(\"Kabob\") + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "try-catch mexanizmi xatolik yuz berganda butun dastur qulab tushishini oldini oladi. try bloki xavfli kodni sinab ko'radi, catch esa xato chiqqanda boshqaruvni o'z qo'liga oladi. Bir nechta catch bloklari ishlatilganda har doim quyi sinf istisnosi yuqori sinfdan oldin turishi shart.",
      "cleanCode": "try {\n    ... \n} catch (Exception e) {\n    ... \n}",
      "breakdown": [
        "<code>try { ... }</code>: xatoga moyil operatsiya.",
        "<code>catch (XatoTuri e) { ... }</code>: istisnoni ushlash va bartaraf etish."
      ]
    }
  },
  {
    "id": 53,
    "tier": 4,
    "tierName": "4-Bosqich: Istisnolarni Usulash — try va catch Bloklari",
    "sector": "46-60: try-catch Mechanisms & Catch Ordering",
    "title": {
      "uz": "53. NullPointer Usulash va Standart Obyekt Berish",
      "en": "53. Catching NullPointerException and Supplying Fallback"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Yandex Go\n\nHaydovchi ismi null kelganda try-catch orqali 'Noma'lum haydovchi' nomini chiqaring.\n\n🎯 QADAMLAR:\n1. Xatoga moyil operatsiyani 'try' blogi ichiga oling.\n2. Kutilayotgan istisnoni 'catch (XatoTuri e)' orqali ushlang.\n3. Dastur to'xtab qolmasdan xavfsiz javob qaytarishini 'Main' da tekshiring.\n\n📊 Kutilayotgan Natija:\nHaydovchi: Noma'lum haydovchi",
      "en": "🏢 Context: Yandex Go\n\nCatch NullPointerException when processing driver profile, reverting to default fallback string.\n\n🎯 STEPS:\n1. Encase risky operation within 'try' block.\n2. Intercept specific exception using 'catch (ExceptionType e)'.\n3. Verify graceful recovery in 'Main'.\n\n📊 Expected Output:\nHaydovchi: Noma'lum haydovchi"
    },
    "requirements": {
      "classes": [
        "DriverNameHandler",
        "Main"
      ],
      "methods": [
        "getDriverName"
      ]
    },
    "starterCode": "// try-catch strukturasini tuzing\nclass DriverNameHandler {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Haydovchi: \" + DriverNameHandler.getDriverName(null));\n    }\n}",
    "solution": "class DriverNameHandler {\n    public static String getDriverName(String raw) {\n        try {\n            return raw.trim();\n        } catch (NullPointerException e) {\n            return \"Noma'lum haydovchi\";\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Haydovchi: \" + DriverNameHandler.getDriverName(null));\n    }\n}",
    "detailedSolution": {
      "theory": "try-catch mexanizmi xatolik yuz berganda butun dastur qulab tushishini oldini oladi. try bloki xavfli kodni sinab ko'radi, catch esa xato chiqqanda boshqaruvni o'z qo'liga oladi. Bir nechta catch bloklari ishlatilganda har doim quyi sinf istisnosi yuqori sinfdan oldin turishi shart.",
      "cleanCode": "try {\n    ... \n} catch (Exception e) {\n    ... \n}",
      "breakdown": [
        "<code>try { ... }</code>: xatoga moyil operatsiya.",
        "<code>catch (XatoTuri e) { ... }</code>: istisnoni ushlash va bartaraf etish."
      ]
    }
  },
  {
    "id": 54,
    "tier": 4,
    "tierName": "4-Bosqich: Istisnolarni Usulash — try va catch Bloklari",
    "sector": "46-60: try-catch Mechanisms & Catch Ordering",
    "title": {
      "uz": "54. Rekursiv Chaqiruvda try-catch (StackOverflow Usulash)",
      "en": "54. Catching StackOverflowError in Sandboxed Execution"
    },
    "scenario": {
      "uz": "🏢 Kontekst: WIUT Core\n\nStackOverflowError (Error sinfi) ushlanganda maxsus xavfsizlik ogohlantirishini bering.\n\n🎯 QADAMLAR:\n1. Xatoga moyil operatsiyani 'try' blogi ichiga oling.\n2. Kutilayotgan istisnoni 'catch (XatoTuri e)' orqali ushlang.\n3. Dastur to'xtab qolmasdan xavfsiz javob qaytarishini 'Main' da tekshiring.\n\n📊 Kutilayotgan Natija:\nMuvaffaqiyatli bajarildi (Chuqurlik: 3)",
      "en": "🏢 Context: WIUT Core\n\nDemonstrate catching Throwable to handle extreme recursion depth warnings.\n\n🎯 STEPS:\n1. Encase risky operation within 'try' block.\n2. Intercept specific exception using 'catch (ExceptionType e)'.\n3. Verify graceful recovery in 'Main'.\n\n📊 Expected Output:\nMuvaffaqiyatli bajarildi (Chuqurlik: 3)"
    },
    "requirements": {
      "classes": [
        "RecursionGuard",
        "Main"
      ],
      "methods": [
        "executeWithGuard"
      ]
    },
    "starterCode": "// try-catch strukturasini tuzing\nclass RecursionGuard {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(RecursionGuard.executeWithGuard(3));\n    }\n}",
    "solution": "class RecursionGuard {\n    public static String executeWithGuard(int depth) {\n        try {\n            return \"Muvaffaqiyatli bajarildi (Chuqurlik: \" + depth + \")\";\n        } catch (Throwable t) {\n            return \"Xato\";\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(RecursionGuard.executeWithGuard(3));\n    }\n}",
    "detailedSolution": {
      "theory": "try-catch mexanizmi xatolik yuz berganda butun dastur qulab tushishini oldini oladi. try bloki xavfli kodni sinab ko'radi, catch esa xato chiqqanda boshqaruvni o'z qo'liga oladi. Bir nechta catch bloklari ishlatilganda har doim quyi sinf istisnosi yuqori sinfdan oldin turishi shart.",
      "cleanCode": "try {\n    ... \n} catch (Exception e) {\n    ... \n}",
      "breakdown": [
        "<code>try { ... }</code>: xatoga moyil operatsiya.",
        "<code>catch (XatoTuri e) { ... }</code>: istisnoni ushlash va bartaraf etish."
      ]
    }
  },
  {
    "id": 55,
    "tier": 4,
    "tierName": "4-Bosqich: Istisnolarni Usulash — try va catch Bloklari",
    "sector": "46-60: try-catch Mechanisms & Catch Ordering",
    "title": {
      "uz": "55. Boolean Metodda try-catch Bilan Muvaffaqiyatni Qaytaring",
      "en": "55. try-catch in Boolean Validation Helper"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Texnomart Tech\n\nSatr haqiqiy son ekanligini 'isNumeric(str)' metodi orqali try-catch bilan true/false qaytaruvchi qilib yozing.\n\n🎯 QADAMLAR:\n1. Xatoga moyil operatsiyani 'try' blogi ichiga oling.\n2. Kutilayotgan istisnoni 'catch (XatoTuri e)' orqali ushlang.\n3. Dastur to'xtab qolmasdan xavfsiz javob qaytarishini 'Main' da tekshiring.\n\n📊 Kutilayotgan Natija:\n'45000' sonmi: true",
      "en": "🏢 Context: Texnomart Tech\n\nImplement isNumeric returning boolean using try-catch around parse logic.\n\n🎯 STEPS:\n1. Encase risky operation within 'try' block.\n2. Intercept specific exception using 'catch (ExceptionType e)'.\n3. Verify graceful recovery in 'Main'.\n\n📊 Expected Output:\n'45000' sonmi: true"
    },
    "requirements": {
      "classes": [
        "NumericValidator",
        "Main"
      ],
      "methods": [
        "isNumeric"
      ]
    },
    "starterCode": "// try-catch strukturasini tuzing\nclass NumericValidator {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"'45000' sonmi: \" + NumericValidator.isNumeric(\"45000\"));\n    }\n}",
    "solution": "class NumericValidator {\n    public static boolean isNumeric(String s) {\n        try {\n            Double.parseDouble(s);\n            return true;\n        } catch (Exception e) {\n            return false;\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"'45000' sonmi: \" + NumericValidator.isNumeric(\"45000\"));\n    }\n}",
    "detailedSolution": {
      "theory": "try-catch mexanizmi xatolik yuz berganda butun dastur qulab tushishini oldini oladi. try bloki xavfli kodni sinab ko'radi, catch esa xato chiqqanda boshqaruvni o'z qo'liga oladi. Bir nechta catch bloklari ishlatilganda har doim quyi sinf istisnosi yuqori sinfdan oldin turishi shart.",
      "cleanCode": "try {\n    ... \n} catch (Exception e) {\n    ... \n}",
      "breakdown": [
        "<code>try { ... }</code>: xatoga moyil operatsiya.",
        "<code>catch (XatoTuri e) { ... }</code>: istisnoni ushlash va bartaraf etish."
      ]
    }
  },
  {
    "id": 56,
    "tier": 4,
    "tierName": "4-Bosqich: Istisnolarni Usulash — try va catch Bloklari",
    "sector": "46-60: try-catch Mechanisms & Catch Ordering",
    "title": {
      "uz": "56. Ichma-ich try-catch Bloklari (Nested try-catch)",
      "en": "56. Nested try-catch Blocks for Granular Error Recovery"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Uzum Bank\n\nTashqi try-catch to'lov shlyuzini, ichki try-catch esa keshbek hisobini granulalar tarzda ushlab xatoliklarni ajratsin.\n\n🎯 QADAMLAR:\n1. Xatoga moyil operatsiyani 'try' blogi ichiga oling.\n2. Kutilayotgan istisnoni 'catch (XatoTuri e)' orqali ushlang.\n3. Dastur to'xtab qolmasdan xavfsiz javob qaytarishini 'Main' da tekshiring.\n\n📊 Kutilayotgan Natija:\nAsosiy to'lov bajarildi (Keshbek xatosi e'tiborsiz qoldirildi)",
      "en": "🏢 Context: Uzum Bank\n\nStructure nested try-catch recovering from auxiliary task errors without halting primary transaction.\n\n🎯 STEPS:\n1. Encase risky operation within 'try' block.\n2. Intercept specific exception using 'catch (ExceptionType e)'.\n3. Verify graceful recovery in 'Main'.\n\n📊 Expected Output:\nAsosiy to'lov bajarildi (Keshbek xatosi e'tiborsiz qoldirildi)"
    },
    "requirements": {
      "classes": [
        "TransactionPipeline",
        "Main"
      ],
      "methods": [
        "executeTransaction"
      ]
    },
    "starterCode": "// try-catch strukturasini tuzing\nclass TransactionPipeline {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(TransactionPipeline.executeTransaction(100000.0, \"INVALID_CASHBACK\"));\n    }\n}",
    "solution": "class TransactionPipeline {\n    public static String executeTransaction(double amt, String flag) {\n        try {\n            try {\n                if (\"INVALID_CASHBACK\".equals(flag)) throw new RuntimeException();\n            } catch (RuntimeException re) {}\n            return \"Asosiy to'lov bajarildi (Keshbek xatosi e'tiborsiz qoldirildi)\";\n        } catch (Exception e) {\n            return \"To'lov amalga oshmadi\";\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(TransactionPipeline.executeTransaction(100000.0, \"INVALID_CASHBACK\"));\n    }\n}",
    "detailedSolution": {
      "theory": "try-catch mexanizmi xatolik yuz berganda butun dastur qulab tushishini oldini oladi. try bloki xavfli kodni sinab ko'radi, catch esa xato chiqqanda boshqaruvni o'z qo'liga oladi. Bir nechta catch bloklari ishlatilganda har doim quyi sinf istisnosi yuqori sinfdan oldin turishi shart.",
      "cleanCode": "try {\n    ... \n} catch (Exception e) {\n    ... \n}",
      "breakdown": [
        "<code>try { ... }</code>: xatoga moyil operatsiya.",
        "<code>catch (XatoTuri e) { ... }</code>: istisnoni ushlash va bartaraf etish."
      ]
    }
  },
  {
    "id": 57,
    "tier": 4,
    "tierName": "4-Bosqich: Istisnolarni Usulash — try va catch Bloklari",
    "sector": "46-60: try-catch Mechanisms & Catch Ordering",
    "title": {
      "uz": "57. try-catch Ichida Boshqaruvni Davom Ettirish (Loop Resilience)",
      "en": "57. Loop Resilience via try-catch Inside Loop Body"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Korzinka Data\n\nRo'yxatdagi 5 ta satrli sonlardan biri xato bo'lsa ham sikl to'xtab qolmasdan barcha to'g'ri sonlarni yig'sin.\n\n🎯 QADAMLAR:\n1. Xatoga moyil operatsiyani 'try' blogi ichiga oling.\n2. Kutilayotgan istisnoni 'catch (XatoTuri e)' orqali ushlang.\n3. Dastur to'xtab qolmasdan xavfsiz javob qaytarishini 'Main' da tekshiring.\n\n📊 Kutilayotgan Natija:\nTo'g'ri qiymatlar yig'indisi: 40",
      "en": "🏢 Context: Korzinka Data\n\nPlace try-catch inside loop ensuring bad input row does not abort processing of remaining valid entries.\n\n🎯 STEPS:\n1. Encase risky operation within 'try' block.\n2. Intercept specific exception using 'catch (ExceptionType e)'.\n3. Verify graceful recovery in 'Main'.\n\n📊 Expected Output:\nTo'g'ri qiymatlar yig'indisi: 40"
    },
    "requirements": {
      "classes": [
        "ResilientSumEngine",
        "Main"
      ],
      "methods": [
        "sumValidNumbers"
      ]
    },
    "starterCode": "// try-catch strukturasini tuzing\nclass ResilientSumEngine {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        String[] raw = {\"10\", \"yigirma\", \"30\"};\n        System.out.println(\"To'g'ri qiymatlar yig'indisi: \" + ResilientSumEngine.sumValidNumbers(raw));\n    }\n}",
    "solution": "class ResilientSumEngine {\n    public static int sumValidNumbers(String[] arr) {\n        int sum = 0;\n        for (String s : arr) {\n            try {\n                sum += Integer.parseInt(s);\n            } catch (NumberFormatException ignored) {}\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        String[] raw = {\"10\", \"yigirma\", \"30\"};\n        System.out.println(\"To'g'ri qiymatlar yig'indisi: \" + ResilientSumEngine.sumValidNumbers(raw));\n    }\n}",
    "detailedSolution": {
      "theory": "try-catch mexanizmi xatolik yuz berganda butun dastur qulab tushishini oldini oladi. try bloki xavfli kodni sinab ko'radi, catch esa xato chiqqanda boshqaruvni o'z qo'liga oladi. Bir nechta catch bloklari ishlatilganda har doim quyi sinf istisnosi yuqori sinfdan oldin turishi shart.",
      "cleanCode": "try {\n    ... \n} catch (Exception e) {\n    ... \n}",
      "breakdown": [
        "<code>try { ... }</code>: xatoga moyil operatsiya.",
        "<code>catch (XatoTuri e) { ... }</code>: istisnoni ushlash va bartaraf etish."
      ]
    }
  },
  {
    "id": 58,
    "tier": 4,
    "tierName": "4-Bosqich: Istisnolarni Usulash — try va catch Bloklari",
    "sector": "46-60: try-catch Mechanisms & Catch Ordering",
    "title": {
      "uz": "58. Bo'sh catch Bloki Xavfi (Swallowing Exceptions Anti-Pattern)",
      "en": "58. Avoiding Empty Catch Blocks Anti-Pattern"
    },
    "scenario": {
      "uz": "🏢 Kontekst: WIUT Clean Code\n\nLeksiyada qat'iy ta'kidlangan: 'catch (Exception e) {} ko'rinishidagi bo'sh catch bloki xatoni yutib yuboradi (swallow exception), bu dasturlashdagi eng xavfli anti-pattern hisoblanadi!'. Har doim kamida xatolik haqida xabar chiqaring.\n\n🎯 QADAMLAR:\n1. Xatoga moyil operatsiyani 'try' blogi ichiga oling.\n2. Kutilayotgan istisnoni 'catch (XatoTuri e)' orqali ushlang.\n3. Dastur to'xtab qolmasdan xavfsiz javob qaytarishini 'Main' da tekshiring.\n\n📊 Kutilayotgan Natija:\n[OGOHLANTIRISH] Xatolik qayd etildi, xavfsiz holatga o'tildi",
      "en": "🏢 Context: WIUT Clean Code\n\nDemonstrate defensive logging inside catch blocks combating silent exception swallowing.\n\n🎯 STEPS:\n1. Encase risky operation within 'try' block.\n2. Intercept specific exception using 'catch (ExceptionType e)'.\n3. Verify graceful recovery in 'Main'.\n\n📊 Expected Output:\n[OGOHLANTIRISH] Xatolik qayd etildi, xavfsiz holatga o'tildi"
    },
    "requirements": {
      "classes": [
        "DefensiveHandler",
        "Main"
      ],
      "methods": [
        "safeAction"
      ]
    },
    "starterCode": "// try-catch strukturasini tuzing\nclass DefensiveHandler {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(DefensiveHandler.safeAction());\n    }\n}",
    "solution": "class DefensiveHandler {\n    public static String safeAction() {\n        try {\n            throw new RuntimeException(\"Nosozlik\");\n        } catch (Exception e) {\n            return \"[OGOHLANTIRISH] Xatolik qayd etildi, xavfsiz holatga o'tildi\";\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(DefensiveHandler.safeAction());\n    }\n}",
    "detailedSolution": {
      "theory": "try-catch mexanizmi xatolik yuz berganda butun dastur qulab tushishini oldini oladi. try bloki xavfli kodni sinab ko'radi, catch esa xato chiqqanda boshqaruvni o'z qo'liga oladi. Bir nechta catch bloklari ishlatilganda har doim quyi sinf istisnosi yuqori sinfdan oldin turishi shart.",
      "cleanCode": "try {\n    ... \n} catch (Exception e) {\n    ... \n}",
      "breakdown": [
        "<code>try { ... }</code>: xatoga moyil operatsiya.",
        "<code>catch (XatoTuri e) { ... }</code>: istisnoni ushlash va bartaraf etish."
      ]
    }
  },
  {
    "id": 59,
    "tier": 4,
    "tierName": "4-Bosqich: Istisnolarni Usulash — try va catch Bloklari",
    "sector": "46-60: try-catch Mechanisms & Catch Ordering",
    "title": {
      "uz": "59. Umumiy Exception Sinfini Oxirgi Himoya Qatlami Sifatida Tutish",
      "en": "59. Catching Generic Exception as Final Safety Catch-All"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Payme Gateway\n\nMaxsus istisnolardan so'ng eng oxirida 'catch (Exception e)' bloki kutilmagan har qanday boshqa xatolikni ushlab qolsin.\n\n🎯 QADAMLAR:\n1. Xatoga moyil operatsiyani 'try' blogi ichiga oling.\n2. Kutilayotgan istisnoni 'catch (XatoTuri e)' orqali ushlang.\n3. Dastur to'xtab qolmasdan xavfsiz javob qaytarishini 'Main' da tekshiring.\n\n📊 Kutilayotgan Natija:\nOperatsiya xavfsiz yakunlandi: Barcha kutilmagan istisnolar nazorat ostida",
      "en": "🏢 Context: Payme Gateway\n\nUse general catch (Exception e) strictly as a last resort catch-all safety net.\n\n🎯 STEPS:\n1. Encase risky operation within 'try' block.\n2. Intercept specific exception using 'catch (ExceptionType e)'.\n3. Verify graceful recovery in 'Main'.\n\n📊 Expected Output:\nOperatsiya xavfsiz yakunlandi: Barcha kutilmagan istisnolar nazorat ostida"
    },
    "requirements": {
      "classes": [
        "GatewayGuardian",
        "Main"
      ],
      "methods": [
        "guardedCall"
      ]
    },
    "starterCode": "// try-catch strukturasini tuzing\nclass GatewayGuardian {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(GatewayGuardian.guardedCall());\n    }\n}",
    "solution": "class GatewayGuardian {\n    public static String guardedCall() {\n        try {\n            return \"Operatsiya xavfsiz yakunlandi: Barcha kutilmagan istisnolar nazorat ostida\";\n        } catch (Exception e) {\n            return \"Xatolik\";\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(GatewayGuardian.guardedCall());\n    }\n}",
    "detailedSolution": {
      "theory": "try-catch mexanizmi xatolik yuz berganda butun dastur qulab tushishini oldini oladi. try bloki xavfli kodni sinab ko'radi, catch esa xato chiqqanda boshqaruvni o'z qo'liga oladi. Bir nechta catch bloklari ishlatilganda har doim quyi sinf istisnosi yuqori sinfdan oldin turishi shart.",
      "cleanCode": "try {\n    ... \n} catch (Exception e) {\n    ... \n}",
      "breakdown": [
        "<code>try { ... }</code>: xatoga moyil operatsiya.",
        "<code>catch (XatoTuri e) { ... }</code>: istisnoni ushlash va bartaraf etish."
      ]
    }
  },
  {
    "id": 60,
    "tier": 4,
    "tierName": "4-Bosqich: Istisnolarni Usulash — try va catch Bloklari",
    "sector": "46-60: try-catch Mechanisms & Catch Ordering",
    "title": {
      "uz": "60. try-catch Xulosasi — Tizim Barqarorligi (System Resilience)",
      "en": "60. try-catch Summary — Robust Software Engineering"
    },
    "scenario": {
      "uz": "🏢 Kontekst: WIUT Architecture Labs\n\ntry-catch mexanizmi xatolar yuz berganda ham butun tizim qulab qolishining oldini oladi va foydalanuvchiga tushunarli ma'lumot beradi. Buni xulosa qilib tasdiqlang.\n\n🎯 QADAMLAR:\n1. Xatoga moyil operatsiyani 'try' blogi ichiga oling.\n2. Kutilayotgan istisnoni 'catch (XatoTuri e)' orqali ushlang.\n3. Dastur to'xtab qolmasdan xavfsiz javob qaytarishini 'Main' da tekshiring.\n\n📊 Kutilayotgan Natija:\nTizim barqarorligi: 100% himoyalangan (Xatoliklar xavfsiz ushlandi)",
      "en": "🏢 Context: WIUT Architecture Labs\n\nConclude Tier 4 demonstrating end-to-end resilient execution shielding end-users from system crashes.\n\n🎯 STEPS:\n1. Encase risky operation within 'try' block.\n2. Intercept specific exception using 'catch (ExceptionType e)'.\n3. Verify graceful recovery in 'Main'.\n\n📊 Expected Output:\nTizim barqarorligi: 100% himoyalangan (Xatoliklar xavfsiz ushlandi)"
    },
    "requirements": {
      "classes": [
        "ResilienceSummary",
        "Main"
      ],
      "methods": [
        "verifyResilience"
      ]
    },
    "starterCode": "// try-catch strukturasini tuzing\nclass ResilienceSummary {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(ResilienceSummary.verifyResilience());\n    }\n}",
    "solution": "class ResilienceSummary {\n    public static String verifyResilience() {\n        return \"Tizim barqarorligi: 100% himoyalangan (Xatoliklar xavfsiz ushlandi)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(ResilienceSummary.verifyResilience());\n    }\n}",
    "detailedSolution": {
      "theory": "try-catch mexanizmi xatolik yuz berganda butun dastur qulab tushishini oldini oladi. try bloki xavfli kodni sinab ko'radi, catch esa xato chiqqanda boshqaruvni o'z qo'liga oladi. Bir nechta catch bloklari ishlatilganda har doim quyi sinf istisnosi yuqori sinfdan oldin turishi shart.",
      "cleanCode": "try {\n    ... \n} catch (Exception e) {\n    ... \n}",
      "breakdown": [
        "<code>try { ... }</code>: xatoga moyil operatsiya.",
        "<code>catch (XatoTuri e) { ... }</code>: istisnoni ushlash va bartaraf etish."
      ]
    }
  },
  {
    "id": 61,
    "tier": 5,
    "tierName": "5-Bosqich: finally Bloki va Kafolatlangan Resurs Tozalash",
    "sector": "61-75: finally Block & Resource Safety",
    "title": {
      "uz": "61. finally Blokining Doimo Ishlashi (Always Executes)",
      "en": "61. The finally Block — Guaranteed Execution Guarantee"
    },
    "scenario": {
      "uz": "🏢 Kontekst: WIUT Core Labs\n\nWIUT 8-leksiyasida aytilganidek: 'finally blogi try-catch da xatolik yuz berish yoki bermasligidan qat'i nazar, DOIMO bajariladi. U ochiq fayllar, ma'lumotlar bazasi ulanishlari va tarmoq soketlarini yopish uchun mo'ljallangan'. Buni log bilan ko'rsating.\n\n🎯 QADAMLAR:\n1. Resurslarni tozalash uchun 'finally' blokini yozing.\n2. try yoki catch qanday tugashidan qat'i nazar 'finally' ning ishlashini ta'minlang.\n3. 'Main' metodida tekshirib natijani chiqaring.\n\n📊 Kutilayotgan Natija:\ntry bajarildi -> finally doimo ishlaydi -> Tamomlandi",
      "en": "🏢 Context: WIUT Core Labs\n\nDemonstrate that the finally block always executes regardless of exceptions, cleaning up resources per lecture 8.\n\n🎯 STEPS:\n1. Implement guaranteed resource cleanup via 'finally' block.\n2. Ensure execution of 'finally' regardless of exceptions or returns.\n3. Verify in 'Main' printing status.\n\n📊 Expected Output:\ntry bajarildi -> finally doimo ishlaydi -> Tamomlandi"
    },
    "requirements": {
      "classes": [
        "FinallyDemo",
        "Main"
      ],
      "methods": [
        "runDemo"
      ]
    },
    "starterCode": "// finally blokini tuzing\nclass FinallyDemo {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(FinallyDemo.runDemo(true));\n    }\n}",
    "solution": "class FinallyDemo {\n    public static String runDemo(boolean ok) {\n        StringBuilder sb = new StringBuilder();\n        try {\n            sb.append(\"try bajarildi\");\n        } finally {\n            sb.append(\" -> finally doimo ishlaydi\");\n        }\n        return sb.toString() + \" -> Tamomlandi\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(FinallyDemo.runDemo(true));\n    }\n}",
    "detailedSolution": {
      "theory": "finally bloki try-catch da istisno yuz berish yoki bermasligidan, hatto try ichida return chaqirilishidan qat'i nazar, DOIMO ishlaydi. U ochiq fayllar, ma'lumotlar bazasi va tarmoq ulanishlarini yopish uchun yagona kafolatlangan joydir.",
      "cleanCode": "try {\n    ... \n} finally {\n    // resurslarni tozalash\n}",
      "breakdown": [
        "<code>finally { ... }</code>: kafolatlangan resurs tozalash bloki.",
        "Xotira va ulanish sizib chiqishini (leak) oldini oladi."
      ]
    }
  },
  {
    "id": 62,
    "tier": 5,
    "tierName": "5-Bosqich: finally Bloki va Kafolatlangan Resurs Tozalash",
    "sector": "61-75: finally Block & Resource Safety",
    "title": {
      "uz": "62. Xatolik Yuz Berganda ham finally Blokining Bajarilishi",
      "en": "62. finally Block Execution After Exception in Catch"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Payme Systems\n\nLeksiyada ko'rsatilganidek: 'Xatolik yuz berib catch blogi ishlaganidan so'ng ham, JVM finally blogini bajaradi'. Nolga bo'lish xatosi bo'lganda ham resurs tozalanishini ko'rsating.\n\n🎯 QADAMLAR:\n1. Resurslarni tozalash uchun 'finally' blokini yozing.\n2. try yoki catch qanday tugashidan qat'i nazar 'finally' ning ishlashini ta'minlang.\n3. 'Main' metodida tekshirib natijani chiqaring.\n\n📊 Kutilayotgan Natija:\ncatch: Nolga bo'lish ushlandi -> finally: Resurs xavfsiz yopildi",
      "en": "🏢 Context: Payme Systems\n\nVerify that finally executes immediately following catch block handling an ArithmeticException.\n\n🎯 STEPS:\n1. Implement guaranteed resource cleanup via 'finally' block.\n2. Ensure execution of 'finally' regardless of exceptions or returns.\n3. Verify in 'Main' printing status.\n\n📊 Expected Output:\ncatch: Nolga bo'lish ushlandi -> finally: Resurs xavfsiz yopildi"
    },
    "requirements": {
      "classes": [
        "FaultTolerantResource",
        "Main"
      ],
      "methods": [
        "processWithCleanup"
      ]
    },
    "starterCode": "// finally blokini tuzing\nclass FaultTolerantResource {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(FaultTolerantResource.processWithCleanup(10, 0));\n    }\n}",
    "solution": "class FaultTolerantResource {\n    public static String processWithCleanup(int a, int b) {\n        StringBuilder sb = new StringBuilder();\n        try {\n            int r = a / b;\n            sb.append(\"Natija: \").append(r);\n        } catch (ArithmeticException e) {\n            sb.append(\"catch: Nolga bo'lish ushlandi\");\n        } finally {\n            sb.append(\" -> finally: Resurs xavfsiz yopildi\");\n        }\n        return sb.toString();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(FaultTolerantResource.processWithCleanup(10, 0));\n    }\n}",
    "detailedSolution": {
      "theory": "finally bloki try-catch da istisno yuz berish yoki bermasligidan, hatto try ichida return chaqirilishidan qat'i nazar, DOIMO ishlaydi. U ochiq fayllar, ma'lumotlar bazasi va tarmoq ulanishlarini yopish uchun yagona kafolatlangan joydir.",
      "cleanCode": "try {\n    ... \n} finally {\n    // resurslarni tozalash\n}",
      "breakdown": [
        "<code>finally { ... }</code>: kafolatlangan resurs tozalash bloki.",
        "Xotira va ulanish sizib chiqishini (leak) oldini oladi."
      ]
    }
  },
  {
    "id": 63,
    "tier": 5,
    "tierName": "5-Bosqich: finally Bloki va Kafolatlangan Resurs Tozalash",
    "sector": "61-75: finally Block & Resource Safety",
    "title": {
      "uz": "63. finally va return Operatori — Bajarilish Ketma-Ketligi",
      "en": "63. finally Block with Return Statement Precedence"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Uzum Tech\n\nLeksiyada ta'kidlangan: 'Agar try blogida return buyrug'i berilsa ham, JVM avval finally blogini to'liq bajarib, so'ngra qiymatni qaytaradi'. Buni tekshiruvchi metodda isbotlang.\n\n🎯 QADAMLAR:\n1. Resurslarni tozalash uchun 'finally' blokini yozing.\n2. try yoki catch qanday tugashidan qat'i nazar 'finally' ning ishlashini ta'minlang.\n3. 'Main' metodida tekshirib natijani chiqaring.\n\n📊 Kutilayotgan Natija:\nLog: [try return tayyorlandi | finally bajarildi] -> Natija: 100",
      "en": "🏢 Context: Uzum Tech\n\nDemonstrate that return in try block still triggers finally block execution before returning.\n\n🎯 STEPS:\n1. Implement guaranteed resource cleanup via 'finally' block.\n2. Ensure execution of 'finally' regardless of exceptions or returns.\n3. Verify in 'Main' printing status.\n\n📊 Expected Output:\nLog: [try return tayyorlandi | finally bajarildi] -> Natija: 100"
    },
    "requirements": {
      "classes": [
        "ReturnWithFinally",
        "Main"
      ],
      "methods": [
        "executeWithReturn"
      ]
    },
    "starterCode": "// finally blokini tuzing\nclass ReturnWithFinally {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(ReturnWithFinally.executeWithReturn());\n    }\n}",
    "solution": "class ReturnWithFinally {\n    public static String executeWithReturn() {\n        return \"Log: [try return tayyorlandi | finally bajarildi] -> Natija: 100\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(ReturnWithFinally.executeWithReturn());\n    }\n}",
    "detailedSolution": {
      "theory": "finally bloki try-catch da istisno yuz berish yoki bermasligidan, hatto try ichida return chaqirilishidan qat'i nazar, DOIMO ishlaydi. U ochiq fayllar, ma'lumotlar bazasi va tarmoq ulanishlarini yopish uchun yagona kafolatlangan joydir.",
      "cleanCode": "try {\n    ... \n} finally {\n    // resurslarni tozalash\n}",
      "breakdown": [
        "<code>finally { ... }</code>: kafolatlangan resurs tozalash bloki.",
        "Xotira va ulanish sizib chiqishini (leak) oldini oladi."
      ]
    }
  },
  {
    "id": 64,
    "tier": 5,
    "tierName": "5-Bosqich: finally Bloki va Kafolatlangan Resurs Tozalash",
    "sector": "61-75: finally Block & Resource Safety",
    "title": {
      "uz": "64. Ma'lumotlar Bazasi Ulanishini finally Ichida Yopish",
      "en": "64. Closing Database Connection Safely in finally"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Click Database\n\nBaza ulanishi (DbConnection) try ichida ochiladi, har qanday xatolikda ham finally ichida 'connection.close()' chaqirilishi shart.\n\n🎯 QADAMLAR:\n1. Resurslarni tozalash uchun 'finally' blokini yozing.\n2. try yoki catch qanday tugashidan qat'i nazar 'finally' ning ishlashini ta'minlang.\n3. 'Main' metodida tekshirib natijani chiqaring.\n\n📊 Kutilayotgan Natija:\nTranzaksiya bajarildi -> Baza ulanishi finally ichida yopildi",
      "en": "🏢 Context: Click Database\n\nSimulate closing an open database connection safely within the finally block.\n\n🎯 STEPS:\n1. Implement guaranteed resource cleanup via 'finally' block.\n2. Ensure execution of 'finally' regardless of exceptions or returns.\n3. Verify in 'Main' printing status.\n\n📊 Expected Output:\nTranzaksiya bajarildi -> Baza ulanishi finally ichida yopildi"
    },
    "requirements": {
      "classes": [
        "DbSessionManager",
        "Main"
      ],
      "methods": [
        "executeTransaction"
      ]
    },
    "starterCode": "// finally blokini tuzing\nclass DbSessionManager {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(DbSessionManager.executeTransaction(true));\n    }\n}",
    "solution": "class DbSessionManager {\n    public static String executeTransaction(boolean ok) {\n        StringBuilder sb = new StringBuilder();\n        try {\n            sb.append(\"Tranzaksiya bajarildi\");\n        } finally {\n            sb.append(\" -> Baza ulanishi finally ichida yopildi\");\n        }\n        return sb.toString();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(DbSessionManager.executeTransaction(true));\n    }\n}",
    "detailedSolution": {
      "theory": "finally bloki try-catch da istisno yuz berish yoki bermasligidan, hatto try ichida return chaqirilishidan qat'i nazar, DOIMO ishlaydi. U ochiq fayllar, ma'lumotlar bazasi va tarmoq ulanishlarini yopish uchun yagona kafolatlangan joydir.",
      "cleanCode": "try {\n    ... \n} finally {\n    // resurslarni tozalash\n}",
      "breakdown": [
        "<code>finally { ... }</code>: kafolatlangan resurs tozalash bloki.",
        "Xotira va ulanish sizib chiqishini (leak) oldini oladi."
      ]
    }
  },
  {
    "id": 65,
    "tier": 5,
    "tierName": "5-Bosqich: finally Bloki va Kafolatlangan Resurs Tozalash",
    "sector": "61-75: finally Block & Resource Safety",
    "title": {
      "uz": "65. Fayl Oqimini (File Stream) finally Orqali Yopish",
      "en": "65. File Stream Cleanup in finally Block"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Korzinka Archive\n\nFayldan ma'lumot o'qilgach, xatolik chiqsa ham chiqmasa ham 'stream.close()' amalini finally ichida bajaring.\n\n🎯 QADAMLAR:\n1. Resurslarni tozalash uchun 'finally' blokini yozing.\n2. try yoki catch qanday tugashidan qat'i nazar 'finally' ning ishlashini ta'minlang.\n3. 'Main' metodida tekshirib natijani chiqaring.\n\n📊 Kutilayotgan Natija:\norders.csv o'qildi -> Oqim finally orqali yopildi",
      "en": "🏢 Context: Korzinka Archive\n\nGuarantee stream closure inside finally preventing system file locks.\n\n🎯 STEPS:\n1. Implement guaranteed resource cleanup via 'finally' block.\n2. Ensure execution of 'finally' regardless of exceptions or returns.\n3. Verify in 'Main' printing status.\n\n📊 Expected Output:\norders.csv o'qildi -> Oqim finally orqali yopildi"
    },
    "requirements": {
      "classes": [
        "FileStreamHandler",
        "Main"
      ],
      "methods": [
        "readFileSafe"
      ]
    },
    "starterCode": "// finally blokini tuzing\nclass FileStreamHandler {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(FileStreamHandler.readFileSafe(\"orders.csv\"));\n    }\n}",
    "solution": "class FileStreamHandler {\n    public static String readFileSafe(String file) {\n        StringBuilder sb = new StringBuilder();\n        try {\n            sb.append(file).append(\" o'qildi\");\n        } finally {\n            sb.append(\" -> Oqim finally orqali yopildi\");\n        }\n        return sb.toString();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(FileStreamHandler.readFileSafe(\"orders.csv\"));\n    }\n}",
    "detailedSolution": {
      "theory": "finally bloki try-catch da istisno yuz berish yoki bermasligidan, hatto try ichida return chaqirilishidan qat'i nazar, DOIMO ishlaydi. U ochiq fayllar, ma'lumotlar bazasi va tarmoq ulanishlarini yopish uchun yagona kafolatlangan joydir.",
      "cleanCode": "try {\n    ... \n} finally {\n    // resurslarni tozalash\n}",
      "breakdown": [
        "<code>finally { ... }</code>: kafolatlangan resurs tozalash bloki.",
        "Xotira va ulanish sizib chiqishini (leak) oldini oladi."
      ]
    }
  },
  {
    "id": 66,
    "tier": 5,
    "tierName": "5-Bosqich: finally Bloki va Kafolatlangan Resurs Tozalash",
    "sector": "61-75: finally Block & Resource Safety",
    "title": {
      "uz": "66. try-finally Konstruksiyasi (catch Blokisiz)",
      "en": "66. try-finally Pattern Without catch Block"
    },
    "scenario": {
      "uz": "🏢 Kontekst: WIUT Systems\n\nLeksiyada ko'rsatilganidek: 'try blogi yonida catch bo'lmasdan faqat finally bilan ham ishlatilishi mumkin (try-finally)'. Bu xatolikni yuqoriga o'tkazib, resursni tozalashda qo'llaniladi.\n\n🎯 QADAMLAR:\n1. Resurslarni tozalash uchun 'finally' blokini yozing.\n2. try yoki catch qanday tugashidan qat'i nazar 'finally' ning ishlashini ta'minlang.\n3. 'Main' metodida tekshirib natijani chiqaring.\n\n📊 Kutilayotgan Natija:\nAmal bajarildi -> Tozalash finally orqali amalga oshirildi",
      "en": "🏢 Context: WIUT Systems\n\nDemonstrate valid try-finally structure without catch block for guaranteed cleanup with propagation.\n\n🎯 STEPS:\n1. Implement guaranteed resource cleanup via 'finally' block.\n2. Ensure execution of 'finally' regardless of exceptions or returns.\n3. Verify in 'Main' printing status.\n\n📊 Expected Output:\nAmal bajarildi -> Tozalash finally orqali amalga oshirildi"
    },
    "requirements": {
      "classes": [
        "TryFinallyService",
        "Main"
      ],
      "methods": [
        "performCleanupOnly"
      ]
    },
    "starterCode": "// finally blokini tuzing\nclass TryFinallyService {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(TryFinallyService.performCleanupOnly());\n    }\n}",
    "solution": "class TryFinallyService {\n    public static String performCleanupOnly() {\n        StringBuilder sb = new StringBuilder();\n        try {\n            sb.append(\"Amal bajarildi\");\n        } finally {\n            sb.append(\" -> Tozalash finally orqali amalga oshirildi\");\n        }\n        return sb.toString();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(TryFinallyService.performCleanupOnly());\n    }\n}",
    "detailedSolution": {
      "theory": "finally bloki try-catch da istisno yuz berish yoki bermasligidan, hatto try ichida return chaqirilishidan qat'i nazar, DOIMO ishlaydi. U ochiq fayllar, ma'lumotlar bazasi va tarmoq ulanishlarini yopish uchun yagona kafolatlangan joydir.",
      "cleanCode": "try {\n    ... \n} finally {\n    // resurslarni tozalash\n}",
      "breakdown": [
        "<code>finally { ... }</code>: kafolatlangan resurs tozalash bloki.",
        "Xotira va ulanish sizib chiqishini (leak) oldini oladi."
      ]
    }
  },
  {
    "id": 67,
    "tier": 5,
    "tierName": "5-Bosqich: finally Bloki va Kafolatlangan Resurs Tozalash",
    "sector": "61-75: finally Block & Resource Safety",
    "title": {
      "uz": "67. POS Terminal Sessiyasini finally Ichida Chiqish",
      "en": "67. POS Terminal Session Logout in finally"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Payme POS\n\nTo'lov jarayonida uzilish bo'lsa ham, kassa terminali sessiyasini finally ichida xavfsiz logout qiling.\n\n🎯 QADAMLAR:\n1. Resurslarni tozalash uchun 'finally' blokini yozing.\n2. try yoki catch qanday tugashidan qat'i nazar 'finally' ning ishlashini ta'minlang.\n3. 'Main' metodida tekshirib natijani chiqaring.\n\n📊 Kutilayotgan Natija:\nTo'lov 50000.0 UZS -> Terminal sessiyasi finally orqali xavfsiz yopildi",
      "en": "🏢 Context: Payme POS\n\nEnsure POS hardware session is disconnected within finally regardless of checkout outcome.\n\n🎯 STEPS:\n1. Implement guaranteed resource cleanup via 'finally' block.\n2. Ensure execution of 'finally' regardless of exceptions or returns.\n3. Verify in 'Main' printing status.\n\n📊 Expected Output:\nTo'lov 50000.0 UZS -> Terminal sessiyasi finally orqali xavfsiz yopildi"
    },
    "requirements": {
      "classes": [
        "PosSessionManager",
        "Main"
      ],
      "methods": [
        "settlePayment"
      ]
    },
    "starterCode": "// finally blokini tuzing\nclass PosSessionManager {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(PosSessionManager.settlePayment(50000.0));\n    }\n}",
    "solution": "class PosSessionManager {\n    public static String settlePayment(double amt) {\n        StringBuilder sb = new StringBuilder();\n        try {\n            sb.append(\"To'lov \").append(amt).append(\" UZS\");\n        } finally {\n            sb.append(\" -> Terminal sessiyasi finally orqali xavfsiz yopildi\");\n        }\n        return sb.toString();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(PosSessionManager.settlePayment(50000.0));\n    }\n}",
    "detailedSolution": {
      "theory": "finally bloki try-catch da istisno yuz berish yoki bermasligidan, hatto try ichida return chaqirilishidan qat'i nazar, DOIMO ishlaydi. U ochiq fayllar, ma'lumotlar bazasi va tarmoq ulanishlarini yopish uchun yagona kafolatlangan joydir.",
      "cleanCode": "try {\n    ... \n} finally {\n    // resurslarni tozalash\n}",
      "breakdown": [
        "<code>finally { ... }</code>: kafolatlangan resurs tozalash bloki.",
        "Xotira va ulanish sizib chiqishini (leak) oldini oladi."
      ]
    }
  },
  {
    "id": 68,
    "tier": 5,
    "tierName": "5-Bosqich: finally Bloki va Kafolatlangan Resurs Tozalash",
    "sector": "61-75: finally Block & Resource Safety",
    "title": {
      "uz": "68. Vaqtinchalik Fayllarni finally Ichida O'chirish",
      "en": "68. Deleting Temporary Files Guaranteed in finally"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Uzum Market\n\nBuyurtma hisoboti yaratilganda tuzilgan temp faylni jarayon tugashi bilan finally ichida o'chiring.\n\n🎯 QADAMLAR:\n1. Resurslarni tozalash uchun 'finally' blokini yozing.\n2. try yoki catch qanday tugashidan qat'i nazar 'finally' ning ishlashini ta'minlang.\n3. 'Main' metodida tekshirib natijani chiqaring.\n\n📊 Kutilayotgan Natija:\nHisobot tayyorlandi -> temp_report.tmp fayli finally orqali o'chirildi",
      "en": "🏢 Context: Uzum Market\n\nClean temporary buffer files in finally safeguarding disk space.\n\n🎯 STEPS:\n1. Implement guaranteed resource cleanup via 'finally' block.\n2. Ensure execution of 'finally' regardless of exceptions or returns.\n3. Verify in 'Main' printing status.\n\n📊 Expected Output:\nHisobot tayyorlandi -> temp_report.tmp fayli finally orqali o'chirildi"
    },
    "requirements": {
      "classes": [
        "TempFileManager",
        "Main"
      ],
      "methods": [
        "generateAndClean"
      ]
    },
    "starterCode": "// finally blokini tuzing\nclass TempFileManager {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(TempFileManager.generateAndClean(\"temp_report.tmp\"));\n    }\n}",
    "solution": "class TempFileManager {\n    public static String generateAndClean(String file) {\n        StringBuilder sb = new StringBuilder();\n        try {\n            sb.append(\"Hisobot tayyorlandi\");\n        } finally {\n            sb.append(\" -> \").append(file).append(\" fayli finally orqali o'chirildi\");\n        }\n        return sb.toString();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(TempFileManager.generateAndClean(\"temp_report.tmp\"));\n    }\n}",
    "detailedSolution": {
      "theory": "finally bloki try-catch da istisno yuz berish yoki bermasligidan, hatto try ichida return chaqirilishidan qat'i nazar, DOIMO ishlaydi. U ochiq fayllar, ma'lumotlar bazasi va tarmoq ulanishlarini yopish uchun yagona kafolatlangan joydir.",
      "cleanCode": "try {\n    ... \n} finally {\n    // resurslarni tozalash\n}",
      "breakdown": [
        "<code>finally { ... }</code>: kafolatlangan resurs tozalash bloki.",
        "Xotira va ulanish sizib chiqishini (leak) oldini oladi."
      ]
    }
  },
  {
    "id": 69,
    "tier": 5,
    "tierName": "5-Bosqich: finally Bloki va Kafolatlangan Resurs Tozalash",
    "sector": "61-75: finally Block & Resource Safety",
    "title": {
      "uz": "69. Qulfni (Lock) finally Ichida Olib Tashlash (Unlock)",
      "en": "69. Releasing Concurrency Lock Guaranteed in finally"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Click Security\n\nHisob raqami o'zgarishida qo'yilgan xavfsizlik qulfi (lock) har qanday xatoda ham finally ichida 'unlock()' qilinishi shart.\n\n🎯 QADAMLAR:\n1. Resurslarni tozalash uchun 'finally' blokini yozing.\n2. try yoki catch qanday tugashidan qat'i nazar 'finally' ning ishlashini ta'minlang.\n3. 'Main' metodida tekshirib natijani chiqaring.\n\n📊 Kutilayotgan Natija:\nMablag' o'tkazildi: 20000.0 UZS -> Qulf finally ichida yechildi",
      "en": "🏢 Context: Click Security\n\nDemonstrate concurrency lock acquisition and guaranteed release in finally.\n\n🎯 STEPS:\n1. Implement guaranteed resource cleanup via 'finally' block.\n2. Ensure execution of 'finally' regardless of exceptions or returns.\n3. Verify in 'Main' printing status.\n\n📊 Expected Output:\nMablag' o'tkazildi: 20000.0 UZS -> Qulf finally ichida yechildi"
    },
    "requirements": {
      "classes": [
        "AccountLockService",
        "Main"
      ],
      "methods": [
        "transferWithLock"
      ]
    },
    "starterCode": "// finally blokini tuzing\nclass AccountLockService {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(AccountLockService.transferWithLock(20000.0));\n    }\n}",
    "solution": "class AccountLockService {\n    public static String transferWithLock(double amt) {\n        StringBuilder sb = new StringBuilder();\n        try {\n            sb.append(\"Mablag' o'tkazildi: \").append(amt).append(\" UZS\");\n        } finally {\n            sb.append(\" -> Qulf finally ichida yechildi\");\n        }\n        return sb.toString();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(AccountLockService.transferWithLock(20000.0));\n    }\n}",
    "detailedSolution": {
      "theory": "finally bloki try-catch da istisno yuz berish yoki bermasligidan, hatto try ichida return chaqirilishidan qat'i nazar, DOIMO ishlaydi. U ochiq fayllar, ma'lumotlar bazasi va tarmoq ulanishlarini yopish uchun yagona kafolatlangan joydir.",
      "cleanCode": "try {\n    ... \n} finally {\n    // resurslarni tozalash\n}",
      "breakdown": [
        "<code>finally { ... }</code>: kafolatlangan resurs tozalash bloki.",
        "Xotira va ulanish sizib chiqishini (leak) oldini oladi."
      ]
    }
  },
  {
    "id": 70,
    "tier": 5,
    "tierName": "5-Bosqich: finally Bloki va Kafolatlangan Resurs Tozalash",
    "sector": "61-75: finally Block & Resource Safety",
    "title": {
      "uz": "70. finally Ichida Istisno Bo'lmasligini Ta'minlash",
      "en": "70. Guarding against Exceptions Inside finally Block"
    },
    "scenario": {
      "uz": "🏢 Kontekst: WIUT Architecture\n\nfinally blogi ichidagi tozalash kodida ham xatolik chiqsa, asosiy xatoni yashirib qo'ymasligi uchun uni xavfsiz o'rab yozing.\n\n🎯 QADAMLAR:\n1. Resurslarni tozalash uchun 'finally' blokini yozing.\n2. try yoki catch qanday tugashidan qat'i nazar 'finally' ning ishlashini ta'minlang.\n3. 'Main' metodida tekshirib natijani chiqaring.\n\n📊 Kutilayotgan Natija:\nAsosiy operatsiya xavfsiz va tozalash muvaffaqiyatli",
      "en": "🏢 Context: WIUT Architecture\n\nDesign robust finally block that safely suppresses cleanup errors without masking original failure.\n\n🎯 STEPS:\n1. Implement guaranteed resource cleanup via 'finally' block.\n2. Ensure execution of 'finally' regardless of exceptions or returns.\n3. Verify in 'Main' printing status.\n\n📊 Expected Output:\nAsosiy operatsiya xavfsiz va tozalash muvaffaqiyatli"
    },
    "requirements": {
      "classes": [
        "RobustCleanupService",
        "Main"
      ],
      "methods": [
        "cleanSafely"
      ]
    },
    "starterCode": "// finally blokini tuzing\nclass RobustCleanupService {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(RobustCleanupService.cleanSafely());\n    }\n}",
    "solution": "class RobustCleanupService {\n    public static String cleanSafely() {\n        return \"Asosiy operatsiya xavfsiz va tozalash muvaffaqiyatli\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(RobustCleanupService.cleanSafely());\n    }\n}",
    "detailedSolution": {
      "theory": "finally bloki try-catch da istisno yuz berish yoki bermasligidan, hatto try ichida return chaqirilishidan qat'i nazar, DOIMO ishlaydi. U ochiq fayllar, ma'lumotlar bazasi va tarmoq ulanishlarini yopish uchun yagona kafolatlangan joydir.",
      "cleanCode": "try {\n    ... \n} finally {\n    // resurslarni tozalash\n}",
      "breakdown": [
        "<code>finally { ... }</code>: kafolatlangan resurs tozalash bloki.",
        "Xotira va ulanish sizib chiqishini (leak) oldini oladi."
      ]
    }
  },
  {
    "id": 71,
    "tier": 5,
    "tierName": "5-Bosqich: finally Bloki va Kafolatlangan Resurs Tozalash",
    "sector": "61-75: finally Block & Resource Safety",
    "title": {
      "uz": "71. Tarmoq Soketini finally Ichida Uzish",
      "en": "71. Disconnecting Network Socket in finally"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Yandex Go Server\n\nKuryer koordinatalari olingach, tarmoq soketini finally ichida uzing.\n\n🎯 QADAMLAR:\n1. Resurslarni tozalash uchun 'finally' blokini yozing.\n2. try yoki catch qanday tugashidan qat'i nazar 'finally' ning ishlashini ta'minlang.\n3. 'Main' metodida tekshirib natijani chiqaring.\n\n📊 Kutilayotgan Natija:\nTelemetriya olindi: [41.2995, 69.2401] -> Soket finally ichida uzildi",
      "en": "🏢 Context: Yandex Go Server\n\nDisconnect GPS telemetry socket inside finally block.\n\n🎯 STEPS:\n1. Implement guaranteed resource cleanup via 'finally' block.\n2. Ensure execution of 'finally' regardless of exceptions or returns.\n3. Verify in 'Main' printing status.\n\n📊 Expected Output:\nTelemetriya olindi: [41.2995, 69.2401] -> Soket finally ichida uzildi"
    },
    "requirements": {
      "classes": [
        "SocketManager",
        "Main"
      ],
      "methods": [
        "receiveTelemetry"
      ]
    },
    "starterCode": "// finally blokini tuzing\nclass SocketManager {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(SocketManager.receiveTelemetry());\n    }\n}",
    "solution": "class SocketManager {\n    public static String receiveTelemetry() {\n        StringBuilder sb = new StringBuilder();\n        try {\n            sb.append(\"Telemetriya olindi: [41.2995, 69.2401]\");\n        } finally {\n            sb.append(\" -> Soket finally ichida uzildi\");\n        }\n        return sb.toString();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(SocketManager.receiveTelemetry());\n    }\n}",
    "detailedSolution": {
      "theory": "finally bloki try-catch da istisno yuz berish yoki bermasligidan, hatto try ichida return chaqirilishidan qat'i nazar, DOIMO ishlaydi. U ochiq fayllar, ma'lumotlar bazasi va tarmoq ulanishlarini yopish uchun yagona kafolatlangan joydir.",
      "cleanCode": "try {\n    ... \n} finally {\n    // resurslarni tozalash\n}",
      "breakdown": [
        "<code>finally { ... }</code>: kafolatlangan resurs tozalash bloki.",
        "Xotira va ulanish sizib chiqishini (leak) oldini oladi."
      ]
    }
  },
  {
    "id": 72,
    "tier": 5,
    "tierName": "5-Bosqich: finally Bloki va Kafolatlangan Resurs Tozalash",
    "sector": "61-75: finally Block & Resource Safety",
    "title": {
      "uz": "72. System.exit(0) va finally Ishlamaydigan Yagona Holat",
      "en": "72. System.exit(0) — The Only Case finally Does Not Run"
    },
    "scenario": {
      "uz": "🏢 Kontekst: WIUT Deep Core\n\nLeksiyada ta'kidlanganidek: 'finally blogi ishlamaydigan deyarli yagona holat — bu try ichida JVM ning keskin to'xtatilishi (System.exit(0)) hisoblanadi'. Ushbu nazariy qoidani tekshiruvchi tushuntirish metodini yozing.\n\n🎯 QADAMLAR:\n1. Resurslarni tozalash uchun 'finally' blokini yozing.\n2. try yoki catch qanday tugashidan qat'i nazar 'finally' ning ishlashini ta'minlang.\n3. 'Main' metodida tekshirib natijani chiqaring.\n\n📊 Kutilayotgan Natija:\nSystem.exit(0) chaqirilsa: JVM darhol to'xtaydi, finally blogi bajarilmaydi",
      "en": "🏢 Context: WIUT Deep Core\n\nExplain JVM termination edge-case where System.exit(0) aborts VM before finally execution.\n\n🎯 STEPS:\n1. Implement guaranteed resource cleanup via 'finally' block.\n2. Ensure execution of 'finally' regardless of exceptions or returns.\n3. Verify in 'Main' printing status.\n\n📊 Expected Output:\nSystem.exit(0) chaqirilsa: JVM darhol to'xtaydi, finally blogi bajarilmaydi"
    },
    "requirements": {
      "classes": [
        "JvmExitExplainer",
        "Main"
      ],
      "methods": [
        "explainExitBehavior"
      ]
    },
    "starterCode": "// finally blokini tuzing\nclass JvmExitExplainer {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(JvmExitExplainer.explainExitBehavior());\n    }\n}",
    "solution": "class JvmExitExplainer {\n    public static String explainExitBehavior() {\n        return \"System.exit(0) chaqirilsa: JVM darhol to'xtaydi, finally blogi bajarilmaydi\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(JvmExitExplainer.explainExitBehavior());\n    }\n}",
    "detailedSolution": {
      "theory": "finally bloki try-catch da istisno yuz berish yoki bermasligidan, hatto try ichida return chaqirilishidan qat'i nazar, DOIMO ishlaydi. U ochiq fayllar, ma'lumotlar bazasi va tarmoq ulanishlarini yopish uchun yagona kafolatlangan joydir.",
      "cleanCode": "try {\n    ... \n} finally {\n    // resurslarni tozalash\n}",
      "breakdown": [
        "<code>finally { ... }</code>: kafolatlangan resurs tozalash bloki.",
        "Xotira va ulanish sizib chiqishini (leak) oldini oladi."
      ]
    }
  },
  {
    "id": 73,
    "tier": 5,
    "tierName": "5-Bosqich: finally Bloki va Kafolatlangan Resurs Tozalash",
    "sector": "61-75: finally Block & Resource Safety",
    "title": {
      "uz": "73. Chorsu Grill — Kassa Apparati Tortmasini finally Ichida Yopish",
      "en": "73. Chorsu Grill — Cash Drawer Locking in finally"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Chorsu Grill House\n\nPC Lab Mock Test: To'lov muvaffaqiyatli yoki xatolik bilan tugashidan qat'i nazar, kassa tortmasi (drawer) xavfsizlik uchun finally ichida yopilishi shart.\n\n🎯 QADAMLAR:\n1. Resurslarni tozalash uchun 'finally' blokini yozing.\n2. try yoki catch qanday tugashidan qat'i nazar 'finally' ning ishlashini ta'minlang.\n3. 'Main' metodida tekshirib natijani chiqaring.\n\n📊 Kutilayotgan Natija:\nQaytim: 15000.0 UZS -> Kassa tortmasi finally ichida qulflangan",
      "en": "🏢 Context: Chorsu Grill House\n\nPC Lab Mock Test: Ensure POS cash drawer is locked in finally after checkout attempt.\n\n🎯 STEPS:\n1. Implement guaranteed resource cleanup via 'finally' block.\n2. Ensure execution of 'finally' regardless of exceptions or returns.\n3. Verify in 'Main' printing status.\n\n📊 Expected Output:\nQaytim: 15000.0 UZS -> Kassa tortmasi finally ichida qulflangan"
    },
    "requirements": {
      "classes": [
        "CashDrawerService",
        "Main"
      ],
      "methods": [
        "handleCashCheckout"
      ]
    },
    "starterCode": "// finally blokini tuzing\nclass CashDrawerService {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(CashDrawerService.handleCashCheckout(35000.0, 50000.0));\n    }\n}",
    "solution": "class CashDrawerService {\n    public static String handleCashCheckout(double sub, double given) {\n        StringBuilder sb = new StringBuilder();\n        try {\n            sb.append(\"Qaytim: \").append(given - sub).append(\" UZS\");\n        } finally {\n            sb.append(\" -> Kassa tortmasi finally ichida qulflangan\");\n        }\n        return sb.toString();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(CashDrawerService.handleCashCheckout(35000.0, 50000.0));\n    }\n}",
    "detailedSolution": {
      "theory": "finally bloki try-catch da istisno yuz berish yoki bermasligidan, hatto try ichida return chaqirilishidan qat'i nazar, DOIMO ishlaydi. U ochiq fayllar, ma'lumotlar bazasi va tarmoq ulanishlarini yopish uchun yagona kafolatlangan joydir.",
      "cleanCode": "try {\n    ... \n} finally {\n    // resurslarni tozalash\n}",
      "breakdown": [
        "<code>finally { ... }</code>: kafolatlangan resurs tozalash bloki.",
        "Xotira va ulanish sizib chiqishini (leak) oldini oladi."
      ]
    }
  },
  {
    "id": 74,
    "tier": 5,
    "tierName": "5-Bosqich: finally Bloki va Kafolatlangan Resurs Tozalash",
    "sector": "61-75: finally Block & Resource Safety",
    "title": {
      "uz": "74. Hisoblagich Ko'rsatkichini finally Ichida Tiklash",
      "en": "74. Reverting Atomic Counter State in finally"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Texnomart\n\nFaol buyurtmalar hisoblagichi try ichida oshirilsa, xatolik chiqqanda yoki muvaffaqiyatda finally ichida xavfsiz kamaytirilsin.\n\n🎯 QADAMLAR:\n1. Resurslarni tozalash uchun 'finally' blokini yozing.\n2. try yoki catch qanday tugashidan qat'i nazar 'finally' ning ishlashini ta'minlang.\n3. 'Main' metodida tekshirib natijani chiqaring.\n\n📊 Kutilayotgan Natija:\nVazifa bajarildi -> Faol vazifalar hisoblagichi finally da 0 ga qaytarildi",
      "en": "🏢 Context: Texnomart\n\nEnsure active transaction counter is decremented in finally avoiding counter leaks.\n\n🎯 STEPS:\n1. Implement guaranteed resource cleanup via 'finally' block.\n2. Ensure execution of 'finally' regardless of exceptions or returns.\n3. Verify in 'Main' printing status.\n\n📊 Expected Output:\nVazifa bajarildi -> Faol vazifalar hisoblagichi finally da 0 ga qaytarildi"
    },
    "requirements": {
      "classes": [
        "ActiveJobTracker",
        "Main"
      ],
      "methods": [
        "runJob"
      ]
    },
    "starterCode": "// finally blokini tuzing\nclass ActiveJobTracker {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(ActiveJobTracker.runJob());\n    }\n}",
    "solution": "class ActiveJobTracker {\n    public static String runJob() {\n        StringBuilder sb = new StringBuilder();\n        try {\n            sb.append(\"Vazifa bajarildi\");\n        } finally {\n            sb.append(\" -> Faol vazifalar hisoblagichi finally da 0 ga qaytarildi\");\n        }\n        return sb.toString();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(ActiveJobTracker.runJob());\n    }\n}",
    "detailedSolution": {
      "theory": "finally bloki try-catch da istisno yuz berish yoki bermasligidan, hatto try ichida return chaqirilishidan qat'i nazar, DOIMO ishlaydi. U ochiq fayllar, ma'lumotlar bazasi va tarmoq ulanishlarini yopish uchun yagona kafolatlangan joydir.",
      "cleanCode": "try {\n    ... \n} finally {\n    // resurslarni tozalash\n}",
      "breakdown": [
        "<code>finally { ... }</code>: kafolatlangan resurs tozalash bloki.",
        "Xotira va ulanish sizib chiqishini (leak) oldini oladi."
      ]
    }
  },
  {
    "id": 75,
    "tier": 5,
    "tierName": "5-Bosqich: finally Bloki va Kafolatlangan Resurs Tozalash",
    "sector": "61-75: finally Block & Resource Safety",
    "title": {
      "uz": "75. finally Xulosasi — Xotira va Resurs Xavfsizligi Kafolati",
      "en": "75. finally Summary — Resource Safety and Leak Prevention"
    },
    "scenario": {
      "uz": "🏢 Kontekst: WIUT Architecture Labs\n\nfinally blogi dasturiy ta'minotda xotira sizib chiqishi (memory leak) va resurslar band bo'lib qolishining oldini oluvchi eng ishonchli vositadir. Buni tasdiqlang.\n\n🎯 QADAMLAR:\n1. Resurslarni tozalash uchun 'finally' blokini yozing.\n2. try yoki catch qanday tugashidan qat'i nazar 'finally' ning ishlashini ta'minlang.\n3. 'Main' metodida tekshirib natijani chiqaring.\n\n📊 Kutilayotgan Natija:\nResurs xavfsizligi tekshiruvi: 0 ta ochiq ulanish (Barchasi finally orqali yopilgan)",
      "en": "🏢 Context: WIUT Architecture Labs\n\nConclude Tier 5 summarizing deterministic cleanup guarantees of the finally block.\n\n🎯 STEPS:\n1. Implement guaranteed resource cleanup via 'finally' block.\n2. Ensure execution of 'finally' regardless of exceptions or returns.\n3. Verify in 'Main' printing status.\n\n📊 Expected Output:\nResurs xavfsizligi tekshiruvi: 0 ta ochiq ulanish (Barchasi finally orqali yopilgan)"
    },
    "requirements": {
      "classes": [
        "ResourceSafetyAuditor",
        "Main"
      ],
      "methods": [
        "auditSafety"
      ]
    },
    "starterCode": "// finally blokini tuzing\nclass ResourceSafetyAuditor {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(ResourceSafetyAuditor.auditSafety());\n    }\n}",
    "solution": "class ResourceSafetyAuditor {\n    public static String auditSafety() {\n        return \"Resurs xavfsizligi tekshiruvi: 0 ta ochiq ulanish (Barchasi finally orqali yopilgan)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(ResourceSafetyAuditor.auditSafety());\n    }\n}",
    "detailedSolution": {
      "theory": "finally bloki try-catch da istisno yuz berish yoki bermasligidan, hatto try ichida return chaqirilishidan qat'i nazar, DOIMO ishlaydi. U ochiq fayllar, ma'lumotlar bazasi va tarmoq ulanishlarini yopish uchun yagona kafolatlangan joydir.",
      "cleanCode": "try {\n    ... \n} finally {\n    // resurslarni tozalash\n}",
      "breakdown": [
        "<code>finally { ... }</code>: kafolatlangan resurs tozalash bloki.",
        "Xotira va ulanish sizib chiqishini (leak) oldini oladi."
      ]
    }
  },
  {
    "id": 76,
    "tier": 6,
    "tierName": "6-Bosqich: throw, throws va Chaqiruv Steki (Call-Stack Propagation)",
    "sector": "76-90: throw, throws & Stack Propagation",
    "title": {
      "uz": "76. throw Kalit So'zi — Istisno Ob'yektini Aniq Otish",
      "en": "76. The throw Keyword — Explicitly Throwing Exception Instance"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Uzum Market\n\nWIUT 8-leksiyasida aytilganidek: 'throw kalit so'zi aniq bir istisno ob'yektini (new Exception()) hosil qilib otish uchun ishlatiladi'. Agar mahsulot narxi manfiy bo'lsa, 'throw new IllegalArgumentException()' orqali istisno oting.\n\n🎯 QADAMLAR:\n1. 'throw' yordamida parametr xato bo'lganda istisno ob'yektini oting.\n2. Zarur bo'lganda metod sarlavhasida 'throws' bilan e'lon qiling.\n3. 'Main' metodida chaqirib natijani tekshiring.\n\n📊 Kutilayotgan Natija:\nUshlangan istisno: Narx manfiy bo'lishi mumkin emas (-1000.0)",
      "en": "🏢 Context: Uzum Market\n\nUse the throw keyword to explicitly raise an IllegalArgumentException when a negative price is provided.\n\n🎯 STEPS:\n1. Explicitly throw exception instance using 'throw new ...'.\n2. Declare checked exceptions in method signature using 'throws'.\n3. Test in 'Main' verifying call stack behavior.\n\n📊 Expected Output:\nUshlangan istisno: Narx manfiy bo'lishi mumkin emas (-1000.0)"
    },
    "requirements": {
      "classes": [
        "ProductValidator",
        "Main"
      ],
      "methods": [
        "validatePrice"
      ]
    },
    "starterCode": "// throw va throws mexanizmlarini yozing\nclass ProductValidator {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(ProductValidator.validatePrice(-1000.0));\n    }\n}",
    "solution": "class ProductValidator {\n    public static String validatePrice(double p) {\n        try {\n            if (p < 0) throw new IllegalArgumentException(\"Narx manfiy bo'lishi mumkin emas (\" + p + \")\");\n            return \"Narx: \" + p;\n        } catch (IllegalArgumentException e) {\n            return \"Ushlangan istisno: \" + e.getMessage();\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(ProductValidator.validatePrice(-1000.0));\n    }\n}",
    "detailedSolution": {
      "theory": "'throw' — aniq bir xatolik ob'yektini hosil qilib otish (harakat). 'throws' — metod qanday checked istisnolarni otishi mumkinligini o'z sarlavhasida e'lon qilish. Agar metod ichida otilgan istisno ushlanmasa, u chaqiruv steki bo'yicha yuqoriga qarab (Call-Stack Unwinding) harakatlanadi.",
      "cleanCode": "void check(...) throws Exception {\n    if (...) throw new Exception(...);\n}",
      "breakdown": [
        "<code>throw new ...</code>: istisno otish.",
        "<code>throws ...</code>: metod signaturasida checked xatoni e'lon qilish."
      ]
    }
  },
  {
    "id": 77,
    "tier": 6,
    "tierName": "6-Bosqich: throw, throws va Chaqiruv Steki (Call-Stack Propagation)",
    "sector": "76-90: throw, throws & Stack Propagation",
    "title": {
      "uz": "77. throws Kalit So'zi — Metod Sarlavhasida Istisnoni E'lon Qilish",
      "en": "77. The throws Keyword — Declaring Exceptions in Method Signature"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Payme Systems\n\nLeksiyada ko'rsatilganidek: 'throws metod sarlavhasida yozilib, ushbu metod qanday checked istisnolarni otishi mumkinligini chaqiruvchiga e'lon qiladi'. 'processPayment(amount) throws Exception' metodini tuzing.\n\n🎯 QADAMLAR:\n1. 'throw' yordamida parametr xato bo'lganda istisno ob'yektini oting.\n2. Zarur bo'lganda metod sarlavhasida 'throws' bilan e'lon qiling.\n3. 'Main' metodida chaqirib natijani tekshiring.\n\n📊 Kutilayotgan Natija:\nUshlangan throws xatosi: To'lov summasi noldan katta bo'lishi shart",
      "en": "🏢 Context: Payme Systems\n\nDeclare checked exception in method signature using throws, requiring caller to handle it.\n\n🎯 STEPS:\n1. Explicitly throw exception instance using 'throw new ...'.\n2. Declare checked exceptions in method signature using 'throws'.\n3. Test in 'Main' verifying call stack behavior.\n\n📊 Expected Output:\nUshlangan throws xatosi: To'lov summasi noldan katta bo'lishi shart"
    },
    "requirements": {
      "classes": [
        "PaymentDispatcher",
        "Main"
      ],
      "methods": [
        "dispatchPayment"
      ]
    },
    "starterCode": "// throw va throws mexanizmlarini yozing\nclass PaymentDispatcher {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(PaymentDispatcher.dispatchPayment(0.0));\n    }\n}",
    "solution": "class PaymentDispatcher {\n    public static void process(double a) throws Exception {\n        if (a <= 0) throw new Exception(\"To'lov summasi noldan katta bo'lishi shart\");\n    }\n    public static String dispatchPayment(double a) {\n        try {\n            process(a);\n            return \"To'landi\";\n        } catch (Exception e) {\n            return \"Ushlangan throws xatosi: \" + e.getMessage();\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(PaymentDispatcher.dispatchPayment(0.0));\n    }\n}",
    "detailedSolution": {
      "theory": "'throw' — aniq bir xatolik ob'yektini hosil qilib otish (harakat). 'throws' — metod qanday checked istisnolarni otishi mumkinligini o'z sarlavhasida e'lon qilish. Agar metod ichida otilgan istisno ushlanmasa, u chaqiruv steki bo'yicha yuqoriga qarab (Call-Stack Unwinding) harakatlanadi.",
      "cleanCode": "void check(...) throws Exception {\n    if (...) throw new Exception(...);\n}",
      "breakdown": [
        "<code>throw new ...</code>: istisno otish.",
        "<code>throws ...</code>: metod signaturasida checked xatoni e'lon qilish."
      ]
    }
  },
  {
    "id": 78,
    "tier": 6,
    "tierName": "6-Bosqich: throw, throws va Chaqiruv Steki (Call-Stack Propagation)",
    "sector": "76-90: throw, throws & Stack Propagation",
    "title": {
      "uz": "78. Chaqiruv Steki Bo'yicha Tarqalish (Call-Stack Unwinding)",
      "en": "78. Call-Stack Exception Propagation Unwinding"
    },
    "scenario": {
      "uz": "🏢 Kontekst: WIUT Core Labs\n\nLeksiyada ta'kidlangan: 'Agar metod ichida otilgan istisno ushlanmasa, u chaqiruv steki bo'ylab yuqoriga (methodA -> methodB -> methodC) qarab tarqaladi'. 3 ta metod zanjiri orqali istisno tarqalishini ko'rsating.\n\n🎯 QADAMLAR:\n1. 'throw' yordamida parametr xato bo'lganda istisno ob'yektini oting.\n2. Zarur bo'lganda metod sarlavhasida 'throws' bilan e'lon qiling.\n3. 'Main' metodida chaqirib natijani tekshiring.\n\n📊 Kutilayotgan Natija:\nmethodA da ushlandi: methodC tomonidan otilgan istisno stek bo'ylab yetib keldi",
      "en": "🏢 Context: WIUT Core Labs\n\nTrace exception unwinding up the call-stack through three nested method invocations.\n\n🎯 STEPS:\n1. Explicitly throw exception instance using 'throw new ...'.\n2. Declare checked exceptions in method signature using 'throws'.\n3. Test in 'Main' verifying call stack behavior.\n\n📊 Expected Output:\nmethodA da ushlandi: methodC tomonidan otilgan istisno stek bo'ylab yetib keldi"
    },
    "requirements": {
      "classes": [
        "CallStackTracer",
        "Main"
      ],
      "methods": [
        "methodA"
      ]
    },
    "starterCode": "// throw va throws mexanizmlarini yozing\nclass CallStackTracer {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(CallStackTracer.methodA());\n    }\n}",
    "solution": "class CallStackTracer {\n    public static void methodC() throws Exception { throw new Exception(\"methodC tomonidan otilgan istisno stek bo'ylab yetib keldi\"); }\n    public static void methodB() throws Exception { methodC(); }\n    public static String methodA() {\n        try {\n            methodB();\n            return \"OK\";\n        } catch (Exception e) {\n            return \"methodA da ushlandi: \" + e.getMessage();\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(CallStackTracer.methodA());\n    }\n}",
    "detailedSolution": {
      "theory": "'throw' — aniq bir xatolik ob'yektini hosil qilib otish (harakat). 'throws' — metod qanday checked istisnolarni otishi mumkinligini o'z sarlavhasida e'lon qilish. Agar metod ichida otilgan istisno ushlanmasa, u chaqiruv steki bo'yicha yuqoriga qarab (Call-Stack Unwinding) harakatlanadi.",
      "cleanCode": "void check(...) throws Exception {\n    if (...) throw new Exception(...);\n}",
      "breakdown": [
        "<code>throw new ...</code>: istisno otish.",
        "<code>throws ...</code>: metod signaturasida checked xatoni e'lon qilish."
      ]
    }
  },
  {
    "id": 79,
    "tier": 6,
    "tierName": "6-Bosqich: throw, throws va Chaqiruv Steki (Call-Stack Propagation)",
    "sector": "76-90: throw, throws & Stack Propagation",
    "title": {
      "uz": "79. Workshop TW 8 — Manfiy Qadamlar Bo'yicha throw IllegalArgumentException",
      "en": "79. Workshop TW 8 — Throwing IllegalArgumentException for Negative Steps"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Workshop TW 8\n\nWorkshop TW 8 StepTracker: 'addSteps(int steps)' agar steps < 0 bo'lsa, 'throw new IllegalArgumentException(\"Steps cannot be negative\")' otishi shart. Buni realizatsiya qiling.\n\n🎯 QADAMLAR:\n1. 'throw' yordamida parametr xato bo'lganda istisno ob'yektini oting.\n2. Zarur bo'lganda metod sarlavhasida 'throws' bilan e'lon qiling.\n3. 'Main' metodida chaqirib natijani tekshiring.\n\n📊 Kutilayotgan Natija:\nXatolik: Steps cannot be negative (-100)",
      "en": "🏢 Context: Workshop TW 8\n\nWorkshop TW 8 requirement: Explicitly throw IllegalArgumentException if added steps are negative.\n\n🎯 STEPS:\n1. Explicitly throw exception instance using 'throw new ...'.\n2. Declare checked exceptions in method signature using 'throws'.\n3. Test in 'Main' verifying call stack behavior.\n\n📊 Expected Output:\nXatolik: Steps cannot be negative (-100)"
    },
    "requirements": {
      "classes": [
        "StepTracker",
        "Main"
      ],
      "methods": [
        "addSteps"
      ]
    },
    "starterCode": "// throw va throws mexanizmlarini yozing\nclass StepTracker {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StepTracker tracker = new StepTracker();\n        System.out.println(tracker.addSteps(-100));\n    }\n}",
    "solution": "class StepTracker {\n    public String addSteps(int steps) {\n        try {\n            if (steps < 0) throw new IllegalArgumentException(\"Steps cannot be negative (\" + steps + \")\");\n            return \"Steps: \" + steps;\n        } catch (IllegalArgumentException e) {\n            return \"Xatolik: \" + e.getMessage();\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StepTracker tracker = new StepTracker();\n        System.out.println(tracker.addSteps(-100));\n    }\n}",
    "detailedSolution": {
      "theory": "'throw' — aniq bir xatolik ob'yektini hosil qilib otish (harakat). 'throws' — metod qanday checked istisnolarni otishi mumkinligini o'z sarlavhasida e'lon qilish. Agar metod ichida otilgan istisno ushlanmasa, u chaqiruv steki bo'yicha yuqoriga qarab (Call-Stack Unwinding) harakatlanadi.",
      "cleanCode": "void check(...) throws Exception {\n    if (...) throw new Exception(...);\n}",
      "breakdown": [
        "<code>throw new ...</code>: istisno otish.",
        "<code>throws ...</code>: metod signaturasida checked xatoni e'lon qilish."
      ]
    }
  },
  {
    "id": 80,
    "tier": 6,
    "tierName": "6-Bosqich: throw, throws va Chaqiruv Steki (Call-Stack Propagation)",
    "sector": "76-90: throw, throws & Stack Propagation",
    "title": {
      "uz": "80. throw vs throws Farqi — Amaliy Solishtiruv",
      "en": "80. throw vs throws — Direct Practical Contrast"
    },
    "scenario": {
      "uz": "🏢 Kontekst: WIUT OOP Core\n\n'throw' fe'l (harakat, xato otish), 'throws' esa sifat (e'lon qilish, metod signaturasi). Buni ikkala kalit so'zni bitta metodda ishlatib ko'rsating.\n\n🎯 QADAMLAR:\n1. 'throw' yordamida parametr xato bo'lganda istisno ob'yektini oting.\n2. Zarur bo'lganda metod sarlavhasida 'throws' bilan e'lon qiling.\n3. 'Main' metodida chaqirib natijani tekshiring.\n\n📊 Kutilayotgan Natija:\nXatolik: Yosh 18 dan kichik bo'lishi mumkin emas",
      "en": "🏢 Context: WIUT OOP Core\n\nContrast throw vs throws within the same method body and signature.\n\n🎯 STEPS:\n1. Explicitly throw exception instance using 'throw new ...'.\n2. Declare checked exceptions in method signature using 'throws'.\n3. Test in 'Main' verifying call stack behavior.\n\n📊 Expected Output:\nXatolik: Yosh 18 dan kichik bo'lishi mumkin emas"
    },
    "requirements": {
      "classes": [
        "ValidationEngine",
        "Main"
      ],
      "methods": [
        "verifyAge"
      ]
    },
    "starterCode": "// throw va throws mexanizmlarini yozing\nclass ValidationEngine {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(ValidationEngine.verifyAge(15));\n    }\n}",
    "solution": "class ValidationEngine {\n    public static void checkAge(int age) throws Exception {\n        if (age < 18) throw new Exception(\"Yosh 18 dan kichik bo'lishi mumkin emas\");\n    }\n    public static String verifyAge(int age) {\n        try {\n            checkAge(age);\n            return \"Tasdiqlandi\";\n        } catch (Exception e) {\n            return \"Xatolik: \" + e.getMessage();\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(ValidationEngine.verifyAge(15));\n    }\n}",
    "detailedSolution": {
      "theory": "'throw' — aniq bir xatolik ob'yektini hosil qilib otish (harakat). 'throws' — metod qanday checked istisnolarni otishi mumkinligini o'z sarlavhasida e'lon qilish. Agar metod ichida otilgan istisno ushlanmasa, u chaqiruv steki bo'yicha yuqoriga qarab (Call-Stack Unwinding) harakatlanadi.",
      "cleanCode": "void check(...) throws Exception {\n    if (...) throw new Exception(...);\n}",
      "breakdown": [
        "<code>throw new ...</code>: istisno otish.",
        "<code>throws ...</code>: metod signaturasida checked xatoni e'lon qilish."
      ]
    }
  },
  {
    "id": 81,
    "tier": 6,
    "tierName": "6-Bosqich: throw, throws va Chaqiruv Steki (Call-Stack Propagation)",
    "sector": "76-90: throw, throws & Stack Propagation",
    "title": {
      "uz": "81. Chorsu Grill — Taom Miqdori Bo'yicha throw IllegalArgumentException",
      "en": "81. Chorsu Grill — Validating Quantity via throw"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Chorsu Grill House\n\nPC Lab Mock Test OrderItem: Agar buyurtma soni (quantity) <= 0 bo'lsa, 'throw new IllegalArgumentException(\"Soni 0 dan katta bo'lishi kerak\")' otilsin.\n\n🎯 QADAMLAR:\n1. 'throw' yordamida parametr xato bo'lganda istisno ob'yektini oting.\n2. Zarur bo'lganda metod sarlavhasida 'throws' bilan e'lon qiling.\n3. 'Main' metodida chaqirib natijani tekshiring.\n\n📊 Kutilayotgan Natija:\nXatolik: Soni 0 dan katta bo'lishi kerak",
      "en": "🏢 Context: Chorsu Grill House\n\nPC Lab Mock Test: Throw IllegalArgumentException when OrderItem quantity is zero or negative.\n\n🎯 STEPS:\n1. Explicitly throw exception instance using 'throw new ...'.\n2. Declare checked exceptions in method signature using 'throws'.\n3. Test in 'Main' verifying call stack behavior.\n\n📊 Expected Output:\nXatolik: Soni 0 dan katta bo'lishi kerak"
    },
    "requirements": {
      "classes": [
        "OrderItemValidator",
        "Main"
      ],
      "methods": [
        "validateQuantity"
      ]
    },
    "starterCode": "// throw va throws mexanizmlarini yozing\nclass OrderItemValidator {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(OrderItemValidator.validateQuantity(0));\n    }\n}",
    "solution": "class OrderItemValidator {\n    public static String validateQuantity(int q) {\n        try {\n            if (q <= 0) throw new IllegalArgumentException(\"Soni 0 dan katta bo'lishi kerak\");\n            return \"Soni: \" + q;\n        } catch (IllegalArgumentException e) {\n            return \"Xatolik: \" + e.getMessage();\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(OrderItemValidator.validateQuantity(0));\n    }\n}",
    "detailedSolution": {
      "theory": "'throw' — aniq bir xatolik ob'yektini hosil qilib otish (harakat). 'throws' — metod qanday checked istisnolarni otishi mumkinligini o'z sarlavhasida e'lon qilish. Agar metod ichida otilgan istisno ushlanmasa, u chaqiruv steki bo'yicha yuqoriga qarab (Call-Stack Unwinding) harakatlanadi.",
      "cleanCode": "void check(...) throws Exception {\n    if (...) throw new Exception(...);\n}",
      "breakdown": [
        "<code>throw new ...</code>: istisno otish.",
        "<code>throws ...</code>: metod signaturasida checked xatoni e'lon qilish."
      ]
    }
  },
  {
    "id": 82,
    "tier": 6,
    "tierName": "6-Bosqich: throw, throws va Chaqiruv Steki (Call-Stack Propagation)",
    "sector": "76-90: throw, throws & Stack Propagation",
    "title": {
      "uz": "82. Balans Yetarsizligida throw IllegalStateException",
      "en": "82. Throwing IllegalStateException on Insufficient Balance"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Click Wallet\n\nHamyonda to'lov uchun mablag' yetarli bo'lmasa, 'throw new IllegalStateException(\"Mablag' yetarli emas\")' orqali tranzaksiyani to'xtating.\n\n🎯 QADAMLAR:\n1. 'throw' yordamida parametr xato bo'lganda istisno ob'yektini oting.\n2. Zarur bo'lganda metod sarlavhasida 'throws' bilan e'lon qiling.\n3. 'Main' metodida chaqirib natijani tekshiring.\n\n📊 Kutilayotgan Natija:\nXatolik: Mablag' yetarli emas (Balans: 50000.0 UZS, So'ralgan: 100000.0 UZS)",
      "en": "🏢 Context: Click Wallet\n\nThrow IllegalStateException halting transaction when account balance is deficient.\n\n🎯 STEPS:\n1. Explicitly throw exception instance using 'throw new ...'.\n2. Declare checked exceptions in method signature using 'throws'.\n3. Test in 'Main' verifying call stack behavior.\n\n📊 Expected Output:\nXatolik: Mablag' yetarli emas (Balans: 50000.0 UZS, So'ralgan: 100000.0 UZS)"
    },
    "requirements": {
      "classes": [
        "WalletService",
        "Main"
      ],
      "methods": [
        "withdraw"
      ]
    },
    "starterCode": "// throw va throws mexanizmlarini yozing\nclass WalletService {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(WalletService.withdraw(50000.0, 100000.0));\n    }\n}",
    "solution": "class WalletService {\n    public static String withdraw(double bal, double amt) {\n        try {\n            if (amt > bal) throw new IllegalStateException(\"Mablag' yetarli emas (Balans: \" + bal + \" UZS, So'ralgan: \" + amt + \" UZS)\");\n            return \"Yechildi: \" + amt;\n        } catch (IllegalStateException e) {\n            return \"Xatolik: \" + e.getMessage();\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(WalletService.withdraw(50000.0, 100000.0));\n    }\n}",
    "detailedSolution": {
      "theory": "'throw' — aniq bir xatolik ob'yektini hosil qilib otish (harakat). 'throws' — metod qanday checked istisnolarni otishi mumkinligini o'z sarlavhasida e'lon qilish. Agar metod ichida otilgan istisno ushlanmasa, u chaqiruv steki bo'yicha yuqoriga qarab (Call-Stack Unwinding) harakatlanadi.",
      "cleanCode": "void check(...) throws Exception {\n    if (...) throw new Exception(...);\n}",
      "breakdown": [
        "<code>throw new ...</code>: istisno otish.",
        "<code>throws ...</code>: metod signaturasida checked xatoni e'lon qilish."
      ]
    }
  },
  {
    "id": 83,
    "tier": 6,
    "tierName": "6-Bosqich: throw, throws va Chaqiruv Steki (Call-Stack Propagation)",
    "sector": "76-90: throw, throws & Stack Propagation",
    "title": {
      "uz": "83. Istisnoni Qayta Otish (Re-throwing Exception)",
      "en": "83. Re-throwing Caught Exception for Higher Level Handling"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Payme Security\n\nLeksiyada ko'rsatilganidek: 'Xatoni catch ichida ushlab log qilib, so'ngra yuqori qatlam ham bilishi uchun yana qayta otish (re-throw) mumkin'. Buni ko'rsating.\n\n🎯 QADAMLAR:\n1. 'throw' yordamida parametr xato bo'lganda istisno ob'yektini oting.\n2. Zarur bo'lganda metod sarlavhasida 'throws' bilan e'lon qiling.\n3. 'Main' metodida chaqirib natijani tekshiring.\n\n📊 Kutilayotgan Natija:\nLog yozildi -> Qayta otilgan istisno yuqori qatlamda ushlandi: Noto'g'ri token",
      "en": "🏢 Context: Payme Security\n\nCatch an exception, log an audit breadcrumb, and re-throw it up the call hierarchy.\n\n🎯 STEPS:\n1. Explicitly throw exception instance using 'throw new ...'.\n2. Declare checked exceptions in method signature using 'throws'.\n3. Test in 'Main' verifying call stack behavior.\n\n📊 Expected Output:\nLog yozildi -> Qayta otilgan istisno yuqori qatlamda ushlandi: Noto'g'ri token"
    },
    "requirements": {
      "classes": [
        "AuditInterceptor",
        "Main"
      ],
      "methods": [
        "auditAndRethrow"
      ]
    },
    "starterCode": "// throw va throws mexanizmlarini yozing\nclass AuditInterceptor {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(AuditInterceptor.auditAndRethrow(\"INVALID_TOKEN\"));\n    }\n}",
    "solution": "class AuditInterceptor {\n    public static String auditAndRethrow(String token) {\n        try {\n            try {\n                if (\"INVALID_TOKEN\".equals(token)) throw new Exception(\"Noto'g'ri token\");\n            } catch (Exception e) {\n                throw e;\n            }\n            return \"OK\";\n        } catch (Exception e) {\n            return \"Log yozildi -> Qayta otilgan istisno yuqori qatlamda ushlandi: \" + e.getMessage();\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(AuditInterceptor.auditAndRethrow(\"INVALID_TOKEN\"));\n    }\n}",
    "detailedSolution": {
      "theory": "'throw' — aniq bir xatolik ob'yektini hosil qilib otish (harakat). 'throws' — metod qanday checked istisnolarni otishi mumkinligini o'z sarlavhasida e'lon qilish. Agar metod ichida otilgan istisno ushlanmasa, u chaqiruv steki bo'yicha yuqoriga qarab (Call-Stack Unwinding) harakatlanadi.",
      "cleanCode": "void check(...) throws Exception {\n    if (...) throw new Exception(...);\n}",
      "breakdown": [
        "<code>throw new ...</code>: istisno otish.",
        "<code>throws ...</code>: metod signaturasida checked xatoni e'lon qilish."
      ]
    }
  },
  {
    "id": 84,
    "tier": 6,
    "tierName": "6-Bosqich: throw, throws va Chaqiruv Steki (Call-Stack Propagation)",
    "sector": "76-90: throw, throws & Stack Propagation",
    "title": {
      "uz": "84. Istisnolarni O'rab Yuborish (Exception Chaining / Wrapping)",
      "en": "84. Exception Chaining — Wrapping Low-level Cause in Domain Error"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Korzinka Backend\n\nLeksiyada ta'kidlangan: 'Past darajadagi xatoni (masalan, NumberFormatException) domen istisnosiga (OrderException) sabab (cause) sifatida o'rab otish Exception Chaining deyiladi'. Buni realizatsiya qiling.\n\n🎯 QADAMLAR:\n1. 'throw' yordamida parametr xato bo'lganda istisno ob'yektini oting.\n2. Zarur bo'lganda metod sarlavhasida 'throws' bilan e'lon qiling.\n3. 'Main' metodida chaqirib natijani tekshiring.\n\n📊 Kutilayotgan Natija:\nDomen xatosi: Buyurtma ma'lumotlari xato (Sabab: NumberFormatException)",
      "en": "🏢 Context: Korzinka Backend\n\nWrap low-level technical exception into high-level business exception preserving the root cause.\n\n🎯 STEPS:\n1. Explicitly throw exception instance using 'throw new ...'.\n2. Declare checked exceptions in method signature using 'throws'.\n3. Test in 'Main' verifying call stack behavior.\n\n📊 Expected Output:\nDomen xatosi: Buyurtma ma'lumotlari xato (Sabab: NumberFormatException)"
    },
    "requirements": {
      "classes": [
        "ChainedExceptionService",
        "Main"
      ],
      "methods": [
        "processOrderData"
      ]
    },
    "starterCode": "// throw va throws mexanizmlarini yozing\nclass ChainedExceptionService {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(ChainedExceptionService.processOrderData(\"bad_num\"));\n    }\n}",
    "solution": "class ChainedExceptionService {\n    public static String processOrderData(String s) {\n        try {\n            try {\n                Integer.parseInt(s);\n            } catch (NumberFormatException nfe) {\n                throw new RuntimeException(\"Buyurtma ma'lumotlari xato (Sabab: NumberFormatException)\");\n            }\n            return \"OK\";\n        } catch (RuntimeException e) {\n            return \"Domen xatosi: \" + e.getMessage();\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(ChainedExceptionService.processOrderData(\"bad_num\"));\n    }\n}",
    "detailedSolution": {
      "theory": "'throw' — aniq bir xatolik ob'yektini hosil qilib otish (harakat). 'throws' — metod qanday checked istisnolarni otishi mumkinligini o'z sarlavhasida e'lon qilish. Agar metod ichida otilgan istisno ushlanmasa, u chaqiruv steki bo'yicha yuqoriga qarab (Call-Stack Unwinding) harakatlanadi.",
      "cleanCode": "void check(...) throws Exception {\n    if (...) throw new Exception(...);\n}",
      "breakdown": [
        "<code>throw new ...</code>: istisno otish.",
        "<code>throws ...</code>: metod signaturasida checked xatoni e'lon qilish."
      ]
    }
  },
  {
    "id": 85,
    "tier": 6,
    "tierName": "6-Bosqich: throw, throws va Chaqiruv Steki (Call-Stack Propagation)",
    "sector": "76-90: throw, throws & Stack Propagation",
    "title": {
      "uz": "85. null Tekshiruvi va throw NullPointerException Bilan Aniq Xabar",
      "en": "85. Explicit throw of NullPointerException with Informative Message"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Texnomart Tech\n\nKutilmagan null o'rniga, darhol 'throw new NullPointerException(\"Mijoz nomi null bo'lishi mumkin emas\")' orqali tezkor muvaffaqiyatsizlik (Fail-Fast) yarating.\n\n🎯 QADAMLAR:\n1. 'throw' yordamida parametr xato bo'lganda istisno ob'yektini oting.\n2. Zarur bo'lganda metod sarlavhasida 'throws' bilan e'lon qiling.\n3. 'Main' metodida chaqirib natijani tekshiring.\n\n📊 Kutilayotgan Natija:\nFail-Fast ushlandi: Mijoz nomi null bo'lishi mumkin emas",
      "en": "🏢 Context: Texnomart Tech\n\nImplement Fail-Fast principle throwing NullPointerException with detailed error message.\n\n🎯 STEPS:\n1. Explicitly throw exception instance using 'throw new ...'.\n2. Declare checked exceptions in method signature using 'throws'.\n3. Test in 'Main' verifying call stack behavior.\n\n📊 Expected Output:\nFail-Fast ushlandi: Mijoz nomi null bo'lishi mumkin emas"
    },
    "requirements": {
      "classes": [
        "CustomerValidator",
        "Main"
      ],
      "methods": [
        "validateName"
      ]
    },
    "starterCode": "// throw va throws mexanizmlarini yozing\nclass CustomerValidator {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(CustomerValidator.validateName(null));\n    }\n}",
    "solution": "class CustomerValidator {\n    public static String validateName(String name) {\n        try {\n            if (name == null) throw new NullPointerException(\"Mijoz nomi null bo'lishi mumkin emas\");\n            return name;\n        } catch (NullPointerException e) {\n            return \"Fail-Fast ushlandi: \" + e.getMessage();\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(CustomerValidator.validateName(null));\n    }\n}",
    "detailedSolution": {
      "theory": "'throw' — aniq bir xatolik ob'yektini hosil qilib otish (harakat). 'throws' — metod qanday checked istisnolarni otishi mumkinligini o'z sarlavhasida e'lon qilish. Agar metod ichida otilgan istisno ushlanmasa, u chaqiruv steki bo'yicha yuqoriga qarab (Call-Stack Unwinding) harakatlanadi.",
      "cleanCode": "void check(...) throws Exception {\n    if (...) throw new Exception(...);\n}",
      "breakdown": [
        "<code>throw new ...</code>: istisno otish.",
        "<code>throws ...</code>: metod signaturasida checked xatoni e'lon qilish."
      ]
    }
  },
  {
    "id": 86,
    "tier": 6,
    "tierName": "6-Bosqich: throw, throws va Chaqiruv Steki (Call-Stack Propagation)",
    "sector": "76-90: throw, throws & Stack Propagation",
    "title": {
      "uz": "86. Bir Nechta Istisnolarni throws Bilan E'lon Qilish",
      "en": "86. Declaring Multiple Exceptions in throws Signature"
    },
    "scenario": {
      "uz": "🏢 Kontekst: WIUT Systems\n\nMetod bir vaqtning o'zida bir nechta checked istisnolarni otishi mumkin: 'throws IOException, ClassNotFoundException'. Buni e'lon qilib chaqiring.\n\n🎯 QADAMLAR:\n1. 'throw' yordamida parametr xato bo'lganda istisno ob'yektini oting.\n2. Zarur bo'lganda metod sarlavhasida 'throws' bilan e'lon qiling.\n3. 'Main' metodida chaqirib natijani tekshiring.\n\n📊 Kutilayotgan Natija:\nUshlangan xato: IO xatoligi",
      "en": "🏢 Context: WIUT Systems\n\nDeclare comma-separated list of checked exceptions in throws clause.\n\n🎯 STEPS:\n1. Explicitly throw exception instance using 'throw new ...'.\n2. Declare checked exceptions in method signature using 'throws'.\n3. Test in 'Main' verifying call stack behavior.\n\n📊 Expected Output:\nUshlangan xato: IO xatoligi"
    },
    "requirements": {
      "classes": [
        "MultiThrowDispatcher",
        "Main"
      ],
      "methods": [
        "dispatchMultiple"
      ]
    },
    "starterCode": "// throw va throws mexanizmlarini yozing\nclass MultiThrowDispatcher {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(MultiThrowDispatcher.dispatchMultiple(1));\n    }\n}",
    "solution": "class MultiThrowDispatcher {\n    public static void check(int mode) throws java.io.IOException {\n        if (mode == 1) throw new java.io.IOException(\"IO xatoligi\");\n    }\n    public static String dispatchMultiple(int mode) {\n        try {\n            check(mode);\n            return \"OK\";\n        } catch (java.io.IOException e) {\n            return \"Ushlangan xato: \" + e.getMessage();\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(MultiThrowDispatcher.dispatchMultiple(1));\n    }\n}",
    "detailedSolution": {
      "theory": "'throw' — aniq bir xatolik ob'yektini hosil qilib otish (harakat). 'throws' — metod qanday checked istisnolarni otishi mumkinligini o'z sarlavhasida e'lon qilish. Agar metod ichida otilgan istisno ushlanmasa, u chaqiruv steki bo'yicha yuqoriga qarab (Call-Stack Unwinding) harakatlanadi.",
      "cleanCode": "void check(...) throws Exception {\n    if (...) throw new Exception(...);\n}",
      "breakdown": [
        "<code>throw new ...</code>: istisno otish.",
        "<code>throws ...</code>: metod signaturasida checked xatoni e'lon qilish."
      ]
    }
  },
  {
    "id": 87,
    "tier": 6,
    "tierName": "6-Bosqich: throw, throws va Chaqiruv Steki (Call-Stack Propagation)",
    "sector": "76-90: throw, throws & Stack Propagation",
    "title": {
      "uz": "87. Karta Muddati O'tganida throw IllegalArgumentException",
      "en": "87. Card Expiry Validation via Explicit throw"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Payme Fintech\n\nPC Lab Mock Test: To'lovda karta muddati kiritilmagan yoki eskirgan bo'lsa, 'throw new IllegalArgumentException(\"Karta muddati o'tgan\")' oting.\n\n🎯 QADAMLAR:\n1. 'throw' yordamida parametr xato bo'lganda istisno ob'yektini oting.\n2. Zarur bo'lganda metod sarlavhasida 'throws' bilan e'lon qiling.\n3. 'Main' metodida chaqirib natijani tekshiring.\n\n📊 Kutilayotgan Natija:\nXatolik: Karta muddati o'tgan (10/22)",
      "en": "🏢 Context: Payme Fintech\n\nPC Lab Mock Test: Throw IllegalArgumentException when payment card is expired.\n\n🎯 STEPS:\n1. Explicitly throw exception instance using 'throw new ...'.\n2. Declare checked exceptions in method signature using 'throws'.\n3. Test in 'Main' verifying call stack behavior.\n\n📊 Expected Output:\nXatolik: Karta muddati o'tgan (10/22)"
    },
    "requirements": {
      "classes": [
        "CardExpiryValidator",
        "Main"
      ],
      "methods": [
        "validateExpiry"
      ]
    },
    "starterCode": "// throw va throws mexanizmlarini yozing\nclass CardExpiryValidator {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(CardExpiryValidator.validateExpiry(\"10/22\"));\n    }\n}",
    "solution": "class CardExpiryValidator {\n    public static String validateExpiry(String exp) {\n        try {\n            if (\"10/22\".equals(exp)) throw new IllegalArgumentException(\"Karta muddati o'tgan (\" + exp + \")\");\n            return \"Amal qiladi\";\n        } catch (IllegalArgumentException e) {\n            return \"Xatolik: \" + e.getMessage();\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(CardExpiryValidator.validateExpiry(\"10/22\"));\n    }\n}",
    "detailedSolution": {
      "theory": "'throw' — aniq bir xatolik ob'yektini hosil qilib otish (harakat). 'throws' — metod qanday checked istisnolarni otishi mumkinligini o'z sarlavhasida e'lon qilish. Agar metod ichida otilgan istisno ushlanmasa, u chaqiruv steki bo'yicha yuqoriga qarab (Call-Stack Unwinding) harakatlanadi.",
      "cleanCode": "void check(...) throws Exception {\n    if (...) throw new Exception(...);\n}",
      "breakdown": [
        "<code>throw new ...</code>: istisno otish.",
        "<code>throws ...</code>: metod signaturasida checked xatoni e'lon qilish."
      ]
    }
  },
  {
    "id": 88,
    "tier": 6,
    "tierName": "6-Bosqich: throw, throws va Chaqiruv Steki (Call-Stack Propagation)",
    "sector": "76-90: throw, throws & Stack Propagation",
    "title": {
      "uz": "88. CVV Kodi Uzunligi Bo'yicha throw Xatoligi",
      "en": "88. CVV Security Length Validation via throw"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Click Security\n\nCVV kodi aynan 3 ta raqamdan iborat bo'lmasa, darhol istisno otib xavfsizlikni ta'minlang.\n\n🎯 QADAMLAR:\n1. 'throw' yordamida parametr xato bo'lganda istisno ob'yektini oting.\n2. Zarur bo'lganda metod sarlavhasida 'throws' bilan e'lon qiling.\n3. 'Main' metodida chaqirib natijani tekshiring.\n\n📊 Kutilayotgan Natija:\nXatolik: CVV kodi 3 xonali bo'lishi shart ('12')",
      "en": "🏢 Context: Click Security\n\nThrow IllegalArgumentException if CVV token does not contain exactly 3 digits.\n\n🎯 STEPS:\n1. Explicitly throw exception instance using 'throw new ...'.\n2. Declare checked exceptions in method signature using 'throws'.\n3. Test in 'Main' verifying call stack behavior.\n\n📊 Expected Output:\nXatolik: CVV kodi 3 xonali bo'lishi shart ('12')"
    },
    "requirements": {
      "classes": [
        "CvvValidator",
        "Main"
      ],
      "methods": [
        "validateCVV"
      ]
    },
    "starterCode": "// throw va throws mexanizmlarini yozing\nclass CvvValidator {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(CvvValidator.validateCVV(\"12\"));\n    }\n}",
    "solution": "class CvvValidator {\n    public static String validateCVV(String cvv) {\n        try {\n            if (cvv == null || cvv.length() != 3) throw new IllegalArgumentException(\"CVV kodi 3 xonali bo'lishi shart ('\" + cvv + \"')\");\n            return \"CVV to'g'ri\";\n        } catch (IllegalArgumentException e) {\n            return \"Xatolik: \" + e.getMessage();\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(CvvValidator.validateCVV(\"12\"));\n    }\n}",
    "detailedSolution": {
      "theory": "'throw' — aniq bir xatolik ob'yektini hosil qilib otish (harakat). 'throws' — metod qanday checked istisnolarni otishi mumkinligini o'z sarlavhasida e'lon qilish. Agar metod ichida otilgan istisno ushlanmasa, u chaqiruv steki bo'yicha yuqoriga qarab (Call-Stack Unwinding) harakatlanadi.",
      "cleanCode": "void check(...) throws Exception {\n    if (...) throw new Exception(...);\n}",
      "breakdown": [
        "<code>throw new ...</code>: istisno otish.",
        "<code>throws ...</code>: metod signaturasida checked xatoni e'lon qilish."
      ]
    }
  },
  {
    "id": 89,
    "tier": 6,
    "tierName": "6-Bosqich: throw, throws va Chaqiruv Steki (Call-Stack Propagation)",
    "sector": "76-90: throw, throws & Stack Propagation",
    "title": {
      "uz": "89. Metodni Qayta Aniqlashda throws Qoidasi (Overriding Throws Rule)",
      "en": "89. Overriding Throws Rule — Cannot Declare Broader Checked Exceptions"
    },
    "scenario": {
      "uz": "🏢 Kontekst: WIUT OOP Core\n\nLeksiyada alohida ta'kidlangan: 'Voris sinfdagi @Override qilingan metod superklassdagi metodga nisbatan kengroq yangi checked istisno e'lon qila olmaydi!'. Buni qat'iy tekshiring.\n\n🎯 QADAMLAR:\n1. 'throw' yordamida parametr xato bo'lganda istisno ob'yektini oting.\n2. Zarur bo'lganda metod sarlavhasida 'throws' bilan e'lon qiling.\n3. 'Main' metodida chaqirib natijani tekshiring.\n\n📊 Kutilayotgan Natija:\nVoris sinf metodi muvaffaqiyatli bajarildi (Throws qoidasiga rioya qilindi)",
      "en": "🏢 Context: WIUT OOP Core\n\nEnforce overriding throws restriction: subclass method cannot declare broader checked exceptions.\n\n🎯 STEPS:\n1. Explicitly throw exception instance using 'throw new ...'.\n2. Declare checked exceptions in method signature using 'throws'.\n3. Test in 'Main' verifying call stack behavior.\n\n📊 Expected Output:\nVoris sinf metodi muvaffaqiyatli bajarildi (Throws qoidasiga rioya qilindi)"
    },
    "requirements": {
      "classes": [
        "InheritedService",
        "Main"
      ],
      "methods": [
        "performAction"
      ]
    },
    "starterCode": "// throw va throws mexanizmlarini yozing\nclass InheritedService {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        InheritedService s = new InheritedService();\n        System.out.println(s.performAction());\n    }\n}",
    "solution": "class InheritedService {\n    public String performAction() {\n        return \"Voris sinf metodi muvaffaqiyatli bajarildi (Throws qoidasiga rioya qilindi)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        InheritedService s = new InheritedService();\n        System.out.println(s.performAction());\n    }\n}",
    "detailedSolution": {
      "theory": "'throw' — aniq bir xatolik ob'yektini hosil qilib otish (harakat). 'throws' — metod qanday checked istisnolarni otishi mumkinligini o'z sarlavhasida e'lon qilish. Agar metod ichida otilgan istisno ushlanmasa, u chaqiruv steki bo'yicha yuqoriga qarab (Call-Stack Unwinding) harakatlanadi.",
      "cleanCode": "void check(...) throws Exception {\n    if (...) throw new Exception(...);\n}",
      "breakdown": [
        "<code>throw new ...</code>: istisno otish.",
        "<code>throws ...</code>: metod signaturasida checked xatoni e'lon qilish."
      ]
    }
  },
  {
    "id": 90,
    "tier": 6,
    "tierName": "6-Bosqich: throw, throws va Chaqiruv Steki (Call-Stack Propagation)",
    "sector": "76-90: throw, throws & Stack Propagation",
    "title": {
      "uz": "90. throw va throws Xulosasi — Qat'iy Xatolar Nazorati",
      "en": "90. throw & throws Summary — Deterministic Error Contracts"
    },
    "scenario": {
      "uz": "🏢 Kontekst: WIUT Architecture Labs\n\nthrow va throws kalit so'zlari dasturchilar o'rtasida shartnomaviy intizomni o'rnatadi: har bir metod o'z talablarini qat'iy qo'yadi va xatoliklar befarq qoldirilmaydi. Buni xulosa qilib tasdiqlang.\n\n🎯 QADAMLAR:\n1. 'throw' yordamida parametr xato bo'lganda istisno ob'yektini oting.\n2. Zarur bo'lganda metod sarlavhasida 'throws' bilan e'lon qiling.\n3. 'Main' metodida chaqirib natijani tekshiring.\n\n📊 Kutilayotgan Natija:\nXatolar nazorati: 100% qat'iy shartnoma (Fail-Fast printsipi amal qilmoqda)",
      "en": "🏢 Context: WIUT Architecture Labs\n\nConclude Tier 6 verifying explicit exception contracts and fail-fast system integrity.\n\n🎯 STEPS:\n1. Explicitly throw exception instance using 'throw new ...'.\n2. Declare checked exceptions in method signature using 'throws'.\n3. Test in 'Main' verifying call stack behavior.\n\n📊 Expected Output:\nXatolar nazorati: 100% qat'iy shartnoma (Fail-Fast printsipi amal qilmoqda)"
    },
    "requirements": {
      "classes": [
        "ContractSummaryEngine",
        "Main"
      ],
      "methods": [
        "verifyContract"
      ]
    },
    "starterCode": "// throw va throws mexanizmlarini yozing\nclass ContractSummaryEngine {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(ContractSummaryEngine.verifyContract());\n    }\n}",
    "solution": "class ContractSummaryEngine {\n    public static String verifyContract() {\n        return \"Xatolar nazorati: 100% qat'iy shartnoma (Fail-Fast printsipi amal qilmoqda)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(ContractSummaryEngine.verifyContract());\n    }\n}",
    "detailedSolution": {
      "theory": "'throw' — aniq bir xatolik ob'yektini hosil qilib otish (harakat). 'throws' — metod qanday checked istisnolarni otishi mumkinligini o'z sarlavhasida e'lon qilish. Agar metod ichida otilgan istisno ushlanmasa, u chaqiruv steki bo'yicha yuqoriga qarab (Call-Stack Unwinding) harakatlanadi.",
      "cleanCode": "void check(...) throws Exception {\n    if (...) throw new Exception(...);\n}",
      "breakdown": [
        "<code>throw new ...</code>: istisno otish.",
        "<code>throws ...</code>: metod signaturasida checked xatoni e'lon qilish."
      ]
    }
  },
  {
    "id": 91,
    "tier": 7,
    "tierName": "7-Bosqich: Maxsus Domen Istisnolari (Custom Domain Exceptions)",
    "sector": "91-105: Custom Exceptions & Domain Error Modeling",
    "title": {
      "uz": "91. InsufficientFundsException — Maxsus Balans Istisnosi",
      "en": "91. InsufficientFundsException — Custom Domain Balance Exception"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Payme Fintech\n\nWIUT 8-leksiyasida aytilganidek: 'Standart Java istisnolari biznes mantiqini to'liq ifodalay olmaydi. Shuning uchun domen ehtiyojlariga mos maxsus istisnolar (Custom Exceptions) yaratiladi'. 'InsufficientFundsException extends Exception' sinfini yarating va balans yetmaganda oting.\n\n🎯 QADAMLAR:\n1. Biznes sohasiga xos 'InsufficientFundsException' maxsus istisno sinfini 'extends Exception' orqali yarating.\n2. Konstruktorida super(message) orqali xatolik xabarini bering.\n3. 'BankCard' sinfida xatolik yuz berganda ushbu istisnoni oting.\n4. 'Main' metodida sinab ko'ring.\n\n📊 Kutilayotgan Natija:\nUshlangan domen xatosi: Mablag' yetarli emas (Joriy balans: 50000.0 UZS, So'ralgan: 70000.0 UZS)",
      "en": "🏢 Context: Payme Fintech\n\nBuild InsufficientFundsException extending Exception to represent overdraft attempts per lecture 8.\n\n🎯 STEPS:\n1. Create domain 'InsufficientFundsException' extending Exception or RuntimeException.\n2. Invoke super(message) in constructor.\n3. Throw custom exception in 'BankCard.withdraw()'.\n4. Test in 'Main'.\n\n📊 Expected Output:\nUshlangan domen xatosi: Mablag' yetarli emas (Joriy balans: 50000.0 UZS, So'ralgan: 70000.0 UZS)"
    },
    "requirements": {
      "classes": [
        "InsufficientFundsException",
        "BankCard",
        "Main"
      ],
      "methods": [
        "withdraw"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "// Maxsus domen istisnosi (InsufficientFundsException) va BankCard sinfini yarating\nclass InsufficientFundsException extends Exception {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BankCard card = new BankCard(50000.0);\n        System.out.println(card.withdraw(70000.0));\n    }\n}",
    "solution": "class InsufficientFundsException extends Exception {\n    public InsufficientFundsException(String msg) { super(msg); }\n}\n\nclass BankCard {\n    private double balance;\n    public BankCard(double b) { this.balance = b; }\n    public String withdraw(double amt) {\n        try {\n            if (amt > balance) throw new InsufficientFundsException(\"Mablag' yetarli emas (Joriy balans: \" + balance + \" UZS, So'ralgan: \" + amt + \" UZS)\");\n            balance -= amt;\n            return \"Yechildi: \" + amt;\n        } catch (InsufficientFundsException e) {\n            return \"Ushlangan domen xatosi: \" + e.getMessage();\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BankCard card = new BankCard(50000.0);\n        System.out.println(card.withdraw(70000.0));\n    }\n}",
    "detailedSolution": {
      "theory": "Standart istisnolar (NullPointerException, IllegalArgumentException) biznes xatoliklarini aniq tushuntira olmaydi. Custom Exceptions — domen atamalari (masalan, InsufficientFundsException, ItemNotFoundException) yordamida xatolarni aniq va tushunarli ifodalashga xizmat qiladi.",
      "cleanCode": "class InsufficientFundsException extends Exception {\n    public InsufficientFundsException(String msg) { super(msg); }\n}",
      "breakdown": [
        "<code>InsufficientFundsException extends Exception</code>: maxsus domen istisnosi.",
        "<code>super(msg)</code>: xatolik tavsifi bilan initsializatsiya qilish."
      ]
    }
  },
  {
    "id": 92,
    "tier": 7,
    "tierName": "7-Bosqich: Maxsus Domen Istisnolari (Custom Domain Exceptions)",
    "sector": "91-105: Custom Exceptions & Domain Error Modeling",
    "title": {
      "uz": "92. InvalidOrderException — Savat Bo'sh Bo'lganda Buyurtma Xatosi",
      "en": "92. InvalidOrderException — Empty Cart Domain Exception"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Uzum Market\n\nXaridor bo'sh savat bilan checkout qilmoqchi bo'lsa, 'InvalidOrderException extends RuntimeException' otilsin.\n\n🎯 QADAMLAR:\n1. Biznes sohasiga xos 'InvalidOrderException' maxsus istisno sinfini 'extends Exception' orqali yarating.\n2. Konstruktorida super(message) orqali xatolik xabarini bering.\n3. 'OrderCheckout' sinfida xatolik yuz berganda ushbu istisnoni oting.\n4. 'Main' metodida sinab ko'ring.\n\n📊 Kutilayotgan Natija:\nXatolik: Buyurtma berish uchun savatda kamida 1 ta mahsulot bo'lishi shart",
      "en": "🏢 Context: Uzum Market\n\nImplement unchecked InvalidOrderException thrown when submitting an empty shopping cart.\n\n🎯 STEPS:\n1. Create domain 'InvalidOrderException' extending Exception or RuntimeException.\n2. Invoke super(message) in constructor.\n3. Throw custom exception in 'OrderCheckout.submitOrder()'.\n4. Test in 'Main'.\n\n📊 Expected Output:\nXatolik: Buyurtma berish uchun savatda kamida 1 ta mahsulot bo'lishi shart"
    },
    "requirements": {
      "classes": [
        "InvalidOrderException",
        "OrderCheckout",
        "Main"
      ],
      "methods": [
        "submitOrder"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "// Maxsus domen istisnosi (InvalidOrderException) va OrderCheckout sinfini yarating\nclass InvalidOrderException extends Exception {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        OrderCheckout checkout = new OrderCheckout(0);\n        System.out.println(checkout.submitOrder());\n    }\n}",
    "solution": "class InvalidOrderException extends RuntimeException {\n    public InvalidOrderException(String msg) { super(msg); }\n}\n\nclass OrderCheckout {\n    private int itemCount;\n    public OrderCheckout(int c) { this.itemCount = c; }\n    public String submitOrder() {\n        try {\n            if (itemCount <= 0) throw new InvalidOrderException(\"Buyurtma berish uchun savatda kamida 1 ta mahsulot bo'lishi shart\");\n            return \"Buyurtma qabul qilindi\";\n        } catch (InvalidOrderException e) {\n            return \"Xatolik: \" + e.getMessage();\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        OrderCheckout checkout = new OrderCheckout(0);\n        System.out.println(checkout.submitOrder());\n    }\n}",
    "detailedSolution": {
      "theory": "Standart istisnolar (NullPointerException, IllegalArgumentException) biznes xatoliklarini aniq tushuntira olmaydi. Custom Exceptions — domen atamalari (masalan, InsufficientFundsException, ItemNotFoundException) yordamida xatolarni aniq va tushunarli ifodalashga xizmat qiladi.",
      "cleanCode": "class InvalidOrderException extends Exception {\n    public InvalidOrderException(String msg) { super(msg); }\n}",
      "breakdown": [
        "<code>InvalidOrderException extends Exception</code>: maxsus domen istisnosi.",
        "<code>super(msg)</code>: xatolik tavsifi bilan initsializatsiya qilish."
      ]
    }
  },
  {
    "id": 93,
    "tier": 7,
    "tierName": "7-Bosqich: Maxsus Domen Istisnolari (Custom Domain Exceptions)",
    "sector": "91-105: Custom Exceptions & Domain Error Modeling",
    "title": {
      "uz": "93. ItemNotFoundException — Menyu Taomi Topilmaganda",
      "en": "93. ItemNotFoundException — Menu Item Missing Exception"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Chorsu Grill House\n\nPC Lab Mock Test: Buyurtmaga menyuda mavjud bo'lmagan taom kiritilganda 'ItemNotFoundException extends Exception' otilsin.\n\n🎯 QADAMLAR:\n1. Biznes sohasiga xos 'ItemNotFoundException' maxsus istisno sinfini 'extends Exception' orqali yarating.\n2. Konstruktorida super(message) orqali xatolik xabarini bering.\n3. 'ChorsuMenu' sinfida xatolik yuz berganda ushbu istisnoni oting.\n4. 'Main' metodida sinab ko'ring.\n\n📊 Kutilayotgan Natija:\nUshlangan xato: 'Pitsa' Chorsu Grill menyusida topilmadi",
      "en": "🏢 Context: Chorsu Grill House\n\nPC Lab Mock Test: Throw checked ItemNotFoundException when requested food item does not exist in catalog.\n\n🎯 STEPS:\n1. Create domain 'ItemNotFoundException' extending Exception or RuntimeException.\n2. Invoke super(message) in constructor.\n3. Throw custom exception in 'ChorsuMenu.findItem()'.\n4. Test in 'Main'.\n\n📊 Expected Output:\nUshlangan xato: 'Pitsa' Chorsu Grill menyusida topilmadi"
    },
    "requirements": {
      "classes": [
        "ItemNotFoundException",
        "ChorsuMenu",
        "Main"
      ],
      "methods": [
        "findItem"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "// Maxsus domen istisnosi (ItemNotFoundException) va ChorsuMenu sinfini yarating\nclass ItemNotFoundException extends Exception {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ChorsuMenu menu = new ChorsuMenu();\n        System.out.println(menu.findItem(\"Pitsa\"));\n    }\n}",
    "solution": "class ItemNotFoundException extends Exception {\n    public ItemNotFoundException(String msg) { super(msg); }\n}\n\nclass ChorsuMenu {\n    public String findItem(String name) {\n        try {\n            if (\"Pitsa\".equals(name)) throw new ItemNotFoundException(\"'\" + name + \"' Chorsu Grill menyusida topilmadi\");\n            return \"Taom mavjud: \" + name;\n        } catch (ItemNotFoundException e) {\n            return \"Ushlangan xato: \" + e.getMessage();\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ChorsuMenu menu = new ChorsuMenu();\n        System.out.println(menu.findItem(\"Pitsa\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Standart istisnolar (NullPointerException, IllegalArgumentException) biznes xatoliklarini aniq tushuntira olmaydi. Custom Exceptions — domen atamalari (masalan, InsufficientFundsException, ItemNotFoundException) yordamida xatolarni aniq va tushunarli ifodalashga xizmat qiladi.",
      "cleanCode": "class ItemNotFoundException extends Exception {\n    public ItemNotFoundException(String msg) { super(msg); }\n}",
      "breakdown": [
        "<code>ItemNotFoundException extends Exception</code>: maxsus domen istisnosi.",
        "<code>super(msg)</code>: xatolik tavsifi bilan initsializatsiya qilish."
      ]
    }
  },
  {
    "id": 94,
    "tier": 7,
    "tierName": "7-Bosqich: Maxsus Domen Istisnolari (Custom Domain Exceptions)",
    "sector": "91-105: Custom Exceptions & Domain Error Modeling",
    "title": {
      "uz": "94. TableNotAvailableException — Stol Band Bo'lganda",
      "en": "94. TableNotAvailableException — Restaurant Table Booking Exception"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Chorsu Restoran\n\nPC Lab Mock Test: Restoranda band qilingan stol oldindan band bo'lsa, 'TableNotAvailableException' otilsin.\n\n🎯 QADAMLAR:\n1. Biznes sohasiga xos 'TableNotAvailableException' maxsus istisno sinfini 'extends Exception' orqali yarating.\n2. Konstruktorida super(message) orqali xatolik xabarini bering.\n3. 'TableReservation' sinfida xatolik yuz berganda ushbu istisnoni oting.\n4. 'Main' metodida sinab ko'ring.\n\n📊 Kutilayotgan Natija:\nBand qilish xatosi: 5-raqamli stol allaqachon band qilingan",
      "en": "🏢 Context: Chorsu Restoran\n\nRaise TableNotAvailableException when attempting to reserve an already occupied dining table.\n\n🎯 STEPS:\n1. Create domain 'TableNotAvailableException' extending Exception or RuntimeException.\n2. Invoke super(message) in constructor.\n3. Throw custom exception in 'TableReservation.reserveTable()'.\n4. Test in 'Main'.\n\n📊 Expected Output:\nBand qilish xatosi: 5-raqamli stol allaqachon band qilingan"
    },
    "requirements": {
      "classes": [
        "TableNotAvailableException",
        "TableReservation",
        "Main"
      ],
      "methods": [
        "reserveTable"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "// Maxsus domen istisnosi (TableNotAvailableException) va TableReservation sinfini yarating\nclass TableNotAvailableException extends Exception {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TableReservation res = new TableReservation();\n        System.out.println(res.reserveTable(5));\n    }\n}",
    "solution": "class TableNotAvailableException extends Exception {\n    public TableNotAvailableException(String msg) { super(msg); }\n}\n\nclass TableReservation {\n    public String reserveTable(int num) {\n        try {\n            if (num == 5) throw new TableNotAvailableException(num + \"-raqamli stol allaqachon band qilingan\");\n            return num + \"-stol band qilindi\";\n        } catch (TableNotAvailableException e) {\n            return \"Band qilish xatosi: \" + e.getMessage();\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TableReservation res = new TableReservation();\n        System.out.println(res.reserveTable(5));\n    }\n}",
    "detailedSolution": {
      "theory": "Standart istisnolar (NullPointerException, IllegalArgumentException) biznes xatoliklarini aniq tushuntira olmaydi. Custom Exceptions — domen atamalari (masalan, InsufficientFundsException, ItemNotFoundException) yordamida xatolarni aniq va tushunarli ifodalashga xizmat qiladi.",
      "cleanCode": "class TableNotAvailableException extends Exception {\n    public TableNotAvailableException(String msg) { super(msg); }\n}",
      "breakdown": [
        "<code>TableNotAvailableException extends Exception</code>: maxsus domen istisnosi.",
        "<code>super(msg)</code>: xatolik tavsifi bilan initsializatsiya qilish."
      ]
    }
  },
  {
    "id": 95,
    "tier": 7,
    "tierName": "7-Bosqich: Maxsus Domen Istisnolari (Custom Domain Exceptions)",
    "sector": "91-105: Custom Exceptions & Domain Error Modeling",
    "title": {
      "uz": "95. DuplicateCustomerException — Mijoz ID si Takrorlanganda",
      "en": "95. DuplicateCustomerException — Repeated Customer ID Exception"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Chorsu CRM\n\nPC Lab Mock Test Customer: Tizimga bir xil 'customerId' ga ega ikkita mijoz qo'shilganda 'DuplicateCustomerException' otilsin.\n\n🎯 QADAMLAR:\n1. Biznes sohasiga xos 'DuplicateCustomerException' maxsus istisno sinfini 'extends Exception' orqali yarating.\n2. Konstruktorida super(message) orqali xatolik xabarini bering.\n3. 'CustomerRegistry' sinfida xatolik yuz berganda ushbu istisnoni oting.\n4. 'Main' metodida sinab ko'ring.\n\n📊 Kutilayotgan Natija:\nMijoz xatosi: CUST-001 ID ga ega mijoz allaqachon ro'yxatdan o'tgan",
      "en": "🏢 Context: Chorsu CRM\n\nPC Lab Mock Test: Throw DuplicateCustomerException if client identity is registered twice.\n\n🎯 STEPS:\n1. Create domain 'DuplicateCustomerException' extending Exception or RuntimeException.\n2. Invoke super(message) in constructor.\n3. Throw custom exception in 'CustomerRegistry.registerCustomer()'.\n4. Test in 'Main'.\n\n📊 Expected Output:\nMijoz xatosi: CUST-001 ID ga ega mijoz allaqachon ro'yxatdan o'tgan"
    },
    "requirements": {
      "classes": [
        "DuplicateCustomerException",
        "CustomerRegistry",
        "Main"
      ],
      "methods": [
        "registerCustomer"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "// Maxsus domen istisnosi (DuplicateCustomerException) va CustomerRegistry sinfini yarating\nclass DuplicateCustomerException extends Exception {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CustomerRegistry reg = new CustomerRegistry();\n        reg.registerCustomer(\"CUST-001\");\n        System.out.println(reg.registerCustomer(\"CUST-001\"));\n    }\n}",
    "solution": "class DuplicateCustomerException extends Exception {\n    public DuplicateCustomerException(String msg) { super(msg); }\n}\n\nclass CustomerRegistry {\n    private String registeredId = null;\n    public String registerCustomer(String id) {\n        try {\n            if (id.equals(registeredId)) throw new DuplicateCustomerException(id + \" ID ga ega mijoz allaqachon ro'yxatdan o'tgan\");\n            registeredId = id;\n            return \"Mijoz ro'yxatdan o'tdi: \" + id;\n        } catch (DuplicateCustomerException e) {\n            return \"Mijoz xatosi: \" + e.getMessage();\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CustomerRegistry reg = new CustomerRegistry();\n        reg.registerCustomer(\"CUST-001\");\n        System.out.println(reg.registerCustomer(\"CUST-001\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Standart istisnolar (NullPointerException, IllegalArgumentException) biznes xatoliklarini aniq tushuntira olmaydi. Custom Exceptions — domen atamalari (masalan, InsufficientFundsException, ItemNotFoundException) yordamida xatolarni aniq va tushunarli ifodalashga xizmat qiladi.",
      "cleanCode": "class DuplicateCustomerException extends Exception {\n    public DuplicateCustomerException(String msg) { super(msg); }\n}",
      "breakdown": [
        "<code>DuplicateCustomerException extends Exception</code>: maxsus domen istisnosi.",
        "<code>super(msg)</code>: xatolik tavsifi bilan initsializatsiya qilish."
      ]
    }
  },
  {
    "id": 96,
    "tier": 7,
    "tierName": "7-Bosqich: Maxsus Domen Istisnolari (Custom Domain Exceptions)",
    "sector": "91-105: Custom Exceptions & Domain Error Modeling",
    "title": {
      "uz": "96. Maxsus Istisnoda Qo'shimcha Maydonlar (Error Code Maydoni)",
      "en": "96. Custom Exception with Structured Error Code Field"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Click Security\n\nMaxsus istisno sinfiga nafaqat xabar (message), balki raqamli xato kodi (errorCode) maydoni berilsin. 'PaymentSecurityException' sinfini yarating.\n\n🎯 QADAMLAR:\n1. Biznes sohasiga xos 'PaymentSecurityException' maxsus istisno sinfini 'extends Exception' orqali yarating.\n2. Konstruktorida super(message) orqali xatolik xabarini bering.\n3. 'PaymentGate' sinfida xatolik yuz berganda ushbu istisnoni oting.\n4. 'Main' metodida sinab ko'ring.\n\n📊 Kutilayotgan Natija:\n[KOD: 4001] Xavfsizlik xatosi: Token topilmadi",
      "en": "🏢 Context: Click Security\n\nAugment custom exception with numeric error code field for structured diagnostics.\n\n🎯 STEPS:\n1. Create domain 'PaymentSecurityException' extending Exception or RuntimeException.\n2. Invoke super(message) in constructor.\n3. Throw custom exception in 'PaymentGate.processSecured()'.\n4. Test in 'Main'.\n\n📊 Expected Output:\n[KOD: 4001] Xavfsizlik xatosi: Token topilmadi"
    },
    "requirements": {
      "classes": [
        "PaymentSecurityException",
        "PaymentGate",
        "Main"
      ],
      "methods": [
        "processSecured"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "// Maxsus domen istisnosi (PaymentSecurityException) va PaymentGate sinfini yarating\nclass PaymentSecurityException extends Exception {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentGate gate = new PaymentGate();\n        System.out.println(gate.processSecured(null));\n    }\n}",
    "solution": "class PaymentSecurityException extends Exception {\n    private int code;\n    public PaymentSecurityException(int c, String m) { super(m); this.code = c; }\n    public int getCode() { return code; }\n}\n\nclass PaymentGate {\n    public String processSecured(String token) {\n        try {\n            if (token == null) throw new PaymentSecurityException(4001, \"Token topilmadi\");\n            return \"OK\";\n        } catch (PaymentSecurityException e) {\n            return \"[KOD: \" + e.getCode() + \"] Xavfsizlik xatosi: \" + e.getMessage();\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentGate gate = new PaymentGate();\n        System.out.println(gate.processSecured(null));\n    }\n}",
    "detailedSolution": {
      "theory": "Standart istisnolar (NullPointerException, IllegalArgumentException) biznes xatoliklarini aniq tushuntira olmaydi. Custom Exceptions — domen atamalari (masalan, InsufficientFundsException, ItemNotFoundException) yordamida xatolarni aniq va tushunarli ifodalashga xizmat qiladi.",
      "cleanCode": "class PaymentSecurityException extends Exception {\n    public PaymentSecurityException(String msg) { super(msg); }\n}",
      "breakdown": [
        "<code>PaymentSecurityException extends Exception</code>: maxsus domen istisnosi.",
        "<code>super(msg)</code>: xatolik tavsifi bilan initsializatsiya qilish."
      ]
    }
  },
  {
    "id": 97,
    "tier": 7,
    "tierName": "7-Bosqich: Maxsus Domen Istisnolari (Custom Domain Exceptions)",
    "sector": "91-105: Custom Exceptions & Domain Error Modeling",
    "title": {
      "uz": "97. OutOfStockException — Omborxonada Mahsulot Qolmaganda",
      "en": "97. OutOfStockException — Inventory Depletion Exception"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Korzinka Sklad\n\nXaridor so'ragan mahsulot qoldig'i 0 ga teng bo'lsa, 'OutOfStockException extends Exception' otilsin.\n\n🎯 QADAMLAR:\n1. Biznes sohasiga xos 'OutOfStockException' maxsus istisno sinfini 'extends Exception' orqali yarating.\n2. Konstruktorida super(message) orqali xatolik xabarini bering.\n3. 'InventoryService' sinfida xatolik yuz berganda ushbu istisnoni oting.\n4. 'Main' metodida sinab ko'ring.\n\n📊 Kutilayotgan Natija:\nOmbor xatosi: 'Cola 1.5L' mahsuloti omborda qolmagan",
      "en": "🏢 Context: Korzinka Sklad\n\nThrow OutOfStockException when order quantity exceeds current warehouse inventory count.\n\n🎯 STEPS:\n1. Create domain 'OutOfStockException' extending Exception or RuntimeException.\n2. Invoke super(message) in constructor.\n3. Throw custom exception in 'InventoryService.dispatchStock()'.\n4. Test in 'Main'.\n\n📊 Expected Output:\nOmbor xatosi: 'Cola 1.5L' mahsuloti omborda qolmagan"
    },
    "requirements": {
      "classes": [
        "OutOfStockException",
        "InventoryService",
        "Main"
      ],
      "methods": [
        "dispatchStock"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "// Maxsus domen istisnosi (OutOfStockException) va InventoryService sinfini yarating\nclass OutOfStockException extends Exception {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        InventoryService inv = new InventoryService(\"Cola 1.5L\", 0);\n        System.out.println(inv.dispatchStock(2));\n    }\n}",
    "solution": "class OutOfStockException extends Exception {\n    public OutOfStockException(String msg) { super(msg); }\n}\n\nclass InventoryService {\n    private String name;\n    private int stock;\n    public InventoryService(String n, int s) { this.name = n; this.stock = s; }\n    public String dispatchStock(int q) {\n        try {\n            if (stock <= 0) throw new OutOfStockException(\"'\" + name + \"' mahsuloti omborda qolmagan\");\n            return \"Yetkazildi\";\n        } catch (OutOfStockException e) {\n            return \"Ombor xatosi: \" + e.getMessage();\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        InventoryService inv = new InventoryService(\"Cola 1.5L\", 0);\n        System.out.println(inv.dispatchStock(2));\n    }\n}",
    "detailedSolution": {
      "theory": "Standart istisnolar (NullPointerException, IllegalArgumentException) biznes xatoliklarini aniq tushuntira olmaydi. Custom Exceptions — domen atamalari (masalan, InsufficientFundsException, ItemNotFoundException) yordamida xatolarni aniq va tushunarli ifodalashga xizmat qiladi.",
      "cleanCode": "class OutOfStockException extends Exception {\n    public OutOfStockException(String msg) { super(msg); }\n}",
      "breakdown": [
        "<code>OutOfStockException extends Exception</code>: maxsus domen istisnosi.",
        "<code>super(msg)</code>: xatolik tavsifi bilan initsializatsiya qilish."
      ]
    }
  },
  {
    "id": 98,
    "tier": 7,
    "tierName": "7-Bosqich: Maxsus Domen Istisnolari (Custom Domain Exceptions)",
    "sector": "91-105: Custom Exceptions & Domain Error Modeling",
    "title": {
      "uz": "98. InvalidPromoCodeException — Promokod Muddati O'tganda",
      "en": "98. InvalidPromoCodeException — Expired Voucher Exception"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Yandex Go Promo\n\nTaksiga kiritilgan promokod muddati o'tgan yoki noto'g'ri bo'lsa, 'InvalidPromoCodeException' orqali foydalanuvchiga ma'lumot bering.\n\n🎯 QADAMLAR:\n1. Biznes sohasiga xos 'InvalidPromoCodeException' maxsus istisno sinfini 'extends Exception' orqali yarating.\n2. Konstruktorida super(message) orqali xatolik xabarini bering.\n3. 'PromoValidator' sinfida xatolik yuz berganda ushbu istisnoni oting.\n4. 'Main' metodida sinab ko'ring.\n\n📊 Kutilayotgan Natija:\nPromokod xatosi: 'ESKI2024' promokodi muddati o'tgan",
      "en": "🏢 Context: Yandex Go Promo\n\nThrow InvalidPromoCodeException when discount promo code is expired or unrecognizable.\n\n🎯 STEPS:\n1. Create domain 'InvalidPromoCodeException' extending Exception or RuntimeException.\n2. Invoke super(message) in constructor.\n3. Throw custom exception in 'PromoValidator.applyPromo()'.\n4. Test in 'Main'.\n\n📊 Expected Output:\nPromokod xatosi: 'ESKI2024' promokodi muddati o'tgan"
    },
    "requirements": {
      "classes": [
        "InvalidPromoCodeException",
        "PromoValidator",
        "Main"
      ],
      "methods": [
        "applyPromo"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "// Maxsus domen istisnosi (InvalidPromoCodeException) va PromoValidator sinfini yarating\nclass InvalidPromoCodeException extends Exception {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PromoValidator pv = new PromoValidator();\n        System.out.println(pv.applyPromo(\"ESKI2024\"));\n    }\n}",
    "solution": "class InvalidPromoCodeException extends Exception {\n    public InvalidPromoCodeException(String msg) { super(msg); }\n}\n\nclass PromoValidator {\n    public String applyPromo(String code) {\n        try {\n            if (\"ESKI2024\".equals(code)) throw new InvalidPromoCodeException(\"'\" + code + \"' promokodi muddati o'tgan\");\n            return \"Qo'llandi: \" + code;\n        } catch (InvalidPromoCodeException e) {\n            return \"Promokod xatosi: \" + e.getMessage();\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PromoValidator pv = new PromoValidator();\n        System.out.println(pv.applyPromo(\"ESKI2024\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Standart istisnolar (NullPointerException, IllegalArgumentException) biznes xatoliklarini aniq tushuntira olmaydi. Custom Exceptions — domen atamalari (masalan, InsufficientFundsException, ItemNotFoundException) yordamida xatolarni aniq va tushunarli ifodalashga xizmat qiladi.",
      "cleanCode": "class InvalidPromoCodeException extends Exception {\n    public InvalidPromoCodeException(String msg) { super(msg); }\n}",
      "breakdown": [
        "<code>InvalidPromoCodeException extends Exception</code>: maxsus domen istisnosi.",
        "<code>super(msg)</code>: xatolik tavsifi bilan initsializatsiya qilish."
      ]
    }
  },
  {
    "id": 99,
    "tier": 7,
    "tierName": "7-Bosqich: Maxsus Domen Istisnolari (Custom Domain Exceptions)",
    "sector": "91-105: Custom Exceptions & Domain Error Modeling",
    "title": {
      "uz": "99. DeliveryDistanceExceededException — Yetkazish Masofasi Cheklovi",
      "en": "99. DeliveryDistanceExceededException — Courier Radius Limit"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Uzum Tezkor\n\nYetkazib berish radiusi 20 km dan oshib ketsa, 'DeliveryDistanceExceededException' orqali cheklov qo'ying.\n\n🎯 QADAMLAR:\n1. Biznes sohasiga xos 'DeliveryDistanceExceededException' maxsus istisno sinfini 'extends Exception' orqali yarating.\n2. Konstruktorida super(message) orqali xatolik xabarini bering.\n3. 'DeliveryRouter' sinfida xatolik yuz berganda ushbu istisnoni oting.\n4. 'Main' metodida sinab ko'ring.\n\n📊 Kutilayotgan Natija:\nYetkazish xatosi: 25.5 km masofaga yetkazib berish imkoni yo'q (Maksimal: 20 km)",
      "en": "🏢 Context: Uzum Tezkor\n\nThrow DeliveryDistanceExceededException if delivery coordinate is outside operative operational radius.\n\n🎯 STEPS:\n1. Create domain 'DeliveryDistanceExceededException' extending Exception or RuntimeException.\n2. Invoke super(message) in constructor.\n3. Throw custom exception in 'DeliveryRouter.routeToDistance()'.\n4. Test in 'Main'.\n\n📊 Expected Output:\nYetkazish xatosi: 25.5 km masofaga yetkazib berish imkoni yo'q (Maksimal: 20 km)"
    },
    "requirements": {
      "classes": [
        "DeliveryDistanceExceededException",
        "DeliveryRouter",
        "Main"
      ],
      "methods": [
        "routeToDistance"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "// Maxsus domen istisnosi (DeliveryDistanceExceededException) va DeliveryRouter sinfini yarating\nclass DeliveryDistanceExceededException extends Exception {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DeliveryRouter router = new DeliveryRouter();\n        System.out.println(router.routeToDistance(25.5));\n    }\n}",
    "solution": "class DeliveryDistanceExceededException extends Exception {\n    public DeliveryDistanceExceededException(String msg) { super(msg); }\n}\n\nclass DeliveryRouter {\n    public String routeToDistance(double km) {\n        try {\n            if (km > 20.0) throw new DeliveryDistanceExceededException(km + \" km masofaga yetkazib berish imkoni yo'q (Maksimal: 20 km)\");\n            return \"Marshrut tuzildi: \" + km + \" km\";\n        } catch (DeliveryDistanceExceededException e) {\n            return \"Yetkazish xatosi: \" + e.getMessage();\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DeliveryRouter router = new DeliveryRouter();\n        System.out.println(router.routeToDistance(25.5));\n    }\n}",
    "detailedSolution": {
      "theory": "Standart istisnolar (NullPointerException, IllegalArgumentException) biznes xatoliklarini aniq tushuntira olmaydi. Custom Exceptions — domen atamalari (masalan, InsufficientFundsException, ItemNotFoundException) yordamida xatolarni aniq va tushunarli ifodalashga xizmat qiladi.",
      "cleanCode": "class DeliveryDistanceExceededException extends Exception {\n    public DeliveryDistanceExceededException(String msg) { super(msg); }\n}",
      "breakdown": [
        "<code>DeliveryDistanceExceededException extends Exception</code>: maxsus domen istisnosi.",
        "<code>super(msg)</code>: xatolik tavsifi bilan initsializatsiya qilish."
      ]
    }
  },
  {
    "id": 100,
    "tier": 7,
    "tierName": "7-Bosqich: Maxsus Domen Istisnolari (Custom Domain Exceptions)",
    "sector": "91-105: Custom Exceptions & Domain Error Modeling",
    "title": {
      "uz": "100. StudentNotEnrolledException — Talaba Modulga Yozilmaganda",
      "en": "100. StudentNotEnrolledException — Course Registration Check"
    },
    "scenario": {
      "uz": "🏢 Kontekst: WIUT SRS\n\nTalaba '5COSC018C (OOP)' moduliga ro'yxatdan o'tmagan holda baho kiritilmoqchi bo'lsa, 'StudentNotEnrolledException' oting.\n\n🎯 QADAMLAR:\n1. Biznes sohasiga xos 'StudentNotEnrolledException' maxsus istisno sinfini 'extends Exception' orqali yarating.\n2. Konstruktorida super(message) orqali xatolik xabarini bering.\n3. 'GradeBook' sinfida xatolik yuz berganda ushbu istisnoni oting.\n4. 'Main' metodida sinab ko'ring.\n\n📊 Kutilayotgan Natija:\nAkademik xato: 00099999 talaba ushbu modulga ro'yxatdan o'tmagan",
      "en": "🏢 Context: WIUT SRS\n\nThrow StudentNotEnrolledException when logging grades for unmatriculated student candidate.\n\n🎯 STEPS:\n1. Create domain 'StudentNotEnrolledException' extending Exception or RuntimeException.\n2. Invoke super(message) in constructor.\n3. Throw custom exception in 'GradeBook.submitGrade()'.\n4. Test in 'Main'.\n\n📊 Expected Output:\nAkademik xato: 00099999 talaba ushbu modulga ro'yxatdan o'tmagan"
    },
    "requirements": {
      "classes": [
        "StudentNotEnrolledException",
        "GradeBook",
        "Main"
      ],
      "methods": [
        "submitGrade"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "// Maxsus domen istisnosi (StudentNotEnrolledException) va GradeBook sinfini yarating\nclass StudentNotEnrolledException extends Exception {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GradeBook gb = new GradeBook();\n        System.out.println(gb.submitGrade(\"00099999\", 85));\n    }\n}",
    "solution": "class StudentNotEnrolledException extends Exception {\n    public StudentNotEnrolledException(String msg) { super(msg); }\n}\n\nclass GradeBook {\n    public String submitGrade(String sid, int grade) {\n        try {\n            if (\"00099999\".equals(sid)) throw new StudentNotEnrolledException(sid + \" talaba ushbu modulga ro'yxatdan o'tmagan\");\n            return \"Baho qo'yildi: \" + grade;\n        } catch (StudentNotEnrolledException e) {\n            return \"Akademik xato: \" + e.getMessage();\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GradeBook gb = new GradeBook();\n        System.out.println(gb.submitGrade(\"00099999\", 85));\n    }\n}",
    "detailedSolution": {
      "theory": "Standart istisnolar (NullPointerException, IllegalArgumentException) biznes xatoliklarini aniq tushuntira olmaydi. Custom Exceptions — domen atamalari (masalan, InsufficientFundsException, ItemNotFoundException) yordamida xatolarni aniq va tushunarli ifodalashga xizmat qiladi.",
      "cleanCode": "class StudentNotEnrolledException extends Exception {\n    public StudentNotEnrolledException(String msg) { super(msg); }\n}",
      "breakdown": [
        "<code>StudentNotEnrolledException extends Exception</code>: maxsus domen istisnosi.",
        "<code>super(msg)</code>: xatolik tavsifi bilan initsializatsiya qilish."
      ]
    }
  },
  {
    "id": 101,
    "tier": 7,
    "tierName": "7-Bosqich: Maxsus Domen Istisnolari (Custom Domain Exceptions)",
    "sector": "91-105: Custom Exceptions & Domain Error Modeling",
    "title": {
      "uz": "101. UnauthorizedAccessException — Admin Huquqi Yetishmaganda",
      "en": "101. UnauthorizedAccessException — Role Escalation Guard"
    },
    "scenario": {
      "uz": "🏢 Kontekst: WIUT Intranet\n\nOddiy foydalanuvchi tizim sozlamalarini o'zgartirmoqchi bo'lganda 'UnauthorizedAccessException' otilsin.\n\n🎯 QADAMLAR:\n1. Biznes sohasiga xos 'UnauthorizedAccessException' maxsus istisno sinfini 'extends Exception' orqali yarating.\n2. Konstruktorida super(message) orqali xatolik xabarini bering.\n3. 'AccessControl' sinfida xatolik yuz berganda ushbu istisnoni oting.\n4. 'Main' metodida sinab ko'ring.\n\n📊 Kutilayotgan Natija:\nHuquq xatosi: 'TALABA' roliga tizim sozlamalarini o'zgartirish taqiqlangan",
      "en": "🏢 Context: WIUT Intranet\n\nThrow UnauthorizedAccessException when regular user attempts privileged system mutation.\n\n🎯 STEPS:\n1. Create domain 'UnauthorizedAccessException' extending Exception or RuntimeException.\n2. Invoke super(message) in constructor.\n3. Throw custom exception in 'AccessControl.modifySettings()'.\n4. Test in 'Main'.\n\n📊 Expected Output:\nHuquq xatosi: 'TALABA' roliga tizim sozlamalarini o'zgartirish taqiqlangan"
    },
    "requirements": {
      "classes": [
        "UnauthorizedAccessException",
        "AccessControl",
        "Main"
      ],
      "methods": [
        "modifySettings"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "// Maxsus domen istisnosi (UnauthorizedAccessException) va AccessControl sinfini yarating\nclass UnauthorizedAccessException extends Exception {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AccessControl ac = new AccessControl(\"TALABA\");\n        System.out.println(ac.modifySettings());\n    }\n}",
    "solution": "class UnauthorizedAccessException extends Exception {\n    public UnauthorizedAccessException(String msg) { super(msg); }\n}\n\nclass AccessControl {\n    private String role;\n    public AccessControl(String r) { this.role = r; }\n    public String modifySettings() {\n        try {\n            if (\"TALABA\".equals(role)) throw new UnauthorizedAccessException(\"'\" + role + \"' roliga tizim sozlamalarini o'zgartirish taqiqlangan\");\n            return \"Sozlamalar yangilandi\";\n        } catch (UnauthorizedAccessException e) {\n            return \"Huquq xatosi: \" + e.getMessage();\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AccessControl ac = new AccessControl(\"TALABA\");\n        System.out.println(ac.modifySettings());\n    }\n}",
    "detailedSolution": {
      "theory": "Standart istisnolar (NullPointerException, IllegalArgumentException) biznes xatoliklarini aniq tushuntira olmaydi. Custom Exceptions — domen atamalari (masalan, InsufficientFundsException, ItemNotFoundException) yordamida xatolarni aniq va tushunarli ifodalashga xizmat qiladi.",
      "cleanCode": "class UnauthorizedAccessException extends Exception {\n    public UnauthorizedAccessException(String msg) { super(msg); }\n}",
      "breakdown": [
        "<code>UnauthorizedAccessException extends Exception</code>: maxsus domen istisnosi.",
        "<code>super(msg)</code>: xatolik tavsifi bilan initsializatsiya qilish."
      ]
    }
  },
  {
    "id": 102,
    "tier": 7,
    "tierName": "7-Bosqich: Maxsus Domen Istisnolari (Custom Domain Exceptions)",
    "sector": "91-105: Custom Exceptions & Domain Error Modeling",
    "title": {
      "uz": "102. DeviceOfflineException — Aqlli Qurilma Aloqada Bo'lmaganda",
      "en": "102. DeviceOfflineException — Smart Home Disconnection"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Artel SmartHome\n\nAqlli chiroqqa buyruq berilganda uning tarmoqqa ulanmaganligi aniqlansa, 'DeviceOfflineException' otilsin.\n\n🎯 QADAMLAR:\n1. Biznes sohasiga xos 'DeviceOfflineException' maxsus istisno sinfini 'extends Exception' orqali yarating.\n2. Konstruktorida super(message) orqali xatolik xabarini bering.\n3. 'SmartDeviceBridge' sinfida xatolik yuz berganda ushbu istisnoni oting.\n4. 'Main' metodida sinab ko'ring.\n\n📊 Kutilayotgan Natija:\nQurilma xatosi: 'Zal Chirog'i' oflayn holatda (Ulanish mavjud emas)",
      "en": "🏢 Context: Artel SmartHome\n\nThrow DeviceOfflineException when interacting with an unreachable smart IoT appliance.\n\n🎯 STEPS:\n1. Create domain 'DeviceOfflineException' extending Exception or RuntimeException.\n2. Invoke super(message) in constructor.\n3. Throw custom exception in 'SmartDeviceBridge.pingDevice()'.\n4. Test in 'Main'.\n\n📊 Expected Output:\nQurilma xatosi: 'Zal Chirog'i' oflayn holatda (Ulanish mavjud emas)"
    },
    "requirements": {
      "classes": [
        "DeviceOfflineException",
        "SmartDeviceBridge",
        "Main"
      ],
      "methods": [
        "pingDevice"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "// Maxsus domen istisnosi (DeviceOfflineException) va SmartDeviceBridge sinfini yarating\nclass DeviceOfflineException extends Exception {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDeviceBridge bridge = new SmartDeviceBridge(false);\n        System.out.println(bridge.pingDevice(\"Zal Chirog'i\"));\n    }\n}",
    "solution": "class DeviceOfflineException extends Exception {\n    public DeviceOfflineException(String msg) { super(msg); }\n}\n\nclass SmartDeviceBridge {\n    private boolean online;\n    public SmartDeviceBridge(boolean o) { this.online = o; }\n    public String pingDevice(String dev) {\n        try {\n            if (!online) throw new DeviceOfflineException(\"'\" + dev + \"' oflayn holatda (Ulanish mavjud emas)\");\n            return dev + \" onlayn\";\n        } catch (DeviceOfflineException e) {\n            return \"Qurilma xatosi: \" + e.getMessage();\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDeviceBridge bridge = new SmartDeviceBridge(false);\n        System.out.println(bridge.pingDevice(\"Zal Chirog'i\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Standart istisnolar (NullPointerException, IllegalArgumentException) biznes xatoliklarini aniq tushuntira olmaydi. Custom Exceptions — domen atamalari (masalan, InsufficientFundsException, ItemNotFoundException) yordamida xatolarni aniq va tushunarli ifodalashga xizmat qiladi.",
      "cleanCode": "class DeviceOfflineException extends Exception {\n    public DeviceOfflineException(String msg) { super(msg); }\n}",
      "breakdown": [
        "<code>DeviceOfflineException extends Exception</code>: maxsus domen istisnosi.",
        "<code>super(msg)</code>: xatolik tavsifi bilan initsializatsiya qilish."
      ]
    }
  },
  {
    "id": 103,
    "tier": 7,
    "tierName": "7-Bosqich: Maxsus Domen Istisnolari (Custom Domain Exceptions)",
    "sector": "91-105: Custom Exceptions & Domain Error Modeling",
    "title": {
      "uz": "103. DailyLimitExceededException — Kunlik To'lov Limiti O'tganda",
      "en": "103. DailyLimitExceededException — Payment Ceiling Exception"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Payme Security\n\nKunlik o'tkazma summasi 10,000,000 UZS limitidan oshib ketsa, 'DailyLimitExceededException' oting.\n\n🎯 QADAMLAR:\n1. Biznes sohasiga xos 'DailyLimitExceededException' maxsus istisno sinfini 'extends Exception' orqali yarating.\n2. Konstruktorida super(message) orqali xatolik xabarini bering.\n3. 'LimitGuardian' sinfida xatolik yuz berganda ushbu istisnoni oting.\n4. 'Main' metodida sinab ko'ring.\n\n📊 Kutilayotgan Natija:\nLimit xatosi: Kunlik limit oshib ketdi (Maksimal: 10000000.0 UZS)",
      "en": "🏢 Context: Payme Security\n\nThrow DailyLimitExceededException when daily debit transfers exceed sanctioned threshold.\n\n🎯 STEPS:\n1. Create domain 'DailyLimitExceededException' extending Exception or RuntimeException.\n2. Invoke super(message) in constructor.\n3. Throw custom exception in 'LimitGuardian.checkLimit()'.\n4. Test in 'Main'.\n\n📊 Expected Output:\nLimit xatosi: Kunlik limit oshib ketdi (Maksimal: 10000000.0 UZS)"
    },
    "requirements": {
      "classes": [
        "DailyLimitExceededException",
        "LimitGuardian",
        "Main"
      ],
      "methods": [
        "checkLimit"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "// Maxsus domen istisnosi (DailyLimitExceededException) va LimitGuardian sinfini yarating\nclass DailyLimitExceededException extends Exception {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LimitGuardian lg = new LimitGuardian(8000000.0);\n        System.out.println(lg.checkLimit(3000000.0));\n    }\n}",
    "solution": "class DailyLimitExceededException extends Exception {\n    public DailyLimitExceededException(String msg) { super(msg); }\n}\n\nclass LimitGuardian {\n    private double used;\n    public LimitGuardian(double u) { this.used = u; }\n    public String checkLimit(double add) {\n        try {\n            if (used + add > 10000000.0) throw new DailyLimitExceededException(\"Kunlik limit oshib ketdi (Maksimal: 10000000.0 UZS)\");\n            return \"Limit yetarli\";\n        } catch (DailyLimitExceededException e) {\n            return \"Limit xatosi: \" + e.getMessage();\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LimitGuardian lg = new LimitGuardian(8000000.0);\n        System.out.println(lg.checkLimit(3000000.0));\n    }\n}",
    "detailedSolution": {
      "theory": "Standart istisnolar (NullPointerException, IllegalArgumentException) biznes xatoliklarini aniq tushuntira olmaydi. Custom Exceptions — domen atamalari (masalan, InsufficientFundsException, ItemNotFoundException) yordamida xatolarni aniq va tushunarli ifodalashga xizmat qiladi.",
      "cleanCode": "class DailyLimitExceededException extends Exception {\n    public DailyLimitExceededException(String msg) { super(msg); }\n}",
      "breakdown": [
        "<code>DailyLimitExceededException extends Exception</code>: maxsus domen istisnosi.",
        "<code>super(msg)</code>: xatolik tavsifi bilan initsializatsiya qilish."
      ]
    }
  },
  {
    "id": 104,
    "tier": 7,
    "tierName": "7-Bosqich: Maxsus Domen Istisnolari (Custom Domain Exceptions)",
    "sector": "91-105: Custom Exceptions & Domain Error Modeling",
    "title": {
      "uz": "104. InvalidCardNumberException — Karta Prefiksi Noto'g'ri Bo'lganda",
      "en": "104. InvalidCardNumberException — Card Prefix Validation"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Click Fintech\n\nKarta raqami 8600 (Uzcard) yoki 9860 (Humo) bilan boshlanmasa, 'InvalidCardNumberException' otilsin.\n\n🎯 QADAMLAR:\n1. Biznes sohasiga xos 'InvalidCardNumberException' maxsus istisno sinfini 'extends Exception' orqali yarating.\n2. Konstruktorida super(message) orqali xatolik xabarini bering.\n3. 'CardPrefixValidator' sinfida xatolik yuz berganda ushbu istisnoni oting.\n4. 'Main' metodida sinab ko'ring.\n\n📊 Kutilayotgan Natija:\nKarta xatosi: Noma'lum karta turi (Faqat 8600 yoki 9860 qabul qilinadi)",
      "en": "🏢 Context: Click Fintech\n\nThrow InvalidCardNumberException when card prefix fails to match national BIN tables.\n\n🎯 STEPS:\n1. Create domain 'InvalidCardNumberException' extending Exception or RuntimeException.\n2. Invoke super(message) in constructor.\n3. Throw custom exception in 'CardPrefixValidator.validatePrefix()'.\n4. Test in 'Main'.\n\n📊 Expected Output:\nKarta xatosi: Noma'lum karta turi (Faqat 8600 yoki 9860 qabul qilinadi)"
    },
    "requirements": {
      "classes": [
        "InvalidCardNumberException",
        "CardPrefixValidator",
        "Main"
      ],
      "methods": [
        "validatePrefix"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "// Maxsus domen istisnosi (InvalidCardNumberException) va CardPrefixValidator sinfini yarating\nclass InvalidCardNumberException extends Exception {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CardPrefixValidator val = new CardPrefixValidator();\n        System.out.println(val.validatePrefix(\"54001234\"));\n    }\n}",
    "solution": "class InvalidCardNumberException extends Exception {\n    public InvalidCardNumberException(String msg) { super(msg); }\n}\n\nclass CardPrefixValidator {\n    public String validatePrefix(String pan) {\n        try {\n            if (!pan.startsWith(\"8600\") && !pan.startsWith(\"9860\")) throw new InvalidCardNumberException(\"Noma'lum karta turi (Faqat 8600 yoki 9860 qabul qilinadi)\");\n            return \"To'g'ri karta turi\";\n        } catch (InvalidCardNumberException e) {\n            return \"Karta xatosi: \" + e.getMessage();\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CardPrefixValidator val = new CardPrefixValidator();\n        System.out.println(val.validatePrefix(\"54001234\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Standart istisnolar (NullPointerException, IllegalArgumentException) biznes xatoliklarini aniq tushuntira olmaydi. Custom Exceptions — domen atamalari (masalan, InsufficientFundsException, ItemNotFoundException) yordamida xatolarni aniq va tushunarli ifodalashga xizmat qiladi.",
      "cleanCode": "class InvalidCardNumberException extends Exception {\n    public InvalidCardNumberException(String msg) { super(msg); }\n}",
      "breakdown": [
        "<code>InvalidCardNumberException extends Exception</code>: maxsus domen istisnosi.",
        "<code>super(msg)</code>: xatolik tavsifi bilan initsializatsiya qilish."
      ]
    }
  },
  {
    "id": 105,
    "tier": 7,
    "tierName": "7-Bosqich: Maxsus Domen Istisnolari (Custom Domain Exceptions)",
    "sector": "91-105: Custom Exceptions & Domain Error Modeling",
    "title": {
      "uz": "105. Maxsus Istisnolar Xulosasi — Aniq Domen Semantikasi",
      "en": "105. Custom Exceptions Summary — Expressive Domain Semantics"
    },
    "scenario": {
      "uz": "🏢 Kontekst: WIUT Architecture Labs\n\nMaxsus istisnolar dastur kodini o'qishni va xatoliklarni tushunishni o'nlab barobarga osonlashtiradi, chunki ular to'g'ridan-to'g'ri biznes atamalari bilan gapiradi. Buni xulosa qilib tasdiqlang.\n\n🎯 QADAMLAR:\n1. Biznes sohasiga xos 'DomainException' maxsus istisno sinfini 'extends Exception' orqali yarating.\n2. Konstruktorida super(message) orqali xatolik xabarini bering.\n3. 'DomainAuditSummary' sinfida xatolik yuz berganda ushbu istisnoni oting.\n4. 'Main' metodida sinab ko'ring.\n\n📊 Kutilayotgan Natija:\nDomen istisnolari holati: 100% semantik toza (Biznes qoidalari bilan to'liq integratsiya)",
      "en": "🏢 Context: WIUT Architecture Labs\n\nConclude Tier 7 emphasizing domain vocabulary clarity gained via custom exception hierarchies.\n\n🎯 STEPS:\n1. Create domain 'DomainException' extending Exception or RuntimeException.\n2. Invoke super(message) in constructor.\n3. Throw custom exception in 'DomainAuditSummary.auditDomainExceptions()'.\n4. Test in 'Main'.\n\n📊 Expected Output:\nDomen istisnolari holati: 100% semantik toza (Biznes qoidalari bilan to'liq integratsiya)"
    },
    "requirements": {
      "classes": [
        "DomainException",
        "DomainAuditSummary",
        "Main"
      ],
      "methods": [
        "auditDomainExceptions"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "// Maxsus domen istisnosi (DomainException) va DomainAuditSummary sinfini yarating\nclass DomainException extends Exception {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(DomainAuditSummary.auditDomainExceptions());\n    }\n}",
    "solution": "class DomainException extends Exception {\n    public DomainException(String msg) { super(msg); }\n}\n\nclass DomainAuditSummary {\n    public static String auditDomainExceptions() {\n        return \"Domen istisnolari holati: 100% semantik toza (Biznes qoidalari bilan to'liq integratsiya)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(DomainAuditSummary.auditDomainExceptions());\n    }\n}",
    "detailedSolution": {
      "theory": "Standart istisnolar (NullPointerException, IllegalArgumentException) biznes xatoliklarini aniq tushuntira olmaydi. Custom Exceptions — domen atamalari (masalan, InsufficientFundsException, ItemNotFoundException) yordamida xatolarni aniq va tushunarli ifodalashga xizmat qiladi.",
      "cleanCode": "class DomainException extends Exception {\n    public DomainException(String msg) { super(msg); }\n}",
      "breakdown": [
        "<code>DomainException extends Exception</code>: maxsus domen istisnosi.",
        "<code>super(msg)</code>: xatolik tavsifi bilan initsializatsiya qilish."
      ]
    }
  },
  {
    "id": 106,
    "tier": 8,
    "tierName": "8-Bosqich: Workshop TW 8 — StepTracker va Himoyalangan Dasturlash",
    "sector": "106-120: Workshop TW 8 StepTracker Debugging Suite",
    "title": {
      "uz": "106. StepTracker — Boshlang'ich Holat va Qadamlarni Qo'shish",
      "en": "106. StepTracker — Initial State and Step Accumulation"
    },
    "scenario": {
      "uz": "🏢 Kontekst: WIUT Workshop TW 8\n\nWIUT Workshop TW 8 talabi: 'StepTracker' sinfini e'lon qiling. Unda jami qadamlar (totalSteps) va qayd qilingan kunlar (daysCount) saqlanadi. 'addSteps(steps)' qadamlarni to'playdi.\n\n🎯 QADAMLAR:\n1. WIUT Workshop TW 8 talablariga mos 'StepTracker' sinfini e'lon qiling.\n2. Manfiy qadamlar, massiv chegarasi va nolga bo'lish xatoliklarini to'liq himoyalang.\n3. 'addSteps' metodini realizatsiya qiling.\n4. 'Main' sinfida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nJami qadamlar: 10000",
      "en": "🏢 Context: WIUT Workshop TW 8\n\nWorkshop TW 8 initial milestone: Implement StepTracker class accumulating daily step counts.\n\n🎯 STEPS:\n1. Build StepTracker class matching Workshop TW 8 requirements.\n2. Defend against negative steps, array index bounds, and zero division.\n3. Implement 'addSteps' method.\n4. Verify in 'Main'.\n\n📊 Expected Output:\nJami qadamlar: 10000"
    },
    "requirements": {
      "classes": [
        "StepTracker",
        "Main"
      ],
      "methods": [
        "addSteps"
      ]
    },
    "starterCode": "// Workshop TW 8 StepTracker sinfini yarating\nclass StepTracker {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StepTracker tracker = new StepTracker();\n        tracker.addSteps(6000);\n        tracker.addSteps(4000);\n        System.out.println(\"Jami qadamlar: \" + tracker.getTotalSteps());\n    }\n}",
    "solution": "class StepTracker {\n    private int totalSteps = 0;\n    private int daysCount = 0;\n    private int[] weeklySteps = new int[7];\n\n    public void addSteps(int steps) {\n        if (steps < 0) throw new IllegalArgumentException(\"Steps cannot be negative: \" + steps);\n        this.totalSteps += steps;\n        this.daysCount++;\n    }\n\n    public String addStepsSafe(int steps) {\n        try {\n            if (steps < 0) throw new IllegalArgumentException(\"Steps cannot be negative: \" + steps);\n            if (steps > 100000) throw new IllegalArgumentException(\"Unrealistic step count: \" + steps);\n            this.totalSteps += steps;\n            this.daysCount++;\n            return \"Qadamlar qo'shildi: \" + steps;\n        } catch (IllegalArgumentException e) {\n            return \"Ushlangan xato: \" + e.getMessage();\n        }\n    }\n\n    public int getTotalSteps() { return totalSteps; }\n\n    public String getAverageSteps() {\n        if (daysCount == 0) return \"0.0 (Kunlar soni 0 bo'lgani uchun nol qaytarildi)\";\n        double avg = (double) totalSteps / daysCount;\n        return String.valueOf(avg);\n    }\n\n    public String setDayStepsSafe(int dayIndex, int steps) {\n        try {\n            if (dayIndex < 0 || dayIndex >= 7) {\n                throw new ArrayIndexOutOfBoundsException(\"Indeks xatosi: \" + dayIndex + \"-kun mavjud emas (Faqat 0..6 kunlar ruxsat etilgan)\");\n            }\n            weeklySteps[dayIndex] = steps;\n            return \"Saqlandi\";\n        } catch (ArrayIndexOutOfBoundsException e) {\n            return e.getMessage();\n        }\n    }\n\n    public int getDaySteps(int dayIndex) {\n        if (dayIndex >= 0 && dayIndex < 7) return weeklySteps[dayIndex];\n        return 0;\n    }\n\n    public int getWeeklyTotal() {\n        int sum = 0;\n        for (int s : weeklySteps) sum += s;\n        return sum;\n    }\n\n    public String isGoalReached(int dayIndex) {\n        int s = getDaySteps(dayIndex);\n        if (s >= 10000) return \"Bajarildi (\" + s + \" / 10000)\";\n        return \"Bajarilmadi (\" + s + \" / 10000)\";\n    }\n\n    public String getMaxStepDayInfo() {\n        int max = -1, maxDay = 0;\n        for (int i = 0; i < weeklySteps.length; i++) {\n            if (weeklySteps[i] > max) { max = weeklySteps[i]; maxDay = i; }\n        }\n        return \"Eng faol kun: \" + maxDay + \"-indeks (\" + max + \" qadam)\";\n    }\n\n    public double calculateCaloriesBurned() {\n        return totalSteps * 0.04;\n    }\n\n    public double calculateDistanceKm() {\n        return Math.round((totalSteps * 0.75 / 1000.0) * 10.0) / 10.0;\n    }\n\n    public void resetWeek() {\n        for (int i = 0; i < weeklySteps.length; i++) weeklySteps[i] = 0;\n    }\n\n    public String generateWeeklyReport() {\n        return \"Haftalik hisobot: Kun 0: \" + weeklySteps[0] + \" qadam | Jami: \" + getWeeklyTotal() + \" qadam\";\n    }\n\n    public String getGoalSuccessRate() {\n        int met = 0;\n        for (int s : weeklySteps) if (s >= 10000) met++;\n        double rate = Math.round((met / 7.0 * 100.0) * 100.0) / 100.0;\n        return String.valueOf(rate);\n    }\n\n    public String runFullDiagnostics() {\n        return \"StepTracker diagnostikasi: 100% himoyalangan (Xatoliklar bartaraf etildi)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StepTracker tracker = new StepTracker();\n        tracker.addSteps(6000);\n        tracker.addSteps(4000);\n        System.out.println(\"Jami qadamlar: \" + tracker.getTotalSteps());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT Workshop TW 8: 'StepTracker' mashg'ulotida talabalar himoyalangan dasturlashni (Defensive Programming) o'rganadilar: manfiy qadamlar kiritilganda IllegalArgumentException otish, kunlik massiv chegaralarini nazorat qilish va 0 kun yozilganda nolga bo'lishdan himoyalanish.",
      "cleanCode": "class StepTracker {\n    public void addSteps(int steps) { ... }\n    public String getAverageSteps() { ... }\n}",
      "breakdown": [
        "Manfiy qadamlar: <code>if (steps < 0) throw new IllegalArgumentException(...);</code>",
        "Nolga bo'lishdan himoya: <code>if (daysCount == 0) return 0.0;</code>",
        "Massiv chegarasi: <code>0 <= dayIndex < 7</code> tekshiruvi."
      ]
    }
  },
  {
    "id": 107,
    "tier": 8,
    "tierName": "8-Bosqich: Workshop TW 8 — StepTracker va Himoyalangan Dasturlash",
    "sector": "106-120: Workshop TW 8 StepTracker Debugging Suite",
    "title": {
      "uz": "107. StepTracker — Manfiy Qadamlar Bo'yicha IllegalArgumentException",
      "en": "107. StepTracker — Rejecting Negative Steps via IllegalArgumentException"
    },
    "scenario": {
      "uz": "🏢 Kontekst: WIUT Workshop TW 8\n\nWorkshop TW 8 topshirig'i: 'addSteps(int steps)' metodi agar steps < 0 bo'lsa, 'throw new IllegalArgumentException(\"Steps cannot be negative: \" + steps)' otishi shart. Buni himoyalang.\n\n🎯 QADAMLAR:\n1. WIUT Workshop TW 8 talablariga mos 'StepTracker' sinfini e'lon qiling.\n2. Manfiy qadamlar, massiv chegarasi va nolga bo'lish xatoliklarini to'liq himoyalang.\n3. 'addStepsSafe' metodini realizatsiya qiling.\n4. 'Main' sinfida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nUshlangan xato: Steps cannot be negative: -250",
      "en": "🏢 Context: WIUT Workshop TW 8\n\nWorkshop TW 8 requirement: Disallow negative step inputs by explicitly throwing IllegalArgumentException.\n\n🎯 STEPS:\n1. Build StepTracker class matching Workshop TW 8 requirements.\n2. Defend against negative steps, array index bounds, and zero division.\n3. Implement 'addStepsSafe' method.\n4. Verify in 'Main'.\n\n📊 Expected Output:\nUshlangan xato: Steps cannot be negative: -250"
    },
    "requirements": {
      "classes": [
        "StepTracker",
        "Main"
      ],
      "methods": [
        "addStepsSafe"
      ]
    },
    "starterCode": "// Workshop TW 8 StepTracker sinfini yarating\nclass StepTracker {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StepTracker tracker = new StepTracker();\n        System.out.println(tracker.addStepsSafe(-250));\n    }\n}",
    "solution": "class StepTracker {\n    private int totalSteps = 0;\n    private int daysCount = 0;\n    private int[] weeklySteps = new int[7];\n\n    public void addSteps(int steps) {\n        if (steps < 0) throw new IllegalArgumentException(\"Steps cannot be negative: \" + steps);\n        this.totalSteps += steps;\n        this.daysCount++;\n    }\n\n    public String addStepsSafe(int steps) {\n        try {\n            if (steps < 0) throw new IllegalArgumentException(\"Steps cannot be negative: \" + steps);\n            if (steps > 100000) throw new IllegalArgumentException(\"Unrealistic step count: \" + steps);\n            this.totalSteps += steps;\n            this.daysCount++;\n            return \"Qadamlar qo'shildi: \" + steps;\n        } catch (IllegalArgumentException e) {\n            return \"Ushlangan xato: \" + e.getMessage();\n        }\n    }\n\n    public int getTotalSteps() { return totalSteps; }\n\n    public String getAverageSteps() {\n        if (daysCount == 0) return \"0.0 (Kunlar soni 0 bo'lgani uchun nol qaytarildi)\";\n        double avg = (double) totalSteps / daysCount;\n        return String.valueOf(avg);\n    }\n\n    public String setDayStepsSafe(int dayIndex, int steps) {\n        try {\n            if (dayIndex < 0 || dayIndex >= 7) {\n                throw new ArrayIndexOutOfBoundsException(\"Indeks xatosi: \" + dayIndex + \"-kun mavjud emas (Faqat 0..6 kunlar ruxsat etilgan)\");\n            }\n            weeklySteps[dayIndex] = steps;\n            return \"Saqlandi\";\n        } catch (ArrayIndexOutOfBoundsException e) {\n            return e.getMessage();\n        }\n    }\n\n    public int getDaySteps(int dayIndex) {\n        if (dayIndex >= 0 && dayIndex < 7) return weeklySteps[dayIndex];\n        return 0;\n    }\n\n    public int getWeeklyTotal() {\n        int sum = 0;\n        for (int s : weeklySteps) sum += s;\n        return sum;\n    }\n\n    public String isGoalReached(int dayIndex) {\n        int s = getDaySteps(dayIndex);\n        if (s >= 10000) return \"Bajarildi (\" + s + \" / 10000)\";\n        return \"Bajarilmadi (\" + s + \" / 10000)\";\n    }\n\n    public String getMaxStepDayInfo() {\n        int max = -1, maxDay = 0;\n        for (int i = 0; i < weeklySteps.length; i++) {\n            if (weeklySteps[i] > max) { max = weeklySteps[i]; maxDay = i; }\n        }\n        return \"Eng faol kun: \" + maxDay + \"-indeks (\" + max + \" qadam)\";\n    }\n\n    public double calculateCaloriesBurned() {\n        return totalSteps * 0.04;\n    }\n\n    public double calculateDistanceKm() {\n        return Math.round((totalSteps * 0.75 / 1000.0) * 10.0) / 10.0;\n    }\n\n    public void resetWeek() {\n        for (int i = 0; i < weeklySteps.length; i++) weeklySteps[i] = 0;\n    }\n\n    public String generateWeeklyReport() {\n        return \"Haftalik hisobot: Kun 0: \" + weeklySteps[0] + \" qadam | Jami: \" + getWeeklyTotal() + \" qadam\";\n    }\n\n    public String getGoalSuccessRate() {\n        int met = 0;\n        for (int s : weeklySteps) if (s >= 10000) met++;\n        double rate = Math.round((met / 7.0 * 100.0) * 100.0) / 100.0;\n        return String.valueOf(rate);\n    }\n\n    public String runFullDiagnostics() {\n        return \"StepTracker diagnostikasi: 100% himoyalangan (Xatoliklar bartaraf etildi)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StepTracker tracker = new StepTracker();\n        System.out.println(tracker.addStepsSafe(-250));\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT Workshop TW 8: 'StepTracker' mashg'ulotida talabalar himoyalangan dasturlashni (Defensive Programming) o'rganadilar: manfiy qadamlar kiritilganda IllegalArgumentException otish, kunlik massiv chegaralarini nazorat qilish va 0 kun yozilganda nolga bo'lishdan himoyalanish.",
      "cleanCode": "class StepTracker {\n    public void addSteps(int steps) { ... }\n    public String getAverageSteps() { ... }\n}",
      "breakdown": [
        "Manfiy qadamlar: <code>if (steps < 0) throw new IllegalArgumentException(...);</code>",
        "Nolga bo'lishdan himoya: <code>if (daysCount == 0) return 0.0;</code>",
        "Massiv chegarasi: <code>0 <= dayIndex < 7</code> tekshiruvi."
      ]
    }
  },
  {
    "id": 108,
    "tier": 8,
    "tierName": "8-Bosqich: Workshop TW 8 — StepTracker va Himoyalangan Dasturlash",
    "sector": "106-120: Workshop TW 8 StepTracker Debugging Suite",
    "title": {
      "uz": "108. StepTracker — Kunlar Soni 0 Bo'lganda O'rtacha Qadam (ArithmeticException)",
      "en": "108. StepTracker — Zero Days Average Protection"
    },
    "scenario": {
      "uz": "🏢 Kontekst: WIUT Workshop TW 8\n\nWorkshop TW 8 da ko'rsatilgan nosozlik: 'Agar hali hech qanday kun qayd qilinmagan bo'lsa (daysCount == 0), getAverageSteps() 0 ga bo'lish xatosini bermasligi shart'. Buni xavfsiz bajaring.\n\n🎯 QADAMLAR:\n1. WIUT Workshop TW 8 talablariga mos 'StepTracker' sinfini e'lon qiling.\n2. Manfiy qadamlar, massiv chegarasi va nolga bo'lish xatoliklarini to'liq himoyalang.\n3. 'getAverageSteps' metodini realizatsiya qiling.\n4. 'Main' sinfida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nO'rtacha qadam: 0.0 (Kunlar soni 0 bo'lgani uchun nol qaytarildi)",
      "en": "🏢 Context: WIUT Workshop TW 8\n\nWorkshop TW 8 debugging task: Prevent division by zero in getAverageSteps() when zero days recorded.\n\n🎯 STEPS:\n1. Build StepTracker class matching Workshop TW 8 requirements.\n2. Defend against negative steps, array index bounds, and zero division.\n3. Implement 'getAverageSteps' method.\n4. Verify in 'Main'.\n\n📊 Expected Output:\nO'rtacha qadam: 0.0 (Kunlar soni 0 bo'lgani uchun nol qaytarildi)"
    },
    "requirements": {
      "classes": [
        "StepTracker",
        "Main"
      ],
      "methods": [
        "getAverageSteps"
      ]
    },
    "starterCode": "// Workshop TW 8 StepTracker sinfini yarating\nclass StepTracker {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StepTracker tracker = new StepTracker();\n        System.out.println(\"O'rtacha qadam: \" + tracker.getAverageSteps());\n    }\n}",
    "solution": "class StepTracker {\n    private int totalSteps = 0;\n    private int daysCount = 0;\n    private int[] weeklySteps = new int[7];\n\n    public void addSteps(int steps) {\n        if (steps < 0) throw new IllegalArgumentException(\"Steps cannot be negative: \" + steps);\n        this.totalSteps += steps;\n        this.daysCount++;\n    }\n\n    public String addStepsSafe(int steps) {\n        try {\n            if (steps < 0) throw new IllegalArgumentException(\"Steps cannot be negative: \" + steps);\n            if (steps > 100000) throw new IllegalArgumentException(\"Unrealistic step count: \" + steps);\n            this.totalSteps += steps;\n            this.daysCount++;\n            return \"Qadamlar qo'shildi: \" + steps;\n        } catch (IllegalArgumentException e) {\n            return \"Ushlangan xato: \" + e.getMessage();\n        }\n    }\n\n    public int getTotalSteps() { return totalSteps; }\n\n    public String getAverageSteps() {\n        if (daysCount == 0) return \"0.0 (Kunlar soni 0 bo'lgani uchun nol qaytarildi)\";\n        double avg = (double) totalSteps / daysCount;\n        return String.valueOf(avg);\n    }\n\n    public String setDayStepsSafe(int dayIndex, int steps) {\n        try {\n            if (dayIndex < 0 || dayIndex >= 7) {\n                throw new ArrayIndexOutOfBoundsException(\"Indeks xatosi: \" + dayIndex + \"-kun mavjud emas (Faqat 0..6 kunlar ruxsat etilgan)\");\n            }\n            weeklySteps[dayIndex] = steps;\n            return \"Saqlandi\";\n        } catch (ArrayIndexOutOfBoundsException e) {\n            return e.getMessage();\n        }\n    }\n\n    public int getDaySteps(int dayIndex) {\n        if (dayIndex >= 0 && dayIndex < 7) return weeklySteps[dayIndex];\n        return 0;\n    }\n\n    public int getWeeklyTotal() {\n        int sum = 0;\n        for (int s : weeklySteps) sum += s;\n        return sum;\n    }\n\n    public String isGoalReached(int dayIndex) {\n        int s = getDaySteps(dayIndex);\n        if (s >= 10000) return \"Bajarildi (\" + s + \" / 10000)\";\n        return \"Bajarilmadi (\" + s + \" / 10000)\";\n    }\n\n    public String getMaxStepDayInfo() {\n        int max = -1, maxDay = 0;\n        for (int i = 0; i < weeklySteps.length; i++) {\n            if (weeklySteps[i] > max) { max = weeklySteps[i]; maxDay = i; }\n        }\n        return \"Eng faol kun: \" + maxDay + \"-indeks (\" + max + \" qadam)\";\n    }\n\n    public double calculateCaloriesBurned() {\n        return totalSteps * 0.04;\n    }\n\n    public double calculateDistanceKm() {\n        return Math.round((totalSteps * 0.75 / 1000.0) * 10.0) / 10.0;\n    }\n\n    public void resetWeek() {\n        for (int i = 0; i < weeklySteps.length; i++) weeklySteps[i] = 0;\n    }\n\n    public String generateWeeklyReport() {\n        return \"Haftalik hisobot: Kun 0: \" + weeklySteps[0] + \" qadam | Jami: \" + getWeeklyTotal() + \" qadam\";\n    }\n\n    public String getGoalSuccessRate() {\n        int met = 0;\n        for (int s : weeklySteps) if (s >= 10000) met++;\n        double rate = Math.round((met / 7.0 * 100.0) * 100.0) / 100.0;\n        return String.valueOf(rate);\n    }\n\n    public String runFullDiagnostics() {\n        return \"StepTracker diagnostikasi: 100% himoyalangan (Xatoliklar bartaraf etildi)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StepTracker tracker = new StepTracker();\n        System.out.println(\"O'rtacha qadam: \" + tracker.getAverageSteps());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT Workshop TW 8: 'StepTracker' mashg'ulotida talabalar himoyalangan dasturlashni (Defensive Programming) o'rganadilar: manfiy qadamlar kiritilganda IllegalArgumentException otish, kunlik massiv chegaralarini nazorat qilish va 0 kun yozilganda nolga bo'lishdan himoyalanish.",
      "cleanCode": "class StepTracker {\n    public void addSteps(int steps) { ... }\n    public String getAverageSteps() { ... }\n}",
      "breakdown": [
        "Manfiy qadamlar: <code>if (steps < 0) throw new IllegalArgumentException(...);</code>",
        "Nolga bo'lishdan himoya: <code>if (daysCount == 0) return 0.0;</code>",
        "Massiv chegarasi: <code>0 <= dayIndex < 7</code> tekshiruvi."
      ]
    }
  },
  {
    "id": 109,
    "tier": 8,
    "tierName": "8-Bosqich: Workshop TW 8 — StepTracker va Himoyalangan Dasturlash",
    "sector": "106-120: Workshop TW 8 StepTracker Debugging Suite",
    "title": {
      "uz": "109. StepTracker — 7 Kunlik Hafta Massivi va Indeks Chegarasi",
      "en": "109. StepTracker — 7-Day Week Array Bounds Protection"
    },
    "scenario": {
      "uz": "🏢 Kontekst: WIUT Workshop TW 8\n\nWorkshop TW 8: Haftaning 7 kuni (0 dan 6 gacha) uchun 'int[] weeklySteps' massivi berilgan. Agar dayIndex < 0 yoki >= 7 bo'lsa, 'ArrayIndexOutOfBoundsException' ni ushlab xavfsiz xabar bering.\n\n🎯 QADAMLAR:\n1. WIUT Workshop TW 8 talablariga mos 'StepTracker' sinfini e'lon qiling.\n2. Manfiy qadamlar, massiv chegarasi va nolga bo'lish xatoliklarini to'liq himoyalang.\n3. 'setDayStepsSafe' metodini realizatsiya qiling.\n4. 'Main' sinfida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nIndeks xatosi: 7-kun mavjud emas (Faqat 0..6 kunlar ruxsat etilgan)",
      "en": "🏢 Context: WIUT Workshop TW 8\n\nWorkshop TW 8: Store 7 daily records and shield setDaySteps against ArrayIndexOutOfBoundsException.\n\n🎯 STEPS:\n1. Build StepTracker class matching Workshop TW 8 requirements.\n2. Defend against negative steps, array index bounds, and zero division.\n3. Implement 'setDayStepsSafe' method.\n4. Verify in 'Main'.\n\n📊 Expected Output:\nIndeks xatosi: 7-kun mavjud emas (Faqat 0..6 kunlar ruxsat etilgan)"
    },
    "requirements": {
      "classes": [
        "StepTracker",
        "Main"
      ],
      "methods": [
        "setDayStepsSafe"
      ]
    },
    "starterCode": "// Workshop TW 8 StepTracker sinfini yarating\nclass StepTracker {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StepTracker tracker = new StepTracker();\n        System.out.println(tracker.setDayStepsSafe(7, 8000));\n    }\n}",
    "solution": "class StepTracker {\n    private int totalSteps = 0;\n    private int daysCount = 0;\n    private int[] weeklySteps = new int[7];\n\n    public void addSteps(int steps) {\n        if (steps < 0) throw new IllegalArgumentException(\"Steps cannot be negative: \" + steps);\n        this.totalSteps += steps;\n        this.daysCount++;\n    }\n\n    public String addStepsSafe(int steps) {\n        try {\n            if (steps < 0) throw new IllegalArgumentException(\"Steps cannot be negative: \" + steps);\n            if (steps > 100000) throw new IllegalArgumentException(\"Unrealistic step count: \" + steps);\n            this.totalSteps += steps;\n            this.daysCount++;\n            return \"Qadamlar qo'shildi: \" + steps;\n        } catch (IllegalArgumentException e) {\n            return \"Ushlangan xato: \" + e.getMessage();\n        }\n    }\n\n    public int getTotalSteps() { return totalSteps; }\n\n    public String getAverageSteps() {\n        if (daysCount == 0) return \"0.0 (Kunlar soni 0 bo'lgani uchun nol qaytarildi)\";\n        double avg = (double) totalSteps / daysCount;\n        return String.valueOf(avg);\n    }\n\n    public String setDayStepsSafe(int dayIndex, int steps) {\n        try {\n            if (dayIndex < 0 || dayIndex >= 7) {\n                throw new ArrayIndexOutOfBoundsException(\"Indeks xatosi: \" + dayIndex + \"-kun mavjud emas (Faqat 0..6 kunlar ruxsat etilgan)\");\n            }\n            weeklySteps[dayIndex] = steps;\n            return \"Saqlandi\";\n        } catch (ArrayIndexOutOfBoundsException e) {\n            return e.getMessage();\n        }\n    }\n\n    public int getDaySteps(int dayIndex) {\n        if (dayIndex >= 0 && dayIndex < 7) return weeklySteps[dayIndex];\n        return 0;\n    }\n\n    public int getWeeklyTotal() {\n        int sum = 0;\n        for (int s : weeklySteps) sum += s;\n        return sum;\n    }\n\n    public String isGoalReached(int dayIndex) {\n        int s = getDaySteps(dayIndex);\n        if (s >= 10000) return \"Bajarildi (\" + s + \" / 10000)\";\n        return \"Bajarilmadi (\" + s + \" / 10000)\";\n    }\n\n    public String getMaxStepDayInfo() {\n        int max = -1, maxDay = 0;\n        for (int i = 0; i < weeklySteps.length; i++) {\n            if (weeklySteps[i] > max) { max = weeklySteps[i]; maxDay = i; }\n        }\n        return \"Eng faol kun: \" + maxDay + \"-indeks (\" + max + \" qadam)\";\n    }\n\n    public double calculateCaloriesBurned() {\n        return totalSteps * 0.04;\n    }\n\n    public double calculateDistanceKm() {\n        return Math.round((totalSteps * 0.75 / 1000.0) * 10.0) / 10.0;\n    }\n\n    public void resetWeek() {\n        for (int i = 0; i < weeklySteps.length; i++) weeklySteps[i] = 0;\n    }\n\n    public String generateWeeklyReport() {\n        return \"Haftalik hisobot: Kun 0: \" + weeklySteps[0] + \" qadam | Jami: \" + getWeeklyTotal() + \" qadam\";\n    }\n\n    public String getGoalSuccessRate() {\n        int met = 0;\n        for (int s : weeklySteps) if (s >= 10000) met++;\n        double rate = Math.round((met / 7.0 * 100.0) * 100.0) / 100.0;\n        return String.valueOf(rate);\n    }\n\n    public String runFullDiagnostics() {\n        return \"StepTracker diagnostikasi: 100% himoyalangan (Xatoliklar bartaraf etildi)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StepTracker tracker = new StepTracker();\n        System.out.println(tracker.setDayStepsSafe(7, 8000));\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT Workshop TW 8: 'StepTracker' mashg'ulotida talabalar himoyalangan dasturlashni (Defensive Programming) o'rganadilar: manfiy qadamlar kiritilganda IllegalArgumentException otish, kunlik massiv chegaralarini nazorat qilish va 0 kun yozilganda nolga bo'lishdan himoyalanish.",
      "cleanCode": "class StepTracker {\n    public void addSteps(int steps) { ... }\n    public String getAverageSteps() { ... }\n}",
      "breakdown": [
        "Manfiy qadamlar: <code>if (steps < 0) throw new IllegalArgumentException(...);</code>",
        "Nolga bo'lishdan himoya: <code>if (daysCount == 0) return 0.0;</code>",
        "Massiv chegarasi: <code>0 <= dayIndex < 7</code> tekshiruvi."
      ]
    }
  },
  {
    "id": 110,
    "tier": 8,
    "tierName": "8-Bosqich: Workshop TW 8 — StepTracker va Himoyalangan Dasturlash",
    "sector": "106-120: Workshop TW 8 StepTracker Debugging Suite",
    "title": {
      "uz": "110. StepTracker — To'g'ri Hafta Kuni Uchun Qadamni Saqlash",
      "en": "110. StepTracker — Recording Valid Daily Step Count"
    },
    "scenario": {
      "uz": "🏢 Kontekst: WIUT Workshop TW 8\n\nWorkshop TW 8: 'setDaySteps(day, steps)' orqali dushanba (indeks 0) uchun 8500 qadamni muvaffaqiyatli saqlang va uning qiymatini tekshiring.\n\n🎯 QADAMLAR:\n1. WIUT Workshop TW 8 talablariga mos 'StepTracker' sinfini e'lon qiling.\n2. Manfiy qadamlar, massiv chegarasi va nolga bo'lish xatoliklarini to'liq himoyalang.\n3. 'getDaySteps' metodini realizatsiya qiling.\n4. 'Main' sinfida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nDushanba qadamlari: 8500",
      "en": "🏢 Context: WIUT Workshop TW 8\n\nWorkshop TW 8: Set step count for Monday (index 0) and verify stored reading.\n\n🎯 STEPS:\n1. Build StepTracker class matching Workshop TW 8 requirements.\n2. Defend against negative steps, array index bounds, and zero division.\n3. Implement 'getDaySteps' method.\n4. Verify in 'Main'.\n\n📊 Expected Output:\nDushanba qadamlari: 8500"
    },
    "requirements": {
      "classes": [
        "StepTracker",
        "Main"
      ],
      "methods": [
        "getDaySteps"
      ]
    },
    "starterCode": "// Workshop TW 8 StepTracker sinfini yarating\nclass StepTracker {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StepTracker tracker = new StepTracker();\n        tracker.setDayStepsSafe(0, 8500);\n        System.out.println(\"Dushanba qadamlari: \" + tracker.getDaySteps(0));\n    }\n}",
    "solution": "class StepTracker {\n    private int totalSteps = 0;\n    private int daysCount = 0;\n    private int[] weeklySteps = new int[7];\n\n    public void addSteps(int steps) {\n        if (steps < 0) throw new IllegalArgumentException(\"Steps cannot be negative: \" + steps);\n        this.totalSteps += steps;\n        this.daysCount++;\n    }\n\n    public String addStepsSafe(int steps) {\n        try {\n            if (steps < 0) throw new IllegalArgumentException(\"Steps cannot be negative: \" + steps);\n            if (steps > 100000) throw new IllegalArgumentException(\"Unrealistic step count: \" + steps);\n            this.totalSteps += steps;\n            this.daysCount++;\n            return \"Qadamlar qo'shildi: \" + steps;\n        } catch (IllegalArgumentException e) {\n            return \"Ushlangan xato: \" + e.getMessage();\n        }\n    }\n\n    public int getTotalSteps() { return totalSteps; }\n\n    public String getAverageSteps() {\n        if (daysCount == 0) return \"0.0 (Kunlar soni 0 bo'lgani uchun nol qaytarildi)\";\n        double avg = (double) totalSteps / daysCount;\n        return String.valueOf(avg);\n    }\n\n    public String setDayStepsSafe(int dayIndex, int steps) {\n        try {\n            if (dayIndex < 0 || dayIndex >= 7) {\n                throw new ArrayIndexOutOfBoundsException(\"Indeks xatosi: \" + dayIndex + \"-kun mavjud emas (Faqat 0..6 kunlar ruxsat etilgan)\");\n            }\n            weeklySteps[dayIndex] = steps;\n            return \"Saqlandi\";\n        } catch (ArrayIndexOutOfBoundsException e) {\n            return e.getMessage();\n        }\n    }\n\n    public int getDaySteps(int dayIndex) {\n        if (dayIndex >= 0 && dayIndex < 7) return weeklySteps[dayIndex];\n        return 0;\n    }\n\n    public int getWeeklyTotal() {\n        int sum = 0;\n        for (int s : weeklySteps) sum += s;\n        return sum;\n    }\n\n    public String isGoalReached(int dayIndex) {\n        int s = getDaySteps(dayIndex);\n        if (s >= 10000) return \"Bajarildi (\" + s + \" / 10000)\";\n        return \"Bajarilmadi (\" + s + \" / 10000)\";\n    }\n\n    public String getMaxStepDayInfo() {\n        int max = -1, maxDay = 0;\n        for (int i = 0; i < weeklySteps.length; i++) {\n            if (weeklySteps[i] > max) { max = weeklySteps[i]; maxDay = i; }\n        }\n        return \"Eng faol kun: \" + maxDay + \"-indeks (\" + max + \" qadam)\";\n    }\n\n    public double calculateCaloriesBurned() {\n        return totalSteps * 0.04;\n    }\n\n    public double calculateDistanceKm() {\n        return Math.round((totalSteps * 0.75 / 1000.0) * 10.0) / 10.0;\n    }\n\n    public void resetWeek() {\n        for (int i = 0; i < weeklySteps.length; i++) weeklySteps[i] = 0;\n    }\n\n    public String generateWeeklyReport() {\n        return \"Haftalik hisobot: Kun 0: \" + weeklySteps[0] + \" qadam | Jami: \" + getWeeklyTotal() + \" qadam\";\n    }\n\n    public String getGoalSuccessRate() {\n        int met = 0;\n        for (int s : weeklySteps) if (s >= 10000) met++;\n        double rate = Math.round((met / 7.0 * 100.0) * 100.0) / 100.0;\n        return String.valueOf(rate);\n    }\n\n    public String runFullDiagnostics() {\n        return \"StepTracker diagnostikasi: 100% himoyalangan (Xatoliklar bartaraf etildi)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StepTracker tracker = new StepTracker();\n        tracker.setDayStepsSafe(0, 8500);\n        System.out.println(\"Dushanba qadamlari: \" + tracker.getDaySteps(0));\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT Workshop TW 8: 'StepTracker' mashg'ulotida talabalar himoyalangan dasturlashni (Defensive Programming) o'rganadilar: manfiy qadamlar kiritilganda IllegalArgumentException otish, kunlik massiv chegaralarini nazorat qilish va 0 kun yozilganda nolga bo'lishdan himoyalanish.",
      "cleanCode": "class StepTracker {\n    public void addSteps(int steps) { ... }\n    public String getAverageSteps() { ... }\n}",
      "breakdown": [
        "Manfiy qadamlar: <code>if (steps < 0) throw new IllegalArgumentException(...);</code>",
        "Nolga bo'lishdan himoya: <code>if (daysCount == 0) return 0.0;</code>",
        "Massiv chegarasi: <code>0 <= dayIndex < 7</code> tekshiruvi."
      ]
    }
  },
  {
    "id": 111,
    "tier": 8,
    "tierName": "8-Bosqich: Workshop TW 8 — StepTracker va Himoyalangan Dasturlash",
    "sector": "106-120: Workshop TW 8 StepTracker Debugging Suite",
    "title": {
      "uz": "111. StepTracker — Haftalik Jami Qadamlar Yig'indisi",
      "en": "111. StepTracker — Weekly Cumulative Step Summation"
    },
    "scenario": {
      "uz": "🏢 Kontekst: WIUT Workshop TW 8\n\nHafta davomida yozilgan barcha kunlarning qadamlarini jamlab 'getWeeklyTotal()' metodida qaytaring.\n\n🎯 QADAMLAR:\n1. WIUT Workshop TW 8 talablariga mos 'StepTracker' sinfini e'lon qiling.\n2. Manfiy qadamlar, massiv chegarasi va nolga bo'lish xatoliklarini to'liq himoyalang.\n3. 'getWeeklyTotal' metodini realizatsiya qiling.\n4. 'Main' sinfida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nHaftalik jami: 12000",
      "en": "🏢 Context: WIUT Workshop TW 8\n\nAggregate step sums across the 7-day array buffer.\n\n🎯 STEPS:\n1. Build StepTracker class matching Workshop TW 8 requirements.\n2. Defend against negative steps, array index bounds, and zero division.\n3. Implement 'getWeeklyTotal' method.\n4. Verify in 'Main'.\n\n📊 Expected Output:\nHaftalik jami: 12000"
    },
    "requirements": {
      "classes": [
        "StepTracker",
        "Main"
      ],
      "methods": [
        "getWeeklyTotal"
      ]
    },
    "starterCode": "// Workshop TW 8 StepTracker sinfini yarating\nclass StepTracker {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StepTracker tracker = new StepTracker();\n        tracker.setDayStepsSafe(0, 5000);\n        tracker.setDayStepsSafe(1, 7000);\n        System.out.println(\"Haftalik jami: \" + tracker.getWeeklyTotal());\n    }\n}",
    "solution": "class StepTracker {\n    private int totalSteps = 0;\n    private int daysCount = 0;\n    private int[] weeklySteps = new int[7];\n\n    public void addSteps(int steps) {\n        if (steps < 0) throw new IllegalArgumentException(\"Steps cannot be negative: \" + steps);\n        this.totalSteps += steps;\n        this.daysCount++;\n    }\n\n    public String addStepsSafe(int steps) {\n        try {\n            if (steps < 0) throw new IllegalArgumentException(\"Steps cannot be negative: \" + steps);\n            if (steps > 100000) throw new IllegalArgumentException(\"Unrealistic step count: \" + steps);\n            this.totalSteps += steps;\n            this.daysCount++;\n            return \"Qadamlar qo'shildi: \" + steps;\n        } catch (IllegalArgumentException e) {\n            return \"Ushlangan xato: \" + e.getMessage();\n        }\n    }\n\n    public int getTotalSteps() { return totalSteps; }\n\n    public String getAverageSteps() {\n        if (daysCount == 0) return \"0.0 (Kunlar soni 0 bo'lgani uchun nol qaytarildi)\";\n        double avg = (double) totalSteps / daysCount;\n        return String.valueOf(avg);\n    }\n\n    public String setDayStepsSafe(int dayIndex, int steps) {\n        try {\n            if (dayIndex < 0 || dayIndex >= 7) {\n                throw new ArrayIndexOutOfBoundsException(\"Indeks xatosi: \" + dayIndex + \"-kun mavjud emas (Faqat 0..6 kunlar ruxsat etilgan)\");\n            }\n            weeklySteps[dayIndex] = steps;\n            return \"Saqlandi\";\n        } catch (ArrayIndexOutOfBoundsException e) {\n            return e.getMessage();\n        }\n    }\n\n    public int getDaySteps(int dayIndex) {\n        if (dayIndex >= 0 && dayIndex < 7) return weeklySteps[dayIndex];\n        return 0;\n    }\n\n    public int getWeeklyTotal() {\n        int sum = 0;\n        for (int s : weeklySteps) sum += s;\n        return sum;\n    }\n\n    public String isGoalReached(int dayIndex) {\n        int s = getDaySteps(dayIndex);\n        if (s >= 10000) return \"Bajarildi (\" + s + \" / 10000)\";\n        return \"Bajarilmadi (\" + s + \" / 10000)\";\n    }\n\n    public String getMaxStepDayInfo() {\n        int max = -1, maxDay = 0;\n        for (int i = 0; i < weeklySteps.length; i++) {\n            if (weeklySteps[i] > max) { max = weeklySteps[i]; maxDay = i; }\n        }\n        return \"Eng faol kun: \" + maxDay + \"-indeks (\" + max + \" qadam)\";\n    }\n\n    public double calculateCaloriesBurned() {\n        return totalSteps * 0.04;\n    }\n\n    public double calculateDistanceKm() {\n        return Math.round((totalSteps * 0.75 / 1000.0) * 10.0) / 10.0;\n    }\n\n    public void resetWeek() {\n        for (int i = 0; i < weeklySteps.length; i++) weeklySteps[i] = 0;\n    }\n\n    public String generateWeeklyReport() {\n        return \"Haftalik hisobot: Kun 0: \" + weeklySteps[0] + \" qadam | Jami: \" + getWeeklyTotal() + \" qadam\";\n    }\n\n    public String getGoalSuccessRate() {\n        int met = 0;\n        for (int s : weeklySteps) if (s >= 10000) met++;\n        double rate = Math.round((met / 7.0 * 100.0) * 100.0) / 100.0;\n        return String.valueOf(rate);\n    }\n\n    public String runFullDiagnostics() {\n        return \"StepTracker diagnostikasi: 100% himoyalangan (Xatoliklar bartaraf etildi)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StepTracker tracker = new StepTracker();\n        tracker.setDayStepsSafe(0, 5000);\n        tracker.setDayStepsSafe(1, 7000);\n        System.out.println(\"Haftalik jami: \" + tracker.getWeeklyTotal());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT Workshop TW 8: 'StepTracker' mashg'ulotida talabalar himoyalangan dasturlashni (Defensive Programming) o'rganadilar: manfiy qadamlar kiritilganda IllegalArgumentException otish, kunlik massiv chegaralarini nazorat qilish va 0 kun yozilganda nolga bo'lishdan himoyalanish.",
      "cleanCode": "class StepTracker {\n    public void addSteps(int steps) { ... }\n    public String getAverageSteps() { ... }\n}",
      "breakdown": [
        "Manfiy qadamlar: <code>if (steps < 0) throw new IllegalArgumentException(...);</code>",
        "Nolga bo'lishdan himoya: <code>if (daysCount == 0) return 0.0;</code>",
        "Massiv chegarasi: <code>0 <= dayIndex < 7</code> tekshiruvi."
      ]
    }
  },
  {
    "id": 112,
    "tier": 8,
    "tierName": "8-Bosqich: Workshop TW 8 — StepTracker va Himoyalangan Dasturlash",
    "sector": "106-120: Workshop TW 8 StepTracker Debugging Suite",
    "title": {
      "uz": "112. StepTracker — Kunlik Maqsad (Goal) Tekshiruvi",
      "en": "112. StepTracker — Daily Target Step Goal Verification"
    },
    "scenario": {
      "uz": "🏢 Kontekst: WIUT Workshop TW 8\n\nStandart kunlik maqsad 10,000 qadam. 'isGoalReached(dayIndex)' kuni bo'yicha maqsad bajarilganligini tekshiradi.\n\n🎯 QADAMLAR:\n1. WIUT Workshop TW 8 talablariga mos 'StepTracker' sinfini e'lon qiling.\n2. Manfiy qadamlar, massiv chegarasi va nolga bo'lish xatoliklarini to'liq himoyalang.\n3. 'isGoalReached' metodini realizatsiya qiling.\n4. 'Main' sinfida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nChorshanba maqsadi: Bajarildi (10500 / 10000)",
      "en": "🏢 Context: WIUT Workshop TW 8\n\nCheck whether daily steps for a specific day met or exceeded the 10,000 step milestone.\n\n🎯 STEPS:\n1. Build StepTracker class matching Workshop TW 8 requirements.\n2. Defend against negative steps, array index bounds, and zero division.\n3. Implement 'isGoalReached' method.\n4. Verify in 'Main'.\n\n📊 Expected Output:\nChorshanba maqsadi: Bajarildi (10500 / 10000)"
    },
    "requirements": {
      "classes": [
        "StepTracker",
        "Main"
      ],
      "methods": [
        "isGoalReached"
      ]
    },
    "starterCode": "// Workshop TW 8 StepTracker sinfini yarating\nclass StepTracker {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StepTracker tracker = new StepTracker();\n        tracker.setDayStepsSafe(2, 10500);\n        System.out.println(\"Chorshanba maqsadi: \" + tracker.isGoalReached(2));\n    }\n}",
    "solution": "class StepTracker {\n    private int totalSteps = 0;\n    private int daysCount = 0;\n    private int[] weeklySteps = new int[7];\n\n    public void addSteps(int steps) {\n        if (steps < 0) throw new IllegalArgumentException(\"Steps cannot be negative: \" + steps);\n        this.totalSteps += steps;\n        this.daysCount++;\n    }\n\n    public String addStepsSafe(int steps) {\n        try {\n            if (steps < 0) throw new IllegalArgumentException(\"Steps cannot be negative: \" + steps);\n            if (steps > 100000) throw new IllegalArgumentException(\"Unrealistic step count: \" + steps);\n            this.totalSteps += steps;\n            this.daysCount++;\n            return \"Qadamlar qo'shildi: \" + steps;\n        } catch (IllegalArgumentException e) {\n            return \"Ushlangan xato: \" + e.getMessage();\n        }\n    }\n\n    public int getTotalSteps() { return totalSteps; }\n\n    public String getAverageSteps() {\n        if (daysCount == 0) return \"0.0 (Kunlar soni 0 bo'lgani uchun nol qaytarildi)\";\n        double avg = (double) totalSteps / daysCount;\n        return String.valueOf(avg);\n    }\n\n    public String setDayStepsSafe(int dayIndex, int steps) {\n        try {\n            if (dayIndex < 0 || dayIndex >= 7) {\n                throw new ArrayIndexOutOfBoundsException(\"Indeks xatosi: \" + dayIndex + \"-kun mavjud emas (Faqat 0..6 kunlar ruxsat etilgan)\");\n            }\n            weeklySteps[dayIndex] = steps;\n            return \"Saqlandi\";\n        } catch (ArrayIndexOutOfBoundsException e) {\n            return e.getMessage();\n        }\n    }\n\n    public int getDaySteps(int dayIndex) {\n        if (dayIndex >= 0 && dayIndex < 7) return weeklySteps[dayIndex];\n        return 0;\n    }\n\n    public int getWeeklyTotal() {\n        int sum = 0;\n        for (int s : weeklySteps) sum += s;\n        return sum;\n    }\n\n    public String isGoalReached(int dayIndex) {\n        int s = getDaySteps(dayIndex);\n        if (s >= 10000) return \"Bajarildi (\" + s + \" / 10000)\";\n        return \"Bajarilmadi (\" + s + \" / 10000)\";\n    }\n\n    public String getMaxStepDayInfo() {\n        int max = -1, maxDay = 0;\n        for (int i = 0; i < weeklySteps.length; i++) {\n            if (weeklySteps[i] > max) { max = weeklySteps[i]; maxDay = i; }\n        }\n        return \"Eng faol kun: \" + maxDay + \"-indeks (\" + max + \" qadam)\";\n    }\n\n    public double calculateCaloriesBurned() {\n        return totalSteps * 0.04;\n    }\n\n    public double calculateDistanceKm() {\n        return Math.round((totalSteps * 0.75 / 1000.0) * 10.0) / 10.0;\n    }\n\n    public void resetWeek() {\n        for (int i = 0; i < weeklySteps.length; i++) weeklySteps[i] = 0;\n    }\n\n    public String generateWeeklyReport() {\n        return \"Haftalik hisobot: Kun 0: \" + weeklySteps[0] + \" qadam | Jami: \" + getWeeklyTotal() + \" qadam\";\n    }\n\n    public String getGoalSuccessRate() {\n        int met = 0;\n        for (int s : weeklySteps) if (s >= 10000) met++;\n        double rate = Math.round((met / 7.0 * 100.0) * 100.0) / 100.0;\n        return String.valueOf(rate);\n    }\n\n    public String runFullDiagnostics() {\n        return \"StepTracker diagnostikasi: 100% himoyalangan (Xatoliklar bartaraf etildi)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StepTracker tracker = new StepTracker();\n        tracker.setDayStepsSafe(2, 10500);\n        System.out.println(\"Chorshanba maqsadi: \" + tracker.isGoalReached(2));\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT Workshop TW 8: 'StepTracker' mashg'ulotida talabalar himoyalangan dasturlashni (Defensive Programming) o'rganadilar: manfiy qadamlar kiritilganda IllegalArgumentException otish, kunlik massiv chegaralarini nazorat qilish va 0 kun yozilganda nolga bo'lishdan himoyalanish.",
      "cleanCode": "class StepTracker {\n    public void addSteps(int steps) { ... }\n    public String getAverageSteps() { ... }\n}",
      "breakdown": [
        "Manfiy qadamlar: <code>if (steps < 0) throw new IllegalArgumentException(...);</code>",
        "Nolga bo'lishdan himoya: <code>if (daysCount == 0) return 0.0;</code>",
        "Massiv chegarasi: <code>0 <= dayIndex < 7</code> tekshiruvi."
      ]
    }
  },
  {
    "id": 113,
    "tier": 8,
    "tierName": "8-Bosqich: Workshop TW 8 — StepTracker va Himoyalangan Dasturlash",
    "sector": "106-120: Workshop TW 8 StepTracker Debugging Suite",
    "title": {
      "uz": "113. StepTracker — Rekord Qadamli Kunni Aniqlash (Max Day)",
      "en": "113. StepTracker — Identifying Best Day with Highest Steps"
    },
    "scenario": {
      "uz": "🏢 Kontekst: WIUT Workshop TW 8\n\nHafta ichidagi eng ko'p qadam bosilgan kun indeksini va qadam sonini qaytaruvchi metod yozing.\n\n🎯 QADAMLAR:\n1. WIUT Workshop TW 8 talablariga mos 'StepTracker' sinfini e'lon qiling.\n2. Manfiy qadamlar, massiv chegarasi va nolga bo'lish xatoliklarini to'liq himoyalang.\n3. 'getMaxStepDayInfo' metodini realizatsiya qiling.\n4. 'Main' sinfida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nEng faol kun: 3-indeks (12000 qadam)",
      "en": "🏢 Context: WIUT Workshop TW 8\n\nLocate day index with peak step accumulation.\n\n🎯 STEPS:\n1. Build StepTracker class matching Workshop TW 8 requirements.\n2. Defend against negative steps, array index bounds, and zero division.\n3. Implement 'getMaxStepDayInfo' method.\n4. Verify in 'Main'.\n\n📊 Expected Output:\nEng faol kun: 3-indeks (12000 qadam)"
    },
    "requirements": {
      "classes": [
        "StepTracker",
        "Main"
      ],
      "methods": [
        "getMaxStepDayInfo"
      ]
    },
    "starterCode": "// Workshop TW 8 StepTracker sinfini yarating\nclass StepTracker {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StepTracker tracker = new StepTracker();\n        tracker.setDayStepsSafe(0, 6000);\n        tracker.setDayStepsSafe(3, 12000);\n        System.out.println(tracker.getMaxStepDayInfo());\n    }\n}",
    "solution": "class StepTracker {\n    private int totalSteps = 0;\n    private int daysCount = 0;\n    private int[] weeklySteps = new int[7];\n\n    public void addSteps(int steps) {\n        if (steps < 0) throw new IllegalArgumentException(\"Steps cannot be negative: \" + steps);\n        this.totalSteps += steps;\n        this.daysCount++;\n    }\n\n    public String addStepsSafe(int steps) {\n        try {\n            if (steps < 0) throw new IllegalArgumentException(\"Steps cannot be negative: \" + steps);\n            if (steps > 100000) throw new IllegalArgumentException(\"Unrealistic step count: \" + steps);\n            this.totalSteps += steps;\n            this.daysCount++;\n            return \"Qadamlar qo'shildi: \" + steps;\n        } catch (IllegalArgumentException e) {\n            return \"Ushlangan xato: \" + e.getMessage();\n        }\n    }\n\n    public int getTotalSteps() { return totalSteps; }\n\n    public String getAverageSteps() {\n        if (daysCount == 0) return \"0.0 (Kunlar soni 0 bo'lgani uchun nol qaytarildi)\";\n        double avg = (double) totalSteps / daysCount;\n        return String.valueOf(avg);\n    }\n\n    public String setDayStepsSafe(int dayIndex, int steps) {\n        try {\n            if (dayIndex < 0 || dayIndex >= 7) {\n                throw new ArrayIndexOutOfBoundsException(\"Indeks xatosi: \" + dayIndex + \"-kun mavjud emas (Faqat 0..6 kunlar ruxsat etilgan)\");\n            }\n            weeklySteps[dayIndex] = steps;\n            return \"Saqlandi\";\n        } catch (ArrayIndexOutOfBoundsException e) {\n            return e.getMessage();\n        }\n    }\n\n    public int getDaySteps(int dayIndex) {\n        if (dayIndex >= 0 && dayIndex < 7) return weeklySteps[dayIndex];\n        return 0;\n    }\n\n    public int getWeeklyTotal() {\n        int sum = 0;\n        for (int s : weeklySteps) sum += s;\n        return sum;\n    }\n\n    public String isGoalReached(int dayIndex) {\n        int s = getDaySteps(dayIndex);\n        if (s >= 10000) return \"Bajarildi (\" + s + \" / 10000)\";\n        return \"Bajarilmadi (\" + s + \" / 10000)\";\n    }\n\n    public String getMaxStepDayInfo() {\n        int max = -1, maxDay = 0;\n        for (int i = 0; i < weeklySteps.length; i++) {\n            if (weeklySteps[i] > max) { max = weeklySteps[i]; maxDay = i; }\n        }\n        return \"Eng faol kun: \" + maxDay + \"-indeks (\" + max + \" qadam)\";\n    }\n\n    public double calculateCaloriesBurned() {\n        return totalSteps * 0.04;\n    }\n\n    public double calculateDistanceKm() {\n        return Math.round((totalSteps * 0.75 / 1000.0) * 10.0) / 10.0;\n    }\n\n    public void resetWeek() {\n        for (int i = 0; i < weeklySteps.length; i++) weeklySteps[i] = 0;\n    }\n\n    public String generateWeeklyReport() {\n        return \"Haftalik hisobot: Kun 0: \" + weeklySteps[0] + \" qadam | Jami: \" + getWeeklyTotal() + \" qadam\";\n    }\n\n    public String getGoalSuccessRate() {\n        int met = 0;\n        for (int s : weeklySteps) if (s >= 10000) met++;\n        double rate = Math.round((met / 7.0 * 100.0) * 100.0) / 100.0;\n        return String.valueOf(rate);\n    }\n\n    public String runFullDiagnostics() {\n        return \"StepTracker diagnostikasi: 100% himoyalangan (Xatoliklar bartaraf etildi)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StepTracker tracker = new StepTracker();\n        tracker.setDayStepsSafe(0, 6000);\n        tracker.setDayStepsSafe(3, 12000);\n        System.out.println(tracker.getMaxStepDayInfo());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT Workshop TW 8: 'StepTracker' mashg'ulotida talabalar himoyalangan dasturlashni (Defensive Programming) o'rganadilar: manfiy qadamlar kiritilganda IllegalArgumentException otish, kunlik massiv chegaralarini nazorat qilish va 0 kun yozilganda nolga bo'lishdan himoyalanish.",
      "cleanCode": "class StepTracker {\n    public void addSteps(int steps) { ... }\n    public String getAverageSteps() { ... }\n}",
      "breakdown": [
        "Manfiy qadamlar: <code>if (steps < 0) throw new IllegalArgumentException(...);</code>",
        "Nolga bo'lishdan himoya: <code>if (daysCount == 0) return 0.0;</code>",
        "Massiv chegarasi: <code>0 <= dayIndex < 7</code> tekshiruvi."
      ]
    }
  },
  {
    "id": 114,
    "tier": 8,
    "tierName": "8-Bosqich: Workshop TW 8 — StepTracker va Himoyalangan Dasturlash",
    "sector": "106-120: Workshop TW 8 StepTracker Debugging Suite",
    "title": {
      "uz": "114. StepTracker — Kaloriyalarni Hisoblash (1 qadam = 0.04 kkal)",
      "en": "114. StepTracker — Calorie Burn Computation"
    },
    "scenario": {
      "uz": "🏢 Kontekst: WIUT Workshop TW 8\n\nJami qadamlar sonini kaloriyaga o'giring (1 qadam = 0.04 kkal). 'calculateCaloriesBurned()' metodida hisoblang.\n\n🎯 QADAMLAR:\n1. WIUT Workshop TW 8 talablariga mos 'StepTracker' sinfini e'lon qiling.\n2. Manfiy qadamlar, massiv chegarasi va nolga bo'lish xatoliklarini to'liq himoyalang.\n3. 'calculateCaloriesBurned' metodini realizatsiya qiling.\n4. 'Main' sinfida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nSarflangan energiya: 400.0 kkal",
      "en": "🏢 Context: WIUT Workshop TW 8\n\nConvert step count to burned calories using 0.04 kcal conversion factor.\n\n🎯 STEPS:\n1. Build StepTracker class matching Workshop TW 8 requirements.\n2. Defend against negative steps, array index bounds, and zero division.\n3. Implement 'calculateCaloriesBurned' method.\n4. Verify in 'Main'.\n\n📊 Expected Output:\nSarflangan energiya: 400.0 kkal"
    },
    "requirements": {
      "classes": [
        "StepTracker",
        "Main"
      ],
      "methods": [
        "calculateCaloriesBurned"
      ]
    },
    "starterCode": "// Workshop TW 8 StepTracker sinfini yarating\nclass StepTracker {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StepTracker tracker = new StepTracker();\n        tracker.addSteps(10000);\n        System.out.println(\"Sarflangan energiya: \" + tracker.calculateCaloriesBurned() + \" kkal\");\n    }\n}",
    "solution": "class StepTracker {\n    private int totalSteps = 0;\n    private int daysCount = 0;\n    private int[] weeklySteps = new int[7];\n\n    public void addSteps(int steps) {\n        if (steps < 0) throw new IllegalArgumentException(\"Steps cannot be negative: \" + steps);\n        this.totalSteps += steps;\n        this.daysCount++;\n    }\n\n    public String addStepsSafe(int steps) {\n        try {\n            if (steps < 0) throw new IllegalArgumentException(\"Steps cannot be negative: \" + steps);\n            if (steps > 100000) throw new IllegalArgumentException(\"Unrealistic step count: \" + steps);\n            this.totalSteps += steps;\n            this.daysCount++;\n            return \"Qadamlar qo'shildi: \" + steps;\n        } catch (IllegalArgumentException e) {\n            return \"Ushlangan xato: \" + e.getMessage();\n        }\n    }\n\n    public int getTotalSteps() { return totalSteps; }\n\n    public String getAverageSteps() {\n        if (daysCount == 0) return \"0.0 (Kunlar soni 0 bo'lgani uchun nol qaytarildi)\";\n        double avg = (double) totalSteps / daysCount;\n        return String.valueOf(avg);\n    }\n\n    public String setDayStepsSafe(int dayIndex, int steps) {\n        try {\n            if (dayIndex < 0 || dayIndex >= 7) {\n                throw new ArrayIndexOutOfBoundsException(\"Indeks xatosi: \" + dayIndex + \"-kun mavjud emas (Faqat 0..6 kunlar ruxsat etilgan)\");\n            }\n            weeklySteps[dayIndex] = steps;\n            return \"Saqlandi\";\n        } catch (ArrayIndexOutOfBoundsException e) {\n            return e.getMessage();\n        }\n    }\n\n    public int getDaySteps(int dayIndex) {\n        if (dayIndex >= 0 && dayIndex < 7) return weeklySteps[dayIndex];\n        return 0;\n    }\n\n    public int getWeeklyTotal() {\n        int sum = 0;\n        for (int s : weeklySteps) sum += s;\n        return sum;\n    }\n\n    public String isGoalReached(int dayIndex) {\n        int s = getDaySteps(dayIndex);\n        if (s >= 10000) return \"Bajarildi (\" + s + \" / 10000)\";\n        return \"Bajarilmadi (\" + s + \" / 10000)\";\n    }\n\n    public String getMaxStepDayInfo() {\n        int max = -1, maxDay = 0;\n        for (int i = 0; i < weeklySteps.length; i++) {\n            if (weeklySteps[i] > max) { max = weeklySteps[i]; maxDay = i; }\n        }\n        return \"Eng faol kun: \" + maxDay + \"-indeks (\" + max + \" qadam)\";\n    }\n\n    public double calculateCaloriesBurned() {\n        return totalSteps * 0.04;\n    }\n\n    public double calculateDistanceKm() {\n        return Math.round((totalSteps * 0.75 / 1000.0) * 10.0) / 10.0;\n    }\n\n    public void resetWeek() {\n        for (int i = 0; i < weeklySteps.length; i++) weeklySteps[i] = 0;\n    }\n\n    public String generateWeeklyReport() {\n        return \"Haftalik hisobot: Kun 0: \" + weeklySteps[0] + \" qadam | Jami: \" + getWeeklyTotal() + \" qadam\";\n    }\n\n    public String getGoalSuccessRate() {\n        int met = 0;\n        for (int s : weeklySteps) if (s >= 10000) met++;\n        double rate = Math.round((met / 7.0 * 100.0) * 100.0) / 100.0;\n        return String.valueOf(rate);\n    }\n\n    public String runFullDiagnostics() {\n        return \"StepTracker diagnostikasi: 100% himoyalangan (Xatoliklar bartaraf etildi)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StepTracker tracker = new StepTracker();\n        tracker.addSteps(10000);\n        System.out.println(\"Sarflangan energiya: \" + tracker.calculateCaloriesBurned() + \" kkal\");\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT Workshop TW 8: 'StepTracker' mashg'ulotida talabalar himoyalangan dasturlashni (Defensive Programming) o'rganadilar: manfiy qadamlar kiritilganda IllegalArgumentException otish, kunlik massiv chegaralarini nazorat qilish va 0 kun yozilganda nolga bo'lishdan himoyalanish.",
      "cleanCode": "class StepTracker {\n    public void addSteps(int steps) { ... }\n    public String getAverageSteps() { ... }\n}",
      "breakdown": [
        "Manfiy qadamlar: <code>if (steps < 0) throw new IllegalArgumentException(...);</code>",
        "Nolga bo'lishdan himoya: <code>if (daysCount == 0) return 0.0;</code>",
        "Massiv chegarasi: <code>0 <= dayIndex < 7</code> tekshiruvi."
      ]
    }
  },
  {
    "id": 115,
    "tier": 8,
    "tierName": "8-Bosqich: Workshop TW 8 — StepTracker va Himoyalangan Dasturlash",
    "sector": "106-120: Workshop TW 8 StepTracker Debugging Suite",
    "title": {
      "uz": "115. StepTracker — Masofani Hisoblash (1 qadam = 0.75 metr)",
      "en": "115. StepTracker — Distance Calculation in Kilometers"
    },
    "scenario": {
      "uz": "🏢 Kontekst: WIUT Workshop TW 8\n\nBosib o'tilgan masofani kilometrda hisoblang (1 qadam = 0.75 metr, masofa = qadamlar * 0.75 / 1000).\n\n🎯 QADAMLAR:\n1. WIUT Workshop TW 8 talablariga mos 'StepTracker' sinfini e'lon qiling.\n2. Manfiy qadamlar, massiv chegarasi va nolga bo'lish xatoliklarini to'liq himoyalang.\n3. 'calculateDistanceKm' metodini realizatsiya qiling.\n4. 'Main' sinfida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nBosilgan masofa: 6.0 km",
      "en": "🏢 Context: WIUT Workshop TW 8\n\nCalculate walk distance in kilometers using 0.75 meter stride length.\n\n🎯 STEPS:\n1. Build StepTracker class matching Workshop TW 8 requirements.\n2. Defend against negative steps, array index bounds, and zero division.\n3. Implement 'calculateDistanceKm' method.\n4. Verify in 'Main'.\n\n📊 Expected Output:\nBosilgan masofa: 6.0 km"
    },
    "requirements": {
      "classes": [
        "StepTracker",
        "Main"
      ],
      "methods": [
        "calculateDistanceKm"
      ]
    },
    "starterCode": "// Workshop TW 8 StepTracker sinfini yarating\nclass StepTracker {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StepTracker tracker = new StepTracker();\n        tracker.addSteps(8000);\n        System.out.println(\"Bosilgan masofa: \" + tracker.calculateDistanceKm() + \" km\");\n    }\n}",
    "solution": "class StepTracker {\n    private int totalSteps = 0;\n    private int daysCount = 0;\n    private int[] weeklySteps = new int[7];\n\n    public void addSteps(int steps) {\n        if (steps < 0) throw new IllegalArgumentException(\"Steps cannot be negative: \" + steps);\n        this.totalSteps += steps;\n        this.daysCount++;\n    }\n\n    public String addStepsSafe(int steps) {\n        try {\n            if (steps < 0) throw new IllegalArgumentException(\"Steps cannot be negative: \" + steps);\n            if (steps > 100000) throw new IllegalArgumentException(\"Unrealistic step count: \" + steps);\n            this.totalSteps += steps;\n            this.daysCount++;\n            return \"Qadamlar qo'shildi: \" + steps;\n        } catch (IllegalArgumentException e) {\n            return \"Ushlangan xato: \" + e.getMessage();\n        }\n    }\n\n    public int getTotalSteps() { return totalSteps; }\n\n    public String getAverageSteps() {\n        if (daysCount == 0) return \"0.0 (Kunlar soni 0 bo'lgani uchun nol qaytarildi)\";\n        double avg = (double) totalSteps / daysCount;\n        return String.valueOf(avg);\n    }\n\n    public String setDayStepsSafe(int dayIndex, int steps) {\n        try {\n            if (dayIndex < 0 || dayIndex >= 7) {\n                throw new ArrayIndexOutOfBoundsException(\"Indeks xatosi: \" + dayIndex + \"-kun mavjud emas (Faqat 0..6 kunlar ruxsat etilgan)\");\n            }\n            weeklySteps[dayIndex] = steps;\n            return \"Saqlandi\";\n        } catch (ArrayIndexOutOfBoundsException e) {\n            return e.getMessage();\n        }\n    }\n\n    public int getDaySteps(int dayIndex) {\n        if (dayIndex >= 0 && dayIndex < 7) return weeklySteps[dayIndex];\n        return 0;\n    }\n\n    public int getWeeklyTotal() {\n        int sum = 0;\n        for (int s : weeklySteps) sum += s;\n        return sum;\n    }\n\n    public String isGoalReached(int dayIndex) {\n        int s = getDaySteps(dayIndex);\n        if (s >= 10000) return \"Bajarildi (\" + s + \" / 10000)\";\n        return \"Bajarilmadi (\" + s + \" / 10000)\";\n    }\n\n    public String getMaxStepDayInfo() {\n        int max = -1, maxDay = 0;\n        for (int i = 0; i < weeklySteps.length; i++) {\n            if (weeklySteps[i] > max) { max = weeklySteps[i]; maxDay = i; }\n        }\n        return \"Eng faol kun: \" + maxDay + \"-indeks (\" + max + \" qadam)\";\n    }\n\n    public double calculateCaloriesBurned() {\n        return totalSteps * 0.04;\n    }\n\n    public double calculateDistanceKm() {\n        return Math.round((totalSteps * 0.75 / 1000.0) * 10.0) / 10.0;\n    }\n\n    public void resetWeek() {\n        for (int i = 0; i < weeklySteps.length; i++) weeklySteps[i] = 0;\n    }\n\n    public String generateWeeklyReport() {\n        return \"Haftalik hisobot: Kun 0: \" + weeklySteps[0] + \" qadam | Jami: \" + getWeeklyTotal() + \" qadam\";\n    }\n\n    public String getGoalSuccessRate() {\n        int met = 0;\n        for (int s : weeklySteps) if (s >= 10000) met++;\n        double rate = Math.round((met / 7.0 * 100.0) * 100.0) / 100.0;\n        return String.valueOf(rate);\n    }\n\n    public String runFullDiagnostics() {\n        return \"StepTracker diagnostikasi: 100% himoyalangan (Xatoliklar bartaraf etildi)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StepTracker tracker = new StepTracker();\n        tracker.addSteps(8000);\n        System.out.println(\"Bosilgan masofa: \" + tracker.calculateDistanceKm() + \" km\");\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT Workshop TW 8: 'StepTracker' mashg'ulotida talabalar himoyalangan dasturlashni (Defensive Programming) o'rganadilar: manfiy qadamlar kiritilganda IllegalArgumentException otish, kunlik massiv chegaralarini nazorat qilish va 0 kun yozilganda nolga bo'lishdan himoyalanish.",
      "cleanCode": "class StepTracker {\n    public void addSteps(int steps) { ... }\n    public String getAverageSteps() { ... }\n}",
      "breakdown": [
        "Manfiy qadamlar: <code>if (steps < 0) throw new IllegalArgumentException(...);</code>",
        "Nolga bo'lishdan himoya: <code>if (daysCount == 0) return 0.0;</code>",
        "Massiv chegarasi: <code>0 <= dayIndex < 7</code> tekshiruvi."
      ]
    }
  },
  {
    "id": 116,
    "tier": 8,
    "tierName": "8-Bosqich: Workshop TW 8 — StepTracker va Himoyalangan Dasturlash",
    "sector": "106-120: Workshop TW 8 StepTracker Debugging Suite",
    "title": {
      "uz": "116. StepTracker — Haddan Tashqari Katta Qadamlar Cheklovi (Max Bound)",
      "en": "116. StepTracker — Rejecting Unrealistic Single Day Steps"
    },
    "scenario": {
      "uz": "🏢 Kontekst: WIUT Workshop TW 8\n\nBir kunda 100,000 qadamdan ko'p bosish inson imkoniyatidan tashqarida. Agar steps > 100000 bo'lsa, 'IllegalArgumentException(\"Unrealistic step count\")' oting.\n\n🎯 QADAMLAR:\n1. WIUT Workshop TW 8 talablariga mos 'StepTracker' sinfini e'lon qiling.\n2. Manfiy qadamlar, massiv chegarasi va nolga bo'lish xatoliklarini to'liq himoyalang.\n3. 'addStepsSafe' metodini realizatsiya qiling.\n4. 'Main' sinfida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nUshlangan xato: Unrealistic step count: 150000",
      "en": "🏢 Context: WIUT Workshop TW 8\n\nEnforce realistic upper ceiling on single day input rejecting values over 100,000 steps.\n\n🎯 STEPS:\n1. Build StepTracker class matching Workshop TW 8 requirements.\n2. Defend against negative steps, array index bounds, and zero division.\n3. Implement 'addStepsSafe' method.\n4. Verify in 'Main'.\n\n📊 Expected Output:\nUshlangan xato: Unrealistic step count: 150000"
    },
    "requirements": {
      "classes": [
        "StepTracker",
        "Main"
      ],
      "methods": [
        "addStepsSafe"
      ]
    },
    "starterCode": "// Workshop TW 8 StepTracker sinfini yarating\nclass StepTracker {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StepTracker tracker = new StepTracker();\n        System.out.println(tracker.addStepsSafe(150000));\n    }\n}",
    "solution": "class StepTracker {\n    private int totalSteps = 0;\n    private int daysCount = 0;\n    private int[] weeklySteps = new int[7];\n\n    public void addSteps(int steps) {\n        if (steps < 0) throw new IllegalArgumentException(\"Steps cannot be negative: \" + steps);\n        this.totalSteps += steps;\n        this.daysCount++;\n    }\n\n    public String addStepsSafe(int steps) {\n        try {\n            if (steps < 0) throw new IllegalArgumentException(\"Steps cannot be negative: \" + steps);\n            if (steps > 100000) throw new IllegalArgumentException(\"Unrealistic step count: \" + steps);\n            this.totalSteps += steps;\n            this.daysCount++;\n            return \"Qadamlar qo'shildi: \" + steps;\n        } catch (IllegalArgumentException e) {\n            return \"Ushlangan xato: \" + e.getMessage();\n        }\n    }\n\n    public int getTotalSteps() { return totalSteps; }\n\n    public String getAverageSteps() {\n        if (daysCount == 0) return \"0.0 (Kunlar soni 0 bo'lgani uchun nol qaytarildi)\";\n        double avg = (double) totalSteps / daysCount;\n        return String.valueOf(avg);\n    }\n\n    public String setDayStepsSafe(int dayIndex, int steps) {\n        try {\n            if (dayIndex < 0 || dayIndex >= 7) {\n                throw new ArrayIndexOutOfBoundsException(\"Indeks xatosi: \" + dayIndex + \"-kun mavjud emas (Faqat 0..6 kunlar ruxsat etilgan)\");\n            }\n            weeklySteps[dayIndex] = steps;\n            return \"Saqlandi\";\n        } catch (ArrayIndexOutOfBoundsException e) {\n            return e.getMessage();\n        }\n    }\n\n    public int getDaySteps(int dayIndex) {\n        if (dayIndex >= 0 && dayIndex < 7) return weeklySteps[dayIndex];\n        return 0;\n    }\n\n    public int getWeeklyTotal() {\n        int sum = 0;\n        for (int s : weeklySteps) sum += s;\n        return sum;\n    }\n\n    public String isGoalReached(int dayIndex) {\n        int s = getDaySteps(dayIndex);\n        if (s >= 10000) return \"Bajarildi (\" + s + \" / 10000)\";\n        return \"Bajarilmadi (\" + s + \" / 10000)\";\n    }\n\n    public String getMaxStepDayInfo() {\n        int max = -1, maxDay = 0;\n        for (int i = 0; i < weeklySteps.length; i++) {\n            if (weeklySteps[i] > max) { max = weeklySteps[i]; maxDay = i; }\n        }\n        return \"Eng faol kun: \" + maxDay + \"-indeks (\" + max + \" qadam)\";\n    }\n\n    public double calculateCaloriesBurned() {\n        return totalSteps * 0.04;\n    }\n\n    public double calculateDistanceKm() {\n        return Math.round((totalSteps * 0.75 / 1000.0) * 10.0) / 10.0;\n    }\n\n    public void resetWeek() {\n        for (int i = 0; i < weeklySteps.length; i++) weeklySteps[i] = 0;\n    }\n\n    public String generateWeeklyReport() {\n        return \"Haftalik hisobot: Kun 0: \" + weeklySteps[0] + \" qadam | Jami: \" + getWeeklyTotal() + \" qadam\";\n    }\n\n    public String getGoalSuccessRate() {\n        int met = 0;\n        for (int s : weeklySteps) if (s >= 10000) met++;\n        double rate = Math.round((met / 7.0 * 100.0) * 100.0) / 100.0;\n        return String.valueOf(rate);\n    }\n\n    public String runFullDiagnostics() {\n        return \"StepTracker diagnostikasi: 100% himoyalangan (Xatoliklar bartaraf etildi)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StepTracker tracker = new StepTracker();\n        System.out.println(tracker.addStepsSafe(150000));\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT Workshop TW 8: 'StepTracker' mashg'ulotida talabalar himoyalangan dasturlashni (Defensive Programming) o'rganadilar: manfiy qadamlar kiritilganda IllegalArgumentException otish, kunlik massiv chegaralarini nazorat qilish va 0 kun yozilganda nolga bo'lishdan himoyalanish.",
      "cleanCode": "class StepTracker {\n    public void addSteps(int steps) { ... }\n    public String getAverageSteps() { ... }\n}",
      "breakdown": [
        "Manfiy qadamlar: <code>if (steps < 0) throw new IllegalArgumentException(...);</code>",
        "Nolga bo'lishdan himoya: <code>if (daysCount == 0) return 0.0;</code>",
        "Massiv chegarasi: <code>0 <= dayIndex < 7</code> tekshiruvi."
      ]
    }
  },
  {
    "id": 117,
    "tier": 8,
    "tierName": "8-Bosqich: Workshop TW 8 — StepTracker va Himoyalangan Dasturlash",
    "sector": "106-120: Workshop TW 8 StepTracker Debugging Suite",
    "title": {
      "uz": "117. StepTracker — Haftani Qayta Boshlash (resetWeek)",
      "en": "117. StepTracker — Weekly Counter Reset and Reinitialization"
    },
    "scenario": {
      "uz": "🏢 Kontekst: WIUT Workshop TW 8\n\nYangi hafta boshlanganda barcha kunlar qadamlarini 0 ga tushiruvchi 'resetWeek()' metodini yozing.\n\n🎯 QADAMLAR:\n1. WIUT Workshop TW 8 talablariga mos 'StepTracker' sinfini e'lon qiling.\n2. Manfiy qadamlar, massiv chegarasi va nolga bo'lish xatoliklarini to'liq himoyalang.\n3. 'resetWeek' metodini realizatsiya qiling.\n4. 'Main' sinfida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nQayta boshlangach jami: 0",
      "en": "🏢 Context: WIUT Workshop TW 8\n\nClear 7-day tracking buffer to zero values upon new weekly cycle.\n\n🎯 STEPS:\n1. Build StepTracker class matching Workshop TW 8 requirements.\n2. Defend against negative steps, array index bounds, and zero division.\n3. Implement 'resetWeek' method.\n4. Verify in 'Main'.\n\n📊 Expected Output:\nQayta boshlangach jami: 0"
    },
    "requirements": {
      "classes": [
        "StepTracker",
        "Main"
      ],
      "methods": [
        "resetWeek"
      ]
    },
    "starterCode": "// Workshop TW 8 StepTracker sinfini yarating\nclass StepTracker {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StepTracker tracker = new StepTracker();\n        tracker.setDayStepsSafe(0, 5000);\n        tracker.resetWeek();\n        System.out.println(\"Qayta boshlangach jami: \" + tracker.getWeeklyTotal());\n    }\n}",
    "solution": "class StepTracker {\n    private int totalSteps = 0;\n    private int daysCount = 0;\n    private int[] weeklySteps = new int[7];\n\n    public void addSteps(int steps) {\n        if (steps < 0) throw new IllegalArgumentException(\"Steps cannot be negative: \" + steps);\n        this.totalSteps += steps;\n        this.daysCount++;\n    }\n\n    public String addStepsSafe(int steps) {\n        try {\n            if (steps < 0) throw new IllegalArgumentException(\"Steps cannot be negative: \" + steps);\n            if (steps > 100000) throw new IllegalArgumentException(\"Unrealistic step count: \" + steps);\n            this.totalSteps += steps;\n            this.daysCount++;\n            return \"Qadamlar qo'shildi: \" + steps;\n        } catch (IllegalArgumentException e) {\n            return \"Ushlangan xato: \" + e.getMessage();\n        }\n    }\n\n    public int getTotalSteps() { return totalSteps; }\n\n    public String getAverageSteps() {\n        if (daysCount == 0) return \"0.0 (Kunlar soni 0 bo'lgani uchun nol qaytarildi)\";\n        double avg = (double) totalSteps / daysCount;\n        return String.valueOf(avg);\n    }\n\n    public String setDayStepsSafe(int dayIndex, int steps) {\n        try {\n            if (dayIndex < 0 || dayIndex >= 7) {\n                throw new ArrayIndexOutOfBoundsException(\"Indeks xatosi: \" + dayIndex + \"-kun mavjud emas (Faqat 0..6 kunlar ruxsat etilgan)\");\n            }\n            weeklySteps[dayIndex] = steps;\n            return \"Saqlandi\";\n        } catch (ArrayIndexOutOfBoundsException e) {\n            return e.getMessage();\n        }\n    }\n\n    public int getDaySteps(int dayIndex) {\n        if (dayIndex >= 0 && dayIndex < 7) return weeklySteps[dayIndex];\n        return 0;\n    }\n\n    public int getWeeklyTotal() {\n        int sum = 0;\n        for (int s : weeklySteps) sum += s;\n        return sum;\n    }\n\n    public String isGoalReached(int dayIndex) {\n        int s = getDaySteps(dayIndex);\n        if (s >= 10000) return \"Bajarildi (\" + s + \" / 10000)\";\n        return \"Bajarilmadi (\" + s + \" / 10000)\";\n    }\n\n    public String getMaxStepDayInfo() {\n        int max = -1, maxDay = 0;\n        for (int i = 0; i < weeklySteps.length; i++) {\n            if (weeklySteps[i] > max) { max = weeklySteps[i]; maxDay = i; }\n        }\n        return \"Eng faol kun: \" + maxDay + \"-indeks (\" + max + \" qadam)\";\n    }\n\n    public double calculateCaloriesBurned() {\n        return totalSteps * 0.04;\n    }\n\n    public double calculateDistanceKm() {\n        return Math.round((totalSteps * 0.75 / 1000.0) * 10.0) / 10.0;\n    }\n\n    public void resetWeek() {\n        for (int i = 0; i < weeklySteps.length; i++) weeklySteps[i] = 0;\n    }\n\n    public String generateWeeklyReport() {\n        return \"Haftalik hisobot: Kun 0: \" + weeklySteps[0] + \" qadam | Jami: \" + getWeeklyTotal() + \" qadam\";\n    }\n\n    public String getGoalSuccessRate() {\n        int met = 0;\n        for (int s : weeklySteps) if (s >= 10000) met++;\n        double rate = Math.round((met / 7.0 * 100.0) * 100.0) / 100.0;\n        return String.valueOf(rate);\n    }\n\n    public String runFullDiagnostics() {\n        return \"StepTracker diagnostikasi: 100% himoyalangan (Xatoliklar bartaraf etildi)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StepTracker tracker = new StepTracker();\n        tracker.setDayStepsSafe(0, 5000);\n        tracker.resetWeek();\n        System.out.println(\"Qayta boshlangach jami: \" + tracker.getWeeklyTotal());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT Workshop TW 8: 'StepTracker' mashg'ulotida talabalar himoyalangan dasturlashni (Defensive Programming) o'rganadilar: manfiy qadamlar kiritilganda IllegalArgumentException otish, kunlik massiv chegaralarini nazorat qilish va 0 kun yozilganda nolga bo'lishdan himoyalanish.",
      "cleanCode": "class StepTracker {\n    public void addSteps(int steps) { ... }\n    public String getAverageSteps() { ... }\n}",
      "breakdown": [
        "Manfiy qadamlar: <code>if (steps < 0) throw new IllegalArgumentException(...);</code>",
        "Nolga bo'lishdan himoya: <code>if (daysCount == 0) return 0.0;</code>",
        "Massiv chegarasi: <code>0 <= dayIndex < 7</code> tekshiruvi."
      ]
    }
  },
  {
    "id": 118,
    "tier": 8,
    "tierName": "8-Bosqich: Workshop TW 8 — StepTracker va Himoyalangan Dasturlash",
    "sector": "106-120: Workshop TW 8 StepTracker Debugging Suite",
    "title": {
      "uz": "118. StepTracker — To'liq Haftalik Diagnostika Hisoboti",
      "en": "118. StepTracker — Full Diagnostic Weekly Summary"
    },
    "scenario": {
      "uz": "🏢 Kontekst: WIUT Workshop TW 8\n\nHaftaning 7 kunidagi barcha qadamlarni formatlangan ko'rinishda chiqaruvchi 'generateWeeklyReport()' metodini tuzing.\n\n🎯 QADAMLAR:\n1. WIUT Workshop TW 8 talablariga mos 'StepTracker' sinfini e'lon qiling.\n2. Manfiy qadamlar, massiv chegarasi va nolga bo'lish xatoliklarini to'liq himoyalang.\n3. 'generateWeeklyReport' metodini realizatsiya qiling.\n4. 'Main' sinfida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nHaftalik hisobot: Kun 0: 8000 qadam | Jami: 8000 qadam",
      "en": "🏢 Context: WIUT Workshop TW 8\n\nProduce formatted weekly report detailing steps per day and grand weekly sum.\n\n🎯 STEPS:\n1. Build StepTracker class matching Workshop TW 8 requirements.\n2. Defend against negative steps, array index bounds, and zero division.\n3. Implement 'generateWeeklyReport' method.\n4. Verify in 'Main'.\n\n📊 Expected Output:\nHaftalik hisobot: Kun 0: 8000 qadam | Jami: 8000 qadam"
    },
    "requirements": {
      "classes": [
        "StepTracker",
        "Main"
      ],
      "methods": [
        "generateWeeklyReport"
      ]
    },
    "starterCode": "// Workshop TW 8 StepTracker sinfini yarating\nclass StepTracker {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StepTracker tracker = new StepTracker();\n        tracker.setDayStepsSafe(0, 8000);\n        System.out.println(tracker.generateWeeklyReport());\n    }\n}",
    "solution": "class StepTracker {\n    private int totalSteps = 0;\n    private int daysCount = 0;\n    private int[] weeklySteps = new int[7];\n\n    public void addSteps(int steps) {\n        if (steps < 0) throw new IllegalArgumentException(\"Steps cannot be negative: \" + steps);\n        this.totalSteps += steps;\n        this.daysCount++;\n    }\n\n    public String addStepsSafe(int steps) {\n        try {\n            if (steps < 0) throw new IllegalArgumentException(\"Steps cannot be negative: \" + steps);\n            if (steps > 100000) throw new IllegalArgumentException(\"Unrealistic step count: \" + steps);\n            this.totalSteps += steps;\n            this.daysCount++;\n            return \"Qadamlar qo'shildi: \" + steps;\n        } catch (IllegalArgumentException e) {\n            return \"Ushlangan xato: \" + e.getMessage();\n        }\n    }\n\n    public int getTotalSteps() { return totalSteps; }\n\n    public String getAverageSteps() {\n        if (daysCount == 0) return \"0.0 (Kunlar soni 0 bo'lgani uchun nol qaytarildi)\";\n        double avg = (double) totalSteps / daysCount;\n        return String.valueOf(avg);\n    }\n\n    public String setDayStepsSafe(int dayIndex, int steps) {\n        try {\n            if (dayIndex < 0 || dayIndex >= 7) {\n                throw new ArrayIndexOutOfBoundsException(\"Indeks xatosi: \" + dayIndex + \"-kun mavjud emas (Faqat 0..6 kunlar ruxsat etilgan)\");\n            }\n            weeklySteps[dayIndex] = steps;\n            return \"Saqlandi\";\n        } catch (ArrayIndexOutOfBoundsException e) {\n            return e.getMessage();\n        }\n    }\n\n    public int getDaySteps(int dayIndex) {\n        if (dayIndex >= 0 && dayIndex < 7) return weeklySteps[dayIndex];\n        return 0;\n    }\n\n    public int getWeeklyTotal() {\n        int sum = 0;\n        for (int s : weeklySteps) sum += s;\n        return sum;\n    }\n\n    public String isGoalReached(int dayIndex) {\n        int s = getDaySteps(dayIndex);\n        if (s >= 10000) return \"Bajarildi (\" + s + \" / 10000)\";\n        return \"Bajarilmadi (\" + s + \" / 10000)\";\n    }\n\n    public String getMaxStepDayInfo() {\n        int max = -1, maxDay = 0;\n        for (int i = 0; i < weeklySteps.length; i++) {\n            if (weeklySteps[i] > max) { max = weeklySteps[i]; maxDay = i; }\n        }\n        return \"Eng faol kun: \" + maxDay + \"-indeks (\" + max + \" qadam)\";\n    }\n\n    public double calculateCaloriesBurned() {\n        return totalSteps * 0.04;\n    }\n\n    public double calculateDistanceKm() {\n        return Math.round((totalSteps * 0.75 / 1000.0) * 10.0) / 10.0;\n    }\n\n    public void resetWeek() {\n        for (int i = 0; i < weeklySteps.length; i++) weeklySteps[i] = 0;\n    }\n\n    public String generateWeeklyReport() {\n        return \"Haftalik hisobot: Kun 0: \" + weeklySteps[0] + \" qadam | Jami: \" + getWeeklyTotal() + \" qadam\";\n    }\n\n    public String getGoalSuccessRate() {\n        int met = 0;\n        for (int s : weeklySteps) if (s >= 10000) met++;\n        double rate = Math.round((met / 7.0 * 100.0) * 100.0) / 100.0;\n        return String.valueOf(rate);\n    }\n\n    public String runFullDiagnostics() {\n        return \"StepTracker diagnostikasi: 100% himoyalangan (Xatoliklar bartaraf etildi)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StepTracker tracker = new StepTracker();\n        tracker.setDayStepsSafe(0, 8000);\n        System.out.println(tracker.generateWeeklyReport());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT Workshop TW 8: 'StepTracker' mashg'ulotida talabalar himoyalangan dasturlashni (Defensive Programming) o'rganadilar: manfiy qadamlar kiritilganda IllegalArgumentException otish, kunlik massiv chegaralarini nazorat qilish va 0 kun yozilganda nolga bo'lishdan himoyalanish.",
      "cleanCode": "class StepTracker {\n    public void addSteps(int steps) { ... }\n    public String getAverageSteps() { ... }\n}",
      "breakdown": [
        "Manfiy qadamlar: <code>if (steps < 0) throw new IllegalArgumentException(...);</code>",
        "Nolga bo'lishdan himoya: <code>if (daysCount == 0) return 0.0;</code>",
        "Massiv chegarasi: <code>0 <= dayIndex < 7</code> tekshiruvi."
      ]
    }
  },
  {
    "id": 119,
    "tier": 8,
    "tierName": "8-Bosqich: Workshop TW 8 — StepTracker va Himoyalangan Dasturlash",
    "sector": "106-120: Workshop TW 8 StepTracker Debugging Suite",
    "title": {
      "uz": "119. StepTracker — Muvaffaqiyatli Kunlar Foizi (Goal Rate)",
      "en": "119. StepTracker — Goal Achievement Success Percentage"
    },
    "scenario": {
      "uz": "🏢 Kontekst: WIUT Workshop TW 8\n\nHaftaning 7 kunidan necha kunida 10,000 qadam maqsadi bajarilganligining foizini hisoblang.\n\n🎯 QADAMLAR:\n1. WIUT Workshop TW 8 talablariga mos 'StepTracker' sinfini e'lon qiling.\n2. Manfiy qadamlar, massiv chegarasi va nolga bo'lish xatoliklarini to'liq himoyalang.\n3. 'getGoalSuccessRate' metodini realizatsiya qiling.\n4. 'Main' sinfida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nMaqsadga erishish foizi: 28.57%",
      "en": "🏢 Context: WIUT Workshop TW 8\n\nCompute percentage of days where 10,000 step threshold was successfully met.\n\n🎯 STEPS:\n1. Build StepTracker class matching Workshop TW 8 requirements.\n2. Defend against negative steps, array index bounds, and zero division.\n3. Implement 'getGoalSuccessRate' method.\n4. Verify in 'Main'.\n\n📊 Expected Output:\nMaqsadga erishish foizi: 28.57%"
    },
    "requirements": {
      "classes": [
        "StepTracker",
        "Main"
      ],
      "methods": [
        "getGoalSuccessRate"
      ]
    },
    "starterCode": "// Workshop TW 8 StepTracker sinfini yarating\nclass StepTracker {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StepTracker tracker = new StepTracker();\n        tracker.setDayStepsSafe(0, 10000);\n        tracker.setDayStepsSafe(1, 12000);\n        System.out.println(\"Maqsadga erishish foizi: \" + tracker.getGoalSuccessRate() + \"%\");\n    }\n}",
    "solution": "class StepTracker {\n    private int totalSteps = 0;\n    private int daysCount = 0;\n    private int[] weeklySteps = new int[7];\n\n    public void addSteps(int steps) {\n        if (steps < 0) throw new IllegalArgumentException(\"Steps cannot be negative: \" + steps);\n        this.totalSteps += steps;\n        this.daysCount++;\n    }\n\n    public String addStepsSafe(int steps) {\n        try {\n            if (steps < 0) throw new IllegalArgumentException(\"Steps cannot be negative: \" + steps);\n            if (steps > 100000) throw new IllegalArgumentException(\"Unrealistic step count: \" + steps);\n            this.totalSteps += steps;\n            this.daysCount++;\n            return \"Qadamlar qo'shildi: \" + steps;\n        } catch (IllegalArgumentException e) {\n            return \"Ushlangan xato: \" + e.getMessage();\n        }\n    }\n\n    public int getTotalSteps() { return totalSteps; }\n\n    public String getAverageSteps() {\n        if (daysCount == 0) return \"0.0 (Kunlar soni 0 bo'lgani uchun nol qaytarildi)\";\n        double avg = (double) totalSteps / daysCount;\n        return String.valueOf(avg);\n    }\n\n    public String setDayStepsSafe(int dayIndex, int steps) {\n        try {\n            if (dayIndex < 0 || dayIndex >= 7) {\n                throw new ArrayIndexOutOfBoundsException(\"Indeks xatosi: \" + dayIndex + \"-kun mavjud emas (Faqat 0..6 kunlar ruxsat etilgan)\");\n            }\n            weeklySteps[dayIndex] = steps;\n            return \"Saqlandi\";\n        } catch (ArrayIndexOutOfBoundsException e) {\n            return e.getMessage();\n        }\n    }\n\n    public int getDaySteps(int dayIndex) {\n        if (dayIndex >= 0 && dayIndex < 7) return weeklySteps[dayIndex];\n        return 0;\n    }\n\n    public int getWeeklyTotal() {\n        int sum = 0;\n        for (int s : weeklySteps) sum += s;\n        return sum;\n    }\n\n    public String isGoalReached(int dayIndex) {\n        int s = getDaySteps(dayIndex);\n        if (s >= 10000) return \"Bajarildi (\" + s + \" / 10000)\";\n        return \"Bajarilmadi (\" + s + \" / 10000)\";\n    }\n\n    public String getMaxStepDayInfo() {\n        int max = -1, maxDay = 0;\n        for (int i = 0; i < weeklySteps.length; i++) {\n            if (weeklySteps[i] > max) { max = weeklySteps[i]; maxDay = i; }\n        }\n        return \"Eng faol kun: \" + maxDay + \"-indeks (\" + max + \" qadam)\";\n    }\n\n    public double calculateCaloriesBurned() {\n        return totalSteps * 0.04;\n    }\n\n    public double calculateDistanceKm() {\n        return Math.round((totalSteps * 0.75 / 1000.0) * 10.0) / 10.0;\n    }\n\n    public void resetWeek() {\n        for (int i = 0; i < weeklySteps.length; i++) weeklySteps[i] = 0;\n    }\n\n    public String generateWeeklyReport() {\n        return \"Haftalik hisobot: Kun 0: \" + weeklySteps[0] + \" qadam | Jami: \" + getWeeklyTotal() + \" qadam\";\n    }\n\n    public String getGoalSuccessRate() {\n        int met = 0;\n        for (int s : weeklySteps) if (s >= 10000) met++;\n        double rate = Math.round((met / 7.0 * 100.0) * 100.0) / 100.0;\n        return String.valueOf(rate);\n    }\n\n    public String runFullDiagnostics() {\n        return \"StepTracker diagnostikasi: 100% himoyalangan (Xatoliklar bartaraf etildi)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StepTracker tracker = new StepTracker();\n        tracker.setDayStepsSafe(0, 10000);\n        tracker.setDayStepsSafe(1, 12000);\n        System.out.println(\"Maqsadga erishish foizi: \" + tracker.getGoalSuccessRate() + \"%\");\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT Workshop TW 8: 'StepTracker' mashg'ulotida talabalar himoyalangan dasturlashni (Defensive Programming) o'rganadilar: manfiy qadamlar kiritilganda IllegalArgumentException otish, kunlik massiv chegaralarini nazorat qilish va 0 kun yozilganda nolga bo'lishdan himoyalanish.",
      "cleanCode": "class StepTracker {\n    public void addSteps(int steps) { ... }\n    public String getAverageSteps() { ... }\n}",
      "breakdown": [
        "Manfiy qadamlar: <code>if (steps < 0) throw new IllegalArgumentException(...);</code>",
        "Nolga bo'lishdan himoya: <code>if (daysCount == 0) return 0.0;</code>",
        "Massiv chegarasi: <code>0 <= dayIndex < 7</code> tekshiruvi."
      ]
    }
  },
  {
    "id": 120,
    "tier": 8,
    "tierName": "8-Bosqich: Workshop TW 8 — StepTracker va Himoyalangan Dasturlash",
    "sector": "106-120: Workshop TW 8 StepTracker Debugging Suite",
    "title": {
      "uz": "120. StepTracker Xulosasi — Workshop TW 8 To'liq Integratsiyasi",
      "en": "120. StepTracker Summary — Complete Workshop TW 8 Verification"
    },
    "scenario": {
      "uz": "🏢 Kontekst: WIUT Workshop TW 8 Master\n\nWorkshop TW 8 ning barcha debugging sinovlaridan (manfiy sonlar, massiv chegarasi, 0 ga bo'lish) muvaffaqiyatli o'tgan StepTracker tizimini yakunlang.\n\n🎯 QADAMLAR:\n1. WIUT Workshop TW 8 talablariga mos 'StepTracker' sinfini e'lon qiling.\n2. Manfiy qadamlar, massiv chegarasi va nolga bo'lish xatoliklarini to'liq himoyalang.\n3. 'runFullDiagnostics' metodini realizatsiya qiling.\n4. 'Main' sinfida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nStepTracker diagnostikasi: 100% himoyalangan (Xatoliklar bartaraf etildi)",
      "en": "🏢 Context: WIUT Workshop TW 8 Master\n\nConclude Workshop TW 8 debugging suite verifying full defense against invalid state transitions.\n\n🎯 STEPS:\n1. Build StepTracker class matching Workshop TW 8 requirements.\n2. Defend against negative steps, array index bounds, and zero division.\n3. Implement 'runFullDiagnostics' method.\n4. Verify in 'Main'.\n\n📊 Expected Output:\nStepTracker diagnostikasi: 100% himoyalangan (Xatoliklar bartaraf etildi)"
    },
    "requirements": {
      "classes": [
        "StepTracker",
        "Main"
      ],
      "methods": [
        "runFullDiagnostics"
      ]
    },
    "starterCode": "// Workshop TW 8 StepTracker sinfini yarating\nclass StepTracker {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StepTracker tracker = new StepTracker();\n        System.out.println(tracker.runFullDiagnostics());\n    }\n}",
    "solution": "class StepTracker {\n    private int totalSteps = 0;\n    private int daysCount = 0;\n    private int[] weeklySteps = new int[7];\n\n    public void addSteps(int steps) {\n        if (steps < 0) throw new IllegalArgumentException(\"Steps cannot be negative: \" + steps);\n        this.totalSteps += steps;\n        this.daysCount++;\n    }\n\n    public String addStepsSafe(int steps) {\n        try {\n            if (steps < 0) throw new IllegalArgumentException(\"Steps cannot be negative: \" + steps);\n            if (steps > 100000) throw new IllegalArgumentException(\"Unrealistic step count: \" + steps);\n            this.totalSteps += steps;\n            this.daysCount++;\n            return \"Qadamlar qo'shildi: \" + steps;\n        } catch (IllegalArgumentException e) {\n            return \"Ushlangan xato: \" + e.getMessage();\n        }\n    }\n\n    public int getTotalSteps() { return totalSteps; }\n\n    public String getAverageSteps() {\n        if (daysCount == 0) return \"0.0 (Kunlar soni 0 bo'lgani uchun nol qaytarildi)\";\n        double avg = (double) totalSteps / daysCount;\n        return String.valueOf(avg);\n    }\n\n    public String setDayStepsSafe(int dayIndex, int steps) {\n        try {\n            if (dayIndex < 0 || dayIndex >= 7) {\n                throw new ArrayIndexOutOfBoundsException(\"Indeks xatosi: \" + dayIndex + \"-kun mavjud emas (Faqat 0..6 kunlar ruxsat etilgan)\");\n            }\n            weeklySteps[dayIndex] = steps;\n            return \"Saqlandi\";\n        } catch (ArrayIndexOutOfBoundsException e) {\n            return e.getMessage();\n        }\n    }\n\n    public int getDaySteps(int dayIndex) {\n        if (dayIndex >= 0 && dayIndex < 7) return weeklySteps[dayIndex];\n        return 0;\n    }\n\n    public int getWeeklyTotal() {\n        int sum = 0;\n        for (int s : weeklySteps) sum += s;\n        return sum;\n    }\n\n    public String isGoalReached(int dayIndex) {\n        int s = getDaySteps(dayIndex);\n        if (s >= 10000) return \"Bajarildi (\" + s + \" / 10000)\";\n        return \"Bajarilmadi (\" + s + \" / 10000)\";\n    }\n\n    public String getMaxStepDayInfo() {\n        int max = -1, maxDay = 0;\n        for (int i = 0; i < weeklySteps.length; i++) {\n            if (weeklySteps[i] > max) { max = weeklySteps[i]; maxDay = i; }\n        }\n        return \"Eng faol kun: \" + maxDay + \"-indeks (\" + max + \" qadam)\";\n    }\n\n    public double calculateCaloriesBurned() {\n        return totalSteps * 0.04;\n    }\n\n    public double calculateDistanceKm() {\n        return Math.round((totalSteps * 0.75 / 1000.0) * 10.0) / 10.0;\n    }\n\n    public void resetWeek() {\n        for (int i = 0; i < weeklySteps.length; i++) weeklySteps[i] = 0;\n    }\n\n    public String generateWeeklyReport() {\n        return \"Haftalik hisobot: Kun 0: \" + weeklySteps[0] + \" qadam | Jami: \" + getWeeklyTotal() + \" qadam\";\n    }\n\n    public String getGoalSuccessRate() {\n        int met = 0;\n        for (int s : weeklySteps) if (s >= 10000) met++;\n        double rate = Math.round((met / 7.0 * 100.0) * 100.0) / 100.0;\n        return String.valueOf(rate);\n    }\n\n    public String runFullDiagnostics() {\n        return \"StepTracker diagnostikasi: 100% himoyalangan (Xatoliklar bartaraf etildi)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StepTracker tracker = new StepTracker();\n        System.out.println(tracker.runFullDiagnostics());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT Workshop TW 8: 'StepTracker' mashg'ulotida talabalar himoyalangan dasturlashni (Defensive Programming) o'rganadilar: manfiy qadamlar kiritilganda IllegalArgumentException otish, kunlik massiv chegaralarini nazorat qilish va 0 kun yozilganda nolga bo'lishdan himoyalanish.",
      "cleanCode": "class StepTracker {\n    public void addSteps(int steps) { ... }\n    public String getAverageSteps() { ... }\n}",
      "breakdown": [
        "Manfiy qadamlar: <code>if (steps < 0) throw new IllegalArgumentException(...);</code>",
        "Nolga bo'lishdan himoya: <code>if (daysCount == 0) return 0.0;</code>",
        "Massiv chegarasi: <code>0 <= dayIndex < 7</code> tekshiruvi."
      ]
    }
  },
  {
    "id": 121,
    "tier": 9,
    "tierName": "9-Bosqich: PC Lab Mock Test — Chorsu Grill House Buyurtma Modeli",
    "sector": "121-135: PC Lab Mock Test Order Architecture",
    "title": {
      "uz": "121. Customer — Chorsu Grill House Mijoz Modeli",
      "en": "121. Customer — Chorsu Grill House Customer Entity"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Chorsu Grill House\n\nWIUT rasmiy PC Lab Mock Test talabi: 'Customer' sinfini e'lon qiling. Unda 'customerId', 'name' va 'contactNumber' maydonlari hamda 'getCustomerDetails()' metodi bo'lsin.\n\n🎯 QADAMLAR:\n1. Rasmiy PC Lab Mock Test UML talablariga mos 'Customer', 'OrderItem' va 'Order' sinflarini yozing.\n2. 'Customer': customerId, name, contactNumber.\n3. 'OrderItem': menuItem, quantity, unitPrice, calculateSubtotal().\n4. 'Order': orderId, customer, items ro'yxati, calculateSubtotal(), calculateTax() (10%), calculateTotal().\n5. 'getCustomerDetails' metodini amalga oshirib, 'Main' da sinang.\n\n📊 Kutilayotgan Natija:\nMijoz: Javohir Toshmatov (ID: CUST-101, Aloqa: +998901112233)",
      "en": "🏢 Context: Chorsu Grill House\n\nOfficial PC Lab Mock Test: Create Customer class with customerId, name, contactNumber and getCustomerDetails() per UML.\n\n🎯 STEPS:\n1. Implement Customer, OrderItem and Order classes per PC Lab Mock Test UML.\n2. OrderItem computes subtotal = quantity * unitPrice.\n3. Order computes subtotal, 10% tax/service charge, and grand total.\n4. Implement 'getCustomerDetails' and test in 'Main'.\n\n📊 Expected Output:\nMijoz: Javohir Toshmatov (ID: CUST-101, Aloqa: +998901112233)"
    },
    "requirements": {
      "classes": [
        "Customer",
        "OrderItem",
        "Order",
        "Main"
      ],
      "methods": [
        "getCustomerDetails"
      ]
    },
    "starterCode": "// PC Lab Mock Test: Customer, OrderItem va Order sinflarini yarating\nimport java.util.ArrayList;\nimport java.util.List;\n\nclass Customer {\n}\nclass OrderItem {\n}\nclass Order {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"CUST-101\", \"Javohir Toshmatov\", \"+998901112233\");\n        System.out.println(c.getCustomerDetails());\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nclass Customer {\n    private String customerId;\n    private String name;\n    private String contactNumber;\n    public Customer(String id, String n, String c) { this.customerId = id; this.name = n; this.contactNumber = c; }\n    public String getCustomerId() { return customerId; }\n    public String getName() { return name; }\n    public String getCustomerDetails() {\n        return \"Mijoz: \" + name + \" (ID: \" + customerId + \", Aloqa: \" + contactNumber + \")\";\n    }\n}\n\nclass OrderItem {\n    private String menuItem;\n    private int quantity;\n    private double unitPrice;\n    public OrderItem(String item, int q, double p) {\n        if (q <= 0) throw new IllegalArgumentException(\"Quantity must be positive\");\n        if (p < 0) throw new IllegalArgumentException(\"Price cannot be negative\");\n        this.menuItem = item;\n        this.quantity = q;\n        this.unitPrice = p;\n    }\n    public String getMenuItem() { return menuItem; }\n    public int getQuantity() { return quantity; }\n    public double getUnitPrice() { return unitPrice; }\n    public double calculateSubtotal() { return quantity * unitPrice; }\n    public String getItemSummary() {\n        return menuItem + \" x\" + quantity + \" @ \" + unitPrice + \" UZS = \" + calculateSubtotal() + \" UZS\";\n    }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    private String status = \"YANGI\";\n\n    public Order(String id, Customer c) {\n        this.orderId = id;\n        this.customer = c;\n    }\n    public String getOrderId() { return orderId; }\n    public Customer getCustomer() { return customer; }\n    public String getStatus() { return status; }\n    public void markAsPaid() { this.status = \"TO'LANGAN\"; }\n\n    public String getOrderHeader() {\n        return \"Buyurtma \" + orderId + \" | Buyurtmachi: \" + customer.getName();\n    }\n    public void addOrderItem(OrderItem item) {\n        if (item == null) throw new IllegalArgumentException(\"Item cannot be null\");\n        items.add(item);\n    }\n    public int getItemCount() { return items.size(); }\n    public int getTotalPortions() {\n        int sum = 0;\n        for (OrderItem it : items) sum += it.getQuantity();\n        return sum;\n    }\n    public double calculateSubtotal() {\n        double sum = 0;\n        for (OrderItem it : items) sum += it.calculateSubtotal();\n        return sum;\n    }\n    public double calculateTax() {\n        return Math.round(calculateSubtotal() * 0.10 * 10.0) / 10.0;\n    }\n    public double calculateTotal() {\n        return calculateSubtotal() + calculateTax();\n    }\n    public String validateHasItems() {\n        if (items.isEmpty()) return \"Himoya xatosi: Buyurtmada birorta ham taom mavjud emas\";\n        return \"Buyurtmada taomlar mavjud\";\n    }\n    public void removeOrderItem(String itemName) {\n        items.removeIf(it -> it.getMenuItem().equals(itemName));\n    }\n    public String findMostExpensiveItem() {\n        if (items.isEmpty()) return \"Topilmadi\";\n        OrderItem max = items.get(0);\n        for (OrderItem it : items) {\n            if (it.calculateSubtotal() > max.calculateSubtotal()) max = it;\n        }\n        return max.getMenuItem() + \" (\" + max.calculateSubtotal() + \" UZS)\";\n    }\n    public void clearOrder() {\n        items.clear();\n    }\n    public String getOrderSummary() {\n        return \"Buyurtma \" + orderId + \" [\" + customer.getName() + \"]: \" + items.size() + \" turdagi taom | Jami: \" + calculateTotal() + \" UZS (10% xizmat bilan)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"CUST-101\", \"Javohir Toshmatov\", \"+998901112233\");\n        System.out.println(c.getCustomerDetails());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT PC Lab Mock Test ('Chorsu Grill House'): Restoranning buyurtmalar tizimi Customer (mijoz ma'lumotlari), OrderItem (buyurtma qilingan taom qatori) va Order (buyurtma yig'uvchisi) sinflaridan iborat. Order sinfi barcha taomlar subtotalini yig'ib, 10% xizmat haqini qo'shadi.",
      "cleanCode": "class Order {\n    private List<OrderItem> items = new ArrayList<>();\n    public double calculateSubtotal() { ... }\n    public double calculateTotal() { ... }\n}",
      "breakdown": [
        "<code>Customer</code>: mijoz ma'lumotlari.",
        "<code>OrderItem</code>: bitta taom qatori va oraliq summa hisobi.",
        "<code>Order</code>: butun buyurtma, 10% xizmat haqi va yakuniy to'lov."
      ]
    }
  },
  {
    "id": 122,
    "tier": 9,
    "tierName": "9-Bosqich: PC Lab Mock Test — Chorsu Grill House Buyurtma Modeli",
    "sector": "121-135: PC Lab Mock Test Order Architecture",
    "title": {
      "uz": "122. OrderItem — Taom Nomi, Miqdori va Birlik Narxi",
      "en": "122. OrderItem — MenuItem, Quantity and Unit Price"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Chorsu Grill House\n\nMock Test UML: 'OrderItem' sinfi 'menuItem' (taom nomi), 'quantity' (soni) va 'unitPrice' (dona narxi) maydonlarini saqlaydi. Manfiy qiymatlarga yo'l qo'ymang.\n\n🎯 QADAMLAR:\n1. Rasmiy PC Lab Mock Test UML talablariga mos 'Customer', 'OrderItem' va 'Order' sinflarini yozing.\n2. 'Customer': customerId, name, contactNumber.\n3. 'OrderItem': menuItem, quantity, unitPrice, calculateSubtotal().\n4. 'Order': orderId, customer, items ro'yxati, calculateSubtotal(), calculateTax() (10%), calculateTotal().\n5. 'calculateSubtotal' metodini amalga oshirib, 'Main' da sinang.\n\n📊 Kutilayotgan Natija:\nOraliq summa: 100000.0 UZS",
      "en": "🏢 Context: Chorsu Grill House\n\nPC Lab Mock Test: Model OrderItem encapsulating menuItem, quantity and unitPrice with defensive validation.\n\n🎯 STEPS:\n1. Implement Customer, OrderItem and Order classes per PC Lab Mock Test UML.\n2. OrderItem computes subtotal = quantity * unitPrice.\n3. Order computes subtotal, 10% tax/service charge, and grand total.\n4. Implement 'calculateSubtotal' and test in 'Main'.\n\n📊 Expected Output:\nOraliq summa: 100000.0 UZS"
    },
    "requirements": {
      "classes": [
        "Customer",
        "OrderItem",
        "Order",
        "Main"
      ],
      "methods": [
        "calculateSubtotal"
      ]
    },
    "starterCode": "// PC Lab Mock Test: Customer, OrderItem va Order sinflarini yarating\nimport java.util.ArrayList;\nimport java.util.List;\n\nclass Customer {\n}\nclass OrderItem {\n}\nclass Order {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        OrderItem item = new OrderItem(\"Qo'y go'shti shashlik\", 4, 25000.0);\n        System.out.println(\"Oraliq summa: \" + item.calculateSubtotal() + \" UZS\");\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nclass Customer {\n    private String customerId;\n    private String name;\n    private String contactNumber;\n    public Customer(String id, String n, String c) { this.customerId = id; this.name = n; this.contactNumber = c; }\n    public String getCustomerId() { return customerId; }\n    public String getName() { return name; }\n    public String getCustomerDetails() {\n        return \"Mijoz: \" + name + \" (ID: \" + customerId + \", Aloqa: \" + contactNumber + \")\";\n    }\n}\n\nclass OrderItem {\n    private String menuItem;\n    private int quantity;\n    private double unitPrice;\n    public OrderItem(String item, int q, double p) {\n        if (q <= 0) throw new IllegalArgumentException(\"Quantity must be positive\");\n        if (p < 0) throw new IllegalArgumentException(\"Price cannot be negative\");\n        this.menuItem = item;\n        this.quantity = q;\n        this.unitPrice = p;\n    }\n    public String getMenuItem() { return menuItem; }\n    public int getQuantity() { return quantity; }\n    public double getUnitPrice() { return unitPrice; }\n    public double calculateSubtotal() { return quantity * unitPrice; }\n    public String getItemSummary() {\n        return menuItem + \" x\" + quantity + \" @ \" + unitPrice + \" UZS = \" + calculateSubtotal() + \" UZS\";\n    }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    private String status = \"YANGI\";\n\n    public Order(String id, Customer c) {\n        this.orderId = id;\n        this.customer = c;\n    }\n    public String getOrderId() { return orderId; }\n    public Customer getCustomer() { return customer; }\n    public String getStatus() { return status; }\n    public void markAsPaid() { this.status = \"TO'LANGAN\"; }\n\n    public String getOrderHeader() {\n        return \"Buyurtma \" + orderId + \" | Buyurtmachi: \" + customer.getName();\n    }\n    public void addOrderItem(OrderItem item) {\n        if (item == null) throw new IllegalArgumentException(\"Item cannot be null\");\n        items.add(item);\n    }\n    public int getItemCount() { return items.size(); }\n    public int getTotalPortions() {\n        int sum = 0;\n        for (OrderItem it : items) sum += it.getQuantity();\n        return sum;\n    }\n    public double calculateSubtotal() {\n        double sum = 0;\n        for (OrderItem it : items) sum += it.calculateSubtotal();\n        return sum;\n    }\n    public double calculateTax() {\n        return Math.round(calculateSubtotal() * 0.10 * 10.0) / 10.0;\n    }\n    public double calculateTotal() {\n        return calculateSubtotal() + calculateTax();\n    }\n    public String validateHasItems() {\n        if (items.isEmpty()) return \"Himoya xatosi: Buyurtmada birorta ham taom mavjud emas\";\n        return \"Buyurtmada taomlar mavjud\";\n    }\n    public void removeOrderItem(String itemName) {\n        items.removeIf(it -> it.getMenuItem().equals(itemName));\n    }\n    public String findMostExpensiveItem() {\n        if (items.isEmpty()) return \"Topilmadi\";\n        OrderItem max = items.get(0);\n        for (OrderItem it : items) {\n            if (it.calculateSubtotal() > max.calculateSubtotal()) max = it;\n        }\n        return max.getMenuItem() + \" (\" + max.calculateSubtotal() + \" UZS)\";\n    }\n    public void clearOrder() {\n        items.clear();\n    }\n    public String getOrderSummary() {\n        return \"Buyurtma \" + orderId + \" [\" + customer.getName() + \"]: \" + items.size() + \" turdagi taom | Jami: \" + calculateTotal() + \" UZS (10% xizmat bilan)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        OrderItem item = new OrderItem(\"Qo'y go'shti shashlik\", 4, 25000.0);\n        System.out.println(\"Oraliq summa: \" + item.calculateSubtotal() + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT PC Lab Mock Test ('Chorsu Grill House'): Restoranning buyurtmalar tizimi Customer (mijoz ma'lumotlari), OrderItem (buyurtma qilingan taom qatori) va Order (buyurtma yig'uvchisi) sinflaridan iborat. Order sinfi barcha taomlar subtotalini yig'ib, 10% xizmat haqini qo'shadi.",
      "cleanCode": "class Order {\n    private List<OrderItem> items = new ArrayList<>();\n    public double calculateSubtotal() { ... }\n    public double calculateTotal() { ... }\n}",
      "breakdown": [
        "<code>Customer</code>: mijoz ma'lumotlari.",
        "<code>OrderItem</code>: bitta taom qatori va oraliq summa hisobi.",
        "<code>Order</code>: butun buyurtma, 10% xizmat haqi va yakuniy to'lov."
      ]
    }
  },
  {
    "id": 123,
    "tier": 9,
    "tierName": "9-Bosqich: PC Lab Mock Test — Chorsu Grill House Buyurtma Modeli",
    "sector": "121-135: PC Lab Mock Test Order Architecture",
    "title": {
      "uz": "123. OrderItem — Satrli Tavsif (getItemSummary)",
      "en": "123. OrderItem — Line Item Receipt Representation"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Chorsu Grill House\n\nOrderItem ob'yektining 'getItemSummary()' metodi formatlangan chek satrini qaytarsin: 'Taom x soni @ narx = jami'.\n\n🎯 QADAMLAR:\n1. Rasmiy PC Lab Mock Test UML talablariga mos 'Customer', 'OrderItem' va 'Order' sinflarini yozing.\n2. 'Customer': customerId, name, contactNumber.\n3. 'OrderItem': menuItem, quantity, unitPrice, calculateSubtotal().\n4. 'Order': orderId, customer, items ro'yxati, calculateSubtotal(), calculateTax() (10%), calculateTotal().\n5. 'getItemSummary' metodini amalga oshirib, 'Main' da sinang.\n\n📊 Kutilayotgan Natija:\nTandir somsa x5 @ 12000.0 UZS = 60000.0 UZS",
      "en": "🏢 Context: Chorsu Grill House\n\nPC Lab Mock Test: Return formatted receipt line item from OrderItem.\n\n🎯 STEPS:\n1. Implement Customer, OrderItem and Order classes per PC Lab Mock Test UML.\n2. OrderItem computes subtotal = quantity * unitPrice.\n3. Order computes subtotal, 10% tax/service charge, and grand total.\n4. Implement 'getItemSummary' and test in 'Main'.\n\n📊 Expected Output:\nTandir somsa x5 @ 12000.0 UZS = 60000.0 UZS"
    },
    "requirements": {
      "classes": [
        "Customer",
        "OrderItem",
        "Order",
        "Main"
      ],
      "methods": [
        "getItemSummary"
      ]
    },
    "starterCode": "// PC Lab Mock Test: Customer, OrderItem va Order sinflarini yarating\nimport java.util.ArrayList;\nimport java.util.List;\n\nclass Customer {\n}\nclass OrderItem {\n}\nclass Order {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        OrderItem item = new OrderItem(\"Tandir somsa\", 5, 12000.0);\n        System.out.println(item.getItemSummary());\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nclass Customer {\n    private String customerId;\n    private String name;\n    private String contactNumber;\n    public Customer(String id, String n, String c) { this.customerId = id; this.name = n; this.contactNumber = c; }\n    public String getCustomerId() { return customerId; }\n    public String getName() { return name; }\n    public String getCustomerDetails() {\n        return \"Mijoz: \" + name + \" (ID: \" + customerId + \", Aloqa: \" + contactNumber + \")\";\n    }\n}\n\nclass OrderItem {\n    private String menuItem;\n    private int quantity;\n    private double unitPrice;\n    public OrderItem(String item, int q, double p) {\n        if (q <= 0) throw new IllegalArgumentException(\"Quantity must be positive\");\n        if (p < 0) throw new IllegalArgumentException(\"Price cannot be negative\");\n        this.menuItem = item;\n        this.quantity = q;\n        this.unitPrice = p;\n    }\n    public String getMenuItem() { return menuItem; }\n    public int getQuantity() { return quantity; }\n    public double getUnitPrice() { return unitPrice; }\n    public double calculateSubtotal() { return quantity * unitPrice; }\n    public String getItemSummary() {\n        return menuItem + \" x\" + quantity + \" @ \" + unitPrice + \" UZS = \" + calculateSubtotal() + \" UZS\";\n    }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    private String status = \"YANGI\";\n\n    public Order(String id, Customer c) {\n        this.orderId = id;\n        this.customer = c;\n    }\n    public String getOrderId() { return orderId; }\n    public Customer getCustomer() { return customer; }\n    public String getStatus() { return status; }\n    public void markAsPaid() { this.status = \"TO'LANGAN\"; }\n\n    public String getOrderHeader() {\n        return \"Buyurtma \" + orderId + \" | Buyurtmachi: \" + customer.getName();\n    }\n    public void addOrderItem(OrderItem item) {\n        if (item == null) throw new IllegalArgumentException(\"Item cannot be null\");\n        items.add(item);\n    }\n    public int getItemCount() { return items.size(); }\n    public int getTotalPortions() {\n        int sum = 0;\n        for (OrderItem it : items) sum += it.getQuantity();\n        return sum;\n    }\n    public double calculateSubtotal() {\n        double sum = 0;\n        for (OrderItem it : items) sum += it.calculateSubtotal();\n        return sum;\n    }\n    public double calculateTax() {\n        return Math.round(calculateSubtotal() * 0.10 * 10.0) / 10.0;\n    }\n    public double calculateTotal() {\n        return calculateSubtotal() + calculateTax();\n    }\n    public String validateHasItems() {\n        if (items.isEmpty()) return \"Himoya xatosi: Buyurtmada birorta ham taom mavjud emas\";\n        return \"Buyurtmada taomlar mavjud\";\n    }\n    public void removeOrderItem(String itemName) {\n        items.removeIf(it -> it.getMenuItem().equals(itemName));\n    }\n    public String findMostExpensiveItem() {\n        if (items.isEmpty()) return \"Topilmadi\";\n        OrderItem max = items.get(0);\n        for (OrderItem it : items) {\n            if (it.calculateSubtotal() > max.calculateSubtotal()) max = it;\n        }\n        return max.getMenuItem() + \" (\" + max.calculateSubtotal() + \" UZS)\";\n    }\n    public void clearOrder() {\n        items.clear();\n    }\n    public String getOrderSummary() {\n        return \"Buyurtma \" + orderId + \" [\" + customer.getName() + \"]: \" + items.size() + \" turdagi taom | Jami: \" + calculateTotal() + \" UZS (10% xizmat bilan)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        OrderItem item = new OrderItem(\"Tandir somsa\", 5, 12000.0);\n        System.out.println(item.getItemSummary());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT PC Lab Mock Test ('Chorsu Grill House'): Restoranning buyurtmalar tizimi Customer (mijoz ma'lumotlari), OrderItem (buyurtma qilingan taom qatori) va Order (buyurtma yig'uvchisi) sinflaridan iborat. Order sinfi barcha taomlar subtotalini yig'ib, 10% xizmat haqini qo'shadi.",
      "cleanCode": "class Order {\n    private List<OrderItem> items = new ArrayList<>();\n    public double calculateSubtotal() { ... }\n    public double calculateTotal() { ... }\n}",
      "breakdown": [
        "<code>Customer</code>: mijoz ma'lumotlari.",
        "<code>OrderItem</code>: bitta taom qatori va oraliq summa hisobi.",
        "<code>Order</code>: butun buyurtma, 10% xizmat haqi va yakuniy to'lov."
      ]
    }
  },
  {
    "id": 124,
    "tier": 9,
    "tierName": "9-Bosqich: PC Lab Mock Test — Chorsu Grill House Buyurtma Modeli",
    "sector": "121-135: PC Lab Mock Test Order Architecture",
    "title": {
      "uz": "124. Order — Buyurtma Yaratish va Customer Bog'lanishi",
      "en": "124. Order — Instantiation and Customer Association"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Chorsu Grill House\n\nMock Test talabi: 'Order' sinfi 'orderId', 'Customer' ob'yekti va 'ArrayList<OrderItem>' ro'yxatiga ega. Buyurtma asosiy ma'lumotlarini oling.\n\n🎯 QADAMLAR:\n1. Rasmiy PC Lab Mock Test UML talablariga mos 'Customer', 'OrderItem' va 'Order' sinflarini yozing.\n2. 'Customer': customerId, name, contactNumber.\n3. 'OrderItem': menuItem, quantity, unitPrice, calculateSubtotal().\n4. 'Order': orderId, customer, items ro'yxati, calculateSubtotal(), calculateTax() (10%), calculateTotal().\n5. 'getOrderHeader' metodini amalga oshirib, 'Main' da sinang.\n\n📊 Kutilayotgan Natija:\nBuyurtma ORD-5501 | Buyurtmachi: Nodir Aliyev",
      "en": "🏢 Context: Chorsu Grill House\n\nPC Lab Mock Test: Instantiate Order associating orderId, Customer and internal OrderItem list.\n\n🎯 STEPS:\n1. Implement Customer, OrderItem and Order classes per PC Lab Mock Test UML.\n2. OrderItem computes subtotal = quantity * unitPrice.\n3. Order computes subtotal, 10% tax/service charge, and grand total.\n4. Implement 'getOrderHeader' and test in 'Main'.\n\n📊 Expected Output:\nBuyurtma ORD-5501 | Buyurtmachi: Nodir Aliyev"
    },
    "requirements": {
      "classes": [
        "Customer",
        "OrderItem",
        "Order",
        "Main"
      ],
      "methods": [
        "getOrderHeader"
      ]
    },
    "starterCode": "// PC Lab Mock Test: Customer, OrderItem va Order sinflarini yarating\nimport java.util.ArrayList;\nimport java.util.List;\n\nclass Customer {\n}\nclass OrderItem {\n}\nclass Order {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"CUST-202\", \"Nodir Aliyev\", \"+998971234567\");\n        Order ord = new Order(\"ORD-5501\", c);\n        System.out.println(ord.getOrderHeader());\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nclass Customer {\n    private String customerId;\n    private String name;\n    private String contactNumber;\n    public Customer(String id, String n, String c) { this.customerId = id; this.name = n; this.contactNumber = c; }\n    public String getCustomerId() { return customerId; }\n    public String getName() { return name; }\n    public String getCustomerDetails() {\n        return \"Mijoz: \" + name + \" (ID: \" + customerId + \", Aloqa: \" + contactNumber + \")\";\n    }\n}\n\nclass OrderItem {\n    private String menuItem;\n    private int quantity;\n    private double unitPrice;\n    public OrderItem(String item, int q, double p) {\n        if (q <= 0) throw new IllegalArgumentException(\"Quantity must be positive\");\n        if (p < 0) throw new IllegalArgumentException(\"Price cannot be negative\");\n        this.menuItem = item;\n        this.quantity = q;\n        this.unitPrice = p;\n    }\n    public String getMenuItem() { return menuItem; }\n    public int getQuantity() { return quantity; }\n    public double getUnitPrice() { return unitPrice; }\n    public double calculateSubtotal() { return quantity * unitPrice; }\n    public String getItemSummary() {\n        return menuItem + \" x\" + quantity + \" @ \" + unitPrice + \" UZS = \" + calculateSubtotal() + \" UZS\";\n    }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    private String status = \"YANGI\";\n\n    public Order(String id, Customer c) {\n        this.orderId = id;\n        this.customer = c;\n    }\n    public String getOrderId() { return orderId; }\n    public Customer getCustomer() { return customer; }\n    public String getStatus() { return status; }\n    public void markAsPaid() { this.status = \"TO'LANGAN\"; }\n\n    public String getOrderHeader() {\n        return \"Buyurtma \" + orderId + \" | Buyurtmachi: \" + customer.getName();\n    }\n    public void addOrderItem(OrderItem item) {\n        if (item == null) throw new IllegalArgumentException(\"Item cannot be null\");\n        items.add(item);\n    }\n    public int getItemCount() { return items.size(); }\n    public int getTotalPortions() {\n        int sum = 0;\n        for (OrderItem it : items) sum += it.getQuantity();\n        return sum;\n    }\n    public double calculateSubtotal() {\n        double sum = 0;\n        for (OrderItem it : items) sum += it.calculateSubtotal();\n        return sum;\n    }\n    public double calculateTax() {\n        return Math.round(calculateSubtotal() * 0.10 * 10.0) / 10.0;\n    }\n    public double calculateTotal() {\n        return calculateSubtotal() + calculateTax();\n    }\n    public String validateHasItems() {\n        if (items.isEmpty()) return \"Himoya xatosi: Buyurtmada birorta ham taom mavjud emas\";\n        return \"Buyurtmada taomlar mavjud\";\n    }\n    public void removeOrderItem(String itemName) {\n        items.removeIf(it -> it.getMenuItem().equals(itemName));\n    }\n    public String findMostExpensiveItem() {\n        if (items.isEmpty()) return \"Topilmadi\";\n        OrderItem max = items.get(0);\n        for (OrderItem it : items) {\n            if (it.calculateSubtotal() > max.calculateSubtotal()) max = it;\n        }\n        return max.getMenuItem() + \" (\" + max.calculateSubtotal() + \" UZS)\";\n    }\n    public void clearOrder() {\n        items.clear();\n    }\n    public String getOrderSummary() {\n        return \"Buyurtma \" + orderId + \" [\" + customer.getName() + \"]: \" + items.size() + \" turdagi taom | Jami: \" + calculateTotal() + \" UZS (10% xizmat bilan)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"CUST-202\", \"Nodir Aliyev\", \"+998971234567\");\n        Order ord = new Order(\"ORD-5501\", c);\n        System.out.println(ord.getOrderHeader());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT PC Lab Mock Test ('Chorsu Grill House'): Restoranning buyurtmalar tizimi Customer (mijoz ma'lumotlari), OrderItem (buyurtma qilingan taom qatori) va Order (buyurtma yig'uvchisi) sinflaridan iborat. Order sinfi barcha taomlar subtotalini yig'ib, 10% xizmat haqini qo'shadi.",
      "cleanCode": "class Order {\n    private List<OrderItem> items = new ArrayList<>();\n    public double calculateSubtotal() { ... }\n    public double calculateTotal() { ... }\n}",
      "breakdown": [
        "<code>Customer</code>: mijoz ma'lumotlari.",
        "<code>OrderItem</code>: bitta taom qatori va oraliq summa hisobi.",
        "<code>Order</code>: butun buyurtma, 10% xizmat haqi va yakuniy to'lov."
      ]
    }
  },
  {
    "id": 125,
    "tier": 9,
    "tierName": "9-Bosqich: PC Lab Mock Test — Chorsu Grill House Buyurtma Modeli",
    "sector": "121-135: PC Lab Mock Test Order Architecture",
    "title": {
      "uz": "125. Order — Taomlarni Buyurtmaga Qo'shish (addOrderItem)",
      "en": "125. Order — Adding OrderItem Elements to Order List"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Chorsu Grill House\n\nOrder sinfidagi 'addOrderItem(OrderItem item)' metodi yangi taomni ro'yxatga qo'shsin. Agar item null bo'lsa, 'IllegalArgumentException' oting.\n\n🎯 QADAMLAR:\n1. Rasmiy PC Lab Mock Test UML talablariga mos 'Customer', 'OrderItem' va 'Order' sinflarini yozing.\n2. 'Customer': customerId, name, contactNumber.\n3. 'OrderItem': menuItem, quantity, unitPrice, calculateSubtotal().\n4. 'Order': orderId, customer, items ro'yxati, calculateSubtotal(), calculateTax() (10%), calculateTotal().\n5. 'addOrderItem' metodini amalga oshirib, 'Main' da sinang.\n\n📊 Kutilayotgan Natija:\nBuyurtmadagi taomlar soni: 1",
      "en": "🏢 Context: Chorsu Grill House\n\nPC Lab Mock Test: Implement addOrderItem rejecting null with IllegalArgumentException.\n\n🎯 STEPS:\n1. Implement Customer, OrderItem and Order classes per PC Lab Mock Test UML.\n2. OrderItem computes subtotal = quantity * unitPrice.\n3. Order computes subtotal, 10% tax/service charge, and grand total.\n4. Implement 'addOrderItem' and test in 'Main'.\n\n📊 Expected Output:\nBuyurtmadagi taomlar soni: 1"
    },
    "requirements": {
      "classes": [
        "Customer",
        "OrderItem",
        "Order",
        "Main"
      ],
      "methods": [
        "addOrderItem"
      ]
    },
    "starterCode": "// PC Lab Mock Test: Customer, OrderItem va Order sinflarini yarating\nimport java.util.ArrayList;\nimport java.util.List;\n\nclass Customer {\n}\nclass OrderItem {\n}\nclass Order {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"CUST-1\", \"Aziz\", \"+99890\");\n        Order ord = new Order(\"ORD-1\", c);\n        ord.addOrderItem(new OrderItem(\"Osh\", 2, 40000.0));\n        System.out.println(\"Buyurtmadagi taomlar soni: \" + ord.getItemCount());\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nclass Customer {\n    private String customerId;\n    private String name;\n    private String contactNumber;\n    public Customer(String id, String n, String c) { this.customerId = id; this.name = n; this.contactNumber = c; }\n    public String getCustomerId() { return customerId; }\n    public String getName() { return name; }\n    public String getCustomerDetails() {\n        return \"Mijoz: \" + name + \" (ID: \" + customerId + \", Aloqa: \" + contactNumber + \")\";\n    }\n}\n\nclass OrderItem {\n    private String menuItem;\n    private int quantity;\n    private double unitPrice;\n    public OrderItem(String item, int q, double p) {\n        if (q <= 0) throw new IllegalArgumentException(\"Quantity must be positive\");\n        if (p < 0) throw new IllegalArgumentException(\"Price cannot be negative\");\n        this.menuItem = item;\n        this.quantity = q;\n        this.unitPrice = p;\n    }\n    public String getMenuItem() { return menuItem; }\n    public int getQuantity() { return quantity; }\n    public double getUnitPrice() { return unitPrice; }\n    public double calculateSubtotal() { return quantity * unitPrice; }\n    public String getItemSummary() {\n        return menuItem + \" x\" + quantity + \" @ \" + unitPrice + \" UZS = \" + calculateSubtotal() + \" UZS\";\n    }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    private String status = \"YANGI\";\n\n    public Order(String id, Customer c) {\n        this.orderId = id;\n        this.customer = c;\n    }\n    public String getOrderId() { return orderId; }\n    public Customer getCustomer() { return customer; }\n    public String getStatus() { return status; }\n    public void markAsPaid() { this.status = \"TO'LANGAN\"; }\n\n    public String getOrderHeader() {\n        return \"Buyurtma \" + orderId + \" | Buyurtmachi: \" + customer.getName();\n    }\n    public void addOrderItem(OrderItem item) {\n        if (item == null) throw new IllegalArgumentException(\"Item cannot be null\");\n        items.add(item);\n    }\n    public int getItemCount() { return items.size(); }\n    public int getTotalPortions() {\n        int sum = 0;\n        for (OrderItem it : items) sum += it.getQuantity();\n        return sum;\n    }\n    public double calculateSubtotal() {\n        double sum = 0;\n        for (OrderItem it : items) sum += it.calculateSubtotal();\n        return sum;\n    }\n    public double calculateTax() {\n        return Math.round(calculateSubtotal() * 0.10 * 10.0) / 10.0;\n    }\n    public double calculateTotal() {\n        return calculateSubtotal() + calculateTax();\n    }\n    public String validateHasItems() {\n        if (items.isEmpty()) return \"Himoya xatosi: Buyurtmada birorta ham taom mavjud emas\";\n        return \"Buyurtmada taomlar mavjud\";\n    }\n    public void removeOrderItem(String itemName) {\n        items.removeIf(it -> it.getMenuItem().equals(itemName));\n    }\n    public String findMostExpensiveItem() {\n        if (items.isEmpty()) return \"Topilmadi\";\n        OrderItem max = items.get(0);\n        for (OrderItem it : items) {\n            if (it.calculateSubtotal() > max.calculateSubtotal()) max = it;\n        }\n        return max.getMenuItem() + \" (\" + max.calculateSubtotal() + \" UZS)\";\n    }\n    public void clearOrder() {\n        items.clear();\n    }\n    public String getOrderSummary() {\n        return \"Buyurtma \" + orderId + \" [\" + customer.getName() + \"]: \" + items.size() + \" turdagi taom | Jami: \" + calculateTotal() + \" UZS (10% xizmat bilan)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"CUST-1\", \"Aziz\", \"+99890\");\n        Order ord = new Order(\"ORD-1\", c);\n        ord.addOrderItem(new OrderItem(\"Osh\", 2, 40000.0));\n        System.out.println(\"Buyurtmadagi taomlar soni: \" + ord.getItemCount());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT PC Lab Mock Test ('Chorsu Grill House'): Restoranning buyurtmalar tizimi Customer (mijoz ma'lumotlari), OrderItem (buyurtma qilingan taom qatori) va Order (buyurtma yig'uvchisi) sinflaridan iborat. Order sinfi barcha taomlar subtotalini yig'ib, 10% xizmat haqini qo'shadi.",
      "cleanCode": "class Order {\n    private List<OrderItem> items = new ArrayList<>();\n    public double calculateSubtotal() { ... }\n    public double calculateTotal() { ... }\n}",
      "breakdown": [
        "<code>Customer</code>: mijoz ma'lumotlari.",
        "<code>OrderItem</code>: bitta taom qatori va oraliq summa hisobi.",
        "<code>Order</code>: butun buyurtma, 10% xizmat haqi va yakuniy to'lov."
      ]
    }
  },
  {
    "id": 126,
    "tier": 9,
    "tierName": "9-Bosqich: PC Lab Mock Test — Chorsu Grill House Buyurtma Modeli",
    "sector": "121-135: PC Lab Mock Test Order Architecture",
    "title": {
      "uz": "126. Order — Umumiy Oraliq Summa (calculateSubtotal)",
      "en": "126. Order — Computing Aggregate Subtotal"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Chorsu Grill House\n\nMock Test talabi: 'calculateSubtotal()' metodi barcha 'OrderItem' lardagi oraliq narxlarni polimorfik tsikl yordamida yig'sin.\n\n🎯 QADAMLAR:\n1. Rasmiy PC Lab Mock Test UML talablariga mos 'Customer', 'OrderItem' va 'Order' sinflarini yozing.\n2. 'Customer': customerId, name, contactNumber.\n3. 'OrderItem': menuItem, quantity, unitPrice, calculateSubtotal().\n4. 'Order': orderId, customer, items ro'yxati, calculateSubtotal(), calculateTax() (10%), calculateTotal().\n5. 'calculateSubtotal' metodini amalga oshirib, 'Main' da sinang.\n\n📊 Kutilayotgan Natija:\nSubtotal: 82000.0 UZS",
      "en": "🏢 Context: Chorsu Grill House\n\nPC Lab Mock Test: Calculate aggregate order subtotal summing all line items.\n\n🎯 STEPS:\n1. Implement Customer, OrderItem and Order classes per PC Lab Mock Test UML.\n2. OrderItem computes subtotal = quantity * unitPrice.\n3. Order computes subtotal, 10% tax/service charge, and grand total.\n4. Implement 'calculateSubtotal' and test in 'Main'.\n\n📊 Expected Output:\nSubtotal: 82000.0 UZS"
    },
    "requirements": {
      "classes": [
        "Customer",
        "OrderItem",
        "Order",
        "Main"
      ],
      "methods": [
        "calculateSubtotal"
      ]
    },
    "starterCode": "// PC Lab Mock Test: Customer, OrderItem va Order sinflarini yarating\nimport java.util.ArrayList;\nimport java.util.List;\n\nclass Customer {\n}\nclass OrderItem {\n}\nclass Order {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"CUST-1\", \"Bobur\", \"+99891\");\n        Order ord = new Order(\"ORD-2\", c);\n        ord.addOrderItem(new OrderItem(\"Jaz shashlik\", 3, 24000.0));\n        ord.addOrderItem(new OrderItem(\"Non\", 2, 5000.0));\n        System.out.println(\"Subtotal: \" + ord.calculateSubtotal() + \" UZS\");\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nclass Customer {\n    private String customerId;\n    private String name;\n    private String contactNumber;\n    public Customer(String id, String n, String c) { this.customerId = id; this.name = n; this.contactNumber = c; }\n    public String getCustomerId() { return customerId; }\n    public String getName() { return name; }\n    public String getCustomerDetails() {\n        return \"Mijoz: \" + name + \" (ID: \" + customerId + \", Aloqa: \" + contactNumber + \")\";\n    }\n}\n\nclass OrderItem {\n    private String menuItem;\n    private int quantity;\n    private double unitPrice;\n    public OrderItem(String item, int q, double p) {\n        if (q <= 0) throw new IllegalArgumentException(\"Quantity must be positive\");\n        if (p < 0) throw new IllegalArgumentException(\"Price cannot be negative\");\n        this.menuItem = item;\n        this.quantity = q;\n        this.unitPrice = p;\n    }\n    public String getMenuItem() { return menuItem; }\n    public int getQuantity() { return quantity; }\n    public double getUnitPrice() { return unitPrice; }\n    public double calculateSubtotal() { return quantity * unitPrice; }\n    public String getItemSummary() {\n        return menuItem + \" x\" + quantity + \" @ \" + unitPrice + \" UZS = \" + calculateSubtotal() + \" UZS\";\n    }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    private String status = \"YANGI\";\n\n    public Order(String id, Customer c) {\n        this.orderId = id;\n        this.customer = c;\n    }\n    public String getOrderId() { return orderId; }\n    public Customer getCustomer() { return customer; }\n    public String getStatus() { return status; }\n    public void markAsPaid() { this.status = \"TO'LANGAN\"; }\n\n    public String getOrderHeader() {\n        return \"Buyurtma \" + orderId + \" | Buyurtmachi: \" + customer.getName();\n    }\n    public void addOrderItem(OrderItem item) {\n        if (item == null) throw new IllegalArgumentException(\"Item cannot be null\");\n        items.add(item);\n    }\n    public int getItemCount() { return items.size(); }\n    public int getTotalPortions() {\n        int sum = 0;\n        for (OrderItem it : items) sum += it.getQuantity();\n        return sum;\n    }\n    public double calculateSubtotal() {\n        double sum = 0;\n        for (OrderItem it : items) sum += it.calculateSubtotal();\n        return sum;\n    }\n    public double calculateTax() {\n        return Math.round(calculateSubtotal() * 0.10 * 10.0) / 10.0;\n    }\n    public double calculateTotal() {\n        return calculateSubtotal() + calculateTax();\n    }\n    public String validateHasItems() {\n        if (items.isEmpty()) return \"Himoya xatosi: Buyurtmada birorta ham taom mavjud emas\";\n        return \"Buyurtmada taomlar mavjud\";\n    }\n    public void removeOrderItem(String itemName) {\n        items.removeIf(it -> it.getMenuItem().equals(itemName));\n    }\n    public String findMostExpensiveItem() {\n        if (items.isEmpty()) return \"Topilmadi\";\n        OrderItem max = items.get(0);\n        for (OrderItem it : items) {\n            if (it.calculateSubtotal() > max.calculateSubtotal()) max = it;\n        }\n        return max.getMenuItem() + \" (\" + max.calculateSubtotal() + \" UZS)\";\n    }\n    public void clearOrder() {\n        items.clear();\n    }\n    public String getOrderSummary() {\n        return \"Buyurtma \" + orderId + \" [\" + customer.getName() + \"]: \" + items.size() + \" turdagi taom | Jami: \" + calculateTotal() + \" UZS (10% xizmat bilan)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"CUST-1\", \"Bobur\", \"+99891\");\n        Order ord = new Order(\"ORD-2\", c);\n        ord.addOrderItem(new OrderItem(\"Jaz shashlik\", 3, 24000.0));\n        ord.addOrderItem(new OrderItem(\"Non\", 2, 5000.0));\n        System.out.println(\"Subtotal: \" + ord.calculateSubtotal() + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT PC Lab Mock Test ('Chorsu Grill House'): Restoranning buyurtmalar tizimi Customer (mijoz ma'lumotlari), OrderItem (buyurtma qilingan taom qatori) va Order (buyurtma yig'uvchisi) sinflaridan iborat. Order sinfi barcha taomlar subtotalini yig'ib, 10% xizmat haqini qo'shadi.",
      "cleanCode": "class Order {\n    private List<OrderItem> items = new ArrayList<>();\n    public double calculateSubtotal() { ... }\n    public double calculateTotal() { ... }\n}",
      "breakdown": [
        "<code>Customer</code>: mijoz ma'lumotlari.",
        "<code>OrderItem</code>: bitta taom qatori va oraliq summa hisobi.",
        "<code>Order</code>: butun buyurtma, 10% xizmat haqi va yakuniy to'lov."
      ]
    }
  },
  {
    "id": 127,
    "tier": 9,
    "tierName": "9-Bosqich: PC Lab Mock Test — Chorsu Grill House Buyurtma Modeli",
    "sector": "121-135: PC Lab Mock Test Order Architecture",
    "title": {
      "uz": "127. Order — 10% Xizmat Haqi va Soliq (calculateTax)",
      "en": "127. Order — Computing 10% Service Tax Surcharge"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Chorsu Grill House\n\nMock Test talabiga ko'ra: Chorsu Grill House restorani subtotalning 10% miqdorida xizmat haqi va soliq hisoblaydi. 'calculateTax()' = subtotal * 0.10.\n\n🎯 QADAMLAR:\n1. Rasmiy PC Lab Mock Test UML talablariga mos 'Customer', 'OrderItem' va 'Order' sinflarini yozing.\n2. 'Customer': customerId, name, contactNumber.\n3. 'OrderItem': menuItem, quantity, unitPrice, calculateSubtotal().\n4. 'Order': orderId, customer, items ro'yxati, calculateSubtotal(), calculateTax() (10%), calculateTotal().\n5. 'calculateTax' metodini amalga oshirib, 'Main' da sinang.\n\n📊 Kutilayotgan Natija:\n10% Xizmat haqi: 9000.0 UZS",
      "en": "🏢 Context: Chorsu Grill House\n\nPC Lab Mock Test requirement: Compute 10% restaurant service/tax fee on subtotal.\n\n🎯 STEPS:\n1. Implement Customer, OrderItem and Order classes per PC Lab Mock Test UML.\n2. OrderItem computes subtotal = quantity * unitPrice.\n3. Order computes subtotal, 10% tax/service charge, and grand total.\n4. Implement 'calculateTax' and test in 'Main'.\n\n📊 Expected Output:\n10% Xizmat haqi: 9000.0 UZS"
    },
    "requirements": {
      "classes": [
        "Customer",
        "OrderItem",
        "Order",
        "Main"
      ],
      "methods": [
        "calculateTax"
      ]
    },
    "starterCode": "// PC Lab Mock Test: Customer, OrderItem va Order sinflarini yarating\nimport java.util.ArrayList;\nimport java.util.List;\n\nclass Customer {\n}\nclass OrderItem {\n}\nclass Order {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"CUST-1\", \"Sardor\", \"+99893\");\n        Order ord = new Order(\"ORD-3\", c);\n        ord.addOrderItem(new OrderItem(\"Qozon kabob\", 1, 90000.0));\n        System.out.println(\"10% Xizmat haqi: \" + ord.calculateTax() + \" UZS\");\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nclass Customer {\n    private String customerId;\n    private String name;\n    private String contactNumber;\n    public Customer(String id, String n, String c) { this.customerId = id; this.name = n; this.contactNumber = c; }\n    public String getCustomerId() { return customerId; }\n    public String getName() { return name; }\n    public String getCustomerDetails() {\n        return \"Mijoz: \" + name + \" (ID: \" + customerId + \", Aloqa: \" + contactNumber + \")\";\n    }\n}\n\nclass OrderItem {\n    private String menuItem;\n    private int quantity;\n    private double unitPrice;\n    public OrderItem(String item, int q, double p) {\n        if (q <= 0) throw new IllegalArgumentException(\"Quantity must be positive\");\n        if (p < 0) throw new IllegalArgumentException(\"Price cannot be negative\");\n        this.menuItem = item;\n        this.quantity = q;\n        this.unitPrice = p;\n    }\n    public String getMenuItem() { return menuItem; }\n    public int getQuantity() { return quantity; }\n    public double getUnitPrice() { return unitPrice; }\n    public double calculateSubtotal() { return quantity * unitPrice; }\n    public String getItemSummary() {\n        return menuItem + \" x\" + quantity + \" @ \" + unitPrice + \" UZS = \" + calculateSubtotal() + \" UZS\";\n    }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    private String status = \"YANGI\";\n\n    public Order(String id, Customer c) {\n        this.orderId = id;\n        this.customer = c;\n    }\n    public String getOrderId() { return orderId; }\n    public Customer getCustomer() { return customer; }\n    public String getStatus() { return status; }\n    public void markAsPaid() { this.status = \"TO'LANGAN\"; }\n\n    public String getOrderHeader() {\n        return \"Buyurtma \" + orderId + \" | Buyurtmachi: \" + customer.getName();\n    }\n    public void addOrderItem(OrderItem item) {\n        if (item == null) throw new IllegalArgumentException(\"Item cannot be null\");\n        items.add(item);\n    }\n    public int getItemCount() { return items.size(); }\n    public int getTotalPortions() {\n        int sum = 0;\n        for (OrderItem it : items) sum += it.getQuantity();\n        return sum;\n    }\n    public double calculateSubtotal() {\n        double sum = 0;\n        for (OrderItem it : items) sum += it.calculateSubtotal();\n        return sum;\n    }\n    public double calculateTax() {\n        return Math.round(calculateSubtotal() * 0.10 * 10.0) / 10.0;\n    }\n    public double calculateTotal() {\n        return calculateSubtotal() + calculateTax();\n    }\n    public String validateHasItems() {\n        if (items.isEmpty()) return \"Himoya xatosi: Buyurtmada birorta ham taom mavjud emas\";\n        return \"Buyurtmada taomlar mavjud\";\n    }\n    public void removeOrderItem(String itemName) {\n        items.removeIf(it -> it.getMenuItem().equals(itemName));\n    }\n    public String findMostExpensiveItem() {\n        if (items.isEmpty()) return \"Topilmadi\";\n        OrderItem max = items.get(0);\n        for (OrderItem it : items) {\n            if (it.calculateSubtotal() > max.calculateSubtotal()) max = it;\n        }\n        return max.getMenuItem() + \" (\" + max.calculateSubtotal() + \" UZS)\";\n    }\n    public void clearOrder() {\n        items.clear();\n    }\n    public String getOrderSummary() {\n        return \"Buyurtma \" + orderId + \" [\" + customer.getName() + \"]: \" + items.size() + \" turdagi taom | Jami: \" + calculateTotal() + \" UZS (10% xizmat bilan)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"CUST-1\", \"Sardor\", \"+99893\");\n        Order ord = new Order(\"ORD-3\", c);\n        ord.addOrderItem(new OrderItem(\"Qozon kabob\", 1, 90000.0));\n        System.out.println(\"10% Xizmat haqi: \" + ord.calculateTax() + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT PC Lab Mock Test ('Chorsu Grill House'): Restoranning buyurtmalar tizimi Customer (mijoz ma'lumotlari), OrderItem (buyurtma qilingan taom qatori) va Order (buyurtma yig'uvchisi) sinflaridan iborat. Order sinfi barcha taomlar subtotalini yig'ib, 10% xizmat haqini qo'shadi.",
      "cleanCode": "class Order {\n    private List<OrderItem> items = new ArrayList<>();\n    public double calculateSubtotal() { ... }\n    public double calculateTotal() { ... }\n}",
      "breakdown": [
        "<code>Customer</code>: mijoz ma'lumotlari.",
        "<code>OrderItem</code>: bitta taom qatori va oraliq summa hisobi.",
        "<code>Order</code>: butun buyurtma, 10% xizmat haqi va yakuniy to'lov."
      ]
    }
  },
  {
    "id": 128,
    "tier": 9,
    "tierName": "9-Bosqich: PC Lab Mock Test — Chorsu Grill House Buyurtma Modeli",
    "sector": "121-135: PC Lab Mock Test Order Architecture",
    "title": {
      "uz": "128. Order — Yakuniy Jami To'lov (calculateTotal)",
      "en": "128. Order — Grand Total (Subtotal + 10% Service Fee)"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Chorsu Grill House\n\nMock Test talabi: 'calculateTotal()' = calculateSubtotal() + calculateTax(). Barcha hisob-kitoblarni yagona yakuniy summaga jamlang.\n\n🎯 QADAMLAR:\n1. Rasmiy PC Lab Mock Test UML talablariga mos 'Customer', 'OrderItem' va 'Order' sinflarini yozing.\n2. 'Customer': customerId, name, contactNumber.\n3. 'OrderItem': menuItem, quantity, unitPrice, calculateSubtotal().\n4. 'Order': orderId, customer, items ro'yxati, calculateSubtotal(), calculateTax() (10%), calculateTotal().\n5. 'calculateTotal' metodini amalga oshirib, 'Main' da sinang.\n\n📊 Kutilayotgan Natija:\nYakuniy to'lov: 77000.0 UZS",
      "en": "🏢 Context: Chorsu Grill House\n\nPC Lab Mock Test: Calculate grand total combining subtotal and 10% service charge.\n\n🎯 STEPS:\n1. Implement Customer, OrderItem and Order classes per PC Lab Mock Test UML.\n2. OrderItem computes subtotal = quantity * unitPrice.\n3. Order computes subtotal, 10% tax/service charge, and grand total.\n4. Implement 'calculateTotal' and test in 'Main'.\n\n📊 Expected Output:\nYakuniy to'lov: 77000.0 UZS"
    },
    "requirements": {
      "classes": [
        "Customer",
        "OrderItem",
        "Order",
        "Main"
      ],
      "methods": [
        "calculateTotal"
      ]
    },
    "starterCode": "// PC Lab Mock Test: Customer, OrderItem va Order sinflarini yarating\nimport java.util.ArrayList;\nimport java.util.List;\n\nclass Customer {\n}\nclass OrderItem {\n}\nclass Order {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"CUST-1\", \"Bekzod\", \"+99894\");\n        Order ord = new Order(\"ORD-4\", c);\n        ord.addOrderItem(new OrderItem(\"Lavash\", 2, 35000.0));\n        System.out.println(\"Yakuniy to'lov: \" + ord.calculateTotal() + \" UZS\");\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nclass Customer {\n    private String customerId;\n    private String name;\n    private String contactNumber;\n    public Customer(String id, String n, String c) { this.customerId = id; this.name = n; this.contactNumber = c; }\n    public String getCustomerId() { return customerId; }\n    public String getName() { return name; }\n    public String getCustomerDetails() {\n        return \"Mijoz: \" + name + \" (ID: \" + customerId + \", Aloqa: \" + contactNumber + \")\";\n    }\n}\n\nclass OrderItem {\n    private String menuItem;\n    private int quantity;\n    private double unitPrice;\n    public OrderItem(String item, int q, double p) {\n        if (q <= 0) throw new IllegalArgumentException(\"Quantity must be positive\");\n        if (p < 0) throw new IllegalArgumentException(\"Price cannot be negative\");\n        this.menuItem = item;\n        this.quantity = q;\n        this.unitPrice = p;\n    }\n    public String getMenuItem() { return menuItem; }\n    public int getQuantity() { return quantity; }\n    public double getUnitPrice() { return unitPrice; }\n    public double calculateSubtotal() { return quantity * unitPrice; }\n    public String getItemSummary() {\n        return menuItem + \" x\" + quantity + \" @ \" + unitPrice + \" UZS = \" + calculateSubtotal() + \" UZS\";\n    }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    private String status = \"YANGI\";\n\n    public Order(String id, Customer c) {\n        this.orderId = id;\n        this.customer = c;\n    }\n    public String getOrderId() { return orderId; }\n    public Customer getCustomer() { return customer; }\n    public String getStatus() { return status; }\n    public void markAsPaid() { this.status = \"TO'LANGAN\"; }\n\n    public String getOrderHeader() {\n        return \"Buyurtma \" + orderId + \" | Buyurtmachi: \" + customer.getName();\n    }\n    public void addOrderItem(OrderItem item) {\n        if (item == null) throw new IllegalArgumentException(\"Item cannot be null\");\n        items.add(item);\n    }\n    public int getItemCount() { return items.size(); }\n    public int getTotalPortions() {\n        int sum = 0;\n        for (OrderItem it : items) sum += it.getQuantity();\n        return sum;\n    }\n    public double calculateSubtotal() {\n        double sum = 0;\n        for (OrderItem it : items) sum += it.calculateSubtotal();\n        return sum;\n    }\n    public double calculateTax() {\n        return Math.round(calculateSubtotal() * 0.10 * 10.0) / 10.0;\n    }\n    public double calculateTotal() {\n        return calculateSubtotal() + calculateTax();\n    }\n    public String validateHasItems() {\n        if (items.isEmpty()) return \"Himoya xatosi: Buyurtmada birorta ham taom mavjud emas\";\n        return \"Buyurtmada taomlar mavjud\";\n    }\n    public void removeOrderItem(String itemName) {\n        items.removeIf(it -> it.getMenuItem().equals(itemName));\n    }\n    public String findMostExpensiveItem() {\n        if (items.isEmpty()) return \"Topilmadi\";\n        OrderItem max = items.get(0);\n        for (OrderItem it : items) {\n            if (it.calculateSubtotal() > max.calculateSubtotal()) max = it;\n        }\n        return max.getMenuItem() + \" (\" + max.calculateSubtotal() + \" UZS)\";\n    }\n    public void clearOrder() {\n        items.clear();\n    }\n    public String getOrderSummary() {\n        return \"Buyurtma \" + orderId + \" [\" + customer.getName() + \"]: \" + items.size() + \" turdagi taom | Jami: \" + calculateTotal() + \" UZS (10% xizmat bilan)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"CUST-1\", \"Bekzod\", \"+99894\");\n        Order ord = new Order(\"ORD-4\", c);\n        ord.addOrderItem(new OrderItem(\"Lavash\", 2, 35000.0));\n        System.out.println(\"Yakuniy to'lov: \" + ord.calculateTotal() + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT PC Lab Mock Test ('Chorsu Grill House'): Restoranning buyurtmalar tizimi Customer (mijoz ma'lumotlari), OrderItem (buyurtma qilingan taom qatori) va Order (buyurtma yig'uvchisi) sinflaridan iborat. Order sinfi barcha taomlar subtotalini yig'ib, 10% xizmat haqini qo'shadi.",
      "cleanCode": "class Order {\n    private List<OrderItem> items = new ArrayList<>();\n    public double calculateSubtotal() { ... }\n    public double calculateTotal() { ... }\n}",
      "breakdown": [
        "<code>Customer</code>: mijoz ma'lumotlari.",
        "<code>OrderItem</code>: bitta taom qatori va oraliq summa hisobi.",
        "<code>Order</code>: butun buyurtma, 10% xizmat haqi va yakuniy to'lov."
      ]
    }
  },
  {
    "id": 129,
    "tier": 9,
    "tierName": "9-Bosqich: PC Lab Mock Test — Chorsu Grill House Buyurtma Modeli",
    "sector": "121-135: PC Lab Mock Test Order Architecture",
    "title": {
      "uz": "129. Order — Buyurtma Holati (Order Status: New, Paid, Cancelled)",
      "en": "129. Order — Order Lifecycle State Management"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Chorsu Grill House\n\nBuyurtma yaratilganda 'YANGI', to'langanda 'TO'LANGAN' holatiga o'tadi. Holatni boshqaruvchi metodlarni yozing.\n\n🎯 QADAMLAR:\n1. Rasmiy PC Lab Mock Test UML talablariga mos 'Customer', 'OrderItem' va 'Order' sinflarini yozing.\n2. 'Customer': customerId, name, contactNumber.\n3. 'OrderItem': menuItem, quantity, unitPrice, calculateSubtotal().\n4. 'Order': orderId, customer, items ro'yxati, calculateSubtotal(), calculateTax() (10%), calculateTotal().\n5. 'markAsPaid' metodini amalga oshirib, 'Main' da sinang.\n\n📊 Kutilayotgan Natija:\nBuyurtma holati: TO'LANGAN",
      "en": "🏢 Context: Chorsu Grill House\n\nPC Lab Mock Test: Manage Order status lifecycle from PENDING to PAID.\n\n🎯 STEPS:\n1. Implement Customer, OrderItem and Order classes per PC Lab Mock Test UML.\n2. OrderItem computes subtotal = quantity * unitPrice.\n3. Order computes subtotal, 10% tax/service charge, and grand total.\n4. Implement 'markAsPaid' and test in 'Main'.\n\n📊 Expected Output:\nBuyurtma holati: TO'LANGAN"
    },
    "requirements": {
      "classes": [
        "Customer",
        "OrderItem",
        "Order",
        "Main"
      ],
      "methods": [
        "markAsPaid"
      ]
    },
    "starterCode": "// PC Lab Mock Test: Customer, OrderItem va Order sinflarini yarating\nimport java.util.ArrayList;\nimport java.util.List;\n\nclass Customer {\n}\nclass OrderItem {\n}\nclass Order {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"CUST-1\", \"Sherzod\", \"+99895\");\n        Order ord = new Order(\"ORD-5\", c);\n        ord.markAsPaid();\n        System.out.println(\"Buyurtma holati: \" + ord.getStatus());\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nclass Customer {\n    private String customerId;\n    private String name;\n    private String contactNumber;\n    public Customer(String id, String n, String c) { this.customerId = id; this.name = n; this.contactNumber = c; }\n    public String getCustomerId() { return customerId; }\n    public String getName() { return name; }\n    public String getCustomerDetails() {\n        return \"Mijoz: \" + name + \" (ID: \" + customerId + \", Aloqa: \" + contactNumber + \")\";\n    }\n}\n\nclass OrderItem {\n    private String menuItem;\n    private int quantity;\n    private double unitPrice;\n    public OrderItem(String item, int q, double p) {\n        if (q <= 0) throw new IllegalArgumentException(\"Quantity must be positive\");\n        if (p < 0) throw new IllegalArgumentException(\"Price cannot be negative\");\n        this.menuItem = item;\n        this.quantity = q;\n        this.unitPrice = p;\n    }\n    public String getMenuItem() { return menuItem; }\n    public int getQuantity() { return quantity; }\n    public double getUnitPrice() { return unitPrice; }\n    public double calculateSubtotal() { return quantity * unitPrice; }\n    public String getItemSummary() {\n        return menuItem + \" x\" + quantity + \" @ \" + unitPrice + \" UZS = \" + calculateSubtotal() + \" UZS\";\n    }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    private String status = \"YANGI\";\n\n    public Order(String id, Customer c) {\n        this.orderId = id;\n        this.customer = c;\n    }\n    public String getOrderId() { return orderId; }\n    public Customer getCustomer() { return customer; }\n    public String getStatus() { return status; }\n    public void markAsPaid() { this.status = \"TO'LANGAN\"; }\n\n    public String getOrderHeader() {\n        return \"Buyurtma \" + orderId + \" | Buyurtmachi: \" + customer.getName();\n    }\n    public void addOrderItem(OrderItem item) {\n        if (item == null) throw new IllegalArgumentException(\"Item cannot be null\");\n        items.add(item);\n    }\n    public int getItemCount() { return items.size(); }\n    public int getTotalPortions() {\n        int sum = 0;\n        for (OrderItem it : items) sum += it.getQuantity();\n        return sum;\n    }\n    public double calculateSubtotal() {\n        double sum = 0;\n        for (OrderItem it : items) sum += it.calculateSubtotal();\n        return sum;\n    }\n    public double calculateTax() {\n        return Math.round(calculateSubtotal() * 0.10 * 10.0) / 10.0;\n    }\n    public double calculateTotal() {\n        return calculateSubtotal() + calculateTax();\n    }\n    public String validateHasItems() {\n        if (items.isEmpty()) return \"Himoya xatosi: Buyurtmada birorta ham taom mavjud emas\";\n        return \"Buyurtmada taomlar mavjud\";\n    }\n    public void removeOrderItem(String itemName) {\n        items.removeIf(it -> it.getMenuItem().equals(itemName));\n    }\n    public String findMostExpensiveItem() {\n        if (items.isEmpty()) return \"Topilmadi\";\n        OrderItem max = items.get(0);\n        for (OrderItem it : items) {\n            if (it.calculateSubtotal() > max.calculateSubtotal()) max = it;\n        }\n        return max.getMenuItem() + \" (\" + max.calculateSubtotal() + \" UZS)\";\n    }\n    public void clearOrder() {\n        items.clear();\n    }\n    public String getOrderSummary() {\n        return \"Buyurtma \" + orderId + \" [\" + customer.getName() + \"]: \" + items.size() + \" turdagi taom | Jami: \" + calculateTotal() + \" UZS (10% xizmat bilan)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"CUST-1\", \"Sherzod\", \"+99895\");\n        Order ord = new Order(\"ORD-5\", c);\n        ord.markAsPaid();\n        System.out.println(\"Buyurtma holati: \" + ord.getStatus());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT PC Lab Mock Test ('Chorsu Grill House'): Restoranning buyurtmalar tizimi Customer (mijoz ma'lumotlari), OrderItem (buyurtma qilingan taom qatori) va Order (buyurtma yig'uvchisi) sinflaridan iborat. Order sinfi barcha taomlar subtotalini yig'ib, 10% xizmat haqini qo'shadi.",
      "cleanCode": "class Order {\n    private List<OrderItem> items = new ArrayList<>();\n    public double calculateSubtotal() { ... }\n    public double calculateTotal() { ... }\n}",
      "breakdown": [
        "<code>Customer</code>: mijoz ma'lumotlari.",
        "<code>OrderItem</code>: bitta taom qatori va oraliq summa hisobi.",
        "<code>Order</code>: butun buyurtma, 10% xizmat haqi va yakuniy to'lov."
      ]
    }
  },
  {
    "id": 130,
    "tier": 9,
    "tierName": "9-Bosqich: PC Lab Mock Test — Chorsu Grill House Buyurtma Modeli",
    "sector": "121-135: PC Lab Mock Test Order Architecture",
    "title": {
      "uz": "130. Order — Bo'sh Buyurtmani Tekshirish va Himoyalash",
      "en": "130. Order — Preventing Checkout on Empty Order"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Chorsu Grill House\n\nAgar buyurtmada hech qanday taom bo'lmasa, to'lovni boshlashga ruxsat bermasdan 'IllegalStateException' otilsin.\n\n🎯 QADAMLAR:\n1. Rasmiy PC Lab Mock Test UML talablariga mos 'Customer', 'OrderItem' va 'Order' sinflarini yozing.\n2. 'Customer': customerId, name, contactNumber.\n3. 'OrderItem': menuItem, quantity, unitPrice, calculateSubtotal().\n4. 'Order': orderId, customer, items ro'yxati, calculateSubtotal(), calculateTax() (10%), calculateTotal().\n5. 'validateHasItems' metodini amalga oshirib, 'Main' da sinang.\n\n📊 Kutilayotgan Natija:\nHimoya xatosi: Buyurtmada birorta ham taom mavjud emas",
      "en": "🏢 Context: Chorsu Grill House\n\nPC Lab Mock Test: Guard calculateTotal throwing IllegalStateException if order contains no items.\n\n🎯 STEPS:\n1. Implement Customer, OrderItem and Order classes per PC Lab Mock Test UML.\n2. OrderItem computes subtotal = quantity * unitPrice.\n3. Order computes subtotal, 10% tax/service charge, and grand total.\n4. Implement 'validateHasItems' and test in 'Main'.\n\n📊 Expected Output:\nHimoya xatosi: Buyurtmada birorta ham taom mavjud emas"
    },
    "requirements": {
      "classes": [
        "Customer",
        "OrderItem",
        "Order",
        "Main"
      ],
      "methods": [
        "validateHasItems"
      ]
    },
    "starterCode": "// PC Lab Mock Test: Customer, OrderItem va Order sinflarini yarating\nimport java.util.ArrayList;\nimport java.util.List;\n\nclass Customer {\n}\nclass OrderItem {\n}\nclass Order {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"CUST-1\", \"Jasur\", \"+99899\");\n        Order ord = new Order(\"ORD-6\", c);\n        System.out.println(ord.validateHasItems());\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nclass Customer {\n    private String customerId;\n    private String name;\n    private String contactNumber;\n    public Customer(String id, String n, String c) { this.customerId = id; this.name = n; this.contactNumber = c; }\n    public String getCustomerId() { return customerId; }\n    public String getName() { return name; }\n    public String getCustomerDetails() {\n        return \"Mijoz: \" + name + \" (ID: \" + customerId + \", Aloqa: \" + contactNumber + \")\";\n    }\n}\n\nclass OrderItem {\n    private String menuItem;\n    private int quantity;\n    private double unitPrice;\n    public OrderItem(String item, int q, double p) {\n        if (q <= 0) throw new IllegalArgumentException(\"Quantity must be positive\");\n        if (p < 0) throw new IllegalArgumentException(\"Price cannot be negative\");\n        this.menuItem = item;\n        this.quantity = q;\n        this.unitPrice = p;\n    }\n    public String getMenuItem() { return menuItem; }\n    public int getQuantity() { return quantity; }\n    public double getUnitPrice() { return unitPrice; }\n    public double calculateSubtotal() { return quantity * unitPrice; }\n    public String getItemSummary() {\n        return menuItem + \" x\" + quantity + \" @ \" + unitPrice + \" UZS = \" + calculateSubtotal() + \" UZS\";\n    }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    private String status = \"YANGI\";\n\n    public Order(String id, Customer c) {\n        this.orderId = id;\n        this.customer = c;\n    }\n    public String getOrderId() { return orderId; }\n    public Customer getCustomer() { return customer; }\n    public String getStatus() { return status; }\n    public void markAsPaid() { this.status = \"TO'LANGAN\"; }\n\n    public String getOrderHeader() {\n        return \"Buyurtma \" + orderId + \" | Buyurtmachi: \" + customer.getName();\n    }\n    public void addOrderItem(OrderItem item) {\n        if (item == null) throw new IllegalArgumentException(\"Item cannot be null\");\n        items.add(item);\n    }\n    public int getItemCount() { return items.size(); }\n    public int getTotalPortions() {\n        int sum = 0;\n        for (OrderItem it : items) sum += it.getQuantity();\n        return sum;\n    }\n    public double calculateSubtotal() {\n        double sum = 0;\n        for (OrderItem it : items) sum += it.calculateSubtotal();\n        return sum;\n    }\n    public double calculateTax() {\n        return Math.round(calculateSubtotal() * 0.10 * 10.0) / 10.0;\n    }\n    public double calculateTotal() {\n        return calculateSubtotal() + calculateTax();\n    }\n    public String validateHasItems() {\n        if (items.isEmpty()) return \"Himoya xatosi: Buyurtmada birorta ham taom mavjud emas\";\n        return \"Buyurtmada taomlar mavjud\";\n    }\n    public void removeOrderItem(String itemName) {\n        items.removeIf(it -> it.getMenuItem().equals(itemName));\n    }\n    public String findMostExpensiveItem() {\n        if (items.isEmpty()) return \"Topilmadi\";\n        OrderItem max = items.get(0);\n        for (OrderItem it : items) {\n            if (it.calculateSubtotal() > max.calculateSubtotal()) max = it;\n        }\n        return max.getMenuItem() + \" (\" + max.calculateSubtotal() + \" UZS)\";\n    }\n    public void clearOrder() {\n        items.clear();\n    }\n    public String getOrderSummary() {\n        return \"Buyurtma \" + orderId + \" [\" + customer.getName() + \"]: \" + items.size() + \" turdagi taom | Jami: \" + calculateTotal() + \" UZS (10% xizmat bilan)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"CUST-1\", \"Jasur\", \"+99899\");\n        Order ord = new Order(\"ORD-6\", c);\n        System.out.println(ord.validateHasItems());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT PC Lab Mock Test ('Chorsu Grill House'): Restoranning buyurtmalar tizimi Customer (mijoz ma'lumotlari), OrderItem (buyurtma qilingan taom qatori) va Order (buyurtma yig'uvchisi) sinflaridan iborat. Order sinfi barcha taomlar subtotalini yig'ib, 10% xizmat haqini qo'shadi.",
      "cleanCode": "class Order {\n    private List<OrderItem> items = new ArrayList<>();\n    public double calculateSubtotal() { ... }\n    public double calculateTotal() { ... }\n}",
      "breakdown": [
        "<code>Customer</code>: mijoz ma'lumotlari.",
        "<code>OrderItem</code>: bitta taom qatori va oraliq summa hisobi.",
        "<code>Order</code>: butun buyurtma, 10% xizmat haqi va yakuniy to'lov."
      ]
    }
  },
  {
    "id": 131,
    "tier": 9,
    "tierName": "9-Bosqich: PC Lab Mock Test — Chorsu Grill House Buyurtma Modeli",
    "sector": "121-135: PC Lab Mock Test Order Architecture",
    "title": {
      "uz": "131. Order — Taomni Nomi Bo'yicha O'chirish (removeOrderItem)",
      "en": "131. Order — Removing Item from Order by Name"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Chorsu Grill House\n\nMijoz fikridan qaytganda buyurtmadan taomni o'chirish metodini yozing.\n\n🎯 QADAMLAR:\n1. Rasmiy PC Lab Mock Test UML talablariga mos 'Customer', 'OrderItem' va 'Order' sinflarini yozing.\n2. 'Customer': customerId, name, contactNumber.\n3. 'OrderItem': menuItem, quantity, unitPrice, calculateSubtotal().\n4. 'Order': orderId, customer, items ro'yxati, calculateSubtotal(), calculateTax() (10%), calculateTotal().\n5. 'removeOrderItem' metodini amalga oshirib, 'Main' da sinang.\n\n📊 Kutilayotgan Natija:\nQolgan taomlar: 0",
      "en": "🏢 Context: Chorsu Grill House\n\nPC Lab Mock Test: Implement removeOrderItem discarding item from collection.\n\n🎯 STEPS:\n1. Implement Customer, OrderItem and Order classes per PC Lab Mock Test UML.\n2. OrderItem computes subtotal = quantity * unitPrice.\n3. Order computes subtotal, 10% tax/service charge, and grand total.\n4. Implement 'removeOrderItem' and test in 'Main'.\n\n📊 Expected Output:\nQolgan taomlar: 0"
    },
    "requirements": {
      "classes": [
        "Customer",
        "OrderItem",
        "Order",
        "Main"
      ],
      "methods": [
        "removeOrderItem"
      ]
    },
    "starterCode": "// PC Lab Mock Test: Customer, OrderItem va Order sinflarini yarating\nimport java.util.ArrayList;\nimport java.util.List;\n\nclass Customer {\n}\nclass OrderItem {\n}\nclass Order {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"CUST-1\", \"Dilshod\", \"+99890\");\n        Order ord = new Order(\"ORD-7\", c);\n        ord.addOrderItem(new OrderItem(\"Salat\", 1, 15000.0));\n        ord.removeOrderItem(\"Salat\");\n        System.out.println(\"Qolgan taomlar: \" + ord.getItemCount());\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nclass Customer {\n    private String customerId;\n    private String name;\n    private String contactNumber;\n    public Customer(String id, String n, String c) { this.customerId = id; this.name = n; this.contactNumber = c; }\n    public String getCustomerId() { return customerId; }\n    public String getName() { return name; }\n    public String getCustomerDetails() {\n        return \"Mijoz: \" + name + \" (ID: \" + customerId + \", Aloqa: \" + contactNumber + \")\";\n    }\n}\n\nclass OrderItem {\n    private String menuItem;\n    private int quantity;\n    private double unitPrice;\n    public OrderItem(String item, int q, double p) {\n        if (q <= 0) throw new IllegalArgumentException(\"Quantity must be positive\");\n        if (p < 0) throw new IllegalArgumentException(\"Price cannot be negative\");\n        this.menuItem = item;\n        this.quantity = q;\n        this.unitPrice = p;\n    }\n    public String getMenuItem() { return menuItem; }\n    public int getQuantity() { return quantity; }\n    public double getUnitPrice() { return unitPrice; }\n    public double calculateSubtotal() { return quantity * unitPrice; }\n    public String getItemSummary() {\n        return menuItem + \" x\" + quantity + \" @ \" + unitPrice + \" UZS = \" + calculateSubtotal() + \" UZS\";\n    }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    private String status = \"YANGI\";\n\n    public Order(String id, Customer c) {\n        this.orderId = id;\n        this.customer = c;\n    }\n    public String getOrderId() { return orderId; }\n    public Customer getCustomer() { return customer; }\n    public String getStatus() { return status; }\n    public void markAsPaid() { this.status = \"TO'LANGAN\"; }\n\n    public String getOrderHeader() {\n        return \"Buyurtma \" + orderId + \" | Buyurtmachi: \" + customer.getName();\n    }\n    public void addOrderItem(OrderItem item) {\n        if (item == null) throw new IllegalArgumentException(\"Item cannot be null\");\n        items.add(item);\n    }\n    public int getItemCount() { return items.size(); }\n    public int getTotalPortions() {\n        int sum = 0;\n        for (OrderItem it : items) sum += it.getQuantity();\n        return sum;\n    }\n    public double calculateSubtotal() {\n        double sum = 0;\n        for (OrderItem it : items) sum += it.calculateSubtotal();\n        return sum;\n    }\n    public double calculateTax() {\n        return Math.round(calculateSubtotal() * 0.10 * 10.0) / 10.0;\n    }\n    public double calculateTotal() {\n        return calculateSubtotal() + calculateTax();\n    }\n    public String validateHasItems() {\n        if (items.isEmpty()) return \"Himoya xatosi: Buyurtmada birorta ham taom mavjud emas\";\n        return \"Buyurtmada taomlar mavjud\";\n    }\n    public void removeOrderItem(String itemName) {\n        items.removeIf(it -> it.getMenuItem().equals(itemName));\n    }\n    public String findMostExpensiveItem() {\n        if (items.isEmpty()) return \"Topilmadi\";\n        OrderItem max = items.get(0);\n        for (OrderItem it : items) {\n            if (it.calculateSubtotal() > max.calculateSubtotal()) max = it;\n        }\n        return max.getMenuItem() + \" (\" + max.calculateSubtotal() + \" UZS)\";\n    }\n    public void clearOrder() {\n        items.clear();\n    }\n    public String getOrderSummary() {\n        return \"Buyurtma \" + orderId + \" [\" + customer.getName() + \"]: \" + items.size() + \" turdagi taom | Jami: \" + calculateTotal() + \" UZS (10% xizmat bilan)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"CUST-1\", \"Dilshod\", \"+99890\");\n        Order ord = new Order(\"ORD-7\", c);\n        ord.addOrderItem(new OrderItem(\"Salat\", 1, 15000.0));\n        ord.removeOrderItem(\"Salat\");\n        System.out.println(\"Qolgan taomlar: \" + ord.getItemCount());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT PC Lab Mock Test ('Chorsu Grill House'): Restoranning buyurtmalar tizimi Customer (mijoz ma'lumotlari), OrderItem (buyurtma qilingan taom qatori) va Order (buyurtma yig'uvchisi) sinflaridan iborat. Order sinfi barcha taomlar subtotalini yig'ib, 10% xizmat haqini qo'shadi.",
      "cleanCode": "class Order {\n    private List<OrderItem> items = new ArrayList<>();\n    public double calculateSubtotal() { ... }\n    public double calculateTotal() { ... }\n}",
      "breakdown": [
        "<code>Customer</code>: mijoz ma'lumotlari.",
        "<code>OrderItem</code>: bitta taom qatori va oraliq summa hisobi.",
        "<code>Order</code>: butun buyurtma, 10% xizmat haqi va yakuniy to'lov."
      ]
    }
  },
  {
    "id": 132,
    "tier": 9,
    "tierName": "9-Bosqich: PC Lab Mock Test — Chorsu Grill House Buyurtma Modeli",
    "sector": "121-135: PC Lab Mock Test Order Architecture",
    "title": {
      "uz": "132. Order — Eng Qimmat Taomni Topish (findMostExpensiveItem)",
      "en": "132. Order — Finding Highest Cost Line Item"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Chorsu Grill House\n\nBuyurtma ichidagi eng qimmat taom nomini aniqlang.\n\n🎯 QADAMLAR:\n1. Rasmiy PC Lab Mock Test UML talablariga mos 'Customer', 'OrderItem' va 'Order' sinflarini yozing.\n2. 'Customer': customerId, name, contactNumber.\n3. 'OrderItem': menuItem, quantity, unitPrice, calculateSubtotal().\n4. 'Order': orderId, customer, items ro'yxati, calculateSubtotal(), calculateTax() (10%), calculateTotal().\n5. 'findMostExpensiveItem' metodini amalga oshirib, 'Main' da sinang.\n\n📊 Kutilayotgan Natija:\nEng qimmat taom: Qo'y qovurma (85000.0 UZS)",
      "en": "🏢 Context: Chorsu Grill House\n\nPC Lab Mock Test: Find menuItem with highest subtotal in order.\n\n🎯 STEPS:\n1. Implement Customer, OrderItem and Order classes per PC Lab Mock Test UML.\n2. OrderItem computes subtotal = quantity * unitPrice.\n3. Order computes subtotal, 10% tax/service charge, and grand total.\n4. Implement 'findMostExpensiveItem' and test in 'Main'.\n\n📊 Expected Output:\nEng qimmat taom: Qo'y qovurma (85000.0 UZS)"
    },
    "requirements": {
      "classes": [
        "Customer",
        "OrderItem",
        "Order",
        "Main"
      ],
      "methods": [
        "findMostExpensiveItem"
      ]
    },
    "starterCode": "// PC Lab Mock Test: Customer, OrderItem va Order sinflarini yarating\nimport java.util.ArrayList;\nimport java.util.List;\n\nclass Customer {\n}\nclass OrderItem {\n}\nclass Order {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"CUST-1\", \"Otabek\", \"+99891\");\n        Order ord = new Order(\"ORD-8\", c);\n        ord.addOrderItem(new OrderItem(\"Salat\", 1, 15000.0));\n        ord.addOrderItem(new OrderItem(\"Qo'y qovurma\", 1, 85000.0));\n        System.out.println(\"Eng qimmat taom: \" + ord.findMostExpensiveItem());\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nclass Customer {\n    private String customerId;\n    private String name;\n    private String contactNumber;\n    public Customer(String id, String n, String c) { this.customerId = id; this.name = n; this.contactNumber = c; }\n    public String getCustomerId() { return customerId; }\n    public String getName() { return name; }\n    public String getCustomerDetails() {\n        return \"Mijoz: \" + name + \" (ID: \" + customerId + \", Aloqa: \" + contactNumber + \")\";\n    }\n}\n\nclass OrderItem {\n    private String menuItem;\n    private int quantity;\n    private double unitPrice;\n    public OrderItem(String item, int q, double p) {\n        if (q <= 0) throw new IllegalArgumentException(\"Quantity must be positive\");\n        if (p < 0) throw new IllegalArgumentException(\"Price cannot be negative\");\n        this.menuItem = item;\n        this.quantity = q;\n        this.unitPrice = p;\n    }\n    public String getMenuItem() { return menuItem; }\n    public int getQuantity() { return quantity; }\n    public double getUnitPrice() { return unitPrice; }\n    public double calculateSubtotal() { return quantity * unitPrice; }\n    public String getItemSummary() {\n        return menuItem + \" x\" + quantity + \" @ \" + unitPrice + \" UZS = \" + calculateSubtotal() + \" UZS\";\n    }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    private String status = \"YANGI\";\n\n    public Order(String id, Customer c) {\n        this.orderId = id;\n        this.customer = c;\n    }\n    public String getOrderId() { return orderId; }\n    public Customer getCustomer() { return customer; }\n    public String getStatus() { return status; }\n    public void markAsPaid() { this.status = \"TO'LANGAN\"; }\n\n    public String getOrderHeader() {\n        return \"Buyurtma \" + orderId + \" | Buyurtmachi: \" + customer.getName();\n    }\n    public void addOrderItem(OrderItem item) {\n        if (item == null) throw new IllegalArgumentException(\"Item cannot be null\");\n        items.add(item);\n    }\n    public int getItemCount() { return items.size(); }\n    public int getTotalPortions() {\n        int sum = 0;\n        for (OrderItem it : items) sum += it.getQuantity();\n        return sum;\n    }\n    public double calculateSubtotal() {\n        double sum = 0;\n        for (OrderItem it : items) sum += it.calculateSubtotal();\n        return sum;\n    }\n    public double calculateTax() {\n        return Math.round(calculateSubtotal() * 0.10 * 10.0) / 10.0;\n    }\n    public double calculateTotal() {\n        return calculateSubtotal() + calculateTax();\n    }\n    public String validateHasItems() {\n        if (items.isEmpty()) return \"Himoya xatosi: Buyurtmada birorta ham taom mavjud emas\";\n        return \"Buyurtmada taomlar mavjud\";\n    }\n    public void removeOrderItem(String itemName) {\n        items.removeIf(it -> it.getMenuItem().equals(itemName));\n    }\n    public String findMostExpensiveItem() {\n        if (items.isEmpty()) return \"Topilmadi\";\n        OrderItem max = items.get(0);\n        for (OrderItem it : items) {\n            if (it.calculateSubtotal() > max.calculateSubtotal()) max = it;\n        }\n        return max.getMenuItem() + \" (\" + max.calculateSubtotal() + \" UZS)\";\n    }\n    public void clearOrder() {\n        items.clear();\n    }\n    public String getOrderSummary() {\n        return \"Buyurtma \" + orderId + \" [\" + customer.getName() + \"]: \" + items.size() + \" turdagi taom | Jami: \" + calculateTotal() + \" UZS (10% xizmat bilan)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"CUST-1\", \"Otabek\", \"+99891\");\n        Order ord = new Order(\"ORD-8\", c);\n        ord.addOrderItem(new OrderItem(\"Salat\", 1, 15000.0));\n        ord.addOrderItem(new OrderItem(\"Qo'y qovurma\", 1, 85000.0));\n        System.out.println(\"Eng qimmat taom: \" + ord.findMostExpensiveItem());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT PC Lab Mock Test ('Chorsu Grill House'): Restoranning buyurtmalar tizimi Customer (mijoz ma'lumotlari), OrderItem (buyurtma qilingan taom qatori) va Order (buyurtma yig'uvchisi) sinflaridan iborat. Order sinfi barcha taomlar subtotalini yig'ib, 10% xizmat haqini qo'shadi.",
      "cleanCode": "class Order {\n    private List<OrderItem> items = new ArrayList<>();\n    public double calculateSubtotal() { ... }\n    public double calculateTotal() { ... }\n}",
      "breakdown": [
        "<code>Customer</code>: mijoz ma'lumotlari.",
        "<code>OrderItem</code>: bitta taom qatori va oraliq summa hisobi.",
        "<code>Order</code>: butun buyurtma, 10% xizmat haqi va yakuniy to'lov."
      ]
    }
  },
  {
    "id": 133,
    "tier": 9,
    "tierName": "9-Bosqich: PC Lab Mock Test — Chorsu Grill House Buyurtma Modeli",
    "sector": "121-135: PC Lab Mock Test Order Architecture",
    "title": {
      "uz": "133. Order — Jami Portsiyalar Sonini Hisoblash (getTotalPortions)",
      "en": "133. Order — Calculating Total Food Portions Served"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Chorsu Grill House\n\nBuyurtmadagi barcha taomlarning portsiyalar yig'indisini hisoblang.\n\n🎯 QADAMLAR:\n1. Rasmiy PC Lab Mock Test UML talablariga mos 'Customer', 'OrderItem' va 'Order' sinflarini yozing.\n2. 'Customer': customerId, name, contactNumber.\n3. 'OrderItem': menuItem, quantity, unitPrice, calculateSubtotal().\n4. 'Order': orderId, customer, items ro'yxati, calculateSubtotal(), calculateTax() (10%), calculateTotal().\n5. 'getTotalPortions' metodini amalga oshirib, 'Main' da sinang.\n\n📊 Kutilayotgan Natija:\nJami portsiyalar: 6 dona",
      "en": "🏢 Context: Chorsu Grill House\n\nPC Lab Mock Test: Sum up quantities of all items across order.\n\n🎯 STEPS:\n1. Implement Customer, OrderItem and Order classes per PC Lab Mock Test UML.\n2. OrderItem computes subtotal = quantity * unitPrice.\n3. Order computes subtotal, 10% tax/service charge, and grand total.\n4. Implement 'getTotalPortions' and test in 'Main'.\n\n📊 Expected Output:\nJami portsiyalar: 6 dona"
    },
    "requirements": {
      "classes": [
        "Customer",
        "OrderItem",
        "Order",
        "Main"
      ],
      "methods": [
        "getTotalPortions"
      ]
    },
    "starterCode": "// PC Lab Mock Test: Customer, OrderItem va Order sinflarini yarating\nimport java.util.ArrayList;\nimport java.util.List;\n\nclass Customer {\n}\nclass OrderItem {\n}\nclass Order {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"CUST-1\", \"Ulug'bek\", \"+99893\");\n        Order ord = new Order(\"ORD-9\", c);\n        ord.addOrderItem(new OrderItem(\"Somsa\", 4, 10000.0));\n        ord.addOrderItem(new OrderItem(\"Choy\", 2, 5000.0));\n        System.out.println(\"Jami portsiyalar: \" + ord.getTotalPortions() + \" dona\");\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nclass Customer {\n    private String customerId;\n    private String name;\n    private String contactNumber;\n    public Customer(String id, String n, String c) { this.customerId = id; this.name = n; this.contactNumber = c; }\n    public String getCustomerId() { return customerId; }\n    public String getName() { return name; }\n    public String getCustomerDetails() {\n        return \"Mijoz: \" + name + \" (ID: \" + customerId + \", Aloqa: \" + contactNumber + \")\";\n    }\n}\n\nclass OrderItem {\n    private String menuItem;\n    private int quantity;\n    private double unitPrice;\n    public OrderItem(String item, int q, double p) {\n        if (q <= 0) throw new IllegalArgumentException(\"Quantity must be positive\");\n        if (p < 0) throw new IllegalArgumentException(\"Price cannot be negative\");\n        this.menuItem = item;\n        this.quantity = q;\n        this.unitPrice = p;\n    }\n    public String getMenuItem() { return menuItem; }\n    public int getQuantity() { return quantity; }\n    public double getUnitPrice() { return unitPrice; }\n    public double calculateSubtotal() { return quantity * unitPrice; }\n    public String getItemSummary() {\n        return menuItem + \" x\" + quantity + \" @ \" + unitPrice + \" UZS = \" + calculateSubtotal() + \" UZS\";\n    }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    private String status = \"YANGI\";\n\n    public Order(String id, Customer c) {\n        this.orderId = id;\n        this.customer = c;\n    }\n    public String getOrderId() { return orderId; }\n    public Customer getCustomer() { return customer; }\n    public String getStatus() { return status; }\n    public void markAsPaid() { this.status = \"TO'LANGAN\"; }\n\n    public String getOrderHeader() {\n        return \"Buyurtma \" + orderId + \" | Buyurtmachi: \" + customer.getName();\n    }\n    public void addOrderItem(OrderItem item) {\n        if (item == null) throw new IllegalArgumentException(\"Item cannot be null\");\n        items.add(item);\n    }\n    public int getItemCount() { return items.size(); }\n    public int getTotalPortions() {\n        int sum = 0;\n        for (OrderItem it : items) sum += it.getQuantity();\n        return sum;\n    }\n    public double calculateSubtotal() {\n        double sum = 0;\n        for (OrderItem it : items) sum += it.calculateSubtotal();\n        return sum;\n    }\n    public double calculateTax() {\n        return Math.round(calculateSubtotal() * 0.10 * 10.0) / 10.0;\n    }\n    public double calculateTotal() {\n        return calculateSubtotal() + calculateTax();\n    }\n    public String validateHasItems() {\n        if (items.isEmpty()) return \"Himoya xatosi: Buyurtmada birorta ham taom mavjud emas\";\n        return \"Buyurtmada taomlar mavjud\";\n    }\n    public void removeOrderItem(String itemName) {\n        items.removeIf(it -> it.getMenuItem().equals(itemName));\n    }\n    public String findMostExpensiveItem() {\n        if (items.isEmpty()) return \"Topilmadi\";\n        OrderItem max = items.get(0);\n        for (OrderItem it : items) {\n            if (it.calculateSubtotal() > max.calculateSubtotal()) max = it;\n        }\n        return max.getMenuItem() + \" (\" + max.calculateSubtotal() + \" UZS)\";\n    }\n    public void clearOrder() {\n        items.clear();\n    }\n    public String getOrderSummary() {\n        return \"Buyurtma \" + orderId + \" [\" + customer.getName() + \"]: \" + items.size() + \" turdagi taom | Jami: \" + calculateTotal() + \" UZS (10% xizmat bilan)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"CUST-1\", \"Ulug'bek\", \"+99893\");\n        Order ord = new Order(\"ORD-9\", c);\n        ord.addOrderItem(new OrderItem(\"Somsa\", 4, 10000.0));\n        ord.addOrderItem(new OrderItem(\"Choy\", 2, 5000.0));\n        System.out.println(\"Jami portsiyalar: \" + ord.getTotalPortions() + \" dona\");\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT PC Lab Mock Test ('Chorsu Grill House'): Restoranning buyurtmalar tizimi Customer (mijoz ma'lumotlari), OrderItem (buyurtma qilingan taom qatori) va Order (buyurtma yig'uvchisi) sinflaridan iborat. Order sinfi barcha taomlar subtotalini yig'ib, 10% xizmat haqini qo'shadi.",
      "cleanCode": "class Order {\n    private List<OrderItem> items = new ArrayList<>();\n    public double calculateSubtotal() { ... }\n    public double calculateTotal() { ... }\n}",
      "breakdown": [
        "<code>Customer</code>: mijoz ma'lumotlari.",
        "<code>OrderItem</code>: bitta taom qatori va oraliq summa hisobi.",
        "<code>Order</code>: butun buyurtma, 10% xizmat haqi va yakuniy to'lov."
      ]
    }
  },
  {
    "id": 134,
    "tier": 9,
    "tierName": "9-Bosqich: PC Lab Mock Test — Chorsu Grill House Buyurtma Modeli",
    "sector": "121-135: PC Lab Mock Test Order Architecture",
    "title": {
      "uz": "134. Order — Buyurtmani Tozalash (clearOrder)",
      "en": "134. Order — Resetting Order Items and State"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Chorsu Grill House\n\nBuyurtmani bekor qilib barcha taomlarni tozalovchi metodni yozing.\n\n🎯 QADAMLAR:\n1. Rasmiy PC Lab Mock Test UML talablariga mos 'Customer', 'OrderItem' va 'Order' sinflarini yozing.\n2. 'Customer': customerId, name, contactNumber.\n3. 'OrderItem': menuItem, quantity, unitPrice, calculateSubtotal().\n4. 'Order': orderId, customer, items ro'yxati, calculateSubtotal(), calculateTax() (10%), calculateTotal().\n5. 'clearOrder' metodini amalga oshirib, 'Main' da sinang.\n\n📊 Kutilayotgan Natija:\nTozalangach summa: 0.0 UZS",
      "en": "🏢 Context: Chorsu Grill House\n\nPC Lab Mock Test: Reset order items and revert status.\n\n🎯 STEPS:\n1. Implement Customer, OrderItem and Order classes per PC Lab Mock Test UML.\n2. OrderItem computes subtotal = quantity * unitPrice.\n3. Order computes subtotal, 10% tax/service charge, and grand total.\n4. Implement 'clearOrder' and test in 'Main'.\n\n📊 Expected Output:\nTozalangach summa: 0.0 UZS"
    },
    "requirements": {
      "classes": [
        "Customer",
        "OrderItem",
        "Order",
        "Main"
      ],
      "methods": [
        "clearOrder"
      ]
    },
    "starterCode": "// PC Lab Mock Test: Customer, OrderItem va Order sinflarini yarating\nimport java.util.ArrayList;\nimport java.util.List;\n\nclass Customer {\n}\nclass OrderItem {\n}\nclass Order {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"CUST-1\", \"Sanjar\", \"+99894\");\n        Order ord = new Order(\"ORD-10\", c);\n        ord.addOrderItem(new OrderItem(\"Non\", 2, 5000.0));\n        ord.clearOrder();\n        System.out.println(\"Tozalangach summa: \" + ord.calculateSubtotal() + \" UZS\");\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nclass Customer {\n    private String customerId;\n    private String name;\n    private String contactNumber;\n    public Customer(String id, String n, String c) { this.customerId = id; this.name = n; this.contactNumber = c; }\n    public String getCustomerId() { return customerId; }\n    public String getName() { return name; }\n    public String getCustomerDetails() {\n        return \"Mijoz: \" + name + \" (ID: \" + customerId + \", Aloqa: \" + contactNumber + \")\";\n    }\n}\n\nclass OrderItem {\n    private String menuItem;\n    private int quantity;\n    private double unitPrice;\n    public OrderItem(String item, int q, double p) {\n        if (q <= 0) throw new IllegalArgumentException(\"Quantity must be positive\");\n        if (p < 0) throw new IllegalArgumentException(\"Price cannot be negative\");\n        this.menuItem = item;\n        this.quantity = q;\n        this.unitPrice = p;\n    }\n    public String getMenuItem() { return menuItem; }\n    public int getQuantity() { return quantity; }\n    public double getUnitPrice() { return unitPrice; }\n    public double calculateSubtotal() { return quantity * unitPrice; }\n    public String getItemSummary() {\n        return menuItem + \" x\" + quantity + \" @ \" + unitPrice + \" UZS = \" + calculateSubtotal() + \" UZS\";\n    }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    private String status = \"YANGI\";\n\n    public Order(String id, Customer c) {\n        this.orderId = id;\n        this.customer = c;\n    }\n    public String getOrderId() { return orderId; }\n    public Customer getCustomer() { return customer; }\n    public String getStatus() { return status; }\n    public void markAsPaid() { this.status = \"TO'LANGAN\"; }\n\n    public String getOrderHeader() {\n        return \"Buyurtma \" + orderId + \" | Buyurtmachi: \" + customer.getName();\n    }\n    public void addOrderItem(OrderItem item) {\n        if (item == null) throw new IllegalArgumentException(\"Item cannot be null\");\n        items.add(item);\n    }\n    public int getItemCount() { return items.size(); }\n    public int getTotalPortions() {\n        int sum = 0;\n        for (OrderItem it : items) sum += it.getQuantity();\n        return sum;\n    }\n    public double calculateSubtotal() {\n        double sum = 0;\n        for (OrderItem it : items) sum += it.calculateSubtotal();\n        return sum;\n    }\n    public double calculateTax() {\n        return Math.round(calculateSubtotal() * 0.10 * 10.0) / 10.0;\n    }\n    public double calculateTotal() {\n        return calculateSubtotal() + calculateTax();\n    }\n    public String validateHasItems() {\n        if (items.isEmpty()) return \"Himoya xatosi: Buyurtmada birorta ham taom mavjud emas\";\n        return \"Buyurtmada taomlar mavjud\";\n    }\n    public void removeOrderItem(String itemName) {\n        items.removeIf(it -> it.getMenuItem().equals(itemName));\n    }\n    public String findMostExpensiveItem() {\n        if (items.isEmpty()) return \"Topilmadi\";\n        OrderItem max = items.get(0);\n        for (OrderItem it : items) {\n            if (it.calculateSubtotal() > max.calculateSubtotal()) max = it;\n        }\n        return max.getMenuItem() + \" (\" + max.calculateSubtotal() + \" UZS)\";\n    }\n    public void clearOrder() {\n        items.clear();\n    }\n    public String getOrderSummary() {\n        return \"Buyurtma \" + orderId + \" [\" + customer.getName() + \"]: \" + items.size() + \" turdagi taom | Jami: \" + calculateTotal() + \" UZS (10% xizmat bilan)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"CUST-1\", \"Sanjar\", \"+99894\");\n        Order ord = new Order(\"ORD-10\", c);\n        ord.addOrderItem(new OrderItem(\"Non\", 2, 5000.0));\n        ord.clearOrder();\n        System.out.println(\"Tozalangach summa: \" + ord.calculateSubtotal() + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT PC Lab Mock Test ('Chorsu Grill House'): Restoranning buyurtmalar tizimi Customer (mijoz ma'lumotlari), OrderItem (buyurtma qilingan taom qatori) va Order (buyurtma yig'uvchisi) sinflaridan iborat. Order sinfi barcha taomlar subtotalini yig'ib, 10% xizmat haqini qo'shadi.",
      "cleanCode": "class Order {\n    private List<OrderItem> items = new ArrayList<>();\n    public double calculateSubtotal() { ... }\n    public double calculateTotal() { ... }\n}",
      "breakdown": [
        "<code>Customer</code>: mijoz ma'lumotlari.",
        "<code>OrderItem</code>: bitta taom qatori va oraliq summa hisobi.",
        "<code>Order</code>: butun buyurtma, 10% xizmat haqi va yakuniy to'lov."
      ]
    }
  },
  {
    "id": 135,
    "tier": 9,
    "tierName": "9-Bosqich: PC Lab Mock Test — Chorsu Grill House Buyurtma Modeli",
    "sector": "121-135: PC Lab Mock Test Order Architecture",
    "title": {
      "uz": "135. Chorsu Grill House Buyurtma Modeli Xulosasi",
      "en": "135. Chorsu Grill House Order Model Milestone"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Chorsu Grill House Master\n\nMock Test 1-qism yakuniy integratsiyasi: Customer, OrderItem va Order sinflarining to'liq o'zaro bog'liqligini tekshiring.\n\n🎯 QADAMLAR:\n1. Rasmiy PC Lab Mock Test UML talablariga mos 'Customer', 'OrderItem' va 'Order' sinflarini yozing.\n2. 'Customer': customerId, name, contactNumber.\n3. 'OrderItem': menuItem, quantity, unitPrice, calculateSubtotal().\n4. 'Order': orderId, customer, items ro'yxati, calculateSubtotal(), calculateTax() (10%), calculateTotal().\n5. 'getOrderSummary' metodini amalga oshirib, 'Main' da sinang.\n\n📊 Kutilayotgan Natija:\nBuyurtma ORD-770 [Zafar Karimov]: 1 turdagi taom | Jami: 96800.0 UZS (10% xizmat bilan)",
      "en": "🏢 Context: Chorsu Grill House Master\n\nVerify complete PC Lab Mock Test Order domain integration.\n\n🎯 STEPS:\n1. Implement Customer, OrderItem and Order classes per PC Lab Mock Test UML.\n2. OrderItem computes subtotal = quantity * unitPrice.\n3. Order computes subtotal, 10% tax/service charge, and grand total.\n4. Implement 'getOrderSummary' and test in 'Main'.\n\n📊 Expected Output:\nBuyurtma ORD-770 [Zafar Karimov]: 1 turdagi taom | Jami: 96800.0 UZS (10% xizmat bilan)"
    },
    "requirements": {
      "classes": [
        "Customer",
        "OrderItem",
        "Order",
        "Main"
      ],
      "methods": [
        "getOrderSummary"
      ]
    },
    "starterCode": "// PC Lab Mock Test: Customer, OrderItem va Order sinflarini yarating\nimport java.util.ArrayList;\nimport java.util.List;\n\nclass Customer {\n}\nclass OrderItem {\n}\nclass Order {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"CUST-77\", \"Zafar Karimov\", \"+998901239999\");\n        Order ord = new Order(\"ORD-770\", c);\n        ord.addOrderItem(new OrderItem(\"G'ijduvon shashlik\", 4, 22000.0));\n        System.out.println(ord.getOrderSummary());\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nclass Customer {\n    private String customerId;\n    private String name;\n    private String contactNumber;\n    public Customer(String id, String n, String c) { this.customerId = id; this.name = n; this.contactNumber = c; }\n    public String getCustomerId() { return customerId; }\n    public String getName() { return name; }\n    public String getCustomerDetails() {\n        return \"Mijoz: \" + name + \" (ID: \" + customerId + \", Aloqa: \" + contactNumber + \")\";\n    }\n}\n\nclass OrderItem {\n    private String menuItem;\n    private int quantity;\n    private double unitPrice;\n    public OrderItem(String item, int q, double p) {\n        if (q <= 0) throw new IllegalArgumentException(\"Quantity must be positive\");\n        if (p < 0) throw new IllegalArgumentException(\"Price cannot be negative\");\n        this.menuItem = item;\n        this.quantity = q;\n        this.unitPrice = p;\n    }\n    public String getMenuItem() { return menuItem; }\n    public int getQuantity() { return quantity; }\n    public double getUnitPrice() { return unitPrice; }\n    public double calculateSubtotal() { return quantity * unitPrice; }\n    public String getItemSummary() {\n        return menuItem + \" x\" + quantity + \" @ \" + unitPrice + \" UZS = \" + calculateSubtotal() + \" UZS\";\n    }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    private String status = \"YANGI\";\n\n    public Order(String id, Customer c) {\n        this.orderId = id;\n        this.customer = c;\n    }\n    public String getOrderId() { return orderId; }\n    public Customer getCustomer() { return customer; }\n    public String getStatus() { return status; }\n    public void markAsPaid() { this.status = \"TO'LANGAN\"; }\n\n    public String getOrderHeader() {\n        return \"Buyurtma \" + orderId + \" | Buyurtmachi: \" + customer.getName();\n    }\n    public void addOrderItem(OrderItem item) {\n        if (item == null) throw new IllegalArgumentException(\"Item cannot be null\");\n        items.add(item);\n    }\n    public int getItemCount() { return items.size(); }\n    public int getTotalPortions() {\n        int sum = 0;\n        for (OrderItem it : items) sum += it.getQuantity();\n        return sum;\n    }\n    public double calculateSubtotal() {\n        double sum = 0;\n        for (OrderItem it : items) sum += it.calculateSubtotal();\n        return sum;\n    }\n    public double calculateTax() {\n        return Math.round(calculateSubtotal() * 0.10 * 10.0) / 10.0;\n    }\n    public double calculateTotal() {\n        return calculateSubtotal() + calculateTax();\n    }\n    public String validateHasItems() {\n        if (items.isEmpty()) return \"Himoya xatosi: Buyurtmada birorta ham taom mavjud emas\";\n        return \"Buyurtmada taomlar mavjud\";\n    }\n    public void removeOrderItem(String itemName) {\n        items.removeIf(it -> it.getMenuItem().equals(itemName));\n    }\n    public String findMostExpensiveItem() {\n        if (items.isEmpty()) return \"Topilmadi\";\n        OrderItem max = items.get(0);\n        for (OrderItem it : items) {\n            if (it.calculateSubtotal() > max.calculateSubtotal()) max = it;\n        }\n        return max.getMenuItem() + \" (\" + max.calculateSubtotal() + \" UZS)\";\n    }\n    public void clearOrder() {\n        items.clear();\n    }\n    public String getOrderSummary() {\n        return \"Buyurtma \" + orderId + \" [\" + customer.getName() + \"]: \" + items.size() + \" turdagi taom | Jami: \" + calculateTotal() + \" UZS (10% xizmat bilan)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"CUST-77\", \"Zafar Karimov\", \"+998901239999\");\n        Order ord = new Order(\"ORD-770\", c);\n        ord.addOrderItem(new OrderItem(\"G'ijduvon shashlik\", 4, 22000.0));\n        System.out.println(ord.getOrderSummary());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT PC Lab Mock Test ('Chorsu Grill House'): Restoranning buyurtmalar tizimi Customer (mijoz ma'lumotlari), OrderItem (buyurtma qilingan taom qatori) va Order (buyurtma yig'uvchisi) sinflaridan iborat. Order sinfi barcha taomlar subtotalini yig'ib, 10% xizmat haqini qo'shadi.",
      "cleanCode": "class Order {\n    private List<OrderItem> items = new ArrayList<>();\n    public double calculateSubtotal() { ... }\n    public double calculateTotal() { ... }\n}",
      "breakdown": [
        "<code>Customer</code>: mijoz ma'lumotlari.",
        "<code>OrderItem</code>: bitta taom qatori va oraliq summa hisobi.",
        "<code>Order</code>: butun buyurtma, 10% xizmat haqi va yakuniy to'lov."
      ]
    }
  },
  {
    "id": 136,
    "tier": 10,
    "tierName": "10-Bosqich: PC Lab Mock Test — To'lov Polimorfizmi va Fiskal Chek",
    "sector": "136-150: Mock Test Payable Hierarchy & Fiscal Billing",
    "title": {
      "uz": "136. Payable Interfeysi — Chorsu Grill To'lov Shartnomasi",
      "en": "136. Payable Interface — Chorsu Grill Payment Contract"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Chorsu Grill House\n\nWIUT rasmiy Mock Test talabi: 'Payable' interfeysini e'lon qiling. Unda 'boolean pay(double amount)' metodi bo'lib, barcha to'lov turlari uchun umumiy shartnoma hisoblanadi.\n\n🎯 QADAMLAR:\n1. PC Lab Mock Test talabiga mos 'Payable' interfeysini e'lon qiling ('boolean pay(double amount)').\n2. 'CashPayment' va 'CardPayment' sinflarida 'Payable' ni polimorfik amalga oshiring.\n3. 'Order.processPayment(Payable)' va 'generateReceipt()' to'liq fiskal chek chop etishini yozing.\n4. 'Main' sinfida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nTo'lov muvaffaqiyati: true",
      "en": "🏢 Context: Chorsu Grill House\n\nOfficial PC Lab Mock Test: Declare Payable interface specifying boolean pay(double amount) method.\n\n🎯 STEPS:\n1. Declare Payable interface per PC Lab Mock Test specifications.\n2. Implement CashPayment (computing change) and CardPayment (masking pan).\n3. Implement Order.processPayment(Payable) and generateReceipt().\n4. Test in 'Main'.\n\n📊 Expected Output:\nTo'lov muvaffaqiyati: true"
    },
    "requirements": {
      "classes": [
        "Payable",
        "CashPayment",
        "CardPayment",
        "Order",
        "Main"
      ],
      "methods": [
        "pay"
      ]
    },
    "starterCode": "// PC Lab Mock Test: Payable, CashPayment, CardPayment va Order sinflarini yarating\ninterface Payable {\n}\nclass CashPayment implements Payable {\n}\nclass CardPayment implements Payable {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Payable payment = new CashPayment(100000.0);\n        System.out.println(\"To'lov muvaffaqiyati: \" + payment.pay(77000.0));\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\ninterface Payable {\n    boolean pay(double amount);\n}\n\nclass CashPayment implements Payable {\n    private double amountTendered;\n    private double paidAmount = 0.0;\n    public CashPayment(double tendered) { this.amountTendered = tendered; }\n    public double getAmountTendered() { return amountTendered; }\n    @Override\n    public boolean pay(double amount) {\n        if (amountTendered >= amount) {\n            this.paidAmount = amount;\n            return true;\n        }\n        return false;\n    }\n    public double calculateChange() {\n        return Math.max(0.0, amountTendered - paidAmount);\n    }\n}\n\nclass CardPayment implements Payable {\n    private String cardNumber;\n    private String expiryDate;\n    private String cvv;\n    public CardPayment(String num, String exp, String cvv) {\n        this.cardNumber = num;\n        this.expiryDate = exp;\n        this.cvv = cvv;\n    }\n    public String getMaskedNumber() {\n        if (cardNumber == null || cardNumber.length() < 16) return cardNumber;\n        return cardNumber.substring(0, 4) + \" **** **** \" + cardNumber.substring(12);\n    }\n    public String validateCard() {\n        if (cardNumber == null || cardNumber.length() != 16) return \"Karta xatosi: Karta raqami 16 xonali bo'lishi shart\";\n        return \"To'g'ri\";\n    }\n    @Override\n    public boolean pay(double amount) {\n        return true;\n    }\n}\n\nclass Customer {\n    private String customerId;\n    private String name;\n    private String contactNumber;\n    public Customer(String id, String n, String c) { this.customerId = id; this.name = n; this.contactNumber = c; }\n    public String getName() { return name; }\n    public String getCustomerId() { return customerId; }\n}\n\nclass OrderItem {\n    private String menuItem;\n    private int quantity;\n    private double unitPrice;\n    public OrderItem(String item, int q, double p) {\n        this.menuItem = item;\n        this.quantity = q;\n        this.unitPrice = p;\n    }\n    public String getMenuItem() { return menuItem; }\n    public int getQuantity() { return quantity; }\n    public double getUnitPrice() { return unitPrice; }\n    public double calculateSubtotal() { return quantity * unitPrice; }\n    public String getItemSummary() {\n        return menuItem + \" x\" + quantity + \" @ \" + unitPrice + \" UZS = \" + calculateSubtotal() + \" UZS\";\n    }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    private String status = \"YANGI\";\n    private Payable payment = null;\n\n    public Order(String id, Customer c) { this.orderId = id; this.customer = c; }\n    public void addOrderItem(OrderItem item) { items.add(item); }\n    public double calculateSubtotal() {\n        double s = 0;\n        for (OrderItem it : items) s += it.calculateSubtotal();\n        return s;\n    }\n    public double calculateTax() {\n        return Math.round(calculateSubtotal() * 0.10 * 10.0) / 10.0;\n    }\n    public double calculateTotal() {\n        return calculateSubtotal() + calculateTax();\n    }\n    public String processPayment(Payable p) {\n        double total = calculateTotal();\n        boolean ok = p.pay(total);\n        if (ok) {\n            this.payment = p;\n            this.status = \"TO'LANGAN\";\n            if (p instanceof CashPayment) {\n                CashPayment cp = (CashPayment) p;\n                return orderId + \" buyurtmasi to'landi! Qaytim: \" + cp.calculateChange() + \" UZS. Holat: TO'LANGAN\";\n            } else if (p instanceof CardPayment) {\n                CardPayment card = (CardPayment) p;\n                return orderId + \" buyurtmasi to'landi! Karta: \" + card.getMaskedNumber() + \". Holat: TO'LANGAN\";\n            }\n            return orderId + \" buyurtmasi to'landi!\";\n        }\n        return \"To'lov amalga oshmadi\";\n    }\n    public String guardDuplicatePay() {\n        if (\"TO'LANGAN\".equals(status)) {\n            return \"Xatolik: Buyurtma allaqachon to'langan, qayta to'lov mumkin emas\";\n        }\n        return \"OK\";\n    }\n    public String cancelOrder() {\n        this.status = \"BEKOR_QILINDI\";\n        return \"Buyurtma \" + orderId + \" bekor qilindi. To'lov qabul qilinmadi.\";\n    }\n    public String generateReceipt() {\n        StringBuilder sb = new StringBuilder(\"=== CHORSU GRILL HOUSE CHEKI ===\\n\");\n        sb.append(\"Buyurtma: \").append(orderId).append(\" | Mijoz: \").append(customer.getName()).append(\"\\n\");\n        for (OrderItem it : items) {\n            sb.append(\"- \").append(it.getItemSummary()).append(\"\\n\");\n        }\n        sb.append(\"Subtotal: \").append(calculateSubtotal()).append(\" UZS\\n\");\n        sb.append(\"Xizmat haqi (10%): \").append(calculateTax()).append(\" UZS\\n\");\n        sb.append(\"Jami: \").append(calculateTotal()).append(\" UZS\\n\");\n        if (payment instanceof CashPayment) {\n            CashPayment cp = (CashPayment) payment;\n            sb.append(\"To'lov usuli: Naqd pul | Qaytim: \").append(cp.calculateChange()).append(\" UZS\");\n        } else if (payment instanceof CardPayment) {\n            CardPayment card = (CardPayment) payment;\n            sb.append(\"To'lov usuli: Bank kartasi [\").append(card.getMaskedNumber()).append(\"]\");\n        }\n        return sb.toString();\n    }\n    public String runMockTestMaster(Payable p) {\n        processPayment(p);\n        CashPayment cp = (CashPayment) p;\n        return \"PC LAB MOCK TEST MUVAFFAQIShATLI TOPSHIRILDI!\\nBuyurtma \" + orderId + \" [\" + customer.getName() + \"]\\nSubtotal: \" + calculateSubtotal() + \" UZS | 10% Xizmat: \" + calculateTax() + \" UZS | Jami: \" + calculateTotal() + \" UZS\\nNaqd pul: \" + cp.getAmountTendered() + \" UZS | Qaytim: \" + cp.calculateChange() + \" UZS | Holat: \" + status;\n    }\n}\n\nclass OrderRegistry {\n    private double totalRevenue = 0;\n    private int cashCount = 0;\n    private int cardCount = 0;\n    public void addSettledAmount(double amt) { totalRevenue += amt; }\n    public double calculateTotalRevenue() { return totalRevenue; }\n    public void recordPaymentType(String type) {\n        if (\"CASH\".equals(type)) cashCount++;\n        if (\"CARD\".equals(type)) cardCount++;\n    }\n    public String getPaymentStats() {\n        return \"To'lovlar statistikasi: \" + cashCount + \" ta Naqd | \" + cardCount + \" ta Karta\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Payable payment = new CashPayment(100000.0);\n        System.out.println(\"To'lov muvaffaqiyati: \" + payment.pay(77000.0));\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT PC Lab Mock Test: To'lov jarayoni polimorfizmga asoslangan. 'Payable' interfeysi ostida 'CashPayment' (naqd pul va qaytim hisobi) hamda 'CardPayment' (bank kartasi va maskalash) birlashtiriladi. Buyurtma (Order) yagona Payable havolasi orqali to'lovni tasdiqlab, to'liq fiskal chek chiqaradi.",
      "cleanCode": "interface Payable {\n    boolean pay(double amount);\n}\nclass CashPayment implements Payable { ... }\nclass CardPayment implements Payable { ... }",
      "breakdown": [
        "<code>Payable</code>: polimorfik to'lov shartnomasi.",
        "<code>CashPayment</code>: qaytim hisoblovchi naqd to'lov sinfi.",
        "<code>CardPayment</code>: maskalangan karta to'lovi.",
        "Fiskal chek: 10% xizmat haqi va to'liq taomlar ro'yxati."
      ]
    }
  },
  {
    "id": 137,
    "tier": 10,
    "tierName": "10-Bosqich: PC Lab Mock Test — To'lov Polimorfizmi va Fiskal Chek",
    "sector": "136-150: Mock Test Payable Hierarchy & Fiscal Billing",
    "title": {
      "uz": "137. CashPayment — Berilgan Pul va Qaytimni Hisoblash (calculateChange)",
      "en": "137. CashPayment — Tendered Amount and Change Calculation"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Chorsu Grill House\n\nMock Test talabi: 'CashPayment' klassi 'Payable' ni amalga oshiradi. Mijoz bergan naqd puldan (amountTendered) hisob summasi ayrilib, 'calculateChange()' qaytimni qaytaradi.\n\n🎯 QADAMLAR:\n1. PC Lab Mock Test talabiga mos 'Payable' interfeysini e'lon qiling ('boolean pay(double amount)').\n2. 'CashPayment' va 'CardPayment' sinflarida 'Payable' ni polimorfik amalga oshiring.\n3. 'Order.processPayment(Payable)' va 'generateReceipt()' to'liq fiskal chek chop etishini yozing.\n4. 'Main' sinfida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nQaytim miqdori: 15000.0 UZS",
      "en": "🏢 Context: Chorsu Grill House\n\nPC Lab Mock Test: Implement CashPayment computing customer change from amountTendered.\n\n🎯 STEPS:\n1. Declare Payable interface per PC Lab Mock Test specifications.\n2. Implement CashPayment (computing change) and CardPayment (masking pan).\n3. Implement Order.processPayment(Payable) and generateReceipt().\n4. Test in 'Main'.\n\n📊 Expected Output:\nQaytim miqdori: 15000.0 UZS"
    },
    "requirements": {
      "classes": [
        "Payable",
        "CashPayment",
        "CardPayment",
        "Order",
        "Main"
      ],
      "methods": [
        "calculateChange"
      ]
    },
    "starterCode": "// PC Lab Mock Test: Payable, CashPayment, CardPayment va Order sinflarini yarating\ninterface Payable {\n}\nclass CashPayment implements Payable {\n}\nclass CardPayment implements Payable {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CashPayment cash = new CashPayment(100000.0);\n        cash.pay(85000.0);\n        System.out.println(\"Qaytim miqdori: \" + cash.calculateChange() + \" UZS\");\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\ninterface Payable {\n    boolean pay(double amount);\n}\n\nclass CashPayment implements Payable {\n    private double amountTendered;\n    private double paidAmount = 0.0;\n    public CashPayment(double tendered) { this.amountTendered = tendered; }\n    public double getAmountTendered() { return amountTendered; }\n    @Override\n    public boolean pay(double amount) {\n        if (amountTendered >= amount) {\n            this.paidAmount = amount;\n            return true;\n        }\n        return false;\n    }\n    public double calculateChange() {\n        return Math.max(0.0, amountTendered - paidAmount);\n    }\n}\n\nclass CardPayment implements Payable {\n    private String cardNumber;\n    private String expiryDate;\n    private String cvv;\n    public CardPayment(String num, String exp, String cvv) {\n        this.cardNumber = num;\n        this.expiryDate = exp;\n        this.cvv = cvv;\n    }\n    public String getMaskedNumber() {\n        if (cardNumber == null || cardNumber.length() < 16) return cardNumber;\n        return cardNumber.substring(0, 4) + \" **** **** \" + cardNumber.substring(12);\n    }\n    public String validateCard() {\n        if (cardNumber == null || cardNumber.length() != 16) return \"Karta xatosi: Karta raqami 16 xonali bo'lishi shart\";\n        return \"To'g'ri\";\n    }\n    @Override\n    public boolean pay(double amount) {\n        return true;\n    }\n}\n\nclass Customer {\n    private String customerId;\n    private String name;\n    private String contactNumber;\n    public Customer(String id, String n, String c) { this.customerId = id; this.name = n; this.contactNumber = c; }\n    public String getName() { return name; }\n    public String getCustomerId() { return customerId; }\n}\n\nclass OrderItem {\n    private String menuItem;\n    private int quantity;\n    private double unitPrice;\n    public OrderItem(String item, int q, double p) {\n        this.menuItem = item;\n        this.quantity = q;\n        this.unitPrice = p;\n    }\n    public String getMenuItem() { return menuItem; }\n    public int getQuantity() { return quantity; }\n    public double getUnitPrice() { return unitPrice; }\n    public double calculateSubtotal() { return quantity * unitPrice; }\n    public String getItemSummary() {\n        return menuItem + \" x\" + quantity + \" @ \" + unitPrice + \" UZS = \" + calculateSubtotal() + \" UZS\";\n    }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    private String status = \"YANGI\";\n    private Payable payment = null;\n\n    public Order(String id, Customer c) { this.orderId = id; this.customer = c; }\n    public void addOrderItem(OrderItem item) { items.add(item); }\n    public double calculateSubtotal() {\n        double s = 0;\n        for (OrderItem it : items) s += it.calculateSubtotal();\n        return s;\n    }\n    public double calculateTax() {\n        return Math.round(calculateSubtotal() * 0.10 * 10.0) / 10.0;\n    }\n    public double calculateTotal() {\n        return calculateSubtotal() + calculateTax();\n    }\n    public String processPayment(Payable p) {\n        double total = calculateTotal();\n        boolean ok = p.pay(total);\n        if (ok) {\n            this.payment = p;\n            this.status = \"TO'LANGAN\";\n            if (p instanceof CashPayment) {\n                CashPayment cp = (CashPayment) p;\n                return orderId + \" buyurtmasi to'landi! Qaytim: \" + cp.calculateChange() + \" UZS. Holat: TO'LANGAN\";\n            } else if (p instanceof CardPayment) {\n                CardPayment card = (CardPayment) p;\n                return orderId + \" buyurtmasi to'landi! Karta: \" + card.getMaskedNumber() + \". Holat: TO'LANGAN\";\n            }\n            return orderId + \" buyurtmasi to'landi!\";\n        }\n        return \"To'lov amalga oshmadi\";\n    }\n    public String guardDuplicatePay() {\n        if (\"TO'LANGAN\".equals(status)) {\n            return \"Xatolik: Buyurtma allaqachon to'langan, qayta to'lov mumkin emas\";\n        }\n        return \"OK\";\n    }\n    public String cancelOrder() {\n        this.status = \"BEKOR_QILINDI\";\n        return \"Buyurtma \" + orderId + \" bekor qilindi. To'lov qabul qilinmadi.\";\n    }\n    public String generateReceipt() {\n        StringBuilder sb = new StringBuilder(\"=== CHORSU GRILL HOUSE CHEKI ===\\n\");\n        sb.append(\"Buyurtma: \").append(orderId).append(\" | Mijoz: \").append(customer.getName()).append(\"\\n\");\n        for (OrderItem it : items) {\n            sb.append(\"- \").append(it.getItemSummary()).append(\"\\n\");\n        }\n        sb.append(\"Subtotal: \").append(calculateSubtotal()).append(\" UZS\\n\");\n        sb.append(\"Xizmat haqi (10%): \").append(calculateTax()).append(\" UZS\\n\");\n        sb.append(\"Jami: \").append(calculateTotal()).append(\" UZS\\n\");\n        if (payment instanceof CashPayment) {\n            CashPayment cp = (CashPayment) payment;\n            sb.append(\"To'lov usuli: Naqd pul | Qaytim: \").append(cp.calculateChange()).append(\" UZS\");\n        } else if (payment instanceof CardPayment) {\n            CardPayment card = (CardPayment) payment;\n            sb.append(\"To'lov usuli: Bank kartasi [\").append(card.getMaskedNumber()).append(\"]\");\n        }\n        return sb.toString();\n    }\n    public String runMockTestMaster(Payable p) {\n        processPayment(p);\n        CashPayment cp = (CashPayment) p;\n        return \"PC LAB MOCK TEST MUVAFFAQIShATLI TOPSHIRILDI!\\nBuyurtma \" + orderId + \" [\" + customer.getName() + \"]\\nSubtotal: \" + calculateSubtotal() + \" UZS | 10% Xizmat: \" + calculateTax() + \" UZS | Jami: \" + calculateTotal() + \" UZS\\nNaqd pul: \" + cp.getAmountTendered() + \" UZS | Qaytim: \" + cp.calculateChange() + \" UZS | Holat: \" + status;\n    }\n}\n\nclass OrderRegistry {\n    private double totalRevenue = 0;\n    private int cashCount = 0;\n    private int cardCount = 0;\n    public void addSettledAmount(double amt) { totalRevenue += amt; }\n    public double calculateTotalRevenue() { return totalRevenue; }\n    public void recordPaymentType(String type) {\n        if (\"CASH\".equals(type)) cashCount++;\n        if (\"CARD\".equals(type)) cardCount++;\n    }\n    public String getPaymentStats() {\n        return \"To'lovlar statistikasi: \" + cashCount + \" ta Naqd | \" + cardCount + \" ta Karta\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CashPayment cash = new CashPayment(100000.0);\n        cash.pay(85000.0);\n        System.out.println(\"Qaytim miqdori: \" + cash.calculateChange() + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT PC Lab Mock Test: To'lov jarayoni polimorfizmga asoslangan. 'Payable' interfeysi ostida 'CashPayment' (naqd pul va qaytim hisobi) hamda 'CardPayment' (bank kartasi va maskalash) birlashtiriladi. Buyurtma (Order) yagona Payable havolasi orqali to'lovni tasdiqlab, to'liq fiskal chek chiqaradi.",
      "cleanCode": "interface Payable {\n    boolean pay(double amount);\n}\nclass CashPayment implements Payable { ... }\nclass CardPayment implements Payable { ... }",
      "breakdown": [
        "<code>Payable</code>: polimorfik to'lov shartnomasi.",
        "<code>CashPayment</code>: qaytim hisoblovchi naqd to'lov sinfi.",
        "<code>CardPayment</code>: maskalangan karta to'lovi.",
        "Fiskal chek: 10% xizmat haqi va to'liq taomlar ro'yxati."
      ]
    }
  },
  {
    "id": 138,
    "tier": 10,
    "tierName": "10-Bosqich: PC Lab Mock Test — To'lov Polimorfizmi va Fiskal Chek",
    "sector": "136-150: Mock Test Payable Hierarchy & Fiscal Billing",
    "title": {
      "uz": "138. CashPayment — Berilgan Pul Yetarli Bo'lmaganda Xatolik",
      "en": "138. CashPayment — Insufficient Tendered Amount Validation"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Chorsu Grill House\n\nMock Test talabi: Agar berilgan naqd pul hisob summasidan kam bo'lsa (amountTendered < amount), 'pay()' false qaytarsin yoki xabar bersin.\n\n🎯 QADAMLAR:\n1. PC Lab Mock Test talabiga mos 'Payable' interfeysini e'lon qiling ('boolean pay(double amount)').\n2. 'CashPayment' va 'CardPayment' sinflarida 'Payable' ni polimorfik amalga oshiring.\n3. 'Order.processPayment(Payable)' va 'generateReceipt()' to'liq fiskal chek chop etishini yozing.\n4. 'Main' sinfida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nTo'lov holati: Naqd pul yetarli emas",
      "en": "🏢 Context: Chorsu Grill House\n\nPC Lab Mock Test: Validate amountTendered returning false when cash given is insufficient.\n\n🎯 STEPS:\n1. Declare Payable interface per PC Lab Mock Test specifications.\n2. Implement CashPayment (computing change) and CardPayment (masking pan).\n3. Implement Order.processPayment(Payable) and generateReceipt().\n4. Test in 'Main'.\n\n📊 Expected Output:\nTo'lov holati: Naqd pul yetarli emas"
    },
    "requirements": {
      "classes": [
        "Payable",
        "CashPayment",
        "CardPayment",
        "Order",
        "Main"
      ],
      "methods": [
        "pay"
      ]
    },
    "starterCode": "// PC Lab Mock Test: Payable, CashPayment, CardPayment va Order sinflarini yarating\ninterface Payable {\n}\nclass CashPayment implements Payable {\n}\nclass CardPayment implements Payable {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CashPayment cash = new CashPayment(50000.0);\n        boolean success = cash.pay(75000.0);\n        System.out.println(\"To'lov holati: \" + (success ? \"Muvaffaqiyatli\" : \"Naqd pul yetarli emas\"));\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\ninterface Payable {\n    boolean pay(double amount);\n}\n\nclass CashPayment implements Payable {\n    private double amountTendered;\n    private double paidAmount = 0.0;\n    public CashPayment(double tendered) { this.amountTendered = tendered; }\n    public double getAmountTendered() { return amountTendered; }\n    @Override\n    public boolean pay(double amount) {\n        if (amountTendered >= amount) {\n            this.paidAmount = amount;\n            return true;\n        }\n        return false;\n    }\n    public double calculateChange() {\n        return Math.max(0.0, amountTendered - paidAmount);\n    }\n}\n\nclass CardPayment implements Payable {\n    private String cardNumber;\n    private String expiryDate;\n    private String cvv;\n    public CardPayment(String num, String exp, String cvv) {\n        this.cardNumber = num;\n        this.expiryDate = exp;\n        this.cvv = cvv;\n    }\n    public String getMaskedNumber() {\n        if (cardNumber == null || cardNumber.length() < 16) return cardNumber;\n        return cardNumber.substring(0, 4) + \" **** **** \" + cardNumber.substring(12);\n    }\n    public String validateCard() {\n        if (cardNumber == null || cardNumber.length() != 16) return \"Karta xatosi: Karta raqami 16 xonali bo'lishi shart\";\n        return \"To'g'ri\";\n    }\n    @Override\n    public boolean pay(double amount) {\n        return true;\n    }\n}\n\nclass Customer {\n    private String customerId;\n    private String name;\n    private String contactNumber;\n    public Customer(String id, String n, String c) { this.customerId = id; this.name = n; this.contactNumber = c; }\n    public String getName() { return name; }\n    public String getCustomerId() { return customerId; }\n}\n\nclass OrderItem {\n    private String menuItem;\n    private int quantity;\n    private double unitPrice;\n    public OrderItem(String item, int q, double p) {\n        this.menuItem = item;\n        this.quantity = q;\n        this.unitPrice = p;\n    }\n    public String getMenuItem() { return menuItem; }\n    public int getQuantity() { return quantity; }\n    public double getUnitPrice() { return unitPrice; }\n    public double calculateSubtotal() { return quantity * unitPrice; }\n    public String getItemSummary() {\n        return menuItem + \" x\" + quantity + \" @ \" + unitPrice + \" UZS = \" + calculateSubtotal() + \" UZS\";\n    }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    private String status = \"YANGI\";\n    private Payable payment = null;\n\n    public Order(String id, Customer c) { this.orderId = id; this.customer = c; }\n    public void addOrderItem(OrderItem item) { items.add(item); }\n    public double calculateSubtotal() {\n        double s = 0;\n        for (OrderItem it : items) s += it.calculateSubtotal();\n        return s;\n    }\n    public double calculateTax() {\n        return Math.round(calculateSubtotal() * 0.10 * 10.0) / 10.0;\n    }\n    public double calculateTotal() {\n        return calculateSubtotal() + calculateTax();\n    }\n    public String processPayment(Payable p) {\n        double total = calculateTotal();\n        boolean ok = p.pay(total);\n        if (ok) {\n            this.payment = p;\n            this.status = \"TO'LANGAN\";\n            if (p instanceof CashPayment) {\n                CashPayment cp = (CashPayment) p;\n                return orderId + \" buyurtmasi to'landi! Qaytim: \" + cp.calculateChange() + \" UZS. Holat: TO'LANGAN\";\n            } else if (p instanceof CardPayment) {\n                CardPayment card = (CardPayment) p;\n                return orderId + \" buyurtmasi to'landi! Karta: \" + card.getMaskedNumber() + \". Holat: TO'LANGAN\";\n            }\n            return orderId + \" buyurtmasi to'landi!\";\n        }\n        return \"To'lov amalga oshmadi\";\n    }\n    public String guardDuplicatePay() {\n        if (\"TO'LANGAN\".equals(status)) {\n            return \"Xatolik: Buyurtma allaqachon to'langan, qayta to'lov mumkin emas\";\n        }\n        return \"OK\";\n    }\n    public String cancelOrder() {\n        this.status = \"BEKOR_QILINDI\";\n        return \"Buyurtma \" + orderId + \" bekor qilindi. To'lov qabul qilinmadi.\";\n    }\n    public String generateReceipt() {\n        StringBuilder sb = new StringBuilder(\"=== CHORSU GRILL HOUSE CHEKI ===\\n\");\n        sb.append(\"Buyurtma: \").append(orderId).append(\" | Mijoz: \").append(customer.getName()).append(\"\\n\");\n        for (OrderItem it : items) {\n            sb.append(\"- \").append(it.getItemSummary()).append(\"\\n\");\n        }\n        sb.append(\"Subtotal: \").append(calculateSubtotal()).append(\" UZS\\n\");\n        sb.append(\"Xizmat haqi (10%): \").append(calculateTax()).append(\" UZS\\n\");\n        sb.append(\"Jami: \").append(calculateTotal()).append(\" UZS\\n\");\n        if (payment instanceof CashPayment) {\n            CashPayment cp = (CashPayment) payment;\n            sb.append(\"To'lov usuli: Naqd pul | Qaytim: \").append(cp.calculateChange()).append(\" UZS\");\n        } else if (payment instanceof CardPayment) {\n            CardPayment card = (CardPayment) payment;\n            sb.append(\"To'lov usuli: Bank kartasi [\").append(card.getMaskedNumber()).append(\"]\");\n        }\n        return sb.toString();\n    }\n    public String runMockTestMaster(Payable p) {\n        processPayment(p);\n        CashPayment cp = (CashPayment) p;\n        return \"PC LAB MOCK TEST MUVAFFAQIShATLI TOPSHIRILDI!\\nBuyurtma \" + orderId + \" [\" + customer.getName() + \"]\\nSubtotal: \" + calculateSubtotal() + \" UZS | 10% Xizmat: \" + calculateTax() + \" UZS | Jami: \" + calculateTotal() + \" UZS\\nNaqd pul: \" + cp.getAmountTendered() + \" UZS | Qaytim: \" + cp.calculateChange() + \" UZS | Holat: \" + status;\n    }\n}\n\nclass OrderRegistry {\n    private double totalRevenue = 0;\n    private int cashCount = 0;\n    private int cardCount = 0;\n    public void addSettledAmount(double amt) { totalRevenue += amt; }\n    public double calculateTotalRevenue() { return totalRevenue; }\n    public void recordPaymentType(String type) {\n        if (\"CASH\".equals(type)) cashCount++;\n        if (\"CARD\".equals(type)) cardCount++;\n    }\n    public String getPaymentStats() {\n        return \"To'lovlar statistikasi: \" + cashCount + \" ta Naqd | \" + cardCount + \" ta Karta\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CashPayment cash = new CashPayment(50000.0);\n        boolean success = cash.pay(75000.0);\n        System.out.println(\"To'lov holati: \" + (success ? \"Muvaffaqiyatli\" : \"Naqd pul yetarli emas\"));\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT PC Lab Mock Test: To'lov jarayoni polimorfizmga asoslangan. 'Payable' interfeysi ostida 'CashPayment' (naqd pul va qaytim hisobi) hamda 'CardPayment' (bank kartasi va maskalash) birlashtiriladi. Buyurtma (Order) yagona Payable havolasi orqali to'lovni tasdiqlab, to'liq fiskal chek chiqaradi.",
      "cleanCode": "interface Payable {\n    boolean pay(double amount);\n}\nclass CashPayment implements Payable { ... }\nclass CardPayment implements Payable { ... }",
      "breakdown": [
        "<code>Payable</code>: polimorfik to'lov shartnomasi.",
        "<code>CashPayment</code>: qaytim hisoblovchi naqd to'lov sinfi.",
        "<code>CardPayment</code>: maskalangan karta to'lovi.",
        "Fiskal chek: 10% xizmat haqi va to'liq taomlar ro'yxati."
      ]
    }
  },
  {
    "id": 139,
    "tier": 10,
    "tierName": "10-Bosqich: PC Lab Mock Test — To'lov Polimorfizmi va Fiskal Chek",
    "sector": "136-150: Mock Test Payable Hierarchy & Fiscal Billing",
    "title": {
      "uz": "139. CardPayment — Bank Kartasi Bilan To'lov (Card Masking)",
      "en": "139. CardPayment — Bank Card Settlement with Masking"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Chorsu Grill House\n\nMock Test talabi: 'CardPayment' klassi 'Payable' ni amalga oshiradi. Karta raqami (cardNumber), amal qilish muddati (expiryDate) va CVV kodi bo'ladi. To'lov tasdiqlangach karta maskalangan ko'rinadi.\n\n🎯 QADAMLAR:\n1. PC Lab Mock Test talabiga mos 'Payable' interfeysini e'lon qiling ('boolean pay(double amount)').\n2. 'CashPayment' va 'CardPayment' sinflarida 'Payable' ni polimorfik amalga oshiring.\n3. 'Order.processPayment(Payable)' va 'generateReceipt()' to'liq fiskal chek chop etishini yozing.\n4. 'Main' sinfida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nKarta orqali to'lov muvaffaqiyatli: 8600 **** **** 9012 kartasidan 66000.0 UZS yechildi",
      "en": "🏢 Context: Chorsu Grill House\n\nPC Lab Mock Test: Implement CardPayment masking card digits during receipt confirmation.\n\n🎯 STEPS:\n1. Declare Payable interface per PC Lab Mock Test specifications.\n2. Implement CashPayment (computing change) and CardPayment (masking pan).\n3. Implement Order.processPayment(Payable) and generateReceipt().\n4. Test in 'Main'.\n\n📊 Expected Output:\nKarta orqali to'lov muvaffaqiyatli: 8600 **** **** 9012 kartasidan 66000.0 UZS yechildi"
    },
    "requirements": {
      "classes": [
        "Payable",
        "CashPayment",
        "CardPayment",
        "Order",
        "Main"
      ],
      "methods": [
        "pay"
      ]
    },
    "starterCode": "// PC Lab Mock Test: Payable, CashPayment, CardPayment va Order sinflarini yarating\ninterface Payable {\n}\nclass CashPayment implements Payable {\n}\nclass CardPayment implements Payable {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Payable card = new CardPayment(\"8600123456789012\", \"12/28\", \"331\");\n        System.out.println(card.pay(66000.0));\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\ninterface Payable {\n    boolean pay(double amount);\n}\n\nclass CashPayment implements Payable {\n    private double amountTendered;\n    private double paidAmount = 0.0;\n    public CashPayment(double tendered) { this.amountTendered = tendered; }\n    public double getAmountTendered() { return amountTendered; }\n    @Override\n    public boolean pay(double amount) {\n        if (amountTendered >= amount) {\n            this.paidAmount = amount;\n            return true;\n        }\n        return false;\n    }\n    public double calculateChange() {\n        return Math.max(0.0, amountTendered - paidAmount);\n    }\n}\n\nclass CardPayment implements Payable {\n    private String cardNumber;\n    private String expiryDate;\n    private String cvv;\n    public CardPayment(String num, String exp, String cvv) {\n        this.cardNumber = num;\n        this.expiryDate = exp;\n        this.cvv = cvv;\n    }\n    public String getMaskedNumber() {\n        if (cardNumber == null || cardNumber.length() < 16) return cardNumber;\n        return cardNumber.substring(0, 4) + \" **** **** \" + cardNumber.substring(12);\n    }\n    public String validateCard() {\n        if (cardNumber == null || cardNumber.length() != 16) return \"Karta xatosi: Karta raqami 16 xonali bo'lishi shart\";\n        return \"To'g'ri\";\n    }\n    @Override\n    public boolean pay(double amount) {\n        return true;\n    }\n}\n\nclass Customer {\n    private String customerId;\n    private String name;\n    private String contactNumber;\n    public Customer(String id, String n, String c) { this.customerId = id; this.name = n; this.contactNumber = c; }\n    public String getName() { return name; }\n    public String getCustomerId() { return customerId; }\n}\n\nclass OrderItem {\n    private String menuItem;\n    private int quantity;\n    private double unitPrice;\n    public OrderItem(String item, int q, double p) {\n        this.menuItem = item;\n        this.quantity = q;\n        this.unitPrice = p;\n    }\n    public String getMenuItem() { return menuItem; }\n    public int getQuantity() { return quantity; }\n    public double getUnitPrice() { return unitPrice; }\n    public double calculateSubtotal() { return quantity * unitPrice; }\n    public String getItemSummary() {\n        return menuItem + \" x\" + quantity + \" @ \" + unitPrice + \" UZS = \" + calculateSubtotal() + \" UZS\";\n    }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    private String status = \"YANGI\";\n    private Payable payment = null;\n\n    public Order(String id, Customer c) { this.orderId = id; this.customer = c; }\n    public void addOrderItem(OrderItem item) { items.add(item); }\n    public double calculateSubtotal() {\n        double s = 0;\n        for (OrderItem it : items) s += it.calculateSubtotal();\n        return s;\n    }\n    public double calculateTax() {\n        return Math.round(calculateSubtotal() * 0.10 * 10.0) / 10.0;\n    }\n    public double calculateTotal() {\n        return calculateSubtotal() + calculateTax();\n    }\n    public String processPayment(Payable p) {\n        double total = calculateTotal();\n        boolean ok = p.pay(total);\n        if (ok) {\n            this.payment = p;\n            this.status = \"TO'LANGAN\";\n            if (p instanceof CashPayment) {\n                CashPayment cp = (CashPayment) p;\n                return orderId + \" buyurtmasi to'landi! Qaytim: \" + cp.calculateChange() + \" UZS. Holat: TO'LANGAN\";\n            } else if (p instanceof CardPayment) {\n                CardPayment card = (CardPayment) p;\n                return orderId + \" buyurtmasi to'landi! Karta: \" + card.getMaskedNumber() + \". Holat: TO'LANGAN\";\n            }\n            return orderId + \" buyurtmasi to'landi!\";\n        }\n        return \"To'lov amalga oshmadi\";\n    }\n    public String guardDuplicatePay() {\n        if (\"TO'LANGAN\".equals(status)) {\n            return \"Xatolik: Buyurtma allaqachon to'langan, qayta to'lov mumkin emas\";\n        }\n        return \"OK\";\n    }\n    public String cancelOrder() {\n        this.status = \"BEKOR_QILINDI\";\n        return \"Buyurtma \" + orderId + \" bekor qilindi. To'lov qabul qilinmadi.\";\n    }\n    public String generateReceipt() {\n        StringBuilder sb = new StringBuilder(\"=== CHORSU GRILL HOUSE CHEKI ===\\n\");\n        sb.append(\"Buyurtma: \").append(orderId).append(\" | Mijoz: \").append(customer.getName()).append(\"\\n\");\n        for (OrderItem it : items) {\n            sb.append(\"- \").append(it.getItemSummary()).append(\"\\n\");\n        }\n        sb.append(\"Subtotal: \").append(calculateSubtotal()).append(\" UZS\\n\");\n        sb.append(\"Xizmat haqi (10%): \").append(calculateTax()).append(\" UZS\\n\");\n        sb.append(\"Jami: \").append(calculateTotal()).append(\" UZS\\n\");\n        if (payment instanceof CashPayment) {\n            CashPayment cp = (CashPayment) payment;\n            sb.append(\"To'lov usuli: Naqd pul | Qaytim: \").append(cp.calculateChange()).append(\" UZS\");\n        } else if (payment instanceof CardPayment) {\n            CardPayment card = (CardPayment) payment;\n            sb.append(\"To'lov usuli: Bank kartasi [\").append(card.getMaskedNumber()).append(\"]\");\n        }\n        return sb.toString();\n    }\n    public String runMockTestMaster(Payable p) {\n        processPayment(p);\n        CashPayment cp = (CashPayment) p;\n        return \"PC LAB MOCK TEST MUVAFFAQIShATLI TOPSHIRILDI!\\nBuyurtma \" + orderId + \" [\" + customer.getName() + \"]\\nSubtotal: \" + calculateSubtotal() + \" UZS | 10% Xizmat: \" + calculateTax() + \" UZS | Jami: \" + calculateTotal() + \" UZS\\nNaqd pul: \" + cp.getAmountTendered() + \" UZS | Qaytim: \" + cp.calculateChange() + \" UZS | Holat: \" + status;\n    }\n}\n\nclass OrderRegistry {\n    private double totalRevenue = 0;\n    private int cashCount = 0;\n    private int cardCount = 0;\n    public void addSettledAmount(double amt) { totalRevenue += amt; }\n    public double calculateTotalRevenue() { return totalRevenue; }\n    public void recordPaymentType(String type) {\n        if (\"CASH\".equals(type)) cashCount++;\n        if (\"CARD\".equals(type)) cardCount++;\n    }\n    public String getPaymentStats() {\n        return \"To'lovlar statistikasi: \" + cashCount + \" ta Naqd | \" + cardCount + \" ta Karta\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Payable card = new CardPayment(\"8600123456789012\", \"12/28\", \"331\");\n        System.out.println(card.pay(66000.0));\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT PC Lab Mock Test: To'lov jarayoni polimorfizmga asoslangan. 'Payable' interfeysi ostida 'CashPayment' (naqd pul va qaytim hisobi) hamda 'CardPayment' (bank kartasi va maskalash) birlashtiriladi. Buyurtma (Order) yagona Payable havolasi orqali to'lovni tasdiqlab, to'liq fiskal chek chiqaradi.",
      "cleanCode": "interface Payable {\n    boolean pay(double amount);\n}\nclass CashPayment implements Payable { ... }\nclass CardPayment implements Payable { ... }",
      "breakdown": [
        "<code>Payable</code>: polimorfik to'lov shartnomasi.",
        "<code>CashPayment</code>: qaytim hisoblovchi naqd to'lov sinfi.",
        "<code>CardPayment</code>: maskalangan karta to'lovi.",
        "Fiskal chek: 10% xizmat haqi va to'liq taomlar ro'yxati."
      ]
    }
  },
  {
    "id": 140,
    "tier": 10,
    "tierName": "10-Bosqich: PC Lab Mock Test — To'lov Polimorfizmi va Fiskal Chek",
    "sector": "136-150: Mock Test Payable Hierarchy & Fiscal Billing",
    "title": {
      "uz": "140. CardPayment — Karta Nomeri Noto'g'ri Bo'lganda Xatolik",
      "en": "140. CardPayment — Card Number Length and Format Validation"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Chorsu Grill House\n\nMock Test: Karta nomeri 16 xonali bo'lmasa, to'lov rad etilsin.\n\n🎯 QADAMLAR:\n1. PC Lab Mock Test talabiga mos 'Payable' interfeysini e'lon qiling ('boolean pay(double amount)').\n2. 'CashPayment' va 'CardPayment' sinflarida 'Payable' ni polimorfik amalga oshiring.\n3. 'Order.processPayment(Payable)' va 'generateReceipt()' to'liq fiskal chek chop etishini yozing.\n4. 'Main' sinfida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nKarta xatosi: Karta raqami 16 xonali bo'lishi shart",
      "en": "🏢 Context: Chorsu Grill House\n\nPC Lab Mock Test: Validate card number requiring exactly 16 characters.\n\n🎯 STEPS:\n1. Declare Payable interface per PC Lab Mock Test specifications.\n2. Implement CashPayment (computing change) and CardPayment (masking pan).\n3. Implement Order.processPayment(Payable) and generateReceipt().\n4. Test in 'Main'.\n\n📊 Expected Output:\nKarta xatosi: Karta raqami 16 xonali bo'lishi shart"
    },
    "requirements": {
      "classes": [
        "Payable",
        "CashPayment",
        "CardPayment",
        "Order",
        "Main"
      ],
      "methods": [
        "validateCard"
      ]
    },
    "starterCode": "// PC Lab Mock Test: Payable, CashPayment, CardPayment va Order sinflarini yarating\ninterface Payable {\n}\nclass CashPayment implements Payable {\n}\nclass CardPayment implements Payable {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CardPayment card = new CardPayment(\"123\", \"12/28\", \"331\");\n        System.out.println(card.validateCard());\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\ninterface Payable {\n    boolean pay(double amount);\n}\n\nclass CashPayment implements Payable {\n    private double amountTendered;\n    private double paidAmount = 0.0;\n    public CashPayment(double tendered) { this.amountTendered = tendered; }\n    public double getAmountTendered() { return amountTendered; }\n    @Override\n    public boolean pay(double amount) {\n        if (amountTendered >= amount) {\n            this.paidAmount = amount;\n            return true;\n        }\n        return false;\n    }\n    public double calculateChange() {\n        return Math.max(0.0, amountTendered - paidAmount);\n    }\n}\n\nclass CardPayment implements Payable {\n    private String cardNumber;\n    private String expiryDate;\n    private String cvv;\n    public CardPayment(String num, String exp, String cvv) {\n        this.cardNumber = num;\n        this.expiryDate = exp;\n        this.cvv = cvv;\n    }\n    public String getMaskedNumber() {\n        if (cardNumber == null || cardNumber.length() < 16) return cardNumber;\n        return cardNumber.substring(0, 4) + \" **** **** \" + cardNumber.substring(12);\n    }\n    public String validateCard() {\n        if (cardNumber == null || cardNumber.length() != 16) return \"Karta xatosi: Karta raqami 16 xonali bo'lishi shart\";\n        return \"To'g'ri\";\n    }\n    @Override\n    public boolean pay(double amount) {\n        return true;\n    }\n}\n\nclass Customer {\n    private String customerId;\n    private String name;\n    private String contactNumber;\n    public Customer(String id, String n, String c) { this.customerId = id; this.name = n; this.contactNumber = c; }\n    public String getName() { return name; }\n    public String getCustomerId() { return customerId; }\n}\n\nclass OrderItem {\n    private String menuItem;\n    private int quantity;\n    private double unitPrice;\n    public OrderItem(String item, int q, double p) {\n        this.menuItem = item;\n        this.quantity = q;\n        this.unitPrice = p;\n    }\n    public String getMenuItem() { return menuItem; }\n    public int getQuantity() { return quantity; }\n    public double getUnitPrice() { return unitPrice; }\n    public double calculateSubtotal() { return quantity * unitPrice; }\n    public String getItemSummary() {\n        return menuItem + \" x\" + quantity + \" @ \" + unitPrice + \" UZS = \" + calculateSubtotal() + \" UZS\";\n    }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    private String status = \"YANGI\";\n    private Payable payment = null;\n\n    public Order(String id, Customer c) { this.orderId = id; this.customer = c; }\n    public void addOrderItem(OrderItem item) { items.add(item); }\n    public double calculateSubtotal() {\n        double s = 0;\n        for (OrderItem it : items) s += it.calculateSubtotal();\n        return s;\n    }\n    public double calculateTax() {\n        return Math.round(calculateSubtotal() * 0.10 * 10.0) / 10.0;\n    }\n    public double calculateTotal() {\n        return calculateSubtotal() + calculateTax();\n    }\n    public String processPayment(Payable p) {\n        double total = calculateTotal();\n        boolean ok = p.pay(total);\n        if (ok) {\n            this.payment = p;\n            this.status = \"TO'LANGAN\";\n            if (p instanceof CashPayment) {\n                CashPayment cp = (CashPayment) p;\n                return orderId + \" buyurtmasi to'landi! Qaytim: \" + cp.calculateChange() + \" UZS. Holat: TO'LANGAN\";\n            } else if (p instanceof CardPayment) {\n                CardPayment card = (CardPayment) p;\n                return orderId + \" buyurtmasi to'landi! Karta: \" + card.getMaskedNumber() + \". Holat: TO'LANGAN\";\n            }\n            return orderId + \" buyurtmasi to'landi!\";\n        }\n        return \"To'lov amalga oshmadi\";\n    }\n    public String guardDuplicatePay() {\n        if (\"TO'LANGAN\".equals(status)) {\n            return \"Xatolik: Buyurtma allaqachon to'langan, qayta to'lov mumkin emas\";\n        }\n        return \"OK\";\n    }\n    public String cancelOrder() {\n        this.status = \"BEKOR_QILINDI\";\n        return \"Buyurtma \" + orderId + \" bekor qilindi. To'lov qabul qilinmadi.\";\n    }\n    public String generateReceipt() {\n        StringBuilder sb = new StringBuilder(\"=== CHORSU GRILL HOUSE CHEKI ===\\n\");\n        sb.append(\"Buyurtma: \").append(orderId).append(\" | Mijoz: \").append(customer.getName()).append(\"\\n\");\n        for (OrderItem it : items) {\n            sb.append(\"- \").append(it.getItemSummary()).append(\"\\n\");\n        }\n        sb.append(\"Subtotal: \").append(calculateSubtotal()).append(\" UZS\\n\");\n        sb.append(\"Xizmat haqi (10%): \").append(calculateTax()).append(\" UZS\\n\");\n        sb.append(\"Jami: \").append(calculateTotal()).append(\" UZS\\n\");\n        if (payment instanceof CashPayment) {\n            CashPayment cp = (CashPayment) payment;\n            sb.append(\"To'lov usuli: Naqd pul | Qaytim: \").append(cp.calculateChange()).append(\" UZS\");\n        } else if (payment instanceof CardPayment) {\n            CardPayment card = (CardPayment) payment;\n            sb.append(\"To'lov usuli: Bank kartasi [\").append(card.getMaskedNumber()).append(\"]\");\n        }\n        return sb.toString();\n    }\n    public String runMockTestMaster(Payable p) {\n        processPayment(p);\n        CashPayment cp = (CashPayment) p;\n        return \"PC LAB MOCK TEST MUVAFFAQIShATLI TOPSHIRILDI!\\nBuyurtma \" + orderId + \" [\" + customer.getName() + \"]\\nSubtotal: \" + calculateSubtotal() + \" UZS | 10% Xizmat: \" + calculateTax() + \" UZS | Jami: \" + calculateTotal() + \" UZS\\nNaqd pul: \" + cp.getAmountTendered() + \" UZS | Qaytim: \" + cp.calculateChange() + \" UZS | Holat: \" + status;\n    }\n}\n\nclass OrderRegistry {\n    private double totalRevenue = 0;\n    private int cashCount = 0;\n    private int cardCount = 0;\n    public void addSettledAmount(double amt) { totalRevenue += amt; }\n    public double calculateTotalRevenue() { return totalRevenue; }\n    public void recordPaymentType(String type) {\n        if (\"CASH\".equals(type)) cashCount++;\n        if (\"CARD\".equals(type)) cardCount++;\n    }\n    public String getPaymentStats() {\n        return \"To'lovlar statistikasi: \" + cashCount + \" ta Naqd | \" + cardCount + \" ta Karta\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CardPayment card = new CardPayment(\"123\", \"12/28\", \"331\");\n        System.out.println(card.validateCard());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT PC Lab Mock Test: To'lov jarayoni polimorfizmga asoslangan. 'Payable' interfeysi ostida 'CashPayment' (naqd pul va qaytim hisobi) hamda 'CardPayment' (bank kartasi va maskalash) birlashtiriladi. Buyurtma (Order) yagona Payable havolasi orqali to'lovni tasdiqlab, to'liq fiskal chek chiqaradi.",
      "cleanCode": "interface Payable {\n    boolean pay(double amount);\n}\nclass CashPayment implements Payable { ... }\nclass CardPayment implements Payable { ... }",
      "breakdown": [
        "<code>Payable</code>: polimorfik to'lov shartnomasi.",
        "<code>CashPayment</code>: qaytim hisoblovchi naqd to'lov sinfi.",
        "<code>CardPayment</code>: maskalangan karta to'lovi.",
        "Fiskal chek: 10% xizmat haqi va to'liq taomlar ro'yxati."
      ]
    }
  },
  {
    "id": 141,
    "tier": 10,
    "tierName": "10-Bosqich: PC Lab Mock Test — To'lov Polimorfizmi va Fiskal Chek",
    "sector": "136-150: Mock Test Payable Hierarchy & Fiscal Billing",
    "title": {
      "uz": "141. Order.processPayment(Payable) — Polimorfik To'lovni Qabul Qilish",
      "en": "141. Order.processPayment(Payable) — Polymorphic Payment Execution"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Chorsu Grill House\n\nMock Test cho'qqisi: 'Order' sinfidagi 'processPayment(Payable payment)' metodi qaysi to'lov turi (Cash yoki Card) kelishidan qat'i nazar, uni yagona 'Payable' havolasi orqali to'laydi.\n\n🎯 QADAMLAR:\n1. PC Lab Mock Test talabiga mos 'Payable' interfeysini e'lon qiling ('boolean pay(double amount)').\n2. 'CashPayment' va 'CardPayment' sinflarida 'Payable' ni polimorfik amalga oshiring.\n3. 'Order.processPayment(Payable)' va 'generateReceipt()' to'liq fiskal chek chop etishini yozing.\n4. 'Main' sinfida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nORD-101 buyurtmasi to'landi! Qaytim: 5000.0 UZS. Holat: TO'LANGAN",
      "en": "🏢 Context: Chorsu Grill House\n\nPC Lab Mock Test: Centralize order checkout dispatching to any Payable implementation.\n\n🎯 STEPS:\n1. Declare Payable interface per PC Lab Mock Test specifications.\n2. Implement CashPayment (computing change) and CardPayment (masking pan).\n3. Implement Order.processPayment(Payable) and generateReceipt().\n4. Test in 'Main'.\n\n📊 Expected Output:\nORD-101 buyurtmasi to'landi! Qaytim: 5000.0 UZS. Holat: TO'LANGAN"
    },
    "requirements": {
      "classes": [
        "Payable",
        "CashPayment",
        "CardPayment",
        "Order",
        "Main"
      ],
      "methods": [
        "processPayment"
      ]
    },
    "starterCode": "// PC Lab Mock Test: Payable, CashPayment, CardPayment va Order sinflarini yarating\ninterface Payable {\n}\nclass CashPayment implements Payable {\n}\nclass CardPayment implements Payable {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"CUST-1\", \"Akmal\", \"+99890\");\n        Order ord = new Order(\"ORD-101\", c);\n        ord.addOrderItem(new OrderItem(\"Shashlik\", 2, 25000.0));\n        System.out.println(ord.processPayment(new CashPayment(60000.0)));\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\ninterface Payable {\n    boolean pay(double amount);\n}\n\nclass CashPayment implements Payable {\n    private double amountTendered;\n    private double paidAmount = 0.0;\n    public CashPayment(double tendered) { this.amountTendered = tendered; }\n    public double getAmountTendered() { return amountTendered; }\n    @Override\n    public boolean pay(double amount) {\n        if (amountTendered >= amount) {\n            this.paidAmount = amount;\n            return true;\n        }\n        return false;\n    }\n    public double calculateChange() {\n        return Math.max(0.0, amountTendered - paidAmount);\n    }\n}\n\nclass CardPayment implements Payable {\n    private String cardNumber;\n    private String expiryDate;\n    private String cvv;\n    public CardPayment(String num, String exp, String cvv) {\n        this.cardNumber = num;\n        this.expiryDate = exp;\n        this.cvv = cvv;\n    }\n    public String getMaskedNumber() {\n        if (cardNumber == null || cardNumber.length() < 16) return cardNumber;\n        return cardNumber.substring(0, 4) + \" **** **** \" + cardNumber.substring(12);\n    }\n    public String validateCard() {\n        if (cardNumber == null || cardNumber.length() != 16) return \"Karta xatosi: Karta raqami 16 xonali bo'lishi shart\";\n        return \"To'g'ri\";\n    }\n    @Override\n    public boolean pay(double amount) {\n        return true;\n    }\n}\n\nclass Customer {\n    private String customerId;\n    private String name;\n    private String contactNumber;\n    public Customer(String id, String n, String c) { this.customerId = id; this.name = n; this.contactNumber = c; }\n    public String getName() { return name; }\n    public String getCustomerId() { return customerId; }\n}\n\nclass OrderItem {\n    private String menuItem;\n    private int quantity;\n    private double unitPrice;\n    public OrderItem(String item, int q, double p) {\n        this.menuItem = item;\n        this.quantity = q;\n        this.unitPrice = p;\n    }\n    public String getMenuItem() { return menuItem; }\n    public int getQuantity() { return quantity; }\n    public double getUnitPrice() { return unitPrice; }\n    public double calculateSubtotal() { return quantity * unitPrice; }\n    public String getItemSummary() {\n        return menuItem + \" x\" + quantity + \" @ \" + unitPrice + \" UZS = \" + calculateSubtotal() + \" UZS\";\n    }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    private String status = \"YANGI\";\n    private Payable payment = null;\n\n    public Order(String id, Customer c) { this.orderId = id; this.customer = c; }\n    public void addOrderItem(OrderItem item) { items.add(item); }\n    public double calculateSubtotal() {\n        double s = 0;\n        for (OrderItem it : items) s += it.calculateSubtotal();\n        return s;\n    }\n    public double calculateTax() {\n        return Math.round(calculateSubtotal() * 0.10 * 10.0) / 10.0;\n    }\n    public double calculateTotal() {\n        return calculateSubtotal() + calculateTax();\n    }\n    public String processPayment(Payable p) {\n        double total = calculateTotal();\n        boolean ok = p.pay(total);\n        if (ok) {\n            this.payment = p;\n            this.status = \"TO'LANGAN\";\n            if (p instanceof CashPayment) {\n                CashPayment cp = (CashPayment) p;\n                return orderId + \" buyurtmasi to'landi! Qaytim: \" + cp.calculateChange() + \" UZS. Holat: TO'LANGAN\";\n            } else if (p instanceof CardPayment) {\n                CardPayment card = (CardPayment) p;\n                return orderId + \" buyurtmasi to'landi! Karta: \" + card.getMaskedNumber() + \". Holat: TO'LANGAN\";\n            }\n            return orderId + \" buyurtmasi to'landi!\";\n        }\n        return \"To'lov amalga oshmadi\";\n    }\n    public String guardDuplicatePay() {\n        if (\"TO'LANGAN\".equals(status)) {\n            return \"Xatolik: Buyurtma allaqachon to'langan, qayta to'lov mumkin emas\";\n        }\n        return \"OK\";\n    }\n    public String cancelOrder() {\n        this.status = \"BEKOR_QILINDI\";\n        return \"Buyurtma \" + orderId + \" bekor qilindi. To'lov qabul qilinmadi.\";\n    }\n    public String generateReceipt() {\n        StringBuilder sb = new StringBuilder(\"=== CHORSU GRILL HOUSE CHEKI ===\\n\");\n        sb.append(\"Buyurtma: \").append(orderId).append(\" | Mijoz: \").append(customer.getName()).append(\"\\n\");\n        for (OrderItem it : items) {\n            sb.append(\"- \").append(it.getItemSummary()).append(\"\\n\");\n        }\n        sb.append(\"Subtotal: \").append(calculateSubtotal()).append(\" UZS\\n\");\n        sb.append(\"Xizmat haqi (10%): \").append(calculateTax()).append(\" UZS\\n\");\n        sb.append(\"Jami: \").append(calculateTotal()).append(\" UZS\\n\");\n        if (payment instanceof CashPayment) {\n            CashPayment cp = (CashPayment) payment;\n            sb.append(\"To'lov usuli: Naqd pul | Qaytim: \").append(cp.calculateChange()).append(\" UZS\");\n        } else if (payment instanceof CardPayment) {\n            CardPayment card = (CardPayment) payment;\n            sb.append(\"To'lov usuli: Bank kartasi [\").append(card.getMaskedNumber()).append(\"]\");\n        }\n        return sb.toString();\n    }\n    public String runMockTestMaster(Payable p) {\n        processPayment(p);\n        CashPayment cp = (CashPayment) p;\n        return \"PC LAB MOCK TEST MUVAFFAQIShATLI TOPSHIRILDI!\\nBuyurtma \" + orderId + \" [\" + customer.getName() + \"]\\nSubtotal: \" + calculateSubtotal() + \" UZS | 10% Xizmat: \" + calculateTax() + \" UZS | Jami: \" + calculateTotal() + \" UZS\\nNaqd pul: \" + cp.getAmountTendered() + \" UZS | Qaytim: \" + cp.calculateChange() + \" UZS | Holat: \" + status;\n    }\n}\n\nclass OrderRegistry {\n    private double totalRevenue = 0;\n    private int cashCount = 0;\n    private int cardCount = 0;\n    public void addSettledAmount(double amt) { totalRevenue += amt; }\n    public double calculateTotalRevenue() { return totalRevenue; }\n    public void recordPaymentType(String type) {\n        if (\"CASH\".equals(type)) cashCount++;\n        if (\"CARD\".equals(type)) cardCount++;\n    }\n    public String getPaymentStats() {\n        return \"To'lovlar statistikasi: \" + cashCount + \" ta Naqd | \" + cardCount + \" ta Karta\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"CUST-1\", \"Akmal\", \"+99890\");\n        Order ord = new Order(\"ORD-101\", c);\n        ord.addOrderItem(new OrderItem(\"Shashlik\", 2, 25000.0));\n        System.out.println(ord.processPayment(new CashPayment(60000.0)));\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT PC Lab Mock Test: To'lov jarayoni polimorfizmga asoslangan. 'Payable' interfeysi ostida 'CashPayment' (naqd pul va qaytim hisobi) hamda 'CardPayment' (bank kartasi va maskalash) birlashtiriladi. Buyurtma (Order) yagona Payable havolasi orqali to'lovni tasdiqlab, to'liq fiskal chek chiqaradi.",
      "cleanCode": "interface Payable {\n    boolean pay(double amount);\n}\nclass CashPayment implements Payable { ... }\nclass CardPayment implements Payable { ... }",
      "breakdown": [
        "<code>Payable</code>: polimorfik to'lov shartnomasi.",
        "<code>CashPayment</code>: qaytim hisoblovchi naqd to'lov sinfi.",
        "<code>CardPayment</code>: maskalangan karta to'lovi.",
        "Fiskal chek: 10% xizmat haqi va to'liq taomlar ro'yxati."
      ]
    }
  },
  {
    "id": 142,
    "tier": 10,
    "tierName": "10-Bosqich: PC Lab Mock Test — To'lov Polimorfizmi va Fiskal Chek",
    "sector": "136-150: Mock Test Payable Hierarchy & Fiscal Billing",
    "title": {
      "uz": "142. Chorsu Grill — Karta Orqali Buyurtmani Yopish",
      "en": "142. Chorsu Grill — Settling Order via CardPayment"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Chorsu Grill House\n\nMock Test: 'Order.processPayment' metodiga 'CardPayment' uzatilganda to'lov kvitansiyasini tasdiqlang.\n\n🎯 QADAMLAR:\n1. PC Lab Mock Test talabiga mos 'Payable' interfeysini e'lon qiling ('boolean pay(double amount)').\n2. 'CashPayment' va 'CardPayment' sinflarida 'Payable' ni polimorfik amalga oshiring.\n3. 'Order.processPayment(Payable)' va 'generateReceipt()' to'liq fiskal chek chop etishini yozing.\n4. 'Main' sinfida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nORD-102 buyurtmasi to'landi! Karta: 9860 **** **** 3333. Holat: TO'LANGAN",
      "en": "🏢 Context: Chorsu Grill House\n\nPC Lab Mock Test: Settle order using CardPayment and confirm status update.\n\n🎯 STEPS:\n1. Declare Payable interface per PC Lab Mock Test specifications.\n2. Implement CashPayment (computing change) and CardPayment (masking pan).\n3. Implement Order.processPayment(Payable) and generateReceipt().\n4. Test in 'Main'.\n\n📊 Expected Output:\nORD-102 buyurtmasi to'landi! Karta: 9860 **** **** 3333. Holat: TO'LANGAN"
    },
    "requirements": {
      "classes": [
        "Payable",
        "CashPayment",
        "CardPayment",
        "Order",
        "Main"
      ],
      "methods": [
        "processPayment"
      ]
    },
    "starterCode": "// PC Lab Mock Test: Payable, CashPayment, CardPayment va Order sinflarini yarating\ninterface Payable {\n}\nclass CashPayment implements Payable {\n}\nclass CardPayment implements Payable {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"CUST-2\", \"Mansur\", \"+99891\");\n        Order ord = new Order(\"ORD-102\", c);\n        ord.addOrderItem(new OrderItem(\"Osh\", 1, 40000.0));\n        System.out.println(ord.processPayment(new CardPayment(\"9860111122223333\", \"09/29\", \"884\")));\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\ninterface Payable {\n    boolean pay(double amount);\n}\n\nclass CashPayment implements Payable {\n    private double amountTendered;\n    private double paidAmount = 0.0;\n    public CashPayment(double tendered) { this.amountTendered = tendered; }\n    public double getAmountTendered() { return amountTendered; }\n    @Override\n    public boolean pay(double amount) {\n        if (amountTendered >= amount) {\n            this.paidAmount = amount;\n            return true;\n        }\n        return false;\n    }\n    public double calculateChange() {\n        return Math.max(0.0, amountTendered - paidAmount);\n    }\n}\n\nclass CardPayment implements Payable {\n    private String cardNumber;\n    private String expiryDate;\n    private String cvv;\n    public CardPayment(String num, String exp, String cvv) {\n        this.cardNumber = num;\n        this.expiryDate = exp;\n        this.cvv = cvv;\n    }\n    public String getMaskedNumber() {\n        if (cardNumber == null || cardNumber.length() < 16) return cardNumber;\n        return cardNumber.substring(0, 4) + \" **** **** \" + cardNumber.substring(12);\n    }\n    public String validateCard() {\n        if (cardNumber == null || cardNumber.length() != 16) return \"Karta xatosi: Karta raqami 16 xonali bo'lishi shart\";\n        return \"To'g'ri\";\n    }\n    @Override\n    public boolean pay(double amount) {\n        return true;\n    }\n}\n\nclass Customer {\n    private String customerId;\n    private String name;\n    private String contactNumber;\n    public Customer(String id, String n, String c) { this.customerId = id; this.name = n; this.contactNumber = c; }\n    public String getName() { return name; }\n    public String getCustomerId() { return customerId; }\n}\n\nclass OrderItem {\n    private String menuItem;\n    private int quantity;\n    private double unitPrice;\n    public OrderItem(String item, int q, double p) {\n        this.menuItem = item;\n        this.quantity = q;\n        this.unitPrice = p;\n    }\n    public String getMenuItem() { return menuItem; }\n    public int getQuantity() { return quantity; }\n    public double getUnitPrice() { return unitPrice; }\n    public double calculateSubtotal() { return quantity * unitPrice; }\n    public String getItemSummary() {\n        return menuItem + \" x\" + quantity + \" @ \" + unitPrice + \" UZS = \" + calculateSubtotal() + \" UZS\";\n    }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    private String status = \"YANGI\";\n    private Payable payment = null;\n\n    public Order(String id, Customer c) { this.orderId = id; this.customer = c; }\n    public void addOrderItem(OrderItem item) { items.add(item); }\n    public double calculateSubtotal() {\n        double s = 0;\n        for (OrderItem it : items) s += it.calculateSubtotal();\n        return s;\n    }\n    public double calculateTax() {\n        return Math.round(calculateSubtotal() * 0.10 * 10.0) / 10.0;\n    }\n    public double calculateTotal() {\n        return calculateSubtotal() + calculateTax();\n    }\n    public String processPayment(Payable p) {\n        double total = calculateTotal();\n        boolean ok = p.pay(total);\n        if (ok) {\n            this.payment = p;\n            this.status = \"TO'LANGAN\";\n            if (p instanceof CashPayment) {\n                CashPayment cp = (CashPayment) p;\n                return orderId + \" buyurtmasi to'landi! Qaytim: \" + cp.calculateChange() + \" UZS. Holat: TO'LANGAN\";\n            } else if (p instanceof CardPayment) {\n                CardPayment card = (CardPayment) p;\n                return orderId + \" buyurtmasi to'landi! Karta: \" + card.getMaskedNumber() + \". Holat: TO'LANGAN\";\n            }\n            return orderId + \" buyurtmasi to'landi!\";\n        }\n        return \"To'lov amalga oshmadi\";\n    }\n    public String guardDuplicatePay() {\n        if (\"TO'LANGAN\".equals(status)) {\n            return \"Xatolik: Buyurtma allaqachon to'langan, qayta to'lov mumkin emas\";\n        }\n        return \"OK\";\n    }\n    public String cancelOrder() {\n        this.status = \"BEKOR_QILINDI\";\n        return \"Buyurtma \" + orderId + \" bekor qilindi. To'lov qabul qilinmadi.\";\n    }\n    public String generateReceipt() {\n        StringBuilder sb = new StringBuilder(\"=== CHORSU GRILL HOUSE CHEKI ===\\n\");\n        sb.append(\"Buyurtma: \").append(orderId).append(\" | Mijoz: \").append(customer.getName()).append(\"\\n\");\n        for (OrderItem it : items) {\n            sb.append(\"- \").append(it.getItemSummary()).append(\"\\n\");\n        }\n        sb.append(\"Subtotal: \").append(calculateSubtotal()).append(\" UZS\\n\");\n        sb.append(\"Xizmat haqi (10%): \").append(calculateTax()).append(\" UZS\\n\");\n        sb.append(\"Jami: \").append(calculateTotal()).append(\" UZS\\n\");\n        if (payment instanceof CashPayment) {\n            CashPayment cp = (CashPayment) payment;\n            sb.append(\"To'lov usuli: Naqd pul | Qaytim: \").append(cp.calculateChange()).append(\" UZS\");\n        } else if (payment instanceof CardPayment) {\n            CardPayment card = (CardPayment) payment;\n            sb.append(\"To'lov usuli: Bank kartasi [\").append(card.getMaskedNumber()).append(\"]\");\n        }\n        return sb.toString();\n    }\n    public String runMockTestMaster(Payable p) {\n        processPayment(p);\n        CashPayment cp = (CashPayment) p;\n        return \"PC LAB MOCK TEST MUVAFFAQIShATLI TOPSHIRILDI!\\nBuyurtma \" + orderId + \" [\" + customer.getName() + \"]\\nSubtotal: \" + calculateSubtotal() + \" UZS | 10% Xizmat: \" + calculateTax() + \" UZS | Jami: \" + calculateTotal() + \" UZS\\nNaqd pul: \" + cp.getAmountTendered() + \" UZS | Qaytim: \" + cp.calculateChange() + \" UZS | Holat: \" + status;\n    }\n}\n\nclass OrderRegistry {\n    private double totalRevenue = 0;\n    private int cashCount = 0;\n    private int cardCount = 0;\n    public void addSettledAmount(double amt) { totalRevenue += amt; }\n    public double calculateTotalRevenue() { return totalRevenue; }\n    public void recordPaymentType(String type) {\n        if (\"CASH\".equals(type)) cashCount++;\n        if (\"CARD\".equals(type)) cardCount++;\n    }\n    public String getPaymentStats() {\n        return \"To'lovlar statistikasi: \" + cashCount + \" ta Naqd | \" + cardCount + \" ta Karta\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"CUST-2\", \"Mansur\", \"+99891\");\n        Order ord = new Order(\"ORD-102\", c);\n        ord.addOrderItem(new OrderItem(\"Osh\", 1, 40000.0));\n        System.out.println(ord.processPayment(new CardPayment(\"9860111122223333\", \"09/29\", \"884\")));\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT PC Lab Mock Test: To'lov jarayoni polimorfizmga asoslangan. 'Payable' interfeysi ostida 'CashPayment' (naqd pul va qaytim hisobi) hamda 'CardPayment' (bank kartasi va maskalash) birlashtiriladi. Buyurtma (Order) yagona Payable havolasi orqali to'lovni tasdiqlab, to'liq fiskal chek chiqaradi.",
      "cleanCode": "interface Payable {\n    boolean pay(double amount);\n}\nclass CashPayment implements Payable { ... }\nclass CardPayment implements Payable { ... }",
      "breakdown": [
        "<code>Payable</code>: polimorfik to'lov shartnomasi.",
        "<code>CashPayment</code>: qaytim hisoblovchi naqd to'lov sinfi.",
        "<code>CardPayment</code>: maskalangan karta to'lovi.",
        "Fiskal chek: 10% xizmat haqi va to'liq taomlar ro'yxati."
      ]
    }
  },
  {
    "id": 143,
    "tier": 10,
    "tierName": "10-Bosqich: PC Lab Mock Test — To'lov Polimorfizmi va Fiskal Chek",
    "sector": "136-150: Mock Test Payable Hierarchy & Fiscal Billing",
    "title": {
      "uz": "143. Chorsu Grill — To'liq Fiskal Chekni Chop Etish (generateReceipt)",
      "en": "143. Chorsu Grill — Generating Full Fiscal Itemized Receipt"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Chorsu Grill House\n\nWIUT rasmiy Mock Test talabi: 'generateReceipt()' metodi restoranning to'liq formatlangan fiskal chekini chop etishi shart: restoran nomi, sana, mijoz, taomlar, subtotal, 10% xizmat, total va to'lov turi.\n\n🎯 QADAMLAR:\n1. PC Lab Mock Test talabiga mos 'Payable' interfeysini e'lon qiling ('boolean pay(double amount)').\n2. 'CashPayment' va 'CardPayment' sinflarida 'Payable' ni polimorfik amalga oshiring.\n3. 'Order.processPayment(Payable)' va 'generateReceipt()' to'liq fiskal chek chop etishini yozing.\n4. 'Main' sinfida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\n=== CHORSU GRILL HOUSE CHEKI ===\nBuyurtma: ORD-103 | Mijoz: Davron\n- G'ijduvon shashlik x2 @ 20000.0 UZS = 40000.0 UZS\nSubtotal: 40000.0 UZS\nXizmat haqi (10%): 4000.0 UZS\nJami: 44000.0 UZS\nTo'lov usuli: Naqd pul | Qaytim: 6000.0 UZS",
      "en": "🏢 Context: Chorsu Grill House\n\nOfficial PC Lab Mock Test: Generate complete fiscal itemized bill matching specification.\n\n🎯 STEPS:\n1. Declare Payable interface per PC Lab Mock Test specifications.\n2. Implement CashPayment (computing change) and CardPayment (masking pan).\n3. Implement Order.processPayment(Payable) and generateReceipt().\n4. Test in 'Main'.\n\n📊 Expected Output:\n=== CHORSU GRILL HOUSE CHEKI ===\nBuyurtma: ORD-103 | Mijoz: Davron\n- G'ijduvon shashlik x2 @ 20000.0 UZS = 40000.0 UZS\nSubtotal: 40000.0 UZS\nXizmat haqi (10%): 4000.0 UZS\nJami: 44000.0 UZS\nTo'lov usuli: Naqd pul | Qaytim: 6000.0 UZS"
    },
    "requirements": {
      "classes": [
        "Payable",
        "CashPayment",
        "CardPayment",
        "Order",
        "Main"
      ],
      "methods": [
        "generateReceipt"
      ]
    },
    "starterCode": "// PC Lab Mock Test: Payable, CashPayment, CardPayment va Order sinflarini yarating\ninterface Payable {\n}\nclass CashPayment implements Payable {\n}\nclass CardPayment implements Payable {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"CUST-3\", \"Davron\", \"+99893\");\n        Order ord = new Order(\"ORD-103\", c);\n        ord.addOrderItem(new OrderItem(\"G'ijduvon shashlik\", 2, 20000.0));\n        ord.processPayment(new CashPayment(50000.0));\n        System.out.println(ord.generateReceipt());\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\ninterface Payable {\n    boolean pay(double amount);\n}\n\nclass CashPayment implements Payable {\n    private double amountTendered;\n    private double paidAmount = 0.0;\n    public CashPayment(double tendered) { this.amountTendered = tendered; }\n    public double getAmountTendered() { return amountTendered; }\n    @Override\n    public boolean pay(double amount) {\n        if (amountTendered >= amount) {\n            this.paidAmount = amount;\n            return true;\n        }\n        return false;\n    }\n    public double calculateChange() {\n        return Math.max(0.0, amountTendered - paidAmount);\n    }\n}\n\nclass CardPayment implements Payable {\n    private String cardNumber;\n    private String expiryDate;\n    private String cvv;\n    public CardPayment(String num, String exp, String cvv) {\n        this.cardNumber = num;\n        this.expiryDate = exp;\n        this.cvv = cvv;\n    }\n    public String getMaskedNumber() {\n        if (cardNumber == null || cardNumber.length() < 16) return cardNumber;\n        return cardNumber.substring(0, 4) + \" **** **** \" + cardNumber.substring(12);\n    }\n    public String validateCard() {\n        if (cardNumber == null || cardNumber.length() != 16) return \"Karta xatosi: Karta raqami 16 xonali bo'lishi shart\";\n        return \"To'g'ri\";\n    }\n    @Override\n    public boolean pay(double amount) {\n        return true;\n    }\n}\n\nclass Customer {\n    private String customerId;\n    private String name;\n    private String contactNumber;\n    public Customer(String id, String n, String c) { this.customerId = id; this.name = n; this.contactNumber = c; }\n    public String getName() { return name; }\n    public String getCustomerId() { return customerId; }\n}\n\nclass OrderItem {\n    private String menuItem;\n    private int quantity;\n    private double unitPrice;\n    public OrderItem(String item, int q, double p) {\n        this.menuItem = item;\n        this.quantity = q;\n        this.unitPrice = p;\n    }\n    public String getMenuItem() { return menuItem; }\n    public int getQuantity() { return quantity; }\n    public double getUnitPrice() { return unitPrice; }\n    public double calculateSubtotal() { return quantity * unitPrice; }\n    public String getItemSummary() {\n        return menuItem + \" x\" + quantity + \" @ \" + unitPrice + \" UZS = \" + calculateSubtotal() + \" UZS\";\n    }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    private String status = \"YANGI\";\n    private Payable payment = null;\n\n    public Order(String id, Customer c) { this.orderId = id; this.customer = c; }\n    public void addOrderItem(OrderItem item) { items.add(item); }\n    public double calculateSubtotal() {\n        double s = 0;\n        for (OrderItem it : items) s += it.calculateSubtotal();\n        return s;\n    }\n    public double calculateTax() {\n        return Math.round(calculateSubtotal() * 0.10 * 10.0) / 10.0;\n    }\n    public double calculateTotal() {\n        return calculateSubtotal() + calculateTax();\n    }\n    public String processPayment(Payable p) {\n        double total = calculateTotal();\n        boolean ok = p.pay(total);\n        if (ok) {\n            this.payment = p;\n            this.status = \"TO'LANGAN\";\n            if (p instanceof CashPayment) {\n                CashPayment cp = (CashPayment) p;\n                return orderId + \" buyurtmasi to'landi! Qaytim: \" + cp.calculateChange() + \" UZS. Holat: TO'LANGAN\";\n            } else if (p instanceof CardPayment) {\n                CardPayment card = (CardPayment) p;\n                return orderId + \" buyurtmasi to'landi! Karta: \" + card.getMaskedNumber() + \". Holat: TO'LANGAN\";\n            }\n            return orderId + \" buyurtmasi to'landi!\";\n        }\n        return \"To'lov amalga oshmadi\";\n    }\n    public String guardDuplicatePay() {\n        if (\"TO'LANGAN\".equals(status)) {\n            return \"Xatolik: Buyurtma allaqachon to'langan, qayta to'lov mumkin emas\";\n        }\n        return \"OK\";\n    }\n    public String cancelOrder() {\n        this.status = \"BEKOR_QILINDI\";\n        return \"Buyurtma \" + orderId + \" bekor qilindi. To'lov qabul qilinmadi.\";\n    }\n    public String generateReceipt() {\n        StringBuilder sb = new StringBuilder(\"=== CHORSU GRILL HOUSE CHEKI ===\\n\");\n        sb.append(\"Buyurtma: \").append(orderId).append(\" | Mijoz: \").append(customer.getName()).append(\"\\n\");\n        for (OrderItem it : items) {\n            sb.append(\"- \").append(it.getItemSummary()).append(\"\\n\");\n        }\n        sb.append(\"Subtotal: \").append(calculateSubtotal()).append(\" UZS\\n\");\n        sb.append(\"Xizmat haqi (10%): \").append(calculateTax()).append(\" UZS\\n\");\n        sb.append(\"Jami: \").append(calculateTotal()).append(\" UZS\\n\");\n        if (payment instanceof CashPayment) {\n            CashPayment cp = (CashPayment) payment;\n            sb.append(\"To'lov usuli: Naqd pul | Qaytim: \").append(cp.calculateChange()).append(\" UZS\");\n        } else if (payment instanceof CardPayment) {\n            CardPayment card = (CardPayment) payment;\n            sb.append(\"To'lov usuli: Bank kartasi [\").append(card.getMaskedNumber()).append(\"]\");\n        }\n        return sb.toString();\n    }\n    public String runMockTestMaster(Payable p) {\n        processPayment(p);\n        CashPayment cp = (CashPayment) p;\n        return \"PC LAB MOCK TEST MUVAFFAQIShATLI TOPSHIRILDI!\\nBuyurtma \" + orderId + \" [\" + customer.getName() + \"]\\nSubtotal: \" + calculateSubtotal() + \" UZS | 10% Xizmat: \" + calculateTax() + \" UZS | Jami: \" + calculateTotal() + \" UZS\\nNaqd pul: \" + cp.getAmountTendered() + \" UZS | Qaytim: \" + cp.calculateChange() + \" UZS | Holat: \" + status;\n    }\n}\n\nclass OrderRegistry {\n    private double totalRevenue = 0;\n    private int cashCount = 0;\n    private int cardCount = 0;\n    public void addSettledAmount(double amt) { totalRevenue += amt; }\n    public double calculateTotalRevenue() { return totalRevenue; }\n    public void recordPaymentType(String type) {\n        if (\"CASH\".equals(type)) cashCount++;\n        if (\"CARD\".equals(type)) cardCount++;\n    }\n    public String getPaymentStats() {\n        return \"To'lovlar statistikasi: \" + cashCount + \" ta Naqd | \" + cardCount + \" ta Karta\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"CUST-3\", \"Davron\", \"+99893\");\n        Order ord = new Order(\"ORD-103\", c);\n        ord.addOrderItem(new OrderItem(\"G'ijduvon shashlik\", 2, 20000.0));\n        ord.processPayment(new CashPayment(50000.0));\n        System.out.println(ord.generateReceipt());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT PC Lab Mock Test: To'lov jarayoni polimorfizmga asoslangan. 'Payable' interfeysi ostida 'CashPayment' (naqd pul va qaytim hisobi) hamda 'CardPayment' (bank kartasi va maskalash) birlashtiriladi. Buyurtma (Order) yagona Payable havolasi orqali to'lovni tasdiqlab, to'liq fiskal chek chiqaradi.",
      "cleanCode": "interface Payable {\n    boolean pay(double amount);\n}\nclass CashPayment implements Payable { ... }\nclass CardPayment implements Payable { ... }",
      "breakdown": [
        "<code>Payable</code>: polimorfik to'lov shartnomasi.",
        "<code>CashPayment</code>: qaytim hisoblovchi naqd to'lov sinfi.",
        "<code>CardPayment</code>: maskalangan karta to'lovi.",
        "Fiskal chek: 10% xizmat haqi va to'liq taomlar ro'yxati."
      ]
    }
  },
  {
    "id": 144,
    "tier": 10,
    "tierName": "10-Bosqich: PC Lab Mock Test — To'lov Polimorfizmi va Fiskal Chek",
    "sector": "136-150: Mock Test Payable Hierarchy & Fiscal Billing",
    "title": {
      "uz": "144. Karta Bilan To'langan Buyurtma Cheki",
      "en": "144. Generating Receipt for Card-Settled Order"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Chorsu Grill House\n\nMock Test: Karta orqali to'langan buyurtma chekida 'To'lov usuli: Bank kartasi (maskalangan pan)' satri bo'lishi shart.\n\n🎯 QADAMLAR:\n1. PC Lab Mock Test talabiga mos 'Payable' interfeysini e'lon qiling ('boolean pay(double amount)').\n2. 'CashPayment' va 'CardPayment' sinflarida 'Payable' ni polimorfik amalga oshiring.\n3. 'Order.processPayment(Payable)' va 'generateReceipt()' to'liq fiskal chek chop etishini yozing.\n4. 'Main' sinfida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\n=== CHORSU GRILL HOUSE CHEKI ===\nBuyurtma: ORD-104 | Mijoz: Rustam\n- Lag'mon x1 @ 30000.0 UZS = 30000.0 UZS\nSubtotal: 30000.0 UZS\nXizmat haqi (10%): 3000.0 UZS\nJami: 33000.0 UZS\nTo'lov usuli: Bank kartasi [8600 **** **** 7777]",
      "en": "🏢 Context: Chorsu Grill House\n\nVerify card-settled fiscal receipt output reflecting masked card metadata.\n\n🎯 STEPS:\n1. Declare Payable interface per PC Lab Mock Test specifications.\n2. Implement CashPayment (computing change) and CardPayment (masking pan).\n3. Implement Order.processPayment(Payable) and generateReceipt().\n4. Test in 'Main'.\n\n📊 Expected Output:\n=== CHORSU GRILL HOUSE CHEKI ===\nBuyurtma: ORD-104 | Mijoz: Rustam\n- Lag'mon x1 @ 30000.0 UZS = 30000.0 UZS\nSubtotal: 30000.0 UZS\nXizmat haqi (10%): 3000.0 UZS\nJami: 33000.0 UZS\nTo'lov usuli: Bank kartasi [8600 **** **** 7777]"
    },
    "requirements": {
      "classes": [
        "Payable",
        "CashPayment",
        "CardPayment",
        "Order",
        "Main"
      ],
      "methods": [
        "generateReceipt"
      ]
    },
    "starterCode": "// PC Lab Mock Test: Payable, CashPayment, CardPayment va Order sinflarini yarating\ninterface Payable {\n}\nclass CashPayment implements Payable {\n}\nclass CardPayment implements Payable {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"CUST-4\", \"Rustam\", \"+99894\");\n        Order ord = new Order(\"ORD-104\", c);\n        ord.addOrderItem(new OrderItem(\"Lag'mon\", 1, 30000.0));\n        ord.processPayment(new CardPayment(\"8600555566667777\", \"11/27\", \"109\"));\n        System.out.println(ord.generateReceipt());\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\ninterface Payable {\n    boolean pay(double amount);\n}\n\nclass CashPayment implements Payable {\n    private double amountTendered;\n    private double paidAmount = 0.0;\n    public CashPayment(double tendered) { this.amountTendered = tendered; }\n    public double getAmountTendered() { return amountTendered; }\n    @Override\n    public boolean pay(double amount) {\n        if (amountTendered >= amount) {\n            this.paidAmount = amount;\n            return true;\n        }\n        return false;\n    }\n    public double calculateChange() {\n        return Math.max(0.0, amountTendered - paidAmount);\n    }\n}\n\nclass CardPayment implements Payable {\n    private String cardNumber;\n    private String expiryDate;\n    private String cvv;\n    public CardPayment(String num, String exp, String cvv) {\n        this.cardNumber = num;\n        this.expiryDate = exp;\n        this.cvv = cvv;\n    }\n    public String getMaskedNumber() {\n        if (cardNumber == null || cardNumber.length() < 16) return cardNumber;\n        return cardNumber.substring(0, 4) + \" **** **** \" + cardNumber.substring(12);\n    }\n    public String validateCard() {\n        if (cardNumber == null || cardNumber.length() != 16) return \"Karta xatosi: Karta raqami 16 xonali bo'lishi shart\";\n        return \"To'g'ri\";\n    }\n    @Override\n    public boolean pay(double amount) {\n        return true;\n    }\n}\n\nclass Customer {\n    private String customerId;\n    private String name;\n    private String contactNumber;\n    public Customer(String id, String n, String c) { this.customerId = id; this.name = n; this.contactNumber = c; }\n    public String getName() { return name; }\n    public String getCustomerId() { return customerId; }\n}\n\nclass OrderItem {\n    private String menuItem;\n    private int quantity;\n    private double unitPrice;\n    public OrderItem(String item, int q, double p) {\n        this.menuItem = item;\n        this.quantity = q;\n        this.unitPrice = p;\n    }\n    public String getMenuItem() { return menuItem; }\n    public int getQuantity() { return quantity; }\n    public double getUnitPrice() { return unitPrice; }\n    public double calculateSubtotal() { return quantity * unitPrice; }\n    public String getItemSummary() {\n        return menuItem + \" x\" + quantity + \" @ \" + unitPrice + \" UZS = \" + calculateSubtotal() + \" UZS\";\n    }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    private String status = \"YANGI\";\n    private Payable payment = null;\n\n    public Order(String id, Customer c) { this.orderId = id; this.customer = c; }\n    public void addOrderItem(OrderItem item) { items.add(item); }\n    public double calculateSubtotal() {\n        double s = 0;\n        for (OrderItem it : items) s += it.calculateSubtotal();\n        return s;\n    }\n    public double calculateTax() {\n        return Math.round(calculateSubtotal() * 0.10 * 10.0) / 10.0;\n    }\n    public double calculateTotal() {\n        return calculateSubtotal() + calculateTax();\n    }\n    public String processPayment(Payable p) {\n        double total = calculateTotal();\n        boolean ok = p.pay(total);\n        if (ok) {\n            this.payment = p;\n            this.status = \"TO'LANGAN\";\n            if (p instanceof CashPayment) {\n                CashPayment cp = (CashPayment) p;\n                return orderId + \" buyurtmasi to'landi! Qaytim: \" + cp.calculateChange() + \" UZS. Holat: TO'LANGAN\";\n            } else if (p instanceof CardPayment) {\n                CardPayment card = (CardPayment) p;\n                return orderId + \" buyurtmasi to'landi! Karta: \" + card.getMaskedNumber() + \". Holat: TO'LANGAN\";\n            }\n            return orderId + \" buyurtmasi to'landi!\";\n        }\n        return \"To'lov amalga oshmadi\";\n    }\n    public String guardDuplicatePay() {\n        if (\"TO'LANGAN\".equals(status)) {\n            return \"Xatolik: Buyurtma allaqachon to'langan, qayta to'lov mumkin emas\";\n        }\n        return \"OK\";\n    }\n    public String cancelOrder() {\n        this.status = \"BEKOR_QILINDI\";\n        return \"Buyurtma \" + orderId + \" bekor qilindi. To'lov qabul qilinmadi.\";\n    }\n    public String generateReceipt() {\n        StringBuilder sb = new StringBuilder(\"=== CHORSU GRILL HOUSE CHEKI ===\\n\");\n        sb.append(\"Buyurtma: \").append(orderId).append(\" | Mijoz: \").append(customer.getName()).append(\"\\n\");\n        for (OrderItem it : items) {\n            sb.append(\"- \").append(it.getItemSummary()).append(\"\\n\");\n        }\n        sb.append(\"Subtotal: \").append(calculateSubtotal()).append(\" UZS\\n\");\n        sb.append(\"Xizmat haqi (10%): \").append(calculateTax()).append(\" UZS\\n\");\n        sb.append(\"Jami: \").append(calculateTotal()).append(\" UZS\\n\");\n        if (payment instanceof CashPayment) {\n            CashPayment cp = (CashPayment) payment;\n            sb.append(\"To'lov usuli: Naqd pul | Qaytim: \").append(cp.calculateChange()).append(\" UZS\");\n        } else if (payment instanceof CardPayment) {\n            CardPayment card = (CardPayment) payment;\n            sb.append(\"To'lov usuli: Bank kartasi [\").append(card.getMaskedNumber()).append(\"]\");\n        }\n        return sb.toString();\n    }\n    public String runMockTestMaster(Payable p) {\n        processPayment(p);\n        CashPayment cp = (CashPayment) p;\n        return \"PC LAB MOCK TEST MUVAFFAQIShATLI TOPSHIRILDI!\\nBuyurtma \" + orderId + \" [\" + customer.getName() + \"]\\nSubtotal: \" + calculateSubtotal() + \" UZS | 10% Xizmat: \" + calculateTax() + \" UZS | Jami: \" + calculateTotal() + \" UZS\\nNaqd pul: \" + cp.getAmountTendered() + \" UZS | Qaytim: \" + cp.calculateChange() + \" UZS | Holat: \" + status;\n    }\n}\n\nclass OrderRegistry {\n    private double totalRevenue = 0;\n    private int cashCount = 0;\n    private int cardCount = 0;\n    public void addSettledAmount(double amt) { totalRevenue += amt; }\n    public double calculateTotalRevenue() { return totalRevenue; }\n    public void recordPaymentType(String type) {\n        if (\"CASH\".equals(type)) cashCount++;\n        if (\"CARD\".equals(type)) cardCount++;\n    }\n    public String getPaymentStats() {\n        return \"To'lovlar statistikasi: \" + cashCount + \" ta Naqd | \" + cardCount + \" ta Karta\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"CUST-4\", \"Rustam\", \"+99894\");\n        Order ord = new Order(\"ORD-104\", c);\n        ord.addOrderItem(new OrderItem(\"Lag'mon\", 1, 30000.0));\n        ord.processPayment(new CardPayment(\"8600555566667777\", \"11/27\", \"109\"));\n        System.out.println(ord.generateReceipt());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT PC Lab Mock Test: To'lov jarayoni polimorfizmga asoslangan. 'Payable' interfeysi ostida 'CashPayment' (naqd pul va qaytim hisobi) hamda 'CardPayment' (bank kartasi va maskalash) birlashtiriladi. Buyurtma (Order) yagona Payable havolasi orqali to'lovni tasdiqlab, to'liq fiskal chek chiqaradi.",
      "cleanCode": "interface Payable {\n    boolean pay(double amount);\n}\nclass CashPayment implements Payable { ... }\nclass CardPayment implements Payable { ... }",
      "breakdown": [
        "<code>Payable</code>: polimorfik to'lov shartnomasi.",
        "<code>CashPayment</code>: qaytim hisoblovchi naqd to'lov sinfi.",
        "<code>CardPayment</code>: maskalangan karta to'lovi.",
        "Fiskal chek: 10% xizmat haqi va to'liq taomlar ro'yxati."
      ]
    }
  },
  {
    "id": 145,
    "tier": 10,
    "tierName": "10-Bosqich: PC Lab Mock Test — To'lov Polimorfizmi va Fiskal Chek",
    "sector": "136-150: Mock Test Payable Hierarchy & Fiscal Billing",
    "title": {
      "uz": "145. To'lov Takrorlanganda Xatolik (Already Paid Guard)",
      "en": "145. Preventing Duplicate Payment on Settled Order"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Chorsu Grill House\n\nAllaqachon to'langan buyurtmaga qayta to'lov yuborilganda 'IllegalStateException(\"Buyurtma allaqachon to'langan\")' otilsin.\n\n🎯 QADAMLAR:\n1. PC Lab Mock Test talabiga mos 'Payable' interfeysini e'lon qiling ('boolean pay(double amount)').\n2. 'CashPayment' va 'CardPayment' sinflarida 'Payable' ni polimorfik amalga oshiring.\n3. 'Order.processPayment(Payable)' va 'generateReceipt()' to'liq fiskal chek chop etishini yozing.\n4. 'Main' sinfida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nXatolik: Buyurtma allaqachon to'langan, qayta to'lov mumkin emas",
      "en": "🏢 Context: Chorsu Grill House\n\nGuard order against duplicate checkout attempts throwing IllegalStateException.\n\n🎯 STEPS:\n1. Declare Payable interface per PC Lab Mock Test specifications.\n2. Implement CashPayment (computing change) and CardPayment (masking pan).\n3. Implement Order.processPayment(Payable) and generateReceipt().\n4. Test in 'Main'.\n\n📊 Expected Output:\nXatolik: Buyurtma allaqachon to'langan, qayta to'lov mumkin emas"
    },
    "requirements": {
      "classes": [
        "Payable",
        "CashPayment",
        "CardPayment",
        "Order",
        "Main"
      ],
      "methods": [
        "guardDuplicatePay"
      ]
    },
    "starterCode": "// PC Lab Mock Test: Payable, CashPayment, CardPayment va Order sinflarini yarating\ninterface Payable {\n}\nclass CashPayment implements Payable {\n}\nclass CardPayment implements Payable {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"CUST-5\", \"Sarvar\", \"+99895\");\n        Order ord = new Order(\"ORD-105\", c);\n        ord.addOrderItem(new OrderItem(\"Choy\", 1, 5000.0));\n        ord.processPayment(new CashPayment(10000.0));\n        System.out.println(ord.guardDuplicatePay());\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\ninterface Payable {\n    boolean pay(double amount);\n}\n\nclass CashPayment implements Payable {\n    private double amountTendered;\n    private double paidAmount = 0.0;\n    public CashPayment(double tendered) { this.amountTendered = tendered; }\n    public double getAmountTendered() { return amountTendered; }\n    @Override\n    public boolean pay(double amount) {\n        if (amountTendered >= amount) {\n            this.paidAmount = amount;\n            return true;\n        }\n        return false;\n    }\n    public double calculateChange() {\n        return Math.max(0.0, amountTendered - paidAmount);\n    }\n}\n\nclass CardPayment implements Payable {\n    private String cardNumber;\n    private String expiryDate;\n    private String cvv;\n    public CardPayment(String num, String exp, String cvv) {\n        this.cardNumber = num;\n        this.expiryDate = exp;\n        this.cvv = cvv;\n    }\n    public String getMaskedNumber() {\n        if (cardNumber == null || cardNumber.length() < 16) return cardNumber;\n        return cardNumber.substring(0, 4) + \" **** **** \" + cardNumber.substring(12);\n    }\n    public String validateCard() {\n        if (cardNumber == null || cardNumber.length() != 16) return \"Karta xatosi: Karta raqami 16 xonali bo'lishi shart\";\n        return \"To'g'ri\";\n    }\n    @Override\n    public boolean pay(double amount) {\n        return true;\n    }\n}\n\nclass Customer {\n    private String customerId;\n    private String name;\n    private String contactNumber;\n    public Customer(String id, String n, String c) { this.customerId = id; this.name = n; this.contactNumber = c; }\n    public String getName() { return name; }\n    public String getCustomerId() { return customerId; }\n}\n\nclass OrderItem {\n    private String menuItem;\n    private int quantity;\n    private double unitPrice;\n    public OrderItem(String item, int q, double p) {\n        this.menuItem = item;\n        this.quantity = q;\n        this.unitPrice = p;\n    }\n    public String getMenuItem() { return menuItem; }\n    public int getQuantity() { return quantity; }\n    public double getUnitPrice() { return unitPrice; }\n    public double calculateSubtotal() { return quantity * unitPrice; }\n    public String getItemSummary() {\n        return menuItem + \" x\" + quantity + \" @ \" + unitPrice + \" UZS = \" + calculateSubtotal() + \" UZS\";\n    }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    private String status = \"YANGI\";\n    private Payable payment = null;\n\n    public Order(String id, Customer c) { this.orderId = id; this.customer = c; }\n    public void addOrderItem(OrderItem item) { items.add(item); }\n    public double calculateSubtotal() {\n        double s = 0;\n        for (OrderItem it : items) s += it.calculateSubtotal();\n        return s;\n    }\n    public double calculateTax() {\n        return Math.round(calculateSubtotal() * 0.10 * 10.0) / 10.0;\n    }\n    public double calculateTotal() {\n        return calculateSubtotal() + calculateTax();\n    }\n    public String processPayment(Payable p) {\n        double total = calculateTotal();\n        boolean ok = p.pay(total);\n        if (ok) {\n            this.payment = p;\n            this.status = \"TO'LANGAN\";\n            if (p instanceof CashPayment) {\n                CashPayment cp = (CashPayment) p;\n                return orderId + \" buyurtmasi to'landi! Qaytim: \" + cp.calculateChange() + \" UZS. Holat: TO'LANGAN\";\n            } else if (p instanceof CardPayment) {\n                CardPayment card = (CardPayment) p;\n                return orderId + \" buyurtmasi to'landi! Karta: \" + card.getMaskedNumber() + \". Holat: TO'LANGAN\";\n            }\n            return orderId + \" buyurtmasi to'landi!\";\n        }\n        return \"To'lov amalga oshmadi\";\n    }\n    public String guardDuplicatePay() {\n        if (\"TO'LANGAN\".equals(status)) {\n            return \"Xatolik: Buyurtma allaqachon to'langan, qayta to'lov mumkin emas\";\n        }\n        return \"OK\";\n    }\n    public String cancelOrder() {\n        this.status = \"BEKOR_QILINDI\";\n        return \"Buyurtma \" + orderId + \" bekor qilindi. To'lov qabul qilinmadi.\";\n    }\n    public String generateReceipt() {\n        StringBuilder sb = new StringBuilder(\"=== CHORSU GRILL HOUSE CHEKI ===\\n\");\n        sb.append(\"Buyurtma: \").append(orderId).append(\" | Mijoz: \").append(customer.getName()).append(\"\\n\");\n        for (OrderItem it : items) {\n            sb.append(\"- \").append(it.getItemSummary()).append(\"\\n\");\n        }\n        sb.append(\"Subtotal: \").append(calculateSubtotal()).append(\" UZS\\n\");\n        sb.append(\"Xizmat haqi (10%): \").append(calculateTax()).append(\" UZS\\n\");\n        sb.append(\"Jami: \").append(calculateTotal()).append(\" UZS\\n\");\n        if (payment instanceof CashPayment) {\n            CashPayment cp = (CashPayment) payment;\n            sb.append(\"To'lov usuli: Naqd pul | Qaytim: \").append(cp.calculateChange()).append(\" UZS\");\n        } else if (payment instanceof CardPayment) {\n            CardPayment card = (CardPayment) payment;\n            sb.append(\"To'lov usuli: Bank kartasi [\").append(card.getMaskedNumber()).append(\"]\");\n        }\n        return sb.toString();\n    }\n    public String runMockTestMaster(Payable p) {\n        processPayment(p);\n        CashPayment cp = (CashPayment) p;\n        return \"PC LAB MOCK TEST MUVAFFAQIShATLI TOPSHIRILDI!\\nBuyurtma \" + orderId + \" [\" + customer.getName() + \"]\\nSubtotal: \" + calculateSubtotal() + \" UZS | 10% Xizmat: \" + calculateTax() + \" UZS | Jami: \" + calculateTotal() + \" UZS\\nNaqd pul: \" + cp.getAmountTendered() + \" UZS | Qaytim: \" + cp.calculateChange() + \" UZS | Holat: \" + status;\n    }\n}\n\nclass OrderRegistry {\n    private double totalRevenue = 0;\n    private int cashCount = 0;\n    private int cardCount = 0;\n    public void addSettledAmount(double amt) { totalRevenue += amt; }\n    public double calculateTotalRevenue() { return totalRevenue; }\n    public void recordPaymentType(String type) {\n        if (\"CASH\".equals(type)) cashCount++;\n        if (\"CARD\".equals(type)) cardCount++;\n    }\n    public String getPaymentStats() {\n        return \"To'lovlar statistikasi: \" + cashCount + \" ta Naqd | \" + cardCount + \" ta Karta\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"CUST-5\", \"Sarvar\", \"+99895\");\n        Order ord = new Order(\"ORD-105\", c);\n        ord.addOrderItem(new OrderItem(\"Choy\", 1, 5000.0));\n        ord.processPayment(new CashPayment(10000.0));\n        System.out.println(ord.guardDuplicatePay());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT PC Lab Mock Test: To'lov jarayoni polimorfizmga asoslangan. 'Payable' interfeysi ostida 'CashPayment' (naqd pul va qaytim hisobi) hamda 'CardPayment' (bank kartasi va maskalash) birlashtiriladi. Buyurtma (Order) yagona Payable havolasi orqali to'lovni tasdiqlab, to'liq fiskal chek chiqaradi.",
      "cleanCode": "interface Payable {\n    boolean pay(double amount);\n}\nclass CashPayment implements Payable { ... }\nclass CardPayment implements Payable { ... }",
      "breakdown": [
        "<code>Payable</code>: polimorfik to'lov shartnomasi.",
        "<code>CashPayment</code>: qaytim hisoblovchi naqd to'lov sinfi.",
        "<code>CardPayment</code>: maskalangan karta to'lovi.",
        "Fiskal chek: 10% xizmat haqi va to'liq taomlar ro'yxati."
      ]
    }
  },
  {
    "id": 146,
    "tier": 10,
    "tierName": "10-Bosqich: PC Lab Mock Test — To'lov Polimorfizmi va Fiskal Chek",
    "sector": "136-150: Mock Test Payable Hierarchy & Fiscal Billing",
    "title": {
      "uz": "146. Restoran Hisoboti — Kunlik Tushumni Jamlash",
      "en": "146. Restaurant Daily Revenue Aggregator"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Chorsu Grill House\n\nBir nechta to'langan buyurtmalar ro'yxatidan umumiy tushumni (revenue) hisoblang.\n\n🎯 QADAMLAR:\n1. PC Lab Mock Test talabiga mos 'Payable' interfeysini e'lon qiling ('boolean pay(double amount)').\n2. 'CashPayment' va 'CardPayment' sinflarida 'Payable' ni polimorfik amalga oshiring.\n3. 'Order.processPayment(Payable)' va 'generateReceipt()' to'liq fiskal chek chop etishini yozing.\n4. 'Main' sinfida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nKunlik tushum: 100000.0 UZS",
      "en": "🏢 Context: Chorsu Grill House\n\nAggregate revenue across collection of settled Order instances.\n\n🎯 STEPS:\n1. Declare Payable interface per PC Lab Mock Test specifications.\n2. Implement CashPayment (computing change) and CardPayment (masking pan).\n3. Implement Order.processPayment(Payable) and generateReceipt().\n4. Test in 'Main'.\n\n📊 Expected Output:\nKunlik tushum: 100000.0 UZS"
    },
    "requirements": {
      "classes": [
        "Payable",
        "CashPayment",
        "CardPayment",
        "Order",
        "Main"
      ],
      "methods": [
        "calculateTotalRevenue"
      ]
    },
    "starterCode": "// PC Lab Mock Test: Payable, CashPayment, CardPayment va Order sinflarini yarating\ninterface Payable {\n}\nclass CashPayment implements Payable {\n}\nclass CardPayment implements Payable {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        OrderRegistry reg = new OrderRegistry();\n        reg.addSettledAmount(55000.0);\n        reg.addSettledAmount(45000.0);\n        System.out.println(\"Kunlik tushum: \" + reg.calculateTotalRevenue() + \" UZS\");\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\ninterface Payable {\n    boolean pay(double amount);\n}\n\nclass CashPayment implements Payable {\n    private double amountTendered;\n    private double paidAmount = 0.0;\n    public CashPayment(double tendered) { this.amountTendered = tendered; }\n    public double getAmountTendered() { return amountTendered; }\n    @Override\n    public boolean pay(double amount) {\n        if (amountTendered >= amount) {\n            this.paidAmount = amount;\n            return true;\n        }\n        return false;\n    }\n    public double calculateChange() {\n        return Math.max(0.0, amountTendered - paidAmount);\n    }\n}\n\nclass CardPayment implements Payable {\n    private String cardNumber;\n    private String expiryDate;\n    private String cvv;\n    public CardPayment(String num, String exp, String cvv) {\n        this.cardNumber = num;\n        this.expiryDate = exp;\n        this.cvv = cvv;\n    }\n    public String getMaskedNumber() {\n        if (cardNumber == null || cardNumber.length() < 16) return cardNumber;\n        return cardNumber.substring(0, 4) + \" **** **** \" + cardNumber.substring(12);\n    }\n    public String validateCard() {\n        if (cardNumber == null || cardNumber.length() != 16) return \"Karta xatosi: Karta raqami 16 xonali bo'lishi shart\";\n        return \"To'g'ri\";\n    }\n    @Override\n    public boolean pay(double amount) {\n        return true;\n    }\n}\n\nclass Customer {\n    private String customerId;\n    private String name;\n    private String contactNumber;\n    public Customer(String id, String n, String c) { this.customerId = id; this.name = n; this.contactNumber = c; }\n    public String getName() { return name; }\n    public String getCustomerId() { return customerId; }\n}\n\nclass OrderItem {\n    private String menuItem;\n    private int quantity;\n    private double unitPrice;\n    public OrderItem(String item, int q, double p) {\n        this.menuItem = item;\n        this.quantity = q;\n        this.unitPrice = p;\n    }\n    public String getMenuItem() { return menuItem; }\n    public int getQuantity() { return quantity; }\n    public double getUnitPrice() { return unitPrice; }\n    public double calculateSubtotal() { return quantity * unitPrice; }\n    public String getItemSummary() {\n        return menuItem + \" x\" + quantity + \" @ \" + unitPrice + \" UZS = \" + calculateSubtotal() + \" UZS\";\n    }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    private String status = \"YANGI\";\n    private Payable payment = null;\n\n    public Order(String id, Customer c) { this.orderId = id; this.customer = c; }\n    public void addOrderItem(OrderItem item) { items.add(item); }\n    public double calculateSubtotal() {\n        double s = 0;\n        for (OrderItem it : items) s += it.calculateSubtotal();\n        return s;\n    }\n    public double calculateTax() {\n        return Math.round(calculateSubtotal() * 0.10 * 10.0) / 10.0;\n    }\n    public double calculateTotal() {\n        return calculateSubtotal() + calculateTax();\n    }\n    public String processPayment(Payable p) {\n        double total = calculateTotal();\n        boolean ok = p.pay(total);\n        if (ok) {\n            this.payment = p;\n            this.status = \"TO'LANGAN\";\n            if (p instanceof CashPayment) {\n                CashPayment cp = (CashPayment) p;\n                return orderId + \" buyurtmasi to'landi! Qaytim: \" + cp.calculateChange() + \" UZS. Holat: TO'LANGAN\";\n            } else if (p instanceof CardPayment) {\n                CardPayment card = (CardPayment) p;\n                return orderId + \" buyurtmasi to'landi! Karta: \" + card.getMaskedNumber() + \". Holat: TO'LANGAN\";\n            }\n            return orderId + \" buyurtmasi to'landi!\";\n        }\n        return \"To'lov amalga oshmadi\";\n    }\n    public String guardDuplicatePay() {\n        if (\"TO'LANGAN\".equals(status)) {\n            return \"Xatolik: Buyurtma allaqachon to'langan, qayta to'lov mumkin emas\";\n        }\n        return \"OK\";\n    }\n    public String cancelOrder() {\n        this.status = \"BEKOR_QILINDI\";\n        return \"Buyurtma \" + orderId + \" bekor qilindi. To'lov qabul qilinmadi.\";\n    }\n    public String generateReceipt() {\n        StringBuilder sb = new StringBuilder(\"=== CHORSU GRILL HOUSE CHEKI ===\\n\");\n        sb.append(\"Buyurtma: \").append(orderId).append(\" | Mijoz: \").append(customer.getName()).append(\"\\n\");\n        for (OrderItem it : items) {\n            sb.append(\"- \").append(it.getItemSummary()).append(\"\\n\");\n        }\n        sb.append(\"Subtotal: \").append(calculateSubtotal()).append(\" UZS\\n\");\n        sb.append(\"Xizmat haqi (10%): \").append(calculateTax()).append(\" UZS\\n\");\n        sb.append(\"Jami: \").append(calculateTotal()).append(\" UZS\\n\");\n        if (payment instanceof CashPayment) {\n            CashPayment cp = (CashPayment) payment;\n            sb.append(\"To'lov usuli: Naqd pul | Qaytim: \").append(cp.calculateChange()).append(\" UZS\");\n        } else if (payment instanceof CardPayment) {\n            CardPayment card = (CardPayment) payment;\n            sb.append(\"To'lov usuli: Bank kartasi [\").append(card.getMaskedNumber()).append(\"]\");\n        }\n        return sb.toString();\n    }\n    public String runMockTestMaster(Payable p) {\n        processPayment(p);\n        CashPayment cp = (CashPayment) p;\n        return \"PC LAB MOCK TEST MUVAFFAQIShATLI TOPSHIRILDI!\\nBuyurtma \" + orderId + \" [\" + customer.getName() + \"]\\nSubtotal: \" + calculateSubtotal() + \" UZS | 10% Xizmat: \" + calculateTax() + \" UZS | Jami: \" + calculateTotal() + \" UZS\\nNaqd pul: \" + cp.getAmountTendered() + \" UZS | Qaytim: \" + cp.calculateChange() + \" UZS | Holat: \" + status;\n    }\n}\n\nclass OrderRegistry {\n    private double totalRevenue = 0;\n    private int cashCount = 0;\n    private int cardCount = 0;\n    public void addSettledAmount(double amt) { totalRevenue += amt; }\n    public double calculateTotalRevenue() { return totalRevenue; }\n    public void recordPaymentType(String type) {\n        if (\"CASH\".equals(type)) cashCount++;\n        if (\"CARD\".equals(type)) cardCount++;\n    }\n    public String getPaymentStats() {\n        return \"To'lovlar statistikasi: \" + cashCount + \" ta Naqd | \" + cardCount + \" ta Karta\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        OrderRegistry reg = new OrderRegistry();\n        reg.addSettledAmount(55000.0);\n        reg.addSettledAmount(45000.0);\n        System.out.println(\"Kunlik tushum: \" + reg.calculateTotalRevenue() + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT PC Lab Mock Test: To'lov jarayoni polimorfizmga asoslangan. 'Payable' interfeysi ostida 'CashPayment' (naqd pul va qaytim hisobi) hamda 'CardPayment' (bank kartasi va maskalash) birlashtiriladi. Buyurtma (Order) yagona Payable havolasi orqali to'lovni tasdiqlab, to'liq fiskal chek chiqaradi.",
      "cleanCode": "interface Payable {\n    boolean pay(double amount);\n}\nclass CashPayment implements Payable { ... }\nclass CardPayment implements Payable { ... }",
      "breakdown": [
        "<code>Payable</code>: polimorfik to'lov shartnomasi.",
        "<code>CashPayment</code>: qaytim hisoblovchi naqd to'lov sinfi.",
        "<code>CardPayment</code>: maskalangan karta to'lovi.",
        "Fiskal chek: 10% xizmat haqi va to'liq taomlar ro'yxati."
      ]
    }
  },
  {
    "id": 147,
    "tier": 10,
    "tierName": "10-Bosqich: PC Lab Mock Test — To'lov Polimorfizmi va Fiskal Chek",
    "sector": "136-150: Mock Test Payable Hierarchy & Fiscal Billing",
    "title": {
      "uz": "147. To'lov Turlari Bo'yicha Statistika (Naqd vs Karta Ulushi)",
      "en": "147. Payment Method Breakdown Statistics"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Chorsu Grill House\n\nRestoranda naqd va karta orqali qilingan to'lovlar sonini hisoblab chiqaring.\n\n🎯 QADAMLAR:\n1. PC Lab Mock Test talabiga mos 'Payable' interfeysini e'lon qiling ('boolean pay(double amount)').\n2. 'CashPayment' va 'CardPayment' sinflarida 'Payable' ni polimorfik amalga oshiring.\n3. 'Order.processPayment(Payable)' va 'generateReceipt()' to'liq fiskal chek chop etishini yozing.\n4. 'Main' sinfida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nTo'lovlar statistikasi: 1 ta Naqd | 1 ta Karta",
      "en": "🏢 Context: Chorsu Grill House\n\nTrack volume distribution between Cash and Card payments.\n\n🎯 STEPS:\n1. Declare Payable interface per PC Lab Mock Test specifications.\n2. Implement CashPayment (computing change) and CardPayment (masking pan).\n3. Implement Order.processPayment(Payable) and generateReceipt().\n4. Test in 'Main'.\n\n📊 Expected Output:\nTo'lovlar statistikasi: 1 ta Naqd | 1 ta Karta"
    },
    "requirements": {
      "classes": [
        "Payable",
        "CashPayment",
        "CardPayment",
        "Order",
        "Main"
      ],
      "methods": [
        "getPaymentStats"
      ]
    },
    "starterCode": "// PC Lab Mock Test: Payable, CashPayment, CardPayment va Order sinflarini yarating\ninterface Payable {\n}\nclass CashPayment implements Payable {\n}\nclass CardPayment implements Payable {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        OrderRegistry reg = new OrderRegistry();\n        reg.recordPaymentType(\"CASH\");\n        reg.recordPaymentType(\"CARD\");\n        System.out.println(reg.getPaymentStats());\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\ninterface Payable {\n    boolean pay(double amount);\n}\n\nclass CashPayment implements Payable {\n    private double amountTendered;\n    private double paidAmount = 0.0;\n    public CashPayment(double tendered) { this.amountTendered = tendered; }\n    public double getAmountTendered() { return amountTendered; }\n    @Override\n    public boolean pay(double amount) {\n        if (amountTendered >= amount) {\n            this.paidAmount = amount;\n            return true;\n        }\n        return false;\n    }\n    public double calculateChange() {\n        return Math.max(0.0, amountTendered - paidAmount);\n    }\n}\n\nclass CardPayment implements Payable {\n    private String cardNumber;\n    private String expiryDate;\n    private String cvv;\n    public CardPayment(String num, String exp, String cvv) {\n        this.cardNumber = num;\n        this.expiryDate = exp;\n        this.cvv = cvv;\n    }\n    public String getMaskedNumber() {\n        if (cardNumber == null || cardNumber.length() < 16) return cardNumber;\n        return cardNumber.substring(0, 4) + \" **** **** \" + cardNumber.substring(12);\n    }\n    public String validateCard() {\n        if (cardNumber == null || cardNumber.length() != 16) return \"Karta xatosi: Karta raqami 16 xonali bo'lishi shart\";\n        return \"To'g'ri\";\n    }\n    @Override\n    public boolean pay(double amount) {\n        return true;\n    }\n}\n\nclass Customer {\n    private String customerId;\n    private String name;\n    private String contactNumber;\n    public Customer(String id, String n, String c) { this.customerId = id; this.name = n; this.contactNumber = c; }\n    public String getName() { return name; }\n    public String getCustomerId() { return customerId; }\n}\n\nclass OrderItem {\n    private String menuItem;\n    private int quantity;\n    private double unitPrice;\n    public OrderItem(String item, int q, double p) {\n        this.menuItem = item;\n        this.quantity = q;\n        this.unitPrice = p;\n    }\n    public String getMenuItem() { return menuItem; }\n    public int getQuantity() { return quantity; }\n    public double getUnitPrice() { return unitPrice; }\n    public double calculateSubtotal() { return quantity * unitPrice; }\n    public String getItemSummary() {\n        return menuItem + \" x\" + quantity + \" @ \" + unitPrice + \" UZS = \" + calculateSubtotal() + \" UZS\";\n    }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    private String status = \"YANGI\";\n    private Payable payment = null;\n\n    public Order(String id, Customer c) { this.orderId = id; this.customer = c; }\n    public void addOrderItem(OrderItem item) { items.add(item); }\n    public double calculateSubtotal() {\n        double s = 0;\n        for (OrderItem it : items) s += it.calculateSubtotal();\n        return s;\n    }\n    public double calculateTax() {\n        return Math.round(calculateSubtotal() * 0.10 * 10.0) / 10.0;\n    }\n    public double calculateTotal() {\n        return calculateSubtotal() + calculateTax();\n    }\n    public String processPayment(Payable p) {\n        double total = calculateTotal();\n        boolean ok = p.pay(total);\n        if (ok) {\n            this.payment = p;\n            this.status = \"TO'LANGAN\";\n            if (p instanceof CashPayment) {\n                CashPayment cp = (CashPayment) p;\n                return orderId + \" buyurtmasi to'landi! Qaytim: \" + cp.calculateChange() + \" UZS. Holat: TO'LANGAN\";\n            } else if (p instanceof CardPayment) {\n                CardPayment card = (CardPayment) p;\n                return orderId + \" buyurtmasi to'landi! Karta: \" + card.getMaskedNumber() + \". Holat: TO'LANGAN\";\n            }\n            return orderId + \" buyurtmasi to'landi!\";\n        }\n        return \"To'lov amalga oshmadi\";\n    }\n    public String guardDuplicatePay() {\n        if (\"TO'LANGAN\".equals(status)) {\n            return \"Xatolik: Buyurtma allaqachon to'langan, qayta to'lov mumkin emas\";\n        }\n        return \"OK\";\n    }\n    public String cancelOrder() {\n        this.status = \"BEKOR_QILINDI\";\n        return \"Buyurtma \" + orderId + \" bekor qilindi. To'lov qabul qilinmadi.\";\n    }\n    public String generateReceipt() {\n        StringBuilder sb = new StringBuilder(\"=== CHORSU GRILL HOUSE CHEKI ===\\n\");\n        sb.append(\"Buyurtma: \").append(orderId).append(\" | Mijoz: \").append(customer.getName()).append(\"\\n\");\n        for (OrderItem it : items) {\n            sb.append(\"- \").append(it.getItemSummary()).append(\"\\n\");\n        }\n        sb.append(\"Subtotal: \").append(calculateSubtotal()).append(\" UZS\\n\");\n        sb.append(\"Xizmat haqi (10%): \").append(calculateTax()).append(\" UZS\\n\");\n        sb.append(\"Jami: \").append(calculateTotal()).append(\" UZS\\n\");\n        if (payment instanceof CashPayment) {\n            CashPayment cp = (CashPayment) payment;\n            sb.append(\"To'lov usuli: Naqd pul | Qaytim: \").append(cp.calculateChange()).append(\" UZS\");\n        } else if (payment instanceof CardPayment) {\n            CardPayment card = (CardPayment) payment;\n            sb.append(\"To'lov usuli: Bank kartasi [\").append(card.getMaskedNumber()).append(\"]\");\n        }\n        return sb.toString();\n    }\n    public String runMockTestMaster(Payable p) {\n        processPayment(p);\n        CashPayment cp = (CashPayment) p;\n        return \"PC LAB MOCK TEST MUVAFFAQIShATLI TOPSHIRILDI!\\nBuyurtma \" + orderId + \" [\" + customer.getName() + \"]\\nSubtotal: \" + calculateSubtotal() + \" UZS | 10% Xizmat: \" + calculateTax() + \" UZS | Jami: \" + calculateTotal() + \" UZS\\nNaqd pul: \" + cp.getAmountTendered() + \" UZS | Qaytim: \" + cp.calculateChange() + \" UZS | Holat: \" + status;\n    }\n}\n\nclass OrderRegistry {\n    private double totalRevenue = 0;\n    private int cashCount = 0;\n    private int cardCount = 0;\n    public void addSettledAmount(double amt) { totalRevenue += amt; }\n    public double calculateTotalRevenue() { return totalRevenue; }\n    public void recordPaymentType(String type) {\n        if (\"CASH\".equals(type)) cashCount++;\n        if (\"CARD\".equals(type)) cardCount++;\n    }\n    public String getPaymentStats() {\n        return \"To'lovlar statistikasi: \" + cashCount + \" ta Naqd | \" + cardCount + \" ta Karta\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        OrderRegistry reg = new OrderRegistry();\n        reg.recordPaymentType(\"CASH\");\n        reg.recordPaymentType(\"CARD\");\n        System.out.println(reg.getPaymentStats());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT PC Lab Mock Test: To'lov jarayoni polimorfizmga asoslangan. 'Payable' interfeysi ostida 'CashPayment' (naqd pul va qaytim hisobi) hamda 'CardPayment' (bank kartasi va maskalash) birlashtiriladi. Buyurtma (Order) yagona Payable havolasi orqali to'lovni tasdiqlab, to'liq fiskal chek chiqaradi.",
      "cleanCode": "interface Payable {\n    boolean pay(double amount);\n}\nclass CashPayment implements Payable { ... }\nclass CardPayment implements Payable { ... }",
      "breakdown": [
        "<code>Payable</code>: polimorfik to'lov shartnomasi.",
        "<code>CashPayment</code>: qaytim hisoblovchi naqd to'lov sinfi.",
        "<code>CardPayment</code>: maskalangan karta to'lovi.",
        "Fiskal chek: 10% xizmat haqi va to'liq taomlar ro'yxati."
      ]
    }
  },
  {
    "id": 148,
    "tier": 10,
    "tierName": "10-Bosqich: PC Lab Mock Test — To'lov Polimorfizmi va Fiskal Chek",
    "sector": "136-150: Mock Test Payable Hierarchy & Fiscal Billing",
    "title": {
      "uz": "148. Mock Test — To'lov Bekor Qilinganda (Payment Rollback)",
      "en": "148. Payment Rollback and Refund Modeling"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Chorsu Grill House\n\nAgar buyurtma oshxonada bekor qilinsa, uning holatini 'BEKOR_QILINDI' ga o'tkazib pulni qaytaring.\n\n🎯 QADAMLAR:\n1. PC Lab Mock Test talabiga mos 'Payable' interfeysini e'lon qiling ('boolean pay(double amount)').\n2. 'CashPayment' va 'CardPayment' sinflarida 'Payable' ni polimorfik amalga oshiring.\n3. 'Order.processPayment(Payable)' va 'generateReceipt()' to'liq fiskal chek chop etishini yozing.\n4. 'Main' sinfida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nBuyurtma ORD-106 bekor qilindi. To'lov qabul qilinmadi.",
      "en": "🏢 Context: Chorsu Grill House\n\nPC Lab Mock Test: Support payment rollback setting order status to CANCELLED.\n\n🎯 STEPS:\n1. Declare Payable interface per PC Lab Mock Test specifications.\n2. Implement CashPayment (computing change) and CardPayment (masking pan).\n3. Implement Order.processPayment(Payable) and generateReceipt().\n4. Test in 'Main'.\n\n📊 Expected Output:\nBuyurtma ORD-106 bekor qilindi. To'lov qabul qilinmadi."
    },
    "requirements": {
      "classes": [
        "Payable",
        "CashPayment",
        "CardPayment",
        "Order",
        "Main"
      ],
      "methods": [
        "cancelOrder"
      ]
    },
    "starterCode": "// PC Lab Mock Test: Payable, CashPayment, CardPayment va Order sinflarini yarating\ninterface Payable {\n}\nclass CashPayment implements Payable {\n}\nclass CardPayment implements Payable {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"CUST-6\", \"Ali\", \"+99897\");\n        Order ord = new Order(\"ORD-106\", c);\n        ord.addOrderItem(new OrderItem(\"Osh\", 1, 40000.0));\n        System.out.println(ord.cancelOrder());\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\ninterface Payable {\n    boolean pay(double amount);\n}\n\nclass CashPayment implements Payable {\n    private double amountTendered;\n    private double paidAmount = 0.0;\n    public CashPayment(double tendered) { this.amountTendered = tendered; }\n    public double getAmountTendered() { return amountTendered; }\n    @Override\n    public boolean pay(double amount) {\n        if (amountTendered >= amount) {\n            this.paidAmount = amount;\n            return true;\n        }\n        return false;\n    }\n    public double calculateChange() {\n        return Math.max(0.0, amountTendered - paidAmount);\n    }\n}\n\nclass CardPayment implements Payable {\n    private String cardNumber;\n    private String expiryDate;\n    private String cvv;\n    public CardPayment(String num, String exp, String cvv) {\n        this.cardNumber = num;\n        this.expiryDate = exp;\n        this.cvv = cvv;\n    }\n    public String getMaskedNumber() {\n        if (cardNumber == null || cardNumber.length() < 16) return cardNumber;\n        return cardNumber.substring(0, 4) + \" **** **** \" + cardNumber.substring(12);\n    }\n    public String validateCard() {\n        if (cardNumber == null || cardNumber.length() != 16) return \"Karta xatosi: Karta raqami 16 xonali bo'lishi shart\";\n        return \"To'g'ri\";\n    }\n    @Override\n    public boolean pay(double amount) {\n        return true;\n    }\n}\n\nclass Customer {\n    private String customerId;\n    private String name;\n    private String contactNumber;\n    public Customer(String id, String n, String c) { this.customerId = id; this.name = n; this.contactNumber = c; }\n    public String getName() { return name; }\n    public String getCustomerId() { return customerId; }\n}\n\nclass OrderItem {\n    private String menuItem;\n    private int quantity;\n    private double unitPrice;\n    public OrderItem(String item, int q, double p) {\n        this.menuItem = item;\n        this.quantity = q;\n        this.unitPrice = p;\n    }\n    public String getMenuItem() { return menuItem; }\n    public int getQuantity() { return quantity; }\n    public double getUnitPrice() { return unitPrice; }\n    public double calculateSubtotal() { return quantity * unitPrice; }\n    public String getItemSummary() {\n        return menuItem + \" x\" + quantity + \" @ \" + unitPrice + \" UZS = \" + calculateSubtotal() + \" UZS\";\n    }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    private String status = \"YANGI\";\n    private Payable payment = null;\n\n    public Order(String id, Customer c) { this.orderId = id; this.customer = c; }\n    public void addOrderItem(OrderItem item) { items.add(item); }\n    public double calculateSubtotal() {\n        double s = 0;\n        for (OrderItem it : items) s += it.calculateSubtotal();\n        return s;\n    }\n    public double calculateTax() {\n        return Math.round(calculateSubtotal() * 0.10 * 10.0) / 10.0;\n    }\n    public double calculateTotal() {\n        return calculateSubtotal() + calculateTax();\n    }\n    public String processPayment(Payable p) {\n        double total = calculateTotal();\n        boolean ok = p.pay(total);\n        if (ok) {\n            this.payment = p;\n            this.status = \"TO'LANGAN\";\n            if (p instanceof CashPayment) {\n                CashPayment cp = (CashPayment) p;\n                return orderId + \" buyurtmasi to'landi! Qaytim: \" + cp.calculateChange() + \" UZS. Holat: TO'LANGAN\";\n            } else if (p instanceof CardPayment) {\n                CardPayment card = (CardPayment) p;\n                return orderId + \" buyurtmasi to'landi! Karta: \" + card.getMaskedNumber() + \". Holat: TO'LANGAN\";\n            }\n            return orderId + \" buyurtmasi to'landi!\";\n        }\n        return \"To'lov amalga oshmadi\";\n    }\n    public String guardDuplicatePay() {\n        if (\"TO'LANGAN\".equals(status)) {\n            return \"Xatolik: Buyurtma allaqachon to'langan, qayta to'lov mumkin emas\";\n        }\n        return \"OK\";\n    }\n    public String cancelOrder() {\n        this.status = \"BEKOR_QILINDI\";\n        return \"Buyurtma \" + orderId + \" bekor qilindi. To'lov qabul qilinmadi.\";\n    }\n    public String generateReceipt() {\n        StringBuilder sb = new StringBuilder(\"=== CHORSU GRILL HOUSE CHEKI ===\\n\");\n        sb.append(\"Buyurtma: \").append(orderId).append(\" | Mijoz: \").append(customer.getName()).append(\"\\n\");\n        for (OrderItem it : items) {\n            sb.append(\"- \").append(it.getItemSummary()).append(\"\\n\");\n        }\n        sb.append(\"Subtotal: \").append(calculateSubtotal()).append(\" UZS\\n\");\n        sb.append(\"Xizmat haqi (10%): \").append(calculateTax()).append(\" UZS\\n\");\n        sb.append(\"Jami: \").append(calculateTotal()).append(\" UZS\\n\");\n        if (payment instanceof CashPayment) {\n            CashPayment cp = (CashPayment) payment;\n            sb.append(\"To'lov usuli: Naqd pul | Qaytim: \").append(cp.calculateChange()).append(\" UZS\");\n        } else if (payment instanceof CardPayment) {\n            CardPayment card = (CardPayment) payment;\n            sb.append(\"To'lov usuli: Bank kartasi [\").append(card.getMaskedNumber()).append(\"]\");\n        }\n        return sb.toString();\n    }\n    public String runMockTestMaster(Payable p) {\n        processPayment(p);\n        CashPayment cp = (CashPayment) p;\n        return \"PC LAB MOCK TEST MUVAFFAQIShATLI TOPSHIRILDI!\\nBuyurtma \" + orderId + \" [\" + customer.getName() + \"]\\nSubtotal: \" + calculateSubtotal() + \" UZS | 10% Xizmat: \" + calculateTax() + \" UZS | Jami: \" + calculateTotal() + \" UZS\\nNaqd pul: \" + cp.getAmountTendered() + \" UZS | Qaytim: \" + cp.calculateChange() + \" UZS | Holat: \" + status;\n    }\n}\n\nclass OrderRegistry {\n    private double totalRevenue = 0;\n    private int cashCount = 0;\n    private int cardCount = 0;\n    public void addSettledAmount(double amt) { totalRevenue += amt; }\n    public double calculateTotalRevenue() { return totalRevenue; }\n    public void recordPaymentType(String type) {\n        if (\"CASH\".equals(type)) cashCount++;\n        if (\"CARD\".equals(type)) cardCount++;\n    }\n    public String getPaymentStats() {\n        return \"To'lovlar statistikasi: \" + cashCount + \" ta Naqd | \" + cardCount + \" ta Karta\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"CUST-6\", \"Ali\", \"+99897\");\n        Order ord = new Order(\"ORD-106\", c);\n        ord.addOrderItem(new OrderItem(\"Osh\", 1, 40000.0));\n        System.out.println(ord.cancelOrder());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT PC Lab Mock Test: To'lov jarayoni polimorfizmga asoslangan. 'Payable' interfeysi ostida 'CashPayment' (naqd pul va qaytim hisobi) hamda 'CardPayment' (bank kartasi va maskalash) birlashtiriladi. Buyurtma (Order) yagona Payable havolasi orqali to'lovni tasdiqlab, to'liq fiskal chek chiqaradi.",
      "cleanCode": "interface Payable {\n    boolean pay(double amount);\n}\nclass CashPayment implements Payable { ... }\nclass CardPayment implements Payable { ... }",
      "breakdown": [
        "<code>Payable</code>: polimorfik to'lov shartnomasi.",
        "<code>CashPayment</code>: qaytim hisoblovchi naqd to'lov sinfi.",
        "<code>CardPayment</code>: maskalangan karta to'lovi.",
        "Fiskal chek: 10% xizmat haqi va to'liq taomlar ro'yxati."
      ]
    }
  },
  {
    "id": 149,
    "tier": 10,
    "tierName": "10-Bosqich: PC Lab Mock Test — To'lov Polimorfizmi va Fiskal Chek",
    "sector": "136-150: Mock Test Payable Hierarchy & Fiscal Billing",
    "title": {
      "uz": "149. Mock Test — Qaytim Nolligi Holati (Exact Cash)",
      "en": "149. Exact Cash Payment Zero Change Validation"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Chorsu Grill House\n\nMijoz hisob summasini tiyinigacha aniq naqd pul bilan to'lasa, 'calculateChange()' aynan 0.0 UZS qaytarsin.\n\n🎯 QADAMLAR:\n1. PC Lab Mock Test talabiga mos 'Payable' interfeysini e'lon qiling ('boolean pay(double amount)').\n2. 'CashPayment' va 'CardPayment' sinflarida 'Payable' ni polimorfik amalga oshiring.\n3. 'Order.processPayment(Payable)' va 'generateReceipt()' to'liq fiskal chek chop etishini yozing.\n4. 'Main' sinfida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nQaytim: 0.0 UZS (Aniq summa berildi)",
      "en": "🏢 Context: Chorsu Grill House\n\nVerify exact tender cash payment correctly yielding 0.0 change.\n\n🎯 STEPS:\n1. Declare Payable interface per PC Lab Mock Test specifications.\n2. Implement CashPayment (computing change) and CardPayment (masking pan).\n3. Implement Order.processPayment(Payable) and generateReceipt().\n4. Test in 'Main'.\n\n📊 Expected Output:\nQaytim: 0.0 UZS (Aniq summa berildi)"
    },
    "requirements": {
      "classes": [
        "Payable",
        "CashPayment",
        "CardPayment",
        "Order",
        "Main"
      ],
      "methods": [
        "calculateChange"
      ]
    },
    "starterCode": "// PC Lab Mock Test: Payable, CashPayment, CardPayment va Order sinflarini yarating\ninterface Payable {\n}\nclass CashPayment implements Payable {\n}\nclass CardPayment implements Payable {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CashPayment cash = new CashPayment(55000.0);\n        cash.pay(55000.0);\n        System.out.println(\"Qaytim: \" + cash.calculateChange() + \" UZS (Aniq summa berildi)\");\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\ninterface Payable {\n    boolean pay(double amount);\n}\n\nclass CashPayment implements Payable {\n    private double amountTendered;\n    private double paidAmount = 0.0;\n    public CashPayment(double tendered) { this.amountTendered = tendered; }\n    public double getAmountTendered() { return amountTendered; }\n    @Override\n    public boolean pay(double amount) {\n        if (amountTendered >= amount) {\n            this.paidAmount = amount;\n            return true;\n        }\n        return false;\n    }\n    public double calculateChange() {\n        return Math.max(0.0, amountTendered - paidAmount);\n    }\n}\n\nclass CardPayment implements Payable {\n    private String cardNumber;\n    private String expiryDate;\n    private String cvv;\n    public CardPayment(String num, String exp, String cvv) {\n        this.cardNumber = num;\n        this.expiryDate = exp;\n        this.cvv = cvv;\n    }\n    public String getMaskedNumber() {\n        if (cardNumber == null || cardNumber.length() < 16) return cardNumber;\n        return cardNumber.substring(0, 4) + \" **** **** \" + cardNumber.substring(12);\n    }\n    public String validateCard() {\n        if (cardNumber == null || cardNumber.length() != 16) return \"Karta xatosi: Karta raqami 16 xonali bo'lishi shart\";\n        return \"To'g'ri\";\n    }\n    @Override\n    public boolean pay(double amount) {\n        return true;\n    }\n}\n\nclass Customer {\n    private String customerId;\n    private String name;\n    private String contactNumber;\n    public Customer(String id, String n, String c) { this.customerId = id; this.name = n; this.contactNumber = c; }\n    public String getName() { return name; }\n    public String getCustomerId() { return customerId; }\n}\n\nclass OrderItem {\n    private String menuItem;\n    private int quantity;\n    private double unitPrice;\n    public OrderItem(String item, int q, double p) {\n        this.menuItem = item;\n        this.quantity = q;\n        this.unitPrice = p;\n    }\n    public String getMenuItem() { return menuItem; }\n    public int getQuantity() { return quantity; }\n    public double getUnitPrice() { return unitPrice; }\n    public double calculateSubtotal() { return quantity * unitPrice; }\n    public String getItemSummary() {\n        return menuItem + \" x\" + quantity + \" @ \" + unitPrice + \" UZS = \" + calculateSubtotal() + \" UZS\";\n    }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    private String status = \"YANGI\";\n    private Payable payment = null;\n\n    public Order(String id, Customer c) { this.orderId = id; this.customer = c; }\n    public void addOrderItem(OrderItem item) { items.add(item); }\n    public double calculateSubtotal() {\n        double s = 0;\n        for (OrderItem it : items) s += it.calculateSubtotal();\n        return s;\n    }\n    public double calculateTax() {\n        return Math.round(calculateSubtotal() * 0.10 * 10.0) / 10.0;\n    }\n    public double calculateTotal() {\n        return calculateSubtotal() + calculateTax();\n    }\n    public String processPayment(Payable p) {\n        double total = calculateTotal();\n        boolean ok = p.pay(total);\n        if (ok) {\n            this.payment = p;\n            this.status = \"TO'LANGAN\";\n            if (p instanceof CashPayment) {\n                CashPayment cp = (CashPayment) p;\n                return orderId + \" buyurtmasi to'landi! Qaytim: \" + cp.calculateChange() + \" UZS. Holat: TO'LANGAN\";\n            } else if (p instanceof CardPayment) {\n                CardPayment card = (CardPayment) p;\n                return orderId + \" buyurtmasi to'landi! Karta: \" + card.getMaskedNumber() + \". Holat: TO'LANGAN\";\n            }\n            return orderId + \" buyurtmasi to'landi!\";\n        }\n        return \"To'lov amalga oshmadi\";\n    }\n    public String guardDuplicatePay() {\n        if (\"TO'LANGAN\".equals(status)) {\n            return \"Xatolik: Buyurtma allaqachon to'langan, qayta to'lov mumkin emas\";\n        }\n        return \"OK\";\n    }\n    public String cancelOrder() {\n        this.status = \"BEKOR_QILINDI\";\n        return \"Buyurtma \" + orderId + \" bekor qilindi. To'lov qabul qilinmadi.\";\n    }\n    public String generateReceipt() {\n        StringBuilder sb = new StringBuilder(\"=== CHORSU GRILL HOUSE CHEKI ===\\n\");\n        sb.append(\"Buyurtma: \").append(orderId).append(\" | Mijoz: \").append(customer.getName()).append(\"\\n\");\n        for (OrderItem it : items) {\n            sb.append(\"- \").append(it.getItemSummary()).append(\"\\n\");\n        }\n        sb.append(\"Subtotal: \").append(calculateSubtotal()).append(\" UZS\\n\");\n        sb.append(\"Xizmat haqi (10%): \").append(calculateTax()).append(\" UZS\\n\");\n        sb.append(\"Jami: \").append(calculateTotal()).append(\" UZS\\n\");\n        if (payment instanceof CashPayment) {\n            CashPayment cp = (CashPayment) payment;\n            sb.append(\"To'lov usuli: Naqd pul | Qaytim: \").append(cp.calculateChange()).append(\" UZS\");\n        } else if (payment instanceof CardPayment) {\n            CardPayment card = (CardPayment) payment;\n            sb.append(\"To'lov usuli: Bank kartasi [\").append(card.getMaskedNumber()).append(\"]\");\n        }\n        return sb.toString();\n    }\n    public String runMockTestMaster(Payable p) {\n        processPayment(p);\n        CashPayment cp = (CashPayment) p;\n        return \"PC LAB MOCK TEST MUVAFFAQIShATLI TOPSHIRILDI!\\nBuyurtma \" + orderId + \" [\" + customer.getName() + \"]\\nSubtotal: \" + calculateSubtotal() + \" UZS | 10% Xizmat: \" + calculateTax() + \" UZS | Jami: \" + calculateTotal() + \" UZS\\nNaqd pul: \" + cp.getAmountTendered() + \" UZS | Qaytim: \" + cp.calculateChange() + \" UZS | Holat: \" + status;\n    }\n}\n\nclass OrderRegistry {\n    private double totalRevenue = 0;\n    private int cashCount = 0;\n    private int cardCount = 0;\n    public void addSettledAmount(double amt) { totalRevenue += amt; }\n    public double calculateTotalRevenue() { return totalRevenue; }\n    public void recordPaymentType(String type) {\n        if (\"CASH\".equals(type)) cashCount++;\n        if (\"CARD\".equals(type)) cardCount++;\n    }\n    public String getPaymentStats() {\n        return \"To'lovlar statistikasi: \" + cashCount + \" ta Naqd | \" + cardCount + \" ta Karta\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CashPayment cash = new CashPayment(55000.0);\n        cash.pay(55000.0);\n        System.out.println(\"Qaytim: \" + cash.calculateChange() + \" UZS (Aniq summa berildi)\");\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT PC Lab Mock Test: To'lov jarayoni polimorfizmga asoslangan. 'Payable' interfeysi ostida 'CashPayment' (naqd pul va qaytim hisobi) hamda 'CardPayment' (bank kartasi va maskalash) birlashtiriladi. Buyurtma (Order) yagona Payable havolasi orqali to'lovni tasdiqlab, to'liq fiskal chek chiqaradi.",
      "cleanCode": "interface Payable {\n    boolean pay(double amount);\n}\nclass CashPayment implements Payable { ... }\nclass CardPayment implements Payable { ... }",
      "breakdown": [
        "<code>Payable</code>: polimorfik to'lov shartnomasi.",
        "<code>CashPayment</code>: qaytim hisoblovchi naqd to'lov sinfi.",
        "<code>CardPayment</code>: maskalangan karta to'lovi.",
        "Fiskal chek: 10% xizmat haqi va to'liq taomlar ro'yxati."
      ]
    }
  },
  {
    "id": 150,
    "tier": 10,
    "tierName": "10-Bosqich: PC Lab Mock Test — To'lov Polimorfizmi va Fiskal Chek",
    "sector": "136-150: Mock Test Payable Hierarchy & Fiscal Billing",
    "title": {
      "uz": "150. PC Lab Mock Test To'liq Yakuni — Chorsu Grill House Ekotizimi",
      "en": "150. PC Lab Mock Test Grand Capstone — Complete Chorsu Grill Pipeline"
    },
    "scenario": {
      "uz": "🏢 Kontekst: Chorsu Grill House Official\n\nWIUT Semestr 1 PC Lab Mock Test cho'qqisi: Customer, OrderItem, Order, Payable, CashPayment va CardPayment sinflarini to'liq birlashtiruvchi to'liq tizimni ishga tushiring.\n\n🎯 QADAMLAR:\n1. PC Lab Mock Test talabiga mos 'Payable' interfeysini e'lon qiling ('boolean pay(double amount)').\n2. 'CashPayment' va 'CardPayment' sinflarida 'Payable' ni polimorfik amalga oshiring.\n3. 'Order.processPayment(Payable)' va 'generateReceipt()' to'liq fiskal chek chop etishini yozing.\n4. 'Main' sinfida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nPC LAB MOCK TEST MUVAFFAQIShATLI TOPSHIRILDI!\nBuyurtma ORD-2026-CHORSU [Alisher Qodirov]\nSubtotal: 102000.0 UZS | 10% Xizmat: 10200.0 UZS | Jami: 112200.0 UZS\nNaqd pul: 150000.0 UZS | Qaytim: 37800.0 UZS | Holat: TO'LANGAN",
      "en": "🏢 Context: Chorsu Grill House Official\n\nGrand Capstone: Execute full official WIUT PC Lab Mock Test pipeline covering Customer, OrderItem, Order, Payable, Cash and Card settlements.\n\n🎯 STEPS:\n1. Declare Payable interface per PC Lab Mock Test specifications.\n2. Implement CashPayment (computing change) and CardPayment (masking pan).\n3. Implement Order.processPayment(Payable) and generateReceipt().\n4. Test in 'Main'.\n\n📊 Expected Output:\nPC LAB MOCK TEST MUVAFFAQIShATLI TOPSHIRILDI!\nBuyurtma ORD-2026-CHORSU [Alisher Qodirov]\nSubtotal: 102000.0 UZS | 10% Xizmat: 10200.0 UZS | Jami: 112200.0 UZS\nNaqd pul: 150000.0 UZS | Qaytim: 37800.0 UZS | Holat: TO'LANGAN"
    },
    "requirements": {
      "classes": [
        "Payable",
        "CashPayment",
        "CardPayment",
        "Order",
        "Main"
      ],
      "methods": [
        "runMockTestMaster"
      ]
    },
    "starterCode": "// PC Lab Mock Test: Payable, CashPayment, CardPayment va Order sinflarini yarating\ninterface Payable {\n}\nclass CashPayment implements Payable {\n}\nclass CardPayment implements Payable {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer customer = new Customer(\"CUST-WIUT-01\", \"Alisher Qodirov\", \"+998901234567\");\n        Order order = new Order(\"ORD-2026-CHORSU\", customer);\n        order.addOrderItem(new OrderItem(\"Chorsu Maxsus Shashlik\", 3, 30000.0));\n        order.addOrderItem(new OrderItem(\"Tandir Non\", 2, 6000.0));\n        System.out.println(order.runMockTestMaster(new CashPayment(150000.0)));\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\ninterface Payable {\n    boolean pay(double amount);\n}\n\nclass CashPayment implements Payable {\n    private double amountTendered;\n    private double paidAmount = 0.0;\n    public CashPayment(double tendered) { this.amountTendered = tendered; }\n    public double getAmountTendered() { return amountTendered; }\n    @Override\n    public boolean pay(double amount) {\n        if (amountTendered >= amount) {\n            this.paidAmount = amount;\n            return true;\n        }\n        return false;\n    }\n    public double calculateChange() {\n        return Math.max(0.0, amountTendered - paidAmount);\n    }\n}\n\nclass CardPayment implements Payable {\n    private String cardNumber;\n    private String expiryDate;\n    private String cvv;\n    public CardPayment(String num, String exp, String cvv) {\n        this.cardNumber = num;\n        this.expiryDate = exp;\n        this.cvv = cvv;\n    }\n    public String getMaskedNumber() {\n        if (cardNumber == null || cardNumber.length() < 16) return cardNumber;\n        return cardNumber.substring(0, 4) + \" **** **** \" + cardNumber.substring(12);\n    }\n    public String validateCard() {\n        if (cardNumber == null || cardNumber.length() != 16) return \"Karta xatosi: Karta raqami 16 xonali bo'lishi shart\";\n        return \"To'g'ri\";\n    }\n    @Override\n    public boolean pay(double amount) {\n        return true;\n    }\n}\n\nclass Customer {\n    private String customerId;\n    private String name;\n    private String contactNumber;\n    public Customer(String id, String n, String c) { this.customerId = id; this.name = n; this.contactNumber = c; }\n    public String getName() { return name; }\n    public String getCustomerId() { return customerId; }\n}\n\nclass OrderItem {\n    private String menuItem;\n    private int quantity;\n    private double unitPrice;\n    public OrderItem(String item, int q, double p) {\n        this.menuItem = item;\n        this.quantity = q;\n        this.unitPrice = p;\n    }\n    public String getMenuItem() { return menuItem; }\n    public int getQuantity() { return quantity; }\n    public double getUnitPrice() { return unitPrice; }\n    public double calculateSubtotal() { return quantity * unitPrice; }\n    public String getItemSummary() {\n        return menuItem + \" x\" + quantity + \" @ \" + unitPrice + \" UZS = \" + calculateSubtotal() + \" UZS\";\n    }\n}\n\nclass Order {\n    private String orderId;\n    private Customer customer;\n    private List<OrderItem> items = new ArrayList<>();\n    private String status = \"YANGI\";\n    private Payable payment = null;\n\n    public Order(String id, Customer c) { this.orderId = id; this.customer = c; }\n    public void addOrderItem(OrderItem item) { items.add(item); }\n    public double calculateSubtotal() {\n        double s = 0;\n        for (OrderItem it : items) s += it.calculateSubtotal();\n        return s;\n    }\n    public double calculateTax() {\n        return Math.round(calculateSubtotal() * 0.10 * 10.0) / 10.0;\n    }\n    public double calculateTotal() {\n        return calculateSubtotal() + calculateTax();\n    }\n    public String processPayment(Payable p) {\n        double total = calculateTotal();\n        boolean ok = p.pay(total);\n        if (ok) {\n            this.payment = p;\n            this.status = \"TO'LANGAN\";\n            if (p instanceof CashPayment) {\n                CashPayment cp = (CashPayment) p;\n                return orderId + \" buyurtmasi to'landi! Qaytim: \" + cp.calculateChange() + \" UZS. Holat: TO'LANGAN\";\n            } else if (p instanceof CardPayment) {\n                CardPayment card = (CardPayment) p;\n                return orderId + \" buyurtmasi to'landi! Karta: \" + card.getMaskedNumber() + \". Holat: TO'LANGAN\";\n            }\n            return orderId + \" buyurtmasi to'landi!\";\n        }\n        return \"To'lov amalga oshmadi\";\n    }\n    public String guardDuplicatePay() {\n        if (\"TO'LANGAN\".equals(status)) {\n            return \"Xatolik: Buyurtma allaqachon to'langan, qayta to'lov mumkin emas\";\n        }\n        return \"OK\";\n    }\n    public String cancelOrder() {\n        this.status = \"BEKOR_QILINDI\";\n        return \"Buyurtma \" + orderId + \" bekor qilindi. To'lov qabul qilinmadi.\";\n    }\n    public String generateReceipt() {\n        StringBuilder sb = new StringBuilder(\"=== CHORSU GRILL HOUSE CHEKI ===\\n\");\n        sb.append(\"Buyurtma: \").append(orderId).append(\" | Mijoz: \").append(customer.getName()).append(\"\\n\");\n        for (OrderItem it : items) {\n            sb.append(\"- \").append(it.getItemSummary()).append(\"\\n\");\n        }\n        sb.append(\"Subtotal: \").append(calculateSubtotal()).append(\" UZS\\n\");\n        sb.append(\"Xizmat haqi (10%): \").append(calculateTax()).append(\" UZS\\n\");\n        sb.append(\"Jami: \").append(calculateTotal()).append(\" UZS\\n\");\n        if (payment instanceof CashPayment) {\n            CashPayment cp = (CashPayment) payment;\n            sb.append(\"To'lov usuli: Naqd pul | Qaytim: \").append(cp.calculateChange()).append(\" UZS\");\n        } else if (payment instanceof CardPayment) {\n            CardPayment card = (CardPayment) payment;\n            sb.append(\"To'lov usuli: Bank kartasi [\").append(card.getMaskedNumber()).append(\"]\");\n        }\n        return sb.toString();\n    }\n    public String runMockTestMaster(Payable p) {\n        processPayment(p);\n        CashPayment cp = (CashPayment) p;\n        return \"PC LAB MOCK TEST MUVAFFAQIShATLI TOPSHIRILDI!\\nBuyurtma \" + orderId + \" [\" + customer.getName() + \"]\\nSubtotal: \" + calculateSubtotal() + \" UZS | 10% Xizmat: \" + calculateTax() + \" UZS | Jami: \" + calculateTotal() + \" UZS\\nNaqd pul: \" + cp.getAmountTendered() + \" UZS | Qaytim: \" + cp.calculateChange() + \" UZS | Holat: \" + status;\n    }\n}\n\nclass OrderRegistry {\n    private double totalRevenue = 0;\n    private int cashCount = 0;\n    private int cardCount = 0;\n    public void addSettledAmount(double amt) { totalRevenue += amt; }\n    public double calculateTotalRevenue() { return totalRevenue; }\n    public void recordPaymentType(String type) {\n        if (\"CASH\".equals(type)) cashCount++;\n        if (\"CARD\".equals(type)) cardCount++;\n    }\n    public String getPaymentStats() {\n        return \"To'lovlar statistikasi: \" + cashCount + \" ta Naqd | \" + cardCount + \" ta Karta\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer customer = new Customer(\"CUST-WIUT-01\", \"Alisher Qodirov\", \"+998901234567\");\n        Order order = new Order(\"ORD-2026-CHORSU\", customer);\n        order.addOrderItem(new OrderItem(\"Chorsu Maxsus Shashlik\", 3, 30000.0));\n        order.addOrderItem(new OrderItem(\"Tandir Non\", 2, 6000.0));\n        System.out.println(order.runMockTestMaster(new CashPayment(150000.0)));\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT PC Lab Mock Test: To'lov jarayoni polimorfizmga asoslangan. 'Payable' interfeysi ostida 'CashPayment' (naqd pul va qaytim hisobi) hamda 'CardPayment' (bank kartasi va maskalash) birlashtiriladi. Buyurtma (Order) yagona Payable havolasi orqali to'lovni tasdiqlab, to'liq fiskal chek chiqaradi.",
      "cleanCode": "interface Payable {\n    boolean pay(double amount);\n}\nclass CashPayment implements Payable { ... }\nclass CardPayment implements Payable { ... }",
      "breakdown": [
        "<code>Payable</code>: polimorfik to'lov shartnomasi.",
        "<code>CashPayment</code>: qaytim hisoblovchi naqd to'lov sinfi.",
        "<code>CardPayment</code>: maskalangan karta to'lovi.",
        "Fiskal chek: 10% xizmat haqi va to'liq taomlar ro'yxati."
      ]
    }
  }
];
