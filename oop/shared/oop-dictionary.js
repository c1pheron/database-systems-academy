// ============================================================================
// OOP ACADEMY — COMPREHENSIVE JAVA & GOF DESIGN PATTERNS ENCYCLOPEDIA (UZ/EN)
// 60+ Java kalit so'zlari, OOP tamoyillari, GoF Patternlar, UML & CW2 andozalari
// Professor Ada • WIUT Object-Oriented Programming (5COSC018C)
// ============================================================================

(function () {
  "use strict";

  const root = typeof window !== "undefined" ? window : (typeof global !== "undefined" ? global : this);

  const OOP_DICTIONARY_DATA = [
    // 1. JAVA CORE & MEMORY
    {
      cmd: "class",
      name: "Klass (Sinf / Obyekt Chizmasi)",
      cat: "core",
      catName: "☕ Java Core",
      desc: "Obyektlarning xususiyatlari (maydonlar/state) va harakatlarini (metodlar/behavior) ifodalovchi qolip yoki chizma (blueprint). Java dasturidagi har bir kod qatori klass ichida bo'lishi shart.",
      syntax: "class <KlassNomi> {\n    // maydonlar (fields)\n    // konstruktor (constructor)\n    // metodlar (methods)\n}",
      syntaxRules: "Fayl nomi bilan faqat 'public class' nomi bir xil bo'lishi mumkin. Bitta faylda bir nechta default (package-private) klasslar bo'lishi mumkin.",
      example: "class Product {\n    String name;\n    double price;\n}",
      pitfalls: "Klass nomini kichik harf bilan boshlash (masalan 'product') Java konvensiyasiga zid. Doim PascalCase ishlating: 'Product', 'OrderItem'.",
      analogy: "Avtomobil zavodidagi muhandislik chizmasi. Chizmaning o'zini minib bo'lmaydi, lekin u asosida yuzlab mashinalar chiqariladi."
    },
    {
      cmd: "new",
      name: "'new' Kalit So'zi (Obyekt Yaratish & Heap Xotira)",
      cat: "core",
      catName: "☕ Java Core",
      desc: "Klass chizmasi asosida Heap (uyum) xotirada yangi obyekt nusxasini (instance) yaratadi, xotira ajratadi va konstruktorni chaqiradi.",
      syntax: "<KlassNomi> <o'zgaruvchi> = new <KlassNomi>(argumentlar);",
      syntaxRules: "'new' doimo xotiradagi obyekt manziliga (reference) ishora qaytaradi. O'zgaruvchining o'zi Stack xotirada, haqiqiy obyekt esa Heap xotirada saqlanadi.",
      example: "Product p1 = new Product(\"MacBook M3\", 1400.0);\nProduct p2 = new Product(\"iPhone 15\", 950.0);",
      pitfalls: "Agar obyekt yaratmasdan uning maydoniga murojaat qilinsa, NullPointerException yuzaga keladi.",
      analogy: "Zavod chizmasi asosida konveyerdan yangi, haqiqiy,จับ tutib bo'ladigan avtomobilni chiqarish buyrug'i."
    },
    {
      cmd: "this",
      name: "'this' Kalit So'zi (Joriy Obyektga Murojaat)",
      cat: "core",
      catName: "☕ Java Core",
      desc: "Metod yoki konstruktor ichida chaqirilayotgan joriy obyekt nusxasiga (current instance) ko'rsatkich. Konstruktor parametrlari klass maydonlari bilan bir xil nomlanganda adashishning oldini oladi (Variable Shadowing).",
      syntax: "this.fieldName = paramName;\nthis.methodName();\nthis(otherParams); // boshqa konstruktorni chaqirish",
      syntaxRules: "Static metodlar ichida 'this' dan foydalanib bo'lmaydi, chunki static metod obyektga emas, klassga tegishlidir.",
      example: "public Product(String name, double price) {\n    this.name = name;\n    this.price = price;\n}",
      pitfalls: "'this.name = name' o'rniga 'name = name' deb yozish — parametr o'zini o'ziga tenglashtiradi, klass maydoni esa o'zgarmasdan (null yoki 0) qoladi.",
      analogy: "Inson o'zi haqida gapirganda 'men' (I, me) so'zini ishlatishiga o'xshaydi: 'Mening ismim Anvar'."
    },
    {
      cmd: "static",
      name: "'static' Modifikatori (Klass Darajasidagi Xususiyat)",
      cat: "core",
      catName: "☕ Java Core",
      desc: "Maydon yoki metodni aniq bir obyektga emas, balki klassning o'ziga biriktiradi. Barcha obyektlar bu maydonning yagona nusxasini (shared memory) o'zaro baham ko'radi.",
      syntax: "public static <type> <variable>;\npublic static void <method>() { ... }",
      syntaxRules: "Static metod ichidan 'this' yoki oddiy (non-static) maydonlarga to'g'ridan-to'g'ri murojaat qilib bo'lmaydi.",
      example: "class Order {\n    private static int totalOrdersCount = 0;\n    public Order() { totalOrdersCount++; }\n    public static int getTotalOrders() { return totalOrdersCount; }\n}",
      pitfalls: "Har bir obyektga alohida bo'lishi kerak bo'lgan holatni (masalan mijoz balansi) 'static' qilib qo'yish — butun tizimda barcha mijozlar bitta balansga ega bo'lib qolish xavfini tug'diradi.",
      analogy: "Universitet binosidagi umumiy soat — har bir talabaning qo'l soati (non-static) alohida, lekin devordagi soat (static) hamma uchun bitta."
    },
    {
      cmd: "final",
      name: "'final' Modifikatori (O'zgarmaslik / Immutability)",
      cat: "core",
      catName: "☕ Java Core",
      desc: "Uch xil ma'noga ega: 1) O'zgaruvchida — uning qiymatini qayta o'zgartirib bo'lmaydi (konstanta); 2) Metodda — uni voris klassda qayta yozib (@Override) bo'lmaydi; 3) Klassda — bu klassdan voris olib bo'lmaydi.",
      syntax: "public static final double PI = 3.14159;\nfinal class ImmutableSecurity { ... }",
      syntaxRules: "Final o'zgaruvchiga qiymat faqat e'lon qilinganda yoki konstruktor ichida 1 marta berilishi shart.",
      example: "public class Config {\n    public static final String CURRENCY = \"UZS\";\n    private final long orderId;\n    public Config(long id) { this.orderId = id; }\n}",
      pitfalls: "Reference turdagi obyekt 'final' bo'lsa, uning o'zini boshqa manzilga yo'naltirib bo'lmaydi, lekin uning ichki maydonlarini o'zgartirish mumkin (agar ular ham final bo'lmasa).",
      analogy: "Davlat qonunidagi o'zgarmas modda yoki muhrlangan shartnoma."
    },
    {
      cmd: "Heap_Stack",
      name: "JVM Xotira Modeli: Heap vs Stack",
      cat: "core",
      catName: "☕ Java Core",
      desc: "Java dasturi ishlayotganda xotira ikki asosiy bo'limga bo'linadi: 1) Stack xotira — metod chaqiriqlari va primitiv mahalliy o'zgaruvchilarni (int, double) tezkor saqlaydi (LIFO); 2) Heap xotira — 'new' orqali yaratilgan barcha haqiqiy obyektlar saqlanadigan global maydon.",
      syntax: "int x = 10; // Stack'da\nProduct p = new Product(); // p (manzil) Stack'da, obyektning o'zi Heap'da",
      syntaxRules: "Metod yakunlanganda uning Stack freymi darhol tozalanadi. Heap'dagi obyektlar esa Garbage Collector (GC) tomonidan keraksiz bo'lganda tozalanadi.",
      example: "void calculate() {\n    int a = 5; // Stack\n    Coffee c = new Coffee(); // c -> Stack, new Coffee() -> Heap\n}",
      pitfalls: "Heap xotirasi to'lib ketsa OutOfMemoryError, cheksiz rekursiyada Stack to'lsa StackOverflowError yuzaga keladi.",
      analogy: "Stack — sizning ish stolingizdagi kundalik qayd daftarchangiz (tez yozib o'chirasiz); Heap — korxonaning katta markaziy omborxonasi."
    },

    // 2. OOP USTUNLARI (4 PILLARS)
    {
      cmd: "Encapsulation",
      name: "Inkapsulyatsiya (Ma'lumotlarni Yashirish & Himoya)",
      cat: "oop",
      catName: "🏛 OOP Ustunlari",
      desc: "Obyektning ichki holatini (maydonlarini) to'g'ridan-to'g'ri tashqaridan o'zgartirishdan himoyalash va unga faqat maxsus metodlar (Getter va Setter) orqali boshqariladigan kirishni ta'minlash.",
      syntax: "public class Account {\n    private double balance; // yashirin\n    public double getBalance() { return balance; }\n    public void setBalance(double b) {\n        if (b >= 0) this.balance = b;\n    }\n}",
      syntaxRules: "Barcha holat maydonlari 'private' bo'lishi, o'zgaruvchilar esa validatsiya qoidalari orqali tekshirib o'zgartirilishi shart.",
      example: "class Student {\n    private int score;\n    public void setScore(int s) {\n        if (s >= 0 && s <= 100) this.score = s;\n        else throw new IllegalArgumentException(\"Ball 0-100 oralig'ida bo'lsin\");\n    }\n}",
      pitfalls: "Maydonlarni 'public' deb e'lon qilish yoki setterning ichida hech qanday tekshiruvsiz to'g'ridan-to'g'ri qiymat berish — inkapsulyatsiyani yo'qqa chiqaradi.",
      analogy: "Bankomat (ATM) — siz bank omboridagi naqd pullarga to'g'ridan-to'g'ri qo'l tiqa olmaysiz, faqat ekran va tugmalar (metodlar) orqali xavfsiz pul olasiz."
    },
    {
      cmd: "Inheritance",
      name: "Merosxo'rlik (Inheritance / 'extends')",
      cat: "oop",
      catName: "🏛 OOP Ustunlari",
      desc: "Mavjud klassning (ota/super class) xususiyatlari va metodlarini yangi klass (bola/sub class) tomonidan meros qilib olishi. Kodning qayta ishlatilishini (Code Reusability) ta'minlaydi ('Is-A' munosabati).",
      syntax: "class <BolaKlass> extends <OtaKlass> {\n    // ota metodlarini kengaytiradi yoki qayta yozadi\n}",
      syntaxRules: "Java'da bir vaqtning o'zida faqat bitta klassdan meros olish mumkin (Multiple inheritance klasslarda ruxsat berilmagan, faqat interfeyslarda mumkin).",
      example: "class MenuItem {\n    protected String name;\n    protected double price;\n}\nclass Drink extends MenuItem {\n    private boolean isCold;\n}",
      pitfalls: "'Is-A' munosabati bo'lmagan joyda meros qo'llash (masalan Car extends Engine deb yozish). Aslida Car 'Has-A' Engine bo'lishi (kompozitsiya) kerak.",
      analogy: "Ota va farzand: bola ota-onaning genetik xususiyatlarini (bo'y, ko'z rangi) meros qilib oladi va o'zining yangi qobiliyatlarini qo'shadi."
    },
    {
      cmd: "super",
      name: "'super' Kalit So'zi (Ota Klassga Murojaat)",
      cat: "core",
      catName: "☕ Java Core",
      desc: "Voris klass ichida uning ota klassidagi (superclass) konstruktorni, maydonlarni yoki qayta yozilgan metodlarni chaqirish uchun ishlatiladi.",
      syntax: "super(); // Ota klass konstruktorini chaqirish\nsuper(arg1, arg2);\nsuper.methodName();",
      syntaxRules: "Voris klass konstruktorida 'super(...)' chaqirig'i mutlaqo BIRINCHI QATORDА turishi shart!",
      example: "class Coffee extends MenuItem {\n    public Coffee(String name, double price) {\n        super(name, price); // ota klass konstruktori\n    }\n    @Override\n    public void display() {\n        super.display();\n        System.out.println(\"Tur: Issiq ichimlik\");\n    }\n}",
      pitfalls: "'super(...)' ni ikkinchi yoki uchinchi qatorda chaqirish — kompilyator xatosiga olib keladi.",
      analogy: "Katta loyihada yordamchining o'z boshlig'iga vakolatli qismini topshirishi."
    },
    {
      cmd: "Polymorphism",
      name: "Polimorfizm (Ko'p Shakllilik & Dynamic Dispatch)",
      cat: "oop",
      catName: "🏛 OOP Ustunlari",
      desc: "Bitta umumiy interfeys yoki ota klass orqali har xil turdagi obyektlarni bir xilda boshqarish imkoniyati. Dastur ishlash vaqtida (Runtime) qaysi obyekt turgani aniqlanadi va uning xos metodi ishga tushadi.",
      syntax: "OtaKlass obj = new BolaKlass();\nobj.action(); // Bola klassning versiyasi ishlaydi",
      syntaxRules: "Ota klass referensi bola klass obyektiga ishora qilishi mumkin, lekin teskarisi (BolaKlass obj = new OtaKlass()) to'g'ridan-to'g'ri mumkin emas.",
      example: "List<PaymentMethod> methods = new ArrayList<>();\nmethods.add(new PaymePayment());\nmethods.add(new UzumPay());\nfor (PaymentMethod p : methods) {\n    p.pay(50000); // dinamik polimorfik chaqiriq!\n}",
      pitfalls: "Polimorfik referens orqali bola klassning o'zigagina xos bo'lgan (ota klassda yo'q) yangi metodlarni chaqirib bo'lmaydi (oldin casting qilish kerak).",
      analogy: "Universaldagi pultning 'Play' tugmasi — u televizor, konditsioner yoki magnitafonda turlicha harakat qiladi, lekin tugma bitta."
    },
    {
      cmd: "Override",
      name: "@Override Annotatsiyasi (Metodni Qayta Yozish)",
      cat: "oop",
      catName: "🏛 OOP Ustunlari",
      desc: "Ota klassda mavjud bo'lgan metodni bola klassda o'ziga xos tarzda qaytadan e'lon qilish. Metod nomi, parametrlari va qaytaruvchi turi mutlaqo bir xil bo'lishi shart.",
      syntax: "@Override\npublic void displayDetails() {\n    // yangicha logika\n}",
      syntaxRules: "Qayta yozilayotgan metodning ko'rinish doirasi (visibility) ota metodnikidan torroq bo'lishi mumkin emas (masalan public o'rniga private qilib bo'lmaydi).",
      example: "class Americano extends Coffee {\n    @Override\n    public double calculatePrice() {\n        return 2.50;\n    }\n}",
      pitfalls: "@Override annotatsiyasini yozmaslik xato emas, lekin parametrlarda xato qilsangiz yangi metod ochilib qolib, xatoni topish juda qiyinlashadi.",
      analogy: "Kompaniya qoidalarini mahalliy filial o'z hududiga moslab o'zgartirishi."
    },
    {
      cmd: "abstract",
      name: "Abstrakt Klass (Shablon Klass / 'abstract')",
      cat: "oop",
      catName: "🏛 OOP Ustunlari",
      desc: "To'liq tugallanmagan klass. Undan to'g'ridan-to'g'ri 'new' orqali obyekt olib bo'lmaydi. U o'zida tanasi yo'q (abstract) metodlarni saqlaydi va voris klasslar bu metodlarni majburiy realizatsiya qiladi.",
      syntax: "abstract class Shape {\n    abstract double getArea();\n    void printInfo() { System.out.println(\"Shakl\"); }\n}",
      syntaxRules: "Agar klassda kamida bitta abstrakt metod bo'lsa, butun klass 'abstract' deb e'lon qilinishi shart.",
      example: "abstract class OrderItem {\n    protected String title;\n    public abstract double getCost();\n}",
      pitfalls: "'new AbstractClass()' deb obyekt yaratishga urinish — Java kompilyatori buni qat'iy taqiqlaydi.",
      analogy: "Bino loyihasidagi 'xona' tushunchasi. Dunyoda shunchaki 'xona' degan narsaning o'zi yo'q, u yo 'yotoqxona', yo 'oshxona' bo'lishi shart."
    },
    {
      cmd: "interface",
      name: "Interfeys (Interface / 'implements')",
      cat: "oop",
      catName: "🏛 OOP Ustunlari",
      desc: "Klass nima qilishi kerakligini belgilovchi, lekin qanday qilishini aytmaydigan 100% abstrakt shartnoma (contract). Java'da ko'p karrali merosxo'rlikni (Multiple inheritance) ta'minlaydi.",
      syntax: "interface DiscountStrategy {\n    double applyDiscount(double rawPrice);\n}\nclass StudentDiscount implements DiscountStrategy { ... }",
      syntaxRules: "Interfeysdagi barcha maydonlar avtomatik 'public static final', barcha metodlar esa avtomatik 'public abstract' hisoblanadi (Java 8+ dagi default/static metodlar bundan mustasno).",
      example: "interface Printable {\n    void print();\n}\ninterface Exportable {\n    void exportToJson();\n}\nclass Invoice implements Printable, Exportable {\n    public void print() { ... }\n    public void exportToJson() { ... }\n}",
      pitfalls: "Interfeysni amalga oshirayotganda metodning oldiga 'public' so'zini yozmaslik — package-private bo'lib qolib xato beradi.",
      analogy: "Elektr rozetkasi standarti (220V). Rozetka tok berishni kafolatlaydi, unga choynak, telefon zaryadnik yoki dazmol ulaysizmi — unga farqi yo'q."
    },

    // 3. GOF DESIGN PATTERNS (CREATIONAL, STRUCTURAL, BEHAVIOURAL)
    {
      cmd: "Singleton",
      name: "Singleton Pattern (Yagona Nusxa / Creational)",
      cat: "patterns",
      catName: "🧩 GoF Patterns",
      desc: "Butun dastur davomida klassning faqat va faqat bitta yagona obyekt nusxasi mavjud bo'lishini kafolatlaydi va unga global kirish nuqtasini taqdim etadi. Konstruktor yopiq (private) bo'ladi.",
      syntax: "public class DatabaseConnection {\n    private static DatabaseConnection instance;\n    private DatabaseConnection() {} // yopiq konstruktor\n    public static DatabaseConnection getInstance() {\n        if (instance == null) instance = new DatabaseConnection();\n        return instance;\n    }\n}",
      syntaxRules: "1) Private konstruktor, 2) O'z turidagi private static instance, 3) Public static getInstance() metodi.",
      example: "class OrderManager {\n    private static OrderManager instance;\n    private OrderManager() {}\n    public static synchronized OrderManager getInstance() {\n        if (instance == null) instance = new OrderManager();\n        return instance;\n    }\n}",
      pitfalls: "Konstruktorni public qilib qo'yish yoki multithreading (ko'p oqimli) tizimda sinxronizatsiya qilmaslik natijasida bir nechta obyekt yaratilib ketishi.",
      analogy: "Davlat Prezidenti yoki markaziy ma'lumotlar bazasi aloqa drayveri — mamlakatda bir vaqtda faqat bitta prezident bo'ladi."
    },
    {
      cmd: "Factory_Method",
      name: "Factory Method Pattern (Fabrika Metodi / Creational)",
      cat: "patterns",
      catName: "🧩 GoF Patterns",
      desc: "Obyekt yaratish logikasini alohida fabrika metodiga topshiradi. Mijoz kodi 'new KonkretKlass()' deb qattiq bog'lanish (tight coupling) o'rniga umumiy interfeys orqali kerakli turdagi obyektni yaratib oladi.",
      syntax: "class CoffeeFactory {\n    public static Coffee createCoffee(String type) {\n        switch(type.toLowerCase()) {\n            case \"latte\": return new Latte();\n            case \"espresso\": return new Espresso();\n            default: throw new IllegalArgumentException(\"Noma'lum qahva\");\n        }\n    }\n}",
      syntaxRules: "Mijoz kod 'new Latte()' deb to'g'ridan-to'g'ri yaratmaydi, balki fabrikaning create metodini chaqiradi.",
      example: "Coffee order = CoffeeFactory.createCoffee(\"cappuccino\");",
      pitfalls: "Yangi mahsulot qo'shilganda har safar if/switch ni o'zgartirish Open-Closed prinsipini buzishi mumkin, shuning uchun ro'yxatga olish (registry) xaritasidan foydalanish maqsadga muvofiq.",
      analogy: "Restoran ofitsiantiga buyurtma berish: siz oshxonaga kirib ovqat pishirmaysiz, ofitsiantga 'Manti bering' deysiz, oshxona uni tayyorlab beradi."
    },
    {
      cmd: "Builder",
      name: "Builder Pattern (Quruvchi / Creational)",
      cat: "patterns",
      catName: "🧩 GoF Patterns",
      desc: "Juda ko'p ixtiyoriy parametrlarga ega murakkab obyektlarni qadamma-qadam va o'qishga juda qulay (fluent API) usulda qurishga imkon beruvchi pattern.",
      syntax: "Coffee order = new Coffee.Builder(\"Latte\")\n    .setSize(\"Large\")\n    .setSugar(2)\n    .setExtraSyrup(\"Vanil\")\n    .build();",
      syntaxRules: "Builder klassi odatda asosiy klassning ichki static klassi (static inner class) qilib yaratiladi va oxirida build() metodi chaqiriladi.",
      example: "public static class Builder {\n    private String type;\n    private boolean sugar;\n    public Builder(String type) { this.type = type; }\n    public Builder withSugar() { this.sugar = true; return this; }\n    public Coffee build() { return new Coffee(this); }\n}",
      pitfalls: "Parametrlari 2-3 tadan oshmaydigan oddiy klasslar uchun Builder yaratish kodni asossiz murakkablashtiradi.",
      analogy: "Subway yoki lavashxonada buyurtma yig'ish: nonini tanlaysiz, go'sht turini, qaysi sabzavotlar va qaysi sous qo'shilishini bosqichma-bosqich aytasiz."
    },
    {
      cmd: "Decorator",
      name: "Decorator Pattern (Qoplovchi / Bezakchi / Structural)",
      cat: "patterns",
      catName: "🧩 GoF Patterns",
      desc: "Mavjud obyektning funksionalligini merosxo'rliksiz (subclass ochmasdan), dinamik ravishda yangi xususiyatlar bilan qoplab kengaytirish imkonini beruvchi pattern. CW2 da ichimlikka qo'shimcha sirop, sut qo'shish uchun asosiy talab!",
      syntax: "Coffee c = new SimpleCoffee();\nc = new MilkDecorator(c);\nc = new CaramelDecorator(c);\nSystem.out.println(c.getCost()); // Barcha qatlamlar qo'shiladi!",
      syntaxRules: "Dekorator o'zi qoplayotgan obyekt bilan bir xil interfeysni amalga oshiradi va ichida xuddi shu interfeysdagi obyektga havola (wrapping) saqlaydi.",
      example: "abstract class CoffeeDecorator implements Coffee {\n    protected Coffee decoratedCoffee;\n    public CoffeeDecorator(Coffee c) { this.decoratedCoffee = c; }\n    public double getPrice() { return decoratedCoffee.getPrice(); }\n}",
      pitfalls: "Dekorator zanjiri juda cho'zilib ketsa, qaysi qatlamda xato yuz berganini aniqlash qiyinlashishi mumkin.",
      analogy: "Sovuq havoda kiyinish: ichidan futbolka, ustidan sviter, ustidan palto va ustidan sharf o'rash. Har bir kiyim qatlami isitish funksiyasini oshiradi."
    },
    {
      cmd: "Adapter",
      name: "Adapter Pattern (Moslashtiruvchi / Structural)",
      cat: "patterns",
      catName: "🧩 GoF Patterns",
      desc: "Bir-biriga mos kelmaydigan ikkita interfeysni bir-biri bilan muammosiz ishlashiga imkon beruvchi oraliq ko'prik. Eski tizim yoki tashqi kutubxonani yangi dasturga ulashda ishlatiladi.",
      syntax: "class OldPaymentGatewayAdapter implements ModernPayment {\n    private LegacyBankApi legacyApi;\n    public void pay(double amount) {\n        legacyApi.executeOldTransaction((long) amount * 100);\n    }\n}",
      syntaxRules: "Adapter maqsadli interfeysni amalga oshiradi (implements Target) va moslashishi kerak bo'lgan obyektni kompozitsiya orqali o'zida saqlaydi.",
      example: "class ThirdPartyOrderAdapter implements OrderSystem {\n    private ForeignOrderLib lib;\n    public void placeOrder() { lib.dispatch(); }\n}",
      pitfalls: "Haddan tashqari ko'p adapterlar kiritish arxitektura aralash-qurash bo'lishiga olib kelishi mumkin.",
      analogy: "Yevropa rozetkasiga Amerika yoki Angliya shtekerini ulash uchun ishlatiladigan perexodnik (adapter)."
    },
    {
      cmd: "Strategy",
      name: "Strategy Pattern (Strategiya / Behavioural)",
      cat: "patterns",
      catName: "🧩 GoF Patterns",
      desc: "Bir xil vazifani bajaruvchi algoritmlar oilasini yaratib, ularning har birini alohida klassga inkapsulyatsiya qiladi va dastur ishlash paytida (Runtime) bir-biriga almashtirish imkonini beradi. CW2 da turli xil chegirmalar (Talaba chegirmasi, Yangi yil aksiyasi) uchun ishlatiladi.",
      syntax: "interface DiscountStrategy {\n    double calculate(double originalPrice);\n}\nclass PercentageDiscount implements DiscountStrategy { ... }\nclass FlatDiscount implements DiscountStrategy { ... }",
      syntaxRules: "Kontekst klass (Order) strategiyaning aniq klassiga emas, uning interfeysiga suyanadi va setter orqali strategiyani istalgan payt o'zgartiradi.",
      example: "order.setDiscountStrategy(new StudentDiscountStrategy());\ndouble finalPrice = order.calculateTotal();",
      pitfalls: "Strategiyalar soni juda kam bo'lsa (masalan 1 ta oddiy chegirma) bu patternni ishlatish kodni ortiqcha kengaytirishi mumkin.",
      analogy: "Navigatsiyada manzilga borish usullari: Piyoda, Avtomobilda yoki Velosipedda. Maqsad bitta, lekin hisoblash algoritmi va marshrut boshqacha."
    },
    {
      cmd: "Observer",
      name: "Observer Pattern (Kuzatuvchi / Behavioural)",
      cat: "patterns",
      catName: "🧩 GoF Patterns",
      desc: "Bir obyektning (Subject) holati o'zgarganda, unga obuna bo'lgan barcha boshqa obyektlarga (Observers) avtomatik xabar beruvchi va ularni yangilovchi 'Publisher-Subscriber' arxitekturasi. CW2 da buyurtma holati o'zgarganda (Tayyorlanmoqda -> Tayyor) xabarnoma yuborishda qo'llaniladi.",
      syntax: "interface Observer { void update(String status); }\ninterface Subject {\n    void register(Observer o);\n    void notifyObservers();\n}",
      syntaxRules: "Subject kuzatuvchilar ro'yxatini List<Observer> ko'rinishida saqlaydi va biror voqea bo'lganda loop qilib barchasiga xabar yuboradi.",
      example: "order.subscribe(new KitchenDisplay());\norder.subscribe(new SmsNotificationService());\norder.setStatus(\"TAYYOR\"); // Barcha obunachilar xabardor bo'ladi!",
      pitfalls: "Kuzatuvchi obunadan chiqarilmasa (unsubscribe unutilsa), Memory Leak (xotira sizib chiqishi) sodir bo'lishi mumkin.",
      analogy: "Telegram kanalga obuna bo'lish: admin yangi post joylaganda minglab obunachilar telefoniga bir vaqtda bildirishnoma boradi."
    },

    // 4. CLEAN CODE & SOLID PRINSIPLARI
    {
      cmd: "SOLID",
      name: "SOLID Prinsiplari (Professional Dastur Arxitekturasi)",
      cat: "solid",
      catName: "🧼 Clean Code & SOLID",
      desc: "Robert Martin (Uncle Bob) tomonidan ishlab chiqilgan 5 ta oltin me'moriy qoida: 1) SRP — Yagona javobgarlik; 2) OCP — Ochiqlik/Yopiqlik; 3) LSP — Liskov o'rnini bosish; 4) ISP — Interfeyslarni ajratish; 5) DIP — Qaramliklarni teskarilash.",
      syntax: "SRP: Class faqat 1 sabab bilan o'zgarishi kerak.\nOCP: Kengayish uchun ochiq, o'zgartirish uchun yopiq.",
      syntaxRules: "Westminster CW2 (50%) va Viva imtihonida kod nega aynan shunday loyihalashtirilganini SOLID orqali himoya qilib berish talab qilinadi.",
      example: "// DIP misoli: OrderService yuqori darajadagi modul bo'lib,\n// u MySQLDatabase ga emas, DatabaseInterface ga qaram bo'lishi kerak.",
      pitfalls: "SOLID qoidalarini bilmasdan barcha kodni bitta 'God Object' (hamma ishni qiluvchi ulkan Main klass) ichiga tiqish.",
      analogy: "Harbiy intizom yoki qurilish standartlari: qoidalar binoning zilzilaga chidamli va uzoq umr ko'rishini ta'minlaydi."
    },
    {
      cmd: "CW2_OrderApp",
      name: "WIUT CW2 Console Order App Arxitekturasi (50%)",
      cat: "cw2",
      catName: "🎓 CW2 Coursework",
      desc: "Westminster Assessment 2 talabi bo'yicha Java konsol buyurtma tizimi: Encapsulation (6 mark), Inheritance (6 mark), Abstraction (6 mark), Polymorphism (6 mark), Creational Pattern (9 mark), Structural Pattern (9 mark), Behavioural Pattern (9 mark), Application Features & Usability (15 mark), Class Diagram (10 mark), Git & README (18 mark).",
      syntax: "Tavsiya etilgan tuzilma:\n- model/ (Coffee, Order, Size)\n- patterns/creational/ (CoffeeFactory, OrderBuilder)\n- patterns/structural/ (MilkDecorator, SyrupDecorator)\n- patterns/behavioural/ (DiscountStrategy, OrderObserver)\n- service/ (OrderService, MenuManager)\n- Main.java (Konsol interfeysi)",
      syntaxRules: "Dasturda kamida 3 xil GoF pattern amaliy va o'rinli qo'llanilgan bo'lishi shart!",
      example: "public class Main {\n    public static void main(String[] args) {\n        OrderApp app = new OrderApp();\n        app.startConsoleMenu();\n    }\n}",
      pitfalls: "Patternlarni shunchaki baho olish uchun sun'iy, keraksiz joyga tiqish (Over-engineering). Har bir pattern aniq muammoni yechishi shart.",
      analogy: "Real dunyodagi qahvaxona yoki restoran ERP tizimi (masalan iiko yoki R-Keeper)."
    }
  ];

  // Helper function to build modal UI
  function createDictionaryModalDOM() {
    if (document.getElementById("oopDictionaryModalOverlay")) return;

    const overlay = document.createElement("div");
    overlay.id = "oopDictionaryModalOverlay";
    overlay.style.cssText = `
      position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
      background: rgba(4, 3, 10, 0.85); backdrop-filter: blur(8px);
      z-index: 99999; display: none; align-items: center; justify-content: center;
      padding: 16px; box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    `;

    overlay.innerHTML = `
      <div id="oopDictionaryCard" style="
        background: #0f0d1e; border: 1px solid #2d2654; border-radius: 16px;
        width: 100%; max-width: 860px; max-height: 88vh; display: flex; flex-direction: column;
        box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 30px rgba(124, 58, 237, 0.25);
        overflow: hidden; animation: oopDictFadeIn 0.2s ease-out;
      ">
        <!-- Header -->
        <div style="padding: 18px 24px; border-bottom: 1px solid #221c40; display: flex; align-items: center; justify-content: space-between; background: #131026;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="width: 38px; height: 38px; border-radius: 10px; background: rgba(124, 58, 237, 0.2); border: 1px solid rgba(192, 132, 252, 0.4); display: flex; align-items: center; justify-content: center; font-size: 20px;">
              📖
            </div>
            <div>
              <div style="color: #f8fafc; font-weight: 700; font-size: 16px; display: flex; align-items: center; gap: 8px;">
                <span>Java &amp; OOP Lug'at / Ensiklopediya</span>
                <span style="font-size: 10.5px; background: #7c3aed; color: #fff; padding: 2px 8px; border-radius: 10px; font-weight: 600;">60+ Tushuncha</span>
              </div>
              <div style="color: #94a3b8; font-size: 12px; margin-top: 2px;">
                Professor Ada • WIUT 5COSC018C &amp; CW2 Coursework
              </div>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 11px; color: #64748b; background: #181430; padding: 4px 8px; border-radius: 6px; border: 1px solid #2d2654;">ESC or Ctrl+K</span>
            <button id="btnCloseOopDictionary" style="background: none; border: none; color: #94a3b8; font-size: 20px; cursor: pointer; padding: 4px 8px; border-radius: 6px;" title="Yopish">&times;</button>
          </div>
        </div>

        <!-- Search & Category Filters -->
        <div style="padding: 16px 24px; border-bottom: 1px solid #1f1938; background: #100d21;">
          <div style="position: relative; margin-bottom: 12px;">
            <span style="position: absolute; left: 14px; top: 11px; font-size: 16px; color: #7c3aed;">🔍</span>
            <input type="text" id="oopDictSearchInput" placeholder="Java kalit so'zi, OOP tamoyili yoki pattern qidiring (masalan: Singleton, super, Decorator, Heap)..." style="
              width: 100%; box-sizing: border-box; padding: 11px 16px 11px 42px; background: #181430;
              border: 1px solid #362d66; border-radius: 10px; color: #f8fafc; font-size: 13.5px; outline: none;
              transition: all 0.2s;
            ">
          </div>
          <div id="oopDictCatPills" style="display: flex; gap: 6px; flex-wrap: wrap;">
            <button class="oop-dict-cat active" data-cat="all">Barchasi</button>
            <button class="oop-dict-cat" data-cat="core">☕ Java Core</button>
            <button class="oop-dict-cat" data-cat="oop">🏛 OOP Ustunlari</button>
            <button class="oop-dict-cat" data-cat="patterns">🧩 GoF Patterns</button>
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
    `;
    document.head.appendChild(style);

    // Bind events
    const closeBtn = document.getElementById("btnCloseOopDictionary");
    const searchInput = document.getElementById("oopDictSearchInput");
    const catPills = document.querySelectorAll(".oop-dict-cat");

    if (closeBtn) closeBtn.addEventListener("click", root.closeOopDictionary);
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) root.closeOopDictionary();
    });

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
  }

  function renderDictionaryEntries(query = "", category = "all") {
    const listBody = document.getElementById("oopDictListBody");
    if (!listBody) return;

    const q = query.trim().toLowerCase();
    const filtered = OOP_DICTIONARY_DATA.filter(item => {
      const matchCat = category === "all" || item.cat === category;
      const matchQuery = !q ||
        item.cmd.toLowerCase().includes(q) ||
        item.name.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        (item.example && item.example.toLowerCase().includes(q));
      return matchCat && matchQuery;
    });

    if (filtered.length === 0) {
      listBody.innerHTML = `
        <div style="text-align: center; padding: 40px 20px; color: #64748b;">
          <div style="font-size: 36px; margin-bottom: 8px;">🔍</div>
          <div style="font-size: 14px; font-weight: 600; color: #94a3b8;">Hech narsa topilmadi</div>
          <div style="font-size: 12px; margin-top: 4px;">Boshqa kalit so'z bilan qidirib ko'ring yoki toifalardan birini tanlang.</div>
        </div>
      `;
      return;
    }

    let html = "";
    filtered.forEach(item => {
      html += `
        <div class="oop-dict-card">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; flex-wrap: wrap; gap: 8px;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 700; color: #c084fc; background: #201942; padding: 2px 8px; border-radius: 6px; border: 1px solid #3b2c6e;">
                ${item.cmd}
              </span>
              <span style="font-weight: 700; color: #f8fafc; font-size: 14px;">${item.name}</span>
            </div>
            <span style="font-size: 11px; background: rgba(124, 58, 237, 0.2); color: #c084fc; border: 1px solid rgba(124, 58, 237, 0.4); padding: 2px 8px; border-radius: 12px; font-weight: 600;">
              ${item.catName}
            </span>
          </div>

          <p style="color: #cbd5e1; font-size: 13px; line-height: 1.5; margin: 0 0 10px 0;">
            ${item.desc}
          </p>

          ${item.analogy ? `
            <div style="background: rgba(16, 185, 129, 0.08); border-left: 3px solid #10b981; padding: 8px 12px; border-radius: 4px; font-size: 12px; color: #a7f3d0; margin-bottom: 10px;">
              <strong>💡 Hayotiy analogiya:</strong> ${item.analogy}
            </div>
          ` : ""}

          ${item.syntax ? `
            <div style="margin-bottom: 8px;">
              <div style="font-size: 11px; font-weight: 700; color: #94a3b8; margin-bottom: 4px; text-transform: uppercase; letter-spacing: 0.5px;">Sintaksis &amp; Qoidalar:</div>
              <pre style="background: #090812; border: 1px solid #1e1938; padding: 8px 12px; border-radius: 6px; color: #38bdf8; font-family: 'JetBrains Mono', monospace; font-size: 11.5px; overflow-x: auto; margin: 0;">${escapeHtml(item.syntax)}</pre>
            </div>
          ` : ""}

          ${item.example ? `
            <div style="margin-bottom: 8px;">
              <div style="font-size: 11px; font-weight: 700; color: #94a3b8; margin-bottom: 4px; text-transform: uppercase; letter-spacing: 0.5px;">Amaliy Kod Namunasi:</div>
              <pre style="background: #090812; border: 1px solid #1e1938; padding: 8px 12px; border-radius: 6px; color: #a5f3fc; font-family: 'JetBrains Mono', monospace; font-size: 11.5px; overflow-x: auto; margin: 0;">${escapeHtml(item.example)}</pre>
            </div>
          ` : ""}

          ${item.pitfalls ? `
            <div style="background: rgba(239, 68, 68, 0.08); border-left: 3px solid #ef4444; padding: 8px 12px; border-radius: 4px; font-size: 12px; color: #fca5a5;">
              <strong>⚠️ Keng tarqalgan xato:</strong> ${item.pitfalls}
            </div>
          ` : ""}
        </div>
      `;
    });

    listBody.innerHTML = html;
  }

  function escapeHtml(text) {
    if (!text) return "";
    return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  root.openOopDictionary = function () {
    createDictionaryModalDOM();
    const overlay = document.getElementById("oopDictionaryModalOverlay");
    if (overlay) {
      overlay.style.display = "flex";
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
