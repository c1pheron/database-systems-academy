// ============================================================================
// OOP ACADEMY — 3-Modul GAME LOGIC: EXTENDS, SUPER(), METHOD OVERRIDING VA IS-A VS HAS-A
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
    "id": 1,
    "title": {
      "uz": "1. Birinchi Subklass ('extends')",
      "en": "1. First Subclass with 'extends'"
    },
    "scenario": {
      "uz": "`Product` superklassi mavjud. Undan meros oluvchi `Book` subklassini yarating.",
      "en": "Create a `Book` subclass extending `Product`."
    },
    "requirements": {
      "classes": [
        "Product",
        "Book"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class Product {\n    String name;\n}\n\nclass Book extends Product {\n    String author;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Book b = new Book();\n        b.name = \"Clean Code\";\n        b.author = \"Robert Martin\";\n        System.out.println(b.name + \" muallifi: \" + b.author);\n    }\n}",
    "solution": "class Product {\n    String name;\n}\n\nclass Book extends Product {\n    String author;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Book b = new Book();\n        b.name = \"Clean Code\";\n        b.author = \"Robert Martin\";\n        System.out.println(b.name + \" muallifi: \" + b.author);\n    }\n}"
  },
  {
    "id": 2,
    "title": {
      "uz": "2. 'super()' Konstruktorini Chaqirish",
      "en": "2. Invoking 'super()' Constructor"
    },
    "scenario": {
      "uz": "Ota klass konstruktori parametr qabul qilsa, bola klass `super(name)` orqali uni chaqirishi shart.",
      "en": "Invoke superclass constructor using `super(name)`."
    },
    "requirements": {
      "classes": [
        "Product",
        "Book"
      ],
      "keywords": [
        "super"
      ]
    },
    "starterCode": "class Product {\n    String name;\n    public Product(String name) { this.name = name; }\n}\n\nclass Book extends Product {\n    String author;\n    public Book(String name, String author) {\n        super(name);\n        this.author = author;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Book b = new Book(\"Design Patterns\", \"GoF\");\n        System.out.println(b.name);\n    }\n}",
    "solution": "class Product {\n    String name;\n    public Product(String name) { this.name = name; }\n}\n\nclass Book extends Product {\n    String author;\n    public Book(String name, String author) {\n        super(name);\n        this.author = author;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Book b = new Book(\"Design Patterns\", \"GoF\");\n        System.out.println(b.name);\n    }\n}"
  },
  {
    "id": 3,
    "title": {
      "uz": "3. Metodlarni Qayta Aniqlash (@Override)",
      "en": "3. Method Overriding (@Override)"
    },
    "scenario": {
      "uz": "Bola klass ota klassdagi `getInfo()` metodini o'ziga moslab qayta aniqlasin.",
      "en": "Override `getInfo()` in the subclass using `@Override`."
    },
    "requirements": {
      "classes": [
        "Product",
        "Book"
      ],
      "methods": [
        "getInfo"
      ],
      "keywords": [
        "@Override"
      ]
    },
    "starterCode": "class Product {\n    String name;\n    public Product(String name) { this.name = name; }\n    public String getInfo() { return \"Mahsulot: \" + name; }\n}\n\nclass Book extends Product {\n    String author;\n    public Book(String name, String author) { super(name); this.author = author; }\n    @Override\n    public String getInfo() { return \"Kitob: \" + name + \" (\" + author + \")\"; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Book b = new Book(\"Refactoring\", \"Martin Fowler\");\n        System.out.println(b.getInfo());\n    }\n}",
    "solution": "class Product {\n    String name;\n    public Product(String name) { this.name = name; }\n    public String getInfo() { return \"Mahsulot: \" + name; }\n}\n\nclass Book extends Product {\n    String author;\n    public Book(String name, String author) { super(name); this.author = author; }\n    @Override\n    public String getInfo() { return \"Kitob: \" + name + \" (\" + author + \")\"; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Book b = new Book(\"Refactoring\", \"Martin Fowler\");\n        System.out.println(b.getInfo());\n    }\n}"
  },
  {
    "id": 4,
    "title": {
      "uz": "4. super.metod() orqali Ota Kodini Qayta Ishlatish",
      "en": "4. Reusing Super Logic with super.method()"
    },
    "scenario": {
      "uz": "`super.getInfo()` yordamida ota klass natijasini olib, unga qo'shimcha ma'lumot qo'shing.",
      "en": "Extend super method logic using `super.getInfo()`."
    },
    "requirements": {
      "classes": [
        "Product",
        "Book"
      ],
      "keywords": [
        "super"
      ]
    },
    "starterCode": "class Product {\n    String name;\n    public Product(String name) { this.name = name; }\n    public String getInfo() { return \"Mahsulot: \" + name; }\n}\n\nclass Book extends Product {\n    String author;\n    public Book(String name, String author) { super(name); this.author = author; }\n    @Override\n    public String getInfo() { return super.getInfo() + \", Muallif: \" + author; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Book b = new Book(\"1984\", \"George Orwell\");\n        System.out.println(b.getInfo());\n    }\n}",
    "solution": "class Product {\n    String name;\n    public Product(String name) { this.name = name; }\n    public String getInfo() { return \"Mahsulot: \" + name; }\n}\n\nclass Book extends Product {\n    String author;\n    public Book(String name, String author) { super(name); this.author = author; }\n    @Override\n    public String getInfo() { return super.getInfo() + \", Muallif: \" + author; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Book b = new Book(\"1984\", \"George Orwell\");\n        System.out.println(b.getInfo());\n    }\n}"
  },
  {
    "id": 5,
    "title": {
      "uz": "5. Kompozitsiya ('Has-A' bog'liqligi)",
      "en": "5. Composition ('Has-A' Relationship)"
    },
    "scenario": {
      "uz": "Har doim meros olish shart emas! `Customer` klassi `Address` obyektiga ega bo'lsin (Kompozitsiya).",
      "en": "Favor composition over inheritance: `Customer` has an `Address`."
    },
    "requirements": {
      "classes": [
        "Customer",
        "Address"
      ]
    },
    "starterCode": "class Address {\n    String city;\n    public Address(String city) { this.city = city; }\n}\n\nclass Customer {\n    String name;\n    Address address;\n    public Customer(String name, Address address) {\n        this.name = name;\n        this.address = address;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Address addr = new Address(\"Toshkent\");\n        Customer c = new Customer(\"Sardor\", addr);\n        System.out.println(c.name + \" yashaydi: \" + c.address.city);\n    }\n}",
    "solution": "class Address {\n    String city;\n    public Address(String city) { this.city = city; }\n}\n\nclass Customer {\n    String name;\n    Address address;\n    public Customer(String name, Address address) {\n        this.name = name;\n        this.address = address;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Address addr = new Address(\"Toshkent\");\n        Customer c = new Customer(\"Sardor\", addr);\n        System.out.println(c.name + \" yashaydi: \" + c.address.city);\n    }\n}"
  },
  {
    "id": 6,
    "title": {
      "uz": "6. 'protected' Modifikatori",
      "en": "6. 'protected' Access Modifier"
    },
    "scenario": {
      "uz": "`protected double basePrice` maydoni faqat bola klasslar uchun ko'rinadigan bo'lsin.",
      "en": "Use `protected` visibility for inheritance hierarchies."
    },
    "requirements": {
      "classes": [
        "Product"
      ],
      "keywords": [
        "protected"
      ]
    },
    "starterCode": "class Product {\n    protected double basePrice;\n    public Product(double basePrice) { this.basePrice = basePrice; }\n}\n\nclass Coffee extends Product {\n    public Coffee(double price) { super(price); }\n    public double getFinalPrice() { return this.basePrice * 1.12; } // 12% QQS bilan\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Coffee c = new Coffee(20.0);\n        System.out.println(\"QQS bilan: $\" + c.getFinalPrice());\n    }\n}",
    "solution": "class Product {\n    protected double basePrice;\n    public Product(double basePrice) { this.basePrice = basePrice; }\n}\n\nclass Coffee extends Product {\n    public Coffee(double price) { super(price); }\n    public double getFinalPrice() { return this.basePrice * 1.12; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Coffee c = new Coffee(20.0);\n        System.out.println(\"QQS bilan: $\" + c.getFinalPrice());\n    }\n}"
  },
  {
    "id": 7,
    "title": {
      "uz": "7. Ierarxik Merosxo'rlik",
      "en": "7. Hierarchical Inheritance"
    },
    "scenario": {
      "uz": "`Product` superklassidan bir vaqtning o'zida `PhysicalProduct` va `DigitalProduct` meros olsin.",
      "en": "Implement branch inheritance from a common root."
    },
    "requirements": {
      "classes": [
        "Product",
        "PhysicalProduct",
        "DigitalProduct"
      ]
    },
    "starterCode": "class Product { String name; }\nclass PhysicalProduct extends Product { double weight; }\nclass DigitalProduct extends Product { String downloadUrl; }\n\nclass Main {\n    public static void main(String[] args) {\n        DigitalProduct dp = new DigitalProduct();\n        dp.name = \"E-Book\";\n        System.out.println(\"Raqamli tovar: \" + dp.name);\n    }\n}",
    "solution": "class Product { String name; }\nclass PhysicalProduct extends Product { double weight; }\nclass DigitalProduct extends Product { String downloadUrl; }\n\nclass Main {\n    public static void main(String[] args) {\n        DigitalProduct dp = new DigitalProduct();\n        dp.name = \"E-Book\";\n        System.out.println(\"Raqamli tovar: \" + dp.name);\n    }\n}"
  },
  {
    "id": 8,
    "title": {
      "uz": "8. 'final' Metod va Klasslar",
      "en": "8. Final Classes & Methods"
    },
    "scenario": {
      "uz": "Xavfsizlik nuqtai nazaridan meros olish taqiqlangan `final class TaxService` yarating.",
      "en": "Prevent further subclassing with `final class`."
    },
    "requirements": {
      "classes": [
        "TaxService"
      ],
      "keywords": [
        "final"
      ]
    },
    "starterCode": "final class TaxService {\n    public double calcTax(double amount) { return amount * 0.12; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TaxService ts = new TaxService();\n        System.out.println(\"Soliq: $\" + ts.calcTax(100.0));\n    }\n}",
    "solution": "final class TaxService {\n    public double calcTax(double amount) { return amount * 0.12; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TaxService ts = new TaxService();\n        System.out.println(\"Soliq: $\" + ts.calcTax(100.0));\n    }\n}"
  },
  {
    "id": 9,
    "title": {
      "uz": "9. Ota Konstruktori Bajarilish Tartibi",
      "en": "9. Constructor Execution Order"
    },
    "scenario": {
      "uz": "Bola klass yaratilganda birinchi navbatda har doim ota klass konstruktori ishga tushishini tekshiring.",
      "en": "Demonstrate constructor chaining execution order."
    },
    "requirements": {
      "classes": [
        "Parent",
        "Child"
      ],
      "keywords": [
        "super"
      ]
    },
    "starterCode": "class Parent {\n    public Parent() { System.out.println(\"1. Ota konstruktori\"); }\n}\nclass Child extends Parent {\n    public Child() { super(); System.out.println(\"2. Bola konstruktori\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new Child();\n    }\n}",
    "solution": "class Parent {\n    public Parent() { System.out.println(\"1. Ota konstruktori\"); }\n}\nclass Child extends Parent {\n    public Child() { super(); System.out.println(\"2. Bola konstruktori\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new Child();\n    }\n}"
  },
  {
    "id": 10,
    "title": {
      "uz": "10. CW2 Kurs Ishi Modeli: Customization Ierarxiyasi",
      "en": "10. CW2 Coursework Customization Hierarchy"
    },
    "scenario": {
      "uz": "Assessment 2 (50%) talabi: `BaseProduct` superklassi va unga qo'shimcha `CustomizedProduct` sinfini meros qilib quring (6 marks).",
      "en": "Build extensible customization hierarchy fulfilling CW2 criteria."
    },
    "requirements": {
      "classes": [
        "BaseProduct",
        "CustomizedProduct"
      ],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class BaseProduct {\n    protected String name;\n    protected double basePrice;\n    public BaseProduct(String name, double basePrice) { this.name = name; this.basePrice = basePrice; }\n    public double getPrice() { return basePrice; }\n}\n\nclass CustomizedProduct extends BaseProduct {\n    private double customFee;\n    public CustomizedProduct(String name, double basePrice, double customFee) {\n        super(name, basePrice);\n        this.customFee = customFee;\n    }\n    @Override\n    public double getPrice() { return super.getPrice() + customFee; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CustomizedProduct cp = new CustomizedProduct(\"Latte\", 4.0, 1.5);\n        System.out.println(cp.name + \" umumiy narxi: $\" + cp.getPrice());\n    }\n}",
    "solution": "class BaseProduct {\n    protected String name;\n    protected double basePrice;\n    public BaseProduct(String name, double basePrice) { this.name = name; this.basePrice = basePrice; }\n    public double getPrice() { return basePrice; }\n}\n\nclass CustomizedProduct extends BaseProduct {\n    private double customFee;\n    public CustomizedProduct(String name, double basePrice, double customFee) {\n        super(name, basePrice);\n        this.customFee = customFee;\n    }\n    @Override\n    public double getPrice() { return super.getPrice() + customFee; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CustomizedProduct cp = new CustomizedProduct(\"Latte\", 4.0, 1.5);\n        System.out.println(cp.name + \" umumiy narxi: $\" + cp.getPrice());\n    }\n}"
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
    const elSolutionText = document.getElementById("solutionContent");
    const elSolutionCard = document.getElementById("solutionContentCard");

    if (elBadge) elBadge.textContent = `3-Modul • ${ch.id}-Topshiriq`;
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

    let report = "=== TEZKOR TEKSHIRUV NATIJASI ===\n";
    validation.tests.forEach(t => {
      report += (t.passed ? "✅ " : "❌ ") + t.name + ": " + t.feedback + "\n";
    });

    if (validation.passed) {
      solvedQuestions.add(ch.id);
      saveSolved();
      renderHUD();
      consoleOut.className = "console-output success";
      report += `\n🎉 TABRIKLAYMIZ! Barcha shartlar to'liq bajarildi! (+50 Ball)\n💡 '☕ Ishga tushirish (OpenJDK 21)' orqali real konsol natijasini ko'rishingiz mumkin!`;
    } else {
      consoleOut.className = "console-output error";
      report += `\n⚠️ Ba'zi shartlar hali to'liq emas. Kodni qayta ko'rib chiqing.`;
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
      consoleOut.textContent = `=== OPENJDK 21 CHIQISHI (STDOUT) ===\n\n${res.output || "(Dastur chiqishsiz muvaffaqiyatli yakunlandi)"}\n\n✅ Kod muvaffaqiyatli kompilyatsiya qilindi va bajarildi!`;
    } else {
      consoleOut.className = "console-output error";
      consoleOut.textContent = `=== KOMPILYATOR XATOLIGI (JAVAC) ===\n\n${res.errors || "Noma'lum kompilyatsiya xatosi"}`;
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

})();