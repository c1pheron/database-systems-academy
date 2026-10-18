// WIUT OOP (5COSC018C) — WEEK 5 DATASET (150 PROGRESSIVE CHALLENGES)
window.OOP_CHALLENGES_W5 = [
  {
    "id": 1,
    "tier": 1,
    "tierName": "1-Bosqich: Interfeys va 'implements'",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "1. Uzum Market — 'IProductService' Interfeysini Joriy Qilish",
      "en": "1. Uzum Market — Interface & Implementation"
    },
    "scenario": {
      "uz": "Uzum Market da 'interface IProductService' e'lon qiling va unga 'void executeService();' metodini qo'shing. 'ProductServiceImpl' sinfida 'implements IProductService' qiling.",
      "en": "Declare contract 'interface IProductService' with 'void executeService();' implemented by 'ProductServiceImpl'."
    },
    "requirements": {
      "classes": [
        "IProductService",
        "ProductServiceImpl"
      ],
      "methods": [
        "executeService"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IProductService {\n    void executeService();\n}\n\nclass ProductServiceImpl implements IProductService {\n    @Override\n    public void executeService() {\n        System.out.println(\"Uzum Market: Xizmat bajarildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IProductService svc = new ProductServiceImpl();\n        svc.executeService();\n    }\n}",
    "detailedSolution": {
      "theory": "Interfeys — 100% abstrakt shartnoma. U 'NIMA qilinishi kerak'ligini aytadi, lekin 'QANDAY qilinishi'ni har bir sinf o'zi hal qiladi.",
      "theoryEn": "Interfaces establish a pure behavioral contract specifying WHAT operations must be supported without mandating HOW.",
      "cleanCode": "interface IProductService { void executeService(); }\nclass ProductServiceImpl implements IProductService { ... }",
      "breakdown": [
        "<code>implements IProductService</code>: Sinif ushbu interfeysning barcha qoidalarini bajarish majburiyatini oladi."
      ],
      "pitfalls": "Interfeys metodlarini qayta yozayotganda 'public' so'zini qo'yish shart, aks holda ko'rinish darajasi pasayib ketadi.",
      "cw2Tip": "Barcha to'lov shlyuzlari (Payme, Click, Cash) bitta 'PaymentStrategy' interfeysini joriy qilishi shart."
    }
  },
  {
    "id": 2,
    "tier": 1,
    "tierName": "1-Bosqich: Interfeys va 'implements'",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "2. Payme Wallet — 'IWalletUserService' Interfeysini Joriy Qilish",
      "en": "2. Payme Wallet — Interface & Implementation"
    },
    "scenario": {
      "uz": "Payme Wallet da 'interface IWalletUserService' e'lon qiling va unga 'void executeService();' metodini qo'shing. 'WalletUserServiceImpl' sinfida 'implements IWalletUserService' qiling.",
      "en": "Declare contract 'interface IWalletUserService' with 'void executeService();' implemented by 'WalletUserServiceImpl'."
    },
    "requirements": {
      "classes": [
        "IWalletUserService",
        "WalletUserServiceImpl"
      ],
      "methods": [
        "executeService"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IWalletUserService {\n    void executeService();\n}\n\nclass WalletUserServiceImpl implements IWalletUserService {\n    @Override\n    public void executeService() {\n        System.out.println(\"Payme Wallet: Xizmat bajarildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IWalletUserService svc = new WalletUserServiceImpl();\n        svc.executeService();\n    }\n}",
    "detailedSolution": {
      "theory": "Interfeys — 100% abstrakt shartnoma. U 'NIMA qilinishi kerak'ligini aytadi, lekin 'QANDAY qilinishi'ni har bir sinf o'zi hal qiladi.",
      "theoryEn": "Interfaces establish a pure behavioral contract specifying WHAT operations must be supported without mandating HOW.",
      "cleanCode": "interface IWalletUserService { void executeService(); }\nclass WalletUserServiceImpl implements IWalletUserService { ... }",
      "breakdown": [
        "<code>implements IWalletUserService</code>: Sinif ushbu interfeysning barcha qoidalarini bajarish majburiyatini oladi."
      ],
      "pitfalls": "Interfeys metodlarini qayta yozayotganda 'public' so'zini qo'yish shart, aks holda ko'rinish darajasi pasayib ketadi.",
      "cw2Tip": "Barcha to'lov shlyuzlari (Payme, Click, Cash) bitta 'PaymentStrategy' interfeysini joriy qilishi shart."
    }
  },
  {
    "id": 3,
    "tier": 1,
    "tierName": "1-Bosqich: Interfeys va 'implements'",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "3. Yandex Go — 'ITaxiRideService' Interfeysini Joriy Qilish",
      "en": "3. Yandex Go — Interface & Implementation"
    },
    "scenario": {
      "uz": "Yandex Go da 'interface ITaxiRideService' e'lon qiling va unga 'void executeService();' metodini qo'shing. 'TaxiRideServiceImpl' sinfida 'implements ITaxiRideService' qiling.",
      "en": "Declare contract 'interface ITaxiRideService' with 'void executeService();' implemented by 'TaxiRideServiceImpl'."
    },
    "requirements": {
      "classes": [
        "ITaxiRideService",
        "TaxiRideServiceImpl"
      ],
      "methods": [
        "executeService"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface ITaxiRideService {\n    void executeService();\n}\n\nclass TaxiRideServiceImpl implements ITaxiRideService {\n    @Override\n    public void executeService() {\n        System.out.println(\"Yandex Go: Xizmat bajarildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ITaxiRideService svc = new TaxiRideServiceImpl();\n        svc.executeService();\n    }\n}",
    "detailedSolution": {
      "theory": "Interfeys — 100% abstrakt shartnoma. U 'NIMA qilinishi kerak'ligini aytadi, lekin 'QANDAY qilinishi'ni har bir sinf o'zi hal qiladi.",
      "theoryEn": "Interfaces establish a pure behavioral contract specifying WHAT operations must be supported without mandating HOW.",
      "cleanCode": "interface ITaxiRideService { void executeService(); }\nclass TaxiRideServiceImpl implements ITaxiRideService { ... }",
      "breakdown": [
        "<code>implements ITaxiRideService</code>: Sinif ushbu interfeysning barcha qoidalarini bajarish majburiyatini oladi."
      ],
      "pitfalls": "Interfeys metodlarini qayta yozayotganda 'public' so'zini qo'yish shart, aks holda ko'rinish darajasi pasayib ketadi.",
      "cw2Tip": "Barcha to'lov shlyuzlari (Payme, Click, Cash) bitta 'PaymentStrategy' interfeysini joriy qilishi shart."
    }
  },
  {
    "id": 4,
    "tier": 1,
    "tierName": "1-Bosqich: Interfeys va 'implements'",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "4. Korzinka Go — 'ILoyaltyCardService' Interfeysini Joriy Qilish",
      "en": "4. Korzinka Go — Interface & Implementation"
    },
    "scenario": {
      "uz": "Korzinka Go da 'interface ILoyaltyCardService' e'lon qiling va unga 'void executeService();' metodini qo'shing. 'LoyaltyCardServiceImpl' sinfida 'implements ILoyaltyCardService' qiling.",
      "en": "Declare contract 'interface ILoyaltyCardService' with 'void executeService();' implemented by 'LoyaltyCardServiceImpl'."
    },
    "requirements": {
      "classes": [
        "ILoyaltyCardService",
        "LoyaltyCardServiceImpl"
      ],
      "methods": [
        "executeService"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface ILoyaltyCardService {\n    void executeService();\n}\n\nclass LoyaltyCardServiceImpl implements ILoyaltyCardService {\n    @Override\n    public void executeService() {\n        System.out.println(\"Korzinka Go: Xizmat bajarildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ILoyaltyCardService svc = new LoyaltyCardServiceImpl();\n        svc.executeService();\n    }\n}",
    "detailedSolution": {
      "theory": "Interfeys — 100% abstrakt shartnoma. U 'NIMA qilinishi kerak'ligini aytadi, lekin 'QANDAY qilinishi'ni har bir sinf o'zi hal qiladi.",
      "theoryEn": "Interfaces establish a pure behavioral contract specifying WHAT operations must be supported without mandating HOW.",
      "cleanCode": "interface ILoyaltyCardService { void executeService(); }\nclass LoyaltyCardServiceImpl implements ILoyaltyCardService { ... }",
      "breakdown": [
        "<code>implements ILoyaltyCardService</code>: Sinif ushbu interfeysning barcha qoidalarini bajarish majburiyatini oladi."
      ],
      "pitfalls": "Interfeys metodlarini qayta yozayotganda 'public' so'zini qo'yish shart, aks holda ko'rinish darajasi pasayib ketadi.",
      "cw2Tip": "Barcha to'lov shlyuzlari (Payme, Click, Cash) bitta 'PaymentStrategy' interfeysini joriy qilishi shart."
    }
  },
  {
    "id": 5,
    "tier": 1,
    "tierName": "1-Bosqich: Interfeys va 'implements'",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "5. WIUT Portal — 'IStudentService' Interfeysini Joriy Qilish",
      "en": "5. WIUT Portal — Interface & Implementation"
    },
    "scenario": {
      "uz": "WIUT Portal da 'interface IStudentService' e'lon qiling va unga 'void executeService();' metodini qo'shing. 'StudentServiceImpl' sinfida 'implements IStudentService' qiling.",
      "en": "Declare contract 'interface IStudentService' with 'void executeService();' implemented by 'StudentServiceImpl'."
    },
    "requirements": {
      "classes": [
        "IStudentService",
        "StudentServiceImpl"
      ],
      "methods": [
        "executeService"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IStudentService {\n    void executeService();\n}\n\nclass StudentServiceImpl implements IStudentService {\n    @Override\n    public void executeService() {\n        System.out.println(\"WIUT Portal: Xizmat bajarildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IStudentService svc = new StudentServiceImpl();\n        svc.executeService();\n    }\n}",
    "detailedSolution": {
      "theory": "Interfeys — 100% abstrakt shartnoma. U 'NIMA qilinishi kerak'ligini aytadi, lekin 'QANDAY qilinishi'ni har bir sinf o'zi hal qiladi.",
      "theoryEn": "Interfaces establish a pure behavioral contract specifying WHAT operations must be supported without mandating HOW.",
      "cleanCode": "interface IStudentService { void executeService(); }\nclass StudentServiceImpl implements IStudentService { ... }",
      "breakdown": [
        "<code>implements IStudentService</code>: Sinif ushbu interfeysning barcha qoidalarini bajarish majburiyatini oladi."
      ],
      "pitfalls": "Interfeys metodlarini qayta yozayotganda 'public' so'zini qo'yish shart, aks holda ko'rinish darajasi pasayib ketadi.",
      "cw2Tip": "Barcha to'lov shlyuzlari (Payme, Click, Cash) bitta 'PaymentStrategy' interfeysini joriy qilishi shart."
    }
  },
  {
    "id": 6,
    "tier": 1,
    "tierName": "1-Bosqich: Interfeys va 'implements'",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "6. Click Pay — 'IPaymentTxnService' Interfeysini Joriy Qilish",
      "en": "6. Click Pay — Interface & Implementation"
    },
    "scenario": {
      "uz": "Click Pay da 'interface IPaymentTxnService' e'lon qiling va unga 'void executeService();' metodini qo'shing. 'PaymentTxnServiceImpl' sinfida 'implements IPaymentTxnService' qiling.",
      "en": "Declare contract 'interface IPaymentTxnService' with 'void executeService();' implemented by 'PaymentTxnServiceImpl'."
    },
    "requirements": {
      "classes": [
        "IPaymentTxnService",
        "PaymentTxnServiceImpl"
      ],
      "methods": [
        "executeService"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IPaymentTxnService {\n    void executeService();\n}\n\nclass PaymentTxnServiceImpl implements IPaymentTxnService {\n    @Override\n    public void executeService() {\n        System.out.println(\"Click Pay: Xizmat bajarildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IPaymentTxnService svc = new PaymentTxnServiceImpl();\n        svc.executeService();\n    }\n}",
    "detailedSolution": {
      "theory": "Interfeys — 100% abstrakt shartnoma. U 'NIMA qilinishi kerak'ligini aytadi, lekin 'QANDAY qilinishi'ni har bir sinf o'zi hal qiladi.",
      "theoryEn": "Interfaces establish a pure behavioral contract specifying WHAT operations must be supported without mandating HOW.",
      "cleanCode": "interface IPaymentTxnService { void executeService(); }\nclass PaymentTxnServiceImpl implements IPaymentTxnService { ... }",
      "breakdown": [
        "<code>implements IPaymentTxnService</code>: Sinif ushbu interfeysning barcha qoidalarini bajarish majburiyatini oladi."
      ],
      "pitfalls": "Interfeys metodlarini qayta yozayotganda 'public' so'zini qo'yish shart, aks holda ko'rinish darajasi pasayib ketadi.",
      "cw2Tip": "Barcha to'lov shlyuzlari (Payme, Click, Cash) bitta 'PaymentStrategy' interfeysini joriy qilishi shart."
    }
  },
  {
    "id": 7,
    "tier": 1,
    "tierName": "1-Bosqich: Interfeys va 'implements'",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "7. Telegram Bot — 'IBotMessageService' Interfeysini Joriy Qilish",
      "en": "7. Telegram Bot — Interface & Implementation"
    },
    "scenario": {
      "uz": "Telegram Bot da 'interface IBotMessageService' e'lon qiling va unga 'void executeService();' metodini qo'shing. 'BotMessageServiceImpl' sinfida 'implements IBotMessageService' qiling.",
      "en": "Declare contract 'interface IBotMessageService' with 'void executeService();' implemented by 'BotMessageServiceImpl'."
    },
    "requirements": {
      "classes": [
        "IBotMessageService",
        "BotMessageServiceImpl"
      ],
      "methods": [
        "executeService"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IBotMessageService {\n    void executeService();\n}\n\nclass BotMessageServiceImpl implements IBotMessageService {\n    @Override\n    public void executeService() {\n        System.out.println(\"Telegram Bot: Xizmat bajarildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IBotMessageService svc = new BotMessageServiceImpl();\n        svc.executeService();\n    }\n}",
    "detailedSolution": {
      "theory": "Interfeys — 100% abstrakt shartnoma. U 'NIMA qilinishi kerak'ligini aytadi, lekin 'QANDAY qilinishi'ni har bir sinf o'zi hal qiladi.",
      "theoryEn": "Interfaces establish a pure behavioral contract specifying WHAT operations must be supported without mandating HOW.",
      "cleanCode": "interface IBotMessageService { void executeService(); }\nclass BotMessageServiceImpl implements IBotMessageService { ... }",
      "breakdown": [
        "<code>implements IBotMessageService</code>: Sinif ushbu interfeysning barcha qoidalarini bajarish majburiyatini oladi."
      ],
      "pitfalls": "Interfeys metodlarini qayta yozayotganda 'public' so'zini qo'yish shart, aks holda ko'rinish darajasi pasayib ketadi.",
      "cw2Tip": "Barcha to'lov shlyuzlari (Payme, Click, Cash) bitta 'PaymentStrategy' interfeysini joriy qilishi shart."
    }
  },
  {
    "id": 8,
    "tier": 1,
    "tierName": "1-Bosqich: Interfeys va 'implements'",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "8. UzAirways — 'IFlightTicketService' Interfeysini Joriy Qilish",
      "en": "8. UzAirways — Interface & Implementation"
    },
    "scenario": {
      "uz": "UzAirways da 'interface IFlightTicketService' e'lon qiling va unga 'void executeService();' metodini qo'shing. 'FlightTicketServiceImpl' sinfida 'implements IFlightTicketService' qiling.",
      "en": "Declare contract 'interface IFlightTicketService' with 'void executeService();' implemented by 'FlightTicketServiceImpl'."
    },
    "requirements": {
      "classes": [
        "IFlightTicketService",
        "FlightTicketServiceImpl"
      ],
      "methods": [
        "executeService"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IFlightTicketService {\n    void executeService();\n}\n\nclass FlightTicketServiceImpl implements IFlightTicketService {\n    @Override\n    public void executeService() {\n        System.out.println(\"UzAirways: Xizmat bajarildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IFlightTicketService svc = new FlightTicketServiceImpl();\n        svc.executeService();\n    }\n}",
    "detailedSolution": {
      "theory": "Interfeys — 100% abstrakt shartnoma. U 'NIMA qilinishi kerak'ligini aytadi, lekin 'QANDAY qilinishi'ni har bir sinf o'zi hal qiladi.",
      "theoryEn": "Interfaces establish a pure behavioral contract specifying WHAT operations must be supported without mandating HOW.",
      "cleanCode": "interface IFlightTicketService { void executeService(); }\nclass FlightTicketServiceImpl implements IFlightTicketService { ... }",
      "breakdown": [
        "<code>implements IFlightTicketService</code>: Sinif ushbu interfeysning barcha qoidalarini bajarish majburiyatini oladi."
      ],
      "pitfalls": "Interfeys metodlarini qayta yozayotganda 'public' so'zini qo'yish shart, aks holda ko'rinish darajasi pasayib ketadi.",
      "cw2Tip": "Barcha to'lov shlyuzlari (Payme, Click, Cash) bitta 'PaymentStrategy' interfeysini joriy qilishi shart."
    }
  },
  {
    "id": 9,
    "tier": 1,
    "tierName": "1-Bosqich: Interfeys va 'implements'",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "9. IT Park Academy — 'IBootcampCourseService' Interfeysini Joriy Qilish",
      "en": "9. IT Park Academy — Interface & Implementation"
    },
    "scenario": {
      "uz": "IT Park Academy da 'interface IBootcampCourseService' e'lon qiling va unga 'void executeService();' metodini qo'shing. 'BootcampCourseServiceImpl' sinfida 'implements IBootcampCourseService' qiling.",
      "en": "Declare contract 'interface IBootcampCourseService' with 'void executeService();' implemented by 'BootcampCourseServiceImpl'."
    },
    "requirements": {
      "classes": [
        "IBootcampCourseService",
        "BootcampCourseServiceImpl"
      ],
      "methods": [
        "executeService"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IBootcampCourseService {\n    void executeService();\n}\n\nclass BootcampCourseServiceImpl implements IBootcampCourseService {\n    @Override\n    public void executeService() {\n        System.out.println(\"IT Park Academy: Xizmat bajarildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IBootcampCourseService svc = new BootcampCourseServiceImpl();\n        svc.executeService();\n    }\n}",
    "detailedSolution": {
      "theory": "Interfeys — 100% abstrakt shartnoma. U 'NIMA qilinishi kerak'ligini aytadi, lekin 'QANDAY qilinishi'ni har bir sinf o'zi hal qiladi.",
      "theoryEn": "Interfaces establish a pure behavioral contract specifying WHAT operations must be supported without mandating HOW.",
      "cleanCode": "interface IBootcampCourseService { void executeService(); }\nclass BootcampCourseServiceImpl implements IBootcampCourseService { ... }",
      "breakdown": [
        "<code>implements IBootcampCourseService</code>: Sinif ushbu interfeysning barcha qoidalarini bajarish majburiyatini oladi."
      ],
      "pitfalls": "Interfeys metodlarini qayta yozayotganda 'public' so'zini qo'yish shart, aks holda ko'rinish darajasi pasayib ketadi.",
      "cw2Tip": "Barcha to'lov shlyuzlari (Payme, Click, Cash) bitta 'PaymentStrategy' interfeysini joriy qilishi shart."
    }
  },
  {
    "id": 10,
    "tier": 1,
    "tierName": "1-Bosqich: Interfeys va 'implements'",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "10. Anorbank — 'IDebitCardService' Interfeysini Joriy Qilish",
      "en": "10. Anorbank — Interface & Implementation"
    },
    "scenario": {
      "uz": "Anorbank da 'interface IDebitCardService' e'lon qiling va unga 'void executeService();' metodini qo'shing. 'DebitCardServiceImpl' sinfida 'implements IDebitCardService' qiling.",
      "en": "Declare contract 'interface IDebitCardService' with 'void executeService();' implemented by 'DebitCardServiceImpl'."
    },
    "requirements": {
      "classes": [
        "IDebitCardService",
        "DebitCardServiceImpl"
      ],
      "methods": [
        "executeService"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IDebitCardService {\n    void executeService();\n}\n\nclass DebitCardServiceImpl implements IDebitCardService {\n    @Override\n    public void executeService() {\n        System.out.println(\"Anorbank: Xizmat bajarildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IDebitCardService svc = new DebitCardServiceImpl();\n        svc.executeService();\n    }\n}",
    "detailedSolution": {
      "theory": "Interfeys — 100% abstrakt shartnoma. U 'NIMA qilinishi kerak'ligini aytadi, lekin 'QANDAY qilinishi'ni har bir sinf o'zi hal qiladi.",
      "theoryEn": "Interfaces establish a pure behavioral contract specifying WHAT operations must be supported without mandating HOW.",
      "cleanCode": "interface IDebitCardService { void executeService(); }\nclass DebitCardServiceImpl implements IDebitCardService { ... }",
      "breakdown": [
        "<code>implements IDebitCardService</code>: Sinif ushbu interfeysning barcha qoidalarini bajarish majburiyatini oladi."
      ],
      "pitfalls": "Interfeys metodlarini qayta yozayotganda 'public' so'zini qo'yish shart, aks holda ko'rinish darajasi pasayib ketadi.",
      "cw2Tip": "Barcha to'lov shlyuzlari (Payme, Click, Cash) bitta 'PaymentStrategy' interfeysini joriy qilishi shart."
    }
  },
  {
    "id": 11,
    "tier": 1,
    "tierName": "1-Bosqich: Interfeys va 'implements'",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "11. Oson Apteka — 'IMedicineService' Interfeysini Joriy Qilish",
      "en": "11. Oson Apteka — Interface & Implementation"
    },
    "scenario": {
      "uz": "Oson Apteka da 'interface IMedicineService' e'lon qiling va unga 'void executeService();' metodini qo'shing. 'MedicineServiceImpl' sinfida 'implements IMedicineService' qiling.",
      "en": "Declare contract 'interface IMedicineService' with 'void executeService();' implemented by 'MedicineServiceImpl'."
    },
    "requirements": {
      "classes": [
        "IMedicineService",
        "MedicineServiceImpl"
      ],
      "methods": [
        "executeService"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IMedicineService {\n    void executeService();\n}\n\nclass MedicineServiceImpl implements IMedicineService {\n    @Override\n    public void executeService() {\n        System.out.println(\"Oson Apteka: Xizmat bajarildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IMedicineService svc = new MedicineServiceImpl();\n        svc.executeService();\n    }\n}",
    "detailedSolution": {
      "theory": "Interfeys — 100% abstrakt shartnoma. U 'NIMA qilinishi kerak'ligini aytadi, lekin 'QANDAY qilinishi'ni har bir sinf o'zi hal qiladi.",
      "theoryEn": "Interfaces establish a pure behavioral contract specifying WHAT operations must be supported without mandating HOW.",
      "cleanCode": "interface IMedicineService { void executeService(); }\nclass MedicineServiceImpl implements IMedicineService { ... }",
      "breakdown": [
        "<code>implements IMedicineService</code>: Sinif ushbu interfeysning barcha qoidalarini bajarish majburiyatini oladi."
      ],
      "pitfalls": "Interfeys metodlarini qayta yozayotganda 'public' so'zini qo'yish shart, aks holda ko'rinish darajasi pasayib ketadi.",
      "cw2Tip": "Barcha to'lov shlyuzlari (Payme, Click, Cash) bitta 'PaymentStrategy' interfeysini joriy qilishi shart."
    }
  },
  {
    "id": 12,
    "tier": 1,
    "tierName": "1-Bosqich: Interfeys va 'implements'",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "12. Evos FastFood — 'IFoodOrderService' Interfeysini Joriy Qilish",
      "en": "12. Evos FastFood — Interface & Implementation"
    },
    "scenario": {
      "uz": "Evos FastFood da 'interface IFoodOrderService' e'lon qiling va unga 'void executeService();' metodini qo'shing. 'FoodOrderServiceImpl' sinfida 'implements IFoodOrderService' qiling.",
      "en": "Declare contract 'interface IFoodOrderService' with 'void executeService();' implemented by 'FoodOrderServiceImpl'."
    },
    "requirements": {
      "classes": [
        "IFoodOrderService",
        "FoodOrderServiceImpl"
      ],
      "methods": [
        "executeService"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IFoodOrderService {\n    void executeService();\n}\n\nclass FoodOrderServiceImpl implements IFoodOrderService {\n    @Override\n    public void executeService() {\n        System.out.println(\"Evos FastFood: Xizmat bajarildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IFoodOrderService svc = new FoodOrderServiceImpl();\n        svc.executeService();\n    }\n}",
    "detailedSolution": {
      "theory": "Interfeys — 100% abstrakt shartnoma. U 'NIMA qilinishi kerak'ligini aytadi, lekin 'QANDAY qilinishi'ni har bir sinf o'zi hal qiladi.",
      "theoryEn": "Interfaces establish a pure behavioral contract specifying WHAT operations must be supported without mandating HOW.",
      "cleanCode": "interface IFoodOrderService { void executeService(); }\nclass FoodOrderServiceImpl implements IFoodOrderService { ... }",
      "breakdown": [
        "<code>implements IFoodOrderService</code>: Sinif ushbu interfeysning barcha qoidalarini bajarish majburiyatini oladi."
      ],
      "pitfalls": "Interfeys metodlarini qayta yozayotganda 'public' so'zini qo'yish shart, aks holda ko'rinish darajasi pasayib ketadi.",
      "cw2Tip": "Barcha to'lov shlyuzlari (Payme, Click, Cash) bitta 'PaymentStrategy' interfeysini joriy qilishi shart."
    }
  },
  {
    "id": 13,
    "tier": 1,
    "tierName": "1-Bosqich: Interfeys va 'implements'",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "13. Bellissimo Pizza — 'IPizzaOrderService' Interfeysini Joriy Qilish",
      "en": "13. Bellissimo Pizza — Interface & Implementation"
    },
    "scenario": {
      "uz": "Bellissimo Pizza da 'interface IPizzaOrderService' e'lon qiling va unga 'void executeService();' metodini qo'shing. 'PizzaOrderServiceImpl' sinfida 'implements IPizzaOrderService' qiling.",
      "en": "Declare contract 'interface IPizzaOrderService' with 'void executeService();' implemented by 'PizzaOrderServiceImpl'."
    },
    "requirements": {
      "classes": [
        "IPizzaOrderService",
        "PizzaOrderServiceImpl"
      ],
      "methods": [
        "executeService"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IPizzaOrderService {\n    void executeService();\n}\n\nclass PizzaOrderServiceImpl implements IPizzaOrderService {\n    @Override\n    public void executeService() {\n        System.out.println(\"Bellissimo Pizza: Xizmat bajarildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IPizzaOrderService svc = new PizzaOrderServiceImpl();\n        svc.executeService();\n    }\n}",
    "detailedSolution": {
      "theory": "Interfeys — 100% abstrakt shartnoma. U 'NIMA qilinishi kerak'ligini aytadi, lekin 'QANDAY qilinishi'ni har bir sinf o'zi hal qiladi.",
      "theoryEn": "Interfaces establish a pure behavioral contract specifying WHAT operations must be supported without mandating HOW.",
      "cleanCode": "interface IPizzaOrderService { void executeService(); }\nclass PizzaOrderServiceImpl implements IPizzaOrderService { ... }",
      "breakdown": [
        "<code>implements IPizzaOrderService</code>: Sinif ushbu interfeysning barcha qoidalarini bajarish majburiyatini oladi."
      ],
      "pitfalls": "Interfeys metodlarini qayta yozayotganda 'public' so'zini qo'yish shart, aks holda ko'rinish darajasi pasayib ketadi.",
      "cw2Tip": "Barcha to'lov shlyuzlari (Payme, Click, Cash) bitta 'PaymentStrategy' interfeysini joriy qilishi shart."
    }
  },
  {
    "id": 14,
    "tier": 1,
    "tierName": "1-Bosqich: Interfeys va 'implements'",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "14. Milliy TV — 'IBroadcastShowService' Interfeysini Joriy Qilish",
      "en": "14. Milliy TV — Interface & Implementation"
    },
    "scenario": {
      "uz": "Milliy TV da 'interface IBroadcastShowService' e'lon qiling va unga 'void executeService();' metodini qo'shing. 'BroadcastShowServiceImpl' sinfida 'implements IBroadcastShowService' qiling.",
      "en": "Declare contract 'interface IBroadcastShowService' with 'void executeService();' implemented by 'BroadcastShowServiceImpl'."
    },
    "requirements": {
      "classes": [
        "IBroadcastShowService",
        "BroadcastShowServiceImpl"
      ],
      "methods": [
        "executeService"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IBroadcastShowService {\n    void executeService();\n}\n\nclass BroadcastShowServiceImpl implements IBroadcastShowService {\n    @Override\n    public void executeService() {\n        System.out.println(\"Milliy TV: Xizmat bajarildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IBroadcastShowService svc = new BroadcastShowServiceImpl();\n        svc.executeService();\n    }\n}",
    "detailedSolution": {
      "theory": "Interfeys — 100% abstrakt shartnoma. U 'NIMA qilinishi kerak'ligini aytadi, lekin 'QANDAY qilinishi'ni har bir sinf o'zi hal qiladi.",
      "theoryEn": "Interfaces establish a pure behavioral contract specifying WHAT operations must be supported without mandating HOW.",
      "cleanCode": "interface IBroadcastShowService { void executeService(); }\nclass BroadcastShowServiceImpl implements IBroadcastShowService { ... }",
      "breakdown": [
        "<code>implements IBroadcastShowService</code>: Sinif ushbu interfeysning barcha qoidalarini bajarish majburiyatini oladi."
      ],
      "pitfalls": "Interfeys metodlarini qayta yozayotganda 'public' so'zini qo'yish shart, aks holda ko'rinish darajasi pasayib ketadi.",
      "cw2Tip": "Barcha to'lov shlyuzlari (Payme, Click, Cash) bitta 'PaymentStrategy' interfeysini joriy qilishi shart."
    }
  },
  {
    "id": 15,
    "tier": 1,
    "tierName": "1-Bosqich: Interfeys va 'implements'",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "15. Spotify Sound — 'IAudioTrackService' Interfeysini Joriy Qilish",
      "en": "15. Spotify Sound — Interface & Implementation"
    },
    "scenario": {
      "uz": "Spotify Sound da 'interface IAudioTrackService' e'lon qiling va unga 'void executeService();' metodini qo'shing. 'AudioTrackServiceImpl' sinfida 'implements IAudioTrackService' qiling.",
      "en": "Declare contract 'interface IAudioTrackService' with 'void executeService();' implemented by 'AudioTrackServiceImpl'."
    },
    "requirements": {
      "classes": [
        "IAudioTrackService",
        "AudioTrackServiceImpl"
      ],
      "methods": [
        "executeService"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IAudioTrackService {\n    void executeService();\n}\n\nclass AudioTrackServiceImpl implements IAudioTrackService {\n    @Override\n    public void executeService() {\n        System.out.println(\"Spotify Sound: Xizmat bajarildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IAudioTrackService svc = new AudioTrackServiceImpl();\n        svc.executeService();\n    }\n}",
    "detailedSolution": {
      "theory": "Interfeys — 100% abstrakt shartnoma. U 'NIMA qilinishi kerak'ligini aytadi, lekin 'QANDAY qilinishi'ni har bir sinf o'zi hal qiladi.",
      "theoryEn": "Interfaces establish a pure behavioral contract specifying WHAT operations must be supported without mandating HOW.",
      "cleanCode": "interface IAudioTrackService { void executeService(); }\nclass AudioTrackServiceImpl implements IAudioTrackService { ... }",
      "breakdown": [
        "<code>implements IAudioTrackService</code>: Sinif ushbu interfeysning barcha qoidalarini bajarish majburiyatini oladi."
      ],
      "pitfalls": "Interfeys metodlarini qayta yozayotganda 'public' so'zini qo'yish shart, aks holda ko'rinish darajasi pasayib ketadi.",
      "cw2Tip": "Barcha to'lov shlyuzlari (Payme, Click, Cash) bitta 'PaymentStrategy' interfeysini joriy qilishi shart."
    }
  },
  {
    "id": 16,
    "tier": 1,
    "tierName": "1-Bosqich: Interfeys va 'implements'",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "16. Smart Thermostat — 'IThermostatService' Interfeysini Joriy Qilish",
      "en": "16. Smart Thermostat — Interface & Implementation"
    },
    "scenario": {
      "uz": "Smart Thermostat da 'interface IThermostatService' e'lon qiling va unga 'void executeService();' metodini qo'shing. 'ThermostatServiceImpl' sinfida 'implements IThermostatService' qiling.",
      "en": "Declare contract 'interface IThermostatService' with 'void executeService();' implemented by 'ThermostatServiceImpl'."
    },
    "requirements": {
      "classes": [
        "IThermostatService",
        "ThermostatServiceImpl"
      ],
      "methods": [
        "executeService"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IThermostatService {\n    void executeService();\n}\n\nclass ThermostatServiceImpl implements IThermostatService {\n    @Override\n    public void executeService() {\n        System.out.println(\"Smart Thermostat: Xizmat bajarildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IThermostatService svc = new ThermostatServiceImpl();\n        svc.executeService();\n    }\n}",
    "detailedSolution": {
      "theory": "Interfeys — 100% abstrakt shartnoma. U 'NIMA qilinishi kerak'ligini aytadi, lekin 'QANDAY qilinishi'ni har bir sinf o'zi hal qiladi.",
      "theoryEn": "Interfaces establish a pure behavioral contract specifying WHAT operations must be supported without mandating HOW.",
      "cleanCode": "interface IThermostatService { void executeService(); }\nclass ThermostatServiceImpl implements IThermostatService { ... }",
      "breakdown": [
        "<code>implements IThermostatService</code>: Sinif ushbu interfeysning barcha qoidalarini bajarish majburiyatini oladi."
      ],
      "pitfalls": "Interfeys metodlarini qayta yozayotganda 'public' so'zini qo'yish shart, aks holda ko'rinish darajasi pasayib ketadi.",
      "cw2Tip": "Barcha to'lov shlyuzlari (Payme, Click, Cash) bitta 'PaymentStrategy' interfeysini joriy qilishi shart."
    }
  },
  {
    "id": 17,
    "tier": 1,
    "tierName": "1-Bosqich: Interfeys va 'implements'",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "17. Drone Delivery — 'IDeliveryDroneService' Interfeysini Joriy Qilish",
      "en": "17. Drone Delivery — Interface & Implementation"
    },
    "scenario": {
      "uz": "Drone Delivery da 'interface IDeliveryDroneService' e'lon qiling va unga 'void executeService();' metodini qo'shing. 'DeliveryDroneServiceImpl' sinfida 'implements IDeliveryDroneService' qiling.",
      "en": "Declare contract 'interface IDeliveryDroneService' with 'void executeService();' implemented by 'DeliveryDroneServiceImpl'."
    },
    "requirements": {
      "classes": [
        "IDeliveryDroneService",
        "DeliveryDroneServiceImpl"
      ],
      "methods": [
        "executeService"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IDeliveryDroneService {\n    void executeService();\n}\n\nclass DeliveryDroneServiceImpl implements IDeliveryDroneService {\n    @Override\n    public void executeService() {\n        System.out.println(\"Drone Delivery: Xizmat bajarildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IDeliveryDroneService svc = new DeliveryDroneServiceImpl();\n        svc.executeService();\n    }\n}",
    "detailedSolution": {
      "theory": "Interfeys — 100% abstrakt shartnoma. U 'NIMA qilinishi kerak'ligini aytadi, lekin 'QANDAY qilinishi'ni har bir sinf o'zi hal qiladi.",
      "theoryEn": "Interfaces establish a pure behavioral contract specifying WHAT operations must be supported without mandating HOW.",
      "cleanCode": "interface IDeliveryDroneService { void executeService(); }\nclass DeliveryDroneServiceImpl implements IDeliveryDroneService { ... }",
      "breakdown": [
        "<code>implements IDeliveryDroneService</code>: Sinif ushbu interfeysning barcha qoidalarini bajarish majburiyatini oladi."
      ],
      "pitfalls": "Interfeys metodlarini qayta yozayotganda 'public' so'zini qo'yish shart, aks holda ko'rinish darajasi pasayib ketadi.",
      "cw2Tip": "Barcha to'lov shlyuzlari (Payme, Click, Cash) bitta 'PaymentStrategy' interfeysini joriy qilishi shart."
    }
  },
  {
    "id": 18,
    "tier": 1,
    "tierName": "1-Bosqich: Interfeys va 'implements'",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "18. Smart Warehouse — 'IStorageBayService' Interfeysini Joriy Qilish",
      "en": "18. Smart Warehouse — Interface & Implementation"
    },
    "scenario": {
      "uz": "Smart Warehouse da 'interface IStorageBayService' e'lon qiling va unga 'void executeService();' metodini qo'shing. 'StorageBayServiceImpl' sinfida 'implements IStorageBayService' qiling.",
      "en": "Declare contract 'interface IStorageBayService' with 'void executeService();' implemented by 'StorageBayServiceImpl'."
    },
    "requirements": {
      "classes": [
        "IStorageBayService",
        "StorageBayServiceImpl"
      ],
      "methods": [
        "executeService"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IStorageBayService {\n    void executeService();\n}\n\nclass StorageBayServiceImpl implements IStorageBayService {\n    @Override\n    public void executeService() {\n        System.out.println(\"Smart Warehouse: Xizmat bajarildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IStorageBayService svc = new StorageBayServiceImpl();\n        svc.executeService();\n    }\n}",
    "detailedSolution": {
      "theory": "Interfeys — 100% abstrakt shartnoma. U 'NIMA qilinishi kerak'ligini aytadi, lekin 'QANDAY qilinishi'ni har bir sinf o'zi hal qiladi.",
      "theoryEn": "Interfaces establish a pure behavioral contract specifying WHAT operations must be supported without mandating HOW.",
      "cleanCode": "interface IStorageBayService { void executeService(); }\nclass StorageBayServiceImpl implements IStorageBayService { ... }",
      "breakdown": [
        "<code>implements IStorageBayService</code>: Sinif ushbu interfeysning barcha qoidalarini bajarish majburiyatini oladi."
      ],
      "pitfalls": "Interfeys metodlarini qayta yozayotganda 'public' so'zini qo'yish shart, aks holda ko'rinish darajasi pasayib ketadi.",
      "cw2Tip": "Barcha to'lov shlyuzlari (Payme, Click, Cash) bitta 'PaymentStrategy' interfeysini joriy qilishi shart."
    }
  },
  {
    "id": 19,
    "tier": 1,
    "tierName": "1-Bosqich: Interfeys va 'implements'",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "19. Crypto Wallet — 'ICryptoAssetService' Interfeysini Joriy Qilish",
      "en": "19. Crypto Wallet — Interface & Implementation"
    },
    "scenario": {
      "uz": "Crypto Wallet da 'interface ICryptoAssetService' e'lon qiling va unga 'void executeService();' metodini qo'shing. 'CryptoAssetServiceImpl' sinfida 'implements ICryptoAssetService' qiling.",
      "en": "Declare contract 'interface ICryptoAssetService' with 'void executeService();' implemented by 'CryptoAssetServiceImpl'."
    },
    "requirements": {
      "classes": [
        "ICryptoAssetService",
        "CryptoAssetServiceImpl"
      ],
      "methods": [
        "executeService"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface ICryptoAssetService {\n    void executeService();\n}\n\nclass CryptoAssetServiceImpl implements ICryptoAssetService {\n    @Override\n    public void executeService() {\n        System.out.println(\"Crypto Wallet: Xizmat bajarildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ICryptoAssetService svc = new CryptoAssetServiceImpl();\n        svc.executeService();\n    }\n}",
    "detailedSolution": {
      "theory": "Interfeys — 100% abstrakt shartnoma. U 'NIMA qilinishi kerak'ligini aytadi, lekin 'QANDAY qilinishi'ni har bir sinf o'zi hal qiladi.",
      "theoryEn": "Interfaces establish a pure behavioral contract specifying WHAT operations must be supported without mandating HOW.",
      "cleanCode": "interface ICryptoAssetService { void executeService(); }\nclass CryptoAssetServiceImpl implements ICryptoAssetService { ... }",
      "breakdown": [
        "<code>implements ICryptoAssetService</code>: Sinif ushbu interfeysning barcha qoidalarini bajarish majburiyatini oladi."
      ],
      "pitfalls": "Interfeys metodlarini qayta yozayotganda 'public' so'zini qo'yish shart, aks holda ko'rinish darajasi pasayib ketadi.",
      "cw2Tip": "Barcha to'lov shlyuzlari (Payme, Click, Cash) bitta 'PaymentStrategy' interfeysini joriy qilishi shart."
    }
  },
  {
    "id": 20,
    "tier": 1,
    "tierName": "1-Bosqich: Interfeys va 'implements'",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "20. National Library — 'ICatalogBookService' Interfeysini Joriy Qilish",
      "en": "20. National Library — Interface & Implementation"
    },
    "scenario": {
      "uz": "National Library da 'interface ICatalogBookService' e'lon qiling va unga 'void executeService();' metodini qo'shing. 'CatalogBookServiceImpl' sinfida 'implements ICatalogBookService' qiling.",
      "en": "Declare contract 'interface ICatalogBookService' with 'void executeService();' implemented by 'CatalogBookServiceImpl'."
    },
    "requirements": {
      "classes": [
        "ICatalogBookService",
        "CatalogBookServiceImpl"
      ],
      "methods": [
        "executeService"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface ICatalogBookService {\n    void executeService();\n}\n\nclass CatalogBookServiceImpl implements ICatalogBookService {\n    @Override\n    public void executeService() {\n        System.out.println(\"National Library: Xizmat bajarildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ICatalogBookService svc = new CatalogBookServiceImpl();\n        svc.executeService();\n    }\n}",
    "detailedSolution": {
      "theory": "Interfeys — 100% abstrakt shartnoma. U 'NIMA qilinishi kerak'ligini aytadi, lekin 'QANDAY qilinishi'ni har bir sinf o'zi hal qiladi.",
      "theoryEn": "Interfaces establish a pure behavioral contract specifying WHAT operations must be supported without mandating HOW.",
      "cleanCode": "interface ICatalogBookService { void executeService(); }\nclass CatalogBookServiceImpl implements ICatalogBookService { ... }",
      "breakdown": [
        "<code>implements ICatalogBookService</code>: Sinif ushbu interfeysning barcha qoidalarini bajarish majburiyatini oladi."
      ],
      "pitfalls": "Interfeys metodlarini qayta yozayotganda 'public' so'zini qo'yish shart, aks holda ko'rinish darajasi pasayib ketadi.",
      "cw2Tip": "Barcha to'lov shlyuzlari (Payme, Click, Cash) bitta 'PaymentStrategy' interfeysini joriy qilishi shart."
    }
  },
  {
    "id": 21,
    "tier": 1,
    "tierName": "1-Bosqich: Interfeys va 'implements'",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "21. BeFit Club — 'IGymMemberService' Interfeysini Joriy Qilish",
      "en": "21. BeFit Club — Interface & Implementation"
    },
    "scenario": {
      "uz": "BeFit Club da 'interface IGymMemberService' e'lon qiling va unga 'void executeService();' metodini qo'shing. 'GymMemberServiceImpl' sinfida 'implements IGymMemberService' qiling.",
      "en": "Declare contract 'interface IGymMemberService' with 'void executeService();' implemented by 'GymMemberServiceImpl'."
    },
    "requirements": {
      "classes": [
        "IGymMemberService",
        "GymMemberServiceImpl"
      ],
      "methods": [
        "executeService"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IGymMemberService {\n    void executeService();\n}\n\nclass GymMemberServiceImpl implements IGymMemberService {\n    @Override\n    public void executeService() {\n        System.out.println(\"BeFit Club: Xizmat bajarildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IGymMemberService svc = new GymMemberServiceImpl();\n        svc.executeService();\n    }\n}",
    "detailedSolution": {
      "theory": "Interfeys — 100% abstrakt shartnoma. U 'NIMA qilinishi kerak'ligini aytadi, lekin 'QANDAY qilinishi'ni har bir sinf o'zi hal qiladi.",
      "theoryEn": "Interfaces establish a pure behavioral contract specifying WHAT operations must be supported without mandating HOW.",
      "cleanCode": "interface IGymMemberService { void executeService(); }\nclass GymMemberServiceImpl implements IGymMemberService { ... }",
      "breakdown": [
        "<code>implements IGymMemberService</code>: Sinif ushbu interfeysning barcha qoidalarini bajarish majburiyatini oladi."
      ],
      "pitfalls": "Interfeys metodlarini qayta yozayotganda 'public' so'zini qo'yish shart, aks holda ko'rinish darajasi pasayib ketadi.",
      "cw2Tip": "Barcha to'lov shlyuzlari (Payme, Click, Cash) bitta 'PaymentStrategy' interfeysini joriy qilishi shart."
    }
  },
  {
    "id": 22,
    "tier": 1,
    "tierName": "1-Bosqich: Interfeys va 'implements'",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "22. Tashkent Parking — 'IParkingBayService' Interfeysini Joriy Qilish",
      "en": "22. Tashkent Parking — Interface & Implementation"
    },
    "scenario": {
      "uz": "Tashkent Parking da 'interface IParkingBayService' e'lon qiling va unga 'void executeService();' metodini qo'shing. 'ParkingBayServiceImpl' sinfida 'implements IParkingBayService' qiling.",
      "en": "Declare contract 'interface IParkingBayService' with 'void executeService();' implemented by 'ParkingBayServiceImpl'."
    },
    "requirements": {
      "classes": [
        "IParkingBayService",
        "ParkingBayServiceImpl"
      ],
      "methods": [
        "executeService"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IParkingBayService {\n    void executeService();\n}\n\nclass ParkingBayServiceImpl implements IParkingBayService {\n    @Override\n    public void executeService() {\n        System.out.println(\"Tashkent Parking: Xizmat bajarildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IParkingBayService svc = new ParkingBayServiceImpl();\n        svc.executeService();\n    }\n}",
    "detailedSolution": {
      "theory": "Interfeys — 100% abstrakt shartnoma. U 'NIMA qilinishi kerak'ligini aytadi, lekin 'QANDAY qilinishi'ni har bir sinf o'zi hal qiladi.",
      "theoryEn": "Interfaces establish a pure behavioral contract specifying WHAT operations must be supported without mandating HOW.",
      "cleanCode": "interface IParkingBayService { void executeService(); }\nclass ParkingBayServiceImpl implements IParkingBayService { ... }",
      "breakdown": [
        "<code>implements IParkingBayService</code>: Sinif ushbu interfeysning barcha qoidalarini bajarish majburiyatini oladi."
      ],
      "pitfalls": "Interfeys metodlarini qayta yozayotganda 'public' so'zini qo'yish shart, aks holda ko'rinish darajasi pasayib ketadi.",
      "cw2Tip": "Barcha to'lov shlyuzlari (Payme, Click, Cash) bitta 'PaymentStrategy' interfeysini joriy qilishi shart."
    }
  },
  {
    "id": 23,
    "tier": 1,
    "tierName": "1-Bosqich: Interfeys va 'implements'",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "23. Medion Clinic — 'IPatientRecordService' Interfeysini Joriy Qilish",
      "en": "23. Medion Clinic — Interface & Implementation"
    },
    "scenario": {
      "uz": "Medion Clinic da 'interface IPatientRecordService' e'lon qiling va unga 'void executeService();' metodini qo'shing. 'PatientRecordServiceImpl' sinfida 'implements IPatientRecordService' qiling.",
      "en": "Declare contract 'interface IPatientRecordService' with 'void executeService();' implemented by 'PatientRecordServiceImpl'."
    },
    "requirements": {
      "classes": [
        "IPatientRecordService",
        "PatientRecordServiceImpl"
      ],
      "methods": [
        "executeService"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IPatientRecordService {\n    void executeService();\n}\n\nclass PatientRecordServiceImpl implements IPatientRecordService {\n    @Override\n    public void executeService() {\n        System.out.println(\"Medion Clinic: Xizmat bajarildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IPatientRecordService svc = new PatientRecordServiceImpl();\n        svc.executeService();\n    }\n}",
    "detailedSolution": {
      "theory": "Interfeys — 100% abstrakt shartnoma. U 'NIMA qilinishi kerak'ligini aytadi, lekin 'QANDAY qilinishi'ni har bir sinf o'zi hal qiladi.",
      "theoryEn": "Interfaces establish a pure behavioral contract specifying WHAT operations must be supported without mandating HOW.",
      "cleanCode": "interface IPatientRecordService { void executeService(); }\nclass PatientRecordServiceImpl implements IPatientRecordService { ... }",
      "breakdown": [
        "<code>implements IPatientRecordService</code>: Sinif ushbu interfeysning barcha qoidalarini bajarish majburiyatini oladi."
      ],
      "pitfalls": "Interfeys metodlarini qayta yozayotganda 'public' so'zini qo'yish shart, aks holda ko'rinish darajasi pasayib ketadi.",
      "cw2Tip": "Barcha to'lov shlyuzlari (Payme, Click, Cash) bitta 'PaymentStrategy' interfeysini joriy qilishi shart."
    }
  },
  {
    "id": 24,
    "tier": 1,
    "tierName": "1-Bosqich: Interfeys va 'implements'",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "24. Hyatt Regency — 'IHotelReservationService' Interfeysini Joriy Qilish",
      "en": "24. Hyatt Regency — Interface & Implementation"
    },
    "scenario": {
      "uz": "Hyatt Regency da 'interface IHotelReservationService' e'lon qiling va unga 'void executeService();' metodini qo'shing. 'HotelReservationServiceImpl' sinfida 'implements IHotelReservationService' qiling.",
      "en": "Declare contract 'interface IHotelReservationService' with 'void executeService();' implemented by 'HotelReservationServiceImpl'."
    },
    "requirements": {
      "classes": [
        "IHotelReservationService",
        "HotelReservationServiceImpl"
      ],
      "methods": [
        "executeService"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IHotelReservationService {\n    void executeService();\n}\n\nclass HotelReservationServiceImpl implements IHotelReservationService {\n    @Override\n    public void executeService() {\n        System.out.println(\"Hyatt Regency: Xizmat bajarildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IHotelReservationService svc = new HotelReservationServiceImpl();\n        svc.executeService();\n    }\n}",
    "detailedSolution": {
      "theory": "Interfeys — 100% abstrakt shartnoma. U 'NIMA qilinishi kerak'ligini aytadi, lekin 'QANDAY qilinishi'ni har bir sinf o'zi hal qiladi.",
      "theoryEn": "Interfaces establish a pure behavioral contract specifying WHAT operations must be supported without mandating HOW.",
      "cleanCode": "interface IHotelReservationService { void executeService(); }\nclass HotelReservationServiceImpl implements IHotelReservationService { ... }",
      "breakdown": [
        "<code>implements IHotelReservationService</code>: Sinif ushbu interfeysning barcha qoidalarini bajarish majburiyatini oladi."
      ],
      "pitfalls": "Interfeys metodlarini qayta yozayotganda 'public' so'zini qo'yish shart, aks holda ko'rinish darajasi pasayib ketadi.",
      "cw2Tip": "Barcha to'lov shlyuzlari (Payme, Click, Cash) bitta 'PaymentStrategy' interfeysini joriy qilishi shart."
    }
  },
  {
    "id": 25,
    "tier": 1,
    "tierName": "1-Bosqich: Interfeys va 'implements'",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "25. Premier Cinema — 'ICinemaTicketService' Interfeysini Joriy Qilish",
      "en": "25. Premier Cinema — Interface & Implementation"
    },
    "scenario": {
      "uz": "Premier Cinema da 'interface ICinemaTicketService' e'lon qiling va unga 'void executeService();' metodini qo'shing. 'CinemaTicketServiceImpl' sinfida 'implements ICinemaTicketService' qiling.",
      "en": "Declare contract 'interface ICinemaTicketService' with 'void executeService();' implemented by 'CinemaTicketServiceImpl'."
    },
    "requirements": {
      "classes": [
        "ICinemaTicketService",
        "CinemaTicketServiceImpl"
      ],
      "methods": [
        "executeService"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface ICinemaTicketService {\n    void executeService();\n}\n\nclass CinemaTicketServiceImpl implements ICinemaTicketService {\n    @Override\n    public void executeService() {\n        System.out.println(\"Premier Cinema: Xizmat bajarildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ICinemaTicketService svc = new CinemaTicketServiceImpl();\n        svc.executeService();\n    }\n}",
    "detailedSolution": {
      "theory": "Interfeys — 100% abstrakt shartnoma. U 'NIMA qilinishi kerak'ligini aytadi, lekin 'QANDAY qilinishi'ni har bir sinf o'zi hal qiladi.",
      "theoryEn": "Interfaces establish a pure behavioral contract specifying WHAT operations must be supported without mandating HOW.",
      "cleanCode": "interface ICinemaTicketService { void executeService(); }\nclass CinemaTicketServiceImpl implements ICinemaTicketService { ... }",
      "breakdown": [
        "<code>implements ICinemaTicketService</code>: Sinif ushbu interfeysning barcha qoidalarini bajarish majburiyatini oladi."
      ],
      "pitfalls": "Interfeys metodlarini qayta yozayotganda 'public' so'zini qo'yish shart, aks holda ko'rinish darajasi pasayib ketadi.",
      "cw2Tip": "Barcha to'lov shlyuzlari (Payme, Click, Cash) bitta 'PaymentStrategy' interfeysini joriy qilishi shart."
    }
  },
  {
    "id": 26,
    "tier": 1,
    "tierName": "1-Bosqich: Interfeys va 'implements'",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "26. Yandex Scooter — 'IElectricScooterService' Interfeysini Joriy Qilish",
      "en": "26. Yandex Scooter — Interface & Implementation"
    },
    "scenario": {
      "uz": "Yandex Scooter da 'interface IElectricScooterService' e'lon qiling va unga 'void executeService();' metodini qo'shing. 'ElectricScooterServiceImpl' sinfida 'implements IElectricScooterService' qiling.",
      "en": "Declare contract 'interface IElectricScooterService' with 'void executeService();' implemented by 'ElectricScooterServiceImpl'."
    },
    "requirements": {
      "classes": [
        "IElectricScooterService",
        "ElectricScooterServiceImpl"
      ],
      "methods": [
        "executeService"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IElectricScooterService {\n    void executeService();\n}\n\nclass ElectricScooterServiceImpl implements IElectricScooterService {\n    @Override\n    public void executeService() {\n        System.out.println(\"Yandex Scooter: Xizmat bajarildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IElectricScooterService svc = new ElectricScooterServiceImpl();\n        svc.executeService();\n    }\n}",
    "detailedSolution": {
      "theory": "Interfeys — 100% abstrakt shartnoma. U 'NIMA qilinishi kerak'ligini aytadi, lekin 'QANDAY qilinishi'ni har bir sinf o'zi hal qiladi.",
      "theoryEn": "Interfaces establish a pure behavioral contract specifying WHAT operations must be supported without mandating HOW.",
      "cleanCode": "interface IElectricScooterService { void executeService(); }\nclass ElectricScooterServiceImpl implements IElectricScooterService { ... }",
      "breakdown": [
        "<code>implements IElectricScooterService</code>: Sinif ushbu interfeysning barcha qoidalarini bajarish majburiyatini oladi."
      ],
      "pitfalls": "Interfeys metodlarini qayta yozayotganda 'public' so'zini qo'yish shart, aks holda ko'rinish darajasi pasayib ketadi.",
      "cw2Tip": "Barcha to'lov shlyuzlari (Payme, Click, Cash) bitta 'PaymentStrategy' interfeysini joriy qilishi shart."
    }
  },
  {
    "id": 27,
    "tier": 1,
    "tierName": "1-Bosqich: Interfeys va 'implements'",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "27. Weather Network — 'IMeteoStationService' Interfeysini Joriy Qilish",
      "en": "27. Weather Network — Interface & Implementation"
    },
    "scenario": {
      "uz": "Weather Network da 'interface IMeteoStationService' e'lon qiling va unga 'void executeService();' metodini qo'shing. 'MeteoStationServiceImpl' sinfida 'implements IMeteoStationService' qiling.",
      "en": "Declare contract 'interface IMeteoStationService' with 'void executeService();' implemented by 'MeteoStationServiceImpl'."
    },
    "requirements": {
      "classes": [
        "IMeteoStationService",
        "MeteoStationServiceImpl"
      ],
      "methods": [
        "executeService"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IMeteoStationService {\n    void executeService();\n}\n\nclass MeteoStationServiceImpl implements IMeteoStationService {\n    @Override\n    public void executeService() {\n        System.out.println(\"Weather Network: Xizmat bajarildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IMeteoStationService svc = new MeteoStationServiceImpl();\n        svc.executeService();\n    }\n}",
    "detailedSolution": {
      "theory": "Interfeys — 100% abstrakt shartnoma. U 'NIMA qilinishi kerak'ligini aytadi, lekin 'QANDAY qilinishi'ni har bir sinf o'zi hal qiladi.",
      "theoryEn": "Interfaces establish a pure behavioral contract specifying WHAT operations must be supported without mandating HOW.",
      "cleanCode": "interface IMeteoStationService { void executeService(); }\nclass MeteoStationServiceImpl implements IMeteoStationService { ... }",
      "breakdown": [
        "<code>implements IMeteoStationService</code>: Sinif ushbu interfeysning barcha qoidalarini bajarish majburiyatini oladi."
      ],
      "pitfalls": "Interfeys metodlarini qayta yozayotganda 'public' so'zini qo'yish shart, aks holda ko'rinish darajasi pasayib ketadi.",
      "cw2Tip": "Barcha to'lov shlyuzlari (Payme, Click, Cash) bitta 'PaymentStrategy' interfeysini joriy qilishi shart."
    }
  },
  {
    "id": 28,
    "tier": 1,
    "tierName": "1-Bosqich: Interfeys va 'implements'",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "28. OpenMarket Auction — 'IAuctionLotService' Interfeysini Joriy Qilish",
      "en": "28. OpenMarket Auction — Interface & Implementation"
    },
    "scenario": {
      "uz": "OpenMarket Auction da 'interface IAuctionLotService' e'lon qiling va unga 'void executeService();' metodini qo'shing. 'AuctionLotServiceImpl' sinfida 'implements IAuctionLotService' qiling.",
      "en": "Declare contract 'interface IAuctionLotService' with 'void executeService();' implemented by 'AuctionLotServiceImpl'."
    },
    "requirements": {
      "classes": [
        "IAuctionLotService",
        "AuctionLotServiceImpl"
      ],
      "methods": [
        "executeService"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IAuctionLotService {\n    void executeService();\n}\n\nclass AuctionLotServiceImpl implements IAuctionLotService {\n    @Override\n    public void executeService() {\n        System.out.println(\"OpenMarket Auction: Xizmat bajarildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IAuctionLotService svc = new AuctionLotServiceImpl();\n        svc.executeService();\n    }\n}",
    "detailedSolution": {
      "theory": "Interfeys — 100% abstrakt shartnoma. U 'NIMA qilinishi kerak'ligini aytadi, lekin 'QANDAY qilinishi'ni har bir sinf o'zi hal qiladi.",
      "theoryEn": "Interfaces establish a pure behavioral contract specifying WHAT operations must be supported without mandating HOW.",
      "cleanCode": "interface IAuctionLotService { void executeService(); }\nclass AuctionLotServiceImpl implements IAuctionLotService { ... }",
      "breakdown": [
        "<code>implements IAuctionLotService</code>: Sinif ushbu interfeysning barcha qoidalarini bajarish majburiyatini oladi."
      ],
      "pitfalls": "Interfeys metodlarini qayta yozayotganda 'public' so'zini qo'yish shart, aks holda ko'rinish darajasi pasayib ketadi.",
      "cw2Tip": "Barcha to'lov shlyuzlari (Payme, Click, Cash) bitta 'PaymentStrategy' interfeysini joriy qilishi shart."
    }
  },
  {
    "id": 29,
    "tier": 1,
    "tierName": "1-Bosqich: Interfeys va 'implements'",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "29. Solar Energy Grid — 'ISolarInverterService' Interfeysini Joriy Qilish",
      "en": "29. Solar Energy Grid — Interface & Implementation"
    },
    "scenario": {
      "uz": "Solar Energy Grid da 'interface ISolarInverterService' e'lon qiling va unga 'void executeService();' metodini qo'shing. 'SolarInverterServiceImpl' sinfida 'implements ISolarInverterService' qiling.",
      "en": "Declare contract 'interface ISolarInverterService' with 'void executeService();' implemented by 'SolarInverterServiceImpl'."
    },
    "requirements": {
      "classes": [
        "ISolarInverterService",
        "SolarInverterServiceImpl"
      ],
      "methods": [
        "executeService"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface ISolarInverterService {\n    void executeService();\n}\n\nclass SolarInverterServiceImpl implements ISolarInverterService {\n    @Override\n    public void executeService() {\n        System.out.println(\"Solar Energy Grid: Xizmat bajarildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ISolarInverterService svc = new SolarInverterServiceImpl();\n        svc.executeService();\n    }\n}",
    "detailedSolution": {
      "theory": "Interfeys — 100% abstrakt shartnoma. U 'NIMA qilinishi kerak'ligini aytadi, lekin 'QANDAY qilinishi'ni har bir sinf o'zi hal qiladi.",
      "theoryEn": "Interfaces establish a pure behavioral contract specifying WHAT operations must be supported without mandating HOW.",
      "cleanCode": "interface ISolarInverterService { void executeService(); }\nclass SolarInverterServiceImpl implements ISolarInverterService { ... }",
      "breakdown": [
        "<code>implements ISolarInverterService</code>: Sinif ushbu interfeysning barcha qoidalarini bajarish majburiyatini oladi."
      ],
      "pitfalls": "Interfeys metodlarini qayta yozayotganda 'public' so'zini qo'yish shart, aks holda ko'rinish darajasi pasayib ketadi.",
      "cw2Tip": "Barcha to'lov shlyuzlari (Payme, Click, Cash) bitta 'PaymentStrategy' interfeysini joriy qilishi shart."
    }
  },
  {
    "id": 30,
    "tier": 1,
    "tierName": "1-Bosqich: Interfeys va 'implements'",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "30. O'zbekiston Temir Yo'llari — 'ITrainRouteService' Interfeysini Joriy Qilish",
      "en": "30. O'zbekiston Temir Yo'llari — Interface & Implementation"
    },
    "scenario": {
      "uz": "O'zbekiston Temir Yo'llari da 'interface ITrainRouteService' e'lon qiling va unga 'void executeService();' metodini qo'shing. 'TrainRouteServiceImpl' sinfida 'implements ITrainRouteService' qiling.",
      "en": "Declare contract 'interface ITrainRouteService' with 'void executeService();' implemented by 'TrainRouteServiceImpl'."
    },
    "requirements": {
      "classes": [
        "ITrainRouteService",
        "TrainRouteServiceImpl"
      ],
      "methods": [
        "executeService"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface ITrainRouteService {\n    void executeService();\n}\n\nclass TrainRouteServiceImpl implements ITrainRouteService {\n    @Override\n    public void executeService() {\n        System.out.println(\"O'zbekiston Temir Yo'llari: Xizmat bajarildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ITrainRouteService svc = new TrainRouteServiceImpl();\n        svc.executeService();\n    }\n}",
    "detailedSolution": {
      "theory": "Interfeys — 100% abstrakt shartnoma. U 'NIMA qilinishi kerak'ligini aytadi, lekin 'QANDAY qilinishi'ni har bir sinf o'zi hal qiladi.",
      "theoryEn": "Interfaces establish a pure behavioral contract specifying WHAT operations must be supported without mandating HOW.",
      "cleanCode": "interface ITrainRouteService { void executeService(); }\nclass TrainRouteServiceImpl implements ITrainRouteService { ... }",
      "breakdown": [
        "<code>implements ITrainRouteService</code>: Sinif ushbu interfeysning barcha qoidalarini bajarish majburiyatini oladi."
      ],
      "pitfalls": "Interfeys metodlarini qayta yozayotganda 'public' so'zini qo'yish shart, aks holda ko'rinish darajasi pasayib ketadi.",
      "cw2Tip": "Barcha to'lov shlyuzlari (Payme, Click, Cash) bitta 'PaymentStrategy' interfeysini joriy qilishi shart."
    }
  },
  {
    "id": 31,
    "tier": 2,
    "tierName": "2-Bosqich: 'default' va 'static' Metodlar",
    "sector": "Amaliyot",
    "title": {
      "uz": "31. Uzum Market — Interfeysda Boshlang'ich Tanali Metod",
      "en": "31. Uzum Market — Interface Default & Static Methods"
    },
    "scenario": {
      "uz": "Uzum Market da 'IProductHelper' interfeysi ichida 'default void printLog()' tayyor metodini yozing. 'ProductHelperImpl' sinfi uni to'g'ridan-to'g'ri chaqira olsin.",
      "en": "Add default method 'printLog()' inside 'IProductHelper' in Uzum Market."
    },
    "requirements": {
      "classes": [
        "IProductHelper",
        "ProductHelperImpl"
      ],
      "methods": [
        "printLog"
      ],
      "keywords": [
        "interface",
        "default",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IProductHelper {\n    default void printLog() {\n        System.out.println(\"Uzum Market: Tizim jurnali yozildi.\");\n    }\n}\n\nclass ProductHelperImpl implements IProductHelper {}\n\nclass Main {\n    public static void main(String[] args) {\n        IProductHelper h = new ProductHelperImpl();\n        h.printLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java 8 dan boshlab 'default' kalit so'zi orqali interfeyslar ichida tayyor kodli metodlar yaratish mumkin. Bu eski sinflarni buzmasdan interfeysni boyitishga xizmat qiladi.",
      "theoryEn": "Java 8 default methods enable interface evolution without breaking backwards compatibility with existing implementations.",
      "cleanCode": "default void printLog() { ... }",
      "breakdown": [
        "<code>default</code>: Avlod sinflar qayta yozmasa ham avtomatik ishlayveradi."
      ],
      "pitfalls": "'default' metodlar faqat interfeyslar ichida qo'llanilishi mumkin, oddiy sinflarda emas.",
      "cw2Tip": "Konsol ilovasida barcha bo'limlar uchun umumiy 'default void showHeader()' metodini interfeysda berish juda qulay."
    }
  },
  {
    "id": 32,
    "tier": 2,
    "tierName": "2-Bosqich: 'default' va 'static' Metodlar",
    "sector": "Amaliyot",
    "title": {
      "uz": "32. Payme Wallet — Interfeysda Boshlang'ich Tanali Metod",
      "en": "32. Payme Wallet — Interface Default & Static Methods"
    },
    "scenario": {
      "uz": "Payme Wallet da 'IWalletUserHelper' interfeysi ichida 'default void printLog()' tayyor metodini yozing. 'WalletUserHelperImpl' sinfi uni to'g'ridan-to'g'ri chaqira olsin.",
      "en": "Add default method 'printLog()' inside 'IWalletUserHelper' in Payme Wallet."
    },
    "requirements": {
      "classes": [
        "IWalletUserHelper",
        "WalletUserHelperImpl"
      ],
      "methods": [
        "printLog"
      ],
      "keywords": [
        "interface",
        "default",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IWalletUserHelper {\n    default void printLog() {\n        System.out.println(\"Payme Wallet: Tizim jurnali yozildi.\");\n    }\n}\n\nclass WalletUserHelperImpl implements IWalletUserHelper {}\n\nclass Main {\n    public static void main(String[] args) {\n        IWalletUserHelper h = new WalletUserHelperImpl();\n        h.printLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java 8 dan boshlab 'default' kalit so'zi orqali interfeyslar ichida tayyor kodli metodlar yaratish mumkin. Bu eski sinflarni buzmasdan interfeysni boyitishga xizmat qiladi.",
      "theoryEn": "Java 8 default methods enable interface evolution without breaking backwards compatibility with existing implementations.",
      "cleanCode": "default void printLog() { ... }",
      "breakdown": [
        "<code>default</code>: Avlod sinflar qayta yozmasa ham avtomatik ishlayveradi."
      ],
      "pitfalls": "'default' metodlar faqat interfeyslar ichida qo'llanilishi mumkin, oddiy sinflarda emas.",
      "cw2Tip": "Konsol ilovasida barcha bo'limlar uchun umumiy 'default void showHeader()' metodini interfeysda berish juda qulay."
    }
  },
  {
    "id": 33,
    "tier": 2,
    "tierName": "2-Bosqich: 'default' va 'static' Metodlar",
    "sector": "Amaliyot",
    "title": {
      "uz": "33. Yandex Go — Interfeysda Boshlang'ich Tanali Metod",
      "en": "33. Yandex Go — Interface Default & Static Methods"
    },
    "scenario": {
      "uz": "Yandex Go da 'ITaxiRideHelper' interfeysi ichida 'default void printLog()' tayyor metodini yozing. 'TaxiRideHelperImpl' sinfi uni to'g'ridan-to'g'ri chaqira olsin.",
      "en": "Add default method 'printLog()' inside 'ITaxiRideHelper' in Yandex Go."
    },
    "requirements": {
      "classes": [
        "ITaxiRideHelper",
        "TaxiRideHelperImpl"
      ],
      "methods": [
        "printLog"
      ],
      "keywords": [
        "interface",
        "default",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface ITaxiRideHelper {\n    default void printLog() {\n        System.out.println(\"Yandex Go: Tizim jurnali yozildi.\");\n    }\n}\n\nclass TaxiRideHelperImpl implements ITaxiRideHelper {}\n\nclass Main {\n    public static void main(String[] args) {\n        ITaxiRideHelper h = new TaxiRideHelperImpl();\n        h.printLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java 8 dan boshlab 'default' kalit so'zi orqali interfeyslar ichida tayyor kodli metodlar yaratish mumkin. Bu eski sinflarni buzmasdan interfeysni boyitishga xizmat qiladi.",
      "theoryEn": "Java 8 default methods enable interface evolution without breaking backwards compatibility with existing implementations.",
      "cleanCode": "default void printLog() { ... }",
      "breakdown": [
        "<code>default</code>: Avlod sinflar qayta yozmasa ham avtomatik ishlayveradi."
      ],
      "pitfalls": "'default' metodlar faqat interfeyslar ichida qo'llanilishi mumkin, oddiy sinflarda emas.",
      "cw2Tip": "Konsol ilovasida barcha bo'limlar uchun umumiy 'default void showHeader()' metodini interfeysda berish juda qulay."
    }
  },
  {
    "id": 34,
    "tier": 2,
    "tierName": "2-Bosqich: 'default' va 'static' Metodlar",
    "sector": "Amaliyot",
    "title": {
      "uz": "34. Korzinka Go — Interfeysda Boshlang'ich Tanali Metod",
      "en": "34. Korzinka Go — Interface Default & Static Methods"
    },
    "scenario": {
      "uz": "Korzinka Go da 'ILoyaltyCardHelper' interfeysi ichida 'default void printLog()' tayyor metodini yozing. 'LoyaltyCardHelperImpl' sinfi uni to'g'ridan-to'g'ri chaqira olsin.",
      "en": "Add default method 'printLog()' inside 'ILoyaltyCardHelper' in Korzinka Go."
    },
    "requirements": {
      "classes": [
        "ILoyaltyCardHelper",
        "LoyaltyCardHelperImpl"
      ],
      "methods": [
        "printLog"
      ],
      "keywords": [
        "interface",
        "default",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface ILoyaltyCardHelper {\n    default void printLog() {\n        System.out.println(\"Korzinka Go: Tizim jurnali yozildi.\");\n    }\n}\n\nclass LoyaltyCardHelperImpl implements ILoyaltyCardHelper {}\n\nclass Main {\n    public static void main(String[] args) {\n        ILoyaltyCardHelper h = new LoyaltyCardHelperImpl();\n        h.printLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java 8 dan boshlab 'default' kalit so'zi orqali interfeyslar ichida tayyor kodli metodlar yaratish mumkin. Bu eski sinflarni buzmasdan interfeysni boyitishga xizmat qiladi.",
      "theoryEn": "Java 8 default methods enable interface evolution without breaking backwards compatibility with existing implementations.",
      "cleanCode": "default void printLog() { ... }",
      "breakdown": [
        "<code>default</code>: Avlod sinflar qayta yozmasa ham avtomatik ishlayveradi."
      ],
      "pitfalls": "'default' metodlar faqat interfeyslar ichida qo'llanilishi mumkin, oddiy sinflarda emas.",
      "cw2Tip": "Konsol ilovasida barcha bo'limlar uchun umumiy 'default void showHeader()' metodini interfeysda berish juda qulay."
    }
  },
  {
    "id": 35,
    "tier": 2,
    "tierName": "2-Bosqich: 'default' va 'static' Metodlar",
    "sector": "Amaliyot",
    "title": {
      "uz": "35. WIUT Portal — Interfeysda Boshlang'ich Tanali Metod",
      "en": "35. WIUT Portal — Interface Default & Static Methods"
    },
    "scenario": {
      "uz": "WIUT Portal da 'IStudentHelper' interfeysi ichida 'default void printLog()' tayyor metodini yozing. 'StudentHelperImpl' sinfi uni to'g'ridan-to'g'ri chaqira olsin.",
      "en": "Add default method 'printLog()' inside 'IStudentHelper' in WIUT Portal."
    },
    "requirements": {
      "classes": [
        "IStudentHelper",
        "StudentHelperImpl"
      ],
      "methods": [
        "printLog"
      ],
      "keywords": [
        "interface",
        "default",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IStudentHelper {\n    default void printLog() {\n        System.out.println(\"WIUT Portal: Tizim jurnali yozildi.\");\n    }\n}\n\nclass StudentHelperImpl implements IStudentHelper {}\n\nclass Main {\n    public static void main(String[] args) {\n        IStudentHelper h = new StudentHelperImpl();\n        h.printLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java 8 dan boshlab 'default' kalit so'zi orqali interfeyslar ichida tayyor kodli metodlar yaratish mumkin. Bu eski sinflarni buzmasdan interfeysni boyitishga xizmat qiladi.",
      "theoryEn": "Java 8 default methods enable interface evolution without breaking backwards compatibility with existing implementations.",
      "cleanCode": "default void printLog() { ... }",
      "breakdown": [
        "<code>default</code>: Avlod sinflar qayta yozmasa ham avtomatik ishlayveradi."
      ],
      "pitfalls": "'default' metodlar faqat interfeyslar ichida qo'llanilishi mumkin, oddiy sinflarda emas.",
      "cw2Tip": "Konsol ilovasida barcha bo'limlar uchun umumiy 'default void showHeader()' metodini interfeysda berish juda qulay."
    }
  },
  {
    "id": 36,
    "tier": 2,
    "tierName": "2-Bosqich: 'default' va 'static' Metodlar",
    "sector": "Amaliyot",
    "title": {
      "uz": "36. Click Pay — Interfeysda Boshlang'ich Tanali Metod",
      "en": "36. Click Pay — Interface Default & Static Methods"
    },
    "scenario": {
      "uz": "Click Pay da 'IPaymentTxnHelper' interfeysi ichida 'default void printLog()' tayyor metodini yozing. 'PaymentTxnHelperImpl' sinfi uni to'g'ridan-to'g'ri chaqira olsin.",
      "en": "Add default method 'printLog()' inside 'IPaymentTxnHelper' in Click Pay."
    },
    "requirements": {
      "classes": [
        "IPaymentTxnHelper",
        "PaymentTxnHelperImpl"
      ],
      "methods": [
        "printLog"
      ],
      "keywords": [
        "interface",
        "default",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IPaymentTxnHelper {\n    default void printLog() {\n        System.out.println(\"Click Pay: Tizim jurnali yozildi.\");\n    }\n}\n\nclass PaymentTxnHelperImpl implements IPaymentTxnHelper {}\n\nclass Main {\n    public static void main(String[] args) {\n        IPaymentTxnHelper h = new PaymentTxnHelperImpl();\n        h.printLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java 8 dan boshlab 'default' kalit so'zi orqali interfeyslar ichida tayyor kodli metodlar yaratish mumkin. Bu eski sinflarni buzmasdan interfeysni boyitishga xizmat qiladi.",
      "theoryEn": "Java 8 default methods enable interface evolution without breaking backwards compatibility with existing implementations.",
      "cleanCode": "default void printLog() { ... }",
      "breakdown": [
        "<code>default</code>: Avlod sinflar qayta yozmasa ham avtomatik ishlayveradi."
      ],
      "pitfalls": "'default' metodlar faqat interfeyslar ichida qo'llanilishi mumkin, oddiy sinflarda emas.",
      "cw2Tip": "Konsol ilovasida barcha bo'limlar uchun umumiy 'default void showHeader()' metodini interfeysda berish juda qulay."
    }
  },
  {
    "id": 37,
    "tier": 2,
    "tierName": "2-Bosqich: 'default' va 'static' Metodlar",
    "sector": "Amaliyot",
    "title": {
      "uz": "37. Telegram Bot — Interfeysda Boshlang'ich Tanali Metod",
      "en": "37. Telegram Bot — Interface Default & Static Methods"
    },
    "scenario": {
      "uz": "Telegram Bot da 'IBotMessageHelper' interfeysi ichida 'default void printLog()' tayyor metodini yozing. 'BotMessageHelperImpl' sinfi uni to'g'ridan-to'g'ri chaqira olsin.",
      "en": "Add default method 'printLog()' inside 'IBotMessageHelper' in Telegram Bot."
    },
    "requirements": {
      "classes": [
        "IBotMessageHelper",
        "BotMessageHelperImpl"
      ],
      "methods": [
        "printLog"
      ],
      "keywords": [
        "interface",
        "default",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IBotMessageHelper {\n    default void printLog() {\n        System.out.println(\"Telegram Bot: Tizim jurnali yozildi.\");\n    }\n}\n\nclass BotMessageHelperImpl implements IBotMessageHelper {}\n\nclass Main {\n    public static void main(String[] args) {\n        IBotMessageHelper h = new BotMessageHelperImpl();\n        h.printLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java 8 dan boshlab 'default' kalit so'zi orqali interfeyslar ichida tayyor kodli metodlar yaratish mumkin. Bu eski sinflarni buzmasdan interfeysni boyitishga xizmat qiladi.",
      "theoryEn": "Java 8 default methods enable interface evolution without breaking backwards compatibility with existing implementations.",
      "cleanCode": "default void printLog() { ... }",
      "breakdown": [
        "<code>default</code>: Avlod sinflar qayta yozmasa ham avtomatik ishlayveradi."
      ],
      "pitfalls": "'default' metodlar faqat interfeyslar ichida qo'llanilishi mumkin, oddiy sinflarda emas.",
      "cw2Tip": "Konsol ilovasida barcha bo'limlar uchun umumiy 'default void showHeader()' metodini interfeysda berish juda qulay."
    }
  },
  {
    "id": 38,
    "tier": 2,
    "tierName": "2-Bosqich: 'default' va 'static' Metodlar",
    "sector": "Amaliyot",
    "title": {
      "uz": "38. UzAirways — Interfeysda Boshlang'ich Tanali Metod",
      "en": "38. UzAirways — Interface Default & Static Methods"
    },
    "scenario": {
      "uz": "UzAirways da 'IFlightTicketHelper' interfeysi ichida 'default void printLog()' tayyor metodini yozing. 'FlightTicketHelperImpl' sinfi uni to'g'ridan-to'g'ri chaqira olsin.",
      "en": "Add default method 'printLog()' inside 'IFlightTicketHelper' in UzAirways."
    },
    "requirements": {
      "classes": [
        "IFlightTicketHelper",
        "FlightTicketHelperImpl"
      ],
      "methods": [
        "printLog"
      ],
      "keywords": [
        "interface",
        "default",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IFlightTicketHelper {\n    default void printLog() {\n        System.out.println(\"UzAirways: Tizim jurnali yozildi.\");\n    }\n}\n\nclass FlightTicketHelperImpl implements IFlightTicketHelper {}\n\nclass Main {\n    public static void main(String[] args) {\n        IFlightTicketHelper h = new FlightTicketHelperImpl();\n        h.printLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java 8 dan boshlab 'default' kalit so'zi orqali interfeyslar ichida tayyor kodli metodlar yaratish mumkin. Bu eski sinflarni buzmasdan interfeysni boyitishga xizmat qiladi.",
      "theoryEn": "Java 8 default methods enable interface evolution without breaking backwards compatibility with existing implementations.",
      "cleanCode": "default void printLog() { ... }",
      "breakdown": [
        "<code>default</code>: Avlod sinflar qayta yozmasa ham avtomatik ishlayveradi."
      ],
      "pitfalls": "'default' metodlar faqat interfeyslar ichida qo'llanilishi mumkin, oddiy sinflarda emas.",
      "cw2Tip": "Konsol ilovasida barcha bo'limlar uchun umumiy 'default void showHeader()' metodini interfeysda berish juda qulay."
    }
  },
  {
    "id": 39,
    "tier": 2,
    "tierName": "2-Bosqich: 'default' va 'static' Metodlar",
    "sector": "Amaliyot",
    "title": {
      "uz": "39. IT Park Academy — Interfeysda Boshlang'ich Tanali Metod",
      "en": "39. IT Park Academy — Interface Default & Static Methods"
    },
    "scenario": {
      "uz": "IT Park Academy da 'IBootcampCourseHelper' interfeysi ichida 'default void printLog()' tayyor metodini yozing. 'BootcampCourseHelperImpl' sinfi uni to'g'ridan-to'g'ri chaqira olsin.",
      "en": "Add default method 'printLog()' inside 'IBootcampCourseHelper' in IT Park Academy."
    },
    "requirements": {
      "classes": [
        "IBootcampCourseHelper",
        "BootcampCourseHelperImpl"
      ],
      "methods": [
        "printLog"
      ],
      "keywords": [
        "interface",
        "default",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IBootcampCourseHelper {\n    default void printLog() {\n        System.out.println(\"IT Park Academy: Tizim jurnali yozildi.\");\n    }\n}\n\nclass BootcampCourseHelperImpl implements IBootcampCourseHelper {}\n\nclass Main {\n    public static void main(String[] args) {\n        IBootcampCourseHelper h = new BootcampCourseHelperImpl();\n        h.printLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java 8 dan boshlab 'default' kalit so'zi orqali interfeyslar ichida tayyor kodli metodlar yaratish mumkin. Bu eski sinflarni buzmasdan interfeysni boyitishga xizmat qiladi.",
      "theoryEn": "Java 8 default methods enable interface evolution without breaking backwards compatibility with existing implementations.",
      "cleanCode": "default void printLog() { ... }",
      "breakdown": [
        "<code>default</code>: Avlod sinflar qayta yozmasa ham avtomatik ishlayveradi."
      ],
      "pitfalls": "'default' metodlar faqat interfeyslar ichida qo'llanilishi mumkin, oddiy sinflarda emas.",
      "cw2Tip": "Konsol ilovasida barcha bo'limlar uchun umumiy 'default void showHeader()' metodini interfeysda berish juda qulay."
    }
  },
  {
    "id": 40,
    "tier": 2,
    "tierName": "2-Bosqich: 'default' va 'static' Metodlar",
    "sector": "Amaliyot",
    "title": {
      "uz": "40. Anorbank — Interfeysda Boshlang'ich Tanali Metod",
      "en": "40. Anorbank — Interface Default & Static Methods"
    },
    "scenario": {
      "uz": "Anorbank da 'IDebitCardHelper' interfeysi ichida 'default void printLog()' tayyor metodini yozing. 'DebitCardHelperImpl' sinfi uni to'g'ridan-to'g'ri chaqira olsin.",
      "en": "Add default method 'printLog()' inside 'IDebitCardHelper' in Anorbank."
    },
    "requirements": {
      "classes": [
        "IDebitCardHelper",
        "DebitCardHelperImpl"
      ],
      "methods": [
        "printLog"
      ],
      "keywords": [
        "interface",
        "default",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IDebitCardHelper {\n    default void printLog() {\n        System.out.println(\"Anorbank: Tizim jurnali yozildi.\");\n    }\n}\n\nclass DebitCardHelperImpl implements IDebitCardHelper {}\n\nclass Main {\n    public static void main(String[] args) {\n        IDebitCardHelper h = new DebitCardHelperImpl();\n        h.printLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java 8 dan boshlab 'default' kalit so'zi orqali interfeyslar ichida tayyor kodli metodlar yaratish mumkin. Bu eski sinflarni buzmasdan interfeysni boyitishga xizmat qiladi.",
      "theoryEn": "Java 8 default methods enable interface evolution without breaking backwards compatibility with existing implementations.",
      "cleanCode": "default void printLog() { ... }",
      "breakdown": [
        "<code>default</code>: Avlod sinflar qayta yozmasa ham avtomatik ishlayveradi."
      ],
      "pitfalls": "'default' metodlar faqat interfeyslar ichida qo'llanilishi mumkin, oddiy sinflarda emas.",
      "cw2Tip": "Konsol ilovasida barcha bo'limlar uchun umumiy 'default void showHeader()' metodini interfeysda berish juda qulay."
    }
  },
  {
    "id": 41,
    "tier": 2,
    "tierName": "2-Bosqich: 'default' va 'static' Metodlar",
    "sector": "Amaliyot",
    "title": {
      "uz": "41. Oson Apteka — Interfeysda Boshlang'ich Tanali Metod",
      "en": "41. Oson Apteka — Interface Default & Static Methods"
    },
    "scenario": {
      "uz": "Oson Apteka da 'IMedicineHelper' interfeysi ichida 'default void printLog()' tayyor metodini yozing. 'MedicineHelperImpl' sinfi uni to'g'ridan-to'g'ri chaqira olsin.",
      "en": "Add default method 'printLog()' inside 'IMedicineHelper' in Oson Apteka."
    },
    "requirements": {
      "classes": [
        "IMedicineHelper",
        "MedicineHelperImpl"
      ],
      "methods": [
        "printLog"
      ],
      "keywords": [
        "interface",
        "default",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IMedicineHelper {\n    default void printLog() {\n        System.out.println(\"Oson Apteka: Tizim jurnali yozildi.\");\n    }\n}\n\nclass MedicineHelperImpl implements IMedicineHelper {}\n\nclass Main {\n    public static void main(String[] args) {\n        IMedicineHelper h = new MedicineHelperImpl();\n        h.printLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java 8 dan boshlab 'default' kalit so'zi orqali interfeyslar ichida tayyor kodli metodlar yaratish mumkin. Bu eski sinflarni buzmasdan interfeysni boyitishga xizmat qiladi.",
      "theoryEn": "Java 8 default methods enable interface evolution without breaking backwards compatibility with existing implementations.",
      "cleanCode": "default void printLog() { ... }",
      "breakdown": [
        "<code>default</code>: Avlod sinflar qayta yozmasa ham avtomatik ishlayveradi."
      ],
      "pitfalls": "'default' metodlar faqat interfeyslar ichida qo'llanilishi mumkin, oddiy sinflarda emas.",
      "cw2Tip": "Konsol ilovasida barcha bo'limlar uchun umumiy 'default void showHeader()' metodini interfeysda berish juda qulay."
    }
  },
  {
    "id": 42,
    "tier": 2,
    "tierName": "2-Bosqich: 'default' va 'static' Metodlar",
    "sector": "Amaliyot",
    "title": {
      "uz": "42. Evos FastFood — Interfeysda Boshlang'ich Tanali Metod",
      "en": "42. Evos FastFood — Interface Default & Static Methods"
    },
    "scenario": {
      "uz": "Evos FastFood da 'IFoodOrderHelper' interfeysi ichida 'default void printLog()' tayyor metodini yozing. 'FoodOrderHelperImpl' sinfi uni to'g'ridan-to'g'ri chaqira olsin.",
      "en": "Add default method 'printLog()' inside 'IFoodOrderHelper' in Evos FastFood."
    },
    "requirements": {
      "classes": [
        "IFoodOrderHelper",
        "FoodOrderHelperImpl"
      ],
      "methods": [
        "printLog"
      ],
      "keywords": [
        "interface",
        "default",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IFoodOrderHelper {\n    default void printLog() {\n        System.out.println(\"Evos FastFood: Tizim jurnali yozildi.\");\n    }\n}\n\nclass FoodOrderHelperImpl implements IFoodOrderHelper {}\n\nclass Main {\n    public static void main(String[] args) {\n        IFoodOrderHelper h = new FoodOrderHelperImpl();\n        h.printLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java 8 dan boshlab 'default' kalit so'zi orqali interfeyslar ichida tayyor kodli metodlar yaratish mumkin. Bu eski sinflarni buzmasdan interfeysni boyitishga xizmat qiladi.",
      "theoryEn": "Java 8 default methods enable interface evolution without breaking backwards compatibility with existing implementations.",
      "cleanCode": "default void printLog() { ... }",
      "breakdown": [
        "<code>default</code>: Avlod sinflar qayta yozmasa ham avtomatik ishlayveradi."
      ],
      "pitfalls": "'default' metodlar faqat interfeyslar ichida qo'llanilishi mumkin, oddiy sinflarda emas.",
      "cw2Tip": "Konsol ilovasida barcha bo'limlar uchun umumiy 'default void showHeader()' metodini interfeysda berish juda qulay."
    }
  },
  {
    "id": 43,
    "tier": 2,
    "tierName": "2-Bosqich: 'default' va 'static' Metodlar",
    "sector": "Amaliyot",
    "title": {
      "uz": "43. Bellissimo Pizza — Interfeysda Boshlang'ich Tanali Metod",
      "en": "43. Bellissimo Pizza — Interface Default & Static Methods"
    },
    "scenario": {
      "uz": "Bellissimo Pizza da 'IPizzaOrderHelper' interfeysi ichida 'default void printLog()' tayyor metodini yozing. 'PizzaOrderHelperImpl' sinfi uni to'g'ridan-to'g'ri chaqira olsin.",
      "en": "Add default method 'printLog()' inside 'IPizzaOrderHelper' in Bellissimo Pizza."
    },
    "requirements": {
      "classes": [
        "IPizzaOrderHelper",
        "PizzaOrderHelperImpl"
      ],
      "methods": [
        "printLog"
      ],
      "keywords": [
        "interface",
        "default",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IPizzaOrderHelper {\n    default void printLog() {\n        System.out.println(\"Bellissimo Pizza: Tizim jurnali yozildi.\");\n    }\n}\n\nclass PizzaOrderHelperImpl implements IPizzaOrderHelper {}\n\nclass Main {\n    public static void main(String[] args) {\n        IPizzaOrderHelper h = new PizzaOrderHelperImpl();\n        h.printLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java 8 dan boshlab 'default' kalit so'zi orqali interfeyslar ichida tayyor kodli metodlar yaratish mumkin. Bu eski sinflarni buzmasdan interfeysni boyitishga xizmat qiladi.",
      "theoryEn": "Java 8 default methods enable interface evolution without breaking backwards compatibility with existing implementations.",
      "cleanCode": "default void printLog() { ... }",
      "breakdown": [
        "<code>default</code>: Avlod sinflar qayta yozmasa ham avtomatik ishlayveradi."
      ],
      "pitfalls": "'default' metodlar faqat interfeyslar ichida qo'llanilishi mumkin, oddiy sinflarda emas.",
      "cw2Tip": "Konsol ilovasida barcha bo'limlar uchun umumiy 'default void showHeader()' metodini interfeysda berish juda qulay."
    }
  },
  {
    "id": 44,
    "tier": 2,
    "tierName": "2-Bosqich: 'default' va 'static' Metodlar",
    "sector": "Amaliyot",
    "title": {
      "uz": "44. Milliy TV — Interfeysda Boshlang'ich Tanali Metod",
      "en": "44. Milliy TV — Interface Default & Static Methods"
    },
    "scenario": {
      "uz": "Milliy TV da 'IBroadcastShowHelper' interfeysi ichida 'default void printLog()' tayyor metodini yozing. 'BroadcastShowHelperImpl' sinfi uni to'g'ridan-to'g'ri chaqira olsin.",
      "en": "Add default method 'printLog()' inside 'IBroadcastShowHelper' in Milliy TV."
    },
    "requirements": {
      "classes": [
        "IBroadcastShowHelper",
        "BroadcastShowHelperImpl"
      ],
      "methods": [
        "printLog"
      ],
      "keywords": [
        "interface",
        "default",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IBroadcastShowHelper {\n    default void printLog() {\n        System.out.println(\"Milliy TV: Tizim jurnali yozildi.\");\n    }\n}\n\nclass BroadcastShowHelperImpl implements IBroadcastShowHelper {}\n\nclass Main {\n    public static void main(String[] args) {\n        IBroadcastShowHelper h = new BroadcastShowHelperImpl();\n        h.printLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java 8 dan boshlab 'default' kalit so'zi orqali interfeyslar ichida tayyor kodli metodlar yaratish mumkin. Bu eski sinflarni buzmasdan interfeysni boyitishga xizmat qiladi.",
      "theoryEn": "Java 8 default methods enable interface evolution without breaking backwards compatibility with existing implementations.",
      "cleanCode": "default void printLog() { ... }",
      "breakdown": [
        "<code>default</code>: Avlod sinflar qayta yozmasa ham avtomatik ishlayveradi."
      ],
      "pitfalls": "'default' metodlar faqat interfeyslar ichida qo'llanilishi mumkin, oddiy sinflarda emas.",
      "cw2Tip": "Konsol ilovasida barcha bo'limlar uchun umumiy 'default void showHeader()' metodini interfeysda berish juda qulay."
    }
  },
  {
    "id": 45,
    "tier": 2,
    "tierName": "2-Bosqich: 'default' va 'static' Metodlar",
    "sector": "Amaliyot",
    "title": {
      "uz": "45. Spotify Sound — Interfeysda Boshlang'ich Tanali Metod",
      "en": "45. Spotify Sound — Interface Default & Static Methods"
    },
    "scenario": {
      "uz": "Spotify Sound da 'IAudioTrackHelper' interfeysi ichida 'default void printLog()' tayyor metodini yozing. 'AudioTrackHelperImpl' sinfi uni to'g'ridan-to'g'ri chaqira olsin.",
      "en": "Add default method 'printLog()' inside 'IAudioTrackHelper' in Spotify Sound."
    },
    "requirements": {
      "classes": [
        "IAudioTrackHelper",
        "AudioTrackHelperImpl"
      ],
      "methods": [
        "printLog"
      ],
      "keywords": [
        "interface",
        "default",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IAudioTrackHelper {\n    default void printLog() {\n        System.out.println(\"Spotify Sound: Tizim jurnali yozildi.\");\n    }\n}\n\nclass AudioTrackHelperImpl implements IAudioTrackHelper {}\n\nclass Main {\n    public static void main(String[] args) {\n        IAudioTrackHelper h = new AudioTrackHelperImpl();\n        h.printLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java 8 dan boshlab 'default' kalit so'zi orqali interfeyslar ichida tayyor kodli metodlar yaratish mumkin. Bu eski sinflarni buzmasdan interfeysni boyitishga xizmat qiladi.",
      "theoryEn": "Java 8 default methods enable interface evolution without breaking backwards compatibility with existing implementations.",
      "cleanCode": "default void printLog() { ... }",
      "breakdown": [
        "<code>default</code>: Avlod sinflar qayta yozmasa ham avtomatik ishlayveradi."
      ],
      "pitfalls": "'default' metodlar faqat interfeyslar ichida qo'llanilishi mumkin, oddiy sinflarda emas.",
      "cw2Tip": "Konsol ilovasida barcha bo'limlar uchun umumiy 'default void showHeader()' metodini interfeysda berish juda qulay."
    }
  },
  {
    "id": 46,
    "tier": 2,
    "tierName": "2-Bosqich: 'default' va 'static' Metodlar",
    "sector": "Amaliyot",
    "title": {
      "uz": "46. Smart Thermostat — Interfeysda Boshlang'ich Tanali Metod",
      "en": "46. Smart Thermostat — Interface Default & Static Methods"
    },
    "scenario": {
      "uz": "Smart Thermostat da 'IThermostatHelper' interfeysi ichida 'default void printLog()' tayyor metodini yozing. 'ThermostatHelperImpl' sinfi uni to'g'ridan-to'g'ri chaqira olsin.",
      "en": "Add default method 'printLog()' inside 'IThermostatHelper' in Smart Thermostat."
    },
    "requirements": {
      "classes": [
        "IThermostatHelper",
        "ThermostatHelperImpl"
      ],
      "methods": [
        "printLog"
      ],
      "keywords": [
        "interface",
        "default",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IThermostatHelper {\n    default void printLog() {\n        System.out.println(\"Smart Thermostat: Tizim jurnali yozildi.\");\n    }\n}\n\nclass ThermostatHelperImpl implements IThermostatHelper {}\n\nclass Main {\n    public static void main(String[] args) {\n        IThermostatHelper h = new ThermostatHelperImpl();\n        h.printLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java 8 dan boshlab 'default' kalit so'zi orqali interfeyslar ichida tayyor kodli metodlar yaratish mumkin. Bu eski sinflarni buzmasdan interfeysni boyitishga xizmat qiladi.",
      "theoryEn": "Java 8 default methods enable interface evolution without breaking backwards compatibility with existing implementations.",
      "cleanCode": "default void printLog() { ... }",
      "breakdown": [
        "<code>default</code>: Avlod sinflar qayta yozmasa ham avtomatik ishlayveradi."
      ],
      "pitfalls": "'default' metodlar faqat interfeyslar ichida qo'llanilishi mumkin, oddiy sinflarda emas.",
      "cw2Tip": "Konsol ilovasida barcha bo'limlar uchun umumiy 'default void showHeader()' metodini interfeysda berish juda qulay."
    }
  },
  {
    "id": 47,
    "tier": 2,
    "tierName": "2-Bosqich: 'default' va 'static' Metodlar",
    "sector": "Amaliyot",
    "title": {
      "uz": "47. Drone Delivery — Interfeysda Boshlang'ich Tanali Metod",
      "en": "47. Drone Delivery — Interface Default & Static Methods"
    },
    "scenario": {
      "uz": "Drone Delivery da 'IDeliveryDroneHelper' interfeysi ichida 'default void printLog()' tayyor metodini yozing. 'DeliveryDroneHelperImpl' sinfi uni to'g'ridan-to'g'ri chaqira olsin.",
      "en": "Add default method 'printLog()' inside 'IDeliveryDroneHelper' in Drone Delivery."
    },
    "requirements": {
      "classes": [
        "IDeliveryDroneHelper",
        "DeliveryDroneHelperImpl"
      ],
      "methods": [
        "printLog"
      ],
      "keywords": [
        "interface",
        "default",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IDeliveryDroneHelper {\n    default void printLog() {\n        System.out.println(\"Drone Delivery: Tizim jurnali yozildi.\");\n    }\n}\n\nclass DeliveryDroneHelperImpl implements IDeliveryDroneHelper {}\n\nclass Main {\n    public static void main(String[] args) {\n        IDeliveryDroneHelper h = new DeliveryDroneHelperImpl();\n        h.printLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java 8 dan boshlab 'default' kalit so'zi orqali interfeyslar ichida tayyor kodli metodlar yaratish mumkin. Bu eski sinflarni buzmasdan interfeysni boyitishga xizmat qiladi.",
      "theoryEn": "Java 8 default methods enable interface evolution without breaking backwards compatibility with existing implementations.",
      "cleanCode": "default void printLog() { ... }",
      "breakdown": [
        "<code>default</code>: Avlod sinflar qayta yozmasa ham avtomatik ishlayveradi."
      ],
      "pitfalls": "'default' metodlar faqat interfeyslar ichida qo'llanilishi mumkin, oddiy sinflarda emas.",
      "cw2Tip": "Konsol ilovasida barcha bo'limlar uchun umumiy 'default void showHeader()' metodini interfeysda berish juda qulay."
    }
  },
  {
    "id": 48,
    "tier": 2,
    "tierName": "2-Bosqich: 'default' va 'static' Metodlar",
    "sector": "Amaliyot",
    "title": {
      "uz": "48. Smart Warehouse — Interfeysda Boshlang'ich Tanali Metod",
      "en": "48. Smart Warehouse — Interface Default & Static Methods"
    },
    "scenario": {
      "uz": "Smart Warehouse da 'IStorageBayHelper' interfeysi ichida 'default void printLog()' tayyor metodini yozing. 'StorageBayHelperImpl' sinfi uni to'g'ridan-to'g'ri chaqira olsin.",
      "en": "Add default method 'printLog()' inside 'IStorageBayHelper' in Smart Warehouse."
    },
    "requirements": {
      "classes": [
        "IStorageBayHelper",
        "StorageBayHelperImpl"
      ],
      "methods": [
        "printLog"
      ],
      "keywords": [
        "interface",
        "default",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IStorageBayHelper {\n    default void printLog() {\n        System.out.println(\"Smart Warehouse: Tizim jurnali yozildi.\");\n    }\n}\n\nclass StorageBayHelperImpl implements IStorageBayHelper {}\n\nclass Main {\n    public static void main(String[] args) {\n        IStorageBayHelper h = new StorageBayHelperImpl();\n        h.printLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java 8 dan boshlab 'default' kalit so'zi orqali interfeyslar ichida tayyor kodli metodlar yaratish mumkin. Bu eski sinflarni buzmasdan interfeysni boyitishga xizmat qiladi.",
      "theoryEn": "Java 8 default methods enable interface evolution without breaking backwards compatibility with existing implementations.",
      "cleanCode": "default void printLog() { ... }",
      "breakdown": [
        "<code>default</code>: Avlod sinflar qayta yozmasa ham avtomatik ishlayveradi."
      ],
      "pitfalls": "'default' metodlar faqat interfeyslar ichida qo'llanilishi mumkin, oddiy sinflarda emas.",
      "cw2Tip": "Konsol ilovasida barcha bo'limlar uchun umumiy 'default void showHeader()' metodini interfeysda berish juda qulay."
    }
  },
  {
    "id": 49,
    "tier": 2,
    "tierName": "2-Bosqich: 'default' va 'static' Metodlar",
    "sector": "Amaliyot",
    "title": {
      "uz": "49. Crypto Wallet — Interfeysda Boshlang'ich Tanali Metod",
      "en": "49. Crypto Wallet — Interface Default & Static Methods"
    },
    "scenario": {
      "uz": "Crypto Wallet da 'ICryptoAssetHelper' interfeysi ichida 'default void printLog()' tayyor metodini yozing. 'CryptoAssetHelperImpl' sinfi uni to'g'ridan-to'g'ri chaqira olsin.",
      "en": "Add default method 'printLog()' inside 'ICryptoAssetHelper' in Crypto Wallet."
    },
    "requirements": {
      "classes": [
        "ICryptoAssetHelper",
        "CryptoAssetHelperImpl"
      ],
      "methods": [
        "printLog"
      ],
      "keywords": [
        "interface",
        "default",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface ICryptoAssetHelper {\n    default void printLog() {\n        System.out.println(\"Crypto Wallet: Tizim jurnali yozildi.\");\n    }\n}\n\nclass CryptoAssetHelperImpl implements ICryptoAssetHelper {}\n\nclass Main {\n    public static void main(String[] args) {\n        ICryptoAssetHelper h = new CryptoAssetHelperImpl();\n        h.printLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java 8 dan boshlab 'default' kalit so'zi orqali interfeyslar ichida tayyor kodli metodlar yaratish mumkin. Bu eski sinflarni buzmasdan interfeysni boyitishga xizmat qiladi.",
      "theoryEn": "Java 8 default methods enable interface evolution without breaking backwards compatibility with existing implementations.",
      "cleanCode": "default void printLog() { ... }",
      "breakdown": [
        "<code>default</code>: Avlod sinflar qayta yozmasa ham avtomatik ishlayveradi."
      ],
      "pitfalls": "'default' metodlar faqat interfeyslar ichida qo'llanilishi mumkin, oddiy sinflarda emas.",
      "cw2Tip": "Konsol ilovasida barcha bo'limlar uchun umumiy 'default void showHeader()' metodini interfeysda berish juda qulay."
    }
  },
  {
    "id": 50,
    "tier": 2,
    "tierName": "2-Bosqich: 'default' va 'static' Metodlar",
    "sector": "Amaliyot",
    "title": {
      "uz": "50. National Library — Interfeysda Boshlang'ich Tanali Metod",
      "en": "50. National Library — Interface Default & Static Methods"
    },
    "scenario": {
      "uz": "National Library da 'ICatalogBookHelper' interfeysi ichida 'default void printLog()' tayyor metodini yozing. 'CatalogBookHelperImpl' sinfi uni to'g'ridan-to'g'ri chaqira olsin.",
      "en": "Add default method 'printLog()' inside 'ICatalogBookHelper' in National Library."
    },
    "requirements": {
      "classes": [
        "ICatalogBookHelper",
        "CatalogBookHelperImpl"
      ],
      "methods": [
        "printLog"
      ],
      "keywords": [
        "interface",
        "default",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface ICatalogBookHelper {\n    default void printLog() {\n        System.out.println(\"National Library: Tizim jurnali yozildi.\");\n    }\n}\n\nclass CatalogBookHelperImpl implements ICatalogBookHelper {}\n\nclass Main {\n    public static void main(String[] args) {\n        ICatalogBookHelper h = new CatalogBookHelperImpl();\n        h.printLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java 8 dan boshlab 'default' kalit so'zi orqali interfeyslar ichida tayyor kodli metodlar yaratish mumkin. Bu eski sinflarni buzmasdan interfeysni boyitishga xizmat qiladi.",
      "theoryEn": "Java 8 default methods enable interface evolution without breaking backwards compatibility with existing implementations.",
      "cleanCode": "default void printLog() { ... }",
      "breakdown": [
        "<code>default</code>: Avlod sinflar qayta yozmasa ham avtomatik ishlayveradi."
      ],
      "pitfalls": "'default' metodlar faqat interfeyslar ichida qo'llanilishi mumkin, oddiy sinflarda emas.",
      "cw2Tip": "Konsol ilovasida barcha bo'limlar uchun umumiy 'default void showHeader()' metodini interfeysda berish juda qulay."
    }
  },
  {
    "id": 51,
    "tier": 2,
    "tierName": "2-Bosqich: 'default' va 'static' Metodlar",
    "sector": "Amaliyot",
    "title": {
      "uz": "51. BeFit Club — Interfeysda Boshlang'ich Tanali Metod",
      "en": "51. BeFit Club — Interface Default & Static Methods"
    },
    "scenario": {
      "uz": "BeFit Club da 'IGymMemberHelper' interfeysi ichida 'default void printLog()' tayyor metodini yozing. 'GymMemberHelperImpl' sinfi uni to'g'ridan-to'g'ri chaqira olsin.",
      "en": "Add default method 'printLog()' inside 'IGymMemberHelper' in BeFit Club."
    },
    "requirements": {
      "classes": [
        "IGymMemberHelper",
        "GymMemberHelperImpl"
      ],
      "methods": [
        "printLog"
      ],
      "keywords": [
        "interface",
        "default",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IGymMemberHelper {\n    default void printLog() {\n        System.out.println(\"BeFit Club: Tizim jurnali yozildi.\");\n    }\n}\n\nclass GymMemberHelperImpl implements IGymMemberHelper {}\n\nclass Main {\n    public static void main(String[] args) {\n        IGymMemberHelper h = new GymMemberHelperImpl();\n        h.printLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java 8 dan boshlab 'default' kalit so'zi orqali interfeyslar ichida tayyor kodli metodlar yaratish mumkin. Bu eski sinflarni buzmasdan interfeysni boyitishga xizmat qiladi.",
      "theoryEn": "Java 8 default methods enable interface evolution without breaking backwards compatibility with existing implementations.",
      "cleanCode": "default void printLog() { ... }",
      "breakdown": [
        "<code>default</code>: Avlod sinflar qayta yozmasa ham avtomatik ishlayveradi."
      ],
      "pitfalls": "'default' metodlar faqat interfeyslar ichida qo'llanilishi mumkin, oddiy sinflarda emas.",
      "cw2Tip": "Konsol ilovasida barcha bo'limlar uchun umumiy 'default void showHeader()' metodini interfeysda berish juda qulay."
    }
  },
  {
    "id": 52,
    "tier": 2,
    "tierName": "2-Bosqich: 'default' va 'static' Metodlar",
    "sector": "Amaliyot",
    "title": {
      "uz": "52. Tashkent Parking — Interfeysda Boshlang'ich Tanali Metod",
      "en": "52. Tashkent Parking — Interface Default & Static Methods"
    },
    "scenario": {
      "uz": "Tashkent Parking da 'IParkingBayHelper' interfeysi ichida 'default void printLog()' tayyor metodini yozing. 'ParkingBayHelperImpl' sinfi uni to'g'ridan-to'g'ri chaqira olsin.",
      "en": "Add default method 'printLog()' inside 'IParkingBayHelper' in Tashkent Parking."
    },
    "requirements": {
      "classes": [
        "IParkingBayHelper",
        "ParkingBayHelperImpl"
      ],
      "methods": [
        "printLog"
      ],
      "keywords": [
        "interface",
        "default",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IParkingBayHelper {\n    default void printLog() {\n        System.out.println(\"Tashkent Parking: Tizim jurnali yozildi.\");\n    }\n}\n\nclass ParkingBayHelperImpl implements IParkingBayHelper {}\n\nclass Main {\n    public static void main(String[] args) {\n        IParkingBayHelper h = new ParkingBayHelperImpl();\n        h.printLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java 8 dan boshlab 'default' kalit so'zi orqali interfeyslar ichida tayyor kodli metodlar yaratish mumkin. Bu eski sinflarni buzmasdan interfeysni boyitishga xizmat qiladi.",
      "theoryEn": "Java 8 default methods enable interface evolution without breaking backwards compatibility with existing implementations.",
      "cleanCode": "default void printLog() { ... }",
      "breakdown": [
        "<code>default</code>: Avlod sinflar qayta yozmasa ham avtomatik ishlayveradi."
      ],
      "pitfalls": "'default' metodlar faqat interfeyslar ichida qo'llanilishi mumkin, oddiy sinflarda emas.",
      "cw2Tip": "Konsol ilovasida barcha bo'limlar uchun umumiy 'default void showHeader()' metodini interfeysda berish juda qulay."
    }
  },
  {
    "id": 53,
    "tier": 2,
    "tierName": "2-Bosqich: 'default' va 'static' Metodlar",
    "sector": "Amaliyot",
    "title": {
      "uz": "53. Medion Clinic — Interfeysda Boshlang'ich Tanali Metod",
      "en": "53. Medion Clinic — Interface Default & Static Methods"
    },
    "scenario": {
      "uz": "Medion Clinic da 'IPatientRecordHelper' interfeysi ichida 'default void printLog()' tayyor metodini yozing. 'PatientRecordHelperImpl' sinfi uni to'g'ridan-to'g'ri chaqira olsin.",
      "en": "Add default method 'printLog()' inside 'IPatientRecordHelper' in Medion Clinic."
    },
    "requirements": {
      "classes": [
        "IPatientRecordHelper",
        "PatientRecordHelperImpl"
      ],
      "methods": [
        "printLog"
      ],
      "keywords": [
        "interface",
        "default",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IPatientRecordHelper {\n    default void printLog() {\n        System.out.println(\"Medion Clinic: Tizim jurnali yozildi.\");\n    }\n}\n\nclass PatientRecordHelperImpl implements IPatientRecordHelper {}\n\nclass Main {\n    public static void main(String[] args) {\n        IPatientRecordHelper h = new PatientRecordHelperImpl();\n        h.printLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java 8 dan boshlab 'default' kalit so'zi orqali interfeyslar ichida tayyor kodli metodlar yaratish mumkin. Bu eski sinflarni buzmasdan interfeysni boyitishga xizmat qiladi.",
      "theoryEn": "Java 8 default methods enable interface evolution without breaking backwards compatibility with existing implementations.",
      "cleanCode": "default void printLog() { ... }",
      "breakdown": [
        "<code>default</code>: Avlod sinflar qayta yozmasa ham avtomatik ishlayveradi."
      ],
      "pitfalls": "'default' metodlar faqat interfeyslar ichida qo'llanilishi mumkin, oddiy sinflarda emas.",
      "cw2Tip": "Konsol ilovasida barcha bo'limlar uchun umumiy 'default void showHeader()' metodini interfeysda berish juda qulay."
    }
  },
  {
    "id": 54,
    "tier": 2,
    "tierName": "2-Bosqich: 'default' va 'static' Metodlar",
    "sector": "Amaliyot",
    "title": {
      "uz": "54. Hyatt Regency — Interfeysda Boshlang'ich Tanali Metod",
      "en": "54. Hyatt Regency — Interface Default & Static Methods"
    },
    "scenario": {
      "uz": "Hyatt Regency da 'IHotelReservationHelper' interfeysi ichida 'default void printLog()' tayyor metodini yozing. 'HotelReservationHelperImpl' sinfi uni to'g'ridan-to'g'ri chaqira olsin.",
      "en": "Add default method 'printLog()' inside 'IHotelReservationHelper' in Hyatt Regency."
    },
    "requirements": {
      "classes": [
        "IHotelReservationHelper",
        "HotelReservationHelperImpl"
      ],
      "methods": [
        "printLog"
      ],
      "keywords": [
        "interface",
        "default",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IHotelReservationHelper {\n    default void printLog() {\n        System.out.println(\"Hyatt Regency: Tizim jurnali yozildi.\");\n    }\n}\n\nclass HotelReservationHelperImpl implements IHotelReservationHelper {}\n\nclass Main {\n    public static void main(String[] args) {\n        IHotelReservationHelper h = new HotelReservationHelperImpl();\n        h.printLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java 8 dan boshlab 'default' kalit so'zi orqali interfeyslar ichida tayyor kodli metodlar yaratish mumkin. Bu eski sinflarni buzmasdan interfeysni boyitishga xizmat qiladi.",
      "theoryEn": "Java 8 default methods enable interface evolution without breaking backwards compatibility with existing implementations.",
      "cleanCode": "default void printLog() { ... }",
      "breakdown": [
        "<code>default</code>: Avlod sinflar qayta yozmasa ham avtomatik ishlayveradi."
      ],
      "pitfalls": "'default' metodlar faqat interfeyslar ichida qo'llanilishi mumkin, oddiy sinflarda emas.",
      "cw2Tip": "Konsol ilovasida barcha bo'limlar uchun umumiy 'default void showHeader()' metodini interfeysda berish juda qulay."
    }
  },
  {
    "id": 55,
    "tier": 2,
    "tierName": "2-Bosqich: 'default' va 'static' Metodlar",
    "sector": "Amaliyot",
    "title": {
      "uz": "55. Premier Cinema — Interfeysda Boshlang'ich Tanali Metod",
      "en": "55. Premier Cinema — Interface Default & Static Methods"
    },
    "scenario": {
      "uz": "Premier Cinema da 'ICinemaTicketHelper' interfeysi ichida 'default void printLog()' tayyor metodini yozing. 'CinemaTicketHelperImpl' sinfi uni to'g'ridan-to'g'ri chaqira olsin.",
      "en": "Add default method 'printLog()' inside 'ICinemaTicketHelper' in Premier Cinema."
    },
    "requirements": {
      "classes": [
        "ICinemaTicketHelper",
        "CinemaTicketHelperImpl"
      ],
      "methods": [
        "printLog"
      ],
      "keywords": [
        "interface",
        "default",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface ICinemaTicketHelper {\n    default void printLog() {\n        System.out.println(\"Premier Cinema: Tizim jurnali yozildi.\");\n    }\n}\n\nclass CinemaTicketHelperImpl implements ICinemaTicketHelper {}\n\nclass Main {\n    public static void main(String[] args) {\n        ICinemaTicketHelper h = new CinemaTicketHelperImpl();\n        h.printLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java 8 dan boshlab 'default' kalit so'zi orqali interfeyslar ichida tayyor kodli metodlar yaratish mumkin. Bu eski sinflarni buzmasdan interfeysni boyitishga xizmat qiladi.",
      "theoryEn": "Java 8 default methods enable interface evolution without breaking backwards compatibility with existing implementations.",
      "cleanCode": "default void printLog() { ... }",
      "breakdown": [
        "<code>default</code>: Avlod sinflar qayta yozmasa ham avtomatik ishlayveradi."
      ],
      "pitfalls": "'default' metodlar faqat interfeyslar ichida qo'llanilishi mumkin, oddiy sinflarda emas.",
      "cw2Tip": "Konsol ilovasida barcha bo'limlar uchun umumiy 'default void showHeader()' metodini interfeysda berish juda qulay."
    }
  },
  {
    "id": 56,
    "tier": 2,
    "tierName": "2-Bosqich: 'default' va 'static' Metodlar",
    "sector": "Amaliyot",
    "title": {
      "uz": "56. Yandex Scooter — Interfeysda Boshlang'ich Tanali Metod",
      "en": "56. Yandex Scooter — Interface Default & Static Methods"
    },
    "scenario": {
      "uz": "Yandex Scooter da 'IElectricScooterHelper' interfeysi ichida 'default void printLog()' tayyor metodini yozing. 'ElectricScooterHelperImpl' sinfi uni to'g'ridan-to'g'ri chaqira olsin.",
      "en": "Add default method 'printLog()' inside 'IElectricScooterHelper' in Yandex Scooter."
    },
    "requirements": {
      "classes": [
        "IElectricScooterHelper",
        "ElectricScooterHelperImpl"
      ],
      "methods": [
        "printLog"
      ],
      "keywords": [
        "interface",
        "default",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IElectricScooterHelper {\n    default void printLog() {\n        System.out.println(\"Yandex Scooter: Tizim jurnali yozildi.\");\n    }\n}\n\nclass ElectricScooterHelperImpl implements IElectricScooterHelper {}\n\nclass Main {\n    public static void main(String[] args) {\n        IElectricScooterHelper h = new ElectricScooterHelperImpl();\n        h.printLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java 8 dan boshlab 'default' kalit so'zi orqali interfeyslar ichida tayyor kodli metodlar yaratish mumkin. Bu eski sinflarni buzmasdan interfeysni boyitishga xizmat qiladi.",
      "theoryEn": "Java 8 default methods enable interface evolution without breaking backwards compatibility with existing implementations.",
      "cleanCode": "default void printLog() { ... }",
      "breakdown": [
        "<code>default</code>: Avlod sinflar qayta yozmasa ham avtomatik ishlayveradi."
      ],
      "pitfalls": "'default' metodlar faqat interfeyslar ichida qo'llanilishi mumkin, oddiy sinflarda emas.",
      "cw2Tip": "Konsol ilovasida barcha bo'limlar uchun umumiy 'default void showHeader()' metodini interfeysda berish juda qulay."
    }
  },
  {
    "id": 57,
    "tier": 2,
    "tierName": "2-Bosqich: 'default' va 'static' Metodlar",
    "sector": "Amaliyot",
    "title": {
      "uz": "57. Weather Network — Interfeysda Boshlang'ich Tanali Metod",
      "en": "57. Weather Network — Interface Default & Static Methods"
    },
    "scenario": {
      "uz": "Weather Network da 'IMeteoStationHelper' interfeysi ichida 'default void printLog()' tayyor metodini yozing. 'MeteoStationHelperImpl' sinfi uni to'g'ridan-to'g'ri chaqira olsin.",
      "en": "Add default method 'printLog()' inside 'IMeteoStationHelper' in Weather Network."
    },
    "requirements": {
      "classes": [
        "IMeteoStationHelper",
        "MeteoStationHelperImpl"
      ],
      "methods": [
        "printLog"
      ],
      "keywords": [
        "interface",
        "default",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IMeteoStationHelper {\n    default void printLog() {\n        System.out.println(\"Weather Network: Tizim jurnali yozildi.\");\n    }\n}\n\nclass MeteoStationHelperImpl implements IMeteoStationHelper {}\n\nclass Main {\n    public static void main(String[] args) {\n        IMeteoStationHelper h = new MeteoStationHelperImpl();\n        h.printLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java 8 dan boshlab 'default' kalit so'zi orqali interfeyslar ichida tayyor kodli metodlar yaratish mumkin. Bu eski sinflarni buzmasdan interfeysni boyitishga xizmat qiladi.",
      "theoryEn": "Java 8 default methods enable interface evolution without breaking backwards compatibility with existing implementations.",
      "cleanCode": "default void printLog() { ... }",
      "breakdown": [
        "<code>default</code>: Avlod sinflar qayta yozmasa ham avtomatik ishlayveradi."
      ],
      "pitfalls": "'default' metodlar faqat interfeyslar ichida qo'llanilishi mumkin, oddiy sinflarda emas.",
      "cw2Tip": "Konsol ilovasida barcha bo'limlar uchun umumiy 'default void showHeader()' metodini interfeysda berish juda qulay."
    }
  },
  {
    "id": 58,
    "tier": 2,
    "tierName": "2-Bosqich: 'default' va 'static' Metodlar",
    "sector": "Amaliyot",
    "title": {
      "uz": "58. OpenMarket Auction — Interfeysda Boshlang'ich Tanali Metod",
      "en": "58. OpenMarket Auction — Interface Default & Static Methods"
    },
    "scenario": {
      "uz": "OpenMarket Auction da 'IAuctionLotHelper' interfeysi ichida 'default void printLog()' tayyor metodini yozing. 'AuctionLotHelperImpl' sinfi uni to'g'ridan-to'g'ri chaqira olsin.",
      "en": "Add default method 'printLog()' inside 'IAuctionLotHelper' in OpenMarket Auction."
    },
    "requirements": {
      "classes": [
        "IAuctionLotHelper",
        "AuctionLotHelperImpl"
      ],
      "methods": [
        "printLog"
      ],
      "keywords": [
        "interface",
        "default",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IAuctionLotHelper {\n    default void printLog() {\n        System.out.println(\"OpenMarket Auction: Tizim jurnali yozildi.\");\n    }\n}\n\nclass AuctionLotHelperImpl implements IAuctionLotHelper {}\n\nclass Main {\n    public static void main(String[] args) {\n        IAuctionLotHelper h = new AuctionLotHelperImpl();\n        h.printLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java 8 dan boshlab 'default' kalit so'zi orqali interfeyslar ichida tayyor kodli metodlar yaratish mumkin. Bu eski sinflarni buzmasdan interfeysni boyitishga xizmat qiladi.",
      "theoryEn": "Java 8 default methods enable interface evolution without breaking backwards compatibility with existing implementations.",
      "cleanCode": "default void printLog() { ... }",
      "breakdown": [
        "<code>default</code>: Avlod sinflar qayta yozmasa ham avtomatik ishlayveradi."
      ],
      "pitfalls": "'default' metodlar faqat interfeyslar ichida qo'llanilishi mumkin, oddiy sinflarda emas.",
      "cw2Tip": "Konsol ilovasida barcha bo'limlar uchun umumiy 'default void showHeader()' metodini interfeysda berish juda qulay."
    }
  },
  {
    "id": 59,
    "tier": 2,
    "tierName": "2-Bosqich: 'default' va 'static' Metodlar",
    "sector": "Amaliyot",
    "title": {
      "uz": "59. Solar Energy Grid — Interfeysda Boshlang'ich Tanali Metod",
      "en": "59. Solar Energy Grid — Interface Default & Static Methods"
    },
    "scenario": {
      "uz": "Solar Energy Grid da 'ISolarInverterHelper' interfeysi ichida 'default void printLog()' tayyor metodini yozing. 'SolarInverterHelperImpl' sinfi uni to'g'ridan-to'g'ri chaqira olsin.",
      "en": "Add default method 'printLog()' inside 'ISolarInverterHelper' in Solar Energy Grid."
    },
    "requirements": {
      "classes": [
        "ISolarInverterHelper",
        "SolarInverterHelperImpl"
      ],
      "methods": [
        "printLog"
      ],
      "keywords": [
        "interface",
        "default",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface ISolarInverterHelper {\n    default void printLog() {\n        System.out.println(\"Solar Energy Grid: Tizim jurnali yozildi.\");\n    }\n}\n\nclass SolarInverterHelperImpl implements ISolarInverterHelper {}\n\nclass Main {\n    public static void main(String[] args) {\n        ISolarInverterHelper h = new SolarInverterHelperImpl();\n        h.printLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java 8 dan boshlab 'default' kalit so'zi orqali interfeyslar ichida tayyor kodli metodlar yaratish mumkin. Bu eski sinflarni buzmasdan interfeysni boyitishga xizmat qiladi.",
      "theoryEn": "Java 8 default methods enable interface evolution without breaking backwards compatibility with existing implementations.",
      "cleanCode": "default void printLog() { ... }",
      "breakdown": [
        "<code>default</code>: Avlod sinflar qayta yozmasa ham avtomatik ishlayveradi."
      ],
      "pitfalls": "'default' metodlar faqat interfeyslar ichida qo'llanilishi mumkin, oddiy sinflarda emas.",
      "cw2Tip": "Konsol ilovasida barcha bo'limlar uchun umumiy 'default void showHeader()' metodini interfeysda berish juda qulay."
    }
  },
  {
    "id": 60,
    "tier": 2,
    "tierName": "2-Bosqich: 'default' va 'static' Metodlar",
    "sector": "Amaliyot",
    "title": {
      "uz": "60. O'zbekiston Temir Yo'llari — Interfeysda Boshlang'ich Tanali Metod",
      "en": "60. O'zbekiston Temir Yo'llari — Interface Default & Static Methods"
    },
    "scenario": {
      "uz": "O'zbekiston Temir Yo'llari da 'ITrainRouteHelper' interfeysi ichida 'default void printLog()' tayyor metodini yozing. 'TrainRouteHelperImpl' sinfi uni to'g'ridan-to'g'ri chaqira olsin.",
      "en": "Add default method 'printLog()' inside 'ITrainRouteHelper' in O'zbekiston Temir Yo'llari."
    },
    "requirements": {
      "classes": [
        "ITrainRouteHelper",
        "TrainRouteHelperImpl"
      ],
      "methods": [
        "printLog"
      ],
      "keywords": [
        "interface",
        "default",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface ITrainRouteHelper {\n    default void printLog() {\n        System.out.println(\"O'zbekiston Temir Yo'llari: Tizim jurnali yozildi.\");\n    }\n}\n\nclass TrainRouteHelperImpl implements ITrainRouteHelper {}\n\nclass Main {\n    public static void main(String[] args) {\n        ITrainRouteHelper h = new TrainRouteHelperImpl();\n        h.printLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java 8 dan boshlab 'default' kalit so'zi orqali interfeyslar ichida tayyor kodli metodlar yaratish mumkin. Bu eski sinflarni buzmasdan interfeysni boyitishga xizmat qiladi.",
      "theoryEn": "Java 8 default methods enable interface evolution without breaking backwards compatibility with existing implementations.",
      "cleanCode": "default void printLog() { ... }",
      "breakdown": [
        "<code>default</code>: Avlod sinflar qayta yozmasa ham avtomatik ishlayveradi."
      ],
      "pitfalls": "'default' metodlar faqat interfeyslar ichida qo'llanilishi mumkin, oddiy sinflarda emas.",
      "cw2Tip": "Konsol ilovasida barcha bo'limlar uchun umumiy 'default void showHeader()' metodini interfeysda berish juda qulay."
    }
  },
  {
    "id": 61,
    "tier": 3,
    "tierName": "3-Bosqich: Ko'p Interfeyslarni Bir Vaqtda Amalga Oshirish",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "61. Uzum Market — Bir Nechta Interfeysni Qo'llash",
      "en": "61. Uzum Market — Multiple Interface Implementation"
    },
    "scenario": {
      "uz": "Uzum Market da 'ProductNode' klassi ikkita interfeysni bir vaqtda amalga oshirsin: 'implements IProductPrintable, IProductAuditable'. Ikkala metodni ham yozing.",
      "en": "Implement multiple interfaces in Uzum Market: 'ProductNode implements IProductPrintable, IProductAuditable'."
    },
    "requirements": {
      "classes": [
        "IProductPrintable",
        "IProductAuditable",
        "ProductNode"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IProductPrintable { void printData(); }\ninterface IProductAuditable { void auditLog(); }\n\nclass ProductNode implements IProductPrintable, IProductAuditable {\n    @Override public void printData() { System.out.println(\"Uzum Market: Chop etildi\"); }\n    @Override public void auditLog() { System.out.println(\"Uzum Market: Audit qilindi\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ProductNode node = new ProductNode();\n        node.printData();\n        node.auditLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java sinflar uchun ko'p merosxo'rlikni taqiqlasa-da, interfeyslar orqali ko'p shartnomani bemalol amalga oshirishga ruxsat beradi (Multiple Inheritance of Type).",
      "theoryEn": "Java prohibits multiple class inheritance but embraces multiple interface implementation to compose capabilities safely.",
      "cleanCode": "class ProductNode implements IProductPrintable, IProductAuditable { ... }",
      "breakdown": [
        "<code>implements A, B</code>: Sinif bir nechta xarakterga ega bo'ladi."
      ],
      "pitfalls": "Agar ikkala interfeysda bir xil nomli default metod bo'lsa, 'Diamond problem' kelib chiqadi va sinf uni o'zi majburan qayta yozishi shart.",
      "cw2Tip": "Tovarlar bir vaqtning o'zida ham 'Printable' (chekda chiqadigan), ham 'Discountable' (chegirma bo'ladigan) bo'lishi mumkin."
    }
  },
  {
    "id": 62,
    "tier": 3,
    "tierName": "3-Bosqich: Ko'p Interfeyslarni Bir Vaqtda Amalga Oshirish",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "62. Payme Wallet — Bir Nechta Interfeysni Qo'llash",
      "en": "62. Payme Wallet — Multiple Interface Implementation"
    },
    "scenario": {
      "uz": "Payme Wallet da 'WalletUserNode' klassi ikkita interfeysni bir vaqtda amalga oshirsin: 'implements IWalletUserPrintable, IWalletUserAuditable'. Ikkala metodni ham yozing.",
      "en": "Implement multiple interfaces in Payme Wallet: 'WalletUserNode implements IWalletUserPrintable, IWalletUserAuditable'."
    },
    "requirements": {
      "classes": [
        "IWalletUserPrintable",
        "IWalletUserAuditable",
        "WalletUserNode"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IWalletUserPrintable { void printData(); }\ninterface IWalletUserAuditable { void auditLog(); }\n\nclass WalletUserNode implements IWalletUserPrintable, IWalletUserAuditable {\n    @Override public void printData() { System.out.println(\"Payme Wallet: Chop etildi\"); }\n    @Override public void auditLog() { System.out.println(\"Payme Wallet: Audit qilindi\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WalletUserNode node = new WalletUserNode();\n        node.printData();\n        node.auditLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java sinflar uchun ko'p merosxo'rlikni taqiqlasa-da, interfeyslar orqali ko'p shartnomani bemalol amalga oshirishga ruxsat beradi (Multiple Inheritance of Type).",
      "theoryEn": "Java prohibits multiple class inheritance but embraces multiple interface implementation to compose capabilities safely.",
      "cleanCode": "class WalletUserNode implements IWalletUserPrintable, IWalletUserAuditable { ... }",
      "breakdown": [
        "<code>implements A, B</code>: Sinif bir nechta xarakterga ega bo'ladi."
      ],
      "pitfalls": "Agar ikkala interfeysda bir xil nomli default metod bo'lsa, 'Diamond problem' kelib chiqadi va sinf uni o'zi majburan qayta yozishi shart.",
      "cw2Tip": "Tovarlar bir vaqtning o'zida ham 'Printable' (chekda chiqadigan), ham 'Discountable' (chegirma bo'ladigan) bo'lishi mumkin."
    }
  },
  {
    "id": 63,
    "tier": 3,
    "tierName": "3-Bosqich: Ko'p Interfeyslarni Bir Vaqtda Amalga Oshirish",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "63. Yandex Go — Bir Nechta Interfeysni Qo'llash",
      "en": "63. Yandex Go — Multiple Interface Implementation"
    },
    "scenario": {
      "uz": "Yandex Go da 'TaxiRideNode' klassi ikkita interfeysni bir vaqtda amalga oshirsin: 'implements ITaxiRidePrintable, ITaxiRideAuditable'. Ikkala metodni ham yozing.",
      "en": "Implement multiple interfaces in Yandex Go: 'TaxiRideNode implements ITaxiRidePrintable, ITaxiRideAuditable'."
    },
    "requirements": {
      "classes": [
        "ITaxiRidePrintable",
        "ITaxiRideAuditable",
        "TaxiRideNode"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface ITaxiRidePrintable { void printData(); }\ninterface ITaxiRideAuditable { void auditLog(); }\n\nclass TaxiRideNode implements ITaxiRidePrintable, ITaxiRideAuditable {\n    @Override public void printData() { System.out.println(\"Yandex Go: Chop etildi\"); }\n    @Override public void auditLog() { System.out.println(\"Yandex Go: Audit qilindi\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TaxiRideNode node = new TaxiRideNode();\n        node.printData();\n        node.auditLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java sinflar uchun ko'p merosxo'rlikni taqiqlasa-da, interfeyslar orqali ko'p shartnomani bemalol amalga oshirishga ruxsat beradi (Multiple Inheritance of Type).",
      "theoryEn": "Java prohibits multiple class inheritance but embraces multiple interface implementation to compose capabilities safely.",
      "cleanCode": "class TaxiRideNode implements ITaxiRidePrintable, ITaxiRideAuditable { ... }",
      "breakdown": [
        "<code>implements A, B</code>: Sinif bir nechta xarakterga ega bo'ladi."
      ],
      "pitfalls": "Agar ikkala interfeysda bir xil nomli default metod bo'lsa, 'Diamond problem' kelib chiqadi va sinf uni o'zi majburan qayta yozishi shart.",
      "cw2Tip": "Tovarlar bir vaqtning o'zida ham 'Printable' (chekda chiqadigan), ham 'Discountable' (chegirma bo'ladigan) bo'lishi mumkin."
    }
  },
  {
    "id": 64,
    "tier": 3,
    "tierName": "3-Bosqich: Ko'p Interfeyslarni Bir Vaqtda Amalga Oshirish",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "64. Korzinka Go — Bir Nechta Interfeysni Qo'llash",
      "en": "64. Korzinka Go — Multiple Interface Implementation"
    },
    "scenario": {
      "uz": "Korzinka Go da 'LoyaltyCardNode' klassi ikkita interfeysni bir vaqtda amalga oshirsin: 'implements ILoyaltyCardPrintable, ILoyaltyCardAuditable'. Ikkala metodni ham yozing.",
      "en": "Implement multiple interfaces in Korzinka Go: 'LoyaltyCardNode implements ILoyaltyCardPrintable, ILoyaltyCardAuditable'."
    },
    "requirements": {
      "classes": [
        "ILoyaltyCardPrintable",
        "ILoyaltyCardAuditable",
        "LoyaltyCardNode"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface ILoyaltyCardPrintable { void printData(); }\ninterface ILoyaltyCardAuditable { void auditLog(); }\n\nclass LoyaltyCardNode implements ILoyaltyCardPrintable, ILoyaltyCardAuditable {\n    @Override public void printData() { System.out.println(\"Korzinka Go: Chop etildi\"); }\n    @Override public void auditLog() { System.out.println(\"Korzinka Go: Audit qilindi\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LoyaltyCardNode node = new LoyaltyCardNode();\n        node.printData();\n        node.auditLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java sinflar uchun ko'p merosxo'rlikni taqiqlasa-da, interfeyslar orqali ko'p shartnomani bemalol amalga oshirishga ruxsat beradi (Multiple Inheritance of Type).",
      "theoryEn": "Java prohibits multiple class inheritance but embraces multiple interface implementation to compose capabilities safely.",
      "cleanCode": "class LoyaltyCardNode implements ILoyaltyCardPrintable, ILoyaltyCardAuditable { ... }",
      "breakdown": [
        "<code>implements A, B</code>: Sinif bir nechta xarakterga ega bo'ladi."
      ],
      "pitfalls": "Agar ikkala interfeysda bir xil nomli default metod bo'lsa, 'Diamond problem' kelib chiqadi va sinf uni o'zi majburan qayta yozishi shart.",
      "cw2Tip": "Tovarlar bir vaqtning o'zida ham 'Printable' (chekda chiqadigan), ham 'Discountable' (chegirma bo'ladigan) bo'lishi mumkin."
    }
  },
  {
    "id": 65,
    "tier": 3,
    "tierName": "3-Bosqich: Ko'p Interfeyslarni Bir Vaqtda Amalga Oshirish",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "65. WIUT Portal — Bir Nechta Interfeysni Qo'llash",
      "en": "65. WIUT Portal — Multiple Interface Implementation"
    },
    "scenario": {
      "uz": "WIUT Portal da 'StudentNode' klassi ikkita interfeysni bir vaqtda amalga oshirsin: 'implements IStudentPrintable, IStudentAuditable'. Ikkala metodni ham yozing.",
      "en": "Implement multiple interfaces in WIUT Portal: 'StudentNode implements IStudentPrintable, IStudentAuditable'."
    },
    "requirements": {
      "classes": [
        "IStudentPrintable",
        "IStudentAuditable",
        "StudentNode"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IStudentPrintable { void printData(); }\ninterface IStudentAuditable { void auditLog(); }\n\nclass StudentNode implements IStudentPrintable, IStudentAuditable {\n    @Override public void printData() { System.out.println(\"WIUT Portal: Chop etildi\"); }\n    @Override public void auditLog() { System.out.println(\"WIUT Portal: Audit qilindi\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StudentNode node = new StudentNode();\n        node.printData();\n        node.auditLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java sinflar uchun ko'p merosxo'rlikni taqiqlasa-da, interfeyslar orqali ko'p shartnomani bemalol amalga oshirishga ruxsat beradi (Multiple Inheritance of Type).",
      "theoryEn": "Java prohibits multiple class inheritance but embraces multiple interface implementation to compose capabilities safely.",
      "cleanCode": "class StudentNode implements IStudentPrintable, IStudentAuditable { ... }",
      "breakdown": [
        "<code>implements A, B</code>: Sinif bir nechta xarakterga ega bo'ladi."
      ],
      "pitfalls": "Agar ikkala interfeysda bir xil nomli default metod bo'lsa, 'Diamond problem' kelib chiqadi va sinf uni o'zi majburan qayta yozishi shart.",
      "cw2Tip": "Tovarlar bir vaqtning o'zida ham 'Printable' (chekda chiqadigan), ham 'Discountable' (chegirma bo'ladigan) bo'lishi mumkin."
    }
  },
  {
    "id": 66,
    "tier": 3,
    "tierName": "3-Bosqich: Ko'p Interfeyslarni Bir Vaqtda Amalga Oshirish",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "66. Click Pay — Bir Nechta Interfeysni Qo'llash",
      "en": "66. Click Pay — Multiple Interface Implementation"
    },
    "scenario": {
      "uz": "Click Pay da 'PaymentTxnNode' klassi ikkita interfeysni bir vaqtda amalga oshirsin: 'implements IPaymentTxnPrintable, IPaymentTxnAuditable'. Ikkala metodni ham yozing.",
      "en": "Implement multiple interfaces in Click Pay: 'PaymentTxnNode implements IPaymentTxnPrintable, IPaymentTxnAuditable'."
    },
    "requirements": {
      "classes": [
        "IPaymentTxnPrintable",
        "IPaymentTxnAuditable",
        "PaymentTxnNode"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IPaymentTxnPrintable { void printData(); }\ninterface IPaymentTxnAuditable { void auditLog(); }\n\nclass PaymentTxnNode implements IPaymentTxnPrintable, IPaymentTxnAuditable {\n    @Override public void printData() { System.out.println(\"Click Pay: Chop etildi\"); }\n    @Override public void auditLog() { System.out.println(\"Click Pay: Audit qilindi\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentTxnNode node = new PaymentTxnNode();\n        node.printData();\n        node.auditLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java sinflar uchun ko'p merosxo'rlikni taqiqlasa-da, interfeyslar orqali ko'p shartnomani bemalol amalga oshirishga ruxsat beradi (Multiple Inheritance of Type).",
      "theoryEn": "Java prohibits multiple class inheritance but embraces multiple interface implementation to compose capabilities safely.",
      "cleanCode": "class PaymentTxnNode implements IPaymentTxnPrintable, IPaymentTxnAuditable { ... }",
      "breakdown": [
        "<code>implements A, B</code>: Sinif bir nechta xarakterga ega bo'ladi."
      ],
      "pitfalls": "Agar ikkala interfeysda bir xil nomli default metod bo'lsa, 'Diamond problem' kelib chiqadi va sinf uni o'zi majburan qayta yozishi shart.",
      "cw2Tip": "Tovarlar bir vaqtning o'zida ham 'Printable' (chekda chiqadigan), ham 'Discountable' (chegirma bo'ladigan) bo'lishi mumkin."
    }
  },
  {
    "id": 67,
    "tier": 3,
    "tierName": "3-Bosqich: Ko'p Interfeyslarni Bir Vaqtda Amalga Oshirish",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "67. Telegram Bot — Bir Nechta Interfeysni Qo'llash",
      "en": "67. Telegram Bot — Multiple Interface Implementation"
    },
    "scenario": {
      "uz": "Telegram Bot da 'BotMessageNode' klassi ikkita interfeysni bir vaqtda amalga oshirsin: 'implements IBotMessagePrintable, IBotMessageAuditable'. Ikkala metodni ham yozing.",
      "en": "Implement multiple interfaces in Telegram Bot: 'BotMessageNode implements IBotMessagePrintable, IBotMessageAuditable'."
    },
    "requirements": {
      "classes": [
        "IBotMessagePrintable",
        "IBotMessageAuditable",
        "BotMessageNode"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IBotMessagePrintable { void printData(); }\ninterface IBotMessageAuditable { void auditLog(); }\n\nclass BotMessageNode implements IBotMessagePrintable, IBotMessageAuditable {\n    @Override public void printData() { System.out.println(\"Telegram Bot: Chop etildi\"); }\n    @Override public void auditLog() { System.out.println(\"Telegram Bot: Audit qilindi\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BotMessageNode node = new BotMessageNode();\n        node.printData();\n        node.auditLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java sinflar uchun ko'p merosxo'rlikni taqiqlasa-da, interfeyslar orqali ko'p shartnomani bemalol amalga oshirishga ruxsat beradi (Multiple Inheritance of Type).",
      "theoryEn": "Java prohibits multiple class inheritance but embraces multiple interface implementation to compose capabilities safely.",
      "cleanCode": "class BotMessageNode implements IBotMessagePrintable, IBotMessageAuditable { ... }",
      "breakdown": [
        "<code>implements A, B</code>: Sinif bir nechta xarakterga ega bo'ladi."
      ],
      "pitfalls": "Agar ikkala interfeysda bir xil nomli default metod bo'lsa, 'Diamond problem' kelib chiqadi va sinf uni o'zi majburan qayta yozishi shart.",
      "cw2Tip": "Tovarlar bir vaqtning o'zida ham 'Printable' (chekda chiqadigan), ham 'Discountable' (chegirma bo'ladigan) bo'lishi mumkin."
    }
  },
  {
    "id": 68,
    "tier": 3,
    "tierName": "3-Bosqich: Ko'p Interfeyslarni Bir Vaqtda Amalga Oshirish",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "68. UzAirways — Bir Nechta Interfeysni Qo'llash",
      "en": "68. UzAirways — Multiple Interface Implementation"
    },
    "scenario": {
      "uz": "UzAirways da 'FlightTicketNode' klassi ikkita interfeysni bir vaqtda amalga oshirsin: 'implements IFlightTicketPrintable, IFlightTicketAuditable'. Ikkala metodni ham yozing.",
      "en": "Implement multiple interfaces in UzAirways: 'FlightTicketNode implements IFlightTicketPrintable, IFlightTicketAuditable'."
    },
    "requirements": {
      "classes": [
        "IFlightTicketPrintable",
        "IFlightTicketAuditable",
        "FlightTicketNode"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IFlightTicketPrintable { void printData(); }\ninterface IFlightTicketAuditable { void auditLog(); }\n\nclass FlightTicketNode implements IFlightTicketPrintable, IFlightTicketAuditable {\n    @Override public void printData() { System.out.println(\"UzAirways: Chop etildi\"); }\n    @Override public void auditLog() { System.out.println(\"UzAirways: Audit qilindi\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FlightTicketNode node = new FlightTicketNode();\n        node.printData();\n        node.auditLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java sinflar uchun ko'p merosxo'rlikni taqiqlasa-da, interfeyslar orqali ko'p shartnomani bemalol amalga oshirishga ruxsat beradi (Multiple Inheritance of Type).",
      "theoryEn": "Java prohibits multiple class inheritance but embraces multiple interface implementation to compose capabilities safely.",
      "cleanCode": "class FlightTicketNode implements IFlightTicketPrintable, IFlightTicketAuditable { ... }",
      "breakdown": [
        "<code>implements A, B</code>: Sinif bir nechta xarakterga ega bo'ladi."
      ],
      "pitfalls": "Agar ikkala interfeysda bir xil nomli default metod bo'lsa, 'Diamond problem' kelib chiqadi va sinf uni o'zi majburan qayta yozishi shart.",
      "cw2Tip": "Tovarlar bir vaqtning o'zida ham 'Printable' (chekda chiqadigan), ham 'Discountable' (chegirma bo'ladigan) bo'lishi mumkin."
    }
  },
  {
    "id": 69,
    "tier": 3,
    "tierName": "3-Bosqich: Ko'p Interfeyslarni Bir Vaqtda Amalga Oshirish",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "69. IT Park Academy — Bir Nechta Interfeysni Qo'llash",
      "en": "69. IT Park Academy — Multiple Interface Implementation"
    },
    "scenario": {
      "uz": "IT Park Academy da 'BootcampCourseNode' klassi ikkita interfeysni bir vaqtda amalga oshirsin: 'implements IBootcampCoursePrintable, IBootcampCourseAuditable'. Ikkala metodni ham yozing.",
      "en": "Implement multiple interfaces in IT Park Academy: 'BootcampCourseNode implements IBootcampCoursePrintable, IBootcampCourseAuditable'."
    },
    "requirements": {
      "classes": [
        "IBootcampCoursePrintable",
        "IBootcampCourseAuditable",
        "BootcampCourseNode"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IBootcampCoursePrintable { void printData(); }\ninterface IBootcampCourseAuditable { void auditLog(); }\n\nclass BootcampCourseNode implements IBootcampCoursePrintable, IBootcampCourseAuditable {\n    @Override public void printData() { System.out.println(\"IT Park Academy: Chop etildi\"); }\n    @Override public void auditLog() { System.out.println(\"IT Park Academy: Audit qilindi\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BootcampCourseNode node = new BootcampCourseNode();\n        node.printData();\n        node.auditLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java sinflar uchun ko'p merosxo'rlikni taqiqlasa-da, interfeyslar orqali ko'p shartnomani bemalol amalga oshirishga ruxsat beradi (Multiple Inheritance of Type).",
      "theoryEn": "Java prohibits multiple class inheritance but embraces multiple interface implementation to compose capabilities safely.",
      "cleanCode": "class BootcampCourseNode implements IBootcampCoursePrintable, IBootcampCourseAuditable { ... }",
      "breakdown": [
        "<code>implements A, B</code>: Sinif bir nechta xarakterga ega bo'ladi."
      ],
      "pitfalls": "Agar ikkala interfeysda bir xil nomli default metod bo'lsa, 'Diamond problem' kelib chiqadi va sinf uni o'zi majburan qayta yozishi shart.",
      "cw2Tip": "Tovarlar bir vaqtning o'zida ham 'Printable' (chekda chiqadigan), ham 'Discountable' (chegirma bo'ladigan) bo'lishi mumkin."
    }
  },
  {
    "id": 70,
    "tier": 3,
    "tierName": "3-Bosqich: Ko'p Interfeyslarni Bir Vaqtda Amalga Oshirish",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "70. Anorbank — Bir Nechta Interfeysni Qo'llash",
      "en": "70. Anorbank — Multiple Interface Implementation"
    },
    "scenario": {
      "uz": "Anorbank da 'DebitCardNode' klassi ikkita interfeysni bir vaqtda amalga oshirsin: 'implements IDebitCardPrintable, IDebitCardAuditable'. Ikkala metodni ham yozing.",
      "en": "Implement multiple interfaces in Anorbank: 'DebitCardNode implements IDebitCardPrintable, IDebitCardAuditable'."
    },
    "requirements": {
      "classes": [
        "IDebitCardPrintable",
        "IDebitCardAuditable",
        "DebitCardNode"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IDebitCardPrintable { void printData(); }\ninterface IDebitCardAuditable { void auditLog(); }\n\nclass DebitCardNode implements IDebitCardPrintable, IDebitCardAuditable {\n    @Override public void printData() { System.out.println(\"Anorbank: Chop etildi\"); }\n    @Override public void auditLog() { System.out.println(\"Anorbank: Audit qilindi\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DebitCardNode node = new DebitCardNode();\n        node.printData();\n        node.auditLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java sinflar uchun ko'p merosxo'rlikni taqiqlasa-da, interfeyslar orqali ko'p shartnomani bemalol amalga oshirishga ruxsat beradi (Multiple Inheritance of Type).",
      "theoryEn": "Java prohibits multiple class inheritance but embraces multiple interface implementation to compose capabilities safely.",
      "cleanCode": "class DebitCardNode implements IDebitCardPrintable, IDebitCardAuditable { ... }",
      "breakdown": [
        "<code>implements A, B</code>: Sinif bir nechta xarakterga ega bo'ladi."
      ],
      "pitfalls": "Agar ikkala interfeysda bir xil nomli default metod bo'lsa, 'Diamond problem' kelib chiqadi va sinf uni o'zi majburan qayta yozishi shart.",
      "cw2Tip": "Tovarlar bir vaqtning o'zida ham 'Printable' (chekda chiqadigan), ham 'Discountable' (chegirma bo'ladigan) bo'lishi mumkin."
    }
  },
  {
    "id": 71,
    "tier": 3,
    "tierName": "3-Bosqich: Ko'p Interfeyslarni Bir Vaqtda Amalga Oshirish",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "71. Oson Apteka — Bir Nechta Interfeysni Qo'llash",
      "en": "71. Oson Apteka — Multiple Interface Implementation"
    },
    "scenario": {
      "uz": "Oson Apteka da 'MedicineNode' klassi ikkita interfeysni bir vaqtda amalga oshirsin: 'implements IMedicinePrintable, IMedicineAuditable'. Ikkala metodni ham yozing.",
      "en": "Implement multiple interfaces in Oson Apteka: 'MedicineNode implements IMedicinePrintable, IMedicineAuditable'."
    },
    "requirements": {
      "classes": [
        "IMedicinePrintable",
        "IMedicineAuditable",
        "MedicineNode"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IMedicinePrintable { void printData(); }\ninterface IMedicineAuditable { void auditLog(); }\n\nclass MedicineNode implements IMedicinePrintable, IMedicineAuditable {\n    @Override public void printData() { System.out.println(\"Oson Apteka: Chop etildi\"); }\n    @Override public void auditLog() { System.out.println(\"Oson Apteka: Audit qilindi\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MedicineNode node = new MedicineNode();\n        node.printData();\n        node.auditLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java sinflar uchun ko'p merosxo'rlikni taqiqlasa-da, interfeyslar orqali ko'p shartnomani bemalol amalga oshirishga ruxsat beradi (Multiple Inheritance of Type).",
      "theoryEn": "Java prohibits multiple class inheritance but embraces multiple interface implementation to compose capabilities safely.",
      "cleanCode": "class MedicineNode implements IMedicinePrintable, IMedicineAuditable { ... }",
      "breakdown": [
        "<code>implements A, B</code>: Sinif bir nechta xarakterga ega bo'ladi."
      ],
      "pitfalls": "Agar ikkala interfeysda bir xil nomli default metod bo'lsa, 'Diamond problem' kelib chiqadi va sinf uni o'zi majburan qayta yozishi shart.",
      "cw2Tip": "Tovarlar bir vaqtning o'zida ham 'Printable' (chekda chiqadigan), ham 'Discountable' (chegirma bo'ladigan) bo'lishi mumkin."
    }
  },
  {
    "id": 72,
    "tier": 3,
    "tierName": "3-Bosqich: Ko'p Interfeyslarni Bir Vaqtda Amalga Oshirish",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "72. Evos FastFood — Bir Nechta Interfeysni Qo'llash",
      "en": "72. Evos FastFood — Multiple Interface Implementation"
    },
    "scenario": {
      "uz": "Evos FastFood da 'FoodOrderNode' klassi ikkita interfeysni bir vaqtda amalga oshirsin: 'implements IFoodOrderPrintable, IFoodOrderAuditable'. Ikkala metodni ham yozing.",
      "en": "Implement multiple interfaces in Evos FastFood: 'FoodOrderNode implements IFoodOrderPrintable, IFoodOrderAuditable'."
    },
    "requirements": {
      "classes": [
        "IFoodOrderPrintable",
        "IFoodOrderAuditable",
        "FoodOrderNode"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IFoodOrderPrintable { void printData(); }\ninterface IFoodOrderAuditable { void auditLog(); }\n\nclass FoodOrderNode implements IFoodOrderPrintable, IFoodOrderAuditable {\n    @Override public void printData() { System.out.println(\"Evos FastFood: Chop etildi\"); }\n    @Override public void auditLog() { System.out.println(\"Evos FastFood: Audit qilindi\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FoodOrderNode node = new FoodOrderNode();\n        node.printData();\n        node.auditLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java sinflar uchun ko'p merosxo'rlikni taqiqlasa-da, interfeyslar orqali ko'p shartnomani bemalol amalga oshirishga ruxsat beradi (Multiple Inheritance of Type).",
      "theoryEn": "Java prohibits multiple class inheritance but embraces multiple interface implementation to compose capabilities safely.",
      "cleanCode": "class FoodOrderNode implements IFoodOrderPrintable, IFoodOrderAuditable { ... }",
      "breakdown": [
        "<code>implements A, B</code>: Sinif bir nechta xarakterga ega bo'ladi."
      ],
      "pitfalls": "Agar ikkala interfeysda bir xil nomli default metod bo'lsa, 'Diamond problem' kelib chiqadi va sinf uni o'zi majburan qayta yozishi shart.",
      "cw2Tip": "Tovarlar bir vaqtning o'zida ham 'Printable' (chekda chiqadigan), ham 'Discountable' (chegirma bo'ladigan) bo'lishi mumkin."
    }
  },
  {
    "id": 73,
    "tier": 3,
    "tierName": "3-Bosqich: Ko'p Interfeyslarni Bir Vaqtda Amalga Oshirish",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "73. Bellissimo Pizza — Bir Nechta Interfeysni Qo'llash",
      "en": "73. Bellissimo Pizza — Multiple Interface Implementation"
    },
    "scenario": {
      "uz": "Bellissimo Pizza da 'PizzaOrderNode' klassi ikkita interfeysni bir vaqtda amalga oshirsin: 'implements IPizzaOrderPrintable, IPizzaOrderAuditable'. Ikkala metodni ham yozing.",
      "en": "Implement multiple interfaces in Bellissimo Pizza: 'PizzaOrderNode implements IPizzaOrderPrintable, IPizzaOrderAuditable'."
    },
    "requirements": {
      "classes": [
        "IPizzaOrderPrintable",
        "IPizzaOrderAuditable",
        "PizzaOrderNode"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IPizzaOrderPrintable { void printData(); }\ninterface IPizzaOrderAuditable { void auditLog(); }\n\nclass PizzaOrderNode implements IPizzaOrderPrintable, IPizzaOrderAuditable {\n    @Override public void printData() { System.out.println(\"Bellissimo Pizza: Chop etildi\"); }\n    @Override public void auditLog() { System.out.println(\"Bellissimo Pizza: Audit qilindi\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PizzaOrderNode node = new PizzaOrderNode();\n        node.printData();\n        node.auditLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java sinflar uchun ko'p merosxo'rlikni taqiqlasa-da, interfeyslar orqali ko'p shartnomani bemalol amalga oshirishga ruxsat beradi (Multiple Inheritance of Type).",
      "theoryEn": "Java prohibits multiple class inheritance but embraces multiple interface implementation to compose capabilities safely.",
      "cleanCode": "class PizzaOrderNode implements IPizzaOrderPrintable, IPizzaOrderAuditable { ... }",
      "breakdown": [
        "<code>implements A, B</code>: Sinif bir nechta xarakterga ega bo'ladi."
      ],
      "pitfalls": "Agar ikkala interfeysda bir xil nomli default metod bo'lsa, 'Diamond problem' kelib chiqadi va sinf uni o'zi majburan qayta yozishi shart.",
      "cw2Tip": "Tovarlar bir vaqtning o'zida ham 'Printable' (chekda chiqadigan), ham 'Discountable' (chegirma bo'ladigan) bo'lishi mumkin."
    }
  },
  {
    "id": 74,
    "tier": 3,
    "tierName": "3-Bosqich: Ko'p Interfeyslarni Bir Vaqtda Amalga Oshirish",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "74. Milliy TV — Bir Nechta Interfeysni Qo'llash",
      "en": "74. Milliy TV — Multiple Interface Implementation"
    },
    "scenario": {
      "uz": "Milliy TV da 'BroadcastShowNode' klassi ikkita interfeysni bir vaqtda amalga oshirsin: 'implements IBroadcastShowPrintable, IBroadcastShowAuditable'. Ikkala metodni ham yozing.",
      "en": "Implement multiple interfaces in Milliy TV: 'BroadcastShowNode implements IBroadcastShowPrintable, IBroadcastShowAuditable'."
    },
    "requirements": {
      "classes": [
        "IBroadcastShowPrintable",
        "IBroadcastShowAuditable",
        "BroadcastShowNode"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IBroadcastShowPrintable { void printData(); }\ninterface IBroadcastShowAuditable { void auditLog(); }\n\nclass BroadcastShowNode implements IBroadcastShowPrintable, IBroadcastShowAuditable {\n    @Override public void printData() { System.out.println(\"Milliy TV: Chop etildi\"); }\n    @Override public void auditLog() { System.out.println(\"Milliy TV: Audit qilindi\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BroadcastShowNode node = new BroadcastShowNode();\n        node.printData();\n        node.auditLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java sinflar uchun ko'p merosxo'rlikni taqiqlasa-da, interfeyslar orqali ko'p shartnomani bemalol amalga oshirishga ruxsat beradi (Multiple Inheritance of Type).",
      "theoryEn": "Java prohibits multiple class inheritance but embraces multiple interface implementation to compose capabilities safely.",
      "cleanCode": "class BroadcastShowNode implements IBroadcastShowPrintable, IBroadcastShowAuditable { ... }",
      "breakdown": [
        "<code>implements A, B</code>: Sinif bir nechta xarakterga ega bo'ladi."
      ],
      "pitfalls": "Agar ikkala interfeysda bir xil nomli default metod bo'lsa, 'Diamond problem' kelib chiqadi va sinf uni o'zi majburan qayta yozishi shart.",
      "cw2Tip": "Tovarlar bir vaqtning o'zida ham 'Printable' (chekda chiqadigan), ham 'Discountable' (chegirma bo'ladigan) bo'lishi mumkin."
    }
  },
  {
    "id": 75,
    "tier": 3,
    "tierName": "3-Bosqich: Ko'p Interfeyslarni Bir Vaqtda Amalga Oshirish",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "75. Spotify Sound — Bir Nechta Interfeysni Qo'llash",
      "en": "75. Spotify Sound — Multiple Interface Implementation"
    },
    "scenario": {
      "uz": "Spotify Sound da 'AudioTrackNode' klassi ikkita interfeysni bir vaqtda amalga oshirsin: 'implements IAudioTrackPrintable, IAudioTrackAuditable'. Ikkala metodni ham yozing.",
      "en": "Implement multiple interfaces in Spotify Sound: 'AudioTrackNode implements IAudioTrackPrintable, IAudioTrackAuditable'."
    },
    "requirements": {
      "classes": [
        "IAudioTrackPrintable",
        "IAudioTrackAuditable",
        "AudioTrackNode"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IAudioTrackPrintable { void printData(); }\ninterface IAudioTrackAuditable { void auditLog(); }\n\nclass AudioTrackNode implements IAudioTrackPrintable, IAudioTrackAuditable {\n    @Override public void printData() { System.out.println(\"Spotify Sound: Chop etildi\"); }\n    @Override public void auditLog() { System.out.println(\"Spotify Sound: Audit qilindi\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AudioTrackNode node = new AudioTrackNode();\n        node.printData();\n        node.auditLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java sinflar uchun ko'p merosxo'rlikni taqiqlasa-da, interfeyslar orqali ko'p shartnomani bemalol amalga oshirishga ruxsat beradi (Multiple Inheritance of Type).",
      "theoryEn": "Java prohibits multiple class inheritance but embraces multiple interface implementation to compose capabilities safely.",
      "cleanCode": "class AudioTrackNode implements IAudioTrackPrintable, IAudioTrackAuditable { ... }",
      "breakdown": [
        "<code>implements A, B</code>: Sinif bir nechta xarakterga ega bo'ladi."
      ],
      "pitfalls": "Agar ikkala interfeysda bir xil nomli default metod bo'lsa, 'Diamond problem' kelib chiqadi va sinf uni o'zi majburan qayta yozishi shart.",
      "cw2Tip": "Tovarlar bir vaqtning o'zida ham 'Printable' (chekda chiqadigan), ham 'Discountable' (chegirma bo'ladigan) bo'lishi mumkin."
    }
  },
  {
    "id": 76,
    "tier": 3,
    "tierName": "3-Bosqich: Ko'p Interfeyslarni Bir Vaqtda Amalga Oshirish",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "76. Smart Thermostat — Bir Nechta Interfeysni Qo'llash",
      "en": "76. Smart Thermostat — Multiple Interface Implementation"
    },
    "scenario": {
      "uz": "Smart Thermostat da 'ThermostatNode' klassi ikkita interfeysni bir vaqtda amalga oshirsin: 'implements IThermostatPrintable, IThermostatAuditable'. Ikkala metodni ham yozing.",
      "en": "Implement multiple interfaces in Smart Thermostat: 'ThermostatNode implements IThermostatPrintable, IThermostatAuditable'."
    },
    "requirements": {
      "classes": [
        "IThermostatPrintable",
        "IThermostatAuditable",
        "ThermostatNode"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IThermostatPrintable { void printData(); }\ninterface IThermostatAuditable { void auditLog(); }\n\nclass ThermostatNode implements IThermostatPrintable, IThermostatAuditable {\n    @Override public void printData() { System.out.println(\"Smart Thermostat: Chop etildi\"); }\n    @Override public void auditLog() { System.out.println(\"Smart Thermostat: Audit qilindi\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ThermostatNode node = new ThermostatNode();\n        node.printData();\n        node.auditLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java sinflar uchun ko'p merosxo'rlikni taqiqlasa-da, interfeyslar orqali ko'p shartnomani bemalol amalga oshirishga ruxsat beradi (Multiple Inheritance of Type).",
      "theoryEn": "Java prohibits multiple class inheritance but embraces multiple interface implementation to compose capabilities safely.",
      "cleanCode": "class ThermostatNode implements IThermostatPrintable, IThermostatAuditable { ... }",
      "breakdown": [
        "<code>implements A, B</code>: Sinif bir nechta xarakterga ega bo'ladi."
      ],
      "pitfalls": "Agar ikkala interfeysda bir xil nomli default metod bo'lsa, 'Diamond problem' kelib chiqadi va sinf uni o'zi majburan qayta yozishi shart.",
      "cw2Tip": "Tovarlar bir vaqtning o'zida ham 'Printable' (chekda chiqadigan), ham 'Discountable' (chegirma bo'ladigan) bo'lishi mumkin."
    }
  },
  {
    "id": 77,
    "tier": 3,
    "tierName": "3-Bosqich: Ko'p Interfeyslarni Bir Vaqtda Amalga Oshirish",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "77. Drone Delivery — Bir Nechta Interfeysni Qo'llash",
      "en": "77. Drone Delivery — Multiple Interface Implementation"
    },
    "scenario": {
      "uz": "Drone Delivery da 'DeliveryDroneNode' klassi ikkita interfeysni bir vaqtda amalga oshirsin: 'implements IDeliveryDronePrintable, IDeliveryDroneAuditable'. Ikkala metodni ham yozing.",
      "en": "Implement multiple interfaces in Drone Delivery: 'DeliveryDroneNode implements IDeliveryDronePrintable, IDeliveryDroneAuditable'."
    },
    "requirements": {
      "classes": [
        "IDeliveryDronePrintable",
        "IDeliveryDroneAuditable",
        "DeliveryDroneNode"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IDeliveryDronePrintable { void printData(); }\ninterface IDeliveryDroneAuditable { void auditLog(); }\n\nclass DeliveryDroneNode implements IDeliveryDronePrintable, IDeliveryDroneAuditable {\n    @Override public void printData() { System.out.println(\"Drone Delivery: Chop etildi\"); }\n    @Override public void auditLog() { System.out.println(\"Drone Delivery: Audit qilindi\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DeliveryDroneNode node = new DeliveryDroneNode();\n        node.printData();\n        node.auditLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java sinflar uchun ko'p merosxo'rlikni taqiqlasa-da, interfeyslar orqali ko'p shartnomani bemalol amalga oshirishga ruxsat beradi (Multiple Inheritance of Type).",
      "theoryEn": "Java prohibits multiple class inheritance but embraces multiple interface implementation to compose capabilities safely.",
      "cleanCode": "class DeliveryDroneNode implements IDeliveryDronePrintable, IDeliveryDroneAuditable { ... }",
      "breakdown": [
        "<code>implements A, B</code>: Sinif bir nechta xarakterga ega bo'ladi."
      ],
      "pitfalls": "Agar ikkala interfeysda bir xil nomli default metod bo'lsa, 'Diamond problem' kelib chiqadi va sinf uni o'zi majburan qayta yozishi shart.",
      "cw2Tip": "Tovarlar bir vaqtning o'zida ham 'Printable' (chekda chiqadigan), ham 'Discountable' (chegirma bo'ladigan) bo'lishi mumkin."
    }
  },
  {
    "id": 78,
    "tier": 3,
    "tierName": "3-Bosqich: Ko'p Interfeyslarni Bir Vaqtda Amalga Oshirish",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "78. Smart Warehouse — Bir Nechta Interfeysni Qo'llash",
      "en": "78. Smart Warehouse — Multiple Interface Implementation"
    },
    "scenario": {
      "uz": "Smart Warehouse da 'StorageBayNode' klassi ikkita interfeysni bir vaqtda amalga oshirsin: 'implements IStorageBayPrintable, IStorageBayAuditable'. Ikkala metodni ham yozing.",
      "en": "Implement multiple interfaces in Smart Warehouse: 'StorageBayNode implements IStorageBayPrintable, IStorageBayAuditable'."
    },
    "requirements": {
      "classes": [
        "IStorageBayPrintable",
        "IStorageBayAuditable",
        "StorageBayNode"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IStorageBayPrintable { void printData(); }\ninterface IStorageBayAuditable { void auditLog(); }\n\nclass StorageBayNode implements IStorageBayPrintable, IStorageBayAuditable {\n    @Override public void printData() { System.out.println(\"Smart Warehouse: Chop etildi\"); }\n    @Override public void auditLog() { System.out.println(\"Smart Warehouse: Audit qilindi\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StorageBayNode node = new StorageBayNode();\n        node.printData();\n        node.auditLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java sinflar uchun ko'p merosxo'rlikni taqiqlasa-da, interfeyslar orqali ko'p shartnomani bemalol amalga oshirishga ruxsat beradi (Multiple Inheritance of Type).",
      "theoryEn": "Java prohibits multiple class inheritance but embraces multiple interface implementation to compose capabilities safely.",
      "cleanCode": "class StorageBayNode implements IStorageBayPrintable, IStorageBayAuditable { ... }",
      "breakdown": [
        "<code>implements A, B</code>: Sinif bir nechta xarakterga ega bo'ladi."
      ],
      "pitfalls": "Agar ikkala interfeysda bir xil nomli default metod bo'lsa, 'Diamond problem' kelib chiqadi va sinf uni o'zi majburan qayta yozishi shart.",
      "cw2Tip": "Tovarlar bir vaqtning o'zida ham 'Printable' (chekda chiqadigan), ham 'Discountable' (chegirma bo'ladigan) bo'lishi mumkin."
    }
  },
  {
    "id": 79,
    "tier": 3,
    "tierName": "3-Bosqich: Ko'p Interfeyslarni Bir Vaqtda Amalga Oshirish",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "79. Crypto Wallet — Bir Nechta Interfeysni Qo'llash",
      "en": "79. Crypto Wallet — Multiple Interface Implementation"
    },
    "scenario": {
      "uz": "Crypto Wallet da 'CryptoAssetNode' klassi ikkita interfeysni bir vaqtda amalga oshirsin: 'implements ICryptoAssetPrintable, ICryptoAssetAuditable'. Ikkala metodni ham yozing.",
      "en": "Implement multiple interfaces in Crypto Wallet: 'CryptoAssetNode implements ICryptoAssetPrintable, ICryptoAssetAuditable'."
    },
    "requirements": {
      "classes": [
        "ICryptoAssetPrintable",
        "ICryptoAssetAuditable",
        "CryptoAssetNode"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface ICryptoAssetPrintable { void printData(); }\ninterface ICryptoAssetAuditable { void auditLog(); }\n\nclass CryptoAssetNode implements ICryptoAssetPrintable, ICryptoAssetAuditable {\n    @Override public void printData() { System.out.println(\"Crypto Wallet: Chop etildi\"); }\n    @Override public void auditLog() { System.out.println(\"Crypto Wallet: Audit qilindi\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CryptoAssetNode node = new CryptoAssetNode();\n        node.printData();\n        node.auditLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java sinflar uchun ko'p merosxo'rlikni taqiqlasa-da, interfeyslar orqali ko'p shartnomani bemalol amalga oshirishga ruxsat beradi (Multiple Inheritance of Type).",
      "theoryEn": "Java prohibits multiple class inheritance but embraces multiple interface implementation to compose capabilities safely.",
      "cleanCode": "class CryptoAssetNode implements ICryptoAssetPrintable, ICryptoAssetAuditable { ... }",
      "breakdown": [
        "<code>implements A, B</code>: Sinif bir nechta xarakterga ega bo'ladi."
      ],
      "pitfalls": "Agar ikkala interfeysda bir xil nomli default metod bo'lsa, 'Diamond problem' kelib chiqadi va sinf uni o'zi majburan qayta yozishi shart.",
      "cw2Tip": "Tovarlar bir vaqtning o'zida ham 'Printable' (chekda chiqadigan), ham 'Discountable' (chegirma bo'ladigan) bo'lishi mumkin."
    }
  },
  {
    "id": 80,
    "tier": 3,
    "tierName": "3-Bosqich: Ko'p Interfeyslarni Bir Vaqtda Amalga Oshirish",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "80. National Library — Bir Nechta Interfeysni Qo'llash",
      "en": "80. National Library — Multiple Interface Implementation"
    },
    "scenario": {
      "uz": "National Library da 'CatalogBookNode' klassi ikkita interfeysni bir vaqtda amalga oshirsin: 'implements ICatalogBookPrintable, ICatalogBookAuditable'. Ikkala metodni ham yozing.",
      "en": "Implement multiple interfaces in National Library: 'CatalogBookNode implements ICatalogBookPrintable, ICatalogBookAuditable'."
    },
    "requirements": {
      "classes": [
        "ICatalogBookPrintable",
        "ICatalogBookAuditable",
        "CatalogBookNode"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface ICatalogBookPrintable { void printData(); }\ninterface ICatalogBookAuditable { void auditLog(); }\n\nclass CatalogBookNode implements ICatalogBookPrintable, ICatalogBookAuditable {\n    @Override public void printData() { System.out.println(\"National Library: Chop etildi\"); }\n    @Override public void auditLog() { System.out.println(\"National Library: Audit qilindi\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CatalogBookNode node = new CatalogBookNode();\n        node.printData();\n        node.auditLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java sinflar uchun ko'p merosxo'rlikni taqiqlasa-da, interfeyslar orqali ko'p shartnomani bemalol amalga oshirishga ruxsat beradi (Multiple Inheritance of Type).",
      "theoryEn": "Java prohibits multiple class inheritance but embraces multiple interface implementation to compose capabilities safely.",
      "cleanCode": "class CatalogBookNode implements ICatalogBookPrintable, ICatalogBookAuditable { ... }",
      "breakdown": [
        "<code>implements A, B</code>: Sinif bir nechta xarakterga ega bo'ladi."
      ],
      "pitfalls": "Agar ikkala interfeysda bir xil nomli default metod bo'lsa, 'Diamond problem' kelib chiqadi va sinf uni o'zi majburan qayta yozishi shart.",
      "cw2Tip": "Tovarlar bir vaqtning o'zida ham 'Printable' (chekda chiqadigan), ham 'Discountable' (chegirma bo'ladigan) bo'lishi mumkin."
    }
  },
  {
    "id": 81,
    "tier": 3,
    "tierName": "3-Bosqich: Ko'p Interfeyslarni Bir Vaqtda Amalga Oshirish",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "81. BeFit Club — Bir Nechta Interfeysni Qo'llash",
      "en": "81. BeFit Club — Multiple Interface Implementation"
    },
    "scenario": {
      "uz": "BeFit Club da 'GymMemberNode' klassi ikkita interfeysni bir vaqtda amalga oshirsin: 'implements IGymMemberPrintable, IGymMemberAuditable'. Ikkala metodni ham yozing.",
      "en": "Implement multiple interfaces in BeFit Club: 'GymMemberNode implements IGymMemberPrintable, IGymMemberAuditable'."
    },
    "requirements": {
      "classes": [
        "IGymMemberPrintable",
        "IGymMemberAuditable",
        "GymMemberNode"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IGymMemberPrintable { void printData(); }\ninterface IGymMemberAuditable { void auditLog(); }\n\nclass GymMemberNode implements IGymMemberPrintable, IGymMemberAuditable {\n    @Override public void printData() { System.out.println(\"BeFit Club: Chop etildi\"); }\n    @Override public void auditLog() { System.out.println(\"BeFit Club: Audit qilindi\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GymMemberNode node = new GymMemberNode();\n        node.printData();\n        node.auditLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java sinflar uchun ko'p merosxo'rlikni taqiqlasa-da, interfeyslar orqali ko'p shartnomani bemalol amalga oshirishga ruxsat beradi (Multiple Inheritance of Type).",
      "theoryEn": "Java prohibits multiple class inheritance but embraces multiple interface implementation to compose capabilities safely.",
      "cleanCode": "class GymMemberNode implements IGymMemberPrintable, IGymMemberAuditable { ... }",
      "breakdown": [
        "<code>implements A, B</code>: Sinif bir nechta xarakterga ega bo'ladi."
      ],
      "pitfalls": "Agar ikkala interfeysda bir xil nomli default metod bo'lsa, 'Diamond problem' kelib chiqadi va sinf uni o'zi majburan qayta yozishi shart.",
      "cw2Tip": "Tovarlar bir vaqtning o'zida ham 'Printable' (chekda chiqadigan), ham 'Discountable' (chegirma bo'ladigan) bo'lishi mumkin."
    }
  },
  {
    "id": 82,
    "tier": 3,
    "tierName": "3-Bosqich: Ko'p Interfeyslarni Bir Vaqtda Amalga Oshirish",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "82. Tashkent Parking — Bir Nechta Interfeysni Qo'llash",
      "en": "82. Tashkent Parking — Multiple Interface Implementation"
    },
    "scenario": {
      "uz": "Tashkent Parking da 'ParkingBayNode' klassi ikkita interfeysni bir vaqtda amalga oshirsin: 'implements IParkingBayPrintable, IParkingBayAuditable'. Ikkala metodni ham yozing.",
      "en": "Implement multiple interfaces in Tashkent Parking: 'ParkingBayNode implements IParkingBayPrintable, IParkingBayAuditable'."
    },
    "requirements": {
      "classes": [
        "IParkingBayPrintable",
        "IParkingBayAuditable",
        "ParkingBayNode"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IParkingBayPrintable { void printData(); }\ninterface IParkingBayAuditable { void auditLog(); }\n\nclass ParkingBayNode implements IParkingBayPrintable, IParkingBayAuditable {\n    @Override public void printData() { System.out.println(\"Tashkent Parking: Chop etildi\"); }\n    @Override public void auditLog() { System.out.println(\"Tashkent Parking: Audit qilindi\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ParkingBayNode node = new ParkingBayNode();\n        node.printData();\n        node.auditLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java sinflar uchun ko'p merosxo'rlikni taqiqlasa-da, interfeyslar orqali ko'p shartnomani bemalol amalga oshirishga ruxsat beradi (Multiple Inheritance of Type).",
      "theoryEn": "Java prohibits multiple class inheritance but embraces multiple interface implementation to compose capabilities safely.",
      "cleanCode": "class ParkingBayNode implements IParkingBayPrintable, IParkingBayAuditable { ... }",
      "breakdown": [
        "<code>implements A, B</code>: Sinif bir nechta xarakterga ega bo'ladi."
      ],
      "pitfalls": "Agar ikkala interfeysda bir xil nomli default metod bo'lsa, 'Diamond problem' kelib chiqadi va sinf uni o'zi majburan qayta yozishi shart.",
      "cw2Tip": "Tovarlar bir vaqtning o'zida ham 'Printable' (chekda chiqadigan), ham 'Discountable' (chegirma bo'ladigan) bo'lishi mumkin."
    }
  },
  {
    "id": 83,
    "tier": 3,
    "tierName": "3-Bosqich: Ko'p Interfeyslarni Bir Vaqtda Amalga Oshirish",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "83. Medion Clinic — Bir Nechta Interfeysni Qo'llash",
      "en": "83. Medion Clinic — Multiple Interface Implementation"
    },
    "scenario": {
      "uz": "Medion Clinic da 'PatientRecordNode' klassi ikkita interfeysni bir vaqtda amalga oshirsin: 'implements IPatientRecordPrintable, IPatientRecordAuditable'. Ikkala metodni ham yozing.",
      "en": "Implement multiple interfaces in Medion Clinic: 'PatientRecordNode implements IPatientRecordPrintable, IPatientRecordAuditable'."
    },
    "requirements": {
      "classes": [
        "IPatientRecordPrintable",
        "IPatientRecordAuditable",
        "PatientRecordNode"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IPatientRecordPrintable { void printData(); }\ninterface IPatientRecordAuditable { void auditLog(); }\n\nclass PatientRecordNode implements IPatientRecordPrintable, IPatientRecordAuditable {\n    @Override public void printData() { System.out.println(\"Medion Clinic: Chop etildi\"); }\n    @Override public void auditLog() { System.out.println(\"Medion Clinic: Audit qilindi\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PatientRecordNode node = new PatientRecordNode();\n        node.printData();\n        node.auditLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java sinflar uchun ko'p merosxo'rlikni taqiqlasa-da, interfeyslar orqali ko'p shartnomani bemalol amalga oshirishga ruxsat beradi (Multiple Inheritance of Type).",
      "theoryEn": "Java prohibits multiple class inheritance but embraces multiple interface implementation to compose capabilities safely.",
      "cleanCode": "class PatientRecordNode implements IPatientRecordPrintable, IPatientRecordAuditable { ... }",
      "breakdown": [
        "<code>implements A, B</code>: Sinif bir nechta xarakterga ega bo'ladi."
      ],
      "pitfalls": "Agar ikkala interfeysda bir xil nomli default metod bo'lsa, 'Diamond problem' kelib chiqadi va sinf uni o'zi majburan qayta yozishi shart.",
      "cw2Tip": "Tovarlar bir vaqtning o'zida ham 'Printable' (chekda chiqadigan), ham 'Discountable' (chegirma bo'ladigan) bo'lishi mumkin."
    }
  },
  {
    "id": 84,
    "tier": 3,
    "tierName": "3-Bosqich: Ko'p Interfeyslarni Bir Vaqtda Amalga Oshirish",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "84. Hyatt Regency — Bir Nechta Interfeysni Qo'llash",
      "en": "84. Hyatt Regency — Multiple Interface Implementation"
    },
    "scenario": {
      "uz": "Hyatt Regency da 'HotelReservationNode' klassi ikkita interfeysni bir vaqtda amalga oshirsin: 'implements IHotelReservationPrintable, IHotelReservationAuditable'. Ikkala metodni ham yozing.",
      "en": "Implement multiple interfaces in Hyatt Regency: 'HotelReservationNode implements IHotelReservationPrintable, IHotelReservationAuditable'."
    },
    "requirements": {
      "classes": [
        "IHotelReservationPrintable",
        "IHotelReservationAuditable",
        "HotelReservationNode"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IHotelReservationPrintable { void printData(); }\ninterface IHotelReservationAuditable { void auditLog(); }\n\nclass HotelReservationNode implements IHotelReservationPrintable, IHotelReservationAuditable {\n    @Override public void printData() { System.out.println(\"Hyatt Regency: Chop etildi\"); }\n    @Override public void auditLog() { System.out.println(\"Hyatt Regency: Audit qilindi\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        HotelReservationNode node = new HotelReservationNode();\n        node.printData();\n        node.auditLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java sinflar uchun ko'p merosxo'rlikni taqiqlasa-da, interfeyslar orqali ko'p shartnomani bemalol amalga oshirishga ruxsat beradi (Multiple Inheritance of Type).",
      "theoryEn": "Java prohibits multiple class inheritance but embraces multiple interface implementation to compose capabilities safely.",
      "cleanCode": "class HotelReservationNode implements IHotelReservationPrintable, IHotelReservationAuditable { ... }",
      "breakdown": [
        "<code>implements A, B</code>: Sinif bir nechta xarakterga ega bo'ladi."
      ],
      "pitfalls": "Agar ikkala interfeysda bir xil nomli default metod bo'lsa, 'Diamond problem' kelib chiqadi va sinf uni o'zi majburan qayta yozishi shart.",
      "cw2Tip": "Tovarlar bir vaqtning o'zida ham 'Printable' (chekda chiqadigan), ham 'Discountable' (chegirma bo'ladigan) bo'lishi mumkin."
    }
  },
  {
    "id": 85,
    "tier": 3,
    "tierName": "3-Bosqich: Ko'p Interfeyslarni Bir Vaqtda Amalga Oshirish",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "85. Premier Cinema — Bir Nechta Interfeysni Qo'llash",
      "en": "85. Premier Cinema — Multiple Interface Implementation"
    },
    "scenario": {
      "uz": "Premier Cinema da 'CinemaTicketNode' klassi ikkita interfeysni bir vaqtda amalga oshirsin: 'implements ICinemaTicketPrintable, ICinemaTicketAuditable'. Ikkala metodni ham yozing.",
      "en": "Implement multiple interfaces in Premier Cinema: 'CinemaTicketNode implements ICinemaTicketPrintable, ICinemaTicketAuditable'."
    },
    "requirements": {
      "classes": [
        "ICinemaTicketPrintable",
        "ICinemaTicketAuditable",
        "CinemaTicketNode"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface ICinemaTicketPrintable { void printData(); }\ninterface ICinemaTicketAuditable { void auditLog(); }\n\nclass CinemaTicketNode implements ICinemaTicketPrintable, ICinemaTicketAuditable {\n    @Override public void printData() { System.out.println(\"Premier Cinema: Chop etildi\"); }\n    @Override public void auditLog() { System.out.println(\"Premier Cinema: Audit qilindi\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CinemaTicketNode node = new CinemaTicketNode();\n        node.printData();\n        node.auditLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java sinflar uchun ko'p merosxo'rlikni taqiqlasa-da, interfeyslar orqali ko'p shartnomani bemalol amalga oshirishga ruxsat beradi (Multiple Inheritance of Type).",
      "theoryEn": "Java prohibits multiple class inheritance but embraces multiple interface implementation to compose capabilities safely.",
      "cleanCode": "class CinemaTicketNode implements ICinemaTicketPrintable, ICinemaTicketAuditable { ... }",
      "breakdown": [
        "<code>implements A, B</code>: Sinif bir nechta xarakterga ega bo'ladi."
      ],
      "pitfalls": "Agar ikkala interfeysda bir xil nomli default metod bo'lsa, 'Diamond problem' kelib chiqadi va sinf uni o'zi majburan qayta yozishi shart.",
      "cw2Tip": "Tovarlar bir vaqtning o'zida ham 'Printable' (chekda chiqadigan), ham 'Discountable' (chegirma bo'ladigan) bo'lishi mumkin."
    }
  },
  {
    "id": 86,
    "tier": 3,
    "tierName": "3-Bosqich: Ko'p Interfeyslarni Bir Vaqtda Amalga Oshirish",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "86. Yandex Scooter — Bir Nechta Interfeysni Qo'llash",
      "en": "86. Yandex Scooter — Multiple Interface Implementation"
    },
    "scenario": {
      "uz": "Yandex Scooter da 'ElectricScooterNode' klassi ikkita interfeysni bir vaqtda amalga oshirsin: 'implements IElectricScooterPrintable, IElectricScooterAuditable'. Ikkala metodni ham yozing.",
      "en": "Implement multiple interfaces in Yandex Scooter: 'ElectricScooterNode implements IElectricScooterPrintable, IElectricScooterAuditable'."
    },
    "requirements": {
      "classes": [
        "IElectricScooterPrintable",
        "IElectricScooterAuditable",
        "ElectricScooterNode"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IElectricScooterPrintable { void printData(); }\ninterface IElectricScooterAuditable { void auditLog(); }\n\nclass ElectricScooterNode implements IElectricScooterPrintable, IElectricScooterAuditable {\n    @Override public void printData() { System.out.println(\"Yandex Scooter: Chop etildi\"); }\n    @Override public void auditLog() { System.out.println(\"Yandex Scooter: Audit qilindi\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ElectricScooterNode node = new ElectricScooterNode();\n        node.printData();\n        node.auditLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java sinflar uchun ko'p merosxo'rlikni taqiqlasa-da, interfeyslar orqali ko'p shartnomani bemalol amalga oshirishga ruxsat beradi (Multiple Inheritance of Type).",
      "theoryEn": "Java prohibits multiple class inheritance but embraces multiple interface implementation to compose capabilities safely.",
      "cleanCode": "class ElectricScooterNode implements IElectricScooterPrintable, IElectricScooterAuditable { ... }",
      "breakdown": [
        "<code>implements A, B</code>: Sinif bir nechta xarakterga ega bo'ladi."
      ],
      "pitfalls": "Agar ikkala interfeysda bir xil nomli default metod bo'lsa, 'Diamond problem' kelib chiqadi va sinf uni o'zi majburan qayta yozishi shart.",
      "cw2Tip": "Tovarlar bir vaqtning o'zida ham 'Printable' (chekda chiqadigan), ham 'Discountable' (chegirma bo'ladigan) bo'lishi mumkin."
    }
  },
  {
    "id": 87,
    "tier": 3,
    "tierName": "3-Bosqich: Ko'p Interfeyslarni Bir Vaqtda Amalga Oshirish",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "87. Weather Network — Bir Nechta Interfeysni Qo'llash",
      "en": "87. Weather Network — Multiple Interface Implementation"
    },
    "scenario": {
      "uz": "Weather Network da 'MeteoStationNode' klassi ikkita interfeysni bir vaqtda amalga oshirsin: 'implements IMeteoStationPrintable, IMeteoStationAuditable'. Ikkala metodni ham yozing.",
      "en": "Implement multiple interfaces in Weather Network: 'MeteoStationNode implements IMeteoStationPrintable, IMeteoStationAuditable'."
    },
    "requirements": {
      "classes": [
        "IMeteoStationPrintable",
        "IMeteoStationAuditable",
        "MeteoStationNode"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IMeteoStationPrintable { void printData(); }\ninterface IMeteoStationAuditable { void auditLog(); }\n\nclass MeteoStationNode implements IMeteoStationPrintable, IMeteoStationAuditable {\n    @Override public void printData() { System.out.println(\"Weather Network: Chop etildi\"); }\n    @Override public void auditLog() { System.out.println(\"Weather Network: Audit qilindi\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MeteoStationNode node = new MeteoStationNode();\n        node.printData();\n        node.auditLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java sinflar uchun ko'p merosxo'rlikni taqiqlasa-da, interfeyslar orqali ko'p shartnomani bemalol amalga oshirishga ruxsat beradi (Multiple Inheritance of Type).",
      "theoryEn": "Java prohibits multiple class inheritance but embraces multiple interface implementation to compose capabilities safely.",
      "cleanCode": "class MeteoStationNode implements IMeteoStationPrintable, IMeteoStationAuditable { ... }",
      "breakdown": [
        "<code>implements A, B</code>: Sinif bir nechta xarakterga ega bo'ladi."
      ],
      "pitfalls": "Agar ikkala interfeysda bir xil nomli default metod bo'lsa, 'Diamond problem' kelib chiqadi va sinf uni o'zi majburan qayta yozishi shart.",
      "cw2Tip": "Tovarlar bir vaqtning o'zida ham 'Printable' (chekda chiqadigan), ham 'Discountable' (chegirma bo'ladigan) bo'lishi mumkin."
    }
  },
  {
    "id": 88,
    "tier": 3,
    "tierName": "3-Bosqich: Ko'p Interfeyslarni Bir Vaqtda Amalga Oshirish",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "88. OpenMarket Auction — Bir Nechta Interfeysni Qo'llash",
      "en": "88. OpenMarket Auction — Multiple Interface Implementation"
    },
    "scenario": {
      "uz": "OpenMarket Auction da 'AuctionLotNode' klassi ikkita interfeysni bir vaqtda amalga oshirsin: 'implements IAuctionLotPrintable, IAuctionLotAuditable'. Ikkala metodni ham yozing.",
      "en": "Implement multiple interfaces in OpenMarket Auction: 'AuctionLotNode implements IAuctionLotPrintable, IAuctionLotAuditable'."
    },
    "requirements": {
      "classes": [
        "IAuctionLotPrintable",
        "IAuctionLotAuditable",
        "AuctionLotNode"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IAuctionLotPrintable { void printData(); }\ninterface IAuctionLotAuditable { void auditLog(); }\n\nclass AuctionLotNode implements IAuctionLotPrintable, IAuctionLotAuditable {\n    @Override public void printData() { System.out.println(\"OpenMarket Auction: Chop etildi\"); }\n    @Override public void auditLog() { System.out.println(\"OpenMarket Auction: Audit qilindi\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AuctionLotNode node = new AuctionLotNode();\n        node.printData();\n        node.auditLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java sinflar uchun ko'p merosxo'rlikni taqiqlasa-da, interfeyslar orqali ko'p shartnomani bemalol amalga oshirishga ruxsat beradi (Multiple Inheritance of Type).",
      "theoryEn": "Java prohibits multiple class inheritance but embraces multiple interface implementation to compose capabilities safely.",
      "cleanCode": "class AuctionLotNode implements IAuctionLotPrintable, IAuctionLotAuditable { ... }",
      "breakdown": [
        "<code>implements A, B</code>: Sinif bir nechta xarakterga ega bo'ladi."
      ],
      "pitfalls": "Agar ikkala interfeysda bir xil nomli default metod bo'lsa, 'Diamond problem' kelib chiqadi va sinf uni o'zi majburan qayta yozishi shart.",
      "cw2Tip": "Tovarlar bir vaqtning o'zida ham 'Printable' (chekda chiqadigan), ham 'Discountable' (chegirma bo'ladigan) bo'lishi mumkin."
    }
  },
  {
    "id": 89,
    "tier": 3,
    "tierName": "3-Bosqich: Ko'p Interfeyslarni Bir Vaqtda Amalga Oshirish",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "89. Solar Energy Grid — Bir Nechta Interfeysni Qo'llash",
      "en": "89. Solar Energy Grid — Multiple Interface Implementation"
    },
    "scenario": {
      "uz": "Solar Energy Grid da 'SolarInverterNode' klassi ikkita interfeysni bir vaqtda amalga oshirsin: 'implements ISolarInverterPrintable, ISolarInverterAuditable'. Ikkala metodni ham yozing.",
      "en": "Implement multiple interfaces in Solar Energy Grid: 'SolarInverterNode implements ISolarInverterPrintable, ISolarInverterAuditable'."
    },
    "requirements": {
      "classes": [
        "ISolarInverterPrintable",
        "ISolarInverterAuditable",
        "SolarInverterNode"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface ISolarInverterPrintable { void printData(); }\ninterface ISolarInverterAuditable { void auditLog(); }\n\nclass SolarInverterNode implements ISolarInverterPrintable, ISolarInverterAuditable {\n    @Override public void printData() { System.out.println(\"Solar Energy Grid: Chop etildi\"); }\n    @Override public void auditLog() { System.out.println(\"Solar Energy Grid: Audit qilindi\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SolarInverterNode node = new SolarInverterNode();\n        node.printData();\n        node.auditLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java sinflar uchun ko'p merosxo'rlikni taqiqlasa-da, interfeyslar orqali ko'p shartnomani bemalol amalga oshirishga ruxsat beradi (Multiple Inheritance of Type).",
      "theoryEn": "Java prohibits multiple class inheritance but embraces multiple interface implementation to compose capabilities safely.",
      "cleanCode": "class SolarInverterNode implements ISolarInverterPrintable, ISolarInverterAuditable { ... }",
      "breakdown": [
        "<code>implements A, B</code>: Sinif bir nechta xarakterga ega bo'ladi."
      ],
      "pitfalls": "Agar ikkala interfeysda bir xil nomli default metod bo'lsa, 'Diamond problem' kelib chiqadi va sinf uni o'zi majburan qayta yozishi shart.",
      "cw2Tip": "Tovarlar bir vaqtning o'zida ham 'Printable' (chekda chiqadigan), ham 'Discountable' (chegirma bo'ladigan) bo'lishi mumkin."
    }
  },
  {
    "id": 90,
    "tier": 3,
    "tierName": "3-Bosqich: Ko'p Interfeyslarni Bir Vaqtda Amalga Oshirish",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "90. O'zbekiston Temir Yo'llari — Bir Nechta Interfeysni Qo'llash",
      "en": "90. O'zbekiston Temir Yo'llari — Multiple Interface Implementation"
    },
    "scenario": {
      "uz": "O'zbekiston Temir Yo'llari da 'TrainRouteNode' klassi ikkita interfeysni bir vaqtda amalga oshirsin: 'implements ITrainRoutePrintable, ITrainRouteAuditable'. Ikkala metodni ham yozing.",
      "en": "Implement multiple interfaces in O'zbekiston Temir Yo'llari: 'TrainRouteNode implements ITrainRoutePrintable, ITrainRouteAuditable'."
    },
    "requirements": {
      "classes": [
        "ITrainRoutePrintable",
        "ITrainRouteAuditable",
        "TrainRouteNode"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface ITrainRoutePrintable { void printData(); }\ninterface ITrainRouteAuditable { void auditLog(); }\n\nclass TrainRouteNode implements ITrainRoutePrintable, ITrainRouteAuditable {\n    @Override public void printData() { System.out.println(\"O'zbekiston Temir Yo'llari: Chop etildi\"); }\n    @Override public void auditLog() { System.out.println(\"O'zbekiston Temir Yo'llari: Audit qilindi\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TrainRouteNode node = new TrainRouteNode();\n        node.printData();\n        node.auditLog();\n    }\n}",
    "detailedSolution": {
      "theory": "Java sinflar uchun ko'p merosxo'rlikni taqiqlasa-da, interfeyslar orqali ko'p shartnomani bemalol amalga oshirishga ruxsat beradi (Multiple Inheritance of Type).",
      "theoryEn": "Java prohibits multiple class inheritance but embraces multiple interface implementation to compose capabilities safely.",
      "cleanCode": "class TrainRouteNode implements ITrainRoutePrintable, ITrainRouteAuditable { ... }",
      "breakdown": [
        "<code>implements A, B</code>: Sinif bir nechta xarakterga ega bo'ladi."
      ],
      "pitfalls": "Agar ikkala interfeysda bir xil nomli default metod bo'lsa, 'Diamond problem' kelib chiqadi va sinf uni o'zi majburan qayta yozishi shart.",
      "cw2Tip": "Tovarlar bir vaqtning o'zida ham 'Printable' (chekda chiqadigan), ham 'Discountable' (chegirma bo'ladigan) bo'lishi mumkin."
    }
  },
  {
    "id": 91,
    "tier": 4,
    "tierName": "4-Bosqich: Bo'sh Bog'lanish (Loose Coupling) & DI",
    "sector": "Arxitektura",
    "title": {
      "uz": "91. Uzum Market — Konstruktor Orqali Dependency Injection",
      "en": "91. Uzum Market — Loose Coupling & Dependency Injection"
    },
    "scenario": {
      "uz": "Uzum Market da 'ProductClient' klassi to'g'ridan-to'g'ri aniq sinfga emas, 'IProductGateway' interfeysiga bog'lansin. Konstruktor orqali 'IProductGateway' qabul qilib saqlang.",
      "en": "Decouple Uzum Market: 'ProductClient' depends on interface 'IProductGateway' injected via constructor."
    },
    "requirements": {
      "classes": [
        "IProductGateway",
        "LocalProductGateway",
        "ProductClient"
      ],
      "constructors": [
        "ProductClient"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IProductGateway { void send(); }\n\nclass LocalProductGateway implements IProductGateway {\n    @Override public void send() { System.out.println(\"Uzum Market: Xabar yuborildi.\"); }\n}\n\nclass ProductClient {\n    private IProductGateway gateway;\n    public ProductClient(IProductGateway gateway) {\n        this.gateway = gateway;\n    }\n    public void execute() { gateway.send(); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ProductClient app = new ProductClient(new LocalProductGateway());\n        app.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Dependency Inversion (D in SOLID): Yuqori darajadagi modullar past darajadagi aniq sinflarga emas, balki abstraksiyaga (interfeysga) bog'lanishi kerak. Bu tizimni oson sinovdan o'tkazish (unit testing) imkonini beradi.",
      "theoryEn": "Dependency Inversion Principle (SOLID DIP): High-level modules depend upon abstractions rather than concrete lower-level details.",
      "cleanCode": "private IProductGateway gateway;\npublic ProductClient(IProductGateway gateway) { this.gateway = gateway; }",
      "breakdown": [
        "<code>ProductClient(IProductGateway gateway)</code>: Konstruktorda interfeys qabul qilib, istalgan boshqa gateway bilan almashtirish mumkin."
      ],
      "pitfalls": "Sinf ichida 'new AniqSinf()' deb to'g'ridan-to'g'ri yaratish qattiq bog'lanishga (tight coupling) olib keladi.",
      "cw2Tip": "CW2 da OrderController to'g'ridan-to'g'ri bitta to'lovga bog'lanib qolmasdan, 'IPaymentMethod' interfeysi orqali ishlaydi."
    }
  },
  {
    "id": 92,
    "tier": 4,
    "tierName": "4-Bosqich: Bo'sh Bog'lanish (Loose Coupling) & DI",
    "sector": "Arxitektura",
    "title": {
      "uz": "92. Payme Wallet — Konstruktor Orqali Dependency Injection",
      "en": "92. Payme Wallet — Loose Coupling & Dependency Injection"
    },
    "scenario": {
      "uz": "Payme Wallet da 'WalletUserClient' klassi to'g'ridan-to'g'ri aniq sinfga emas, 'IWalletUserGateway' interfeysiga bog'lansin. Konstruktor orqali 'IWalletUserGateway' qabul qilib saqlang.",
      "en": "Decouple Payme Wallet: 'WalletUserClient' depends on interface 'IWalletUserGateway' injected via constructor."
    },
    "requirements": {
      "classes": [
        "IWalletUserGateway",
        "LocalWalletUserGateway",
        "WalletUserClient"
      ],
      "constructors": [
        "WalletUserClient"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IWalletUserGateway { void send(); }\n\nclass LocalWalletUserGateway implements IWalletUserGateway {\n    @Override public void send() { System.out.println(\"Payme Wallet: Xabar yuborildi.\"); }\n}\n\nclass WalletUserClient {\n    private IWalletUserGateway gateway;\n    public WalletUserClient(IWalletUserGateway gateway) {\n        this.gateway = gateway;\n    }\n    public void execute() { gateway.send(); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WalletUserClient app = new WalletUserClient(new LocalWalletUserGateway());\n        app.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Dependency Inversion (D in SOLID): Yuqori darajadagi modullar past darajadagi aniq sinflarga emas, balki abstraksiyaga (interfeysga) bog'lanishi kerak. Bu tizimni oson sinovdan o'tkazish (unit testing) imkonini beradi.",
      "theoryEn": "Dependency Inversion Principle (SOLID DIP): High-level modules depend upon abstractions rather than concrete lower-level details.",
      "cleanCode": "private IWalletUserGateway gateway;\npublic WalletUserClient(IWalletUserGateway gateway) { this.gateway = gateway; }",
      "breakdown": [
        "<code>WalletUserClient(IWalletUserGateway gateway)</code>: Konstruktorda interfeys qabul qilib, istalgan boshqa gateway bilan almashtirish mumkin."
      ],
      "pitfalls": "Sinf ichida 'new AniqSinf()' deb to'g'ridan-to'g'ri yaratish qattiq bog'lanishga (tight coupling) olib keladi.",
      "cw2Tip": "CW2 da OrderController to'g'ridan-to'g'ri bitta to'lovga bog'lanib qolmasdan, 'IPaymentMethod' interfeysi orqali ishlaydi."
    }
  },
  {
    "id": 93,
    "tier": 4,
    "tierName": "4-Bosqich: Bo'sh Bog'lanish (Loose Coupling) & DI",
    "sector": "Arxitektura",
    "title": {
      "uz": "93. Yandex Go — Konstruktor Orqali Dependency Injection",
      "en": "93. Yandex Go — Loose Coupling & Dependency Injection"
    },
    "scenario": {
      "uz": "Yandex Go da 'TaxiRideClient' klassi to'g'ridan-to'g'ri aniq sinfga emas, 'ITaxiRideGateway' interfeysiga bog'lansin. Konstruktor orqali 'ITaxiRideGateway' qabul qilib saqlang.",
      "en": "Decouple Yandex Go: 'TaxiRideClient' depends on interface 'ITaxiRideGateway' injected via constructor."
    },
    "requirements": {
      "classes": [
        "ITaxiRideGateway",
        "LocalTaxiRideGateway",
        "TaxiRideClient"
      ],
      "constructors": [
        "TaxiRideClient"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface ITaxiRideGateway { void send(); }\n\nclass LocalTaxiRideGateway implements ITaxiRideGateway {\n    @Override public void send() { System.out.println(\"Yandex Go: Xabar yuborildi.\"); }\n}\n\nclass TaxiRideClient {\n    private ITaxiRideGateway gateway;\n    public TaxiRideClient(ITaxiRideGateway gateway) {\n        this.gateway = gateway;\n    }\n    public void execute() { gateway.send(); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TaxiRideClient app = new TaxiRideClient(new LocalTaxiRideGateway());\n        app.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Dependency Inversion (D in SOLID): Yuqori darajadagi modullar past darajadagi aniq sinflarga emas, balki abstraksiyaga (interfeysga) bog'lanishi kerak. Bu tizimni oson sinovdan o'tkazish (unit testing) imkonini beradi.",
      "theoryEn": "Dependency Inversion Principle (SOLID DIP): High-level modules depend upon abstractions rather than concrete lower-level details.",
      "cleanCode": "private ITaxiRideGateway gateway;\npublic TaxiRideClient(ITaxiRideGateway gateway) { this.gateway = gateway; }",
      "breakdown": [
        "<code>TaxiRideClient(ITaxiRideGateway gateway)</code>: Konstruktorda interfeys qabul qilib, istalgan boshqa gateway bilan almashtirish mumkin."
      ],
      "pitfalls": "Sinf ichida 'new AniqSinf()' deb to'g'ridan-to'g'ri yaratish qattiq bog'lanishga (tight coupling) olib keladi.",
      "cw2Tip": "CW2 da OrderController to'g'ridan-to'g'ri bitta to'lovga bog'lanib qolmasdan, 'IPaymentMethod' interfeysi orqali ishlaydi."
    }
  },
  {
    "id": 94,
    "tier": 4,
    "tierName": "4-Bosqich: Bo'sh Bog'lanish (Loose Coupling) & DI",
    "sector": "Arxitektura",
    "title": {
      "uz": "94. Korzinka Go — Konstruktor Orqali Dependency Injection",
      "en": "94. Korzinka Go — Loose Coupling & Dependency Injection"
    },
    "scenario": {
      "uz": "Korzinka Go da 'LoyaltyCardClient' klassi to'g'ridan-to'g'ri aniq sinfga emas, 'ILoyaltyCardGateway' interfeysiga bog'lansin. Konstruktor orqali 'ILoyaltyCardGateway' qabul qilib saqlang.",
      "en": "Decouple Korzinka Go: 'LoyaltyCardClient' depends on interface 'ILoyaltyCardGateway' injected via constructor."
    },
    "requirements": {
      "classes": [
        "ILoyaltyCardGateway",
        "LocalLoyaltyCardGateway",
        "LoyaltyCardClient"
      ],
      "constructors": [
        "LoyaltyCardClient"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface ILoyaltyCardGateway { void send(); }\n\nclass LocalLoyaltyCardGateway implements ILoyaltyCardGateway {\n    @Override public void send() { System.out.println(\"Korzinka Go: Xabar yuborildi.\"); }\n}\n\nclass LoyaltyCardClient {\n    private ILoyaltyCardGateway gateway;\n    public LoyaltyCardClient(ILoyaltyCardGateway gateway) {\n        this.gateway = gateway;\n    }\n    public void execute() { gateway.send(); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LoyaltyCardClient app = new LoyaltyCardClient(new LocalLoyaltyCardGateway());\n        app.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Dependency Inversion (D in SOLID): Yuqori darajadagi modullar past darajadagi aniq sinflarga emas, balki abstraksiyaga (interfeysga) bog'lanishi kerak. Bu tizimni oson sinovdan o'tkazish (unit testing) imkonini beradi.",
      "theoryEn": "Dependency Inversion Principle (SOLID DIP): High-level modules depend upon abstractions rather than concrete lower-level details.",
      "cleanCode": "private ILoyaltyCardGateway gateway;\npublic LoyaltyCardClient(ILoyaltyCardGateway gateway) { this.gateway = gateway; }",
      "breakdown": [
        "<code>LoyaltyCardClient(ILoyaltyCardGateway gateway)</code>: Konstruktorda interfeys qabul qilib, istalgan boshqa gateway bilan almashtirish mumkin."
      ],
      "pitfalls": "Sinf ichida 'new AniqSinf()' deb to'g'ridan-to'g'ri yaratish qattiq bog'lanishga (tight coupling) olib keladi.",
      "cw2Tip": "CW2 da OrderController to'g'ridan-to'g'ri bitta to'lovga bog'lanib qolmasdan, 'IPaymentMethod' interfeysi orqali ishlaydi."
    }
  },
  {
    "id": 95,
    "tier": 4,
    "tierName": "4-Bosqich: Bo'sh Bog'lanish (Loose Coupling) & DI",
    "sector": "Arxitektura",
    "title": {
      "uz": "95. WIUT Portal — Konstruktor Orqali Dependency Injection",
      "en": "95. WIUT Portal — Loose Coupling & Dependency Injection"
    },
    "scenario": {
      "uz": "WIUT Portal da 'StudentClient' klassi to'g'ridan-to'g'ri aniq sinfga emas, 'IStudentGateway' interfeysiga bog'lansin. Konstruktor orqali 'IStudentGateway' qabul qilib saqlang.",
      "en": "Decouple WIUT Portal: 'StudentClient' depends on interface 'IStudentGateway' injected via constructor."
    },
    "requirements": {
      "classes": [
        "IStudentGateway",
        "LocalStudentGateway",
        "StudentClient"
      ],
      "constructors": [
        "StudentClient"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IStudentGateway { void send(); }\n\nclass LocalStudentGateway implements IStudentGateway {\n    @Override public void send() { System.out.println(\"WIUT Portal: Xabar yuborildi.\"); }\n}\n\nclass StudentClient {\n    private IStudentGateway gateway;\n    public StudentClient(IStudentGateway gateway) {\n        this.gateway = gateway;\n    }\n    public void execute() { gateway.send(); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StudentClient app = new StudentClient(new LocalStudentGateway());\n        app.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Dependency Inversion (D in SOLID): Yuqori darajadagi modullar past darajadagi aniq sinflarga emas, balki abstraksiyaga (interfeysga) bog'lanishi kerak. Bu tizimni oson sinovdan o'tkazish (unit testing) imkonini beradi.",
      "theoryEn": "Dependency Inversion Principle (SOLID DIP): High-level modules depend upon abstractions rather than concrete lower-level details.",
      "cleanCode": "private IStudentGateway gateway;\npublic StudentClient(IStudentGateway gateway) { this.gateway = gateway; }",
      "breakdown": [
        "<code>StudentClient(IStudentGateway gateway)</code>: Konstruktorda interfeys qabul qilib, istalgan boshqa gateway bilan almashtirish mumkin."
      ],
      "pitfalls": "Sinf ichida 'new AniqSinf()' deb to'g'ridan-to'g'ri yaratish qattiq bog'lanishga (tight coupling) olib keladi.",
      "cw2Tip": "CW2 da OrderController to'g'ridan-to'g'ri bitta to'lovga bog'lanib qolmasdan, 'IPaymentMethod' interfeysi orqali ishlaydi."
    }
  },
  {
    "id": 96,
    "tier": 4,
    "tierName": "4-Bosqich: Bo'sh Bog'lanish (Loose Coupling) & DI",
    "sector": "Arxitektura",
    "title": {
      "uz": "96. Click Pay — Konstruktor Orqali Dependency Injection",
      "en": "96. Click Pay — Loose Coupling & Dependency Injection"
    },
    "scenario": {
      "uz": "Click Pay da 'PaymentTxnClient' klassi to'g'ridan-to'g'ri aniq sinfga emas, 'IPaymentTxnGateway' interfeysiga bog'lansin. Konstruktor orqali 'IPaymentTxnGateway' qabul qilib saqlang.",
      "en": "Decouple Click Pay: 'PaymentTxnClient' depends on interface 'IPaymentTxnGateway' injected via constructor."
    },
    "requirements": {
      "classes": [
        "IPaymentTxnGateway",
        "LocalPaymentTxnGateway",
        "PaymentTxnClient"
      ],
      "constructors": [
        "PaymentTxnClient"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IPaymentTxnGateway { void send(); }\n\nclass LocalPaymentTxnGateway implements IPaymentTxnGateway {\n    @Override public void send() { System.out.println(\"Click Pay: Xabar yuborildi.\"); }\n}\n\nclass PaymentTxnClient {\n    private IPaymentTxnGateway gateway;\n    public PaymentTxnClient(IPaymentTxnGateway gateway) {\n        this.gateway = gateway;\n    }\n    public void execute() { gateway.send(); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentTxnClient app = new PaymentTxnClient(new LocalPaymentTxnGateway());\n        app.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Dependency Inversion (D in SOLID): Yuqori darajadagi modullar past darajadagi aniq sinflarga emas, balki abstraksiyaga (interfeysga) bog'lanishi kerak. Bu tizimni oson sinovdan o'tkazish (unit testing) imkonini beradi.",
      "theoryEn": "Dependency Inversion Principle (SOLID DIP): High-level modules depend upon abstractions rather than concrete lower-level details.",
      "cleanCode": "private IPaymentTxnGateway gateway;\npublic PaymentTxnClient(IPaymentTxnGateway gateway) { this.gateway = gateway; }",
      "breakdown": [
        "<code>PaymentTxnClient(IPaymentTxnGateway gateway)</code>: Konstruktorda interfeys qabul qilib, istalgan boshqa gateway bilan almashtirish mumkin."
      ],
      "pitfalls": "Sinf ichida 'new AniqSinf()' deb to'g'ridan-to'g'ri yaratish qattiq bog'lanishga (tight coupling) olib keladi.",
      "cw2Tip": "CW2 da OrderController to'g'ridan-to'g'ri bitta to'lovga bog'lanib qolmasdan, 'IPaymentMethod' interfeysi orqali ishlaydi."
    }
  },
  {
    "id": 97,
    "tier": 4,
    "tierName": "4-Bosqich: Bo'sh Bog'lanish (Loose Coupling) & DI",
    "sector": "Arxitektura",
    "title": {
      "uz": "97. Telegram Bot — Konstruktor Orqali Dependency Injection",
      "en": "97. Telegram Bot — Loose Coupling & Dependency Injection"
    },
    "scenario": {
      "uz": "Telegram Bot da 'BotMessageClient' klassi to'g'ridan-to'g'ri aniq sinfga emas, 'IBotMessageGateway' interfeysiga bog'lansin. Konstruktor orqali 'IBotMessageGateway' qabul qilib saqlang.",
      "en": "Decouple Telegram Bot: 'BotMessageClient' depends on interface 'IBotMessageGateway' injected via constructor."
    },
    "requirements": {
      "classes": [
        "IBotMessageGateway",
        "LocalBotMessageGateway",
        "BotMessageClient"
      ],
      "constructors": [
        "BotMessageClient"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IBotMessageGateway { void send(); }\n\nclass LocalBotMessageGateway implements IBotMessageGateway {\n    @Override public void send() { System.out.println(\"Telegram Bot: Xabar yuborildi.\"); }\n}\n\nclass BotMessageClient {\n    private IBotMessageGateway gateway;\n    public BotMessageClient(IBotMessageGateway gateway) {\n        this.gateway = gateway;\n    }\n    public void execute() { gateway.send(); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BotMessageClient app = new BotMessageClient(new LocalBotMessageGateway());\n        app.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Dependency Inversion (D in SOLID): Yuqori darajadagi modullar past darajadagi aniq sinflarga emas, balki abstraksiyaga (interfeysga) bog'lanishi kerak. Bu tizimni oson sinovdan o'tkazish (unit testing) imkonini beradi.",
      "theoryEn": "Dependency Inversion Principle (SOLID DIP): High-level modules depend upon abstractions rather than concrete lower-level details.",
      "cleanCode": "private IBotMessageGateway gateway;\npublic BotMessageClient(IBotMessageGateway gateway) { this.gateway = gateway; }",
      "breakdown": [
        "<code>BotMessageClient(IBotMessageGateway gateway)</code>: Konstruktorda interfeys qabul qilib, istalgan boshqa gateway bilan almashtirish mumkin."
      ],
      "pitfalls": "Sinf ichida 'new AniqSinf()' deb to'g'ridan-to'g'ri yaratish qattiq bog'lanishga (tight coupling) olib keladi.",
      "cw2Tip": "CW2 da OrderController to'g'ridan-to'g'ri bitta to'lovga bog'lanib qolmasdan, 'IPaymentMethod' interfeysi orqali ishlaydi."
    }
  },
  {
    "id": 98,
    "tier": 4,
    "tierName": "4-Bosqich: Bo'sh Bog'lanish (Loose Coupling) & DI",
    "sector": "Arxitektura",
    "title": {
      "uz": "98. UzAirways — Konstruktor Orqali Dependency Injection",
      "en": "98. UzAirways — Loose Coupling & Dependency Injection"
    },
    "scenario": {
      "uz": "UzAirways da 'FlightTicketClient' klassi to'g'ridan-to'g'ri aniq sinfga emas, 'IFlightTicketGateway' interfeysiga bog'lansin. Konstruktor orqali 'IFlightTicketGateway' qabul qilib saqlang.",
      "en": "Decouple UzAirways: 'FlightTicketClient' depends on interface 'IFlightTicketGateway' injected via constructor."
    },
    "requirements": {
      "classes": [
        "IFlightTicketGateway",
        "LocalFlightTicketGateway",
        "FlightTicketClient"
      ],
      "constructors": [
        "FlightTicketClient"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IFlightTicketGateway { void send(); }\n\nclass LocalFlightTicketGateway implements IFlightTicketGateway {\n    @Override public void send() { System.out.println(\"UzAirways: Xabar yuborildi.\"); }\n}\n\nclass FlightTicketClient {\n    private IFlightTicketGateway gateway;\n    public FlightTicketClient(IFlightTicketGateway gateway) {\n        this.gateway = gateway;\n    }\n    public void execute() { gateway.send(); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FlightTicketClient app = new FlightTicketClient(new LocalFlightTicketGateway());\n        app.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Dependency Inversion (D in SOLID): Yuqori darajadagi modullar past darajadagi aniq sinflarga emas, balki abstraksiyaga (interfeysga) bog'lanishi kerak. Bu tizimni oson sinovdan o'tkazish (unit testing) imkonini beradi.",
      "theoryEn": "Dependency Inversion Principle (SOLID DIP): High-level modules depend upon abstractions rather than concrete lower-level details.",
      "cleanCode": "private IFlightTicketGateway gateway;\npublic FlightTicketClient(IFlightTicketGateway gateway) { this.gateway = gateway; }",
      "breakdown": [
        "<code>FlightTicketClient(IFlightTicketGateway gateway)</code>: Konstruktorda interfeys qabul qilib, istalgan boshqa gateway bilan almashtirish mumkin."
      ],
      "pitfalls": "Sinf ichida 'new AniqSinf()' deb to'g'ridan-to'g'ri yaratish qattiq bog'lanishga (tight coupling) olib keladi.",
      "cw2Tip": "CW2 da OrderController to'g'ridan-to'g'ri bitta to'lovga bog'lanib qolmasdan, 'IPaymentMethod' interfeysi orqali ishlaydi."
    }
  },
  {
    "id": 99,
    "tier": 4,
    "tierName": "4-Bosqich: Bo'sh Bog'lanish (Loose Coupling) & DI",
    "sector": "Arxitektura",
    "title": {
      "uz": "99. IT Park Academy — Konstruktor Orqali Dependency Injection",
      "en": "99. IT Park Academy — Loose Coupling & Dependency Injection"
    },
    "scenario": {
      "uz": "IT Park Academy da 'BootcampCourseClient' klassi to'g'ridan-to'g'ri aniq sinfga emas, 'IBootcampCourseGateway' interfeysiga bog'lansin. Konstruktor orqali 'IBootcampCourseGateway' qabul qilib saqlang.",
      "en": "Decouple IT Park Academy: 'BootcampCourseClient' depends on interface 'IBootcampCourseGateway' injected via constructor."
    },
    "requirements": {
      "classes": [
        "IBootcampCourseGateway",
        "LocalBootcampCourseGateway",
        "BootcampCourseClient"
      ],
      "constructors": [
        "BootcampCourseClient"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IBootcampCourseGateway { void send(); }\n\nclass LocalBootcampCourseGateway implements IBootcampCourseGateway {\n    @Override public void send() { System.out.println(\"IT Park Academy: Xabar yuborildi.\"); }\n}\n\nclass BootcampCourseClient {\n    private IBootcampCourseGateway gateway;\n    public BootcampCourseClient(IBootcampCourseGateway gateway) {\n        this.gateway = gateway;\n    }\n    public void execute() { gateway.send(); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BootcampCourseClient app = new BootcampCourseClient(new LocalBootcampCourseGateway());\n        app.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Dependency Inversion (D in SOLID): Yuqori darajadagi modullar past darajadagi aniq sinflarga emas, balki abstraksiyaga (interfeysga) bog'lanishi kerak. Bu tizimni oson sinovdan o'tkazish (unit testing) imkonini beradi.",
      "theoryEn": "Dependency Inversion Principle (SOLID DIP): High-level modules depend upon abstractions rather than concrete lower-level details.",
      "cleanCode": "private IBootcampCourseGateway gateway;\npublic BootcampCourseClient(IBootcampCourseGateway gateway) { this.gateway = gateway; }",
      "breakdown": [
        "<code>BootcampCourseClient(IBootcampCourseGateway gateway)</code>: Konstruktorda interfeys qabul qilib, istalgan boshqa gateway bilan almashtirish mumkin."
      ],
      "pitfalls": "Sinf ichida 'new AniqSinf()' deb to'g'ridan-to'g'ri yaratish qattiq bog'lanishga (tight coupling) olib keladi.",
      "cw2Tip": "CW2 da OrderController to'g'ridan-to'g'ri bitta to'lovga bog'lanib qolmasdan, 'IPaymentMethod' interfeysi orqali ishlaydi."
    }
  },
  {
    "id": 100,
    "tier": 4,
    "tierName": "4-Bosqich: Bo'sh Bog'lanish (Loose Coupling) & DI",
    "sector": "Arxitektura",
    "title": {
      "uz": "100. Anorbank — Konstruktor Orqali Dependency Injection",
      "en": "100. Anorbank — Loose Coupling & Dependency Injection"
    },
    "scenario": {
      "uz": "Anorbank da 'DebitCardClient' klassi to'g'ridan-to'g'ri aniq sinfga emas, 'IDebitCardGateway' interfeysiga bog'lansin. Konstruktor orqali 'IDebitCardGateway' qabul qilib saqlang.",
      "en": "Decouple Anorbank: 'DebitCardClient' depends on interface 'IDebitCardGateway' injected via constructor."
    },
    "requirements": {
      "classes": [
        "IDebitCardGateway",
        "LocalDebitCardGateway",
        "DebitCardClient"
      ],
      "constructors": [
        "DebitCardClient"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IDebitCardGateway { void send(); }\n\nclass LocalDebitCardGateway implements IDebitCardGateway {\n    @Override public void send() { System.out.println(\"Anorbank: Xabar yuborildi.\"); }\n}\n\nclass DebitCardClient {\n    private IDebitCardGateway gateway;\n    public DebitCardClient(IDebitCardGateway gateway) {\n        this.gateway = gateway;\n    }\n    public void execute() { gateway.send(); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DebitCardClient app = new DebitCardClient(new LocalDebitCardGateway());\n        app.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Dependency Inversion (D in SOLID): Yuqori darajadagi modullar past darajadagi aniq sinflarga emas, balki abstraksiyaga (interfeysga) bog'lanishi kerak. Bu tizimni oson sinovdan o'tkazish (unit testing) imkonini beradi.",
      "theoryEn": "Dependency Inversion Principle (SOLID DIP): High-level modules depend upon abstractions rather than concrete lower-level details.",
      "cleanCode": "private IDebitCardGateway gateway;\npublic DebitCardClient(IDebitCardGateway gateway) { this.gateway = gateway; }",
      "breakdown": [
        "<code>DebitCardClient(IDebitCardGateway gateway)</code>: Konstruktorda interfeys qabul qilib, istalgan boshqa gateway bilan almashtirish mumkin."
      ],
      "pitfalls": "Sinf ichida 'new AniqSinf()' deb to'g'ridan-to'g'ri yaratish qattiq bog'lanishga (tight coupling) olib keladi.",
      "cw2Tip": "CW2 da OrderController to'g'ridan-to'g'ri bitta to'lovga bog'lanib qolmasdan, 'IPaymentMethod' interfeysi orqali ishlaydi."
    }
  },
  {
    "id": 101,
    "tier": 4,
    "tierName": "4-Bosqich: Bo'sh Bog'lanish (Loose Coupling) & DI",
    "sector": "Arxitektura",
    "title": {
      "uz": "101. Oson Apteka — Konstruktor Orqali Dependency Injection",
      "en": "101. Oson Apteka — Loose Coupling & Dependency Injection"
    },
    "scenario": {
      "uz": "Oson Apteka da 'MedicineClient' klassi to'g'ridan-to'g'ri aniq sinfga emas, 'IMedicineGateway' interfeysiga bog'lansin. Konstruktor orqali 'IMedicineGateway' qabul qilib saqlang.",
      "en": "Decouple Oson Apteka: 'MedicineClient' depends on interface 'IMedicineGateway' injected via constructor."
    },
    "requirements": {
      "classes": [
        "IMedicineGateway",
        "LocalMedicineGateway",
        "MedicineClient"
      ],
      "constructors": [
        "MedicineClient"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IMedicineGateway { void send(); }\n\nclass LocalMedicineGateway implements IMedicineGateway {\n    @Override public void send() { System.out.println(\"Oson Apteka: Xabar yuborildi.\"); }\n}\n\nclass MedicineClient {\n    private IMedicineGateway gateway;\n    public MedicineClient(IMedicineGateway gateway) {\n        this.gateway = gateway;\n    }\n    public void execute() { gateway.send(); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MedicineClient app = new MedicineClient(new LocalMedicineGateway());\n        app.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Dependency Inversion (D in SOLID): Yuqori darajadagi modullar past darajadagi aniq sinflarga emas, balki abstraksiyaga (interfeysga) bog'lanishi kerak. Bu tizimni oson sinovdan o'tkazish (unit testing) imkonini beradi.",
      "theoryEn": "Dependency Inversion Principle (SOLID DIP): High-level modules depend upon abstractions rather than concrete lower-level details.",
      "cleanCode": "private IMedicineGateway gateway;\npublic MedicineClient(IMedicineGateway gateway) { this.gateway = gateway; }",
      "breakdown": [
        "<code>MedicineClient(IMedicineGateway gateway)</code>: Konstruktorda interfeys qabul qilib, istalgan boshqa gateway bilan almashtirish mumkin."
      ],
      "pitfalls": "Sinf ichida 'new AniqSinf()' deb to'g'ridan-to'g'ri yaratish qattiq bog'lanishga (tight coupling) olib keladi.",
      "cw2Tip": "CW2 da OrderController to'g'ridan-to'g'ri bitta to'lovga bog'lanib qolmasdan, 'IPaymentMethod' interfeysi orqali ishlaydi."
    }
  },
  {
    "id": 102,
    "tier": 4,
    "tierName": "4-Bosqich: Bo'sh Bog'lanish (Loose Coupling) & DI",
    "sector": "Arxitektura",
    "title": {
      "uz": "102. Evos FastFood — Konstruktor Orqali Dependency Injection",
      "en": "102. Evos FastFood — Loose Coupling & Dependency Injection"
    },
    "scenario": {
      "uz": "Evos FastFood da 'FoodOrderClient' klassi to'g'ridan-to'g'ri aniq sinfga emas, 'IFoodOrderGateway' interfeysiga bog'lansin. Konstruktor orqali 'IFoodOrderGateway' qabul qilib saqlang.",
      "en": "Decouple Evos FastFood: 'FoodOrderClient' depends on interface 'IFoodOrderGateway' injected via constructor."
    },
    "requirements": {
      "classes": [
        "IFoodOrderGateway",
        "LocalFoodOrderGateway",
        "FoodOrderClient"
      ],
      "constructors": [
        "FoodOrderClient"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IFoodOrderGateway { void send(); }\n\nclass LocalFoodOrderGateway implements IFoodOrderGateway {\n    @Override public void send() { System.out.println(\"Evos FastFood: Xabar yuborildi.\"); }\n}\n\nclass FoodOrderClient {\n    private IFoodOrderGateway gateway;\n    public FoodOrderClient(IFoodOrderGateway gateway) {\n        this.gateway = gateway;\n    }\n    public void execute() { gateway.send(); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FoodOrderClient app = new FoodOrderClient(new LocalFoodOrderGateway());\n        app.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Dependency Inversion (D in SOLID): Yuqori darajadagi modullar past darajadagi aniq sinflarga emas, balki abstraksiyaga (interfeysga) bog'lanishi kerak. Bu tizimni oson sinovdan o'tkazish (unit testing) imkonini beradi.",
      "theoryEn": "Dependency Inversion Principle (SOLID DIP): High-level modules depend upon abstractions rather than concrete lower-level details.",
      "cleanCode": "private IFoodOrderGateway gateway;\npublic FoodOrderClient(IFoodOrderGateway gateway) { this.gateway = gateway; }",
      "breakdown": [
        "<code>FoodOrderClient(IFoodOrderGateway gateway)</code>: Konstruktorda interfeys qabul qilib, istalgan boshqa gateway bilan almashtirish mumkin."
      ],
      "pitfalls": "Sinf ichida 'new AniqSinf()' deb to'g'ridan-to'g'ri yaratish qattiq bog'lanishga (tight coupling) olib keladi.",
      "cw2Tip": "CW2 da OrderController to'g'ridan-to'g'ri bitta to'lovga bog'lanib qolmasdan, 'IPaymentMethod' interfeysi orqali ishlaydi."
    }
  },
  {
    "id": 103,
    "tier": 4,
    "tierName": "4-Bosqich: Bo'sh Bog'lanish (Loose Coupling) & DI",
    "sector": "Arxitektura",
    "title": {
      "uz": "103. Bellissimo Pizza — Konstruktor Orqali Dependency Injection",
      "en": "103. Bellissimo Pizza — Loose Coupling & Dependency Injection"
    },
    "scenario": {
      "uz": "Bellissimo Pizza da 'PizzaOrderClient' klassi to'g'ridan-to'g'ri aniq sinfga emas, 'IPizzaOrderGateway' interfeysiga bog'lansin. Konstruktor orqali 'IPizzaOrderGateway' qabul qilib saqlang.",
      "en": "Decouple Bellissimo Pizza: 'PizzaOrderClient' depends on interface 'IPizzaOrderGateway' injected via constructor."
    },
    "requirements": {
      "classes": [
        "IPizzaOrderGateway",
        "LocalPizzaOrderGateway",
        "PizzaOrderClient"
      ],
      "constructors": [
        "PizzaOrderClient"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IPizzaOrderGateway { void send(); }\n\nclass LocalPizzaOrderGateway implements IPizzaOrderGateway {\n    @Override public void send() { System.out.println(\"Bellissimo Pizza: Xabar yuborildi.\"); }\n}\n\nclass PizzaOrderClient {\n    private IPizzaOrderGateway gateway;\n    public PizzaOrderClient(IPizzaOrderGateway gateway) {\n        this.gateway = gateway;\n    }\n    public void execute() { gateway.send(); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PizzaOrderClient app = new PizzaOrderClient(new LocalPizzaOrderGateway());\n        app.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Dependency Inversion (D in SOLID): Yuqori darajadagi modullar past darajadagi aniq sinflarga emas, balki abstraksiyaga (interfeysga) bog'lanishi kerak. Bu tizimni oson sinovdan o'tkazish (unit testing) imkonini beradi.",
      "theoryEn": "Dependency Inversion Principle (SOLID DIP): High-level modules depend upon abstractions rather than concrete lower-level details.",
      "cleanCode": "private IPizzaOrderGateway gateway;\npublic PizzaOrderClient(IPizzaOrderGateway gateway) { this.gateway = gateway; }",
      "breakdown": [
        "<code>PizzaOrderClient(IPizzaOrderGateway gateway)</code>: Konstruktorda interfeys qabul qilib, istalgan boshqa gateway bilan almashtirish mumkin."
      ],
      "pitfalls": "Sinf ichida 'new AniqSinf()' deb to'g'ridan-to'g'ri yaratish qattiq bog'lanishga (tight coupling) olib keladi.",
      "cw2Tip": "CW2 da OrderController to'g'ridan-to'g'ri bitta to'lovga bog'lanib qolmasdan, 'IPaymentMethod' interfeysi orqali ishlaydi."
    }
  },
  {
    "id": 104,
    "tier": 4,
    "tierName": "4-Bosqich: Bo'sh Bog'lanish (Loose Coupling) & DI",
    "sector": "Arxitektura",
    "title": {
      "uz": "104. Milliy TV — Konstruktor Orqali Dependency Injection",
      "en": "104. Milliy TV — Loose Coupling & Dependency Injection"
    },
    "scenario": {
      "uz": "Milliy TV da 'BroadcastShowClient' klassi to'g'ridan-to'g'ri aniq sinfga emas, 'IBroadcastShowGateway' interfeysiga bog'lansin. Konstruktor orqali 'IBroadcastShowGateway' qabul qilib saqlang.",
      "en": "Decouple Milliy TV: 'BroadcastShowClient' depends on interface 'IBroadcastShowGateway' injected via constructor."
    },
    "requirements": {
      "classes": [
        "IBroadcastShowGateway",
        "LocalBroadcastShowGateway",
        "BroadcastShowClient"
      ],
      "constructors": [
        "BroadcastShowClient"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IBroadcastShowGateway { void send(); }\n\nclass LocalBroadcastShowGateway implements IBroadcastShowGateway {\n    @Override public void send() { System.out.println(\"Milliy TV: Xabar yuborildi.\"); }\n}\n\nclass BroadcastShowClient {\n    private IBroadcastShowGateway gateway;\n    public BroadcastShowClient(IBroadcastShowGateway gateway) {\n        this.gateway = gateway;\n    }\n    public void execute() { gateway.send(); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BroadcastShowClient app = new BroadcastShowClient(new LocalBroadcastShowGateway());\n        app.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Dependency Inversion (D in SOLID): Yuqori darajadagi modullar past darajadagi aniq sinflarga emas, balki abstraksiyaga (interfeysga) bog'lanishi kerak. Bu tizimni oson sinovdan o'tkazish (unit testing) imkonini beradi.",
      "theoryEn": "Dependency Inversion Principle (SOLID DIP): High-level modules depend upon abstractions rather than concrete lower-level details.",
      "cleanCode": "private IBroadcastShowGateway gateway;\npublic BroadcastShowClient(IBroadcastShowGateway gateway) { this.gateway = gateway; }",
      "breakdown": [
        "<code>BroadcastShowClient(IBroadcastShowGateway gateway)</code>: Konstruktorda interfeys qabul qilib, istalgan boshqa gateway bilan almashtirish mumkin."
      ],
      "pitfalls": "Sinf ichida 'new AniqSinf()' deb to'g'ridan-to'g'ri yaratish qattiq bog'lanishga (tight coupling) olib keladi.",
      "cw2Tip": "CW2 da OrderController to'g'ridan-to'g'ri bitta to'lovga bog'lanib qolmasdan, 'IPaymentMethod' interfeysi orqali ishlaydi."
    }
  },
  {
    "id": 105,
    "tier": 4,
    "tierName": "4-Bosqich: Bo'sh Bog'lanish (Loose Coupling) & DI",
    "sector": "Arxitektura",
    "title": {
      "uz": "105. Spotify Sound — Konstruktor Orqali Dependency Injection",
      "en": "105. Spotify Sound — Loose Coupling & Dependency Injection"
    },
    "scenario": {
      "uz": "Spotify Sound da 'AudioTrackClient' klassi to'g'ridan-to'g'ri aniq sinfga emas, 'IAudioTrackGateway' interfeysiga bog'lansin. Konstruktor orqali 'IAudioTrackGateway' qabul qilib saqlang.",
      "en": "Decouple Spotify Sound: 'AudioTrackClient' depends on interface 'IAudioTrackGateway' injected via constructor."
    },
    "requirements": {
      "classes": [
        "IAudioTrackGateway",
        "LocalAudioTrackGateway",
        "AudioTrackClient"
      ],
      "constructors": [
        "AudioTrackClient"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IAudioTrackGateway { void send(); }\n\nclass LocalAudioTrackGateway implements IAudioTrackGateway {\n    @Override public void send() { System.out.println(\"Spotify Sound: Xabar yuborildi.\"); }\n}\n\nclass AudioTrackClient {\n    private IAudioTrackGateway gateway;\n    public AudioTrackClient(IAudioTrackGateway gateway) {\n        this.gateway = gateway;\n    }\n    public void execute() { gateway.send(); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AudioTrackClient app = new AudioTrackClient(new LocalAudioTrackGateway());\n        app.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Dependency Inversion (D in SOLID): Yuqori darajadagi modullar past darajadagi aniq sinflarga emas, balki abstraksiyaga (interfeysga) bog'lanishi kerak. Bu tizimni oson sinovdan o'tkazish (unit testing) imkonini beradi.",
      "theoryEn": "Dependency Inversion Principle (SOLID DIP): High-level modules depend upon abstractions rather than concrete lower-level details.",
      "cleanCode": "private IAudioTrackGateway gateway;\npublic AudioTrackClient(IAudioTrackGateway gateway) { this.gateway = gateway; }",
      "breakdown": [
        "<code>AudioTrackClient(IAudioTrackGateway gateway)</code>: Konstruktorda interfeys qabul qilib, istalgan boshqa gateway bilan almashtirish mumkin."
      ],
      "pitfalls": "Sinf ichida 'new AniqSinf()' deb to'g'ridan-to'g'ri yaratish qattiq bog'lanishga (tight coupling) olib keladi.",
      "cw2Tip": "CW2 da OrderController to'g'ridan-to'g'ri bitta to'lovga bog'lanib qolmasdan, 'IPaymentMethod' interfeysi orqali ishlaydi."
    }
  },
  {
    "id": 106,
    "tier": 4,
    "tierName": "4-Bosqich: Bo'sh Bog'lanish (Loose Coupling) & DI",
    "sector": "Arxitektura",
    "title": {
      "uz": "106. Smart Thermostat — Konstruktor Orqali Dependency Injection",
      "en": "106. Smart Thermostat — Loose Coupling & Dependency Injection"
    },
    "scenario": {
      "uz": "Smart Thermostat da 'ThermostatClient' klassi to'g'ridan-to'g'ri aniq sinfga emas, 'IThermostatGateway' interfeysiga bog'lansin. Konstruktor orqali 'IThermostatGateway' qabul qilib saqlang.",
      "en": "Decouple Smart Thermostat: 'ThermostatClient' depends on interface 'IThermostatGateway' injected via constructor."
    },
    "requirements": {
      "classes": [
        "IThermostatGateway",
        "LocalThermostatGateway",
        "ThermostatClient"
      ],
      "constructors": [
        "ThermostatClient"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IThermostatGateway { void send(); }\n\nclass LocalThermostatGateway implements IThermostatGateway {\n    @Override public void send() { System.out.println(\"Smart Thermostat: Xabar yuborildi.\"); }\n}\n\nclass ThermostatClient {\n    private IThermostatGateway gateway;\n    public ThermostatClient(IThermostatGateway gateway) {\n        this.gateway = gateway;\n    }\n    public void execute() { gateway.send(); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ThermostatClient app = new ThermostatClient(new LocalThermostatGateway());\n        app.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Dependency Inversion (D in SOLID): Yuqori darajadagi modullar past darajadagi aniq sinflarga emas, balki abstraksiyaga (interfeysga) bog'lanishi kerak. Bu tizimni oson sinovdan o'tkazish (unit testing) imkonini beradi.",
      "theoryEn": "Dependency Inversion Principle (SOLID DIP): High-level modules depend upon abstractions rather than concrete lower-level details.",
      "cleanCode": "private IThermostatGateway gateway;\npublic ThermostatClient(IThermostatGateway gateway) { this.gateway = gateway; }",
      "breakdown": [
        "<code>ThermostatClient(IThermostatGateway gateway)</code>: Konstruktorda interfeys qabul qilib, istalgan boshqa gateway bilan almashtirish mumkin."
      ],
      "pitfalls": "Sinf ichida 'new AniqSinf()' deb to'g'ridan-to'g'ri yaratish qattiq bog'lanishga (tight coupling) olib keladi.",
      "cw2Tip": "CW2 da OrderController to'g'ridan-to'g'ri bitta to'lovga bog'lanib qolmasdan, 'IPaymentMethod' interfeysi orqali ishlaydi."
    }
  },
  {
    "id": 107,
    "tier": 4,
    "tierName": "4-Bosqich: Bo'sh Bog'lanish (Loose Coupling) & DI",
    "sector": "Arxitektura",
    "title": {
      "uz": "107. Drone Delivery — Konstruktor Orqali Dependency Injection",
      "en": "107. Drone Delivery — Loose Coupling & Dependency Injection"
    },
    "scenario": {
      "uz": "Drone Delivery da 'DeliveryDroneClient' klassi to'g'ridan-to'g'ri aniq sinfga emas, 'IDeliveryDroneGateway' interfeysiga bog'lansin. Konstruktor orqali 'IDeliveryDroneGateway' qabul qilib saqlang.",
      "en": "Decouple Drone Delivery: 'DeliveryDroneClient' depends on interface 'IDeliveryDroneGateway' injected via constructor."
    },
    "requirements": {
      "classes": [
        "IDeliveryDroneGateway",
        "LocalDeliveryDroneGateway",
        "DeliveryDroneClient"
      ],
      "constructors": [
        "DeliveryDroneClient"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IDeliveryDroneGateway { void send(); }\n\nclass LocalDeliveryDroneGateway implements IDeliveryDroneGateway {\n    @Override public void send() { System.out.println(\"Drone Delivery: Xabar yuborildi.\"); }\n}\n\nclass DeliveryDroneClient {\n    private IDeliveryDroneGateway gateway;\n    public DeliveryDroneClient(IDeliveryDroneGateway gateway) {\n        this.gateway = gateway;\n    }\n    public void execute() { gateway.send(); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DeliveryDroneClient app = new DeliveryDroneClient(new LocalDeliveryDroneGateway());\n        app.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Dependency Inversion (D in SOLID): Yuqori darajadagi modullar past darajadagi aniq sinflarga emas, balki abstraksiyaga (interfeysga) bog'lanishi kerak. Bu tizimni oson sinovdan o'tkazish (unit testing) imkonini beradi.",
      "theoryEn": "Dependency Inversion Principle (SOLID DIP): High-level modules depend upon abstractions rather than concrete lower-level details.",
      "cleanCode": "private IDeliveryDroneGateway gateway;\npublic DeliveryDroneClient(IDeliveryDroneGateway gateway) { this.gateway = gateway; }",
      "breakdown": [
        "<code>DeliveryDroneClient(IDeliveryDroneGateway gateway)</code>: Konstruktorda interfeys qabul qilib, istalgan boshqa gateway bilan almashtirish mumkin."
      ],
      "pitfalls": "Sinf ichida 'new AniqSinf()' deb to'g'ridan-to'g'ri yaratish qattiq bog'lanishga (tight coupling) olib keladi.",
      "cw2Tip": "CW2 da OrderController to'g'ridan-to'g'ri bitta to'lovga bog'lanib qolmasdan, 'IPaymentMethod' interfeysi orqali ishlaydi."
    }
  },
  {
    "id": 108,
    "tier": 4,
    "tierName": "4-Bosqich: Bo'sh Bog'lanish (Loose Coupling) & DI",
    "sector": "Arxitektura",
    "title": {
      "uz": "108. Smart Warehouse — Konstruktor Orqali Dependency Injection",
      "en": "108. Smart Warehouse — Loose Coupling & Dependency Injection"
    },
    "scenario": {
      "uz": "Smart Warehouse da 'StorageBayClient' klassi to'g'ridan-to'g'ri aniq sinfga emas, 'IStorageBayGateway' interfeysiga bog'lansin. Konstruktor orqali 'IStorageBayGateway' qabul qilib saqlang.",
      "en": "Decouple Smart Warehouse: 'StorageBayClient' depends on interface 'IStorageBayGateway' injected via constructor."
    },
    "requirements": {
      "classes": [
        "IStorageBayGateway",
        "LocalStorageBayGateway",
        "StorageBayClient"
      ],
      "constructors": [
        "StorageBayClient"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IStorageBayGateway { void send(); }\n\nclass LocalStorageBayGateway implements IStorageBayGateway {\n    @Override public void send() { System.out.println(\"Smart Warehouse: Xabar yuborildi.\"); }\n}\n\nclass StorageBayClient {\n    private IStorageBayGateway gateway;\n    public StorageBayClient(IStorageBayGateway gateway) {\n        this.gateway = gateway;\n    }\n    public void execute() { gateway.send(); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StorageBayClient app = new StorageBayClient(new LocalStorageBayGateway());\n        app.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Dependency Inversion (D in SOLID): Yuqori darajadagi modullar past darajadagi aniq sinflarga emas, balki abstraksiyaga (interfeysga) bog'lanishi kerak. Bu tizimni oson sinovdan o'tkazish (unit testing) imkonini beradi.",
      "theoryEn": "Dependency Inversion Principle (SOLID DIP): High-level modules depend upon abstractions rather than concrete lower-level details.",
      "cleanCode": "private IStorageBayGateway gateway;\npublic StorageBayClient(IStorageBayGateway gateway) { this.gateway = gateway; }",
      "breakdown": [
        "<code>StorageBayClient(IStorageBayGateway gateway)</code>: Konstruktorda interfeys qabul qilib, istalgan boshqa gateway bilan almashtirish mumkin."
      ],
      "pitfalls": "Sinf ichida 'new AniqSinf()' deb to'g'ridan-to'g'ri yaratish qattiq bog'lanishga (tight coupling) olib keladi.",
      "cw2Tip": "CW2 da OrderController to'g'ridan-to'g'ri bitta to'lovga bog'lanib qolmasdan, 'IPaymentMethod' interfeysi orqali ishlaydi."
    }
  },
  {
    "id": 109,
    "tier": 4,
    "tierName": "4-Bosqich: Bo'sh Bog'lanish (Loose Coupling) & DI",
    "sector": "Arxitektura",
    "title": {
      "uz": "109. Crypto Wallet — Konstruktor Orqali Dependency Injection",
      "en": "109. Crypto Wallet — Loose Coupling & Dependency Injection"
    },
    "scenario": {
      "uz": "Crypto Wallet da 'CryptoAssetClient' klassi to'g'ridan-to'g'ri aniq sinfga emas, 'ICryptoAssetGateway' interfeysiga bog'lansin. Konstruktor orqali 'ICryptoAssetGateway' qabul qilib saqlang.",
      "en": "Decouple Crypto Wallet: 'CryptoAssetClient' depends on interface 'ICryptoAssetGateway' injected via constructor."
    },
    "requirements": {
      "classes": [
        "ICryptoAssetGateway",
        "LocalCryptoAssetGateway",
        "CryptoAssetClient"
      ],
      "constructors": [
        "CryptoAssetClient"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface ICryptoAssetGateway { void send(); }\n\nclass LocalCryptoAssetGateway implements ICryptoAssetGateway {\n    @Override public void send() { System.out.println(\"Crypto Wallet: Xabar yuborildi.\"); }\n}\n\nclass CryptoAssetClient {\n    private ICryptoAssetGateway gateway;\n    public CryptoAssetClient(ICryptoAssetGateway gateway) {\n        this.gateway = gateway;\n    }\n    public void execute() { gateway.send(); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CryptoAssetClient app = new CryptoAssetClient(new LocalCryptoAssetGateway());\n        app.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Dependency Inversion (D in SOLID): Yuqori darajadagi modullar past darajadagi aniq sinflarga emas, balki abstraksiyaga (interfeysga) bog'lanishi kerak. Bu tizimni oson sinovdan o'tkazish (unit testing) imkonini beradi.",
      "theoryEn": "Dependency Inversion Principle (SOLID DIP): High-level modules depend upon abstractions rather than concrete lower-level details.",
      "cleanCode": "private ICryptoAssetGateway gateway;\npublic CryptoAssetClient(ICryptoAssetGateway gateway) { this.gateway = gateway; }",
      "breakdown": [
        "<code>CryptoAssetClient(ICryptoAssetGateway gateway)</code>: Konstruktorda interfeys qabul qilib, istalgan boshqa gateway bilan almashtirish mumkin."
      ],
      "pitfalls": "Sinf ichida 'new AniqSinf()' deb to'g'ridan-to'g'ri yaratish qattiq bog'lanishga (tight coupling) olib keladi.",
      "cw2Tip": "CW2 da OrderController to'g'ridan-to'g'ri bitta to'lovga bog'lanib qolmasdan, 'IPaymentMethod' interfeysi orqali ishlaydi."
    }
  },
  {
    "id": 110,
    "tier": 4,
    "tierName": "4-Bosqich: Bo'sh Bog'lanish (Loose Coupling) & DI",
    "sector": "Arxitektura",
    "title": {
      "uz": "110. National Library — Konstruktor Orqali Dependency Injection",
      "en": "110. National Library — Loose Coupling & Dependency Injection"
    },
    "scenario": {
      "uz": "National Library da 'CatalogBookClient' klassi to'g'ridan-to'g'ri aniq sinfga emas, 'ICatalogBookGateway' interfeysiga bog'lansin. Konstruktor orqali 'ICatalogBookGateway' qabul qilib saqlang.",
      "en": "Decouple National Library: 'CatalogBookClient' depends on interface 'ICatalogBookGateway' injected via constructor."
    },
    "requirements": {
      "classes": [
        "ICatalogBookGateway",
        "LocalCatalogBookGateway",
        "CatalogBookClient"
      ],
      "constructors": [
        "CatalogBookClient"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface ICatalogBookGateway { void send(); }\n\nclass LocalCatalogBookGateway implements ICatalogBookGateway {\n    @Override public void send() { System.out.println(\"National Library: Xabar yuborildi.\"); }\n}\n\nclass CatalogBookClient {\n    private ICatalogBookGateway gateway;\n    public CatalogBookClient(ICatalogBookGateway gateway) {\n        this.gateway = gateway;\n    }\n    public void execute() { gateway.send(); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CatalogBookClient app = new CatalogBookClient(new LocalCatalogBookGateway());\n        app.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Dependency Inversion (D in SOLID): Yuqori darajadagi modullar past darajadagi aniq sinflarga emas, balki abstraksiyaga (interfeysga) bog'lanishi kerak. Bu tizimni oson sinovdan o'tkazish (unit testing) imkonini beradi.",
      "theoryEn": "Dependency Inversion Principle (SOLID DIP): High-level modules depend upon abstractions rather than concrete lower-level details.",
      "cleanCode": "private ICatalogBookGateway gateway;\npublic CatalogBookClient(ICatalogBookGateway gateway) { this.gateway = gateway; }",
      "breakdown": [
        "<code>CatalogBookClient(ICatalogBookGateway gateway)</code>: Konstruktorda interfeys qabul qilib, istalgan boshqa gateway bilan almashtirish mumkin."
      ],
      "pitfalls": "Sinf ichida 'new AniqSinf()' deb to'g'ridan-to'g'ri yaratish qattiq bog'lanishga (tight coupling) olib keladi.",
      "cw2Tip": "CW2 da OrderController to'g'ridan-to'g'ri bitta to'lovga bog'lanib qolmasdan, 'IPaymentMethod' interfeysi orqali ishlaydi."
    }
  },
  {
    "id": 111,
    "tier": 4,
    "tierName": "4-Bosqich: Bo'sh Bog'lanish (Loose Coupling) & DI",
    "sector": "Arxitektura",
    "title": {
      "uz": "111. BeFit Club — Konstruktor Orqali Dependency Injection",
      "en": "111. BeFit Club — Loose Coupling & Dependency Injection"
    },
    "scenario": {
      "uz": "BeFit Club da 'GymMemberClient' klassi to'g'ridan-to'g'ri aniq sinfga emas, 'IGymMemberGateway' interfeysiga bog'lansin. Konstruktor orqali 'IGymMemberGateway' qabul qilib saqlang.",
      "en": "Decouple BeFit Club: 'GymMemberClient' depends on interface 'IGymMemberGateway' injected via constructor."
    },
    "requirements": {
      "classes": [
        "IGymMemberGateway",
        "LocalGymMemberGateway",
        "GymMemberClient"
      ],
      "constructors": [
        "GymMemberClient"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IGymMemberGateway { void send(); }\n\nclass LocalGymMemberGateway implements IGymMemberGateway {\n    @Override public void send() { System.out.println(\"BeFit Club: Xabar yuborildi.\"); }\n}\n\nclass GymMemberClient {\n    private IGymMemberGateway gateway;\n    public GymMemberClient(IGymMemberGateway gateway) {\n        this.gateway = gateway;\n    }\n    public void execute() { gateway.send(); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GymMemberClient app = new GymMemberClient(new LocalGymMemberGateway());\n        app.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Dependency Inversion (D in SOLID): Yuqori darajadagi modullar past darajadagi aniq sinflarga emas, balki abstraksiyaga (interfeysga) bog'lanishi kerak. Bu tizimni oson sinovdan o'tkazish (unit testing) imkonini beradi.",
      "theoryEn": "Dependency Inversion Principle (SOLID DIP): High-level modules depend upon abstractions rather than concrete lower-level details.",
      "cleanCode": "private IGymMemberGateway gateway;\npublic GymMemberClient(IGymMemberGateway gateway) { this.gateway = gateway; }",
      "breakdown": [
        "<code>GymMemberClient(IGymMemberGateway gateway)</code>: Konstruktorda interfeys qabul qilib, istalgan boshqa gateway bilan almashtirish mumkin."
      ],
      "pitfalls": "Sinf ichida 'new AniqSinf()' deb to'g'ridan-to'g'ri yaratish qattiq bog'lanishga (tight coupling) olib keladi.",
      "cw2Tip": "CW2 da OrderController to'g'ridan-to'g'ri bitta to'lovga bog'lanib qolmasdan, 'IPaymentMethod' interfeysi orqali ishlaydi."
    }
  },
  {
    "id": 112,
    "tier": 4,
    "tierName": "4-Bosqich: Bo'sh Bog'lanish (Loose Coupling) & DI",
    "sector": "Arxitektura",
    "title": {
      "uz": "112. Tashkent Parking — Konstruktor Orqali Dependency Injection",
      "en": "112. Tashkent Parking — Loose Coupling & Dependency Injection"
    },
    "scenario": {
      "uz": "Tashkent Parking da 'ParkingBayClient' klassi to'g'ridan-to'g'ri aniq sinfga emas, 'IParkingBayGateway' interfeysiga bog'lansin. Konstruktor orqali 'IParkingBayGateway' qabul qilib saqlang.",
      "en": "Decouple Tashkent Parking: 'ParkingBayClient' depends on interface 'IParkingBayGateway' injected via constructor."
    },
    "requirements": {
      "classes": [
        "IParkingBayGateway",
        "LocalParkingBayGateway",
        "ParkingBayClient"
      ],
      "constructors": [
        "ParkingBayClient"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IParkingBayGateway { void send(); }\n\nclass LocalParkingBayGateway implements IParkingBayGateway {\n    @Override public void send() { System.out.println(\"Tashkent Parking: Xabar yuborildi.\"); }\n}\n\nclass ParkingBayClient {\n    private IParkingBayGateway gateway;\n    public ParkingBayClient(IParkingBayGateway gateway) {\n        this.gateway = gateway;\n    }\n    public void execute() { gateway.send(); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ParkingBayClient app = new ParkingBayClient(new LocalParkingBayGateway());\n        app.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Dependency Inversion (D in SOLID): Yuqori darajadagi modullar past darajadagi aniq sinflarga emas, balki abstraksiyaga (interfeysga) bog'lanishi kerak. Bu tizimni oson sinovdan o'tkazish (unit testing) imkonini beradi.",
      "theoryEn": "Dependency Inversion Principle (SOLID DIP): High-level modules depend upon abstractions rather than concrete lower-level details.",
      "cleanCode": "private IParkingBayGateway gateway;\npublic ParkingBayClient(IParkingBayGateway gateway) { this.gateway = gateway; }",
      "breakdown": [
        "<code>ParkingBayClient(IParkingBayGateway gateway)</code>: Konstruktorda interfeys qabul qilib, istalgan boshqa gateway bilan almashtirish mumkin."
      ],
      "pitfalls": "Sinf ichida 'new AniqSinf()' deb to'g'ridan-to'g'ri yaratish qattiq bog'lanishga (tight coupling) olib keladi.",
      "cw2Tip": "CW2 da OrderController to'g'ridan-to'g'ri bitta to'lovga bog'lanib qolmasdan, 'IPaymentMethod' interfeysi orqali ishlaydi."
    }
  },
  {
    "id": 113,
    "tier": 4,
    "tierName": "4-Bosqich: Bo'sh Bog'lanish (Loose Coupling) & DI",
    "sector": "Arxitektura",
    "title": {
      "uz": "113. Medion Clinic — Konstruktor Orqali Dependency Injection",
      "en": "113. Medion Clinic — Loose Coupling & Dependency Injection"
    },
    "scenario": {
      "uz": "Medion Clinic da 'PatientRecordClient' klassi to'g'ridan-to'g'ri aniq sinfga emas, 'IPatientRecordGateway' interfeysiga bog'lansin. Konstruktor orqali 'IPatientRecordGateway' qabul qilib saqlang.",
      "en": "Decouple Medion Clinic: 'PatientRecordClient' depends on interface 'IPatientRecordGateway' injected via constructor."
    },
    "requirements": {
      "classes": [
        "IPatientRecordGateway",
        "LocalPatientRecordGateway",
        "PatientRecordClient"
      ],
      "constructors": [
        "PatientRecordClient"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IPatientRecordGateway { void send(); }\n\nclass LocalPatientRecordGateway implements IPatientRecordGateway {\n    @Override public void send() { System.out.println(\"Medion Clinic: Xabar yuborildi.\"); }\n}\n\nclass PatientRecordClient {\n    private IPatientRecordGateway gateway;\n    public PatientRecordClient(IPatientRecordGateway gateway) {\n        this.gateway = gateway;\n    }\n    public void execute() { gateway.send(); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PatientRecordClient app = new PatientRecordClient(new LocalPatientRecordGateway());\n        app.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Dependency Inversion (D in SOLID): Yuqori darajadagi modullar past darajadagi aniq sinflarga emas, balki abstraksiyaga (interfeysga) bog'lanishi kerak. Bu tizimni oson sinovdan o'tkazish (unit testing) imkonini beradi.",
      "theoryEn": "Dependency Inversion Principle (SOLID DIP): High-level modules depend upon abstractions rather than concrete lower-level details.",
      "cleanCode": "private IPatientRecordGateway gateway;\npublic PatientRecordClient(IPatientRecordGateway gateway) { this.gateway = gateway; }",
      "breakdown": [
        "<code>PatientRecordClient(IPatientRecordGateway gateway)</code>: Konstruktorda interfeys qabul qilib, istalgan boshqa gateway bilan almashtirish mumkin."
      ],
      "pitfalls": "Sinf ichida 'new AniqSinf()' deb to'g'ridan-to'g'ri yaratish qattiq bog'lanishga (tight coupling) olib keladi.",
      "cw2Tip": "CW2 da OrderController to'g'ridan-to'g'ri bitta to'lovga bog'lanib qolmasdan, 'IPaymentMethod' interfeysi orqali ishlaydi."
    }
  },
  {
    "id": 114,
    "tier": 4,
    "tierName": "4-Bosqich: Bo'sh Bog'lanish (Loose Coupling) & DI",
    "sector": "Arxitektura",
    "title": {
      "uz": "114. Hyatt Regency — Konstruktor Orqali Dependency Injection",
      "en": "114. Hyatt Regency — Loose Coupling & Dependency Injection"
    },
    "scenario": {
      "uz": "Hyatt Regency da 'HotelReservationClient' klassi to'g'ridan-to'g'ri aniq sinfga emas, 'IHotelReservationGateway' interfeysiga bog'lansin. Konstruktor orqali 'IHotelReservationGateway' qabul qilib saqlang.",
      "en": "Decouple Hyatt Regency: 'HotelReservationClient' depends on interface 'IHotelReservationGateway' injected via constructor."
    },
    "requirements": {
      "classes": [
        "IHotelReservationGateway",
        "LocalHotelReservationGateway",
        "HotelReservationClient"
      ],
      "constructors": [
        "HotelReservationClient"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IHotelReservationGateway { void send(); }\n\nclass LocalHotelReservationGateway implements IHotelReservationGateway {\n    @Override public void send() { System.out.println(\"Hyatt Regency: Xabar yuborildi.\"); }\n}\n\nclass HotelReservationClient {\n    private IHotelReservationGateway gateway;\n    public HotelReservationClient(IHotelReservationGateway gateway) {\n        this.gateway = gateway;\n    }\n    public void execute() { gateway.send(); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        HotelReservationClient app = new HotelReservationClient(new LocalHotelReservationGateway());\n        app.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Dependency Inversion (D in SOLID): Yuqori darajadagi modullar past darajadagi aniq sinflarga emas, balki abstraksiyaga (interfeysga) bog'lanishi kerak. Bu tizimni oson sinovdan o'tkazish (unit testing) imkonini beradi.",
      "theoryEn": "Dependency Inversion Principle (SOLID DIP): High-level modules depend upon abstractions rather than concrete lower-level details.",
      "cleanCode": "private IHotelReservationGateway gateway;\npublic HotelReservationClient(IHotelReservationGateway gateway) { this.gateway = gateway; }",
      "breakdown": [
        "<code>HotelReservationClient(IHotelReservationGateway gateway)</code>: Konstruktorda interfeys qabul qilib, istalgan boshqa gateway bilan almashtirish mumkin."
      ],
      "pitfalls": "Sinf ichida 'new AniqSinf()' deb to'g'ridan-to'g'ri yaratish qattiq bog'lanishga (tight coupling) olib keladi.",
      "cw2Tip": "CW2 da OrderController to'g'ridan-to'g'ri bitta to'lovga bog'lanib qolmasdan, 'IPaymentMethod' interfeysi orqali ishlaydi."
    }
  },
  {
    "id": 115,
    "tier": 4,
    "tierName": "4-Bosqich: Bo'sh Bog'lanish (Loose Coupling) & DI",
    "sector": "Arxitektura",
    "title": {
      "uz": "115. Premier Cinema — Konstruktor Orqali Dependency Injection",
      "en": "115. Premier Cinema — Loose Coupling & Dependency Injection"
    },
    "scenario": {
      "uz": "Premier Cinema da 'CinemaTicketClient' klassi to'g'ridan-to'g'ri aniq sinfga emas, 'ICinemaTicketGateway' interfeysiga bog'lansin. Konstruktor orqali 'ICinemaTicketGateway' qabul qilib saqlang.",
      "en": "Decouple Premier Cinema: 'CinemaTicketClient' depends on interface 'ICinemaTicketGateway' injected via constructor."
    },
    "requirements": {
      "classes": [
        "ICinemaTicketGateway",
        "LocalCinemaTicketGateway",
        "CinemaTicketClient"
      ],
      "constructors": [
        "CinemaTicketClient"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface ICinemaTicketGateway { void send(); }\n\nclass LocalCinemaTicketGateway implements ICinemaTicketGateway {\n    @Override public void send() { System.out.println(\"Premier Cinema: Xabar yuborildi.\"); }\n}\n\nclass CinemaTicketClient {\n    private ICinemaTicketGateway gateway;\n    public CinemaTicketClient(ICinemaTicketGateway gateway) {\n        this.gateway = gateway;\n    }\n    public void execute() { gateway.send(); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CinemaTicketClient app = new CinemaTicketClient(new LocalCinemaTicketGateway());\n        app.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Dependency Inversion (D in SOLID): Yuqori darajadagi modullar past darajadagi aniq sinflarga emas, balki abstraksiyaga (interfeysga) bog'lanishi kerak. Bu tizimni oson sinovdan o'tkazish (unit testing) imkonini beradi.",
      "theoryEn": "Dependency Inversion Principle (SOLID DIP): High-level modules depend upon abstractions rather than concrete lower-level details.",
      "cleanCode": "private ICinemaTicketGateway gateway;\npublic CinemaTicketClient(ICinemaTicketGateway gateway) { this.gateway = gateway; }",
      "breakdown": [
        "<code>CinemaTicketClient(ICinemaTicketGateway gateway)</code>: Konstruktorda interfeys qabul qilib, istalgan boshqa gateway bilan almashtirish mumkin."
      ],
      "pitfalls": "Sinf ichida 'new AniqSinf()' deb to'g'ridan-to'g'ri yaratish qattiq bog'lanishga (tight coupling) olib keladi.",
      "cw2Tip": "CW2 da OrderController to'g'ridan-to'g'ri bitta to'lovga bog'lanib qolmasdan, 'IPaymentMethod' interfeysi orqali ishlaydi."
    }
  },
  {
    "id": 116,
    "tier": 4,
    "tierName": "4-Bosqich: Bo'sh Bog'lanish (Loose Coupling) & DI",
    "sector": "Arxitektura",
    "title": {
      "uz": "116. Yandex Scooter — Konstruktor Orqali Dependency Injection",
      "en": "116. Yandex Scooter — Loose Coupling & Dependency Injection"
    },
    "scenario": {
      "uz": "Yandex Scooter da 'ElectricScooterClient' klassi to'g'ridan-to'g'ri aniq sinfga emas, 'IElectricScooterGateway' interfeysiga bog'lansin. Konstruktor orqali 'IElectricScooterGateway' qabul qilib saqlang.",
      "en": "Decouple Yandex Scooter: 'ElectricScooterClient' depends on interface 'IElectricScooterGateway' injected via constructor."
    },
    "requirements": {
      "classes": [
        "IElectricScooterGateway",
        "LocalElectricScooterGateway",
        "ElectricScooterClient"
      ],
      "constructors": [
        "ElectricScooterClient"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IElectricScooterGateway { void send(); }\n\nclass LocalElectricScooterGateway implements IElectricScooterGateway {\n    @Override public void send() { System.out.println(\"Yandex Scooter: Xabar yuborildi.\"); }\n}\n\nclass ElectricScooterClient {\n    private IElectricScooterGateway gateway;\n    public ElectricScooterClient(IElectricScooterGateway gateway) {\n        this.gateway = gateway;\n    }\n    public void execute() { gateway.send(); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ElectricScooterClient app = new ElectricScooterClient(new LocalElectricScooterGateway());\n        app.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Dependency Inversion (D in SOLID): Yuqori darajadagi modullar past darajadagi aniq sinflarga emas, balki abstraksiyaga (interfeysga) bog'lanishi kerak. Bu tizimni oson sinovdan o'tkazish (unit testing) imkonini beradi.",
      "theoryEn": "Dependency Inversion Principle (SOLID DIP): High-level modules depend upon abstractions rather than concrete lower-level details.",
      "cleanCode": "private IElectricScooterGateway gateway;\npublic ElectricScooterClient(IElectricScooterGateway gateway) { this.gateway = gateway; }",
      "breakdown": [
        "<code>ElectricScooterClient(IElectricScooterGateway gateway)</code>: Konstruktorda interfeys qabul qilib, istalgan boshqa gateway bilan almashtirish mumkin."
      ],
      "pitfalls": "Sinf ichida 'new AniqSinf()' deb to'g'ridan-to'g'ri yaratish qattiq bog'lanishga (tight coupling) olib keladi.",
      "cw2Tip": "CW2 da OrderController to'g'ridan-to'g'ri bitta to'lovga bog'lanib qolmasdan, 'IPaymentMethod' interfeysi orqali ishlaydi."
    }
  },
  {
    "id": 117,
    "tier": 4,
    "tierName": "4-Bosqich: Bo'sh Bog'lanish (Loose Coupling) & DI",
    "sector": "Arxitektura",
    "title": {
      "uz": "117. Weather Network — Konstruktor Orqali Dependency Injection",
      "en": "117. Weather Network — Loose Coupling & Dependency Injection"
    },
    "scenario": {
      "uz": "Weather Network da 'MeteoStationClient' klassi to'g'ridan-to'g'ri aniq sinfga emas, 'IMeteoStationGateway' interfeysiga bog'lansin. Konstruktor orqali 'IMeteoStationGateway' qabul qilib saqlang.",
      "en": "Decouple Weather Network: 'MeteoStationClient' depends on interface 'IMeteoStationGateway' injected via constructor."
    },
    "requirements": {
      "classes": [
        "IMeteoStationGateway",
        "LocalMeteoStationGateway",
        "MeteoStationClient"
      ],
      "constructors": [
        "MeteoStationClient"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IMeteoStationGateway { void send(); }\n\nclass LocalMeteoStationGateway implements IMeteoStationGateway {\n    @Override public void send() { System.out.println(\"Weather Network: Xabar yuborildi.\"); }\n}\n\nclass MeteoStationClient {\n    private IMeteoStationGateway gateway;\n    public MeteoStationClient(IMeteoStationGateway gateway) {\n        this.gateway = gateway;\n    }\n    public void execute() { gateway.send(); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MeteoStationClient app = new MeteoStationClient(new LocalMeteoStationGateway());\n        app.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Dependency Inversion (D in SOLID): Yuqori darajadagi modullar past darajadagi aniq sinflarga emas, balki abstraksiyaga (interfeysga) bog'lanishi kerak. Bu tizimni oson sinovdan o'tkazish (unit testing) imkonini beradi.",
      "theoryEn": "Dependency Inversion Principle (SOLID DIP): High-level modules depend upon abstractions rather than concrete lower-level details.",
      "cleanCode": "private IMeteoStationGateway gateway;\npublic MeteoStationClient(IMeteoStationGateway gateway) { this.gateway = gateway; }",
      "breakdown": [
        "<code>MeteoStationClient(IMeteoStationGateway gateway)</code>: Konstruktorda interfeys qabul qilib, istalgan boshqa gateway bilan almashtirish mumkin."
      ],
      "pitfalls": "Sinf ichida 'new AniqSinf()' deb to'g'ridan-to'g'ri yaratish qattiq bog'lanishga (tight coupling) olib keladi.",
      "cw2Tip": "CW2 da OrderController to'g'ridan-to'g'ri bitta to'lovga bog'lanib qolmasdan, 'IPaymentMethod' interfeysi orqali ishlaydi."
    }
  },
  {
    "id": 118,
    "tier": 4,
    "tierName": "4-Bosqich: Bo'sh Bog'lanish (Loose Coupling) & DI",
    "sector": "Arxitektura",
    "title": {
      "uz": "118. OpenMarket Auction — Konstruktor Orqali Dependency Injection",
      "en": "118. OpenMarket Auction — Loose Coupling & Dependency Injection"
    },
    "scenario": {
      "uz": "OpenMarket Auction da 'AuctionLotClient' klassi to'g'ridan-to'g'ri aniq sinfga emas, 'IAuctionLotGateway' interfeysiga bog'lansin. Konstruktor orqali 'IAuctionLotGateway' qabul qilib saqlang.",
      "en": "Decouple OpenMarket Auction: 'AuctionLotClient' depends on interface 'IAuctionLotGateway' injected via constructor."
    },
    "requirements": {
      "classes": [
        "IAuctionLotGateway",
        "LocalAuctionLotGateway",
        "AuctionLotClient"
      ],
      "constructors": [
        "AuctionLotClient"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface IAuctionLotGateway { void send(); }\n\nclass LocalAuctionLotGateway implements IAuctionLotGateway {\n    @Override public void send() { System.out.println(\"OpenMarket Auction: Xabar yuborildi.\"); }\n}\n\nclass AuctionLotClient {\n    private IAuctionLotGateway gateway;\n    public AuctionLotClient(IAuctionLotGateway gateway) {\n        this.gateway = gateway;\n    }\n    public void execute() { gateway.send(); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AuctionLotClient app = new AuctionLotClient(new LocalAuctionLotGateway());\n        app.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Dependency Inversion (D in SOLID): Yuqori darajadagi modullar past darajadagi aniq sinflarga emas, balki abstraksiyaga (interfeysga) bog'lanishi kerak. Bu tizimni oson sinovdan o'tkazish (unit testing) imkonini beradi.",
      "theoryEn": "Dependency Inversion Principle (SOLID DIP): High-level modules depend upon abstractions rather than concrete lower-level details.",
      "cleanCode": "private IAuctionLotGateway gateway;\npublic AuctionLotClient(IAuctionLotGateway gateway) { this.gateway = gateway; }",
      "breakdown": [
        "<code>AuctionLotClient(IAuctionLotGateway gateway)</code>: Konstruktorda interfeys qabul qilib, istalgan boshqa gateway bilan almashtirish mumkin."
      ],
      "pitfalls": "Sinf ichida 'new AniqSinf()' deb to'g'ridan-to'g'ri yaratish qattiq bog'lanishga (tight coupling) olib keladi.",
      "cw2Tip": "CW2 da OrderController to'g'ridan-to'g'ri bitta to'lovga bog'lanib qolmasdan, 'IPaymentMethod' interfeysi orqali ishlaydi."
    }
  },
  {
    "id": 119,
    "tier": 4,
    "tierName": "4-Bosqich: Bo'sh Bog'lanish (Loose Coupling) & DI",
    "sector": "Arxitektura",
    "title": {
      "uz": "119. Solar Energy Grid — Konstruktor Orqali Dependency Injection",
      "en": "119. Solar Energy Grid — Loose Coupling & Dependency Injection"
    },
    "scenario": {
      "uz": "Solar Energy Grid da 'SolarInverterClient' klassi to'g'ridan-to'g'ri aniq sinfga emas, 'ISolarInverterGateway' interfeysiga bog'lansin. Konstruktor orqali 'ISolarInverterGateway' qabul qilib saqlang.",
      "en": "Decouple Solar Energy Grid: 'SolarInverterClient' depends on interface 'ISolarInverterGateway' injected via constructor."
    },
    "requirements": {
      "classes": [
        "ISolarInverterGateway",
        "LocalSolarInverterGateway",
        "SolarInverterClient"
      ],
      "constructors": [
        "SolarInverterClient"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface ISolarInverterGateway { void send(); }\n\nclass LocalSolarInverterGateway implements ISolarInverterGateway {\n    @Override public void send() { System.out.println(\"Solar Energy Grid: Xabar yuborildi.\"); }\n}\n\nclass SolarInverterClient {\n    private ISolarInverterGateway gateway;\n    public SolarInverterClient(ISolarInverterGateway gateway) {\n        this.gateway = gateway;\n    }\n    public void execute() { gateway.send(); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SolarInverterClient app = new SolarInverterClient(new LocalSolarInverterGateway());\n        app.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Dependency Inversion (D in SOLID): Yuqori darajadagi modullar past darajadagi aniq sinflarga emas, balki abstraksiyaga (interfeysga) bog'lanishi kerak. Bu tizimni oson sinovdan o'tkazish (unit testing) imkonini beradi.",
      "theoryEn": "Dependency Inversion Principle (SOLID DIP): High-level modules depend upon abstractions rather than concrete lower-level details.",
      "cleanCode": "private ISolarInverterGateway gateway;\npublic SolarInverterClient(ISolarInverterGateway gateway) { this.gateway = gateway; }",
      "breakdown": [
        "<code>SolarInverterClient(ISolarInverterGateway gateway)</code>: Konstruktorda interfeys qabul qilib, istalgan boshqa gateway bilan almashtirish mumkin."
      ],
      "pitfalls": "Sinf ichida 'new AniqSinf()' deb to'g'ridan-to'g'ri yaratish qattiq bog'lanishga (tight coupling) olib keladi.",
      "cw2Tip": "CW2 da OrderController to'g'ridan-to'g'ri bitta to'lovga bog'lanib qolmasdan, 'IPaymentMethod' interfeysi orqali ishlaydi."
    }
  },
  {
    "id": 120,
    "tier": 4,
    "tierName": "4-Bosqich: Bo'sh Bog'lanish (Loose Coupling) & DI",
    "sector": "Arxitektura",
    "title": {
      "uz": "120. O'zbekiston Temir Yo'llari — Konstruktor Orqali Dependency Injection",
      "en": "120. O'zbekiston Temir Yo'llari — Loose Coupling & Dependency Injection"
    },
    "scenario": {
      "uz": "O'zbekiston Temir Yo'llari da 'TrainRouteClient' klassi to'g'ridan-to'g'ri aniq sinfga emas, 'ITrainRouteGateway' interfeysiga bog'lansin. Konstruktor orqali 'ITrainRouteGateway' qabul qilib saqlang.",
      "en": "Decouple O'zbekiston Temir Yo'llari: 'TrainRouteClient' depends on interface 'ITrainRouteGateway' injected via constructor."
    },
    "requirements": {
      "classes": [
        "ITrainRouteGateway",
        "LocalTrainRouteGateway",
        "TrainRouteClient"
      ],
      "constructors": [
        "TrainRouteClient"
      ],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "starterCode": "",
    "solution": "interface ITrainRouteGateway { void send(); }\n\nclass LocalTrainRouteGateway implements ITrainRouteGateway {\n    @Override public void send() { System.out.println(\"O'zbekiston Temir Yo'llari: Xabar yuborildi.\"); }\n}\n\nclass TrainRouteClient {\n    private ITrainRouteGateway gateway;\n    public TrainRouteClient(ITrainRouteGateway gateway) {\n        this.gateway = gateway;\n    }\n    public void execute() { gateway.send(); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TrainRouteClient app = new TrainRouteClient(new LocalTrainRouteGateway());\n        app.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Dependency Inversion (D in SOLID): Yuqori darajadagi modullar past darajadagi aniq sinflarga emas, balki abstraksiyaga (interfeysga) bog'lanishi kerak. Bu tizimni oson sinovdan o'tkazish (unit testing) imkonini beradi.",
      "theoryEn": "Dependency Inversion Principle (SOLID DIP): High-level modules depend upon abstractions rather than concrete lower-level details.",
      "cleanCode": "private ITrainRouteGateway gateway;\npublic TrainRouteClient(ITrainRouteGateway gateway) { this.gateway = gateway; }",
      "breakdown": [
        "<code>TrainRouteClient(ITrainRouteGateway gateway)</code>: Konstruktorda interfeys qabul qilib, istalgan boshqa gateway bilan almashtirish mumkin."
      ],
      "pitfalls": "Sinf ichida 'new AniqSinf()' deb to'g'ridan-to'g'ri yaratish qattiq bog'lanishga (tight coupling) olib keladi.",
      "cw2Tip": "CW2 da OrderController to'g'ridan-to'g'ri bitta to'lovga bog'lanib qolmasdan, 'IPaymentMethod' interfeysi orqali ishlaydi."
    }
  },
  {
    "id": 121,
    "tier": 5,
    "tierName": "5-Bosqich: Hodisalar va Callback Listener",
    "sector": "Master • CW2",
    "title": {
      "uz": "121. Uzum Market — Callback Interfeysi va Xabarnoma",
      "en": "121. Uzum Market — Callback Interface & Event Dispatcher"
    },
    "scenario": {
      "uz": "Uzum Market tizimida operatsiya tugagach xabar beruvchi 'interface OnProductCompletedListener { void onComplete(String msg); }' callback interfeysini va uni chaqiruvchi 'ProductNotifier' sinfini tuzing.",
      "en": "Build callback architecture in Uzum Market: 'ProductNotifier' invokes 'onComplete(String msg)' on 'OnProductCompletedListener'."
    },
    "requirements": {
      "classes": [
        "OnProductCompletedListener",
        "ProductNotifier"
      ],
      "methods": [
        "onComplete"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "interface OnProductCompletedListener {\n    void onComplete(String msg);\n}\n\nclass ProductNotifier {\n    public void triggerEvent(OnProductCompletedListener listener) {\n        System.out.println(\"Uzum Market: Operatsiya bajarilmoqda...\");\n        if (listener != null) listener.onComplete(\"Muvaffaqiyatli!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ProductNotifier d = new ProductNotifier();\n        d.triggerEvent(new OnProductCompletedListener() {\n            @Override public void onComplete(String msg) {\n                System.out.println(\"Hodisa tutildi: \" + msg);\n            }\n        });\n    }\n}",
    "detailedSolution": {
      "theory": "Callback mexanizmi orqali bitta ob'yekt boshqa ob'yektga 'bu ish tugaganda mening ushbu metodimni chaqirib qo'y' deb o'z interfeysini taqdim etadi. Bu asinxron va hodisalarga asoslangan arxitekturaning negizidir.",
      "theoryEn": "Callbacks allow passing executable blocks disguised as interface implementations to be signaled upon task completion.",
      "cleanCode": "if (listener != null) listener.onComplete(\"OK\");",
      "breakdown": [
        "<code>OnProductCompletedListener listener</code>: Hodisa yuz berganda xabardor qilinuvchi tinglovchi shartnomasi."
      ],
      "pitfalls": "Tinglovchi 'null' ekanligini tekshirmasdan chaqirish xatolikka olib keladi.",
      "cw2Tip": "CW2 da buyurtma muvaffaqiyatli to'langanda oshxona ekraniga va SMS tizimiga xabar yuborishda listener qo'llaniladi."
    }
  },
  {
    "id": 122,
    "tier": 5,
    "tierName": "5-Bosqich: Hodisalar va Callback Listener",
    "sector": "Master • CW2",
    "title": {
      "uz": "122. Payme Wallet — Callback Interfeysi va Xabarnoma",
      "en": "122. Payme Wallet — Callback Interface & Event Dispatcher"
    },
    "scenario": {
      "uz": "Payme Wallet tizimida operatsiya tugagach xabar beruvchi 'interface OnWalletUserCompletedListener { void onComplete(String msg); }' callback interfeysini va uni chaqiruvchi 'WalletUserNotifier' sinfini tuzing.",
      "en": "Build callback architecture in Payme Wallet: 'WalletUserNotifier' invokes 'onComplete(String msg)' on 'OnWalletUserCompletedListener'."
    },
    "requirements": {
      "classes": [
        "OnWalletUserCompletedListener",
        "WalletUserNotifier"
      ],
      "methods": [
        "onComplete"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "interface OnWalletUserCompletedListener {\n    void onComplete(String msg);\n}\n\nclass WalletUserNotifier {\n    public void triggerEvent(OnWalletUserCompletedListener listener) {\n        System.out.println(\"Payme Wallet: Operatsiya bajarilmoqda...\");\n        if (listener != null) listener.onComplete(\"Muvaffaqiyatli!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WalletUserNotifier d = new WalletUserNotifier();\n        d.triggerEvent(new OnWalletUserCompletedListener() {\n            @Override public void onComplete(String msg) {\n                System.out.println(\"Hodisa tutildi: \" + msg);\n            }\n        });\n    }\n}",
    "detailedSolution": {
      "theory": "Callback mexanizmi orqali bitta ob'yekt boshqa ob'yektga 'bu ish tugaganda mening ushbu metodimni chaqirib qo'y' deb o'z interfeysini taqdim etadi. Bu asinxron va hodisalarga asoslangan arxitekturaning negizidir.",
      "theoryEn": "Callbacks allow passing executable blocks disguised as interface implementations to be signaled upon task completion.",
      "cleanCode": "if (listener != null) listener.onComplete(\"OK\");",
      "breakdown": [
        "<code>OnWalletUserCompletedListener listener</code>: Hodisa yuz berganda xabardor qilinuvchi tinglovchi shartnomasi."
      ],
      "pitfalls": "Tinglovchi 'null' ekanligini tekshirmasdan chaqirish xatolikka olib keladi.",
      "cw2Tip": "CW2 da buyurtma muvaffaqiyatli to'langanda oshxona ekraniga va SMS tizimiga xabar yuborishda listener qo'llaniladi."
    }
  },
  {
    "id": 123,
    "tier": 5,
    "tierName": "5-Bosqich: Hodisalar va Callback Listener",
    "sector": "Master • CW2",
    "title": {
      "uz": "123. Yandex Go — Callback Interfeysi va Xabarnoma",
      "en": "123. Yandex Go — Callback Interface & Event Dispatcher"
    },
    "scenario": {
      "uz": "Yandex Go tizimida operatsiya tugagach xabar beruvchi 'interface OnTaxiRideCompletedListener { void onComplete(String msg); }' callback interfeysini va uni chaqiruvchi 'TaxiRideNotifier' sinfini tuzing.",
      "en": "Build callback architecture in Yandex Go: 'TaxiRideNotifier' invokes 'onComplete(String msg)' on 'OnTaxiRideCompletedListener'."
    },
    "requirements": {
      "classes": [
        "OnTaxiRideCompletedListener",
        "TaxiRideNotifier"
      ],
      "methods": [
        "onComplete"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "interface OnTaxiRideCompletedListener {\n    void onComplete(String msg);\n}\n\nclass TaxiRideNotifier {\n    public void triggerEvent(OnTaxiRideCompletedListener listener) {\n        System.out.println(\"Yandex Go: Operatsiya bajarilmoqda...\");\n        if (listener != null) listener.onComplete(\"Muvaffaqiyatli!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TaxiRideNotifier d = new TaxiRideNotifier();\n        d.triggerEvent(new OnTaxiRideCompletedListener() {\n            @Override public void onComplete(String msg) {\n                System.out.println(\"Hodisa tutildi: \" + msg);\n            }\n        });\n    }\n}",
    "detailedSolution": {
      "theory": "Callback mexanizmi orqali bitta ob'yekt boshqa ob'yektga 'bu ish tugaganda mening ushbu metodimni chaqirib qo'y' deb o'z interfeysini taqdim etadi. Bu asinxron va hodisalarga asoslangan arxitekturaning negizidir.",
      "theoryEn": "Callbacks allow passing executable blocks disguised as interface implementations to be signaled upon task completion.",
      "cleanCode": "if (listener != null) listener.onComplete(\"OK\");",
      "breakdown": [
        "<code>OnTaxiRideCompletedListener listener</code>: Hodisa yuz berganda xabardor qilinuvchi tinglovchi shartnomasi."
      ],
      "pitfalls": "Tinglovchi 'null' ekanligini tekshirmasdan chaqirish xatolikka olib keladi.",
      "cw2Tip": "CW2 da buyurtma muvaffaqiyatli to'langanda oshxona ekraniga va SMS tizimiga xabar yuborishda listener qo'llaniladi."
    }
  },
  {
    "id": 124,
    "tier": 5,
    "tierName": "5-Bosqich: Hodisalar va Callback Listener",
    "sector": "Master • CW2",
    "title": {
      "uz": "124. Korzinka Go — Callback Interfeysi va Xabarnoma",
      "en": "124. Korzinka Go — Callback Interface & Event Dispatcher"
    },
    "scenario": {
      "uz": "Korzinka Go tizimida operatsiya tugagach xabar beruvchi 'interface OnLoyaltyCardCompletedListener { void onComplete(String msg); }' callback interfeysini va uni chaqiruvchi 'LoyaltyCardNotifier' sinfini tuzing.",
      "en": "Build callback architecture in Korzinka Go: 'LoyaltyCardNotifier' invokes 'onComplete(String msg)' on 'OnLoyaltyCardCompletedListener'."
    },
    "requirements": {
      "classes": [
        "OnLoyaltyCardCompletedListener",
        "LoyaltyCardNotifier"
      ],
      "methods": [
        "onComplete"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "interface OnLoyaltyCardCompletedListener {\n    void onComplete(String msg);\n}\n\nclass LoyaltyCardNotifier {\n    public void triggerEvent(OnLoyaltyCardCompletedListener listener) {\n        System.out.println(\"Korzinka Go: Operatsiya bajarilmoqda...\");\n        if (listener != null) listener.onComplete(\"Muvaffaqiyatli!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LoyaltyCardNotifier d = new LoyaltyCardNotifier();\n        d.triggerEvent(new OnLoyaltyCardCompletedListener() {\n            @Override public void onComplete(String msg) {\n                System.out.println(\"Hodisa tutildi: \" + msg);\n            }\n        });\n    }\n}",
    "detailedSolution": {
      "theory": "Callback mexanizmi orqali bitta ob'yekt boshqa ob'yektga 'bu ish tugaganda mening ushbu metodimni chaqirib qo'y' deb o'z interfeysini taqdim etadi. Bu asinxron va hodisalarga asoslangan arxitekturaning negizidir.",
      "theoryEn": "Callbacks allow passing executable blocks disguised as interface implementations to be signaled upon task completion.",
      "cleanCode": "if (listener != null) listener.onComplete(\"OK\");",
      "breakdown": [
        "<code>OnLoyaltyCardCompletedListener listener</code>: Hodisa yuz berganda xabardor qilinuvchi tinglovchi shartnomasi."
      ],
      "pitfalls": "Tinglovchi 'null' ekanligini tekshirmasdan chaqirish xatolikka olib keladi.",
      "cw2Tip": "CW2 da buyurtma muvaffaqiyatli to'langanda oshxona ekraniga va SMS tizimiga xabar yuborishda listener qo'llaniladi."
    }
  },
  {
    "id": 125,
    "tier": 5,
    "tierName": "5-Bosqich: Hodisalar va Callback Listener",
    "sector": "Master • CW2",
    "title": {
      "uz": "125. WIUT Portal — Callback Interfeysi va Xabarnoma",
      "en": "125. WIUT Portal — Callback Interface & Event Dispatcher"
    },
    "scenario": {
      "uz": "WIUT Portal tizimida operatsiya tugagach xabar beruvchi 'interface OnStudentCompletedListener { void onComplete(String msg); }' callback interfeysini va uni chaqiruvchi 'StudentNotifier' sinfini tuzing.",
      "en": "Build callback architecture in WIUT Portal: 'StudentNotifier' invokes 'onComplete(String msg)' on 'OnStudentCompletedListener'."
    },
    "requirements": {
      "classes": [
        "OnStudentCompletedListener",
        "StudentNotifier"
      ],
      "methods": [
        "onComplete"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "interface OnStudentCompletedListener {\n    void onComplete(String msg);\n}\n\nclass StudentNotifier {\n    public void triggerEvent(OnStudentCompletedListener listener) {\n        System.out.println(\"WIUT Portal: Operatsiya bajarilmoqda...\");\n        if (listener != null) listener.onComplete(\"Muvaffaqiyatli!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StudentNotifier d = new StudentNotifier();\n        d.triggerEvent(new OnStudentCompletedListener() {\n            @Override public void onComplete(String msg) {\n                System.out.println(\"Hodisa tutildi: \" + msg);\n            }\n        });\n    }\n}",
    "detailedSolution": {
      "theory": "Callback mexanizmi orqali bitta ob'yekt boshqa ob'yektga 'bu ish tugaganda mening ushbu metodimni chaqirib qo'y' deb o'z interfeysini taqdim etadi. Bu asinxron va hodisalarga asoslangan arxitekturaning negizidir.",
      "theoryEn": "Callbacks allow passing executable blocks disguised as interface implementations to be signaled upon task completion.",
      "cleanCode": "if (listener != null) listener.onComplete(\"OK\");",
      "breakdown": [
        "<code>OnStudentCompletedListener listener</code>: Hodisa yuz berganda xabardor qilinuvchi tinglovchi shartnomasi."
      ],
      "pitfalls": "Tinglovchi 'null' ekanligini tekshirmasdan chaqirish xatolikka olib keladi.",
      "cw2Tip": "CW2 da buyurtma muvaffaqiyatli to'langanda oshxona ekraniga va SMS tizimiga xabar yuborishda listener qo'llaniladi."
    }
  },
  {
    "id": 126,
    "tier": 5,
    "tierName": "5-Bosqich: Hodisalar va Callback Listener",
    "sector": "Master • CW2",
    "title": {
      "uz": "126. Click Pay — Callback Interfeysi va Xabarnoma",
      "en": "126. Click Pay — Callback Interface & Event Dispatcher"
    },
    "scenario": {
      "uz": "Click Pay tizimida operatsiya tugagach xabar beruvchi 'interface OnPaymentTxnCompletedListener { void onComplete(String msg); }' callback interfeysini va uni chaqiruvchi 'PaymentTxnNotifier' sinfini tuzing.",
      "en": "Build callback architecture in Click Pay: 'PaymentTxnNotifier' invokes 'onComplete(String msg)' on 'OnPaymentTxnCompletedListener'."
    },
    "requirements": {
      "classes": [
        "OnPaymentTxnCompletedListener",
        "PaymentTxnNotifier"
      ],
      "methods": [
        "onComplete"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "interface OnPaymentTxnCompletedListener {\n    void onComplete(String msg);\n}\n\nclass PaymentTxnNotifier {\n    public void triggerEvent(OnPaymentTxnCompletedListener listener) {\n        System.out.println(\"Click Pay: Operatsiya bajarilmoqda...\");\n        if (listener != null) listener.onComplete(\"Muvaffaqiyatli!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentTxnNotifier d = new PaymentTxnNotifier();\n        d.triggerEvent(new OnPaymentTxnCompletedListener() {\n            @Override public void onComplete(String msg) {\n                System.out.println(\"Hodisa tutildi: \" + msg);\n            }\n        });\n    }\n}",
    "detailedSolution": {
      "theory": "Callback mexanizmi orqali bitta ob'yekt boshqa ob'yektga 'bu ish tugaganda mening ushbu metodimni chaqirib qo'y' deb o'z interfeysini taqdim etadi. Bu asinxron va hodisalarga asoslangan arxitekturaning negizidir.",
      "theoryEn": "Callbacks allow passing executable blocks disguised as interface implementations to be signaled upon task completion.",
      "cleanCode": "if (listener != null) listener.onComplete(\"OK\");",
      "breakdown": [
        "<code>OnPaymentTxnCompletedListener listener</code>: Hodisa yuz berganda xabardor qilinuvchi tinglovchi shartnomasi."
      ],
      "pitfalls": "Tinglovchi 'null' ekanligini tekshirmasdan chaqirish xatolikka olib keladi.",
      "cw2Tip": "CW2 da buyurtma muvaffaqiyatli to'langanda oshxona ekraniga va SMS tizimiga xabar yuborishda listener qo'llaniladi."
    }
  },
  {
    "id": 127,
    "tier": 5,
    "tierName": "5-Bosqich: Hodisalar va Callback Listener",
    "sector": "Master • CW2",
    "title": {
      "uz": "127. Telegram Bot — Callback Interfeysi va Xabarnoma",
      "en": "127. Telegram Bot — Callback Interface & Event Dispatcher"
    },
    "scenario": {
      "uz": "Telegram Bot tizimida operatsiya tugagach xabar beruvchi 'interface OnBotMessageCompletedListener { void onComplete(String msg); }' callback interfeysini va uni chaqiruvchi 'BotMessageNotifier' sinfini tuzing.",
      "en": "Build callback architecture in Telegram Bot: 'BotMessageNotifier' invokes 'onComplete(String msg)' on 'OnBotMessageCompletedListener'."
    },
    "requirements": {
      "classes": [
        "OnBotMessageCompletedListener",
        "BotMessageNotifier"
      ],
      "methods": [
        "onComplete"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "interface OnBotMessageCompletedListener {\n    void onComplete(String msg);\n}\n\nclass BotMessageNotifier {\n    public void triggerEvent(OnBotMessageCompletedListener listener) {\n        System.out.println(\"Telegram Bot: Operatsiya bajarilmoqda...\");\n        if (listener != null) listener.onComplete(\"Muvaffaqiyatli!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BotMessageNotifier d = new BotMessageNotifier();\n        d.triggerEvent(new OnBotMessageCompletedListener() {\n            @Override public void onComplete(String msg) {\n                System.out.println(\"Hodisa tutildi: \" + msg);\n            }\n        });\n    }\n}",
    "detailedSolution": {
      "theory": "Callback mexanizmi orqali bitta ob'yekt boshqa ob'yektga 'bu ish tugaganda mening ushbu metodimni chaqirib qo'y' deb o'z interfeysini taqdim etadi. Bu asinxron va hodisalarga asoslangan arxitekturaning negizidir.",
      "theoryEn": "Callbacks allow passing executable blocks disguised as interface implementations to be signaled upon task completion.",
      "cleanCode": "if (listener != null) listener.onComplete(\"OK\");",
      "breakdown": [
        "<code>OnBotMessageCompletedListener listener</code>: Hodisa yuz berganda xabardor qilinuvchi tinglovchi shartnomasi."
      ],
      "pitfalls": "Tinglovchi 'null' ekanligini tekshirmasdan chaqirish xatolikka olib keladi.",
      "cw2Tip": "CW2 da buyurtma muvaffaqiyatli to'langanda oshxona ekraniga va SMS tizimiga xabar yuborishda listener qo'llaniladi."
    }
  },
  {
    "id": 128,
    "tier": 5,
    "tierName": "5-Bosqich: Hodisalar va Callback Listener",
    "sector": "Master • CW2",
    "title": {
      "uz": "128. UzAirways — Callback Interfeysi va Xabarnoma",
      "en": "128. UzAirways — Callback Interface & Event Dispatcher"
    },
    "scenario": {
      "uz": "UzAirways tizimida operatsiya tugagach xabar beruvchi 'interface OnFlightTicketCompletedListener { void onComplete(String msg); }' callback interfeysini va uni chaqiruvchi 'FlightTicketNotifier' sinfini tuzing.",
      "en": "Build callback architecture in UzAirways: 'FlightTicketNotifier' invokes 'onComplete(String msg)' on 'OnFlightTicketCompletedListener'."
    },
    "requirements": {
      "classes": [
        "OnFlightTicketCompletedListener",
        "FlightTicketNotifier"
      ],
      "methods": [
        "onComplete"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "interface OnFlightTicketCompletedListener {\n    void onComplete(String msg);\n}\n\nclass FlightTicketNotifier {\n    public void triggerEvent(OnFlightTicketCompletedListener listener) {\n        System.out.println(\"UzAirways: Operatsiya bajarilmoqda...\");\n        if (listener != null) listener.onComplete(\"Muvaffaqiyatli!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FlightTicketNotifier d = new FlightTicketNotifier();\n        d.triggerEvent(new OnFlightTicketCompletedListener() {\n            @Override public void onComplete(String msg) {\n                System.out.println(\"Hodisa tutildi: \" + msg);\n            }\n        });\n    }\n}",
    "detailedSolution": {
      "theory": "Callback mexanizmi orqali bitta ob'yekt boshqa ob'yektga 'bu ish tugaganda mening ushbu metodimni chaqirib qo'y' deb o'z interfeysini taqdim etadi. Bu asinxron va hodisalarga asoslangan arxitekturaning negizidir.",
      "theoryEn": "Callbacks allow passing executable blocks disguised as interface implementations to be signaled upon task completion.",
      "cleanCode": "if (listener != null) listener.onComplete(\"OK\");",
      "breakdown": [
        "<code>OnFlightTicketCompletedListener listener</code>: Hodisa yuz berganda xabardor qilinuvchi tinglovchi shartnomasi."
      ],
      "pitfalls": "Tinglovchi 'null' ekanligini tekshirmasdan chaqirish xatolikka olib keladi.",
      "cw2Tip": "CW2 da buyurtma muvaffaqiyatli to'langanda oshxona ekraniga va SMS tizimiga xabar yuborishda listener qo'llaniladi."
    }
  },
  {
    "id": 129,
    "tier": 5,
    "tierName": "5-Bosqich: Hodisalar va Callback Listener",
    "sector": "Master • CW2",
    "title": {
      "uz": "129. IT Park Academy — Callback Interfeysi va Xabarnoma",
      "en": "129. IT Park Academy — Callback Interface & Event Dispatcher"
    },
    "scenario": {
      "uz": "IT Park Academy tizimida operatsiya tugagach xabar beruvchi 'interface OnBootcampCourseCompletedListener { void onComplete(String msg); }' callback interfeysini va uni chaqiruvchi 'BootcampCourseNotifier' sinfini tuzing.",
      "en": "Build callback architecture in IT Park Academy: 'BootcampCourseNotifier' invokes 'onComplete(String msg)' on 'OnBootcampCourseCompletedListener'."
    },
    "requirements": {
      "classes": [
        "OnBootcampCourseCompletedListener",
        "BootcampCourseNotifier"
      ],
      "methods": [
        "onComplete"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "interface OnBootcampCourseCompletedListener {\n    void onComplete(String msg);\n}\n\nclass BootcampCourseNotifier {\n    public void triggerEvent(OnBootcampCourseCompletedListener listener) {\n        System.out.println(\"IT Park Academy: Operatsiya bajarilmoqda...\");\n        if (listener != null) listener.onComplete(\"Muvaffaqiyatli!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BootcampCourseNotifier d = new BootcampCourseNotifier();\n        d.triggerEvent(new OnBootcampCourseCompletedListener() {\n            @Override public void onComplete(String msg) {\n                System.out.println(\"Hodisa tutildi: \" + msg);\n            }\n        });\n    }\n}",
    "detailedSolution": {
      "theory": "Callback mexanizmi orqali bitta ob'yekt boshqa ob'yektga 'bu ish tugaganda mening ushbu metodimni chaqirib qo'y' deb o'z interfeysini taqdim etadi. Bu asinxron va hodisalarga asoslangan arxitekturaning negizidir.",
      "theoryEn": "Callbacks allow passing executable blocks disguised as interface implementations to be signaled upon task completion.",
      "cleanCode": "if (listener != null) listener.onComplete(\"OK\");",
      "breakdown": [
        "<code>OnBootcampCourseCompletedListener listener</code>: Hodisa yuz berganda xabardor qilinuvchi tinglovchi shartnomasi."
      ],
      "pitfalls": "Tinglovchi 'null' ekanligini tekshirmasdan chaqirish xatolikka olib keladi.",
      "cw2Tip": "CW2 da buyurtma muvaffaqiyatli to'langanda oshxona ekraniga va SMS tizimiga xabar yuborishda listener qo'llaniladi."
    }
  },
  {
    "id": 130,
    "tier": 5,
    "tierName": "5-Bosqich: Hodisalar va Callback Listener",
    "sector": "Master • CW2",
    "title": {
      "uz": "130. Anorbank — Callback Interfeysi va Xabarnoma",
      "en": "130. Anorbank — Callback Interface & Event Dispatcher"
    },
    "scenario": {
      "uz": "Anorbank tizimida operatsiya tugagach xabar beruvchi 'interface OnDebitCardCompletedListener { void onComplete(String msg); }' callback interfeysini va uni chaqiruvchi 'DebitCardNotifier' sinfini tuzing.",
      "en": "Build callback architecture in Anorbank: 'DebitCardNotifier' invokes 'onComplete(String msg)' on 'OnDebitCardCompletedListener'."
    },
    "requirements": {
      "classes": [
        "OnDebitCardCompletedListener",
        "DebitCardNotifier"
      ],
      "methods": [
        "onComplete"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "interface OnDebitCardCompletedListener {\n    void onComplete(String msg);\n}\n\nclass DebitCardNotifier {\n    public void triggerEvent(OnDebitCardCompletedListener listener) {\n        System.out.println(\"Anorbank: Operatsiya bajarilmoqda...\");\n        if (listener != null) listener.onComplete(\"Muvaffaqiyatli!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DebitCardNotifier d = new DebitCardNotifier();\n        d.triggerEvent(new OnDebitCardCompletedListener() {\n            @Override public void onComplete(String msg) {\n                System.out.println(\"Hodisa tutildi: \" + msg);\n            }\n        });\n    }\n}",
    "detailedSolution": {
      "theory": "Callback mexanizmi orqali bitta ob'yekt boshqa ob'yektga 'bu ish tugaganda mening ushbu metodimni chaqirib qo'y' deb o'z interfeysini taqdim etadi. Bu asinxron va hodisalarga asoslangan arxitekturaning negizidir.",
      "theoryEn": "Callbacks allow passing executable blocks disguised as interface implementations to be signaled upon task completion.",
      "cleanCode": "if (listener != null) listener.onComplete(\"OK\");",
      "breakdown": [
        "<code>OnDebitCardCompletedListener listener</code>: Hodisa yuz berganda xabardor qilinuvchi tinglovchi shartnomasi."
      ],
      "pitfalls": "Tinglovchi 'null' ekanligini tekshirmasdan chaqirish xatolikka olib keladi.",
      "cw2Tip": "CW2 da buyurtma muvaffaqiyatli to'langanda oshxona ekraniga va SMS tizimiga xabar yuborishda listener qo'llaniladi."
    }
  },
  {
    "id": 131,
    "tier": 5,
    "tierName": "5-Bosqich: Hodisalar va Callback Listener",
    "sector": "Master • CW2",
    "title": {
      "uz": "131. Oson Apteka — Callback Interfeysi va Xabarnoma",
      "en": "131. Oson Apteka — Callback Interface & Event Dispatcher"
    },
    "scenario": {
      "uz": "Oson Apteka tizimida operatsiya tugagach xabar beruvchi 'interface OnMedicineCompletedListener { void onComplete(String msg); }' callback interfeysini va uni chaqiruvchi 'MedicineNotifier' sinfini tuzing.",
      "en": "Build callback architecture in Oson Apteka: 'MedicineNotifier' invokes 'onComplete(String msg)' on 'OnMedicineCompletedListener'."
    },
    "requirements": {
      "classes": [
        "OnMedicineCompletedListener",
        "MedicineNotifier"
      ],
      "methods": [
        "onComplete"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "interface OnMedicineCompletedListener {\n    void onComplete(String msg);\n}\n\nclass MedicineNotifier {\n    public void triggerEvent(OnMedicineCompletedListener listener) {\n        System.out.println(\"Oson Apteka: Operatsiya bajarilmoqda...\");\n        if (listener != null) listener.onComplete(\"Muvaffaqiyatli!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MedicineNotifier d = new MedicineNotifier();\n        d.triggerEvent(new OnMedicineCompletedListener() {\n            @Override public void onComplete(String msg) {\n                System.out.println(\"Hodisa tutildi: \" + msg);\n            }\n        });\n    }\n}",
    "detailedSolution": {
      "theory": "Callback mexanizmi orqali bitta ob'yekt boshqa ob'yektga 'bu ish tugaganda mening ushbu metodimni chaqirib qo'y' deb o'z interfeysini taqdim etadi. Bu asinxron va hodisalarga asoslangan arxitekturaning negizidir.",
      "theoryEn": "Callbacks allow passing executable blocks disguised as interface implementations to be signaled upon task completion.",
      "cleanCode": "if (listener != null) listener.onComplete(\"OK\");",
      "breakdown": [
        "<code>OnMedicineCompletedListener listener</code>: Hodisa yuz berganda xabardor qilinuvchi tinglovchi shartnomasi."
      ],
      "pitfalls": "Tinglovchi 'null' ekanligini tekshirmasdan chaqirish xatolikka olib keladi.",
      "cw2Tip": "CW2 da buyurtma muvaffaqiyatli to'langanda oshxona ekraniga va SMS tizimiga xabar yuborishda listener qo'llaniladi."
    }
  },
  {
    "id": 132,
    "tier": 5,
    "tierName": "5-Bosqich: Hodisalar va Callback Listener",
    "sector": "Master • CW2",
    "title": {
      "uz": "132. Evos FastFood — Callback Interfeysi va Xabarnoma",
      "en": "132. Evos FastFood — Callback Interface & Event Dispatcher"
    },
    "scenario": {
      "uz": "Evos FastFood tizimida operatsiya tugagach xabar beruvchi 'interface OnFoodOrderCompletedListener { void onComplete(String msg); }' callback interfeysini va uni chaqiruvchi 'FoodOrderNotifier' sinfini tuzing.",
      "en": "Build callback architecture in Evos FastFood: 'FoodOrderNotifier' invokes 'onComplete(String msg)' on 'OnFoodOrderCompletedListener'."
    },
    "requirements": {
      "classes": [
        "OnFoodOrderCompletedListener",
        "FoodOrderNotifier"
      ],
      "methods": [
        "onComplete"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "interface OnFoodOrderCompletedListener {\n    void onComplete(String msg);\n}\n\nclass FoodOrderNotifier {\n    public void triggerEvent(OnFoodOrderCompletedListener listener) {\n        System.out.println(\"Evos FastFood: Operatsiya bajarilmoqda...\");\n        if (listener != null) listener.onComplete(\"Muvaffaqiyatli!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FoodOrderNotifier d = new FoodOrderNotifier();\n        d.triggerEvent(new OnFoodOrderCompletedListener() {\n            @Override public void onComplete(String msg) {\n                System.out.println(\"Hodisa tutildi: \" + msg);\n            }\n        });\n    }\n}",
    "detailedSolution": {
      "theory": "Callback mexanizmi orqali bitta ob'yekt boshqa ob'yektga 'bu ish tugaganda mening ushbu metodimni chaqirib qo'y' deb o'z interfeysini taqdim etadi. Bu asinxron va hodisalarga asoslangan arxitekturaning negizidir.",
      "theoryEn": "Callbacks allow passing executable blocks disguised as interface implementations to be signaled upon task completion.",
      "cleanCode": "if (listener != null) listener.onComplete(\"OK\");",
      "breakdown": [
        "<code>OnFoodOrderCompletedListener listener</code>: Hodisa yuz berganda xabardor qilinuvchi tinglovchi shartnomasi."
      ],
      "pitfalls": "Tinglovchi 'null' ekanligini tekshirmasdan chaqirish xatolikka olib keladi.",
      "cw2Tip": "CW2 da buyurtma muvaffaqiyatli to'langanda oshxona ekraniga va SMS tizimiga xabar yuborishda listener qo'llaniladi."
    }
  },
  {
    "id": 133,
    "tier": 5,
    "tierName": "5-Bosqich: Hodisalar va Callback Listener",
    "sector": "Master • CW2",
    "title": {
      "uz": "133. Bellissimo Pizza — Callback Interfeysi va Xabarnoma",
      "en": "133. Bellissimo Pizza — Callback Interface & Event Dispatcher"
    },
    "scenario": {
      "uz": "Bellissimo Pizza tizimida operatsiya tugagach xabar beruvchi 'interface OnPizzaOrderCompletedListener { void onComplete(String msg); }' callback interfeysini va uni chaqiruvchi 'PizzaOrderNotifier' sinfini tuzing.",
      "en": "Build callback architecture in Bellissimo Pizza: 'PizzaOrderNotifier' invokes 'onComplete(String msg)' on 'OnPizzaOrderCompletedListener'."
    },
    "requirements": {
      "classes": [
        "OnPizzaOrderCompletedListener",
        "PizzaOrderNotifier"
      ],
      "methods": [
        "onComplete"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "interface OnPizzaOrderCompletedListener {\n    void onComplete(String msg);\n}\n\nclass PizzaOrderNotifier {\n    public void triggerEvent(OnPizzaOrderCompletedListener listener) {\n        System.out.println(\"Bellissimo Pizza: Operatsiya bajarilmoqda...\");\n        if (listener != null) listener.onComplete(\"Muvaffaqiyatli!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PizzaOrderNotifier d = new PizzaOrderNotifier();\n        d.triggerEvent(new OnPizzaOrderCompletedListener() {\n            @Override public void onComplete(String msg) {\n                System.out.println(\"Hodisa tutildi: \" + msg);\n            }\n        });\n    }\n}",
    "detailedSolution": {
      "theory": "Callback mexanizmi orqali bitta ob'yekt boshqa ob'yektga 'bu ish tugaganda mening ushbu metodimni chaqirib qo'y' deb o'z interfeysini taqdim etadi. Bu asinxron va hodisalarga asoslangan arxitekturaning negizidir.",
      "theoryEn": "Callbacks allow passing executable blocks disguised as interface implementations to be signaled upon task completion.",
      "cleanCode": "if (listener != null) listener.onComplete(\"OK\");",
      "breakdown": [
        "<code>OnPizzaOrderCompletedListener listener</code>: Hodisa yuz berganda xabardor qilinuvchi tinglovchi shartnomasi."
      ],
      "pitfalls": "Tinglovchi 'null' ekanligini tekshirmasdan chaqirish xatolikka olib keladi.",
      "cw2Tip": "CW2 da buyurtma muvaffaqiyatli to'langanda oshxona ekraniga va SMS tizimiga xabar yuborishda listener qo'llaniladi."
    }
  },
  {
    "id": 134,
    "tier": 5,
    "tierName": "5-Bosqich: Hodisalar va Callback Listener",
    "sector": "Master • CW2",
    "title": {
      "uz": "134. Milliy TV — Callback Interfeysi va Xabarnoma",
      "en": "134. Milliy TV — Callback Interface & Event Dispatcher"
    },
    "scenario": {
      "uz": "Milliy TV tizimida operatsiya tugagach xabar beruvchi 'interface OnBroadcastShowCompletedListener { void onComplete(String msg); }' callback interfeysini va uni chaqiruvchi 'BroadcastShowNotifier' sinfini tuzing.",
      "en": "Build callback architecture in Milliy TV: 'BroadcastShowNotifier' invokes 'onComplete(String msg)' on 'OnBroadcastShowCompletedListener'."
    },
    "requirements": {
      "classes": [
        "OnBroadcastShowCompletedListener",
        "BroadcastShowNotifier"
      ],
      "methods": [
        "onComplete"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "interface OnBroadcastShowCompletedListener {\n    void onComplete(String msg);\n}\n\nclass BroadcastShowNotifier {\n    public void triggerEvent(OnBroadcastShowCompletedListener listener) {\n        System.out.println(\"Milliy TV: Operatsiya bajarilmoqda...\");\n        if (listener != null) listener.onComplete(\"Muvaffaqiyatli!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BroadcastShowNotifier d = new BroadcastShowNotifier();\n        d.triggerEvent(new OnBroadcastShowCompletedListener() {\n            @Override public void onComplete(String msg) {\n                System.out.println(\"Hodisa tutildi: \" + msg);\n            }\n        });\n    }\n}",
    "detailedSolution": {
      "theory": "Callback mexanizmi orqali bitta ob'yekt boshqa ob'yektga 'bu ish tugaganda mening ushbu metodimni chaqirib qo'y' deb o'z interfeysini taqdim etadi. Bu asinxron va hodisalarga asoslangan arxitekturaning negizidir.",
      "theoryEn": "Callbacks allow passing executable blocks disguised as interface implementations to be signaled upon task completion.",
      "cleanCode": "if (listener != null) listener.onComplete(\"OK\");",
      "breakdown": [
        "<code>OnBroadcastShowCompletedListener listener</code>: Hodisa yuz berganda xabardor qilinuvchi tinglovchi shartnomasi."
      ],
      "pitfalls": "Tinglovchi 'null' ekanligini tekshirmasdan chaqirish xatolikka olib keladi.",
      "cw2Tip": "CW2 da buyurtma muvaffaqiyatli to'langanda oshxona ekraniga va SMS tizimiga xabar yuborishda listener qo'llaniladi."
    }
  },
  {
    "id": 135,
    "tier": 5,
    "tierName": "5-Bosqich: Hodisalar va Callback Listener",
    "sector": "Master • CW2",
    "title": {
      "uz": "135. Spotify Sound — Callback Interfeysi va Xabarnoma",
      "en": "135. Spotify Sound — Callback Interface & Event Dispatcher"
    },
    "scenario": {
      "uz": "Spotify Sound tizimida operatsiya tugagach xabar beruvchi 'interface OnAudioTrackCompletedListener { void onComplete(String msg); }' callback interfeysini va uni chaqiruvchi 'AudioTrackNotifier' sinfini tuzing.",
      "en": "Build callback architecture in Spotify Sound: 'AudioTrackNotifier' invokes 'onComplete(String msg)' on 'OnAudioTrackCompletedListener'."
    },
    "requirements": {
      "classes": [
        "OnAudioTrackCompletedListener",
        "AudioTrackNotifier"
      ],
      "methods": [
        "onComplete"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "interface OnAudioTrackCompletedListener {\n    void onComplete(String msg);\n}\n\nclass AudioTrackNotifier {\n    public void triggerEvent(OnAudioTrackCompletedListener listener) {\n        System.out.println(\"Spotify Sound: Operatsiya bajarilmoqda...\");\n        if (listener != null) listener.onComplete(\"Muvaffaqiyatli!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AudioTrackNotifier d = new AudioTrackNotifier();\n        d.triggerEvent(new OnAudioTrackCompletedListener() {\n            @Override public void onComplete(String msg) {\n                System.out.println(\"Hodisa tutildi: \" + msg);\n            }\n        });\n    }\n}",
    "detailedSolution": {
      "theory": "Callback mexanizmi orqali bitta ob'yekt boshqa ob'yektga 'bu ish tugaganda mening ushbu metodimni chaqirib qo'y' deb o'z interfeysini taqdim etadi. Bu asinxron va hodisalarga asoslangan arxitekturaning negizidir.",
      "theoryEn": "Callbacks allow passing executable blocks disguised as interface implementations to be signaled upon task completion.",
      "cleanCode": "if (listener != null) listener.onComplete(\"OK\");",
      "breakdown": [
        "<code>OnAudioTrackCompletedListener listener</code>: Hodisa yuz berganda xabardor qilinuvchi tinglovchi shartnomasi."
      ],
      "pitfalls": "Tinglovchi 'null' ekanligini tekshirmasdan chaqirish xatolikka olib keladi.",
      "cw2Tip": "CW2 da buyurtma muvaffaqiyatli to'langanda oshxona ekraniga va SMS tizimiga xabar yuborishda listener qo'llaniladi."
    }
  },
  {
    "id": 136,
    "tier": 5,
    "tierName": "5-Bosqich: Hodisalar va Callback Listener",
    "sector": "Master • CW2",
    "title": {
      "uz": "136. Smart Thermostat — Callback Interfeysi va Xabarnoma",
      "en": "136. Smart Thermostat — Callback Interface & Event Dispatcher"
    },
    "scenario": {
      "uz": "Smart Thermostat tizimida operatsiya tugagach xabar beruvchi 'interface OnThermostatCompletedListener { void onComplete(String msg); }' callback interfeysini va uni chaqiruvchi 'ThermostatNotifier' sinfini tuzing.",
      "en": "Build callback architecture in Smart Thermostat: 'ThermostatNotifier' invokes 'onComplete(String msg)' on 'OnThermostatCompletedListener'."
    },
    "requirements": {
      "classes": [
        "OnThermostatCompletedListener",
        "ThermostatNotifier"
      ],
      "methods": [
        "onComplete"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "interface OnThermostatCompletedListener {\n    void onComplete(String msg);\n}\n\nclass ThermostatNotifier {\n    public void triggerEvent(OnThermostatCompletedListener listener) {\n        System.out.println(\"Smart Thermostat: Operatsiya bajarilmoqda...\");\n        if (listener != null) listener.onComplete(\"Muvaffaqiyatli!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ThermostatNotifier d = new ThermostatNotifier();\n        d.triggerEvent(new OnThermostatCompletedListener() {\n            @Override public void onComplete(String msg) {\n                System.out.println(\"Hodisa tutildi: \" + msg);\n            }\n        });\n    }\n}",
    "detailedSolution": {
      "theory": "Callback mexanizmi orqali bitta ob'yekt boshqa ob'yektga 'bu ish tugaganda mening ushbu metodimni chaqirib qo'y' deb o'z interfeysini taqdim etadi. Bu asinxron va hodisalarga asoslangan arxitekturaning negizidir.",
      "theoryEn": "Callbacks allow passing executable blocks disguised as interface implementations to be signaled upon task completion.",
      "cleanCode": "if (listener != null) listener.onComplete(\"OK\");",
      "breakdown": [
        "<code>OnThermostatCompletedListener listener</code>: Hodisa yuz berganda xabardor qilinuvchi tinglovchi shartnomasi."
      ],
      "pitfalls": "Tinglovchi 'null' ekanligini tekshirmasdan chaqirish xatolikka olib keladi.",
      "cw2Tip": "CW2 da buyurtma muvaffaqiyatli to'langanda oshxona ekraniga va SMS tizimiga xabar yuborishda listener qo'llaniladi."
    }
  },
  {
    "id": 137,
    "tier": 5,
    "tierName": "5-Bosqich: Hodisalar va Callback Listener",
    "sector": "Master • CW2",
    "title": {
      "uz": "137. Drone Delivery — Callback Interfeysi va Xabarnoma",
      "en": "137. Drone Delivery — Callback Interface & Event Dispatcher"
    },
    "scenario": {
      "uz": "Drone Delivery tizimida operatsiya tugagach xabar beruvchi 'interface OnDeliveryDroneCompletedListener { void onComplete(String msg); }' callback interfeysini va uni chaqiruvchi 'DeliveryDroneNotifier' sinfini tuzing.",
      "en": "Build callback architecture in Drone Delivery: 'DeliveryDroneNotifier' invokes 'onComplete(String msg)' on 'OnDeliveryDroneCompletedListener'."
    },
    "requirements": {
      "classes": [
        "OnDeliveryDroneCompletedListener",
        "DeliveryDroneNotifier"
      ],
      "methods": [
        "onComplete"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "interface OnDeliveryDroneCompletedListener {\n    void onComplete(String msg);\n}\n\nclass DeliveryDroneNotifier {\n    public void triggerEvent(OnDeliveryDroneCompletedListener listener) {\n        System.out.println(\"Drone Delivery: Operatsiya bajarilmoqda...\");\n        if (listener != null) listener.onComplete(\"Muvaffaqiyatli!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DeliveryDroneNotifier d = new DeliveryDroneNotifier();\n        d.triggerEvent(new OnDeliveryDroneCompletedListener() {\n            @Override public void onComplete(String msg) {\n                System.out.println(\"Hodisa tutildi: \" + msg);\n            }\n        });\n    }\n}",
    "detailedSolution": {
      "theory": "Callback mexanizmi orqali bitta ob'yekt boshqa ob'yektga 'bu ish tugaganda mening ushbu metodimni chaqirib qo'y' deb o'z interfeysini taqdim etadi. Bu asinxron va hodisalarga asoslangan arxitekturaning negizidir.",
      "theoryEn": "Callbacks allow passing executable blocks disguised as interface implementations to be signaled upon task completion.",
      "cleanCode": "if (listener != null) listener.onComplete(\"OK\");",
      "breakdown": [
        "<code>OnDeliveryDroneCompletedListener listener</code>: Hodisa yuz berganda xabardor qilinuvchi tinglovchi shartnomasi."
      ],
      "pitfalls": "Tinglovchi 'null' ekanligini tekshirmasdan chaqirish xatolikka olib keladi.",
      "cw2Tip": "CW2 da buyurtma muvaffaqiyatli to'langanda oshxona ekraniga va SMS tizimiga xabar yuborishda listener qo'llaniladi."
    }
  },
  {
    "id": 138,
    "tier": 5,
    "tierName": "5-Bosqich: Hodisalar va Callback Listener",
    "sector": "Master • CW2",
    "title": {
      "uz": "138. Smart Warehouse — Callback Interfeysi va Xabarnoma",
      "en": "138. Smart Warehouse — Callback Interface & Event Dispatcher"
    },
    "scenario": {
      "uz": "Smart Warehouse tizimida operatsiya tugagach xabar beruvchi 'interface OnStorageBayCompletedListener { void onComplete(String msg); }' callback interfeysini va uni chaqiruvchi 'StorageBayNotifier' sinfini tuzing.",
      "en": "Build callback architecture in Smart Warehouse: 'StorageBayNotifier' invokes 'onComplete(String msg)' on 'OnStorageBayCompletedListener'."
    },
    "requirements": {
      "classes": [
        "OnStorageBayCompletedListener",
        "StorageBayNotifier"
      ],
      "methods": [
        "onComplete"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "interface OnStorageBayCompletedListener {\n    void onComplete(String msg);\n}\n\nclass StorageBayNotifier {\n    public void triggerEvent(OnStorageBayCompletedListener listener) {\n        System.out.println(\"Smart Warehouse: Operatsiya bajarilmoqda...\");\n        if (listener != null) listener.onComplete(\"Muvaffaqiyatli!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StorageBayNotifier d = new StorageBayNotifier();\n        d.triggerEvent(new OnStorageBayCompletedListener() {\n            @Override public void onComplete(String msg) {\n                System.out.println(\"Hodisa tutildi: \" + msg);\n            }\n        });\n    }\n}",
    "detailedSolution": {
      "theory": "Callback mexanizmi orqali bitta ob'yekt boshqa ob'yektga 'bu ish tugaganda mening ushbu metodimni chaqirib qo'y' deb o'z interfeysini taqdim etadi. Bu asinxron va hodisalarga asoslangan arxitekturaning negizidir.",
      "theoryEn": "Callbacks allow passing executable blocks disguised as interface implementations to be signaled upon task completion.",
      "cleanCode": "if (listener != null) listener.onComplete(\"OK\");",
      "breakdown": [
        "<code>OnStorageBayCompletedListener listener</code>: Hodisa yuz berganda xabardor qilinuvchi tinglovchi shartnomasi."
      ],
      "pitfalls": "Tinglovchi 'null' ekanligini tekshirmasdan chaqirish xatolikka olib keladi.",
      "cw2Tip": "CW2 da buyurtma muvaffaqiyatli to'langanda oshxona ekraniga va SMS tizimiga xabar yuborishda listener qo'llaniladi."
    }
  },
  {
    "id": 139,
    "tier": 5,
    "tierName": "5-Bosqich: Hodisalar va Callback Listener",
    "sector": "Master • CW2",
    "title": {
      "uz": "139. Crypto Wallet — Callback Interfeysi va Xabarnoma",
      "en": "139. Crypto Wallet — Callback Interface & Event Dispatcher"
    },
    "scenario": {
      "uz": "Crypto Wallet tizimida operatsiya tugagach xabar beruvchi 'interface OnCryptoAssetCompletedListener { void onComplete(String msg); }' callback interfeysini va uni chaqiruvchi 'CryptoAssetNotifier' sinfini tuzing.",
      "en": "Build callback architecture in Crypto Wallet: 'CryptoAssetNotifier' invokes 'onComplete(String msg)' on 'OnCryptoAssetCompletedListener'."
    },
    "requirements": {
      "classes": [
        "OnCryptoAssetCompletedListener",
        "CryptoAssetNotifier"
      ],
      "methods": [
        "onComplete"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "interface OnCryptoAssetCompletedListener {\n    void onComplete(String msg);\n}\n\nclass CryptoAssetNotifier {\n    public void triggerEvent(OnCryptoAssetCompletedListener listener) {\n        System.out.println(\"Crypto Wallet: Operatsiya bajarilmoqda...\");\n        if (listener != null) listener.onComplete(\"Muvaffaqiyatli!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CryptoAssetNotifier d = new CryptoAssetNotifier();\n        d.triggerEvent(new OnCryptoAssetCompletedListener() {\n            @Override public void onComplete(String msg) {\n                System.out.println(\"Hodisa tutildi: \" + msg);\n            }\n        });\n    }\n}",
    "detailedSolution": {
      "theory": "Callback mexanizmi orqali bitta ob'yekt boshqa ob'yektga 'bu ish tugaganda mening ushbu metodimni chaqirib qo'y' deb o'z interfeysini taqdim etadi. Bu asinxron va hodisalarga asoslangan arxitekturaning negizidir.",
      "theoryEn": "Callbacks allow passing executable blocks disguised as interface implementations to be signaled upon task completion.",
      "cleanCode": "if (listener != null) listener.onComplete(\"OK\");",
      "breakdown": [
        "<code>OnCryptoAssetCompletedListener listener</code>: Hodisa yuz berganda xabardor qilinuvchi tinglovchi shartnomasi."
      ],
      "pitfalls": "Tinglovchi 'null' ekanligini tekshirmasdan chaqirish xatolikka olib keladi.",
      "cw2Tip": "CW2 da buyurtma muvaffaqiyatli to'langanda oshxona ekraniga va SMS tizimiga xabar yuborishda listener qo'llaniladi."
    }
  },
  {
    "id": 140,
    "tier": 5,
    "tierName": "5-Bosqich: Hodisalar va Callback Listener",
    "sector": "Master • CW2",
    "title": {
      "uz": "140. National Library — Callback Interfeysi va Xabarnoma",
      "en": "140. National Library — Callback Interface & Event Dispatcher"
    },
    "scenario": {
      "uz": "National Library tizimida operatsiya tugagach xabar beruvchi 'interface OnCatalogBookCompletedListener { void onComplete(String msg); }' callback interfeysini va uni chaqiruvchi 'CatalogBookNotifier' sinfini tuzing.",
      "en": "Build callback architecture in National Library: 'CatalogBookNotifier' invokes 'onComplete(String msg)' on 'OnCatalogBookCompletedListener'."
    },
    "requirements": {
      "classes": [
        "OnCatalogBookCompletedListener",
        "CatalogBookNotifier"
      ],
      "methods": [
        "onComplete"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "interface OnCatalogBookCompletedListener {\n    void onComplete(String msg);\n}\n\nclass CatalogBookNotifier {\n    public void triggerEvent(OnCatalogBookCompletedListener listener) {\n        System.out.println(\"National Library: Operatsiya bajarilmoqda...\");\n        if (listener != null) listener.onComplete(\"Muvaffaqiyatli!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CatalogBookNotifier d = new CatalogBookNotifier();\n        d.triggerEvent(new OnCatalogBookCompletedListener() {\n            @Override public void onComplete(String msg) {\n                System.out.println(\"Hodisa tutildi: \" + msg);\n            }\n        });\n    }\n}",
    "detailedSolution": {
      "theory": "Callback mexanizmi orqali bitta ob'yekt boshqa ob'yektga 'bu ish tugaganda mening ushbu metodimni chaqirib qo'y' deb o'z interfeysini taqdim etadi. Bu asinxron va hodisalarga asoslangan arxitekturaning negizidir.",
      "theoryEn": "Callbacks allow passing executable blocks disguised as interface implementations to be signaled upon task completion.",
      "cleanCode": "if (listener != null) listener.onComplete(\"OK\");",
      "breakdown": [
        "<code>OnCatalogBookCompletedListener listener</code>: Hodisa yuz berganda xabardor qilinuvchi tinglovchi shartnomasi."
      ],
      "pitfalls": "Tinglovchi 'null' ekanligini tekshirmasdan chaqirish xatolikka olib keladi.",
      "cw2Tip": "CW2 da buyurtma muvaffaqiyatli to'langanda oshxona ekraniga va SMS tizimiga xabar yuborishda listener qo'llaniladi."
    }
  },
  {
    "id": 141,
    "tier": 5,
    "tierName": "5-Bosqich: Hodisalar va Callback Listener",
    "sector": "Master • CW2",
    "title": {
      "uz": "141. BeFit Club — Callback Interfeysi va Xabarnoma",
      "en": "141. BeFit Club — Callback Interface & Event Dispatcher"
    },
    "scenario": {
      "uz": "BeFit Club tizimida operatsiya tugagach xabar beruvchi 'interface OnGymMemberCompletedListener { void onComplete(String msg); }' callback interfeysini va uni chaqiruvchi 'GymMemberNotifier' sinfini tuzing.",
      "en": "Build callback architecture in BeFit Club: 'GymMemberNotifier' invokes 'onComplete(String msg)' on 'OnGymMemberCompletedListener'."
    },
    "requirements": {
      "classes": [
        "OnGymMemberCompletedListener",
        "GymMemberNotifier"
      ],
      "methods": [
        "onComplete"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "interface OnGymMemberCompletedListener {\n    void onComplete(String msg);\n}\n\nclass GymMemberNotifier {\n    public void triggerEvent(OnGymMemberCompletedListener listener) {\n        System.out.println(\"BeFit Club: Operatsiya bajarilmoqda...\");\n        if (listener != null) listener.onComplete(\"Muvaffaqiyatli!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GymMemberNotifier d = new GymMemberNotifier();\n        d.triggerEvent(new OnGymMemberCompletedListener() {\n            @Override public void onComplete(String msg) {\n                System.out.println(\"Hodisa tutildi: \" + msg);\n            }\n        });\n    }\n}",
    "detailedSolution": {
      "theory": "Callback mexanizmi orqali bitta ob'yekt boshqa ob'yektga 'bu ish tugaganda mening ushbu metodimni chaqirib qo'y' deb o'z interfeysini taqdim etadi. Bu asinxron va hodisalarga asoslangan arxitekturaning negizidir.",
      "theoryEn": "Callbacks allow passing executable blocks disguised as interface implementations to be signaled upon task completion.",
      "cleanCode": "if (listener != null) listener.onComplete(\"OK\");",
      "breakdown": [
        "<code>OnGymMemberCompletedListener listener</code>: Hodisa yuz berganda xabardor qilinuvchi tinglovchi shartnomasi."
      ],
      "pitfalls": "Tinglovchi 'null' ekanligini tekshirmasdan chaqirish xatolikka olib keladi.",
      "cw2Tip": "CW2 da buyurtma muvaffaqiyatli to'langanda oshxona ekraniga va SMS tizimiga xabar yuborishda listener qo'llaniladi."
    }
  },
  {
    "id": 142,
    "tier": 5,
    "tierName": "5-Bosqich: Hodisalar va Callback Listener",
    "sector": "Master • CW2",
    "title": {
      "uz": "142. Tashkent Parking — Callback Interfeysi va Xabarnoma",
      "en": "142. Tashkent Parking — Callback Interface & Event Dispatcher"
    },
    "scenario": {
      "uz": "Tashkent Parking tizimida operatsiya tugagach xabar beruvchi 'interface OnParkingBayCompletedListener { void onComplete(String msg); }' callback interfeysini va uni chaqiruvchi 'ParkingBayNotifier' sinfini tuzing.",
      "en": "Build callback architecture in Tashkent Parking: 'ParkingBayNotifier' invokes 'onComplete(String msg)' on 'OnParkingBayCompletedListener'."
    },
    "requirements": {
      "classes": [
        "OnParkingBayCompletedListener",
        "ParkingBayNotifier"
      ],
      "methods": [
        "onComplete"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "interface OnParkingBayCompletedListener {\n    void onComplete(String msg);\n}\n\nclass ParkingBayNotifier {\n    public void triggerEvent(OnParkingBayCompletedListener listener) {\n        System.out.println(\"Tashkent Parking: Operatsiya bajarilmoqda...\");\n        if (listener != null) listener.onComplete(\"Muvaffaqiyatli!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ParkingBayNotifier d = new ParkingBayNotifier();\n        d.triggerEvent(new OnParkingBayCompletedListener() {\n            @Override public void onComplete(String msg) {\n                System.out.println(\"Hodisa tutildi: \" + msg);\n            }\n        });\n    }\n}",
    "detailedSolution": {
      "theory": "Callback mexanizmi orqali bitta ob'yekt boshqa ob'yektga 'bu ish tugaganda mening ushbu metodimni chaqirib qo'y' deb o'z interfeysini taqdim etadi. Bu asinxron va hodisalarga asoslangan arxitekturaning negizidir.",
      "theoryEn": "Callbacks allow passing executable blocks disguised as interface implementations to be signaled upon task completion.",
      "cleanCode": "if (listener != null) listener.onComplete(\"OK\");",
      "breakdown": [
        "<code>OnParkingBayCompletedListener listener</code>: Hodisa yuz berganda xabardor qilinuvchi tinglovchi shartnomasi."
      ],
      "pitfalls": "Tinglovchi 'null' ekanligini tekshirmasdan chaqirish xatolikka olib keladi.",
      "cw2Tip": "CW2 da buyurtma muvaffaqiyatli to'langanda oshxona ekraniga va SMS tizimiga xabar yuborishda listener qo'llaniladi."
    }
  },
  {
    "id": 143,
    "tier": 5,
    "tierName": "5-Bosqich: Hodisalar va Callback Listener",
    "sector": "Master • CW2",
    "title": {
      "uz": "143. Medion Clinic — Callback Interfeysi va Xabarnoma",
      "en": "143. Medion Clinic — Callback Interface & Event Dispatcher"
    },
    "scenario": {
      "uz": "Medion Clinic tizimida operatsiya tugagach xabar beruvchi 'interface OnPatientRecordCompletedListener { void onComplete(String msg); }' callback interfeysini va uni chaqiruvchi 'PatientRecordNotifier' sinfini tuzing.",
      "en": "Build callback architecture in Medion Clinic: 'PatientRecordNotifier' invokes 'onComplete(String msg)' on 'OnPatientRecordCompletedListener'."
    },
    "requirements": {
      "classes": [
        "OnPatientRecordCompletedListener",
        "PatientRecordNotifier"
      ],
      "methods": [
        "onComplete"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "interface OnPatientRecordCompletedListener {\n    void onComplete(String msg);\n}\n\nclass PatientRecordNotifier {\n    public void triggerEvent(OnPatientRecordCompletedListener listener) {\n        System.out.println(\"Medion Clinic: Operatsiya bajarilmoqda...\");\n        if (listener != null) listener.onComplete(\"Muvaffaqiyatli!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PatientRecordNotifier d = new PatientRecordNotifier();\n        d.triggerEvent(new OnPatientRecordCompletedListener() {\n            @Override public void onComplete(String msg) {\n                System.out.println(\"Hodisa tutildi: \" + msg);\n            }\n        });\n    }\n}",
    "detailedSolution": {
      "theory": "Callback mexanizmi orqali bitta ob'yekt boshqa ob'yektga 'bu ish tugaganda mening ushbu metodimni chaqirib qo'y' deb o'z interfeysini taqdim etadi. Bu asinxron va hodisalarga asoslangan arxitekturaning negizidir.",
      "theoryEn": "Callbacks allow passing executable blocks disguised as interface implementations to be signaled upon task completion.",
      "cleanCode": "if (listener != null) listener.onComplete(\"OK\");",
      "breakdown": [
        "<code>OnPatientRecordCompletedListener listener</code>: Hodisa yuz berganda xabardor qilinuvchi tinglovchi shartnomasi."
      ],
      "pitfalls": "Tinglovchi 'null' ekanligini tekshirmasdan chaqirish xatolikka olib keladi.",
      "cw2Tip": "CW2 da buyurtma muvaffaqiyatli to'langanda oshxona ekraniga va SMS tizimiga xabar yuborishda listener qo'llaniladi."
    }
  },
  {
    "id": 144,
    "tier": 5,
    "tierName": "5-Bosqich: Hodisalar va Callback Listener",
    "sector": "Master • CW2",
    "title": {
      "uz": "144. Hyatt Regency — Callback Interfeysi va Xabarnoma",
      "en": "144. Hyatt Regency — Callback Interface & Event Dispatcher"
    },
    "scenario": {
      "uz": "Hyatt Regency tizimida operatsiya tugagach xabar beruvchi 'interface OnHotelReservationCompletedListener { void onComplete(String msg); }' callback interfeysini va uni chaqiruvchi 'HotelReservationNotifier' sinfini tuzing.",
      "en": "Build callback architecture in Hyatt Regency: 'HotelReservationNotifier' invokes 'onComplete(String msg)' on 'OnHotelReservationCompletedListener'."
    },
    "requirements": {
      "classes": [
        "OnHotelReservationCompletedListener",
        "HotelReservationNotifier"
      ],
      "methods": [
        "onComplete"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "interface OnHotelReservationCompletedListener {\n    void onComplete(String msg);\n}\n\nclass HotelReservationNotifier {\n    public void triggerEvent(OnHotelReservationCompletedListener listener) {\n        System.out.println(\"Hyatt Regency: Operatsiya bajarilmoqda...\");\n        if (listener != null) listener.onComplete(\"Muvaffaqiyatli!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        HotelReservationNotifier d = new HotelReservationNotifier();\n        d.triggerEvent(new OnHotelReservationCompletedListener() {\n            @Override public void onComplete(String msg) {\n                System.out.println(\"Hodisa tutildi: \" + msg);\n            }\n        });\n    }\n}",
    "detailedSolution": {
      "theory": "Callback mexanizmi orqali bitta ob'yekt boshqa ob'yektga 'bu ish tugaganda mening ushbu metodimni chaqirib qo'y' deb o'z interfeysini taqdim etadi. Bu asinxron va hodisalarga asoslangan arxitekturaning negizidir.",
      "theoryEn": "Callbacks allow passing executable blocks disguised as interface implementations to be signaled upon task completion.",
      "cleanCode": "if (listener != null) listener.onComplete(\"OK\");",
      "breakdown": [
        "<code>OnHotelReservationCompletedListener listener</code>: Hodisa yuz berganda xabardor qilinuvchi tinglovchi shartnomasi."
      ],
      "pitfalls": "Tinglovchi 'null' ekanligini tekshirmasdan chaqirish xatolikka olib keladi.",
      "cw2Tip": "CW2 da buyurtma muvaffaqiyatli to'langanda oshxona ekraniga va SMS tizimiga xabar yuborishda listener qo'llaniladi."
    }
  },
  {
    "id": 145,
    "tier": 5,
    "tierName": "5-Bosqich: Hodisalar va Callback Listener",
    "sector": "Master • CW2",
    "title": {
      "uz": "145. Premier Cinema — Callback Interfeysi va Xabarnoma",
      "en": "145. Premier Cinema — Callback Interface & Event Dispatcher"
    },
    "scenario": {
      "uz": "Premier Cinema tizimida operatsiya tugagach xabar beruvchi 'interface OnCinemaTicketCompletedListener { void onComplete(String msg); }' callback interfeysini va uni chaqiruvchi 'CinemaTicketNotifier' sinfini tuzing.",
      "en": "Build callback architecture in Premier Cinema: 'CinemaTicketNotifier' invokes 'onComplete(String msg)' on 'OnCinemaTicketCompletedListener'."
    },
    "requirements": {
      "classes": [
        "OnCinemaTicketCompletedListener",
        "CinemaTicketNotifier"
      ],
      "methods": [
        "onComplete"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "interface OnCinemaTicketCompletedListener {\n    void onComplete(String msg);\n}\n\nclass CinemaTicketNotifier {\n    public void triggerEvent(OnCinemaTicketCompletedListener listener) {\n        System.out.println(\"Premier Cinema: Operatsiya bajarilmoqda...\");\n        if (listener != null) listener.onComplete(\"Muvaffaqiyatli!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CinemaTicketNotifier d = new CinemaTicketNotifier();\n        d.triggerEvent(new OnCinemaTicketCompletedListener() {\n            @Override public void onComplete(String msg) {\n                System.out.println(\"Hodisa tutildi: \" + msg);\n            }\n        });\n    }\n}",
    "detailedSolution": {
      "theory": "Callback mexanizmi orqali bitta ob'yekt boshqa ob'yektga 'bu ish tugaganda mening ushbu metodimni chaqirib qo'y' deb o'z interfeysini taqdim etadi. Bu asinxron va hodisalarga asoslangan arxitekturaning negizidir.",
      "theoryEn": "Callbacks allow passing executable blocks disguised as interface implementations to be signaled upon task completion.",
      "cleanCode": "if (listener != null) listener.onComplete(\"OK\");",
      "breakdown": [
        "<code>OnCinemaTicketCompletedListener listener</code>: Hodisa yuz berganda xabardor qilinuvchi tinglovchi shartnomasi."
      ],
      "pitfalls": "Tinglovchi 'null' ekanligini tekshirmasdan chaqirish xatolikka olib keladi.",
      "cw2Tip": "CW2 da buyurtma muvaffaqiyatli to'langanda oshxona ekraniga va SMS tizimiga xabar yuborishda listener qo'llaniladi."
    }
  },
  {
    "id": 146,
    "tier": 5,
    "tierName": "5-Bosqich: Hodisalar va Callback Listener",
    "sector": "Master • CW2",
    "title": {
      "uz": "146. Yandex Scooter — Callback Interfeysi va Xabarnoma",
      "en": "146. Yandex Scooter — Callback Interface & Event Dispatcher"
    },
    "scenario": {
      "uz": "Yandex Scooter tizimida operatsiya tugagach xabar beruvchi 'interface OnElectricScooterCompletedListener { void onComplete(String msg); }' callback interfeysini va uni chaqiruvchi 'ElectricScooterNotifier' sinfini tuzing.",
      "en": "Build callback architecture in Yandex Scooter: 'ElectricScooterNotifier' invokes 'onComplete(String msg)' on 'OnElectricScooterCompletedListener'."
    },
    "requirements": {
      "classes": [
        "OnElectricScooterCompletedListener",
        "ElectricScooterNotifier"
      ],
      "methods": [
        "onComplete"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "interface OnElectricScooterCompletedListener {\n    void onComplete(String msg);\n}\n\nclass ElectricScooterNotifier {\n    public void triggerEvent(OnElectricScooterCompletedListener listener) {\n        System.out.println(\"Yandex Scooter: Operatsiya bajarilmoqda...\");\n        if (listener != null) listener.onComplete(\"Muvaffaqiyatli!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ElectricScooterNotifier d = new ElectricScooterNotifier();\n        d.triggerEvent(new OnElectricScooterCompletedListener() {\n            @Override public void onComplete(String msg) {\n                System.out.println(\"Hodisa tutildi: \" + msg);\n            }\n        });\n    }\n}",
    "detailedSolution": {
      "theory": "Callback mexanizmi orqali bitta ob'yekt boshqa ob'yektga 'bu ish tugaganda mening ushbu metodimni chaqirib qo'y' deb o'z interfeysini taqdim etadi. Bu asinxron va hodisalarga asoslangan arxitekturaning negizidir.",
      "theoryEn": "Callbacks allow passing executable blocks disguised as interface implementations to be signaled upon task completion.",
      "cleanCode": "if (listener != null) listener.onComplete(\"OK\");",
      "breakdown": [
        "<code>OnElectricScooterCompletedListener listener</code>: Hodisa yuz berganda xabardor qilinuvchi tinglovchi shartnomasi."
      ],
      "pitfalls": "Tinglovchi 'null' ekanligini tekshirmasdan chaqirish xatolikka olib keladi.",
      "cw2Tip": "CW2 da buyurtma muvaffaqiyatli to'langanda oshxona ekraniga va SMS tizimiga xabar yuborishda listener qo'llaniladi."
    }
  },
  {
    "id": 147,
    "tier": 5,
    "tierName": "5-Bosqich: Hodisalar va Callback Listener",
    "sector": "Master • CW2",
    "title": {
      "uz": "147. Weather Network — Callback Interfeysi va Xabarnoma",
      "en": "147. Weather Network — Callback Interface & Event Dispatcher"
    },
    "scenario": {
      "uz": "Weather Network tizimida operatsiya tugagach xabar beruvchi 'interface OnMeteoStationCompletedListener { void onComplete(String msg); }' callback interfeysini va uni chaqiruvchi 'MeteoStationNotifier' sinfini tuzing.",
      "en": "Build callback architecture in Weather Network: 'MeteoStationNotifier' invokes 'onComplete(String msg)' on 'OnMeteoStationCompletedListener'."
    },
    "requirements": {
      "classes": [
        "OnMeteoStationCompletedListener",
        "MeteoStationNotifier"
      ],
      "methods": [
        "onComplete"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "interface OnMeteoStationCompletedListener {\n    void onComplete(String msg);\n}\n\nclass MeteoStationNotifier {\n    public void triggerEvent(OnMeteoStationCompletedListener listener) {\n        System.out.println(\"Weather Network: Operatsiya bajarilmoqda...\");\n        if (listener != null) listener.onComplete(\"Muvaffaqiyatli!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MeteoStationNotifier d = new MeteoStationNotifier();\n        d.triggerEvent(new OnMeteoStationCompletedListener() {\n            @Override public void onComplete(String msg) {\n                System.out.println(\"Hodisa tutildi: \" + msg);\n            }\n        });\n    }\n}",
    "detailedSolution": {
      "theory": "Callback mexanizmi orqali bitta ob'yekt boshqa ob'yektga 'bu ish tugaganda mening ushbu metodimni chaqirib qo'y' deb o'z interfeysini taqdim etadi. Bu asinxron va hodisalarga asoslangan arxitekturaning negizidir.",
      "theoryEn": "Callbacks allow passing executable blocks disguised as interface implementations to be signaled upon task completion.",
      "cleanCode": "if (listener != null) listener.onComplete(\"OK\");",
      "breakdown": [
        "<code>OnMeteoStationCompletedListener listener</code>: Hodisa yuz berganda xabardor qilinuvchi tinglovchi shartnomasi."
      ],
      "pitfalls": "Tinglovchi 'null' ekanligini tekshirmasdan chaqirish xatolikka olib keladi.",
      "cw2Tip": "CW2 da buyurtma muvaffaqiyatli to'langanda oshxona ekraniga va SMS tizimiga xabar yuborishda listener qo'llaniladi."
    }
  },
  {
    "id": 148,
    "tier": 5,
    "tierName": "5-Bosqich: Hodisalar va Callback Listener",
    "sector": "Master • CW2",
    "title": {
      "uz": "148. OpenMarket Auction — Callback Interfeysi va Xabarnoma",
      "en": "148. OpenMarket Auction — Callback Interface & Event Dispatcher"
    },
    "scenario": {
      "uz": "OpenMarket Auction tizimida operatsiya tugagach xabar beruvchi 'interface OnAuctionLotCompletedListener { void onComplete(String msg); }' callback interfeysini va uni chaqiruvchi 'AuctionLotNotifier' sinfini tuzing.",
      "en": "Build callback architecture in OpenMarket Auction: 'AuctionLotNotifier' invokes 'onComplete(String msg)' on 'OnAuctionLotCompletedListener'."
    },
    "requirements": {
      "classes": [
        "OnAuctionLotCompletedListener",
        "AuctionLotNotifier"
      ],
      "methods": [
        "onComplete"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "interface OnAuctionLotCompletedListener {\n    void onComplete(String msg);\n}\n\nclass AuctionLotNotifier {\n    public void triggerEvent(OnAuctionLotCompletedListener listener) {\n        System.out.println(\"OpenMarket Auction: Operatsiya bajarilmoqda...\");\n        if (listener != null) listener.onComplete(\"Muvaffaqiyatli!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AuctionLotNotifier d = new AuctionLotNotifier();\n        d.triggerEvent(new OnAuctionLotCompletedListener() {\n            @Override public void onComplete(String msg) {\n                System.out.println(\"Hodisa tutildi: \" + msg);\n            }\n        });\n    }\n}",
    "detailedSolution": {
      "theory": "Callback mexanizmi orqali bitta ob'yekt boshqa ob'yektga 'bu ish tugaganda mening ushbu metodimni chaqirib qo'y' deb o'z interfeysini taqdim etadi. Bu asinxron va hodisalarga asoslangan arxitekturaning negizidir.",
      "theoryEn": "Callbacks allow passing executable blocks disguised as interface implementations to be signaled upon task completion.",
      "cleanCode": "if (listener != null) listener.onComplete(\"OK\");",
      "breakdown": [
        "<code>OnAuctionLotCompletedListener listener</code>: Hodisa yuz berganda xabardor qilinuvchi tinglovchi shartnomasi."
      ],
      "pitfalls": "Tinglovchi 'null' ekanligini tekshirmasdan chaqirish xatolikka olib keladi.",
      "cw2Tip": "CW2 da buyurtma muvaffaqiyatli to'langanda oshxona ekraniga va SMS tizimiga xabar yuborishda listener qo'llaniladi."
    }
  },
  {
    "id": 149,
    "tier": 5,
    "tierName": "5-Bosqich: Hodisalar va Callback Listener",
    "sector": "Master • CW2",
    "title": {
      "uz": "149. Solar Energy Grid — Callback Interfeysi va Xabarnoma",
      "en": "149. Solar Energy Grid — Callback Interface & Event Dispatcher"
    },
    "scenario": {
      "uz": "Solar Energy Grid tizimida operatsiya tugagach xabar beruvchi 'interface OnSolarInverterCompletedListener { void onComplete(String msg); }' callback interfeysini va uni chaqiruvchi 'SolarInverterNotifier' sinfini tuzing.",
      "en": "Build callback architecture in Solar Energy Grid: 'SolarInverterNotifier' invokes 'onComplete(String msg)' on 'OnSolarInverterCompletedListener'."
    },
    "requirements": {
      "classes": [
        "OnSolarInverterCompletedListener",
        "SolarInverterNotifier"
      ],
      "methods": [
        "onComplete"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "interface OnSolarInverterCompletedListener {\n    void onComplete(String msg);\n}\n\nclass SolarInverterNotifier {\n    public void triggerEvent(OnSolarInverterCompletedListener listener) {\n        System.out.println(\"Solar Energy Grid: Operatsiya bajarilmoqda...\");\n        if (listener != null) listener.onComplete(\"Muvaffaqiyatli!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SolarInverterNotifier d = new SolarInverterNotifier();\n        d.triggerEvent(new OnSolarInverterCompletedListener() {\n            @Override public void onComplete(String msg) {\n                System.out.println(\"Hodisa tutildi: \" + msg);\n            }\n        });\n    }\n}",
    "detailedSolution": {
      "theory": "Callback mexanizmi orqali bitta ob'yekt boshqa ob'yektga 'bu ish tugaganda mening ushbu metodimni chaqirib qo'y' deb o'z interfeysini taqdim etadi. Bu asinxron va hodisalarga asoslangan arxitekturaning negizidir.",
      "theoryEn": "Callbacks allow passing executable blocks disguised as interface implementations to be signaled upon task completion.",
      "cleanCode": "if (listener != null) listener.onComplete(\"OK\");",
      "breakdown": [
        "<code>OnSolarInverterCompletedListener listener</code>: Hodisa yuz berganda xabardor qilinuvchi tinglovchi shartnomasi."
      ],
      "pitfalls": "Tinglovchi 'null' ekanligini tekshirmasdan chaqirish xatolikka olib keladi.",
      "cw2Tip": "CW2 da buyurtma muvaffaqiyatli to'langanda oshxona ekraniga va SMS tizimiga xabar yuborishda listener qo'llaniladi."
    }
  },
  {
    "id": 150,
    "tier": 5,
    "tierName": "5-Bosqich: Hodisalar va Callback Listener",
    "sector": "Master • CW2",
    "title": {
      "uz": "150. O'zbekiston Temir Yo'llari — Callback Interfeysi va Xabarnoma",
      "en": "150. O'zbekiston Temir Yo'llari — Callback Interface & Event Dispatcher"
    },
    "scenario": {
      "uz": "O'zbekiston Temir Yo'llari tizimida operatsiya tugagach xabar beruvchi 'interface OnTrainRouteCompletedListener { void onComplete(String msg); }' callback interfeysini va uni chaqiruvchi 'TrainRouteNotifier' sinfini tuzing.",
      "en": "Build callback architecture in O'zbekiston Temir Yo'llari: 'TrainRouteNotifier' invokes 'onComplete(String msg)' on 'OnTrainRouteCompletedListener'."
    },
    "requirements": {
      "classes": [
        "OnTrainRouteCompletedListener",
        "TrainRouteNotifier"
      ],
      "methods": [
        "onComplete"
      ],
      "keywords": [
        "interface"
      ]
    },
    "starterCode": "",
    "solution": "interface OnTrainRouteCompletedListener {\n    void onComplete(String msg);\n}\n\nclass TrainRouteNotifier {\n    public void triggerEvent(OnTrainRouteCompletedListener listener) {\n        System.out.println(\"O'zbekiston Temir Yo'llari: Operatsiya bajarilmoqda...\");\n        if (listener != null) listener.onComplete(\"Muvaffaqiyatli!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TrainRouteNotifier d = new TrainRouteNotifier();\n        d.triggerEvent(new OnTrainRouteCompletedListener() {\n            @Override public void onComplete(String msg) {\n                System.out.println(\"Hodisa tutildi: \" + msg);\n            }\n        });\n    }\n}",
    "detailedSolution": {
      "theory": "Callback mexanizmi orqali bitta ob'yekt boshqa ob'yektga 'bu ish tugaganda mening ushbu metodimni chaqirib qo'y' deb o'z interfeysini taqdim etadi. Bu asinxron va hodisalarga asoslangan arxitekturaning negizidir.",
      "theoryEn": "Callbacks allow passing executable blocks disguised as interface implementations to be signaled upon task completion.",
      "cleanCode": "if (listener != null) listener.onComplete(\"OK\");",
      "breakdown": [
        "<code>OnTrainRouteCompletedListener listener</code>: Hodisa yuz berganda xabardor qilinuvchi tinglovchi shartnomasi."
      ],
      "pitfalls": "Tinglovchi 'null' ekanligini tekshirmasdan chaqirish xatolikka olib keladi.",
      "cw2Tip": "CW2 da buyurtma muvaffaqiyatli to'langanda oshxona ekraniga va SMS tizimiga xabar yuborishda listener qo'llaniladi."
    }
  }
];
