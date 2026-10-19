const fs = require('fs');
const path = require('path');
const vm = require('vm');

const filePath = path.join(__dirname, '..', 'oop', 'shared', 'challenges-w1.js');
const rawCode = fs.readFileSync(filePath, 'utf8');
const ctx = { window: {} };
vm.runInNewContext(rawCode, ctx);
const challenges = ctx.window.OOP_CHALLENGES_W1;

// Master Definitions for all 50 challenges: Authentic Real-World Story + Clean 1..5 Step-by-Step Instructions
const ENRICHMENTS = {
  1: {
    story: {
      uz: "Uzum Market elektron tijorat platformasida har bir mahsulotni katalogga joylashtirish va tizimda saqlash uchun shablon (klass) talab qilinadi. Mahsulotning nomi, sotuv narxi va omborda mavjudligi xususiyatlarini ifodalovchi model yarating.",
      en: "On the Uzum Market e-commerce platform, a blueprint (class) is required to catalog and store listed items. Model a product with its title, retail price, and warehouse stock availability."
    },
    steps: {
      uz: [
        "<code>Product</code> nomli klass e'lon qiling.",
        "Klass ichiga quyidagi 3 ta maydonni qo'shing: <code>String title;</code> (mahsulot nomi), <code>double price;</code> (narxi) va <code>boolean inStock;</code> (omborda bor-yo'qligi).",
        "<code>Main</code> klassining <code>main</code> metodida <code>Product p = new Product();</code> ob'yektini yarating.",
        "Ob'yekt maydonlariga qiymat yuklang: <code>p.title = \"Smartfon Redmi Note 13\";</code>, <code>p.price = 2450000.0;</code>, <code>p.inStock = true;</code>.",
        "Natijani ekranga chop eting: <code>System.out.println(\"Mahsulot: \" + p.title + \" | Narxi: \" + p.price + \" so'm | Mavjud: \" + p.inStock);</code>"
      ],
      en: [
        "Declare a class named <code>Product</code>.",
        "Add three fields: <code>String title;</code>, <code>double price;</code>, and <code>boolean inStock;</code>.",
        "In the <code>main</code> method of class <code>Main</code>, instantiate an object: <code>Product p = new Product();</code>.",
        "Assign values: <code>p.title = \"Smartfon Redmi Note 13\";</code>, <code>p.price = 2450000.0;</code>, <code>p.inStock = true;</code>.",
        "Print the product details: <code>System.out.println(\"Mahsulot: \" + p.title + \" | Narxi: \" + p.price + \" so'm | Mavjud: \" + p.inStock);</code>"
      ]
    }
  },
  2: {
    story: {
      uz: "WIUT talabalar portalida har bir talabaning shaxsiy akademik profili saqlanadi. Dasturda xotiraning Heap qismida ikki xil talaba uchun alohida ob'yektlar ajratilib, ularning GPA ko'rsatkichlari solishtirilishi kerak.",
      en: "The WIUT Student Portal manages independent academic records. Instantiate two distinct student records on the Heap and compare their GPAs to find the higher-performing student."
    },
    steps: {
      uz: [
        "<code>Student</code> klassini yarating va unga <code>String fullName;</code>, <code>int idNumber;</code>, <code>double gpa;</code> maydonlarini qo'shing.",
        "<code>Main</code> metodida ikkita alohida ob'yekt yarating: <code>Student s1 = new Student();</code> va <code>Student s2 = new Student();</code>.",
        "<code>s1</code> maydonlariga qiymat bering: <code>fullName = \"Jasur Aliyev\"</code>, <code>idNumber = 1001</code>, <code>gpa = 3.8</code>.",
        "<code>s2</code> maydonlariga qiymat bering: <code>fullName = \"Madina Karimova\"</code>, <code>idNumber = 1002</code>, <code>gpa = 3.95</code>.",
        "<code>if (s1.gpa > s2.gpa)</code> sharti orqali solishtiring va GPA si yuqori bo'lgan talabani chop eting: <code>System.out.println(\"Yuqori GPA: \" + s2.fullName + \" (\" + s2.gpa + \")\");</code>"
      ],
      en: [
        "Create class <code>Student</code> with fields <code>String fullName;</code>, <code>int idNumber;</code>, and <code>double gpa;</code>.",
        "In <code>main</code>, instantiate two objects: <code>Student s1 = new Student();</code> and <code>Student s2 = new Student();</code>.",
        "Assign values to <code>s1</code>: <code>fullName = \"Jasur Aliyev\"</code>, <code>idNumber = 1001</code>, <code>gpa = 3.8</code>.",
        "Assign values to <code>s2</code>: <code>fullName = \"Madina Karimova\"</code>, <code>idNumber = 1002</code>, <code>gpa = 3.95</code>.",
        "Compare GPAs and print the higher student: <code>System.out.println(\"Yuqori GPA: \" + s2.fullName + \" (\" + s2.gpa + \")\");</code>"
      ]
    }
  },
  3: {
    story: {
      uz: "Yandex Go taksi agregatori servisida yo'lovchi safarni yakunlaganda haydovchining ismi, bosib o'tilgan masofa va har bir kilometr narxi asosida yakuniy safar haqi hisoblanadi.",
      en: "In Yandex Go taxi service, when a ride finishes, the total trip fare is computed using driver name, distance traveled, and rate per kilometer."
    },
    steps: {
      uz: [
        "<code>TaxiTrip</code> klassini tuzing: <code>String driverName;</code>, <code>double distanceKm;</code>, <code>double ratePerKm;</code> maydonlarini e'lon qiling.",
        "<code>Main</code> metodida <code>TaxiTrip trip = new TaxiTrip();</code> ob'yektini yarating.",
        "Maydonlariga qiymat yuklang: <code>trip.driverName = \"Davron Ahmedov\";</code>, <code>trip.distanceKm = 12.5;</code>, <code>trip.ratePerKm = 3200.0;</code>.",
        "Jami yo'l haqini hisoblang: <code>double totalFare = trip.distanceKm * trip.ratePerKm;</code>.",
        "Safar ma'lumotlarini chop eting: <code>System.out.println(\"Haydovchi: \" + trip.driverName + \" | Masofa: \" + trip.distanceKm + \" km | Jami: \" + totalFare + \" so'm\");</code>"
      ],
      en: [
        "Create class <code>TaxiTrip</code> with fields <code>String driverName;</code>, <code>double distanceKm;</code>, and <code>double ratePerKm;</code>.",
        "In <code>main</code>, instantiate: <code>TaxiTrip trip = new TaxiTrip();</code>.",
        "Assign field values: <code>trip.driverName = \"Davron Ahmedov\";</code>, <code>trip.distanceKm = 12.5;</code>, <code>trip.ratePerKm = 3200.0;</code>.",
        "Calculate the total fare: <code>double totalFare = trip.distanceKm * trip.ratePerKm;</code>.",
        "Print ride receipt: <code>System.out.println(\"Haydovchi: \" + trip.driverName + \" | Masofa: \" + trip.distanceKm + \" km | Jami: \" + totalFare + \" so'm\");</code>"
      ]
    }
  },
  4: {
    story: {
      uz: "Payme fintech to'lov ilovasida har bir pul o'tkazmasi tranzaksiya identifikatori, o'tkazma summasi, bajarilganlik holati (flag) va jo'natuvchi telefon raqami bilan monitoring qilinadi.",
      en: "In the Payme fintech payment system, each transaction is logged with a transaction ID, money amount, completion status flag, and sender phone number."
    },
    steps: {
      uz: [
        "<code>Transaction</code> klassini e'lon qiling: <code>String txnId;</code>, <code>double amount;</code>, <code>boolean isCompleted;</code>, <code>String senderPhone;</code>.",
        "<code>Main</code> metodida <code>Transaction tx = new Transaction();</code> ob'yektini yarating.",
        "Maydonlariga qiymat bering: <code>tx.txnId = \"TXN-77889\";</code>, <code>tx.amount = 150000.0;</code>, <code>tx.isCompleted = true;</code>, <code>tx.senderPhone = \"+998901234567\";</code>.",
        "Shart orqali holat matnini aniqlang: agar <code>tx.isCompleted</code> rost bo'lsa <code>\"Muvaffaqiyatli\"</code>, aks holda <code>\"Kutilmoqda\"</code>.",
        "Tranzaksiya ma'lumotlarini chop eting: <code>System.out.println(\"Tranzaksiya #\" + tx.txnId + \" | Summa: \" + tx.amount + \" so'm | Holat: \" + statusText + \" | Tel: \" + tx.senderPhone);</code>"
      ],
      en: [
        "Declare class <code>Transaction</code> with: <code>String txnId;</code>, <code>double amount;</code>, <code>boolean isCompleted;</code>, <code>String senderPhone;</code>.",
        "In <code>main</code>, create object: <code>Transaction tx = new Transaction();</code>.",
        "Assign values: <code>tx.txnId = \"TXN-77889\";</code>, <code>tx.amount = 150000.0;</code>, <code>tx.isCompleted = true;</code>, <code>tx.senderPhone = \"+998901234567\";</code>.",
        "Check status flag: if <code>tx.isCompleted</code> is true, status is <code>\"Muvaffaqiyatli\"</code>, else <code>\"Kutilmoqda\"</code>.",
        "Print transaction summary: <code>System.out.println(\"Tranzaksiya #\" + tx.txnId + \" | Summa: \" + tx.amount + \" so'm | Holat: \" + statusText + \" | Tel: \" + tx.senderPhone);</code>"
      ]
    }
  },
  5: {
    story: {
      uz: "Bulutli infratuzilma klasterida serverlarning tezkor xotira (RAM) sarfini monitoring qilib boruvchi agent ishlab chiqilmoqda. Bo'sh xotira va yuklanish foizi hisoblanishi zarur.",
      en: "In a cloud hosting cluster, an agent monitors server RAM usage. It calculates the remaining free RAM and percentage memory utilization."
    },
    steps: {
      uz: [
        "<code>ServerNode</code> klassini tuzing: <code>String hostName;</code>, <code>int totalRamMb;</code>, <code>int usedRamMb;</code> maydonlarini e'lon qiling.",
        "<code>Main</code> metodida <code>ServerNode node = new ServerNode();</code> ob'yektini yarating.",
        "Maydonlariga qiymat yuklang: <code>node.hostName = \"prod-node-01.wiut.uz\";</code>, <code>node.totalRamMb = 16384;</code>, <code>node.usedRamMb = 12288;</code>.",
        "Bo'sh RAM (<code>node.totalRamMb - node.usedRamMb</code>) va bandlik foizini (<code>((double) node.usedRamMb / node.totalRamMb) * 100.0</code>) hisoblang.",
        "Server monitoring ma'lumotlarini 2 qatorda chop eting:<br><code>System.out.println(\"Server: \" + node.hostName);</code><br><code>System.out.println(\"Bo'sh RAM: \" + freeRam + \" MB | Bandlik: \" + usagePercent + \"%\");</code>"
      ],
      en: [
        "Create class <code>ServerNode</code> with: <code>String hostName;</code>, <code>int totalRamMb;</code>, <code>int usedRamMb;</code>.",
        "In <code>main</code>, instantiate: <code>ServerNode node = new ServerNode();</code>.",
        "Assign values: <code>node.hostName = \"prod-node-01.wiut.uz\";</code>, <code>node.totalRamMb = 16384;</code>, <code>node.usedRamMb = 12288;</code>.",
        "Calculate free RAM (<code>node.totalRamMb - node.usedRamMb</code>) and usage percentage (<code>((double) node.usedRamMb / node.totalRamMb) * 100.0</code>).",
        "Print monitoring output on 2 lines:<br><code>System.out.println(\"Server: \" + node.hostName);</code><br><code>System.out.println(\"Bo'sh RAM: \" + freeRam + \" MB | Bandlik: \" + usagePercent + \"%\");</code>"
      ]
    }
  },
  6: {
    story: {
      uz: "UzAirways aviakompaniyasining reys chiptalari boshqaruv tizimi. Yo'lovchining chipta klassi tekshirilib, biznes-klass yo'lovchilariga VIP Lounge kutish zaliga kirish ruxsati beriladi.",
      en: "UzAirways flight ticketing system checks booking class. Business class passengers receive complimentary VIP Lounge access credentials."
    },
    steps: {
      uz: [
        "<code>FlightBooking</code> klassini yarating: <code>String flightCode;</code>, <code>String passengerName;</code>, <code>int seatNumber;</code>, <code>boolean isBusinessClass;</code>.",
        "<code>Main</code> metodida <code>FlightBooking b = new FlightBooking();</code> ob'yektini yarating.",
        "Maydonlariga qiymat bering: <code>b.flightCode = \"HY-101\";</code>, <code>b.passengerName = \"Akmal Nazarov\";</code>, <code>b.seatNumber = 3;</code>, <code>b.isBusinessClass = true;</code>.",
        "Shart tekshiring: agar <code>b.isBusinessClass</code> rost bo'lsa <code>\"Biznes-klass (VIP Lounge ruxsati bor)\"</code>, aks holda <code>\"Standart joy\"</code> matnini tayyorlang.",
        "Chiptani 2 qatorda chop eting:<br><code>System.out.println(\"Reys: \" + b.flightCode + \" | Yo'lovchi: \" + b.passengerName);</code><br><code>System.out.println(\"Joy: #\" + b.seatNumber + \" (\" + loungeInfo + \")\");</code>"
      ],
      en: [
        "Declare class <code>FlightBooking</code> with fields: <code>String flightCode;</code>, <code>String passengerName;</code>, <code>int seatNumber;</code>, <code>boolean isBusinessClass;</code>.",
        "In <code>main</code>, instantiate: <code>FlightBooking b = new FlightBooking();</code>.",
        "Assign values: <code>b.flightCode = \"HY-101\";</code>, <code>b.passengerName = \"Akmal Nazarov\";</code>, <code>b.seatNumber = 3;</code>, <code>b.isBusinessClass = true;</code>.",
        "Evaluate class: if <code>b.isBusinessClass</code> is true, text is <code>\"Biznes-klass (VIP Lounge ruxsati bor)\"</code>, else <code>\"Standart joy\"</code>.",
        "Print ticket details on 2 lines:<br><code>System.out.println(\"Reys: \" + b.flightCode + \" | Yo'lovchi: \" + b.passengerName);</code><br><code>System.out.println(\"Joy: #\" + b.seatNumber + \" (\" + loungeInfo + \")\");</code>"
      ]
    }
  },
  7: {
    story: {
      uz: "Korzinka supermarketlar tarmog'ida tovar zaxirasi belgilangan minimal chegaradan kamayib ketganda avtomatik ogohlantiruvchi ta'minot moduli talab etiladi.",
      en: "In Korzinka supermarket chain, warehouse inventory triggers an automated restock alert when quantity drops below the designated threshold."
    },
    steps: {
      uz: [
        "<code>InventoryItem</code> klassini tuzing: <code>String skuCode;</code>, <code>String itemName;</code>, <code>int quantity;</code>, <code>int minThreshold;</code>.",
        "<code>Main</code> metodida <code>InventoryItem item = new InventoryItem();</code> ob'yektini yarating.",
        "Maydonlariga qiymat yuklang: <code>item.skuCode = \"SKU-9901\";</code>, <code>item.itemName = \"Sut 1.5L Musaffo\";</code>, <code>item.quantity = 4;</code>, <code>item.minThreshold = 10;</code>.",
        "<code>item.quantity <= item.minThreshold</code> shartini tekshirib, xulosa matnini tuzing.",
        "Ombor holatini 2 qatorda chop eting:<br><code>System.out.println(\"Tovar: \" + item.itemName + \" | Qoldiq: \" + item.quantity + \" dona\");</code><br><code>System.out.println(\"DIQQAT: Qayta buyurtma bering! Qoldiq chegaradan kam (\" + item.quantity + \" <= \" + item.minThreshold + \")\");</code>"
      ],
      en: [
        "Declare class <code>InventoryItem</code> with: <code>String skuCode;</code>, <code>String itemName;</code>, <code>int quantity;</code>, <code>int minThreshold;</code>.",
        "In <code>main</code>, instantiate: <code>InventoryItem item = new InventoryItem();</code>.",
        "Assign values: <code>item.skuCode = \"SKU-9901\";</code>, <code>item.itemName = \"Sut 1.5L Musaffo\";</code>, <code>item.quantity = 4;</code>, <code>item.minThreshold = 10;</code>.",
        "Check condition <code>item.quantity <= item.minThreshold</code>.",
        "Print alert output on 2 lines:<br><code>System.out.println(\"Tovar: \" + item.itemName + \" | Qoldiq: \" + item.quantity + \" dona\");</code><br><code>System.out.println(\"DIQQAT: Qayta buyurtma bering! Qoldiq chegaradan kam (\" + item.quantity + \" <= \" + item.minThreshold + \")\");</code>"
      ]
    }
  },
  8: {
    story: {
      uz: "Medion xususiy klinikasida bemorning qon bosimi va tana harorati me'yordan oshganda gipertoniya xavfi to'g'risida shifokorga xulosa beruvchi tizim ishlab chiqilmoqda.",
      en: "Medion private clinic monitors vital patient health indicators, alerting doctors if systolic or diastolic blood pressure signals hypertension risk."
    },
    steps: {
      uz: [
        "<code>MedicalRecord</code> klassini yarating: <code>String patientName;</code>, <code>int systolicPressure;</code>, <code>int diastolicPressure;</code>, <code>double bodyTemp;</code>.",
        "<code>Main</code> metodida <code>MedicalRecord rec = new MedicalRecord();</code> ob'yektini yarating.",
        "Maydonlariga qiymat bering: <code>rec.patientName = \"Sanjar Jo'rayev\";</code>, <code>rec.systolicPressure = 145;</code>, <code>rec.diastolicPressure = 92;</code>, <code>rec.bodyTemp = 36.6;</code>.",
        "Gipertoniya shartini tekshiring: <code>if (rec.systolicPressure >= 140 || rec.diastolicPressure >= 90)</code>.",
        "Bemor kartasini 2 qatorda chop eting:<br><code>System.out.println(\"Bemor: \" + rec.patientName + \" | Tana harorati: \" + rec.bodyTemp + \"°C\");</code><br><code>System.out.println(\"Xulosa: Gipertoniya xavfi (\" + rec.systolicPressure + \"/\" + rec.diastolicPressure + \")\");</code>"
      ],
      en: [
        "Create class <code>MedicalRecord</code> with: <code>String patientName;</code>, <code>int systolicPressure;</code>, <code>int diastolicPressure;</code>, <code>double bodyTemp;</code>.",
        "In <code>main</code>, instantiate: <code>MedicalRecord rec = new MedicalRecord();</code>.",
        "Assign values: <code>rec.patientName = \"Sanjar Jo'rayev\";</code>, <code>rec.systolicPressure = 145;</code>, <code>rec.diastolicPressure = 92;</code>, <code>rec.bodyTemp = 36.6;</code>.",
        "Evaluate hypertension condition: <code>if (rec.systolicPressure >= 140 || rec.diastolicPressure >= 90)</code>.",
        "Print record details on 2 lines:<br><code>System.out.println(\"Bemor: \" + rec.patientName + \" | Tana harorati: \" + rec.bodyTemp + \"°C\");</code><br><code>System.out.println(\"Xulosa: Gipertoniya xavfi (\" + rec.systolicPressure + \"/\" + rec.diastolicPressure + \")\");</code>"
      ]
    }
  },
  9: {
    story: {
      uz: "BYD elektromobilining bort kompyuteri telemetriya ma'lumotlari orqali akkumulyatorning qolgan quvvat foizi va unga asoslangan zaxira yurish masofasini (km) real vaqtda hisoblaydi.",
      en: "BYD electric vehicle telemetry computer estimates battery remaining charge percentage and calculates remaining driving range in kilometers."
    },
    steps: {
      uz: [
        "<code>Vehicle</code> klassini tuzing: <code>String vin;</code>, <code>double batteryCapacityKwh;</code>, <code>double currentChargeKwh;</code>, <code>double consumptionPer100Km;</code>.",
        "<code>Main</code> metodida <code>Vehicle car = new Vehicle();</code> ob'yektini yarating.",
        "Maydonlariga qiymat yuklang: <code>car.vin = \"BYD-CHAZOR-2024-UZB\";</code>, <code>car.batteryCapacityKwh = 18.3;</code>, <code>car.currentChargeKwh = 12.0;</code>, <code>car.consumptionPer100Km = 14.5;</code>.",
        "Zaryad foizi (<code>(car.currentChargeKwh / car.batteryCapacityKwh) * 100.0</code>) va zaxira masofasini (<code>(car.currentChargeKwh / car.consumptionPer100Km) * 100.0</code>) hisoblang.",
        "Avtomobil telemetriyasini 2 qatorda chop eting:<br><code>System.out.println(\"VIN: \" + car.vin);</code><br><code>System.out.println(\"Batareya: \" + batteryPercent + \"% | Zaxira masofa: \" + remainingKm + \" km\");</code>"
      ],
      en: [
        "Create class <code>Vehicle</code> with: <code>String vin;</code>, <code>double batteryCapacityKwh;</code>, <code>double currentChargeKwh;</code>, <code>double consumptionPer100Km;</code>.",
        "In <code>main</code>, instantiate: <code>Vehicle car = new Vehicle();</code>.",
        "Assign values: <code>car.vin = \"BYD-CHAZOR-2024-UZB\";</code>, <code>car.batteryCapacityKwh = 18.3;</code>, <code>car.currentChargeKwh = 12.0;</code>, <code>car.consumptionPer100Km = 14.5;</code>.",
        "Compute charge percentage and remaining range in km.",
        "Print telemetry data on 2 lines:<br><code>System.out.println(\"VIN: \" + car.vin);</code><br><code>System.out.println(\"Batareya: \" + batteryPercent + \"% | Zaxira masofa: \" + remainingKm + \" km\");</code>"
      ]
    }
  },
  10: {
    story: {
      uz: "E-Auksion platformasida qimmatbaho lot savdosi o'tkazilmoqda. Qatnashchilardan yangi taklif tushganda, agar u joriy eng yuqori narxdan katta bo'lsagina auksion yetakchisi va narxi yangilanadi.",
      en: "On E-Auction platform, participants bid on high-value lots. A new bid updates the highest bidder and bid price only if it strictly exceeds the current highest bid."
    },
    steps: {
      uz: [
        "<code>AuctionLot</code> klassini yarating: <code>String lotTitle;</code>, <code>double startingPrice;</code>, <code>double highestBid;</code>, <code>String highestBidder;</code>.",
        "<code>Main</code> metodida <code>AuctionLot lot = new AuctionLot();</code> ob'yektini yarating.",
        "Boshlang'ich qiymatlarni o'rnating: <code>lot.lotTitle = \"Toshkent City Ofis Binosi\";</code>, <code>lot.startingPrice = 500000.0;</code>, <code>lot.highestBid = 500000.0;</code>, <code>lot.highestBidder = \"Boshlang'ich\";</code>.",
        "Yangi taklifni tekshiring (<code>double newBid = 520000.0; String newBidder = \"Kompaniya A\";</code>): agar <code>newBid > lot.highestBid</code> bo'lsa, <code>highestBid</code> va <code>highestBidder</code> ni yangilang.",
        "Auksion natijasini 2 qatorda chop eting:<br><code>System.out.println(\"Lot: \" + lot.lotTitle);</code><br><code>System.out.println(\"G'olib: \" + lot.highestBidder + \" | Yakuniy narx: $\" + lot.highestBid);</code>"
      ],
      en: [
        "Declare class <code>AuctionLot</code> with: <code>String lotTitle;</code>, <code>double startingPrice;</code>, <code>double highestBid;</code>, <code>String highestBidder;</code>.",
        "In <code>main</code>, instantiate: <code>AuctionLot lot = new AuctionLot();</code>.",
        "Set initial values: <code>lot.lotTitle = \"Toshkent City Ofis Binosi\";</code>, <code>lot.startingPrice = 500000.0;</code>, <code>lot.highestBid = 500000.0;</code>, <code>lot.highestBidder = \"Boshlang'ich\";</code>.",
        "Process new bid (<code>520000.0, \"Kompaniya A\"</code>): update highest bidder if higher than current highest bid.",
        "Print auction result on 2 lines:<br><code>System.out.println(\"Lot: \" + lot.lotTitle);</code><br><code>System.out.println(\"G'olib: \" + lot.highestBidder + \" | Yakuniy narx: $\" + lot.highestBid);</code>"
      ]
    }
  },
  11: {
    story: {
      uz: "Raqamli hamyon tizimida balansni to'g'ridan-to'g'ri tashqaridan o'zgartirish o'rniga, pul kiritish va pul yechish amallari ob'yektning o'ziga tegishli instans metodlari orqali amalga oshiriladi.",
      en: "In a digital wallet system, funds must not be directly manipulated from outside. Dedicated instance methods manage deposits and withdrawals safely."
    },
    steps: {
      uz: [
        "<code>Wallet</code> klassini tuzing va unga <code>double balance;</code> maydonini e'lon qiling.",
        "<code>public void deposit(double amount)</code> metodini yozing: agar <code>amount > 0</code> bo'lsa, <code>balance += amount;</code>.",
        "<code>public void withdraw(double amount)</code> metodini yozing: agar <code>amount > 0</code> va <code>balance >= amount</code> bo'lsa, <code>balance -= amount;</code>.",
        "<code>Main</code> metodida <code>Wallet w = new Wallet();</code> yarating va <code>w.balance = 50000.0;</code> boshlang'ich mablag' bering.",
        "Ketma-ket chaqiring: <code>w.deposit(20000.0);</code> so'ng <code>w.withdraw(15000.0);</code> va yakuniy balansni chop eting: <code>System.out.println(\"Hamyon balansi: \" + w.balance + \" so'm\");</code>"
      ],
      en: [
        "Create class <code>Wallet</code> with field <code>double balance;</code>.",
        "Implement <code>public void deposit(double amount)</code>: if <code>amount > 0</code>, add to balance.",
        "Implement <code>public void withdraw(double amount)</code>: if <code>amount > 0</code> and <code>balance >= amount</code>, subtract from balance.",
        "In <code>main</code>, instantiate <code>Wallet w = new Wallet();</code> with <code>w.balance = 50000.0;</code>.",
        "Call <code>w.deposit(20000.0);</code>, then <code>w.withdraw(15000.0);</code>, and print final balance: <code>System.out.println(\"Hamyon balansi: \" + w.balance + \" so'm\");</code>"
      ]
    }
  },
  12: {
    story: {
      uz: "Uzum Market elektron savdo platformasida mavsumiy chegirmalar kampaniyasi e'lon qilindi. Mahsulotning asl narxidan chegirma foizini ayirib, xaridor to'lashi kerak bo'lgan yakuniy narxni hisoblab qaytaruvchi ('return') metod zarur.",
      en: "On Uzum Market, a seasonal discount campaign has been launched. A value-returning ('return') method is required to calculate the final price payable after deducting the discount percentage."
    },
    steps: {
      uz: [
        "<code>ProductSale</code> klassini yarating va unga <code>double basePrice;</code> maydonini qo'shing.",
        "<code>public double calculateFinalPrice(double discountPercentage)</code> metodini yozing:<br>• Formulalar: <code>double discountAmount = basePrice * (discountPercentage / 100.0); return basePrice - discountAmount;</code>",
        "<code>Main</code> metodida <code>ProductSale sale = new ProductSale();</code> obyektini yarating.",
        "Maydonga <code>sale.basePrice = 1200000.0;</code> qiymatini bering.",
        "Metodni chaqiring va natijani chop eting: <code>double finalPrice = sale.calculateFinalPrice(15.0);</code><br><code>System.out.println(\"Asl narx: \" + sale.basePrice + \" | Chegirmali narx: \" + finalPrice);</code>"
      ],
      en: [
        "Create class <code>ProductSale</code> with field <code>double basePrice;</code>.",
        "Implement <code>public double calculateFinalPrice(double discountPercentage)</code>:<br>• Formula: <code>double discountAmount = basePrice * (discountPercentage / 100.0); return basePrice - discountAmount;</code>",
        "In <code>main</code>, instantiate <code>ProductSale sale = new ProductSale();</code>.",
        "Assign <code>sale.basePrice = 1200000.0;</code>.",
        "Call method and print output: <code>double finalPrice = sale.calculateFinalPrice(15.0);</code><br><code>System.out.println(\"Asl narx: \" + sale.basePrice + \" | Chegirmali narx: \" + finalPrice);</code>"
      ]
    }
  },
  13: {
    story: {
      uz: "Aqlli uy termostati xona haroratini xavfsiz chegaralarda (16°C dan 32°C gacha) saqlashi shart. Haroratni ko'tarish yoki tushirishda chegaraviy qoidalar (Guard Clauses) qo'llaniladi.",
      en: "Smart home thermostat must keep ambient temperature strictly within safe bounds (16°C to 32°C). Guard clauses prevent out-of-range temperatures."
    },
    steps: {
      uz: [
        "<code>Thermostat</code> klassini tuzing: <code>double currentTemp;</code> maydonini e'lon qiling.",
        "<code>public void increaseTemp(double delta)</code> metodini yozing: agar <code>currentTemp + delta <= 32.0</code> bo'lsa <code>currentTemp += delta;</code>, aks holda <code>currentTemp = 32.0;</code>.",
        "<code>public void decreaseTemp(double delta)</code> metodini yozing: agar <code>currentTemp - delta >= 16.0</code> bo'lsa <code>currentTemp -= delta;</code>, aks holda <code>currentTemp = 16.0;</code>.",
        "<code>Main</code> metodida <code>Thermostat t = new Thermostat();</code> tuzib, <code>t.currentTemp = 22.0;</code> bering.",
        "Metodlarni chaqiring va natijalarni chop eting:<br><code>t.increaseTemp(15.0);</code> -> <code>System.out.println(\"Ko'tarilgandagi harorat: \" + t.currentTemp + \"°C\");</code><br><code>t.decreaseTemp(20.0);</code> -> <code>System.out.println(\"Tushirilgandagi harorat: \" + t.currentTemp + \"°C\");</code>"
      ],
      en: [
        "Create class <code>Thermostat</code> with field <code>double currentTemp;</code>.",
        "Implement <code>public void increaseTemp(double delta)</code>: cap at 32.0°C maximum.",
        "Implement <code>public void decreaseTemp(double delta)</code>: floor at 16.0°C minimum.",
        "In <code>main</code>, instantiate <code>Thermostat t = new Thermostat();</code> and set <code>t.currentTemp = 22.0;</code>.",
        "Invoke methods and print temperatures:<br><code>t.increaseTemp(15.0);</code> -> <code>System.out.println(\"Ko'tarilgandagi harorat: \" + t.currentTemp + \"°C\");</code><br><code>t.decreaseTemp(20.0);</code> -> <code>System.out.println(\"Tushirilgandagi harorat: \" + t.currentTemp + \"°C\");</code>"
      ]
    }
  },
  14: {
    story: {
      uz: "Yandex Go servisida safar narxi masofa, boshlang'ich narx va tig'iz vaqtdagi tirbandlik koeffitsientiga (surge) bog'liq holda ko'p parametrli hisoblash metodi orqali aniqlanadi.",
      en: "In Yandex Go, ride fares are dynamically computed based on base fare, distance, and peak-hour traffic surge multiplier."
    },
    steps: {
      uz: [
        "<code>RideService</code> klassini yarating va unga <code>double baseFare;</code> maydonini qo'shing.",
        "<code>public double estimateFare(double km, double surgeMultiplier)</code> metodini yozing:<br>• Formulalar: <code>return baseFare + (km * 2500.0 * surgeMultiplier);</code>",
        "<code>Main</code> metodida <code>RideService service = new RideService();</code> tuzib, <code>service.baseFare = 5000.0;</code> bering.",
        "Oddiy (1.0x) va tirbandlik (1.8x) tariflarini hisoblang: <code>double normalFare = service.estimateFare(10.0, 1.0);</code> va <code>double peakFare = service.estimateFare(10.0, 1.8);</code>.",
        "Ikkala narxni chop eting:<br><code>System.out.println(\"Oddiy tarif: \" + normalFare + \" so'm\");</code><br><code>System.out.println(\"Tirbandlik tarifi (1.8x): \" + peakFare + \" so'm\");</code>"
      ],
      en: [
        "Declare class <code>RideService</code> with field <code>double baseFare;</code>.",
        "Implement <code>public double estimateFare(double km, double surgeMultiplier)</code>:<br>• Formula: <code>return baseFare + (km * 2500.0 * surgeMultiplier);</code>",
        "In <code>main</code>, instantiate <code>RideService service = new RideService();</code> and set <code>service.baseFare = 5000.0;</code>.",
        "Calculate normal fare (10.0 km, 1.0x) and peak fare (10.0 km, 1.8x).",
        "Print both results:<br><code>System.out.println(\"Oddiy tarif: \" + normalFare + \" so'm\");</code><br><code>System.out.println(\"Tirbandlik tarifi (1.8x): \" + peakFare + \" so'm\");</code>"
      ]
    }
  },
  15: {
    story: {
      uz: "WIUT universiteti baholash tizimida modul natijasi Coursework (40%) va Yakuniy Imtihon (60%) ballaridan jamlanadi. Talaba jami 40.0 balldan kam olmasa moduldan o'tgan hisoblanadi.",
      en: "In the WIUT grading system, overall module mark combines Coursework (40%) and Exam (60%). A student passes if the weighted overall score is at least 40.0."
    },
    steps: {
      uz: [
        "<code>GradeBook</code> klassini tuzing: <code>double courseworkMark;</code> va <code>double examMark;</code> maydonlarini e'lon qiling.",
        "<code>public double getOverallScore()</code> metodini yozing: <code>return courseworkMark * 0.4 + examMark * 0.6;</code>.",
        "<code>public boolean isPassed()</code> metodini yozing: <code>return getOverallScore() >= 40.0;</code>.",
        "<code>Main</code> metodida <code>GradeBook gb = new GradeBook();</code> yarating va qiymat bering: <code>gb.courseworkMark = 73.0;</code>, <code>gb.examMark = 66.6;</code>.",
        "Natijani chop eting: <code>System.out.println(\"Yakuniy ball: \" + gb.getOverallScore() + \" | Moduldan o'tdi: \" + gb.isPassed());</code>"
      ],
      en: [
        "Declare class <code>GradeBook</code> with fields <code>double courseworkMark;</code> and <code>double examMark;</code>.",
        "Implement <code>public double getOverallScore()</code>: returns <code>courseworkMark * 0.4 + examMark * 0.6;</code>.",
        "Implement <code>public boolean isPassed()</code>: returns <code>getOverallScore() >= 40.0;</code>.",
        "In <code>main</code>, instantiate <code>GradeBook gb = new GradeBook();</code> with <code>73.0</code> and <code>66.6</code>.",
        "Print overall score and pass status: <code>System.out.println(\"Yakuniy ball: \" + gb.getOverallScore() + \" | Moduldan o'tdi: \" + gb.isPassed());</code>"
      ]
    }
  },
  16: {
    story: {
      uz: "Korzinka supermarketining sodiqlik dasturida xaridor yig'gan ballariga qarab avtomatik daraja (Tier) oladi: 1000 dan oshsa 'GOLD', 500 dan oshsa 'SILVER', aks holda 'STANDARD'.",
      en: "In Korzinka Plus loyalty system, customer tier dynamically updates with accumulated points: 1000+ points unlocks 'GOLD', 500+ unlocks 'SILVER', otherwise 'STANDARD'."
    },
    steps: {
      uz: [
        "<code>LoyaltyCard</code> klassini tuzing: <code>int points;</code> va <code>String tier;</code> maydonlarini e'lon qiling.",
        "<code>public void addPoints(int earned)</code> metodini yozing: ball qo'shing va shartlar bo'yicha tier holatini yangilang (>=1000: 'GOLD', >=500: 'SILVER', aks holda: 'STANDARD').",
        "<code>Main</code> metodida <code>LoyaltyCard card = new LoyaltyCard();</code> tuzib, <code>points = 0; tier = \"STANDARD\";</code> qiling.",
        "Dastlab 600 ball qo'shing: <code>card.addPoints(600);</code> va <code>System.out.println(\"Ball: \" + card.points + \" | Status: \" + card.tier);</code> deb chop eting.",
        "Yana 500 ball qo'shing: <code>card.addPoints(500);</code> va <code>System.out.println(\"Ball: \" + card.points + \" | Status: \" + card.tier);</code> deb chop eting."
      ],
      en: [
        "Declare class <code>LoyaltyCard</code> with <code>int points;</code> and <code>String tier;</code>.",
        "Implement <code>public void addPoints(int earned)</code>: increment points and evaluate tier state (>=1000: 'GOLD', >=500: 'SILVER', else: 'STANDARD').",
        "In <code>main</code>, instantiate <code>LoyaltyCard card = new LoyaltyCard();</code> with <code>points = 0; tier = \"STANDARD\";</code>.",
        "Add 600 points: <code>card.addPoints(600);</code> and print: <code>System.out.println(\"Ball: \" + card.points + \" | Status: \" + card.tier);</code>.",
        "Add another 500 points: <code>card.addPoints(500);</code> and print: <code>System.out.println(\"Ball: \" + card.points + \" | Status: \" + card.tier);</code>."
      ]
    }
  },
  17: {
    story: {
      uz: "Toshkent-Samarqand logistika yo'nalishida yuk mashinasining ruxsat etilgan maksimal vazni nazorat qilinadi. Yangi yuk mashina sig'imidan oshib ketmasligi tekshirilib, natijasi boolean (true/false) qaytariladi.",
      en: "Freight logistics truck enforces maximum cargo weight capacity. Adding cargo checks whether it fits within bounds and returns a boolean success status."
    },
    steps: {
      uz: [
        "<code>CargoTruck</code> klassini tuzing: <code>double maxCapacityKg;</code> va <code>double currentLoadKg;</code> maydonlarini qo'shing.",
        "<code>public boolean loadCargo(double weightKg)</code> metodini yozing: agar <code>currentLoadKg + weightKg <= maxCapacityKg</code> bo'lsa yukni qo'shib <code>return true;</code>, aks holda <code>return false;</code> qaytarsin.",
        "<code>Main</code> metodida <code>CargoTruck truck = new CargoTruck();</code> tuzib, <code>truck.maxCapacityKg = 1000.0; truck.currentLoadKg = 700.0;</code> bering.",
        "200 kg yuk orting va natijani chop eting: <code>boolean res1 = truck.loadCargo(200.0);</code><br><code>System.out.println(\"200 kg yuklandi: \" + res1 + \" (Jami: \" + truck.currentLoadKg + \" kg)\");</code>",
        "Yana bir bor 200 kg yuk ortishga urinib ko'ring (sig'maydi) va natijani chop eting: <code>boolean res2 = truck.loadCargo(200.0);</code><br><code>System.out.println(\"Ikkinchi 200 kg yuklandi: \" + res2 + \" (Jami: \" + truck.currentLoadKg + \" kg)\");</code>"
      ],
      en: [
        "Create class <code>CargoTruck</code> with fields <code>double maxCapacityKg;</code> and <code>double currentLoadKg;</code>.",
        "Implement <code>public boolean loadCargo(double weightKg)</code>: if it fits, update current load and return true; otherwise return false.",
        "In <code>main</code>, instantiate <code>CargoTruck truck = new CargoTruck();</code> with 1000.0 max capacity and 700.0 current load.",
        "Load 200 kg and print: <code>System.out.println(\"200 kg yuklandi: \" + res1 + \" (Jami: \" + truck.currentLoadKg + \" kg)\");</code>.",
        "Try loading another 200 kg (fails) and print: <code>System.out.println(\"Ikkinchi 200 kg yuklandi: \" + res2 + \" (Jami: \" + truck.currentLoadKg + \" kg)\");</code>."
      ]
    }
  },
  18: {
    story: {
      uz: "Bank kredit bo'limida oddiy mijozlarga standart yillik 20% stavka qo'llanilsa, korporativ mijozlarga maxsus chegirmali stavka hisoblanadi. Buning uchun bir xil nomli, ammo har xil parametrli metodlar (Method Overloading) tuziladi.",
      en: "A banking loan calculator offers standard 20% annual interest or custom corporate rates using Method Overloading on calculateInterest()."
    },
    steps: {
      uz: [
        "<code>LoanCalculator</code> klassini tuzing: <code>double principal;</code> maydonini e'lon qiling.",
        "Standart 20% stavkali metodni yozing: <code>public double calculateInterest(int months) { return principal * 0.20 * (months / 12.0); }</code>.",
        "Maxsus stavkali nomdosh metodni overload qiling: <code>public double calculateInterest(int months, double annualRate) { return principal * (annualRate / 100.0) * (months / 12.0); }</code>.",
        "<code>Main</code> metodida <code>LoanCalculator calc = new LoanCalculator();</code> yarating va <code>calc.principal = 12000000.0;</code> bering.",
        "Har ikkala metodni chaqirib 2 qatorda chop eting:<br><code>System.out.println(\"Standart foiz (6 oy): \" + calc.calculateInterest(6) + \" so'm\");</code><br><code>System.out.println(\"Imtiyozli foiz (6 oy, 14%): \" + calc.calculateInterest(6, 14.0) + \" so'm\");</code>"
      ],
      en: [
        "Create class <code>LoanCalculator</code> with field <code>double principal;</code>.",
        "Implement standard method: <code>public double calculateInterest(int months) { return principal * 0.20 * (months / 12.0); }</code>.",
        "Overload method with custom rate: <code>public double calculateInterest(int months, double annualRate) { return principal * (annualRate / 100.0) * (months / 12.0); }</code>.",
        "In <code>main</code>, instantiate <code>LoanCalculator calc = new LoanCalculator();</code> and set <code>calc.principal = 12000000.0;</code>.",
        "Print both interest calculations on 2 lines:<br><code>System.out.println(\"Standart foiz (6 oy): \" + calc.calculateInterest(6) + \" so'm\");</code><br><code>System.out.println(\"Imtiyozli foiz (6 oy, 14%): \" + calc.calculateInterest(6, 14.0) + \" so'm\");</code>"
      ]
    }
  },
  19: {
    story: {
      uz: "Xavfsizlik tizimida foydalanuvchi tizimga kirgan vaqt (sessiya) ma'lum vaqt o'tgach eskirgan (timeout) deb topilishi va yangitdan kirish talab etilishi shart.",
      en: "Security gateway validates user session expiration against a timeout threshold in milliseconds to prevent stale token reuse."
    },
    steps: {
      uz: [
        "<code>UserSession</code> klassini e'lon qiling: <code>String sessionId;</code> va <code>long createdAtMs;</code> maydonlarini qo'shing.",
        "<code>public boolean isExpired(long currentTimeMs, long timeoutDurationMs)</code> metodini yozing: agar <code>(currentTimeMs - createdAtMs) > timeoutDurationMs</code> bo'lsa <code>true</code>, aks holda <code>false</code> qaytarsin.",
        "<code>Main</code> metodida <code>UserSession session = new UserSession();</code> yarating va <code>sessionId = \"SESS-9901\"; createdAtMs = 1000L;</code> bering.",
        "1500ms vaqtda tekshiring (timeout = 1000ms): <code>boolean expired1 = session.isExpired(1500L, 1000L);</code> va <code>System.out.println(\"1500-millisekundda eskirganmi: \" + expired1);</code> chop eting.",
        "2500ms vaqtda tekshiring: <code>boolean expired2 = session.isExpired(2500L, 1000L);</code> va <code>System.out.println(\"2500-millisekundda eskirganmi: \" + expired2);</code> chop eting."
      ],
      en: [
        "Declare class <code>UserSession</code> with <code>String sessionId;</code> and <code>long createdAtMs;</code>.",
        "Implement <code>public boolean isExpired(long currentTimeMs, long timeoutDurationMs)</code> returning true when elapsed time exceeds timeout.",
        "In <code>main</code>, instantiate <code>UserSession session = new UserSession();</code> with 1000L timestamp.",
        "Check at 1500ms and print: <code>System.out.println(\"1500-millisekundda eskirganmi: \" + expired1);</code>.",
        "Check at 2500ms and print: <code>System.out.println(\"2500-millisekundda eskirganmi: \" + expired2);</code>."
      ]
    }
  },
  20: {
    story: {
      uz: "Express Cafe tarmog'ida kassada mijozga taom nomi, narxi, oraliq summasi, 12% soliq va jami summani chiroyli kvitansiya (String) ko'rinishida generatsiya qiluvchi metod kerak.",
      en: "Express Cafe restaurant checkout generates a formatted multi-line receipt string combining item subtotal, sales tax, and final amount."
    },
    steps: {
      uz: [
        "<code>FoodOrder</code> klassini tuzing: <code>String itemName;</code>, <code>double unitPrice;</code>, <code>int quantity;</code> maydonlarini e'lon qiling.",
        "<code>public String generateReceipt(double taxRate)</code> metodini yozing: <code>subtotal = unitPrice * quantity;</code>, <code>tax = subtotal * (taxRate / 100.0);</code>, <code>total = subtotal + tax;</code> hisoblab, ko'p qatorli chek matnini qaytaring.",
        "<code>Main</code> metodida <code>FoodOrder order = new FoodOrder();</code> ob'yektini yarating.",
        "Maydonlariga qiymat yuklang: <code>order.itemName = \"Lavash Max\"; order.unitPrice = 38000.0; order.quantity = 2;</code>.",
        "Metodni 12.0% stavka bilan chaqiring va chekni chop eting: <code>String receipt = order.generateReceipt(12.0); System.out.println(receipt);</code>"
      ],
      en: [
        "Declare class <code>FoodOrder</code> with <code>String itemName;</code>, <code>double unitPrice;</code>, and <code>int quantity;</code>.",
        "Implement <code>public String generateReceipt(double taxRate)</code> computing subtotal, tax, and total, returning the receipt text.",
        "In <code>main</code>, instantiate <code>FoodOrder order = new FoodOrder();</code>.",
        "Assign: <code>order.itemName = \"Lavash Max\"; order.unitPrice = 38000.0; order.quantity = 2;</code>.",
        "Call <code>order.generateReceipt(12.0);</code> and print the output."
      ]
    }
  },
  21: {
    story: {
      uz: "Kutubxona elektron katalogida yangi kitob kiritilayotganda uning nomi, muallifi va sahifalar soni majburiy bo'lib, ular parametrlangan konstruktor orqali 'this' yordamida o'zlashtiriladi.",
      en: "In a library catalog system, adding a book mandates title, author, and page count during instantiation using a parameterized constructor with the 'this' keyword."
    },
    steps: {
      uz: [
        "<code>Book</code> klassini tuzing: <code>String title;</code>, <code>String author;</code>, <code>int pages;</code> maydonlarini e'lon qiling.",
        "<code>public Book(String title, String author, int pages)</code> konstruktorini yozing va <code>this.title = title; this.author = author; this.pages = pages;</code> qilib to'ldiring.",
        "<code>Main</code> metodida konstruktor orqali ob'yekt yarating: <code>Book b = new Book(\"O'tkan Kunlar\", \"Abdulla Qodiriy\", 420);</code>.",
        "Maydonlar to'g'ri biriktirilganini tekshiring.",
        "Kitob ma'lumotlarini chop eting: <code>System.out.println(\"Kitob: \" + b.title + \" | Muallif: \" + b.author + \" | Sahifa: \" + b.pages);</code>"
      ],
      en: [
        "Declare class <code>Book</code> with <code>String title;</code>, <code>String author;</code>, and <code>int pages;</code>.",
        "Implement <code>public Book(String title, String author, int pages)</code> assigning fields via <code>this</code>.",
        "In <code>main</code>, instantiate: <code>Book b = new Book(\"O'tkan Kunlar\", \"Abdulla Qodiriy\", 420);</code>.",
        "Verify all field assignments.",
        "Print book details: <code>System.out.println(\"Kitob: \" + b.title + \" | Muallif: \" + b.author + \" | Sahifa: \" + b.pages);</code>"
      ]
    }
  },
  22: {
    story: {
      uz: "Foydalanuvchi akkaunti yaratilayotganda roli kiritilmasa avtomatik 'USER' bo'lishi, maxsus kiritilsa o'sha rol berilishi uchun konstruktorni nomdosh qilish (Constructor Overloading) qo'llaniladi.",
      en: "User registration defaults role to 'USER' unless explicitly specified, implemented via Constructor Overloading."
    },
    steps: {
      uz: [
        "<code>User</code> klassini tuzing: <code>String username;</code>, <code>String email;</code>, <code>String role;</code>.",
        "2 parametrli konstruktor yozing: <code>public User(String username, String email)</code> va <code>role = \"USER\";</code> qilib o'rnating.",
        "3 parametrli konstruktorni overload qiling: <code>public User(String username, String email, String role)</code>.",
        "<code>Main</code> metodida ikkita ob'yekt yarating: <code>User u1 = new User(\"nodirbek\", \"nodir@wiut.uz\");</code> va <code>User u2 = new User(\"admin_ada\", \"ada@wiut.uz\", \"ADMIN\");</code>.",
        "Har ikkala foydalanuvchini chop eting:<br><code>System.out.println(\"Foydalanuvchi 1: \" + u1.username + \" (\" + u1.role + \")\");</code><br><code>System.out.println(\"Foydalanuvchi 2: \" + u2.username + \" (\" + u2.role + \")\");</code>"
      ],
      en: [
        "Declare class <code>User</code> with fields <code>username</code>, <code>email</code>, and <code>role</code>.",
        "Implement 2-arg constructor defaulting role to 'USER'.",
        "Implement 3-arg constructor setting custom role.",
        "In <code>main</code>, instantiate <code>u1</code> (2-arg) and <code>u2</code> (3-arg).",
        "Print both users on 2 lines."
      ]
    }
  },
  23: {
    story: {
      uz: "Bank kartasi ochilganda balans sukut bo'yicha 0.0 UZS bilan boshlanadi. Kodni takrorlamaslik (DRY) uchun bir konstruktordan ikkinchisiga 'this()' zanjiri (Chaining) orqali murojaat qilinadi.",
      en: "A debit card defaults to 0.0 UZS balance. To avoid duplicating initialization code, invoke the master constructor using constructor chaining ('this()')."
    },
    steps: {
      uz: [
        "<code>DebitCard</code> klassini tuzing: <code>String cardNumber;</code>, <code>String ownerName;</code>, <code>double balance;</code>, <code>String currency;</code>.",
        "4 parametrli to'liq konstruktorni e'lon qiling va maydonlarga qiymat bering.",
        "2 parametrli konstruktorni tuzib, 'this()' zanjirini chaqiring: <code>public DebitCard(String cardNumber, String ownerName) { this(cardNumber, ownerName, 0.0, \"UZS\"); }</code>.",
        "<code>Main</code> metodida 2 parametrli konstruktor orqali karta oching: <code>DebitCard card = new DebitCard(\"8600123456789012\", \"Kamron Bek\");</code>.",
        "Karta ma'lumotlarini chop eting: <code>System.out.println(\"Karta: \" + card.cardNumber + \" | Egasi: \" + card.ownerName + \" | Balans: \" + card.balance + \" \" + card.currency);</code>"
      ],
      en: [
        "Create class <code>DebitCard</code> with fields for number, owner, balance, currency.",
        "Implement 4-parameter master constructor.",
        "Implement 2-parameter constructor delegating via <code>this(cardNumber, ownerName, 0.0, \"UZS\");</code>.",
        "In <code>main</code>, instantiate: <code>DebitCard card = new DebitCard(\"8600123456789012\", \"Kamron Bek\");</code>.",
        "Print card details matching expected output."
      ]
    }
  },
  24: {
    story: {
      uz: "Elektronika do'koni inventarida nomsiz standart smartfonlar (Generic, 64GB, $150.0) va aniq parametrli modellar uchun ham bo'sh (no-arg), ham parametrli konstruktorlar talab qilinadi.",
      en: "An electronics inventory manages generic entry-level phones via a default no-argument constructor and flagship devices via a parameterized constructor."
    },
    steps: {
      uz: [
        "<code>Smartphone</code> klassini yarating: <code>String brand;</code>, <code>int storageGb;</code>, <code>double price;</code>.",
        "Bo'sh no-arg konstruktorni yozing: <code>this.brand = \"Generic\"; this.storageGb = 64; this.price = 150.0;</code>.",
        "Parametrli konstruktorni yozing: <code>public Smartphone(String brand, int storageGb, double price)</code>.",
        "<code>Main</code> metodida ikkita smartfon yarating: <code>Smartphone phone1 = new Smartphone();</code> va <code>Smartphone phone2 = new Smartphone(\"Samsung Galaxy S24\", 256, 950.0);</code>.",
        "Har ikkala modelni 2 qatorda chop eting:<br><code>System.out.println(\"Model 1: \" + phone1.brand + \" (\" + phone1.storageGb + \"GB) - $\" + phone1.price);</code><br><code>System.out.println(\"Model 2: \" + phone2.brand + \" (\" + phone2.storageGb + \"GB) - $\" + phone2.price);</code>"
      ],
      en: [
        "Declare class <code>Smartphone</code> with brand, storage, price.",
        "Implement no-arg constructor setting Generic, 64GB, 150.0.",
        "Implement parameterized constructor.",
        "Instantiate <code>phone1</code> (no-arg) and <code>phone2</code> (parameterized).",
        "Print both devices on 2 lines."
      ]
    }
  },
  25: {
    story: {
      uz: "Universitet kursining talabalar sig'imi hech qachon 0 yoki manfiy bo'lishi mumkin emas. Noto'g'ri kiritilgan qiymat konstruktor ichidagi himoya sharti orqali darhol 30 ga to'g'rilanadi.",
      en: "University course capacity must never be zero or negative. A constructor guard clause automatically clamps invalid values to 30."
    },
    steps: {
      uz: [
        "<code>Course</code> klassini tuzing: <code>String courseCode;</code> va <code>int maxStudents;</code> maydonlarini e'lon qiling.",
        "<code>public Course(String courseCode, int maxStudents)</code> konstruktorida tekshiring: agar <code>maxStudents > 0</code> bo'lsa o'rnating, aks holda standart 30 qilib belgilang.",
        "<code>Main</code> metodida to'g'ri sig'imli <code>Course c1 = new Course(\"5COSC018C\", 45);</code> va manfiy sig'imli <code>Course c2 = new Course(\"5BUIS009C\", -10);</code> yarating.",
        "Himoyaviy shart ishlab ikkinchi kurs sig'imi 30 ga to'g'rilanganligini tekshiring.",
        "Kurslar ma'lumotlarini 2 qatorda chop eting:<br><code>System.out.println(\"Kurs: \" + c1.courseCode + \" | Sig'im: \" + c1.maxStudents);</code><br><code>System.out.println(\"Kurs: \" + c2.courseCode + \" | Sig'im (tuzatilgan): \" + c2.maxStudents);</code>"
      ],
      en: [
        "Create class <code>Course</code> with <code>courseCode</code> and <code>maxStudents</code>.",
        "Implement constructor enforcing <code>maxStudents = (maxStudents > 0) ? maxStudents : 30;</code>.",
        "In <code>main</code>, instantiate <code>c1</code> (45) and <code>c2</code> (-10).",
        "Verify second course capacity clamped to 30.",
        "Print course details on 2 lines."
      ]
    }
  },
  26: {
    story: {
      uz: "Aviachipta sotuvida chipta narxi manfiy kiritilmasligi va $300 dan yuqori narxdagi chiptalar avtomatik ravishda puli qaytariladigan (refundable) maqomiga ega bo'lishi konstruktorda kafolatlanadi.",
      en: "Airline ticketing enforces non-negative pricing and automatically upgrades tickets over $300 to refundable status inside the constructor."
    },
    steps: {
      uz: [
        "<code>FlightTicket</code> klassini yarating: <code>String flightNum;</code>, <code>double price;</code>, <code>boolean isRefundable;</code>.",
        "Konstruktorda tekshiring: narx manfiy bo'lsa <code>0.0</code> qiling; agar <code>price > 300.0</code> bo'lsa <code>isRefundable = true;</code> deb belgilang.",
        "<code>Main</code> metodida ikkita chipta yarating: <code>FlightTicket t1 = new FlightTicket(\"HY-201\", 320.0, false);</code> va <code>FlightTicket t2 = new FlightTicket(\"HY-55\", 50.0, false);</code>.",
        "Birinchi chiptaning $300 dan yuqori bo'lgani sababli 'isRefundable' qiymati true bo'lganini tekshiring.",
        "Ikkala chiptani 2 qatorda chop eting:<br><code>System.out.println(\"Chipta 1 narxi: $\" + t1.price + \" | Qaytariladimi: \" + t1.isRefundable);</code><br><code>System.out.println(\"Chipta 2 narxi: $\" + t2.price + \" | Qaytariladimi: \" + t2.isRefundable);</code>"
      ],
      en: [
        "Declare class <code>FlightTicket</code> with <code>flightNum</code>, <code>price</code>, <code>isRefundable</code>.",
        "Constructor clamps price >= 0 and overrides <code>isRefundable = true</code> if price > 300.0.",
        "In <code>main</code>, instantiate <code>t1</code> ($320, false) and <code>t2</code> ($50, false).",
        "Verify refund upgrade.",
        "Print tickets on 2 lines."
      ]
    }
  },
  27: {
    story: {
      uz: "Mehnat shartnomasida qonuniy minimal oylik kafolati (kamida 2,000,000 so'm) mavjud. Konstruktor belgilangan maoshni kafolatlangan miqdordan kam bo'lmasligini ta'minlaydi.",
      en: "An HR employment contract enforces a statutory minimum wage baseline (2,000,000 UZS) inside its constructor."
    },
    steps: {
      uz: [
        "<code>EmploymentContract</code> klassini tuzing: <code>String employeeName;</code>, <code>String department;</code>, <code>double baseSalary;</code>.",
        "Konstruktorda tekshiring: agar <code>baseSalary >= 2000000.0</code> bo'lsa qabul qiling, aks holda minimal kafolat <code>2000000.0</code> o'rnating.",
        "<code>Main</code> metodida <code>EmploymentContract contract = new EmploymentContract(\"Sardor Qodirov\", \"IT Qo'llab-quvvatlash\", 1500000.0);</code> yarating.",
        "Kafolatlangan oylik 2,000,000 so'mga ko'tarilganligini tekshiring.",
        "Shartnoma ma'lumotlarini 2 qatorda chop eting:<br><code>System.out.println(\"Xodim: \" + contract.employeeName + \" | Bo'lim: \" + contract.department);</code><br><code>System.out.println(\"Kafolatlangan oylik: \" + contract.baseSalary + \" so'm\");</code>"
      ],
      en: [
        "Create class <code>EmploymentContract</code> with employeeName, department, baseSalary.",
        "Constructor enforces minimum salary: <code>baseSalary = Math.max(baseSalary, 2000000.0);</code>.",
        "In <code>main</code>, instantiate with 1500000.0.",
        "Verify wage is upgraded to 2000000.0.",
        "Print contract summary on 2 lines."
      ]
    }
  },
  28: {
    story: {
      uz: "Bulutli SaaS platformada tarif rejalari 3 xil: Starter ($10, 1 user), Team ($45, 10 users) va Enterprise ($199, 100 users). Ular konstruktorlar zanjiri (Chaining) orqali birlashtiriladi.",
      en: "A cloud SaaS billing tier models Starter, Team, and Enterprise packages using multi-stage constructor chaining."
    },
    steps: {
      uz: [
        "<code>Subscription</code> klassini tuzing: <code>String planName;</code>, <code>double monthlyPrice;</code>, <code>int maxUsers;</code>, <code>boolean autoRenew;</code>.",
        "4 parametrli to'liq konstruktorni e'lon qiling va maydonlarga qiymat bering.",
        "3 parametrli konstruktorni <code>this(planName, monthlyPrice, maxUsers, true);</code>, 1 parametrli konstruktorni esa <code>this(planName, 10.0, 1, true);</code> zanjiri bilan e'lon qiling.",
        "<code>Main</code> metodida 3 xil ob'yekt yarating: <code>Subscription s1 = new Subscription(\"Starter\");</code>, <code>Subscription s2 = new Subscription(\"Team\", 45.0, 10);</code>, <code>Subscription s3 = new Subscription(\"Enterprise\", 199.0, 100, false);</code>.",
        "Barcha tariflarni 3 qatorda chop eting:<br><code>System.out.println(\"Plan: \" + s1.planName + \" ($\" + s1.monthlyPrice + \", \" + s1.maxUsers + \" user, auto: \" + s1.autoRenew + \")\");</code><br><code>System.out.println(\"Plan: \" + s2.planName + \" ($\" + s2.monthlyPrice + \", \" + s2.maxUsers + \" users, auto: \" + s2.autoRenew + \")\");</code><br><code>System.out.println(\"Plan: \" + s3.planName + \" ($\" + s3.monthlyPrice + \", \" + s3.maxUsers + \" users, auto: \" + s3.autoRenew + \")\");</code>"
      ],
      en: [
        "Declare class <code>Subscription</code> with planName, monthlyPrice, maxUsers, autoRenew.",
        "Implement 4-arg master constructor.",
        "Implement 3-arg and 1-arg constructors chaining with <code>this()</code>.",
        "In <code>main</code>, instantiate all 3 subscriptions.",
        "Print all 3 plans on 3 lines."
      ]
    }
  },
  29: {
    story: {
      uz: "GPS navigatsiya tizimida koordinatalar qat'iy chegaraga ega: kenglik [-90.0; 90.0], uzunlik esa [-180.0; 180.0]. Chegaradan chiqqan nuqtalar konstruktorda 0.0 ga keltiriladi.",
      en: "A GPS telemetry system validates coordinates within latitude [-90.0, 90.0] and longitude [-180.0, 180.0], clamping out-of-bound coordinates to 0.0."
    },
    steps: {
      uz: [
        "<code>GeoPoint</code> klassini e'lon qiling: <code>double latitude;</code> va <code>double longitude;</code> maydonlarini qo'shing.",
        "Konstruktorda kenglik va uzunlik chegaralarini tekshiring: oraliqdan tashqaridagi har qanday qiymatni <code>0.0</code> qilib belgilang.",
        "<code>Main</code> metodida to'g'ri <code>GeoPoint toshkent = new GeoPoint(41.2995, 69.2401);</code> va noto'g'ri <code>GeoPoint xatoNuqta = new GeoPoint(120.5, 200.0);</code> yarating.",
        "Xato kiritilgan koordinatalar avtomatik 0.0 ga to'g'rilanganini tekshiring.",
        "Ikkala nuqtani 2 qatorda chop eting:<br><code>System.out.println(\"Toshkent: lat=\" + toshkent.latitude + \", lon=\" + toshkent.longitude);</code><br><code>System.out.println(\"Xato nuqta (tuzatilgan): lat=\" + xatoNuqta.latitude + \", lon=\" + xatoNuqta.longitude);</code>"
      ],
      en: [
        "Create class <code>GeoPoint</code> with latitude and longitude.",
        "Constructor clamps values outside [-90.0, 90.0] and [-180.0, 180.0] to 0.0.",
        "In <code>main</code>, instantiate Tashkent and invalid coordinate points.",
        "Verify invalid point is clamped to (0.0, 0.0).",
        "Print both points on 2 lines."
      ]
    }
  },
  30: {
    story: {
      uz: "Logistika omborida mavjud palletning nusxasini (klonini) yaratish uchun Copy Constructor mexanizmi talab etiladi. Yangi palletga asl identifikator oxiriga '-COPY' qo'shilgan kod beriladi.",
      en: "A warehouse logistics module creates a clone of an existing cargo pallet using a Copy Constructor, appending '-COPY' to the copied pallet ID."
    },
    steps: {
      uz: [
        "<code>Pallet</code> klassini tuzing: <code>String palletId;</code>, <code>double weightLimit;</code>, <code>int boxCount;</code> maydonlarini e'lon qiling.",
        "Standart 3 parametrli konstruktorni yozing: <code>public Pallet(String palletId, double weightLimit, int boxCount)</code>.",
        "Copy Constructor yarating: <code>public Pallet(Pallet other) { this.palletId = other.palletId + \"-COPY\"; this.weightLimit = other.weightLimit; this.boxCount = other.boxCount; }</code>.",
        "<code>Main</code> metodida asl palletni yarating: <code>Pallet p1 = new Pallet(\"PLT-100\", 500.0, 24);</code> va uning nusxasini oling: <code>Pallet p2 = new Pallet(p1);</code>.",
        "Asl va nusxa palletlarni 2 qatorda chop eting:<br><code>System.out.println(\"Asl: \" + p1.palletId + \" | Qutilar: \" + p1.boxCount);</code><br><code>System.out.println(\"Nusxa: \" + p2.palletId + \" | Qutilar: \" + p2.boxCount);</code>"
      ],
      en: [
        "Declare class <code>Pallet</code> with palletId, weightLimit, boxCount.",
        "Implement standard 3-arg constructor.",
        "Implement Copy Constructor: <code>public Pallet(Pallet other)</code> appending '-COPY'.",
        "In <code>main</code>, instantiate <code>p1</code> and clone <code>p2 = new Pallet(p1);</code>.",
        "Print original and copied pallet records."
      ]
    }
  },
  31: {
    story: {
      uz: "Foydalanuvchi profilidagi shaxsiy ma'lumotlar tashqaridan bevosita o'zgartirilmasligi uchun 'private' modifikatori bilan himoyalanadi (inkapsulyatsiya) va faqat Getter metodlari orqali o'qiladi.",
      en: "A user profile safeguards sensitive account fields behind private access modifiers, providing read-only access via public getter methods."
    },
    steps: {
      uz: [
        "<code>UserProfile</code> klassini e'lon qiling: <code>private String username;</code> va <code>private String email;</code> maydonlarini qo'shing.",
        "Parametrli konstruktor yozing: <code>public UserProfile(String username, String email)</code>.",
        "Getter metodlarini yozing: <code>public String getUsername() { return this.username; }</code> va <code>public String getEmail() { return this.email; }</code>.",
        "<code>Main</code> metodida <code>UserProfile profile = new UserProfile(\"sherzod_it\", \"sherzod@wiut.uz\");</code> ob'yektini yarating.",
        "Getterlar orqali ma'lumotlarni chop eting: <code>System.out.println(\"Foydalanuvchi: \" + profile.getUsername() + \" | Email: \" + profile.getEmail());</code>"
      ],
      en: [
        "Create class <code>UserProfile</code> with private fields <code>username</code> and <code>email</code>.",
        "Implement constructor.",
        "Implement public getters: <code>getUsername()</code> and <code>getEmail()</code>.",
        "In <code>main</code>, instantiate <code>UserProfile profile = new UserProfile(\"sherzod_it\", \"sherzod@wiut.uz\");</code>.",
        "Print details using getters."
      ]
    }
  },
  32: {
    story: {
      uz: "Bank hisob raqamida balans manfiy qiymatga tushib ketmasligi uchun hisob balansi 'private' qilinadi va qiymat o'zgartirish faqat himoyalangan Setter orqali nazorat qilinadi.",
      en: "A bank account protects its balance field with private access and guards against negative balance updates using an encapsulated setter."
    },
    steps: {
      uz: [
        "<code>BankAccount</code> klassini tuzing: <code>private double balance;</code> maydonini e'lon qiling.",
        "Konstruktorda boshlang'ich balansni tekshirib o'rnating: manfiy bo'lsa <code>0.0</code> qiling.",
        "<code>getBalance()</code> va <code>setBalance(double balance)</code> metodlarini yozing: agar yangi balans manfiy bo'lsa, <code>System.out.println(\"Xato: Balans manfiy bo'lishi mumkin emas!\");</code> xabarini chiqaring va balansni o'zgartirmang.",
        "<code>Main</code> metodida <code>BankAccount acc = new BankAccount(100000.0);</code> tuzing, 150000.0 qilib oshiring, so'ng -50000.0 qilishga urinib ko'ring (rad etiladi).",
        "Yakuniy balansni chop eting: <code>System.out.println(\"Yakuniy balans: \" + acc.getBalance() + \" so'm\");</code>"
      ],
      en: [
        "Declare class <code>BankAccount</code> with private field <code>balance</code>.",
        "Implement constructor setting initial balance.",
        "Implement <code>getBalance()</code> and <code>setBalance(double balance)</code> checking balance >= 0.",
        "In <code>main</code>, instantiate with 100000.0, set to 150000.0, attempt -50000.0.",
        "Print final balance: <code>System.out.println(\"Yakuniy balans: \" + acc.getBalance() + \" so'm\");</code>"
      ]
    }
  },
  33: {
    story: {
      uz: "Korporativ qoidalarga ko'ra xodimning oylik maoshini asossiz ravishda kamaytirish qat'iyan taqiqlanadi (State-Dependent Setter). Faqat oshirish yoki saqlab qolishga ruxsat etiladi.",
      en: "Corporate policy prohibits decreasing employee salaries. The encapsulated setter enforces state-dependent validation allowing only wage increases."
    },
    steps: {
      uz: [
        "<code>Employee</code> klassini tuzing: <code>private String name;</code> va <code>private double salary;</code> maydonlarini e'lon qiling.",
        "Konstruktor va Getter metodlarini yozing: <code>getName()</code>, <code>getSalary()</code>.",
        "<code>public void setSalary(double newSalary)</code> metodini yozing: agar <code>newSalary >= this.salary</code> bo'lsa qabul qiling, aks holda <code>System.out.println(\"Taqiqlangan: Oylikni kamaytirish mumkin emas!\");</code> deb chiqaring.",
        "<code>Main</code> metodida <code>Employee emp = new Employee(\"Azizbek\", 5000000.0);</code> tuzing, oylikni 6500000.0 ga oshiring, so'ng 4000000.0 ga tushirishga urinib ko'ring.",
        "Xodim ma'lumotlarini chop eting: <code>System.out.println(\"Xodim: \" + emp.getName() + \" | Oylik: \" + emp.getSalary() + \" so'm\");</code>"
      ],
      en: [
        "Create class <code>Employee</code> with private fields <code>name</code> and <code>salary</code>.",
        "Implement constructor and getters.",
        "Implement <code>setSalary(double newSalary)</code> permitting only <code>newSalary >= this.salary</code>.",
        "In <code>main</code>, instantiate with 5000000.0, set to 6500000.0, attempt 4000000.0.",
        "Print final employee details."
      ]
    }
  },
  34: {
    story: {
      uz: "Geometrik to'g'ri to'rtburchak klassida yuzani alohida maydonda saqlamasdan, uni talab bo'lganda eni va bo'yidan hisoblab beruvchi Read-Only hisoblanuvchi Getter (Computed Property) tavsiya etiladi.",
      en: "A geometric Rectangle calculates its area on the fly using a read-only computed getter, ensuring synchronized dimensions without redundant state."
    },
    steps: {
      uz: [
        "<code>Rectangle</code> klassini e'lon qiling: <code>private double width;</code> va <code>private double height;</code> maydonlarini qo'shing.",
        "Konstruktorda qiymatlarni tekshiring (kamida 1.0) va o'rnating.",
        "Oddiy getterlar <code>getWidth()</code>, <code>getHeight()</code> hamda hisoblanuvchi <code>public double getArea() { return this.width * this.height; }</code> metodini yozing.",
        "<code>Main</code> metodida <code>Rectangle rect = new Rectangle(5.0, 8.0);</code> ob'yektini yarating.",
        "O'lchamlari va yuzasini 2 qatorda chop eting:<br><code>System.out.println(\"Eni: \" + rect.getWidth() + \" | Bo'yi: \" + rect.getHeight());</code><br><code>System.out.println(\"Yuzasi: \" + rect.getArea());</code>"
      ],
      en: [
        "Declare class <code>Rectangle</code> with private fields <code>width</code> and <code>height</code>.",
        "Implement constructor enforcing min 1.0.",
        "Implement getters and computed property <code>getArea()</code> returning width * height.",
        "In <code>main</code>, instantiate <code>Rectangle(5.0, 8.0)</code>.",
        "Print dimensions and area on 2 lines."
      ]
    }
  },
  35: {
    story: {
      uz: "Supermarketda mahsulotning sof narxiga 12% QQS solig'i qo'shilgan narxini xaridordan alohida hisoblash uchun 'getPriceWithTax()' maxsus getteri xizmat qiladi.",
      en: "A supermarket inventory models net price and exposes a VAT-inclusive price through a computed getter adding 12% tax."
    },
    steps: {
      uz: [
        "<code>Product</code> klassini tuzing: <code>private double netPrice;</code> maydonini e'lon qiling.",
        "Konstruktor, <code>getNetPrice()</code> va manfiy bo'lmagan qiymatni tekshiruvchi <code>setNetPrice(double netPrice)</code> metodlarini yozing.",
        "<code>public double getPriceWithTax()</code> metodini yozing: <code>return this.netPrice * 1.12;</code> (12% QQS).",
        "<code>Main</code> metodida <code>Product p = new Product(100000.0);</code> yarating.",
        "Sof narx va QQS bilan narxni 2 qatorda chop eting:<br><code>System.out.println(\"Tansiq narx: \" + p.getNetPrice() + \" so'm\");</code><br><code>System.out.println(\"QQS bilan narx: \" + p.getPriceWithTax() + \" so'm\");</code>"
      ],
      en: [
        "Create class <code>Product</code> with private field <code>netPrice</code>.",
        "Implement constructor, <code>getNetPrice()</code>, and <code>setNetPrice()</code>.",
        "Implement computed getter <code>getPriceWithTax()</code> returning netPrice * 1.12.",
        "In <code>main</code>, instantiate with 100000.0.",
        "Print net price and tax-inclusive price on 2 lines."
      ]
    }
  },
  36: {
    story: {
      uz: "WIUT universitetida talaba ID raqami qat'iy qoidaga ega: u roppa-rosa 8 ta belgidan iborat bo'lishi va '000' prefiksi bilan boshlanishi shart. Setter orqali satr formati tekshiriladi.",
      en: "The WIUT Student Portal validates Student ID formatting via an encapsulated setter requiring an 8-character string prefixed with '000'."
    },
    steps: {
      uz: [
        "<code>Student</code> klassini tuzing: <code>private String studentId;</code> maydonini e'lon qiling.",
        "<code>public void setStudentId(String studentId)</code> metodini yozing: agar <code>studentId != null && studentId.length() == 8 && studentId.startsWith(\"000\")</code> bo'lsa qabul qiling, aks holda xato xabarini chiqaring va <code>this.studentId = \"00000000\";</code> deb belgilang.",
        "Konstruktorda <code>this.setStudentId(studentId);</code> chaqiring va <code>getStudentId()</code> metodini qo'shing.",
        "<code>Main</code> metodida ikkita talaba yarating: to'g'ri ID li <code>Student s1 = new Student(\"00014523\");</code> va noto'g'ri ID li <code>Student s2 = new Student(\"12345\");</code>.",
        "Ikkala talabaning yakuniy ID raqamlarini 2 qatorda chop eting:<br><code>System.out.println(\"Talaba 1 ID: \" + s1.getStudentId());</code><br><code>System.out.println(\"Talaba 2 ID: \" + s2.getStudentId());</code>"
      ],
      en: [
        "Declare class <code>Student</code> with private field <code>studentId</code>.",
        "Implement <code>setStudentId()</code> validating 8 characters and '000' prefix.",
        "Implement constructor delegating to setter and <code>getStudentId()</code>.",
        "In <code>main</code>, instantiate valid <code>s1</code> and invalid <code>s2</code>.",
        "Print both IDs on 2 lines."
      ]
    }
  },
  37: {
    story: {
      uz: "Moliyaviy fiskal cheklar generatsiya qilingandan so'ng ularning tranzaksiya kodi va summasi o'zgartirilmasligi (tamper-proof) uchun 'final' modifikatorli Immutable (o'zgarmas) klass yaratiladi.",
      en: "A fiscal financial receipt must remain tamper-proof after creation. Implement an immutable class using 'final' fields without setters."
    },
    steps: {
      uz: [
        "<code>Receipt</code> klassini tuzing: <code>private final String txnId;</code> va <code>private final double amount;</code> maydonlarini e'lon qiling.",
        "Konstruktorda ikkala maydonni to'ldiring: <code>public Receipt(String txnId, double amount)</code>.",
        "Faqat Getter metodlarini (<code>getTxnId()</code>, <code>getAmount()</code>) yozing (Setter metodlari bo'lmaydi!).",
        "<code>Main</code> metodida <code>Receipt r = new Receipt(\"FISCAL-9912\", 240000.0);</code> ob'yektini yarating.",
        "Chek ma'lumotlarini chop eting: <code>System.out.println(\"Chek: \" + r.getTxnId() + \" | Summa: \" + r.getAmount() + \" so'm\");</code>"
      ],
      en: [
        "Declare class <code>Receipt</code> with private final fields <code>txnId</code> and <code>amount</code>.",
        "Implement constructor initializing both fields.",
        "Provide public getters only (no setters).",
        "In <code>main</code>, instantiate <code>Receipt r = new Receipt(\"FISCAL-9912\", 240000.0);</code>.",
        "Print receipt details."
      ]
    }
  },
  38: {
    story: {
      uz: "Aqlli harorat datchigi ichki xotirasida haroratni Selsiyda saqlaydi, lekin xalqaro tizimlar uchun uni bir vaqtning o'zida Farengeytga konvertatsiya qilib beruvchi xavfsiz abstraksiya taqdim etadi.",
      en: "An IoT temperature sensor stores temperature in Celsius and provides an encapsulated Fahrenheit conversion getter without duplicating state."
    },
    steps: {
      uz: [
        "<code>TempSensor</code> klassini tuzing: <code>private double celsius;</code> maydonini e'lon qiling.",
        "Konstruktor va mutlaq nol haroratdan (-273.15°C) past bo'lmaslikni tekshiruvchi <code>setCelsius(double celsius)</code> metodini yozing.",
        "<code>getCelsius()</code> va Farengeytga hisoblab beruvchi <code>public double getFahrenheit() { return (this.celsius * 9.0 / 5.0) + 32.0; }</code> metodlarini qo'shing.",
        "<code>Main</code> metodida <code>TempSensor sensor = new TempSensor(25.0);</code> yarating.",
        "Haroratni Selsiy va Farengeytda 2 qatorda chop eting:<br><code>System.out.println(\"Harorat (Selsiy): \" + sensor.getCelsius() + \"°C\");</code><br><code>System.out.println(\"Harorat (Farengeyt): \" + sensor.getFahrenheit() + \"°F\");</code>"
      ],
      en: [
        "Create class <code>TempSensor</code> with private field <code>celsius</code>.",
        "Implement constructor, <code>getCelsius()</code>, and <code>setCelsius()</code> clamping at absolute zero (-273.15).",
        "Implement <code>getFahrenheit()</code> returning <code>(celsius * 9.0 / 5.0) + 32.0</code>.",
        "In <code>main</code>, instantiate with 25.0.",
        "Print temperature in Celsius and Fahrenheit on 2 lines."
      ]
    }
  },
  39: {
    story: {
      uz: "Bank kredit skoringi tizimida mijozning 300 dan 850 gacha bo'lgan ball ko'rsatkichi asosida uning kredit toifasi (EXCELLENT, GOOD, FAIR, POOR) tasniflanadi.",
      en: "A credit scoring engine encapsulates risk assessment, classifying scores from 300 to 850 into EXCELLENT, GOOD, FAIR, or POOR categories."
    },
    steps: {
      uz: [
        "<code>CreditScore</code> klassini yarating: <code>private int score;</code> maydonini qo'shing.",
        "Konstruktor, <code>getScore()</code> va [300; 850] oralig'ini tekshiruvchi <code>setScore(int score)</code> metodlarini yozing.",
        "<code>public String getCategory()</code> metodini yozing: agar <code>score >= 750</code> bo'lsa <code>\"EXCELLENT\"</code>, <code>score >= 650</code> bo'lsa <code>\"GOOD\"</code>, <code>score >= 550</code> bo'lsa <code>\"FAIR\"</code>, aks holda <code>\"POOR\"</code> qaytarsin.",
        "<code>Main</code> metodida <code>CreditScore cs = new CreditScore(780);</code> ob'yektini yarating.",
        "Natijani chop eting: <code>System.out.println(\"Skoring bali: \" + cs.getScore() + \" | Toifa: \" + cs.getCategory());</code>"
      ],
      en: [
        "Declare class <code>CreditScore</code> with private field <code>score</code>.",
        "Implement constructor, getter, and setter bounded between 300 and 850.",
        "Implement <code>getCategory()</code> classifying into EXCELLENT, GOOD, FAIR, POOR.",
        "In <code>main</code>, instantiate <code>CreditScore(780)</code>.",
        "Print score and classification category."
      ]
    }
  },
  40: {
    story: {
      uz: "Axborot xavfsizligida foydalanuvchi parollari hech qachon Getter orqali ochiq ko'rsatilmaydi (No Leak). Ular faqat ichki solishtirish (verify) va eski parolni tasdiqlagan holda o'zgartirish (change) imkonini beradi.",
      en: "Enterprise credential management prohibits leaking passwords through getters, exposing only verification and authenticated password change methods."
    },
    steps: {
      uz: [
        "<code>UserCredential</code> klassini tuzing: <code>private String password;</code> maydonini e'lon qiling.",
        "Konstruktorda parolni kamida 6 belgidan iboratligini tekshirib o'rnating.",
        "Getter yozmang! Solishtirish metodini yozing: <code>public boolean verifyPassword(String attempt) { return this.password.equals(attempt); }</code>.",
        "Parolni xavfsiz almashtirish metodini yozing: <code>public boolean changePassword(String oldPass, String newPass)</code> (eski parol to'g'ri bo'lsa va yangi parol >=6 bo'lsa o'zgartirsin).",
        "<code>Main</code> metodida <code>UserCredential cred = new UserCredential(\"secret2024\");</code> yarating, tekshiruvlarni bajaring va parolni almashtirib chop eting:<br><code>System.out.println(\"Tekshiruv ('wrong'): \" + cred.verifyPassword(\"wrong\"));</code><br><code>System.out.println(\"Tekshiruv ('secret2024'): \" + cred.verifyPassword(\"secret2024\"));</code><br><code>System.out.println(\"Parol o'zgardimi: \" + cred.changePassword(\"secret2024\", \"newMasterPass99\"));</code>"
      ],
      en: [
        "Create class <code>UserCredential</code> with private field <code>password</code>.",
        "Implement constructor enforcing min length 6.",
        "Omit getters! Implement <code>verifyPassword(String attempt)</code>.",
        "Implement <code>changePassword(String oldPass, String newPass)</code> requiring authentication.",
        "In <code>main</code>, test verification and change password, printing outputs."
      ]
    }
  },
  41: {
    story: {
      uz: "Ma'lumotlar bazasi yoki tizimda yangi foydalanuvchi ro'yxatdan o'tganda ularga avtomatik ketma-ket unikal ID berilishi uchun umumiy 'static' hisoblagich xizmat qiladi.",
      en: "A system user account registry automatically increments and assigns unique sequential IDs using a class-level static counter."
    },
    steps: {
      uz: [
        "<code>UserAccount</code> klassini e'lon qiling: <code>public static int totalUsers = 0;</code>, <code>private int id;</code>, <code>private String username;</code>.",
        "Konstruktorda hisoblagichni oshirib ID ga bering: <code>totalUsers++; this.id = totalUsers; this.username = username;</code>.",
        "Getter metodlarini yozing: <code>getId()</code> va <code>getUsername()</code>.",
        "<code>Main</code> metodida ketma-ket uchta foydalanuvchi yarating: 'ali', 'vali' va 'gani'.",
        "Har bir foydalanuvchini va jami sonni 4 qatorda chop eting:<br><code>System.out.println(\"User 1 ID: \" + u1.getId() + \" (\" + u1.getUsername() + \")\");</code><br><code>System.out.println(\"User 2 ID: \" + u2.getId() + \" (\" + u2.getUsername() + \")\");</code><br><code>System.out.println(\"User 3 ID: \" + u3.getId() + \" (\" + u3.getUsername() + \")\");</code><br><code>System.out.println(\"Jami foydalanuvchilar soni: \" + UserAccount.totalUsers);</code>"
      ],
      en: [
        "Declare class <code>UserAccount</code> with <code>public static int totalUsers = 0;</code>, private <code>id</code>, private <code>username</code>.",
        "Constructor increments static counter and assigns to id.",
        "Implement getters for id and username.",
        "In <code>main</code>, instantiate users 'ali', 'vali', 'gani'.",
        "Print all 3 users and totalUsers count on 4 lines."
      ]
    }
  },
  42: {
    story: {
      uz: "Moliyaviy ilovada QQS solig'ini hisoblash va sonlarni yaxlitlash kabi takrorlanuvchi amallarni ob'yekt yaratmasdan chaqirish uchun 'static' yordamchi (utility) klass kerak.",
      en: "A financial calculation module provides stateless static utility methods for VAT computation and decimal rounding without needing object instantiation."
    },
    steps: {
      uz: [
        "<code>FinancialMath</code> klassini tuzing va uning konstruktorini <code>private</code> qilib yoping.",
        "Statik soliq hisoblash metodini yozing: <code>public static double calcVat(double amount, double rate) { return amount * (rate / 100.0); }</code>.",
        "Statik yaxlitlash metodini yozing: <code>public static double roundTwoDecimals(double val) { return Math.round(val * 100.0) / 100.0; }</code>.",
        "<code>Main</code> metodida klass nomi orqali metodlarni to'g'ridan-to'g'ri chaqiring: <code>calcVat(1250000.0, 12.0)</code> va <code>roundTwoDecimals(145.6789)</code>.",
        "Natijalarni 2 qatorda chop eting:<br><code>System.out.println(\"Hisoblangan soliq: \" + soliq + \" so'm\");</code><br><code>System.out.println(\"Yaxlitlangan qiymat: \" + yaxlitlangan);</code>"
      ],
      en: [
        "Create utility class <code>FinancialMath</code> with private constructor.",
        "Implement <code>public static double calcVat(double amount, double rate)</code>.",
        "Implement <code>public static double roundTwoDecimals(double val)</code>.",
        "In <code>main</code>, call methods directly on class.",
        "Print VAT and rounded result on 2 lines."
      ]
    }
  },
  43: {
    story: {
      uz: "Markaziy bank valyuta kursi barcha operatsiyalar uchun umumiy bitta qiymatga ega. Kurs yangilanganda barcha o'tkazmalar avtomatik yangi kurs bo'yicha hisoblanadi ('static' State).",
      en: "A central banking currency converter manages a shared static exchange rate, dynamically affecting all conversion calculations across the system."
    },
    steps: {
      uz: [
        "<code>CurrencyConverter</code> klassini tuzing: <code>private static double usdToUzs = 12700.0;</code> maydonini e'lon qiling.",
        "Kursni yangilash metodini yozing: <code>public static void setRate(double newRate) { if (newRate > 0) usdToUzs = newRate; }</code>.",
        "Konvertatsiya metodini yozing: <code>public static double toUzs(double usd) { return usd * usdToUzs; }</code>.",
        "<code>Main</code> metodida 100 dollarni eski kursda (12700.0) hisoblab chop eting: <code>System.out.println(\"100 USD (eski kurs): \" + summa1 + \" so'm\");</code>.",
        "Kursni 12800.0 ga o'zgartiring va yana 100 dollarni yangi kursda chop eting: <code>System.out.println(\"100 USD (yangi kurs): \" + summa2 + \" so'm\");</code>."
      ],
      en: [
        "Declare class <code>CurrencyConverter</code> with private static <code>usdToUzs = 12700.0;</code>.",
        "Implement static <code>setRate(double newRate)</code> and static <code>toUzs(double usd)</code>.",
        "In <code>main</code>, convert 100 USD at original rate and print.",
        "Update rate to 12800.0 and convert 100 USD again.",
        "Print both conversions matching expected output."
      ]
    }
  },
  44: {
    story: {
      uz: "Dasturiy tizimda inson va uning yashash manzili alohida klasslar bo'lib, inson ob'yektining ichida manzil ob'yekti saqlanadi ('has-a' Munosabati / Kompozitsiya).",
      en: "A domain model represents a Person possessing an Address ('has-a' relationship) through object composition."
    },
    steps: {
      uz: [
        "<code>Address</code> klassini tuzing: <code>city</code> va <code>street</code> maydonlari, konstruktor va getterlar.",
        "<code>Person</code> klassini tuzing: <code>name</code> va <code>Address address</code> maydonlari, konstruktor.",
        "<code>Person</code> klassida <code>public String getFullDetails() { return this.name + \" (\" + this.address.getCity() + \", \" + this.address.getStreet() + \")\"; }</code> metodini yozing.",
        "<code>Main</code> metodida <code>Address addr = new Address(\"Toshkent\", \"Amir Temur ko'chasi, 12\");</code> va <code>Person p = new Person(\"Rustam Shokirov\", addr);</code> yarating.",
        "Shaxs ma'lumotlarini chop eting: <code>System.out.println(\"Shaxs ma'lumotlari: \" + p.getFullDetails());</code>"
      ],
      en: [
        "Create class <code>Address</code> with city, street, constructor, getters.",
        "Create class <code>Person</code> with name, address, constructor.",
        "Implement <code>getFullDetails()</code> formatting name and address details.",
        "In <code>main</code>, instantiate Address, then instantiate Person.",
        "Print full details matching expected output."
      ]
    }
  },
  45: {
    story: {
      uz: "Avtomobil o'zining ichki dvigateliga (Engine) ega. Avtomobil o't oldirilganda dvigatelning turi va ot kuchini delegatsiya orqali konsolga aks ettiradi (Kuchli Kompozitsiya).",
      en: "An automotive Car model encapsulates an internal Engine component, delegating start telemetry to engine specifications."
    },
    steps: {
      uz: [
        "<code>Engine</code> klassini e'lon qiling: <code>private int horsePower;</code>, <code>private String type;</code>, konstruktor va getterlar.",
        "<code>Car</code> klassini e'lon qiling: <code>private String model;</code>, <code>private Engine engine;</code>, konstruktor.",
        "<code>Car</code> klassida <code>public void startCar()</code> metodini yozing: <code>System.out.println(this.model + \" o't oldirildi! Dvigatel: \" + this.engine.getType() + \" (\" + this.engine.getHorsePower() + \" HP)\");</code>.",
        "<code>Main</code> metodida <code>Engine turbo = new Engine(250, \"2.0 Turbo\");</code> va <code>Car myCar = new Car(\"Malibu Premier\", turbo);</code> ob'yektlarini yarating.",
        "Avtomobilni o't oldiring: <code>myCar.startCar();</code>"
      ],
      en: [
        "Declare class <code>Engine</code> with horsePower, type, constructor, getters.",
        "Declare class <code>Car</code> with model, engine, constructor.",
        "Implement <code>startCar()</code> printing engine telemetry.",
        "In <code>main</code>, instantiate Engine, then instantiate Car.",
        "Invoke <code>myCar.startCar();</code>."
      ]
    }
  },
  46: {
    story: {
      uz: "Elektron savatda har bir buyurtma qatori (OrderItem) mahsulot ob'yektiga va buyurtma soniga ega bo'lib, uning oraliq summasini (subtotal) hisoblab beradi.",
      en: "An e-commerce cart position (OrderItem) aggregates a Product reference and quantity, computing line-item subtotal."
    },
    steps: {
      uz: [
        "<code>Product</code> klassini tuzing: <code>name</code> va <code>price</code> maydonlari, konstruktor va getterlar.",
        "<code>OrderItem</code> klassini tuzing: <code>Product product</code> va <code>int quantity</code> maydonlari, konstruktor va getterlar.",
        "<code>OrderItem</code> klassida <code>public double getSubtotal() { return this.product.getPrice() * this.quantity; }</code> metodini yozing.",
        "<code>Main</code> metodida <code>Product p = new Product(\"Simsiz Quloqchin\", 350000.0);</code> va <code>OrderItem item = new OrderItem(p, 3);</code> yarating.",
        "Tovar ma'lumotlari va oraliq summani 2 qatorda chop eting:<br><code>System.out.println(\"Tovar: \" + item.getProduct().getName() + \" x \" + item.getQuantity() + \" dona\");</code><br><code>System.out.println(\"Oraliq summa: \" + item.getSubtotal() + \" so'm\");</code>"
      ],
      en: [
        "Create class <code>Product</code> with name, price, constructor, getters.",
        "Create class <code>OrderItem</code> with product, quantity, constructor, getters.",
        "Implement <code>getSubtotal()</code> returning product.getPrice() * quantity.",
        "In <code>main</code>, instantiate Product, then OrderItem with quantity 3.",
        "Print product name, quantity, and subtotal on 2 lines."
      ]
    }
  },
  47: {
    story: {
      uz: "Korxona buyurtmalar tizimida buyurtma (Order) ma'lum bir mijozga (Customer) tegishli bo'lib, buyurtma kvitansiyasida mijoz rekvizitlari va to'lov summasi korporativ ramkada ko'rsatiladi.",
      en: "An enterprise order management system links orders to customers, rendering formatted order summaries with customer details."
    },
    steps: {
      uz: [
        "<code>Customer</code> klassini tuzing: <code>customerId</code>, <code>fullName</code>, <code>phone</code>, konstruktor va getterlar.",
        "<code>Order</code> klassini tuzing: <code>orderId</code>, <code>Customer customer</code>, <code>totalAmount</code>, konstruktor.",
        "<code>Order</code> klassida <code>public void printOrderSummary()</code> metodini yozing: buyurtma raqami, mijoz ismi, telefoni va to'lov summasini ramkali kvitansiya formatida chop etsin.",
        "<code>Main</code> metodida <code>Customer c = new Customer(101, \"Dilshod Karimov\", \"+998931112233\");</code> va <code>Order ord = new Order(5001, c, 480000.0);</code> yarating.",
        "Kvitansiyani chop eting: <code>ord.printOrderSummary();</code>"
      ],
      en: [
        "Create class <code>Customer</code> with customerId, fullName, phone, getters.",
        "Create class <code>Order</code> with orderId, customer, totalAmount.",
        "Implement <code>printOrderSummary()</code> formatting customer summary box.",
        "In <code>main</code>, instantiate Customer, then Order.",
        "Invoke <code>ord.printOrderSummary();</code>."
      ]
    }
  },
  48: {
    story: {
      uz: "Ilovaning global sozlamalari, tizim nomi, versiyasi va ruxsat etilgan maksimal chegirma ko'rsatkichi butun dastur bo'ylab o'zgarmas 'public static final' konstantalar sifatida markazlashtiriladi.",
      en: "Enterprise system configuration maintains global immutable settings (APP_NAME, VERSION, MAX_DISCOUNT_PCT) as public static final constants."
    },
    steps: {
      uz: [
        "<code>AppConfig</code> klassini tuzing va tashqaridan ob'yekt olinmasligi uchun konstruktorini <code>private</code> qiling.",
        "3 ta konstantani e'lon qiling: <code>public static final String APP_NAME = \"WIUT Academy\";</code>, <code>public static final String VERSION = \"2.0\";</code>, <code>public static final double MAX_DISCOUNT_PCT = 30.0;</code>.",
        "<code>Main</code> metodida ob'yekt yaratmasdan bevosita <code>AppConfig</code> orqali konstantalarga murojaat qiling.",
        "Tizim nomi va versiyasini chop eting: <code>System.out.println(\"Tizim: \" + AppConfig.APP_NAME + \" v\" + AppConfig.VERSION);</code>.",
        "Maksimal chegirma foizini chop eting: <code>System.out.println(\"Maksimal ruxsat etilgan chegirma: \" + AppConfig.MAX_DISCOUNT_PCT + \"%\");</code>."
      ],
      en: [
        "Create class <code>AppConfig</code> with private constructor.",
        "Declare 3 constants: APP_NAME, VERSION, MAX_DISCOUNT_PCT.",
        "In <code>main</code>, access constants directly via class name.",
        "Print app name and version on first line.",
        "Print max discount percentage on second line."
      ]
    }
  },
  49: {
    story: {
      uz: "Ombor hisoboti bir nechta tovar ob'yektlarini o'zida birlashtirib (kompozitsiya), ularning umumiy ombor zaxira qiymatini (narx * qoldiq soni) jamlab hisoblaydi.",
      en: "A warehouse management report aggregates multiple product items, calculating total inventory valuation across all stock."
    },
    steps: {
      uz: [
        "<code>Product</code> klassini tuzing: <code>name</code>, <code>price</code>, <code>stock</code>, konstruktor va getterlar.",
        "<code>WarehouseReport</code> klassini tuzing: <code>private Product p1; private Product p2; private Product p3;</code> va 3 ta tovarni qabul qiluvchi konstruktor.",
        "<code>public double calculateTotalInventoryValue()</code> metodini yozing: har bir tovarning <code>getPrice() * getStock()</code> qiymatlarini jamlab qaytarsin.",
        "<code>Main</code> metodida 3 ta tovar yarating (\"Laptop Dell\", \"Monitor 27\", \"Klaviatura RGB\") va <code>WarehouseReport report = new WarehouseReport(prd1, prd2, prd3);</code> ob'yektiga uzating.",
        "Ombordagi jami tovarlar qiymatini hisoblab chop eting: <code>System.out.println(\"Ombordagi barcha tovarlarning jami qiymati: \" + totalVal + \" so'm\");</code>"
      ],
      en: [
        "Create class <code>Product</code> with name, price, stock, getters.",
        "Create class <code>WarehouseReport</code> aggregating 3 products.",
        "Implement <code>calculateTotalInventoryValue()</code> summing (price * stock) of each.",
        "In <code>main</code>, instantiate 3 products, pass to report.",
        "Print total inventory value."
      ]
    }
  },
  50: {
    story: {
      uz: "OOP Modulining CW2 (50%) Kurs Ishi Capstone prototipi! Mijoz (Customer), Tovar (Product) va Buyurtma (Order) klasslarini statik hisoblagich, inkapsulyatsiya va formatlangan korporativ kvitansiya (Invoice) bilan to'liq konsol ilovasi.",
      en: "The Capstone Milestone for OOP Coursework 2 (50%)! An end-to-end console order management invoice system integrating Customer, Product, Order, static counters, and formatted invoices."
    },
    steps: {
      uz: [
        "<code>Customer</code> klassini tuzing: <code>name</code>, <code>phone</code>, konstruktor va getterlar.",
        "<code>Product</code> klassini tuzing: <code>title</code>, <code>price</code>, konstruktor va getterlar.",
        "<code>Order</code> klassini tuzing: <code>public static int orderCounter = 0;</code>, <code>orderId</code>, <code>Customer customer</code>, <code>Product product</code>, <code>quantity</code>; konstruktorda <code>orderCounter++</code> qilib yangi buyurtma raqamini bering.",
        "<code>Order</code> klassida <code>public void printInvoice(double discountPct)</code> metodini yozing: oraliq summa, foizli chegirma va yakuniy summani to'liq korporativ ramkali kvitansiya ko'rinishida chop etsin.",
        "<code>Main</code> metodida <code>Customer client = new Customer(\"Ravshanbek Rahimov\", \"+998901234567\");</code> va <code>Product macbook = new Product(\"MacBook Air M3\", 14500000.0);</code> yarating, buyurtma ochib 10% talaba chegirmasi bilan kvitansiyani chop eting: <code>order1.printInvoice(10.0);</code>."
      ],
      en: [
        "Create class <code>Customer</code> with name, phone, getters.",
        "Create class <code>Product</code> with title, price, getters.",
        "Create class <code>Order</code> with static orderCounter, customer, product, quantity, autoincrementing orderId.",
        "Implement <code>printInvoice(double discountPct)</code> rendering the full corporate invoice frame.",
        "In <code>main</code>, instantiate Customer, Product, Order and invoke <code>order1.printInvoice(10.0);</code>."
      ]
    }
  }
};

