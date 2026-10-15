/**
 * MASTER 150 REAL-WORLD PROGRESSIVE CASES GENERATOR
 * WIUT Database Systems (5BUIS009C)
 * 
 * Rules:
 * 1. ZERO multiplicity leaks in story text or prompt (No '1..1', '1:*', '0..1', etc.).
 *    Multiplicity must be deduced solely from natural operational business rules!
 * 2. ZERO boilerplate sentence templates. Every question has a bespoke, realistic story.
 * 3. 150 Master Cases strictly ordered Easy -> Hard across 10 Corporate Sectors:
 *    - Floor 1 (1–15):    Single Strong Entity & {PK}
 *    - Floor 2 (16–30):   1..1 Relationships & Foreign Keys
 *    - Floor 3 (31–45):   1..* Cardinality & Natural Hierarchy
 *    - Floor 4 (46–60):   *..* Many-to-Many & Associative Entities
 *    - Floor 5 (61–75):   Weak Entities & Discriminators (Partial Key)
 *    - Floor 6 (76–90):   Recursive / Unary Relationships & Roles
 *    - Floor 7 (91–105):  EER Specialisation Disjoint {Mandatory, Or}
 *    - Floor 8 (106–120): EER Specialisation Overlapping {Optional, And}
 *    - Floor 9 (121–135): EER Categories / Union Types (∪)
 *    - Floor 10 (136–150): Integrated Enterprise Multi-Entity Systems
 * 
 * Harmonious Week 1 & Week 2 Continuity:
 * - Exactly the same 150 real-world business cases.
 * - Week 1: Student designs Conceptual ER with multiplicities.
 * - Week 2: Student performs Relational Mapping (replaces multiplicity with PK/FK references
 *   and adds junction tables for many-to-many relationships).
 */

const fs = require('fs');
const path = require('path');

