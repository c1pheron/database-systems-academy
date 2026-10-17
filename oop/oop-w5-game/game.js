// ============================================================================
// OOP ACADEMY — 5-Modul GAME LOGIC: INTERFEYSLAR & BO'SH BOG'LANISH (LOOSE COUPLING)
// Professor Ada's Interactive Java IDE Simulator • WIUT 5COSC018C
// ============================================================================

(function () {
  "use strict";

  const STORAGE_KEY = "WIUT_OOP_W5_PROGRESS";
  let currentLang = "uz";
  let currentQIndex = 0;
  let solvedQuestions = new Set();

  const CHALLENGES = [
    {
      id: 1,
      title: {
        uz: "1. Birinchi Java Interfeysi ('interface')",
        en: "1. First Java Interface Contract"
      },
      scenario: {
        uz: "Interfeys — klass nima qilishi kerakligini belgilovchi 100% shartnomadir. `Printable` interfeysini yarating va unga `void print();` metodini qo'shing.",
        en: "Declare pure abstract contract with `interface Printable { void print(); }`."
      },
      requirements: {
        classes: ["Printable"],
        methods: ["print"]
      },
      starterCode: `// Printable interfeysini e'lon qiling
interface Printable {
    void print();
}

class Invoice implements Printable {
    @Override
    public void print() {
        System.out.println("📄 To'lov kvitansiyasi chop etildi!");
    }
}

class Main {
    public static void main(String[] args) {
        Printable p = new Invoice();
        p.print();
    }
}`,
      solution: `interface Printable {
    void print();
}

class Invoice implements Printable {
    @Override
    public void print() {
        System.out.println("📄 To'lov kvitansiyasi chop etildi!");
    }
}

class Main {
    public static void main(String[] args) {
        Printable p = new Invoice();
        p.print();
    }
}`,
      detailedSolution: {
        theory: "Interfeys — klasslar o'rtasida shartnoma (contract) vazifasini bajaradi. U 'nima qilish kerak' degan savolga javob beradi, 'qanday qilish' esa uni `implements` qiluvchi klass zimmasiga yuklatiladi.",
        theoryEn: "Interfaces establish pure abstract behavioral specifications, decoupling method contracts from concrete implementations.",
        cleanCode: `interface Printable {
    void print();
}`,
        breakdown: [
          "<code>interface Printable</code>: Interfeys e'loni.",
          "<code>void print();</code>: Avtomatik ravishda `public abstract` hisoblanadi."
        ],
        pitfalls: "Interfeysni amalga oshirayotganda metod oldiga `public` so'zini yozmaslik (chunki interfeys metodlari doimo public).",
        cw2Viva: "Westminster CW2 baholash jadvalida GoF patternlari (Strategy, Observer, Factory) interfeyslarga tayanadi."
      }
    },
    {
      id: 2,
      title: {
        uz: "2. Ko'p Karrali Amalga Oshirish (Multiple Interfaces)",
        en: "2. Multiple Interface Implementation"
      },
      scenario: {
        uz: "Java'da bitta klass bir nechta interfeysni amalga oshirishi mumkin! `Report` klassi ham `Printable`, ham `Exportable` interfeyslarini `implements` qilsin.",
        en: "Implement multiple interfaces: `class Report implements Printable, Exportable`."
      },
      requirements: {
        classes: ["Printable", "Exportable", "Report"],
        methods: ["print", "exportToJson"],
        keywords: ["implements"]
      },
      starterCode: `interface Printable {
    void print();
}

interface Exportable {
    void exportToJson();
}

// Ikkala interfeysni implements qiling
class Report implements Printable, Exportable {
    @Override
    public void print() {
        System.out.println("Hisobot qog'ozda chop etildi");
    }

    @Override
    public void exportToJson() {
        System.out.println("Hisobot JSON formatga eksport qilindi");
    }
}

class Main {
    public static void main(String[] args) {
        Report rep = new Report();
        rep.print();
        rep.exportToJson();
    }
}`,
      solution: `interface Printable {
    void print();
}

interface Exportable {
    void exportToJson();
}

class Report implements Printable, Exportable {
    @Override
    public void print() {
        System.out.println("Hisobot qog'ozda chop etildi");
    }

    @Override
    public void exportToJson() {
        System.out.println("Hisobot JSON formatga eksport qilindi");
    }
}

class Main {
    public static void main(String[] args) {
        Report rep = new Report();
        rep.print();
        rep.exportToJson();
    }
}`,
      detailedSolution: {
        theory: "Java klasslar darajasida Multiple Inheritance (ko'p ota) ga ruxsat bermaydi (Diamond Problem xavfi tufayli), lekin Interfeyslar orqali ko'p karrali shartnomani bemalol amalga oshirish mumkin.",
        theoryEn: "Multiple interface implementation overcomes single-inheritance limitations without inheriting the fragile Diamond Problem ambiguity.",
        cleanCode: `class Report implements Printable, Exportable {
    @Override public void print() { ... }
    @Override public void exportToJson() { ... }
}`,
        breakdown: [
          "`implements Printable, Exportable`: Vergul bilan istalgancha interfeyslarni sanab o'tish mumkin.",
          "Klass har ikkala interfeysning barcha metodlarini to'liq yozishi shart."
        ],
        pitfalls: "Interfeyslardan birortasining metodi unutilsa, klass kompilyatsiya bo'lmaydi.",
        cw2Viva: "Viva savoli: 'Nega klasslarda multiple inheritance yo'q, lekin interfeyslarda bor?' Metodlar to'qnashuvi (Diamond Problem) bo'lmasligi uchun!"
      }
    },
    {
      id: 3,
      title: {
        uz: "3. 'default' Metodlar (Java 8+ Imkoniyati)",
        en: "3. Interface Default Methods"
      },
      scenario: {
        uz: "Mavjud klasslarni buzmasdan interfeysga tayyor metod qo'shish uchun `default void log()` sintaksisidan foydalaning.",
        en: "Augment interfaces without breaking implementers using `default void log()`."
      },
      requirements: {
        classes: ["Logger"],
        keywords: ["default"]
      },
      starterCode: `interface Logger {
    void log(String message);

    // default metod: tayyor tanaga ega
    default void logError(String err) {
        log("❌ [XATOLIK]: " + err);
    }
}

class ConsoleLogger implements Logger {
    @Override
    public void log(String message) {
        System.out.println(message);
    }
}

class Main {
    public static void main(String[] args) {
        Logger l = new ConsoleLogger();
        l.log("Oddiy xabar");
        l.logError("Serverga ulanib bo'lmadi");
    }
}`,
      solution: `interface Logger {
    void log(String message);

    default void logError(String err) {
        log("❌ [XATOLIK]: " + err);
    }
}

class ConsoleLogger implements Logger {
    @Override
    public void log(String message) {
        System.out.println(message);
    }
}

class Main {
    public static void main(String[] args) {
        Logger l = new ConsoleLogger();
        l.log("Oddiy xabar");
        l.logError("Serverga ulanib bo'lmadi");
    }
}`,
      detailedSolution: {
        theory: "Java 8 da kiritilgan `default` metodlar interfeys ichida tayyor realizatsiyani taqdim etadi. Bu eski klasslarni buzmasdan yangi metod qo'shish (Backward Compatibility) imkonini beradi.",
        theoryEn: "Default methods facilitate evolutionary API expansion without breaking backward compatibility for existing client implementers.",
        cleanCode: `default void logError(String err) {
    log("❌ [XATOLIK]: " + err);
}`,
        breakdown: [
          "`default` kalit so'zi interfeys metodiga tana `{ ... }` berishga imkon yaratadi.",
          "`ConsoleLogger` ushbu metodni qayta yozmasdan to'g'ridan-to'g'ri meros qilib oladi."
        ],
        pitfalls: "Default metod ichida obyekt maydonlariga murojaat qilib bo'lmaydi (chunki interfeysda non-static maydonlar yo'q).",
        cw2Viva: "Java Collections Framework (`List.sort()`, `Collection.stream()`) aynan default metodlar orqali kengaytirilgan."
      }
    },
    {
      id: 4,
      title: {
        uz: "4. Bo'sh Bog'lanish (Loose Coupling & Dependency Injection)",
        en: "4. Loose Coupling via Interface Injection"
      },
      scenario: {
        uz: "`NotificationService` aniq SMS yoki Email ga qattiq bog'lanmasligi kerak. Uni `Notifier` interfeysiga suyanadigan qilib bog'lang (Dependency Injection).",
        en: "Decouple services using constructor injection over interface contracts."
      },
      requirements: {
        classes: ["Notifier", "SmsNotifier", "EmailNotifier", "NotificationService"],
        methods: ["send"]
      },
      starterCode: `interface Notifier {
    void send(String msg);
}

class SmsNotifier implements Notifier {
    @Override public void send(String msg) {
        System.out.println("📱 SMS yuborildi: " + msg);
    }
}

class EmailNotifier implements Notifier {
    @Override public void send(String msg) {
        System.out.println("📧 Email yuborildi: " + msg);
    }
}

class NotificationService {
    // Aniq klassga emas, Interfeysga bog'lanamiz!
    private Notifier notifier;

    public NotificationService(Notifier notifier) {
        this.notifier = notifier;
    }

    public void notifyUser(String text) {
        notifier.send(text);
    }
}

class Main {
    public static void main(String[] args) {
        NotificationService service1 = new NotificationService(new SmsNotifier());
        service1.notifyUser("Buyurtmangiz qabul qilindi!");

        NotificationService service2 = new NotificationService(new EmailNotifier());
        service2.notifyUser("Chek pochtangizga tashlandi.");
    }
}`,
      solution: `interface Notifier {
    void send(String msg);
}

class SmsNotifier implements Notifier {
    @Override public void send(String msg) {
        System.out.println("📱 SMS yuborildi: " + msg);
    }
}

class EmailNotifier implements Notifier {
    @Override public void send(String msg) {
        System.out.println("📧 Email yuborildi: " + msg);
    }
}

class NotificationService {
    private Notifier notifier;

    public NotificationService(Notifier notifier) {
        this.notifier = notifier;
    }

    public void notifyUser(String text) {
        notifier.send(text);
    }
}

class Main {
    public static void main(String[] args) {
        NotificationService service1 = new NotificationService(new SmsNotifier());
        service1.notifyUser("Buyurtmangiz qabul qilindi!");

        NotificationService service2 = new NotificationService(new EmailNotifier());
        service2.notifyUser("Chek pochtangizga tashlandi.");
    }
}`,
      detailedSolution: {
        theory: "Dependency Inversion Principle (SOLID): 'Yuqori darajadagi modullar quyi modullarga emas, abstraksiyaga suyanishi kerak'. `NotificationService` SMS yoki Email qanday ishlashini bilmaydi, u faqat `Notifier` interfeysini taniydi.",
        theoryEn: "Dependency Inversion establishes loose coupling by injecting interface contracts rather than concrete implementations.",
        cleanCode: `public NotificationService(Notifier notifier) {
    this.notifier = notifier;
}`,
        breakdown: [
          "Xizmat qattiq bog'lanmagan (`new SmsNotifier()` ichida yozilmagan).",
          "Test qilish (Mocking) va kelajakda TelegramNotifier qo'shish juda oson."
        ],
        pitfalls: "Xizmat ichida `this.notifier = new SmsNotifier();` deb yozish — Dependency Injection ni yo'qotadi.",
        cw2Viva: "Westminster CW2 baholash mezonida 'Code Quality & Loose Coupling' uchun yuqori ball beriladi."
      }
    },
    {
      id: 5,
      title: {
        uz: "5. Interfeyslarda Statik Metodlar",
        en: "5. Interface Static Helper Methods"
      },
      scenario: {
        uz: "Interfeys ichida yordamchi fabrika metodlarini `static` qilib yozish mumkin. `Payment.createDefaultPayment()` static metodini e'lon qiling.",
        en: "Expose utility factory helpers via `static` methods inside interfaces."
      },
      requirements: {
        classes: ["Payment"],
        keywords: ["static", "interface"]
      },
      starterCode: `interface Payment {
    void pay(double amount);

    // static yordamchi metod
    static Payment createDefault() {
        return new CashPayment();
    }
}

class CashPayment implements Payment {
    @Override
    public void pay(double amount) {
        System.out.println("💵 Naqd pulda to'landi: $" + amount);
    }
}

class Main {
    public static void main(String[] args) {
        Payment p = Payment.createDefault();
        p.pay(50.0);
    }
}`,
      solution: `interface Payment {
    void pay(double amount);

    static Payment createDefault() {
        return new CashPayment();
    }
}

class CashPayment implements Payment {
    @Override
    public void pay(double amount) {
        System.out.println("💵 Naqd pulda to'landi: $" + amount);
    }
}

class Main {
    public static void main(String[] args) {
        Payment p = Payment.createDefault();
        p.pay(50.0);
    }
}`,
      detailedSolution: {
        theory: "Java 8 dan boshlab interfeyslar ichida `static` metodlar yozish mumkin. Bu alohida `PaymentHelper` yoki `PaymentFactory` klassini ochmasdan, to'g'ridan-to'g'ri interfeys orqali yordamchi amallarni bajarishga imkon beradi.",
        theoryEn: "Static interface methods package cohesive utility or factory logic directly inside the abstraction contract.",
        cleanCode: `static Payment createDefault() {
    return new CashPayment();
}`,
        breakdown: [
          "`Payment.createDefault()`: Hech qanday obyekt yaratmasdan to'g'ridan-to'g'ri interfeys nomi orqali chaqiriladi.",
          "Obyekt yaratish logikasini inkapsulyatsiya qiladi."
        ],
        pitfalls: "Static metodlar voris klasslar tomonidan `@Override` qilinmaydi.",
        cw2Viva: "Java 8 dagi `Comparator.naturalOrder()`, `Stream.of()` aynan interfeysdagi static metodlardir."
      }
    },
    {
      id: 6,
      title: {
        uz: "6. Interfeys Konstandalari (public static final)",
        en: "6. Implicit Constants in Interfaces"
      },
      scenario: {
        uz: "Interfeys ichidagi barcha o'zgaruvchilar avtomatik tarzda `public static final` bo'ladi. `TaxCalculator` interfeysiga soliq stavkasini qo'shing.",
        en: "Understand implicit constants in interfaces: `double VAT_RATE = 0.12;`."
      },
      requirements: {
        classes: ["TaxCalculator"]
      },
      starterCode: `interface TaxCalculator {
    // Avtomatik public static final
    double VAT_RATE = 0.12; // 12% QQS

    default double calculateTax(double amount) {
        return amount * VAT_RATE;
    }
}

class RestaurantOrder implements TaxCalculator {}

class Main {
    public static void main(String[] args) {
        RestaurantOrder order = new RestaurantOrder();
        System.out.println("QQS summasi: $" + order.calculateTax(200.0));
    }
}`,
      solution: `interface TaxCalculator {
    double VAT_RATE = 0.12;

    default double calculateTax(double amount) {
        return amount * VAT_RATE;
    }
}

class RestaurantOrder implements TaxCalculator {}

class Main {
    public static void main(String[] args) {
        RestaurantOrder order = new RestaurantOrder();
        System.out.println("QQS summasi: $" + order.calculateTax(200.0));
    }
}`,
      detailedSolution: {
        theory: "Interfeysda e'lon qilingan har qanday maydon (hatto kalit so'zlari yozilmagan bo'lsa ham) avtomatik ravishda konstanta hisoblanadi. Uni keyinchalik o'zgartirib bo'lmaydi.",
        theoryEn: "Fields declared inside interfaces are implicitly public, static, and final, serving as immutable constants.",
        cleanCode: `double VAT_RATE = 0.12;`,
        breakdown: [
          "`VAT_RATE` o'zgarmas doimiy ko'rsatkich.",
          "Barcha amalga oshiruvchi klasslar ushbu yagona konstantadan foydalanadi."
        ],
        pitfalls: "Interfeysda o'zgaruvchan holat (non-final field) saqlashga urinish — Java kompilyatori buni qat'iy taqiqlaydi.",
        cw2Viva: "Global konstantalarni interfeysga tiqish 'Constant Interface Anti-pattern' deb atalishi mumkin, shuning uchun faqat shu shartnomaga tegishli bo'lgan konstantalar qo'yilishi kerak."
      }
    },
    {
      id: 7,
      title: {
        uz: "7. Obyektlarni Saralash: 'Comparable' Interfeysi",
        en: "7. Sorting Objects with 'Comparable<T>'"
      },
      scenario: {
        uz: "Buyurtmalarni narxi bo'yicha avtomatik saralash uchun Java standart `Comparable<Product>` interfeysini va uning `compareTo(Product other)` metodini realizatsiya qiling.",
        en: "Implement standard Java `Comparable<Product>` to enable automatic sorting."
      },
      requirements: {
        classes: ["Product"],
        methods: ["compareTo"],
        keywords: ["implements"]
      },
      starterCode: `class Product implements Comparable<Product> {
    String name;
    double price;

    public Product(String name, double price) {
        this.name = name;
        this.price = price;
    }

    @Override
    public int compareTo(Product other) {
        return Double.compare(this.price, other.price);
    }
}

class Main {
    public static void main(String[] args) {
        Product p1 = new Product("Choy", 5.0);
        Product p2 = new Product("Qahva", 12.0);
        System.out.println("Taqqoslash natijasi: " + p1.compareTo(p2));
    }
}`,
      solution: `class Product implements Comparable<Product> {
    String name;
    double price;

    public Product(String name, double price) {
        this.name = name;
        this.price = price;
    }

    @Override
    public int compareTo(Product other) {
        return Double.compare(this.price, other.price);
    }
}

class Main {
    public static void main(String[] args) {
        Product p1 = new Product("Choy", 5.0);
        Product p2 = new Product("Qahva", 12.0);
        System.out.println("Taqqoslash natijasi: " + p1.compareTo(p2));
    }
}`,
      detailedSolution: {
        theory: "`Comparable<T>` interfeysi obyektlarning tabiiy tartibini (Natural Ordering) belgilaydi. `Double.compare(a, b)` manfiy (a < b), 0 (a == b) yoki musbat (a > b) qiymat qaytaradi.",
        theoryEn: "`Comparable` defines natural ordering, enabling Java's sort algorithms (`Collections.sort`) to sort custom domain entities effortlessly.",
        cleanCode: `public int compareTo(Product other) {
    return Double.compare(this.price, other.price);
}`,
        breakdown: [
          "`compareTo` orqali `Collections.sort(products)` chaqirilganda ro'yxat avtomatik narx bo'yicha tartiblanadi.",
          "Clean Code konvensiyasiga mos."
        ],
        pitfalls: "Narxlarni to'g'ridan-to'g'ri `(int)(this.price - other.price)` qilish xatolikka olib kelishi mumkin (masalan 12.5 va 12.2 bo'lganda 0 qaytib qoladi). Doimo `Double.compare` ishlating!",
        cw2Viva: "Kurs ishingizda buyurtmalarni narxi yoki vaqti bo'yicha saralab chiqarish (Sorting Feature) 6 ball beradi."
      }
    },
    {
      id: 8,
      title: {
        uz: "8. Interfeyslar o'rtasida Merosxo'rlik ('extends')",
        en: "8. Interface Inheritance with 'extends'"
      },
      scenario: {
        uz: "Bitta interfeys boshqa interfeysdan meros olishi mumkin! `AdvancedNotifier extends BasicNotifier` qilib yangi metod qo'shing.",
        en: "Interfaces extend other interfaces to build modular layered contracts."
      },
      requirements: {
        classes: ["BasicNotifier", "AdvancedNotifier"],
        keywords: ["extends", "interface"]
      },
      starterCode: `interface BasicNotifier {
    void sendText(String text);
}

// AdvancedNotifier BasicNotifier dan voris olsin
interface AdvancedNotifier extends BasicNotifier {
    void sendWithAttachment(String text, String file);
}

class SuperNotificationSystem implements AdvancedNotifier {
    @Override public void sendText(String text) {
        System.out.println("Matn: " + text);
    }
    @Override public void sendWithAttachment(String text, String file) {
        System.out.println("Matn: " + text + " | Fayl: " + file);
    }
}

class Main {
    public static void main(String[] args) {
        AdvancedNotifier n = new SuperNotificationSystem();
        n.sendText("Salom!");
        n.sendWithAttachment("Hisobot", "doc.pdf");
    }
}`,
      solution: `interface BasicNotifier {
    void sendText(String text);
}

interface AdvancedNotifier extends BasicNotifier {
    void sendWithAttachment(String text, String file);
}

class SuperNotificationSystem implements AdvancedNotifier {
    @Override public void sendText(String text) {
        System.out.println("Matn: " + text);
    }
    @Override public void sendWithAttachment(String text, String file) {
        System.out.println("Matn: " + text + " | Fayl: " + file);
    }
}

class Main {
    public static void main(String[] args) {
        AdvancedNotifier n = new SuperNotificationSystem();
        n.sendText("Salom!");
        n.sendWithAttachment("Hisobot", "doc.pdf");
    }
}`,
      detailedSolution: {
        theory: "Interfeyslar ham klasslar kabi `extends` orqali kengaytiriladi. Bola interfeys ota interfeysning barcha metodlarini o'zida birlashtiradi.",
        theoryEn: "Interface inheritance synthesizes cohesive contract tiers, enabling specialized extensions without polluting core abstractions.",
        cleanCode: `interface AdvancedNotifier extends BasicNotifier {
    void sendWithAttachment(String text, String file);
}`,
        breakdown: [
          "`AdvancedNotifier` ni `implements` qilgan klass har ikkala metodni yozishi shart.",
          "Interfeys bir nechta interfeysdan bir vaqtda `extends` qila oladi: `interface C extends A, B`."
        ],
        pitfalls: "Interfeys klassdan `extends` qila olmaydi, faqat boshqa interfeysdan `extends` qilishi mumkin.",
        cw2Viva: "Interface Segregation Principle (SOLID): Katta interfeyslarni kichik va modulli interfeyslarga bo'lish tavsiya etiladi."
      }
    },
    {
      id: 9,
      title: {
        uz: "9. Funksional Interfeys va Lambda (@FunctionalInterface)",
        en: "9. Functional Interface & Lambdas"
      },
      scenario: {
        uz: "Faqat bitta abstrakt metodga ega interfeys — Funksional interfeys deyiladi. `DiscountCalculator` interfeysini yarating va uni Lambda ifodasi orqali ishlating.",
        en: "Declare `@FunctionalInterface` and instantiate cleanly using Java Lambdas."
      },
      requirements: {
        classes: ["DiscountCalculator"],
        keywords: ["@FunctionalInterface", "->"]
      },
      starterCode: `@FunctionalInterface
interface DiscountCalculator {
    double apply(double price);
}

class Main {
    public static void main(String[] args) {
        // Lambda orqali 15% chegirma
        DiscountCalculator disc = price -> price * 0.85;

        System.out.println("Chegirmali narx: $" + disc.apply(100.0));
    }
}`,
      solution: `@FunctionalInterface
interface DiscountCalculator {
    double apply(double price);
}

class Main {
    public static void main(String[] args) {
        DiscountCalculator disc = price -> price * 0.85;

        System.out.println("Chegirmali narx: $" + disc.apply(100.0));
    }
}`,
      detailedSolution: {
        theory: "Java 8 Lambdalar faqat bitta abstrakt metodga ega interfeyslar bilan ishlaydi. Bu kodni 5 qatorli klass ochmasdan, 1 qatorda yozish (Modern Java) imkonini beradi.",
        theoryEn: "Functional interfaces permit concise lambda expression instantiation, streamlining boilerplate anonymous classes.",
        cleanCode: `DiscountCalculator disc = price -> price * 0.85;`,
        breakdown: [
          "`@FunctionalInterface`: Kompilyatorga faqat 1 ta metod bo'lishini qat'iy nazorat qilishni aytadi.",
          "`price -> price * 0.85`: Lambda funksiyasi."
        ],
        pitfalls: "Interfeysga ikkinchi abstrakt metod qo'shilsa, `@FunctionalInterface` kompilyatsiya xatosi beradi.",
        cw2Viva: "Viva savoli: 'Lambda nima?' Bu bitta metodli funksional interfeysning anonim realizatsiyasidir."
      }
    },
    {
      id: 10,
      title: {
        uz: "10. CW2 Kurs Ishi Modeli: DiscountStrategy Interfeysi",
        en: "10. CW2 DiscountStrategy Interface Model"
      },
      scenario: {
        uz: "Assessment 2 (50%) Kurs Ishidagi GoF Behavioural Pattern (9 ball) uchun fundament: `DiscountStrategy` interfeysini (`double applyDiscount(double subtotal);`) yarating va `StudentDiscount` (10%) hamda `NoDiscount` strategiyalarini amalga oshiring!",
        en: "Build full CW2 Assessment 2 Strategy pattern: `DiscountStrategy` interface with `StudentDiscount` and `NoDiscount` implementations."
      },
      requirements: {
        classes: ["DiscountStrategy", "StudentDiscount", "NoDiscount"],
        methods: ["applyDiscount"],
        keywords: ["interface", "implements"]
      },
      starterCode: `interface DiscountStrategy {
    double applyDiscount(double subtotal);
}

class StudentDiscount implements DiscountStrategy {
    @Override
    public double applyDiscount(double subtotal) {
        return subtotal * 0.90; // 10% talaba chegirmasi
    }
}

class NoDiscount implements DiscountStrategy {
    @Override
    public double applyDiscount(double subtotal) {
        return subtotal;
    }
}

class Order {
    private double total;
    private DiscountStrategy strategy;

    public Order(double total, DiscountStrategy strategy) {
        this.total = total;
        this.strategy = strategy;
    }

    public double getFinalPrice() {
        return strategy.applyDiscount(total);
    }
}

class Main {
    public static void main(String[] args) {
        Order o1 = new Order(50.0, new StudentDiscount());
        Order o2 = new Order(50.0, new NoDiscount());

        System.out.println("Talaba buyurtmasi: $" + o1.getFinalPrice());
        System.out.println("Oddiy buyurtma: $" + o2.getFinalPrice());
    }
}`,
      solution: `interface DiscountStrategy {
    double applyDiscount(double subtotal);
}

class StudentDiscount implements DiscountStrategy {
    @Override
    public double applyDiscount(double subtotal) {
        return subtotal * 0.90;
    }
}

class NoDiscount implements DiscountStrategy {
    @Override
    public double applyDiscount(double subtotal) {
        return subtotal;
    }
}

class Order {
    private double total;
    private DiscountStrategy strategy;

    public Order(double total, DiscountStrategy strategy) {
        this.total = total;
        this.strategy = strategy;
    }

    public double getFinalPrice() {
        return strategy.applyDiscount(total);
    }
}

class Main {
    public static void main(String[] args) {
        Order o1 = new Order(50.0, new StudentDiscount());
        Order o2 = new Order(50.0, new NoDiscount());

        System.out.println("Talaba buyurtmasi: $" + o1.getFinalPrice());
        System.out.println("Oddiy buyurtma: $" + o2.getFinalPrice());
    }
}`,
      detailedSolution: {
        theory: "Ajoyib g'alaba! Siz 5-Modulni to'liq tugatdingiz. Westminster 5COSC018C Coursework (50%) talabidagi 'Behavioural Pattern' (9 ball) uchun eng mashhur Strategy Patternini noldan professional tarzda qura oldingiz!",
        theoryEn: "Congratulations! You have mastered Interfaces, loose coupling, dependency injection, and delivered the full GoF Strategy pattern required for CW2 Assessment 2.",
        cleanCode: `interface DiscountStrategy {
    double applyDiscount(double subtotal);
}`,
        breakdown: [
          "`DiscountStrategy`: Umumiy chegirma interfeysi.",
          "`StudentDiscount`, `NoDiscount`: Almashtiriluvchi polimorfik algoritmlar.",
          "`Order` klassi strategiyani konstruktor orqali qabul qiladi (Dependency Injection)."
        ],
        pitfalls: "6-modulda bu model Creational (Factory, Singleton, Builder) va Structural (Decorator) patternlar bilan to'liq birlashtiriladi.",
        cw2Viva: "Viva imtihonida: 'Nega Strategy patternni tanladingiz?' deb so'raladi. Javob: Kelajakda yangi chegirmalar (VIP, Bayram) qo'shilganda Order klassini o'zgartirmasdan, Open-Closed prinsipiga amal qilish uchun!"
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

    if (elBadge) elBadge.textContent = `5-Modul • ${ch.id}-Topshiriq`;
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
      if (ch.requirements.classes) reqHtml += `<li><strong>Interfeys/Klass:</strong> <code>${ch.requirements.classes.join(", ")}</code> tuzilsin.</li>`;
      if (ch.requirements.keywords) reqHtml += `<li><strong>Kalit so'zlar:</strong> <code>${ch.requirements.keywords.join(", ")}</code> qo'llansin.</li>`;
      if (ch.requirements.methods && ch.requirements.methods.length > 0) reqHtml += `<li><strong>Metodlar:</strong> <code>${ch.requirements.methods.join("(), ")}()</code> metodi e'lon qilinsin.</li>`;
      reqHtml += `<li>Sintaksis xatolarisiz va Clean Code qoidalariga rioya qiling.</li>`;
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