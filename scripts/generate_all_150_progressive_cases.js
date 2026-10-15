/**
 * MASTER GENERATOR FOR 150 UNIQUE PROGRESSIVE REAL-WORLD SCENARIOS
 * Week 1: 0 dan ER Diagramma Yaratish
 * Week 2: O'sha ER Diagrammani EER Diagrammaga Aylantirish (uzviy davomiylik)
 */

const fs = require('fs');
const path = require('path');

// 10 Sectors Definitions
const SECTORS_META = {
  1: { floor: "1-Qavat", theme: "Boshlang'ich: Yagona Mustaqil Entitiy & {PK}" },
  2: { floor: "2-Qavat", theme: "O'rta: 1..1 (Birma-bir) Munosabatlar & Ixtiyoriylik" },
  3: { floor: "3-Qavat", theme: "O'rta: 1..* (Birga-ko'p) Kardinallik & Ierarxiya" },
  4: { floor: "4-Qavat", theme: "Yuqori: *..* (Ko'pga-ko'p) & Assotsiativ Entitiylar" },
  5: { floor: "5-Qavat", theme: "Yuqori: Zaif Entitiylar (Weak Entity) & Kompozitsiya" },
  6: { floor: "6-Qavat", theme: "Ekspert: Rekursiv / Unar Munosabatlar" },
  7: { floor: "7-Qavat", theme: "Ekspert: EER Ixtisoslashuv {Mandatory, Or}" },
  8: { floor: "8-Qavat", theme: "Professional: EER Ustma-ust Tushuvchi {Optional, And}" },
  9: { floor: "9-Qavat", theme: "Professional: EER Kategoriyalar (Union Types ∪)" },
  10: { floor: "10-Qavat", theme: "Bosh Me'mor: Korporativ To'liq EER Tizimlari" }
};

