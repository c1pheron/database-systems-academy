// ============================================================================
// OOP ACADEMY — 4-Modul GAME LOGIC: ABSTRACT CLASS, DYNAMIC DISPATCH, HETEROGEN TO'PLAMLAR
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
    "id": 1,
    "title": {
      "uz": "1. Abstrakt Klass ('abstract class')",
      "en": "1. Abstract Class Declaration"
    },
    "scenario": {
      "uz": "O'zidan to'g'ridan-to'g'ri obyekt yaratib bo'lmaydigan `abstract class MenuItem` e'lon qiling.",
      "en": "Declare an un-instantiable `abstract class MenuItem`."
    },
    "requirements": {
      "classes": [
        "MenuItem"
      ],
      "keywords": [
        "abstract"
      ]
    },
    "starterCode": "abstract class MenuItem {\n    String name;\n    public MenuItem(String name) { this.name = name; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Abstrakt klass tayyor!\");\n    }\n}",
    "solution": "abstract class MenuItem {\n    String name;\n    public MenuItem(String name) { this.name = name; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Abstrakt klass tayyor!\");\n    }\n}"
  },
  {
    "id": 2,
    "title": {
      "uz": "2. Abstrakt Metod E'lon Qilish",
      "en": "2. Abstract Method Declaration"
    },
    "scenario": {
      "uz": "Har bir tovar narxni o'zicha hisoblasin: `public abstract double getPrice();` abstrakt metodini qo'shing.",
      "en": "Define `public abstract double getPrice();` inside abstract class."
    },
    "requirements": {
      "classes": [
        "MenuItem"
      ],
      "methods": [
        "getPrice"
      ],
      "keywords": [
        "abstract"
      ]
    },
    "starterCode": "abstract class MenuItem {\n    String name;\n    public MenuItem(String name) { this.name = name; }\n    public abstract double getPrice();\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Abstrakt metod e'lon qilindi!\");\n    }\n}",
    "solution": "abstract class MenuItem {\n    String name;\n    public MenuItem(String name) { this.name = name; }\n    public abstract double getPrice();\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Abstrakt metod e'lon qilindi!\");\n    }\n}"
  },
  {
    "id": 3,
    "title": {
      "uz": "3. Abstrakt Metodni Amalga Oshirish",
      "en": "3. Concrete Subclass Implementation"
    },
    "scenario": {
      "uz": "`CoffeeItem` klassida ota klassdagi abstrakt `getPrice()` metodining tanasini yozing.",
      "en": "Implement inherited abstract method in a concrete subclass."
    },
    "requirements": {
      "classes": [
        "MenuItem",
        "CoffeeItem"
      ],
      "methods": [
        "getPrice"
      ]
    },
    "starterCode": "abstract class MenuItem {\n    String name;\n    public MenuItem(String name) { this.name = name; }\n    public abstract double getPrice();\n}\n\nclass CoffeeItem extends MenuItem {\n    private double price;\n    public CoffeeItem(String name, double price) { super(name); this.price = price; }\n    @Override\n    public double getPrice() { return this.price; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CoffeeItem c = new CoffeeItem(\"Espresso\", 3.0);\n        System.out.println(c.name + \": $\" + c.getPrice());\n    }\n}",
    "solution": "abstract class MenuItem {\n    String name;\n    public MenuItem(String name) { this.name = name; }\n    public abstract double getPrice();\n}\n\nclass CoffeeItem extends MenuItem {\n    private double price;\n    public CoffeeItem(String name, double price) { super(name); this.price = price; }\n    @Override\n    public double getPrice() { return this.price; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CoffeeItem c = new CoffeeItem(\"Espresso\", 3.0);\n        System.out.println(c.name + \": $\" + c.getPrice());\n    }\n}"
  },
  {
    "id": 4,
    "title": {
      "uz": "4. Dinamik Metod Chaqiruvi (Polymorphic Call)",
      "en": "4. Dynamic Method Dispatch"
    },
    "scenario": {
      "uz": "Superklass turidagi o'zgaruvchiga bola klass obyektini biriktiring: `MenuItem item = new CoffeeItem(...);` va `item.getPrice()` ni chaqiring.",
      "en": "Invoke polymorphic methods via superclass reference variable."
    },
    "requirements": {
      "classes": [
        "MenuItem",
        "CoffeeItem"
      ],
      "methods": [
        "getPrice"
      ]
    },
    "starterCode": "abstract class MenuItem {\n    public abstract double getPrice();\n}\n\nclass CoffeeItem extends MenuItem {\n    @Override\n    public double getPrice() { return 4.5; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MenuItem item = new CoffeeItem();\n        System.out.println(\"Polimorfik narx: $\" + item.getPrice());\n    }\n}",
    "solution": "abstract class MenuItem {\n    public abstract double getPrice();\n}\n\nclass CoffeeItem extends MenuItem {\n    @Override\n    public double getPrice() { return 4.5; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MenuItem item = new CoffeeItem();\n        System.out.println(\"Polimorfik narx: $\" + item.getPrice());\n    }\n}"
  },
  {
    "id": 5,
    "title": {
      "uz": "5. Heterogen Massiv (Turli xil Obyektlar)",
      "en": "5. Heterogeneous Collection"
    },
    "scenario": {
      "uz": "Bitta `MenuItem[]` massivida kofe, shirinlik va choy kabi turli xil obyektlarni saqlash.",
      "en": "Store heterogeneous polymorphic objects in an abstract type array."
    },
    "requirements": {
      "classes": [
        "MenuItem",
        "CoffeeItem",
        "TeaItem"
      ]
    },
    "starterCode": "abstract class MenuItem {\n    public abstract double getPrice();\n}\n\nclass CoffeeItem extends MenuItem { public double getPrice() { return 4.0; } }\nclass TeaItem extends MenuItem { public double getPrice() { return 2.5; } }\n\nclass Main {\n    public static void main(String[] args) {\n        MenuItem[] order = { new CoffeeItem(), new TeaItem() };\n        double total = 0;\n        for (MenuItem item : order) total += item.getPrice();\n        System.out.println(\"Jami: $\" + total);\n    }\n}",
    "solution": "abstract class MenuItem {\n    public abstract double getPrice();\n}\n\nclass CoffeeItem extends MenuItem { public double getPrice() { return 4.0; } }\nclass TeaItem extends MenuItem { public double getPrice() { return 2.5; } }\n\nclass Main {\n    public static void main(String[] args) {\n        MenuItem[] order = { new CoffeeItem(), new TeaItem() };\n        double total = 0;\n        for (MenuItem item : order) total += item.getPrice();\n        System.out.println(\"Jami: $\" + total);\n    }\n}"
  },
  {
    "id": 6,
    "title": {
      "uz": "6. 'instanceof' va Xavfsiz Downcasting",
      "en": "6. 'instanceof' & Safe Downcasting"
    },
    "scenario": {
      "uz": "Obyektning asl turini aniqlash uchun `item instanceof CoffeeItem` tekshiruvini bajaring.",
      "en": "Safely test and cast types using `instanceof`."
    },
    "requirements": {
      "classes": [
        "MenuItem",
        "CoffeeItem"
      ],
      "keywords": [
        "instanceof"
      ]
    },
    "starterCode": "abstract class MenuItem {}\nclass CoffeeItem extends MenuItem { String roast = \"Dark\"; }\n\nclass Main {\n    public static void main(String[] args) {\n        MenuItem item = new CoffeeItem();\n        if (item instanceof CoffeeItem) {\n            CoffeeItem c = (CoffeeItem) item;\n            System.out.println(\"Qovurilish darajasi: \" + c.roast);\n        }\n    }\n}",
    "solution": "abstract class MenuItem {}\nclass CoffeeItem extends MenuItem { String roast = \"Dark\"; }\n\nclass Main {\n    public static void main(String[] args) {\n        MenuItem item = new CoffeeItem();\n        if (item instanceof CoffeeItem) {\n            CoffeeItem c = (CoffeeItem) item;\n            System.out.println(\"Qovurilish darajasi: \" + c.roast);\n        }\n    }\n}"
  },
  {
    "id": 7,
    "title": {
      "uz": "7. Template Method Pattern Asosi",
      "en": "7. Template Method Pattern Foundation"
    },
    "scenario": {
      "uz": "Abstrakt klassda umumiy buyurtma algoritmini (`processOrder()`) yozib, qadamlarni bola klasslarga qoldiring.",
      "en": "Implement template workflow logic inside abstract superclass."
    },
    "requirements": {
      "classes": [
        "OrderWorkflow"
      ],
      "keywords": [
        "abstract"
      ]
    },
    "starterCode": "abstract class OrderWorkflow {\n    public void processOrder() {\n        prepare();\n        packageItem();\n        System.out.println(\"Tayyor!\");\n    }\n    public abstract void prepare();\n    public abstract void packageItem();\n}\n\nclass CoffeeWorkflow extends OrderWorkflow {\n    public void prepare() { System.out.println(\"Kofe qaynatilmoqda...\"); }\n    public void packageItem() { System.out.println(\"Stakanga quyildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new CoffeeWorkflow().processOrder();\n    }\n}",
    "solution": "abstract class OrderWorkflow {\n    public void processOrder() {\n        prepare();\n        packageItem();\n        System.out.println(\"Tayyor!\");\n    }\n    public abstract void prepare();\n    public abstract void packageItem();\n}\n\nclass CoffeeWorkflow extends OrderWorkflow {\n    public void prepare() { System.out.println(\"Kofe qaynatilmoqda...\"); }\n    public void packageItem() { System.out.println(\"Stakanga quyildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new CoffeeWorkflow().processOrder();\n    }\n}"
  },
  {
    "id": 8,
    "title": {
      "uz": "8. Abstrakt Klassda Konstruktor Rol",
      "en": "8. Abstract Class Constructors"
    },
    "scenario": {
      "uz": "Abstrakt klassdan obyekt ololmasak ham, uning konstruktori bola klasslar umumiy holatini initsializatsiya qiladi.",
      "en": "Understand initialization via abstract class constructors."
    },
    "requirements": {
      "classes": [
        "Item"
      ],
      "constructors": [
        "Item"
      ]
    },
    "starterCode": "abstract class Item {\n    String sku;\n    public Item(String sku) { this.sku = sku; }\n}\nclass ConcreteItem extends Item {\n    public ConcreteItem(String sku) { super(sku); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ConcreteItem ci = new ConcreteItem(\"SKU-1002\");\n        System.out.println(\"Kod: \" + ci.sku);\n    }\n}",
    "solution": "abstract class Item {\n    String sku;\n    public Item(String sku) { this.sku = sku; }\n}\nclass ConcreteItem extends Item {\n    public ConcreteItem(String sku) { super(sku); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ConcreteItem ci = new ConcreteItem(\"SKU-1002\");\n        System.out.println(\"Kod: \" + ci.sku);\n    }\n}"
  },
  {
    "id": 9,
    "title": {
      "uz": "9. Polimorfizm va Metod Parametrlari",
      "en": "9. Polymorphic Method Arguments"
    },
    "scenario": {
      "uz": "`printReceipt(MenuItem item)` metodi har qanday turdagi mahsulotni qabul qila oladi.",
      "en": "Accept polymorphic abstractions as method parameters."
    },
    "requirements": {
      "classes": [
        "MenuItem"
      ],
      "methods": [
        "printReceipt"
      ]
    },
    "starterCode": "abstract class MenuItem { public abstract String getLabel(); }\nclass Latte extends MenuItem { public String getLabel() { return \"Latte\"; } }\n\nclass Main {\n    public static void printReceipt(MenuItem item) {\n        System.out.println(\"Chek: \" + item.getLabel());\n    }\n    public static void main(String[] args) {\n        printReceipt(new Latte());\n    }\n}",
    "solution": "abstract class MenuItem { public abstract String getLabel(); }\nclass Latte extends MenuItem { public String getLabel() { return \"Latte\"; } }\n\nclass Main {\n    public static void printReceipt(MenuItem item) {\n        System.out.println(\"Chek: \" + item.getLabel());\n    }\n    public static void main(String[] args) {\n        printReceipt(new Latte());\n    }\n}"
  },
  {
    "id": 10,
    "title": {
      "uz": "10. CW2 Kurs Ishi Modeli: Abstrakt Mahsulot Arxitekturasi",
      "en": "10. CW2 Abstract Product Architecture"
    },
    "scenario": {
      "uz": "Assessment 2 (50%) talabi: `abstract class Product` (Polymorphism & Abstraction - 12 marks). `calculateCost()` va `getDescription()` metodlari bilan.",
      "en": "Build full polymorphic abstract product model fulfilling CW2 criteria."
    },
    "requirements": {
      "classes": [
        "Product",
        "Espresso"
      ],
      "methods": [
        "calculateCost",
        "getDescription"
      ]
    },
    "starterCode": "abstract class Product {\n    public abstract double calculateCost();\n    public abstract String getDescription();\n}\n\nclass Espresso extends Product {\n    public double calculateCost() { return 3.5; }\n    public String getDescription() { return \"Klassik Espresso\"; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product p = new Espresso();\n        System.out.println(p.getDescription() + \" -> $\" + p.calculateCost());\n    }\n}",
    "solution": "abstract class Product {\n    public abstract double calculateCost();\n    public abstract String getDescription();\n}\n\nclass Espresso extends Product {\n    public double calculateCost() { return 3.5; }\n    public String getDescription() { return \"Klassik Espresso\"; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product p = new Espresso();\n        System.out.println(p.getDescription() + \" -> $\" + p.calculateCost());\n    }\n}"
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

    if (elBadge) elBadge.textContent = `4-Modul • ${ch.id}-Topshiriq`;
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