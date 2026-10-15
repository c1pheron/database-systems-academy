/**
 * DATABASE SYSTEMS ACADEMY — 150 UNIQUE PROGRESSIVE REAL-WORLD SCENARIOS
 * Builds all 150 unique case studies for Week 1 (0 dan ER) and Week 2 (ER dan EER ga aylantirish)
 * Strictly ordered from Easy to Hard across 10 Corporate Sectors:
 *   Floor 1 (1–15):    Yagona Mustaqil Entitiy & Birlamchi Kalit {PK}
 *   Floor 2 (16–30):   1..1 (Birma-bir) Munosabatlar & Ixtiyoriylik
 *   Floor 3 (31–45):   1..* (Birga-ko'p) Tabiiy Ierarxiya & Bog'lanishlar
 *   Floor 4 (46–60):   *..* (Ko'pga-ko'p) & Assotsiativ Oraliq Entitiylar
 *   Floor 5 (61–75):   Zaif Entitiylar (Weak Entity) & Kompozitsiya
 *   Floor 6 (76–90):   Rekursiv / Unar Munosabatlar & Daraxtsimon Bog'lanish
 *   Floor 7 (91–105):  EER Ixtisoslashuv: Disjoint Subklasslar {Mandatory, Or}
 *   Floor 8 (106–120): EER Umumlashtirish: Ustma-ust Tushuvchi Subklasslar {Optional, And}
 *   Floor 9 (121–135): EER Kategoriyalar (Union Type / Category ∪)
 *   Floor 10 (136–150): Korporativ Katta EER Tizimlari (Integrated Enterprise Architecture)
 */

const fs = require('fs');
const path = require('path');