// Apply enrichments to all challenges
let updatedCount = 0;
challenges.forEach(ch => {
  const enrich = ENRICHMENTS[ch.id];
  if (enrich) {
    ch.story = enrich.story;
    ch.steps = enrich.steps;

    // Build unified scenario text as well
    const uzStepsText = enrich.steps.uz.map((s, idx) => `${idx + 1}. ${s.replace(/<[^>]+>/g, '')}`).join('\n');
    const enStepsText = enrich.steps.en.map((s, idx) => `${idx + 1}. ${s.replace(/<[^>]+>/g, '')}`).join('\n');

    ch.scenario = {
      uz: `[Hayotiy Voqealik & Kontekst]\n${enrich.story.uz}\n\n[Bajarilishi kerak bo'lgan vazifalar (1 dan ${enrich.steps.uz.length} gacha)]\n${uzStepsText}`,
      en: `[Real-World Story & Context]\n${enrich.story.en}\n\n[Step-by-Step Implementation Tasks (1 to ${enrich.steps.en.length})]\n${enStepsText}`
    };
    updatedCount++;
  }
});

console.log(`Successfully enriched ${updatedCount} challenges with authentic stories and 1..5 step-by-step tasks.`);

// Write back to oop/shared/challenges-w1.js
const header = `// ====================================================================\n// WIUT DATABASE & OOP ACADEMY — OBJECT-ORIENTED PROGRAMMING (5COSC018C)\n// WEEK 1: JAVA FUNDAMENTALS, CLASSES, OBJECTS & OOP FOUNDATIONS\n// 50 AUTHENTIC HIGH-YIELD PROGRESSIVE CHALLENGES (STAGES 1 - 5)\n// With Real-World Scenarios & Numbered Step-by-Step Action Tasks\n// ====================================================================\n\n`;

const newFileContent = header + 'window.OOP_CHALLENGES_W1 = ' + JSON.stringify(challenges, null, 2) + ';\n';
fs.writeFileSync(filePath, newFileContent, 'utf8');
console.log('Saved updated challenges to:', filePath);
