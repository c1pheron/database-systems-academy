// WIUT OOP (5COSC018C) — WEEK 3 MASTER CURRICULUM (150 PROGRESSIVE CHALLENGES)
// Architectural Progression: 50 Micro-Clusters × 3 Challenges Max (Rule of 3)
// Fully Aligned with WIUT Lecture 3, Seminar 3, Workshop 3, Coursework 2 & Viva Exams
// Author: Professor Ada • Senior Java Architect & Examiner

(typeof window !== 'undefined' ? window : global).OOP_CHALLENGES_W3 = [
  {
    "id": 1,
    "tier": 1,
    "tierName": "1-Bosqich: 'extends' va Asosiy Merosxo'rlik",
    "sector": "1-30",
    "title": {
      "uz": "1. Uzum Market — Person va Customer Merosxo'rligi",
      "en": "1. Uzum Market — Person and Customer Inheritance",
      "ru": "1. Рынок Узум — наследование Person и Customer"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nUzum Market elektron tijorat tizimida barcha foydalanuvchilar 'Person' (shaxs) hisoblanadi. Xarid qiluvchi mijoz esa shaxsning xususiy ko'rinishidir ('Customer is-a Person'). 'Customer' klassini 'Person' dan meros oling.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Ota sinf 'Person' ni e'lon qiling: 'private String fullName;' maydoni va uning getter/setterini qo'shing.\n2. Avlod sinf 'Customer' ni yarating va 'extends Person' orqali ota sinfdan meros oling.\n3. 'Customer' ga xususiy 'private String customerCode;' maydonini va uning getter/setterini qo'shing.\n4. 'Main' klassi 'main' metodida 'Customer' ob'yektini yarating.\n5. Ismiga \"Ali Valiyev\", kodiga \"UZM-771\" qiymatlarini bering va konsolga: \"Mijoz: Ali Valiyev | Kod: UZM-771\" deb chop eting.",
      "en": "📖 Real-World Scenario & Context\nOn Uzum Market, Customer is-a Person. Derive Customer from Person using extends.\n\n📋 Actionable Steps\n1. Declare superclass Person with 'private String fullName;' and getter/setter.\n2. Declare subclass Customer extending Person.\n3. Add 'private String customerCode;' and getter/setter in Customer.\n4. In Main.main, instantiate Customer.\n5. Set fullName=\"Ali Valiyev\", customerCode=\"UZM-771\", and print: \"Mijoz: Ali Valiyev | Kod: UZM-771\".",
      "ru": "📖 Контекст задачи\nВ Uzum Market клиент Customer наследует свойства Person.\n\n📋 Шаги реализации\n1. Объявите Person с private String fullName и геттером/сеттером.\n2. Создайте Customer extends Person с полем customerCode.\n3. В main создайте объект, установите значения и выведите: \"Mijoz: Ali Valiyev | Kod: UZM-771\"."
    },
    "requirements": {
      "classes": [
        "Person",
        "Customer",
        "Main"
      ],
      "fields": [
        {
          "name": "fullName",
          "type": "String"
        },
        {
          "name": "customerCode",
          "type": "String"
        }
      ],
      "privateFields": [
        "fullName",
        "customerCode"
      ],
      "methods": [
        "getFullName",
        "setFullName",
        "getCustomerCode",
        "setCustomerCode"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class Person {\n    \n}\n\nclass Customer extends Person {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Person {\n    private String fullName;\n\n    public String getFullName() {\n        return fullName;\n    }\n\n    public void setFullName(String fullName) {\n        this.fullName = fullName;\n    }\n}\n\nclass Customer extends Person {\n    private String customerCode;\n\n    public String getCustomerCode() {\n        return customerCode;\n    }\n\n    public void setCustomerCode(String customerCode) {\n        this.customerCode = customerCode;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer();\n        c.setFullName(\"Ali Valiyev\");\n        c.setCustomerCode(\"UZM-771\");\n        System.out.println(\"Mijoz: \" + c.getFullName() + \" | Kod: \" + c.getCustomerCode());\n    }\n}",
    "detailedSolution": {
      "uz": "class Customer extends Person orqali Customer Person sinfining fullName maydoni metodlarini o'zlashtiradi.",
      "en": "Customer extends Person grants Customer access to public methods of Person.",
      "ru": "Customer extends Person дает доступ к методам Person."
    }
  },
  {
    "id": 2,
    "tier": 1,
    "tierName": "1-Bosqich: 'extends' va Asosiy Merosxo'rlik",
    "sector": "1-30",
    "title": {
      "uz": "2. Payme Wallet — Account va SavingsAccount Merosxo'rligi",
      "en": "2. Payme Wallet — Account and SavingsAccount Inheritance",
      "ru": "2. Payme Wallet — наследование Account и SavingsAccount"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nPayme hamyonida asosiy hisob 'Account' mavjud. Maqsadli jamg'arma hisobi esa 'SavingsAccount is-a Account' hisoblanadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. Ota sinf 'Account' ni yarating: 'private String accountNumber;' va uning getter/setteri.\n2. Avlod sinf 'SavingsAccount' ni 'extends Account' qilib oching.\n3. 'SavingsAccount' ga 'private String targetGoal;' maydoni va uning getter/setterini qo'shing.\n4. 'Main' klassida 'SavingsAccount' ob'yektini yarating.\n5. Hisob raqamiga \"ACC-9021\", maqsadiga \"Yangi Noutbuk\" bering va chop eting: \"Hisob: ACC-9021 | Maqsad: Yangi Noutbuk\".",
      "en": "📖 Real-World Scenario\nSavingsAccount is-a Account in Payme.\n\n📋 Steps\n1. Declare Account with private String accountNumber.\n2. Declare SavingsAccount extends Account with private String targetGoal.\n3. In Main, instantiate, set \"ACC-9021\" and \"Yangi Noutbuk\", and print: \"Hisob: ACC-9021 | Maqsad: Yangi Noutbuk\".",
      "ru": "📖 Контекст\nSavingsAccount extends Account в Payme.\n\n📋 Шаги\n1. Создайте Account и SavingsAccount.\n2. В main установите значения и выведите: \"Hisob: ACC-9021 | Maqsad: Yangi Noutbuk\"."
    },
    "requirements": {
      "classes": [
        "Account",
        "SavingsAccount",
        "Main"
      ],
      "fields": [
        {
          "name": "accountNumber",
          "type": "String"
        },
        {
          "name": "targetGoal",
          "type": "String"
        }
      ],
      "privateFields": [
        "accountNumber",
        "targetGoal"
      ],
      "methods": [
        "getAccountNumber",
        "setAccountNumber",
        "getTargetGoal",
        "setTargetGoal"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class Account {\n    \n}\n\nclass SavingsAccount extends Account {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Account {\n    private String accountNumber;\n\n    public String getAccountNumber() {\n        return accountNumber;\n    }\n\n    public void setAccountNumber(String accountNumber) {\n        this.accountNumber = accountNumber;\n    }\n}\n\nclass SavingsAccount extends Account {\n    private String targetGoal;\n\n    public String getTargetGoal() {\n        return targetGoal;\n    }\n\n    public void setTargetGoal(String targetGoal) {\n        this.targetGoal = targetGoal;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SavingsAccount sa = new SavingsAccount();\n        sa.setAccountNumber(\"ACC-9021\");\n        sa.setTargetGoal(\"Yangi Noutbuk\");\n        System.out.println(\"Hisob: \" + sa.getAccountNumber() + \" | Maqsad: \" + sa.getTargetGoal());\n    }\n}",
    "detailedSolution": {
      "uz": "SavingsAccount ota sinf maydonlarini meros oladi va o'zining targetGoal xususiyatini qo'shadi.",
      "en": "SavingsAccount inherits Account fields and adds targetGoal.",
      "ru": "SavingsAccount наследует поля Account и добавляет targetGoal."
    }
  },
  {
    "id": 3,
    "tier": 1,
    "tierName": "1-Bosqich: 'extends' va Asosiy Merosxo'rlik",
    "sector": "1-30",
    "title": {
      "uz": "3. Yandex Go — Vehicle va TaxiCar Merosxo'rligi",
      "en": "3. Yandex Go — Vehicle and TaxiCar Inheritance",
      "ru": "3. Yandex Go — наследование Vehicle и TaxiCar"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nYandex Go da yo'lovchi tashuvchi taksi avtomobili 'TaxiCar is-a Vehicle' hisoblanadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Vehicle' sinfini e'lon qiling: 'private String plateNumber;' va uning getter/setteri.\n2. 'TaxiCar' sinfini 'extends Vehicle' qilib yarating.\n3. 'TaxiCar' ga 'private String tariffCategory;' maydoni va uning getter/setterini qo'shing.\n4. 'Main' metodida 'TaxiCar' ob'yektini yarating.\n5. Raqamga \"01A777AA\", tarifga \"Komfort+\" berib chop eting: \"Raqam: 01A777AA | Tarif: Komfort+\".",
      "en": "📖 Real-World Scenario\nTaxiCar extends Vehicle in Yandex Go.\n\n📋 Steps\n1. Declare Vehicle with plateNumber.\n2. Declare TaxiCar extends Vehicle with tariffCategory.\n3. In Main, instantiate and print: \"Raqam: 01A777AA | Tarif: Komfort+\".",
      "ru": "📖 Контекст\nTaxiCar extends Vehicle.\n\n📋 Шаги\n1. Создайте Vehicle и TaxiCar.\n2. В main выведите: \"Raqam: 01A777AA | Tarif: Komfort+\"."
    },
    "requirements": {
      "classes": [
        "Vehicle",
        "TaxiCar",
        "Main"
      ],
      "fields": [
        {
          "name": "plateNumber",
          "type": "String"
        },
        {
          "name": "tariffCategory",
          "type": "String"
        }
      ],
      "privateFields": [
        "plateNumber",
        "tariffCategory"
      ],
      "methods": [
        "getPlateNumber",
        "setPlateNumber",
        "getTariffCategory",
        "setTariffCategory"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class Vehicle {\n    \n}\n\nclass TaxiCar extends Vehicle {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Vehicle {\n    private String plateNumber;\n\n    public String getPlateNumber() {\n        return plateNumber;\n    }\n\n    public void setPlateNumber(String plateNumber) {\n        this.plateNumber = plateNumber;\n    }\n}\n\nclass TaxiCar extends Vehicle {\n    private String tariffCategory;\n\n    public String getTariffCategory() {\n        return tariffCategory;\n    }\n\n    public void setTariffCategory(String tariffCategory) {\n        this.tariffCategory = tariffCategory;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TaxiCar taxi = new TaxiCar();\n        taxi.setPlateNumber(\"01A777AA\");\n        taxi.setTariffCategory(\"Komfort+\");\n        System.out.println(\"Raqam: \" + taxi.getPlateNumber() + \" | Tarif: \" + taxi.getTariffCategory());\n    }\n}",
    "detailedSolution": {
      "uz": "TaxiCar avlod sinfi ota sinf Vehicle maydonlarini extends orqali meros oladi.",
      "en": "TaxiCar subclass inherits Vehicle superclass fields through extends.",
      "ru": "Подкласс TaxiCar наследует свойства суперкласса Vehicle через extends."
    }
  },
  {
    "id": 4,
    "tier": 1,
    "tierName": "1-Bosqich: Inkapsulyatsiya va Merosxo'rlik",
    "sector": "1-30",
    "title": {
      "uz": "4. Korzinka Go — Employee va Cashier Inkapsulyatsiyasi",
      "en": "4. Korzinka Go — Employee and Cashier Encapsulation",
      "ru": "4. Корзинка Го — инкапсуляция Employee и Cashier"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nKorzinka supermarketida ota sinf 'Employee' xodimning asosiy maoshini ('baseSalary') saqlaydi. Avlod sinf 'Cashier' ota sinfning private maydoniga bevosita kira olmaydi — faqat getBaseSalary() va setBaseSalary() orqali boshqaradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Employee' sinfini yarating: 'private double baseSalary;' maydoni va unga getter/setter qo'shing.\n2. 'Cashier' sinfini 'extends Employee' qilib oching va unga 'private String registerNumber;' maydonini qo'shing.\n3. 'Cashier' uchun getRegisterNumber() va setRegisterNumber() metodlarini yozing.\n4. 'Main' klassida 'Cashier' ob'yektini yarating.\n5. Maoshiga 3500000.0, kassa raqamiga \"KASSA-12\" o'rnating va chop eting: \"Kassa: KASSA-12 | Maosh: 3500000.0\".",
      "en": "📖 Real-World Scenario\nCashier cannot touch Employee's private fields directly; it uses getters and setters.\n\n📋 Steps\n1. Declare Employee with private double baseSalary.\n2. Declare Cashier extends Employee with private String registerNumber.\n3. In Main, instantiate Cashier, set values and print: \"Kassa: KASSA-12 | Maosh: 3500000.0\".",
      "ru": "📖 Контекст\nCashier управляет private полями Employee через геттеры и сеттеры.\n\n📋 Шаги\n1. Создайте Employee и Cashier.\n2. В main выведите: \"Kassa: KASSA-12 | Maosh: 3500000.0\"."
    },
    "requirements": {
      "classes": [
        "Employee",
        "Cashier",
        "Main"
      ],
      "fields": [
        {
          "name": "baseSalary",
          "type": "double"
        },
        {
          "name": "registerNumber",
          "type": "String"
        }
      ],
      "privateFields": [
        "baseSalary",
        "registerNumber"
      ],
      "methods": [
        "getBaseSalary",
        "setBaseSalary",
        "getRegisterNumber",
        "setRegisterNumber"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class Employee {\n    \n}\n\nclass Cashier extends Employee {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Employee {\n    private double baseSalary;\n\n    public double getBaseSalary() {\n        return baseSalary;\n    }\n\n    public void setBaseSalary(double baseSalary) {\n        this.baseSalary = baseSalary;\n    }\n}\n\nclass Cashier extends Employee {\n    private String registerNumber;\n\n    public String getRegisterNumber() {\n        return registerNumber;\n    }\n\n    public void setRegisterNumber(String registerNumber) {\n        this.registerNumber = registerNumber;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Cashier cashier = new Cashier();\n        cashier.setBaseSalary(3500000.0);\n        cashier.setRegisterNumber(\"KASSA-12\");\n        System.out.println(\"Kassa: \" + cashier.getRegisterNumber() + \" | Maosh: \" + cashier.getBaseSalary());\n    }\n}",
    "detailedSolution": {
      "uz": "Ota sinfdagi private maydonlar faqat ota sinf getter/setterlari orqali o'zgartirilishi mumkin.",
      "en": "Private fields in superclasses are accessible to subclasses only via getters/setters.",
      "ru": "Приватные поля суперкласса доступны подклассу только через геттеры/сеттеры."
    }
  },
  {
    "id": 5,
    "tier": 1,
    "tierName": "1-Bosqich: Inkapsulyatsiya va Merosxo'rlik",
    "sector": "1-30",
    "title": {
      "uz": "5. Asaxiy Books — Publication va PrintedBook (Lecture 3 Slide 13)",
      "en": "5. Asaxiy Books — Publication and PrintedBook",
      "ru": "5. Asaxiy Books — публикация и печатная книга"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT 3-ma'ruzaning 13-slaydi asosida: umumiy 'Publication' ota sinfi 'price' (narx) ni saqlaydi. Bosma kitob 'PrintedBook' esa qog'oz muqova turini ('coverType') qo'shadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Publication' sinfini e'lon qiling: 'private double price;' va uning getter/setteri.\n2. 'PrintedBook' sinfini 'extends Publication' orqali meros qilib oling.\n3. 'PrintedBook' ga 'private String coverType;' maydonini va uning getter/setterini yozing.\n4. 'Main' klassida 'PrintedBook' ob'yektini yarating.\n5. Narxga 75000.0, muqovaga \"Qattiq\" berib chop eting: \"Kitob narxi: 75000.0 | Muqova: Qattiq\".",
      "en": "📖 Real-World Scenario\nWIUT Lecture 3 Slide 13: Publication has private double price. PrintedBook adds coverType.\n\n📋 Steps\n1. Declare Publication and PrintedBook.\n2. In Main, instantiate and print: \"Kitob narxi: 75000.0 | Muqova: Qattiq\".",
      "ru": "📖 Контекст\nЛекция 3 Слайд 13: Publication и PrintedBook.\n\n📋 Шаги\n1. Создайте классы Publication и PrintedBook.\n2. В main выведите: \"Kitob narxi: 75000.0 | Muqova: Qattiq\"."
    },
    "requirements": {
      "classes": [
        "Publication",
        "PrintedBook",
        "Main"
      ],
      "fields": [
        {
          "name": "price",
          "type": "double"
        },
        {
          "name": "coverType",
          "type": "String"
        }
      ],
      "privateFields": [
        "price",
        "coverType"
      ],
      "methods": [
        "getPrice",
        "setPrice",
        "getCoverType",
        "setCoverType"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class Publication {\n    \n}\n\nclass PrintedBook extends Publication {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Publication {\n    private double price;\n\n    public double getPrice() {\n        return price;\n    }\n\n    public void setPrice(double price) {\n        this.price = price;\n    }\n}\n\nclass PrintedBook extends Publication {\n    private String coverType;\n\n    public String getCoverType() {\n        return coverType;\n    }\n\n    public void setCoverType(String coverType) {\n        this.coverType = coverType;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PrintedBook book = new PrintedBook();\n        book.setPrice(75000.0);\n        book.setCoverType(\"Qattiq\");\n        System.out.println(\"Kitob narxi: \" + book.getPrice() + \" | Muqova: \" + book.getCoverType());\n    }\n}",
    "detailedSolution": {
      "uz": "PrintedBook narxni ota sinfdan oladi va o'ziga xos muqova xususiyatini boshqaradi.",
      "en": "PrintedBook inherits price from Publication and encapsulates coverType.",
      "ru": "PrintedBook наследует цену из Publication и добавляет coverType."
    }
  },
  {
    "id": 6,
    "tier": 1,
    "tierName": "1-Bosqich: Inkapsulyatsiya va Merosxo'rlik",
    "sector": "1-30",
    "title": {
      "uz": "6. Click Up — Transaction va BillPayment Inkapsulyatsiyasi",
      "en": "6. Click Up — Transaction and BillPayment",
      "ru": "6. Click Up — транзакция и оплата счетов"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nClick tizimida 'Transaction' summani saqlaydi. Kommunal to'lov 'BillPayment' esa qaysi provayder ('utilityProvider') ekanligini belgilaydi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Transaction' sinfini yarating: 'private double amount;' va uning getter/setteri.\n2. 'BillPayment' sinfini 'extends Transaction' qilib oching.\n3. 'BillPayment' ga 'private String utilityProvider;' maydoni va uning getter/setterini qo'shing.\n4. 'Main' klassida 'BillPayment' ob'yektini yarating.\n5. Summasiga 120000.0, provayderga \"HududGaz\" berib chop eting: \"Provayder: HududGaz | Summa: 120000.0\".",
      "en": "📖 Real-World Scenario\nBillPayment extends Transaction in Click Up.\n\n📋 Steps\n1. Declare Transaction and BillPayment.\n2. In Main, instantiate and print: \"Provayder: HududGaz | Summa: 120000.0\".",
      "ru": "📖 Контекст\nBillPayment extends Transaction в Click.\n\n📋 Шаги\n1. Создайте Transaction и BillPayment.\n2. В main выведите: \"Provayder: HududGaz | Summa: 120000.0\"."
    },
    "requirements": {
      "classes": [
        "Transaction",
        "BillPayment",
        "Main"
      ],
      "fields": [
        {
          "name": "amount",
          "type": "double"
        },
        {
          "name": "utilityProvider",
          "type": "String"
        }
      ],
      "privateFields": [
        "amount",
        "utilityProvider"
      ],
      "methods": [
        "getAmount",
        "setAmount",
        "getUtilityProvider",
        "setUtilityProvider"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class Transaction {\n    \n}\n\nclass BillPayment extends Transaction {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Transaction {\n    private double amount;\n\n    public double getAmount() {\n        return amount;\n    }\n\n    public void setAmount(double amount) {\n        this.amount = amount;\n    }\n}\n\nclass BillPayment extends Transaction {\n    private String utilityProvider;\n\n    public String getUtilityProvider() {\n        return utilityProvider;\n    }\n\n    public void setUtilityProvider(String utilityProvider) {\n        this.utilityProvider = utilityProvider;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BillPayment bill = new BillPayment();\n        bill.setAmount(120000.0);\n        bill.setUtilityProvider(\"HududGaz\");\n        System.out.println(\"Provayder: \" + bill.getUtilityProvider() + \" | Summa: \" + bill.getAmount());\n    }\n}",
    "detailedSolution": {
      "uz": "Subclass BillPayment ota sinfdagi amount maydoniga getAmount va setAmount orqali murojaat qiladi.",
      "en": "BillPayment manages amount via inherited getAmount and setAmount methods.",
      "ru": "BillPayment управляет полем amount через унаследованные методы getAmount и setAmount."
    }
  },
  {
    "id": 7,
    "tier": 1,
    "tierName": "1-Bosqich: Konstruktorlar va super() Asoslari",
    "sector": "1-30",
    "title": {
      "uz": "7. Milliy Bank — Card va DebitCard Standart Konstruktori",
      "en": "7. Milliy Bank — Card and DebitCard Default Constructor",
      "ru": "7. Миллий Банк — стандартный конструктор Card и DebitCard"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT 3-ma'ruzaning 19-slaydi: \"Konstruktorlar meros olinmaydi! Avlod sinf konstruktori ota sinf konstruktorini super() orqali chaqirishi kerak\". Milliy Bankda 'Card' ochilganda uning holati standart \"ACTIVE\" bo'ladi. 'DebitCard' konstruktori 'super()' orqali buni ishga tushirsin.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Card' sinfida 'private String status;' maydoni va parametrsiz konstruktorda 'this.status = \"ACTIVE\";' qiymati o'rnatilsin. Getter/setter yozing.\n2. 'DebitCard' sinfini 'extends Card' qilib oching va unga 'private String cardType;' maydonini qo'shing.\n3. 'DebitCard' konstruktorida 'super();' ni chaqiring va 'this.cardType = \"UZCARD\";' deb qiymat bering. Getter/setter yozing.\n4. 'Main' metodida 'DebitCard dc = new DebitCard();' ob'yektini yarating.\n5. Konsolga: \"Karta turi: UZCARD | Holati: ACTIVE\" deb chop eting.",
      "en": "📖 Real-World Scenario\nSlide 19: Constructors are not inherited. Card constructor sets status=\"ACTIVE\". DebitCard calls super() and sets cardType=\"UZCARD\".\n\n📋 Steps\n1. Declare Card with default constructor setting status=\"ACTIVE\".\n2. Declare DebitCard extends Card with constructor calling super() and setting cardType=\"UZCARD\".\n3. In Main, instantiate DebitCard and print: \"Karta turi: UZCARD | Holati: ACTIVE\".",
      "ru": "📖 Контекст\nСлайд 19: конструкторы не наследуются. Card устанавливает status=\"ACTIVE\". DebitCard вызывает super() и ставит cardType=\"UZCARD\".\n\n📋 Шаги\n1. Создайте Card и DebitCard.\n2. В main выведите: \"Karta turi: UZCARD | Holati: ACTIVE\"."
    },
    "requirements": {
      "classes": [
        "Card",
        "DebitCard",
        "Main"
      ],
      "fields": [
        {
          "name": "status",
          "type": "String"
        },
        {
          "name": "cardType",
          "type": "String"
        }
      ],
      "privateFields": [
        "status",
        "cardType"
      ],
      "methods": [
        "getStatus",
        "setStatus",
        "getCardType",
        "setCardType"
      ],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class Card {\n    \n}\n\nclass DebitCard extends Card {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Card {\n    private String status;\n\n    public Card() {\n        this.status = \"ACTIVE\";\n    }\n\n    public String getStatus() {\n        return status;\n    }\n\n    public void setStatus(String status) {\n        this.status = status;\n    }\n}\n\nclass DebitCard extends Card {\n    private String cardType;\n\n    public DebitCard() {\n        super();\n        this.cardType = \"UZCARD\";\n    }\n\n    public String getCardType() {\n        return cardType;\n    }\n\n    public void setCardType(String cardType) {\n        this.cardType = cardType;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DebitCard dc = new DebitCard();\n        System.out.println(\"Karta turi: \" + dc.getCardType() + \" | Holati: \" + dc.getStatus());\n    }\n}",
    "detailedSolution": {
      "uz": "Subclass DebitCard o'z konstruktorida birinchi qatorda super() orqali ota sinf Card konstruktorini ishga tushiradi.",
      "en": "DebitCard invokes super() as the first statement, initializing status='ACTIVE' from Card superclass.",
      "ru": "DebitCard вызывает super() первой строкой, инициализируя status='ACTIVE' из суперкласса Card."
    }
  },
  {
    "id": 8,
    "tier": 1,
    "tierName": "1-Bosqich: Konstruktorlar va super() Asoslari",
    "sector": "1-30",
    "title": {
      "uz": "8. Express24 — Order va FoodOrder Standart super() Chaqiruvi",
      "en": "8. Express24 — Order and FoodOrder Default super() Call",
      "ru": "8. Express24 — вызов super() по умолчанию в Order и FoodOrder"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nExpress24 xizmatida yangi 'Order' yaratilganda uning holati avtomatik \"CREATED\" deb belgilanadi. 'FoodOrder' esa o'z konstruktorida 'super()' chaqirib, restoran nomini \"KFC\" ga sozlaydi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Order' sinfida 'private String orderStatus;' maydoni va parametrsiz konstruktorida 'this.orderStatus = \"CREATED\";' yozilsin. Getter/setter qo'shing.\n2. 'FoodOrder' sinfini 'extends Order' qilib oching va unga 'private String restaurant;' maydoni qo'shing.\n3. 'FoodOrder' konstruktorida 'super();' ni chaqiring va 'this.restaurant = \"KFC\";' deb o'rnating. Getter/setter yozing.\n4. 'Main' metodida 'FoodOrder fo = new FoodOrder();' obyektini yarating.\n5. Konsolga: \"Restoran: KFC | Holati: CREATED\" ko'rinishida chop eting.",
      "en": "📖 Real-World Scenario\nOrder constructor sets orderStatus=\"CREATED\". FoodOrder constructor calls super() and sets restaurant=\"KFC\".\n\n📋 Steps\n1. Declare Order with default constructor.\n2. Declare FoodOrder extends Order with constructor calling super().\n3. In Main, instantiate FoodOrder and print: \"Restoran: KFC | Holati: CREATED\".",
      "ru": "📖 Контекст\nOrder устанавливает orderStatus=\"CREATED\". FoodOrder вызывает super() и ставит restaurant=\"KFC\".\n\n📋 Шаги\n1. Создайте Order и FoodOrder.\n2. В main выведите: \"Restoran: KFC | Holati: CREATED\"."
    },
    "requirements": {
      "classes": [
        "Order",
        "FoodOrder",
        "Main"
      ],
      "fields": [
        {
          "name": "orderStatus",
          "type": "String"
        },
        {
          "name": "restaurant",
          "type": "String"
        }
      ],
      "privateFields": [
        "orderStatus",
        "restaurant"
      ],
      "methods": [
        "getOrderStatus",
        "setOrderStatus",
        "getRestaurant",
        "setRestaurant"
      ],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class Order {\n    \n}\n\nclass FoodOrder extends Order {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Order {\n    private String orderStatus;\n\n    public Order() {\n        this.orderStatus = \"CREATED\";\n    }\n\n    public String getOrderStatus() {\n        return orderStatus;\n    }\n\n    public void setOrderStatus(String orderStatus) {\n        this.orderStatus = orderStatus;\n    }\n}\n\nclass FoodOrder extends Order {\n    private String restaurant;\n\n    public FoodOrder() {\n        super();\n        this.restaurant = \"KFC\";\n    }\n\n    public String getRestaurant() {\n        return restaurant;\n    }\n\n    public void setRestaurant(String restaurant) {\n        this.restaurant = restaurant;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FoodOrder fo = new FoodOrder();\n        System.out.println(\"Restoran: \" + fo.getRestaurant() + \" | Holati: \" + fo.getOrderStatus());\n    }\n}",
    "detailedSolution": {
      "uz": "FoodOrder konstruktori super() orqali ota sinfdagi standart boshlang'ich qiymatni faollashtiradi.",
      "en": "FoodOrder constructor activates superclass initialization via super().",
      "ru": "Конструктор FoodOrder активирует начальные значения суперкласса через super()."
    }
  },
  {
    "id": 9,
    "tier": 1,
    "tierName": "1-Bosqich: Konstruktorlar va super() Asoslari",
    "sector": "1-30",
    "title": {
      "uz": "9. Texnomart — Device va Smartphone Standart super()",
      "en": "9. Texnomart — Device and Smartphone Default super()",
      "ru": "9. Техномарт — вызов super() в Device и Smartphone"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nTexnomart do'konida 'Device' larning kafolat muddati standart 12 oy ('warrantyMonths = 12'). 'Smartphone' esa qurilmadan meros olib, 'super()' orqali buni oladi va 'simSlots = 2' ni o'rnatadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Device' sinfida 'private int warrantyMonths;' va parametrsiz konstruktorida 'this.warrantyMonths = 12;' yozilsin. Getter/setter qo'shing.\n2. 'Smartphone' sinfini 'extends Device' qilib oching va unga 'private int simSlots;' maydonini qo'shing.\n3. 'Smartphone' konstruktorida 'super();' ni chaqiring va 'this.simSlots = 2;' qiymatini bering. Getter/setter yozing.\n4. 'Main' metodida 'Smartphone phone = new Smartphone();' obyektini yarating.\n5. Konsolga: \"SIM slotlar: 2 | Kafolat: 12 oy\" deb chop eting.",
      "en": "📖 Real-World Scenario\nDevice defaults to warrantyMonths = 12. Smartphone extends Device, calls super(), and sets simSlots = 2.\n\n📋 Steps\n1. Declare Device and Smartphone.\n2. In Main, instantiate Smartphone and print: \"SIM slotlar: 2 | Kafolat: 12 oy\".",
      "ru": "📖 Контекст\nDevice задает warrantyMonths = 12. Smartphone вызывает super() и ставит simSlots = 2.\n\n📋 Шаги\n1. Создайте Device и Smartphone.\n2. В main выведите: \"SIM slotlar: 2 | Kafolat: 12 oy\"."
    },
    "requirements": {
      "classes": [
        "Device",
        "Smartphone",
        "Main"
      ],
      "fields": [
        {
          "name": "warrantyMonths",
          "type": "int"
        },
        {
          "name": "simSlots",
          "type": "int"
        }
      ],
      "privateFields": [
        "warrantyMonths",
        "simSlots"
      ],
      "methods": [
        "getWarrantyMonths",
        "setWarrantyMonths",
        "getSimSlots",
        "setSimSlots"
      ],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class Device {\n    \n}\n\nclass Smartphone extends Device {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Device {\n    private int warrantyMonths;\n\n    public Device() {\n        this.warrantyMonths = 12;\n    }\n\n    public int getWarrantyMonths() {\n        return warrantyMonths;\n    }\n\n    public void setWarrantyMonths(int warrantyMonths) {\n        this.warrantyMonths = warrantyMonths;\n    }\n}\n\nclass Smartphone extends Device {\n    private int simSlots;\n\n    public Smartphone() {\n        super();\n        this.simSlots = 2;\n    }\n\n    public int getSimSlots() {\n        return simSlots;\n    }\n\n    public void setSimSlots(int simSlots) {\n        this.simSlots = simSlots;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Smartphone phone = new Smartphone();\n        System.out.println(\"SIM slotlar: \" + phone.getSimSlots() + \" | Kafolat: \" + phone.getWarrantyMonths() + \" oy\");\n    }\n}",
    "detailedSolution": {
      "uz": "Smartphone o'z konstruktorida super() orqali ota sinfning warrantyMonths maydonini 12 ga tenglab oladi.",
      "en": "Smartphone calls super() to ensure superclass default state is properly initialized.",
      "ru": "Smartphone вызывает super(), обеспечивая инициализацию базового состояния."
    }
  },
  {
    "id": 10,
    "tier": 1,
    "tierName": "1-Bosqich: Parametrli super(arg1, arg2) Chaining",
    "sector": "1-30",
    "title": {
      "uz": "10. Uzum Seller — User va Seller Parametrli super(..) Chaqiruvi",
      "en": "10. Uzum Seller — User and Seller Parameterized super(..)",
      "ru": "10. Uzum Продавец — параметризованный вызов super(..) в User и Seller"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT 3-ma'ruza 19-22-slaydlar: Ota sinf 'User' faqat parametrli 'User(String userId, String email)' konstruktoriga ega bo'lsa, avlod sinf 'Seller' o'z konstruktorining BIRINCHI qatorida 'super(userId, email);' ni chaqirishi SHART!\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'User' sinfini yarating: 'private String userId;' va 'private String email;'. Faqat parametrli 'User(String userId, String email)' konstruktori va getter/setterlarini yozing.\n2. 'Seller' sinfini 'extends User' qilib oching va unga 'private String shopName;' maydonini qo'shing.\n3. 'Seller' konstruktorini yarating: 'public Seller(String userId, String email, String shopName)'. Birinchi qatorda 'super(userId, email);', so'ngra 'this.shopName = shopName;' deb yozing!\n4. 'Main' metodida 'Seller s = new Seller(\"USR-99\", \"admin@apex.uz\", \"Apex Tech\");' ob'yektini tuzing.\n5. Konsolga: \"Do'kon: Apex Tech | Egasi: admin@apex.uz\" deb chop eting.",
      "en": "📖 Real-World Scenario\nUser has constructor User(userId, email). Seller extends User, calls super(userId, email) first, and sets shopName.\n\n📋 Steps\n1. Declare User and Seller.\n2. In Main, instantiate Seller(\"USR-99\", \"admin@apex.uz\", \"Apex Tech\") and print: \"Do'kon: Apex Tech | Egasi: admin@apex.uz\".",
      "ru": "📖 Контекст\nUser имеет конструктор User(userId, email). Seller вызывает super(userId, email) и сохраняет shopName.\n\n📋 Шаги\n1. Создайте User и Seller.\n2. В main создайте объект и выведите: \"Do'kon: Apex Tech | Egasi: admin@apex.uz\"."
    },
    "requirements": {
      "classes": [
        "User",
        "Seller",
        "Main"
      ],
      "fields": [
        {
          "name": "userId",
          "type": "String"
        },
        {
          "name": "email",
          "type": "String"
        },
        {
          "name": "shopName",
          "type": "String"
        }
      ],
      "privateFields": [
        "userId",
        "email",
        "shopName"
      ],
      "methods": [
        "getUserId",
        "getEmail",
        "getShopName"
      ],
      "constructors": [
        "User",
        "Seller"
      ],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class User {\n    \n}\n\nclass Seller extends User {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class User {\n    private String userId;\n    private String email;\n\n    public User(String userId, String email) {\n        this.userId = userId;\n        this.email = email;\n    }\n\n    public String getUserId() {\n        return userId;\n    }\n\n    public void setUserId(String userId) {\n        this.userId = userId;\n    }\n\n    public String getEmail() {\n        return email;\n    }\n\n    public void setEmail(String email) {\n        this.email = email;\n    }\n}\n\nclass Seller extends User {\n    private String shopName;\n\n    public Seller(String userId, String email, String shopName) {\n        super(userId, email);\n        this.shopName = shopName;\n    }\n\n    public String getShopName() {\n        return shopName;\n    }\n\n    public void setShopName(String shopName) {\n        this.shopName = shopName;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Seller s = new Seller(\"USR-99\", \"admin@apex.uz\", \"Apex Tech\");\n        System.out.println(\"Do'kon: \" + s.getShopName() + \" | Egasi: \" + s.getEmail());\n    }\n}",
    "detailedSolution": {
      "uz": "super(userId, email) orqali ota sinf User private maydonlari to'g'ri qiymat oladi.",
      "en": "super(userId, email) delegates initialization of superclass private fields.",
      "ru": "super(userId, email) делегирует инициализацию полей суперкласса."
    }
  },
  {
    "id": 11,
    "tier": 1,
    "tierName": "1-Bosqich: Parametrli super(arg1, arg2) Chaining",
    "sector": "1-30",
    "title": {
      "uz": "11. WIUT — AcademicStaff va VisitingPractitioner (Workshop)",
      "en": "11. WIUT — AcademicStaff and VisitingPractitioner (Workshop)",
      "ru": "11. WIUT — AcademicStaff и VisitingPractitioner (Семинар)"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT 3-haftalik Workshop kodi: 'AcademicStaff(String name, String department)' konstruktoriga ega. Tashqaridan taklif etilgan o'qituvchi 'VisitingPractitioner' esa unga haftalik soatlarni ('hoursPerWeek') qo'shadi va konstruktorda 'super(name, department)' ni chaqiradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'AcademicStaff' sinfida 'private String name;' va 'private String department;' maydonlari hamda 'AcademicStaff(String name, String department)' konstruktori bo'lsin. Getterlarini yozing.\n2. 'VisitingPractitioner' sinfini 'extends AcademicStaff' qilib oching va unga 'private int hoursPerWeek;' maydonini qo'shing.\n3. 'VisitingPractitioner(String name, String department, int hoursPerWeek)' konstruktorida birinchi qatorda 'super(name, department);' ni chaqiring va 'this.hoursPerWeek = hoursPerWeek;' ni saqlang. Getter qo'shing.\n4. 'Main' metodida 'VisitingPractitioner vp = new VisitingPractitioner(\"Valeriya Tsoy\", \"Computing\", 16);' ob'yektini yarating.\n5. Konsolga: \"O'qituvchi: Valeriya Tsoy | Kafedra: Computing | Soat: 16\" deb chop eting.",
      "en": "📖 Real-World Scenario\nWIUT Workshop: AcademicStaff(name, department). VisitingPractitioner extends AcademicStaff, calls super(name, department), and sets hoursPerWeek.\n\n📋 Steps\n1. Declare AcademicStaff and VisitingPractitioner.\n2. In Main, instantiate and print: \"O'qituvchi: Valeriya Tsoy | Kafedra: Computing | Soat: 16\".",
      "ru": "📖 Контекст\nИз семинара WIUT: AcademicStaff(name, department). VisitingPractitioner вызывает super(name, department) и сохраняет hoursPerWeek.\n\n📋 Шаги\n1. Создайте классы AcademicStaff и VisitingPractitioner.\n2. В main выведите: \"O'qituvchi: Valeriya Tsoy | Kafedra: Computing | Soat: 16\"."
    },
    "requirements": {
      "classes": [
        "AcademicStaff",
        "VisitingPractitioner",
        "Main"
      ],
      "fields": [
        {
          "name": "name",
          "type": "String"
        },
        {
          "name": "department",
          "type": "String"
        },
        {
          "name": "hoursPerWeek",
          "type": "int"
        }
      ],
      "privateFields": [
        "name",
        "department",
        "hoursPerWeek"
      ],
      "methods": [
        "getName",
        "getDepartment",
        "getHoursPerWeek"
      ],
      "constructors": [
        "AcademicStaff",
        "VisitingPractitioner"
      ],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class AcademicStaff {\n    \n}\n\nclass VisitingPractitioner extends AcademicStaff {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class AcademicStaff {\n    private String name;\n    private String department;\n\n    public AcademicStaff(String name, String department) {\n        this.name = name;\n        this.department = department;\n    }\n\n    public String getName() {\n        return name;\n    }\n\n    public String getDepartment() {\n        return department;\n    }\n}\n\nclass VisitingPractitioner extends AcademicStaff {\n    private int hoursPerWeek;\n\n    public VisitingPractitioner(String name, String department, int hoursPerWeek) {\n        super(name, department);\n        this.hoursPerWeek = hoursPerWeek;\n    }\n\n    public int getHoursPerWeek() {\n        return hoursPerWeek;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        VisitingPractitioner vp = new VisitingPractitioner(\"Valeriya Tsoy\", \"Computing\", 16);\n        System.out.println(\"O'qituvchi: \" + vp.getName() + \" | Kafedra: \" + vp.getDepartment() + \" | Soat: \" + vp.getHoursPerWeek());\n    }\n}",
    "detailedSolution": {
      "uz": "VisitingPractitioner o'z ota sinfi AcademicStaff konstruktorini super(name, department) orqali chaqirib, WIUT amaliy kodi andozasini bajaradi.",
      "en": "VisitingPractitioner chains constructor execution to AcademicStaff via super(name, department).",
      "ru": "VisitingPractitioner делегирует инициализацию AcademicStaff через super(name, department)."
    }
  },
  {
    "id": 12,
    "tier": 1,
    "tierName": "1-Bosqich: Parametrli super(arg1, arg2) Chaining",
    "sector": "1-30",
    "title": {
      "uz": "12. Avtoelon — Auto va ElectricCar Parametrli super(..)",
      "en": "12. Avtoelon — Auto and ElectricCar Parameterized super(..)",
      "ru": "12. Автоэлон — параметризованный super(..) в Auto и ElectricCar"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nAvtoelon platformasida 'Auto(String vin, String model)' umumiy avtomobil ma'lumotlarini oladi. 'ElectricCar' esa unga batareya sig'imini ('batteryCapacityKwh') qo'shadi va konstruktorda 'super(vin, model);' ni chaqiradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Auto' sinfida 'private String vin;' va 'private String model;' maydonlari bo'lsin. 'Auto(String vin, String model)' konstruktori va getterlarini yozing.\n2. 'ElectricCar' sinfini 'extends Auto' qilib oching va unga 'private int batteryCapacityKwh;' maydonini qo'shing.\n3. 'ElectricCar(String vin, String model, int batteryCapacityKwh)' konstruktorida birinchi qatorda 'super(vin, model);' ni chaqiring va batareyani o'rnating. Getter qo'shing.\n4. 'Main' metodida 'ElectricCar car = new ElectricCar(\"BYD-007\", \"Song Plus\", 87);' obyektini yarating.\n5. Konsolga: \"Model: Song Plus | Batareya: 87 kWh | VIN: BYD-007\" deb chiqaring.",
      "en": "📖 Real-World Scenario\nAuto defines Auto(vin, model). ElectricCar extends Auto, calls super(vin, model), and adds batteryCapacityKwh.\n\n📋 Steps\n1. Declare Auto and ElectricCar.\n2. In Main, instantiate ElectricCar and print: \"Model: Song Plus | Batareya: 87 kWh | VIN: BYD-007\".",
      "ru": "📖 Контекст\nAuto(vin, model) и ElectricCar(vin, model, batteryCapacityKwh).\n\n📋 Шаги\n1. Создайте Auto и ElectricCar.\n2. В main выведите: \"Model: Song Plus | Batareya: 87 kWh | VIN: BYD-007\"."
    },
    "requirements": {
      "classes": [
        "Auto",
        "ElectricCar",
        "Main"
      ],
      "fields": [
        {
          "name": "vin",
          "type": "String"
        },
        {
          "name": "model",
          "type": "String"
        },
        {
          "name": "batteryCapacityKwh",
          "type": "int"
        }
      ],
      "privateFields": [
        "vin",
        "model",
        "batteryCapacityKwh"
      ],
      "methods": [
        "getVin",
        "getModel",
        "getBatteryCapacityKwh"
      ],
      "constructors": [
        "Auto",
        "ElectricCar"
      ],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class Auto {\n    \n}\n\nclass ElectricCar extends Auto {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Auto {\n    private String vin;\n    private String model;\n\n    public Auto(String vin, String model) {\n        this.vin = vin;\n        this.model = model;\n    }\n\n    public String getVin() {\n        return vin;\n    }\n\n    public String getModel() {\n        return model;\n    }\n}\n\nclass ElectricCar extends Auto {\n    private int batteryCapacityKwh;\n\n    public ElectricCar(String vin, String model, int batteryCapacityKwh) {\n        super(vin, model);\n        this.batteryCapacityKwh = batteryCapacityKwh;\n    }\n\n    public int getBatteryCapacityKwh() {\n        return batteryCapacityKwh;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ElectricCar car = new ElectricCar(\"BYD-007\", \"Song Plus\", 87);\n        System.out.println(\"Model: \" + car.getModel() + \" | Batareya: \" + car.getBatteryCapacityKwh() + \" kWh | VIN: \" + car.getVin());\n    }\n}",
    "detailedSolution": {
      "uz": "ElectricCar konstruktorida super(vin, model) birinchi qatorda chaqirilib, ota sinf maydonlari to'liq to'ldiriladi.",
      "en": "ElectricCar constructor invokes super(vin, model) as the first statement, initializing superclass fields.",
      "ru": "Конструктор ElectricCar вызывает super(vin, model) первой строкой, инициализируя поля суперкласса."
    }
  },
  {
    "id": 13,
    "tier": 1,
    "tierName": "1-Bosqich: Superclass Validatsiyasi va super()",
    "sector": "1-30",
    "title": {
      "uz": "13. Korzinka Club — Member va VipMember Ball Validatsiyasi",
      "en": "13. Korzinka Club — Member and VipMember Points Validation",
      "ru": "13. Корзинка Клуб — валидация баллов в Member и VipMember"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nKorzinka sodiqlik dasturida ota sinf 'Member' o'z konstruktorida 'setPoints(points)' orqali ballni faqat manfiy bo'lmagan holatda ('points >= 0') qabul qiladi. 'VipMember' esa 'super(phone, points)' orqali ota sinfga uzatadi va qo'shimcha keshbek foizini ('cashbackRate') belgilaydi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Member' sinfini yarating: 'private String phone;' va 'private double points;'. Konstruktorida 'this.phone = phone; setPoints(points);' yozilsin. 'setPoints' metodida agar points < 0 bo'lsa, 'this.points = 0.0;' deb o'rnating.\n2. 'VipMember' sinfini 'extends Member' qilib oching va unga 'private double cashbackRate;' maydonini qo'shing.\n3. 'VipMember(String phone, double points, double cashbackRate)' konstruktorida 'super(phone, points);' ni chaqiring va 'this.cashbackRate = cashbackRate;' ni saqlang. Getter qo'shing.\n4. 'Main' metodida 'VipMember vip = new VipMember(\"+998901234567\", 50000.0, 5.0);' obyektini yarating.\n5. Konsolga: \"Tel: +998901234567 | Ball: 50000.0 | Keshbek: 5.0%\" deb chop eting.",
      "en": "📖 Real-World Scenario\nMember constructor uses setPoints(points) ensuring points >= 0. VipMember extends Member, invokes super(phone, points), and adds cashbackRate.\n\n📋 Steps\n1. Declare Member with validation in setPoints.\n2. Declare VipMember extends Member with cashbackRate.\n3. In Main, instantiate VipMember and print: \"Tel: +998901234567 | Ball: 50000.0 | Keshbek: 5.0%\".",
      "ru": "📖 Контекст\nMember валидирует баллы setPoints(points >= 0). VipMember вызывает super(phone, points) и добавляет cashbackRate.\n\n📋 Шаги\n1. Создайте Member с валидацией и VipMember.\n2. В main выведите: \"Tel: +998901234567 | Ball: 50000.0 | Keshbek: 5.0%\"."
    },
    "requirements": {
      "classes": [
        "Member",
        "VipMember",
        "Main"
      ],
      "fields": [
        {
          "name": "phone",
          "type": "String"
        },
        {
          "name": "points",
          "type": "double"
        },
        {
          "name": "cashbackRate",
          "type": "double"
        }
      ],
      "privateFields": [
        "phone",
        "points",
        "cashbackRate"
      ],
      "methods": [
        "getPhone",
        "getPoints",
        "setPoints",
        "getCashbackRate"
      ],
      "constructors": [
        "Member",
        "VipMember"
      ],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class Member {\n    \n}\n\nclass VipMember extends Member {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Member {\n    private String phone;\n    private double points;\n\n    public Member(String phone, double points) {\n        this.phone = phone;\n        setPoints(points);\n    }\n\n    public String getPhone() {\n        return phone;\n    }\n\n    public double getPoints() {\n        return points;\n    }\n\n    public void setPoints(double points) {\n        if (points < 0) {\n            this.points = 0.0;\n        } else {\n            this.points = points;\n        }\n    }\n}\n\nclass VipMember extends Member {\n    private double cashbackRate;\n\n    public VipMember(String phone, double points, double cashbackRate) {\n        super(phone, points);\n        this.cashbackRate = cashbackRate;\n    }\n\n    public double getCashbackRate() {\n        return cashbackRate;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        VipMember vip = new VipMember(\"+998901234567\", 50000.0, 5.0);\n        System.out.println(\"Tel: \" + vip.getPhone() + \" | Ball: \" + vip.getPoints() + \" | Keshbek: \" + vip.getCashbackRate() + \"%\");\n    }\n}",
    "detailedSolution": {
      "uz": "Member sinfidagi setter orqali o'tkazilgan validatsiya VipMember orqali berilgan qiymatlarni ham xavfsiz boshqaradi.",
      "en": "Validation inside Member setter protects data integrity even when initialized from subclass VipMember constructor.",
      "ru": "Валидация в сеттере Member защищает целостность данных даже при создании через конструктор VipMember."
    }
  },
  {
    "id": 14,
    "tier": 1,
    "tierName": "1-Bosqich: Superclass Validatsiyasi va super()",
    "sector": "1-30",
    "title": {
      "uz": "14. Apteka.uz — Medicine va PrescriptionMedicine Narx Validatsiyasi",
      "en": "14. Apteka.uz — Medicine and PrescriptionMedicine Price Validation",
      "ru": "14. Apteka.uz — валидация цены в Medicine и PrescriptionMedicine"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nApteka.uz tizimida 'Medicine' dori vositasi narxi ('price') manfiy bo'la olmaydi ('price >= 0'). Reseptli dori 'PrescriptionMedicine' esa unga shifokor litsenziyasi raqamini ('doctorLicense') qo'shadi va 'super(code, price)' orqali ota konstruktorni chaqiradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Medicine' sinfini yarating: 'private String code;' va 'private double price;'. Konstruktorida 'this.code = code; setPrice(price);' bo'lsin. 'setPrice' metodida agar narx < 0 bo'lsa, 'this.price = 0.0;' deb belgilang.\n2. 'PrescriptionMedicine' sinfini 'extends Medicine' qilib oching va unga 'private String doctorLicense;' maydonini qo'shing.\n3. 'PrescriptionMedicine(String code, double price, String doctorLicense)' konstruktorida 'super(code, price);' chaqirilsin va shifokor litsenziyasi saqlansin. Getter qo'shing.\n4. 'Main' metodida 'PrescriptionMedicine pm = new PrescriptionMedicine(\"MED-404\", 45000.0, \"DOC-7788\");' ob'yektini tuzing.\n5. Konsolga: \"Dori: MED-404 | Narx: 45000.0 | Shifokor: DOC-7788\" deb chop eting.",
      "en": "📖 Real-World Scenario\nMedicine validates price >= 0 in setPrice. PrescriptionMedicine extends Medicine, calls super(code, price), and adds doctorLicense.\n\n📋 Steps\n1. Declare Medicine and PrescriptionMedicine.\n2. In Main, instantiate and print: \"Dori: MED-404 | Narx: 45000.0 | Shifokor: DOC-7788\".",
      "ru": "📖 Контекст\nMedicine валидирует цену setPrice(price >= 0). PrescriptionMedicine вызывает super(code, price) и добавляет doctorLicense.\n\n📋 Шаги\n1. Создайте Medicine и PrescriptionMedicine.\n2. В main выведите: \"Dori: MED-404 | Narx: 45000.0 | Shifokor: DOC-7788\"."
    },
    "requirements": {
      "classes": [
        "Medicine",
        "PrescriptionMedicine",
        "Main"
      ],
      "fields": [
        {
          "name": "code",
          "type": "String"
        },
        {
          "name": "price",
          "type": "double"
        },
        {
          "name": "doctorLicense",
          "type": "String"
        }
      ],
      "privateFields": [
        "code",
        "price",
        "doctorLicense"
      ],
      "methods": [
        "getCode",
        "getPrice",
        "setPrice",
        "getDoctorLicense"
      ],
      "constructors": [
        "Medicine",
        "PrescriptionMedicine"
      ],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class Medicine {\n    \n}\n\nclass PrescriptionMedicine extends Medicine {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Medicine {\n    private String code;\n    private double price;\n\n    public Medicine(String code, double price) {\n        this.code = code;\n        setPrice(price);\n    }\n\n    public String getCode() {\n        return code;\n    }\n\n    public double getPrice() {\n        return price;\n    }\n\n    public void setPrice(double price) {\n        if (price < 0) {\n            this.price = 0.0;\n        } else {\n            this.price = price;\n        }\n    }\n}\n\nclass PrescriptionMedicine extends Medicine {\n    private String doctorLicense;\n\n    public PrescriptionMedicine(String code, double price, String doctorLicense) {\n        super(code, price);\n        this.doctorLicense = doctorLicense;\n    }\n\n    public String getDoctorLicense() {\n        return doctorLicense;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PrescriptionMedicine pm = new PrescriptionMedicine(\"MED-404\", 45000.0, \"DOC-7788\");\n        System.out.println(\"Dori: \" + pm.getCode() + \" | Narx: \" + pm.getPrice() + \" | Shifokor: \" + pm.getDoctorLicense());\n    }\n}",
    "detailedSolution": {
      "uz": "PrescriptionMedicine ota sinf Medicine validatsiyasiga tayanadi va resept litsenziyasini o'zida saqlaydi.",
      "en": "PrescriptionMedicine relies on superclass Medicine validation while encapsulating doctorLicense.",
      "ru": "PrescriptionMedicine использует валидацию суперкласса Medicine и инкапсулирует doctorLicense."
    }
  },
  {
    "id": 15,
    "tier": 1,
    "tierName": "1-Bosqich: Superclass Validatsiyasi va super()",
    "sector": "1-30",
    "title": {
      "uz": "15. Safia Bakery — Pastry va CustomCake Vazn Validatsiyasi",
      "en": "15. Safia Bakery — Pastry and CustomCake Weight Validation",
      "ru": "15. Safia Bakery — валидация веса в Pastry и CustomCake"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSafia qandolatxonasida pishiriq 'Pastry' vazni ('weightGrams') noldan katta bo'lishi shart ('weightGrams > 0'). Buyurtma tort 'CustomCake' esa unga tabrik yozuvini ('inscription') qo'shadi va 'super(name, weightGrams)' orqali ota sinfni chaqiradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Pastry' sinfida 'private String name;' va 'private double weightGrams;'. Konstruktorida 'this.name = name; setWeightGrams(weightGrams);' bo'lsin. 'setWeightGrams' metodida agar vazn <= 0 bo'lsa, 'this.weightGrams = 100.0;' deb o'rnating.\n2. 'CustomCake' sinfini 'extends Pastry' qilib yarating va unga 'private String inscription;' maydonini qo'shing.\n3. 'CustomCake(String name, double weightGrams, String inscription)' konstruktorida 'super(name, weightGrams);' ni chaqiring va tabrik yozuvini saqlang. Getter qo'shing.\n4. 'Main' metodida 'CustomCake cake = new CustomCake(\"Tug'ilgan Kun Torti\", 1500.0, \"Tug'ilgan kuningiz bilan!\");' obyektini yarating.\n5. Konsolga: \"Tort: Tug'ilgan Kun Torti | Vazn: 1500.0g | Yozuv: Tug'ilgan kuningiz bilan!\" deb chiqaring.",
      "en": "📖 Real-World Scenario\nPastry validates weightGrams > 0 in setWeightGrams. CustomCake extends Pastry, calls super(name, weightGrams), and adds inscription.\n\n📋 Steps\n1. Declare Pastry and CustomCake.\n2. In Main, instantiate and print: \"Tort: Tug'ilgan Kun Torti | Vazn: 1500.0g | Yozuv: Tug'ilgan kuningiz bilan!\".",
      "ru": "📖 Контекст\nPastry проверяет weightGrams > 0. CustomCake вызывает super(name, weightGrams) и сохраняет inscription.\n\n📋 Шаги\n1. Создайте Pastry и CustomCake.\n2. В main выведите: \"Tort: Tug'ilgan Kun Torti | Vazn: 1500.0g | Yozuv: Tug'ilgan kuningiz bilan!\"."
    },
    "requirements": {
      "classes": [
        "Pastry",
        "CustomCake",
        "Main"
      ],
      "fields": [
        {
          "name": "name",
          "type": "String"
        },
        {
          "name": "weightGrams",
          "type": "double"
        },
        {
          "name": "inscription",
          "type": "String"
        }
      ],
      "privateFields": [
        "name",
        "weightGrams",
        "inscription"
      ],
      "methods": [
        "getName",
        "getWeightGrams",
        "setWeightGrams",
        "getInscription"
      ],
      "constructors": [
        "Pastry",
        "CustomCake"
      ],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class Pastry {\n    \n}\n\nclass CustomCake extends Pastry {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Pastry {\n    private String name;\n    private double weightGrams;\n\n    public Pastry(String name, double weightGrams) {\n        this.name = name;\n        setWeightGrams(weightGrams);\n    }\n\n    public String getName() {\n        return name;\n    }\n\n    public double getWeightGrams() {\n        return weightGrams;\n    }\n\n    public void setWeightGrams(double weightGrams) {\n        if (weightGrams <= 0) {\n            this.weightGrams = 100.0;\n        } else {\n            this.weightGrams = weightGrams;\n        }\n    }\n}\n\nclass CustomCake extends Pastry {\n    private String inscription;\n\n    public CustomCake(String name, double weightGrams, String inscription) {\n        super(name, weightGrams);\n        this.inscription = inscription;\n    }\n\n    public String getInscription() {\n        return inscription;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CustomCake cake = new CustomCake(\"Tug'ilgan Kun Torti\", 1500.0, \"Tug'ilgan kuningiz bilan!\");\n        System.out.println(\"Tort: \" + cake.getName() + \" | Vazn: \" + cake.getWeightGrams() + \"g | Yozuv: \" + cake.getInscription());\n    }\n}",
    "detailedSolution": {
      "uz": "CustomCake ota sinf Pastry konstruktoriga super(name, weightGrams) orqali parametr uzatadi va inscription maydonini o'rnatadi.",
      "en": "CustomCake delegates name and weight initialization to Pastry super constructor while setting inscription.",
      "ru": "CustomCake передает параметры в суперконструктор Pastry и сохраняет надпись inscription."
    }
  },
  {
    "id": 16,
    "tier": 1,
    "tierName": "1-Bosqich: Meros Olingan Metodlarni Qayta Ishlatish",
    "sector": "1-30",
    "title": {
      "uz": "16. Yandex Delivery — Courier va BicycleCourier Hisob-Kitobi",
      "en": "16. Yandex Delivery — Courier and BicycleCourier Calculation",
      "ru": "16. Yandex Delivery — расчет доставки в Courier и BicycleCourier"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nYandex Delivery xizmatida 'Courier(String name)' ota sinfi kuryer ismini saqlaydi. Velosipedli kuryer 'BicycleCourier' esa o'zining biznes metodida ota sinfdagi 'getName()' metodini chaqirib, yetkazish vaqti hisobotini shakllantiradi ('distanceKm * 5 daqiqa').\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Courier' sinfini e'lon qiling: 'private String name;' va 'public Courier(String name)' konstruktori hamda 'getName()' metodi bo'lsin.\n2. 'BicycleCourier' sinfini 'extends Courier' qilib yarating va 'BicycleCourier(String name)' konstruktorida 'super(name);' ni chaqiring.\n3. 'BicycleCourier' ga 'public String getDeliveryEstimate(int distanceKm)' metodini qo'shing. U: \"Kuryer: \" + getName() + \" | Vaqt: \" + (distanceKm * 5) + \" daqiqa\" matnini qaytarsin.\n4. 'Main' metodida 'BicycleCourier bc = new BicycleCourier(\"Jasur Bek\");' ob'yektini yarating.\n5. 'bc.getDeliveryEstimate(4)' metodini chaqirib, konsolga: \"Kuryer: Jasur Bek | Vaqt: 20 daqiqa\" deb chop eting.",
      "en": "📖 Real-World Scenario\nCourier holds name. BicycleCourier extends Courier and provides getDeliveryEstimate(distanceKm) calling getName().\n\n📋 Steps\n1. Declare Courier and BicycleCourier.\n2. In Main, instantiate BicycleCourier(\"Jasur Bek\") and print: \"Kuryer: Jasur Bek | Vaqt: 20 daqiqa\".",
      "ru": "📖 Контекст\nBicycleCourier вызывает getName() из суперкласса внутри своего метода getDeliveryEstimate(distanceKm).\n\n📋 Шаги\n1. Создайте Courier и BicycleCourier.\n2. В main выведите: \"Kuryer: Jasur Bek | Vaqt: 20 daqiqa\"."
    },
    "requirements": {
      "classes": [
        "Courier",
        "BicycleCourier",
        "Main"
      ],
      "fields": [
        {
          "name": "name",
          "type": "String"
        }
      ],
      "privateFields": [
        "name"
      ],
      "methods": [
        "getName",
        "getDeliveryEstimate"
      ],
      "constructors": [
        "Courier",
        "BicycleCourier"
      ],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class Courier {\n    \n}\n\nclass BicycleCourier extends Courier {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Courier {\n    private String name;\n\n    public Courier(String name) {\n        this.name = name;\n    }\n\n    public String getName() {\n        return name;\n    }\n}\n\nclass BicycleCourier extends Courier {\n    public BicycleCourier(String name) {\n        super(name);\n    }\n\n    public String getDeliveryEstimate(int distanceKm) {\n        return \"Kuryer: \" + getName() + \" | Vaqt: \" + (distanceKm * 5) + \" daqiqa\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BicycleCourier bc = new BicycleCourier(\"Jasur Bek\");\n        System.out.println(bc.getDeliveryEstimate(4));\n    }\n}",
    "detailedSolution": {
      "uz": "BicycleCourier o'zining biznes metodida ota sinfdan meros olingan getName() metodini bevosita chaqirib foydalanadi (kodni qayta ishlatish).",
      "en": "BicycleCourier invokes inherited getName() method inside getDeliveryEstimate, demonstrating code reuse.",
      "ru": "BicycleCourier вызывает унаследованный метод getName() внутри getDeliveryEstimate, демонстрируя переиспользование кода."
    }
  },
  {
    "id": 17,
    "tier": 1,
    "tierName": "1-Bosqich: Meros Olingan Metodlarni Qayta Ishlatish",
    "sector": "1-30",
    "title": {
      "uz": "17. Uzum Bank — Deposit va TermDeposit Jami To'lov Hisobi",
      "en": "17. Uzum Bank — Deposit and TermDeposit Total Payout Calculation",
      "ru": "17. Uzum Bank — расчет депозита в Deposit и TermDeposit"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nUzum Bankda ota sinf 'Deposit(double initialSum)' boshlang'ich omonat summasini saqlaydi. Muddatli depozit 'TermDeposit' esa 'calculateTotalPayout(double interestRatePercent)' metodida ota sinfdagi 'getInitialSum()' ni chaqirib, foiz bilan birgalikdagi yakuniy summani hisoblaydi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Deposit' sinfini yarating: 'private double initialSum;' va 'public Deposit(double initialSum)' konstruktori hamda 'getInitialSum()' metodi bo'lsin.\n2. 'TermDeposit' sinfini 'extends Deposit' qilib oching va 'public TermDeposit(double initialSum)' konstruktorida 'super(initialSum);' ni chaqiring.\n3. 'TermDeposit' ga 'public double calculateTotalPayout(double interestRatePercent)' metodini yozing. U: 'getInitialSum() + (getInitialSum() * interestRatePercent / 100.0)' ni qaytarsin.\n4. 'Main' metodida 'TermDeposit td = new TermDeposit(10000000.0);' obyektini yarating.\n5. Konsolga: \"Boshlang'ich: 10000000.0 | Yakuniy to'lov: \" + td.calculateTotalPayout(22.0) ko'rinishida chop eting.",
      "en": "📖 Real-World Scenario\nDeposit holds initialSum. TermDeposit extends Deposit and computes total payout using getInitialSum().\n\n📋 Steps\n1. Declare Deposit and TermDeposit.\n2. In Main, instantiate TermDeposit(10000000.0) and print: \"Boshlang'ich: 10000000.0 | Yakuniy to'lov: 1.22E7\" or formatted sum.",
      "ru": "📖 Контекст\nDeposit хранит initialSum. TermDeposit вычисляет общую выплату через getInitialSum().\n\n📋 Шаги\n1. Создайте Deposit и TermDeposit.\n2. В main выведите начальную сумму и результат calculateTotalPayout(22.0)."
    },
    "requirements": {
      "classes": [
        "Deposit",
        "TermDeposit",
        "Main"
      ],
      "fields": [
        {
          "name": "initialSum",
          "type": "double"
        }
      ],
      "privateFields": [
        "initialSum"
      ],
      "methods": [
        "getInitialSum",
        "calculateTotalPayout"
      ],
      "constructors": [
        "Deposit",
        "TermDeposit"
      ],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class Deposit {\n    \n}\n\nclass TermDeposit extends Deposit {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Deposit {\n    private double initialSum;\n\n    public Deposit(double initialSum) {\n        this.initialSum = initialSum;\n    }\n\n    public double getInitialSum() {\n        return initialSum;\n    }\n}\n\nclass TermDeposit extends Deposit {\n    public TermDeposit(double initialSum) {\n        super(initialSum);\n    }\n\n    public double calculateTotalPayout(double interestRatePercent) {\n        return getInitialSum() + (getInitialSum() * interestRatePercent / 100.0);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TermDeposit td = new TermDeposit(10000000.0);\n        System.out.println(\"Boshlang'ich: \" + td.getInitialSum() + \" | Yakuniy to'lov: \" + td.calculateTotalPayout(22.0));\n    }\n}",
    "detailedSolution": {
      "uz": "TermDeposit ota sinfning getInitialSum() metodini chaqirib, biznes formulasini toza kod bilan hisoblaydi.",
      "en": "TermDeposit invokes getInitialSum() from superclass to compute financial payout logic cleanly.",
      "ru": "TermDeposit вызывает getInitialSum() из суперкласса для расчета финальной суммы вклада."
    }
  },
  {
    "id": 18,
    "tier": 1,
    "tierName": "1-Bosqich: Meros Olingan Metodlarni Qayta Ishlatish",
    "sector": "1-30",
    "title": {
      "uz": "18. MyTaxi — Ride va IntercityRide Narx Hisob-Kitobi",
      "en": "18. MyTaxi — Ride and IntercityRide Fare Calculation",
      "ru": "18. MyTaxi — расчет поездки в Ride и IntercityRide"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nMyTaxi ilovasida 'Ride(double distanceKm)' safar masofasini saqlaydi. Shaharlararo safar 'IntercityRide' esa 'calculateTotalTripCost(double ratePerKm, double tollFee)' metodida ota sinfdan 'getDistanceKm()' ni olib, yo'l haqi va post to'lovini hisoblaydi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Ride' sinfini e'lon qiling: 'private double distanceKm;' va 'public Ride(double distanceKm)' konstruktori hamda 'getDistanceKm()' metodi bo'lsin.\n2. 'IntercityRide' sinfini 'extends Ride' qilib yarating va 'public IntercityRide(double distanceKm)' konstruktorida 'super(distanceKm);' ni chaqiring.\n3. 'IntercityRide' ga 'public double calculateTotalTripCost(double ratePerKm, double tollFee)' metodini yozing. U: '(getDistanceKm() * ratePerKm) + tollFee' ni qaytarsin.\n4. 'Main' metodida 'IntercityRide ir = new IntercityRide(80.0);' obyektini yarating.\n5. 'ir.calculateTotalTripCost(3000.0, 25000.0)' metodini chaqirib, konsolga: \"Masofa: 80.0 km | Jami narx: \" + natija ko'rinishida chop eting.",
      "en": "📖 Real-World Scenario\nRide holds distanceKm. IntercityRide extends Ride and computes total fare combining distance rate and toll fee.\n\n📋 Steps\n1. Declare Ride and IntercityRide.\n2. In Main, instantiate IntercityRide(80.0) and print: \"Masofa: 80.0 km | Jami narx: 265000.0\".",
      "ru": "📖 Контекст\nIntercityRide вычисляет стоимость поездки через getDistanceKm() * ratePerKm + tollFee.\n\n📋 Шаги\n1. Создайте Ride и IntercityRide.\n2. В main выведите: \"Masofa: 80.0 km | Jami narx: 265000.0\"."
    },
    "requirements": {
      "classes": [
        "Ride",
        "IntercityRide",
        "Main"
      ],
      "fields": [
        {
          "name": "distanceKm",
          "type": "double"
        }
      ],
      "privateFields": [
        "distanceKm"
      ],
      "methods": [
        "getDistanceKm",
        "calculateTotalTripCost"
      ],
      "constructors": [
        "Ride",
        "IntercityRide"
      ],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class Ride {\n    \n}\n\nclass IntercityRide extends Ride {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Ride {\n    private double distanceKm;\n\n    public Ride(double distanceKm) {\n        this.distanceKm = distanceKm;\n    }\n\n    public double getDistanceKm() {\n        return distanceKm;\n    }\n}\n\nclass IntercityRide extends Ride {\n    public IntercityRide(double distanceKm) {\n        super(distanceKm);\n    }\n\n    public double calculateTotalTripCost(double ratePerKm, double tollFee) {\n        return (getDistanceKm() * ratePerKm) + tollFee;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IntercityRide ir = new IntercityRide(80.0);\n        System.out.println(\"Masofa: \" + ir.getDistanceKm() + \" km | Jami narx: \" + ir.calculateTotalTripCost(3000.0, 25000.0));\n    }\n}",
    "detailedSolution": {
      "uz": "IntercityRide ota sinfning getDistanceKm() metodi orqali masofani olib, shaharlararo qo'shimcha to'lov bilan umumiy narxni hisoblaydi.",
      "en": "IntercityRide calls inherited getDistanceKm() and adds toll fee to calculate total fare.",
      "ru": "IntercityRide вызывает getDistanceKm() из суперкласса и добавляет пошлину к общей стоимости."
    }
  },
  {
    "id": 19,
    "tier": 1,
    "tierName": "1-Bosqich: Metodni Qayta Aniqlash (@Override)",
    "sector": "1-30",
    "title": {
      "uz": "19. WIUT — AcademicStaff va VisitingPractitioner doPA() Override (Workshop)",
      "en": "19. WIUT — AcademicStaff and VisitingPractitioner doPA() Override",
      "ru": "19. WIUT — переопределение doPA() в AcademicStaff и VisitingPractitioner"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT 3-ma'ruzaning 30-31-slaydlari va amaliy workshop kodi: 'AcademicStaff' sinfida 'doPA(String teacherName)' metodi mavjud bo'lib, o'qituvchilar attestatsiya hisobotini topshirishini chop etadi. Ammo tashqaridan taklif etilgan 'VisitingPractitioner' o'qituvchilari PA topshirmaydi! Shuning uchun 'VisitingPractitioner' sinfida 'doPA' metodi '@Override' qilinib, \"VPs don't do PA. Teacher name is: \" + teacherName xabarini chop etsin.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'AcademicStaff' sinfida 'public void doPA(String teacherName)' metodini yozing: 'System.out.println(teacherName + \" PA topshiradi.\");'.\n2. 'VisitingPractitioner' sinfini 'extends AcademicStaff' qiling.\n3. 'VisitingPractitioner' ichida 'doPA' metodini '@Override' qiling va unda: 'System.out.println(\"VPs don't do PA. Teacher name is: \" + teacherName);' deb yozing!\n4. 'Main' metodida 'VisitingPractitioner vp = new VisitingPractitioner();' obyektini yarating.\n5. 'vp.doPA(\"Valeriya Tsoy\");' chaqiring. Konsolga: \"VPs don't do PA. Teacher name is: Valeriya Tsoy\" chiqishi kerak.",
      "en": "📖 Real-World Scenario\nWIUT Workshop Slide 30-31: AcademicStaff defines doPA(teacherName). VisitingPractitioner overrides it since VPs do not complete PA.\n\n📋 Steps\n1. Declare AcademicStaff with doPA.\n2. Declare VisitingPractitioner extends AcademicStaff with @Override doPA.\n3. In Main, instantiate VisitingPractitioner, invoke doPA(\"Valeriya Tsoy\"), and verify output.",
      "ru": "📖 Контекст\nЛекция 3, слайды 30-31: AcademicStaff определяет doPA, а VisitingPractitioner переопределяет метод (@Override).\n\n📋 Шаги\n1. Создайте AcademicStaff и VisitingPractitioner с аннотацией @Override.\n2. В main вызовите vp.doPA(\"Valeriya Tsoy\")."
    },
    "requirements": {
      "classes": [
        "AcademicStaff",
        "VisitingPractitioner",
        "Main"
      ],
      "methods": [
        "doPA"
      ],
      "keywords": [
        "extends",
        "@Override"
      ]
    },
    "starterCode": "class AcademicStaff {\n    \n}\n\nclass VisitingPractitioner extends AcademicStaff {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class AcademicStaff {\n    public void doPA(String teacherName) {\n        System.out.println(teacherName + \" PA topshiradi.\");\n    }\n}\n\nclass VisitingPractitioner extends AcademicStaff {\n    @Override\n    public void doPA(String teacherName) {\n        System.out.println(\"VPs don't do PA. Teacher name is: \" + teacherName);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        VisitingPractitioner vp = new VisitingPractitioner();\n        vp.doPA(\"Valeriya Tsoy\");\n    }\n}",
    "detailedSolution": {
      "uz": "@Override annotatsiyasi orqali avlod sinf ota sinf metodini o'ziga xos yangi xulq-atvor bilan to'liq almashtiradi.",
      "en": "@Override allows subclass VisitingPractitioner to completely redefine superclass behavior for doPA.",
      "ru": "@Override позволяет подклассу VisitingPractitioner полностью переопределить поведение метода doPA."
    }
  },
  {
    "id": 20,
    "tier": 1,
    "tierName": "1-Bosqich: Metodni Qayta Aniqlash (@Override)",
    "sector": "1-30",
    "title": {
      "uz": "20. Uzum Fiscal — Product va TaxExemptProduct calculateTax() Override",
      "en": "20. Uzum Fiscal — Product and TaxExemptProduct calculateTax() Override",
      "ru": "20. Uzum Fiscal — переопределение calculateTax() в TaxExemptProduct"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nUzum Marketda odatiy mahsulot 'Product' soliqni narxning foizi bo'yicha hisoblaydi ('price * taxPercent / 100.0'). Soliqdan ozod qilingan ijtimoiy tovarlar 'TaxExemptProduct' esa ushbu metodni '@Override' qilib, har doim 0.0 soliq qaytaradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Product' sinfini e'lon qiling: 'private double price;' maydoni, konstruktori va getterini yozing.\n2. 'Product' ga 'public double calculateTax(double taxPercent)' metodini qo'shing. U '(price * taxPercent) / 100.0' ni qaytarsin.\n3. 'TaxExemptProduct' sinfini 'extends Product' qilib oching va konstruktorida 'super(price);' ni chaqiring.\n4. 'TaxExemptProduct' ichida 'calculateTax' metodini '@Override' qiling va har qanday taxPercent berilganda ham '0.0' qaytarsin.\n5. 'Main' metodida 'TaxExemptProduct item = new TaxExemptProduct(500000.0);' tuzing va konsolga: \"Mahsulot narxi: 500000.0 | Soliq: \" + item.calculateTax(12.0) deb chiqaring.",
      "en": "📖 Real-World Scenario\nProduct calculates tax based on percentage. TaxExemptProduct overrides calculateTax returning 0.0.\n\n📋 Steps\n1. Declare Product with calculateTax.\n2. Declare TaxExemptProduct extends Product with @Override calculateTax returning 0.0.\n3. In Main, instantiate TaxExemptProduct(500000.0) and print tax output.",
      "ru": "📖 Контекст\nProduct рассчитывает налог, а TaxExemptProduct переопределяет метод calculateTax и возвращает 0.0.\n\n📋 Шаги\n1. Создайте Product и TaxExemptProduct.\n2. В main выведите: \"Mahsulot narxi: 500000.0 | Soliq: 0.0\"."
    },
    "requirements": {
      "classes": [
        "Product",
        "TaxExemptProduct",
        "Main"
      ],
      "fields": [
        {
          "name": "price",
          "type": "double"
        }
      ],
      "privateFields": [
        "price"
      ],
      "methods": [
        "getPrice",
        "calculateTax"
      ],
      "constructors": [
        "Product",
        "TaxExemptProduct"
      ],
      "keywords": [
        "extends",
        "super",
        "@Override"
      ]
    },
    "starterCode": "class Product {\n    \n}\n\nclass TaxExemptProduct extends Product {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Product {\n    private double price;\n\n    public Product(double price) {\n        this.price = price;\n    }\n\n    public double getPrice() {\n        return price;\n    }\n\n    public double calculateTax(double taxPercent) {\n        return (price * taxPercent) / 100.0;\n    }\n}\n\nclass TaxExemptProduct extends Product {\n    public TaxExemptProduct(double price) {\n        super(price);\n    }\n\n    @Override\n    public double calculateTax(double taxPercent) {\n        return 0.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TaxExemptProduct item = new TaxExemptProduct(500000.0);\n        System.out.println(\"Mahsulot narxi: \" + item.getPrice() + \" | Soliq: \" + item.calculateTax(12.0));\n    }\n}",
    "detailedSolution": {
      "uz": "TaxExemptProduct sinfida calculateTax metodi qayta aniqlanib (@Override), standart soliq formulasi bekor qilinadi.",
      "en": "TaxExemptProduct overrides calculateTax to enforce a zero-tax policy, substituting superclass logic.",
      "ru": "TaxExemptProduct переопределяет calculateTax, заменяя стандартную формулу на возврат 0.0."
    }
  },
  {
    "id": 21,
    "tier": 1,
    "tierName": "1-Bosqich: Metodni Qayta Aniqlash (@Override)",
    "sector": "1-30",
    "title": {
      "uz": "21. Click Transfer — Transfer va P2PTransfer Komissiya Override",
      "en": "21. Click Transfer — Transfer and P2PTransfer Fee Override",
      "ru": "21. Click Transfer — переопределение комиссии в P2PTransfer"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nClick tizimida bazaviy 'Transfer' sinfining 'calculateFee(double amount)' metodi standart 1% ('amount * 0.01') komissiya hisoblaydi. O'zaro kartadan-kartaga o'tkazma 'P2PTransfer' esa ushbu metodni '@Override' qilib, imtiyozli 0.5% ('amount * 0.005') komissiya hisoblaydi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Transfer' sinfini yarating va unda 'public double calculateFee(double amount)' metodini yozing: 'return amount * 0.01;'.\n2. 'P2PTransfer' sinfini 'extends Transfer' qilib oching.\n3. 'P2PTransfer' ichida 'calculateFee' metodini '@Override' qiling: 'return amount * 0.005;'.\n4. 'Main' metodida 'P2PTransfer p2p = new P2PTransfer();' ob'yektini yarating.\n5. 'p2p.calculateFee(200000.0)' metodini chaqirib, konsolga: \"O'tkazma: 200000.0 | Komissiya: \" + fee ko'rinishida chop eting.",
      "en": "📖 Real-World Scenario\nTransfer computes 1% fee. P2PTransfer overrides calculateFee to compute 0.5% fee.\n\n📋 Steps\n1. Declare Transfer with calculateFee.\n2. Declare P2PTransfer extends Transfer with @Override calculateFee returning amount * 0.005.\n3. In Main, instantiate P2PTransfer and test with 200000.0.",
      "ru": "📖 Контекст\nTransfer берет 1% комиссию, а P2PTransfer переопределяет метод (@Override) и берет 0.5%.\n\n📋 Шаги\n1. Создайте Transfer и P2PTransfer.\n2. В main выведите: \"O'tkazma: 200000.0 | Komissiya: 1000.0\"."
    },
    "requirements": {
      "classes": [
        "Transfer",
        "P2PTransfer",
        "Main"
      ],
      "methods": [
        "calculateFee"
      ],
      "keywords": [
        "extends",
        "@Override"
      ]
    },
    "starterCode": "class Transfer {\n    \n}\n\nclass P2PTransfer extends Transfer {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Transfer {\n    public double calculateFee(double amount) {\n        return amount * 0.01;\n    }\n}\n\nclass P2PTransfer extends Transfer {\n    @Override\n    public double calculateFee(double amount) {\n        return amount * 0.005;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        P2PTransfer p2p = new P2PTransfer();\n        System.out.println(\"O'tkazma: 200000.0 | Komissiya: \" + p2p.calculateFee(200000.0));\n    }\n}",
    "detailedSolution": {
      "uz": "P2PTransfer avlod sinfi calculateFee metodini qayta aniqlab (@Override), 0.5% chegirmali komissiya stavkasini kiritadi.",
      "en": "P2PTransfer overrides calculateFee to apply a reduced 0.5% rate instead of the 1% default.",
      "ru": "P2PTransfer переопределяет calculateFee, применяя пониженную ставку 0.5%."
    }
  },
  {
    "id": 22,
    "tier": 1,
    "tierName": "1-Bosqich: Metodni super.method() bilan Kengaytirish",
    "sector": "1-30",
    "title": {
      "uz": "22. Korzinka Checkout — Cashier va SelfCheckout super.generateReceipt()",
      "en": "22. Korzinka Checkout — Cashier and SelfCheckout super.generateReceipt()",
      "ru": "22. Корзинка Касса — расширение через super.generateReceipt()"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nKorzinka do'konida 'Cashier' sinfining 'generateReceipt(double total)' metodi \"Chek: \" + total + \" so'm\" matnini qaytaradi. O'z-o'ziga xizmat ko'rsatish kassasi 'SelfCheckout' esa chek matnini butunlay boshidan yozmaydi! U ota sinf metodini 'super.generateReceipt(total)' orqali chaqirib, oxiriga \" [QR-PAY APPROVED]\" qo'shimchasini ulab qaytaradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Cashier' sinfini e'lon qiling va unga 'public String generateReceipt(double total)' metodini yozing: 'return \"Chek: \" + total + \" so'm\";'.\n2. 'SelfCheckout' sinfini 'extends Cashier' qilib yarating.\n3. 'SelfCheckout' ichida 'generateReceipt' metodini '@Override' qiling va unda 'return super.generateReceipt(total) + \" [QR-PAY APPROVED]\";' deb yozing!\n4. 'Main' metodida 'SelfCheckout sco = new SelfCheckout();' ob'yektini yarating.\n5. 'sco.generateReceipt(185000.0)' metodini chaqirib, natijani konsolga chop eting.",
      "en": "📖 Real-World Scenario\nCashier generates base receipt text. SelfCheckout overrides generateReceipt and extends it via super.generateReceipt(total) + \" [QR-PAY APPROVED]\".\n\n📋 Steps\n1. Declare Cashier with generateReceipt.\n2. Declare SelfCheckout extends Cashier overriding generateReceipt and chaining super.generateReceipt(total).\n3. In Main, instantiate SelfCheckout and print result for 185000.0.",
      "ru": "📖 Контекст\nCashier формирует базовый чек. SelfCheckout расширяет его через super.generateReceipt(total) + \" [QR-PAY APPROVED]\".\n\n📋 Шаги\n1. Создайте Cashier и SelfCheckout.\n2. В main вызовите sco.generateReceipt(185000.0) и выведите чек на экран."
    },
    "requirements": {
      "classes": [
        "Cashier",
        "SelfCheckout",
        "Main"
      ],
      "methods": [
        "generateReceipt"
      ],
      "keywords": [
        "extends",
        "super",
        "@Override"
      ]
    },
    "starterCode": "class Cashier {\n    \n}\n\nclass SelfCheckout extends Cashier {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Cashier {\n    public String generateReceipt(double total) {\n        return \"Chek: \" + total + \" so'm\";\n    }\n}\n\nclass SelfCheckout extends Cashier {\n    @Override\n    public String generateReceipt(double total) {\n        return super.generateReceipt(total) + \" [QR-PAY APPROVED]\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SelfCheckout sco = new SelfCheckout();\n        System.out.println(sco.generateReceipt(185000.0));\n    }\n}",
    "detailedSolution": {
      "uz": "super.generateReceipt(total) chaqiruvi ota sinfning tayyor xabarni shakllantirish mantig'ini qayta ishlatadi va unga yangi xususiyat qo'shadi.",
      "en": "Calling super.generateReceipt(total) reuses parent formatting logic while appending specialized child details.",
      "ru": "Вызов super.generateReceipt(total) переиспользует логику родителя и дополняет её новыми деталями."
    }
  },
  {
    "id": 23,
    "tier": 1,
    "tierName": "1-Bosqich: Metodni super.method() bilan Kengaytirish",
    "sector": "1-30",
    "title": {
      "uz": "23. Payme Security — Payment va SecurePayment super.processPayment()",
      "en": "23. Payme Security — Payment and SecurePayment super.processPayment()",
      "ru": "23. Payme Security — вызов super.processPayment() в SecurePayment"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nPayme tizimida 'Payment' sinfining 'processPayment(double amount)' metodi \"To'lov o'tdi: \" + amount qaytaradi. Yuqori xavfsizlikdagi 'SecurePayment' esa ushbu metodni qayta aniqlab, 'super.processPayment(amount)' natijasiga \" + SMS OTP Tasdiqlandi\" xavfsizlik belgisini qo'shib beradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Payment' sinfini yarating va unda 'public String processPayment(double amount)' metodini yozing: 'return \"To'lov o'tdi: \" + amount;'.\n2. 'SecurePayment' sinfini 'extends Payment' qilib oching.\n3. 'SecurePayment' ichida 'processPayment' metodini '@Override' qiling va 'return super.processPayment(amount) + \" + SMS OTP Tasdiqlandi\";' deb yozing.\n4. 'Main' metodida 'SecurePayment sp = new SecurePayment();' ob'yektini yarating.\n5. 'sp.processPayment(750000.0)' metodini chaqiring va natijani konsolga chiqaring.",
      "en": "📖 Real-World Scenario\nSecurePayment extends Payment and augments processPayment by calling super.processPayment(amount) + \" + SMS OTP Tasdiqlandi\".\n\n📋 Steps\n1. Declare Payment and SecurePayment.\n2. In Main, invoke sp.processPayment(750000.0) and print output.",
      "ru": "📖 Контекст\nSecurePayment дополняет базовый processPayment вызовом super.processPayment(amount) + \" + SMS OTP Tasdiqlandi\".\n\n📋 Шаги\n1. Создайте Payment и SecurePayment.\n2. В main выведите результат processPayment(750000.0)."
    },
    "requirements": {
      "classes": [
        "Payment",
        "SecurePayment",
        "Main"
      ],
      "methods": [
        "processPayment"
      ],
      "keywords": [
        "extends",
        "super",
        "@Override"
      ]
    },
    "starterCode": "class Payment {\n    \n}\n\nclass SecurePayment extends Payment {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Payment {\n    public String processPayment(double amount) {\n        return \"To'lov o'tdi: \" + amount;\n    }\n}\n\nclass SecurePayment extends Payment {\n    @Override\n    public String processPayment(double amount) {\n        return super.processPayment(amount) + \" + SMS OTP Tasdiqlandi\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SecurePayment sp = new SecurePayment();\n        System.out.println(sp.processPayment(750000.0));\n    }\n}",
    "detailedSolution": {
      "uz": "super.processPayment(amount) orqali asosiy to'lov tekshiruvi chaqiriladi va unga qo'shimcha xavfsizlik tasdig'i qo'shiladi.",
      "en": "super.processPayment(amount) reuses base transaction output, appending OTP verification.",
      "ru": "super.processPayment(amount) дополняет результат базового платежа проверкой OTP."
    }
  },
  {
    "id": 24,
    "tier": 1,
    "tierName": "1-Bosqich: Metodni super.method() bilan Kengaytirish",
    "sector": "1-30",
    "title": {
      "uz": "24. Express24 Dispatch — Delivery va NightDelivery super.dispatchOrder()",
      "en": "24. Express24 Dispatch — Delivery and NightDelivery super.dispatchOrder()",
      "ru": "24. Express24 — вызов super.dispatchOrder() в NightDelivery"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nExpress24 xizmatida 'Delivery' sinfining 'dispatchOrder(String orderId)' metodi \"Buyurtma \" + orderId + \" yo'lga chiqdi\" matnini hosil qiladi. Tungi yetkazish 'NightDelivery' esa ota metodini 'super.dispatchOrder(orderId)' orqali chaqirib, oxiriga \" [TUNGI USTAMA QO'SHILDI]\" belgisini qo'shadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Delivery' sinfini e'lon qiling: 'public String dispatchOrder(String orderId)' metodi 'return \"Buyurtma \" + orderId + \" yo'lga chiqdi\";' qaytarsin.\n2. 'NightDelivery' sinfini 'extends Delivery' qilib yarating.\n3. 'NightDelivery' ichida 'dispatchOrder' metodini '@Override' qiling va 'return super.dispatchOrder(orderId) + \" [TUNGI USTAMA QO'SHILDI]\";' deb yozing.\n4. 'Main' metodida 'NightDelivery nd = new NightDelivery();' obyektini yarating.\n5. 'nd.dispatchOrder(\"EXP-9901\")' ni chaqirib konsolga chop eting.",
      "en": "📖 Real-World Scenario\nNightDelivery extends Delivery and delegates base dispatch message to super.dispatchOrder(orderId).\n\n📋 Steps\n1. Declare Delivery and NightDelivery.\n2. In Main, instantiate NightDelivery and print dispatchOrder(\"EXP-9901\").",
      "ru": "📖 Контекст\nNightDelivery дополняет базовый метод через super.dispatchOrder(orderId) + \" [TUNGI USTAMA QO'SHILDI]\".\n\n📋 Шаги\n1. Создайте Delivery и NightDelivery.\n2. В main выведите результат dispatchOrder(\"EXP-9901\")."
    },
    "requirements": {
      "classes": [
        "Delivery",
        "NightDelivery",
        "Main"
      ],
      "methods": [
        "dispatchOrder"
      ],
      "keywords": [
        "extends",
        "super",
        "@Override"
      ]
    },
    "starterCode": "class Delivery {\n    \n}\n\nclass NightDelivery extends Delivery {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Delivery {\n    public String dispatchOrder(String orderId) {\n        return \"Buyurtma \" + orderId + \" yo'lga chiqdi\";\n    }\n}\n\nclass NightDelivery extends Delivery {\n    @Override\n    public String dispatchOrder(String orderId) {\n        return super.dispatchOrder(orderId) + \" [TUNGI USTAMA QO'SHILDI]\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        NightDelivery nd = new NightDelivery();\n        System.out.println(nd.dispatchOrder(\"EXP-9901\"));\n    }\n}",
    "detailedSolution": {
      "uz": "super.dispatchOrder(orderId) orqali ota sinfdagi standart xabar olinadi va unga tungi xizmat holati ulanadi.",
      "en": "super.dispatchOrder(orderId) retrieves the base dispatch message and decorates it with night surcharge info.",
      "ru": "super.dispatchOrder(orderId) переиспользует базовое сообщение и добавляет метку ночной доставки."
    }
  },
  {
    "id": 25,
    "tier": 1,
    "tierName": "1-Bosqich: Object sinfi va toString() Override",
    "sector": "1-30",
    "title": {
      "uz": "25. Asaxiy Catalog — Book sinfida toString() ni Qayta Aniqlash",
      "en": "25. Asaxiy Catalog — Overriding toString() in Book",
      "ru": "25. Asaxiy Catalog — переопределение toString() в Book"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT 3-ma'ruzaning 18-slaydi: \"Javadagi barcha klasslar bilvosita Object sinfidan meros oladi\". Agar toString() qayta aniqlanmasa, 'Book@45ee12' kabi tushunarsiz xeshkod chiqadi. Asaxiy kitob katalogida 'Book' obyekti chiroyli matn sifatida ko'rinishi uchun 'toString()' ni '@Override' qiling.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Book' sinfini e'lon qiling: 'private String title;' va 'private String author;'.\n2. 'public Book(String title, String author)' konstruktorini va getterlarini yozing.\n3. 'Book' ichida 'public String toString()' metodini '@Override' qiling va u: \"Book[title=\" + title + \", author=\" + author + \"]\" qaytarsin.\n4. 'Main' metodida 'Book b = new Book(\"O'tkan Kunlar\", \"Abdulla Qodiriy\");' obyektini yarating.\n5. 'System.out.println(b);' orqali obyektni konsolga chop eting.",
      "en": "📖 Real-World Scenario\nLecture 3 Slide 18: Every class inherits from Object. Override toString() to display human-readable book details.\n\n📋 Steps\n1. Declare Book with title, author, and constructor.\n2. Override toString() returning \"Book[title=\" + title + \", author=\" + author + \"]\".\n3. In Main, instantiate Book and print it directly.",
      "ru": "📖 Контекст\nСлайд 18: все классы наследуют Object. Переопределите toString() в Book для читаемого вывода.\n\n📋 Шаги\n1. Создайте Book с полями title, author и конструктором.\n2. Переопределите toString().\n3. В main выведите System.out.println(b)."
    },
    "requirements": {
      "classes": [
        "Book",
        "Main"
      ],
      "fields": [
        {
          "name": "title",
          "type": "String"
        },
        {
          "name": "author",
          "type": "String"
        }
      ],
      "privateFields": [
        "title",
        "author"
      ],
      "methods": [
        "getTitle",
        "getAuthor",
        "toString"
      ],
      "constructors": [
        "Book"
      ],
      "keywords": [
        "@Override"
      ]
    },
    "starterCode": "class Book {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Book {\n    private String title;\n    private String author;\n\n    public Book(String title, String author) {\n        this.title = title;\n        this.author = author;\n    }\n\n    public String getTitle() {\n        return title;\n    }\n\n    public String getAuthor() {\n        return author;\n    }\n\n    @Override\n    public String toString() {\n        return \"Book[title=\" + title + \", author=\" + author + \"]\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Book b = new Book(\"O'tkan Kunlar\", \"Abdulla Qodiriy\");\n        System.out.println(b);\n    }\n}",
    "detailedSolution": {
      "uz": "System.out.println(b) chaqirilganda Java avtomatik tarzda b.toString() metodini ishga tushiradi.",
      "en": "When printing an object, Java automatically invokes its overridden toString() implementation.",
      "ru": "При передаче объекта в println Java автоматически вызывает его метод toString()."
    }
  },
  {
    "id": 26,
    "tier": 1,
    "tierName": "1-Bosqich: Object sinfi va toString() Override",
    "sector": "1-30",
    "title": {
      "uz": "26. Uzairways — Ticket sinfida toString() ni Qayta Aniqlash",
      "en": "26. Uzairways — Overriding toString() in Ticket",
      "ru": "26. Uzairways — переопределение toString() в Ticket"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nUzbekistan Airways aviabiletida reys kodi va yo'lovchi ismi aniq formatda ko'rinishi lozim. 'Ticket' sinfida 'toString()' ni qayta aniqlab, bilet ma'lumotlarini qulay formatda qaytaring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Ticket' sinfini e'lon qiling: 'private String flightNo;' va 'private String passenger;'.\n2. 'public Ticket(String flightNo, String passenger)' konstruktorini va getterlarini yozing.\n3. 'public String toString()' metodini '@Override' qiling: 'return \"Ticket[flightNo=\" + flightNo + \", passenger=\" + passenger + \"]\";'.\n4. 'Main' metodida 'Ticket t = new Ticket(\"HY-271\", \"Anvar Alimov\");' obyektini yarating.\n5. 'System.out.println(t);' orqali konsolga chop eting.",
      "en": "📖 Real-World Scenario\nTicket holds flightNo and passenger. Override toString() returning \"Ticket[flightNo=HY-271, passenger=Anvar Alimov]\".\n\n📋 Steps\n1. Declare Ticket with constructor and getters.\n2. Override toString().\n3. In Main, instantiate Ticket and print.",
      "ru": "📖 Контекст\nПереопределите toString() в Ticket для понятного отображения авиабилета.\n\n📋 Шаги\n1. Создайте Ticket с полями flightNo, passenger и конструктором.\n2. Переопределите toString().\n3. В main выведите System.out.println(t)."
    },
    "requirements": {
      "classes": [
        "Ticket",
        "Main"
      ],
      "fields": [
        {
          "name": "flightNo",
          "type": "String"
        },
        {
          "name": "passenger",
          "type": "String"
        }
      ],
      "privateFields": [
        "flightNo",
        "passenger"
      ],
      "methods": [
        "getFlightNo",
        "getPassenger",
        "toString"
      ],
      "constructors": [
        "Ticket"
      ],
      "keywords": [
        "@Override"
      ]
    },
    "starterCode": "class Ticket {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Ticket {\n    private String flightNo;\n    private String passenger;\n\n    public Ticket(String flightNo, String passenger) {\n        this.flightNo = flightNo;\n        this.passenger = passenger;\n    }\n\n    public String getFlightNo() {\n        return flightNo;\n    }\n\n    public String getPassenger() {\n        return passenger;\n    }\n\n    @Override\n    public String toString() {\n        return \"Ticket[flightNo=\" + flightNo + \", passenger=\" + passenger + \"]\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Ticket t = new Ticket(\"HY-271\", \"Anvar Alimov\");\n        System.out.println(t);\n    }\n}",
    "detailedSolution": {
      "uz": "Ticket sinfida toString() qayta aniqlangani tufayli obyekt holati qulay ko'rinishda chop etiladi.",
      "en": "Overriding toString() provides a clean string representation of Ticket state.",
      "ru": "Переопределение toString() дает наглядное строковое представление билета Ticket."
    }
  },
  {
    "id": 27,
    "tier": 1,
    "tierName": "1-Bosqich: Object sinfi va toString() Override",
    "sector": "1-30",
    "title": {
      "uz": "27. Uzrailways — TrainRoute sinfida toString() ni Qayta Aniqlash",
      "en": "27. Uzrailways — Overriding toString() in TrainRoute",
      "ru": "27. Uzrailways — переопределение toString() в TrainRoute"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nO'zbekiston Temir Yo'llarida poyezd yo'nalishi 'TrainRoute' poyezd raqami va manzilni saqlaydi. Tizimda marshrutni aniq ko'rsatish uchun 'toString()' metodini qayta aniqlang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'TrainRoute' sinfini e'lon qiling: 'private String trainNo;' va 'private String destination;'.\n2. 'public TrainRoute(String trainNo, String destination)' konstruktorini va getterlarini yozing.\n3. 'public String toString()' metodini '@Override' qiling: 'return \"Route[trainNo=\" + trainNo + \", dest=\" + destination + \"]\";'.\n4. 'Main' metodida 'TrainRoute tr = new TrainRoute(\"012F\", \"Buxoro\");' obyektini yarating.\n5. 'System.out.println(tr);' deb konsolga chiqaring.",
      "en": "📖 Real-World Scenario\nTrainRoute holds trainNo and destination. Override toString() returning \"Route[trainNo=\" + trainNo + \", dest=\" + destination + \"]\".\n\n📋 Steps\n1. Declare TrainRoute with fields and constructor.\n2. Override toString().\n3. In Main, instantiate and print.",
      "ru": "📖 Контекст\nTrainRoute хранит trainNo и destination. Переопределите toString().\n\n📋 Шаги\n1. Создайте TrainRoute с полями и конструктором.\n2. Переопределите toString().\n3. В main выведите System.out.println(tr)."
    },
    "requirements": {
      "classes": [
        "TrainRoute",
        "Main"
      ],
      "fields": [
        {
          "name": "trainNo",
          "type": "String"
        },
        {
          "name": "destination",
          "type": "String"
        }
      ],
      "privateFields": [
        "trainNo",
        "destination"
      ],
      "methods": [
        "getTrainNo",
        "getDestination",
        "toString"
      ],
      "constructors": [
        "TrainRoute"
      ],
      "keywords": [
        "@Override"
      ]
    },
    "starterCode": "class TrainRoute {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class TrainRoute {\n    private String trainNo;\n    private String destination;\n\n    public TrainRoute(String trainNo, String destination) {\n        this.trainNo = trainNo;\n        this.destination = destination;\n    }\n\n    public String getTrainNo() {\n        return trainNo;\n    }\n\n    public String getDestination() {\n        return destination;\n    }\n\n    @Override\n    public String toString() {\n        return \"Route[trainNo=\" + trainNo + \", dest=\" + destination + \"]\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TrainRoute tr = new TrainRoute(\"012F\", \"Buxoro\");\n        System.out.println(tr);\n    }\n}",
    "detailedSolution": {
      "uz": "TrainRoute sinfidagi toString() poyezd yo'nalishi haqida aniq ma'lumot beradi.",
      "en": "TrainRoute toString() outputs cleanly structured route data.",
      "ru": "TrainRoute toString() возвращает структурированную информацию о маршруте поезда."
    }
  },
  {
    "id": 28,
    "tier": 1,
    "tierName": "1-Bosqich: super.toString() Zanjiri",
    "sector": "1-30",
    "title": {
      "uz": "28. Uzum Logistics — Product va PhysicalProduct super.toString()",
      "en": "28. Uzum Logistics — Product and PhysicalProduct super.toString()",
      "ru": "28. Uzum Logistics — цепочка super.toString() в PhysicalProduct"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT 3-ma'ruzaning 10 va 18-slaydlari: 'Product' sinfining 'toString()' metodi o'zining 'name' va 'price' qiymatlarini formatlaydi. Jismoniy mahsulot 'PhysicalProduct' esa ota sinf ma'lumotlarini qayta yozib o'tirmasdan, 'super.toString()' ni chaqirib, unga o'zining og'irligini ('weightKg') qo'shib qaytaradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Product' sinfini e'lon qiling: 'private String name;' va 'private double price;'. Konstruktori, getterlari hamda 'toString()' metodini yozing: 'return \"Product[name=\" + name + \", price=\" + price + \"]\";'.\n2. 'PhysicalProduct' sinfini 'extends Product' qilib oching va unga 'private double weightKg;' maydonini qo'shing.\n3. 'PhysicalProduct(String name, double price, double weightKg)' konstruktorida 'super(name, price);' ni chaqiring va weightKg ni saqlang.\n4. 'PhysicalProduct' ichida 'toString()' ni '@Override' qiling: 'return super.toString() + \" | Weight=\" + weightKg + \"kg\";'.\n5. 'Main' metodida 'PhysicalProduct p = new PhysicalProduct(\"Choynak\", 85000.0, 1.2);' obyektini tuzing va 'System.out.println(p);' orqali chop eting.",
      "en": "📖 Real-World Scenario\nProduct provides toString(). PhysicalProduct extends Product and chains super.toString() + \" | Weight=\" + weightKg + \"kg\".\n\n📋 Steps\n1. Declare Product with toString().\n2. Declare PhysicalProduct extends Product calling super.toString().\n3. In Main, instantiate PhysicalProduct and print.",
      "ru": "📖 Контекст\nPhysicalProduct дополняет toString суперкласса вызовом super.toString() + \" | Weight=\" + weightKg + \"kg\".\n\n📋 Шаги\n1. Создайте Product и PhysicalProduct.\n2. В main выведите System.out.println(p)."
    },
    "requirements": {
      "classes": [
        "Product",
        "PhysicalProduct",
        "Main"
      ],
      "fields": [
        {
          "name": "name",
          "type": "String"
        },
        {
          "name": "price",
          "type": "double"
        },
        {
          "name": "weightKg",
          "type": "double"
        }
      ],
      "privateFields": [
        "name",
        "price",
        "weightKg"
      ],
      "methods": [
        "getName",
        "getPrice",
        "getWeightKg",
        "toString"
      ],
      "constructors": [
        "Product",
        "PhysicalProduct"
      ],
      "keywords": [
        "extends",
        "super",
        "@Override"
      ]
    },
    "starterCode": "class Product {\n    \n}\n\nclass PhysicalProduct extends Product {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Product {\n    private String name;\n    private double price;\n\n    public Product(String name, double price) {\n        this.name = name;\n        this.price = price;\n    }\n\n    public String getName() {\n        return name;\n    }\n\n    public double getPrice() {\n        return price;\n    }\n\n    @Override\n    public String toString() {\n        return \"Product[name=\" + name + \", price=\" + price + \"]\";\n    }\n}\n\nclass PhysicalProduct extends Product {\n    private double weightKg;\n\n    public PhysicalProduct(String name, double price, double weightKg) {\n        super(name, price);\n        this.weightKg = weightKg;\n    }\n\n    public double getWeightKg() {\n        return weightKg;\n    }\n\n    @Override\n    public String toString() {\n        return super.toString() + \" | Weight=\" + weightKg + \"kg\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PhysicalProduct p = new PhysicalProduct(\"Choynak\", 85000.0, 1.2);\n        System.out.println(p);\n    }\n}",
    "detailedSolution": {
      "uz": "PhysicalProduct ichida super.toString() chaqirilib, ota sinf ma'lumotlariga avlod sinf maydoni ulanadi.",
      "en": "PhysicalProduct invokes super.toString() to reuse parent representation and append weight.",
      "ru": "PhysicalProduct вызывает super.toString(), дополняя данные родителя весом товара."
    }
  },
  {
    "id": 29,
    "tier": 1,
    "tierName": "1-Bosqich: super.toString() Zanjiri",
    "sector": "1-30",
    "title": {
      "uz": "29. Payme User — User va VerifiedUser super.toString()",
      "en": "29. Payme User — User and VerifiedUser super.toString()",
      "ru": "29. Payme User — цепочка super.toString() в VerifiedUser"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nPayme foydalanuvchisi 'User' o'zining 'phone' raqamini ko'rsatadi. Identifikatsiyadan o'tgan 'VerifiedUser' esa ota sinf 'toString()' iga o'zining pasport seriyasini ('passportId') ulab chiqaradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'User' sinfini e'lon qiling: 'private String phone;'. Konstruktori va 'toString()' metodida 'return \"User[phone=\" + phone + \"]\";' yozing.\n2. 'VerifiedUser' sinfini 'extends User' qilib oching va unga 'private String passportId;' maydonini qo'shing.\n3. 'VerifiedUser(String phone, String passportId)' konstruktorida 'super(phone);' ni chaqiring va passportId ni saqlang.\n4. 'VerifiedUser' ichida 'toString()' ni '@Override' qiling: 'return super.toString() + \" | Passport=\" + passportId;'.\n5. 'Main' metodida 'VerifiedUser vu = new VerifiedUser(\"+998971112233\", \"AB1234567\");' obyektini tuzing va 'System.out.println(vu);' deb chiqaring.",
      "en": "📖 Real-World Scenario\nUser has phone. VerifiedUser extends User, chains super.toString(), and adds passportId.\n\n📋 Steps\n1. Declare User and VerifiedUser.\n2. In Main, instantiate and print VerifiedUser.",
      "ru": "📖 Контекст\nVerifiedUser дополняет User.toString() вызовом super.toString() + \" | Passport=\" + passportId.\n\n📋 Шаги\n1. Создайте User и VerifiedUser.\n2. В main выведите System.out.println(vu)."
    },
    "requirements": {
      "classes": [
        "User",
        "VerifiedUser",
        "Main"
      ],
      "fields": [
        {
          "name": "phone",
          "type": "String"
        },
        {
          "name": "passportId",
          "type": "String"
        }
      ],
      "privateFields": [
        "phone",
        "passportId"
      ],
      "methods": [
        "getPhone",
        "getPassportId",
        "toString"
      ],
      "constructors": [
        "User",
        "VerifiedUser"
      ],
      "keywords": [
        "extends",
        "super",
        "@Override"
      ]
    },
    "starterCode": "class User {\n    \n}\n\nclass VerifiedUser extends User {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class User {\n    private String phone;\n\n    public User(String phone) {\n        this.phone = phone;\n    }\n\n    public String getPhone() {\n        return phone;\n    }\n\n    @Override\n    public String toString() {\n        return \"User[phone=\" + phone + \"]\";\n    }\n}\n\nclass VerifiedUser extends User {\n    private String passportId;\n\n    public VerifiedUser(String phone, String passportId) {\n        super(phone);\n        this.passportId = passportId;\n    }\n\n    public String getPassportId() {\n        return passportId;\n    }\n\n    @Override\n    public String toString() {\n        return super.toString() + \" | Passport=\" + passportId;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        VerifiedUser vu = new VerifiedUser(\"+998971112233\", \"AB1234567\");\n        System.out.println(vu);\n    }\n}",
    "detailedSolution": {
      "uz": "super.toString() orqali User holati olinadi va tasdiqlangan pasport ma'lumoti qo'shiladi.",
      "en": "super.toString() fetches User phone information and appends verified passport data.",
      "ru": "super.toString() возвращает телефон пользователя и дополняет его серией паспорта."
    }
  },
  {
    "id": 30,
    "tier": 1,
    "tierName": "1-Bosqich: super.toString() Zanjiri",
    "sector": "1-30",
    "title": {
      "uz": "30. FastGov — Citizen va Diplomat super.toString()",
      "en": "30. FastGov — Citizen and Diplomat super.toString()",
      "ru": "30. FastGov — цепочка super.toString() в Diplomat"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nElektron hukumat tizimida fuqaro 'Citizen' o'zining ismi bilan ifodalanadi. Maxsus xizmatdagi 'Diplomat' esa ota sinf 'toString()' natijasiga diplomatik unvonini ('diplomaticRank') qo'shib chop etadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Citizen' sinfini e'lon qiling: 'private String name;'. Konstruktori va 'toString()' metodida 'return \"Citizen[name=\" + name + \"]\";' yozing.\n2. 'Diplomat' sinfini 'extends Citizen' qilib oching va unga 'private String diplomaticRank;' maydonini qo'shing.\n3. 'Diplomat(String name, String diplomaticRank)' konstruktorida 'super(name);' ni chaqiring va martabani saqlang.\n4. 'Diplomat' ichida 'toString()' ni '@Override' qiling: 'return super.toString() + \" | Rank=\" + diplomaticRank;'.\n5. 'Main' metodida 'Diplomat d = new Diplomat(\"Otabek Fayzullayev\", \"Elchi\");' obyektini yarating va 'System.out.println(d);' deb chop eting.",
      "en": "📖 Real-World Scenario\nCitizen provides toString(). Diplomat extends Citizen and chains super.toString() + \" | Rank=\" + diplomaticRank.\n\n📋 Steps\n1. Declare Citizen and Diplomat.\n2. In Main, instantiate Diplomat and print.",
      "ru": "📖 Контекст\nDiplomat дополняет Citizen.toString() дипломатическим рангом.\n\n📋 Шаги\n1. Создайте Citizen и Diplomat.\n2. В main выведите System.out.println(d)."
    },
    "requirements": {
      "classes": [
        "Citizen",
        "Diplomat",
        "Main"
      ],
      "fields": [
        {
          "name": "name",
          "type": "String"
        },
        {
          "name": "diplomaticRank",
          "type": "String"
        }
      ],
      "privateFields": [
        "name",
        "diplomaticRank"
      ],
      "methods": [
        "getName",
        "getDiplomaticRank",
        "toString"
      ],
      "constructors": [
        "Citizen",
        "Diplomat"
      ],
      "keywords": [
        "extends",
        "super",
        "@Override"
      ]
    },
    "starterCode": "class Citizen {\n    \n}\n\nclass Diplomat extends Citizen {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Citizen {\n    private String name;\n\n    public Citizen(String name) {\n        this.name = name;\n    }\n\n    public String getName() {\n        return name;\n    }\n\n    @Override\n    public String toString() {\n        return \"Citizen[name=\" + name + \"]\";\n    }\n}\n\nclass Diplomat extends Citizen {\n    private String diplomaticRank;\n\n    public Diplomat(String name, String diplomaticRank) {\n        super(name);\n        this.diplomaticRank = diplomaticRank;\n    }\n\n    public String getDiplomaticRank() {\n        return diplomaticRank;\n    }\n\n    @Override\n    public String toString() {\n        return super.toString() + \" | Rank=\" + diplomaticRank;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Diplomat d = new Diplomat(\"Otabek Fayzullayev\", \"Elchi\");\n        System.out.println(d);\n    }\n}",
    "detailedSolution": {
      "uz": "Diplomat sinfi super.toString() yordamida ota sinf ma'lumotlarini takrorlamasdan toza kod bilan natija hosil qiladi.",
      "en": "Diplomat chains super.toString() ensuring clean, non-redundant representation.",
      "ru": "Diplomat вызывает super.toString(), избегая дублирования логики родительского класса."
    }
  },
  {
    "id": 31,
    "tier": 2,
    "tierName": "2-Bosqich: Ko'p Pog'onali Merosxo'rlik (Multi-level)",
    "sector": "31-60",
    "title": {
      "uz": "31. AgroTech — Plant, Fruit va Apple 3-Bosqichli Merosxo'rligi (Lecture 3 Slide 26-29)",
      "en": "31. AgroTech — Plant, Fruit, and Apple Multi-Level (Slide 26-29)",
      "ru": "31. AgroTech — 3-уровневое наследование Plant, Fruit и Apple"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT 3-ma'ruzaning 26-29-slaydlari: 'Plant' (o'simlik turi), 'Fruit extends Plant' (meva rangi), va 'Apple extends Fruit' (olma navi). Bu ko'p pog'onali merosxo'rlik zanjiridir (Grandparent -> Parent -> Child).\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Plant' sinfini e'lon qiling: 'private String type;' maydoni, konstruktori va getteri.\n2. 'Fruit' sinfini 'extends Plant' qiling: 'private String color;' maydoni, 'Fruit(String type, String color)' konstruktorida 'super(type);' chaqiring. Getter yozing.\n3. 'Apple' sinfini 'extends Fruit' qiling: 'private String variety;' maydoni, 'Apple(String type, String color, String variety)' konstruktorida 'super(type, color);' chaqiring. Getter yozing.\n4. 'Main' metodida 'Apple a = new Apple(\"Daraxt Meva\", \"Qizil\", \"Beshyulduz\");' obyektini yarating.\n5. Konsolga: \"Turi: Daraxt Meva | Rangi: Qizil | Navi: Beshyulduz\" deb chop eting.",
      "en": "📖 Real-World Scenario\nLecture 3 Slide 26-29: Multi-level inheritance Plant -> Fruit -> Apple.\n\n📋 Steps\n1. Declare Plant(type), Fruit(type, color), Apple(type, color, variety).\n2. Chain constructors using super(type) and super(type, color).\n3. In Main, instantiate Apple and print full hierarchical attributes.",
      "ru": "📖 Контекст\nСлайды 26-29 лекции 3: многоуровневое наследование Plant -> Fruit -> Apple.\n\n📋 Шаги\n1. Создайте Plant, Fruit extends Plant, Apple extends Fruit.\n2. В main выведите: \"Turi: Daraxt Meva | Rangi: Qizil | Navi: Beshyulduz\"."
    },
    "requirements": {
      "classes": [
        "Plant",
        "Fruit",
        "Apple",
        "Main"
      ],
      "fields": [
        {
          "name": "type",
          "type": "String"
        },
        {
          "name": "color",
          "type": "String"
        },
        {
          "name": "variety",
          "type": "String"
        }
      ],
      "privateFields": [
        "type",
        "color",
        "variety"
      ],
      "methods": [
        "getType",
        "getColor",
        "getVariety"
      ],
      "constructors": [
        "Plant",
        "Fruit",
        "Apple"
      ],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class Plant {\n    \n}\n\nclass Fruit extends Plant {\n    \n}\n\nclass Apple extends Fruit {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Plant {\n    private String type;\n\n    public Plant(String type) {\n        this.type = type;\n    }\n\n    public String getType() {\n        return type;\n    }\n}\n\nclass Fruit extends Plant {\n    private String color;\n\n    public Fruit(String type, String color) {\n        super(type);\n        this.color = color;\n    }\n\n    public String getColor() {\n        return color;\n    }\n}\n\nclass Apple extends Fruit {\n    private String variety;\n\n    public Apple(String type, String color, String variety) {\n        super(type, color);\n        this.variety = variety;\n    }\n\n    public String getVariety() {\n        return variety;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Apple a = new Apple(\"Daraxt Meva\", \"Qizil\", \"Beshyulduz\");\n        System.out.println(\"Turi: \" + a.getType() + \" | Rangi: \" + a.getColor() + \" | Navi: \" + a.getVariety());\n    }\n}",
    "detailedSolution": {
      "uz": "Apple sinfi o'zidan oldingi Fruit va Plant sinflaridagi barcha getter metodlarga to'liq ega bo'ladi (Multi-level inheritance).",
      "en": "Apple accesses methods across the inheritance hierarchy (Fruit and Plant).",
      "ru": "Apple имеет доступ к методам всех классов иерархии (Fruit и Plant)."
    }
  },
  {
    "id": 32,
    "tier": 2,
    "tierName": "2-Bosqich: Ko'p Pog'onali Merosxo'rlik (Multi-level)",
    "sector": "31-60",
    "title": {
      "uz": "32. Texnomart — Item, ElectronicDevice va Laptop Zanjiri",
      "en": "32. Texnomart — Item, ElectronicDevice, and Laptop Chain",
      "ru": "32. Texnomart — цепочка Item, ElectronicDevice и Laptop"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nTexnomart omborida: 'Item(name)' ota sinf, undan meros olgan 'ElectronicDevice(name, voltage)' o'rta sinf, va eng quyi avlod 'Laptop(name, voltage, ramGb)' mavjud.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Item' sinfini e'lon qiling: 'private String name;' maydoni, konstruktori va getteri.\n2. 'ElectronicDevice' sinfini 'extends Item' qilib oching: 'private int voltage;' maydoni, konstruktorda 'super(name);' chaqiring. Getter yozing.\n3. 'Laptop' sinfini 'extends ElectronicDevice' qiling: 'private int ramGb;' maydoni, konstruktorda 'super(name, voltage);' chaqiring. Getter yozing.\n4. 'Main' metodida 'Laptop lp = new Laptop(\"MacBook Pro\", 220, 16);' obyektini yarating.\n5. Konsolga: \"Noutbuk: MacBook Pro | Kuchlanish: 220V | RAM: 16GB\" deb chop eting.",
      "en": "📖 Real-World Scenario\nMulti-level: Item -> ElectronicDevice -> Laptop.\n\n📋 Steps\n1. Declare Item, ElectronicDevice extends Item, Laptop extends ElectronicDevice.\n2. In Main, instantiate Laptop and print all three attributes.",
      "ru": "📖 Контекст\n3 уровня: Item -> ElectronicDevice -> Laptop.\n\n📋 Шаги\n1. Создайте классы Item, ElectronicDevice, Laptop.\n2. В main выведите: \"Noutbuk: MacBook Pro | Kuchlanish: 220V | RAM: 16GB\"."
    },
    "requirements": {
      "classes": [
        "Item",
        "ElectronicDevice",
        "Laptop",
        "Main"
      ],
      "fields": [
        {
          "name": "name",
          "type": "String"
        },
        {
          "name": "voltage",
          "type": "int"
        },
        {
          "name": "ramGb",
          "type": "int"
        }
      ],
      "privateFields": [
        "name",
        "voltage",
        "ramGb"
      ],
      "methods": [
        "getName",
        "getVoltage",
        "getRamGb"
      ],
      "constructors": [
        "Item",
        "ElectronicDevice",
        "Laptop"
      ],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class Item {\n    \n}\n\nclass ElectronicDevice extends Item {\n    \n}\n\nclass Laptop extends ElectronicDevice {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Item {\n    private String name;\n\n    public Item(String name) {\n        this.name = name;\n    }\n\n    public String getName() {\n        return name;\n    }\n}\n\nclass ElectronicDevice extends Item {\n    private int voltage;\n\n    public ElectronicDevice(String name, int voltage) {\n        super(name);\n        this.voltage = voltage;\n    }\n\n    public int getVoltage() {\n        return voltage;\n    }\n}\n\nclass Laptop extends ElectronicDevice {\n    private int ramGb;\n\n    public Laptop(String name, int voltage, int ramGb) {\n        super(name, voltage);\n        this.ramGb = ramGb;\n    }\n\n    public int getRamGb() {\n        return ramGb;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Laptop lp = new Laptop(\"MacBook Pro\", 220, 16);\n        System.out.println(\"Noutbuk: \" + lp.getName() + \" | Kuchlanish: \" + lp.getVoltage() + \"V | RAM: \" + lp.getRamGb() + \"GB\");\n    }\n}",
    "detailedSolution": {
      "uz": "Laptop obyekti ElectronicDevice orqali Item sinfigacha bo'lgan barcha xususiyatlarni uzluksiz meros oladi.",
      "en": "Laptop seamlessly inherits properties up to Item through ElectronicDevice.",
      "ru": "Laptop наследует свойства всей цепочки до Item через класс ElectronicDevice."
    }
  },
  {
    "id": 33,
    "tier": 2,
    "tierName": "2-Bosqich: Ko'p Pog'onali Merosxo'rlik (Multi-level)",
    "sector": "31-60",
    "title": {
      "uz": "33. AvtoTech — Machine, GroundVehicle va PassengerCar Zanjiri",
      "en": "33. AvtoTech — Machine, GroundVehicle, and PassengerCar Chain",
      "ru": "33. AvtoTech — цепочка Machine, GroundVehicle и PassengerCar"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nTransport texnologiyalarida: 'Machine(serialNo)' asosiy mexanizm, 'GroundVehicle(serialNo, wheels)' g'ildirakli vosita, va 'PassengerCar(serialNo, wheels, seatCapacity)' yengil avtomobil ierarxiyasini tuzing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Machine' sinfida 'private String serialNo;' va konstruktorini yozing.\n2. 'GroundVehicle' sinfini 'extends Machine' qilib, 'private int wheels;' qo'shing va 'super(serialNo);' ni chaqiring.\n3. 'PassengerCar' sinfini 'extends GroundVehicle' qilib, 'private int seatCapacity;' qo'shing va 'super(serialNo, wheels);' ni chaqiring.\n4. 'Main' metodida 'PassengerCar car = new PassengerCar(\"SN-9988\", 4, 5);' obyektini yarating.\n5. Konsolga: \"Seriya: SN-9988 | G'ildirak: 4 | O'rindiq: 5\" deb chop eting.",
      "en": "📖 Real-World Scenario\nChain: Machine -> GroundVehicle -> PassengerCar.\n\n📋 Steps\n1. Declare Machine, GroundVehicle, PassengerCar.\n2. In Main, instantiate PassengerCar and print attributes.",
      "ru": "📖 Контекст\nЦепочка: Machine -> GroundVehicle -> PassengerCar.\n\n📋 Шаги\n1. Создайте Machine, GroundVehicle, PassengerCar.\n2. В main выведите: \"Seriya: SN-9988 | G'ildirak: 4 | O'rindiq: 5\"."
    },
    "requirements": {
      "classes": [
        "Machine",
        "GroundVehicle",
        "PassengerCar",
        "Main"
      ],
      "fields": [
        {
          "name": "serialNo",
          "type": "String"
        },
        {
          "name": "wheels",
          "type": "int"
        },
        {
          "name": "seatCapacity",
          "type": "int"
        }
      ],
      "privateFields": [
        "serialNo",
        "wheels",
        "seatCapacity"
      ],
      "methods": [
        "getSerialNo",
        "getWheels",
        "getSeatCapacity"
      ],
      "constructors": [
        "Machine",
        "GroundVehicle",
        "PassengerCar"
      ],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class Machine {\n    \n}\n\nclass GroundVehicle extends Machine {\n    \n}\n\nclass PassengerCar extends GroundVehicle {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Machine {\n    private String serialNo;\n\n    public Machine(String serialNo) {\n        this.serialNo = serialNo;\n    }\n\n    public String getSerialNo() {\n        return serialNo;\n    }\n}\n\nclass GroundVehicle extends Machine {\n    private int wheels;\n\n    public GroundVehicle(String serialNo, int wheels) {\n        super(serialNo);\n        this.wheels = wheels;\n    }\n\n    public int getWheels() {\n        return wheels;\n    }\n}\n\nclass PassengerCar extends GroundVehicle {\n    private int seatCapacity;\n\n    public PassengerCar(String serialNo, int wheels, int seatCapacity) {\n        super(serialNo, wheels);\n        this.seatCapacity = seatCapacity;\n    }\n\n    public int getSeatCapacity() {\n        return seatCapacity;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PassengerCar car = new PassengerCar(\"SN-9988\", 4, 5);\n        System.out.println(\"Seriya: \" + car.getSerialNo() + \" | G'ildirak: \" + car.getWheels() + \" | O'rindiq: \" + car.getSeatCapacity());\n    }\n}",
    "detailedSolution": {
      "uz": "PassengerCar konstruktori orqali berilgan parametrlar super() zanjiri bo'ylab eng yuqori Machine sinfigacha yetib boradi.",
      "en": "Constructor chaining propagates arguments up to Machine via GroundVehicle.",
      "ru": "Цепочка вызовов super() передает параметры от PassengerCar через GroundVehicle к Machine."
    }
  },
  {
    "id": 34,
    "tier": 2,
    "tierName": "2-Bosqich: 3-Bosqichli super() Zanjiri",
    "sector": "31-60",
    "title": {
      "uz": "34. Uzum — Entity, Account va SellerAccount super() Zanjiri",
      "en": "34. Uzum — Entity, Account, and SellerAccount Constructor Chain",
      "ru": "34. Uzum — цепочка конструкторов в Entity, Account и SellerAccount"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nUzum tizimida ma'lumotlar bazasi yozuvi: 'Entity(id)' -> 'Account(id, username)' -> 'SellerAccount(id, username, tin)'. Har bir bosqichda 'super(..)' parametrlarini o'z ota sinfiga uzatadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Entity(String id)' sinfi va getteri.\n2. 'Account(String id, String username)' 'extends Entity', birinchi qatorda 'super(id);' chaqirilsin.\n3. 'SellerAccount(String id, String username, String tin)' 'extends Account', birinchi qatorda 'super(id, username);' chaqirilsin.\n4. 'Main' metodida 'SellerAccount sa = new SellerAccount(\"E-101\", \"shox_store\", \"123456789\");' obyektini tuzing.\n5. Konsolga: \"ID: E-101 | Foydalanuvchi: shox_store | STIR: 123456789\" deb chop eting.",
      "en": "📖 Real-World Scenario\nChaining 3 tiers: Entity(id) -> Account(id, username) -> SellerAccount(id, username, tin).\n\n📋 Steps\n1. Declare 3 classes with constructor chaining.\n2. In Main, instantiate SellerAccount and print attributes.",
      "ru": "📖 Контекст\nЦепочка 3 уровней: Entity -> Account -> SellerAccount.\n\n📋 Шаги\n1. Создайте классы с вызовами super(..).\n2. В main выведите: \"ID: E-101 | Foydalanuvchi: shox_store | STIR: 123456789\"."
    },
    "requirements": {
      "classes": [
        "Entity",
        "Account",
        "SellerAccount",
        "Main"
      ],
      "fields": [
        {
          "name": "id",
          "type": "String"
        },
        {
          "name": "username",
          "type": "String"
        },
        {
          "name": "tin",
          "type": "String"
        }
      ],
      "privateFields": [
        "id",
        "username",
        "tin"
      ],
      "methods": [
        "getId",
        "getUsername",
        "getTin"
      ],
      "constructors": [
        "Entity",
        "Account",
        "SellerAccount"
      ],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class Entity {\n    \n}\n\nclass Account extends Entity {\n    \n}\n\nclass SellerAccount extends Account {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Entity {\n    private String id;\n\n    public Entity(String id) {\n        this.id = id;\n    }\n\n    public String getId() {\n        return id;\n    }\n}\n\nclass Account extends Entity {\n    private String username;\n\n    public Account(String id, String username) {\n        super(id);\n        this.username = username;\n    }\n\n    public String getUsername() {\n        return username;\n    }\n}\n\nclass SellerAccount extends Account {\n    private String tin;\n\n    public SellerAccount(String id, String username, String tin) {\n        super(id, username);\n        this.tin = tin;\n    }\n\n    public String getTin() {\n        return tin;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SellerAccount sa = new SellerAccount(\"E-101\", \"shox_store\", \"123456789\");\n        System.out.println(\"ID: \" + sa.getId() + \" | Foydalanuvchi: \" + sa.getUsername() + \" | STIR: \" + sa.getTin());\n    }\n}",
    "detailedSolution": {
      "uz": "super(id, username) Account konstruktorini, u esa o'z navbatida super(id) orqali Entity konstruktorini chaqiradi.",
      "en": "SellerAccount calls super(id, username), which subsequently invokes super(id) in Entity.",
      "ru": "SellerAccount вызывает super(id, username), который затем вызывает super(id) в Entity."
    }
  },
  {
    "id": 35,
    "tier": 2,
    "tierName": "2-Bosqich: 3-Bosqichli super() Zanjiri",
    "sector": "31-60",
    "title": {
      "uz": "35. Payme — Record, Transaction va CashbackTransaction super() Zanjiri",
      "en": "35. Payme — Record, Transaction, and CashbackTransaction Chain",
      "ru": "35. Payme — цепочка Record, Transaction и CashbackTransaction"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nPayme tranzaksiyalar auditi: 'Record(code)' -> 'Transaction(code, amount)' -> 'CashbackTransaction(code, amount, cashbackRate)'.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Record(String code)' ota sinfi va getteri.\n2. 'Transaction(String code, double amount)' 'extends Record', 'super(code);' chaqiring.\n3. 'CashbackTransaction(String code, double amount, double cashbackRate)' 'extends Transaction', 'super(code, amount);' chaqiring.\n4. 'Main' metodida 'CashbackTransaction cbt = new CashbackTransaction(\"TX-7001\", 150000.0, 1.5);' obyektini tuzing.\n5. Konsolga: \"Kod: TX-7001 | Summa: 150000.0 | Keshbek: 1.5%\" deb chop eting.",
      "en": "📖 Real-World Scenario\nChain: Record(code) -> Transaction(code, amount) -> CashbackTransaction(code, amount, cashbackRate).\n\n📋 Steps\n1. Declare 3 classes with super constructor chaining.\n2. In Main, instantiate CashbackTransaction and print values.",
      "ru": "📖 Контекст\nЦепочка: Record -> Transaction -> CashbackTransaction.\n\n📋 Шаги\n1. Создайте классы с цепочкой super(..).\n2. В main выведите: \"Kod: TX-7001 | Summa: 150000.0 | Keshbek: 1.5%\"."
    },
    "requirements": {
      "classes": [
        "Record",
        "Transaction",
        "CashbackTransaction",
        "Main"
      ],
      "fields": [
        {
          "name": "code",
          "type": "String"
        },
        {
          "name": "amount",
          "type": "double"
        },
        {
          "name": "cashbackRate",
          "type": "double"
        }
      ],
      "privateFields": [
        "code",
        "amount",
        "cashbackRate"
      ],
      "methods": [
        "getCode",
        "getAmount",
        "getCashbackRate"
      ],
      "constructors": [
        "Record",
        "Transaction",
        "CashbackTransaction"
      ],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class Record {\n    \n}\n\nclass Transaction extends Record {\n    \n}\n\nclass CashbackTransaction extends Transaction {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Record {\n    private String code;\n\n    public Record(String code) {\n        this.code = code;\n    }\n\n    public String getCode() {\n        return code;\n    }\n}\n\nclass Transaction extends Record {\n    private double amount;\n\n    public Transaction(String code, double amount) {\n        super(code);\n        this.amount = amount;\n    }\n\n    public double getAmount() {\n        return amount;\n    }\n}\n\nclass CashbackTransaction extends Transaction {\n    private double cashbackRate;\n\n    public CashbackTransaction(String code, double amount, double cashbackRate) {\n        super(code, amount);\n        this.cashbackRate = cashbackRate;\n    }\n\n    public double getCashbackRate() {\n        return cashbackRate;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CashbackTransaction cbt = new CashbackTransaction(\"TX-7001\", 150000.0, 1.5);\n        System.out.println(\"Kod: \" + cbt.getCode() + \" | Summa: \" + cbt.getAmount() + \" | Keshbek: \" + cbt.getCashbackRate() + \"%\");\n    }\n}",
    "detailedSolution": {
      "uz": "Parametrlar zanjirli tarzda ota sinflarga uzatilib, ma'lumotlar butunligi saqlanadi.",
      "en": "Chained constructor invocation passes arguments cleanly up the inheritance hierarchy.",
      "ru": "Цепочка конструкторов чисто передает аргументы вверх по иерархии наследования."
    }
  },
  {
    "id": 36,
    "tier": 2,
    "tierName": "2-Bosqich: 3-Bosqichli super() Zanjiri",
    "sector": "31-60",
    "title": {
      "uz": "36. Korzinka — Unit, GroceryItem va DairyProduct super() Zanjiri",
      "en": "36. Korzinka — Unit, GroceryItem, and DairyProduct Chain",
      "ru": "36. Korzinka — цепочка Unit, GroceryItem и DairyProduct"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nKorzinka omborida tovar zanjiri: 'Unit(sku)' -> 'GroceryItem(sku, shelfLifeDays)' -> 'DairyProduct(sku, shelfLifeDays, fatPercent)'.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Unit(String sku)' sinfi va getteri.\n2. 'GroceryItem(String sku, int shelfLifeDays)' 'extends Unit', 'super(sku);' chaqiring.\n3. 'DairyProduct(String sku, int shelfLifeDays, double fatPercent)' 'extends GroceryItem', 'super(sku, shelfLifeDays);' chaqiring.\n4. 'Main' metodida 'DairyProduct dp = new DairyProduct(\"MILK-01\", 7, 3.2);' obyektini tuzing.\n5. Konsolga: \"SKU: MILK-01 | Yaroqlilik: 7 kun | Yog'lilik: 3.2%\" deb chop eting.",
      "en": "📖 Real-World Scenario\nChain: Unit -> GroceryItem -> DairyProduct.\n\n📋 Steps\n1. Declare 3 classes with chained constructors.\n2. In Main, instantiate DairyProduct and print attributes.",
      "ru": "📖 Контекст\nЦепочка: Unit -> GroceryItem -> DairyProduct.\n\n📋 Шаги\n1. Создайте классы с вызовами super(..).\n2. В main выведите: \"SKU: MILK-01 | Yaroqlilik: 7 kun | Yog'lilik: 3.2%\"."
    },
    "requirements": {
      "classes": [
        "Unit",
        "GroceryItem",
        "DairyProduct",
        "Main"
      ],
      "fields": [
        {
          "name": "sku",
          "type": "String"
        },
        {
          "name": "shelfLifeDays",
          "type": "int"
        },
        {
          "name": "fatPercent",
          "type": "double"
        }
      ],
      "privateFields": [
        "sku",
        "shelfLifeDays",
        "fatPercent"
      ],
      "methods": [
        "getSku",
        "getShelfLifeDays",
        "getFatPercent"
      ],
      "constructors": [
        "Unit",
        "GroceryItem",
        "DairyProduct"
      ],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class Unit {\n    \n}\n\nclass GroceryItem extends Unit {\n    \n}\n\nclass DairyProduct extends GroceryItem {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Unit {\n    private String sku;\n\n    public Unit(String sku) {\n        this.sku = sku;\n    }\n\n    public String getSku() {\n        return sku;\n    }\n}\n\nclass GroceryItem extends Unit {\n    private int shelfLifeDays;\n\n    public GroceryItem(String sku, int shelfLifeDays) {\n        super(sku);\n        this.shelfLifeDays = shelfLifeDays;\n    }\n\n    public int getShelfLifeDays() {\n        return shelfLifeDays;\n    }\n}\n\nclass DairyProduct extends GroceryItem {\n    private double fatPercent;\n\n    public DairyProduct(String sku, int shelfLifeDays, double fatPercent) {\n        super(sku, shelfLifeDays);\n        this.fatPercent = fatPercent;\n    }\n\n    public double getFatPercent() {\n        return fatPercent;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DairyProduct dp = new DairyProduct(\"MILK-01\", 7, 3.2);\n        System.out.println(\"SKU: \" + dp.getSku() + \" | Yaroqlilik: \" + dp.getShelfLifeDays() + \" kun | Yog'lilik: \" + dp.getFatPercent() + \"%\");\n    }\n}",
    "detailedSolution": {
      "uz": "DairyProduct konstruktori orqali ota sinflardagi barcha zaruriy xususiyatlar to'liq initsializatsiya qilinadi.",
      "en": "DairyProduct initializes all superclass properties systematically via chained super() calls.",
      "ru": "DairyProduct инициализирует все свойства суперклассов через последовательные вызовы super()."
    }
  },
  {
    "id": 37,
    "tier": 2,
    "tierName": "2-Bosqich: Ierarxik Merosxo'rlik (Hierarchical)",
    "sector": "31-60",
    "title": {
      "uz": "37. Uzum — Product, PhysicalProduct va DigitalProduct (Lecture 3 Seminar)",
      "en": "37. Uzum — Product, PhysicalProduct, and DigitalProduct",
      "ru": "37. Uzum — Product, PhysicalProduct и DigitalProduct (Семинар 3)"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT 3-haftalik Seminar handouti: 'Product(name, price)' ota sinfidan 2 ta mustaqil avlod sinfi ajralib chiqadi: 'PhysicalProduct(name, price, weightKg)' va 'DigitalProduct(name, price, fileSizeMb)'. Bu ierarxik merosxo'rlikdir (1 Superclass -> 2 Subclasses).\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Product(String name, double price)' sinfini yarating va getterlarini yozing.\n2. 'PhysicalProduct' sinfini 'extends Product' qilib, 'private double weightKg;' maydoni va 'super(name, price);' chaqiruvchi konstruktorini yozing.\n3. 'DigitalProduct' sinfini 'extends Product' qilib, 'private double fileSizeMb;' maydoni va 'super(name, price);' chaqiruvchi konstruktorini yozing.\n4. 'Main' metodida 'PhysicalProduct p1 = new PhysicalProduct(\"Kitob\", 50000.0, 0.6);' va 'DigitalProduct p2 = new DigitalProduct(\"E-Kitob\", 25000.0, 15.5);' obyektlarini yarating.\n5. Har ikkala mahsulot ma'lumotlarini konsolga chop eting.",
      "en": "📖 Real-World Scenario\nWIUT Seminar 3: Product superclass forks into PhysicalProduct(weightKg) and DigitalProduct(fileSizeMb).\n\n📋 Steps\n1. Declare Product, PhysicalProduct extends Product, DigitalProduct extends Product.\n2. In Main, instantiate both and print their attributes.",
      "ru": "📖 Контекст\nСеминар 3: Product разделяется на PhysicalProduct(weightKg) и DigitalProduct(fileSizeMb).\n\n📋 Шаги\n1. Создайте Product, PhysicalProduct и DigitalProduct.\n2. В main создайте оба объекта и выведите их данные."
    },
    "requirements": {
      "classes": [
        "Product",
        "PhysicalProduct",
        "DigitalProduct",
        "Main"
      ],
      "fields": [
        {
          "name": "name",
          "type": "String"
        },
        {
          "name": "price",
          "type": "double"
        },
        {
          "name": "weightKg",
          "type": "double"
        },
        {
          "name": "fileSizeMb",
          "type": "double"
        }
      ],
      "privateFields": [
        "name",
        "price",
        "weightKg",
        "fileSizeMb"
      ],
      "methods": [
        "getName",
        "getPrice",
        "getWeightKg",
        "getFileSizeMb"
      ],
      "constructors": [
        "Product",
        "PhysicalProduct",
        "DigitalProduct"
      ],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class Product {\n    \n}\n\nclass PhysicalProduct extends Product {\n    \n}\n\nclass DigitalProduct extends Product {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Product {\n    private String name;\n    private double price;\n\n    public Product(String name, double price) {\n        this.name = name;\n        this.price = price;\n    }\n\n    public String getName() {\n        return name;\n    }\n\n    public double getPrice() {\n        return price;\n    }\n}\n\nclass PhysicalProduct extends Product {\n    private double weightKg;\n\n    public PhysicalProduct(String name, double price, double weightKg) {\n        super(name, price);\n        this.weightKg = weightKg;\n    }\n\n    public double getWeightKg() {\n        return weightKg;\n    }\n}\n\nclass DigitalProduct extends Product {\n    private double fileSizeMb;\n\n    public DigitalProduct(String name, double price, double fileSizeMb) {\n        super(name, price);\n        this.fileSizeMb = fileSizeMb;\n    }\n\n    public double getFileSizeMb() {\n        return fileSizeMb;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PhysicalProduct p1 = new PhysicalProduct(\"Kitob\", 50000.0, 0.6);\n        DigitalProduct p2 = new DigitalProduct(\"E-Kitob\", 25000.0, 15.5);\n        System.out.println(\"Jismoniy: \" + p1.getName() + \" | \" + p1.getPrice() + \" | \" + p1.getWeightKg() + \"kg\");\n        System.out.println(\"Raqamli: \" + p2.getName() + \" | \" + p2.getPrice() + \" | \" + p2.getFileSizeMb() + \"MB\");\n    }\n}",
    "detailedSolution": {
      "uz": "Bitta ota sinf Product dan ikkita turli biznes talabidagi avlod sinflari (PhysicalProduct va DigitalProduct) meros oladi.",
      "en": "Product acts as a common superclass for both PhysicalProduct and DigitalProduct.",
      "ru": "Product выступает общим суперклассом для PhysicalProduct и DigitalProduct."
    }
  },
  {
    "id": 38,
    "tier": 2,
    "tierName": "2-Bosqich: Ierarxik Merosxo'rlik (Hierarchical)",
    "sector": "31-60",
    "title": {
      "uz": "38. Payme — BankCard, Uzcard va Humo Ierarxiyasi",
      "en": "38. Payme — BankCard, Uzcard, and Humo Hierarchy",
      "ru": "38. Payme — иерархия BankCard, Uzcard и Humo"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nPayme tizimida 'BankCard(pan, balance)' ota sinfidan ikkita to'lov tizimi meros oladi: 'Uzcard(pan, balance, bankName)' va 'Humo(pan, balance, isNfcEnabled)'.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'BankCard' sinfini e'lon qiling: 'private String pan;' va 'private double balance;'. Konstruktor va getterlar yozing.\n2. 'Uzcard' sinfini 'extends BankCard' qiling va unga 'private String bankName;' qo'shing. 'super(pan, balance);' ni chaqiring.\n3. 'Humo' sinfini 'extends BankCard' qiling va unga 'private boolean isNfcEnabled;' qo'shing. 'super(pan, balance);' ni chaqiring.\n4. 'Main' metodida bittadan Uzcard va Humo ob'yektlarini yarating.\n5. Ikkala kartaning raqami va xususiy parametrlarini konsolga chop eting.",
      "en": "📖 Real-World Scenario\nBankCard forks into Uzcard(bankName) and Humo(isNfcEnabled).\n\n📋 Steps\n1. Declare BankCard, Uzcard, and Humo.\n2. In Main, instantiate both and print their details.",
      "ru": "📖 Контекст\nBankCard разветвляется на Uzcard(bankName) и Humo(isNfcEnabled).\n\n📋 Шаги\n1. Создайте BankCard, Uzcard и Humo.\n2. В main выведите данные обеих карт."
    },
    "requirements": {
      "classes": [
        "BankCard",
        "Uzcard",
        "Humo",
        "Main"
      ],
      "fields": [
        {
          "name": "pan",
          "type": "String"
        },
        {
          "name": "balance",
          "type": "double"
        },
        {
          "name": "bankName",
          "type": "String"
        },
        {
          "name": "isNfcEnabled",
          "type": "boolean"
        }
      ],
      "privateFields": [
        "pan",
        "balance",
        "bankName",
        "isNfcEnabled"
      ],
      "methods": [
        "getPan",
        "getBalance",
        "getBankName",
        "isNfcEnabled"
      ],
      "constructors": [
        "BankCard",
        "Uzcard",
        "Humo"
      ],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class BankCard {\n    \n}\n\nclass Uzcard extends BankCard {\n    \n}\n\nclass Humo extends BankCard {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class BankCard {\n    private String pan;\n    private double balance;\n\n    public BankCard(String pan, double balance) {\n        this.pan = pan;\n        this.balance = balance;\n    }\n\n    public String getPan() {\n        return pan;\n    }\n\n    public double getBalance() {\n        return balance;\n    }\n}\n\nclass Uzcard extends BankCard {\n    private String bankName;\n\n    public Uzcard(String pan, double balance, String bankName) {\n        super(pan, balance);\n        this.bankName = bankName;\n    }\n\n    public String getBankName() {\n        return bankName;\n    }\n}\n\nclass Humo extends BankCard {\n    private boolean isNfcEnabled;\n\n    public Humo(String pan, double balance, boolean isNfcEnabled) {\n        super(pan, balance);\n        this.isNfcEnabled = isNfcEnabled;\n    }\n\n    public boolean isNfcEnabled() {\n        return isNfcEnabled;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Uzcard u = new Uzcard(\"86001234\", 150000.0, \"Kapitalbank\");\n        Humo h = new Humo(\"98605678\", 230000.0, true);\n        System.out.println(\"Uzcard: \" + u.getPan() + \" | Bank: \" + u.getBankName());\n        System.out.println(\"Humo: \" + h.getPan() + \" | NFC: \" + h.isNfcEnabled());\n    }\n}",
    "detailedSolution": {
      "uz": "Uzcard va Humo sinflari BankCard dagi pan va balance maydonlarini umumiy meros qilib oladi.",
      "en": "Uzcard and Humo inherit common card properties from BankCard while specifying system-specific attributes.",
      "ru": "Uzcard и Humo наследуют общие свойства карты из BankCard, добавляя специфические атрибуты."
    }
  },
  {
    "id": 39,
    "tier": 2,
    "tierName": "2-Bosqich: Ierarxik Merosxo'rlik (Hierarchical)",
    "sector": "31-60",
    "title": {
      "uz": "39. Yandex Go — Ride, EconomyRide va ComfortPlusRide Ierarxiyasi",
      "en": "39. Yandex Go — Ride, EconomyRide, and ComfortPlusRide Hierarchy",
      "ru": "39. Yandex Go — иерархия Ride, EconomyRide и ComfortPlusRide"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nYandex Go da 'Ride(distanceKm)' ota sinfidan ikkita tarif sinfi meros oladi: 'EconomyRide(distanceKm, hasLuggage)' va 'ComfortPlusRide(distanceKm, isAirConditioned)'.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Ride' sinfini e'lon qiling: 'private double distanceKm;' maydoni, konstruktori va getteri.\n2. 'EconomyRide' sinfini 'extends Ride' qilib, 'private boolean hasLuggage;' maydoni va 'super(distanceKm);' konstruktorini yozing.\n3. 'ComfortPlusRide' sinfini 'extends Ride' qilib, 'private boolean isAirConditioned;' maydoni va 'super(distanceKm);' konstruktorini yozing.\n4. 'Main' metodida bittadan EconomyRide va ComfortPlusRide obyektlarini yarating.\n5. Ikkala safar masofasi va qulayliklarini konsolga chop eting.",
      "en": "📖 Real-World Scenario\nRide forks into EconomyRide and ComfortPlusRide.\n\n📋 Steps\n1. Declare Ride, EconomyRide, ComfortPlusRide.\n2. In Main, instantiate both and print their attributes.",
      "ru": "📖 Контекст\nRide разветвляется на EconomyRide и ComfortPlusRide.\n\n📋 Шаги\n1. Создайте классы Ride, EconomyRide, ComfortPlusRide.\n2. В main выведите информацию о поездках."
    },
    "requirements": {
      "classes": [
        "Ride",
        "EconomyRide",
        "ComfortPlusRide",
        "Main"
      ],
      "fields": [
        {
          "name": "distanceKm",
          "type": "double"
        },
        {
          "name": "hasLuggage",
          "type": "boolean"
        },
        {
          "name": "isAirConditioned",
          "type": "boolean"
        }
      ],
      "privateFields": [
        "distanceKm",
        "hasLuggage",
        "isAirConditioned"
      ],
      "methods": [
        "getDistanceKm",
        "isHasLuggage",
        "isAirConditioned"
      ],
      "constructors": [
        "Ride",
        "EconomyRide",
        "ComfortPlusRide"
      ],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class Ride {\n    \n}\n\nclass EconomyRide extends Ride {\n    \n}\n\nclass ComfortPlusRide extends Ride {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Ride {\n    private double distanceKm;\n\n    public Ride(double distanceKm) {\n        this.distanceKm = distanceKm;\n    }\n\n    public double getDistanceKm() {\n        return distanceKm;\n    }\n}\n\nclass EconomyRide extends Ride {\n    private boolean hasLuggage;\n\n    public EconomyRide(double distanceKm, boolean hasLuggage) {\n        super(distanceKm);\n        this.hasLuggage = hasLuggage;\n    }\n\n    public boolean isHasLuggage() {\n        return hasLuggage;\n    }\n}\n\nclass ComfortPlusRide extends Ride {\n    private boolean isAirConditioned;\n\n    public ComfortPlusRide(double distanceKm, boolean isAirConditioned) {\n        super(distanceKm);\n        this.isAirConditioned = isAirConditioned;\n    }\n\n    public boolean isAirConditioned() {\n        return isAirConditioned;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        EconomyRide er = new EconomyRide(12.5, true);\n        ComfortPlusRide cr = new ComfortPlusRide(18.0, true);\n        System.out.println(\"Ekonom: \" + er.getDistanceKm() + \" km | Bagaj: \" + er.isHasLuggage());\n        System.out.println(\"Komfort+: \" + cr.getDistanceKm() + \" km | Konditsioner: \" + cr.isAirConditioned());\n    }\n}",
    "detailedSolution": {
      "uz": "EconomyRide va ComfortPlusRide bitta ota sinf Ride masofasidan foydalangan holda o'z xususiy parametrlariga ega bo'ladi.",
      "en": "EconomyRide and ComfortPlusRide branch from Ride, sharing distanceKm while defining unique amenities.",
      "ru": "EconomyRide и ComfortPlusRide наследуют distanceKm из Ride, добавляя уникальные удобства."
    }
  },
  {
    "id": 40,
    "tier": 2,
    "tierName": "2-Bosqich: Ierarxik Sinflarda Farqli Hisoblash",
    "sector": "31-60",
    "title": {
      "uz": "40. Uzum — Product.getDeliveryFee() Ierarxik Hisob-Kitobi",
      "en": "40. Uzum — Hierarchical getDeliveryFee() Implementation",
      "ru": "40. Uzum — иерархический расчет getDeliveryFee()"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nUzum Marketda 'Product' sinfida 'getDeliveryFee()' metodi mavjud. 'PhysicalProduct' uni '@Override' qilib vazn bo'yicha ('weightKg * 15000.0') yetkazish to'lovini hisoblaydi, 'DigitalProduct' esa '@Override' qilib har doim 0.0 qaytaradi (chunki yuklanadigan fayl yetkazilmaydi!).\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Product' sinfini e'lon qiling: 'private String name;' maydoni, konstruktori va 'public double getDeliveryFee()' metodi (baza 10000.0 qaytarsin).\n2. 'PhysicalProduct' sinfini 'extends Product' qilib, 'private double weightKg;' qo'shing. 'getDeliveryFee()' ni '@Override' qilib 'weightKg * 15000.0' qaytarsin.\n3. 'DigitalProduct' sinfini 'extends Product' qilib, 'getDeliveryFee()' ni '@Override' qilib '0.0' qaytarsin.\n4. 'Main' metodida 'PhysicalProduct p1 = new PhysicalProduct(\"Noutbuk\", 2.5);' va 'DigitalProduct p2 = new DigitalProduct(\"Antivirus\");' obyektlarini yarating.\n5. Ikkala mahsulotning yetkazish to'lovlarini konsolga chop eting.",
      "en": "📖 Real-World Scenario\nProduct defines getDeliveryFee(). PhysicalProduct overrides it with weightKg * 15000.0. DigitalProduct overrides it returning 0.0.\n\n📋 Steps\n1. Declare Product with default getDeliveryFee returning 10000.0.\n2. Override getDeliveryFee in PhysicalProduct and DigitalProduct.\n3. In Main, instantiate both and print their delivery fees.",
      "ru": "📖 Контекст\nPhysicalProduct переопределяет getDeliveryFee() по весу, а DigitalProduct возвращает 0.0.\n\n📋 Шаги\n1. Создайте Product, PhysicalProduct, DigitalProduct.\n2. В main выведите стоимость доставки для обоих товаров."
    },
    "requirements": {
      "classes": [
        "Product",
        "PhysicalProduct",
        "DigitalProduct",
        "Main"
      ],
      "methods": [
        "getDeliveryFee"
      ],
      "keywords": [
        "extends",
        "super",
        "@Override"
      ]
    },
    "starterCode": "class Product {\n    \n}\n\nclass PhysicalProduct extends Product {\n    \n}\n\nclass DigitalProduct extends Product {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Product {\n    private String name;\n\n    public Product(String name) {\n        this.name = name;\n    }\n\n    public String getName() {\n        return name;\n    }\n\n    public double getDeliveryFee() {\n        return 10000.0;\n    }\n}\n\nclass PhysicalProduct extends Product {\n    private double weightKg;\n\n    public PhysicalProduct(String name, double weightKg) {\n        super(name);\n        this.weightKg = weightKg;\n    }\n\n    @Override\n    public double getDeliveryFee() {\n        return weightKg * 15000.0;\n    }\n}\n\nclass DigitalProduct extends Product {\n    public DigitalProduct(String name) {\n        super(name);\n    }\n\n    @Override\n    public double getDeliveryFee() {\n        return 0.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PhysicalProduct p1 = new PhysicalProduct(\"Noutbuk\", 2.5);\n        DigitalProduct p2 = new DigitalProduct(\"Antivirus\");\n        System.out.println(\"Jismoniy yetkazish: \" + p1.getDeliveryFee());\n        System.out.println(\"Raqamli yetkazish: \" + p2.getDeliveryFee());\n    }\n}",
    "detailedSolution": {
      "uz": "Bir xil metod nomi (getDeliveryFee) har xil avlod sinflarida o'z biznes mantiqiga ko'ra turlicha natija beradi.",
      "en": "Sibling subclasses provide distinct business implementations for the same method signature.",
      "ru": "Родственные подклассы реализуют метод getDeliveryFee() с совершенно разной бизнес-логикой."
    }
  },
  {
    "id": 41,
    "tier": 2,
    "tierName": "2-Bosqich: Ierarxik Sinflarda Farqli Hisoblash",
    "sector": "31-60",
    "title": {
      "uz": "41. Payme — BankCard.getTransferFee() Ierarxik Komissiya",
      "en": "41. Payme — Hierarchical getTransferFee() Commission",
      "ru": "41. Payme — иерархический расчет комиссии getTransferFee()"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nPayme ilovasida 'BankCard' ota sinfida 'getTransferFee(double amount)' metodi 1% komissiya ('amount * 0.01') qaytaradi. 'Uzcard' uni '@Override' qilib 0.5% ('amount * 0.005'), 'Humo' esa '@Override' qilib 0.3% ('amount * 0.003') hisoblaydi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'BankCard' sinfida 'public double getTransferFee(double amount)' metodini yozing: 'return amount * 0.01;'.\n2. 'Uzcard' sinfini 'extends BankCard' qilib oching va 'getTransferFee' ni '@Override' qiling: 'return amount * 0.005;'.\n3. 'Humo' sinfini 'extends BankCard' qilib oching va 'getTransferFee' ni '@Override' qiling: 'return amount * 0.003;'.\n4. 'Main' metodida bittadan Uzcard va Humo ob'yektlarini yarating.\n5. 1000000.0 so'm o'tkazma uchun ikkala karta komissiyasini konsolga chiqaring.",
      "en": "📖 Real-World Scenario\nBankCard defines default fee 1%. Uzcard overrides to 0.5%, Humo overrides to 0.3%.\n\n📋 Steps\n1. Declare BankCard, Uzcard, Humo.\n2. In Main, test getTransferFee(1000000.0) on both.",
      "ru": "📖 Контекст\nUzcard берет 0.5%, Humo берет 0.3% комиссии.\n\n📋 Шаги\n1. Создайте BankCard, Uzcard, Humo.\n2. В main выведите комиссию для 1000000.0."
    },
    "requirements": {
      "classes": [
        "BankCard",
        "Uzcard",
        "Humo",
        "Main"
      ],
      "methods": [
        "getTransferFee"
      ],
      "keywords": [
        "extends",
        "@Override"
      ]
    },
    "starterCode": "class BankCard {\n    \n}\n\nclass Uzcard extends BankCard {\n    \n}\n\nclass Humo extends BankCard {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class BankCard {\n    public double getTransferFee(double amount) {\n        return amount * 0.01;\n    }\n}\n\nclass Uzcard extends BankCard {\n    @Override\n    public double getTransferFee(double amount) {\n        return amount * 0.005;\n    }\n}\n\nclass Humo extends BankCard {\n    @Override\n    public double getTransferFee(double amount) {\n        return amount * 0.003;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Uzcard u = new Uzcard();\n        Humo h = new Humo();\n        System.out.println(\"Uzcard komissiya: \" + u.getTransferFee(1000000.0));\n        System.out.println(\"Humo komissiya: \" + h.getTransferFee(1000000.0));\n    }\n}",
    "detailedSolution": {
      "uz": "Uzcard va Humo sinflari getTransferFee metodini o'z tariflariga moslab alohida qayta aniqlaydi.",
      "en": "Uzcard and Humo customize fee calculation independently via method overriding.",
      "ru": "Uzcard и Humo независимо настраивают расчет комиссии через переопределение метода."
    }
  },
  {
    "id": 42,
    "tier": 2,
    "tierName": "2-Bosqich: Ierarxik Sinflarda Farqli Hisoblash",
    "sector": "31-60",
    "title": {
      "uz": "42. Yandex Go — Ride.calculateFare() Ierarxik Tariflar",
      "en": "42. Yandex Go — Hierarchical calculateFare() Pricing",
      "ru": "42. Yandex Go — иерархический расчет calculateFare()"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nYandex Go da 'Ride(double distanceKm)' ota sinfi masofani saqlaydi. 'EconomyRide' tarifni 'distanceKm * 2000.0' qilib hisoblaydi. 'ComfortPlusRide' esa uni '@Override' qilib '5000.0 + (distanceKm * 3500.0)' formulasi bo'yicha hisoblaydi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Ride' sinfida 'private double distanceKm;' maydoni, konstruktori, getteri va 'public double calculateFare()' metodi bo'lsin.\n2. 'EconomyRide' 'extends Ride' qilib ochilsin va 'calculateFare()' da 'getDistanceKm() * 2000.0' qaytarsin.\n3. 'ComfortPlusRide' 'extends Ride' qilib ochilsin va 'calculateFare()' da '5000.0 + (getDistanceKm() * 3500.0)' qaytarsin.\n4. 'Main' metodida 10.0 km masofa bilan bittadan EconomyRide va ComfortPlusRide ob'yektlarini tuzing.\n5. Ikkala tarif bo'yicha narxlarni konsolga chop eting.",
      "en": "📖 Real-World Scenario\nEconomyRide computes distanceKm * 2000.0. ComfortPlusRide computes 5000.0 + distanceKm * 3500.0.\n\n📋 Steps\n1. Declare Ride, EconomyRide, ComfortPlusRide.\n2. In Main, instantiate with 10.0 km and print fares.",
      "ru": "📖 Контекст\nEconomyRide считает distanceKm * 2000.0. ComfortPlusRide считает 5000.0 + distanceKm * 3500.0.\n\n📋 Шаги\n1. Создайте классы Ride, EconomyRide, ComfortPlusRide.\n2. В main выведите стоимость для 10.0 км."
    },
    "requirements": {
      "classes": [
        "Ride",
        "EconomyRide",
        "ComfortPlusRide",
        "Main"
      ],
      "fields": [
        {
          "name": "distanceKm",
          "type": "double"
        }
      ],
      "privateFields": [
        "distanceKm"
      ],
      "methods": [
        "getDistanceKm",
        "calculateFare"
      ],
      "constructors": [
        "Ride",
        "EconomyRide",
        "ComfortPlusRide"
      ],
      "keywords": [
        "extends",
        "super",
        "@Override"
      ]
    },
    "starterCode": "class Ride {\n    \n}\n\nclass EconomyRide extends Ride {\n    \n}\n\nclass ComfortPlusRide extends Ride {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Ride {\n    private double distanceKm;\n\n    public Ride(double distanceKm) {\n        this.distanceKm = distanceKm;\n    }\n\n    public double getDistanceKm() {\n        return distanceKm;\n    }\n\n    public double calculateFare() {\n        return distanceKm * 1500.0;\n    }\n}\n\nclass EconomyRide extends Ride {\n    public EconomyRide(double distanceKm) {\n        super(distanceKm);\n    }\n\n    @Override\n    public double calculateFare() {\n        return getDistanceKm() * 2000.0;\n    }\n}\n\nclass ComfortPlusRide extends Ride {\n    public ComfortPlusRide(double distanceKm) {\n        super(distanceKm);\n    }\n\n    @Override\n    public double calculateFare() {\n        return 5000.0 + (getDistanceKm() * 3500.0);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        EconomyRide er = new EconomyRide(10.0);\n        ComfortPlusRide cr = new ComfortPlusRide(10.0);\n        System.out.println(\"Ekonom narxi: \" + er.calculateFare());\n        System.out.println(\"Komfort+ narxi: \" + cr.calculateFare());\n    }\n}",
    "detailedSolution": {
      "uz": "EconomyRide va ComfortPlusRide avlod sinflari calculateFare metodini alohida override qilib, tarif formulasini belgilaydi.",
      "en": "Subclasses apply their own pricing algorithms by overriding calculateFare.",
      "ru": "Подклассы переопределяют calculateFare, реализуя собственные алгоритмы расчета стоимости."
    }
  },
  {
    "id": 43,
    "tier": 2,
    "tierName": "2-Bosqich: Ierarxik Maydonlar Ajralishi",
    "sector": "31-60",
    "title": {
      "uz": "43. Asaxiy — Content, PaperBook va AudioBook Maydonlari",
      "en": "43. Asaxiy — Content, PaperBook, and AudioBook Fields",
      "ru": "43. Asaxiy — поля Content, PaperBook и AudioBook"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nAsaxiy kutubxonasida 'Content(title, author)' umumiy maydonlarga ega. Qog'oz kitob 'PaperBook' qo'shimcha sahifalar sonini ('pageCount'), audio kitob 'AudioBook' esa davomiylik daqiqalarini ('durationMinutes') saqlaydi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Content' sinfini e'lon qiling: 'private String title;' va 'private String author;'. Konstruktor va getterlar yozing.\n2. 'PaperBook' sinfini 'extends Content' qilib, 'private int pageCount;' maydonini qo'shing. 'super(title, author);' konstruktorini yozing.\n3. 'AudioBook' sinfini 'extends Content' qilib, 'private int durationMinutes;' maydonini qo'shing. 'super(title, author);' konstruktorini yozing.\n4. 'Main' metodida bittadan PaperBook va AudioBook obyektlarini yarating.\n5. Ikkala kitobning umumiy va xususiy ma'lumotlarini konsolga chop eting.",
      "en": "📖 Real-World Scenario\nContent holds title and author. PaperBook adds pageCount. AudioBook adds durationMinutes.\n\n📋 Steps\n1. Declare Content, PaperBook, AudioBook.\n2. In Main, instantiate both and print their state.",
      "ru": "📖 Контекст\nContent хранит title и author. PaperBook добавляет pageCount. AudioBook добавляет durationMinutes.\n\n📋 Шаги\n1. Создайте классы Content, PaperBook, AudioBook.\n2. В main выведите информацию об обеих книгах."
    },
    "requirements": {
      "classes": [
        "Content",
        "PaperBook",
        "AudioBook",
        "Main"
      ],
      "fields": [
        {
          "name": "title",
          "type": "String"
        },
        {
          "name": "author",
          "type": "String"
        },
        {
          "name": "pageCount",
          "type": "int"
        },
        {
          "name": "durationMinutes",
          "type": "int"
        }
      ],
      "privateFields": [
        "title",
        "author",
        "pageCount",
        "durationMinutes"
      ],
      "methods": [
        "getTitle",
        "getAuthor",
        "getPageCount",
        "getDurationMinutes"
      ],
      "constructors": [
        "Content",
        "PaperBook",
        "AudioBook"
      ],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class Content {\n    \n}\n\nclass PaperBook extends Content {\n    \n}\n\nclass AudioBook extends Content {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Content {\n    private String title;\n    private String author;\n\n    public Content(String title, String author) {\n        this.title = title;\n        this.author = author;\n    }\n\n    public String getTitle() {\n        return title;\n    }\n\n    public String getAuthor() {\n        return author;\n    }\n}\n\nclass PaperBook extends Content {\n    private int pageCount;\n\n    public PaperBook(String title, String author, int pageCount) {\n        super(title, author);\n        this.pageCount = pageCount;\n    }\n\n    public int getPageCount() {\n        return pageCount;\n    }\n}\n\nclass AudioBook extends Content {\n    private int durationMinutes;\n\n    public AudioBook(String title, String author, int durationMinutes) {\n        super(title, author);\n        this.durationMinutes = durationMinutes;\n    }\n\n    public int getDurationMinutes() {\n        return durationMinutes;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaperBook pb = new PaperBook(\"Ufq\", \"Said Ahmad\", 480);\n        AudioBook ab = new AudioBook(\"Dunyoning Ishlari\", \"O'tkir Hoshimov\", 360);\n        System.out.println(\"Qog'oz: \" + pb.getTitle() + \" | Sahifalar: \" + pb.getPageCount());\n        System.out.println(\"Audio: \" + ab.getTitle() + \" | Davomiylik: \" + ab.getDurationMinutes() + \" min\");\n    }\n}",
    "detailedSolution": {
      "uz": "PaperBook va AudioBook umumiy mualliflik ma'lumotlarini Content dan olib, formatga xos maydonlarni o'zlarida saqlaydi.",
      "en": "PaperBook and AudioBook inherit core metadata while specializing storage for their medium.",
      "ru": "PaperBook и AudioBook наследуют метаданные из Content, сохраняя специфические для формата поля."
    }
  },
  {
    "id": 44,
    "tier": 2,
    "tierName": "2-Bosqich: Ierarxik Maydonlar Ajralishi",
    "sector": "31-60",
    "title": {
      "uz": "44. Aloqabank — Loan, Mortgage va CarLoan Maydonlari",
      "en": "44. Aloqabank — Loan, Mortgage, and CarLoan Fields",
      "ru": "44. Алокабанк — поля Loan, Mortgage и CarLoan"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nAloqabankda barcha kreditlar 'Loan(principal, annualRate)' ota sinfidan meros oladi. Ipoteka 'Mortgage' ko'chmas mulk manzilini ('propertyAddress'), avtokredit 'CarLoan' esa mashina davlat raqamini ('carPlate') saqlaydi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Loan' sinfini e'lon qiling: 'private double principal;' va 'private double annualRate;'. Konstruktori va getterlarini yozing.\n2. 'Mortgage' sinfini 'extends Loan' qilib, 'private String propertyAddress;' qo'shing. 'super(principal, annualRate);' ni chaqiring.\n3. 'CarLoan' sinfini 'extends Loan' qilib, 'private String carPlate;' qo'shing. 'super(principal, annualRate);' ni chaqiring.\n4. 'Main' metodida bittadan Mortgage va CarLoan ob'yektlarini yarating.\n5. Ikkala kredit summasi va xususiy ma'lumotlarini konsolga chop eting.",
      "en": "📖 Real-World Scenario\nLoan holds principal and annualRate. Mortgage adds propertyAddress. CarLoan adds carPlate.\n\n📋 Steps\n1. Declare Loan, Mortgage, CarLoan.\n2. In Main, instantiate both and print.",
      "ru": "📖 Контекст\nLoan хранит principal и annualRate. Mortgage добавляет propertyAddress. CarLoan добавляет carPlate.\n\n📋 Шаги\n1. Создайте Loan, Mortgage, CarLoan.\n2. В main выведите информацию по обоим кредитам."
    },
    "requirements": {
      "classes": [
        "Loan",
        "Mortgage",
        "CarLoan",
        "Main"
      ],
      "fields": [
        {
          "name": "principal",
          "type": "double"
        },
        {
          "name": "annualRate",
          "type": "double"
        },
        {
          "name": "propertyAddress",
          "type": "String"
        },
        {
          "name": "carPlate",
          "type": "String"
        }
      ],
      "privateFields": [
        "principal",
        "annualRate",
        "propertyAddress",
        "carPlate"
      ],
      "methods": [
        "getPrincipal",
        "getAnnualRate",
        "getPropertyAddress",
        "getCarPlate"
      ],
      "constructors": [
        "Loan",
        "Mortgage",
        "CarLoan"
      ],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class Loan {\n    \n}\n\nclass Mortgage extends Loan {\n    \n}\n\nclass CarLoan extends Loan {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Loan {\n    private double principal;\n    private double annualRate;\n\n    public Loan(double principal, double annualRate) {\n        this.principal = principal;\n        this.annualRate = annualRate;\n    }\n\n    public double getPrincipal() {\n        return principal;\n    }\n\n    public double getAnnualRate() {\n        return annualRate;\n    }\n}\n\nclass Mortgage extends Loan {\n    private String propertyAddress;\n\n    public Mortgage(double principal, double annualRate, String propertyAddress) {\n        super(principal, annualRate);\n        this.propertyAddress = propertyAddress;\n    }\n\n    public String getPropertyAddress() {\n        return propertyAddress;\n    }\n}\n\nclass CarLoan extends Loan {\n    private String carPlate;\n\n    public CarLoan(double principal, double annualRate, String carPlate) {\n        super(principal, annualRate);\n        this.carPlate = carPlate;\n    }\n\n    public String getCarPlate() {\n        return carPlate;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Mortgage m = new Mortgage(400000000.0, 18.0, \"Toshkent, Chilonzor 9\");\n        CarLoan cl = new CarLoan(120000000.0, 22.0, \"01B123BB\");\n        System.out.println(\"Ipoteka summasi: \" + m.getPrincipal() + \" | Manzil: \" + m.getPropertyAddress());\n        System.out.println(\"Avtokredit summasi: \" + cl.getPrincipal() + \" | Raqam: \" + cl.getCarPlate());\n    }\n}",
    "detailedSolution": {
      "uz": "Mortgage va CarLoan kredit shartlarini ota sinfdan olib, ta'minot ob'yekti parametrlarini alohida saqlaydi.",
      "en": "Mortgage and CarLoan extend base financing terms with collateral-specific data.",
      "ru": "Mortgage и CarLoan расширяют финансовые условия данными об объекте залога."
    }
  },
  {
    "id": 45,
    "tier": 2,
    "tierName": "2-Bosqich: Ierarxik Maydonlar Ajralishi",
    "sector": "31-60",
    "title": {
      "uz": "45. Uztelecom — SimCard, VoiceSim va DataSim Maydonlari",
      "en": "45. Uztelecom — SimCard, VoiceSim, and DataSim Fields",
      "ru": "45. Uztelecom — поля SimCard, VoiceSim и DataSim"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nUztelecom operatorida 'SimCard(phoneNumber)' umumiy telefon raqamini saqlaydi. Ovozli SIM karta 'VoiceSim' tekin daqiqalarni ('freeMinutes'), internet SIM karta 'DataSim' esa internet-trafik hajmini ('dataTrafficGb') saqlaydi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'SimCard' sinfini e'lon qiling: 'private String phoneNumber;' maydoni, konstruktori va getteri.\n2. 'VoiceSim' sinfini 'extends SimCard' qilib oching va unga 'private int freeMinutes;' qo'shing. 'super(phoneNumber);' konstruktorini yozing.\n3. 'DataSim' sinfini 'extends SimCard' qilib oching va unga 'private int dataTrafficGb;' qo'shing. 'super(phoneNumber);' konstruktorini yozing.\n4. 'Main' metodida bittadan VoiceSim va DataSim obyektlarini yarating.\n5. Ikkala SIM kartaning raqamlari va paketlarini konsolga chop eting.",
      "en": "📖 Real-World Scenario\nSimCard holds phoneNumber. VoiceSim adds freeMinutes. DataSim adds dataTrafficGb.\n\n📋 Steps\n1. Declare SimCard, VoiceSim, DataSim.\n2. In Main, instantiate both and print.",
      "ru": "📖 Контекст\nSimCard хранит phoneNumber. VoiceSim добавляет freeMinutes. DataSim добавляет dataTrafficGb.\n\n📋 Шаги\n1. Создайте классы SimCard, VoiceSim, DataSim.\n2. В main выведите информацию о номерах и пакетах."
    },
    "requirements": {
      "classes": [
        "SimCard",
        "VoiceSim",
        "DataSim",
        "Main"
      ],
      "fields": [
        {
          "name": "phoneNumber",
          "type": "String"
        },
        {
          "name": "freeMinutes",
          "type": "int"
        },
        {
          "name": "dataTrafficGb",
          "type": "int"
        }
      ],
      "privateFields": [
        "phoneNumber",
        "freeMinutes",
        "dataTrafficGb"
      ],
      "methods": [
        "getPhoneNumber",
        "getFreeMinutes",
        "getDataTrafficGb"
      ],
      "constructors": [
        "SimCard",
        "VoiceSim",
        "DataSim"
      ],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class SimCard {\n    \n}\n\nclass VoiceSim extends SimCard {\n    \n}\n\nclass DataSim extends SimCard {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class SimCard {\n    private String phoneNumber;\n\n    public SimCard(String phoneNumber) {\n        this.phoneNumber = phoneNumber;\n    }\n\n    public String getPhoneNumber() {\n        return phoneNumber;\n    }\n}\n\nclass VoiceSim extends SimCard {\n    private int freeMinutes;\n\n    public VoiceSim(String phoneNumber, int freeMinutes) {\n        super(phoneNumber);\n        this.freeMinutes = freeMinutes;\n    }\n\n    public int getFreeMinutes() {\n        return freeMinutes;\n    }\n}\n\nclass DataSim extends SimCard {\n    private int dataTrafficGb;\n\n    public DataSim(String phoneNumber, int dataTrafficGb) {\n        super(phoneNumber);\n        this.dataTrafficGb = dataTrafficGb;\n    }\n\n    public int getDataTrafficGb() {\n        return dataTrafficGb;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        VoiceSim vs = new VoiceSim(\"+998991234567\", 1000);\n        DataSim ds = new DataSim(\"+998997654321\", 50);\n        System.out.println(\"Ovozli SIM: \" + vs.getPhoneNumber() + \" | Daqiqalar: \" + vs.getFreeMinutes());\n        System.out.println(\"Internet SIM: \" + ds.getPhoneNumber() + \" | Trafik: \" + ds.getDataTrafficGb() + \" GB\");\n    }\n}",
    "detailedSolution": {
      "uz": "VoiceSim va DataSim sinflari telefon raqamini SimCard dan olib, paket turiga xos xususiyatlarni mustaqil boshqaradi.",
      "en": "VoiceSim and DataSim specialize cellular service attributes over common SimCard identity.",
      "ru": "VoiceSim и DataSim специализируют параметры связи на основе общего идентификатора SimCard."
    }
  },
  {
    "id": 46,
    "tier": 2,
    "tierName": "2-Bosqich: Kompozitsiya Asoslari (has-a)",
    "sector": "31-60",
    "title": {
      "uz": "46. Korzinka — Address va Customer Kompozitsiyasi (Seminar 2 ex6)",
      "en": "46. Korzinka — Address and Customer Composition (Seminar 2 ex6)",
      "ru": "46. Корзинка — композиция Address и Customer (Семинар 2)"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT Seminar 2 Exercise 6: \"Merosxo'rlikdan farqli o'laroq, kompozitsiya 'has-a' (ega bo'lish) munosabatidir\". Mijoz shaxs hisoblanadi, lekin mijoz manzil emas — balki 'Customer has-a Address' (Mijozning manzili bor). 'Customer' sinfiga 'private Address address;' maydonini qo'shing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Address' sinfini e'lon qiling: 'private String city;' va 'private String street;' maydonlari, konstruktori va getterlari bo'lsin.\n2. 'Customer' sinfini e'lon qiling: 'private String name;' va 'private Address address;' maydonlari bo'lsin.\n3. 'Customer(String name, Address address)' konstruktorini va getterlarini yozing.\n4. 'Main' metodida avval 'Address addr = new Address(\"Toshkent\", \"Amir Temur\");', so'ngra 'Customer c = new Customer(\"Aziz Karimov\", addr);' obyektlarini yarating.\n5. 'c.getAddress().getCity()' orqali konsolga: \"Mijoz: Aziz Karimov | Shahar: Toshkent\" deb chop eting.",
      "en": "📖 Real-World Scenario\nSeminar 2 Exercise 6: Customer has-a Address. Demonstrate composition.\n\n📋 Steps\n1. Declare Address with city and street.\n2. Declare Customer with name and private Address address.\n3. In Main, instantiate Address and pass it into Customer, then print.",
      "ru": "📖 Контекст\nСеминар 2 упр. 6: Customer has-a Address (композиция).\n\n📋 Шаги\n1. Создайте Address с city и street.\n2. Создайте Customer с полем private Address address.\n3. В main выведите: \"Mijoz: Aziz Karimov | Shahar: Toshkent\"."
    },
    "requirements": {
      "classes": [
        "Address",
        "Customer",
        "Main"
      ],
      "fields": [
        {
          "name": "city",
          "type": "String"
        },
        {
          "name": "street",
          "type": "String"
        },
        {
          "name": "name",
          "type": "String"
        },
        {
          "name": "address",
          "type": "Address"
        }
      ],
      "privateFields": [
        "city",
        "street",
        "name",
        "address"
      ],
      "methods": [
        "getCity",
        "getStreet",
        "getName",
        "getAddress"
      ],
      "constructors": [
        "Address",
        "Customer"
      ]
    },
    "starterCode": "class Address {\n    \n}\n\nclass Customer {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Address {\n    private String city;\n    private String street;\n\n    public Address(String city, String street) {\n        this.city = city;\n        this.street = street;\n    }\n\n    public String getCity() {\n        return city;\n    }\n\n    public String getStreet() {\n        return street;\n    }\n}\n\nclass Customer {\n    private String name;\n    private Address address;\n\n    public Customer(String name, Address address) {\n        this.name = name;\n        this.address = address;\n    }\n\n    public String getName() {\n        return name;\n    }\n\n    public Address getAddress() {\n        return address;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Address addr = new Address(\"Toshkent\", \"Amir Temur\");\n        Customer c = new Customer(\"Aziz Karimov\", addr);\n        System.out.println(\"Mijoz: \" + c.getName() + \" | Shahar: \" + c.getAddress().getCity());\n    }\n}",
    "detailedSolution": {
      "uz": "Customer sinfi Address sinfiga ega (has-a) bo'lib, uning metodlariga c.getAddress().getCity() orqali zanjirli murojaat qilinadi.",
      "en": "Customer contains an Address reference (has-a relationship), accessed via chained getters.",
      "ru": "Customer содержит ссылку на объект Address (отношение has-a), доступ к которому осуществляется через цепочку геттеров."
    }
  },
  {
    "id": 47,
    "tier": 2,
    "tierName": "2-Bosqich: Kompozitsiya Asoslari (has-a)",
    "sector": "31-60",
    "title": {
      "uz": "47. Uzum — Dimensions va Parcel Kompozitsiyasi",
      "en": "47. Uzum — Dimensions and Parcel Composition",
      "ru": "47. Uzum — композиция Dimensions и Parcel"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nUzum Market logistikasida jo'natma qutisi 'Parcel has-a Dimensions' (Qutining o'lchamlari bor). 'Dimensions(lengthCm, widthCm, heightCm)' alohida o'lcham sinfi hisoblanadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Dimensions' sinfini e'lon qiling: 'private double lengthCm;', 'private double widthCm;', 'private double heightCm;' maydonlari, konstruktori va getterlari bo'lsin.\n2. 'Parcel' sinfini yarating: 'private String trackingCode;' va 'private Dimensions dimensions;' maydonlari bo'lsin.\n3. 'Parcel(String trackingCode, Dimensions dimensions)' konstruktori va getterlarini yozing.\n4. 'Main' metodida 'Dimensions dim = new Dimensions(30.0, 20.0, 15.0);' va 'Parcel parcel = new Parcel(\"TRK-8821\", dim);' obyektlarini yarating.\n5. 'parcel.getDimensions().getLengthCm()' orqali konsolga: \"Posilka: TRK-8821 | Uzunlik: 30.0 sm\" deb chop eting.",
      "en": "📖 Real-World Scenario\nParcel has-a Dimensions (lengthCm, widthCm, heightCm).\n\n📋 Steps\n1. Declare Dimensions and Parcel.\n2. In Main, instantiate and print parcel.getDimensions().getLengthCm().",
      "ru": "📖 Контекст\nParcel has-a Dimensions. Композиция посылки и ее габаритов.\n\n📋 Шаги\n1. Создайте классы Dimensions и Parcel.\n2. В main выведите: \"Posilka: TRK-8821 | Uzunlik: 30.0 sm\"."
    },
    "requirements": {
      "classes": [
        "Dimensions",
        "Parcel",
        "Main"
      ],
      "fields": [
        {
          "name": "lengthCm",
          "type": "double"
        },
        {
          "name": "widthCm",
          "type": "double"
        },
        {
          "name": "heightCm",
          "type": "double"
        },
        {
          "name": "trackingCode",
          "type": "String"
        },
        {
          "name": "dimensions",
          "type": "Dimensions"
        }
      ],
      "privateFields": [
        "lengthCm",
        "widthCm",
        "heightCm",
        "trackingCode",
        "dimensions"
      ],
      "methods": [
        "getLengthCm",
        "getWidthCm",
        "getHeightCm",
        "getTrackingCode",
        "getDimensions"
      ],
      "constructors": [
        "Dimensions",
        "Parcel"
      ]
    },
    "starterCode": "class Dimensions {\n    \n}\n\nclass Parcel {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Dimensions {\n    private double lengthCm;\n    private double widthCm;\n    private double heightCm;\n\n    public Dimensions(double lengthCm, double widthCm, double heightCm) {\n        this.lengthCm = lengthCm;\n        this.widthCm = widthCm;\n        this.heightCm = heightCm;\n    }\n\n    public double getLengthCm() {\n        return lengthCm;\n    }\n\n    public double getWidthCm() {\n        return widthCm;\n    }\n\n    public double getHeightCm() {\n        return heightCm;\n    }\n}\n\nclass Parcel {\n    private String trackingCode;\n    private Dimensions dimensions;\n\n    public Parcel(String trackingCode, Dimensions dimensions) {\n        this.trackingCode = trackingCode;\n        this.dimensions = dimensions;\n    }\n\n    public String getTrackingCode() {\n        return trackingCode;\n    }\n\n    public Dimensions getDimensions() {\n        return dimensions;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Dimensions dim = new Dimensions(30.0, 20.0, 15.0);\n        Parcel parcel = new Parcel(\"TRK-8821\", dim);\n        System.out.println(\"Posilka: \" + parcel.getTrackingCode() + \" | Uzunlik: \" + parcel.getDimensions().getLengthCm() + \" sm\");\n    }\n}",
    "detailedSolution": {
      "uz": "Parcel sinfi Dimensions ob'yektini kompozitsiya orqali o'zida saqlaydi va qutining o'lchamlarini modulli boshqaradi.",
      "en": "Parcel contains a Dimensions object through composition, modularizing physical sizing.",
      "ru": "Parcel использует композицию для включения объекта Dimensions, разделяя зоны ответственности."
    }
  },
  {
    "id": 48,
    "tier": 2,
    "tierName": "2-Bosqich: Kompozitsiya Asoslari (has-a)",
    "sector": "31-60",
    "title": {
      "uz": "48. Payme — CardExpiry va BankCard Kompozitsiyasi",
      "en": "48. Payme — CardExpiry and BankCard Composition",
      "ru": "48. Payme — композиция CardExpiry и BankCard"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nBank kartasida amal qilish muddati alohida 'CardExpiry(month, year)' obyekti sifatida modellashtiriladi: 'BankCard has-a CardExpiry'.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'CardExpiry' sinfini e'lon qiling: 'private int month;' va 'private int year;' maydonlari, konstruktori va getterlari bo'lsin.\n2. 'BankCard' sinfini yarating: 'private String cardNumber;' va 'private CardExpiry expiry;' maydonlari bo'lsin.\n3. 'BankCard(String cardNumber, CardExpiry expiry)' konstruktori va getterlarini yozing.\n4. 'Main' metodida 'CardExpiry exp = new CardExpiry(12, 28);' va 'BankCard card = new BankCard(\"8600111122223333\", exp);' obyektlarini yarating.\n5. 'card.getExpiry().getMonth()' va 'card.getExpiry().getYear()' orqali konsolga: \"Karta: 8600111122223333 | Muddati: 12/28\" deb chop eting.",
      "en": "📖 Real-World Scenario\nBankCard has-a CardExpiry(month, year).\n\n📋 Steps\n1. Declare CardExpiry and BankCard.\n2. In Main, instantiate and print: \"Karta: 8600111122223333 | Muddati: 12/28\".",
      "ru": "📖 Контекст\nBankCard has-a CardExpiry(month, year).\n\n📋 Шаги\n1. Создайте CardExpiry и BankCard.\n2. В main выведите: \"Karta: 8600111122223333 | Muddati: 12/28\"."
    },
    "requirements": {
      "classes": [
        "CardExpiry",
        "BankCard",
        "Main"
      ],
      "fields": [
        {
          "name": "month",
          "type": "int"
        },
        {
          "name": "year",
          "type": "int"
        },
        {
          "name": "cardNumber",
          "type": "String"
        },
        {
          "name": "expiry",
          "type": "CardExpiry"
        }
      ],
      "privateFields": [
        "month",
        "year",
        "cardNumber",
        "expiry"
      ],
      "methods": [
        "getMonth",
        "getYear",
        "getCardNumber",
        "getExpiry"
      ],
      "constructors": [
        "CardExpiry",
        "BankCard"
      ]
    },
    "starterCode": "class CardExpiry {\n    \n}\n\nclass BankCard {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class CardExpiry {\n    private int month;\n    private int year;\n\n    public CardExpiry(int month, int year) {\n        this.month = month;\n        this.year = year;\n    }\n\n    public int getMonth() {\n        return month;\n    }\n\n    public int getYear() {\n        return year;\n    }\n}\n\nclass BankCard {\n    private String cardNumber;\n    private CardExpiry expiry;\n\n    public BankCard(String cardNumber, CardExpiry expiry) {\n        this.cardNumber = cardNumber;\n        this.expiry = expiry;\n    }\n\n    public String getCardNumber() {\n        return cardNumber;\n    }\n\n    public CardExpiry getExpiry() {\n        return expiry;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CardExpiry exp = new CardExpiry(12, 28);\n        BankCard card = new BankCard(\"8600111122223333\", exp);\n        System.out.println(\"Karta: \" + card.getCardNumber() + \" | Muddati: \" + card.getExpiry().getMonth() + \"/\" + card.getExpiry().getYear());\n    }\n}",
    "detailedSolution": {
      "uz": "BankCard obyekti amal qilish muddatini CardExpiry sinfi orqali kompozitsiya usulida boshqaradi.",
      "en": "BankCard delegates expiry date encapsulation to CardExpiry object via composition.",
      "ru": "BankCard делегирует управление сроком действия объекту CardExpiry через композицию."
    }
  },
  {
    "id": 49,
    "tier": 2,
    "tierName": "2-Bosqich: Kompozitsiyada Zanjirli Delegatsiya",
    "sector": "31-60",
    "title": {
      "uz": "49. Korzinka — Customer.getFullAddress() Delegatsiyasi",
      "en": "49. Korzinka — Customer.getFullAddress() Delegation",
      "ru": "49. Корзинка — делегация getFullAddress() в Customer"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nKompozitsiyada 'Customer' o'zining 'getFullAddress()' metodida ichki 'Address' obyektining 'formatAddress()' metodini chaqiradi (Delegation tamoyili).\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Address' sinfini e'lon qiling: 'private String city;' va 'private String street;'. 'public String formatAddress()' metodi 'city + \", \" + street' qaytarsin.\n2. 'Customer' sinfini e'lon qiling: 'private String name;' va 'private Address address;'.\n3. 'Customer' ga 'public String getFullAddress()' metodini yozing: 'return address.formatAddress();' qaytarsin.\n4. 'Main' metodida 'Address a = new Address(\"Samarqand\", \"Registon ko'chasi\");' va 'Customer c = new Customer(\"Dilshod\", a);' obyektlarini yarating.\n5. 'c.getFullAddress()' ni chaqirib konsolga: \"Mijoz: Dilshod | Manzil: Samarqand, Registon ko'chasi\" deb chop eting.",
      "en": "📖 Real-World Scenario\nCustomer delegates getFullAddress() to Address.formatAddress().\n\n📋 Steps\n1. Declare Address with formatAddress().\n2. Declare Customer with getFullAddress() delegating to address.formatAddress().\n3. In Main, instantiate and print.",
      "ru": "📖 Контекст\nCustomer делегирует getFullAddress() вызову address.formatAddress().\n\n📋 Шаги\n1. Создайте Address и Customer.\n2. В main выведите: \"Mijoz: Dilshod | Manzil: Samarqand, Registon ko'chasi\"."
    },
    "requirements": {
      "classes": [
        "Address",
        "Customer",
        "Main"
      ],
      "methods": [
        "formatAddress",
        "getFullAddress"
      ],
      "constructors": [
        "Address",
        "Customer"
      ]
    },
    "starterCode": "class Address {\n    \n}\n\nclass Customer {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Address {\n    private String city;\n    private String street;\n\n    public Address(String city, String street) {\n        this.city = city;\n        this.street = street;\n    }\n\n    public String formatAddress() {\n        return city + \", \" + street;\n    }\n}\n\nclass Customer {\n    private String name;\n    private Address address;\n\n    public Customer(String name, Address address) {\n        this.name = name;\n        this.address = address;\n    }\n\n    public String getName() {\n        return name;\n    }\n\n    public String getFullAddress() {\n        return address.formatAddress();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Address a = new Address(\"Samarqand\", \"Registon ko'chasi\");\n        Customer c = new Customer(\"Dilshod\", a);\n        System.out.println(\"Mijoz: \" + c.getName() + \" | Manzil: \" + c.getFullAddress());\n    }\n}",
    "detailedSolution": {
      "uz": "Delegatsiya tamoyili: Customer to'g'ridan-to'g'ri manzilni formatlamaydi, bu vazifani o'zining ichki Address obyektiga topshiradi.",
      "en": "Delegation pattern: Customer delegates address string formatting to its composed Address component.",
      "ru": "Шаблон делегирования: Customer передает форматирование адреса своему компоненту Address."
    }
  },
  {
    "id": 50,
    "tier": 2,
    "tierName": "2-Bosqich: Kompozitsiyada Zanjirli Delegatsiya",
    "sector": "31-60",
    "title": {
      "uz": "50. Uzum — Dimensions.getVolume() va Parcel.calculateShipping()",
      "en": "50. Uzum — Dimensions.getVolume() and Parcel.calculateShipping()",
      "ru": "50. Uzum — расчет объема и доставки в Dimensions и Parcel"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nUzum jo'natmasida hajmiy to'lov: 'Dimensions' sinfining 'getVolume()' metodi hajm (l * w * h) hisoblaydi. 'Parcel' esa 'calculateShipping(double ratePerCm3)' metodida 'dimensions.getVolume() * ratePerCm3' orqali yetkazish narxini aniqlaydi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Dimensions' sinfida 'private double length;', 'private double width;', 'private double height;'. 'public double getVolume()' metodi 'length * width * height' qaytarsin.\n2. 'Parcel' sinfida 'private String id;' va 'private Dimensions dimensions;'.\n3. 'Parcel' ga 'public double calculateShipping(double ratePerCm3)' metodini yozing: 'return dimensions.getVolume() * ratePerCm3;'.\n4. 'Main' metodida 'Dimensions dim = new Dimensions(10.0, 10.0, 10.0);' va 'Parcel p = new Parcel(\"P-100\", dim);' obyektlarini yarating.\n5. 'p.calculateShipping(15.0)' metodini chaqirib, konsolga: \"Jo'natma: P-100 | Hajm narxi: \" + narx deb chop eting.",
      "en": "📖 Real-World Scenario\nParcel delegates volume calculation to Dimensions.getVolume() to compute shipping price.\n\n📋 Steps\n1. Declare Dimensions with getVolume().\n2. Declare Parcel with calculateShipping(ratePerCm3) delegating to dimensions.getVolume().\n3. In Main, instantiate and print result.",
      "ru": "📖 Контекст\nParcel вычисляет стоимость доставки через dimensions.getVolume() * ratePerCm3.\n\n📋 Шаги\n1. Создайте Dimensions и Parcel.\n2. В main выведите стоимость доставки."
    },
    "requirements": {
      "classes": [
        "Dimensions",
        "Parcel",
        "Main"
      ],
      "methods": [
        "getVolume",
        "calculateShipping"
      ],
      "constructors": [
        "Dimensions",
        "Parcel"
      ]
    },
    "starterCode": "class Dimensions {\n    \n}\n\nclass Parcel {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Dimensions {\n    private double length;\n    private double width;\n    private double height;\n\n    public Dimensions(double length, double width, double height) {\n        this.length = length;\n        this.width = width;\n        this.height = height;\n    }\n\n    public double getVolume() {\n        return length * width * height;\n    }\n}\n\nclass Parcel {\n    private String id;\n    private Dimensions dimensions;\n\n    public Parcel(String id, Dimensions dimensions) {\n        this.id = id;\n        this.dimensions = dimensions;\n    }\n\n    public String getId() {\n        return id;\n    }\n\n    public double calculateShipping(double ratePerCm3) {\n        return dimensions.getVolume() * ratePerCm3;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Dimensions dim = new Dimensions(10.0, 10.0, 10.0);\n        Parcel p = new Parcel(\"P-100\", dim);\n        System.out.println(\"Jo'natma: \" + p.getId() + \" | Hajm narxi: \" + p.calculateShipping(15.0));\n    }\n}",
    "detailedSolution": {
      "uz": "Parcel obyekti ichki Dimensions ob'yektining getVolume() metodiga tayanib, modulli hisob-kitobni amalga oshiradi.",
      "en": "Parcel calculates shipping fee cleanly by delegating volume computation to its Dimensions object.",
      "ru": "Parcel вычисляет стоимость доставки, делегируя расчет объема объекту Dimensions."
    }
  },
  {
    "id": 51,
    "tier": 2,
    "tierName": "2-Bosqich: Kompozitsiyada Zanjirli Delegatsiya",
    "sector": "31-60",
    "title": {
      "uz": "51. Payme — CardExpiry.isExpired() va BankCard.canTransact()",
      "en": "51. Payme — CardExpiry.isExpired() and BankCard.canTransact()",
      "ru": "51. Payme — проверка срока действия в CardExpiry и BankCard"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nPayme kartasining amal qilish muddatini tekshirish: 'CardExpiry' sinfining 'isExpired(int currentYear)' metodi agar 'year < currentYear' bo'lsa 'true' qaytaradi. 'BankCard' esa 'canTransact(int currentYear)' metodida '!expiry.isExpired(currentYear)' natijasini qaytaradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'CardExpiry' sinfida 'private int month;' va 'private int year;'. 'public boolean isExpired(int currentYear)' metodi 'return this.year < currentYear;' bo'lsin.\n2. 'BankCard' sinfida 'private String pan;' va 'private CardExpiry expiry;'.\n3. 'BankCard' ga 'public boolean canTransact(int currentYear)' metodini yozing: 'return !expiry.isExpired(currentYear);'.\n4. 'Main' metodida 'CardExpiry exp = new CardExpiry(6, 27);' va 'BankCard card = new BankCard(\"86001234\", exp);' obyektlarini yarating.\n5. 'card.canTransact(2026)' natijasini konsolga chop eting.",
      "en": "📖 Real-World Scenario\nCardExpiry checks expiration. BankCard delegates to expiry.isExpired(currentYear) in canTransact.\n\n📋 Steps\n1. Declare CardExpiry with isExpired(currentYear).\n2. Declare BankCard with canTransact(currentYear) delegating to expiry.\n3. In Main, instantiate and test with 2026.",
      "ru": "📖 Контекст\nBankCard проверяет возможность транзакции через delegating !expiry.isExpired(currentYear).\n\n📋 Шаги\n1. Создайте CardExpiry и BankCard.\n2. В main выведите результат canTransact(2026)."
    },
    "requirements": {
      "classes": [
        "CardExpiry",
        "BankCard",
        "Main"
      ],
      "methods": [
        "isExpired",
        "canTransact"
      ],
      "constructors": [
        "CardExpiry",
        "BankCard"
      ]
    },
    "starterCode": "class CardExpiry {\n    \n}\n\nclass BankCard {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class CardExpiry {\n    private int month;\n    private int year;\n\n    public CardExpiry(int month, int year) {\n        this.month = month;\n        this.year = year;\n    }\n\n    public boolean isExpired(int currentYear) {\n        return this.year < currentYear;\n    }\n}\n\nclass BankCard {\n    private String pan;\n    private CardExpiry expiry;\n\n    public BankCard(String pan, CardExpiry expiry) {\n        this.pan = pan;\n        this.expiry = expiry;\n    }\n\n    public boolean canTransact(int currentYear) {\n        return !expiry.isExpired(currentYear);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CardExpiry exp = new CardExpiry(6, 27);\n        BankCard card = new BankCard(\"86001234\", exp);\n        System.out.println(\"Tranzaksiya mumkinmi: \" + card.canTransact(2026));\n    }\n}",
    "detailedSolution": {
      "uz": "BankCard ob'yekti muddat tekshiruvini CardExpiry komponentiga delegatsiya qiladi.",
      "en": "BankCard delegates validity verification to its CardExpiry component.",
      "ru": "BankCard делегирует проверку срока действия компоненту CardExpiry."
    }
  },
  {
    "id": 52,
    "tier": 2,
    "tierName": "2-Bosqich: is-a vs has-a Tanlovi",
    "sector": "31-60",
    "title": {
      "uz": "52. Yandex Go — Car has-a Engine (Kompozitsiya Tanlovi)",
      "en": "52. Yandex Go — Car has-a Engine (Composition Choice)",
      "ru": "52. Yandex Go — Car has-a Engine (выбор композиции)"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nOOP dizayn qoidasi: 'Car is NOT an Engine' (Avtomobil dvigatel emas). Shu bois merosxo'rlik ('extends') xato arxitektura bo'ladi! To'g'ri yondashuv: 'Car has-a Engine' (Avtomobil dvigatelga ega). 'Engine(horsepower)' sinfini 'Car' tarkibiga kompozitsiya sifatida qo'shing.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Engine' sinfini yarating: 'private int horsepower;' maydoni, konstruktori va getteri.\n2. 'Car' sinfini e'lon qiling: 'private String model;' va 'private Engine engine;' maydonlari bo'lsin.\n3. 'Car(String model, Engine engine)' konstruktori va getterlarini yozing.\n4. 'Main' metodida 'Engine eng = new Engine(150);' va 'Car car = new Car(\"Chevrolet Cobalt\", eng);' obyektlarini tuzing.\n5. Konsolga: \"Mashina: Chevrolet Cobalt | Ot kuchi: 150 HP\" deb chop eting.",
      "en": "📖 Real-World Scenario\nComposition vs Inheritance: Car is-a Vehicle, but Car has-a Engine. Implement Car containing Engine.\n\n📋 Steps\n1. Declare Engine with horsepower.\n2. Declare Car with model and private Engine engine.\n3. In Main, instantiate and print model and engine horsepower.",
      "ru": "📖 Контекст\nВыбор отношения: Car has-a Engine (композиция вместо наследования).\n\n📋 Шаги\n1. Создайте Engine и Car (Car has-a Engine).\n2. В main выведите: \"Mashina: Chevrolet Cobalt | Ot kuchi: 150 HP\"."
    },
    "requirements": {
      "classes": [
        "Engine",
        "Car",
        "Main"
      ],
      "fields": [
        {
          "name": "horsepower",
          "type": "int"
        },
        {
          "name": "model",
          "type": "String"
        },
        {
          "name": "engine",
          "type": "Engine"
        }
      ],
      "privateFields": [
        "horsepower",
        "model",
        "engine"
      ],
      "methods": [
        "getHorsepower",
        "getModel",
        "getEngine"
      ],
      "constructors": [
        "Engine",
        "Car"
      ]
    },
    "starterCode": "class Engine {\n    \n}\n\nclass Car {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Engine {\n    private int horsepower;\n\n    public Engine(int horsepower) {\n        this.horsepower = horsepower;\n    }\n\n    public int getHorsepower() {\n        return horsepower;\n    }\n}\n\nclass Car {\n    private String model;\n    private Engine engine;\n\n    public Car(String model, Engine engine) {\n        this.model = model;\n        this.engine = engine;\n    }\n\n    public String getModel() {\n        return model;\n    }\n\n    public Engine getEngine() {\n        return engine;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Engine eng = new Engine(150);\n        Car car = new Car(\"Chevrolet Cobalt\", eng);\n        System.out.println(\"Mashina: \" + car.getModel() + \" | Ot kuchi: \" + car.getEngine().getHorsepower() + \" HP\");\n    }\n}",
    "detailedSolution": {
      "uz": "Car va Engine o'rtasida 'has-a' munosabati to'g'ri tanlangan, chunki mashina dvigatelning xususiy ko'rinishi emas, balki dvigatelga ega vositadir.",
      "en": "Has-a relationship is appropriately chosen because a car contains an engine rather than being a subtype of it.",
      "ru": "Отношение has-a выбрано корректно, так как автомобиль содержит двигатель, а не является его подтипом."
    }
  },
  {
    "id": 53,
    "tier": 2,
    "tierName": "2-Bosqich: is-a vs has-a Tanlovi",
    "sector": "31-60",
    "title": {
      "uz": "53. WIUT — Student has-a StudentIdCard (Kompozitsiya Tanlovi)",
      "en": "53. WIUT — Student has-a StudentIdCard (Composition Choice)",
      "ru": "53. WIUT — Student has-a StudentIdCard (выбор композиции)"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT talabalar tizimida talaba ID karta emas, balki talabaning ID kartasi bor ('Student has-a StudentIdCard'). 'StudentIdCard(idNumber, expiryYear)' sinfini 'Student' klassiga kompozitsiya sifatida bog'lang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'StudentIdCard' sinfini e'lon qiling: 'private String idNumber;' va 'private int expiryYear;'. Konstruktori va getterlarini yozing.\n2. 'Student' sinfini yarating: 'private String fullName;' va 'private StudentIdCard idCard;' maydonlari bo'lsin.\n3. 'Student(String fullName, StudentIdCard idCard)' konstruktori va getterlarini yozing.\n4. 'Main' metodida 'StudentIdCard card = new StudentIdCard(\"00023271\", 2028);' va 'Student s = new Student(\"Bobur Mirzayev\", card);' obyektlarini yarating.\n5. Konsolga: \"Talaba: Bobur Mirzayev | ID: 00023271 | Amal qilish: 2028\" deb chop eting.",
      "en": "📖 Real-World Scenario\nStudent has-a StudentIdCard. Practice composition choice over inheritance.\n\n📋 Steps\n1. Declare StudentIdCard and Student.\n2. In Main, instantiate and print student and card attributes.",
      "ru": "📖 Контекст\nStudent has-a StudentIdCard. Пример композиции вместо наследования.\n\n📋 Шаги\n1. Создайте StudentIdCard и Student.\n2. В main выведите информацию о студенте и карте."
    },
    "requirements": {
      "classes": [
        "StudentIdCard",
        "Student",
        "Main"
      ],
      "fields": [
        {
          "name": "idNumber",
          "type": "String"
        },
        {
          "name": "expiryYear",
          "type": "int"
        },
        {
          "name": "fullName",
          "type": "String"
        },
        {
          "name": "idCard",
          "type": "StudentIdCard"
        }
      ],
      "privateFields": [
        "idNumber",
        "expiryYear",
        "fullName",
        "idCard"
      ],
      "methods": [
        "getIdNumber",
        "getExpiryYear",
        "getFullName",
        "getIdCard"
      ],
      "constructors": [
        "StudentIdCard",
        "Student"
      ]
    },
    "starterCode": "class StudentIdCard {\n    \n}\n\nclass Student {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class StudentIdCard {\n    private String idNumber;\n    private int expiryYear;\n\n    public StudentIdCard(String idNumber, int expiryYear) {\n        this.idNumber = idNumber;\n        this.expiryYear = expiryYear;\n    }\n\n    public String getIdNumber() {\n        return idNumber;\n    }\n\n    public int getExpiryYear() {\n        return expiryYear;\n    }\n}\n\nclass Student {\n    private String fullName;\n    private StudentIdCard idCard;\n\n    public Student(String fullName, StudentIdCard idCard) {\n        this.fullName = fullName;\n        this.idCard = idCard;\n    }\n\n    public String getFullName() {\n        return fullName;\n    }\n\n    public StudentIdCard getIdCard() {\n        return idCard;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StudentIdCard card = new StudentIdCard(\"00023271\", 2028);\n        Student s = new Student(\"Bobur Mirzayev\", card);\n        System.out.println(\"Talaba: \" + s.getFullName() + \" | ID: \" + s.getIdCard().getIdNumber() + \" | Amal qilish: \" + s.getIdCard().getExpiryYear());\n    }\n}",
    "detailedSolution": {
      "uz": "Student va StudentIdCard o'rtasida kompozitsiya to'g'ri qo'llangan.",
      "en": "Composition accurately models Student holding a StudentIdCard.",
      "ru": "Композиция точно моделирует владение студентом студенческим билетом."
    }
  },
  {
    "id": 54,
    "tier": 2,
    "tierName": "2-Bosqich: is-a vs has-a Tanlovi",
    "sector": "31-60",
    "title": {
      "uz": "54. Bank — Account has-a AccountBalance (Kompozitsiya Tanlovi)",
      "en": "54. Bank — Account has-a AccountBalance (Composition Choice)",
      "ru": "54. Банк — Account has-a AccountBalance (выбор композиции)"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nBank hisobi va valyuta balansi: 'Account is NOT a Balance' (Hisob balans emas), balki 'Account has-a AccountBalance'. 'AccountBalance(currency, amount)' sinfini 'Account' ga kompozitsiya qilib ulang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'AccountBalance' sinfida 'private String currency;' va 'private double amount;'. Konstruktori va getterlari yozilsin.\n2. 'Account' sinfida 'private String accountNumber;' va 'private AccountBalance balance;' maydonlari bo'lsin.\n3. 'Account(String accountNumber, AccountBalance balance)' konstruktori va getterlarini yozing.\n4. 'Main' metodida 'AccountBalance bal = new AccountBalance(\"UZS\", 4500000.0);' va 'Account acc = new Account(\"20208000123\", bal);' obyektlarini yarating.\n5. Konsolga: \"Hisob: 20208000123 | Balans: 4500000.0 UZS\" deb chop eting.",
      "en": "📖 Real-World Scenario\nAccount has-a AccountBalance(currency, amount).\n\n📋 Steps\n1. Declare AccountBalance and Account.\n2. In Main, instantiate and print: \"Hisob: 20208000123 | Balans: 4500000.0 UZS\".",
      "ru": "📖 Контекст\nAccount has-a AccountBalance(currency, amount).\n\n📋 Шаги\n1. Создайте AccountBalance и Account.\n2. В main выведите: \"Hisob: 20208000123 | Balans: 4500000.0 UZS\"."
    },
    "requirements": {
      "classes": [
        "AccountBalance",
        "Account",
        "Main"
      ],
      "fields": [
        {
          "name": "currency",
          "type": "String"
        },
        {
          "name": "amount",
          "type": "double"
        },
        {
          "name": "accountNumber",
          "type": "String"
        },
        {
          "name": "balance",
          "type": "AccountBalance"
        }
      ],
      "privateFields": [
        "currency",
        "amount",
        "accountNumber",
        "balance"
      ],
      "methods": [
        "getCurrency",
        "getAmount",
        "getAccountNumber",
        "getBalance"
      ],
      "constructors": [
        "AccountBalance",
        "Account"
      ]
    },
    "starterCode": "class AccountBalance {\n    \n}\n\nclass Account {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class AccountBalance {\n    private String currency;\n    private double amount;\n\n    public AccountBalance(String currency, double amount) {\n        this.currency = currency;\n        this.amount = amount;\n    }\n\n    public String getCurrency() {\n        return currency;\n    }\n\n    public double getAmount() {\n        return amount;\n    }\n}\n\nclass Account {\n    private String accountNumber;\n    private AccountBalance balance;\n\n    public Account(String accountNumber, AccountBalance balance) {\n        this.accountNumber = accountNumber;\n        this.balance = balance;\n    }\n\n    public String getAccountNumber() {\n        return accountNumber;\n    }\n\n    public AccountBalance getBalance() {\n        return balance;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AccountBalance bal = new AccountBalance(\"UZS\", 4500000.0);\n        Account acc = new Account(\"20208000123\", bal);\n        System.out.println(\"Hisob: \" + acc.getAccountNumber() + \" | Balans: \" + acc.getBalance().getAmount() + \" \" + acc.getBalance().getCurrency());\n    }\n}",
    "detailedSolution": {
      "uz": "Account va AccountBalance o'rtasidagi kompozitsiya ko'p valyutali hisoblarni modulli boshqarish imkonini beradi.",
      "en": "Composition decouples monetary balance specifics from core account identification.",
      "ru": "Композиция разделяет параметры баланса и идентификацию счета."
    }
  },
  {
    "id": 55,
    "tier": 2,
    "tierName": "2-Bosqich: Gibrid (Merosxo'rlik + Kompozitsiya)",
    "sector": "31-60",
    "title": {
      "uz": "55. Uzum — Employee extends Person va has-a Department",
      "en": "55. Uzum — Employee extends Person and has-a Department",
      "ru": "55. Uzum — Employee extends Person и has-a Department"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nGibrid arxitektura: 'Employee is-a Person' (Merosxo'rlik), lekin ayni paytda 'Employee has-a Department' (Kompozitsiya). Bu real korxona tizimlarining standart andozasidir.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Department' sinfini yarating: 'private String deptName;' maydoni, konstruktori va getteri.\n2. 'Person' ota sinfini e'lon qiling: 'private String fullName;' maydoni, konstruktori va getteri.\n3. 'Employee' sinfini 'extends Person' qiling va unga 'private Department department;' maydonini qo'shing. 'Employee(String fullName, Department department)' konstruktorida 'super(fullName);' ni chaqiring.\n4. 'Main' metodida 'Department dept = new Department(\"Logistika\");' va 'Employee emp = new Employee(\"Sardor Rahimov\", dept);' obyektlarini yarating.\n5. Konsolga: \"Xodim: Sardor Rahimov | Bo'lim: Logistika\" deb chop eting.",
      "en": "📖 Real-World Scenario\nHybrid model: Employee extends Person and Employee has-a Department.\n\n📋 Steps\n1. Declare Department and Person.\n2. Declare Employee extends Person holding private Department department.\n3. In Main, instantiate and print.",
      "ru": "📖 Контекст\nГибридная модель: Employee extends Person и Employee has-a Department.\n\n📋 Шаги\n1. Создайте Department и Person.\n2. Создайте Employee extends Person с полем Department.\n3. В main выведите: \"Xodim: Sardor Rahimov | Bo'lim: Logistika\"."
    },
    "requirements": {
      "classes": [
        "Department",
        "Person",
        "Employee",
        "Main"
      ],
      "fields": [
        {
          "name": "deptName",
          "type": "String"
        },
        {
          "name": "fullName",
          "type": "String"
        },
        {
          "name": "department",
          "type": "Department"
        }
      ],
      "privateFields": [
        "deptName",
        "fullName",
        "department"
      ],
      "methods": [
        "getDeptName",
        "getFullName",
        "getDepartment"
      ],
      "constructors": [
        "Department",
        "Person",
        "Employee"
      ],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class Department {\n    \n}\n\nclass Person {\n    \n}\n\nclass Employee extends Person {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Department {\n    private String deptName;\n\n    public Department(String deptName) {\n        this.deptName = deptName;\n    }\n\n    public String getDeptName() {\n        return deptName;\n    }\n}\n\nclass Person {\n    private String fullName;\n\n    public Person(String fullName) {\n        this.fullName = fullName;\n    }\n\n    public String getFullName() {\n        return fullName;\n    }\n}\n\nclass Employee extends Person {\n    private Department department;\n\n    public Employee(String fullName, Department department) {\n        super(fullName);\n        this.department = department;\n    }\n\n    public Department getDepartment() {\n        return department;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Department dept = new Department(\"Logistika\");\n        Employee emp = new Employee(\"Sardor Rahimov\", dept);\n        System.out.println(\"Xodim: \" + emp.getFullName() + \" | Bo'lim: \" + emp.getDepartment().getDeptName());\n    }\n}",
    "detailedSolution": {
      "uz": "Employee bir vaqtning o'zida Person dan ismni meros oladi va Department obyektini kompozitsiya orqali o'zida saqlaydi.",
      "en": "Employee demonstrates hybrid architecture: inheriting identity from Person while composing Department association.",
      "ru": "Employee сочетает наследование (от Person) и композицию (с Department)."
    }
  },
  {
    "id": 56,
    "tier": 2,
    "tierName": "2-Bosqich: Gibrid (Merosxo'rlik + Kompozitsiya)",
    "sector": "31-60",
    "title": {
      "uz": "56. Payme — BusinessAccount extends Account va has-a CompanyProfile",
      "en": "56. Payme — BusinessAccount extends Account and has-a CompanyProfile",
      "ru": "56. Payme — BusinessAccount extends Account и has-a CompanyProfile"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nPayme korporativ tizimida: 'BusinessAccount is-a Account', va shu bilan birga 'BusinessAccount has-a CompanyProfile(companyName, tin)'.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'CompanyProfile' sinfida 'private String companyName;' va 'private String tin;'. Konstruktor va getterlar yozilsin.\n2. 'Account' ota sinfida 'private String accountNumber;'. Konstruktor va getteri bo'lsin.\n3. 'BusinessAccount' sinfini 'extends Account' qilib, 'private CompanyProfile profile;' qo'shing. 'super(accountNumber);' ni chaqiring.\n4. 'Main' metodida 'CompanyProfile cp = new CompanyProfile(\"Apex LLC\", \"987654321\");' va 'BusinessAccount ba = new BusinessAccount(\"2020800099\", cp);' obyektlarini yarating.\n5. Konsolga: \"Hisob: 2020800099 | Kompaniya: Apex LLC | STIR: 987654321\" deb chop eting.",
      "en": "📖 Real-World Scenario\nBusinessAccount extends Account and has-a CompanyProfile.\n\n📋 Steps\n1. Declare CompanyProfile and Account.\n2. Declare BusinessAccount extends Account containing CompanyProfile.\n3. In Main, instantiate and print.",
      "ru": "📖 Контекст\nBusinessAccount extends Account и has-a CompanyProfile.\n\n📋 Шаги\n1. Создайте CompanyProfile и Account.\n2. Создайте BusinessAccount extends Account с полем CompanyProfile.\n3. В main выведите информацию о счете и компании."
    },
    "requirements": {
      "classes": [
        "CompanyProfile",
        "Account",
        "BusinessAccount",
        "Main"
      ],
      "fields": [
        {
          "name": "companyName",
          "type": "String"
        },
        {
          "name": "tin",
          "type": "String"
        },
        {
          "name": "accountNumber",
          "type": "String"
        },
        {
          "name": "profile",
          "type": "CompanyProfile"
        }
      ],
      "privateFields": [
        "companyName",
        "tin",
        "accountNumber",
        "profile"
      ],
      "methods": [
        "getCompanyName",
        "getTin",
        "getAccountNumber",
        "getProfile"
      ],
      "constructors": [
        "CompanyProfile",
        "Account",
        "BusinessAccount"
      ],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class CompanyProfile {\n    \n}\n\nclass Account {\n    \n}\n\nclass BusinessAccount extends Account {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class CompanyProfile {\n    private String companyName;\n    private String tin;\n\n    public CompanyProfile(String companyName, String tin) {\n        this.companyName = companyName;\n        this.tin = tin;\n    }\n\n    public String getCompanyName() {\n        return companyName;\n    }\n\n    public String getTin() {\n        return tin;\n    }\n}\n\nclass Account {\n    private String accountNumber;\n\n    public Account(String accountNumber) {\n        this.accountNumber = accountNumber;\n    }\n\n    public String getAccountNumber() {\n        return accountNumber;\n    }\n}\n\nclass BusinessAccount extends Account {\n    private CompanyProfile profile;\n\n    public BusinessAccount(String accountNumber, CompanyProfile profile) {\n        super(accountNumber);\n        this.profile = profile;\n    }\n\n    public CompanyProfile getProfile() {\n        return profile;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CompanyProfile cp = new CompanyProfile(\"Apex LLC\", \"987654321\");\n        BusinessAccount ba = new BusinessAccount(\"2020800099\", cp);\n        System.out.println(\"Hisob: \" + ba.getAccountNumber() + \" | Kompaniya: \" + ba.getProfile().getCompanyName() + \" | STIR: \" + ba.getProfile().getTin());\n    }\n}",
    "detailedSolution": {
      "uz": "BusinessAccount ota sinf hisob raqamini meros oladi va korxona profilini kompozitsiya orqali o'z ichiga oladi.",
      "en": "BusinessAccount integrates Account banking identity with composed CompanyProfile corporate records.",
      "ru": "BusinessAccount объединяет банковский счет Account с профилем компании CompanyProfile."
    }
  },
  {
    "id": 57,
    "tier": 2,
    "tierName": "2-Bosqich: Gibrid (Merosxo'rlik + Kompozitsiya)",
    "sector": "31-60",
    "title": {
      "uz": "57. Express24 — ExpressOrder extends Order va has-a GpsLocation",
      "en": "57. Express24 — ExpressOrder extends Order and has-a GpsLocation",
      "ru": "57. Express24 — ExpressOrder extends Order и has-a GpsLocation"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nExpress24 tezkor kuryer xizmatida: 'ExpressOrder is-a Order' (buyurtma kodi bilan), va ayni vaqtda 'ExpressOrder has-a GpsLocation(latitude, longitude)' (jonli GPS koordinatalari).\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'GpsLocation' sinfida 'private double latitude;' va 'private double longitude;'. Konstruktor va getterlar bo'lsin.\n2. 'Order' ota sinfida 'private String orderId;'. Konstruktor va getteri yozilsin.\n3. 'ExpressOrder' sinfini 'extends Order' qilib, 'private GpsLocation location;' qo'shing. 'super(orderId);' chaqiring.\n4. 'Main' metodida 'GpsLocation loc = new GpsLocation(41.311081, 69.240562);' va 'ExpressOrder eo = new ExpressOrder(\"EXP-5544\", loc);' obyektlarini tuzing.\n5. Konsolga: \"Buyurtma: EXP-5544 | GPS: 41.311081, 69.240562\" deb chop eting.",
      "en": "📖 Real-World Scenario\nExpressOrder extends Order and has-a GpsLocation.\n\n📋 Steps\n1. Declare GpsLocation and Order.\n2. Declare ExpressOrder extends Order containing GpsLocation.\n3. In Main, instantiate and print.",
      "ru": "📖 Контекст\nExpressOrder extends Order и has-a GpsLocation.\n\n📋 Шаги\n1. Создайте GpsLocation и Order.\n2. Создайте ExpressOrder extends Order с полем GpsLocation.\n3. В main выведите: \"Buyurtma: EXP-5544 | GPS: 41.311081, 69.240562\"."
    },
    "requirements": {
      "classes": [
        "GpsLocation",
        "Order",
        "ExpressOrder",
        "Main"
      ],
      "fields": [
        {
          "name": "latitude",
          "type": "double"
        },
        {
          "name": "longitude",
          "type": "double"
        },
        {
          "name": "orderId",
          "type": "String"
        },
        {
          "name": "location",
          "type": "GpsLocation"
        }
      ],
      "privateFields": [
        "latitude",
        "longitude",
        "orderId",
        "location"
      ],
      "methods": [
        "getLatitude",
        "getLongitude",
        "getOrderId",
        "getLocation"
      ],
      "constructors": [
        "GpsLocation",
        "Order",
        "ExpressOrder"
      ],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class GpsLocation {\n    \n}\n\nclass Order {\n    \n}\n\nclass ExpressOrder extends Order {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class GpsLocation {\n    private double latitude;\n    private double longitude;\n\n    public GpsLocation(double latitude, double longitude) {\n        this.latitude = latitude;\n        this.longitude = longitude;\n    }\n\n    public double getLatitude() {\n        return latitude;\n    }\n\n    public double getLongitude() {\n        return longitude;\n    }\n}\n\nclass Order {\n    private String orderId;\n\n    public Order(String orderId) {\n        this.orderId = orderId;\n    }\n\n    public String getOrderId() {\n        return orderId;\n    }\n}\n\nclass ExpressOrder extends Order {\n    private GpsLocation location;\n\n    public ExpressOrder(String orderId, GpsLocation location) {\n        super(orderId);\n        this.location = location;\n    }\n\n    public GpsLocation getLocation() {\n        return location;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GpsLocation loc = new GpsLocation(41.311081, 69.240562);\n        ExpressOrder eo = new ExpressOrder(\"EXP-5544\", loc);\n        System.out.println(\"Buyurtma: \" + eo.getOrderId() + \" | GPS: \" + eo.getLocation().getLatitude() + \", \" + eo.getLocation().getLongitude());\n    }\n}",
    "detailedSolution": {
      "uz": "ExpressOrder merosxo'rlik va kompozitsiya integratsiyasini toza va modulli amalga oshiradi.",
      "en": "ExpressOrder seamlessly integrates inherited order identity with composed GPS geodata.",
      "ru": "ExpressOrder объединяет идентификатор заказа через наследование и координаты через композицию."
    }
  },
  {
    "id": 58,
    "tier": 2,
    "tierName": "2-Bosqich: 'protected' Modifikatori",
    "sector": "31-60",
    "title": {
      "uz": "58. Milliy Xavfsizlik — User va AdminUser 'protected' Maydoni",
      "en": "58. Security System — User and AdminUser 'protected' Field",
      "ru": "58. Система безопасности — модификатор 'protected' в User и AdminUser"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT 3-ma'ruzaning 23-24-slaydlari: 'private' maydonlarga avlod sinf bevosita kira olmaydi. Ammo 'protected' kalit so'zi ota sinf maydoniga faqat uning avlod sinflariga bevosita murojaat qilish huquqini beradi (tashqi sinflar uchun yopiq qoladi). 'User' sinfidagi 'protected String securityKey;' maydonini 'AdminUser' o'z metodida to'g'ridan-to'g'ri ishlatsin.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'User' sinfini yarating va unga 'protected String securityKey;' maydoni hamda 'User(String securityKey)' konstruktorini qo'shing.\n2. 'AdminUser' sinfini 'extends User' qilib oching va 'AdminUser(String securityKey)' konstruktorida 'super(securityKey);' ni chaqiring.\n3. 'AdminUser' ichida 'public String getFormattedKey()' metodini yozing. U getter chaqirmasdan, to'g'ridan-to'g'ri: 'return \"KEY[\" + securityKey + \"]\";' deb qaytarsin!\n4. 'Main' metodida 'AdminUser admin = new AdminUser(\"SEC-998877\");' obyektini yarating.\n5. 'admin.getFormattedKey()' metodini chaqirib konsolga chop eting.",
      "en": "📖 Real-World Scenario\nSlide 23-24: protected allows direct access to subclasses while restricting other classes. User defines protected String securityKey.\n\n📋 Steps\n1. Declare User with protected String securityKey.\n2. Declare AdminUser extends User directly reading securityKey in getFormattedKey().\n3. In Main, instantiate AdminUser and print formatted key.",
      "ru": "📖 Контекст\nСлайды 23-24: protected открывает доступ подклассам. AdminUser напрямую обращается к securityKey суперкласса.\n\n📋 Шаги\n1. Создайте User с protected String securityKey.\n2. Создайте AdminUser extends User с методом getFormattedKey().\n3. В main выведите: \"KEY[SEC-998877]\"."
    },
    "requirements": {
      "classes": [
        "User",
        "AdminUser",
        "Main"
      ],
      "methods": [
        "getFormattedKey"
      ],
      "constructors": [
        "User",
        "AdminUser"
      ],
      "keywords": [
        "extends",
        "super",
        "protected"
      ]
    },
    "starterCode": "class User {\n    \n}\n\nclass AdminUser extends User {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class User {\n    protected String securityKey;\n\n    public User(String securityKey) {\n        this.securityKey = securityKey;\n    }\n}\n\nclass AdminUser extends User {\n    public AdminUser(String securityKey) {\n        super(securityKey);\n    }\n\n    public String getFormattedKey() {\n        return \"KEY[\" + securityKey + \"]\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AdminUser admin = new AdminUser(\"SEC-998877\");\n        System.out.println(admin.getFormattedKey());\n    }\n}",
    "detailedSolution": {
      "uz": "protected kalit so'zi tufayli AdminUser avlod sinfi ota sinfning securityKey maydonini to'g'ridan-to'g'ri o'qiy oladi.",
      "en": "protected access modifier allows AdminUser to directly access securityKey defined in superclass User.",
      "ru": "Модификатор protected позволяет AdminUser напрямую обращаться к полю securityKey суперкласса User."
    }
  },
  {
    "id": 59,
    "tier": 2,
    "tierName": "2-Bosqich: 'protected' Modifikatori",
    "sector": "31-60",
    "title": {
      "uz": "59. FinTech Engine — PaymentProcessor va CryptoProcessor 'protected'",
      "en": "59. FinTech Engine — PaymentProcessor and CryptoProcessor 'protected'",
      "ru": "59. FinTech Engine — модификатор 'protected' в PaymentProcessor"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nTo'lov shlyuzida 'PaymentProcessor' ota sinfida 'protected boolean isAuditEnabled;' maydoni mavjud. Kripto-to'lovlar sinfi 'CryptoProcessor' ushbu maydonni to'g'ridan-to'g'ri tekshiradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'PaymentProcessor' sinfida 'protected boolean isAuditEnabled;' maydoni va 'PaymentProcessor(boolean isAuditEnabled)' konstruktori bo'lsin.\n2. 'CryptoProcessor' sinfini 'extends PaymentProcessor' qilib oching va konstruktorida 'super(isAuditEnabled);' ni chaqiring.\n3. 'CryptoProcessor' ichida 'public String getAuditStatus()' metodini yozing: agar 'isAuditEnabled' true bo'lsa \"AUDIT_ON\", aks holda \"AUDIT_OFF\" qaytarsin.\n4. 'Main' metodida 'CryptoProcessor cp = new CryptoProcessor(true);' obyektini yarating.\n5. 'cp.getAuditStatus()' metodini chaqirib konsolga chop eting.",
      "en": "📖 Real-World Scenario\nPaymentProcessor defines protected boolean isAuditEnabled. CryptoProcessor directly reads it in getAuditStatus().\n\n📋 Steps\n1. Declare PaymentProcessor with protected boolean isAuditEnabled.\n2. Declare CryptoProcessor extends PaymentProcessor reading isAuditEnabled.\n3. In Main, test with true and print audit status.",
      "ru": "📖 Контекст\nPaymentProcessor определяет protected boolean isAuditEnabled. CryptoProcessor читает его напрямую.\n\n📋 Шаги\n1. Создайте PaymentProcessor с protected полем.\n2. Создайте CryptoProcessor extends PaymentProcessor.\n3. В main выведите: \"AUDIT_ON\"."
    },
    "requirements": {
      "classes": [
        "PaymentProcessor",
        "CryptoProcessor",
        "Main"
      ],
      "methods": [
        "getAuditStatus"
      ],
      "constructors": [
        "PaymentProcessor",
        "CryptoProcessor"
      ],
      "keywords": [
        "extends",
        "super",
        "protected"
      ]
    },
    "starterCode": "class PaymentProcessor {\n    \n}\n\nclass CryptoProcessor extends PaymentProcessor {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class PaymentProcessor {\n    protected boolean isAuditEnabled;\n\n    public PaymentProcessor(boolean isAuditEnabled) {\n        this.isAuditEnabled = isAuditEnabled;\n    }\n}\n\nclass CryptoProcessor extends PaymentProcessor {\n    public CryptoProcessor(boolean isAuditEnabled) {\n        super(isAuditEnabled);\n    }\n\n    public String getAuditStatus() {\n        return isAuditEnabled ? \"AUDIT_ON\" : \"AUDIT_OFF\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CryptoProcessor cp = new CryptoProcessor(true);\n        System.out.println(cp.getAuditStatus());\n    }\n}",
    "detailedSolution": {
      "uz": "isAuditEnabled maydoni protected bo'lgani sababli CryptoProcessor unga getter/settersiz to'g'ridan-to'g'ri kira oladi.",
      "en": "Because isAuditEnabled is protected, CryptoProcessor accesses it directly without accessor methods.",
      "ru": "Так как isAuditEnabled имеет модификатор protected, подкласс обращается к нему напрямую."
    }
  },
  {
    "id": 60,
    "tier": 2,
    "tierName": "2-Bosqich: 'protected' Modifikatori",
    "sector": "31-60",
    "title": {
      "uz": "60. Game Engine — GameCharacter va Warrior 'protected' Maydoni",
      "en": "60. Game Engine — GameCharacter and Warrior 'protected' Field",
      "ru": "60. Игровой движок — поле 'protected' в GameCharacter и Warrior"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nO'yin dvijogida qahramon 'GameCharacter' jon miqdorini 'protected int healthPoints;' maydonida saqlaydi. Jangchi 'Warrior' zarba berganda ushbu maydonni to'g'ridan-to'g'ri oshiradi yoki kamaytiradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'GameCharacter' sinfida 'protected int healthPoints;' maydoni, konstruktori va getteri yozilsin.\n2. 'Warrior' sinfini 'extends GameCharacter' qilib oching va 'Warrior(int healthPoints)' konstruktorida 'super(healthPoints);' chaqiring.\n3. 'Warrior' ichida 'public void takeDamage(int damage)' metodini yozing. U to'g'ridan-to'g'ri: 'healthPoints -= damage;' qilsin.\n4. 'Main' metodida 'Warrior w = new Warrior(100);' obyektini yarating.\n5. 'w.takeDamage(25);' chaqiring va konsolga: \"Jangchi joni: \" + w.getHealthPoints() deb chop eting.",
      "en": "📖 Real-World Scenario\nGameCharacter defines protected int healthPoints. Warrior directly modifies healthPoints in takeDamage(damage).\n\n📋 Steps\n1. Declare GameCharacter with protected healthPoints.\n2. Declare Warrior extends GameCharacter modifying healthPoints directly.\n3. In Main, instantiate Warrior(100), apply damage(25), and print remaining health.",
      "ru": "📖 Контекст\nGameCharacter определяет protected int healthPoints. Warrior напрямую изменяет его в takeDamage.\n\n📋 Шаги\n1. Создайте GameCharacter и Warrior.\n2. В main создайте Warrior(100), вызовите takeDamage(25) и выведите: \"Jangchi joni: 75\"."
    },
    "requirements": {
      "classes": [
        "GameCharacter",
        "Warrior",
        "Main"
      ],
      "methods": [
        "getHealthPoints",
        "takeDamage"
      ],
      "constructors": [
        "GameCharacter",
        "Warrior"
      ],
      "keywords": [
        "extends",
        "super",
        "protected"
      ]
    },
    "starterCode": "class GameCharacter {\n    \n}\n\nclass Warrior extends GameCharacter {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class GameCharacter {\n    protected int healthPoints;\n\n    public GameCharacter(int healthPoints) {\n        this.healthPoints = healthPoints;\n    }\n\n    public int getHealthPoints() {\n        return healthPoints;\n    }\n}\n\nclass Warrior extends GameCharacter {\n    public Warrior(int healthPoints) {\n        super(healthPoints);\n    }\n\n    public void takeDamage(int damage) {\n        this.healthPoints -= damage;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Warrior w = new Warrior(100);\n        w.takeDamage(25);\n        System.out.println(\"Jangchi joni: \" + w.getHealthPoints());\n    }\n}",
    "detailedSolution": {
      "uz": "Warrior avlod sinfi protected healthPoints maydonini to'g'ridan-to'g'ri o'zgartiradi va jang mexanikasini tezkor boshqaradi.",
      "en": "Warrior directly mutates protected healthPoints field inherited from GameCharacter.",
      "ru": "Warrior напрямую изменяет protected поле healthPoints, унаследованное от GameCharacter."
    }
  },
  {
    "id": 61,
    "tier": 3,
    "tierName": "3-Bosqich: Polimorfizm va Dinamik Dispecherlik",
    "sector": "61-90",
    "title": {
      "uz": "61. FinTech — Superclass Havolasi Orqali Subclass Obyektini Boshqarish (Upcasting)",
      "en": "61. FinTech — Polymorphic Reference Assignment (Upcasting)",
      "ru": "61. FinTech — Полиморфная ссылка на подкласс (Upcasting)"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nPayme va Click to'lov tizimlarida barcha to'lov usullari 'PaymentMethod' umumiy ota sinfiga tegishli. Polimorfizmning eng asosiy qoidasi: ota sinf toifasidagi o'zgaruvchi (havola) ixtiyoriy avlod sinf obyektiga ko'rsatishi mumkin ('Upcasting').\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'PaymentMethod' sinfini yarating: 'private String providerName;' maydoni, konstruktor va 'getProviderName()' getteri.\n2. 'Payme' sinfini 'extends PaymentMethod' qiling: 'Payme(String providerName)' konstruktorida 'super(providerName);' chaqiring.\n3. 'Main' metodida ota sinf havolasi orqali 'PaymentMethod pm = new Payme(\"Payme UZ\");' obyektini e'lon qiling.\n4. 'pm.getProviderName()' orqali provayder nomini oling.\n5. Konsolga: \"Tanlangan to'lov tizimi: Payme UZ\" deb chop eting.",
      "en": "📖 Real-World Scenario\nIn modern payment processing, any subclass instance can be assigned to a superclass reference variable (Upcasting).\n\n📋 Steps\n1. Create PaymentMethod(providerName) with getter.\n2. Create Payme extends PaymentMethod.\n3. In Main, assign Payme instance to PaymentMethod variable: PaymentMethod pm = new Payme(\"Payme UZ\").\n4. Print: \"Tanlangan to'lov tizimi: Payme UZ\".",
      "ru": "📖 Контекст\nВосходящее приведение (upcasting): переменная базового класса может ссылаться на объект потомка.\n\n📋 Шаги\n1. Создайте PaymentMethod(providerName), Payme extends PaymentMethod.\n2. В main присвойте: PaymentMethod pm = new Payme(\"Payme UZ\").\n3. Выведите: \"Tanlangan to'lov tizimi: Payme UZ\"."
    },
    "requirements": {
      "classes": [
        "PaymentMethod",
        "Payme",
        "Main"
      ],
      "fields": [
        {
          "name": "providerName",
          "type": "String"
        }
      ],
      "privateFields": [
        "providerName"
      ],
      "methods": [
        "getProviderName"
      ],
      "constructors": [
        "PaymentMethod",
        "Payme"
      ],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class PaymentMethod {\n    \n}\n\nclass Payme extends PaymentMethod {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class PaymentMethod {\n    private String providerName;\n\n    public PaymentMethod(String providerName) {\n        this.providerName = providerName;\n    }\n\n    public String getProviderName() {\n        return providerName;\n    }\n}\n\nclass Payme extends PaymentMethod {\n    public Payme(String providerName) {\n        super(providerName);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentMethod pm = new Payme(\"Payme UZ\");\n        System.out.println(\"Tanlangan to'lov tizimi: \" + pm.getProviderName());\n    }\n}",
    "detailedSolution": {
      "uz": "Polimorfik havola (PaymentMethod pm = new Payme(...)) orqali kod moslashuvchan bo'ladi va kelajakda boshqa to'lov tizimlari qo'shilganda kodni o'zgartirmasdan ishlatish imkonini beradi.",
      "en": "Polymorphic reference PaymentMethod pm = new Payme(...) decouples high-level logic from concrete payment implementations.",
      "ru": "Полиморфная ссылка PaymentMethod pm = new Payme(...) позволяет абстрагироваться от конкретной реализации."
    }
  },
  {
    "id": 62,
    "tier": 3,
    "tierName": "3-Bosqich: Polimorfizm va Dinamik Dispecherlik",
    "sector": "61-90",
    "title": {
      "uz": "62. EcoTransport — Vehicle Havolasi Bilan ElectricBus Obyektini Boshqarish",
      "en": "62. EcoTransport — Vehicle Polymorphic Upcasting to ElectricBus",
      "ru": "62. EcoTransport — Полиморфная ссылка Vehicle на ElectricBus"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nToshkent shahar jamoat transporti parkida barcha mashinalar 'Vehicle' turida ro'yxatga olinadi. Polimorfizm yordamida 'Vehicle' havolasi yangi avlod elektr avtobusini ('ElectricBus') boshqaradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Vehicle' sinfini e'lon qiling: 'private String model;' maydoni, konstruktor va getteri.\n2. 'ElectricBus' sinfini 'extends Vehicle' qiling: 'ElectricBus(String model)' konstruktorida 'super(model);' chaqiring.\n3. 'Main' metodida 'Vehicle v = new ElectricBus(\"Yutong E12\");' polimorfik obyektini e'lon qiling.\n4. 'v.getModel()' orqali model nomini oling.\n5. Konsolga: \"Shahar transport vositasi: Yutong E12\" deb chop eting.",
      "en": "📖 Real-World Scenario\nUrban fleet management tracks all rolling stock via the base class Vehicle reference.\n\n📋 Steps\n1. Create Vehicle(model), ElectricBus extends Vehicle.\n2. In Main: Vehicle v = new ElectricBus(\"Yutong E12\").\n3. Print: \"Shahar transport vositasi: Yutong E12\".",
      "ru": "📖 Контекст\nДиспетчерская служба управляет транспортом через базовый тип Vehicle.\n\n📋 Шаги\n1. Создайте Vehicle(model), ElectricBus extends Vehicle.\n2. В main: Vehicle v = new ElectricBus(\"Yutong E12\").\n3. Выведите: \"Shahar transport vositasi: Yutong E12\"."
    },
    "requirements": {
      "classes": [
        "Vehicle",
        "ElectricBus",
        "Main"
      ],
      "fields": [
        {
          "name": "model",
          "type": "String"
        }
      ],
      "privateFields": [
        "model"
      ],
      "methods": [
        "getModel"
      ],
      "constructors": [
        "Vehicle",
        "ElectricBus"
      ],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class Vehicle {\n    \n}\n\nclass ElectricBus extends Vehicle {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Vehicle {\n    private String model;\n\n    public Vehicle(String model) {\n        this.model = model;\n    }\n\n    public String getModel() {\n        return model;\n    }\n}\n\nclass ElectricBus extends Vehicle {\n    public ElectricBus(String model) {\n        super(model);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Vehicle v = new ElectricBus(\"Yutong E12\");\n        System.out.println(\"Shahar transport vositasi: \" + v.getModel());\n    }\n}",
    "detailedSolution": {
      "uz": "Avlod sinf obyekti ota sinf havolasiga o'zlashtirilganda (upcasting) hech qanday maxsus cast amali talab qilinmaydi, chunki ElectricBus 'is-a' Vehicle hisoblanadi.",
      "en": "Upcasting is implicit in Java because an ElectricBus is guaranteed to satisfy all Vehicle invariants.",
      "ru": "Восходящее приведение в Java безопасно и выполняется автоматически без явного приведения типов."
    }
  },
  {
    "id": 63,
    "tier": 3,
    "tierName": "3-Bosqich: Polimorfizm va Dinamik Dispecherlik",
    "sector": "61-90",
    "title": {
      "uz": "63. DocuFlow — Document Havolasi Bilan Contract Obyektini Boshqarish",
      "en": "63. DocuFlow — Document Polymorphic Reference to Contract",
      "ru": "63. DocuFlow — Полиморфная ссылка Document на Contract"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT elektron hujjat aylanish tizimida barcha hujjatlar bazaviy 'Document' havolasi orqali qayta ishlanadi. 'Contract' (kontrakt) hujjati bazaviy hujjat turida qabul qilinadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Document' sinfini e'lon qiling: 'private String docNumber;' maydoni, konstruktor va getteri.\n2. 'Contract' sinfini 'extends Document' qiling: 'Contract(String docNumber)' konstruktorida 'super(docNumber);' chaqiring.\n3. 'Main' metodida 'Document doc = new Contract(\"WIUT-2026-CW\");' polimorfik o'zgaruvchisini e'lon qiling.\n4. 'doc.getDocNumber()' orqali raqamni oling.\n5. Konsolga: \"Hujjat raqami: WIUT-2026-CW\" deb chop eting.",
      "en": "📖 Real-World Scenario\nEnterprise document routing assigns concrete contracts to base Document variables.\n\n📋 Steps\n1. Create Document(docNumber), Contract extends Document.\n2. In Main: Document doc = new Contract(\"WIUT-2026-CW\").\n3. Print: \"Hujjat raqami: WIUT-2026-CW\".",
      "ru": "📖 Контекст\nЭлектронный документооборот оперирует базовым классом Document.\n\n📋 Шаги\n1. Создайте Document(docNumber), Contract extends Document.\n2. В main: Document doc = new Contract(\"WIUT-2026-CW\").\n3. Выведите: \"Hujjat raqami: WIUT-2026-CW\"."
    },
    "requirements": {
      "classes": [
        "Document",
        "Contract",
        "Main"
      ],
      "fields": [
        {
          "name": "docNumber",
          "type": "String"
        }
      ],
      "privateFields": [
        "docNumber"
      ],
      "methods": [
        "getDocNumber"
      ],
      "constructors": [
        "Document",
        "Contract"
      ],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class Document {\n    \n}\n\nclass Contract extends Document {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Document {\n    private String docNumber;\n\n    public Document(String docNumber) {\n        this.docNumber = docNumber;\n    }\n\n    public String getDocNumber() {\n        return docNumber;\n    }\n}\n\nclass Contract extends Document {\n    public Contract(String docNumber) {\n        super(docNumber);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Document doc = new Contract(\"WIUT-2026-CW\");\n        System.out.println(\"Hujjat raqami: \" + doc.getDocNumber());\n    }\n}",
    "detailedSolution": {
      "uz": "Document turi orqali faqat umumiy metodlarni ko'rish mumkin, bu orqali dastur tashqi arxitekturaga qat'iy bog'lanib qolmaydi.",
      "en": "Operating via Document reference ensures client code is decoupled from specific contract implementations.",
      "ru": "Работа через ссылку Document скрывает специфику контракта от клиента."
    }
  },
  {
    "id": 64,
    "tier": 3,
    "tierName": "3-Bosqich: Polimorfizm va Dinamik Dispecherlik",
    "sector": "61-90",
    "title": {
      "uz": "64. Soliq Inspeksiyasi — Dynamic Method Dispatch Orqali Soliq Hisoblash",
      "en": "64. Tax Authority — Dynamic Method Dispatch on Polymorphic Tax Method",
      "ru": "64. Налоговая — Динамическая диспетчеризация метода налога"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nO'zbekiston soliq tizimida standart korxona 12% soliq to'laydi. Ammo IT Park rezidentlari uchun imtiyozli 7.5% soliq qo'llaniladi. Dynamic Method Dispatch tufayli, 'TaxCalculator' havolasi orqali 'calculateTax()' chaqirilganda, JVM avlod sinf ('ItParkTaxCalculator') metodini ishga tushiradi!\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'TaxCalculator' sinfini e'lon qiling: 'public double calculateTax(double income)' metodi 'income * 0.12' qaytarsin.\n2. 'ItParkTaxCalculator' sinfini 'extends TaxCalculator' qiling va 'calculateTax(double income)' metodini '@Override' qiling: 'income * 0.075' qaytarsin.\n3. 'Main' metodida 'TaxCalculator tc = new ItParkTaxCalculator();' polimorfik obyektini yarating.\n4. 'tc.calculateTax(1000000.0)' metodini chaqiring.\n5. Konsolga: \"Imtiyozli IT Park solig'i: 75000.0\" deb chop eting.",
      "en": "📖 Real-World Scenario\nStandard corporate tax is 12%, but IT Park resident rate is 7.5%. Dynamic method dispatch invokes the subclass method at runtime.\n\n📋 Steps\n1. Create TaxCalculator with calculateTax(income) returning income * 0.12.\n2. ItParkTaxCalculator overrides calculateTax returning income * 0.075.\n3. In Main: TaxCalculator tc = new ItParkTaxCalculator(). Call tc.calculateTax(1000000.0).\n4. Print: \"Imtiyozli IT Park solig'i: 75000.0\".",
      "ru": "📖 Контекст\nДинамическая диспетчеризация: JVM вызывает переопределенный метод объекта во время выполнения.\n\n📋 Шаги\n1. Создайте TaxCalculator с calculateTax(income) (12%), ItParkTaxCalculator (7.5%).\n2. В main создайте TaxCalculator tc = new ItParkTaxCalculator() и вызовите calculateTax(1000000.0).\n3. Выведите: \"Imtiyozli IT Park solig'i: 75000.0\"."
    },
    "requirements": {
      "classes": [
        "TaxCalculator",
        "ItParkTaxCalculator",
        "Main"
      ],
      "methods": [
        "calculateTax"
      ],
      "keywords": [
        "extends",
        "@Override"
      ]
    },
    "starterCode": "class TaxCalculator {\n    \n}\n\nclass ItParkTaxCalculator extends TaxCalculator {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class TaxCalculator {\n    public double calculateTax(double income) {\n        return income * 0.12;\n    }\n}\n\nclass ItParkTaxCalculator extends TaxCalculator {\n    @Override\n    public double calculateTax(double income) {\n        return income * 0.075;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TaxCalculator tc = new ItParkTaxCalculator();\n        double tax = tc.calculateTax(1000000.0);\n        System.out.println(\"Imtiyozli IT Park solig'i: \" + tax);\n    }\n}",
    "detailedSolution": {
      "uz": "Dynamic Method Dispatch — havola turi TaxCalculator bo'lishiga qaramay, JVM obyekt turi (ItParkTaxCalculator) ga qarab aynan avlod sinf metodini chaqirishidir.",
      "en": "Dynamic method dispatch resolves method calls at runtime based on the actual object type rather than reference type.",
      "ru": "Динамическая диспетчеризация определяет вызываемый метод по фактическому типу объекта во время исполнения."
    }
  },
  {
    "id": 65,
    "tier": 3,
    "tierName": "3-Bosqich: Polimorfizm va Dinamik Dispecherlik",
    "sector": "61-90",
    "title": {
      "uz": "65. ExpressDelivery — Drone Yetkazib Berish Narxini Dinamik Aniqlash",
      "en": "65. ExpressDelivery — Dynamic Dispatch for Drone Delivery Tariff",
      "ru": "65. ExpressDelivery — Динамический расчет тарифа дрона"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nYetkazib berish xizmatida standart avtomobil tarifida 1 km uchun 2000.0 so'm, dron orqali tezkor yetkazishda esa 1 km uchun 3500.0 so'm hisoblanadi. Ota sinf havolasi orqali chaqirilganda dron hisob-kitobi ishga tushishi kerak.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'DeliveryService' sinfini e'lon qiling: 'public double calculateFee(double km)' metodi 'km * 2000.0' qaytarsin.\n2. 'DroneDeliveryService' sinfini 'extends DeliveryService' qiling va 'calculateFee(double km)' metodini '@Override' qiling: 'km * 3500.0' qaytarsin.\n3. 'Main' metodida 'DeliveryService ds = new DroneDeliveryService();' obyektini yarating.\n4. 'ds.calculateFee(10.0)' metodini chaqirib natijani oling.\n5. Konsolga: \"Dron orqali yetkazish narxi: 35000.0\" deb chop eting.",
      "en": "📖 Real-World Scenario\nStandard vehicle courier charges 2000 per km; drone delivery charges 3500 per km.\n\n📋 Steps\n1. Create DeliveryService with calculateFee(km) -> km * 2000.\n2. DroneDeliveryService overrides calculateFee(km) -> km * 3500.\n3. In Main: DeliveryService ds = new DroneDeliveryService().\n4. Print: \"Dron orqali yetkazish narxi: 35000.0\".",
      "ru": "📖 Контекст\nКурьер на авто стоит 2000 за км, дрон — 3500 за км.\n\n📋 Шаги\n1. Создайте DeliveryService (2000*km) и DroneDeliveryService (3500*km).\n2. В main: DeliveryService ds = new DroneDeliveryService().\n3. Выведите: \"Dron orqali yetkazish narxi: 35000.0\"."
    },
    "requirements": {
      "classes": [
        "DeliveryService",
        "DroneDeliveryService",
        "Main"
      ],
      "methods": [
        "calculateFee"
      ],
      "keywords": [
        "extends",
        "@Override"
      ]
    },
    "starterCode": "class DeliveryService {\n    \n}\n\nclass DroneDeliveryService extends DeliveryService {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class DeliveryService {\n    public double calculateFee(double km) {\n        return km * 2000.0;\n    }\n}\n\nclass DroneDeliveryService extends DeliveryService {\n    @Override\n    public double calculateFee(double km) {\n        return km * 3500.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DeliveryService ds = new DroneDeliveryService();\n        double fee = ds.calculateFee(10.0);\n        System.out.println(\"Dron orqali yetkazish narxi: \" + fee);\n    }\n}",
    "detailedSolution": {
      "uz": "Polimorfik dispatch tufayli buyurtma tizimi yangi logistika turlari (masalan, samolyot) qo'shilganda o'zgartirishsiz kengaytiriladi (OCP qoidasi).",
      "en": "Subclass method override guarantees open-closed principle compliance when extending transportation logistics.",
      "ru": "Переопределение методов обеспечивает соответствие принципу открытости/закрытости (OCP)."
    }
  },
  {
    "id": 66,
    "tier": 3,
    "tierName": "3-Bosqich: Polimorfizm va Dinamik Dispecherlik",
    "sector": "61-90",
    "title": {
      "uz": "66. Bank Kreditlari — Mortgage (Ipoteka) Foizini Dinamik Hisoblash",
      "en": "66. Banking Loans — Dynamic Dispatch on Mortgage Interest Calculation",
      "ru": "66. Банк — Динамический расчет процентов по ипотеке"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nBanklarda iste'mol krediti bo'yicha yillik foiz 24.0% ni tashkil qiladi. Ipoteka krediti ('MortgageLoan') esa davlat dasturi doirasida 17.5% ni tashkil etadi. Dinamik dispecherlik orqali to'g'ri foiz miqdorini hisoblang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Loan' sinfini e'lon qiling: 'public double getAnnualInterest(double principal)' metodi 'principal * 0.24' qaytarsin.\n2. 'MortgageLoan' sinfini 'extends Loan' qiling va 'getAnnualInterest(double principal)' metodini '@Override' qiling: 'principal * 0.175' qaytarsin.\n3. 'Main' metodida 'Loan myLoan = new MortgageLoan();' havolasini yarating.\n4. 'myLoan.getAnnualInterest(100000000.0)' orqali yillik foizni hisoblang.\n5. Konsolga: \"Ipoteka yillik foizi: 17500000.0\" deb chop eting.",
      "en": "📖 Real-World Scenario\nStandard consumer credit interest is 24%, while state-subsidized mortgage interest is 17.5%.\n\n📋 Steps\n1. Create Loan with getAnnualInterest(principal) -> principal * 0.24.\n2. MortgageLoan overrides getAnnualInterest -> principal * 0.175.\n3. In Main: Loan myLoan = new MortgageLoan().\n4. Print: \"Ipoteka yillik foizi: 17500000.0\".",
      "ru": "📖 Контекст\nПотребительский кредит 24%, ипотека 17.5%.\n\n📋 Шаги\n1. Создайте Loan и MortgageLoan с переопределением getAnnualInterest.\n2. В main создайте Loan myLoan = new MortgageLoan() и вызовите метод.\n3. Выведите: \"Ipoteka yillik foizi: 17500000.0\"."
    },
    "requirements": {
      "classes": [
        "Loan",
        "MortgageLoan",
        "Main"
      ],
      "methods": [
        "getAnnualInterest"
      ],
      "keywords": [
        "extends",
        "@Override"
      ]
    },
    "starterCode": "class Loan {\n    \n}\n\nclass MortgageLoan extends Loan {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Loan {\n    public double getAnnualInterest(double principal) {\n        return principal * 0.24;\n    }\n}\n\nclass MortgageLoan extends Loan {\n    @Override\n    public double getAnnualInterest(double principal) {\n        return principal * 0.175;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Loan myLoan = new MortgageLoan();\n        double interest = myLoan.getAnnualInterest(100000000.0);\n        System.out.println(\"Ipoteka yillik foizi: \" + interest);\n    }\n}",
    "detailedSolution": {
      "uz": "Dinamik dispecherlik yordamida bank yagona 'Loan' interfeysi orqali millionlab mijozlarning har xil kredit turlarini bir xil mantiqda boshqaradi.",
      "en": "Dynamic method dispatch enables uniform processing of heterogeneous loan portfolios.",
      "ru": "Динамическая диспетчеризация позволяет единообразно обрабатывать кредиты разных типов."
    }
  },
  {
    "id": 67,
    "tier": 3,
    "tierName": "3-Bosqich: Polimorfizm va Dinamik Dispecherlik",
    "sector": "61-90",
    "title": {
      "uz": "67. NotificationHub — ArrayList<Notification> Ro'yxatida Turli Bildirishnomalar",
      "en": "67. NotificationHub — Heterogeneous Elements in ArrayList<Notification>",
      "ru": "67. NotificationHub — Гетерогенные элементы в ArrayList<Notification>"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nKatta tizimlarda foydalanuvchiga birdaniga SMS va Email yuborilishi mumkin. 'ArrayList<Notification>' yagona ro'yxatida turli xil avlod sinf obyektlarini ('SmsNotification' va 'EmailNotification') saqlash mumkin!\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Notification' sinfini e'lon qiling: 'private String recipient;' maydoni, konstruktor va getteri.\n2. 'SmsNotification' va 'EmailNotification' sinflarini 'extends Notification' qiling: konstruktorlarida 'super(recipient);' chaqirilsin.\n3. 'Main' metodida 'java.util.ArrayList<Notification> list = new java.util.ArrayList<>();' yarating.\n4. Ro'yxatga 'new SmsNotification(\"+998901234567\")' va 'new EmailNotification(\"student@wiut.uz\")' qo'shing.\n5. Konsolga ro'yxat o'lchamini: \"Jami bildirishnomalar soni: \" + list.size() deb chop eting.",
      "en": "📖 Real-World Scenario\nEnterprise alert services store different notification channels within a unified generic list ArrayList<Notification>.\n\n📋 Steps\n1. Create Notification(recipient), SmsNotification, and EmailNotification.\n2. In Main, instantiate java.util.ArrayList<Notification> list.\n3. Add SmsNotification and EmailNotification.\n4. Print: \"Jami bildirishnomalar soni: 2\".",
      "ru": "📖 Контекст\nСервис уведомлений сохраняет разнородные объекты в общий список ArrayList<Notification>.\n\n📋 Шаги\n1. Создайте Notification, SmsNotification, EmailNotification.\n2. В main добавьте оба объекта в ArrayList<Notification>.\n3. Выведите: \"Jami bildirishnomalar soni: 2\"."
    },
    "requirements": {
      "classes": [
        "Notification",
        "SmsNotification",
        "EmailNotification",
        "Main"
      ],
      "fields": [
        {
          "name": "recipient",
          "type": "String"
        }
      ],
      "privateFields": [
        "recipient"
      ],
      "methods": [
        "getRecipient"
      ],
      "constructors": [
        "Notification",
        "SmsNotification",
        "EmailNotification"
      ],
      "keywords": [
        "extends",
        "super",
        "ArrayList"
      ]
    },
    "starterCode": "class Notification {\n    \n}\n\nclass SmsNotification extends Notification {\n    \n}\n\nclass EmailNotification extends Notification {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.ArrayList;\n\nclass Notification {\n    private String recipient;\n\n    public Notification(String recipient) {\n        this.recipient = recipient;\n    }\n\n    public String getRecipient() {\n        return recipient;\n    }\n}\n\nclass SmsNotification extends Notification {\n    public SmsNotification(String recipient) {\n        super(recipient);\n    }\n}\n\nclass EmailNotification extends Notification {\n    public EmailNotification(String recipient) {\n        super(recipient);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ArrayList<Notification> list = new ArrayList<>();\n        list.add(new SmsNotification(\"+998901234567\"));\n        list.add(new EmailNotification(\"student@wiut.uz\"));\n        System.out.println(\"Jami bildirishnomalar soni: \" + list.size());\n    }\n}",
    "detailedSolution": {
      "uz": "ArrayList<Notification> — polimorfik to'plam bo'lib, unga Notification sinfidan meros olgan ixtiyoriy obyektni joylashtirish mumkin.",
      "en": "A generic list parameterized with a superclass type accepts any instance of its derived subclasses.",
      "ru": "Обобщенный список с базовым типом принимает любые экземпляры его производных классов."
    }
  },
  {
    "id": 68,
    "tier": 3,
    "tierName": "3-Bosqich: Polimorfizm va Dinamik Dispecherlik",
    "sector": "61-90",
    "title": {
      "uz": "68. Korzinka Chegirmalari — ArrayList<Discount> Bilan Aksiya Boshqaruvi",
      "en": "68. Korzinka Promo — Managing Promotions in ArrayList<Discount>",
      "ru": "68. Корзинка — Управление скидками в ArrayList<Discount>"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nKorzinka supermarketida xaridorga bir vaqtning o'zida 'FixedDiscount' (masalan 10000 so'm kupon) va 'PercentageDiscount' (10% naqd chegirma) berilishi mumkin. Bu chegirmalar 'ArrayList<Discount>' ro'yxatida saqlanadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Discount' sinfini e'lon qiling: 'private String code;' maydoni, konstruktor va getteri.\n2. 'FixedDiscount' va 'PercentageDiscount' sinflarini 'extends Discount' qiling va konstruktorlarida 'super(code);' chaqiring.\n3. 'Main' metodida 'java.util.ArrayList<Discount> promoList = new java.util.ArrayList<>();' yarating.\n4. Ro'yxatga 'new FixedDiscount(\"KORZINKA-FIX-10K\")' va 'new PercentageDiscount(\"VIP-10PCT\")' qo'shing.\n5. Konsolga: \"Qo'llangan chegirmalar soni: 2\" deb chop eting.",
      "en": "📖 Real-World Scenario\nSupermarket cash registers track fixed and percentage promotions in a single ArrayList<Discount>.\n\n📋 Steps\n1. Create Discount(code), FixedDiscount, PercentageDiscount.\n2. In Main, instantiate ArrayList<Discount> and add both discounts.\n3. Print: \"Qo'llangan chegirmalar soni: 2\".",
      "ru": "📖 Контекст\nУчет скидок разных типов в едином списке ArrayList<Discount>.\n\n📋 Шаги\n1. Создайте Discount(code), FixedDiscount, PercentageDiscount.\n2. В main добавьте их в ArrayList<Discount>.\n3. Выведите: \"Qo'llangan chegirmalar soni: 2\"."
    },
    "requirements": {
      "classes": [
        "Discount",
        "FixedDiscount",
        "PercentageDiscount",
        "Main"
      ],
      "fields": [
        {
          "name": "code",
          "type": "String"
        }
      ],
      "privateFields": [
        "code"
      ],
      "methods": [
        "getCode"
      ],
      "constructors": [
        "Discount",
        "FixedDiscount",
        "PercentageDiscount"
      ],
      "keywords": [
        "extends",
        "super",
        "ArrayList"
      ]
    },
    "starterCode": "class Discount {\n    \n}\n\nclass FixedDiscount extends Discount {\n    \n}\n\nclass PercentageDiscount extends Discount {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.ArrayList;\n\nclass Discount {\n    private String code;\n\n    public Discount(String code) {\n        this.code = code;\n    }\n\n    public String getCode() {\n        return code;\n    }\n}\n\nclass FixedDiscount extends Discount {\n    public FixedDiscount(String code) {\n        super(code);\n    }\n}\n\nclass PercentageDiscount extends Discount {\n    public PercentageDiscount(String code) {\n        super(code);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ArrayList<Discount> promoList = new ArrayList<>();\n        promoList.add(new FixedDiscount(\"KORZINKA-FIX-10K\"));\n        promoList.add(new PercentageDiscount(\"VIP-10PCT\"));\n        System.out.println(\"Qo'llangan chegirmalar soni: \" + promoList.size());\n    }\n}",
    "detailedSolution": {
      "uz": "Polimorfik ro'yxat orqali bir xil turdagi to'plamda turli xil xususiyatga ega chegirmalarni xavfsiz boshqarish ta'minlanadi.",
      "en": "Polymorphic collections enable clean, extensible coupon management without code duplication.",
      "ru": "Полиморфный список обеспечивает расширяемое управление промо-акциями без дублирования кода."
    }
  },
  {
    "id": 69,
    "tier": 3,
    "tierName": "3-Bosqich: Polimorfizm va Dinamik Dispecherlik",
    "sector": "61-90",
    "title": {
      "uz": "69. WIUT Xodimlar Bo'limi — ArrayList<Employee> Xodimlar Ro'yxati",
      "en": "69. WIUT HR — Polymorphic List of Employees in ArrayList<Employee>",
      "ru": "69. WIUT Отдел кадров — Полиморфный список ArrayList<Employee>"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT HR bo'limida barcha xodimlar yagona ro'yxatda turadi. 'Manager' va 'Lecturer' sinflari 'Employee' sinfidan meros oladi va 'ArrayList<Employee>' ro'yxatiga qo'shiladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Employee' sinfini e'lon qiling: 'private String fullName;' maydoni, konstruktor va getteri.\n2. 'Manager' va 'Lecturer' sinflarini 'extends Employee' qiling va konstruktorlarida 'super(fullName);' chaqiring.\n3. 'Main' metodida 'java.util.ArrayList<Employee> staff = new java.util.ArrayList<>();' yarating.\n4. Ro'yxatga 'new Manager(\"Alisher Vohidov\")' va 'new Lecturer(\"Malika Karimova\")' qo'shing.\n5. Konsolga: \"Ro'yxatdagi xodimlar soni: 2\" deb chop eting.",
      "en": "📖 Real-World Scenario\nWIUT HR system aggregates Managers and Lecturers inside a single ArrayList<Employee>.\n\n📋 Steps\n1. Create Employee(fullName), Manager, Lecturer.\n2. In Main, instantiate ArrayList<Employee> staff and add both objects.\n3. Print: \"Ro'yxatdagi xodimlar soni: 2\".",
      "ru": "📖 Контекст\nОтдел кадров хранит менеджеров и преподавателей в списке ArrayList<Employee>.\n\n📋 Шаги\n1. Создайте Employee(fullName), Manager, Lecturer.\n2. В main добавьте оба объекта в ArrayList<Employee>.\n3. Выведите: \"Ro'yxatdagi xodimlar soni: 2\"."
    },
    "requirements": {
      "classes": [
        "Employee",
        "Manager",
        "Lecturer",
        "Main"
      ],
      "fields": [
        {
          "name": "fullName",
          "type": "String"
        }
      ],
      "privateFields": [
        "fullName"
      ],
      "methods": [
        "getFullName"
      ],
      "constructors": [
        "Employee",
        "Manager",
        "Lecturer"
      ],
      "keywords": [
        "extends",
        "super",
        "ArrayList"
      ]
    },
    "starterCode": "class Employee {\n    \n}\n\nclass Manager extends Employee {\n    \n}\n\nclass Lecturer extends Employee {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.ArrayList;\n\nclass Employee {\n    private String fullName;\n\n    public Employee(String fullName) {\n        this.fullName = fullName;\n    }\n\n    public String getFullName() {\n        return fullName;\n    }\n}\n\nclass Manager extends Employee {\n    public Manager(String fullName) {\n        super(fullName);\n    }\n}\n\nclass Lecturer extends Employee {\n    public Lecturer(String fullName) {\n        super(fullName);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ArrayList<Employee> staff = new ArrayList<>();\n        staff.add(new Manager(\"Alisher Vohidov\"));\n        staff.add(new Lecturer(\"Malika Karimova\"));\n        System.out.println(\"Ro'yxatdagi xodimlar soni: \" + staff.size());\n    }\n}",
    "detailedSolution": {
      "uz": "Seminar 3 va Coursework talablariga muvofiq, ota sinf to'plami yordamida korxonaning barcha subyektlari yagona siklda boshqariladi.",
      "en": "Aggregating diverse staff types into ArrayList<Employee> prepares students for enterprise module architectures.",
      "ru": "Объединение сотрудников в единый список подготавливает к проектированию корпоративных систем."
    }
  },
  {
    "id": 70,
    "tier": 3,
    "tierName": "3-Bosqich: Polimorfizm va Dinamik Dispecherlik",
    "sector": "61-90",
    "title": {
      "uz": "70. MediaPleer — ArrayList<MediaItem> Siklida Dinamik .play() Chaqirish",
      "en": "70. MediaPlayer — Iterating Polymorphic ArrayList<MediaItem> with .play()",
      "ru": "70. Медиаплеер — Итерация по ArrayList<MediaItem> с вызовом .play()"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSpotify kabi pleerda qo'shiq ('Song') va video ('Video') fayllari bir xil pleylistda turadi. Pleer for-each siklida barcha obyektlarning '.play()' metodini chaqiradi va Dynamic Dispatch orqali har bir media turi o'ziga xos tarzda ijro etiladi!\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'MediaItem' sinfini e'lon qiling: 'public String play()' metodi 'Media ijro etilmoqda' qaytarsin.\n2. 'Song' sinfini 'extends MediaItem' qilib, 'play()' metodini '@Override' qiling: 'Musiqa yangramoqda 🎵' qaytarsin.\n3. 'Video' sinfini 'extends MediaItem' qilib, 'play()' metodini '@Override' qiling: 'Video namoyish etilmoqda 🎬' qaytarsin.\n4. 'Main' metodida 'ArrayList<MediaItem>' ro'yxatiga 'new Song()' va 'new Video()' qo'shing.\n5. For-each siklida har bir element uchun 'item.play()' natijasini ekranga chiqaring.",
      "en": "📖 Real-World Scenario\nMedia players iterate over heterogeneous playlists, calling overridden play() methods via dynamic dispatch.\n\n📋 Steps\n1. Create MediaItem with play() returning \"Media ijro etilmoqda\".\n2. Song and Video override play() with specific outputs.\n3. In Main, populate ArrayList<MediaItem> and loop through them calling item.play().",
      "ru": "📖 Контекст\nПлеер воспроизводит список разных треков через цикл for-each и динамическую диспетчеризацию.\n\n📋 Шаги\n1. Создайте MediaItem с play(), переопределите в Song и Video.\n2. В main добавьте объекты в ArrayList<MediaItem> и вызовите play() в цикле for-each."
    },
    "requirements": {
      "classes": [
        "MediaItem",
        "Song",
        "Video",
        "Main"
      ],
      "methods": [
        "play"
      ],
      "keywords": [
        "extends",
        "@Override",
        "for"
      ]
    },
    "starterCode": "class MediaItem {\n    \n}\n\nclass Song extends MediaItem {\n    \n}\n\nclass Video extends MediaItem {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.ArrayList;\n\nclass MediaItem {\n    public String play() {\n        return \"Media ijro etilmoqda\";\n    }\n}\n\nclass Song extends MediaItem {\n    @Override\n    public String play() {\n        return \"Musiqa yangramoqda 🎵\";\n    }\n}\n\nclass Video extends MediaItem {\n    @Override\n    public String play() {\n        return \"Video namoyish etilmoqda 🎬\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ArrayList<MediaItem> playlist = new ArrayList<>();\n        playlist.add(new Song());\n        playlist.add(new Video());\n\n        for (MediaItem item : playlist) {\n            System.out.println(item.play());\n        }\n    }\n}",
    "detailedSolution": {
      "uz": "Polimorfizm kuchi shundaki, sikl ichidagi kod item.play() deb yoziladi va qaysi metod ishga tushishini obyektning o'zi belgilaydi.",
      "en": "Dynamic method dispatch during iteration eliminates ugly if-else or switch statements when handling variants.",
      "ru": "Полиморфизм в цикле избавляет от громоздких условий if-else при обработке различных типов."
    }
  },
  {
    "id": 71,
    "tier": 3,
    "tierName": "3-Bosqich: Polimorfizm va Dinamik Dispecherlik",
    "sector": "61-90",
    "title": {
      "uz": "71. BillingEngine — ArrayList<TariffPlan> Bo'ylab Oylik Tushumni Jamlash",
      "en": "71. BillingEngine — Summing Revenue Over ArrayList<TariffPlan>",
      "ru": "71. BillingEngine — Подсчет выручки через цикл ArrayList<TariffPlan>"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nMobil aloqa operatori billing tizimida barcha mijozlarning tarif rejalari ro'yxatda aylanib, umumiy oylik tushum hisoblanadi. 'StandardPlan' (30000.0) va 'PremiumPlan' (70000.0) narxlarini siklda jamlang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'TariffPlan' sinfini e'lon qiling: 'public double getMonthlyFee()' metodi '0.0' qaytarsin.\n2. 'StandardPlan' sinfini 'extends TariffPlan' qilib 'getMonthlyFee()' da '30000.0' qaytaring.\n3. 'PremiumPlan' sinfini 'extends TariffPlan' qilib 'getMonthlyFee()' da '70000.0' qaytaring.\n4. 'Main' metodida 'ArrayList<TariffPlan>' ro'yxatiga bittadan obyekt qo'shing va sikl orqali jami summani hisoblang.\n5. Konsolga: \"Jami oylik tushum: 100000.0\" deb chop eting.",
      "en": "📖 Real-World Scenario\nTelecom billing systems sum subscription revenue across mixed tariff tiers in a polymorphic collection.\n\n📋 Steps\n1. Create TariffPlan with getMonthlyFee().\n2. StandardPlan returns 30000.0, PremiumPlan returns 70000.0.\n3. In Main, iterate ArrayList<TariffPlan>, accumulate sum, and print: \"Jami oylik tushum: 100000.0\".",
      "ru": "📖 Контекст\nБиллинг суммирует абонентскую плату по разным тарифным планам.\n\n📋 Шаги\n1. Создайте TariffPlan, StandardPlan (30000.0) и PremiumPlan (70000.0).\n2. В main просуммируйте в цикле и выведите: \"Jami oylik tushum: 100000.0\"."
    },
    "requirements": {
      "classes": [
        "TariffPlan",
        "StandardPlan",
        "PremiumPlan",
        "Main"
      ],
      "methods": [
        "getMonthlyFee"
      ],
      "keywords": [
        "extends",
        "@Override",
        "for"
      ]
    },
    "starterCode": "class TariffPlan {\n    \n}\n\nclass StandardPlan extends TariffPlan {\n    \n}\n\nclass PremiumPlan extends TariffPlan {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.ArrayList;\n\nclass TariffPlan {\n    public double getMonthlyFee() {\n        return 0.0;\n    }\n}\n\nclass StandardPlan extends TariffPlan {\n    @Override\n    public double getMonthlyFee() {\n        return 30000.0;\n    }\n}\n\nclass PremiumPlan extends TariffPlan {\n    @Override\n    public double getMonthlyFee() {\n        return 70000.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ArrayList<TariffPlan> plans = new ArrayList<>();\n        plans.add(new StandardPlan());\n        plans.add(new PremiumPlan());\n\n        double total = 0.0;\n        for (TariffPlan plan : plans) {\n            total += plan.getMonthlyFee();\n        }\n\n        System.out.println(\"Jami oylik tushum: \" + total);\n    }\n}",
    "detailedSolution": {
      "uz": "Polimorfik yig'indi hisoblash korxona ilovalarida (Coursework 2) hisobotlar generatsiyasi uchun eng asosiy naqshdir.",
      "en": "Polymorphic accumulation is a core pattern in enterprise billing and financial accounting architectures.",
      "ru": "Полиморфное суммирование — базовый шаблон для финансовых расчетов в корпоративных системах."
    }
  },
  {
    "id": 72,
    "tier": 3,
    "tierName": "3-Bosqich: Polimorfizm va Dinamik Dispecherlik",
    "sector": "61-90",
    "title": {
      "uz": "72. SmartGreenhouse — ArrayList<Sensor> Siklida Ko'rsatkichlarni O'qish",
      "en": "72. SmartGreenhouse — Reading Metrics Across ArrayList<Sensor>",
      "ru": "72. SmartGreenhouse — Опрос датчиков через ArrayList<Sensor>"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nAqlli issiqxonada turli datchiklar (Harorat datchigi va Namlik datchigi) yagona 'Sensor' to'plamida turadi. Markaziy mikrokontroller barcha datchiklarning '.readMetric()' metodini chaqirib nazorat qiladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Sensor' sinfini e'lon qiling: 'public String readMetric()' metodi 'Datchik holati noma'lum' qaytarsin.\n2. 'TempSensor' sinfini 'extends Sensor' qilib 'readMetric()' da 'Harorat: 24C' qaytaring.\n3. 'HumiditySensor' sinfini 'extends Sensor' qilib 'readMetric()' da 'Namlik: 65%' qaytaring.\n4. 'Main' metodida 'ArrayList<Sensor>' ro'yxatiga ikkala datchikni qo'shing va for-each siklida chop eting.\n5. Natijani konsolga chiqaring.",
      "en": "📖 Real-World Scenario\nIoT hubs poll environmental sensors through base Sensor references.\n\n📋 Steps\n1. Create Sensor with readMetric(), TempSensor and HumiditySensor overriding readMetric().\n2. In Main, iterate ArrayList<Sensor> and print each metric.",
      "ru": "📖 Контекст\nКонтроллер умной теплицы считывает показания датчиков через полиморфный список.\n\n📋 Шаги\n1. Создайте Sensor, TempSensor, HumiditySensor с методом readMetric().\n2. В main вызовите readMetric() для каждого элемента ArrayList<Sensor>."
    },
    "requirements": {
      "classes": [
        "Sensor",
        "TempSensor",
        "HumiditySensor",
        "Main"
      ],
      "methods": [
        "readMetric"
      ],
      "keywords": [
        "extends",
        "@Override",
        "for"
      ]
    },
    "starterCode": "class Sensor {\n    \n}\n\nclass TempSensor extends Sensor {\n    \n}\n\nclass HumiditySensor extends Sensor {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.ArrayList;\n\nclass Sensor {\n    public String readMetric() {\n        return \"Datchik holati noma'lum\";\n    }\n}\n\nclass TempSensor extends Sensor {\n    @Override\n    public String readMetric() {\n        return \"Harorat: 24C\";\n    }\n}\n\nclass HumiditySensor extends Sensor {\n    @Override\n    public String readMetric() {\n        return \"Namlik: 65%\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ArrayList<Sensor> sensors = new ArrayList<>();\n        sensors.add(new TempSensor());\n        sensors.add(new HumiditySensor());\n\n        for (Sensor s : sensors) {\n            System.out.println(s.readMetric());\n        }\n    }\n}",
    "detailedSolution": {
      "uz": "IoT tizimlarida yangi datchik qo'shilganda kontroller kodini o'zgartirish shart bo'lmaydi — yangi sinf Sensor'dan voris olsa kifoya.",
      "en": "Adding new IoT sensors requires zero changes to the central polling engine.",
      "ru": "Добавление новых датчиков не требует изменения логики центрального контроллера."
    }
  },
  {
    "id": 73,
    "tier": 3,
    "tierName": "3-Bosqich: Polimorfizm va Dinamik Dispecherlik",
    "sector": "61-90",
    "title": {
      "uz": "73. Bank Xavfsizligi — instanceof Operatori Bilan Premium Hisobni Aniqlash",
      "en": "73. Bank Security — Inspecting Runtime Type with instanceof",
      "ru": "73. Безопасность банка — Проверка типа с помощью instanceof"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nBank tizimida umumiy 'Account' havolasi kelganda, uning aynan VIP mijozga tegishli 'PremiumAccount' ekanligini bilish uchun Java'dagi 'instanceof' operatori ishlatiladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Account' sinfini e'lon qiling.\n2. 'PremiumAccount' sinfini 'extends Account' qiling.\n3. 'Main' metodida 'Account acc = new PremiumAccount();' polimorfik obyektini e'lon qiling.\n4. 'if (acc instanceof PremiumAccount)' shartini tekshiring.\n5. Konsolga: \"VIP xizmat ko'rsatish: HA\" deb chop eting.",
      "en": "📖 Real-World Scenario\nBank service layers verify if a generic Account is a PremiumAccount using the instanceof operator.\n\n📋 Steps\n1. Create Account, PremiumAccount extends Account.\n2. In Main: Account acc = new PremiumAccount().\n3. Check if (acc instanceof PremiumAccount) and print: \"VIP xizmat ko'rsatish: HA\".",
      "ru": "📖 Контекст\nПроверка принадлежности объекта к PremiumAccount с помощью instanceof.\n\n📋 Шаги\n1. Создайте Account и PremiumAccount extends Account.\n2. В main: Account acc = new PremiumAccount(). Проверьте acc instanceof PremiumAccount.\n3. Выведите: \"VIP xizmat ko'rsatish: HA\"."
    },
    "requirements": {
      "classes": [
        "Account",
        "PremiumAccount",
        "Main"
      ],
      "keywords": [
        "extends",
        "instanceof"
      ]
    },
    "starterCode": "class Account {\n    \n}\n\nclass PremiumAccount extends Account {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Account {\n}\n\nclass PremiumAccount extends Account {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Account acc = new PremiumAccount();\n        if (acc instanceof PremiumAccount) {\n            System.out.println(\"VIP xizmat ko'rsatish: HA\");\n        }\n    }\n}",
    "detailedSolution": {
      "uz": "instanceof operatori obyektning xotiradagi haqiqiy sinfini tekshirib, xavfsiz type casting qilish imkonini beradi.",
      "en": "The instanceof operator inspects runtime type to prevent ClassCastException before downcasting.",
      "ru": "Оператор instanceof проверяет фактический тип объекта во избежание ошибки ClassCastException."
    }
  },
  {
    "id": 74,
    "tier": 3,
    "tierName": "3-Bosqich: Polimorfizm va Dinamik Dispecherlik",
    "sector": "61-90",
    "title": {
      "uz": "74. Konsert Zali — instanceof Bilan VipTicket Turini Aniqlash",
      "en": "74. Concert Arena — Inspecting VipTicket with instanceof",
      "ru": "74. Концертный зал — Определение типа VipTicket через instanceof"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nTurniketdan o'tayotganda 'Ticket' chiptasi tekshiriladi. Agar chipta 'VipTicket' bo'lsa, xodimga maxsus qizil yo'lak ochiladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Ticket' sinfini e'lon qiling.\n2. 'VipTicket' sinfini 'extends Ticket' qiling.\n3. 'Main' metodida 'Ticket t = new VipTicket();' obyektini yarating.\n4. 'if (t instanceof VipTicket)' tekshiruvini bajaring.\n5. Konsolga: \"Qizil yo'lakka ruxsat: HA\" deb chop eting.",
      "en": "📖 Real-World Scenario\nTurnstiles check if a Ticket reference points to a VipTicket before granting VIP lounge access.\n\n📋 Steps\n1. Create Ticket, VipTicket extends Ticket.\n2. In Main: Ticket t = new VipTicket(). Check if (t instanceof VipTicket).\n3. Print: \"Qizil yo'lakka ruxsat: HA\".",
      "ru": "📖 Контекст\nТурникет проверяет, является ли билет VipTicket.\n\n📋 Шаги\n1. Создайте Ticket, VipTicket extends Ticket.\n2. В main проверьте t instanceof VipTicket.\n3. Выведите: \"Qizil yo'lakka ruxsat: HA\"."
    },
    "requirements": {
      "classes": [
        "Ticket",
        "VipTicket",
        "Main"
      ],
      "keywords": [
        "extends",
        "instanceof"
      ]
    },
    "starterCode": "class Ticket {\n    \n}\n\nclass VipTicket extends Ticket {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Ticket {\n}\n\nclass VipTicket extends Ticket {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Ticket t = new VipTicket();\n        if (t instanceof VipTicket) {\n            System.out.println(\"Qizil yo'lakka ruxsat: HA\");\n        }\n    }\n}",
    "detailedSolution": {
      "uz": "Obyekt ierarxiyasida 'instanceof' orqali tekshirish dasturda xatoliklarning oldini oladi.",
      "en": "Type checks guarantee safety before executing privilege-specific business logic.",
      "ru": "Проверка типов гарантирует надежность перед выполнением привилегированных операций."
    }
  },
  {
    "id": 75,
    "tier": 3,
    "tierName": "3-Bosqich: Polimorfizm va Dinamik Dispecherlik",
    "sector": "61-90",
    "title": {
      "uz": "75. CloudStorage — instanceof Bilan VideoAsset Faylini Filtrлаш",
      "en": "75. CloudStorage — Filtering VideoAsset with instanceof",
      "ru": "75. CloudStorage — Фильтрация VideoAsset через instanceof"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nBulutli saqlash xizmatida barcha fayllar 'FileAsset' sinfida umumlashtiriladi. Transkodlash servisi faqat 'VideoAsset' fayllarini qayta ishlashi uchun 'instanceof' tekshiruvini o'tkazadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'FileAsset' sinfini e'lon qiling.\n2. 'VideoAsset' sinfini 'extends FileAsset' qiling.\n3. 'Main' metodida 'FileAsset asset = new VideoAsset();' polimorfik obyektini e'lon qiling.\n4. 'if (asset instanceof VideoAsset)' tekshiruvini bajaring.\n5. Konsolga: \"Video transkodlash talab etiladi: HA\" deb chop eting.",
      "en": "📖 Real-World Scenario\nTranscoding pipelines verify whether an incoming file asset is a VideoAsset using instanceof.\n\n📋 Steps\n1. Create FileAsset, VideoAsset extends FileAsset.\n2. In Main: FileAsset asset = new VideoAsset(). Check if (asset instanceof VideoAsset).\n3. Print: \"Video transkodlash talab etiladi: HA\".",
      "ru": "📖 Контекст\nСервис видео-кодирования проверяет тип файла через instanceof.\n\n📋 Шаги\n1. Создайте FileAsset, VideoAsset extends FileAsset.\n2. В main: FileAsset asset = new VideoAsset(). Проверьте asset instanceof VideoAsset.\n3. Выведите: \"Video transkodlash talab etiladi: HA\"."
    },
    "requirements": {
      "classes": [
        "FileAsset",
        "VideoAsset",
        "Main"
      ],
      "keywords": [
        "extends",
        "instanceof"
      ]
    },
    "starterCode": "class FileAsset {\n    \n}\n\nclass VideoAsset extends FileAsset {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class FileAsset {\n}\n\nclass VideoAsset extends FileAsset {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FileAsset asset = new VideoAsset();\n        if (asset instanceof VideoAsset) {\n            System.out.println(\"Video transkodlash talab etiladi: HA\");\n        }\n    }\n}",
    "detailedSolution": {
      "uz": "instanceof operatori orqali umumiy resurslardan kerakli ixtisoslashgan formatni aniqlab olish mumkin.",
      "en": "Polymorphic file pipelines leverage instanceof to branch into dedicated processing workflows.",
      "ru": "Оператор instanceof позволяет выделить специализированные файлы из общего потока."
    }
  },
  {
    "id": 76,
    "tier": 3,
    "tierName": "3-Bosqich: Polimorfizm va Dinamik Dispecherlik",
    "sector": "61-90",
    "title": {
      "uz": "76. SmartGadgets — Device Obyektini Smartphone Sinfga Downcast Qilish",
      "en": "76. SmartGadgets — Downcasting Device Reference to Smartphone",
      "ru": "76. SmartGadgets — Приведение Device к Smartphone (Downcasting)"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nOta sinf havolasi ('Device dev') orqali avlod sinfga xos bo'lgan 'enable5G()' metodini chaqirib bo'lmaydi. Uni chaqirish uchun avval 'instanceof' orqali tekshirib, so'ngra 'Smartphone sp = (Smartphone) dev;' ko'rinishida quyi toifaga o'tkazish (downcasting) zarur!\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Device' sinfini e'lon qiling.\n2. 'Smartphone' sinfini 'extends Device' qiling va 'public String enable5G()' metodida '5G aloqasi ulandi 📶' qaytaring.\n3. 'Main' metodida 'Device dev = new Smartphone();' polimorfik obyektini yarating.\n4. 'if (dev instanceof Smartphone)' ichida 'Smartphone sp = (Smartphone) dev;' qilib downcast qiling.\n5. Konsolga: \"sp.enable5G()\" natijasini chop eting.",
      "en": "📖 Real-World Scenario\nDowncasting unlocks subclass-specific capabilities not declared on the base interface.\n\n📋 Steps\n1. Create Device, Smartphone extends Device with enable5G() method.\n2. In Main: Device dev = new Smartphone().\n3. Check dev instanceof Smartphone, safely downcast to Smartphone sp, and call enable5G().\n4. Print: \"5G aloqasi ulandi 📶\".",
      "ru": "📖 Контекст\nНисходящее приведение (downcasting) открывает доступ к уникальным методам подкласса.\n\n📋 Шаги\n1. Создайте Device, Smartphone extends Device с методом enable5G().\n2. В main: Device dev = new Smartphone().\n3. Проверьте dev instanceof Smartphone, выполните downcast и вызовите enable5G().\n4. Выведите: \"5G aloqasi ulandi 📶\"."
    },
    "requirements": {
      "classes": [
        "Device",
        "Smartphone",
        "Main"
      ],
      "methods": [
        "enable5G"
      ],
      "keywords": [
        "extends",
        "instanceof",
        "(Smartphone)"
      ]
    },
    "starterCode": "class Device {\n    \n}\n\nclass Smartphone extends Device {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Device {\n}\n\nclass Smartphone extends Device {\n    public String enable5G() {\n        return \"5G aloqasi ulandi 📶\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Device dev = new Smartphone();\n        if (dev instanceof Smartphone) {\n            Smartphone sp = (Smartphone) dev;\n            System.out.println(sp.enable5G());\n        }\n    }\n}",
    "detailedSolution": {
      "uz": "Downcasting faqat obyekt haqiqatdan ham ushbu sinfga tegishli bo'lgandagina xavfsiz ishlaydi. 'instanceof' siz to'g'ridan-to'g'ri cast qilish ClassCastException xatosiga sabab bo'lishi mumkin.",
      "en": "Safe downcasting pattern: always guard the cast with an instanceof check to avoid ClassCastException.",
      "ru": "Безопасный downcast всегда защищается проверкой instanceof во избежание ClassCastException."
    }
  },
  {
    "id": 77,
    "tier": 3,
    "tierName": "3-Bosqich: Polimorfizm va Dinamik Dispecherlik",
    "sector": "61-90",
    "title": {
      "uz": "77. Forum Xavfsizligi — User Obyektini Moderator Sinfga Downcast Qilish",
      "en": "77. Community Safety — Downcasting User to Moderator",
      "ru": "77. Безопасность сообщества — Приведение User к Moderator"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nVeb-forumda barcha foydalanuvchilar sessiyada 'User' toifasida saqlanadi. Agar kirgan foydalanuvchi moderator bo'lsa, uni 'Moderator' sinfiga o'tkazib, maxsus 'banSpammer(String user)' metodini chaqirish mumkin.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'User' sinfini e'lon qiling.\n2. 'Moderator' sinfini 'extends User' qiling va 'public String banSpammer(String user)' metodida: \"Foydalanuvchi bloklandi: \" + user qaytaring.\n3. 'Main' metodida 'User u = new Moderator();' polimorfik obyektini e'lon qiling.\n4. 'if (u instanceof Moderator)' tekshiruvi orqali 'Moderator mod = (Moderator) u;' downcast qiling.\n5. 'mod.banSpammer(\"spambot99\")' natijasini konsolga chop eting.",
      "en": "📖 Real-World Scenario\nForum session managers safely downcast generic Users to Moderators to invoke moderation tools.\n\n📋 Steps\n1. Create User, Moderator extends User with banSpammer(user).\n2. In Main: User u = new Moderator().\n3. Safe downcast to Moderator mod and call banSpammer(\"spambot99\").\n4. Print: \"Foydalanuvchi bloklandi: spambot99\".",
      "ru": "📖 Контекст\nПриведение User к Moderator для вызова метода блокировки спамеров.\n\n📋 Шаги\n1. Создайте User, Moderator extends User с методом banSpammer.\n2. В main выполните безопасный downcast и вызовите mod.banSpammer(\"spambot99\").\n3. Выведите: \"Foydalanuvchi bloklandi: spambot99\"."
    },
    "requirements": {
      "classes": [
        "User",
        "Moderator",
        "Main"
      ],
      "methods": [
        "banSpammer"
      ],
      "keywords": [
        "extends",
        "instanceof",
        "(Moderator)"
      ]
    },
    "starterCode": "class User {\n    \n}\n\nclass Moderator extends User {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class User {\n}\n\nclass Moderator extends User {\n    public String banSpammer(String user) {\n        return \"Foydalanuvchi bloklandi: \" + user;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        User u = new Moderator();\n        if (u instanceof Moderator) {\n            Moderator mod = (Moderator) u;\n            System.out.println(mod.banSpammer(\"spambot99\"));\n        }\n    }\n}",
    "detailedSolution": {
      "uz": "Avlod sinfga xos metodlarni faqat quyi toifaga o'tkazgandan keyin chaqirish mumkin. Bu obyektga yo'naltirilgan xavfsizlikning muhim qismidir.",
      "en": "Specialized operations exist only on subclasses; safe downcasting bridges generic references to concrete operations.",
      "ru": "Специализированные методы подкласса доступны только после нисходящего приведения."
    }
  },
  {
    "id": 78,
    "tier": 3,
    "tierName": "3-Bosqich: Polimorfizm va Dinamik Dispecherlik",
    "sector": "61-90",
    "title": {
      "uz": "78. Keshbek Servisi — BankCard Obyektini CashbackCard Sinfga Downcast Qilish",
      "en": "78. Cashback Engine — Downcasting BankCard to CashbackCard",
      "ru": "78. Кешбэк-сервис — Приведение BankCard к CashbackCard"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nBank tranzaksiyasida umumiy karta 'BankCard' keladi. Tizim agar karta keshbek funksiyasiga ega 'CashbackCard' bo'lsa, 'claimMonthlyBonus()' metodini chaqirib keshbek beradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'BankCard' sinfini e'lon qiling.\n2. 'CashbackCard' sinfini 'extends BankCard' qiling va 'public double claimMonthlyBonus()' metodida '50000.0' qaytaring.\n3. 'Main' metodida 'BankCard card = new CashbackCard();' yarating.\n4. 'if (card instanceof CashbackCard)' shartida 'CashbackCard cCard = (CashbackCard) card;' qilib downcast qiling.\n5. Konsolga: \"Oylik keshbek bonusi: 50000.0\" deb chop eting.",
      "en": "📖 Real-World Scenario\nFintech transaction engines inspect cards and downcast to CashbackCard to credit monthly bonuses.\n\n📋 Steps\n1. Create BankCard, CashbackCard extends BankCard with claimMonthlyBonus().\n2. In Main: BankCard card = new CashbackCard().\n3. Safe downcast to CashbackCard and print: \"Oylik keshbek bonusi: 50000.0\".",
      "ru": "📖 Контекст\nБанк начисляет кешбэк, приводя BankCard к CashbackCard.\n\n📋 Шаги\n1. Создайте BankCard, CashbackCard extends BankCard с методом claimMonthlyBonus().\n2. В main: выполните safe downcast и вызовите claimMonthlyBonus().\n3. Выведите: \"Oylik keshbek bonusi: 50000.0\"."
    },
    "requirements": {
      "classes": [
        "BankCard",
        "CashbackCard",
        "Main"
      ],
      "methods": [
        "claimMonthlyBonus"
      ],
      "keywords": [
        "extends",
        "instanceof",
        "(CashbackCard)"
      ]
    },
    "starterCode": "class BankCard {\n    \n}\n\nclass CashbackCard extends BankCard {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class BankCard {\n}\n\nclass CashbackCard extends BankCard {\n    public double claimMonthlyBonus() {\n        return 50000.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BankCard card = new CashbackCard();\n        if (card instanceof CashbackCard) {\n            CashbackCard cCard = (CashbackCard) card;\n            System.out.println(\"Oylik keshbek bonusi: \" + cCard.claimMonthlyBonus());\n        }\n    }\n}",
    "detailedSolution": {
      "uz": "Safe downcasting tufayli barcha turdagi kartalar uchun bitta tranzaksiya moduli ishlaydi, qo'shimcha imtiyozlar esa aniq toifaga qarab beriladi.",
      "en": "Downcasting allows a universal card processor to offer specialized reward workflows seamlessly.",
      "ru": "Безопасный downcast позволяет универсальному процессору карт начислять специфические бонусы."
    }
  },
  {
    "id": 79,
    "tier": 3,
    "tierName": "3-Bosqich: Polimorfizm va Dinamik Dispecherlik",
    "sector": "61-90",
    "title": {
      "uz": "79. Server Audit — Ota va Bola Konstruktorlarning Ishga Tushish Tartibi",
      "en": "79. Server Audit — Constructor Execution Sequence Diagnostics",
      "ru": "79. Аудит сервера — Порядок вызова конструкторов в наследовании"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT 3-ma'ruzasining 19-22-slaydlari: Bola sinf obyekti yaratilayotganda, har doim birinchi bo'lib Ota sinf konstruktori to'liq bajariladi, undan keyin esa bola sinf konstruktori ishga tushadi!\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'BaseServer' sinfini e'lon qiling: konstruktorida 'System.out.println(\"1. Ota server ishga tushdi\");' yozing.\n2. 'DatabaseServer' sinfini 'extends BaseServer' qiling: konstruktorida 'System.out.println(\"2. Ma'lumotlar bazasi ulandi\");' yozing.\n3. 'Main' metodida 'new DatabaseServer();' obyektini yarating.\n4. Konstruktorlar konsolga ketma-ket chiqarayotgan xabarlarni kuzating.",
      "en": "📖 Real-World Scenario\nLecture 3 Slides 19-22: Superclass constructor executes before the subclass constructor logic.\n\n📋 Steps\n1. Create BaseServer printing \"1. Ota server ishga tushdi\" in constructor.\n2. Create DatabaseServer extends BaseServer printing \"2. Ma'lumotlar bazasi ulandi\" in constructor.\n3. In Main, instantiate new DatabaseServer().",
      "ru": "📖 Контекст\nСлайды 19-22 лекции 3: конструктор базового класса всегда выполняется раньше конструктора потомка.\n\n📋 Шаги\n1. Создайте BaseServer с выводом \"1. Ota server ishga tushdi\" в конструкторе.\n2. Создайте DatabaseServer extends BaseServer с выводом \"2. Ma'lumotlar bazasi ulandi\".\n3. В main вызовите new DatabaseServer()."
    },
    "requirements": {
      "classes": [
        "BaseServer",
        "DatabaseServer",
        "Main"
      ],
      "constructors": [
        "BaseServer",
        "DatabaseServer"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class BaseServer {\n    \n}\n\nclass DatabaseServer extends BaseServer {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class BaseServer {\n    public BaseServer() {\n        System.out.println(\"1. Ota server ishga tushdi\");\n    }\n}\n\nclass DatabaseServer extends BaseServer {\n    public DatabaseServer() {\n        System.out.println(\"2. Ma'lumotlar bazasi ulandi\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new DatabaseServer();\n    }\n}",
    "detailedSolution": {
      "uz": "Java'da bola sinf konstruktorining birinchi qatorida yashirin 'super()' chaqirig'i mavjud bo'ladi. Shu sababli ota sinf doimo oldin initsializatsiya qilinadi.",
      "en": "Java implicitly inserts super() at the first line of any constructor that does not explicitly declare one.",
      "ru": "Компилятор Java автоматически вставляет вызов super() первой строкой конструктора."
    }
  },
  {
    "id": 80,
    "tier": 3,
    "tierName": "3-Bosqich: Polimorfizm va Dinamik Dispecherlik",
    "sector": "61-90",
    "title": {
      "uz": "80. AppConfig — Konfiguratsiya Yuklanish Zanjiri (Parent -> Child Init)",
      "en": "80. AppConfig — Initialization Order in Hierarchical Configurations",
      "ru": "80. AppConfig — Цепочка инициализации конфигураций"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nIlovani ishga tushirishda avval tizim parametrlari ('SystemConfig'), so'ngra xavfsizlik parametrlari ('SecurityConfig') yuklanadi. Merosxo'rlik zanjiridagi initsializatsiyani tasdiqlang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'SystemConfig' sinfini e'lon qiling: konstruktorida 'System.out.println(\"[CONFIG] Tizim sozlamalari yuklandi\");' chiqarsin.\n2. 'SecurityConfig' sinfini 'extends SystemConfig' qiling: konstruktorida 'System.out.println(\"[SECURITY] Xavfsizlik qoidalari yoqildi\");' chiqarsin.\n3. 'Main' metodida 'new SecurityConfig();' obyektini yarating.\n4. Natijani konsolga kuzating.",
      "en": "📖 Real-World Scenario\nConfig engines load base system properties before overlaying security configurations.\n\n📋 Steps\n1. Create SystemConfig printing \"[CONFIG] Tizim sozlamalari yuklandi\".\n2. Create SecurityConfig extends SystemConfig printing \"[SECURITY] Xavfsizlik qoidalari yoqildi\".\n3. In Main, instantiate new SecurityConfig().",
      "ru": "📖 Контекст\nКонфигурация приложения: базовые системные параметры загружаются до настроек безопасности.\n\n📋 Шаги\n1. Создайте SystemConfig и SecurityConfig extends SystemConfig.\n2. В main создайте new SecurityConfig()."
    },
    "requirements": {
      "classes": [
        "SystemConfig",
        "SecurityConfig",
        "Main"
      ],
      "constructors": [
        "SystemConfig",
        "SecurityConfig"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class SystemConfig {\n    \n}\n\nclass SecurityConfig extends SystemConfig {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class SystemConfig {\n    public SystemConfig() {\n        System.out.println(\"[CONFIG] Tizim sozlamalari yuklandi\");\n    }\n}\n\nclass SecurityConfig extends SystemConfig {\n    public SecurityConfig() {\n        System.out.println(\"[SECURITY] Xavfsizlik qoidalari yoqildi\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new SecurityConfig();\n    }\n}",
    "detailedSolution": {
      "uz": "Initsializatsiya tartibini bilish Viva imtihonida eng ko'p so'raladigan texnik savollardan biridir: 'Which constructor runs first? - Always the superclass constructor!'.",
      "en": "Viva Exam Essential: Superclass constructor always finishes before the subclass constructor body begins.",
      "ru": "Обязательный вопрос на Viva: конструктор базового класса всегда завершается до начала тела потомка."
    }
  },
  {
    "id": 81,
    "tier": 3,
    "tierName": "3-Bosqich: Polimorfizm va Dinamik Dispecherlik",
    "sector": "61-90",
    "title": {
      "uz": "81. ReportEngine — Hisobot Generatsiyasida Konstruktorlar Chaining Tartibi",
      "en": "81. ReportEngine — Execution Order in Document Generators",
      "ru": "81. ReportEngine — Порядок выполнения генератора отчетов"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nMoliya tizimida hisobot tuzilayotganda avval umumiy sarlavha ('BaseReport'), so'ngra moliyaviy jadval ('FinancialReport') shakllantiriladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'BaseReport' sinfini e'lon qiling: konstruktorida 'System.out.println(\"Hisobot sarlavhasi tayyorlandi\");' chiqarsin.\n2. 'FinancialReport' sinfini 'extends BaseReport' qiling: konstruktorida 'System.out.println(\"Moliyaviy jadval to'ldirildi\");' chiqarsin.\n3. 'Main' metodida 'new FinancialReport();' obyektini yarating.",
      "en": "📖 Real-World Scenario\nReport engines guarantee header generation before formatting financial tables.\n\n📋 Steps\n1. Create BaseReport printing \"Hisobot sarlavhasi tayyorlandi\".\n2. Create FinancialReport extends BaseReport printing \"Moliyaviy jadval to'ldirildi\".\n3. In Main, instantiate new FinancialReport().",
      "ru": "📖 Контекст\nГенератор отчетов: сначала формируется шапка отчета, затем финансовая таблица.\n\n📋 Шаги\n1. Создайте BaseReport и FinancialReport extends BaseReport.\n2. В main создайте new FinancialReport()."
    },
    "requirements": {
      "classes": [
        "BaseReport",
        "FinancialReport",
        "Main"
      ],
      "constructors": [
        "BaseReport",
        "FinancialReport"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class BaseReport {\n    \n}\n\nclass FinancialReport extends BaseReport {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class BaseReport {\n    public BaseReport() {\n        System.out.println(\"Hisobot sarlavhasi tayyorlandi\");\n    }\n}\n\nclass FinancialReport extends BaseReport {\n    public FinancialReport() {\n        System.out.println(\"Moliyaviy jadval to'ldirildi\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new FinancialReport();\n    }\n}",
    "detailedSolution": {
      "uz": "Konstruktorlar zanjiri obyektdagi barcha ota sinflarning to'liq va mustahkam barpo bo'lishini ta'minlaydi.",
      "en": "Constructor chaining ensures foundational object invariants are fully established before specialized properties are configured.",
      "ru": "Цепочка конструкторов гарантирует корректную инициализацию базового состояния объекта."
    }
  },
  {
    "id": 82,
    "tier": 3,
    "tierName": "3-Bosqich: Polimorfizm va Dinamik Dispecherlik",
    "sector": "61-90",
    "title": {
      "uz": "82. Kriptografiya — 'final' Kalit So'zi Bilan Xavfsiz Token Sinflarini Himoyalash",
      "en": "82. Cryptography — Immutability and Security with 'final' Classes",
      "ru": "82. Криптография — Защита классов токенов через 'final'"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nJava'dagi 'java.lang.String' sinfi kabi xavfsizlik uchun muhim sinflar 'final' kalit so'zi bilan belgilanadi. 'final class' dan boshqa hech qaysi sinf meros ololmaydi ('extends' qilib bo'lmaydi)! Bu xakerlar sinfni o'zgartirib yuborishining oldini oladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'final class SecurityToken' sinfini e'lon qiling: 'private String tokenValue;' maydoni, konstruktor va getteri.\n2. 'Main' metodida 'SecurityToken st = new SecurityToken(\"JWT-SECURE-9988\");' obyektini yarating.\n3. 'st.getTokenValue()' orqali tokenni oling.\n4. Konsolga: \"Xavfsiz token: JWT-SECURE-9988\" deb chop eting.",
      "en": "📖 Real-World Scenario\nClasses like java.lang.String are declared final to prevent malicious subclassing.\n\n📋 Steps\n1. Declare final class SecurityToken with private String tokenValue, constructor, and getter.\n2. In Main, instantiate SecurityToken and print: \"Xavfsiz token: JWT-SECURE-9988\".",
      "ru": "📖 Контекст\nКлассы с модификатором final не могут иметь наследников (как java.lang.String).\n\n📋 Шаги\n1. Объявите final class SecurityToken(tokenValue) с геттером.\n2. В main создайте объект и выведите: \"Xavfsiz token: JWT-SECURE-9988\"."
    },
    "requirements": {
      "classes": [
        "SecurityToken",
        "Main"
      ],
      "fields": [
        {
          "name": "tokenValue",
          "type": "String"
        }
      ],
      "privateFields": [
        "tokenValue"
      ],
      "methods": [
        "getTokenValue"
      ],
      "constructors": [
        "SecurityToken"
      ],
      "keywords": [
        "final",
        "class"
      ]
    },
    "starterCode": "class SecurityToken {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "final class SecurityToken {\n    private String tokenValue;\n\n    public SecurityToken(String tokenValue) {\n        this.tokenValue = tokenValue;\n    }\n\n    public String getTokenValue() {\n        return tokenValue;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SecurityToken st = new SecurityToken(\"JWT-SECURE-9988\");\n        System.out.println(\"Xavfsiz token: \" + st.getTokenValue());\n    }\n}",
    "detailedSolution": {
      "uz": "'final class' — sinfni to'liq muzlatadi, undan hech kim voris ololmaydi. Bu orqali xavfsizlik va immutability kafolatlanadi.",
      "en": "Marking a class final prevents subclassing, preserving immutability and preventing malicious tampering.",
      "ru": "Модификатор final запрещает наследование, защищая неизменяемость и безопасность класса."
    }
  },
  {
    "id": 83,
    "tier": 3,
    "tierName": "3-Bosqich: Polimorfizm va Dinamik Dispecherlik",
    "sector": "61-90",
    "title": {
      "uz": "83. Payme Kalitlari — 'final class EncryptionKey' Bilan Shifrlash Kalitini Himoyalash",
      "en": "83. Payment Gateways — Final Class for EncryptionKey Protection",
      "ru": "83. Платежные шлюзы — Защита EncryptionKey через final class"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nTo'lov tizimlarida AES-256 shifrlash kaliti saqlanadigan sinf buzilmasligi uchun 'final' deb belgilanadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'final class EncryptionKey' sinfini e'lon qiling: 'private String rawKey;' maydoni, konstruktor va getteri.\n2. 'Main' metodida 'EncryptionKey key = new EncryptionKey(\"AES256-TOP-SECRET\");' obyektini yarating.\n3. Konsolga: \"Shifrlash kaliti: AES256-TOP-SECRET\" deb chop eting.",
      "en": "📖 Real-World Scenario\nCryptographic keys are encapsulated within final classes to guarantee that key management logic cannot be overridden.\n\n📋 Steps\n1. Create final class EncryptionKey(rawKey) with getter.\n2. In Main, instantiate EncryptionKey and print: \"Shifrlash kaliti: AES256-TOP-SECRET\".",
      "ru": "📖 Контекст\nКлассы шифрования объявляются как final для предотвращения перехвата логики ключей.\n\n📋 Шаги\n1. Объявите final class EncryptionKey(rawKey) с геттером.\n2. В main создайте объект и выведите: \"Shifrlash kaliti: AES256-TOP-SECRET\"."
    },
    "requirements": {
      "classes": [
        "EncryptionKey",
        "Main"
      ],
      "fields": [
        {
          "name": "rawKey",
          "type": "String"
        }
      ],
      "privateFields": [
        "rawKey"
      ],
      "methods": [
        "getRawKey"
      ],
      "constructors": [
        "EncryptionKey"
      ],
      "keywords": [
        "final",
        "class"
      ]
    },
    "starterCode": "class EncryptionKey {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "final class EncryptionKey {\n    private String rawKey;\n\n    public EncryptionKey(String rawKey) {\n        this.rawKey = rawKey;\n    }\n\n    public String getRawKey() {\n        return rawKey;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        EncryptionKey key = new EncryptionKey(\"AES256-TOP-SECRET\");\n        System.out.println(\"Shifrlash kaliti: \" + key.getRawKey());\n    }\n}",
    "detailedSolution": {
      "uz": "Tizimning muhim komponentlari (masalan, to'lov shifrlash kalitlari) meros olinishi mumkin emas qilib loyihalanadi.",
      "en": "Security-critical components must be sealed using final to avert subclass vulnerability vectors.",
      "ru": "Критические компоненты безопасности запечатываются ключевым словом final."
    }
  },
  {
    "id": 84,
    "tier": 3,
    "tierName": "3-Bosqich: Polimorfizm va Dinamik Dispecherlik",
    "sector": "61-90",
    "title": {
      "uz": "84. O'zgarmas Manzil — 'final class GeoCoordinate' Bilan GPS Ma'lumotlarini Himoyalash",
      "en": "84. Telematics — Immutable GPS Coordinates via Final Class",
      "ru": "84. Телематика — Неизменяемые GPS координаты через final class"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nYandex Go taksi haydovchisining GPS koordinatalari (kenglik va uzunlik) o'zgarmas bo'lishi kerak. 'final class GeoCoordinate' yarating.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'final class GeoCoordinate' e'lon qiling: 'private double latitude;' va 'private double longitude;' maydonlari, konstruktori va getterlari.\n2. 'Main' metodida 'GeoCoordinate coord = new GeoCoordinate(41.3111, 69.2797);' yarating.\n3. Konsolga: \"Toshkent markazi: 41.3111, 69.2797\" deb chop eting.",
      "en": "📖 Real-World Scenario\nGeographic coordinates are value objects best secured within final classes.\n\n📋 Steps\n1. Create final class GeoCoordinate(latitude, longitude) with getters.\n2. In Main, instantiate GeoCoordinate(41.3111, 69.2797).\n3. Print: \"Toshkent markazi: 41.3111, 69.2797\".",
      "ru": "📖 Контекст\nКоординаты GPS — объект-значение, защищенный с помощью final class.\n\n📋 Шаги\n1. Объявите final class GeoCoordinate(latitude, longitude) с геттерами.\n2. В main создайте объект и выведите: \"Toshkent markazi: 41.3111, 69.2797\"."
    },
    "requirements": {
      "classes": [
        "GeoCoordinate",
        "Main"
      ],
      "fields": [
        {
          "name": "latitude",
          "type": "double"
        },
        {
          "name": "longitude",
          "type": "double"
        }
      ],
      "privateFields": [
        "latitude",
        "longitude"
      ],
      "methods": [
        "getLatitude",
        "getLongitude"
      ],
      "constructors": [
        "GeoCoordinate"
      ],
      "keywords": [
        "final",
        "class"
      ]
    },
    "starterCode": "class GeoCoordinate {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "final class GeoCoordinate {\n    private double latitude;\n    private double longitude;\n\n    public GeoCoordinate(double latitude, double longitude) {\n        this.latitude = latitude;\n        this.longitude = longitude;\n    }\n\n    public double getLatitude() {\n        return latitude;\n    }\n\n    public double getLongitude() {\n        return longitude;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GeoCoordinate coord = new GeoCoordinate(41.3111, 69.2797);\n        System.out.println(\"Toshkent markazi: \" + coord.getLatitude() + \", \" + coord.getLongitude());\n    }\n}",
    "detailedSolution": {
      "uz": "Value Object (DDD) naqshida obyektlar 'final class' qilinib, ularning holati tashqaridan o'zgartirilishi butunlay taqiqlanadi.",
      "en": "Value objects in Domain Driven Design are defined as final classes to guarantee complete immutability.",
      "ru": "Объекты-значения (Value Objects) оформляются как final классы для гарантии неизменяемости."
    }
  },
  {
    "id": 85,
    "tier": 3,
    "tierName": "3-Bosqich: Polimorfizm va Dinamik Dispecherlik",
    "sector": "61-90",
    "title": {
      "uz": "85. Bank Audit — 'final' Metod Yordamida Muhim Tranzaksiya Qoidasini Qulflash",
      "en": "85. Bank Audit — Locking Critical Workflow with 'final' Methods",
      "ru": "85. Банковский аудит — Блокировка переопределения метода через 'final'"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSinfning o'zi 'extends' qilinishi mumkin, ammo undagi ayrim o'ta muhim xavfsizlik metodlarini avlod sinflar o'zgartirishi ('@Override' qilishi) man etiladi. Buning uchun metod 'public final' deb e'lon qilinadi!\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'BankingWorkflow' sinfini e'lon qiling: 'public final String executeAuditLog()' metodi 'Audit jurnali qat'iy yozildi 🔒' qaytarsin.\n2. 'FastBanking' sinfini 'extends BankingWorkflow' qiling (u 'executeAuditLog()' ni override qila olmaydi, lekin ishlata oladi).\n3. 'Main' metodida 'FastBanking fb = new FastBanking();' obyektini yarating.\n4. 'fb.executeAuditLog()' metodini chaqiring.\n5. Konsolga natijani chop eting.",
      "en": "📖 Real-World Scenario\nFrameworks mark security audit methods as final so derived subclasses cannot bypass compliance logging.\n\n📋 Steps\n1. Create BankingWorkflow with public final String executeAuditLog().\n2. Create FastBanking extends BankingWorkflow.\n3. In Main, call fb.executeAuditLog() and print: \"Audit jurnali qat'iy yozildi 🔒\".",
      "ru": "📖 Контекст\nМетод с ключевым словом final невозможно переопределить в подклассах.\n\n📋 Шаги\n1. Создайте BankingWorkflow с public final String executeAuditLog().\n2. Создайте FastBanking extends BankingWorkflow.\n3. В main вызовите метод и выведите: \"Audit jurnali qat'iy yozildi 🔒\"."
    },
    "requirements": {
      "classes": [
        "BankingWorkflow",
        "FastBanking",
        "Main"
      ],
      "methods": [
        "executeAuditLog"
      ],
      "keywords": [
        "extends",
        "final"
      ]
    },
    "starterCode": "class BankingWorkflow {\n    \n}\n\nclass FastBanking extends BankingWorkflow {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class BankingWorkflow {\n    public final String executeAuditLog() {\n        return \"Audit jurnali qat'iy yozildi 🔒\";\n    }\n}\n\nclass FastBanking extends BankingWorkflow {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FastBanking fb = new FastBanking();\n        System.out.println(fb.executeAuditLog());\n    }\n}",
    "detailedSolution": {
      "uz": "'final' metod — Template Method naqshining yadrosi bo'lib, uning yordamida algoritmlarning buzilmas tayanch bosqichlari himoyalanadi.",
      "en": "Final methods are vital in Template Method design pattern to enforce mandatory business algorithms.",
      "ru": "Методы final являются ключевыми в паттерне Template Method для фиксации неизменных шагов алгоритма."
    }
  },
  {
    "id": 86,
    "tier": 3,
    "tierName": "3-Bosqich: Polimorfizm va Dinamik Dispecherlik",
    "sector": "61-90",
    "title": {
      "uz": "86. Autentifikatsiya — 'final' Hash Tekshiruv Metodi",
      "en": "86. Authentication — Securing Hash Verification via Final Method",
      "ru": "86. Аутентификация — Защита проверки хеша через final метод"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nParolning SHA-256 xeshini tekshirish algoritmi hech qaysi bola sinfda o'zgartirilmasligi shart.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'AuthEngine' sinfini e'lon qiling: 'public final boolean verifyPassword(String raw, String hash)' metodida 'true' qaytarsin.\n2. 'OAuthEngine' sinfini 'extends AuthEngine' qiling.\n3. 'Main' metodida 'OAuthEngine engine = new OAuthEngine();' obyektini yarating.\n4. 'engine.verifyPassword(\"secret\", \"e3b0c442...\")' metodini chaqiring.\n5. Konsolga: \"Parol xavfsiz tekshirildi: true\" deb chop eting.",
      "en": "📖 Real-World Scenario\nPassword hash verification algorithms are marked final in base authenticators to avert bypass bugs.\n\n📋 Steps\n1. Create AuthEngine with public final boolean verifyPassword(raw, hash) returning true.\n2. OAuthEngine extends AuthEngine.\n3. In Main, call engine.verifyPassword(...) and print: \"Parol xavfsiz tekshirildi: true\".",
      "ru": "📖 Контекст\nАлгоритм проверки пароля объявляется как final, чтобы исключить уязвимости в подклассах.\n\n📋 Шаги\n1. Создайте AuthEngine с public final boolean verifyPassword(raw, hash).\n2. OAuthEngine extends AuthEngine.\n3. В main вызовите метод и выведите: \"Parol xavfsiz tekshirildi: true\"."
    },
    "requirements": {
      "classes": [
        "AuthEngine",
        "OAuthEngine",
        "Main"
      ],
      "methods": [
        "verifyPassword"
      ],
      "keywords": [
        "extends",
        "final"
      ]
    },
    "starterCode": "class AuthEngine {\n    \n}\n\nclass OAuthEngine extends AuthEngine {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class AuthEngine {\n    public final boolean verifyPassword(String raw, String hash) {\n        return true;\n    }\n}\n\nclass OAuthEngine extends AuthEngine {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        OAuthEngine engine = new OAuthEngine();\n        boolean ok = engine.verifyPassword(\"secret\", \"e3b0c442...\");\n        System.out.println(\"Parol xavfsiz tekshirildi: \" + ok);\n    }\n}",
    "detailedSolution": {
      "uz": "Xavfsizlik tizimlarida avlod sinflarga moslashish huquqi beriladi, biroq xesh tekshiruvi kabi nozik metodlar 'final' qilinadi.",
      "en": "Security systems permit custom extensions while locking cryptographic verifications with final.",
      "ru": "Системы безопасности разрешают расширения, фиксируя криптографические проверки ключевым словом final."
    }
  },
  {
    "id": 87,
    "tier": 3,
    "tierName": "3-Bosqich: Polimorfizm va Dinamik Dispecherlik",
    "sector": "61-90",
    "title": {
      "uz": "87. Kassa Boshqaruvi — 'final' Jami Summani Hisoblash Metodi",
      "en": "87. Retail Checkout — Enforcing Checkout Calculation via Final Method",
      "ru": "87. Кассовый аппарат — Фиксация итогового чека через final метод"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nUzum Market kassa terminalida savatcha summasiga QQS (12%) qo'shib yakuniy to'lov miqdorini chiqaradigan formula o'zgarmas 'final' bo'lishi shart.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Register' sinfini e'lon qiling: 'public final double calculateTotalWithVat(double subtotal)' metodi 'subtotal * 1.12' qaytarsin.\n2. 'OnlineRegister' sinfini 'extends Register' qiling.\n3. 'Main' metodida 'OnlineRegister reg = new OnlineRegister();' obyektini yarating.\n4. 'reg.calculateTotalWithVat(100000.0)' metodini chaqiring.\n5. Konsolga: \"QQS bilan jami summa: 112000.0\" deb chop eting.",
      "en": "📖 Real-World Scenario\nVAT calculation rules must remain immutable across in-store and online checkout registers.\n\n📋 Steps\n1. Create Register with public final double calculateTotalWithVat(double subtotal) returning subtotal * 1.12.\n2. Create OnlineRegister extends Register.\n3. In Main, call calculateTotalWithVat(100000.0) and print: \"QQS bilan jami summa: 112000.0\".",
      "ru": "📖 Контекст\nФормула расчета НДС фиксируется в базовой кассе с помощью final метода.\n\n📋 Шаги\n1. Создайте Register с public final double calculateTotalWithVat(subtotal).\n2. Создайте OnlineRegister extends Register.\n3. В main вызовите метод и выведите: \"QQS bilan jami summa: 112000.0\"."
    },
    "requirements": {
      "classes": [
        "Register",
        "OnlineRegister",
        "Main"
      ],
      "methods": [
        "calculateTotalWithVat"
      ],
      "keywords": [
        "extends",
        "final"
      ]
    },
    "starterCode": "class Register {\n    \n}\n\nclass OnlineRegister extends Register {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Register {\n    public final double calculateTotalWithVat(double subtotal) {\n        return subtotal * 1.12;\n    }\n}\n\nclass OnlineRegister extends Register {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        OnlineRegister reg = new OnlineRegister();\n        double total = reg.calculateTotalWithVat(100000.0);\n        System.out.println(\"QQS bilan jami summa: \" + total);\n    }\n}",
    "detailedSolution": {
      "uz": "Davlat soliq qoidalariga asoslangan formulalarni 'final' qilish dasturchilarning beixtiyor xato qilishidan asraydi.",
      "en": "Locking legal tax equations with final prevents unintended modifications by junior developers.",
      "ru": "Фиксация налоговых формул через final защищает от непреднамеренных ошибок разработчиков."
    }
  },
  {
    "id": 88,
    "tier": 3,
    "tierName": "3-Bosqich: Polimorfizm va Dinamik Dispecherlik",
    "sector": "61-90",
    "title": {
      "uz": "88. MathEngine — Overloading (Parametrlar Farqi) va Overriding (@Override) Sintez",
      "en": "88. MathEngine — Discerning Overloading vs Overriding",
      "ru": "88. MathEngine — Различие Overloading и Overriding"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT Viva imtihonida eng ko'p so'raladigan klassik savol: 'What is the difference between Overloading and Overriding?'.\n- Overloading: bir xil nom, lekin parametrlar ro'yxati har xil (kompilyatsiya vaqtida aniqlanadi).\n- Overriding: bir xil nom va bir xil parametrlar, avlod sinfda qayta aniqlanadi (runtime vaqtida aniqlanadi).\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Calculator' sinfida 2 ta overloaded metod e'lon qiling: 'add(int a, int b)' va 'add(double a, double b)'.\n2. 'AdvancedCalculator' sinfini 'extends Calculator' qilib, 'add(int a, int b)' metodini '@Override' qiling: 'a + b + 10' qaytarsin.\n3. 'Main' metodida 'AdvancedCalculator ac = new AdvancedCalculator();' obyektini yarating.\n4. 'ac.add(5, 5)' (overridden) va 'ac.add(2.5, 2.5)' (inherited overloaded) metodlarini chaqiring.\n5. Konsolga: \"Overridden int yig'indi: 20 | Overloaded double yig'indi: 5.0\" deb chop eting.",
      "en": "📖 Real-World Scenario\nViva Exam Classic: Overloading is compile-time polymorphism (different parameter signature), while Overriding is runtime polymorphism (same signature, dynamic dispatch).\n\n📋 Steps\n1. Create Calculator with overloaded add(int, int) and add(double, double).\n2. AdvancedCalculator overrides add(int, int) to return a + b + 10.\n3. In Main, instantiate AdvancedCalculator and call both methods.\n4. Print: \"Overridden int yig'indi: 20 | Overloaded double yig'indi: 5.0\".",
      "ru": "📖 Контекст\nКлассический вопрос Viva: Overloading — перегрузка сигнатуры параметров (compile-time), Overriding — переопределение логики метода (runtime).\n\n📋 Шаги\n1. Создайте Calculator с перегруженным add(int, int) и add(double, double).\n2. AdvancedCalculator переопределяет add(int, int), возвращая a + b + 10.\n3. В main вызовите оба метода и выведите: \"Overridden int yig'indi: 20 | Overloaded double yig'indi: 5.0\"."
    },
    "requirements": {
      "classes": [
        "Calculator",
        "AdvancedCalculator",
        "Main"
      ],
      "methods": [
        "add"
      ],
      "keywords": [
        "extends",
        "@Override"
      ]
    },
    "starterCode": "class Calculator {\n    \n}\n\nclass AdvancedCalculator extends Calculator {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Calculator {\n    public int add(int a, int b) {\n        return a + b;\n    }\n\n    public double add(double a, double b) {\n        return a + b;\n    }\n}\n\nclass AdvancedCalculator extends Calculator {\n    @Override\n    public int add(int a, int b) {\n        return a + b + 10;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AdvancedCalculator ac = new AdvancedCalculator();\n        int res1 = ac.add(5, 5);\n        double res2 = ac.add(2.5, 2.5);\n        System.out.println(\"Overridden int yig'indi: \" + res1 + \" | Overloaded double yig'indi: \" + res2);\n    }\n}",
    "detailedSolution": {
      "uz": "Overloading kompilyatsiya vaqtida argument turiga qarab metodni tanlaydi, Overriding esa dastur ishlashi paytida obyekt turiga qarab ishga tushadi.",
      "en": "Overloading resolved by compiler at compile time via parameter signatures; Overriding resolved at runtime via dynamic dispatch.",
      "ru": "Перегрузка разрешается компилятором по типам аргументов, переопределение — в runtime по фактическому типу объекта."
    }
  },
  {
    "id": 89,
    "tier": 3,
    "tierName": "3-Bosqich: Polimorfizm va Dinamik Dispecherlik",
    "sector": "61-90",
    "title": {
      "uz": "89. PrintCenter — Chop Etish Metodlarining Qayta Yuklanishi (Overloading)",
      "en": "89. PrintCenter — Method Overloading Across Parameter Arities",
      "ru": "89. PrintCenter — Перегрузка методов печати по количеству параметров"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nBosmaxona tizimida matnni 1 nusxada chop etish 'print(String doc)' va bir nechta nusxada chop etish 'print(String doc, int copies)' overloading usulida yoziladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Printer' sinfida 2 ta metod e'lon qiling: 'print(String doc)' -> \"Chop etildi: \" + doc; va 'print(String doc, int copies)' -> doc + \" (\" + copies + \" nusxa)\".\n2. 'LaserPrinter' sinfini 'extends Printer' qiling.\n3. 'Main' metodida 'LaserPrinter lp = new LaserPrinter();' obyektini yarating.\n4. 'lp.print(\"WIUT_CW.pdf\", 3)' metodini chaqiring.\n5. Konsolga: \"WIUT_CW.pdf (3 nusxa)\" deb chop eting.",
      "en": "📖 Real-World Scenario\nPrint centers expose overloaded methods for single and multi-copy jobs.\n\n📋 Steps\n1. Create Printer with print(String) and print(String, int).\n2. LaserPrinter extends Printer.\n3. In Main, invoke lp.print(\"WIUT_CW.pdf\", 3).\n4. Print: \"WIUT_CW.pdf (3 nusxa)\".",
      "ru": "📖 Контекст\nПерегрузка методов печати для одного или нескольких экземпляров.\n\n📋 Шаги\n1. Создайте Printer с print(String) и print(String, int).\n2. LaserPrinter extends Printer.\n3. В main вызовите lp.print(\"WIUT_CW.pdf\", 3).\n4. Выведите: \"WIUT_CW.pdf (3 nusxa)\"."
    },
    "requirements": {
      "classes": [
        "Printer",
        "LaserPrinter",
        "Main"
      ],
      "methods": [
        "print"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class Printer {\n    \n}\n\nclass LaserPrinter extends Printer {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Printer {\n    public String print(String doc) {\n        return \"Chop etildi: \" + doc;\n    }\n\n    public String print(String doc, int copies) {\n        return doc + \" (\" + copies + \" nusxa)\";\n    }\n}\n\nclass LaserPrinter extends Printer {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LaserPrinter lp = new LaserPrinter();\n        System.out.println(lp.print(\"WIUT_CW.pdf\", 3));\n    }\n}",
    "detailedSolution": {
      "uz": "Overloading bitta sinfda qulay API yaratish uchun parametrlar soni yoki turini o'zgartirish orqali amalga oshiriladi.",
      "en": "Method overloading provides intuitive, clean APIs without inventing awkward method names like printWithCopies().",
      "ru": "Перегрузка методов позволяет создавать удобные API без придумывания лишних названий методов."
    }
  },
  {
    "id": 90,
    "tier": 3,
    "tierName": "3-Bosqich: Polimorfizm va Dinamik Dispecherlik",
    "sector": "61-90",
    "title": {
      "uz": "90. Qidiruv Tizimi — SearchEngine Qidiruv Metodlarini Overload Qilish",
      "en": "90. SearchEngine — Overloading Search Queries Across Criteria",
      "ru": "90. Поисковая система — Перегрузка методов поиска SearchEngine"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nQidiruv tizimida so'rovni faqat kalit so'z bilan ('search(String query)') yoki toifa bilan ('search(String query, String tag)') izlash imkoniyati overloading orqali taqdim etiladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'SearchEngine' sinfida 'search(String query)' (\"Qidiruv: \" + query) va 'search(String query, String tag)' (\"Qidiruv: \" + query + \" [Kategoriya: \" + tag + \"]\") metodlarini e'lon qiling.\n2. 'WebSearchEngine' sinfini 'extends SearchEngine' qiling.\n3. 'Main' metodida 'WebSearchEngine engine = new WebSearchEngine();' obyektini yarating.\n4. 'engine.search(\"Java Inheritance\", \"WIUT\")' metodini chaqiring.\n5. Konsolga natijani chop eting.",
      "en": "📖 Real-World Scenario\nSearch platforms overload search() to accept simple terms or filtered searches with tags.\n\n📋 Steps\n1. Create SearchEngine with overloaded search(query) and search(query, tag).\n2. WebSearchEngine extends SearchEngine.\n3. In Main, invoke engine.search(\"Java Inheritance\", \"WIUT\").\n4. Print: \"Qidiruv: Java Inheritance [Kategoriya: WIUT]\".",
      "ru": "📖 Контекст\nПерегрузка методов поиска по ключевому слову и тегу категории.\n\n📋 Шаги\n1. Создайте SearchEngine с search(query) и search(query, tag).\n2. WebSearchEngine extends SearchEngine.\n3. В main вызовите engine.search(\"Java Inheritance\", \"WIUT\").\n4. Выведите: \"Qidiruv: Java Inheritance [Kategoriya: WIUT]\"."
    },
    "requirements": {
      "classes": [
        "SearchEngine",
        "WebSearchEngine",
        "Main"
      ],
      "methods": [
        "search"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class SearchEngine {\n    \n}\n\nclass WebSearchEngine extends SearchEngine {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class SearchEngine {\n    public String search(String query) {\n        return \"Qidiruv: \" + query;\n    }\n\n    public String search(String query, String tag) {\n        return \"Qidiruv: \" + query + \" [Kategoriya: \" + tag + \"]\";\n    }\n}\n\nclass WebSearchEngine extends SearchEngine {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WebSearchEngine engine = new WebSearchEngine();\n        System.out.println(engine.search(\"Java Inheritance\", \"WIUT\"));\n    }\n}",
    "detailedSolution": {
      "uz": "Sektor 3 to'liq yakunlandi! 61 dan 90 gacha polimorfizm, upcasting, dynamic dispatch, kolleksiyalar, safe downcasting, final sinflar/metodlar va overloading mukammal o'zlashtirildi.",
      "en": "Sector 3 complete! Fully covers dynamic dispatch, polymorphism, collection iteration, safe downcasting, and final invariants.",
      "ru": "Сектор 3 полностью готов! Охватывает полиморфизм, коллекции, безопасный downcast, final и перегрузку методов."
    }
  },
  {
    "id": 91,
    "tier": 4,
    "tierName": "4-Bosqich: Object Metodlari va Real Sanoat Keyslari",
    "sector": "91-120",
    "title": {
      "uz": "91. Novvoyxona — Kovariant Qaytish Turlari (Covariant Return Type)",
      "en": "91. Artisan Bakery — Covariant Return Types in Overridden Methods",
      "ru": "91. Пекарня — Ковариантные типы возвращаемого значения"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nJava 5 dan boshlab metodni '@Override' qilganda, bola sinf ota sinf qaytaradigan turdan ko'ra aniqroq (avlod) turni qaytarishi mumkin! Bunga 'Covariant Return Type' deyiladi.\n'Bakery.bake()' metodi 'Pastry' qaytarsa, 'CroissantBakery.bake()' metodi to'g'ridan-to'g'ri 'Croissant' (Pastry'ning bolasi) qaytara oladi!\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Pastry' sinfini va 'Croissant extends Pastry' sinfini yarating. 'Croissant' ichida 'public String getFlavor()' metodi bo'lib 'Shokoladli' qaytarsin.\n2. 'Bakery' sinfida 'public Pastry bake()' metodi 'new Pastry()' qaytarsin.\n3. 'CroissantBakery' sinfini 'extends Bakery' qiling va 'public Croissant bake()' (kovariant) qilib '@Override' qiling: 'new Croissant()' qaytarsin.\n4. 'Main' metodida 'CroissantBakery cb = new CroissantBakery(); Croissant c = cb.bake();' chaqiring.\n5. Konsolga: \"Pishiriq ta'mi: \" + c.getFlavor() deb chop eting.",
      "en": "📖 Real-World Scenario\nCovariant return types allow overridden methods to return a more specific derived type.\n\n📋 Steps\n1. Create Pastry, and Croissant extends Pastry with getFlavor() returning \"Shokoladli\".\n2. Create Bakery with Pastry bake().\n3. CroissantBakery extends Bakery overriding bake() with covariant Croissant bake().\n4. In Main, call Croissant c = cb.bake() and print: \"Pishiriq ta'mi: Shokoladli\".",
      "ru": "📖 Контекст\nКовариантные типы возвращаемого значения позволяют подклассу возвращать более узкий тип.\n\n📋 Шаги\n1. Создайте Pastry и Croissant extends Pastry с getFlavor() (\"Shokoladli\").\n2. Создайте Bakery с методом Pastry bake().\n3. CroissantBakery extends Bakery ковариантно переопределяет bake(): Croissant bake().\n4. В main выведите: \"Pishiriq ta'mi: Shokoladli\"."
    },
    "requirements": {
      "classes": [
        "Pastry",
        "Croissant",
        "Bakery",
        "CroissantBakery",
        "Main"
      ],
      "methods": [
        "bake",
        "getFlavor"
      ],
      "keywords": [
        "extends",
        "@Override"
      ]
    },
    "starterCode": "class Pastry {\n    \n}\n\nclass Croissant extends Pastry {\n    \n}\n\nclass Bakery {\n    \n}\n\nclass CroissantBakery extends Bakery {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Pastry {\n}\n\nclass Croissant extends Pastry {\n    public String getFlavor() {\n        return \"Shokoladli\";\n    }\n}\n\nclass Bakery {\n    public Pastry bake() {\n        return new Pastry();\n    }\n}\n\nclass CroissantBakery extends Bakery {\n    @Override\n    public Croissant bake() {\n        return new Croissant();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CroissantBakery cb = new CroissantBakery();\n        Croissant c = cb.bake();\n        System.out.println(\"Pishiriq ta'mi: \" + c.getFlavor());\n    }\n}",
    "detailedSolution": {
      "uz": "Kovariant qaytish turi tufayli mijoz kodida (Croissant) cb.bake() deb tur o'tkazish (casting) shart bo'lmaydi, kod o'qilishi ancha qulaylashadi.",
      "en": "Covariant returns eliminate redundant type casts on the calling side, producing cleaner and type-safe client APIs.",
      "ru": "Ковариантность возвращаемых типов устраняет необходимость явного приведения типов на стороне клиента."
    }
  },
  {
    "id": 92,
    "tier": 4,
    "tierName": "4-Bosqich: Object Metodlari va Real Sanoat Keyslari",
    "sector": "91-120",
    "title": {
      "uz": "92. AvtoSanoat — Factory Metodida Kovariant Qaytish Turi",
      "en": "92. AutoFactory — Covariant Return Type in Vehicle Factory Method",
      "ru": "92. Автопром — Ковариантный тип в фабричном методе"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nAvtomobil zavodida 'VehicleFactory.produce()' bazaviy 'Vehicle' qaytarsa, 'ElectricCarFactory' zavodi aniq 'ElectricCar' turini kovariant tarzda qaytaradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Vehicle' sinfini va 'ElectricCar extends Vehicle' sinfini e'lon qiling ('ElectricCar' ichida 'public int getBatteryRange()' metodi bo'lib '500' qaytarsin).\n2. 'VehicleFactory' sinfida 'public Vehicle produce()' metodi 'new Vehicle()' qaytarsin.\n3. 'ElectricCarFactory' sinfini 'extends VehicleFactory' qilib 'public ElectricCar produce()' kovariant metodini yozing.\n4. 'Main' metodida 'ElectricCarFactory factory = new ElectricCarFactory(); ElectricCar car = factory.produce();' chaqiring.\n5. Konsolga: \"Elektr avtomobil masofasi: 500 km\" deb chop eting.",
      "en": "📖 Real-World Scenario\nVehicle factories utilize covariant returns to yield specialized ElectricCar instances without casting.\n\n📋 Steps\n1. Create Vehicle and ElectricCar extends Vehicle with getBatteryRange() returning 500.\n2. VehicleFactory produce() returns Vehicle; ElectricCarFactory overrides with ElectricCar produce().\n3. In Main, invoke factory.produce() and print: \"Elektr avtomobil masofasi: 500 km\".",
      "ru": "📖 Контекст\nФабрика автомобилей использует ковариантный возврат для получения ElectricCar.\n\n📋 Шаги\n1. Создайте Vehicle и ElectricCar extends Vehicle с getBatteryRange() (500).\n2. VehicleFactory с produce(), ElectricCarFactory ковариантно возвращает ElectricCar.\n3. В main выведите: \"Elektr avtomobil masofasi: 500 km\"."
    },
    "requirements": {
      "classes": [
        "Vehicle",
        "ElectricCar",
        "VehicleFactory",
        "ElectricCarFactory",
        "Main"
      ],
      "methods": [
        "produce",
        "getBatteryRange"
      ],
      "keywords": [
        "extends",
        "@Override"
      ]
    },
    "starterCode": "class Vehicle {\n    \n}\n\nclass ElectricCar extends Vehicle {\n    \n}\n\nclass VehicleFactory {\n    \n}\n\nclass ElectricCarFactory extends VehicleFactory {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Vehicle {\n}\n\nclass ElectricCar extends Vehicle {\n    public int getBatteryRange() {\n        return 500;\n    }\n}\n\nclass VehicleFactory {\n    public Vehicle produce() {\n        return new Vehicle();\n    }\n}\n\nclass ElectricCarFactory extends VehicleFactory {\n    @Override\n    public ElectricCar produce() {\n        return new ElectricCar();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ElectricCarFactory factory = new ElectricCarFactory();\n        ElectricCar car = factory.produce();\n        System.out.println(\"Elektr avtomobil masofasi: \" + car.getBatteryRange() + \" km\");\n    }\n}",
    "detailedSolution": {
      "uz": "Factory metod naqshida kovariant qaytish turlari juda keng ishlatiladi va avlod fabrikalariga aniq mahsulotni qaytarish imkonini beradi.",
      "en": "Covariant return types are heavily utilized in Factory Method design patterns to yield concrete subtypes.",
      "ru": "Ковариантные типы широко применяются в паттерне Factory Method для возврата конкретных подтипов."
    }
  },
  {
    "id": 93,
    "tier": 4,
    "tierName": "4-Bosqich: Object Metodlari va Real Sanoat Keyslari",
    "sector": "91-120",
    "title": {
      "uz": "93. Hujjat Redaktori — Document va PdfDocument Kovariant Qaytish Turi",
      "en": "93. Document Suite — Document and PdfDocument Covariant Return",
      "ru": "93. Редактор документов — Ковариантный возврат PdfDocument"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nHujjat muharririda 'Editor.createDoc()' metodi 'Document' qaytarsa, 'PdfEditor.createDoc()' metodi 'PdfDocument' qaytaradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Document' sinfi va 'PdfDocument extends Document' sinfini e'lon qiling ('PdfDocument' ichida 'public int getPageCount()' metodi bo'lib '15' qaytarsin).\n2. 'Editor' sinfida 'public Document createDoc()' metodi 'new Document()' qaytarsin.\n3. 'PdfEditor' sinfini 'extends Editor' qilib 'public PdfDocument createDoc()' kovariant metodini yozing.\n4. 'Main' metodida 'PdfEditor pe = new PdfEditor(); PdfDocument pdf = pe.createDoc();' chaqiring.\n5. Konsolga: \"PDF sahifalar soni: 15\" deb chop eting.",
      "en": "📖 Real-World Scenario\nSpecialized PDF editor returns PdfDocument directly using covariant return typing.\n\n📋 Steps\n1. Create Document, PdfDocument extends Document with getPageCount() returning 15.\n2. Editor createDoc() returns Document; PdfEditor overrides with PdfDocument createDoc().\n3. In Main, call pe.createDoc() and print: \"PDF sahifalar soni: 15\".",
      "ru": "📖 Контекст\nРедактор документов: PdfEditor возвращает PdfDocument напрямую с помощью ковариантности.\n\n📋 Шаги\n1. Создайте Document, PdfDocument extends Document с getPageCount() (15).\n2. Editor createDoc(), PdfEditor ковариантно возвращает PdfDocument.\n3. В main выведите: \"PDF sahifalar soni: 15\"."
    },
    "requirements": {
      "classes": [
        "Document",
        "PdfDocument",
        "Editor",
        "PdfEditor",
        "Main"
      ],
      "methods": [
        "createDoc",
        "getPageCount"
      ],
      "keywords": [
        "extends",
        "@Override"
      ]
    },
    "starterCode": "class Document {\n    \n}\n\nclass PdfDocument extends Document {\n    \n}\n\nclass Editor {\n    \n}\n\nclass PdfEditor extends Editor {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Document {\n}\n\nclass PdfDocument extends Document {\n    public int getPageCount() {\n        return 15;\n    }\n}\n\nclass Editor {\n    public Document createDoc() {\n        return new Document();\n    }\n}\n\nclass PdfEditor extends Editor {\n    @Override\n    public PdfDocument createDoc() {\n        return new PdfDocument();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PdfEditor pe = new PdfEditor();\n        PdfDocument pdf = pe.createDoc();\n        System.out.println(\"PDF sahifalar soni: \" + pdf.getPageCount());\n    }\n}",
    "detailedSolution": {
      "uz": "Kovariant metod qaytarishi tufayli 'PdfDocument' metodlariga to'g'ridan-to'g'ri kirish kafolatlanadi.",
      "en": "Enables instant access to PdfDocument properties without clumsy casts.",
      "ru": "Гарантирует прямой доступ к свойствам PdfDocument без неудобного приведения типов."
    }
  },
  {
    "id": 94,
    "tier": 4,
    "tierName": "4-Bosqich: Object Metodlari va Real Sanoat Keyslari",
    "sector": "91-120",
    "title": {
      "uz": "94. Pasport Tizimi — 'equals(Object o)' Metodini Mantiqiy Tenglik Uchun Override Qilish",
      "en": "94. Civil Registry — Overriding equals(Object o) for Logical Equality",
      "ru": "94. Паспортная система — Переопределение equals(Object o) для логического равенства"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nJava'da sukut bo'yicha 'equals()' ikkita havola xotiraning ayni bir xil manziliga qarayotganini ('==') tekshiradi. Ammo ikkita alohida pasport obyekti bir xil pasport seriya raqamiga ega bo'lsa, ular mantiqan teng hisoblanishi kerak!\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Passport' sinfini e'lon qiling: 'private String passportNumber;' maydoni, konstruktor va getteri.\n2. '@Override public boolean equals(Object o)' metodini yozing:\n   - 'if (this == o) return true;'\n   - 'if (o == null || !(o instanceof Passport)) return false;'\n   - 'Passport other = (Passport) o;'\n   - 'return this.passportNumber.equals(other.passportNumber);'\n3. 'Main' metodida 'Passport p1 = new Passport(\"AB1234567\");' va 'Passport p2 = new Passport(\"AB1234567\");' obyektlarini yarating.\n4. 'p1.equals(p2)' natijasini tekshiring.\n5. Konsolga: \"Pasportlar mantiqan teng: true\" deb chop eting.",
      "en": "📖 Real-World Scenario\nDefault equals() compares references. Overriding equals(Object o) validates logical passport identity equivalence.\n\n📋 Steps\n1. Create Passport(passportNumber) with getter.\n2. Override equals(Object o) following the standard equality contract.\n3. In Main, instantiate two distinct Passport objects with identical numbers and call p1.equals(p2).\n4. Print: \"Pasportlar mantiqan teng: true\".",
      "ru": "📖 Контекст\nСтандартный equals() сравнивает ссылки памяти. Переопределение equals(Object o) сравнивает логические номера паспортов.\n\n📋 Шаги\n1. Создайте Passport(passportNumber) с геттером.\n2. Переопределите equals(Object o) по стандартному контракту.\n3. В main создайте два паспорта с номером \"AB1234567\" и проверьте p1.equals(p2).\n4. Выведите: \"Pasportlar mantiqan teng: true\"."
    },
    "requirements": {
      "classes": [
        "Passport",
        "Main"
      ],
      "fields": [
        {
          "name": "passportNumber",
          "type": "String"
        }
      ],
      "privateFields": [
        "passportNumber"
      ],
      "methods": [
        "getPassportNumber",
        "equals"
      ],
      "constructors": [
        "Passport"
      ],
      "keywords": [
        "@Override",
        "instanceof"
      ]
    },
    "starterCode": "class Passport {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Passport {\n    private String passportNumber;\n\n    public Passport(String passportNumber) {\n        this.passportNumber = passportNumber;\n    }\n\n    public String getPassportNumber() {\n        return passportNumber;\n    }\n\n    @Override\n    public boolean equals(Object o) {\n        if (this == o) return true;\n        if (o == null || !(o instanceof Passport)) return false;\n        Passport other = (Passport) o;\n        return this.passportNumber.equals(other.passportNumber);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Passport p1 = new Passport(\"AB1234567\");\n        Passport p2 = new Passport(\"AB1234567\");\n        System.out.println(\"Pasportlar mantiqan teng: \" + p1.equals(p2));\n    }\n}",
    "detailedSolution": {
      "uz": "Object.equals(Object o) qoidasi: doimo Object turini qabul qilishi, null tekshiruvi va instanceof tekshiruviga ega bo'lishi shart.",
      "en": "Standard equals contract: reflexive, symmetric, transitive, and null-safe via instanceof check.",
      "ru": "Контракт equals: рефлексивность, симметричность, транзитивность и null-безопасность через instanceof."
    }
  },
  {
    "id": 95,
    "tier": 4,
    "tierName": "4-Bosqich: Object Metodlari va Real Sanoat Keyslari",
    "sector": "91-120",
    "title": {
      "uz": "95. Uzum Market SKU — ProductSku Sinfida equals() Metodini Yozish",
      "en": "95. Uzum Market SKU — Overriding equals() for Product Identification",
      "ru": "95. Uzum Market SKU — Переопределение equals() для артикула товара"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nOmbor tizimida ikkita mahsulotning SKU (artikul kodi) bir xil bo'lsa, ular bitta tovar hisoblanadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'ProductSku' sinfini e'lon qiling: 'private String skuCode;' maydoni, konstruktor va getteri.\n2. '@Override public boolean equals(Object o)' metodida skuCode tengligini tekshiring.\n3. 'Main' metodida 'ProductSku s1 = new ProductSku(\"UZUM-PHONE-01\");' va 'ProductSku s2 = new ProductSku(\"UZUM-PHONE-01\");' yarating.\n4. 's1.equals(s2)' ni tekshiring.\n5. Konsolga: \"Tovarlar kodi bir xil: true\" deb chop eting.",
      "en": "📖 Real-World Scenario\nWarehouse management relies on logical SKU equality checks.\n\n📋 Steps\n1. Create ProductSku(skuCode) with getter.\n2. Override equals(Object o) comparing skuCode strings.\n3. In Main, instantiate two identical SKUs and verify equality.\n4. Print: \"Tovarlar kodi bir xil: true\".",
      "ru": "📖 Контекст\nСкладской учет проверяет равенство товаров по их артикулу (SKU).\n\n📋 Шаги\n1. Создайте ProductSku(skuCode) с геттером.\n2. Переопределите equals(Object o).\n3. В main проверьте s1.equals(s2).\n4. Выведите: \"Tovarlar kodi bir xil: true\"."
    },
    "requirements": {
      "classes": [
        "ProductSku",
        "Main"
      ],
      "fields": [
        {
          "name": "skuCode",
          "type": "String"
        }
      ],
      "privateFields": [
        "skuCode"
      ],
      "methods": [
        "getSkuCode",
        "equals"
      ],
      "constructors": [
        "ProductSku"
      ],
      "keywords": [
        "@Override",
        "instanceof"
      ]
    },
    "starterCode": "class ProductSku {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class ProductSku {\n    private String skuCode;\n\n    public ProductSku(String skuCode) {\n        this.skuCode = skuCode;\n    }\n\n    public String getSkuCode() {\n        return skuCode;\n    }\n\n    @Override\n    public boolean equals(Object o) {\n        if (this == o) return true;\n        if (o == null || !(o instanceof ProductSku)) return false;\n        ProductSku other = (ProductSku) o;\n        return this.skuCode.equals(other.skuCode);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ProductSku s1 = new ProductSku(\"UZUM-PHONE-01\");\n        ProductSku s2 = new ProductSku(\"UZUM-PHONE-01\");\n        System.out.println(\"Tovarlar kodi bir xil: \" + s1.equals(s2));\n    }\n}",
    "detailedSolution": {
      "uz": "equals() metodini to'g'ri yozish to'plamlarda (masalan, Set va Map) tovarlarni dublikat bo'lmasligini ta'minlash uchun zarur.",
      "en": "Logical equals implementation is crucial for collections to detect duplicate warehouse SKUs correctly.",
      "ru": "Корректный equals необходим для коллекций Set и Map при поиске дубликатов артикулов."
    }
  },
  {
    "id": 96,
    "tier": 4,
    "tierName": "4-Bosqich: Object Metodlari va Real Sanoat Keyslari",
    "sector": "91-120",
    "title": {
      "uz": "96. Bank Hisoblari — BankAccount Sinfida Hisob Raqami Bo'yicha equals()",
      "en": "96. Core Banking — BankAccount equals() Comparison by Account Number",
      "ru": "96. Банк — Сравнение счетов BankAccount через equals()"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nBankda ikkita hisob raqami obyektining 'accountNumber' qiymati bir xil bo'lsa, ular bir xil hisob hisoblanadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'BankAccount' sinfini e'lon qiling: 'private String accountNumber;' maydoni, konstruktor va getteri.\n2. '@Override public boolean equals(Object o)' metodini to'g'ri tekshiruvlar bilan yozing.\n3. 'Main' metodida 'BankAccount b1 = new BankAccount(\"202080009999\");' va 'BankAccount b2 = new BankAccount(\"202080009999\");' yarating.\n4. 'b1.equals(b2)' natijasini tekshiring.\n5. Konsolga: \"Bank hisoblari bir xil: true\" deb chop eting.",
      "en": "📖 Real-World Scenario\nBank accounts are uniquely identified by their account numbers.\n\n📋 Steps\n1. Create BankAccount(accountNumber) with getter.\n2. Override equals(Object o).\n3. In Main, instantiate two matching accounts and call b1.equals(b2).\n4. Print: \"Bank hisoblari bir xil: true\".",
      "ru": "📖 Контекст\nБанковские счета идентифицируются по номеру счета.\n\n📋 Шаги\n1. Создайте BankAccount(accountNumber) с геттером.\n2. Переопределите equals(Object o).\n3. В main сравните счета через b1.equals(b2).\n4. Выведите: \"Bank hisoblari bir xil: true\"."
    },
    "requirements": {
      "classes": [
        "BankAccount",
        "Main"
      ],
      "fields": [
        {
          "name": "accountNumber",
          "type": "String"
        }
      ],
      "privateFields": [
        "accountNumber"
      ],
      "methods": [
        "getAccountNumber",
        "equals"
      ],
      "constructors": [
        "BankAccount"
      ],
      "keywords": [
        "@Override",
        "instanceof"
      ]
    },
    "starterCode": "class BankAccount {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class BankAccount {\n    private String accountNumber;\n\n    public BankAccount(String accountNumber) {\n        this.accountNumber = accountNumber;\n    }\n\n    public String getAccountNumber() {\n        return accountNumber;\n    }\n\n    @Override\n    public boolean equals(Object o) {\n        if (this == o) return true;\n        if (o == null || !(o instanceof BankAccount)) return false;\n        BankAccount other = (BankAccount) o;\n        return this.accountNumber.equals(other.accountNumber);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BankAccount b1 = new BankAccount(\"202080009999\");\n        BankAccount b2 = new BankAccount(\"202080009999\");\n        System.out.println(\"Bank hisoblari bir xil: \" + b1.equals(b2));\n    }\n}",
    "detailedSolution": {
      "uz": "Bank hisoblarini tenglashtirish faqat hisob raqami kabi o'zgarmas biznes identifikatorlari bo'yicha amalga oshiriladi.",
      "en": "Equality relies exclusively on immutable unique business identifiers like account numbers.",
      "ru": "Сравнение счетов опирается на неизменяемый уникальный идентификатор счета."
    }
  },
  {
    "id": 97,
    "tier": 4,
    "tierName": "4-Bosqich: Object Metodlari va Real Sanoat Keyslari",
    "sector": "91-120",
    "title": {
      "uz": "97. Seminar 3 Tovarlari — PhysicalProduct Sinfida super.equals() Chaining",
      "en": "97. Seminar 3 Products — Chaining super.equals() in Subclasses",
      "ru": "97. Товары Семинара 3 — Вызов super.equals() в подклассе"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT Seminar 3 topshirig'i: 'Product' ota sinfida 'title' maydoni bor. 'PhysicalProduct' bola sinfida esa qo'shimcha 'weightKg' maydoni bor. Bola sinfda 'equals()' yozilganda, avval 'if (!super.equals(o)) return false;' orqali ota sinf tekshirilishi, keyin o'zining maydoni tekshirilishi shart!\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Product' sinfini e'lon qiling: 'private String title;' maydoni, konstruktor va 'equals(Object o)' metodi.\n2. 'PhysicalProduct' sinfini 'extends Product' qiling: 'private double weightKg;' maydoni, konstruktorda 'super(title);'.\n3. 'PhysicalProduct' ichida 'equals(Object o)' ni '@Override' qiling:\n   - 'if (!super.equals(o)) return false;'\n   - 'PhysicalProduct other = (PhysicalProduct) o;'\n   - 'return Double.compare(this.weightKg, other.weightKg) == 0;'\n4. 'Main' metodida 'PhysicalProduct p1 = new PhysicalProduct(\"Kitob\", 1.5);' va 'PhysicalProduct p2 = new PhysicalProduct(\"Kitob\", 1.5);' yarating.\n5. Konsolga: \"Jismoniy tovarlar to'liq teng: \" + p1.equals(p2) deb chop eting.",
      "en": "📖 Real-World Scenario\nSeminar 3 Exercise: When overriding equals() in a subclass, always chain super.equals(o) first to verify base invariants.\n\n📋 Steps\n1. Create Product(title) with equals(Object o).\n2. Create PhysicalProduct(title, weightKg) extends Product.\n3. Override equals(Object o) in PhysicalProduct chaining super.equals(o) and comparing weightKg.\n4. In Main, instantiate two identical PhysicalProducts and verify equality.\n5. Print: \"Jismoniy tovarlar to'liq teng: true\".",
      "ru": "📖 Контекст\nУпражнение Семинара 3: при переопределении equals() в подклассе сначала вызывается super.equals(o).\n\n📋 Шаги\n1. Создайте Product(title) с equals().\n2. Создайте PhysicalProduct(title, weightKg) extends Product с equals(), вызывающим super.equals(o).\n3. В main проверьте p1.equals(p2).\n4. Выведите: \"Jismoniy tovarlar to'liq teng: true\"."
    },
    "requirements": {
      "classes": [
        "Product",
        "PhysicalProduct",
        "Main"
      ],
      "fields": [
        {
          "name": "title",
          "type": "String"
        },
        {
          "name": "weightKg",
          "type": "double"
        }
      ],
      "privateFields": [
        "title",
        "weightKg"
      ],
      "methods": [
        "equals"
      ],
      "constructors": [
        "Product",
        "PhysicalProduct"
      ],
      "keywords": [
        "extends",
        "super.equals",
        "@Override"
      ]
    },
    "starterCode": "class Product {\n    \n}\n\nclass PhysicalProduct extends Product {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Product {\n    private String title;\n\n    public Product(String title) {\n        this.title = title;\n    }\n\n    public String getTitle() {\n        return title;\n    }\n\n    @Override\n    public boolean equals(Object o) {\n        if (this == o) return true;\n        if (o == null || !(o instanceof Product)) return false;\n        Product other = (Product) o;\n        return this.title.equals(other.title);\n    }\n}\n\nclass PhysicalProduct extends Product {\n    private double weightKg;\n\n    public PhysicalProduct(String title, double weightKg) {\n        super(title);\n        this.weightKg = weightKg;\n    }\n\n    public double getWeightKg() {\n        return weightKg;\n    }\n\n    @Override\n    public boolean equals(Object o) {\n        if (!super.equals(o)) return false;\n        if (!(o instanceof PhysicalProduct)) return false;\n        PhysicalProduct other = (PhysicalProduct) o;\n        return Double.compare(this.weightKg, other.weightKg) == 0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PhysicalProduct p1 = new PhysicalProduct(\"Kitob\", 1.5);\n        PhysicalProduct p2 = new PhysicalProduct(\"Kitob\", 1.5);\n        System.out.println(\"Jismoniy tovarlar to'liq teng: \" + p1.equals(p2));\n    }\n}",
    "detailedSolution": {
      "uz": "super.equals(o) chaqiruvi ota sinfning barcha xususiyatlarini avtomatik tekshirib, kod takrorlanishining oldini oladi.",
      "en": "Chaining super.equals(o) delegates base property verification cleanly according to OOP design principles.",
      "ru": "Вызов super.equals(o) делегирует проверку базовых полей, соблюдая принципы ООП."
    }
  },
  {
    "id": 98,
    "tier": 4,
    "tierName": "4-Bosqich: Object Metodlari va Real Sanoat Keyslari",
    "sector": "91-120",
    "title": {
      "uz": "98. CRM Tizimi — VipCustomer Sinfida super.equals() Bilan Darajani Tekshirish",
      "en": "98. CRM Systems — Chaining super.equals() in VipCustomer Hierarchy",
      "ru": "98. CRM системы — Вызов super.equals() в классе VipCustomer"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nMijozlar tizimida 'Customer' (id) ota sinf bo'lsa, 'VipCustomer' (vipLevel) bola sinf hisoblanadi. Ikkita VIP mijozning ham id raqami, ham VIP darajasi mos kelsagina ular teng deb topiladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Customer(String id)' sinfini va uning 'equals(Object o)' metodini e'lon qiling.\n2. 'VipCustomer(String id, String vipLevel)' sinfini 'extends Customer' qiling va 'equals(Object o)' metodida 'super.equals(o)' zanjirini bog'lang.\n3. 'Main' metodida 'VipCustomer v1 = new VipCustomer(\"C-100\", \"Gold\");' va 'VipCustomer v2 = new VipCustomer(\"C-100\", \"Gold\");' yarating.\n4. 'v1.equals(v2)' natijasini tekshiring.\n5. Konsolga: \"VIP mijozlar to'liq teng: true\" deb chop eting.",
      "en": "📖 Real-World Scenario\nVIP client identity requires matching base ID as well as loyalty tier via super.equals().\n\n📋 Steps\n1. Create Customer(id) with equals().\n2. Create VipCustomer(id, vipLevel) extends Customer with equals() chaining super.equals().\n3. In Main, instantiate two matching VIP customers and verify equality.\n4. Print: \"VIP mijozlar to'liq teng: true\".",
      "ru": "📖 Контекст\nСравнение VIP клиентов: проверка совпадения базового ID и уровня лояльности через super.equals().\n\n📋 Шаги\n1. Создайте Customer(id) с equals().\n2. Создайте VipCustomer(id, vipLevel) extends Customer с вызовом super.equals().\n3. В main проверьте v1.equals(v2).\n4. Выведите: \"VIP mijozlar to'liq teng: true\"."
    },
    "requirements": {
      "classes": [
        "Customer",
        "VipCustomer",
        "Main"
      ],
      "fields": [
        {
          "name": "id",
          "type": "String"
        },
        {
          "name": "vipLevel",
          "type": "String"
        }
      ],
      "privateFields": [
        "id",
        "vipLevel"
      ],
      "methods": [
        "equals"
      ],
      "constructors": [
        "Customer",
        "VipCustomer"
      ],
      "keywords": [
        "extends",
        "super.equals",
        "@Override"
      ]
    },
    "starterCode": "class Customer {\n    \n}\n\nclass VipCustomer extends Customer {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Customer {\n    private String id;\n\n    public Customer(String id) {\n        this.id = id;\n    }\n\n    public String getId() {\n        return id;\n    }\n\n    @Override\n    public boolean equals(Object o) {\n        if (this == o) return true;\n        if (o == null || !(o instanceof Customer)) return false;\n        Customer other = (Customer) o;\n        return this.id.equals(other.id);\n    }\n}\n\nclass VipCustomer extends Customer {\n    private String vipLevel;\n\n    public VipCustomer(String id, String vipLevel) {\n        super(id);\n        this.vipLevel = vipLevel;\n    }\n\n    public String getVipLevel() {\n        return vipLevel;\n    }\n\n    @Override\n    public boolean equals(Object o) {\n        if (!super.equals(o)) return false;\n        if (!(o instanceof VipCustomer)) return false;\n        VipCustomer other = (VipCustomer) o;\n        return this.vipLevel.equals(other.vipLevel);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        VipCustomer v1 = new VipCustomer(\"C-100\", \"Gold\");\n        VipCustomer v2 = new VipCustomer(\"C-100\", \"Gold\");\n        System.out.println(\"VIP mijozlar to'liq teng: \" + v1.equals(v2));\n    }\n}",
    "detailedSolution": {
      "uz": "Merosxo'rlik zanjirida har bir sinf faqat o'zining yangi qo'shilgan maydonini tekshiradi, qolganini esa super.equals() ga topshiradi.",
      "en": "Each class in an inheritance hierarchy inspects only its newly introduced state, delegating ancestor checks upstream.",
      "ru": "Каждый класс в иерархии проверяет только свои новые поля, делегируя проверку предкам."
    }
  },
  {
    "id": 99,
    "tier": 4,
    "tierName": "4-Bosqich: Object Metodlari va Real Sanoat Keyslari",
    "sector": "91-120",
    "title": {
      "uz": "99. Korporativ B2B — CorporateClient Sinfida STIR (Tax ID) Bo'yicha equals()",
      "en": "99. Enterprise B2B — CorporateClient super.equals() with Tax Identification",
      "ru": "99. Корпоративный B2B — Сравнение CorporateClient по ИНН через super.equals()"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nKorxonalarni ro'yxatga olishda 'Client(name)' ota sinfiga 'CorporateClient(taxId)' qo'shiladi. 'taxId' (STIR) va nom bo'yicha tenglikni 'super.equals()' orqali tekshiring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Client(String name)' sinfini va 'equals(Object o)' metodini yarating.\n2. 'CorporateClient(String name, String taxId)' sinfini 'extends Client' qiling va 'equals(Object o)' da 'super.equals(o)' ni chaqiring.\n3. 'Main' metodida 'CorporateClient c1 = new CorporateClient(\"Uzum Tech\", \"300123456\");' va 'CorporateClient c2 = new CorporateClient(\"Uzum Tech\", \"300123456\");' yarating.\n4. 'c1.equals(c2)' ni tekshiring.\n5. Konsolga: \"Korporativ mijozlar bir xil: true\" deb chop eting.",
      "en": "📖 Real-World Scenario\nB2B clients verify identity through corporate registration names combined with tax IDs.\n\n📋 Steps\n1. Create Client(name) with equals().\n2. CorporateClient(name, taxId) extends Client with equals() chaining super.equals().\n3. In Main, instantiate matching corporate clients and print: \"Korporativ mijozlar bir xil: true\".",
      "ru": "📖 Контекст\nСравнение корпоративных клиентов по названию и ИНН через super.equals().\n\n📋 Шаги\n1. Создайте Client(name) с equals().\n2. Создайте CorporateClient(name, taxId) extends Client с super.equals().\n3. В main выведите: \"Korporativ mijozlar bir xil: true\"."
    },
    "requirements": {
      "classes": [
        "Client",
        "CorporateClient",
        "Main"
      ],
      "fields": [
        {
          "name": "name",
          "type": "String"
        },
        {
          "name": "taxId",
          "type": "String"
        }
      ],
      "privateFields": [
        "name",
        "taxId"
      ],
      "methods": [
        "equals"
      ],
      "constructors": [
        "Client",
        "CorporateClient"
      ],
      "keywords": [
        "extends",
        "super.equals",
        "@Override"
      ]
    },
    "starterCode": "class Client {\n    \n}\n\nclass CorporateClient extends Client {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Client {\n    private String name;\n\n    public Client(String name) {\n        this.name = name;\n    }\n\n    public String getName() {\n        return name;\n    }\n\n    @Override\n    public boolean equals(Object o) {\n        if (this == o) return true;\n        if (o == null || !(o instanceof Client)) return false;\n        Client other = (Client) o;\n        return this.name.equals(other.name);\n    }\n}\n\nclass CorporateClient extends Client {\n    private String taxId;\n\n    public CorporateClient(String name, String taxId) {\n        super(name);\n        this.taxId = taxId;\n    }\n\n    public String getTaxId() {\n        return taxId;\n    }\n\n    @Override\n    public boolean equals(Object o) {\n        if (!super.equals(o)) return false;\n        if (!(o instanceof CorporateClient)) return false;\n        CorporateClient other = (CorporateClient) o;\n        return this.taxId.equals(other.taxId);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CorporateClient c1 = new CorporateClient(\"Uzum Tech\", \"300123456\");\n        CorporateClient c2 = new CorporateClient(\"Uzum Tech\", \"300123456\");\n        System.out.println(\"Korporativ mijozlar bir xil: \" + c1.equals(c2));\n    }\n}",
    "detailedSolution": {
      "uz": "Tijorat tizimlarida barcha subyektlar uchun equals() metodining to'g'ri ishlashi ma'lumotlar bazasi va oraliq qatlamda sinxronlikni ta'minlaydi.",
      "en": "Robust equals methods underpin reliable data synchronization across enterprise service tiers.",
      "ru": "Надежные методы equals обеспечивают согласованность данных на всех уровнях корпоративного сервиса."
    }
  },
  {
    "id": 100,
    "tier": 4,
    "tierName": "4-Bosqich: Object Metodlari va Real Sanoat Keyslari",
    "sector": "91-120",
    "title": {
      "uz": "100. WIUT Workshop — AcademicStaff va VisitingPractitioner Soatlik Maosh Hisobi",
      "en": "100. WIUT Workshop — AcademicStaff & VisitingPractitioner Hourly Compensation",
      "ru": "100. WIUT Workshop — Расчет почасовой оплаты AcademicStaff и VisitingPractitioner"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT Workshop faylida ko'rsatilgan haqiqiy arxitektura: 'AcademicStaff' (name, department) ota sinf bo'lib, 'VisitingPractitioner' (hoursPerWeek, hourlyRate) bola sinf hisoblanadi. 'calculateWeeklyPay()' metodini polimorfik tarzda hisoblang!\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'AcademicStaff' sinfini e'lon qiling: 'private String name;' va 'private String department;' maydonlari, konstruktor va getterlari.\n2. 'VisitingPractitioner' sinfini 'extends AcademicStaff' qiling: 'private int hoursPerWeek;' va 'private double hourlyRate;' maydonlari, konstruktorda 'super(name, department);'.\n3. 'VisitingPractitioner' ichida 'public double calculateWeeklyPay()' metodini yozing: 'hoursPerWeek * hourlyRate' qaytarsin.\n4. 'Main' metodida 'VisitingPractitioner vp = new VisitingPractitioner(\"Sardor Nurmatov\", \"School of Computing\", 12, 150000.0);' obyektini yarating.\n5. Konsolga: \"Haftalik ish haqi: \" + vp.calculateWeeklyPay() + \" so'm\" deb chop eting.",
      "en": "📖 Real-World Scenario\nWIUT Week 3 Workshop: AcademicStaff superclass extended by VisitingPractitioner calculating weekly wages.\n\n📋 Steps\n1. Create AcademicStaff(name, department).\n2. VisitingPractitioner(name, department, hoursPerWeek, hourlyRate) extends AcademicStaff.\n3. Add calculateWeeklyPay() returning hoursPerWeek * hourlyRate.\n4. In Main, instantiate VisitingPractitioner and print: \"Haftalik ish haqi: 1800000.0 so'm\".",
      "ru": "📖 Контекст\nРеальный воркшоп WIUT: базовый класс AcademicStaff и подкласс VisitingPractitioner для расчета оплаты.\n\n📋 Шаги\n1. Создайте AcademicStaff(name, department).\n2. VisitingPractitioner extends AcademicStaff с методом calculateWeeklyPay().\n3. В main выведите: \"Haftalik ish haqi: 1800000.0 so'm\"."
    },
    "requirements": {
      "classes": [
        "AcademicStaff",
        "VisitingPractitioner",
        "Main"
      ],
      "fields": [
        {
          "name": "name",
          "type": "String"
        },
        {
          "name": "department",
          "type": "String"
        },
        {
          "name": "hoursPerWeek",
          "type": "int"
        },
        {
          "name": "hourlyRate",
          "type": "double"
        }
      ],
      "privateFields": [
        "name",
        "department",
        "hoursPerWeek",
        "hourlyRate"
      ],
      "methods": [
        "calculateWeeklyPay",
        "getName",
        "getDepartment"
      ],
      "constructors": [
        "AcademicStaff",
        "VisitingPractitioner"
      ],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class AcademicStaff {\n    \n}\n\nclass VisitingPractitioner extends AcademicStaff {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class AcademicStaff {\n    private String name;\n    private String department;\n\n    public AcademicStaff(String name, String department) {\n        this.name = name;\n        this.department = department;\n    }\n\n    public String getName() {\n        return name;\n    }\n\n    public String getDepartment() {\n        return department;\n    }\n}\n\nclass VisitingPractitioner extends AcademicStaff {\n    private int hoursPerWeek;\n    private double hourlyRate;\n\n    public VisitingPractitioner(String name, String department, int hoursPerWeek, double hourlyRate) {\n        super(name, department);\n        this.hoursPerWeek = hoursPerWeek;\n        this.hourlyRate = hourlyRate;\n    }\n\n    public double calculateWeeklyPay() {\n        return hoursPerWeek * hourlyRate;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        VisitingPractitioner vp = new VisitingPractitioner(\"Sardor Nurmatov\", \"School of Computing\", 12, 150000.0);\n        System.out.println(\"Haftalik ish haqi: \" + vp.calculateWeeklyPay() + \" so'm\");\n    }\n}",
    "detailedSolution": {
      "uz": "Ushbu vazifa to'g'ridan-to'g'ri WIUT darsliklaridagi AcademicStaff modelini real ishlab chiqarish darajasida mustahkamlaydi.",
      "en": "Directly aligns with WIUT curriculum materials and coursework staff management architectures.",
      "ru": "Напрямую соответствует учебным материалам WIUT и курсовому проекту по управлению персоналом."
    }
  },
  {
    "id": 101,
    "tier": 4,
    "tierName": "4-Bosqich: Object Metodlari va Real Sanoat Keyslari",
    "sector": "91-120",
    "title": {
      "uz": "101. WIUT Modullari — CourseModule Bilan AcademicStaff Kompozitsiyasi",
      "en": "101. WIUT Academic Modules — CourseModule Aggregating AcademicStaff",
      "ru": "101. Модули WIUT — Агрегация AcademicStaff внутри CourseModule"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT modul tizimida 'CourseModule' (moduleCode, moduleTitle) o'z ichida mas'ul o'qituvchini ('AcademicStaff leader') kompozitsiya/agregatsiya qiladi!\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'AcademicStaff(String name)' sinfini e'lon qiling.\n2. 'CourseModule' sinfini e'lon qiling: 'private String code;' va 'private AcademicStaff leader;' maydonlari, konstruktori va getterlari.\n3. 'Main' metodida 'AcademicStaff prof = new AcademicStaff(\"Dr. Nilufar\");' obyektini yarating.\n4. 'CourseModule mod = new CourseModule(\"5COSC018C\", prof);' modulini tuzing.\n5. Konsolga: \"Modul: 5COSC018C | Rahbar: \" + mod.getLeader().getName() deb chop eting.",
      "en": "📖 Real-World Scenario\nWIUT academic module structure aggregates module leader inside CourseModule.\n\n📋 Steps\n1. Create AcademicStaff(name).\n2. Create CourseModule(code, leader) with getters.\n3. In Main: AcademicStaff prof = new AcademicStaff(\"Dr. Nilufar\").\n4. Instantiate CourseModule and print: \"Modul: 5COSC018C | Rahbar: Dr. Nilufar\".",
      "ru": "📖 Контекст\nУчебный модуль WIUT включает руководителя AcademicStaff.\n\n📋 Шаги\n1. Создайте AcademicStaff(name).\n2. Создайте CourseModule(code, leader).\n3. В main выведите: \"Modul: 5COSC018C | Rahbar: Dr. Nilufar\"."
    },
    "requirements": {
      "classes": [
        "AcademicStaff",
        "CourseModule",
        "Main"
      ],
      "fields": [
        {
          "name": "name",
          "type": "String"
        },
        {
          "name": "code",
          "type": "String"
        },
        {
          "name": "leader",
          "type": "AcademicStaff"
        }
      ],
      "privateFields": [
        "name",
        "code",
        "leader"
      ],
      "methods": [
        "getName",
        "getCode",
        "getLeader"
      ],
      "constructors": [
        "AcademicStaff",
        "CourseModule"
      ]
    },
    "starterCode": "class AcademicStaff {\n    \n}\n\nclass CourseModule {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class AcademicStaff {\n    private String name;\n\n    public AcademicStaff(String name) {\n        this.name = name;\n    }\n\n    public String getName() {\n        return name;\n    }\n}\n\nclass CourseModule {\n    private String code;\n    private AcademicStaff leader;\n\n    public CourseModule(String code, AcademicStaff leader) {\n        this.code = code;\n        this.leader = leader;\n    }\n\n    public String getCode() {\n        return code;\n    }\n\n    public AcademicStaff getLeader() {\n        return leader;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AcademicStaff prof = new AcademicStaff(\"Dr. Nilufar\");\n        CourseModule mod = new CourseModule(\"5COSC018C\", prof);\n        System.out.println(\"Modul: \" + mod.getCode() + \" | Rahbar: \" + mod.getLeader().getName());\n    }\n}",
    "detailedSolution": {
      "uz": "Modul va o'qituvchi o'rtasidagi bog'liqlik merosxo'rlik emas, balki to'g'ri tanlangan 'has-a' munosabatidir.",
      "en": "Models module-instructor interaction cleanly via composition ('has-a') rather than inappropriate inheritance.",
      "ru": "Отношение между модулем и преподавателем реализовано через композицию (has-a)."
    }
  },
  {
    "id": 102,
    "tier": 4,
    "tierName": "4-Bosqich: Object Metodlari va Real Sanoat Keyslari",
    "sector": "91-120",
    "title": {
      "uz": "102. WIUT Fakultet Baholash — Researcher va Lecturer Ish Yuklamasi Polimorfizmi",
      "en": "102. WIUT Faculty Workload — Polymorphic Workload for Researchers & Lecturers",
      "ru": "102. Факультет WIUT — Полиморфизм рабочей нагрузки преподавателей и исследователей"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nUniversitetda barcha o'qituvchilar 'AcademicStaff' bo'lib, 'Lecturer' 20 soat dars bersa, 'Researcher' 5 soat dars berib 15 soat ilmiy maqola yozadi. 'getWorkloadSummary()' metodini har bir sinf uchun polimorfik tarzda e'lon qiling.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'AcademicStaff' sinfida 'public String getWorkloadSummary()' metodi 'Umumiy universitet xizmati' qaytarsin.\n2. 'Lecturer' sinfini 'extends AcademicStaff' qilib 'getWorkloadSummary()' da '20 soat ma'ruza va seminar' qaytaring.\n3. 'Researcher' sinfini 'extends AcademicStaff' qilib 'getWorkloadSummary()' da '15 soat ilmiy izlanish va 5 soat dars' qaytaring.\n4. 'Main' metodida 'AcademicStaff staff = new Researcher();' havolasini oching.\n5. Konsolga: \"Xodim vazifasi: \" + staff.getWorkloadSummary() deb chop eting.",
      "en": "📖 Real-World Scenario\nWIUT academic roles distribute teaching versus research workloads polymorphically.\n\n📋 Steps\n1. AcademicStaff defines getWorkloadSummary().\n2. Lecturer overrides with \"20 soat ma'ruza va seminar\".\n3. Researcher overrides with \"15 soat ilmiy izlanish va 5 soat dars\".\n4. In Main, assign Researcher to AcademicStaff reference and print summary.",
      "ru": "📖 Контекст\nПолиморфное распределение учебной и исследовательской нагрузки сотрудников WIUT.\n\n📋 Шаги\n1. Создайте AcademicStaff с getWorkloadSummary().\n2. Lecturer и Researcher переопределяют этот метод.\n3. В main выведите: \"Xodim vazifasi: 15 soat ilmiy izlanish va 5 soat dars\"."
    },
    "requirements": {
      "classes": [
        "AcademicStaff",
        "Lecturer",
        "Researcher",
        "Main"
      ],
      "methods": [
        "getWorkloadSummary"
      ],
      "keywords": [
        "extends",
        "@Override"
      ]
    },
    "starterCode": "class AcademicStaff {\n    \n}\n\nclass Lecturer extends AcademicStaff {\n    \n}\n\nclass Researcher extends AcademicStaff {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class AcademicStaff {\n    public String getWorkloadSummary() {\n        return \"Umumiy universitet xizmati\";\n    }\n}\n\nclass Lecturer extends AcademicStaff {\n    @Override\n    public String getWorkloadSummary() {\n        return \"20 soat ma'ruza va seminar\";\n    }\n}\n\nclass Researcher extends AcademicStaff {\n    @Override\n    public String getWorkloadSummary() {\n        return \"15 soat ilmiy izlanish va 5 soat dars\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AcademicStaff staff = new Researcher();\n        System.out.println(\"Xodim vazifasi: \" + staff.getWorkloadSummary());\n    }\n}",
    "detailedSolution": {
      "uz": "Universitet boshqaruvi bitta AcademicStaff to'plami orqali turli ixtisoslikdagi olimlarning ish yuklamalarini avtomatlashtirilgan tarzda hisoblaydi.",
      "en": "Dynamic workload dispatch simplifies administrative reporting across diverse faculty tracks.",
      "ru": "Динамическая диспетчеризация упрощает отчетность по различным академическим направлениям."
    }
  },
  {
    "id": 103,
    "tier": 4,
    "tierName": "4-Bosqich: Object Metodlari va Real Sanoat Keyslari",
    "sector": "91-120",
    "title": {
      "uz": "103. E-Commerce — ExpressOrder va Standart Buyurtma Yetkazish Narxi",
      "en": "103. E-Commerce — StandardOrder vs ExpressOrder Delivery Pricing",
      "ru": "103. E-Commerce — Расчет стоимости стандартного и экспресс-заказа"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nUzum Market internet do'konida 'Order' (subtotal) ota sinf bo'lsa, 'ExpressOrder' (extraSpeedFee) 2 soat ichida yetkazish uchun qo'shimcha to'lov oladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Order' sinfini e'lon qiling: 'private double subtotal;' maydoni, konstruktor va getteri. 'public double calculateTotal()' metodi 'subtotal' qaytarsin.\n2. 'ExpressOrder' sinfini 'extends Order' qiling: 'private double extraSpeedFee;' maydoni, konstruktorda 'super(subtotal);'. 'calculateTotal()' ni '@Override' qilib 'super.calculateTotal() + extraSpeedFee' qaytaring.\n3. 'Main' metodida 'ExpressOrder eo = new ExpressOrder(150000.0, 25000.0);' obyektini yarating.\n4. 'eo.calculateTotal()' metodini chaqiring.\n5. Konsolga: \"Tezkor buyurtma yakuniy summasi: 175000.0\" deb chop eting.",
      "en": "📖 Real-World Scenario\nOnline retail orders add express courier surcharges polymorphically via super.calculateTotal().\n\n📋 Steps\n1. Create Order(subtotal) with calculateTotal().\n2. ExpressOrder(subtotal, extraSpeedFee) extends Order and overrides calculateTotal() chaining super.calculateTotal().\n3. In Main, instantiate ExpressOrder(150000.0, 25000.0).\n4. Print: \"Tezkor buyurtma yakuniy summasi: 175000.0\".",
      "ru": "📖 Контекст\nЭкспресс-заказ добавляет надбавку за срочность через super.calculateTotal().\n\n📋 Шаги\n1. Создайте Order(subtotal) с calculateTotal().\n2. ExpressOrder extends Order переопределяет calculateTotal(), вызывая super.calculateTotal() + extraSpeedFee.\n3. В main выведите: \"Tezkor buyurtma yakuniy summasi: 175000.0\"."
    },
    "requirements": {
      "classes": [
        "Order",
        "ExpressOrder",
        "Main"
      ],
      "fields": [
        {
          "name": "subtotal",
          "type": "double"
        },
        {
          "name": "extraSpeedFee",
          "type": "double"
        }
      ],
      "privateFields": [
        "subtotal",
        "extraSpeedFee"
      ],
      "methods": [
        "calculateTotal",
        "getSubtotal"
      ],
      "constructors": [
        "Order",
        "ExpressOrder"
      ],
      "keywords": [
        "extends",
        "super",
        "@Override"
      ]
    },
    "starterCode": "class Order {\n    \n}\n\nclass ExpressOrder extends Order {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Order {\n    private double subtotal;\n\n    public Order(double subtotal) {\n        this.subtotal = subtotal;\n    }\n\n    public double getSubtotal() {\n        return subtotal;\n    }\n\n    public double calculateTotal() {\n        return subtotal;\n    }\n}\n\nclass ExpressOrder extends Order {\n    private double extraSpeedFee;\n\n    public ExpressOrder(double subtotal, double extraSpeedFee) {\n        super(subtotal);\n        this.extraSpeedFee = extraSpeedFee;\n    }\n\n    @Override\n    public double calculateTotal() {\n        return super.calculateTotal() + extraSpeedFee;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ExpressOrder eo = new ExpressOrder(150000.0, 25000.0);\n        System.out.println(\"Tezkor buyurtma yakuniy summasi: \" + eo.calculateTotal());\n    }\n}",
    "detailedSolution": {
      "uz": "super.calculateTotal() chaqirig'i bazaviy buyurtma narxini olib keladi, bola sinf faqat o'ziga xos tezlik to'lovini qo'shadi.",
      "en": "Chaining super.calculateTotal() promotes code reuse and guards core calculation logic.",
      "ru": "Вызов super.calculateTotal() переиспользует базовый расчет, добавляя лишь надбавку за скорость."
    }
  },
  {
    "id": 104,
    "tier": 4,
    "tierName": "4-Bosqich: Object Metodlari va Real Sanoat Keyslari",
    "sector": "91-120",
    "title": {
      "uz": "104. Xalqaro Bojxona — InternationalOrder va Bojxona Boji Hisobi",
      "en": "104. Cross-Border Trade — InternationalOrder Customs Duty Calculation",
      "ru": "104. Международная торговля — Расчет таможенной пошлины в InternationalOrder"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nChet eldan tovar buyurtma qilinganda ('InternationalOrder'), bazaviy summa ustiga davlat bojxona boji ('customsDuty') qo'shiladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Order' sinfini e'lon qiling: 'private double subtotal;' maydoni, konstruktor va getteri. 'calculateTotal()' metodi 'subtotal' qaytarsin.\n2. 'InternationalOrder' sinfini 'extends Order' qiling: 'private double customsDuty;' maydoni, konstruktorda 'super(subtotal);'. 'calculateTotal()' da 'super.calculateTotal() + customsDuty' qaytaring.\n3. 'Main' metodida 'InternationalOrder io = new InternationalOrder(500000.0, 75000.0);' obyektini yarating.\n4. 'io.calculateTotal()' metodini chaqiring.\n5. Konsolga: \"Xalqaro buyurtma narxi: 575000.0\" deb chop eting.",
      "en": "📖 Real-World Scenario\nInternational orders append cross-border customs duties to order base totals.\n\n📋 Steps\n1. Create Order(subtotal) with calculateTotal().\n2. InternationalOrder(subtotal, customsDuty) extends Order overriding calculateTotal().\n3. In Main, instantiate InternationalOrder(500000.0, 75000.0) and print: \"Xalqaro buyurtma narxi: 575000.0\".",
      "ru": "📖 Контекст\nМеждународный заказ добавляет таможенную пошлину к общей стоимости.\n\n📋 Шаги\n1. Создайте Order и InternationalOrder extends Order.\n2. Переопределите calculateTotal(), добавив customsDuty.\n3. В main выведите: \"Xalqaro buyurtma narxi: 575000.0\"."
    },
    "requirements": {
      "classes": [
        "Order",
        "InternationalOrder",
        "Main"
      ],
      "fields": [
        {
          "name": "subtotal",
          "type": "double"
        },
        {
          "name": "customsDuty",
          "type": "double"
        }
      ],
      "privateFields": [
        "subtotal",
        "customsDuty"
      ],
      "methods": [
        "calculateTotal"
      ],
      "constructors": [
        "Order",
        "InternationalOrder"
      ],
      "keywords": [
        "extends",
        "super",
        "@Override"
      ]
    },
    "starterCode": "class Order {\n    \n}\n\nclass InternationalOrder extends Order {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Order {\n    private double subtotal;\n\n    public Order(double subtotal) {\n        this.subtotal = subtotal;\n    }\n\n    public double calculateTotal() {\n        return subtotal;\n    }\n}\n\nclass InternationalOrder extends Order {\n    private double customsDuty;\n\n    public InternationalOrder(double subtotal, double customsDuty) {\n        super(subtotal);\n        this.customsDuty = customsDuty;\n    }\n\n    @Override\n    public double calculateTotal() {\n        return super.calculateTotal() + customsDuty;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        InternationalOrder io = new InternationalOrder(500000.0, 75000.0);\n        System.out.println(\"Xalqaro buyurtma narxi: \" + io.calculateTotal());\n    }\n}",
    "detailedSolution": {
      "uz": "Merosxo'rlik yordamida standart va xalqaro buyurtmalar bir xil 'calculateTotal()' interfeysi bilan ishlaydi.",
      "en": "Enables unified checkout handling across domestic and international purchase orders.",
      "ru": "Обеспечивает единый интерфейс оформления как локальных, так и международных заказов."
    }
  },
  {
    "id": 105,
    "tier": 4,
    "tierName": "4-Bosqich: Object Metodlari va Real Sanoat Keyslari",
    "sector": "91-120",
    "title": {
      "uz": "105. Ombor Savdosi — WholesaleOrder (Ulgurji Chegirma) Polimorfizmi",
      "en": "105. Wholesale Distribution — WholesaleOrder Bulk Discount Polymorphism",
      "ru": "105. Оптовая торговля — Оптовая скидка в WholesaleOrder"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nUlgurji mijozlar uchun 'WholesaleOrder' sinfida 10% chegirma taqdim etiladi: 'subtotal * 0.90'.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Order' sinfini e'lon qiling: 'private double subtotal;' maydoni, konstruktor va getteri. 'calculateTotal()' da 'subtotal' qaytarsin.\n2. 'WholesaleOrder' sinfini 'extends Order' qiling: konstruktorda 'super(subtotal);'. 'calculateTotal()' da 'getSubtotal() * 0.90' qaytaring.\n3. 'Main' metodida 'Order order = new WholesaleOrder(1000000.0);' polimorfik havolasini yarating.\n4. 'order.calculateTotal()' metodini chaqiring.\n5. Konsolga: \"Ulgurji xarid summasi: 900000.0\" deb chop eting.",
      "en": "📖 Real-World Scenario\nWholesale orders polymorphically apply 10% volume discounts to gross totals.\n\n📋 Steps\n1. Create Order(subtotal) with calculateTotal().\n2. WholesaleOrder extends Order overriding calculateTotal() returning getSubtotal() * 0.90.\n3. In Main, assign WholesaleOrder to Order reference and call calculateTotal().\n4. Print: \"Ulgurji xarid summasi: 900000.0\".",
      "ru": "📖 Контекст\nОптовый заказ применяет 10% скидку от базовой стоимости.\n\n📋 Шаги\n1. Создайте Order и WholesaleOrder extends Order.\n2. В WholesaleOrder верните getSubtotal() * 0.90 в calculateTotal().\n3. В main выведите: \"Ulgurji xarid summasi: 900000.0\"."
    },
    "requirements": {
      "classes": [
        "Order",
        "WholesaleOrder",
        "Main"
      ],
      "fields": [
        {
          "name": "subtotal",
          "type": "double"
        }
      ],
      "privateFields": [
        "subtotal"
      ],
      "methods": [
        "calculateTotal",
        "getSubtotal"
      ],
      "constructors": [
        "Order",
        "WholesaleOrder"
      ],
      "keywords": [
        "extends",
        "super",
        "@Override"
      ]
    },
    "starterCode": "class Order {\n    \n}\n\nclass WholesaleOrder extends Order {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Order {\n    private double subtotal;\n\n    public Order(double subtotal) {\n        this.subtotal = subtotal;\n    }\n\n    public double getSubtotal() {\n        return subtotal;\n    }\n\n    public double calculateTotal() {\n        return subtotal;\n    }\n}\n\nclass WholesaleOrder extends Order {\n    public WholesaleOrder(double subtotal) {\n        super(subtotal);\n    }\n\n    @Override\n    public double calculateTotal() {\n        return getSubtotal() * 0.90;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Order order = new WholesaleOrder(1000000.0);\n        System.out.println(\"Ulgurji xarid summasi: \" + order.calculateTotal());\n    }\n}",
    "detailedSolution": {
      "uz": "Polimorfizm orqali savdo tizimi mijozning jismoniy yoki yuridik ekanligiga qarab to'lov summasini dinamik aniqlaydi.",
      "en": "Dynamic dispatch cleanly decouples retail pricing from wholesale promotional calculations.",
      "ru": "Динамическая диспетчеризация изолирует розничные цены от оптовых алгоритмов расчета."
    }
  },
  {
    "id": 106,
    "tier": 4,
    "tierName": "4-Bosqich: Object Metodlari va Real Sanoat Keyslari",
    "sector": "91-120",
    "title": {
      "uz": "106. Bank Hisoblari — CheckingAccount va Overdraft Limitidan Pul Yechish",
      "en": "106. FinTech Banking — CheckingAccount with Overdraft Protection",
      "ru": "106. Финтех — CheckingAccount со снятием в овердрафт"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nJoriy hisob raqamida ('CheckingAccount') mijoz o'z balansidan tashqari ruxsat etilgan limit ('overdraftLimit') doirasida ham pul yecha oladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Account' sinfini e'lon qiling: 'private double balance;' maydoni, konstruktor va getteri. 'public boolean withdraw(double amount)' metodida agar 'balance >= amount' bo'lsa balansdan ayirib 'true', aks holda 'false' qaytarsin.\n2. 'CheckingAccount' sinfini 'extends Account' qiling: 'private double overdraftLimit;' maydoni, konstruktorda 'super(balance);'. 'withdraw(double amount)' metodini '@Override' qiling: agar 'getBalance() + overdraftLimit >= amount' bo'lsa 'true', aks holda 'false' qaytarsin.\n3. 'Main' metodida 'CheckingAccount ca = new CheckingAccount(100000.0, 50000.0);' obyektini yarating.\n4. 'ca.withdraw(120000.0)' metodini chaqiring.\n5. Konsolga: \"Overdraft orqali yechish muvaffaqiyatli: true\" deb chop eting.",
      "en": "📖 Real-World Scenario\nChecking accounts allow withdrawals beyond balance within an authorized overdraft limit.\n\n📋 Steps\n1. Create Account(balance) with withdraw(amount).\n2. CheckingAccount(balance, overdraftLimit) extends Account overriding withdraw(amount) checking balance + overdraftLimit >= amount.\n3. In Main, instantiate CheckingAccount(100000.0, 50000.0) and call withdraw(120000.0).\n4. Print: \"Overdraft orqali yechish muvaffaqiyatli: true\".",
      "ru": "📖 Контекст\nТекущий счет разрешает снятие сверх баланса в пределах овердрафта.\n\n📋 Шаги\n1. Создайте Account(balance) с методом withdraw.\n2. CheckingAccount extends Account переопределяет withdraw с учетом overdraftLimit.\n3. В main вызовите ca.withdraw(120000.0) и выведите: \"Overdraft orqali yechish muvaffaqiyatli: true\"."
    },
    "requirements": {
      "classes": [
        "Account",
        "CheckingAccount",
        "Main"
      ],
      "fields": [
        {
          "name": "balance",
          "type": "double"
        },
        {
          "name": "overdraftLimit",
          "type": "double"
        }
      ],
      "privateFields": [
        "balance",
        "overdraftLimit"
      ],
      "methods": [
        "withdraw",
        "getBalance"
      ],
      "constructors": [
        "Account",
        "CheckingAccount"
      ],
      "keywords": [
        "extends",
        "super",
        "@Override"
      ]
    },
    "starterCode": "class Account {\n    \n}\n\nclass CheckingAccount extends Account {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Account {\n    private double balance;\n\n    public Account(double balance) {\n        this.balance = balance;\n    }\n\n    public double getBalance() {\n        return balance;\n    }\n\n    public boolean withdraw(double amount) {\n        if (balance >= amount) {\n            balance -= amount;\n            return true;\n        }\n        return false;\n    }\n}\n\nclass CheckingAccount extends Account {\n    private double overdraftLimit;\n\n    public CheckingAccount(double balance, double overdraftLimit) {\n        super(balance);\n        this.overdraftLimit = overdraftLimit;\n    }\n\n    @Override\n    public boolean withdraw(double amount) {\n        if (getBalance() + overdraftLimit >= amount) {\n            return true;\n        }\n        return false;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CheckingAccount ca = new CheckingAccount(100000.0, 50000.0);\n        boolean ok = ca.withdraw(120000.0);\n        System.out.println(\"Overdraft orqali yechish muvaffaqiyatli: \" + ok);\n    }\n}",
    "detailedSolution": {
      "uz": "Bank hisoblarini modellashtirishda ota sinfning inkapsulyatsiyasiga putur yetkazmagan holda biznes qoidalarini kengaytirishga misoldir.",
      "en": "Demonstrates clean domain extension while preserving encapsulation of base balance fields.",
      "ru": "Демонстрирует расширение бизнес-правил без нарушения инкапсуляции базового баланса."
    }
  },
  {
    "id": 107,
    "tier": 4,
    "tierName": "4-Bosqich: Object Metodlari va Real Sanoat Keyslari",
    "sector": "91-120",
    "title": {
      "uz": "107. Omonat Tizimi — SavingsAccount va Yillik Foiz Daromadini Qo'shish",
      "en": "107. Wealth Management — SavingsAccount Annual Interest Accrual",
      "ru": "107. Управление депозитами — Начисление процентов в SavingsAccount"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nOmonat hisobida ('SavingsAccount') har yili omonat foizi ('interestRate') hisoblanadi va daromad qaytariladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Account' sinfini e'lon qiling: 'private double balance;' maydoni, konstruktor va getteri.\n2. 'SavingsAccount' sinfini 'extends Account' qiling: 'private double interestRate;' maydoni, konstruktorda 'super(balance);'.\n3. 'SavingsAccount' ichida 'public double calculateAnnualInterest()' metodini yozing: 'getBalance() * interestRate' qaytarsin.\n4. 'Main' metodida 'SavingsAccount sa = new SavingsAccount(10000000.0, 0.20);' obyektini yarating.\n5. Konsolga: \"Yillik omonat daromadi: 2000000.0 so'm\" deb chop eting.",
      "en": "📖 Real-World Scenario\nSavings accounts calculate annual earned interest based on balance and interestRate.\n\n📋 Steps\n1. Create Account(balance) with getter.\n2. SavingsAccount(balance, interestRate) extends Account with calculateAnnualInterest() returning getBalance() * interestRate.\n3. In Main, instantiate SavingsAccount(10000000.0, 0.20) and print: \"Yillik omonat daromadi: 2000000.0 so'm\".",
      "ru": "📖 Контекст\nСберегательный счет начисляет годовой доход по процентной ставке.\n\n📋 Шаги\n1. Создайте Account(balance).\n2. SavingsAccount extends Account с методом calculateAnnualInterest().\n3. В main выведите: \"Yillik omonat daromadi: 2000000.0 so'm\"."
    },
    "requirements": {
      "classes": [
        "Account",
        "SavingsAccount",
        "Main"
      ],
      "fields": [
        {
          "name": "balance",
          "type": "double"
        },
        {
          "name": "interestRate",
          "type": "double"
        }
      ],
      "privateFields": [
        "balance",
        "interestRate"
      ],
      "methods": [
        "calculateAnnualInterest",
        "getBalance"
      ],
      "constructors": [
        "Account",
        "SavingsAccount"
      ],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class Account {\n    \n}\n\nclass SavingsAccount extends Account {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Account {\n    private double balance;\n\n    public Account(double balance) {\n        this.balance = balance;\n    }\n\n    public double getBalance() {\n        return balance;\n    }\n}\n\nclass SavingsAccount extends Account {\n    private double interestRate;\n\n    public SavingsAccount(double balance, double interestRate) {\n        super(balance);\n        this.interestRate = interestRate;\n    }\n\n    public double calculateAnnualInterest() {\n        return getBalance() * interestRate;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SavingsAccount sa = new SavingsAccount(10000000.0, 0.20);\n        System.out.println(\"Yillik omonat daromadi: \" + sa.calculateAnnualInterest() + \" so'm\");\n    }\n}",
    "detailedSolution": {
      "uz": "SavingsAccount ota sinfning private maydonini getBalance() orqali oladi va o'zining foiz hisoblash mantiqini yuritadi.",
      "en": "SavingsAccount accesses superclass balance via encapsulated getter to calculate compound returns cleanly.",
      "ru": "SavingsAccount обращается к балансу через геттер, инкапсулируя расчет процентов."
    }
  },
  {
    "id": 108,
    "tier": 4,
    "tierName": "4-Bosqich: Object Metodlari va Real Sanoat Keyslari",
    "sector": "91-120",
    "title": {
      "uz": "108. Muddatli Depozit — TermDepositAccount va Muddatidan Oldin Yechish Jarimasi",
      "en": "108. Term Deposits — TermDepositAccount with Early Withdrawal Penalty",
      "ru": "108. Срочный депозит — Штраф за досрочное снятие в TermDepositAccount"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nMuddatli depozitda ('TermDepositAccount') omonat muddati tugamasdan pul yechilsa, 2% jarima ushlab qolinadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Account' sinfini e'lon qiling: 'private double balance;' maydoni, konstruktor va getteri.\n2. 'TermDepositAccount' sinfini 'extends Account' qiling: 'private double penaltyRate;' maydoni, konstruktorda 'super(balance);'.\n3. 'TermDepositAccount' ichida 'public double calculateNetPayout()' metodini yozing: 'getBalance() * (1.0 - penaltyRate)' qaytarsin.\n4. 'Main' metodida 'TermDepositAccount tda = new TermDepositAccount(5000000.0, 0.02);' obyektini yarating.\n5. Konsolga: \"Jarima chegirilgan to'lov: 4900000.0 so'm\" deb chop eting.",
      "en": "📖 Real-World Scenario\nTerm deposits assess early cancellation penalty deductions on payout balances.\n\n📋 Steps\n1. Create Account(balance).\n2. TermDepositAccount(balance, penaltyRate) extends Account with calculateNetPayout() returning getBalance() * (1.0 - penaltyRate).\n3. In Main, instantiate TermDepositAccount and print: \"Jarima chegirilgan to'lov: 4900000.0 so'm\".",
      "ru": "📖 Контекст\nСрочный депозит удерживает штраф при досрочном расторжении.\n\n📋 Шаги\n1. Создайте Account и TermDepositAccount extends Account.\n2. Реализуйте calculateNetPayout() с вычетом штрафа.\n3. В main выведите: \"Jarima chegirilgan to'lov: 4900000.0 so'm\"."
    },
    "requirements": {
      "classes": [
        "Account",
        "TermDepositAccount",
        "Main"
      ],
      "fields": [
        {
          "name": "balance",
          "type": "double"
        },
        {
          "name": "penaltyRate",
          "type": "double"
        }
      ],
      "privateFields": [
        "balance",
        "penaltyRate"
      ],
      "methods": [
        "calculateNetPayout",
        "getBalance"
      ],
      "constructors": [
        "Account",
        "TermDepositAccount"
      ],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class Account {\n    \n}\n\nclass TermDepositAccount extends Account {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Account {\n    private double balance;\n\n    public Account(double balance) {\n        this.balance = balance;\n    }\n\n    public double getBalance() {\n        return balance;\n    }\n}\n\nclass TermDepositAccount extends Account {\n    private double penaltyRate;\n\n    public TermDepositAccount(double balance, double penaltyRate) {\n        super(balance);\n        this.penaltyRate = penaltyRate;\n    }\n\n    public double calculateNetPayout() {\n        return getBalance() * (1.0 - penaltyRate);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TermDepositAccount tda = new TermDepositAccount(5000000.0, 0.02);\n        System.out.println(\"Jarima chegirilgan to'lov: \" + tda.calculateNetPayout() + \" so'm\");\n    }\n}",
    "detailedSolution": {
      "uz": "Turli xil bank hisoblarining merosxo'rlik orqali loyihalanishi bank arxitekturasini tushunishni osonlashtiradi.",
      "en": "Hierarchical deposit account modeling structures financial domain components reliably.",
      "ru": "Иерархическое моделирование депозитов структурирует финансовую бизнес-логику."
    }
  },
  {
    "id": 109,
    "tier": 4,
    "tierName": "4-Bosqich: Object Metodlari va Real Sanoat Keyslari",
    "sector": "91-120",
    "title": {
      "uz": "109. Yuk Logistikasi — HeavyTruck va Tonnalab Yuk Sig'imi",
      "en": "109. Freight Logistics — HeavyTruck Payload Capacity Inheritance",
      "ru": "109. Грузовая логистика — Грузоподъемность HeavyTruck"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nLogistika kompaniyasida 'TransportVehicle' (licensePlate) ota sinf bo'lsa, og'ir yuk mashinasi 'HeavyTruck' (cargoTons) bola sinf hisoblanadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'TransportVehicle' sinfini e'lon qiling: 'private String licensePlate;' maydoni, konstruktor va getteri.\n2. 'HeavyTruck' sinfini 'extends TransportVehicle' qiling: 'private double cargoTons;' maydoni, konstruktorda 'super(licensePlate);'. Getter yozing.\n3. 'Main' metodida 'HeavyTruck ht = new HeavyTruck(\"01 777 AAA\", 25.5);' obyektini yarating.\n4. Konsolga: \"Raqami: 01 777 AAA | Yuk sig'imi: 25.5 tonna\" deb chop eting.",
      "en": "📖 Real-World Scenario\nCommercial freight dispatch tracks heavy truck tonnage atop base vehicle license registrations.\n\n📋 Steps\n1. Create TransportVehicle(licensePlate).\n2. HeavyTruck(licensePlate, cargoTons) extends TransportVehicle with getters.\n3. In Main, instantiate HeavyTruck and print: \"Raqami: 01 777 AAA | Yuk sig'imi: 25.5 tonna\".",
      "ru": "📖 Контекст\nЛогистическая служба отслеживает грузовики по номеру и грузоподъемности.\n\n📋 Шаги\n1. Создайте TransportVehicle(licensePlate).\n2. HeavyTruck(licensePlate, cargoTons) extends TransportVehicle.\n3. В main выведите: \"Raqami: 01 777 AAA | Yuk sig'imi: 25.5 tonna\"."
    },
    "requirements": {
      "classes": [
        "TransportVehicle",
        "HeavyTruck",
        "Main"
      ],
      "fields": [
        {
          "name": "licensePlate",
          "type": "String"
        },
        {
          "name": "cargoTons",
          "type": "double"
        }
      ],
      "privateFields": [
        "licensePlate",
        "cargoTons"
      ],
      "methods": [
        "getLicensePlate",
        "getCargoTons"
      ],
      "constructors": [
        "TransportVehicle",
        "HeavyTruck"
      ],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class TransportVehicle {\n    \n}\n\nclass HeavyTruck extends TransportVehicle {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class TransportVehicle {\n    private String licensePlate;\n\n    public TransportVehicle(String licensePlate) {\n        this.licensePlate = licensePlate;\n    }\n\n    public String getLicensePlate() {\n        return licensePlate;\n    }\n}\n\nclass HeavyTruck extends TransportVehicle {\n    private double cargoTons;\n\n    public HeavyTruck(String licensePlate, double cargoTons) {\n        super(licensePlate);\n        this.cargoTons = cargoTons;\n    }\n\n    public double getCargoTons() {\n        return cargoTons;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        HeavyTruck ht = new HeavyTruck(\"01 777 AAA\", 25.5);\n        System.out.println(\"Raqami: \" + ht.getLicensePlate() + \" | Yuk sig'imi: \" + ht.getCargoTons() + \" tonna\");\n    }\n}",
    "detailedSolution": {
      "uz": "Avtotransport parki obyektlari davlat raqami bo'yicha umumlashtirilib, xususiy xarakteristikalari avlod sinflarda saqlanadi.",
      "en": "Standardizes license tracking on base fleet level while encapsulating specialized payload metrics.",
      "ru": "Стандартизирует учет госномеров на базовом уровне, сохраняя грузоподъемность в подклассе."
    }
  },
  {
    "id": 110,
    "tier": 4,
    "tierName": "4-Bosqich: Object Metodlari va Real Sanoat Keyslari",
    "sector": "91-120",
    "title": {
      "uz": "110. Yashil Shahar — ElectricDeliveryVan va Kilometriga Energiya Sarfi",
      "en": "110. Green Logistics — ElectricDeliveryVan Energy Consumption Tracking",
      "ru": "110. Эко-логистика — Расход энергии в ElectricDeliveryVan"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nElektr yetkazib berish furgoni ('ElectricDeliveryVan') akkumulyator sig'imi (batteryKwh) va 1 km uchun elektr narxi (costPerKm) asosida xarajatni hisoblaydi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'TransportVehicle' sinfini e'lon qiling: 'private String licensePlate;' maydoni, konstruktor va getteri.\n2. 'ElectricDeliveryVan' sinfini 'extends TransportVehicle' qiling: 'private double costPerKm;' maydoni, konstruktorda 'super(licensePlate);'.\n3. 'ElectricDeliveryVan' ichida 'public double calculateDeliveryCost(double km)' metodi 'km * costPerKm' qaytarsin.\n4. 'Main' metodida 'ElectricDeliveryVan edv = new ElectricDeliveryVan(\"01 999 ECO\", 450.0);' obyektini yarating.\n5. Konsolga: \"100 km uchun xarajat: 45000.0 so'm\" deb chop eting.",
      "en": "📖 Real-World Scenario\nElectric delivery vans compute energy expense per kilometer.\n\n📋 Steps\n1. Create TransportVehicle(licensePlate).\n2. ElectricDeliveryVan(licensePlate, costPerKm) extends TransportVehicle with calculateDeliveryCost(km).\n3. In Main, instantiate ElectricDeliveryVan and calculate 100 km trip cost.\n4. Print: \"100 km uchun xarajat: 45000.0 so'm\".",
      "ru": "📖 Контекст\nЭлектрофургон рассчитывает стоимость поездки по тарифу за километр.\n\n📋 Шаги\n1. Создайте TransportVehicle и ElectricDeliveryVan extends TransportVehicle.\n2. Добавьте метод calculateDeliveryCost(km).\n3. В main выведите: \"100 km uchun xarajat: 45000.0 so'm\"."
    },
    "requirements": {
      "classes": [
        "TransportVehicle",
        "ElectricDeliveryVan",
        "Main"
      ],
      "fields": [
        {
          "name": "licensePlate",
          "type": "String"
        },
        {
          "name": "costPerKm",
          "type": "double"
        }
      ],
      "privateFields": [
        "licensePlate",
        "costPerKm"
      ],
      "methods": [
        "calculateDeliveryCost"
      ],
      "constructors": [
        "TransportVehicle",
        "ElectricDeliveryVan"
      ],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class TransportVehicle {\n    \n}\n\nclass ElectricDeliveryVan extends TransportVehicle {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class TransportVehicle {\n    private String licensePlate;\n\n    public TransportVehicle(String licensePlate) {\n        this.licensePlate = licensePlate;\n    }\n\n    public String getLicensePlate() {\n        return licensePlate;\n    }\n}\n\nclass ElectricDeliveryVan extends TransportVehicle {\n    private double costPerKm;\n\n    public ElectricDeliveryVan(String licensePlate, double costPerKm) {\n        super(licensePlate);\n        this.costPerKm = costPerKm;\n    }\n\n    public double calculateDeliveryCost(double km) {\n        return km * costPerKm;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ElectricDeliveryVan edv = new ElectricDeliveryVan(\"01 999 ECO\", 450.0);\n        double cost = edv.calculateDeliveryCost(100.0);\n        System.out.println(\"100 km uchun xarajat: \" + cost + \" so'm\");\n    }\n}",
    "detailedSolution": {
      "uz": "Elektr transportining yoqilg'i tejamkorligi biznes metodlari orqali to'g'ri modellashtiriladi.",
      "en": "Models electric vehicle operational efficiencies through dedicated subclass methods.",
      "ru": "Моделирует энергоэффективность электротранспорта через методы подкласса."
    }
  },
  {
    "id": 111,
    "tier": 4,
    "tierName": "4-Bosqich: Object Metodlari va Real Sanoat Keyslari",
    "sector": "91-120",
    "title": {
      "uz": "111. AeroLogistika — DeliveryDrone va Parvoz Masofasi Tekshiruvi",
      "en": "111. Drone Logistics — DeliveryDrone Max Flight Range Verification",
      "ru": "111. Дрон-доставка — Проверка дальности полета DeliveryDrone"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nYetkazib berish droni ('DeliveryDrone') maksimal parvoz masofasiga ('maxRangeKm') ega bo'lib, buyurtma masofasi yetishini 'canReach(double distance)' orqali tekshiradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'TransportVehicle' sinfini e'lon qiling: 'private String licensePlate;' maydoni, konstruktor va getteri.\n2. 'DeliveryDrone' sinfini 'extends TransportVehicle' qiling: 'private double maxRangeKm;' maydoni, konstruktorda 'super(licensePlate);'.\n3. 'DeliveryDrone' ichida 'public boolean canReach(double km)' metodida 'km <= maxRangeKm' qaytarsin.\n4. 'Main' metodida 'DeliveryDrone drone = new DeliveryDrone(\"DRONE-X1\", 20.0);' obyektini yarating.\n5. Konsolga: \"15 km masofaga yetib boradi: \" + drone.canReach(15.0) deb chop eting.",
      "en": "📖 Real-World Scenario\nDelivery drones verify if a destination coordinate falls within maximum battery flight radius.\n\n📋 Steps\n1. Create TransportVehicle(licensePlate).\n2. DeliveryDrone(licensePlate, maxRangeKm) extends TransportVehicle with canReach(km).\n3. In Main, instantiate DeliveryDrone and verify 15.0 km range check.\n4. Print: \"15 km masofaga yetib boradi: true\".",
      "ru": "📖 Контекст\nДрон-курьер проверяет, укладывается ли дистанция в лимит дальности полета.\n\n📋 Шаги\n1. Создайте TransportVehicle и DeliveryDrone extends TransportVehicle.\n2. Реализуйте canReach(km).\n3. В main выведите: \"15 km masofaga yetib boradi: true\"."
    },
    "requirements": {
      "classes": [
        "TransportVehicle",
        "DeliveryDrone",
        "Main"
      ],
      "fields": [
        {
          "name": "licensePlate",
          "type": "String"
        },
        {
          "name": "maxRangeKm",
          "type": "double"
        }
      ],
      "privateFields": [
        "licensePlate",
        "maxRangeKm"
      ],
      "methods": [
        "canReach"
      ],
      "constructors": [
        "TransportVehicle",
        "DeliveryDrone"
      ],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class TransportVehicle {\n    \n}\n\nclass DeliveryDrone extends TransportVehicle {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class TransportVehicle {\n    private String licensePlate;\n\n    public TransportVehicle(String licensePlate) {\n        this.licensePlate = licensePlate;\n    }\n\n    public String getLicensePlate() {\n        return licensePlate;\n    }\n}\n\nclass DeliveryDrone extends TransportVehicle {\n    private double maxRangeKm;\n\n    public DeliveryDrone(String licensePlate, double maxRangeKm) {\n        super(licensePlate);\n        this.maxRangeKm = maxRangeKm;\n    }\n\n    public boolean canReach(double km) {\n        return km <= maxRangeKm;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DeliveryDrone drone = new DeliveryDrone(\"DRONE-X1\", 20.0);\n        System.out.println(\"15 km masofaga yetib boradi: \" + drone.canReach(15.0));\n    }\n}",
    "detailedSolution": {
      "uz": "Avlod sinflar o'zlarining texnik cheklovlariga xos biznes tekshiruvlarini (pre-conditions) mustaqil bajaradi.",
      "en": "Encapsulates vehicle-specific operational constraints cleanly within child classes.",
      "ru": "Инкапсулирует технические ограничения аппарата внутри подкласса."
    }
  },
  {
    "id": 112,
    "tier": 4,
    "tierName": "4-Bosqich: Object Metodlari va Real Sanoat Keyslari",
    "sector": "91-120",
    "title": {
      "uz": "112. Aloqa Kompaniyasi — PrepaidTariff va Kunlik To'lov Hisobi",
      "en": "112. Telecom Billing — PrepaidTariff Daily Deductions",
      "ru": "112. Телеком — Ежедневное списание в PrepaidTariff"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nUcell yoki Beeline aloqa operatorida 'TelecomTariff' (tariffName) bazaviy tarif bo'lib, oldindan to'lovli tarifda ('PrepaidTariff') har kuni 'dailyFee' miqdorida mablag' yechiladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'TelecomTariff' sinfini e'lon qiling: 'private String tariffName;' maydoni, konstruktor va getteri.\n2. 'PrepaidTariff' sinfini 'extends TelecomTariff' qiling: 'private double dailyFee;' maydoni, konstruktorda 'super(tariffName);'.\n3. 'PrepaidTariff' ichida 'public double calculateCostForDays(int days)' metodini yozing: 'days * dailyFee' qaytarsin.\n4. 'Main' metodida 'PrepaidTariff pt = new PrepaidTariff(\"Kayfiyat\", 1500.0);' obyektini yarating.\n5. Konsolga: \"30 kunlik narx: 45000.0 so'm\" deb chop eting.",
      "en": "📖 Real-World Scenario\nPrepaid cellular subscriptions calculate costs proportional to active days.\n\n📋 Steps\n1. Create TelecomTariff(tariffName).\n2. PrepaidTariff(tariffName, dailyFee) extends TelecomTariff with calculateCostForDays(days).\n3. In Main, instantiate PrepaidTariff(\"Kayfiyat\", 1500.0) and print: \"30 kunlik narx: 45000.0 so'm\".",
      "ru": "📖 Контекст\nПредоплатный тариф мобильного оператора рассчитывает стоимость по дням.\n\n📋 Шаги\n1. Создайте TelecomTariff и PrepaidTariff extends TelecomTariff.\n2. Реализуйте calculateCostForDays(days).\n3. В main выведите: \"30 kunlik narx: 45000.0 so'm\"."
    },
    "requirements": {
      "classes": [
        "TelecomTariff",
        "PrepaidTariff",
        "Main"
      ],
      "fields": [
        {
          "name": "tariffName",
          "type": "String"
        },
        {
          "name": "dailyFee",
          "type": "double"
        }
      ],
      "privateFields": [
        "tariffName",
        "dailyFee"
      ],
      "methods": [
        "calculateCostForDays",
        "getTariffName"
      ],
      "constructors": [
        "TelecomTariff",
        "PrepaidTariff"
      ],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class TelecomTariff {\n    \n}\n\nclass PrepaidTariff extends TelecomTariff {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class TelecomTariff {\n    private String tariffName;\n\n    public TelecomTariff(String tariffName) {\n        this.tariffName = tariffName;\n    }\n\n    public String getTariffName() {\n        return tariffName;\n    }\n}\n\nclass PrepaidTariff extends TelecomTariff {\n    private double dailyFee;\n\n    public PrepaidTariff(String tariffName, double dailyFee) {\n        super(tariffName);\n        this.dailyFee = dailyFee;\n    }\n\n    public double calculateCostForDays(int days) {\n        return days * dailyFee;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PrepaidTariff pt = new PrepaidTariff(\"Kayfiyat\", 1500.0);\n        System.out.println(\"30 kunlik narx: \" + pt.calculateCostForDays(30) + \" so'm\");\n    }\n}",
    "detailedSolution": {
      "uz": "Tarif nomini ota sinfdan meros olib, hisob-kitob qoidalarini bola sinfda amalga oshirish kod arxitekturasini soddalashtiradi.",
      "en": "Inherits tariff metadata while dedicating cost calculation logic to concrete plans.",
      "ru": "Наследует название тарифа, реализуя логику расчета в подклассе."
    }
  },
  {
    "id": 113,
    "tier": 4,
    "tierName": "4-Bosqich: Object Metodlari va Real Sanoat Keyslari",
    "sector": "91-120",
    "title": {
      "uz": "113. Postpaid Aloqa — PostpaidTariff va Kredit Chegarasini Tekshirish",
      "en": "113. Postpaid Cellular — Credit Limit Guarding in PostpaidTariff",
      "ru": "113. Постоплатный тариф — Контроль кредитного лимита в PostpaidTariff"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nKeyin to'lanadigan ('PostpaidTariff') tarifda mijozga ma'lum kredit limiti ('creditLimit') beriladi. Balans ushbu limitdan pastga tushib ketmasligi kerak.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'TelecomTariff' sinfini e'lon qiling: 'private String tariffName;' maydoni, konstruktor va getteri.\n2. 'PostpaidTariff' sinfini 'extends TelecomTariff' qiling: 'private double creditLimit;' maydoni, konstruktorda 'super(tariffName);'.\n3. 'PostpaidTariff' ichida 'public boolean isWithinLimit(double currentDebt)' metodida 'currentDebt <= creditLimit' qaytarsin.\n4. 'Main' metodida 'PostpaidTariff pt = new PostpaidTariff(\"Biznes Postpaid\", 100000.0);' obyektini yarating.\n5. Konsolga: \"Qarz limit ichidami: \" + pt.isWithinLimit(75000.0) deb chop eting.",
      "en": "📖 Real-World Scenario\nPostpaid mobile subscribers are allowed usage up to their contractual credit limit.\n\n📋 Steps\n1. Create TelecomTariff(tariffName).\n2. PostpaidTariff(tariffName, creditLimit) extends TelecomTariff with isWithinLimit(currentDebt).\n3. In Main, instantiate PostpaidTariff and check debt of 75000.0 against 100000.0 limit.\n4. Print: \"Qarz limit ichidami: true\".",
      "ru": "📖 Контекст\nПостоплатный тариф разрешает связь в пределах установленного кредитного лимита.\n\n📋 Шаги\n1. Создайте TelecomTariff и PostpaidTariff extends TelecomTariff.\n2. Реализуйте isWithinLimit(currentDebt).\n3. В main выведите: \"Qarz limit ichidami: true\"."
    },
    "requirements": {
      "classes": [
        "TelecomTariff",
        "PostpaidTariff",
        "Main"
      ],
      "fields": [
        {
          "name": "tariffName",
          "type": "String"
        },
        {
          "name": "creditLimit",
          "type": "double"
        }
      ],
      "privateFields": [
        "tariffName",
        "creditLimit"
      ],
      "methods": [
        "isWithinLimit"
      ],
      "constructors": [
        "TelecomTariff",
        "PostpaidTariff"
      ],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class TelecomTariff {\n    \n}\n\nclass PostpaidTariff extends TelecomTariff {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class TelecomTariff {\n    private String tariffName;\n\n    public TelecomTariff(String tariffName) {\n        this.tariffName = tariffName;\n    }\n\n    public String getTariffName() {\n        return tariffName;\n    }\n}\n\nclass PostpaidTariff extends TelecomTariff {\n    private double creditLimit;\n\n    public PostpaidTariff(String tariffName, double creditLimit) {\n        super(tariffName);\n        this.creditLimit = creditLimit;\n    }\n\n    public boolean isWithinLimit(double currentDebt) {\n        return currentDebt <= creditLimit;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PostpaidTariff pt = new PostpaidTariff(\"Biznes Postpaid\", 100000.0);\n        System.out.println(\"Qarz limit ichidami: \" + pt.isWithinLimit(75000.0));\n    }\n}",
    "detailedSolution": {
      "uz": "Kredit nazorati faqat postpaid tariflariga tegishli bo'lgani sababli, bu mantiq to'g'ri tarzda alohida sinfga joylashtirilgan.",
      "en": "Isolates credit-risk validation logic strictly to postpaid contract subclasses.",
      "ru": "Изолирует логику кредитного риска исключительно в подклассе постоплатных тарифов."
    }
  },
  {
    "id": 114,
    "tier": 4,
    "tierName": "4-Bosqich: Object Metodlari va Real Sanoat Keyslari",
    "sector": "91-120",
    "title": {
      "uz": "114. Korporativ Aloqa — CorporateTariff va Umumiy Gigabayt Pulidan Taqsimlash",
      "en": "114. Corporate Telco — CorporateTariff Shared Data Pool Allocation",
      "ru": "114. Корпоративная связь — Распределение общего пула ГБ в CorporateTariff"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nKorxonalarga mo'ljallangan 'CorporateTariff' umumiy gigabayt jamg'armasiga ('sharedGigabytes') ega bo'lib, har bir xodimga o'rtacha trafikni hisoblaydi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'TelecomTariff' sinfini e'lon qiling: 'private String tariffName;' maydoni, konstruktor va getteri.\n2. 'CorporateTariff' sinfini 'extends TelecomTariff' qiling: 'private int sharedGigabytes;' maydoni, konstruktorda 'super(tariffName);'.\n3. 'CorporateTariff' ichida 'public double calculatePerUserGb(int userCount)' metodida '((double) sharedGigabytes) / userCount' qaytarsin.\n4. 'Main' metodida 'CorporateTariff ct = new CorporateTariff(\"WIUT Staff Pool\", 500);' obyektini yarating.\n5. Konsolga: \"Har bir xodimga: 25.0 GB\" deb chop eting.",
      "en": "📖 Real-World Scenario\nCorporate telecom accounts compute shared internet quota allocations per employee.\n\n📋 Steps\n1. Create TelecomTariff(tariffName).\n2. CorporateTariff(tariffName, sharedGigabytes) extends TelecomTariff with calculatePerUserGb(userCount).\n3. In Main, instantiate CorporateTariff and compute 500 GB for 20 users.\n4. Print: \"Har bir xodimga: 25.0 GB\".",
      "ru": "📖 Контекст\nКорпоративный тариф делит общий пул гигабайтов на количество сотрудников.\n\n📋 Шаги\n1. Создайте TelecomTariff и CorporateTariff extends TelecomTariff.\n2. Реализуйте calculatePerUserGb(userCount).\n3. В main выведите: \"Har bir xodimga: 25.0 GB\"."
    },
    "requirements": {
      "classes": [
        "TelecomTariff",
        "CorporateTariff",
        "Main"
      ],
      "fields": [
        {
          "name": "tariffName",
          "type": "String"
        },
        {
          "name": "sharedGigabytes",
          "type": "int"
        }
      ],
      "privateFields": [
        "tariffName",
        "sharedGigabytes"
      ],
      "methods": [
        "calculatePerUserGb"
      ],
      "constructors": [
        "TelecomTariff",
        "CorporateTariff"
      ],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class TelecomTariff {\n    \n}\n\nclass CorporateTariff extends TelecomTariff {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class TelecomTariff {\n    private String tariffName;\n\n    public TelecomTariff(String tariffName) {\n        this.tariffName = tariffName;\n    }\n\n    public String getTariffName() {\n        return tariffName;\n    }\n}\n\nclass CorporateTariff extends TelecomTariff {\n    private int sharedGigabytes;\n\n    public CorporateTariff(String tariffName, int sharedGigabytes) {\n        super(tariffName);\n        this.sharedGigabytes = sharedGigabytes;\n    }\n\n    public double calculatePerUserGb(int userCount) {\n        return ((double) sharedGigabytes) / userCount;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CorporateTariff ct = new CorporateTariff(\"WIUT Staff Pool\", 500);\n        double gb = ct.calculatePerUserGb(20);\n        System.out.println(\"Har bir xodimga: \" + gb + \" GB\");\n    }\n}",
    "detailedSolution": {
      "uz": "Korporativ mantiqni alohida sinfga chiqarish umumiy tarif tizimini toza va barqaror saqlaydi.",
      "en": "Dedicating corporate pooling to a derived class preserves simplicity in personal subscription workflows.",
      "ru": "Выделение корпоративного пула в отдельный класс сохраняет простоту базовой тарифной системы."
    }
  },
  {
    "id": 115,
    "tier": 4,
    "tierName": "4-Bosqich: Object Metodlari va Real Sanoat Keyslari",
    "sector": "91-120",
    "title": {
      "uz": "115. Milliy To'lovlar — PaymeGateway Integratsiyasi va Komissiya Hisobi",
      "en": "115. National Payments — PaymeGateway Integration and Fee Computation",
      "ru": "115. Национальные платежи — Интеграция PaymeGateway и расчет комиссии"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nPayme to'lov shlyuzida 'PaymentGateway' (gatewayName) ota sinfiga 'merchantId' maydoni qo'shiladi va 1% tranzaksiya komissiyasi ('calculateFee(double amount)' -> amount * 0.01) olinadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'PaymentGateway' sinfini e'lon qiling: 'private String gatewayName;' maydoni, konstruktor va getteri.\n2. 'PaymeGateway' sinfini 'extends PaymentGateway' qiling: 'private String merchantId;' maydoni, konstruktorda 'super(gatewayName);'.\n3. 'PaymeGateway' ichida 'public double calculateFee(double amount)' metodi 'amount * 0.01' qaytarsin.\n4. 'Main' metodida 'PaymeGateway pg = new PaymeGateway(\"Payme Direct\", \"M-7788\");' obyektini yarating.\n5. Konsolga: \"Payme komissiyasi: 1000.0 so'm\" deb chop eting.",
      "en": "📖 Real-World Scenario\nPayme gateway integration appends merchant credentials and calculates 1% merchant processing fees.\n\n📋 Steps\n1. Create PaymentGateway(gatewayName).\n2. PaymeGateway(gatewayName, merchantId) extends PaymentGateway with calculateFee(amount) returning amount * 0.01.\n3. In Main, instantiate PaymeGateway and calculate fee on 100000.0.\n4. Print: \"Payme komissiyasi: 1000.0 so'm\".",
      "ru": "📖 Контекст\nПлатежный шлюз Payme с merchantId и комиссией 1%.\n\n📋 Шаги\n1. Создайте PaymentGateway и PaymeGateway extends PaymentGateway.\n2. Реализуйте calculateFee(amount) с комиссией 1%.\n3. В main выведите: \"Payme komissiyasi: 1000.0 so'm\"."
    },
    "requirements": {
      "classes": [
        "PaymentGateway",
        "PaymeGateway",
        "Main"
      ],
      "fields": [
        {
          "name": "gatewayName",
          "type": "String"
        },
        {
          "name": "merchantId",
          "type": "String"
        }
      ],
      "privateFields": [
        "gatewayName",
        "merchantId"
      ],
      "methods": [
        "calculateFee",
        "getGatewayName"
      ],
      "constructors": [
        "PaymentGateway",
        "PaymeGateway"
      ],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class PaymentGateway {\n    \n}\n\nclass PaymeGateway extends PaymentGateway {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class PaymentGateway {\n    private String gatewayName;\n\n    public PaymentGateway(String gatewayName) {\n        this.gatewayName = gatewayName;\n    }\n\n    public String getGatewayName() {\n        return gatewayName;\n    }\n}\n\nclass PaymeGateway extends PaymentGateway {\n    private String merchantId;\n\n    public PaymeGateway(String gatewayName, merchantId) {\n        super(gatewayName);\n        this.merchantId = merchantId;\n    }\n\n    public double calculateFee(double amount) {\n        return amount * 0.01;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymeGateway pg = new PaymeGateway(\"Payme Direct\", \"M-7788\");\n        double fee = pg.calculateFee(100000.0);\n        System.out.println(\"Payme komissiyasi: \" + fee + \" so'm\");\n    }\n}",
    "detailedSolution": {
      "uz": "To'lov provayderlarining o'ziga xos komissiyalari va merchant identifikatorlari alohida shlyuz sinflarida mustaqil boshqariladi.",
      "en": "Encapsulates individual gateway settlement terms cleanly inside dedicated provider subclasses.",
      "ru": "Инкапсулирует уникальные условия комиссии каждого провайдера в специализированном подклассе."
    }
  },
  {
    "id": 116,
    "tier": 4,
    "tierName": "4-Bosqich: Object Metodlari va Real Sanoat Keyslari",
    "sector": "91-120",
    "title": {
      "uz": "116. Click Integratsiyasi — ClickGateway va ServiceId Bilan To'lov",
      "en": "116. Click Payments — ClickGateway Implementation with ServiceId",
      "ru": "116. Платежи Click — Реализация ClickGateway с ServiceId"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nClick to'lov tizimida har bir servis provayderi o'zining 'serviceId' raqamiga ega bo'lib, tranzaksiya havolasini tayyorlaydi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'PaymentGateway' sinfini e'lon qiling: 'private String gatewayName;' maydoni, konstruktor va getteri.\n2. 'ClickGateway' sinfini 'extends PaymentGateway' qiling: 'private int serviceId;' maydoni, konstruktorda 'super(gatewayName);'.\n3. 'ClickGateway' ichida 'public String generatePaymentUrl(String invoiceId)' metodi \"https://my.click.uz/pay?service=\" + serviceId + \"&invoice=\" + invoiceId qaytarsin.\n4. 'Main' metodida 'ClickGateway cg = new ClickGateway(\"Click Uzbekistan\", 9922);' obyektini yarating.\n5. Konsolga: \"Havola: \" + cg.generatePaymentUrl(\"INV-404\") deb chop eting.",
      "en": "📖 Real-World Scenario\nClick gateway generates checkout redirection URLs based on registered serviceId.\n\n📋 Steps\n1. Create PaymentGateway(gatewayName).\n2. ClickGateway(gatewayName, serviceId) extends PaymentGateway with generatePaymentUrl(invoiceId).\n3. In Main, instantiate ClickGateway and generate invoice URL.\n4. Print: \"Havola: https://my.click.uz/pay?service=9922&invoice=INV-404\".",
      "ru": "📖 Контекст\nПлатежный шлюз Click формирует ссылку на оплату по serviceId.\n\n📋 Шаги\n1. Создайте PaymentGateway и ClickGateway extends PaymentGateway.\n2. Реализуйте generatePaymentUrl(invoiceId).\n3. В main выведите сформированную ссылку."
    },
    "requirements": {
      "classes": [
        "PaymentGateway",
        "ClickGateway",
        "Main"
      ],
      "fields": [
        {
          "name": "gatewayName",
          "type": "String"
        },
        {
          "name": "serviceId",
          "type": "int"
        }
      ],
      "privateFields": [
        "gatewayName",
        "serviceId"
      ],
      "methods": [
        "generatePaymentUrl"
      ],
      "constructors": [
        "PaymentGateway",
        "ClickGateway"
      ],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class PaymentGateway {\n    \n}\n\nclass ClickGateway extends PaymentGateway {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class PaymentGateway {\n    private String gatewayName;\n\n    public PaymentGateway(String gatewayName) {\n        this.gatewayName = gatewayName;\n    }\n\n    public String getGatewayName() {\n        return gatewayName;\n    }\n}\n\nclass ClickGateway extends PaymentGateway {\n    private int serviceId;\n\n    public ClickGateway(String gatewayName, int serviceId) {\n        super(gatewayName);\n        this.serviceId = serviceId;\n    }\n\n    public String generatePaymentUrl(String invoiceId) {\n        return \"https://my.click.uz/pay?service=\" + serviceId + \"&invoice=\" + invoiceId;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ClickGateway cg = new ClickGateway(\"Click Uzbekistan\", 9922);\n        System.out.println(\"Havola: \" + cg.generatePaymentUrl(\"INV-404\"));\n    }\n}",
    "detailedSolution": {
      "uz": "To'lov havolalarini generatsiya qilish algoritmi umumiy interfeys orqali chaqiriladi va xavfsiz URL shakllantiradi.",
      "en": "Standardizes checkout URL formatting across payment provider subclasses.",
      "ru": "Стандартизирует формирование платежных ссылок через специализированный класс."
    }
  },
  {
    "id": 117,
    "tier": 4,
    "tierName": "4-Bosqich: Object Metodlari va Real Sanoat Keyslari",
    "sector": "91-120",
    "title": {
      "uz": "117. Muddatli To'lov — UzumNasiyaGateway va Oylik To'lov Grafigi",
      "en": "117. BNPL Financing — UzumNasiyaGateway Installment Calculator",
      "ru": "117. Рассрочка BNPL — График платежей в UzumNasiyaGateway"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nUzum Nasiya to'lov shlyuzida ('UzumNasiyaGateway') xaridor tovar narxini belgilangan muddat ('months', masalan 12 oy) davomida teng bo'lib to'laydi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'PaymentGateway' sinfini e'lon qiling: 'private String gatewayName;' maydoni, konstruktor va getteri.\n2. 'UzumNasiyaGateway' sinfini 'extends PaymentGateway' qiling: 'private int months;' maydoni, konstruktorda 'super(gatewayName);'.\n3. 'UzumNasiyaGateway' ichida 'public double calculateMonthlyInstallment(double totalAmount)' metodi 'totalAmount / months' qaytarsin.\n4. 'Main' metodida 'UzumNasiyaGateway un = new UzumNasiyaGateway(\"Uzum Nasiya\", 12);' obyektini yarating.\n5. Konsolga: \"Oylik to'lov: 100000.0 so'm\" deb chop eting.",
      "en": "📖 Real-World Scenario\nBuy Now Pay Later (BNPL) gateways calculate monthly installment amounts.\n\n📋 Steps\n1. Create PaymentGateway(gatewayName).\n2. UzumNasiyaGateway(gatewayName, months) extends PaymentGateway with calculateMonthlyInstallment(totalAmount).\n3. In Main, instantiate UzumNasiyaGateway with 12 months and evaluate 1200000.0 amount.\n4. Print: \"Oylik to'lov: 100000.0 so'm\".",
      "ru": "📖 Контекст\nШлюз рассрочки BNPL вычисляет ежемесячный платеж.\n\n📋 Шаги\n1. Создайте PaymentGateway и UzumNasiyaGateway extends PaymentGateway.\n2. Реализуйте calculateMonthlyInstallment(totalAmount).\n3. В main выведите: \"Oylik to'lov: 100000.0 so'm\"."
    },
    "requirements": {
      "classes": [
        "PaymentGateway",
        "UzumNasiyaGateway",
        "Main"
      ],
      "fields": [
        {
          "name": "gatewayName",
          "type": "String"
        },
        {
          "name": "months",
          "type": "int"
        }
      ],
      "privateFields": [
        "gatewayName",
        "months"
      ],
      "methods": [
        "calculateMonthlyInstallment"
      ],
      "constructors": [
        "PaymentGateway",
        "UzumNasiyaGateway"
      ],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class PaymentGateway {\n    \n}\n\nclass UzumNasiyaGateway extends PaymentGateway {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class PaymentGateway {\n    private String gatewayName;\n\n    public PaymentGateway(String gatewayName) {\n        this.gatewayName = gatewayName;\n    }\n\n    public String getGatewayName() {\n        return gatewayName;\n    }\n}\n\nclass UzumNasiyaGateway extends PaymentGateway {\n    private int months;\n\n    public UzumNasiyaGateway(String gatewayName, int months) {\n        super(gatewayName);\n        this.months = months;\n    }\n\n    public double calculateMonthlyInstallment(double totalAmount) {\n        return totalAmount / months;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        UzumNasiyaGateway un = new UzumNasiyaGateway(\"Uzum Nasiya\", 12);\n        double monthly = un.calculateMonthlyInstallment(1200000.0);\n        System.out.println(\"Oylik to'lov: \" + monthly + \" so'm\");\n    }\n}",
    "detailedSolution": {
      "uz": "BNPL modeli to'lov shlyuzi ierarxiyasiga tabiiy tarzda mos tushadi va korxona tizimini kengaytiradi.",
      "en": "BNPL models integrate smoothly into the overarching payment gateway hierarchy.",
      "ru": "Модель рассрочки органично вписывается в общую иерархию платежных шлюзов."
    }
  },
  {
    "id": 118,
    "tier": 4,
    "tierName": "4-Bosqich: Object Metodlari va Real Sanoat Keyslari",
    "sector": "91-120",
    "title": {
      "uz": "118. FastFood Taomnoma — Burger va Beverage Mahsulotlari Ierarxiyasi",
      "en": "118. FastFood Menu — Burger & Beverage Item Hierarchy",
      "ru": "118. Меню фастфуда — Иерархия блюд Burger и Beverage"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nRestoran taomnomasida barcha taomlar 'FoodItem' (name, price) ota sinfiga tegishli. 'Burger' (kotletlar soni: 'pattyCount') va 'Beverage' (hajmi: 'volumeMl') sinflari undan meros oladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'FoodItem' sinfini e'lon qiling: 'private String name;' va 'private double price;' maydonlari, konstruktor va getterlari.\n2. 'Burger' sinfini 'extends FoodItem' qiling: 'private int pattyCount;' maydoni, konstruktorda 'super(name, price);'. Getter yozing.\n3. 'Beverage' sinfini 'extends FoodItem' qiling: 'private int volumeMl;' maydoni, konstruktorda 'super(name, price);'. Getter yozing.\n4. 'Main' metodida 'Burger b = new Burger(\"Cheeseburger\", 35000.0, 2);' va 'Beverage bev = new Beverage(\"Kola\", 12000.0, 500);' obyektlarini yarating.\n5. Konsolga: \"Burger: Cheeseburger (2 ta kotlet) | Ichimlik: Kola (500 ml)\" deb chop eting.",
      "en": "📖 Real-World Scenario\nRestaurant items inherit price and name from base FoodItem while holding specialized preparation metrics.\n\n📋 Steps\n1. Create FoodItem(name, price).\n2. Burger(name, price, pattyCount) and Beverage(name, price, volumeMl) extend FoodItem.\n3. In Main, instantiate both and print formatted menu line.",
      "ru": "📖 Контекст\nБлюда ресторана наследуют название и цену от базового класса FoodItem.\n\n📋 Шаги\n1. Создайте FoodItem(name, price).\n2. Burger и Beverage наследуются от FoodItem.\n3. В main выведите: \"Burger: Cheeseburger (2 ta kotlet) | Ichimlik: Kola (500 ml)\"."
    },
    "requirements": {
      "classes": [
        "FoodItem",
        "Burger",
        "Beverage",
        "Main"
      ],
      "fields": [
        {
          "name": "name",
          "type": "String"
        },
        {
          "name": "price",
          "type": "double"
        },
        {
          "name": "pattyCount",
          "type": "int"
        },
        {
          "name": "volumeMl",
          "type": "int"
        }
      ],
      "privateFields": [
        "name",
        "price",
        "pattyCount",
        "volumeMl"
      ],
      "methods": [
        "getName",
        "getPrice",
        "getPattyCount",
        "getVolumeMl"
      ],
      "constructors": [
        "FoodItem",
        "Burger",
        "Beverage"
      ],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class FoodItem {\n    \n}\n\nclass Burger extends FoodItem {\n    \n}\n\nclass Beverage extends FoodItem {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class FoodItem {\n    private String name;\n    private double price;\n\n    public FoodItem(String name, double price) {\n        this.name = name;\n        this.price = price;\n    }\n\n    public String getName() {\n        return name;\n    }\n\n    public double getPrice() {\n        return price;\n    }\n}\n\nclass Burger extends FoodItem {\n    private int pattyCount;\n\n    public Burger(String name, double price, int pattyCount) {\n        super(name, price);\n        this.pattyCount = pattyCount;\n    }\n\n    public int getPattyCount() {\n        return pattyCount;\n    }\n}\n\nclass Beverage extends FoodItem {\n    private int volumeMl;\n\n    public Beverage(String name, double price, int volumeMl) {\n        super(name, price);\n        this.volumeMl = volumeMl;\n    }\n\n    public int getVolumeMl() {\n        return volumeMl;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Burger b = new Burger(\"Cheeseburger\", 35000.0, 2);\n        Beverage bev = new Beverage(\"Kola\", 12000.0, 500);\n        System.out.println(\"Burger: \" + b.getName() + \" (\" + b.getPattyCount() + \" ta kotlet) | Ichimlik: \" + bev.getName() + \" (\" + bev.getVolumeMl() + \" ml)\");\n    }\n}",
    "detailedSolution": {
      "uz": "Taomnoma elementlarini to'g'ri ierarxiyada ajratish keyingi kompozitsiya qadamlarida (masalan, Combo to'plamlar tuzishda) asos bo'ladi.",
      "en": "Structuring distinct menu items correctly lays the foundation for composite meal bundles.",
      "ru": "Правильное построение иерархии меню служит основой для составных комбо-наборов."
    }
  },
  {
    "id": 119,
    "tier": 4,
    "tierName": "4-Bosqich: Object Metodlari va Real Sanoat Keyslari",
    "sector": "91-120",
    "title": {
      "uz": "119. Kombo To'plam — ComboMeal Sinfida Burger va Beverage Kompozitsiyasi",
      "en": "119. Meal Bundles — ComboMeal Composing Burger and Beverage",
      "ru": "119. Комбо-набор — Композиция Burger и Beverage внутри ComboMeal"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nMerosxo'rlik va Kompozitsiyaning ajoyib integratsiyasi: 'ComboMeal' sinfi burger va ichimlikdan tashkil topadi ('has-a Burger' va 'has-a Beverage'). Kombo to'plamida umumiy narxdan 5000.0 so'm chegirma qilinadi!\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'FoodItem', 'Burger' va 'Beverage' sinflarini e'lon qiling.\n2. 'ComboMeal' sinfini e'lon qiling: 'private Burger burger;' va 'private Beverage drink;' maydonlari, konstruktori va getterlari.\n3. 'ComboMeal' ichida 'public double calculateComboPrice()' metodida '(burger.getPrice() + drink.getPrice()) - 5000.0' qaytarsin.\n4. 'Main' metodida 'Burger b = new Burger(\"Maxi Burger\", 40000.0, 2);' va 'Beverage d = new Beverage(\"Fanta\", 15000.0, 500);' yarating.\n5. 'ComboMeal combo = new ComboMeal(b, d);' obyektini tuzib, konsolga: \"Kombo to'plam narxi: 50000.0 so'm\" deb chop eting.",
      "en": "📖 Real-World Scenario\nDemonstrates composition of hierarchical objects: ComboMeal has-a Burger and has-a Beverage, granting bundle discounts.\n\n📋 Steps\n1. Create FoodItem, Burger, and Beverage classes.\n2. Create ComboMeal(burger, drink) with calculateComboPrice() subtracting 5000.0.\n3. In Main, instantiate ComboMeal and print: \"Kombo to'plam narxi: 50000.0 so'm\".",
      "ru": "📖 Контекст\nКомпозиция иерархических объектов: ComboMeal содержит Burger и Beverage, предоставляя скидку.\n\n📋 Шаги\n1. Объявите FoodItem, Burger, Beverage.\n2. Создайте ComboMeal(burger, drink) с расчетом со скидкой 5000.0.\n3. В main выведите: \"Kombo to'plam narxi: 50000.0 so'm\"."
    },
    "requirements": {
      "classes": [
        "FoodItem",
        "Burger",
        "Beverage",
        "ComboMeal",
        "Main"
      ],
      "fields": [
        {
          "name": "burger",
          "type": "Burger"
        },
        {
          "name": "drink",
          "type": "Beverage"
        }
      ],
      "privateFields": [
        "burger",
        "drink"
      ],
      "methods": [
        "calculateComboPrice",
        "getBurger",
        "getDrink"
      ],
      "constructors": [
        "Burger",
        "Beverage",
        "ComboMeal"
      ]
    },
    "starterCode": "class FoodItem {\n    \n}\n\nclass Burger extends FoodItem {\n    \n}\n\nclass Beverage extends FoodItem {\n    \n}\n\nclass ComboMeal {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class FoodItem {\n    private String name;\n    private double price;\n\n    public FoodItem(String name, double price) {\n        this.name = name;\n        this.price = price;\n    }\n\n    public String getName() {\n        return name;\n    }\n\n    public double getPrice() {\n        return price;\n    }\n}\n\nclass Burger extends FoodItem {\n    public Burger(String name, double price) {\n        super(name, price);\n    }\n}\n\nclass Beverage extends FoodItem {\n    public Beverage(String name, double price) {\n        super(name, price);\n    }\n}\n\nclass ComboMeal {\n    private Burger burger;\n    private Beverage drink;\n\n    public ComboMeal(Burger burger, Beverage drink) {\n        this.burger = burger;\n        this.drink = drink;\n    }\n\n    public Burger getBurger() {\n        return burger;\n    }\n\n    public Beverage getDrink() {\n        return drink;\n    }\n\n    public double calculateComboPrice() {\n        return (burger.getPrice() + drink.getPrice()) - 5000.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Burger b = new Burger(\"Maxi Burger\", 40000.0);\n        Beverage d = new Beverage(\"Fanta\", 15000.0);\n        ComboMeal combo = new ComboMeal(b, d);\n        System.out.println(\"Kombo to'plam narxi: \" + combo.calculateComboPrice() + \" so'm\");\n    }\n}",
    "detailedSolution": {
      "uz": "Kompozitsiya va merosxo'rlik birgalikda ishlatilganda tizim arxitekturasi o'ta moslashuvchan va mustahkam bo'ladi.",
      "en": "Pairing inheritance with composition produces flexible, decoupled software architectures.",
      "ru": "Совместное использование наследования и композиции создает гибкую и надежную архитектуру."
    }
  },
  {
    "id": 120,
    "tier": 4,
    "tierName": "4-Bosqich: Object Metodlari va Real Sanoat Keyslari",
    "sector": "91-120",
    "title": {
      "uz": "120. SuperKombo — SuperComboMeal Sinfida Desert Qo'shish va Narxni Kengaytirish",
      "en": "120. Super Combo — SuperComboMeal Extending ComboMeal with Dessert",
      "ru": "120. Супер-комбо — Расширение ComboMeal десертом в SuperComboMeal"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\n'SuperComboMeal' sinfi 'ComboMeal' sinfidan meros oladi ('extends ComboMeal') va o'z ichida qo'shimcha muzqaymoq desertini ('private double dessertPrice;') saqlaydi. Metod override qilinib, 'super.calculateComboPrice() + dessertPrice' qaytariladi!\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Burger', 'Beverage' va 'ComboMeal' sinflarini e'lon qiling.\n2. 'SuperComboMeal' sinfini 'extends ComboMeal' qiling: 'private double dessertPrice;' maydoni, konstruktorda 'super(burger, drink);'.\n3. 'SuperComboMeal' ichida 'calculateComboPrice()' metodini '@Override' qilib 'super.calculateComboPrice() + dessertPrice' qaytaring.\n4. 'Main' metodida 'Burger b = new Burger(\"BigBurger\", 45000.0); Beverage d = new Beverage(\"Sprite\", 15000.0);' yarating.\n5. 'SuperComboMeal sc = new SuperComboMeal(b, d, 12000.0);' obyektini tuzib, konsolga: \"Super kombo jami narxi: 67000.0 so'm\" deb chop eting.",
      "en": "📖 Real-World Scenario\nSuperComboMeal extends ComboMeal and overrides calculateComboPrice() by chaining super.calculateComboPrice().\n\n📋 Steps\n1. Create Burger, Beverage, and ComboMeal.\n2. SuperComboMeal(burger, drink, dessertPrice) extends ComboMeal overriding calculateComboPrice().\n3. In Main, instantiate SuperComboMeal and print: \"Super kombo jami narxi: 67000.0 so'm\".",
      "ru": "📖 Контекст\nSuperComboMeal наследует ComboMeal и переопределяет расчет через super.calculateComboPrice().\n\n📋 Шаги\n1. Создайте Burger, Beverage и ComboMeal.\n2. SuperComboMeal extends ComboMeal с dessertPrice и вызовом super.calculateComboPrice().\n3. В main выведите: \"Super kombo jami narxi: 67000.0 so'm\"."
    },
    "requirements": {
      "classes": [
        "Burger",
        "Beverage",
        "ComboMeal",
        "SuperComboMeal",
        "Main"
      ],
      "fields": [
        {
          "name": "dessertPrice",
          "type": "double"
        }
      ],
      "privateFields": [
        "dessertPrice"
      ],
      "methods": [
        "calculateComboPrice"
      ],
      "constructors": [
        "Burger",
        "Beverage",
        "ComboMeal",
        "SuperComboMeal"
      ],
      "keywords": [
        "extends",
        "super",
        "@Override"
      ]
    },
    "starterCode": "class Burger {\n    \n}\n\nclass Beverage {\n    \n}\n\nclass ComboMeal {\n    \n}\n\nclass SuperComboMeal extends ComboMeal {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Burger {\n    private String name;\n    private double price;\n\n    public Burger(String name, double price) {\n        this.name = name;\n        this.price = price;\n    }\n\n    public double getPrice() {\n        return price;\n    }\n}\n\nclass Beverage {\n    private String name;\n    private double price;\n\n    public Beverage(String name, double price) {\n        this.name = name;\n        this.price = price;\n    }\n\n    public double getPrice() {\n        return price;\n    }\n}\n\nclass ComboMeal {\n    private Burger burger;\n    private Beverage drink;\n\n    public ComboMeal(Burger burger, Beverage drink) {\n        this.burger = burger;\n        this.drink = drink;\n    }\n\n    public double calculateComboPrice() {\n        return (burger.getPrice() + drink.getPrice()) - 5000.0;\n    }\n}\n\nclass SuperComboMeal extends ComboMeal {\n    private double dessertPrice;\n\n    public SuperComboMeal(Burger burger, Beverage drink, double dessertPrice) {\n        super(burger, drink);\n        this.dessertPrice = dessertPrice;\n    }\n\n    @Override\n    public double calculateComboPrice() {\n        return super.calculateComboPrice() + dessertPrice;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Burger b = new Burger(\"BigBurger\", 45000.0);\n        Beverage d = new Beverage(\"Sprite\", 15000.0);\n        SuperComboMeal sc = new SuperComboMeal(b, d, 12000.0);\n        System.out.println(\"Super kombo jami narxi: \" + sc.calculateComboPrice() + \" so'm\");\n    }\n}",
    "detailedSolution": {
      "uz": "Sektor 4 (91-120) mukammal yakunlandi! Kovariant qaytish, equals() chaining, WIUT domena modellari, E-Commerce, FinTech va Kompozitsiya chuqur o'zlashtirildi.",
      "en": "Sector 4 complete! Mastering covariant returns, equals chaining, real WIUT domain scenarios, fintech, and advanced composition.",
      "ru": "Сектор 4 полностью завершен! Изучены ковариантность, equals chaining, доменные модели WIUT, финтех и композиция."
    }
  },
  {
    "id": 121,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Korxona Arxitekturasi va Viva Tayyorgarligi",
    "sector": "121-150",
    "title": {
      "uz": "121. Shifoxona Tizimi — Surgeon (Jarroh) va Jarrohlik Soatlari Hisobi",
      "en": "121. Healthcare Staff — Surgeon and Operation Hours Compensation",
      "ru": "121. Медицинский персонал — Расчет оплаты хирурга по часам операций"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nTibbiyot markazida 'MedicalStaff' (fullName, baseSalary) ota sinfiga jarroh 'Surgeon' bola sinf bo'lib qo'shiladi. Jarrohga har bir o'tkazilgan jarrohlik operatsiyasi soati uchun ('surgeryHours') 100000.0 so'm qo'shimcha ustama to'lanadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'MedicalStaff' sinfini e'lon qiling: 'private String fullName;' va 'private double baseSalary;' maydonlari, konstruktor va getterlari.\n2. 'Surgeon' sinfini 'extends MedicalStaff' qiling: 'private int surgeryHours;' maydoni, konstruktorda 'super(fullName, baseSalary);'.\n3. 'Surgeon' ichida 'public double calculateTotalSalary()' metodini yozing: 'getBaseSalary() + (surgeryHours * 100000.0)' qaytarsin.\n4. 'Main' metodida 'Surgeon s = new Surgeon(\"Dr. Bobur Karimov\", 5000000.0, 15);' obyektini yarating.\n5. Konsolga: \"Jarroh jami maoshi: 6500000.0 so'm\" deb chop eting.",
      "en": "📖 Real-World Scenario\nHospital systems model surgeons inheriting base medical credentials while adding surgery compensation.\n\n📋 Steps\n1. Create MedicalStaff(fullName, baseSalary).\n2. Surgeon(fullName, baseSalary, surgeryHours) extends MedicalStaff with calculateTotalSalary().\n3. In Main, instantiate Surgeon(\"Dr. Bobur Karimov\", 5000000.0, 15).\n4. Print: \"Jarroh jami maoshi: 6500000.0 so'm\".",
      "ru": "📖 Контекст\nМедицинский персонал: хирург получает надбавку за часы операций к базовому окладу.\n\n📋 Шаги\n1. Создайте MedicalStaff(fullName, baseSalary).\n2. Surgeon extends MedicalStaff с методом calculateTotalSalary().\n3. В main выведите: \"Jarroh jami maoshi: 6500000.0 so'm\"."
    },
    "requirements": {
      "classes": [
        "MedicalStaff",
        "Surgeon",
        "Main"
      ],
      "fields": [
        {
          "name": "fullName",
          "type": "String"
        },
        {
          "name": "baseSalary",
          "type": "double"
        },
        {
          "name": "surgeryHours",
          "type": "int"
        }
      ],
      "privateFields": [
        "fullName",
        "baseSalary",
        "surgeryHours"
      ],
      "methods": [
        "calculateTotalSalary",
        "getBaseSalary"
      ],
      "constructors": [
        "MedicalStaff",
        "Surgeon"
      ],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class MedicalStaff {\n    \n}\n\nclass Surgeon extends MedicalStaff {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class MedicalStaff {\n    private String fullName;\n    private double baseSalary;\n\n    public MedicalStaff(String fullName, double baseSalary) {\n        this.fullName = fullName;\n        this.baseSalary = baseSalary;\n    }\n\n    public String getFullName() {\n        return fullName;\n    }\n\n    public double getBaseSalary() {\n        return baseSalary;\n    }\n}\n\nclass Surgeon extends MedicalStaff {\n    private int surgeryHours;\n\n    public Surgeon(String fullName, double baseSalary, int surgeryHours) {\n        super(fullName, baseSalary);\n        this.surgeryHours = surgeryHours;\n    }\n\n    public double calculateTotalSalary() {\n        return getBaseSalary() + (surgeryHours * 100000.0);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Surgeon s = new Surgeon(\"Dr. Bobur Karimov\", 5000000.0, 15);\n        System.out.println(\"Jarroh jami maoshi: \" + s.calculateTotalSalary() + \" so'm\");\n    }\n}",
    "detailedSolution": {
      "uz": "Klinika tizimlarida oylik maoshni hisoblash xodim toifasiga qarab ixtisoslashgan formula bo'yicha hisoblanadi.",
      "en": "Clinical compensation calculations vary cleanly across specialized practitioner subclasses.",
      "ru": "Расчет компенсаций в клинике настраивается через специализированные классы персонала."
    }
  },
  {
    "id": 122,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Korxona Arxitekturasi va Viva Tayyorgarligi",
    "sector": "121-150",
    "title": {
      "uz": "122. Diagnostika — Radiologist va MRT Tekshiruvlari Bonusi",
      "en": "122. Diagnostic Radiology — Radiologist and MRI Scan Bonus Accrual",
      "ru": "122. Диагностика — Бонусы радиолога за проведенные МРТ"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nRentgenolog-radiolog ('Radiologist') shifokori o'tkazgan har bir MRT tekshiruvi ('mriScansCount') uchun 50000.0 so'm bonus oladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'MedicalStaff' sinfini e'lon qiling: 'private String fullName;' va 'private double baseSalary;' maydonlari, konstruktor va getteri.\n2. 'Radiologist' sinfini 'extends MedicalStaff' qiling: 'private int mriScansCount;' maydoni, konstruktorda 'super(fullName, baseSalary);'.\n3. 'Radiologist' ichida 'public double calculateTotalSalary()' metodini yozing: 'getBaseSalary() + (mriScansCount * 50000.0)' qaytarsin.\n4. 'Main' metodida 'Radiologist r = new Radiologist(\"Dr. Ziyoda Alimova\", 4500000.0, 20);' obyektini yarating.\n5. Konsolga: \"Radiolog jami maoshi: 5500000.0 so'm\" deb chop eting.",
      "en": "📖 Real-World Scenario\nRadiologists accrue diagnostic scan bonuses on top of core medical compensation.\n\n📋 Steps\n1. Create MedicalStaff(fullName, baseSalary).\n2. Radiologist(fullName, baseSalary, mriScansCount) extends MedicalStaff with calculateTotalSalary().\n3. In Main, instantiate Radiologist and print: \"Radiolog jami maoshi: 5500000.0 so'm\".",
      "ru": "📖 Контекст\nРадиолог получает бонус за каждое проведенное МРТ.\n\n📋 Шаги\n1. Создайте MedicalStaff и Radiologist extends MedicalStaff.\n2. Реализуйте calculateTotalSalary().\n3. В main выведите: \"Radiolog jami maoshi: 5500000.0 so'm\"."
    },
    "requirements": {
      "classes": [
        "MedicalStaff",
        "Radiologist",
        "Main"
      ],
      "fields": [
        {
          "name": "fullName",
          "type": "String"
        },
        {
          "name": "baseSalary",
          "type": "double"
        },
        {
          "name": "mriScansCount",
          "type": "int"
        }
      ],
      "privateFields": [
        "fullName",
        "baseSalary",
        "mriScansCount"
      ],
      "methods": [
        "calculateTotalSalary"
      ],
      "constructors": [
        "MedicalStaff",
        "Radiologist"
      ],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class MedicalStaff {\n    \n}\n\nclass Radiologist extends MedicalStaff {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class MedicalStaff {\n    private String fullName;\n    private double baseSalary;\n\n    public MedicalStaff(String fullName, double baseSalary) {\n        this.fullName = fullName;\n        this.baseSalary = baseSalary;\n    }\n\n    public String getFullName() {\n        return fullName;\n    }\n\n    public double getBaseSalary() {\n        return baseSalary;\n    }\n}\n\nclass Radiologist extends MedicalStaff {\n    private int mriScansCount;\n\n    public Radiologist(String fullName, double baseSalary, int mriScansCount) {\n        super(fullName, baseSalary);\n        this.mriScansCount = mriScansCount;\n    }\n\n    public double calculateTotalSalary() {\n        return getBaseSalary() + (mriScansCount * 50000.0);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Radiologist r = new Radiologist(\"Dr. Ziyoda Alimova\", 4500000.0, 20);\n        System.out.println(\"Radiolog jami maoshi: \" + r.calculateTotalSalary() + \" so'm\");\n    }\n}",
    "detailedSolution": {
      "uz": "Har bir tibbiyot sohasi mutaxassisi o'ziga xos ko'rsatkichlar asosida rag'batlantirilishi polimorfik tarzda modellashtirildi.",
      "en": "Specialized diagnostic bonuses are integrated neatly while preserving uniform medical staff contracts.",
      "ru": "Специализированные бонусы инкапсулируются внутри соответствующих классов врачей."
    }
  },
  {
    "id": 123,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Korxona Arxitekturasi va Viva Tayyorgarligi",
    "sector": "121-150",
    "title": {
      "uz": "123. Klinika Bo'limi — HospitalDepartment Bilan Shifokorlar Agregatsiyasi",
      "en": "123. Clinical Administration — HospitalDepartment Aggregating MedicalStaff",
      "ru": "123. Клиническое отделение — Агрегация врачей в HospitalDepartment"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nKlinikada 'HospitalDepartment' bo'limi bosh shifokorni ('MedicalStaff headDoctor') o'z ichida saqlaydi va bo'lim nomini taqdim etadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'MedicalStaff(String fullName)' sinfini e'lon qiling.\n2. 'HospitalDepartment' sinfini e'lon qiling: 'private String deptName;' va 'private MedicalStaff headDoctor;' maydonlari, konstruktori va getterlari.\n3. 'Main' metodida 'MedicalStaff doc = new MedicalStaff(\"Prof. Rustamov\");' obyektini yarating.\n4. 'HospitalDepartment dept = new HospitalDepartment(\"Kardiologiya\", doc);' obyektini tuzing.\n5. Konsolga: \"Bo'lim: Kardiologiya | Bosh shifokor: Prof. Rustamov\" deb chop eting.",
      "en": "📖 Real-World Scenario\nHospital departments aggregate department heads cleanly via composition.\n\n📋 Steps\n1. Create MedicalStaff(fullName).\n2. Create HospitalDepartment(deptName, headDoctor) with getters.\n3. In Main, instantiate department with head doctor and print summary.",
      "ru": "📖 Контекст\nОтделение клиники агрегирует заведующего отделением MedicalStaff.\n\n📋 Шаги\n1. Создайте MedicalStaff(fullName).\n2. Создайте HospitalDepartment(deptName, headDoctor).\n3. В main выведите: \"Bo'lim: Kardiologiya | Bosh shifokor: Prof. Rustamov\"."
    },
    "requirements": {
      "classes": [
        "MedicalStaff",
        "HospitalDepartment",
        "Main"
      ],
      "fields": [
        {
          "name": "fullName",
          "type": "String"
        },
        {
          "name": "deptName",
          "type": "String"
        },
        {
          "name": "headDoctor",
          "type": "MedicalStaff"
        }
      ],
      "privateFields": [
        "fullName",
        "deptName",
        "headDoctor"
      ],
      "methods": [
        "getDeptName",
        "getHeadDoctor"
      ],
      "constructors": [
        "MedicalStaff",
        "HospitalDepartment"
      ]
    },
    "starterCode": "class MedicalStaff {\n    \n}\n\nclass HospitalDepartment {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class MedicalStaff {\n    private String fullName;\n\n    public MedicalStaff(String fullName) {\n        this.fullName = fullName;\n    }\n\n    public String getFullName() {\n        return fullName;\n    }\n}\n\nclass HospitalDepartment {\n    private String deptName;\n    private MedicalStaff headDoctor;\n\n    public HospitalDepartment(String deptName, MedicalStaff headDoctor) {\n        this.deptName = deptName;\n        this.headDoctor = headDoctor;\n    }\n\n    public String getDeptName() {\n        return deptName;\n    }\n\n    public MedicalStaff getHeadDoctor() {\n        return headDoctor;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MedicalStaff doc = new MedicalStaff(\"Prof. Rustamov\");\n        HospitalDepartment dept = new HospitalDepartment(\"Kardiologiya\", doc);\n        System.out.println(\"Bo'lim: \" + dept.getDeptName() + \" | Bosh shifokor: \" + dept.getHeadDoctor().getFullName());\n    }\n}",
    "detailedSolution": {
      "uz": "Tibbiyot bo'limi va shifokor o'rtasidagi bog'liqlik agregatsiya bo'lib, shifokor bo'limdan mustaqil yashay oladi.",
      "en": "Models aggregation lifecycle where doctors exist independently from department structural entities.",
      "ru": "Демонстрирует агрегацию: врач существует независимо от структуры отделения."
    }
  },
  {
    "id": 124,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Korxona Arxitekturasi va Viva Tayyorgarligi",
    "sector": "121-150",
    "title": {
      "uz": "124. Mehmonxona Xonalari — SuiteRoom va VIP Xizmat Narxi",
      "en": "124. Hospitality Management — SuiteRoom Luxury Amenities Pricing",
      "ru": "124. Гостиничный бизнес — Расчет стоимости люкса в SuiteRoom"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nMehmonxonada 'HotelRoom' (roomNumber, baseRate) ota sinfiga lyuks xona 'SuiteRoom' (miniBarFee) qo'shiladi. 1 kunlik narx 'getBaseRate() + miniBarFee' qilib hisoblanadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'HotelRoom' sinfini e'lon qiling: 'private int roomNumber;' va 'private double baseRate;' maydonlari, konstruktor va getteri.\n2. 'SuiteRoom' sinfini 'extends HotelRoom' qiling: 'private double miniBarFee;' maydoni, konstruktorda 'super(roomNumber, baseRate);'.\n3. 'SuiteRoom' ichida 'public double calculateDailyTotal()' metodida 'getBaseRate() + miniBarFee' qaytarsin.\n4. 'Main' metodida 'SuiteRoom suite = new SuiteRoom(501, 800000.0, 150000.0);' obyektini yarating.\n5. Konsolga: \"Lyuks xona kunlik narxi: 950000.0 so'm\" deb chop eting.",
      "en": "📖 Real-World Scenario\nHospitality reservation engines compute daily suite totals including minibar access.\n\n📋 Steps\n1. Create HotelRoom(roomNumber, baseRate).\n2. SuiteRoom(roomNumber, baseRate, miniBarFee) extends HotelRoom with calculateDailyTotal().\n3. In Main, instantiate SuiteRoom(501, 800000.0, 150000.0).\n4. Print: \"Lyuks xona kunlik narxi: 950000.0 so'm\".",
      "ru": "📖 Контекст\nЛюкс-номер включает плату за мини-бар в посуточный расчет.\n\n📋 Шаги\n1. Создайте HotelRoom(roomNumber, baseRate).\n2. SuiteRoom extends HotelRoom с calculateDailyTotal().\n3. В main выведите: \"Lyuks xona kunlik narxi: 950000.0 so'm\"."
    },
    "requirements": {
      "classes": [
        "HotelRoom",
        "SuiteRoom",
        "Main"
      ],
      "fields": [
        {
          "name": "roomNumber",
          "type": "int"
        },
        {
          "name": "baseRate",
          "type": "double"
        },
        {
          "name": "miniBarFee",
          "type": "double"
        }
      ],
      "privateFields": [
        "roomNumber",
        "baseRate",
        "miniBarFee"
      ],
      "methods": [
        "calculateDailyTotal",
        "getBaseRate"
      ],
      "constructors": [
        "HotelRoom",
        "SuiteRoom"
      ],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class HotelRoom {\n    \n}\n\nclass SuiteRoom extends HotelRoom {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class HotelRoom {\n    private int roomNumber;\n    private double baseRate;\n\n    public HotelRoom(int roomNumber, double baseRate) {\n        this.roomNumber = roomNumber;\n        this.baseRate = baseRate;\n    }\n\n    public int getRoomNumber() {\n        return roomNumber;\n    }\n\n    public double getBaseRate() {\n        return baseRate;\n    }\n}\n\nclass SuiteRoom extends HotelRoom {\n    private double miniBarFee;\n\n    public SuiteRoom(int roomNumber, double baseRate, double miniBarFee) {\n        super(roomNumber, baseRate);\n        this.miniBarFee = miniBarFee;\n    }\n\n    public double calculateDailyTotal() {\n        return getBaseRate() + miniBarFee;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SuiteRoom suite = new SuiteRoom(501, 800000.0, 150000.0);\n        System.out.println(\"Lyuks xona kunlik narxi: \" + suite.calculateDailyTotal() + \" so'm\");\n    }\n}",
    "detailedSolution": {
      "uz": "Merosxo'rlik yordamida mehmonxona xonalarining bazaviy xususiyatlari saqlanib, lyuks xonalarning qo'shimcha to'lovlari hisoblanadi.",
      "en": "Standardizes basic room management while layering luxury add-on pricing into specialized subclasses.",
      "ru": "Стандартизирует базовые параметры номеров, инкапсулируя расчет надбавок в люксах."
    }
  },
  {
    "id": 125,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Korxona Arxitekturasi va Viva Tayyorgarligi",
    "sector": "121-150",
    "title": {
      "uz": "125. Mehmonxona Qulayliklari — Amenity Kompozitsiyasi Bilan Xonani Jihozlash",
      "en": "125. Hospitality Amenities — Composing Amenity Objects in Hotel Rooms",
      "ru": "125. Удобства отеля — Композиция Amenity внутри HotelRoom"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nHar bir xona o'zida 'Amenity' (qulaylik: WiFi, Jacuzzi, Safe) obyektini saqlaydi ('HotelRoom has-a Amenity').\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Amenity' sinfini e'lon qiling: 'private String amenityName;' maydoni, konstruktor va getteri.\n2. 'Room' sinfini e'lon qiling: 'private int roomNo;' va 'private Amenity amenity;' maydonlari, konstruktori va getterlari.\n3. 'Main' metodida 'Amenity wifi = new Amenity(\"Yuqori tezlikdagi WiFi\");' obyektini yarating.\n4. 'Room room = new Room(302, wifi);' obyektini tuzing.\n5. Konsolga: \"Xona #302 qulayligi: Yuqori tezlikdagi WiFi\" deb chop eting.",
      "en": "📖 Real-World Scenario\nHotel rooms compose Amenity objects cleanly through has-a relationship.\n\n📋 Steps\n1. Create Amenity(amenityName) with getter.\n2. Create Room(roomNo, amenity) with getters.\n3. In Main, instantiate Room with Amenity and print: \"Xona #302 qulayligi: Yuqori tezlikdagi WiFi\".",
      "ru": "📖 Контекст\nНомер отеля содержит объект удобств Amenity (has-a).\n\n📋 Шаги\n1. Создайте Amenity(amenityName) с геттером.\n2. Создайте Room(roomNo, amenity) с геттерами.\n3. В main выведите: \"Xona #302 qulayligi: Yuqori tezlikdagi WiFi\"."
    },
    "requirements": {
      "classes": [
        "Amenity",
        "Room",
        "Main"
      ],
      "fields": [
        {
          "name": "amenityName",
          "type": "String"
        },
        {
          "name": "roomNo",
          "type": "int"
        },
        {
          "name": "amenity",
          "type": "Amenity"
        }
      ],
      "privateFields": [
        "amenityName",
        "roomNo",
        "amenity"
      ],
      "methods": [
        "getAmenityName",
        "getRoomNo",
        "getAmenity"
      ],
      "constructors": [
        "Amenity",
        "Room"
      ]
    },
    "starterCode": "class Amenity {\n    \n}\n\nclass Room {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Amenity {\n    private String amenityName;\n\n    public Amenity(String amenityName) {\n        this.amenityName = amenityName;\n    }\n\n    public String getAmenityName() {\n        return amenityName;\n    }\n}\n\nclass Room {\n    private int roomNo;\n    private Amenity amenity;\n\n    public Room(int roomNo, Amenity amenity) {\n        this.roomNo = roomNo;\n        this.amenity = amenity;\n    }\n\n    public int getRoomNo() {\n        return roomNo;\n    }\n\n    public Amenity getAmenity() {\n        return amenity;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Amenity wifi = new Amenity(\"Yuqori tezlikdagi WiFi\");\n        Room room = new Room(302, wifi);\n        System.out.println(\"Xona #\" + room.getRoomNo() + \" qulayligi: \" + room.getAmenity().getAmenityName());\n    }\n}",
    "detailedSolution": {
      "uz": "Xona va qulaylik orasidagi bog'liqlik to'g'ri tanlangan kompozitsiya bo'lib, yangi qulaylik turlarini erkin qo'shish imkonini beradi.",
      "en": "Demonstrates clean composition allowing flexible attachment of diverse amenities to rooms.",
      "ru": "Композиция номеров и удобств обеспечивает гибкое расширение каталога услуг."
    }
  },
  {
    "id": 126,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Korxona Arxitekturasi va Viva Tayyorgarligi",
    "sector": "121-150",
    "title": {
      "uz": "126. Bron Qilish — Reservation Sinfida Guest va Room Bog'lanishi",
      "en": "126. Hotel Reservations — Linking Guest and Room in Reservation Aggregate",
      "ru": "126. Бронирование номеров — Связка Guest и Room в агрегате Reservation"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nBronlash tizimida 'Reservation' sinfi mehmon ('Guest') va xona ('HotelRoom') obyektlarini birlashtirib, kunlar soni ('stayDays') bo'yicha yakuniy to'lovni hisoblaydi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Guest(String name)' sinfini yarating.\n2. 'HotelRoom(double ratePerNight)' sinfini e'lon qiling ('getRatePerNight()' getteri bilan).\n3. 'Reservation' sinfini e'lon qiling: 'private Guest guest;', 'private HotelRoom room;', 'private int stayDays;' maydonlari, konstruktori. 'public double calculateTotalCost()' metodida 'room.getRatePerNight() * stayDays' qaytarsin.\n4. 'Main' metodida 'Guest g = new Guest(\"Jasur\"); HotelRoom r = new HotelRoom(500000.0);' yarating.\n5. 'Reservation res = new Reservation(g, r, 3);' obyektini tuzib, konsolga: \"3 kunlik bron narxi: 1500000.0 so'm\" deb chop eting.",
      "en": "📖 Real-World Scenario\nReservation systems aggregate guests and rooms, computing stay charges over booked nights.\n\n📋 Steps\n1. Create Guest(name), HotelRoom(ratePerNight).\n2. Reservation(guest, room, stayDays) with calculateTotalCost().\n3. In Main, instantiate Reservation with 3 nights and print total.",
      "ru": "📖 Контекст\nБронирование агрегирует гостя и номер, вычисляя стоимость проживания.\n\n📋 Шаги\n1. Создайте Guest и HotelRoom(ratePerNight).\n2. Создайте Reservation(guest, room, stayDays) с calculateTotalCost().\n3. В main выведите: \"3 kunlik bron narxi: 1500000.0 so'm\"."
    },
    "requirements": {
      "classes": [
        "Guest",
        "HotelRoom",
        "Reservation",
        "Main"
      ],
      "methods": [
        "calculateTotalCost"
      ],
      "constructors": [
        "Guest",
        "HotelRoom",
        "Reservation"
      ]
    },
    "starterCode": "class Guest {\n    \n}\n\nclass HotelRoom {\n    \n}\n\nclass Reservation {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Guest {\n    private String name;\n\n    public Guest(String name) {\n        this.name = name;\n    }\n\n    public String getName() {\n        return name;\n    }\n}\n\nclass HotelRoom {\n    private double ratePerNight;\n\n    public HotelRoom(double ratePerNight) {\n        this.ratePerNight = ratePerNight;\n    }\n\n    public double getRatePerNight() {\n        return ratePerNight;\n    }\n}\n\nclass Reservation {\n    private Guest guest;\n    private HotelRoom room;\n    private int stayDays;\n\n    public Reservation(Guest guest, HotelRoom room, int stayDays) {\n        this.guest = guest;\n        this.room = room;\n        this.stayDays = stayDays;\n    }\n\n    public double calculateTotalCost() {\n        return room.getRatePerNight() * stayDays;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Guest g = new Guest(\"Jasur\");\n        HotelRoom r = new HotelRoom(500000.0);\n        Reservation res = new Reservation(g, r, 3);\n        System.out.println(\"3 kunlik bron narxi: \" + res.calculateTotalCost() + \" so'm\");\n    }\n}",
    "detailedSolution": {
      "uz": "Reservation sinfi — domen agregati bo'lib, ikkita mustaqil subyektni (Guest va HotelRoom) birlashtirib biznes operatsiyasini bajaradi.",
      "en": "Reservation serves as a domain aggregate linking two distinct entities to enact a transactional workflow.",
      "ru": "Reservation служит доменным агрегатом, связывающим гостя и номер для проведения транзакции."
    }
  },
  {
    "id": 127,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Korxona Arxitekturasi va Viva Tayyorgarligi",
    "sector": "121-150",
    "title": {
      "uz": "127. WIUT Intranet — StudentUser va Kreditlar Limitini Tekshirish",
      "en": "127. WIUT Intranet — StudentUser Academic Credit Capacity",
      "ru": "127. Интранет WIUT — Лимит академических кредитов StudentUser"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nUniversitet intranetida barcha foydalanuvchilar 'IntranetUser' (username) ota sinfiga tegishli. Talaba 'StudentUser' sinfida semestrda maksimal 60 kreditga ro'yxatdan o'tishi mumkin ('canEnroll(int credits)' tekshiruvi: 'enrolledCredits + credits <= 60').\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'IntranetUser' sinfini e'lon qiling: 'private String username;' maydoni, konstruktor va getteri.\n2. 'StudentUser' sinfini 'extends IntranetUser' qiling: 'private int enrolledCredits;' maydoni, konstruktorda 'super(username);'.\n3. 'StudentUser' ichida 'public boolean canEnroll(int credits)' metodida 'enrolledCredits + credits <= 60' qaytarsin.\n4. 'Main' metodida 'StudentUser su = new StudentUser(\"00012345\", 40);' obyektini yarating.\n5. Konsolga: \"20 kreditlik modulga yozilish mumkin: \" + su.canEnroll(20) deb chop eting.",
      "en": "📖 Real-World Scenario\nWIUT intranet enforces academic credit caps on StudentUser accounts.\n\n📋 Steps\n1. Create IntranetUser(username).\n2. StudentUser(username, enrolledCredits) extends IntranetUser with canEnroll(credits).\n3. In Main, instantiate StudentUser(\"00012345\", 40) and test canEnroll(20).\n4. Print: \"20 kreditlik modulga yozilish mumkin: true\".",
      "ru": "📖 Контекст\nИнтранет проверяет допустимый лимит кредитов для StudentUser.\n\n📋 Шаги\n1. Создайте IntranetUser(username).\n2. StudentUser extends IntranetUser с методом canEnroll(credits).\n3. В main выведите: \"20 kreditlik modulga yozilish mumkin: true\"."
    },
    "requirements": {
      "classes": [
        "IntranetUser",
        "StudentUser",
        "Main"
      ],
      "fields": [
        {
          "name": "username",
          "type": "String"
        },
        {
          "name": "enrolledCredits",
          "type": "int"
        }
      ],
      "privateFields": [
        "username",
        "enrolledCredits"
      ],
      "methods": [
        "canEnroll"
      ],
      "constructors": [
        "IntranetUser",
        "StudentUser"
      ],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class IntranetUser {\n    \n}\n\nclass StudentUser extends IntranetUser {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class IntranetUser {\n    private String username;\n\n    public IntranetUser(String username) {\n        this.username = username;\n    }\n\n    public String getUsername() {\n        return username;\n    }\n}\n\nclass StudentUser extends IntranetUser {\n    private int enrolledCredits;\n\n    public StudentUser(String username, int enrolledCredits) {\n        super(username);\n        this.enrolledCredits = enrolledCredits;\n    }\n\n    public boolean canEnroll(int credits) {\n        return (enrolledCredits + credits) <= 60;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StudentUser su = new StudentUser(\"00012345\", 40);\n        System.out.println(\"20 kreditlik modulga yozilish mumkin: \" + su.canEnroll(20));\n    }\n}",
    "detailedSolution": {
      "uz": "Talabalarga xos modul tanlash cheklovlari StudentUser sinfiga inkapsulyatsiya qilindi.",
      "en": "Encapsulates academic credit business rules squarely inside the StudentUser class.",
      "ru": "Инкапсулирует академические правила регистрации на модули в классе StudentUser."
    }
  },
  {
    "id": 128,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Korxona Arxitekturasi va Viva Tayyorgarligi",
    "sector": "121-150",
    "title": {
      "uz": "128. WIUT Fakultet Tizimi — FacultyUser va Ilmiy Grant Qoldig'i",
      "en": "128. WIUT Faculty System — FacultyUser Research Grant Tracking",
      "ru": "128. Факультет WIUT — Контроль исследовательского гранта FacultyUser"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nO'qituvchi profilida ('FacultyUser') universitet ajratgan ilmiy grant ('researchGrant') mablag'i bo'lib, uning sarflanishi nazorat qilinadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'IntranetUser' sinfini e'lon qiling: 'private String username;' maydoni, konstruktor va getteri.\n2. 'FacultyUser' sinfini 'extends IntranetUser' qiling: 'private double researchGrant;' maydoni, konstruktorda 'super(username);'.\n3. 'FacultyUser' ichida 'public boolean spendGrant(double amount)' metodida agar 'researchGrant >= amount' bo'lsa ayirib 'true', aks holda 'false' qaytarsin.\n4. 'Main' metodida 'FacultyUser fu = new FacultyUser(\"dr_nodira\", 20000000.0);' obyektini yarating.\n5. 'fu.spendGrant(5000000.0)' metodini chaqirib, konsolga: \"Grant sarflandi: true\" deb chop eting.",
      "en": "📖 Real-World Scenario\nFaculty accounts monitor institutional research grant allocations.\n\n📋 Steps\n1. Create IntranetUser(username).\n2. FacultyUser(username, researchGrant) extends IntranetUser with spendGrant(amount).\n3. In Main, instantiate FacultyUser and test spending 5000000.0.\n4. Print: \"Grant sarflandi: true\".",
      "ru": "📖 Контекст\nУчет расхода исследовательского гранта преподавателя в FacultyUser.\n\n📋 Шаги\n1. Создайте IntranetUser и FacultyUser extends IntranetUser.\n2. Реализуйте spendGrant(amount).\n3. В main выведите: \"Grant sarflandi: true\"."
    },
    "requirements": {
      "classes": [
        "IntranetUser",
        "FacultyUser",
        "Main"
      ],
      "fields": [
        {
          "name": "username",
          "type": "String"
        },
        {
          "name": "researchGrant",
          "type": "double"
        }
      ],
      "privateFields": [
        "username",
        "researchGrant"
      ],
      "methods": [
        "spendGrant"
      ],
      "constructors": [
        "IntranetUser",
        "FacultyUser"
      ],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class IntranetUser {\n    \n}\n\nclass FacultyUser extends IntranetUser {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class IntranetUser {\n    private String username;\n\n    public IntranetUser(String username) {\n        this.username = username;\n    }\n\n    public String getUsername() {\n        return username;\n    }\n}\n\nclass FacultyUser extends IntranetUser {\n    private double researchGrant;\n\n    public FacultyUser(String username, double researchGrant) {\n        super(username);\n        this.researchGrant = researchGrant;\n    }\n\n    public boolean spendGrant(double amount) {\n        if (researchGrant >= amount) {\n            researchGrant -= amount;\n            return true;\n        }\n        return false;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FacultyUser fu = new FacultyUser(\"dr_nodira\", 20000000.0);\n        System.out.println(\"Grant sarflandi: \" + fu.spendGrant(5000000.0));\n    }\n}",
    "detailedSolution": {
      "uz": "Universitet xodimlarining ilmiy grantlarini boshqarish biznes mantiqi ota sinfga ta'sir qilmasdan kiritildi.",
      "en": "Integrates institutional research budgeting seamlessly without polluting the base user entity.",
      "ru": "Интегрирует грантовую логику без перегрузки базовой сущности пользователя."
    }
  },
  {
    "id": 129,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Korxona Arxitekturasi va Viva Tayyorgarligi",
    "sector": "121-150",
    "title": {
      "uz": "129. Ruxsatlar Tizimi — Polimorfik hasAdminAccess() Ruxsat Tekshiruvi",
      "en": "129. Access Control — Polymorphic hasAdminAccess() Authorization Check",
      "ru": "129. Контроль доступа — Полиморфная проверка прав hasAdminAccess()"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nTizimga kirishda barcha foydalanuvchilar 'hasAdminAccess()' polimorfik metodiga ega. Bazaviy foydalanuvchida 'false', ammo 'AdminUser' sinfida 'true' qaytadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'IntranetUser' sinfida 'public boolean hasAdminAccess()' metodi 'false' qaytarsin.\n2. 'AdminUser' sinfini 'extends IntranetUser' qiling va 'hasAdminAccess()' metodini '@Override' qilib 'true' qaytaring.\n3. 'Main' metodida 'IntranetUser user = new AdminUser();' polimorfik obyektini oching.\n4. 'user.hasAdminAccess()' natijasini tekshiring.\n5. Konsolga: \"Admin paneliga kirish huquqi: true\" deb chop eting.",
      "en": "📖 Real-World Scenario\nAuthorization engines query hasAdminAccess() polymorphically at runtime.\n\n📋 Steps\n1. IntranetUser hasAdminAccess() returns false.\n2. AdminUser extends IntranetUser overriding hasAdminAccess() to return true.\n3. In Main, assign AdminUser to IntranetUser reference and print result.",
      "ru": "📖 Контекст\nСервис авторизации полиморфно вызывает hasAdminAccess().\n\n📋 Шаги\n1. IntranetUser возвращает false в hasAdminAccess().\n2. AdminUser переопределяет метод и возвращает true.\n3. В main выведите: \"Admin paneliga kirish huquqi: true\"."
    },
    "requirements": {
      "classes": [
        "IntranetUser",
        "AdminUser",
        "Main"
      ],
      "methods": [
        "hasAdminAccess"
      ],
      "keywords": [
        "extends",
        "@Override"
      ]
    },
    "starterCode": "class IntranetUser {\n    \n}\n\nclass AdminUser extends IntranetUser {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class IntranetUser {\n    public boolean hasAdminAccess() {\n        return false;\n    }\n}\n\nclass AdminUser extends IntranetUser {\n    @Override\n    public boolean hasAdminAccess() {\n        return true;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IntranetUser user = new AdminUser();\n        System.out.println(\"Admin paneliga kirish huquqi: \" + user.hasAdminAccess());\n    }\n}",
    "detailedSolution": {
      "uz": "Polimorfizm orqali xavfsizlik filtri har qanday foydalanuvchi turiga qaramasdan yagona hasAdminAccess() metodi bilan tekshiradi.",
      "en": "Security interceptors verify role authorizations polymorphically with minimal branching.",
      "ru": "Фильтры безопасности полиморфно проверяют права доступа без громоздких условий."
    }
  },
  {
    "id": 130,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Korxona Arxitekturasi va Viva Tayyorgarligi",
    "sector": "121-150",
    "title": {
      "uz": "130. Aqlli Uy — SmartLight va Yorug'lik Foizini Boshqarish",
      "en": "130. Smart Home — SmartLight Brightness Dimmer Control",
      "ru": "130. Умный дом — Управление яркостью лампы SmartLight"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nAqlli uyda 'SmartDevice' (deviceName) ota sinfiga aqlli chiroq 'SmartLight' (brightnessPercent) sinfi merosxo'r bo'ladi. 'dim(int percent)' metodi orqali yorug'lik o'rnatiladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'SmartDevice' sinfini e'lon qiling: 'private String deviceName;' maydoni, konstruktor va getteri.\n2. 'SmartLight' sinfini 'extends SmartDevice' qiling: 'private int brightnessPercent;' maydoni, konstruktorda 'super(deviceName);'. 'public void setBrightness(int b)' va 'public int getBrightness()' metodlarini yozing.\n3. 'Main' metodida 'SmartLight lamp = new SmartLight(\"Oshxona Chirog'i\");' obyektini yarating.\n4. 'lamp.setBrightness(75);' qilib o'rnating.\n5. Konsolga: \"Oshxona Chirog'i yorug'ligi: 75%\" deb chop eting.",
      "en": "📖 Real-World Scenario\nSmart home platforms control lighting dimmers atop generic device abstractions.\n\n📋 Steps\n1. Create SmartDevice(deviceName).\n2. SmartLight extends SmartDevice with brightnessPercent and setter/getter.\n3. In Main, instantiate SmartLight, set brightness to 75, and print status.",
      "ru": "📖 Контекст\nУмная лампа SmartLight наследует базовое устройство и управляет яркостью.\n\n📋 Шаги\n1. Создайте SmartDevice(deviceName).\n2. SmartLight extends SmartDevice с полем brightnessPercent.\n3. В main выведите: \"Oshxona Chirog'i yorug'ligi: 75%\"."
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartLight",
        "Main"
      ],
      "fields": [
        {
          "name": "deviceName",
          "type": "String"
        },
        {
          "name": "brightnessPercent",
          "type": "int"
        }
      ],
      "privateFields": [
        "deviceName",
        "brightnessPercent"
      ],
      "methods": [
        "setBrightness",
        "getBrightness",
        "getDeviceName"
      ],
      "constructors": [
        "SmartDevice",
        "SmartLight"
      ],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class SmartDevice {\n    \n}\n\nclass SmartLight extends SmartDevice {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class SmartDevice {\n    private String deviceName;\n\n    public SmartDevice(String deviceName) {\n        this.deviceName = deviceName;\n    }\n\n    public String getDeviceName() {\n        return deviceName;\n    }\n}\n\nclass SmartLight extends SmartDevice {\n    private int brightnessPercent;\n\n    public SmartLight(String deviceName) {\n        super(deviceName);\n    }\n\n    public void setBrightness(int brightnessPercent) {\n        this.brightnessPercent = brightnessPercent;\n    }\n\n    public int getBrightness() {\n        return brightnessPercent;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartLight lamp = new SmartLight(\"Oshxona Chirog'i\");\n        lamp.setBrightness(75);\n        System.out.println(lamp.getDeviceName() + \" yorug'ligi: \" + lamp.getBrightness() + \"%\");\n    }\n}",
    "detailedSolution": {
      "uz": "IoT qurilmalari nomini ota sinfdan meros qilib olib, o'ziga xos mexanizmlarini (dimmer) bola sinfda saqlaydi.",
      "en": "Shares common device identification while dedicating hardware-specific controls to subclasses.",
      "ru": "Наследует имя устройства, инкапсулируя функции диммера в подклассе."
    }
  },
  {
    "id": 131,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Korxona Arxitekturasi va Viva Tayyorgarligi",
    "sector": "121-150",
    "title": {
      "uz": "131. Iqlim Nazorati — SmartThermostat va Haroratni Sozlash",
      "en": "131. Climate Control — SmartThermostat Temperature Calibration",
      "ru": "131. Климат-контроль — Настройка температуры в SmartThermostat"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nAqlli termostat ('SmartThermostat') xonaning maqsadli haroratini ('targetTempC') sozlaydi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'SmartDevice' sinfini e'lon qiling: 'private String deviceName;' maydoni, konstruktor va getteri.\n2. 'SmartThermostat' sinfini 'extends SmartDevice' qiling: 'private double targetTempC;' maydoni, konstruktorda 'super(deviceName);'. Setter va getter yozing.\n3. 'Main' metodida 'SmartThermostat thermo = new SmartThermostat(\"Yotoqxona Termostati\");' yarating.\n4. 'thermo.setTargetTempC(22.5);' qilib sozlang.\n5. Konsolga: \"Yotoqxona Termostati harorati: 22.5C\" deb chop eting.",
      "en": "📖 Real-World Scenario\nSmart thermostats regulate ambient temperature through calibrated target values.\n\n📋 Steps\n1. Create SmartDevice(deviceName).\n2. SmartThermostat extends SmartDevice with targetTempC.\n3. In Main, instantiate SmartThermostat, set temp to 22.5, and print status.",
      "ru": "📖 Контекст\nУмный термостат настраивает целевую температуру помещения.\n\n📋 Шаги\n1. Создайте SmartDevice и SmartThermostat extends SmartDevice.\n2. Добавьте поле targetTempC с геттером/сеттером.\n3. В main выведите: \"Yotoqxona Termostati harorati: 22.5C\"."
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartThermostat",
        "Main"
      ],
      "fields": [
        {
          "name": "deviceName",
          "type": "String"
        },
        {
          "name": "targetTempC",
          "type": "double"
        }
      ],
      "privateFields": [
        "deviceName",
        "targetTempC"
      ],
      "methods": [
        "setTargetTempC",
        "getTargetTempC"
      ],
      "constructors": [
        "SmartDevice",
        "SmartThermostat"
      ],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class SmartDevice {\n    \n}\n\nclass SmartThermostat extends SmartDevice {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class SmartDevice {\n    private String deviceName;\n\n    public SmartDevice(String deviceName) {\n        this.deviceName = deviceName;\n    }\n\n    public String getDeviceName() {\n        return deviceName;\n    }\n}\n\nclass SmartThermostat extends SmartDevice {\n    private double targetTempC;\n\n    public SmartThermostat(String deviceName) {\n        super(deviceName);\n    }\n\n    public void setTargetTempC(double targetTempC) {\n        this.targetTempC = targetTempC;\n    }\n\n    public double getTargetTempC() {\n        return targetTempC;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartThermostat thermo = new SmartThermostat(\"Yotoqxona Termostati\");\n        thermo.setTargetTempC(22.5);\n        System.out.println(thermo.getDeviceName() + \" harorati: \" + thermo.getTargetTempC() + \"C\");\n    }\n}",
    "detailedSolution": {
      "uz": "Aqlli uy ekotizimidagi har xil turdagi sensor va aktuatorlar bitta bazaviy sinfga tayangan holda qadamma-qadam rivojlanadi.",
      "en": "Standardizes environmental controllers cleanly upon the common device foundation.",
      "ru": "Стандартизирует климатические контроллеры на базе общего абстрактного устройства."
    }
  },
  {
    "id": 132,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Korxona Arxitekturasi va Viva Tayyorgarligi",
    "sector": "121-150",
    "title": {
      "uz": "132. Uy Hab Markazi — SmartHub Bilan Qurilmalarni O'chirish Polimorfizmi",
      "en": "132. Smart Hub — Centralized Device Control via Polymorphic Shutdown",
      "ru": "132. Умный хаб — Полиморфное отключение устройств через SmartHub"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nAqlli uy markaziy habi barcha qurilmalarning 'turnOff()' metodini chaqira oladi. Dynamic dispatch tufayli chiroq o'ziga xos o'chadi, termostat esa eko rejimga o'tadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'SmartDevice' sinfida 'public String turnOff()' metodi 'Qurilma o'chirildi' qaytarsin.\n2. 'SmartLight' sinfini 'extends SmartDevice' qilib 'turnOff()' da 'Chiroq o'chirildi 💡' qaytaring.\n3. 'SmartThermostat' sinfini 'extends SmartDevice' qilib 'turnOff()' da 'Termostat kutish rejimiga o'tdi ❄️' qaytaring.\n4. 'Main' metodida 'java.util.ArrayList<SmartDevice> devices' ro'yxatiga bittadan obyekt qo'shing va for-each siklida 'dev.turnOff()' ni ekranga chiqaring.",
      "en": "📖 Real-World Scenario\nSmart hubs issue broadcast shutdown signals executing polymorphic device behaviors.\n\n📋 Steps\n1. SmartDevice turnOff() returns \"Qurilma o'chirildi\".\n2. SmartLight and SmartThermostat override turnOff().\n3. In Main, iterate ArrayList<SmartDevice> and print turnOff() output for each.",
      "ru": "📖 Контекст\nХаб выключает все устройства полиморфно через цикл for-each.\n\n📋 Шаги\n1. Создайте SmartDevice с методом turnOff().\n2. Переопределите turnOff() в SmartLight и SmartThermostat.\n3. В main вызовите turnOff() в цикле."
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartLight",
        "SmartThermostat",
        "Main"
      ],
      "methods": [
        "turnOff"
      ],
      "keywords": [
        "extends",
        "@Override",
        "for"
      ]
    },
    "starterCode": "class SmartDevice {\n    \n}\n\nclass SmartLight extends SmartDevice {\n    \n}\n\nclass SmartThermostat extends SmartDevice {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.ArrayList;\n\nclass SmartDevice {\n    public String turnOff() {\n        return \"Qurilma o'chirildi\";\n    }\n}\n\nclass SmartLight extends SmartDevice {\n    @Override\n    public String turnOff() {\n        return \"Chiroq o'chirildi 💡\";\n    }\n}\n\nclass SmartThermostat extends SmartDevice {\n    @Override\n    public String turnOff() {\n        return \"Termostat kutish rejimiga o'tdi ❄️\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ArrayList<SmartDevice> devices = new ArrayList<>();\n        devices.add(new SmartLight());\n        devices.add(new SmartThermostat());\n\n        for (SmartDevice dev : devices) {\n            System.out.println(dev.turnOff());\n        }\n    }\n}",
    "detailedSolution": {
      "uz": "Polimorfik markaziy boshqaruv — aqlli uy dasturlarida yangi jihozlar qo'shilganda kodni o'zgartirmaslikning eng optimal yo'lidir.",
      "en": "Dynamic method dispatch allows seamless extension of smart home devices without altering controller logic.",
      "ru": "Динамическая диспетчеризация позволяет расширять умный дом новыми устройствами без изменения контроллера."
    }
  },
  {
    "id": 133,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Korxona Arxitekturasi va Viva Tayyorgarligi",
    "sector": "121-150",
    "title": {
      "uz": "133. Aviatsiya — PassengerFlight va Yo'lovchilar Og'irligi Hisobi",
      "en": "133. Aviation Systems — PassengerFlight Total Payload Estimation",
      "ru": "133. Авиация — Оценка взлетного веса пассажиров в PassengerFlight"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nUzbekistan Airways reysida 'Flight' (flightNumber) ota sinfiga yo'lovchi reysi 'PassengerFlight' (passengersCount) bolasi qo'shiladi. O'rtacha 1 ta yo'lovchi yuklari bilan 80.0 kg deb hisoblansa, umumiy vazn 'passengersCount * 80.0' kg bo'ladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Flight' sinfini e'lon qiling: 'private String flightNumber;' maydoni, konstruktor va getteri.\n2. 'PassengerFlight' sinfini 'extends Flight' qiling: 'private int passengersCount;' maydoni, konstruktorda 'super(flightNumber);'.\n3. 'PassengerFlight' ichida 'public double calculatePayloadKg()' metodida 'passengersCount * 80.0' qaytarsin.\n4. 'Main' metodida 'PassengerFlight pf = new PassengerFlight(\"HY-271\", 150);' obyektini yarating.\n5. Konsolga: \"Yo'lovchilar yuk og'irligi: 12000.0 kg\" deb chop eting.",
      "en": "📖 Real-World Scenario\nAviation dispatch computes passenger payload basing 80 kg per traveler.\n\n📋 Steps\n1. Create Flight(flightNumber).\n2. PassengerFlight(flightNumber, passengersCount) extends Flight with calculatePayloadKg().\n3. In Main, instantiate PassengerFlight(\"HY-271\", 150) and print payload.",
      "ru": "📖 Контекст\nРасчет полезной нагрузки пассажирского рейса из расчета 80 кг на человека.\n\n📋 Шаги\n1. Создайте Flight и PassengerFlight extends Flight.\n2. Реализуйте calculatePayloadKg().\n3. В main выведите: \"Yo'lovchilar yuk og'irligi: 12000.0 kg\"."
    },
    "requirements": {
      "classes": [
        "Flight",
        "PassengerFlight",
        "Main"
      ],
      "fields": [
        {
          "name": "flightNumber",
          "type": "String"
        },
        {
          "name": "passengersCount",
          "type": "int"
        }
      ],
      "privateFields": [
        "flightNumber",
        "passengersCount"
      ],
      "methods": [
        "calculatePayloadKg"
      ],
      "constructors": [
        "Flight",
        "PassengerFlight"
      ],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class Flight {\n    \n}\n\nclass PassengerFlight extends Flight {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Flight {\n    private String flightNumber;\n\n    public Flight(String flightNumber) {\n        this.flightNumber = flightNumber;\n    }\n\n    public String getFlightNumber() {\n        return flightNumber;\n    }\n}\n\nclass PassengerFlight extends Flight {\n    private int passengersCount;\n\n    public PassengerFlight(String flightNumber, int passengersCount) {\n        super(flightNumber);\n        this.passengersCount = passengersCount;\n    }\n\n    public double calculatePayloadKg() {\n        return passengersCount * 80.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PassengerFlight pf = new PassengerFlight(\"HY-271\", 150);\n        System.out.println(\"Yo'lovchilar yuk og'irligi: \" + pf.calculatePayloadKg() + \" kg\");\n    }\n}",
    "detailedSolution": {
      "uz": "Aviatsiya parvozlarida yo'lovchi va yuk reyslarining og'irlik hisobi turlicha bo'lib, polimorfizm orqali aniq modellarga ajratiladi.",
      "en": "Isolates passenger-specific mass estimation equations cleanly within dedicated flight subclasses.",
      "ru": "Изолирует расчет полезной массы пассажиров в специализированном подклассе рейса."
    }
  },
  {
    "id": 134,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Korxona Arxitekturasi va Viva Tayyorgarligi",
    "sector": "121-150",
    "title": {
      "uz": "134. Yuk Aviatsiyasi — CargoFlight va Tonnalab Kargo Reysi",
      "en": "134. Air Freight — CargoFlight Direct Cargo Tonnage Handling",
      "ru": "134. Грузовая авиация — Учет массы груза в CargoFlight"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nYuk samolyotida ('CargoFlight') yuk og'irligi to'g'ridan-to'g'ri tonnalarda ('cargoTons') beriladi va kg ga o'girilib hisoblanadi: 'cargoTons * 1000.0'.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Flight' sinfini e'lon qiling: 'private String flightNumber;' maydoni, konstruktor va getteri.\n2. 'CargoFlight' sinfini 'extends Flight' qiling: 'private double cargoTons;' maydoni, konstruktorda 'super(flightNumber);'.\n3. 'CargoFlight' ichida 'public double calculatePayloadKg()' metodida 'cargoTons * 1000.0' qaytarsin.\n4. 'Main' metodida 'CargoFlight cf = new CargoFlight(\"HY-CARGO-99\", 45.0);' obyektini yarating.\n5. Konsolga: \"Yuk reysi og'irligi: 45000.0 kg\" deb chop eting.",
      "en": "📖 Real-World Scenario\nCargo freighters compute payload converting tons directly into kilograms.\n\n📋 Steps\n1. Create Flight(flightNumber).\n2. CargoFlight(flightNumber, cargoTons) extends Flight with calculatePayloadKg() returning cargoTons * 1000.0.\n3. In Main, instantiate CargoFlight and print total kg.",
      "ru": "📖 Контекст\nГрузовой борт рассчитывает массу полезной нагрузки в килограммах.\n\n📋 Шаги\n1. Создайте Flight и CargoFlight extends Flight.\n2. Реализуйте calculatePayloadKg().\n3. В main выведите: \"Yuk reysi og'irligi: 45000.0 kg\"."
    },
    "requirements": {
      "classes": [
        "Flight",
        "CargoFlight",
        "Main"
      ],
      "fields": [
        {
          "name": "flightNumber",
          "type": "String"
        },
        {
          "name": "cargoTons",
          "type": "double"
        }
      ],
      "privateFields": [
        "flightNumber",
        "cargoTons"
      ],
      "methods": [
        "calculatePayloadKg"
      ],
      "constructors": [
        "Flight",
        "CargoFlight"
      ],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class Flight {\n    \n}\n\nclass CargoFlight extends Flight {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Flight {\n    private String flightNumber;\n\n    public Flight(String flightNumber) {\n        this.flightNumber = flightNumber;\n    }\n\n    public String getFlightNumber() {\n        return flightNumber;\n    }\n}\n\nclass CargoFlight extends Flight {\n    private double cargoTons;\n\n    public CargoFlight(String flightNumber, double cargoTons) {\n        super(flightNumber);\n        this.cargoTons = cargoTons;\n    }\n\n    public double calculatePayloadKg() {\n        return cargoTons * 1000.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CargoFlight cf = new CargoFlight(\"HY-CARGO-99\", 45.0);\n        System.out.println(\"Yuk reysi og'irligi: \" + cf.calculatePayloadKg() + \" kg\");\n    }\n}",
    "detailedSolution": {
      "uz": "Har xil parvoz modellarining o'xshash nomdagi metodlar orqali ishlashi dispetcherlik tizimining barqarorligini ta'minlaydi.",
      "en": "Standardized calculatePayloadKg signatures allow dispatchers to process mixed fleets uniformly.",
      "ru": "Единый интерфейс calculatePayloadKg позволяет диспетчерам унифицированно обрабатывать флот."
    }
  },
  {
    "id": 135,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Korxona Arxitekturasi va Viva Tayyorgarligi",
    "sector": "121-150",
    "title": {
      "uz": "135. Parvoz Manifesti — FlightManifest Bilan Uchuvchi va Reys Birlashuvi",
      "en": "135. Flight Dispatch — Composing Pilot and Flight in FlightManifest",
      "ru": "135. Полетный манифест — Композиция Pilot и Flight в FlightManifest"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nAeroport ma'lumotlar bazasida parvoz manifesti ('FlightManifest') uchuvchi ('Pilot') va reys ('Flight') obyektlarini o'zida kompozitsiya qiladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Pilot(String name)' sinfini yarating.\n2. 'Flight(String flightNumber)' sinfini yarating.\n3. 'FlightManifest' sinfini e'lon qiling: 'private Pilot pilot;' va 'private Flight flight;' maydonlari, konstruktori va getterlari.\n4. 'Main' metodida 'Pilot p = new Pilot(\"Kapitan Aliyev\"); Flight f = new Flight(\"HY-101\");' obyektlarini tuzing.\n5. 'FlightManifest m = new FlightManifest(p, f);' qilib, konsolga: \"Reys HY-101 uchuvchisi: Kapitan Aliyev\" deb chop eting.",
      "en": "📖 Real-World Scenario\nFlight manifests bind certified commanders to designated flight itineraries.\n\n📋 Steps\n1. Create Pilot(name), Flight(flightNumber).\n2. FlightManifest(pilot, flight) with getters.\n3. In Main, link pilot to flight in manifest and print status.",
      "ru": "📖 Контекст\nПолетный манифест связывает командира экипажа и рейс.\n\n📋 Шаги\n1. Создайте Pilot и Flight.\n2. Создайте FlightManifest(pilot, flight).\n3. В main выведите: \"Reys HY-101 uchuvchisi: Kapitan Aliyev\"."
    },
    "requirements": {
      "classes": [
        "Pilot",
        "Flight",
        "FlightManifest",
        "Main"
      ],
      "methods": [
        "getPilot",
        "getFlight"
      ],
      "constructors": [
        "Pilot",
        "Flight",
        "FlightManifest"
      ]
    },
    "starterCode": "class Pilot {\n    \n}\n\nclass Flight {\n    \n}\n\nclass FlightManifest {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Pilot {\n    private String name;\n\n    public Pilot(String name) {\n        this.name = name;\n    }\n\n    public String getName() {\n        return name;\n    }\n}\n\nclass Flight {\n    private String flightNumber;\n\n    public Flight(String flightNumber) {\n        this.flightNumber = flightNumber;\n    }\n\n    public String getFlightNumber() {\n        return flightNumber;\n    }\n}\n\nclass FlightManifest {\n    private Pilot pilot;\n    private Flight flight;\n\n    public FlightManifest(Pilot pilot, Flight flight) {\n        this.pilot = pilot;\n        this.flight = flight;\n    }\n\n    public Pilot getPilot() {\n        return pilot;\n    }\n\n    public Flight getFlight() {\n        return flight;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Pilot p = new Pilot(\"Kapitan Aliyev\");\n        Flight f = new Flight(\"HY-101\");\n        FlightManifest m = new FlightManifest(p, f);\n        System.out.println(\"Reys \" + m.getFlight().getFlightNumber() + \" uchuvchisi: \" + m.getPilot().getName());\n    }\n}",
    "detailedSolution": {
      "uz": "FlightManifest kompozitsiyasi yordamida parvoz jarayonining barcha ishtirokchilari bog'lanadi.",
      "en": "FlightManifest unifies operational entities cleanly through decoupled composition.",
      "ru": "FlightManifest объединяет сущности рейса через чистую композицию."
    }
  },
  {
    "id": 136,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Korxona Arxitekturasi va Viva Tayyorgarligi",
    "sector": "121-150",
    "title": {
      "uz": "136. Avtomobil Arxitekturasi — Car Sinfida Engine va GpsNavigator Kompozitsiyasi",
      "en": "136. Vehicle Architecture — Car Composing Engine and GpsNavigator",
      "ru": "136. Архитектура авто — Композиция Engine и GpsNavigator внутри Car"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nZamonaviy 'Car' avtomobili bitta emas, bir nechta komponentni o'zida birlashtiradi: u o'zida 'Engine' (dvigatel) va 'GpsNavigator' (navigatsiya) obyektlarini saqlaydi!\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Engine(int horsepower)' sinfini yarating ('getHorsepower()' getteri bilan).\n2. 'GpsNavigator(String city)' sinfini yarating ('getCity()' getteri bilan).\n3. 'Car' sinfini e'lon qiling: 'private Engine engine;' va 'private GpsNavigator gps;' maydonlari, konstruktori va getterlari.\n4. 'Main' metodida 'Engine e = new Engine(180); GpsNavigator g = new GpsNavigator(\"Toshkent\");' yarating.\n5. 'Car c = new Car(e, g);' obyektini tuzib, konsolga: \"Mashina dvigateli: 180 ot kuchi | Xarita shahri: Toshkent\" deb chop eting.",
      "en": "📖 Real-World Scenario\nAutomobiles aggregate multiple disparate subsystems (propulsion and navigation).\n\n📋 Steps\n1. Create Engine(horsepower), GpsNavigator(city).\n2. Car(engine, gps) aggregates both subsystems with getters.\n3. In Main, instantiate Car with composed objects and print status.",
      "ru": "📖 Контекст\nАвтомобиль агрегирует несколько подсистем: Engine и GpsNavigator.\n\n📋 Шаги\n1. Создайте Engine(horsepower) и GpsNavigator(city).\n2. Создайте Car(engine, gps) с геттерами.\n3. В main выведите: \"Mashina dvigateli: 180 ot kuchi | Xarita shahri: Toshkent\"."
    },
    "requirements": {
      "classes": [
        "Engine",
        "GpsNavigator",
        "Car",
        "Main"
      ],
      "methods": [
        "getHorsepower",
        "getCity",
        "getEngine",
        "getGps"
      ],
      "constructors": [
        "Engine",
        "GpsNavigator",
        "Car"
      ]
    },
    "starterCode": "class Engine {\n    \n}\n\nclass GpsNavigator {\n    \n}\n\nclass Car {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Engine {\n    private int horsepower;\n\n    public Engine(int horsepower) {\n        this.horsepower = horsepower;\n    }\n\n    public int getHorsepower() {\n        return horsepower;\n    }\n}\n\nclass GpsNavigator {\n    private String city;\n\n    public GpsNavigator(String city) {\n        this.city = city;\n    }\n\n    public String getCity() {\n        return city;\n    }\n}\n\nclass Car {\n    private Engine engine;\n    private GpsNavigator gps;\n\n    public Car(Engine engine, GpsNavigator gps) {\n        this.engine = engine;\n        this.gps = gps;\n    }\n\n    public Engine getEngine() {\n        return engine;\n    }\n\n    public GpsNavigator getGps() {\n        return gps;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Engine e = new Engine(180);\n        GpsNavigator g = new GpsNavigator(\"Toshkent\");\n        Car c = new Car(e, g);\n        System.out.println(\"Mashina dvigateli: \" + c.getEngine().getHorsepower() + \" ot kuchi | Xarita shahri: \" + c.getGps().getCity());\n    }\n}",
    "detailedSolution": {
      "uz": "Murakkab obyektdagi ko'p komponentli kompozitsiya Coursework 2 dagi asosiy tizim loyihasining tayanchidir.",
      "en": "Multi-component composition models real-world enterprise aggregates cleanly without bloated classes.",
      "ru": "Многокомпонентная композиция моделирует сложные корпоративные агрегаты без раздувания классов."
    }
  },
  {
    "id": 137,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Korxona Arxitekturasi va Viva Tayyorgarligi",
    "sector": "121-150",
    "title": {
      "uz": "137. Kompyuter Jamlash — Computer Sinfida Cpu va RamModule Kompozitsiyasi",
      "en": "137. Hardware Assembly — Computer Composing Cpu and RamModule",
      "ru": "137. Сборка ПК — Композиция Cpu и RamModule внутри Computer"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nKompyuter yig'ishda 'Computer' sinfi 'Cpu' (protsessor modeli) va 'RamModule' (operativ xotira hajmi) qismlaridan tashkil topadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Cpu(String model)' sinfini yarating ('getModel()' getteri bilan).\n2. 'RamModule(int sizeGb)' sinfini yarating ('getSizeGb()' getteri bilan).\n3. 'Computer' sinfini e'lon qiling: 'private Cpu cpu;' va 'private RamModule ram;' maydonlari, konstruktori va getterlari.\n4. 'Main' metodida 'Cpu c = new Cpu(\"Intel Core i7\"); RamModule r = new RamModule(16);' obyektlarini yarating.\n5. 'Computer pc = new Computer(c, r);' qilib, konsolga: \"Kompyuter: Intel Core i7 | Operativ xotira: 16 GB\" deb chop eting.",
      "en": "📖 Real-World Scenario\nHardware motherboards compose processing units and memory modules.\n\n📋 Steps\n1. Create Cpu(model), RamModule(sizeGb).\n2. Computer(cpu, ram) aggregates both components.\n3. In Main, instantiate Computer and print hardware specifications.",
      "ru": "📖 Контекст\nКомпьютер объединяет процессор Cpu и оперативную память RamModule.\n\n📋 Шаги\n1. Создайте Cpu(model) и RamModule(sizeGb).\n2. Создайте Computer(cpu, ram) с геттерами.\n3. В main выведите: \"Kompyuter: Intel Core i7 | Operativ xotira: 16 GB\"."
    },
    "requirements": {
      "classes": [
        "Cpu",
        "RamModule",
        "Computer",
        "Main"
      ],
      "methods": [
        "getModel",
        "getSizeGb",
        "getCpu",
        "getRam"
      ],
      "constructors": [
        "Cpu",
        "RamModule",
        "Computer"
      ]
    },
    "starterCode": "class Cpu {\n    \n}\n\nclass RamModule {\n    \n}\n\nclass Computer {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Cpu {\n    private String model;\n\n    public Cpu(String model) {\n        this.model = model;\n    }\n\n    public String getModel() {\n        return model;\n    }\n}\n\nclass RamModule {\n    private int sizeGb;\n\n    public RamModule(int sizeGb) {\n        this.sizeGb = sizeGb;\n    }\n\n    public int getSizeGb() {\n        return sizeGb;\n    }\n}\n\nclass Computer {\n    private Cpu cpu;\n    private RamModule ram;\n\n    public Computer(Cpu cpu, RamModule ram) {\n        this.cpu = cpu;\n        this.ram = ram;\n    }\n\n    public Cpu getCpu() {\n        return cpu;\n    }\n\n    public RamModule getRam() {\n        return ram;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Cpu c = new Cpu(\"Intel Core i7\");\n        RamModule r = new RamModule(16);\n        Computer pc = new Computer(c, r);\n        System.out.println(\"Kompyuter: \" + pc.getCpu().getModel() + \" | Operativ xotira: \" + pc.getRam().getSizeGb() + \" GB\");\n    }\n}",
    "detailedSolution": {
      "uz": "Komponentlarning mustaqil sinf sifatida ajratilishi ularni alohida testlash va almashtirishni osonlashtiradi.",
      "en": "Decoupled component classes simplify unit testing and hardware replacement simulations.",
      "ru": "Выделение компонентов в независимые классы упрощает тестирование и замену модулей."
    }
  },
  {
    "id": 138,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Korxona Arxitekturasi va Viva Tayyorgarligi",
    "sector": "121-150",
    "title": {
      "uz": "138. E-Commerce Buyurtma — ECommerceOrder Sinfida Address va PaymentMethod",
      "en": "138. E-Commerce Order — Composing ShippingAddress and PaymentMethod",
      "ru": "138. E-Commerce заказ — Композиция ShippingAddress и PaymentMethod"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nUzum Market rasmiylashtirish jarayonida buyurtma 'ECommerceOrder' o'zida 'ShippingAddress' (yetkazish manzili) va 'PaymentMethod' (to'lov turi) obyektlarini saqlaydi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'ShippingAddress(String city)' sinfini e'lon qiling ('getCity()' getteri bilan).\n2. 'PaymentMethod(String type)' sinfini e'lon qiling ('getType()' getteri bilan).\n3. 'ECommerceOrder' sinfini e'lon qiling: 'private ShippingAddress address;' va 'private PaymentMethod payment;' maydonlari, konstruktori va getterlari.\n4. 'Main' metodida 'ShippingAddress addr = new ShippingAddress(\"Samarqand\"); PaymentMethod pay = new PaymentMethod(\"Payme\");' yarating.\n5. 'ECommerceOrder order = new ECommerceOrder(addr, pay);' tuzib, konsolga: \"Buyurtma manzili: Samarqand | To'lov usuli: Payme\" deb chop eting.",
      "en": "📖 Real-World Scenario\nE-commerce checkout aggregates delivery logistics and payment processor credentials.\n\n📋 Steps\n1. Create ShippingAddress(city), PaymentMethod(type).\n2. ECommerceOrder(address, payment) aggregates both with getters.\n3. In Main, instantiate order and print checkout summary.",
      "ru": "📖 Контекст\nЗаказ интернет-магазина связывает адрес доставки и способ оплаты.\n\n📋 Шаги\n1. Создайте ShippingAddress(city) и PaymentMethod(type).\n2. Создайте ECommerceOrder(address, payment) с геттерами.\n3. В main выведите: \"Buyurtma manzili: Samarqand | To'lov usuli: Payme\"."
    },
    "requirements": {
      "classes": [
        "ShippingAddress",
        "PaymentMethod",
        "ECommerceOrder",
        "Main"
      ],
      "methods": [
        "getCity",
        "getType",
        "getAddress",
        "getPayment"
      ],
      "constructors": [
        "ShippingAddress",
        "PaymentMethod",
        "ECommerceOrder"
      ]
    },
    "starterCode": "class ShippingAddress {\n    \n}\n\nclass PaymentMethod {\n    \n}\n\nclass ECommerceOrder {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class ShippingAddress {\n    private String city;\n\n    public ShippingAddress(String city) {\n        this.city = city;\n    }\n\n    public String getCity() {\n        return city;\n    }\n}\n\nclass PaymentMethod {\n    private String type;\n\n    public PaymentMethod(String type) {\n        this.type = type;\n    }\n\n    public String getType() {\n        return type;\n    }\n}\n\nclass ECommerceOrder {\n    private ShippingAddress address;\n    private PaymentMethod payment;\n\n    public ECommerceOrder(ShippingAddress address, PaymentMethod payment) {\n        this.address = address;\n        this.payment = payment;\n    }\n\n    public ShippingAddress getAddress() {\n        return address;\n    }\n\n    public PaymentMethod getPayment() {\n        return payment;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ShippingAddress addr = new ShippingAddress(\"Samarqand\");\n        PaymentMethod pay = new PaymentMethod(\"Payme\");\n        ECommerceOrder order = new ECommerceOrder(addr, pay);\n        System.out.println(\"Buyurtma manzili: \" + order.getAddress().getCity() + \" | To'lov usuli: \" + order.getPayment().getType());\n    }\n}",
    "detailedSolution": {
      "uz": "Ushbu struktura Coursework 2 dagi buyurtma mexanizmining eng toza namunasidir.",
      "en": "Standard benchmark architecture for Coursework 2 checkout flow design.",
      "ru": "Эталонная архитектура оформления заказа для курсовой работы CW2."
    }
  },
  {
    "id": 139,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Korxona Arxitekturasi va Viva Tayyorgarligi",
    "sector": "121-150",
    "title": {
      "uz": "139. Viva Imtihoni — Agregatsiya (Kuchsiz Bog'lanish, Obyekt Mustaqil Yashaydi)",
      "en": "139. Viva Mastery — Aggregation Lifecycle (Independent Lifetimes)",
      "ru": "139. Viva Экзамен — Агрегация (слабая связь, независимое время жизни)"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT Viva imtihoni savoli: 'What is Aggregation?'.\nAgregatsiya — bu 'has-a' munosabatining shunday turiki, unda ichki obyekt tashqi obyekt o'chirilganda ham mustaqil yashashda davom etadi! Masalan: Universitet kafedrasi ('Department') yopilsa ham, professor ('Professor') universitetda qoladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Professor(String name)' sinfini e'lon qiling ('getName()' getteri bilan).\n2. 'Department(String deptName, Professor prof)' sinfini e'lon qiling ('getDeptName()' va 'getProfessor()' getterlari bilan).\n3. 'Main' metodida avval 'Professor prof = new Professor(\"Dr. Alan\");' mustaqil obyektini yarating.\n4. 'Department dept = new Department(\"Hisoblash Texnikasi\", prof);' agregatsiyasini tuzing.\n5. Konsolga: \"Kafedra: Hisoblash Texnikasi | Professor: Dr. Alan\" deb chop eting.",
      "en": "📖 Real-World Scenario\nViva Exam Question: Aggregation is a weak 'has-a' relationship where the child object can exist independently of the container.\n\n📋 Steps\n1. Create Professor(name).\n2. Create Department(deptName, prof) demonstrating aggregation.\n3. In Main, instantiate Professor independently and pass into Department.\n4. Print: \"Kafedra: Hisoblash Texnikasi | Professor: Dr. Alan\".",
      "ru": "📖 Контекст\nВопрос на Viva: Агрегация — это слабая связь 'has-a', при которой внутренний объект существует независимо от родителя.\n\n📋 Шаги\n1. Создайте Professor(name).\n2. Создайте Department(deptName, prof).\n3. В main передайте созданного профессора в кафедру.\n4. Выведите: \"Kafedra: Hisoblash Texnikasi | Professor: Dr. Alan\"."
    },
    "requirements": {
      "classes": [
        "Professor",
        "Department",
        "Main"
      ],
      "methods": [
        "getName",
        "getDeptName",
        "getProfessor"
      ],
      "constructors": [
        "Professor",
        "Department"
      ]
    },
    "starterCode": "class Professor {\n    \n}\n\nclass Department {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Professor {\n    private String name;\n\n    public Professor(String name) {\n        this.name = name;\n    }\n\n    public String getName() {\n        return name;\n    }\n}\n\nclass Department {\n    private String deptName;\n    private Professor professor;\n\n    public Department(String deptName, Professor professor) {\n        this.deptName = deptName;\n        this.professor = professor;\n    }\n\n    public String getDeptName() {\n        return deptName;\n    }\n\n    public Professor getProfessor() {\n        return professor;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Professor prof = new Professor(\"Dr. Alan\");\n        Department dept = new Department(\"Hisoblash Texnikasi\", prof);\n        System.out.println(\"Kafedra: \" + dept.getDeptName() + \" | Professor: \" + dept.getProfessor().getName());\n    }\n}",
    "detailedSolution": {
      "uz": "Agregatsiyada Professor obyekti Department dan tashqarida yaratiladi va unga uzatiladi. Department yo'q bo'lsa ham Professor xotirada qoladi.",
      "en": "In aggregation, the child object is instantiated externally and passed in; its lifecycle is not governed by the container.",
      "ru": "При агрегации объект профессора создается извне; его время жизни не зависит от кафедры."
    }
  },
  {
    "id": 140,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Korxona Arxitekturasi va Viva Tayyorgarligi",
    "sector": "121-150",
    "title": {
      "uz": "140. Viva Imtihoni — Qat'iy Kompozitsiya (Ichki Obyekt Birga Yaratiladi va O'ladi)",
      "en": "140. Viva Mastery — Strict Composition (Co-dependent Lifecycle)",
      "ru": "140. Viva Экзамен — Строгая композиция (совместное время жизни)"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT Viva savoli: 'What is strict Composition?'.\nQat'iy kompozitsiyada ichki obyekt to'g'ridan-to'g'ri ota sinf konstruktori ichida 'new' orqali yaratiladi! Bino ('Building') buzilsa, uning ichidagi xona ('Room') ham yo'q bo'ladi — xona binodan alohida yashay olmaydi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Room(String roomName)' sinfini e'lon qiling ('getRoomName()' getteri bilan).\n2. 'Building' sinfini e'lon qiling: 'private Room mainLobby;' maydoni. 'Building(String lobbyName)' konstruktori ichida 'this.mainLobby = new Room(lobbyName);' deb qat'iy kompozitsiya qiling!\n3. 'Building' ichida 'public Room getMainLobby()' getterini yozing.\n4. 'Main' metodida 'Building b = new Building(\"WIUT Asosiy Vestibyul\");' obyektini yarating.\n5. Konsolga: \"Bino xonasi: \" + b.getMainLobby().getRoomName() deb chop eting.",
      "en": "📖 Real-World Scenario\nViva Exam Question: Strict composition instantiates the child inside the owner's constructor; the child cannot survive without the parent.\n\n📋 Steps\n1. Create Room(roomName).\n2. Building(lobbyName) constructs this.mainLobby = new Room(lobbyName) internally.\n3. In Main, instantiate Building and print lobby name.",
      "ru": "📖 Контекст\nВопрос Viva: При строгой композиции внутренний объект создается внутри конструктора владельца и погибает вместе с ним.\n\n📋 Шаги\n1. Создайте Room(roomName).\n2. В конструкторе Building инициализируйте new Room(lobbyName).\n3. В main выведите: \"Bino xonasi: WIUT Asosiy Vestibyul\"."
    },
    "requirements": {
      "classes": [
        "Room",
        "Building",
        "Main"
      ],
      "methods": [
        "getRoomName",
        "getMainLobby"
      ],
      "constructors": [
        "Room",
        "Building"
      ]
    },
    "starterCode": "class Room {\n    \n}\n\nclass Building {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Room {\n    private String roomName;\n\n    public Room(String roomName) {\n        this.roomName = roomName;\n    }\n\n    public String getRoomName() {\n        return roomName;\n    }\n}\n\nclass Building {\n    private Room mainLobby;\n\n    public Building(String lobbyName) {\n        this.mainLobby = new Room(lobbyName);\n    }\n\n    public Room getMainLobby() {\n        return mainLobby;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Building b = new Building(\"WIUT Asosiy Vestibyul\");\n        System.out.println(\"Bino xonasi: \" + b.getMainLobby().getRoomName());\n    }\n}",
    "detailedSolution": {
      "uz": "Qat'iy kompozitsiyada Room tashqaridan berilmaydi, Building o'zi uni 'new' qilib yaratadi va uning butun umrini boshqaradi.",
      "en": "Strict composition instantiates dependent parts directly within the owner, bonding their lifecycles permanently.",
      "ru": "Строгая композиция создает внутренний объект прямо в конструкторе, связывая их жизненные циклы."
    }
  },
  {
    "id": 141,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Korxona Arxitekturasi va Viva Tayyorgarligi",
    "sector": "121-150",
    "title": {
      "uz": "141. Buxgalteriya Invoysi — Invoice va InvoiceItem Qat'iy Kompozitsiyasi",
      "en": "141. Accounting Invoices — Strict Composition in Invoice Line Items",
      "ru": "141. Бухгалтерский инвойс — Строгая композиция строк InvoiceItem"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nInvoys satri ('InvoiceItem') faqat o'sha invoysga ('Invoice') tegishli bo'lib, alohida mavjud bo'la olmaydi. Konstruktor ichida ichki qat'iy initsializatsiya qilinadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'InvoiceItem(String desc, double amount)' sinfini e'lon qiling ('getAmount()' getteri bilan).\n2. 'Invoice' sinfini e'lon qiling: 'private InvoiceItem item;' maydoni. 'Invoice(String desc, double amount)' konstruktori ichida 'this.item = new InvoiceItem(desc, amount);' qiling.\n3. 'Invoice' ichida 'public InvoiceItem getItem()' getterini yozing.\n4. 'Main' metodida 'Invoice inv = new Invoice(\"Konsalting xizmati\", 1200000.0);' obyektini yarating.\n5. Konsolga: \"Invoys summasi: 1200000.0 so'm\" deb chop eting.",
      "en": "📖 Real-World Scenario\nFinancial line items are tightly coupled to their parent invoice lifecycle.\n\n📋 Steps\n1. Create InvoiceItem(desc, amount).\n2. Invoice(desc, amount) internally instantiates new InvoiceItem(desc, amount).\n3. In Main, instantiate Invoice and print item amount.",
      "ru": "📖 Контекст\nСтрока счета InvoiceItem не имеет смысла без родительского инвойса Invoice.\n\n📋 Шаги\n1. Создайте InvoiceItem(desc, amount).\n2. В конструкторе Invoice вызовите new InvoiceItem(desc, amount).\n3. В main выведите: \"Invoys summasi: 1200000.0 so'm\"."
    },
    "requirements": {
      "classes": [
        "InvoiceItem",
        "Invoice",
        "Main"
      ],
      "methods": [
        "getAmount",
        "getItem"
      ],
      "constructors": [
        "InvoiceItem",
        "Invoice"
      ]
    },
    "starterCode": "class InvoiceItem {\n    \n}\n\nclass Invoice {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class InvoiceItem {\n    private String desc;\n    private double amount;\n\n    public InvoiceItem(String desc, double amount) {\n        this.desc = desc;\n        this.amount = amount;\n    }\n\n    public double getAmount() {\n        return amount;\n    }\n}\n\nclass Invoice {\n    private InvoiceItem item;\n\n    public Invoice(String desc, double amount) {\n        this.item = new InvoiceItem(desc, amount);\n    }\n\n    public InvoiceItem getItem() {\n        return item;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Invoice inv = new Invoice(\"Konsalting xizmati\", 1200000.0);\n        System.out.println(\"Invoys summasi: \" + inv.getItem().getAmount() + \" so'm\");\n    }\n}",
    "detailedSolution": {
      "uz": "Viva imtihonida Agregatsiya va Kompozitsiya farqini aynan shu ikki misol (Department/Professor vs Building/Room) orqali tushuntirish 100% yuqori baho keltiradi.",
      "en": "Contrasting loose aggregation with tight composition directly fulfills essential Viva criteria.",
      "ru": "Различие агрегации и композиции на этих примерах является ключевым критерием успешной сдачи Viva."
    }
  },
  {
    "id": 142,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Korxona Arxitekturasi va Viva Tayyorgarligi",
    "sector": "121-150",
    "title": {
      "uz": "142. Mudofaa Nusxalash — Getterda O'zgaruvchan Massiv Nusxasini Qaytarish (Defensive Copy)",
      "en": "142. Defensive Copying — Protecting Mutable Arrays in Getters",
      "ru": "142. Защитное копирование — Защита массивов в геттерах (Defensive Copy)"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nAgar sinfda private massiv 'int[] scores;' bo'lsa, uni to'g'ridan-to'g'ri qaytarish ('return scores;') xavflidir! Tashqi dasturchi olingan massiv elementini o'zgartirsa, sinfning ichki holati ham buziladi. Buni oldini olish uchun 'return scores.clone();' orqali mudofaa nusxasi (Defensive Copy) qaytariladi!\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'GradeBook' sinfini e'lon qiling: 'private int[] grades;' maydoni va 'GradeBook(int[] grades)' konstruktori ('this.grades = grades.clone();').\n2. 'public int[] getGrades()' metodida 'return grades.clone();' qilib mudofaa nusxasini qaytaring.\n3. 'Main' metodida 'int[] initial = {85, 90, 95}; GradeBook gb = new GradeBook(initial);' yarating.\n4. 'int[] leaked = gb.getGrades(); leaked[0] = 0;' qilib tashqi nusxani o'zgartiring.\n5. 'gb.getGrades()[0]' ni tekshiring: u hali ham buzilmagan '85' bo'lib turishi kerak! Konsolga: \"Haqiqiy baho buzilmadi: 85\" deb chop eting.",
      "en": "📖 Real-World Scenario\nReturning mutable array references leaks encapsulation. Defensive copying via .clone() secures internal state.\n\n📋 Steps\n1. Create GradeBook with private int[] grades, defensively copying in constructor and getter via clone().\n2. In Main, obtain grades, mutate external element, and verify internal state remains intact.\n3. Print: \"Haqiqiy baho buzilmadi: 85\".",
      "ru": "📖 Контекст\nВозврат ссылки на изменяемый массив нарушает инкапсуляцию. Защитное копирование через clone() защищает состояние.\n\n📋 Шаги\n1. Создайте GradeBook с private int[] grades и защитным копированием через .clone().\n2. В main измените возвращенный массив и убедитесь, что оригинал не изменился.\n3. Выведите: \"Haqiqiy baho buzilmadi: 85\"."
    },
    "requirements": {
      "classes": [
        "GradeBook",
        "Main"
      ],
      "fields": [
        {
          "name": "grades",
          "type": "int[]"
        }
      ],
      "privateFields": [
        "grades"
      ],
      "methods": [
        "getGrades"
      ],
      "constructors": [
        "GradeBook"
      ],
      "keywords": [
        "clone()"
      ]
    },
    "starterCode": "class GradeBook {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class GradeBook {\n    private int[] grades;\n\n    public GradeBook(int[] grades) {\n        this.grades = grades.clone();\n    }\n\n    public int[] getGrades() {\n        return grades.clone();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        int[] initial = {85, 90, 95};\n        GradeBook gb = new GradeBook(initial);\n        int[] leaked = gb.getGrades();\n        leaked[0] = 0;\n        System.out.println(\"Haqiqiy baho buzilmadi: \" + gb.getGrades()[0]);\n    }\n}",
    "detailedSolution": {
      "uz": "Mudofaa nusxalash (Defensive Copying) orqali obyektdan tashqaridagi buzg'unchi kodlar sinfning ichki ma'lumotlarini o'zgartira olmaydi.",
      "en": "Defensive copying is an essential enterprise technique preventing outside mutations of internal encapsulated structures.",
      "ru": "Защитное копирование — важнейшая техника для предотвращения внешних изменений внутреннего состояния объекта."
    }
  },
  {
    "id": 143,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Korxona Arxitekturasi va Viva Tayyorgarligi",
    "sector": "121-150",
    "title": {
      "uz": "143. Xavfsiz Jadval — Defensive Copying Bilan Ro'yxatni Himoyalash",
      "en": "143. Safe Scheduling — Defensive Copying of Appointment Collections",
      "ru": "143. Расписание — Защитное копирование списков назначений"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nUchrashuvlar jadvalida 'ArrayList<String> slots' ro'yxati getterda 'new ArrayList<>(slots)' qilib qaytarilsa, tashqi tomondan ro'yxatga yangi element qo'shilganda ichki jadval buzilmaydi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Schedule' sinfini e'lon qiling: 'private java.util.ArrayList<String> slots;' maydoni. Konstruktorda bo'sh ro'yxat ochilsin va 'addSlot(String s)' metodi bo'lsin.\n2. 'public java.util.ArrayList<String> getSlots()' metodida 'return new java.util.ArrayList<>(slots);' mudofaa nusxasini qaytaring.\n3. 'Main' metodida 'Schedule sch = new Schedule(); sch.addSlot(\"10:00 - Seminar\");' qiling.\n4. 'sch.getSlots().clear();' qilib olingan ro'yxatni tozalang.\n5. 'sch.getSlots().size()' hali ham 1 ekanligini tasdiqlang. Konsolga: \"Haqiqiy jadval o'lchami: 1\" deb chop eting.",
      "en": "📖 Real-World Scenario\nReturning new ArrayList<>(slots) protects collections against unintended clear() or add() calls.\n\n📋 Steps\n1. Create Schedule with addSlot(String) and defensive getSlots().\n2. In Main, attempt clearing the returned list and verify internal size remains 1.\n3. Print: \"Haqiqiy jadval o'lchami: 1\".",
      "ru": "📖 Контекст\nВозврат new ArrayList<>(slots) защищает коллекцию от несанкционированной очистки.\n\n📋 Шаги\n1. Создайте Schedule с addSlot и защитным getSlots().\n2. В main очистите полученный список и проверьте, что размер остался 1.\n3. Выведите: \"Haqiqiy jadval o'lchami: 1\"."
    },
    "requirements": {
      "classes": [
        "Schedule",
        "Main"
      ],
      "methods": [
        "addSlot",
        "getSlots"
      ],
      "keywords": [
        "ArrayList",
        "new ArrayList"
      ]
    },
    "starterCode": "class Schedule {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.ArrayList;\n\nclass Schedule {\n    private ArrayList<String> slots = new ArrayList<>();\n\n    public void addSlot(String slot) {\n        slots.add(slot);\n    }\n\n    public ArrayList<String> getSlots() {\n        return new ArrayList<>(slots);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Schedule sch = new Schedule();\n        sch.addSlot(\"10:00 - Seminar\");\n        sch.getSlots().clear();\n        System.out.println(\"Haqiqiy jadval o'lchami: \" + sch.getSlots().size());\n    }\n}",
    "detailedSolution": {
      "uz": "To'plam nusxasini qaytarish kolleksiyani tashqi o'zboshimchalik bilan manipulyatsiya qilishdan himoyalaydi.",
      "en": "Shields internal lists from external tampering by returning an uncoupled collection copy.",
      "ru": "Защищает внутренние списки от внешних манипуляций путем возврата отвязанной копии."
    }
  },
  {
    "id": 144,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Korxona Arxitekturasi va Viva Tayyorgarligi",
    "sector": "121-150",
    "title": {
      "uz": "144. Moliya Balansi — FinancialReport Massivini O'zgartirishlardan Himoyalash",
      "en": "144. Financial Integrity — Safeguarding Quarterly Balances via Defensive Copying",
      "ru": "144. Финансовая отчетность — Защита квартальных балансов через Defensive Copy"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nKompaniya moliyaviy hisobotida 'double[] quarterlyRevenue' massivi mudofaa nusxalash orqali tashqi o'zgartirishlardan to'liq muhofaza qilinadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'FinancialReport' sinfini e'lon qiling: 'private double[] revenue;' maydoni, konstruktor va getteri (ikkalasi ham '.clone()' bilan mudofaalangan).\n2. 'Main' metodida 'double[] q = {1000.0, 2000.0}; FinancialReport fr = new FinancialReport(q);' yarating.\n3. 'fr.getRevenue()[0] = 999999.0;' qilib o'zgartirishga urining.\n4. 'fr.getRevenue()[0]' qiymati o'zgarmasdan 1000.0 turganini tekshiring.\n5. Konsolga: \"Boshlang'ich daromad xavfsiz: 1000.0\" deb chop eting.",
      "en": "📖 Real-World Scenario\nQuarterly balance statements employ defensive copying in constructors and accessors to guarantee audit immutability.\n\n📋 Steps\n1. Create FinancialReport(revenue) using clone() in constructor and getter.\n2. In Main, verify mutating the accessed array does not corrupt internal state.\n3. Print: \"Boshlang'ich daromad xavfsiz: 1000.0\".",
      "ru": "📖 Контекст\nФинансовый отчет защищает данные квартальной выручки с помощью clone() в конструкторе и геттере.\n\n📋 Шаги\n1. Создайте FinancialReport(revenue) с использованием clone().\n2. В main проверьте неизменяемость данных при попытке изменения.\n3. Выведите: \"Boshlang'ich daromad xavfsiz: 1000.0\"."
    },
    "requirements": {
      "classes": [
        "FinancialReport",
        "Main"
      ],
      "fields": [
        {
          "name": "revenue",
          "type": "double[]"
        }
      ],
      "privateFields": [
        "revenue"
      ],
      "methods": [
        "getRevenue"
      ],
      "constructors": [
        "FinancialReport"
      ],
      "keywords": [
        "clone()"
      ]
    },
    "starterCode": "class FinancialReport {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class FinancialReport {\n    private double[] revenue;\n\n    public FinancialReport(double[] revenue) {\n        this.revenue = revenue.clone();\n    }\n\n    public double[] getRevenue() {\n        return revenue.clone();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        double[] q = {1000.0, 2000.0};\n        FinancialReport fr = new FinancialReport(q);\n        fr.getRevenue()[0] = 999999.0;\n        System.out.println(\"Boshlang'ich daromad xavfsiz: \" + fr.getRevenue()[0]);\n    }\n}",
    "detailedSolution": {
      "uz": "Konstruktor va getterda ikkitomonlama nusxa olish obyektdan mutlaq xavfsiz (immutable) holat yaratadi.",
      "en": "Dual defensive copying in both constructor and getter achieves rock-solid immutability.",
      "ru": "Двойное защитное копирование в конструкторе и геттере обеспечивает абсолютную неизменяемость."
    }
  },
  {
    "id": 145,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Korxona Arxitekturasi va Viva Tayyorgarligi",
    "sector": "121-150",
    "title": {
      "uz": "145. CW2 Prototipi — Buyurtma Holatlari va Chegirma Hisoblagichi Integratsiyasi",
      "en": "145. CW2 Prototype — Order State Machine and Discount Integration",
      "ru": "145. Прототип CW2 — Состояния заказа и расчет скидок"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nCoursework 2 talabi: Java konsol buyurtma ilovasi. Buyurtma 'Order' o'zida mijoz 'Customer' va tovar narxini saqlaydi hamda buyurtma holatini ('NEW', 'PAID', 'DELIVERED') boshqaradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Customer(String name)' sinfini yarating.\n2. 'Order' sinfini e'lon qiling: 'private Customer customer;', 'private double amount;', 'private String status;' maydonlari, konstruktori va getterlari.\n3. 'Order' ichida 'public void markAsPaid()' metodida 'this.status = \"PAID\";' qiling.\n4. 'Main' metodida 'Customer c = new Customer(\"Aziz\"); Order o = new Order(c, 250000.0);' obyektini yarating.\n5. 'o.markAsPaid();' chaqirib, konsolga: \"Buyurtmachi: Aziz | Holati: PAID\" deb chop eting.",
      "en": "📖 Real-World Scenario\nCoursework 2 cornerstone: Order management associating Customer entity with lifecycle status transitions.\n\n📋 Steps\n1. Create Customer(name).\n2. Order(customer, amount) with markAsPaid() updating status to \"PAID\".\n3. In Main, instantiate Order, mark as paid, and print summary.",
      "ru": "📖 Контекст\nОснова курсовой работы CW2: управление заказом с клиентом Customer и сменяемым статусом.\n\n📋 Шаги\n1. Создайте Customer(name).\n2. Создайте Order(customer, amount) с методом markAsPaid().\n3. В main переведите статус в PAID и выведите: \"Buyurtmachi: Aziz | Holati: PAID\"."
    },
    "requirements": {
      "classes": [
        "Customer",
        "Order",
        "Main"
      ],
      "methods": [
        "markAsPaid",
        "getCustomer",
        "getStatus"
      ],
      "constructors": [
        "Customer",
        "Order"
      ]
    },
    "starterCode": "class Customer {\n    \n}\n\nclass Order {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Customer {\n    private String name;\n\n    public Customer(String name) {\n        this.name = name;\n    }\n\n    public String getName() {\n        return name;\n    }\n}\n\nclass Order {\n    private Customer customer;\n    private double amount;\n    private String status;\n\n    public Order(Customer customer, double amount) {\n        this.customer = customer;\n        this.amount = amount;\n        this.status = \"NEW\";\n    }\n\n    public Customer getCustomer() {\n        return customer;\n    }\n\n    public double getAmount() {\n        return amount;\n    }\n\n    public String getStatus() {\n        return status;\n    }\n\n    public void markAsPaid() {\n        this.status = \"PAID\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"Aziz\");\n        Order o = new Order(c, 250000.0);\n        o.markAsPaid();\n        System.out.println(\"Buyurtmachi: \" + o.getCustomer().getName() + \" | Holati: \" + o.getStatus());\n    }\n}",
    "detailedSolution": {
      "uz": "Buyurtma statusining bosqichma-bosqich o'zgarishi CW2 loyihasining talablariga to'la javob beradi.",
      "en": "State transition logic cleanly mirrors Coursework 2 application lifecycle specifications.",
      "ru": "Логика смены состояний полностью удовлетворяет требованиям курсового проекта CW2."
    }
  },
  {
    "id": 146,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Korxona Arxitekturasi va Viva Tayyorgarligi",
    "sector": "121-150",
    "title": {
      "uz": "146. CW2 Prototipi — Buyurtmalar Savatchasi va Jami Hisoblagich (Cart System)",
      "en": "146. CW2 Prototype — Shopping Cart Accumulation and Checkout",
      "ru": "146. Прототип CW2 — Корзина покупок и финальный расчет"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSavatcha tizimida 'Cart' sinfi 'java.util.ArrayList<Order>' ro'yxatidagi barcha buyurtmalar summasini jamlaydi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'OrderItem(String title, double price)' sinfini yarating ('getPrice()' getteri bilan).\n2. 'Cart' sinfini e'lon qiling: 'private java.util.ArrayList<OrderItem> items = new java.util.ArrayList<>();'.\n3. 'Cart' ichida 'public void addItem(OrderItem item)' va 'public double calculateCartTotal()' metodlarini yozing.\n4. 'Main' metodida savatchaga 2 ta tovar (45000.0 va 55000.0) qo'shing.\n5. Konsolga: \"Savatcha jami summasi: 100000.0 so'm\" deb chop eting.",
      "en": "📖 Real-World Scenario\nShopping cart aggregates multiple OrderItem entries and tallies order totals.\n\n📋 Steps\n1. Create OrderItem(title, price).\n2. Cart with addItem(OrderItem) and calculateCartTotal().\n3. In Main, populate cart with two items and print total: \"Savatcha jami summasi: 100000.0 so'm\".",
      "ru": "📖 Контекст\nКорзина покупок агрегирует элементы OrderItem и рассчитывает общую сумму.\n\n📋 Шаги\n1. Создайте OrderItem(title, price).\n2. Создайте Cart с методами addItem и calculateCartTotal.\n3. В main добавьте два товара и выведите: \"Savatcha jami summasi: 100000.0 so'm\"."
    },
    "requirements": {
      "classes": [
        "OrderItem",
        "Cart",
        "Main"
      ],
      "methods": [
        "addItem",
        "calculateCartTotal"
      ],
      "constructors": [
        "OrderItem"
      ]
    },
    "starterCode": "class OrderItem {\n    \n}\n\nclass Cart {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.ArrayList;\n\nclass OrderItem {\n    private String title;\n    private double price;\n\n    public OrderItem(String title, double price) {\n        this.title = title;\n        this.price = price;\n    }\n\n    public double getPrice() {\n        return price;\n    }\n}\n\nclass Cart {\n    private ArrayList<OrderItem> items = new ArrayList<>();\n\n    public void addItem(OrderItem item) {\n        items.add(item);\n    }\n\n    public double calculateCartTotal() {\n        double sum = 0.0;\n        for (OrderItem item : items) {\n            sum += item.getPrice();\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Cart cart = new Cart();\n        cart.addItem(new OrderItem(\"Kitob\", 45000.0));\n        cart.addItem(new OrderItem(\"Daftar\", 55000.0));\n        System.out.println(\"Savatcha jami summasi: \" + cart.calculateCartTotal() + \" so'm\");\n    }\n}",
    "detailedSolution": {
      "uz": "Savatcha sinfi to'plam bilan ishlash va jami hisob-kitoblarni bitta joyga jamlash imkonini beradi.",
      "en": "Cart structure demonstrates core aggregation and summation principles for retail apps.",
      "ru": "Структура корзины демонстрирует принципы агрегации и подсчета итоговых чеков."
    }
  },
  {
    "id": 147,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Korxona Arxitekturasi va Viva Tayyorgarligi",
    "sector": "121-150",
    "title": {
      "uz": "147. CW2 Prototipi — Audit Jurnali va Tranzaksiya Tarixi (Logging & History)",
      "en": "147. CW2 Prototype — Audit Trail Logger for Business Transactions",
      "ru": "147. Прототип CW2 — Журналирование аудита транзакций"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nCoursework talablaridan biri — audit qaydlari yuritish. 'AuditLogger' barcha amallarni ro'yxatda qayd etib boradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'AuditLogger' sinfini e'lon qiling: 'private java.util.ArrayList<String> logs = new java.util.ArrayList<>();'.\n2. 'public void logAction(String action)' metodida ro'yxatga qo'shing.\n3. 'public int getLogCount()' metodida 'logs.size()' qaytarsin.\n4. 'Main' metodida 'AuditLogger logger = new AuditLogger();' ochib, 2 ta amal yozing.\n5. Konsolga: \"Yozilgan audit yozuvlari soni: 2\" deb chop eting.",
      "en": "📖 Real-World Scenario\nEnterprise auditing logs transactional events sequentially for traceability.\n\n📋 Steps\n1. Create AuditLogger with internal log storage list.\n2. Provide logAction(action) and getLogCount().\n3. In Main, record two events and print: \"Yozilgan audit yozuvlari soni: 2\".",
      "ru": "📖 Контекст\nЛоггер аудита последовательно сохраняет действия пользователей для отчетности.\n\n📋 Шаги\n1. Создайте AuditLogger со списком логов.\n2. Реализуйте logAction(action) и getLogCount().\n3. В main запишите два лога и выведите: \"Yozilgan audit yozuvlari soni: 2\"."
    },
    "requirements": {
      "classes": [
        "AuditLogger",
        "Main"
      ],
      "methods": [
        "logAction",
        "getLogCount"
      ]
    },
    "starterCode": "class AuditLogger {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.ArrayList;\n\nclass AuditLogger {\n    private ArrayList<String> logs = new ArrayList<>();\n\n    public void logAction(String action) {\n        logs.add(action);\n    }\n\n    public int getLogCount() {\n        return logs.size();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AuditLogger logger = new AuditLogger();\n        logger.logAction(\"Foydalanuvchi tizimga kirdi\");\n        logger.logAction(\"Buyurtma rasmiylashtirildi\");\n        System.out.println(\"Yozilgan audit yozuvlari soni: \" + logger.getLogCount());\n    }\n}",
    "detailedSolution": {
      "uz": "Audit jurnali tizimning barcha amallarini kuzatib borish uchun ajralmas korxona xizmatidir.",
      "en": "Transactional auditing provides full operational traceability for enterprise architectures.",
      "ru": "Аудит транзакций обеспечивает полную прозрачность операций в корпоративных системах."
    }
  },
  {
    "id": 148,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Korxona Arxitekturasi va Viva Tayyorgarligi",
    "sector": "121-150",
    "title": {
      "uz": "148. Viva Qonuniyati — Merosxo'rlikdan Ko'ra Kompozitsiyani Afzal Ko'rish (Favor Composition)",
      "en": "148. Viva Invariant — Favor Composition Over Inheritance Principle",
      "ru": "148. Закон Viva — Предпочитайте композицию наследованию (Favor Composition)"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nGang of Four (GoF) kitobining Oltin Qoidasi: 'Favor object composition over class inheritance'.\nNima uchun? Chunki merosxo'rlik ota va bola sinfni qat'iy bog'lab qo'yadi ('Tight Coupling'). Kompozitsiya esa istalgan vaqtda boshqa mexanizmni almashtirish imkonini beradi ('Loose Coupling').\n'Printer' sinfiga 'InkCartridge' ni meros olmasdan, kompozitsiya qilib bering!\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'InkCartridge(String color)' sinfini e'lon qiling ('getColor()' getteri bilan).\n2. 'SmartPrinter' sinfini e'lon qiling: 'private InkCartridge cartridge;' maydoni, konstruktori va getteri.\n3. 'Main' metodida 'InkCartridge c = new InkCartridge(\"Qora (Black)\");' obyektini yarating.\n4. 'SmartPrinter p = new SmartPrinter(c);' qilib kompozitsiyani bog'lang.\n5. Konsolga: \"Printer kartridj rangi: Qora (Black)\" deb chop eting.",
      "en": "📖 Real-World Scenario\nViva Exam Invariant: Favor composition over inheritance avoids the fragile base class problem.\n\n📋 Steps\n1. Create InkCartridge(color).\n2. SmartPrinter composes InkCartridge rather than extending it.\n3. In Main, instantiate SmartPrinter with cartridge and print color.",
      "ru": "📖 Контекст\nЗолотое правило ООП: отдавайте предпочтение композиции перед наследованием.\n\n📋 Шаги\n1. Создайте InkCartridge(color).\n2. SmartPrinter содержит поле InkCartridge.\n3. В main выведите: \"Printer kartridj rangi: Qora (Black)\"."
    },
    "requirements": {
      "classes": [
        "InkCartridge",
        "SmartPrinter",
        "Main"
      ],
      "methods": [
        "getColor",
        "getCartridge"
      ],
      "constructors": [
        "InkCartridge",
        "SmartPrinter"
      ]
    },
    "starterCode": "class InkCartridge {\n    \n}\n\nclass SmartPrinter {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class InkCartridge {\n    private String color;\n\n    public InkCartridge(String color) {\n        this.color = color;\n    }\n\n    public String getColor() {\n        return color;\n    }\n}\n\nclass SmartPrinter {\n    private InkCartridge cartridge;\n\n    public SmartPrinter(InkCartridge cartridge) {\n        this.cartridge = cartridge;\n    }\n\n    public InkCartridge getCartridge() {\n        return cartridge;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        InkCartridge c = new InkCartridge(\"Qora (Black)\");\n        SmartPrinter p = new SmartPrinter(c);\n        System.out.println(\"Printer kartridj rangi: \" + p.getCartridge().getColor());\n    }\n}",
    "detailedSolution": {
      "uz": "Printer kartridjdan meros ololmaydi (Printer is not a Cartridge). U kartridjga ega bo'ladi (Printer has a Cartridge). Bu Viva imtihonidagi eng muhim farqdir!",
      "en": "Printer 'has-a' Cartridge, not 'is-a' Cartridge. Modeling this via composition respects conceptual truth.",
      "ru": "Принтер не является картриджем (is-a), а содержит его (has-a). Это ключевой вопрос на Viva!"
    }
  },
  {
    "id": 149,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Korxona Arxitekturasi va Viva Tayyorgarligi",
    "sector": "121-150",
    "title": {
      "uz": "149. Viva Qonuniyati — Liskov Substitution Principle (LSP) ga Muvofiqlik",
      "en": "149. Viva Invariant — Liskov Substitution Principle (LSP) Verification",
      "ru": "149. Закон Viva — Принцип подстановки Лисков (Liskov Substitution Principle)"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSOLID tamoyillarining 'L' harfi — Liskov Substitution Principle (LSP): Dasturda Ota sinf ishlatilgan har qanday joyda bola sinf o'rinbosar bo'la olishi va hech qanday kutilmagan xato chiqarmasligi shart!\n'Shape' ota sinfida 'calculateArea()' bo'lsa, 'Rectangle' va 'Square' sinflari ushbu qoidani buzmasdan maydonni to'g'ri hisoblaydi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Shape' sinfida 'public double calculateArea()' metodi '0.0' qaytarsin.\n2. 'Rectangle' sinfini 'extends Shape' qiling: 'private double w, h;' maydonlari, konstruktori va 'calculateArea()' da 'w * h' qaytaring.\n3. 'Main' metodida polimorfik 'Shape s = new Rectangle(5.0, 4.0);' obyektini oching.\n4. 's.calculateArea()' metodini chaqiring (LSP qoidasiga ko'ra ota sinf havolasi orqali natija to'liq to'g'ri chiqishi kerak).\n5. Konsolga: \"Shakl yuzasi: 20.0\" deb chop eting.",
      "en": "📖 Real-World Scenario\nLiskov Substitution Principle (LSP): Subclasses must be substitutable for their base types without altering correctness.\n\n📋 Steps\n1. Create Shape with calculateArea().\n2. Rectangle(w, h) extends Shape overriding calculateArea() cleanly.\n3. In Main, assign Rectangle to Shape reference and evaluate area.\n4. Print: \"Shakl yuzasi: 20.0\".",
      "ru": "📖 Контекст\nПринцип подстановки Лисков (LSP): объекты базового типа можно заменять объектами потомков без сбоев.\n\n📋 Шаги\n1. Создайте Shape с calculateArea().\n2. Rectangle extends Shape переопределяет calculateArea().\n3. В main присвойте Rectangle ссылке Shape и выведите: \"Shakl yuzasi: 20.0\"."
    },
    "requirements": {
      "classes": [
        "Shape",
        "Rectangle",
        "Main"
      ],
      "methods": [
        "calculateArea"
      ],
      "keywords": [
        "extends",
        "@Override"
      ]
    },
    "starterCode": "class Shape {\n    \n}\n\nclass Rectangle extends Shape {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Shape {\n    public double calculateArea() {\n        return 0.0;\n    }\n}\n\nclass Rectangle extends Shape {\n    private double w;\n    private double h;\n\n    public Rectangle(double w, double h) {\n        this.w = w;\n        this.h = h;\n    }\n\n    @Override\n    public double calculateArea() {\n        return w * h;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Shape s = new Rectangle(5.0, 4.0);\n        System.out.println(\"Shakl yuzasi: \" + s.calculateArea());\n    }\n}",
    "detailedSolution": {
      "uz": "LSP ga rioya qilish orqali dasturdagi polimorfizm har doim kutilganidek va barqaror ishlaydi.",
      "en": "Adherence to LSP guarantees reliable polymorphic behavior across all consumer code.",
      "ru": "Соблюдение LSP гарантирует предсказуемое поведение полиморфизма в коде клиента."
    }
  },
  {
    "id": 150,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Korxona Arxitekturasi va Viva Tayyorgarligi",
    "sector": "121-150",
    "title": {
      "uz": "150. YAKUNIY CAPSTONE — Mukammal Enterprise Order Engine (Coursework & Viva G'alabasi!)",
      "en": "150. GRAND CAPSTONE — Complete Enterprise Ordering Engine (Coursework & Viva Mastery!)",
      "ru": "150. ГРАНД КАПСТОУН — Полноценный процессинг заказов предприятия (Курсовая и Viva!)"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\n🎉 TABRIKLAYMIZ! SIZ 150-TOPShIRIQDASIZ!\nUshbu yakuniy topshiriqda haftaning barcha konseptlari: Merosxo'rlik ('extends', 'super()'), Inkapsulyatsiya ('private', getters), Kompozitsiya ('has-a'), Polimorfizm, Metod Overriding ('@Override') va Dynamic Dispatch yagona to'liq korxona buyurtma tizimida birlashadi!\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Product(String title, double price)' sinfini yarating (getterlari bilan).\n2. 'Discount' sinfini yarating: 'public double applyDiscount(double original)' metodi 'original * 0.85' (15% chegirma) qaytarsin.\n3. 'Customer' sinfini yarating: 'private String name;' maydoni va getteri.\n4. 'EnterpriseOrder' sinfini e'lon qiling: 'private Customer customer;', 'private Product product;', 'private Discount discount;' maydonlari, konstruktori va 'public double calculateFinalPayable()' metodi 'discount.applyDiscount(product.getPrice())' qaytarsin!\n5. 'Main' metodida 'Customer c = new Customer(\"Akmal\"); Product p = new Product(\"MacBook Pro\", 20000000.0); Discount d = new Discount(); EnterpriseOrder order = new EnterpriseOrder(c, p, d);' obyektini tuzing.\n6. Konsolga: \"Xaridor: Akmal | Chegirmali to'lov: 17000000.0 so'm\" deb chop eting!",
      "en": "📖 Real-World Scenario\nGRAND FINALE! Synthesizes inheritance, encapsulation, composition, and polymorphic discounting into a complete enterprise ordering engine.\n\n📋 Steps\n1. Create Product(title, price).\n2. Create Discount with applyDiscount(original) applying 15% discount.\n3. Create Customer(name).\n4. Create EnterpriseOrder composing Customer, Product, and Discount with calculateFinalPayable().\n5. In Main, instantiate and print: \"Xaridor: Akmal | Chegirmali to'lov: 17000000.0 so'm\".",
      "ru": "📖 Контекст\nФИНАЛЬНЫЙ КАПСТОУН! Объединяет наследование, инкапсуляцию, композицию и полиморфизм в единую корпоративную систему.\n\n📋 Шаги\n1. Создайте Product(title, price), Discount (15%), Customer(name).\n2. Создайте EnterpriseOrder с композицией всех трех компонентов и методом calculateFinalPayable().\n3. В main выведите: \"Xaridor: Akmal | Chegirmali to'lov: 17000000.0 so'm\"."
    },
    "requirements": {
      "classes": [
        "Product",
        "Discount",
        "Customer",
        "EnterpriseOrder",
        "Main"
      ],
      "methods": [
        "calculateFinalPayable",
        "applyDiscount",
        "getName",
        "getPrice"
      ],
      "constructors": [
        "Product",
        "Customer",
        "EnterpriseOrder"
      ]
    },
    "starterCode": "class Product {\n    \n}\n\nclass Discount {\n    \n}\n\nclass Customer {\n    \n}\n\nclass EnterpriseOrder {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Product {\n    private String title;\n    private double price;\n\n    public Product(String title, double price) {\n        this.title = title;\n        this.price = price;\n    }\n\n    public String getTitle() {\n        return title;\n    }\n\n    public double getPrice() {\n        return price;\n    }\n}\n\nclass Discount {\n    public double applyDiscount(double original) {\n        return original * 0.85;\n    }\n}\n\nclass Customer {\n    private String name;\n\n    public Customer(String name) {\n        this.name = name;\n    }\n\n    public String getName() {\n        return name;\n    }\n}\n\nclass EnterpriseOrder {\n    private Customer customer;\n    private Product product;\n    private Discount discount;\n\n    public EnterpriseOrder(Customer customer, Product product, Discount discount) {\n        this.customer = customer;\n        this.product = product;\n        this.discount = discount;\n    }\n\n    public Customer getCustomer() {\n        return customer;\n    }\n\n    public Product getProduct() {\n        return product;\n    }\n\n    public double calculateFinalPayable() {\n        return discount.applyDiscount(product.getPrice());\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"Akmal\");\n        Product p = new Product(\"MacBook Pro\", 20000000.0);\n        Discount d = new Discount();\n        EnterpriseOrder order = new EnterpriseOrder(c, p, d);\n        System.out.println(\"Xaridor: \" + order.getCustomer().getName() + \" | Chegirmali to'lov: \" + order.calculateFinalPayable() + \" so'm\");\n    }\n}",
    "detailedSolution": {
      "uz": "TABRIKLAYMIZ! Siz 150 ta masalani to'liq yakunladingiz. Merosxo'rlik, Kompozitsiya va Polimorfizm bo'yicha bilimingiz WIUT Coursework 2 va Viva imtihonida eng yuqori 70%+ (First Class Honours) natijani kafolatlaydi!",
      "en": "CONGRATULATIONS! You have completed all 150 challenges. Your mastery of OOP inheritance and composition sets you up for First Class Honours in Coursework and Viva!",
      "ru": "ПОЗДРАВЛЯЕМ! Вы завершили все 150 заданий. Ваши знания ООП гарантируют наивысший балл на курсовой и защите Viva!"
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = (typeof window !== 'undefined' ? window : global).OOP_CHALLENGES_W3;
}