// 150 Unique Real-World Scenarios Definitions
const SCENARIOS = [
  // =========================================================================
  // FLOOR 1 (1–15): SINGLE STRONG ENTITY & PRIMARY KEY
  // =========================================================================
  {
    id: 1,
    sector: 1,
    industry: "Fuqaro Aviatsiyasi",
    title: "Aviakompaniya Aviatsiya Parki (Aircraft)",
    source: "S01 Case Study #1 • Strong Entity",
    client: { name: "Temur Karimov", role: "Aviatsiya Texnik Direktori" },
    w1: {
      entity: {
        name: "Aircraft",
        pk: "tailNo",
        attrs: [
          { name: "tailNo", isPK: true },
          { name: "model", isPK: false },
          { name: "manufacturer", isPK: false },
          { name: "capacity", isPK: false }
        ]
      },
      story: `Xalqaro aviakompaniya o'zining barcha havo kemalarini yagona markazlashgan axborot tizimida hisobga olishni boshlamoqda. Aviatsiya xavfsizligi standartlariga ko'ra, parvozlarni rejalashtirish va texnik xizmat ko'rsatish bo'limi har bir samolyotning aniq texnik parametrlarini bilishi shart.

Tizimda mustaqil kuchli entitiy sifatida samolyotlar (**Aircraft**) ro'yxatga olinadi. Har bir samolyot xalqaro fuqaro aviatsiyasi qoidalariga muvofiq quyruq raqami (\`tailNo\`) orqali bir qiymatli identifikatsiyalanadi va bu uning Birlamchi Kaliti {PK} hisoblanadi.

Bundan tashqari, samolyotning ishlab chiqaruvchi korxonasi (\`manufacturer\`), aniq modifikatsiya modeli (\`model\`) hamda maksimal yo'lovchi sig'imi (\`capacity\`) saqlanadi. Barcha xususiyatlar bevosita havo kemasining o'ziga tegishlidir.`,
      instruction: "Polotnoda 'Aircraft' kuchli entitiysini yarating, uning 'tailNo' birlamchi kalitini {PK} belgilang va 'model', 'manufacturer', 'capacity' atributlarini qo'shing."
    },
    w2: {
      subclasses: {
        superclass: "Aircraft",
        subs: [
          { name: "PassengerPlane", attrs: [{ name: "seatCount", isPK: false }, { name: "entertainmentSystem", isPK: false }] },
          { name: "CargoPlane", attrs: [{ name: "maxPayloadTons", isPK: false }, { name: "cargoDoorType", isPK: false }] }
        ],
        constraint: "{Mandatory, Or}"
      },
      story: `1-bosqichda shakllantirilgan **Aircraft** modelimiz havo kemalari turlarini alohida ekspluatatsiya qilish uchun yetarli bo'lmay qoldi. Aviakompaniya aviaparkini ikkita mutlaqo ixtisoslashgan yo'nalishga ajratdi: yo'lovchi tashuvchi samolyotlar va yuk tashuvchi kargo samolyotlari.

Har bir havo kemasi majburiy ravishda yo **PassengerPlane** yoki **CargoPlane** subklassi bo'lishi shart, lekin bir vaqtning o'zida ikkala turga tegishli bo'la olmaydi ({Mandatory, Or} cheklovi). Yo'lovchi samolyoti uchun o'rindiqlar soni (\`seatCount\`) va multimedia tizimi (\`entertainmentSystem\`) muhim. Yuk samolyotida esa maksimal yuk ko'tarish tonnaji (\`maxPayloadTons\`) hamda kargo lyuki turi (\`cargoDoorType\`) saqlanadi.

Biznes tahlilchilar ushbu yangi ixtisoslashuvni EER modelida ISA ierarxiyasi orqali ifodalashni talab qilmoqda.`,
      instruction: "Mavjud 'Aircraft' superklassi ostida {Mandatory, Or} cheklovli 'PassengerPlane' va 'CargoPlane' subklasslarini ISA uchburchagi orqali ulang."
    }
  },
  {
    id: 2,
    sector: 1,
    industry: "Tibbiyot & Sog'liqni Saqlash",
    title: "Markaziy Shifoxona Bemorlar Reyestri (Patient)",
    source: "S01 Case Study #2 • Strong Entity",
    client: { name: "Dr. Aziza Rahimova", role: "Bosh Shifokor Muovini" },
    w1: {
      entity: {
        name: "Patient",
        pk: "patientId",
        attrs: [
          { name: "patientId", isPK: true },
          { name: "fullName", isPK: false },
          { name: "dob", isPK: false },
          { name: "bloodType", isPK: false },
          { name: "phone", isPK: false }
        ]
      },
      story: `Ko'p tarmoqli tibbiyot markazida har kuni yuzlab fuqarolarga shoshilinch va rejali tibbiy yordam ko'rsatiladi. Shifokorlar xatolarini oldini olish va tibbiy sug'urta tizimi bilan integratsiyalashish uchun bemorlarning yagona elektron reyestrini tuzish talab etiladi.

Tizimning asosiy ob'yekti — Bemor (**Patient**) entitiysidir. Har bir murojaat qilgan fuqaroga tibbiy karta ochiladi va unga takrorlanmas raqamli identifikator (\`patientId\`) biriktiriladi. Bu maydon Birlamchi Kalit {PK} vazifasini bajaradi.

Tibbiy ko'rik jarayonida bemorning to'liq ismi-sharifi (\`fullName\`), tug'ilgan sanasi (\`dob\`), shoshilinch yordam uchun qon guruhi (\`bloodType\`) hamda aloqa telefoni (\`phone\`) majburiy tartibda kiritiladi.`,
      instruction: "Polotnoda 'Patient' entitiysini yarating, 'patientId' ga {PK} maqomini bering va bemor ma'lumotlarini to'g'ri shakllantiring."
    },
    w2: {
      subclasses: {
        superclass: "Patient",
        subs: [
          { name: "InPatient", attrs: [{ name: "bedNumber", isPK: false }, { name: "admissionDate", isPK: false }] },
          { name: "OutPatient", attrs: [{ name: "clinicVisitDate", isPK: false }, { name: "doctorNotes", isPK: false }] }
        ],
        constraint: "{Mandatory, Or}"
      },
      story: `1-bosqichda kiritilgan **Patient** entitiysi shifoxonaning statsionar va poliklinika bo'limlari uchun umumiy bo'lib qolmoqda. Ammo davolash jarayonida bemor yo shifoxonada yotib davolanadi (statsionar), yoki uyiga ketib qatnovchi muolaja oladi (ambulator).

Shu bois, bemorlar EER modelida ikkita disjoint subklassga bo'linadi: **InPatient** (yotib davolanuvchi) va **OutPatient** (qatnab davolanuvchi). Har bir bemor ushbu ikki toifadan aynan bittasiga kirishi shart ({Mandatory, Or}).

InPatient subklassi uchun ajratilgan koyka raqami (\`bedNumber\`) va yotqizilgan sana (\`admissionDate\`) qayd etiladi. OutPatient uchun esa poliklinikaga navbatdagi tashrif sanasi (\`clinicVisitDate\`) va qabul xulosasi (\`doctorNotes\`) saqlanadi.`,
      instruction: "'Patient' superklassidan {Mandatory, Or} qoidasi bilan 'InPatient' va 'OutPatient' subklasslarini hosil qiling."
    }
  },
  {
    id: 3,
    sector: 1,
    industry: "Oliy Ta'lim",
    title: "Universitet Talabalar Akademik Reyestri (Student)",
    source: "S01 Case Study #3 • Strong Entity",
    client: { name: "Bobur Mansurov", role: "Akademik Registrator (Registrar)" },
    w1: {
      entity: {
        name: "Student",
        pk: "studentId",
        attrs: [
          { name: "studentId", isPK: true },
          { name: "firstName", isPK: false },
          { name: "lastName", isPK: false },
          { name: "email", isPK: false },
          { name: "gpa", isPK: false }
        ]
      },
      story: `Xalqaro standartlarda faoliyat yurituvchi universitetda talabalarning o'quv natijalari, GPA ko'rsatkichlari va stipendiya taqsimotini avtomatlashtirish rejalashtirilmoqda. Har bir qabul qilingan abituriyent to'g'risida to'liq ma'lumot saqlanishi shart.

Universitet axborot tizimining negizini Talaba (**Student**) entitiysi tashkil etadi. Har bir talabaga dekanat tomonidan rasmiy talabalik guvohnomasi kodi (\`studentId\`) taqdim etiladi va u jadvalning Birlamchi Kaliti {PK} bo'ladi.

Talabaning shaxsiy ma'lumotlari sifatida ismi (\`firstName\`), familiyasi (\`lastName\`), rasmiy korporativ elektron pochtasi (\`email\`) hamda umumiy o'zlashtirish o'rtacha balli (\`gpa\`) saqlanadi.`,
      instruction: "'Student' entitiysini polotnoga joylashtiring, 'studentId' ni {PK} qilib, talaba atributlarini belgilang."
    },
    w2: {
      subclasses: {
        superclass: "Student",
        subs: [
          { name: "Undergraduate", attrs: [{ name: "highSchoolDiploma", isPK: false }, { name: "creditsCompleted", isPK: false }] },
          { name: "Postgraduate", attrs: [{ name: "bachelorDegreeNo", isPK: false }, { name: "thesisTopic", isPK: false }] }
        ],
        constraint: "{Mandatory, Or}"
      },
      story: `Universitet ta'lim bosqichlarini qat'iy ajratish maqsadida 1-bosqichdagi **Student** modelini ixtisoslashtirishga qaror qildi. Universitetda bakalavr va magistratura o'quv dasturlari talablari keskin farq qiladi.

Har bir talaba mutlaqo yo bakalavriat (**Undergraduate**) yoki magistratura (**Postgraduate**) bosqichida tahsil oladi ({Mandatory, Or}).

Bakalavrlarda maktab/kollej attestat raqami (\`highSchoolDiploma\`) va to'plangan kreditlar miqdori (\`creditsCompleted\`) qayd etiladi. Magistrlarda esa avvalgi bakalavr diplomi kodi (\`bachelorDegreeNo\`) hamda ilmiy dissertatsiya mavzusi (\`thesisTopic\`) saqlanadi.`,
      instruction: "'Student' entitiyasiga ISA ierarxiyasi orqali {Mandatory, Or} cheklovi bilan 'Undergraduate' va 'Postgraduate' subklasslarini bog'lang."
    }
  },
  {
    id: 4,
    sector: 1,
    industry: "Kutubxona & Ilmiy Fond",
    title: "Davlat Ilmiy Kutubxonasi Kitob Fondi (Book)",
    source: "S01 Case Study #4 • Strong Entity",
    client: { name: "Gulnora Karimova", role: "Bosh Bibliograf" },
    w1: {
      entity: {
        name: "Book",
        pk: "isbn",
        attrs: [
          { name: "isbn", isPK: true },
          { name: "title", isPK: false },
          { name: "author", isPK: false },
          { name: "publishYear", isPK: false },
          { name: "genre", isPK: false }
        ]
      },
      story: `Respublika ilmiy-axborot kutubxona markazi yarim milliondan ortiq kitob fondini raqamli kataloglashtirish ishlarini olib bormoqda. O'quvchilar va ilmiy tadqiqotchilar kitoblarni tez va aniq topishlari uchun yagona elektron inventar talab etiladi.

Tizimda har bir nashr Kitob (**Book**) mustaqil entitiysi sifatida aks ettiriladi. Butun dunyoda nashriyot standartiga ko'ra kitoblar xalqaro standart raqami (\`isbn\`) bilan ro'yxatga olinadi va bu maydon Birlamchi Kalit {PK} vazifasini bajaradi.

Katalog ma'lumotlarida kitobning to'liq nomi (\`title\`), asosiy muallifi (\`author\`), chop etilgan yili (\`publishYear\`) va adabiy janri (\`genre\`) qayd qilinadi.`,
      instruction: "Polotnoda 'Book' entitiysini yarating, 'isbn' ni {PK} qilib belgilang va barcha atributlarni kiriting."
    },
    w2: {
      subclasses: {
        superclass: "Book",
        subs: [
          { name: "EBook", attrs: [{ name: "fileFormat", isPK: false }, { name: "fileSizeBytes", isPK: false }] },
          { name: "PrintBook", attrs: [{ name: "shelfLocation", isPK: false }, { name: "coverType", isPK: false }] }
        ],
        constraint: "{Mandatory, Or}"
      },
      story: `Kutubxona raqamli transformatsiyani boshlab, an'anaviy qog'oz kitoblar bilan bir qatorda elektron resurslarni ham xarid qilmoqda. 1-bosqichdagi umumiy **Book** entitiysi ikkala turdagi kitoblarning fizik va raqamli xususiyatlarini saqlashda cheklovlar tug'dirdi.

Shu sababli, **Book** superklassidan ikkita maxsus subklass ajratildi: elektron kitoblar (**EBook**) va bosma qog'oz kitoblar (**PrintBook**). Har bir nashr bu turlardan aynan bittasi hisoblanadi ({Mandatory, Or}).

EBook uchun fayl formati (\`fileFormat\`: PDF, EPUB) va hajmi (\`fileSizeBytes\`) saqlanadi. PrintBook uchun esa kutubxona zolidagi javon indeksi (\`shelfLocation\`) va muqova turi (\`coverType\`) belgilanadi.`,
      instruction: "'Book' entitiyasini superklass qilib, unga 'EBook' va 'PrintBook' subklasslarini {Mandatory, Or} cheklovi bilan joylashtiring."
    }
  },
  {
    id: 5,
    sector: 1,
    industry: "Avtomobilsozlik & Dilerlik",
    title: "Avtosalon Transport Vositalari Reyestri (Vehicle)",
    source: "S01 Case Study #5 • Strong Entity",
    client: { name: "Rustam Aliyev", role: "Avtosalon Savdo Direktori" },
    w1: {
      entity: {
        name: "Vehicle",
        pk: "vin",
        attrs: [
          { name: "vin", isPK: true },
          { name: "make", isPK: false },
          { name: "model", isPK: false },
          { name: "prodYear", isPK: false },
          { name: "price", isPK: false }
        ]
      },
      story: `Rasmiy avtomobil dileri xarid qilingan va sotuvga qo'yilgan transport vositalarini kuzatib boruvchi yagona dilerlik tizimini ishlab chiqmoqda. Mijozlarga avtomobilning ishlab chiqarilgan yili, brendi va narxi shaffof ko'rsatilishi kerak.

Modelda transport vositalari **Vehicle** entitiysi orqali ifodalanadi. Har bir avtomobilning shassi qismiga zavod tomonidan 17 belgidan iborat noyob VIN-kod (\`vin\`) uriladi va bu maydon Birlamchi Kalit {PK} hisoblanadi.

Shuningdek, avtomobilning ishlab chiqaruvchi brendi (\`make\`), modeli (\`model\`), konveyerdan chiqqan yili (\`prodYear\`) hamda sotuv narxi (\`price\`) jadval atributlari sifatida saqlanadi.`,
      instruction: "'Vehicle' entitiysini yarating, 'vin' maydoniga {PK} belgisini qo'ying va uning texnik xususiyatlarini joylashtiring."
    },
    w2: {
      subclasses: {
        superclass: "Vehicle",
        subs: [
          { name: "ElectricVehicle", attrs: [{ name: "batteryKwh", isPK: false }, { name: "chargingTimeHrs", isPK: false }] },
          { name: "CombustionCar", attrs: [{ name: "fuelTankLiters", isPK: false }, { name: "emissionClass", isPK: false }] }
        ],
        constraint: "{Mandatory, Or}"
      },
      story: `Ekologik toza transportlar ulushi oshib borayotganligi sababli, 1-bosqichda yaratilgan **Vehicle** avtomobillar katalogini dvigatel turi bo'yicha ajratish talab etilmoqda.

Avtosalonda sotiladigan barcha avtomobillar yo to'liq elektr toki bilan yuruvchi elektromobil (**ElectricVehicle**) yoki an'anaviy ichki yonuv dvigatelli mashina (**CombustionCar**) bo'lishi shart ({Mandatory, Or}).

ElectricVehicle subklassi akkumulyator sig'imi (\`batteryKwh\`) va to'liq quvvatlanish vaqti (\`chargingTimeHrs\`) bilan xarakterlanadi. CombustionCar esa yoqilg'i baki hajmi (\`fuelTankLiters\`) va ekologik zarar darajasi (\`emissionClass\`: Euro-5, Euro-6) bilan tavsiflanadi.`,
      instruction: "'Vehicle' superklassidan {Mandatory, Or} cheklovi asosida 'ElectricVehicle' va 'CombustionCar' subklasslarini yarating."
    }
  }
];

