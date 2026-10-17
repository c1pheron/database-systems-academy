// ============================================================================
// OOP ACADEMY — 6-Modul GAME LOGIC: SINGLETON, FACTORY, BUILDER, DECORATOR, STRATEGY, OBSERVER
// Professor Ada's Interactive Java IDE Simulator • WIUT 5COSC018C
// ============================================================================

(function () {
  "use strict";

  const STORAGE_KEY = "WIUT_OOP_W6_PROGRESS";
  let currentLang = "uz";
  let currentQIndex = 0;
  let solvedQuestions = new Set();

  const CHALLENGES = [
  {
    "id": 1,
    "title": {
      "uz": "1. Creational: Singleton Pattern",
      "en": "1. Creational: Singleton Pattern"
    },
    "scenario": {
      "uz": "Assessment 2 (9 marks): Butun dastur bo'yicha bitta yagona `OrderDatabase` bazasi bo'lishi kerak. `private` konstruktor va `getInstance()` metodini yarating.",
      "en": "Implement thread-safe Singleton pattern for order persistence."
    },
    "requirements": {
      "classes": [
        "OrderDatabase"
      ],
      "methods": [
        "getInstance"
      ],
      "keywords": [
        "static",
        "private"
      ]
    },
    "starterCode": "class OrderDatabase {\n    private static OrderDatabase instance;\n    private OrderDatabase() {}\n    public static OrderDatabase getInstance() {\n        if (instance == null) instance = new OrderDatabase();\n        return instance;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        OrderDatabase db1 = OrderDatabase.getInstance();\n        OrderDatabase db2 = OrderDatabase.getInstance();\n        System.out.println(\"Aynan bir xil nusxami? \" + (db1 == db2));\n    }\n}",
    "solution": "class OrderDatabase {\n    private static OrderDatabase instance;\n    private OrderDatabase() {}\n    public static OrderDatabase getInstance() {\n        if (instance == null) instance = new OrderDatabase();\n        return instance;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        OrderDatabase db1 = OrderDatabase.getInstance();\n        OrderDatabase db2 = OrderDatabase.getInstance();\n        System.out.println(\"Aynan bir xil nusxami? \" + (db1 == db2));\n    }\n}"
  },
  {
    "id": 2,
    "title": {
      "uz": "2. Creational: Factory Method Pattern",
      "en": "2. Creational: Factory Method Pattern"
    },
    "scenario": {
      "uz": "Assessment 2 (9 marks): Obyekt yaratishni klientdan yashirish. `CoffeeFactory.createCoffee(String type)` fabrikasini quring.",
      "en": "Encapsulate product instantiations via `CoffeeFactory`."
    },
    "requirements": {
      "classes": [
        "CoffeeFactory"
      ],
      "methods": [
        "createCoffee"
      ]
    },
    "starterCode": "interface Coffee { String getName(); }\nclass Latte implements Coffee { public String getName() { return \"Latte\"; } }\nclass Espresso implements Coffee { public String getName() { return \"Espresso\"; } }\n\nclass CoffeeFactory {\n    public static Coffee createCoffee(String type) {\n        if (\"latte\".equalsIgnoreCase(type)) return new Latte();\n        return new Espresso();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Coffee c = CoffeeFactory.createCoffee(\"latte\");\n        System.out.println(\"Fabrika yaratdi: \" + c.getName());\n    }\n}",
    "solution": "interface Coffee { String getName(); }\nclass Latte implements Coffee { public String getName() { return \"Latte\"; } }\nclass Espresso implements Coffee { public String getName() { return \"Espresso\"; } }\n\nclass CoffeeFactory {\n    public static Coffee createCoffee(String type) {\n        if (\"latte\".equalsIgnoreCase(type)) return new Latte();\n        return new Espresso();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Coffee c = CoffeeFactory.createCoffee(\"latte\");\n        System.out.println(\"Fabrika yaratdi: \" + c.getName());\n    }\n}"
  },
  {
    "id": 3,
    "title": {
      "uz": "3. Creational: Builder Pattern",
      "en": "3. Creational: Builder Pattern"
    },
    "scenario": {
      "uz": "Ko'p parametrlarga ega murakkab buyurtmani zanjirli (fluent) usulda qurish: `new OrderBuilder().setSize(\"L\").setSweetener(\"Honey\").build();`.",
      "en": "Implement Builder pattern with fluent method chaining."
    },
    "requirements": {
      "classes": [
        "Order",
        "OrderBuilder"
      ],
      "methods": [
        "build"
      ]
    },
    "starterCode": "class Order {\n    String size;\n    String sweetener;\n}\nclass OrderBuilder {\n    private Order order = new Order();\n    public OrderBuilder setSize(String s) { order.size = s; return this; }\n    public OrderBuilder setSweetener(String sw) { order.sweetener = sw; return this; }\n    public Order build() { return order; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Order o = new OrderBuilder().setSize(\"Large\").setSweetener(\"Asal\").build();\n        System.out.println(\"Buyurtma: \" + o.size + \", \" + o.sweetener);\n    }\n}",
    "solution": "class Order {\n    String size;\n    String sweetener;\n}\nclass OrderBuilder {\n    private Order order = new Order();\n    public OrderBuilder setSize(String s) { order.size = s; return this; }\n    public OrderBuilder setSweetener(String sw) { order.sweetener = sw; return this; }\n    public Order build() { return order; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Order o = new OrderBuilder().setSize(\"Large\").setSweetener(\"Asal\").build();\n        System.out.println(\"Buyurtma: \" + o.size + \", \" + o.sweetener);\n    }\n}"
  },
  {
    "id": 4,
    "title": {
      "uz": "4. Structural: Decorator Pattern Asosi",
      "en": "4. Structural: Decorator Pattern Core"
    },
    "scenario": {
      "uz": "Assessment 2 (9 marks): Kofe narxini va tarkibini dinamik kengaytirish uchun abstrakt `CoffeeDecorator` yarating.",
      "en": "Implement base Decorator pattern extending and wrapping base component."
    },
    "requirements": {
      "classes": [
        "Coffee",
        "CoffeeDecorator"
      ],
      "methods": [
        "getCost",
        "getDescription"
      ]
    },
    "starterCode": "interface Coffee { double getCost(); String getDescription(); }\nclass SimpleCoffee implements Coffee {\n    public double getCost() { return 2.0; }\n    public String getDescription() { return \"Oddiy Qahva\"; }\n}\nabstract class CoffeeDecorator implements Coffee {\n    protected Coffee decoratedCoffee;\n    public CoffeeDecorator(Coffee c) { this.decoratedCoffee = c; }\n    public double getCost() { return decoratedCoffee.getCost(); }\n    public String getDescription() { return decoratedCoffee.getDescription(); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Decorator asosi tayyor!\");\n    }\n}",
    "solution": "interface Coffee { double getCost(); String getDescription(); }\nclass SimpleCoffee implements Coffee {\n    public double getCost() { return 2.0; }\n    public String getDescription() { return \"Oddiy Qahva\"; }\n}\nabstract class CoffeeDecorator implements Coffee {\n    protected Coffee decoratedCoffee;\n    public CoffeeDecorator(Coffee c) { this.decoratedCoffee = c; }\n    public double getCost() { return decoratedCoffee.getCost(); }\n    public String getDescription() { return decoratedCoffee.getDescription(); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Decorator asosi tayyor!\");\n    }\n}"
  },
  {
    "id": 5,
    "title": {
      "uz": "5. Structural: Milk & Syrup Decorator",
      "en": "5. Concrete Decorators (Milk & Syrup)"
    },
    "scenario": {
      "uz": "`MilkDecorator` va `SyrupDecorator` klasslarini yozing. Ular narxga $0.5 va $0.7 qo'shsin.",
      "en": "Implement concrete decorators wrapping orders dynamically."
    },
    "requirements": {
      "classes": [
        "MilkDecorator"
      ]
    },
    "starterCode": "interface Coffee { double getCost(); String getDescription(); }\nclass SimpleCoffee implements Coffee { public double getCost() { return 2.0; } public String getDescription() { return \"Qahva\"; } }\nabstract class CoffeeDecorator implements Coffee {\n    protected Coffee decorated;\n    public CoffeeDecorator(Coffee c) { this.decorated = c; }\n}\nclass MilkDecorator extends CoffeeDecorator {\n    public MilkDecorator(Coffee c) { super(c); }\n    public double getCost() { return decorated.getCost() + 0.5; }\n    public String getDescription() { return decorated.getDescription() + \" + Sut\"; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Coffee myCoffee = new MilkDecorator(new SimpleCoffee());\n        System.out.println(myCoffee.getDescription() + \": $\" + myCoffee.getCost());\n    }\n}",
    "solution": "interface Coffee { double getCost(); String getDescription(); }\nclass SimpleCoffee implements Coffee { public double getCost() { return 2.0; } public String getDescription() { return \"Qahva\"; } }\nabstract class CoffeeDecorator implements Coffee {\n    protected Coffee decorated;\n    public CoffeeDecorator(Coffee c) { this.decorated = c; }\n}\nclass MilkDecorator extends CoffeeDecorator {\n    public MilkDecorator(Coffee c) { super(c); }\n    public double getCost() { return decorated.getCost() + 0.5; }\n    public String getDescription() { return decorated.getDescription() + \" + Sut\"; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Coffee myCoffee = new MilkDecorator(new SimpleCoffee());\n        System.out.println(myCoffee.getDescription() + \": $\" + myCoffee.getCost());\n    }\n}"
  },
  {
    "id": 6,
    "title": {
      "uz": "6. Structural: Adapter Pattern",
      "en": "6. Structural: Adapter Pattern"
    },
    "scenario": {
      "uz": "Eski bank API tizimi (`OldBankAPI`) yangi `PaymentGateway` interfeysiga mos kelmaydi. Ularni bog'lovchi `BankAdapter` yarating.",
      "en": "Translate incompatible third-party interfaces using Adapter pattern."
    },
    "requirements": {
      "classes": [
        "PaymentGateway",
        "BankAdapter"
      ]
    },
    "starterCode": "interface PaymentGateway { void executePayment(double sum); }\nclass OldBankAPI { public void sendMoney(int cents) { System.out.println(\"Eski Bank: \" + cents + \" sent\"); } }\n\nclass BankAdapter implements PaymentGateway {\n    private OldBankAPI oldBank;\n    public BankAdapter(OldBankAPI oldBank) { this.oldBank = oldBank; }\n    public void executePayment(double sum) {\n        oldBank.sendMoney((int)(sum * 100));\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentGateway gateway = new BankAdapter(new OldBankAPI());\n        gateway.executePayment(25.50);\n    }\n}",
    "solution": "interface PaymentGateway { void executePayment(double sum); }\nclass OldBankAPI { public void sendMoney(int cents) { System.out.println(\"Eski Bank: \" + cents + \" sent\"); } }\n\nclass BankAdapter implements PaymentGateway {\n    private OldBankAPI oldBank;\n    public BankAdapter(OldBankAPI oldBank) { this.oldBank = oldBank; }\n    public void executePayment(double sum) {\n        oldBank.sendMoney((int)(sum * 100));\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentGateway gateway = new BankAdapter(new OldBankAPI());\n        gateway.executePayment(25.50);\n    }\n}"
  },
  {
    "id": 7,
    "title": {
      "uz": "7. Behavioural: Strategy Pattern",
      "en": "7. Behavioural: Strategy Pattern"
    },
    "scenario": {
      "uz": "Assessment 2 (9 marks): Chegirma hisoblash algoritmini dinamik almashtirish. `DiscountStrategy` (`NoDiscount`, `TenPercentDiscount`).",
      "en": "Interchange discount calculation algorithms dynamically via Strategy pattern."
    },
    "requirements": {
      "classes": [
        "DiscountStrategy",
        "TenPercentDiscount"
      ],
      "methods": [
        "applyDiscount"
      ]
    },
    "starterCode": "interface DiscountStrategy { double applyDiscount(double amount); }\nclass NoDiscount implements DiscountStrategy { public double applyDiscount(double a) { return a; } }\nclass TenPercentDiscount implements DiscountStrategy { public double applyDiscount(double a) { return a * 0.90; } }\n\nclass Main {\n    public static void main(String[] args) {\n        DiscountStrategy strat = new TenPercentDiscount();\n        System.out.println(\"Chegirmali narx: $\" + strat.applyDiscount(100.0));\n    }\n}",
    "solution": "interface DiscountStrategy { double applyDiscount(double amount); }\nclass NoDiscount implements DiscountStrategy { public double applyDiscount(double a) { return a; } }\nclass TenPercentDiscount implements DiscountStrategy { public double applyDiscount(double a) { return a * 0.90; } }\n\nclass Main {\n    public static void main(String[] args) {\n        DiscountStrategy strat = new TenPercentDiscount();\n        System.out.println(\"Chegirmali narx: $\" + strat.applyDiscount(100.0));\n    }\n}"
  },
  {
    "id": 8,
    "title": {
      "uz": "8. Behavioural: Observer Pattern",
      "en": "8. Behavioural: Observer Pattern"
    },
    "scenario": {
      "uz": "Buyurtma holati o'zgarganda mijozga darhol xabar yuborish: `OrderObserver` va `CustomerNotifier`.",
      "en": "Notify registered observers when order state mutates."
    },
    "requirements": {
      "classes": [
        "OrderObserver",
        "CustomerNotifier"
      ],
      "methods": [
        "onUpdate"
      ]
    },
    "starterCode": "interface OrderObserver { void onUpdate(String status); }\nclass CustomerNotifier implements OrderObserver {\n    public void onUpdate(String status) { System.out.println(\"Mijozga xabar: \" + status); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        OrderObserver obs = new CustomerNotifier();\n        obs.onUpdate(\"Buyurtmangiz tayyor!\");\n    }\n}",
    "solution": "interface OrderObserver { void onUpdate(String status); }\nclass CustomerNotifier implements OrderObserver {\n    public void onUpdate(String status) { System.out.println(\"Mijozga xabar: \" + status); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        OrderObserver obs = new CustomerNotifier();\n        obs.onUpdate(\"Buyurtmangiz tayyor!\");\n    }\n}"
  },
  {
    "id": 9,
    "title": {
      "uz": "9. Command Pattern (Undo / Bekor Qilish)",
      "en": "9. Command Pattern (Undo Customization)"
    },
    "scenario": {
      "uz": "CW2 taklif qilingan funksiyasi: Oxirgi kiritilgan modifikatsiyani bekor qilish (`undoLastCustomization()`).",
      "en": "Implement undoable customizations using Command pattern."
    },
    "requirements": {
      "classes": [
        "Command"
      ]
    },
    "starterCode": "interface Command { void execute(); void undo(); }\n\nclass AddSyrupCommand implements Command {\n    public void execute() { System.out.println(\"Sirop qo'shildi.\"); }\n    public void undo() { System.out.println(\"Sirop bekor qilindi (Undo).\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Command cmd = new AddSyrupCommand();\n        cmd.execute();\n        cmd.undo();\n    }\n}",
    "solution": "interface Command { void execute(); void undo(); }\n\nclass AddSyrupCommand implements Command {\n    public void execute() { System.out.println(\"Sirop qo'shildi.\"); }\n    public void undo() { System.out.println(\"Sirop bekor qilindi (Undo).\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Command cmd = new AddSyrupCommand();\n        cmd.execute();\n        cmd.undo();\n    }\n}"
  },
  {
    "id": 10,
    "title": {
      "uz": "10. CW2 Final Loyihasi: Console Order App Arxitekturasi",
      "en": "10. CW2 Grand Assembly: Console Order App"
    },
    "scenario": {
      "uz": "Westminster CW2 (50% Kurs Ishi): Creational (Factory), Structural (Decorator) va Behavioural (Observer) patternlarini bitta dasturga jamlang (100 marks)!",
      "en": "Grand architectural assembly matching full CW2 specifications."
    },
    "requirements": {
      "classes": [
        "Coffee",
        "OrderObserver",
        "CoffeeFactory"
      ],
      "methods": [
        "createCoffee"
      ]
    },
    "starterCode": "// =========================================================\n// WESTMINSTER CW2 5COSC018C — ORDER APP GRAND ARCHITECTURE\n// =========================================================\n\ninterface Coffee { double getPrice(); String getName(); }\nclass Latte implements Coffee { public double getPrice() { return 4.0; } public String getName() { return \"Latte\"; } }\n\n// 1. Creational: Factory\nclass CoffeeFactory {\n    public static Coffee createCoffee(String type) {\n        return new Latte();\n    }\n}\n\n// 2. Structural: Decorator\nclass CaramelDecorator implements Coffee {\n    private Coffee base;\n    public CaramelDecorator(Coffee base) { this.base = base; }\n    public double getPrice() { return base.getPrice() + 0.8; }\n    public String getName() { return base.getName() + \" + Karamel\"; }\n}\n\n// 3. Behavioural: Observer\ninterface OrderObserver { void notifyUser(String s); }\nclass ConsoleNotifier implements OrderObserver {\n    public void notifyUser(String s) { System.out.println(\"📢 Xabar: \" + s); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        // 1. Fabrikadan buyurtma olish\n        Coffee order = CoffeeFactory.createCoffee(\"latte\");\n        \n        // 2. Kustomizatsiya qo'shish (Decorator)\n        order = new CaramelDecorator(order);\n        \n        // 3. Xabarnoma yuborish (Observer)\n        OrderObserver notifier = new ConsoleNotifier();\n        notifier.notifyUser(order.getName() + \" tayyorlandi! Narx: $\" + order.getPrice());\n    }\n}",
    "solution": "interface Coffee { double getPrice(); String getName(); }\nclass Latte implements Coffee { public double getPrice() { return 4.0; } public String getName() { return \"Latte\"; } }\n\nclass CoffeeFactory {\n    public static Coffee createCoffee(String type) {\n        return new Latte();\n    }\n}\n\nclass CaramelDecorator implements Coffee {\n    private Coffee base;\n    public CaramelDecorator(Coffee base) { this.base = base; }\n    public double getPrice() { return base.getPrice() + 0.8; }\n    public String getName() { return base.getName() + \" + Karamel\"; }\n}\n\ninterface OrderObserver { void notifyUser(String s); }\nclass ConsoleNotifier implements OrderObserver {\n    public void notifyUser(String s) { System.out.println(\"📢 Xabar: \" + s); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Coffee order = CoffeeFactory.createCoffee(\"latte\");\n        order = new CaramelDecorator(order);\n        OrderObserver notifier = new ConsoleNotifier();\n        notifier.notifyUser(order.getName() + \" tayyorlandi! Narx: $\" + order.getPrice());\n    }\n}"
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

    if (elBadge) elBadge.textContent = `6-Modul • ${ch.id}-Topshiriq`;
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