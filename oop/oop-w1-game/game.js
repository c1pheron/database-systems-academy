// ============================================================================
// OOP ACADEMY — WEEK 1 GAME LOGIC: JAVA CORE, CLASSES, HEAP/STACK & CONSTRUCTORS
// Professor Ada's Interactive Java IDE Simulator • WIUT 5COSC018C
// ============================================================================

(function () {
  "use strict";

  const STORAGE_KEY = "WIUT_OOP_W1_PROGRESS";
  let currentLang = "uz";
  let currentQIndex = 0;
  let solvedQuestions = new Set();

  // 10 Progressive Java Core Challenges
  const CHALLENGES = [
    {
      id: 1,
      title: {
        uz: "1. Birinchi Java Klassi va Maydonlar",
        en: "1. First Java Class & State Fields"
      },
      scenario: {
        uz: "Uzum Market tizimida har bir tovar ma'lumotlarini saqlash uchun shablon kerak. Java'da barcha narsa klassdan boshlanadi. `Product` klassini yarating va unga ikkita maydon: `name` (String) va `price` (double) qo'shing.",
        en: "In Uzum Market, a blueprint is needed to represent products. In Java, everything begins with a class. Create a `Product` class with two state fields: `name` (String) and `price` (double)."
      },
      requirements: {
        classes: ["Product"],
        methods: []
      },
      starterCode: `// Uzum Market mahsulot klassini yarating
class Product {
    String name;
    double price;
}

class Main {
    public static void main(String[] args) {
        System.out.println("Product klassi yaratildi!");
    }
}`,
      solution: `class Product {
    String name;
    double price;
}

class Main {
    public static void main(String[] args) {
        System.out.println("Product klassi yaratildi!");
    }
}`,
      explanation: {
        uz: "Klass — bu obyektning chizmasi (blueprint). `String name;` va `double price;` har bir mahsulot ega bo'ladigan holat (state) hisoblanadi.",
        en: "A class is a blueprint for objects. Fields represent the state that each product instance holds in memory."
      }
    },
    {
      id: 2,
      title: {
        uz: "2. 'new' Kalit So'zi va Obyekt Yaratish",
        en: "2. Object Instantiation with 'new'"
      },
      scenario: {
        uz: "Chizma (klass) bor, endi xotirada haqiqiy tovar obyektini yaratish lozim. `main` metodida `new Product()` yordamida ikkita obyekt (`p1` va `p2`) yarating, ularning nomini 'iPhone 15' va 'MacBook' qilib belgilang.",
        en: "Now instantiate two distinct product objects (`p1` and `p2`) in Heap memory using `new Product()`, setting their names to 'iPhone 15' and 'MacBook'."
      },
      requirements: {
        classes: ["Product"],
        keywords: ["new"]
      },
      starterCode: `class Product {
    String name;
    double price;
}

class Main {
    public static void main(String[] args) {
        // 1. p1 obyektini yarating va name="iPhone 15", price=1200.0 bering
        Product p1 = new Product();
        p1.name = "iPhone 15";
        p1.price = 1200.0;

        // 2. p2 obyektini yarating (MacBook, 1400.0)
        
        System.out.println(p1.name + " narxi: $" + p1.price);
        // p2 ma'lumotini ham chop eting
    }
}`,
      solution: `class Product {
    String name;
    double price;
}

class Main {
    public static void main(String[] args) {
        Product p1 = new Product();
        p1.name = "iPhone 15";
        p1.price = 1200.0;

        Product p2 = new Product();
        p2.name = "MacBook";
        p2.price = 1400.0;

        System.out.println(p1.name + " narxi: $" + p1.price);
        System.out.println(p2.name + " narxi: $" + p2.price);
    }
}`,
      explanation: {
        uz: "`new` operatori Heap xotiradan yangi obyekt uchun joy ajratadi va uning xotira manzilini (reference) `p1` yoki `p2` o'zgaruvchisiga biriktiradi.",
        en: "The `new` operator dynamically allocates memory on the Heap and returns a reference stored in the stack variable."
      }
    },
    {
      id: 3,
      title: {
        uz: "3. Parametrli Konstruktor va 'this' Kalit So'zi",
        en: "3. Parameterized Constructor & 'this'"
      },
      scenario: {
        uz: "Obyekt yaratilgandan keyin har bir maydonni qo'lda to'ldirish noqulay. Yaratilayotgan paytning o'zida qiymat beruvchi `Product(String name, double price)` konstruktorini yozing. 'Field Shadowing'dan qochish uchun `this.name = name;` sintaksisini qo'llang.",
        en: "Write a parameterized constructor `Product(String name, double price)` to initialize state at birth. Use `this.name = name;` to resolve variable shadowing."
      },
      requirements: {
        classes: ["Product"],
        constructors: ["Product"],
        keywords: ["this"]
      },
      starterCode: `class Product {
    String name;
    double price;

    // Parametrli konstruktor yarating
    public Product(String name, double price) {
        // this orqali qiymatlarni o'zlashtiring
    }
}

class Main {
    public static void main(String[] args) {
        Product p = new Product("AirPods Pro", 250.0);
        System.out.println(p.name + ": $" + p.price);
    }
}`,
      solution: `class Product {
    String name;
    double price;

    public Product(String name, double price) {
        this.name = name;
        this.price = price;
    }
}

class Main {
    public static void main(String[] args) {
        Product p = new Product("AirPods Pro", 250.0);
        System.out.println(p.name + ": $" + p.price);
    }
}`,
      explanation: {
        uz: "`this` kalit so'zi joriy obyekt nusxasiga ishora qiladi. Bu parametr nomi bilan maydon nomi bir xil bo'lib qolganida chalkashlikni bartaraf etadi.",
        en: "`this` refers to the current object instance, disambiguating instance fields from constructor parameter arguments."
      }
    },
    {
      id: 4,
      title: {
        uz: "4. Konstruktorlar Overloading (Yuklash)",
        en: "4. Constructor Overloading"
      },
      scenario: {
        uz: "Do'konda ba'zi mahsulotlar yangi kelgan va ularning narxi hali belgilanmagan bo'lishi mumkin. `Product` klassida 2 ta konstruktor yarating: 1) `Product(String name)` narxni 0.0 qiladi; 2) `Product(String name, double price)` ikkala qiymatni oladi.",
        en: "Support products without set prices yet. Provide 2 overloaded constructors: one taking only `String name` (default price 0.0), and one taking both `name` and `price`."
      },
      requirements: {
        classes: ["Product"],
        constructors: ["Product"]
      },
      starterCode: `class Product {
    String name;
    double price;

    // 1-konstruktor: faqat name qabul qiladi
    public Product(String name) {
        this.name = name;
        this.price = 0.0;
    }

    // 2-konstruktor: name va price qabul qiladi
    
}

class Main {
    public static void main(String[] args) {
        Product p1 = new Product("Kutilayotgan Tovarlar");
        Product p2 = new Product("Samsung S24", 950.0);
        System.out.println(p1.name + " narxi: $" + p1.price);
        System.out.println(p2.name + " narxi: $" + p2.price);
    }
}`,
      solution: `class Product {
    String name;
    double price;

    public Product(String name) {
        this.name = name;
        this.price = 0.0;
    }

    public Product(String name, double price) {
        this.name = name;
        this.price = price;
    }
}

class Main {
    public static void main(String[] args) {
        Product p1 = new Product("Kutilayotgan Tovarlar");
        Product p2 = new Product("Samsung S24", 950.0);
        System.out.println(p1.name + " narxi: $" + p1.price);
        System.out.println(p2.name + " narxi: $" + p2.price);
    }
}`,
      explanation: {
        uz: "Konstruktor overloading — bir xil nomli, ammo har xil parametrlar ro'yxatiga ega bo'lgan bir nechta konstruktor yaratish imkoniyatidir.",
        en: "Constructor overloading allows a class to have multiple constructors differing in their parameter signatures."
      }
    },
    {
      id: 5,
      title: {
        uz: "5. Heap vs Stack va Obyekt Referenslari",
        en: "5. Heap vs Stack & Object References"
      },
      scenario: {
        uz: "Java'da obyekt nusxalanmaydi, uning xotira manzili (reference) nusxalanadi! `Product p1 = new Product(\"Qahva\", 20.0);` va `Product p2 = p1;` yozing. So'ngra `p2.price = 25.0;` deb o'zgartirib, `p1.price` ni ekranga chiqaring. Natija 25.0 bo'ladi!",
        en: "In Java, object variables hold memory references. Assign `p2 = p1`, mutate `p2.price = 25.0`, and print `p1.price` to demonstrate both point to the same Heap object."
      },
      requirements: {
        classes: ["Product"],
        keywords: ["new"]
      },
      starterCode: `class Product {
    String name;
    double price;

    public Product(String name, double price) {
        this.name = name;
        this.price = price;
    }
}

class Main {
    public static void main(String[] args) {
        Product p1 = new Product("Qahva", 20.0);
        // p2 ga p1 referensini bering
        Product p2 = p1;

        // p2 orqali narxni 25.0 qiling
        p2.price = 25.0;

        System.out.println("p1 narxi: $" + p1.price);
    }
}`,
      solution: `class Product {
    String name;
    double price;

    public Product(String name, double price) {
        this.name = name;
        this.price = price;
    }
}

class Main {
    public static void main(String[] args) {
        Product p1 = new Product("Qahva", 20.0);
        Product p2 = p1;

        p2.price = 25.0;

        System.out.println("p1 narxi: $" + p1.price);
    }
}`,
      explanation: {
        uz: "`p1` va `p2` ikkalasi ham Stack xotirada joylashgan bo'lib, Heap xotiradagi aynan bitta obyekt manziliga ko'rsatib turadi.",
        en: "Both `p1` and `p2` reside on the Stack and hold references pointing to the exact same object on the Heap."
      }
    },
    {
      id: 6,
      title: {
        uz: "6. Instans Metodlar va Chegirma Hisoblash",
        en: "6. Instance Methods & Discount Logic"
      },
      scenario: {
        uz: "Obyekt faqat ma'lumot saqlabgina qolmay, xatti-harakatga ham ega bo'lishi kerak. `Product` klassiga `getDiscountedPrice(double percent)` metodini qo'shing. U foiz bo'yicha arzonlashtirilgan narxni hisoblab qaytarsin.",
        en: "Add a business method `getDiscountedPrice(double percent)` to `Product` returning `price - (price * percent / 100)`."
      },
      requirements: {
        classes: ["Product"],
        methods: ["getDiscountedPrice"]
      },
      starterCode: `class Product {
    String name;
    double price;

    public Product(String name, double price) {
        this.name = name;
        this.price = price;
    }

    // getDiscountedPrice metodini yarating
    public double getDiscountedPrice(double percent) {
        return this.price - (this.price * percent / 100.0);
    }
}

class Main {
    public static void main(String[] args) {
        Product p = new Product("Smart TV", 500.0);
        double salePrice = p.getDiscountedPrice(10.0); // 10% chegirma
        System.out.println("Aksiya narxi: $" + salePrice);
    }
}`,
      solution: `class Product {
    String name;
    double price;

    public Product(String name, double price) {
        this.name = name;
        this.price = price;
    }

    public double getDiscountedPrice(double percent) {
        return this.price - (this.price * percent / 100.0);
    }
}

class Main {
    public static void main(String[] args) {
        Product p = new Product("Smart TV", 500.0);
        double salePrice = p.getDiscountedPrice(10.0);
        System.out.println("Aksiya narxi: $" + salePrice);
    }
}`,
      explanation: {
        uz: "Instans metodlar chaqirilgan obyektning ichki maydonlari (`this.price`) bilan bevosita ishlaydi.",
        en: "Instance methods operate directly upon the internal state of the invoking object instance."
      }
    },
    {
      id: 7,
      title: {
        uz: "7. Obyektlar Hamkorligi: Customer & Product",
        en: "7. Object Collaboration: Customer & Product"
      },
      scenario: {
        uz: "Real dasturlarda klasslar bir-biri bilan muloqot qiladi. `Customer` klassini yarating (`String fullName`). Unda `buyProduct(Product p)` metodi bo'lsin va ekranga `fullName + \" xarid qildi: \" + p.name` deb chiqarsin.",
        en: "Create a `Customer` class with `String fullName` and a `buyProduct(Product p)` method printing the purchase action."
      },
      requirements: {
        classes: ["Customer", "Product"],
        methods: ["buyProduct"]
      },
      starterCode: `class Product {
    String name;
    double price;

    public Product(String name, double price) {
        this.name = name;
        this.price = price;
    }
}

class Customer {
    String fullName;

    public Customer(String fullName) {
        this.fullName = fullName;
    }

    // buyProduct(Product p) metodini yarating
    
}

class Main {
    public static void main(String[] args) {
        Customer c = new Customer("Aziz Rahimov");
        Product p = new Product("Sony Naushnik", 150.0);
        c.buyProduct(p);
    }
}`,
      solution: `class Product {
    String name;
    double price;

    public Product(String name, double price) {
        this.name = name;
        this.price = price;
    }
}

class Customer {
    String fullName;

    public Customer(String fullName) {
        this.fullName = fullName;
    }

    public void buyProduct(Product p) {
        System.out.println(fullName + " xarid qildi: " + p.name);
    }
}

class Main {
    public static void main(String[] args) {
        Customer c = new Customer("Aziz Rahimov");
        Product p = new Product("Sony Naushnik", 150.0);
        c.buyProduct(p);
    }
}`,
      explanation: {
        uz: "Metodga boshqa obyekt referensini argument sifatida uzatish orqali klasslar o'rtasida Assotsiatsiya (bog'liqlik) o'rnatiladi.",
        en: "Passing object references as parameters creates association relationships between collaborating classes."
      }
    },
    {
      id: 8,
      title: {
        uz: "8. 'static' Maydon va Global Hisoblagich",
        en: "8. Static Fields & Shared Counters"
      },
      scenario: {
        uz: "Do'konda jami nechta tovar yaratilganini bilishimiz kerak. Har bir obyekt alohida emas, butun klass bo'yicha bitta umumiy o'zgaruvchi kerak. `Product` klassiga `static int totalCount = 0;` qo'shing va har bir konstruktor chaqirilganda `totalCount++` qiling.",
        en: "Track total products instantiated globally. Add `static int totalCount = 0;` to `Product`, incrementing it in the constructor."
      },
      requirements: {
        classes: ["Product"],
        keywords: ["static"]
      },
      starterCode: `class Product {
    String name;
    double price;
    // static hisoblagichni e'lon qiling
    static int totalCount = 0;

    public Product(String name, double price) {
        this.name = name;
        this.price = price;
        // hisoblagichni oshiring
        totalCount++;
    }
}

class Main {
    public static void main(String[] args) {
        new Product("A", 10);
        new Product("B", 20);
        new Product("C", 30);
        System.out.println("Jami tovarlar soni: " + Product.totalCount);
    }
}`,
      solution: `class Product {
    String name;
    double price;
    static int totalCount = 0;

    public Product(String name, double price) {
        this.name = name;
        this.price = price;
        totalCount++;
    }
}

class Main {
    public static void main(String[] args) {
        new Product("A", 10);
        new Product("B", 20);
        new Product("C", 30);
        System.out.println("Jami tovarlar soni: " + Product.totalCount);
    }
}`,
      explanation: {
        uz: "`static` a'zolar biron bir obyektga emas, klassning o'ziga tegishli bo'ladi va barcha nusxalar uchun xotirada faqat bitta bo'ladi.",
        en: "Static members belong to the class itself rather than individual instances, shared uniformly across all objects."
      }
    },
    {
      id: 9,
      title: {
        uz: "9. NullPointer'dan Himoyalanish (Null-Safety)",
        en: "9. NullPointer Defense & Validation"
      },
      scenario: {
        uz: "Agar mijoz hali tovar tanlamagan bo'lsa, `product` o'zgaruvchisi `null` bo'ladi. `p.name` ni tekshiruvsiz chaqirish dasturni buzadi (NullPointerException). Metodda `if (p != null)` tekshiruvini amalga oshiring.",
        en: "Prevent NullPointerException when handling uninitialized objects. Write defensive checks using `if (p != null)`."
      },
      requirements: {
        classes: ["Product"],
        keywords: ["null"]
      },
      starterCode: `class Product {
    String name;
    double price;

    public Product(String name, double price) {
        this.name = name;
        this.price = price;
    }
}

class Main {
    public static void printProductSafe(Product p) {
        // Agar p null bo'lmasa, nomini chiqaring. Aks holda "Mahsulot topilmadi" deb yozing
        if (p != null) {
            System.out.println("Mahsulot: " + p.name);
        } else {
            System.out.println("Mahsulot tanlanmagan (null)!");
        }
    }

    public static void main(String[] args) {
        Product p1 = new Product("Kitob", 15.0);
        Product p2 = null;

        printProductSafe(p1);
        printProductSafe(p2);
    }
}`,
      solution: `class Product {
    String name;
    double price;

    public Product(String name, double price) {
        this.name = name;
        this.price = price;
    }
}

class Main {
    public static void printProductSafe(Product p) {
        if (p != null) {
            System.out.println("Mahsulot: " + p.name);
        } else {
            System.out.println("Mahsulot tanlanmagan (null)!");
        }
    }

    public static void main(String[] args) {
        Product p1 = new Product("Kitob", 15.0);
        Product p2 = null;

        printProductSafe(p1);
        printProductSafe(p2);
    }
}`,
      explanation: {
        uz: "Har qanday obyekt referensini chaqirishdan oldin uning `null` emasligiga ishonch hosil qilish Clean Code va dastur barqarorligining oltin qoidasidir.",
        en: "Defensive null-checking is a cornerstone of robust clean software development in Java."
      }
    },
    {
      id: 10,
      title: {
        uz: "10. Kurs Ishi Asosi: CoffeeOrder Modeli",
        en: "10. Coursework Foundation: CoffeeOrder Model"
      },
      scenario: {
        uz: "Westminster CW2 (50%) talabidagi konsol buyurtma tizimi uchun boshlang'ich model: `Coffee` klassini (`type`, `size`, `basePrice`) va uning `displayOrder()` metodini yarating. Kurs ishining birinchi mustahkam poydevorini quring!",
        en: "Build the foundation for CW2 Assessment 2: Create a `Coffee` class (`type`, `size`, `basePrice`) with a `displayOrder()` method."
      },
      requirements: {
        classes: ["Coffee"],
        methods: ["displayOrder"],
        constructors: ["Coffee"]
      },
      starterCode: `class Coffee {
    String type;
    String size;
    double basePrice;

    public Coffee(String type, String size, double basePrice) {
        this.type = type;
        this.size = size;
        this.basePrice = basePrice;
    }

    public void displayOrder() {
        System.out.println("☕ Buyurtma: " + type + " (" + size + ") - Narx: $" + basePrice);
    }
}

class Main {
    public static void main(String[] args) {
        Coffee order1 = new Coffee("Cappuccino", "Medium", 4.5);
        order1.displayOrder();
    }
}`,
      solution: `class Coffee {
    String type;
    String size;
    double basePrice;

    public Coffee(String type, String size, double basePrice) {
        this.type = type;
        this.size = size;
        this.basePrice = basePrice;
    }

    public void displayOrder() {
        System.out.println("☕ Buyurtma: " + type + " (" + size + ") - Narx: $" + basePrice);
    }
}

class Main {
    public static void main(String[] args) {
        Coffee order1 = new Coffee("Cappuccino", "Medium", 4.5);
        order1.displayOrder();
    }
}`,
      explanation: {
        uz: "Tabriklaymiz! Siz 1-Modulni to'liq tamomladingiz va Kurs Ishidagi Buyurtma modelining birinchi qismini muvaffaqiyatli qura oldingiz!",
        en: "Congratulations! You have mastered Module 1 and laid the first solid architectural brick for the Assessment 2 coursework."
      }
    }
  ];

  // 2. Storage Helpers
  function loadSolved() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          solvedQuestions = new Set(parsed);
        } else if (parsed && Array.isArray(parsed.solvedList)) {
          solvedQuestions = new Set(parsed.solvedList);
        }
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

  // 3. UI Render
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

    // Rating score
    const elPoints = document.getElementById("hudRatingPoints");
    if (elPoints) {
      elPoints.textContent = `${solvedQuestions.size * 50} Ball`;
    }
  }

  function renderChallenge() {
    const ch = CHALLENGES[currentQIndex];
    if (!ch) return;

    // Header badge & title
    const elBadge = document.getElementById("problemBadge");
    const elTitle = document.getElementById("problemTitle");
    const elScenario = document.getElementById("problemScenario");
    const elSolutionText = document.getElementById("solutionContent");
    const elSolutionCard = document.getElementById("solutionContentCard");

    if (elBadge) elBadge.textContent = `1-Modul • ${ch.id}-Topshiriq`;
    if (elTitle) elTitle.textContent = ch.title[currentLang];
    if (elScenario) elScenario.textContent = ch.scenario[currentLang];
    if (elSolutionText) elSolutionText.textContent = ch.solution;
    if (elSolutionCard) elSolutionCard.style.display = "none";

    // Set code editor
    const codeArea = document.getElementById("codeEditor");
    if (codeArea) {
      codeArea.value = ch.starterCode;
    }

    // Clear console output
    const consoleOut = document.getElementById("consoleOutput");
    if (consoleOut) {
      consoleOut.className = "console-output";
      consoleOut.textContent = "Java konsoli tayyor. '▶ Kodni Tekshirish' yoki '☕ Ishga tushirish (OpenJDK 21)' tugmasini bosing.";
    }

    // Render UML preview
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

  // 4. Code Execution & Testing
  async function handleInstantTest() {
    const ch = CHALLENGES[currentQIndex];
    const codeArea = document.getElementById("codeEditor");
    const consoleOut = document.getElementById("consoleOutput");
    if (!ch || !codeArea || !consoleOut) return;

    consoleOut.className = "console-output";
    consoleOut.textContent = "🔍 Mahalliy OOP qoidalari va sintaksis tekshirilmoqda...";

    const validation = window.JavaRunner.validateOOPRules(codeArea.value, ch.requirements);

    let report = "=== TEZKOR TEKSHIRUV NATIJASI ===\n";
    validation.tests.forEach(t => {
      report += (t.passed ? "✅ " : "❌ ") + t.name + ": " + t.feedback + "\n";
    });

    if (validation.passed) {
      solvedQuestions.add(ch.id);
      saveSolved();
      renderHUD();
      consoleOut.className = "console-output success";
      report += `\n🎉 TABRIKLAYMIZ! Barcha shartlar bajarildi! (+50 Ball)\n💡 Endi xohlasangiz '☕ Ishga tushirish (OpenJDK 21)' orqali real natijani ko'ring!`;
    } else {
      consoleOut.className = "console-output error";
      report += `\n⚠️ Ba'zi shartlar hali to'liq emas. Yuqoridagi xabarlarni ko'rib chiqing va tuzating.`;
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
      consoleOut.textContent = `=== OPENJDK 21 CHIQISHI (STDOUT) ===\n\n${res.output || "(Chiqish yo'q, dastur muvaffaqiyatli yakunlandi)"}\n\n✅ Kod muvaffaqiyatli kompilyatsiya qilindi va bajarildi!`;
    } else {
      consoleOut.className = "console-output error";
      consoleOut.textContent = `=== KOMPILYATOR XATOLIGI (JAVAC) ===\n\n${res.errors || "Noma'lum xatolik"}`;
    }
  }

  // 5. Setup Event Listeners
  document.addEventListener("DOMContentLoaded", () => {
    loadSolved();
    renderHUD();
    renderChallenge();

    // Tab buttons in left pane
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

    // Action buttons
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
      if (currentQIndex < CHALLENGES.length - 1) {
        switchChallenge(currentQIndex + 1);
      }
    });

    if (btnToggleSol) btnToggleSol.addEventListener("click", () => {
      const card = document.getElementById("solutionContentCard");
      if (card) {
        card.style.display = card.style.display === "none" ? "block" : "none";
      }
    });

    // Real-time UML updates on keystroke
    const codeArea = document.getElementById("codeEditor");
    if (codeArea) {
      codeArea.addEventListener("input", () => {
        updateUML();
      });

      // Enable Tab indentation inside textarea
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

    // Language switch buttons
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
