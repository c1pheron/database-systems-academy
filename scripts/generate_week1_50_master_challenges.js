// ============================================================================
// GENERATOR: 50 BESPOKE PROGRESSIVE OOP CHALLENGES (WEEK 1)
// WIUT 5COSC018C • Senior Java Architect (Professor Ada)
// 5 Stages x 10 Distinct, Standalone, Non-Repetitive Challenges (Easy -> Hard)
// ============================================================================

const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '..', 'oop', 'shared', 'challenges-w1.js');
const mirrorPath = 'C:\\Users\\Ravshanbek\\Documents\\WIUT\\OOP\\oop-academy\\shared\\challenges-w1.js';

const challenges = [
  // ==========================================================================
  // 1-BOSQICH (1–10): KLASSLAR, MAYDONLAR VA TIP TIZIMI (FOUNDATIONS)
  // ==========================================================================
  {
    id: 1,
    tier: 1,
    tierName: "1-Bosqich: Klasslar va Maydonlar",
    sector: "1-10",
    title: {
      uz: "1. Uzum Market — 'Product' Klassi va Birlamchi Maydonlar",
      en: "1. Uzum Market — 'Product' Class & Primitive Fields"
    },
    scenario: {
      uz: "Uzum Market elektron tijorat platformasida har bir mahsulotni ifodalash uchun shablon (klass) kerak. 'Product' klassini yarating: 'title' (String), 'price' (double), va 'inStock' (boolean) maydonlari bo'lsin. 'Main' metodida bitta Product ob'yektini yarating va uning qiymatlarini chop eting.",
      en: "In Uzum Market, define a 'Product' class with three fields: 'title' (String), 'price' (double), and 'inStock' (boolean). Instantiate one Product in 'Main' and print its state."
    },
    requirements: {
      classes: ["Product", "Main"],
      fields: [
        { name: "title", type: "String" },
        { name: "price", type: "double" },
        { name: "inStock", type: "boolean" }
      ]
    },
    starterCode: `// 1. Product klassini e'lon qiling
class Product {
    // title (String), price (double), inStock (boolean) maydonlarini yozing
    
}

class Main {
    public static void main(String[] args) {
        // Product ob'yektini new orqali yarating va maydonlariga qiymat bering
        
    }
}`,
    solution: `class Product {
    String title;
    double price;
    boolean inStock;
}

class Main {
    public static void main(String[] args) {
        Product p = new Product();
        p.title = "Smartfon Redmi Note 13";
        p.price = 2450000.0;
        p.inStock = true;

        System.out.println("Mahsulot: " + p.title + " | Narxi: " + p.price + " so'm | Mavjud: " + p.inStock);
    }
}`,
    detailedSolution: {
      theory: "Java dasturlash tilida har qanday ob'yekt klass chizmasi (blueprint) asosida Heap xotirada joylashadi. 'new' operatori Heap xotiradan yangi xotira bloki ajratadi va maydonlar o'z turlarining birlamchi qiymatlariga (null, 0.0, false) ega bo'ladi.",
      theoryEn: "In Java, an object is instantiated on the Heap based on a class blueprint. The 'new' keyword allocates memory and initializes fields to default values.",
      cleanCode: "class Product {\n    String title;\n    double price;\n    boolean inStock;\n}",
      breakdown: [
        "<code>class Product</code>: Mahsulot uchun model shabloni.",
        "<code>String title; double price; boolean inStock;</code>: Ob'yektning holatini (state) belgilovchi 3 xil turdagi maydonlar.",
        "<code>Product p = new Product();</code>: Heap xotirada yangi nusxa (instance) yaratish."
      ],
      pitfalls: "Maydon nomlarida harflar katta-kichikligiga (case-sensitive) qat'iy rioya qiling: 'instock' emas, 'inStock'.",
      cw2Tip: "CW2 Console Order Application doirasida har bir tovar aynan shunday xususiyatlarga ega bo'ladi."
    }
  },

  {
    id: 2,
    tier: 1,
    tierName: "1-Bosqich: Klasslar va Maydonlar",
    sector: "1-10",
    title: {
      uz: "2. WIUT Portal — 'Student' Klassi va Heap Xotiradagi Alohida Obyektlar",
      en: "2. WIUT Portal — 'Student' Class & Multiple Heap Instances"
    },
    scenario: {
      uz: "WIUT talabalar portalida har bir talabaning o'z mustaqil ma'lumotlari bo'ladi. 'Student' klassini tuzing: 'fullName' (String), 'idNumber' (int), 'gpa' (double). Main metodida 2 ta alohida talaba ob'yektini ('s1' va 's2') yarating va ikkalasining GPA ko'rsatkichini solishtirib, yuqoriroq ball olgan talabaning ismini chop eting.",
      en: "In WIUT Portal, model a 'Student' with 'fullName' (String), 'idNumber' (int), and 'gpa' (double). Instantiate two students 's1' and 's2' in Heap memory and print the name of the student with the higher GPA."
    },
    requirements: {
      classes: ["Student", "Main"],
      fields: [
        { name: "fullName", type: "String" },
        { name: "idNumber", type: "int" },
        { name: "gpa", type: "double" }
      ]
    },
    starterCode: `class Student {
    // fullName (String), idNumber (int), gpa (double) maydonlarini e'lon qiling
    
}

class Main {
    public static void main(String[] args) {
        // s1 va s2 talabalarini yarating, qiymatlar bering va GPA larni solishtiring
        
    }
}`,
    solution: `class Student {
    String fullName;
    int idNumber;
    double gpa;
}

class Main {
    public static void main(String[] args) {
        Student s1 = new Student();
        s1.fullName = "Jasur Aliyev";
        s1.idNumber = 1001;
        s1.gpa = 3.8;

        Student s2 = new Student();
        s2.fullName = "Madina Karimova";
        s2.idNumber = 1002;
        s2.gpa = 3.95;

        if (s1.gpa > s2.gpa) {
            System.out.println("Yuqori GPA: " + s1.fullName + " (" + s1.gpa + ")");
        } else {
            System.out.println("Yuqori GPA: " + s2.fullName + " (" + s2.gpa + ")");
        }
    }
}`,
    detailedSolution: {
      theory: "'s1' va 's2' Stack xotirada turli ko'rsatkichlar (references) bo'lib, Heap xotiradagi mutlaqo alohida ikki manzilga ishora qiladi. Bitta ob'yekt maydonining o'zgarishi ikkinchisiga ta'sir qilmaydi.",
      theoryEn: "'s1' and 's2' are reference variables on the Stack pointing to two separate memory allocations on the Heap.",
      cleanCode: "Student s1 = new Student();\nStudent s2 = new Student();",
      breakdown: [
        "<code>Student</code> klassi shablon vazifasini bajaradi.",
        "Har bir chaqirilgan <code>new Student()</code> alohida nusxa yaratadi.",
        "Maydonlarga nuqta (<code>.</code>) operatori orqali kirib, solishtirish shartlari bajariladi."
      ],
      pitfalls: "Obyekt yaratmasdan (ya'ni `Student s1;` deb qoldirib) uning maydoniga murojaat qilish NullPointerException keltirib chiqaradi.",
      cw2Tip: "Guruh loyihangizda bir nechta mijoz yoki tovarlarni massiv yoki ro'yxatda saqlash uchun ushbu poydevor zarur."
    }
  },

  {
    id: 3,
    tier: 1,
    tierName: "1-Bosqich: Klasslar va Maydonlar",
    sector: "1-10",
    title: {
      uz: "3. Yandex Go — 'TaxiTrip' va Maydonlar Asosida Hisob-Kitob",
      en: "3. Yandex Go — 'TaxiTrip' & State-Driven Calculations"
    },
    scenario: {
      uz: "Yandex Go taksi safarini hisoblash tizimi. 'TaxiTrip' klassini e'lon qiling: 'driverName' (String), 'distanceKm' (double), 'ratePerKm' (double). Main metodida safar ob'yektini yarating va umumiy yo'l haqini ('distanceKm * ratePerKm') hisoblab ekranga chiqaring.",
      en: "In Yandex Go, create a 'TaxiTrip' class with 'driverName' (String), 'distanceKm' (double), and 'ratePerKm' (double). Calculate total fare in Main."
    },
    requirements: {
      classes: ["TaxiTrip", "Main"],
      fields: [
        { name: "driverName", type: "String" },
        { name: "distanceKm", type: "double" },
        { name: "ratePerKm", type: "double" }
      ]
    },
    starterCode: `class TaxiTrip {
    // driverName (String), distanceKm (double), ratePerKm (double)
    
}

class Main {
    public static void main(String[] args) {
        // TaxiTrip yaratib, umumiy yo'l haqini hisoblang
        
    }
}`,
    solution: `class TaxiTrip {
    String driverName;
    double distanceKm;
    double ratePerKm;
}

class Main {
    public static void main(String[] args) {
        TaxiTrip trip = new TaxiTrip();
        trip.driverName = "Otabek";
        trip.distanceKm = 12.5;
        trip.ratePerKm = 3500.0;

        double totalFare = trip.distanceKm * trip.ratePerKm;
        System.out.println("Haydovchi: " + trip.driverName + " | Jami yo'l haqi: " + totalFare + " so'm");
    }
}`,
    detailedSolution: {
      theory: "Klass maydonlaridagi qiymatlar ob'yektning holatini (state) ifodalaydi. Ushbu holat asosida tashqarida arifmetik amallar bajarish orqali hisoblangan natijalar olinadi.",
      theoryEn: "Fields hold the internal state of an instance. Main can access these states to perform arithmetic calculations.",
      cleanCode: "double totalFare = trip.distanceKm * trip.ratePerKm;",
      breakdown: [
        "Maydonlar to'g'ri turda e'lon qilingan: masofa va tarif double bo'lishi aniqlik beradi.",
        "Hisoblangan qiymat yangi mahalliy o'zgaruvchida saqlanadi."
      ],
      pitfalls: "Butun sonlar bilan ishlashda int bo'linishi (integer division) natijani yaxlitlab xato berishi mumkin, shuning uchun narx va masofalarda doim double ishlatiladi.",
      cw2Tip: "Savdo kvitansiyalarini hisoblashda ushbu arifmetika qoidalari qo'llaniladi."
    }
  },

  {
    id: 4,
    tier: 1,
    tierName: "1-Bosqich: Klasslar va Maydonlar",
    sector: "1-10",
    title: {
      uz: "4. Payme Wallet — 'Transaction' va Holat Flaglari (State Flags)",
      en: "4. Payme Wallet — 'Transaction' & State Flags"
    },
    scenario: {
      uz: "Payme to'lov tizimida har bir pul o'tkazmasi o'z statusiga ega. 'Transaction' klassini tuzing: 'txnId' (String), 'amount' (double), 'isCompleted' (boolean), 'senderPhone' (String). Agar tranzaksiya yakunlangan bo'lsa ('isCompleted == true'), 'Muvaffaqiyatli', aks holda 'Kutilmoqda' xabarini chiqaring.",
      en: "In Payme, create a 'Transaction' class with 'txnId' (String), 'amount' (double), 'isCompleted' (boolean), and 'senderPhone' (String). Check status in Main."
    },
    requirements: {
      classes: ["Transaction", "Main"],
      fields: [
        { name: "txnId", type: "String" },
        { name: "amount", type: "double" },
        { name: "isCompleted", type: "boolean" },
        { name: "senderPhone", type: "String" }
      ]
    },
    starterCode: `class Transaction {
    // txnId (String), amount (double), isCompleted (boolean), senderPhone (String)
    
}

class Main {
    public static void main(String[] args) {
        // Transaction ob'yektini tekshiring
        
    }
}`,
    solution: `class Transaction {
    String txnId;
    double amount;
    boolean isCompleted;
    String senderPhone;
}

class Main {
    public static void main(String[] args) {
        Transaction tx = new Transaction();
        tx.txnId = "TXN-884129";
        tx.amount = 150000.0;
        tx.isCompleted = true;
        tx.senderPhone = "+998901234567";

        String status = tx.isCompleted ? "Muvaffaqiyatli" : "Kutilmoqda";
        System.out.println("ID: " + tx.txnId + " | Miqdor: " + tx.amount + " | Holat: " + status);
    }
}`,
    detailedSolution: {
      theory: "Mantiqiy maydonlar (boolean flags) tizimda jarayonlarning hozirgi bosqichini belgilaydi va dastur oqimini (control flow) boshqarishda asosiy vosita hisoblanadi.",
      theoryEn: "Boolean state flags capture system lifecycle states and direct control flow via conditionals.",
      cleanCode: "boolean isCompleted;\nString status = tx.isCompleted ? \"Muvaffaqiyatli\" : \"Kutilmoqda\";",
      breakdown: [
        "<code>isCompleted</code> maydoni to'lov holatini saqlaydi.",
        "Ternar operator orqali qisqa va toza mantiq yozildi."
      ],
      pitfalls: "boolean maydonlar birlamchi qiymati false bo'ladi, buni esdan chiqarmang.",
      cw2Tip: "Buyurtmaning to'langan yoki bekor qilinganligini kuzatish uchun `isPaid` flagi shart."
    }
  },

  {
    id: 5,
    tier: 1,
    tierName: "1-Bosqich: Klasslar va Maydonlar",
    sector: "1-10",
    title: {
      uz: "5. Cloud Server — 'ServerNode' va Xotira Bandlik Monitoringi",
      en: "5. Cloud Server — 'ServerNode' & Resource Utilization"
    },
    scenario: {
      uz: "Cloud hosting tizimida server xotirasini monitoring qilish talab etiladi. 'ServerNode' klassini e'lon qiling: 'hostName' (String), 'totalRamMb' (int), 'usedRamMb' (int). Bo'sh qolgan RAM miqdorini ('totalRamMb - usedRamMb') hamda foiz hisobidagi bandlik darajasini hisoblab chiqaring.",
      en: "In Cloud Server infrastructure, model a 'ServerNode' with 'hostName' (String), 'totalRamMb' (int), and 'usedRamMb' (int). Compute free RAM and memory usage percentage."
    },
    requirements: {
      classes: ["ServerNode", "Main"],
      fields: [
        { name: "hostName", type: "String" },
        { name: "totalRamMb", type: "int" },
        { name: "usedRamMb", type: "int" }
      ]
    },
    starterCode: `class ServerNode {
    // hostName (String), totalRamMb (int), usedRamMb (int)
    
}

class Main {
    public static void main(String[] args) {
        // ServerNode ob'yektini yarating va bo'sh xotirani hisoblang
        
    }
}`,
    solution: `class ServerNode {
    String hostName;
    int totalRamMb;
    int usedRamMb;
}

class Main {
    public static void main(String[] args) {
        ServerNode node = new ServerNode();
        node.hostName = "prod-node-01.wiut.uz";
        node.totalRamMb = 16384;
        node.usedRamMb = 12288;

        int freeRamMb = node.totalRamMb - node.usedRamMb;
        double usagePct = ((double) node.usedRamMb / node.totalRamMb) * 100.0;

        System.out.println("Server: " + node.hostName);
        System.out.println("Bo'sh RAM: " + freeRamMb + " MB | Bandlik: " + usagePct + "%");
    }
}`,
    detailedSolution: {
      theory: "Tur o'zgartirish (type casting) orqali `(double) node.usedRamMb` qilinmasa, int bo'linishi sodir bo'lib, kasr qism yo'qoladi va natija noto'g'ri bo'ladi.",
      theoryEn: "Explicit casting to double ensures floating point division without truncation.",
      cleanCode: "double usagePct = ((double) node.usedRamMb / node.totalRamMb) * 100.0;",
      breakdown: [
        "Server parametrlarini ifodalovchi butun sonli maydonlar e'lon qilindi.",
        "Hisoblashda casting to'g'ri qo'llanildi."
      ],
      pitfalls: "Nolga bo'lish (Division by zero) holatlariga doim e'tibor qarating.",
      cw2Tip: "Kompyuter resurslarini to'g'ri hisoblash Java Core dasturchisi uchun shart."
    }
  },

  {
    id: 6,
    tier: 1,
    tierName: "1-Bosqich: Klasslar va Maydonlar",
    sector: "1-10",
    title: {
      uz: "6. UzAirways — 'FlightBooking' va Chipta Shartli Formati",
      en: "6. UzAirways — 'FlightBooking' & Conditional Formatting"
    },
    scenario: {
      uz: "UzAirways aviakompaniyasining reys chiptasi. 'FlightBooking' klassini yarating: 'flightCode' (String), 'passengerName' (String), 'seatNumber' (int), 'isBusinessClass' (boolean). Chiptani tekshiring: agar biznes-klass bo'lsa, 'VIP Lounge ruxsati bor', oddiy klass bo'lsa 'Standart joy' deb chop etilsin.",
      en: "In UzAirways, model 'FlightBooking' with 'flightCode' (String), 'passengerName' (String), 'seatNumber' (int), and 'isBusinessClass' (boolean). Format ticket perks in Main."
    },
    requirements: {
      classes: ["FlightBooking", "Main"],
      fields: [
        { name: "flightCode", type: "String" },
        { name: "passengerName", type: "String" },
        { name: "seatNumber", type: "int" },
        { name: "isBusinessClass", type: "boolean" }
      ]
    },
    starterCode: `class FlightBooking {
    // flightCode (String), passengerName (String), seatNumber (int), isBusinessClass (boolean)
    
}

class Main {
    public static void main(String[] args) {
        // FlightBooking ob'yektini yarating va VIP statusini chop eting
        
    }
}`,
    solution: `class FlightBooking {
    String flightCode;
    String passengerName;
    int seatNumber;
    boolean isBusinessClass;
}

class Main {
    public static void main(String[] args) {
        FlightBooking booking = new FlightBooking();
        booking.flightCode = "HY-101";
        booking.passengerName = "Akmal Nazarov";
        booking.seatNumber = 3;
        booking.isBusinessClass = true;

        System.out.println("Reys: " + booking.flightCode + " | Yo'lovchi: " + booking.passengerName);
        if (booking.isBusinessClass) {
            System.out.println("Joy: #" + booking.seatNumber + " (Biznes-klass • VIP Lounge ruxsati bor)");
        } else {
            System.out.println("Joy: #" + booking.seatNumber + " (Standart joy)");
        }
    }
}`,
    detailedSolution: {
      theory: "Ob'yekt maydonlari murakkab biznes shartlarini tekshirish uchun ma'lumotlar bazasi vazifasini bajaradi.",
      theoryEn: "Fields act as the authoritative state container evaluated by conditional logic.",
      cleanCode: "if (booking.isBusinessClass) { ... }",
      breakdown: [
        "Aviachiptaning xususiyatlari to'liq ifodalandi.",
        "Mantiqiy maydon asosida VIP xizmatlar ajratildi."
      ],
      pitfalls: "boolean o'zgaruvchilarni if ichida `isBusinessClass == true` deb yozish shart emas, `if (isBusinessClass)` yetarli.",
      cw2Tip: "Foydalanuvchi huquqlari (Admin/User) ham xuddi shunday tekshiriladi."
    }
  },

  {
    id: 7,
    tier: 1,
    tierName: "1-Bosqich: Klasslar va Maydonlar",
    sector: "1-10",
    title: {
      uz: "7. Korzinka Supermarket — 'InventoryItem' va Zaxira Qoldig'i Ogohlantirishi",
      en: "7. Korzinka Supermarket — 'InventoryItem' & Low Stock Alert"
    },
    scenario: {
      uz: "Korzinka supermarket omborida tovarlar qoldig'i kamayib ketganda avtomatik ogohlantirish berilishi kerak. 'InventoryItem' klassini tuzing: 'skuCode' (String), 'itemName' (String), 'quantity' (int), 'minThreshold' (int). Agar 'quantity <= minThreshold' bo'lsa, 'DIQQAT: Qayta buyurtma bering!', aks holda 'Zaxira yetarli' xabarini bering.",
      en: "In Korzinka Supermarket inventory, model 'InventoryItem' with 'skuCode' (String), 'itemName' (String), 'quantity' (int), and 'minThreshold' (int). Trigger low stock warning."
    },
    requirements: {
      classes: ["InventoryItem", "Main"],
      fields: [
        { name: "skuCode", type: "String" },
        { name: "itemName", type: "String" },
        { name: "quantity", type: "int" },
        { name: "minThreshold", type: "int" }
      ]
    },
    starterCode: `class InventoryItem {
    // skuCode (String), itemName (String), quantity (int), minThreshold (int)
    
}

class Main {
    public static void main(String[] args) {
        // Tovar qoldig'ini tekshiring va ogohlantirish chiqaring
        
    }
}`,
    solution: `class InventoryItem {
    String skuCode;
    String itemName;
    int quantity;
    int minThreshold;
}

class Main {
    public static void main(String[] args) {
        InventoryItem item = new InventoryItem();
        item.skuCode = "SKU-99214";
        item.itemName = "Sut 1.5L Musaffo";
        item.quantity = 4;
        item.minThreshold = 10;

        System.out.println("Tovar: " + item.itemName + " | Qoldiq: " + item.quantity + " dona");
        if (item.quantity <= item.minThreshold) {
            System.out.println("DIQQAT: Qayta buyurtma bering! Qoldiq chegaradan kam (" + item.quantity + " <= " + item.minThreshold + ")");
        } else {
            System.out.println("Holat: Zaxira yetarli.");
        }
    }
}`,
    detailedSolution: {
      theory: "Biznes ilovalarida chegaraviy shartlar (threshold checks) doimiy ravishda ob'yekt maydonlari o'rtasida solishtiriladi.",
      theoryEn: "Threshold comparisons evaluate system capacity limits directly on instance state.",
      cleanCode: "if (item.quantity <= item.minThreshold) { ... }",
      breakdown: [
        "Ombor mahsulotining SKU kodi va soni saqlandi.",
        "Minimal chegara bilan taqqoslab ogohlantirish berildi."
      ],
      pitfalls: "Tenglik belgisini unutib faqat `<` yozish minimal miqdorda ogohlantirish chiqmay qolishiga olib kelishi mumkin.",
      cw2Tip: "CW2 Console ilovangizda mahsulot soni 0 ga tushib qolmasligini nazorat qilishda bu usul zarur."
    }
  },

  {
    id: 8,
    tier: 1,
    tierName: "1-Bosqich: Klasslar va Maydonlar",
    sector: "1-10",
    title: {
      uz: "8. Medion Clinic — 'MedicalRecord' va Bemorning Vital Ko'rsatkichlari",
      en: "8. Medion Clinic — 'MedicalRecord' & Vital Health Metrics"
    },
    scenario: {
      uz: "Medion klinikasida bemorning qon bosimi va harorati nazorat qilinadi. 'MedicalRecord' klassini yarating: 'patientName' (String), 'systolicPressure' (int), 'diastolicPressure' (int), 'bodyTemp' (double). Agar 'systolicPressure >= 140' yoki 'diastolicPressure >= 90' bo'lsa 'Gipertoniya xavfi', aks holda 'Bosim me'yorda' deb xulosa chiqaring.",
      en: "In Medion Clinic, model 'MedicalRecord' with 'patientName' (String), 'systolicPressure' (int), 'diastolicPressure' (int), and 'bodyTemp' (double). Evaluate blood pressure status."
    },
    requirements: {
      classes: ["MedicalRecord", "Main"],
      fields: [
        { name: "patientName", type: "String" },
        { name: "systolicPressure", type: "int" },
        { name: "diastolicPressure", type: "int" },
        { name: "bodyTemp", type: "double" }
      ]
    },
    starterCode: `class MedicalRecord {
    // patientName (String), systolicPressure (int), diastolicPressure (int), bodyTemp (double)
    
}

class Main {
    public static void main(String[] args) {
        // MedicalRecord ob'yektini tekshiring
        
    }
}`,
    solution: `class MedicalRecord {
    String patientName;
    int systolicPressure;
    int diastolicPressure;
    double bodyTemp;
}

class Main {
    public static void main(String[] args) {
        MedicalRecord record = new MedicalRecord();
        record.patientName = "Sanjar Jo'rayev";
        record.systolicPressure = 145;
        record.diastolicPressure = 92;
        record.bodyTemp = 36.6;

        System.out.println("Bemor: " + record.patientName + " | Tana harorati: " + record.bodyTemp + "°C");
        if (record.systolicPressure >= 140 || record.diastolicPressure >= 90) {
            System.out.println("Xulosa: Gipertoniya xavfi (" + record.systolicPressure + "/" + record.diastolicPressure + ")");
        } else {
            System.out.println("Xulosa: Bosim me'yorda.");
        }
    }
}`,
    detailedSolution: {
      theory: "Mantiqiy 'yoki' (||) va 'va' (&&) operatorlari bir nechta maydonlarni birlashtirib, murakkab domenga oid tahlillar o'tkazish imkonini beradi.",
      theoryEn: "Logical disjunction (||) evaluates multiple state variables to determine medical risk conditions.",
      cleanCode: "if (record.systolicPressure >= 140 || record.diastolicPressure >= 90)",
      breakdown: [
        "Sistolik va diastolik bosim int turlarida saqlandi.",
        "Qon bosimi xalqaro me'yorlari asosida xulosa berildi."
      ],
      pitfalls: "Mantiqiy shartlarda qavslar ketma-ketligini to'g'ri qo'llash mantiqiy xatoliklarni oldini oladi.",
      cw2Tip: "Biznes qoidalari har doim bir nechta maydonlarning kombinatsiyasiga tayanadi."
    }
  },

  {
    id: 9,
    tier: 1,
    tierName: "1-Bosqich: Klasslar va Maydonlar",
    sector: "1-10",
    title: {
      uz: "9. BYD Auto — 'VehicleTelemetry' va Elektromobil Zaxira Masofasi",
      en: "9. BYD Auto — 'VehicleTelemetry' & Electric Range Estimation"
    },
    scenario: {
      uz: "BYD elektromobilining telemetriya tizimi. 'Vehicle' klassini tuzing: 'vin' (String), 'batteryCapacityKwh' (double), 'currentChargeKwh' (double), 'consumptionPer100Km' (double). Qolgan quvvat bilan avtomobil yana necha kilometr masofani bosib o'tishini hisoblang: '(currentChargeKwh / consumptionPer100Km) * 100.0'.",
      en: "In BYD Auto telemetry, model 'Vehicle' with 'vin' (String), 'batteryCapacityKwh' (double), 'currentChargeKwh' (double), and 'consumptionPer100Km' (double). Compute estimated driving range."
    },
    requirements: {
      classes: ["Vehicle", "Main"],
      fields: [
        { name: "vin", type: "String" },
        { name: "batteryCapacityKwh", type: "double" },
        { name: "currentChargeKwh", type: "double" },
        { name: "consumptionPer100Km", type: "double" }
      ]
    },
    starterCode: `class Vehicle {
    // vin (String), batteryCapacityKwh (double), currentChargeKwh (double), consumptionPer100Km (double)
    
}

class Main {
    public static void main(String[] args) {
        // Vehicle ob'yektini yarating va zaxira masofasini (km) hisoblang
        
    }
}`,
    solution: `class Vehicle {
    String vin;
    double batteryCapacityKwh;
    double currentChargeKwh;
    double consumptionPer100Km;
}

class Main {
    public static void main(String[] args) {
        Vehicle car = new Vehicle();
        car.vin = "BYD-CHAZOR-2024-UZB";
        car.batteryCapacityKwh = 18.3;
        car.currentChargeKwh = 12.0;
        car.consumptionPer100Km = 14.5;

        double estimatedRangeKm = (car.currentChargeKwh / car.consumptionPer100Km) * 100.0;
        double batteryPercentage = (car.currentChargeKwh / car.batteryCapacityKwh) * 100.0;

        System.out.println("VIN: " + car.vin);
        System.out.println("Batareya: " + batteryPercentage + "% | Zaxira masofa: " + estimatedRangeKm + " km");
    }
}`,
    detailedSolution: {
      theory: "Real muhandislik masalalarida ob'yektning fizik holatlari bir necha xil formulalar orqali foydalanuvchiga kerakli shaklga keltiriladi.",
      theoryEn: "Engineering domain models transform raw physical metrics into actionable end-user indicators.",
      cleanCode: "double estimatedRangeKm = (car.currentChargeKwh / car.consumptionPer100Km) * 100.0;",
      breakdown: [
        "Elektromobil parametrlari double aniqligida e'lon qilindi.",
        "Qolgan quvvat va 100 km sarf nisbati orqali masofa aniqlandi."
      ],
      pitfalls: "consumptionPer100Km nolga teng bo'lmasligi kerak, aks holda cheksizlik (Infinity) paydo bo'ladi.",
      cw2Tip: "Real konsol ilovalarida ma'lumotlarni hisoblash doimo shu kabi modellarga tayanadi."
    }
  },

  {
    id: 10,
    tier: 1,
    tierName: "1-Bosqich: Klasslar va Maydonlar",
    sector: "1-10",
    title: {
      uz: "10. E-Auction — 'AuctionLot' va Raqobatli Takliflar Logikasi (Stage 1 Master)",
      en: "10. E-Auction — 'AuctionLot' & Competitive Bidding (Stage 1 Master)"
    },
    scenario: {
      uz: "1-bosqich yakuniy topshirig'i! E-auksion tizimida tovar lillari savdosi bo'lib o'tadi. 'AuctionLot' klassini yarating: 'lotTitle' (String), 'startingPrice' (double), 'highestBid' (double), 'highestBidder' (String). Yangi taklif kiritilganda agar yangi narx 'highestBid' dan katta bo'lsa, 'highestBid' va 'highestBidder' yangilansin, aks holda rad etilsin.",
      en: "Stage 1 Capstone! In E-Auction, define 'AuctionLot' with 'lotTitle' (String), 'startingPrice' (double), 'highestBid' (double), and 'highestBidder' (String). Update highest bid if new offer exceeds current."
    },
    requirements: {
      classes: ["AuctionLot", "Main"],
      fields: [
        { name: "lotTitle", type: "String" },
        { name: "startingPrice", type: "double" },
        { name: "highestBid", type: "double" },
        { name: "highestBidder", type: "String" }
      ]
    },
    starterCode: `class AuctionLot {
    // lotTitle (String), startingPrice (double), highestBid (double), highestBidder (String)
    
}

class Main {
    public static void main(String[] args) {
        // AuctionLot yarating, 2 ta taklifni simulyatsiya qilib g'olibni aniqlang
        
    }
}`,
    solution: `class AuctionLot {
    String lotTitle;
    double startingPrice;
    double highestBid;
    String highestBidder;
}

class Main {
    public static void main(String[] args) {
        AuctionLot lot = new AuctionLot();
        lot.lotTitle = "Toshkent City Ofis Binosi";
        lot.startingPrice = 500000.0;
        lot.highestBid = lot.startingPrice;
        lot.highestBidder = "Boshlang'ich Narx";

        // 1-taklif
        double offer1 = 520000.0;
        String bidder1 = "Kompaniya A";
        if (offer1 > lot.highestBid) {
            lot.highestBid = offer1;
            lot.highestBidder = bidder1;
        }

        // 2-taklif (past narx, qabul qilinmasligi kerak)
        double offer2 = 510000.0;
        String bidder2 = "Kompaniya B";
        if (offer2 > lot.highestBid) {
            lot.highestBid = offer2;
            lot.highestBidder = bidder2;
        }

        System.out.println("Lot: " + lot.lotTitle);
        System.out.println("G'olib: " + lot.highestBidder + " | Yakuniy narx: $" + lot.highestBid);
    }
}`,
    detailedSolution: {
      theory: "1-bosqichda biz maydonlarni tashqaridan (Main metodida) o'zgartirishni to'liq ko'rdik. Lekin e'tibor bering: har bir yangi taklif uchun shartlarni Main ichida takroran yozish Clean Code qoidalariga zid! Shu sababli 2-bosqichda ushbu mantiqni klassning o'ziga 'instans metod' sifatida kiritishni o'rganamiz!",
      theoryEn: "In Stage 1 we mutated state externally. Moving this logic inside the class as instance methods is the fundamental purpose of Stage 2.",
      cleanCode: "if (offer1 > lot.highestBid) {\n    lot.highestBid = offer1;\n    lot.highestBidder = bidder1;\n}",
      breakdown: [
        "Auksion lotining barcha holatlari Heap xotirada saqlandi.",
        "Raqobatli narxlar sharti tekshirilib, g'olib aniqlandi.",
        "Bu topshiriq 2-bosqichdagi metodlar konseptsiyasiga tabiiy ko'prik vazifasini o'taydi."
      ],
      pitfalls: "Boshlang'ich narx bilan eng yuqori narx tenglashtirilmasa, takliflar xato tekshirilishi mumkin.",
      cw2Tip: "Auksion va savat tizimlarida ob'yekt holatini yangilash eng ko'p uchraydigan vazifadir."
    }
  },

  // ==========================================================================
  // 2-BOSQICH (11–20): INSTANS METODLAR, ARGUMENTLAR VA BIZNES MANTIQ
  // ==========================================================================
  {
    id: 11,
    tier: 2,
    tierName: "2-Bosqich: Instans Metodlar va Xatti-harakat",
    sector: "11-20",
    title: {
      uz: "11. Digital Wallet — 'deposit' va 'withdraw' Instans Metodlari",
      en: "11. Digital Wallet — 'deposit' & 'withdraw' Instance Methods"
    },
    scenario: {
      uz: "Endi mantiqni to'g'ridan-to'g'ri klass ichiga ko'chiramiz! 'Wallet' klassini tuzing: 'balance' (double) maydoni bo'lsin. Unga 2 ta instans metod qo'shing: 'public void deposit(double amount)' va 'public void withdraw(double amount)'. Har ikkala metod ob'yektning 'balance' maydonini mos ravishda oshirsin yoki kamaytirsin.",
      en: "Encapsulate behavior inside the class! Create 'Wallet' with 'balance' (double). Add 'public void deposit(double amount)' and 'public void withdraw(double amount)' to mutate balance."
    },
    requirements: {
      classes: ["Wallet", "Main"],
      fields: [{ name: "balance", type: "double" }],
      methods: ["deposit", "withdraw"]
    },
    starterCode: `class Wallet {
    double balance;

    // deposit va withdraw metodlarini yarating
    
}

class Main {
    public static void main(String[] args) {
        Wallet w = new Wallet();
        w.balance = 50000.0;
        // w.deposit(20000.0);
        // w.withdraw(15000.0);
        // Yangi balansni chiqaring
    }
}`,
    solution: `class Wallet {
    double balance;

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }

    public void withdraw(double amount) {
        if (amount > 0 && balance >= amount) {
            balance -= amount;
        }
    }
}

class Main {
    public static void main(String[] args) {
        Wallet w = new Wallet();
        w.balance = 50000.0;
        w.deposit(20000.0);
        w.withdraw(15000.0);

        System.out.println("Hamyon balansi: " + w.balance + " so'm");
    }
}`,
    detailedSolution: {
      theory: "Instans metodlar ob'yektning xatti-harakatini (behavior) ifodalaydi. Ular ob'yekt maydonlariga to'g'ridan-to'g'ri kira oladi va tashqaridan kod yozmasdan, ob'yektning o'zini o'zi boshqarishini ta'minlaydi.",
      theoryEn: "Instance methods represent object behavior, operating directly on instance fields to enforce self-containment.",
      cleanCode: "public void deposit(double amount) {\n    if (amount > 0) balance += amount;\n}",
      breakdown: [
        "<code>public void deposit(double amount)</code>: Balansni to'ldiruvchi parametrli void metod.",
        "<code>public void withdraw(double amount)</code>: Mablag' yetarli bo'lganda yechuvchi metod.",
        "Tashqi kod faqat metodlarni chaqiradi, hisoblash mantiqini takrorlamaydi."
      ],
      pitfalls: "Manfiy miqdorlarni tekshirmasdan to'g'ridan-to'g'ri `balance += amount` qilish xatolikka olib keladi.",
      cw2Tip: "Bank va hisob-kitob klasslarida barcha harakatlar aynan metodlar orqali amalga oshiriladi."
    }
  },

  {
    id: 12,
    tier: 2,
    tierName: "2-Bosqich: Instans Metodlar va Xatti-harakat",
    sector: "11-20",
    title: {
      uz: "12. Uzum Sale — Qiymat Qaytaruvchi 'calculateFinalPrice' Metodi",
      en: "12. Uzum Sale — Value-Returning 'calculateFinalPrice' Method"
    },
    scenario: {
      uz: "Metodlar nafaqat o'zgartirishi, balki hisoblangan natijani qaytarishi ('return') ham mumkin. 'ProductSale' klassini tuzing: 'basePrice' (double) maydoni bo'lsin. 'public double calculateFinalPrice(double discountPercentage)' metodini yozing, u chegirmali narxni hisoblab qaytarsin.",
      en: "In Uzum Sale, create 'ProductSale' with 'basePrice' (double). Implement 'public double calculateFinalPrice(double discountPercentage)' which computes and returns the discounted total."
    },
    requirements: {
      classes: ["ProductSale", "Main"],
      fields: [{ name: "basePrice", type: "double" }],
      methods: ["calculateFinalPrice"]
    },
    starterCode: `class ProductSale {
    double basePrice;

    // calculateFinalPrice metodini yozing
    
}

class Main {
    public static void main(String[] args) {
        // ProductSale ob'yektini yarating va chegirmali narxni hisoblang
        
    }
}`,
    solution: `class ProductSale {
    double basePrice;

    public double calculateFinalPrice(double discountPercentage) {
        double discountAmount = basePrice * (discountPercentage / 100.0);
        return basePrice - discountAmount;
    }
}

class Main {
    public static void main(String[] args) {
        ProductSale sale = new ProductSale();
        sale.basePrice = 1200000.0;

        double finalPrice = sale.calculateFinalPrice(15.0); // 15% chegirma
        System.out.println("Asl narx: " + sale.basePrice + " | Chegirmali narx: " + finalPrice);
    }
}`,
    detailedSolution: {
      theory: "'return' operatori hisoblangan qiymatni chaqiruvchi joyga qaytaradi. Metod imzosi qaytarilayotgan tur (bu yerda double) bilan aniq belgilanishi shart.",
      theoryEn: "The 'return' statement sends computed data back to the caller, matching the declared return type in the signature.",
      cleanCode: "return basePrice - (basePrice * (discountPercentage / 100.0));",
      breakdown: [
        "<code>double calculateFinalPrice(double discountPercentage)</code>: Kiruvchi argument va chiquvchi tur belgilandi.",
        "Asosiy narx buzilmasdan saqlanadi, faqat hisoblangan qiymat qaytariladi."
      ],
      pitfalls: "return so'zidan keyin yozilgan har qanday kod bajarilmaydi (unreachable code xatosi).",
      cw2Tip: "CW2 buyurtma ilovasida savat chegirmalari aynan shu uslubda hisoblanadi."
    }
  },

  {
    id: 13,
    tier: 2,
    tierName: "2-Bosqich: Instans Metodlar va Xatti-harakat",
    sector: "11-20",
    title: {
      uz: "13. Smart Thermostat — Limitlar va Chegaraviy Tekshiruv (Guard Clauses)",
      en: "13. Smart Thermostat — Guard Clauses & Safe Limits"
    },
    scenario: {
      uz: "Aqlli uy termostati haroratni 16°C dan past yoki 32°C dan yuqori qilib yubormasligi shart. 'Thermostat' klassini tuzing: 'currentTemp' (double) maydoni bo'lsin. 'increaseTemp(double delta)' va 'decreaseTemp(double delta)' metodlarida chegaraviy tekshiruv (guard clause) o'rnating.",
      en: "Model a smart 'Thermostat' with 'currentTemp' (double). In 'increaseTemp' and 'decreaseTemp', enforce strict bounds between 16.0°C and 32.0°C."
    },
    requirements: {
      classes: ["Thermostat", "Main"],
      fields: [{ name: "currentTemp", type: "double" }],
      methods: ["increaseTemp", "decreaseTemp"]
    },
    starterCode: `class Thermostat {
    double currentTemp;

    // increaseTemp va decreaseTemp metodlarini yozing (16.0 dan 32.0 gacha chegara bilan)
    
}

class Main {
    public static void main(String[] args) {
        // Termostatni sinab ko'ring
        
    }
}`,
    solution: `class Thermostat {
    double currentTemp;

    public void increaseTemp(double delta) {
        if (currentTemp + delta <= 32.0) {
            currentTemp += delta;
        } else {
            currentTemp = 32.0;
        }
    }

    public void decreaseTemp(double delta) {
        if (currentTemp - delta >= 16.0) {
            currentTemp -= delta;
        } else {
            currentTemp = 16.0;
        }
    }
}

class Main {
    public static void main(String[] args) {
        Thermostat t = new Thermostat();
        t.currentTemp = 22.0;

        t.increaseTemp(15.0); // 37.0 bo'lib ketmasligi kerak, 32.0 da to'xtaydi
        System.out.println("Ko'tarilgandagi harorat: " + t.currentTemp + "°C");

        t.decreaseTemp(20.0); // 12.0 bo'lib ketmasligi kerak, 16.0 da to'xtaydi
        System.out.println("Tushirilgandagi harorat: " + t.currentTemp + "°C");
    }
}`,
    detailedSolution: {
      theory: "Metodlar ichidagi himoyalovchi shartlar (Guard Clauses) obyektning har doim sog'lom va xavfsiz holatda qolishini kafolatlaydi.",
      theoryEn: "Guard clauses inside mutator methods prevent corrupted states by capping at boundary limits.",
      cleanCode: "if (currentTemp + delta <= 32.0) currentTemp += delta; else currentTemp = 32.0;",
      breakdown: [
        "Maksimal va minimal harorat chegaralari metod darajasida himoyalandi.",
        "Ob'yekt noto'g'ri fizik holatga tushib qolishi taqiqlandi."
      ],
      pitfalls: "Chegaradan o'tganda jim qolish yoki limitga qadash qarorini biznes talabi belgilaydi.",
      cw2Tip: "Buyurtmadagi tovar soni ombordagi qoldiqdan oshib ketmasligini tekshirishda xuddi shu mantiq ishlatiladi."
    }
  },

  {
    id: 14,
    tier: 2,
    tierName: "2-Bosqich: Instans Metodlar va Xatti-harakat",
    sector: "11-20",
    title: {
      uz: "14. Yandex Surge — 'estimateFare' Ko'p Argumentli Hisoblash Metodi",
      en: "14. Yandex Surge — Multi-Parameter 'estimateFare' Method"
    },
    scenario: {
      uz: "Yandex Go servisida safar narxi masofa, baza narxi va tirbandlik koeffitsientiga (surge) bog'liq. 'RideService' klassini tuzing: 'baseFare' (double) maydoni bo'lsin. 'public double estimateFare(double km, double surgeMultiplier)' metodini yozing: formulasi 'baseFare + (km * 2500.0 * surgeMultiplier)'.",
      en: "In Yandex Surge, create 'RideService' with 'baseFare' (double). Implement 'public double estimateFare(double km, double surgeMultiplier)' combining base fare with distance and traffic multiplier."
    },
    requirements: {
      classes: ["RideService", "Main"],
      fields: [{ name: "baseFare", type: "double" }],
      methods: ["estimateFare"]
    },
    starterCode: `class RideService {
    double baseFare;

    // estimateFare(double km, double surgeMultiplier) metodini yozing
    
}

class Main {
    public static void main(String[] args) {
        // RideService orqali turli koeffitsientlarda narxni hisoblang
        
    }
}`,
    solution: `class RideService {
    double baseFare;

    public double estimateFare(double km, double surgeMultiplier) {
        return baseFare + (km * 2500.0 * surgeMultiplier);
    }
}

class Main {
    public static void main(String[] args) {
        RideService service = new RideService();
        service.baseFare = 5000.0;

        double normalFare = service.estimateFare(10.0, 1.0);
        double peakFare = service.estimateFare(10.0, 1.8);

        System.out.println("Oddiy tarif: " + normalFare + " so'm");
        System.out.println("Tirbandlik tarifi (1.8x): " + peakFare + " so'm");
    }
}`,
    detailedSolution: {
      theory: "Metodlar bir nechta turli xil argumentlarni qabul qilib, ob'yektning o'z ichki maydoni (baseFare) bilan umumlashtirgan holda hisob-kitob olib borishi mumkin.",
      theoryEn: "Methods seamlessly synthesize internal state fields with incoming runtime arguments.",
      cleanCode: "return baseFare + (km * 2500.0 * surgeMultiplier);",
      breakdown: [
        "2 ta argument: masofa va ko'paytiruvchi koeffitsient.",
        "Ob'yekt maydoni hisob-kitobda faol ishtirok etmoqda."
      ],
      pitfalls: "Argumentlar tartibini adashtirish mantiqiy xatoga olib kelishi mumkin.",
      cw2Tip: "CW2 ilovasida yetkazib berish narxini masofaga qarab hisoblashda ayni muddao."
    }
  },

  {
    id: 15,
    tier: 2,
    tierName: "2-Bosqich: Instans Metodlar va Xatti-harakat",
    sector: "11-20",
    title: {
      uz: "15. WIUT GradeBook — 'getOverallScore' va 'isPassed' Boolean Predikat Metodi",
      en: "15. WIUT GradeBook — Predicate Methods & Assessment Rules"
    },
    scenario: {
      uz: "WIUT modul baholash tizimi. 'GradeBook' klassini tuzing: 'courseworkMark' (double, 40%) va 'examMark' (double, 60%) maydonlari bo'lsin. 'public double getOverallScore()' metodi jami ballni ('cw * 0.4 + exam * 0.6') hisoblasin, 'public boolean isPassed()' metodi esa agar jami ball >= 40.0 bo'lsa 'true', aks holda 'false' qaytarsin.",
      en: "In WIUT GradeBook, model 'GradeBook' with 'courseworkMark' and 'examMark'. Implement 'double getOverallScore()' (40/60 weight) and predicate 'boolean isPassed()' (>= 40.0)."
    },
    requirements: {
      classes: ["GradeBook", "Main"],
      fields: [
        { name: "courseworkMark", type: "double" },
        { name: "examMark", type: "double" }
      ],
      methods: ["getOverallScore", "isPassed"]
    },
    starterCode: `class GradeBook {
    double courseworkMark;
    double examMark;

    // getOverallScore va isPassed metodlarini yozing
    
}

class Main {
    public static void main(String[] args) {
        // GradeBook ob'yektini sinab ko'ring
        
    }
}`,
    solution: `class GradeBook {
    double courseworkMark;
    double examMark;

    public double getOverallScore() {
        return (courseworkMark * 0.4) + (examMark * 0.6);
    }

    public boolean isPassed() {
        return getOverallScore() >= 40.0;
    }
}

class Main {
    public static void main(String[] args) {
        GradeBook gb = new GradeBook();
        gb.courseworkMark = 65.0;
        gb.examMark = 72.0;

        double overall = gb.getOverallScore();
        boolean passed = gb.isPassed();

        System.out.println("Yakuniy ball: " + overall + " | Moduldan o'tdi: " + passed);
    }
}`,
    detailedSolution: {
      theory: "Metod ichidan boshqa metodni chaqirish (Method Delegation): 'isPassed()' metodi o'z hisob-kitobini 'getOverallScore()' natijasiga tayanib bajaradi. Bu kod takrorlanishining (DRY - Don't Repeat Yourself) oldini oladi.",
      theoryEn: "Method delegation allows 'isPassed()' to leverage 'getOverallScore()', strictly upholding DRY principles.",
      cleanCode: "public boolean isPassed() {\n    return getOverallScore() >= 40.0;\n}",
      breakdown: [
        "Baholar vazniga qarab hisoblandi.",
        "Mantiqiy predikat metodi qisqa va aniq ifodalandi."
      ],
      pitfalls: "40.0 o'rniga 40 deb butun son yozilsa ham Java implicit conversion qiladi, lekin double aniqligi saqlangan ma'qul.",
      cw2Tip: "Bu aynan WIUT 5COSC018C modulining rasmiy baholash qoidasidir!"
    }
  },

  {
    id: 16,
    tier: 2,
    tierName: "2-Bosqich: Instans Metodlar va Xatti-harakat",
    sector: "11-20",
    title: {
      uz: "16. Korzinka Plus — 'addPoints' va Darajani Avtomatik Yangilash (State Transitions)",
      en: "16. Korzinka Plus — Dynamic State Transitions & Tier Upgrades"
    },
    scenario: {
      uz: "Korzinka sodiqlik dasturida mijoz ma'lum ball to'plasa, uning statusi avtomatik oshishi kerak. 'LoyaltyMember' klassini tuzing: 'points' (int) va 'tier' (String) maydonlari bo'lsin. 'public void addPoints(int earned)' metodini yozing: ball qo'shilsin va agar ball >= 1000 bo'lsa 'tier = \"GOLD\"' ga, aks holda agar ball >= 500 bo'lsa 'tier = \"SILVER\"' ga o'zgartirilsin.",
      en: "In Korzinka Plus, model 'LoyaltyMember' with 'points' (int) and 'tier' (String). 'addPoints(int earned)' adds points and dynamically upgrades tier to 'SILVER' (>=500) or 'GOLD' (>=1000)."
    },
    requirements: {
      classes: ["LoyaltyMember", "Main"],
      fields: [
        { name: "points", type: "int" },
        { name: "tier", type: "String" }
      ],
      methods: ["addPoints"]
    },
    starterCode: `class LoyaltyMember {
    int points;
    String tier;

    // addPoints metodini yozing
    
}

class Main {
    public static void main(String[] args) {
        // Ball qo'shib, yangilangan statusni ko'ring
        
    }
}`,
    solution: `class LoyaltyMember {
    int points;
    String tier;

    public void addPoints(int earned) {
        if (earned > 0) {
            points += earned;
            if (points >= 1000) {
                tier = "GOLD";
            } else if (points >= 500) {
                tier = "SILVER";
            } else {
                tier = "BRONZE";
            }
        }
    }
}

class Main {
    public static void main(String[] args) {
        LoyaltyMember member = new LoyaltyMember();
        member.points = 350;
        member.tier = "BRONZE";

        member.addPoints(250); // jami 600 -> SILVER
        System.out.println("Ball: " + member.points + " | Status: " + member.tier);

        member.addPoints(500); // jami 1100 -> GOLD
        System.out.println("Ball: " + member.points + " | Status: " + member.tier);
    }
}`,
    detailedSolution: {
      theory: "Holat tranzitsiyasi (State Transition): Obyektning xatti-harakati uning ichki holatini shartlar asosida yangi bosqichga o'tkazadi. Bu ob'yektga yo'naltirilgan dasturlashning eng kuchli jihatlaridan biridir.",
      theoryEn: "State transitions model evolving lifecycle phases directly within instance mutation logic.",
      cleanCode: "if (points >= 1000) tier = \"GOLD\";",
      breakdown: [
        "Ball qo'shildi va oraliqlar tekshirildi.",
        "Foydalanuvchi darajasi (Bronze -> Silver -> Gold) avtomatik o'sdi."
      ],
      pitfalls: "Shartlarni tekshirishda kichik sondan emas, avval eng katta sondan (1000) boshlash kerak, aks holda `points >= 500` barcha 1000 dan kattalarni ham ushlab qoladi.",
      cw2Tip: "CW2 loyihangizda buyurtma statusini (PENDING -> PAID -> DELIVERED) boshqarishda ayni usul qo'llaniladi."
    }
  },

  {
    id: 17,
    tier: 2,
    tierName: "2-Bosqich: Instans Metodlar va Xatti-harakat",
    sector: "11-20",
    title: {
      uz: "17. Cargo Logistics — 'loadCargo' va Natija Statusini Qaytarish (Boolean Result)",
      en: "17. Cargo Logistics — 'loadCargo' with Capacity Status Return"
    },
    scenario: {
      uz: "Yuk tashish konteyneri maksimal og'irlikdan ortiq yuk ko'tara olmaydi. 'CargoContainer' klassini tuzing: 'maxCapacityKg' (double), 'currentWeightKg' (double). 'public boolean loadCargo(double weightKg)' metodini yozing: agar yuk qo'shilganda maksimal sig'imdan oshib ketmasa, yukni qo'shib 'true' qaytarsin; agar oshsa, yukni qo'shmasdan 'false' qaytarsin.",
      en: "In Cargo Logistics, define 'CargoContainer' with 'maxCapacityKg' and 'currentWeightKg'. 'public boolean loadCargo(double weightKg)' safely loads cargo only if limit not exceeded, returning true/false."
    },
    requirements: {
      classes: ["CargoContainer", "Main"],
      fields: [
        { name: "maxCapacityKg", type: "double" },
        { name: "currentWeightKg", type: "double" }
      ],
      methods: ["loadCargo"]
    },
    starterCode: `class CargoContainer {
    double maxCapacityKg;
    double currentWeightKg;

    // loadCargo metodini yozing
    
}

class Main {
    public static void main(String[] args) {
        // Konteynerga yuk yuklab, natijasini tekshiring
        
    }
}`,
    solution: `class CargoContainer {
    double maxCapacityKg;
    double currentWeightKg;

    public boolean loadCargo(double weightKg) {
        if (weightKg > 0 && (currentWeightKg + weightKg) <= maxCapacityKg) {
            currentWeightKg += weightKg;
            return true;
        }
        return false;
    }
}

class Main {
    public static void main(String[] args) {
        CargoContainer container = new CargoContainer();
        container.maxCapacityKg = 1000.0;
        container.currentWeightKg = 700.0;

        boolean success1 = container.loadCargo(200.0);
        System.out.println("200 kg yuklandi: " + success1 + " (Jami: " + container.currentWeightKg + " kg)");

        boolean success2 = container.loadCargo(200.0); // 900 + 200 = 1100 > 1000 (Rad etiladi)
        System.out.println("Ikkinchi 200 kg yuklandi: " + success2 + " (Jami: " + container.currentWeightKg + " kg)");
    }
}`,
    detailedSolution: {
      theory: "Operatsiya natijasini boolean orqali qaytarish (Status Return Pattern): Metod o'zgarish sodir bo'lgan yoki bo'lmaganligini chaqiruvchiga xabar beradi, bu esa tashqi kodga xatolikni chiroyli ko'rsatish imkonini yaratadi.",
      theoryEn: "Boolean status return signals operation success/failure while preventing invalid state mutations.",
      cleanCode: "if (weightKg > 0 && (currentWeightKg + weightKg) <= maxCapacityKg) {\n    currentWeightKg += weightKg;\n    return true;\n}\nreturn false;",
      breakdown: [
        "Chegarani oldindan tekshirish (Atomic check).",
        "Faqat sig'im yetarli bo'lganda og'irlik oshirildi."
      ],
      pitfalls: "return false dan oldin currentWeightKg ni o'zgartirib qo'ymaslikka ehtiyot bo'ling.",
      cw2Tip: "Do'kon omborida qoldiq yetarli bo'lmaganda xaridni rad etish uchun ishlatiladi."
    }
  },

  {
    id: 18,
    tier: 2,
    tierName: "2-Bosqich: Instans Metodlar va Xatti-harakat",
    sector: "11-20",
    title: {
      uz: "18. Bank Credit — Metodlarni Nomdosh Qilish (Method Overloading)",
      en: "18. Bank Credit — Method Overloading & Flexible Parameters"
    },
    scenario: {
      uz: "Bir xil vazifani turli parametrlar bilan bajarish — Metod Overloading! 'Loan' klassini tuzing: 'principal' (double) maydoni bo'lsin. Ikkita 'calculateInterest' metodini yozing:\n1) 'public double calculateInterest(int months)' — standart yillik 20% stavka bilan hisoblaydi: '(principal * 0.20 / 12) * months';\n2) 'public double calculateInterest(int months, double customRate)' — maxsus stavka bilan hisoblaydi: '(principal * (customRate / 100.0) / 12) * months'.",
      en: "Implement Method Overloading! In 'Loan' with 'principal' (double), create two 'calculateInterest' methods: one with default 20% annual rate, and one accepting customRate."
    },
    requirements: {
      classes: ["Loan", "Main"],
      fields: [{ name: "principal", type: "double" }],
      methods: ["calculateInterest"]
    },
    starterCode: `class Loan {
    double principal;

    // calculateInterest metodlarini overload qiling
    
}

class Main {
    public static void main(String[] args) {
        // Har ikkala overload metodni chaqirib ko'ring
        
    }
}`,
    solution: `class Loan {
    double principal;

    public double calculateInterest(int months) {
        return (principal * 0.20 / 12.0) * months;
    }

    public double calculateInterest(int months, double customRate) {
        return (principal * (customRate / 100.0) / 12.0) * months;
    }
}

class Main {
    public static void main(String[] args) {
        Loan loan = new Loan();
        loan.principal = 12000000.0; // 12 mln so'm

        double standardFoiz = loan.calculateInterest(6);
        double imtiyozliFoiz = loan.calculateInterest(6, 14.0); // 14% stavka

        System.out.println("Standart foiz (6 oy): " + standardFoiz + " so'm");
        System.out.println("Imtiyozli foiz (6 oy, 14%): " + imtiyozliFoiz + " so'm");
    }
}`,
    detailedSolution: {
      theory: "Metod Overloading — bitta klassda nomi bir xil, lekin parametrlari soni yoki turlari bilan farq qiluvchi bir nechta metodlarni e'lon qilishdir. Kompilyator qaysi metod chaqirilayotganini argumentlarga qarab static tarzda aniqlaydi.",
      theoryEn: "Method Overloading features identical method names with differing parameter signatures, resolved statically at compile time.",
      cleanCode: "public double calculateInterest(int months) { ... }\npublic double calculateInterest(int months, double customRate) { ... }",
      breakdown: [
        "Bitta metod nomi, ikki xil qulaylikdagi parametr to'plami.",
        "Default qiymatlar bilan qisqaroq chaqirish imkoniyati paydo bo'ldi."
      ],
      pitfalls: "Faqat qaytarish turi (return type) farq qilishi overload hisoblanmaydi — parametrlar farq qilishi shart!",
      cw2Tip: "CW2 qidiruv tizimida: tovar nomi bo'yicha qidirish, yoki nomi hamda narxi bo'yicha qidirish overload metodlar bilan qilinadi."
    }
  },

  {
    id: 19,
    tier: 2,
    tierName: "2-Bosqich: Instans Metodlar va Xatti-harakat",
    sector: "11-20",
    title: {
      uz: "19. Secure Auth — 'UserSession' va Vaqt Cheklovi (Session Timeout)",
      en: "19. Secure Auth — 'UserSession' & Activity Expiration"
    },
    scenario: {
      uz: "Xavfsizlik tizimida foydalanuvchi uzoq vaqt harakat qilmasa, uning sessiyasi eskirgan deb topiladi. 'UserSession' klassini tuzing: 'username' (String), 'lastActiveTime' (long). Ikki metod yozing:\n1) 'public void touchSession(long currentTime)' — oxirgi faollik vaqtini yangilasin;\n2) 'public boolean isExpired(long currentTime, long timeoutMillis)' — agar '(currentTime - lastActiveTime) > timeoutMillis' bo'lsa 'true', aks holda 'false' qaytarsin.",
      en: "In Secure Auth, create 'UserSession' with 'username' (String) and 'lastActiveTime' (long). Implement 'touchSession(long currentTime)' and 'isExpired(long currentTime, long timeoutMillis)'."
    },
    requirements: {
      classes: ["UserSession", "Main"],
      fields: [
        { name: "username", type: "String" },
        { name: "lastActiveTime", type: "long" }
      ],
      methods: ["touchSession", "isExpired"]
    },
    starterCode: `class UserSession {
    String username;
    long lastActiveTime;

    // touchSession va isExpired metodlarini yozing
    
}

class Main {
    public static void main(String[] args) {
        // Sessiyani sinovdan o'tkazing
        
    }
}`,
    solution: `class UserSession {
    String username;
    long lastActiveTime;

    public void touchSession(long currentTime) {
        this.lastActiveTime = currentTime;
    }

    public boolean isExpired(long currentTime, long timeoutMillis) {
        return (currentTime - lastActiveTime) > timeoutMillis;
    }
}

class Main {
    public static void main(String[] args) {
        UserSession session = new UserSession();
        session.username = "ali_dev";
        session.lastActiveTime = 1000L;

        // 1500ms o'tganda (timeout = 1000ms bo'lsa)
        boolean expired1 = session.isExpired(1500L, 1000L); // 500ms o'tdi -> false
        System.out.println("1500-millisekundda eskirganmi: " + expired1);

        // 2500ms o'tganda
        boolean expired2 = session.isExpired(2500L, 1000L); // 1500ms o'tdi -> true
        System.out.println("2500-millisekundda eskirganmi: " + expired2);
    }
}`,
    detailedSolution: {
      theory: "Vaqt bilan ishlashda Java-da millisekundlar 'long' primitiv turi orqali ifodalanadi. 'this.lastActiveTime' orqali joriy ob'yekt maydoniga aniq murojaat qilish o'rganiladi.",
      theoryEn: "Timestamp manipulation relies on 64-bit 'long' primitives. 'this' explicitly disambiguates instance fields.",
      cleanCode: "public boolean isExpired(long currentTime, long timeoutMillis) {\n    return (currentTime - lastActiveTime) > timeoutMillis;\n}",
      breakdown: [
        "Vaqt oraliqlari (delat t) aniq matematik shart bilan hisoblandi.",
        "Sessiyaning eskirganlik holati tekshirildi."
      ],
      pitfalls: "long sonlar oxiriga 'L' qo'yish unutilsa (masalan 1000L), int deb qabul qilinib katta qiymatlarda overflow bo'lishi mumkin.",
      cw2Tip: "Foydalanuvchi tizimdan avtomatik chiqib ketishi (Logout) aynan shu algoritm bilan ishlaydi."
    }
  },

  {
    id: 20,
    tier: 2,
    tierName: "2-Bosqich: Instans Metodlar va Xatti-harakat",
    sector: "11-20",
    title: {
      uz: "20. Express Cafe — 'generateReceipt' Matnli Kvitansiya Metodi (Stage 2 Master)",
      en: "20. Express Cafe — 'generateReceipt' Formatted String Method (Stage 2 Master)"
    },
    scenario: {
      uz: "2-bosqich yakuniy topshirig'i! Restoranda buyurtma chekini generatsiya qilish. 'FoodOrder' klassini tuzing: 'itemName' (String), 'unitPrice' (double), 'quantity' (int). 'public String generateReceipt(double taxRate)' metodini yozing: u tovar nomi, soni, oraliq narxi ('unitPrice * quantity'), soliq summasi va yakuniy to'lovni chiroyli matnli formatda (String) qaytarsin.",
      en: "Stage 2 Capstone! In Express Cafe, create 'FoodOrder' with 'itemName', 'unitPrice', and 'quantity'. Implement 'public String generateReceipt(double taxRate)' returning a formatted multi-line receipt."
    },
    requirements: {
      classes: ["FoodOrder", "Main"],
      fields: [
        { name: "itemName", type: "String" },
        { name: "unitPrice", type: "double" },
        { name: "quantity", type: "int" }
      ],
      methods: ["generateReceipt"]
    },
    starterCode: `class FoodOrder {
    String itemName;
    double unitPrice;
    int quantity;

    // generateReceipt metodini yozing
    
}

class Main {
    public static void main(String[] args) {
        // Buyurtma yaratib, chekni ekranga chiqaring
        
    }
}`,
    solution: `class FoodOrder {
    String itemName;
    double unitPrice;
    int quantity;

    public String generateReceipt(double taxRate) {
        double subtotal = unitPrice * quantity;
        double tax = subtotal * (taxRate / 100.0);
        double total = subtotal + tax;

        return "--- CHEK ---\\n" +
               "Taom: " + itemName + " x " + quantity + "\\n" +
               "Oraliq summa: " + subtotal + " so'm\\n" +
               "Soliq (" + taxRate + "%): " + tax + " so'm\\n" +
               "JAMI TO'LOV: " + total + " so'm\\n" +
               "------------";
    }
}

class Main {
    public static void main(String[] args) {
        FoodOrder order = new FoodOrder();
        order.itemName = "Lavash Max";
        order.unitPrice = 38000.0;
        order.quantity = 2;

        String receipt = order.generateReceipt(12.0); // 12% QQS
        System.out.println(receipt);
    }
}`,
    detailedSolution: {
      theory: "2-bosqichda biz obyektlar ichiga boy metodlar kiritdik! Lekin e'tibor qiling: `order.itemName = ...`, `order.unitPrice = ...` deb ob'yekt maydonlarini tashqaridan bittalab to'ldirish noqulay va xavfli. Agar biror maydon unutilsa, ob'yekt yarimta holda qoladi. Shu sababli 3-bosqichda ob'yekt yaratilish paytidayoq uni to'liq to'ldiruvchi KONSTRUKTORLARNI o'rganamiz!",
      theoryEn: "Stage 2 introduced powerful methods. Stage 3 solves the problem of partially initialized state by introducing CONSTRUCTORS.",
      cleanCode: "public String generateReceipt(double taxRate) { ... }",
      breakdown: [
        "Metod murakkab formatlangan kvitansiya matnini qaytaradi.",
        "Ob'yekt o'z hisob-kitobini va ko'rinishini to'liq o'zi ta'minlaydi.",
        "Bu topshiriq 3-bosqichdagi konstruktorlarga poydevor yaratadi."
      ],
      pitfalls: "String birlashtirishda qator tashlash uchun `\\n` belgisidan to'g'ri foydalaning.",
      cw2Tip: "CW2 Console ilovasining yakuniy bosqichi aynan konsolga chek chiqarishdan iborat."
    }
  },

  // ==========================================================================
  // 3-BOSQICH (21–30): KONSTRUKTORLAR, HAYOT SIKLI VA VALIDATSIYA
  // ==========================================================================
  {
    id: 21,
    tier: 3,
    tierName: "3-Bosqich: Konstruktorlar va Hayot Sikli",
    sector: "21-30",
    title: {
      uz: "21. Book Catalog — Parametrlangan Konstruktor va 'this' Kalit So'zi",
      en: "21. Book Catalog — Parameterized Constructor & 'this' Keyword"
    },
    scenario: {
      uz: "Kutubxona katalogida kitob yaratilayotganda uning nomi, muallifi va sahifalar soni majburiy kiritilishi kerak. 'Book' klassini tuzing: 'title' (String), 'author' (String), 'pages' (int) maydonlari bo'lsin. Ushbu 3 ta maydonni qabul qilib to'ldiruvchi 'public Book(String title, String author, int pages)' konstruktorini yarating.",
      en: "In Book Catalog, model 'Book' with 'title', 'author', and 'pages'. Implement parameterized constructor 'public Book(String title, String author, int pages)' using 'this'."
    },
    requirements: {
      classes: ["Book", "Main"],
      fields: [
        { name: "title", type: "String" },
        { name: "author", type: "String" },
        { name: "pages", type: "int" }
      ],
      constructors: ["Book"]
    },
    starterCode: `class Book {
    String title;
    String author;
    int pages;

    // Parametrlangan konstruktorni yozing
    
}

class Main {
    public static void main(String[] args) {
        // new Book(...) orqali kitob yarating
        
    }
}`,
    solution: `class Book {
    String title;
    String author;
    int pages;

    public Book(String title, String author, int pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

class Main {
    public static void main(String[] args) {
        Book b = new Book("O'tkan Kunlar", "Abdulla Qodiriy", 420);
        System.out.println("Kitob: " + b.title + " | Muallif: " + b.author + " | Sahifa: " + b.pages);
    }
}`,
    detailedSolution: {
      theory: "Konstruktor — ob'yekt Heap xotirada 'new' orqali yaratilayotgan paytda avtomatik chaqiriladigan maxsus blokdir. Uning nomi klass nomi bilan bir xil bo'ladi va hech qanday qaytarish turiga (void ham emas) ega bo'lmaydi. 'this.title = title' ifodasi parametr nomini klass maydoni nomidan ajratish (shadowing resolution) uchun xizmat qiladi.",
      theoryEn: "Constructors run automatically during allocation via 'new'. They share the class name and have no return type.",
      cleanCode: "public Book(String title, String author, int pages) {\n    this.title = title;\n    this.author = author;\n    this.pages = pages;\n}",
      breakdown: [
        "Ob'yekt bir qator kod bilan to'liq va to'g'ri holatda yaratiladi.",
        "`this` kalit so'zi hozir yaratilayotgan joriy nusxaning maydoniga ishora qiladi."
      ],
      pitfalls: "Konstruktor oldiga tasodifan 'void' yozib qo'ysangiz, u oddiy metodga aylanadi va konstruktor bo'lmay qoladi!",
      cw2Tip: "CW2 barcha domen klasslarida konstruktorlar orqali ob'yekt tuzish majburiy hisoblanadi."
    }
  },

  {
    id: 22,
    tier: 3,
    tierName: "3-Bosqich: Konstruktorlar va Hayot Sikli",
    sector: "21-30",
    title: {
      uz: "22. Account User — Konstruktor Overloading (Standart va To'liq)",
      en: "22. Account User — Constructor Overloading (Default & Full)"
    },
    scenario: {
      uz: "Foydalanuvchi ro'yxatdan o'tayotganda roli kiritilmasa, avtomatik 'USER' bo'lishi kerak. 'User' klassini tuzing: 'username' (String), 'email' (String), 'role' (String). Ikki xil konstruktor yozing:\n1) 'public User(String username, String email)' — rolni 'USER' deb o'rnatadi;\n2) 'public User(String username, String email, String role)' — rolni berilgan qiymatga o'rnatadi.",
      en: "In Account User, create 'User' with 'username', 'email', and 'role'. Overload constructors: a 2-arg constructor defaulting role to 'USER', and a 3-arg full constructor."
    },
    requirements: {
      classes: ["User", "Main"],
      fields: [
        { name: "username", type: "String" },
        { name: "email", type: "String" },
        { name: "role", type: "String" }
      ],
      constructors: ["User"]
    },
    starterCode: `class User {
    String username;
    String email;
    String role;

    // 2 ta konstruktorni overload qiling
    
}

class Main {
    public static void main(String[] args) {
        // Ikkala konstruktor orqali alohida foydalanuvchilar yarating
        
    }
}`,
    solution: `class User {
    String username;
    String email;
    String role;

    public User(String username, String email) {
        this.username = username;
        this.email = email;
        this.role = "USER";
    }

    public User(String username, String email, String role) {
        this.username = username;
        this.email = email;
        this.role = role;
    }
}

class Main {
    public static void main(String[] args) {
        User u1 = new User("nodirbek", "nodir@wiut.uz");
        User u2 = new User("admin_ada", "ada@wiut.uz", "ADMIN");

        System.out.println("Foydalanuvchi 1: " + u1.username + " (" + u1.role + ")");
        System.out.println("Foydalanuvchi 2: " + u2.username + " (" + u2.role + ")");
    }
}`,
    detailedSolution: {
      theory: "Konstruktorlarni overload qilish dasturchiga ob'yektni turli vaziyatlarda (masalan, to'liq ma'lumot mavjud bo'lganda yoki faqat boshlang'ich qismlari ma'lum bo'lganda) moslashuvchan yaratish imkonini beradi.",
      theoryEn: "Constructor overloading provides flexible instantiation pathways with sensible default state fallbacks.",
      cleanCode: "public User(String username, String email) { ... }\npublic User(String username, String email, String role) { ... }",
      breakdown: [
        "Oddiy foydalanuvchilar uchun 2 ta parametr yetarli.",
        "Maxsus ma'murlar uchun 3 ta parametr bilan rol berish mumkin."
      ],
      pitfalls: "Agar klassda kamida 1 ta maxsus konstruktor yozilsa, Java standart bo'sh konstruktorni ('new User()') avtomatik taqdim etmay qo'yadi.",
      cw2Tip: "Buyurtmachiga buyurtma berishda manzil ko'rsatilgan yoki ko'rsatilmagan variantlarni qo'llashda asqotadi."
    }
  },

  {
    id: 23,
    tier: 3,
    tierName: "3-Bosqich: Konstruktorlar va Hayot Sikli",
    sector: "21-30",
    title: {
      uz: "23. Debit Card — Konstruktorlar Zanjiri ('this()' Chaining)",
      en: "23. Debit Card — Constructor Chaining via 'this()'"
    },
    scenario: {
      uz: "Bir konstruktordan ikkinchisini chaqirish — Constructor Chaining! 'DebitCard' klassini tuzing: 'cardNumber' (String), 'ownerName' (String), 'balance' (double), 'currency' (String). Agar faqat 'cardNumber' va 'ownerName' berilsa, qolgan maydonlarni standart qilib to'ldirish uchun 'this(cardNumber, ownerName, 0.0, \"UZS\");' zanjiridan foydalaning.",
      en: "Implement Constructor Chaining! In 'DebitCard' ('cardNumber', 'ownerName', 'balance', 'currency'), delegate the 2-arg constructor to the 4-arg constructor via 'this(...)'. "
    },
    requirements: {
      classes: ["DebitCard", "Main"],
      fields: [
        { name: "cardNumber", type: "String" },
        { name: "ownerName", type: "String" },
        { name: "balance", type: "double" },
        { name: "currency", type: "String" }
      ],
      constructors: ["DebitCard"],
      keywords: ["this"]
    },
    starterCode: `class DebitCard {
    String cardNumber;
    String ownerName;
    double balance;
    String currency;

    // 4 ta parametrli to'liq konstruktorni yozing
    
    // 2 ta parametrli konstruktorda this(...) orqali zanjir qiling
    
}

class Main {
    public static void main(String[] args) {
        // Karta yarating va parametrlarini ko'ring
        
    }
}`,
    solution: `class DebitCard {
    String cardNumber;
    String ownerName;
    double balance;
    String currency;

    public DebitCard(String cardNumber, String ownerName, double balance, String currency) {
        this.cardNumber = cardNumber;
        this.ownerName = ownerName;
        this.balance = balance;
        this.currency = currency;
    }

    public DebitCard(String cardNumber, String ownerName) {
        this(cardNumber, ownerName, 0.0, "UZS");
    }
}

class Main {
    public static void main(String[] args) {
        DebitCard card = new DebitCard("8600123456789012", "Kamron Bek");
        System.out.println("Karta: " + card.cardNumber + " | Egasi: " + card.ownerName + " | Balans: " + card.balance + " " + card.currency);
    }
}`,
    detailedSolution: {
      theory: "'this(...)' ifodasi joriy klassning boshqa bir konstruktorini chaqiradi. Eng muhim qoida: 'this(...)' chaqiruvi konstruktor tanasidagi birinchi buyruq (first statement) bo'lishi shart! Bu kod takrorlanishini keskin kamaytiradi.",
      theoryEn: "'this(...)' chains instantiation logic to master constructors, strictly mandatory as the first statement in the body.",
      cleanCode: "public DebitCard(String cardNumber, String ownerName) {\n    this(cardNumber, ownerName, 0.0, \"UZS\");\n}",
      breakdown: [
        "Initsializatsiya mantiqi faqat bitta bosh konstruktorda jamlangan.",
        "Qolgan konstruktorlar 'this(...)' orqali unga tayanadi."
      ],
      pitfalls: "'this(...)' ni birinchi qatordan keyin yozsangiz, 'call to this must be first statement in constructor' xatoligi beradi.",
      cw2Tip: "Professor Ada Clean Code va SOLID tamoyillari bo'yicha konstruktor zanjirini yuqori baholaydi."
    }
  },

  {
    id: 24,
    tier: 3,
    tierName: "3-Bosqich: Konstruktorlar va Hayot Sikli",
    sector: "21-30",
    title: {
      uz: "24. Smartphone — Standart (No-Arg) va Maxsus Konstruktorlar",
      en: "24. Smartphone — Default (No-Arg) & Custom Constructors"
    },
    scenario: {
      uz: "Elektronika omborida yangi kelgan noma'lum smartfonlar va aniq modellar mavjud. 'Smartphone' klassini tuzing: 'brand' (String), 'storageGb' (int), 'price' (double). Bo'sh parametrli no-arg konstruktor 'brand = \"Generic\"', 'storageGb = 64', 'price = 150.0' qilib qo'ysin; 3 ta parametrli konstruktor esa kiritilgan qiymatlarni o'rnatsin.",
      en: "Model 'Smartphone' with 'brand', 'storageGb', and 'price'. Provide a no-arg constructor initializing default specs ('Generic', 64, 150.0) alongside a custom 3-arg constructor."
    },
    requirements: {
      classes: ["Smartphone", "Main"],
      fields: [
        { name: "brand", type: "String" },
        { name: "storageGb", type: "int" },
        { name: "price", type: "double" }
      ],
      constructors: ["Smartphone"]
    },
    starterCode: `class Smartphone {
    String brand;
    int storageGb;
    double price;

    // No-arg (bo'sh) va parametrli konstruktorlarni yozing
    
}

class Main {
    public static void main(String[] args) {
        // Ikkala usulda smartfon yarating
        
    }
}`,
    solution: `class Smartphone {
    String brand;
    int storageGb;
    double price;

    public Smartphone() {
        this.brand = "Generic";
        this.storageGb = 64;
        this.price = 150.0;
    }

    public Smartphone(String brand, int storageGb, double price) {
        this.brand = brand;
        this.storageGb = storageGb;
        this.price = price;
    }
}

class Main {
    public static void main(String[] args) {
        Smartphone phone1 = new Smartphone();
        Smartphone phone2 = new Smartphone("Samsung Galaxy S24", 256, 950.0);

        System.out.println("Model 1: " + phone1.brand + " (" + phone1.storageGb + "GB) - $" + phone1.price);
        System.out.println("Model 2: " + phone2.brand + " (" + phone2.storageGb + "GB) - $" + phone2.price);
    }
}`,
    detailedSolution: {
      theory: "No-arg konstruktor parametr qabul qilmaydi. Agar siz parametrli konstruktor yozganingizdan keyin ham 'new Smartphone()' qilmoqchi bo'lsangiz, bo'sh konstruktorni qo'lda yozib qo'yishingiz shart.",
      theoryEn: "A no-arg constructor must be explicitly declared if parameterized constructors are introduced.",
      cleanCode: "public Smartphone() { ... }\npublic Smartphone(String brand, int storageGb, double price) { ... }",
      breakdown: [
        "Standart holat (default state) xavfsiz ta'minlandi.",
        "Parametrli versiya esa erkin sozlash imkonini berdi."
      ],
      pitfalls: "Bo'sh konstruktor yozishni unutib 'new Smartphone()' chaqirilsa, dastur kompilyatsiyadan o'tmaydi.",
      cw2Tip: "JavaFX yoki konsolli menyularda ob'yektlarni avval bo'sh yaratib, keyin to'ldirishda no-arg kerak bo'ladi."
    }
  },

  {
    id: 25,
    tier: 3,
    tierName: "3-Bosqich: Konstruktorlar va Hayot Sikli",
    sector: "21-30",
    title: {
      uz: "25. University Course — Konstruktor Ichida Majburiy Himoyaviy Qoida",
      en: "25. University Course — Defensive Validation Inside Constructor"
    },
    scenario: {
      uz: "Universitet kursining talabalar sig'imi hech qachon 0 yoki manfiy bo'lishi mumkin emas. 'Course' klassini tuzing: 'courseCode' (String), 'maxStudents' (int). 'public Course(String courseCode, int maxStudents)' konstruktorida tekshiring: agar 'maxStudents <= 0' bo'lsa, uni majburiy ravishda 30 qilib belgilang.",
      en: "In Course Registration, create 'Course' with 'courseCode' and 'maxStudents'. In constructor, defend against invalid inputs: if 'maxStudents <= 0', assign default capacity 30."
    },
    requirements: {
      classes: ["Course", "Main"],
      fields: [
        { name: "courseCode", type: "String" },
        { name: "maxStudents", type: "int" }
      ],
      constructors: ["Course"]
    },
    starterCode: `class Course {
    String courseCode;
    int maxStudents;

    // Konstruktorda maxStudents <= 0 tekshiruvini yozing
    
}

class Main {
    public static void main(String[] args) {
        // Noto'g'ri (manfiy) sig'im kiritib tekshiring
        
    }
}`,
    solution: `class Course {
    String courseCode;
    int maxStudents;

    public Course(String courseCode, int maxStudents) {
        this.courseCode = courseCode;
        if (maxStudents > 0) {
            this.maxStudents = maxStudents;
        } else {
            this.maxStudents = 30; // standart sig'im
        }
    }
}

class Main {
    public static void main(String[] args) {
        Course c1 = new Course("5COSC018C", 45);
        Course c2 = new Course("5BUIS009C", -10); // Noto'g'ri kiritildi

        System.out.println("Kurs: " + c1.courseCode + " | Sig'im: " + c1.maxStudents);
        System.out.println("Kurs: " + c2.courseCode + " | Sig'im (tuzatilgan): " + c2.maxStudents);
    }
}`,
    detailedSolution: {
      theory: "Himoyaviy Dasturlash (Defensive Programming): Obyekt tug'ilgan onidanoq (initsializatsiyada) to'g'ri ma'lumotlarga ega bo'lishini ta'minlash. Bu orqali kelajakda butun tizimda g'alati '0' yoki manfiy xatoliklar yuz bermaydi.",
      theoryEn: "Defensive validation inside constructor ensures no invalid instance enters system runtime.",
      cleanCode: "this.maxStudents = (maxStudents > 0) ? maxStudents : 30;",
      breakdown: [
        "Noto'g'ri kiritilgan manfiy qiymat to'g'rilandi.",
        "Ob'yekt doimo mantiqan to'g'ri sig'im bilan ish boshlaydi."
      ],
      pitfalls: "Validatsiyani faqat metodlarga qo'yib, konstruktorda unutish ob'yektning nosoz tug'ilishiga yo'l ochadi.",
      cw2Tip: "Tovar narxi 0 bo'lib qolmasligini konstruktorda tekshirish CW2 talabidir."
    }
  },

  {
    id: 26,
    tier: 3,
    tierName: "3-Bosqich: Konstruktorlar va Hayot Sikli",
    sector: "21-30",
    title: {
      uz: "26. Flight Ticket — Barcha Maydonlarni Xavfsiz Boshlang'ich Holatga Keltirish",
      en: "26. Flight Ticket — Robust State Initialization"
    },
    scenario: {
      uz: "Aviachipta yaratilayotganda barcha biznes parametrlar aniq kiritiladi. 'FlightTicket' klassini tuzing: 'ticketNumber' (String), 'fare' (double), 'isRefundable' (boolean). Konstruktor barcha 3 ta qiymatni qabul qilsin va agar 'fare < 50.0' bo'lsa, eng kam chipta narxi sifatida 50.0 belgilansin.",
      en: "Model 'FlightTicket' with 'ticketNumber', 'fare', and 'isRefundable'. Enforce minimum fare of 50.0 inside constructor."
    },
    requirements: {
      classes: ["FlightTicket", "Main"],
      fields: [
        { name: "ticketNumber", type: "String" },
        { name: "fare", type: "double" },
        { name: "isRefundable", type: "boolean" }
      ],
      constructors: ["FlightTicket"]
    },
    starterCode: `class FlightTicket {
    String ticketNumber;
    double fare;
    boolean isRefundable;

    // Konstruktorni yozing
    
}

class Main {
    public static void main(String[] args) {
        // Chipta yarating
        
    }
}`,
    solution: `class FlightTicket {
    String ticketNumber;
    double fare;
    boolean isRefundable;

    public FlightTicket(String ticketNumber, double fare, boolean isRefundable) {
        this.ticketNumber = ticketNumber;
        this.fare = (fare >= 50.0) ? fare : 50.0;
        this.isRefundable = isRefundable;
    }
}

class Main {
    public static void main(String[] args) {
        FlightTicket t1 = new FlightTicket("TK-78901", 320.0, true);
        FlightTicket t2 = new FlightTicket("TK-78902", 15.0, false); // Kam kiritilgan

        System.out.println("Chipta 1 narxi: $" + t1.fare + " | Qaytariladimi: " + t1.isRefundable);
        System.out.println("Chipta 2 narxi: $" + t2.fare + " | Qaytariladimi: " + t2.isRefundable);
    }
}`,
    detailedSolution: {
      theory: "Konstruktor biznes qoidalarining (invariants) birinchi himoya qalqonidir.",
      theoryEn: "Constructors serve as the primary defensive perimeter for domain invariants.",
      cleanCode: "this.fare = (fare >= 50.0) ? fare : 50.0;",
      breakdown: [
        "Chipta raqami va statusi saqlandi.",
        "Eng kam narx chegarasi o'rnatildi."
      ],
      pitfalls: "Ternar operatorida shartni ehtiyotkorlik bilan yozing.",
      cw2Tip: "CW2 bilet yoki buyurtma tizimida minimal buyurtma summasini shunday tekshirasiz."
    }
  },

  {
    id: 27,
    tier: 3,
    tierName: "3-Bosqich: Konstruktorlar va Hayot Sikli",
    sector: "21-30",
    title: {
      uz: "27. HR Contract — Mehnat Shartnomasi va Minimal Oylik Kafolati",
      en: "27. HR Contract — Minimum Wage Guarantee in Constructor"
    },
    scenario: {
      uz: "Korxonada xodimlar maoshi qonuniy eng kam ish haqidan kam bo'lishi mumkin emas. 'EmployeeContract' klassini tuzing: 'employeeName' (String), 'baseSalary' (double), 'department' (String). Agar kiritilgan 'baseSalary < 2000000.0' bo'lsa, 'this.baseSalary = 2000000.0' qilib eng kam kafolatlangan maosh o'rnatilsin.",
      en: "Model 'EmployeeContract' with 'employeeName', 'baseSalary', and 'department'. Guarantee statutory minimum wage (2,000,000.0) in constructor."
    },
    requirements: {
      classes: ["EmployeeContract", "Main"],
      fields: [
        { name: "employeeName", type: "String" },
        { name: "baseSalary", type: "double" },
        { name: "department", type: "String" }
      ],
      constructors: ["EmployeeContract"]
    },
    starterCode: `class EmployeeContract {
    String employeeName;
    double baseSalary;
    String department;

    // Konstruktorni yozing (minimal 2000000.0 sharti bilan)
    
}

class Main {
    public static void main(String[] args) {
        // Shartnoma yarating
        
    }
}`,
    solution: `class EmployeeContract {
    String employeeName;
    double baseSalary;
    String department;

    public EmployeeContract(String employeeName, double baseSalary, String department) {
        this.employeeName = employeeName;
        this.department = department;
        if (baseSalary >= 2000000.0) {
            this.baseSalary = baseSalary;
        } else {
            this.baseSalary = 2000000.0;
        }
    }
}

class Main {
    public static void main(String[] args) {
        EmployeeContract emp = new EmployeeContract("Sardor Qodirov", 1200000.0, "IT Qo'llab-quvvatlash");
        System.out.println("Xodim: " + emp.employeeName + " | Bo'lim: " + emp.department);
        System.out.println("Kafolatlangan oylik: " + emp.baseSalary + " so'm");
    }
}`,
    detailedSolution: {
      theory: "Konstruktorlar orqali qonuniy va biznes talablarni majburiy qilish — toza dasturiy arxitekturaning belgisidir.",
      theoryEn: "Enforcing statutory rules via constructor invariants is an enterprise clean architecture staple.",
      cleanCode: "this.baseSalary = Math.max(baseSalary, 2000000.0);",
      breakdown: [
        "Xodim ma'lumotlari xavfsiz o'rnatildi.",
        "Kam oylik kiritilganda kafolatlangan miqdor qo'yildi."
      ],
      pitfalls: "Math.max(a, b) metodidan foydalanish ham shartni qisqartirish uchun juda qulay.",
      cw2Tip: "Hisobot tizimlarida manfiy yoki xato sonlar kirib kelmasligining oldini oladi."
    }
  },

  {
    id: 28,
    tier: 3,
    tierName: "3-Bosqich: Konstruktorlar va Hayot Sikli",
    sector: "21-30",
    title: {
      uz: "28. SaaS Subscription — Ko'p Bosqichli Konstruktorlar Zanjiri",
      en: "28. SaaS Subscription — Multi-Stage Cascading Chaining"
    },
    scenario: {
      uz: "SaaS xizmatida 3 bosqichli tariflar mavjud. 'Subscription' klassini tuzing: 'planName' (String), 'monthlyPrice' (double), 'maxUsers' (int), 'autoRenew' (boolean). 3 ta konstruktor yozing:\n1) 'Subscription(String planName)' -> 'this(planName, 10.0, 1, true)' ga zanjir qilsin;\n2) 'Subscription(String planName, double monthlyPrice, int maxUsers)' -> 'this(planName, monthlyPrice, maxUsers, true)' ga zanjir qilsin;\n3) To'liq 4 ta parametrli bosh konstruktor barcha maydonlarni o'rnatsin.",
      en: "In SaaS Subscription, create 'Subscription' with 4 fields. Implement a 3-tier cascading constructor chain delegating down to the full 4-arg master constructor."
    },
    requirements: {
      classes: ["Subscription", "Main"],
      fields: [
        { name: "planName", type: "String" },
        { name: "monthlyPrice", type: "double" },
        { name: "maxUsers", type: "int" },
        { name: "autoRenew", type: "boolean" }
      ],
      constructors: ["Subscription"],
      keywords: ["this"]
    },
    starterCode: `class Subscription {
    String planName;
    double monthlyPrice;
    int maxUsers;
    boolean autoRenew;

    // 3 xil konstruktor zanjirini yozing
    
}

class Main {
    public static void main(String[] args) {
        // Turli zanjirlar orqali ob'yektlar yarating
        
    }
}`,
    solution: `class Subscription {
    String planName;
    double monthlyPrice;
    int maxUsers;
    boolean autoRenew;

    public Subscription(String planName, double monthlyPrice, int maxUsers, boolean autoRenew) {
        this.planName = planName;
        this.monthlyPrice = monthlyPrice;
        this.maxUsers = maxUsers;
        this.autoRenew = autoRenew;
    }

    public Subscription(String planName, double monthlyPrice, int maxUsers) {
        this(planName, monthlyPrice, maxUsers, true);
    }

    public Subscription(String planName) {
        this(planName, 10.0, 1, true);
    }
}

class Main {
    public static void main(String[] args) {
        Subscription s1 = new Subscription("Starter");
        Subscription s2 = new Subscription("Team", 45.0, 10);
        Subscription s3 = new Subscription("Enterprise", 199.0, 100, false);

        System.out.println("Plan: " + s1.planName + " ($" + s1.monthlyPrice + ", " + s1.maxUsers + " user, auto: " + s1.autoRenew + ")");
        System.out.println("Plan: " + s2.planName + " ($" + s2.monthlyPrice + ", " + s2.maxUsers + " users, auto: " + s2.autoRenew + ")");
        System.out.println("Plan: " + s3.planName + " ($" + s3.monthlyPrice + ", " + s3.maxUsers + " users, auto: " + s3.autoRenew + ")");
    }
}`,
    detailedSolution: {
      theory: "Kaskadli konstruktor zanjiri (Cascading Constructor Chaining) katta dasturlarda barcha birlamchi parametrlarni bitta asosiy konstruktorga olib boradi. Agar biror qoida o'zgarsa, faqat o'sha bitta konstruktorni o'zgartirish kifoya qiladi.",
      theoryEn: "Cascading chaining channels all variants into one master constructor, streamlining future maintenance.",
      cleanCode: "public Subscription(String planName) {\n    this(planName, 10.0, 1, true);\n}",
      breakdown: [
        "Starter, Team va Enterprise darajalari qulay parametrlar bilan yaratildi.",
        "Takrorlanish nolga tushirildi."
      ],
      pitfalls: "Zanjirda aylanma (circular) chaqiruv qilib qo'ymang (A -> B va B -> A), aks holda kompilyator xato beradi.",
      cw2Tip: "Enterprise tizimlarda konstruktorlar soni ko'p bo'ladi va ularni zanjirlash talab etiladi."
    }
  },

  {
    id: 29,
    tier: 3,
    tierName: "3-Bosqich: Konstruktorlar va Hayot Sikli",
    sector: "21-30",
    title: {
      uz: "29. GPS Navigation — 'GeoPoint' va Geografik Koordinatalar Tekshiruvi",
      en: "29. GPS Navigation — 'GeoPoint' & Coordinate Range Check"
    },
    scenario: {
      uz: "GPS navigatsiya tizimida koordinatalar qat'iy matematik chegaraga ega: Kenglik (latitude) -90.0 va +90.0 oralig'ida, Uzunlik (longitude) esa -180.0 va +180.0 oralig'ida bo'lishi shart. 'GeoPoint' klassini tuzing: 'latitude' (double), 'longitude' (double). Konstruktorda chegaradan chiqqan qiymatlarni 0.0 ga tenglang.",
      en: "In GPS Navigation, model 'GeoPoint' with 'latitude' and 'longitude'. In constructor, enforce latitude [-90.0, 90.0] and longitude [-180.0, 180.0], resetting out-of-bound inputs to 0.0."
    },
    requirements: {
      classes: ["GeoPoint", "Main"],
      fields: [
        { name: "latitude", type: "double" },
        { name: "longitude", type: "double" }
      ],
      constructors: ["GeoPoint"]
    },
    starterCode: `class GeoPoint {
    double latitude;
    double longitude;

    // Konstruktorda lat va lon oraliqlarini tekshiring
    
}

class Main {
    public static void main(String[] args) {
        // Koordinata ob'yektini sinab ko'ring
        
    }
}`,
    solution: `class GeoPoint {
    double latitude;
    double longitude;

    public GeoPoint(double latitude, double longitude) {
        if (latitude >= -90.0 && latitude <= 90.0) {
            this.latitude = latitude;
        } else {
            this.latitude = 0.0;
        }

        if (longitude >= -180.0 && longitude <= 180.0) {
            this.longitude = longitude;
        } else {
            this.longitude = 0.0;
        }
    }
}

class Main {
    public static void main(String[] args) {
        GeoPoint toshkent = new GeoPoint(41.2995, 69.2401);
        GeoPoint xatoNuqta = new GeoPoint(120.5, 200.0); // Ikkalasi ham chegaradan tashqarida

        System.out.println("Toshkent: lat=" + toshkent.latitude + ", lon=" + toshkent.longitude);
        System.out.println("Xato nuqta (tuzatilgan): lat=" + xatoNuqta.latitude + ", lon=" + xatoNuqta.longitude);
    }
}`,
    detailedSolution: {
      theory: "Domen chegaraviy qoidalari (Domain Validation Rules): Har bir muhandislik sohasida ma'lumotlar o'z tabiiy chegarasiga ega bo'ladi. Ularni konstruktorda tekshirish tizim barqarorligini ta'minlaydi.",
      theoryEn: "Domain coordinate ranges validated at construction shield maps from out-of-bound crashes.",
      cleanCode: "if (latitude >= -90.0 && latitude <= 90.0) this.latitude = latitude; else this.latitude = 0.0;",
      breakdown: [
        "Kenglik va uzunlik alohida tekshirildi.",
        "Noto'g'ri qiymat kiritilganda standart 0.0 koordinatasiga o'tkazildi."
      ],
      pitfalls: "Mantiqiy 'va' (&&) o'rniga 'yoki' (||) ishlatilsa tekshiruv buziladi.",
      cw2Tip: "Yandex Go kabi transport tizimlarida bu eng asosiy obyekt hisoblanadi."
    }
  },

  {
    id: 30,
    tier: 3,
    tierName: "3-Bosqich: Konstruktorlar va Hayot Sikli",
    sector: "21-30",
    title: {
      uz: "30. Warehouse Logistics — Ob'yekt Nusxasini Yaratish (Copy Constructor • Stage 3 Master)",
      en: "30. Warehouse Logistics — Copy Constructor (Stage 3 Master)"
    },
    scenario: {
      uz: "3-bosqich yakuniy topshirig'i! Mavjud ob'yektning barcha qiymatlarini yangi ob'yektga ko'chirib olish (cloning/duplication) uchun Copy Constructor ishlatiladi. 'Pallet' klassini tuzing: 'palletId' (String), 'weightLimit' (double), 'boxCount' (int). Ikki konstruktor yozing:\n1) 'public Pallet(String palletId, double weightLimit, int boxCount)';\n2) 'public Pallet(Pallet other)' — boshqa 'other' palletining qiymatlarini o'ziga ko'chirib oladi, faqat palletId oxiriga '-COPY' qo'shadi.",
      en: "Stage 3 Capstone! Implement a Copy Constructor! In 'Pallet', declare standard 3-arg constructor and 'public Pallet(Pallet other)' which clones fields and appends '-COPY' to palletId."
    },
    requirements: {
      classes: ["Pallet", "Main"],
      fields: [
        { name: "palletId", type: "String" },
        { name: "weightLimit", type: "double" },
        { name: "boxCount", type: "int" }
      ],
      constructors: ["Pallet"]
    },
    starterCode: `class Pallet {
    String palletId;
    double weightLimit;
    int boxCount;

    // Standart konstruktor va Copy Constructor yozing
    
}

class Main {
    public static void main(String[] args) {
        // Pallet yarating va uning nusxasini oling
        
    }
}`,
    solution: `class Pallet {
    String palletId;
    double weightLimit;
    int boxCount;

    public Pallet(String palletId, double weightLimit, int boxCount) {
        this.palletId = palletId;
        this.weightLimit = weightLimit;
        this.boxCount = boxCount;
    }

    // Copy Constructor
    public Pallet(Pallet other) {
        this.palletId = other.palletId + "-COPY";
        this.weightLimit = other.weightLimit;
        this.boxCount = other.boxCount;
    }
}

class Main {
    public static void main(String[] args) {
        Pallet p1 = new Pallet("PLT-100", 500.0, 24);
        Pallet p2 = new Pallet(p1); // Nusxalash

        System.out.println("Asl: " + p1.palletId + " | Qutilar: " + p1.boxCount);
        System.out.println("Nusxa: " + p2.palletId + " | Qutilar: " + p2.boxCount);
    }
}`,
    detailedSolution: {
      theory: "3-bosqichda biz ob'yektlarni xavfsiz yaratishni to'liq o'rgandik! Copy Constructor boshqa mavjud ob'yektdan yangi mustaqil nusxa ajratadi. Lekin sezgan bo'lsangiz, hanuzgacha maydonlarimiz (palletId, boxCount) ochiq turibdi va istalgan odam `p1.boxCount = -999;` qilib buzishi mumkin. Shu sababli 4-bosqichda ma'lumotlarni to'liq berkitish — INKAPSULYATSIYA va 'private' modifikatorini o'rganamiz!",
      theoryEn: "Copy constructors yield standalone clones. Stage 4 introduces ENCAPSULATION to restrict direct field access via 'private'.",
      cleanCode: "public Pallet(Pallet other) {\n    this.palletId = other.palletId + \"-COPY\";\n    this.weightLimit = other.weightLimit;\n    this.boxCount = other.boxCount;\n}",
      breakdown: [
        "Mavjud ob'yektning holati xavfsiz klonlandi.",
        "Heap xotirada mutlaqo mustaqil yangi ob'yekt hosil bo'ldi.",
        "Bu topshiriq 4-bosqichdagi inkapsulyatsiyaga yo'l ochadi."
      ],
      pitfalls: "Nusxa yaratayotganda `Pallet p2 = p1;` deb yozish yangi ob'yekt yaratmaydi, faqat bitta ob'yektga ikkinchi ko'rsatkich beradi!",
      cw2Tip: "Savatchadagi tovar nusxasini saqlashda va himoyalashda copy konstruktorlar ishlatiladi."
    }
  },

  // ==========================================================================
  // 4-BOSQICH (31–40): INKAPSULYATSIYA, PRIVATE VA GETTER/SETTERLAR
  // ==========================================================================
  {
    id: 31,
    tier: 4,
    tierName: "4-Bosqich: Inkapsulyatsiya va Himoya",
    sector: "31-40",
    title: {
      uz: "31. User Profile — 'private' Maydonlar va Xavfsiz Getterlar",
      en: "31. User Profile — 'private' Fields & Safe Getters"
    },
    scenario: {
      uz: "Inkapsulyatsiyaning 1-qoidasi: maydonlar to'g'ridan-to'g'ri tashqaridan ko'rinmasligi kerak. 'UserProfile' klassini tuzing: 'private String username;' va 'private String email;'. Konstruktor orqali ularni to'ldiring va qiymatlarni faqat o'qish uchun 'public String getUsername()' hamda 'public String getEmail()' getter metodlarini taqdim eting.",
      en: "Rule 1 of Encapsulation: protect internal fields! Create 'UserProfile' with 'private String username;' and 'private String email;'. Provide constructor and getters."
    },
    requirements: {
      classes: ["UserProfile", "Main"],
      privateFields: ["username", "email"],
      methods: ["getUsername", "getEmail"],
      constructors: ["UserProfile"]
    },
    starterCode: `class UserProfile {
    // username va email maydonlarini private qiling
    
    // Konstruktor va getUsername, getEmail metodlarini yozing
    
}

class Main {
    public static void main(String[] args) {
        // Ob'yekt yarating va getter orqali o'qing
        
    }
}`,
    solution: `class UserProfile {
    private String username;
    private String email;

    public UserProfile(String username, String email) {
        this.username = username;
        this.email = email;
    }

    public String getUsername() {
        return this.username;
    }

    public String getEmail() {
        return this.email;
    }
}

class Main {
    public static void main(String[] args) {
        UserProfile profile = new UserProfile("sherzod_it", "sherzod@wiut.uz");
        System.out.println("Foydalanuvchi: " + profile.getUsername() + " | Email: " + profile.getEmail());
    }
}`,
    detailedSolution: {
      theory: "Inkapsulyatsiya (Encapsulation) — ob'yekt holatini 'private' kalit so'zi orqali tashqi bevosita aralashuvdan berkitishdir. Ma'lumotlarni o'qish uchun maxsus 'getter' metodlari (masalan getUsername()) e'lon qilinadi.",
      theoryEn: "Encapsulation hides state behind 'private' access modifiers, providing access exclusively through getters.",
      cleanCode: "private String username;\npublic String getUsername() { return this.username; }",
      breakdown: [
        "Maydonlar 'private' qilib to'liq himoyalandi.",
        "Tashqaridan `profile.username` deb kirish endi taqiqlangan.",
        "Getterlar orqali xavfsiz o'qish ta'minlandi."
      ],
      pitfalls: "Getter metodlarida qiymat qaytishi shart, ularning turi maydon turi bilan bir xil bo'ladi.",
      cw2Tip: "CW2 barcha domen sinflarida har bir maydon 'private' bo'lishi majburiy shartdir."
    }
  },

  {
    id: 32,
    tier: 4,
    tierName: "4-Bosqich: Inkapsulyatsiya va Himoya",
    sector: "31-40",
    title: {
      uz: "32. Vault Bank Account — Balansni Himoyalangan Setter Bilan Nazorat Qilish",
      en: "32. Vault Bank Account — Guarded Balance Mutator via Setter"
    },
    scenario: {
      uz: "Bank hisobi balansi hech qachon manfiy qilib o'rnatilmasligi kerak. 'BankAccount' klassini tuzing: 'private double balance;'. 'public double getBalance()' getteri hamda 'public void setBalance(double balance)' setterini yozing: agar yangi balans >= 0 bo'lsa o'zgartirilsin, aks holda rad etilsin.",
      en: "Protect bank balance! In 'BankAccount', encapsulate 'private double balance;'. Provide 'getBalance()' and 'setBalance(double balance)' rejecting negative amounts."
    },
    requirements: {
      classes: ["BankAccount", "Main"],
      privateFields: ["balance"],
      methods: ["getBalance", "setBalance"]
    },
    starterCode: `class BankAccount {
    private double balance;

    // getBalance va setBalance metodlarini yozing (manfiylikdan himoya bilan)
    
}

class Main {
    public static void main(String[] args) {
        // Balansni musbat va manfiy qilib o'zgartirib ko'ring
        
    }
}`,
    solution: `class BankAccount {
    private double balance;

    public BankAccount(double initialBalance) {
        if (initialBalance >= 0) {
            this.balance = initialBalance;
        } else {
            this.balance = 0.0;
        }
    }

    public double getBalance() {
        return this.balance;
    }

    public void setBalance(double balance) {
        if (balance >= 0) {
            this.balance = balance;
        } else {
            System.out.println("Xato: Balans manfiy bo'lishi mumkin emas!");
        }
    }
}

class Main {
    public static void main(String[] args) {
        BankAccount acc = new BankAccount(100000.0);
        acc.setBalance(150000.0);
        acc.setBalance(-50000.0); // Rad etiladi

        System.out.println("Yakuniy balans: " + acc.getBalance() + " so'm");
    }
}`,
    detailedSolution: {
      theory: "Setter metodlari (Mutators) ma'lumotlarni o'zgartirishdan oldin tekshiruvdan o'tkazuvchi nazorat-o'tkazish punktidir. Agar maydon public bo'lsa, xohlagan kod `acc.balance = -9999` qilib tizimni buzgan bo'lardi.",
      theoryEn: "Setters act as checkpoint validators, preventing invalid state changes that would crash downstream modules.",
      cleanCode: "public void setBalance(double balance) {\n    if (balance >= 0) this.balance = balance;\n}",
      breakdown: [
        "To'g'ridan-to'g'ri maydonga yozish taqiqlandi.",
        "Setter orqali faqat noldan katta yoki teng qiymatlar qabul qilindi."
      ],
      pitfalls: "Konstruktor ichida ham xuddi shu tekshiruvni bajarishni yoki setBalanceni chaqirishni unutmang.",
      cw2Tip: "CW2 da buyurtma soni yoki narxi manfiy kiritilmasligi setterlar bilan kafolatlanadi."
    }
  },

  {
    id: 33,
    tier: 4,
    tierName: "4-Bosqich: Inkapsulyatsiya va Himoya",
    sector: "31-40",
    title: {
      uz: "33. Corporate Employee — Oylikni Kamaytirishni Taqiqlash (State-Dependent Setter)",
      en: "33. Corporate Employee — State-Dependent Salary Validation"
    },
    scenario: {
      uz: "Mehnat shartnomasiga ko'ra xodimning maoshi faqat oshishi mumkin, lekin kamaytirilishi taqiqlanadi. 'Employee' klassini tuzing: 'private String name;', 'private double salary;'. 'setSalary(double newSalary)' setterida yangi oylik avvalgi oylikdan kam bo'lmagandagina ('newSalary >= this.salary') qabul qilinishini ta'minlang.",
      en: "Enforce state-dependent validation! In 'Employee', encapsulate 'private String name;' and 'private double salary;'. In 'setSalary', accept changes only if 'newSalary >= this.salary'."
    },
    requirements: {
      classes: ["Employee", "Main"],
      privateFields: ["name", "salary"],
      methods: ["getName", "getSalary", "setSalary"],
      constructors: ["Employee"]
    },
    starterCode: `class Employee {
    private String name;
    private double salary;

    // Konstruktor, getterlar va himoyalangan setSalary ni yozing
    
}

class Main {
    public static void main(String[] args) {
        // Maoshni oshirib va kamaytirib ko'ring
        
    }
}`,
    solution: `class Employee {
    private String name;
    private double salary;

    public Employee(String name, double salary) {
        this.name = name;
        this.salary = (salary >= 0) ? salary : 0.0;
    }

    public String getName() {
        return this.name;
    }

    public double getSalary() {
        return this.salary;
    }

    public void setSalary(double newSalary) {
        if (newSalary >= this.salary) {
            this.salary = newSalary;
        } else {
            System.out.println("Taqiqlangan: Oylikni kamaytirish mumkin emas!");
        }
    }
}

class Main {
    public static void main(String[] args) {
        Employee emp = new Employee("Azizbek", 5000000.0);
        emp.setSalary(6500000.0); // Qabul qilinadi
        emp.setSalary(4000000.0); // Rad etiladi

        System.out.println("Xodim: " + emp.getName() + " | Oylik: " + emp.getSalary() + " so'm");
    }
}`,
    detailedSolution: {
      theory: "Holatga bog'liq validatsiya (State-dependent validation): Yangi qiymat nafaqat o'z-o'zidan to'g'ri bo'lishi, balki ob'yektning joriy qiymati bilan solishtirilganda ham biznes mantiqqa mos kelishi kerak.",
      theoryEn: "State-dependent mutators evaluate proposed values against current instance state.",
      cleanCode: "if (newSalary >= this.salary) this.salary = newSalary;",
      breakdown: [
        "Maydonlar to'liq inkapsulyatsiya qilindi.",
        "Oylik faqat ko'tarilish yo'nalishida o'zgaradi."
      ],
      pitfalls: "Shartda `newSalary >= this.salary` o'rniga faqat `newSalary >= 0` deb qo'yish kamaytirishga ruxsat berib yuboradi.",
      cw2Tip: "Auksion narxini oshirishda ham faqat yuqoriroq narxlar qabul qilinadi."
    }
  },

  {
    id: 34,
    tier: 4,
    tierName: "4-Bosqich: Inkapsulyatsiya va Himoya",
    sector: "31-40",
    title: {
      uz: "34. Rectangle Geometry — Hisoblanuvchi Getter (Computed Read-Only Property)",
      en: "34. Rectangle Geometry — Computed Read-Only Property"
    },
    scenario: {
      uz: "Har doim ham har bir getter uchun alohida maydon saqlash shart emas! 'Rectangle' klassini tuzing: 'private double width;', 'private double height;'. Maydonni hisoblash uchun alohida 'area' maydoni ochmang! Buning o'rniga 'public double getArea()' getterini yozing va u har safar 'width * height' formulasi orqali joriy natijani hisoblab qaytarsin.",
      en: "Avoid redundant state! Create 'Rectangle' with 'private double width;' and 'private double height;'. Implement computed getter 'public double getArea()' without storing a redundant area field."
    },
    requirements: {
      classes: ["Rectangle", "Main"],
      privateFields: ["width", "height"],
      methods: ["getWidth", "getHeight", "getArea"],
      constructors: ["Rectangle"]
    },
    starterCode: `class Rectangle {
    private double width;
    private double height;

    // Konstruktor va getWidth, getHeight, getArea metodlarini yozing
    
}

class Main {
    public static void main(String[] args) {
        // To'g'ri to'rtburchak maydonini hisoblang
        
    }
}`,
    solution: `class Rectangle {
    private double width;
    private double height;

    public Rectangle(double width, double height) {
        this.width = (width > 0) ? width : 1.0;
        this.height = (height > 0) ? height : 1.0;
    }

    public double getWidth() { return this.width; }
    public double getHeight() { return this.height; }

    // Computed Read-Only Property
    public double getArea() {
        return this.width * this.height;
    }
}

class Main {
    public static void main(String[] args) {
        Rectangle rect = new Rectangle(5.0, 8.0);
        System.out.println("Eni: " + rect.getWidth() + " | Bo'yi: " + rect.getHeight());
        System.out.println("Yuzasi: " + rect.getArea());
    }
}`,
    detailedSolution: {
      theory: "Hisoblanuvchi xususiyatlar (Computed Properties) ortiqcha ma'lumotlar saqlanishining oldini oladi. Agar 'area' maydoni ochilganda, 'width' o'zgarganda 'area' eskirib, sinxronizatsiya buzilishi mumkin edi.",
      theoryEn: "Computed properties prevent state desynchronization by deriving values dynamically on demand.",
      cleanCode: "public double getArea() {\n    return this.width * this.height;\n}",
      breakdown: [
        "Faqat poydevor maydonlar (width, height) xotirada saqlandi.",
        "Yuza hisobi getter ichida dinamik amalga oshirildi."
      ],
      pitfalls: "Hisoblanuvchi propertylar uchun setter yaratilmaydi — ular faqat read-only bo'ladi.",
      cw2Tip: "CW2 savatining umumiy summasi (`getTotalAmount()`) xuddi shunday dinamik hisoblanadi."
    }
  },

  {
    id: 35,
    tier: 4,
    tierName: "4-Bosqich: Inkapsulyatsiya va Himoya",
    sector: "31-40",
    title: {
      uz: "35. Supermarket Tax — QQS Qo'shilgan Narx Getteri ('getPriceWithTax')",
      en: "35. Supermarket Tax — Encapsulated Price with VAT Calculation"
    },
    scenario: {
      uz: "Tovarning asl narxi va soliq bilan hisoblangan narxi. 'Product' klassini tuzing: 'private double netPrice;'. Konstruktor, 'getNetPrice()', 'setNetPrice(double val)' hamda 12% QQS qo'shilgan narxni hisoblab qaytaruvchi 'public double getPriceWithTax()' getterini yarating.",
      en: "In Supermarket Tax, encapsulate 'private double netPrice;'. Provide getters/setters and computed 'public double getPriceWithTax()' adding 12% VAT."
    },
    requirements: {
      classes: ["Product", "Main"],
      privateFields: ["netPrice"],
      methods: ["getNetPrice", "setNetPrice", "getPriceWithTax"],
      constructors: ["Product"]
    },
    starterCode: `class Product {
    private double netPrice;

    // Konstruktor, getter/setter va getPriceWithTax metodlarini yozing
    
}

class Main {
    public static void main(String[] args) {
        // Tovar narxini QQS bilan ko'ring
        
    }
}`,
    solution: `class Product {
    private double netPrice;

    public Product(double netPrice) {
        this.setNetPrice(netPrice);
    }

    public double getNetPrice() {
        return this.netPrice;
    }

    public void setNetPrice(double netPrice) {
        if (netPrice >= 0) {
            this.netPrice = netPrice;
        } else {
            this.netPrice = 0.0;
        }
    }

    public double getPriceWithTax() {
        return this.netPrice * 1.12; // 12% QQS
    }
}

class Main {
    public static void main(String[] args) {
        Product p = new Product(100000.0);
        System.out.println("Tansiq narx: " + p.getNetPrice() + " so'm");
        System.out.println("QQS bilan narx: " + p.getPriceWithTax() + " so'm");
    }
}`,
    detailedSolution: {
      theory: "Konstruktor ichida to'g'ridan-to'g'ri 'this.netPrice = netPrice' deb yozmasdan, 'this.setNetPrice(netPrice)' orqali setterdan foydalanish DRY qoidasiga to'liq mos keladi.",
      theoryEn: "Calling setters within constructors reuses validation logic without duplication.",
      cleanCode: "public double getPriceWithTax() { return this.netPrice * 1.12; }",
      breakdown: [
        "Narx inkapsulyatsiya qilindi.",
        "Fiskal soliq qoidasi klass ichida berkitildi."
      ],
      pitfalls: "Soliq stavkasi o'zgarganda faqat klass ichidagi formulani o'zgartirish kifoya, butun dasturni qayta yozish shart emas.",
      cw2Tip: "Savdo kvitansiyalarida toza narx va soliq ajratib ko'rsatilishi shart."
    }
  },

  {
    id: 36,
    tier: 4,
    tierName: "4-Bosqich: Inkapsulyatsiya va Himoya",
    sector: "31-40",
    title: {
      uz: "36. WIUT Student ID — Setterda Satr Formatini Validatsiya Qilish",
      en: "36. WIUT Student ID — String Format Validation in Setter"
    },
    scenario: {
      uz: "WIUT talabalik guvohnomasi aniq formatda bo'lishi shart: u '000' bilan boshlanishi va jami 8 ta belgidan iborat bo'lishi kerak (masalan, '00012345'). 'Student' klassini tuzing: 'private String studentId;'. 'setStudentId(String id)' setterida agar shart bajarilsa qiymat o'rnatilsin, aks holda 'Xato ID formati' deb ogohlantirilsin.",
      en: "Enforce String format! In 'Student', encapsulate 'private String studentId;'. In 'setStudentId(String id)', validate that id starts with '000' and length equals 8."
    },
    requirements: {
      classes: ["Student", "Main"],
      privateFields: ["studentId"],
      methods: ["getStudentId", "setStudentId"],
      constructors: ["Student"]
    },
    starterCode: `class Student {
    private String studentId;

    // Konstruktor, getStudentId va formatni tekshiruvchi setStudentId ni yozing
    
}

class Main {
    public static void main(String[] args) {
        // To'g'ri va xato ID larni sinab ko'ring
        
    }
}`,
    solution: `class Student {
    private String studentId;

    public Student(String studentId) {
        this.setStudentId(studentId);
    }

    public String getStudentId() {
        return this.studentId;
    }

    public void setStudentId(String studentId) {
        if (studentId != null && studentId.length() == 8 && studentId.startsWith("000")) {
            this.studentId = studentId;
        } else {
            System.out.println("Xato: ID 8 ta belgidan iborat va '000' bilan boshlanishi shart!");
            this.studentId = "00000000";
        }
    }
}

class Main {
    public static void main(String[] args) {
        Student s1 = new Student("00014523"); // To'g'ri
        Student s2 = new Student("12345");    // Xato

        System.out.println("Talaba 1 ID: " + s1.getStudentId());
        System.out.println("Talaba 2 ID: " + s2.getStudentId());
    }
}`,
    detailedSolution: {
      theory: "String validatsiyasida null tekshiruvi (Null Check): Har qanday String metodini (length, startsWith) chaqirishdan oldin 'studentId != null' tekshiruvini qo'yish NullPointerException xatoligini bartaraf qiladi.",
      theoryEn: "Preemptively guarding against null pointers via 'studentId != null' ensures bulletproof string validations.",
      cleanCode: "if (studentId != null && studentId.length() == 8 && studentId.startsWith(\"000\"))",
      breakdown: [
        "Talaba identifikatori formati qat'iy nazoratga olindi.",
        "Xato kiritilganda standart xavfsiz qiymat berildi."
      ],
      pitfalls: "Shartda `studentId.length() == 8 && studentId != null` deb yozilsa, null kelgan paytda baribir xato beradi — 'null' tekshiruvi doim birinchi bo'lishi shart!",
      cw2Tip: "Mijoz telefon raqami (+998...) yoki pochtasini tekshirishda ham aynan shu tartib ishlatiladi."
    }
  },

  {
    id: 37,
    tier: 4,
    tierName: "4-Bosqich: Inkapsulyatsiya va Himoya",
    sector: "31-40",
    title: {
      uz: "37. Fiscal Receipt — O'zgarmas Klass (Immutable Class va 'final' Maydonlar)",
      en: "37. Fiscal Receipt — Immutable Class & 'final' State"
    },
    scenario: {
      uz: "To'lov cheki fiskal ma'lumot bo'lib, yaratilgandan keyin uni hech kim va hech qachon o'zgartira olmasligi shart. 'Receipt' klassini to'liq o'zgarmas (immutable) qiling: barcha maydonlar 'private final String txnId;' va 'private final double amount;' bo'lsin. Hech qanday setter metod yaratmang, faqat konstruktor va getterlar bo'lsin!",
      en: "Design an Immutable Class! In 'Receipt', declare 'private final String txnId;' and 'private final double amount;'. Provide constructor and getters with zero mutator setters."
    },
    requirements: {
      classes: ["Receipt", "Main"],
      privateFields: ["txnId", "amount"],
      methods: ["getTxnId", "getAmount"],
      constructors: ["Receipt"],
      keywords: ["final"]
    },
    starterCode: `class Receipt {
    // txnId va amount maydonlarini private final qiling
    
    // Konstruktor va getterlarni yozing (hech qanday setter bo'lmasin!)
    
}

class Main {
    public static void main(String[] args) {
        // O'zgarmas chek yarating
        
    }
}`,
    solution: `class Receipt {
    private final String txnId;
    private final double amount;

    public Receipt(String txnId, double amount) {
        this.txnId = txnId;
        this.amount = amount;
    }

    public String getTxnId() {
        return this.txnId;
    }

    public double getAmount() {
        return this.amount;
    }
}

class Main {
    public static void main(String[] args) {
        Receipt r = new Receipt("FISCAL-9912", 240000.0);
        System.out.println("Chek: " + r.getTxnId() + " | Summa: " + r.getAmount() + " so'm");
        // r.setAmount(...) mavjud emas va final maydonni o'zgartirib bo'lmaydi!
    }
}`,
    detailedSolution: {
      theory: "O'zgarmaslik (Immutability): 'final' maydonlar qiymatini faqat konstruktorda 1 marta olishi mumkin va shundan keyin umrining oxirigacha o'zgarmaydi. Setterlar yo'qligi sababli ob'yekt xotirada 100% thread-safe va buzilmas bo'lib yashaydi.",
      theoryEn: "Immutability guarantees thread-safety and audit integrity by combining 'final' fields with zero mutators.",
      cleanCode: "private final String txnId;\nprivate final double amount;",
      breakdown: [
        "Fiskal to'lov cheki xavfsiz himoyalandi.",
        "Maydonlar 'final' bo'lgani uchun o'zgarish mutlaqo imkonsiz."
      ],
      pitfalls: "final maydonga konstruktorda qiymat berish unutilsa, kompilyator xato beradi.",
      cw2Tip: "Moliyaviy operatsiyalar va audit yozuvlari har doim Immutable klasslar orqali ifodalanadi."
    }
  },

  {
    id: 38,
    tier: 4,
    tierName: "4-Bosqich: Inkapsulyatsiya va Himoya",
    sector: "31-40",
    title: {
      uz: "38. IoT Temperature — Selsiy va Farengeyt Abstraksiyasi (Unit Conversion)",
      en: "38. IoT Temperature — Celsius & Fahrenheit Abstraction"
    },
    scenario: {
      uz: "Datchik ichida harorat faqat bitta birlikda saqlanishi kerak, lekin mijozlar uni turli birliklarda so'rashi mumkin. 'TempSensor' klassini tuzing: faqat 'private double celsius;' maydoni bo'lsin. 'getCelsius()', 'setCelsius(double c)' hamda Farengeytga o'girib beruvchi 'public double getFahrenheit()' ('celsius * 9/5 + 32') getterini yarating.",
      en: "Model data abstraction! In 'TempSensor', store exclusively 'private double celsius;'. Expose 'getCelsius()', 'setCelsius()', and derived 'public double getFahrenheit()'."
    },
    requirements: {
      classes: ["TempSensor", "Main"],
      privateFields: ["celsius"],
      methods: ["getCelsius", "setCelsius", "getFahrenheit"],
      constructors: ["TempSensor"]
    },
    starterCode: `class TempSensor {
    private double celsius;

    // Konstruktor, getCelsius, setCelsius va getFahrenheit metodlarini yozing
    
}

class Main {
    public static void main(String[] args) {
        // Haroratni har ikkala birlikda ko'ring
        
    }
}`,
    solution: `class TempSensor {
    private double celsius;

    public TempSensor(double celsius) {
        this.setCelsius(celsius);
    }

    public double getCelsius() {
        return this.celsius;
    }

    public void setCelsius(double celsius) {
        // Mutlaq nol harorat (-273.15 C) dan past bo'lishi mumkin emas
        if (celsius >= -273.15) {
            this.celsius = celsius;
        } else {
            this.celsius = -273.15;
        }
    }

    public double getFahrenheit() {
        return (this.celsius * 9.0 / 5.0) + 32.0;
    }
}

class Main {
    public static void main(String[] args) {
        TempSensor sensor = new TempSensor(25.0);
        System.out.println("Harorat (Selsiy): " + sensor.getCelsius() + "°C");
        System.out.println("Harorat (Farengeyt): " + sensor.getFahrenheit() + "°F");
    }
}`,
    detailedSolution: {
      theory: "Ma'lumotlar Abstraksiyasi (Data Abstraction): Ichki saqlash formati bilan tashqi foydalanuvchi ko'radigan formatni ajratish. Foydalanuvchi Farengeytda so'rasa ham, ichkarida ortiqcha maydon ochilmaydi.",
      theoryEn: "Encapsulation cleanly decouples physical internal storage representations from external projection formats.",
      cleanCode: "public double getFahrenheit() { return (this.celsius * 9.0 / 5.0) + 32.0; }",
      breakdown: [
        "Fizik minimum (-273.15°C) setterda tekshirildi.",
        "Farengeyt birligiga matematik konvertatsiya taqdim etildi."
      ],
      pitfalls: "9/5 o'rniga 9.0/5.0 yozish shart, aks holda butun son bo'linishi (integer division) natijani 1 ga aylantirib qo'yadi!",
      cw2Tip: "Valyutalarni konvertatsiya qilishda aynan shu abstraksiya modeli qo'llaniladi."
    }
  },

  {
    id: 39,
    tier: 4,
    tierName: "4-Bosqich: Inkapsulyatsiya va Himoya",
    sector: "31-40",
    title: {
      uz: "39. Credit Score — Reyting Toifasini Aniqlash (Classification Property)",
      en: "39. Credit Score — Rating Classification Property"
    },
    scenario: {
      uz: "Bank skoring reytingi 300 dan 850 gacha bo'ladi. 'CreditScore' klassini tuzing: 'private int score;'. Konstruktor va setter 300..850 oralig'ini qat'iy nazorat qilsin. 'public String getCategory()' metodini yozing: agar score >= 750 bo'lsa 'EXCELLENT', score >= 650 bo'lsa 'GOOD', score >= 550 bo'lsa 'FAIR', aks holda 'POOR' qaytarsin.",
      en: "In Credit Score, encapsulate 'private int score;' bounded within [300, 850]. Implement 'public String getCategory()' categorizing score into 'EXCELLENT', 'GOOD', 'FAIR', or 'POOR'."
    },
    requirements: {
      classes: ["CreditScore", "Main"],
      privateFields: ["score"],
      methods: ["getScore", "setScore", "getCategory"],
      constructors: ["CreditScore"]
    },
    starterCode: `class CreditScore {
    private int score;

    // Konstruktor, getScore, setScore (300..850 chegarasi bilan) va getCategory ni yozing
    
}

class Main {
    public static void main(String[] args) {
        // Skoring toifasini aniqlang
        
    }
}`,
    solution: `class CreditScore {
    private int score;

    public CreditScore(int score) {
        this.setScore(score);
    }

    public int getScore() {
        return this.score;
    }

    public void setScore(int score) {
        if (score >= 300 && score <= 850) {
            this.score = score;
        } else {
            this.score = 300;
        }
    }

    public String getCategory() {
        if (this.score >= 750) return "EXCELLENT";
        if (this.score >= 650) return "GOOD";
        if (this.score >= 550) return "FAIR";
        return "POOR";
    }
}

class Main {
    public static void main(String[] args) {
        CreditScore cs = new CreditScore(780);
        System.out.println("Skoring bali: " + cs.getScore() + " | Toifa: " + cs.getCategory());
    }
}`,
    detailedSolution: {
      theory: "Toifalashtiruvchi xususiyatlar (Categorization Properties): Inkapsulyatsiya qilingan sonli qiymat asosida biznes toifasini aniqlab berish metodlari.",
      theoryEn: "Classification properties map internal continuous metrics into discrete business domains.",
      cleanCode: "if (this.score >= 750) return \"EXCELLENT\";",
      breakdown: [
        "Skoring chegarasi [300, 850] setterda himoyalandi.",
        "Kredit ajratish uchun toifalar aniq belgilandi."
      ],
      pitfalls: "Shartlarni tekshirishda katta sondan boshlash tartibiga rioya qiling.",
      cw2Tip: "Mijoz xarid hajmiga qarab VIP toifani aniqlashda aynan shu qoida ishlaydi."
    }
  },

  {
    id: 40,
    tier: 4,
    tierName: "4-Bosqich: Inkapsulyatsiya va Himoya",
    sector: "31-40",
    title: {
      uz: "40. Safe Credential — Bir Tomonlama Yoziluvchi Maydon (Write-Only & No-Leak Security • Stage 4 Master)",
      en: "40. Safe Credential — Write-Only State & Zero-Leak Security (Stage 4 Master)"
    },
    scenario: {
      uz: "4-bosqich yakuniy topshirig'i! Parolni hech kim (hatto dasturchi ham) getPassword() orqali o'qiy olmasligi kerak — haqiqiy inkapsulyatsiya! 'UserCredential' klassini tuzing: 'private String password;'. Getter YO'Q! Faqat 2 ta metod bo'lsin:\n1) 'public boolean verifyPassword(String attempt)' — kiritilgan parol to'g'ri bo'lsa 'true', aks holda 'false' qaytarsin;\n2) 'public boolean changePassword(String oldPass, String newPass)' — eski parol to'g'ri kelsa va yangi parol uzunligi >= 6 bo'lsa yangilasin.",
      en: "Stage 4 Capstone! Write-Only Encapsulation! In 'UserCredential', encapsulate 'private String password;'. Provide NO getter! Implement 'verifyPassword(String attempt)' and 'changePassword(String oldPass, String newPass)'."
    },
    requirements: {
      classes: ["UserCredential", "Main"],
      privateFields: ["password"],
      methods: ["verifyPassword", "changePassword"],
      constructors: ["UserCredential"]
    },
    starterCode: `class UserCredential {
    private String password;

    // Konstruktor, verifyPassword va changePassword metodlarini yozing (getter bo'lmasin!)
    
}

class Main {
    public static void main(String[] args) {
        // Parolni tekshiring va xavfsiz o'zgartiring
        
    }
}`,
    solution: `class UserCredential {
    private String password;

    public UserCredential(String initialPassword) {
        this.password = (initialPassword != null && initialPassword.length() >= 6) ? initialPassword : "default123";
    }

    // Parolni to'g'ridan-to'g'ri o'qish imkonsiz (No Getter!)
    public boolean verifyPassword(String attempt) {
        return this.password.equals(attempt);
    }

    public boolean changePassword(String oldPass, String newPass) {
        if (this.verifyPassword(oldPass) && newPass != null && newPass.length() >= 6) {
            this.password = newPass;
            return true;
        }
        return false;
    }
}

class Main {
    public static void main(String[] args) {
        UserCredential cred = new UserCredential("secret2024");

        System.out.println("Tekshiruv ('wrong'): " + cred.verifyPassword("wrong"));
        System.out.println("Tekshiruv ('secret2024'): " + cred.verifyPassword("secret2024"));

        boolean changed = cred.changePassword("secret2024", "newMasterPass99");
        System.out.println("Parol o'zgardimi: " + changed);
    }
}`,
    detailedSolution: {
      theory: "4-bosqichda biz to'liq inkapsulyatsiyani egalladik! Getter bo'lmasligi ham inkapsulyatsiyaning oliy shaklidir (Write-Only State). Tashqi kod ob'yektning ichki sirini bilmaydi, faqat undan natija so'raydi. Endi 5-bosqichda ushbu sinflarni birlashtirib, 'static' a'zolar, kompozitsiya va CW2 buyurtma arxitekturasini quramiz!",
      theoryEn: "Stage 4 mastered encapsulation, including zero-leak write-only state. Stage 5 synthesizes these concepts into static members, composition, and CW2 architecture.",
      cleanCode: "public boolean verifyPassword(String attempt) {\n    return this.password.equals(attempt);\n}",
      breakdown: [
        "Parol maxfiyligi to'liq ta'minlandi (o'qish yo'li yo'q).",
        "Eski parolni tasdiqlash orqali xavfsiz almashtirish amalga oshirildi.",
        "Bu topshiriq 5-bosqichdagi arxitektura va kompozitsiyaga ko'prikdir."
      ],
      pitfalls: "Stringlarni taqqoslashda '==' emas, doimo '.equals()' metodidan foydalaning!",
      cw2Tip: "Foydalanuvchi autentifikatsiyasida ma'lumotlarni himoyalashning asosiy shartidir."
    }
  },

  // ==========================================================================
  // 5-BOSQICH (41–50): STATIK A'ZOLAR, KOMPOZITSIYA VA CW2 ARXITEKTURASI
  // ==========================================================================
  {
    id: 41,
    tier: 5,
    tierName: "5-Bosqich: Statik A'zolar va Kompozitsiya",
    sector: "41-50",
    title: {
      uz: "41. System ID Generator — 'static' Hisoblagich va Avtomatik ID Berish",
      en: "41. System ID Generator — 'static' Counter & Auto-Increment IDs"
    },
    scenario: {
      uz: "Har bir yangi yaratilgan foydalanuvchiga ketma-ket avtomatik ID raqami berilishi kerak. 'UserAccount' klassini tuzing: 'public static int totalUsers = 0;' statik hisoblagichi, hamda 'private int id;' va 'private String username;' instans maydonlari bo'lsin. Konstruktor har safar chaqirilganda 'totalUsers' 1 ga oshsin va 'this.id = totalUsers;' deb belgilansin.",
      en: "In System ID Generator, model 'UserAccount' with 'public static int totalUsers = 0;' shared across all instances. In constructor, increment totalUsers and assign auto-increment id."
    },
    requirements: {
      classes: ["UserAccount", "Main"],
      privateFields: ["id", "username"],
      methods: ["getId", "getUsername"],
      constructors: ["UserAccount"],
      keywords: ["static"]
    },
    starterCode: `class UserAccount {
    public static int totalUsers = 0;
    private int id;
    private String username;

    // Konstruktorda totalUsers ni oshiring va id ga bering
    
}

class Main {
    public static void main(String[] args) {
        // 3 ta foydalanuvchi yarating va ID larini ko'ring
        
    }
}`,
    solution: `class UserAccount {
    public static int totalUsers = 0;
    private int id;
    private String username;

    public UserAccount(String username) {
        totalUsers++;
        this.id = totalUsers;
        this.username = username;
    }

    public int getId() { return this.id; }
    public String getUsername() { return this.username; }
}

class Main {
    public static void main(String[] args) {
        UserAccount u1 = new UserAccount("ali");
        UserAccount u2 = new UserAccount("vali");
        UserAccount u3 = new UserAccount("gani");

        System.out.println("User 1 ID: " + u1.getId() + " (" + u1.getUsername() + ")");
        System.out.println("User 2 ID: " + u2.getId() + " (" + u2.getUsername() + ")");
        System.out.println("User 3 ID: " + u3.getId() + " (" + u3.getUsername() + ")");
        System.out.println("Jami foydalanuvchilar soni: " + UserAccount.totalUsers);
    }
}`,
    detailedSolution: {
      theory: "'static' kalit so'zi maydonning aniq bir ob'yektga emas, balki butun klassga tegishli ekanligini bildiradi. Heap xotirada barcha ob'yektlar uchun bitta umumiy 'totalUsers' maydoni bo'ladi va ular ushbu bitta umumiy o'zgaruvchini ulashadi.",
      theoryEn: "'static' fields belong to the class blueprint in Metaspace, shared uniformly across all instantiated objects.",
      cleanCode: "public static int totalUsers = 0;\nUserAccount(String username) {\n    this.id = ++totalUsers;\n}",
      breakdown: [
        "Klass darajasidagi global hisoblagich tashkil qilindi.",
        "Har bir ob'yekt ketma-ket betakror ID ga ega bo'ldi."
      ],
      pitfalls: "Statik maydonlarga ob'yekt orqali emas (`u1.totalUsers`), klass nomi orqali (`UserAccount.totalUsers`) murojaat qilish Clean Code qoidasidir.",
      cw2Tip: "CW2 Console Order tizimida buyurtma raqamini (Order #1, Order #2) avtomatik generatsiya qilishda ayni usul shart."
    }
  },

  {
    id: 42,
    tier: 5,
    tierName: "5-Bosqich: Statik A'zolar va Kompozitsiya",
    sector: "41-50",
    title: {
      uz: "42. Math Utilities — 'static' Yordamchi Metodlar (Utility Class)",
      en: "42. Math Utilities — 'static' Helper Methods (Utility Class)"
    },
    scenario: {
      uz: "Nusxa olinmaydigan yordamchi utilit klassi! 'FinancialMath' klassini yarating: konstruktori 'private FinancialMath() {}' bo'lsin (nusxa olinmasligi uchun). Unga 2 ta statik metod yozing:\n1) 'public static double calcVat(double amount, double rate)' — soliq miqdorini hisoblasin;\n2) 'public static double roundTwoDecimals(double val)' — sonni 2 xonagacha yaxlitlasin ('Math.round(val * 100.0) / 100.0').",
      en: "Create a Utility Class! In 'FinancialMath', define a private constructor and static helpers: 'calcVat(double amount, double rate)' and 'roundTwoDecimals(double val)'."
    },
    requirements: {
      classes: ["FinancialMath", "Main"],
      methods: ["calcVat", "roundTwoDecimals"],
      keywords: ["static"]
    },
    starterCode: `class FinancialMath {
    // private konstruktor va static metodlarni yozing
    
}

class Main {
    public static void main(String[] args) {
        // FinancialMath.calcVat(...) orqali hisoblang
        
    }
}`,
    solution: `class FinancialMath {
    private FinancialMath() {}

    public static double calcVat(double amount, double rate) {
        return amount * (rate / 100.0);
    }

    public static double roundTwoDecimals(double val) {
        return Math.round(val * 100.0) / 100.0;
    }
}

class Main {
    public static void main(String[] args) {
        double soliq = FinancialMath.calcVat(1250000.0, 12.0);
        double yaxlitlangan = FinancialMath.roundTwoDecimals(145.6789);

        System.out.println("Hisoblangan soliq: " + soliq + " so'm");
        System.out.println("Yaxlitlangan qiymat: " + yaxlitlangan);
    }
}`,
    detailedSolution: {
      theory: "Utilit klasslar (Utility Classes): Java-dagi `Math` sinfi kabi faqat statik metodlardan iborat bo'lib, ob'yekt holatini saqlamaydi. Xususiy (private) konstruktor qo'yish orqali unga 'new FinancialMath()' chaqirilishi butunlay taqiqlanadi.",
      theoryEn: "Utility classes bundle stateless static functions and suppress instantiation via private constructors.",
      cleanCode: "private FinancialMath() {}\npublic static double calcVat(double amount, double rate) { ... }",
      breakdown: [
        "Nusxa olinmaydigan toza yordamchi klass yaratildi.",
        "Metodlar to'g'ridan-to'g'ri chaqirildi."
      ],
      pitfalls: "Statik metodlar ichidan instans maydonlarga ('this.x') murojaat qilib bo'lmaydi.",
      cw2Tip: "Valyuta konvertatsiyasi va formatlash utilitlarini alohida sinfga ajratish yaxshi me'morchilikdir."
    }
  },

  {
    id: 43,
    tier: 5,
    tierName: "5-Bosqich: Statik A'zolar va Kompozitsiya",
    sector: "41-50",
    title: {
      uz: "43. Central Bank — 'CurrencyConverter' va Umumiy Kurs ('static' State)",
      en: "43. Central Bank — 'CurrencyConverter' & Global Shared Rate"
    },
    scenario: {
      uz: "Barcha foydalanuvchilar Markaziy bankning yagona kursi bo'yicha pul almashtiradi. 'CurrencyConverter' klassini tuzing: 'private static double usdToUzs = 12700.0;' umumiy kursi bo'lsin. 'public static void setRate(double newRate)' va 'public static double toUzs(double usd)' metodlarini yozing. Kurs yangilanganda barcha keyingi konvertatsiyalar yangi kursda bo'lsin.",
      en: "In Central Bank, create 'CurrencyConverter' with 'private static double usdToUzs = 12700.0;'. Provide static 'setRate(double)' and 'toUzs(double usd)'."
    },
    requirements: {
      classes: ["CurrencyConverter", "Main"],
      methods: ["setRate", "toUzs"],
      keywords: ["static"]
    },
    starterCode: `class CurrencyConverter {
    private static double usdToUzs = 12700.0;

    // setRate va toUzs statik metodlarini yozing
    
}

class Main {
    public static void main(String[] args) {
        // Kursni o'zgartirib konvertatsiyani tekshiring
        
    }
}`,
    solution: `class CurrencyConverter {
    private static double usdToUzs = 12700.0;

    public static void setRate(double newRate) {
        if (newRate > 0) {
            usdToUzs = newRate;
        }
    }

    public static double toUzs(double usd) {
        return usd * usdToUzs;
    }
}

class Main {
    public static void main(String[] args) {
        double summa1 = CurrencyConverter.toUzs(100.0);
        System.out.println("100 USD (eski kurs): " + summa1 + " so'm");

        CurrencyConverter.setRate(12800.0);
        double summa2 = CurrencyConverter.toUzs(100.0);
        System.out.println("100 USD (yangi kurs): " + summa2 + " so'm");
    }
}`,
    detailedSolution: {
      theory: "Umumiy statik holat (Shared Static State): Kurs bitta joyda o'zgarishi bilan butun dastur bo'yicha barcha chaqiruvlar darhol yangilangan kursdan foydalana boshlaydi.",
      theoryEn: "Shared static configuration ensures unified state changes propagate globally across all modules.",
      cleanCode: "public static double toUzs(double usd) { return usd * usdToUzs; }",
      breakdown: [
        "Global valyuta kursi xavfsiz boshqarildi.",
        "Statik setter orqali yangi stavka barcha chaqiruvlarga ta'sir qildi."
      ],
      pitfalls: "Statik o'zgaruvchilarni ko'p joyda ehtiyotsiz o'zgartirish kutilmagan yon ta'sirlarga (side effects) sabab bo'lishi mumkin.",
      cw2Tip: "CW2 ilovasida global chegirma foizini boshqarishda qo'llaniladi."
    }
  },

  {
    id: 44,
    tier: 5,
    tierName: "5-Bosqich: Statik A'zolar va Kompozitsiya",
    sector: "41-50",
    title: {
      uz: "44. Person & Address — Ob'yekt Kompozitsiyasi ('has-a' Munosabati)",
      en: "44. Person & Address — Object Composition ('has-a' Relationship)"
    },
    scenario: {
      uz: "Kompozitsiya (Composition) — ob'yekt ichida boshqa ob'yektni saqlash! Ikki klass tuzing:\n1) 'Address' klassi: 'private String city;', 'private String street;'. Getterlari bo'lsin;\n2) 'Person' klassi: 'private String name;' va 'private Address address;'. 'Person' konstruktori manzil ob'yektini qabul qilsin va 'public String getFullDetails()' metodi odam ismi va uning shahar/ko'chasini qaytarsin.",
      en: "Implement Composition ('has-a')! Create 'Address' ('city', 'street') and 'Person' ('name', 'Address address'). 'Person' encapsulates 'Address' and prints complete resident details."
    },
    requirements: {
      classes: ["Address", "Person", "Main"],
      privateFields: ["city", "street", "name", "address"],
      methods: ["getFullDetails"],
      constructors: ["Address", "Person"]
    },
    starterCode: `class Address {
    private String city;
    private String street;

    // Konstruktor va getterlar
}

class Person {
    private String name;
    private Address address;

    // Konstruktor va getFullDetails metodi
}

class Main {
    public static void main(String[] args) {
        // Address va Person ob'yektlarini bog'lab chiqaring
        
    }
}`,
    solution: `class Address {
    private String city;
    private String street;

    public Address(String city, String street) {
        this.city = city;
        this.street = street;
    }

    public String getCity() { return this.city; }
    public String getStreet() { return this.street; }
}

class Person {
    private String name;
    private Address address;

    public Person(String name, Address address) {
        this.name = name;
        this.address = address;
    }

    public String getFullDetails() {
        return this.name + " (" + this.address.getCity() + ", " + this.address.getStreet() + ")";
    }
}

class Main {
    public static void main(String[] args) {
        Address addr = new Address("Toshkent", "Amir Temur ko'chasi, 12");
        Person p = new Person("Rustam Shokirov", addr);

        System.out.println("Shaxs ma'lumotlari: " + p.getFullDetails());
    }
}`,
    detailedSolution: {
      theory: "Kompozitsiya (Composition) — 'has-a' munosabatidir: 'Person has an Address' (Shaxsning manzili bor). Katta klasslarni mayda ixtisoslashgan ob'yektlardan yig'ish dastur kodini toza va modulli qiladi.",
      theoryEn: "Composition favors flexible 'has-a' delegation over monolithic single classes.",
      cleanCode: "public String getFullDetails() {\n    return this.name + \" (\" + this.address.getCity() + \", \" + this.address.getStreet() + \")\";\n}",
      breakdown: [
        "Manzil alohida qayta ishlatiluvchi klassga ajratildi.",
        "Person klassi Address ob'yektiga murojaat qildi."
      ],
      pitfalls: "Agar address null bo'lsa, `address.getCity()` chaqiruvi NullPointerException beradi — null tekshiruvini esdan chiqarmang.",
      cw2Tip: "CW2 da `Customer has an Address` va `Order has a Customer` aynan shu usulda quriladi."
    }
  },

  {
    id: 45,
    tier: 5,
    tierName: "5-Bosqich: Statik A'zolar va Kompozitsiya",
    sector: "41-50",
    title: {
      uz: "45. Vehicle & Engine — Kuchli Kompozitsiya va Ichki Delegatsiya",
      en: "45. Vehicle & Engine — Strong Composition & Internal Delegation"
    },
    scenario: {
      uz: "Avtomobil va uning dvigateli. Ikki klass tuzing:\n1) 'Engine' klassi: 'private int horsePower;', 'private String type;'. Getterlari bo'lsin;\n2) 'Car' klassi: 'private String model;', 'private Engine engine;'. 'public void startCar()' metodi 'engine.getHorsePower()' va 'engine.getType()' ma'lumotlariga tayanib avtomobil dvigateli yoqilganini chop etsin.",
      en: "Model strong composition! Create 'Engine' ('horsePower', 'type') and 'Car' ('model', 'Engine engine'). 'startCar()' delegates to engine to display ignition status."
    },
    requirements: {
      classes: ["Engine", "Car", "Main"],
      privateFields: ["horsePower", "type", "model", "engine"],
      methods: ["startCar"],
      constructors: ["Engine", "Car"]
    },
    starterCode: `class Engine {
    private int horsePower;
    private String type;

    // Konstruktor va getterlar
}

class Car {
    private String model;
    private Engine engine;

    // Konstruktor va startCar metodi
}

class Main {
    public static void main(String[] args) {
        // Avtomobilni motori bilan yarating va o't oldiring
        
    }
}`,
    solution: `class Engine {
    private int horsePower;
    private String type;

    public Engine(int horsePower, String type) {
        this.horsePower = horsePower;
        this.type = type;
    }

    public int getHorsePower() { return this.horsePower; }
    public String getType() { return this.type; }
}

class Car {
    private String model;
    private Engine engine;

    public Car(String model, Engine engine) {
        this.model = model;
        this.engine = engine;
    }

    public void startCar() {
        System.out.println(this.model + " o't oldirildi! Dvigatel: " + this.engine.getType() + " (" + this.engine.getHorsePower() + " HP)");
    }
}

class Main {
    public static void main(String[] args) {
        Engine turbo = new Engine(250, "2.0 Turbo");
        Car myCar = new Car("Malibu Premier", turbo);

        myCar.startCar();
    }
}`,
    detailedSolution: {
      theory: "Delegatsiya (Delegation): 'Car' o'z dvigatelining ot kuchini saqlamaydi, balki ushbu mas'uliyatni o'zining ichki qismi bo'lgan 'Engine' ob'yektiga topshiradi.",
      theoryEn: "Delegation assigns specialized responsibilities to dedicated component instances.",
      cleanCode: "this.engine.getType() + \" (\" + this.engine.getHorsePower() + \" HP)\"",
      breakdown: [
        "Dvigatel mustaqil modulli ob'yekt sifatida yaratildi.",
        "Avtomobil dvigatel imkoniyatlaridan to'liq foydalandi."
      ],
      pitfalls: "Kompozitsiya qilingan ob'yektni private qilib himoyalash yaxshi amaliyotdir.",
      cw2Tip: "CW2 tizimida `Order` o'z to'lovini `PaymentProcessor` ob'yektiga delegatsiya qiladi."
    }
  },

  {
    id: 46,
    tier: 5,
    tierName: "5-Bosqich: Statik A'zolar va Kompozitsiya",
    sector: "41-50",
    title: {
      uz: "46. E-Commerce Cart — 'Product' va 'OrderItem' Savat Pozitsiyasi",
      en: "46. E-Commerce Cart — 'Product' & 'OrderItem' Cart Line Item"
    },
    scenario: {
      uz: "Savatdagi har bir qator tovar va uning sonidan iborat bo'ladi. Ikki klass tuzing:\n1) 'Product' klassi: 'private String name;', 'private double price;'. Konstruktor va getterlari bo'lsin;\n2) 'OrderItem' klassi: 'private Product product;', 'private int quantity;'. 'public double getSubtotal()' metodi tovar narxini uning soniga ko'paytirib qaytarsin ('product.getPrice() * quantity').",
      en: "In E-Commerce Cart, create 'Product' ('name', 'price') and 'OrderItem' ('Product product', 'int quantity'). Implement 'public double getSubtotal()' calculating line item total."
    },
    requirements: {
      classes: ["Product", "OrderItem", "Main"],
      privateFields: ["name", "price", "product", "quantity"],
      methods: ["getSubtotal"],
      constructors: ["Product", "OrderItem"]
    },
    starterCode: `class Product {
    private String name;
    private double price;

    // Konstruktor va getterlar
}

class OrderItem {
    private Product product;
    private int quantity;

    // Konstruktor va getSubtotal metodi
}

class Main {
    public static void main(String[] args) {
        // Product va OrderItem yarating, oraliq summani hisoblang
        
    }
}`,
    solution: `class Product {
    private String name;
    private double price;

    public Product(String name, double price) {
        this.name = name;
        this.price = (price >= 0) ? price : 0.0;
    }

    public String getName() { return this.name; }
    public double getPrice() { return this.price; }
}

class OrderItem {
    private Product product;
    private int quantity;

    public OrderItem(Product product, int quantity) {
        this.product = product;
        this.quantity = (quantity > 0) ? quantity : 1;
    }

    public Product getProduct() { return this.product; }
    public int getQuantity() { return this.quantity; }

    public double getSubtotal() {
        return this.product.getPrice() * this.quantity;
    }
}

class Main {
    public static void main(String[] args) {
        Product p = new Product("Simsiz Quloqchin", 350000.0);
        OrderItem item = new OrderItem(p, 3);

        System.out.println("Tovar: " + item.getProduct().getName() + " x " + item.getQuantity() + " dona");
        System.out.println("Oraliq summa: " + item.getSubtotal() + " so'm");
    }
}`,
    detailedSolution: {
      theory: "'OrderItem' — savdodagi asosiy element (Line Item). U tovarning o'zi emas, balki tovarning savatdagi nusxasi va sonini birlashtiruvchi kompozitsion ko'prikdir.",
      theoryEn: "'OrderItem' serves as the line item linking a domain product with its cart quantity.",
      cleanCode: "public double getSubtotal() {\n    return this.product.getPrice() * this.quantity;\n}",
      breakdown: [
        "Product va OrderItem o'rtasidagi bog'liqlik to'g'ri o'rnatildi.",
        "Oraliq narx kompozitsiyalangan Product getteri orqali hisoblandi."
      ],
      pitfalls: "Product narxi o'zgarsa ham, OrderItem har doim dolzarb narxni oladi.",
      cw2Tip: "Bu sinf CW2 kurs ishining eng markaziy ob'yektlaridan biridir."
    }
  },

  {
    id: 47,
    tier: 5,
    tierName: "5-Bosqich: Statik A'zolar va Kompozitsiya",
    sector: "41-50",
    title: {
      uz: "47. Enterprise Order — Mijoz va Buyurtma Assotsiatsiyasi ('Customer' & 'Order')",
      en: "47. Enterprise Order — Customer & Order Association"
    },
    scenario: {
      uz: "Buyurtma har doim aniq bir mijozga tegishli bo'ladi. Ikki klass tuzing:\n1) 'Customer' klassi: 'private int customerId;', 'private String fullName;', 'private String phone;'. Konstruktor va getterlari bo'lsin;\n2) 'Order' klassi: 'private int orderId;', 'private Customer customer;', 'private double totalAmount;'. 'public void printOrderSummary()' metodi buyurtma raqami, mijoz ismi, telefoni va to'lov summasini chiroyli konsolga chiqarsin.",
      en: "Model enterprise association! Create 'Customer' ('customerId', 'fullName', 'phone') and 'Order' ('orderId', 'Customer customer', 'totalAmount'). 'printOrderSummary()' prints formatted invoice."
    },
    requirements: {
      classes: ["Customer", "Order", "Main"],
      privateFields: ["customerId", "fullName", "phone", "orderId", "customer", "totalAmount"],
      methods: ["printOrderSummary"],
      constructors: ["Customer", "Order"]
    },
    starterCode: `class Customer {
    private int customerId;
    private String fullName;
    private String phone;

    // Konstruktor va getterlar
}

class Order {
    private int orderId;
    private Customer customer;
    private double totalAmount;

    // Konstruktor va printOrderSummary metodi
}

class Main {
    public static void main(String[] args) {
        // Customer va Order tuzib summary chiqaring
        
    }
}`,
    solution: `class Customer {
    private int customerId;
    private String fullName;
    private String phone;

    public Customer(int customerId, String fullName, String phone) {
        this.customerId = customerId;
        this.fullName = fullName;
        this.phone = phone;
    }

    public int getCustomerId() { return this.customerId; }
    public String getFullName() { return this.fullName; }
    public String getPhone() { return this.phone; }
}

class Order {
    private int orderId;
    private Customer customer;
    private double totalAmount;

    public Order(int orderId, Customer customer, double totalAmount) {
        this.orderId = orderId;
        this.customer = customer;
        this.totalAmount = totalAmount;
    }

    public void printOrderSummary() {
        System.out.println("=== BUYURTMA #" + this.orderId + " ===");
        System.out.println("Mijoz: " + this.customer.getFullName() + " (Tel: " + this.customer.getPhone() + ")");
        System.out.println("To'lov summasi: " + this.totalAmount + " so'm");
        System.out.println("==========================");
    }
}

class Main {
    public static void main(String[] args) {
        Customer c = new Customer(101, "Dilshod Karimov", "+998931112233");
        Order ord = new Order(5001, c, 480000.0);

        ord.printOrderSummary();
    }
}`,
    detailedSolution: {
      theory: "Assotsiatsiya (Association): 'Order' ob'yekti 'Customer' ob'yektini o'z ichida saqlab, uning shaxsiy ma'lumotlariga xavfsiz erishadi. Bu real axborot tizimlaridagi munosabatlar bazasini (Relational mapping) tashkil etadi.",
      theoryEn: "Object association models relational foreign keys via object references in object-oriented memory.",
      cleanCode: "System.out.println(\"Mijoz: \" + this.customer.getFullName());",
      breakdown: [
        "Mijoz va buyurtma o'rtasida to'g'ridan-to'g'ri bog'liqlik o'rnatildi.",
        "Buyurtma xulosasi kvitansiya ko'rinishida formatlandi."
      ],
      pitfalls: "Customer ob'yektining maydonlari 'private' bo'lgani sababli `this.customer.fullName` emas, `this.customer.getFullName()` orqali o'qiladi.",
      cw2Tip: "CW2 konsol ilovangizda foydalanuvchi buyurtmalari aynan shu modelda tashkil qilinadi."
    }
  },

  {
    id: 48,
    tier: 5,
    tierName: "5-Bosqich: Statik A'zolar va Kompozitsiya",
    sector: "41-50",
    title: {
      uz: "48. Global Constants — 'public static final' Tizim Sozlamalari",
      en: "48. Global Constants — 'public static final' App Configuration"
    },
    scenario: {
      uz: "Ilova nomi, versiyasi va maksimal chegirma darajasi butun tizim uchun o'zgarmas umumiy doimiylik (constant) bo'lishi kerak. 'AppConfig' klassini tuzing: 'public static final String APP_NAME = \"WIUT Academy\";', 'public static final String VERSION = \"2.0\";', 'public static final double MAX_DISCOUNT_PCT = 30.0;'. Nusxa olinmasligi uchun private konstruktor bering.",
      en: "Model global configuration constants! In 'AppConfig', declare public static final constants for APP_NAME, VERSION, and MAX_DISCOUNT_PCT with private constructor."
    },
    requirements: {
      classes: ["AppConfig", "Main"],
      keywords: ["static", "final"]
    },
    starterCode: `class AppConfig {
    // public static final konstantalarni e'lon qiling
    
}

class Main {
    public static void main(String[] args) {
        // AppConfig konstantalarini to'g'ridan-to'g'ri chop eting
        
    }
}`,
    solution: `class AppConfig {
    private AppConfig() {}

    public static final String APP_NAME = "WIUT Academy";
    public static final String VERSION = "2.0";
    public static final double MAX_DISCOUNT_PCT = 30.0;
}

class Main {
    public static void main(String[] args) {
        System.out.println("Tizim: " + AppConfig.APP_NAME + " v" + AppConfig.VERSION);
        System.out.println("Maksimal ruxsat etilgan chegirma: " + AppConfig.MAX_DISCOUNT_PCT + "%");
    }
}`,
    detailedSolution: {
      theory: "Konstantalar Konvensiyasi (Constant Naming): 'public static final' deb e'lon qilingan o'zgaruvchilar Java-da doim KATTA_HARFLAR bilan va so'zlar orasi pastki chiziq ('_') bilan yoziladi. Ular butun ilovaning global sozlamalarini boshqaradi.",
      theoryEn: "'public static final' fields define globally accessible compile-time constants adhering to UPPER_SNAKE_CASE.",
      cleanCode: "public static final String APP_NAME = \"WIUT Academy\";",
      breakdown: [
        "Xotirada faqat 1 ta o'zgarmas nusxada saqlanuvchi doimiyliklar.",
        "Ob'yekt yaratmasdan to'g'ridan-to'g'ri foydalaniladi."
      ],
      pitfalls: "Konstantalarni kichik harflar bilan yozish Clean Code talablariga zid sanaladi.",
      cw2Tip: "Soliq stavkalari va do'kon nomini shunday o'zgarmas qilib e'lon qilish tavsiya etiladi."
    }
  },

  {
    id: 49,
    tier: 5,
    tierName: "5-Bosqich: Statik A'zolar va Kompozitsiya",
    sector: "41-50",
    title: {
      uz: "49. Warehouse Report — Bir Nechta Ob'yektlar Kompozitsiyasi va Jami Qiymat",
      en: "49. Warehouse Report — Multi-Object Container Composition"
    },
    scenario: {
      uz: "Ombordagi 3 ta tovarning umumiy holatini hisoblovchi konteyner klass. 'Product' klassi: 'name' (String), 'price' (double), 'stock' (int). 'WarehouseReport' klassini tuzing: uning ichida 3 ta mahsulot ('private Product p1, p2, p3;') saqlansin. Konstruktorda 3 ta mahsulotni qabul qilsin va 'public double calculateTotalInventoryValue()' metodi ularning barchasining umumiy qiymatini ('p1.price * p1.stock + ...') hisoblab bersin.",
      en: "Model multi-object container composition! In 'WarehouseReport', encapsulate three 'Product' instances and implement 'calculateTotalInventoryValue()' returning sum of (price * stock)."
    },
    requirements: {
      classes: ["Product", "WarehouseReport", "Main"],
      privateFields: ["name", "price", "stock", "p1", "p2", "p3"],
      methods: ["calculateTotalInventoryValue"],
      constructors: ["Product", "WarehouseReport"]
    },
    starterCode: `class Product {
    private String name;
    private double price;
    private int stock;

    // Konstruktor va getterlar
}

class WarehouseReport {
    private Product p1;
    private Product p2;
    private Product p3;

    // Konstruktor va calculateTotalInventoryValue metodi
}

class Main {
    public static void main(String[] args) {
        // Tovarlar va hisobot ob'yektini yarating
        
    }
}`,
    solution: `class Product {
    private String name;
    private double price;
    private int stock;

    public Product(String name, double price, int stock) {
        this.name = name;
        this.price = (price >= 0) ? price : 0.0;
        this.stock = (stock >= 0) ? stock : 0;
    }

    public String getName() { return this.name; }
    public double getPrice() { return this.price; }
    public int getStock() { return this.stock; }
}

class WarehouseReport {
    private Product p1;
    private Product p2;
    private Product p3;

    public WarehouseReport(Product p1, Product p2, Product p3) {
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
    }

    public double calculateTotalInventoryValue() {
        double v1 = p1.getPrice() * p1.getStock();
        double v2 = p2.getPrice() * p2.getStock();
        double v3 = p3.getPrice() * p3.getStock();
        return v1 + v2 + v3;
    }
}

class Main {
    public static void main(String[] args) {
        Product prd1 = new Product("Laptop Dell", 8500000.0, 5);
        Product prd2 = new Product("Monitor 27", 2200000.0, 10);
        Product prd3 = new Product("Klaviatura RGB", 350000.0, 20);

        WarehouseReport report = new WarehouseReport(prd1, prd2, prd3);
        double totalVal = report.calculateTotalInventoryValue();

        System.out.println("Ombordagi barcha tovarlarning jami qiymati: " + totalVal + " so'm");
    }
}`,
    detailedSolution: {
      theory: "Konteyner Kompozitsiyasi (Container Composition): Bir nechta ob'yektlarni bitta boshqaruvchi klass ostida jamlash. Bu 4-haftada o'rganiladigan 'ArrayList' va kolleksiyalar arxitekturasining bevosita poydevoridir.",
      theoryEn: "Container composition orchestrates collections of subordinate entities to synthesize higher-order metrics.",
      cleanCode: "public double calculateTotalInventoryValue() {\n    return (p1.getPrice() * p1.getStock()) + (p2.getPrice() * p2.getStock()) + (p3.getPrice() * p3.getStock());\n}",
      breakdown: [
        "Har bir tovar mustaqil maydon sifatida jamlandi.",
        "Ombor bo'yicha jami aktivlar qiymati hisoblandi."
      ],
      pitfalls: "Stock yoki price manfiy bo'lmasligi tovar konstruktorida kafolatlanishi shart.",
      cw2Tip: "CW2 loyihangizda ombor zaxirasini tahlil qilish moduli aynan shunday ishlaydi."
    }
  },

  {
    id: 50,
    tier: 5,
    tierName: "5-Bosqich: Statik A'zolar va Kompozitsiya",
    sector: "41-50",
    title: {
      uz: "50. CW2 Capstone Prototip — 'Customer', 'Product', 'Order' To'liq Konsol Buyurtma Ilovasi",
      en: "50. CW2 Capstone Prototype — Full Console Order Application Architecture (Grand Finale)"
    },
    scenario: {
      uz: "1-MODULNING ENG CHO'QQISI — CW2 GURUH LOYIHASINING HAQIQIY PROTOTIPI!\nUshbu topshiriqda barcha 5 bosqich (klasslar, metodlar, konstruktorlar, inkapsulyatsiya, static va kompozitsiya) birlashadi:\n1) 'Customer' klassi: 'name', 'phone';\n2) 'Product' klassi: 'title', 'price';\n3) 'Order' klassi:\n   - 'public static int orderCounter = 0;'\n   - 'private int orderId;'\n   - 'private Customer customer;'\n   - 'private Product product;'\n   - 'private int quantity;'\n   - 'public Order(Customer customer, Product product, int quantity)' — orderCounter ni oshirib, orderId ga beradi;\n   - 'public void printInvoice(double discountPct)' — mijoz ma'lumotlari, tovar nomi, narxi, chegirma va YAKUNIY TO'LOV chekini to'liq formatda chop etadi!",
      en: "MODULE 1 GRAND FINALE — AUTHENTIC CW2 CONSOLE PROTOTYPE!\nIntegrate all 5 stages: 'Customer', 'Product', and 'Order' with static auto-increment orderCounter, composition, encapsulation, and complete 'printInvoice(double discountPct)'!"
    },
    requirements: {
      classes: ["Customer", "Product", "Order", "Main"],
      privateFields: ["name", "phone", "title", "price", "orderId", "customer", "product", "quantity"],
      methods: ["printInvoice"],
      constructors: ["Customer", "Product", "Order"],
      keywords: ["static"]
    },
    starterCode: `// 1. Customer klassini yozing (name, phone)

// 2. Product klassini yozing (title, price)

// 3. Order klassini yozing (static counter, Customer, Product, quantity, printInvoice)

class Main {
    public static void main(String[] args) {
        // Customer, Product va Order yarating, 10% chegirma bilan chekni chop eting
        
    }
}`,
    solution: `class Customer {
    private String name;
    private String phone;

    public Customer(String name, String phone) {
        this.name = name;
        this.phone = phone;
    }

    public String getName() { return this.name; }
    public String getPhone() { return this.phone; }
}

class Product {
    private String title;
    private double price;

    public Product(String title, double price) {
        this.title = title;
        this.price = (price >= 0) ? price : 0.0;
    }

    public String getTitle() { return this.title; }
    public double getPrice() { return this.price; }
}

class Order {
    public static int orderCounter = 0;
    private int orderId;
    private Customer customer;
    private Product product;
    private int quantity;

    public Order(Customer customer, Product product, int quantity) {
        orderCounter++;
        this.orderId = orderCounter;
        this.customer = customer;
        this.product = product;
        this.quantity = (quantity > 0) ? quantity : 1;
    }

    public int getOrderId() { return this.orderId; }

    public void printInvoice(double discountPct) {
        double subtotal = this.product.getPrice() * this.quantity;
        double discount = subtotal * (discountPct / 100.0);
        double total = subtotal - discount;

        System.out.println("================================================");
        System.out.println("          WIUT OOP ENTERPRISE INVOICE          ");
        System.out.println("Buyurtma Raqami: #" + this.orderId);
        System.out.println("Mijoz: " + this.customer.getName() + " | Tel: " + this.customer.getPhone());
        System.out.println("------------------------------------------------");
        System.out.println("Tovar: " + this.product.getTitle());
        System.out.println("Dona narxi: " + this.product.getPrice() + " so'm x " + this.quantity + " dona");
        System.out.println("Oraliq summa: " + subtotal + " so'm");
        System.out.println("Chegirma (" + discountPct + "%): -" + discount + " so'm");
        System.out.println("------------------------------------------------");
        System.out.println("JAMI TO'LOV: " + total + " so'm");
        System.out.println("================================================");
    }
}

class Main {
    public static void main(String[] args) {
        Customer client = new Customer("Ravshanbek Rahimov", "+998901234567");
        Product macbook = new Product("MacBook Air M3", 14500000.0);

        Order order1 = new Order(client, macbook, 1);
        order1.printInvoice(10.0); // 10% talaba chegirmasi
    }
}`,
    detailedSolution: {
      theory: "TABRIKLAYMIZ! Siz 1-modulning barcha 5 ta bosqichini to'liq yakunladingiz:\n1. Klasslar va maydonlar (Heap vs Stack)\n2. Instans metodlar va biznes operatsiyalari\n3. Konstruktorlar va himoyaviy initsializatsiya\n4. Inkapsulyatsiya ('private', getter/setterlar va xavfsizlik)\n5. Statik a'zolar, kompozitsiya va buyurtma arxitekturasi.\nUshbu 50-topshiriq WIUT 5COSC018C modulining 50 foizlik Coursework 2 (Console Order Application) loyihasining yuragini tashkil qiladi!",
      theoryEn: "CONGRATULATIONS! You have mastered Module 1! This Capstone model represents the production architecture expected in WIUT 5COSC018C Coursework 2.",
      cleanCode: "Order order1 = new Order(client, macbook, 1);\norder1.printInvoice(10.0);",
      breakdown: [
        "Customer, Product va Order sinflari to'liq inkapsulyatsiya bilan birlashtirildi.",
        "Statik hisoblagich buyurtmalarni avtomatik raqamladi.",
        "Chek chiqarish to'liq professional darajada amalga oshirildi."
      ],
      pitfalls: "Chegirma hisoblashda subtotalga salbiy ta'sir ko'rsatmaslik uchun doimo qavslarga e'tibor bering.",
      cw2Tip: "CW2 baholash mezonida UML diagrammasini tuzishda aynan ushbu 3 ta klass asos qilib olinadi!"
    }
  }
];

// Write to files
const fileContent = `// ============================================================================
// OOP ACADEMY — 50 PROGRESSIVE BESPOKE CHALLENGES (WEEK 1)
// WIUT 5COSC018C • Senior Java Architect (Professor Ada)
// 5 Stages x 10 Distinct, Standalone, Non-Repetitive Challenges (Easy -> Hard)
// ============================================================================

window.OOP_CHALLENGES_W1 = ${JSON.stringify(challenges, null, 2)};
`;

fs.writeFileSync(targetPath, fileContent, 'utf8');
console.log('✅ Generated Week 1 challenges in:', targetPath);

try {
  const mirrorDir = path.dirname(mirrorPath);
  if (!fs.existsSync(mirrorDir)) fs.mkdirSync(mirrorDir, { recursive: true });
  fs.writeFileSync(mirrorPath, fileContent, 'utf8');
  console.log('✅ Mirrored Week 1 challenges to:', mirrorPath);
} catch (e) {
  console.warn('Could not mirror:', e.message);
}