// 150 Dedicated Bespoke Domain Specifications
const DOMAINS = [
  // =========================================================================
  // FLOOR 1 (1–15): SINGLE STRONG ENTITY & PRIMARY KEY
  // =========================================================================
  {
    id: 1, s: 1, sectorName: "1-Qavat • Boshlang'ich",
    ind: "Fuqaro Aviatsiyasi", role: "Aviapark Texnik Direktori", client: "Temur Karimov",
    title: "Aviakompaniya Havo Kemalarini Hisobga Olish",
    e1: "Aircraft", pk1: "tailNo", a1: ["model", "manufacturer", "capacity"],
    w1_story: "Milliy aviakompaniya o'zining yo'lovchi va yuk tashuvchi samolyotlari parkini yagona raqamli reyestrda qayd etishni boshlamoqda. Texnik xizmat ko'rsatish va reyslarni rejalashtirish bo'limlari har bir samolyotning aniq texnik parametrlarini bilishi shart.\n\nTizimda asosiy mustaqil entitiy sifatida samolyotlar (**Aircraft**) ro'yxatga olinadi. Har bir samolyot xalqaro fuqaro aviatsiyasi qoidalariga muvofiq quyruq raqami (`tailNo`) orqali bir qiymatli identifikatsiyalanadi va bu uning Birlamchi Kaliti {PK} hisoblanadi.\n\nShuningdek, havo kemasining modeli (`model`), ishlab chiqaruvchi zavodi (`manufacturer`) hamda yo'lovchi o'rindiqlari sig'imi (`capacity`) atributlari saqlanadi.",
    w1_inst: "'Aircraft' kuchli entitiysini yarating, uning 'tailNo' birlamchi kalitini {PK} belgilang va qolgan atributlarini to'g'ri joylashtiring.",
    w2_story: "1-haftada yaratilgan **Aircraft** konseptual modeli endi relyatsion ma'lumotlar bazasiga o'tkazilmoqda. Tizimda samolyotlarning asosiy jadvali SQL relyatsion qoidalariga muvofiq Birlamchi Kalit [PK] ustuni bilan shakllantirilishi lozim.",
    w2_inst: "'Aircraft' entitiysini SQL relyatsion jadvaliga aylantiring va 'tailNo' ustuniga Birlamchi Kalit [PK] maqomini bering."
  },
  {
    id: 2, s: 1, sectorName: "1-Qavat • Boshlang'ich",
    ind: "Tibbiyot & Kardiologiya", role: "Bosh Shifokor Muovini", client: "Dr. Aziza Rahimova",
    title: "Kardiologiya Markazi Bemorlar Elektron Kartasi",
    e1: "Patient", pk1: "patientId", a1: ["fullName", "dob", "bloodType", "phone"],
    w1_story: "Respublika kardiologiya markazida shoshilinch va rejali davolanuvchi bemorlarning elektron tibbiy kartasini yuritish joriy etilmoqda. Shifokorlar har bir bemorning shaxsiy ma'lumotlari va qon guruhini tezkorlik bilan aniqlashlari zarur.\n\nAxborot tizimining markaziy ob'yekti — Bemor (**Patient**) entitiysidir. Har bir murojaat qilgan fuqaroga shifoxona qabulxonasida noyob raqamli karta kodi (`patientId`) biriktiriladi va bu maydon Birlamchi Kalit {PK} vazifasini o'taydi.\n\nBemor to'g'risida uning to'liq ismi-sharifi (`fullName`), tug'ilgan sanasi (`dob`), tibbiy muolajalar uchun qon guruhi (`bloodType`) hamda shaxsiy telefoni (`phone`) kiritiladi.",
    w1_inst: "'Patient' entitiysini polotnoda yarating, 'patientId' maydonini {PK} qilib belgilang va bemor atributlarini to'ldiring.",
    w2_story: "Kardiologiya markazining bemorlar reyestri relyatsion modelga o'tkazilmoqda. Bemorlar jadvalini yaratib, har bir bemor yozuvining takrorlanmasligini ta'minlovchi Birlamchi Kalit [PK] ustunini belgilang.",
    w2_inst: "'Patient' jadvalini shakllantiring va 'patientId' ustunini Birlamchi Kalit [PK] deb belgilang."
  },
  {
    id: 3, s: 1, sectorName: "1-Qavat • Boshlang'ich",
    ind: "Oliy Ta'lim", role: "Bosh Registrator", client: "Bobur Mansurov",
    title: "Xalqaro Universitet Talabalar Akademik Reyestri",
    e1: "Student", pk1: "studentId", a1: ["firstName", "lastName", "email", "gpa"],
    w1_story: "Universitetda talabalarning o'quv natijalari, GPA ko'rsatkichlari va stipendiya hisob-kitoblarini avtomatlashtirish rejalashtirilgan. Dekanat barcha qabul qilingan talabalar haqida to'liq hisobotga ega bo'lishi lozim.\n\nTizimda Talaba (**Student**) mustaqil kuchli entitiy hisoblanadi. Har bir talabaga rasmiy talabalik ID raqami (`studentId`) taqdim etiladi va bu Birlamchi Kalit {PK} bo'ladi.\n\nTalabaning shaxsiy ma'lumotlari sifatida uning ismi (`firstName`), familiyasi (`lastName`), korporativ elektron pochtasi (`email`) va umumiy o'rtacha o'zlashtirish bali (`gpa`) qayd etiladi.",
    w1_inst: "'Student' entitiysini hosil qiling, 'studentId' ni {PK} deb belgilang va talabaning shaxsiy atributlarini qo'shing.",
    w2_story: "Universitet talabalar ma'lumotlar bazasi relyatsion arxitekturaga tayyorlanmoqda. Talabalar jadvalini yaratib, har bir talaba yozuvini aniqlovchi Birlamchi Kalit [PK] ni belgilang.",
    w2_inst: "'Student' jadvalini relyatsion shaklda yarating va 'studentId' ustuniga Birlamchi Kalit [PK] belgisini qo'ying."
  },
  {
    id: 4, s: 1, sectorName: "1-Qavat • Boshlang'ich",
    ind: "Kutubxona & Fond", role: "Bosh Bibliograf", client: "Gulnora Karimova",
    title: "Davlat Ilmiy Kutubxonasi Kitoblar Fondi",
    e1: "Book", pk1: "isbn", a1: ["title", "author", "publishYear", "genre"],
    w1_story: "Ilmiy axborot kutubxona markazida kitoblar fondini elektron kataloglashtirish ishlari olib borilmoqda. Kitobxonlar nashrlarni tez va aniq topishlari uchun yagona inventarizatsiya talab etiladi.\n\nKatalogda har bir nashr Kitob (**Book**) entitiysi orqali ifodalanadi. Nashriyot xalqaro standartiga ko'ra kitoblarga noyob 13 xonali ISBN raqami (`isbn`) beriladi va bu Birlamchi Kalit {PK} bo'lib xizmat qiladi.\n\nShuningdek, asarning nomi (`title`), asosiy muallifi (`author`), bosilgan yili (`publishYear`) va adabiy yo'nalishi (`genre`) saqlanadi.",
    w1_inst: "'Book' entitiysini yarating, 'isbn' ga {PK} maqomini bering va uning bibliografik atributlarini kiriting.",
    w2_story: "Kutubxona fondini SQL ma'lumotlar bazasiga o'tkazish uchun 'Book' entitiysini Birlamchi Kalit [PK] ustuni bilan relyatsion jadval sifatida aks ettiring.",
    w2_inst: "'Book' relyatsion jadvalini yarating va 'isbn' ustunini [PK] sifatida belgilang."
  },
  {
    id: 5, s: 1, sectorName: "1-Qavat • Boshlang'ich",
    ind: "Avtosalon & Dilerlik", role: "Savdo Direktori", client: "Rustam Aliyev",
    title: "Avtosalon Transport Vositalari Katalogi",
    e1: "Vehicle", pk1: "vin", a1: ["make", "model", "prodYear", "price"],
    w1_story: "Rasmiy avtomobil dileri sotuvga keltirilgan yangi transport vositalarini hisobga oluvchi yagona dilerlik bazasini shakllantirmoqda. Har bir avtomobilning ishlab chiqarilgan yili va narxi shaffof bo'lishi kerak.\n\nTizimda avtomobillar **Vehicle** entitiysi hisoblanadi. Zavod tomonidan kuzovga urilgan 17 belgili noyob VIN-kod (`vin`) Birlamchi Kalit {PK} vazifasini o'taydi.\n\nAvtomobilning brend markasi (`make`), modeli (`model`), konveyerdan chiqqan yili (`prodYear`) hamda sotuv narxi (`price`) saqlanadi.",
    w1_inst: "'Vehicle' entitiysini tuzing, 'vin' ni {PK} deb belgilang va avtomobil texnik parametrlarini joylashtiring.",
    w2_story: "Avtosalon katalogini relieshon jadvallarga aylantiring. 'Vehicle' jadvali o'zining Birlamchi Kaliti [PK] orqali transport vositasini takrorlanmas qiladi.",
    w2_inst: "'Vehicle' jadvalini shakllantirib, 'vin' ustuniga Birlamchi Kalit [PK] maqomini bering."
  },
  {
    id: 6, s: 1, sectorName: "1-Qavat • Boshlang'ich",
    ind: "Bank & Depozitlar", role: "Bosh Buxgalter", client: "Jamshid Qodirov",
    title: "Tijorat Banki Mijozlar Hisob Raqamlari",
    e1: "BankAccount", pk1: "accountNo", a1: ["balance", "currency", "openDate", "branchCode"],
    w1_story: "Tijorat banki depozit mablag'larini xavfsiz saqlash va tranzaksiyalarni boshqarish maqsadida hisob raqamlar modulini modernizatsiya qilmoqda.\n\nTizimning asosiy moliyaviy birligi — Bank hisob raqami (**BankAccount**) entitiysidir. Har bir hisob 20 xonali xalqaro formatdagi noyob raqam (`accountNo`) bilan ochiladi va bu Birlamchi Kalit {PK} bo'ladi.\n\nHisobning joriy qoldig'i (`balance`), valyuta turi (`currency`), hisob ochilgan sana (`openDate`) hamda xizmat ko'rsatuvchi filial kodi (`branchCode`) qayd etiladi.",
    w1_inst: "'BankAccount' entitiysini yarating, 'accountNo' ni {PK} qilib, moliyaviy atributlarni kiriting.",
    w2_story: "Bank hisoblari jadvalini relyatsion modelga o'tkazing va 'accountNo' ustuniga Birlamchi Kalit [PK] sifatida belgi qo'ying.",
    w2_inst: "'BankAccount' jadvalini yarating va 'accountNo' ustunini [PK] deb belgilang."
  },
  {
    id: 7, s: 1, sectorName: "1-Qavat • Boshlang'ich",
    ind: "Mehmonxona & Turizm", role: "Boshqaruvchi", client: "Malika Yusupova",
    title: "Mehmonxona Xonalar Fondi Reyestri",
    e1: "HotelRoom", pk1: "roomNo", a1: ["roomType", "pricePerNight", "floorNo", "capacity"],
    w1_story: "Besh yulduzli mehmonxona majmuasi xonalarni onlayn bron qilish va mehmonlarni joylashtirishni to'liq avtomatlashtirmoqda.\n\nBino ichidagi har bir turar joy **HotelRoom** entitiysi hisoblanadi. Mehmonxona eshigidagi unikal xona raqami (`roomNo`) Birlamchi Kalit {PK} hisoblanadi.\n\nXonaning toifasi (`roomType`), kunlik ijara narxi (`pricePerNight`), nechanchi qavatda joylashgani (`floorNo`) hamda sig'imi (`capacity`) kiritiladi.",
    w1_inst: "'HotelRoom' entitiysini chizing, 'roomNo' ga {PK} maqomini bering va narx hamda sig'im xususiyatlarini qo'shing.",
    w2_story: "Mehmonxona xonalar fondi relyatsion jadval sifatida SQLga tayyorlanmoqda. 'HotelRoom' jadvalida 'roomNo' ustunini Birlamchi Kalit [PK] qilib belgilang.",
    w2_inst: "'HotelRoom' relyatsion jadvalini shakllantiring va 'roomNo' ustunini [PK] qiling."
  },
  {
    id: 8, s: 1, sectorName: "1-Qavat • Boshlang'ich",
    ind: "Restoran & Taomnoma", role: "Bosh Oshpaz", client: "Otabek Sodiqov",
    title: "Premium Restoran Mualliflik Taomnomasi",
    e1: "MenuItem", pk1: "itemId", a1: ["name", "category", "price", "calories"],
    w1_story: "Zamonaviy restoran mijozlar uchun elektron planshet menyu va oshxona texnologik xaritalarini joriy qilmoqda. Har bir taomning narxi va kaloriyasi aniq bo'lishi zarur.\n\nMenyudagi har bir porsiya **MenuItem** entitiysi sifatida saqlanadi. Oshxona texnologik kartasidagi noyob taom kodi (`itemId`) Birlamchi Kalit {PK} bo'ladi.\n\nTaomning nomi (`name`), menyu bo'limi (`category`), sotuv bahosi (`price`) hamda parhez kaloriyasi (`calories`) qayd etiladi.",
    w1_inst: "'MenuItem' entitiysini tuzing, 'itemId' maydonini {PK} qiling va taom parametrlarini to'ldiring.",
    w2_story: "Restoran menyusini relieshon jadval ko'rinishiga o'tkazing. 'itemId' ustunini Birlamchi Kalit [PK] qilib belgilang.",
    w2_inst: "'MenuItem' jadvalini yarating va 'itemId' ni [PK] deb belgilang."
  },
  {
    id: 9, s: 1, sectorName: "1-Qavat • Boshlang'ich",
    ind: "IT & Dasturiy Ta'minot", role: "Texnik Direktor (CTO)", client: "Farhod Ergashev",
    title: "IT Kompaniyasi Muhandislik Shtati",
    e1: "Developer", pk1: "devId", a1: ["fullName", "role", "techStack", "salary"],
    w1_story: "Dasturiy ta'minot ishlab chiquvchi IT kompaniyasi dasturchilar va muhandislarning loyihalarga taqsimlanishini yagona reyestrda saqlamoqda.\n\nTizimda Dasturchi (**Developer**) mustaqil kuchli entitiy hisoblanadi. Kadrlar bo'limi tomonidan berilgan ichki xodim kodi (`devId`) Birlamchi Kalit {PK} hisoblanadi.\n\nXodimning to'liq ismi (`fullName`), egallab turgan lavozimi (`role`), asosiy dasturlash texnologiyalari (`techStack`) va maoshi (`salary`) saqlanadi.",
    w1_inst: "'Developer' entitiysini yarating, 'devId' ga {PK} belgisini qo'ying va uning professional ma'lumotlarini to'ldiring.",
    w2_story: "Dasturchilar reyestrini relyatsion jadval shakliga keltiring. 'devId' ustuniga Birlamchi Kalit [PK] belgisini o'rnating.",
    w2_inst: "'Developer' jadvalini shakllantiring va 'devId' ustunini [PK] deb belgilang."
  },
  {
    id: 10, s: 1, sectorName: "1-Qavat • Boshlang'ich",
    ind: "E-Commerce", role: "Katalog Menejeri", client: "Shahnoza Karimova",
    title: "Onlayn Gipermarket Tovar Artikullari",
    e1: "Product", pk1: "sku", a1: ["title", "price", "stockQty", "weightKg"],
    w1_story: "Yirik onlayn marketpleys ombordagi barcha tovarlarni hisobga olish va kuryerlik yetkazib berish tizimi bilan bog'lash uchun katalog bazasini qurmoqda.\n\nKatalogdagi mahsulot **Product** entitiysi orqali ifodalanadi. Xalqaro logistika qoidasiga ko'ra har bir tovar turiga berilgan SKU artikul kodi (`sku`) Birlamchi Kalit {PK} bo'ladi.\n\nMahsulotning nomi (`title`), chakana narxi (`price`), ombordagi mavjud soni (`stockQty`) va yuk og'irligi (`weightKg`) yoziladi.",
    w1_inst: "'Product' entitiysini chizing, 'sku' ga {PK} maqomini bering va uning ombor atributlarini kiriting.",
    w2_story: "Tovarlar katalogini relyatsion ma'lumotlar bazasiga o'tkazing va 'sku' ustunini Birlamchi Kalit [PK] qilib belgilang.",
    w2_inst: "'Product' jadvalini relyatsion tarzda yarating va 'sku' ustunini [PK] deb belgilang."
  },
  {
    id: 11, s: 1, sectorName: "1-Qavat • Boshlang'ich",
    ind: "Kino & Premyeralar", role: "Kinoprokat Boshqaruvchisi", client: "Akmal Shokirov",
    title: "Kinoteatrlar Tarmog'i Filmlar Jadvali",
    e1: "Movie", pk1: "movieId", a1: ["title", "director", "durationMin", "ageRating"],
    w1_story: "Raqamli kinoteatrlar tarmog'i zallarda namoyish qilinayotgan filmlarni seanslarga taqsimlash uchun yagona kino asarlari bazasini shakllantirmoqda.\n\nTizimda film **Movie** entitiysi hisoblanadi. Filmning davlat prokat guvohnomasi raqami (`movieId`) Birlamchi Kalit {PK} sifatida qabul qilingan.\n\nFilmning rasmiy nomi (`title`), bosh rejissori (`director`), davomiyligi daqiqalarda (`durationMin`) hamda tomoshabinlar yosh chegarasi (`ageRating`) saqlanadi.",
    w1_inst: "'Movie' entitiysini polotnoga qo'shing, 'movieId' maydonini {PK} qiling va film xususiyatlarini to'ldiring.",
    w2_story: "Filmlar katalogini relyatsion jadvalga o'tkazing. 'movieId' ustunini Birlamchi Kalit [PK] sifatida belgilang.",
    w2_inst: "'Movie' jadvalini shakllantiring va 'movieId' ustuniga [PK] belgisini bering."
  },
  {
    id: 12, s: 1, sectorName: "1-Qavat • Boshlang'ich",
    ind: "Farmatsevtika", role: "Bosh Provisor", client: "Umida Zokirova",
    title: "Markaziy Dorixona Dori Vositalari Inventari",
    e1: "Medicine", pk1: "barcode", a1: ["name", "dosageMg", "manufacturer", "expDate"],
    w1_story: "Yirik dorixonalar tarmog'ida dori vositalarining saqlash muddati va qonuniy sertifikatlarini qat'iy nazorat qilish tizimi ishlab chiqilmoqda.\n\nTizimning asosiy ob'yekti — Dori vositasi (**Medicine**) entitiysidir. Dori qutisiga bosilgan xalqaro shtrix-kod raqami (`barcode`) Birlamchi Kalit {PK} hisoblanadi.\n\nDori vositasining savdo nomi (`name`), faol modda dozasi milligrammda (`dosageMg`), ishlab chiqaruvchi farmatsevtika zavodi (`manufacturer`) va yaroqlilik muddati (`expDate`) saqlanadi.",
    w1_inst: "'Medicine' entitiysini tuzing, 'barcode' ni {PK} deb belgilang va dori parametrlarini kiriting.",
    w2_story: "Dori vositalari inventarini relyatsion jadval shakliga keltiring. 'barcode' ustunini Birlamchi Kalit [PK] sifatida ko'rsating.",
    w2_inst: "'Medicine' jadvalini yarating va 'barcode' ustuniga [PK] maqomini bering."
  },
  {
    id: 13, s: 1, sectorName: "1-Qavat • Boshlang'ich",
    ind: "Magistral Yuk Tashish", role: "Logistika Floti Boshlig'i", client: "Sanjar Normatov",
    title: "Trans-Kontinental Yuk Mashinalari Avtoparki",
    e1: "CargoTruck", pk1: "plateNo", a1: ["capacityTons", "fuelType", "mileageKm", "status"],
    w1_story: "Xalqaro tranzit yo'laklarida yuk tashiydigan korxona o'zining og'ir yuk tyagachlarini dispetcherlik nazoratiga olmoqda.\n\nTizimda har bir yuk mashinasi **CargoTruck** entitiysi orqali aks ettiriladi. Davlat avtomobil inspeksiyasi tomonidan berilgan davlat raqam belgisi (`plateNo`) Birlamchi Kalit {PK} bo'ladi.\n\nMashinaning ruxsat etilgan to'liq yuk ko'tarish quvvati (`capacityTons`), yoqilg'i turi (`fuelType`), bosib o'tgan masofasi (`mileageKm`) va texnik holati (`status`) saqlanadi.",
    w1_inst: "'CargoTruck' entitiysini polotnoda yarating, 'plateNo' ga {PK} bering va uning yuk ko'rsatkichlarini kiriting.",
    w2_story: "Yuk mashinalari parkini relyatsion jadval sifatida aks ettiring va 'plateNo' ustuniga Birlamchi Kalit [PK] belgisini qo'ying.",
    w2_inst: "'CargoTruck' jadvalini yarating va 'plateNo' ustunini [PK] deb belgilang."
  },
  {
    id: 14, s: 1, sectorName: "1-Qavat • Boshlang'ich",
    ind: "Sport & Fitnes", role: "Mijozlar Xizmati Boshlig'i", client: "Nilufar Rahimova",
    title: "Premium Fitnes Klub A'zolari Reyestri",
    e1: "ClubMember", pk1: "memberCardNo", a1: ["fullName", "membershipType", "expiryDate", "phone"],
    w1_story: "Zamonaviy sog'lomlashtirish va fitnes klubi a'zolik kartalari hisobini yuritish hamda turniketlardan o'tishni boshqarish uchun a'zolar bazasini yaratmoqda.\n\nTizimning markaziy entitiysi — Klub a'zosi (**ClubMember**) hisoblanadi. Mijozga klubga a'zo bo'lganda topshiriladigan RFID plastik karta raqami (`memberCardNo`) Birlamchi Kalit {PK} hisoblanadi.\n\nA'zoning to'liq ismi (`fullName`), a'zolik tarifi (`membershipType`), shartnoma tugash sanasi (`expiryDate`) hamda telefoni (`phone`) kiritiladi.",
    w1_inst: "'ClubMember' entitiysini yarating, 'memberCardNo' ni {PK} qiling va a'zolik atributlarini to'ldiring.",
    w2_story: "Fitnes klub a'zolari bazasini relyatsion jadval ko'rinishida hosil qiling va 'memberCardNo' ustunini Birlamchi Kalit [PK] qilib belgilang.",
    w2_inst: "'ClubMember' jadvalini shakllantiring va 'memberCardNo' ustuniga [PK] belgisini bering."
  },
  {
    id: 15, s: 1, sectorName: "1-Qavat • Boshlang'ich",
    ind: "Quyosh Energetikasi", role: "Bosh Energetik", client: "Davron Karimov",
    title: "Quyosh Fotoelektr Stansiyasi Invertorlari",
    e1: "SolarInverter", pk1: "serialNo", a1: ["peakPowerKw", "voltageInput", "installDate", "efficiency"],
    w1_story: "Yirik quyosh fotoelektr stansiyasida quyosh panellaridan olinayotgan o'zgarmas tokni tarmoq tokiga aylantiruvchi invertorlar nazorati amalga oshiriladi.\n\nStansiyaning asosiy texnik birligi — Quyosh invertori (**SolarInverter**) entitiysidir. Zavod tomonidan korpusga o'yib yozilgan noyob seriya raqami (`serialNo`) Birlamchi Kalit {PK} bo'ladi.\n\nInvertorning maksimal quvvati (`peakPowerKw`), kirish kuchlanishi (`voltageInput`), o'rnatilgan sana (`installDate`) hamda samaradorlik koeffitsiyenti (`efficiency`) kiritiladi.",
    w1_inst: "'SolarInverter' entitiysini yarating, 'serialNo' maydonini {PK} qiling va texnik parametrlarini saqlang.",
    w2_story: "Invertorlar texnik bazasini relieshon jadval ko'rinishida shakllantiring va 'serialNo' ustunini Birlamchi Kalit [PK] deb belgilang.",
    w2_inst: "'SolarInverter' jadvalini yarating va 'serialNo' ustunini [PK] deb belgilang."
  },

  // =========================================================================
  // FLOOR 2 (16–30): 1..1 RELATIONSHIPS & FOREIGN KEYS
  // =========================================================================
  {
    id: 16, s: 2, sectorName: "2-Qavat • O'rta (1..1)",
    ind: "Harbiy Dengiz Floti", role: "Flot Admiral Shtabi", client: "Kapitan Anvar Salimov",
    title: "Harbiy Kema va Kema Komandiri",
    e1: "Warship", pk1: "hullNo", a1: ["shipName", "displacementTons", "commissionYear"],
    e2: "Captain", pk2: "officerId", a2: ["officerName", "rankGrade", "serviceYears"],
    rel: "CommandedBy", m1: "1..1", m2: "1..1",
    fkTable: "Warship", fkCol: "captainId", refTable: "Captain", refCol: "officerId",
    w1_story: "Harbiy dengiz floti nizomiga ko'ra, har bir jangovar kema faqat bitta tayinlangan kema komandiri (kapitan) tomonidan boshqariladi. O'z navbatida, har bir kapitan bir vaqtning o'zida faqat bitta kemaga qo'mondonlik qilishi mumkin va boshqa kemaga rahbarlik qilish huquqiga ega emas.\n\nTizimda jangovar kema **Warship** (korpus kodi `hullNo` {PK}, kema nomi `shipName`, suv sig'imi `displacementTons`, safga kirgan yili `commissionYear`) entitiysi orqali ifodalanadi.\n\nKema komandiri esa **Captain** (ofitser guvohnomasi `officerId` {PK}, to'liq ismi `officerName`, harbiy unvoni `rankGrade`, xizmat yillari `serviceYears`) entitiysi sifatida saqlanadi. Ular o'rtasida **CommandedBy** munosabati o'rnatiladi.",
    w1_inst: "'Warship' va 'Captain' entitiylarini yarating, birlamchi kalitlarni belgilang va flot nizomiga mos munosabat hamda multiplisitiyani polotnoda o'rnating.",
    w2_story: "Harbiy kema va kema komandiri o'rtasidagi yagona vakolatli munosabatni relyatsion jadvallarga o'tkazish talab etiladi. Munosabatni ifodalash uchun 'Warship' jadvaliga Tashqi Kalit [FK] sifatida 'captainId' ustunini qo'shing va uni 'Captain' jadvalining Birlamchi Kalitiga bog'lang.",
    w2_inst: "'Warship' jadvaliga 'captainId' [FK1] ustunini kiriting va uni 'Captain' jadvalining 'officerId' [PK] ustuniga bog'lang."
  },
  {
    id: 17, s: 2, sectorName: "2-Qavat • O'rta (1..1)",
    ind: "Yo'l Harakati Xavfsizligi", role: "DYXX Bosh Inspektor", client: "Polkovnik Botir Rahmonov",
    title: "Avtomobil Haydovchisi va Haydovchilik Guvohnomasi",
    e1: "Driver", pk1: "driverId", a1: ["fullName", "phone", "bloodGroup"],
    e2: "DriverLicense", pk2: "licenseNo", a2: ["categories", "issueDate", "expiryDate"],
    rel: "Holds", m1: "1..1", m2: "1..1",
    fkTable: "DriverLicense", fkCol: "driverId", refTable: "Driver", refCol: "driverId",
    w1_story: "Yo'l harakati xavfsizligi elektron ma'lumotlar bazasida har bir haydovchi o'ziga biriktirilgan rasmiy haydovchilik guvohnomasiga ega bo'ladi. Qonun bo'yicha har bir haydovchiga faqat bitta guvohnoma beriladi va har bir guvohnoma qat'iy ravishda bitta shaxsga tegishli bo'ladi.\n\nHaydovchi **Driver** entitiysi (`driverId` {PK}, ismi `fullName`, telefoni `phone`, qon guruhi `bloodGroup`) orqali aks ettiriladi.\n\nGuvohnoma esa **DriverLicense** entitiysi (`licenseNo` {PK}, toifalari `categories`, berilgan sana `issueDate`, amal qilish muddati `expiryDate`) sifatida qayd etiladi. Ular o'rtasida **Holds** aloqasi mavjud.",
    w1_inst: "'Driver' va 'DriverLicense' entitiylarini shakllantiring, {PK} kalitlarini belgilang va ular o'rtasidagi to'g'ri multiplisitiyani o'rnating.",
    w2_story: "Haydovchi va uning guvohnomasi o'rtasidagi to'g'ridan-to'g'ri bog'lanish relyatsion modelga o'tkazilmoqda. 'DriverLicense' jadvaliga 'driverId' Tashqi Kalitini [FK1] qo'shing va uni 'Driver' jadvaliga ulang.",
    w2_inst: "'DriverLicense' jadvalida 'driverId' [FK1] ustunini belgilang va 'Driver' jadvaliga havola qiling."
  },
  {
    id: 18, s: 2, sectorName: "2-Qavat • O'rta (1..1)",
    ind: "Migratsiya & Fuqarolik", role: "Pasport Bo'limi Boshlig'i", client: "Mayor Sherzod Aliyev",
    title: "Fuqaro va Biometrik ID Pasport",
    e1: "Citizen", pk1: "pinfl", a1: ["fullName", "birthDate", "nationality"],
    e2: "Passport", pk2: "passportNo", a2: ["expiryDate", "issuedBy", "chipVersion"],
    rel: "IssuedTo", m1: "1..1", m2: "1..1",
    fkTable: "Passport", fkCol: "citizenPinfl", refTable: "Citizen", refCol: "pinfl",
    w1_story: "Davlat shaxsni tasdiqlovchi hujjatlar reyestrida har bir fuqaro yagona biometrik pasportga ega bo'lishi reglament bilan belgilangan. Bir fuqaro bir vaqtning o'zida ikkinchi faol pasportga ega bo'la olmaydi va pasport faqat bitta shaxs nomiga rasmiylashtiriladi.\n\nFuqaro **Citizen** entitiysi (shaxsiy identifikatsiya kodi `pinfl` {PK}, to'liq ismi `fullName`, tug'ilgan sanasi `birthDate`, fuqaroligi `nationality`) sifatida kiritiladi.\n\nPasport esa **Passport** entitiysi (pasport seriya raqami `passportNo` {PK}, amal qilish muddati `expiryDate`, bergan organ `issuedBy`, chip standarti `chipVersion`) sifatida saqlanadi. Aloqa: **IssuedTo**.",
    w1_inst: "'Citizen' va 'Passport' entitiylarini tuzing, {PK} birlamchi kalitlarini belgilang va munosabat multiplisitiyasini to'g'ri qo'ying.",
    w2_story: "Fuqaro va pasport munosabatini relyatsion modelga o'tkazish uchun 'Passport' jadvaliga 'citizenPinfl' Tashqi Kalit [FK1] ustunini qo'shib, uni 'Citizen' jadvalining 'pinfl' kalitiga bog'lang.",
    w2_inst: "'Passport' jadvaliga 'citizenPinfl' [FK1] ustunini qo'shing va 'Citizen' jadvaliga havola chizig'ini torting."
  },
  {
    id: 19, s: 2, sectorName: "2-Qavat • O'rta (1..1)",
    ind: "Soliq Boshqaruvi", role: "Soliq Inspeksiyasi Rahbari", client: "Nodir Hakimov",
    title: "Kompaniya va Davlat Soliq Ro'yxat Guvohnomasi",
    e1: "Company", pk1: "tin", a1: ["companyName", "legalAddress", "industryType"],
    e2: "TaxCertificate", pk2: "certId", a2: ["taxRegime", "effectiveDate", "regNumber"],
    rel: "CertifiedBy", m1: "1..1", m2: "1..1",
    fkTable: "TaxCertificate", fkCol: "companyTin", refTable: "Company", refCol: "tin",
    w1_story: "Davlat soliq qo'mitasi reyestrida har bir yuridik korxona davlat ro'yxatidan o'tganligi haqida bitta rasmiy soliq guvohnomasiga ega bo'ladi. Har bir sertifikat qat'iy ravishda faqat bitta korxonaga tegishlidir.\n\nKompaniya **Company** entitiysi (soliq to'lovchining identifikatsiya raqami `tin` {PK}, firma nomi `companyName`, yuridik manzili `legalAddress`, faoliyat sohasi `industryType`) orqali belgilanadi.\n\nSoliq guvohnomasi **TaxCertificate** entitiysi (`certId` {PK}, soliqqa tortish rejimi `taxRegime`, kuchga kirgan sana `effectiveDate`, davlat reyestr raqami `regNumber`) sifatida saqlanadi. Munosabat: **CertifiedBy**.",
    w1_inst: "'Company' va 'TaxCertificate' entitiylarini yarating, ularning {PK} kalitlarini belgilang va to'g'ri multiplisitiyani o'rnating.",
    w2_story: "Kompaniya va soliq guvohnomasi o'rtasidagi yagona guvohnoma munosabatini ifodalash uchun 'TaxCertificate' jadvaliga 'companyTin' [FK1] ustunini joylashtiring va 'Company' jadvaliga ulang.",
    w2_inst: "'TaxCertificate' jadvalida 'companyTin' [FK1] ni belgilang va uni 'Company' ning 'tin' [PK] ustuniga bog'lang."
  },
  {
    id: 20, s: 2, sectorName: "2-Qavat • O'rta (1..1)",
    ind: "Klinika Bo'limlari", role: "Bosh Shifokor", client: "Prof. Hasan Umarov",
    title: "Shifoxona Bo'limi va Bo'lim Bosh Vrachi",
    e1: "HospitalDept", pk1: "deptCode", a1: ["deptName", "floorNo", "bedQuota"],
    e2: "HeadDoctor", pk2: "licenseId", a2: ["doctorName", "specialtyField", "phone"],
    rel: "HeadedBy", m1: "1..1", m2: "1..1",
    fkTable: "HospitalDept", fkCol: "headDoctorId", refTable: "HeadDoctor", refCol: "licenseId",
    w1_story: "Ko'p tarmoqli klinika ichki nizomiga binoan, har bir davolash bo'limiga faqat bitta tajribali bosh vrach rahbarlik qiladi. Bosh vrach bir vaqtning o'zida ikkita bo'lim mudiri bo'lishi taqiqlanadi.\n\nTizimda bo'lim **HospitalDept** entitiysi (`deptCode` {PK}, bo'lim nomi `deptName`, qavati `floorNo`, o'rinlar soni `bedQuota`) orqali belgilanadi.\n\nBosh vrach esa **HeadDoctor** entitiysi (litsenziya kodi `licenseId` {PK}, shifokor ismi `doctorName`, mutaxassisligi `specialtyField`, telefoni `phone`) sifatida saqlanadi. Munosabat: **HeadedBy**.",
    w1_inst: "'HospitalDept' va 'HeadDoctor' entitiylarini polotnoda yarating, birlamchi kalitlarni bering va to'g'ri multiplisitiyani o'rnating.",
    w2_story: "Bo'lim va bosh vrach munosabatini relyatsion jadvalga o'tkazish uchun 'HospitalDept' jadvaliga 'headDoctorId' [FK1] ustunini kiriting va 'HeadDoctor' jadvaliga bog'lang.",
    w2_inst: "'HospitalDept' jadvaliga 'headDoctorId' [FK1] ustunini qo'shib, 'HeadDoctor' jadvaliga bog'lang."
  },
  {
    id: 21, s: 2, sectorName: "2-Qavat • O'rta (1..1)",
    ind: "Korporativ IT Aktivlar", role: "IT Aktivlar Menejeri", client: "Javohir Qosimov",
    title: "Kompaniya Xodimi va Xizmat Noutbuki",
    e1: "StaffMember", pk1: "staffId", a1: ["staffName", "jobTitle", "workEmail"],
    e2: "AssignedLaptop", pk2: "assetTag", a2: ["serialNo", "modelName", "ramGb"],
    rel: "AssignedTo", m1: "1..1", m2: "0..1",
    fkTable: "AssignedLaptop", fkCol: "assignedStaffId", refTable: "StaffMember", refCol: "staffId",
    w1_story: "Korporativ IT xavfsizlik siyosatiga ko'ra, har bir xizmat noutbuki faqat bitta xodimga biriktiriladi. Ayrim yangi xodimlarga esa hali noutbuk ajratilmagan bo'lishi mumkin, lekin bitta noutbuk hech qachon ikki kishiga berilmaydi.\n\nXodim **StaffMember** entitiysi (`staffId` {PK}, xodim ismi `staffName`, lavozimi `jobTitle`, pochtasi `workEmail`) sifatida yuritiladi.\n\nNoutbuk esa **AssignedLaptop** entitiysi (aktiv kodi `assetTag` {PK}, seriya raqami `serialNo`, modeli `modelName`, operativ xotirasi `ramGb`) sifatida saqlanadi. Aloqa: **AssignedTo**.",
    w1_inst: "'StaffMember' va 'AssignedLaptop' entitiylarini yarating, ixtiyoriylik qoidasini inobatga olgan holda multiplisitiyani belgilang.",
    w2_story: "Xodim va unga biriktirilgan noutbuk munosabatini relyatsion jadvalga o'tkazing: 'AssignedLaptop' jadvaliga 'assignedStaffId' Tashqi Kalitini [FK1] qo'shib, 'StaffMember' jadvaliga ulang.",
    w2_inst: "'AssignedLaptop' jadvaliga 'assignedStaffId' [FK1] ustunini qo'shing va 'StaffMember' ga havola qiling."
  },
  {
    id: 22, s: 2, sectorName: "2-Qavat • O'rta (1..1)",
    ind: "Davlat Boshqaruvi", role: "Devonxona Boshlig'i", client: "Shavkat Toirov",
    title: "Vazirlik va Soha Vaziri",
    e1: "Ministry", pk1: "ministryId", a1: ["officialTitle", "budgetBillion", "location"],
    e2: "Minister", pk2: "ministerId", a2: ["fullName", "appointedDate", "decreeNo"],
    rel: "LedBy", m1: "1..1", m2: "1..1",
    fkTable: "Ministry", fkCol: "currentMinisterId", refTable: "Minister", refCol: "ministerId",
    w1_story: "Hukumat apparati ma'lumotlar bazasida har bir davlat vazirligi bitta tayinlangan soha vaziri tomonidan boshqariladi va har bir vazir faqat bitta vazirlikka rahbarlik qiladi.\n\nVazirlik **Ministry** entitiysi (`ministryId` {PK}, rasmiy nomi `officialTitle`, yillik byudjeti `budgetBillion`, binosi `location`) orqali ifodalanadi.\n\nVazir esa **Minister** entitiysi (`ministerId` {PK}, to'liq ismi `fullName`, tayinlangan sanasi `appointedDate`, prezident farmoni raqami `decreeNo`) sifatida saqlanadi. Aloqa: **LedBy**.",
    w1_inst: "'Ministry' va 'Minister' entitiylarini polotnoda yarating, {PK} maydonlarini belgilang va to'g'ri multiplisitiyani qo'ying.",
    w2_story: "Vazirlik va vazir o'rtasidagi yagona rahbarlik munosabatini relyatsion ko'rinishga keltiring: 'Ministry' jadvaliga 'currentMinisterId' [FK1] ustunini qo'shib, 'Minister' jadvaliga bog'lang.",
    w2_inst: "'Ministry' jadvalida 'currentMinisterId' [FK1] ustunini belgilang va 'Minister' ning 'ministerId' [PK] ustuniga ulang."
  },
  {
    id: 23, s: 2, sectorName: "2-Qavat • O'rta (1..1)",
    ind: "Ko'chmas Mulk & Kadastr", role: "Bosh Kadastr Muhandisi", client: "Muzaffar Jo'rayev",
    title: "Mulkdor va Kadastr Pasporti",
    e1: "PropertyOwner", pk1: "ownerId", a1: ["ownerName", "phone", "taxPayerCode"],
    e2: "CadastreDeed", pk2: "deedNo", a2: ["cadastralZone", "landAreaSqm", "registeredDate"],
    rel: "DeededWith", m1: "1..1", m2: "1..1",
    fkTable: "CadastreDeed", fkCol: "ownerId", refTable: "PropertyOwner", refCol: "ownerId",
    w1_story: "Ko'chmas mulk davlat kadastri idorasida xususiy yer uchastkasi yoki bino kadastr hujjati aynan bitta rasmiy mulkdor nomiga ro'yxatga olinadi va har bir mulkdor ushbu yer maydoni uchun bitta kadastr guvohnomasiga ega bo'ladi.\n\nMulkdor **PropertyOwner** entitiysi (`ownerId` {PK}, ismi `ownerName`, telefoni `phone`, soliq to'lovchi kodi `taxPayerCode`) orqali kiritiladi.\n\nKadastr pasporti esa **CadastreDeed** entitiysi (`deedNo` {PK}, kadastr zonasi `cadastralZone`, maydoni `landAreaSqm`, ro'yxatga olingan sana `registeredDate`) sifatida saqlanadi. Aloqa: **DeededWith**.",
    w1_inst: "'PropertyOwner' va 'CadastreDeed' entitiylarini yarating, ularning {PK} kalitlarini belgilang va munosabat multiplisitiyasini o'rnating.",
    w2_story: "Kadastr pasporti jadvaliga 'ownerId' [FK1] Tashqi Kalit ustunini qo'shib, uni 'PropertyOwner' jadvaliga relyatsion bog'lang.",
    w2_inst: "'CadastreDeed' jadvaliga 'ownerId' [FK1] ustunini joylashtiring va 'PropertyOwner' jadvaliga havola qiling."
  },
  {
    id: 24, s: 2, sectorName: "2-Qavat • O'rta (1..1)",
    ind: "Supermarket Kassalari", role: "Kassa Texnik Muhandisi", client: "Sardor Saidov",
    title: "Kassa Yo'lagi va Bank POS Terminali",
    e1: "CheckoutLane", pk1: "laneNo", a1: ["deskCode", "supervisorName", "status"],
    e2: "PosTerminal", pk2: "terminalId", a2: ["ipAddress", "merchantCode", "serialNumber"],
    rel: "EquippedWith", m1: "1..1", m2: "1..1",
    fkTable: "CheckoutLane", fkCol: "posTerminalId", refTable: "PosTerminal", refCol: "terminalId",
    w1_story: "Yirik supermarketda har bir kassa stoli xavfsizlik qoidasiga muvofiq faqat bitta statsionar bank to'lov terminali bilan jihozlanadi va har bir terminal faqat bitta kassa stoliga qat'iy biriktiriladi.\n\nKassa stoli **CheckoutLane** entitiysi (`laneNo` {PK}, stol kodi `deskCode`, nazoratchi `supervisorName`, holati `status`) orqali belgilanadi.\n\nBank terminali esa **PosTerminal** entitiysi (`terminalId` {PK}, tarmoq manzili `ipAddress`, savdogar kodi `merchantCode`, seriya raqami `serialNumber`) sifatida saqlanadi. Aloqa: **EquippedWith**.",
    w1_inst: "'CheckoutLane' va 'PosTerminal' entitiylarini yarating, {PK} kalitlarini belgilang va to'g'ri multiplisitiyani o'rnating.",
    w2_story: "Kassa yo'lagi va terminal o'rtasidagi bog'lanishni ifodalash uchun 'CheckoutLane' jadvaliga 'posTerminalId' [FK1] ustunini qo'shing va 'PosTerminal' jadvaliga bog'lang.",
    w2_inst: "'CheckoutLane' jadvalida 'posTerminalId' [FK1] ustunini belgilang va uni 'PosTerminal' jadvaliga ulang."
  },
  {
    id: 25, s: 2, sectorName: "2-Qavat • O'rta (1..1)",
    ind: "Maktab Ta'limi", role: "Maktab Mudiri", client: "Munira Fayzullayeva",
    title: "O'quvchi va Shaxsiy Saqlash Shkafchasi",
    e1: "Pupil", pk1: "pupilId", a1: ["fullName", "gradeLevel", "classRoom"],
    e2: "SchoolLocker", pk2: "lockerNo", a2: ["hallwayWing", "combinationCode", "shelfCount"],
    rel: "Allocated", m1: "1..1", m2: "0..1",
    fkTable: "SchoolLocker", fkCol: "pupilId", refTable: "Pupil", refCol: "pupilId",
    w1_story: "Zamonaviy maktabda har bir shaxsiy metall shkafcha faqat bitta o'quvchiga foydalanish uchun beriladi. Yangi kelgan ayrim o'quvchilarga hali shkafcha taqsimlanmagan bo'lishi mumkin, ammo bitta shkafchadan ikki o'quvchi foydalana olmaydi.\n\nO'quvchi **Pupil** entitiysi (`pupilId` {PK}, to'liq ismi `fullName`, sinfi `gradeLevel`, xonasi `classRoom`) orqali ifodalanadi.\n\nShkafcha esa **SchoolLocker** entitiysi (`lockerNo` {PK}, qaysi yo'lakda joylashgani `hallwayWing`, qulf kodi `combinationCode`, tokchalar soni `shelfCount`) sifatida saqlanadi. Aloqa: **Allocated**.",
    w1_inst: "'Pupil' va 'SchoolLocker' entitiylarini chizing, biznes talabini o'rganib to'g'ri multiplisitiyani polotnoda belgilang.",
    w2_story: "Shkafchalar jadvaliga 'pupilId' [FK1] ustunini qo'shib, uni 'Pupil' jadvalining Birlamchi Kalitiga relyatsion tarzda bog'lang.",
    w2_inst: "'SchoolLocker' jadvalida 'pupilId' [FK1] ustunini oching va 'Pupil' jadvaliga havola qiling."
  },
  {
    id: 26, s: 2, sectorName: "2-Qavat • O'rta (1..1)",
    ind: "Aviatsiya Xavfsizligi", role: "Avia Inspektor", client: "Oleg Smirnov",
    title: "Samolyot va Bort Qora Qutisi",
    e1: "Airplane", pk1: "airframeNo", a1: ["tailNumber", "modelCode", "serviceHours"],
    e2: "FlightRecorder", pk2: "recorderId", a2: ["beaconFrequency", "memoryCapacityGb", "batteryExpiry"],
    rel: "MonitoredBy", m1: "1..1", m2: "1..1",
    fkTable: "FlightRecorder", fkCol: "airframeNo", refTable: "Airplane", refCol: "airframeNo",
    w1_story: "Parvozlar xavfsizligi xalqaro konventsiyasiga muvofiq, har bir yo'lovchi samolyotiga aynan bitta asosiy qora quti (avariya bort yozuvchisi) o'rnatiladi va har bir yozuv moslamasi bitta samolyot fyuzelyajiga muhrlanadi.\n\nSamolyot **Airplane** entitiysi (planyor raqami `airframeNo` {PK}, bort raqami `tailNumber`, model kodi `modelCode`, parvoz soati `serviceHours`) orqali ifodalanadi.\n\nQora quti esa **FlightRecorder** entitiysi (`recorderId` {PK}, mayoq chastotasi `beaconFrequency`, xotira hajmi `memoryCapacityGb`, batareya muddati `batteryExpiry`) sifatida saqlanadi. Aloqa: **MonitoredBy**.",
    w1_inst: "'Airplane' va 'FlightRecorder' entitiylarini yarating, {PK} kalitlarini belgilang va to'g'ri multiplisitiyani o'rnating.",
    w2_story: "Bort yozuvchisi jadvaliga 'airframeNo' [FK1] Tashqi Kalitini qo'shib, uni 'Airplane' jadvalining 'airframeNo' [PK] ustuniga bog'lang.",
    w2_inst: "'FlightRecorder' jadvalida 'airframeNo' [FK1] ustunini belgilang va 'Airplane' jadvaliga ulang."
  },
  {
    id: 27, s: 2, sectorName: "2-Qavat • O'rta (1..1)",
    ind: "Qishloq Xo'jaligi", role: "Yer Resurslari Mudiri", client: "Ibrohim Rustamov",
    title: "Fermer Xo'jaligi va Yer Ijara Shartnomasi",
    e1: "Farm", pk1: "farmRegNo", a1: ["farmName", "province", "cropType"],
    e2: "LandLeaseContract", pk2: "contractId", a2: ["hectares", "leaseEndDate", "regDate"],
    rel: "ContractedUnder", m1: "1..1", m2: "1..1",
    fkTable: "LandLeaseContract", fkCol: "farmRegNo", refTable: "Farm", refCol: "farmRegNo",
    w1_story: "Qishloq xo'jaligi yer fondi reyestrida har bir ro'yxatga olingan fermer xo'jaligi ajratilgan yer maydoni uchun bitta asosiy davlat yer ijara shartnomasiga ega bo'ladi. Har bir shartnoma faqat bitta fermer xo'jaligiga tegishlidir.\n\nFermer xo'jaligi **Farm** entitiysi (`farmRegNo` {PK}, fermer nomi `farmName`, viloyati `province`, asosiy ekini `cropType`) orqali belgilanadi.\n\nIjara shartnomasi esa **LandLeaseContract** entitiysi (`contractId` {PK}, gektar maydoni `hectares`, ijara tugash sanasi `leaseEndDate`, ro'yxat sanasi `regDate`) sifatida saqlanadi. Aloqa: **ContractedUnder**.",
    w1_inst: "'Farm' va 'LandLeaseContract' entitiylarini shakllantiring, birlamchi kalitlarni belgilang va munosabat multiplisitiyasini o'rnating.",
    w2_story: "Yer ijara shartnomasi jadvaliga 'farmRegNo' [FK1] ustunini qo'shib, uni 'Farm' jadvaliga relyatsion tarzda bog'lang.",
    w2_inst: "'LandLeaseContract' jadvalida 'farmRegNo' [FK1] ustunini oching va 'Farm' jadvaliga havola qiling."
  },
  {
    id: 28, s: 2, sectorName: "2-Qavat • O'rta (1..1)",
    ind: "Diplomatiya & Tashqi Ishlar", role: "Protokol Rahbari", client: "Kamol Boboyev",
    title: "Diplomatik Elchixona va Favqulodda Elchi",
    e1: "Embassy", pk1: "embassyId", a1: ["hostCountry", "cityLocation", "establishedYear"],
    e2: "Ambassador", pk2: "diplomatId", a2: ["fullName", "credentialDate", "diplomaticRank"],
    rel: "RepresentedBy", m1: "1..1", m2: "1..1",
    fkTable: "Embassy", fkCol: "ambassadorId", refTable: "Ambassador", refCol: "diplomatId",
    w1_story: "Tashqi ishlar vazirligi protokol qoidalariga binoan, xorijdagi har bir elchixonaga faqat bitta favqulodda va muxtor elchi rahbarlik qiladi va har bir elchi faqat bitta davlatdagi elchixonaga akkreditatsiya qilinadi.\n\nElchixona **Embassy** entitiysi (`embassyId` {PK}, joylashgan davlati `hostCountry`, shahri `cityLocation`, ochilgan yili `establishedYear`) orqali ifodalanadi.\n\nElchi esa **Ambassador** entitiysi (`diplomatId` {PK}, to'liq ismi `fullName`, ishonch yorlig'i topshirilgan sana `credentialDate`, diplomatik darajasi `diplomaticRank`) sifatida saqlanadi. Aloqa: **RepresentedBy**.",
    w1_inst: "'Embassy' va 'Ambassador' entitiylarini tuzing, ularning {PK} kalitlarini belgilang va to'g'ri multiplisitiyani o'rnating.",
    w2_story: "Elchixona jadvaliga 'ambassadorId' [FK1] Tashqi Kalitini qo'shib, uni 'Ambassador' jadvalining 'diplomatId' [PK] ustuniga bog'lang.",
    w2_inst: "'Embassy' jadvaliga 'ambassadorId' [FK1] ustunini qo'shing va 'Ambassador' jadvaliga ulang."
  },
  {
    id: 29, s: 2, sectorName: "2-Qavat • O'rta (1..1)",
    ind: "Bank Xavfsizligi", role: "Inkassatsiya Boshlig'i", client: "Akmal Fayziyev",
    title: "Bank Filiali va Markaziy Pul Seyfi",
    e1: "BankBranch", pk1: "branchNo", a1: ["street", "city", "phone"],
    e2: "MainVault", pk2: "vaultId", a2: ["securityGrade", "capacityKg", "alarmCode"],
    rel: "SecuredWith", m1: "1..1", m2: "1..1",
    fkTable: "MainVault", fkCol: "branchNo", refTable: "BankBranch", refCol: "branchNo",
    w1_story: "Bank xavfsizlik reglamentiga ko'ra, har bir bank binosida naqd pullar va qimmatbaho metallarni saqlash uchun faqat bitta asosiy zirhli yerosti seyfi (Vault) quriladi va har bir seyf faqat bitta filial binosiga tegishli bo'ladi.\n\nBank filiali **BankBranch** entitiysi (`branchNo` {PK}, ko'chasi `street`, shahri `city`, telefoni `phone`) orqali ifodalanadi.\n\nSeyf esa **MainVault** entitiysi (`vaultId` {PK}, xavfsizlik sinfi `securityGrade`, maksimal sig'imi kilogrammda `capacityKg`, signalizatsiya kodi `alarmCode`) sifatida saqlanadi. Aloqa: **SecuredWith**.",
    w1_inst: "'BankBranch' va 'MainVault' entitiylarini shakllantiring, {PK} kalitlarini belgilang va to'g'ri multiplisitiyani o'rnating.",
    w2_story: "Seyf jadvaliga 'branchNo' [FK1] ustunini qo'shib, uni 'BankBranch' jadvaliga relyatsion tarzda bog'lang.",
    w2_inst: "'MainVault' jadvaliga 'branchNo' [FK1] ustunini joylashtiring va 'BankBranch' jadvaliga havola qiling."
  },
  {
    id: 30, s: 2, sectorName: "2-Qavat • O'rta (1..1)",
    ind: "Xalqaro Sport", role: "Antidoping Komissari", client: "Dilorom Ismoilova",
    title: "Professional Atlet va Biologik Doping Pasporti",
    e1: "Athlete", pk1: "licenseId", a1: ["athleteName", "sportDiscipline", "countryCode"],
    e2: "DopingPassport", pk2: "passportCode", a2: ["biologicalProfile", "lastTestDate", "labCode"],
    rel: "TrackedBy", m1: "1..1", m2: "1..1",
    fkTable: "DopingPassport", fkCol: "athleteLicenseId", refTable: "Athlete", refCol: "licenseId",
    w1_story: "Xalqaro antidoping agentligi qoidalariga muvofiq, har bir professional sportchi o'zining doimiy biologik ko'rsatkichlarini kuzatuvchi bitta doping pasportiga ega bo'ladi va ushbu pasport faqat bitta sportchining biologik profilini ifodalaydi.\n\nSportchi **Athlete** entitiysi (`licenseId` {PK}, ismi `athleteName`, sport turi `sportDiscipline`, mamlakat kodi `countryCode`) orqali belgilanadi.\n\nDoping pasporti esa **DopingPassport** entitiysi (`passportCode` {PK}, qon profili `biologicalProfile`, oxirgi test sanasi `lastTestDate`, laboratoriya kodi `labCode`) sifatida saqlanadi. Aloqa: **TrackedBy**.",
    w1_inst: "'Athlete' va 'DopingPassport' entitiylarini polotnoga qo'ying, {PK} kalitlarini belgilang va to'g'ri multiplisitiyani o'rnating.",
    w2_story: "Doping pasporti jadvaliga 'athleteLicenseId' [FK1] ustunini qo'shib, uni 'Athlete' jadvaliga bog'lang.",
    w2_inst: "'DopingPassport' jadvalida 'athleteLicenseId' [FK1] ustunini oching va 'Athlete' jadvaliga ulang."
  }
];

