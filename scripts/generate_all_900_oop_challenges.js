// ============================================================================
// MASTER GENERATOR: 900 BESPOKE PROGRESSIVE OOP CHALLENGES (WEEKS 1 TO 6)
// WIUT 5COSC018C • Senior Java Architect (Professor Ada)
// ============================================================================

const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', 'oop', 'shared');
const mirrorDir = 'C:\\Users\\Ravshanbek\\Documents\\WIUT\\OOP\\oop-academy\\shared';

if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

// 30 Core Real-World Enterprise Domains
const DOMAINS = [
  { key: "uzum", name: "Uzum Market", ind: "E-Commerce", entity: "Product", field: "price", fType: "double", code: "PRD", unit: "so'm", action: "discount" },
  { key: "payme", name: "Payme Wallet", ind: "FinTech", entity: "WalletUser", field: "balance", fType: "double", code: "ACC", unit: "so'm", action: "transfer" },
  { key: "yandex", name: "Yandex Go", ind: "Transport", entity: "TaxiRide", field: "distanceKm", fType: "double", code: "TAX", unit: "km", action: "fare" },
  { key: "korzinka", name: "Korzinka Go", ind: "Retail", entity: "LoyaltyCard", field: "bonusPoints", fType: "int", code: "CRD", unit: "ball", action: "redeem" },
  { key: "wiut", name: "WIUT Portal", ind: "EdTech", entity: "Student", field: "gpa", fType: "double", code: "STU", unit: "GPA", action: "grade" },
  { key: "click", name: "Click Pay", ind: "Payments", entity: "PaymentTxn", field: "amount", fType: "double", code: "TXN", unit: "so'm", action: "verify" },
  { key: "telegram", name: "Telegram Bot", ind: "Messaging", entity: "BotMessage", field: "chatId", fType: "long", code: "MSG", unit: "id", action: "forward" },
  { key: "uzair", name: "UzAirways", ind: "Aviation", entity: "FlightTicket", field: "farePrice", fType: "double", code: "HY", unit: "$", action: "upgrade" },
  { key: "itpark", name: "IT Park Academy", ind: "Bootcamp", entity: "BootcampCourse", field: "durationWeeks", fType: "int", code: "ITP", unit: "hafta", action: "enroll" },
  { key: "anor", name: "Anorbank", ind: "Neobank", entity: "DebitCard", field: "creditLimit", fType: "double", code: "ANR", unit: "so'm", action: "limit" },
  { key: "oson", name: "Oson Apteka", ind: "Pharma", entity: "Medicine", field: "stockCount", fType: "int", code: "MED", unit: "dona", action: "dispense" },
  { key: "evos", name: "Evos FastFood", ind: "QSR", entity: "FoodOrder", field: "totalSum", fType: "double", code: "ORD", unit: "so'm", action: "pack" },
  { key: "bellissimo", name: "Bellissimo Pizza", ind: "Delivery", entity: "PizzaOrder", field: "prepTimeMinutes", fType: "int", code: "PIZ", unit: "daq", action: "bake" },
  { key: "milliy", name: "Milliy TV", ind: "Media", entity: "BroadcastShow", field: "viewersRating", fType: "double", code: "MTV", unit: "reyting", action: "air" },
  { key: "spotify", name: "Spotify Sound", ind: "Streaming", entity: "AudioTrack", field: "durationSec", fType: "int", code: "TRK", unit: "sekund", action: "stream" },
  { key: "thermostat", name: "Smart Thermostat", ind: "IoT", entity: "Thermostat", field: "targetTemp", fType: "double", code: "THM", unit: "°C", action: "heat" },
  { key: "drone", name: "Drone Delivery", ind: "Logistics", entity: "DeliveryDrone", field: "batteryPct", fType: "int", code: "DRN", unit: "%", action: "fly" },
  { key: "warehouse", name: "Smart Warehouse", ind: "Robotics", entity: "StorageBay", field: "weightLimitKg", fType: "double", code: "BAY", unit: "kg", action: "load" },
  { key: "crypto", name: "Crypto Wallet", ind: "Blockchain", entity: "CryptoAsset", field: "coinUnits", fType: "double", code: "CPT", unit: "token", action: "swap" },
  { key: "library", name: "National Library", ind: "Archive", entity: "CatalogBook", field: "pageCount", fType: "int", code: "BOK", unit: "bet", action: "borrow" },
  { key: "gym", name: "BeFit Club", ind: "Fitness", entity: "GymMember", field: "activeMonths", fType: "int", code: "MEM", unit: "oy", action: "checkin" },
  { key: "parking", name: "Tashkent Parking", ind: "SmartCity", entity: "ParkingBay", field: "hourlyTariff", fType: "double", code: "PRK", unit: "so'm", action: "park" },
  { key: "clinic", name: "Medion Clinic", ind: "Medical", entity: "PatientRecord", field: "pulseRate", fType: "int", code: "PAT", unit: "bpm", action: "diagnose" },
  { key: "hyatt", name: "Hyatt Regency", ind: "Hospitality", entity: "HotelReservation", field: "nightlyRate", fType: "double", code: "RSV", unit: "$", action: "book" },
  { key: "cinema", name: "Premier Cinema", ind: "Cinema", entity: "CinemaTicket", field: "hallSeatNo", fType: "int", code: "TKT", unit: "joy", action: "scan" },
  { key: "scooter", name: "Yandex Scooter", ind: "Mobility", entity: "ElectricScooter", field: "maxSpeedKmh", fType: "double", code: "SCT", unit: "km/h", action: "ride" },
  { key: "weather", name: "Weather Network", ind: "Meteo", entity: "MeteoStation", field: "humidityPct", fType: "int", code: "WTH", unit: "%", action: "sense" },
  { key: "auction", name: "OpenMarket Auction", ind: "Auction", entity: "AuctionLot", field: "reservePrice", fType: "double", code: "LOT", unit: "so'm", action: "bid" },
  { key: "solar", name: "Solar Energy Grid", ind: "CleanTech", entity: "SolarInverter", field: "powerKw", fType: "double", code: "SLR", unit: "kW", action: "generate" },
  { key: "railway", name: "O'zbekiston Temir Yo'llari", ind: "Railway", entity: "TrainRoute", field: "travelDurationHours", fType: "double", code: "TRN", unit: "soat", action: "depart" }
];

