// ============================================================================
// OOP ACADEMY — 4-Modul GAME LOGIC: POLIMORFIZM, ABSTRAKT SINFLAR & DYNAMIC DISPATCH
// Professor Ada's Interactive Java IDE Simulator • WIUT 5COSC018C
// ============================================================================

(function () {
  "use strict";

  const STORAGE_KEY = "WIUT_OOP_W4_PROGRESS";
  let currentLang = "uz";
  let currentQIndex = 0;
  let solvedQuestions = new Set();

  const CHALLENGES = [
    {
      id: 1,
      title: {
        uz: "1. Abstrakt Klass Asosi ('abstract class')",
        en: "1. Abstract Class Foundation"
      },
      scenario: {
        uz: "Geometrik shakl (`Shape`) mavjud, lekin 'shunchaki shakl'ning aniq yuzasi bo'lmaydi. Uni `abstract class Shape` qilib, `abstract double getArea();` metodini e'lon qiling.",
        en: "Define incomplete blueprint with `abstract class Shape` and `abstract double getArea();`."
      },
      requirements: {
        classes: ["Shape"],
        keywords: ["abstract"],
        methods: ["getArea"]
      },
      starterCode: `// Shape abstrakt klassini yarating
abstract class Shape {
    abstract double getArea();
}

class Main {
    public static void main(String[] args) {
        System.out.println("Abstrakt Shape klassi yaratildi!");
    }
}`,
      solution: `abstract class Shape {
    abstract double getArea();
}

class Main {
    public static void main(String[] args) {
        System.out.println("Abstrakt Shape klassi yaratildi!");
    }
}`,
      detailedSolution: {
        theory: "Abstrakt klass — to'liq yakunlanmagan shablon. Undan to'g'ridan-to'g'ri `new Shape()` deb obyekt olib bo'lmaydi. U o'zida realizatsiyasiz abstrakt metodlarni saqlaydi va barcha vorislar uchun qat'iy talab qo'yadi.",
        theoryEn: "Abstract classes establish incomplete conceptual contracts that forbid direct instantiation while mandating concrete subclass implementations.",
        cleanCode: `abstract class Shape {
    abstract double getArea();
}`,
        breakdown: [
          "<code>abstract class Shape</code>: Klass abstrakt ekanligini bildiradi.",
          "<code>abstract double getArea();</code>: Tanasiz (figurali qavslarsiz), nuqta-vergul bilan tugovchi metod shartnomasi."
        ],
        pitfalls: "Abstrakt metodga tana `{ return 0; }` yozish kompilyatsiya xatosidir.",
        cw2Viva: "Westminster CW2 baholash mezonida 'Abstraction' (6 ball) va 'Polymorphism' (6 ball) talab qilinadi."
      }
    },
    {
      id: 2,
      title: {
        uz: "2. Abstrakt Metodni Realizatsiya Qilish",
        en: "2. Implementing Abstract Methods"
      },
      scenario: {
        uz: "`Circle` (doira) klassini `Shape` dan voris qiling (`extends Shape`) va uning `getArea()` metodida doira yuzasini (`Math.PI * radius * radius`) hisoblang.",
        en: "Subclass `Circle extends Shape` implementing concrete `getArea()` math."
      },
      requirements: {
        classes: ["Shape", "Circle"],
        methods: ["getArea"],
        keywords: ["extends", "@Override"]
      },
      starterCode: `abstract class Shape {
    abstract double getArea();
}

class Circle extends Shape {
    double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    @Override
    double getArea() {
        return Math.PI * radius * radius;
    }
}

class Main {
    public static void main(String[] args) {
        Circle c = new Circle(3.0);
        System.out.printf("Doira yuzasi: %.2f\\n", c.getArea());
    }
}`,
      solution: `abstract class Shape {
    abstract double getArea();
}

class Circle extends Shape {
    double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    @Override
    double getArea() {
        return Math.PI * radius * radius;
    }
}

class Main {
    public static void main(String[] args) {
        Circle c = new Circle(3.0);
        System.out.printf("Doira yuzasi: %.2f\\n", c.getArea());
    }
}`,
      detailedSolution: {
        theory: "Agar voris klass ota klassdagi abstrakt metodni to'liq realizatsiya qilmasa, voris klassning o'zi ham majburiy `abstract` bo'lib qoladi.",
        theoryEn: "Subclasses must implement all inherited abstract methods or remain abstract themselves.",
        cleanCode: `class Circle extends Shape {
    double radius;
    public Circle(double radius) { this.radius = radius; }
    @Override
    double getArea() { return Math.PI * radius * radius; }
}`,
        breakdown: [
          "<code>class Circle extends Shape</code>: Vorislik munosabati.",
          "<code>@Override double getArea()</code>: Aniq matematik formulali realizatsiya."
        ],
        pitfalls: "Ota abstrakt metodni realizatsiya qilishni unutib qoldirish.",
        cw2Viva: "Viva savoli: 'Abstrakt klassda oddiy (tanasi bor) metodlar bo'lishi mumkinmi?' Ha! Abstrakt klass ham abstrakt, ham oddiy to'liq metodlarni saqlay oladi."
      }
    },
    {
      id: 3,
      title: {
        uz: "3. Dinamik Polimorfizm (Dynamic Dispatch)",
        en: "3. Dynamic Method Dispatch"
      },
      scenario: {
        uz: "Ota referensiga bola obyektini yuklash (`Shape s = new Circle(4.0);`). Dastur ishlaganda `s.getArea()` chaqirilganda, ota emas, aynan `Circle` ning metodi ishlaydi!",
        en: "Demonstrate dynamic dispatch: `Shape s = new Circle(4.0); s.getArea()`."
      },
      requirements: {
        classes: ["Shape", "Circle"],
        keywords: ["new"]
      },
      starterCode: `abstract class Shape {
    abstract double getArea();
}

class Circle extends Shape {
    double r;
    public Circle(double r) { this.r = r; }
    @Override double getArea() { return 3.14 * r * r; }
}

class Main {
    public static void main(String[] args) {
        // Polimorfik tayinlash: Ota turi = Bola obyekti
        Shape s = new Circle(5.0);
        System.out.println("Yuza: " + s.getArea());
    }
}`,
      solution: `abstract class Shape {
    abstract double getArea();
}

class Circle extends Shape {
    double r;
    public Circle(double r) { this.r = r; }
    @Override double getArea() { return 3.14 * r * r; }
}

class Main {
    public static void main(String[] args) {
        Shape s = new Circle(5.0);
        System.out.println("Yuza: " + s.getArea());
    }
}`,
      detailedSolution: {
        theory: "Dynamic Dispatch — Java JVM ishlash vaqtida (Runtime) referensdagi obyektning haqiqiy turini aniqlab, mos keluvchi metodni avtomatik chaqirish mexanizmidir.",
        theoryEn: "Dynamic method dispatch resolves overridden calls at runtime based on the actual Heap instance rather than the compile-time variable reference.",
        cleanCode: `Shape s = new Circle(5.0);
System.out.println("Yuza: " + s.getArea());`,
        breakdown: [
          "<code>Shape s</code>: Kompilyatsiya vaqtida o'zgaruvchi Shape turida.",
          "<code>new Circle(5.0)</code>: Xotirada haqiqiy Circle obyekti yashaydi.",
          "<code>s.getArea()</code>: JVM xotiraga qarab Circle ning getArea sini chaqiradi."
        ],
        pitfalls: "Bola klassning faqat o'zidagina bor yangi metodlarni Shape referensi orqali chaqirib bo'lmaydi.",
        cw2Viva: "Polimorfizm Clean Code ning asosiy ustunidir, chunki u `switch-case` va `if-else` tarmoqlarini yo'qotishga imkon beradi."
      }
    },
    {
      id: 4,
      title: {
        uz: "4. Getorogen Polimorfik Kolleksiyalar (Array/List)",
        en: "4. Heterogeneous Polymorphic Collections"
      },
      scenario: {
        uz: "Bitta massivda har xil turdagi shakllarni (`Circle`, `Rectangle`) saqlang va bitta siklda (loop) barchasining yuzasini bir xilda chiqaring.",
        en: "Store varied shapes inside a single `Shape[]` array and iterate polymorphically."
      },
      requirements: {
        classes: ["Shape", "Circle", "Rectangle"],
        keywords: ["new"]
      },
      starterCode: `abstract class Shape {
    abstract double getArea();
}

class Circle extends Shape {
    double r;
    public Circle(double r) { this.r = r; }
    @Override double getArea() { return 3.14 * r * r; }
}

class Rectangle extends Shape {
    double w, h;
    public Rectangle(double w, double h) { this.w = w; this.h = h; }
    @Override double getArea() { return w * h; }
}

class Main {
    public static void main(String[] args) {
        Shape[] shapes = new Shape[] {
            new Circle(2.0),
            new Rectangle(3.0, 4.0),
            new Circle(5.0)
        };

        for (Shape s : shapes) {
            System.out.println("Shakl yuzasi: " + s.getArea());
        }
    }
}`,
      solution: `abstract class Shape {
    abstract double getArea();
}

class Circle extends Shape {
    double r;
    public Circle(double r) { this.r = r; }
    @Override double getArea() { return 3.14 * r * r; }
}

class Rectangle extends Shape {
    double w, h;
    public Rectangle(double w, double h) { this.w = w; this.h = h; }
    @Override double getArea() { return w * h; }
}

class Main {
    public static void main(String[] args) {
        Shape[] shapes = new Shape[] {
            new Circle(2.0),
            new Rectangle(3.0, 4.0),
            new Circle(5.0)
        };

        for (Shape s : shapes) {
            System.out.println("Shakl yuzasi: " + s.getArea());
        }
    }
}`,
      detailedSolution: {
        theory: "Polimorfizm tufayli bitta umumiy ota turdagi kolleksiyada (`Shape[]` yoki `List<Shape>`) istalgancha turli xil voris obyektlarni saqlash va ularga bir xilda buyruq berish mumkin.",
        theoryEn: "Heterogeneous collections leverage polymorphism to manipulate diverse subtypes under a unified abstract contract.",
        cleanCode: `Shape[] shapes = new Shape[] { new Circle(2.0), new Rectangle(3.0, 4.0) };
for (Shape s : shapes) {
    System.out.println(s.getArea());
}`,
        breakdown: [
          "Bitta massivda ham Circle, ham Rectangle birgalikda yashaydi.",
          "Loop ichida if/else bilan 'bu nima shakl?' deb so'rash shart emas, `s.getArea()` avtomatik to'g'ri ishlaydi."
        ],
        pitfalls: "Har bir tur uchun alohida `Circle[]` va `Rectangle[]` massivlari ochish kodni asossiz ko'paytiradi.",
        cw2Viva: "Buyurtma savatida (`Order`) har xil tovarlar: `List<MenuItem>` bitta ro'yxatda saqlanishi CW2 ning asosiy talabidir."
      }
    },
    {
      id: 5,
      title: {
        uz: "5. Abstrakt Klassdagi To'liq (Concrete) Metodlar",
        en: "5. Concrete Methods inside Abstract Classes"
      },
      scenario: {
        uz: "Abstrakt klass nafaqat shartnoma, balki barcha bolalar uchun umumiy bo'lgan tayyor kodni ham saqlaydi. `Shape` da `printInfo()` metodini yozing.",
        en: "Provide default behavior alongside abstract methods inside `Shape`."
      },
      requirements: {
        classes: ["Shape"],
        methods: ["printInfo"]
      },
      starterCode: `abstract class Shape {
    abstract double getArea();

    // Umumiy tayyor metod
    public void printInfo() {
        System.out.println("Shakl yuzasi: " + getArea() + " kv.sm");
    }
}

class Square extends Shape {
    double side;
    public Square(double side) { this.side = side; }
    @Override double getArea() { return side * side; }
}

class Main {
    public static void main(String[] args) {
        Square sq = new Square(4.0);
        sq.printInfo();
    }
}`,
      solution: `abstract class Shape {
    abstract double getArea();

    public void printInfo() {
        System.out.println("Shakl yuzasi: " + getArea() + " kv.sm");
    }
}

class Square extends Shape {
    double side;
    public Square(double side) { this.side = side; }
    @Override double getArea() { return side * side; }
}

class Main {
    public static void main(String[] args) {
        Square sq = new Square(4.0);
        sq.printInfo();
    }
}`,
      detailedSolution: {
        theory: "Interfeyslardan farqli ravishda, abstrakt klasslar to'liq ishlovchi maydonlar va metodlarni saqlay oladi. `printInfo()` ichida `getArea()` ni chaqirish — Template Method patternining tamal toshidir.",
        theoryEn: "Abstract classes combine abstract placeholders with shared concrete implementations, forming the foundation of the Template Method pattern.",
        cleanCode: `public void printInfo() {
    System.out.println("Shakl yuzasi: " + getArea() + " kv.sm");
}`,
        breakdown: [
          "`printInfo()` barcha vorislar uchun bir marta ota klassda yozildi.",
          "Har bir bola klass uchun bu kodni takroran yozish shart emas."
        ],
        pitfalls: "Interfeyslar (Java 8 gacha) bunday holatga ega bo'la olmas edi.",
        cw2Viva: "Viva savoli: 'Qachon Interface, qachon Abstract Class tanlanadi?' Umumiy kod va holat (state) bo'lsa Abstract Class; faqat shartnoma va ko'p karrali meros kerak bo'lsa Interface!"
      }
    },
    {
      id: 6,
      title: {
        uz: "6. Polimorfik To'lov Tizimi (Payme vs UzumPay)",
        en: "6. Polymorphic Payment Processing"
      },
      scenario: {
        uz: "Real biznes tizim: `PaymentProcessor` abstrakt klassi va uning `Payme` hamda `UzumPay` vorislari. `processPayment(PaymentProcessor p, double amt)` orqali polimorfik to'lov o'tkazing.",
        en: "Build real-world payment abstraction supporting `Payme` and `UzumPay`."
      },
      requirements: {
        classes: ["PaymentProcessor", "PaymePayment", "UzumPayment"],
        methods: ["pay"]
      },
      starterCode: `abstract class PaymentProcessor {
    abstract void pay(double amount);
}

class PaymePayment extends PaymentProcessor {
    @Override void pay(double amount) {
        System.out.println("Payme orqali to'landi: " + amount + " so'm");
    }
}

class UzumPayment extends PaymentProcessor {
    @Override void pay(double amount) {
        System.out.println("Uzum Bank orqali to'landi: " + amount + " so'm");
    }
}

class Main {
    public static void processOrderPayment(PaymentProcessor processor, double amount) {
        processor.pay(amount);
    }

    public static void main(String[] args) {
        processOrderPayment(new PaymePayment(), 45000);
        processOrderPayment(new UzumPayment(), 120000);
    }
}`,
      solution: `abstract class PaymentProcessor {
    abstract void pay(double amount);
}

class PaymePayment extends PaymentProcessor {
    @Override void pay(double amount) {
        System.out.println("Payme orqali to'landi: " + amount + " so'm");
    }
}

class UzumPayment extends PaymentProcessor {
    @Override void pay(double amount) {
        System.out.println("Uzum Bank orqali to'landi: " + amount + " so'm");
    }
}

class Main {
    public static void processOrderPayment(PaymentProcessor processor, double amount) {
        processor.pay(amount);
    }

    public static void main(String[] args) {
        processOrderPayment(new PaymePayment(), 45000);
        processOrderPayment(new UzumPayment(), 120000);
    }
}`,
      detailedSolution: {
        theory: "Open-Closed Principle (SOLID): `processOrderPayment` metodi yangi to'lov turlariga (masalan Click yoki Visa) ochiq, lekin o'zgarishga yopiq. Yangi to'lov qo'shilsa eski kodga tegilmaydi!",
        theoryEn: "Polymorphism underpins the Open-Closed Principle, allowing new payment providers to be added without mutating existing processing logic.",
        cleanCode: `public static void processOrderPayment(PaymentProcessor processor, double amount) {
    processor.pay(amount);
}`,
        breakdown: [
          "Metod aniq Payme yoki Uzumga bog'lanmagan (Loose Coupling).",
          "Polimorfizm orqali istalgan to'lov tizimini bitta qatorda boshqaradi."
        ],
        pitfalls: "Metod ichida if (type == \"payme\") else if (type == \"uzum\") deb tekshirish — polimorfizmga zid anti-pattern!",
        cw2Viva: "Coursework ilovangizda buyurtma to'lovi Strategy pattern yoki Polimorfik to'lov orqali amalga oshirilishi 9 ball beradi."
      }
    },
    {
      id: 7,
      title: {
        uz: "7. Konstruktorga Ega Abstrakt Klass",
        en: "7. Abstract Classes with Constructors"
      },
      scenario: {
        uz: "Abstrakt klassdan `new` orqali obyekt olib bo'lmasa-da, uning konstruktori bo'lishi mumkin! Voris klasslar `super(...)` orqali uni chaqirib xususiyatlarni to'ldiradi.",
        en: "Even though abstract classes cannot be instantiated, their constructors initialize shared state."
      },
      requirements: {
        classes: ["Item", "Food"],
        constructors: ["Item", "Food"],
        keywords: ["super"]
      },
      starterCode: `abstract class Item {
    String title;
    double price;

    public Item(String title, double price) {
        this.title = title;
        this.price = price;
    }

    abstract void consume();
}

class Food extends Item {
    public Food(String title, double price) {
        super(title, price);
    }

    @Override
    void consume() {
        System.out.println(title + " yeyildi! Mazali!");
    }
}

class Main {
    public static void main(String[] args) {
        Food pizza = new Food("Pepperoni Pizza", 12.5);
        pizza.consume();
    }
}`,
      solution: `abstract class Item {
    String title;
    double price;

    public Item(String title, double price) {
        this.title = title;
        this.price = price;
    }

    abstract void consume();
}

class Food extends Item {
    public Food(String title, double price) {
        super(title, price);
    }

    @Override
    void consume() {
        System.out.println(title + " yeyildi! Mazali!");
    }
}

class Main {
    public static void main(String[] args) {
        Food pizza = new Food("Pepperoni Pizza", 12.5);
        pizza.consume();
    }
}`,
      detailedSolution: {
        theory: "Abstrakt klass konstruktori barcha vorislar uchun umumiy bo'lgan maydonlarni (`title`, `price`) xavfsiz initsializatsiya qilish uchun xizmat qiladi.",
        theoryEn: "Superclass constructors ensure that common state shared by all derived variants is properly validated and instantiated.",
        cleanCode: `public Food(String title, double price) {
    super(title, price);
}`,
        breakdown: [
          "`Item` o'z konstruktoriga ega.",
          "`Food` o'z konstruktorida `super(title, price)` orqali ota konstruktorni chaqiradi."
        ],
        pitfalls: "Interfeyslarda umuman konstruktor bo'lishi mumkin emas, bu Abstrakt klassning asosiy farqlaridan biridir.",
        cw2Viva: "Viva savoli: 'Abstrakt klassning konstruktori nima uchun kerak?' Voris obyektlar yaratilganda ota maydonlarni xavfsiz boshlang'ich qiymat bilan to'ldirish uchun!"
      }
    },
    {
      id: 8,
      title: {
        uz: "8. Ko'p Pog'onali Vorislikda Polimorfizm",
        en: "8. Multi-Level Polymorphism"
      },
      scenario: {
        uz: "`LivingBeing` -> `Animal` -> `Dog`. Eng yuqori ota referensi (`LivingBeing lb = new Dog();`) orqali eng quyi bola metodini dinamik chaqiring.",
        en: "Demonstrate multi-level dynamic dispatch: `LivingBeing lb = new Dog(); lb.breathe()`."
      },
      requirements: {
        classes: ["LivingBeing", "Animal", "Dog"],
        keywords: ["extends"]
      },
      starterCode: `abstract class LivingBeing {
    abstract void breathe();
}

abstract class Animal extends LivingBeing {
    abstract void makeSound();
}

class Dog extends Animal {
    @Override void breathe() { System.out.println("🐕 It o'pkasi bilan nafas oladi"); }
    @Override void makeSound() { System.out.println("🐕 Vov-vov!"); }
}

class Main {
    public static void main(String[] args) {
        LivingBeing lb = new Dog();
        lb.breathe();
    }
}`,
      solution: `abstract class LivingBeing {
    abstract void breathe();
}

abstract class Animal extends LivingBeing {
    abstract void makeSound();
}

class Dog extends Animal {
    @Override void breathe() { System.out.println("🐕 It o'pkasi bilan nafas oladi"); }
    @Override void makeSound() { System.out.println("🐕 Vov-vov!"); }
}

class Main {
    public static void main(String[] args) {
        LivingBeing lb = new Dog();
        lb.breathe();
    }
}`,
      detailedSolution: {
        theory: "Java'da iyerarxiya necha pog'ona bo'lishidan qat'i nazar, Dynamic Dispatch eng quyi darajadagi eng aniq (most specific) metodni ishga tushiradi.",
        theoryEn: "Dynamic dispatch traverses arbitrary inheritance depth, executing the most specific override available on the runtime instance.",
        cleanCode: `LivingBeing lb = new Dog();
lb.breathe();`,
        breakdown: [
          "LivingBeing iyerarxiyaning eng yuqori qismida turadi.",
          "Dog eng oxirgi konkert klass bo'lib, barcha ota abstrakt metodlarni yopadi."
        ],
        pitfalls: "O'rtadagi Animal klassi abstrakt bo'lgani sababli LivingBeing ning metodini majburiy realizatsiya qilishi shart emas.",
        cw2Viva: "Kurs ishida `MenuItem` -> `Drink` -> `Coffee` ko'p pog'onali tuzilmasi ana shunday ishlaydi."
      }
    },
    {
      id: 9,
      title: {
        uz: "9. Chegirma Tizimida Polimorfizm (Strategy Asosi)",
        en: "9. Polymorphic Discounts (Strategy Foundation)"
      },
      scenario: {
        uz: "Turli xil chegirmalar: `NoDiscount`, `StudentDiscount` (10%), `VipDiscount` (20%). Polimorfizm orqali hisoblash logikasini ajrating.",
        en: "Implement polymorphic discount engine preparing for the GoF Strategy pattern."
      },
      requirements: {
        classes: ["Discount", "StudentDiscount", "VipDiscount"],
        methods: ["applyDiscount"]
      },
      starterCode: `abstract class Discount {
    abstract double applyDiscount(double price);
}

class StudentDiscount extends Discount {
    @Override double applyDiscount(double price) {
        return price * 0.90; // 10% chegirma
    }
}

class VipDiscount extends Discount {
    @Override double applyDiscount(double price) {
        return price * 0.80; // 20% chegirma
    }
}

class Main {
    public static void main(String[] args) {
        Discount d1 = new StudentDiscount();
        Discount d2 = new VipDiscount();

        System.out.println("Talaba narxi: $" + d1.applyDiscount(100.0));
        System.out.println("VIP narxi: $" + d2.applyDiscount(100.0));
    }
}`,
      solution: `abstract class Discount {
    abstract double applyDiscount(double price);
}

class StudentDiscount extends Discount {
    @Override double applyDiscount(double price) {
        return price * 0.90;
    }
}

class VipDiscount extends Discount {
    @Override double applyDiscount(double price) {
        return price * 0.80;
    }
}

class Main {
    public static void main(String[] args) {
        Discount d1 = new StudentDiscount();
        Discount d2 = new VipDiscount();

        System.out.println("Talaba narxi: $" + d1.applyDiscount(100.0));
        System.out.println("VIP narxi: $" + d2.applyDiscount(100.0));
    }
}`,
      detailedSolution: {
        theory: "Bu struktura mashhur GoF Strategy patternining fundamentidir. Chegirma algoritmlari alohida polimorfik klasslarga bo'lingan va dinamik almashtiriladi.",
        theoryEn: "Encapsulating discount algorithms behind an abstract polymorphic contract forms the foundation of the GoF Strategy design pattern.",
        cleanCode: `Discount d1 = new StudentDiscount();
Discount d2 = new VipDiscount();`,
        breakdown: [
          "Har bir chegirma o'z hisoblash qoidasiga ega.",
          "Kelajakda Yangi yil aksiyasi qo'shilsa, faqat yangi klass ochiladi (Open-Closed Principle)."
        ],
        pitfalls: "Narx hisoblayotganda if-else zanjirlarini ishlatish kodni ifloslantiradi.",
        cw2Viva: "Westminster CW2 assessment mezonida GoF Behavioural Pattern (Strategy) uchun to'liq 9 ball beriladi."
      }
    },
    {
      id: 10,
      title: {
        uz: "10. CW2 Kurs Ishi Modeli: Polimorfik Savat",
        en: "10. CW2 Polymorphic Order Basket Model"
      },
      scenario: {
        uz: "Assessment 2 (50%) Kurs Ishining yuragi: `abstract class MenuItem` va uning `Coffee`, `Dessert` vorislari. `List<MenuItem>` polimorfik savatida barcha tovarlarning umumiy summasini hisoblang!",
        en: "Build full CW2 Assessment 2 Polymorphic basket: `List<MenuItem>` computing totals across diverse item types."
      },
      requirements: {
        classes: ["MenuItem", "Coffee", "Dessert"],
        methods: ["getFinalPrice"],
        keywords: ["abstract", "@Override"]
      },
      starterCode: `abstract class MenuItem {
    protected String title;
    protected double basePrice;

    public MenuItem(String title, double basePrice) {
        this.title = title;
        this.basePrice = basePrice;
    }

    public abstract double getFinalPrice();
}

class Coffee extends MenuItem {
    public Coffee(String title, double basePrice) {
        super(title, basePrice);
    }
    @Override
    public double getFinalPrice() {
        return basePrice + 0.50; // Qadoqlash
    }
}

class Dessert extends MenuItem {
    public Dessert(String title, double basePrice) {
        super(title, basePrice);
    }
    @Override
    public double getFinalPrice() {
        return basePrice;
    }
}

class Main {
    public static void main(String[] args) {
        MenuItem[] basket = new MenuItem[] {
            new Coffee("Americano", 3.0),
            new Dessert("Cheesecake", 5.0)
        };

        double grandTotal = 0;
        for (MenuItem item : basket) {
            grandTotal += item.getFinalPrice();
        }
        System.out.println("Savat umumiy summasi: $" + grandTotal);
    }
}`,
      solution: `abstract class MenuItem {
    protected String title;
    protected double basePrice;

    public MenuItem(String title, double basePrice) {
        this.title = title;
        this.basePrice = basePrice;
    }

    public abstract double getFinalPrice();
}

class Coffee extends MenuItem {
    public Coffee(String title, double basePrice) {
        super(title, basePrice);
    }
    @Override
    public double getFinalPrice() {
        return basePrice + 0.50;
    }
}

class Dessert extends MenuItem {
    public Dessert(String title, double basePrice) {
        super(title, basePrice);
    }
    @Override
    public double getFinalPrice() {
        return basePrice;
    }
}

class Main {
    public static void main(String[] args) {
        MenuItem[] basket = new MenuItem[] {
            new Coffee("Americano", 3.0),
            new Dessert("Cheesecake", 5.0)
        };

        double grandTotal = 0;
        for (MenuItem item : basket) {
            grandTotal += item.getFinalPrice();
        }
        System.out.println("Savat umumiy summasi: $" + grandTotal);
    }
}`,
      detailedSolution: {
        theory: "Tabriklaymiz! Siz 4-Modulni to'liq o'zlashtirdingiz. Westminster CW2 baholash jadvalidagi 'Abstraction' (6 ball) va 'Polymorphism' (6 ball) talablari muvaffaqiyatli qondirildi!",
        theoryEn: "Congratulations! You have mastered Abstraction, dynamic dispatch, and polymorphic aggregation for your CW2 Java order application.",
        cleanCode: `double grandTotal = 0;
for (MenuItem item : basket) {
    grandTotal += item.getFinalPrice();
}`,
        breakdown: [
          "`MenuItem` abstrakt ota klass bo'lib, polimorfizm kafolatlangan.",
          "`basket` ro'yxatida har qanday yangi tovar turi bemalol joy oladi.",
          "Grand total to'liq polimorfik Dynamic Dispatch orqali hisoblanadi."
        ],
        pitfalls: "5-modulda bu model Interfeyslar va Loose Coupling bilan yanada boyitiladi.",
        cw2Viva: "Viva imtihonida o'qituvchiga kodni ko'rsatib: 'Mana bu yerda polimorfik savat yig'ilgan, har bir tovar o'z getFinalPrice() metodiga ega' deb tushuntirib berasiz."
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

    if (elBadge) elBadge.textContent = `4-Modul • ${ch.id}-Topshiriq`;
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
      if (ch.requirements.classes) reqHtml += `<li><strong>Klasslar:</strong> <code>${ch.requirements.classes.join(", ")}</code> e'lon qilinsin.</li>`;
      if (ch.requirements.keywords) reqHtml += `<li><strong>Kalit so'zlar:</strong> <code>${ch.requirements.keywords.join(", ")}</code> ishlatilsin.</li>`;
      if (ch.requirements.methods && ch.requirements.methods.length > 0) reqHtml += `<li><strong>Metodlar:</strong> <code>${ch.requirements.methods.join("(), ")}()</code> metodi yozilsin.</li>`;
      reqHtml += `<li>Sintaksis xatolarisiz va clean code talablariga mos yozing.</li>`;
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