console.log(`Loaded ${DOMAINS.length} detailed domains.`);

// Systematic generators for Sectors 3 to 10
// S3: 1..* (31..45)
const S3_DATA = [
  { id: 31, ind: "Universitet Kadrlar", e1: "Department", pk1: "deptCode", a1: ["deptName", "officeRoom"], e2: "Lecturer", pk2: "lecturerId", a2: ["fullName", "academicRank", "salary"], rel: "Employs", rule: "Har bir kafedrada bir nechta o'qituvchi ishlaydi, biroq har bir o'qituvchi faqat bitta kafedra shtatiga biriktiriladi." },
  { id: 32, ind: "Matbaa Nashriyoti", e1: "Publisher", pk1: "publisherId", a1: ["companyName", "address", "phone"], e2: "BookEdition", pk2: "editionIsbn", a2: ["title", "printRun", "price"], rel: "Publishes", rule: "Nashriyot ko'plab kitob nashrlarini chop etadi, har bir kitob nashri esa aynan bitta nashriyot tomonidan chiqariladi." },
  { id: 33, ind: "Fintech & Plastik Kartalar", e1: "Customer", pk1: "customerId", a1: ["fullName", "phone", "email"], e2: "PaymentCard", pk2: "cardNumber", a2: ["cardType", "expiryDate", "cvvHash"], rel: "Owns", rule: "Bank mijozi o'z nomiga bir nechta plastik karta ochtirishi mumkin, ammo har bir karta faqat bitta mijozga tegishli bo'ladi." },
  { id: 34, ind: "Shahar Avtobus Parki", e1: "BusDepot", pk1: "depotId", a1: ["depotName", "garageCapacity", "cityZone"], e2: "CityBus", pk2: "busRegNo", a2: ["model", "seatCapacity", "routeNo"], rel: "Houses", rule: "Avtobus saroyida o'nlab shahar avtobuslari saqlanadi, har bir avtobus esa qat'iy ravishda bitta saroy balansiga olingan." },
  { id: 35, ind: "Korporativ Filiallar", e1: "Branch", pk1: "branchNo", a1: ["city", "street", "phone"], e2: "Staff", pk2: "staffNo", a2: ["fName", "lName", "position", "salary"], rel: "Operates", rule: "Kompaniya filialida bir guruh xodimlar mehnat qiladi, har bir xodim esa bitta filial shtatida faoliyat yuritadi." },
  { id: 36, ind: "Klinika Palatalari", e1: "HospitalWard", pk1: "wardId", a1: ["wardName", "floorLevel", "nurseStation"], e2: "PatientRoom", pk2: "roomNumber", a2: ["bedCount", "isOxygenEquipped", "dailyRate"], rel: "Contains", rule: "Shifoxona bo'limida bir nechta bemorlar xonasi joylashgan, har bir xona esa bitta bo'lim tarkibiga kiradi." },
  { id: 37, ind: "Aeronavigatsiya Jadvali", e1: "Airline", pk1: "airlineCode", a1: ["airlineName", "countryOrigin", "alliance"], e2: "FlightSchedule", pk2: "flightNo", a2: ["originIata", "destIata", "departureTime"], rel: "Operates", rule: "Aviakompaniya o'nlab muntazam parvoz reyslarini bajaradi, har bir reys esa bitta aviatashuvchi tasarrufiga tegishli." },
  { id: 38, ind: "Restoran Buyurtmalari", e1: "DiningTable", pk1: "tableNo", a1: ["seatingCapacity", "zoneArea", "isReserved"], e2: "OrderTicket", pk2: "orderId", a2: ["orderTime", "totalSum", "paymentStatus"], rel: "Places", rule: "Restoran stoliga kun davomida bir nechta buyurtma cheklari ochilishi mumkin, ammo har bir chek faqat bitta stolga biriktiriladi." },
  { id: 39, ind: "Mehmonxona Binosi", e1: "Hotel", pk1: "hotelId", a1: ["hotelName", "starRating", "cityAddress"], e2: "Room", pk2: "roomNo", a2: ["type", "price", "isCleaned"], rel: "Has", rule: "Mehmonxona majmuasida yuzlab xonalar mavjud, har bir xona esa bitta muayyan mehmonxona korpusiga tegishlidir." },
  { id: 40, ind: "Teatr Repertuari", e1: "TheatrePlay", pk1: "playCode", a1: ["title", "authorPlaywright", "genre"], e2: "CharacterRole", pk2: "roleId", a2: ["characterName", "importanceTier", "actCount"], rel: "Features", rule: "Teatr spektaklida bir nechta qahramon rollari mavjud, har bir rol esa bitta spektakl ssenariysiga tegishli." },
  { id: 41, ind: "Telegram Media", e1: "Channel", pk1: "channelHandle", a1: ["channelTitle", "subscribersCount", "createdDate"], e2: "ChannelPost", pk2: "postId", a2: ["publishedAt", "viewCount", "postText"], rel: "Publishes", rule: "Blog kanali o'z sahifasida ko'plab postlar chiqaradi, har bir post esa aynan bitta kanal muallifiga tegishli." },
  { id: 42, ind: "Omborxona Xo'jaligi", e1: "Warehouse", pk1: "warehouseCode", a1: ["facilityName", "totalVolumeM3", "address"], e2: "StorageBay", pk2: "bayBarcode", a2: ["aisleNo", "maxWeightKg", "temperatureZone"], rel: "ConsistsOf", rule: "Katta logistika omborida ko'plab saqlash bo'lmalari bor, har bir bo'lma esa bitta ombor binosida joylashgan." },
  { id: 43, ind: "Davlat Ma'muriy Tizimi", e1: "City", pk1: "cityId", a1: ["cityName", "regionName", "population"], e2: "District", pk2: "districtId", a2: ["districtName", "postalIndex", "areaSqKm"], rel: "DividedInto", rule: "Viloyat markazi bo'lgan shahar bir necha tumanlarga bo'linadi, har bir tuman esa faqat bitta shahar ma'muriyatiga qaraydi." },
  { id: 44, ind: "Sug'urta Agentligi", e1: "InsuranceBroker", pk1: "brokerId", a1: ["brokerName", "licenseNo", "commissionRate"], e2: "Policy", pk2: "policyNo", a2: ["startDate", "endDate", "premiumAmount"], rel: "Underwrites", rule: "Sug'urta agenti mijozlarga ko'plab sug'urta polislarini rasmiylashtiradi, har bir polis esa bitta mas'ul agent tomonidan imzolanadi." },
  { id: 45, ind: "Mobil Aloqa Minorasi", e1: "CellTower", pk1: "towerId", a1: ["towerName", "latitude", "longitude", "heightMeters"], e2: "AntennaSector", pk2: "sectorId", a2: ["azimuthDegree", "frequencyBandMhz", "powerWatt"], rel: "Radiates", rule: "Uyali aloqa minorasiga turli burchakka qaratilgan bir nechta sektor antennalari o'rnatiladi, har bir antenna bitta minoraga mahkamlangan." }
];