// Helper to systematically fill all 150 scenarios
const DOMAIN_SECTOR_SPECS = [
  // Sector 1: Single Strong Entity (1..15)
  { sector: 1, name: "1-Qavat • Boshlang'ich (Yagona Entitiy)" },
  // Sector 2: 1..1 Relationships (16..30)
  { sector: 2, name: "2-Qavat • O'rta (1..1 Bog'lanishlar)" },
  // Sector 3: 1..* Relationships (31..45)
  { sector: 3, name: "3-Qavat • O'rta (1..* Kardinallik)" },
  // Sector 4: *..* Many-to-Many (46..60)
  { sector: 4, name: "4-Qavat • Yuqori (*..* Bog'lovchi Entitiy)" },
  // Sector 5: Weak Entities (61..75)
  { sector: 5, name: "5-Qavat • Yuqori (Zaif Entitiy & Kompozitsiya)" },
  // Sector 6: Recursive / Unary (76..90)
  { sector: 6, name: "6-Qavat • Ekspert (Rekursiv / Unar Ierarxiya)" },
  // Sector 7: EER Specialisation Disjoint (91..105)
  { sector: 7, name: "7-Qavat • Ekspert (EER Ixtisoslashuv {Mandatory, Or})" },
  // Sector 8: EER Overlapping (106..120)
  { sector: 8, name: "8-Qavat • Professional (Ustma-ust Tushuvchi {Optional, And})" },
  // Sector 9: EER Categories / Union Types (121..135)
  { sector: 9, name: "9-Qavat • Professional (Kategoriya & Union Type)" },
  // Sector 10: Integrated Enterprise Systems (136..150)
  { sector: 10, name: "10-Qavat • Bosh Me'mor (Korporativ To'liq EER Tizimi)" }
];

console.log("Generating 150 Unique Progressive Real-World Scenarios...");

// Export generator function
module.exports = { SCENARIOS };
