// ============================================================================
// OOP ACADEMY — 2-Modul GAME LOGIC: ACCESS MODIFIERS, GETTERS/SETTERS, VALIDATSIYA VA IMMUTABILITY
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
    "id": 1,
    "title": {
      "uz": "1. 'private' Modifikatori va Inkapsulyatsiya",
      "en": "1. 'private' Modifier & Encapsulation"
    },
    "scenario": {
      "uz": "Do'konda tovar narxini har kim o'zboshimchalik bilan manfiy qilib o'zgartira olmasligi kerak. Maydonlarni 'private' qilib berkitish orqali to'g'ridan-to'g'ri tashqaridan kirishni taqiqlang.",
      "en": "Protect fields from unauthorized modification by declaring `private double price;`."
    },
    "requirements": {
      "classes": [
        "Product"
      ],
      "privateFields": [
        "price"
      ]
    },
    "starterCode": "class Product {\n    public String name;\n    // price maydonini private qiling\n    private double price;\n\n    public Product(String name, double price) {\n        this.name = name;\n        this.price = price;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product p = new Product(\"Smartfon\", 800.0);\n        System.out.println(\"Mahsulot: \" + p.name);\n    }\n}",
    "solution": "class Product {\n    public String name;\n    private double price;\n\n    public Product(String name, double price) {\n        this.name = name;\n        this.price = price;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product p = new Product(\"Smartfon\", 800.0);\n        System.out.println(\"Mahsulot: \" + p.name);\n    }\n}"
  },
  {
    "id": 2,
    "title": {
      "uz": "2. Getter Metodi orqali O'qish",
      "en": "2. Getter Method for Safe Reading"
    },
    "scenario": {
      "uz": "Narx 'private' bo'lgani sababli, endi uni xavfsiz o'qish uchun `public double getPrice()` getter metodini yarating.",
      "en": "Expose encapsulated state safely via `public double getPrice()`."
    },
    "requirements": {
      "classes": [
        "Product"
      ],
      "methods": [
        "getPrice"
      ],
      "privateFields": [
        "price"
      ]
    },
    "starterCode": "class Product {\n    private double price;\n\n    public Product(double price) {\n        this.price = price;\n    }\n\n    // getPrice metodini yarating\n    public double getPrice() {\n        return this.price;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product p = new Product(450.0);\n        System.out.println(\"Narx: $\" + p.getPrice());\n    }\n}",
    "solution": "class Product {\n    private double price;\n\n    public Product(double price) {\n        this.price = price;\n    }\n\n    public double getPrice() {\n        return this.price;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product p = new Product(450.0);\n        System.out.println(\"Narx: $\" + p.getPrice());\n    }\n}"
  },
  {
    "id": 3,
    "title": {
      "uz": "3. Setter Metodi va Narx Validatsiyasi",
      "en": "3. Setter & Price Validation"
    },
    "scenario": {
      "uz": "Narx hech qachon manfiy bo'lmasligi kerak. `setPrice(double price)` setter metodida agar `price >= 0` bo'lsa o'zgartiring, aks holda xatolik chiqaring.",
      "en": "Add `setPrice(double price)` with business logic ensuring price is non-negative."
    },
    "requirements": {
      "classes": [
        "Product"
      ],
      "methods": [
        "setPrice",
        "getPrice"
      ]
    },
    "starterCode": "class Product {\n    private double price;\n\n    public void setPrice(double price) {\n        if (price >= 0) {\n            this.price = price;\n        } else {\n            System.out.println(\"Xato: Narx manfiy bo'lishi mumkin emas!\");\n        }\n    }\n\n    public double getPrice() {\n        return this.price;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product p = new Product();\n        p.setPrice(100.0);\n        p.setPrice(-50.0); // Xatolik tekshiruvi\n        System.out.println(\"Yakuniy narx: $\" + p.getPrice());\n    }\n}",
    "solution": "class Product {\n    private double price;\n\n    public void setPrice(double price) {\n        if (price >= 0) {\n            this.price = price;\n        } else {\n            System.out.println(\"Xato: Narx manfiy bo'lishi mumkin emas!\");\n        }\n    }\n\n    public double getPrice() {\n        return this.price;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product p = new Product();\n        p.setPrice(100.0);\n        p.setPrice(-50.0);\n        System.out.println(\"Yakuniy narx: $\" + p.getPrice());\n    }\n}"
  },
  {
    "id": 4,
    "title": {
      "uz": "4. Ism Validatsiyasi (Null & Empty Check)",
      "en": "4. Name Validation (Null & Empty Check)"
    },
    "scenario": {
      "uz": "Tovar nomi bo'sh yoki `null` bo'lishi mumkin emas. `setName(String name)` metodida tekshiruv o'rnating.",
      "en": "Enforce valid non-empty string in `setName(String name)`."
    },
    "requirements": {
      "classes": [
        "Product"
      ],
      "methods": [
        "setName",
        "getName"
      ]
    },
    "starterCode": "class Product {\n    private String name;\n\n    public void setName(String name) {\n        if (name != null && !name.trim().isEmpty()) {\n            this.name = name;\n        } else {\n            System.out.println(\"Xato: Nomi bo'sh bo'lishi mumkin emas!\");\n        }\n    }\n\n    public String getName() {\n        return this.name;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product p = new Product();\n        p.setName(\"Planshet\");\n        System.out.println(\"Mahsulot: \" + p.getName());\n    }\n}",
    "solution": "class Product {\n    private String name;\n\n    public void setName(String name) {\n        if (name != null && !name.trim().isEmpty()) {\n            this.name = name;\n        } else {\n            System.out.println(\"Xato: Nomi bo'sh bo'lishi mumkin emas!\");\n        }\n    }\n\n    public String getName() {\n        return this.name;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product p = new Product();\n        p.setName(\"Planshet\");\n        System.out.println(\"Mahsulot: \" + p.getName());\n    }\n}"
  },
  {
    "id": 5,
    "title": {
      "uz": "5. O'zgarmas Klass (Immutable Class)",
      "en": "5. Immutable Class"
    },
    "scenario": {
      "uz": "To'lov cheki (`Receipt`) kabi ma'lumotlar yaratilgandan keyin hech qachon o'zgarmasligi kerak. Maydonlarni `final` qilib, hech qanday setter yaratmang.",
      "en": "Create an immutable `Receipt` class with `final` fields and no mutator setters."
    },
    "requirements": {
      "classes": [
        "Receipt"
      ],
      "keywords": [
        "final"
      ]
    },
    "starterCode": "final class Receipt {\n    private final String transactionId;\n    private final double amount;\n\n    public Receipt(String transactionId, double amount) {\n        this.transactionId = transactionId;\n        this.amount = amount;\n    }\n\n    public String getTransactionId() { return transactionId; }\n    public double getAmount() { return amount; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Receipt r = new Receipt(\"TXN-9842\", 250.0);\n        System.out.println(\"Chek: \" + r.getTransactionId() + \" -> $\" + r.getAmount());\n    }\n}",
    "solution": "final class Receipt {\n    private final String transactionId;\n    private final double amount;\n\n    public Receipt(String transactionId, double amount) {\n        this.transactionId = transactionId;\n        this.amount = amount;\n    }\n\n    public String getTransactionId() { return transactionId; }\n    public double getAmount() { return amount; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Receipt r = new Receipt(\"TXN-9842\", 250.0);\n        System.out.println(\"Chek: \" + r.getTransactionId() + \" -> $\" + r.getAmount());\n    }\n}"
  },
  {
    "id": 6,
    "title": {
      "uz": "6. Bank Hisobi va Balans Himoyasi",
      "en": "6. BankAccount Balance Protection"
    },
    "scenario": {
      "uz": "Bank hisobi (`BankAccount`): balansni to'g'ridan-to'g'ri o'zgartirib bo'lmaydi. Faqat `deposit(double amt)` va `withdraw(double amt)` metodlari orqali operatsiya qilinadi.",
      "en": "Encapsulate `BankAccount` balance, exposing only `deposit` and `withdraw` methods."
    },
    "requirements": {
      "classes": [
        "BankAccount"
      ],
      "methods": [
        "deposit",
        "withdraw",
        "getBalance"
      ]
    },
    "starterCode": "class BankAccount {\n    private double balance;\n\n    public void deposit(double amount) {\n        if (amount > 0) balance += amount;\n    }\n\n    public boolean withdraw(double amount) {\n        if (amount > 0 && balance >= amount) {\n            balance -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public double getBalance() {\n        return balance;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BankAccount acc = new BankAccount();\n        acc.deposit(500.0);\n        acc.withdraw(200.0);\n        System.out.println(\"Balans: $\" + acc.getBalance());\n    }\n}",
    "solution": "class BankAccount {\n    private double balance;\n\n    public void deposit(double amount) {\n        if (amount > 0) balance += amount;\n    }\n\n    public boolean withdraw(double amount) {\n        if (amount > 0 && balance >= amount) {\n            balance -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public double getBalance() {\n        return balance;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BankAccount acc = new BankAccount();\n        acc.deposit(500.0);\n        acc.withdraw(200.0);\n        System.out.println(\"Balans: $\" + acc.getBalance());\n    }\n}"
  },
  {
    "id": 7,
    "title": {
      "uz": "7. Maxsus Konstruktor Ichida Validatsiya",
      "en": "7. Constructor Validation"
    },
    "scenario": {
      "uz": "Obyekt noto'g'ri holatda yaratilishining oldini oling. Konstruktor ichida `setPrice` yoki to'g'ridan-to'g'ri validatsiya qo'llang.",
      "en": "Enforce validation immediately inside constructor parameters."
    },
    "requirements": {
      "classes": [
        "Product"
      ],
      "constructors": [
        "Product"
      ]
    },
    "starterCode": "class Product {\n    private double price;\n\n    public Product(double price) {\n        if (price < 0) {\n            this.price = 0.0;\n        } else {\n            this.price = price;\n        }\n    }\n\n    public double getPrice() { return price; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product p = new Product(-20.0);\n        System.out.println(\"Xavfsiz narx: $\" + p.getPrice());\n    }\n}",
    "solution": "class Product {\n    private double price;\n\n    public Product(double price) {\n        if (price < 0) {\n            this.price = 0.0;\n        } else {\n            this.price = price;\n        }\n    }\n\n    public double getPrice() { return price; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product p = new Product(-20.0);\n        System.out.println(\"Xavfsiz narx: $\" + p.getPrice());\n    }\n}"
  },
  {
    "id": 8,
    "title": {
      "uz": "8. Boolean Getter (isAvailable Konvensiyasi)",
      "en": "8. Boolean Getters Convention"
    },
    "scenario": {
      "uz": "Java'da boolean maydonlar uchun getter `isAvailable()` yoki `isActive()` deb nomlanadi. `inStock` maydoni uchun `isInStock()` yozing.",
      "en": "Follow Java Bean conventions using `isInStock()` for boolean getters."
    },
    "requirements": {
      "classes": [
        "Product"
      ],
      "methods": [
        "isInStock"
      ]
    },
    "starterCode": "class Product {\n    private boolean inStock = true;\n\n    public boolean isInStock() {\n        return this.inStock;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product p = new Product();\n        System.out.println(\"Mavjudmi: \" + p.isInStock());\n    }\n}",
    "solution": "class Product {\n    private boolean inStock = true;\n\n    public boolean isInStock() {\n        return this.inStock;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product p = new Product();\n        System.out.println(\"Mavjudmi: \" + p.isInStock());\n    }\n}"
  },
  {
    "id": 9,
    "title": {
      "uz": "9. Inkapsulyatsiyalangan Hisob-Kitob",
      "en": "9. Calculated Read-Only Property"
    },
    "scenario": {
      "uz": "`OrderItem` klassi: `quantity` va `unitPrice` maydonlarini inkapsulyatsiya qilib, umumiy narxni hisoblovchi `getTotalPrice()` getterini yarating.",
      "en": "Create calculated property `getTotalPrice()` from private `quantity` and `unitPrice`."
    },
    "requirements": {
      "classes": [
        "OrderItem"
      ],
      "methods": [
        "getTotalPrice"
      ]
    },
    "starterCode": "class OrderItem {\n    private int quantity;\n    private double unitPrice;\n\n    public OrderItem(int quantity, double unitPrice) {\n        this.quantity = quantity;\n        this.unitPrice = unitPrice;\n    }\n\n    public double getTotalPrice() {\n        return this.quantity * this.unitPrice;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        OrderItem item = new OrderItem(3, 12.0);\n        System.out.println(\"Jami summa: $\" + item.getTotalPrice());\n    }\n}",
    "solution": "class OrderItem {\n    private int quantity;\n    private double unitPrice;\n\n    public OrderItem(int quantity, double unitPrice) {\n        this.quantity = quantity;\n        this.unitPrice = unitPrice;\n    }\n\n    public double getTotalPrice() {\n        return this.quantity * this.unitPrice;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        OrderItem item = new OrderItem(3, 12.0);\n        System.out.println(\"Jami summa: $\" + item.getTotalPrice());\n    }\n}"
  },
  {
    "id": 10,
    "title": {
      "uz": "10. CW2 Kurs Ishi Modeli: Xavfsiz Buyurtma",
      "en": "10. CW2 Safe Order Item Model"
    },
    "scenario": {
      "uz": "Assessment 2 (50%) talabidagi to'liq inkapsulyatsiyalangan `OrderItem` modelini quring: `itemName`, `quantity` (> 0 bo'lishi shart) va `price` bilan.",
      "en": "Build full encapsulated `OrderItem` model fulfilling CW2 Encapsulation criteria (6 marks)."
    },
    "requirements": {
      "classes": [
        "OrderItem"
      ],
      "methods": [
        "getTotal",
        "getQuantity"
      ]
    },
    "starterCode": "class OrderItem {\n    private String itemName;\n    private int quantity;\n    private double price;\n\n    public OrderItem(String itemName, int quantity, double price) {\n        this.itemName = itemName;\n        this.quantity = (quantity > 0) ? quantity : 1;\n        this.price = (price >= 0) ? price : 0.0;\n    }\n\n    public int getQuantity() { return quantity; }\n    public double getTotal() { return quantity * price; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        OrderItem order = new OrderItem(\"Latte\", 2, 4.5);\n        System.out.println(\"Buyurtma jami: $\" + order.getTotal());\n    }\n}",
    "solution": "class OrderItem {\n    private String itemName;\n    private int quantity;\n    private double price;\n\n    public OrderItem(String itemName, int quantity, double price) {\n        this.itemName = itemName;\n        this.quantity = (quantity > 0) ? quantity : 1;\n        this.price = (price >= 0) ? price : 0.0;\n    }\n\n    public int getQuantity() { return quantity; }\n    public double getTotal() { return quantity * price; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        OrderItem order = new OrderItem(\"Latte\", 2, 4.5);\n        System.out.println(\"Buyurtma jami: $\" + order.getTotal());\n    }\n}"
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

    if (elBadge) elBadge.textContent = `2-Modul • ${ch.id}-Topshiriq`;
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