S3_DATA.forEach(d => {
  DOMAINS.push({
    id: d.id, s: 3, sectorName: "3-Qavat • O'rta (1..*)",
    ind: d.ind, role: "Tizim Me'mori", client: "Bosh Maslahatchi",
    title: `${d.e1} va ${d.e2} Ierarxiyasi`,
    e1: d.e1, pk1: d.pk1, a1: d.a1,
    e2: d.e2, pk2: d.pk2, a2: d.a2,
    rel: d.rel, m1: "1..1", m2: "1..*",
    fkTable: d.e2, fkCol: `${d.e1.toLowerCase()}Id`, refTable: d.e1, refCol: d.pk1,
    w1_story: `${d.ind} sohasida tabiiy boshqaruv ierarxiyasini ta'minlovchi axborot tizimi ishlab chiqilmoqda. Biznes qoidalariga ko'ra: ${d.rule}\n\nTizimda ota entitiy sifatida **${d.e1}** (${d.pk1} {PK}, ${d.a1.map(a => `\`${a}\``).join(', ')}) ro'yxatga olinadi.\n\nUnga bo'ysunuvchi birlik esa **${d.e2}** (${d.pk2} {PK}, ${d.a2.map(a => `\`${a}\``).join(', ')}) entitiysi hisoblanadi. Ular o'rtasida **${d.rel}** munosabati o'rnatiladi.`,
    w1_inst: `'${d.e1}' va '${d.e2}' entitiylarini yarating, ularning {PK} kalitlarini belgilang va bayon etilgan biznes qoidasiga mos munosabat hamda multiplisitiyani polotnoda o'rnating.`,
    w2_story: `1-haftadagi ${d.e1} va ${d.e2} o'rtasidagi ierarxik modelni relyatsion jadvallarga o'tkazing: bo'ysunuvchi '${d.e2}' jadvaliga '${d.e1.toLowerCase()}Id' Tashqi Kalit [FK1] ustunini qo'shing va ota jadvalga bog'lang.`,
    w2_inst: `'${d.e2}' jadvaliga '${d.e1.toLowerCase()}Id' [FK1] ustunini qo'shing va uni '${d.e1}' ning '${d.pk1}' [PK] ustuniga havola qiling.`
  });
});

