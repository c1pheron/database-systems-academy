// ============================================================================
// OOP ACADEMY — 5-Modul GAME LOGIC: INTERFACE, IMPLEMENTS, MULTIPLE INTERFACES VA DEPENDENCY INJECTION
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
    "id": 1,
    "title": {
      "uz": "1. Birinchi Interfeys ('interface')",
      "en": "1. First Interface Declaration"
    },
    "scenario": {
      "uz": "`PaymentMethod` interfeysini e'lon qiling va unga `void pay(double amount);` metodini qo'shing.",
      "en": "Declare `PaymentMethod` interface with contract `void pay(double amount);`."
    },
    "requirements": {
      "classes": [
        "PaymentMethod"
      ],
      "methods": [
        "pay"
      ]
    },
    "starterCode": "interface PaymentMethod {\n    void pay(double amount);\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Interfeys yaratildi!\");\n    }\n}",
    "solution": "interface PaymentMethod {\n    void pay(double amount);\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Interfeys yaratildi!\");\n    }\n}"
  },
  {
    "id": 2,
    "title": {
      "uz": "2. Interfeysni Amalga Oshirish ('implements')",
      "en": "2. Interface Implementation with 'implements'"
    },
    "scenario": {
      "uz": "`PaymePayment` klassi `PaymentMethod` interfeysini amalga oshirsin (implements).",
      "en": "Implement contract using `class PaymePayment implements PaymentMethod`."
    },
    "requirements": {
      "classes": [
        "PaymentMethod",
        "PaymePayment"
      ],
      "keywords": [
        "implements"
      ]
    },
    "starterCode": "interface PaymentMethod {\n    void pay(double amount);\n}\n\nclass PaymePayment implements PaymentMethod {\n    public void pay(double amount) {\n        System.out.println(\"Payme orqali to'landi: $\" + amount);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentMethod pm = new PaymePayment();\n        pm.pay(75.0);\n    }\n}",
    "solution": "interface PaymentMethod {\n    void pay(double amount);\n}\n\nclass PaymePayment implements PaymentMethod {\n    public void pay(double amount) {\n        System.out.println(\"Payme orqali to'landi: $\" + amount);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentMethod pm = new PaymePayment();\n        pm.pay(75.0);\n    }\n}"
  },
  {
    "id": 3,
    "title": {
      "uz": "3. Bir Nechta To'lov Usullari (Pluggable Architecture)",
      "en": "3. Pluggable Payment Methods"
    },
    "scenario": {
      "uz": "`ClickPayment` va `CashPayment` klasslarini ham bir xil `PaymentMethod` orqali yarating.",
      "en": "Add multiple pluggable providers honoring the same interface contract."
    },
    "requirements": {
      "classes": [
        "PaymentMethod",
        "ClickPayment",
        "CashPayment"
      ]
    },
    "starterCode": "interface PaymentMethod { void pay(double amount); }\nclass ClickPayment implements PaymentMethod { public void pay(double a) { System.out.println(\"Click: $\" + a); } }\nclass CashPayment implements PaymentMethod { public void pay(double a) { System.out.println(\"Naqd: $\" + a); } }\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentMethod p1 = new ClickPayment();\n        PaymentMethod p2 = new CashPayment();\n        p1.pay(50.0); p2.pay(20.0);\n    }\n}",
    "solution": "interface PaymentMethod { void pay(double amount); }\nclass ClickPayment implements PaymentMethod { public void pay(double a) { System.out.println(\"Click: $\" + a); } }\nclass CashPayment implements PaymentMethod { public void pay(double a) { System.out.println(\"Naqd: $\" + a); } }\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentMethod p1 = new ClickPayment();\n        PaymentMethod p2 = new CashPayment();\n        p1.pay(50.0); p2.pay(20.0);\n    }\n}"
  },
  {
    "id": 4,
    "title": {
      "uz": "4. Bir Nechta Interfeysni Qo'llash (Multiple Interfaces)",
      "en": "4. Implementing Multiple Interfaces"
    },
    "scenario": {
      "uz": "Java'da bir vaqtning o'zida bir nechta interfeysni qo'llash mumkin: `implements Printable, Exportable`.",
      "en": "Implement multiple interfaces simultaneously on a single class."
    },
    "requirements": {
      "classes": [
        "Printable",
        "Exportable",
        "Receipt"
      ],
      "keywords": [
        "implements"
      ]
    },
    "starterCode": "interface Printable { void print(); }\ninterface Exportable { void exportPDF(); }\n\nclass Receipt implements Printable, Exportable {\n    public void print() { System.out.println(\"Chop etildi.\"); }\n    public void exportPDF() { System.out.println(\"PDF eksport qilindi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Receipt r = new Receipt();\n        r.print(); r.exportPDF();\n    }\n}",
    "solution": "interface Printable { void print(); }\ninterface Exportable { void exportPDF(); }\n\nclass Receipt implements Printable, Exportable {\n    public void print() { System.out.println(\"Chop etildi.\"); }\n    public void exportPDF() { System.out.println(\"PDF eksport qilindi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Receipt r = new Receipt();\n        r.print(); r.exportPDF();\n    }\n}"
  },
  {
    "id": 5,
    "title": {
      "uz": "5. Bo'shliq (Loose Coupling) & Dependency Injection",
      "en": "5. Loose Coupling & Dependency Injection"
    },
    "scenario": {
      "uz": "`OrderService` aniq bir to'lov turiga qotib qolmasin. U konstruktori orqali `PaymentMethod` interfeysini qabul qilsin.",
      "en": "Inject interface dependencies via constructor decoupling business services."
    },
    "requirements": {
      "classes": [
        "PaymentMethod",
        "OrderService"
      ],
      "constructors": [
        "OrderService"
      ]
    },
    "starterCode": "interface PaymentMethod { void pay(double amount); }\nclass CardPayment implements PaymentMethod { public void pay(double a) { System.out.println(\"Karta: $\" + a); } }\n\nclass OrderService {\n    private PaymentMethod paymentMethod;\n    public OrderService(PaymentMethod paymentMethod) { this.paymentMethod = paymentMethod; }\n    public void checkout(double total) { paymentMethod.pay(total); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        OrderService service = new OrderService(new CardPayment());\n        service.checkout(120.0);\n    }\n}",
    "solution": "interface PaymentMethod { void pay(double amount); }\nclass CardPayment implements PaymentMethod { public void pay(double a) { System.out.println(\"Karta: $\" + a); } }\n\nclass OrderService {\n    private PaymentMethod paymentMethod;\n    public OrderService(PaymentMethod paymentMethod) { this.paymentMethod = paymentMethod; }\n    public void checkout(double total) { paymentMethod.pay(total); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        OrderService service = new OrderService(new CardPayment());\n        service.checkout(120.0);\n    }\n}"
  },
  {
    "id": 6,
    "title": {
      "uz": "6. Bildirishnoma Tizimi (Notifier Interface)",
      "en": "6. Notification System (Notifier Interface)"
    },
    "scenario": {
      "uz": "`interface Notifier { void notifyUser(String msg); }` interfeysi va `TelegramNotifier` sinfi.",
      "en": "Model notification contracts via `Notifier`."
    },
    "requirements": {
      "classes": [
        "Notifier",
        "TelegramNotifier"
      ]
    },
    "starterCode": "interface Notifier { void notifyUser(String msg); }\nclass TelegramNotifier implements Notifier {\n    public void notifyUser(String msg) { System.out.println(\"TG Xabar: \" + msg); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Notifier n = new TelegramNotifier();\n        n.notifyUser(\"Buyurtmangiz yetkazildi!\");\n    }\n}",
    "solution": "interface Notifier { void notifyUser(String msg); }\nclass TelegramNotifier implements Notifier {\n    public void notifyUser(String msg) { System.out.println(\"TG Xabar: \" + msg); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Notifier n = new TelegramNotifier();\n        n.notifyUser(\"Buyurtmangiz yetkazildi!\");\n    }\n}"
  },
  {
    "id": 7,
    "title": {
      "uz": "7. Interfeysda Standart Metodlar ('default')",
      "en": "7. Interface Default Methods"
    },
    "scenario": {
      "uz": "Mavjud klasslarni buzmasdan interfeysga umumiy metod qo'shish: `default void log() { ... }`.",
      "en": "Add non-breaking behavior contracts using `default` interface methods."
    },
    "requirements": {
      "classes": [
        "AuditLog"
      ],
      "keywords": [
        "default"
      ]
    },
    "starterCode": "interface AuditLog {\n    default void log(String event) {\n        System.out.println(\"[AUDIT]: \" + event);\n    }\n}\n\nclass OrderProcessor implements AuditLog {}\n\nclass Main {\n    public static void main(String[] args) {\n        new OrderProcessor().log(\"Buyurtma yaratildi\");\n    }\n}",
    "solution": "interface AuditLog {\n    default void log(String event) {\n        System.out.println(\"[AUDIT]: \" + event);\n    }\n}\n\nclass OrderProcessor implements AuditLog {}\n\nclass Main {\n    public static void main(String[] args) {\n        new OrderProcessor().log(\"Buyurtma yaratildi\");\n    }\n}"
  },
  {
    "id": 8,
    "title": {
      "uz": "8. Interfeyslararo Merosxo'rlik ('extends')",
      "en": "8. Interfaces Extending Interfaces"
    },
    "scenario": {
      "uz": "Interfeys boshqa interfeysdan meros olishi mumkin: `interface AdvancedPayment extends PaymentMethod`.",
      "en": "Extend interface contracts using `extends`."
    },
    "requirements": {
      "classes": [
        "PaymentMethod",
        "RefundablePayment"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "interface PaymentMethod { void pay(double amt); }\ninterface RefundablePayment extends PaymentMethod { void refund(double amt); }\n\nclass ModernGateway implements RefundablePayment {\n    public void pay(double amt) { System.out.println(\"To'landi: \" + amt); }\n    public void refund(double amt) { System.out.println(\"Qaytarildi: \" + amt); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ModernGateway mg = new ModernGateway();\n        mg.pay(10); mg.refund(10);\n    }\n}",
    "solution": "interface PaymentMethod { void pay(double amt); }\ninterface RefundablePayment extends PaymentMethod { void refund(double amt); }\n\nclass ModernGateway implements RefundablePayment {\n    public void pay(double amt) { System.out.println(\"To'landi: \" + amt); }\n    public void refund(double amt) { System.out.println(\"Qaytarildi: \" + amt); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ModernGateway mg = new ModernGateway();\n        mg.pay(10); mg.refund(10);\n    }\n}"
  },
  {
    "id": 9,
    "title": {
      "uz": "9. Taqqoslash Interfeysi (Comparable)",
      "en": "9. Comparable Contract Implementation"
    },
    "scenario": {
      "uz": "Java standard kutubxonasidagi `Comparable<Product>` interfeysini narx bo'yicha saralash uchun qo'llang.",
      "en": "Implement Java core `Comparable` interface contract."
    },
    "requirements": {
      "classes": [
        "Product"
      ],
      "keywords": [
        "Comparable"
      ]
    },
    "starterCode": "class Product implements Comparable<Product> {\n    double price;\n    public Product(double price) { this.price = price; }\n    public int compareTo(Product other) {\n        return Double.compare(this.price, other.price);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product p1 = new Product(10.0);\n        Product p2 = new Product(20.0);\n        System.out.println(\"Taqqoslash natijasi: \" + p1.compareTo(p2));\n    }\n}",
    "solution": "class Product implements Comparable<Product> {\n    double price;\n    public Product(double price) { this.price = price; }\n    public int compareTo(Product other) {\n        return Double.compare(this.price, other.price);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product p1 = new Product(10.0);\n        Product p2 = new Product(20.0);\n        System.out.println(\"Taqqoslash natijasi: \" + p1.compareTo(p2));\n    }\n}"
  },
  {
    "id": 10,
    "title": {
      "uz": "10. CW2 Kurs Ishi Modeli: Customizer Interfeysi",
      "en": "10. CW2 Customizer Interface Contract"
    },
    "scenario": {
      "uz": "Assessment 2 (50%) talabi: Buyurtma modifikatsiyalari uchun shartnoma: `interface Customizer` (`double getCost()`, `String getLabel()`).",
      "en": "Build extensible customizer contract for CW2 architecture."
    },
    "requirements": {
      "classes": [
        "Customizer",
        "SyrupCustomizer"
      ],
      "methods": [
        "getCost",
        "getLabel"
      ]
    },
    "starterCode": "interface Customizer {\n    double getCost();\n    String getLabel();\n}\n\nclass SyrupCustomizer implements Customizer {\n    public double getCost() { return 0.75; }\n    public String getLabel() { return \"Vanil siropi\"; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customizer c = new SyrupCustomizer();\n        System.out.println(c.getLabel() + \" qo'shimcha narxi: $\" + c.getCost());\n    }\n}",
    "solution": "interface Customizer {\n    double getCost();\n    String getLabel();\n}\n\nclass SyrupCustomizer implements Customizer {\n    public double getCost() { return 0.75; }\n    public String getLabel() { return \"Vanil siropi\"; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customizer c = new SyrupCustomizer();\n        System.out.println(c.getLabel() + \" qo'shimcha narxi: $\" + c.getCost());\n    }\n}"
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

    if (elBadge) elBadge.textContent = `5-Modul • ${ch.id}-Topshiriq`;
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