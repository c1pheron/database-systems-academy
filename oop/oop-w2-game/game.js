// ============================================================================
// OOP ACADEMY — 2-Modul GAME LOGIC: INKAPSULYATSIYA, GETTERS/SETTERS & VALIDATSIYA
// Professor Ada's Interactive Java IDE Simulator • WIUT 5COSC018C
// ============================================================================

(function () {
  "use strict";

  const STORAGE_KEY = "WIUT_OOP_W2_PROGRESS";
  let currentLang = "uz";
  let currentQIndex = 0;
  let solvedQuestions = new Set();

  const CHALLENGES = [
    {
      id: 1,
      title: {
        uz: "1. 'private' Modifikatori va Inkapsulyatsiya",
        en: "1. 'private' Modifier & Encapsulation"
      },
      scenario: {
        uz: "Do'konda tovar narxini har kim o'zboshimchalik bilan manfiy qilib o'zgartira olmasligi kerak. Maydonlarni 'private' qilib berkitish orqali to'g'ridan-to'g'ri tashqaridan kirishni taqiqlang.",
        en: "Protect fields from unauthorized modification by declaring `private double price;`."
      },
      requirements: {
        classes: ["Product"],
        privateFields: ["price"],
        fields: [
          { name: "name", type: "String" },
          { name: "price", type: "double" }
        ]
      },
      starterCode: `class Product {
    public String name;
    // price maydonini private qiling
    private double price;

    public Product(String name, double price) {
        this.name = name;
        this.price = price;
    }
}

class Main {
    public static void main(String[] args) {
        Product p = new Product("Smartfon", 800.0);
        System.out.println("Mahsulot: " + p.name);
    }
}`,
      solution: `class Product {
    public String name;
    private double price;

    public Product(String name, double price) {
        this.name = name;
        this.price = price;
    }
}

class Main {
    public static void main(String[] args) {
        Product p = new Product("Smartfon", 800.0);
        System.out.println("Mahsulot: " + p.name);
    }
}`,
      detailedSolution: {
        theory: "Inkapsulyatsiya — obyekt ma'lumotlarini (state) tashqi to'g'ridan-to'g'ri aralashuvdan himoyalashdir. 'private' maydonlarga faqat klass ichidagi metodlar kira oladi.",
        theoryEn: "Encapsulation safeguards internal state from arbitrary mutation by scoping fields with 'private' access modifiers.",
        cleanCode: `class Product {
    public String name;
    private double price;

    public Product(String name, double price) {
        this.name = name;
        this.price = price;
    }
}

class Main {
    public static void main(String[] args) {
        Product p = new Product("Smartfon", 800.0);
        System.out.println("Mahsulot: " + p.name);
    }
}`,
        breakdown: [
          "<code>private double price;</code>: 'price' maydoni tashqi dunyodan yashirildi.",
          "<code>Main.main()</code> da <code>p.price = -100</code> deb to'g'ridan-to'g'ri yozib bo'lmaydi (kompilyator taqiqlaydi)."
        ],
        pitfalls: "Maydonlarni 'public' yoki default (package-private) qoldirish xavfsizlikni yo'qotadi.",
        cw2Viva: "Westminster CW2 baholash mezonida 'Encapsulation' uchun qat'iy 6 ball ajratilgan. Barcha model maydonlari 'private' bo'lishi shart."
      }
    },
    {
      id: 2,
      title: {
        uz: "2. Getter Metodi orqali O'qish",
        en: "2. Getter Method for Safe Reading"
      },
      scenario: {
        uz: "Narx 'private' bo'lgani sababli, endi uni xavfsiz o'qish uchun `public double getPrice()` getter metodini yarating.",
        en: "Expose encapsulated state safely via `public double getPrice()`."
      },
      requirements: {
        classes: ["Product"],
        methods: ["getPrice"],
        privateFields: ["price"]
      },
      starterCode: `class Product {
    private double price;

    public Product(double price) {
        this.price = price;
    }

    // getPrice metodini yarating
    public double getPrice() {
        return this.price;
    }
}

class Main {
    public static void main(String[] args) {
        Product p = new Product(450.0);
        System.out.println("Narx: $" + p.getPrice());
    }
}`,
      solution: `class Product {
    private double price;

    public Product(double price) {
        this.price = price;
    }

    public double getPrice() {
        return this.price;
    }
}

class Main {
    public static void main(String[] args) {
        Product p = new Product(450.0);
        System.out.println("Narx: $" + p.getPrice());
    }
}`,
      detailedSolution: {
        theory: "Getter (Accessor) metodi — tashqi dunyoga private maydon qiymatini o'qish huquqini beradi, lekin uni o'zgartirishga yo'l qo'ymaydi (Read-Only nazorati).",
        theoryEn: "Getter methods expose controlled read access to private variables without granting write mutability.",
        cleanCode: `class Product {
    private double price;

    public Product(double price) {
        this.price = price;
    }

    public double getPrice() {
        return this.price;
    }
}

class Main {
    public static void main(String[] args) {
        Product p = new Product(450.0);
        System.out.println("Narx: $" + p.getPrice());
    }
}`,
        breakdown: [
          "<code>public double getPrice()</code>: Maydon turiga mos 'double' qaytaruvchi ochiq metod.",
          "<code>return this.price;</code>: Yashirin narx qiymatini chaqiruvchiga uzatadi."
        ],
        pitfalls: "Getter metodini 'void' deb belgilash yoki maydon turidan boshqa tur (masalan String) qaytarish.",
        cw2Viva: "JavaBeans konvensiyasiga ko'ra getter nomi 'get' prefiksi va maydonning bosh harfi bilan boshlanadi: 'getPrice'."
      }
    },
    {
      id: 3,
      title: {
        uz: "3. Setter Metodi va Narx Validatsiyasi",
        en: "3. Setter & Price Validation"
      },
      scenario: {
        uz: "Narx hech qachon manfiy bo'lmasligi kerak. `setPrice(double price)` setter metodida agar `price >= 0` bo'lsa o'zgartiring, aks holda ogohlantirish chiqaring.",
        en: "Add `setPrice(double price)` with business logic ensuring price is non-negative."
      },
      requirements: {
        classes: ["Product"],
        methods: ["setPrice", "getPrice"],
        privateFields: ["price"]
      },
      starterCode: `class Product {
    private double price;

    public void setPrice(double price) {
        if (price >= 0) {
            this.price = price;
        } else {
            System.out.println("Xato: Narx manfiy bo'lishi mumkin emas!");
        }
    }

    public double getPrice() {
        return this.price;
    }
}

class Main {
    public static void main(String[] args) {
        Product p = new Product();
        p.setPrice(100.0);
        p.setPrice(-50.0); // Xatolik tekshiruvi
        System.out.println("Yakuniy narx: $" + p.getPrice());
    }
}`,
      solution: `class Product {
    private double price;

    public void setPrice(double price) {
        if (price >= 0) {
            this.price = price;
        } else {
            System.out.println("Xato: Narx manfiy bo'lishi mumkin emas!");
        }
    }

    public double getPrice() {
        return this.price;
    }
}

class Main {
    public static void main(String[] args) {
        Product p = new Product();
        p.setPrice(100.0);
        p.setPrice(-50.0);
        System.out.println("Yakuniy narx: $" + p.getPrice());
    }
}`,
      detailedSolution: {
        theory: "Setter (Mutator) metodi — maydonga qiymat yozishdan oldin biznes qoidalarini (validatsiya) tekshiruvchi darvoza vazifasini o'taydi.",
        theoryEn: "Mutator setters act as defensive gates validating incoming data against domain rules prior to assigning state.",
        cleanCode: `class Product {
    private double price;

    public void setPrice(double price) {
        if (price >= 0) {
            this.price = price;
        } else {
            System.out.println("Xato: Narx manfiy bo'lishi mumkin emas!");
        }
    }

    public double getPrice() {
        return this.price;
    }
}

class Main {
    public static void main(String[] args) {
        Product p = new Product();
        p.setPrice(100.0);
        p.setPrice(-50.0);
        System.out.println("Yakuniy narx: $" + p.getPrice());
    }
}`,
        breakdown: [
          "<code>if (price >= 0)</code>: Narx 0 yoki musbat ekanligi tekshiriladi.",
          "Manfiy qiymat kelsa, obyekt o'zining avvalgi to'g'ri holatini saqlab qoladi."
        ],
        pitfalls: "Tekshiruvsiz 'this.price = price;' deb to'g'ridan-to'g'ri yozish inkapsulyatsiya xavfsizligini barbod qiladi.",
        cw2Viva: "Viva imtihonida: 'Nega public maydon o'rniga setter ishlatamiz?' deb so'raladi. Javob: Validatsiya qilish va kelajakda kodni buzmasdan ichki logikani o'zgartirish uchun!"
      }
    },
    {
      id: 4,
      title: {
        uz: "4. Ism Validatsiyasi (Null & Empty Check)",
        en: "4. Name Validation (Null & Empty Check)"
      },
      scenario: {
        uz: "Tovar nomi bo'sh yoki `null` bo'lishi mumkin emas. `setName(String name)` metodida tekshiruv o'rnating.",
        en: "Enforce valid non-empty string in `setName(String name)`."
      },
      requirements: {
        classes: ["Product"],
        methods: ["setName", "getName"],
        privateFields: ["name"]
      },
      starterCode: `class Product {
    private String name;

    public void setName(String name) {
        if (name != null && !name.trim().isEmpty()) {
            this.name = name;
        } else {
            System.out.println("Xato: Nomi bo'sh bo'lishi mumkin emas!");
        }
    }

    public String getName() {
        return this.name;
    }
}

class Main {
    public static void main(String[] args) {
        Product p = new Product();
        p.setName("Planshet");
        System.out.println("Mahsulot: " + p.getName());
    }
}`,
      solution: `class Product {
    private String name;

    public void setName(String name) {
        if (name != null && !name.trim().isEmpty()) {
            this.name = name;
        } else {
            System.out.println("Xato: Nomi bo'sh bo'lishi mumkin emas!");
        }
    }

    public String getName() {
        return this.name;
    }
}

class Main {
    public static void main(String[] args) {
        Product p = new Product();
        p.setName("Planshet");
        System.out.println("Mahsulot: " + p.getName());
    }
}`,
      detailedSolution: {
        theory: "String parametrlarini tekshirishda ikkita muhim shart bor: 1) `name != null` (NullPointer bo'lmasligi uchun), 2) `!name.trim().isEmpty()` (faqat probellardan iborat bo'lmasligi uchun).",
        theoryEn: "Robust string validation requires null-safety checks followed by whitespace-trimmed emptiness checks.",
        cleanCode: `class Product {
    private String name;

    public void setName(String name) {
        if (name != null && !name.trim().isEmpty()) {
            this.name = name;
        } else {
            System.out.println("Xato: Nomi bo'sh bo'lishi mumkin emas!");
        }
    }

    public String getName() {
        return this.name;
    }
}

class Main {
    public static void main(String[] args) {
        Product p = new Product();
        p.setName("Planshet");
        System.out.println("Mahsulot: " + p.getName());
    }
}`,
        breakdown: [
          "<code>name != null</code> birinchi tekshiriladi (Short-circuit evaluation).",
          "<code>name.trim().isEmpty()</code> '   ' kabi soxta bo'sh ismlarni ham cheklaydi."
        ],
        pitfalls: "`name.isEmpty()` ni null tekshiruvidan oldin chaqirish `NullPointerException` keltirib chiqaradi.",
        cw2Viva: "Kurs ishi dasturida mijoz ismi yoki buyurtma nomi bo'sh kiritilganda konsolda xatolik berib, qayta so'rash shart."
      }
    },
    {
      id: 5,
      title: {
        uz: "5. O'zgarmas Klass (Immutable Class)",
        en: "5. Immutable Class"
      },
      scenario: {
        uz: "To'lov cheki (`Receipt`) kabi ma'lumotlar yaratilgandan keyin hech qachon o'zgarmasligi kerak. Maydonlarni `final` qilib, hech qanday setter yaratmang.",
        en: "Create an immutable `Receipt` class with `final` fields and no mutator setters."
      },
      requirements: {
        classes: ["Receipt"],
        keywords: ["final"]
      },
      starterCode: `final class Receipt {
    private final String transactionId;
    private final double amount;

    public Receipt(String transactionId, double amount) {
        this.transactionId = transactionId;
        this.amount = amount;
    }

    public String getTransactionId() { return transactionId; }
    public double getAmount() { return amount; }
}

class Main {
    public static void main(String[] args) {
        Receipt r = new Receipt("TXN-9842", 250.0);
        System.out.println("Chek: " + r.getTransactionId() + " -> $" + r.getAmount());
    }
}`,
      solution: `final class Receipt {
    private final String transactionId;
    private final double amount;

    public Receipt(String transactionId, double amount) {
        this.transactionId = transactionId;
        this.amount = amount;
    }

    public String getTransactionId() { return transactionId; }
    public double getAmount() { return amount; }
}

class Main {
    public static void main(String[] args) {
        Receipt r = new Receipt("TXN-9842", 250.0);
        System.out.println("Chek: " + r.getTransactionId() + " -> $" + r.getAmount());
    }
}`,
      detailedSolution: {
        theory: "Immutable (o'zgarmas) obyektlar ko'p oqimli (Multithreaded) tizimlarda 100% xavfsiz (Thread-safe) hisoblanadi. Java'dagi `String`, `Integer` klasslari aynan shu tamoyilda qurilgan.",
        theoryEn: "Immutable classes guarantee thread-safety and eliminate side effects by forbidding any post-instantiation state mutation.",
        cleanCode: `final class Receipt {
    private final String transactionId;
    private final double amount;

    public Receipt(String transactionId, double amount) {
        this.transactionId = transactionId;
        this.amount = amount;
    }

    public String getTransactionId() { return transactionId; }
    public double getAmount() { return amount; }
}

class Main {
    public static void main(String[] args) {
        Receipt r = new Receipt("TXN-9842", 250.0);
        System.out.println("Chek: " + r.getTransactionId() + " -> $" + r.getAmount());
    }
}`,
        breakdown: [
          "<code>final class Receipt</code>: Klassdan voris olib, uning xulqini o'zgartirib bo'lmaydi.",
          "<code>private final ...</code>: Maydonlar faqat konstruktorda 1 marta yoziladi.",
          "Hech qanday setter metodlari mavjud emas."
        ],
        pitfalls: "Immutable klassga setter qo'shish yoki mutable obyektlarni havolasi bilan tashqariga berib yuborish.",
        cw2Viva: "Viva savoli: 'String klassi nega immutable qilingan?' Xavfsizlik, xotirani tejash (String Pool) va Thread-safety uchun!"
      }
    },
    {
      id: 6,
      title: {
        uz: "6. Bank Hisobi va Balans Himoyasi",
        en: "6. BankAccount Balance Protection"
      },
      scenario: {
        uz: "Bank hisobi (`BankAccount`): balansni to'g'ridan-to'g'ri o'zgartirib bo'lmaydi. Faqat `deposit(double amt)` va `withdraw(double amt)` metodlari orqali operatsiya qilinadi.",
        en: "Encapsulate `BankAccount` balance, exposing only `deposit` and `withdraw` methods."
      },
      requirements: {
        classes: ["BankAccount"],
        methods: ["deposit", "withdraw", "getBalance"],
        privateFields: ["balance"]
      },
      starterCode: `class BankAccount {
    private double balance;

    public void deposit(double amount) {
        if (amount > 0) balance += amount;
    }

    public boolean withdraw(double amount) {
        if (amount > 0 && balance >= amount) {
            balance -= amount;
            return true;
        }
        return false;
    }

    public double getBalance() {
        return balance;
    }
}

class Main {
    public static void main(String[] args) {
        BankAccount acc = new BankAccount();
        acc.deposit(500.0);
        acc.withdraw(200.0);
        System.out.println("Balans: $" + acc.getBalance());
    }
}`,
      solution: `class BankAccount {
    private double balance;

    public void deposit(double amount) {
        if (amount > 0) balance += amount;
    }

    public boolean withdraw(double amount) {
        if (amount > 0 && balance >= amount) {
            balance -= amount;
            return true;
        }
        return false;
    }

    public double getBalance() {
        return balance;
    }
}

class Main {
    public static void main(String[] args) {
        BankAccount acc = new BankAccount();
        acc.deposit(500.0);
        acc.withdraw(200.0);
        System.out.println("Balans: $" + acc.getBalance());
    }
}`,
      detailedSolution: {
        theory: "Haqiqiy biznes obyektlarida oddiy `setBalance()` umuman bo'lmasligi kerak! Uning o'rniga domen amallari: `deposit()` va `withdraw()` bo'lishi lozim.",
        theoryEn: "Domain models should express meaningful operations rather than generic setters, securing invariants naturally.",
        cleanCode: `class BankAccount {
    private double balance;

    public void deposit(double amount) {
        if (amount > 0) balance += amount;
    }

    public boolean withdraw(double amount) {
        if (amount > 0 && balance >= amount) {
            balance -= amount;
            return true;
        }
        return false;
    }

    public double getBalance() {
        return balance;
    }
}

class Main {
    public static void main(String[] args) {
        BankAccount acc = new BankAccount();
        acc.deposit(500.0);
        acc.withdraw(200.0);
        System.out.println("Balans: $" + acc.getBalance());
    }
}`,
        breakdown: [
          "<code>deposit()</code> faqat musbat summani qabul qiladi.",
          "<code>withdraw()</code> hisobdagi mablag' yetarli bo'lsagina pul yechishga ruxsat beradi (Invariant protection)."
        ],
        pitfalls: "Balansni yetarli emasligini tekshirmasdan ayirib yuborish (manfiy balans xatosi).",
        cw2Viva: "Kurs ishida ombordagi tovar sonini (stock) kamaytirishda ham xuddi shu prinsip qo'llaniladi."
      }
    },
    {
      id: 7,
      title: {
        uz: "7. Konstruktor Ichida Validatsiya",
        en: "7. Constructor Validation"
      },
      scenario: {
        uz: "Obyekt noto'g'ri holatda yaratilishining oldini oling. Konstruktor ichida narx manfiy kelsa, uni 0.0 qilib to'g'rilang.",
        en: "Enforce validation immediately inside constructor parameters."
      },
      requirements: {
        classes: ["Product"],
        constructors: ["Product"],
        privateFields: ["price"]
      },
      starterCode: `class Product {
    private double price;

    public Product(double price) {
        if (price < 0) {
            this.price = 0.0;
        } else {
            this.price = price;
        }
    }

    public double getPrice() { return price; }
}

class Main {
    public static void main(String[] args) {
        Product p = new Product(-20.0);
        System.out.println("Xavfsiz narx: $" + p.getPrice());
    }
}`,
      solution: `class Product {
    private double price;

    public Product(double price) {
        if (price < 0) {
            this.price = 0.0;
        } else {
            this.price = price;
        }
    }

    public double getPrice() { return price; }
}

class Main {
    public static void main(String[] args) {
        Product p = new Product(-20.0);
        System.out.println("Xavfsiz narx: $" + p.getPrice());
    }
}`,
      detailedSolution: {
        theory: "Obyekt hech qachon noto'g'ri (invalid) holatda dunyoga kelmasligi kerak. Konstruktor validatsiyasi buni 100% kafolatlaydi.",
        theoryEn: "Enforcing invariant checks in constructors guarantees that no object can ever be instantiated in an illegal state.",
        cleanCode: `class Product {
    private double price;

    public Product(double price) {
        if (price < 0) {
            this.price = 0.0;
        } else {
            this.price = price;
        }
    }

    public double getPrice() { return price; }
}

class Main {
    public static void main(String[] args) {
        Product p = new Product(-20.0);
        System.out.println("Xavfsiz narx: $" + p.getPrice());
    }
}`,
        breakdown: [
          "Konstruktorda `price < 0` bo'lsa xavfsiz 0.0 o'rnatiladi yoki xatolik otiladi.",
          "Obyekt doimo ishonchli va tekshirilgan ma'lumotga ega bo'ladi."
        ],
        pitfalls: "Faqat setterda tekshirib, konstruktorda to'g'ridan-to'g'ri `this.price = price` deb qo'yish.",
        cw2Viva: "Viva imtihonida o'qituvchi `new OrderItem(\"Coffee\", -5, -10.0)` berib sinab ko'radi — dastur bunga yo'l qo'ymasligi shart!"
      }
    },
    {
      id: 8,
      title: {
        uz: "8. Boolean Getter (isAvailable Konvensiyasi)",
        en: "8. Boolean Getters Convention"
      },
      scenario: {
        uz: "Java'da boolean maydonlar uchun getter `isAvailable()` yoki `isInStock()` deb nomlanadi. `inStock` maydoni uchun `isInStock()` yozing.",
        en: "Follow Java Bean conventions using `isInStock()` for boolean getters."
      },
      requirements: {
        classes: ["Product"],
        methods: ["isInStock"],
        privateFields: ["inStock"]
      },
      starterCode: `class Product {
    private boolean inStock = true;

    public boolean isInStock() {
        return this.inStock;
    }
}

class Main {
    public static void main(String[] args) {
        Product p = new Product();
        System.out.println("Mavjudmi: " + p.isInStock());
    }
}`,
      solution: `class Product {
    private boolean inStock = true;

    public boolean isInStock() {
        return this.inStock;
    }
}

class Main {
    public static void main(String[] args) {
        Product p = new Product();
        System.out.println("Mavjudmi: " + p.isInStock());
    }
}`,
      detailedSolution: {
        theory: "JavaBeans va Clean Code standartlarida mantiqiy (boolean) maydonlar getteri uchun `get` emas, `is` yoki `has` prefiksi ishlatiladi: `isAvailable()`, `hasDiscount()`.",
        theoryEn: "JavaBean standards specify the 'is' prefix for boolean getters, producing intuitive fluent reading.",
        cleanCode: `class Product {
    private boolean inStock = true;

    public boolean isInStock() {
        return this.inStock;
    }
}

class Main {
    public static void main(String[] args) {
        Product p = new Product();
        System.out.println("Mavjudmi: " + p.isInStock());
    }
}`,
        breakdown: [
          "<code>private boolean inStock = true;</code>: Tovar omborda bor-yo'qligi.",
          "<code>public boolean isInStock()</code>: Tabiiy ingliz tili grammatikasiga mos getter."
        ],
        pitfalls: "`getInStock()` deb nomlash sintaktik xato bo'lmasa-da, Clean Code va professional Java arxitekturasiga to'g'ri kelmaydi.",
        cw2Viva: "Assessment 2 kod uslubi (Coding style & Conventions) bo'yicha baholashda bu kabi detallar inobatga olinadi."
      }
    },
    {
      id: 9,
      title: {
        uz: "9. Inkapsulyatsiyalangan Hisob-Kitob (Read-Only)",
        en: "9. Calculated Read-Only Property"
      },
      scenario: {
        uz: "`OrderItem` klassi: `quantity` va `unitPrice` maydonlarini inkapsulyatsiya qilib, umumiy narxni hisoblovchi `getTotalPrice()` getterini yarating.",
        en: "Create calculated property `getTotalPrice()` from private `quantity` and `unitPrice`."
      },
      requirements: {
        classes: ["OrderItem"],
        methods: ["getTotalPrice"],
        privateFields: ["quantity", "unitPrice"]
      },
      starterCode: `class OrderItem {
    private int quantity;
    private double unitPrice;

    public OrderItem(int quantity, double unitPrice) {
        this.quantity = quantity;
        this.unitPrice = unitPrice;
    }

    public double getTotalPrice() {
        return this.quantity * this.unitPrice;
    }
}

class Main {
    public static void main(String[] args) {
        OrderItem item = new OrderItem(3, 12.0);
        System.out.println("Jami summa: $" + item.getTotalPrice());
    }
}`,
      solution: `class OrderItem {
    private int quantity;
    private double unitPrice;

    public OrderItem(int quantity, double unitPrice) {
        this.quantity = quantity;
        this.unitPrice = unitPrice;
    }

    public double getTotalPrice() {
        return this.quantity * this.unitPrice;
    }
}

class Main {
    public static void main(String[] args) {
        OrderItem item = new OrderItem(3, 12.0);
        System.out.println("Jami summa: $" + item.getTotalPrice());
    }
}`,
      detailedSolution: {
        theory: "Maydon sifatida saqlash shart bo'lmagan, boshqa maydonlardan hisoblanadigan qiymatlar (masalan jami summa) alohida maydon qilinmaydi, getter orqali hisoblanadi. Bu ma'lumotlar sinxronligini saqlaydi.",
        theoryEn: "Calculated properties avoid redundant state storage and synchronization anomalies by calculating values dynamically on demand.",
        cleanCode: `class OrderItem {
    private int quantity;
    private double unitPrice;

    public OrderItem(int quantity, double unitPrice) {
        this.quantity = quantity;
        this.unitPrice = unitPrice;
    }

    public double getTotalPrice() {
        return this.quantity * this.unitPrice;
    }
}

class Main {
    public static void main(String[] args) {
        OrderItem item = new OrderItem(3, 12.0);
        System.out.println("Jami summa: $" + item.getTotalPrice());
    }
}`,
        breakdown: [
          "<code>totalPrice</code> degan alohida maydon yo'q.",
          "<code>getTotalPrice()</code> har doim joriy quantity va unitPrice ni ko'paytirib eng aniq natijani qaytaradi."
        ],
        pitfalls: "Alohida `totalPrice` maydoni ochib, keyinchalik quantity o'zgarganda totalPrice ni yangilashni unutish.",
        cw2Viva: "Buyurtma umumiy summasi har safar savatdagi tovarlar bo'yicha qayta hisoblanishi kerak (Coursework logikasi)."
      }
    },
    {
      id: 10,
      title: {
        uz: "10. CW2 Kurs Ishi Modeli: Xavfsiz Buyurtma",
        en: "10. CW2 Safe Order Item Model"
      },
      scenario: {
        uz: "Assessment 2 (50%) talabidagi to'liq inkapsulyatsiyalangan `OrderItem` modelini quring: `itemName`, `quantity` (> 0 bo'lishi shart) va `price` bilan.",
        en: "Build full encapsulated `OrderItem` model fulfilling CW2 Encapsulation criteria (6 marks)."
      },
      requirements: {
        classes: ["OrderItem"],
        methods: ["getTotal", "getQuantity"],
        privateFields: ["itemName", "quantity", "price"]
      },
      starterCode: `class OrderItem {
    private String itemName;
    private int quantity;
    private double price;

    public OrderItem(String itemName, int quantity, double price) {
        this.itemName = itemName;
        this.quantity = (quantity > 0) ? quantity : 1;
        this.price = (price >= 0) ? price : 0.0;
    }

    public int getQuantity() { return quantity; }
    public double getTotal() { return quantity * price; }
}

class Main {
    public static void main(String[] args) {
        OrderItem order = new OrderItem("Latte", 2, 4.5);
        System.out.println("Buyurtma jami: $" + order.getTotal());
    }
}`,
      solution: `class OrderItem {
    private String itemName;
    private int quantity;
    private double price;

    public OrderItem(String itemName, int quantity, double price) {
        this.itemName = itemName;
        this.quantity = (quantity > 0) ? quantity : 1;
        this.price = (price >= 0) ? price : 0.0;
    }

    public int getQuantity() { return quantity; }
    public double getTotal() { return quantity * price; }
}

class Main {
    public static void main(String[] args) {
        OrderItem order = new OrderItem("Latte", 2, 4.5);
        System.out.println("Buyurtma jami: $" + order.getTotal());
    }
}`,
      detailedSolution: {
        theory: "Tabriklaymiz! Siz 2-Modulni to'liq muvaffaqiyatli yakunladingiz! Ushbu model Westminster 5COSC018C CW2 mezonidagi 'Encapsulation' talabiga 100% mos keladi.",
        theoryEn: "Congratulations! You have mastered Encapsulation, defensive validation, immutability, and built a robust OrderItem model for your CW2 coursework.",
        cleanCode: `class OrderItem {
    private String itemName;
    private int quantity;
    private double price;

    public OrderItem(String itemName, int quantity, double price) {
        this.itemName = itemName;
        this.quantity = (quantity > 0) ? quantity : 1;
        this.price = (price >= 0) ? price : 0.0;
    }

    public int getQuantity() { return quantity; }
    public double getTotal() { return quantity * price; }
}

class Main {
    public static void main(String[] args) {
        OrderItem order = new OrderItem("Latte", 2, 4.5);
        System.out.println("Buyurtma jami: $" + order.getTotal());
    }
}`,
        breakdown: [
          "Barcha maydonlar 'private' bilan to'liq himoyalangan.",
          "Konstruktorda ternary operator orqali xavfsiz default qiymatlar ta'minlangan.",
          "getTotal() orqali dinamik hisoblanadi."
        ],
        pitfalls: "3-modulda bu model Merosxo'rlik (Inheritance) va Polimorfizm bilan kengaytiriladi.",
        cw2Viva: "CW2 hisobotingizda (Report) ushbu modelning UML klass diagrammasini taqdim etishingiz va Viva'da inkapsulyatsiyani himoya qilishingiz kerak bo'ladi."
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

    if (elBadge) elBadge.textContent = `2-Modul • ${ch.id}-Topshiriq`;
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
      if (ch.requirements.classes) reqHtml += `<li><strong>Klasslar:</strong> <code>${ch.requirements.classes.join(", ")}</code> sinfi bo'lishi shart.</li>`;
      if (ch.requirements.privateFields) reqHtml += `<li><strong>Inkapsulyatsiya:</strong> <code>${ch.requirements.privateFields.join(", ")}</code> maydonlari <code>private</code> bo'lsin.</li>`;
      if (ch.requirements.fields) {
        const fieldStr = ch.requirements.fields.map(f => `<code>${f.type} ${f.name}</code>`).join(", ");
        reqHtml += `<li><strong>Maydonlar:</strong> ${fieldStr} to'g'ri turda e'lon qilinsin.</li>`;
      }
      if (ch.requirements.methods && ch.requirements.methods.length > 0) reqHtml += `<li><strong>Metodlar:</strong> <code>${ch.requirements.methods.join("(), ")}()</code> metodlari tuzilsin.</li>`;
      if (ch.requirements.constructors) reqHtml += `<li><strong>Konstruktor:</strong> <code>${ch.requirements.constructors.join(", ")}</code> konstruktori bo'lsin.</li>`;
      reqHtml += `<li>Clean code qoidalariga rioya qiling.</li>`;
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

    // Mobile Segmented Switcher Handlers
    const btnMobProb = document.getElementById("btnTabMobileProblem");
    const btnMobEdit = document.getElementById("btnTabMobileEditor");
    const workspace = document.getElementById("ideWorkspace") || document.querySelector(".ide-workspace");

    if (btnMobProb && btnMobEdit && workspace) {
      btnMobProb.addEventListener("click", () => {
        btnMobProb.classList.add("active");
        btnMobEdit.classList.remove("active");
        workspace.classList.add("mobile-show-problem");
        workspace.classList.remove("mobile-show-editor");
      });

      btnMobEdit.addEventListener("click", () => {
        btnMobEdit.classList.add("active");
        btnMobProb.classList.remove("active");
        workspace.classList.add("mobile-show-editor");
        workspace.classList.remove("mobile-show-problem");
      });
    }

    // Mobile Java Quick-Access Keys Handlers
    document.querySelectorAll(".quick-key-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const insertText = btn.getAttribute("data-insert");
        const codeArea = document.getElementById("codeEditor");
        if (!insertText || !codeArea) return;

        const start = codeArea.selectionStart;
        const end = codeArea.selectionEnd;
        const val = codeArea.value;

        codeArea.value = val.substring(0, start) + insertText + val.substring(end);

        let cursorOffset = insertText.length;
        if (insertText === "{}" || insertText === "()" || insertText === "\"\"" || insertText === "[]") {
          cursorOffset = 1;
        } else if (insertText === "System.out.println();") {
          cursorOffset = 19;
        }

        codeArea.selectionStart = codeArea.selectionEnd = start + cursorOffset;
        codeArea.focus();
        updateUML();
      });
    });

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
        setTimeout(() => {
          if (window.UMLRenderer && window.UMLRenderer.fitToView) {
            window.UMLRenderer.fitToView("umlContainer");
          }
        }, 60);
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