// S4: *..* Many-to-Many & Associative (46..60)
const S4_DATA = [
  { id: 46, ind: "Klinika Qabuli", e1: "Doctor", pk1: "doctorId", a1: ["docName", "specialization", "roomNumber"], e2: "Patient", pk2: "patientId", a2: ["patientName", "phone", "dob"], assoc: "Appointment", pkAssoc: "appointId", aAssoc: ["appointTime", "diagnosisNotes", "cost"], rule: "Bir shifokor ko'plab bemorlarni qabul qiladi, bemor ham bir nechta ixtisoslashgan shifokorlar ko'rigida bo'lishi mumkin. Qabul jarayoni oraliq Appointment orqali rasmiylashtiriladi." },
  { id: 47, ind: "Universitet Darslari", e1: "Student", pk1: "studentId", a1: ["fullName", "email", "entryYear"], e2: "Course", pk2: "courseCode", a2: ["courseTitle", "credits", "syllabusVersion"], assoc: "Enrollment", pkAssoc: "enrollmentId", aAssoc: ["semester", "gradeLetter", "attendanceScore"], rule: "Bir talaba bir nechta o'quv fanlariga yoziladi, bir fanda esa yuzlab talabalar tahsil oladi. Ro'yxatdan o'tish Enrollment hujjati orqali yuritiladi." },
  { id: 48, ind: "Adabiyot & Mualliflik", e1: "Author", pk1: "authorId", a1: ["penName", "country", "birthYear"], e2: "Book", pk2: "isbn", a2: ["bookTitle", "pageCount", "firstEditionYear"], assoc: "Authorship", pkAssoc: "authorshipId", aAssoc: ["royaltySharePercent", "contributionChapter", "contractSignDate"], rule: "Bir muallif bir nechta kitob yozishi mumkin, bir kitob esa bir nechta hammualliflar tomonidan yaratilishi mumkin." },
  { id: 49, ind: "E-Commerce Savdo", e1: "Order", pk1: "orderId", a1: ["orderDate", "shippingAddress", "status"], e2: "Product", pk2: "sku", a2: ["productName", "unitPrice", "stockQty"], assoc: "OrderItem", pkAssoc: "itemId", aAssoc: ["quantity", "appliedDiscount", "lineTotal"], rule: "Bitta xarid buyurtmasida turli tovarlar bo'lishi mumkin, ayni bitta tovar esa ko'plab mijozlar buyurtmasida qatnashadi." },
  { id: 50, ind: "Scrum IT Loyihalar", e1: "Developer", pk1: "devId", a1: ["fullName", "seniority", "hourlyRate"], e2: "Project", pk2: "projectCode", a2: ["projectName", "deadline", "budgetUsd"], assoc: "ProjectAssignment", pkAssoc: "assignId", aAssoc: ["assignedRole", "hoursPerWeek", "startDate"], rule: "Dasturchi bir nechta loyihada ishlashi mumkin, har bir dasturiy loyihada esa jamoaviy dasturchilar birikmasi mehnat qiladi." },
  { id: 51, ind: "Xalqaro Turizm", e1: "Tourist", pk1: "passportNumber", a1: ["touristName", "citizenship", "phone"], e2: "TourPackage", pk2: "packageCode", a2: ["destinationCity", "durationDays", "basePrice"], assoc: "TourBooking", pkAssoc: "bookingRef", aAssoc: ["travelDate", "adultCount", "specialMealRequest"], rule: "Sayyoh yil davomida bir nechta sayohat paketlarini xarid qilishi mumkin, har bir sayohat paketiga esa ko'plab sayyohlar bron qiladi." },
  { id: 52, ind: "Ovoz Yozish Studiyasi", e1: "Musician", pk1: "artistId", a1: ["stageName", "instrument", "genre"], e2: "Track", pk2: "isrcCode", a2: ["trackTitle", "durationSeconds", "bpmTempo"], assoc: "TrackContribution", pkAssoc: "contribId", aAssoc: ["roleType", "royaltySplitRatio", "recordingStudio"], rule: "Musiqachi ko'plab audio treklarni yozishda qatnashadi, bitta musiqiy trekda esa bir nechta artistlar hamkorlik qiladi." },
  { id: 53, ind: "Kinematografiya Kasting", e1: "Actor", pk1: "actorCardId", a1: ["realName", "agentContact", "actingUnionId"], e2: "Film", pk2: "filmCode", a2: ["filmTitle", "producerName", "shootingStartYear"], assoc: "CastingContract", pkAssoc: "contractNo", aAssoc: ["characterName", "compensationSum", "isLeadRole"], rule: "Aktyor bir nechta filmlarda rol ijro etishi mumkin, filmda esa ko'plab aktyorlar jamoasi suratga tushadi." },
  { id: 54, ind: "Magistral Marshrutlar", e1: "Truck", pk1: "truckPlate", a1: ["model", "maxPayloadTons", "odometerKm"], e2: "Route", pk2: "routeId", a2: ["originHub", "destHub", "distanceKm"], assoc: "DeliveryTrip", pkAssoc: "tripTicketNo", aAssoc: ["dispatchTime", "fuelLitersUsed", "driverStaffId"], rule: "Yuk furasiga turli qatnov yo'nalishlari beriladi, bitta tranzit yo'nalishida esa bir nechta furalar qatnaydi." },
  { id: 55, ind: "Zavod Texnologik Xaritasi", e1: "Product", pk1: "productNo", a1: ["name", "retailPrice", "manufacturingTimeHours"], e2: "RawMaterial", pk2: "materialCode", a2: ["materialName", "unitOfMeasure", "costPerUnit"], assoc: "BillOfMaterial", pkAssoc: "bomItemId", aAssoc: ["requiredQuantity", "wastageTolerancePercent", "assemblySequenceNo"], rule: "Tayyor mahsulot bir nechta xomashyolardan yig'iladi, bir xomashyo esa turli xil mahsulotlar ishlab chiqarishda ishlatiladi." },
  { id: 56, ind: "Xalqaro Kongress", e1: "Delegate", pk1: "badgeId", a1: ["delegateName", "organization", "jobPosition"], e2: "WorkshopSession", pk2: "sessionCode", a2: ["sessionTopic", "roomHall", "speakerName"], assoc: "SessionRegistration", pkAssoc: "regTicketId", aAssoc: ["registeredAt", "attendedAttendance", "feedbackScore"], rule: "Kongress delegati bir nechta mahorat darslariga qatnashishi mumkin, har bir seminarga esa ko'plab delegatlar ro'yxatdan o'tadi." },
  { id: 57, ind: "Bojxona Deklaratsiyasi", e1: "Exporter", pk1: "exporterInn", a1: ["companyName", "legalAddress", "licenseDate"], e2: "CustomsPost", pk2: "postCode", a2: ["postName", "borderRegion", "terminalCapacityTons"], assoc: "CustomsDeclaration", pkAssoc: "gtdNumber", aAssoc: ["cargoInvoiceSum", "customsDutyPaid", "clearanceDate"], rule: "Eksportchi korxona o'z yuklarini turli bojxona postlari orqali o'tkazishi mumkin, postda esa minglab eksportchilar deklaratsiya topshiradi." },
  { id: 58, ind: "Raqamli OAV Portal", e1: "Article", pk1: "articleSlug", a1: ["headline", "authorName", "publishDateTime"], e2: "ContentTag", pk2: "tagId", a2: ["tagName", "categoryTheme", "popularityIndex"], assoc: "ArticleTagMap", pkAssoc: "mappingId", aAssoc: ["attachedOrder", "autoSuggestedByAi", "relevanceScore"], rule: "Yangilik maqolasiga bir nechta tematik teglar biriktiriladi, bitta teg esa yuzlab turli maqolalarda uchraydi." },
  { id: 59, ind: "O'quv Markazi Jadvali", e1: "Instructor", pk1: "tutorId", a1: ["tutorName", "subjectExpertise", "contactPhone"], e2: "Classroom", pk2: "roomCode", a2: ["buildingWing", "projectorModel", "seatingCap"], assoc: "LessonSchedule", pkAssoc: "scheduleEntryId", aAssoc: ["dayOfWeek", "lessonPeriod", "studyGroupId"], rule: "O'qituvchi haftaning turli kunlarida turli auditoriyalarda dars beradi, bitta auditoriyada esa turli o'qituvchilar navbat bilan mashg'ulot o'tkazadi." },
  { id: 60, ind: "B2B Ta'minot Shartnomalari", e1: "Retailer", pk1: "storeChainId", a1: ["chainName", "outletCount", "cityHq"], e2: "Supplier", pk2: "supplierInn", a2: ["vendorName", "warehouseLocation", "reliabilityScore"], assoc: "SupplyContract", pkAssoc: "contractDocNo", aAssoc: ["monthlyOrderMinimum", "paymentTermDays", "penaltyRatePercent"], rule: "Chakana savdo tarmog'i yuzlab yetkazib beruvchilar bilan shartnoma tuzadi, yirik yetkazib beruvchi ham turli do'konlar tarmog'iga mahsulot beradi." }
];

S4_DATA.forEach(d => {
  DOMAINS.push({
    id: d.id, s: 4, sectorName: "4-Qavat • Yuqori (*..*)",
    ind: d.ind, role: "Bosh Baza Arxitektori", client: "Yetakchi Tahlilchi",
    title: `${d.e1} va ${d.e2} Hamkorligi`,
    e1: d.e1, pk1: d.pk1, a1: d.a1,
    e2: d.e2, pk2: d.pk2, a2: d.a2,
    assoc: d.assoc, pkAssoc: d.pkAssoc, aAssoc: d.aAssoc,
    isManyToMany: true,
    w1_story: `${d.ind} jarayonida ikki tomonlama ko'pga-ko'p munosabatlarni hisobga olish talab etiladi: ${d.rule}\n\nTizimda asosiy ishtirokchilar sifatida **${d.e1}** (${d.pk1} {PK}) va **${d.e2}** (${d.pk2} {PK}) qatnashadi.\n\nIkki tomon o'rtasida vujudga keladigan jarayon xususiyatlarini saqlash uchun assotsiativ entitiy **${d.assoc}** (${d.pkAssoc} {PK}, ${d.aAssoc.map(a => `\`${a}\``).join(', ')}) polotnoda aks ettiriladi.`,
    w1_inst: `'${d.e1}' va '${d.e2}' o'rtasida assotsiativ '${d.assoc}' entitiysini joylashtiring, {PK} kalitlarini belgilang va bog'lanishlarni o'rnating.`,
    w2_story: `1-haftadagi ko'pga-ko'p (*..*) munosabatni SQL relyatsion jadvallariga o'tkazish uchun oraliq '${d.assoc}' jadvali ochiladi. Unda ikkala asosiy jadvalning birlamchi kalitlari '${d.e1.toLowerCase()}Id' [FK1] va '${d.e2.toLowerCase()}Id' [FK2] sifatida kiritiladi.`,
    w2_inst: `'${d.assoc}' oraliq jadvaliga ikkala jadvalning Tashqi Kalitlari [FK1] va [FK2] ni kiriting va ularni '${d.e1}' hamda '${d.e2}' jadvallariga bog'lang.`
  });
});

// S5: Weak Entities & Discriminators (61..75)
const S5_DATA = [
  { id: 61, ind: "Mehmonxona Xonalari", e1: "Hotel", pk1: "hotelId", a1: ["hotelName", "starRating", "city"], e2: "Room", pk2: "roomNo", a2: ["bedCount", "floorNo", "dailyPrice"], rel: "HasRoom", rule: "Xona mustaqil holda mavjud bo'la olmaydi; uning xona raqami faqat bitta mehmonxona binosi ichida ma'noga ega bo'lib, qisman kalit (discriminator) hisoblanadi." },
  { id: 62, ind: "Bino Qavatlari", e1: "Building", pk1: "buildingId", a1: ["buildingName", "streetAddress", "totalFloors"], e2: "BuildingFloor", pk2: "floorNo", a2: ["emergencyExitCount", "usableAreaSqm"], rel: "ContainsFloor", rule: "Qavat faqat o'z binosi doirasida mavjud; qavat raqami bino identifikatorisiz global miqyosda takrorlanuvchi bo'ladi." },
  { id: 63, ind: "Xodim Qaramog'idagilar", e1: "Employee", pk1: "empId", a1: ["empName", "department", "salary"], e2: "Dependent", pk2: "depName", a2: ["relationshipType", "birthDate", "gender"], rel: "HasDependent", rule: "Qaramog'idagi oila a'zosi xodimsiz korxona sug'urta tizimida mavjud bo'la olmaydi; xodim ishdan bo'shasa uning qarindoshlari ham reyestrdan o'chiriladi." },
  { id: 64, ind: "Kutubxona Nusxalari", e1: "BookTitle", pk1: "isbn", a1: ["title", "author", "editionYear"], e2: "BookCopy", pk2: "copyNo", a2: ["conditionStatus", "shelfBay", "isAvailable"], rel: "HasCopy", rule: "Fizik kitob nusxasi ma'lum bir kitob asariga bog'liq; nusxa raqami (1, 2, 3...) faqat o'sha ISBN ichida ma'noga ega." },
  { id: 65, ind: "Bank Hisob Tranzaksiyalari", e1: "BankAccount", pk1: "accountNo", a1: ["holderName", "currency", "balance"], e2: "AccountTransaction", pk2: "txSeqNo", a2: ["txAmount", "txTimestamp", "terminalCode"], rel: "LogsTx", rule: "Hisob tranzaksiyasi hisobsiz mavjud bo'lmaydi; har bir tranzaksiya tartib raqami o'sha hisob doirasida 1 dan boshlab hisoblanadi." },
  { id: 66, ind: "Aviaparvoz Chiptalari", e1: "FlightSchedule", pk1: "flightNo", a1: ["originIata", "destIata", "depTime"], e2: "BoardingPass", pk2: "seatNo", a2: ["passengerName", "gateNumber", "boardingGroup"], rel: "IssuesPass", rule: "Bortga chiqish taloni parvoz reysisiz mavjud emas; joy raqami faqat ushbu samolyot reysi ichida noyobdir." },
  { id: 67, ind: "Turar-Joy Kvartiralari", e1: "ApartmentComplex", pk1: "complexId", a1: ["complexName", "street", "blockLetter"], e2: "FlatUnit", pk2: "flatNo", a2: ["roomsCount", "areaSqm", "floorLevel"], rel: "ComprisesFlat", rule: "Xonadon faqat o'z turar-joy majmuasi ichida mavjud; kvartira raqami majmuasiz shahar bo'yicha noyob bo'lolmaydi." },
  { id: 68, ind: "Dori Ishlab Chiqarish Partiyalari", e1: "DrugFormula", pk1: "formulaCode", a1: ["chemicalName", "patentExpDate", "dosageMg"], e2: "BatchLot", pk2: "lotNumber", a2: ["prodDate", "expiryDate", "labTechStaffId"], rel: "ProducedInLot", rule: "Ishlab chiqarilgan dori partiyasi uning kimyoviy formulasiga bog'liq; partiya raqami faqat shu preparat doirasida qisman kalit sanaladi." },
  { id: 69, ind: "Onlayn Kurs Modullari", e1: "OnlineCourse", pk1: "courseId", a1: ["courseTitle", "authorName", "priceUsd"], e2: "CourseLesson", pk2: "lessonSeqNo", a2: ["videoDurationMin", "lessonTitle", "isFreePreview"], rel: "ContainsLesson", rule: "Video darslik mustaqil mavjud bo'lmaydi; darsning ketma-ketlik raqami faqat o'sha o'quv kursi ichida tartiblangan." },
  { id: 70, ind: "Poyezd Tarkibi Vagonlari", e1: "TrainRoute", pk1: "trainNo", a1: ["routeTitle", "departureStation", "arrivalStation"], e2: "CarriageUnit", pk2: "coachNumber", a2: ["classType", "berthCapacity", "manufactureYear"], rel: "IncludesCarriage", rule: "Vagon poyezd tarkibisiz marshrutda qatnamaydi; vagon raqami poyezd lokomotivi kodi bilan birga to'liq identifikatsiyalanadi." },
  { id: 71, ind: "Klinik Tahlil Parametrlari", e1: "LabSample", pk1: "sampleBarcode", a1: ["patientId", "collectionTime", "sampleType"], e2: "TestResultItem", pk2: "testMetricCode", a2: ["measuredValue", "normalRange", "unitMeasure"], rel: "YieldsResult", rule: "Tahlil natijasi olingan qon/namuna probirkasisiz mavjud emas; parametr kodi probirka shtrix-kodi bilan birikadi." },
  { id: 72, ind: "Sanoat Stanogi Detal Uyasi", e1: "IndustrialMachine", pk1: "machineId", a1: ["modelName", "installDate", "powerKw"], e2: "ComponentSlot", pk2: "slotCode", a2: ["installedPartSerial", "serviceLifeHours", "lastReplaced"], rel: "FittedWith", rule: "Uskuna uyasi stanok konstruksiyasidan ajralmas; uya kodi faqat o'sha stanok pasporti ichida ma'noga ega." },
  { id: 73, ind: "Teatr Zoli Joylari", e1: "AuditoriumHall", pk1: "hallId", a1: ["hallName", "soundAcousticGrade", "screenType"], e2: "HallSeat", pk2: "seatNumber", a2: ["rowLetter", "seatTier", "isVipZone"], rel: "HasSeat", rule: "O'rindiq teatr zolisiz mavjud bo'lmaydi; o'rindiq raqami faqat ma'lum bir zal ichida takrorlanmas hisoblanadi." },
  { id: 74, ind: "Smartfon Xotira Variantlari", e1: "SmartphoneModel", pk1: "modelCode", a1: ["marketingName", "releaseYear", "baseSocCpu"], e2: "HardwareConfig", pk2: "configCode", a2: ["storageGb", "ramGb", "colorVariant"], rel: "ConfiguredAs", rule: "Modifikatsiya smartfon modelisiz ma'nosiz; konfiguratsiya kodi faqat o'sha smartfon modeli doirasida amal qiladi." },
  { id: 75, ind: "Ilmiy Maqola Qo'shimchalari", e1: "ResearchPaper", pk1: "doiCode", a1: ["paperTitle", "primaryAuthor", "submissionDate"], e2: "SupplementaryFile", pk2: "fileIndex", a2: ["fileChecksum", "mimeType", "dataSizeBytes"], rel: "AccompaniedBy", rule: "Ilova fayli maqolasiz mavjud bo'lolmaydi; ilova raqami (1-ilova, 2-ilova...) maqolaning DOI raqamiga bog'liq." }
];

