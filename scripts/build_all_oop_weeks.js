// ============================================================================
// OOP ACADEMY — GENERATE WEEKS 2 TO 6 INTERACTIVE JAVA SIMULATORS
// Generates index.html, styles.css, and game.js with 10 deep challenges each
// ============================================================================

const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'oop');
const localBaseDir = 'C:\\Users\\Ravshanbek\\Documents\\WIUT\\OOP\\oop-academy';

const WEEKS_DATA = [
  // WEEK 2
  {
    weekNum: 2,
    badge: "2-Modul",
    title: {
      uz: "2-Modul: Inkapsulyatsiya & Ma'lumotlarni Himoyalash",
      en: "Module 2: Encapsulation & Data Protection"
    },
    subtitle: {
      uz: "Access Modifiers, Getters/Setters, Validatsiya va Immutability",
      en: "Access Modifiers, Getters/Setters, Validation & Immutability"
    },
    storageKey: "WIUT_OOP_W2_PROGRESS",
    challenges: [
      {
        id: 1,
        title: { uz: "1. 'private' Modifikatori va Inkapsulyatsiya", en: "1. 'private' Modifier & Encapsulation" },
        scenario: {
          uz: "Do'konda tovar narxini har kim o'zboshimchalik bilan manfiy qilib o'zgartira olmasligi kerak. Maydonlarni 'private' qilib berkitish orqali to'g'ridan-to'g'ri tashqaridan kirishni taqiqlang.",
          en: "Protect fields from unauthorized modification by declaring `private double price;`."
        },
        requirements: { classes: ["Product"], privateFields: ["price"] },
        starterCode: `class Product {\n    public String name;\n    // price maydonini private qiling\n    private double price;\n\n    public Product(String name, double price) {\n        this.name = name;\n        this.price = price;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product p = new Product("Smartfon", 800.0);\n        System.out.println("Mahsulot: " + p.name);\n    }\n}`,
        solution: `class Product {\n    public String name;\n    private double price;\n\n    public Product(String name, double price) {\n        this.name = name;\n        this.price = price;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product p = new Product("Smartfon", 800.0);\n        System.out.println("Mahsulot: " + p.name);\n    }\n}`
      },
      {
        id: 2,
        title: { uz: "2. Getter Metodi orqali O'qish", en: "2. Getter Method for Safe Reading" },
        scenario: {
          uz: "Narx 'private' bo'lgani sababli, endi uni xavfsiz o'qish uchun `public double getPrice()` getter metodini yarating.",
          en: "Expose encapsulated state safely via `public double getPrice()`."
        },
        requirements: { classes: ["Product"], methods: ["getPrice"], privateFields: ["price"] },
        starterCode: `class Product {\n    private double price;\n\n    public Product(double price) {\n        this.price = price;\n    }\n\n    // getPrice metodini yarating\n    public double getPrice() {\n        return this.price;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product p = new Product(450.0);\n        System.out.println("Narx: $" + p.getPrice());\n    }\n}`,
        solution: `class Product {\n    private double price;\n\n    public Product(double price) {\n        this.price = price;\n    }\n\n    public double getPrice() {\n        return this.price;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product p = new Product(450.0);\n        System.out.println("Narx: $" + p.getPrice());\n    }\n}`
      },
      {
        id: 3,
        title: { uz: "3. Setter Metodi va Narx Validatsiyasi", en: "3. Setter & Price Validation" },
        scenario: {
          uz: "Narx hech qachon manfiy bo'lmasligi kerak. `setPrice(double price)` setter metodida agar `price >= 0` bo'lsa o'zgartiring, aks holda xatolik chiqaring.",
          en: "Add `setPrice(double price)` with business logic ensuring price is non-negative."
        },
        requirements: { classes: ["Product"], methods: ["setPrice", "getPrice"] },
        starterCode: `class Product {\n    private double price;\n\n    public void setPrice(double price) {\n        if (price >= 0) {\n            this.price = price;\n        } else {\n            System.out.println("Xato: Narx manfiy bo'lishi mumkin emas!");\n        }\n    }\n\n    public double getPrice() {\n        return this.price;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product p = new Product();\n        p.setPrice(100.0);\n        p.setPrice(-50.0); // Xatolik tekshiruvi\n        System.out.println("Yakuniy narx: $" + p.getPrice());\n    }\n}`,
        solution: `class Product {\n    private double price;\n\n    public void setPrice(double price) {\n        if (price >= 0) {\n            this.price = price;\n        } else {\n            System.out.println("Xato: Narx manfiy bo'lishi mumkin emas!");\n        }\n    }\n\n    public double getPrice() {\n        return this.price;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product p = new Product();\n        p.setPrice(100.0);\n        p.setPrice(-50.0);\n        System.out.println("Yakuniy narx: $" + p.getPrice());\n    }\n}`
      },
      {
        id: 4,
        title: { uz: "4. Ism Validatsiyasi (Null & Empty Check)", en: "4. Name Validation (Null & Empty Check)" },
        scenario: {
          uz: "Tovar nomi bo'sh yoki `null` bo'lishi mumkin emas. `setName(String name)` metodida tekshiruv o'rnating.",
          en: "Enforce valid non-empty string in `setName(String name)`."
        },
        requirements: { classes: ["Product"], methods: ["setName", "getName"] },
        starterCode: `class Product {\n    private String name;\n\n    public void setName(String name) {\n        if (name != null && !name.trim().isEmpty()) {\n            this.name = name;\n        } else {\n            System.out.println("Xato: Nomi bo'sh bo'lishi mumkin emas!");\n        }\n    }\n\n    public String getName() {\n        return this.name;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product p = new Product();\n        p.setName("Planshet");\n        System.out.println("Mahsulot: " + p.getName());\n    }\n}`,
        solution: `class Product {\n    private String name;\n\n    public void setName(String name) {\n        if (name != null && !name.trim().isEmpty()) {\n            this.name = name;\n        } else {\n            System.out.println("Xato: Nomi bo'sh bo'lishi mumkin emas!");\n        }\n    }\n\n    public String getName() {\n        return this.name;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product p = new Product();\n        p.setName("Planshet");\n        System.out.println("Mahsulot: " + p.getName());\n    }\n}`
      },
      {
        id: 5,
        title: { uz: "5. O'zgarmas Klass (Immutable Class)", en: "5. Immutable Class" },
        scenario: {
          uz: "To'lov cheki (`Receipt`) kabi ma'lumotlar yaratilgandan keyin hech qachon o'zgarmasligi kerak. Maydonlarni `final` qilib, hech qanday setter yaratmang.",
          en: "Create an immutable `Receipt` class with `final` fields and no mutator setters."
        },
        requirements: { classes: ["Receipt"], keywords: ["final"] },
        starterCode: `final class Receipt {\n    private final String transactionId;\n    private final double amount;\n\n    public Receipt(String transactionId, double amount) {\n        this.transactionId = transactionId;\n        this.amount = amount;\n    }\n\n    public String getTransactionId() { return transactionId; }\n    public double getAmount() { return amount; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Receipt r = new Receipt("TXN-9842", 250.0);\n        System.out.println("Chek: " + r.getTransactionId() + " -> $" + r.getAmount());\n    }\n}`,
        solution: `final class Receipt {\n    private final String transactionId;\n    private final double amount;\n\n    public Receipt(String transactionId, double amount) {\n        this.transactionId = transactionId;\n        this.amount = amount;\n    }\n\n    public String getTransactionId() { return transactionId; }\n    public double getAmount() { return amount; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Receipt r = new Receipt("TXN-9842", 250.0);\n        System.out.println("Chek: " + r.getTransactionId() + " -> $" + r.getAmount());\n    }\n}`
      },
      {
        id: 6,
        title: { uz: "6. Bank Hisobi va Balans Himoyasi", en: "6. BankAccount Balance Protection" },
        scenario: {
          uz: "Bank hisobi (`BankAccount`): balansni to'g'ridan-to'g'ri o'zgartirib bo'lmaydi. Faqat `deposit(double amt)` va `withdraw(double amt)` metodlari orqali operatsiya qilinadi.",
          en: "Encapsulate `BankAccount` balance, exposing only `deposit` and `withdraw` methods."
        },
        requirements: { classes: ["BankAccount"], methods: ["deposit", "withdraw", "getBalance"] },
        starterCode: `class BankAccount {\n    private double balance;\n\n    public void deposit(double amount) {\n        if (amount > 0) balance += amount;\n    }\n\n    public boolean withdraw(double amount) {\n        if (amount > 0 && balance >= amount) {\n            balance -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public double getBalance() {\n        return balance;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BankAccount acc = new BankAccount();\n        acc.deposit(500.0);\n        acc.withdraw(200.0);\n        System.out.println("Balans: $" + acc.getBalance());\n    }\n}`,
        solution: `class BankAccount {\n    private double balance;\n\n    public void deposit(double amount) {\n        if (amount > 0) balance += amount;\n    }\n\n    public boolean withdraw(double amount) {\n        if (amount > 0 && balance >= amount) {\n            balance -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public double getBalance() {\n        return balance;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BankAccount acc = new BankAccount();\n        acc.deposit(500.0);\n        acc.withdraw(200.0);\n        System.out.println("Balans: $" + acc.getBalance());\n    }\n}`
      },
      {
        id: 7,
        title: { uz: "7. Maxsus Konstruktor Ichida Validatsiya", en: "7. Constructor Validation" },
        scenario: {
          uz: "Obyekt noto'g'ri holatda yaratilishining oldini oling. Konstruktor ichida `setPrice` yoki to'g'ridan-to'g'ri validatsiya qo'llang.",
          en: "Enforce validation immediately inside constructor parameters."
        },
        requirements: { classes: ["Product"], constructors: ["Product"] },
        starterCode: `class Product {\n    private double price;\n\n    public Product(double price) {\n        if (price < 0) {\n            this.price = 0.0;\n        } else {\n            this.price = price;\n        }\n    }\n\n    public double getPrice() { return price; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product p = new Product(-20.0);\n        System.out.println("Xavfsiz narx: $" + p.getPrice());\n    }\n}`,
        solution: `class Product {\n    private double price;\n\n    public Product(double price) {\n        if (price < 0) {\n            this.price = 0.0;\n        } else {\n            this.price = price;\n        }\n    }\n\n    public double getPrice() { return price; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product p = new Product(-20.0);\n        System.out.println("Xavfsiz narx: $" + p.getPrice());\n    }\n}`
      },
      {
        id: 8,
        title: { uz: "8. Boolean Getter (isAvailable Konvensiyasi)", en: "8. Boolean Getters Convention" },
        scenario: {
          uz: "Java'da boolean maydonlar uchun getter `isAvailable()` yoki `isActive()` deb nomlanadi. `inStock` maydoni uchun `isInStock()` yozing.",
          en: "Follow Java Bean conventions using `isInStock()` for boolean getters."
        },
        requirements: { classes: ["Product"], methods: ["isInStock"] },
        starterCode: `class Product {\n    private boolean inStock = true;\n\n    public boolean isInStock() {\n        return this.inStock;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product p = new Product();\n        System.out.println("Mavjudmi: " + p.isInStock());\n    }\n}`,
        solution: `class Product {\n    private boolean inStock = true;\n\n    public boolean isInStock() {\n        return this.inStock;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product p = new Product();\n        System.out.println("Mavjudmi: " + p.isInStock());\n    }\n}`
      },
      {
        id: 9,
        title: { uz: "9. Inkapsulyatsiyalangan Hisob-Kitob", en: "9. Calculated Read-Only Property" },
        scenario: {
          uz: "`OrderItem` klassi: `quantity` va `unitPrice` maydonlarini inkapsulyatsiya qilib, umumiy narxni hisoblovchi `getTotalPrice()` getterini yarating.",
          en: "Create calculated property `getTotalPrice()` from private `quantity` and `unitPrice`."
        },
        requirements: { classes: ["OrderItem"], methods: ["getTotalPrice"] },
        starterCode: `class OrderItem {\n    private int quantity;\n    private double unitPrice;\n\n    public OrderItem(int quantity, double unitPrice) {\n        this.quantity = quantity;\n        this.unitPrice = unitPrice;\n    }\n\n    public double getTotalPrice() {\n        return this.quantity * this.unitPrice;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        OrderItem item = new OrderItem(3, 12.0);\n        System.out.println("Jami summa: $" + item.getTotalPrice());\n    }\n}`,
        solution: `class OrderItem {\n    private int quantity;\n    private double unitPrice;\n\n    public OrderItem(int quantity, double unitPrice) {\n        this.quantity = quantity;\n        this.unitPrice = unitPrice;\n    }\n\n    public double getTotalPrice() {\n        return this.quantity * this.unitPrice;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        OrderItem item = new OrderItem(3, 12.0);\n        System.out.println("Jami summa: $" + item.getTotalPrice());\n    }\n}`
      },
      {
        id: 10,
        title: { uz: "10. CW2 Kurs Ishi Modeli: Xavfsiz Buyurtma", en: "10. CW2 Safe Order Item Model" },
        scenario: {
          uz: "Assessment 2 (50%) talabidagi to'liq inkapsulyatsiyalangan `OrderItem` modelini quring: `itemName`, `quantity` (> 0 bo'lishi shart) va `price` bilan.",
          en: "Build full encapsulated `OrderItem` model fulfilling CW2 Encapsulation criteria (6 marks)."
        },
        requirements: { classes: ["OrderItem"], methods: ["getTotal", "getQuantity"] },
        starterCode: `class OrderItem {\n    private String itemName;\n    private int quantity;\n    private double price;\n\n    public OrderItem(String itemName, int quantity, double price) {\n        this.itemName = itemName;\n        this.quantity = (quantity > 0) ? quantity : 1;\n        this.price = (price >= 0) ? price : 0.0;\n    }\n\n    public int getQuantity() { return quantity; }\n    public double getTotal() { return quantity * price; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        OrderItem order = new OrderItem("Latte", 2, 4.5);\n        System.out.println("Buyurtma jami: $" + order.getTotal());\n    }\n}`,
        solution: `class OrderItem {\n    private String itemName;\n    private int quantity;\n    private double price;\n\n    public OrderItem(String itemName, int quantity, double price) {\n        this.itemName = itemName;\n        this.quantity = (quantity > 0) ? quantity : 1;\n        this.price = (price >= 0) ? price : 0.0;\n    }\n\n    public int getQuantity() { return quantity; }\n    public double getTotal() { return quantity * price; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        OrderItem order = new OrderItem("Latte", 2, 4.5);\n        System.out.println("Buyurtma jami: $" + order.getTotal());\n    }\n}`
      }
    ]
  },

  // WEEK 3
  {
    weekNum: 3,
    badge: "3-Modul",
    title: {
      uz: "3-Modul: Merosxo'rlik & Kompozitsiya (Inheritance)",
      en: "Module 3: Inheritance & Composition"
    },
    subtitle: {
      uz: "extends, super(), Method Overriding va Is-A vs Has-A",
      en: "extends, super(), Method Overriding & Is-A vs Has-A"
    },
    storageKey: "WIUT_OOP_W3_PROGRESS",
    challenges: [
      {
        id: 1,
        title: { uz: "1. Birinchi Subklass ('extends')", en: "1. First Subclass with 'extends'" },
        scenario: { uz: "`Product` superklassi mavjud. Undan meros oluvchi `Book` subklassini yarating.", en: "Create a `Book` subclass extending `Product`." },
        requirements: { classes: ["Product", "Book"], keywords: ["extends"] },
        starterCode: `class Product {\n    String name;\n}\n\nclass Book extends Product {\n    String author;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Book b = new Book();\n        b.name = "Clean Code";\n        b.author = "Robert Martin";\n        System.out.println(b.name + " muallifi: " + b.author);\n    }\n}`,
        solution: `class Product {\n    String name;\n}\n\nclass Book extends Product {\n    String author;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Book b = new Book();\n        b.name = "Clean Code";\n        b.author = "Robert Martin";\n        System.out.println(b.name + " muallifi: " + b.author);\n    }\n}`
      },
      {
        id: 2,
        title: { uz: "2. 'super()' Konstruktorini Chaqirish", en: "2. Invoking 'super()' Constructor" },
        scenario: { uz: "Ota klass konstruktori parametr qabul qilsa, bola klass `super(name)` orqali uni chaqirishi shart.", en: "Invoke superclass constructor using `super(name)`." },
        requirements: { classes: ["Product", "Book"], keywords: ["super"] },
        starterCode: `class Product {\n    String name;\n    public Product(String name) { this.name = name; }\n}\n\nclass Book extends Product {\n    String author;\n    public Book(String name, String author) {\n        super(name);\n        this.author = author;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Book b = new Book("Design Patterns", "GoF");\n        System.out.println(b.name);\n    }\n}`,
        solution: `class Product {\n    String name;\n    public Product(String name) { this.name = name; }\n}\n\nclass Book extends Product {\n    String author;\n    public Book(String name, String author) {\n        super(name);\n        this.author = author;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Book b = new Book("Design Patterns", "GoF");\n        System.out.println(b.name);\n    }\n}`
      },
      {
        id: 3,
        title: { uz: "3. Metodlarni Qayta Aniqlash (@Override)", en: "3. Method Overriding (@Override)" },
        scenario: { uz: "Bola klass ota klassdagi `getInfo()` metodini o'ziga moslab qayta aniqlasin.", en: "Override `getInfo()` in the subclass using `@Override`." },
        requirements: { classes: ["Product", "Book"], methods: ["getInfo"], keywords: ["@Override"] },
        starterCode: `class Product {\n    String name;\n    public Product(String name) { this.name = name; }\n    public String getInfo() { return "Mahsulot: " + name; }\n}\n\nclass Book extends Product {\n    String author;\n    public Book(String name, String author) { super(name); this.author = author; }\n    @Override\n    public String getInfo() { return "Kitob: " + name + " (" + author + ")"; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Book b = new Book("Refactoring", "Martin Fowler");\n        System.out.println(b.getInfo());\n    }\n}`,
        solution: `class Product {\n    String name;\n    public Product(String name) { this.name = name; }\n    public String getInfo() { return "Mahsulot: " + name; }\n}\n\nclass Book extends Product {\n    String author;\n    public Book(String name, String author) { super(name); this.author = author; }\n    @Override\n    public String getInfo() { return "Kitob: " + name + " (" + author + ")"; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Book b = new Book("Refactoring", "Martin Fowler");\n        System.out.println(b.getInfo());\n    }\n}`
      },
      {
        id: 4,
        title: { uz: "4. super.metod() orqali Ota Kodini Qayta Ishlatish", en: "4. Reusing Super Logic with super.method()" },
        scenario: { uz: "`super.getInfo()` yordamida ota klass natijasini olib, unga qo'shimcha ma'lumot qo'shing.", en: "Extend super method logic using `super.getInfo()`." },
        requirements: { classes: ["Product", "Book"], keywords: ["super"] },
        starterCode: `class Product {\n    String name;\n    public Product(String name) { this.name = name; }\n    public String getInfo() { return "Mahsulot: " + name; }\n}\n\nclass Book extends Product {\n    String author;\n    public Book(String name, String author) { super(name); this.author = author; }\n    @Override\n    public String getInfo() { return super.getInfo() + ", Muallif: " + author; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Book b = new Book("1984", "George Orwell");\n        System.out.println(b.getInfo());\n    }\n}`,
        solution: `class Product {\n    String name;\n    public Product(String name) { this.name = name; }\n    public String getInfo() { return "Mahsulot: " + name; }\n}\n\nclass Book extends Product {\n    String author;\n    public Book(String name, String author) { super(name); this.author = author; }\n    @Override\n    public String getInfo() { return super.getInfo() + ", Muallif: " + author; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Book b = new Book("1984", "George Orwell");\n        System.out.println(b.getInfo());\n    }\n}`
      },
      {
        id: 5,
        title: { uz: "5. Kompozitsiya ('Has-A' bog'liqligi)", en: "5. Composition ('Has-A' Relationship)" },
        scenario: { uz: "Har doim meros olish shart emas! `Customer` klassi `Address` obyektiga ega bo'lsin (Kompozitsiya).", en: "Favor composition over inheritance: `Customer` has an `Address`." },
        requirements: { classes: ["Customer", "Address"] },
        starterCode: `class Address {\n    String city;\n    public Address(String city) { this.city = city; }\n}\n\nclass Customer {\n    String name;\n    Address address;\n    public Customer(String name, Address address) {\n        this.name = name;\n        this.address = address;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Address addr = new Address("Toshkent");\n        Customer c = new Customer("Sardor", addr);\n        System.out.println(c.name + " yashaydi: " + c.address.city);\n    }\n}`,
        solution: `class Address {\n    String city;\n    public Address(String city) { this.city = city; }\n}\n\nclass Customer {\n    String name;\n    Address address;\n    public Customer(String name, Address address) {\n        this.name = name;\n        this.address = address;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Address addr = new Address("Toshkent");\n        Customer c = new Customer("Sardor", addr);\n        System.out.println(c.name + " yashaydi: " + c.address.city);\n    }\n}`
      },
      {
        id: 6,
        title: { uz: "6. 'protected' Modifikatori", en: "6. 'protected' Access Modifier" },
        scenario: { uz: "`protected double basePrice` maydoni faqat bola klasslar uchun ko'rinadigan bo'lsin.", en: "Use `protected` visibility for inheritance hierarchies." },
        requirements: { classes: ["Product"], keywords: ["protected"] },
        starterCode: `class Product {\n    protected double basePrice;\n    public Product(double basePrice) { this.basePrice = basePrice; }\n}\n\nclass Coffee extends Product {\n    public Coffee(double price) { super(price); }\n    public double getFinalPrice() { return this.basePrice * 1.12; } // 12% QQS bilan\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Coffee c = new Coffee(20.0);\n        System.out.println("QQS bilan: $" + c.getFinalPrice());\n    }\n}`,
        solution: `class Product {\n    protected double basePrice;\n    public Product(double basePrice) { this.basePrice = basePrice; }\n}\n\nclass Coffee extends Product {\n    public Coffee(double price) { super(price); }\n    public double getFinalPrice() { return this.basePrice * 1.12; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Coffee c = new Coffee(20.0);\n        System.out.println("QQS bilan: $" + c.getFinalPrice());\n    }\n}`
      },
      {
        id: 7,
        title: { uz: "7. Ierarxik Merosxo'rlik", en: "7. Hierarchical Inheritance" },
        scenario: { uz: "`Product` superklassidan bir vaqtning o'zida `PhysicalProduct` va `DigitalProduct` meros olsin.", en: "Implement branch inheritance from a common root." },
        requirements: { classes: ["Product", "PhysicalProduct", "DigitalProduct"] },
        starterCode: `class Product { String name; }\nclass PhysicalProduct extends Product { double weight; }\nclass DigitalProduct extends Product { String downloadUrl; }\n\nclass Main {\n    public static void main(String[] args) {\n        DigitalProduct dp = new DigitalProduct();\n        dp.name = "E-Book";\n        System.out.println("Raqamli tovar: " + dp.name);\n    }\n}`,
        solution: `class Product { String name; }\nclass PhysicalProduct extends Product { double weight; }\nclass DigitalProduct extends Product { String downloadUrl; }\n\nclass Main {\n    public static void main(String[] args) {\n        DigitalProduct dp = new DigitalProduct();\n        dp.name = "E-Book";\n        System.out.println("Raqamli tovar: " + dp.name);\n    }\n}`
      },
      {
        id: 8,
        title: { uz: "8. 'final' Metod va Klasslar", en: "8. Final Classes & Methods" },
        scenario: { uz: "Xavfsizlik nuqtai nazaridan meros olish taqiqlangan `final class TaxService` yarating.", en: "Prevent further subclassing with `final class`." },
        requirements: { classes: ["TaxService"], keywords: ["final"] },
        starterCode: `final class TaxService {\n    public double calcTax(double amount) { return amount * 0.12; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TaxService ts = new TaxService();\n        System.out.println("Soliq: $" + ts.calcTax(100.0));\n    }\n}`,
        solution: `final class TaxService {\n    public double calcTax(double amount) { return amount * 0.12; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TaxService ts = new TaxService();\n        System.out.println("Soliq: $" + ts.calcTax(100.0));\n    }\n}`
      },
      {
        id: 9,
        title: { uz: "9. Ota Konstruktori Bajarilish Tartibi", en: "9. Constructor Execution Order" },
        scenario: { uz: "Bola klass yaratilganda birinchi navbatda har doim ota klass konstruktori ishga tushishini tekshiring.", en: "Demonstrate constructor chaining execution order." },
        requirements: { classes: ["Parent", "Child"], keywords: ["super"] },
        starterCode: `class Parent {\n    public Parent() { System.out.println("1. Ota konstruktori"); }\n}\nclass Child extends Parent {\n    public Child() { super(); System.out.println("2. Bola konstruktori"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new Child();\n    }\n}`,
        solution: `class Parent {\n    public Parent() { System.out.println("1. Ota konstruktori"); }\n}\nclass Child extends Parent {\n    public Child() { super(); System.out.println("2. Bola konstruktori"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new Child();\n    }\n}`
      },
      {
        id: 10,
        title: { uz: "10. CW2 Kurs Ishi Modeli: Customization Ierarxiyasi", en: "10. CW2 Coursework Customization Hierarchy" },
        scenario: { uz: "Assessment 2 (50%) talabi: `BaseProduct` superklassi va unga qo'shimcha `CustomizedProduct` sinfini meros qilib quring (6 marks).", en: "Build extensible customization hierarchy fulfilling CW2 criteria." },
        requirements: { classes: ["BaseProduct", "CustomizedProduct"], keywords: ["extends", "super"] },
        starterCode: `class BaseProduct {\n    protected String name;\n    protected double basePrice;\n    public BaseProduct(String name, double basePrice) { this.name = name; this.basePrice = basePrice; }\n    public double getPrice() { return basePrice; }\n}\n\nclass CustomizedProduct extends BaseProduct {\n    private double customFee;\n    public CustomizedProduct(String name, double basePrice, double customFee) {\n        super(name, basePrice);\n        this.customFee = customFee;\n    }\n    @Override\n    public double getPrice() { return super.getPrice() + customFee; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CustomizedProduct cp = new CustomizedProduct("Latte", 4.0, 1.5);\n        System.out.println(cp.name + " umumiy narxi: $" + cp.getPrice());\n    }\n}`,
        solution: `class BaseProduct {\n    protected String name;\n    protected double basePrice;\n    public BaseProduct(String name, double basePrice) { this.name = name; this.basePrice = basePrice; }\n    public double getPrice() { return basePrice; }\n}\n\nclass CustomizedProduct extends BaseProduct {\n    private double customFee;\n    public CustomizedProduct(String name, double basePrice, double customFee) {\n        super(name, basePrice);\n        this.customFee = customFee;\n    }\n    @Override\n    public double getPrice() { return super.getPrice() + customFee; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CustomizedProduct cp = new CustomizedProduct("Latte", 4.0, 1.5);\n        System.out.println(cp.name + " umumiy narxi: $" + cp.getPrice());\n    }\n}`
      }
    ]
  },

  // WEEK 4
  {
    weekNum: 4,
    badge: "4-Modul",
    title: {
      uz: "4-Modul: Polimorfizm & Abstrakt Sinflar",
      en: "Module 4: Polymorphism & Abstract Classes"
    },
    subtitle: {
      uz: "abstract class, Dynamic Dispatch, Heterogen To'plamlar",
      en: "abstract class, Dynamic Dispatch, Heterogeneous Collections"
    },
    storageKey: "WIUT_OOP_W4_PROGRESS",
    challenges: [
      {
        id: 1,
        title: { uz: "1. Abstrakt Klass ('abstract class')", en: "1. Abstract Class Declaration" },
        scenario: { uz: "O'zidan to'g'ridan-to'g'ri obyekt yaratib bo'lmaydigan `abstract class MenuItem` e'lon qiling.", en: "Declare an un-instantiable `abstract class MenuItem`." },
        requirements: { classes: ["MenuItem"], keywords: ["abstract"] },
        starterCode: `abstract class MenuItem {\n    String name;\n    public MenuItem(String name) { this.name = name; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println("Abstrakt klass tayyor!");\n    }\n}`,
        solution: `abstract class MenuItem {\n    String name;\n    public MenuItem(String name) { this.name = name; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println("Abstrakt klass tayyor!");\n    }\n}`
      },
      {
        id: 2,
        title: { uz: "2. Abstrakt Metod E'lon Qilish", en: "2. Abstract Method Declaration" },
        scenario: { uz: "Har bir tovar narxni o'zicha hisoblasin: `public abstract double getPrice();` abstrakt metodini qo'shing.", en: "Define `public abstract double getPrice();` inside abstract class." },
        requirements: { classes: ["MenuItem"], methods: ["getPrice"], keywords: ["abstract"] },
        starterCode: `abstract class MenuItem {\n    String name;\n    public MenuItem(String name) { this.name = name; }\n    public abstract double getPrice();\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println("Abstrakt metod e'lon qilindi!");\n    }\n}`,
        solution: `abstract class MenuItem {\n    String name;\n    public MenuItem(String name) { this.name = name; }\n    public abstract double getPrice();\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println("Abstrakt metod e'lon qilindi!");\n    }\n}`
      },
      {
        id: 3,
        title: { uz: "3. Abstrakt Metodni Amalga Oshirish", en: "3. Concrete Subclass Implementation" },
        scenario: { uz: "`CoffeeItem` klassida ota klassdagi abstrakt `getPrice()` metodining tanasini yozing.", en: "Implement inherited abstract method in a concrete subclass." },
        requirements: { classes: ["MenuItem", "CoffeeItem"], methods: ["getPrice"] },
        starterCode: `abstract class MenuItem {\n    String name;\n    public MenuItem(String name) { this.name = name; }\n    public abstract double getPrice();\n}\n\nclass CoffeeItem extends MenuItem {\n    private double price;\n    public CoffeeItem(String name, double price) { super(name); this.price = price; }\n    @Override\n    public double getPrice() { return this.price; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CoffeeItem c = new CoffeeItem("Espresso", 3.0);\n        System.out.println(c.name + ": $" + c.getPrice());\n    }\n}`,
        solution: `abstract class MenuItem {\n    String name;\n    public MenuItem(String name) { this.name = name; }\n    public abstract double getPrice();\n}\n\nclass CoffeeItem extends MenuItem {\n    private double price;\n    public CoffeeItem(String name, double price) { super(name); this.price = price; }\n    @Override\n    public double getPrice() { return this.price; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CoffeeItem c = new CoffeeItem("Espresso", 3.0);\n        System.out.println(c.name + ": $" + c.getPrice());\n    }\n}`
      },
      {
        id: 4,
        title: { uz: "4. Dinamik Metod Chaqiruvi (Polymorphic Call)", en: "4. Dynamic Method Dispatch" },
        scenario: { uz: "Superklass turidagi o'zgaruvchiga bola klass obyektini biriktiring: `MenuItem item = new CoffeeItem(...);` va `item.getPrice()` ni chaqiring.", en: "Invoke polymorphic methods via superclass reference variable." },
        requirements: { classes: ["MenuItem", "CoffeeItem"], methods: ["getPrice"] },
        starterCode: `abstract class MenuItem {\n    public abstract double getPrice();\n}\n\nclass CoffeeItem extends MenuItem {\n    @Override\n    public double getPrice() { return 4.5; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MenuItem item = new CoffeeItem();\n        System.out.println("Polimorfik narx: $" + item.getPrice());\n    }\n}`,
        solution: `abstract class MenuItem {\n    public abstract double getPrice();\n}\n\nclass CoffeeItem extends MenuItem {\n    @Override\n    public double getPrice() { return 4.5; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MenuItem item = new CoffeeItem();\n        System.out.println("Polimorfik narx: $" + item.getPrice());\n    }\n}`
      },
      {
        id: 5,
        title: { uz: "5. Heterogen Massiv (Turli xil Obyektlar)", en: "5. Heterogeneous Collection" },
        scenario: { uz: "Bitta `MenuItem[]` massivida kofe, shirinlik va choy kabi turli xil obyektlarni saqlash.", en: "Store heterogeneous polymorphic objects in an abstract type array." },
        requirements: { classes: ["MenuItem", "CoffeeItem", "TeaItem"] },
        starterCode: `abstract class MenuItem {\n    public abstract double getPrice();\n}\n\nclass CoffeeItem extends MenuItem { public double getPrice() { return 4.0; } }\nclass TeaItem extends MenuItem { public double getPrice() { return 2.5; } }\n\nclass Main {\n    public static void main(String[] args) {\n        MenuItem[] order = { new CoffeeItem(), new TeaItem() };\n        double total = 0;\n        for (MenuItem item : order) total += item.getPrice();\n        System.out.println("Jami: $" + total);\n    }\n}`,
        solution: `abstract class MenuItem {\n    public abstract double getPrice();\n}\n\nclass CoffeeItem extends MenuItem { public double getPrice() { return 4.0; } }\nclass TeaItem extends MenuItem { public double getPrice() { return 2.5; } }\n\nclass Main {\n    public static void main(String[] args) {\n        MenuItem[] order = { new CoffeeItem(), new TeaItem() };\n        double total = 0;\n        for (MenuItem item : order) total += item.getPrice();\n        System.out.println("Jami: $" + total);\n    }\n}`
      },
      {
        id: 6,
        title: { uz: "6. 'instanceof' va Xavfsiz Downcasting", en: "6. 'instanceof' & Safe Downcasting" },
        scenario: { uz: "Obyektning asl turini aniqlash uchun `item instanceof CoffeeItem` tekshiruvini bajaring.", en: "Safely test and cast types using `instanceof`." },
        requirements: { classes: ["MenuItem", "CoffeeItem"], keywords: ["instanceof"] },
        starterCode: `abstract class MenuItem {}\nclass CoffeeItem extends MenuItem { String roast = "Dark"; }\n\nclass Main {\n    public static void main(String[] args) {\n        MenuItem item = new CoffeeItem();\n        if (item instanceof CoffeeItem) {\n            CoffeeItem c = (CoffeeItem) item;\n            System.out.println("Qovurilish darajasi: " + c.roast);\n        }\n    }\n}`,
        solution: `abstract class MenuItem {}\nclass CoffeeItem extends MenuItem { String roast = "Dark"; }\n\nclass Main {\n    public static void main(String[] args) {\n        MenuItem item = new CoffeeItem();\n        if (item instanceof CoffeeItem) {\n            CoffeeItem c = (CoffeeItem) item;\n            System.out.println("Qovurilish darajasi: " + c.roast);\n        }\n    }\n}`
      },
      {
        id: 7,
        title: { uz: "7. Template Method Pattern Asosi", en: "7. Template Method Pattern Foundation" },
        scenario: { uz: "Abstrakt klassda umumiy buyurtma algoritmini (`processOrder()`) yozib, qadamlarni bola klasslarga qoldiring.", en: "Implement template workflow logic inside abstract superclass." },
        requirements: { classes: ["OrderWorkflow"], keywords: ["abstract"] },
        starterCode: `abstract class OrderWorkflow {\n    public void processOrder() {\n        prepare();\n        packageItem();\n        System.out.println("Tayyor!");\n    }\n    public abstract void prepare();\n    public abstract void packageItem();\n}\n\nclass CoffeeWorkflow extends OrderWorkflow {\n    public void prepare() { System.out.println("Kofe qaynatilmoqda..."); }\n    public void packageItem() { System.out.println("Stakanga quyildi."); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new CoffeeWorkflow().processOrder();\n    }\n}`,
        solution: `abstract class OrderWorkflow {\n    public void processOrder() {\n        prepare();\n        packageItem();\n        System.out.println("Tayyor!");\n    }\n    public abstract void prepare();\n    public abstract void packageItem();\n}\n\nclass CoffeeWorkflow extends OrderWorkflow {\n    public void prepare() { System.out.println("Kofe qaynatilmoqda..."); }\n    public void packageItem() { System.out.println("Stakanga quyildi."); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new CoffeeWorkflow().processOrder();\n    }\n}`
      },
      {
        id: 8,
        title: { uz: "8. Abstrakt Klassda Konstruktor Rol", en: "8. Abstract Class Constructors" },
        scenario: { uz: "Abstrakt klassdan obyekt ololmasak ham, uning konstruktori bola klasslar umumiy holatini initsializatsiya qiladi.", en: "Understand initialization via abstract class constructors." },
        requirements: { classes: ["Item"], constructors: ["Item"] },
        starterCode: `abstract class Item {\n    String sku;\n    public Item(String sku) { this.sku = sku; }\n}\nclass ConcreteItem extends Item {\n    public ConcreteItem(String sku) { super(sku); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ConcreteItem ci = new ConcreteItem("SKU-1002");\n        System.out.println("Kod: " + ci.sku);\n    }\n}`,
        solution: `abstract class Item {\n    String sku;\n    public Item(String sku) { this.sku = sku; }\n}\nclass ConcreteItem extends Item {\n    public ConcreteItem(String sku) { super(sku); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ConcreteItem ci = new ConcreteItem("SKU-1002");\n        System.out.println("Kod: " + ci.sku);\n    }\n}`
      },
      {
        id: 9,
        title: { uz: "9. Polimorfizm va Metod Parametrlari", en: "9. Polymorphic Method Arguments" },
        scenario: { uz: "`printReceipt(MenuItem item)` metodi har qanday turdagi mahsulotni qabul qila oladi.", en: "Accept polymorphic abstractions as method parameters." },
        requirements: { classes: ["MenuItem"], methods: ["printReceipt"] },
        starterCode: `abstract class MenuItem { public abstract String getLabel(); }\nclass Latte extends MenuItem { public String getLabel() { return "Latte"; } }\n\nclass Main {\n    public static void printReceipt(MenuItem item) {\n        System.out.println("Chek: " + item.getLabel());\n    }\n    public static void main(String[] args) {\n        printReceipt(new Latte());\n    }\n}`,
        solution: `abstract class MenuItem { public abstract String getLabel(); }\nclass Latte extends MenuItem { public String getLabel() { return "Latte"; } }\n\nclass Main {\n    public static void printReceipt(MenuItem item) {\n        System.out.println("Chek: " + item.getLabel());\n    }\n    public static void main(String[] args) {\n        printReceipt(new Latte());\n    }\n}`
      },
      {
        id: 10,
        title: { uz: "10. CW2 Kurs Ishi Modeli: Abstrakt Mahsulot Arxitekturasi", en: "10. CW2 Abstract Product Architecture" },
        scenario: { uz: "Assessment 2 (50%) talabi: `abstract class Product` (Polymorphism & Abstraction - 12 marks). `calculateCost()` va `getDescription()` metodlari bilan.", en: "Build full polymorphic abstract product model fulfilling CW2 criteria." },
        requirements: { classes: ["Product", "Espresso"], methods: ["calculateCost", "getDescription"] },
        starterCode: `abstract class Product {\n    public abstract double calculateCost();\n    public abstract String getDescription();\n}\n\nclass Espresso extends Product {\n    public double calculateCost() { return 3.5; }\n    public String getDescription() { return "Klassik Espresso"; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product p = new Espresso();\n        System.out.println(p.getDescription() + " -> $" + p.calculateCost());\n    }\n}`,
        solution: `abstract class Product {\n    public abstract double calculateCost();\n    public abstract String getDescription();\n}\n\nclass Espresso extends Product {\n    public double calculateCost() { return 3.5; }\n    public String getDescription() { return "Klassik Espresso"; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product p = new Espresso();\n        System.out.println(p.getDescription() + " -> $" + p.calculateCost());\n    }\n}`
      }
    ]
  },

  // WEEK 5
  {
    weekNum: 5,
    badge: "5-Modul",
    title: {
      uz: "5-Modul: Interfeyslar & Bo'shliq (Loose Coupling)",
      en: "Module 5: Interfaces & Loose Coupling"
    },
    subtitle: {
      uz: "interface, implements, Multiple Interfaces va Dependency Injection",
      en: "interface, implements, Multiple Interfaces & Dependency Injection"
    },
    storageKey: "WIUT_OOP_W5_PROGRESS",
    challenges: [
      {
        id: 1,
        title: { uz: "1. Birinchi Interfeys ('interface')", en: "1. First Interface Declaration" },
        scenario: { uz: "`PaymentMethod` interfeysini e'lon qiling va unga `void pay(double amount);` metodini qo'shing.", en: "Declare `PaymentMethod` interface with contract `void pay(double amount);`." },
        requirements: { classes: ["PaymentMethod"], methods: ["pay"] },
        starterCode: `interface PaymentMethod {\n    void pay(double amount);\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println("Interfeys yaratildi!");\n    }\n}`,
        solution: `interface PaymentMethod {\n    void pay(double amount);\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println("Interfeys yaratildi!");\n    }\n}`
      },
      {
        id: 2,
        title: { uz: "2. Interfeysni Amalga Oshirish ('implements')", en: "2. Interface Implementation with 'implements'" },
        scenario: { uz: "`PaymePayment` klassi `PaymentMethod` interfeysini amalga oshirsin (implements).", en: "Implement contract using `class PaymePayment implements PaymentMethod`." },
        requirements: { classes: ["PaymentMethod", "PaymePayment"], keywords: ["implements"] },
        starterCode: `interface PaymentMethod {\n    void pay(double amount);\n}\n\nclass PaymePayment implements PaymentMethod {\n    public void pay(double amount) {\n        System.out.println("Payme orqali to'landi: $" + amount);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentMethod pm = new PaymePayment();\n        pm.pay(75.0);\n    }\n}`,
        solution: `interface PaymentMethod {\n    void pay(double amount);\n}\n\nclass PaymePayment implements PaymentMethod {\n    public void pay(double amount) {\n        System.out.println("Payme orqali to'landi: $" + amount);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentMethod pm = new PaymePayment();\n        pm.pay(75.0);\n    }\n}`
      },
      {
        id: 3,
        title: { uz: "3. Bir Nechta To'lov Usullari (Pluggable Architecture)", en: "3. Pluggable Payment Methods" },
        scenario: { uz: "`ClickPayment` va `CashPayment` klasslarini ham bir xil `PaymentMethod` orqali yarating.", en: "Add multiple pluggable providers honoring the same interface contract." },
        requirements: { classes: ["PaymentMethod", "ClickPayment", "CashPayment"] },
        starterCode: `interface PaymentMethod { void pay(double amount); }\nclass ClickPayment implements PaymentMethod { public void pay(double a) { System.out.println("Click: $" + a); } }\nclass CashPayment implements PaymentMethod { public void pay(double a) { System.out.println("Naqd: $" + a); } }\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentMethod p1 = new ClickPayment();\n        PaymentMethod p2 = new CashPayment();\n        p1.pay(50.0); p2.pay(20.0);\n    }\n}`,
        solution: `interface PaymentMethod { void pay(double amount); }\nclass ClickPayment implements PaymentMethod { public void pay(double a) { System.out.println("Click: $" + a); } }\nclass CashPayment implements PaymentMethod { public void pay(double a) { System.out.println("Naqd: $" + a); } }\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentMethod p1 = new ClickPayment();\n        PaymentMethod p2 = new CashPayment();\n        p1.pay(50.0); p2.pay(20.0);\n    }\n}`
      },
      {
        id: 4,
        title: { uz: "4. Bir Nechta Interfeysni Qo'llash (Multiple Interfaces)", en: "4. Implementing Multiple Interfaces" },
        scenario: { uz: "Java'da bir vaqtning o'zida bir nechta interfeysni qo'llash mumkin: `implements Printable, Exportable`.", en: "Implement multiple interfaces simultaneously on a single class." },
        requirements: { classes: ["Printable", "Exportable", "Receipt"], keywords: ["implements"] },
        starterCode: `interface Printable { void print(); }\ninterface Exportable { void exportPDF(); }\n\nclass Receipt implements Printable, Exportable {\n    public void print() { System.out.println("Chop etildi."); }\n    public void exportPDF() { System.out.println("PDF eksport qilindi."); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Receipt r = new Receipt();\n        r.print(); r.exportPDF();\n    }\n}`,
        solution: `interface Printable { void print(); }\ninterface Exportable { void exportPDF(); }\n\nclass Receipt implements Printable, Exportable {\n    public void print() { System.out.println("Chop etildi."); }\n    public void exportPDF() { System.out.println("PDF eksport qilindi."); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Receipt r = new Receipt();\n        r.print(); r.exportPDF();\n    }\n}`
      },
      {
        id: 5,
        title: { uz: "5. Bo'shliq (Loose Coupling) & Dependency Injection", en: "5. Loose Coupling & Dependency Injection" },
        scenario: { uz: "`OrderService` aniq bir to'lov turiga qotib qolmasin. U konstruktori orqali `PaymentMethod` interfeysini qabul qilsin.", en: "Inject interface dependencies via constructor decoupling business services." },
        requirements: { classes: ["PaymentMethod", "OrderService"], constructors: ["OrderService"] },
        starterCode: `interface PaymentMethod { void pay(double amount); }\nclass CardPayment implements PaymentMethod { public void pay(double a) { System.out.println("Karta: $" + a); } }\n\nclass OrderService {\n    private PaymentMethod paymentMethod;\n    public OrderService(PaymentMethod paymentMethod) { this.paymentMethod = paymentMethod; }\n    public void checkout(double total) { paymentMethod.pay(total); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        OrderService service = new OrderService(new CardPayment());\n        service.checkout(120.0);\n    }\n}`,
        solution: `interface PaymentMethod { void pay(double amount); }\nclass CardPayment implements PaymentMethod { public void pay(double a) { System.out.println("Karta: $" + a); } }\n\nclass OrderService {\n    private PaymentMethod paymentMethod;\n    public OrderService(PaymentMethod paymentMethod) { this.paymentMethod = paymentMethod; }\n    public void checkout(double total) { paymentMethod.pay(total); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        OrderService service = new OrderService(new CardPayment());\n        service.checkout(120.0);\n    }\n}`
      },
      {
        id: 6,
        title: { uz: "6. Bildirishnoma Tizimi (Notifier Interface)", en: "6. Notification System (Notifier Interface)" },
        scenario: { uz: "`interface Notifier { void notifyUser(String msg); }` interfeysi va `TelegramNotifier` sinfi.", en: "Model notification contracts via `Notifier`." },
        requirements: { classes: ["Notifier", "TelegramNotifier"] },
        starterCode: `interface Notifier { void notifyUser(String msg); }\nclass TelegramNotifier implements Notifier {\n    public void notifyUser(String msg) { System.out.println("TG Xabar: " + msg); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Notifier n = new TelegramNotifier();\n        n.notifyUser("Buyurtmangiz yetkazildi!");\n    }\n}`,
        solution: `interface Notifier { void notifyUser(String msg); }\nclass TelegramNotifier implements Notifier {\n    public void notifyUser(String msg) { System.out.println("TG Xabar: " + msg); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Notifier n = new TelegramNotifier();\n        n.notifyUser("Buyurtmangiz yetkazildi!");\n    }\n}`
      },
      {
        id: 7,
        title: { uz: "7. Interfeysda Standart Metodlar ('default')", en: "7. Interface Default Methods" },
        scenario: { uz: "Mavjud klasslarni buzmasdan interfeysga umumiy metod qo'shish: `default void log() { ... }`.", en: "Add non-breaking behavior contracts using `default` interface methods." },
        requirements: { classes: ["AuditLog"], keywords: ["default"] },
        starterCode: `interface AuditLog {\n    default void log(String event) {\n        System.out.println("[AUDIT]: " + event);\n    }\n}\n\nclass OrderProcessor implements AuditLog {}\n\nclass Main {\n    public static void main(String[] args) {\n        new OrderProcessor().log("Buyurtma yaratildi");\n    }\n}`,
        solution: `interface AuditLog {\n    default void log(String event) {\n        System.out.println("[AUDIT]: " + event);\n    }\n}\n\nclass OrderProcessor implements AuditLog {}\n\nclass Main {\n    public static void main(String[] args) {\n        new OrderProcessor().log("Buyurtma yaratildi");\n    }\n}`
      },
      {
        id: 8,
        title: { uz: "8. Interfeyslararo Merosxo'rlik ('extends')", en: "8. Interfaces Extending Interfaces" },
        scenario: { uz: "Interfeys boshqa interfeysdan meros olishi mumkin: `interface AdvancedPayment extends PaymentMethod`.", en: "Extend interface contracts using `extends`." },
        requirements: { classes: ["PaymentMethod", "RefundablePayment"], keywords: ["extends"] },
        starterCode: `interface PaymentMethod { void pay(double amt); }\ninterface RefundablePayment extends PaymentMethod { void refund(double amt); }\n\nclass ModernGateway implements RefundablePayment {\n    public void pay(double amt) { System.out.println("To'landi: " + amt); }\n    public void refund(double amt) { System.out.println("Qaytarildi: " + amt); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ModernGateway mg = new ModernGateway();\n        mg.pay(10); mg.refund(10);\n    }\n}`,
        solution: `interface PaymentMethod { void pay(double amt); }\ninterface RefundablePayment extends PaymentMethod { void refund(double amt); }\n\nclass ModernGateway implements RefundablePayment {\n    public void pay(double amt) { System.out.println("To'landi: " + amt); }\n    public void refund(double amt) { System.out.println("Qaytarildi: " + amt); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ModernGateway mg = new ModernGateway();\n        mg.pay(10); mg.refund(10);\n    }\n}`
      },
      {
        id: 9,
        title: { uz: "9. Taqqoslash Interfeysi (Comparable)", en: "9. Comparable Contract Implementation" },
        scenario: { uz: "Java standard kutubxonasidagi `Comparable<Product>` interfeysini narx bo'yicha saralash uchun qo'llang.", en: "Implement Java core `Comparable` interface contract." },
        requirements: { classes: ["Product"], keywords: ["Comparable"] },
        starterCode: `class Product implements Comparable<Product> {\n    double price;\n    public Product(double price) { this.price = price; }\n    public int compareTo(Product other) {\n        return Double.compare(this.price, other.price);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product p1 = new Product(10.0);\n        Product p2 = new Product(20.0);\n        System.out.println("Taqqoslash natijasi: " + p1.compareTo(p2));\n    }\n}`,
        solution: `class Product implements Comparable<Product> {\n    double price;\n    public Product(double price) { this.price = price; }\n    public int compareTo(Product other) {\n        return Double.compare(this.price, other.price);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product p1 = new Product(10.0);\n        Product p2 = new Product(20.0);\n        System.out.println("Taqqoslash natijasi: " + p1.compareTo(p2));\n    }\n}`
      },
      {
        id: 10,
        title: { uz: "10. CW2 Kurs Ishi Modeli: Customizer Interfeysi", en: "10. CW2 Customizer Interface Contract" },
        scenario: { uz: "Assessment 2 (50%) talabi: Buyurtma modifikatsiyalari uchun shartnoma: `interface Customizer` (`double getCost()`, `String getLabel()`).", en: "Build extensible customizer contract for CW2 architecture." },
        requirements: { classes: ["Customizer", "SyrupCustomizer"], methods: ["getCost", "getLabel"] },
        starterCode: `interface Customizer {\n    double getCost();\n    String getLabel();\n}\n\nclass SyrupCustomizer implements Customizer {\n    public double getCost() { return 0.75; }\n    public String getLabel() { return "Vanil siropi"; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customizer c = new SyrupCustomizer();\n        System.out.println(c.getLabel() + " qo'shimcha narxi: $" + c.getCost());\n    }\n}`,
        solution: `interface Customizer {\n    double getCost();\n    String getLabel();\n}\n\nclass SyrupCustomizer implements Customizer {\n    public double getCost() { return 0.75; }\n    public String getLabel() { return "Vanil siropi"; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customizer c = new SyrupCustomizer();\n        System.out.println(c.getLabel() + " qo'shimcha narxi: $" + c.getCost());\n    }\n}`
      }
    ]
  },

  // WEEK 6
  {
    weekNum: 6,
    badge: "6-Modul",
    title: {
      uz: "6-Modul: GoF Dizayn Patternlari & CW2 Buyurtma Tizimi",
      en: "Module 6: GoF Design Patterns & CW2 Console App"
    },
    subtitle: {
      uz: "Singleton, Factory, Builder, Decorator, Strategy, Observer",
      en: "Singleton, Factory, Builder, Decorator, Strategy, Observer"
    },
    storageKey: "WIUT_OOP_W6_PROGRESS",
    challenges: [
      {
        id: 1,
        title: { uz: "1. Creational: Singleton Pattern", en: "1. Creational: Singleton Pattern" },
        scenario: { uz: "Assessment 2 (9 marks): Butun dastur bo'yicha bitta yagona `OrderDatabase` bazasi bo'lishi kerak. `private` konstruktor va `getInstance()` metodini yarating.", en: "Implement thread-safe Singleton pattern for order persistence." },
        requirements: { classes: ["OrderDatabase"], methods: ["getInstance"], keywords: ["static", "private"] },
        starterCode: `class OrderDatabase {\n    private static OrderDatabase instance;\n    private OrderDatabase() {}\n    public static OrderDatabase getInstance() {\n        if (instance == null) instance = new OrderDatabase();\n        return instance;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        OrderDatabase db1 = OrderDatabase.getInstance();\n        OrderDatabase db2 = OrderDatabase.getInstance();\n        System.out.println("Aynan bir xil nusxami? " + (db1 == db2));\n    }\n}`,
        solution: `class OrderDatabase {\n    private static OrderDatabase instance;\n    private OrderDatabase() {}\n    public static OrderDatabase getInstance() {\n        if (instance == null) instance = new OrderDatabase();\n        return instance;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        OrderDatabase db1 = OrderDatabase.getInstance();\n        OrderDatabase db2 = OrderDatabase.getInstance();\n        System.out.println("Aynan bir xil nusxami? " + (db1 == db2));\n    }\n}`
      },
      {
        id: 2,
        title: { uz: "2. Creational: Factory Method Pattern", en: "2. Creational: Factory Method Pattern" },
        scenario: { uz: "Assessment 2 (9 marks): Obyekt yaratishni klientdan yashirish. `CoffeeFactory.createCoffee(String type)` fabrikasini quring.", en: "Encapsulate product instantiations via `CoffeeFactory`." },
        requirements: { classes: ["CoffeeFactory"], methods: ["createCoffee"] },
        starterCode: `interface Coffee { String getName(); }\nclass Latte implements Coffee { public String getName() { return "Latte"; } }\nclass Espresso implements Coffee { public String getName() { return "Espresso"; } }\n\nclass CoffeeFactory {\n    public static Coffee createCoffee(String type) {\n        if ("latte".equalsIgnoreCase(type)) return new Latte();\n        return new Espresso();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Coffee c = CoffeeFactory.createCoffee("latte");\n        System.out.println("Fabrika yaratdi: " + c.getName());\n    }\n}`,
        solution: `interface Coffee { String getName(); }\nclass Latte implements Coffee { public String getName() { return "Latte"; } }\nclass Espresso implements Coffee { public String getName() { return "Espresso"; } }\n\nclass CoffeeFactory {\n    public static Coffee createCoffee(String type) {\n        if ("latte".equalsIgnoreCase(type)) return new Latte();\n        return new Espresso();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Coffee c = CoffeeFactory.createCoffee("latte");\n        System.out.println("Fabrika yaratdi: " + c.getName());\n    }\n}`
      },
      {
        id: 3,
        title: { uz: "3. Creational: Builder Pattern", en: "3. Creational: Builder Pattern" },
        scenario: { uz: "Ko'p parametrlarga ega murakkab buyurtmani zanjirli (fluent) usulda qurish: `new OrderBuilder().setSize(\"L\").setSweetener(\"Honey\").build();`.", en: "Implement Builder pattern with fluent method chaining." },
        requirements: { classes: ["Order", "OrderBuilder"], methods: ["build"] },
        starterCode: `class Order {\n    String size;\n    String sweetener;\n}\nclass OrderBuilder {\n    private Order order = new Order();\n    public OrderBuilder setSize(String s) { order.size = s; return this; }\n    public OrderBuilder setSweetener(String sw) { order.sweetener = sw; return this; }\n    public Order build() { return order; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Order o = new OrderBuilder().setSize("Large").setSweetener("Asal").build();\n        System.out.println("Buyurtma: " + o.size + ", " + o.sweetener);\n    }\n}`,
        solution: `class Order {\n    String size;\n    String sweetener;\n}\nclass OrderBuilder {\n    private Order order = new Order();\n    public OrderBuilder setSize(String s) { order.size = s; return this; }\n    public OrderBuilder setSweetener(String sw) { order.sweetener = sw; return this; }\n    public Order build() { return order; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Order o = new OrderBuilder().setSize("Large").setSweetener("Asal").build();\n        System.out.println("Buyurtma: " + o.size + ", " + o.sweetener);\n    }\n}`
      },
      {
        id: 4,
        title: { uz: "4. Structural: Decorator Pattern Asosi", en: "4. Structural: Decorator Pattern Core" },
        scenario: { uz: "Assessment 2 (9 marks): Kofe narxini va tarkibini dinamik kengaytirish uchun abstrakt `CoffeeDecorator` yarating.", en: "Implement base Decorator pattern extending and wrapping base component." },
        requirements: { classes: ["Coffee", "CoffeeDecorator"], methods: ["getCost", "getDescription"] },
        starterCode: `interface Coffee { double getCost(); String getDescription(); }\nclass SimpleCoffee implements Coffee {\n    public double getCost() { return 2.0; }\n    public String getDescription() { return "Oddiy Qahva"; }\n}\nabstract class CoffeeDecorator implements Coffee {\n    protected Coffee decoratedCoffee;\n    public CoffeeDecorator(Coffee c) { this.decoratedCoffee = c; }\n    public double getCost() { return decoratedCoffee.getCost(); }\n    public String getDescription() { return decoratedCoffee.getDescription(); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println("Decorator asosi tayyor!");\n    }\n}`,
        solution: `interface Coffee { double getCost(); String getDescription(); }\nclass SimpleCoffee implements Coffee {\n    public double getCost() { return 2.0; }\n    public String getDescription() { return "Oddiy Qahva"; }\n}\nabstract class CoffeeDecorator implements Coffee {\n    protected Coffee decoratedCoffee;\n    public CoffeeDecorator(Coffee c) { this.decoratedCoffee = c; }\n    public double getCost() { return decoratedCoffee.getCost(); }\n    public String getDescription() { return decoratedCoffee.getDescription(); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println("Decorator asosi tayyor!");\n    }\n}`
      },
      {
        id: 5,
        title: { uz: "5. Structural: Milk & Syrup Decorator", en: "5. Concrete Decorators (Milk & Syrup)" },
        scenario: { uz: "`MilkDecorator` va `SyrupDecorator` klasslarini yozing. Ular narxga $0.5 va $0.7 qo'shsin.", en: "Implement concrete decorators wrapping orders dynamically." },
        requirements: { classes: ["MilkDecorator"] },
        starterCode: `interface Coffee { double getCost(); String getDescription(); }\nclass SimpleCoffee implements Coffee { public double getCost() { return 2.0; } public String getDescription() { return "Qahva"; } }\nabstract class CoffeeDecorator implements Coffee {\n    protected Coffee decorated;\n    public CoffeeDecorator(Coffee c) { this.decorated = c; }\n}\nclass MilkDecorator extends CoffeeDecorator {\n    public MilkDecorator(Coffee c) { super(c); }\n    public double getCost() { return decorated.getCost() + 0.5; }\n    public String getDescription() { return decorated.getDescription() + " + Sut"; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Coffee myCoffee = new MilkDecorator(new SimpleCoffee());\n        System.out.println(myCoffee.getDescription() + ": $" + myCoffee.getCost());\n    }\n}`,
        solution: `interface Coffee { double getCost(); String getDescription(); }\nclass SimpleCoffee implements Coffee { public double getCost() { return 2.0; } public String getDescription() { return "Qahva"; } }\nabstract class CoffeeDecorator implements Coffee {\n    protected Coffee decorated;\n    public CoffeeDecorator(Coffee c) { this.decorated = c; }\n}\nclass MilkDecorator extends CoffeeDecorator {\n    public MilkDecorator(Coffee c) { super(c); }\n    public double getCost() { return decorated.getCost() + 0.5; }\n    public String getDescription() { return decorated.getDescription() + " + Sut"; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Coffee myCoffee = new MilkDecorator(new SimpleCoffee());\n        System.out.println(myCoffee.getDescription() + ": $" + myCoffee.getCost());\n    }\n}`
      },
      {
        id: 6,
        title: { uz: "6. Structural: Adapter Pattern", en: "6. Structural: Adapter Pattern" },
        scenario: { uz: "Eski bank API tizimi (`OldBankAPI`) yangi `PaymentGateway` interfeysiga mos kelmaydi. Ularni bog'lovchi `BankAdapter` yarating.", en: "Translate incompatible third-party interfaces using Adapter pattern." },
        requirements: { classes: ["PaymentGateway", "BankAdapter"] },
        starterCode: `interface PaymentGateway { void executePayment(double sum); }\nclass OldBankAPI { public void sendMoney(int cents) { System.out.println("Eski Bank: " + cents + " sent"); } }\n\nclass BankAdapter implements PaymentGateway {\n    private OldBankAPI oldBank;\n    public BankAdapter(OldBankAPI oldBank) { this.oldBank = oldBank; }\n    public void executePayment(double sum) {\n        oldBank.sendMoney((int)(sum * 100));\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentGateway gateway = new BankAdapter(new OldBankAPI());\n        gateway.executePayment(25.50);\n    }\n}`,
        solution: `interface PaymentGateway { void executePayment(double sum); }\nclass OldBankAPI { public void sendMoney(int cents) { System.out.println("Eski Bank: " + cents + " sent"); } }\n\nclass BankAdapter implements PaymentGateway {\n    private OldBankAPI oldBank;\n    public BankAdapter(OldBankAPI oldBank) { this.oldBank = oldBank; }\n    public void executePayment(double sum) {\n        oldBank.sendMoney((int)(sum * 100));\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentGateway gateway = new BankAdapter(new OldBankAPI());\n        gateway.executePayment(25.50);\n    }\n}`
      },
      {
        id: 7,
        title: { uz: "7. Behavioural: Strategy Pattern", en: "7. Behavioural: Strategy Pattern" },
        scenario: { uz: "Assessment 2 (9 marks): Chegirma hisoblash algoritmini dinamik almashtirish. `DiscountStrategy` (`NoDiscount`, `TenPercentDiscount`).", en: "Interchange discount calculation algorithms dynamically via Strategy pattern." },
        requirements: { classes: ["DiscountStrategy", "TenPercentDiscount"], methods: ["applyDiscount"] },
        starterCode: `interface DiscountStrategy { double applyDiscount(double amount); }\nclass NoDiscount implements DiscountStrategy { public double applyDiscount(double a) { return a; } }\nclass TenPercentDiscount implements DiscountStrategy { public double applyDiscount(double a) { return a * 0.90; } }\n\nclass Main {\n    public static void main(String[] args) {\n        DiscountStrategy strat = new TenPercentDiscount();\n        System.out.println("Chegirmali narx: $" + strat.applyDiscount(100.0));\n    }\n}`,
        solution: `interface DiscountStrategy { double applyDiscount(double amount); }\nclass NoDiscount implements DiscountStrategy { public double applyDiscount(double a) { return a; } }\nclass TenPercentDiscount implements DiscountStrategy { public double applyDiscount(double a) { return a * 0.90; } }\n\nclass Main {\n    public static void main(String[] args) {\n        DiscountStrategy strat = new TenPercentDiscount();\n        System.out.println("Chegirmali narx: $" + strat.applyDiscount(100.0));\n    }\n}`
      },
      {
        id: 8,
        title: { uz: "8. Behavioural: Observer Pattern", en: "8. Behavioural: Observer Pattern" },
        scenario: { uz: "Buyurtma holati o'zgarganda mijozga darhol xabar yuborish: `OrderObserver` va `CustomerNotifier`.", en: "Notify registered observers when order state mutates." },
        requirements: { classes: ["OrderObserver", "CustomerNotifier"], methods: ["onUpdate"] },
        starterCode: `interface OrderObserver { void onUpdate(String status); }\nclass CustomerNotifier implements OrderObserver {\n    public void onUpdate(String status) { System.out.println("Mijozga xabar: " + status); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        OrderObserver obs = new CustomerNotifier();\n        obs.onUpdate("Buyurtmangiz tayyor!");\n    }\n}`,
        solution: `interface OrderObserver { void onUpdate(String status); }\nclass CustomerNotifier implements OrderObserver {\n    public void onUpdate(String status) { System.out.println("Mijozga xabar: " + status); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        OrderObserver obs = new CustomerNotifier();\n        obs.onUpdate("Buyurtmangiz tayyor!");\n    }\n}`
      },
      {
        id: 9,
        title: { uz: "9. Command Pattern (Undo / Bekor Qilish)", en: "9. Command Pattern (Undo Customization)" },
        scenario: { uz: "CW2 taklif qilingan funksiyasi: Oxirgi kiritilgan modifikatsiyani bekor qilish (`undoLastCustomization()`).", en: "Implement undoable customizations using Command pattern." },
        requirements: { classes: ["Command"] },
        starterCode: `interface Command { void execute(); void undo(); }\n\nclass AddSyrupCommand implements Command {\n    public void execute() { System.out.println("Sirop qo'shildi."); }\n    public void undo() { System.out.println("Sirop bekor qilindi (Undo)."); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Command cmd = new AddSyrupCommand();\n        cmd.execute();\n        cmd.undo();\n    }\n}`,
        solution: `interface Command { void execute(); void undo(); }\n\nclass AddSyrupCommand implements Command {\n    public void execute() { System.out.println("Sirop qo'shildi."); }\n    public void undo() { System.out.println("Sirop bekor qilindi (Undo)."); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Command cmd = new AddSyrupCommand();\n        cmd.execute();\n        cmd.undo();\n    }\n}`
      },
      {
        id: 10,
        title: { uz: "10. CW2 Final Loyihasi: Console Order App Arxitekturasi", en: "10. CW2 Grand Assembly: Console Order App" },
        scenario: { uz: "Westminster CW2 (50% Kurs Ishi): Creational (Factory), Structural (Decorator) va Behavioural (Observer) patternlarini bitta dasturga jamlang (100 marks)!", en: "Grand architectural assembly matching full CW2 specifications." },
        requirements: { classes: ["Coffee", "OrderObserver", "CoffeeFactory"], methods: ["createCoffee"] },
        starterCode: `// =========================================================\n// WESTMINSTER CW2 5COSC018C — ORDER APP GRAND ARCHITECTURE\n// =========================================================\n\ninterface Coffee { double getPrice(); String getName(); }\nclass Latte implements Coffee { public double getPrice() { return 4.0; } public String getName() { return "Latte"; } }\n\n// 1. Creational: Factory\nclass CoffeeFactory {\n    public static Coffee createCoffee(String type) {\n        return new Latte();\n    }\n}\n\n// 2. Structural: Decorator\nclass CaramelDecorator implements Coffee {\n    private Coffee base;\n    public CaramelDecorator(Coffee base) { this.base = base; }\n    public double getPrice() { return base.getPrice() + 0.8; }\n    public String getName() { return base.getName() + " + Karamel"; }\n}\n\n// 3. Behavioural: Observer\ninterface OrderObserver { void notifyUser(String s); }\nclass ConsoleNotifier implements OrderObserver {\n    public void notifyUser(String s) { System.out.println("📢 Xabar: " + s); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        // 1. Fabrikadan buyurtma olish\n        Coffee order = CoffeeFactory.createCoffee("latte");\n        \n        // 2. Kustomizatsiya qo'shish (Decorator)\n        order = new CaramelDecorator(order);\n        \n        // 3. Xabarnoma yuborish (Observer)\n        OrderObserver notifier = new ConsoleNotifier();\n        notifier.notifyUser(order.getName() + " tayyorlandi! Narx: $" + order.getPrice());\n    }\n}`,
        solution: `interface Coffee { double getPrice(); String getName(); }\nclass Latte implements Coffee { public double getPrice() { return 4.0; } public String getName() { return "Latte"; } }\n\nclass CoffeeFactory {\n    public static Coffee createCoffee(String type) {\n        return new Latte();\n    }\n}\n\nclass CaramelDecorator implements Coffee {\n    private Coffee base;\n    public CaramelDecorator(Coffee base) { this.base = base; }\n    public double getPrice() { return base.getPrice() + 0.8; }\n    public String getName() { return base.getName() + " + Karamel"; }\n}\n\ninterface OrderObserver { void notifyUser(String s); }\nclass ConsoleNotifier implements OrderObserver {\n    public void notifyUser(String s) { System.out.println("📢 Xabar: " + s); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Coffee order = CoffeeFactory.createCoffee("latte");\n        order = new CaramelDecorator(order);\n        OrderObserver notifier = new ConsoleNotifier();\n        notifier.notifyUser(order.getName() + " tayyorlandi! Narx: $" + order.getPrice());\n    }\n}`
      }
    ]
  }
];

