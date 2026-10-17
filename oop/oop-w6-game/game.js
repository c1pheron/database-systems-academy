// ============================================================================
// OOP ACADEMY — 6-Modul GAME LOGIC: GOF DESIGN PATTERNS & CW2 CONSOLE ORDER APP
// Professor Ada's Interactive Java IDE Simulator • WIUT 5COSC018C (50% Assessment 2)
// ============================================================================

(function () {
  "use strict";

  const STORAGE_KEY = "WIUT_OOP_W6_PROGRESS";
  let currentLang = "uz";
  let currentQIndex = 0;
  let solvedQuestions = new Set();

  const CHALLENGES = [
    {
      id: 1,
      title: {
        uz: "1. Creational Pattern: Singleton (Yagona Boshqaruvchi)",
        en: "1. Creational Pattern: Singleton Manager"
      },
      scenario: {
        uz: "CW2 tizimida buyurtmalar bazasi yoki sanagichi faqat bitta bo'lishi shart. `OrderManager` klassida Singleton patternini (private konstruktor, private static instance, public static getInstance()) yarating.",
        en: "Implement thread-safe Singleton pattern for CW2 `OrderManager`."
      },
      requirements: {
        classes: ["OrderManager"],
        methods: ["getInstance"],
        keywords: ["private", "static"]
      },
      starterCode: `class OrderManager {
    // 1. O'z turidagi private static o'zgaruvchi
    private static OrderManager instance;
    private int totalOrders = 0;

    // 2. Private konstruktor
    private OrderManager() {}

    // 3. Global kirish nuqtasi
    public static OrderManager getInstance() {
        if (instance == null) {
            instance = new OrderManager();
        }
        return instance;
    }

    public void incrementOrders() { totalOrders++; }
    public int getTotalOrders() { return totalOrders; }
}

class Main {
    public static void main(String[] args) {
        OrderManager m1 = OrderManager.getInstance();
        OrderManager m2 = OrderManager.getInstance();

        m1.incrementOrders();
        System.out.println("m2 orqali sanagich: " + m2.getTotalOrders());
        System.out.println("Ikkalasi bitta obyektmi: " + (m1 == m2));
    }
}`,
      solution: `class OrderManager {
    private static OrderManager instance;
    private int totalOrders = 0;

    private OrderManager() {}

    public static OrderManager getInstance() {
        if (instance == null) {
            instance = new OrderManager();
        }
        return instance;
    }

    public void incrementOrders() { totalOrders++; }
    public int getTotalOrders() { return totalOrders; }
}

class Main {
    public static void main(String[] args) {
        OrderManager m1 = OrderManager.getInstance();
        OrderManager m2 = OrderManager.getInstance();

        m1.incrementOrders();
        System.out.println("m2 orqali sanagich: " + m2.getTotalOrders());
        System.out.println("Ikkalasi bitta obyektmi: " + (m1 == m2));
    }
}`,
      detailedSolution: {
        theory: "Singleton Pattern (GoF Creational) — butun dastur davomida klassning faqat 1 ta yagona nusxasi bo'lishini va unga hamma joydan kirishni kafolatlaydi. Konstruktor yopiqligi (private) sababli tashqaridan `new` qilib bo'lmaydi.",
        theoryEn: "Singleton guarantees a single global instance by hiding the constructor and controlling instantiation via `getInstance()`.",
        cleanCode: `public static OrderManager getInstance() {
    if (instance == null) instance = new OrderManager();
    return instance;
}`,
        breakdown: [
          "`private OrderManager()`: Tashqaridan yangi obyekt yaratishni taqiqlaydi.",
          "`private static OrderManager instance`: Yagona nusxani xotirada saqlaydi.",
          "`getInstance()`: Birinchi chaqirilganda yaratadi, keyingilarida tayyor nusxani qaytaradi (Lazy Initialization)."
        ],
        pitfalls: "Konstruktorni public qoldirish — natijada talabalar bilmasdan yangi obyekt ochib qo'yishadi.",
        cw2Viva: "Westminster CW2 baholash mezonida Creational Pattern uchun 9 ball ajratilgan. Singleton yoki Factory Method bunga to'liq mos keladi."
      }
    },
    {
      id: 2,
      title: {
        uz: "2. Creational Pattern: Factory Method (Mahsulot Fabrikasi)",
        en: "2. Creational Pattern: Factory Method"
      },
      scenario: {
        uz: "Mijoz 'Latte' yoki 'Espresso' deb buyurtma beradi. `CoffeeFactory.createCoffee(String type)` metodi orqali `new Latte()` yoki `new Espresso()` obyektlarini avtomatik yarating.",
        en: "Implement Factory Method `CoffeeFactory.createCoffee(type)` decoupling instantiation."
      },
      requirements: {
        classes: ["Coffee", "Latte", "Espresso", "CoffeeFactory"],
        methods: ["createCoffee"],
        keywords: ["switch", "case"]
      },
      starterCode: `abstract class Coffee {
    abstract String getName();
    abstract double getCost();
}

class Latte extends Coffee {
    @Override String getName() { return "Klassik Latte"; }
    @Override double getCost() { return 4.5; }
}

class Espresso extends Coffee {
    @Override String getName() { return "Kuchli Espresso"; }
    @Override double getCost() { return 3.0; }
}

class CoffeeFactory {
    public static Coffee createCoffee(String type) {
        switch (type.toLowerCase()) {
            case "latte": return new Latte();
            case "espresso": return new Espresso();
            default: throw new IllegalArgumentException("Noma'lum qahva turi: " + type);
        }
    }
}

class Main {
    public static void main(String[] args) {
        Coffee c1 = CoffeeFactory.createCoffee("latte");
        Coffee c2 = CoffeeFactory.createCoffee("espresso");
        System.out.println(c1.getName() + " -> $" + c1.getCost());
        System.out.println(c2.getName() + " -> $" + c2.getCost());
    }
}`,
      solution: `abstract class Coffee {
    abstract String getName();
    abstract double getCost();
}

class Latte extends Coffee {
    @Override String getName() { return "Klassik Latte"; }
    @Override double getCost() { return 4.5; }
}

class Espresso extends Coffee {
    @Override String getName() { return "Kuchli Espresso"; }
    @Override double getCost() { return 3.0; }
}

class CoffeeFactory {
    public static Coffee createCoffee(String type) {
        switch (type.toLowerCase()) {
            case "latte": return new Latte();
            case "espresso": return new Espresso();
            default: throw new IllegalArgumentException("Noma'lum qahva turi: " + type);
        }
    }
}

class Main {
    public static void main(String[] args) {
        Coffee c1 = CoffeeFactory.createCoffee("latte");
        Coffee c2 = CoffeeFactory.createCoffee("espresso");
        System.out.println(c1.getName() + " -> $" + c1.getCost());
        System.out.println(c2.getName() + " -> $" + c2.getCost());
    }
}`,
      detailedSolution: {
        theory: "Factory Method Pattern — obyekt yaratish logikasini alohida fabrika klassiga yuklaydi. Mijoz (konsol menyusi) aniq qaysi klassdan obyekt olinishini bilishi shart emas, u umumiy interfeys bilan ishlaydi.",
        theoryEn: "Factory Method encapsulates instantiation logic behind a unified interface, decoupling client code from concrete subtypes.",
        cleanCode: `Coffee c = CoffeeFactory.createCoffee("latte");`,
        breakdown: [
          "`CoffeeFactory`: Obyekt yaratishga javobgar yagona joy (Single Responsibility).",
          "Yangi `Cappuccino` klassi qo'shilganda faqat fabrikaga bitta case qo'shiladi."
        ],
        pitfalls: "Fabrika metodida default holatda xatolik tashlamasdan null qaytarish — keyinchalik NullPointerException keltirib chiqaradi.",
        cw2Viva: "Viva imtihonida: 'Nega new Latte() o'rniga Factory ishlatdingiz?' deb so'rashadi. Javob: Kodni bo'sh bog'lash (Loose Coupling) va yangi turlarni kiritishni osonlashtirish uchun!"
      }
    },
    {
      id: 3,
      title: {
        uz: "3. Creational Pattern: Builder (Qadamma-qadam Yig'uvchi)",
        en: "3. Creational Pattern: Builder Pattern"
      },
      scenario: {
        uz: "Murakkab qahva buyurtmasi: shakar miqdori, sirop turi, muzli yoki issiqligi. Ko'p parametrlarga ega obyektni qulay `Builder` orqali yig'ishni amalga oshiring.",
        en: "Implement Builder pattern with fluent API for customizable coffee orders."
      },
      requirements: {
        classes: ["CustomCoffee"],
        methods: ["build"]
      },
      starterCode: `class CustomCoffee {
    private String base;
    private int sugar;
    private boolean extraMilk;

    // Yopiq konstruktor
    private CustomCoffee(Builder builder) {
        this.base = builder.base;
        this.sugar = builder.sugar;
        this.extraMilk = builder.extraMilk;
    }

    public void printSpecs() {
        System.out.println("☕ " + base + " | Shakar: " + sugar + " qoshiq | Sut: " + (extraMilk ? "Ha" : "Yo'q"));
    }

    // Static Builder klassi
    public static class Builder {
        private String base;
        private int sugar = 0;
        private boolean extraMilk = false;

        public Builder(String base) { this.base = base; }
        public Builder withSugar(int s) { this.sugar = s; return this; }
        public Builder withExtraMilk(boolean m) { this.extraMilk = m; return this; }
        public CustomCoffee build() { return new CustomCoffee(this); }
    }
}

class Main {
    public static void main(String[] args) {
        CustomCoffee order = new CustomCoffee.Builder("Cappuccino")
            .withSugar(2)
            .withExtraMilk(true)
            .build();
        order.printSpecs();
    }
}`,
      solution: `class CustomCoffee {
    private String base;
    private int sugar;
    private boolean extraMilk;

    private CustomCoffee(Builder builder) {
        this.base = builder.base;
        this.sugar = builder.sugar;
        this.extraMilk = builder.extraMilk;
    }

    public void printSpecs() {
        System.out.println("☕ " + base + " | Shakar: " + sugar + " qoshiq | Sut: " + (extraMilk ? "Ha" : "Yo'q"));
    }

    public static class Builder {
        private String base;
        private int sugar = 0;
        private boolean extraMilk = false;

        public Builder(String base) { this.base = base; }
        public Builder withSugar(int s) { this.sugar = s; return this; }
        public Builder withExtraMilk(boolean m) { this.extraMilk = m; return this; }
        public CustomCoffee build() { return new CustomCoffee(this); }
    }
}

class Main {
    public static void main(String[] args) {
        CustomCoffee order = new CustomCoffee.Builder("Cappuccino")
            .withSugar(2)
            .withExtraMilk(true)
            .build();
        order.printSpecs();
    }
}`,
      detailedSolution: {
        theory: "Builder Pattern — juda ko'p konstruktor parametrlariga ega (Telescoping Constructor anti-pattern) obyektlarni chiroyli va tushunarli Fluent API usulida yig'ish imkonini beradi.",
        theoryEn: "The Builder pattern overcomes telescoping constructor anti-patterns, offering an expressive fluent syntax for complex object creation.",
        cleanCode: `CustomCoffee order = new CustomCoffee.Builder("Cappuccino")
    .withSugar(2)
    .withExtraMilk(true)
    .build();`,
        breakdown: [
          "`static class Builder`: Ichki quruvchi klass.",
          "`return this;`: Metod zanjirini (Method Chaining) ta'minlaydi.",
          "`build()`: Yakuniy tekshirilgan obyektni qaytaradi."
        ],
        pitfalls: "Har bir setterda `return this;` yozishni unutish — zanjirni uzib qo'yadi.",
        cw2Viva: "CW2 buyurtma ilovasida foydalanuvchi o'ziga xos qahva retseptini yig'ishida Builder ideal yechimdir."
      }
    },
    {
      id: 4,
      title: {
        uz: "4. Structural Pattern: Decorator (Qo'shimchalar & Toppings)",
        en: "4. Structural Pattern: Decorator Pattern"
      },
      scenario: {
        uz: "Westminster CW2 ning eng sevimli patterni! Asosiy qahvaga sut (`MilkDecorator`, +$0.5) va sirop (`SyrupDecorator`, +$1.0) kabi qo'shimchalarni dinamik qatlamlar ko'rinishida qo'shing.",
        en: "Implement GoF Decorator pattern dynamically stacking toppings onto coffee."
      },
      requirements: {
        classes: ["Beverage", "SimpleCoffee", "MilkDecorator", "SyrupDecorator"],
        methods: ["getCost", "getDescription"]
      },
      starterCode: `interface Beverage {
    String getDescription();
    double getCost();
}

class SimpleCoffee implements Beverage {
    @Override public String getDescription() { return "Qora Qahva"; }
    @Override public double getCost() { return 3.0; }
}

abstract class CoffeeDecorator implements Beverage {
    protected Beverage decorated;
    public CoffeeDecorator(Beverage b) { this.decorated = b; }
    @Override public String getDescription() { return decorated.getDescription(); }
    @Override public double getCost() { return decorated.getCost(); }
}

class MilkDecorator extends CoffeeDecorator {
    public MilkDecorator(Beverage b) { super(b); }
    @Override public String getDescription() { return super.getDescription() + " + Sut"; }
    @Override public double getCost() { return super.getCost() + 0.5; }
}

class SyrupDecorator extends CoffeeDecorator {
    public SyrupDecorator(Beverage b) { super(b); }
    @Override public String getDescription() { return super.getDescription() + " + Vanil Sirop"; }
    @Override public double getCost() { return super.getCost() + 1.0; }
}

class Main {
    public static void main(String[] args) {
        Beverage order = new SimpleCoffee();
        order = new MilkDecorator(order);
        order = new SyrupDecorator(order);

        System.out.println("Tarkib: " + order.getDescription());
        System.out.println("Yakuniy narx: $" + order.getCost());
    }
}`,
      solution: `interface Beverage {
    String getDescription();
    double getCost();
}

class SimpleCoffee implements Beverage {
    @Override public String getDescription() { return "Qora Qahva"; }
    @Override public double getCost() { return 3.0; }
}

abstract class CoffeeDecorator implements Beverage {
    protected Beverage decorated;
    public CoffeeDecorator(Beverage b) { this.decorated = b; }
    @Override public String getDescription() { return decorated.getDescription(); }
    @Override public double getCost() { return decorated.getCost(); }
}

class MilkDecorator extends CoffeeDecorator {
    public MilkDecorator(Beverage b) { super(b); }
    @Override public String getDescription() { return super.getDescription() + " + Sut"; }
    @Override public double getCost() { return super.getCost() + 0.5; }
}

class SyrupDecorator extends CoffeeDecorator {
    public SyrupDecorator(Beverage b) { super(b); }
    @Override public String getDescription() { return super.getDescription() + " + Vanil Sirop"; }
    @Override public double getCost() { return super.getCost() + 1.0; }
}

class Main {
    public static void main(String[] args) {
        Beverage order = new SimpleCoffee();
        order = new MilkDecorator(order);
        order = new SyrupDecorator(order);

        System.out.println("Tarkib: " + order.getDescription());
        System.out.println("Yakuniy narx: $" + order.getCost());
    }
}`,
      detailedSolution: {
        theory: "Decorator Pattern (GoF Structural) — obyektga yangi xususiyatlarni merosxo'rliksiz, 'wrapping' (o'rab olish) orqali dinamik qo'shish imkonini beradi. Har bir dekorator ham xuddi shu interfeysni amalga oshiradi.",
        theoryEn: "Decorator pattern dynamically attaches additional responsibilities to objects without sub-classing explosion.",
        cleanCode: `Beverage order = new SimpleCoffee();
order = new MilkDecorator(order);
order = new SyrupDecorator(order);`,
        breakdown: [
          "`CoffeeDecorator` `Beverage` ni amalga oshiradi va ichida `Beverage` ni saqlaydi.",
          "`super.getCost() + 0.5`: Zanjir bo'yicha oldingi qatlamlar narxini chaqirib, o'z qo'shimchasini qo'shadi."
        ],
        pitfalls: "Dekoratorda ichki o'ralgan obyektni chaqirmasdan o'z narxini qaytarish (oldigi narxlar yo'qolib qoladi).",
        cw2Viva: "Westminster CW2 assessment mezonida 'Structural Pattern' uchun to'liq 9 ball ajratilgan. Decorator buning uchun eng a'lo tanlovdir!"
      }
    },
    {
      id: 5,
      title: {
        uz: "5. Structural Pattern: Adapter (Tashqi Tizimga Moslash)",
        en: "5. Structural Pattern: Adapter Pattern"
      },
      scenario: {
        uz: "Eski bank tizimi `makeOldTransaction(int cents)` metodiga ega. Bizning yangi dastur esa `pay(double dollars)` kutadi. Adapter orqali bu ikkisini bog'lang.",
        en: "Implement Adapter pattern translating dollar requests into legacy cent transactions."
      },
      requirements: {
        classes: ["ModernPayment", "LegacyBankApi", "BankPaymentAdapter"],
        methods: ["pay"]
      },
      starterCode: `interface ModernPayment {
    void pay(double dollars);
}

class LegacyBankApi {
    public void makeOldTransaction(int cents) {
        System.out.println("🏛️ Eski bank protokoli bilan to'landi: " + cents + " sent");
    }
}

// Adapter klassi
class BankPaymentAdapter implements ModernPayment {
    private LegacyBankApi legacyBank;

    public BankPaymentAdapter(LegacyBankApi bank) {
        this.legacyBank = bank;
    }

    @Override
    public void pay(double dollars) {
        int cents = (int) (dollars * 100);
        legacyBank.makeOldTransaction(cents);
    }
}

class Main {
    public static void main(String[] args) {
        ModernPayment payment = new BankPaymentAdapter(new LegacyBankApi());
        payment.pay(15.50); // $15.50 -> 1550 sent
    }
}`,
      solution: `interface ModernPayment {
    void pay(double dollars);
}

class LegacyBankApi {
    public void makeOldTransaction(int cents) {
        System.out.println("🏛️ Eski bank protokoli bilan to'landi: " + cents + " sent");
    }
}

class BankPaymentAdapter implements ModernPayment {
    private LegacyBankApi legacyBank;

    public BankPaymentAdapter(LegacyBankApi bank) {
        this.legacyBank = bank;
    }

    @Override
    public void pay(double dollars) {
        int cents = (int) (dollars * 100);
        legacyBank.makeOldTransaction(cents);
    }
}

class Main {
    public static void main(String[] args) {
        ModernPayment payment = new BankPaymentAdapter(new LegacyBankApi());
        payment.pay(15.50);
    }
}`,
      detailedSolution: {
        theory: "Adapter Pattern (GoF Structural) — bir-biriga mos kelmaydigan ikkita interfeysni oraliq tarjimon kabi bog'laydi. Tashqi kutubxonalar yoki eski API larni o'zgartirmasdan loyihaga kiritishga yordam beradi.",
        theoryEn: "Adapter translates the interface of a class into another interface clients expect, enabling incompatible components to collaborate.",
        cleanCode: `ModernPayment payment = new BankPaymentAdapter(new LegacyBankApi());
payment.pay(15.50);`,
        breakdown: [
          "`BankPaymentAdapter implements ModernPayment`: Yangi interfeys talabini qondiradi.",
          "`dollars * 100`: Dollar summasini eski tizim talab qiladigan sentlarga konvertatsiya qiladi."
        ],
        pitfalls: "Eski kutubxona kodini buzib o'zgartirishga urinish (agar u uchinchi tomon yopiq jar bo'lsa buni qilib bo'lmaydi).",
        cw2Viva: "Viva imtihonida: 'Adapter va Decorator farqi nima?' Adapter interfeysni boshqa interfeysga moslashtiradi; Decorator esa interfeysni o'zgartirmasdan funksionalini kengaytiradi."
      }
    },
    {
      id: 6,
      title: {
        uz: "6. Behavioural Pattern: Strategy (Dinamik Chegirmalar)",
        en: "6. Behavioural Pattern: Strategy Pattern"
      },
      scenario: {
        uz: "Buyurtma berish paytida mijoz talaba bo'lsa 15% chegirma, yangi yil aksiyasida $5 sobit chegirma qo'llansin. `Strategy` patterni orqali hisoblang.",
        en: "Implement GoF Strategy pattern switching discount algorithms dynamically at runtime."
      },
      requirements: {
        classes: ["DiscountStrategy", "StudentDiscount", "HolidayDiscount", "OrderContext"],
        methods: ["applyDiscount"]
      },
      starterCode: `interface DiscountStrategy {
    double applyDiscount(double price);
}

class StudentDiscount implements DiscountStrategy {
    @Override public double applyDiscount(double price) {
        return price * 0.85; // 15% chegirma
    }
}

class HolidayDiscount implements DiscountStrategy {
    @Override public double applyDiscount(double price) {
        return Math.max(0, price - 5.0); // $5 chegirma
    }
}

class OrderContext {
    private double baseTotal;
    private DiscountStrategy strategy;

    public OrderContext(double total, DiscountStrategy strategy) {
        this.baseTotal = total;
        this.strategy = strategy;
    }

    public void setStrategy(DiscountStrategy newStrategy) {
        this.strategy = newStrategy;
    }

    public double calculateFinalTotal() {
        return strategy.applyDiscount(baseTotal);
    }
}

class Main {
    public static void main(String[] args) {
        OrderContext order = new OrderContext(40.0, new StudentDiscount());
        System.out.println("Talaba narxi: $" + order.calculateFinalTotal());

        order.setStrategy(new HolidayDiscount());
        System.out.println("Bayram narxi: $" + order.calculateFinalTotal());
    }
}`,
      solution: `interface DiscountStrategy {
    double applyDiscount(double price);
}

class StudentDiscount implements DiscountStrategy {
    @Override public double applyDiscount(double price) {
        return price * 0.85;
    }
}

class HolidayDiscount implements DiscountStrategy {
    @Override public double applyDiscount(double price) {
        return Math.max(0, price - 5.0);
    }
}

class OrderContext {
    private double baseTotal;
    private DiscountStrategy strategy;

    public OrderContext(double total, DiscountStrategy strategy) {
        this.baseTotal = total;
        this.strategy = strategy;
    }

    public void setStrategy(DiscountStrategy newStrategy) {
        this.strategy = newStrategy;
    }

    public double calculateFinalTotal() {
        return strategy.applyDiscount(baseTotal);
    }
}

class Main {
    public static void main(String[] args) {
        OrderContext order = new OrderContext(40.0, new StudentDiscount());
        System.out.println("Talaba narxi: $" + order.calculateFinalTotal());

        order.setStrategy(new HolidayDiscount());
        System.out.println("Bayram narxi: $" + order.calculateFinalTotal());
    }
}`,
      detailedSolution: {
        theory: "Strategy Pattern (GoF Behavioural) — har bir algoritmni alohida klassga inkapsulyatsiya qilib, ularni bir-biriga almashtirish imkonini beradi. Dastur ishlash paytida `setStrategy` orqali chegirma darhol o'zgartiriladi.",
        theoryEn: "Strategy defines a family of algorithms, encapsulating each one and making them interchangeable at runtime.",
        cleanCode: `order.setStrategy(new HolidayDiscount());
System.out.println(order.calculateFinalTotal());`,
        breakdown: [
          "`OrderContext` chegirma qanday hisoblanishini bilmaydi, u faqat strategiyani ishga tushiradi.",
          "Dasturchi yangi chegirma kiritganda eski klasslarga umuman tegmaydi (Open-Closed)."
        ],
        pitfalls: "Narx 0 dan kam bo'lib ketmasligi uchun `Math.max(0, ...)` tekshiruvini qo'yishni unutmang.",
        cw2Viva: "Westminster CW2 assessment mezonida 'Behavioural Pattern' uchun 9 ball ajratilgan."
      }
    },
    {
      id: 7,
      title: {
        uz: "7. Behavioural Pattern: Observer (Xabarnomalar & Status)",
        en: "7. Behavioural Pattern: Observer Pattern"
      },
      scenario: {
        uz: "Buyurtma holati 'TAYYOR' bo'lganda, oshxona ekrani (`KitchenScreen`) va mijoz telefoni (`CustomerNotifier`) bir vaqtda avtomatik xabardor qilinsin.",
        en: "Implement Observer pattern notifying kitchen and customer when order status mutates."
      },
      requirements: {
        classes: ["OrderObserver", "OrderSubject", "KitchenScreen"],
        methods: ["notifyObservers", "setStatus"]
      },
      starterCode: `import java.util.ArrayList;
import java.util.List;

interface OrderObserver {
    void onStatusChanged(String newStatus);
}

class KitchenScreen implements OrderObserver {
    @Override public void onStatusChanged(String newStatus) {
        System.out.println("👨‍🍳 Oshxona Ekrani: Buyurtma holati -> " + newStatus);
    }
}

class OrderSubject {
    private List<OrderObserver> observers = new ArrayList<>();
    private String status = "QABUL QILINDI";

    public void attach(OrderObserver o) { observers.add(o); }

    public void setStatus(String newStatus) {
        this.status = newStatus;
        notifyObservers();
    }

    private void notifyObservers() {
        for (OrderObserver o : observers) {
            o.onStatusChanged(this.status);
        }
    }
}

class Main {
    public static void main(String[] args) {
        OrderSubject order = new OrderSubject();
        order.attach(new KitchenScreen());

        order.setStatus("TAYYORLANMOQDA");
        order.setStatus("TAYYOR! Olib ketishingiz mumkin!");
    }
}`,
      solution: `import java.util.ArrayList;
import java.util.List;

interface OrderObserver {
    void onStatusChanged(String newStatus);
}

class KitchenScreen implements OrderObserver {
    @Override public void onStatusChanged(String newStatus) {
        System.out.println("👨‍🍳 Oshxona Ekrani: Buyurtma holati -> " + newStatus);
    }
}

class OrderSubject {
    private List<OrderObserver> observers = new ArrayList<>();
    private String status = "QABUL QILINDI";

    public void attach(OrderObserver o) { observers.add(o); }

    public void setStatus(String newStatus) {
        this.status = newStatus;
        notifyObservers();
    }

    private void notifyObservers() {
        for (OrderObserver o : observers) {
            o.onStatusChanged(this.status);
        }
    }
}

class Main {
    public static void main(String[] args) {
        OrderSubject order = new OrderSubject();
        order.attach(new KitchenScreen());

        order.setStatus("TAYYORLANMOQDA");
        order.setStatus("TAYYOR! Olib ketishingiz mumkin!");
    }
}`,
      detailedSolution: {
        theory: "Observer Pattern (GoF Behavioural) — bir obyektning (Subject) holati o'zgarganda barcha obunachilarga (Observers) avtomatik xabar beruvchi 'Publish-Subscribe' arxitekturasidir.",
        theoryEn: "Observer defines a one-to-many dependency so that when one object changes state, all its dependents are notified automatically.",
        cleanCode: `order.attach(new KitchenScreen());
order.setStatus("TAYYOR");`,
        breakdown: [
          "`List<OrderObserver>`: Barcha qiziquvchilar ro'yxati.",
          "`notifyObservers()`: Siklda har bir obunachining `onStatusChanged` metodini chaqiradi."
        ],
        pitfalls: "Obunachilar ko'payib ketganda xotirani bo'shatish uchun `detach(observer)` metodini ham qo'yish tavsiya etiladi.",
        cw2Viva: "Telegram botlari va GUI tugmalaridagi `addActionListener` aynan Observer patterni asosida ishlaydi."
      }
    },
    {
      id: 8,
      title: {
        uz: "8. Clean Code: Single Responsibility (SRP)",
        en: "8. Clean Code: Single Responsibility Principle"
      },
      scenario: {
        uz: "Bitta klass hamma ishni qilmasligi kerak! `Order` faqat ma'lumot saqlasin, kvitansiya chop etish esa `ReceiptPrinter` klassiga yuklatilsin.",
        en: "Enforce Single Responsibility Principle separating order data from formatting logic."
      },
      requirements: {
        classes: ["Order", "ReceiptPrinter"],
        methods: ["printReceipt"]
      },
      starterCode: `class Order {
    private String item;
    private double price;

    public Order(String item, double price) {
        this.item = item;
        this.price = price;
    }

    public String getItem() { return item; }
    public double getPrice() { return price; }
}

// Alohida chop etuvchi klass (SRP)
class ReceiptPrinter {
    public void printReceipt(Order order) {
        System.out.println("🧾 CHEK: " + order.getItem() + " | Narx: $" + order.getPrice());
    }
}

class Main {
    public static void main(String[] args) {
        Order o = new Order("Espresso", 3.0);
        ReceiptPrinter printer = new ReceiptPrinter();
        printer.printReceipt(o);
    }
}`,
      solution: `class Order {
    private String item;
    private double price;

    public Order(String item, double price) {
        this.item = item;
        this.price = price;
    }

    public String getItem() { return item; }
    public double getPrice() { return price; }
}

class ReceiptPrinter {
    public void printReceipt(Order order) {
        System.out.println("🧾 CHEK: " + order.getItem() + " | Narx: $" + order.getPrice());
    }
}

class Main {
    public static void main(String[] args) {
        Order o = new Order("Espresso", 3.0);
        ReceiptPrinter printer = new ReceiptPrinter();
        printer.printReceipt(o);
    }
}`,
      detailedSolution: {
        theory: "Single Responsibility Principle (SOLID ning birinchi qoidasi) — har bir klass faqat bitta aniq vazifaga ega bo'lishi va faqat bitta sabab bilan o'zgarishi kerak.",
        theoryEn: "Single Responsibility states a class should have one, and only one, reason to change, separating domain state from presentation concerns.",
        cleanCode: `ReceiptPrinter printer = new ReceiptPrinter();
printer.printReceipt(order);`,
        breakdown: [
          "`Order`: Ma'lumotlarni saqlaydi.",
          "`ReceiptPrinter`: Chop etish va formatlashga javob beradi."
        ],
        pitfalls: "Barcha chop etish, faylga yozish va hisob-kitobni bitta 'God Object' Order klassiga tiqish.",
        cw2Viva: "Viva'da professor sizdan: 'Klasslaringiz SRP ga mos keladimi?' deb so'raydi. Siz ushbu ajratishni tushuntirasiz."
      }
    },
    {
      id: 9,
      title: {
        uz: "9. CW2 Kurs Ishi Menyu Xizmati (MenuManager)",
        en: "9. CW2 MenuManager Architecture"
      },
      scenario: {
        uz: "Kurs ishingizning boshqaruv markazi: `MenuManager` klassi mavjud ichimliklar ro'yxatini (`List<String>`) saqlasin va yangi taom qo'shish imkonini bersin.",
        en: "Implement `MenuManager` maintaining active catalog items."
      },
      requirements: {
        classes: ["MenuManager"],
        methods: ["addItem", "displayMenu"]
      },
      starterCode: `import java.util.ArrayList;
import java.util.List;

class MenuManager {
    private List<String> menuItems = new ArrayList<>();

    public void addItem(String item) {
        menuItems.add(item);
    }

    public void displayMenu() {
        System.out.println("=== KAFE MENYUSI ===");
        for (int i = 0; i < menuItems.size(); i++) {
            System.out.println((i + 1) + ". " + menuItems.get(i));
        }
    }
}

class Main {
    public static void main(String[] args) {
        MenuManager menu = new MenuManager();
        menu.addItem("Americano ($3.0)");
        menu.addItem("Latte ($4.5)");
        menu.addItem("Cheesecake ($5.0)");
        menu.displayMenu();
    }
}`,
      solution: `import java.util.ArrayList;
import java.util.List;

class MenuManager {
    private List<String> menuItems = new ArrayList<>();

    public void addItem(String item) {
        menuItems.add(item);
    }

    public void displayMenu() {
        System.out.println("=== KAFE MENYUSI ===");
        for (int i = 0; i < menuItems.size(); i++) {
            System.out.println((i + 1) + ". " + menuItems.get(i));
        }
    }
}

class Main {
    public static void main(String[] args) {
        MenuManager menu = new MenuManager();
        menu.addItem("Americano ($3.0)");
        menu.addItem("Latte ($4.5)");
        menu.addItem("Cheesecake ($5.0)");
        menu.displayMenu();
    }
}`,
      detailedSolution: {
        theory: "Service Layer arxitekturasi domen modellarini boshqarish va foydalanuvchi konsol menyusi bilan bog'lash uchun xizmat qiladi.",
        theoryEn: "A dedicated Service Layer orchestrates domain entities and isolates console I/O from core business rules.",
        cleanCode: `MenuManager menu = new MenuManager();
menu.addItem("Latte ($4.5)");
menu.displayMenu();`,
        breakdown: [
          "`menuItems`: Dinamik ro'yxat bo'lib, xodim istalgancha yangi tovar qo'sha oladi.",
          "`displayMenu()`: Konsolga chiroyli raqamlangan ro'yxat chiqaradi."
        ],
        pitfalls: "Ro'yxatni public qilib qo'yish (boshqa klasslar tasodifan tozalab yuborishi mumkin).",
        cw2Viva: "CW2 talabida konsolda doimiy yangilanib turadigan menyu bo'lishi 9 ball beradi."
      }
    },
    {
      id: 10,
      title: {
        uz: "10. CW2 Grand Final: To'liq Java Konsol Buyurtma Ilovasi (50%)",
        en: "10. CW2 Grand Finale: Java Console Order Application (50%)"
      },
      scenario: {
        uz: "Westminster 5COSC018C Assessment 2 (50%) Grand Finali! Barcha 4 ta ustun (Inkapsulyatsiya, Merosxo'rlik, Abstraksiya, Polimorfizm) hamda 3 ta GoF Patternni (Factory, Decorator, Strategy) o'zida birlashtirgan to'liq Java buyurtma ilovasini ishga tushiring!",
        en: "Run the complete Westminster Assessment 2 Java console order architecture integrating OOP pillars and GoF patterns."
      },
      requirements: {
        classes: ["CoffeeItem", "CoffeeFactory", "MilkDecorator", "DiscountStrategy", "OrderApp"],
        methods: ["startApp"]
      },
      starterCode: `// ============================================================================
// WESTMINSTER CW2 (50%) ASSESSMENT 2 GRAND APPLICATION
// Creational (Factory), Structural (Decorator), Behavioural (Strategy)
// ============================================================================

// 1. Domain Model
abstract class CoffeeItem {
    protected String name;
    protected double basePrice;
    public CoffeeItem(String name, double basePrice) {
        this.name = name;
        this.basePrice = basePrice;
    }
    public abstract String getDescription();
    public abstract double getCost();
}

class EspressoItem extends CoffeeItem {
    public EspressoItem() { super("Espresso", 3.0); }
    @Override public String getDescription() { return name; }
    @Override public double getCost() { return basePrice; }
}

// 2. Creational Pattern: Factory
class CoffeeFactory {
    public static CoffeeItem orderCoffee(String type) {
        if ("espresso".equalsIgnoreCase(type)) return new EspressoItem();
        return new EspressoItem();
    }
}

// 3. Structural Pattern: Decorator
class MilkDecorator extends CoffeeItem {
    private CoffeeItem item;
    public MilkDecorator(CoffeeItem item) {
        super(item.name, item.basePrice);
        this.item = item;
    }
    @Override public String getDescription() { return item.getDescription() + " + Ko'pirtirilgan Sut"; }
    @Override public double getCost() { return item.getCost() + 0.50; }
}

// 4. Behavioural Pattern: Strategy
interface DiscountStrategy {
    double apply(double total);
}

class StudentDiscount implements DiscountStrategy {
    @Override public double apply(double total) { return total * 0.90; }
}

// 5. Main Application Controller
class OrderApp {
    public void startApp() {
        System.out.println("==========================================");
        System.out.println("☕ WIUT SMART COFFEE SHOP — KONSOL TIZIMI");
        System.out.println("==========================================");

        // Factory orqali yaratish
        CoffeeItem coffee = CoffeeFactory.orderCoffee("espresso");

        // Decorator orqali to'ldirish
        coffee = new MilkDecorator(coffee);

        System.out.println("Tanlangan ichimlik: " + coffee.getDescription());
        System.out.println("Dastlabki narx: $" + coffee.getCost());

        // Strategy orqali chegirma hisoblash
        DiscountStrategy strategy = new StudentDiscount();
        double finalPrice = strategy.apply(coffee.getCost());

        System.out.println("Talaba chegirmasi (10%): -$" + (coffee.getCost() - finalPrice));
        System.out.println("YAKUNIY TO'LOV: $" + finalPrice);
        System.out.println("==========================================");
        System.out.println("✅ BUYURTMA MUVAFFAQIYATLI CHOP ETILDI!");
    }
}

class Main {
    public static void main(String[] args) {
        OrderApp app = new OrderApp();
        app.startApp();
    }
}`,
      solution: `abstract class CoffeeItem {
    protected String name;
    protected double basePrice;
    public CoffeeItem(String name, double basePrice) {
        this.name = name;
        this.basePrice = basePrice;
    }
    public abstract String getDescription();
    public abstract double getCost();
}

class EspressoItem extends CoffeeItem {
    public EspressoItem() { super("Espresso", 3.0); }
    @Override public String getDescription() { return name; }
    @Override public double getCost() { return basePrice; }
}

class CoffeeFactory {
    public static CoffeeItem orderCoffee(String type) {
        if ("espresso".equalsIgnoreCase(type)) return new EspressoItem();
        return new EspressoItem();
    }
}

class MilkDecorator extends CoffeeItem {
    private CoffeeItem item;
    public MilkDecorator(CoffeeItem item) {
        super(item.name, item.basePrice);
        this.item = item;
    }
    @Override public String getDescription() { return item.getDescription() + " + Ko'pirtirilgan Sut"; }
    @Override public double getCost() { return item.getCost() + 0.50; }
}

interface DiscountStrategy {
    double apply(double total);
}

class StudentDiscount implements DiscountStrategy {
    @Override public double apply(double total) { return total * 0.90; }
}

class OrderApp {
    public void startApp() {
        System.out.println("==========================================");
        System.out.println("☕ WIUT SMART COFFEE SHOP — KONSOL TIZIMI");
        System.out.println("==========================================");

        CoffeeItem coffee = CoffeeFactory.orderCoffee("espresso");
        coffee = new MilkDecorator(coffee);

        System.out.println("Tanlangan ichimlik: " + coffee.getDescription());
        System.out.println("Dastlabki narx: $" + coffee.getCost());

        DiscountStrategy strategy = new StudentDiscount();
        double finalPrice = strategy.apply(coffee.getCost());

        System.out.println("Talaba chegirmasi (10%): -$" + (coffee.getCost() - finalPrice));
        System.out.println("YAKUNIY TO'LOV: $" + finalPrice);
        System.out.println("==========================================");
        System.out.println("✅ BUYURTMA MUVAFFAQIYATLI CHOP ETILDI!");
    }
}

class Main {
    public static void main(String[] args) {
        OrderApp app = new OrderApp();
        app.startApp();
    }
}`,
      detailedSolution: {
        theory: "TABRIKLAYMIZ, BO'LAJAK SENIOR JAVA ARCHITECT! Siz WIUT OOP (5COSC018C) fanining butun o'quv dasturini, barcha 60 ta amaliy bosqichni va Assessment 2 (50%) Kurs Ishining barcha rubrikalarini 100% muvaffaqiyatli tamomladingiz!",
        theoryEn: "CONGRATULATIONS, CHIEF JAVA ARCHITECT! You have mastered all 6 modules of Westminster Object-Oriented Programming, integrating all 4 OOP pillars and GoF design patterns into a complete, award-winning Assessment 2 coursework application.",
        cleanCode: `OrderApp app = new OrderApp();
app.startApp();`,
        breakdown: [
          "<code>CoffeeFactory</code>: Creational GoF Pattern (9 mark).",
          "<code>MilkDecorator</code>: Structural GoF Pattern (9 mark).",
          "<code>DiscountStrategy</code>: Behavioural GoF Pattern (9 mark).",
          "<code>CoffeeItem</code>: Abstraction & Inheritance (12 mark).",
          "<code>Encapsulation & Clean Code</code>: (12 mark).",
          "Barcha baholash mezonlari bo'yicha to'liq 50/50 ballik andoza!"
        ],
        pitfalls: "Endi faqat Git loglarni to'g'ri yuritish va README hisobotiga UML Class diagrammasini joylash qoldi.",
        cw2Viva: "Viva imtihonida komissiya oldida boshingizni baland ko'tarib, ushbu arxitekturani bemalol himoya qiling — natijangiz 70+ (First Class) bo'lishiga ishonamiz!"
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

    if (elBadge) elBadge.textContent = `6-Modul • ${ch.id}-Topshiriq`;
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
      if (ch.requirements.classes) reqHtml += `<li><strong>Klass/Interfeys:</strong> <code>${ch.requirements.classes.join(", ")}</code> tuzilsin.</li>`;
      if (ch.requirements.keywords) reqHtml += `<li><strong>Kalit so'zlar:</strong> <code>${ch.requirements.keywords.join(", ")}</code> qo'llansin.</li>`;
      if (ch.requirements.methods && ch.requirements.methods.length > 0) reqHtml += `<li><strong>Metodlar:</strong> <code>${ch.requirements.methods.join("(), ")}()</code> metodi e'lon qilinsin.</li>`;
      reqHtml += `<li>GoF Dizayn Patternlari va Clean Code qoidalariga rioya qiling.</li>`;
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