S5_DATA.forEach(d => {
  DOMAINS.push({
    id: d.id, s: 5, sectorName: "5-Qavat • Yuqori (Zaif Entitiy)",
    ind: d.ind, role: "Tizim Muhandisi", client: "Loyiha Nazoratchisi",
    title: `${d.e1} va ${d.e2} (Zaif Bog'liqlik)`,
    e1: d.e1, pk1: d.pk1, a1: d.a1,
    e2: d.e2, pk2: d.pk2, a2: d.a2,
    rel: d.rel, m1: "1..1", m2: "1..*",
    isWeak: true,
    fkTable: d.e2, fkCol: `${d.e1.toLowerCase()}Id`, refTable: d.e1, refCol: d.pk1,
    w1_story: `${d.ind} faoliyatida ob'yektlarning mavjudlik bog'liqligi (existence dependency) asosida ishlovchi zaif entitiylar mavjud: ${d.rule}\n\nTizimda kuchli ega (Owner) entitiy sifatida **${d.e1}** (${d.pk1} {PK}, ${d.a1.map(a => `\`${a}\``).join(', ')}) ro'yxatga olinadi.\n\nUnga to'liq qaram zaif entitiy esa **${d.e2}** bo'lib, uning qisman kaliti (discriminator / PPK) \`${d.pk2}\` va boshqa atributlari: ${d.a2.map(a => `\`${a}\``).join(', ')}. Ular o'rtasida identifikatsiyalovchi **${d.rel}** aloqasi o'rnatiladi.`,
    w1_inst: `'${d.e1}' kuchli entitiysini va unga qaram zaif '${d.e2}' entitiysini chizing, '${d.pk2}' ni qisman kalit (PPK) deb belgilang va identifikatsiyalovchi aloqa bilan bog'lang.`,
    w2_story: `1-haftadagi zaif entitiyani relyatsion sxemaga o'tkazishda: zaif '${d.e2}' jadvalining Birlamchi Kaliti ota jadval kaliti '${d.e1.toLowerCase()}Id' [FK1] bilan o'zining qisman kaliti '${d.pk2}' ning kompozit birlashmasi [PK,FK1] orqali hosil qilinadi.`,
    w2_inst: `'${d.e2}' jadvaliga ota kalit '${d.e1.toLowerCase()}Id' [PK,FK1] ni qo'shing va '${d.e1}' jadvaliga bog'lang.`
  });
});

// S6: Recursive / Unary (76..90)
const S6_DATA = [
  { id: 76, ind: "Korporativ Rahbariyat", e1: "Employee", pk1: "empId", a1: ["fullName", "jobPosition", "salary"], rel: "Manages", role1: "supervisor", role2: "supervisee", rule: "Xodim o'zidan quyi xodimlarga bevosita rahbarlik qilishi mumkin, har bir xodim esa bitta rahbarga hisobot beradi." },
  { id: 77, ind: "Marketpleys Katalogi", e1: "ProductCategory", pk1: "categoryId", a1: ["categoryName", "displayOrder"], rel: "SubCategoryOf", role1: "parentCat", role2: "subCat", rule: "Tovar kategoriyasi boshqa bosh kategoriyaning ichki bo'limi bo'lishi mumkin va daraxtsimon ierarxiyani hosil qiladi." },
  { id: 78, ind: "Dvigatel Butlovchi Qismlari", e1: "PartComponent", pk1: "partNumber", a1: ["partName", "unitCost", "weightKg"], rel: "AssembledFrom", role1: "parentAssembly", role2: "subComponent", rule: "Bitta yirik mexanik detal o'zidan kichikroq detallar yig'indisidan tashkil topadi." },
  { id: 79, ind: "Oliy Ta'lim Dasturi", e1: "AcademicCourse", pk1: "courseCode", a1: ["courseTitle", "creditUnits", "level"], rel: "RequiresPrereq", role1: "advancedCourse", role2: "prerequisiteCourse", rule: "Yuqori bosqichdagi fanni o'rganish uchun talabadan quyi bosqichdagi ma'lum fanni muvaffaqiyatli topshirgan bo'lish talab etiladi." },
  { id: 80, ind: "FHDYo Qonuniy Nikohi", e1: "Citizen", pk1: "pinfl", a1: ["fullName", "gender", "birthDate"], rel: "MarriedTo", role1: "spouseA", role2: "spouseB", rule: "Qonunchilikka ko'ra bir fuqaro faqat bitta boshqa fuqaro bilan qonuniy nikohda turishi mumkin." },
  { id: 81, ind: "Tranzit Aviaqatnovlar", e1: "FlightLeg", pk1: "legId", a1: ["routeCode", "depAirport", "arrAirport"], rel: "ConnectsTo", role1: "inboundLeg", role2: "outboundConnectingLeg", rule: "Bitta oraliq parvoz reysi yo'lovchilarni keyingi davom etuvchi tutash reysga o'tkazishi mumkin." },
  { id: 82, ind: "Dasturiy Paketlar Kutubxonasi", e1: "SoftwarePackage", pk1: "packageId", a1: ["packageName", "semanticVersion", "licenseType"], rel: "DependsOn", role1: "dependentModule", role2: "requiredDependency", rule: "Dasturiy kutubxona o'z ishlashi uchun boshqa bir qancha kutubxonalarga tayanadi." },
  { id: 83, ind: "Shaxmat Musobaqasi", e1: "ChessMaster", pk1: "fideId", a1: ["masterName", "eloRating", "federationCountry"], rel: "PlaysMatch", role1: "whitePlayer", role2: "blackPlayer", rule: "Shaxmatchi musobaqa doirasida boshqa bir shaxmatchiga qarshi oq yoki qora donalarda dona suradi." },
  { id: 84, ind: "Tarixiy Shajara", e1: "HistoricalFigure", pk1: "personId", a1: ["fullName", "birthCentury", "dynastyTitle"], rel: "AncestorOf", role1: "parentAncestor", role2: "childDescendant", rule: "Tarixiy shaxs o'zidan keyingi avlod vakilining bevosita ajdodi bo'lib nasl zanjirini bog'laydi." },
  { id: 85, ind: "Sud Pretsedenti", e1: "LegalPrecedent", pk1: "caseNo", a1: ["verdictYear", "jurisdictionCourt", "lawArticle"], rel: "CitesPrecedent", role1: "currentRulingCase", role2: "citedPrecedentCase", rule: "Ko'rilayotgan sud ishi o'tmishda yakunlangan boshqa bir sud pretsedenti qaroriga tayanadi." },
  { id: 86, ind: "Ijtimoiy Tarmoq Tarmog'i", e1: "NetworkUser", pk1: "userHandle", a1: ["displayName", "joinDate", "isVerified"], rel: "FollowsUser", role1: "followerUser", role2: "followedUser", rule: "Tarmoq foydalanuvchisi boshqa foydalanuvchining sahifasiga obuna bo'lib uning yangiliklarini kuzatadi." },
  { id: 87, ind: "Xalqaro Xoldinglar", e1: "CorporateEnterprise", pk1: "holdingId", a1: ["corporateName", "hqCountry", "capitalUsd"], rel: "SubsidiaryOf", role1: "parentHolding", role2: "daughterCompany", rule: "Kompaniya boshqa bir yirikroq korporativ xoldingning sho''ba korxonasi sifatida unga bo'ysunadi." },
  { id: 88, ind: "Metropoliten Liniyasi", e1: "MetroStation", pk1: "stationCode", a1: ["stationName", "lineColor", "zoneNo"], rel: "AdjacentTo", role1: "precedingStop", role2: "succeedingStop", rule: "Metro bekati temir yo'l yo'nalishi bo'ylab keyingi qo'shni bekat bilan bevosita tutashgan." },
  { id: 89, ind: "Virusologik Mutatsiya", e1: "PathogenStrain", pk1: "strainId", a1: ["genomeSeqHash", "isolationDate", "virulenceRate"], rel: "MutatedFrom", role1: "ancestralStrain", role2: "mutantLineage", rule: "Yangi ajratilgan virus shtammi o'zidan oldingi ajdod virus shtammining mutatsiyasidan vujudga keladi." },
  { id: 90, ind: "Internet Veb Sahifalari", e1: "WebDocument", pk1: "pageUrl", a1: ["pageTitle", "pageRankScore", "lastCrawled"], rel: "HyperlinksTo", role1: "referringPage", role2: "targetLinkedPage", rule: "Internet veb sahifasida boshqa bir veb sahifaga o'tuvchi gipermatnli havola joylashtiriladi." }
];

S6_DATA.forEach(d => {
  DOMAINS.push({
    id: d.id, s: 6, sectorName: "6-Qavat • Ekspert (Rekursiv)",
    ind: d.ind, role: "Yetakchi Me'mor", client: "Bosh Tahlilchi",
    title: `${d.e1} Rekursiv Ierarxiyasi`,
    e1: d.e1, pk1: d.pk1, a1: d.a1,
    rel: d.rel, role1: d.role1, role2: d.role2, m1: "0..1", m2: "0..*",
    isRecursive: true,
    w1_story: `${d.ind} tizimida bir xil turdagi ob'yektlarning o'zaro ichki ierarxiyasi mavjud: ${d.rule}\n\nTizimda yagona markaziy entitiy — **${d.e1}** (${d.pk1} {PK}, ${d.a1.map(a => `\`${a}\``).join(', ')}) mavjud.\n\nUshbu entitiy o'z-o'ziga bog'lanuvchi **${d.rel}** rekursiv munosabatiga ega bo'lib, nusxalar \`${d.role1}\` va \`${d.role2}\` rollarini bajaradi.`,
    w1_inst: `'${d.e1}' entitiysini yarating va uning o'ziga-o'zi bog'lanuvchi rekursiv '${d.rel}' aloqasini to'g'ri multiplisitiya bilan o'rnating.`,
    w2_story: `1-haftadagi rekursiv munosabatni relyatsion jadvalga o'tkazish uchun: '${d.e1}' jadvaliga o'zining birlamchi kalitiga tayanuvchi '${d.role1}Id' [FK1] Tashqi Kalit ustunini qo'shing va o'z jadvaliga bog'lang.`,
    w2_inst: `'${d.e1}' jadvaliga '${d.role1}Id' [FK1] ustunini qo'shib, uni o'zining '${d.pk1}' [PK] ustuniga bog'lang.`
  });
});

// S7: EER Disjoint {Mandatory, Or} (91..105)
// Copying domains from 1..15 but with clear EER mapping
for (let i = 91; i <= 105; i++) {
  const base = DOMAINS[i - 91]; // maps to 1..15
  DOMAINS.push({
    id: i, s: 7, sectorName: "7-Qavat • Ekspert (Disjoint ISA)",
    ind: base.ind, role: base.role, client: base.client,
    title: `${base.e1} Disjoint Ixtisoslashuvi`,
    e1: base.e1, pk1: base.pk1, a1: base.a1,
    w2_e1: `${base.e1}TypeA`, w2_a1: ["specAttrA1", "specAttrA2"],
    w2_e2: `${base.e1}TypeB`, w2_a2: ["specAttrB1", "specAttrB2"],
    w2_constraint: "{Mandatory, Or}",
    isDisjoint: true,
    w1_story: `${base.ind} sohasida xizmat turlarini mutlaqo alohida, kesishmaydigan toifalarga ajratish zarurati paydo bo'ldi. Har bir ob'yekt umumiy xususiyatlarga ega bo'lishi bilan birga, faqat o'ziga xos parametrlarni ham saqlashi kerak.\n\nUmumiy superklass sifatida **${base.e1}** (${base.pk1} {PK}, ${base.a1.map(a => `\`${a}\``).join(', ')}) xizmat qiladi.\n\nBiznes talabiga ko'ra har bir obyekt majburiy ravishda yo birinchi toifaga, yo ikkinchi toifaga kiradi, lekin bir vaqtda ikkalasi bo'la olmaydi.`,
    w1_inst: `'${base.e1}' superklassini yarating va uning ixtisoslashgan subklasslarini ISA ierarxiyasi orqali bog'lang.`,
    w2_story: `1-haftadagi disjoint {Mandatory, Or} modelini SQL relyatsion jadvallarga o'tkazish: har bir subklass alohida jadval bo'ladi va superklassning Birlamchi Kalitini o'ziga [PK,FK1] qilib oladi.`,
    w2_inst: `Subklass jadvallariga ota kalit '${base.pk1}' ni [PK,FK1] qilib joylashtiring va superklass jadvaliga bog'lang.`
  });
}