function generateHtml(weekData) {
  return `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
  <title>OOP Academy • ${weekData.badge} | SeventyOne+ Academy</title>
  
  <script src="https://telegram.org/js/telegram-web-app.js"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="../oop-w1-game/styles.css?v=20261017_oop_w${weekData.weekNum}">
</head>
<body>

  <header class="top-hud">
    <div class="brand-box">
      <a href="../index.html" class="btn-back" title="OOP Hubga Qaytish">← OOP Hubga Qaytish</a>
      <div class="brand-emblem">☕</div>
      <div>
        <div class="brand-title">
          ${weekData.title.uz}
          <span class="brand-badge">OpenJDK 21 • 150 Keys</span>
        </div>
      </div>
    </div>

    <div class="hud-actions">
      <div class="lang-switch-box">
        <button id="btnLangUz" class="btn-lang active" type="button">UZ</button>
        <button id="btnLangEn" class="btn-lang" type="button">EN</button>
      </div>

      <div class="stat-pill">
        <span style="color:var(--text-muted);">Reyting Bali:</span>
        <span id="hudRatingPoints" style="font-weight:700; color:var(--accent-emerald-bright); font-family:'JetBrains Mono', monospace;">0 Ball</span>
      </div>
    </div>
  </header>

  <nav class="q-strip" id="qStrip"></nav>

  <main class="ide-workspace">
    <section class="pane-left">
      <div class="pane-tabs">
        <button id="tabProblem" class="tab-btn active"><span>📝</span> <span>Masala Sharti</span></button>
        <button id="tabUML" class="tab-btn"><span>📊</span> <span>Jonli UML Diagrammasi</span></button>
      </div>

      <div id="contentProblem" class="pane-tab-content">
        <div class="problem-header">
          <span id="problemBadge" class="problem-badge">${weekData.badge} • 1-Topshiriq</span>
          <h2 id="problemTitle" class="problem-title">Topshiriq Sarlavhasi</h2>
        </div>

        <div class="feynman-box">
          <p id="problemScenario"></p>
        </div>

        <div class="task-requirements">
          <h4>Vazifa Talablari:</h4>
          <ul id="taskReqList">
            <li>Sinf, interfeys va metodlarni belgilanganidek to'g'ri yozing.</li>
            <li>Sintaksis xatolarisiz va clean code qoidalariga amal qiling.</li>
          </ul>
        </div>

        <div class="solution-toggle-card">
          <button id="btnToggleSolution" class="solution-btn">
            <span>💡 Batafsil Yechim</span>
            <span style="font-size:11px; color:#8b83ba;">[Ko'rish ▾]</span>
          </button>
          <div id="solutionContentCard" style="display:none;">
            <pre id="solutionContent" class="solution-content"></pre>
          </div>
        </div>
      </div>

      <div id="contentUML" class="pane-tab-content" style="display:none; padding:10px; height:100%;">
        <div id="umlContainer" style="width:100%; height:100%; min-height:350px;"></div>
      </div>
    </section>

    <section class="pane-right">
      <div class="editor-toolbar">
        <div class="editor-filename">
          <span>☕</span> <span>Main.java</span>
        </div>

        <div class="btn-group">
          <button id="btnResetCode" class="btn btn-secondary">↺ Asliga qaytarish</button>
          <button id="btnInstantTest" class="btn btn-primary">▶ Kodni Tekshirish</button>
          <button id="btnCloudRun" class="btn btn-cloud">☕ Ishga tushirish (OpenJDK 21)</button>
          <button id="btnNextChallenge" class="btn btn-secondary">Keyingi →</button>
        </div>
      </div>

      <div class="editor-wrapper">
        <textarea id="codeEditor" class="code-textarea" spellcheck="false"></textarea>
      </div>

      <div class="console-section">
        <div class="console-header">
          <div class="console-tabs">
            <button class="c-tab active">💻 Java Konsoli (Terminal)</button>
          </div>
          <span style="font-size:11px; color:#64748b; font-family:'JetBrains Mono', monospace;">OpenJDK 21 Environment</span>
        </div>
        <div id="consoleOutput" class="console-output">Java konsoli tayyor. '▶ Kodni Tekshirish' yoki '☕ Ishga tushirish (OpenJDK 21)' tugmasini bosing.</div>
      </div>
    </section>
  </main>

  <script src="../shared/java-runner.js?v=20261017_oop_w${weekData.weekNum}"></script>
  <script src="../shared/uml-renderer.js?v=20261017_oop_w${weekData.weekNum}"></script>
  <script src="game.js?v=20261017_oop_w${weekData.weekNum}"></script>

</body>
</html>`;
}