// Helper: Escape text for code templates
function esc(str) {
  return str.replace(/"/g, '\\"');
}

// ============================================================================
// 1. GENERATE WEEK 1: JAVA CORE, CLASSES, HEAP/STACK & CONSTRUCTORS
// ============================================================================
function generateWeek1() {
  const challenges = [];

  // TIER 1 (1–30): Class Foundations & Fields
  DOMAINS.forEach((d, i) => {
    const id = i + 1;
    const cls = d.entity;
    const fName = d.field;
    const fType = d.fType;
    const sampleVal = fType === "double" ? "150.0" : (fType === "int" ? "42" : "1000L");

    challenges.push({
      id,
      tier: 1,
      tierName: "1-Bosqich: Klasslar va Maydonlar",
      sector: "Boshlang'ich",
      title: {
        uz: `${id}. ${d.name} — '${cls}' Klassi va Maydonlari`,
        en: `${id}. ${d.name} — '${cls}' Class & State Fields`
      },
      scenario: {
        uz: `${d.name} (${d.ind}) tizimida ob'yektlarni saqlash uchun shablon yaratish zarur. '${cls}' klassini e'lon qiling va unga ikkita maydon: 'title' (String) hamda '${fName}' (${fType}) qo'shing.`,
        en: `In ${d.name} (${d.ind}), create a blueprint '${cls}' with two fields: 'title' (String) and '${fName}' (${fType}).`
      },
      requirements: {
        classes: [cls],
        fields: [{ name: "title", type: "String" }, { name: fName, type: fType }]
      },
      starterCode: `// ${d.name} ob'yekt klassi\nclass ${cls} {\n    String title;\n    ${fType} ${fName};\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${cls} obj = new ${cls}();\n        obj.title = "${d.name} Birlamchi";\n        obj.${fName} = ${sampleVal};\n        System.out.println(obj.title + " holati: " + obj.${fName});\n    }\n}`,
      solution: `class ${cls} {\n    String title;\n    ${fType} ${fName};\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${cls} obj = new ${cls}();\n        obj.title = "${d.name} Birlamchi";\n        obj.${fName} = ${sampleVal};\n        System.out.println(obj.title + " holati: " + obj.${fName});\n    }\n}`,
      detailedSolution: {
        theory: `Java dasturlash tilida har qanday ma'lumot strukturasi klassdan (chizma) boshlanadi. Heap xotirada joy ajratilganda '${fName}' maydoni o'z turiga ko'ra birlamchi qiymat oladi.`,
        theoryEn: `In Java, every domain model originates from a class blueprint. The field '${fName}' resides in Heap memory per instance.`,
        cleanCode: `class ${cls} {\n    String title;\n    ${fType} ${fName};\n}`,
        breakdown: [
          `<code>class ${cls} { ... }</code>: ${d.name} ob'yektlari uchun mustaqil model chizmasi.`,
          `<code>String title;</code> va <code>${fType} ${fName};</code>: Ob'yektning holatini (state) belgilovchi maydonlar.`
        ],
        pitfalls: `Maydon nomlarini e'lon qilishda katta-kichik harflarga (case-sensitive) e'tibor bering. '${fName}' o'rniga boshqa nom yozilsa, testdan o'tmaydi.`,
        cw2Tip: `CW2 konsol ilovangizda har bir tovar va xizmat aynan mana shunday aniq maydonlarga ega klass orqali ifodalanadi.`
      }
    });
  });

  // TIER 2 (31–60): Instance Methods & Behavior
  DOMAINS.forEach((d, i) => {
    const id = i + 31;
    const cls = d.entity;
    const fName = d.field;
    const fType = d.fType;
    const mName = d.action + "Operation";

    challenges.push({
      id,
      tier: 2,
      tierName: "2-Bosqich: Instans Metodlar va Holat O'zgarishi",
      sector: "Amaliyot",
      title: {
        uz: `${id}. ${d.name} — '${mName}' Metodi orqali Amallar`,
        en: `${id}. ${d.name} — '${mName}' Method & Behavior`
      },
      scenario: {
        uz: `${d.name} ob'yektining holatini o'zgartirish uchun instans metod kerak. '${cls}' klassiga 'public void ${mName}(${fType} delta)' metodini qo'shing va u '${fName}' maydonini delta miqdorga oshirsin.`,
        en: `Add instance behavior to ${d.name}. Implement 'public void ${mName}(${fType} delta)' in '${cls}' to update '${fName}'.`
      },
      requirements: {
        classes: [cls],
        methods: [mName]
      },
      starterCode: `class ${cls} {\n    String title;\n    ${fType} ${fName};\n\n    public void ${mName}(${fType} delta) {\n        this.${fName} += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${cls} item = new ${cls}();\n        item.${mName}(10);\n        System.out.println("Yangilangan qiymat: " + item.${fName});\n    }\n}`,
      solution: `class ${cls} {\n    String title;\n    ${fType} ${fName};\n\n    public void ${mName}(${fType} delta) {\n        this.${fName} += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${cls} item = new ${cls}();\n        item.${mName}(10);\n        System.out.println("Yangilangan qiymat: " + item.${fName});\n    }\n}`,
      detailedSolution: {
        theory: `Metodlar ob'yektning xatti-harakatini (behavior) belgilaydi. 'this' kalit so'zi aynan metod chaqirilayotgan joriy ob'yekt manziliga ishora qiladi.`,
        theoryEn: `Instance methods encapsulate object behavior. The 'this' keyword unambiguously references the current executing instance on the Heap.`,
        cleanCode: `public void ${mName}(${fType} delta) {\n    this.${fName} += delta;\n}`,
        breakdown: [
          `<code>${mName}(${fType} delta)</code>: Tashqaridan argument qabul qilib, ob'yekt ichki holatini xavfsiz o'zgartiradi.`
        ],
        pitfalls: `Agar parametr nomi bilan maydon nomi bir xil bo'lsa (shadowing), 'this' so'zini tushirib qoldirish o'zgaruvchi qiymatini yangilamaydi.`,
        cw2Tip: `CW2 savatchasida tovar sonini oshirish yoki narxni yangilash aynan mana shunday instans metodlar orqali boshqariladi.`
      }
    });
  });

  // TIER 3 (61–90): Parameterized Constructors & 'this'
  DOMAINS.forEach((d, i) => {
    const id = i + 61;
    const cls = d.entity;
    const fName = d.field;
    const fType = d.fType;

    challenges.push({
      id,
      tier: 3,
      tierName: "3-Bosqich: Konstruktorlar va Ob'yekt Hayot Sikli",
      sector: "Biznes Mantiq",
      title: {
        uz: `${id}. ${d.name} — '${cls}' Maxsus Konstruktori`,
        en: `${id}. ${d.name} — '${cls}' Parameterized Constructor`
      },
      scenario: {
        uz: `${d.name} tizimida ob'yektlar bo'sh qolib ketmasligi kerak. '${cls}(String title, ${fType} ${fName})' maxsus konstruktorini yarating va 'this' kalit so'zi orqali maydonlarni initsializatsiya qiling.`,
        en: `Guarantee consistent initialization in ${d.name}. Implement parameterized constructor '${cls}(String title, ${fType} ${fName})'.`
      },
      requirements: {
        classes: [cls],
        constructors: [cls]
      },
      starterCode: `class ${cls} {\n    String title;\n    ${fType} ${fName};\n\n    public ${cls}(String title, ${fType} ${fName}) {\n        this.title = title;\n        this.${fName} = ${fName};\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${cls} obj = new ${cls}("${d.name} Pro", 75);\n        System.out.println("Yaratildi: " + obj.title + " -> " + obj.${fName});\n    }\n}`,
      solution: `class ${cls} {\n    String title;\n    ${fType} ${fName};\n\n    public ${cls}(String title, ${fType} ${fName}) {\n        this.title = title;\n        this.${fName} = ${fName};\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${cls} obj = new ${cls}("${d.name} Pro", 75);\n        System.out.println("Yaratildi: " + obj.title + " -> " + obj.${fName});\n    }\n}`,
      detailedSolution: {
        theory: `Konstruktor — ob'yekt Heap xotirada yaratilayotganda birinchi bo'lib chaqiriluvchi maxsus blokdir. Uning qaytish turi (return type) bo'lmaydi va nomi sinf nomi bilan bir xil bo'ladi.`,
        theoryEn: `A constructor initializes the state of an instance upon Heap instantiation. It carries no return type and mirrors the class identifier.`,
        cleanCode: `public ${cls}(String title, ${fType} ${fName}) {\n    this.title = title;\n    this.${fName} = ${fName};\n}`,
        breakdown: [
          `<code>public ${cls}(...)</code>: Yaratish vaqtida majburiy parametrlarni talab qilish orqali ob'yektning yaroqli holatini ta'minlaydi.`
        ],
        pitfalls: `Maxsus konstruktor yozilganda, Java avtomatik bo'sh konstruktorni (default no-arg constructor) o'chirib yuboradi.`,
        cw2Tip: `Viva savollarida 'Default constructor qachon yo'qoladi?' deb so'raladi: aynan siz bitta bo'lsa ham maxsus konstruktor yozganingizda!`
      }
    });
  });

  // TIER 4 (91–120): Static Variables & Global Counters
  DOMAINS.forEach((d, i) => {
    const id = i + 91;
    const cls = d.entity;
    const fName = d.field;
    const fType = d.fType;

    challenges.push({
      id,
      tier: 4,
      tierName: "4-Bosqich: Statik A'zolar va Umumiy Holat",
      sector: "Arxitektura",
      title: {
        uz: `${id}. ${d.name} — Statik Hisoblagich va ID Generatsiya`,
        en: `${id}. ${d.name} — Static Counter & Global Registry`
      },
      scenario: {
        uz: `${d.name} kompaniyasida yaratilgan jami ob'yektlar sonini hisoblash zarur. '${cls}' klassiga 'public static int totalCreated = 0;' maydonini qo'shing va har bir konstruktor ishlaganda uni 1 taga oshiring.`,
        en: `Track global creation in ${d.name}. Add 'public static int totalCreated = 0;' incremented inside the constructor.`
      },
      requirements: {
        classes: [cls],
        keywords: ["static"],
        constructors: [cls]
      },
      starterCode: `class ${cls} {\n    public static int totalCreated = 0;\n    String title;\n\n    public ${cls}(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new ${cls}("1-Ob'yekt");\n        new ${cls}("2-Ob'yekt");\n        System.out.println("Jami ob'yektlar soni: " + ${cls}.totalCreated);\n    }\n}`,
      solution: `class ${cls} {\n    public static int totalCreated = 0;\n    String title;\n\n    public ${cls}(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new ${cls}("1-Ob'yekt");\n        new ${cls}("2-Ob'yekt");\n        System.out.println("Jami ob'yektlar soni: " + ${cls}.totalCreated);\n    }\n}`,
      detailedSolution: {
        theory: `'static' maydon ob'yektga emas, balki to'g'ridan-to'g'ri klassning o'ziga tegishlidir. Barcha instanslar bitta umumiy xotira maydonini (Metaspace/Class area) bo'lishadi.`,
        theoryEn: `Static variables belong to the class definition itself in Metaspace, shared uniformly across all heap instances.`,
        cleanCode: `public static int totalCreated = 0;\npublic ${cls}(String title) {\n    this.title = title;\n    totalCreated++;\n}`,
        breakdown: [
          `<code>public static int totalCreated = 0;</code>: Klass darajasidagi yagona global hisoblagich.`
        ],
        pitfalls: `Statik metodlar ichidan instans o'zgaruvchilarga ('this') murojaat qilib bo'lmaydi, chunki statik kontekstda ob'yekt hali mavjud bo'lmasligi mumkin.`,
        cw2Tip: `CW2 da buyurtma raqamlarini (Order ID: 1001, 1002, 1003...) avtomatik generatsiya qilishda aynan 'static int nextId' ishlatiladi.`
      }
    });
  });

  // TIER 5 (121–150): Arrays of Objects & Aggregators
  DOMAINS.forEach((d, i) => {
    const id = i + 121;
    const cls = d.entity;
    const fName = d.field;
    const fType = d.fType;
    const mgrCls = cls + "Manager";

    challenges.push({
      id,
      tier: 5,
      tierName: "5-Bosqich: Ob'yektlar Massivi va Agregator Tizim",
      sector: "Master • CW2",
      title: {
        uz: `${id}. ${d.name} — '${mgrCls}' va Massivlar Bilan Ishlash`,
        en: `${id}. ${d.name} — '${mgrCls}' Object Array Aggregation`
      },
      scenario: {
        uz: `${d.name} ko'p sonli ob'yektlarni bitta massivda boshqarishni talab qiladi. '${mgrCls}' klassini yarating va unga '${cls}[] items' massivi hamda barcha elementlarning '${fName}' summasini hisoblovchi 'public double calculateTotalSum(${cls}[] list)' metodini qo'shing.`,
        en: `Manage collection in ${d.name}. Create '${mgrCls}' with 'public double calculateTotalSum(${cls}[] list)' to sum up '${fName}'.`
      },
      requirements: {
        classes: [cls, mgrCls],
        methods: ["calculateTotalSum"]
      },
      starterCode: `class ${cls} {\n    double ${fName};\n    public ${cls}(double ${fName}) {\n        this.${fName} = ${fName};\n    }\n}\n\nclass ${mgrCls} {\n    public double calculateTotalSum(${cls}[] list) {\n        double sum = 0;\n        for (${cls} item : list) {\n            if (item != null) sum += item.${fName};\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${cls}[] array = new ${cls}[] { new ${cls}(50.0), new ${cls}(120.0) };\n        ${mgrCls} mgr = new ${mgrCls}();\n        System.out.println("Jami summa: " + mgr.calculateTotalSum(array));\n    }\n}`,
      solution: `class ${cls} {\n    double ${fName};\n    public ${cls}(double ${fName}) {\n        this.${fName} = ${fName};\n    }\n}\n\nclass ${mgrCls} {\n    public double calculateTotalSum(${cls}[] list) {\n        double sum = 0;\n        for (${cls} item : list) {\n            if (item != null) sum += item.${fName};\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${cls}[] array = new ${cls}[] { new ${cls}(50.0), new ${cls}(120.0) };\n        ${mgrCls} mgr = new ${mgrCls}();\n        System.out.println("Jami summa: " + mgr.calculateTotalSum(array));\n    }\n}`,
      detailedSolution: {
        theory: `Ob'yektlar massivi Heap xotirada ob'yektlarning o'zini emas, balki ularning xotira manzillarini (reference array) saqlaydi. Massiv elementlarini tekshirishda 'null' xavfsizligiga e'tibor berish lozim.`,
        theoryEn: `Object arrays hold heap references to instances rather than embedded values. Traversing arrays requires null-checks to prevent NullPointerExceptions.`,
        cleanCode: `public double calculateTotalSum(${cls}[] list) {\n    double sum = 0;\n    for (${cls} item : list) {\n        if (item != null) sum += item.${fName};\n    }\n    return sum;\n}`,
        breakdown: [
          `<code>${cls}[] array = new ${cls}[size];</code>: Heap xotirada ko'rsatkichlar ro'yxatini shakllantirish.`
        ],
        pitfalls: `Massiv bo'sh bo'lganda 'item.${fName}' deb to'g'ridan-to'g'ri murojaat qilish 'NullPointerException' xatoligiga sabab bo'ladi.`,
        cw2Tip: `CW2 da savatchadagi buyurtma elementlarini (Cart items) saqlash va umumiy narxni hisoblashda aynan shu algoritm qo'llaniladi.`
      }
    });
  });

  return challenges;
}

// ============================================================================
// 2. GENERATE WEEK 2: ENCAPSULATION, GETTERS/SETTERS & IMMUTABILITY
// ============================================================================
function generateWeek2() {
  const challenges = [];

  // TIER 1 (1–30): Private Fields & Getters/Setters
  DOMAINS.forEach((d, i) => {
    const id = i + 1;
    const cls = d.entity;
    const fName = d.field;
    const fType = d.fType;
    const cap = fName.charAt(0).toUpperCase() + fName.slice(1);

    challenges.push({
      id,
      tier: 1,
      tierName: "1-Bosqich: 'private' va Getter/Setter",
      sector: "Boshlang'ich",
      title: {
        uz: `${id}. ${d.name} — '${cls}' Maydonini Inkapsulyatsiya Qilish`,
        en: `${id}. ${d.name} — Encapsulating '${cls}' State`
      },
      scenario: {
        uz: `${d.name} tizimida '${fName}' maydoniga to'g'ridan-to'g'ri kirishni taqiqlang. Uni 'private' qiling va 'get${cap}()' hamda 'set${cap}(${fType} val)' metodlarini yarating.`,
        en: `Encapsulate '${cls}' in ${d.name}. Declare '${fName}' as private with public get${cap}() and set${cap}(${fType} val).`
      },
      requirements: {
        classes: [cls],
        privateFields: [fName],
        methods: [`get${cap}`, `set${cap}`]
      },
      starterCode: `class ${cls} {\n    private ${fType} ${fName};\n\n    public ${fType} get${cap}() {\n        return this.${fName};\n    }\n\n    public void set${cap}(${fType} ${fName}) {\n        this.${fName} = ${fName};\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${cls} item = new ${cls}();\n        item.set${cap}(100);\n        System.out.println("Qiymat: " + item.get${cap}());\n    }\n}`,
      solution: `class ${cls} {\n    private ${fType} ${fName};\n\n    public ${fType} get${cap}() {\n        return this.${fName};\n    }\n\n    public void set${cap}(${fType} ${fName}) {\n        this.${fName} = ${fName};\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${cls} item = new ${cls}();\n        item.set${cap}(100);\n        System.out.println("Qiymat: " + item.get${cap}());\n    }\n}`,
      detailedSolution: {
        theory: `Inkapsulyatsiya — ma'lumotlarni ruxsatsiz o'zgartirishdan himoyalash va ularga faqat ruxsat berilgan maxsus usullar orqali kirish imkonini beruvchi asosiy OOP tamoyili.`,
        theoryEn: `Encapsulation protects internal object state by hiding mutable variables behind controlled public accessors and mutators.`,
        cleanCode: `private ${fType} ${fName};\npublic ${fType} get${cap}() { return this.${fName}; }\npublic void set${cap}(${fType} ${fName}) { this.${fName} = ${fName}; }`,
        breakdown: [
          `<code>private</code>: Maydonni sinf tashqarisidan to'g'ridan-to'g'ri ko'rinmaydigan qiladi.`
        ],
        pitfalls: `Maydonni 'public' qoldirish ma'lumotlarning butunligini (data integrity) buzadi.`,
        cw2Tip: `CW2 baholash mezonida barcha model klasslarida 100% inkapsulyatsiya talab qilinadi.`
      }
    });
  });

  // TIER 2 (31–60): Defensive Validation Inside Setters
  DOMAINS.forEach((d, i) => {
    const id = i + 31;
    const cls = d.entity;
    const fName = d.field;
    const fType = d.fType;
    const cap = fName.charAt(0).toUpperCase() + fName.slice(1);

    challenges.push({
      id,
      tier: 2,
      tierName: "2-Bosqich: Setter Ichida Himoyaviy Validatsiya",
      sector: "Amaliyot",
      title: {
        uz: `${id}. ${d.name} — Noto'g'ri Qiymatlarni Bloklash`,
        en: `${id}. ${d.name} — Defensive Validation Guard`
      },
      scenario: {
        uz: `${d.name} da '${fName}' hech qachon manfiy (0 dan kichik) bo'lishi mumkin emas. 'set${cap}' metodida validatsiya qo'shing: agar val >= 0 bo'lsa o'rnating, aks holda ogohlantirish bering.`,
        en: `Enforce non-negative validation in ${d.name} setter for '${fName}'.`
      },
      requirements: {
        classes: [cls],
        methods: [`set${cap}`, `get${cap}`],
        privateFields: [fName]
      },
      starterCode: `class ${cls} {\n    private ${fType} ${fName};\n\n    public void set${cap}(${fType} val) {\n        if (val >= 0) {\n            this.${fName} = val;\n        } else {\n            System.out.println("Xato: Qiymat manfiy bo'lishi mumkin emas!");\n        }\n    }\n\n    public ${fType} get${cap}() {\n        return this.${fName};\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${cls} item = new ${cls}();\n        item.set${cap}(50);\n        item.set${cap}(-10);\n        System.out.println("Qolgan holat: " + item.get${cap}());\n    }\n}`,
      solution: `class ${cls} {\n    private ${fType} ${fName};\n\n    public void set${cap}(${fType} val) {\n        if (val >= 0) {\n            this.${fName} = val;\n        } else {\n            System.out.println("Xato: Qiymat manfiy bo'lishi mumkin emas!");\n        }\n    }\n\n    public ${fType} get${cap}() {\n        return this.${fName};\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${cls} item = new ${cls}();\n        item.set${cap}(50);\n        item.set${cap}(-10);\n        System.out.println("Qolgan holat: " + item.get${cap}());\n    }\n}`,
      detailedSolution: {
        theory: `Setter metodlarining eng muhim vazifasi — qorovul (guard clause) sifatida noto'g'ri biznes ma'lumotlarini Heap xotiradagi ob'yektga kirishiga yo'l qo'ymaslikdir.`,
        theoryEn: `Mutators serve as defensive guard barriers preventing corrupt or negative state values from entering persistent memory.`,
        cleanCode: `if (val >= 0) { this.${fName} = val; }`,
        breakdown: [
          `<code>if (val >= 0)</code>: Noto'g'ri manfiy qiymatlardan himoyalovchi mantiqiy to'siq.`
        ],
        pitfalls: `Validatsiyani faqat konsol kiritish joyida emas, aynan model sinfi ichida tekshirish shart.`,
        cw2Tip: `Viva imtihonida: 'Nega public maydon qilib qo'yib tekshiruvni tashqarida qilmadik?' javob: Yagona mas'uliyat va ob'yekt yaxlitligi uchun!`
      }
    });
  });

  // TIER 3 (61–90): Atomic Balance / State Mutation Methods
  DOMAINS.forEach((d, i) => {
    const id = i + 61;
    const cls = d.entity;
    const fName = d.field;
    const fType = d.fType;

    challenges.push({
      id,
      tier: 3,
      tierName: "3-Bosqich: Atomik Amallar va Tranzaksiyalar",
      sector: "Biznes Mantiq",
      title: {
        uz: `${id}. ${d.name} — Xavfsiz Balans / Limit Operatsiyalari`,
        en: `${id}. ${d.name} — Atomic State Mutation`
      },
      scenario: {
        uz: `${d.name} tizimida bevosita setter o'rniga operatsion metodlar yarating: 'public void deposit(double amt)' va yetarli mablag' bo'lsagina yechuvchi 'public boolean withdraw(double amt)'.`,
        en: `Encapsulate operations in ${d.name} using deposit(double amt) and safe withdraw(double amt).`
      },
      requirements: {
        classes: [cls],
        methods: ["deposit", "withdraw"],
        privateFields: [fName]
      },
      starterCode: `class ${cls} {\n    private double ${fName};\n\n    public void deposit(double amount) {\n        if (amount > 0) this.${fName} += amount;\n    }\n\n    public boolean withdraw(double amount) {\n        if (amount > 0 && this.${fName} >= amount) {\n            this.${fName} -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public double get${fName.charAt(0).toUpperCase() + fName.slice(1)}() {\n        return this.${fName};\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${cls} acc = new ${cls}();\n        acc.deposit(300);\n        boolean ok = acc.withdraw(100);\n        System.out.println("Yechildi: " + ok + ", Qoldiq: " + acc.get${fName.charAt(0).toUpperCase() + fName.slice(1)}());\n    }\n}`,
      solution: `class ${cls} {\n    private double ${fName};\n\n    public void deposit(double amount) {\n        if (amount > 0) this.${fName} += amount;\n    }\n\n    public boolean withdraw(double amount) {\n        if (amount > 0 && this.${fName} >= amount) {\n            this.${fName} -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public double get${fName.charAt(0).toUpperCase() + fName.slice(1)}() {\n        return this.${fName};\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${cls} acc = new ${cls}();\n        acc.deposit(300);\n        boolean ok = acc.withdraw(100);\n        System.out.println("Yechildi: " + ok + ", Qoldiq: " + acc.get${fName.charAt(0).toUpperCase() + fName.slice(1)}());\n    }\n}`,
      detailedSolution: {
        theory: `Haqiqiy korporativ tizimlarda 'setBalance' degan ochiq metod bo'lmasligi kerak! Uning o'rniga faqat atomik biznes metodlar (deposit, withdraw) qoldiriladi.`,
        theoryEn: `Exposing naked setters on financial balances creates massive security flaws. Instead, only atomic operational methods must be provided.`,
        cleanCode: `public boolean withdraw(double amount) {\n    if (amount > 0 && this.balance >= amount) {\n        this.balance -= amount;\n        return true;\n    }\n    return false;\n}`,
        breakdown: [
          `<code>this.balance >= amount</code>: Yetarli qoldiq mavjudligini kafolatlaydi.`
        ],
        pitfalls: `Balansdan ko'p pul yechilishiga yo'l qo'ymaslik manfiy qoldiq xavfini bartaraf etadi.`,
        cw2Tip: `CW2 da to'lov qilish (Payment processing) vaqtida xaridor balansi yoki karta limitini tekshirishda aynan shu shablon qo'llaniladi.`
      }
    });
  });

  // TIER 4 (91–120): Immutable Objects
  DOMAINS.forEach((d, i) => {
    const id = i + 91;
    const cls = d.entity + "Receipt";

    challenges.push({
      id,
      tier: 4,
      tierName: "4-Bosqich: O'zgarmas Klasslar (Immutability)",
      sector: "Arxitektura",
      title: {
        uz: `${id}. ${d.name} — O'zgarmas '${cls}' Cheki`,
        en: `${id}. ${d.name} — Immutable '${cls}' Record`
      },
      scenario: {
        uz: `${d.name} da generatsiya qilingan chek ma'lumotlari yaratilgandan so'ng umuman o'zgarmasligi shart. 'final class ${cls}' yarating, maydonlarini 'private final' qiling va hech qanday setter qo'shmang.`,
        en: `Design immutable '${cls}' in ${d.name}. Use 'final class', 'private final' fields, and zero setters.`
      },
      requirements: {
        classes: [cls],
        keywords: ["final"]
      },
      starterCode: `final class ${cls} {\n    private final String txnCode;\n    private final double finalAmount;\n\n    public ${cls}(String txnCode, double finalAmount) {\n        this.txnCode = txnCode;\n        this.finalAmount = finalAmount;\n    }\n\n    public String getTxnCode() { return txnCode; }\n    public double getFinalAmount() { return finalAmount; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${cls} r = new ${cls}("TXN-101", 85.5);\n        System.out.println("Chek: " + r.getTxnCode() + " -> $" + r.getFinalAmount());\n    }\n}`,
      solution: `final class ${cls} {\n    private final String txnCode;\n    private final double finalAmount;\n\n    public ${cls}(String txnCode, double finalAmount) {\n        this.txnCode = txnCode;\n        this.finalAmount = finalAmount;\n    }\n\n    public String getTxnCode() { return txnCode; }\n    public double getFinalAmount() { return finalAmount; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${cls} r = new ${cls}("TXN-101", 85.5);\n        System.out.println("Chek: " + r.getTxnCode() + " -> $" + r.getFinalAmount());\n    }\n}`,
      detailedSolution: {
        theory: `O'zgarmas (immutable) ob'yektlar yaratilgandan keyin holati o'zgarmasligi sababli, ko'p oqimli (multi-threaded) tizimlarda 100% thread-safe hisoblanadi.`,
        theoryEn: `Immutable objects cannot be modified after instantiation, offering inherent thread-safety and audit trail guarantees.`,
        cleanCode: `final class ${cls} {\n    private final String txnCode;\n    public String getTxnCode() { return txnCode; }\n}`,
        breakdown: [
          `<code>final class</code>: Boshqa sinflar meros olib uning o'zgarmasligini buzishining oldini oladi.`
        ],
        pitfalls: `Setter metodi qo'shilsa yoki maydon 'final' qilinmasa, immutability buziladi.`,
        cw2Tip: `CW2 da chop etilgan kvitansiya (Receipt) va buyurtma hujjati aynan immutable arxitekturada quriladi.`
      }
    });
  });

  // TIER 5 (121–150): Enterprise CW2 Encapsulation & Secure State
  DOMAINS.forEach((d, i) => {
    const id = i + 121;
    const cls = d.entity + "SecurityContext";

    challenges.push({
      id,
      tier: 5,
      tierName: "5-Bosqich: Korporativ Xavfsizlik va CW2 Modeli",
      sector: "Master • CW2",
      title: {
        uz: `${id}. ${d.name} — PIN-kod va Ruxsat Nazorati`,
        en: `${id}. ${d.name} — Encapsulated Security Context`
      },
      scenario: {
        uz: `${d.name} da foydalanuvchi PIN kodini yashiring. 'private String pinCode' maydoni bo'lsin. 'public boolean verifyPin(String attempt)' metodi orqali tekshirilsin, lekin PIN kodi hech qachon to'g'ridan-to'g'ri o'qib bo'lmasin (no getter!).`,
        en: `Enforce secure credentials in ${d.name}. Add 'verifyPin(String attempt)' without exposing any getPinCode() method.`
      },
      requirements: {
        classes: [cls],
        methods: ["verifyPin"],
        privateFields: ["pinCode"]
      },
      starterCode: `class ${cls} {\n    private String pinCode;\n\n    public ${cls}(String pinCode) {\n        this.pinCode = pinCode;\n    }\n\n    public boolean verifyPin(String attempt) {\n        return this.pinCode != null && this.pinCode.equals(attempt);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${cls} sec = new ${cls}("7788");\n        System.out.println("PIN to'g'rimi: " + sec.verifyPin("7788"));\n        System.out.println("Noto'g'ri PIN: " + sec.verifyPin("0000"));\n    }\n}`,
      solution: `class ${cls} {\n    private String pinCode;\n\n    public ${cls}(String pinCode) {\n        this.pinCode = pinCode;\n    }\n\n    public boolean verifyPin(String attempt) {\n        return this.pinCode != null && this.pinCode.equals(attempt);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${cls} sec = new ${cls}("7788");\n        System.out.println("PIN to'g'rimi: " + sec.verifyPin("7788"));\n        System.out.println("Noto'g'ri PIN: " + sec.verifyPin("0000"));\n    }\n}`,
      detailedSolution: {
        theory: `Inkapsulyatsiyaning oliy darajasi — ma'lumotni tashqariga beruvchi getter ham yaratmaslikdir. Parol va PIN kodlar faqat tasdiqlovchi metodlar orqali tekshiriladi.`,
        theoryEn: `Peak encapsulation avoids even getter accessors for sensitive secrets, providing verification methods exclusively.`,
        cleanCode: `public boolean verifyPin(String attempt) {\n    return this.pinCode != null && this.pinCode.equals(attempt);\n}`,
        breakdown: [
          `<code>verifyPin</code>: PIN kodni tashqariga oshkor qilmasdan kiritilgan qiymatni tasdiqlaydi.`
        ],
        pitfalls: `Parol va PIN kodlar uchun 'getPin()' yozish xavfsizlik qoidalariga mutlaqo ziddir.`,
        cw2Tip: `CW2 da admin menyusiga kirish uchun PIN kod so'ralganda aynan mana shu xavfsizlik inkapsulyatsiyasi qo'llaniladi.`
      }
    });
  });

  return challenges;
}

// ============================================================================
// 3. GENERATE WEEK 3: INHERITANCE & COMPOSITION
// ============================================================================
function generateWeek3() {
  const challenges = [];

  // TIER 1 (1–30): Basic Extends
  DOMAINS.forEach((d, i) => {
    const id = i + 1;
    const base = d.entity;
    const sub = "Premium" + d.entity;

    challenges.push({
      id,
      tier: 1,
      tierName: "1-Bosqich: 'extends' va Asosiy Merosxo'rlik",
      sector: "Boshlang'ich",
      title: {
        uz: `${id}. ${d.name} — '${sub}' Merosxo'r Sinifini Yaratish`,
        en: `${id}. ${d.name} — Subclassing with '${sub}'`
      },
      scenario: {
        uz: `${d.name} tizimida '${base}' tayanch sinfidan meros oluvchi '${sub}' klassini e'lon qiling ('extends ${base}'). Unga 'vipPerk' (String) maydoni qo'shing.`,
        en: `Derive '${sub}' from '${base}' using extends in ${d.name}. Add 'vipPerk' (String).`
      },
      requirements: {
        classes: [base, sub],
        keywords: ["extends"]
      },
      starterCode: `class ${base} {\n    public String title = "${d.name} Base";\n}\n\nclass ${sub} extends ${base} {\n    public String vipPerk = "Chegirma";\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${sub} item = new ${sub}();\n        System.out.println(item.title + " -> " + item.vipPerk);\n    }\n}`,
      solution: `class ${base} {\n    public String title = "${d.name} Base";\n}\n\nclass ${sub} extends ${base} {\n    public String vipPerk = "Chegirma";\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${sub} item = new ${sub}();\n        System.out.println(item.title + " -> " + item.vipPerk);\n    }\n}`,
      detailedSolution: {
        theory: `Merosxo'rlik (Inheritance) kodni takrorlamasdan tayanch sinfdagi barcha ochiq maydon va metodlarni avlod sinfga o'tkazish imkonini beradi (IS-A munosabati).`,
        theoryEn: `Inheritance achieves code reuse via the IS-A hierarchy, giving derived classes access to non-private superclass members.`,
        cleanCode: `class ${sub} extends ${base} { ... }`,
        breakdown: [
          `<code>extends ${base}</code>: Tayanch sinf imkoniyatlarini kengaytirish.`
        ],
        pitfalls: `Java'da bir vaqtning o'zida ikkita sinfdan meros olib bo'lmaydi (bitta sinf faqat bitta ota sinfga ega bo'ladi).`,
        cw2Tip: `CW2 da turli xil tovarlar (BeverageItem, FoodItem, DessertItem) umumiy MenuItem sinfidan meros oladi.`
      }
    });
  });

  // TIER 2 (31–60): super(...) Constructor Chaining
  DOMAINS.forEach((d, i) => {
    const id = i + 31;
    const base = d.entity;
    const sub = "Special" + d.entity;

    challenges.push({
      id,
      tier: 2,
      tierName: "2-Bosqich: 'super()' Konstruktor Zanjiri",
      sector: "Amaliyot",
      title: {
        uz: `${id}. ${d.name} — Ota Konstruktorni Chaqirish ('super')`,
        en: `${id}. ${d.name} — Super Constructor Chaining`
      },
      scenario: {
        uz: `${d.name} da '${base}' konstruktori 'name' parametrini talab qiladi. '${sub}' konstruktori ichida birinchi qatorda 'super(name);' orqali ota konstruktorni chaqiring.`,
        en: `Chain constructors in ${d.name}. Call 'super(name)' as the very first line inside '${sub}'.`
      },
      requirements: {
        classes: [base, sub],
        keywords: ["super", "extends"],
        constructors: [sub]
      },
      starterCode: `class ${base} {\n    public String name;\n    public ${base}(String name) {\n        this.name = name;\n    }\n}\n\nclass ${sub} extends ${base} {\n    public int extraPoints;\n    public ${sub}(String name, int extraPoints) {\n        super(name);\n        this.extraPoints = extraPoints;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${sub} obj = new ${sub}("${d.name} Max", 50);\n        System.out.println(obj.name + " (" + obj.extraPoints + " ball)");\n    }\n}`,
      solution: `class ${base} {\n    public String name;\n    public ${base}(String name) {\n        this.name = name;\n    }\n}\n\nclass ${sub} extends ${base} {\n    public int extraPoints;\n    public ${sub}(String name, int extraPoints) {\n        super(name);\n        this.extraPoints = extraPoints;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${sub} obj = new ${sub}("${d.name} Max", 50);\n        System.out.println(obj.name + " (" + obj.extraPoints + " ball)");\n    }\n}`,
      detailedSolution: {
        theory: `'super()' chaqirig'i har doim avlod sinf konstruktorining eng birinchi qatorida turishi shart. Ota sinf to'liq initsializatsiya bo'lmaguncha bola sinf maydonlari yaratilmaydi.`,
        theoryEn: `Constructor chaining requires 'super()' as the first executable line to ensure parent state is initialized before child state.`,
        cleanCode: `public ${sub}(String name, int extraPoints) {\n    super(name);\n    this.extraPoints = extraPoints;\n}`,
        breakdown: [
          `<code>super(name);</code>: Ota sinf konstruktoriga zaruriy parametrni yetkazadi.`
        ],
        pitfalls: `'super()' dan oldin biror kod yozilsa, Java kompilyatori xatolik beradi.`,
        cw2Tip: `Viva imtihonida: 'super() qaysi qatorda turishi kerak?' Javob: Har doim birinchi qatorda!`
      }
    });
  });

  // TIER 3 (61–90): Method Overriding & @Override
  DOMAINS.forEach((d, i) => {
    const id = i + 61;
    const base = d.entity;
    const sub = "Custom" + d.entity;

    challenges.push({
      id,
      tier: 3,
      tierName: "3-Bosqich: Metodni Qayta Yozish (@Override)",
      sector: "Biznes Mantiq",
      title: {
        uz: `${id}. ${d.name} — 'calculatePrice' Metodini Qayta Yozish`,
        en: `${id}. ${d.name} — Method Overriding with @Override`
      },
      scenario: {
        uz: `${d.name} da '${base}' sinfida 'public double calculatePrice()' 100.0 qaytaradi. '${sub}' sinfida uni '@Override' qilib 150.0 qaytaradigan qiling.`,
        en: `Override 'calculatePrice()' in '${sub}' to return 150.0 instead of superclass 100.0.`
      },
      requirements: {
        classes: [base, sub],
        methods: ["calculatePrice"],
        keywords: ["extends"]
      },
      starterCode: `class ${base} {\n    public double calculatePrice() {\n        return 100.0;\n    }\n}\n\nclass ${sub} extends ${base} {\n    @Override\n    public double calculatePrice() {\n        return 150.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${base} item = new ${sub}();\n        System.out.println("Narx: $" + item.calculatePrice());\n    }\n}`,
      solution: `class ${base} {\n    public double calculatePrice() {\n        return 100.0;\n    }\n}\n\nclass ${sub} extends ${base} {\n    @Override\n    public double calculatePrice() {\n        return 150.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${base} item = new ${sub}();\n        System.out.println("Narx: $" + item.calculatePrice());\n    }\n}`,
      detailedSolution: {
        theory: `Metodni qayta yozish (@Override) avlod sinfga ota sinfdagi umumiy metodni o'ziga mos maxsus xatti-harakat bilan almashtirish imkonini beradi.`,
        theoryEn: `Method overriding provides specialized implementation for an inherited method while keeping the exact signature.`,
        cleanCode: `@Override\npublic double calculatePrice() {\n    return 150.0;\n}`,
        breakdown: [
          `<code>@Override</code>: Kompilyatorga ushbu metod ota sinfdan to'g'ri olinayotganini tekshirishni bildiradi.`
        ],
        pitfalls: `Metod nomi yoki parametrlari bittagina belgiga farq qilsa, qayta yozish emas, balki ortiqcha yuklash (overloading) sodir bo'ladi.`,
        cw2Tip: `CW2 da har bir tovar o'z narxini hisoblashda 'calculatePrice()' metodini qayta yozadi.`
      }
    });
  });

  // TIER 4 (91–120): Multi-level Inheritance & toString()
  DOMAINS.forEach((d, i) => {
    const id = i + 91;
    const base = d.entity;
    const sub1 = "Mid" + d.entity;
    const sub2 = "Top" + d.entity;

    challenges.push({
      id,
      tier: 4,
      tierName: "4-Bosqich: Ko'p Qavatli Merosxo'rlik & toString()",
      sector: "Arxitektura",
      title: {
        uz: `${id}. ${d.name} — Ko'p Qavatli Merosxo'rlik Zanjiri`,
        en: `${id}. ${d.name} — Multi-Level Inheritance & toString()`
      },
      scenario: {
        uz: `${d.name} da 3 qavatli ierarxiya tuzing: '${base}' -> '${sub1}' -> '${sub2}'. '${sub2}' sinfida 'toString()' metodini qayta yozib chiroyli formatda matn qaytaring.`,
        en: `Form multi-level hierarchy '${base}' -> '${sub1}' -> '${sub2}' and override toString() in '${sub2}'.`
      },
      requirements: {
        classes: [base, sub1, sub2],
        methods: ["toString"],
        keywords: ["extends"]
      },
      starterCode: `class ${base} {\n    public String level1 = "A";\n}\n\nclass ${sub1} extends ${base} {\n    public String level2 = "B";\n}\n\nclass ${sub2} extends ${sub1} {\n    @Override\n    public String toString() {\n        return "${d.name} [" + level1 + "-" + level2 + "]";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${sub2} obj = new ${sub2}();\n        System.out.println(obj.toString());\n    }\n}`,
      solution: `class ${base} {\n    public String level1 = "A";\n}\n\nclass ${sub1} extends ${base} {\n    public String level2 = "B";\n}\n\nclass ${sub2} extends ${sub1} {\n    @Override\n    public String toString() {\n        return "${d.name} [" + level1 + "-" + level2 + "]";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${sub2} obj = new ${sub2}();\n        System.out.println(obj.toString());\n    }\n}`,
      detailedSolution: {
        theory: `Java'da barcha sinflar bevosita yoki bilvosita 'java.lang.Object' sinfidan meros oladi. 'toString()' metodini qayta yozish orqali xotira manzili (hashcode) o'rniga tushunarli matn olinadi.`,
        theoryEn: `All Java classes inherit from Object. Overriding toString() converts default memory hex codes into human-readable descriptions.`,
        cleanCode: `@Override\npublic String toString() {\n    return "${d.name} [" + level1 + "-" + level2 + "]";\n}`,
        breakdown: [
          `<code>${sub2} extends ${sub1}</code>: O'zidan yuqoridagi barcha ota sinflarning xususiyatlarini meros qilib oladi.`
        ],
        pitfalls: `Ierarxiya juda chuqurlashib ketsa (5-6 qavat), kodni qo'llab-quvvatlash murakkablashadi.`,
        cw2Tip: `Konsolda buyurtma tafsilotlarini 'System.out.println(order)' deb chop etish uchun 'toString()' metodi juda qulaydir.`
      }
    });
  });

  // TIER 5 (121–150): Composition (HAS-A Relationship)
  DOMAINS.forEach((d, i) => {
    const id = i + 121;
    const subClass = d.entity + "Item";
    const containerClass = d.entity + "Cart";

    challenges.push({
      id,
      tier: 5,
      tierName: "5-Bosqich: Kompozitsiya (HAS-A Munosabati)",
      sector: "Master • CW2",
      title: {
        uz: `${id}. ${d.name} — Kompozitsiya vs Merosxo'rlik`,
        en: `${id}. ${d.name} — Composition (HAS-A Pattern)`
      },
      scenario: {
        uz: `${d.name} tizimida '${containerClass}' klassi o'z ichida '${subClass}' obyektini saqlasin ('HAS-A' munosabati). '${containerClass}' ichida to'g'ridan-to'g'ri element narxini qaytaruvchi metod yarating.`,
        en: `Model HAS-A composition in ${d.name}: '${containerClass}' contains a reference to '${subClass}'.`
      },
      requirements: {
        classes: [subClass, containerClass]
      },
      starterCode: `class ${subClass} {\n    public String title;\n    public double price;\n    public ${subClass}(String title, double price) {\n        this.title = title;\n        this.price = price;\n    }\n}\n\nclass ${containerClass} {\n    private ${subClass} item;\n\n    public void setItem(${subClass} item) {\n        this.item = item;\n    }\n\n    public double getItemPrice() {\n        return (item != null) ? item.price : 0.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${containerClass} cart = new ${containerClass}();\n        cart.setItem(new ${subClass}("${d.name} Tovari", 45.0));\n        System.out.println("Element narxi: $" + cart.getItemPrice());\n    }\n}`,
      solution: `class ${subClass} {\n    public String title;\n    public double price;\n    public ${subClass}(String title, double price) {\n        this.title = title;\n        this.price = price;\n    }\n}\n\nclass ${containerClass} {\n    private ${subClass} item;\n\n    public void setItem(${subClass} item) {\n        this.item = item;\n    }\n\n    public double getItemPrice() {\n        return (item != null) ? item.price : 0.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${containerClass} cart = new ${containerClass}();\n        cart.setItem(new ${subClass}("${d.name} Tovari", 45.0));\n        System.out.println("Element narxi: $" + cart.getItemPrice());\n    }\n}`,
      detailedSolution: {
        theory: `"Favor composition over inheritance" (Merosxo'rlikdan ko'ra kompozitsiyani afzal biling) — OOP ning eng mashhur oltin qoidasi. Ob'yekt boshqa ob'yektni o'z ichida ushlab tursa, tizim bo'shroq va moslashuvchanroq bo'ladi.`,
        theoryEn: `Favor composition over inheritance: HAS-A relationships decouple components and promote flexible runtime reconfiguration.`,
        cleanCode: `class ${containerClass} {\n    private ${subClass} item;\n    public double getItemPrice() { return item != null ? item.price : 0.0; }\n}`,
        breakdown: [
          `<code>private ${subClass} item;</code>: Savatcha tovarning bolasi emas, balki uni o'zida saqlaydi (HAS-A).`
        ],
        pitfalls: `Mantiqsiz joyda 'extends' ishlatish (masalan, Car extends Engine) arxitekturani buzadi; mashina dvigatelning bolasi emas, dvigatelga ega!`,
        cw2Tip: `CW2 da Order sinfi OrderItem elementlarini ichida saqlashi (Composition) eng yuqori ball keltiruvchi arxitektura hisoblanadi.`
      }
    });
  });

  return challenges;
}

// ============================================================================
// 4. GENERATE WEEK 4: POLYMORPHISM & ABSTRACT CLASSES
// ============================================================================
function generateWeek4() {
  const challenges = [];

  // TIER 1 (1–30): Upcasting & Subtype Polymorphism
  DOMAINS.forEach((d, i) => {
    const id = i + 1;
    const base = d.entity + "Service";
    const sub = "Online" + base;

    challenges.push({
      id,
      tier: 1,
      tierName: "1-Bosqich: Polimorfizm va Upcasting",
      sector: "Boshlang'ich",
      title: {
        uz: `${id}. ${d.name} — Polimorfik O'zgaruvchiga Biriktirish`,
        en: `${id}. ${d.name} — Subtype Polymorphic Upcasting`
      },
      scenario: {
        uz: `${d.name} da '${base}' ota turdagi o'zgaruvchiga uning bolasi '${sub}' ob'yektini biriktiring ('${base} ref = new ${sub}();') va 'execute()' metodini chaqiring.`,
        en: `Demonstrate upcasting in ${d.name}: assign child '${sub}' to parent reference '${base}'.`
      },
      requirements: {
        classes: [base, sub],
        methods: ["execute"],
        keywords: ["extends"]
      },
      starterCode: `class ${base} {\n    public void execute() {\n        System.out.println("${d.name} tayanch xizmati");\n    }\n}\n\nclass ${sub} extends ${base} {\n    @Override\n    public void execute() {\n        System.out.println("${d.name} onlayn xizmati");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${base} ref = new ${sub}();\n        ref.execute();\n    }\n}`,
      solution: `class ${base} {\n    public void execute() {\n        System.out.println("${d.name} tayanch xizmati");\n    }\n}\n\nclass ${sub} extends ${base} {\n    @Override\n    public void execute() {\n        System.out.println("${d.name} onlayn xizmati");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${base} ref = new ${sub}();\n        ref.execute();\n    }\n}`,
      detailedSolution: {
        theory: `Polimorfizm (ko'p shakllilik) — bitta umumiy ota havola (reference) orqali turli avlod ob'yektlariga bir xil buyruq berish qobiliyatidir.`,
        theoryEn: `Subtype polymorphism allows treating specialized derived objects through a uniform supertype reference interface.`,
        cleanCode: `${base} ref = new ${sub}();\nref.execute();`,
        breakdown: [
          `<code>${base} ref = new ${sub}();</code>: Kompilyatsiya vaqtidagi tur ${base}, lekin Heap xotiradagi haqiqiy ob'yekt ${sub}.`
        ],
        pitfalls: `Ota turdagi havola orqali faqat ota sinfda mavjud bo'lgan metodlarni to'g'ridan-to'g'ri chaqirish mumkin.`,
        cw2Tip: `CW2 da buyurtma hisoblagichiga qaysi tovar kelishidan qat'i nazar 'MenuItem item' deb qabul qilish aynan upcasting hisoblanadi.`
      }
    });
  });

  // TIER 2 (31–60): Heterogeneous Arrays & Dynamic Dispatch
  DOMAINS.forEach((d, i) => {
    const id = i + 31;
    const base = d.entity + "Handler";
    const sub1 = "Standard" + base;
    const sub2 = "Express" + base;

    challenges.push({
      id,
      tier: 2,
      tierName: "2-Bosqich: Geterogen Massiv va Dinamik Chaqiruv",
      sector: "Amaliyot",
      title: {
        uz: `${id}. ${d.name} — Har Xil Turlarni Bitta Massivda Boshqarish`,
        en: `${id}. ${d.name} — Heterogeneous Polymorphic Array`
      },
      scenario: {
        uz: `${d.name} da '${base}[]' massiviga ham '${sub1}', ham '${sub2}' ob'yektlarini joylang va for tsikli orqali barchasining 'handle()' metodini dinamik chaqiring.`,
        en: `Loop through heterogeneous array of '${base}' containing both '${sub1}' and '${sub2}' instances.`
      },
      requirements: {
        classes: [base, sub1, sub2],
        methods: ["handle"],
        keywords: ["extends"]
      },
      starterCode: `class ${base} {\n    public void handle() {\n        System.out.println("Oddiy");\n    }\n}\n\nclass ${sub1} extends ${base} {\n    @Override\n    public void handle() {\n        System.out.println("${d.name}: Standart");\n    }\n}\n\nclass ${sub2} extends ${base} {\n    @Override\n    public void handle() {\n        System.out.println("${d.name}: Tezkor");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${base}[] list = new ${base}[] { new ${sub1}(), new ${sub2}() };\n        for (${base} h : list) {\n            h.handle();\n        }\n    }\n}`,
      solution: `class ${base} {\n    public void handle() {\n        System.out.println("Oddiy");\n    }\n}\n\nclass ${sub1} extends ${base} {\n    @Override\n    public void handle() {\n        System.out.println("${d.name}: Standart");\n    }\n}\n\nclass ${sub2} extends ${base} {\n    @Override\n    public void handle() {\n        System.out.println("${d.name}: Tezkor");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${base}[] list = new ${base}[] { new ${sub1}(), new ${sub2}() };\n        for (${base} h : list) {\n            h.handle();\n        }\n    }\n}`,
      detailedSolution: {
        theory: `Dinamik bog'lanish (Dynamic Method Dispatch) orqali JVM qaysi metodni ishga tushirishni kompilyatsiyada emas, dastur ishlab turgan paytda haqiqiy ob'yektga qarab hal qiladi.`,
        theoryEn: `Dynamic method dispatch resolves virtual method invocations at runtime based on the actual concrete heap object.`,
        cleanCode: `for (${base} h : list) { h.handle(); }`,
        breakdown: [
          `<code>h.handle()</code>: JVM har bir elementning haqiqiy turiga qarab to'g'ri metodni chaqiradi.`
        ],
        pitfalls: `Massiv ichida har xil sinflar bo'lsa ham, ularning barchasi umumiy ota sinfga ega bo'lishi shart.`,
        cw2Tip: `Savatchadagi barcha har xil tovarlarni (ichimlik, pitsa, shirinlik) bitta for tsiklida chop etishning asosi aynan shu!`
      }
    });
  });

  // TIER 3 (61–90): Abstract Classes & Abstract Methods
  DOMAINS.forEach((d, i) => {
    const id = i + 61;
    const base = "Abstract" + d.entity;
    const sub = "Concrete" + d.entity;

    challenges.push({
      id,
      tier: 3,
      tierName: "3-Bosqich: Abstrakt Sinflar va Metodlar",
      sector: "Biznes Mantiq",
      title: {
        uz: `${id}. ${d.name} — '${base}' Abstrakt Shabloni`,
        en: `${id}. ${d.name} — Abstract Class & Abstract Contract`
      },
      scenario: {
        uz: `${d.name} tizimida 'abstract class ${base}' yarating va unga tanasiz 'public abstract double calculateRate();' metodini qo'shing. Uni '${sub}' klassida to'liq amalga oshiring.`,
        en: `Declare 'abstract class ${base}' with 'public abstract double calculateRate();' implemented by '${sub}'.`
      },
      requirements: {
        classes: [base, sub],
        methods: ["calculateRate"],
        keywords: ["abstract", "extends"]
      },
      starterCode: `abstract class ${base} {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ${sub} extends ${base} {\n    public ${sub}(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${base} obj = new ${sub}("${d.name} Maxsus");\n        System.out.println(obj.name + " tarifi: $" + obj.calculateRate());\n    }\n}`,
      solution: `abstract class ${base} {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ${sub} extends ${base} {\n    public ${sub}(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${base} obj = new ${sub}("${d.name} Maxsus");\n        System.out.println(obj.name + " tarifi: $" + obj.calculateRate());\n    }\n}`,
      detailedSolution: {
        theory: `Abstrakt sinfdan to'g'ridan-to'g'ri 'new' orqali ob'yekt yaratib bo'lmaydi. U o'zida ham tayyor kodlarni (maydonlar, oddiy metodlar), ham bolalari majburan yozishi shart bo'lgan qoidalarni (abstrakt metodlar) birlashtiradi.`,
        theoryEn: `Abstract classes cannot be directly instantiated, providing both reusable concrete state and mandatory abstract method contracts.`,
        cleanCode: `public abstract double calculateRate();`,
        breakdown: [
          `<code>abstract class</code>: Shartnoma va umumiy asos vazifasini o'taydi.`
        ],
        pitfalls: `Agar avlod sinf ota abstrakt metodni yozmasa, u ham avtomatik ravishda abstrakt bo'lib qoladi.`,
        cw2Tip: `CW2 da asosiy tovar sinfi (abstract class MenuItem) abstrakt qilinishi shart!`
      }
    });
  });

  // TIER 4 (91–120): instanceof & Safe Downcasting
  DOMAINS.forEach((d, i) => {
    const id = i + 91;
    const base = d.entity + "Base";
    const sub = d.entity + "Premium";

    challenges.push({
      id,
      tier: 4,
      tierName: "4-Bosqich: 'instanceof' va Xavfsiz Downcasting",
      sector: "Arxitektura",
      title: {
        uz: `${id}. ${d.name} — Turni Tekshirish va Downcasting`,
        en: `${id}. ${d.name} — Safe Downcasting & instanceof`
      },
      scenario: {
        uz: `${d.name} da umumiy '${base}' turidagi ob'yekt aynan '${sub}' ekanligini 'instanceof' orqali tekshirib, keyin xavfsiz downcast qiling va maxsus 'applyVipBonus()' metodini chaqiring.`,
        en: `Safely check 'obj instanceof ${sub}' before downcasting to invoke 'applyVipBonus()'.`
      },
      requirements: {
        classes: [base, sub],
        methods: ["applyVipBonus"],
        keywords: ["instanceof", "extends"]
      },
      starterCode: `class ${base} {}\n\nclass ${sub} extends ${base} {\n    public void applyVipBonus() {\n        System.out.println("${d.name}: VIP bonus qo'shildi!");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${base} obj = new ${sub}();\n        if (obj instanceof ${sub}) {\n            ${sub} downcasted = (${sub}) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}`,
      solution: `class ${base} {}\n\nclass ${sub} extends ${base} {\n    public void applyVipBonus() {\n        System.out.println("${d.name}: VIP bonus qo'shildi!");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${base} obj = new ${sub}();\n        if (obj instanceof ${sub}) {\n            ${sub} downcasted = (${sub}) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}`,
      detailedSolution: {
        theory: `Downcasting (otadan bolaga pastlash) xavfli operatsiyadir. Agar ob'yekt haqiqatda o'sha turda bo'lmasa, 'ClassCastException' otiladi. Shuning uchun har doim 'instanceof' bilan tekshiriladi.`,
        theoryEn: `Downcasting requires strict pre-validation via 'instanceof' to prevent disastrous runtime ClassCastExceptions.`,
        cleanCode: `if (obj instanceof ${sub}) {\n    ${sub} downcasted = (${sub}) obj;\n    downcasted.applyVipBonus();\n}`,
        breakdown: [
          `<code>obj instanceof ${sub}</code>: Xotiradagi ob'yekt haqiqatan ham ushbu sinfga tegishlimi yo'qmi tekshiradi.`
        ],
        pitfalls: `'instanceof' tekshiruvisiz qilingan har qanday downcasting potentsial xavf manbaidir.`,
        cw2Tip: `Buyurtma tovarlari orasida faqat ichimliklarning muz miqdorini o'zgartirish kerak bo'lsa, 'item instanceof Beverage' tekshiruvi qo'llaniladi.`
      }
    });
  });

  // TIER 5 (121–150): Template Method Pattern (Abstract Skeleton)
  DOMAINS.forEach((d, i) => {
    const id = i + 121;
    const base = d.entity + "Pipeline";
    const sub = d.entity + "Execution";

    challenges.push({
      id,
      tier: 5,
      tierName: "5-Bosqich: Shabloni Metod Dizayn Patterni",
      sector: "Master • CW2",
      title: {
        uz: `${id}. ${d.name} — Template Method Patterni`,
        en: `${id}. ${d.name} — Template Method Pattern`
      },
      scenario: {
        uz: `${d.name} da jarayon ketma-ketligini belgilovchi 'public final void process()' shablon metodini tuzing. U 'validate()' va 'executeStep()' abstrakt qadamlarini chaqirsin.`,
        en: `Implement Template Method pattern in ${d.name}: final template 'process()' calling abstract steps.`
      },
      requirements: {
        classes: [base, sub],
        methods: ["process", "validate", "executeStep"],
        keywords: ["abstract", "final", "extends"]
      },
      starterCode: `abstract class ${base} {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println("${d.name}: Jarayon muvaffaqiyatli yakunlandi.");\n    }\n}\n\nclass ${sub} extends ${base} {\n    @Override public void validate() { System.out.println("Tekshiruv o'tdi."); }\n    @Override public void executeStep() { System.out.println("Asosiy amal bajarildi."); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${base} pipe = new ${sub}();\n        pipe.process();\n    }\n}`,
      solution: `abstract class ${base} {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println("${d.name}: Jarayon muvaffaqiyatli yakunlandi.");\n    }\n}\n\nclass ${sub} extends ${base} {\n    @Override public void validate() { System.out.println("Tekshiruv o'tdi."); }\n    @Override public void executeStep() { System.out.println("Asosiy amal bajarildi."); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${base} pipe = new ${sub}();\n        pipe.process();\n    }\n}`,
      detailedSolution: {
        theory: `Template Method patterni algoritm skeletini ota sinfda 'final' metod sifatida qotirib qo'yadi va alohida qadamlarni avlod sinflarga topshiradi. Algoritm tuzilishi hech qachon buzilmaydi.`,
        theoryEn: `The Template Method pattern defines an algorithm invariant skeleton in a final method, delegating specific step execution to derived classes.`,
        cleanCode: `public final void process() {\n    validate();\n    executeStep();\n}`,
        breakdown: [
          `<code>public final void process()</code>: Ketma-ketlikni bolalar o'zgartira olmasligi uchun 'final' qilingan.`
        ],
        pitfalls: `Shablon metodni 'final' qilmaslik uning buzilishiga va qadamlar o'rni almashib ketishiga olib kelishi mumkin.`,
        cw2Tip: `CW2 da buyurtmani rasmiylashtirish jarayoni (Validate Cart -> Calculate Total -> Deduct Payment -> Print Receipt) aynan shu pattern asosida ishlaydi.`
      }
    });
  });

  return challenges;
}

// ============================================================================
// 5. GENERATE WEEK 5: INTERFACES & LOOSE COUPLING
// ============================================================================
function generateWeek5() {
  const challenges = [];

  // TIER 1 (1–30): Interface Implementation
  DOMAINS.forEach((d, i) => {
    const id = i + 1;
    const iface = "I" + d.entity + "Service";
    const impl = d.entity + "ServiceImpl";

    challenges.push({
      id,
      tier: 1,
      tierName: "1-Bosqich: Interfeys va 'implements'",
      sector: "Boshlang'ich",
      title: {
        uz: `${id}. ${d.name} — '${iface}' Interfeysini Joriy Qilish`,
        en: `${id}. ${d.name} — Interface & Implementation`
      },
      scenario: {
        uz: `${d.name} da 'interface ${iface}' e'lon qiling va unga 'void executeService();' metodini qo'shing. '${impl}' sinfida 'implements ${iface}' qiling.`,
        en: `Declare contract 'interface ${iface}' with 'void executeService();' implemented by '${impl}'.`
      },
      requirements: {
        classes: [iface, impl],
        methods: ["executeService"],
        keywords: ["interface", "implements"]
      },
      starterCode: `interface ${iface} {\n    void executeService();\n}\n\nclass ${impl} implements ${iface} {\n    @Override\n    public void executeService() {\n        System.out.println("${d.name}: Xizmat bajarildi!");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${iface} svc = new ${impl}();\n        svc.executeService();\n    }\n}`,
      solution: `interface ${iface} {\n    void executeService();\n}\n\nclass ${impl} implements ${iface} {\n    @Override\n    public void executeService() {\n        System.out.println("${d.name}: Xizmat bajarildi!");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${iface} svc = new ${impl}();\n        svc.executeService();\n    }\n}`,
      detailedSolution: {
        theory: `Interfeys — 100% abstrakt shartnoma. U 'NIMA qilinishi kerak'ligini aytadi, lekin 'QANDAY qilinishi'ni har bir sinf o'zi hal qiladi.`,
        theoryEn: `Interfaces establish a pure behavioral contract specifying WHAT operations must be supported without mandating HOW.`,
        cleanCode: `interface ${iface} { void executeService(); }\nclass ${impl} implements ${iface} { ... }`,
        breakdown: [
          `<code>implements ${iface}</code>: Sinif ushbu interfeysning barcha qoidalarini bajarish majburiyatini oladi.`
        ],
        pitfalls: `Interfeys metodlarini qayta yozayotganda 'public' so'zini qo'yish shart, aks holda ko'rinish darajasi pasayib ketadi.`,
        cw2Tip: `Barcha to'lov shlyuzlari (Payme, Click, Cash) bitta 'PaymentStrategy' interfeysini joriy qilishi shart.`
      }
    });
  });

  // TIER 2 (31–60): Default & Static Methods in Interfaces
  DOMAINS.forEach((d, i) => {
    const id = i + 31;
    const iface = "I" + d.entity + "Helper";
    const impl = d.entity + "HelperImpl";

    challenges.push({
      id,
      tier: 2,
      tierName: "2-Bosqich: 'default' va 'static' Metodlar",
      sector: "Amaliyot",
      title: {
        uz: `${id}. ${d.name} — Interfeysda Boshlang'ich Tanali Metod`,
        en: `${id}. ${d.name} — Interface Default & Static Methods`
      },
      scenario: {
        uz: `${d.name} da '${iface}' interfeysi ichida 'default void printLog()' tayyor metodini yozing. '${impl}' sinfi uni to'g'ridan-to'g'ri chaqira olsin.`,
        en: `Add default method 'printLog()' inside '${iface}' in ${d.name}.`
      },
      requirements: {
        classes: [iface, impl],
        methods: ["printLog"],
        keywords: ["interface", "default", "implements"]
      },
      starterCode: `interface ${iface} {\n    default void printLog() {\n        System.out.println("${d.name}: Tizim jurnali yozildi.");\n    }\n}\n\nclass ${impl} implements ${iface} {}\n\nclass Main {\n    public static void main(String[] args) {\n        ${iface} h = new ${impl}();\n        h.printLog();\n    }\n}`,
      solution: `interface ${iface} {\n    default void printLog() {\n        System.out.println("${d.name}: Tizim jurnali yozildi.");\n    }\n}\n\nclass ${impl} implements ${iface} {}\n\nclass Main {\n    public static void main(String[] args) {\n        ${iface} h = new ${impl}();\n        h.printLog();\n    }\n}`,
      detailedSolution: {
        theory: `Java 8 dan boshlab 'default' kalit so'zi orqali interfeyslar ichida tayyor kodli metodlar yaratish mumkin. Bu eski sinflarni buzmasdan interfeysni boyitishga xizmat qiladi.`,
        theoryEn: `Java 8 default methods enable interface evolution without breaking backwards compatibility with existing implementations.`,
        cleanCode: `default void printLog() { ... }`,
        breakdown: [
          `<code>default</code>: Avlod sinflar qayta yozmasa ham avtomatik ishlayveradi.`
        ],
        pitfalls: `'default' metodlar faqat interfeyslar ichida qo'llanilishi mumkin, oddiy sinflarda emas.`,
        cw2Tip: `Konsol ilovasida barcha bo'limlar uchun umumiy 'default void showHeader()' metodini interfeysda berish juda qulay.`
      }
    });
  });

  // TIER 3 (61–90): Multiple Interface Implementation
  DOMAINS.forEach((d, i) => {
    const id = i + 61;
    const iface1 = "I" + d.entity + "Printable";
    const iface2 = "I" + d.entity + "Auditable";
    const impl = d.entity + "Node";

    challenges.push({
      id,
      tier: 3,
      tierName: "3-Bosqich: Ko'p Interfeyslarni Bir Vaqtda Amalga Oshirish",
      sector: "Biznes Mantiq",
      title: {
        uz: `${id}. ${d.name} — Bir Nechta Interfeysni Qo'llash`,
        en: `${id}. ${d.name} — Multiple Interface Implementation`
      },
      scenario: {
        uz: `${d.name} da '${impl}' klassi ikkita interfeysni bir vaqtda amalga oshirsin: 'implements ${iface1}, ${iface2}'. Ikkala metodni ham yozing.`,
        en: `Implement multiple interfaces in ${d.name}: '${impl} implements ${iface1}, ${iface2}'.`
      },
      requirements: {
        classes: [iface1, iface2, impl],
        keywords: ["interface", "implements"]
      },
      starterCode: `interface ${iface1} { void printData(); }\ninterface ${iface2} { void auditLog(); }\n\nclass ${impl} implements ${iface1}, ${iface2} {\n    @Override public void printData() { System.out.println("${d.name}: Chop etildi"); }\n    @Override public void auditLog() { System.out.println("${d.name}: Audit qilindi"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${impl} node = new ${impl}();\n        node.printData();\n        node.auditLog();\n    }\n}`,
      solution: `interface ${iface1} { void printData(); }\ninterface ${iface2} { void auditLog(); }\n\nclass ${impl} implements ${iface1}, ${iface2} {\n    @Override public void printData() { System.out.println("${d.name}: Chop etildi"); }\n    @Override public void auditLog() { System.out.println("${d.name}: Audit qilindi"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${impl} node = new ${impl}();\n        node.printData();\n        node.auditLog();\n    }\n}`,
      detailedSolution: {
        theory: `Java sinflar uchun ko'p merosxo'rlikni taqiqlasa-da, interfeyslar orqali ko'p shartnomani bemalol amalga oshirishga ruxsat beradi (Multiple Inheritance of Type).`,
        theoryEn: `Java prohibits multiple class inheritance but embraces multiple interface implementation to compose capabilities safely.`,
        cleanCode: `class ${impl} implements ${iface1}, ${iface2} { ... }`,
        breakdown: [
          `<code>implements A, B</code>: Sinif bir nechta xarakterga ega bo'ladi.`
        ],
        pitfalls: `Agar ikkala interfeysda bir xil nomli default metod bo'lsa, 'Diamond problem' kelib chiqadi va sinf uni o'zi majburan qayta yozishi shart.`,
        cw2Tip: `Tovarlar bir vaqtning o'zida ham 'Printable' (chekda chiqadigan), ham 'Discountable' (chegirma bo'ladigan) bo'lishi mumkin.`
      }
    });
  });

  // TIER 4 (91–120): Dependency Injection & Loose Coupling
  DOMAINS.forEach((d, i) => {
    const id = i + 91;
    const iface = "I" + d.entity + "Gateway";
    const implA = "Local" + d.entity + "Gateway";
    const client = d.entity + "Client";

    challenges.push({
      id,
      tier: 4,
      tierName: "4-Bosqich: Bo'sh Bog'lanish (Loose Coupling) & DI",
      sector: "Arxitektura",
      title: {
        uz: `${id}. ${d.name} — Konstruktor Orqali Dependency Injection`,
        en: `${id}. ${d.name} — Loose Coupling & Dependency Injection`
      },
      scenario: {
        uz: `${d.name} da '${client}' klassi to'g'ridan-to'g'ri aniq sinfga emas, '${iface}' interfeysiga bog'lansin. Konstruktor orqali '${iface}' qabul qilib saqlang.`,
        en: `Decouple ${d.name}: '${client}' depends on interface '${iface}' injected via constructor.`
      },
      requirements: {
        classes: [iface, implA, client],
        constructors: [client],
        keywords: ["interface", "implements"]
      },
      starterCode: `interface ${iface} { void send(); }\n\nclass ${implA} implements ${iface} {\n    @Override public void send() { System.out.println("${d.name}: Xabar yuborildi."); }\n}\n\nclass ${client} {\n    private ${iface} gateway;\n    public ${client}(${iface} gateway) {\n        this.gateway = gateway;\n    }\n    public void execute() { gateway.send(); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${client} app = new ${client}(new ${implA}());\n        app.execute();\n    }\n}`,
      solution: `interface ${iface} { void send(); }\n\nclass ${implA} implements ${iface} {\n    @Override public void send() { System.out.println("${d.name}: Xabar yuborildi."); }\n}\n\nclass ${client} {\n    private ${iface} gateway;\n    public ${client}(${iface} gateway) {\n        this.gateway = gateway;\n    }\n    public void execute() { gateway.send(); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${client} app = new ${client}(new ${implA}());\n        app.execute();\n    }\n}`,
      detailedSolution: {
        theory: `Dependency Inversion (D in SOLID): Yuqori darajadagi modullar past darajadagi aniq sinflarga emas, balki abstraksiyaga (interfeysga) bog'lanishi kerak. Bu tizimni oson sinovdan o'tkazish (unit testing) imkonini beradi.`,
        theoryEn: `Dependency Inversion Principle (SOLID DIP): High-level modules depend upon abstractions rather than concrete lower-level details.`,
        cleanCode: `private ${iface} gateway;\npublic ${client}(${iface} gateway) { this.gateway = gateway; }`,
        breakdown: [
          `<code>${client}(${iface} gateway)</code>: Konstruktorda interfeys qabul qilib, istalgan boshqa gateway bilan almashtirish mumkin.`
        ],
        pitfalls: `Sinf ichida 'new AniqSinf()' deb to'g'ridan-to'g'ri yaratish qattiq bog'lanishga (tight coupling) olib keladi.`,
        cw2Tip: `CW2 da OrderController to'g'ridan-to'g'ri bitta to'lovga bog'lanib qolmasdan, 'IPaymentMethod' interfeysi orqali ishlaydi.`
      }
    });
  });

  // TIER 5 (121–150): Custom Callback & Event Listeners
  DOMAINS.forEach((d, i) => {
    const id = i + 121;
    const iface = "On" + d.entity + "CompletedListener";
    const dispatcher = d.entity + "Notifier";

    challenges.push({
      id,
      tier: 5,
      tierName: "5-Bosqich: Hodisalar va Callback Listener",
      sector: "Master • CW2",
      title: {
        uz: `${id}. ${d.name} — Callback Interfeysi va Xabarnoma`,
        en: `${id}. ${d.name} — Callback Interface & Event Dispatcher`
      },
      scenario: {
        uz: `${d.name} tizimida operatsiya tugagach xabar beruvchi 'interface ${iface} { void onComplete(String msg); }' callback interfeysini va uni chaqiruvchi '${dispatcher}' sinfini tuzing.`,
        en: `Build callback architecture in ${d.name}: '${dispatcher}' invokes 'onComplete(String msg)' on '${iface}'.`
      },
      requirements: {
        classes: [iface, dispatcher],
        methods: ["onComplete"],
        keywords: ["interface"]
      },
      starterCode: `interface ${iface} {\n    void onComplete(String msg);\n}\n\nclass ${dispatcher} {\n    public void triggerEvent(${iface} listener) {\n        System.out.println("${d.name}: Operatsiya bajarilmoqda...");\n        if (listener != null) listener.onComplete("Muvaffaqiyatli!");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${dispatcher} d = new ${dispatcher}();\n        d.triggerEvent(new ${iface}() {\n            @Override public void onComplete(String msg) {\n                System.out.println("Hodisa tutildi: " + msg);\n            }\n        });\n    }\n}`,
      solution: `interface ${iface} {\n    void onComplete(String msg);\n}\n\nclass ${dispatcher} {\n    public void triggerEvent(${iface} listener) {\n        System.out.println("${d.name}: Operatsiya bajarilmoqda...");\n        if (listener != null) listener.onComplete("Muvaffaqiyatli!");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${dispatcher} d = new ${dispatcher}();\n        d.triggerEvent(new ${iface}() {\n            @Override public void onComplete(String msg) {\n                System.out.println("Hodisa tutildi: " + msg);\n            }\n        });\n    }\n}`,
      detailedSolution: {
        theory: `Callback mexanizmi orqali bitta ob'yekt boshqa ob'yektga 'bu ish tugaganda mening ushbu metodimni chaqirib qo'y' deb o'z interfeysini taqdim etadi. Bu asinxron va hodisalarga asoslangan arxitekturaning negizidir.`,
        theoryEn: `Callbacks allow passing executable blocks disguised as interface implementations to be signaled upon task completion.`,
        cleanCode: `if (listener != null) listener.onComplete("OK");`,
        breakdown: [
          `<code>${iface} listener</code>: Hodisa yuz berganda xabardor qilinuvchi tinglovchi shartnomasi.`
        ],
        pitfalls: `Tinglovchi 'null' ekanligini tekshirmasdan chaqirish xatolikka olib keladi.`,
        cw2Tip: `CW2 da buyurtma muvaffaqiyatli to'langanda oshxona ekraniga va SMS tizimiga xabar yuborishda listener qo'llaniladi.`
      }
    });
  });

  return challenges;
}

// ============================================================================
// 6. GENERATE WEEK 6: GoF DESIGN PATTERNS & CW2 CONSOLE ORDER APP
// ============================================================================
function generateWeek6() {
  const challenges = [];

  // TIER 1 (1–30): Creational Patterns (Singleton, Factory, Builder)
  DOMAINS.forEach((d, i) => {
    const id = i + 1;
    const cls = d.entity + "Config";

    challenges.push({
      id,
      tier: 1,
      tierName: "1-Bosqich: Creational Patterns (Singleton & Factory)",
      sector: "GoF Creational",
      title: {
        uz: `${id}. ${d.name} — Yagona Konfiguratsiya (Singleton Pattern)`,
        en: `${id}. ${d.name} — Singleton Configuration Manager`
      },
      scenario: {
        uz: `${d.name} butun tizimda faqat bitta bo'lishi kerak bo'lgan '${cls}' Singleton sinfini talab qiladi. Konstruktorni 'private' qiling va 'public static ${cls} getInstance()' metodi orqali yagona instansni qaytaring.`,
        en: `Implement Thread-Safe Lazy Singleton '${cls}' in ${d.name} with private constructor and 'getInstance()'.`
      },
      requirements: {
        classes: [cls],
        methods: ["getInstance"],
        keywords: ["private", "static"]
      },
      starterCode: `class ${cls} {\n    private static ${cls} instance;\n    private ${cls}() {}\n\n    public static ${cls} getInstance() {\n        if (instance == null) {\n            instance = new ${cls}();\n        }\n        return instance;\n    }\n\n    public void showStatus() {\n        System.out.println("${d.name}: Singleton faol");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${cls} s1 = ${cls}.getInstance();\n        ${cls} s2 = ${cls}.getInstance();\n        System.out.println("Ikkala havola tengmi: " + (s1 == s2));\n    }\n}`,
      solution: `class ${cls} {\n    private static ${cls} instance;\n    private ${cls}() {}\n\n    public static ${cls} getInstance() {\n        if (instance == null) {\n            instance = new ${cls}();\n        }\n        return instance;\n    }\n\n    public void showStatus() {\n        System.out.println("${d.name}: Singleton faol");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${cls} s1 = ${cls}.getInstance();\n        ${cls} s2 = ${cls}.getInstance();\n        System.out.println("Ikkala havola tengmi: " + (s1 == s2));\n    }\n}`,
      detailedSolution: {
        theory: `Singleton Pattern — butun dastur hayotida sinfdan faqat bitta yagona obyekt mavjud bo'lishini va unga hamma joydan yagona kirish nuqtasini ta'minlaydi.`,
        theoryEn: `Singleton ensures a class maintains exactly one instance across application runtime, accessed via a global static method.`,
        cleanCode: `private static ${cls} instance;\nprivate ${cls}() {}\npublic static ${cls} getInstance() {\n    if (instance == null) instance = new ${cls}();\n    return instance;\n}`,
        breakdown: [
          `<code>private ${cls}()</code>: Tashqaridan 'new' orqali ikkinchi obyekt yaratilishini mutlaqo taqiqlaydi.`
        ],
        pitfalls: `Konstruktorni 'public' qoldirish Singleton g'oyasini butunlay yo'qqa chiqaradi.`,
        cw2Tip: `CW2 da butun konsol dasturi uchun yagona 'OrderManager' yoki 'AppConfig' yaratishda Singleton qo'llaniladi.`
      }
    });
  });

  // TIER 2 (31–60): Structural Patterns (Decorator & Adapter)
  DOMAINS.forEach((d, i) => {
    const id = i + 31;
    const baseItem = d.entity + "Item";
    const decorator = d.entity + "Decorator";

    challenges.push({
      id,
      tier: 2,
      tierName: "2-Bosqich: Structural Patterns (Decorator Pattern)",
      sector: "GoF Structural",
      title: {
        uz: `${id}. ${d.name} — Qo'shimcha Xususiyat (Decorator Pattern)`,
        en: `${id}. ${d.name} — Dynamic Behavior Decorator`
      },
      scenario: {
        uz: `${d.name} da asosiy elementga merosxo'rliksiz qo'shimcha narx va xususiyat qo'shish kerak. '${decorator}' sinfini tuzing: u '${baseItem}' obyektini o'rab olib, 'getCost()' narxiga +15.0 qo'shsin.`,
        en: `Implement Decorator pattern in ${d.name} to wrap '${baseItem}' and augment 'getCost()' by +15.0.`
      },
      requirements: {
        classes: [baseItem, decorator],
        methods: ["getCost"],
        keywords: ["extends"]
      },
      starterCode: `class ${baseItem} {\n    public double getCost() { return 50.0; }\n}\n\nclass ${decorator} extends ${baseItem} {\n    private ${baseItem} wrapped;\n    public ${decorator}(${baseItem} wrapped) {\n        this.wrapped = wrapped;\n    }\n    @Override\n    public double getCost() {\n        return (wrapped != null ? wrapped.getCost() : 0.0) + 15.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${baseItem} item = new ${baseItem}();\n        ${baseItem} decorated = new ${decorator}(item);\n        System.out.println("Asl narx: $" + item.getCost());\n        System.out.println("Bezatilgan narx: $" + decorated.getCost());\n    }\n}`,
      solution: `class ${baseItem} {\n    public double getCost() { return 50.0; }\n}\n\nclass ${decorator} extends ${baseItem} {\n    private ${baseItem} wrapped;\n    public ${decorator}(${baseItem} wrapped) {\n        this.wrapped = wrapped;\n    }\n    @Override\n    public double getCost() {\n        return (wrapped != null ? wrapped.getCost() : 0.0) + 15.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${baseItem} item = new ${baseItem}();\n        ${baseItem} decorated = new ${decorator}(item);\n        System.out.println("Asl narx: $" + item.getCost());\n        System.out.println("Bezatilgan narx: $" + decorated.getCost());\n    }\n}`,
      detailedSolution: {
        theory: `Decorator Pattern — ob'yektga yangi majburiyat yoki funksiyalarni dinamik (ish vaqtida) qo'shish imkonini beradi. Har bir yangi xususiyat uchun yangi sinf meros olish shart bo'lmaydi.`,
        theoryEn: `Decorator pattern dynamically attaches additional responsibilities to an object without subclass explosion.`,
        cleanCode: `class ${decorator} extends ${baseItem} {\n    private ${baseItem} wrapped;\n    public ${decorator}(${baseItem} w) { this.wrapped = w; }\n    @Override public double getCost() { return wrapped.getCost() + 15.0; }\n}`,
        breakdown: [
          `<code>${decorator} extends ${baseItem}</code>: Ham o'ralayotgan ob'yekt turida bo'ladi, ham uni o'z ichida saqlaydi.`
        ],
        pitfalls: `O'ralgan obyekt 'null' bo'lganda 'wrapped.getCost()' NullPointerException chaqirmasligini ta'minlang.`,
        cw2Tip: `Kofe ustiga sut yoki sirop qo'shish, pitsaga pishloq qo'shish CW2 ning Decorator talabi hisoblanadi.`
      }
    });
  });

  // TIER 3 (61–90): Behavioural Patterns (Strategy Pattern)
  DOMAINS.forEach((d, i) => {
    const id = i + 61;
    const iface = "I" + d.entity + "DiscountStrategy";
    const implA = "Regular" + d.entity + "Discount";
    const implB = "Vip" + d.entity + "Discount";
    const context = d.entity + "OrderCalculator";

    challenges.push({
      id,
      tier: 3,
      tierName: "3-Bosqich: Behavioural Patterns (Strategy Pattern)",
      sector: "GoF Behavioural",
      title: {
        uz: `${id}. ${d.name} — Chegirma Algoritmlari (Strategy Pattern)`,
        en: `${id}. ${d.name} — Interchangeable Strategy Pattern`
      },
      scenario: {
        uz: `${d.name} da chegirma hisoblash algoritmini almashtirib turiladigan qiling. '${iface}' tuzing va '${context}' sinfida strategiyani 'setStrategy()' orqali o'zgartiring.`,
        en: `Build Strategy pattern in ${d.name}: interchangeable discount algorithms via '${iface}'.`
      },
      requirements: {
        classes: [iface, implA, implB, context],
        methods: ["applyDiscount"],
        keywords: ["interface", "implements"]
      },
      starterCode: `interface ${iface} {\n    double applyDiscount(double total);\n}\n\nclass ${implA} implements ${iface} {\n    @Override public double applyDiscount(double total) { return total * 0.95; }\n}\n\nclass ${implB} implements ${iface} {\n    @Override public double applyDiscount(double total) { return total * 0.80; }\n}\n\nclass ${context} {\n    private ${iface} strategy;\n    public void setStrategy(${iface} strategy) { this.strategy = strategy; }\n    public double calculate(double total) {\n        return strategy != null ? strategy.applyDiscount(total) : total;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${context} calc = new ${context}();\n        calc.setStrategy(new ${implB}());\n        System.out.println("VIP narx: $" + calc.calculate(100.0));\n    }\n}`,
      solution: `interface ${iface} {\n    double applyDiscount(double total);\n}\n\nclass ${implA} implements ${iface} {\n    @Override public void applyDiscount(double total) { return total * 0.95; }\n}\n\nclass ${implB} implements ${iface} {\n    @Override public double applyDiscount(double total) { return total * 0.80; }\n}\n\nclass ${context} {\n    private ${iface} strategy;\n    public void setStrategy(${iface} strategy) { this.strategy = strategy; }\n    public double calculate(double total) {\n        return strategy != null ? strategy.applyDiscount(total) : total;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${context} calc = new ${context}();\n        calc.setStrategy(new ${implB}());\n        System.out.println("VIP narx: $" + calc.calculate(100.0));\n    }\n}`,
      detailedSolution: {
        theory: `Strategy Pattern — bir xil maqsadga yo'naltirilgan bir nechta algoritmlarni alohida sinflarga ajratadi va ularni ish vaqtida mijozga ko'ra osongina almashtirish imkonini beradi (if-else qatorlarini yo'qotadi).`,
        theoryEn: `Strategy pattern defines a family of algorithms, encapsulating each one, and making them interchangeable at runtime.`,
        cleanCode: `interface ${iface} { double applyDiscount(double total); }`,
        breakdown: [
          `<code>setStrategy(...)</code>: Dastur ishlash jarayonida algoritmni darhol almashtiradi.`
        ],
        pitfalls: `Har safar yangi chegirma chiqqanda if-else yozish Clean Code tamoyillariga ziddir (Open-Closed Principle).`,
        cw2Tip: `CW2 buyurtma ilovasida (Talaba chegirmasi, Yangi yil aksiyasi, VIP karta) aynan Strategy patterni orqali hisoblanadi.`
      }
    });
  });

  // TIER 4 (91–120): Observer Pattern (Status Notifications)
  DOMAINS.forEach((d, i) => {
    const id = i + 91;
    const iface = "I" + d.entity + "Observer";
    const subject = d.entity + "Notifier";

    challenges.push({
      id,
      tier: 4,
      tierName: "4-Bosqich: Observer Pattern va Xabardor Qilish",
      sector: "GoF Behavioural",
      title: {
        uz: `${id}. ${d.name} — Kuzatuvchi Patterni (Observer Pattern)`,
        en: `${id}. ${d.name} — Observer Event Dispatcher`
      },
      scenario: {
        uz: `${d.name} da holat o'zgarganda bir nechta tinglovchilarni ogohlantiruvchi '${subject}' sinfini tuzing. 'addObserver(${iface} obs)' va 'notifyObservers(String status)' metodlarini qo'shing.`,
        en: `Implement Observer pattern in ${d.name} to notify all registered observers upon status change.`
      },
      requirements: {
        classes: [iface, subject],
        methods: ["addObserver", "notifyObservers"],
        keywords: ["interface"]
      },
      starterCode: `import java.util.ArrayList;\nimport java.util.List;\n\ninterface ${iface} {\n    void update(String status);\n}\n\nclass ${subject} {\n    private List<${iface}> observers = new ArrayList<>();\n    public void addObserver(${iface} o) { observers.add(o); }\n    public void notifyObservers(String status) {\n        for (${iface} o : observers) o.update(status);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${subject} n = new ${subject}();\n        n.addObserver(status -> System.out.println("${d.name} Xabari: " + status));\n        n.notifyObservers("BUYURTMA TAYYOR");\n    }\n}`,
      solution: `import java.util.ArrayList;\nimport java.util.List;\n\ninterface ${iface} {\n    void update(String status);\n}\n\nclass ${subject} {\n    private List<${iface}> observers = new ArrayList<>();\n    public void addObserver(${iface} o) { observers.add(o); }\n    public void notifyObservers(String status) {\n        for (${iface} o : observers) o.update(status);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${subject} n = new ${subject}();\n        n.addObserver(status -> System.out.println("${d.name} Xabari: " + status));\n        n.notifyObservers("BUYURTMA TAYYOR");\n    }\n}`,
      detailedSolution: {
        theory: `Observer Pattern — bitta ob'yekt (Subject) holati o'zgarganda, unga obuna bo'lgan barcha boshqa ob'yektlarni (Observers) avtomatik xabardor qiluvchi 1-ko'pga (one-to-many) munosabatdir.`,
        theoryEn: `Observer pattern establishes a one-to-many dependency so that when one object changes state, all its dependents are notified automatically.`,
        cleanCode: `for (${iface} o : observers) { o.update(status); }`,
        breakdown: [
          `<code>List<${iface}> observers</code>: Tinglovchilar ro'yxatini dinamik saqlaydi.`
        ],
        pitfalls: `Obunachilarni ro'yxatdan o'chirish (removeObserver) imkoniyati bo'lmasa, xotira sizishi (memory leak) yuz berishi mumkin.`,
        cw2Tip: `CW2 da buyurtma tayyor bo'lganda ekranga, kvitansiyaga va konsol loglariga xabar berishda Observer ideal yechimdir.`
      }
    });
  });

  // TIER 5 (121–150): Full WIUT CW2 Console Order Application Modules
  DOMAINS.forEach((d, i) => {
    const id = i + 121;
    const appClass = d.entity + "CW2OrderApp";

    challenges.push({
      id,
      tier: 5,
      tierName: "5-Bosqich: To'liq WIUT CW2 Konsol Ilovasi (50%)",
      sector: "Master • CW2",
      title: {
        uz: `${id}. ${d.name} — CW2 Konsol Buyurtma Tizimi Arxitekturasi`,
        en: `${id}. ${d.name} — Complete CW2 Console Order Architecture`
      },
      scenario: {
        uz: `WIUT CW2 talablari asosida ${d.name} uchun to'liq '${appClass}' sinfini tuzing: buyurtma kodi ('ORD-xxx'), tovarlar soni, hisoblangan yakuniy chegirma va formatlangan chek chop etish ('printReceipt()').`,
        en: `Construct comprehensive WIUT CW2 '${appClass}' with order code, items total, discount application and formatted receipt printing.`
      },
      requirements: {
        classes: [appClass],
        methods: ["printReceipt"]
      },
      starterCode: `class ${appClass} {\n    private String orderId;\n    private double subtotal;\n    private double discountPct;\n\n    public ${appClass}(String orderId, double subtotal, double discountPct) {\n        this.orderId = orderId;\n        this.subtotal = subtotal;\n        this.discountPct = discountPct;\n    }\n\n    public double calculateFinalTotal() {\n        return subtotal * (1.0 - (discountPct / 100.0));\n    }\n\n    public void printReceipt() {\n        System.out.println("==========================================");\n        System.out.println("🏢 WIUT CW2: ${d.name.toUpperCase()} CHEKI");\n        System.out.println("Buyurtma ID: " + orderId);\n        System.out.println("Dastlabki summa: $" + subtotal);\n        System.out.println("Chegirma: " + discountPct + "%");\n        System.out.println("YAKUNIY TO'LOV: $" + calculateFinalTotal());\n        System.out.println("==========================================");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${appClass} app = new ${appClass}("${d.code}-9001", 120.0, 15.0);\n        app.printReceipt();\n    }\n}`,
      solution: `class ${appClass} {\n    private String orderId;\n    private double subtotal;\n    private double discountPct;\n\n    public ${appClass}(String orderId, double subtotal, double discountPct) {\n        this.orderId = orderId;\n        this.subtotal = subtotal;\n        this.discountPct = discountPct;\n    }\n\n    public double calculateFinalTotal() {\n        return subtotal * (1.0 - (discountPct / 100.0));\n    }\n\n    public void printReceipt() {\n        System.out.println("==========================================");\n        System.out.println("🏢 WIUT CW2: ${d.name.toUpperCase()} CHEKI");\n        System.out.println("Buyurtma ID: " + orderId);\n        System.out.println("Dastlabki summa: $" + subtotal);\n        System.out.println("Chegirma: " + discountPct + "%");\n        System.out.println("YAKUNIY TO'LOV: $" + calculateFinalTotal());\n        System.out.println("==========================================");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ${appClass} app = new ${appClass}("${d.code}-9001", 120.0, 15.0);\n        app.printReceipt();\n    }\n}`,
      detailedSolution: {
        theory: `WIUT 5COSC018C Coursework 2 (50%) talablarida asosiy konsol ilovasi toza arxitektura (Clean Architecture), dizayn patternlar va xatosiz chek chop etish qobiliyatini talab qiladi.`,
        theoryEn: `WIUT CW2 specification mandates Clean Architecture, robust design patterns, and formatted terminal receipts.`,
        cleanCode: `public void printReceipt() {\n    System.out.println("YAKUNIY TO'LOV: $" + calculateFinalTotal());\n}`,
        breakdown: [
          `<code>printReceipt()</code>: Buyurtma ma'lumotlarini formatlangan chiroyli kvitansiyaga aylantirib beradi.`
        ],
        pitfalls: `Manfiy chegirma foizlari kiritilishiga yo'l qo'ymang.`,
        cw2Tip: `Viva savolida examiner chek formati va patternlar integratsiyasini qanday amalga oshirganingizni so'raydi!`
      }
    });
  });

  return challenges;
}

// ============================================================================
// MAIN EXECUTION: BUILD ALL 6 WEEKS AND SAVE
// ============================================================================
console.log("⚡ 1-Hafta (150 ta Masala) generatsiya qilinmoqda...");
const w1 = generateWeek1();
const w1Content = `// WIUT OOP (5COSC018C) — WEEK 1 DATASET (150 PROGRESSIVE CHALLENGES)\nwindow.OOP_CHALLENGES_W1 = ${JSON.stringify(w1, null, 2)};\n`;
fs.writeFileSync(path.join(targetDir, 'challenges-w1.js'), w1Content, 'utf8');

console.log("⚡ 2-Hafta (150 ta Masala) generatsiya qilinmoqda...");
const w2 = generateWeek2();
const w2Content = `// WIUT OOP (5COSC018C) — WEEK 2 DATASET (150 PROGRESSIVE CHALLENGES)\nwindow.OOP_CHALLENGES_W2 = ${JSON.stringify(w2, null, 2)};\n`;
fs.writeFileSync(path.join(targetDir, 'challenges-w2.js'), w2Content, 'utf8');

console.log("⚡ 3-Hafta (150 ta Masala) generatsiya qilinmoqda...");
const w3 = generateWeek3();
const w3Content = `// WIUT OOP (5COSC018C) — WEEK 3 DATASET (150 PROGRESSIVE CHALLENGES)\nwindow.OOP_CHALLENGES_W3 = ${JSON.stringify(w3, null, 2)};\n`;
fs.writeFileSync(path.join(targetDir, 'challenges-w3.js'), w3Content, 'utf8');

console.log("⚡ 4-Hafta (150 ta Masala) generatsiya qilinmoqda...");
const w4 = generateWeek4();
const w4Content = `// WIUT OOP (5COSC018C) — WEEK 4 DATASET (150 PROGRESSIVE CHALLENGES)\nwindow.OOP_CHALLENGES_W4 = ${JSON.stringify(w4, null, 2)};\n`;
fs.writeFileSync(path.join(targetDir, 'challenges-w4.js'), w4Content, 'utf8');

console.log("⚡ 5-Hafta (150 ta Masala) generatsiya qilinmoqda...");
const w5 = generateWeek5();
const w5Content = `// WIUT OOP (5COSC018C) — WEEK 5 DATASET (150 PROGRESSIVE CHALLENGES)\nwindow.OOP_CHALLENGES_W5 = ${JSON.stringify(w5, null, 2)};\n`;
fs.writeFileSync(path.join(targetDir, 'challenges-w5.js'), w5Content, 'utf8');

console.log("⚡ 6-Hafta (150 ta Masala) generatsiya qilinmoqda...");
const w6 = generateWeek6();
const w6Content = `// WIUT OOP (5COSC018C) — WEEK 6 DATASET (150 PROGRESSIVE CHALLENGES)\nwindow.OOP_CHALLENGES_W6 = ${JSON.stringify(w6, null, 2)};\n`;
fs.writeFileSync(path.join(targetDir, 'challenges-w6.js'), w6Content, 'utf8');

console.log(`\n🎉 Muvaffaqiyatli yakunlandi!`);
console.log(`- 1-Hafta: ${w1.length} ta topshiriq`);
console.log(`- 2-Hafta: ${w2.length} ta topshiriq`);
console.log(`- 3-Hafta: ${w3.length} ta topshiriq`);
console.log(`- 4-Hafta: ${w4.length} ta topshiriq`);
console.log(`- 5-Hafta: ${w5.length} ta topshiriq`);
console.log(`- 6-Hafta: ${w6.length} ta topshiriq`);
console.log(`JAMI: ${w1.length + w2.length + w3.length + w4.length + w5.length + w6.length} ta professional topshiriq yaratildi!`);
