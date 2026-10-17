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

  // 10 Progressive Java Core Challenges with Detailed Solutions & Precise Requirements
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
        fields: [
          { name: "name", type: "String" },
          { name: "price", type: "double" }
        ]
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
      detailedSolution: {
        theory: "Klass — obyektning chizmasi (blueprint). Uzum Market kabi yirik elektron tijorat tizimlarida millionlab tovarlar aynan bitta Product klassi asosida Heap xotirada yaratiladi.",
        theoryEn: "A class is an object blueprint. In massive e-commerce systems like Uzum Market, millions of product entities are instantiated on Heap memory using a single clean Product class.",
        cleanCode: `class Product {
    String name;
    double price;
}

class Main {
    public static void main(String[] args) {
        System.out.println("Product klassi yaratildi!");
    }
}`,
        breakdown: [
          "<code>class Product { ... }</code>: Mahsulot ma'lumotlarini saqlovchi yangi tur (klass) e'lon qilinmoqda.",
          "<code>String name;</code>: Tovarning nomi (matnli holat) maydoni.",
          "<code>double price;</code>: Tovarning narxi (haqiqiy son, tiyinlari bilan) maydoni.",
          "<code>System.out.println(...);</code>: Konsolga dastur muvaffaqiyatli ishlaganini bildiruvchi xabar chiqarish."
        ],
        pitfalls: "Maydon nomini kichik harf bilan ('name', 'price') boshlash va to'g'ri tur ('double', 'String') tanlash muhim. 'double' o'rniga 'int' tanlansa, 12.99 narxli tovarlarni saqlab bo'lmaydi.",
        cw2Viva: "Viva imtihonida: 'Class va Object o'rtasidagi farq nima?' degan savol tushadi. Javob: Class — bu xotirada mavjud bo'lmagan shablon; Object — bu Heap xotiradan joy olgan aniq bir nusxa."
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
        keywords: ["new"],
        fields: [
          { name: "name", type: "String" },
          { name: "price", type: "double" }
        ]
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
      detailedSolution: {
        theory: "`new` operatori Heap xotiradan yangi obyekt uchun joy ajratadi va uning xotira manzilini (reference) `p1` yoki `p2` o'zgaruvchisiga biriktiradi. Ikkala obyekt bir-biridan mustaqil yashaydi.",
        theoryEn: "The `new` operator dynamically allocates memory on the Heap and assigns references to `p1` and `p2`. Each instance maintains independent state.",
        cleanCode: `class Product {
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
        breakdown: [
          "<code>Product p1 = new Product();</code>: Heap xotirada 1-tovar yaratildi, p1 uning manzilini ushlab turibdi.",
          "<code>p1.name = \"iPhone 15\";</code>: p1 obyektining name maydoniga qiymat yuklandi.",
          "<code>Product p2 = new Product();</code>: Heap xotirada butunlay boshqa manzilga ega 2-tovar yaratildi.",
          "<code>System.out.println(...)</code>: Har ikkala tovar holati konsolga chop etildi."
        ],
        pitfalls: "Agar `Product p1;` deb e'lon qilib, `new Product()` yozilmasa, `p1` o'zgaruvchisi `null` bo'lib turadi va `p1.name` deyilganda `NullPointerException` otiladi.",
        cw2Viva: "Viva imtihonida: 'Nega p1 va p2 ning narxlari bir-biriga ta'sir qilmaydi?' deb so'ralganda, 'Chunki ular Heap xotirada ikki xil alohida manzilda joylashgan' deb javob beriladi."
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
        keywords: ["this"],
        fields: [
          { name: "name", type: "String" },
          { name: "price", type: "double" }
        ]
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
      detailedSolution: {
        theory: "Konstruktor — obyekt 'tug'ilgan' ondayoq uning barcha zaruriy xususiyatlarini xavfsiz initsializatsiya qiladi. `this` kalit so'zi joriy obyektga ko'rsatkich bo'lib, parametr va maydon nomlari bir xil bo'lganda chalkashlikni yo'qotadi.",
        theoryEn: "Constructors guarantee initialization safety at creation time. `this` refers to the current instance, eliminating variable shadowing.",
        cleanCode: `class Product {
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
        breakdown: [
          "<code>public Product(String name, double price)</code>: Konstruktor nomi klass nomi bilan 100% bir xil bo'ladi va qaytaruvchi turga (void, int) ega bo'lmaydi.",
          "<code>this.name = name;</code>: O'ng tarafdagi `name` — kirib kelgan parametr, chap tarafdagi `this.name` — klassning ichki maydoni.",
          "<code>this.price = price;</code>: Narx maydoniga parametr qiymati yuklandi."
        ],
        pitfalls: "`this.name = name` o'rniga `name = name` deb yozish — parametr o'zini o'ziga tenglashtiradi va maydon o'zgarmasdan null/0.0 bo'lib qoladi.",
        cw2Viva: "Kurs ishida har bir buyurtma (Coffee, Order) parametrli konstruktor orqali xavfsiz yaratilishi shart (Assessment 2 talabi)."
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
      detailedSolution: {
        theory: "Overloading (qayta yuklash) — bir xil nomli, lekin parametrlari soni yoki turlari bilan farq qiluvchi konstruktor yoki metodlar tuzishdir. Bu dasturchiga moslashuvchanlik beradi.",
        theoryEn: "Constructor overloading empowers client code to initialize objects in varied valid states depending on available data.",
        cleanCode: `class Product {
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
        breakdown: [
          "<code>public Product(String name)</code>: Bir parametrli konstruktor — narx kiritilmasa 0.0 qilib qo'yadi.",
          "<code>public Product(String name, double price)</code>: Ikki parametrli to'liq konstruktor.",
          "<code>new Product(...)</code> chaqirilganda Java argumentlar soniga qarab qaysi konstruktorni chaqirishni o'zi avtomatik hal qiladi."
        ],
        pitfalls: "Bir xil parametrlar soni va turlariga ega 2 ta konstruktor yozish mumkin emas (kompilyator ularni ajrata olmaydi).",
        cw2Viva: "O'qituvchi: 'Overloading bilan Overriding o'rtasidagi farq nima?' Overloading — bir sinfda parametrlar farqi (Compile-time); Overriding — merosxo'rlikda ota metodni bola klassda qayta yozish (Runtime)."
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
        // p2 ga p1 ning manzilini bering
        Product p2 = p1;

        // p2 orqali narxni 25.0 qilib o'zgartiring
        p2.price = 25.0;

        // p1.price ni chop eting
        System.out.println("p1 narxi: " + p1.price);
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

        System.out.println("p1 narxi: " + p1.price);
    }
}`,
      detailedSolution: {
        theory: "Java'da primitiv turlar (int, double) qiymat bo'yicha (by value), obyektlar esa havola (by reference) bo'yicha ishlaydi. `p2 = p1` qilinganda yangi obyekt yaratilmaydi, ikkala o'zgaruvchi Heap'dagi bitta obyektga qaraydi.",
        theoryEn: "In Java, assigning an object variable copies the memory address reference, not the object body on the Heap.",
        cleanCode: `class Product {
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
        System.out.println("p1 narxi: " + p1.price);
    }
}`,
        breakdown: [
          "<code>Product p1 = new Product(\"Qahva\", 20.0);</code>: Heap xotirada 1 ta obyekt ochildi, p1 unga ko'rsatmoqda.",
          "<code>Product p2 = p1;</code>: p2 ham xuddi shu Heap manziliga ulandi.",
          "<code>p2.price = 25.0;</code>: O'sha bitta obyektning narxi yangilandi. p1 chaqirilsa ham 25.0 ko'rinadi."
        ],
        pitfalls: "Obyektni klonlash o'rniga shunchaki tenglashtirib qo'yish dasturda kutilmagan Side-Effect xatoliklariga olib keladi.",
        cw2Viva: "Viva savoli: 'Pass-by-value va Pass-by-reference farqi nima?' Java qat'iy Pass-by-value tilidir, lekin obyektlar uzatilganda ularning havolasi qiymat sifatida uzatiladi."
      }
    },
    {
      id: 6,
      title: {
        uz: "6. Metodlar va Xatti-harakat (Behavior)",
        en: "6. Methods & Object Behavior"
      },
      scenario: {
        uz: "Obyekt faqat ma'lumot saqlabgina qolmay, harakatlarni ham bajara olishi kerak. `Product` klassiga `display()` metodini qo'shing. Bu metod tovar nomi va narxini chiroyli formatda konsolga chiqarsin.",
        en: "Objects combine state with behavior. Add a `display()` method to `Product` that prints formatted information about the product to stdout."
      },
      requirements: {
        classes: ["Product"],
        methods: ["display"]
      },
      starterCode: `class Product {
    String name;
    double price;

    public Product(String name, double price) {
        this.name = name;
        this.price = price;
    }

    // display() metodini yarating
    public void display() {
        System.out.println("Mahsulot: " + name + " | Narx: $" + price);
    }
}

class Main {
    public static void main(String[] args) {
        Product p = new Product("Smartfon", 800.0);
        p.display();
    }
}`,
      solution: `class Product {
    String name;
    double price;

    public Product(String name, double price) {
        this.name = name;
        this.price = price;
    }

    public void display() {
        System.out.println("Mahsulot: " + name + " | Narx: $" + price);
    }
}

class Main {
    public static void main(String[] args) {
        Product p = new Product("Smartfon", 800.0);
        p.display();
    }
}`,
      detailedSolution: {
        theory: "OOP ning asosiy mohiyati: ma'lumotlar va ular ustida bajariluvchi amallarni bitta obyekt ichida jamlashdir. display() metodi tovarning ichki holatiga kirib, uni formatlaydi.",
        theoryEn: "Encapsulating state together with its pertinent operations represents the core tenet of object-oriented design.",
        cleanCode: `class Product {
    String name;
    double price;

    public Product(String name, double price) {
        this.name = name;
        this.price = price;
    }

    public void display() {
        System.out.println("Mahsulot: " + name + " | Narx: $" + price);
    }
}

class Main {
    public static void main(String[] args) {
        Product p = new Product("Smartfon", 800.0);
        p.display();
    }
}`,
        breakdown: [
          "<code>public void display()</code>: Hech narsa qaytarmaydigan (void), hamma uchun ochiq (public) metod.",
          "Metod ichida <code>name</code> va <code>price</code> maydonlariga to'g'ridan-to'g'ri murojaat qilinadi."
        ],
        pitfalls: "Metod ichida `static` so'zini yozib qo'yish — natijada u obyekt maydonlariga (`name`, `price`) murojaat qila olmay qoladi.",
        cw2Viva: "Coursework konsol ilovasida har bir buyurtma itemi o'zining tafsilotlarini chiqaruvchi formatlash metodiga ega bo'lishi kerak."
      }
    },
    {
      id: 7,
      title: {
        uz: "7. 'static' Kalit So'zi va Umumiy Hisoblagich",
        en: "7. 'static' Keyword & Shared Counters"
      },
      scenario: {
        uz: "Har bir tovar alohida, lekin do'konda jami nechta tovar yaratilganini bilish kerak. Buning uchun barcha obyektlar uchun umumiy bo'lgan `static int count = 0;` o'zgaruvchisini qo'shing va konstruktorda `count++` qiling.",
        en: "Track total products across all instances. Add a class-level shared `static int count = 0;` incremented inside the constructor."
      },
      requirements: {
        classes: ["Product"],
        keywords: ["static"]
      },
      starterCode: `class Product {
    String name;
    double price;
    // static hisoblagich maydoni qo'shing
    public static int count = 0;

    public Product(String name, double price) {
        this.name = name;
        this.price = price;
        // count ni oshiring
        count++;
    }
}

class Main {
    public static void main(String[] args) {
        Product p1 = new Product("T-Shirt", 20.0);
        Product p2 = new Product("Jeans", 50.0);
        Product p3 = new Product("Cap", 15.0);

        System.out.println("Jami mahsulotlar soni: " + Product.count);
    }
}`,
      solution: `class Product {
    String name;
    double price;
    public static int count = 0;

    public Product(String name, double price) {
        this.name = name;
        this.price = price;
        count++;
    }
}

class Main {
    public static void main(String[] args) {
        Product p1 = new Product("T-Shirt", 20.0);
        Product p2 = new Product("Jeans", 50.0);
        Product p3 = new Product("Cap", 15.0);

        System.out.println("Jami mahsulotlar soni: " + Product.count);
    }
}`,
      detailedSolution: {
        theory: "`static` modifikatori maydonni obyektga emas, bevosita klassga bog'laydi. U Metaspace/Classloader xotirasida bitta nusxada saqlanadi va barcha obyektlar bu maydondan birgalikda foydalanadi.",
        theoryEn: "`static` members belong to the class blueprint itself, shared across all instantiated instances.",
        cleanCode: `class Product {
    String name;
    double price;
    public static int count = 0;

    public Product(String name, double price) {
        this.name = name;
        this.price = price;
        count++;
    }
}

class Main {
    public static void main(String[] args) {
        Product p1 = new Product("T-Shirt", 20.0);
        Product p2 = new Product("Jeans", 50.0);
        Product p3 = new Product("Cap", 15.0);

        System.out.println("Jami mahsulotlar soni: " + Product.count);
    }
}`,
        breakdown: [
          "<code>public static int count = 0;</code>: Klass xotirasida bitta bo'lgan umumiy sanagich.",
          "<code>count++;</code>: Har gal yangi tovar yaratilganda sanagich 1 taga oshadi.",
          "<code>Product.count</code>: Obyekt nomisiz to'g'ridan-to'g'ri klass nomi orqali murojaat qilinadi."
        ],
        pitfalls: "Obyektga xos bo'lgan maydonlarni (narx, balans) adashib static qilib qo'yish butun dasturni buzadi.",
        cw2Viva: "Viva savoli: 'Static metod ichidan non-static maydonga nega murojaat qilib bo'lmaydi?' Chunki static metod ishlaganda hali birorta obyekt yaratilmagan bo'lishi mumkin!"
      }
    },
    {
      id: 8,
      title: {
        uz: "8. 'final' va O'zgarmas Maydonlar (Immutability)",
        en: "8. 'final' Keyword & Immutable Fields"
      },
      scenario: {
        uz: "Har bir tovarning unikal identifikatori (id) bo'lishi va u bir marta berilgach qayta o'zgarmasligi shart. `Product` klassida `final int id;` maydonini e'lon qiling va uni konstruktor orqali initsializatsiya qiling.",
        en: "Ensure data integrity by making identity immutable. Declare `final int id;` initialized strictly via constructor."
      },
      requirements: {
        classes: ["Product"],
        keywords: ["final"]
      },
      starterCode: `class Product {
    // final maydon: id
    final int id;
    String name;
    double price;

    public Product(int id, String name, double price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class Main {
    public static void main(String[] args) {
        Product p = new Product(101, "Monitor", 300.0);
        System.out.println("ID: " + p.id + ", Nomi: " + p.name);
    }
}`,
      solution: `class Product {
    final int id;
    String name;
    double price;

    public Product(int id, String name, double price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class Main {
    public static void main(String[] args) {
        Product p = new Product(101, "Monitor", 300.0);
        System.out.println("ID: " + p.id + ", Nomi: " + p.name);
    }
}`,
      detailedSolution: {
        theory: "`final` kalit so'zi o'zgaruvchini konstantaga aylantiradi. Uni faqat e'lon qilinganda yoki konstruktor ichida 1 marta o'zlashtirish mumkin. Bu ma'lumotlar butunligini (data integrity) kafolatlaydi.",
        theoryEn: "The `final` keyword secures state by enforcing write-once immutability, eliminating accidental state mutations.",
        cleanCode: `class Product {
    final int id;
    String name;
    double price;

    public Product(int id, String name, double price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class Main {
    public static void main(String[] args) {
        Product p = new Product(101, "Monitor", 300.0);
        System.out.println("ID: " + p.id + ", Nomi: " + p.name);
    }
}`,
        breakdown: [
          "<code>final int id;</code>: Bir marta qiymat olgach, qayta o'zgartirib bo'lmaydigan maydon.",
          "<code>this.id = id;</code>: Konstruktorda qiymat biriktirildi. Boshqa hech qaysi metodda `p.id = 200` qilib bo'lmaydi."
        ],
        pitfalls: "Final maydonga konstruktorda qiymat berishni unutib qoldirsangiz, Java kompilyatori 'variable id might not have been initialized' xatosini beradi.",
        cw2Viva: "Kurs ishida buyurtma ID raqamlari va yaratilgan vaqti (timestamp) doim `final` qilib belgilanadi."
      }
    },
    {
      id: 9,
      title: {
        uz: "9. NullPointerException dan Himoyalanish",
        en: "9. Defensive Null Checking"
      },
      scenario: {
        uz: "Clean Code qoidasi: hech qachon obyektning null emasligini tekshirmasdan uning metodini chaqirmang! `printProductSafe(Product p)` metodini yozing, agar `p != null` bo'lsa nomini, aks holda 'Mahsulot yo'q' deb chiqarsin.",
        en: "Defensive null-checking is essential. Implement a null-safe method verifying references before member dereferencing."
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
        // null tekshiruvini qo'shing
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
      detailedSolution: {
        theory: "NullPointerException — Java olamidagi eng mashhur xato (Tony Hoare: 'Billion Dollar Mistake'). Har qanday obyekt havolasini ishlatishdan oldin uning mavjudligini tekshirish dastur barqarorligining ustunidir.",
        theoryEn: "Defensive programming prevents unexpected runtime crashes by validating parameter references before invocation.",
        cleanCode: `class Product {
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
        breakdown: [
          "<code>if (p != null)</code>: Havola bo'sh emasligini kafolatlaydi.",
          "Agar p null bo'lsa, xatolik berib qulamasdan xavfsiz else bloki ishlaydi."
        ],
        pitfalls: "Agar `p.name` ni tekshiruvsiz chaqirsangiz va p null bo'lsa, dastur butunlay to'xtaydi.",
        cw2Viva: "Viva imtihonida konsol ilovangizda noto'g'ri qiymat kiritilganda dastur qulab tushmasligi (Exception Handling) 6 ball beradi."
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
        constructors: ["Coffee"],
        fields: [
          { name: "type", type: "String" },
          { name: "size", type: "String" },
          { name: "basePrice", type: "double" }
        ]
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
      detailedSolution: {
        theory: "Tabriklaymiz! Siz 1-Modulning barcha Java Core konseptlarini egalladingiz va Westminster CW2 Coursework talabidagi konsol qahvaxona buyurtmasi modelini muvaffaqiyatli qura oldingiz!",
        theoryEn: "Congratulations! You have mastered Java Core, memory mechanics, and laid the first architectural model for the WIUT CW2 50% Coursework application.",
        cleanCode: `class Coffee {
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
        breakdown: [
          "<code>class Coffee</code>: Kurs ishining asosiy domen modeli.",
          "<code>String type, size; double basePrice;</code>: Ichimlik holat parametrlari.",
          "<code>displayOrder()</code>: Konsol menyusida buyurtma chekini ko'rsatish metodi."
        ],
        pitfalls: "2-modulda ushbu maydonlar 'private' qilinadi va inkapsulyatsiya qat'iy joriy etiladi.",
        cw2Viva: "Bu klass 2-haftadan 6-haftagacha Factory Method, Decorator va Strategy patternlari bilan to'liq kurs ishi darajasiga yetkaziladi."
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
    const elSolutionCard = document.getElementById("solutionContentCard");
    const elToggleHint = document.getElementById("solutionToggleHint");

    if (elBadge) elBadge.textContent = `1-Modul • ${ch.id}-Topshiriq`;
    if (elTitle) elTitle.textContent = ch.title[currentLang];
    if (elScenario) elScenario.textContent = ch.scenario[currentLang];

    // Render Rich Solution View via SolutionRenderer
    if (window.SolutionRenderer) {
      window.SolutionRenderer.render(ch, "solutionContentCard", currentLang);
    }
    if (elSolutionCard) elSolutionCard.style.display = "none";
    if (elToggleHint) elToggleHint.textContent = "[Ko'rish ▾]";

    // Update requirements list
    const reqList = document.getElementById("taskReqList");
    if (reqList) {
      let reqHtml = "";
      if (ch.requirements.classes) {
        reqHtml += `<li><strong>Klasslar:</strong> <code>${ch.requirements.classes.join(", ")}</code> sinfi e'lon qilinishi shart.</li>`;
      }
      if (ch.requirements.fields) {
        const fieldStr = ch.requirements.fields.map(f => `<code>${f.type} ${f.name}</code>`).join(", ");
        reqHtml += `<li><strong>Maydonlar:</strong> ${fieldStr} maydonlari to'g'ri turda yozilsin.</li>`;
      }
      if (ch.requirements.privateFields) {
        reqHtml += `<li><strong>Inkapsulyatsiya:</strong> <code>${ch.requirements.privateFields.join(", ")}</code> maydonlari <code>private</code> bo'lsin.</li>`;
      }
      if (ch.requirements.methods && ch.requirements.methods.length > 0) {
        reqHtml += `<li><strong>Metodlar:</strong> <code>${ch.requirements.methods.join("(), ")}()</code> metodi yaratilsin.</li>`;
      }
      if (ch.requirements.constructors) {
        reqHtml += `<li><strong>Konstruktor:</strong> <code>${ch.requirements.constructors.join(", ")}</code> klassi uchun konstruktor tuzilsin.</li>`;
      }
      if (ch.requirements.keywords) {
        reqHtml += `<li><strong>Kalit so'zlar:</strong> <code>${ch.requirements.keywords.join(", ")}</code> qo'llanilishi kerak.</li>`;
      }
      reqHtml += `<li>Sintaksis xatolarisiz va Clean Code qoidalariga mos yozing.</li>`;
      reqList.innerHTML = reqHtml;
    }

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

  // 4. Code Execution & Testing with Line-by-Line Diagnostics
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

  // 5. Setup Event Listeners
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
        setTimeout(() => {
          if (window.UMLRenderer && window.UMLRenderer.fitToView) {
            window.UMLRenderer.fitToView("umlContainer");
          }
        }, 60);
      });
    }

    // Action buttons
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
      if (currentQIndex < CHALLENGES.length - 1) {
        switchChallenge(currentQIndex + 1);
      }
    });

    if (btnToggleSol) btnToggleSol.addEventListener("click", () => {
      const card = document.getElementById("solutionContentCard");
      if (card) {
        const isHidden = card.style.display === "none";
        card.style.display = isHidden ? "block" : "none";
        if (elToggleHint) {
          elToggleHint.textContent = isHidden ? "[Yopish ▴]" : "[Ko'rish ▾]";
        }
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
