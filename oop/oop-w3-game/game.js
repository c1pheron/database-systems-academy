// ============================================================================
// OOP ACADEMY — 3-Modul GAME LOGIC: MEROSXO'RLIK, SUPER(), @OVERRIDE & KOMPOZITSIYA
// Professor Ada's Interactive Java IDE Simulator • WIUT 5COSC018C
// ============================================================================

(function () {
  "use strict";

  const STORAGE_KEY = "WIUT_OOP_W3_PROGRESS";
  let currentLang = "uz";
  let currentQIndex = 0;
  let solvedQuestions = new Set();

  const CHALLENGES = [
    {
      id: 1,
      title: {
        uz: "1. Merosxo'rlik Asosi ('extends' Kalit So'zi)",
        en: "1. Inheritance Basics with 'extends'"
      },
      scenario: {
        uz: "Kompaniyada oddiy xodim (`Employee`) va dasturchi (`Developer`) bor. Har safar ism va maoshni noldan yozmaslik uchun `Developer extends Employee` qilib vorislik yarating.",
        en: "Reuse existing class logic by making `Developer extends Employee`."
      },
      requirements: {
        classes: ["Employee", "Developer"],
        keywords: ["extends"]
      },
      starterCode: `class Employee {
    String name;
    double salary;
}

// Developer klassini Employee dan voris qiling
class Developer extends Employee {
    String programmingLanguage;
}

class Main {
    public static void main(String[] args) {
        Developer dev = new Developer();
        dev.name = "Sardor";
        dev.salary = 2000.0;
        dev.programmingLanguage = "Java";
        System.out.println(dev.name + " (" + dev.programmingLanguage + "): $" + dev.salary);
    }
}`,
      solution: `class Employee {
    String name;
    double salary;
}

class Developer extends Employee {
    String programmingLanguage;
}

class Main {
    public static void main(String[] args) {
        Developer dev = new Developer();
        dev.name = "Sardor";
        dev.salary = 2000.0;
        dev.programmingLanguage = "Java";
        System.out.println(dev.name + " (" + dev.programmingLanguage + "): $" + dev.salary);
    }
}`,
      detailedSolution: {
        theory: "Merosxo'rlik (Inheritance) — mavjud klassning barcha ochiq maydon va metodlarini yangi klassga o'tkazishdir ('Is-A' munosabati). Kod takrorlanishining (DRY) oldini oladi.",
        theoryEn: "Inheritance establishes an 'Is-A' subtype hierarchy, maximizing code reuse across related domain entities.",
        cleanCode: `class Employee {
    String name;
    double salary;
}

class Developer extends Employee {
    String programmingLanguage;
}

class Main {
    public static void main(String[] args) {
        Developer dev = new Developer();
        dev.name = "Sardor";
        dev.salary = 2000.0;
        dev.programmingLanguage = "Java";
        System.out.println(dev.name + " (" + dev.programmingLanguage + "): $" + dev.salary);
    }
}`,
        breakdown: [
          "<code>class Developer extends Employee</code>: Developer Employee ning barcha xususiyatlariga ega bo'ladi.",
          "Developer faqat o'zigagina xos bo'lgan `programmingLanguage` maydonini qo'shadi."
        ],
        pitfalls: "Java'da bitta klass bir vaqtning o'zida ikkita klassdan `extends` qila olmaydi (Multiple inheritance taqiqlangan).",
        cw2Viva: "Westminster CW2 baholash mezonida 'Inheritance' uchun 6 ball ajratilgan. Vorislik asosli va 'Is-A' mantiqiga ega bo'lishi shart."
      }
    },
    {
      id: 2,
      title: {
        uz: "2. Ota Konstruktorini Chaqirish ('super()')",
        en: "2. Superclass Constructor Invocation"
      },
      scenario: {
        uz: "Bola klass konstruktori ishga tushishidan oldin ota klass konstruktori ishga tushishi shart! `Developer` konstruktorida birinchi qatorda `super(name, salary);` chaqiring.",
        en: "Invoke parent constructor on the first line using `super(name, salary)`."
      },
      requirements: {
        classes: ["Employee", "Developer"],
        keywords: ["super", "extends"],
        constructors: ["Developer"]
      },
      starterCode: `class Employee {
    String name;
    double salary;

    public Employee(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }
}

class Developer extends Employee {
    String techStack;

    public Developer(String name, double salary, String techStack) {
        // super orqali ota konstruktorni chaqiring
        super(name, salary);
        this.techStack = techStack;
    }
}

class Main {
    public static void main(String[] args) {
        Developer d = new Developer("Malika", 2500.0, "Spring Boot");
        System.out.println(d.name + " -> " + d.techStack);
    }
}`,
      solution: `class Employee {
    String name;
    double salary;

    public Employee(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }
}

class Developer extends Employee {
    String techStack;

    public Developer(String name, double salary, String techStack) {
        super(name, salary);
        this.techStack = techStack;
    }
}

class Main {
    public static void main(String[] args) {
        Developer d = new Developer("Malika", 2500.0, "Spring Boot");
        System.out.println(d.name + " -> " + d.techStack);
    }
}`,
      detailedSolution: {
        theory: "Voris klass obyektini yaratishda ota klass holati birinchi navbatda to'g'ri shakllanishi kerak. Shu sababli `super(...)` chaqirig'i konstruktorning birinchi qatorida turishi shart.",
        theoryEn: "`super(...)` chains constructor execution to the immediate superclass, satisfying initialization invariants before subclass field assignment.",
        cleanCode: `class Employee {
    String name;
    double salary;
    public Employee(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }
}

class Developer extends Employee {
    String techStack;
    public Developer(String name, double salary, String techStack) {
        super(name, salary);
        this.techStack = techStack;
    }
}`,
        breakdown: [
          "<code>super(name, salary);</code>: name va salary qiymatlari ota klass (Employee) konstruktoriga uzatiladi.",
          "<code>this.techStack = techStack;</code>: Developer klassining shaxsiy maydoni to'ldiriladi."
        ],
        pitfalls: "`super(...)` ni 2-qatorda yoki `this.techStack` dan keyin chaqirish kompilyator tomonidan qat'iy taqiqlanadi.",
        cw2Viva: "Viva savoli: 'Agar super() yozilmasa nima bo'ladi?' Agar ota klassda default (parametrsiz) konstruktor bo'lsa avtomatik chaqiriladi, bo'lmasa kompilyatsiya xatosi chiqadi."
      }
    },
    {
      id: 3,
      title: {
        uz: "3. Metodni Qayta Yozish (@Override)",
        en: "3. Method Overriding with @Override"
      },
      scenario: {
        uz: "Menejer (`Manager`) oddiy xodimga nisbatan ko'proq bonus oladi. `Employee` dagi `getBonus()` metodini `Manager` klassida qaytadan yozing (@Override) va maoshning 20% bonusini hisoblang.",
        en: "Override `getBonus()` in `Manager` to return 20% of salary."
      },
      requirements: {
        classes: ["Employee", "Manager"],
        methods: ["getBonus"],
        keywords: ["@Override"]
      },
      starterCode: `class Employee {
    double salary;

    public Employee(double salary) {
        this.salary = salary;
    }

    public double getBonus() {
        return this.salary * 0.05; // 5% oddiy bonus
    }
}

class Manager extends Employee {
    public Manager(double salary) {
        super(salary);
    }

    // @Override orqali 20% bonus hisoblang
    @Override
    public double getBonus() {
        return this.salary * 0.20;
    }
}

class Main {
    public static void main(String[] args) {
        Employee e = new Employee(1000.0);
        Manager m = new Manager(1000.0);
        System.out.println("Xodim bonusi: $" + e.getBonus());
        System.out.println("Menejer bonusi: $" + m.getBonus());
    }
}`,
      solution: `class Employee {
    double salary;

    public Employee(double salary) {
        this.salary = salary;
    }

    public double getBonus() {
        return this.salary * 0.05;
    }
}

class Manager extends Employee {
    public Manager(double salary) {
        super(salary);
    }

    @Override
    public double getBonus() {
        return this.salary * 0.20;
    }
}

class Main {
    public static void main(String[] args) {
        Employee e = new Employee(1000.0);
        Manager m = new Manager(1000.0);
        System.out.println("Xodim bonusi: $" + e.getBonus());
        System.out.println("Menejer bonusi: $" + m.getBonus());
    }
}`,
      detailedSolution: {
        theory: "Method Overriding — bola klass ota klassdagi mavjud metod xatti-harakatini o'ziga xos qilib o'zgartirishidir. `@Override` annotatsiyasi kompilyatorga metod imzosi to'g'ri ekanini tekshirtiradi.",
        theoryEn: "Method overriding empowers polymorphic specialization. `@Override` ensures compile-time signature alignment.",
        cleanCode: `class Manager extends Employee {
    public Manager(double salary) {
        super(salary);
    }

    @Override
    public double getBonus() {
        return this.salary * 0.20;
    }
}`,
        breakdown: [
          "<code>@Override</code>: Java kompilyatoriga bu metod ota klassdagi metodni qayta yozayotganini bildiradi.",
          "Metod nomi, qaytaruvchi turi (`double`) va parametrlari ota metod bilan 100% bir xil."
        ],
        pitfalls: "Parametrlarni o'zgartirib qo'yish (masalan int kiritish) — bu overriding emas, overloading bo'lib qoladi.",
        cw2Viva: "Viva savoli: 'Overriding paytida metod visibility sini qisqartirsa bo'ladimi?' Yo'q! Ota klassda public bo'lgan metodni bola klassda protected yoki private qilib bo'lmaydi."
      }
    },
    {
      id: 4,
      title: {
        uz: "4. Ota Metodni Kengaytirish ('super.method()')",
        en: "4. Enhancing Superclass Methods"
      },
      scenario: {
        uz: "Ota metodning ishini to'liq yo'qotmasdan, unga qo'shimcha qator qo'shish kerak. `display()` metodida oldin `super.display()` ni chaqiring, so'ngra yangi xabarni qo'shing.",
        en: "Extend parent behavior by invoking `super.display()` within the overridden method."
      },
      requirements: {
        classes: ["Employee", "Developer"],
        keywords: ["super", "@Override"]
      },
      starterCode: `class Employee {
    String name;
    public Employee(String name) { this.name = name; }
    public void display() {
        System.out.print("Xodim: " + name);
    }
}

class Developer extends Employee {
    String role;
    public Developer(String name, String role) {
        super(name);
        this.role = role;
    }

    @Override
    public void display() {
        // Oldin ota metodni chaqiring, keyin rolni qo'shing
        super.display();
        System.out.println(" | Lavozim: " + role);
    }
}

class Main {
    public static void main(String[] args) {
        Developer d = new Developer("Jasur", "Senior Backend");
        d.display();
    }
}`,
      solution: `class Employee {
    String name;
    public Employee(String name) { this.name = name; }
    public void display() {
        System.out.print("Xodim: " + name);
    }
}

class Developer extends Employee {
    String role;
    public Developer(String name, String role) {
        super(name);
        this.role = role;
    }

    @Override
    public void display() {
        super.display();
        System.out.println(" | Lavozim: " + role);
    }
}

class Main {
    public static void main(String[] args) {
        Developer d = new Developer("Jasur", "Senior Backend");
        d.display();
    }
}`,
      detailedSolution: {
        theory: "Ko'pincha ota klassdagi metod foydali umumiy logikaga ega bo'ladi. Uni noldan qayta yozish o'rniga `super.metodNomi()` orqali chaqirib, ustiga yangi imkoniyatlar qo'shiladi.",
        theoryEn: "Calling `super.method()` delegates foundational logic to the parent, augmenting behavior cleanly without code duplication.",
        cleanCode: `class Developer extends Employee {
    @Override
    public void display() {
        super.display();
        System.out.println(" | Lavozim: " + role);
    }
}`,
        breakdown: [
          "<code>super.display();</code>: Employee klassidagi nom chiqarish logikasini ishlatadi.",
          "So'ngra qo'shimcha lavozim ma'lumoti chop etiladi."
        ],
        pitfalls: "O'zining ichida `super.display()` o'rniga `display()` deb yozish — cheksiz rekursiyaga va `StackOverflowError` ga olib keladi.",
        cw2Viva: "Decorator va Subclassing modellarida `super` orqali zanjir hosil qilish CW2 me'moriy talabidir."
      }
    },
    {
      id: 5,
      title: {
        uz: "5. 'protected' Modifikatori va Vorislik",
        en: "5. 'protected' Access Modifier"
      },
      scenario: {
        uz: "`private` maydonlarga hatto bola klass ham kira olmaydi. Agar maydon faqat voris klasslarga ochiq bo'lishi kerak bo'lsa, `protected` modifikatoridan foydalaning.",
        en: "Grant access exclusively to subclasses using `protected` modifier."
      },
      requirements: {
        classes: ["Item", "Coffee"],
        keywords: ["protected", "extends"]
      },
      starterCode: `class Item {
    // protected maydon: basePrice
    protected double basePrice;

    public Item(double basePrice) {
        this.basePrice = basePrice;
    }
}

class Coffee extends Item {
    public Coffee(double basePrice) {
        super(basePrice);
    }

    public double getDiscountedPrice() {
        // basePrice ga to'g'ridan-to'g'ri kira olamiz
        return this.basePrice * 0.90;
    }
}

class Main {
    public static void main(String[] args) {
        Coffee c = new Coffee(4.0);
        System.out.println("Chegirmali narx: $" + c.getDiscountedPrice());
    }
}`,
      solution: `class Item {
    protected double basePrice;

    public Item(double basePrice) {
        this.basePrice = basePrice;
    }
}

class Coffee extends Item {
    public Coffee(double basePrice) {
        super(basePrice);
    }

    public double getDiscountedPrice() {
        return this.basePrice * 0.90;
    }
}

class Main {
    public static void main(String[] args) {
        Coffee c = new Coffee(4.0);
        System.out.println("Chegirmali narx: $" + c.getDiscountedPrice());
    }
}`,
      detailedSolution: {
        theory: "Java'da 4 ta ko'rinish doirasi bor: `private` (faqat o'z sinfida), default (faqat o'z paketida), `protected` (o'z paketida va barcha voris sinflarda), `public` (butun dunyoda).",
        theoryEn: "`protected` visibility grants access within the same package and to all derived subclasses across packages.",
        cleanCode: `class Item {
    protected double basePrice;
    public Item(double basePrice) { this.basePrice = basePrice; }
}

class Coffee extends Item {
    public Coffee(double basePrice) { super(basePrice); }
    public double getDiscountedPrice() { return this.basePrice * 0.90; }
}`,
        breakdown: [
          "<code>protected double basePrice;</code>: Coffee klassi ota maydonga to'g'ridan-to'g'ri erisha oladi.",
          "UML diagrammada `#` belgisi bilan belgilanadi: `#basePrice: double`."
        ],
        pitfalls: "Maydonlarni haddan tashqari ko'p protected qilish inkapsulyatsiyani zaiflashtirishi mumkin.",
        cw2Viva: "UML klass diagrammasida: `-` private, `+` public, `#` protected belgisini ifodalaydi. Viva'da bu belgilarning farqi so'raladi."
      }
    },
    {
      id: 6,
      title: {
        uz: "6. Kompozitsiya ('Has-A') vs Merosxo'rlik ('Is-A')",
        en: "6. Composition ('Has-A') over Inheritance"
      },
      scenario: {
        uz: "Oltin me'moriy qoida: 'Favor Composition over Inheritance'. Avtomobil dvigatel emas, avtomobilning dvigateli bor! `Car` klassi ichida `Engine` obyektini kompozitsiya qilib saqlang.",
        en: "Implement composition: `Car` has an `Engine` instance field."
      },
      requirements: {
        classes: ["Engine", "Car"],
        methods: ["startCar"]
      },
      starterCode: `class Engine {
    public void start() {
        System.out.println("🚗 Dvigatel o't oldi (V8 Turbo)!");
    }
}

class Car {
    // Kompozitsiya: Car 'Has-A' Engine
    private Engine engine;

    public Car(Engine engine) {
        this.engine = engine;
    }

    public void startCar() {
        engine.start();
    }
}

class Main {
    public static void main(String[] args) {
        Engine v8 = new Engine();
        Car myCar = new Car(v8);
        myCar.startCar();
    }
}`,
      solution: `class Engine {
    public void start() {
        System.out.println("🚗 Dvigatel o't oldi (V8 Turbo)!");
    }
}

class Car {
    private Engine engine;

    public Car(Engine engine) {
        this.engine = engine;
    }

    public void startCar() {
        engine.start();
    }
}

class Main {
    public static void main(String[] args) {
        Engine v8 = new Engine();
        Car myCar = new Car(v8);
        myCar.startCar();
    }
}`,
      detailedSolution: {
        theory: "Kompozitsiya — bir obyekt boshqa obyektni o'z maydoni sifatida saqlashi ('Has-A'). Bu merosxo'rlikdan ko'ra ancha erkin, xavfsiz va moslashuvchan arxitektura beradi (Dependency Injection asosi).",
        theoryEn: "Composition yields loose coupling and high cohesion by assembling components rather than forcing rigid class hierarchies.",
        cleanCode: `class Car {
    private Engine engine;
    public Car(Engine engine) { this.engine = engine; }
    public void startCar() { engine.start(); }
}`,
        breakdown: [
          "<code>private Engine engine;</code>: Car klassi Engine ga havola saqlaydi.",
          "Dvigatelni istalgan vaqtda (masalan ElectricEngine ga) o'zgartirish oson."
        ],
        pitfalls: "Car extends Engine deb yozish — mantiqiy qo'pol xato (Mashina dvigatelning turi emas!).",
        cw2Viva: "GoF Dizayn Patternlarining (Strategy, Decorator, Adapter) deyarli barchasi kompozitsiyaga tayanadi."
      }
    },
    {
      id: 7,
      title: {
        uz: "7. Qayta Yozishni Taqiqlovchi 'final' Metod",
        en: "7. Preventing Overrides with 'final' Methods"
      },
      scenario: {
        uz: "Xavfsizlik yuzasidan pul o'tkazish algoritmini bola klasslar o'zgartira olmasligi kerak. `transferFunds()` metodini `final` qiling.",
        en: "Prevent subclasses from altering critical methods by using `final void transfer()`."
      },
      requirements: {
        classes: ["PaymentProcessor"],
        keywords: ["final"]
      },
      starterCode: `class PaymentProcessor {
    // final metod: voris klasslar buni o'zgartira olmaydi
    public final void transferFunds(double amount) {
        System.out.println("Xavfsiz bank o'tkazmasi: $" + amount);
    }
}

class Main {
    public static void main(String[] args) {
        PaymentProcessor p = new PaymentProcessor();
        p.transferFunds(500.0);
    }
}`,
      solution: `class PaymentProcessor {
    public final void transferFunds(double amount) {
        System.out.println("Xavfsiz bank o'tkazmasi: $" + amount);
    }
}

class Main {
    public static void main(String[] args) {
        PaymentProcessor p = new PaymentProcessor();
        p.transferFunds(500.0);
    }
}`,
      detailedSolution: {
        theory: "Metod oldiga `final` qo'yilsa, hech bir voris klass uni `@Override` qila olmaydi. Bu xavfsizlik (Security) va Template Method patternida muhim o'rin tutadi.",
        theoryEn: "A `final` method locks implementation details, prohibiting sub-class tampering and guaranteeing immutable business algorithms.",
        cleanCode: `class PaymentProcessor {
    public final void transferFunds(double amount) {
        System.out.println("Xavfsiz bank o'tkazmasi: $" + amount);
    }
}`,
        breakdown: [
          "<code>public final void transferFunds(...)</code>: Qat'iy o'zgarmas metod.",
          "Agar voris klass buni qayta yozishga urinsa, kompilyator xato beradi."
        ],
        pitfalls: "Barcha metodlarni asossiz final qilib qo'yish polimorfizmni cheklab qo'yishi mumkin.",
        cw2Viva: "Template Method patternida skelet algoritm 'final' qilinadi, faqat alohida qadamlar overridable qilinadi."
      }
    },
    {
      id: 8,
      title: {
        uz: "8. 'instanceof' va Xavfsiz Type Casting",
        en: "8. 'instanceof' Operator & Safe Type Casting"
      },
      scenario: {
        uz: "Polimorfik obyekt bilan ishlaganda uning aniq turini bilish uchun `instanceof` ishlatiladi. Agar `emp instanceof Developer` bo'lsa, xavfsiz cast qilib uning dasturlash tilini chiqaring.",
        en: "Verify dynamic types safely using `instanceof` before downcasting."
      },
      requirements: {
        classes: ["Employee", "Developer"],
        keywords: ["instanceof"]
      },
      starterCode: `class Employee {
    String name = "Xodim";
}

class Developer extends Employee {
    String lang = "Java 21";
}

class Main {
    public static void checkEmployee(Employee e) {
        // instanceof tekshiruvini qo'shing
        if (e instanceof Developer) {
            Developer d = (Developer) e;
            System.out.println("Dasturchi tili: " + d.lang);
        } else {
            System.out.println("Oddiy xodim: " + e.name);
        }
    }

    public static void main(String[] args) {
        checkEmployee(new Developer());
        checkEmployee(new Employee());
    }
}`,
      solution: `class Employee {
    String name = "Xodim";
}

class Developer extends Employee {
    String lang = "Java 21";
}

class Main {
    public static void checkEmployee(Employee e) {
        if (e instanceof Developer) {
            Developer d = (Developer) e;
            System.out.println("Dasturchi tili: " + d.lang);
        } else {
            System.out.println("Oddiy xodim: " + e.name);
        }
    }

    public static void main(String[] args) {
        checkEmployee(new Developer());
        checkEmployee(new Employee());
    }
}`,
      detailedSolution: {
        theory: "Downcasting (ota turdan bola turga o'tish) xavfli operatsiyadir. Agar obyekt aslida o'sha turda bo'lmasa, `ClassCastException` yuz beradi. `instanceof` bu xatoni oldini oladi.",
        theoryEn: "`instanceof` performs runtime type introspection, guarding against fatal `ClassCastException` hazards during downcasting.",
        cleanCode: `if (e instanceof Developer) {
    Developer d = (Developer) e;
    System.out.println("Dasturchi: " + d.lang);
}`,
        breakdown: [
          "<code>e instanceof Developer</code>: e haqiqatan ham Developer ekanligini tekshiradi.",
          "Java 16+ da Pattern Matching bilan yanada qisqa: <code>if (e instanceof Developer d)</code>."
        ],
        pitfalls: "Tekshiruvsiz `(Developer) e` qilish dasturni kutilmaganda to'xtatib qo'yishi mumkin.",
        cw2Viva: "Konsol dasturida savatdagi tovar turini tekshirishda `instanceof` ishlatiladi."
      }
    },
    {
      id: 9,
      title: {
        uz: "9. Getters/Setters bilan Merosxo'rlik",
        en: "9. Inheritance with Encapsulated Fields"
      },
      scenario: {
        uz: "Ota klass maydonlari `private` bo'lsa, bola klass ularga ota klassning getteri va setteri orqali kirishi shart. `Vehicle` va `Car` klasslarini bog'lang.",
        en: "Access parent private fields via getter and setter methods inside child classes."
      },
      requirements: {
        classes: ["Vehicle", "Car"],
        methods: ["getBrand"],
        privateFields: ["brand"]
      },
      starterCode: `class Vehicle {
    private String brand;
    public Vehicle(String brand) { this.brand = brand; }
    public String getBrand() { return brand; }
}

class Car extends Vehicle {
    private int doors;
    public Car(String brand, int doors) {
        super(brand);
        this.doors = doors;
    }
    public void printDetails() {
        System.out.println("Brend: " + getBrand() + " | Eshiklar: " + doors);
    }
}

class Main {
    public static void main(String[] args) {
        Car c = new Car("BYD", 4);
        c.printDetails();
    }
}`,
      solution: `class Vehicle {
    private String brand;
    public Vehicle(String brand) { this.brand = brand; }
    public String getBrand() { return brand; }
}

class Car extends Vehicle {
    private int doors;
    public Car(String brand, int doors) {
        super(brand);
        this.doors = doors;
    }
    public void printDetails() {
        System.out.println("Brend: " + getBrand() + " | Eshiklar: " + doors);
    }
}

class Main {
    public static void main(String[] args) {
        Car c = new Car("BYD", 4);
        c.printDetails();
    }
}`,
      detailedSolution: {
        theory: "Merosxo'rlik inkapsulyatsiyani buzmasligi kerak. Ota maydonlar `private` bo'lib qoladi, voris sinflar esa `getBrand()` orqali o'qiydi.",
        theoryEn: "Encapsulation remains inviolable across hierarchies; child classes consume superclass state strictly via public accessors.",
        cleanCode: `class Car extends Vehicle {
    public void printDetails() {
        System.out.println("Brend: " + getBrand() + " | Eshiklar: " + doors);
    }
}`,
        breakdown: [
          "<code>getBrand()</code> orqali ota klassning private maydoni xavfsiz o'qiladi.",
          "Ikki ustun (Inkapsulyatsiya + Merosxo'rlik) birgalikda to'liq ishlaydi."
        ],
        pitfalls: "Bola klassda ota private maydonga `this.brand` deb to'g'ridan-to'g'ri murojaat qilish (kompilyator ruxsat bermaydi).",
        cw2Viva: "Viva imtihonida: 'Voris sinf ota sinfning private maydoniga qanday erishadi?' Javob: Ota sinfdagi public/protected getter orqali!"
      }
    },
    {
      id: 10,
      title: {
        uz: "10. CW2 Kurs Ishi Modeli: Drink extends MenuItem",
        en: "10. CW2 MenuItem Hierarchy Model"
      },
      scenario: {
        uz: "Westminster CW2 (50%) talabi: `MenuItem` umumiy ota klassidan `Drink` klassi voris olsin (`extends MenuItem`) va narxni hisoblash metodini kengaytirsin. Kurs ishingizning vorislik mezonini to'liq bajaring!",
        en: "Implement CW2 Assessment 2 core hierarchy: `Drink extends MenuItem` with polymorphic price calculation."
      },
      requirements: {
        classes: ["MenuItem", "Drink"],
        methods: ["calculatePrice"],
        keywords: ["extends", "@Override"]
      },
      starterCode: `class MenuItem {
    protected String name;
    protected double basePrice;

    public MenuItem(String name, double basePrice) {
        this.name = name;
        this.basePrice = basePrice;
    }

    public double calculatePrice() {
        return basePrice;
    }
}

class Drink extends MenuItem {
    private boolean isLarge;

    public Drink(String name, double basePrice, boolean isLarge) {
        super(name, basePrice);
        this.isLarge = isLarge;
    }

    @Override
    public double calculatePrice() {
        return isLarge ? (basePrice + 1.5) : basePrice;
    }
}

class Main {
    public static void main(String[] args) {
        Drink d1 = new Drink("Latte", 4.0, false);
        Drink d2 = new Drink("Cappuccino", 4.0, true);
        System.out.println("Oddiy: $" + d1.calculatePrice());
        System.out.println("Katta: $" + d2.calculatePrice());
    }
}`,
      solution: `class MenuItem {
    protected String name;
    protected double basePrice;

    public MenuItem(String name, double basePrice) {
        this.name = name;
        this.basePrice = basePrice;
    }

    public double calculatePrice() {
        return basePrice;
    }
}

class Drink extends MenuItem {
    private boolean isLarge;

    public Drink(String name, double basePrice, boolean isLarge) {
        super(name, basePrice);
        this.isLarge = isLarge;
    }

    @Override
    public double calculatePrice() {
        return isLarge ? (basePrice + 1.5) : basePrice;
    }
}

class Main {
    public static void main(String[] args) {
        Drink d1 = new Drink("Latte", 4.0, false);
        Drink d2 = new Drink("Cappuccino", 4.0, true);
        System.out.println("Oddiy: $" + d1.calculatePrice());
        System.out.println("Katta: $" + d2.calculatePrice());
    }
}`,
      detailedSolution: {
        theory: "Tabriklaymiz! Siz 3-Modulni to'liq tamomladingiz. Westminster CW2 baholash jadvalidagi 'Inheritance' (6 ball) va 'Encapsulation' (6 ball) talablari birlashtirildi.",
        theoryEn: "Congratulations! You have mastered Inheritance hierarchies, method overriding, and delivered the core CW2 MenuItem domain model.",
        cleanCode: `class Drink extends MenuItem {
    private boolean isLarge;
    public Drink(String name, double basePrice, boolean isLarge) {
        super(name, basePrice);
        this.isLarge = isLarge;
    }
    @Override
    public double calculatePrice() {
        return isLarge ? (basePrice + 1.5) : basePrice;
    }
}`,
        breakdown: [
          "<code>MenuItem</code>: Barcha mahsulotlar (ichimliklar, shirinliklar) uchun ota model.",
          "<code>Drink</code>: Katta o'lcham uchun +$1.50 qo'shuvchi polimorfik narx kalkulyatori."
        ],
        pitfalls: "4-modulda bu model Abstrakt klass va Polimorfik kolleksiyalar bilan yanada kuchaytiriladi.",
        cw2Viva: "Kurs ishi hisobotingizda ushbu sinflar o'rtasidagi merosxo'rlik chizig'i (oq uchburchak strelka) UML diagrammada ko'rsatilishi shart."
      }
    }
  ];

  function loadSolved() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) solvedQuestions = new Set(parsed);
        else if (parsed && Array.isArray(parsed.solvedList)) solvedQuestions = new Set(parsed.solvedList);
      }
    } catch (e) {
      console.warn("Could not load solved list:", e);
    }
  }

  function saveSolved() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        solvedCount: solvedQuestions.size,
        solvedList: Array.from(solvedQuestions)
      }));
    } catch (e) {
      console.warn("Could not save solved list:", e);
    }
  }

  function renderHUD() {
    const qStrip = document.getElementById("qStrip");
    if (!qStrip) return;
    qStrip.innerHTML = "";

    CHALLENGES.forEach((ch, idx) => {
      const dot = document.createElement("div");
      dot.className = `q-dot ${idx === currentQIndex ? "active" : ""} ${solvedQuestions.has(ch.id) ? "solved" : ""}`;
      dot.textContent = ch.id;
      dot.title = ch.title[currentLang];
      dot.addEventListener("click", () => switchChallenge(idx));
      qStrip.appendChild(dot);
    });

    const elPoints = document.getElementById("hudRatingPoints");
    if (elPoints) elPoints.textContent = `${solvedQuestions.size * 50} Ball`;
  }

  function renderChallenge() {
    const ch = CHALLENGES[currentQIndex];
    if (!ch) return;

    const elBadge = document.getElementById("problemBadge");
    const elTitle = document.getElementById("problemTitle");
    const elScenario = document.getElementById("problemScenario");
    const elSolutionCard = document.getElementById("solutionContentCard");
    const elToggleHint = document.getElementById("solutionToggleHint");

    if (elBadge) elBadge.textContent = `3-Modul • ${ch.id}-Topshiriq`;
    if (elTitle) elTitle.textContent = ch.title[currentLang];
    if (elScenario) elScenario.textContent = ch.scenario[currentLang];

    if (window.SolutionRenderer) {
      window.SolutionRenderer.render(ch, "solutionContentCard", currentLang);
    }
    if (elSolutionCard) elSolutionCard.style.display = "none";
    if (elToggleHint) elToggleHint.textContent = "[Ko'rish ▾]";

    const reqList = document.getElementById("taskReqList");
    if (reqList) {
      let reqHtml = "";
      if (ch.requirements.classes) reqHtml += `<li><strong>Klasslar:</strong> <code>${ch.requirements.classes.join(", ")}</code> sinfi e'lon qilinsin.</li>`;
      if (ch.requirements.keywords) reqHtml += `<li><strong>Kalit so'zlar:</strong> <code>${ch.requirements.keywords.join(", ")}</code> qo'llanilishi shart.</li>`;
      if (ch.requirements.methods && ch.requirements.methods.length > 0) reqHtml += `<li><strong>Metodlar:</strong> <code>${ch.requirements.methods.join("(), ")}()</code> metodi yozilsin.</li>`;
      if (ch.requirements.constructors) reqHtml += `<li><strong>Konstruktor:</strong> <code>${ch.requirements.constructors.join(", ")}</code> konstruktori bo'lsin.</li>`;
      reqHtml += `<li>Sintaksis xatolarisiz va clean code talablariga rioya qiling.</li>`;
      reqList.innerHTML = reqHtml;
    }

    const codeArea = document.getElementById("codeEditor");
    if (codeArea) codeArea.value = ch.starterCode;

    const consoleOut = document.getElementById("consoleOutput");
    if (consoleOut) {
      consoleOut.className = "console-output";
      consoleOut.textContent = "Java konsoli tayyor. '▶ Kodni Tekshirish' yoki '☕ Ishga tushirish (OpenJDK 21)' tugmasini bosing.";
    }

    updateUML();
  }

  function updateUML() {
    const codeArea = document.getElementById("codeEditor");
    if (!codeArea || !window.UMLRenderer) return;
    const classes = window.UMLRenderer.parseJavaToUML(codeArea.value);
    window.UMLRenderer.renderSVG(classes, "umlContainer");
  }

  function switchChallenge(idx) {
    if (idx < 0 || idx >= CHALLENGES.length) return;
    currentQIndex = idx;
    renderHUD();
    renderChallenge();
  }

  async function handleInstantTest() {
    const ch = CHALLENGES[currentQIndex];
    const codeArea = document.getElementById("codeEditor");
    const consoleOut = document.getElementById("consoleOutput");
    if (!ch || !codeArea || !consoleOut) return;

    consoleOut.className = "console-output";
    consoleOut.textContent = "🔍 Mahalliy OOP qoidalari va sintaksis tekshirilmoqda...";

    const validation = window.JavaRunner.validateOOPRules(codeArea.value, ch.requirements);

    let report = "==================================================\n";
    report += "🔍 SINTAKSIS VA OOP DIAGNOSTIKA NATIJASI\n";
    report += "==================================================\n\n";

    if (validation.passed) {
      report += "✅ BARCHA OOP VA SINTAKSIS SHARTLARI BAJARILDI! (+50 Ball)\n\n";
      if (validation.passedItems && validation.passedItems.length > 0) {
        validation.passedItems.forEach(item => {
          report += `✔️ ${item.name}: ${item.detail}\n`;
        });
      }
      report += `\n🎉 TABRIKLAYMIZ! Barcha shartlar to'liq va xatosiz bajarildi!\n💡 Endi xohlasangiz '☕ Ishga tushirish (OpenJDK 21)' orqali dasturni real konsolda sinab ko'ring!`;
      consoleOut.className = "console-output success";
      solvedQuestions.add(ch.id);
      saveSolved();
      renderHUD();
    } else {
      consoleOut.className = "console-output error";
      report += "❌ ANIQLANGAN XATOLIKLAR JOYI:\n";

      if (validation.syntaxErrors && validation.syntaxErrors.length > 0) {
        validation.syntaxErrors.forEach(err => {
          report += `\n📍 [${err.line}-Qator]: ${err.message}\n`;
          if (err.snippet) report += `   Kodingiz: ${err.snippet}\n`;
          if (err.fix) report += `   💡 Tavsiya: ${err.fix}\n`;
        });
      }

      if (validation.semanticIssues && validation.semanticIssues.length > 0) {
        validation.semanticIssues.forEach(iss => {
          const linePrefix = iss.line ? `[${iss.line}-Qator]: ` : "";
          report += `\n📍 ${linePrefix}${iss.message}\n`;
          if (iss.fix) report += `   💡 Tavsiya: ${iss.fix}\n`;
        });
      }

      if (validation.passedItems && validation.passedItems.length > 0) {
        report += "\n--------------------------------------------------\n";
        report += "✔️ TO'G'RI BAJARILGAN QISMLAR:\n";
        validation.passedItems.forEach(item => {
          report += `   • ${item.name} (${item.detail})\n`;
        });
      }

      report += "\n💡 Professor Ada Maslahati: Yuqorida ko'rsatilgan qatorlardagi xatoliklarni tuzatib, qayta tekshiring!";
    }

    consoleOut.textContent = report;
    updateUML();
  }

  async function handleCloudRun() {
    const codeArea = document.getElementById("codeEditor");
    const consoleOut = document.getElementById("consoleOutput");
    if (!codeArea || !consoleOut) return;

    consoleOut.className = "console-output";
    consoleOut.textContent = "🚀 Real OpenJDK 21 kompilyatoriga yuborilmoqda (Wandbox Cloud)...";

    const res = await window.JavaRunner.runOnOpenJDK21(codeArea.value);

    if (res.success) {
      consoleOut.className = "console-output success";
      consoleOut.textContent = `==================================================\n✅ OPENJDK 21 CHIQISHI (STDOUT)\n==================================================\n\n${res.output || "(Chiqish yo'q, dastur muvaffaqiyatli yakunlandi)"}\n\n✅ Kod muvaffaqiyatli kompilyatsiya qilindi va bajarildi!`;
    } else {
      consoleOut.className = "console-output error";
      let report = "==================================================\n";
      report += "❌ KOMPILYATOR XATOLIGI (JAVAC OPENJDK 21)\n";
      report += "==================================================\n\n";

      if (res.diagnostics && res.diagnostics.length > 0) {
        report += "📍 ANIQLANGAN QATORLAR:\n";
        res.diagnostics.forEach(d => {
          report += `• [${d.line}-Qator]: ${d.uzbek}\n  💡 Tavsiya: ${d.tip}\n\n`;
        });
        report += "--- To'liq Javac Kompilyator Xabari ---\n";
      }

      report += res.errors || "Noma'lum xatolik";
      consoleOut.textContent = report;
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    loadSolved();
    renderHUD();
    renderChallenge();

    const tabProblem = document.getElementById("tabProblem");
    const tabUML = document.getElementById("tabUML");
    const contentProblem = document.getElementById("contentProblem");
    const contentUML = document.getElementById("contentUML");

    if (tabProblem && tabUML) {
      tabProblem.addEventListener("click", () => {
        tabProblem.classList.add("active");
        tabUML.classList.remove("active");
        if (contentProblem) contentProblem.style.display = "block";
        if (contentUML) contentUML.style.display = "none";
      });

      tabUML.addEventListener("click", () => {
        tabUML.classList.add("active");
        tabProblem.classList.remove("active");
        if (contentProblem) contentProblem.style.display = "none";
        if (contentUML) contentUML.style.display = "block";
        updateUML();
      });
    }

    const btnTest = document.getElementById("btnInstantTest");
    const btnRun = document.getElementById("btnCloudRun");
    const btnReset = document.getElementById("btnResetCode");
    const btnNext = document.getElementById("btnNextChallenge");
    const btnToggleSol = document.getElementById("btnToggleSolution");
    const elToggleHint = document.getElementById("solutionToggleHint");

    if (btnTest) btnTest.addEventListener("click", handleInstantTest);
    if (btnRun) btnRun.addEventListener("click", handleCloudRun);
    if (btnReset) btnReset.addEventListener("click", () => {
      const ch = CHALLENGES[currentQIndex];
      const codeArea = document.getElementById("codeEditor");
      if (ch && codeArea) {
        codeArea.value = ch.starterCode;
        updateUML();
      }
    });

    if (btnNext) btnNext.addEventListener("click", () => {
      if (currentQIndex < CHALLENGES.length - 1) switchChallenge(currentQIndex + 1);
    });

    if (btnToggleSol) btnToggleSol.addEventListener("click", () => {
      const card = document.getElementById("solutionContentCard");
      if (card) {
        const isHidden = card.style.display === "none";
        card.style.display = isHidden ? "block" : "none";
        if (elToggleHint) elToggleHint.textContent = isHidden ? "[Yopish ▴]" : "[Ko'rish ▾]";
      }
    });

    const codeArea = document.getElementById("codeEditor");
    if (codeArea) {
      codeArea.addEventListener("input", updateUML);
      codeArea.addEventListener("keydown", (e) => {
        if (e.key === "Tab") {
          e.preventDefault();
          const start = codeArea.selectionStart;
          const end = codeArea.selectionEnd;
          codeArea.value = codeArea.value.substring(0, start) + "    " + codeArea.value.substring(end);
          codeArea.selectionStart = codeArea.selectionEnd = start + 4;
        }
      });
    }

    const btnUz = document.getElementById("btnLangUz");
    const btnEn = document.getElementById("btnLangEn");
    if (btnUz && btnEn) {
      btnUz.addEventListener("click", () => {
        currentLang = "uz";
        btnUz.classList.add("active");
        btnEn.classList.remove("active");
        renderChallenge();
      });
      btnEn.addEventListener("click", () => {
        currentLang = "en";
        btnEn.classList.add("active");
        btnUz.classList.remove("active");
        renderChallenge();
      });
    }
  });

})();