// ============================================================================
// OOP ACADEMY — COMPREHENSIVE BILINGUAL JAVA & GOF ENCYCLOPEDIA (UZ / EN)
// 40+ Java Core concepts, OOP Pillars, GoF Patterns, SOLID Principles & CW2
// Professor Ada • WIUT Object-Oriented Programming (5COSC018C)
// ============================================================================

(function () {
  "use strict";

  const root = typeof window !== "undefined" ? window : (typeof global !== "undefined" ? global : this);

  const OOP_DICTIONARY_DATA = [
  {
    "cmd": "class",
    "name": "Klass (Sinf / Obyekt Chizmasi)",
    "nameEn": "Class (Blueprint & State-Behavior Template)",
    "cat": "core",
    "catName": "☕ Java Core",
    "catNameEn": "☕ Java Core",
    "desc": "Obyektlarning xususiyatlari (maydonlar/state) va harakatlarini (metodlar/behavior) ifodalovchi qolip yoki chizma (blueprint). Java dasturidagi har bir kod qatori klass ichida bo'lishi shart.",
    "descEn": "A blueprint or template defining the state (fields) and behavior (methods) that objects created from it will possess. In Java, every line of executable code must reside inside a class.",
    "syntax": "public class Product {\n    private String name;\n    private double price;\n    public Product(String name, double price) {\n        this.name = name;\n        this.price = price;\n    }\n}",
    "syntaxRules": "Fayl nomi bilan faqat bitta 'public class' nomi bir xil bo'lishi mumkin. Bitta faylda bir nechta default (package-private) klasslar bo'lishi mumkin.",
    "syntaxRulesEn": "Only one public class can exist per .java file and its name must strictly match the filename. Multiple non-public classes may coexist in the same file.",
    "example": "class Product {\n    String name;\n    double price;\n}",
    "pitfalls": "Klass nomini kichik harf bilan boshlash (masalan 'product') Java konvensiyasiga zid. Doim PascalCase ishlating: 'Product', 'OrderItem'.",
    "pitfallsEn": "Naming classes in camelCase (e.g. 'product') violates Java conventions. Always use PascalCase: 'Product', 'OrderItem'.",
    "analogy": "Avtomobil zavodidagi muhandislik chizmasi. Chizmaning o'zini minib bo'lmaydi, lekin u asosida yuzlab mashinalar chiqariladi.",
    "analogyEn": "An architectural blueprint for a car. You cannot drive the blueprint itself, but hundreds of physical cars can be manufactured from it."
  },
  {
    "cmd": "new",
    "name": "'new' Kalit So'zi (Obyekt Yaratish & Heap Xotira)",
    "nameEn": "'new' Keyword (Object Instantiation & Heap Allocation)",
    "cat": "core",
    "catName": "☕ Java Core",
    "catNameEn": "☕ Java Core",
    "desc": "Klass chizmasi asosida Heap (uyum) xotirada yangi obyekt nusxasini (instance) yaratadi, xotira ajratadi va konstruktorni chaqiradi.",
    "descEn": "Allocates memory on the JVM Heap for a new object instance of the specified class and invokes the corresponding constructor.",
    "syntax": "Product p1 = new Product(\"MacBook M3\", 1400.0);",
    "syntaxRules": "'new' doimo xotiradagi obyekt manziliga (reference) ishora qaytaradi. O'zgaruvchining o'zi Stack xotirada, haqiqiy obyekt esa Heap xotirada saqlanadi.",
    "syntaxRulesEn": "'new' evaluates to a reference address in Heap memory. The reference pointer variable is stored on the Stack frame, while the object payload lives in the Heap.",
    "example": "Product p1 = new Product(\"MacBook M3\", 1400.0);\nProduct p2 = new Product(\"iPhone 15\", 950.0);",
    "pitfalls": "Agar obyekt yaratmasdan uning maydoniga murojaat qilinsa, NullPointerException yuzaga keladi.",
    "pitfallsEn": "Attempting to invoke methods or access fields on an uninstantiated reference triggers a NullPointerException at runtime.",
    "analogy": "Zavod chizmasi asosida konveyerdan yangi, haqiqiy, tutib bo'ladigan avtomobilni chiqarish buyrug'i.",
    "analogyEn": "Issuing the manufacturing order on the assembly line to fabricate a real, tangible vehicle from design blueprints."
  },
  {
    "cmd": "this",
    "name": "'this' Kalit So'zi (Joriy Obyektga Murojaat)",
    "nameEn": "'this' Keyword (Current Instance Reference)",
    "cat": "core",
    "catName": "☕ Java Core",
    "catNameEn": "☕ Java Core",
    "desc": "Metod yoki konstruktor ichida chaqirilayotgan joriy obyekt nusxasiga (current instance) ko'rsatkich. Konstruktor parametrlari klass maydonlari bilan bir xil nomlanganda adashishning oldini oladi (Variable Shadowing).",
    "descEn": "A reference variable in Java that refers to the current object instance within an instance method or constructor. Solves variable shadowing when parameters match field names.",
    "syntax": "this.fieldName = paramName;\nthis.methodName();\nthis(otherParams); // constructor chaining",
    "syntaxRules": "Static metodlar ichida 'this' dan foydalanib bo'lmaydi, chunki static metod obyektga emas, klassga tegishlidir.",
    "syntaxRulesEn": "Cannot be referenced from static contexts or methods, because static members belong to the class template rather than any individual object instance.",
    "example": "public Product(String name, double price) {\n    this.name = name;\n    this.price = price;\n}",
    "pitfalls": "'this.name = name' o'rniga 'name = name' deb yozish — parametr o'zini o'ziga tenglashtiradi, klass maydoni esa o'zgarmasdan (null yoki 0) qoladi.",
    "pitfallsEn": "Writing 'name = name' instead of 'this.name = name' reassigns the parameter to itself, leaving the instance field uninitialized (null or 0.0).",
    "analogy": "Inson o'zi haqida gapirganda 'men' (I, me) so'zini ishlatishiga o'xshaydi: 'Mening ismim Anvar'.",
    "analogyEn": "Using first-person pronouns: saying 'my name is Alex' to explicitly disambiguate yourself from another Alex in the room."
  },
  {
    "cmd": "static",
    "name": "'static' Modifikatori (Klass Darajasidagi Xususiyat)",
    "nameEn": "'static' Modifier (Class-Level Shared State & Behavior)",
    "cat": "core",
    "catName": "☕ Java Core",
    "catNameEn": "☕ Java Core",
    "desc": "Maydon yoki metodni aniq bir obyektga emas, balki klassning o'ziga biriktiradi. Barcha obyektlar bu maydonning yagona nusxasini (shared memory) o'zaro baham ko'radi.",
    "descEn": "Binds a member variable or method to the class itself rather than instances. All instances share a single copy of static fields in the JVM Metaspace/Class area.",
    "syntax": "public static <type> <variable>;\npublic static void <method>() { ... }",
    "syntaxRules": "Static metod ichidan 'this' yoki oddiy (non-static) maydonlarga to'g'ridan-to'g'ri murojaat qilib bo'lmaydi.",
    "syntaxRulesEn": "Static methods cannot access non-static instance fields or methods directly without instantiating an object first.",
    "example": "class Order {\n    private static int totalOrdersCount = 0;\n    public Order() { totalOrdersCount++; }\n    public static int getTotalOrders() { return totalOrdersCount; }\n}",
    "pitfalls": "Har bir obyektga alohida bo'lishi kerak bo'lgan holatni (masalan mijoz balansi) 'static' qilib qo'yish — butun tizimda barcha mijozlar bitta balansga ega bo'lib qolish xavfini tug'diradi.",
    "pitfallsEn": "Marking instance-specific state (like bank account balance) as static causes all customers to share one global corrupted balance.",
    "analogy": "Universitet binosidagi umumiy soat — har bir talabaning qo'l soati (non-static) alohida, lekin devordagi soat (static) hamma uchun bitta.",
    "analogyEn": "A clock mounted in the university hallway: every student has their own wrist watch (instance field), but the hallway clock is shared by everyone (static)."
  },
  {
    "cmd": "final",
    "name": "'final' Modifikatori (O'zgarmaslik / Immutability)",
    "nameEn": "'final' Modifier (Constants, Sealed Methods & Classes)",
    "cat": "core",
    "catName": "☕ Java Core",
    "catNameEn": "☕ Java Core",
    "desc": "Uch xil ma'noga ega: 1) O'zgaruvchida — uning qiymatini qayta o'zgartirib bo'lmaydi (konstanta); 2) Metodda — uni voris klassda qayta yozib (@Override) bo'lmaydi; 3) Klassda — bu klassdan voris olib bo'lmaydi.",
    "descEn": "Serves 3 purposes: 1) Variables: value becomes constant once assigned; 2) Methods: prevents subclasses from overriding; 3) Classes: prevents class inheritance.",
    "syntax": "public static final double TAX_RATE = 0.12;\npublic final void lockAudit() { ... }\npublic final class ImmutableToken { ... }",
    "syntaxRules": "Final o'zgaruvchiga qiymat faqat e'lon qilinganda yoki konstruktor ichida 1 marta berilishi shart.",
    "syntaxRulesEn": "A blank final field must be definitively assigned exactly once before constructor completion, otherwise the code fails compilation.",
    "example": "public class Config {\n    public static final String CURRENCY = \"UZS\";\n    private final long orderId;\n    public Config(long id) { this.orderId = id; }\n}",
    "pitfalls": "Reference turdagi obyekt 'final' bo'lsa, uning o'zini boshqa manzilga yo'naltirib bo'lmaydi, lekin uning ichki maydonlarini o'zgartirish mumkin (agar ular ham final bo'lmasa).",
    "pitfallsEn": "Declaring an object reference 'final' makes the pointer immutable, not the object's internal fields (unless those fields are also final).",
    "analogy": "Davlat qonunidagi o'zgarmas modda yoki muhrlangan qonuniy shartnoma.",
    "analogyEn": "A sealed notarized contract or constitutional amendment that cannot be altered or rewritten."
  },
  {
    "cmd": "Heap_Stack",
    "name": "JVM Xotira Modeli: Heap vs Stack",
    "nameEn": "JVM Memory Model: Heap vs Stack",
    "cat": "core",
    "catName": "☕ Java Core",
    "catNameEn": "☕ Java Core",
    "desc": "Java dasturi ishlayotganda xotira ikki asosiy bo'limga bo'linadi: 1) Stack xotira — metod chaqiriqlari va primitiv mahalliy o'zgaruvchilarni (int, double) tezkor saqlaydi (LIFO); 2) Heap xotira — 'new' orqali yaratilgan barcha haqiqiy obyektlar saqlanadigan global maydon.",
    "descEn": "JVM separates execution memory into: 1) Stack memory: fast LIFO execution frames storing primitive locals and object reference addresses; 2) Heap memory: dynamic memory space housing actual object instances and class data.",
    "syntax": "int localId = 101; // Stack frame\nOrder order = new Order(); // reference pointer in Stack -> instance payload in Heap",
    "syntaxRules": "Metod yakunlanganda uning Stack freymi darhol tozalanadi. Heap'dagi obyektlar esa Garbage Collector (GC) tomonidan keraksiz bo'lganda tozalanadi.",
    "syntaxRulesEn": "Stack frames are deallocated instantaneously upon method exit. Heap objects are reclaimed asynchronously by Garbage Collection when references are lost.",
    "example": "void process() {\n    int a = 10; // Stack\n    Order o = new Order(); // o is on Stack, new Order() is on Heap\n}",
    "pitfalls": "Heap xotirasi to'lib ketsa OutOfMemoryError, cheksiz rekursiyada Stack to'lsa StackOverflowError yuzaga keladi.",
    "pitfallsEn": "Exhausting Heap triggers java.lang.OutOfMemoryError; infinite method recursion exhausts the Stack triggering java.lang.StackOverflowError.",
    "analogy": "Stack — sizning ish stolingizdagi kundalik qayd daftarchangiz (tez yozib o'chirasiz); Heap — korxonaning katta markaziy omborxonasi.",
    "analogyEn": "Stack is a desk notepad with quick temporary calculations; Heap is the massive central warehouse where goods are physically stored."
  },
  {
    "cmd": "access_modifiers",
    "name": "Kirish Modifikatorlari (public, private, protected, default)",
    "nameEn": "Access Modifiers (public, private, protected, package-private)",
    "cat": "core",
    "catName": "☕ Java Core",
    "catNameEn": "☕ Java Core",
    "desc": "Java elementlari (klass, metod, maydon) ko'rinish doirasini boshqaruvchi 4 ta daraja: private (faqat shu klassda), default (faqat shu packageda), protected (shu package va vorislarda), public (hamma joyda).",
    "descEn": "Java controls accessibility with 4 levels: private (same class only), default/package-private (same package), protected (same package + subclasses), and public (everywhere).",
    "syntax": "private double balance;\nprotected void calculateTax();\npublic void processOrder();",
    "syntaxRules": "Toza arxitektura va inkapsulyatsiya qoidasiga ko'ra, maydonlar deyarli doim 'private' bo'lishi lozim.",
    "syntaxRulesEn": "Encapsulation best practices require all state fields to be 'private', accessed externally only via controlled getters/setters.",
    "example": "public class BankAccount {\n    private double balance;\n    public double getBalance() { return balance; }\n}",
    "pitfalls": "Maydonlarni 'public' qilib qo'yish inkapsulyatsiyani yo'qqa chiqaradi va tashqaridan nazoratsiz o'zgarishga yo'l ochadi.",
    "pitfallsEn": "Declaring fields as 'public' breaks encapsulation, allowing any external caller to bypass validation rules and corrupt state.",
    "analogy": "Shaxsiy xona eshigi: private (faqat o'zingiz), protected (oila a'zolari), public (ko'chadagi istalgan odam).",
    "analogyEn": "Physical room security: private is your bedroom, protected is family members, and public is the building reception lobby."
  },
  {
    "cmd": "constructors",
    "name": "Konstruktorlar & Chaining (this, super)",
    "nameEn": "Constructors & Chaining (this, super)",
    "cat": "core",
    "catName": "☕ Java Core",
    "catNameEn": "☕ Java Core",
    "desc": "Obyekt Heap xotirada 'new' yordamida yaratilayotganda uning boshlang'ich holatini (state) xavfsiz to'ldirish uchun chaqiriladigan maxsus metod. Klass bilan bir xil nomlanadi va qaytish turi (return type) bo'lmaydi.",
    "descEn": "A special block of code invoked when an object is instantiated via 'new'. Shares the exact class name and does not specify a return type.",
    "syntax": "public Order(String id) {\n    this(id, 0.0); // constructor chaining\n}\npublic Order(String id, double total) {\n    this.id = id;\n    this.total = total;\n}",
    "syntaxRules": "Agar o'zingiz birorta parametrli konstruktor yozsangiz, Java avtomatik default (bo'sh) konstruktorni taqdim etishni to'xtatadi.",
    "syntaxRulesEn": "If you define any custom constructor with parameters, the compiler no longer provides the default parameterless constructor automatically.",
    "example": "public class Item {\n    private String sku;\n    public Item(String sku) { this.sku = sku; }\n}",
    "pitfalls": "Konstruktorga qaytish turi (masalan 'void Item(...)') yozib qo'yish — uni konstruktor emas, oddiy metodga aylantirib qo'yadi va obyekt yaratishda xato beradi.",
    "pitfallsEn": "Specifying a return type (e.g. 'public void Item()') turns it into an ordinary method rather than a constructor.",
    "analogy": "Yangi tug'ilgan chaqaloqqa darhol ism qo'yish va tug'ilganlik to'g'risida guvohnoma berish marosimi.",
    "analogyEn": "Registration checklist completed the instant a new company is incorporated or a vehicle rolls off the factory."
  },
  {
    "cmd": "method_overloading",
    "name": "Metodlarni Haddan Tashqari Yuklash (Method Overloading)",
    "nameEn": "Method Overloading (Compile-Time Polymorphism)",
    "cat": "core",
    "catName": "☕ Java Core",
    "catNameEn": "☕ Java Core",
    "desc": "Bitta klass ichida bir xil nomli, lekin parametrlari soni, turlari yoki tartibi har xil bo'lgan bir nechta metodlarni yaratish imkoniyati (Kompilyatsiya vaqtidagi polimorfizm).",
    "descEn": "Defining multiple methods within the same class with identical names but differing parameter lists (count, types, or order). Known as compile-time polymorphism.",
    "syntax": "public int add(int a, int b) { return a + b; }\npublic double add(double a, double b) { return a + b; }\npublic int add(int a, int b, int c) { return a + b + c; }",
    "syntaxRules": "Metodlarning faqat qaytarish turi (return type) farq qilishi yuklash (overloading) hisoblanmaydi va kompilyatsiya xatosini keltirib chiqaradi.",
    "syntaxRulesEn": "Differing only in return type does not constitute valid overloading; the compiler will reject the declaration as ambiguous.",
    "example": "class Calculator {\n    public double multiply(double a, double b) { return a * b; }\n    public double multiply(double a, double b, double c) { return a * b * c; }\n}",
    "pitfalls": "Avtomatik tur konvertatsiyasi (autoboxing va widening) tufayli qaysi metod chaqirilayotganini adashtirib noaniqlik (ambiguity) keltirib chiqarish.",
    "pitfallsEn": "Ambiguity errors caused when overloaded method signatures accept overlapping numeric types or autoboxed wrappers.",
    "analogy": "Oshxonadagi qahva mashinasining 'Espresso' tugmasi: 1 stakanlik, 2 stakanlik yoki sut qo'shilgan variantlari bir xil knopka orqali boshqariladi.",
    "analogyEn": "A single coffee dispenser offering one-shot, double-shot, or iced variations under the same coffee button depending on your selections."
  },
  {
    "cmd": "Encapsulation",
    "name": "Inkapsulyatsiya (Ma'lumotlarni Yashirish & Himoya)",
    "nameEn": "Encapsulation (Data Hiding & State Integrity)",
    "cat": "oop",
    "catName": "🏛 OOP Ustunlari",
    "catNameEn": "🏛 OOP Pillars",
    "desc": "Obyektning ichki holatini (maydonlarini) to'g'ridan-to'g'ri tashqaridan o'zgartirishdan himoyalash va unga faqat maxsus metodlar (Getter va Setter) orqali boshqariladigan kirishni ta'minlash.",
    "descEn": "Bundling data (fields) and methods operating on that data into a single unit while restricting direct outside access to internal object representation.",
    "syntax": "public class Account {\n    private double balance; // yashirin\n    public double getBalance() { return balance; }\n    public void setBalance(double b) {\n        if (b >= 0) this.balance = b;\n    }\n}",
    "syntaxRules": "Barcha holat maydonlari 'private' bo'lishi, o'zgaruvchilar esa validatsiya qoidalari orqali tekshirib o'zgartirilishi shart.",
    "syntaxRulesEn": "All instance variables must be marked private, with controlled access granted through validated getters and setters.",
    "example": "class Student {\n    private int score;\n    public void setScore(int s) {\n        if (s >= 0 && s <= 100) this.score = s;\n        else throw new IllegalArgumentException(\"Ball 0-100 oralig'ida bo'lsin\");\n    }\n}",
    "pitfalls": "Maydonlarni 'public' deb e'lon qilish yoki setterning ichida hech qanday tekshiruvsiz to'g'ridan-to'g'ri qiymat berish — inkapsulyatsiyani yo'qqa chiqaradi.",
    "pitfallsEn": "Declaring fields public or providing mindless setters without boundary validation defeats the purpose of encapsulation.",
    "analogy": "Bankomat (ATM) — siz bank omboridagi naqd pullarga to'g'ridan-to'g'ri qo'l tiqa olmaysiz, faqat ekran va tugmalar (metodlar) orqali xavfsiz pul olasiz.",
    "analogyEn": "An Automated Teller Machine (ATM): you cannot directly touch physical vault cash; you interact solely through verified interface buttons."
  },
  {
    "cmd": "Inheritance",
    "name": "Vorislik (Klasslarni Kengaytirish / extends)",
    "nameEn": "Inheritance (Code Reuse & Specialization / extends)",
    "cat": "oop",
    "catName": "🏛 OOP Ustunlari",
    "catNameEn": "🏛 OOP Pillars",
    "desc": "Mavjud klassning (ota/super class) maydon va metodlarini yangi klassga (bola/sub class) o'tkazish mexanizmi. Kodni qayta yozmasdan kengaytirish imkonini beradi (IS-A munosabati).",
    "descEn": "A mechanism wherein a new class inherits state and behavior from an existing superclass using the 'extends' keyword, modeling an 'IS-A' relationship.",
    "syntax": "public class SubClass extends SuperClass { ... }",
    "syntaxRules": "Java bitta klass faqat bitta ota klassdan voris olishiga ruxsat beradi (Single Inheritance). Ko'p karrali vorislik interfeyslar orqali amalga oshiriladi.",
    "syntaxRulesEn": "Java enforces single class inheritance: a class may extend at most one direct superclass. Multiple inheritance of type is achieved via interfaces.",
    "example": "class Vehicle {\n    protected String brand;\n    public void honk() { System.out.println(\"Beep!\"); }\n}\nclass Car extends Vehicle {\n    private int seats;\n}",
    "pitfalls": "Vorislikdan shunchaki kodni nusxalash maqsadida foydalanish ('HAS-A' munosabatini 'IS-A' deb adashtirish). Bu qattiq bog'liqlik (Tight Coupling) keltirib chiqaradi.",
    "pitfallsEn": "Misusing inheritance for simple code reuse when composition (HAS-A) is appropriate, creating rigid tight coupling.",
    "analogy": "Genetik vorislik — bola ota-onasidan ko'z rangi va bo'yini meros qilib oladi, lekin uning o'ziga xos kasbi va qobiliyatlari ham bo'ladi.",
    "analogyEn": "Biological inheritance: a child inherits physical traits from parents but develops their own distinct skills and personality."
  },
  {
    "cmd": "super",
    "name": "'super' Kalit So'zi (Ota Klassga Murojaat)",
    "nameEn": "'super' Keyword (Direct Superclass Invocation)",
    "cat": "oop",
    "catName": "🏛 OOP Ustunlari",
    "catNameEn": "🏛 OOP Pillars",
    "desc": "Voris klass ichidan uning to'g'ridan-to'g'ri ota klassining (parent/superclass) konstruktori, metodlari yoki yashirilgan maydonlariga murojaat qilish uchun ishlatiladi.",
    "descEn": "References the immediate superclass instance members and constructors from within a derived subclass, enabling superclass constructor chaining.",
    "syntax": "super(); // ota konstruktor\nsuper(param1, param2);\nsuper.methodName();",
    "syntaxRules": "Voris klass konstruktorida 'super(...)' chaqiruvi birinchi qatorda bo'lishi shart!",
    "syntaxRulesEn": "A call to 'super(...)' must strictly be the very first statement inside a subclass constructor body.",
    "example": "public class Employee extends Person {\n    private String role;\n    public Employee(String name, String role) {\n        super(name); // ota klass konstruktori\n        this.role = role;\n    }\n}",
    "pitfalls": "'super()' chaqiruvidan oldin biron-bir kod yozish — kompilyator xatosiga olib keladi.",
    "pitfallsEn": "Attempting to place statements before 'super(...)' in a constructor will produce a compile-time syntax error.",
    "analogy": "Katta tashkilotda muammoni hal qilishda bosh ofis yoki yuqori rahbariyatga to'g'ridan-to'g'ri sim qoqish.",
    "analogyEn": "A branch manager escalating an operation to the corporate headquarters executive office."
  },
  {
    "cmd": "Polymorphism",
    "name": "Polimorfizm (Ko'p Shakllilik / Dynamic Dispatch)",
    "nameEn": "Polymorphism (Many Forms & Dynamic Method Dispatch)",
    "cat": "oop",
    "catName": "🏛 OOP Ustunlari",
    "catNameEn": "🏛 OOP Pillars",
    "desc": "Bitta interfeys yoki umumiy ota klass orqali har xil obyektlarni bir xil ko'rinishda boshqarish qobiliyati. Dastur ishlayotgan vaqtda (runtime) qaysi aniq obyekt turganiga qarab tegishli metod chaqiriladi.",
    "descEn": "The ability of different objects to respond to the same method invocation in their own unique way, resolved dynamically at runtime (dynamic dispatch).",
    "syntax": "SuperType obj = new ConcreteSubType();\nobj.execute();",
    "syntaxRules": "O'zgaruvchi turi interfeys yoki umumiy ota klass bo'lishi kerak. Bu tizimni yangi turlar qo'shilganda kodni o'zgartirmasdan kengaytirishga imkon beradi (Open/Closed Principle).",
    "syntaxRulesEn": "Declare reference types as abstract classes or interfaces, allowing new concrete subtypes to be introduced without modifying existing client logic.",
    "example": "abstract class Payment {\n    abstract void pay(double amt);\n}\nclass Payme extends Payment {\n    void pay(double amt) { System.out.println(\"Payme orqali: \" + amt); }\n}\nclass Click extends Payment {\n    void pay(double amt) { System.out.println(\"Click orqali: \" + amt); }\n}",
    "pitfalls": "Polimorfizm o'rniga 'if (obj instanceof Payme) ... else if (obj instanceof Click)' deb yozish — polimorfizm falsafasiga zid va kodni buzilishga moyil qiladi.",
    "pitfallsEn": "Violating polymorphism by chaining manual 'instanceof' and cast checks instead of delegating to dynamic virtual method calls.",
    "analogy": "Musiqachi pultidagi 'Play' tugmasi — u magnitofon, CD pleer yoki Spotify bo'lishidan qat'i nazar 'Play' bosilganda musiqa yangraydi.",
    "analogyEn": "A universal 'Play' button on remote controls: whether connected to a vinyl turntable, Blu-ray, or Spotify, the media player plays."
  },
  {
    "cmd": "Override",
    "name": "@Override Annotatsiyasi (Metodni Qayta Yozish)",
    "nameEn": "@Override Annotation (Runtime Method Replacement)",
    "cat": "oop",
    "catName": "🏛 OOP Ustunlari",
    "catNameEn": "🏛 OOP Pillars",
    "desc": "Voris klass ota klassdan meros olgan metodning tanasini o'z ehtiyojiga moslab qaytadan yozishi. '@Override' annotatsiyasi kompilyatorga metod imzosi to'g'ri ekanligini tekshirishni buyuradi.",
    "descEn": "Instructs the compiler that the subclass is overriding a method declared in a superclass or interface, validating that signatures match exactly.",
    "syntax": "@Override\npublic void draw() {\n    // yangi xulq-atvor\n}",
    "syntaxRules": "Qayta yozilayotgan metodning nomi, argumentlari va qaytarish turi (yoki uning kovarianti) ota klassdagi bilan bir xil bo'lishi shart. Ko'rinish doirasi ota klassdagidan torroq bo'lishi mumkin emas.",
    "syntaxRulesEn": "The method name, parameter list, and return type (or covariant return) must match the superclass method. Access visibility cannot be reduced.",
    "example": "class Shape {\n    public void draw() { System.out.println(\"Shakl chizildi\"); }\n}\nclass Circle extends Shape {\n    @Override\n    public void draw() { System.out.println(\"Aylana chizildi ⭕\"); }\n}",
    "pitfalls": "Parametr turini biroz o'zgartirib qo'yib, '@Override' qo'ymasa — kompilyator buni qayta yozish (override) emas, yangi metod yuklash (overload) deb hisoblaydi va polimorfizm ishlamay qoladi.",
    "pitfallsEn": "Accidentally overloading a method by altering a parameter type without '@Override', causing dynamic polymorphism to fail silently.",
    "analogy": "Katta do'konning umumiy ish tartibi qoidasini shahar filiali o'z mahalliy sharoitiga moslashtirishi.",
    "analogyEn": "A regional franchise adapting a standard corporate greeting script into the local language."
  },
  {
    "cmd": "abstract",
    "name": "'abstract' Kalit So'zi (Abstrakt Klass va Metodlar)",
    "nameEn": "'abstract' Keyword (Incomplete Abstraction & Contracts)",
    "cat": "oop",
    "catName": "🏛 OOP Ustunlari",
    "catNameEn": "🏛 OOP Pillars",
    "desc": "To'liq yakunlanmagan klass yoki metod. 1) Abstrakt metod — tanasi (body {}) bo'lmagan, faqat imzosi e'lon qilingan metod; 2) Abstrakt klass — bevosita 'new' orqali obyekt yaratib bo'lmaydigan, faqat voris olish uchun mo'ljallangan qolip.",
    "descEn": "Declares an incomplete class or method. Abstract methods have no implementation; abstract classes cannot be directly instantiated via 'new'.",
    "syntax": "public abstract class GraphicComponent {\n    protected int x, y;\n    public abstract void render();\n}",
    "syntaxRules": "Agar klassda bitta bo'lsa ham abstrakt metod bo'lsa, klassning o'zi ham 'abstract' deb e'lon qilinishi shart. Voris klass barcha abstrakt metodlarni yo to'liq yozishi, yoki o'zi ham abstrakt bo'lishi kerak.",
    "syntaxRulesEn": "Any class containing an abstract method must be marked abstract. Concrete subclasses must implement every inherited abstract method.",
    "example": "abstract class Beverage {\n    abstract void brew();\n}\nclass Coffee extends Beverage {\n    void brew() { System.out.println(\"Espresso damlanmoqda...\"); }\n}",
    "pitfalls": "Abstrakt klassdan to'g'ridan-to'g'ri 'new Beverage()' deb obyekt yaratishga urinish — kompilyatsiya xatosidir.",
    "pitfallsEn": "Attempting direct instantiation like 'new Beverage()' produces a compile-time error.",
    "analogy": "Davlat qonun loyihasi shabloni — unda 'har bir shahar o'z transport tizimini yaratishi shart' deyiladi, lekin har bir shahar o'z metro yoki avtobus parkini o'zi quradi.",
    "analogyEn": "A government standard requiring all municipalities to provide public transit, leaving specific vehicle procurement to each city."
  },
  {
    "cmd": "interface",
    "name": "'interface' Kalit So'zi (Sof Shartnoma / Kontrakt)",
    "nameEn": "'interface' Keyword (Pure Contract & Decoupling)",
    "cat": "oop",
    "catName": "🏛 OOP Ustunlari",
    "catNameEn": "🏛 OOP Pillars",
    "desc": "Klasslar nima qilishi kerakligini belgilovchi, lekin uni qanday qilishini aytmaydigan to'liq abstrakt shartnoma. Klass interfeysni 'implements' orqali o'z zimmasiga oladi. Java'da bitta klass cheksiz ko'p interfeyslarni bajarishi mumkin.",
    "descEn": "A contract in Java declaring method signatures without providing state or implementation (except default/static methods). Classes adopt interfaces via 'implements'.",
    "syntax": "public interface PaymentProcessor {\n    boolean processPayment(double amount);\n}\npublic class StripeProcessor implements PaymentProcessor { ... }",
    "syntaxRules": "Interfeysdagi barcha maydonlar avtomatik 'public static final' (konstanta), metodlar esa 'public abstract' hisoblanadi (Java 8+ dagi default/static metodlardan tashqari).",
    "syntaxRulesEn": "All interface fields are implicitly public static final constants. Methods are public abstract by default unless explicitly marked default or static.",
    "example": "interface Printable {\n    void print();\n}\nclass Invoice implements Printable {\n    public void print() { System.out.println(\"Chek chiqarildi\"); }\n}",
    "pitfalls": "Interfeys metodini klassda realizatsiya qilayotganda 'public' so'zini tushirib qoldirish — interfeysdagi public darajani pasaytirish hisoblanib, xato beradi.",
    "pitfallsEn": "Forgetting the 'public' modifier when implementing an interface method, accidentally downgrading access visibility.",
    "analogy": "Elektr rozetkasi (rozetka standarti 220V) — televizor, dazmol yoki noutbuk rozetka ichida nima borligini bilmaydi, faqat vilkani ulab quvvat oladi.",
    "analogyEn": "A universal electrical wall socket (220V/110V standard): plugs from laptops, lamps, or blenders connect seamlessly without knowing interior wiring."
  },
  {
    "cmd": "Singleton",
    "name": "Singleton Pattern (Yagona Nusxa / Creational)",
    "nameEn": "Singleton Pattern (Single Shared Instance / Creational)",
    "cat": "patterns",
    "catName": "🧩 GoF Patternlar",
    "catNameEn": "🧩 GoF Patterns",
    "desc": "Butun dastur davomida klassning faqat va faqat bitta nusxasi yaratilishini kafolatlovchi va unga global kirish nuqtasini taqdim etuvchi arxitektura andozasi.",
    "descEn": "Ensures a class has only one instance while providing a global access point to it, protecting shared resources like database connections.",
    "syntax": "public class DatabaseConnection {\n    private static DatabaseConnection instance;\n    private DatabaseConnection() { /* private! */ }\n    public static synchronized DatabaseConnection getInstance() {\n        if (instance == null) instance = new DatabaseConnection();\n        return instance;\n    }\n}",
    "syntaxRules": "1) Konstruktor qat'iy 'private' bo'lishi shart; 2) O'z turidagi static nusxani saqlovchi maydon; 3) Nusxani qaytaruvchi static 'getInstance()' metodi.",
    "syntaxRulesEn": "Requires: 1) Private constructor preventing external instantiation; 2) Static instance variable; 3) Public static getInstance() factory accessor.",
    "example": "public class Logger {\n    private static Logger instance;\n    private Logger() {}\n    public static Logger getInstance() {\n        if (instance == null) instance = new Logger();\n        return instance;\n    }\n}",
    "pitfalls": "Konstruktorni 'public' qoldirish yoki ko'p oqimli (multithreading) muhitda 'synchronized' qo'ymasdan ikki marta nusxa yaratib yuborish.",
    "pitfallsEn": "Leaving the constructor public or failing to synchronize in multithreaded environments, resulting in multiple concurrent instances.",
    "analogy": "Mamlakat Prezidenti yoki Markaziy Bank — butun davlatda bir vaqtning o'zida ikkita har xil Markaziy Bank bo'lishi mumkin emas.",
    "analogyEn": "A country's Central Bank or Supreme Court: having two competing conflicting central banks in one sovereign state is impossible."
  },
  {
    "cmd": "Factory_Method",
    "name": "Factory Method Pattern (Fabrika Metodi / Creational)",
    "nameEn": "Factory Method Pattern (Object Creation Delegation / Creational)",
    "cat": "patterns",
    "catName": "🧩 GoF Patternlar",
    "catNameEn": "🧩 GoF Patterns",
    "desc": "Obyekt yaratish mantiqini mijoz (client) kodidan ajratib olib, maxsus fabrika metodiga yuklaydi. Yangi mahsulot turlari qo'shilganda asosiy kod o'zgarmaydi.",
    "descEn": "Defines an interface for creating objects, delegating the actual instantiation logic to subclasses or dedicated factory methods.",
    "syntax": "public class NotificationFactory {\n    public static Notification createNotification(String type) {\n        if (\"EMAIL\".equalsIgnoreCase(type)) return new EmailNotification();\n        if (\"SMS\".equalsIgnoreCase(type)) return new SMSNotification();\n        throw new IllegalArgumentException(\"Noma'lum tur: \" + type);\n    }\n}",
    "syntaxRules": "Mijoz 'new EmailNotification()' deb to'g'ridan-to'g'ri chaqirmaydi, balki fabrikaning 'create(...)' metodiga umumiy interfeys orqali murojaat qiladi.",
    "syntaxRulesEn": "Client code depends on an abstract Product interface rather than concrete product classes instantiated with direct 'new'.",
    "example": "Notification n = NotificationFactory.createNotification(\"SMS\");\nn.send(\"Kodingiz: 7788\");",
    "pitfalls": "Har bir yangi klass uchun asosiy kodni o'zgartirish — fabrika metodini 'switch/if' bilan cheksiz shishirib yuborish.",
    "pitfallsEn": "Allowing factory methods to balloon with massive unmanageable switch statements without modular registration.",
    "analogy": "Restorandagi ofitsiant — siz oshxonaga kirib o'zingiz ovqat pishirmaysiz, ofitsiantga buyurtma berasiz, oshxona esa sizga tayyor taomni chiqarib beradi.",
    "analogyEn": "Ordering from a restaurant waiter: you don't enter the kitchen to operate the stove; you state your order and receive the prepared meal."
  },
  {
    "cmd": "Builder",
    "name": "Builder Pattern (Quruvchi / Creational)",
    "nameEn": "Builder Pattern (Step-by-Step Construction / Creational)",
    "cat": "patterns",
    "catName": "🧩 GoF Patternlar",
    "catNameEn": "🧩 GoF Patterns",
    "desc": "Juda ko'p parametrli yoki murakkab obyektlarni bosqichma-bosqich (step-by-step), tushunarli va xavfsiz qurish imkonini beruvchi andoza (Telescoping Constructor muammosini hal qiladi).",
    "descEn": "Constructs complex objects step-by-step using a fluent API, avoiding constructor parameter explosion (telescoping constructor anti-pattern).",
    "syntax": "Order order = new Order.Builder(\"ORD-101\")\n    .setCustomer(\"Anvar\")\n    .addItem(item1)\n    .setDiscount(0.1)\n    .build();",
    "syntaxRules": "Har bir o'rnatuvchi metod (setter) 'this' (Builder nusxasini) qaytarishi, yakuniy 'build()' metodi esa to'liq tekshirilgan haqiqiy obyektni qaytarishi shart.",
    "syntaxRulesEn": "Each setter method returns 'this' to facilitate method chaining, with a terminal '.build()' method validating and returning the final instance.",
    "example": "public class Burger {\n    private final boolean cheese;\n    private final boolean bacon;\n    public static class Builder {\n        private boolean cheese;\n        private boolean bacon;\n        public Builder addCheese() { this.cheese = true; return this; }\n        public Burger build() { return new Burger(this); }\n    }\n}",
    "pitfalls": "Oddiy 1-2 ta maydoni bor sodda klasslar uchun ham Builder yaratib kodni ortiqcha murakkablashtirish (Overengineering).",
    "pitfallsEn": "Overengineering simple classes having only 1 or 2 fields with an unnecessary Builder.",
    "analogy": "Subway yoki lavash kafesida o'z sendvigingizni yig'ish — nima solish va nima solmaslikni birma-bir o'zingiz tanlaysiz.",
    "analogyEn": "Customizing your sandwich at Subway: you select specific bread, cheeses, and toppings sequentially before the sandwich is toasted."
  },
  {
    "cmd": "Decorator",
    "name": "Decorator Pattern (Bezatuvchi / Structural)",
    "nameEn": "Decorator Pattern (Dynamic Behavior Extension / Structural)",
    "cat": "patterns",
    "catName": "🧩 GoF Patternlar",
    "catNameEn": "🧩 GoF Patterns",
    "desc": "Mavjud obyektning funksionalligini vorislik (inheritance) ishlatmasdan, dinamik ravishda yangi xususiyatlar bilan o'rab (wrap) kengaytirish imkonini beruvchi andoza.",
    "descEn": "Attaches additional responsibilities to an object dynamically without subclassing, creating flexible wrapper objects around components.",
    "syntax": "Beverage coffee = new SimpleCoffee();\ncoffee = new MilkDecorator(coffee);\ncoffee = new SugarDecorator(coffee);\nSystem.out.println(coffee.getCost());",
    "syntaxRules": "Bezatuvchi (Decorator) ham asl komponent bilan aynan bir xil interfeysni bajarishi (implements) va ichida komponent nusxasini saqlashi shart.",
    "syntaxRulesEn": "The Decorator must implement the exact same interface as the component it decorates while holding a wrapped instance of that interface.",
    "example": "interface Coffee { double cost(); }\nclass SimpleCoffee implements Coffee { public double cost() { return 2.0; } }\nabstract class CoffeeDecorator implements Coffee {\n    protected Coffee coffee;\n    public CoffeeDecorator(Coffee c) { this.coffee = c; }\n}",
    "pitfalls": "Decoratorlar soni juda ko'payib ketganda ularning ketma-ketligini boshqarish qiyinlashishi va xatoliklarni debug qilish murakkablashishi.",
    "pitfallsEn": "Creating convoluted multi-layered wrappers where wrapping order creates hard-to-trace logic bugs.",
    "analogy": "Qishda kiyim kiyish: futbolka ustidan ko'ylak, ko'ylak ustidan sviter, uning ustidan palto kiyish — har bir qatlam insonni o'zgartirmay, yangi issiqlik funksiyasini qo'shadi.",
    "analogyEn": "Layering winter clothes: t-shirt under a sweater under a heavy parka. Each layer dynamically adds warmth without reconstructing the person."
  },
  {
    "cmd": "Adapter",
    "name": "Adapter Pattern (Moslashtiruvchi / Structural)",
    "nameEn": "Adapter Pattern (Interface Compatibility Bridge / Structural)",
    "cat": "patterns",
    "catName": "🧩 GoF Patternlar",
    "catNameEn": "🧩 GoF Patterns",
    "desc": "Bir-biriga mos kelmaydigan interfeyslarga ega bo'lgan ikki tizimni ularning kodini o'zgartirmasdan birgalikda ishlashiga imkon beruvchi ko'prik andoza.",
    "descEn": "Converts the interface of a class into another interface clients expect, enabling classes with incompatible interfaces to collaborate.",
    "syntax": "public class PayPalAdapter implements PaymentGateway {\n    private LegacyPayPalService legacyService;\n    public void pay(double amt) {\n        legacyService.sendPaymentInCents((int)(amt * 100));\n    }\n}",
    "syntaxRules": "Adapter mijoz talab qilgan zamonaviy interfeysni bajaradi (implements) va eski (legacy) xizmat metodlariga ma'lumotlarni o'zgartirib uzatadi.",
    "syntaxRulesEn": "The Adapter implements the target interface expected by the client and delegates calls to the adapted legacy class.",
    "example": "interface ModernPrinter { void printDocument(String text); }\nclass OldPrinter { void renderRaw(byte[] b) { ... } }\nclass PrinterAdapter implements ModernPrinter { ... }",
    "pitfalls": "Adapter ichiga yangi, kutilmagan biznes mantiqlarini tiqib yuborish — adapter faqat interfeyslarni tarjima qilishi shart.",
    "pitfallsEn": "Polluting the adapter with unrelated business logic rather than pure interface translation and parameter transformation.",
    "analogy": "Yevropa standartidagi elektr vilkasini Amerika rozetkasiga ulash uchun ishlatiladigan universal perexodnik (adapter).",
    "analogyEn": "An international travel plug adapter: lets you plug a UK three-prong charger into a European two-pin wall socket."
  },
  {
    "cmd": "Strategy",
    "name": "Strategy Pattern (Strategiya / Behavioural)",
    "nameEn": "Strategy Pattern (Interchangeable Algorithms / Behavioural)",
    "cat": "patterns",
    "catName": "🧩 GoF Patternlar",
    "catNameEn": "🧩 GoF Patterns",
    "desc": "Bir xil vazifani bajaruvchi algoritmlar oilasini yaratib, ularning har birini alohida klassga ajratadi va dastur ishlayotgan vaqtda (runtime) ularni bir-biriga almashtirish imkonini beradi.",
    "descEn": "Defines a family of interchangeable algorithms, encapsulates each one, and allows runtime selection without modifying the calling context.",
    "syntax": "ShoppingCart cart = new ShoppingCart();\ncart.setPaymentStrategy(new CreditCardPayment());\ncart.checkout();\ncart.setPaymentStrategy(new CryptoPayment());\ncart.checkout();",
    "syntaxRules": "Barcha strategiyalar yagona umumiy interfeysni bajarishi kerak. Asosiy klass (Context) aniq algoritmni bilmaydi, faqat interfeys metodini chaqiradi.",
    "syntaxRulesEn": "All concrete strategy classes must implement a common Strategy interface, held via composition by the Context class.",
    "example": "interface DiscountStrategy { double apply(double total); }\nclass RegularDiscount implements DiscountStrategy { public double apply(double t) { return t; } }\nclass VIPDiscount implements DiscountStrategy { public double apply(double t) { return t * 0.8; } }",
    "pitfalls": "Barcha strategiyalarni bitta klass ichida 'if-else' zanjirlari orqali boshqarish — bu Strategy patterniga ziddir.",
    "pitfallsEn": "Reverting to sprawling hardcoded 'if-else' cascades within the context instead of delegating to injected Strategy instances.",
    "analogy": "Toshkentdan Samarqandga borish: Poyezdda (Afrosiyob), Mashinada yoki Samolyotda — maqsad bir, lekin tanlangan strategiya har xil.",
    "analogyEn": "Navigating to another city: driving via highway, riding an express train, or flying. You reach the destination via interchangeable transit strategies."
  },
  {
    "cmd": "Observer",
    "name": "Observer Pattern (Kuzatuvchi / Behavioural)",
    "nameEn": "Observer Pattern (Publish-Subscribe Notification / Behavioural)",
    "cat": "patterns",
    "catName": "🧩 GoF Patternlar",
    "catNameEn": "🧩 GoF Patterns",
    "desc": "Obyektlar o'rtasida 'birga-ko'p' (one-to-many) bog'liqlik o'rnatadi. Asosiy subyekt (Subject/Publisher) holati o'zgarganda, barcha unga obuna bo'lgan kuzatuvchilar (Observers/Subscribers) avtomatik xabardor qilinadi.",
    "descEn": "Defines a one-to-many subscription mechanism where multiple observer objects are automatically notified when the state of the subject changes.",
    "syntax": "public interface Observer { void update(String msg); }\npublic class OrderTracker {\n    private List<Observer> observers = new ArrayList<>();\n    public void subscribe(Observer o) { observers.add(o); }\n    public void notifyAll(String msg) { for (Observer o : observers) o.update(msg); }\n}",
    "syntaxRules": "Subject kuzatuvchilarning aniq klassini bilmaydi (bo'sh bog'lanish — loose coupling), faqat ularning umumiy 'update()' metodini chaqiradi.",
    "syntaxRulesEn": "The Subject depends strictly on the abstract Observer interface, ensuring loose coupling between the publisher and subscribers.",
    "example": "OrderTracker tracker = new OrderTracker();\ntracker.subscribe(new SMSNotifier());\ntracker.subscribe(new EmailNotifier());\ntracker.setStatus(\"YETKAZILDI\");",
    "pitfalls": "Kuzatuvchini obunadan chiqarishni (unsubscribe) unutish oqibatida xotira oqishi (Memory Leak / Lapsed Listener muammosi).",
    "pitfallsEn": "Forgetting to unsubscribe observers, preventing garbage collection and leading to memory leaks (lapsed listener problem).",
    "analogy": "Telegram kanaliga obuna bo'lish — admin kanalga yangi post yozganda, unga a'zo bo'lgan minglab obunachilarning telefoniga bir vaqtda bildirishnoma boradi.",
    "analogyEn": "Subscribing to a Telegram news channel: the publisher broadcasts a message once, and every subscriber receives the push notification."
  },
  {
    "cmd": "SOLID",
    "name": "SOLID Tamoyillari (Obyektga Yo'naltirilgan Arxitektura)",
    "nameEn": "SOLID Principles (Object-Oriented Clean Architecture)",
    "cat": "solid",
    "catName": "🧼 Clean Code & SOLID",
    "catNameEn": "🧼 Clean Code & SOLID",
    "desc": "Robert Martin (Uncle Bob) tomonidan ishlab chiqilgan, dastur kodini tushunarli, oson kengaytiriladigan va buzilmas qilishga xizmat qiluvchi 5 ta fundamental arxitektura qoidasi: S - SRP, O - OCP, L - LSP, I - ISP, D - DIP.",
    "descEn": "Five fundamental design principles introduced by Robert C. Martin: Single Responsibility (SRP), Open/Closed (OCP), Liskov Substitution (LSP), Interface Segregation (ISP), and Dependency Inversion (DIP).",
    "syntax": "// S: Yagona Mas'uliyat\n// O: Ochiq-Yopiq\n// L: Liskov O'rnini Bosish\n// I: Interfeyslarni Ajratish\n// D: Bog'liqlikni Teskarilash",
    "syntaxRules": "Westminster CW2 va Viva imtihonida loyihangiz aynan mana shu 5 ta tamoyil asosida tahlil qilinadi va baholanadi.",
    "syntaxRulesEn": "Essential for Westminster CW2 architecture design and oral Viva exam evaluation.",
    "example": "class OrderService { /* Faqat buyurtma mantiqi (SRP) */ }\ninterface PaymentGateway { /* Abstraksiyaga bog'lanish (DIP) */ }",
    "pitfalls": "SOLID tamoyillarini ko'r-ko'rona qo'llab, oddiy dasturni 50 ta interfeys va sun'iy klasslarga bo'lib tashlash.",
    "pitfallsEn": "Dogmatically applying principles where simple code would suffice, causing architectural over-complication.",
    "analogy": "Shveytsariya pichog'i o'rniga har bir ish uchun alohida, maxsus charxlangan professional asboblar to'plamidan foydalanish.",
    "analogyEn": "Using a dedicated set of specialized surgeon instruments rather than trying to do surgery with a bulky Swiss army knife."
  },
  {
    "cmd": "SRP",
    "name": "Single Responsibility Principle (Yagona Mas'uliyat)",
    "nameEn": "Single Responsibility Principle (SRP)",
    "cat": "solid",
    "catName": "🧼 Clean Code & SOLID",
    "catNameEn": "🧼 Clean Code & SOLID",
    "desc": "Klass faqat bitta va yagona vazifaga (mas'uliyatga) ega bo'lishi kerak. Klassni o'zgartirish uchun faqat 1 ta sabab bo'lishi lozim.",
    "descEn": "A class should have one, and only one, reason to change, meaning it should perform a single encapsulated job.",
    "syntax": "class OrderRepository { void save(Order o) { ... } }\nclass InvoiceGenerator { void print(Order o) { ... } }\nclass NotificationService { void sendEmail(Order o) { ... } }",
    "syntaxRules": "Bitta klass ichida ham ma'lumotlar bazasiga yozish, ham hisob-kitob qilish, ham foydalanuvchiga xabar yuborish qat'iyan man etiladi (God Class anti-pattern).",
    "syntaxRulesEn": "Never mix domain logic, database queries, and UI rendering into a single monster God class.",
    "example": "// TO'G'RI:\nclass TaxCalculator { double compute(double subtotal) { return subtotal * 0.12; } }",
    "pitfalls": "Klassga 'Manager' yoki 'Helper' deb nom berib, uning ichiga tizimdagi barcha mayda-chuyda funksiyalarni to'plash.",
    "pitfallsEn": "Creating vague 'Manager' or 'Helper' classes that become dumping grounds for unrelated procedures.",
    "analogy": "Restoranda oshpaz ovqat pishiradi, buxgalter hisob-kitob qiladi, farrosh esa tozalaydi — bir kishi hamma ishni qilsa, tartibsizlik kelib chiqadi.",
    "analogyEn": "Specialization in an operating room: the surgeon performs surgery, the anesthesiologist monitors vitals, and the nurse prepares supplies."
  },
  {
    "cmd": "OCP",
    "name": "Open/Closed Principle (Ochiqlik / Yopiqlik Tamoyili)",
    "nameEn": "Open/Closed Principle (OCP)",
    "cat": "solid",
    "catName": "🧼 Clean Code & SOLID",
    "catNameEn": "🧼 Clean Code & SOLID",
    "desc": "Dasturiy modullar kengaytirish uchun ochiq (open for extension), lekin mavjud kodni o'zgartirish uchun yopiq (closed for modification) bo'lishi kerak.",
    "descEn": "Software entities (classes, modules, functions) should be open for extension, but closed for modification.",
    "syntax": "public interface PaymentMethod { void pay(double amt); }\n// Yangi to'lov turi qo'shilganda eski klassga tegmaymiz, shunchaki yangi klass yaratamiz:\npublic class CryptoPayment implements PaymentMethod { ... }",
    "syntaxRules": "Yangi talab paydo bo'lganda mavjud ishlayotgan klasslarni tahrirlamasdan, yangi voris yoki interfeys realizatsiyasi orqali tizim kengaytirilishi shart.",
    "syntaxRulesEn": "Implement new features by writing new classes implementing shared interfaces, rather than rewriting existing tested source files.",
    "example": "class OrderProcessor {\n    public void process(PaymentMethod method, double amt) {\n        method.pay(amt); // yangi to'lov turlaridan qat'i nazar o'zgarmaydi!\n    }\n}",
    "pitfalls": "Har safar yangi tovar yoki to'lov turi chiqqanda asosiy kod ichidagi 'switch-case' bloklariga yangi qatorlar qo'shib borish.",
    "pitfallsEn": "Constantly amending giant switch statements in core classes every time a new business variation is introduced.",
    "analogy": "Smartfoningizga yangi ilova (masalan Instagram) o'rnatish uchun telefon zavodiga borib telefoningizning mikrosxemasini qayta kavlamaysiz.",
    "analogyEn": "Installing an app from the App Store: your phone's operating system extends capabilities without altering hardware motherboards."
  },
  {
    "cmd": "DIP",
    "name": "Dependency Inversion Principle (Bog'liqlikni Teskarilash)",
    "nameEn": "Dependency Inversion Principle (DIP)",
    "cat": "solid",
    "catName": "🧼 Clean Code & SOLID",
    "catNameEn": "🧼 Clean Code & SOLID",
    "desc": "Yuqori darajadagi modullar quyi darajadagi modullarga to'g'ridan-to'g'ri bog'lanmasligi kerak; ikkalasi ham abstraksiyalarga (interfeyslarga) bog'lanishi lozim.",
    "descEn": "High-level modules should not depend on low-level modules; both should depend upon abstractions. Abstractions should not depend upon details.",
    "syntax": "public class OrderService {\n    private final PaymentProcessor paymentProcessor;\n    // Injected through constructor!\n    public OrderService(PaymentProcessor p) {\n        this.paymentProcessor = p;\n    }\n}",
    "syntaxRules": "Klass ichida 'new MySQLDatabase()' deb aniq quyi klassga bog'lanmasdan, konstruktor orqali 'Database' interfeysini qabul qiling (Dependency Injection).",
    "syntaxRulesEn": "Depend on interfaces and inject them via constructor parameters rather than instantiating hardcoded concrete dependencies.",
    "example": "public class NotificationService {\n    private MessageSender sender;\n    public NotificationService(MessageSender s) { this.sender = s; }\n}",
    "pitfalls": "Service klass ichida 'private OracleDB db = new OracleDB()' deb to'g'ridan-to'g'ri bog'lash — bazani o'zgartirishni imkonsiz qiladi.",
    "pitfallsEn": "Directly instantiating concrete low-level services with 'new' inside business classes, making unit testing and swapping impossible.",
    "analogy": "Devordagi rozetka — siz chiroq simini to'g'ridan-to'g'ri elektr stansiyasining transformatoriga payvandlab qo'ymaysiz, balki standart vilka orqali rozetkaga ulaysiz.",
    "analogyEn": "Plugging appliances into wall sockets: lamps connect via the socket abstraction rather than hardwiring into city power transformers."
  },
  {
    "cmd": "CW2_OrderApp",
    "name": "CW2 Console Order Application Arxitekturasi (50% Baho)",
    "nameEn": "CW2 Console Order Application Architecture (50% Assessment)",
    "cat": "cw2",
    "catName": "🎓 CW2 Coursework",
    "catNameEn": "🎓 CW2 Coursework",
    "desc": "Westminster 5COSC018C (OOP) Assessment 2 talabi: Java konsol ilovasi. Mahsulotlar katalogi, savat (Order/Cart), chegirmalar tizimi, to'lov gatewaylari va buyurtma hisoboti toza OOP va GoF patternlar asosida qurilishi shart.",
    "descEn": "Westminster 5COSC018C Assessment 2 (50%): A production-grade Java console order app modeling products, shopping carts, discounts, and payment gateways with GoF patterns.",
    "syntax": "// Model (Product, Order, Customer)\n// Service (OrderService, DiscountStrategy)\n// UI (ConsoleMenu)\n// Patterns (Factory, Builder, Singleton, Strategy)",
    "syntaxRules": "1) GoF dizayn patternlaridan kamida 3 tasi (Creational, Structural, Behavioural) to'g'ri qo'llanilishi; 2) Barcha klasslar to'liq inkapsulyatsiyalangan bo'lishi; 3) UML klass diagrammasi kodga 100% mos kelishi shart.",
    "syntaxRulesEn": "Key requirements: 1) Demonstrate minimum 3 GoF patterns across categories; 2) Full encapsulation; 3) 100% adherence between UML diagram and Java implementation.",
    "example": "Order order = new OrderBuilder(\"ORD-001\")\n    .setCustomer(user)\n    .addProduct(laptop, 1)\n    .setDiscountStrategy(new StudentDiscount())\n    .build();",
    "pitfalls": "Butun dastur kodini faqat bitta 'Main.java' fayliga yozib tashlash yoki patternlarni shunchaki baho olish uchun mantiqsiz sun'iy joylashtirish.",
    "pitfallsEn": "Writing monolithic single-file applications or cramming design patterns unnaturally without architectural justification.",
    "analogy": "Katta e-tijorat tizimi (masalan Uzum Market) konsol terminalining mikrokosmosi.",
    "analogyEn": "A robust scalable enterprise backend architecture driving modern commerce platforms like Amazon or Uzum Market."
  }
];

  // Bilingual Helper
  function getActiveLang() {
    if (root.OOP_CURRENT_LANG) return root.OOP_CURRENT_LANG;
    if (root.OOP_I18N && typeof root.OOP_I18N.getLang === "function") return root.OOP_I18N.getLang();
    try {
      const saved = localStorage.getItem("OOP_LANG") || localStorage.getItem("DS_ACADEMY_LANG");
      if (saved === "en" || saved === "uz") return saved;
    } catch (e) {}
    return "uz";
  }

  // Inject or update Dictionary Modal DOM
  function createDictionaryModalDOM() {
    if (document.getElementById("oopDictionaryModalOverlay")) {
      updateModalStrings();
      return;
    }

    const overlay = document.createElement("div");
    overlay.id = "oopDictionaryModalOverlay";
    overlay.style.cssText = "position: fixed; inset: 0; background: rgba(5, 4, 15, 0.85); backdrop-filter: blur(8px); z-index: 9999; display: none; align-items: center; justify-content: center; padding: 16px; box-sizing: border-box;";

    overlay.innerHTML = `
      <div id="oopDictionaryCard" style="
        background: #0d0b1a; border: 1.5px solid #3b2c6e; border-radius: 16px;
        width: 100%; max-width: 900px; max-height: 88vh; display: flex; flex-direction: column;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8), 0 0 30px rgba(124, 58, 237, 0.25);
        overflow: hidden; animation: oopDictFadeIn 0.2s ease-out; font-family: 'Inter', sans-serif;
      ">
        <!-- Top Bar -->
        <div style="padding: 16px 24px; border-bottom: 1px solid #1f1938; display: flex; align-items: center; justify-content: space-between; background: #120e26;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="width: 38px; height: 38px; border-radius: 10px; background: linear-gradient(135deg, #7c3aed, #c084fc); display: flex; align-items: center; justify-content: center; font-size: 20px; box-shadow: 0 0 16px rgba(124, 58, 237, 0.5);">
              📖
            </div>
            <div>
              <div id="dictModalTitle" style="font-weight: 800; font-size: 16px; color: #f8fafc; letter-spacing: -0.2px;">
                OOP Lug'at &amp; Qidiruv (Java Ensiklopediya)
              </div>
              <div id="dictModalSub" style="font-size: 11.5px; color: #a5b4fc;">
                Professor Ada • Java Core, OOP Ustunlari, GoF Patternlar &amp; CW2
              </div>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            <div class="lang-switch-box" style="display: inline-flex; background: #1a1538; border: 1px solid #382c6c; border-radius: 20px; padding: 2px;">
              <button id="dictBtnLangUz" type="button" style="background:transparent; border:none; color:#cbd5e1; font-size:11px; font-weight:700; padding:2px 8px; border-radius:12px; cursor:pointer;">UZ</button>
              <button id="dictBtnLangEn" type="button" style="background:transparent; border:none; color:#cbd5e1; font-size:11px; font-weight:700; padding:2px 8px; border-radius:12px; cursor:pointer;">EN</button>
            </div>
            <span class="esc-hint" style="font-size: 11px; color: #64748b; background: #181430; padding: 4px 8px; border-radius: 6px; border: 1px solid #2d2654;">ESC or Ctrl+K</span>
            <button id="btnCloseOopDictionary" style="background: none; border: none; color: #94a3b8; font-size: 22px; cursor: pointer; padding: 4px 8px; border-radius: 6px;" title="Yopish">&times;</button>
          </div>
        </div>

        <!-- Search & Category Filters -->
        <div style="padding: 16px 24px; border-bottom: 1px solid #1f1938; background: #100d21;">
          <div style="position: relative; margin-bottom: 12px;">
            <span style="position: absolute; left: 14px; top: 11px; font-size: 16px; color: #7c3aed;">🔍</span>
            <input type="text" id="oopDictSearchInput" placeholder="Java kalit so'zi, OOP tamoyili yoki pattern qidiring..." style="
              width: 100%; box-sizing: border-box; padding: 11px 16px 11px 42px; background: #181430;
              border: 1px solid #362d66; border-radius: 10px; color: #f8fafc; font-size: 13.5px; outline: none;
              transition: all 0.2s;
            ">
          </div>
          <div id="oopDictCatPills" style="display: flex; gap: 6px; flex-wrap: wrap;">
            <button class="oop-dict-cat active" data-cat="all">Barchasi</button>
            <button class="oop-dict-cat" data-cat="core">☕ Java Core</button>
            <button class="oop-dict-cat" data-cat="oop">🏛 OOP Ustunlari</button>
            <button class="oop-dict-cat" data-cat="patterns">🧩 GoF Patternlar</button>
            <button class="oop-dict-cat" data-cat="solid">🧼 Clean Code &amp; SOLID</button>
            <button class="oop-dict-cat" data-cat="cw2">🎓 CW2 Coursework</button>
          </div>
        </div>

        <!-- Content Body (Scrollable List) -->
        <div id="oopDictListBody" style="
          padding: 20px 24px; overflow-y: auto; flex: 1; display: flex; flex-direction: column; gap: 16px;
        "></div>
      </div>
    `;

    document.body.appendChild(overlay);

    // Inject styles for active pills and cards
    const style = document.createElement("style");
    style.textContent = `
      @keyframes oopDictFadeIn {
        from { opacity: 0; transform: scale(0.97) translateY(8px); }
        to { opacity: 1; transform: scale(1) translateY(0); }
      }
      .oop-dict-cat {
        background: #181430; border: 1px solid #2d2654; color: #94a3b8;
        padding: 5px 12px; border-radius: 20px; font-size: 11.5px; cursor: pointer;
        transition: all 0.15s; font-weight: 500;
      }
      .oop-dict-cat:hover {
        background: #231c42; color: #c084fc; border-color: #5b21b6;
      }
      .oop-dict-cat.active {
        background: #7c3aed; color: #fff; border-color: #a855f7; font-weight: 600;
        box-shadow: 0 0 12px rgba(124, 58, 237, 0.4);
      }
      .oop-dict-card {
        background: #141129; border: 1px solid #2a2350; border-radius: 12px;
        padding: 18px; transition: border-color 0.2s;
      }
      .oop-dict-card:hover {
        border-color: #6d28d9;
      }
      @media (max-width: 600px) {
        #oopDictionaryCard {
          max-height: 94vh !important;
          border-radius: 12px !important;
        }
        .esc-hint {
          display: none !important;
        }
        .oop-dict-cat {
          padding: 4px 8px !important;
          font-size: 10.5px !important;
        }
        .oop-dict-card {
          padding: 12px !important;
        }
      }
    `;
    document.head.appendChild(style);

    // Bind events
    const closeBtn = document.getElementById("btnCloseOopDictionary");
    const searchInput = document.getElementById("oopDictSearchInput");
    const catPills = document.querySelectorAll(".oop-dict-cat");
    const btnUz = document.getElementById("dictBtnLangUz");
    const btnEn = document.getElementById("dictBtnLangEn");

    if (closeBtn) closeBtn.addEventListener("click", root.closeOopDictionary);
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) root.closeOopDictionary();
    });

    if (btnUz && btnEn) {
      btnUz.addEventListener("click", () => {
        root.setOopDictionaryLang("uz");
        if (root.OOP_I18N && typeof root.OOP_I18N.setLang === "function" && root.OOP_I18N.getLang() !== "uz") {
          root.OOP_I18N.setLang("uz");
        }
      });
      btnEn.addEventListener("click", () => {
        root.setOopDictionaryLang("en");
        if (root.OOP_I18N && typeof root.OOP_I18N.setLang === "function" && root.OOP_I18N.getLang() !== "en") {
          root.OOP_I18N.setLang("en");
        }
      });
    }

    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        renderDictionaryEntries(e.target.value, currentCat);
      });
    }

    let currentCat = "all";
    catPills.forEach(pill => {
      pill.addEventListener("click", () => {
        catPills.forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        currentCat = pill.dataset.cat || "all";
        renderDictionaryEntries(searchInput ? searchInput.value : "", currentCat);
      });
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && overlay.style.display === "flex") {
        root.closeOopDictionary();
      } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (overlay.style.display === "flex") {
          root.closeOopDictionary();
        } else {
          root.openOopDictionary();
        }
      }
    });

    updateModalStrings();
  }

  function updateModalStrings() {
    const isEn = getActiveLang() === "en";
    const titleEl = document.getElementById("dictModalTitle");
    const subEl = document.getElementById("dictModalSub");
    const inputEl = document.getElementById("oopDictSearchInput");
    const btnUz = document.getElementById("dictBtnLangUz");
    const btnEn = document.getElementById("dictBtnLangEn");

    if (titleEl) titleEl.textContent = isEn ? "OOP Encyclopedia & Concept Search" : "OOP Lug'at & Qidiruv (Java Ensiklopediya)";
    if (subEl) subEl.textContent = isEn ? "Professor Ada • Java Core, OOP Pillars, GoF Patterns & CW2" : "Professor Ada • Java Core, OOP Ustunlari, GoF Patternlar & CW2";
    if (inputEl) inputEl.placeholder = isEn ? "Search Java keyword, OOP principle, or GoF pattern (e.g. Singleton, super, Decorator, Heap)..." : "Java kalit so'zi, OOP tamoyili yoki pattern qidiring (masalan: Singleton, super, Decorator, Heap)...";

    if (btnUz && btnEn) {
      if (isEn) {
        btnEn.style.background = "#7c3aed";
        btnEn.style.color = "#fff";
        btnUz.style.background = "transparent";
        btnUz.style.color = "#cbd5e1";
      } else {
        btnUz.style.background = "#7c3aed";
        btnUz.style.color = "#fff";
        btnEn.style.background = "transparent";
        btnEn.style.color = "#cbd5e1";
      }
    }

    // Update cat pill labels
    const pills = document.querySelectorAll(".oop-dict-cat");
    pills.forEach(p => {
      const cat = p.dataset.cat;
      if (cat === "all") p.textContent = isEn ? "All Concepts" : "Barchasi";
      else if (cat === "core") p.textContent = isEn ? "☕ Java Core" : "☕ Java Core";
      else if (cat === "oop") p.textContent = isEn ? "🏛 OOP Pillars" : "🏛 OOP Ustunlari";
      else if (cat === "patterns") p.textContent = isEn ? "🧩 GoF Patterns" : "🧩 GoF Patternlar";
      else if (cat === "solid") p.textContent = isEn ? "🧼 Clean Code & SOLID" : "🧼 Clean Code & SOLID";
      else if (cat === "cw2") p.textContent = isEn ? "🎓 CW2 Coursework" : "🎓 CW2 Coursework";
    });
  }

  function renderDictionaryEntries(query = "", category = "all") {
    const listBody = document.getElementById("oopDictListBody");
    if (!listBody) return;

    const isEn = getActiveLang() === "en";
    const q = query.trim().toLowerCase();

    const filtered = OOP_DICTIONARY_DATA.filter(item => {
      const matchCat = category === "all" || item.cat === category;
      const matchQuery = !q ||
        item.cmd.toLowerCase().includes(q) ||
        item.name.toLowerCase().includes(q) ||
        (item.nameEn && item.nameEn.toLowerCase().includes(q)) ||
        item.desc.toLowerCase().includes(q) ||
        (item.descEn && item.descEn.toLowerCase().includes(q)) ||
        (item.example && item.example.toLowerCase().includes(q));
      return matchCat && matchQuery;
    });

    if (filtered.length === 0) {
      listBody.innerHTML = `
        <div style="text-align: center; padding: 40px 20px; color: #64748b;">
          <div style="font-size: 36px; margin-bottom: 8px;">🔍</div>
          <div style="font-size: 14px; font-weight: 600; color: #94a3b8;">${isEn ? "No matching concepts found" : "Hech narsa topilmadi"}</div>
          <div style="font-size: 12px; margin-top: 4px;">${isEn ? "Try searching another keyword or select a category filter above." : "Boshqa kalit so'z bilan qidirib ko'ring yoki toifalardan birini tanlang."}</div>
        </div>
      `;
      return;
    }

    let html = "";
    filtered.forEach(item => {
      const itemName = isEn ? (item.nameEn || item.name) : item.name;
      const itemCat = isEn ? (item.catNameEn || item.catName) : item.catName;
      const itemDesc = isEn ? (item.descEn || item.desc) : item.desc;
      const itemAnalogy = isEn ? (item.analogyEn || item.analogy) : item.analogy;
      const itemRules = isEn ? (item.syntaxRulesEn || item.syntaxRules) : item.syntaxRules;
      const itemPitfall = isEn ? (item.pitfallsEn || item.pitfalls) : item.pitfalls;

      html += `
        <div class="oop-dict-card">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; flex-wrap: wrap; gap: 8px;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 700; color: #c084fc; background: #201942; padding: 2px 8px; border-radius: 6px; border: 1px solid #3b2c6e;">
                ${item.cmd}
              </span>
              <span style="font-weight: 700; color: #f8fafc; font-size: 14px;">${escapeHtml(itemName)}</span>
            </div>
            <span style="font-size: 11px; background: rgba(124, 58, 237, 0.2); color: #c084fc; border: 1px solid rgba(124, 58, 237, 0.4); padding: 2px 8px; border-radius: 12px; font-weight: 600;">
              ${escapeHtml(itemCat)}
            </span>
          </div>

          <p style="color: #cbd5e1; font-size: 13px; line-height: 1.5; margin: 0 0 10px 0;">
            ${escapeHtml(itemDesc)}
          </p>

          ${itemAnalogy ? `
            <div style="background: rgba(16, 185, 129, 0.08); border-left: 3px solid #10b981; padding: 8px 12px; border-radius: 4px; font-size: 12px; color: #a7f3d0; margin-bottom: 10px;">
              <strong>💡 ${isEn ? "Real-Life Analogy:" : "Hayotiy analogiya:"}</strong> ${escapeHtml(itemAnalogy)}
            </div>
          ` : ""}

          ${item.syntax ? `
            <div style="margin-bottom: 8px;">
              <div style="font-size: 11px; font-weight: 700; color: #94a3b8; margin-bottom: 4px; text-transform: uppercase; letter-spacing: 0.5px;">
                ${isEn ? "Syntax & Rules:" : "Sintaksis &amp; Qoidalar:"}
              </div>
              <pre style="background: #090812; border: 1px solid #1e1938; padding: 8px 12px; border-radius: 6px; color: #38bdf8; font-family: 'JetBrains Mono', monospace; font-size: 11.5px; overflow-x: auto; margin: 0;">${escapeHtml(item.syntax)}</pre>
              ${itemRules ? `<div style="font-size: 11.5px; color: #94a3b8; margin-top: 4px;">📌 ${escapeHtml(itemRules)}</div>` : ""}
            </div>
          ` : ""}

          ${item.example ? `
            <div style="margin-bottom: 8px;">
              <div style="font-size: 11px; font-weight: 700; color: #94a3b8; margin-bottom: 4px; text-transform: uppercase; letter-spacing: 0.5px;">
                ${isEn ? "Practical Java Code Example:" : "Amaliy Kod Namunasi:"}
              </div>
              <pre style="background: #090812; border: 1px solid #1e1938; padding: 8px 12px; border-radius: 6px; color: #a5f3fc; font-family: 'JetBrains Mono', monospace; font-size: 11.5px; overflow-x: auto; margin: 0;">${escapeHtml(item.example)}</pre>
            </div>
          ` : ""}

          ${itemPitfall ? `
            <div style="background: rgba(239, 68, 68, 0.08); border-left: 3px solid #ef4444; padding: 8px 12px; border-radius: 4px; font-size: 12px; color: #fca5a5;">
              <strong>⚠️ ${isEn ? "Common Pitfall (Anti-Pattern):" : "Keng tarqalgan xato:"}</strong> ${escapeHtml(itemPitfall)}
            </div>
          ` : ""}
        </div>
      `;
    });

    listBody.innerHTML = html;
  }

  function escapeHtml(text) {
    if (!text) return "";
    return String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  root.openOopDictionary = function () {
    createDictionaryModalDOM();
    const overlay = document.getElementById("oopDictionaryModalOverlay");
    if (overlay) {
      overlay.style.display = "flex";
      updateModalStrings();
      renderDictionaryEntries("", "all");
      const input = document.getElementById("oopDictSearchInput");
      if (input) {
        input.value = "";
        setTimeout(() => input.focus(), 100);
      }
    }
  };

  root.closeOopDictionary = function () {
    const overlay = document.getElementById("oopDictionaryModalOverlay");
    if (overlay) {
      overlay.style.display = "none";
    }
  };

  root.setOopDictionaryLang = function (lang) {
    if (lang !== "uz" && lang !== "en") return;
    root.OOP_CURRENT_LANG = lang;
    try {
      localStorage.setItem("OOP_LANG", lang);
      localStorage.setItem("DS_ACADEMY_LANG", lang);
    } catch (e) {}

    const overlay = document.getElementById("oopDictionaryModalOverlay");
    if (overlay) {
      updateModalStrings();
      const input = document.getElementById("oopDictSearchInput");
      const activePill = document.querySelector(".oop-dict-cat.active");
      const cat = activePill ? (activePill.dataset.cat || "all") : "all";
      renderDictionaryEntries(input ? input.value : "", cat);
    }
  };

  // Auto-bind button triggers
  if (typeof document !== "undefined") {
    document.addEventListener("DOMContentLoaded", () => {
      const btn = document.getElementById("btnOpenDictionary");
      if (btn) {
        btn.addEventListener("click", root.openOopDictionary);
      }
    });
  }

  root.OOP_DICTIONARY_DATA = OOP_DICTIONARY_DATA;
})();