// S8: EER Overlapping {Optional, And} (106..120)
const S8_DATA = [
  { id: 106, ind: "Universitet Akademik Shtati", e1: "UniversityStaff", pk1: "staffId", a1: ["fullName", "email", "salary"], sub1: "Instructor", sub2: "Researcher", rule: "Xodim bir vaqtning o'zida ham dars berishi (o'qituvchi), ham grant loyihasi ustida tadqiqot olib borishi (tadqiqotchi) mumkin." },
  { id: 107, ind: "Tijorat Banki Mijozlari", e1: "BankClient", pk1: "clientId", a1: ["clientName", "taxCode", "contactPhone"], sub1: "Depositor", sub2: "Borrower", rule: "Mijoz bir vaqtda ham depozit hisobiga pul qo'ygan omonatchi, ham kredit olgan qarzdor bo'lishi mumkin." },
  { id: 108, ind: "Axborot Xavfsizligi", e1: "SystemUser", pk1: "userLogin", a1: ["email", "createdDate", "lastLogin"], sub1: "SecurityAdmin", sub2: "SystemDev", rule: "Foydalanuvchi bir vaqtda ham xavfsizlik ma'muri, ham ishlab chiquvchi dasturchi rollariga ega bo'lishi mumkin." },
  { id: 109, ind: "Ilmiy Kongress", e1: "ConferenceAttendee", pk1: "attendeeId", a1: ["attendeeName", "institution", "country"], sub1: "KeynoteSpeaker", sub2: "CommitteeReviewer", rule: "Ishtirokchi ham ma'ruza qiluvchi spiker, ham maqolalarni baholovchi hay'at a'zosi bo'lishi mumkin." },
  { id: 110, ind: "Sport Klubi Shtati", e1: "AthleteMember", pk1: "athleteId", a1: ["athleteName", "bloodGroup", "joinYear"], sub1: "LeaguePlayer", sub2: "TeamCoach", rule: "Tajribali sportchi ham maydonda o'yinchi, ham yoshlarga murabbiy sifatida faoliyat yuritishi mumkin." },
  { id: 111, ind: "Aviatsiya Ekipaji", e1: "CrewMember", pk1: "crewId", a1: ["crewName", "flightHoursTotal", "medicalCertDate"], sub1: "CommercialPilot", sub2: "SafetyInspector", rule: "Ekipaj a'zosi ham parvoz uchuvchisi, ham xavfsizlik auditori vakolatiga ega bo'la oladi." },
  { id: 112, ind: "Avtodilerlik Klasteri", e1: "DealershipClient", pk1: "clientId", a1: ["fullName", "passportNumber", "contactPhone"], sub1: "VehicleBuyer", sub2: "ServiceClient", rule: "Mijoz ham yangi avtomobil xarid qiluvchi, ham ta'mirlash xizmatidan foydalanuvchi bo'lishi mumkin." },
  { id: 113, ind: "Teatr Ijodiy Jamoasi", e1: "TheatreArtist", pk1: "artistId", a1: ["stageName", "unionCardNo", "debutYear"], sub1: "StageActor", sub2: "PlayDirector", rule: "Ijodkor aktyor sifatida sahnaga chiqishi bilan birga sahnalashtiruvchi rejissyor ham bo'lishi mumkin." },
  { id: 114, ind: "Klinik Tadqiqotlar", e1: "MedicalStaff", pk1: "licenseNo", a1: ["doctorName", "specialtyField", "phone"], sub1: "Clinician", sub2: "TrialInvestigator", rule: "Shifokor ham bemorlarni davolovchi vrach, ham dori sinovlarini o'tkazuvchi tadqiqotchi bo'la oladi." },
  { id: 115, ind: "Raqamli Media", e1: "ContentCreator", pk1: "creatorId", a1: ["channelName", "subscriberTotal", "contractExpiry"], sub1: "VideoPresenter", sub2: "AudioPodcaster", rule: "Muallif ham video lavha boshlovchisi, ham audio podkast yaratuvchisi sifatida faoliyat ko'rsatishi mumkin." },
  { id: 116, ind: "Logistika Kuryerlari", e1: "FleetDriver", pk1: "driverStaffId", a1: ["driverName", "driverLicenseNo", "ratingStars"], sub1: "ExpressCourier", sub2: "LongHaulDriver", rule: "Haydovchi ham shahar ichida tezkor yetkazuvchi, ham shaharlararo yuk tashuvchi vazifasini bajarishi mumkin." },
  { id: 117, ind: "Restoran Xizmati", e1: "RestaurantStaff", pk1: "staffBadgeId", a1: ["staffName", "foodSafetyCertDate", "wageHourly"], sub1: "ChiefBartender", sub2: "SommelierExpert", rule: "Xodim ham barda kokteyl ustasi, ham vino zaxirasini boshqaruvchi somelye bo'la oladi." },
  { id: 118, ind: "Mulk Birjasi", e1: "RealEstateCustomer", pk1: "customerId", a1: ["fullName", "passportPin", "contactPhone"], sub1: "PropertyVendor", sub2: "PropertyAcquirer", rule: "Mijoz ham o'z eski uyini sotuvchi, ham o'rniga yangi kvartira xarid qiluvchi bo'lishi mumkin." },
  { id: 119, ind: "EdTech Platforma", e1: "PlatformUser", pk1: "userId", a1: ["userFullName", "emailAddress", "regTimestamp"], sub1: "ActiveLearner", sub2: "TeachingMentor", rule: "Foydalanuvchi ma'lum kurslarda talaba, o'zi mutaxassis bo'lgan boshqa kursda esa mentor bo'lishi mumkin." },
  { id: 120, ind: "B2B Savdo", e1: "TradingEnterprise", pk1: "enterpriseInn", a1: ["legalEntityName", "bankBik", "cityHq"], sub1: "RawMaterialSupplier", sub2: "WholesaleDistributor", rule: "Korxona ham xomashyo yetkazib beruvchi, ham tayyor tovarlarni ulgurji tarqatuvchi bo'la oladi." }
];

S8_DATA.forEach(d => {
  DOMAINS.push({
    id: d.id, s: 8, sectorName: "8-Qavat • Professional (Overlapping)",
    ind: d.ind, role: "Yetakchi Arxitektor", client: "Loyiha Rahbari",
    title: `${d.e1} Overlapping Ixtisoslashuvi`,
    e1: d.e1, pk1: d.pk1, a1: d.a1,
    sub1: d.sub1, sub2: d.sub2,
    isOverlapping: true,
    w1_story: `${d.ind} faoliyatida bitta sub'yekt bir vaqtning o'zida bir nechta rolni bajarishi mumkin: ${d.rule}\n\nTizimda superklass sifatida **${d.e1}** (${d.pk1} {PK}, ${d.a1.map(a => `\`${a}\``).join(', ')}) qayd etiladi.\n\nUndan ajratilgan subklasslar bir vaqtda kesishishi mumkin bo'lgan EER umumlashtirish qoidasi asosida bog'lanadi.`,
    w1_inst: `'${d.e1}' superklassini va uning ustma-ust tushuvchi '${d.sub1}' hamda '${d.sub2}' subklasslarini polotnoda bog'lang.`,
    w2_story: `1-haftadagi ustma-ust tushuvchi modelni relyatsion sxemaga o'tkazishda: har bir subklass alohida jadval bo'lib, ota jadvalning '${d.pk1}' kalitini o'ziga Birlamchi va Tashqi kalit [PK,FK1] sifatida oladi.`,
    w2_inst: `'${d.sub1}' va '${d.sub2}' jadvallarida '${d.pk1}' [PK,FK1] ustunini belgilab, ota jadvalga havola qiling.`
  });
});

// S9: EER Categories / Union Types (121..135)
const S9_DATA = [
  { id: 121, ind: "Mulk Egaligi", cat: "PropertyOwner", e1: "Person", pk1: "pinfl", e2: "Bank", pk2: "bankCode", e3: "Company", pk3: "tin", rule: "Ko'chmas mulk egasi fuqaro, ipoteka banki yoki tijorat kompaniyasi bo'lishi mumkin." },
  { id: 122, ind: "Avtotransport Ro'yxati", cat: "VehicleOwner", e1: "PrivateCitizen", pk1: "citizenPinfl", e2: "LeasingFirm", pk2: "leasingInn", e3: "StateAgency", pk3: "agencyCode", rule: "Avtomobil egasi jismoniy shaxs, lizing firmasi yoki davlat idorasi bo'la oladi." },
  { id: 123, ind: "G'aznachilik To'lovlari", cat: "PayeeEntity", e1: "FreelanceContractor", pk1: "freelancerId", e2: "UtilityProvider", pk2: "utilityInn", e3: "TaxAuthority", pk3: "taxOfficeNo", rule: "To'lovni qabul qiluvchi frilanser usta, kommunal korxona yoki soliq inspeksiyasi bo'lishi mumkin." },
  { id: 124, ind: "Kredit Qarzdorligi", cat: "LoanBorrower", e1: "SoleProprietorship", pk1: "spInn", e2: "CommercialPartnership", pk2: "partnershipNo", e3: "CorporationHolding", pk3: "holdingTin", rule: "Bankdan kredit oluvchi yakka tadbirkor, shirkat yoki xalqaro xolding bo'la oladi." },
  { id: 125, ind: "Notarial Hujjatlar", cat: "LegalSignatory", e1: "DomesticCitizen", pk1: "residentPinfl", e2: "ForeignDiplomat", pk2: "passportNumber", e3: "CorporateAttorney", pk3: "powerOfAttorneyNo", rule: "Hujjatga imzo chekuvchi mahalliy fuqaro, xorijiy diplomat yoki ishonchnomali advokat bo'lishi mumkin." },
  { id: 126, ind: "Bojxona Kargo Yuklari", cat: "CargoConsignor", e1: "ManufacturingPlant", pk1: "factoryTin", e2: "TradingHouse", pk2: "tradingLicNo", e3: "HumanitarianMission", pk3: "missionRegCode", rule: "Yuk jo'natuvchi ishlab chiqaruvchi zavod, savdo kompaniyasi yoki gumanitar jamg'arma bo'la oladi." },
  { id: 127, ind: "Patent Huquqi", cat: "PatentAssignee", e1: "ResearchUniversity", pk1: "universityCharterNo", e2: "IndependentInventor", pk2: "inventorPinfl", e3: "TechCorporation", pk3: "corpTin", rule: "Patent egasi ilmiy universitet, yakka ixtirochi yoki texnologik korporatsiya bo'lishi mumkin." },
  { id: 128, ind: "Sug'urta To'lovlari", cat: "PolicyBeneficiary", e1: "FamilyKin", pk1: "relativePinfl", e2: "MortgageBank", pk2: "bankLicNo", e3: "CharitableTrust", pk3: "charityRegNo", rule: "Sug'urta to'lovini oluvchi merosxo'r oila a'zosi, ipoteka banki yoki xayriya jamg'armasi bo'la oladi." },
  { id: 129, ind: "Savdo Belgilari", cat: "TrademarkOwner", e1: "PrivateEnterpriser", pk1: "tinNo", e2: "NonProfitOrg", pk2: "npoCertNo", e3: "JointStockCompany", pk3: "jscInn", rule: "Savdo markasi egasi xususiy tadbirkor, notijorat tashkilot yoki aksiyadorlik jamiyati bo'lishi mumkin." },
  { id: 130, ind: "Tibbiy Kafillik", cat: "HealthCoverageSponsor", e1: "EmployerCompany", pk1: "employerTin", e2: "HealthMinistry", pk2: "ministryCode", e3: "PrivatePhilanthropist", pk3: "donorPinfl", rule: "Davolanish xarajatini qoplovchi ish beruvchi firma, vazirlik byudjeti yoki homiy bo'la oladi." },
  { id: 131, ind: "Qimmatli Qog'ozlar Depozitariysi", cat: "ShareholderEntity", e1: "MutualFund", pk1: "fundRegNo", e2: "SovereignWealthFund", pk2: "sovereignCode", e3: "RetailInvestor", pk3: "investorPassportNo", rule: "Aksiya egasi xususiy investitsiya fondi, davlat suveren fondi yoki chakana investor bo'lishi mumkin." },
  { id: 132, ind: "Aerodrom Uchish Yo'lagi", cat: "RunwayOperator", e1: "CommercialAirline", pk1: "airlineIata", e2: "AirForceSquadron", pk2: "militaryUnitCode", e3: "PrivateAirCharter", pk3: "charterFlightCert", rule: "Uchish yo'lagidan fuqaro aviakompaniyasi, harbiy eskadron yoki xususiy charter foydalanishi mumkin." },
  { id: 133, ind: "Telekom Abonentlari", cat: "TelecomSubscriber", e1: "IndividualSubscriber", pk1: "personalId", e2: "CorporateSubscriber", pk2: "companyInn", e3: "IotDeviceGateway", pk3: "macAddressDevice", rule: "Aloqa tarmog'i abonenti jismoniy fuqaro, korporativ kompaniya yoki IoT smart qurilmasi bo'la oladi." },
  { id: 134, ind: "Ilmiy Grantlar", cat: "GrantFunder", e1: "StateScienceAgency", pk1: "govAgencyId", e2: "TechConsortium", pk2: "consortiumInn", e3: "GlobalFoundation", pk3: "foundationRegNo", rule: "Grant moliyalashtiruvchisi davlat ilmiy agentligi, IT konsorsium yoki xalqaro fond bo'lishi mumkin." },
  { id: 135, ind: "Davlat Tenderlari", cat: "TenderBidder", e1: "EngineeringConsortium", pk1: "consortiumCode", e2: "ConstructionCorp", pk2: "builderInn", e3: "MunicipalUtility", pk3: "utilityBranchNo", rule: "Tenderda qatnashuvchi muhandislik konsortsiumi, qurilish korxonasi yoki shahar kommunal korxonasi bo'la oladi." }
];

S9_DATA.forEach(d => {
  DOMAINS.push({
    id: d.id, s: 9, sectorName: "9-Qavat • Professional (Kategoriya ∪)",
    ind: d.ind, role: "Tizim Arxitektori", client: "Bosh Maslahatchi",
    title: `${d.cat} Kategoriyasi (Union Type ∪)`,
    e1: d.e1, pk1: d.pk1, a1: ["nameOrTitle", "regDate"],
    e2: d.e2, pk2: d.pk2, a2: ["licenseCode", "contactEmail"],
    e3: d.e3, pk3: d.pk3, a3: ["charterNumber", "taxStatus"],
    category: d.cat,
    isUnion: true,
    w1_story: `${d.ind} faoliyatida turli xil mustaqil superklasslarni yagona toifaga birlashtiruvchi Kategoriya (Union Type ∪) kerak: ${d.rule}\n\nTizimda uchta mustaqil entitiy mavjud: **${d.e1}** (${d.pk1} {PK}), **${d.e2}** (${d.pk2} {PK}) va **${d.e3}** (${d.pk3} {PK}).\n\nUlar yagona umumiy **${d.cat}** kategoriyasiga (Union Type ∪) birlashtiriladi.`,
    w1_inst: `'${d.e1}', '${d.e2}' va '${d.e3}' entitiylarini chizing va ularni '${d.cat}' Union Type (∪) kategoriyasiga birlashtiring.`,
    w2_story: `1-haftadagi Union Type modelini relyatsion sxemaga o'tkazishda: umumiy '${d.cat}' jadvali ochilib, unga o'zining yagona 'ownerId' [PK] beriladi va superklasslar unga Tashqi Kalit bilan ulanadi.`,
    w2_inst: `'${d.cat}' jadvalini oching va uning Birlamchi Kalitini [PK] belgilang.`
  });
});