// 150 Unique Real-World Domain Specifications
// Sector 1: 1..15
const RAW_DOMAINS = [
  // --- SECTOR 1: SINGLE STRONG ENTITY (1..15) ---
  {
    id: 1, sector: 1, domain: "Fuqaro Aviatsiyasi", title: "Aviakompaniya Aviatsiya Parki",
    ent: "Aircraft", pk: "tailNo", attrs: ["model", "manufacturer", "capacity"],
    client: "Temur Karimov", role: "Aviatsiya Texnik Direktori",
    w1_desc: "Xalqaro aviakompaniya o'zining barcha havo kemalarini yagona markazlashgan axborot tizimida hisobga olishni boshlamoqda. Aviatsiya xavfsizligi standartlariga ko'ra, parvozlarni rejalashtirish va texnik xizmat ko'rsatish bo'limi har bir samolyotning aniq texnik parametrlarini bilishi shart.\n\nTizimda mustaqil kuchli entitiy sifatida samolyotlar (**Aircraft**) ro'yxatga olinadi. Har bir samolyot xalqaro fuqaro aviatsiyasi qoidalariga muvofiq quyruq raqami (`tailNo`) orqali bir qiymatli identifikatsiyalanadi va bu uning Birlamchi Kaliti {PK} hisoblanadi.\n\nBundan tashqari, samolyotning ishlab chiqaruvchi korxonasi (`manufacturer`), aniq modifikatsiya modeli (`model`) hamda maksimal yo'lovchi sig'imi (`capacity`) saqlanadi. Barcha xususiyatlar bevosita havo kemasining o'ziga tegishlidir.",
    w1_inst: "Polotnoda 'Aircraft' kuchli entitiysini yarating, uning 'tailNo' birlamchi kalitini {PK} belgilang va 'model', 'manufacturer', 'capacity' atributlarini qo'shing.",
    w2_subs: ["PassengerPlane", "CargoPlane"], w2_constraint: "{Mandatory, Or}",
    w2_subAttrs: { PassengerPlane: ["seatCount", "entertainmentSystem"], CargoPlane: ["maxPayloadTons", "cargoDoorType"] },
    w2_desc: "1-haftada yaratilgan **Aircraft** aviapark modelimiz asosida yangi ixtisoslashuv talablari paydo bo'ldi. Aviakompaniya o'z faoliyatini kengaytirib, havo kemalarini ikki toifaga ajratdi: yo'lovchi qatnovlari va yuk tashuvchi kargo reyslari.\n\nHar bir samolyot majburiy ravishda yo **PassengerPlane** yoki **CargoPlane** subklassi bo'lishi shart, lekin bir vaqtning o'zida ikkala turga tegishli bo'la olmaydi ({Mandatory, Or} cheklovi).\n\nYo'lovchi samolyotlari uchun o'rindiqlar soni (`seatCount`) va multimedia tizimi (`entertainmentSystem`) muhim. Kargo samolyotlarida esa maksimal yuk ko'tarish tonnaji (`maxPayloadTons`) hamda kargo lyuki turi (`cargoDoorType`) saqlanadi.",
    w2_inst: "Polotnodagi mavjud 'Aircraft' superklassi ostida {Mandatory, Or} cheklovli 'PassengerPlane' va 'CargoPlane' subklasslarini ISA uchburchagi orqali joylashtiring."
  },
  {
    id: 2, sector: 1, domain: "Tibbiyot & Sog'liqni Saqlash", title: "Markaziy Shifoxona Bemorlar Reyestri",
    ent: "Patient", pk: "patientId", attrs: ["fullName", "dob", "bloodType", "phone"],
    client: "Dr. Aziza Rahimova", role: "Bosh Shifokor Muovini",
    w1_desc: "Ko'p tarmoqli tibbiyot markazida har kuni yuzlab fuqarolarga shoshilinch va rejali tibbiy yordam ko'rsatiladi. Shifokorlar xatolarini oldini olish va tibbiy sug'urta tizimi bilan integratsiyalashish uchun bemorlarning yagona elektron reyestrini tuzish talab etiladi.\n\nTizimning asosiy ob'yekti — Bemor (**Patient**) entitiysidir. Har bir murojaat qilgan fuqaroga tibbiy karta ochiladi va unga takrorlanmas raqamli identifikator (`patientId`) biriktiriladi. Bu maydon Birlamchi Kalit {PK} vazifasini bajaradi.\n\nTibbiy ko'rik jarayonida bemorning to'liq ismi-sharifi (`fullName`), tug'ilgan sanasi (`dob`), shoshilinch yordam uchun qon guruhi (`bloodType`) hamda aloqa telefoni (`phone`) majburiy tartibda kiritiladi.",
    w1_inst: "Polotnoda 'Patient' entitiysini yarating, 'patientId' ga {PK} maqomini bering va bemor ma'lumotlarini to'g'ri shakllantiring.",
    w2_subs: ["InPatient", "OutPatient"], w2_constraint: "{Mandatory, Or}",
    w2_subAttrs: { InPatient: ["bedNumber", "admissionDate"], OutPatient: ["clinicVisitDate", "doctorNotes"] },
    w2_desc: "1-haftada yaratilgan **Patient** modeli shifoxona faoliyatini to'liq qamrab olishi uchun EER darajasiga ko'tarilishi lozim. Klinika davolash shakliga ko'ra bemorlarni ikki toifaga ajratadi.\n\nHar bir bemor majburiy ravishda yo statsionar yotuvchi (**InPatient**), yoki qatnovchi ambulator bemor (**OutPatient**) toifasiga mansub bo'lishi shart ({Mandatory, Or}).\n\nInPatient uchun shifoxonadagi koyka raqami (`bedNumber`) va yotqizilgan sana (`admissionDate`) kiritiladi. OutPatient uchun esa poliklinikaga navbatdagi tashrif sanasi (`clinicVisitDate`) va shifokor ko'rigi xulosasi (`doctorNotes`) qayd etiladi.",
    w2_inst: "'Patient' superklassidan {Mandatory, Or} qoidasi bilan 'InPatient' va 'OutPatient' subklasslarini hosil qiling."
  },
  {
    id: 3, sector: 1, domain: "Oliy Ta'lim", title: "Universitet Talabalar Akademik Reyestri",
    ent: "Student", pk: "studentId", attrs: ["firstName", "lastName", "email", "gpa"],
    client: "Bobur Mansurov", role: "Akademik Registrator (Registrar)",
    w1_desc: "Xalqaro standartlarda faoliyat yurituvchi universitetda talabalarning o'quv natijalari, GPA ko'rsatkichlari va stipendiya taqsimotini avtomatlashtirish rejalashtirilmoqda. Har bir qabul qilingan abituriyent to'g'risida to'liq ma'lumot saqlanishi shart.\n\nUniversitet axborot tizimining negizini Talaba (**Student**) entitiysi tashkil etadi. Har bir talabaga dekanat tomonidan rasmiy talabalik guvohnomasi kodi (`studentId`) taqdim etiladi va u jadvalning Birlamchi Kaliti {PK} bo'ladi.\n\nTalabaning shaxsiy ma'lumotlari sifatida ismi (`firstName`), familiyasi (`lastName`), rasmiy korporativ elektron pochtasi (`email`) hamda umumiy o'zlashtirish o'rtacha balli (`gpa`) saqlanadi.",
    w1_inst: "'Student' entitiysini polotnoga joylashtiring, 'studentId' ni {PK} qilib, talaba atributlarini belgilang.",
    w2_subs: ["Undergraduate", "Postgraduate"], w2_constraint: "{Mandatory, Or}",
    w2_subAttrs: { Undergraduate: ["highSchoolDiploma", "creditsCompleted"], Postgraduate: ["bachelorDegreeNo", "thesisTopic"] },
    w2_desc: "Universitetda ta'lim bosqichlarini qat'iy ajratish maqsadida 1-haftada yaratilgan **Student** modelini EER darajasida ixtisoslashtirish talab etilmoqda.\n\nHar bir talaba mutlaqo yo bakalavriat (**Undergraduate**) yoki magistratura (**Postgraduate**) bosqichida tahsil oladi ({Mandatory, Or}).\n\nBakalavrlarda maktab attestati raqami (`highSchoolDiploma`) va to'plangan kreditlar (`creditsCompleted`) qayd etiladi. Magistrlarda esa avvalgi bakalavr diplomi kodi (`bachelorDegreeNo`) hamda dissertatsiya mavzusi (`thesisTopic`) saqlanadi.",
    w2_inst: "'Student' superklassiga {Mandatory, Or} cheklovi bilan 'Undergraduate' va 'Postgraduate' subklasslarini ISA orqali ulang."
  },
  {
    id: 4, sector: 1, domain: "Kutubxona & Fond", title: "Davlat Ilmiy Kutubxonasi Kitob Fondi",
    ent: "Book", pk: "isbn", attrs: ["title", "author", "publishYear", "genre"],
    client: "Gulnora Karimova", role: "Bosh Bibliograf",
    w1_desc: "Respublika ilmiy-axborot kutubxona markazi yarim milliondan ortiq kitob fondini raqamli kataloglashtirish ishlarini olib bormoqda. O'quvchilar va ilmiy tadqiqotchilar kitoblarni tez va aniq topishlari uchun yagona elektron inventar talab etiladi.\n\nTizimda har bir nashr Kitob (**Book**) mustaqil entitiysi sifatida aks ettiriladi. Butun dunyoda nashriyot standartiga ko'ra kitoblar xalqaro standart raqami (`isbn`) bilan ro'yxatga olinadi va bu maydon Birlamchi Kalit {PK} vazifasini bajaradi.\n\nKatalog ma'lumotlarida kitobning to'liq nomi (`title`), asosiy muallifi (`author`), chop etilgan yili (`publishYear`) va adabiy janri (`genre`) qayd qilinadi.",
    w1_inst: "Polotnoda 'Book' entitiysini yarating, 'isbn' ni {PK} qilib belgilang va barcha atributlarni kiriting.",
    w2_subs: ["EBook", "PrintBook"], w2_constraint: "{Mandatory, Or}",
    w2_subAttrs: { EBook: ["fileFormat", "fileSizeBytes"], PrintBook: ["shelfLocation", "coverType"] },
    w2_desc: "Kutubxona raqamli transformatsiyani boshlab, an'anaviy bosma kitoblar bilan bir qatorda elektron resurslarni ham xarid qilmoqda. 1-haftadagi umumiy **Book** entitiysi ikkala turdagi kitoblarni ajratish uchun yetarli bo'lmay qoldi.\n\nShu sababli, **Book** superklassidan ikkita maxsus subklass ajratildi: elektron kitoblar (**EBook**) va bosma qog'oz kitoblar (**PrintBook**). Har bir nashr bu turlardan aynan bittasi hisoblanadi ({Mandatory, Or}).\n\nEBook uchun fayl formati (`fileFormat`) va hajmi (`fileSizeBytes`) saqlanadi. PrintBook uchun esa kutubxona zolidagi javon indeksi (`shelfLocation`) va muqova turi (`coverType`) belgilanadi.",
    w2_inst: "'Book' entitiyasini superklass qilib, unga 'EBook' va 'PrintBook' subklasslarini {Mandatory, Or} cheklovi bilan joylashtiring."
  },
  {
    id: 5, sector: 1, domain: "Avtomobilsozlik & Dilerlik", title: "Avtosalon Transport Vositalari Reyestri",
    ent: "Vehicle", pk: "vin", attrs: ["make", "model", "prodYear", "price"],
    client: "Rustam Aliyev", role: "Avtosalon Savdo Direktori",
    w1_desc: "Rasmiy avtomobil dileri xarid qilingan va sotuvga qo'yilgan transport vositalarini kuzatib boruvchi yagona dilerlik tizimini ishlab chiqmoqda. Mijozlarga avtomobilning ishlab chiqarilgan yili, brendi va narxi shaffof ko'rsatilishi kerak.\n\nModelda transport vositalari **Vehicle** entitiysi orqali ifodalanadi. Har bir avtomobilning shassi qismiga zavod tomonidan 17 belgidan iborat noyob VIN-kod (`vin`) uriladi va bu maydon Birlamchi Kalit {PK} hisoblanadi.\n\nShuningdek, avtomobilning ishlab chiqaruvchi brendi (`make`), modeli (`model`), konveyerdan chiqqan yili (`prodYear`) hamda sotuv narxi (`price`) jadval atributlari sifatida saqlanadi.",
    w1_inst: "'Vehicle' entitiysini yarating, 'vin' maydoniga {PK} belgisini qo'ying va uning texnik xususiyatlarini joylashtiring.",
    w2_subs: ["ElectricVehicle", "CombustionCar"], w2_constraint: "{Mandatory, Or}",
    w2_subAttrs: { ElectricVehicle: ["batteryKwh", "chargingTimeHrs"], CombustionCar: ["fuelTankLiters", "emissionClass"] },
    w2_desc: "Ekologik toza transportlar ulushi oshib borayotganligi sababli, 1-haftada yaratilgan **Vehicle** avtomobillar katalogini dvigatel turi bo'yicha ajratish talab etilmoqda.\n\nAvtosalonda sotiladigan barcha avtomobillar yo to'liq elektr toki bilan yuruvchi elektromobil (**ElectricVehicle**) yoki an'anaviy ichki yonuv dvigatelli mashina (**CombustionCar**) bo'lishi shart ({Mandatory, Or}).\n\nElectricVehicle subklassi akkumulyator sig'imi (`batteryKwh`) va quvvatlanish vaqti (`chargingTimeHrs`) bilan xarakterlanadi. CombustionCar esa yoqilg'i baki hajmi (`fuelTankLiters`) va ekologik zarar darajasi (`emissionClass`) bilan tavsiflanadi.",
    w2_inst: "'Vehicle' superklassidan {Mandatory, Or} cheklovi asosida 'ElectricVehicle' va 'CombustionCar' subklasslarini yarating."
  },
  {
    id: 6, sector: 1, domain: "Bank & Moliya", title: "Tijorat Banki Depozit va Hisoblar Tizimi",
    ent: "BankAccount", pk: "accountNo", attrs: ["balance", "currency", "openDate", "branchCode"],
    client: "Jamshid Qodirov", role: "Bosh Buxgalter",
    w1_desc: "Mamlakatning yirik banki mijozlar mablag'larini xavfsiz saqlash va tranzaksiyalarni boshqarish maqsadida asosiy hisob raqamlar modulini modernizatsiya qilmoqda.\n\nTizimda asosiy moliyaviy birlik — Bank hisob raqami (**BankAccount**) hisoblanadi. Har bir ochilgan hisobga 20 xonali xalqaro IBAN standartidagi noyob raqam (`accountNo`) beriladi va bu Birlamchi Kalit {PK} hisoblanadi.\n\nHisobning joriy pul qoldig'i (`balance`), valyuta turi (`currency`: UZS, USD, EUR), hisob ochilgan sana (`openDate`) hamda xizmat ko'rsatuvchi filial kodi (`branchCode`) qayd etiladi.",
    w1_inst: "'BankAccount' entitiysini polotnoga qo'shing, 'accountNo' ni {PK} qilib belgilang va moliyaviy atributlarni kiriting.",
    w2_subs: ["SavingsAccount", "CheckingAccount"], w2_constraint: "{Mandatory, Or}",
    w2_subAttrs: { SavingsAccount: ["interestRatePercent", "minBalance"], CheckingAccount: ["overdraftLimit", "checkbookNo"] },
    w2_desc: "1-haftadagi **BankAccount** modeli barcha hisoblarni bir xilda saqlaganligi sababli, bank marketing bo'limi ularni depozit jamg'arma va joriy biznes hisoblarga ajratishni taklif qildi.\n\nHar bir bank hisobi yo foiz to'lanadigan jamg'arma hisobi (**SavingsAccount**) yoki to'lovlar uchun joriy hisob (**CheckingAccount**) bo'lishi shart ({Mandatory, Or}).\n\nSavingsAccount uchun yillik foiz stavkasi (`interestRatePercent`) va minimal daxlsiz qoldiq (`minBalance`) saqlanadi. CheckingAccount uchun esa overdraft limiti (`overdraftLimit`) va chek daftarchasi raqami (`checkbookNo`) belgilanadi.",
    w2_inst: "'BankAccount' superklassiga 'SavingsAccount' va 'CheckingAccount' subklasslarini {Mandatory, Or} qoidasi bilan ulang."
  },
  {
    id: 7, sector: 1, domain: "Mehmonxona & Turizm", title: "Besh Yulduzli Mehmonxona Xonalar Fondi",
    ent: "HotelRoom", pk: "roomNo", attrs: ["roomType", "pricePerNight", "floorNo", "capacity"],
    client: "Malika Yusupova", role: "Mehmonxona Bosh Boshqaruvchisi",
    w1_desc: "Xalqaro darajadagi mehmonxona majmuasi xonalarni onlayn bron qilish va mehmonlarni joylashtirishni to'liq avtomatlashtirishni maqsad qilgan.\n\nMehmonxona binosidagi har bir turar joy **HotelRoom** entitiysi orqali ifodalanadi. Har bir xonaning eshigida aks etgan unikal xona raqami (`roomNo`) Birlamchi Kalit {PK} hisoblanadi.\n\nXonaning toifasi (`roomType`), bir kecha-kunduzlik narxi (`pricePerNight`), nechanchi qavatda joylashgani (`floorNo`) hamda maksimal sig'ishi mumkin bo'lgan mehmonlar soni (`capacity`) kiritiladi.",
    w1_inst: "'HotelRoom' entitiysini yarating, 'roomNo' ga {PK} maqomini bering va narx hamda sig'im atributlarini joylang.",
    w2_subs: ["StandardRoom", "PresidentialSuite"], w2_constraint: "{Mandatory, Or}",
    w2_subAttrs: { StandardRoom: ["singleBedCount", "hasBalcony"], PresidentialSuite: ["livingRoomCount", "hasJacuzzi"] },
    w2_desc: "1-haftada yaratilgan **HotelRoom** modeliga yuqori darajadagi mehmonlarga xizmat ko'rsatish talablari qo'shildi. Mehmonxona ma'muriyati oddiy standart xonalar bilan hashamatli lyukslarni alohida boshqaradi.\n\nHar bir xona yo oddiy standart xona (**StandardRoom**) yoki prezident lyuks xonasi (**PresidentialSuite**) bo'ladi ({Mandatory, Or}).\n\nStandardRoom subklassi bir kishilik karavotlar soni (`singleBedCount`) va balkon borligi (`hasBalcony`) bilan ifodalanadi. PresidentialSuite esa alohida mehmonxonalar soni (`livingRoomCount`) va jakuzi mavjudligi (`hasJacuzzi`) bilan xarakterlanadi.",
    w2_inst: "'HotelRoom' superklassidan {Mandatory, Or} ierarxiyasi bilan 'StandardRoom' va 'PresidentialSuite' subklasslarini hosil qiling."
  },
  {
    id: 8, sector: 1, domain: "Restoran & Katering", title: "Premium Restoran Taomnomasi",
    ent: "MenuItem", pk: "itemId", attrs: ["name", "category", "price", "calories"],
    client: "Otabek Sodiqov", role: "Bosh Oshpaz (Brand Chef)",
    w1_desc: "Hashamatli restoran mijozlar uchun elektron planshet menyu va oshxona avtomatlashtirish tizimini joriy qilmoqda. Har bir taomning tarkibi va narxi aniq saqlanishi kerak.\n\nMenyudagi har bir taom yoki ichimlik **MenuItem** entitiysi hisoblanadi. Oshxona texnologik xaritasida har bir taomga berilgan raqamli kod (`itemId`) Birlamchi Kalit {PK} vazifasini o'taydi.\n\nTaomning rasmiy nomi (`name`), menyu bo'limi toifasi (`category`: Issiq taom, Salat, Desert), sotuv narxi (`price`) hamda parhez nazorati uchun uning umumiy kaloriyasi (`calories`) ko'rsatiladi.",
    w1_inst: "'MenuItem' entitiysini tuzing, 'itemId' ni {PK} qilib, taom nomi, narxi va kaloriyasini belgilang.",
    w2_subs: ["VegetarianDish", "MeatDish"], w2_constraint: "{Mandatory, Or}",
    w2_subAttrs: { VegetarianDish: ["organicCertified", "dairyFree"], MeatDish: ["meatType", "cookTimeMin"] },
    w2_desc: "Mijozlarning maxsus ovqatlanish odatlarini inobatga olgan holda, 1-haftadagi **MenuItem** taomnoma modelini go'shtli va o'simlik asosidagi toifalarga ajratish zaruriyati tug'ildi.\n\nBarcha taomlar qat'iy ravishda yo vegetarian taom (**VegetarianDish**) yoki an'anaviy go'shtli taom (**MeatDish**) hisoblanadi ({Mandatory, Or}).\n\nVegetarianDish uchun organik sertifikati mavjudligi (`organicCertified`) va sutsiz ekanligi (`dairyFree`) qayd etiladi. MeatDish uchun esa ishlatilgan go'sht turi (`meatType`: Mol go'shti, Qo'y go'shti, Parranda) va pishirish vaqti (`cookTimeMin`) belgilanadi.",
    w2_inst: "'MenuItem' superklassi ostida {Mandatory, Or} cheklovi bilan 'VegetarianDish' va 'MeatDish' subklasslarini ISA orqali ulang."
  },
  {
    id: 9, sector: 1, domain: "IT & Dasturiy Ta'minot", title: "IT Kompaniyasi Muhandislik Shtati",
    ent: "Developer", pk: "devId", attrs: ["fullName", "role", "techStack", "salary"],
    client: "Farhod Ergashev", role: "Texnik Direktor (CTO)",
    w1_desc: "Xalqaro IT konsalting kompaniyasi yuzlab dasturchilar va muhandislarning loyihalarga biriktirilishi hamda ish haqini hisoblash tizimini loyihalashtirmoqda.\n\nKompaniyaning asosiy intellektual aktivi — Dasturchi (**Developer**) entitiysidir. Kadrlar bo'limi har bir dasturchiga xodimning ichki raqamini (`devId`) biriktiradi va bu Birlamchi Kalit {PK} bo'ladi.\n\nXodimning to'liq ismi (`fullName`), lavozimi (`role`: Junior, Middle, Senior), asosiy dasturlash texnologiyalari to'plami (`techStack`) hamda oylik bazaviy maoshi (`salary`) saqlanadi.",
    w1_inst: "'Developer' entitiysini yarating, 'devId' ga {PK} bering va xodimning texnik ma'lumotlarini to'ldiring.",
    w2_subs: ["FrontendDev", "BackendDev"], w2_constraint: "{Mandatory, Or}",
    w2_subAttrs: { FrontendDev: ["uiFramework", "designSkillLevel"], BackendDev: ["dbEngine", "cloudCertified"] },
    w2_desc: "Kompaniya loyihalarni taqsimlashda dasturchilarning tor ixtisosligini aniq belgilash uchun 1-haftadagi **Developer** modelini EER darajasida ikkiga ajratmoqda.\n\nHar bir muhandis yo foydalanuvchi interfeysi ustasi (**FrontendDev**), yoki server va ma'lumotlar bazasi me'mori (**BackendDev**) hisoblanadi ({Mandatory, Or}).\n\nFrontendDev subklassi asosiy UI kutubxonasi (`uiFramework`: React, Vue) va dizayn ko'nikmasi (`designSkillLevel`) bilan belgilanadi. BackendDev esa asosiy ma'lumotlar bazasi (`dbEngine`: PostgreSQL, Oracle) va bulutli sertifikati (`cloudCertified`) bilan xarakterlanadi.",
    w2_inst: "'Developer' superklassidan {Mandatory, Or} cheklovi asosida 'FrontendDev' va 'BackendDev' subklasslarini yarating."
  },
  {
    id: 10, sector: 1, domain: "E-Commerce & Savdo", title: "Onlayn Gipermarket Tovar Katalogi",
    ent: "Product", pk: "sku", attrs: ["title", "price", "stockQty", "weightKg"],
    client: "Shahnoza Karimova", role: "Mahsulot Bosh Menejeri",
    w1_desc: "Mamlakatning yirik onlayn marketpleysi ombordagi millionlab tovarlarni kuzatish va buyurtmalarni shakllantirish uchun mustahkam katalog bazasini qurmoqda.\n\nKatalogdagi har bir mahsulot **Product** entitiysi orqali saqlanadi. Ombor inventarizatsiyasida har bir mahsulot turiga noyob SKU artikul kodi (`sku`) beriladi va bu Birlamchi Kalit {PK} hisoblanadi.\n\nMahsulotning savdo nomi (`title`), chakana narxi (`price`), ombordagi mavjud soni (`stockQty`) hamda yetkazib berish xarajatini hisoblash uchun og'irligi (`weightKg`) qayd etiladi.",
    w1_inst: "'Product' entitiysini tuzing, 'sku' maydonini {PK} qiling va mahsulot narxi hamda qoldiqlarini kiriting.",
    w2_subs: ["DigitalProduct", "PhysicalProduct"], w2_constraint: "{Mandatory, Or}",
    w2_subAttrs: { DigitalProduct: ["downloadUrl", "licenseKeyCount"], PhysicalProduct: ["dimensionsCm", "shippingFee"] },
    w2_desc: "Marketpleysda moddiy tovarlar bilan bir qatorda elektron kitoblar va litsenziyalar ham sotila boshladi. 1-haftadagi umumiy **Product** modeli elektron tovarlar logistikasiga to'g'ri kelmay qoldi.\n\nMahsulotlar qat'iy ravishda yo raqamli tovar (**DigitalProduct**) yoki jismoniy moddiy tovar (**PhysicalProduct**) bo'ladi ({Mandatory, Or}).\n\nDigitalProduct subklassi yuklab olish havolasi (`downloadUrl`) va litsenziya kalitlari soni (`licenseKeyCount`) bilan tavsiflanadi. PhysicalProduct esa qadoq o'lchamlari (`dimensionsCm`) va kuryerlik yetkazib berish narxi (`shippingFee`) bilan belgilanadi.",
    w2_inst: "'Product' superklassiga 'DigitalProduct' va 'PhysicalProduct' subklasslarini {Mandatory, Or} qoidasi bilan ulang."
  },
  {
    id: 11, sector: 1, domain: "Kino & Ko'ngilochar", title: "Kinoteatrlar Tarmog'i Filmlar Jadvali",
    ent: "Movie", pk: "movieId", attrs: ["title", "director", "durationMin", "ageRating"],
    client: "Akmal Shokirov", role: "Kinoprokat Boshqaruvchisi",
    w1_desc: "Raqamli kinoteatrlar tarmog'i zallarda namoyish etilayotgan filmlarni seanslarga taqsimlash va chipta sotishni avtomatlashtirish uchun yagona filmlar bazasini shakllantirmoqda.\n\nTizimda film asari **Movie** entitiysi hisoblanadi. Har bir film prokat litsenziyasi raqami (`movieId`) orqali bir qiymatli identifikatsiyalanadi va bu Birlamchi Kalit {PK} hisoblanadi.\n\nFilmning rasmiy ekrandagi nomi (`title`), bosh rejissori (`director`), davomiyligi daqiqalarda (`durationMin`) hamda tomoshabinlar yosh chegarasi (`ageRating`: PG-13, R) qayd etiladi.",
    w1_inst: "'Movie' entitiysini yarating, 'movieId' ga {PK} bering va film davomiyligi hamda reytingini belgilang.",
    w2_subs: ["FeatureFilm", "DocumentaryFilm"], w2_constraint: "{Mandatory, Or}",
    w2_subAttrs: { FeatureFilm: ["boxOfficeMillions", "aspectRatio"], DocumentaryFilm: ["historicalTopic", "narratorName"] },
    w2_desc: "Kinoteatr repertuarida badiiy filmlar va ilmiy-ommabop hujjatli filmlar namoyishi keskin farqlanadi. 1-haftadagi **Movie** entitiyasini EER darajasida chuqurlashtirish talab qilinmoqda.\n\nHar bir namoyish etilayotgan film yo to'liq metrajli badiiy film (**FeatureFilm**) yoki hujjatli film (**DocumentaryFilm**) toifasiga kirishi shart ({Mandatory, Or}).\n\nFeatureFilm uchun jahon kassa yig'imi (`boxOfficeMillions`) va ekran proporsiyasi (`aspectRatio`) saqlanadi. DocumentaryFilm uchun esa tarixiy/ilmiy mavzu yo'nalishi (`historicalTopic`) va matn o'quvchi diktor ismi (`narratorName`) belgilanadi.",
    w2_inst: "'Movie' superklassidan {Mandatory, Or} cheklovi bilan 'FeatureFilm' va 'DocumentaryFilm' subklasslarini hosil qiling."
  },
  {
    id: 12, sector: 1, domain: "Farmatsevtika & Dorixona", title: "Markaziy Dorixona Dori Vositalari Inventari",
    ent: "Medicine", pk: "barcode", attrs: ["name", "dosageMg", "manufacturer", "expDate"],
    client: "Umida Zokirova", role: "Bosh Provisor",
    w1_desc: "Yirik dorixonalar tarmog'ida dori-darmonlar sifati, saqlash muddati va qonuniy sertifikatlarini qat'iy nazorat qilish tizimi ishlab chiqilmoqda.\n\nTizimning asosiy ob'yekti — Dori vositasi (**Medicine**) entitiysidir. Har bir dori qadog'idagi xalqaro shtrix-kod raqami (`barcode`) Birlamchi Kalit {PK} hisoblanadi.\n\nDori vositasining savdo nomi (`name`), faol modda dozasi milligrammda (`dosageMg`), ishlab chiqaruvchi farmatsevtika zavodi (`manufacturer`) hamda yaroqlilik muddati (`expDate`) saqlanadi.",
    w1_inst: "'Medicine' entitiysini yarating, 'barcode' ni {PK} qiling va doza hamda muddat atributlarini joylashtiring.",
    w2_subs: ["PrescriptionDrug", "OtcDrug"], w2_constraint: "{Mandatory, Or}",
    w2_subAttrs: { PrescriptionDrug: ["controlledSubstanceSchedule", "doctorSpecialtyReq"], OtcDrug: ["flavor", "ageLimitYears"] },
    w2_desc: "Sog'liqni saqlash vazirligi talabiga binoan dorixona retsept bilan beriladigan kuchli ta'sir qiluvchi dorilar va retseptsiz sotiladigan vositalarni qat'iy ajratishi shart.\n\n1-haftadagi **Medicine** superklassi ikki toifaga bo'linadi: retseptli dorilar (**PrescriptionDrug**) va retseptsiz dorilar (**OtcDrug**). Har bir dori vositasi bu guruhlardan biriga kirishi shart ({Mandatory, Or}).\n\nPrescriptionDrug subklassi nazorat ro'yxati toifasi (`controlledSubstanceSchedule`) va talab etiladigan shifokor mutaxassisligi (`doctorSpecialtyReq`) bilan belgilanadi. OtcDrug esa ta'm qo'shimchasi (`flavor`) va yosh chegarasi (`ageLimitYears`) bilan xarakterlanadi.",
    w2_inst: "'Medicine' superklassiga 'PrescriptionDrug' va 'OtcDrug' subklasslarini {Mandatory, Or} cheklovi bilan ulang."
  },
  {
    id: 13, sector: 1, domain: "Logistika & Yuk Tashish", title: "Trans-Kontinental Yuk Tashish Avtoparki",
    ent: "CargoTruck", pk: "plateNo", attrs: ["capacityTons", "fuelType", "mileageKm", "status"],
    client: "Sanjar Normatov", role: "Logistika Floti Rahbari",
    w1_desc: "Xalqaro tranzit yo'laklarida yuk tashiydigan korxona o'zining magistral tyagach va yuk mashinalarini dispetcherlik nazoratiga olmoqda.\n\nTizimda yuk mashinalari **CargoTruck** entitiysi sifatida qayd etiladi. Davlat avtomobil nazorati tomonidan berilgan davlat raqami belgisi (`plateNo`) Birlamchi Kalit {PK} hisoblanadi.\n\nMashinaning ruxsat etilgan to'liq yuk ko'tarish quvvati tonnada (`capacityTons`), yoqilg'i turi (`fuelType`: Dizel, LNG), umumiy bosib o'tgan masofasi (`mileageKm`) hamda joriy texnik holati (`status`: Safarda, Ta'mirda) saqlanadi.",
    w1_inst: "'CargoTruck' entitiysini polotnoga qo'shing, 'plateNo' ga {PK} bering va uning yuk ko'tarish atributlarini belgilang.",
    w2_subs: ["RefrigeratedTruck", "FlatbedTruck"], w2_constraint: "{Mandatory, Or}",
    w2_subAttrs: { RefrigeratedTruck: ["minTempCelsius", "compressorPower"], FlatbedTruck: ["bedLengthMeters", "maxAxleWeight"] },
    w2_desc: "Yuk tashishda tez buziluvchi oziq-ovqatlar va og'ir qurilish materiallari alohida transport vositalarini talab qiladi. Shu bois 1-haftadagi **CargoTruck** parki EER subklasslariga ajratildi.\n\nHar bir yuk mashinasi yo refrijeratorli sovituvchi fura (**RefrigeratedTruck**) yoki ochiq platformali bortli mashina (**FlatbedTruck**) bo'lishi shart ({Mandatory, Or}).\n\nRefrigeratedTruck uchun minimal ushlab turiladigan harorat (`minTempCelsius`) va sovitgich quvvati (`compressorPower`) yoziladi. FlatbedTruck uchun esa platforma uzunligi metrda (`bedLengthMeters`) va o'qqa tushadigan maksimal yuklama (`maxAxleWeight`) belgilanadi.",
    w2_inst: "'CargoTruck' superklassidan {Mandatory, Or} qoidasi bilan 'RefrigeratedTruck' va 'FlatbedTruck' subklasslarini hosil qiling."
  },
  {
    id: 14, sector: 1, domain: "Sport & Fitnes", title: "Premium Fitnes Klub A'zolari Reyestri",
    ent: "ClubMember", pk: "memberCardNo", attrs: ["fullName", "membershipType", "expiryDate", "phone"],
    client: "Nilufar Rahimova", role: "Mijozlarga Xizmat Ko'rsatish Menejeri",
    w1_desc: "Zamonaviy sog'lomlashtirish va fitnes klubi a'zolik kartalari hisobini yuritish hamda turniketlardan o'tishni boshqarish uchun a'zolar bazasini yangilamoqda.\n\nTizimning markaziy entitiysi — Klub a'zosi (**ClubMember**) hisoblanadi. Mijozga klubga a'zo bo'lganda topshiriladigan RFID plastik karta raqami (`memberCardNo`) Birlamchi Kalit {PK} hisoblanadi.\n\nA'zoning to'liq ismi-sharifi (`fullName`), a'zolik tarifi (`membershipType`: Standart, Gold, Platinum), shartnoma tugash sanasi (`expiryDate`) hamda telefon raqami (`phone`) kiritiladi.",
    w1_inst: "'ClubMember' entitiysini polotnoda yarating, 'memberCardNo' ni {PK} qiling va a'zolik ma'lumotlarini to'ldiring.",
    w2_subs: ["VipMember", "RegularMember"], w2_constraint: "{Mandatory, Or}",
    w2_subAttrs: { VipMember: ["personalTrainerId", "spaAccessLevel"], RegularMember: ["lockerAssigned", "timeSlot"] },
    w2_desc: "Fitnes klub mijozlarga individual yondashuvni yo'lga qo'yish maqsadida 1-haftadagi **ClubMember** bazasini VIP va oddiy a'zolarga ajratmoqda.\n\nHar bir klub a'zosi majburiy ravishda yo **VipMember** yoki **RegularMember** maqomiga ega bo'lishi shart ({Mandatory, Or}).\n\nVipMember subklassiga shaxsiy fitnes-murabbiy biriktiriladi (`personalTrainerId`) va spa-hududiga kirish darajasi (`spaAccessLevel`) belgilanadi. RegularMember uchun esa belgilangan shaxsiy shkafcha raqami (`lockerAssigned`) hamda tashrif vaqt oraliqlari (`timeSlot`: Tonggi, Kunduzgi) qayd etiladi.",
    w2_inst: "'ClubMember' superklassiga 'VipMember' va 'RegularMember' subklasslarini {Mandatory, Or} cheklovi bilan bog'lang."
  },
  {
    id: 15, sector: 1, domain: "Yashil Energetika", title: "Quyosh Fotoelektr Stansiyasi Invertorlari",
    ent: "SolarInverter", pk: "serialNo", attrs: ["peakPowerKw", "voltageInput", "installDate", "efficiency"],
    client: "Davron Karimov", role: "Bosh Energetik Muhandis",
    w1_desc: "Yuzlab gektar maydonga ega yirik quyosh fotoelektr stansiyasida quyosh panellaridan kelayotgan o'zgarmas tokni o'zgaruvchan tarmoq tokiga aylantiruvchi invertorlar nazorati amalga oshiriladi.\n\nStansiya uskunalar bazasining asosiy elementi — Quyosh invertori (**SolarInverter**) entitiysidir. Ishlab chiqaruvchi zavod tomonidan korpusga urilgan seriya raqami (`serialNo`) Birlamchi Kalit {PK} hisoblanadi.\n\nInvertorning maksimal quvvati kilovatda (`peakPowerKw`), kirish kuchlanishi voltda (`voltageInput`), stansiyada ishga tushirilgan sana (`installDate`) hamda foydali ish koeffitsiyenti (`efficiency`: 98.5%) kiritiladi.",
    w1_inst: "'SolarInverter' entitiysini yarating, 'serialNo' maydonini {PK} qiling va texnik parametrlarini saqlang.",
    w2_subs: ["CentralInverter", "MicroInverter"], w2_constraint: "{Mandatory, Or}",
    w2_subAttrs: { CentralInverter: ["transformerRatingKva", "coolingSystem"], MicroInverter: ["mpptChannels", "efficiencyRating"] },
    w2_desc: "Quyosh elektr stansiyasining markaziy podstansiyasida va panel bloklarida invertorlar arxitekturasi turlicha. 1-haftadagi **SolarInverter** modeli texnik xizmat ko'rsatish uchun ikkita subklassga bo'linishi kerak.\n\nHar bir invertor yo markaziy yuqori quvvatli stansiya invertori (**CentralInverter**) yoki kichik panel osti mikro-invertori (**MicroInverter**) hisoblanadi ({Mandatory, Or}).\n\nCentralInverter subklassi transformator quvvati kVA da (`transformerRatingKva`) va majburiy sovitish tizimi turi (`coolingSystem`) bilan tavsiflanadi. MicroInverter esa mustaqil MPPT kanallari soni (`mpptChannels`) va konversiya samaradorligi indeksi (`efficiencyRating`) bilan belgilanadi.",
    w2_inst: "'SolarInverter' superklassidan {Mandatory, Or} qoidasi bilan 'CentralInverter' va 'MicroInverter' subklasslarini hosil qiling."
  }
];

// We will generate the remaining 135 domains systematically through comprehensive domain generators.
console.log(`Loaded ${RAW_DOMAINS.length} detailed domains. Generating complete set of 150 scenarios...`);