function generateJs(weekData) {
  const challengesJson = JSON.stringify(weekData.challenges, null, 2);

  return `// ============================================================================
// OOP ACADEMY — ${weekData.badge} GAME LOGIC: ${weekData.subtitle.uz.toUpperCase()}
// Professor Ada's Interactive Java IDE Simulator • WIUT 5COSC018C
// ============================================================================

(function () {
  "use strict";

  const STORAGE_KEY = "${weekData.storageKey}";
  let currentLang = "uz";
  let currentQIndex = 0;
  let solvedQuestions = new Set();

  const CHALLENGES = ${challengesJson};

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
      dot.className = \`q-dot \${idx === currentQIndex ? "active" : ""} \${solvedQuestions.has(ch.id) ? "solved" : ""}\`;
      dot.textContent = ch.id;
      dot.title = ch.title[currentLang];
      dot.addEventListener("click", () => switchChallenge(idx));
      qStrip.appendChild(dot);
    });

    const elPoints = document.getElementById("hudRatingPoints");
    if (elPoints) elPoints.textContent = \`\${solvedQuestions.size * 50} Ball\`;
  }

  function renderChallenge() {
    const ch = CHALLENGES[currentQIndex];
    if (!ch) return;

    const elBadge = document.getElementById("problemBadge");
    const elTitle = document.getElementById("problemTitle");
    const elScenario = document.getElementById("problemScenario");
    const elSolutionText = document.getElementById("solutionContent");
    const elSolutionCard = document.getElementById("solutionContentCard");

    if (elBadge) elBadge.textContent = \`${weekData.badge} • \${ch.id}-Topshiriq\`;
    if (elTitle) elTitle.textContent = ch.title[currentLang];
    if (elScenario) elScenario.textContent = ch.scenario[currentLang];
    if (elSolutionText) elSolutionText.textContent = ch.solution;
    if (elSolutionCard) elSolutionCard.style.display = "none";

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

    let report = "=== TEZKOR TEKSHIRUV NATIJASI ===\\n";
    validation.tests.forEach(t => {
      report += (t.passed ? "✅ " : "❌ ") + t.name + ": " + t.feedback + "\\n";
    });

    if (validation.passed) {
      solvedQuestions.add(ch.id);
      saveSolved();
      renderHUD();
      consoleOut.className = "console-output success";
      report += \`\\n🎉 TABRIKLAYMIZ! Barcha shartlar to'liq bajarildi! (+50 Ball)\\n💡 '☕ Ishga tushirish (OpenJDK 21)' orqali real konsol natijasini ko'rishingiz mumkin!\`;
    } else {
      consoleOut.className = "console-output error";
      report += \`\\n⚠️ Ba'zi shartlar hali to'liq emas. Kodni qayta ko'rib chiqing.\`;
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
      consoleOut.textContent = \`=== OPENJDK 21 CHIQISHI (STDOUT) ===\\n\\n\${res.output || "(Dastur chiqishsiz muvaffaqiyatli yakunlandi)"}\\n\\n✅ Kod muvaffaqiyatli kompilyatsiya qilindi va bajarildi!\`;
    } else {
      consoleOut.className = "console-output error";
      consoleOut.textContent = \`=== KOMPILYATOR XATOLIGI (JAVAC) ===\\n\\n\${res.errors || "Noma'lum kompilyatsiya xatosi"}\`;
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
      if (card) card.style.display = card.style.display === "none" ? "block" : "none";
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

})();`;
}

// BUILD
console.log('=== BUILDING OOP ACADEMY WEEKS 2 TO 6 ===\n');

WEEKS_DATA.forEach(wData => {
  const dirName = `oop-w${wData.weekNum}-game`;
  const repoWeekDir = path.join(baseDir, dirName);
  const localWeekDir = path.join(localBaseDir, dirName);

  if (!fs.existsSync(repoWeekDir)) fs.mkdirSync(repoWeekDir, { recursive: true });
  if (!fs.existsSync(localWeekDir)) fs.mkdirSync(localWeekDir, { recursive: true });

  const html = generateHtml(wData);
  const js = generateJs(wData);

  fs.writeFileSync(path.join(repoWeekDir, 'index.html'), html, 'utf8');
  fs.writeFileSync(path.join(repoWeekDir, 'game.js'), js, 'utf8');
  fs.writeFileSync(path.join(localWeekDir, 'index.html'), html, 'utf8');
  fs.writeFileSync(path.join(localWeekDir, 'game.js'), js, 'utf8');

  console.log(`[CREATED] ${dirName} in DS repo & local OOP`);
});

console.log('\n=== COMPLETED OOP WEEKS GENERATION ===');