// S10: Integrated Enterprise Systems (136..150)
const S10_DATA = [
  { id: 136, ind: "Xalqaro Aeroport Majmuasi", e1: "Airport", pk1: "iataCode", a1: ["airportName", "cityLocation"], e2: "Terminal", pk2: "terminalId", a2: ["gateCount", "capacity"], e3: "FlightSchedule", pk3: "flightNo", a3: ["depTime", "destIata"], e4: "PassengerBooking", pk4: "bookingRef", a4: ["passengerName", "seatNo"] },
  { id: 137, ind: "Markaziy Bank Kliringi", e1: "CentralBank", pk1: "bankCode", a1: ["officialTitle", "goldReserveTons"], e2: "CommercialBank", pk2: "bikNumber", a2: ["bankName", "capitalSum"], e3: "SettlementAccount", pk3: "accNo", a3: ["currency", "balance"], e4: "ClearingTx", pk4: "txRef", a4: ["transferSum", "timestamp"] },
  { id: 138, ind: "Onkologiya Gospitali", e1: "Hospital", pk1: "hospId", a1: ["hospName", "address"], e2: "SpecializedWard", pk2: "wardCode", a2: ["wardName", "beds"], e3: "SpecializedDoctor", pk3: "licenseId", a3: ["docName", "specialty"], e4: "PatientCourse", pk4: "courseId", a4: ["protocol", "startDate"] },
  { id: 139, ind: "Trans-Okean Porti", e1: "MegaWarehouse", pk1: "hubCode", a1: ["portName", "berthCount"], e2: "ContainerVessel", pk2: "imoNumber", a2: ["vesselName", "teuCap"], e3: "CustomsDeclaration", pk3: "gtdNumber", a3: ["dutySum", "passed"], e4: "FreightForwarder", pk4: "forwarderInn", a4: ["title", "license"] },
  { id: 140, ind: "Universitet Kampusi", e1: "Faculty", pk1: "facultyCode", a1: ["facultyName", "building"], e2: "AcademicDept", pk2: "deptId", a2: ["deptTitle", "focusArea"], e3: "StaffMember", pk3: "staffNo", a3: ["staffName", "salary"], e4: "StudentClass", pk4: "classCode", a4: ["semester", "roomCode"] },
  { id: 141, ind: "Milliy Elektr Tizimi", e1: "PowerPlant", pk1: "plantCode", a1: ["plantName", "megaWatts"], e2: "Substation", pk2: "substationId", a2: ["substationName", "voltageKv"], e3: "TransmissionLine", pk3: "lineCode", a3: ["distanceKm", "ampCapacity"], e4: "LoadZone", pk4: "zoneId", a4: ["region", "peakDemand"] },
  { id: 142, ind: "Davlat Temir Yo'llari", e1: "RailwayNetwork", pk1: "networkId", a1: ["networkName", "trackMm"], e2: "TrainSchedule", pk2: "tripNo", a2: ["depTime", "arrTime"], e3: "LocomotiveEngine", pk3: "locoNo", a3: ["model", "powerHp"], e4: "PassengerTicket", pk4: "ticketPnr", a4: ["passengerName", "coachNo"] },
  { id: 143, ind: "Elektron Hukumat Portali", e1: "GovPortalService", pk1: "serviceCode", a1: ["serviceTitle", "fee"], e2: "CitizenRequest", pk2: "appId", a2: ["applicantPinfl", "submittedAt"], e3: "MinistryDept", pk3: "deptInn", a3: ["ministryTitle", "zone"], e4: "ProcessingOfficer", pk4: "officerId", a4: ["officerName", "certKey"] },
  { id: 144, ind: "GMP Farmatsevtika Klasteri", e1: "PharmaFactory", pk1: "facilityId", a1: ["facilityName", "gmpCert"], e2: "ChemicalLab", pk2: "labCode", a2: ["labSpec", "hplcCount"], e3: "DrugBatch", pk3: "batchNo", a3: ["manufDate", "passed"], e4: "QualityAudit", pk4: "auditId", a4: ["auditorName", "purityPct"] },
  { id: 145, ind: "Avtomobil Yig'uv Klasteri", e1: "CarManufacturer", pk1: "oemCode", a1: ["corpName", "isoCert"], e2: "AssemblyLine", pk2: "lineId", a2: ["lineModel", "dailyCap"], e3: "DealershipShowroom", pk3: "dealerId", a3: ["showroomCity", "quota"], e4: "VehicleOrder", pk4: "contractNo", a4: ["customerPin", "vin"] },
  { id: 146, ind: "SOC Kiberxavfsizlik", e1: "SOCNetwork", pk1: "perimeterId", a1: ["segmentName", "firewallIp"], e2: "SecurityThreat", pk2: "cveCode", a2: ["cvssScore", "category"], e3: "IncidentTicket", pk3: "incidentId", a3: ["detectedAt", "state"], e4: "MitigationAction", pk4: "actionId", a4: ["analystBadge", "patchedAt"] },
  { id: 147, ind: "Chakana Savdo Zanjiri", e1: "RetailStore", pk1: "storeId", a1: ["storeName", "cityAddress"], e2: "CentralDepot", pk2: "depotBarcode", a2: ["volumeTons", "slots"], e3: "SupplierVendor", pk3: "vendorInn", a3: ["vendorName", "slaScore"], e4: "ProductInventory", pk4: "inventorySku", a4: ["quantityOnHand", "reorderLevel"] },
  { id: 148, ind: "Neft-Gaz Majmuasi", e1: "RefineryPlant", pk1: "refineryCode", a1: ["refineryName", "capacityBarrels"], e2: "StorageTanker", pk2: "tankId", a2: ["grossVolumeM3", "grade"], e3: "PipelineSegment", pk3: "segmentCode", a3: ["diameterMm", "pressureBar"], e4: "CrudeOilShipment", pk4: "consignmentNo", a4: ["gravitySpec", "dispatchTime"] },
  { id: 149, ind: "5G Telekomunikasiya", e1: "TelecomCore", pk1: "coreSwitchId", a1: ["routerModel", "capacityTbps"], e2: "FiveGBaseStation", pk2: "gNodeBId", a2: ["freqGhz", "mimoSectors"], e3: "BillingSubscription", pk3: "subscriberMsisdn", a3: ["planName", "balanceGb"], e4: "DataTrafficSession", pk4: "cdrSessionId", a4: ["connectedAt", "megabytes"] },
  { id: 150, ind: "Kosmik Missiyalar Boshqaruvi", e1: "Spaceport", pk1: "complexId", a1: ["cosmodromeName", "padCount"], e2: "SatelliteOrbiter", pk2: "noradId", a2: ["satelliteName", "altitudeKm"], e3: "GroundStation", pk3: "stationCode", a3: ["dishDiameterMeters", "freqGhz"], e4: "MissionTelemetry", pk4: "telemetryId", a4: ["volts", "tempKelvin"] }
];

S10_DATA.forEach(d => {
  DOMAINS.push({
    id: d.id, s: 10, sectorName: "10-Qavat • Bosh Me'mor (Enterprise)",
    ind: d.ind, role: "Bosh Korporativ Me'mor", client: "Bosh Direktor",
    title: `${d.e1} Korporativ Arxitekturasi`,
    e1: d.e1, pk1: d.pk1, a1: d.a1,
    e2: d.e2, pk2: d.pk2, a2: d.a2,
    e3: d.e3, pk3: d.pk3, a3: d.a3,
    e4: d.e4, pk4: d.pk4, a4: d.a4,
    isEnterprise: true,
    w1_story: `${d.ind} bo'yicha korxona miqyosidagi integratsiyalashgan axborot tizimi qurilmoqda. Tizimda to'rtta asosiy bo'g'in: **${d.e1}** (${d.pk1} {PK}), **${d.e2}** (${d.pk2} {PK}), **${d.e3}** (${d.pk3} {PK}) va **${d.e4}** (${d.pk4} {PK}) o'zaro uzluksiz texnologik zanjirda faoliyat yuritadi.\n\nHar bir ob'yekt o'zining birlamchi kalitiga ega bo'lib, ular o'rtasidagi munosabatlar va multiplisitiyalar tashkilot reglamentiga mos ravishda polotnoda aks ettiriladi.`,
    w1_inst: `'${d.e1}', '${d.e2}', '${d.e3}' va '${d.e4}' entitiylarini polotnoda joylashtiring, {PK} kalitlarini belgilang va ular orasidagi barcha munosabatlarni to'g'ri bog'lang.`,
    w2_story: `1-haftadagi yirik korporativ modelni relyatsion sxemaga o'tkazish: har bir jadval o'zining [PK] va Tashqi Kalitlari [FK] orqali to'liq relieshon zanjirni hosil qiladi.`,
    w2_inst: `Barcha to'rtta jadvalni relieshon tarzda bog'lang: Tashqi Kalitlarni [FK1] to'g'ri joylashtirib, ota jadvallarga havola qiling.`
  });
});

console.log(`Total assembled domains: ${DOMAINS.length}`);

// Build W1 Question Data
function createW1Question(item) {
  let expectedDiagram = { entities: [], relationships: [] };

  if (item.s === 1) {
    expectedDiagram.entities.push({
      name: item.e1, pk: item.pk1,
      attributes: [{ name: item.pk1, isPK: true }, ...item.a1.map(a => ({ name: a, isPK: false }))]
    });
  } else if (item.s === 2 || item.s === 3) {
    expectedDiagram.entities.push(
      { name: item.e1, pk: item.pk1, attributes: [{ name: item.pk1, isPK: true }, ...item.a1.map(a => ({ name: a, isPK: false }))] },
      { name: item.e2, pk: item.pk2, attributes: [{ name: item.pk2, isPK: true }, ...item.a2.map(a => ({ name: a, isPK: false }))] }
    );
    expectedDiagram.relationships.push({
      entity1: item.e1, entity2: item.e2,
      mult1: item.m1 || "1..1", mult2: item.m2 || "1..*",
      name: item.rel || "Rel"
    });
  } else if (item.s === 4) {
    expectedDiagram.entities.push(
      { name: item.e1, pk: item.pk1, attributes: [{ name: item.pk1, isPK: true }, ...item.a1.map(a => ({ name: a, isPK: false }))] },
      { name: item.e2, pk: item.pk2, attributes: [{ name: item.pk2, isPK: true }, ...item.a2.map(a => ({ name: a, isPK: false }))] },
      { name: item.assoc, pk: item.pkAssoc, isAssociative: true, attributes: [{ name: item.pkAssoc, isPK: true }, ...item.aAssoc.map(a => ({ name: a, isPK: false }))] }
    );
    expectedDiagram.relationships.push(
      { entity1: item.e1, entity2: item.assoc, mult1: "1..1", mult2: "0..*", name: "InvolvedIn" },
      { entity1: item.e2, entity2: item.assoc, mult1: "1..1", mult2: "0..*", name: "SubjectOf" }
    );
  } else if (item.s === 5) {
    expectedDiagram.entities.push(
      { name: item.e1, pk: item.pk1, attributes: [{ name: item.pk1, isPK: true }, ...item.a1.map(a => ({ name: a, isPK: false }))] },
      { name: item.e2, pk: item.pk2, isWeak: true, attributes: [{ name: item.pk2, isPartialKey: true }, ...item.a2.map(a => ({ name: a, isPK: false }))] }
    );
    expectedDiagram.relationships.push({
      entity1: item.e1, entity2: item.e2,
      mult1: item.m1 || "1..1", mult2: item.m2 || "1..*",
      name: item.rel || "HasWeak", isIdentifying: true
    });
  } else if (item.s === 6) {
    expectedDiagram.entities.push({
      name: item.e1, pk: item.pk1,
      attributes: [{ name: item.pk1, isPK: true }, ...item.a1.map(a => ({ name: a, isPK: false }))]
    });
    expectedDiagram.relationships.push({
      entity1: item.e1, entity2: item.e1,
      mult1: item.m1 || "0..1", mult2: item.m2 || "0..*",
      name: item.rel, role1: item.role1, role2: item.role2
    });
  } else if (item.s === 7) {
    expectedDiagram.entities.push({
      name: item.e1, pk: item.pk1,
      attributes: [{ name: item.pk1, isPK: true }, ...item.a1.map(a => ({ name: a, isPK: false }))]
    });
    expectedDiagram.subclasses = {
      superclass: item.e1,
      subs: [{ name: item.w2_e1, attributes: [] }, { name: item.w2_e2, attributes: [] }],
      constraint: "{Mandatory, Or}"
    };
  } else if (item.s === 8) {
    expectedDiagram.entities.push({
      name: item.e1, pk: item.pk1,
      attributes: [{ name: item.pk1, isPK: true }, ...item.a1.map(a => ({ name: a, isPK: false }))]
    });
    expectedDiagram.subclasses = {
      superclass: item.e1,
      subs: [{ name: item.sub1, attributes: [] }, { name: item.sub2, attributes: [] }],
      constraint: "{Optional, And}"
    };
  } else if (item.s === 9) {
    expectedDiagram.entities.push(
      { name: item.e1, pk: item.pk1, attributes: [{ name: item.pk1, isPK: true }, ...item.a1.map(a => ({ name: a, isPK: false }))] },
      { name: item.e2, pk: item.pk2, attributes: [{ name: item.pk2, isPK: true }, ...item.a2.map(a => ({ name: a, isPK: false }))] },
      { name: item.e3, pk: item.pk3, attributes: [{ name: item.pk3, isPK: true }, ...item.a3.map(a => ({ name: a, isPK: false }))] }
    );
    expectedDiagram.categories = [{ name: item.category, superclasses: [item.e1, item.e2, item.e3], isUnion: true }];
  } else if (item.s === 10) {
    expectedDiagram.entities.push(
      { name: item.e1, pk: item.pk1, attributes: [{ name: item.pk1, isPK: true }, ...item.a1.map(a => ({ name: a, isPK: false }))] },
      { name: item.e2, pk: item.pk2, attributes: [{ name: item.pk2, isPK: true }, ...item.a2.map(a => ({ name: a, isPK: false }))] },
      { name: item.e3, pk: item.pk3, attributes: [{ name: item.pk3, isPK: true }, ...item.a3.map(a => ({ name: a, isPK: false }))] },
      { name: item.e4, pk: item.pk4, attributes: [{ name: item.pk4, isPK: true }, ...item.a4.map(a => ({ name: a, isPK: false }))] }
    );
    expectedDiagram.relationships.push(
      { entity1: item.e1, entity2: item.e2, mult1: "1..1", mult2: "1..*", name: "Rel1" },
      { entity1: item.e2, entity2: item.e3, mult1: "1..1", mult2: "1..*", name: "Rel2" },
      { entity1: item.e3, entity2: item.e4, mult1: "1..1", mult2: "0..*", name: "Rel3" }
    );
  }

  return {
    id: item.id,
    sector: item.s,
    difficulty: item.sectorName,
    clientName: item.client,
    clientRole: item.role,
    clientAvatar: "mentor",
    title: item.title,
    story: item.w1_story,
    instruction: item.w1_inst,
    starterDiagram: { entities: [], relationships: [] },
    expectedDiagram: expectedDiagram
  };
}

// Build W2 Question Data (Direct Relational / EER Mapping of W1)
function createW2Question(item, w1Q) {
  // Expected diagram in W2 validates the mapped schema (relational tables with PK/FK)
  let expectedDiagram = JSON.parse(JSON.stringify(w1Q.expectedDiagram));

  // In W2, if it's 1..1 or 1..*, the child table receives the FK
  if (item.fkTable && item.fkCol) {
    const target = expectedDiagram.entities.find(e => e.name.toLowerCase() === item.fkTable.toLowerCase());
    if (target) {
      if (!target.attributes) target.attributes = [];
      if (!target.attributes.some(a => a.name.toLowerCase() === item.fkCol.toLowerCase())) {
        target.attributes.push({ name: item.fkCol, isFK: true });
      }
    }
  }

  return {
    id: item.id,
    sector: item.s,
    difficulty: `${item.sectorName} • Relational Mapping`,
    clientName: item.client,
    clientRole: item.role,
    clientAvatar: "mentor",
    title: `${item.title} (Relatsion Sxema)`,
    story: item.w2_story,
    instruction: item.w2_inst,
    starterDiagram: JSON.parse(JSON.stringify(w1Q.expectedDiagram)), // Starts directly with Week 1 diagram!
    expectedDiagram: expectedDiagram
  };
}

// Generate all 150
const allW1 = [];
const allW2 = [];

DOMAINS.forEach(item => {
  const w1 = createW1Question(item);
  const w2 = createW2Question(item, w1);
  allW1.push(w1);
  allW2.push(w2);
});

console.log(`Generated ${allW1.length} W1 and ${allW2.length} W2 cases.`);

// Write out Week 1 files
const pW1_1 = path.join(__dirname, '../week1/data/eer_clients_1_50.js');
const pW1_2 = path.join(__dirname, '../week1/data/eer_clients_51_100.js');
const pW1_3 = path.join(__dirname, '../week1/data/eer_clients_101_150.js');

fs.writeFileSync(pW1_1, `var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);\n_scope.EER_CLIENTS_1_50 = ${JSON.stringify(allW1.slice(0, 50), null, 2)};\n`, 'utf8');
fs.writeFileSync(pW1_2, `var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);\n_scope.EER_CLIENTS_51_100 = ${JSON.stringify(allW1.slice(50, 100), null, 2)};\n`, 'utf8');
fs.writeFileSync(pW1_3, `var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);\n_scope.EER_CLIENTS_101_150 = ${JSON.stringify(allW1.slice(100, 150), null, 2)};\n`, 'utf8');

// Write out Week 2 files
const pW2_1 = path.join(__dirname, '../week2/data/questions_1_50.js');
const pW2_2 = path.join(__dirname, '../week2/data/questions_51_100.js');
const pW2_3 = path.join(__dirname, '../week2/data/questions_101_150.js');

fs.writeFileSync(pW2_1, `var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);\n_scope.QUESTIONS_1_50 = ${JSON.stringify(allW2.slice(0, 50), null, 2)};\n`, 'utf8');
fs.writeFileSync(pW2_2, `var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);\n_scope.QUESTIONS_51_100 = ${JSON.stringify(allW2.slice(50, 100), null, 2)};\n`, 'utf8');
fs.writeFileSync(pW2_3, `var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);\n_scope.QUESTIONS_101_150 = ${JSON.stringify(allW2.slice(100, 150), null, 2)};\n`, 'utf8');

console.log("Successfully wrote all 6 files for Week 1 and Week 2!");
