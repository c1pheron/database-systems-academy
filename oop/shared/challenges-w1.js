// WIUT OOP (5COSC018C) — WEEK 1 DATASET (50 PROGRESSIVE CHALLENGES)
// Full Trilingual Support (UZ / RU / EN) — Author: 00023271 • Level 5 • WIUT • 00023271@wiut.uz
(typeof window !== 'undefined' ? window : global).OOP_CHALLENGES_W1 = [
  {
    "id": 1,
    "tier": 1,
    "tierName": "1-Bosqich: Klasslar va Maydonlar",
    "sector": "1-10",
    "title": {
      "uz": "1. Uzum Market — 'Product' Klassi va Birlamchi Maydonlar",
      "en": "1. Uzum Market — 'Product' Class & Primitive Fields",
      "ru": "1. Рынок Узум — класс «Продукт» и примитивные поля"
    },
    "scenario": {
      "uz": "[Hayotiy Voqealik & Kontekst]\nUzum Market elektron tijorat platformasida har bir mahsulotni katalogga joylashtirish va tizimda saqlash uchun shablon (klass) talab qilinadi. Mahsulotning nomi, sotuv narxi va omborda mavjudligi xususiyatlarini ifodalovchi model yarating.\n\n[Bajarilishi kerak bo'lgan vazifalar (1 dan 5 gacha)]\n1. Product nomli klass e'lon qiling.\n2. Klass ichiga quyidagi 3 ta maydonni qo'shing: String title; (mahsulot nomi), double price; (narxi) va boolean inStock; (omborda bor-yo'qligi).\n3. Main klassining main metodida Product p = new Product(); ob'yektini yarating.\n4. Ob'yekt maydonlariga qiymat yuklang: p.title = \"Smartfon Redmi Note 13\";, p.price = 2450000.0;, p.inStock = true;.\n5. Natijani ekranga chop eting: System.out.println(\"Mahsulot: \" + p.title + \" | Narxi: \" + p.price + \" so'm | Mavjud: \" + p.inStock);",
      "en": "[Real-World Story & Context]\nOn the Uzum Market e-commerce platform, a blueprint (class) is required to catalog and store listed items. Model a product with its title, retail price, and warehouse stock availability.\n\n[Step-by-Step Implementation Tasks (1 to 5)]\n1. Declare a class named Product.\n2. Add three fields: String title;, double price;, and boolean inStock;.\n3. In the main method of class Main, instantiate an object: Product p = new Product();.\n4. Assign values: p.title = \"Smartfon Redmi Note 13\";, p.price = 2450000.0;, p.inStock = true;.\n5. Print the product details: System.out.println(\"Mahsulot: \" + p.title + \" | Narxi: \" + p.price + \" so'm | Mavjud: \" + p.inStock);",
      "ru": "📖 Контекст и описание задачи\nНа платформе электронной коммерции Uzum Market для каталогизации и хранения перечисленных товаров требуется план (класс). Смоделируйте продукт, указав его название, розничную цену и наличие на складе.\n\n📋 Пошаговые задачи (от 1 до 5)\n1. Объявите класс с именем <code>Product</code>.\n2. Добавьте три поля: <code>String title;</code>, <code>double price;</code> и <code>boolean inStock;</code>.\n3. В методе <code>main</code> класса <code>Main</code> создайте экземпляр объекта: <code>Product p = new Product();</code>.\n4. Присвойте значения: <code>p.title = \"Smartfon Redmi Note 13\";</code>, <code>p.price = 2450000.0;</code>, <code>p.inStock = true;</code>.\n5. Распечатайте подробную информацию о продукте: <code>System.out.println(\"Mahsulot: \" + p.title + \" | Narxi: \" + p.price + \" so'm | Mavjud: \" + p.inStock);</code>"
    },
    "requirements": {
      "classes": [
        "Product",
        "Main"
      ],
      "fields": [
        {
          "name": "title",
          "type": "String"
        },
        {
          "name": "price",
          "type": "double"
        },
        {
          "name": "inStock",
          "type": "boolean"
        }
      ]
    },
    "starterCode": "// 1. Product klassini e'lon qiling\nclass Product {\n    // title (String), price (double), inStock (boolean) maydonlarini yozing\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        // Product ob'yektini new orqali yarating va maydonlariga qiymat bering\n        \n    }\n}",
    "solution": "class Product {\n    String title;\n    double price;\n    boolean inStock;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product p = new Product();\n        p.title = \"Smartfon Redmi Note 13\";\n        p.price = 2450000.0;\n        p.inStock = true;\n\n        System.out.println(\"Mahsulot: \" + p.title + \" | Narxi: \" + p.price + \" so'm | Mavjud: \" + p.inStock);\n    }\n}",
    "detailedSolution": {
      "theory": "Java dasturlash tilida har qanday ob'yekt klass chizmasi (blueprint) asosida Heap xotirada joylashadi. 'new' operatori Heap xotiradan yangi xotira bloki ajratadi va maydonlar o'z turlarining birlamchi qiymatlariga (null, 0.0, false) ega bo'ladi.",
      "theoryEn": "In Java, an object is instantiated on the Heap based on a class blueprint. The 'new' keyword allocates memory and initializes fields to default values.",
      "cleanCode": "class Product {\n    String title;\n    double price;\n    boolean inStock;\n}",
      "breakdown": [
        "<code>class Product</code>: Mahsulot uchun model shabloni.",
        "<code>String title; double price; boolean inStock;</code>: Ob'yektning holatini (state) belgilovchi 3 xil turdagi maydonlar.",
        "<code>Product p = new Product();</code>: Heap xotirada yangi nusxa (instance) yaratish."
      ],
      "pitfalls": "Maydon nomlarida harflar katta-kichikligiga (case-sensitive) qat'iy rioya qiling: 'instock' emas, 'inStock'.",
      "cw2Tip": "CW2 Console Order Application doirasida har bir tovar aynan shunday xususiyatlarga ega bo'ladi.",
      "theoryRu": "В Java экземпляр объекта создается в куче на основе схемы класса. Ключевое слово new выделяет память и инициализирует поля значениями по умолчанию.",
      "pitfallsRu": "В именах полей строго учитывайте регистр: «inStock», а не «instock».",
      "breakdownRu": [
        "<code>class Product</code>: Шаблон модели продукта.",
        "<code>String title; double price; boolean inStock;</code>: 3 разных типа полей, определяющих состояние объекта.",
        "<code>Product p = new Product();</code>: Создайте новую копию (экземпляр) в памяти кучи."
      ]
    },
    "sampleData": [
      "title: \"Smartfon Redmi Note 13\"",
      "price: 2450000.0 so'm",
      "inStock: true"
    ],
    "expectedOutput": "Mahsulot: Smartfon Redmi Note 13 | Narxi: 2450000.0 so'm | Mavjud: true",
    "story": {
      "uz": "Uzum Market elektron tijorat platformasida har bir mahsulotni katalogga joylashtirish va tizimda saqlash uchun shablon (klass) talab qilinadi. Mahsulotning nomi, sotuv narxi va omborda mavjudligi xususiyatlarini ifodalovchi model yarating.",
      "en": "On the Uzum Market e-commerce platform, a blueprint (class) is required to catalog and store listed items. Model a product with its title, retail price, and warehouse stock availability.",
      "ru": "На платформе электронной коммерции Uzum Market для каталогизации и хранения перечисленных товаров требуется план (класс). Смоделируйте продукт, указав его название, розничную цену и наличие на складе."
    },
    "steps": {
      "uz": [
        "<code>Product</code> nomli klass e'lon qiling.",
        "Klass ichiga quyidagi 3 ta maydonni qo'shing: <code>String title;</code> (mahsulot nomi), <code>double price;</code> (narxi) va <code>boolean inStock;</code> (omborda bor-yo'qligi).",
        "<code>Main</code> klassining <code>main</code> metodida <code>Product p = new Product();</code> ob'yektini yarating.",
        "Ob'yekt maydonlariga qiymat yuklang: <code>p.title = \"Smartfon Redmi Note 13\";</code>, <code>p.price = 2450000.0;</code>, <code>p.inStock = true;</code>.",
        "Natijani ekranga chop eting: <code>System.out.println(\"Mahsulot: \" + p.title + \" | Narxi: \" + p.price + \" so'm | Mavjud: \" + p.inStock);</code>"
      ],
      "en": [
        "Declare a class named <code>Product</code>.",
        "Add three fields: <code>String title;</code>, <code>double price;</code>, and <code>boolean inStock;</code>.",
        "In the <code>main</code> method of class <code>Main</code>, instantiate an object: <code>Product p = new Product();</code>.",
        "Assign values: <code>p.title = \"Smartfon Redmi Note 13\";</code>, <code>p.price = 2450000.0;</code>, <code>p.inStock = true;</code>.",
        "Print the product details: <code>System.out.println(\"Mahsulot: \" + p.title + \" | Narxi: \" + p.price + \" so'm | Mavjud: \" + p.inStock);</code>"
      ],
      "ru": [
        "Объявите класс с именем <code>Product</code>.",
        "Добавьте три поля: <code>String title;</code>, <code>double price;</code> и <code>boolean inStock;</code>.",
        "В методе <code>main</code> класса <code>Main</code> создайте экземпляр объекта: <code>Product p = new Product();</code>.",
        "Присвойте значения: <code>p.title = \"Smartfon Redmi Note 13\";</code>, <code>p.price = 2450000.0;</code>, <code>p.inStock = true;</code>.",
        "Распечатайте подробную информацию о продукте: <code>System.out.println(\"Mahsulot: \" + p.title + \" | Narxi: \" + p.price + \" so'm | Mavjud: \" + p.inStock);</code>"
      ]
    }
  },
  {
    "id": 2,
    "tier": 1,
    "tierName": "1-Bosqich: Klasslar va Maydonlar",
    "sector": "1-10",
    "title": {
      "uz": "2. WIUT Portal — 'Student' Klassi va Heap Xotiradagi Alohida Obyektlar",
      "en": "2. WIUT Portal — 'Student' Class & Multiple Heap Instances",
      "ru": "2. Портал WIUT — класс «Студент» и несколько экземпляров кучи"
    },
    "scenario": {
      "uz": "[Hayotiy Voqealik & Kontekst]\nWIUT talabalar portalida har bir talabaning shaxsiy akademik profili saqlanadi. Dasturda xotiraning Heap qismida ikki xil talaba uchun alohida ob'yektlar ajratilib, ularning GPA ko'rsatkichlari solishtirilishi kerak.\n\n[Bajarilishi kerak bo'lgan vazifalar (1 dan 5 gacha)]\n1. Student klassini yarating va unga String fullName;, int idNumber;, double gpa; maydonlarini qo'shing.\n2. Main metodida ikkita alohida ob'yekt yarating: Student s1 = new Student(); va Student s2 = new Student();.\n3. s1 maydonlariga qiymat bering: fullName = \"Jasur Aliyev\", idNumber = 1001, gpa = 3.8.\n4. s2 maydonlariga qiymat bering: fullName = \"Madina Karimova\", idNumber = 1002, gpa = 3.95.\n5. if (s1.gpa > s2.gpa) sharti orqali solishtiring va GPA si yuqori bo'lgan talabani chop eting: System.out.println(\"Yuqori GPA: \" + s2.fullName + \" (\" + s2.gpa + \")\");",
      "en": "[Real-World Story & Context]\nThe WIUT Student Portal manages independent academic records. Instantiate two distinct student records on the Heap and compare their GPAs to find the higher-performing student.\n\n[Step-by-Step Implementation Tasks (1 to 5)]\n1. Create class Student with fields String fullName;, int idNumber;, and double gpa;.\n2. In main, instantiate two objects: Student s1 = new Student(); and Student s2 = new Student();.\n3. Assign values to s1: fullName = \"Jasur Aliyev\", idNumber = 1001, gpa = 3.8.\n4. Assign values to s2: fullName = \"Madina Karimova\", idNumber = 1002, gpa = 3.95.\n5. Compare GPAs and print the higher student: System.out.println(\"Yuqori GPA: \" + s2.fullName + \" (\" + s2.gpa + \")\");",
      "ru": "📖 Контекст и описание задачи\nСтуденческий портал МВУТ ведет независимые академические записи. Создайте экземпляры двух разных записей учащихся в куче и сравните их средний балл, чтобы найти ученика с более высокой успеваемостью.\n\n📋 Пошаговые задачи (от 1 до 5)\n1. Создайте класс <code>Student</code> с полями <code>String fullName;</code>, <code>int idNumber;</code> и <code>double gpa;</code>.\n2. В <code>main</code> создайте экземпляры двух объектов: <code>Student s1 = new Student();</code> и <code>Student s2 = new Student();</code>.\n3. Присвойте значения <code>s1</code>: <code>fullName = \"Jasur Aliyev\"</code>, <code>idNumber = 1001</code>, <code>String fullName;</code>0.\n4. Присвойте значения <code>String fullName;</code>1: <code>String fullName;</code>2, <code>String fullName;</code>3, <code>String fullName;</code>4.\n5. Сравните средний балл и распечатайте имя старшекурсника: <code>String fullName;</code>5."
    },
    "requirements": {
      "classes": [
        "Student",
        "Main"
      ],
      "fields": [
        {
          "name": "fullName",
          "type": "String"
        },
        {
          "name": "idNumber",
          "type": "int"
        },
        {
          "name": "gpa",
          "type": "double"
        }
      ]
    },
    "starterCode": "class Student {\n    // fullName (String), idNumber (int), gpa (double) maydonlarini e'lon qiling\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        // s1 va s2 talabalarini yarating, qiymatlar bering va GPA larni solishtiring\n        \n    }\n}",
    "solution": "class Student {\n    String fullName;\n    int idNumber;\n    double gpa;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Student s1 = new Student();\n        s1.fullName = \"Jasur Aliyev\";\n        s1.idNumber = 1001;\n        s1.gpa = 3.8;\n\n        Student s2 = new Student();\n        s2.fullName = \"Madina Karimova\";\n        s2.idNumber = 1002;\n        s2.gpa = 3.95;\n\n        if (s1.gpa > s2.gpa) {\n            System.out.println(\"Yuqori GPA: \" + s1.fullName + \" (\" + s1.gpa + \")\");\n        } else {\n            System.out.println(\"Yuqori GPA: \" + s2.fullName + \" (\" + s2.gpa + \")\");\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "'s1' va 's2' Stack xotirada turli ko'rsatkichlar (references) bo'lib, Heap xotiradagi mutlaqo alohida ikki manzilga ishora qiladi. Bitta ob'yekt maydonining o'zgarishi ikkinchisiga ta'sir qilmaydi.",
      "theoryEn": "'s1' and 's2' are reference variables on the Stack pointing to two separate memory allocations on the Heap.",
      "cleanCode": "Student s1 = new Student();\nStudent s2 = new Student();",
      "breakdown": [
        "<code>Student</code> klassi shablon vazifasini bajaradi.",
        "Har bir chaqirilgan <code>new Student()</code> alohida nusxa yaratadi.",
        "Maydonlarga nuqta (<code>.</code>) operatori orqali kirib, solishtirish shartlari bajariladi."
      ],
      "pitfalls": "Obyekt yaratmasdan (ya'ni `Student s1;` deb qoldirib) uning maydoniga murojaat qilish NullPointerException keltirib chiqaradi.",
      "cw2Tip": "Guruh loyihangizda bir nechta mijoz yoki tovarlarni massiv yoki ro'yxatda saqlash uchun ushbu poydevor zarur.",
      "theoryRu": "«s1» и «s2» — это ссылочные переменные в стеке, указывающие на два отдельных распределения памяти в куче.",
      "pitfallsRu": "Объект yaratmasdan (ya'ni <code>String fullName;</code>6 deb qoldirib) может привести к исчезновению NullPointerException и другим ошибкам.",
      "breakdownRu": [
        "Класс <code>Student</code> действует как шаблон.",
        "Каждый из названных <code>new Student()</code> создает отдельную копию.",
        "Доступ к полям осуществляется через оператор точки (<code>.</code>), и условия сравнения выполняются."
      ]
    },
    "sampleData": [
      "1-talaba -> fullName: \"Jasur Aliyev\", idNumber: 1001, gpa: 3.8",
      "2-talaba -> fullName: \"Madina Karimova\", idNumber: 1002, gpa: 3.95"
    ],
    "expectedOutput": "Yuqori GPA: Madina Karimova (3.95)",
    "story": {
      "uz": "WIUT talabalar portalida har bir talabaning shaxsiy akademik profili saqlanadi. Dasturda xotiraning Heap qismida ikki xil talaba uchun alohida ob'yektlar ajratilib, ularning GPA ko'rsatkichlari solishtirilishi kerak.",
      "en": "The WIUT Student Portal manages independent academic records. Instantiate two distinct student records on the Heap and compare their GPAs to find the higher-performing student.",
      "ru": "Студенческий портал МВУТ ведет независимые академические записи. Создайте экземпляры двух разных записей учащихся в куче и сравните их средний балл, чтобы найти ученика с более высокой успеваемостью."
    },
    "steps": {
      "uz": [
        "<code>Student</code> klassini yarating va unga <code>String fullName;</code>, <code>int idNumber;</code>, <code>double gpa;</code> maydonlarini qo'shing.",
        "<code>Main</code> metodida ikkita alohida ob'yekt yarating: <code>Student s1 = new Student();</code> va <code>Student s2 = new Student();</code>.",
        "<code>s1</code> maydonlariga qiymat bering: <code>fullName = \"Jasur Aliyev\"</code>, <code>idNumber = 1001</code>, <code>gpa = 3.8</code>.",
        "<code>s2</code> maydonlariga qiymat bering: <code>fullName = \"Madina Karimova\"</code>, <code>idNumber = 1002</code>, <code>gpa = 3.95</code>.",
        "<code>if (s1.gpa > s2.gpa)</code> sharti orqali solishtiring va GPA si yuqori bo'lgan talabani chop eting: <code>System.out.println(\"Yuqori GPA: \" + s2.fullName + \" (\" + s2.gpa + \")\");</code>"
      ],
      "en": [
        "Create class <code>Student</code> with fields <code>String fullName;</code>, <code>int idNumber;</code>, and <code>double gpa;</code>.",
        "In <code>main</code>, instantiate two objects: <code>Student s1 = new Student();</code> and <code>Student s2 = new Student();</code>.",
        "Assign values to <code>s1</code>: <code>fullName = \"Jasur Aliyev\"</code>, <code>idNumber = 1001</code>, <code>gpa = 3.8</code>.",
        "Assign values to <code>s2</code>: <code>fullName = \"Madina Karimova\"</code>, <code>idNumber = 1002</code>, <code>gpa = 3.95</code>.",
        "Compare GPAs and print the higher student: <code>System.out.println(\"Yuqori GPA: \" + s2.fullName + \" (\" + s2.gpa + \")\");</code>"
      ],
      "ru": [
        "Создайте класс <code>Student</code> с полями <code>String fullName;</code>, <code>int idNumber;</code> и <code>double gpa;</code>.",
        "В <code>main</code> создайте экземпляры двух объектов: <code>Student s1 = new Student();</code> и <code>Student s2 = new Student();</code>.",
        "Присвойте значения <code>s1</code>: <code>fullName = \"Jasur Aliyev\"</code>, <code>idNumber = 1001</code>, <code>String fullName;</code>0.",
        "Присвойте значения <code>String fullName;</code>1: <code>String fullName;</code>2, <code>String fullName;</code>3, <code>String fullName;</code>4.",
        "Сравните средний балл и распечатайте имя старшекурсника: <code>String fullName;</code>5."
      ]
    }
  },
  {
    "id": 3,
    "tier": 1,
    "tierName": "1-Bosqich: Klasslar va Maydonlar",
    "sector": "1-10",
    "title": {
      "uz": "3. Yandex Go — 'TaxiTrip' va Maydonlar Asosida Hisob-Kitob",
      "en": "3. Yandex Go — 'TaxiTrip' & State-Driven Calculations",
      "ru": "3. Yandex Go — «TaxiTrip» и расчеты на основе состояния"
    },
    "scenario": {
      "uz": "[Hayotiy Voqealik & Kontekst]\nYandex Go taksi agregatori servisida yo'lovchi safarni yakunlaganda haydovchining ismi, bosib o'tilgan masofa va har bir kilometr narxi asosida yakuniy safar haqi hisoblanadi.\n\n[Bajarilishi kerak bo'lgan vazifalar (1 dan 5 gacha)]\n1. TaxiTrip klassini tuzing: String driverName;, double distanceKm;, double ratePerKm; maydonlarini e'lon qiling.\n2. Main metodida TaxiTrip trip = new TaxiTrip(); ob'yektini yarating.\n3. Maydonlariga qiymat yuklang: trip.driverName = \"Davron Ahmedov\";, trip.distanceKm = 12.5;, trip.ratePerKm = 3200.0;.\n4. Jami yo'l haqini hisoblang: double totalFare = trip.distanceKm * trip.ratePerKm;.\n5. Safar ma'lumotlarini chop eting: System.out.println(\"Haydovchi: \" + trip.driverName + \" | Masofa: \" + trip.distanceKm + \" km | Jami: \" + totalFare + \" so'm\");",
      "en": "[Real-World Story & Context]\nIn Yandex Go taxi service, when a ride finishes, the total trip fare is computed using driver name, distance traveled, and rate per kilometer.\n\n[Step-by-Step Implementation Tasks (1 to 5)]\n1. Create class TaxiTrip with fields String driverName;, double distanceKm;, and double ratePerKm;.\n2. In main, instantiate: TaxiTrip trip = new TaxiTrip();.\n3. Assign field values: trip.driverName = \"Davron Ahmedov\";, trip.distanceKm = 12.5;, trip.ratePerKm = 3200.0;.\n4. Calculate the total fare: double totalFare = trip.distanceKm * trip.ratePerKm;.\n5. Print ride receipt: System.out.println(\"Haydovchi: \" + trip.driverName + \" | Masofa: \" + trip.distanceKm + \" km | Jami: \" + totalFare + \" so'm\");",
      "ru": "📖 Контекст и описание задачи\nВ сервисе такси Яндекс Go по окончании поездки общая стоимость поездки рассчитывается с учетом имени водителя, пройденного расстояния и тарифа за километр.\n\n📋 Пошаговые задачи (от 1 до 5)\n1. Создайте класс <code>TaxiTrip</code> с полями <code>String driverName;</code>, <code>double distanceKm;</code> и <code>double ratePerKm;</code>.\n2. В <code>main</code> создайте экземпляр: <code>TaxiTrip trip = new TaxiTrip();</code>.\n3. Присвойте значения полям: <code>trip.driverName = \"Davron Ahmedov\";</code>, <code>trip.distanceKm = 12.5;</code>, <code>trip.ratePerKm = 3200.0;</code>.\n4. Рассчитаем общую стоимость проезда: <code>double totalFare = trip.distanceKm * trip.ratePerKm;</code>.\n5. Распечатать квитанцию ​​о поездке: <code>System.out.println(\"Haydovchi: \" + trip.driverName + \" | Masofa: \" + trip.distanceKm + \" km | Jami: \" + totalFare + \" so'm\");</code>"
    },
    "requirements": {
      "classes": [
        "TaxiTrip",
        "Main"
      ],
      "fields": [
        {
          "name": "driverName",
          "type": "String"
        },
        {
          "name": "distanceKm",
          "type": "double"
        },
        {
          "name": "ratePerKm",
          "type": "double"
        }
      ]
    },
    "starterCode": "class TaxiTrip {\n    // driverName (String), distanceKm (double), ratePerKm (double)\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        // TaxiTrip yaratib, umumiy yo'l haqini hisoblang\n        \n    }\n}",
    "solution": "class TaxiTrip {\n    String driverName;\n    double distanceKm;\n    double ratePerKm;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TaxiTrip trip = new TaxiTrip();\n        trip.driverName = \"Otabek\";\n        trip.distanceKm = 12.5;\n        trip.ratePerKm = 3500.0;\n\n        double totalFare = trip.distanceKm * trip.ratePerKm;\n        System.out.println(\"Haydovchi: \" + trip.driverName + \" | Jami yo'l haqi: \" + totalFare + \" so'm\");\n    }\n}",
    "detailedSolution": {
      "theory": "Klass maydonlaridagi qiymatlar ob'yektning holatini (state) ifodalaydi. Ushbu holat asosida tashqarida arifmetik amallar bajarish orqali hisoblangan natijalar olinadi.",
      "theoryEn": "Fields hold the internal state of an instance. Main can access these states to perform arithmetic calculations.",
      "cleanCode": "double totalFare = trip.distanceKm * trip.ratePerKm;",
      "breakdown": [
        "Maydonlar to'g'ri turda e'lon qilingan: masofa va tarif double bo'lishi aniqlik beradi.",
        "Hisoblangan qiymat yangi mahalliy o'zgaruvchida saqlanadi."
      ],
      "pitfalls": "Butun sonlar bilan ishlashda int bo'linishi (integer division) natijani yaxlitlab xato berishi mumkin, shuning uchun narx va masofalarda doim double ishlatiladi.",
      "cw2Tip": "Savdo kvitansiyalarini hisoblashda ushbu arifmetika qoidalari qo'llaniladi.",
      "theoryRu": "Поля содержат внутреннее состояние экземпляра. Main может получить доступ к этим состояниям для выполнения арифметических вычислений.",
      "pitfallsRu": "При работе с целыми числами деление int (целочисленное деление) может давать ошибку округления, поэтому для цен и расстояний всегда используется double.",
      "breakdownRu": [
        "Поля объявлены правильно: двойное расстояние и скорость дают ясность.",
        "Hisoblangan qiymat yangi mahalliy o'zgaruvchida saqlanadi."
      ]
    },
    "sampleData": [
      "driverName: \"Otabek\"",
      "distanceKm: 12.5 km",
      "ratePerKm: 3500.0 so'm"
    ],
    "expectedOutput": "Haydovchi: Otabek | Jami yo'l haqi: 43750.0 so'm",
    "story": {
      "uz": "Yandex Go taksi agregatori servisida yo'lovchi safarni yakunlaganda haydovchining ismi, bosib o'tilgan masofa va har bir kilometr narxi asosida yakuniy safar haqi hisoblanadi.",
      "en": "In Yandex Go taxi service, when a ride finishes, the total trip fare is computed using driver name, distance traveled, and rate per kilometer.",
      "ru": "В сервисе такси Яндекс Go по окончании поездки общая стоимость поездки рассчитывается с учетом имени водителя, пройденного расстояния и тарифа за километр."
    },
    "steps": {
      "uz": [
        "<code>TaxiTrip</code> klassini tuzing: <code>String driverName;</code>, <code>double distanceKm;</code>, <code>double ratePerKm;</code> maydonlarini e'lon qiling.",
        "<code>Main</code> metodida <code>TaxiTrip trip = new TaxiTrip();</code> ob'yektini yarating.",
        "Maydonlariga qiymat yuklang: <code>trip.driverName = \"Davron Ahmedov\";</code>, <code>trip.distanceKm = 12.5;</code>, <code>trip.ratePerKm = 3200.0;</code>.",
        "Jami yo'l haqini hisoblang: <code>double totalFare = trip.distanceKm * trip.ratePerKm;</code>.",
        "Safar ma'lumotlarini chop eting: <code>System.out.println(\"Haydovchi: \" + trip.driverName + \" | Masofa: \" + trip.distanceKm + \" km | Jami: \" + totalFare + \" so'm\");</code>"
      ],
      "en": [
        "Create class <code>TaxiTrip</code> with fields <code>String driverName;</code>, <code>double distanceKm;</code>, and <code>double ratePerKm;</code>.",
        "In <code>main</code>, instantiate: <code>TaxiTrip trip = new TaxiTrip();</code>.",
        "Assign field values: <code>trip.driverName = \"Davron Ahmedov\";</code>, <code>trip.distanceKm = 12.5;</code>, <code>trip.ratePerKm = 3200.0;</code>.",
        "Calculate the total fare: <code>double totalFare = trip.distanceKm * trip.ratePerKm;</code>.",
        "Print ride receipt: <code>System.out.println(\"Haydovchi: \" + trip.driverName + \" | Masofa: \" + trip.distanceKm + \" km | Jami: \" + totalFare + \" so'm\");</code>"
      ],
      "ru": [
        "Создайте класс <code>TaxiTrip</code> с полями <code>String driverName;</code>, <code>double distanceKm;</code> и <code>double ratePerKm;</code>.",
        "В <code>main</code> создайте экземпляр: <code>TaxiTrip trip = new TaxiTrip();</code>.",
        "Присвойте значения полям: <code>trip.driverName = \"Davron Ahmedov\";</code>, <code>trip.distanceKm = 12.5;</code>, <code>trip.ratePerKm = 3200.0;</code>.",
        "Рассчитаем общую стоимость проезда: <code>double totalFare = trip.distanceKm * trip.ratePerKm;</code>.",
        "Распечатать квитанцию ​​о поездке: <code>System.out.println(\"Haydovchi: \" + trip.driverName + \" | Masofa: \" + trip.distanceKm + \" km | Jami: \" + totalFare + \" so'm\");</code>"
      ]
    }
  },
  {
    "id": 4,
    "tier": 1,
    "tierName": "1-Bosqich: Klasslar va Maydonlar",
    "sector": "1-10",
    "title": {
      "uz": "4. Payme Wallet — 'Transaction' va Holat Flaglari (State Flags)",
      "en": "4. Payme Wallet — 'Transaction' & State Flags",
      "ru": "4. Кошелек Payme — «транзакция» и флаги состояний"
    },
    "scenario": {
      "uz": "[Hayotiy Voqealik & Kontekst]\nPayme fintech to'lov ilovasida har bir pul o'tkazmasi tranzaksiya identifikatori, o'tkazma summasi, bajarilganlik holati (flag) va jo'natuvchi telefon raqami bilan monitoring qilinadi.\n\n[Bajarilishi kerak bo'lgan vazifalar (1 dan 5 gacha)]\n1. Transaction klassini e'lon qiling: String txnId;, double amount;, boolean isCompleted;, String senderPhone;.\n2. Main metodida Transaction tx = new Transaction(); ob'yektini yarating.\n3. Maydonlariga qiymat bering: tx.txnId = \"TXN-77889\";, tx.amount = 150000.0;, tx.isCompleted = true;, tx.senderPhone = \"+998901234567\";.\n4. Shart orqali holat matnini aniqlang: agar tx.isCompleted rost bo'lsa \"Muvaffaqiyatli\", aks holda \"Kutilmoqda\".\n5. Tranzaksiya ma'lumotlarini chop eting: System.out.println(\"Tranzaksiya #\" + tx.txnId + \" | Summa: \" + tx.amount + \" so'm | Holat: \" + statusText + \" | Tel: \" + tx.senderPhone);",
      "en": "[Real-World Story & Context]\nIn the Payme fintech payment system, each transaction is logged with a transaction ID, money amount, completion status flag, and sender phone number.\n\n[Step-by-Step Implementation Tasks (1 to 5)]\n1. Declare class Transaction with: String txnId;, double amount;, boolean isCompleted;, String senderPhone;.\n2. In main, create object: Transaction tx = new Transaction();.\n3. Assign values: tx.txnId = \"TXN-77889\";, tx.amount = 150000.0;, tx.isCompleted = true;, tx.senderPhone = \"+998901234567\";.\n4. Check status flag: if tx.isCompleted is true, status is \"Muvaffaqiyatli\", else \"Kutilmoqda\".\n5. Print transaction summary: System.out.println(\"Tranzaksiya #\" + tx.txnId + \" | Summa: \" + tx.amount + \" so'm | Holat: \" + statusText + \" | Tel: \" + tx.senderPhone);",
      "ru": "📖 Контекст и описание задачи\nВ финтех-платежной системе Payme каждая транзакция регистрируется с указанием идентификатора транзакции, суммы денег, флага статуса завершения и номера телефона отправителя.\n\n📋 Пошаговые задачи (от 1 до 5)\n1. Объявите класс <code>Transaction</code> с помощью: <code>String txnId;</code>, <code>double amount;</code>, <code>boolean isCompleted;</code>, <code>String senderPhone;</code>.\n2. В <code>main</code> создайте объект: <code>Transaction tx = new Transaction();</code>.\n3. Присвойте значения: <code>tx.txnId = \"TXN-77889\";</code>, <code>tx.amount = 150000.0;</code>, <code>tx.isCompleted = true;</code>, <code>tx.senderPhone = \"+998901234567\";</code>.\n4. Проверьте флаг состояния: если <code>tx.isCompleted</code> истинно, то статус <code>\"Muvaffaqiyatli\"</code>, иначе <code>\"Kutilmoqda\"</code>.\n5. Распечатать сводку транзакции: <code>System.out.println(\"Tranzaksiya #\" + tx.txnId + \" | Summa: \" + tx.amount + \" so'm | Holat: \" + statusText + \" | Tel: \" + tx.senderPhone);</code>"
    },
    "requirements": {
      "classes": [
        "Transaction",
        "Main"
      ],
      "fields": [
        {
          "name": "txnId",
          "type": "String"
        },
        {
          "name": "amount",
          "type": "double"
        },
        {
          "name": "isCompleted",
          "type": "boolean"
        },
        {
          "name": "senderPhone",
          "type": "String"
        }
      ]
    },
    "starterCode": "class Transaction {\n    // txnId (String), amount (double), isCompleted (boolean), senderPhone (String)\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        // Transaction ob'yektini tekshiring\n        \n    }\n}",
    "solution": "class Transaction {\n    String txnId;\n    double amount;\n    boolean isCompleted;\n    String senderPhone;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Transaction tx = new Transaction();\n        tx.txnId = \"TXN-884129\";\n        tx.amount = 150000.0;\n        tx.isCompleted = true;\n        tx.senderPhone = \"+998901234567\";\n\n        String status = tx.isCompleted ? \"Muvaffaqiyatli\" : \"Kutilmoqda\";\n        System.out.println(\"ID: \" + tx.txnId + \" | Miqdor: \" + tx.amount + \" | Holat: \" + status);\n    }\n}",
    "detailedSolution": {
      "theory": "Mantiqiy maydonlar (boolean flags) tizimda jarayonlarning hozirgi bosqichini belgilaydi va dastur oqimini (control flow) boshqarishda asosiy vosita hisoblanadi.",
      "theoryEn": "Boolean state flags capture system lifecycle states and direct control flow via conditionals.",
      "cleanCode": "boolean isCompleted;\nString status = tx.isCompleted ? \"Muvaffaqiyatli\" : \"Kutilmoqda\";",
      "breakdown": [
        "<code>isCompleted</code> maydoni to'lov holatini saqlaydi.",
        "Ternar operator orqali qisqa va toza mantiq yozildi."
      ],
      "pitfalls": "boolean maydonlar birlamchi qiymati false bo'ladi, buni esdan chiqarmang.",
      "cw2Tip": "Buyurtmaning to'langan yoki bekor qilinganligini kuzatish uchun `isPaid` flagi shart.",
      "theoryRu": "Логические флаги состояния фиксируют состояния жизненного цикла системы и направляют поток управления через условные выражения.",
      "pitfallsRu": "Обратите внимание, что логические поля по умолчанию имеют значение false.",
      "breakdownRu": [
        "Поле <code>isCompleted</code> хранит статус платежа.",
        "Ternar operator orqali qisqa va toza mantiq yozildi."
      ]
    },
    "sampleData": [
      "txnId: \"TXN-884129\"",
      "amount: 150000.0 so'm",
      "isCompleted: true",
      "senderPhone: \"+998901234567\""
    ],
    "expectedOutput": "ID: TXN-884129 | Miqdor: 150000.0 | Holat: Muvaffaqiyatli",
    "story": {
      "uz": "Payme fintech to'lov ilovasida har bir pul o'tkazmasi tranzaksiya identifikatori, o'tkazma summasi, bajarilganlik holati (flag) va jo'natuvchi telefon raqami bilan monitoring qilinadi.",
      "en": "In the Payme fintech payment system, each transaction is logged with a transaction ID, money amount, completion status flag, and sender phone number.",
      "ru": "В финтех-платежной системе Payme каждая транзакция регистрируется с указанием идентификатора транзакции, суммы денег, флага статуса завершения и номера телефона отправителя."
    },
    "steps": {
      "uz": [
        "<code>Transaction</code> klassini e'lon qiling: <code>String txnId;</code>, <code>double amount;</code>, <code>boolean isCompleted;</code>, <code>String senderPhone;</code>.",
        "<code>Main</code> metodida <code>Transaction tx = new Transaction();</code> ob'yektini yarating.",
        "Maydonlariga qiymat bering: <code>tx.txnId = \"TXN-77889\";</code>, <code>tx.amount = 150000.0;</code>, <code>tx.isCompleted = true;</code>, <code>tx.senderPhone = \"+998901234567\";</code>.",
        "Shart orqali holat matnini aniqlang: agar <code>tx.isCompleted</code> rost bo'lsa <code>\"Muvaffaqiyatli\"</code>, aks holda <code>\"Kutilmoqda\"</code>.",
        "Tranzaksiya ma'lumotlarini chop eting: <code>System.out.println(\"Tranzaksiya #\" + tx.txnId + \" | Summa: \" + tx.amount + \" so'm | Holat: \" + statusText + \" | Tel: \" + tx.senderPhone);</code>"
      ],
      "en": [
        "Declare class <code>Transaction</code> with: <code>String txnId;</code>, <code>double amount;</code>, <code>boolean isCompleted;</code>, <code>String senderPhone;</code>.",
        "In <code>main</code>, create object: <code>Transaction tx = new Transaction();</code>.",
        "Assign values: <code>tx.txnId = \"TXN-77889\";</code>, <code>tx.amount = 150000.0;</code>, <code>tx.isCompleted = true;</code>, <code>tx.senderPhone = \"+998901234567\";</code>.",
        "Check status flag: if <code>tx.isCompleted</code> is true, status is <code>\"Muvaffaqiyatli\"</code>, else <code>\"Kutilmoqda\"</code>.",
        "Print transaction summary: <code>System.out.println(\"Tranzaksiya #\" + tx.txnId + \" | Summa: \" + tx.amount + \" so'm | Holat: \" + statusText + \" | Tel: \" + tx.senderPhone);</code>"
      ],
      "ru": [
        "Объявите класс <code>Transaction</code> с помощью: <code>String txnId;</code>, <code>double amount;</code>, <code>boolean isCompleted;</code>, <code>String senderPhone;</code>.",
        "В <code>main</code> создайте объект: <code>Transaction tx = new Transaction();</code>.",
        "Присвойте значения: <code>tx.txnId = \"TXN-77889\";</code>, <code>tx.amount = 150000.0;</code>, <code>tx.isCompleted = true;</code>, <code>tx.senderPhone = \"+998901234567\";</code>.",
        "Проверьте флаг состояния: если <code>tx.isCompleted</code> истинно, то статус <code>\"Muvaffaqiyatli\"</code>, иначе <code>\"Kutilmoqda\"</code>.",
        "Распечатать сводку транзакции: <code>System.out.println(\"Tranzaksiya #\" + tx.txnId + \" | Summa: \" + tx.amount + \" so'm | Holat: \" + statusText + \" | Tel: \" + tx.senderPhone);</code>"
      ]
    }
  },
  {
    "id": 5,
    "tier": 1,
    "tierName": "1-Bosqich: Klasslar va Maydonlar",
    "sector": "1-10",
    "title": {
      "uz": "5. Cloud Server — 'ServerNode' va Xotira Bandlik Monitoringi",
      "en": "5. Cloud Server — 'ServerNode' & Resource Utilization",
      "ru": "5. Облачный сервер — «ServerNode» и использование ресурсов."
    },
    "scenario": {
      "uz": "[Hayotiy Voqealik & Kontekst]\nBulutli infratuzilma klasterida serverlarning tezkor xotira (RAM) sarfini monitoring qilib boruvchi agent ishlab chiqilmoqda. Bo'sh xotira va yuklanish foizi hisoblanishi zarur.\n\n[Bajarilishi kerak bo'lgan vazifalar (1 dan 5 gacha)]\n1. ServerNode klassini tuzing: String hostName;, int totalRamMb;, int usedRamMb; maydonlarini e'lon qiling.\n2. Main metodida ServerNode node = new ServerNode(); ob'yektini yarating.\n3. Maydonlariga qiymat yuklang: node.hostName = \"prod-node-01.wiut.uz\";, node.totalRamMb = 16384;, node.usedRamMb = 12288;.\n4. Bo'sh RAM (node.totalRamMb - node.usedRamMb) va bandlik foizini (((double) node.usedRamMb / node.totalRamMb) * 100.0) hisoblang.\n5. Server monitoring ma'lumotlarini 2 qatorda chop eting:System.out.println(\"Server: \" + node.hostName);System.out.println(\"Bo'sh RAM: \" + freeRam + \" MB | Bandlik: \" + usagePercent + \"%\");",
      "en": "[Real-World Story & Context]\nIn a cloud hosting cluster, an agent monitors server RAM usage. It calculates the remaining free RAM and percentage memory utilization.\n\n[Step-by-Step Implementation Tasks (1 to 5)]\n1. Create class ServerNode with: String hostName;, int totalRamMb;, int usedRamMb;.\n2. In main, instantiate: ServerNode node = new ServerNode();.\n3. Assign values: node.hostName = \"prod-node-01.wiut.uz\";, node.totalRamMb = 16384;, node.usedRamMb = 12288;.\n4. Calculate free RAM (node.totalRamMb - node.usedRamMb) and usage percentage (((double) node.usedRamMb / node.totalRamMb) * 100.0).\n5. Print monitoring output on 2 lines:System.out.println(\"Server: \" + node.hostName);System.out.println(\"Bo'sh RAM: \" + freeRam + \" MB | Bandlik: \" + usagePercent + \"%\");",
      "ru": "📖 Контекст и описание задачи\nВ кластере облачного хостинга агент контролирует использование оперативной памяти сервера. Он вычисляет оставшуюся свободную оперативную память и процент использования памяти.\n\n📋 Пошаговые задачи (от 1 до 5)\n1. Создайте класс <code>ServerNode</code> с помощью: <code>String hostName;</code>, <code>int totalRamMb;</code>, <code>int usedRamMb;</code>.\n2. В <code>main</code> создайте экземпляр: <code>ServerNode node = new ServerNode();</code>.\n3. Assign values: <code>node.hostName = \"prod-node-01.wiut.uz\";</code>, <code>node.totalRamMb = 16384;</code>, <code>node.usedRamMb = 12288;</code>.\n4. Рассчитайте свободную оперативную память (<code>node.totalRamMb - node.usedRamMb</code>) и процент использования (<code>((double) node.usedRamMb / node.totalRamMb) * 100.0</code>).\n5. Распечатайте выходные данные мониторинга в 2 строки:<br><code>System.out.println(\"Server: \" + node.hostName);</code><br><code>System.out.println(\"Bo'sh RAM: \" + freeRam + \" MB | Bandlik: \" + usagePercent + \"%\");</code>"
    },
    "requirements": {
      "classes": [
        "ServerNode",
        "Main"
      ],
      "fields": [
        {
          "name": "hostName",
          "type": "String"
        },
        {
          "name": "totalRamMb",
          "type": "int"
        },
        {
          "name": "usedRamMb",
          "type": "int"
        }
      ]
    },
    "starterCode": "class ServerNode {\n    // hostName (String), totalRamMb (int), usedRamMb (int)\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        // ServerNode ob'yektini yarating va bo'sh xotirani hisoblang\n        \n    }\n}",
    "solution": "class ServerNode {\n    String hostName;\n    int totalRamMb;\n    int usedRamMb;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ServerNode node = new ServerNode();\n        node.hostName = \"prod-node-01.wiut.uz\";\n        node.totalRamMb = 16384;\n        node.usedRamMb = 12288;\n\n        int freeRamMb = node.totalRamMb - node.usedRamMb;\n        double usagePct = ((double) node.usedRamMb / node.totalRamMb) * 100.0;\n\n        System.out.println(\"Server: \" + node.hostName);\n        System.out.println(\"Bo'sh RAM: \" + freeRamMb + \" MB | Bandlik: \" + usagePct + \"%\");\n    }\n}",
    "detailedSolution": {
      "theory": "Tur o'zgartirish (type casting) orqali `(double) node.usedRamMb` qilinmasa, int bo'linishi sodir bo'lib, kasr qism yo'qoladi va natija noto'g'ri bo'ladi.",
      "theoryEn": "Explicit casting to double ensures floating point division without truncation.",
      "cleanCode": "double usagePct = ((double) node.usedRamMb / node.totalRamMb) * 100.0;",
      "breakdown": [
        "Server parametrlarini ifodalovchi butun sonli maydonlar e'lon qilindi.",
        "Hisoblashda casting to'g'ri qo'llanildi."
      ],
      "pitfalls": "Nolga bo'lish (Division by zero) holatlariga doim e'tibor qarating.",
      "cw2Tip": "Kompyuter resurslarini to'g'ri hisoblash Java Core dasturchisi uchun shart.",
      "theoryRu": "Явное приведение к двойному значению обеспечивает деление с плавающей запятой без усечения.",
      "pitfallsRu": "Всегда обращайте внимание на деление на ноль.",
      "breakdownRu": [
        "Объявлены целочисленные поля, представляющие параметры сервера.",
        "В расчете правильно применено литье."
      ]
    },
    "sampleData": [
      "hostName: \"prod-node-01.wiut.uz\"",
      "totalRamMb: 16384 MB",
      "usedRamMb: 12288 MB"
    ],
    "expectedOutput": "Server: prod-node-01.wiut.uz\nBo'sh RAM: 4096 MB | Bandlik: 75.0%",
    "story": {
      "uz": "Bulutli infratuzilma klasterida serverlarning tezkor xotira (RAM) sarfini monitoring qilib boruvchi agent ishlab chiqilmoqda. Bo'sh xotira va yuklanish foizi hisoblanishi zarur.",
      "en": "In a cloud hosting cluster, an agent monitors server RAM usage. It calculates the remaining free RAM and percentage memory utilization.",
      "ru": "В кластере облачного хостинга агент контролирует использование оперативной памяти сервера. Он вычисляет оставшуюся свободную оперативную память и процент использования памяти."
    },
    "steps": {
      "uz": [
        "<code>ServerNode</code> klassini tuzing: <code>String hostName;</code>, <code>int totalRamMb;</code>, <code>int usedRamMb;</code> maydonlarini e'lon qiling.",
        "<code>Main</code> metodida <code>ServerNode node = new ServerNode();</code> ob'yektini yarating.",
        "Maydonlariga qiymat yuklang: <code>node.hostName = \"prod-node-01.wiut.uz\";</code>, <code>node.totalRamMb = 16384;</code>, <code>node.usedRamMb = 12288;</code>.",
        "Bo'sh RAM (<code>node.totalRamMb - node.usedRamMb</code>) va bandlik foizini (<code>((double) node.usedRamMb / node.totalRamMb) * 100.0</code>) hisoblang.",
        "Server monitoring ma'lumotlarini 2 qatorda chop eting:<br><code>System.out.println(\"Server: \" + node.hostName);</code><br><code>System.out.println(\"Bo'sh RAM: \" + freeRam + \" MB | Bandlik: \" + usagePercent + \"%\");</code>"
      ],
      "en": [
        "Create class <code>ServerNode</code> with: <code>String hostName;</code>, <code>int totalRamMb;</code>, <code>int usedRamMb;</code>.",
        "In <code>main</code>, instantiate: <code>ServerNode node = new ServerNode();</code>.",
        "Assign values: <code>node.hostName = \"prod-node-01.wiut.uz\";</code>, <code>node.totalRamMb = 16384;</code>, <code>node.usedRamMb = 12288;</code>.",
        "Calculate free RAM (<code>node.totalRamMb - node.usedRamMb</code>) and usage percentage (<code>((double) node.usedRamMb / node.totalRamMb) * 100.0</code>).",
        "Print monitoring output on 2 lines:<br><code>System.out.println(\"Server: \" + node.hostName);</code><br><code>System.out.println(\"Bo'sh RAM: \" + freeRam + \" MB | Bandlik: \" + usagePercent + \"%\");</code>"
      ],
      "ru": [
        "Создайте класс <code>ServerNode</code> с помощью: <code>String hostName;</code>, <code>int totalRamMb;</code>, <code>int usedRamMb;</code>.",
        "В <code>main</code> создайте экземпляр: <code>ServerNode node = new ServerNode();</code>.",
        "Assign values: <code>node.hostName = \"prod-node-01.wiut.uz\";</code>, <code>node.totalRamMb = 16384;</code>, <code>node.usedRamMb = 12288;</code>.",
        "Рассчитайте свободную оперативную память (<code>node.totalRamMb - node.usedRamMb</code>) и процент использования (<code>((double) node.usedRamMb / node.totalRamMb) * 100.0</code>).",
        "Распечатайте выходные данные мониторинга в 2 строки:<br><code>System.out.println(\"Server: \" + node.hostName);</code><br><code>System.out.println(\"Bo'sh RAM: \" + freeRam + \" MB | Bandlik: \" + usagePercent + \"%\");</code>"
      ]
    }
  },
  {
    "id": 6,
    "tier": 1,
    "tierName": "1-Bosqich: Klasslar va Maydonlar",
    "sector": "1-10",
    "title": {
      "uz": "6. UzAirways — 'FlightBooking' va Chipta Shartli Formati",
      "en": "6. UzAirways — 'FlightBooking' & Conditional Formatting",
      "ru": "6. UzAirways — FlightBooking и условное форматирование"
    },
    "scenario": {
      "uz": "[Hayotiy Voqealik & Kontekst]\nUzAirways aviakompaniyasining reys chiptalari boshqaruv tizimi. Yo'lovchining chipta klassi tekshirilib, biznes-klass yo'lovchilariga VIP Lounge kutish zaliga kirish ruxsati beriladi.\n\n[Bajarilishi kerak bo'lgan vazifalar (1 dan 5 gacha)]\n1. FlightBooking klassini yarating: String flightCode;, String passengerName;, int seatNumber;, boolean isBusinessClass;.\n2. Main metodida FlightBooking b = new FlightBooking(); ob'yektini yarating.\n3. Maydonlariga qiymat bering: b.flightCode = \"HY-101\";, b.passengerName = \"Akmal Nazarov\";, b.seatNumber = 3;, b.isBusinessClass = true;.\n4. Shart tekshiring: agar b.isBusinessClass rost bo'lsa \"Biznes-klass (VIP Lounge ruxsati bor)\", aks holda \"Standart joy\" matnini tayyorlang.\n5. Chiptani 2 qatorda chop eting:System.out.println(\"Reys: \" + b.flightCode + \" | Yo'lovchi: \" + b.passengerName);System.out.println(\"Joy: #\" + b.seatNumber + \" (\" + loungeInfo + \")\");",
      "en": "[Real-World Story & Context]\nUzAirways flight ticketing system checks booking class. Business class passengers receive complimentary VIP Lounge access credentials.\n\n[Step-by-Step Implementation Tasks (1 to 5)]\n1. Declare class FlightBooking with fields: String flightCode;, String passengerName;, int seatNumber;, boolean isBusinessClass;.\n2. In main, instantiate: FlightBooking b = new FlightBooking();.\n3. Assign values: b.flightCode = \"HY-101\";, b.passengerName = \"Akmal Nazarov\";, b.seatNumber = 3;, b.isBusinessClass = true;.\n4. Evaluate class: if b.isBusinessClass is true, text is \"Biznes-klass (VIP Lounge ruxsati bor)\", else \"Standart joy\".\n5. Print ticket details on 2 lines:System.out.println(\"Reys: \" + b.flightCode + \" | Yo'lovchi: \" + b.passengerName);System.out.println(\"Joy: #\" + b.seatNumber + \" (\" + loungeInfo + \")\");",
      "ru": "📖 Контекст и описание задачи\nСистема продажи авиабилетов UzAirways проверяет класс бронирования. Пассажиры бизнес-класса получают бесплатный доступ в VIP-зал.\n\n📋 Пошаговые задачи (от 1 до 5)\n1. Объявите класс <code>FlightBooking</code> с полями: <code>String flightCode;</code>, <code>String passengerName;</code>, <code>int seatNumber;</code>, <code>boolean isBusinessClass;</code>.\n2. В <code>main</code> создайте экземпляр: <code>FlightBooking b = new FlightBooking();</code>.\n3. Присвойте значения: <code>b.flightCode = \"HY-101\";</code>, <code>b.passengerName = \"Akmal Nazarov\";</code>, <code>b.seatNumber = 3;</code>, <code>b.isBusinessClass = true;</code>.\n4. Оценить класс: если <code>b.isBusinessClass</code> истинно, текст будет <code>\"Biznes-klass (VIP Lounge ruxsati bor)\"</code>, иначе <code>\"Standart joy\"</code>.\n5. Print ticket details on 2 lines:<br><code>System.out.println(\"Reys: \" + b.flightCode + \" | Yo'lovchi: \" + b.passengerName);</code><br><code>System.out.println(\"Joy: #\" + b.seatNumber + \" (\" + loungeInfo + \")\");</code>"
    },
    "requirements": {
      "classes": [
        "FlightBooking",
        "Main"
      ],
      "fields": [
        {
          "name": "flightCode",
          "type": "String"
        },
        {
          "name": "passengerName",
          "type": "String"
        },
        {
          "name": "seatNumber",
          "type": "int"
        },
        {
          "name": "isBusinessClass",
          "type": "boolean"
        }
      ]
    },
    "starterCode": "class FlightBooking {\n    // flightCode (String), passengerName (String), seatNumber (int), isBusinessClass (boolean)\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        // FlightBooking ob'yektini yarating va VIP statusini chop eting\n        \n    }\n}",
    "solution": "class FlightBooking {\n    String flightCode;\n    String passengerName;\n    int seatNumber;\n    boolean isBusinessClass;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FlightBooking booking = new FlightBooking();\n        booking.flightCode = \"HY-101\";\n        booking.passengerName = \"Akmal Nazarov\";\n        booking.seatNumber = 3;\n        booking.isBusinessClass = true;\n\n        System.out.println(\"Reys: \" + booking.flightCode + \" | Yo'lovchi: \" + booking.passengerName);\n        if (booking.isBusinessClass) {\n            System.out.println(\"Joy: #\" + booking.seatNumber + \" (Biznes-klass • VIP Lounge ruxsati bor)\");\n        } else {\n            System.out.println(\"Joy: #\" + booking.seatNumber + \" (Standart joy)\");\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Ob'yekt maydonlari murakkab biznes shartlarini tekshirish uchun ma'lumotlar bazasi vazifasini bajaradi.",
      "theoryEn": "Fields act as the authoritative state container evaluated by conditional logic.",
      "cleanCode": "if (booking.isBusinessClass) { ... }",
      "breakdown": [
        "Aviachiptaning xususiyatlari to'liq ifodalandi.",
        "Mantiqiy maydon asosida VIP xizmatlar ajratildi."
      ],
      "pitfalls": "boolean o'zgaruvchilarni if ichida `isBusinessClass == true` deb yozish shart emas, `if (isBusinessClass)` yetarli.",
      "cw2Tip": "Foydalanuvchi huquqlari (Admin/User) ham xuddi shunday tekshiriladi.",
      "theoryRu": "Поля действуют как авторитетный контейнер состояний, оцениваемый условной логикой.",
      "pitfallsRu": "Нет необходимости записывать логические переменные как `isBusinessClass == true`, если достаточно `if (isBusinessClass)`.",
      "breakdownRu": [
        "Подробно описаны особенности авиабилета.",
        "VIP-услуги распределяются на основе логической зоны."
      ]
    },
    "sampleData": [
      "flightCode: \"HY-101\"",
      "passengerName: \"Akmal Nazarov\"",
      "seatNumber: 3",
      "isBusinessClass: true"
    ],
    "expectedOutput": "Reys: HY-101 | Yo'lovchi: Akmal Nazarov\nJoy: #3 (Biznes-klass ? VIP Lounge ruxsati bor)",
    "story": {
      "uz": "UzAirways aviakompaniyasining reys chiptalari boshqaruv tizimi. Yo'lovchining chipta klassi tekshirilib, biznes-klass yo'lovchilariga VIP Lounge kutish zaliga kirish ruxsati beriladi.",
      "en": "UzAirways flight ticketing system checks booking class. Business class passengers receive complimentary VIP Lounge access credentials.",
      "ru": "Система продажи авиабилетов UzAirways проверяет класс бронирования. Пассажиры бизнес-класса получают бесплатный доступ в VIP-зал."
    },
    "steps": {
      "uz": [
        "<code>FlightBooking</code> klassini yarating: <code>String flightCode;</code>, <code>String passengerName;</code>, <code>int seatNumber;</code>, <code>boolean isBusinessClass;</code>.",
        "<code>Main</code> metodida <code>FlightBooking b = new FlightBooking();</code> ob'yektini yarating.",
        "Maydonlariga qiymat bering: <code>b.flightCode = \"HY-101\";</code>, <code>b.passengerName = \"Akmal Nazarov\";</code>, <code>b.seatNumber = 3;</code>, <code>b.isBusinessClass = true;</code>.",
        "Shart tekshiring: agar <code>b.isBusinessClass</code> rost bo'lsa <code>\"Biznes-klass (VIP Lounge ruxsati bor)\"</code>, aks holda <code>\"Standart joy\"</code> matnini tayyorlang.",
        "Chiptani 2 qatorda chop eting:<br><code>System.out.println(\"Reys: \" + b.flightCode + \" | Yo'lovchi: \" + b.passengerName);</code><br><code>System.out.println(\"Joy: #\" + b.seatNumber + \" (\" + loungeInfo + \")\");</code>"
      ],
      "en": [
        "Declare class <code>FlightBooking</code> with fields: <code>String flightCode;</code>, <code>String passengerName;</code>, <code>int seatNumber;</code>, <code>boolean isBusinessClass;</code>.",
        "In <code>main</code>, instantiate: <code>FlightBooking b = new FlightBooking();</code>.",
        "Assign values: <code>b.flightCode = \"HY-101\";</code>, <code>b.passengerName = \"Akmal Nazarov\";</code>, <code>b.seatNumber = 3;</code>, <code>b.isBusinessClass = true;</code>.",
        "Evaluate class: if <code>b.isBusinessClass</code> is true, text is <code>\"Biznes-klass (VIP Lounge ruxsati bor)\"</code>, else <code>\"Standart joy\"</code>.",
        "Print ticket details on 2 lines:<br><code>System.out.println(\"Reys: \" + b.flightCode + \" | Yo'lovchi: \" + b.passengerName);</code><br><code>System.out.println(\"Joy: #\" + b.seatNumber + \" (\" + loungeInfo + \")\");</code>"
      ],
      "ru": [
        "Объявите класс <code>FlightBooking</code> с полями: <code>String flightCode;</code>, <code>String passengerName;</code>, <code>int seatNumber;</code>, <code>boolean isBusinessClass;</code>.",
        "В <code>main</code> создайте экземпляр: <code>FlightBooking b = new FlightBooking();</code>.",
        "Присвойте значения: <code>b.flightCode = \"HY-101\";</code>, <code>b.passengerName = \"Akmal Nazarov\";</code>, <code>b.seatNumber = 3;</code>, <code>b.isBusinessClass = true;</code>.",
        "Оценить класс: если <code>b.isBusinessClass</code> истинно, текст будет <code>\"Biznes-klass (VIP Lounge ruxsati bor)\"</code>, иначе <code>\"Standart joy\"</code>.",
        "Print ticket details on 2 lines:<br><code>System.out.println(\"Reys: \" + b.flightCode + \" | Yo'lovchi: \" + b.passengerName);</code><br><code>System.out.println(\"Joy: #\" + b.seatNumber + \" (\" + loungeInfo + \")\");</code>"
      ]
    }
  },
  {
    "id": 7,
    "tier": 1,
    "tierName": "1-Bosqich: Klasslar va Maydonlar",
    "sector": "1-10",
    "title": {
      "uz": "7. Korzinka Supermarket — 'InventoryItem' va Zaxira Qoldig'i Ogohlantirishi",
      "en": "7. Korzinka Supermarket — 'InventoryItem' & Low Stock Alert",
      "ru": "7. Супермаркет «Корзинка» — «InventoryItem» и оповещение о низком запасе."
    },
    "scenario": {
      "uz": "[Hayotiy Voqealik & Kontekst]\nKorzinka supermarketlar tarmog'ida tovar zaxirasi belgilangan minimal chegaradan kamayib ketganda avtomatik ogohlantiruvchi ta'minot moduli talab etiladi.\n\n[Bajarilishi kerak bo'lgan vazifalar (1 dan 5 gacha)]\n1. InventoryItem klassini tuzing: String skuCode;, String itemName;, int quantity;, int minThreshold;.\n2. Main metodida InventoryItem item = new InventoryItem(); ob'yektini yarating.\n3. Maydonlariga qiymat yuklang: item.skuCode = \"SKU-9901\";, item.itemName = \"Sut 1.5L Musaffo\";, item.quantity = 4;, item.minThreshold = 10;.\n4. item.quantity  shartini tekshirib, xulosa matnini tuzing.\n5. Ombor holatini 2 qatorda chop eting:System.out.println(\"Tovar: \" + item.itemName + \" | Qoldiq: \" + item.quantity + \" dona\");System.out.println(\"DIQQAT: Qayta buyurtma bering! Qoldiq chegaradan kam (\" + item.quantity + \" ",
      "en": "[Real-World Story & Context]\nIn Korzinka supermarket chain, warehouse inventory triggers an automated restock alert when quantity drops below the designated threshold.\n\n[Step-by-Step Implementation Tasks (1 to 5)]\n1. Declare class InventoryItem with: String skuCode;, String itemName;, int quantity;, int minThreshold;.\n2. In main, instantiate: InventoryItem item = new InventoryItem();.\n3. Assign values: item.skuCode = \"SKU-9901\";, item.itemName = \"Sut 1.5L Musaffo\";, item.quantity = 4;, item.minThreshold = 10;.\n4. Check condition item.quantity .\n5. Print alert output on 2 lines:System.out.println(\"Tovar: \" + item.itemName + \" | Qoldiq: \" + item.quantity + \" dona\");System.out.println(\"DIQQAT: Qayta buyurtma bering! Qoldiq chegaradan kam (\" + item.quantity + \" ",
      "ru": "📖 Контекст и описание задачи\nВ сети супермаркетов «Корзинка» наличие складских запасов вызывает автоматическое оповещение о пополнении запасов, когда количество падает ниже установленного порога.\n\n📋 Пошаговые задачи (от 1 до 5)\n1. Объявите класс <code>InventoryItem</code> с помощью: <code>String skuCode;</code>, <code>String itemName;</code>, <code>int quantity;</code>, <code>int minThreshold;</code>.\n2. В <code>main</code> создайте экземпляр: <code>InventoryItem item = new InventoryItem();</code>.\n3. Присвойте значения: <code>item.skuCode = \"SKU-9901\";</code>, <code>item.itemName = \"Sut 1.5L Musaffo\";</code>, <code>item.quantity = 4;</code>, <code>item.minThreshold = 10;</code>.\n4. Проверьте состояние <code>item.quantity <= item.minThreshold</code>.\n5. Распечатать вывод предупреждения в 2 строки:<br><code>System.out.println(\"Tovar: \" + item.itemName + \" | Qoldiq: \" + item.quantity + \" dona\");</code><br><code>System.out.println(\"DIQQAT: Qayta buyurtma bering! Qoldiq chegaradan kam (\" + item.quantity + \" <= \" + item.minThreshold + \")\");</code>"
    },
    "requirements": {
      "classes": [
        "InventoryItem",
        "Main"
      ],
      "fields": [
        {
          "name": "skuCode",
          "type": "String"
        },
        {
          "name": "itemName",
          "type": "String"
        },
        {
          "name": "quantity",
          "type": "int"
        },
        {
          "name": "minThreshold",
          "type": "int"
        }
      ]
    },
    "starterCode": "class InventoryItem {\n    // skuCode (String), itemName (String), quantity (int), minThreshold (int)\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        // Tovar qoldig'ini tekshiring va ogohlantirish chiqaring\n        \n    }\n}",
    "solution": "class InventoryItem {\n    String skuCode;\n    String itemName;\n    int quantity;\n    int minThreshold;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        InventoryItem item = new InventoryItem();\n        item.skuCode = \"SKU-99214\";\n        item.itemName = \"Sut 1.5L Musaffo\";\n        item.quantity = 4;\n        item.minThreshold = 10;\n\n        System.out.println(\"Tovar: \" + item.itemName + \" | Qoldiq: \" + item.quantity + \" dona\");\n        if (item.quantity <= item.minThreshold) {\n            System.out.println(\"DIQQAT: Qayta buyurtma bering! Qoldiq chegaradan kam (\" + item.quantity + \" <= \" + item.minThreshold + \")\");\n        } else {\n            System.out.println(\"Holat: Zaxira yetarli.\");\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Biznes ilovalarida chegaraviy shartlar (threshold checks) doimiy ravishda ob'yekt maydonlari o'rtasida solishtiriladi.",
      "theoryEn": "Threshold comparisons evaluate system capacity limits directly on instance state.",
      "cleanCode": "if (item.quantity <= item.minThreshold) { ... }",
      "breakdown": [
        "Ombor mahsulotining SKU kodi va soni saqlandi.",
        "Minimal chegara bilan taqqoslab ogohlantirish berildi."
      ],
      "pitfalls": "Tenglik belgisini unutib faqat `<` yozish minimal miqdorda ogohlantirish chiqmay qolishiga olib kelishi mumkin.",
      "cw2Tip": "CW2 Console ilovangizda mahsulot soni 0 ga tushib qolmasligini nazorat qilishda bu usul zarur.",
      "theoryRu": "Сравнение порогов оценивает ограничения производительности системы непосредственно на основании состояния экземпляра.",
      "pitfallsRu": "Ввод только `<`, забыв знак равенства, может привести к тому, что будет пропущено минимальное количество предупреждений.",
      "breakdownRu": [
        "Артикул и номер складского товара сохранены.",
        "Было вынесено предупреждение по поводу минимального порога."
      ]
    },
    "sampleData": [
      "skuCode: \"SKU-99214\"",
      "itemName: \"Sut 1.5L Musaffo\"",
      "quantity: 4",
      "minThreshold: 10"
    ],
    "expectedOutput": "Tovar: Sut 1.5L Musaffo | Qoldiq: 4 dona\nDIQQAT: Qayta buyurtma bering! Qoldiq chegaradan kam (4 <= 10)",
    "story": {
      "uz": "Korzinka supermarketlar tarmog'ida tovar zaxirasi belgilangan minimal chegaradan kamayib ketganda avtomatik ogohlantiruvchi ta'minot moduli talab etiladi.",
      "en": "In Korzinka supermarket chain, warehouse inventory triggers an automated restock alert when quantity drops below the designated threshold.",
      "ru": "В сети супермаркетов «Корзинка» наличие складских запасов вызывает автоматическое оповещение о пополнении запасов, когда количество падает ниже установленного порога."
    },
    "steps": {
      "uz": [
        "<code>InventoryItem</code> klassini tuzing: <code>String skuCode;</code>, <code>String itemName;</code>, <code>int quantity;</code>, <code>int minThreshold;</code>.",
        "<code>Main</code> metodida <code>InventoryItem item = new InventoryItem();</code> ob'yektini yarating.",
        "Maydonlariga qiymat yuklang: <code>item.skuCode = \"SKU-9901\";</code>, <code>item.itemName = \"Sut 1.5L Musaffo\";</code>, <code>item.quantity = 4;</code>, <code>item.minThreshold = 10;</code>.",
        "<code>item.quantity <= item.minThreshold</code> shartini tekshirib, xulosa matnini tuzing.",
        "Ombor holatini 2 qatorda chop eting:<br><code>System.out.println(\"Tovar: \" + item.itemName + \" | Qoldiq: \" + item.quantity + \" dona\");</code><br><code>System.out.println(\"DIQQAT: Qayta buyurtma bering! Qoldiq chegaradan kam (\" + item.quantity + \" <= \" + item.minThreshold + \")\");</code>"
      ],
      "en": [
        "Declare class <code>InventoryItem</code> with: <code>String skuCode;</code>, <code>String itemName;</code>, <code>int quantity;</code>, <code>int minThreshold;</code>.",
        "In <code>main</code>, instantiate: <code>InventoryItem item = new InventoryItem();</code>.",
        "Assign values: <code>item.skuCode = \"SKU-9901\";</code>, <code>item.itemName = \"Sut 1.5L Musaffo\";</code>, <code>item.quantity = 4;</code>, <code>item.minThreshold = 10;</code>.",
        "Check condition <code>item.quantity <= item.minThreshold</code>.",
        "Print alert output on 2 lines:<br><code>System.out.println(\"Tovar: \" + item.itemName + \" | Qoldiq: \" + item.quantity + \" dona\");</code><br><code>System.out.println(\"DIQQAT: Qayta buyurtma bering! Qoldiq chegaradan kam (\" + item.quantity + \" <= \" + item.minThreshold + \")\");</code>"
      ],
      "ru": [
        "Объявите класс <code>InventoryItem</code> с помощью: <code>String skuCode;</code>, <code>String itemName;</code>, <code>int quantity;</code>, <code>int minThreshold;</code>.",
        "В <code>main</code> создайте экземпляр: <code>InventoryItem item = new InventoryItem();</code>.",
        "Присвойте значения: <code>item.skuCode = \"SKU-9901\";</code>, <code>item.itemName = \"Sut 1.5L Musaffo\";</code>, <code>item.quantity = 4;</code>, <code>item.minThreshold = 10;</code>.",
        "Проверьте состояние <code>item.quantity <= item.minThreshold</code>.",
        "Распечатать вывод предупреждения в 2 строки:<br><code>System.out.println(\"Tovar: \" + item.itemName + \" | Qoldiq: \" + item.quantity + \" dona\");</code><br><code>System.out.println(\"DIQQAT: Qayta buyurtma bering! Qoldiq chegaradan kam (\" + item.quantity + \" <= \" + item.minThreshold + \")\");</code>"
      ]
    }
  },
  {
    "id": 8,
    "tier": 1,
    "tierName": "1-Bosqich: Klasslar va Maydonlar",
    "sector": "1-10",
    "title": {
      "uz": "8. Medion Clinic — 'MedicalRecord' va Bemorning Vital Ko'rsatkichlari",
      "en": "8. Medion Clinic — 'MedicalRecord' & Vital Health Metrics",
      "ru": "8. Клиника Medion — «Медицинская запись» и показатели жизненно важного здоровья."
    },
    "scenario": {
      "uz": "[Hayotiy Voqealik & Kontekst]\nMedion xususiy klinikasida bemorning qon bosimi va tana harorati me'yordan oshganda gipertoniya xavfi to'g'risida shifokorga xulosa beruvchi tizim ishlab chiqilmoqda.\n\n[Bajarilishi kerak bo'lgan vazifalar (1 dan 5 gacha)]\n1. MedicalRecord klassini yarating: String patientName;, int systolicPressure;, int diastolicPressure;, double bodyTemp;.\n2. Main metodida MedicalRecord rec = new MedicalRecord(); ob'yektini yarating.\n3. Maydonlariga qiymat bering: rec.patientName = \"Sanjar Jo'rayev\";, rec.systolicPressure = 145;, rec.diastolicPressure = 92;, rec.bodyTemp = 36.6;.\n4. Gipertoniya shartini tekshiring: if (rec.systolicPressure >= 140 || rec.diastolicPressure >= 90).\n5. Bemor kartasini 2 qatorda chop eting:System.out.println(\"Bemor: \" + rec.patientName + \" | Tana harorati: \" + rec.bodyTemp + \"°C\");System.out.println(\"Xulosa: Gipertoniya xavfi (\" + rec.systolicPressure + \"/\" + rec.diastolicPressure + \")\");",
      "en": "[Real-World Story & Context]\nMedion private clinic monitors vital patient health indicators, alerting doctors if systolic or diastolic blood pressure signals hypertension risk.\n\n[Step-by-Step Implementation Tasks (1 to 5)]\n1. Create class MedicalRecord with: String patientName;, int systolicPressure;, int diastolicPressure;, double bodyTemp;.\n2. In main, instantiate: MedicalRecord rec = new MedicalRecord();.\n3. Assign values: rec.patientName = \"Sanjar Jo'rayev\";, rec.systolicPressure = 145;, rec.diastolicPressure = 92;, rec.bodyTemp = 36.6;.\n4. Evaluate hypertension condition: if (rec.systolicPressure >= 140 || rec.diastolicPressure >= 90).\n5. Print record details on 2 lines:System.out.println(\"Bemor: \" + rec.patientName + \" | Tana harorati: \" + rec.bodyTemp + \"°C\");System.out.println(\"Xulosa: Gipertoniya xavfi (\" + rec.systolicPressure + \"/\" + rec.diastolicPressure + \")\");",
      "ru": "📖 Контекст и описание задачи\nЧастная клиника Medion отслеживает жизненно важные показатели здоровья пациентов, предупреждая врачей, если систолическое или диастолическое артериальное давление сигнализирует о риске гипертонии.\n\n📋 Пошаговые задачи (от 1 до 5)\n1. Создайте класс <code>MedicalRecord</code> с помощью: <code>String patientName;</code>, <code>int systolicPressure;</code>, <code>int diastolicPressure;</code>, <code>double bodyTemp;</code>.\n2. В <code>main</code> создайте экземпляр: <code>MedicalRecord rec = new MedicalRecord();</code>.\n3. Присвойте значения: <code>rec.patientName = \"Sanjar Jo'rayev\";</code>, <code>rec.systolicPressure = 145;</code>, <code>rec.diastolicPressure = 92;</code>, <code>rec.bodyTemp = 36.6;</code>.\n4. Оценить состояние гипертонии: <code>if (rec.systolicPressure >= 140 || rec.diastolicPressure >= 90)</code>.\n5. Распечатать детали записи в 2 строки:<br><code>System.out.println(\"Bemor: \" + rec.patientName + \" | Tana harorati: \" + rec.bodyTemp + \"°C\");</code><br><code>System.out.println(\"Xulosa: Gipertoniya xavfi (\" + rec.systolicPressure + \"/\" + rec.diastolicPressure + \")\");</code>"
    },
    "requirements": {
      "classes": [
        "MedicalRecord",
        "Main"
      ],
      "fields": [
        {
          "name": "patientName",
          "type": "String"
        },
        {
          "name": "systolicPressure",
          "type": "int"
        },
        {
          "name": "diastolicPressure",
          "type": "int"
        },
        {
          "name": "bodyTemp",
          "type": "double"
        }
      ]
    },
    "starterCode": "class MedicalRecord {\n    // patientName (String), systolicPressure (int), diastolicPressure (int), bodyTemp (double)\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        // MedicalRecord ob'yektini tekshiring\n        \n    }\n}",
    "solution": "class MedicalRecord {\n    String patientName;\n    int systolicPressure;\n    int diastolicPressure;\n    double bodyTemp;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MedicalRecord record = new MedicalRecord();\n        record.patientName = \"Sanjar Jo'rayev\";\n        record.systolicPressure = 145;\n        record.diastolicPressure = 92;\n        record.bodyTemp = 36.6;\n\n        System.out.println(\"Bemor: \" + record.patientName + \" | Tana harorati: \" + record.bodyTemp + \"°C\");\n        if (record.systolicPressure >= 140 || record.diastolicPressure >= 90) {\n            System.out.println(\"Xulosa: Gipertoniya xavfi (\" + record.systolicPressure + \"/\" + record.diastolicPressure + \")\");\n        } else {\n            System.out.println(\"Xulosa: Bosim me'yorda.\");\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Mantiqiy 'yoki' (||) va 'va' (&&) operatorlari bir nechta maydonlarni birlashtirib, murakkab domenga oid tahlillar o'tkazish imkonini beradi.",
      "theoryEn": "Logical disjunction (||) evaluates multiple state variables to determine medical risk conditions.",
      "cleanCode": "if (record.systolicPressure >= 140 || record.diastolicPressure >= 90)",
      "breakdown": [
        "Sistolik va diastolik bosim int turlarida saqlandi.",
        "Qon bosimi xalqaro me'yorlari asosida xulosa berildi."
      ],
      "pitfalls": "Mantiqiy shartlarda qavslar ketma-ketligini to'g'ri qo'llash mantiqiy xatoliklarni oldini oladi.",
      "cw2Tip": "Biznes qoidalari har doim bir nechta maydonlarning kombinatsiyasiga tayanadi.",
      "theoryRu": "Логическая дизъюнкция (||) оценивает несколько переменных состояния для определения условий медицинского риска.",
      "pitfallsRu": "Правильное использование последовательности скобок в логических условиях позволяет избежать логических ошибок.",
      "breakdownRu": [
        "Систолическое и диастолическое давление сохранялось у инт-типов.",
        "Заключение было сделано на основании международных норм артериального давления."
      ]
    },
    "sampleData": [
      "patientName: \"Sanjar Jo'rayev\"",
      "systolicPressure: 145",
      "diastolicPressure: 92",
      "bodyTemp: 36.6°C"
    ],
    "expectedOutput": "Bemor: Sanjar Jo'rayev | Tana harorati: 36.6°C\nXulosa: Gipertoniya xavfi (145/92)",
    "story": {
      "uz": "Medion xususiy klinikasida bemorning qon bosimi va tana harorati me'yordan oshganda gipertoniya xavfi to'g'risida shifokorga xulosa beruvchi tizim ishlab chiqilmoqda.",
      "en": "Medion private clinic monitors vital patient health indicators, alerting doctors if systolic or diastolic blood pressure signals hypertension risk.",
      "ru": "Частная клиника Medion отслеживает жизненно важные показатели здоровья пациентов, предупреждая врачей, если систолическое или диастолическое артериальное давление сигнализирует о риске гипертонии."
    },
    "steps": {
      "uz": [
        "<code>MedicalRecord</code> klassini yarating: <code>String patientName;</code>, <code>int systolicPressure;</code>, <code>int diastolicPressure;</code>, <code>double bodyTemp;</code>.",
        "<code>Main</code> metodida <code>MedicalRecord rec = new MedicalRecord();</code> ob'yektini yarating.",
        "Maydonlariga qiymat bering: <code>rec.patientName = \"Sanjar Jo'rayev\";</code>, <code>rec.systolicPressure = 145;</code>, <code>rec.diastolicPressure = 92;</code>, <code>rec.bodyTemp = 36.6;</code>.",
        "Gipertoniya shartini tekshiring: <code>if (rec.systolicPressure >= 140 || rec.diastolicPressure >= 90)</code>.",
        "Bemor kartasini 2 qatorda chop eting:<br><code>System.out.println(\"Bemor: \" + rec.patientName + \" | Tana harorati: \" + rec.bodyTemp + \"°C\");</code><br><code>System.out.println(\"Xulosa: Gipertoniya xavfi (\" + rec.systolicPressure + \"/\" + rec.diastolicPressure + \")\");</code>"
      ],
      "en": [
        "Create class <code>MedicalRecord</code> with: <code>String patientName;</code>, <code>int systolicPressure;</code>, <code>int diastolicPressure;</code>, <code>double bodyTemp;</code>.",
        "In <code>main</code>, instantiate: <code>MedicalRecord rec = new MedicalRecord();</code>.",
        "Assign values: <code>rec.patientName = \"Sanjar Jo'rayev\";</code>, <code>rec.systolicPressure = 145;</code>, <code>rec.diastolicPressure = 92;</code>, <code>rec.bodyTemp = 36.6;</code>.",
        "Evaluate hypertension condition: <code>if (rec.systolicPressure >= 140 || rec.diastolicPressure >= 90)</code>.",
        "Print record details on 2 lines:<br><code>System.out.println(\"Bemor: \" + rec.patientName + \" | Tana harorati: \" + rec.bodyTemp + \"°C\");</code><br><code>System.out.println(\"Xulosa: Gipertoniya xavfi (\" + rec.systolicPressure + \"/\" + rec.diastolicPressure + \")\");</code>"
      ],
      "ru": [
        "Создайте класс <code>MedicalRecord</code> с помощью: <code>String patientName;</code>, <code>int systolicPressure;</code>, <code>int diastolicPressure;</code>, <code>double bodyTemp;</code>.",
        "В <code>main</code> создайте экземпляр: <code>MedicalRecord rec = new MedicalRecord();</code>.",
        "Присвойте значения: <code>rec.patientName = \"Sanjar Jo'rayev\";</code>, <code>rec.systolicPressure = 145;</code>, <code>rec.diastolicPressure = 92;</code>, <code>rec.bodyTemp = 36.6;</code>.",
        "Оценить состояние гипертонии: <code>if (rec.systolicPressure >= 140 || rec.diastolicPressure >= 90)</code>.",
        "Распечатать детали записи в 2 строки:<br><code>System.out.println(\"Bemor: \" + rec.patientName + \" | Tana harorati: \" + rec.bodyTemp + \"°C\");</code><br><code>System.out.println(\"Xulosa: Gipertoniya xavfi (\" + rec.systolicPressure + \"/\" + rec.diastolicPressure + \")\");</code>"
      ]
    }
  },
  {
    "id": 9,
    "tier": 1,
    "tierName": "1-Bosqich: Klasslar va Maydonlar",
    "sector": "1-10",
    "title": {
      "uz": "9. BYD Auto — 'VehicleTelemetry' va Elektromobil Zaxira Masofasi",
      "en": "9. BYD Auto — 'VehicleTelemetry' & Electric Range Estimation",
      "ru": "9. BYD Auto — «Телеметрия транспортного средства» и оценка запаса хода на электротяге"
    },
    "scenario": {
      "uz": "[Hayotiy Voqealik & Kontekst]\nBYD elektromobilining bort kompyuteri telemetriya ma'lumotlari orqali akkumulyatorning qolgan quvvat foizi va unga asoslangan zaxira yurish masofasini (km) real vaqtda hisoblaydi.\n\n[Bajarilishi kerak bo'lgan vazifalar (1 dan 5 gacha)]\n1. Vehicle klassini tuzing: String vin;, double batteryCapacityKwh;, double currentChargeKwh;, double consumptionPer100Km;.\n2. Main metodida Vehicle car = new Vehicle(); ob'yektini yarating.\n3. Maydonlariga qiymat yuklang: car.vin = \"BYD-CHAZOR-2024-UZB\";, car.batteryCapacityKwh = 18.3;, car.currentChargeKwh = 12.0;, car.consumptionPer100Km = 14.5;.\n4. Zaryad foizi ((car.currentChargeKwh / car.batteryCapacityKwh) * 100.0) va zaxira masofasini ((car.currentChargeKwh / car.consumptionPer100Km) * 100.0) hisoblang.\n5. Avtomobil telemetriyasini 2 qatorda chop eting:System.out.println(\"VIN: \" + car.vin);System.out.println(\"Batareya: \" + batteryPercent + \"% | Zaxira masofa: \" + remainingKm + \" km\");",
      "en": "[Real-World Story & Context]\nBYD electric vehicle telemetry computer estimates battery remaining charge percentage and calculates remaining driving range in kilometers.\n\n[Step-by-Step Implementation Tasks (1 to 5)]\n1. Create class Vehicle with: String vin;, double batteryCapacityKwh;, double currentChargeKwh;, double consumptionPer100Km;.\n2. In main, instantiate: Vehicle car = new Vehicle();.\n3. Assign values: car.vin = \"BYD-CHAZOR-2024-UZB\";, car.batteryCapacityKwh = 18.3;, car.currentChargeKwh = 12.0;, car.consumptionPer100Km = 14.5;.\n4. Compute charge percentage and remaining range in km.\n5. Print telemetry data on 2 lines:System.out.println(\"VIN: \" + car.vin);System.out.println(\"Batareya: \" + batteryPercent + \"% | Zaxira masofa: \" + remainingKm + \" km\");",
      "ru": "📖 Контекст и описание задачи\nКомпьютер телеметрии электромобиля BYD оценивает процент оставшегося заряда аккумулятора и рассчитывает оставшийся запас хода в километрах.\n\n📋 Пошаговые задачи (от 1 до 5)\n1. Создайте класс <code>Vehicle</code> с помощью: <code>String vin;</code>, <code>double batteryCapacityKwh;</code>, <code>double currentChargeKwh;</code>, <code>double consumptionPer100Km;</code>.\n2. В <code>main</code> создайте экземпляр: <code>Vehicle car = new Vehicle();</code>.\n3. Assign values: <code>car.vin = \"BYD-CHAZOR-2024-UZB\";</code>, <code>car.batteryCapacityKwh = 18.3;</code>, <code>car.currentChargeKwh = 12.0;</code>, <code>car.consumptionPer100Km = 14.5;</code>.\n4. Вычислите процент заряда и оставшийся запас хода в км.\n5. Print telemetry data on 2 lines:<br><code>System.out.println(\"VIN: \" + car.vin);</code><br><code>System.out.println(\"Batareya: \" + batteryPercent + \"% | Zaxira masofa: \" + remainingKm + \" km\");</code>"
    },
    "requirements": {
      "classes": [
        "Vehicle",
        "Main"
      ],
      "fields": [
        {
          "name": "vin",
          "type": "String"
        },
        {
          "name": "batteryCapacityKwh",
          "type": "double"
        },
        {
          "name": "currentChargeKwh",
          "type": "double"
        },
        {
          "name": "consumptionPer100Km",
          "type": "double"
        }
      ]
    },
    "starterCode": "class Vehicle {\n    // vin (String), batteryCapacityKwh (double), currentChargeKwh (double), consumptionPer100Km (double)\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        // Vehicle ob'yektini yarating va zaxira masofasini (km) hisoblang\n        \n    }\n}",
    "solution": "class Vehicle {\n    String vin;\n    double batteryCapacityKwh;\n    double currentChargeKwh;\n    double consumptionPer100Km;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Vehicle car = new Vehicle();\n        car.vin = \"BYD-CHAZOR-2024-UZB\";\n        car.batteryCapacityKwh = 18.3;\n        car.currentChargeKwh = 12.0;\n        car.consumptionPer100Km = 14.5;\n\n        double estimatedRangeKm = (car.currentChargeKwh / car.consumptionPer100Km) * 100.0;\n        double batteryPercentage = (car.currentChargeKwh / car.batteryCapacityKwh) * 100.0;\n\n        System.out.println(\"VIN: \" + car.vin);\n        System.out.println(\"Batareya: \" + batteryPercentage + \"% | Zaxira masofa: \" + estimatedRangeKm + \" km\");\n    }\n}",
    "detailedSolution": {
      "theory": "Real muhandislik masalalarida ob'yektning fizik holatlari bir necha xil formulalar orqali foydalanuvchiga kerakli shaklga keltiriladi.",
      "theoryEn": "Engineering domain models transform raw physical metrics into actionable end-user indicators.",
      "cleanCode": "double estimatedRangeKm = (car.currentChargeKwh / car.consumptionPer100Km) * 100.0;",
      "breakdown": [
        "Elektromobil parametrlari double aniqligida e'lon qilindi.",
        "Qolgan quvvat va 100 km sarf nisbati orqali masofa aniqlandi."
      ],
      "pitfalls": "consumptionPer100Km nolga teng bo'lmasligi kerak, aks holda cheksizlik (Infinity) paydo bo'ladi.",
      "cw2Tip": "Real konsol ilovalarida ma'lumotlarni hisoblash doimo shu kabi modellarga tayanadi.",
      "theoryRu": "Модели инженерной предметной области преобразуют необработанные физические показатели в действенные индикаторы для конечных пользователей.",
      "pitfallsRu": "потребление на 100 км не должно быть нулевым, иначе появится бесконечность.",
      "breakdownRu": [
        "Параметры электромобиля публикуются с двойной точностью.",
        "Расстояние определялось соотношением оставшейся мощности и расхода на 100 км."
      ]
    },
    "sampleData": [
      "vin: \"BYD-CHAZOR-2024-UZB\"",
      "batteryCapacityKwh: 18.3 kWh",
      "currentChargeKwh: 12.0 kWh",
      "consumptionPer100Km: 14.5 kWh"
    ],
    "expectedOutput": "VIN: BYD-CHAZOR-2024-UZB\nBatareya: 65.57377049180327% | Zaxira masofa: 82.75862068965517 km",
    "story": {
      "uz": "BYD elektromobilining bort kompyuteri telemetriya ma'lumotlari orqali akkumulyatorning qolgan quvvat foizi va unga asoslangan zaxira yurish masofasini (km) real vaqtda hisoblaydi.",
      "en": "BYD electric vehicle telemetry computer estimates battery remaining charge percentage and calculates remaining driving range in kilometers.",
      "ru": "Компьютер телеметрии электромобиля BYD оценивает процент оставшегося заряда аккумулятора и рассчитывает оставшийся запас хода в километрах."
    },
    "steps": {
      "uz": [
        "<code>Vehicle</code> klassini tuzing: <code>String vin;</code>, <code>double batteryCapacityKwh;</code>, <code>double currentChargeKwh;</code>, <code>double consumptionPer100Km;</code>.",
        "<code>Main</code> metodida <code>Vehicle car = new Vehicle();</code> ob'yektini yarating.",
        "Maydonlariga qiymat yuklang: <code>car.vin = \"BYD-CHAZOR-2024-UZB\";</code>, <code>car.batteryCapacityKwh = 18.3;</code>, <code>car.currentChargeKwh = 12.0;</code>, <code>car.consumptionPer100Km = 14.5;</code>.",
        "Zaryad foizi (<code>(car.currentChargeKwh / car.batteryCapacityKwh) * 100.0</code>) va zaxira masofasini (<code>(car.currentChargeKwh / car.consumptionPer100Km) * 100.0</code>) hisoblang.",
        "Avtomobil telemetriyasini 2 qatorda chop eting:<br><code>System.out.println(\"VIN: \" + car.vin);</code><br><code>System.out.println(\"Batareya: \" + batteryPercent + \"% | Zaxira masofa: \" + remainingKm + \" km\");</code>"
      ],
      "en": [
        "Create class <code>Vehicle</code> with: <code>String vin;</code>, <code>double batteryCapacityKwh;</code>, <code>double currentChargeKwh;</code>, <code>double consumptionPer100Km;</code>.",
        "In <code>main</code>, instantiate: <code>Vehicle car = new Vehicle();</code>.",
        "Assign values: <code>car.vin = \"BYD-CHAZOR-2024-UZB\";</code>, <code>car.batteryCapacityKwh = 18.3;</code>, <code>car.currentChargeKwh = 12.0;</code>, <code>car.consumptionPer100Km = 14.5;</code>.",
        "Compute charge percentage and remaining range in km.",
        "Print telemetry data on 2 lines:<br><code>System.out.println(\"VIN: \" + car.vin);</code><br><code>System.out.println(\"Batareya: \" + batteryPercent + \"% | Zaxira masofa: \" + remainingKm + \" km\");</code>"
      ],
      "ru": [
        "Создайте класс <code>Vehicle</code> с помощью: <code>String vin;</code>, <code>double batteryCapacityKwh;</code>, <code>double currentChargeKwh;</code>, <code>double consumptionPer100Km;</code>.",
        "В <code>main</code> создайте экземпляр: <code>Vehicle car = new Vehicle();</code>.",
        "Assign values: <code>car.vin = \"BYD-CHAZOR-2024-UZB\";</code>, <code>car.batteryCapacityKwh = 18.3;</code>, <code>car.currentChargeKwh = 12.0;</code>, <code>car.consumptionPer100Km = 14.5;</code>.",
        "Вычислите процент заряда и оставшийся запас хода в км.",
        "Print telemetry data on 2 lines:<br><code>System.out.println(\"VIN: \" + car.vin);</code><br><code>System.out.println(\"Batareya: \" + batteryPercent + \"% | Zaxira masofa: \" + remainingKm + \" km\");</code>"
      ]
    }
  },
  {
    "id": 10,
    "tier": 1,
    "tierName": "1-Bosqich: Klasslar va Maydonlar",
    "sector": "1-10",
    "title": {
      "uz": "10. E-Auction — 'AuctionLot' va Raqobatli Takliflar Logikasi (Stage 1 Master)",
      "en": "10. E-Auction — 'AuctionLot' & Competitive Bidding (Stage 1 Master)",
      "ru": "10. Электронный аукцион — «AuctionLot» и конкурсные торги (этап 1, мастер)"
    },
    "scenario": {
      "uz": "[Hayotiy Voqealik & Kontekst]\nE-Auksion platformasida qimmatbaho lot savdosi o'tkazilmoqda. Qatnashchilardan yangi taklif tushganda, agar u joriy eng yuqori narxdan katta bo'lsagina auksion yetakchisi va narxi yangilanadi.\n\n[Bajarilishi kerak bo'lgan vazifalar (1 dan 5 gacha)]\n1. AuctionLot klassini yarating: String lotTitle;, double startingPrice;, double highestBid;, String highestBidder;.\n2. Main metodida AuctionLot lot = new AuctionLot(); ob'yektini yarating.\n3. Boshlang'ich qiymatlarni o'rnating: lot.lotTitle = \"Toshkent City Ofis Binosi\";, lot.startingPrice = 500000.0;, lot.highestBid = 500000.0;, lot.highestBidder = \"Boshlang'ich\";.\n4. Yangi taklifni tekshiring (double newBid = 520000.0; String newBidder = \"Kompaniya A\";): agar newBid > lot.highestBid bo'lsa, highestBid va highestBidder ni yangilang.\n5. Auksion natijasini 2 qatorda chop eting:System.out.println(\"Lot: \" + lot.lotTitle);System.out.println(\"G'olib: \" + lot.highestBidder + \" | Yakuniy narx: $\" + lot.highestBid);",
      "en": "[Real-World Story & Context]\nOn E-Auction platform, participants bid on high-value lots. A new bid updates the highest bidder and bid price only if it strictly exceeds the current highest bid.\n\n[Step-by-Step Implementation Tasks (1 to 5)]\n1. Declare class AuctionLot with: String lotTitle;, double startingPrice;, double highestBid;, String highestBidder;.\n2. In main, instantiate: AuctionLot lot = new AuctionLot();.\n3. Set initial values: lot.lotTitle = \"Toshkent City Ofis Binosi\";, lot.startingPrice = 500000.0;, lot.highestBid = 500000.0;, lot.highestBidder = \"Boshlang'ich\";.\n4. Process new bid (520000.0, \"Kompaniya A\"): update highest bidder if higher than current highest bid.\n5. Print auction result on 2 lines:System.out.println(\"Lot: \" + lot.lotTitle);System.out.println(\"G'olib: \" + lot.highestBidder + \" | Yakuniy narx: $\" + lot.highestBid);",
      "ru": "📖 Контекст и описание задачи\nНа платформе электронного аукциона участники делают ставки на дорогостоящие лоты. Новая ставка обновляет имя участника, предложившего самую высокую цену, и цену предложения только в том случае, если она строго превышает текущую максимальную ставку.\n\n📋 Пошаговые задачи (от 1 до 5)\n1. Объявите класс <code>AuctionLot</code> с помощью: <code>String lotTitle;</code>, <code>double startingPrice;</code>, <code>double highestBid;</code>, <code>String highestBidder;</code>.\n2. В <code>main</code> создайте экземпляр: <code>AuctionLot lot = new AuctionLot();</code>.\n3. Set initial values: <code>lot.lotTitle = \"Toshkent City Ofis Binosi\";</code>, <code>lot.startingPrice = 500000.0;</code>, <code>lot.highestBid = 500000.0;</code>, <code>lot.highestBidder = \"Boshlang'ich\";</code>.\n4. Обработка новой ставки (<code>520000.0, \"Kompaniya A\"</code>): обновление участника, предложившего самую высокую цену, если она превышает текущую максимальную ставку.\n5. Print auction result on 2 lines:<br><code>System.out.println(\"Lot: \" + lot.lotTitle);</code><br><code>System.out.println(\"G'olib: \" + lot.highestBidder + \" | Yakuniy narx: $\" + lot.highestBid);</code>"
    },
    "requirements": {
      "classes": [
        "AuctionLot",
        "Main"
      ],
      "fields": [
        {
          "name": "lotTitle",
          "type": "String"
        },
        {
          "name": "startingPrice",
          "type": "double"
        },
        {
          "name": "highestBid",
          "type": "double"
        },
        {
          "name": "highestBidder",
          "type": "String"
        }
      ]
    },
    "starterCode": "class AuctionLot {\n    // lotTitle (String), startingPrice (double), highestBid (double), highestBidder (String)\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        // AuctionLot yarating, 2 ta taklifni simulyatsiya qilib g'olibni aniqlang\n        \n    }\n}",
    "solution": "class AuctionLot {\n    String lotTitle;\n    double startingPrice;\n    double highestBid;\n    String highestBidder;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AuctionLot lot = new AuctionLot();\n        lot.lotTitle = \"Toshkent City Ofis Binosi\";\n        lot.startingPrice = 500000.0;\n        lot.highestBid = lot.startingPrice;\n        lot.highestBidder = \"Boshlang'ich Narx\";\n\n        // 1-taklif\n        double offer1 = 520000.0;\n        String bidder1 = \"Kompaniya A\";\n        if (offer1 > lot.highestBid) {\n            lot.highestBid = offer1;\n            lot.highestBidder = bidder1;\n        }\n\n        // 2-taklif (past narx, qabul qilinmasligi kerak)\n        double offer2 = 510000.0;\n        String bidder2 = \"Kompaniya B\";\n        if (offer2 > lot.highestBid) {\n            lot.highestBid = offer2;\n            lot.highestBidder = bidder2;\n        }\n\n        System.out.println(\"Lot: \" + lot.lotTitle);\n        System.out.println(\"G'olib: \" + lot.highestBidder + \" | Yakuniy narx: $\" + lot.highestBid);\n    }\n}",
    "detailedSolution": {
      "theory": "1-bosqichda biz maydonlarni tashqaridan (Main metodida) o'zgartirishni to'liq ko'rdik. Lekin e'tibor bering: har bir yangi taklif uchun shartlarni Main ichida takroran yozish Clean Code qoidalariga zid! Shu sababli 2-bosqichda ushbu mantiqni klassning o'ziga 'instans metod' sifatida kiritishni o'rganamiz!",
      "theoryEn": "In Stage 1 we mutated state externally. Moving this logic inside the class as instance methods is the fundamental purpose of Stage 2.",
      "cleanCode": "if (offer1 > lot.highestBid) {\n    lot.highestBid = offer1;\n    lot.highestBidder = bidder1;\n}",
      "breakdown": [
        "Auksion lotining barcha holatlari Heap xotirada saqlandi.",
        "Raqobatli narxlar sharti tekshirilib, g'olib aniqlandi.",
        "Bu topshiriq 2-bosqichdagi metodlar konseptsiyasiga tabiiy ko'prik vazifasini o'taydi."
      ],
      "pitfalls": "Boshlang'ich narx bilan eng yuqori narx tenglashtirilmasa, takliflar xato tekshirilishi mumkin.",
      "cw2Tip": "Auksion va savat tizimlarida ob'yekt holatini yangilash eng ko'p uchraydigan vazifadir.",
      "theoryRu": "На этапе 1 мы внешне мутировали состояние. Перемещение этой логики внутри класса в виде методов экземпляра — основная цель этапа 2.",
      "pitfallsRu": "Ставки могут быть проверены неправильно, если самая высокая цена не соответствует стартовой цене.",
      "breakdownRu": [
        "Все экземпляры лотов аукциона хранятся в памяти Heap.",
        "Были проверены конкурентные ценовые условия и определен победитель.",
        "Эта задача служит естественным мостом к концепции методов на этапе 2."
      ]
    },
    "sampleData": [
      "lotTitle: \"Toshkent City Ofis Binosi\"",
      "startingPrice: 500000.0",
      "Boshlang'ich ishtirokchi: \"Boshlang'ich Narx\"",
      "1-taklif: 520000.0 (\"Kompaniya A\")",
      "2-taklif: 510000.0 (\"Kompaniya B\")"
    ],
    "expectedOutput": "Lot: Toshkent City Ofis Binosi\nG'olib: Kompaniya A | Yakuniy narx: $520000.0",
    "story": {
      "uz": "E-Auksion platformasida qimmatbaho lot savdosi o'tkazilmoqda. Qatnashchilardan yangi taklif tushganda, agar u joriy eng yuqori narxdan katta bo'lsagina auksion yetakchisi va narxi yangilanadi.",
      "en": "On E-Auction platform, participants bid on high-value lots. A new bid updates the highest bidder and bid price only if it strictly exceeds the current highest bid.",
      "ru": "На платформе электронного аукциона участники делают ставки на дорогостоящие лоты. Новая ставка обновляет имя участника, предложившего самую высокую цену, и цену предложения только в том случае, если она строго превышает текущую максимальную ставку."
    },
    "steps": {
      "uz": [
        "<code>AuctionLot</code> klassini yarating: <code>String lotTitle;</code>, <code>double startingPrice;</code>, <code>double highestBid;</code>, <code>String highestBidder;</code>.",
        "<code>Main</code> metodida <code>AuctionLot lot = new AuctionLot();</code> ob'yektini yarating.",
        "Boshlang'ich qiymatlarni o'rnating: <code>lot.lotTitle = \"Toshkent City Ofis Binosi\";</code>, <code>lot.startingPrice = 500000.0;</code>, <code>lot.highestBid = 500000.0;</code>, <code>lot.highestBidder = \"Boshlang'ich\";</code>.",
        "Yangi taklifni tekshiring (<code>double newBid = 520000.0; String newBidder = \"Kompaniya A\";</code>): agar <code>newBid > lot.highestBid</code> bo'lsa, <code>highestBid</code> va <code>highestBidder</code> ni yangilang.",
        "Auksion natijasini 2 qatorda chop eting:<br><code>System.out.println(\"Lot: \" + lot.lotTitle);</code><br><code>System.out.println(\"G'olib: \" + lot.highestBidder + \" | Yakuniy narx: $\" + lot.highestBid);</code>"
      ],
      "en": [
        "Declare class <code>AuctionLot</code> with: <code>String lotTitle;</code>, <code>double startingPrice;</code>, <code>double highestBid;</code>, <code>String highestBidder;</code>.",
        "In <code>main</code>, instantiate: <code>AuctionLot lot = new AuctionLot();</code>.",
        "Set initial values: <code>lot.lotTitle = \"Toshkent City Ofis Binosi\";</code>, <code>lot.startingPrice = 500000.0;</code>, <code>lot.highestBid = 500000.0;</code>, <code>lot.highestBidder = \"Boshlang'ich\";</code>.",
        "Process new bid (<code>520000.0, \"Kompaniya A\"</code>): update highest bidder if higher than current highest bid.",
        "Print auction result on 2 lines:<br><code>System.out.println(\"Lot: \" + lot.lotTitle);</code><br><code>System.out.println(\"G'olib: \" + lot.highestBidder + \" | Yakuniy narx: $\" + lot.highestBid);</code>"
      ],
      "ru": [
        "Объявите класс <code>AuctionLot</code> с помощью: <code>String lotTitle;</code>, <code>double startingPrice;</code>, <code>double highestBid;</code>, <code>String highestBidder;</code>.",
        "В <code>main</code> создайте экземпляр: <code>AuctionLot lot = new AuctionLot();</code>.",
        "Set initial values: <code>lot.lotTitle = \"Toshkent City Ofis Binosi\";</code>, <code>lot.startingPrice = 500000.0;</code>, <code>lot.highestBid = 500000.0;</code>, <code>lot.highestBidder = \"Boshlang'ich\";</code>.",
        "Обработка новой ставки (<code>520000.0, \"Kompaniya A\"</code>): обновление участника, предложившего самую высокую цену, если она превышает текущую максимальную ставку.",
        "Print auction result on 2 lines:<br><code>System.out.println(\"Lot: \" + lot.lotTitle);</code><br><code>System.out.println(\"G'olib: \" + lot.highestBidder + \" | Yakuniy narx: $\" + lot.highestBid);</code>"
      ]
    }
  },
  {
    "id": 11,
    "tier": 2,
    "tierName": "2-Bosqich: Instans Metodlar va Xatti-harakat",
    "sector": "11-20",
    "title": {
      "uz": "11. Digital Wallet — 'deposit' va 'withdraw' Instans Metodlari",
      "en": "11. Digital Wallet — 'deposit' & 'withdraw' Instance Methods",
      "ru": "11. Цифровой кошелек — методы «пополнения» и «вывода»"
    },
    "scenario": {
      "uz": "[Hayotiy Voqealik & Kontekst]\nRaqamli hamyon tizimida balansni to'g'ridan-to'g'ri tashqaridan o'zgartirish o'rniga, pul kiritish va pul yechish amallari ob'yektning o'ziga tegishli instans metodlari orqali amalga oshiriladi.\n\n[Bajarilishi kerak bo'lgan vazifalar (1 dan 5 gacha)]\n1. Wallet klassini tuzing va unga double balance; maydonini e'lon qiling.\n2. public void deposit(double amount) metodini yozing: agar amount > 0 bo'lsa, balance += amount;.\n3. public void withdraw(double amount) metodini yozing: agar amount > 0 va balance >= amount bo'lsa, balance -= amount;.\n4. Main metodida Wallet w = new Wallet(); yarating va w.balance = 50000.0; boshlang'ich mablag' bering.\n5. Ketma-ket chaqiring: w.deposit(20000.0); so'ng w.withdraw(15000.0); va yakuniy balansni chop eting: System.out.println(\"Hamyon balansi: \" + w.balance + \" so'm\");",
      "en": "[Real-World Story & Context]\nIn a digital wallet system, funds must not be directly manipulated from outside. Dedicated instance methods manage deposits and withdrawals safely.\n\n[Step-by-Step Implementation Tasks (1 to 5)]\n1. Create class Wallet with field double balance;.\n2. Implement public void deposit(double amount): if amount > 0, add to balance.\n3. Implement public void withdraw(double amount): if amount > 0 and balance >= amount, subtract from balance.\n4. In main, instantiate Wallet w = new Wallet(); with w.balance = 50000.0;.\n5. Call w.deposit(20000.0);, then w.withdraw(15000.0);, and print final balance: System.out.println(\"Hamyon balansi: \" + w.balance + \" so'm\");",
      "ru": "📖 Контекст и описание задачи\nВ системе цифрового кошелька средствами нельзя манипулировать напрямую извне. Выделенные методы экземпляра безопасно управляют депозитами и снятием средств.\n\n📋 Пошаговые задачи (от 1 до 5)\n1. Создайте класс <code>Wallet</code> с полем <code>double balance;</code>.\n2. Внедрить <code>public void deposit(double amount)</code>: если <code>amount > 0</code>, добавить к балансу.\n3. Реализуйте <code>public void withdraw(double amount)</code>: если <code>amount > 0</code> и <code>balance >= amount</code>, вычтите из баланса.\n4. В <code>main</code> создайте экземпляр <code>Wallet w = new Wallet();</code> с помощью <code>w.balance = 50000.0;</code>.\n5. Вызовите <code>w.deposit(20000.0);</code>, затем <code>w.withdraw(15000.0);</code> и напечатайте окончательный баланс: <code>System.out.println(\"Hamyon balansi: \" + w.balance + \" so'm\");</code>."
    },
    "requirements": {
      "classes": [
        "Wallet",
        "Main"
      ],
      "fields": [
        {
          "name": "balance",
          "type": "double"
        }
      ],
      "methods": [
        "deposit",
        "withdraw"
      ],
      "methodDetails": [
        {
          "name": "deposit",
          "signature": "public void deposit(double amount)",
          "params": "double amount — hamyonga qo'shiladigan pul miqdori",
          "paramsEn": "double amount — money amount to deposit",
          "returns": "void (hech narsa qaytarmaydi, balance maydonini oshiradi)",
          "returnsEn": "void (mutates balance field in place)",
          "logic": "Agar amount > 0 bo'lsa, ob'yektning 'balance' maydoniga qo'shilsin (balance += amount).",
          "logicEn": "If amount > 0, adds amount to balance field (balance += amount).",
          "example": "w.deposit(20000.0); // 50000.0 balansga 20000.0 qo'shilib, yangi balans 70000.0 bo'ladi"
        },
        {
          "name": "withdraw",
          "signature": "public void withdraw(double amount)",
          "params": "double amount — hamyondan yechiladigan pul miqdori",
          "paramsEn": "double amount — money amount to withdraw",
          "returns": "void (hech narsa qaytarmaydi, balance maydonidan ayiradi)",
          "returnsEn": "void (mutates balance field in place)",
          "logic": "Agar amount > 0 va balansda yetarli mablag' bo'lsa (balance >= amount), 'balance' dan ayirilsin (balance -= amount).",
          "logicEn": "If amount > 0 and balance >= amount, subtracts amount from balance (balance -= amount).",
          "example": "w.withdraw(15000.0); // 70000.0 balansdan 15000.0 yechilib, yakuniy balans 55000.0 bo'ladi"
        }
      ]
    },
    "starterCode": "class Wallet {\n    double balance;\n\n    // 1. public void deposit(double amount) metodini yarating:\n    //    Parametr: double amount (qo'shiladigan summa)\n    //    Mantiq: agar amount > 0 bo'lsa, balance += amount;\n\n    // 2. public void withdraw(double amount) metodini yarating:\n    //    Parametr: double amount (yechiladigan summa)\n    //    Mantiq: agar amount > 0 va balance >= amount bo'lsa, balance -= amount;\n\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Wallet w = new Wallet();\n        w.balance = 50000.0;\n\n        // w.deposit(20000.0) orqali 20000 qo'shing\n\n        // w.withdraw(15000.0) orqali 15000 yeching\n\n        // Natijani chop eting: \"Hamyon balansi: \" + w.balance + \" so'm\"\n        System.out.println(\"Hamyon balansi: \" + w.balance + \" so'm\");\n    }\n}",
    "solution": "class Wallet {\n    double balance;\n\n    public void deposit(double amount) {\n        if (amount > 0) {\n            balance += amount;\n        }\n    }\n\n    public void withdraw(double amount) {\n        if (amount > 0 && balance >= amount) {\n            balance -= amount;\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Wallet w = new Wallet();\n        w.balance = 50000.0;\n        w.deposit(20000.0);\n        w.withdraw(15000.0);\n\n        System.out.println(\"Hamyon balansi: \" + w.balance + \" so'm\");\n    }\n}",
    "detailedSolution": {
      "theory": "Instans metodlar ob'yektning xatti-harakatini (behavior) ifodalaydi. Ular ob'yekt maydonlariga to'g'ridan-to'g'ri kira oladi va tashqaridan kod yozmasdan, ob'yektning o'zini o'zi boshqarishini ta'minlaydi.",
      "theoryEn": "Instance methods represent object behavior, operating directly on instance fields to enforce self-containment.",
      "cleanCode": "public void deposit(double amount) {\n    if (amount > 0) balance += amount;\n}",
      "breakdown": [
        "<code>public void deposit(double amount)</code>: Balansni to'ldiruvchi parametrli void metod.",
        "<code>public void withdraw(double amount)</code>: Mablag' yetarli bo'lganda yechuvchi metod.",
        "Tashqi kod faqat metodlarni chaqiradi, hisoblash mantiqini takrorlamaydi."
      ],
      "pitfalls": "Manfiy miqdorlarni tekshirmasdan to'g'ridan-to'g'ri `balance += amount` qilish xatolikka olib keladi.",
      "cw2Tip": "Bank va hisob-kitob klasslarida barcha harakatlar aynan metodlar orqali amalga oshiriladi.",
      "theoryRu": "Методы экземпляра представляют поведение объекта, работая непосредственно с полями экземпляра для обеспечения автономности.",
      "pitfallsRu": "Непосредственное выполнение `balance += amount` без проверки отрицательных величин приведет к ошибке.",
      "breakdownRu": [
        "<code>public void deposit(double amount)</code>: параметризованный метод void, заполняющий баланс.",
        "<code>public void withdraw(double amount)</code>: Метод решения, когда средств достаточно.",
        "Внешний код только вызывает методы, не повторяет логику вычислений."
      ]
    },
    "sampleData": [
      "Boshlang'ich balans: 50000.0 so'm",
      "Kirim (deposit): 20000.0 so'm",
      "Chiqim (withdraw): 15000.0 so'm"
    ],
    "expectedOutput": "Hamyon balansi: 55000.0 so'm",
    "story": {
      "uz": "Raqamli hamyon tizimida balansni to'g'ridan-to'g'ri tashqaridan o'zgartirish o'rniga, pul kiritish va pul yechish amallari ob'yektning o'ziga tegishli instans metodlari orqali amalga oshiriladi.",
      "en": "In a digital wallet system, funds must not be directly manipulated from outside. Dedicated instance methods manage deposits and withdrawals safely.",
      "ru": "В системе цифрового кошелька средствами нельзя манипулировать напрямую извне. Выделенные методы экземпляра безопасно управляют депозитами и снятием средств."
    },
    "steps": {
      "uz": [
        "<code>Wallet</code> klassini tuzing va unga <code>double balance;</code> maydonini e'lon qiling.",
        "<code>public void deposit(double amount)</code> metodini yozing: agar <code>amount > 0</code> bo'lsa, <code>balance += amount;</code>.",
        "<code>public void withdraw(double amount)</code> metodini yozing: agar <code>amount > 0</code> va <code>balance >= amount</code> bo'lsa, <code>balance -= amount;</code>.",
        "<code>Main</code> metodida <code>Wallet w = new Wallet();</code> yarating va <code>w.balance = 50000.0;</code> boshlang'ich mablag' bering.",
        "Ketma-ket chaqiring: <code>w.deposit(20000.0);</code> so'ng <code>w.withdraw(15000.0);</code> va yakuniy balansni chop eting: <code>System.out.println(\"Hamyon balansi: \" + w.balance + \" so'm\");</code>"
      ],
      "en": [
        "Create class <code>Wallet</code> with field <code>double balance;</code>.",
        "Implement <code>public void deposit(double amount)</code>: if <code>amount > 0</code>, add to balance.",
        "Implement <code>public void withdraw(double amount)</code>: if <code>amount > 0</code> and <code>balance >= amount</code>, subtract from balance.",
        "In <code>main</code>, instantiate <code>Wallet w = new Wallet();</code> with <code>w.balance = 50000.0;</code>.",
        "Call <code>w.deposit(20000.0);</code>, then <code>w.withdraw(15000.0);</code>, and print final balance: <code>System.out.println(\"Hamyon balansi: \" + w.balance + \" so'm\");</code>"
      ],
      "ru": [
        "Создайте класс <code>Wallet</code> с полем <code>double balance;</code>.",
        "Внедрить <code>public void deposit(double amount)</code>: если <code>amount > 0</code>, добавить к балансу.",
        "Реализуйте <code>public void withdraw(double amount)</code>: если <code>amount > 0</code> и <code>balance >= amount</code>, вычтите из баланса.",
        "В <code>main</code> создайте экземпляр <code>Wallet w = new Wallet();</code> с помощью <code>w.balance = 50000.0;</code>.",
        "Вызовите <code>w.deposit(20000.0);</code>, затем <code>w.withdraw(15000.0);</code> и напечатайте окончательный баланс: <code>System.out.println(\"Hamyon balansi: \" + w.balance + \" so'm\");</code>."
      ]
    }
  },
  {
    "id": 12,
    "tier": 2,
    "tierName": "2-Bosqich: Instans Metodlar va Xatti-harakat",
    "sector": "11-20",
    "title": {
      "uz": "12. Uzum Sale — Qiymat Qaytaruvchi 'calculateFinalPrice' Metodi",
      "en": "12. Uzum Sale — Value-Returning 'calculateFinalPrice' Method",
      "ru": "12. Продажа узума — метод «calculateFinalPrice», возвращающий стоимость."
    },
    "scenario": {
      "uz": "[Hayotiy Voqealik & Kontekst]\nUzum Market elektron savdo platformasida mavsumiy chegirmalar kampaniyasi e'lon qilindi. Mahsulotning asl narxidan chegirma foizini ayirib, xaridor to'lashi kerak bo'lgan yakuniy narxni hisoblab qaytaruvchi ('return') metod zarur.\n\n[Bajarilishi kerak bo'lgan vazifalar (1 dan 5 gacha)]\n1. ProductSale klassini yarating va unga double basePrice; maydonini qo'shing.\n2. public double calculateFinalPrice(double discountPercentage) metodini yozing:• Formulalar: double discountAmount = basePrice * (discountPercentage / 100.0); return basePrice - discountAmount;\n3. Main metodida ProductSale sale = new ProductSale(); obyektini yarating.\n4. Maydonga sale.basePrice = 1200000.0; qiymatini bering.\n5. Metodni chaqiring va natijani chop eting: double finalPrice = sale.calculateFinalPrice(15.0);System.out.println(\"Asl narx: \" + sale.basePrice + \" | Chegirmali narx: \" + finalPrice);",
      "en": "[Real-World Story & Context]\nOn Uzum Market, a seasonal discount campaign has been launched. A value-returning ('return') method is required to calculate the final price payable after deducting the discount percentage.\n\n[Step-by-Step Implementation Tasks (1 to 5)]\n1. Create class ProductSale with field double basePrice;.\n2. Implement public double calculateFinalPrice(double discountPercentage):• Formula: double discountAmount = basePrice * (discountPercentage / 100.0); return basePrice - discountAmount;\n3. In main, instantiate ProductSale sale = new ProductSale();.\n4. Assign sale.basePrice = 1200000.0;.\n5. Call method and print output: double finalPrice = sale.calculateFinalPrice(15.0);System.out.println(\"Asl narx: \" + sale.basePrice + \" | Chegirmali narx: \" + finalPrice);",
      "ru": "📖 Контекст и описание задачи\nНа Uzum Market запущена сезонная скидочная кампания. Метод возврата стоимости («возврат») необходим для расчета окончательной цены, подлежащей уплате после вычета процента скидки.\n\n📋 Пошаговые задачи (от 1 до 5)\n1. Создайте класс <code>ProductSale</code> с полем <code>double basePrice;</code>.\n2. Реализуйте <code>public double calculateFinalPrice(double discountPercentage)</code>:<br>• Формула: <code>double discountAmount = basePrice * (discountPercentage / 100.0); return basePrice - discountAmount;</code>\n3. В <code>main</code> создайте экземпляр <code>ProductSale sale = new ProductSale();</code>.\n4. Назначьте <code>sale.basePrice = 1200000.0;</code>.\n5. Метод вызова и вывод на печать: <code>double finalPrice = sale.calculateFinalPrice(15.0);</code><br><code>System.out.println(\"Asl narx: \" + sale.basePrice + \" | Chegirmali narx: \" + finalPrice);</code>"
    },
    "requirements": {
      "classes": [
        "ProductSale",
        "Main"
      ],
      "fields": [
        {
          "name": "basePrice",
          "type": "double"
        }
      ],
      "methods": [
        "calculateFinalPrice"
      ],
      "methodDetails": [
        {
          "name": "calculateFinalPrice",
          "signature": "public double calculateFinalPrice(double discountPercentage)",
          "params": "double discountPercentage — foiz ko'rinishidagi chegirma (masalan: 15.0)",
          "paramsEn": "double discountPercentage — percentage discount (e.g. 15.0)",
          "returns": "double (chegirma ayirib tashlangan yakuniy to'lov summasi)",
          "returnsEn": "double (final price after discount deduction)",
          "logic": "double discount = basePrice * (discountPercentage / 100.0); return basePrice - discount;",
          "logicEn": "double discount = basePrice * (discountPercentage / 100.0); return basePrice - discount;",
          "example": "double finalPrice = sale.calculateFinalPrice(15.0); // 1200000.0 narxdan 15% chegirma ayirilib, 1020000.0 qaytaradi"
        }
      ]
    },
    "starterCode": "class ProductSale {\n    double basePrice;\n\n    // public double calculateFinalPrice(double discountPercentage) metodini yozing:\n    // Chegirmali narxni hisoblab (basePrice - chegirma) return qilsin\n\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ProductSale sale = new ProductSale();\n        sale.basePrice = 1200000.0;\n\n        // calculateFinalPrice(15.0) chaqirib natijani finalPrice ga oling\n\n        // Natijani chop eting: Asl narx: ... | Chegirmali narx: ...\n    }\n}",
    "solution": "class ProductSale {\n    double basePrice;\n\n    public double calculateFinalPrice(double discountPercentage) {\n        double discountAmount = basePrice * (discountPercentage / 100.0);\n        return basePrice - discountAmount;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ProductSale sale = new ProductSale();\n        sale.basePrice = 1200000.0;\n\n        double finalPrice = sale.calculateFinalPrice(15.0); // 15% chegirma\n        System.out.println(\"Asl narx: \" + sale.basePrice + \" | Chegirmali narx: \" + finalPrice);\n    }\n}",
    "detailedSolution": {
      "theory": "'return' operatori hisoblangan qiymatni chaqiruvchi joyga qaytaradi. Metod imzosi qaytarilayotgan tur (bu yerda double) bilan aniq belgilanishi shart.",
      "theoryEn": "The 'return' statement sends computed data back to the caller, matching the declared return type in the signature.",
      "cleanCode": "return basePrice - (basePrice * (discountPercentage / 100.0));",
      "breakdown": [
        "<code>double calculateFinalPrice(double discountPercentage)</code>: Kiruvchi argument va chiquvchi tur belgilandi.",
        "Asosiy narx buzilmasdan saqlanadi, faqat hisoblangan qiymat qaytariladi."
      ],
      "pitfalls": "return so'zidan keyin yozilgan har qanday kod bajarilmaydi (unreachable code xatosi).",
      "cw2Tip": "CW2 buyurtma ilovasida savat chegirmalari aynan shu uslubda hisoblanadi.",
      "theoryRu": "Оператор return отправляет вычисленные данные обратно вызывающему объекту в соответствии с объявленным типом возвращаемого значения в сигнатуре.",
      "pitfallsRu": "любой код, написанный после возврата, не будет выполнен (ошибка недостижимого кода).",
      "breakdownRu": [
        "<code>double calculateFinalPrice(double discountPercentage)</code>: указан входной аргумент и тип вывода.",
        "Базовая цена сохраняется, возвращается только рассчитанное значение."
      ]
    },
    "sampleData": [
      "basePrice: 1200000.0 so'm",
      "Chegirma (discountPercent): 15.0%"
    ],
    "expectedOutput": "Asl narx: 1200000.0 | Chegirmali narx: 1020000.0",
    "story": {
      "uz": "Uzum Market elektron savdo platformasida mavsumiy chegirmalar kampaniyasi e'lon qilindi. Mahsulotning asl narxidan chegirma foizini ayirib, xaridor to'lashi kerak bo'lgan yakuniy narxni hisoblab qaytaruvchi ('return') metod zarur.",
      "en": "On Uzum Market, a seasonal discount campaign has been launched. A value-returning ('return') method is required to calculate the final price payable after deducting the discount percentage.",
      "ru": "На Uzum Market запущена сезонная скидочная кампания. Метод возврата стоимости («возврат») необходим для расчета окончательной цены, подлежащей уплате после вычета процента скидки."
    },
    "steps": {
      "uz": [
        "<code>ProductSale</code> klassini yarating va unga <code>double basePrice;</code> maydonini qo'shing.",
        "<code>public double calculateFinalPrice(double discountPercentage)</code> metodini yozing:<br>• Formulalar: <code>double discountAmount = basePrice * (discountPercentage / 100.0); return basePrice - discountAmount;</code>",
        "<code>Main</code> metodida <code>ProductSale sale = new ProductSale();</code> obyektini yarating.",
        "Maydonga <code>sale.basePrice = 1200000.0;</code> qiymatini bering.",
        "Metodni chaqiring va natijani chop eting: <code>double finalPrice = sale.calculateFinalPrice(15.0);</code><br><code>System.out.println(\"Asl narx: \" + sale.basePrice + \" | Chegirmali narx: \" + finalPrice);</code>"
      ],
      "en": [
        "Create class <code>ProductSale</code> with field <code>double basePrice;</code>.",
        "Implement <code>public double calculateFinalPrice(double discountPercentage)</code>:<br>• Formula: <code>double discountAmount = basePrice * (discountPercentage / 100.0); return basePrice - discountAmount;</code>",
        "In <code>main</code>, instantiate <code>ProductSale sale = new ProductSale();</code>.",
        "Assign <code>sale.basePrice = 1200000.0;</code>.",
        "Call method and print output: <code>double finalPrice = sale.calculateFinalPrice(15.0);</code><br><code>System.out.println(\"Asl narx: \" + sale.basePrice + \" | Chegirmali narx: \" + finalPrice);</code>"
      ],
      "ru": [
        "Создайте класс <code>ProductSale</code> с полем <code>double basePrice;</code>.",
        "Реализуйте <code>public double calculateFinalPrice(double discountPercentage)</code>:<br>• Формула: <code>double discountAmount = basePrice * (discountPercentage / 100.0); return basePrice - discountAmount;</code>",
        "В <code>main</code> создайте экземпляр <code>ProductSale sale = new ProductSale();</code>.",
        "Назначьте <code>sale.basePrice = 1200000.0;</code>.",
        "Метод вызова и вывод на печать: <code>double finalPrice = sale.calculateFinalPrice(15.0);</code><br><code>System.out.println(\"Asl narx: \" + sale.basePrice + \" | Chegirmali narx: \" + finalPrice);</code>"
      ]
    }
  },
  {
    "id": 13,
    "tier": 2,
    "tierName": "2-Bosqich: Instans Metodlar va Xatti-harakat",
    "sector": "11-20",
    "title": {
      "uz": "13. Smart Thermostat — Limitlar va Chegaraviy Tekshiruv (Guard Clauses)",
      "en": "13. Smart Thermostat — Guard Clauses & Safe Limits",
      "ru": "13. Умный термостат — защитные положения и безопасные пределы"
    },
    "scenario": {
      "uz": "[Hayotiy Voqealik & Kontekst]\nAqlli uy termostati xona haroratini xavfsiz chegaralarda (16°C dan 32°C gacha) saqlashi shart. Haroratni ko'tarish yoki tushirishda chegaraviy qoidalar (Guard Clauses) qo'llaniladi.\n\n[Bajarilishi kerak bo'lgan vazifalar (1 dan 5 gacha)]\n1. Thermostat klassini tuzing: double currentTemp; maydonini e'lon qiling.\n2. public void increaseTemp(double delta) metodini yozing: agar currentTemp + delta  bo'lsa currentTemp += delta;, aks holda currentTemp = 32.0;.\n3. public void decreaseTemp(double delta) metodini yozing: agar currentTemp - delta >= 16.0 bo'lsa currentTemp -= delta;, aks holda currentTemp = 16.0;.\n4. Main metodida Thermostat t = new Thermostat(); tuzib, t.currentTemp = 22.0; bering.\n5. Metodlarni chaqiring va natijalarni chop eting:t.increaseTemp(15.0); -> System.out.println(\"Ko'tarilgandagi harorat: \" + t.currentTemp + \"°C\");t.decreaseTemp(20.0); -> System.out.println(\"Tushirilgandagi harorat: \" + t.currentTemp + \"°C\");",
      "en": "[Real-World Story & Context]\nSmart home thermostat must keep ambient temperature strictly within safe bounds (16°C to 32°C). Guard clauses prevent out-of-range temperatures.\n\n[Step-by-Step Implementation Tasks (1 to 5)]\n1. Create class Thermostat with field double currentTemp;.\n2. Implement public void increaseTemp(double delta): cap at 32.0°C maximum.\n3. Implement public void decreaseTemp(double delta): floor at 16.0°C minimum.\n4. In main, instantiate Thermostat t = new Thermostat(); and set t.currentTemp = 22.0;.\n5. Invoke methods and print temperatures:t.increaseTemp(15.0); -> System.out.println(\"Ko'tarilgandagi harorat: \" + t.currentTemp + \"°C\");t.decreaseTemp(20.0); -> System.out.println(\"Tushirilgandagi harorat: \" + t.currentTemp + \"°C\");",
      "ru": "📖 Контекст и описание задачи\nУмный домашний термостат должен поддерживать температуру окружающей среды строго в безопасных пределах (от 16°C до 32°C). Защитные положения предотвращают выход температуры за пределы допустимого диапазона.\n\n📋 Пошаговые задачи (от 1 до 5)\n1. Создайте класс <code>Thermostat</code> с полем <code>double currentTemp;</code>.\n2. Реализация <code>public void increaseTemp(double delta)</code>: ограничение при максимальной температуре 32,0°C.\n3. Реализация <code>public void decreaseTemp(double delta)</code>: температура пола минимум 16,0°C.\n4. В <code>main</code> создайте экземпляр <code>Thermostat t = new Thermostat();</code> и установите <code>t.currentTemp = 22.0;</code>.\n5. Вызов методов и температуры печати:<br><code>t.increaseTemp(15.0);</code> -> <code>System.out.println(\"Ko'tarilgandagi harorat: \" + t.currentTemp + \"°C\");</code><br><code>t.decreaseTemp(20.0);</code> -> <code>System.out.println(\"Tushirilgandagi harorat: \" + t.currentTemp + \"°C\");</code>"
    },
    "requirements": {
      "classes": [
        "Thermostat",
        "Main"
      ],
      "fields": [
        {
          "name": "currentTemp",
          "type": "double"
        }
      ],
      "methods": [
        "increaseTemp",
        "decreaseTemp"
      ],
      "methodDetails": [
        {
          "name": "increaseTemp",
          "signature": "public void increaseTemp(double delta)",
          "params": "double delta — haroratni oshirish miqdori (masalan: 15.0)",
          "paramsEn": "double delta — degrees to increase (e.g. 15.0)",
          "returns": "void (haroratni oshiradi, lekin 32.0°C dan oshirib yubormaydi)",
          "returnsEn": "void (caps at 32.0°C)",
          "logic": "if (currentTemp + delta <= 32.0) currentTemp += delta; else currentTemp = 32.0;",
          "logicEn": "if (currentTemp + delta <= 32.0) currentTemp += delta; else currentTemp = 32.0;",
          "example": "t.increaseTemp(15.0); // 22.0 + 15.0 = 37.0 bo'lmasdan, maksimal 32.0°C da to'xtaydi"
        },
        {
          "name": "decreaseTemp",
          "signature": "public void decreaseTemp(double delta)",
          "params": "double delta — haroratni tushirish miqdori (masalan: 20.0)",
          "paramsEn": "double delta — degrees to decrease (e.g. 20.0)",
          "returns": "void (haroratni pasaytiradi, lekin 16.0°C dan tushirib yubormaydi)",
          "returnsEn": "void (floors at 16.0°C)",
          "logic": "if (currentTemp - delta >= 16.0) currentTemp -= delta; else currentTemp = 16.0;",
          "logicEn": "if (currentTemp - delta >= 16.0) currentTemp -= delta; else currentTemp = 16.0;",
          "example": "t.decreaseTemp(20.0); // 32.0 - 20.0 = 12.0 bo'lib ketmasdan, minimal 16.0°C da to'xtaydi"
        }
      ]
    },
    "starterCode": "class Thermostat {\n    double currentTemp;\n\n    // increaseTemp va decreaseTemp metodlarini yozing (16.0 dan 32.0 gacha chegara bilan)\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        // Termostatni sinab ko'ring\n        \n    }\n}",
    "solution": "class Thermostat {\n    double currentTemp;\n\n    public void increaseTemp(double delta) {\n        if (currentTemp + delta <= 32.0) {\n            currentTemp += delta;\n        } else {\n            currentTemp = 32.0;\n        }\n    }\n\n    public void decreaseTemp(double delta) {\n        if (currentTemp - delta >= 16.0) {\n            currentTemp -= delta;\n        } else {\n            currentTemp = 16.0;\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Thermostat t = new Thermostat();\n        t.currentTemp = 22.0;\n\n        t.increaseTemp(15.0); // 37.0 bo'lib ketmasligi kerak, 32.0 da to'xtaydi\n        System.out.println(\"Ko'tarilgandagi harorat: \" + t.currentTemp + \"°C\");\n\n        t.decreaseTemp(20.0); // 12.0 bo'lib ketmasligi kerak, 16.0 da to'xtaydi\n        System.out.println(\"Tushirilgandagi harorat: \" + t.currentTemp + \"°C\");\n    }\n}",
    "detailedSolution": {
      "theory": "Metodlar ichidagi himoyalovchi shartlar (Guard Clauses) obyektning har doim sog'lom va xavfsiz holatda qolishini kafolatlaydi.",
      "theoryEn": "Guard clauses inside mutator methods prevent corrupted states by capping at boundary limits.",
      "cleanCode": "if (currentTemp + delta <= 32.0) currentTemp += delta; else currentTemp = 32.0;",
      "breakdown": [
        "Maksimal va minimal harorat chegaralari metod darajasida himoyalandi.",
        "Ob'yekt noto'g'ri fizik holatga tushib qolishi taqiqlandi."
      ],
      "pitfalls": "Chegaradan o'tganda jim qolish yoki limitga qadash qarorini biznes talabi belgilaydi.",
      "cw2Tip": "Buyurtmadagi tovar soni ombordagi qoldiqdan oshib ketmasligini tekshirishda xuddi shu mantiq ishlatiladi.",
      "theoryRu": "Предложения Guard внутри методов-мутаторов предотвращают повреждение состояний путем ограничения граничных пределов.",
      "pitfallsRu": "Решение хранить молчание или ограничить превышение лимита продиктовано бизнес-требованиями.",
      "breakdownRu": [
        "Максимальные и минимальные пределы температуры защищены на уровне метода.",
        "Объекту запрещено переходить в неправильное физическое состояние."
      ]
    },
    "sampleData": [
      "Boshlang'ich harorat: 22.0°C",
      "1-o'zgartirish: 26.0°C (qabul qilinadi)",
      "2-o'zgartirish: 35.0°C (chegaradan tashqari, rad etiladi)"
    ],
    "expectedOutput": "Ko'tarilgandagi harorat: 32.0°C\nTushirilgandagi harorat: 16.0°C",
    "story": {
      "uz": "Aqlli uy termostati xona haroratini xavfsiz chegaralarda (16°C dan 32°C gacha) saqlashi shart. Haroratni ko'tarish yoki tushirishda chegaraviy qoidalar (Guard Clauses) qo'llaniladi.",
      "en": "Smart home thermostat must keep ambient temperature strictly within safe bounds (16°C to 32°C). Guard clauses prevent out-of-range temperatures.",
      "ru": "Умный домашний термостат должен поддерживать температуру окружающей среды строго в безопасных пределах (от 16°C до 32°C). Защитные положения предотвращают выход температуры за пределы допустимого диапазона."
    },
    "steps": {
      "uz": [
        "<code>Thermostat</code> klassini tuzing: <code>double currentTemp;</code> maydonini e'lon qiling.",
        "<code>public void increaseTemp(double delta)</code> metodini yozing: agar <code>currentTemp + delta <= 32.0</code> bo'lsa <code>currentTemp += delta;</code>, aks holda <code>currentTemp = 32.0;</code>.",
        "<code>public void decreaseTemp(double delta)</code> metodini yozing: agar <code>currentTemp - delta >= 16.0</code> bo'lsa <code>currentTemp -= delta;</code>, aks holda <code>currentTemp = 16.0;</code>.",
        "<code>Main</code> metodida <code>Thermostat t = new Thermostat();</code> tuzib, <code>t.currentTemp = 22.0;</code> bering.",
        "Metodlarni chaqiring va natijalarni chop eting:<br><code>t.increaseTemp(15.0);</code> -> <code>System.out.println(\"Ko'tarilgandagi harorat: \" + t.currentTemp + \"°C\");</code><br><code>t.decreaseTemp(20.0);</code> -> <code>System.out.println(\"Tushirilgandagi harorat: \" + t.currentTemp + \"°C\");</code>"
      ],
      "en": [
        "Create class <code>Thermostat</code> with field <code>double currentTemp;</code>.",
        "Implement <code>public void increaseTemp(double delta)</code>: cap at 32.0°C maximum.",
        "Implement <code>public void decreaseTemp(double delta)</code>: floor at 16.0°C minimum.",
        "In <code>main</code>, instantiate <code>Thermostat t = new Thermostat();</code> and set <code>t.currentTemp = 22.0;</code>.",
        "Invoke methods and print temperatures:<br><code>t.increaseTemp(15.0);</code> -> <code>System.out.println(\"Ko'tarilgandagi harorat: \" + t.currentTemp + \"°C\");</code><br><code>t.decreaseTemp(20.0);</code> -> <code>System.out.println(\"Tushirilgandagi harorat: \" + t.currentTemp + \"°C\");</code>"
      ],
      "ru": [
        "Создайте класс <code>Thermostat</code> с полем <code>double currentTemp;</code>.",
        "Реализация <code>public void increaseTemp(double delta)</code>: ограничение при максимальной температуре 32,0°C.",
        "Реализация <code>public void decreaseTemp(double delta)</code>: температура пола минимум 16,0°C.",
        "В <code>main</code> создайте экземпляр <code>Thermostat t = new Thermostat();</code> и установите <code>t.currentTemp = 22.0;</code>.",
        "Вызов методов и температуры печати:<br><code>t.increaseTemp(15.0);</code> -> <code>System.out.println(\"Ko'tarilgandagi harorat: \" + t.currentTemp + \"°C\");</code><br><code>t.decreaseTemp(20.0);</code> -> <code>System.out.println(\"Tushirilgandagi harorat: \" + t.currentTemp + \"°C\");</code>"
      ]
    }
  },
  {
    "id": 14,
    "tier": 2,
    "tierName": "2-Bosqich: Instans Metodlar va Xatti-harakat",
    "sector": "11-20",
    "title": {
      "uz": "14. Yandex Surge — 'estimateFare' Ko'p Argumentli Hisoblash Metodi",
      "en": "14. Yandex Surge — Multi-Parameter 'estimateFare' Method",
      "ru": "14. Yandex Surge — многопараметрический метод etimateFare"
    },
    "scenario": {
      "uz": "[Hayotiy Voqealik & Kontekst]\nYandex Go servisida safar narxi masofa, boshlang'ich narx va tig'iz vaqtdagi tirbandlik koeffitsientiga (surge) bog'liq holda ko'p parametrli hisoblash metodi orqali aniqlanadi.\n\n[Bajarilishi kerak bo'lgan vazifalar (1 dan 5 gacha)]\n1. RideService klassini yarating va unga double baseFare; maydonini qo'shing.\n2. public double estimateFare(double km, double surgeMultiplier) metodini yozing:• Formulalar: return baseFare + (km * 2500.0 * surgeMultiplier);\n3. Main metodida RideService service = new RideService(); tuzib, service.baseFare = 5000.0; bering.\n4. Oddiy (1.0x) va tirbandlik (1.8x) tariflarini hisoblang: double normalFare = service.estimateFare(10.0, 1.0); va double peakFare = service.estimateFare(10.0, 1.8);.\n5. Ikkala narxni chop eting:System.out.println(\"Oddiy tarif: \" + normalFare + \" so'm\");System.out.println(\"Tirbandlik tarifi (1.8x): \" + peakFare + \" so'm\");",
      "en": "[Real-World Story & Context]\nIn Yandex Go, ride fares are dynamically computed based on base fare, distance, and peak-hour traffic surge multiplier.\n\n[Step-by-Step Implementation Tasks (1 to 5)]\n1. Declare class RideService with field double baseFare;.\n2. Implement public double estimateFare(double km, double surgeMultiplier):• Formula: return baseFare + (km * 2500.0 * surgeMultiplier);\n3. In main, instantiate RideService service = new RideService(); and set service.baseFare = 5000.0;.\n4. Calculate normal fare (10.0 km, 1.0x) and peak fare (10.0 km, 1.8x).\n5. Print both results:System.out.println(\"Oddiy tarif: \" + normalFare + \" so'm\");System.out.println(\"Tirbandlik tarifi (1.8x): \" + peakFare + \" so'm\");",
      "ru": "📖 Контекст и описание задачи\nВ Yandex Go стоимость поездок рассчитывается динамически на основе базового тарифа, расстояния и множителя пика трафика в час пик.\n\n📋 Пошаговые задачи (от 1 до 5)\n1. Объявите класс <code>RideService</code> с полем <code>double baseFare;</code>.\n2. Реализуйте <code>public double estimateFare(double km, double surgeMultiplier)</code>:<br>• Формула: <code>return baseFare + (km * 2500.0 * surgeMultiplier);</code>\n3. В <code>main</code> создайте экземпляр <code>RideService service = new RideService();</code> и установите <code>service.baseFare = 5000.0;</code>.\n4. Рассчитайте нормальный тариф (10,0 км, 1,0x) и пиковый тариф (10,0 км, 1,8x).\n5. Распечатайте оба результата:<br><code>System.out.println(\"Oddiy tarif: \" + normalFare + \" so'm\");</code><br><code>System.out.println(\"Tirbandlik tarifi (1.8x): \" + peakFare + \" so'm\");</code>"
    },
    "requirements": {
      "classes": [
        "RideService",
        "Main"
      ],
      "fields": [
        {
          "name": "baseFare",
          "type": "double"
        }
      ],
      "methods": [
        "estimateFare"
      ],
      "methodDetails": [
        {
          "name": "estimateFare",
          "signature": "public double estimateFare(double km, double surgeMultiplier)",
          "params": "double km — bosib o'tilgan masofa, double surgeMultiplier — talab koeffitsienti (masalan: 1.0 yoki 1.8)",
          "paramsEn": "double km — distance in km, double surgeMultiplier — demand multiplier (e.g. 1.0 or 1.8)",
          "returns": "double (hisoblangan umumiy safar narxi)",
          "returnsEn": "double (computed total trip fare)",
          "logic": "return baseFare + (km * 2500.0 * surgeMultiplier);",
          "logicEn": "return baseFare + (km * 2500.0 * surgeMultiplier);",
          "example": "double peak = service.estimateFare(10.0, 1.8); // 5000.0 + (10.0 * 2500.0 * 1.8) = 50000.0 so'm"
        }
      ]
    },
    "starterCode": "class RideService {\n    double baseFare;\n\n    // estimateFare(double km, double surgeMultiplier) metodini yozing\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        // RideService orqali turli koeffitsientlarda narxni hisoblang\n        \n    }\n}",
    "solution": "class RideService {\n    double baseFare;\n\n    public double estimateFare(double km, double surgeMultiplier) {\n        return baseFare + (km * 2500.0 * surgeMultiplier);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        RideService service = new RideService();\n        service.baseFare = 5000.0;\n\n        double normalFare = service.estimateFare(10.0, 1.0);\n        double peakFare = service.estimateFare(10.0, 1.8);\n\n        System.out.println(\"Oddiy tarif: \" + normalFare + \" so'm\");\n        System.out.println(\"Tirbandlik tarifi (1.8x): \" + peakFare + \" so'm\");\n    }\n}",
    "detailedSolution": {
      "theory": "Metodlar bir nechta turli xil argumentlarni qabul qilib, ob'yektning o'z ichki maydoni (baseFare) bilan umumlashtirgan holda hisob-kitob olib borishi mumkin.",
      "theoryEn": "Methods seamlessly synthesize internal state fields with incoming runtime arguments.",
      "cleanCode": "return baseFare + (km * 2500.0 * surgeMultiplier);",
      "breakdown": [
        "2 ta argument: masofa va ko'paytiruvchi koeffitsient.",
        "Ob'yekt maydoni hisob-kitobda faol ishtirok etmoqda."
      ],
      "pitfalls": "Argumentlar tartibini adashtirish mantiqiy xatoga olib kelishi mumkin.",
      "cw2Tip": "CW2 ilovasida yetkazib berish narxini masofaga qarab hisoblashda ayni muddao.",
      "theoryRu": "Методы плавно синтезируют внутренние поля состояния с входящими аргументами времени выполнения.",
      "pitfallsRu": "Неправильный порядок аргументов может привести к логической ошибке.",
      "breakdownRu": [
        "2 аргумента: расстояние и множитель.",
        "Площадь объекта активно участвует в расчете."
      ]
    },
    "sampleData": [
      "baseFare: 5000.0 so'm",
      "Masofa (distanceKm): 8.5 km",
      "Koeffitsiyent (surgeMultiplier): 1.5"
    ],
    "expectedOutput": "Oddiy tarif: 30000.0 so'm\nTirbandlik tarifi (1.8x): 50000.0 so'm",
    "story": {
      "uz": "Yandex Go servisida safar narxi masofa, boshlang'ich narx va tig'iz vaqtdagi tirbandlik koeffitsientiga (surge) bog'liq holda ko'p parametrli hisoblash metodi orqali aniqlanadi.",
      "en": "In Yandex Go, ride fares are dynamically computed based on base fare, distance, and peak-hour traffic surge multiplier.",
      "ru": "В Yandex Go стоимость поездок рассчитывается динамически на основе базового тарифа, расстояния и множителя пика трафика в час пик."
    },
    "steps": {
      "uz": [
        "<code>RideService</code> klassini yarating va unga <code>double baseFare;</code> maydonini qo'shing.",
        "<code>public double estimateFare(double km, double surgeMultiplier)</code> metodini yozing:<br>• Formulalar: <code>return baseFare + (km * 2500.0 * surgeMultiplier);</code>",
        "<code>Main</code> metodida <code>RideService service = new RideService();</code> tuzib, <code>service.baseFare = 5000.0;</code> bering.",
        "Oddiy (1.0x) va tirbandlik (1.8x) tariflarini hisoblang: <code>double normalFare = service.estimateFare(10.0, 1.0);</code> va <code>double peakFare = service.estimateFare(10.0, 1.8);</code>.",
        "Ikkala narxni chop eting:<br><code>System.out.println(\"Oddiy tarif: \" + normalFare + \" so'm\");</code><br><code>System.out.println(\"Tirbandlik tarifi (1.8x): \" + peakFare + \" so'm\");</code>"
      ],
      "en": [
        "Declare class <code>RideService</code> with field <code>double baseFare;</code>.",
        "Implement <code>public double estimateFare(double km, double surgeMultiplier)</code>:<br>• Formula: <code>return baseFare + (km * 2500.0 * surgeMultiplier);</code>",
        "In <code>main</code>, instantiate <code>RideService service = new RideService();</code> and set <code>service.baseFare = 5000.0;</code>.",
        "Calculate normal fare (10.0 km, 1.0x) and peak fare (10.0 km, 1.8x).",
        "Print both results:<br><code>System.out.println(\"Oddiy tarif: \" + normalFare + \" so'm\");</code><br><code>System.out.println(\"Tirbandlik tarifi (1.8x): \" + peakFare + \" so'm\");</code>"
      ],
      "ru": [
        "Объявите класс <code>RideService</code> с полем <code>double baseFare;</code>.",
        "Реализуйте <code>public double estimateFare(double km, double surgeMultiplier)</code>:<br>• Формула: <code>return baseFare + (km * 2500.0 * surgeMultiplier);</code>",
        "В <code>main</code> создайте экземпляр <code>RideService service = new RideService();</code> и установите <code>service.baseFare = 5000.0;</code>.",
        "Рассчитайте нормальный тариф (10,0 км, 1,0x) и пиковый тариф (10,0 км, 1,8x).",
        "Распечатайте оба результата:<br><code>System.out.println(\"Oddiy tarif: \" + normalFare + \" so'm\");</code><br><code>System.out.println(\"Tirbandlik tarifi (1.8x): \" + peakFare + \" so'm\");</code>"
      ]
    }
  },
  {
    "id": 15,
    "tier": 2,
    "tierName": "2-Bosqich: Instans Metodlar va Xatti-harakat",
    "sector": "11-20",
    "title": {
      "uz": "15. WIUT GradeBook — 'getOverallScore' va 'isPassed' Boolean Predikat Metodi",
      "en": "15. WIUT GradeBook — Predicate Methods & Assessment Rules",
      "ru": "15. Журнал оценок WIUT — предикатные методы и правила оценивания."
    },
    "scenario": {
      "uz": "[Hayotiy Voqealik & Kontekst]\nWIUT universiteti baholash tizimida modul natijasi Coursework (40%) va Yakuniy Imtihon (60%) ballaridan jamlanadi. Talaba jami 40.0 balldan kam olmasa moduldan o'tgan hisoblanadi.\n\n[Bajarilishi kerak bo'lgan vazifalar (1 dan 5 gacha)]\n1. GradeBook klassini tuzing: double courseworkMark; va double examMark; maydonlarini e'lon qiling.\n2. public double getOverallScore() metodini yozing: return courseworkMark * 0.4 + examMark * 0.6;.\n3. public boolean isPassed() metodini yozing: return getOverallScore() >= 40.0;.\n4. Main metodida GradeBook gb = new GradeBook(); yarating va qiymat bering: gb.courseworkMark = 73.0;, gb.examMark = 66.6;.\n5. Natijani chop eting: System.out.println(\"Yakuniy ball: \" + gb.getOverallScore() + \" | Moduldan o'tdi: \" + gb.isPassed());",
      "en": "[Real-World Story & Context]\nIn the WIUT grading system, overall module mark combines Coursework (40%) and Exam (60%). A student passes if the weighted overall score is at least 40.0.\n\n[Step-by-Step Implementation Tasks (1 to 5)]\n1. Declare class GradeBook with fields double courseworkMark; and double examMark;.\n2. Implement public double getOverallScore(): returns courseworkMark * 0.4 + examMark * 0.6;.\n3. Implement public boolean isPassed(): returns getOverallScore() >= 40.0;.\n4. In main, instantiate GradeBook gb = new GradeBook(); with 73.0 and 66.6.\n5. Print overall score and pass status: System.out.println(\"Yakuniy ball: \" + gb.getOverallScore() + \" | Moduldan o'tdi: \" + gb.isPassed());",
      "ru": "📖 Контекст и описание задачи\nВ системе оценок МВУТ общая оценка за модуль включает в себя курсовую работу (40%) и экзамен (60%). Студент сдает экзамен, если взвешенный общий балл составляет не менее 40,0.\n\n📋 Пошаговые задачи (от 1 до 5)\n1. Объявите класс <code>GradeBook</code> с полями <code>double courseworkMark;</code> и <code>double examMark;</code>.\n2. Реализация <code>public double getOverallScore()</code>: возвращает <code>courseworkMark * 0.4 + examMark * 0.6;</code>.\n3. Реализация <code>public boolean isPassed()</code>: возвращает <code>getOverallScore() >= 40.0;</code>.\n4. В <code>main</code> создайте экземпляр <code>GradeBook gb = new GradeBook();</code> с помощью <code>73.0</code> и <code>66.6</code>.\n5. Распечатать общий балл и статус прохождения: <code>System.out.println(\"Yakuniy ball: \" + gb.getOverallScore() + \" | Moduldan o'tdi: \" + gb.isPassed());</code>."
    },
    "requirements": {
      "classes": [
        "GradeBook",
        "Main"
      ],
      "fields": [
        {
          "name": "courseworkMark",
          "type": "double"
        },
        {
          "name": "examMark",
          "type": "double"
        }
      ],
      "methods": [
        "getOverallScore",
        "isPassed"
      ],
      "methodDetails": [
        {
          "name": "getOverallScore",
          "signature": "public double getOverallScore()",
          "params": "Parametr qabul qilmaydi ()",
          "paramsEn": "No parameters ()",
          "returns": "double (40% CW va 60% Exam asosidagi jami umumiy ball)",
          "returnsEn": "double (weighted total mark: cw * 0.4 + exam * 0.6)",
          "logic": "return (courseworkMark * 0.4) + (examMark * 0.6);",
          "logicEn": "return (courseworkMark * 0.4) + (examMark * 0.6);",
          "example": "double overall = gb.getOverallScore(); // 65.0*0.4 + 72.0*0.6 = 69.2 qaytaradi"
        },
        {
          "name": "isPassed",
          "signature": "public boolean isPassed()",
          "params": "Parametr qabul qilmaydi ()",
          "paramsEn": "No parameters ()",
          "returns": "boolean (agar jami ball >= 40.0 bo'lsa true, aks holda false)",
          "returnsEn": "boolean (true if overall score >= 40.0, else false)",
          "logic": "return getOverallScore() >= 40.0;",
          "logicEn": "return getOverallScore() >= 40.0;",
          "example": "boolean passed = gb.isPassed(); // 69.2 >= 40.0 bo'lgani uchun true qaytaradi"
        }
      ]
    },
    "starterCode": "class GradeBook {\n    double courseworkMark;\n    double examMark;\n\n    // getOverallScore va isPassed metodlarini yozing\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        // GradeBook ob'yektini sinab ko'ring\n        \n    }\n}",
    "solution": "class GradeBook {\n    double courseworkMark;\n    double examMark;\n\n    public double getOverallScore() {\n        return (courseworkMark * 0.4) + (examMark * 0.6);\n    }\n\n    public boolean isPassed() {\n        return getOverallScore() >= 40.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GradeBook gb = new GradeBook();\n        gb.courseworkMark = 65.0;\n        gb.examMark = 72.0;\n\n        double overall = gb.getOverallScore();\n        boolean passed = gb.isPassed();\n\n        System.out.println(\"Yakuniy ball: \" + overall + \" | Moduldan o'tdi: \" + passed);\n    }\n}",
    "detailedSolution": {
      "theory": "Metod ichidan boshqa metodni chaqirish (Method Delegation): 'isPassed()' metodi o'z hisob-kitobini 'getOverallScore()' natijasiga tayanib bajaradi. Bu kod takrorlanishining (DRY - Don't Repeat Yourself) oldini oladi.",
      "theoryEn": "Method delegation allows 'isPassed()' to leverage 'getOverallScore()', strictly upholding DRY principles.",
      "cleanCode": "public boolean isPassed() {\n    return getOverallScore() >= 40.0;\n}",
      "breakdown": [
        "Baholar vazniga qarab hisoblandi.",
        "Mantiqiy predikat metodi qisqa va aniq ifodalandi."
      ],
      "pitfalls": "40.0 o'rniga 40 deb butun son yozilsa ham Java implicit conversion qiladi, lekin double aniqligi saqlangan ma'qul.",
      "cw2Tip": "Bu aynan WIUT 5COSC018C modulining rasmiy baholash qoidasidir!",
      "theoryRu": "Делегирование метода позволяет isPassed() использовать getOverallScore(), строго соблюдая принципы DRY.",
      "pitfallsRu": "Даже если целое число записано как 40 вместо 40,0, Java выполняет неявное преобразование, но лучше сохранять двойную точность.",
      "breakdownRu": [
        "Оценки рассчитывались по весу.",
        "Mantiqiy predikat metodi qisqa va aniq ifodalandi."
      ]
    },
    "sampleData": [
      "courseworkMark: 65.0",
      "examMark: 72.0"
    ],
    "expectedOutput": "Yakuniy ball: 69.19999999999999 | Moduldan o'tdi: true",
    "story": {
      "uz": "WIUT universiteti baholash tizimida modul natijasi Coursework (40%) va Yakuniy Imtihon (60%) ballaridan jamlanadi. Talaba jami 40.0 balldan kam olmasa moduldan o'tgan hisoblanadi.",
      "en": "In the WIUT grading system, overall module mark combines Coursework (40%) and Exam (60%). A student passes if the weighted overall score is at least 40.0.",
      "ru": "В системе оценок МВУТ общая оценка за модуль включает в себя курсовую работу (40%) и экзамен (60%). Студент сдает экзамен, если взвешенный общий балл составляет не менее 40,0."
    },
    "steps": {
      "uz": [
        "<code>GradeBook</code> klassini tuzing: <code>double courseworkMark;</code> va <code>double examMark;</code> maydonlarini e'lon qiling.",
        "<code>public double getOverallScore()</code> metodini yozing: <code>return courseworkMark * 0.4 + examMark * 0.6;</code>.",
        "<code>public boolean isPassed()</code> metodini yozing: <code>return getOverallScore() >= 40.0;</code>.",
        "<code>Main</code> metodida <code>GradeBook gb = new GradeBook();</code> yarating va qiymat bering: <code>gb.courseworkMark = 73.0;</code>, <code>gb.examMark = 66.6;</code>.",
        "Natijani chop eting: <code>System.out.println(\"Yakuniy ball: \" + gb.getOverallScore() + \" | Moduldan o'tdi: \" + gb.isPassed());</code>"
      ],
      "en": [
        "Declare class <code>GradeBook</code> with fields <code>double courseworkMark;</code> and <code>double examMark;</code>.",
        "Implement <code>public double getOverallScore()</code>: returns <code>courseworkMark * 0.4 + examMark * 0.6;</code>.",
        "Implement <code>public boolean isPassed()</code>: returns <code>getOverallScore() >= 40.0;</code>.",
        "In <code>main</code>, instantiate <code>GradeBook gb = new GradeBook();</code> with <code>73.0</code> and <code>66.6</code>.",
        "Print overall score and pass status: <code>System.out.println(\"Yakuniy ball: \" + gb.getOverallScore() + \" | Moduldan o'tdi: \" + gb.isPassed());</code>"
      ],
      "ru": [
        "Объявите класс <code>GradeBook</code> с полями <code>double courseworkMark;</code> и <code>double examMark;</code>.",
        "Реализация <code>public double getOverallScore()</code>: возвращает <code>courseworkMark * 0.4 + examMark * 0.6;</code>.",
        "Реализация <code>public boolean isPassed()</code>: возвращает <code>getOverallScore() >= 40.0;</code>.",
        "В <code>main</code> создайте экземпляр <code>GradeBook gb = new GradeBook();</code> с помощью <code>73.0</code> и <code>66.6</code>.",
        "Распечатать общий балл и статус прохождения: <code>System.out.println(\"Yakuniy ball: \" + gb.getOverallScore() + \" | Moduldan o'tdi: \" + gb.isPassed());</code>."
      ]
    }
  },
  {
    "id": 16,
    "tier": 2,
    "tierName": "2-Bosqich: Instans Metodlar va Xatti-harakat",
    "sector": "11-20",
    "title": {
      "uz": "16. Korzinka Plus — 'addPoints' va Darajani Avtomatik Yangilash (State Transitions)",
      "en": "16. Korzinka Plus — Dynamic State Transitions & Tier Upgrades",
      "ru": "16. Корзинка Плюс — динамические переходы между состояниями и обновления уровней"
    },
    "scenario": {
      "uz": "[Hayotiy Voqealik & Kontekst]\nKorzinka supermarketining sodiqlik dasturida xaridor yig'gan ballariga qarab avtomatik daraja (Tier) oladi: 1000 dan oshsa 'GOLD', 500 dan oshsa 'SILVER', aks holda 'STANDARD'.\n\n[Bajarilishi kerak bo'lgan vazifalar (1 dan 5 gacha)]\n1. LoyaltyCard klassini tuzing: int points; va String tier; maydonlarini e'lon qiling.\n2. public void addPoints(int earned) metodini yozing: ball qo'shing va shartlar bo'yicha tier holatini yangilang (>=1000: 'GOLD', >=500: 'SILVER', aks holda: 'STANDARD').\n3. Main metodida LoyaltyCard card = new LoyaltyCard(); tuzib, points = 0; tier = \"STANDARD\"; qiling.\n4. Dastlab 600 ball qo'shing: card.addPoints(600); va System.out.println(\"Ball: \" + card.points + \" | Status: \" + card.tier); deb chop eting.\n5. Yana 500 ball qo'shing: card.addPoints(500); va System.out.println(\"Ball: \" + card.points + \" | Status: \" + card.tier); deb chop eting.",
      "en": "[Real-World Story & Context]\nIn Korzinka Plus loyalty system, customer tier dynamically updates with accumulated points: 1000+ points unlocks 'GOLD', 500+ unlocks 'SILVER', otherwise 'STANDARD'.\n\n[Step-by-Step Implementation Tasks (1 to 5)]\n1. Declare class LoyaltyCard with int points; and String tier;.\n2. Implement public void addPoints(int earned): increment points and evaluate tier state (>=1000: 'GOLD', >=500: 'SILVER', else: 'STANDARD').\n3. In main, instantiate LoyaltyCard card = new LoyaltyCard(); with points = 0; tier = \"STANDARD\";.\n4. Add 600 points: card.addPoints(600); and print: System.out.println(\"Ball: \" + card.points + \" | Status: \" + card.tier);.\n5. Add another 500 points: card.addPoints(500); and print: System.out.println(\"Ball: \" + card.points + \" | Status: \" + card.tier);.",
      "ru": "📖 Контекст и описание задачи\nВ системе лояльности «Корзинка Плюс» уровень клиента динамически обновляется с накоплением баллов: 1000+ баллов открывает «ЗОЛОТО», 500+ открывает «СЕРЕБРЯНЫЙ», в противном случае — «СТАНДАРТ».\n\n📋 Пошаговые задачи (от 1 до 5)\n1. Объявите класс <code>LoyaltyCard</code> с помощью <code>int points;</code> и <code>String tier;</code>.\n2. Реализуйте <code>public void addPoints(int earned)</code>: увеличивайте баллы и оценивайте состояние уровня (>=1000: «ЗОЛОТО», >=500: «СЕРЕБРО», иначе: «СТАНДАРТ»).\n3. В <code>main</code> создайте экземпляр <code>LoyaltyCard card = new LoyaltyCard();</code> с помощью <code>points = 0; tier = \"STANDARD\";</code>.\n4. Добавьте 600 точек: <code>card.addPoints(600);</code> и выведите: <code>System.out.println(\"Ball: \" + card.points + \" | Status: \" + card.tier);</code>.\n5. Добавьте еще 500 точек: <code>card.addPoints(500);</code> и выведите: <code>System.out.println(\"Ball: \" + card.points + \" | Status: \" + card.tier);</code>."
    },
    "requirements": {
      "classes": [
        "LoyaltyMember",
        "Main"
      ],
      "fields": [
        {
          "name": "points",
          "type": "int"
        },
        {
          "name": "tier",
          "type": "String"
        }
      ],
      "methods": [
        "addPoints"
      ],
      "methodDetails": [
        {
          "name": "addPoints",
          "signature": "public void addPoints(int earned)",
          "params": "int earned — mijozga qo'shilayotgan sodiqlik ballari miqdori",
          "paramsEn": "int earned — loyalty points earned",
          "returns": "void (ballni qo'shadi va tier holatini avtomatik yangilaydi)",
          "returnsEn": "void (accumulates points and updates tier status)",
          "logic": "points += earned; if (points >= 1000) tier = 'GOLD'; else if (points >= 500) tier = 'SILVER'; else tier = 'BRONZE';",
          "logicEn": "points += earned; if (points >= 1000) tier = 'GOLD'; else if (points >= 500) tier = 'SILVER'; else tier = 'BRONZE';",
          "example": "member.addPoints(250); // Ball 600 -> tier 'SILVER'. member.addPoints(500); // Ball 1100 -> tier 'GOLD'"
        }
      ]
    },
    "starterCode": "class LoyaltyMember {\n    int points;\n    String tier;\n\n    // addPoints metodini yozing\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        // Ball qo'shib, yangilangan statusni ko'ring\n        \n    }\n}",
    "solution": "class LoyaltyMember {\n    int points;\n    String tier;\n\n    public void addPoints(int earned) {\n        if (earned > 0) {\n            points += earned;\n            if (points >= 1000) {\n                tier = \"GOLD\";\n            } else if (points >= 500) {\n                tier = \"SILVER\";\n            } else {\n                tier = \"BRONZE\";\n            }\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LoyaltyMember member = new LoyaltyMember();\n        member.points = 350;\n        member.tier = \"BRONZE\";\n\n        member.addPoints(250); // jami 600 -> SILVER\n        System.out.println(\"Ball: \" + member.points + \" | Status: \" + member.tier);\n\n        member.addPoints(500); // jami 1100 -> GOLD\n        System.out.println(\"Ball: \" + member.points + \" | Status: \" + member.tier);\n    }\n}",
    "detailedSolution": {
      "theory": "Holat tranzitsiyasi (State Transition): Obyektning xatti-harakati uning ichki holatini shartlar asosida yangi bosqichga o'tkazadi. Bu ob'yektga yo'naltirilgan dasturlashning eng kuchli jihatlaridan biridir.",
      "theoryEn": "State transitions model evolving lifecycle phases directly within instance mutation logic.",
      "cleanCode": "if (points >= 1000) tier = \"GOLD\";",
      "breakdown": [
        "Ball qo'shildi va oraliqlar tekshirildi.",
        "Foydalanuvchi darajasi (Bronze -> Silver -> Gold) avtomatik o'sdi."
      ],
      "pitfalls": "Shartlarni tekshirishda kichik sondan emas, avval eng katta sondan (1000) boshlash kerak, aks holda `points >= 500` barcha 1000 dan kattalarni ham ushlab qoladi.",
      "cw2Tip": "CW2 loyihangizda buyurtma statusini (PENDING -> PAID -> DELIVERED) boshqarishda ayni usul qo'llaniladi.",
      "theoryRu": "Переходы между состояниями моделируют этапы жизненного цикла непосредственно в рамках логики мутации экземпляра.",
      "pitfallsRu": "При проверке условий вы должны начинать с самого большого числа (1000), а не с наименьшего числа, иначе `points >= 500` будет улавливать все числа больше 1000.",
      "breakdownRu": [
        "Забиты и интервалы проверены.",
        "Уровень пользователя (Бронза -> Серебро -> Золото) повышается автоматически."
      ]
    },
    "sampleData": [
      "Boshlang'ich ball: 350 (Daraja: \"BRONZE\")",
      "1-ball qo'shish: +200",
      "2-ball qo'shish: +500 (Daraja \"GOLD\" ga ko'tariladi)"
    ],
    "expectedOutput": "Ball: 600 | Status: SILVER\nBall: 1100 | Status: GOLD",
    "story": {
      "uz": "Korzinka supermarketining sodiqlik dasturida xaridor yig'gan ballariga qarab avtomatik daraja (Tier) oladi: 1000 dan oshsa 'GOLD', 500 dan oshsa 'SILVER', aks holda 'STANDARD'.",
      "en": "In Korzinka Plus loyalty system, customer tier dynamically updates with accumulated points: 1000+ points unlocks 'GOLD', 500+ unlocks 'SILVER', otherwise 'STANDARD'.",
      "ru": "В системе лояльности «Корзинка Плюс» уровень клиента динамически обновляется с накоплением баллов: 1000+ баллов открывает «ЗОЛОТО», 500+ открывает «СЕРЕБРЯНЫЙ», в противном случае — «СТАНДАРТ»."
    },
    "steps": {
      "uz": [
        "<code>LoyaltyCard</code> klassini tuzing: <code>int points;</code> va <code>String tier;</code> maydonlarini e'lon qiling.",
        "<code>public void addPoints(int earned)</code> metodini yozing: ball qo'shing va shartlar bo'yicha tier holatini yangilang (>=1000: 'GOLD', >=500: 'SILVER', aks holda: 'STANDARD').",
        "<code>Main</code> metodida <code>LoyaltyCard card = new LoyaltyCard();</code> tuzib, <code>points = 0; tier = \"STANDARD\";</code> qiling.",
        "Dastlab 600 ball qo'shing: <code>card.addPoints(600);</code> va <code>System.out.println(\"Ball: \" + card.points + \" | Status: \" + card.tier);</code> deb chop eting.",
        "Yana 500 ball qo'shing: <code>card.addPoints(500);</code> va <code>System.out.println(\"Ball: \" + card.points + \" | Status: \" + card.tier);</code> deb chop eting."
      ],
      "en": [
        "Declare class <code>LoyaltyCard</code> with <code>int points;</code> and <code>String tier;</code>.",
        "Implement <code>public void addPoints(int earned)</code>: increment points and evaluate tier state (>=1000: 'GOLD', >=500: 'SILVER', else: 'STANDARD').",
        "In <code>main</code>, instantiate <code>LoyaltyCard card = new LoyaltyCard();</code> with <code>points = 0; tier = \"STANDARD\";</code>.",
        "Add 600 points: <code>card.addPoints(600);</code> and print: <code>System.out.println(\"Ball: \" + card.points + \" | Status: \" + card.tier);</code>.",
        "Add another 500 points: <code>card.addPoints(500);</code> and print: <code>System.out.println(\"Ball: \" + card.points + \" | Status: \" + card.tier);</code>."
      ],
      "ru": [
        "Объявите класс <code>LoyaltyCard</code> с помощью <code>int points;</code> и <code>String tier;</code>.",
        "Реализуйте <code>public void addPoints(int earned)</code>: увеличивайте баллы и оценивайте состояние уровня (>=1000: «ЗОЛОТО», >=500: «СЕРЕБРО», иначе: «СТАНДАРТ»).",
        "В <code>main</code> создайте экземпляр <code>LoyaltyCard card = new LoyaltyCard();</code> с помощью <code>points = 0; tier = \"STANDARD\";</code>.",
        "Добавьте 600 точек: <code>card.addPoints(600);</code> и выведите: <code>System.out.println(\"Ball: \" + card.points + \" | Status: \" + card.tier);</code>.",
        "Добавьте еще 500 точек: <code>card.addPoints(500);</code> и выведите: <code>System.out.println(\"Ball: \" + card.points + \" | Status: \" + card.tier);</code>."
      ]
    }
  },
  {
    "id": 17,
    "tier": 2,
    "tierName": "2-Bosqich: Instans Metodlar va Xatti-harakat",
    "sector": "11-20",
    "title": {
      "uz": "17. Cargo Logistics — 'loadCargo' va Natija Statusini Qaytarish (Boolean Result)",
      "en": "17. Cargo Logistics — 'loadCargo' with Capacity Status Return",
      "ru": "17. Грузовая логистика — «loadCargo» с возвратом статуса мощности."
    },
    "scenario": {
      "uz": "[Hayotiy Voqealik & Kontekst]\nToshkent-Samarqand logistika yo'nalishida yuk mashinasining ruxsat etilgan maksimal vazni nazorat qilinadi. Yangi yuk mashina sig'imidan oshib ketmasligi tekshirilib, natijasi boolean (true/false) qaytariladi.\n\n[Bajarilishi kerak bo'lgan vazifalar (1 dan 5 gacha)]\n1. CargoTruck klassini tuzing: double maxCapacityKg; va double currentLoadKg; maydonlarini qo'shing.\n2. public boolean loadCargo(double weightKg) metodini yozing: agar currentLoadKg + weightKg  bo'lsa yukni qo'shib return true;, aks holda return false; qaytarsin.\n3. Main metodida CargoTruck truck = new CargoTruck(); tuzib, truck.maxCapacityKg = 1000.0; truck.currentLoadKg = 700.0; bering.\n4. 200 kg yuk orting va natijani chop eting: boolean res1 = truck.loadCargo(200.0);System.out.println(\"200 kg yuklandi: \" + res1 + \" (Jami: \" + truck.currentLoadKg + \" kg)\");\n5. Yana bir bor 200 kg yuk ortishga urinib ko'ring (sig'maydi) va natijani chop eting: boolean res2 = truck.loadCargo(200.0);System.out.println(\"Ikkinchi 200 kg yuklandi: \" + res2 + \" (Jami: \" + truck.currentLoadKg + \" kg)\");",
      "en": "[Real-World Story & Context]\nFreight logistics truck enforces maximum cargo weight capacity. Adding cargo checks whether it fits within bounds and returns a boolean success status.\n\n[Step-by-Step Implementation Tasks (1 to 5)]\n1. Create class CargoTruck with fields double maxCapacityKg; and double currentLoadKg;.\n2. Implement public boolean loadCargo(double weightKg): if it fits, update current load and return true; otherwise return false.\n3. In main, instantiate CargoTruck truck = new CargoTruck(); with 1000.0 max capacity and 700.0 current load.\n4. Load 200 kg and print: System.out.println(\"200 kg yuklandi: \" + res1 + \" (Jami: \" + truck.currentLoadKg + \" kg)\");.\n5. Try loading another 200 kg (fails) and print: System.out.println(\"Ikkinchi 200 kg yuklandi: \" + res2 + \" (Jami: \" + truck.currentLoadKg + \" kg)\");.",
      "ru": "📖 Контекст и описание задачи\nГрузовой логистический грузовик обеспечивает максимальную грузоподъемность. Добавление груза проверяет, вписывается ли он в границы, и возвращает логический статус успеха.\n\n📋 Пошаговые задачи (от 1 до 5)\n1. Создайте класс <code>CargoTruck</code> с полями <code>double maxCapacityKg;</code> и <code>double currentLoadKg;</code>.\n2. Реализуйте <code>public boolean loadCargo(double weightKg)</code>: если подходит, обновите текущую нагрузку и верните true; в противном случае верните false.\n3. В <code>main</code> создайте экземпляр <code>CargoTruck truck = new CargoTruck();</code> с максимальной мощностью 1000,0 и текущей нагрузкой 700,0.\n4. Загрузите 200 кг и напечатайте: <code>System.out.println(\"200 kg yuklandi: \" + res1 + \" (Jami: \" + truck.currentLoadKg + \" kg)\");</code>.\n5. Попробуйте загрузить еще 200 кг (не удалось) и выведите: <code>System.out.println(\"Ikkinchi 200 kg yuklandi: \" + res2 + \" (Jami: \" + truck.currentLoadKg + \" kg)\");</code>."
    },
    "requirements": {
      "classes": [
        "CargoContainer",
        "Main"
      ],
      "fields": [
        {
          "name": "maxCapacityKg",
          "type": "double"
        },
        {
          "name": "currentWeightKg",
          "type": "double"
        }
      ],
      "methods": [
        "loadCargo"
      ],
      "methodDetails": [
        {
          "name": "loadCargo",
          "signature": "public boolean loadCargo(double weightKg)",
          "params": "double weightKg — konteynerga yuklanayotgan yuk og'irligi (kg da)",
          "paramsEn": "double weightKg — cargo weight to load in kg",
          "returns": "boolean (agar sig'im yetarli bo'lsa yukni qo'shib true, sig'masa false qaytaradi)",
          "returnsEn": "boolean (returns true and adds weight if capacity allows, false if exceeded)",
          "logic": "if (weightKg > 0 && currentWeightKg + weightKg <= maxCapacityKg) { currentWeightKg += weightKg; return true; } return false;",
          "logicEn": "if (weightKg > 0 && currentWeightKg + weightKg <= maxCapacityKg) { currentWeightKg += weightKg; return true; } return false;",
          "example": "boolean ok = container.loadCargo(200.0); // 700 + 200 <= 1000 -> true, jami 900.0 kg bo'ladi"
        }
      ]
    },
    "starterCode": "class CargoContainer {\n    double maxCapacityKg;\n    double currentWeightKg;\n\n    // loadCargo metodini yozing\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        // Konteynerga yuk yuklab, natijasini tekshiring\n        \n    }\n}",
    "solution": "class CargoContainer {\n    double maxCapacityKg;\n    double currentWeightKg;\n\n    public boolean loadCargo(double weightKg) {\n        if (weightKg > 0 && (currentWeightKg + weightKg) <= maxCapacityKg) {\n            currentWeightKg += weightKg;\n            return true;\n        }\n        return false;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CargoContainer container = new CargoContainer();\n        container.maxCapacityKg = 1000.0;\n        container.currentWeightKg = 700.0;\n\n        boolean success1 = container.loadCargo(200.0);\n        System.out.println(\"200 kg yuklandi: \" + success1 + \" (Jami: \" + container.currentWeightKg + \" kg)\");\n\n        boolean success2 = container.loadCargo(200.0); // 900 + 200 = 1100 > 1000 (Rad etiladi)\n        System.out.println(\"Ikkinchi 200 kg yuklandi: \" + success2 + \" (Jami: \" + container.currentWeightKg + \" kg)\");\n    }\n}",
    "detailedSolution": {
      "theory": "Operatsiya natijasini boolean orqali qaytarish (Status Return Pattern): Metod o'zgarish sodir bo'lgan yoki bo'lmaganligini chaqiruvchiga xabar beradi, bu esa tashqi kodga xatolikni chiroyli ko'rsatish imkonini yaratadi.",
      "theoryEn": "Boolean status return signals operation success/failure while preventing invalid state mutations.",
      "cleanCode": "if (weightKg > 0 && (currentWeightKg + weightKg) <= maxCapacityKg) {\n    currentWeightKg += weightKg;\n    return true;\n}\nreturn false;",
      "breakdown": [
        "Chegarani oldindan tekshirish (Atomic check).",
        "Faqat sig'im yetarli bo'lganda og'irlik oshirildi."
      ],
      "pitfalls": "return false dan oldin currentWeightKg ni o'zgartirib qo'ymaslikka ehtiyot bo'ling.",
      "cw2Tip": "Do'kon omborida qoldiq yetarli bo'lmaganda xaridni rad etish uchun ishlatiladi.",
      "theoryRu": "Логический возврат статуса сигнализирует об успехе/неуспехе операции, предотвращая при этом недопустимые мутации состояния.",
      "pitfallsRu": "Будьте осторожны и не измените currentWeightKg до возврата false.",
      "breakdownRu": [
        "Атомная проверка.",
        "Вес увеличивали только тогда, когда мощности было достаточно."
      ]
    },
    "sampleData": [
      "maxCapacityKg: 1000.0 kg",
      "currentWeightKg: 700.0 kg",
      "1-yuk (loadCargo): 250.0 kg",
      "2-yuk (loadCargo): 100.0 kg (sig'maydi, rad etiladi)"
    ],
    "expectedOutput": "200 kg yuklandi: true (Jami: 900.0 kg)\nIkkinchi 200 kg yuklandi: false (Jami: 900.0 kg)",
    "story": {
      "uz": "Toshkent-Samarqand logistika yo'nalishida yuk mashinasining ruxsat etilgan maksimal vazni nazorat qilinadi. Yangi yuk mashina sig'imidan oshib ketmasligi tekshirilib, natijasi boolean (true/false) qaytariladi.",
      "en": "Freight logistics truck enforces maximum cargo weight capacity. Adding cargo checks whether it fits within bounds and returns a boolean success status.",
      "ru": "Грузовой логистический грузовик обеспечивает максимальную грузоподъемность. Добавление груза проверяет, вписывается ли он в границы, и возвращает логический статус успеха."
    },
    "steps": {
      "uz": [
        "<code>CargoTruck</code> klassini tuzing: <code>double maxCapacityKg;</code> va <code>double currentLoadKg;</code> maydonlarini qo'shing.",
        "<code>public boolean loadCargo(double weightKg)</code> metodini yozing: agar <code>currentLoadKg + weightKg <= maxCapacityKg</code> bo'lsa yukni qo'shib <code>return true;</code>, aks holda <code>return false;</code> qaytarsin.",
        "<code>Main</code> metodida <code>CargoTruck truck = new CargoTruck();</code> tuzib, <code>truck.maxCapacityKg = 1000.0; truck.currentLoadKg = 700.0;</code> bering.",
        "200 kg yuk orting va natijani chop eting: <code>boolean res1 = truck.loadCargo(200.0);</code><br><code>System.out.println(\"200 kg yuklandi: \" + res1 + \" (Jami: \" + truck.currentLoadKg + \" kg)\");</code>",
        "Yana bir bor 200 kg yuk ortishga urinib ko'ring (sig'maydi) va natijani chop eting: <code>boolean res2 = truck.loadCargo(200.0);</code><br><code>System.out.println(\"Ikkinchi 200 kg yuklandi: \" + res2 + \" (Jami: \" + truck.currentLoadKg + \" kg)\");</code>"
      ],
      "en": [
        "Create class <code>CargoTruck</code> with fields <code>double maxCapacityKg;</code> and <code>double currentLoadKg;</code>.",
        "Implement <code>public boolean loadCargo(double weightKg)</code>: if it fits, update current load and return true; otherwise return false.",
        "In <code>main</code>, instantiate <code>CargoTruck truck = new CargoTruck();</code> with 1000.0 max capacity and 700.0 current load.",
        "Load 200 kg and print: <code>System.out.println(\"200 kg yuklandi: \" + res1 + \" (Jami: \" + truck.currentLoadKg + \" kg)\");</code>.",
        "Try loading another 200 kg (fails) and print: <code>System.out.println(\"Ikkinchi 200 kg yuklandi: \" + res2 + \" (Jami: \" + truck.currentLoadKg + \" kg)\");</code>."
      ],
      "ru": [
        "Создайте класс <code>CargoTruck</code> с полями <code>double maxCapacityKg;</code> и <code>double currentLoadKg;</code>.",
        "Реализуйте <code>public boolean loadCargo(double weightKg)</code>: если подходит, обновите текущую нагрузку и верните true; в противном случае верните false.",
        "В <code>main</code> создайте экземпляр <code>CargoTruck truck = new CargoTruck();</code> с максимальной мощностью 1000,0 и текущей нагрузкой 700,0.",
        "Загрузите 200 кг и напечатайте: <code>System.out.println(\"200 kg yuklandi: \" + res1 + \" (Jami: \" + truck.currentLoadKg + \" kg)\");</code>.",
        "Попробуйте загрузить еще 200 кг (не удалось) и выведите: <code>System.out.println(\"Ikkinchi 200 kg yuklandi: \" + res2 + \" (Jami: \" + truck.currentLoadKg + \" kg)\");</code>."
      ]
    }
  },
  {
    "id": 18,
    "tier": 2,
    "tierName": "2-Bosqich: Instans Metodlar va Xatti-harakat",
    "sector": "11-20",
    "title": {
      "uz": "18. Bank Credit — Metodlarni Nomdosh Qilish (Method Overloading)",
      "en": "18. Bank Credit — Method Overloading & Flexible Parameters",
      "ru": "18. Банковский кредит — перегрузка метода и гибкие параметры"
    },
    "scenario": {
      "uz": "[Hayotiy Voqealik & Kontekst]\nBank kredit bo'limida oddiy mijozlarga standart yillik 20% stavka qo'llanilsa, korporativ mijozlarga maxsus chegirmali stavka hisoblanadi. Buning uchun bir xil nomli, ammo har xil parametrli metodlar (Method Overloading) tuziladi.\n\n[Bajarilishi kerak bo'lgan vazifalar (1 dan 5 gacha)]\n1. LoanCalculator klassini tuzing: double principal; maydonini e'lon qiling.\n2. Standart 20% stavkali metodni yozing: public double calculateInterest(int months) { return principal * 0.20 * (months / 12.0); }.\n3. Maxsus stavkali nomdosh metodni overload qiling: public double calculateInterest(int months, double annualRate) { return principal * (annualRate / 100.0) * (months / 12.0); }.\n4. Main metodida LoanCalculator calc = new LoanCalculator(); yarating va calc.principal = 12000000.0; bering.\n5. Har ikkala metodni chaqirib 2 qatorda chop eting:System.out.println(\"Standart foiz (6 oy): \" + calc.calculateInterest(6) + \" so'm\");System.out.println(\"Imtiyozli foiz (6 oy, 14%): \" + calc.calculateInterest(6, 14.0) + \" so'm\");",
      "en": "[Real-World Story & Context]\nA banking loan calculator offers standard 20% annual interest or custom corporate rates using Method Overloading on calculateInterest().\n\n[Step-by-Step Implementation Tasks (1 to 5)]\n1. Create class LoanCalculator with field double principal;.\n2. Implement standard method: public double calculateInterest(int months) { return principal * 0.20 * (months / 12.0); }.\n3. Overload method with custom rate: public double calculateInterest(int months, double annualRate) { return principal * (annualRate / 100.0) * (months / 12.0); }.\n4. In main, instantiate LoanCalculator calc = new LoanCalculator(); and set calc.principal = 12000000.0;.\n5. Print both interest calculations on 2 lines:System.out.println(\"Standart foiz (6 oy): \" + calc.calculateInterest(6) + \" so'm\");System.out.println(\"Imtiyozli foiz (6 oy, 14%): \" + calc.calculateInterest(6, 14.0) + \" so'm\");",
      "ru": "📖 Контекст и описание задачи\nКалькулятор банковского кредита предлагает стандартную годовую процентную ставку 20% или индивидуальные корпоративные ставки с использованием перегрузки метода в методе CalculateInterest().\n\n📋 Пошаговые задачи (от 1 до 5)\n1. Создайте класс <code>LoanCalculator</code> с полем <code>double principal;</code>.\n2. Implement standard method: <code>public double calculateInterest(int months) { return principal * 0.20 * (months / 12.0); }</code>.\n3. Метод перегрузки с пользовательской ставкой: <code>public double calculateInterest(int months, double annualRate) { return principal * (annualRate / 100.0) * (months / 12.0); }</code>.\n4. В <code>main</code> создайте экземпляр <code>LoanCalculator calc = new LoanCalculator();</code> и установите <code>calc.principal = 12000000.0;</code>.\n5. Распечатайте оба расчета процентов в 2 строки:<br><code>System.out.println(\"Standart foiz (6 oy): \" + calc.calculateInterest(6) + \" so'm\");</code><br><code>System.out.println(\"Imtiyozli foiz (6 oy, 14%): \" + calc.calculateInterest(6, 14.0) + \" so'm\");</code>"
    },
    "requirements": {
      "classes": [
        "Loan",
        "Main"
      ],
      "fields": [
        {
          "name": "principal",
          "type": "double"
        }
      ],
      "methods": [
        "calculateInterest"
      ],
      "methodDetails": [
        {
          "name": "calculateInterest",
          "signature": "public double calculateInterest(int months)",
          "params": "int months — kredit muddati (oylar soni)",
          "paramsEn": "int months — loan duration in months",
          "returns": "double (standart 20% yillik stavka bo'yicha hisoblangan foiz summasi)",
          "returnsEn": "double (interest amount at default 20% APR)",
          "logic": "return (principal * 0.20 / 12.0) * months;",
          "logicEn": "return (principal * 0.20 / 12.0) * months;",
          "example": "double f = loan.calculateInterest(6); // 12 mln so'mga 6 oylik 20% stavka = 1200000.0 so'm"
        },
        {
          "name": "calculateInterest (overloaded)",
          "signature": "public double calculateInterest(int months, double customRate)",
          "params": "int months — kredit muddati, double customRate — maxsus imtiyozli foiz stavkasi (masalan: 14.0)",
          "paramsEn": "int months — duration, double customRate — custom annual interest rate percentage (e.g. 14.0)",
          "returns": "double (maxsus stavka bo'yicha hisoblangan foiz summasi)",
          "returnsEn": "double (interest amount at custom annual rate)",
          "logic": "return (principal * (customRate / 100.0) / 12.0) * months;",
          "logicEn": "return (principal * (customRate / 100.0) / 12.0) * months;",
          "example": "double f = loan.calculateInterest(6, 14.0); // 12 mln so'mga 6 oylik 14% stavka = 840000.0 so'm"
        }
      ]
    },
    "starterCode": "class Loan {\n    double principal;\n\n    // calculateInterest metodlarini overload qiling\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        // Har ikkala overload metodni chaqirib ko'ring\n        \n    }\n}",
    "solution": "class Loan {\n    double principal;\n\n    public double calculateInterest(int months) {\n        return (principal * 0.20 / 12.0) * months;\n    }\n\n    public double calculateInterest(int months, double customRate) {\n        return (principal * (customRate / 100.0) / 12.0) * months;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Loan loan = new Loan();\n        loan.principal = 12000000.0; // 12 mln so'm\n\n        double standardFoiz = loan.calculateInterest(6);\n        double imtiyozliFoiz = loan.calculateInterest(6, 14.0); // 14% stavka\n\n        System.out.println(\"Standart foiz (6 oy): \" + standardFoiz + \" so'm\");\n        System.out.println(\"Imtiyozli foiz (6 oy, 14%): \" + imtiyozliFoiz + \" so'm\");\n    }\n}",
    "detailedSolution": {
      "theory": "Metod Overloading — bitta klassda nomi bir xil, lekin parametrlari soni yoki turlari bilan farq qiluvchi bir nechta metodlarni e'lon qilishdir. Kompilyator qaysi metod chaqirilayotganini argumentlarga qarab static tarzda aniqlaydi.",
      "theoryEn": "Method Overloading features identical method names with differing parameter signatures, resolved statically at compile time.",
      "cleanCode": "public double calculateInterest(int months) { ... }\npublic double calculateInterest(int months, double customRate) { ... }",
      "breakdown": [
        "Bitta metod nomi, ikki xil qulaylikdagi parametr to'plami.",
        "Default qiymatlar bilan qisqaroq chaqirish imkoniyati paydo bo'ldi."
      ],
      "pitfalls": "Faqat qaytarish turi (return type) farq qilishi overload hisoblanmaydi — parametrlar farq qilishi shart!",
      "cw2Tip": "CW2 qidiruv tizimida: tovar nomi bo'yicha qidirish, yoki nomi hamda narxi bo'yicha qidirish overload metodlar bilan qilinadi.",
      "theoryRu": "Перегрузка метода имеет одинаковые имена методов с разными сигнатурами параметров, которые разрешаются статически во время компиляции.",
      "pitfallsRu": "Только разница в типе возвращаемого значения не перегружается — параметры должны быть разные!",
      "breakdownRu": [
        "Одно имя метода, два разных набора удобных параметров.",
        "Появился более короткий вызов со значениями по умолчанию."
      ]
    },
    "sampleData": [
      "principal (kredit summasi): 12000000.0 so'm",
      "Yillik foiz: 24.0%",
      "Muddat: 12 oy"
    ],
    "expectedOutput": "Standart foiz (6 oy): 1200000.0 so'm\nImtiyozli foiz (6 oy, 14%): 840000.0000000002 so'm",
    "story": {
      "uz": "Bank kredit bo'limida oddiy mijozlarga standart yillik 20% stavka qo'llanilsa, korporativ mijozlarga maxsus chegirmali stavka hisoblanadi. Buning uchun bir xil nomli, ammo har xil parametrli metodlar (Method Overloading) tuziladi.",
      "en": "A banking loan calculator offers standard 20% annual interest or custom corporate rates using Method Overloading on calculateInterest().",
      "ru": "Калькулятор банковского кредита предлагает стандартную годовую процентную ставку 20% или индивидуальные корпоративные ставки с использованием перегрузки метода в методе CalculateInterest()."
    },
    "steps": {
      "uz": [
        "<code>LoanCalculator</code> klassini tuzing: <code>double principal;</code> maydonini e'lon qiling.",
        "Standart 20% stavkali metodni yozing: <code>public double calculateInterest(int months) { return principal * 0.20 * (months / 12.0); }</code>.",
        "Maxsus stavkali nomdosh metodni overload qiling: <code>public double calculateInterest(int months, double annualRate) { return principal * (annualRate / 100.0) * (months / 12.0); }</code>.",
        "<code>Main</code> metodida <code>LoanCalculator calc = new LoanCalculator();</code> yarating va <code>calc.principal = 12000000.0;</code> bering.",
        "Har ikkala metodni chaqirib 2 qatorda chop eting:<br><code>System.out.println(\"Standart foiz (6 oy): \" + calc.calculateInterest(6) + \" so'm\");</code><br><code>System.out.println(\"Imtiyozli foiz (6 oy, 14%): \" + calc.calculateInterest(6, 14.0) + \" so'm\");</code>"
      ],
      "en": [
        "Create class <code>LoanCalculator</code> with field <code>double principal;</code>.",
        "Implement standard method: <code>public double calculateInterest(int months) { return principal * 0.20 * (months / 12.0); }</code>.",
        "Overload method with custom rate: <code>public double calculateInterest(int months, double annualRate) { return principal * (annualRate / 100.0) * (months / 12.0); }</code>.",
        "In <code>main</code>, instantiate <code>LoanCalculator calc = new LoanCalculator();</code> and set <code>calc.principal = 12000000.0;</code>.",
        "Print both interest calculations on 2 lines:<br><code>System.out.println(\"Standart foiz (6 oy): \" + calc.calculateInterest(6) + \" so'm\");</code><br><code>System.out.println(\"Imtiyozli foiz (6 oy, 14%): \" + calc.calculateInterest(6, 14.0) + \" so'm\");</code>"
      ],
      "ru": [
        "Создайте класс <code>LoanCalculator</code> с полем <code>double principal;</code>.",
        "Implement standard method: <code>public double calculateInterest(int months) { return principal * 0.20 * (months / 12.0); }</code>.",
        "Метод перегрузки с пользовательской ставкой: <code>public double calculateInterest(int months, double annualRate) { return principal * (annualRate / 100.0) * (months / 12.0); }</code>.",
        "В <code>main</code> создайте экземпляр <code>LoanCalculator calc = new LoanCalculator();</code> и установите <code>calc.principal = 12000000.0;</code>.",
        "Распечатайте оба расчета процентов в 2 строки:<br><code>System.out.println(\"Standart foiz (6 oy): \" + calc.calculateInterest(6) + \" so'm\");</code><br><code>System.out.println(\"Imtiyozli foiz (6 oy, 14%): \" + calc.calculateInterest(6, 14.0) + \" so'm\");</code>"
      ]
    }
  },
  {
    "id": 19,
    "tier": 2,
    "tierName": "2-Bosqich: Instans Metodlar va Xatti-harakat",
    "sector": "11-20",
    "title": {
      "uz": "19. Secure Auth — 'UserSession' va Vaqt Cheklovi (Session Timeout)",
      "en": "19. Secure Auth — 'UserSession' & Activity Expiration",
      "ru": "19. Безопасная аутентификация — «UserSession» и срок действия активности"
    },
    "scenario": {
      "uz": "[Hayotiy Voqealik & Kontekst]\nXavfsizlik tizimida foydalanuvchi tizimga kirgan vaqt (sessiya) ma'lum vaqt o'tgach eskirgan (timeout) deb topilishi va yangitdan kirish talab etilishi shart.\n\n[Bajarilishi kerak bo'lgan vazifalar (1 dan 5 gacha)]\n1. UserSession klassini e'lon qiling: String sessionId; va long createdAtMs; maydonlarini qo'shing.\n2. public boolean isExpired(long currentTimeMs, long timeoutDurationMs) metodini yozing: agar (currentTimeMs - createdAtMs) > timeoutDurationMs bo'lsa true, aks holda false qaytarsin.\n3. Main metodida UserSession session = new UserSession(); yarating va sessionId = \"SESS-9901\"; createdAtMs = 1000L; bering.\n4. 1500ms vaqtda tekshiring (timeout = 1000ms): boolean expired1 = session.isExpired(1500L, 1000L); va System.out.println(\"1500-millisekundda eskirganmi: \" + expired1); chop eting.\n5. 2500ms vaqtda tekshiring: boolean expired2 = session.isExpired(2500L, 1000L); va System.out.println(\"2500-millisekundda eskirganmi: \" + expired2); chop eting.",
      "en": "[Real-World Story & Context]\nSecurity gateway validates user session expiration against a timeout threshold in milliseconds to prevent stale token reuse.\n\n[Step-by-Step Implementation Tasks (1 to 5)]\n1. Declare class UserSession with String sessionId; and long createdAtMs;.\n2. Implement public boolean isExpired(long currentTimeMs, long timeoutDurationMs) returning true when elapsed time exceeds timeout.\n3. In main, instantiate UserSession session = new UserSession(); with 1000L timestamp.\n4. Check at 1500ms and print: System.out.println(\"1500-millisekundda eskirganmi: \" + expired1);.\n5. Check at 2500ms and print: System.out.println(\"2500-millisekundda eskirganmi: \" + expired2);.",
      "ru": "📖 Контекст и описание задачи\nШлюз безопасности проверяет истечение срока действия сеанса пользователя по пороговому значению тайм-аута в миллисекундах, чтобы предотвратить повторное использование устаревшего токена.\n\n📋 Пошаговые задачи (от 1 до 5)\n1. Объявите класс <code>UserSession</code> с помощью <code>String sessionId;</code> и <code>long createdAtMs;</code>.\n2. Реализуйте <code>public boolean isExpired(long currentTimeMs, long timeoutDurationMs)</code>, возвращающий true, когда прошедшее время превышает тайм-аут.\n3. В <code>main</code> создайте экземпляр <code>UserSession session = new UserSession();</code> с отметкой времени 1000L.\n4. Проверьте на 1500 мс и напечатайте: <code>System.out.println(\"1500-millisekundda eskirganmi: \" + expired1);</code>.\n5. Проверьте на 2500 мс и напечатайте: <code>System.out.println(\"2500-millisekundda eskirganmi: \" + expired2);</code>."
    },
    "requirements": {
      "classes": [
        "UserSession",
        "Main"
      ],
      "fields": [
        {
          "name": "username",
          "type": "String"
        },
        {
          "name": "lastActiveTime",
          "type": "long"
        }
      ],
      "methods": [
        "touchSession",
        "isExpired"
      ],
      "methodDetails": [
        {
          "name": "touchSession",
          "signature": "public void touchSession(long currentTime)",
          "params": "long currentTime — joriy tizim vaqti (millisekundlarda)",
          "paramsEn": "long currentTime — current epoch timestamp in ms",
          "returns": "void (lastActiveTime maydonini currentTime ga yangilaydi)",
          "returnsEn": "void (updates lastActiveTime = currentTime)",
          "logic": "this.lastActiveTime = currentTime;",
          "logicEn": "this.lastActiveTime = currentTime;",
          "example": "session.touchSession(1500L); // oxirgi faollik vaqti 1500L ga aylanadi"
        },
        {
          "name": "isExpired",
          "signature": "public boolean isExpired(long currentTime, long timeoutMillis)",
          "params": "long currentTime — tekshirish vaqti, long timeoutMillis — maksimal ruxsat etilgan kutish vaqti (masalan: 1000L)",
          "paramsEn": "long currentTime — check time, long timeoutMillis — expiration timeout duration in ms",
          "returns": "boolean (agar o'tgan vaqt timeoutdan katta bo'lsa true, aks holda false)",
          "returnsEn": "boolean (true if elapsed time > timeoutMillis, else false)",
          "logic": "return (currentTime - lastActiveTime) > timeoutMillis;",
          "logicEn": "return (currentTime - lastActiveTime) > timeoutMillis;",
          "example": "boolean exp = session.isExpired(2500L, 1000L); // 2500 - 1000 = 1500 > 1000 bo'lgani uchun true qaytaradi"
        }
      ]
    },
    "starterCode": "class UserSession {\n    String username;\n    long lastActiveTime;\n\n    // touchSession va isExpired metodlarini yozing\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        // Sessiyani sinovdan o'tkazing\n        \n    }\n}",
    "solution": "class UserSession {\n    String username;\n    long lastActiveTime;\n\n    public void touchSession(long currentTime) {\n        this.lastActiveTime = currentTime;\n    }\n\n    public boolean isExpired(long currentTime, long timeoutMillis) {\n        return (currentTime - lastActiveTime) > timeoutMillis;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        UserSession session = new UserSession();\n        session.username = \"ali_dev\";\n        session.lastActiveTime = 1000L;\n\n        // 1500ms o'tganda (timeout = 1000ms bo'lsa)\n        boolean expired1 = session.isExpired(1500L, 1000L); // 500ms o'tdi -> false\n        System.out.println(\"1500-millisekundda eskirganmi: \" + expired1);\n\n        // 2500ms o'tganda\n        boolean expired2 = session.isExpired(2500L, 1000L); // 1500ms o'tdi -> true\n        System.out.println(\"2500-millisekundda eskirganmi: \" + expired2);\n    }\n}",
    "detailedSolution": {
      "theory": "Vaqt bilan ishlashda Java-da millisekundlar 'long' primitiv turi orqali ifodalanadi. 'this.lastActiveTime' orqali joriy ob'yekt maydoniga aniq murojaat qilish o'rganiladi.",
      "theoryEn": "Timestamp manipulation relies on 64-bit 'long' primitives. 'this' explicitly disambiguates instance fields.",
      "cleanCode": "public boolean isExpired(long currentTime, long timeoutMillis) {\n    return (currentTime - lastActiveTime) > timeoutMillis;\n}",
      "breakdown": [
        "Vaqt oraliqlari (delat t) aniq matematik shart bilan hisoblandi.",
        "Sessiyaning eskirganlik holati tekshirildi."
      ],
      "pitfalls": "long sonlar oxiriga 'L' qo'yish unutilsa (masalan 1000L), int deb qabul qilinib katta qiymatlarda overflow bo'lishi mumkin.",
      "cw2Tip": "Foydalanuvchi tizimdan avtomatik chiqib ketishi (Logout) aynan shu algoritm bilan ishlaydi.",
      "theoryRu": "Манипулирование временными метками основано на 64-битных «длинных» примитивах. 'this' явно устраняет неоднозначность полей экземпляра.",
      "pitfallsRu": "Если вы забудете поставить «L» в конце длинных чисел (например, 1000L), его можно принять как целое число и переполнить в больших значениях.",
      "breakdownRu": [
        "Временные интервалы (delat t) рассчитывались с использованием точного математического условия.",
        "Проверено на устаревание сеанса."
      ]
    },
    "sampleData": [
      "username: \"ali_dev\"",
      "lastActiveTime: 1000L",
      "timeoutLimit: 3000L",
      "1-tekshiruv vaqti: 2500L (faol)",
      "2-tekshiruv vaqti: 4500L (muddati o'tgan)"
    ],
    "expectedOutput": "1500-millisekundda eskirganmi: false\n2500-millisekundda eskirganmi: true",
    "story": {
      "uz": "Xavfsizlik tizimida foydalanuvchi tizimga kirgan vaqt (sessiya) ma'lum vaqt o'tgach eskirgan (timeout) deb topilishi va yangitdan kirish talab etilishi shart.",
      "en": "Security gateway validates user session expiration against a timeout threshold in milliseconds to prevent stale token reuse.",
      "ru": "Шлюз безопасности проверяет истечение срока действия сеанса пользователя по пороговому значению тайм-аута в миллисекундах, чтобы предотвратить повторное использование устаревшего токена."
    },
    "steps": {
      "uz": [
        "<code>UserSession</code> klassini e'lon qiling: <code>String sessionId;</code> va <code>long createdAtMs;</code> maydonlarini qo'shing.",
        "<code>public boolean isExpired(long currentTimeMs, long timeoutDurationMs)</code> metodini yozing: agar <code>(currentTimeMs - createdAtMs) > timeoutDurationMs</code> bo'lsa <code>true</code>, aks holda <code>false</code> qaytarsin.",
        "<code>Main</code> metodida <code>UserSession session = new UserSession();</code> yarating va <code>sessionId = \"SESS-9901\"; createdAtMs = 1000L;</code> bering.",
        "1500ms vaqtda tekshiring (timeout = 1000ms): <code>boolean expired1 = session.isExpired(1500L, 1000L);</code> va <code>System.out.println(\"1500-millisekundda eskirganmi: \" + expired1);</code> chop eting.",
        "2500ms vaqtda tekshiring: <code>boolean expired2 = session.isExpired(2500L, 1000L);</code> va <code>System.out.println(\"2500-millisekundda eskirganmi: \" + expired2);</code> chop eting."
      ],
      "en": [
        "Declare class <code>UserSession</code> with <code>String sessionId;</code> and <code>long createdAtMs;</code>.",
        "Implement <code>public boolean isExpired(long currentTimeMs, long timeoutDurationMs)</code> returning true when elapsed time exceeds timeout.",
        "In <code>main</code>, instantiate <code>UserSession session = new UserSession();</code> with 1000L timestamp.",
        "Check at 1500ms and print: <code>System.out.println(\"1500-millisekundda eskirganmi: \" + expired1);</code>.",
        "Check at 2500ms and print: <code>System.out.println(\"2500-millisekundda eskirganmi: \" + expired2);</code>."
      ],
      "ru": [
        "Объявите класс <code>UserSession</code> с помощью <code>String sessionId;</code> и <code>long createdAtMs;</code>.",
        "Реализуйте <code>public boolean isExpired(long currentTimeMs, long timeoutDurationMs)</code>, возвращающий true, когда прошедшее время превышает тайм-аут.",
        "В <code>main</code> создайте экземпляр <code>UserSession session = new UserSession();</code> с отметкой времени 1000L.",
        "Проверьте на 1500 мс и напечатайте: <code>System.out.println(\"1500-millisekundda eskirganmi: \" + expired1);</code>.",
        "Проверьте на 2500 мс и напечатайте: <code>System.out.println(\"2500-millisekundda eskirganmi: \" + expired2);</code>."
      ]
    }
  },
  {
    "id": 20,
    "tier": 2,
    "tierName": "2-Bosqich: Instans Metodlar va Xatti-harakat",
    "sector": "11-20",
    "title": {
      "uz": "20. Express Cafe — 'generateReceipt' Matnli Kvitansiya Metodi (Stage 2 Master)",
      "en": "20. Express Cafe — 'generateReceipt' Formatted String Method (Stage 2 Master)",
      "ru": "20. Express Cafe — метод форматированной строки «generateReceipt» (этап 2, мастер)"
    },
    "scenario": {
      "uz": "[Hayotiy Voqealik & Kontekst]\nExpress Cafe tarmog'ida kassada mijozga taom nomi, narxi, oraliq summasi, 12% soliq va jami summani chiroyli kvitansiya (String) ko'rinishida generatsiya qiluvchi metod kerak.\n\n[Bajarilishi kerak bo'lgan vazifalar (1 dan 5 gacha)]\n1. FoodOrder klassini tuzing: String itemName;, double unitPrice;, int quantity; maydonlarini e'lon qiling.\n2. public String generateReceipt(double taxRate) metodini yozing: subtotal = unitPrice * quantity;, tax = subtotal * (taxRate / 100.0);, total = subtotal + tax; hisoblab, ko'p qatorli chek matnini qaytaring.\n3. Main metodida FoodOrder order = new FoodOrder(); ob'yektini yarating.\n4. Maydonlariga qiymat yuklang: order.itemName = \"Lavash Max\"; order.unitPrice = 38000.0; order.quantity = 2;.\n5. Metodni 12.0% stavka bilan chaqiring va chekni chop eting: String receipt = order.generateReceipt(12.0); System.out.println(receipt);",
      "en": "[Real-World Story & Context]\nExpress Cafe restaurant checkout generates a formatted multi-line receipt string combining item subtotal, sales tax, and final amount.\n\n[Step-by-Step Implementation Tasks (1 to 5)]\n1. Declare class FoodOrder with String itemName;, double unitPrice;, and int quantity;.\n2. Implement public String generateReceipt(double taxRate) computing subtotal, tax, and total, returning the receipt text.\n3. In main, instantiate FoodOrder order = new FoodOrder();.\n4. Assign: order.itemName = \"Lavash Max\"; order.unitPrice = 38000.0; order.quantity = 2;.\n5. Call order.generateReceipt(12.0); and print the output.",
      "ru": "📖 Контекст и описание задачи\nПри оформлении заказа в ресторане Express Cafe генерируется форматированная многострочная строка квитанции, объединяющая промежуточную сумму товара, налог с продаж и окончательную сумму.\n\n📋 Пошаговые задачи (от 1 до 5)\n1. Объявите класс <code>FoodOrder</code> с помощью <code>String itemName;</code>, <code>double unitPrice;</code> и <code>int quantity;</code>.\n2. Реализуйте <code>public String generateReceipt(double taxRate)</code> для вычисления промежуточного итога, налога и итога, возвращая текст квитанции.\n3. В <code>main</code> создайте экземпляр <code>FoodOrder order = new FoodOrder();</code>.\n4. Назначьте: <code>order.itemName = \"Lavash Max\"; order.unitPrice = 38000.0; order.quantity = 2;</code>.\n5. Вызовите <code>order.generateReceipt(12.0);</code> и распечатайте результат."
    },
    "requirements": {
      "classes": [
        "FoodOrder",
        "Main"
      ],
      "fields": [
        {
          "name": "itemName",
          "type": "String"
        },
        {
          "name": "unitPrice",
          "type": "double"
        },
        {
          "name": "quantity",
          "type": "int"
        }
      ],
      "methods": [
        "generateReceipt"
      ],
      "methodDetails": [
        {
          "name": "generateReceipt",
          "signature": "public String generateReceipt(double taxRate)",
          "params": "double taxRate — soliq/QQS foiz stavkasi (masalan: 12.0)",
          "paramsEn": "double taxRate — tax rate percentage (e.g. 12.0)",
          "returns": "String (to'liq formatlangan kvitansiya matni)",
          "returnsEn": "String (formatted receipt invoice text)",
          "logic": "subtotal = unitPrice * quantity; tax = subtotal * (taxRate / 100.0); total = subtotal + tax; ko'p qatorli matnni return qiladi.",
          "logicEn": "Computes subtotal, tax and total, returns multi-line formatted receipt string.",
          "example": "String r = order.generateReceipt(12.0); // 38000 * 2 = 76000 + 12% QQS = 85120.0 so'mlik chek qaytaradi"
        }
      ]
    },
    "starterCode": "class FoodOrder {\n    String itemName;\n    double unitPrice;\n    int quantity;\n\n    // generateReceipt metodini yozing\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        // Buyurtma yaratib, chekni ekranga chiqaring\n        \n    }\n}",
    "solution": "class FoodOrder {\n    String itemName;\n    double unitPrice;\n    int quantity;\n\n    public String generateReceipt(double taxRate) {\n        double subtotal = unitPrice * quantity;\n        double tax = subtotal * (taxRate / 100.0);\n        double total = subtotal + tax;\n\n        return \"--- CHEK ---\\n\" +\n               \"Taom: \" + itemName + \" x \" + quantity + \"\\n\" +\n               \"Oraliq summa: \" + subtotal + \" so'm\\n\" +\n               \"Soliq (\" + taxRate + \"%): \" + tax + \" so'm\\n\" +\n               \"JAMI TO'LOV: \" + total + \" so'm\\n\" +\n               \"------------\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FoodOrder order = new FoodOrder();\n        order.itemName = \"Lavash Max\";\n        order.unitPrice = 38000.0;\n        order.quantity = 2;\n\n        String receipt = order.generateReceipt(12.0); // 12% QQS\n        System.out.println(receipt);\n    }\n}",
    "detailedSolution": {
      "theory": "2-bosqichda biz obyektlar ichiga boy metodlar kiritdik! Lekin e'tibor qiling: `order.itemName = ...`, `order.unitPrice = ...` deb ob'yekt maydonlarini tashqaridan bittalab to'ldirish noqulay va xavfli. Agar biror maydon unutilsa, ob'yekt yarimta holda qoladi. Shu sababli 3-bosqichda ob'yekt yaratilish paytidayoq uni to'liq to'ldiruvchi KONSTRUKTORLARNI o'rganamiz!",
      "theoryEn": "Stage 2 introduced powerful methods. Stage 3 solves the problem of partially initialized state by introducing CONSTRUCTORS.",
      "cleanCode": "public String generateReceipt(double taxRate) { ... }",
      "breakdown": [
        "Metod murakkab formatlangan kvitansiya matnini qaytaradi.",
        "Ob'yekt o'z hisob-kitobini va ko'rinishini to'liq o'zi ta'minlaydi.",
        "Bu topshiriq 3-bosqichdagi konstruktorlarga poydevor yaratadi."
      ],
      "pitfalls": "String birlashtirishda qator tashlash uchun `\\n` belgisidan to'g'ri foydalaning.",
      "cw2Tip": "CW2 Console ilovasining yakuniy bosqichi aynan konsolga chek chiqarishdan iborat.",
      "theoryRu": "На втором этапе были представлены мощные методы. Этап 3 решает проблему частично инициализированного состояния путем введения КОНСТРУКТОРОВ.",
      "pitfallsRu": "Правильно используйте символ `\\n` для создания строки при конкатенации строк.",
      "breakdownRu": [
        "Метод возвращает текст квитанции с расширенным форматированием.",
        "Объект полностью обеспечивает собственный расчет и отображение.",
        "Это задание закладывает основу для конструкторов 3-го уровня."
      ]
    },
    "sampleData": [
      "itemName: \"Lavash Max\"",
      "unitPrice: 38000.0 so'm",
      "quantity: 2 dona"
    ],
    "expectedOutput": "--- CHEK ---\nTaom: Lavash Max x 2\nOraliq summa: 76000.0 so'm\nSoliq (12.0%): 9120.0 so'm\nJAMI TO'LOV: 85120.0 so'm\n------------",
    "story": {
      "uz": "Express Cafe tarmog'ida kassada mijozga taom nomi, narxi, oraliq summasi, 12% soliq va jami summani chiroyli kvitansiya (String) ko'rinishida generatsiya qiluvchi metod kerak.",
      "en": "Express Cafe restaurant checkout generates a formatted multi-line receipt string combining item subtotal, sales tax, and final amount.",
      "ru": "При оформлении заказа в ресторане Express Cafe генерируется форматированная многострочная строка квитанции, объединяющая промежуточную сумму товара, налог с продаж и окончательную сумму."
    },
    "steps": {
      "uz": [
        "<code>FoodOrder</code> klassini tuzing: <code>String itemName;</code>, <code>double unitPrice;</code>, <code>int quantity;</code> maydonlarini e'lon qiling.",
        "<code>public String generateReceipt(double taxRate)</code> metodini yozing: <code>subtotal = unitPrice * quantity;</code>, <code>tax = subtotal * (taxRate / 100.0);</code>, <code>total = subtotal + tax;</code> hisoblab, ko'p qatorli chek matnini qaytaring.",
        "<code>Main</code> metodida <code>FoodOrder order = new FoodOrder();</code> ob'yektini yarating.",
        "Maydonlariga qiymat yuklang: <code>order.itemName = \"Lavash Max\"; order.unitPrice = 38000.0; order.quantity = 2;</code>.",
        "Metodni 12.0% stavka bilan chaqiring va chekni chop eting: <code>String receipt = order.generateReceipt(12.0); System.out.println(receipt);</code>"
      ],
      "en": [
        "Declare class <code>FoodOrder</code> with <code>String itemName;</code>, <code>double unitPrice;</code>, and <code>int quantity;</code>.",
        "Implement <code>public String generateReceipt(double taxRate)</code> computing subtotal, tax, and total, returning the receipt text.",
        "In <code>main</code>, instantiate <code>FoodOrder order = new FoodOrder();</code>.",
        "Assign: <code>order.itemName = \"Lavash Max\"; order.unitPrice = 38000.0; order.quantity = 2;</code>.",
        "Call <code>order.generateReceipt(12.0);</code> and print the output."
      ],
      "ru": [
        "Объявите класс <code>FoodOrder</code> с помощью <code>String itemName;</code>, <code>double unitPrice;</code> и <code>int quantity;</code>.",
        "Реализуйте <code>public String generateReceipt(double taxRate)</code> для вычисления промежуточного итога, налога и итога, возвращая текст квитанции.",
        "В <code>main</code> создайте экземпляр <code>FoodOrder order = new FoodOrder();</code>.",
        "Назначьте: <code>order.itemName = \"Lavash Max\"; order.unitPrice = 38000.0; order.quantity = 2;</code>.",
        "Вызовите <code>order.generateReceipt(12.0);</code> и распечатайте результат."
      ]
    }
  },
  {
    "id": 21,
    "tier": 3,
    "tierName": "3-Bosqich: Konstruktorlar va Hayot Sikli",
    "sector": "21-30",
    "title": {
      "uz": "21. Book Catalog — Parametrlangan Konstruktor va 'this' Kalit So'zi",
      "en": "21. Book Catalog — Parameterized Constructor & 'this' Keyword",
      "ru": "21. Каталог книг — параметризованный конструктор и ключевое слово this."
    },
    "scenario": {
      "uz": "[Hayotiy Voqealik & Kontekst]\nKutubxona elektron katalogida yangi kitob kiritilayotganda uning nomi, muallifi va sahifalar soni majburiy bo'lib, ular parametrlangan konstruktor orqali 'this' yordamida o'zlashtiriladi.\n\n[Bajarilishi kerak bo'lgan vazifalar (1 dan 5 gacha)]\n1. Book klassini tuzing: String title;, String author;, int pages; maydonlarini e'lon qiling.\n2. public Book(String title, String author, int pages) konstruktorini yozing va this.title = title; this.author = author; this.pages = pages; qilib to'ldiring.\n3. Main metodida konstruktor orqali ob'yekt yarating: Book b = new Book(\"O'tkan Kunlar\", \"Abdulla Qodiriy\", 420);.\n4. Maydonlar to'g'ri biriktirilganini tekshiring.\n5. Kitob ma'lumotlarini chop eting: System.out.println(\"Kitob: \" + b.title + \" | Muallif: \" + b.author + \" | Sahifa: \" + b.pages);",
      "en": "[Real-World Story & Context]\nIn a library catalog system, adding a book mandates title, author, and page count during instantiation using a parameterized constructor with the 'this' keyword.\n\n[Step-by-Step Implementation Tasks (1 to 5)]\n1. Declare class Book with String title;, String author;, and int pages;.\n2. Implement public Book(String title, String author, int pages) assigning fields via this.\n3. In main, instantiate: Book b = new Book(\"O'tkan Kunlar\", \"Abdulla Qodiriy\", 420);.\n4. Verify all field assignments.\n5. Print book details: System.out.println(\"Kitob: \" + b.title + \" | Muallif: \" + b.author + \" | Sahifa: \" + b.pages);",
      "ru": "📖 Контекст и описание задачи\nВ системе каталога библиотеки добавление книги требует названия, автора и количества страниц во время создания экземпляра с использованием параметризованного конструктора с ключевым словом «this».\n\n📋 Пошаговые задачи (от 1 до 5)\n1. Объявите класс <code>Book</code> с помощью <code>String title;</code>, <code>String author;</code> и <code>int pages;</code>.\n2. Implement <code>public Book(String title, String author, int pages)</code> assigning fields via <code>this</code>.\n3. В <code>main</code> создайте экземпляр: <code>Book b = new Book(\"O'tkan Kunlar\", \"Abdulla Qodiriy\", 420);</code>.\n4. Проверьте все назначения полей.\n5. Print book details: <code>System.out.println(\"Kitob: \" + b.title + \" | Muallif: \" + b.author + \" | Sahifa: \" + b.pages);</code>"
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
        },
        {
          "name": "pages",
          "type": "int"
        }
      ],
      "constructors": [
        "Book"
      ]
    },
    "starterCode": "class Book {\n    String title;\n    String author;\n    int pages;\n\n    // Parametrlangan konstruktorni yozing\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        // new Book(...) orqali kitob yarating\n        \n    }\n}",
    "solution": "class Book {\n    String title;\n    String author;\n    int pages;\n\n    public Book(String title, String author, int pages) {\n        this.title = title;\n        this.author = author;\n        this.pages = pages;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Book b = new Book(\"O'tkan Kunlar\", \"Abdulla Qodiriy\", 420);\n        System.out.println(\"Kitob: \" + b.title + \" | Muallif: \" + b.author + \" | Sahifa: \" + b.pages);\n    }\n}",
    "detailedSolution": {
      "theory": "Konstruktor — ob'yekt Heap xotirada 'new' orqali yaratilayotgan paytda avtomatik chaqiriladigan maxsus blokdir. Uning nomi klass nomi bilan bir xil bo'ladi va hech qanday qaytarish turiga (void ham emas) ega bo'lmaydi. 'this.title = title' ifodasi parametr nomini klass maydoni nomidan ajratish (shadowing resolution) uchun xizmat qiladi.",
      "theoryEn": "Constructors run automatically during allocation via 'new'. They share the class name and have no return type.",
      "cleanCode": "public Book(String title, String author, int pages) {\n    this.title = title;\n    this.author = author;\n    this.pages = pages;\n}",
      "breakdown": [
        "Ob'yekt bir qator kod bilan to'liq va to'g'ri holatda yaratiladi.",
        "`this` kalit so'zi hozir yaratilayotgan joriy nusxaning maydoniga ishora qiladi."
      ],
      "pitfalls": "Konstruktor oldiga tasodifan 'void' yozib qo'ysangiz, u oddiy metodga aylanadi va konstruktor bo'lmay qoladi!",
      "cw2Tip": "CW2 barcha domen klasslarida konstruktorlar orqali ob'yekt tuzish majburiy hisoblanadi.",
      "theoryRu": "Конструкторы запускаются автоматически во время выделения через «новый». Они имеют общее имя класса и не имеют возвращаемого типа.",
      "pitfallsRu": "Если вы случайно поставили «void» перед конструктором, он станет простым методом и перестанет быть конструктором!",
      "breakdownRu": [
        "Ob'yekt bir qator kod bilan to'liq va to'g'ri holatda yaratiladi.",
        "Ключевое слово `this` относится к области текущей копии, которая создается в данный момент."
      ]
    },
    "sampleData": [
      "title: \"O'tkan Kunlar\"",
      "author: \"Abdulla Qodiriy\"",
      "pages: 420"
    ],
    "expectedOutput": "Kitob: O'tkan Kunlar | Muallif: Abdulla Qodiriy | Sahifa: 420",
    "story": {
      "uz": "Kutubxona elektron katalogida yangi kitob kiritilayotganda uning nomi, muallifi va sahifalar soni majburiy bo'lib, ular parametrlangan konstruktor orqali 'this' yordamida o'zlashtiriladi.",
      "en": "In a library catalog system, adding a book mandates title, author, and page count during instantiation using a parameterized constructor with the 'this' keyword.",
      "ru": "В системе каталога библиотеки добавление книги требует названия, автора и количества страниц во время создания экземпляра с использованием параметризованного конструктора с ключевым словом «this»."
    },
    "steps": {
      "uz": [
        "<code>Book</code> klassini tuzing: <code>String title;</code>, <code>String author;</code>, <code>int pages;</code> maydonlarini e'lon qiling.",
        "<code>public Book(String title, String author, int pages)</code> konstruktorini yozing va <code>this.title = title; this.author = author; this.pages = pages;</code> qilib to'ldiring.",
        "<code>Main</code> metodida konstruktor orqali ob'yekt yarating: <code>Book b = new Book(\"O'tkan Kunlar\", \"Abdulla Qodiriy\", 420);</code>.",
        "Maydonlar to'g'ri biriktirilganini tekshiring.",
        "Kitob ma'lumotlarini chop eting: <code>System.out.println(\"Kitob: \" + b.title + \" | Muallif: \" + b.author + \" | Sahifa: \" + b.pages);</code>"
      ],
      "en": [
        "Declare class <code>Book</code> with <code>String title;</code>, <code>String author;</code>, and <code>int pages;</code>.",
        "Implement <code>public Book(String title, String author, int pages)</code> assigning fields via <code>this</code>.",
        "In <code>main</code>, instantiate: <code>Book b = new Book(\"O'tkan Kunlar\", \"Abdulla Qodiriy\", 420);</code>.",
        "Verify all field assignments.",
        "Print book details: <code>System.out.println(\"Kitob: \" + b.title + \" | Muallif: \" + b.author + \" | Sahifa: \" + b.pages);</code>"
      ],
      "ru": [
        "Объявите класс <code>Book</code> с помощью <code>String title;</code>, <code>String author;</code> и <code>int pages;</code>.",
        "Implement <code>public Book(String title, String author, int pages)</code> assigning fields via <code>this</code>.",
        "В <code>main</code> создайте экземпляр: <code>Book b = new Book(\"O'tkan Kunlar\", \"Abdulla Qodiriy\", 420);</code>.",
        "Проверьте все назначения полей.",
        "Print book details: <code>System.out.println(\"Kitob: \" + b.title + \" | Muallif: \" + b.author + \" | Sahifa: \" + b.pages);</code>"
      ]
    }
  },
  {
    "id": 22,
    "tier": 3,
    "tierName": "3-Bosqich: Konstruktorlar va Hayot Sikli",
    "sector": "21-30",
    "title": {
      "uz": "22. Account User — Konstruktor Overloading (Standart va To'liq)",
      "en": "22. Account User — Constructor Overloading (Default & Full)",
      "ru": "22. Пользователь учетной записи — перегрузка конструктора (по умолчанию и полная версия)"
    },
    "scenario": {
      "uz": "[Hayotiy Voqealik & Kontekst]\nFoydalanuvchi akkaunti yaratilayotganda roli kiritilmasa avtomatik 'USER' bo'lishi, maxsus kiritilsa o'sha rol berilishi uchun konstruktorni nomdosh qilish (Constructor Overloading) qo'llaniladi.\n\n[Bajarilishi kerak bo'lgan vazifalar (1 dan 5 gacha)]\n1. User klassini tuzing: String username;, String email;, String role;.\n2. 2 parametrli konstruktor yozing: public User(String username, String email) va role = \"USER\"; qilib o'rnating.\n3. 3 parametrli konstruktorni overload qiling: public User(String username, String email, String role).\n4. Main metodida ikkita ob'yekt yarating: User u1 = new User(\"nodirbek\", \"nodir@wiut.uz\"); va User u2 = new User(\"admin_ada\", \"ada@wiut.uz\", \"ADMIN\");.\n5. Har ikkala foydalanuvchini chop eting:System.out.println(\"Foydalanuvchi 1: \" + u1.username + \" (\" + u1.role + \")\");System.out.println(\"Foydalanuvchi 2: \" + u2.username + \" (\" + u2.role + \")\");",
      "en": "[Real-World Story & Context]\nUser registration defaults role to 'USER' unless explicitly specified, implemented via Constructor Overloading.\n\n[Step-by-Step Implementation Tasks (1 to 5)]\n1. Declare class User with fields username, email, and role.\n2. Implement 2-arg constructor defaulting role to 'USER'.\n3. Implement 3-arg constructor setting custom role.\n4. In main, instantiate u1 (2-arg) and u2 (3-arg).\n5. Print both users on 2 lines.",
      "ru": "📖 Контекст и описание задачи\nПри регистрации пользователя по умолчанию используется роль «ПОЛЬЗОВАТЕЛЬ», если это явно не указано и реализовано через перегрузку конструктора.\n\n📋 Пошаговые задачи (от 1 до 5)\n1. Объявите класс <code>User</code> с полями <code>username</code>, <code>email</code> и <code>role</code>.\n2. Implement 2-arg constructor defaulting role to 'USER'.\n3. Реализуйте конструктор с 3 аргументами, устанавливающий пользовательскую роль.\n4. В <code>main</code> создайте экземпляры <code>u1</code> (2 аргумента) и <code>u2</code> (3 аргумента).\n5. Напечатайте обоих пользователей в 2 строки."
    },
    "requirements": {
      "classes": [
        "User",
        "Main"
      ],
      "fields": [
        {
          "name": "username",
          "type": "String"
        },
        {
          "name": "email",
          "type": "String"
        },
        {
          "name": "role",
          "type": "String"
        }
      ],
      "constructors": [
        "User"
      ]
    },
    "starterCode": "class User {\n    String username;\n    String email;\n    String role;\n\n    // 2 ta konstruktorni overload qiling\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        // Ikkala konstruktor orqali alohida foydalanuvchilar yarating\n        \n    }\n}",
    "solution": "class User {\n    String username;\n    String email;\n    String role;\n\n    public User(String username, String email) {\n        this.username = username;\n        this.email = email;\n        this.role = \"USER\";\n    }\n\n    public User(String username, String email, String role) {\n        this.username = username;\n        this.email = email;\n        this.role = role;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        User u1 = new User(\"nodirbek\", \"nodir@wiut.uz\");\n        User u2 = new User(\"admin_ada\", \"ada@wiut.uz\", \"ADMIN\");\n\n        System.out.println(\"Foydalanuvchi 1: \" + u1.username + \" (\" + u1.role + \")\");\n        System.out.println(\"Foydalanuvchi 2: \" + u2.username + \" (\" + u2.role + \")\");\n    }\n}",
    "detailedSolution": {
      "theory": "Konstruktorlarni overload qilish dasturchiga ob'yektni turli vaziyatlarda (masalan, to'liq ma'lumot mavjud bo'lganda yoki faqat boshlang'ich qismlari ma'lum bo'lganda) moslashuvchan yaratish imkonini beradi.",
      "theoryEn": "Constructor overloading provides flexible instantiation pathways with sensible default state fallbacks.",
      "cleanCode": "public User(String username, String email) { ... }\npublic User(String username, String email, String role) { ... }",
      "breakdown": [
        "Oddiy foydalanuvchilar uchun 2 ta parametr yetarli.",
        "Maxsus ma'murlar uchun 3 ta parametr bilan rol berish mumkin."
      ],
      "pitfalls": "Agar klassda kamida 1 ta maxsus konstruktor yozilsa, Java standart bo'sh konstruktorni ('new User()') avtomatik taqdim etmay qo'yadi.",
      "cw2Tip": "Buyurtmachiga buyurtma berishda manzil ko'rsatilgan yoki ko'rsatilmagan variantlarni qo'llashda asqotadi.",
      "theoryRu": "Перегрузка конструктора обеспечивает гибкие пути создания экземпляров с разумными резервными состояниями по умолчанию.",
      "pitfallsRu": "Java не предоставляет автоматически пустой конструктор по умолчанию («новый пользователь()»), если в классе написан хотя бы один пользовательский конструктор.",
      "breakdownRu": [
        "Обычным пользователям достаточно двух параметров.",
        "Специальным администраторам роль можно назначить с 3 параметрами."
      ]
    },
    "sampleData": [
      "1-foydalanuvchi -> username: \"nodirbek\", email: \"nodir@wiut.uz\" (standart: USER)",
      "2-foydalanuvchi -> username: \"admin_ada\", email: \"ada@wiut.uz\", role: \"ADMIN\""
    ],
    "expectedOutput": "Foydalanuvchi 1: nodirbek (USER)\nFoydalanuvchi 2: admin_ada (ADMIN)",
    "story": {
      "uz": "Foydalanuvchi akkaunti yaratilayotganda roli kiritilmasa avtomatik 'USER' bo'lishi, maxsus kiritilsa o'sha rol berilishi uchun konstruktorni nomdosh qilish (Constructor Overloading) qo'llaniladi.",
      "en": "User registration defaults role to 'USER' unless explicitly specified, implemented via Constructor Overloading.",
      "ru": "При регистрации пользователя по умолчанию используется роль «ПОЛЬЗОВАТЕЛЬ», если это явно не указано и реализовано через перегрузку конструктора."
    },
    "steps": {
      "uz": [
        "<code>User</code> klassini tuzing: <code>String username;</code>, <code>String email;</code>, <code>String role;</code>.",
        "2 parametrli konstruktor yozing: <code>public User(String username, String email)</code> va <code>role = \"USER\";</code> qilib o'rnating.",
        "3 parametrli konstruktorni overload qiling: <code>public User(String username, String email, String role)</code>.",
        "<code>Main</code> metodida ikkita ob'yekt yarating: <code>User u1 = new User(\"nodirbek\", \"nodir@wiut.uz\");</code> va <code>User u2 = new User(\"admin_ada\", \"ada@wiut.uz\", \"ADMIN\");</code>.",
        "Har ikkala foydalanuvchini chop eting:<br><code>System.out.println(\"Foydalanuvchi 1: \" + u1.username + \" (\" + u1.role + \")\");</code><br><code>System.out.println(\"Foydalanuvchi 2: \" + u2.username + \" (\" + u2.role + \")\");</code>"
      ],
      "en": [
        "Declare class <code>User</code> with fields <code>username</code>, <code>email</code>, and <code>role</code>.",
        "Implement 2-arg constructor defaulting role to 'USER'.",
        "Implement 3-arg constructor setting custom role.",
        "In <code>main</code>, instantiate <code>u1</code> (2-arg) and <code>u2</code> (3-arg).",
        "Print both users on 2 lines."
      ],
      "ru": [
        "Объявите класс <code>User</code> с полями <code>username</code>, <code>email</code> и <code>role</code>.",
        "Implement 2-arg constructor defaulting role to 'USER'.",
        "Реализуйте конструктор с 3 аргументами, устанавливающий пользовательскую роль.",
        "В <code>main</code> создайте экземпляры <code>u1</code> (2 аргумента) и <code>u2</code> (3 аргумента).",
        "Напечатайте обоих пользователей в 2 строки."
      ]
    }
  },
  {
    "id": 23,
    "tier": 3,
    "tierName": "3-Bosqich: Konstruktorlar va Hayot Sikli",
    "sector": "21-30",
    "title": {
      "uz": "23. Debit Card — Konstruktorlar Zanjiri ('this()' Chaining)",
      "en": "23. Debit Card — Constructor Chaining via 'this()'",
      "ru": "23. Дебетовая карта — цепочка конструкторов с помощью this()."
    },
    "scenario": {
      "uz": "[Hayotiy Voqealik & Kontekst]\nBank kartasi ochilganda balans sukut bo'yicha 0.0 UZS bilan boshlanadi. Kodni takrorlamaslik (DRY) uchun bir konstruktordan ikkinchisiga 'this()' zanjiri (Chaining) orqali murojaat qilinadi.\n\n[Bajarilishi kerak bo'lgan vazifalar (1 dan 5 gacha)]\n1. DebitCard klassini tuzing: String cardNumber;, String ownerName;, double balance;, String currency;.\n2. 4 parametrli to'liq konstruktorni e'lon qiling va maydonlarga qiymat bering.\n3. 2 parametrli konstruktorni tuzib, 'this()' zanjirini chaqiring: public DebitCard(String cardNumber, String ownerName) { this(cardNumber, ownerName, 0.0, \"UZS\"); }.\n4. Main metodida 2 parametrli konstruktor orqali karta oching: DebitCard card = new DebitCard(\"8600123456789012\", \"Kamron Bek\");.\n5. Karta ma'lumotlarini chop eting: System.out.println(\"Karta: \" + card.cardNumber + \" | Egasi: \" + card.ownerName + \" | Balans: \" + card.balance + \" \" + card.currency);",
      "en": "[Real-World Story & Context]\nA debit card defaults to 0.0 UZS balance. To avoid duplicating initialization code, invoke the master constructor using constructor chaining ('this()').\n\n[Step-by-Step Implementation Tasks (1 to 5)]\n1. Create class DebitCard with fields for number, owner, balance, currency.\n2. Implement 4-parameter master constructor.\n3. Implement 2-parameter constructor delegating via this(cardNumber, ownerName, 0.0, \"UZS\");.\n4. In main, instantiate: DebitCard card = new DebitCard(\"8600123456789012\", \"Kamron Bek\");.\n5. Print card details matching expected output.",
      "ru": "📖 Контекст и описание задачи\nПо умолчанию баланс дебетовой карты составляет 0,0 сум. Чтобы избежать дублирования кода инициализации, вызовите главный конструктор, используя цепочку конструкторов («this()»).\n\n📋 Пошаговые задачи (от 1 до 5)\n1. Создайте класс <code>DebitCard</code> с полями для номера, владельца, баланса и валюты.\n2. Implement 4-parameter master constructor.\n3. Implement 2-parameter constructor delegating via <code>this(cardNumber, ownerName, 0.0, \"UZS\");</code>.\n4. In <code>main</code>, instantiate: <code>DebitCard card = new DebitCard(\"8600123456789012\", \"Kamron Bek\");</code>.\n5. Распечатайте данные карты, соответствующие ожидаемому результату."
    },
    "requirements": {
      "classes": [
        "DebitCard",
        "Main"
      ],
      "fields": [
        {
          "name": "cardNumber",
          "type": "String"
        },
        {
          "name": "ownerName",
          "type": "String"
        },
        {
          "name": "balance",
          "type": "double"
        },
        {
          "name": "currency",
          "type": "String"
        }
      ],
      "constructors": [
        "DebitCard"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class DebitCard {\n    String cardNumber;\n    String ownerName;\n    double balance;\n    String currency;\n\n    // 4 ta parametrli to'liq konstruktorni yozing\n    \n    // 2 ta parametrli konstruktorda this(...) orqali zanjir qiling\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        // Karta yarating va parametrlarini ko'ring\n        \n    }\n}",
    "solution": "class DebitCard {\n    String cardNumber;\n    String ownerName;\n    double balance;\n    String currency;\n\n    public DebitCard(String cardNumber, String ownerName, double balance, String currency) {\n        this.cardNumber = cardNumber;\n        this.ownerName = ownerName;\n        this.balance = balance;\n        this.currency = currency;\n    }\n\n    public DebitCard(String cardNumber, String ownerName) {\n        this(cardNumber, ownerName, 0.0, \"UZS\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DebitCard card = new DebitCard(\"8600123456789012\", \"Kamron Bek\");\n        System.out.println(\"Karta: \" + card.cardNumber + \" | Egasi: \" + card.ownerName + \" | Balans: \" + card.balance + \" \" + card.currency);\n    }\n}",
    "detailedSolution": {
      "theory": "'this(...)' ifodasi joriy klassning boshqa bir konstruktorini chaqiradi. Eng muhim qoida: 'this(...)' chaqiruvi konstruktor tanasidagi birinchi buyruq (first statement) bo'lishi shart! Bu kod takrorlanishini keskin kamaytiradi.",
      "theoryEn": "'this(...)' chains instantiation logic to master constructors, strictly mandatory as the first statement in the body.",
      "cleanCode": "public DebitCard(String cardNumber, String ownerName) {\n    this(cardNumber, ownerName, 0.0, \"UZS\");\n}",
      "breakdown": [
        "Initsializatsiya mantiqi faqat bitta bosh konstruktorda jamlangan.",
        "Qolgan konstruktorlar 'this(...)' orqali unga tayanadi."
      ],
      "pitfalls": "'this(...)' ni birinchi qatordan keyin yozsangiz, 'call to this must be first statement in constructor' xatoligi beradi.",
      "cw2Tip": "Professor Ada Clean Code va SOLID tamoyillari bo'yicha konstruktor zanjirini yuqori baholaydi.",
      "theoryRu": "'this(...)' связывает логику создания экземпляров с главными конструкторами, что строго обязательно в качестве первого оператора в теле.",
      "pitfallsRu": "Если вы напишете «this(...)» после первой строки, это выдаст ошибку «вызов этого должен быть первым оператором в конструкторе».",
      "breakdownRu": [
        "Логика инициализации сосредоточена только в одном главном конструкторе.",
        "Остальные конструкторы полагаются на него через «this(...)»."
      ]
    },
    "sampleData": [
      "cardNumber: \"8600123456789012\"",
      "cardHolder: \"Kamron Bek\"",
      "Boshlang'ich balans: 0.0 so'm, valyuta: \"UZS\""
    ],
    "expectedOutput": "Karta: 8600123456789012 | Egasi: Kamron Bek | Balans: 0.0 UZS",
    "story": {
      "uz": "Bank kartasi ochilganda balans sukut bo'yicha 0.0 UZS bilan boshlanadi. Kodni takrorlamaslik (DRY) uchun bir konstruktordan ikkinchisiga 'this()' zanjiri (Chaining) orqali murojaat qilinadi.",
      "en": "A debit card defaults to 0.0 UZS balance. To avoid duplicating initialization code, invoke the master constructor using constructor chaining ('this()').",
      "ru": "По умолчанию баланс дебетовой карты составляет 0,0 сум. Чтобы избежать дублирования кода инициализации, вызовите главный конструктор, используя цепочку конструкторов («this()»)."
    },
    "steps": {
      "uz": [
        "<code>DebitCard</code> klassini tuzing: <code>String cardNumber;</code>, <code>String ownerName;</code>, <code>double balance;</code>, <code>String currency;</code>.",
        "4 parametrli to'liq konstruktorni e'lon qiling va maydonlarga qiymat bering.",
        "2 parametrli konstruktorni tuzib, 'this()' zanjirini chaqiring: <code>public DebitCard(String cardNumber, String ownerName) { this(cardNumber, ownerName, 0.0, \"UZS\"); }</code>.",
        "<code>Main</code> metodida 2 parametrli konstruktor orqali karta oching: <code>DebitCard card = new DebitCard(\"8600123456789012\", \"Kamron Bek\");</code>.",
        "Karta ma'lumotlarini chop eting: <code>System.out.println(\"Karta: \" + card.cardNumber + \" | Egasi: \" + card.ownerName + \" | Balans: \" + card.balance + \" \" + card.currency);</code>"
      ],
      "en": [
        "Create class <code>DebitCard</code> with fields for number, owner, balance, currency.",
        "Implement 4-parameter master constructor.",
        "Implement 2-parameter constructor delegating via <code>this(cardNumber, ownerName, 0.0, \"UZS\");</code>.",
        "In <code>main</code>, instantiate: <code>DebitCard card = new DebitCard(\"8600123456789012\", \"Kamron Bek\");</code>.",
        "Print card details matching expected output."
      ],
      "ru": [
        "Создайте класс <code>DebitCard</code> с полями для номера, владельца, баланса и валюты.",
        "Implement 4-parameter master constructor.",
        "Implement 2-parameter constructor delegating via <code>this(cardNumber, ownerName, 0.0, \"UZS\");</code>.",
        "In <code>main</code>, instantiate: <code>DebitCard card = new DebitCard(\"8600123456789012\", \"Kamron Bek\");</code>.",
        "Распечатайте данные карты, соответствующие ожидаемому результату."
      ]
    }
  },
  {
    "id": 24,
    "tier": 3,
    "tierName": "3-Bosqich: Konstruktorlar va Hayot Sikli",
    "sector": "21-30",
    "title": {
      "uz": "24. Smartphone — Standart (No-Arg) va Maxsus Konstruktorlar",
      "en": "24. Smartphone — Default (No-Arg) & Custom Constructors",
      "ru": "24. Смартфон — значения по умолчанию (без аргументов) и пользовательские конструкторы"
    },
    "scenario": {
      "uz": "[Hayotiy Voqealik & Kontekst]\nElektronika do'koni inventarida nomsiz standart smartfonlar (Generic, 64GB, $150.0) va aniq parametrli modellar uchun ham bo'sh (no-arg), ham parametrli konstruktorlar talab qilinadi.\n\n[Bajarilishi kerak bo'lgan vazifalar (1 dan 5 gacha)]\n1. Smartphone klassini yarating: String brand;, int storageGb;, double price;.\n2. Bo'sh no-arg konstruktorni yozing: this.brand = \"Generic\"; this.storageGb = 64; this.price = 150.0;.\n3. Parametrli konstruktorni yozing: public Smartphone(String brand, int storageGb, double price).\n4. Main metodida ikkita smartfon yarating: Smartphone phone1 = new Smartphone(); va Smartphone phone2 = new Smartphone(\"Samsung Galaxy S24\", 256, 950.0);.\n5. Har ikkala modelni 2 qatorda chop eting:System.out.println(\"Model 1: \" + phone1.brand + \" (\" + phone1.storageGb + \"GB) - $\" + phone1.price);System.out.println(\"Model 2: \" + phone2.brand + \" (\" + phone2.storageGb + \"GB) - $\" + phone2.price);",
      "en": "[Real-World Story & Context]\nAn electronics inventory manages generic entry-level phones via a default no-argument constructor and flagship devices via a parameterized constructor.\n\n[Step-by-Step Implementation Tasks (1 to 5)]\n1. Declare class Smartphone with brand, storage, price.\n2. Implement no-arg constructor setting Generic, 64GB, 150.0.\n3. Implement parameterized constructor.\n4. Instantiate phone1 (no-arg) and phone2 (parameterized).\n5. Print both devices on 2 lines.",
      "ru": "📖 Контекст и описание задачи\nИнвентаризация электроники управляет универсальными телефонами начального уровня с помощью конструктора без аргументов по умолчанию, а флагманскими устройствами — с помощью параметризованного конструктора.\n\n📋 Пошаговые задачи (от 1 до 5)\n1. Укажите класс <code>Smartphone</code> с указанием марки, места хранения, цены.\n2. Реализуйте настройку конструктора без аргументов Generic, 64 ГБ, 150.0.0.\n3. Реализуйте параметризованный конструктор.\n4. Создайте экземпляры <code>phone1</code> (без аргументов) и <code>phone2</code> (параметризованные).\n5. Print both devices on 2 lines."
    },
    "requirements": {
      "classes": [
        "Smartphone",
        "Main"
      ],
      "fields": [
        {
          "name": "brand",
          "type": "String"
        },
        {
          "name": "storageGb",
          "type": "int"
        },
        {
          "name": "price",
          "type": "double"
        }
      ],
      "constructors": [
        "Smartphone"
      ]
    },
    "starterCode": "class Smartphone {\n    String brand;\n    int storageGb;\n    double price;\n\n    // No-arg (bo'sh) va parametrli konstruktorlarni yozing\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        // Ikkala usulda smartfon yarating\n        \n    }\n}",
    "solution": "class Smartphone {\n    String brand;\n    int storageGb;\n    double price;\n\n    public Smartphone() {\n        this.brand = \"Generic\";\n        this.storageGb = 64;\n        this.price = 150.0;\n    }\n\n    public Smartphone(String brand, int storageGb, double price) {\n        this.brand = brand;\n        this.storageGb = storageGb;\n        this.price = price;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Smartphone phone1 = new Smartphone();\n        Smartphone phone2 = new Smartphone(\"Samsung Galaxy S24\", 256, 950.0);\n\n        System.out.println(\"Model 1: \" + phone1.brand + \" (\" + phone1.storageGb + \"GB) - $\" + phone1.price);\n        System.out.println(\"Model 2: \" + phone2.brand + \" (\" + phone2.storageGb + \"GB) - $\" + phone2.price);\n    }\n}",
    "detailedSolution": {
      "theory": "No-arg konstruktor parametr qabul qilmaydi. Agar siz parametrli konstruktor yozganingizdan keyin ham 'new Smartphone()' qilmoqchi bo'lsangiz, bo'sh konstruktorni qo'lda yozib qo'yishingiz shart.",
      "theoryEn": "A no-arg constructor must be explicitly declared if parameterized constructors are introduced.",
      "cleanCode": "public Smartphone() { ... }\npublic Smartphone(String brand, int storageGb, double price) { ... }",
      "breakdown": [
        "Standart holat (default state) xavfsiz ta'minlandi.",
        "Parametrli versiya esa erkin sozlash imkonini berdi."
      ],
      "pitfalls": "Bo'sh konstruktor yozishni unutib 'new Smartphone()' chaqirilsa, dastur kompilyatsiyadan o'tmaydi.",
      "cw2Tip": "JavaFX yoki konsolli menyularda ob'yektlarni avval bo'sh yaratib, keyin to'ldirishda no-arg kerak bo'ladi.",
      "theoryRu": "Конструктор без аргументов должен быть явно объявлен, если вводятся параметризованные конструкторы.",
      "pitfallsRu": "Если «new Smartphone()» вызывается без написания пустого конструктора, программа не скомпилируется.",
      "breakdownRu": [
        "Состояние по умолчанию защищено.",
        "Версия параметра допускала свободную настройку."
      ]
    },
    "sampleData": [
      "model: \"Samsung Galaxy S24\"",
      "storageGb: 256 GB",
      "price: 950.0"
    ],
    "expectedOutput": "Model 1: Generic (64GB) - $150.0\nModel 2: Samsung Galaxy S24 (256GB) - $950.0",
    "story": {
      "uz": "Elektronika do'koni inventarida nomsiz standart smartfonlar (Generic, 64GB, $150.0) va aniq parametrli modellar uchun ham bo'sh (no-arg), ham parametrli konstruktorlar talab qilinadi.",
      "en": "An electronics inventory manages generic entry-level phones via a default no-argument constructor and flagship devices via a parameterized constructor.",
      "ru": "Инвентаризация электроники управляет универсальными телефонами начального уровня с помощью конструктора без аргументов по умолчанию, а флагманскими устройствами — с помощью параметризованного конструктора."
    },
    "steps": {
      "uz": [
        "<code>Smartphone</code> klassini yarating: <code>String brand;</code>, <code>int storageGb;</code>, <code>double price;</code>.",
        "Bo'sh no-arg konstruktorni yozing: <code>this.brand = \"Generic\"; this.storageGb = 64; this.price = 150.0;</code>.",
        "Parametrli konstruktorni yozing: <code>public Smartphone(String brand, int storageGb, double price)</code>.",
        "<code>Main</code> metodida ikkita smartfon yarating: <code>Smartphone phone1 = new Smartphone();</code> va <code>Smartphone phone2 = new Smartphone(\"Samsung Galaxy S24\", 256, 950.0);</code>.",
        "Har ikkala modelni 2 qatorda chop eting:<br><code>System.out.println(\"Model 1: \" + phone1.brand + \" (\" + phone1.storageGb + \"GB) - $\" + phone1.price);</code><br><code>System.out.println(\"Model 2: \" + phone2.brand + \" (\" + phone2.storageGb + \"GB) - $\" + phone2.price);</code>"
      ],
      "en": [
        "Declare class <code>Smartphone</code> with brand, storage, price.",
        "Implement no-arg constructor setting Generic, 64GB, 150.0.",
        "Implement parameterized constructor.",
        "Instantiate <code>phone1</code> (no-arg) and <code>phone2</code> (parameterized).",
        "Print both devices on 2 lines."
      ],
      "ru": [
        "Укажите класс <code>Smartphone</code> с указанием марки, места хранения, цены.",
        "Реализуйте настройку конструктора без аргументов Generic, 64 ГБ, 150.0.0.",
        "Реализуйте параметризованный конструктор.",
        "Создайте экземпляры <code>phone1</code> (без аргументов) и <code>phone2</code> (параметризованные).",
        "Print both devices on 2 lines."
      ]
    }
  },
  {
    "id": 25,
    "tier": 3,
    "tierName": "3-Bosqich: Konstruktorlar va Hayot Sikli",
    "sector": "21-30",
    "title": {
      "uz": "25. University Course — Konstruktor Ichida Majburiy Himoyaviy Qoida",
      "en": "25. University Course — Defensive Validation Inside Constructor",
      "ru": "25. Университетский курс — Защитная валидация внутри конструктора"
    },
    "scenario": {
      "uz": "[Hayotiy Voqealik & Kontekst]\nUniversitet kursining talabalar sig'imi hech qachon 0 yoki manfiy bo'lishi mumkin emas. Noto'g'ri kiritilgan qiymat konstruktor ichidagi himoya sharti orqali darhol 30 ga to'g'rilanadi.\n\n[Bajarilishi kerak bo'lgan vazifalar (1 dan 5 gacha)]\n1. Course klassini tuzing: String courseCode; va int maxStudents; maydonlarini e'lon qiling.\n2. public Course(String courseCode, int maxStudents) konstruktorida tekshiring: agar maxStudents > 0 bo'lsa o'rnating, aks holda standart 30 qilib belgilang.\n3. Main metodida to'g'ri sig'imli Course c1 = new Course(\"5COSC018C\", 45); va manfiy sig'imli Course c2 = new Course(\"5BUIS009C\", -10); yarating.\n4. Himoyaviy shart ishlab ikkinchi kurs sig'imi 30 ga to'g'rilanganligini tekshiring.\n5. Kurslar ma'lumotlarini 2 qatorda chop eting:System.out.println(\"Kurs: \" + c1.courseCode + \" | Sig'im: \" + c1.maxStudents);System.out.println(\"Kurs: \" + c2.courseCode + \" | Sig'im (tuzatilgan): \" + c2.maxStudents);",
      "en": "[Real-World Story & Context]\nUniversity course capacity must never be zero or negative. A constructor guard clause automatically clamps invalid values to 30.\n\n[Step-by-Step Implementation Tasks (1 to 5)]\n1. Create class Course with courseCode and maxStudents.\n2. Implement constructor enforcing maxStudents = (maxStudents > 0) ? maxStudents : 30;.\n3. In main, instantiate c1 (45) and c2 (-10).\n4. Verify second course capacity clamped to 30.\n5. Print course details on 2 lines.",
      "ru": "📖 Контекст и описание задачи\nОбъем университетского курса никогда не должен быть нулевым или отрицательным. Предложение защиты конструктора автоматически ограничивает недопустимые значения до 30.\n\n📋 Пошаговые задачи (от 1 до 5)\n1. Создайте класс <code>Course</code> с <code>courseCode</code> и <code>maxStudents</code>.\n2. Реализуйте конструктор, обеспечивающий <code>maxStudents = (maxStudents > 0) ? maxStudents : 30;</code>.\n3. В <code>main</code> создайте экземпляры <code>c1</code> (45) и <code>c2</code> (-10).\n4. Убедитесь, что вместимость второго блюда ограничена до 30.\n5. Print course details on 2 lines."
    },
    "requirements": {
      "classes": [
        "Course",
        "Main"
      ],
      "fields": [
        {
          "name": "courseCode",
          "type": "String"
        },
        {
          "name": "maxStudents",
          "type": "int"
        }
      ],
      "constructors": [
        "Course"
      ]
    },
    "starterCode": "class Course {\n    String courseCode;\n    int maxStudents;\n\n    // Konstruktorda maxStudents <= 0 tekshiruvini yozing\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        // Noto'g'ri (manfiy) sig'im kiritib tekshiring\n        \n    }\n}",
    "solution": "class Course {\n    String courseCode;\n    int maxStudents;\n\n    public Course(String courseCode, int maxStudents) {\n        this.courseCode = courseCode;\n        if (maxStudents > 0) {\n            this.maxStudents = maxStudents;\n        } else {\n            this.maxStudents = 30; // standart sig'im\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Course c1 = new Course(\"5COSC018C\", 45);\n        Course c2 = new Course(\"5BUIS009C\", -10); // Noto'g'ri kiritildi\n\n        System.out.println(\"Kurs: \" + c1.courseCode + \" | Sig'im: \" + c1.maxStudents);\n        System.out.println(\"Kurs: \" + c2.courseCode + \" | Sig'im (tuzatilgan): \" + c2.maxStudents);\n    }\n}",
    "detailedSolution": {
      "theory": "Himoyaviy Dasturlash (Defensive Programming): Obyekt tug'ilgan onidanoq (initsializatsiyada) to'g'ri ma'lumotlarga ega bo'lishini ta'minlash. Bu orqali kelajakda butun tizimda g'alati '0' yoki manfiy xatoliklar yuz bermaydi.",
      "theoryEn": "Defensive validation inside constructor ensures no invalid instance enters system runtime.",
      "cleanCode": "this.maxStudents = (maxStudents > 0) ? maxStudents : 30;",
      "breakdown": [
        "Noto'g'ri kiritilgan manfiy qiymat to'g'rilandi.",
        "Ob'yekt doimo mantiqan to'g'ri sig'im bilan ish boshlaydi."
      ],
      "pitfalls": "Validatsiyani faqat metodlarga qo'yib, konstruktorda unutish ob'yektning nosoz tug'ilishiga yo'l ochadi.",
      "cw2Tip": "Tovar narxi 0 bo'lib qolmasligini konstruktorda tekshirish CW2 talabidir.",
      "theoryRu": "Защитная проверка внутри конструктора гарантирует, что ни один недопустимый экземпляр не попадет во время выполнения системы.",
      "pitfallsRu": "Включение проверки только в методы и забвение ее в конструкторе приведет к сбою объекта.",
      "breakdownRu": [
        "Исправлено неправильно введенное отрицательное значение.",
        "Объект всегда начинается с логически правильной мощности."
      ]
    },
    "sampleData": [
      "1-kurs -> code: \"5COSC018C\", enrolled: 45 (to'g'ri)",
      "2-kurs -> code: \"5BUIS009C\", enrolled: -10 (manfiy, 0 ga tenglashtiriladi)"
    ],
    "expectedOutput": "Kurs: 5COSC018C | Sig'im: 45\nKurs: 5BUIS009C | Sig'im (tuzatilgan): 30",
    "story": {
      "uz": "Universitet kursining talabalar sig'imi hech qachon 0 yoki manfiy bo'lishi mumkin emas. Noto'g'ri kiritilgan qiymat konstruktor ichidagi himoya sharti orqali darhol 30 ga to'g'rilanadi.",
      "en": "University course capacity must never be zero or negative. A constructor guard clause automatically clamps invalid values to 30.",
      "ru": "Объем университетского курса никогда не должен быть нулевым или отрицательным. Предложение защиты конструктора автоматически ограничивает недопустимые значения до 30."
    },
    "steps": {
      "uz": [
        "<code>Course</code> klassini tuzing: <code>String courseCode;</code> va <code>int maxStudents;</code> maydonlarini e'lon qiling.",
        "<code>public Course(String courseCode, int maxStudents)</code> konstruktorida tekshiring: agar <code>maxStudents > 0</code> bo'lsa o'rnating, aks holda standart 30 qilib belgilang.",
        "<code>Main</code> metodida to'g'ri sig'imli <code>Course c1 = new Course(\"5COSC018C\", 45);</code> va manfiy sig'imli <code>Course c2 = new Course(\"5BUIS009C\", -10);</code> yarating.",
        "Himoyaviy shart ishlab ikkinchi kurs sig'imi 30 ga to'g'rilanganligini tekshiring.",
        "Kurslar ma'lumotlarini 2 qatorda chop eting:<br><code>System.out.println(\"Kurs: \" + c1.courseCode + \" | Sig'im: \" + c1.maxStudents);</code><br><code>System.out.println(\"Kurs: \" + c2.courseCode + \" | Sig'im (tuzatilgan): \" + c2.maxStudents);</code>"
      ],
      "en": [
        "Create class <code>Course</code> with <code>courseCode</code> and <code>maxStudents</code>.",
        "Implement constructor enforcing <code>maxStudents = (maxStudents > 0) ? maxStudents : 30;</code>.",
        "In <code>main</code>, instantiate <code>c1</code> (45) and <code>c2</code> (-10).",
        "Verify second course capacity clamped to 30.",
        "Print course details on 2 lines."
      ],
      "ru": [
        "Создайте класс <code>Course</code> с <code>courseCode</code> и <code>maxStudents</code>.",
        "Реализуйте конструктор, обеспечивающий <code>maxStudents = (maxStudents > 0) ? maxStudents : 30;</code>.",
        "В <code>main</code> создайте экземпляры <code>c1</code> (45) и <code>c2</code> (-10).",
        "Убедитесь, что вместимость второго блюда ограничена до 30.",
        "Print course details on 2 lines."
      ]
    }
  },
  {
    "id": 26,
    "tier": 3,
    "tierName": "3-Bosqich: Konstruktorlar va Hayot Sikli",
    "sector": "21-30",
    "title": {
      "uz": "26. Flight Ticket — Barcha Maydonlarni Xavfsiz Boshlang'ich Holatga Keltirish",
      "en": "26. Flight Ticket — Robust State Initialization",
      "ru": "26. Билет на рейс — робастная инициализация состояния"
    },
    "scenario": {
      "uz": "[Hayotiy Voqealik & Kontekst]\nAviachipta sotuvida chipta narxi manfiy kiritilmasligi va $300 dan yuqori narxdagi chiptalar avtomatik ravishda puli qaytariladigan (refundable) maqomiga ega bo'lishi konstruktorda kafolatlanadi.\n\n[Bajarilishi kerak bo'lgan vazifalar (1 dan 5 gacha)]\n1. FlightTicket klassini yarating: String flightNum;, double price;, boolean isRefundable;.\n2. Konstruktorda tekshiring: narx manfiy bo'lsa 0.0 qiling; agar price > 300.0 bo'lsa isRefundable = true; deb belgilang.\n3. Main metodida ikkita chipta yarating: FlightTicket t1 = new FlightTicket(\"HY-201\", 320.0, false); va FlightTicket t2 = new FlightTicket(\"HY-55\", 50.0, false);.\n4. Birinchi chiptaning $300 dan yuqori bo'lgani sababli 'isRefundable' qiymati true bo'lganini tekshiring.\n5. Ikkala chiptani 2 qatorda chop eting:System.out.println(\"Chipta 1 narxi: $\" + t1.price + \" | Qaytariladimi: \" + t1.isRefundable);System.out.println(\"Chipta 2 narxi: $\" + t2.price + \" | Qaytariladimi: \" + t2.isRefundable);",
      "en": "[Real-World Story & Context]\nAirline ticketing enforces non-negative pricing and automatically upgrades tickets over $300 to refundable status inside the constructor.\n\n[Step-by-Step Implementation Tasks (1 to 5)]\n1. Declare class FlightTicket with flightNum, price, isRefundable.\n2. Constructor clamps price >= 0 and overrides isRefundable = true if price > 300.0.\n3. In main, instantiate t1 ($320, false) and t2 ($50, false).\n4. Verify refund upgrade.\n5. Print tickets on 2 lines.",
      "ru": "📖 Контекст и описание задачи\nПри покупке авиабилетов применяются неотрицательные цены и автоматически повышается статус билетов стоимостью более 300 долларов США до возвратного статуса внутри конструктора.\n\n📋 Пошаговые задачи (от 1 до 5)\n1. Объявите класс <code>FlightTicket</code> с помощью <code>flightNum</code>, <code>price</code>, <code>isRefundable</code>.\n2. Конструктор фиксирует цену >= 0 и переопределяет <code>isRefundable = true</code>, если цена > 300,0.\n3. В <code>main</code> создайте экземпляры <code>t1</code> ($320, ложь) и <code>t2</code> ($50, ложь).\n4. Verify refund upgrade.\n5. Распечатайте билеты в 2 строки."
    },
    "requirements": {
      "classes": [
        "FlightTicket",
        "Main"
      ],
      "fields": [
        {
          "name": "ticketNumber",
          "type": "String"
        },
        {
          "name": "fare",
          "type": "double"
        },
        {
          "name": "isRefundable",
          "type": "boolean"
        }
      ],
      "constructors": [
        "FlightTicket"
      ]
    },
    "starterCode": "class FlightTicket {\n    String ticketNumber;\n    double fare;\n    boolean isRefundable;\n\n    // Konstruktorni yozing\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        // Chipta yarating\n        \n    }\n}",
    "solution": "class FlightTicket {\n    String ticketNumber;\n    double fare;\n    boolean isRefundable;\n\n    public FlightTicket(String ticketNumber, double fare, boolean isRefundable) {\n        this.ticketNumber = ticketNumber;\n        this.fare = (fare >= 50.0) ? fare : 50.0;\n        this.isRefundable = isRefundable;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FlightTicket t1 = new FlightTicket(\"TK-78901\", 320.0, true);\n        FlightTicket t2 = new FlightTicket(\"TK-78902\", 15.0, false); // Kam kiritilgan\n\n        System.out.println(\"Chipta 1 narxi: $\" + t1.fare + \" | Qaytariladimi: \" + t1.isRefundable);\n        System.out.println(\"Chipta 2 narxi: $\" + t2.fare + \" | Qaytariladimi: \" + t2.isRefundable);\n    }\n}",
    "detailedSolution": {
      "theory": "Konstruktor biznes qoidalarining (invariants) birinchi himoya qalqonidir.",
      "theoryEn": "Constructors serve as the primary defensive perimeter for domain invariants.",
      "cleanCode": "this.fare = (fare >= 50.0) ? fare : 50.0;",
      "breakdown": [
        "Chipta raqami va statusi saqlandi.",
        "Eng kam narx chegarasi o'rnatildi."
      ],
      "pitfalls": "Ternar operatorida shartni ehtiyotkorlik bilan yozing.",
      "cw2Tip": "CW2 bilet yoki buyurtma tizimida minimal buyurtma summasini shunday tekshirasiz.",
      "theoryRu": "Конструкторы служат основным защитным периметром для инвариантов предметной области.",
      "pitfallsRu": "Внимательно запишите условие в тернарном операторе.",
      "breakdownRu": [
        "Номер и статус заявки сохранены.",
        "Установлен минимальный ценовой лимит."
      ]
    },
    "sampleData": [
      "1-chipta -> ticketId: \"TK-78901\", price: 320.0, hasLuggage: true",
      "2-chipta -> ticketId: \"TK-78902\", price: 15.0 (minimal narxdan kam, rad etiladi)"
    ],
    "expectedOutput": "Chipta 1 narxi: $320.0 | Qaytariladimi: true\nChipta 2 narxi: $50.0 | Qaytariladimi: false",
    "story": {
      "uz": "Aviachipta sotuvida chipta narxi manfiy kiritilmasligi va $300 dan yuqori narxdagi chiptalar avtomatik ravishda puli qaytariladigan (refundable) maqomiga ega bo'lishi konstruktorda kafolatlanadi.",
      "en": "Airline ticketing enforces non-negative pricing and automatically upgrades tickets over $300 to refundable status inside the constructor.",
      "ru": "При покупке авиабилетов применяются неотрицательные цены и автоматически повышается статус билетов стоимостью более 300 долларов США до возвратного статуса внутри конструктора."
    },
    "steps": {
      "uz": [
        "<code>FlightTicket</code> klassini yarating: <code>String flightNum;</code>, <code>double price;</code>, <code>boolean isRefundable;</code>.",
        "Konstruktorda tekshiring: narx manfiy bo'lsa <code>0.0</code> qiling; agar <code>price > 300.0</code> bo'lsa <code>isRefundable = true;</code> deb belgilang.",
        "<code>Main</code> metodida ikkita chipta yarating: <code>FlightTicket t1 = new FlightTicket(\"HY-201\", 320.0, false);</code> va <code>FlightTicket t2 = new FlightTicket(\"HY-55\", 50.0, false);</code>.",
        "Birinchi chiptaning $300 dan yuqori bo'lgani sababli 'isRefundable' qiymati true bo'lganini tekshiring.",
        "Ikkala chiptani 2 qatorda chop eting:<br><code>System.out.println(\"Chipta 1 narxi: $\" + t1.price + \" | Qaytariladimi: \" + t1.isRefundable);</code><br><code>System.out.println(\"Chipta 2 narxi: $\" + t2.price + \" | Qaytariladimi: \" + t2.isRefundable);</code>"
      ],
      "en": [
        "Declare class <code>FlightTicket</code> with <code>flightNum</code>, <code>price</code>, <code>isRefundable</code>.",
        "Constructor clamps price >= 0 and overrides <code>isRefundable = true</code> if price > 300.0.",
        "In <code>main</code>, instantiate <code>t1</code> ($320, false) and <code>t2</code> ($50, false).",
        "Verify refund upgrade.",
        "Print tickets on 2 lines."
      ],
      "ru": [
        "Объявите класс <code>FlightTicket</code> с помощью <code>flightNum</code>, <code>price</code>, <code>isRefundable</code>.",
        "Конструктор фиксирует цену >= 0 и переопределяет <code>isRefundable = true</code>, если цена > 300,0.",
        "В <code>main</code> создайте экземпляры <code>t1</code> ($320, ложь) и <code>t2</code> ($50, ложь).",
        "Verify refund upgrade.",
        "Распечатайте билеты в 2 строки."
      ]
    }
  },
  {
    "id": 27,
    "tier": 3,
    "tierName": "3-Bosqich: Konstruktorlar va Hayot Sikli",
    "sector": "21-30",
    "title": {
      "uz": "27. HR Contract — Mehnat Shartnomasi va Minimal Oylik Kafolati",
      "en": "27. HR Contract — Minimum Wage Guarantee in Constructor",
      "ru": "27. Контракт на работу с персоналом — гарантия минимальной заработной платы в Конструкторе"
    },
    "scenario": {
      "uz": "[Hayotiy Voqealik & Kontekst]\nMehnat shartnomasida qonuniy minimal oylik kafolati (kamida 2,000,000 so'm) mavjud. Konstruktor belgilangan maoshni kafolatlangan miqdordan kam bo'lmasligini ta'minlaydi.\n\n[Bajarilishi kerak bo'lgan vazifalar (1 dan 5 gacha)]\n1. EmploymentContract klassini tuzing: String employeeName;, String department;, double baseSalary;.\n2. Konstruktorda tekshiring: agar baseSalary >= 2000000.0 bo'lsa qabul qiling, aks holda minimal kafolat 2000000.0 o'rnating.\n3. Main metodida EmploymentContract contract = new EmploymentContract(\"Sardor Qodirov\", \"IT Qo'llab-quvvatlash\", 1500000.0); yarating.\n4. Kafolatlangan oylik 2,000,000 so'mga ko'tarilganligini tekshiring.\n5. Shartnoma ma'lumotlarini 2 qatorda chop eting:System.out.println(\"Xodim: \" + contract.employeeName + \" | Bo'lim: \" + contract.department);System.out.println(\"Kafolatlangan oylik: \" + contract.baseSalary + \" so'm\");",
      "en": "[Real-World Story & Context]\nAn HR employment contract enforces a statutory minimum wage baseline (2,000,000 UZS) inside its constructor.\n\n[Step-by-Step Implementation Tasks (1 to 5)]\n1. Create class EmploymentContract with employeeName, department, baseSalary.\n2. Constructor enforces minimum salary: baseSalary = Math.max(baseSalary, 2000000.0);.\n3. In main, instantiate with 1500000.0.\n4. Verify wage is upgraded to 2000000.0.\n5. Print contract summary on 2 lines.",
      "ru": "📖 Контекст и описание задачи\nТрудовой договор с персоналом предусматривает установленный законом базовый уровень минимальной заработной платы (2 000 000 сум) внутри его конструктора.\n\n📋 Пошаговые задачи (от 1 до 5)\n1. Создайте класс <code>EmploymentContract</code> с именем сотрудника, отделом и базовой зарплатой.\n2. Конструктор обеспечивает минимальную зарплату: <code>baseSalary = Math.max(baseSalary, 2000000.0);</code>.\n3. В <code>main</code> создайте экземпляр с 1500000.0.\n4. Убедитесь, что заработная плата повышена до 2000000,0.\n5. Распечатать резюме контракта в 2 строки."
    },
    "requirements": {
      "classes": [
        "EmployeeContract",
        "Main"
      ],
      "fields": [
        {
          "name": "employeeName",
          "type": "String"
        },
        {
          "name": "baseSalary",
          "type": "double"
        },
        {
          "name": "department",
          "type": "String"
        }
      ],
      "constructors": [
        "EmployeeContract"
      ]
    },
    "starterCode": "class EmployeeContract {\n    String employeeName;\n    double baseSalary;\n    String department;\n\n    // Konstruktorni yozing (minimal 2000000.0 sharti bilan)\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        // Shartnoma yarating\n        \n    }\n}",
    "solution": "class EmployeeContract {\n    String employeeName;\n    double baseSalary;\n    String department;\n\n    public EmployeeContract(String employeeName, double baseSalary, String department) {\n        this.employeeName = employeeName;\n        this.department = department;\n        if (baseSalary >= 2000000.0) {\n            this.baseSalary = baseSalary;\n        } else {\n            this.baseSalary = 2000000.0;\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        EmployeeContract emp = new EmployeeContract(\"Sardor Qodirov\", 1200000.0, \"IT Qo'llab-quvvatlash\");\n        System.out.println(\"Xodim: \" + emp.employeeName + \" | Bo'lim: \" + emp.department);\n        System.out.println(\"Kafolatlangan oylik: \" + emp.baseSalary + \" so'm\");\n    }\n}",
    "detailedSolution": {
      "theory": "Konstruktorlar orqali qonuniy va biznes talablarni majburiy qilish — toza dasturiy arxitekturaning belgisidir.",
      "theoryEn": "Enforcing statutory rules via constructor invariants is an enterprise clean architecture staple.",
      "cleanCode": "this.baseSalary = Math.max(baseSalary, 2000000.0);",
      "breakdown": [
        "Xodim ma'lumotlari xavfsiz o'rnatildi.",
        "Kam oylik kiritilganda kafolatlangan miqdor qo'yildi."
      ],
      "pitfalls": "Math.max(a, b) metodidan foydalanish ham shartni qisqartirish uchun juda qulay.",
      "cw2Tip": "Hisobot tizimlarida manfiy yoki xato sonlar kirib kelmasligining oldini oladi.",
      "theoryRu": "Обеспечение соблюдения законодательных правил с помощью инвариантов конструктора является основой чистой архитектуры предприятия.",
      "pitfallsRu": "Использование метода Math.max(a, b) также очень удобно для уменьшения условия.",
      "breakdownRu": [
        "Информация о сотрудниках надежно установлена.",
        "На вход низкой ежемесячной была поставлена ​​гарантированная сумма."
      ]
    },
    "sampleData": [
      "fullName: \"Sardor Qodirov\"",
      "baseSalary: 1200000.0 so'm",
      "department: \"IT Qo'llab-quvvatlash\""
    ],
    "expectedOutput": "Xodim: Sardor Qodirov | Bo'lim: IT Qo'llab-quvvatlash\nKafolatlangan oylik: 2000000.0 so'm",
    "story": {
      "uz": "Mehnat shartnomasida qonuniy minimal oylik kafolati (kamida 2,000,000 so'm) mavjud. Konstruktor belgilangan maoshni kafolatlangan miqdordan kam bo'lmasligini ta'minlaydi.",
      "en": "An HR employment contract enforces a statutory minimum wage baseline (2,000,000 UZS) inside its constructor.",
      "ru": "Трудовой договор с персоналом предусматривает установленный законом базовый уровень минимальной заработной платы (2 000 000 сум) внутри его конструктора."
    },
    "steps": {
      "uz": [
        "<code>EmploymentContract</code> klassini tuzing: <code>String employeeName;</code>, <code>String department;</code>, <code>double baseSalary;</code>.",
        "Konstruktorda tekshiring: agar <code>baseSalary >= 2000000.0</code> bo'lsa qabul qiling, aks holda minimal kafolat <code>2000000.0</code> o'rnating.",
        "<code>Main</code> metodida <code>EmploymentContract contract = new EmploymentContract(\"Sardor Qodirov\", \"IT Qo'llab-quvvatlash\", 1500000.0);</code> yarating.",
        "Kafolatlangan oylik 2,000,000 so'mga ko'tarilganligini tekshiring.",
        "Shartnoma ma'lumotlarini 2 qatorda chop eting:<br><code>System.out.println(\"Xodim: \" + contract.employeeName + \" | Bo'lim: \" + contract.department);</code><br><code>System.out.println(\"Kafolatlangan oylik: \" + contract.baseSalary + \" so'm\");</code>"
      ],
      "en": [
        "Create class <code>EmploymentContract</code> with employeeName, department, baseSalary.",
        "Constructor enforces minimum salary: <code>baseSalary = Math.max(baseSalary, 2000000.0);</code>.",
        "In <code>main</code>, instantiate with 1500000.0.",
        "Verify wage is upgraded to 2000000.0.",
        "Print contract summary on 2 lines."
      ],
      "ru": [
        "Создайте класс <code>EmploymentContract</code> с именем сотрудника, отделом и базовой зарплатой.",
        "Конструктор обеспечивает минимальную зарплату: <code>baseSalary = Math.max(baseSalary, 2000000.0);</code>.",
        "В <code>main</code> создайте экземпляр с 1500000.0.",
        "Убедитесь, что заработная плата повышена до 2000000,0.",
        "Распечатать резюме контракта в 2 строки."
      ]
    }
  },
  {
    "id": 28,
    "tier": 3,
    "tierName": "3-Bosqich: Konstruktorlar va Hayot Sikli",
    "sector": "21-30",
    "title": {
      "uz": "28. SaaS Subscription — Ko'p Bosqichli Konstruktorlar Zanjiri",
      "en": "28. SaaS Subscription — Multi-Stage Cascading Chaining",
      "ru": "28. Подписка SaaS — многоступенчатая каскадная цепочка"
    },
    "scenario": {
      "uz": "[Hayotiy Voqealik & Kontekst]\nBulutli SaaS platformada tarif rejalari 3 xil: Starter ($10, 1 user), Team ($45, 10 users) va Enterprise ($199, 100 users). Ular konstruktorlar zanjiri (Chaining) orqali birlashtiriladi.\n\n[Bajarilishi kerak bo'lgan vazifalar (1 dan 5 gacha)]\n1. Subscription klassini tuzing: String planName;, double monthlyPrice;, int maxUsers;, boolean autoRenew;.\n2. 4 parametrli to'liq konstruktorni e'lon qiling va maydonlarga qiymat bering.\n3. 3 parametrli konstruktorni this(planName, monthlyPrice, maxUsers, true);, 1 parametrli konstruktorni esa this(planName, 10.0, 1, true); zanjiri bilan e'lon qiling.\n4. Main metodida 3 xil ob'yekt yarating: Subscription s1 = new Subscription(\"Starter\");, Subscription s2 = new Subscription(\"Team\", 45.0, 10);, Subscription s3 = new Subscription(\"Enterprise\", 199.0, 100, false);.\n5. Barcha tariflarni 3 qatorda chop eting:System.out.println(\"Plan: \" + s1.planName + \" ($\" + s1.monthlyPrice + \", \" + s1.maxUsers + \" user, auto: \" + s1.autoRenew + \")\");System.out.println(\"Plan: \" + s2.planName + \" ($\" + s2.monthlyPrice + \", \" + s2.maxUsers + \" users, auto: \" + s2.autoRenew + \")\");System.out.println(\"Plan: \" + s3.planName + \" ($\" + s3.monthlyPrice + \", \" + s3.maxUsers + \" users, auto: \" + s3.autoRenew + \")\");",
      "en": "[Real-World Story & Context]\nA cloud SaaS billing tier models Starter, Team, and Enterprise packages using multi-stage constructor chaining.\n\n[Step-by-Step Implementation Tasks (1 to 5)]\n1. Declare class Subscription with planName, monthlyPrice, maxUsers, autoRenew.\n2. Implement 4-arg master constructor.\n3. Implement 3-arg and 1-arg constructors chaining with this().\n4. In main, instantiate all 3 subscriptions.\n5. Print all 3 plans on 3 lines.",
      "ru": "📖 Контекст и описание задачи\nОблачный уровень выставления счетов SaaS моделирует пакеты Starter, Team и Enterprise, используя многоступенчатую цепочку конструкторов.\n\n📋 Пошаговые задачи (от 1 до 5)\n1. Объявите класс <code>Subscription</code> с именем плана, ежемесячной ценой, maxUsers, autoRenew.\n2. Реализуйте главный конструктор с 4 аргументами.\n3. Реализуйте цепочку конструкторов с 3 и 1 аргументами с помощью <code>this()</code>.\n4. В <code>main</code> создайте экземпляры всех трех подписок.\n5. Распечатайте все 3 плана в 3 строки."
    },
    "requirements": {
      "classes": [
        "Subscription",
        "Main"
      ],
      "fields": [
        {
          "name": "planName",
          "type": "String"
        },
        {
          "name": "monthlyPrice",
          "type": "double"
        },
        {
          "name": "maxUsers",
          "type": "int"
        },
        {
          "name": "autoRenew",
          "type": "boolean"
        }
      ],
      "constructors": [
        "Subscription"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class Subscription {\n    String planName;\n    double monthlyPrice;\n    int maxUsers;\n    boolean autoRenew;\n\n    // 3 xil konstruktor zanjirini yozing\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        // Turli zanjirlar orqali ob'yektlar yarating\n        \n    }\n}",
    "solution": "class Subscription {\n    String planName;\n    double monthlyPrice;\n    int maxUsers;\n    boolean autoRenew;\n\n    public Subscription(String planName, double monthlyPrice, int maxUsers, boolean autoRenew) {\n        this.planName = planName;\n        this.monthlyPrice = monthlyPrice;\n        this.maxUsers = maxUsers;\n        this.autoRenew = autoRenew;\n    }\n\n    public Subscription(String planName, double monthlyPrice, int maxUsers) {\n        this(planName, monthlyPrice, maxUsers, true);\n    }\n\n    public Subscription(String planName) {\n        this(planName, 10.0, 1, true);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Subscription s1 = new Subscription(\"Starter\");\n        Subscription s2 = new Subscription(\"Team\", 45.0, 10);\n        Subscription s3 = new Subscription(\"Enterprise\", 199.0, 100, false);\n\n        System.out.println(\"Plan: \" + s1.planName + \" ($\" + s1.monthlyPrice + \", \" + s1.maxUsers + \" user, auto: \" + s1.autoRenew + \")\");\n        System.out.println(\"Plan: \" + s2.planName + \" ($\" + s2.monthlyPrice + \", \" + s2.maxUsers + \" users, auto: \" + s2.autoRenew + \")\");\n        System.out.println(\"Plan: \" + s3.planName + \" ($\" + s3.monthlyPrice + \", \" + s3.maxUsers + \" users, auto: \" + s3.autoRenew + \")\");\n    }\n}",
    "detailedSolution": {
      "theory": "Kaskadli konstruktor zanjiri (Cascading Constructor Chaining) katta dasturlarda barcha birlamchi parametrlarni bitta asosiy konstruktorga olib boradi. Agar biror qoida o'zgarsa, faqat o'sha bitta konstruktorni o'zgartirish kifoya qiladi.",
      "theoryEn": "Cascading chaining channels all variants into one master constructor, streamlining future maintenance.",
      "cleanCode": "public Subscription(String planName) {\n    this(planName, 10.0, 1, true);\n}",
      "breakdown": [
        "Starter, Team va Enterprise darajalari qulay parametrlar bilan yaratildi.",
        "Takrorlanish nolga tushirildi."
      ],
      "pitfalls": "Zanjirda aylanma (circular) chaqiruv qilib qo'ymang (A -> B va B -> A), aks holda kompilyator xato beradi.",
      "cw2Tip": "Enterprise tizimlarda konstruktorlar soni ko'p bo'ladi va ularni zanjirlash talab etiladi.",
      "theoryRu": "Каскадное соединение объединяет все варианты в один главный конструктор, упрощая будущее обслуживание.",
      "pitfallsRu": "Zanjirda aylanma (круговой) chaqiruv qilib qo'ymang (A -> B va B -> A), акш холдинг компилятор xato beradi.",
      "breakdownRu": [
        "Уровни Starter, Team и Enterprise создаются с удобными параметрами.",
        "Takrorlanish nolga tushirildi."
      ]
    },
    "sampleData": [
      "1-obuna -> planName: \"Starter\" (standart qiymatlar bilan)",
      "2-obuna -> planName: \"Team\", monthlyFee: 45.0, maxMembers: 10",
      "3-obuna -> planName: \"Enterprise\", monthlyFee: 199.0, maxMembers: 100, isAutoRenew: false"
    ],
    "expectedOutput": "Plan: Starter ($10.0, 1 user, auto: true)\nPlan: Team ($45.0, 10 users, auto: true)\nPlan: Enterprise ($199.0, 100 users, auto: false)",
    "story": {
      "uz": "Bulutli SaaS platformada tarif rejalari 3 xil: Starter ($10, 1 user), Team ($45, 10 users) va Enterprise ($199, 100 users). Ular konstruktorlar zanjiri (Chaining) orqali birlashtiriladi.",
      "en": "A cloud SaaS billing tier models Starter, Team, and Enterprise packages using multi-stage constructor chaining.",
      "ru": "Облачный уровень выставления счетов SaaS моделирует пакеты Starter, Team и Enterprise, используя многоступенчатую цепочку конструкторов."
    },
    "steps": {
      "uz": [
        "<code>Subscription</code> klassini tuzing: <code>String planName;</code>, <code>double monthlyPrice;</code>, <code>int maxUsers;</code>, <code>boolean autoRenew;</code>.",
        "4 parametrli to'liq konstruktorni e'lon qiling va maydonlarga qiymat bering.",
        "3 parametrli konstruktorni <code>this(planName, monthlyPrice, maxUsers, true);</code>, 1 parametrli konstruktorni esa <code>this(planName, 10.0, 1, true);</code> zanjiri bilan e'lon qiling.",
        "<code>Main</code> metodida 3 xil ob'yekt yarating: <code>Subscription s1 = new Subscription(\"Starter\");</code>, <code>Subscription s2 = new Subscription(\"Team\", 45.0, 10);</code>, <code>Subscription s3 = new Subscription(\"Enterprise\", 199.0, 100, false);</code>.",
        "Barcha tariflarni 3 qatorda chop eting:<br><code>System.out.println(\"Plan: \" + s1.planName + \" ($\" + s1.monthlyPrice + \", \" + s1.maxUsers + \" user, auto: \" + s1.autoRenew + \")\");</code><br><code>System.out.println(\"Plan: \" + s2.planName + \" ($\" + s2.monthlyPrice + \", \" + s2.maxUsers + \" users, auto: \" + s2.autoRenew + \")\");</code><br><code>System.out.println(\"Plan: \" + s3.planName + \" ($\" + s3.monthlyPrice + \", \" + s3.maxUsers + \" users, auto: \" + s3.autoRenew + \")\");</code>"
      ],
      "en": [
        "Declare class <code>Subscription</code> with planName, monthlyPrice, maxUsers, autoRenew.",
        "Implement 4-arg master constructor.",
        "Implement 3-arg and 1-arg constructors chaining with <code>this()</code>.",
        "In <code>main</code>, instantiate all 3 subscriptions.",
        "Print all 3 plans on 3 lines."
      ],
      "ru": [
        "Объявите класс <code>Subscription</code> с именем плана, ежемесячной ценой, maxUsers, autoRenew.",
        "Реализуйте главный конструктор с 4 аргументами.",
        "Реализуйте цепочку конструкторов с 3 и 1 аргументами с помощью <code>this()</code>.",
        "В <code>main</code> создайте экземпляры всех трех подписок.",
        "Распечатайте все 3 плана в 3 строки."
      ]
    }
  },
  {
    "id": 29,
    "tier": 3,
    "tierName": "3-Bosqich: Konstruktorlar va Hayot Sikli",
    "sector": "21-30",
    "title": {
      "uz": "29. GPS Navigation — 'GeoPoint' va Geografik Koordinatalar Tekshiruvi",
      "en": "29. GPS Navigation — 'GeoPoint' & Coordinate Range Check",
      "ru": "29. GPS-навигация — проверка геоточки и диапазона координат."
    },
    "scenario": {
      "uz": "[Hayotiy Voqealik & Kontekst]\nGPS navigatsiya tizimida koordinatalar qat'iy chegaraga ega: kenglik [-90.0; 90.0], uzunlik esa [-180.0; 180.0]. Chegaradan chiqqan nuqtalar konstruktorda 0.0 ga keltiriladi.\n\n[Bajarilishi kerak bo'lgan vazifalar (1 dan 5 gacha)]\n1. GeoPoint klassini e'lon qiling: double latitude; va double longitude; maydonlarini qo'shing.\n2. Konstruktorda kenglik va uzunlik chegaralarini tekshiring: oraliqdan tashqaridagi har qanday qiymatni 0.0 qilib belgilang.\n3. Main metodida to'g'ri GeoPoint toshkent = new GeoPoint(41.2995, 69.2401); va noto'g'ri GeoPoint xatoNuqta = new GeoPoint(120.5, 200.0); yarating.\n4. Xato kiritilgan koordinatalar avtomatik 0.0 ga to'g'rilanganini tekshiring.\n5. Ikkala nuqtani 2 qatorda chop eting:System.out.println(\"Toshkent: lat=\" + toshkent.latitude + \", lon=\" + toshkent.longitude);System.out.println(\"Xato nuqta (tuzatilgan): lat=\" + xatoNuqta.latitude + \", lon=\" + xatoNuqta.longitude);",
      "en": "[Real-World Story & Context]\nA GPS telemetry system validates coordinates within latitude [-90.0, 90.0] and longitude [-180.0, 180.0], clamping out-of-bound coordinates to 0.0.\n\n[Step-by-Step Implementation Tasks (1 to 5)]\n1. Create class GeoPoint with latitude and longitude.\n2. Constructor clamps values outside [-90.0, 90.0] and [-180.0, 180.0] to 0.0.\n3. In main, instantiate Tashkent and invalid coordinate points.\n4. Verify invalid point is clamped to (0.0, 0.0).\n5. Print both points on 2 lines.",
      "ru": "📖 Контекст и описание задачи\nСистема телеметрии GPS проверяет координаты в пределах широты [-90,0, 90,0] и долготы [-180,0, 180,0], фиксируя координаты за пределами границ до 0,0.\n\n📋 Пошаговые задачи (от 1 до 5)\n1. Создайте класс <code>GeoPoint</code> с широтой и долготой.\n2. Constructor clamps values outside [-90.0, 90.0] and [-180.0, 180.0] to 0.0.\n3. В <code>main</code> создайте экземпляр Ташкента и недопустимые точки координат.\n4. Verify invalid point is clamped to (0.0, 0.0).\n5. Выведите обе точки в 2 строки."
    },
    "requirements": {
      "classes": [
        "GeoPoint",
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
      "constructors": [
        "GeoPoint"
      ]
    },
    "starterCode": "class GeoPoint {\n    double latitude;\n    double longitude;\n\n    // Konstruktorda lat va lon oraliqlarini tekshiring\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        // Koordinata ob'yektini sinab ko'ring\n        \n    }\n}",
    "solution": "class GeoPoint {\n    double latitude;\n    double longitude;\n\n    public GeoPoint(double latitude, double longitude) {\n        if (latitude >= -90.0 && latitude <= 90.0) {\n            this.latitude = latitude;\n        } else {\n            this.latitude = 0.0;\n        }\n\n        if (longitude >= -180.0 && longitude <= 180.0) {\n            this.longitude = longitude;\n        } else {\n            this.longitude = 0.0;\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GeoPoint toshkent = new GeoPoint(41.2995, 69.2401);\n        GeoPoint xatoNuqta = new GeoPoint(120.5, 200.0); // Ikkalasi ham chegaradan tashqarida\n\n        System.out.println(\"Toshkent: lat=\" + toshkent.latitude + \", lon=\" + toshkent.longitude);\n        System.out.println(\"Xato nuqta (tuzatilgan): lat=\" + xatoNuqta.latitude + \", lon=\" + xatoNuqta.longitude);\n    }\n}",
    "detailedSolution": {
      "theory": "Domen chegaraviy qoidalari (Domain Validation Rules): Har bir muhandislik sohasida ma'lumotlar o'z tabiiy chegarasiga ega bo'ladi. Ularni konstruktorda tekshirish tizim barqarorligini ta'minlaydi.",
      "theoryEn": "Domain coordinate ranges validated at construction shield maps from out-of-bound crashes.",
      "cleanCode": "if (latitude >= -90.0 && latitude <= 90.0) this.latitude = latitude; else this.latitude = 0.0;",
      "breakdown": [
        "Kenglik va uzunlik alohida tekshirildi.",
        "Noto'g'ri qiymat kiritilganda standart 0.0 koordinatasiga o'tkazildi."
      ],
      "pitfalls": "Mantiqiy 'va' (&&) o'rniga 'yoki' (||) ishlatilsa tekshiruv buziladi.",
      "cw2Tip": "Yandex Go kabi transport tizimlarida bu eng asosiy obyekt hisoblanadi.",
      "theoryRu": "Диапазоны координат домена проверены на картах строительных щитов от аварий за пределами границ.",
      "pitfallsRu": "Использование «или» (||) вместо логического «и» (&&) нарушит проверку.",
      "breakdownRu": [
        "Ширина и длина проверялись отдельно.",
        "По умолчанию была установлена ​​координата 0,0, когда было введено неверное значение."
      ]
    },
    "sampleData": [
      "Toshkent nuqtasi -> latitude: 41.2995, longitude: 69.2401 (to'g'ri)",
      "Xato nuqta -> latitude: 120.5, longitude: 200.0 (chegaradan tashqari, 0.0 qilinadi)"
    ],
    "expectedOutput": "Toshkent: lat=41.2995, lon=69.2401\nXato nuqta (tuzatilgan): lat=0.0, lon=0.0",
    "story": {
      "uz": "GPS navigatsiya tizimida koordinatalar qat'iy chegaraga ega: kenglik [-90.0; 90.0], uzunlik esa [-180.0; 180.0]. Chegaradan chiqqan nuqtalar konstruktorda 0.0 ga keltiriladi.",
      "en": "A GPS telemetry system validates coordinates within latitude [-90.0, 90.0] and longitude [-180.0, 180.0], clamping out-of-bound coordinates to 0.0.",
      "ru": "Система телеметрии GPS проверяет координаты в пределах широты [-90,0, 90,0] и долготы [-180,0, 180,0], фиксируя координаты за пределами границ до 0,0."
    },
    "steps": {
      "uz": [
        "<code>GeoPoint</code> klassini e'lon qiling: <code>double latitude;</code> va <code>double longitude;</code> maydonlarini qo'shing.",
        "Konstruktorda kenglik va uzunlik chegaralarini tekshiring: oraliqdan tashqaridagi har qanday qiymatni <code>0.0</code> qilib belgilang.",
        "<code>Main</code> metodida to'g'ri <code>GeoPoint toshkent = new GeoPoint(41.2995, 69.2401);</code> va noto'g'ri <code>GeoPoint xatoNuqta = new GeoPoint(120.5, 200.0);</code> yarating.",
        "Xato kiritilgan koordinatalar avtomatik 0.0 ga to'g'rilanganini tekshiring.",
        "Ikkala nuqtani 2 qatorda chop eting:<br><code>System.out.println(\"Toshkent: lat=\" + toshkent.latitude + \", lon=\" + toshkent.longitude);</code><br><code>System.out.println(\"Xato nuqta (tuzatilgan): lat=\" + xatoNuqta.latitude + \", lon=\" + xatoNuqta.longitude);</code>"
      ],
      "en": [
        "Create class <code>GeoPoint</code> with latitude and longitude.",
        "Constructor clamps values outside [-90.0, 90.0] and [-180.0, 180.0] to 0.0.",
        "In <code>main</code>, instantiate Tashkent and invalid coordinate points.",
        "Verify invalid point is clamped to (0.0, 0.0).",
        "Print both points on 2 lines."
      ],
      "ru": [
        "Создайте класс <code>GeoPoint</code> с широтой и долготой.",
        "Constructor clamps values outside [-90.0, 90.0] and [-180.0, 180.0] to 0.0.",
        "В <code>main</code> создайте экземпляр Ташкента и недопустимые точки координат.",
        "Verify invalid point is clamped to (0.0, 0.0).",
        "Выведите обе точки в 2 строки."
      ]
    }
  },
  {
    "id": 30,
    "tier": 3,
    "tierName": "3-Bosqich: Konstruktorlar va Hayot Sikli",
    "sector": "21-30",
    "title": {
      "uz": "30. Warehouse Logistics — Ob'yekt Nusxasini Yaratish (Copy Constructor • Stage 3 Master)",
      "en": "30. Warehouse Logistics — Copy Constructor (Stage 3 Master)",
      "ru": "30. Складская логистика — Конструктор копирования (Мастер 3-го этапа)"
    },
    "scenario": {
      "uz": "[Hayotiy Voqealik & Kontekst]\nLogistika omborida mavjud palletning nusxasini (klonini) yaratish uchun Copy Constructor mexanizmi talab etiladi. Yangi palletga asl identifikator oxiriga '-COPY' qo'shilgan kod beriladi.\n\n[Bajarilishi kerak bo'lgan vazifalar (1 dan 5 gacha)]\n1. Pallet klassini tuzing: String palletId;, double weightLimit;, int boxCount; maydonlarini e'lon qiling.\n2. Standart 3 parametrli konstruktorni yozing: public Pallet(String palletId, double weightLimit, int boxCount).\n3. Copy Constructor yarating: public Pallet(Pallet other) { this.palletId = other.palletId + \"-COPY\"; this.weightLimit = other.weightLimit; this.boxCount = other.boxCount; }.\n4. Main metodida asl palletni yarating: Pallet p1 = new Pallet(\"PLT-100\", 500.0, 24); va uning nusxasini oling: Pallet p2 = new Pallet(p1);.\n5. Asl va nusxa palletlarni 2 qatorda chop eting:System.out.println(\"Asl: \" + p1.palletId + \" | Qutilar: \" + p1.boxCount);System.out.println(\"Nusxa: \" + p2.palletId + \" | Qutilar: \" + p2.boxCount);",
      "en": "[Real-World Story & Context]\nA warehouse logistics module creates a clone of an existing cargo pallet using a Copy Constructor, appending '-COPY' to the copied pallet ID.\n\n[Step-by-Step Implementation Tasks (1 to 5)]\n1. Declare class Pallet with palletId, weightLimit, boxCount.\n2. Implement standard 3-arg constructor.\n3. Implement Copy Constructor: public Pallet(Pallet other) appending '-COPY'.\n4. In main, instantiate p1 and clone p2 = new Pallet(p1);.\n5. Print original and copied pallet records.",
      "ru": "📖 Контекст и описание задачи\nМодуль складской логистики создает клон существующего грузового поддона с помощью конструктора копирования, добавляя «-COPY» к скопированному идентификатору поддона.\n\n📋 Пошаговые задачи (от 1 до 5)\n1. Объявите класс <code>Pallet</code> с palletId, WeightLimit, BoxCount.\n2. Реализуйте стандартный конструктор с 3 аргументами.\n3. Реализация конструктора копирования: <code>public Pallet(Pallet other)</code> с добавлением '-COPY'.\n4. В <code>main</code> создайте экземпляр <code>p1</code> и клонируйте <code>p2 = new Pallet(p1);</code>.\n5. Распечатайте оригинальные и скопированные записи паллет."
    },
    "requirements": {
      "classes": [
        "Pallet",
        "Main"
      ],
      "fields": [
        {
          "name": "palletId",
          "type": "String"
        },
        {
          "name": "weightLimit",
          "type": "double"
        },
        {
          "name": "boxCount",
          "type": "int"
        }
      ],
      "constructors": [
        "Pallet"
      ]
    },
    "starterCode": "class Pallet {\n    String palletId;\n    double weightLimit;\n    int boxCount;\n\n    // Standart konstruktor va Copy Constructor yozing\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        // Pallet yarating va uning nusxasini oling\n        \n    }\n}",
    "solution": "class Pallet {\n    String palletId;\n    double weightLimit;\n    int boxCount;\n\n    public Pallet(String palletId, double weightLimit, int boxCount) {\n        this.palletId = palletId;\n        this.weightLimit = weightLimit;\n        this.boxCount = boxCount;\n    }\n\n    // Copy Constructor\n    public Pallet(Pallet other) {\n        this.palletId = other.palletId + \"-COPY\";\n        this.weightLimit = other.weightLimit;\n        this.boxCount = other.boxCount;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Pallet p1 = new Pallet(\"PLT-100\", 500.0, 24);\n        Pallet p2 = new Pallet(p1); // Nusxalash\n\n        System.out.println(\"Asl: \" + p1.palletId + \" | Qutilar: \" + p1.boxCount);\n        System.out.println(\"Nusxa: \" + p2.palletId + \" | Qutilar: \" + p2.boxCount);\n    }\n}",
    "detailedSolution": {
      "theory": "3-bosqichda biz ob'yektlarni xavfsiz yaratishni to'liq o'rgandik! Copy Constructor boshqa mavjud ob'yektdan yangi mustaqil nusxa ajratadi. Lekin sezgan bo'lsangiz, hanuzgacha maydonlarimiz (palletId, boxCount) ochiq turibdi va istalgan odam `p1.boxCount = -999;` qilib buzishi mumkin. Shu sababli 4-bosqichda ma'lumotlarni to'liq berkitish — INKAPSULYATSIYA va 'private' modifikatorini o'rganamiz!",
      "theoryEn": "Copy constructors yield standalone clones. Stage 4 introduces ENCAPSULATION to restrict direct field access via 'private'.",
      "cleanCode": "public Pallet(Pallet other) {\n    this.palletId = other.palletId + \"-COPY\";\n    this.weightLimit = other.weightLimit;\n    this.boxCount = other.boxCount;\n}",
      "breakdown": [
        "Mavjud ob'yektning holati xavfsiz klonlandi.",
        "Heap xotirada mutlaqo mustaqil yangi ob'yekt hosil bo'ldi.",
        "Bu topshiriq 4-bosqichdagi inkapsulyatsiyaga yo'l ochadi."
      ],
      "pitfalls": "Nusxa yaratayotganda `Pallet p2 = p1;` deb yozish yangi ob'yekt yaratmaydi, faqat bitta ob'yektga ikkinchi ko'rsatkich beradi!",
      "cw2Tip": "Savatchadagi tovar nusxasini saqlashda va himoyalashda copy konstruktorlar ishlatiladi.",
      "theoryRu": "Конструкторы копирования создают автономные клоны. На этапе 4 вводится ИНКАПСУЛЯЦИЯ для ограничения прямого доступа к полю через «частный».",
      "pitfallsRu": "Nusxa yaratayotganda `Pallet p2 = p1;` deb yozish yangi ob'yekt yaratmaydi, faqat bitta ob'yektga ikkinchi ko'rsatkich beradi!",
      "breakdownRu": [
        "Состояние существующего объекта безопасно клонируется.",
        "В куче памяти создается совершенно независимый новый объект.",
        "Это присвоение приводит к инкапсуляции на шаге 4."
      ]
    },
    "sampleData": [
      "Asl pallet (p1) -> code: \"PLT-100\", weightKg: 500.0, boxCount: 24",
      "Nusxa pallet (p2) -> p1 ob'yektidan nusxa olinadi"
    ],
    "expectedOutput": "Asl: PLT-100 | Qutilar: 24\nNusxa: PLT-100-COPY | Qutilar: 24",
    "story": {
      "uz": "Logistika omborida mavjud palletning nusxasini (klonini) yaratish uchun Copy Constructor mexanizmi talab etiladi. Yangi palletga asl identifikator oxiriga '-COPY' qo'shilgan kod beriladi.",
      "en": "A warehouse logistics module creates a clone of an existing cargo pallet using a Copy Constructor, appending '-COPY' to the copied pallet ID.",
      "ru": "Модуль складской логистики создает клон существующего грузового поддона с помощью конструктора копирования, добавляя «-COPY» к скопированному идентификатору поддона."
    },
    "steps": {
      "uz": [
        "<code>Pallet</code> klassini tuzing: <code>String palletId;</code>, <code>double weightLimit;</code>, <code>int boxCount;</code> maydonlarini e'lon qiling.",
        "Standart 3 parametrli konstruktorni yozing: <code>public Pallet(String palletId, double weightLimit, int boxCount)</code>.",
        "Copy Constructor yarating: <code>public Pallet(Pallet other) { this.palletId = other.palletId + \"-COPY\"; this.weightLimit = other.weightLimit; this.boxCount = other.boxCount; }</code>.",
        "<code>Main</code> metodida asl palletni yarating: <code>Pallet p1 = new Pallet(\"PLT-100\", 500.0, 24);</code> va uning nusxasini oling: <code>Pallet p2 = new Pallet(p1);</code>.",
        "Asl va nusxa palletlarni 2 qatorda chop eting:<br><code>System.out.println(\"Asl: \" + p1.palletId + \" | Qutilar: \" + p1.boxCount);</code><br><code>System.out.println(\"Nusxa: \" + p2.palletId + \" | Qutilar: \" + p2.boxCount);</code>"
      ],
      "en": [
        "Declare class <code>Pallet</code> with palletId, weightLimit, boxCount.",
        "Implement standard 3-arg constructor.",
        "Implement Copy Constructor: <code>public Pallet(Pallet other)</code> appending '-COPY'.",
        "In <code>main</code>, instantiate <code>p1</code> and clone <code>p2 = new Pallet(p1);</code>.",
        "Print original and copied pallet records."
      ],
      "ru": [
        "Объявите класс <code>Pallet</code> с palletId, WeightLimit, BoxCount.",
        "Реализуйте стандартный конструктор с 3 аргументами.",
        "Реализация конструктора копирования: <code>public Pallet(Pallet other)</code> с добавлением '-COPY'.",
        "В <code>main</code> создайте экземпляр <code>p1</code> и клонируйте <code>p2 = new Pallet(p1);</code>.",
        "Распечатайте оригинальные и скопированные записи паллет."
      ]
    }
  },
  {
    "id": 31,
    "tier": 4,
    "tierName": "4-Bosqich: Inkapsulyatsiya va Himoya",
    "sector": "31-40",
    "title": {
      "uz": "31. User Profile — 'private' Maydonlar va Xavfsiz Getterlar",
      "en": "31. User Profile — 'private' Fields & Safe Getters",
      "ru": "31. Профиль пользователя — «частные» поля и безопасные геттеры."
    },
    "scenario": {
      "uz": "[Hayotiy Voqealik & Kontekst]\nFoydalanuvchi profilidagi shaxsiy ma'lumotlar tashqaridan bevosita o'zgartirilmasligi uchun 'private' modifikatori bilan himoyalanadi (inkapsulyatsiya) va faqat Getter metodlari orqali o'qiladi.\n\n[Bajarilishi kerak bo'lgan vazifalar (1 dan 5 gacha)]\n1. UserProfile klassini e'lon qiling: private String username; va private String email; maydonlarini qo'shing.\n2. Parametrli konstruktor yozing: public UserProfile(String username, String email).\n3. Getter metodlarini yozing: public String getUsername() { return this.username; } va public String getEmail() { return this.email; }.\n4. Main metodida UserProfile profile = new UserProfile(\"sherzod_it\", \"sherzod@wiut.uz\"); ob'yektini yarating.\n5. Getterlar orqali ma'lumotlarni chop eting: System.out.println(\"Foydalanuvchi: \" + profile.getUsername() + \" | Email: \" + profile.getEmail());",
      "en": "[Real-World Story & Context]\nA user profile safeguards sensitive account fields behind private access modifiers, providing read-only access via public getter methods.\n\n[Step-by-Step Implementation Tasks (1 to 5)]\n1. Create class UserProfile with private fields username and email.\n2. Implement constructor.\n3. Implement public getters: getUsername() and getEmail().\n4. In main, instantiate UserProfile profile = new UserProfile(\"sherzod_it\", \"sherzod@wiut.uz\");.\n5. Print details using getters.",
      "ru": "📖 Контекст и описание задачи\nПрофиль пользователя защищает конфиденциальные поля учетной записи с помощью модификаторов частного доступа, обеспечивая доступ только для чтения с помощью общедоступных методов получения.\n\n📋 Пошаговые задачи (от 1 до 5)\n1. Создайте класс <code>UserProfile</code> с закрытыми полями <code>username</code> и <code>email</code>.\n2. Implement constructor.\n3. Implement public getters: <code>getUsername()</code> and <code>getEmail()</code>.\n4. В <code>main</code> создайте экземпляр <code>UserProfile profile = new UserProfile(\"sherzod_it\", \"sherzod@wiut.uz\");</code>.\n5. Распечатайте детали, используя геттеры."
    },
    "requirements": {
      "classes": [
        "UserProfile",
        "Main"
      ],
      "privateFields": [
        "username",
        "email"
      ],
      "methods": [
        "getUsername",
        "getEmail"
      ],
      "constructors": [
        "UserProfile"
      ],
      "methodDetails": [
        {
          "name": "getUsername / getEmail",
          "signature": "public String getUsername() / public String getEmail()",
          "params": "Parametr qabul qilmaydi ()",
          "paramsEn": "No parameters ()",
          "returns": "String (private username va email maydonlarining xavfsiz qiymati)",
          "returnsEn": "String (safe getter returns private fields)",
          "logic": "return this.username; / return this.email;",
          "logicEn": "return this.username; / return this.email;",
          "example": "System.out.println(user.getUsername() + ' | ' + user.getEmail());"
        }
      ]
    },
    "starterCode": "class UserProfile {\n    // username va email maydonlarini private qiling\n    \n    // Konstruktor va getUsername, getEmail metodlarini yozing\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        // Ob'yekt yarating va getter orqali o'qing\n        \n    }\n}",
    "solution": "class UserProfile {\n    private String username;\n    private String email;\n\n    public UserProfile(String username, String email) {\n        this.username = username;\n        this.email = email;\n    }\n\n    public String getUsername() {\n        return this.username;\n    }\n\n    public String getEmail() {\n        return this.email;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        UserProfile profile = new UserProfile(\"sherzod_it\", \"sherzod@wiut.uz\");\n        System.out.println(\"Foydalanuvchi: \" + profile.getUsername() + \" | Email: \" + profile.getEmail());\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya (Encapsulation) — ob'yekt holatini 'private' kalit so'zi orqali tashqi bevosita aralashuvdan berkitishdir. Ma'lumotlarni o'qish uchun maxsus 'getter' metodlari (masalan getUsername()) e'lon qilinadi.",
      "theoryEn": "Encapsulation hides state behind 'private' access modifiers, providing access exclusively through getters.",
      "cleanCode": "private String username;\npublic String getUsername() { return this.username; }",
      "breakdown": [
        "Maydonlar 'private' qilib to'liq himoyalandi.",
        "Tashqaridan `profile.username` deb kirish endi taqiqlangan.",
        "Getterlar orqali xavfsiz o'qish ta'minlandi."
      ],
      "pitfalls": "Getter metodlarida qiymat qaytishi shart, ularning turi maydon turi bilan bir xil bo'ladi.",
      "cw2Tip": "CW2 barcha domen sinflarida har bir maydon 'private' bo'lishi majburiy shartdir.",
      "theoryRu": "Инкапсуляция скрывает состояние за «частными» модификаторами доступа, обеспечивая доступ исключительно через геттеры.",
      "pitfallsRu": "Методы получения должны возвращать значение, тип которого совпадает с типом поля.",
      "breakdownRu": [
        "Поля полностью защищены как «частные».",
        "Вход в систему под именем `profile.username` снаружи теперь запрещен.",
        "Обеспечено безопасное чтение через геттеры."
      ]
    },
    "sampleData": [
      "username: \"sherzod_it\"",
      "email: \"sherzod@wiut.uz\""
    ],
    "expectedOutput": "Foydalanuvchi: sherzod_it | Email: sherzod@wiut.uz",
    "story": {
      "uz": "Foydalanuvchi profilidagi shaxsiy ma'lumotlar tashqaridan bevosita o'zgartirilmasligi uchun 'private' modifikatori bilan himoyalanadi (inkapsulyatsiya) va faqat Getter metodlari orqali o'qiladi.",
      "en": "A user profile safeguards sensitive account fields behind private access modifiers, providing read-only access via public getter methods.",
      "ru": "Профиль пользователя защищает конфиденциальные поля учетной записи с помощью модификаторов частного доступа, обеспечивая доступ только для чтения с помощью общедоступных методов получения."
    },
    "steps": {
      "uz": [
        "<code>UserProfile</code> klassini e'lon qiling: <code>private String username;</code> va <code>private String email;</code> maydonlarini qo'shing.",
        "Parametrli konstruktor yozing: <code>public UserProfile(String username, String email)</code>.",
        "Getter metodlarini yozing: <code>public String getUsername() { return this.username; }</code> va <code>public String getEmail() { return this.email; }</code>.",
        "<code>Main</code> metodida <code>UserProfile profile = new UserProfile(\"sherzod_it\", \"sherzod@wiut.uz\");</code> ob'yektini yarating.",
        "Getterlar orqali ma'lumotlarni chop eting: <code>System.out.println(\"Foydalanuvchi: \" + profile.getUsername() + \" | Email: \" + profile.getEmail());</code>"
      ],
      "en": [
        "Create class <code>UserProfile</code> with private fields <code>username</code> and <code>email</code>.",
        "Implement constructor.",
        "Implement public getters: <code>getUsername()</code> and <code>getEmail()</code>.",
        "In <code>main</code>, instantiate <code>UserProfile profile = new UserProfile(\"sherzod_it\", \"sherzod@wiut.uz\");</code>.",
        "Print details using getters."
      ],
      "ru": [
        "Создайте класс <code>UserProfile</code> с закрытыми полями <code>username</code> и <code>email</code>.",
        "Implement constructor.",
        "Implement public getters: <code>getUsername()</code> and <code>getEmail()</code>.",
        "В <code>main</code> создайте экземпляр <code>UserProfile profile = new UserProfile(\"sherzod_it\", \"sherzod@wiut.uz\");</code>.",
        "Распечатайте детали, используя геттеры."
      ]
    }
  },
  {
    "id": 32,
    "tier": 4,
    "tierName": "4-Bosqich: Inkapsulyatsiya va Himoya",
    "sector": "31-40",
    "title": {
      "uz": "32. Vault Bank Account — Balansni Himoyalangan Setter Bilan Nazorat Qilish",
      "en": "32. Vault Bank Account — Guarded Balance Mutator via Setter",
      "ru": "32. Банковский счет в хранилище — мутатор защищенного баланса через сеттер"
    },
    "scenario": {
      "uz": "[Hayotiy Voqealik & Kontekst]\nBank hisob raqamida balans manfiy qiymatga tushib ketmasligi uchun hisob balansi 'private' qilinadi va qiymat o'zgartirish faqat himoyalangan Setter orqali nazorat qilinadi.\n\n[Bajarilishi kerak bo'lgan vazifalar (1 dan 5 gacha)]\n1. BankAccount klassini tuzing: private double balance; maydonini e'lon qiling.\n2. Konstruktorda boshlang'ich balansni tekshirib o'rnating: manfiy bo'lsa 0.0 qiling.\n3. getBalance() va setBalance(double balance) metodlarini yozing: agar yangi balans manfiy bo'lsa, System.out.println(\"Xato: Balans manfiy bo'lishi mumkin emas!\"); xabarini chiqaring va balansni o'zgartirmang.\n4. Main metodida BankAccount acc = new BankAccount(100000.0); tuzing, 150000.0 qilib oshiring, so'ng -50000.0 qilishga urinib ko'ring (rad etiladi).\n5. Yakuniy balansni chop eting: System.out.println(\"Yakuniy balans: \" + acc.getBalance() + \" so'm\");",
      "en": "[Real-World Story & Context]\nA bank account protects its balance field with private access and guards against negative balance updates using an encapsulated setter.\n\n[Step-by-Step Implementation Tasks (1 to 5)]\n1. Declare class BankAccount with private field balance.\n2. Implement constructor setting initial balance.\n3. Implement getBalance() and setBalance(double balance) checking balance >= 0.\n4. In main, instantiate with 100000.0, set to 150000.0, attempt -50000.0.\n5. Print final balance: System.out.println(\"Yakuniy balans: \" + acc.getBalance() + \" so'm\");",
      "ru": "📖 Контекст и описание задачи\nБанковский счет защищает свое поле баланса с помощью частного доступа и защищает от обновлений отрицательного баланса с помощью инкапсулированного установщика.\n\n📋 Пошаговые задачи (от 1 до 5)\n1. Объявите класс <code>BankAccount</code> с закрытым полем <code>balance</code>.\n2. Implement constructor setting initial balance.\n3. Реализуйте проверку баланса <code>getBalance()</code> и <code>setBalance(double balance)</code> >= 0.\n4. In <code>main</code>, instantiate with 100000.0, set to 150000.0, attempt -50000.0.\n5. Распечатать окончательный баланс: <code>System.out.println(\"Yakuniy balans: \" + acc.getBalance() + \" so'm\");</code>"
    },
    "requirements": {
      "classes": [
        "BankAccount",
        "Main"
      ],
      "privateFields": [
        "balance"
      ],
      "methods": [
        "getBalance",
        "setBalance"
      ],
      "methodDetails": [
        {
          "name": "setBalance",
          "signature": "public void setBalance(double balance)",
          "params": "double balance — yangilanayotgan yangi balans qiymati",
          "paramsEn": "double balance — new balance value to set",
          "returns": "void (agar balance >= 0 bo'lsa yangilaydi, manfiy bo'lsa xato xabarini chiqaradi)",
          "returnsEn": "void (validates balance >= 0, else prints error)",
          "logic": "if (balance >= 0) this.balance = balance; else System.out.println('Xato: Balans manfiy bo\\'lishi mumkin emas!');",
          "logicEn": "if (balance >= 0) this.balance = balance; else prints error.",
          "example": "acc.setBalance(150000.0); // Qabul qilinadi. acc.setBalance(-50000.0); // Rad etiladi va xato chiqadi"
        },
        {
          "name": "getBalance",
          "signature": "public double getBalance()",
          "params": "Parametr qabul qilmaydi ()",
          "paramsEn": "No parameters ()",
          "returns": "double (private balance maydonining joriy qiymati)",
          "returnsEn": "double (current balance value)",
          "logic": "return this.balance;",
          "logicEn": "return this.balance;",
          "example": "double b = acc.getBalance(); // 150000.0 qaytaradi"
        }
      ]
    },
    "starterCode": "class BankAccount {\n    private double balance;\n\n    // getBalance va setBalance metodlarini yozing (manfiylikdan himoya bilan)\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        // Balansni musbat va manfiy qilib o'zgartirib ko'ring\n        \n    }\n}",
    "solution": "class BankAccount {\n    private double balance;\n\n    public BankAccount(double initialBalance) {\n        if (initialBalance >= 0) {\n            this.balance = initialBalance;\n        } else {\n            this.balance = 0.0;\n        }\n    }\n\n    public double getBalance() {\n        return this.balance;\n    }\n\n    public void setBalance(double balance) {\n        if (balance >= 0) {\n            this.balance = balance;\n        } else {\n            System.out.println(\"Xato: Balans manfiy bo'lishi mumkin emas!\");\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BankAccount acc = new BankAccount(100000.0);\n        acc.setBalance(150000.0);\n        acc.setBalance(-50000.0); // Rad etiladi\n\n        System.out.println(\"Yakuniy balans: \" + acc.getBalance() + \" so'm\");\n    }\n}",
    "detailedSolution": {
      "theory": "Setter metodlari (Mutators) ma'lumotlarni o'zgartirishdan oldin tekshiruvdan o'tkazuvchi nazorat-o'tkazish punktidir. Agar maydon public bo'lsa, xohlagan kod `acc.balance = -9999` qilib tizimni buzgan bo'lardi.",
      "theoryEn": "Setters act as checkpoint validators, preventing invalid state changes that would crash downstream modules.",
      "cleanCode": "public void setBalance(double balance) {\n    if (balance >= 0) this.balance = balance;\n}",
      "breakdown": [
        "To'g'ridan-to'g'ri maydonga yozish taqiqlandi.",
        "Setter orqali faqat noldan katta yoki teng qiymatlar qabul qilindi."
      ],
      "pitfalls": "Konstruktor ichida ham xuddi shu tekshiruvni bajarishni yoki setBalanceni chaqirishni unutmang.",
      "cw2Tip": "CW2 da buyurtma soni yoki narxi manfiy kiritilmasligi setterlar bilan kafolatlanadi.",
      "theoryRu": "Сеттеры действуют как валидаторы контрольных точек, предотвращая недопустимые изменения состояния, которые могут привести к сбою последующих модулей.",
      "pitfallsRu": "Не забудьте выполнить ту же проверку или вызвать setBalance внутри конструктора.",
      "breakdownRu": [
        "Запись непосредственно в поле запрещена.",
        "Через сеттер принимаются только значения больше или равные нулю."
      ]
    },
    "sampleData": [
      "Boshlang'ich balans: 100000.0 so'm",
      "Kirim (depozit): +50000.0 so'm",
      "Chiqim (withdraw): -30000.0 so'm",
      "Ortiqcha yechish: -150000.0 so'm (rad etiladi)"
    ],
    "expectedOutput": "Xato: Balans manfiy bo'lishi mumkin emas!\nYakuniy balans: 150000.0 so'm",
    "story": {
      "uz": "Bank hisob raqamida balans manfiy qiymatga tushib ketmasligi uchun hisob balansi 'private' qilinadi va qiymat o'zgartirish faqat himoyalangan Setter orqali nazorat qilinadi.",
      "en": "A bank account protects its balance field with private access and guards against negative balance updates using an encapsulated setter.",
      "ru": "Банковский счет защищает свое поле баланса с помощью частного доступа и защищает от обновлений отрицательного баланса с помощью инкапсулированного установщика."
    },
    "steps": {
      "uz": [
        "<code>BankAccount</code> klassini tuzing: <code>private double balance;</code> maydonini e'lon qiling.",
        "Konstruktorda boshlang'ich balansni tekshirib o'rnating: manfiy bo'lsa <code>0.0</code> qiling.",
        "<code>getBalance()</code> va <code>setBalance(double balance)</code> metodlarini yozing: agar yangi balans manfiy bo'lsa, <code>System.out.println(\"Xato: Balans manfiy bo'lishi mumkin emas!\");</code> xabarini chiqaring va balansni o'zgartirmang.",
        "<code>Main</code> metodida <code>BankAccount acc = new BankAccount(100000.0);</code> tuzing, 150000.0 qilib oshiring, so'ng -50000.0 qilishga urinib ko'ring (rad etiladi).",
        "Yakuniy balansni chop eting: <code>System.out.println(\"Yakuniy balans: \" + acc.getBalance() + \" so'm\");</code>"
      ],
      "en": [
        "Declare class <code>BankAccount</code> with private field <code>balance</code>.",
        "Implement constructor setting initial balance.",
        "Implement <code>getBalance()</code> and <code>setBalance(double balance)</code> checking balance >= 0.",
        "In <code>main</code>, instantiate with 100000.0, set to 150000.0, attempt -50000.0.",
        "Print final balance: <code>System.out.println(\"Yakuniy balans: \" + acc.getBalance() + \" so'm\");</code>"
      ],
      "ru": [
        "Объявите класс <code>BankAccount</code> с закрытым полем <code>balance</code>.",
        "Implement constructor setting initial balance.",
        "Реализуйте проверку баланса <code>getBalance()</code> и <code>setBalance(double balance)</code> >= 0.",
        "In <code>main</code>, instantiate with 100000.0, set to 150000.0, attempt -50000.0.",
        "Распечатать окончательный баланс: <code>System.out.println(\"Yakuniy balans: \" + acc.getBalance() + \" so'm\");</code>"
      ]
    }
  },
  {
    "id": 33,
    "tier": 4,
    "tierName": "4-Bosqich: Inkapsulyatsiya va Himoya",
    "sector": "31-40",
    "title": {
      "uz": "33. Corporate Employee — Oylikni Kamaytirishni Taqiqlash (State-Dependent Setter)",
      "en": "33. Corporate Employee — State-Dependent Salary Validation",
      "ru": "33. Корпоративный сотрудник — подтверждение заработной платы в зависимости от государства"
    },
    "scenario": {
      "uz": "[Hayotiy Voqealik & Kontekst]\nKorporativ qoidalarga ko'ra xodimning oylik maoshini asossiz ravishda kamaytirish qat'iyan taqiqlanadi (State-Dependent Setter). Faqat oshirish yoki saqlab qolishga ruxsat etiladi.\n\n[Bajarilishi kerak bo'lgan vazifalar (1 dan 5 gacha)]\n1. Employee klassini tuzing: private String name; va private double salary; maydonlarini e'lon qiling.\n2. Konstruktor va Getter metodlarini yozing: getName(), getSalary().\n3. public void setSalary(double newSalary) metodini yozing: agar newSalary >= this.salary bo'lsa qabul qiling, aks holda System.out.println(\"Taqiqlangan: Oylikni kamaytirish mumkin emas!\"); deb chiqaring.\n4. Main metodida Employee emp = new Employee(\"Azizbek\", 5000000.0); tuzing, oylikni 6500000.0 ga oshiring, so'ng 4000000.0 ga tushirishga urinib ko'ring.\n5. Xodim ma'lumotlarini chop eting: System.out.println(\"Xodim: \" + emp.getName() + \" | Oylik: \" + emp.getSalary() + \" so'm\");",
      "en": "[Real-World Story & Context]\nCorporate policy prohibits decreasing employee salaries. The encapsulated setter enforces state-dependent validation allowing only wage increases.\n\n[Step-by-Step Implementation Tasks (1 to 5)]\n1. Create class Employee with private fields name and salary.\n2. Implement constructor and getters.\n3. Implement setSalary(double newSalary) permitting only newSalary >= this.salary.\n4. In main, instantiate with 5000000.0, set to 6500000.0, attempt 4000000.0.\n5. Print final employee details.",
      "ru": "📖 Контекст и описание задачи\nКорпоративная политика запрещает снижение заработной платы сотрудников. Инкапсулированный установщик обеспечивает проверку, зависящую от состояния, позволяя только увеличивать заработную плату.\n\n📋 Пошаговые задачи (от 1 до 5)\n1. Создайте класс <code>Employee</code> с закрытыми полями <code>name</code> и <code>salary</code>.\n2. Реализуйте конструктор и геттеры.\n3. Реализуйте <code>setSalary(double newSalary)</code>, разрешив только <code>newSalary >= this.salary</code>.\n4. В <code>main</code> создайте экземпляр с 5000000.0, установите значение 6500000.0, попытайтесь 4000000.0.\n5. Распечатайте окончательные данные о сотруднике."
    },
    "requirements": {
      "classes": [
        "Employee",
        "Main"
      ],
      "privateFields": [
        "name",
        "salary"
      ],
      "methods": [
        "getName",
        "getSalary",
        "setSalary"
      ],
      "constructors": [
        "Employee"
      ],
      "methodDetails": [
        {
          "name": "setSalary",
          "signature": "public void setSalary(double newSalary)",
          "params": "double newSalary — taklif qilinayotgan yangi oylik maosh",
          "paramsEn": "double newSalary — proposed new salary amount",
          "returns": "void (agar newSalary >= this.salary bo'lsa oshiradi, kamaytirilsa taqiqlab xato chiqaradi)",
          "returnsEn": "void (only permits salary raise, rejects reduction with error message)",
          "logic": "if (newSalary >= this.salary) this.salary = newSalary; else System.out.println('Taqiqlangan: Oylikni kamaytirish mumkin emas!');",
          "logicEn": "if (newSalary >= this.salary) this.salary = newSalary; else prints error message.",
          "example": "emp.setSalary(6500000.0); // 5 mln dan 6.5 mln ga oshadi. emp.setSalary(4000000.0); // Rad etiladi"
        }
      ]
    },
    "starterCode": "class Employee {\n    private String name;\n    private double salary;\n\n    // Konstruktor, getterlar va himoyalangan setSalary ni yozing\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        // Maoshni oshirib va kamaytirib ko'ring\n        \n    }\n}",
    "solution": "class Employee {\n    private String name;\n    private double salary;\n\n    public Employee(String name, double salary) {\n        this.name = name;\n        this.salary = (salary >= 0) ? salary : 0.0;\n    }\n\n    public String getName() {\n        return this.name;\n    }\n\n    public double getSalary() {\n        return this.salary;\n    }\n\n    public void setSalary(double newSalary) {\n        if (newSalary >= this.salary) {\n            this.salary = newSalary;\n        } else {\n            System.out.println(\"Taqiqlangan: Oylikni kamaytirish mumkin emas!\");\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Employee emp = new Employee(\"Azizbek\", 5000000.0);\n        emp.setSalary(6500000.0); // Qabul qilinadi\n        emp.setSalary(4000000.0); // Rad etiladi\n\n        System.out.println(\"Xodim: \" + emp.getName() + \" | Oylik: \" + emp.getSalary() + \" so'm\");\n    }\n}",
    "detailedSolution": {
      "theory": "Holatga bog'liq validatsiya (State-dependent validation): Yangi qiymat nafaqat o'z-o'zidan to'g'ri bo'lishi, balki ob'yektning joriy qiymati bilan solishtirilganda ham biznes mantiqqa mos kelishi kerak.",
      "theoryEn": "State-dependent mutators evaluate proposed values against current instance state.",
      "cleanCode": "if (newSalary >= this.salary) this.salary = newSalary;",
      "breakdown": [
        "Maydonlar to'liq inkapsulyatsiya qilindi.",
        "Oylik faqat ko'tarilish yo'nalishida o'zgaradi."
      ],
      "pitfalls": "Shartda `newSalary >= this.salary` o'rniga faqat `newSalary >= 0` deb qo'yish kamaytirishga ruxsat berib yuboradi.",
      "cw2Tip": "Auksion narxini oshirishda ham faqat yuqoriroq narxlar qabul qilinadi.",
      "theoryRu": "Зависимые от состояния мутаторы оценивают предлагаемые значения по сравнению с текущим состоянием экземпляра.",
      "pitfallsRu": "Shartda `newSalary >= this.salary` o'rniga faqat `newSalary >= 0` deb qo'yish kamaytirishga ruxsat berib yuboradi.",
      "breakdownRu": [
        "Поля полностью инкапсулированы.",
        "Месячные изменения только в сторону роста."
      ]
    },
    "sampleData": [
      "name: \"Azizbek\"",
      "Boshlang'ich oylik: 5000000.0 so'm",
      "Yangi oylik: 6500000.0 so'm (qabul qilinadi)",
      "Kamaytirish: 4000000.0 so'm (rad etiladi)"
    ],
    "expectedOutput": "Taqiqlangan: Oylikni kamaytirish mumkin emas!\nXodim: Azizbek | Oylik: 6500000.0 so'm",
    "story": {
      "uz": "Korporativ qoidalarga ko'ra xodimning oylik maoshini asossiz ravishda kamaytirish qat'iyan taqiqlanadi (State-Dependent Setter). Faqat oshirish yoki saqlab qolishga ruxsat etiladi.",
      "en": "Corporate policy prohibits decreasing employee salaries. The encapsulated setter enforces state-dependent validation allowing only wage increases.",
      "ru": "Корпоративная политика запрещает снижение заработной платы сотрудников. Инкапсулированный установщик обеспечивает проверку, зависящую от состояния, позволяя только увеличивать заработную плату."
    },
    "steps": {
      "uz": [
        "<code>Employee</code> klassini tuzing: <code>private String name;</code> va <code>private double salary;</code> maydonlarini e'lon qiling.",
        "Konstruktor va Getter metodlarini yozing: <code>getName()</code>, <code>getSalary()</code>.",
        "<code>public void setSalary(double newSalary)</code> metodini yozing: agar <code>newSalary >= this.salary</code> bo'lsa qabul qiling, aks holda <code>System.out.println(\"Taqiqlangan: Oylikni kamaytirish mumkin emas!\");</code> deb chiqaring.",
        "<code>Main</code> metodida <code>Employee emp = new Employee(\"Azizbek\", 5000000.0);</code> tuzing, oylikni 6500000.0 ga oshiring, so'ng 4000000.0 ga tushirishga urinib ko'ring.",
        "Xodim ma'lumotlarini chop eting: <code>System.out.println(\"Xodim: \" + emp.getName() + \" | Oylik: \" + emp.getSalary() + \" so'm\");</code>"
      ],
      "en": [
        "Create class <code>Employee</code> with private fields <code>name</code> and <code>salary</code>.",
        "Implement constructor and getters.",
        "Implement <code>setSalary(double newSalary)</code> permitting only <code>newSalary >= this.salary</code>.",
        "In <code>main</code>, instantiate with 5000000.0, set to 6500000.0, attempt 4000000.0.",
        "Print final employee details."
      ],
      "ru": [
        "Создайте класс <code>Employee</code> с закрытыми полями <code>name</code> и <code>salary</code>.",
        "Реализуйте конструктор и геттеры.",
        "Реализуйте <code>setSalary(double newSalary)</code>, разрешив только <code>newSalary >= this.salary</code>.",
        "В <code>main</code> создайте экземпляр с 5000000.0, установите значение 6500000.0, попытайтесь 4000000.0.",
        "Распечатайте окончательные данные о сотруднике."
      ]
    }
  },
  {
    "id": 34,
    "tier": 4,
    "tierName": "4-Bosqich: Inkapsulyatsiya va Himoya",
    "sector": "31-40",
    "title": {
      "uz": "34. Rectangle Geometry — Hisoblanuvchi Getter (Computed Read-Only Property)",
      "en": "34. Rectangle Geometry — Computed Read-Only Property",
      "ru": "34. Геометрия прямоугольника — вычисляемое свойство, доступное только для чтения."
    },
    "scenario": {
      "uz": "[Hayotiy Voqealik & Kontekst]\nGeometrik to'g'ri to'rtburchak klassida yuzani alohida maydonda saqlamasdan, uni talab bo'lganda eni va bo'yidan hisoblab beruvchi Read-Only hisoblanuvchi Getter (Computed Property) tavsiya etiladi.\n\n[Bajarilishi kerak bo'lgan vazifalar (1 dan 5 gacha)]\n1. Rectangle klassini e'lon qiling: private double width; va private double height; maydonlarini qo'shing.\n2. Konstruktorda qiymatlarni tekshiring (kamida 1.0) va o'rnating.\n3. Oddiy getterlar getWidth(), getHeight() hamda hisoblanuvchi public double getArea() { return this.width * this.height; } metodini yozing.\n4. Main metodida Rectangle rect = new Rectangle(5.0, 8.0); ob'yektini yarating.\n5. O'lchamlari va yuzasini 2 qatorda chop eting:System.out.println(\"Eni: \" + rect.getWidth() + \" | Bo'yi: \" + rect.getHeight());System.out.println(\"Yuzasi: \" + rect.getArea());",
      "en": "[Real-World Story & Context]\nA geometric Rectangle calculates its area on the fly using a read-only computed getter, ensuring synchronized dimensions without redundant state.\n\n[Step-by-Step Implementation Tasks (1 to 5)]\n1. Declare class Rectangle with private fields width and height.\n2. Implement constructor enforcing min 1.0.\n3. Implement getters and computed property getArea() returning width * height.\n4. In main, instantiate Rectangle(5.0, 8.0).\n5. Print dimensions and area on 2 lines.",
      "ru": "📖 Контекст и описание задачи\nГеометрический прямоугольник вычисляет свою площадь на лету, используя вычисляемый метод получения только для чтения, обеспечивая синхронизацию размеров без избыточного состояния.\n\n📋 Пошаговые задачи (от 1 до 5)\n1. Объявите класс <code>Rectangle</code> с закрытыми полями <code>width</code> и <code>height</code>.\n2. Реализуйте конструктор, обеспечивающий мин. 1.0.\n3. Реализуйте геттеры и вычисляемое свойство <code>getArea()</code>, возвращающее ширину * высоту.\n4. В <code>main</code> создайте экземпляр <code>Rectangle(5.0, 8.0)</code>.\n5. Напечатайте размеры и площадь в 2 строки."
    },
    "requirements": {
      "classes": [
        "Rectangle",
        "Main"
      ],
      "privateFields": [
        "width",
        "height"
      ],
      "methods": [
        "getWidth",
        "getHeight",
        "getArea"
      ],
      "constructors": [
        "Rectangle"
      ],
      "methodDetails": [
        {
          "name": "getArea",
          "signature": "public double getArea()",
          "params": "Parametr qabul qilmaydi ()",
          "paramsEn": "No parameters ()",
          "returns": "double (to'g'ri to'rtburchak yuzasi: width * height)",
          "returnsEn": "double (computed area: width * height)",
          "logic": "return this.width * this.height;",
          "logicEn": "return this.width * this.height;",
          "example": "Rectangle rect = new Rectangle(5.0, 8.0); double area = rect.getArea(); // 40.0 qaytaradi"
        }
      ]
    },
    "starterCode": "class Rectangle {\n    private double width;\n    private double height;\n\n    // Konstruktor va getWidth, getHeight, getArea metodlarini yozing\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        // To'g'ri to'rtburchak maydonini hisoblang\n        \n    }\n}",
    "solution": "class Rectangle {\n    private double width;\n    private double height;\n\n    public Rectangle(double width, double height) {\n        this.width = (width > 0) ? width : 1.0;\n        this.height = (height > 0) ? height : 1.0;\n    }\n\n    public double getWidth() { return this.width; }\n    public double getHeight() { return this.height; }\n\n    // Computed Read-Only Property\n    public double getArea() {\n        return this.width * this.height;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Rectangle rect = new Rectangle(5.0, 8.0);\n        System.out.println(\"Eni: \" + rect.getWidth() + \" | Bo'yi: \" + rect.getHeight());\n        System.out.println(\"Yuzasi: \" + rect.getArea());\n    }\n}",
    "detailedSolution": {
      "theory": "Hisoblanuvchi xususiyatlar (Computed Properties) ortiqcha ma'lumotlar saqlanishining oldini oladi. Agar 'area' maydoni ochilganda, 'width' o'zgarganda 'area' eskirib, sinxronizatsiya buzilishi mumkin edi.",
      "theoryEn": "Computed properties prevent state desynchronization by deriving values dynamically on demand.",
      "cleanCode": "public double getArea() {\n    return this.width * this.height;\n}",
      "breakdown": [
        "Faqat poydevor maydonlar (width, height) xotirada saqlandi.",
        "Yuza hisobi getter ichida dinamik amalga oshirildi."
      ],
      "pitfalls": "Hisoblanuvchi propertylar uchun setter yaratilmaydi — ular faqat read-only bo'ladi.",
      "cw2Tip": "CW2 savatining umumiy summasi (`getTotalAmount()`) xuddi shunday dinamik hisoblanadi.",
      "theoryRu": "Вычисляемые свойства предотвращают десинхронизацию состояния, динамически получая значения по требованию.",
      "pitfallsRu": "Сеттеры не создаются для перечисляемых свойств — они доступны только для чтения.",
      "breakdownRu": [
        "В памяти сохранились только базовые поля (ширина, высота).",
        "Yuza hisobi getter ichida dinamik amalga oshirildi."
      ]
    },
    "sampleData": [
      "width (eni): 5.0",
      "height (bo'yi): 8.0"
    ],
    "expectedOutput": "Eni: 5.0 | Bo'yi: 8.0\nYuzasi: 40.0",
    "story": {
      "uz": "Geometrik to'g'ri to'rtburchak klassida yuzani alohida maydonda saqlamasdan, uni talab bo'lganda eni va bo'yidan hisoblab beruvchi Read-Only hisoblanuvchi Getter (Computed Property) tavsiya etiladi.",
      "en": "A geometric Rectangle calculates its area on the fly using a read-only computed getter, ensuring synchronized dimensions without redundant state.",
      "ru": "Геометрический прямоугольник вычисляет свою площадь на лету, используя вычисляемый метод получения только для чтения, обеспечивая синхронизацию размеров без избыточного состояния."
    },
    "steps": {
      "uz": [
        "<code>Rectangle</code> klassini e'lon qiling: <code>private double width;</code> va <code>private double height;</code> maydonlarini qo'shing.",
        "Konstruktorda qiymatlarni tekshiring (kamida 1.0) va o'rnating.",
        "Oddiy getterlar <code>getWidth()</code>, <code>getHeight()</code> hamda hisoblanuvchi <code>public double getArea() { return this.width * this.height; }</code> metodini yozing.",
        "<code>Main</code> metodida <code>Rectangle rect = new Rectangle(5.0, 8.0);</code> ob'yektini yarating.",
        "O'lchamlari va yuzasini 2 qatorda chop eting:<br><code>System.out.println(\"Eni: \" + rect.getWidth() + \" | Bo'yi: \" + rect.getHeight());</code><br><code>System.out.println(\"Yuzasi: \" + rect.getArea());</code>"
      ],
      "en": [
        "Declare class <code>Rectangle</code> with private fields <code>width</code> and <code>height</code>.",
        "Implement constructor enforcing min 1.0.",
        "Implement getters and computed property <code>getArea()</code> returning width * height.",
        "In <code>main</code>, instantiate <code>Rectangle(5.0, 8.0)</code>.",
        "Print dimensions and area on 2 lines."
      ],
      "ru": [
        "Объявите класс <code>Rectangle</code> с закрытыми полями <code>width</code> и <code>height</code>.",
        "Реализуйте конструктор, обеспечивающий мин. 1.0.",
        "Реализуйте геттеры и вычисляемое свойство <code>getArea()</code>, возвращающее ширину * высоту.",
        "В <code>main</code> создайте экземпляр <code>Rectangle(5.0, 8.0)</code>.",
        "Напечатайте размеры и площадь в 2 строки."
      ]
    }
  },
  {
    "id": 35,
    "tier": 4,
    "tierName": "4-Bosqich: Inkapsulyatsiya va Himoya",
    "sector": "31-40",
    "title": {
      "uz": "35. Supermarket Tax — QQS Qo'shilgan Narx Getteri ('getPriceWithTax')",
      "en": "35. Supermarket Tax — Encapsulated Price with VAT Calculation",
      "ru": "35. Налог на супермаркеты — инкапсулированная цена с расчетом НДС."
    },
    "scenario": {
      "uz": "[Hayotiy Voqealik & Kontekst]\nSupermarketda mahsulotning sof narxiga 12% QQS solig'i qo'shilgan narxini xaridordan alohida hisoblash uchun 'getPriceWithTax()' maxsus getteri xizmat qiladi.\n\n[Bajarilishi kerak bo'lgan vazifalar (1 dan 5 gacha)]\n1. Product klassini tuzing: private double netPrice; maydonini e'lon qiling.\n2. Konstruktor, getNetPrice() va manfiy bo'lmagan qiymatni tekshiruvchi setNetPrice(double netPrice) metodlarini yozing.\n3. public double getPriceWithTax() metodini yozing: return this.netPrice * 1.12; (12% QQS).\n4. Main metodida Product p = new Product(100000.0); yarating.\n5. Sof narx va QQS bilan narxni 2 qatorda chop eting:System.out.println(\"Tansiq narx: \" + p.getNetPrice() + \" so'm\");System.out.println(\"QQS bilan narx: \" + p.getPriceWithTax() + \" so'm\");",
      "en": "[Real-World Story & Context]\nA supermarket inventory models net price and exposes a VAT-inclusive price through a computed getter adding 12% tax.\n\n[Step-by-Step Implementation Tasks (1 to 5)]\n1. Create class Product with private field netPrice.\n2. Implement constructor, getNetPrice(), and setNetPrice().\n3. Implement computed getter getPriceWithTax() returning netPrice * 1.12.\n4. In main, instantiate with 100000.0.\n5. Print net price and tax-inclusive price on 2 lines.",
      "ru": "📖 Контекст и описание задачи\nЗапасы в супермаркете моделируют чистую цену и выставляют цену с учетом НДС через вычисляемый геттер, добавляющий налог в размере 12%.\n\n📋 Пошаговые задачи (от 1 до 5)\n1. Создайте класс <code>Product</code> с закрытым полем <code>netPrice</code>.\n2. Реализуйте конструктор <code>getNetPrice()</code> и <code>setNetPrice()</code>.\n3. Реализуйте вычисляемый метод получения <code>getPriceWithTax()</code>, возвращающий netPrice * 1.12.\n4. В <code>main</code> создайте экземпляр с 100000.0.\n5. Распечатайте чистую цену и цену с учетом налогов в 2 строки."
    },
    "requirements": {
      "classes": [
        "Product",
        "Main"
      ],
      "privateFields": [
        "netPrice"
      ],
      "methods": [
        "getNetPrice",
        "setNetPrice",
        "getPriceWithTax"
      ],
      "constructors": [
        "Product"
      ],
      "methodDetails": [
        {
          "name": "getPriceWithTax",
          "signature": "public double getPriceWithTax()",
          "params": "Parametr qabul qilmaydi ()",
          "paramsEn": "No parameters ()",
          "returns": "double (12% QQS solig'i qo'shilgan yakuniy narx: netPrice * 1.12)",
          "returnsEn": "double (price with 12% VAT: netPrice * 1.12)",
          "logic": "return this.netPrice * 1.12;",
          "logicEn": "return this.netPrice * 1.12;",
          "example": "Product p = new Product(100000.0); p.getPriceWithTax(); // 112000.0 so'm qaytaradi"
        }
      ]
    },
    "starterCode": "class Product {\n    private double netPrice;\n\n    // Konstruktor, getter/setter va getPriceWithTax metodlarini yozing\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        // Tovar narxini QQS bilan ko'ring\n        \n    }\n}",
    "solution": "class Product {\n    private double netPrice;\n\n    public Product(double netPrice) {\n        this.setNetPrice(netPrice);\n    }\n\n    public double getNetPrice() {\n        return this.netPrice;\n    }\n\n    public void setNetPrice(double netPrice) {\n        if (netPrice >= 0) {\n            this.netPrice = netPrice;\n        } else {\n            this.netPrice = 0.0;\n        }\n    }\n\n    public double getPriceWithTax() {\n        return this.netPrice * 1.12; // 12% QQS\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product p = new Product(100000.0);\n        System.out.println(\"Tansiq narx: \" + p.getNetPrice() + \" so'm\");\n        System.out.println(\"QQS bilan narx: \" + p.getPriceWithTax() + \" so'm\");\n    }\n}",
    "detailedSolution": {
      "theory": "Konstruktor ichida to'g'ridan-to'g'ri 'this.netPrice = netPrice' deb yozmasdan, 'this.setNetPrice(netPrice)' orqali setterdan foydalanish DRY qoidasiga to'liq mos keladi.",
      "theoryEn": "Calling setters within constructors reuses validation logic without duplication.",
      "cleanCode": "public double getPriceWithTax() { return this.netPrice * 1.12; }",
      "breakdown": [
        "Narx inkapsulyatsiya qilindi.",
        "Fiskal soliq qoidasi klass ichida berkitildi."
      ],
      "pitfalls": "Soliq stavkasi o'zgarganda faqat klass ichidagi formulani o'zgartirish kifoya, butun dasturni qayta yozish shart emas.",
      "cw2Tip": "Savdo kvitansiyalarida toza narx va soliq ajratib ko'rsatilishi shart.",
      "theoryRu": "Вызов установщиков внутри конструкторов повторно использует логику проверки без дублирования.",
      "pitfallsRu": "Солик ставкаси о'згарганда факат класс ичидаги формули о'згартириш кифоя, но тун дастурни каита йозиш шарт эмас.",
      "breakdownRu": [
        "Цена инкапсулирована.",
        "Fiskal soliq qoidasi klass ichida berkitildi."
      ]
    },
    "sampleData": [
      "netPrice (tannarx): 100000.0 so'm",
      "QQS stavkasi: 12%"
    ],
    "expectedOutput": "Tansiq narx: 100000.0 so'm\nQQS bilan narx: 112000.0 so'm",
    "story": {
      "uz": "Supermarketda mahsulotning sof narxiga 12% QQS solig'i qo'shilgan narxini xaridordan alohida hisoblash uchun 'getPriceWithTax()' maxsus getteri xizmat qiladi.",
      "en": "A supermarket inventory models net price and exposes a VAT-inclusive price through a computed getter adding 12% tax.",
      "ru": "Запасы в супермаркете моделируют чистую цену и выставляют цену с учетом НДС через вычисляемый геттер, добавляющий налог в размере 12%."
    },
    "steps": {
      "uz": [
        "<code>Product</code> klassini tuzing: <code>private double netPrice;</code> maydonini e'lon qiling.",
        "Konstruktor, <code>getNetPrice()</code> va manfiy bo'lmagan qiymatni tekshiruvchi <code>setNetPrice(double netPrice)</code> metodlarini yozing.",
        "<code>public double getPriceWithTax()</code> metodini yozing: <code>return this.netPrice * 1.12;</code> (12% QQS).",
        "<code>Main</code> metodida <code>Product p = new Product(100000.0);</code> yarating.",
        "Sof narx va QQS bilan narxni 2 qatorda chop eting:<br><code>System.out.println(\"Tansiq narx: \" + p.getNetPrice() + \" so'm\");</code><br><code>System.out.println(\"QQS bilan narx: \" + p.getPriceWithTax() + \" so'm\");</code>"
      ],
      "en": [
        "Create class <code>Product</code> with private field <code>netPrice</code>.",
        "Implement constructor, <code>getNetPrice()</code>, and <code>setNetPrice()</code>.",
        "Implement computed getter <code>getPriceWithTax()</code> returning netPrice * 1.12.",
        "In <code>main</code>, instantiate with 100000.0.",
        "Print net price and tax-inclusive price on 2 lines."
      ],
      "ru": [
        "Создайте класс <code>Product</code> с закрытым полем <code>netPrice</code>.",
        "Реализуйте конструктор <code>getNetPrice()</code> и <code>setNetPrice()</code>.",
        "Реализуйте вычисляемый метод получения <code>getPriceWithTax()</code>, возвращающий netPrice * 1.12.",
        "В <code>main</code> создайте экземпляр с 100000.0.",
        "Распечатайте чистую цену и цену с учетом налогов в 2 строки."
      ]
    }
  },
  {
    "id": 36,
    "tier": 4,
    "tierName": "4-Bosqich: Inkapsulyatsiya va Himoya",
    "sector": "31-40",
    "title": {
      "uz": "36. WIUT Student ID — Setterda Satr Formatini Validatsiya Qilish",
      "en": "36. WIUT Student ID — String Format Validation in Setter",
      "ru": "36. Идентификатор студента МВУТ — проверка формата строки в сеттере"
    },
    "scenario": {
      "uz": "[Hayotiy Voqealik & Kontekst]\nWIUT universitetida talaba ID raqami qat'iy qoidaga ega: u roppa-rosa 8 ta belgidan iborat bo'lishi va '000' prefiksi bilan boshlanishi shart. Setter orqali satr formati tekshiriladi.\n\n[Bajarilishi kerak bo'lgan vazifalar (1 dan 5 gacha)]\n1. Student klassini tuzing: private String studentId; maydonini e'lon qiling.\n2. public void setStudentId(String studentId) metodini yozing: agar studentId != null && studentId.length() == 8 && studentId.startsWith(\"000\") bo'lsa qabul qiling, aks holda xato xabarini chiqaring va this.studentId = \"00000000\"; deb belgilang.\n3. Konstruktorda this.setStudentId(studentId); chaqiring va getStudentId() metodini qo'shing.\n4. Main metodida ikkita talaba yarating: to'g'ri ID li Student s1 = new Student(\"00014523\"); va noto'g'ri ID li Student s2 = new Student(\"12345\");.\n5. Ikkala talabaning yakuniy ID raqamlarini 2 qatorda chop eting:System.out.println(\"Talaba 1 ID: \" + s1.getStudentId());System.out.println(\"Talaba 2 ID: \" + s2.getStudentId());",
      "en": "[Real-World Story & Context]\nThe WIUT Student Portal validates Student ID formatting via an encapsulated setter requiring an 8-character string prefixed with '000'.\n\n[Step-by-Step Implementation Tasks (1 to 5)]\n1. Declare class Student with private field studentId.\n2. Implement setStudentId() validating 8 characters and '000' prefix.\n3. Implement constructor delegating to setter and getStudentId().\n4. In main, instantiate valid s1 and invalid s2.\n5. Print both IDs on 2 lines.",
      "ru": "📖 Контекст и описание задачи\nСтуденческий портал WIUT проверяет форматирование идентификатора студента с помощью инкапсулированного установщика, требующего 8-значной строки с префиксом «000».\n\n📋 Пошаговые задачи (от 1 до 5)\n1. Объявите класс <code>Student</code> с закрытым полем <code>studentId</code>.\n2. Реализуйте <code>setStudentId()</code>, проверяющий 8 символов и префикс «000».\n3. Реализуйте конструктор, делегирующий функции установщику и <code>getStudentId()</code>.\n4. В <code>main</code> создайте экземпляр действительного <code>s1</code> и недействительного <code>s2</code>.\n5. Распечатайте оба идентификатора в 2 строки."
    },
    "requirements": {
      "classes": [
        "Student",
        "Main"
      ],
      "privateFields": [
        "studentId"
      ],
      "methods": [
        "getStudentId",
        "setStudentId"
      ],
      "constructors": [
        "Student"
      ],
      "methodDetails": [
        {
          "name": "setStudentId",
          "signature": "public void setStudentId(String studentId)",
          "params": "String studentId — talabaning 8 xonali kodi (masalan: '00014523')",
          "paramsEn": "String studentId — 8-character ID string (e.g. '00014523')",
          "returns": "void (tekshiruvdan o'tsa saqlaydi, o'tmasa '00000000' qiymatini o'rnatib xato chiqaradi)",
          "returnsEn": "void (validates 8 chars and '000' prefix, else defaults to '00000000' and prints error)",
          "logic": "if (studentId != null && studentId.length() == 8 && studentId.startsWith('000')) this.studentId = studentId; else { System.out.println('Xato: ID 8 ta belgidan iborat va \\'000\\' bilan boshlanishi shart!'); this.studentId = '00000000'; }",
          "logicEn": "validates length 8 and '000' prefix, else defaults to '00000000' and prints error.",
          "example": "s.setStudentId('00014523'); // To'g'ri. s.setStudentId('12345'); // Xato, '00000000' bo'ladi"
        }
      ]
    },
    "starterCode": "class Student {\n    private String studentId;\n\n    // Konstruktor, getStudentId va formatni tekshiruvchi setStudentId ni yozing\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        // To'g'ri va xato ID larni sinab ko'ring\n        \n    }\n}",
    "solution": "class Student {\n    private String studentId;\n\n    public Student(String studentId) {\n        this.setStudentId(studentId);\n    }\n\n    public String getStudentId() {\n        return this.studentId;\n    }\n\n    public void setStudentId(String studentId) {\n        if (studentId != null && studentId.length() == 8 && studentId.startsWith(\"000\")) {\n            this.studentId = studentId;\n        } else {\n            System.out.println(\"Xato: ID 8 ta belgidan iborat va '000' bilan boshlanishi shart!\");\n            this.studentId = \"00000000\";\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Student s1 = new Student(\"00014523\"); // To'g'ri\n        Student s2 = new Student(\"12345\");    // Xato\n\n        System.out.println(\"Talaba 1 ID: \" + s1.getStudentId());\n        System.out.println(\"Talaba 2 ID: \" + s2.getStudentId());\n    }\n}",
    "detailedSolution": {
      "theory": "String validatsiyasida null tekshiruvi (Null Check): Har qanday String metodini (length, startsWith) chaqirishdan oldin 'studentId != null' tekshiruvini qo'yish NullPointerException xatoligini bartaraf qiladi.",
      "theoryEn": "Preemptively guarding against null pointers via 'studentId != null' ensures bulletproof string validations.",
      "cleanCode": "if (studentId != null && studentId.length() == 8 && studentId.startsWith(\"000\"))",
      "breakdown": [
        "Talaba identifikatori formati qat'iy nazoratga olindi.",
        "Xato kiritilganda standart xavfsiz qiymat berildi."
      ],
      "pitfalls": "Shartda `studentId.length() == 8 && studentId != null` deb yozilsa, null kelgan paytda baribir xato beradi — 'null' tekshiruvi doim birinchi bo'lishi shart!",
      "cw2Tip": "Mijoz telefon raqami (+998...) yoki pochtasini tekshirishda ham aynan shu tartib ishlatiladi.",
      "theoryRu": "Упреждающая защита от нулевых указателей с помощью 'studentId != null' обеспечивает надежную проверку строк.",
      "pitfallsRu": "Если условие записано как `studentId.length() == 8 && studentId != null`, оно все равно выдаст ошибку при обнаружении значения null — проверка «null» всегда должна быть первой!",
      "breakdownRu": [
        "Формат студенческого билета строго контролируется.",
        "Xato kiritilganda standart xavfsiz qiymat berildi."
      ]
    },
    "sampleData": [
      "1-talaba ID: \"00014523\" (8 ta raqam, to'g'ri)",
      "2-talaba ID: \"12345\" (kam raqam, xato deb belgilanadi)"
    ],
    "expectedOutput": "Xato: ID 8 ta belgidan iborat va '000' bilan boshlanishi shart!\nTalaba 1 ID: 00014523\nTalaba 2 ID: 00000000",
    "story": {
      "uz": "WIUT universitetida talaba ID raqami qat'iy qoidaga ega: u roppa-rosa 8 ta belgidan iborat bo'lishi va '000' prefiksi bilan boshlanishi shart. Setter orqali satr formati tekshiriladi.",
      "en": "The WIUT Student Portal validates Student ID formatting via an encapsulated setter requiring an 8-character string prefixed with '000'.",
      "ru": "Студенческий портал WIUT проверяет форматирование идентификатора студента с помощью инкапсулированного установщика, требующего 8-значной строки с префиксом «000»."
    },
    "steps": {
      "uz": [
        "<code>Student</code> klassini tuzing: <code>private String studentId;</code> maydonini e'lon qiling.",
        "<code>public void setStudentId(String studentId)</code> metodini yozing: agar <code>studentId != null && studentId.length() == 8 && studentId.startsWith(\"000\")</code> bo'lsa qabul qiling, aks holda xato xabarini chiqaring va <code>this.studentId = \"00000000\";</code> deb belgilang.",
        "Konstruktorda <code>this.setStudentId(studentId);</code> chaqiring va <code>getStudentId()</code> metodini qo'shing.",
        "<code>Main</code> metodida ikkita talaba yarating: to'g'ri ID li <code>Student s1 = new Student(\"00014523\");</code> va noto'g'ri ID li <code>Student s2 = new Student(\"12345\");</code>.",
        "Ikkala talabaning yakuniy ID raqamlarini 2 qatorda chop eting:<br><code>System.out.println(\"Talaba 1 ID: \" + s1.getStudentId());</code><br><code>System.out.println(\"Talaba 2 ID: \" + s2.getStudentId());</code>"
      ],
      "en": [
        "Declare class <code>Student</code> with private field <code>studentId</code>.",
        "Implement <code>setStudentId()</code> validating 8 characters and '000' prefix.",
        "Implement constructor delegating to setter and <code>getStudentId()</code>.",
        "In <code>main</code>, instantiate valid <code>s1</code> and invalid <code>s2</code>.",
        "Print both IDs on 2 lines."
      ],
      "ru": [
        "Объявите класс <code>Student</code> с закрытым полем <code>studentId</code>.",
        "Реализуйте <code>setStudentId()</code>, проверяющий 8 символов и префикс «000».",
        "Реализуйте конструктор, делегирующий функции установщику и <code>getStudentId()</code>.",
        "В <code>main</code> создайте экземпляр действительного <code>s1</code> и недействительного <code>s2</code>.",
        "Распечатайте оба идентификатора в 2 строки."
      ]
    }
  },
  {
    "id": 37,
    "tier": 4,
    "tierName": "4-Bosqich: Inkapsulyatsiya va Himoya",
    "sector": "31-40",
    "title": {
      "uz": "37. Fiscal Receipt — O'zgarmas Klass (Immutable Class va 'final' Maydonlar)",
      "en": "37. Fiscal Receipt — Immutable Class & 'final' State",
      "ru": "37. Фискальная квитанция — неизменяемый класс и «окончательное» состояние"
    },
    "scenario": {
      "uz": "[Hayotiy Voqealik & Kontekst]\nMoliyaviy fiskal cheklar generatsiya qilingandan so'ng ularning tranzaksiya kodi va summasi o'zgartirilmasligi (tamper-proof) uchun 'final' modifikatorli Immutable (o'zgarmas) klass yaratiladi.\n\n[Bajarilishi kerak bo'lgan vazifalar (1 dan 5 gacha)]\n1. Receipt klassini tuzing: private final String txnId; va private final double amount; maydonlarini e'lon qiling.\n2. Konstruktorda ikkala maydonni to'ldiring: public Receipt(String txnId, double amount).\n3. Faqat Getter metodlarini (getTxnId(), getAmount()) yozing (Setter metodlari bo'lmaydi!).\n4. Main metodida Receipt r = new Receipt(\"FISCAL-9912\", 240000.0); ob'yektini yarating.\n5. Chek ma'lumotlarini chop eting: System.out.println(\"Chek: \" + r.getTxnId() + \" | Summa: \" + r.getAmount() + \" so'm\");",
      "en": "[Real-World Story & Context]\nA fiscal financial receipt must remain tamper-proof after creation. Implement an immutable class using 'final' fields without setters.\n\n[Step-by-Step Implementation Tasks (1 to 5)]\n1. Declare class Receipt with private final fields txnId and amount.\n2. Implement constructor initializing both fields.\n3. Provide public getters only (no setters).\n4. In main, instantiate Receipt r = new Receipt(\"FISCAL-9912\", 240000.0);.\n5. Print receipt details.",
      "ru": "📖 Контекст и описание задачи\nФискальный финансовый чек должен оставаться защищенным от несанкционированного доступа после создания. Реализуйте неизменяемый класс, используя «конечные» поля без установщиков.\n\n📋 Пошаговые задачи (от 1 до 5)\n1. Объявите класс <code>Receipt</code> с закрытыми конечными полями <code>txnId</code> и <code>amount</code>.\n2. Реализуйте конструктор, инициализирующий оба поля.\n3. Предоставляйте только публичные геттеры (без сеттеров).\n4. В <code>main</code> создайте экземпляр <code>Receipt r = new Receipt(\"FISCAL-9912\", 240000.0);</code>.\n5. Print receipt details."
    },
    "requirements": {
      "classes": [
        "Receipt",
        "Main"
      ],
      "privateFields": [
        "txnId",
        "amount"
      ],
      "methods": [
        "getTxnId",
        "getAmount"
      ],
      "constructors": [
        "Receipt"
      ],
      "keywords": [
        "final"
      ],
      "methodDetails": [
        {
          "name": "deposit / withdraw",
          "signature": "public boolean deposit(double amount) / public boolean withdraw(double amount)",
          "params": "double amount — pul miqdori",
          "paramsEn": "double amount — money amount",
          "returns": "boolean (muvaffaqiyatli bajarilsa true, cheklov buzilsa false)",
          "returnsEn": "boolean (true on success, false on invalid amount or overdraft)",
          "logic": "deposit: amount > 0 bo'lsa balance += amount, return true; aks holda false. withdraw: amount > 0 && balance >= amount bo'lsa balance -= amount, return true; aks holda false.",
          "logicEn": "deposit: adds if > 0. withdraw: deducts if balance >= amount.",
          "example": "card.deposit(50000.0); card.withdraw(30000.0);"
        }
      ]
    },
    "starterCode": "class Receipt {\n    // txnId va amount maydonlarini private final qiling\n    \n    // Konstruktor va getterlarni yozing (hech qanday setter bo'lmasin!)\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        // O'zgarmas chek yarating\n        \n    }\n}",
    "solution": "class Receipt {\n    private final String txnId;\n    private final double amount;\n\n    public Receipt(String txnId, double amount) {\n        this.txnId = txnId;\n        this.amount = amount;\n    }\n\n    public String getTxnId() {\n        return this.txnId;\n    }\n\n    public double getAmount() {\n        return this.amount;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Receipt r = new Receipt(\"FISCAL-9912\", 240000.0);\n        System.out.println(\"Chek: \" + r.getTxnId() + \" | Summa: \" + r.getAmount() + \" so'm\");\n        // r.setAmount(...) mavjud emas va final maydonni o'zgartirib bo'lmaydi!\n    }\n}",
    "detailedSolution": {
      "theory": "O'zgarmaslik (Immutability): 'final' maydonlar qiymatini faqat konstruktorda 1 marta olishi mumkin va shundan keyin umrining oxirigacha o'zgarmaydi. Setterlar yo'qligi sababli ob'yekt xotirada 100% thread-safe va buzilmas bo'lib yashaydi.",
      "theoryEn": "Immutability guarantees thread-safety and audit integrity by combining 'final' fields with zero mutators.",
      "cleanCode": "private final String txnId;\nprivate final double amount;",
      "breakdown": [
        "Fiskal to'lov cheki xavfsiz himoyalandi.",
        "Maydonlar 'final' bo'lgani uchun o'zgarish mutlaqo imkonsiz."
      ],
      "pitfalls": "final maydonga konstruktorda qiymat berish unutilsa, kompilyator xato beradi.",
      "cw2Tip": "Moliyaviy operatsiyalar va audit yozuvlari har doim Immutable klasslar orqali ifodalanadi.",
      "theoryRu": "Неизменяемость гарантирует потокобезопасность и целостность аудита за счет объединения «конечных» полей с нулевыми мутаторами.",
      "pitfallsRu": "если вы забудете присвоить значение последнему полю в конструкторе, компилятор выдаст ошибку.",
      "breakdownRu": [
        "Фискальный платежный чек надежно защищен.",
        "Maydonlar 'final' bo'lgani uchun o'zgarish mutlaqo imkonsiz."
      ]
    },
    "sampleData": [
      "txnId: \"FISCAL-9912\"",
      "amount: 240000.0 so'm"
    ],
    "expectedOutput": "Chek: FISCAL-9912 | Summa: 240000.0 so'm",
    "story": {
      "uz": "Moliyaviy fiskal cheklar generatsiya qilingandan so'ng ularning tranzaksiya kodi va summasi o'zgartirilmasligi (tamper-proof) uchun 'final' modifikatorli Immutable (o'zgarmas) klass yaratiladi.",
      "en": "A fiscal financial receipt must remain tamper-proof after creation. Implement an immutable class using 'final' fields without setters.",
      "ru": "Фискальный финансовый чек должен оставаться защищенным от несанкционированного доступа после создания. Реализуйте неизменяемый класс, используя «конечные» поля без установщиков."
    },
    "steps": {
      "uz": [
        "<code>Receipt</code> klassini tuzing: <code>private final String txnId;</code> va <code>private final double amount;</code> maydonlarini e'lon qiling.",
        "Konstruktorda ikkala maydonni to'ldiring: <code>public Receipt(String txnId, double amount)</code>.",
        "Faqat Getter metodlarini (<code>getTxnId()</code>, <code>getAmount()</code>) yozing (Setter metodlari bo'lmaydi!).",
        "<code>Main</code> metodida <code>Receipt r = new Receipt(\"FISCAL-9912\", 240000.0);</code> ob'yektini yarating.",
        "Chek ma'lumotlarini chop eting: <code>System.out.println(\"Chek: \" + r.getTxnId() + \" | Summa: \" + r.getAmount() + \" so'm\");</code>"
      ],
      "en": [
        "Declare class <code>Receipt</code> with private final fields <code>txnId</code> and <code>amount</code>.",
        "Implement constructor initializing both fields.",
        "Provide public getters only (no setters).",
        "In <code>main</code>, instantiate <code>Receipt r = new Receipt(\"FISCAL-9912\", 240000.0);</code>.",
        "Print receipt details."
      ],
      "ru": [
        "Объявите класс <code>Receipt</code> с закрытыми конечными полями <code>txnId</code> и <code>amount</code>.",
        "Реализуйте конструктор, инициализирующий оба поля.",
        "Предоставляйте только публичные геттеры (без сеттеров).",
        "В <code>main</code> создайте экземпляр <code>Receipt r = new Receipt(\"FISCAL-9912\", 240000.0);</code>.",
        "Print receipt details."
      ]
    }
  },
  {
    "id": 38,
    "tier": 4,
    "tierName": "4-Bosqich: Inkapsulyatsiya va Himoya",
    "sector": "31-40",
    "title": {
      "uz": "38. IoT Temperature — Selsiy va Farengeyt Abstraksiyasi (Unit Conversion)",
      "en": "38. IoT Temperature — Celsius & Fahrenheit Abstraction",
      "ru": "38. Температура Интернета вещей — абстракция по Цельсию и Фаренгейту"
    },
    "scenario": {
      "uz": "[Hayotiy Voqealik & Kontekst]\nAqlli harorat datchigi ichki xotirasida haroratni Selsiyda saqlaydi, lekin xalqaro tizimlar uchun uni bir vaqtning o'zida Farengeytga konvertatsiya qilib beruvchi xavfsiz abstraksiya taqdim etadi.\n\n[Bajarilishi kerak bo'lgan vazifalar (1 dan 5 gacha)]\n1. TempSensor klassini tuzing: private double celsius; maydonini e'lon qiling.\n2. Konstruktor va mutlaq nol haroratdan (-273.15°C) past bo'lmaslikni tekshiruvchi setCelsius(double celsius) metodini yozing.\n3. getCelsius() va Farengeytga hisoblab beruvchi public double getFahrenheit() { return (this.celsius * 9.0 / 5.0) + 32.0; } metodlarini qo'shing.\n4. Main metodida TempSensor sensor = new TempSensor(25.0); yarating.\n5. Haroratni Selsiy va Farengeytda 2 qatorda chop eting:System.out.println(\"Harorat (Selsiy): \" + sensor.getCelsius() + \"°C\");System.out.println(\"Harorat (Farengeyt): \" + sensor.getFahrenheit() + \"°F\");",
      "en": "[Real-World Story & Context]\nAn IoT temperature sensor stores temperature in Celsius and provides an encapsulated Fahrenheit conversion getter without duplicating state.\n\n[Step-by-Step Implementation Tasks (1 to 5)]\n1. Create class TempSensor with private field celsius.\n2. Implement constructor, getCelsius(), and setCelsius() clamping at absolute zero (-273.15).\n3. Implement getFahrenheit() returning (celsius * 9.0 / 5.0) + 32.0.\n4. In main, instantiate with 25.0.\n5. Print temperature in Celsius and Fahrenheit on 2 lines.",
      "ru": "📖 Контекст и описание задачи\nДатчик температуры IoT сохраняет температуру в градусах Цельсия и обеспечивает инкапсулированный преобразователь градусов Фаренгейта без дублирования состояния.\n\n📋 Пошаговые задачи (от 1 до 5)\n1. Создайте класс <code>TempSensor</code> с закрытым полем <code>celsius</code>.\n2. Реализуйте конструктор <code>getCelsius()</code> и <code>setCelsius()</code>, фиксирующий абсолютный ноль (-273,15).\n3. Реализуйте <code>getFahrenheit()</code>, возвращающий <code>(celsius * 9.0 / 5.0) + 32.0</code>.\n4. В <code>main</code> создайте экземпляр с 25.0.\n5. Печатайте температуру в градусах Цельсия и Фаренгейта в 2 строки."
    },
    "requirements": {
      "classes": [
        "TempSensor",
        "Main"
      ],
      "privateFields": [
        "celsius"
      ],
      "methods": [
        "getCelsius",
        "setCelsius",
        "getFahrenheit"
      ],
      "constructors": [
        "TempSensor"
      ],
      "methodDetails": [
        {
          "name": "getFahrenheit / setFahrenheit",
          "signature": "public double getFahrenheit() / public void setFahrenheit(double fahrenheit)",
          "params": "setFahrenheit uchun: double fahrenheit (harorat Farengeytda)",
          "paramsEn": "for setFahrenheit: double fahrenheit (temperature in Fahrenheit)",
          "returns": "getFahrenheit: double ((celsius * 9.0 / 5.0) + 32.0)",
          "returnsEn": "getFahrenheit: double ((celsius * 9.0 / 5.0) + 32.0)",
          "logic": "getFahrenheit: return (celsius * 9.0 / 5.0) + 32.0; setFahrenheit: this.celsius = (fahrenheit - 32.0) * 5.0 / 9.0;",
          "logicEn": "Celsius to Fahrenheit and inverse conversion.",
          "example": "sensor.setCelsius(25.0); sensor.getFahrenheit(); // 77.0°F qaytaradi"
        }
      ]
    },
    "starterCode": "class TempSensor {\n    private double celsius;\n\n    // Konstruktor, getCelsius, setCelsius va getFahrenheit metodlarini yozing\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        // Haroratni har ikkala birlikda ko'ring\n        \n    }\n}",
    "solution": "class TempSensor {\n    private double celsius;\n\n    public TempSensor(double celsius) {\n        this.setCelsius(celsius);\n    }\n\n    public double getCelsius() {\n        return this.celsius;\n    }\n\n    public void setCelsius(double celsius) {\n        // Mutlaq nol harorat (-273.15 C) dan past bo'lishi mumkin emas\n        if (celsius >= -273.15) {\n            this.celsius = celsius;\n        } else {\n            this.celsius = -273.15;\n        }\n    }\n\n    public double getFahrenheit() {\n        return (this.celsius * 9.0 / 5.0) + 32.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TempSensor sensor = new TempSensor(25.0);\n        System.out.println(\"Harorat (Selsiy): \" + sensor.getCelsius() + \"°C\");\n        System.out.println(\"Harorat (Farengeyt): \" + sensor.getFahrenheit() + \"°F\");\n    }\n}",
    "detailedSolution": {
      "theory": "Ma'lumotlar Abstraksiyasi (Data Abstraction): Ichki saqlash formati bilan tashqi foydalanuvchi ko'radigan formatni ajratish. Foydalanuvchi Farengeytda so'rasa ham, ichkarida ortiqcha maydon ochilmaydi.",
      "theoryEn": "Encapsulation cleanly decouples physical internal storage representations from external projection formats.",
      "cleanCode": "public double getFahrenheit() { return (this.celsius * 9.0 / 5.0) + 32.0; }",
      "breakdown": [
        "Fizik minimum (-273.15°C) setterda tekshirildi.",
        "Farengeyt birligiga matematik konvertatsiya taqdim etildi."
      ],
      "pitfalls": "9/5 o'rniga 9.0/5.0 yozish shart, aks holda butun son bo'linishi (integer division) natijani 1 ga aylantirib qo'yadi!",
      "cw2Tip": "Valyutalarni konvertatsiya qilishda aynan shu abstraksiya modeli qo'llaniladi.",
      "theoryRu": "Инкапсуляция четко отделяет физические представления внутренней памяти от внешних форматов проекции.",
      "pitfallsRu": "Вместо 9/5 необходимо писать 9,0/5,0, иначе целочисленное деление превратит результат в 1!",
      "breakdownRu": [
        "В установщике проверяли физический минимум (-273,15°С).",
        "Farengeyt birligiga matematik konvertatsiya taqdim etildi."
      ]
    },
    "sampleData": [
      "celsius (harorat): 25.0°C"
    ],
    "expectedOutput": "Harorat (Selsiy): 25.0°C\nHarorat (Farengeyt): 77.0°F",
    "story": {
      "uz": "Aqlli harorat datchigi ichki xotirasida haroratni Selsiyda saqlaydi, lekin xalqaro tizimlar uchun uni bir vaqtning o'zida Farengeytga konvertatsiya qilib beruvchi xavfsiz abstraksiya taqdim etadi.",
      "en": "An IoT temperature sensor stores temperature in Celsius and provides an encapsulated Fahrenheit conversion getter without duplicating state.",
      "ru": "Датчик температуры IoT сохраняет температуру в градусах Цельсия и обеспечивает инкапсулированный преобразователь градусов Фаренгейта без дублирования состояния."
    },
    "steps": {
      "uz": [
        "<code>TempSensor</code> klassini tuzing: <code>private double celsius;</code> maydonini e'lon qiling.",
        "Konstruktor va mutlaq nol haroratdan (-273.15°C) past bo'lmaslikni tekshiruvchi <code>setCelsius(double celsius)</code> metodini yozing.",
        "<code>getCelsius()</code> va Farengeytga hisoblab beruvchi <code>public double getFahrenheit() { return (this.celsius * 9.0 / 5.0) + 32.0; }</code> metodlarini qo'shing.",
        "<code>Main</code> metodida <code>TempSensor sensor = new TempSensor(25.0);</code> yarating.",
        "Haroratni Selsiy va Farengeytda 2 qatorda chop eting:<br><code>System.out.println(\"Harorat (Selsiy): \" + sensor.getCelsius() + \"°C\");</code><br><code>System.out.println(\"Harorat (Farengeyt): \" + sensor.getFahrenheit() + \"°F\");</code>"
      ],
      "en": [
        "Create class <code>TempSensor</code> with private field <code>celsius</code>.",
        "Implement constructor, <code>getCelsius()</code>, and <code>setCelsius()</code> clamping at absolute zero (-273.15).",
        "Implement <code>getFahrenheit()</code> returning <code>(celsius * 9.0 / 5.0) + 32.0</code>.",
        "In <code>main</code>, instantiate with 25.0.",
        "Print temperature in Celsius and Fahrenheit on 2 lines."
      ],
      "ru": [
        "Создайте класс <code>TempSensor</code> с закрытым полем <code>celsius</code>.",
        "Реализуйте конструктор <code>getCelsius()</code> и <code>setCelsius()</code>, фиксирующий абсолютный ноль (-273,15).",
        "Реализуйте <code>getFahrenheit()</code>, возвращающий <code>(celsius * 9.0 / 5.0) + 32.0</code>.",
        "В <code>main</code> создайте экземпляр с 25.0.",
        "Печатайте температуру в градусах Цельсия и Фаренгейта в 2 строки."
      ]
    }
  },
  {
    "id": 39,
    "tier": 4,
    "tierName": "4-Bosqich: Inkapsulyatsiya va Himoya",
    "sector": "31-40",
    "title": {
      "uz": "39. Credit Score — Reyting Toifasini Aniqlash (Classification Property)",
      "en": "39. Credit Score — Rating Classification Property",
      "ru": "39. Кредитный рейтинг — рейтинговая классификация имущества."
    },
    "scenario": {
      "uz": "[Hayotiy Voqealik & Kontekst]\nBank kredit skoringi tizimida mijozning 300 dan 850 gacha bo'lgan ball ko'rsatkichi asosida uning kredit toifasi (EXCELLENT, GOOD, FAIR, POOR) tasniflanadi.\n\n[Bajarilishi kerak bo'lgan vazifalar (1 dan 5 gacha)]\n1. CreditScore klassini yarating: private int score; maydonini qo'shing.\n2. Konstruktor, getScore() va [300; 850] oralig'ini tekshiruvchi setScore(int score) metodlarini yozing.\n3. public String getCategory() metodini yozing: agar score >= 750 bo'lsa \"EXCELLENT\", score >= 650 bo'lsa \"GOOD\", score >= 550 bo'lsa \"FAIR\", aks holda \"POOR\" qaytarsin.\n4. Main metodida CreditScore cs = new CreditScore(780); ob'yektini yarating.\n5. Natijani chop eting: System.out.println(\"Skoring bali: \" + cs.getScore() + \" | Toifa: \" + cs.getCategory());",
      "en": "[Real-World Story & Context]\nA credit scoring engine encapsulates risk assessment, classifying scores from 300 to 850 into EXCELLENT, GOOD, FAIR, or POOR categories.\n\n[Step-by-Step Implementation Tasks (1 to 5)]\n1. Declare class CreditScore with private field score.\n2. Implement constructor, getter, and setter bounded between 300 and 850.\n3. Implement getCategory() classifying into EXCELLENT, GOOD, FAIR, POOR.\n4. In main, instantiate CreditScore(780).\n5. Print score and classification category.",
      "ru": "📖 Контекст и описание задачи\nМеханизм кредитного скоринга инкапсулирует оценку рисков, классифицируя баллы от 300 до 850 по категориям ОТЛИЧНО, ХОРОШО, СПРАВЕДЛИВО или ПЛОХО.\n\n📋 Пошаговые задачи (от 1 до 5)\n1. Объявите класс <code>CreditScore</code> с закрытым полем <code>score</code>.\n2. Реализуйте конструктор, геттер и сеттер, ограниченный диапазоном от 300 до 850.\n3. Внедрить классификацию <code>getCategory()</code> на ОТЛИЧНО, ХОРОШО, УДОВЛЕТВОРИТЕЛЬНО, ПЛОХО.\n4. В <code>main</code> создайте экземпляр <code>CreditScore(780)</code>.\n5. Распечатать оценку и классификационную категорию."
    },
    "requirements": {
      "classes": [
        "CreditScore",
        "Main"
      ],
      "privateFields": [
        "score"
      ],
      "methods": [
        "getScore",
        "setScore",
        "getCategory"
      ],
      "constructors": [
        "CreditScore"
      ],
      "methodDetails": [
        {
          "name": "getCreditTier",
          "signature": "public String getCreditTier()",
          "params": "Parametr qabul qilmaydi ()",
          "paramsEn": "No parameters ()",
          "returns": "String ('EXCELLENT', 'GOOD', 'FAIR' yoki 'POOR')",
          "returnsEn": "String ('EXCELLENT', 'GOOD', 'FAIR' or 'POOR')",
          "logic": "if (score >= 750) return 'EXCELLENT'; else if (score >= 650) return 'GOOD'; else if (score >= 550) return 'FAIR'; else return 'POOR';",
          "logicEn": "Returns credit tier based on score range.",
          "example": "CreditProfile cp = new CreditProfile(780); cp.getCreditTier(); // 'EXCELLENT' qaytaradi"
        }
      ]
    },
    "starterCode": "class CreditScore {\n    private int score;\n\n    // Konstruktor, getScore, setScore (300..850 chegarasi bilan) va getCategory ni yozing\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        // Skoring toifasini aniqlang\n        \n    }\n}",
    "solution": "class CreditScore {\n    private int score;\n\n    public CreditScore(int score) {\n        this.setScore(score);\n    }\n\n    public int getScore() {\n        return this.score;\n    }\n\n    public void setScore(int score) {\n        if (score >= 300 && score <= 850) {\n            this.score = score;\n        } else {\n            this.score = 300;\n        }\n    }\n\n    public String getCategory() {\n        if (this.score >= 750) return \"EXCELLENT\";\n        if (this.score >= 650) return \"GOOD\";\n        if (this.score >= 550) return \"FAIR\";\n        return \"POOR\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CreditScore cs = new CreditScore(780);\n        System.out.println(\"Skoring bali: \" + cs.getScore() + \" | Toifa: \" + cs.getCategory());\n    }\n}",
    "detailedSolution": {
      "theory": "Toifalashtiruvchi xususiyatlar (Categorization Properties): Inkapsulyatsiya qilingan sonli qiymat asosida biznes toifasini aniqlab berish metodlari.",
      "theoryEn": "Classification properties map internal continuous metrics into discrete business domains.",
      "cleanCode": "if (this.score >= 750) return \"EXCELLENT\";",
      "breakdown": [
        "Skoring chegarasi [300, 850] setterda himoyalandi.",
        "Kredit ajratish uchun toifalar aniq belgilandi."
      ],
      "pitfalls": "Shartlarni tekshirishda katta sondan boshlash tartibiga rioya qiling.",
      "cw2Tip": "Mijoz xarid hajmiga qarab VIP toifani aniqlashda aynan shu qoida ishlaydi.",
      "theoryRu": "Свойства классификации отображают внутренние непрерывные показатели в отдельные бизнес-домены.",
      "pitfallsRu": "При проверке условий следуйте порядку, начиная с наибольшего числа.",
      "breakdownRu": [
        "Предел подсчета очков [300, 850] зафиксирован в установщике.",
        "Kredit ajratish uchun toifalar aniq belgilandi."
      ]
    },
    "sampleData": [
      "score (skoring bali): 780 (Toifa: A'LO)"
    ],
    "expectedOutput": "Skoring bali: 780 | Toifa: EXCELLENT",
    "story": {
      "uz": "Bank kredit skoringi tizimida mijozning 300 dan 850 gacha bo'lgan ball ko'rsatkichi asosida uning kredit toifasi (EXCELLENT, GOOD, FAIR, POOR) tasniflanadi.",
      "en": "A credit scoring engine encapsulates risk assessment, classifying scores from 300 to 850 into EXCELLENT, GOOD, FAIR, or POOR categories.",
      "ru": "Механизм кредитного скоринга инкапсулирует оценку рисков, классифицируя баллы от 300 до 850 по категориям ОТЛИЧНО, ХОРОШО, СПРАВЕДЛИВО или ПЛОХО."
    },
    "steps": {
      "uz": [
        "<code>CreditScore</code> klassini yarating: <code>private int score;</code> maydonini qo'shing.",
        "Konstruktor, <code>getScore()</code> va [300; 850] oralig'ini tekshiruvchi <code>setScore(int score)</code> metodlarini yozing.",
        "<code>public String getCategory()</code> metodini yozing: agar <code>score >= 750</code> bo'lsa <code>\"EXCELLENT\"</code>, <code>score >= 650</code> bo'lsa <code>\"GOOD\"</code>, <code>score >= 550</code> bo'lsa <code>\"FAIR\"</code>, aks holda <code>\"POOR\"</code> qaytarsin.",
        "<code>Main</code> metodida <code>CreditScore cs = new CreditScore(780);</code> ob'yektini yarating.",
        "Natijani chop eting: <code>System.out.println(\"Skoring bali: \" + cs.getScore() + \" | Toifa: \" + cs.getCategory());</code>"
      ],
      "en": [
        "Declare class <code>CreditScore</code> with private field <code>score</code>.",
        "Implement constructor, getter, and setter bounded between 300 and 850.",
        "Implement <code>getCategory()</code> classifying into EXCELLENT, GOOD, FAIR, POOR.",
        "In <code>main</code>, instantiate <code>CreditScore(780)</code>.",
        "Print score and classification category."
      ],
      "ru": [
        "Объявите класс <code>CreditScore</code> с закрытым полем <code>score</code>.",
        "Реализуйте конструктор, геттер и сеттер, ограниченный диапазоном от 300 до 850.",
        "Внедрить классификацию <code>getCategory()</code> на ОТЛИЧНО, ХОРОШО, УДОВЛЕТВОРИТЕЛЬНО, ПЛОХО.",
        "В <code>main</code> создайте экземпляр <code>CreditScore(780)</code>.",
        "Распечатать оценку и классификационную категорию."
      ]
    }
  },
  {
    "id": 40,
    "tier": 4,
    "tierName": "4-Bosqich: Inkapsulyatsiya va Himoya",
    "sector": "31-40",
    "title": {
      "uz": "40. Safe Credential — Bir Tomonlama Yoziluvchi Maydon (Write-Only & No-Leak Security • Stage 4 Master)",
      "en": "40. Safe Credential — Write-Only State & Zero-Leak Security (Stage 4 Master)",
      "ru": "40. Безопасные учетные данные — состояние только для записи и защита от утечек (этап 4 Master)"
    },
    "scenario": {
      "uz": "[Hayotiy Voqealik & Kontekst]\nAxborot xavfsizligida foydalanuvchi parollari hech qachon Getter orqali ochiq ko'rsatilmaydi (No Leak). Ular faqat ichki solishtirish (verify) va eski parolni tasdiqlagan holda o'zgartirish (change) imkonini beradi.\n\n[Bajarilishi kerak bo'lgan vazifalar (1 dan 5 gacha)]\n1. UserCredential klassini tuzing: private String password; maydonini e'lon qiling.\n2. Konstruktorda parolni kamida 6 belgidan iboratligini tekshirib o'rnating.\n3. Getter yozmang! Solishtirish metodini yozing: public boolean verifyPassword(String attempt) { return this.password.equals(attempt); }.\n4. Parolni xavfsiz almashtirish metodini yozing: public boolean changePassword(String oldPass, String newPass) (eski parol to'g'ri bo'lsa va yangi parol >=6 bo'lsa o'zgartirsin).\n5. Main metodida UserCredential cred = new UserCredential(\"secret2024\"); yarating, tekshiruvlarni bajaring va parolni almashtirib chop eting:System.out.println(\"Tekshiruv ('wrong'): \" + cred.verifyPassword(\"wrong\"));System.out.println(\"Tekshiruv ('secret2024'): \" + cred.verifyPassword(\"secret2024\"));System.out.println(\"Parol o'zgardimi: \" + cred.changePassword(\"secret2024\", \"newMasterPass99\"));",
      "en": "[Real-World Story & Context]\nEnterprise credential management prohibits leaking passwords through getters, exposing only verification and authenticated password change methods.\n\n[Step-by-Step Implementation Tasks (1 to 5)]\n1. Create class UserCredential with private field password.\n2. Implement constructor enforcing min length 6.\n3. Omit getters! Implement verifyPassword(String attempt).\n4. Implement changePassword(String oldPass, String newPass) requiring authentication.\n5. In main, test verification and change password, printing outputs.",
      "ru": "📖 Контекст и описание задачи\nУправление учетными данными предприятия запрещает утечку паролей через геттеры, предоставляя доступ только к методам проверки и аутентификации паролей.\n\n📋 Пошаговые задачи (от 1 до 5)\n1. Создайте класс <code>UserCredential</code> с закрытым полем <code>password</code>.\n2. Реализуйте конструктор, обеспечивающий минимальную длину 6.\n3. Опустить геттеры! Внедрите <code>verifyPassword(String attempt)</code>.\n4. Реализуйте <code>changePassword(String oldPass, String newPass)</code>, требующий аутентификации.\n5. В <code>main</code> проверьте проверку и смените пароль, распечатайте результаты."
    },
    "requirements": {
      "classes": [
        "UserCredential",
        "Main"
      ],
      "privateFields": [
        "password"
      ],
      "methods": [
        "verifyPassword",
        "changePassword"
      ],
      "constructors": [
        "UserCredential"
      ],
      "methodDetails": [
        {
          "name": "verifyPassword / changePassword",
          "signature": "public boolean verifyPassword(String input) / public boolean changePassword(String oldPass, String newPass)",
          "params": "input / oldPass, newPass (matnli parollar)",
          "paramsEn": "input / oldPass, newPass (string passwords)",
          "returns": "boolean (tekshiruv yoki almashtirish muvaffaqiyatiga qarab true/false)",
          "returnsEn": "boolean (true on success, false on mismatch)",
          "logic": "Parolni tashqariga bermaydi (getter yo'q, write-only), faqat verifyPassword orqali tenglikni tekshiradi.",
          "logicEn": "Write-only password: verifyPassword checks match without exposing stored password.",
          "example": "cred.verifyPassword('wrong'); // false. cred.verifyPassword('secret2024'); // true"
        }
      ]
    },
    "starterCode": "class UserCredential {\n    private String password;\n\n    // Konstruktor, verifyPassword va changePassword metodlarini yozing (getter bo'lmasin!)\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        // Parolni tekshiring va xavfsiz o'zgartiring\n        \n    }\n}",
    "solution": "class UserCredential {\n    private String password;\n\n    public UserCredential(String initialPassword) {\n        this.password = (initialPassword != null && initialPassword.length() >= 6) ? initialPassword : \"default123\";\n    }\n\n    // Parolni to'g'ridan-to'g'ri o'qish imkonsiz (No Getter!)\n    public boolean verifyPassword(String attempt) {\n        return this.password.equals(attempt);\n    }\n\n    public boolean changePassword(String oldPass, String newPass) {\n        if (this.verifyPassword(oldPass) && newPass != null && newPass.length() >= 6) {\n            this.password = newPass;\n            return true;\n        }\n        return false;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        UserCredential cred = new UserCredential(\"secret2024\");\n\n        System.out.println(\"Tekshiruv ('wrong'): \" + cred.verifyPassword(\"wrong\"));\n        System.out.println(\"Tekshiruv ('secret2024'): \" + cred.verifyPassword(\"secret2024\"));\n\n        boolean changed = cred.changePassword(\"secret2024\", \"newMasterPass99\");\n        System.out.println(\"Parol o'zgardimi: \" + changed);\n    }\n}",
    "detailedSolution": {
      "theory": "4-bosqichda biz to'liq inkapsulyatsiyani egalladik! Getter bo'lmasligi ham inkapsulyatsiyaning oliy shaklidir (Write-Only State). Tashqi kod ob'yektning ichki sirini bilmaydi, faqat undan natija so'raydi. Endi 5-bosqichda ushbu sinflarni birlashtirib, 'static' a'zolar, kompozitsiya va CW2 buyurtma arxitekturasini quramiz!",
      "theoryEn": "Stage 4 mastered encapsulation, including zero-leak write-only state. Stage 5 synthesizes these concepts into static members, composition, and CW2 architecture.",
      "cleanCode": "public boolean verifyPassword(String attempt) {\n    return this.password.equals(attempt);\n}",
      "breakdown": [
        "Parol maxfiyligi to'liq ta'minlandi (o'qish yo'li yo'q).",
        "Eski parolni tasdiqlash orqali xavfsiz almashtirish amalga oshirildi.",
        "Bu topshiriq 5-bosqichdagi arxitektura va kompozitsiyaga ko'prikdir."
      ],
      "pitfalls": "Stringlarni taqqoslashda '==' emas, doimo '.equals()' metodidan foydalaning!",
      "cw2Tip": "Foydalanuvchi autentifikatsiyasida ma'lumotlarni himoyalashning asosiy shartidir.",
      "theoryRu": "На этапе 4 освоена инкапсуляция, включая состояние «только для записи» с нулевой утечкой. На этапе 5 эти концепции синтезируются в статические элементы, композицию и архитектуру CW2.",
      "pitfallsRu": "Всегда используйте метод «.equals()», а не «==» при сравнении строк!",
      "breakdownRu": [
        "Конфиденциальность пароля полностью обеспечена (путь чтения отсутствует).",
        "Eski parolni tasdiqlash orqali xavfsiz almashtirish amalga oshirildi.",
        "Bu topshiriq 5-bosqichdagi arxitektura va kompozitsiyaga ko'prikdir."
      ]
    },
    "sampleData": [
      "Boshlang'ich parol: \"secret2024\"",
      "Tekshiruv: \"wrong\" (noto'g'ri), \"secret2024\" (to'g'ri)",
      "Yangi parol: \"newMasterPass99\""
    ],
    "expectedOutput": "Tekshiruv ('wrong'): false\nTekshiruv ('secret2024'): true\nParol o'zgardimi: true",
    "story": {
      "uz": "Axborot xavfsizligida foydalanuvchi parollari hech qachon Getter orqali ochiq ko'rsatilmaydi (No Leak). Ular faqat ichki solishtirish (verify) va eski parolni tasdiqlagan holda o'zgartirish (change) imkonini beradi.",
      "en": "Enterprise credential management prohibits leaking passwords through getters, exposing only verification and authenticated password change methods.",
      "ru": "Управление учетными данными предприятия запрещает утечку паролей через геттеры, предоставляя доступ только к методам проверки и аутентификации паролей."
    },
    "steps": {
      "uz": [
        "<code>UserCredential</code> klassini tuzing: <code>private String password;</code> maydonini e'lon qiling.",
        "Konstruktorda parolni kamida 6 belgidan iboratligini tekshirib o'rnating.",
        "Getter yozmang! Solishtirish metodini yozing: <code>public boolean verifyPassword(String attempt) { return this.password.equals(attempt); }</code>.",
        "Parolni xavfsiz almashtirish metodini yozing: <code>public boolean changePassword(String oldPass, String newPass)</code> (eski parol to'g'ri bo'lsa va yangi parol >=6 bo'lsa o'zgartirsin).",
        "<code>Main</code> metodida <code>UserCredential cred = new UserCredential(\"secret2024\");</code> yarating, tekshiruvlarni bajaring va parolni almashtirib chop eting:<br><code>System.out.println(\"Tekshiruv ('wrong'): \" + cred.verifyPassword(\"wrong\"));</code><br><code>System.out.println(\"Tekshiruv ('secret2024'): \" + cred.verifyPassword(\"secret2024\"));</code><br><code>System.out.println(\"Parol o'zgardimi: \" + cred.changePassword(\"secret2024\", \"newMasterPass99\"));</code>"
      ],
      "en": [
        "Create class <code>UserCredential</code> with private field <code>password</code>.",
        "Implement constructor enforcing min length 6.",
        "Omit getters! Implement <code>verifyPassword(String attempt)</code>.",
        "Implement <code>changePassword(String oldPass, String newPass)</code> requiring authentication.",
        "In <code>main</code>, test verification and change password, printing outputs."
      ],
      "ru": [
        "Создайте класс <code>UserCredential</code> с закрытым полем <code>password</code>.",
        "Реализуйте конструктор, обеспечивающий минимальную длину 6.",
        "Опустить геттеры! Внедрите <code>verifyPassword(String attempt)</code>.",
        "Реализуйте <code>changePassword(String oldPass, String newPass)</code>, требующий аутентификации.",
        "В <code>main</code> проверьте проверку и смените пароль, распечатайте результаты."
      ]
    }
  },
  {
    "id": 41,
    "tier": 5,
    "tierName": "5-Bosqich: Statik A'zolar va Kompozitsiya",
    "sector": "41-50",
    "title": {
      "uz": "41. System ID Generator — 'static' Hisoblagich va Avtomatik ID Berish",
      "en": "41. System ID Generator — 'static' Counter & Auto-Increment IDs",
      "ru": "41. Генератор системных идентификаторов — «статические» счетчики и идентификаторы с автоматическим приращением."
    },
    "scenario": {
      "uz": "[Hayotiy Voqealik & Kontekst]\nMa'lumotlar bazasi yoki tizimda yangi foydalanuvchi ro'yxatdan o'tganda ularga avtomatik ketma-ket unikal ID berilishi uchun umumiy 'static' hisoblagich xizmat qiladi.\n\n[Bajarilishi kerak bo'lgan vazifalar (1 dan 5 gacha)]\n1. UserAccount klassini e'lon qiling: public static int totalUsers = 0;, private int id;, private String username;.\n2. Konstruktorda hisoblagichni oshirib ID ga bering: totalUsers++; this.id = totalUsers; this.username = username;.\n3. Getter metodlarini yozing: getId() va getUsername().\n4. Main metodida ketma-ket uchta foydalanuvchi yarating: 'ali', 'vali' va 'gani'.\n5. Har bir foydalanuvchini va jami sonni 4 qatorda chop eting:System.out.println(\"User 1 ID: \" + u1.getId() + \" (\" + u1.getUsername() + \")\");System.out.println(\"User 2 ID: \" + u2.getId() + \" (\" + u2.getUsername() + \")\");System.out.println(\"User 3 ID: \" + u3.getId() + \" (\" + u3.getUsername() + \")\");System.out.println(\"Jami foydalanuvchilar soni: \" + UserAccount.totalUsers);",
      "en": "[Real-World Story & Context]\nA system user account registry automatically increments and assigns unique sequential IDs using a class-level static counter.\n\n[Step-by-Step Implementation Tasks (1 to 5)]\n1. Declare class UserAccount with public static int totalUsers = 0;, private id, private username.\n2. Constructor increments static counter and assigns to id.\n3. Implement getters for id and username.\n4. In main, instantiate users 'ali', 'vali', 'gani'.\n5. Print all 3 users and totalUsers count on 4 lines.",
      "ru": "📖 Контекст и описание задачи\nРеестр учетных записей пользователей системы автоматически увеличивает и присваивает уникальные последовательные идентификаторы с помощью статического счетчика уровня класса.\n\n📋 Пошаговые задачи (от 1 до 5)\n1. Объявите класс <code>UserAccount</code> с помощью <code>public static int totalUsers = 0;</code>, частного <code>id</code>, частного <code>username</code>.\n2. Конструктор увеличивает статический счетчик и присваивает ему идентификатор.\n3. Реализуйте геттеры для идентификатора и имени пользователя.\n4. В <code>main</code> создайте экземпляры пользователей «ali», «vali», «gani».\n5. Выведите всех 3 пользователей и общее число пользователей в 4 строках."
    },
    "requirements": {
      "classes": [
        "UserAccount",
        "Main"
      ],
      "privateFields": [
        "id",
        "username"
      ],
      "methods": [
        "getId",
        "getUsername"
      ],
      "constructors": [
        "UserAccount"
      ],
      "keywords": [
        "static"
      ],
      "methodDetails": [
        {
          "name": "getVehicleCount",
          "signature": "public static int getVehicleCount()",
          "params": "Parametr qabul qilmaydi ()",
          "paramsEn": "No parameters ()",
          "returns": "int (jami yaratilgan transport vositalari soni)",
          "returnsEn": "int (total count of instantiated vehicle objects)",
          "logic": "Har bir yangi obyekt yaratilganda statik vehicleCount bittaga oshadi.",
          "logicEn": "Static counter incremented on every constructor call.",
          "example": "Vehicle.getVehicleCount(); // 3 ta obyekt tuzilgach, 3 qaytaradi"
        }
      ]
    },
    "starterCode": "class UserAccount {\n    public static int totalUsers = 0;\n    private int id;\n    private String username;\n\n    // Konstruktorda totalUsers ni oshiring va id ga bering\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        // 3 ta foydalanuvchi yarating va ID larini ko'ring\n        \n    }\n}",
    "solution": "class UserAccount {\n    public static int totalUsers = 0;\n    private int id;\n    private String username;\n\n    public UserAccount(String username) {\n        totalUsers++;\n        this.id = totalUsers;\n        this.username = username;\n    }\n\n    public int getId() { return this.id; }\n    public String getUsername() { return this.username; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        UserAccount u1 = new UserAccount(\"ali\");\n        UserAccount u2 = new UserAccount(\"vali\");\n        UserAccount u3 = new UserAccount(\"gani\");\n\n        System.out.println(\"User 1 ID: \" + u1.getId() + \" (\" + u1.getUsername() + \")\");\n        System.out.println(\"User 2 ID: \" + u2.getId() + \" (\" + u2.getUsername() + \")\");\n        System.out.println(\"User 3 ID: \" + u3.getId() + \" (\" + u3.getUsername() + \")\");\n        System.out.println(\"Jami foydalanuvchilar soni: \" + UserAccount.totalUsers);\n    }\n}",
    "detailedSolution": {
      "theory": "'static' kalit so'zi maydonning aniq bir ob'yektga emas, balki butun klassga tegishli ekanligini bildiradi. Heap xotirada barcha ob'yektlar uchun bitta umumiy 'totalUsers' maydoni bo'ladi va ular ushbu bitta umumiy o'zgaruvchini ulashadi.",
      "theoryEn": "'static' fields belong to the class blueprint in Metaspace, shared uniformly across all instantiated objects.",
      "cleanCode": "public static int totalUsers = 0;\nUserAccount(String username) {\n    this.id = ++totalUsers;\n}",
      "breakdown": [
        "Klass darajasidagi global hisoblagich tashkil qilindi.",
        "Har bir ob'yekt ketma-ket betakror ID ga ega bo'ldi."
      ],
      "pitfalls": "Statik maydonlarga ob'yekt orqali emas (`u1.totalUsers`), klass nomi orqali (`UserAccount.totalUsers`) murojaat qilish Clean Code qoidasidir.",
      "cw2Tip": "CW2 Console Order tizimida buyurtma raqamini (Order #1, Order #2) avtomatik generatsiya qilishda ayni usul shart.",
      "theoryRu": "«Статические» поля принадлежат проекту класса в Metaspace, единообразно используемому для всех созданных объектов.",
      "pitfallsRu": "Правило чистого кода ссылается на статические поля по имени класса (`UserAccount.totalUsers`), а не по объекту (`u1.totalUsers`).",
      "breakdownRu": [
        "Установлен глобальный счетчик на уровне класса.",
        "Каждому объекту присвоен последовательный уникальный идентификатор."
      ]
    },
    "sampleData": [
      "1-foydalanuvchi username: \"ali\"",
      "2-foydalanuvchi username: \"vali\"",
      "3-foydalanuvchi username: \"gani\""
    ],
    "expectedOutput": "User 1 ID: 1 (ali)\nUser 2 ID: 2 (vali)\nUser 3 ID: 3 (gani)\nJami foydalanuvchilar soni: 3",
    "story": {
      "uz": "Ma'lumotlar bazasi yoki tizimda yangi foydalanuvchi ro'yxatdan o'tganda ularga avtomatik ketma-ket unikal ID berilishi uchun umumiy 'static' hisoblagich xizmat qiladi.",
      "en": "A system user account registry automatically increments and assigns unique sequential IDs using a class-level static counter.",
      "ru": "Реестр учетных записей пользователей системы автоматически увеличивает и присваивает уникальные последовательные идентификаторы с помощью статического счетчика уровня класса."
    },
    "steps": {
      "uz": [
        "<code>UserAccount</code> klassini e'lon qiling: <code>public static int totalUsers = 0;</code>, <code>private int id;</code>, <code>private String username;</code>.",
        "Konstruktorda hisoblagichni oshirib ID ga bering: <code>totalUsers++; this.id = totalUsers; this.username = username;</code>.",
        "Getter metodlarini yozing: <code>getId()</code> va <code>getUsername()</code>.",
        "<code>Main</code> metodida ketma-ket uchta foydalanuvchi yarating: 'ali', 'vali' va 'gani'.",
        "Har bir foydalanuvchini va jami sonni 4 qatorda chop eting:<br><code>System.out.println(\"User 1 ID: \" + u1.getId() + \" (\" + u1.getUsername() + \")\");</code><br><code>System.out.println(\"User 2 ID: \" + u2.getId() + \" (\" + u2.getUsername() + \")\");</code><br><code>System.out.println(\"User 3 ID: \" + u3.getId() + \" (\" + u3.getUsername() + \")\");</code><br><code>System.out.println(\"Jami foydalanuvchilar soni: \" + UserAccount.totalUsers);</code>"
      ],
      "en": [
        "Declare class <code>UserAccount</code> with <code>public static int totalUsers = 0;</code>, private <code>id</code>, private <code>username</code>.",
        "Constructor increments static counter and assigns to id.",
        "Implement getters for id and username.",
        "In <code>main</code>, instantiate users 'ali', 'vali', 'gani'.",
        "Print all 3 users and totalUsers count on 4 lines."
      ],
      "ru": [
        "Объявите класс <code>UserAccount</code> с помощью <code>public static int totalUsers = 0;</code>, частного <code>id</code>, частного <code>username</code>.",
        "Конструктор увеличивает статический счетчик и присваивает ему идентификатор.",
        "Реализуйте геттеры для идентификатора и имени пользователя.",
        "В <code>main</code> создайте экземпляры пользователей «ali», «vali», «gani».",
        "Выведите всех 3 пользователей и общее число пользователей в 4 строках."
      ]
    }
  },
  {
    "id": 42,
    "tier": 5,
    "tierName": "5-Bosqich: Statik A'zolar va Kompozitsiya",
    "sector": "41-50",
    "title": {
      "uz": "42. Math Utilities — 'static' Yordamchi Metodlar (Utility Class)",
      "en": "42. Math Utilities — 'static' Helper Methods (Utility Class)",
      "ru": "42. Math Utilities — «статические» вспомогательные методы (класс утилиты)"
    },
    "scenario": {
      "uz": "[Hayotiy Voqealik & Kontekst]\nMoliyaviy ilovada QQS solig'ini hisoblash va sonlarni yaxlitlash kabi takrorlanuvchi amallarni ob'yekt yaratmasdan chaqirish uchun 'static' yordamchi (utility) klass kerak.\n\n[Bajarilishi kerak bo'lgan vazifalar (1 dan 5 gacha)]\n1. FinancialMath klassini tuzing va uning konstruktorini private qilib yoping.\n2. Statik soliq hisoblash metodini yozing: public static double calcVat(double amount, double rate) { return amount * (rate / 100.0); }.\n3. Statik yaxlitlash metodini yozing: public static double roundTwoDecimals(double val) { return Math.round(val * 100.0) / 100.0; }.\n4. Main metodida klass nomi orqali metodlarni to'g'ridan-to'g'ri chaqiring: calcVat(1250000.0, 12.0) va roundTwoDecimals(145.6789).\n5. Natijalarni 2 qatorda chop eting:System.out.println(\"Hisoblangan soliq: \" + soliq + \" so'm\");System.out.println(\"Yaxlitlangan qiymat: \" + yaxlitlangan);",
      "en": "[Real-World Story & Context]\nA financial calculation module provides stateless static utility methods for VAT computation and decimal rounding without needing object instantiation.\n\n[Step-by-Step Implementation Tasks (1 to 5)]\n1. Create utility class FinancialMath with private constructor.\n2. Implement public static double calcVat(double amount, double rate).\n3. Implement public static double roundTwoDecimals(double val).\n4. In main, call methods directly on class.\n5. Print VAT and rounded result on 2 lines.",
      "ru": "📖 Контекст и описание задачи\nМодуль финансовых расчетов предоставляет статические служебные методы без сохранения состояния для расчета НДС и десятичных округлений без необходимости создания экземпляра объекта.\n\n📋 Пошаговые задачи (от 1 до 5)\n1. Создайте служебный класс <code>FinancialMath</code> с помощью частного конструктора.\n2. Внедрите <code>public static double calcVat(double amount, double rate)</code>.\n3. Внедрите <code>public static double roundTwoDecimals(double val)</code>.\n4. В <code>main</code> вызывайте методы непосредственно в классе.\n5. Распечатайте НДС и округлите результат в 2 строки."
    },
    "requirements": {
      "classes": [
        "FinancialMath",
        "Main"
      ],
      "methods": [
        "calcVat",
        "roundTwoDecimals"
      ],
      "keywords": [
        "static"
      ],
      "methodDetails": [
        {
          "name": "celsiusToFahrenheit / fahrenheitToCelsius",
          "signature": "public static double celsiusToFahrenheit(double c) / public static double fahrenheitToCelsius(double f)",
          "params": "double c / double f — konvertatsiya qilinadigan harorat",
          "paramsEn": "double c / double f — temperature to convert",
          "returns": "double (hisoblangan harorat)",
          "returnsEn": "double (converted temperature)",
          "logic": "Obyekt yaratmasdan to'g'ridan-to'g'ri klass nomi orqali chaqiriladi (Statik yordamchi metodlar).",
          "logicEn": "Static utility methods called without instantiating class.",
          "example": "double f = MathUtils.celsiusToFahrenheit(100.0); // 212.0 qaytaradi"
        }
      ]
    },
    "starterCode": "class FinancialMath {\n    // private konstruktor va static metodlarni yozing\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        // FinancialMath.calcVat(...) orqali hisoblang\n        \n    }\n}",
    "solution": "class FinancialMath {\n    private FinancialMath() {}\n\n    public static double calcVat(double amount, double rate) {\n        return amount * (rate / 100.0);\n    }\n\n    public static double roundTwoDecimals(double val) {\n        return Math.round(val * 100.0) / 100.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        double soliq = FinancialMath.calcVat(1250000.0, 12.0);\n        double yaxlitlangan = FinancialMath.roundTwoDecimals(145.6789);\n\n        System.out.println(\"Hisoblangan soliq: \" + soliq + \" so'm\");\n        System.out.println(\"Yaxlitlangan qiymat: \" + yaxlitlangan);\n    }\n}",
    "detailedSolution": {
      "theory": "Utilit klasslar (Utility Classes): Java-dagi `Math` sinfi kabi faqat statik metodlardan iborat bo'lib, ob'yekt holatini saqlamaydi. Xususiy (private) konstruktor qo'yish orqali unga 'new FinancialMath()' chaqirilishi butunlay taqiqlanadi.",
      "theoryEn": "Utility classes bundle stateless static functions and suppress instantiation via private constructors.",
      "cleanCode": "private FinancialMath() {}\npublic static double calcVat(double amount, double rate) { ... }",
      "breakdown": [
        "Nusxa olinmaydigan toza yordamchi klass yaratildi.",
        "Metodlar to'g'ridan-to'g'ri chaqirildi."
      ],
      "pitfalls": "Statik metodlar ichidan instans maydonlarga ('this.x') murojaat qilib bo'lmaydi.",
      "cw2Tip": "Valyuta konvertatsiyasi va formatlash utilitlarini alohida sinfga ajratish yaxshi me'morchilikdir.",
      "theoryRu": "Служебные классы объединяют статические функции без сохранения состояния и подавляют создание экземпляров с помощью частных конструкторов.",
      "pitfallsRu": "На поля экземпляра («this.x») нельзя ссылаться из статических методов.",
      "breakdownRu": [
        "Создается чистый некопируемый вспомогательный класс.",
        "Методы вызываются напрямую."
      ]
    },
    "sampleData": [
      "Baza summasi: 1250000.0 so'm, QQS stavkasi: 12.0%",
      "Yaxlitlanadigan son: 145.6789"
    ],
    "expectedOutput": "Hisoblangan soliq: 150000.0 so'm\nYaxlitlangan qiymat: 145.68",
    "story": {
      "uz": "Moliyaviy ilovada QQS solig'ini hisoblash va sonlarni yaxlitlash kabi takrorlanuvchi amallarni ob'yekt yaratmasdan chaqirish uchun 'static' yordamchi (utility) klass kerak.",
      "en": "A financial calculation module provides stateless static utility methods for VAT computation and decimal rounding without needing object instantiation.",
      "ru": "Модуль финансовых расчетов предоставляет статические служебные методы без сохранения состояния для расчета НДС и десятичных округлений без необходимости создания экземпляра объекта."
    },
    "steps": {
      "uz": [
        "<code>FinancialMath</code> klassini tuzing va uning konstruktorini <code>private</code> qilib yoping.",
        "Statik soliq hisoblash metodini yozing: <code>public static double calcVat(double amount, double rate) { return amount * (rate / 100.0); }</code>.",
        "Statik yaxlitlash metodini yozing: <code>public static double roundTwoDecimals(double val) { return Math.round(val * 100.0) / 100.0; }</code>.",
        "<code>Main</code> metodida klass nomi orqali metodlarni to'g'ridan-to'g'ri chaqiring: <code>calcVat(1250000.0, 12.0)</code> va <code>roundTwoDecimals(145.6789)</code>.",
        "Natijalarni 2 qatorda chop eting:<br><code>System.out.println(\"Hisoblangan soliq: \" + soliq + \" so'm\");</code><br><code>System.out.println(\"Yaxlitlangan qiymat: \" + yaxlitlangan);</code>"
      ],
      "en": [
        "Create utility class <code>FinancialMath</code> with private constructor.",
        "Implement <code>public static double calcVat(double amount, double rate)</code>.",
        "Implement <code>public static double roundTwoDecimals(double val)</code>.",
        "In <code>main</code>, call methods directly on class.",
        "Print VAT and rounded result on 2 lines."
      ],
      "ru": [
        "Создайте служебный класс <code>FinancialMath</code> с помощью частного конструктора.",
        "Внедрите <code>public static double calcVat(double amount, double rate)</code>.",
        "Внедрите <code>public static double roundTwoDecimals(double val)</code>.",
        "В <code>main</code> вызывайте методы непосредственно в классе.",
        "Распечатайте НДС и округлите результат в 2 строки."
      ]
    }
  },
  {
    "id": 43,
    "tier": 5,
    "tierName": "5-Bosqich: Statik A'zolar va Kompozitsiya",
    "sector": "41-50",
    "title": {
      "uz": "43. Central Bank — 'CurrencyConverter' va Umumiy Kurs ('static' State)",
      "en": "43. Central Bank — 'CurrencyConverter' & Global Shared Rate",
      "ru": "43. Центральный банк — «Конвертер валют» и глобальный общий курс."
    },
    "scenario": {
      "uz": "[Hayotiy Voqealik & Kontekst]\nMarkaziy bank valyuta kursi barcha operatsiyalar uchun umumiy bitta qiymatga ega. Kurs yangilanganda barcha o'tkazmalar avtomatik yangi kurs bo'yicha hisoblanadi ('static' State).\n\n[Bajarilishi kerak bo'lgan vazifalar (1 dan 5 gacha)]\n1. CurrencyConverter klassini tuzing: private static double usdToUzs = 12700.0; maydonini e'lon qiling.\n2. Kursni yangilash metodini yozing: public static void setRate(double newRate) { if (newRate > 0) usdToUzs = newRate; }.\n3. Konvertatsiya metodini yozing: public static double toUzs(double usd) { return usd * usdToUzs; }.\n4. Main metodida 100 dollarni eski kursda (12700.0) hisoblab chop eting: System.out.println(\"100 USD (eski kurs): \" + summa1 + \" so'm\");.\n5. Kursni 12800.0 ga o'zgartiring va yana 100 dollarni yangi kursda chop eting: System.out.println(\"100 USD (yangi kurs): \" + summa2 + \" so'm\");.",
      "en": "[Real-World Story & Context]\nA central banking currency converter manages a shared static exchange rate, dynamically affecting all conversion calculations across the system.\n\n[Step-by-Step Implementation Tasks (1 to 5)]\n1. Declare class CurrencyConverter with private static usdToUzs = 12700.0;.\n2. Implement static setRate(double newRate) and static toUzs(double usd).\n3. In main, convert 100 USD at original rate and print.\n4. Update rate to 12800.0 and convert 100 USD again.\n5. Print both conversions matching expected output.",
      "ru": "📖 Контекст и описание задачи\nКонвертер валют центрального банка управляет общим статическим обменным курсом, динамически влияя на все расчеты конвертации в системе.\n\n📋 Пошаговые задачи (от 1 до 5)\n1. Объявите класс <code>CurrencyConverter</code> с приватным статическим <code>usdToUzs = 12700.0;</code>.\n2. Реализуйте статические <code>setRate(double newRate)</code> и статические <code>toUzs(double usd)</code>.\n3. В <code>main</code> конвертируйте 100 долларов США по исходному курсу и распечатайте.\n4. Обновите курс до 12800,0 и снова конвертируйте 100 долларов США.\n5. Выведите оба преобразования, соответствующие ожидаемому результату."
    },
    "requirements": {
      "classes": [
        "CurrencyConverter",
        "Main"
      ],
      "methods": [
        "setRate",
        "toUzs"
      ],
      "keywords": [
        "static"
      ],
      "methodDetails": [
        {
          "name": "addTax / applyDiscount",
          "signature": "public static double addTax(double amount, double taxRate) / public static double applyDiscount(double amount, double discountPercent)",
          "params": "double amount, double rate/percent",
          "paramsEn": "double amount, double rate/percent",
          "returns": "double (soliq qo'shilgan yoki chegirma ayirilgan summa)",
          "returnsEn": "double (computed price with tax or discount)",
          "logic": "Statik moliyaviy kalkulyator metodlari: amount * (1.0 + taxRate / 100.0) va amount * (1.0 - discountPercent / 100.0).",
          "logicEn": "Pure static financial computation utilities.",
          "example": "FinanceCalc.addTax(100000.0, 12.0); // 112000.0"
        }
      ]
    },
    "starterCode": "class CurrencyConverter {\n    private static double usdToUzs = 12700.0;\n\n    // setRate va toUzs statik metodlarini yozing\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        // Kursni o'zgartirib konvertatsiyani tekshiring\n        \n    }\n}",
    "solution": "class CurrencyConverter {\n    private static double usdToUzs = 12700.0;\n\n    public static void setRate(double newRate) {\n        if (newRate > 0) {\n            usdToUzs = newRate;\n        }\n    }\n\n    public static double toUzs(double usd) {\n        return usd * usdToUzs;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        double summa1 = CurrencyConverter.toUzs(100.0);\n        System.out.println(\"100 USD (eski kurs): \" + summa1 + \" so'm\");\n\n        CurrencyConverter.setRate(12800.0);\n        double summa2 = CurrencyConverter.toUzs(100.0);\n        System.out.println(\"100 USD (yangi kurs): \" + summa2 + \" so'm\");\n    }\n}",
    "detailedSolution": {
      "theory": "Umumiy statik holat (Shared Static State): Kurs bitta joyda o'zgarishi bilan butun dastur bo'yicha barcha chaqiruvlar darhol yangilangan kursdan foydalana boshlaydi.",
      "theoryEn": "Shared static configuration ensures unified state changes propagate globally across all modules.",
      "cleanCode": "public static double toUzs(double usd) { return usd * usdToUzs; }",
      "breakdown": [
        "Global valyuta kursi xavfsiz boshqarildi.",
        "Statik setter orqali yangi stavka barcha chaqiruvlarga ta'sir qildi."
      ],
      "pitfalls": "Statik o'zgaruvchilarni ko'p joyda ehtiyotsiz o'zgartirish kutilmagan yon ta'sirlarga (side effects) sabab bo'lishi mumkin.",
      "cw2Tip": "CW2 ilovasida global chegirma foizini boshqarishda qo'llaniladi.",
      "theoryRu": "Общая статическая конфигурация обеспечивает глобальное распространение унифицированных изменений состояния по всем модулям.",
      "pitfallsRu": "Неосторожное изменение статических переменных во многих местах может вызвать неожиданные побочные эффекты.",
      "breakdownRu": [
        "Мировым обменным курсом можно было безопасно управлять.",
        "Благодаря статическому установщику новая скорость повлияла на все вызовы."
      ]
    },
    "sampleData": [
      "USD miqdori: 100.0",
      "Eski kurs: 12700.0 so'm",
      "Yangi kurs: 12800.0 so'm"
    ],
    "expectedOutput": "100 USD (eski kurs): 1270000.0 so'm\n100 USD (yangi kurs): 1280000.0 so'm",
    "story": {
      "uz": "Markaziy bank valyuta kursi barcha operatsiyalar uchun umumiy bitta qiymatga ega. Kurs yangilanganda barcha o'tkazmalar avtomatik yangi kurs bo'yicha hisoblanadi ('static' State).",
      "en": "A central banking currency converter manages a shared static exchange rate, dynamically affecting all conversion calculations across the system.",
      "ru": "Конвертер валют центрального банка управляет общим статическим обменным курсом, динамически влияя на все расчеты конвертации в системе."
    },
    "steps": {
      "uz": [
        "<code>CurrencyConverter</code> klassini tuzing: <code>private static double usdToUzs = 12700.0;</code> maydonini e'lon qiling.",
        "Kursni yangilash metodini yozing: <code>public static void setRate(double newRate) { if (newRate > 0) usdToUzs = newRate; }</code>.",
        "Konvertatsiya metodini yozing: <code>public static double toUzs(double usd) { return usd * usdToUzs; }</code>.",
        "<code>Main</code> metodida 100 dollarni eski kursda (12700.0) hisoblab chop eting: <code>System.out.println(\"100 USD (eski kurs): \" + summa1 + \" so'm\");</code>.",
        "Kursni 12800.0 ga o'zgartiring va yana 100 dollarni yangi kursda chop eting: <code>System.out.println(\"100 USD (yangi kurs): \" + summa2 + \" so'm\");</code>."
      ],
      "en": [
        "Declare class <code>CurrencyConverter</code> with private static <code>usdToUzs = 12700.0;</code>.",
        "Implement static <code>setRate(double newRate)</code> and static <code>toUzs(double usd)</code>.",
        "In <code>main</code>, convert 100 USD at original rate and print.",
        "Update rate to 12800.0 and convert 100 USD again.",
        "Print both conversions matching expected output."
      ],
      "ru": [
        "Объявите класс <code>CurrencyConverter</code> с приватным статическим <code>usdToUzs = 12700.0;</code>.",
        "Реализуйте статические <code>setRate(double newRate)</code> и статические <code>toUzs(double usd)</code>.",
        "В <code>main</code> конвертируйте 100 долларов США по исходному курсу и распечатайте.",
        "Обновите курс до 12800,0 и снова конвертируйте 100 долларов США.",
        "Выведите оба преобразования, соответствующие ожидаемому результату."
      ]
    }
  },
  {
    "id": 44,
    "tier": 5,
    "tierName": "5-Bosqich: Statik A'zolar va Kompozitsiya",
    "sector": "41-50",
    "title": {
      "uz": "44. Person & Address — Ob'yekt Kompozitsiyasi ('has-a' Munosabati)",
      "en": "44. Person & Address — Object Composition ('has-a' Relationship)",
      "ru": "44. Человек и адрес — состав объекта (отношение «имеет»)"
    },
    "scenario": {
      "uz": "[Hayotiy Voqealik & Kontekst]\nDasturiy tizimda inson va uning yashash manzili alohida klasslar bo'lib, inson ob'yektining ichida manzil ob'yekti saqlanadi ('has-a' Munosabati / Kompozitsiya).\n\n[Bajarilishi kerak bo'lgan vazifalar (1 dan 5 gacha)]\n1. Address klassini tuzing: city va street maydonlari, konstruktor va getterlar.\n2. Person klassini tuzing: name va Address address maydonlari, konstruktor.\n3. Person klassida public String getFullDetails() { return this.name + \" (\" + this.address.getCity() + \", \" + this.address.getStreet() + \")\"; } metodini yozing.\n4. Main metodida Address addr = new Address(\"Toshkent\", \"Amir Temur ko'chasi, 12\"); va Person p = new Person(\"Rustam Shokirov\", addr); yarating.\n5. Shaxs ma'lumotlarini chop eting: System.out.println(\"Shaxs ma'lumotlari: \" + p.getFullDetails());",
      "en": "[Real-World Story & Context]\nA domain model represents a Person possessing an Address ('has-a' relationship) through object composition.\n\n[Step-by-Step Implementation Tasks (1 to 5)]\n1. Create class Address with city, street, constructor, getters.\n2. Create class Person with name, address, constructor.\n3. Implement getFullDetails() formatting name and address details.\n4. In main, instantiate Address, then instantiate Person.\n5. Print full details matching expected output.",
      "ru": "📖 Контекст и описание задачи\nМодель предметной области представляет собой человека, обладающего адресом (отношение «имеет») посредством композиции объектов.\n\n📋 Пошаговые задачи (от 1 до 5)\n1. Создайте класс <code>Address</code> с городом, улицей, конструктором и геттерами.\n2. Создайте класс <code>Person</code> с именем, адресом и конструктором.\n3. Реализовать форматирование имени и адреса <code>getFullDetails()</code>.\n4. В <code>main</code> создайте экземпляр Address, затем создайте экземпляр Person.\n5. Распечатайте полную информацию, соответствующую ожидаемому результату."
    },
    "requirements": {
      "classes": [
        "Address",
        "Person",
        "Main"
      ],
      "privateFields": [
        "city",
        "street",
        "name",
        "address"
      ],
      "methods": [
        "getFullDetails"
      ],
      "constructors": [
        "Address",
        "Person"
      ],
      "methodDetails": [
        {
          "name": "isValidEmail / isValidUzPhone",
          "signature": "public static boolean isValidEmail(String email) / public static boolean isValidUzPhone(String phone)",
          "params": "String email / String phone",
          "paramsEn": "String email / String phone",
          "returns": "boolean (format talabga to'g'ri kelsa true, aks holda false)",
          "returnsEn": "boolean (true if matches required pattern, else false)",
          "logic": "email: ichida '@' va '.' bo'lishi; phone: '+998' bilan boshlanishi va uzunligi 13 ta belgi bo'lishi.",
          "logicEn": "Validates email and Uzbekistan phone number format.",
          "example": "ValidationUtils.isValidUzPhone('+998901234567'); // true"
        }
      ]
    },
    "starterCode": "class Address {\n    private String city;\n    private String street;\n\n    // Konstruktor va getterlar\n}\n\nclass Person {\n    private String name;\n    private Address address;\n\n    // Konstruktor va getFullDetails metodi\n}\n\nclass Main {\n    public static void main(String[] args) {\n        // Address va Person ob'yektlarini bog'lab chiqaring\n        \n    }\n}",
    "solution": "class Address {\n    private String city;\n    private String street;\n\n    public Address(String city, String street) {\n        this.city = city;\n        this.street = street;\n    }\n\n    public String getCity() { return this.city; }\n    public String getStreet() { return this.street; }\n}\n\nclass Person {\n    private String name;\n    private Address address;\n\n    public Person(String name, Address address) {\n        this.name = name;\n        this.address = address;\n    }\n\n    public String getFullDetails() {\n        return this.name + \" (\" + this.address.getCity() + \", \" + this.address.getStreet() + \")\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Address addr = new Address(\"Toshkent\", \"Amir Temur ko'chasi, 12\");\n        Person p = new Person(\"Rustam Shokirov\", addr);\n\n        System.out.println(\"Shaxs ma'lumotlari: \" + p.getFullDetails());\n    }\n}",
    "detailedSolution": {
      "theory": "Kompozitsiya (Composition) — 'has-a' munosabatidir: 'Person has an Address' (Shaxsning manzili bor). Katta klasslarni mayda ixtisoslashgan ob'yektlardan yig'ish dastur kodini toza va modulli qiladi.",
      "theoryEn": "Composition favors flexible 'has-a' delegation over monolithic single classes.",
      "cleanCode": "public String getFullDetails() {\n    return this.name + \" (\" + this.address.getCity() + \", \" + this.address.getStreet() + \")\";\n}",
      "breakdown": [
        "Manzil alohida qayta ishlatiluvchi klassga ajratildi.",
        "Person klassi Address ob'yektiga murojaat qildi."
      ],
      "pitfalls": "Agar address null bo'lsa, `address.getCity()` chaqiruvi NullPointerException beradi — null tekshiruvini esdan chiqarmang.",
      "cw2Tip": "CW2 da `Customer has an Address` va `Order has a Customer` aynan shu usulda quriladi.",
      "theoryRu": "Композиция предпочитает гибкое делегирование «имеет» монолитным отдельным классам.",
      "pitfallsRu": "Если адрес равен нулю, вызов `address.getCity()` вызовет исключение NullPointerException — не забудьте проверить наличие нуля.",
      "breakdownRu": [
        "Адрес, выделенный в отдельный повторно используемый класс.",
        "Класс Person имеет ссылку на объект Address."
      ]
    },
    "sampleData": [
      "Manzil -> city: \"Toshkent\", street: \"Amir Temur ko'chasi, 12\"",
      "Shaxs -> fullName: \"Rustam Shokirov\", address: yuqoridagi manzil"
    ],
    "expectedOutput": "Shaxs ma'lumotlari: Rustam Shokirov (Toshkent, Amir Temur ko'chasi, 12)",
    "story": {
      "uz": "Dasturiy tizimda inson va uning yashash manzili alohida klasslar bo'lib, inson ob'yektining ichida manzil ob'yekti saqlanadi ('has-a' Munosabati / Kompozitsiya).",
      "en": "A domain model represents a Person possessing an Address ('has-a' relationship) through object composition.",
      "ru": "Модель предметной области представляет собой человека, обладающего адресом (отношение «имеет») посредством композиции объектов."
    },
    "steps": {
      "uz": [
        "<code>Address</code> klassini tuzing: <code>city</code> va <code>street</code> maydonlari, konstruktor va getterlar.",
        "<code>Person</code> klassini tuzing: <code>name</code> va <code>Address address</code> maydonlari, konstruktor.",
        "<code>Person</code> klassida <code>public String getFullDetails() { return this.name + \" (\" + this.address.getCity() + \", \" + this.address.getStreet() + \")\"; }</code> metodini yozing.",
        "<code>Main</code> metodida <code>Address addr = new Address(\"Toshkent\", \"Amir Temur ko'chasi, 12\");</code> va <code>Person p = new Person(\"Rustam Shokirov\", addr);</code> yarating.",
        "Shaxs ma'lumotlarini chop eting: <code>System.out.println(\"Shaxs ma'lumotlari: \" + p.getFullDetails());</code>"
      ],
      "en": [
        "Create class <code>Address</code> with city, street, constructor, getters.",
        "Create class <code>Person</code> with name, address, constructor.",
        "Implement <code>getFullDetails()</code> formatting name and address details.",
        "In <code>main</code>, instantiate Address, then instantiate Person.",
        "Print full details matching expected output."
      ],
      "ru": [
        "Создайте класс <code>Address</code> с городом, улицей, конструктором и геттерами.",
        "Создайте класс <code>Person</code> с именем, адресом и конструктором.",
        "Реализовать форматирование имени и адреса <code>getFullDetails()</code>.",
        "В <code>main</code> создайте экземпляр Address, затем создайте экземпляр Person.",
        "Распечатайте полную информацию, соответствующую ожидаемому результату."
      ]
    }
  },
  {
    "id": 45,
    "tier": 5,
    "tierName": "5-Bosqich: Statik A'zolar va Kompozitsiya",
    "sector": "41-50",
    "title": {
      "uz": "45. Vehicle & Engine — Kuchli Kompozitsiya va Ichki Delegatsiya",
      "en": "45. Vehicle & Engine — Strong Composition & Internal Delegation",
      "ru": "45. Транспортное средство и двигатель — сильный состав и внутреннее делегирование"
    },
    "scenario": {
      "uz": "[Hayotiy Voqealik & Kontekst]\nAvtomobil o'zining ichki dvigateliga (Engine) ega. Avtomobil o't oldirilganda dvigatelning turi va ot kuchini delegatsiya orqali konsolga aks ettiradi (Kuchli Kompozitsiya).\n\n[Bajarilishi kerak bo'lgan vazifalar (1 dan 5 gacha)]\n1. Engine klassini e'lon qiling: private int horsePower;, private String type;, konstruktor va getterlar.\n2. Car klassini e'lon qiling: private String model;, private Engine engine;, konstruktor.\n3. Car klassida public void startCar() metodini yozing: System.out.println(this.model + \" o't oldirildi! Dvigatel: \" + this.engine.getType() + \" (\" + this.engine.getHorsePower() + \" HP)\");.\n4. Main metodida Engine turbo = new Engine(250, \"2.0 Turbo\"); va Car myCar = new Car(\"Malibu Premier\", turbo); ob'yektlarini yarating.\n5. Avtomobilni o't oldiring: myCar.startCar();",
      "en": "[Real-World Story & Context]\nAn automotive Car model encapsulates an internal Engine component, delegating start telemetry to engine specifications.\n\n[Step-by-Step Implementation Tasks (1 to 5)]\n1. Declare class Engine with horsePower, type, constructor, getters.\n2. Declare class Car with model, engine, constructor.\n3. Implement startCar() printing engine telemetry.\n4. In main, instantiate Engine, then instantiate Car.\n5. Invoke myCar.startCar();.",
      "ru": "📖 Контекст и описание задачи\nАвтомобильная модель автомобиля инкапсулирует внутренний компонент двигателя, делегируя телеметрию запуска спецификациям двигателя.\n\n📋 Пошаговые задачи (от 1 до 5)\n1. Объявите класс <code>Engine</code> с указанием лошадиной силы, типа, конструктора и геттеров.\n2. Объявите класс <code>Car</code> с моделью, двигателем, конструктором.\n3. Внедрите телеметрию механизма печати <code>startCar()</code>.\n4. В <code>main</code> создайте экземпляр Engine, затем создайте экземпляр Car.\n5. Вызовите <code>myCar.startCar();</code>."
    },
    "requirements": {
      "classes": [
        "Engine",
        "Car",
        "Main"
      ],
      "privateFields": [
        "horsePower",
        "type",
        "model",
        "engine"
      ],
      "methods": [
        "startCar"
      ],
      "constructors": [
        "Engine",
        "Car"
      ],
      "methodDetails": [
        {
          "name": "startCar",
          "signature": "public void startCar()",
          "params": "Parametr qabul qilmaydi ()",
          "paramsEn": "No parameters ()",
          "returns": "void (ichki Engine obyektining startEngine() metodini chaqirib, avtomobilni o't oldiradi)",
          "returnsEn": "void (delegates to internal Engine.startEngine() method)",
          "logic": "this.engine.startEngine(); System.out.println(this.model + ' o\\'t oldirildi! ' + ...);",
          "logicEn": "Delegates execution to composed Engine object.",
          "example": "Car car = new Car('Malibu Premier', engine); car.startCar();"
        }
      ]
    },
    "starterCode": "class Engine {\n    private int horsePower;\n    private String type;\n\n    // Konstruktor va getterlar\n}\n\nclass Car {\n    private String model;\n    private Engine engine;\n\n    // Konstruktor va startCar metodi\n}\n\nclass Main {\n    public static void main(String[] args) {\n        // Avtomobilni motori bilan yarating va o't oldiring\n        \n    }\n}",
    "solution": "class Engine {\n    private int horsePower;\n    private String type;\n\n    public Engine(int horsePower, String type) {\n        this.horsePower = horsePower;\n        this.type = type;\n    }\n\n    public int getHorsePower() { return this.horsePower; }\n    public String getType() { return this.type; }\n}\n\nclass Car {\n    private String model;\n    private Engine engine;\n\n    public Car(String model, Engine engine) {\n        this.model = model;\n        this.engine = engine;\n    }\n\n    public void startCar() {\n        System.out.println(this.model + \" o't oldirildi! Dvigatel: \" + this.engine.getType() + \" (\" + this.engine.getHorsePower() + \" HP)\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Engine turbo = new Engine(250, \"2.0 Turbo\");\n        Car myCar = new Car(\"Malibu Premier\", turbo);\n\n        myCar.startCar();\n    }\n}",
    "detailedSolution": {
      "theory": "Delegatsiya (Delegation): 'Car' o'z dvigatelining ot kuchini saqlamaydi, balki ushbu mas'uliyatni o'zining ichki qismi bo'lgan 'Engine' ob'yektiga topshiradi.",
      "theoryEn": "Delegation assigns specialized responsibilities to dedicated component instances.",
      "cleanCode": "this.engine.getType() + \" (\" + this.engine.getHorsePower() + \" HP)\"",
      "breakdown": [
        "Dvigatel mustaqil modulli ob'yekt sifatida yaratildi.",
        "Avtomobil dvigatel imkoniyatlaridan to'liq foydalandi."
      ],
      "pitfalls": "Kompozitsiya qilingan ob'yektni private qilib himoyalash yaxshi amaliyotdir.",
      "cw2Tip": "CW2 tizimida `Order` o'z to'lovini `PaymentProcessor` ob'yektiga delegatsiya qiladi.",
      "theoryRu": "Делегирование назначает специализированные обязанности выделенным экземплярам компонентов.",
      "pitfallsRu": "Хорошей практикой является сделать составной объект закрытым.",
      "breakdownRu": [
        "Двигатель создавался как самостоятельный модульный объект.",
        "Автомобиль в полной мере использовал возможности двигателя."
      ]
    },
    "sampleData": [
      "Dvigatel -> horsepower: 250, model: \"2.0 Turbo\"",
      "Avtomobil -> model: \"Malibu Premier\", engine: yuqoridagi dvigatel"
    ],
    "expectedOutput": "Malibu Premier o't oldirildi! Dvigatel: 2.0 Turbo (250 HP)",
    "story": {
      "uz": "Avtomobil o'zining ichki dvigateliga (Engine) ega. Avtomobil o't oldirilganda dvigatelning turi va ot kuchini delegatsiya orqali konsolga aks ettiradi (Kuchli Kompozitsiya).",
      "en": "An automotive Car model encapsulates an internal Engine component, delegating start telemetry to engine specifications.",
      "ru": "Автомобильная модель автомобиля инкапсулирует внутренний компонент двигателя, делегируя телеметрию запуска спецификациям двигателя."
    },
    "steps": {
      "uz": [
        "<code>Engine</code> klassini e'lon qiling: <code>private int horsePower;</code>, <code>private String type;</code>, konstruktor va getterlar.",
        "<code>Car</code> klassini e'lon qiling: <code>private String model;</code>, <code>private Engine engine;</code>, konstruktor.",
        "<code>Car</code> klassida <code>public void startCar()</code> metodini yozing: <code>System.out.println(this.model + \" o't oldirildi! Dvigatel: \" + this.engine.getType() + \" (\" + this.engine.getHorsePower() + \" HP)\");</code>.",
        "<code>Main</code> metodida <code>Engine turbo = new Engine(250, \"2.0 Turbo\");</code> va <code>Car myCar = new Car(\"Malibu Premier\", turbo);</code> ob'yektlarini yarating.",
        "Avtomobilni o't oldiring: <code>myCar.startCar();</code>"
      ],
      "en": [
        "Declare class <code>Engine</code> with horsePower, type, constructor, getters.",
        "Declare class <code>Car</code> with model, engine, constructor.",
        "Implement <code>startCar()</code> printing engine telemetry.",
        "In <code>main</code>, instantiate Engine, then instantiate Car.",
        "Invoke <code>myCar.startCar();</code>."
      ],
      "ru": [
        "Объявите класс <code>Engine</code> с указанием лошадиной силы, типа, конструктора и геттеров.",
        "Объявите класс <code>Car</code> с моделью, двигателем, конструктором.",
        "Внедрите телеметрию механизма печати <code>startCar()</code>.",
        "В <code>main</code> создайте экземпляр Engine, затем создайте экземпляр Car.",
        "Вызовите <code>myCar.startCar();</code>."
      ]
    }
  },
  {
    "id": 46,
    "tier": 5,
    "tierName": "5-Bosqich: Statik A'zolar va Kompozitsiya",
    "sector": "41-50",
    "title": {
      "uz": "46. E-Commerce Cart — 'Product' va 'OrderItem' Savat Pozitsiyasi",
      "en": "46. E-Commerce Cart — 'Product' & 'OrderItem' Cart Line Item",
      "ru": "46. ​​Корзина электронной торговли — позиция корзины «Продукт» и «OrderItem»."
    },
    "scenario": {
      "uz": "[Hayotiy Voqealik & Kontekst]\nElektron savatda har bir buyurtma qatori (OrderItem) mahsulot ob'yektiga va buyurtma soniga ega bo'lib, uning oraliq summasini (subtotal) hisoblab beradi.\n\n[Bajarilishi kerak bo'lgan vazifalar (1 dan 5 gacha)]\n1. Product klassini tuzing: name va price maydonlari, konstruktor va getterlar.\n2. OrderItem klassini tuzing: Product product va int quantity maydonlari, konstruktor va getterlar.\n3. OrderItem klassida public double getSubtotal() { return this.product.getPrice() * this.quantity; } metodini yozing.\n4. Main metodida Product p = new Product(\"Simsiz Quloqchin\", 350000.0); va OrderItem item = new OrderItem(p, 3); yarating.\n5. Tovar ma'lumotlari va oraliq summani 2 qatorda chop eting:System.out.println(\"Tovar: \" + item.getProduct().getName() + \" x \" + item.getQuantity() + \" dona\");System.out.println(\"Oraliq summa: \" + item.getSubtotal() + \" so'm\");",
      "en": "[Real-World Story & Context]\nAn e-commerce cart position (OrderItem) aggregates a Product reference and quantity, computing line-item subtotal.\n\n[Step-by-Step Implementation Tasks (1 to 5)]\n1. Create class Product with name, price, constructor, getters.\n2. Create class OrderItem with product, quantity, constructor, getters.\n3. Implement getSubtotal() returning product.getPrice() * quantity.\n4. In main, instantiate Product, then OrderItem with quantity 3.\n5. Print product name, quantity, and subtotal on 2 lines.",
      "ru": "📖 Контекст и описание задачи\nПозиция корзины электронной торговли (OrderItem) объединяет ссылку на продукт и его количество, вычисляя промежуточный итог по позиции.\n\n📋 Пошаговые задачи (от 1 до 5)\n1. Создайте класс <code>Product</code> с именем, ценой, конструктором и геттерами.\n2. Создайте класс <code>OrderItem</code> с продуктом, количеством, конструктором и геттерами.\n3. Реализуйте <code>getSubtotal()</code>, возвращающий Product.getPrice() * количество.\n4. В <code>main</code> создайте экземпляр Product, затем OrderItem с количеством 3.\n5. Напечатайте название продукта, количество и промежуточную сумму в 2 строки."
    },
    "requirements": {
      "classes": [
        "Product",
        "OrderItem",
        "Main"
      ],
      "privateFields": [
        "name",
        "price",
        "product",
        "quantity"
      ],
      "methods": [
        "getSubtotal"
      ],
      "constructors": [
        "Product",
        "OrderItem"
      ],
      "methodDetails": [
        {
          "name": "calculateCartTotal",
          "signature": "public double calculateCartTotal()",
          "params": "Parametr qabul qilmaydi ()",
          "paramsEn": "No parameters ()",
          "returns": "double (savatdagi barcha tovarlar narxlari yig'indisi)",
          "returnsEn": "double (sum of all items inside the shopping cart)",
          "logic": "Massiv yoki tovarlar bo'ylab narx * miqdor larni qo'shib chiqadi.",
          "logicEn": "Computes total order sum by iterating through composed items.",
          "example": "cart.calculateCartTotal(); // 350000.0 so'm"
        }
      ]
    },
    "starterCode": "class Product {\n    private String name;\n    private double price;\n\n    // Konstruktor va getterlar\n}\n\nclass OrderItem {\n    private Product product;\n    private int quantity;\n\n    // Konstruktor va getSubtotal metodi\n}\n\nclass Main {\n    public static void main(String[] args) {\n        // Product va OrderItem yarating, oraliq summani hisoblang\n        \n    }\n}",
    "solution": "class Product {\n    private String name;\n    private double price;\n\n    public Product(String name, double price) {\n        this.name = name;\n        this.price = (price >= 0) ? price : 0.0;\n    }\n\n    public String getName() { return this.name; }\n    public double getPrice() { return this.price; }\n}\n\nclass OrderItem {\n    private Product product;\n    private int quantity;\n\n    public OrderItem(Product product, int quantity) {\n        this.product = product;\n        this.quantity = (quantity > 0) ? quantity : 1;\n    }\n\n    public Product getProduct() { return this.product; }\n    public int getQuantity() { return this.quantity; }\n\n    public double getSubtotal() {\n        return this.product.getPrice() * this.quantity;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product p = new Product(\"Simsiz Quloqchin\", 350000.0);\n        OrderItem item = new OrderItem(p, 3);\n\n        System.out.println(\"Tovar: \" + item.getProduct().getName() + \" x \" + item.getQuantity() + \" dona\");\n        System.out.println(\"Oraliq summa: \" + item.getSubtotal() + \" so'm\");\n    }\n}",
    "detailedSolution": {
      "theory": "'OrderItem' — savdodagi asosiy element (Line Item). U tovarning o'zi emas, balki tovarning savatdagi nusxasi va sonini birlashtiruvchi kompozitsion ko'prikdir.",
      "theoryEn": "'OrderItem' serves as the line item linking a domain product with its cart quantity.",
      "cleanCode": "public double getSubtotal() {\n    return this.product.getPrice() * this.quantity;\n}",
      "breakdown": [
        "Product va OrderItem o'rtasidagi bog'liqlik to'g'ri o'rnatildi.",
        "Oraliq narx kompozitsiyalangan Product getteri orqali hisoblandi."
      ],
      "pitfalls": "Product narxi o'zgarsa ham, OrderItem har doim dolzarb narxni oladi.",
      "cw2Tip": "Bu sinf CW2 kurs ishining eng markaziy ob'yektlaridan biridir.",
      "theoryRu": "OrderItem служит строкой, связывающей продукт домена с количеством его в корзине.",
      "pitfallsRu": "Даже если цена продукта изменится, OrderItem всегда получит текущую цену.",
      "breakdownRu": [
        "Связь между Product и OrderItem установлена ​​правильно.",
        "Промежуточная цена рассчитывалась с использованием составного метода получения продукта."
      ]
    },
    "sampleData": [
      "Mahsulot -> name: \"Simsiz Quloqchin\", price: 350000.0 so'm",
      "Buyurtma pozitsiyasi -> quantity: 3 dona"
    ],
    "expectedOutput": "Tovar: Simsiz Quloqchin x 3 dona\nOraliq summa: 1050000.0 so'm",
    "story": {
      "uz": "Elektron savatda har bir buyurtma qatori (OrderItem) mahsulot ob'yektiga va buyurtma soniga ega bo'lib, uning oraliq summasini (subtotal) hisoblab beradi.",
      "en": "An e-commerce cart position (OrderItem) aggregates a Product reference and quantity, computing line-item subtotal.",
      "ru": "Позиция корзины электронной торговли (OrderItem) объединяет ссылку на продукт и его количество, вычисляя промежуточный итог по позиции."
    },
    "steps": {
      "uz": [
        "<code>Product</code> klassini tuzing: <code>name</code> va <code>price</code> maydonlari, konstruktor va getterlar.",
        "<code>OrderItem</code> klassini tuzing: <code>Product product</code> va <code>int quantity</code> maydonlari, konstruktor va getterlar.",
        "<code>OrderItem</code> klassida <code>public double getSubtotal() { return this.product.getPrice() * this.quantity; }</code> metodini yozing.",
        "<code>Main</code> metodida <code>Product p = new Product(\"Simsiz Quloqchin\", 350000.0);</code> va <code>OrderItem item = new OrderItem(p, 3);</code> yarating.",
        "Tovar ma'lumotlari va oraliq summani 2 qatorda chop eting:<br><code>System.out.println(\"Tovar: \" + item.getProduct().getName() + \" x \" + item.getQuantity() + \" dona\");</code><br><code>System.out.println(\"Oraliq summa: \" + item.getSubtotal() + \" so'm\");</code>"
      ],
      "en": [
        "Create class <code>Product</code> with name, price, constructor, getters.",
        "Create class <code>OrderItem</code> with product, quantity, constructor, getters.",
        "Implement <code>getSubtotal()</code> returning product.getPrice() * quantity.",
        "In <code>main</code>, instantiate Product, then OrderItem with quantity 3.",
        "Print product name, quantity, and subtotal on 2 lines."
      ],
      "ru": [
        "Создайте класс <code>Product</code> с именем, ценой, конструктором и геттерами.",
        "Создайте класс <code>OrderItem</code> с продуктом, количеством, конструктором и геттерами.",
        "Реализуйте <code>getSubtotal()</code>, возвращающий Product.getPrice() * количество.",
        "В <code>main</code> создайте экземпляр Product, затем OrderItem с количеством 3.",
        "Напечатайте название продукта, количество и промежуточную сумму в 2 строки."
      ]
    }
  },
  {
    "id": 47,
    "tier": 5,
    "tierName": "5-Bosqich: Statik A'zolar va Kompozitsiya",
    "sector": "41-50",
    "title": {
      "uz": "47. Enterprise Order — Mijoz va Buyurtma Assotsiatsiyasi ('Customer' & 'Order')",
      "en": "47. Enterprise Order — Customer & Order Association",
      "ru": "47. Заказ предприятия — Ассоциация клиентов и заказов"
    },
    "scenario": {
      "uz": "[Hayotiy Voqealik & Kontekst]\nKorxona buyurtmalar tizimida buyurtma (Order) ma'lum bir mijozga (Customer) tegishli bo'lib, buyurtma kvitansiyasida mijoz rekvizitlari va to'lov summasi korporativ ramkada ko'rsatiladi.\n\n[Bajarilishi kerak bo'lgan vazifalar (1 dan 5 gacha)]\n1. Customer klassini tuzing: customerId, fullName, phone, konstruktor va getterlar.\n2. Order klassini tuzing: orderId, Customer customer, totalAmount, konstruktor.\n3. Order klassida public void printOrderSummary() metodini yozing: buyurtma raqami, mijoz ismi, telefoni va to'lov summasini ramkali kvitansiya formatida chop etsin.\n4. Main metodida Customer c = new Customer(101, \"Dilshod Karimov\", \"+998931112233\"); va Order ord = new Order(5001, c, 480000.0); yarating.\n5. Kvitansiyani chop eting: ord.printOrderSummary();",
      "en": "[Real-World Story & Context]\nAn enterprise order management system links orders to customers, rendering formatted order summaries with customer details.\n\n[Step-by-Step Implementation Tasks (1 to 5)]\n1. Create class Customer with customerId, fullName, phone, getters.\n2. Create class Order with orderId, customer, totalAmount.\n3. Implement printOrderSummary() formatting customer summary box.\n4. In main, instantiate Customer, then Order.\n5. Invoke ord.printOrderSummary();.",
      "ru": "📖 Контекст и описание задачи\nКорпоративная система управления заказами связывает заказы с клиентами, предоставляя отформатированные сводки заказов с подробной информацией о клиентах.\n\n📋 Пошаговые задачи (от 1 до 5)\n1. Создайте класс <code>Customer</code> с идентификатором клиента, полным именем, телефоном и геттерами.\n2. Создайте класс <code>Order</code> с идентификатором заказа, клиентом и общей суммой.\n3. Реализовать поле сводной информации о клиенте в формате <code>printOrderSummary()</code>.\n4. В <code>main</code> создайте экземпляр Customer, затем Order.\n5. Вызовите <code>ord.printOrderSummary();</code>."
    },
    "requirements": {
      "classes": [
        "Customer",
        "Order",
        "Main"
      ],
      "privateFields": [
        "customerId",
        "fullName",
        "phone",
        "orderId",
        "customer",
        "totalAmount"
      ],
      "methods": [
        "printOrderSummary"
      ],
      "constructors": [
        "Customer",
        "Order"
      ],
      "methodDetails": [
        {
          "name": "printOrderSummary",
          "signature": "public void printOrderSummary()",
          "params": "Parametr qabul qilmaydi ()",
          "paramsEn": "No parameters ()",
          "returns": "void (ichki Customer va Order ma'lumotlarini to'liq formatlab konsolga chiqaradi)",
          "returnsEn": "void (prints order details and customer data to console)",
          "logic": "Buyurtma ID si, mijoz ismi, telefoni va to'lov summasini kvitansiya formatida konsolga chop etadi.",
          "logicEn": "Prints receipt with composed customer details.",
          "example": "order.printOrderSummary();"
        }
      ]
    },
    "starterCode": "class Customer {\n    private int customerId;\n    private String fullName;\n    private String phone;\n\n    // Konstruktor va getterlar\n}\n\nclass Order {\n    private int orderId;\n    private Customer customer;\n    private double totalAmount;\n\n    // Konstruktor va printOrderSummary metodi\n}\n\nclass Main {\n    public static void main(String[] args) {\n        // Customer va Order tuzib summary chiqaring\n        \n    }\n}",
    "solution": "class Customer {\n    private int customerId;\n    private String fullName;\n    private String phone;\n\n    public Customer(int customerId, String fullName, String phone) {\n        this.customerId = customerId;\n        this.fullName = fullName;\n        this.phone = phone;\n    }\n\n    public int getCustomerId() { return this.customerId; }\n    public String getFullName() { return this.fullName; }\n    public String getPhone() { return this.phone; }\n}\n\nclass Order {\n    private int orderId;\n    private Customer customer;\n    private double totalAmount;\n\n    public Order(int orderId, Customer customer, double totalAmount) {\n        this.orderId = orderId;\n        this.customer = customer;\n        this.totalAmount = totalAmount;\n    }\n\n    public void printOrderSummary() {\n        System.out.println(\"=== BUYURTMA #\" + this.orderId + \" ===\");\n        System.out.println(\"Mijoz: \" + this.customer.getFullName() + \" (Tel: \" + this.customer.getPhone() + \")\");\n        System.out.println(\"To'lov summasi: \" + this.totalAmount + \" so'm\");\n        System.out.println(\"==========================\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(101, \"Dilshod Karimov\", \"+998931112233\");\n        Order ord = new Order(5001, c, 480000.0);\n\n        ord.printOrderSummary();\n    }\n}",
    "detailedSolution": {
      "theory": "Assotsiatsiya (Association): 'Order' ob'yekti 'Customer' ob'yektini o'z ichida saqlab, uning shaxsiy ma'lumotlariga xavfsiz erishadi. Bu real axborot tizimlaridagi munosabatlar bazasini (Relational mapping) tashkil etadi.",
      "theoryEn": "Object association models relational foreign keys via object references in object-oriented memory.",
      "cleanCode": "System.out.println(\"Mijoz: \" + this.customer.getFullName());",
      "breakdown": [
        "Mijoz va buyurtma o'rtasida to'g'ridan-to'g'ri bog'liqlik o'rnatildi.",
        "Buyurtma xulosasi kvitansiya ko'rinishida formatlandi."
      ],
      "pitfalls": "Customer ob'yektining maydonlari 'private' bo'lgani sababli `this.customer.fullName` emas, `this.customer.getFullName()` orqali o'qiladi.",
      "cw2Tip": "CW2 konsol ilovangizda foydalanuvchi buyurtmalari aynan shu modelda tashkil qilinadi.",
      "theoryRu": "Ассоциация объектов моделирует реляционные внешние ключи через ссылки на объекты в объектно-ориентированной памяти.",
      "pitfallsRu": "Поскольку поля объекта «Клиент» являются «частными», они считываются через `this.customer.getFullName()`, а не через `this.customer.fullName`.",
      "breakdownRu": [
        "Была установлена ​​прямая связь между заказчиком и заказом.",
        "Сводка заказа оформляется как квитанция."
      ]
    },
    "sampleData": [
      "Mijoz -> id: 101, name: \"Dilshod Karimov\", phone: \"+998931112233\"",
      "Buyurtma -> orderId: 5001, customer: yuqoridagi mijoz, amount: 480000.0 so'm"
    ],
    "expectedOutput": "=== BUYURTMA #5001 ===\nMijoz: Dilshod Karimov (Tel: +998931112233)\nTo'lov summasi: 480000.0 so'm\n==========================",
    "story": {
      "uz": "Korxona buyurtmalar tizimida buyurtma (Order) ma'lum bir mijozga (Customer) tegishli bo'lib, buyurtma kvitansiyasida mijoz rekvizitlari va to'lov summasi korporativ ramkada ko'rsatiladi.",
      "en": "An enterprise order management system links orders to customers, rendering formatted order summaries with customer details.",
      "ru": "Корпоративная система управления заказами связывает заказы с клиентами, предоставляя отформатированные сводки заказов с подробной информацией о клиентах."
    },
    "steps": {
      "uz": [
        "<code>Customer</code> klassini tuzing: <code>customerId</code>, <code>fullName</code>, <code>phone</code>, konstruktor va getterlar.",
        "<code>Order</code> klassini tuzing: <code>orderId</code>, <code>Customer customer</code>, <code>totalAmount</code>, konstruktor.",
        "<code>Order</code> klassida <code>public void printOrderSummary()</code> metodini yozing: buyurtma raqami, mijoz ismi, telefoni va to'lov summasini ramkali kvitansiya formatida chop etsin.",
        "<code>Main</code> metodida <code>Customer c = new Customer(101, \"Dilshod Karimov\", \"+998931112233\");</code> va <code>Order ord = new Order(5001, c, 480000.0);</code> yarating.",
        "Kvitansiyani chop eting: <code>ord.printOrderSummary();</code>"
      ],
      "en": [
        "Create class <code>Customer</code> with customerId, fullName, phone, getters.",
        "Create class <code>Order</code> with orderId, customer, totalAmount.",
        "Implement <code>printOrderSummary()</code> formatting customer summary box.",
        "In <code>main</code>, instantiate Customer, then Order.",
        "Invoke <code>ord.printOrderSummary();</code>."
      ],
      "ru": [
        "Создайте класс <code>Customer</code> с идентификатором клиента, полным именем, телефоном и геттерами.",
        "Создайте класс <code>Order</code> с идентификатором заказа, клиентом и общей суммой.",
        "Реализовать поле сводной информации о клиенте в формате <code>printOrderSummary()</code>.",
        "В <code>main</code> создайте экземпляр Customer, затем Order.",
        "Вызовите <code>ord.printOrderSummary();</code>."
      ]
    }
  },
  {
    "id": 48,
    "tier": 5,
    "tierName": "5-Bosqich: Statik A'zolar va Kompozitsiya",
    "sector": "41-50",
    "title": {
      "uz": "48. Global Constants — 'public static final' Tizim Sozlamalari",
      "en": "48. Global Constants — 'public static final' App Configuration",
      "ru": "48. Глобальные константы — конфигурация приложения «public static Final»."
    },
    "scenario": {
      "uz": "[Hayotiy Voqealik & Kontekst]\nIlovaning global sozlamalari, tizim nomi, versiyasi va ruxsat etilgan maksimal chegirma ko'rsatkichi butun dastur bo'ylab o'zgarmas 'public static final' konstantalar sifatida markazlashtiriladi.\n\n[Bajarilishi kerak bo'lgan vazifalar (1 dan 5 gacha)]\n1. AppConfig klassini tuzing va tashqaridan ob'yekt olinmasligi uchun konstruktorini private qiling.\n2. 3 ta konstantani e'lon qiling: public static final String APP_NAME = \"WIUT Academy\";, public static final String VERSION = \"2.0\";, public static final double MAX_DISCOUNT_PCT = 30.0;.\n3. Main metodida ob'yekt yaratmasdan bevosita AppConfig orqali konstantalarga murojaat qiling.\n4. Tizim nomi va versiyasini chop eting: System.out.println(\"Tizim: \" + AppConfig.APP_NAME + \" v\" + AppConfig.VERSION);.\n5. Maksimal chegirma foizini chop eting: System.out.println(\"Maksimal ruxsat etilgan chegirma: \" + AppConfig.MAX_DISCOUNT_PCT + \"%\");.",
      "en": "[Real-World Story & Context]\nEnterprise system configuration maintains global immutable settings (APP_NAME, VERSION, MAX_DISCOUNT_PCT) as public static final constants.\n\n[Step-by-Step Implementation Tasks (1 to 5)]\n1. Create class AppConfig with private constructor.\n2. Declare 3 constants: APP_NAME, VERSION, MAX_DISCOUNT_PCT.\n3. In main, access constants directly via class name.\n4. Print app name and version on first line.\n5. Print max discount percentage on second line.",
      "ru": "📖 Контекст и описание задачи\nВ конфигурации корпоративной системы глобальные неизменяемые настройки (APP_NAME, VERSION, MAX_DISCOUNT_PCT) сохраняются как общедоступные статические конечные константы.\n\n📋 Пошаговые задачи (от 1 до 5)\n1. Создайте класс <code>AppConfig</code> с помощью частного конструктора.\n2. Объявите 3 константы: APP_NAME, VERSION, MAX_DISCOUNT_PCT.\n3. В <code>main</code> доступ к константам осуществляется напрямую через имя класса.\n4. Напечатайте название и версию приложения в первой строке.\n5. Выведите максимальный процент скидки во второй строке."
    },
    "requirements": {
      "classes": [
        "AppConfig",
        "Main"
      ],
      "keywords": [
        "static",
        "final"
      ]
    },
    "starterCode": "class AppConfig {\n    // public static final konstantalarni e'lon qiling\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        // AppConfig konstantalarini to'g'ridan-to'g'ri chop eting\n        \n    }\n}",
    "solution": "class AppConfig {\n    private AppConfig() {}\n\n    public static final String APP_NAME = \"WIUT Academy\";\n    public static final String VERSION = \"2.0\";\n    public static final double MAX_DISCOUNT_PCT = 30.0;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Tizim: \" + AppConfig.APP_NAME + \" v\" + AppConfig.VERSION);\n        System.out.println(\"Maksimal ruxsat etilgan chegirma: \" + AppConfig.MAX_DISCOUNT_PCT + \"%\");\n    }\n}",
    "detailedSolution": {
      "theory": "Konstantalar Konvensiyasi (Constant Naming): 'public static final' deb e'lon qilingan o'zgaruvchilar Java-da doim KATTA_HARFLAR bilan va so'zlar orasi pastki chiziq ('_') bilan yoziladi. Ular butun ilovaning global sozlamalarini boshqaradi.",
      "theoryEn": "'public static final' fields define globally accessible compile-time constants adhering to UPPER_SNAKE_CASE.",
      "cleanCode": "public static final String APP_NAME = \"WIUT Academy\";",
      "breakdown": [
        "Xotirada faqat 1 ta o'zgarmas nusxada saqlanuvchi doimiyliklar.",
        "Ob'yekt yaratmasdan to'g'ridan-to'g'ri foydalaniladi."
      ],
      "pitfalls": "Konstantalarni kichik harflar bilan yozish Clean Code talablariga zid sanaladi.",
      "cw2Tip": "Soliq stavkalari va do'kon nomini shunday o'zgarmas qilib e'lon qilish tavsiya etiladi.",
      "theoryRu": "Поля «public static Final» определяют глобально доступные константы времени компиляции, соответствующие UPPER_SNAKE_CASE.",
      "pitfallsRu": "Написание констант в нижнем регистре противоречит требованиям чистого кода.",
      "breakdownRu": [
        "Константы, имеющие в памяти только одну неизменяемую копию.",
        "Он используется напрямую, без создания объекта."
      ]
    },
    "sampleData": [
      "Tizim nomi: \"WIUT Academy\", versiya: \"2.0\"",
      "Maksimal ruxsat etilgan chegirma: 30.0%"
    ],
    "expectedOutput": "Tizim: WIUT Academy v2.0\nMaksimal ruxsat etilgan chegirma: 30.0%",
    "story": {
      "uz": "Ilovaning global sozlamalari, tizim nomi, versiyasi va ruxsat etilgan maksimal chegirma ko'rsatkichi butun dastur bo'ylab o'zgarmas 'public static final' konstantalar sifatida markazlashtiriladi.",
      "en": "Enterprise system configuration maintains global immutable settings (APP_NAME, VERSION, MAX_DISCOUNT_PCT) as public static final constants.",
      "ru": "В конфигурации корпоративной системы глобальные неизменяемые настройки (APP_NAME, VERSION, MAX_DISCOUNT_PCT) сохраняются как общедоступные статические конечные константы."
    },
    "steps": {
      "uz": [
        "<code>AppConfig</code> klassini tuzing va tashqaridan ob'yekt olinmasligi uchun konstruktorini <code>private</code> qiling.",
        "3 ta konstantani e'lon qiling: <code>public static final String APP_NAME = \"WIUT Academy\";</code>, <code>public static final String VERSION = \"2.0\";</code>, <code>public static final double MAX_DISCOUNT_PCT = 30.0;</code>.",
        "<code>Main</code> metodida ob'yekt yaratmasdan bevosita <code>AppConfig</code> orqali konstantalarga murojaat qiling.",
        "Tizim nomi va versiyasini chop eting: <code>System.out.println(\"Tizim: \" + AppConfig.APP_NAME + \" v\" + AppConfig.VERSION);</code>.",
        "Maksimal chegirma foizini chop eting: <code>System.out.println(\"Maksimal ruxsat etilgan chegirma: \" + AppConfig.MAX_DISCOUNT_PCT + \"%\");</code>."
      ],
      "en": [
        "Create class <code>AppConfig</code> with private constructor.",
        "Declare 3 constants: APP_NAME, VERSION, MAX_DISCOUNT_PCT.",
        "In <code>main</code>, access constants directly via class name.",
        "Print app name and version on first line.",
        "Print max discount percentage on second line."
      ],
      "ru": [
        "Создайте класс <code>AppConfig</code> с помощью частного конструктора.",
        "Объявите 3 константы: APP_NAME, VERSION, MAX_DISCOUNT_PCT.",
        "В <code>main</code> доступ к константам осуществляется напрямую через имя класса.",
        "Напечатайте название и версию приложения в первой строке.",
        "Выведите максимальный процент скидки во второй строке."
      ]
    }
  },
  {
    "id": 49,
    "tier": 5,
    "tierName": "5-Bosqich: Statik A'zolar va Kompozitsiya",
    "sector": "41-50",
    "title": {
      "uz": "49. Warehouse Report — Bir Nechta Ob'yektlar Kompozitsiyasi va Jami Qiymat",
      "en": "49. Warehouse Report — Multi-Object Container Composition",
      "ru": "49. Отчет о складе — состав многообъектного контейнера"
    },
    "scenario": {
      "uz": "[Hayotiy Voqealik & Kontekst]\nOmbor hisoboti bir nechta tovar ob'yektlarini o'zida birlashtirib (kompozitsiya), ularning umumiy ombor zaxira qiymatini (narx * qoldiq soni) jamlab hisoblaydi.\n\n[Bajarilishi kerak bo'lgan vazifalar (1 dan 5 gacha)]\n1. Product klassini tuzing: name, price, stock, konstruktor va getterlar.\n2. WarehouseReport klassini tuzing: private Product p1; private Product p2; private Product p3; va 3 ta tovarni qabul qiluvchi konstruktor.\n3. public double calculateTotalInventoryValue() metodini yozing: har bir tovarning getPrice() * getStock() qiymatlarini jamlab qaytarsin.\n4. Main metodida 3 ta tovar yarating (\"Laptop Dell\", \"Monitor 27\", \"Klaviatura RGB\") va WarehouseReport report = new WarehouseReport(prd1, prd2, prd3); ob'yektiga uzating.\n5. Ombordagi jami tovarlar qiymatini hisoblab chop eting: System.out.println(\"Ombordagi barcha tovarlarning jami qiymati: \" + totalVal + \" so'm\");",
      "en": "[Real-World Story & Context]\nA warehouse management report aggregates multiple product items, calculating total inventory valuation across all stock.\n\n[Step-by-Step Implementation Tasks (1 to 5)]\n1. Create class Product with name, price, stock, getters.\n2. Create class WarehouseReport aggregating 3 products.\n3. Implement calculateTotalInventoryValue() summing (price * stock) of each.\n4. In main, instantiate 3 products, pass to report.\n5. Print total inventory value.",
      "ru": "📖 Контекст и описание задачи\nОтчет по управлению складом объединяет несколько позиций продуктов, рассчитывая общую оценку запасов по всем запасам.\n\n📋 Пошаговые задачи (от 1 до 5)\n1. Создайте класс <code>Product</code> с именем, ценой, акциями и геттерами.\n2. Создайте класс <code>WarehouseReport</code>, объединяющий 3 продукта.\n3. Реализуйте суммирование <code>calculateTotalInventoryValue()</code> (цена * запас) каждого.\n4. В <code>main</code> создайте экземпляры 3 продуктов и перейдите к отчету.\n5. Распечатайте общую стоимость запасов."
    },
    "requirements": {
      "classes": [
        "Product",
        "WarehouseReport",
        "Main"
      ],
      "privateFields": [
        "name",
        "price",
        "stock",
        "p1",
        "p2",
        "p3"
      ],
      "methods": [
        "calculateTotalInventoryValue"
      ],
      "constructors": [
        "Product",
        "WarehouseReport"
      ],
      "methodDetails": [
        {
          "name": "generateInvoice",
          "signature": "public String generateInvoice()",
          "params": "Parametr qabul qilmaydi ()",
          "paramsEn": "No parameters ()",
          "returns": "String (firma nomi, buyurtmachi va xizmat narxi ko'rsatilgan hisob-faktura matni)",
          "returnsEn": "String (invoice text containing company and client info)",
          "logic": "Barcha tarkibiy obyektlar ma'lumotlarini birlashtirib faktura hosil qiladi.",
          "logicEn": "Generates formatted invoice string.",
          "example": "invoice.generateInvoice();"
        }
      ]
    },
    "starterCode": "class Product {\n    private String name;\n    private double price;\n    private int stock;\n\n    // Konstruktor va getterlar\n}\n\nclass WarehouseReport {\n    private Product p1;\n    private Product p2;\n    private Product p3;\n\n    // Konstruktor va calculateTotalInventoryValue metodi\n}\n\nclass Main {\n    public static void main(String[] args) {\n        // Tovarlar va hisobot ob'yektini yarating\n        \n    }\n}",
    "solution": "class Product {\n    private String name;\n    private double price;\n    private int stock;\n\n    public Product(String name, double price, int stock) {\n        this.name = name;\n        this.price = (price >= 0) ? price : 0.0;\n        this.stock = (stock >= 0) ? stock : 0;\n    }\n\n    public String getName() { return this.name; }\n    public double getPrice() { return this.price; }\n    public int getStock() { return this.stock; }\n}\n\nclass WarehouseReport {\n    private Product p1;\n    private Product p2;\n    private Product p3;\n\n    public WarehouseReport(Product p1, Product p2, Product p3) {\n        this.p1 = p1;\n        this.p2 = p2;\n        this.p3 = p3;\n    }\n\n    public double calculateTotalInventoryValue() {\n        double v1 = p1.getPrice() * p1.getStock();\n        double v2 = p2.getPrice() * p2.getStock();\n        double v3 = p3.getPrice() * p3.getStock();\n        return v1 + v2 + v3;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product prd1 = new Product(\"Laptop Dell\", 8500000.0, 5);\n        Product prd2 = new Product(\"Monitor 27\", 2200000.0, 10);\n        Product prd3 = new Product(\"Klaviatura RGB\", 350000.0, 20);\n\n        WarehouseReport report = new WarehouseReport(prd1, prd2, prd3);\n        double totalVal = report.calculateTotalInventoryValue();\n\n        System.out.println(\"Ombordagi barcha tovarlarning jami qiymati: \" + totalVal + \" so'm\");\n    }\n}",
    "detailedSolution": {
      "theory": "Konteyner Kompozitsiyasi (Container Composition): Bir nechta ob'yektlarni bitta boshqaruvchi klass ostida jamlash. Bu 4-haftada o'rganiladigan 'ArrayList' va kolleksiyalar arxitekturasining bevosita poydevoridir.",
      "theoryEn": "Container composition orchestrates collections of subordinate entities to synthesize higher-order metrics.",
      "cleanCode": "public double calculateTotalInventoryValue() {\n    return (p1.getPrice() * p1.getStock()) + (p2.getPrice() * p2.getStock()) + (p3.getPrice() * p3.getStock());\n}",
      "breakdown": [
        "Har bir tovar mustaqil maydon sifatida jamlandi.",
        "Ombor bo'yicha jami aktivlar qiymati hisoblandi."
      ],
      "pitfalls": "Stock yoki price manfiy bo'lmasligi tovar konstruktorida kafolatlanishi shart.",
      "cw2Tip": "CW2 loyihangizda ombor zaxirasini tahlil qilish moduli aynan shunday ishlaydi.",
      "theoryRu": "Композиция контейнеров организует коллекции подчиненных сущностей для синтеза показателей более высокого порядка.",
      "pitfallsRu": "Неотрицательный запас или цена должны быть гарантированы в конструкторе продуктов.",
      "breakdownRu": [
        "Каждый товар агрегировался как самостоятельное поле.",
        "Рассчитана общая стоимость активов склада."
      ]
    },
    "sampleData": [
      "1-tovar -> \"Laptop Dell\", narxi: 8500000.0 so'm, soni: 5 dona",
      "2-tovar -> \"Monitor 27\", narxi: 2200000.0 so'm, soni: 10 dona",
      "3-tovar -> \"Klaviatura RGB\", narxi: 350000.0 so'm, soni: 20 dona"
    ],
    "expectedOutput": "Ombordagi barcha tovarlarning jami qiymati: 7.15E7 so'm",
    "story": {
      "uz": "Ombor hisoboti bir nechta tovar ob'yektlarini o'zida birlashtirib (kompozitsiya), ularning umumiy ombor zaxira qiymatini (narx * qoldiq soni) jamlab hisoblaydi.",
      "en": "A warehouse management report aggregates multiple product items, calculating total inventory valuation across all stock.",
      "ru": "Отчет по управлению складом объединяет несколько позиций продуктов, рассчитывая общую оценку запасов по всем запасам."
    },
    "steps": {
      "uz": [
        "<code>Product</code> klassini tuzing: <code>name</code>, <code>price</code>, <code>stock</code>, konstruktor va getterlar.",
        "<code>WarehouseReport</code> klassini tuzing: <code>private Product p1; private Product p2; private Product p3;</code> va 3 ta tovarni qabul qiluvchi konstruktor.",
        "<code>public double calculateTotalInventoryValue()</code> metodini yozing: har bir tovarning <code>getPrice() * getStock()</code> qiymatlarini jamlab qaytarsin.",
        "<code>Main</code> metodida 3 ta tovar yarating (\"Laptop Dell\", \"Monitor 27\", \"Klaviatura RGB\") va <code>WarehouseReport report = new WarehouseReport(prd1, prd2, prd3);</code> ob'yektiga uzating.",
        "Ombordagi jami tovarlar qiymatini hisoblab chop eting: <code>System.out.println(\"Ombordagi barcha tovarlarning jami qiymati: \" + totalVal + \" so'm\");</code>"
      ],
      "en": [
        "Create class <code>Product</code> with name, price, stock, getters.",
        "Create class <code>WarehouseReport</code> aggregating 3 products.",
        "Implement <code>calculateTotalInventoryValue()</code> summing (price * stock) of each.",
        "In <code>main</code>, instantiate 3 products, pass to report.",
        "Print total inventory value."
      ],
      "ru": [
        "Создайте класс <code>Product</code> с именем, ценой, акциями и геттерами.",
        "Создайте класс <code>WarehouseReport</code>, объединяющий 3 продукта.",
        "Реализуйте суммирование <code>calculateTotalInventoryValue()</code> (цена * запас) каждого.",
        "В <code>main</code> создайте экземпляры 3 продуктов и перейдите к отчету.",
        "Распечатайте общую стоимость запасов."
      ]
    }
  },
  {
    "id": 50,
    "tier": 5,
    "tierName": "5-Bosqich: Statik A'zolar va Kompozitsiya",
    "sector": "41-50",
    "title": {
      "uz": "50. CW2 Capstone Prototip — 'Customer', 'Product', 'Order' To'liq Konsol Buyurtma Ilovasi",
      "en": "50. CW2 Capstone Prototype — Full Console Order Application Architecture (Grand Finale)",
      "ru": "50. Прототип CW2 Capstone — полная архитектура приложения консольного заказа (гранд-финал)"
    },
    "scenario": {
      "uz": "[Hayotiy Voqealik & Kontekst]\nOOP Modulining CW2 (50%) Kurs Ishi Capstone prototipi! Mijoz (Customer), Tovar (Product) va Buyurtma (Order) klasslarini statik hisoblagich, inkapsulyatsiya va formatlangan korporativ kvitansiya (Invoice) bilan to'liq konsol ilovasi.\n\n[Bajarilishi kerak bo'lgan vazifalar (1 dan 5 gacha)]\n1. Customer klassini tuzing: name, phone, konstruktor va getterlar.\n2. Product klassini tuzing: title, price, konstruktor va getterlar.\n3. Order klassini tuzing: public static int orderCounter = 0;, orderId, Customer customer, Product product, quantity; konstruktorda orderCounter++ qilib yangi buyurtma raqamini bering.\n4. Order klassida public void printInvoice(double discountPct) metodini yozing: oraliq summa, foizli chegirma va yakuniy summani to'liq korporativ ramkali kvitansiya ko'rinishida chop etsin.\n5. Main metodida Customer client = new Customer(\"Ravshanbek Rahimov\", \"+998901234567\"); va Product macbook = new Product(\"MacBook Air M3\", 14500000.0); yarating, buyurtma ochib 10% talaba chegirmasi bilan kvitansiyani chop eting: order1.printInvoice(10.0);.",
      "en": "[Real-World Story & Context]\nThe Capstone Milestone for OOP Coursework 2 (50%)! An end-to-end console order management invoice system integrating Customer, Product, Order, static counters, and formatted invoices.\n\n[Step-by-Step Implementation Tasks (1 to 5)]\n1. Create class Customer with name, phone, getters.\n2. Create class Product with title, price, getters.\n3. Create class Order with static orderCounter, customer, product, quantity, autoincrementing orderId.\n4. Implement printInvoice(double discountPct) rendering the full corporate invoice frame.\n5. In main, instantiate Customer, Product, Order and invoke order1.printInvoice(10.0);.",
      "ru": "📖 Контекст и описание задачи\nОсновная веха для курсовой работы ООП 2 (50%)! Комплексная консольная система управления счетами для управления заказами, объединяющая Клиента, Продукта, Заказа, статические счетчики и форматированные счета.\n\n📋 Пошаговые задачи (от 1 до 5)\n1. Создайте класс <code>Customer</code> с именем, телефоном и геттерами.\n2. Создайте класс <code>Product</code> с названием, ценой и геттерами.\n3. Создайте класс <code>Order</code> со статическим orderCounter, клиентом, продуктом, количеством и автоматически увеличивающимся идентификатором заказа.\n4. Внедрите <code>printInvoice(double discountPct)</code> для рендеринга полного кадра корпоративного счета.\n5. В <code>main</code> создайте экземпляр Customer, Product, Order и вызовите <code>order1.printInvoice(10.0);</code>."
    },
    "requirements": {
      "classes": [
        "Customer",
        "Product",
        "Order",
        "Main"
      ],
      "privateFields": [
        "name",
        "phone",
        "title",
        "price",
        "orderId",
        "customer",
        "product",
        "quantity"
      ],
      "methods": [
        "printInvoice"
      ],
      "constructors": [
        "Customer",
        "Product",
        "Order"
      ],
      "keywords": [
        "static"
      ],
      "methodDetails": [
        {
          "name": "processPayment",
          "signature": "public boolean processPayment(double amount)",
          "params": "double amount — to'lanishi kerak bo'lgan summa",
          "paramsEn": "double amount — payment amount to process",
          "returns": "boolean (to'lov muvaffaqiyatli o'tsa true, hisobda mablag' yetmasa false)",
          "returnsEn": "boolean (true if payment approved, false if insufficient balance)",
          "logic": "Mijoz hisobini tekshiradi va to'lovni tasdiqlaydi.",
          "logicEn": "Validates customer balance and approves transaction.",
          "example": "system.processPayment(250000.0);"
        }
      ]
    },
    "starterCode": "// 1. Customer klassini yozing (name, phone)\n\n// 2. Product klassini yozing (title, price)\n\n// 3. Order klassini yozing (static counter, Customer, Product, quantity, printInvoice)\n\nclass Main {\n    public static void main(String[] args) {\n        // Customer, Product va Order yarating, 10% chegirma bilan chekni chop eting\n        \n    }\n}",
    "solution": "class Customer {\n    private String name;\n    private String phone;\n\n    public Customer(String name, String phone) {\n        this.name = name;\n        this.phone = phone;\n    }\n\n    public String getName() { return this.name; }\n    public String getPhone() { return this.phone; }\n}\n\nclass Product {\n    private String title;\n    private double price;\n\n    public Product(String title, double price) {\n        this.title = title;\n        this.price = (price >= 0) ? price : 0.0;\n    }\n\n    public String getTitle() { return this.title; }\n    public double getPrice() { return this.price; }\n}\n\nclass Order {\n    public static int orderCounter = 0;\n    private int orderId;\n    private Customer customer;\n    private Product product;\n    private int quantity;\n\n    public Order(Customer customer, Product product, int quantity) {\n        orderCounter++;\n        this.orderId = orderCounter;\n        this.customer = customer;\n        this.product = product;\n        this.quantity = (quantity > 0) ? quantity : 1;\n    }\n\n    public int getOrderId() { return this.orderId; }\n\n    public void printInvoice(double discountPct) {\n        double subtotal = this.product.getPrice() * this.quantity;\n        double discount = subtotal * (discountPct / 100.0);\n        double total = subtotal - discount;\n\n        System.out.println(\"================================================\");\n        System.out.println(\"          WIUT OOP ENTERPRISE INVOICE          \");\n        System.out.println(\"Buyurtma Raqami: #\" + this.orderId);\n        System.out.println(\"Mijoz: \" + this.customer.getName() + \" | Tel: \" + this.customer.getPhone());\n        System.out.println(\"------------------------------------------------\");\n        System.out.println(\"Tovar: \" + this.product.getTitle());\n        System.out.println(\"Dona narxi: \" + this.product.getPrice() + \" so'm x \" + this.quantity + \" dona\");\n        System.out.println(\"Oraliq summa: \" + subtotal + \" so'm\");\n        System.out.println(\"Chegirma (\" + discountPct + \"%): -\" + discount + \" so'm\");\n        System.out.println(\"------------------------------------------------\");\n        System.out.println(\"JAMI TO'LOV: \" + total + \" so'm\");\n        System.out.println(\"================================================\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer client = new Customer(\"Ravshanbek Rahimov\", \"+998901234567\");\n        Product macbook = new Product(\"MacBook Air M3\", 14500000.0);\n\n        Order order1 = new Order(client, macbook, 1);\n        order1.printInvoice(10.0); // 10% talaba chegirmasi\n    }\n}",
    "detailedSolution": {
      "theory": "TABRIKLAYMIZ! Siz 1-modulning barcha 5 ta bosqichini to'liq yakunladingiz:\n1. Klasslar va maydonlar (Heap vs Stack)\n2. Instans metodlar va biznes operatsiyalari\n3. Konstruktorlar va himoyaviy initsializatsiya\n4. Inkapsulyatsiya ('private', getter/setterlar va xavfsizlik)\n5. Statik a'zolar, kompozitsiya va buyurtma arxitekturasi.\nUshbu 50-topshiriq WIUT 5COSC018C modulining 50 foizlik Coursework 2 (Console Order Application) loyihasining yuragini tashkil qiladi!",
      "theoryEn": "CONGRATULATIONS! You have mastered Module 1! This Capstone model represents the production architecture expected in WIUT 5COSC018C Coursework 2.",
      "cleanCode": "Order order1 = new Order(client, macbook, 1);\norder1.printInvoice(10.0);",
      "breakdown": [
        "Customer, Product va Order sinflari to'liq inkapsulyatsiya bilan birlashtirildi.",
        "Statik hisoblagich buyurtmalarni avtomatik raqamladi.",
        "Chek chiqarish to'liq professional darajada amalga oshirildi."
      ],
      "pitfalls": "Chegirma hisoblashda subtotalga salbiy ta'sir ko'rsatmaslik uchun doimo qavslarga e'tibor bering.",
      "cw2Tip": "CW2 baholash mezonida UML diagrammasini tuzishda aynan ushbu 3 ta klass asos qilib olinadi!",
      "theoryRu": "ПОЗДРАВЛЯЕМ! Вы освоили Модуль 1! Эта модель Capstone представляет производственную архитектуру, ожидаемую в курсовой работе 2 WIUT 5COSC018C.",
      "pitfallsRu": "Всегда обращайте внимание на скобки при расчете вычета, чтобы избежать негативного влияния на промежуточный итог.",
      "breakdownRu": [
        "Классы Customer, Product и Order были объединены с помощью полной инкапсуляции.",
        "Статический счетчик автоматически нумеровал заказы.",
        "Оформление заказа прошло на вполне профессиональном уровне."
      ]
    },
    "sampleData": [
      "Mijoz -> ism: \"Ravshanbek Rahimov\", tel: \"+998901234567\"",
      "Mahsulot -> nom: \"MacBook Air M3\", narx: 14500000.0 so'm",
      "Buyurtma -> soni: 1 dona, talaba chegirmasi: 10.0%"
    ],
    "expectedOutput": "================================================\n          WIUT OOP ENTERPRISE INVOICE          \nBuyurtma Raqami: #1\nMijoz: Ravshanbek Rahimov | Tel: +998901234567\n------------------------------------------------\nTovar: MacBook Air M3\nDona narxi: 1.45E7 so'm x 1 dona\nOraliq summa: 1.45E7 so'm\nChegirma (10.0%): -1450000.0 so'm\n------------------------------------------------\nJAMI TO'LOV: 1.305E7 so'm\n================================================",
    "story": {
      "uz": "OOP Modulining CW2 (50%) Kurs Ishi Capstone prototipi! Mijoz (Customer), Tovar (Product) va Buyurtma (Order) klasslarini statik hisoblagich, inkapsulyatsiya va formatlangan korporativ kvitansiya (Invoice) bilan to'liq konsol ilovasi.",
      "en": "The Capstone Milestone for OOP Coursework 2 (50%)! An end-to-end console order management invoice system integrating Customer, Product, Order, static counters, and formatted invoices.",
      "ru": "Основная веха для курсовой работы ООП 2 (50%)! Комплексная консольная система управления счетами для управления заказами, объединяющая Клиента, Продукта, Заказа, статические счетчики и форматированные счета."
    },
    "steps": {
      "uz": [
        "<code>Customer</code> klassini tuzing: <code>name</code>, <code>phone</code>, konstruktor va getterlar.",
        "<code>Product</code> klassini tuzing: <code>title</code>, <code>price</code>, konstruktor va getterlar.",
        "<code>Order</code> klassini tuzing: <code>public static int orderCounter = 0;</code>, <code>orderId</code>, <code>Customer customer</code>, <code>Product product</code>, <code>quantity</code>; konstruktorda <code>orderCounter++</code> qilib yangi buyurtma raqamini bering.",
        "<code>Order</code> klassida <code>public void printInvoice(double discountPct)</code> metodini yozing: oraliq summa, foizli chegirma va yakuniy summani to'liq korporativ ramkali kvitansiya ko'rinishida chop etsin.",
        "<code>Main</code> metodida <code>Customer client = new Customer(\"Ravshanbek Rahimov\", \"+998901234567\");</code> va <code>Product macbook = new Product(\"MacBook Air M3\", 14500000.0);</code> yarating, buyurtma ochib 10% talaba chegirmasi bilan kvitansiyani chop eting: <code>order1.printInvoice(10.0);</code>."
      ],
      "en": [
        "Create class <code>Customer</code> with name, phone, getters.",
        "Create class <code>Product</code> with title, price, getters.",
        "Create class <code>Order</code> with static orderCounter, customer, product, quantity, autoincrementing orderId.",
        "Implement <code>printInvoice(double discountPct)</code> rendering the full corporate invoice frame.",
        "In <code>main</code>, instantiate Customer, Product, Order and invoke <code>order1.printInvoice(10.0);</code>."
      ],
      "ru": [
        "Создайте класс <code>Customer</code> с именем, телефоном и геттерами.",
        "Создайте класс <code>Product</code> с названием, ценой и геттерами.",
        "Создайте класс <code>Order</code> со статическим orderCounter, клиентом, продуктом, количеством и автоматически увеличивающимся идентификатором заказа.",
        "Внедрите <code>printInvoice(double discountPct)</code> для рендеринга полного кадра корпоративного счета.",
        "В <code>main</code> создайте экземпляр Customer, Product, Order и вызовите <code>order1.printInvoice(10.0);</code>."
      ]
    }
  }
];
