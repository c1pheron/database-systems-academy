/**
 * ============================================================================
 * DATABASE SYSTEMS ACADEMY — ENCYCLOPEDIA & COMMANDS DICTIONARY (LUG'AT)
 * Barcha 6 ta haftalikning to'liq 130+ ta komandalari, funksiyalari,
 * relyatsion algebra, EER modellashtirish va optimizatsiya ensiklopediyasi.
 * Har bir mavzuning:
 * 1. Nima ish qilishi (Sodda, tushunarli tilda)
 * 2. Qachon kerak bo'lishi (Payme, Uzum, Korzinka, Click kabi jonli tizimlar)
 * 3. Qanday yozilishi (Toza SQL sintaksisi)
 * 4. Qanday qo'shimchalar / kombinatsiyalar bilan ishlashi
 * 5. Jonli amaliy kodi / misoli
 * 6. Diqqat qilinishi kerak bo'lgan tuzoqlari (Gotchas)
 * 7. Bog'langan tushunchalar
 * ============================================================================
 */

(function () {
  'use strict';

  const DICTIONARY_DATA = [
  {
    "id": "entity",
    "name": "ENTITY (Entitiy / Obyekt)",
    "category": "1-Hafta • EER Modeli",
    "week": 1,
    "summary": "Tizimda alohida mavjud bo'lgan, xususiyatlarga ega mustaqil obyekt yoki tushuncha.",
    "whatItDoes": "Ma'lumotlar bazasida mustaqil identifikatorga (Primary Key) ega bo'lgan real yoki abstrakt obyektni ifodalaydi. Diagrammada to'g'ri to'rtburchak (rectangle) bilan chiziladi. Har bir entitiy o'zining atributlari (ustunlari) bilan tavsiflanadi.",
    "whenToUse": "Tasavvur qiling siz Uzum Market yoki Korzinka tizimini quryapsiz. Undagi har bir 'Mijoz', 'Mahsulot', 'Buyurtma' yoki 'Kuryer' alohida entitiy bo'ladi.",
    "syntax": "-- ERD da: [ Mijoz ]\n-- SQL da jadval sifatida yaratiladi:\nCREATE TABLE mijoz (\n  mijoz_id INT PRIMARY KEY,\n  fio VARCHAR(100) NOT NULL,\n  telefon VARCHAR(20) UNIQUE NOT NULL\n);",
    "combinations": "Entitiylar o'zaro Aloqalar (Relationship - olmos shakli) orqali 1:1, 1:N yoki M:N kardinallikda bog'lanadi. Zaif entitiy yoki Superclass/Subclass iyerarxiyasiga ega bo'lishi mumkin.",
    "example": "-- 'Mijoz' va 'Buyurtma' o'rtasidagi 1:N aloqa\nCREATE TABLE buyurtma (\n  buyurtma_id INT PRIMARY KEY,\n  mijoz_id INT REFERENCES mijoz(mijoz_id),\n  jami_summa DECIMAL(12,2) NOT NULL,\n  holat VARCHAR(30) DEFAULT 'kutilmoqda'\n);",
    "gotchas": "Entitiyni uning bitta atributi bilan adashtirmang. Masalan, 'Telefon raqam' alohida entitiy emas, Mijozning atributidir. Agar telefon raqam alohida balans, tarif va operatorga ega bo'lsa, shundagina entitiyga aylanadi.",
    "related": [
      "weak-entity",
      "associative-entity",
      "primary-key",
      "foreign-key"
    ],
    "keywords": [
      "entity",
      "jadval",
      "table",
      "obyekt",
      "model",
      "erd",
      "eer",
      "mustaqil"
    ]
  },
  {
    "id": "weak-entity",
    "name": "WEAK ENTITY (Zaif Entitiy)",
    "category": "1-Hafta • EER Modeli",
    "week": 1,
    "summary": "O'zining shaxsiy birlamchi kalitiga ega bo'lmagan, faqat boshqa kuchli entitiy orqali yashaydigan obyekt.",
    "whatItDoes": "Mustaqil yashay olmaydi; uning mavjudligi kuchli (Owner/Parent) entitiyga bog'liq. Diagrammada qo'shaloq to'g'ri to'rtburchak (double rectangle) bilan ifodalanadi. Uning kaliti qisman kalit (Partial Key / Discriminator) va ota jadvalning PK si kombinatsiyasidan hosil bo'ladi.",
    "whenToUse": "Hayotiy misol: Xodimning bolalari (Dependent). Agar xodim ishdan bo'shasa, uning farzandlari ma'lumotlarini bazada saqlashdan ma'no qolmaydi. Yoki Mehmonxona Xonasi (Bino bo'lmasa, xona ham yo'q).",
    "syntax": "-- ERD da: [[ Qaramog'idagi ]] <=> (( Tegishli )) <=> [ Xodim ]\n-- SQL da Composite PK va ON DELETE CASCADE bilan:\nCREATE TABLE qaramogidagi (\n  xodim_id INT,\n  farzand_ismi VARCHAR(50),\n  tugilgan_sana DATE,\n  PRIMARY KEY (xodim_id, farzand_ismi),\n  FOREIGN KEY (xodim_id) REFERENCES xodim(xodim_id) ON DELETE CASCADE\n);",
    "combinations": "Har doim Identifying Relationship (qo'shaloq olmos) va Total Participation (qo'shaloq chiziq) orqali kuchli entitiyga ulanadi.",
    "example": "-- Buyurtma (Kuchli) va Buyurtma_Bandlari (Zaif):\nCREATE TABLE buyurtma_bandi (\n  buyurtma_id INT,\n  qator_raqami INT, -- Partial Key (Discriminator)\n  mahsulot_id INT NOT NULL,\n  miqdor INT NOT NULL CHECK (miqdor > 0),\n  PRIMARY KEY (buyurtma_id, qator_raqami),\n  FOREIGN KEY (buyurtma_id) REFERENCES buyurtma(buyurtma_id) ON DELETE CASCADE\n);",
    "gotchas": "Zaif entitiyga sun'iy mustaqil ID (masalan `id SERIAL PRIMARY KEY`) qo'yib yuborsangiz, u zaiflik tabiatini yo'qotadi va oddiy kuchli entitiyga aylanadi.",
    "related": [
      "entity",
      "partial-key",
      "on-delete-cascade"
    ],
    "keywords": [
      "weak entity",
      "zaif",
      "discriminator",
      "dependent",
      "identifying",
      "composite pk"
    ]
  },
  {
    "id": "associative-entity",
    "name": "ASSOCIATIVE ENTITY (Assotsiativ / Bog'lovchi Entitiy)",
    "category": "1-Hafta • EER Modeli",
    "week": 1,
    "summary": "Ko'pga-ko'p (M:N) aloqani relyatsion modelga o'tkazishda paydo bo'ladigan, o'z atributlariga ega oraliq entitiy.",
    "whatItDoes": "Ikki entitiy o'rtasidagi M:N munosabatni ikkita 1:N munosabatga ajratadi va aloqaning o'ziga xos ma'lumotlarini (masalan, ro'yxatdan o'tgan sana, baho, miqdor) saqlaydi. Diagrammada to'rtburchak ichidagi olmos shaklida tasvirlanadi.",
    "whenToUse": "Hayotiy misol: Talaba va Fanlar (M:N). Bitta talaba ko'p fanga yoziladi, bitta fanda ko'p talaba o'qiydi. Talabaning aynan shu fandagi 'Imtihon bali' va 'Semestr' qayerda saqlanadi? Aynan assotsiativ 'Enrollment' (Ro'yxat) jadvalida!",
    "syntax": "-- SQL da Junction / Bridge jadval:\nCREATE TABLE royxat (\n  talaba_id INT REFERENCES talaba(talaba_id),\n  fan_id INT REFERENCES fan(fan_id),\n  semestr VARCHAR(10),\n  baho DECIMAL(4,1),\n  PRIMARY KEY (talaba_id, fan_id)\n);",
    "combinations": "Ikkala ota jadvaldan Foreign Key oladi va ularning birikmasi Composite Primary Key bo'ladi.",
    "example": "-- Uzum Market: Savatdagi mahsulotlar\nCREATE TABLE savat_tarkibi (\n  savat_id INT REFERENCES savat(id) ON DELETE CASCADE,\n  mahsulot_id INT REFERENCES mahsulot(id) ON DELETE RESTRICT,\n  qoshilgan_vaqt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n  miqdor INT DEFAULT 1 CHECK (miqdor > 0),\n  PRIMARY KEY (savat_id, mahsulot_id)\n);",
    "gotchas": "M:N aloqani hech qachon to'g'ridan-to'g'ri ikkita asosiy jadvalga FK qo'yib bog'lab bo'lmaydi. Har doim assotsiativ oraliq jadval talab etiladi.",
    "related": [
      "entity",
      "cardinality",
      "foreign-key"
    ],
    "keywords": [
      "associative entity",
      "assotsiativ",
      "junction table",
      "bridge table",
      "m:n",
      "oraliq jadval"
    ]
  },
  {
    "id": "primary-key",
    "name": "PRIMARY KEY (PK / Birlamchi Kalit)",
    "category": "1-Hafta • EER Modeli",
    "week": 1,
    "summary": "Jadvaldagi har bir qatorni bir qiymatli (unique) identifikatsiya qiluvchi asosiy kalit ustun.",
    "whatItDoes": "Jadvalda dublikat (takroriy) yozuvlar paydo bo'lishini 100% to'xtatadi va NULL qiymat qabul qilmaydi (`UNIQUE + NOT NULL`). Baza tizimi birlamchi kalit ustunida avtomatik ravishda eng tezkor B-Tree Unique Index quradi.",
    "whenToUse": "Istisnosiz har bitta relyatsion jadvalda kamida 1 ta Primary Key bo'lishi shart! Masalan: `foydalanuvchi_id`, `buyurtma_raqami`, `passport_jshshir`.",
    "syntax": "-- Ustun darajasida:\nid INT PRIMARY KEY\n\n-- Jadval darajasida (Composite PK uchun):\nPRIMARY KEY (mamlakat_kodi, pasport_raqami)",
    "combinations": "FOREIGN KEY boshqa jadvaldagi aynan PRIMARY KEY ustuniga murojaat qiladi. AUTO_INCREMENT yoki IDENTITY yoki SEQUENCE bilan birga ishlatiladi.",
    "example": "CREATE TABLE mijozlar (\n  mijoz_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n  fio VARCHAR(100) NOT NULL,\n  email VARCHAR(100) UNIQUE NOT NULL\n);",
    "gotchas": "Hech qachon o'zgaruvchan qiymatlarni (masalan, telefon raqam yoki familiya) Primary Key qilib tanlamang. Agar foydalanuvchi telefonini o'zgartirsa, butun tizimdagi bog'langan barcha jadvallarni yangilashga to'g'ri keladi.",
    "related": [
      "candidate-key",
      "alternate-key",
      "super-key",
      "foreign-key"
    ],
    "keywords": [
      "primary key",
      "pk",
      "birlamchi kalit",
      "kalit",
      "identifikator",
      "not null",
      "unique"
    ]
  },
  {
    "id": "candidate-key",
    "name": "CANDIDATE KEY (Nomzod Kalit)",
    "category": "1-Hafta • EER Modeli",
    "week": 1,
    "summary": "Jadvaldagi qatorni bir qiymatli aniqlay oladigan minimal atributlar to'plami (PK bo'lishga munosib nomzod).",
    "whatItDoes": "Jadvalda bir nechta ustunlar yoki ularning birikmasi har bir qatorni takrorlanmas qilishi mumkin. Masalan, Foydalanuvchida `id`, `email`, va `jshshir` har biri alohida nomzod kalitdir. Ulardan bittasi Primary Key etib saylanadi, qolganlari Alternate Key bo'lib qoladi.",
    "whenToUse": "Jadvalni loyihalashda barcha tabiiy noyob atributlarni aniqlash uchun ishlatiladi.",
    "syntax": "-- Masalan, mijoz jadvalida:\n-- Candidate Key 1: mijoz_id (saylangan PK)\n-- Candidate Key 2: jshshir (UNIQUE NOT NULL)\n-- Candidate Key 3: email (UNIQUE NOT NULL)",
    "combinations": "Candidate Key = Minimal Super Key. Har qanday Candidate Key noyob va minimal bo'lishi shart (hech qanday ortiqcha ustunsiz).",
    "example": "CREATE TABLE haydovchi (\n  haydovchi_id INT PRIMARY KEY, -- Tanlangan PK\n  prava_raqami VARCHAR(20) UNIQUE NOT NULL, -- 2-Candidate Key\n  pasport_seriya VARCHAR(15) UNIQUE NOT NULL -- 3-Candidate Key\n);",
    "gotchas": "Agar ustunlar to'plamidan bittasini olib tashlaganingizda ham u qatorlarni ajrata olsa, demak u nomzod kalit emas, shunchaki ortiqcha yukli Super Key hisoblanadi.",
    "related": [
      "primary-key",
      "alternate-key",
      "super-key"
    ],
    "keywords": [
      "candidate key",
      "nomzod kalit",
      "minimal",
      "unique",
      "unikal"
    ]
  },
  {
    "id": "alternate-key",
    "name": "ALTERNATE KEY (Muqobil / Zaxira Kalit)",
    "category": "1-Hafta • EER Modeli",
    "week": 1,
    "summary": "Primary Key sifatida tanlanmay qolgan ikkinchi darajali nomzod kalitlar.",
    "whatItDoes": "Birlamchi kalit bo'lishga kuchi yetadi, lekin dasturchi Primary Key qilib boshqa ustunni (masalan `id` ni) tanlagan. Baza darajasida ular `UNIQUE` cheklovi bilan himoyalanadi.",
    "whenToUse": "Hayotiy misol: Talabalar tizimida `talaba_id` Primary Key qilib olindi. Lekin talabaning `talaba_guvohnoma_raqami` va `email` manzili ham takrorlanmasligi kerak. Aynan ular Alternate Key hisoblanadi.",
    "syntax": "-- SQL da UNIQUE cheklovi bilan belgilanadi:\nemail VARCHAR(100) UNIQUE NOT NULL,\npasport_raqam VARCHAR(20) UNIQUE NOT NULL",
    "combinations": "Dasturda login qilishda foydalanuvchi `id` sini emas, balki Alternate Key bo'lgan `email` yoki `username` ni kiritadi.",
    "example": "CREATE TABLE foydalanuvchi (\n  id INT PRIMARY KEY, -- PK\n  username VARCHAR(50) UNIQUE NOT NULL, -- Alternate Key\n  email VARCHAR(100) UNIQUE NOT NULL   -- Alternate Key\n);",
    "gotchas": "Alternate Key ga UNIQUE cheklovini qo'yishni unutsangiz, ikkita odam bir xil email bilan ro'yxatdan o'tib tizimda chalkashlik keltirib chiqaradi.",
    "related": [
      "primary-key",
      "candidate-key",
      "unique-constraint"
    ],
    "keywords": [
      "alternate key",
      "muqobil kalit",
      "zaxira kalit",
      "unique",
      "email"
    ]
  },
  {
    "id": "super-key",
    "name": "SUPER KEY (Super Kalit)",
    "category": "1-Hafta • EER Modeli",
    "week": 1,
    "summary": "Jadvaldagi qatorlarni bir qiymatli aniqlay oladigan har qanday atributlar to'plami (hatto ortiqcha ustunlari bo'lsa ham).",
    "whatItDoes": "Har qanday Primary Key yoki Candidate Key ga ixtiyoriy boshqa ustunni qo'shsangiz ham u Super Key bo'lib qolaveradi. Masalan, `{talaba_id}` super kalit bo'lsa, `{talaba_id, ism}`, `{talaba_id, ism, yosh}` ham super kalitdir.",
    "whenToUse": "Relyatsion nazariya va normalizatsiya (BCNF) qoidalarini isbotlashda fundamental tushuncha.",
    "syntax": "-- Nazariy ifoda:\n-- Agar K -> R bo'lsa, K super kalit hisoblanadi.",
    "combinations": "Barcha Candidate Keylar Super Key hisoblanadi, lekin barcha Super Keylar ham Candidate Key emas (chunki ularda ortiqcha ustunlar bo'lishi mumkin).",
    "example": "-- Quyidagilarning barchasi Super Key:\n-- 1. {pasport_raqam}\n-- 2. {pasport_raqam, ism}\n-- 3. {pasport_raqam, ism, tugilgan_sana}\n-- Lekin faqat 1-raqamli to'plam Candidate Key dir (minimal bo'lgani uchun).",
    "gotchas": "Super Key minimal bo'lishi shart emas! Imtihonda ko'pincha 'Super Key va Candidate Key farqi nima?' deb so'raladi. Javob: Candidate Key — bu minimal Super Key dir.",
    "related": [
      "candidate-key",
      "primary-key"
    ],
    "keywords": [
      "super key",
      "super kalit",
      "minimal",
      "unikal",
      "bcnf"
    ]
  },
  {
    "id": "surrogate-key",
    "name": "SURROGATE KEY vs NATURAL KEY (Sun'iy vs Tabiiy Kalit)",
    "category": "1-Hafta • EER Modeli",
    "week": 1,
    "summary": "Biznesga aloqasi bo'lmagan sun'iy avtomatik raqam (Surrogate) va hayotiy mavjud kod (Natural).",
    "whatItDoes": "Natural Key — real hayotda mavjud bo'lgan noyob qiymat (masalan, Avtomobil VIN kodi, JSHSHIR, Pasport seriya). Surrogate Key — faqat ma'lumotlar bazasi ehtiyoji uchun yaratilgan sun'iy avtomatik son (`id INT GENERATED ALWAYS AS IDENTITY` yoki UUID).",
    "whenToUse": "Deyarli barcha zamonaviy tizimlarda (Payme, Uzum, Telegram bot) Surrogate Key asosiy PK qilib tanlanadi, chunki sonli ID ustida JOIN amallari 10x tezroq ishlaydi va uzun satrlardan xoli bo'ladi.",
    "syntax": "-- Surrogate Key (Tavsiya etiladi):\nid BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY\n\n-- Natural Key:\nvin_kod VARCHAR(17) PRIMARY KEY",
    "combinations": "Surrogate Key birlamchi kalit bo'lganda, Natural Key ustuniga UNIQUE indeksi qo'yiladi.",
    "example": "CREATE TABLE avtomobil (\n  avto_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, -- Surrogate Key\n  vin_raqami VARCHAR(17) UNIQUE NOT NULL,               -- Natural Key\n  davlat_raqami VARCHAR(10) UNIQUE NOT NULL,             -- Natural Key\n  model VARCHAR(50) NOT NULL\n);",
    "gotchas": "Natural Key larni Primary Key qilish xavfli, chunki davlat qonunlari yoki standartlar o'zgarsa (masalan, pasport formati o'zgarsa), barcha bog'langan jadvallarni o'zgartirish dahshatli boshog'riqqa aylanadi.",
    "related": [
      "primary-key",
      "sql-sequence"
    ],
    "keywords": [
      "surrogate key",
      "natural key",
      "suniy kalit",
      "tabiiy kalit",
      "identity",
      "uuid"
    ]
  },
  {
    "id": "partial-key",
    "name": "PARTIAL KEY (Discriminator / Qisman Kalit)",
    "category": "1-Hafta • EER Modeli",
    "week": 1,
    "summary": "Zaif entitiya ichidagi yozuvlarni bir ota doirasida farqlovchi qisman kalit (punktir tagchiziq).",
    "whatItDoes": "Zaif entitiyaning barcha qatorlarini umumiy holda emas, balki birgina ota obyektga tegishli qatorlar orasidagina noyobligini ta'minlaydi. ER diagrammada uning nomi ostiga uzuq-uzuq punktir chiziq (dashed underline) chiziladi.",
    "whenToUse": "Hayotiy misol: Ko'p qavatli bino xonalari. Har bir qavatda 1, 2, 3, 4 xonalar bor. 1-xona takrorlanadi, lekin 'Qavat_1 + Xona_1' bitta binoda takrorlanmaydi. Xona raqami — Partial Key!",
    "syntax": "-- ERD da: [ buyurtma_id (PK) ] === [[ buyurtma_bandi: qator_raqami (PPK) ]]\nPRIMARY KEY (buyurtma_id, qator_raqami)",
    "combinations": "Doimo ota entitiyaning Primary Key ustuni bilan birgalikda Composite Primary Key hosil qiladi.",
    "example": "CREATE TABLE bino_xonasi (\n  bino_id INT,\n  xona_raqami INT, -- Partial Key (Discriminator)\n  maydoni_kvm DECIMAL(5,2),\n  PRIMARY KEY (bino_id, xona_raqami),\n  FOREIGN KEY (bino_id) REFERENCES bino(bino_id) ON DELETE CASCADE\n);",
    "gotchas": "Partial Key o'z holicha butun jadval bo'yicha takrorlanishi mumkin. U faqat ota kalit bilan qo'shilgandagina to'liq Primary Key vazifasini bajaradi.",
    "related": [
      "weak-entity",
      "primary-key"
    ],
    "keywords": [
      "partial key",
      "discriminator",
      "ppk",
      "punktir",
      "qisman kalit"
    ]
  },
  {
    "id": "composite-attribute",
    "name": "COMPOSITE ATTRIBUTE (Tarkibli Atribut)",
    "category": "1-Hafta • EER Modeli",
    "week": 1,
    "summary": "O'z navbatida bir nechta mustaqil mayda atributlarga bo'linadigan murakkab atribut.",
    "whatItDoes": "Mantiqan bitta tushunchani bildiruvchi, ammo amalda alohida qismlardan iborat ma'lumotlarni ifodalaydi. Masalan: 'Manzil' -> Shaxar, Tuman, Ko'cha, Uy_raqami; yoki 'F.I.O' -> Familiya, Ism, Sharif.",
    "whenToUse": "Foydalanuvchilarni shahar bo'yicha saralash, faqat familiyasi bo'yicha qidirish yoki pochta indeksini alohida tekshirish talab qilinganda.",
    "syntax": "-- EER diagrammada asosiy atributdan yangi shoxchalar chiqadi\n-- Relyatsion jadvalga o'tkazilganda atomar ustunlarga bo'linadi (1NF talabi):\nviloyat VARCHAR(50),\nshahar VARCHAR(50),\nkucha VARCHAR(100)",
    "combinations": "1NF (Birinchi Normal Forma) qoidasiga ko'ra, relyatsion modelga o'tkazilayotganda barcha tarkibli atributlar maydalanib, alohida mustaqil ustunlarga aylantirilishi shart.",
    "example": "CREATE TABLE mijozlar (\n  mijoz_id INT PRIMARY KEY,\n  ism VARCHAR(50) NOT NULL,\n  familiya VARCHAR(50) NOT NULL,\n  manzil_viloyat VARCHAR(50),\n  manzil_shahar VARCHAR(50),\n  manzil_kucha VARCHAR(100)\n);",
    "gotchas": "Butun manzilni bitta ustunga `Toshkent, Chilonzor, 5-uy` deb yozib qo'ysangiz, keyinchalik faqat Chilonzorda yashovchilarni indeks bo'yicha tez qidirib bo'lmaydi.",
    "related": [
      "1nf",
      "entity"
    ],
    "keywords": [
      "composite attribute",
      "tarkibli",
      "murakkab atribut",
      "manzil",
      "atomar"
    ]
  },
  {
    "id": "multivalued-attribute",
    "name": "MULTI-VALUED ATTRIBUTE (Ko'p Qiymatli Atribut)",
    "category": "1-Hafta • EER Modeli",
    "week": 1,
    "summary": "Bitta obyekt uchun bir vaqtning o'zida bir nechta qiymatga ega bo'la oladigan atribut (qo'shaloq oval).",
    "whatItDoes": "Bitta shaxsning bir nechta telefon raqami, bir nechta chet tillari yoki bir nechta diplomlari bo'lishi holatini ifodalaydi. ERD da qo'shaloq ellips (double oval) bilan chiziladi.",
    "whenToUse": "Hayotiy misol: Dasturchining biladigan tillari (Java, Python, SQL) yoki mijozning 2 ta telefon raqami (+99890..., +99897...).",
    "syntax": "-- EER da: (( telefon_raqamlari ))\n-- Relyatsion modelda alohida jadvalga chiqariladi:\nCREATE TABLE xodim_telefonlari (\n  xodim_id INT,\n  telefon VARCHAR(20),\n  PRIMARY KEY (xodim_id, telefon),\n  FOREIGN KEY (xodim_id) REFERENCES xodim(xodim_id) ON DELETE CASCADE\n);",
    "combinations": "1NF talabini buzmaslik uchun ko'p qiymatli atribut har doim yangi alohida jadvalga ajratiladi va ota jadvalga FK bilan ulanadi.",
    "example": "-- Dasturchi va uning mahoratlari:\nCREATE TABLE dasturchi_skills (\n  dasturchi_id INT REFERENCES dasturchi(id) ON DELETE CASCADE,\n  skill_nomi VARCHAR(50),\n  PRIMARY KEY (dasturchi_id, skill_nomi)\n);",
    "gotchas": "Bitta ustun ichiga `+99890123, +99897123` deb vergul bilan yozib saqlash 1NF qoidasini qo'pol buzish hisoblanadi va LIKE qidiruvini haddan tashqari sekinlashtiradi.",
    "related": [
      "1nf",
      "weak-entity"
    ],
    "keywords": [
      "multivalued",
      "kop qiymatli",
      "double oval",
      "telefonlar",
      "massiv"
    ]
  },
  {
    "id": "derived-attribute",
    "name": "DERIVED ATTRIBUTE (Hisoblab Topiladigan Atribut)",
    "category": "1-Hafta • EER Modeli",
    "week": 1,
    "summary": "Bazaga statik saqlanmasdan, boshqa atributlar asosida dinamik hisoblab chiqariladigan atribut (punktir oval).",
    "whatItDoes": "Bazada saqlangan birlamchi ma'lumotlar (masalan: `tugilgan_sana`, `narx`, `miqdor`) asosida formula orqali hisoblanadi. Diagrammada punktir chiziqli oval bilan ifodalanadi.",
    "whenToUse": "Xodimning yoshi (`CURRENT_DATE - tugilgan_sana`), Buyurtmaning umumiy narxi (`miqdor * dona_narx`) yoki ish staji.",
    "syntax": "-- ERD da: - - ( yoshi ) - -\n-- SQL da Generated Column yoki VIEW orqali amalga oshiriladi:\nyoshi INT GENERATED ALWAYS AS (EXTRACT(YEAR FROM CURRENT_DATE) - EXTRACT(YEAR FROM tugilgan_sana)) STORED",
    "combinations": "SQL da `VIRTUAL` yoki `STORED GENERATED COLUMNS` yoxud `CREATE VIEW` ichida formula sifatida ishlatiladi.",
    "example": "CREATE TABLE buyurtma_tarkibi (\n  id INT PRIMARY KEY,\n  narx DECIMAL(10,2) NOT NULL,\n  miqdor INT NOT NULL,\n  jami_summa DECIMAL(12,2) GENERATED ALWAYS AS (narx * miqdor)\n);",
    "gotchas": "Hech qachon bazada statik 'yosh' ustuni saqlamang! Chunki har yili u eskiradi. Har doim `tugilgan_sana` saqlanib, yosh dinamik hisoblanishi kerak.",
    "related": [
      "create-view",
      "date-functions"
    ],
    "keywords": [
      "derived attribute",
      "hisoblanadigan",
      "yoshi",
      "generated column",
      "punktir oval"
    ]
  },
  {
    "id": "cardinality",
    "name": "CARDINALITY & MULTIPLICITY (Kardinallik va Ko'plik)",
    "category": "1-Hafta • EER Modeli",
    "week": 1,
    "summary": "Ikki entitiy o'rtasidagi nusxalar nisbati: 1:1 (birga-bir), 1:N (birga-ko'p), M:N (ko'pga-ko'p).",
    "whatItDoes": "Bitta obyekt boshqa obyektning nechta nusxasiga bog'lanishi mumkinligini belgilaydi. Min..Max ko'rinishida yoziladi: `1..1` (aniq bitta), `0..1` (ixtiyoriy bitta), `1..*` (kamida bitta), `0..*` (ixtiyoriy ko'p).",
    "whenToUse": "Biznes qoidalarini shakllantirishda: 'Bitta Kafedrada nechta professor ishlashi mumkin?', 'Bitta xaridorda nechta buyurtma bo'ladi?'.",
    "syntax": "-- 1:1 -> Bitta xodimga 1 ta shaxsiy kompyuter\n-- 1:N -> Bitta Bo'limda ko'p xodimlar\n-- M:N -> Bitta Talaba ko'p Fanlarni, bitta Fan ko'p Talabalarni qamrab oladi",
    "combinations": "1:N aloqada FK 'N' tomondagi jadvalga qo'yiladi. M:N aloqada esa alohida bog'lovchi oraliq jadval yaratiladi.",
    "example": "-- 1:N bog'lanish: Dept (1) -> Emp (N)\nCREATE TABLE xodim (\n  xodim_id INT PRIMARY KEY,\n  fio VARCHAR(100),\n  bolim_id INT NOT NULL REFERENCES bolim(bolim_id) -- 1:N FK\n);",
    "gotchas": "Kardinallikni noto'g'ri tanlash ma'lumotlar bazasi arxitekturasini buzadi. Masalan, agar M:N aloqani 1:N deb qabul qilsangiz, keyinchalik bitta mahsulotni faqat bitta buyurtmaga biriktira olasiz xolos!",
    "related": [
      "participation",
      "foreign-key",
      "associative-entity"
    ],
    "keywords": [
      "cardinality",
      "multiplicity",
      "1:1",
      "1:n",
      "m:n",
      "kardinallik",
      "crows foot"
    ]
  },
  {
    "id": "participation",
    "name": "TOTAL vs PARTIAL PARTICIPATION (Majburiy vs Ixtiyoriy Ishtirok)",
    "category": "1-Hafta • EER Modeli",
    "week": 1,
    "summary": "Entitiyaning aloqada qatnashishi shartligi (Total - qo'shaloq chiziq) yoki ixtiyoriyligi (Partial - yakka chiziq).",
    "whatItDoes": "Total (Majburiy) ishtirokda har bir nusxa albatta aloqada qatnashishi shart (min = 1). SQL da bu `NOT NULL` cheklovi bilan kafolatlanadi. Partial (Ixtiyoriy) ishtirokda esa qatnashmasligi ham mumkin (min = 0, SQL da `NULL` bo'lishi mumkin).",
    "whenToUse": "Hayotiy misol: Har bir Xodim qaysidir Bo'limga tegishli bo'lishi shart (Total Participation, qo'shaloq chiziq). Lekin har bir xodim Boshliq bo'lishi shart emas (Partial Participation, yakka chiziq).",
    "syntax": "-- ERD da:\n-- Total: [ Xodim ] ===== < Ishlaydi > ===== [ Bo'lim ]\n-- Partial: [ Xodim ] ----- < Boshqaradi > ----- [ Bo'lim ]",
    "combinations": "Total Participation har doim SQL da tegishli Foreign Key ustuniga `NOT NULL` qo'yish orqali amalga oshiriladi.",
    "example": "CREATE TABLE xodim (\n  xodim_id INT PRIMARY KEY,\n  ism VARCHAR(50),\n  -- Total: bo'limsiz xodim bo'lishi mumkin emas!\n  bolim_id INT NOT NULL REFERENCES bolim(bolim_id)\n);",
    "gotchas": "Agar FK ga `NOT NULL` qo'yish esingizdan chiqsa, bazangizda hech qanday bo'limga tegishli bo'lmagan 'sarson xodimlar' paydo bo'ladi.",
    "related": [
      "cardinality",
      "foreign-key"
    ],
    "keywords": [
      "total participation",
      "partial participation",
      "majburiy",
      "ixtiyoriy",
      "qoshaloq chiziq"
    ]
  },
  {
    "id": "unary-relationship",
    "name": "RECURSIVE / UNARY RELATIONSHIP (Bir Tomonlama / Rekursiv Aloqa)",
    "category": "1-Hafta • EER Modeli",
    "week": 1,
    "summary": "Entitiyaning xuddi o'sha jadvaldagi boshqa nusxasi bilan o'zaro bog'lanishi (o'ziga-o'zi aloqa).",
    "whatItDoes": "Bitta jadval ichidagi iyerarxik munosabatlarni ifodalaydi. Masalan, Xodim va uning Rahbari — ikkalasi ham bir xil `xodim` jadvalidagi shaxslardir.",
    "whenToUse": "Tashkilot iyerarxiyasi (Boshliq - Xodim), Ko'p qavatli kategoriyalar daraxti (Elektronika -> Telefonlar -> Smartfonlar) yoki do'stlik tarmog'i.",
    "syntax": "-- ERD da entitiy o'zidan chiziq chiqarib yana o'ziga qaytaradi (loop)\n-- SQL da jadval o'zining PK siga Foreign Key qo'yadi:\nrahbar_id INT REFERENCES xodim(xodim_id)",
    "combinations": "SQL da buni so'rov qilish uchun `SELF JOIN` yoki ko'p qavatli iyerarxiyalar uchun `WITH RECURSIVE` (CTE) ishlatiladi.",
    "example": "CREATE TABLE xodimlar (\n  xodim_id INT PRIMARY KEY,\n  ism VARCHAR(50) NOT NULL,\n  lavozim VARCHAR(50),\n  rahbar_id INT REFERENCES xodimlar(xodim_id) -- Rekursiv FK (bosh direktor uchun NULL)\n);",
    "gotchas": "Rekursiv Foreign Key hech qachon `NOT NULL` bo'lolmaydi! Aks holda eng birinchi rahbar (Kompaniya Direktori) ni bazaga kiritib bo'lmay qoladi, chunki uning ustida rahbar yo'q.",
    "related": [
      "self-join",
      "recursive-cte"
    ],
    "keywords": [
      "unary",
      "recursive",
      "rekursiv",
      "self reference",
      "rahbar",
      "iyerarxiya"
    ]
  },
  {
    "id": "ternary-relationship",
    "name": "TERNARY RELATIONSHIP (Uch Tomonlama Munosabat)",
    "category": "1-Hafta • EER Modeli",
    "week": 1,
    "summary": "Bir vaqtning o'zida 3 ta har xil entitiyni o'zaro bog'lovchi murakkab munosabat.",
    "whatItDoes": "Munosabat faqat 3 ta obyekt birga uchrashgandagina mantiqqa ega bo'ladi. Diagrammada 1 ta olmos shaklidan 3 ta entitiyga chiziq tortiladi.",
    "whenToUse": "Hayotiy misol: Shifoxonada 'Shifokor', 'Bemor' va 'Dori'. Shifokor ma'lum bemorga ma'lum dorini tayinlaydi. Agar faqat ikkitasini bog'lasangiz, kim qaysi bemorga qaysi dorini bergani chalkashib ketadi.",
    "syntax": "-- Relyatsion modelda 3 ta ota jadvalning PK larini jamlovchi bitta oraliq jadval ochiladi:\nCREATE TABLE retsept (\n  shifokor_id INT REFERENCES shifokor(id),\n  bemor_id INT REFERENCES bemor(id),\n  dori_id INT REFERENCES dori(id),\n  sana DATE NOT NULL,\n  doza VARCHAR(50),\n  PRIMARY KEY (shifokor_id, bemor_id, dori_id, sana)\n);",
    "combinations": "Uchta mustaqil Foreign Key lar orqali bog'lanadi va kompozit kalit hosil qiladi.",
    "example": "-- Ta'minotchi (Supplier), Qismlar (Part) va Loyiha (Project):\nCREATE TABLE taminot (\n  supplier_id INT REFERENCES supplier(id),\n  part_id INT REFERENCES part(id),\n  project_id INT REFERENCES project(id),\n  miqdor INT CHECK (miqdor > 0),\n  PRIMARY KEY (supplier_id, part_id, project_id)\n);",
    "gotchas": "Ternary aloqani bir nechta ikkita-ikkita (Binary) aloqalarga asossiz bo'lib yubormang. Bu 'Chasm Trap' yoki mantiqiy ma'lumot yo'qolishiga olib keladi.",
    "related": [
      "chasm-trap",
      "associative-entity"
    ],
    "keywords": [
      "ternary",
      "uch tomonlama",
      "retsept",
      "taminotchi",
      "oraliq jadval"
    ]
  },
  {
    "id": "specialization",
    "name": "SPECIALIZATION & GENERALIZATION (Superclass / Subclass)",
    "category": "1-Hafta • EER Modeli",
    "week": 1,
    "summary": "Umumiy entitiy (Superclass) va uning maxsus turlari (Subclass) o'rtasidagi merosxo'rlik munosabati.",
    "whatItDoes": "OOP dagi merosxo'rlik (Inheritance) ga o'xshaydi. Superclass umumiy atributlarni (masalan: `id`, `fio`, `telefon`) o'zida saqlaydi, Subclass lar esa faqat o'ziga xos atributlarni (masalan: `soatlik_ish_haqi`, `oylik_maosh`) saqlaydi.",
    "whenToUse": "Hayotiy misol: Bank tizimida 'Mijoz' — umumiy superclass. 'Jismoniy Shaxs' (Pasport seriya, JSHSHIR) va 'Yuridik Shaxs' (INN, Kompaniya nomi, MFO) — maxsus subclass lar.",
    "syntax": "-- EER diagrammada doira ichida 'd' (disjoint) yoki 'o' (overlap) va pastga qaratilgan U shakli (meros belgisi) qo'yiladi.\n-- Relyatsion modelga o'tkazishning 3 ta usuli bor (1 ta umumiy jadval, alohida jadvallar, yoki ota-bola jadvallar).",
    "combinations": "Subclass jadvalining Primary Key ustuni bir vaqtning o'zida Superclass jadvalining Foreign Key si hisoblanadi (`PK = FK`).",
    "example": "-- Superclass jadvali:\nCREATE TABLE xodim (\n  xodim_id INT PRIMARY KEY,\n  fio VARCHAR(100) NOT NULL,\n  xodim_turi VARCHAR(20) NOT NULL\n);\n\n-- Subclass jadvali:\nCREATE TABLE dasturchi (\n  xodim_id INT PRIMARY KEY REFERENCES xodim(xodim_id) ON DELETE CASCADE,\n  dasturlash_tili VARCHAR(50) NOT NULL\n);",
    "gotchas": "Subclass jadvaliga yangi sun'iy `dasturchi_id` ochmang. Uning PK si Superclassning `xodim_id` si bilan 1:1 aynan bir xil bo'lishi shart!",
    "related": [
      "disjoint-overlap",
      "entity"
    ],
    "keywords": [
      "specialization",
      "generalization",
      "superclass",
      "subclass",
      "meros",
      "inheritance"
    ]
  },
  {
    "id": "disjoint-overlap",
    "name": "DISJOINT (d) vs OVERLAPPING (o) (Meros Cheklovlari)",
    "category": "1-Hafta • EER Modeli",
    "week": 1,
    "summary": "Obyekt bir vaqtning o'zida bir nechta subclass ga tegishli bo'la oladimi (Overlap) yoki faqat bittasigami (Disjoint).",
    "whatItDoes": "Disjoint (d): Bir vaqtning o'zida faqat bitta tur bo'la oladi. Masalan, Talaba yo 'Grant' yoki 'Kontrakt' bo'ladi, ikkalasi baravar bo'lolmaydi. Overlapping (o): Bir vaqtda bir nechta tur bo'la oladi. Masalan, Universitet xodimi bir vaqtning o'zida ham 'O'qituvchi', ham 'Doktorant-Talaba' bo'lishi mumkin.",
    "whenToUse": "Biznes mantig'iga ko'ra subclass larning kesishishini qat'iy nazorat qilishda.",
    "syntax": "-- Diagrammada doira ichiga 'd' yoki 'o' harfi yoziladi.\n-- Total Disjoint: Har bir xodim albatta qaysidir bitta aniq toifaga kiradi.\n-- Partial Overlapping: Xodim hech qaysi toifaga kirmasligi yoki bir vaqtda ikkalasiga ham kirishi mumkin.",
    "combinations": "Merosxo'rlik jadvallarini tuzishda CHECK cheklovlari yoki discriminator ustunlari orqali boshqariladi.",
    "example": "-- Disjoint holatida bitta discriminator ustuni yetarli:\nCREATE TABLE transport (\n  id INT PRIMARY KEY,\n  turi VARCHAR(10) CHECK (turi IN ('Yengil', 'Yuk', 'Avtobus'))\n);",
    "gotchas": "Disjoint bilan Overlapping ni adashtirish bazada ma'lumotlarning buzilishiga olib keladi. Agar universitetda o'qituvchi bir vaqtda talaba ham bo'lsa-yu, siz 'd' qilib qo'ysangiz, uni ikkinchi rolda kiritib bo'lmay qoladi.",
    "related": [
      "specialization",
      "entity"
    ],
    "keywords": [
      "disjoint",
      "overlap",
      "d",
      "o",
      "kesishmaydigan",
      "meros cheklovi"
    ]
  },
  {
    "id": "fan-trap",
    "name": "FAN TRAP (Muxlislar / Yelpig'ich Tuzog'i)",
    "category": "1-Hafta • EER Modeli",
    "week": 1,
    "summary": "Tuzilmada bitta entitiy birdaniga ikkita boshqa entitiy bilan 1:N bog'lanishi oqibatida yuzaga keladigan tushunarsiz aloqa.",
    "whatItDoes": "Model ko'rinishidan to'g'riga o'xshaydi, lekin ikki 'N' (ko'p) tomonidagi entitiylar o'rtasida qaysi qator qaysi biriga tegishli ekanligini aniq bilib bo'lmay qoladi. Aloqa xuddi yelpig'ichdek ochilib ketadi.",
    "whenToUse": "EER diagrammani tekshirish va relyatsion normalizatsiyada mantiqiy xatolarni tuzatishda.",
    "syntax": "-- XATO TUZILMA (Fan Trap):\n-- [ Bo'lim ] 1 === N [ Xodim ]\n-- [ Bo'lim ] 1 === N [ Loyiha ]\n-- Natijada: Xodim aynan qaysi loyihada ishlayotganini bilib bo'lmaydi!",
    "combinations": "Yechim: Aloqalar zanjirini to'g'rilash: [ Bo'lim ] 1 === N [ Xodim ] 1 === N [ Loyiha ] yoki Xodim va Loyiha o'rtasida to'g'ridan-to'g'ri aloqa o'rnatish.",
    "example": "-- Tuzatilgan to'g'ri relyatsion model:\nCREATE TABLE loyiha (\n  loyiha_id INT PRIMARY KEY,\n  loyiha_nomi VARCHAR(100),\n  masul_xodim_id INT REFERENCES xodim(xodim_id) -- Fan Trap bartaraf etildi!\n);",
    "gotchas": "Fan Trap bor diagrammada SQL JOIN yozsangiz, Dekart ko'paytmasi (Cartesian blast) yuzaga kelib, noto'g'ri va takrorlangan hisobotlar chiqadi.",
    "related": [
      "chasm-trap",
      "cardinality"
    ],
    "keywords": [
      "fan trap",
      "yelpigich",
      "tuzoq",
      "eer tuzogi",
      "notogri boglanish"
    ]
  },
  {
    "id": "chasm-trap",
    "name": "CHASM TRAP (Bo'shliq / Jar Tuzog'i)",
    "category": "1-Hafta • EER Modeli",
    "week": 1,
    "summary": "Aloqalar zanjirida oraliq entitiyaning ixtiyoriy ishtiroki (Partial Participation) tufayli bog'liqlik uzilib qolishi.",
    "whatItDoes": "Ikki entitiy o'rtasida yo'l bor, lekin o'rtadagi bog'lovchi entitiyda qiymat bo'lmagani (NULL) sababli ular o'rtasidagi haqiqiy munosabat yo'qolib ketadi (jar paydo bo'ladi).",
    "whenToUse": "Hayotiy misol: [ Filial ] 1 === N [ Xodim ] 0..1 === N [ Mijoz ]. Agar qaysidir filialda hali xodim bo'lmasa yoki mijozga hali xodim biriktirilmagan bo'lsa, bu mijoz qaysi filialga tegishli ekanini hech qachon bilolmaysiz!",
    "syntax": "-- XATO: Filial -> Xodim (0..1) -> Mijoz\n-- YECHIM: Filial va Mijoz o'rtasida to'g'ridan-to'g'ri aloqa qo'yish: [ Filial ] 1 === N [ Mijoz ]",
    "combinations": "Chasm Trap asosan `0..1` yoki ixtiyoriy munosabatlar zanjirida uchraydi.",
    "example": "-- Chasm Trap ni yechuvchi to'g'ri jadval:\nCREATE TABLE mijoz (\n  mijoz_id INT PRIMARY KEY,\n  filial_id INT NOT NULL REFERENCES filial(id), -- To'g'ridan-to'g'ri bog'lanish (Chasm Trap yo'q!)\n  biriktirilgan_xodim_id INT REFERENCES xodim(id) -- Ixtiyoriy\n);",
    "gotchas": "Viva imtihonida eng ko'p beriladigan savol: 'Fan trap bilan Chasm trap ning farqi nima?'. Fan trap — bu noaniq ko'p tarmoqlanish, Chasm trap — bu ixtiyoriy oraliq zveno sababli yo'lning uzilishi!",
    "related": [
      "fan-trap",
      "participation"
    ],
    "keywords": [
      "chasm trap",
      "jar",
      "boshliq",
      "uzilish",
      "partial",
      "viva"
    ]
  },
  {
    "id": "eer-mapping-rules",
    "name": "EER TO RELATIONAL MAPPING (7 ta Oltin Qoida)",
    "category": "1-Hafta • EER Modeli",
    "week": 1,
    "summary": "Chizilgan ER/EER diagrammani relyatsion jadvallarga xatosiz o'girishning qat'iy algoritmi.",
    "whatItDoes": "1. Oddiy entitiy -> Mustaqil Jadval.\n2. Zaif entitiy -> Jadval + Ota PK (Composite PK).\n3. 1:1 aloqa -> Qaysi tomon majburiy bo'lsa, o'sha tomonga FK.\n4. 1:N aloqa -> 'N' (ko'p) tomonga FK qo'yiladi.\n5. M:N aloqa -> Alohida oraliq (Junction) jadval ochiladi.\n6. Ko'p qiymatli atribut -> Alohida yangi jadval ochiladi.\n7. Superclass/Subclass -> Alohida jadvallar (PK=FK) yoki bitta umumiy jadval.",
    "whenToUse": "Diagrammani tugatib, SQL kodini (`CREATE TABLE`) yozishga o'tishdagi eng asosiy ko'prik.",
    "syntax": "-- 1:N da FK har doim N tomonga!\n-- M:N da har doim yangi jadval!\n-- Ko'p qiymatli atributda har doim yangi jadval!",
    "combinations": "Ushbu 7 ta qoidaga amal qilinsa, hosil bo'lgan jadvallar avtomatik ravishda kamida 3NF holatida chiqadi.",
    "example": "-- M:N mapping namunasi:\nCREATE TABLE buyurtma_tovarlari (\n  buyurtma_id INT REFERENCES buyurtma(id),\n  tovar_id INT REFERENCES tovar(id),\n  miqdor INT DEFAULT 1,\n  PRIMARY KEY (buyurtma_id, tovar_id)\n);",
    "gotchas": "1:N aloqada FK ni adashib '1' tomonga qo'yib yubormang! Masalan, Bo'lim jadvaliga xodim_id qo'ysangiz, bo'limda faqat bitta xodim ishlay oladigan bo'lib qoladi.",
    "related": [
      "entity",
      "cardinality",
      "foreign-key"
    ],
    "keywords": [
      "mapping",
      "eer mapping",
      "relyatsion o'tkazish",
      "7 qoida",
      "transformatsiya"
    ]
  },
  {
    "id": "foreign-key",
    "name": "FOREIGN KEY (FK / Tashqi Kalit)",
    "category": "2-Hafta • Relatsion & Normalizatsiya",
    "week": 2,
    "summary": "Boshqa jadvaldagi Primary Key ga ishora qiluvchi va jadvallararo bog'liqlikni ta'minlovchi ustun.",
    "whatItDoes": "Havola yaxlitligini (Referential Integrity) kafolatlaydi. Jadvalga mavjud bo'lmagan ota obyekt ID sini kiritishga ruxsat bermaydi. Shuningdek, ota yozuv o'chirilganda yoki yangilanganda bola yozuvlarning taqdirini (CASCADE, SET NULL, RESTRICT) boshqaradi.",
    "whenToUse": "Jadvallarni o'zaro bir-biriga ulashda: Masalan, `buyurtma` jadvalidagi `mijoz_id` ustuni `mijozlar` jadvalidagi `id` ga tashqi kalit bo'ladi.",
    "syntax": "-- Ustun darajasida:\nmijoz_id INT REFERENCES mijozlar(id)\n\n-- Jadval darajasida cheklov nomi bilan:\nCONSTRAINT fk_buyurtma_mijoz FOREIGN KEY (mijoz_id) REFERENCES mijozlar(id) ON DELETE CASCADE",
    "combinations": "ON DELETE CASCADE, ON DELETE SET NULL, ON DELETE RESTRICT, ON UPDATE CASCADE bilan birgalikda ishlatiladi.",
    "example": "CREATE TABLE xodimlar (\n  xodim_id INT PRIMARY KEY,\n  fio VARCHAR(100) NOT NULL,\n  bolim_id INT NOT NULL,\n  CONSTRAINT fk_xodim_bolim FOREIGN KEY (bolim_id) REFERENCES bolimlar(bolim_id) ON DELETE RESTRICT\n);",
    "gotchas": "Tashqi kalit ulanayotgan ustun ota jadvalda albatta `PRIMARY KEY` yoki `UNIQUE` bo'lishi shart! Oddiy indekslanmagan ustunga FK ulab bo'lmaydi.",
    "related": [
      "primary-key",
      "on-delete-cascade",
      "on-delete-restrict",
      "referential-integrity"
    ],
    "keywords": [
      "foreign key",
      "fk",
      "tashqi kalit",
      "references",
      "havola",
      "referential integrity"
    ]
  },
  {
    "id": "on-delete-cascade",
    "name": "ON DELETE CASCADE (Kaskadli O'chirish)",
    "category": "2-Hafta • Relatsion & Normalizatsiya",
    "week": 2,
    "summary": "Ota yozuv o'chirilganda unga bog'langan barcha bola yozuvlarni ham avtomatik ravishda o'chirib yuborish qoidasi.",
    "whatItDoes": "Ota jadvaldagi biror qator DELETE qilinganda, unga havola qilib turgan pastki jadvallardagi barcha qatorlar bazadan bir zumda, xatosiz birga o'chiriladi. Zaif entitiylar uchun majburiy hisoblanadi.",
    "whenToUse": "Hayotiy misol: Foydalanuvchi o'z profilini o'chirganda uning barcha yoqtirganlari (Likes), savatidagi tovarlari va sessiyalari ham o'chib ketishi kerak.",
    "syntax": "FOREIGN KEY (ota_id) REFERENCES ota_jadval(id) ON DELETE CASCADE",
    "combinations": "ON UPDATE CASCADE bilan birga qo'llanilganda, ota kalit raqami o'zgarsa, bola jadvallardagi barcha FK lar ham avtomatik yangilanadi.",
    "example": "CREATE TABLE sharhlar (\n  sharh_id INT PRIMARY KEY,\n  maqola_id INT REFERENCES maqola(id) ON DELETE CASCADE,\n  matn TEXT NOT NULL\n);",
    "gotchas": "Katta ehtiyotkorlik talab qiladi! Agar tasodifan bitta Mijozni o'chirib yuborsangiz, uning 5 yillik barcha buyurtmalari, to'lovlari va schyot-fakturalari butunlay yo'q bo'lib ketishi mumkin!",
    "related": [
      "foreign-key",
      "on-delete-set-null",
      "on-delete-restrict"
    ],
    "keywords": [
      "cascade",
      "on delete cascade",
      "kaskad",
      "ochirish",
      "avtomatik ochirish"
    ]
  },
  {
    "id": "on-delete-set-null",
    "name": "ON DELETE SET NULL",
    "category": "2-Hafta • Relatsion & Normalizatsiya",
    "week": 2,
    "summary": "Ota yozuv o'chirilganda bola yozuvlarni o'chirmasdan, ularning FK ustunini NULL ga aylantirib qo'yish.",
    "whatItDoes": "Bola yozuvlarning hayotini saqlab qoladi. Faqat ularning ota bilan aloqasini uzadi (FK qiymati NULL bo'lib qoladi).",
    "whenToUse": "Hayotiy misol: Kompaniya Boshlig'i (Menejer) ishdan bo'shasa yoki o'chirilsa, uning qo'l ostidagi oddiy xodimlarni o'chirib tashlamaymiz! Shunchaki xodimlarning `menejer_id` ustunini vaqtincha NULL qilib qo'yamiz.",
    "syntax": "FOREIGN KEY (rahbar_id) REFERENCES xodim(id) ON DELETE SET NULL",
    "combinations": "Bu qoida ishlashi uchun bola jadvaldagi FK ustuni albatta `NULL` qiymat qabul qila olishi shart (`NOT NULL` bo'lmasligi kerak).",
    "example": "CREATE TABLE loyihalar (\n  loyiha_id INT PRIMARY KEY,\n  loyiha_nomi VARCHAR(100),\n  kurator_id INT REFERENCES xodimlar(id) ON DELETE SET NULL\n);",
    "gotchas": "Agar FK ustuniga `NOT NULL` deb yozib, keyin `ON DELETE SET NULL` qoidasini bersangiz, baza ziddiyat tufayli jadvalni yaratishda xatolik beradi.",
    "related": [
      "foreign-key",
      "on-delete-cascade"
    ],
    "keywords": [
      "set null",
      "on delete set null",
      "null qilish",
      "ota ochirilganda"
    ]
  },
  {
    "id": "on-delete-restrict",
    "name": "ON DELETE RESTRICT / NO ACTION (O'chirishni Taqiqlovchi Qulf)",
    "category": "2-Hafta • Relatsion & Normalizatsiya",
    "week": 2,
    "summary": "Agar ota yozuvga bog'langan kamida bitta bola yozuv bo'lsa, ota yozuvni o'chirishga mutlaqo yo'l qo'ymaslik.",
    "whatItDoes": "Ma'lumotlar bazasida standart (default) xavfsizlik qoidasi. Baza administratoriga: 'To'xta! Bu kategoriyada hali tovarlar bor, avval tovarlarni ko'chir yoki o'chir, keyin kategoriyani o'chirasan' deb xatolik (Constraint Violation) qaytaradi.",
    "whenToUse": "Moliya, bank va omborxona tizimlarida. Masalan, 'Toshkent filiali' da hisob raqamlari bor ekan, bu filialni o'chirib bo'lmaydi.",
    "syntax": "FOREIGN KEY (kategoriya_id) REFERENCES kategoriya(id) ON DELETE RESTRICT",
    "combinations": "ON DELETE NO ACTION bilan bir xil ishlaydi (Oracle va PostgreSQL da deferrable tranzaksiya tekshiruvlarida kichik farqi bor).",
    "example": "CREATE TABLE mahsulot (\n  id INT PRIMARY KEY,\n  nomi VARCHAR(100),\n  brend_id INT REFERENCES brend(id) ON DELETE RESTRICT\n);",
    "gotchas": "RESTRICT o'chirishni taqiqlash orqali tasodifiy ma'lumot yo'qolishidan eng yaxshi himoya hisoblanadi. Agar rejalashtirilgan o'chirish kerak bo'lsa, avval bolalarni qo'lda tozalash lozim.",
    "related": [
      "foreign-key",
      "on-delete-cascade",
      "referential-integrity"
    ],
    "keywords": [
      "restrict",
      "no action",
      "taqiqlash",
      "qulf",
      "xavfsizlik",
      "fk"
    ]
  },
  {
    "id": "domain-integrity",
    "name": "DOMAIN INTEGRITY (Domen Yaxlitligi)",
    "category": "2-Hafta • Relatsion & Normalizatsiya",
    "week": 2,
    "summary": "Ustundagi har bir qiymat o'zining belgilangan ma'lumot turi, formati va ruxsat etilgan diapazoniga mos kelishi sharti.",
    "whatItDoes": "Jadval ustuniga noto'g'ri turdagi (masalan, yosh ustuniga harf, telefon o'rniga rasm) yoki noto'g'ri oraliqdagi (masalan, oylik maosh manfiy son) ma'lumotlar kirishini to'xtatadi.",
    "whenToUse": "Bazada ma'lumotlar tozaligini saqlashda: `CHECK`, `NOT NULL`, `DEFAULT` va to'g'ri ma'lumot turlari (`INT`, `DATE`, `DECIMAL`) orqali ta'minlanadi.",
    "syntax": "-- Domen yaxlitligini ta'minlovchi vositalar:\nbalans DECIMAL(12,2) CHECK (balans >= 0),\njins CHAR(1) CHECK (jins IN ('M', 'F'))",
    "combinations": "Maxsus ENUM turlar yoki User Defined Types (CREATE DOMAIN) bilan mustahkamlanadi.",
    "example": "CREATE TABLE bank_karta (\n  pan VARCHAR(16) CHECK (LENGTH(pan) = 16),\n  amal_muddati VARCHAR(5) CHECK (amal_muddati ~ '^[0-1][0-9]/[0-9]{2}$'),\n  status VARCHAR(10) CHECK (status IN ('ACTIVE', 'BLOCKED', 'EXPIRED'))\n);",
    "gotchas": "Domen yaxlitligi frontend (React) da emas, balki aynan ma'lumotlar bazasi yadrosida bo'lishi shart. Aks holda to'g'ridan-to'g'ri API chaqiruvlari bazani ifloslantiradi.",
    "related": [
      "entity-integrity",
      "referential-integrity",
      "check-constraint"
    ],
    "keywords": [
      "domain integrity",
      "domen yaxlitligi",
      "check",
      "datatype",
      "diapazon"
    ]
  },
  {
    "id": "entity-integrity",
    "name": "ENTITY INTEGRITY (Entitiy Yaxlitligi)",
    "category": "2-Hafta • Relatsion & Normalizatsiya",
    "week": 2,
    "summary": "Relyatsion modelning 1-qonuni: Hech bir jadvalda Primary Key ustuni NULL bo'lishi mumkin emas va har doim unikal bo'lishi shart.",
    "whatItDoes": "Har bir qatorning o'ziga xos aniq shaxsi (identity) bo'lishini talab qiladi. Agar Primary Key NULL bo'lsa, qatorni boshqalaridan ajratib bo'lmaydi.",
    "whenToUse": "Har qanday jadval loyihalashda majburiy amal qilinadi. `PRIMARY KEY` belgilanishi bilan baza buni avtomatik nazoratga oladi.",
    "syntax": "-- Entity integrity kafolati:\nid INT PRIMARY KEY -- (Avtomatik ravishda UNIQUE va NOT NULL bo'ladi)",
    "combinations": "Agar kalit Composite (ko'p ustunli) bo'lsa, uning tarkibidagi birorta ham ustun NULL bo'lishi mumkin emas!",
    "example": "-- To'g'ri loyiha:\nCREATE TABLE talabalar (\n  talaba_id INT PRIMARY KEY, -- NULL bo'lishi 100% taqiqlanadi!\n  ism VARCHAR(50) NOT NULL\n);",
    "gotchas": "Imtihon savoli: 'Candidate Key NULL qabul qila oladimi?'. Ha, agar u UNIQUE ustun bo'lsa, SQL da 1 ta NULL qabul qilishi mumkin. Lekin saylangan PRIMARY KEY aslo NULL qabul qilolmaydi!",
    "related": [
      "primary-key",
      "domain-integrity",
      "referential-integrity"
    ],
    "keywords": [
      "entity integrity",
      "entitiy yaxlitligi",
      "pk not null",
      "qonun",
      "unikal"
    ]
  },
  {
    "id": "referential-integrity",
    "name": "REFERENTIAL INTEGRITY (Havola Yaxlitligi)",
    "category": "2-Hafta • Relatsion & Normalizatsiya",
    "week": 2,
    "summary": "Relyatsion modelning 2-qonuni: Tashqi kalit (FK) qiymati yo ota jadvaldagi mavjud PK ga teng bo'lishi yoki NULL bo'lishi shart.",
    "whatItDoes": "Bazada 'yetim qatorlar' (Orphan records) paydo bo'lishining oldini oladi. Masalan, mavjud bo'lmagan 999-raqamli mijoz nomiga buyurtma yozishga yo'l qo'ymaydi.",
    "whenToUse": "Barcha `FOREIGN KEY ... REFERENCES` aloqalarida ishlaydi.",
    "syntax": "ALTER TABLE buyurtma ADD CONSTRAINT fk_mijoz FOREIGN KEY (mijoz_id) REFERENCES mijozlar(id);",
    "combinations": "ON DELETE va ON UPDATE harakatlari (CASCADE, RESTRICT, SET NULL) bilan yaxlitlik doimo muvozanatda ushlab turiladi.",
    "example": "-- Agar mijozlar jadvalida id=5 bo'lmasa, quyidagi so'rov xatolik beradi:\nINSERT INTO buyurtma (id, mijoz_id, summa) VALUES (1, 5, 250000);\n-- ERROR: insert or update on table 'buyurtma' violates foreign key constraint",
    "gotchas": "Agar dasturchi tezlik uchun FK larni qo'ymasdan faqat oddiy INT ustun qilib bog'lasa, tez orada bazada o'chib ketgan foydalanuvchilarning minglab yetim ma'lumotlari to'planib qoladi.",
    "related": [
      "foreign-key",
      "entity-integrity",
      "domain-integrity"
    ],
    "keywords": [
      "referential integrity",
      "havola yaxlitligi",
      "yetim qator",
      "orphan",
      "fk qoidasi"
    ]
  },
  {
    "id": "ra-select",
    "name": "SELECTION (Relyatsion Algebra: σ Qatorlarni Saralash)",
    "category": "2-Hafta • Relatsion & Normalizatsiya",
    "week": 2,
    "summary": "Jadvaldan faqat ma'lum bir mantiqiy shartni qanoatlantiruvchi gorizontal qatorlarni ajratib olish amali.",
    "whatItDoes": "Yunoncha sigma ($sigma$) harfi bilan belgilanadi. Natijada qatorlar soni kamayadi, lekin barcha ustunlar o'zgarishsiz qoladi. SQL dagi `WHERE` shartiga to'liq mos keladi.",
    "whenToUse": "Faqat ma'lum guruhdagi ma'lumotlarni ko'rishda. Masalan: Oyligi 5 000 000 dan yuqori bo'lgan xodimlar.",
    "syntax": "-- Relyatsion algebra formulasi:\nσ_{oylik > 5000000}(Xodimlar)\n\n-- SQL ekvivalenti:\nSELECT * FROM xodimlar WHERE oylik > 5000000;",
    "combinations": "Proyeksiya ($pi$) bilan birga ishlatilib, kerakli ustunlar va qatorlar bir vaqtda filtrlanadi: $pi_{ism, familiya}(sigma_{yosh > 20}(Talabalar))$.",
    "example": "-- Toshkent shahrida yashovchi mijozlarni olish:\n-- RA: σ_{shahar = 'Toshkent'}(Mijozlar)\nSELECT * FROM mijozlar WHERE shahar = 'Toshkent';",
    "gotchas": "Selection faqat qatorlarni (gorizontal) filtrlaydi, u hech qachon ustunlarni o'chirmaydi. Ustunlarni qisqartirish uchun Projection ($pi$) kerak.",
    "related": [
      "ra-project",
      "where-clause"
    ],
    "keywords": [
      "ra-select",
      "sigma",
      "selection",
      "selektsiya",
      "where",
      "relyatsion algebra"
    ]
  },
  {
    "id": "ra-project",
    "name": "PROJECTION (Relyatsion Algebra: π Ustunlarni Tanlash)",
    "category": "2-Hafta • Relatsion & Normalizatsiya",
    "week": 2,
    "summary": "Jadvaldan faqat kerakli vertikal ustunlarni ajratib oluvchi va dublikatlarni avtomatik yo'qotuvchi amal.",
    "whatItDoes": "Yunoncha pi ($pi$) harfi bilan yoziladi. Jadvalning barcha qatorlarini saqlab, faqat ko'rsatilgan ustunlarni qoldiradi. Relyatsion algebra qoidasiga ko'ra, hosil bo'lgan to'plamdan barcha dublikat qatorlar avtomatik ravishda o'chiriladi.",
    "whenToUse": "Foydalanuvchiga barcha 40 ta ustunni emas, faqat Ism va Telefon ustunini ko'rsatish kerak bo'lganda.",
    "syntax": "-- Relyatsion algebra formulasi:\nπ_{ism, telefon}(Mijozlar)\n\n-- SQL ekvivalenti:\nSELECT DISTINCT ism, telefon FROM mijozlar;",
    "combinations": "Selektsiya ($sigma$) bilan birikib har qanday murakkab so'rovning asosiy skeletini tashkil etadi.",
    "example": "-- Xodimlarning lavozimlarini takrorlanmas ro'yxatini olish:\n-- RA: π_{lavozim}(Xodimlar)\nSELECT DISTINCT lavozim FROM xodimlar;",
    "gotchas": "SQL dagi oddiy `SELECT ustun FROM jadval` dublikatlarni avtomatik o'chirmaydi. Relyatsion algebradagi sof $pi$ ga erishish uchun SQL da albatta `DISTINCT` yozish kerak!",
    "related": [
      "ra-select",
      "distinct-clause"
    ],
    "keywords": [
      "ra-project",
      "pi",
      "projection",
      "proyeksiya",
      "select",
      "ustunlar",
      "relyatsion algebra"
    ]
  },
  {
    "id": "ra-cartesian",
    "name": "CARTESIAN PRODUCT (Relyatsion Algebra: × Dekart Ko'paytmasi)",
    "category": "2-Hafta • Relatsion & Normalizatsiya",
    "week": 2,
    "summary": "Birinchi jadvalning har bir qatorini ikkinchi jadvalning har bir qatoriga birma-bir juftlashtiruvchi ko'paytma.",
    "whatItDoes": "Xoch ($\times$) belgisi bilan yoziladi. Agar R jadvalida $N$ ta, S jadvalida $M$ ta qator bo'lsa, natijaviy jadvalda $N \times M$ ta qator paydo bo'ladi. SQL dagi `CROSS JOIN` ga to'g'ri keladi.",
    "whenToUse": "Barcha mumkin bo'lgan kombinatsiyalarni hosil qilishda: Masalan, 4 xil futbolka o'lchami $\times$ 5 xil rang = 20 xil mahsulot varianti.",
    "syntax": "-- RA: R × S\n-- SQL da:\nSELECT * FROM jadval1 CROSS JOIN jadval2;",
    "combinations": "Dekart ko'paytmasiga shart ($sigma$) qo'shilganda u Theta Join ($\bowtie_\theta$) ga aylanadi: $sigma_{shart}(R \times S) = R \bowtie_{shart} S$.",
    "example": "-- Ranglar va O'lchamlar ko'paytmasi:\nSELECT r.rang, o.olcham\nFROM ranglar r CROSS JOIN olchamlar o;",
    "gotchas": "Xavfli operatsiya! 100 000 qatorli jadvalni 100 000 qatorli jadvalga shartsiz ko'paytirsangiz, $10 000 000 000$ (10 milliard) qator hosil bo'lib, server xotirasi to'lib qulaydi!",
    "related": [
      "cross-join",
      "ra-theta-join",
      "ra-natural-join"
    ],
    "keywords": [
      "cartesian product",
      "dekart",
      "cross join",
      "kopaytma",
      "relyatsion algebra"
    ]
  },
  {
    "id": "ra-union",
    "name": "UNION (Relyatsion Algebra: ∪ To'plam Birlashmasi)",
    "category": "2-Hafta • Relatsion & Normalizatsiya",
    "week": 2,
    "summary": "Ikki mos jadval qatorlarini bitta umumiy ro'yxatga jamlovchi va dublikatlarni olib tashlovchi amal.",
    "whatItDoes": "Ikkala jadval ham 'Union-Compatible' bo'lishi shart (ustunlar soni va ularning ma'lumot turlari bir xil tartibda bo'lishi lozim).",
    "whenToUse": "Hayotiy misol: Toshkent filiali mijozlari va Samarqand filiali mijozlarini bitta umumiy ro'yxatga jamlash.",
    "syntax": "-- RA: R ∪ S\n-- SQL da:\nSELECT shahar FROM filial_toshkent\nUNION\nSELECT shahar FROM filial_samarqand;",
    "combinations": "Dublikatlarni saqlab qolish kerak bo'lsa, SQL da `UNION ALL` ishlatiladi.",
    "example": "SELECT telefon FROM mijozlar\nUNION\nSELECT telefon FROM taminotchilar;",
    "gotchas": "Ustunlar turlari mos kelmasa, baza xatolik beradi. Masalan, birinchi so'rovda `INT`, ikkinchisida `VARCHAR` bo'lsa birlashtirib bo'lmaydi.",
    "related": [
      "union-all",
      "ra-intersect",
      "ra-diff"
    ],
    "keywords": [
      "ra-union",
      "birlashma",
      "union compatible",
      "relyatsion algebra"
    ]
  },
  {
    "id": "ra-diff",
    "name": "SET DIFFERENCE (Relyatsion Algebra: − To'plam Ayirmasi)",
    "category": "2-Hafta • Relatsion & Normalizatsiya",
    "week": 2,
    "summary": "Birinchi jadvalda bor, lekin ikkinchi jadvalda umuman uchramaydigan qatorlarni ajratib oluvchi amal.",
    "whatItDoes": "Minus ($-$) belgisi bilan yoziladi. SQL dagi `EXCEPT` (yoki Oracle da `MINUS`) buyrug'iga to'g'ri keladi. Jadvallar Union-Compatible bo'lishi shart.",
    "whenToUse": "Hayotiy misol: Ro'yxatdan o'tgan, lekin hali birorta ham buyurtma bermagan yangi foydalanuvchilarni topish.",
    "syntax": "-- RA: Barcha_Mijozlar − Buyurtma_Berganlar\n-- SQL da:\nSELECT mijoz_id FROM mijozlar\nEXCEPT\nSELECT mijoz_id FROM buyurtmalar;",
    "combinations": "Subquery dagi `NOT IN` yoki `NOT EXISTS` operatorlarining nazariy asosi hisoblanadi.",
    "example": "SELECT talaba_id FROM barcha_talabalar\nEXCEPT\nSELECT talaba_id FROM imtihondan_yiqilganlar;",
    "gotchas": "Ketma-ketlik o'ta muhim! $A - B \neq B - A$. Birinchi qaysi jadval yozilganiga qarab natija butunlay boshqacha chiqadi.",
    "related": [
      "except-operator",
      "ra-intersect",
      "ra-union"
    ],
    "keywords": [
      "set difference",
      "ayirma",
      "except",
      "minus",
      "relyatsion algebra"
    ]
  },
  {
    "id": "ra-intersect",
    "name": "INTERSECTION (Relyatsion Algebra: ∩ To'plam Kesishmasi)",
    "category": "2-Hafta • Relatsion & Normalizatsiya",
    "week": 2,
    "summary": "Bir vaqtning o'zida ikkala jadvalda ham mavjud bo'lgan umumiy qatorlarni topish amali.",
    "whatItDoes": "Kvadrat qavssimon to'ntarilgan U ($cap$) belgisi bilan yoziladi. SQL dagi `INTERSECT` buyrug'iga to'liq mos keladi. Ikkala tomonda ham teng mavjud yozuvlargina qoladi.",
    "whenToUse": "Hayotiy misol: Ham 'Dasturlash', ham 'Ma'lumotlar bazasi' kurslarining ikkalasiga ham yozilgan talabalar ro'yxatini olish.",
    "syntax": "-- RA: R ∩ S\n-- SQL da:\nSELECT talaba_id FROM kurs_1\nINTERSECT\nSELECT talaba_id FROM kurs_2;",
    "combinations": "Ayirma orqali ham ifodalash mumkin: $R cap S = R - (R - S)$.",
    "example": "SELECT mijoz_id FROM tolov_qilganlar\nINTERSECT\nSELECT mijoz_id FROM tovar_qabul_qilganlar;",
    "gotchas": "INTERSECT faqat ikkala jadvalda ham mavjud qatorlarni qaytaradi. Agar bitta jadvalda bo'lib ikkinchisida bo'lmasa, u qator yo'qotiladi.",
    "related": [
      "intersect-operator",
      "ra-union",
      "ra-diff"
    ],
    "keywords": [
      "intersection",
      "kesishma",
      "intersect",
      "umumiy qatorlar",
      "relyatsion algebra"
    ]
  },
  {
    "id": "ra-natural-join",
    "name": "NATURAL JOIN (Relyatsion Algebra: ⋈ Tabiiy Bog'lash)",
    "category": "2-Hafta • Relatsion & Normalizatsiya",
    "week": 2,
    "summary": "Ikki jadvaldagi nomi va turi aynan bir xil bo'lgan barcha ustunlar bo'yicha avtomatik tenglik bilan bog'lash amali.",
    "whatItDoes": "Kapalak ($\bowtie$) belgisi bilan yoziladi. Optimizator ikkala jadvalda bir xil nomlangan ustunlarni topadi, ularni tenglashtiradi va takrorlangan ustunning bittasini natijadan olib tashlaydi.",
    "whenToUse": "Nazariy masalalarda va standart toza kalitlarga ega jadvallarni tezkor bog'lashda.",
    "syntax": "-- RA: Xodimlar ⋈ Bo'limlar\n-- SQL da:\nSELECT * FROM xodimlar NATURAL JOIN bolimlar;",
    "combinations": "Agar bir xil nomli ustunlar bo'lmasa, Natural Join oddiy Dekart ko'paytmasiga ($\times$) aylanib ketadi.",
    "example": "-- Ikkala jadvalda ham 'deptno' ustuni bor bo'lsa:\nSELECT ename, dname FROM emp NATURAL JOIN dept;",
    "gotchas": "Ishlab chiqarish (Production) da NATURAL JOIN dan foydalanish tavsiya etilmaydi! Chunki kelajakda ikkala jadvalga bir xil nomli (masalan `status` yoki `created_at`) ustun qo'shilsa, so'rovingiz kutilmaganda buziladi va bo'sh natija beradi.",
    "related": [
      "inner-join",
      "natural-join",
      "ra-theta-join"
    ],
    "keywords": [
      "natural join",
      "tabiiy boglash",
      "bowtie",
      "avtomatik join",
      "relyatsion algebra"
    ]
  },
  {
    "id": "ra-theta-join",
    "name": "THETA JOIN (Relyatsion Algebra: ⋈_θ Shartli Bog'lash)",
    "category": "2-Hafta • Relatsion & Normalizatsiya",
    "week": 2,
    "summary": "Ikki jadvalni ixtiyoriy taqqoslash sharti (θ: =, <, >, <=, >=, !=) asosida bog'lash.",
    "whatItDoes": "Avval Dekart ko'paytmasi ($\times$) olinadi, so'ngra ko'rsatilgan $\theta$ sharti bo'yicha qatorlar filtrlanadi: $R \bowtie_\theta S = sigma_\theta(R \times S)$. Agar shart faqat tenglik (`=`) bo'lsa, u 'Equi-Join' deb ataladi.",
    "whenToUse": "Oraliqlar yoki tengsizliklar bo'yicha bog'lashda. Masalan, Xodimning oyligi qaysi Soliq stavkasi oralig'iga (`min_oylik` va `max_oylik`) to'g'ri kelishini topishda.",
    "syntax": "-- RA: Xodim ⋈_{oylik BETWEEN min_sal AND max_sal} Maosh_Darajasi\n-- SQL da:\nSELECT e.ename, s.grade\nFROM emp e JOIN salgrade s ON e.sal BETWEEN s.losal AND s.hisal;",
    "combinations": "SQL dagi barcha `INNER JOIN ... ON shart` ifodalari aynan Theta Join hisoblanadi.",
    "example": "SELECT m.nomi, c.chegirma_foizi\nFROM mahsulot m JOIN chegirmalar c ON m.narx >= c.minimal_narx;",
    "gotchas": "Tengsizlik bilan bog'lashda indekslar ko'pincha ishlamaydi va Nested Loop algoritmi ishga tushib ketishi mumkin.",
    "related": [
      "inner-join",
      "ra-cartesian",
      "ra-natural-join"
    ],
    "keywords": [
      "theta join",
      "equijoin",
      "shartli boglash",
      "tengsizlik",
      "relyatsion algebra"
    ]
  },
  {
    "id": "ra-division",
    "name": "DIVISION (Relyatsion Algebra: ÷ Bo'lish Operator)",
    "category": "2-Hafta • Relatsion & Normalizatsiya",
    "week": 2,
    "summary": "'Ikkinchi jadvaldagi BARCHA qatorlarga mos keluvchi' birinchi jadval subyektlarini topish amali.",
    "whatItDoes": "Bo'lish ($div$) belgisi bilan yoziladi. SQL da to'g'ridan-to'g'ri `DIVIDE` buyrug'i yo'q, shuning uchun u `NOT EXISTS (NOT EXISTS)` yoki `GROUP BY + COUNT = (SELECT COUNT(*))` kombinatsiyasi bilan yoziladi.",
    "whenToUse": "Hayotiy misol: 'Universitetdagi barcha majburiy fanlarni o'zlashtirgan talabalarni toping' yoki 'Omborda bor barcha mahsulotlarni xarid qilgan mijoz kim?'.",
    "syntax": "-- RA: Talaba_Fanlar ÷ Majburiy_Fanlar\n-- SQL da klassik GROUP BY usuli:\nSELECT talaba_id\nFROM oqigan_fanlar\nWHERE fan_id IN (SELECT fan_id FROM majburiy_fanlar)\nGROUP BY talaba_id\nHAVING COUNT(DISTINCT fan_id) = (SELECT COUNT(*) FROM majburiy_fanlar);",
    "combinations": "Relational Algebra da eng qiyin va chuqur tushuncha hisoblanadi. Universal kvantor ($\forall$ - har bir) ma'nosini beradi.",
    "example": "-- Barcha loyihalarda ishlagan dasturchilarni topish:\nSELECT dasturchi_id\nFROM loyiha_ishtirokchilari\nGROUP BY dasturchi_id\nHAVING COUNT(DISTINCT loyiha_id) = (SELECT COUNT(*) FROM loyihalar);",
    "gotchas": "Imtihon savoli: 'SQL da Division amali qanday hosil qilinadi?'. Javob: Ikki karra NOT EXISTS (Correlated Subquery) yoki GROUP BY + HAVING COUNT(*) bilan!",
    "related": [
      "exists-operator",
      "having-clause",
      "group-by"
    ],
    "keywords": [
      "division",
      "bolish",
      "divide",
      "barcha",
      "universal",
      "relyatsion algebra"
    ]
  },
  {
    "id": "ra-rename",
    "name": "RENAME (Relyatsion Algebra: ρ Qayta Nomlash)",
    "category": "2-Hafta • Relatsion & Normalizatsiya",
    "week": 2,
    "summary": "Relyatsion algebrada munosabat (jadval) yoki ustun nomini vaqtincha yangi nomga o'zgartirish.",
    "whatItDoes": "Yunoncha ro ($\rho$) belgisi bilan yoziladi. SQL dagi `AS` taxallusi (Alias) ga mos keladi. Ayniqsa bitta jadvalni o'zini-o'ziga bog'lashda (`Self Join`) nomlar to'qnashmasligi uchun majburiydir.",
    "whenToUse": "Xodimlar jadvalini xodim va uning boshlig'i sifatida ikkiga ajratib ko'rishda: `emp e` va `emp m`.",
    "syntax": "-- RA: ρ_{Xodim}(E) yoki ρ_{YangiNom(u1, u2)}(E)\n-- SQL da:\nSELECT e.fio AS xodim_fio, m.fio AS rahbar_fio\nFROM xodimlar e JOIN xodimlar m ON e.rahbar_id = m.id;",
    "combinations": "Self Join, subquery lar va murakkab algebrik formulalarda ustun nomlarini aniq ko'rsatishda xizmat qiladi.",
    "example": "SELECT d.nomi AS bolim_nomi, COUNT(e.id) AS xodimlar_soni\nFROM bolimlar d JOIN xodimlar e ON d.id = e.bolim_id\nGROUP BY d.nomi;",
    "gotchas": "Agar SQL da FROM ichidagi subquery ga taxallus (alias) qo'yishni unutsangiz, baza 'subquery in FROM must have an alias' degan xatolik beradi.",
    "related": [
      "self-join",
      "select-from"
    ],
    "keywords": [
      "rename",
      "rho",
      "alias",
      "taxallus",
      "as",
      "relyatsion algebra"
    ]
  },
  {
    "id": "functional-dependency",
    "name": "FUNCTIONAL DEPENDENCY (Funksional Bog'liqlik: X → Y)",
    "category": "2-Hafta • Relatsion & Normalizatsiya",
    "week": 2,
    "summary": "Agar X ustunining qiymati ma'lum bo'lsa, Y ustunining qiymati aniq va bir qiymatli topilishi qoidasi.",
    "whatItDoes": "O'qilishi: 'X funksional ravishda Y ni aniqlaydi' ($X \to Y$). Bu yerda X — Determinant deb ataladi. Masalan, `pasport_seriya_raqam -> fio, tugilgan_sana`. Agar pasport ma'lum bo'lsa, odamning ismi aniq bitta bo'ladi.",
    "whenToUse": "Normalizatsiya (1NF dan BCNF gacha) ning poydevori. Jadvallardagi dublikatlarni yo'qotish va to'g'ri bo'laklarga ajratish uchun ishlatiladi.",
    "syntax": "-- Matematik ifoda:\nX -> Y\n-- Trivial bog'liqlik: agar Y ⊆ X bo'lsa (masalan: {id, ism} -> ism)\n-- No-trivial bog'liqlik: agar Y X ning tarkibida bo'lmasa (masalan: id -> ism)",
    "combinations": "Armstrong aksiomalari orqali yangi bog'liqliklar keltirib chiqariladi.",
    "example": "-- Talabalar jadvalida:\n-- talaba_id -> ism, familiya, guruh_id\n-- guruh_id -> fakultet_nomi\n-- Demak: talaba_id -> fakultet_nomi (Tranzitiv bog'liqlik!)",
    "gotchas": "Teskari yo'nalish har doim ham to'g'ri bo'lmaydi! `talaba_id -> ism` to'g'ri, lekin `ism -> talaba_id` xato, chunki bir xil ismli bir nechta talaba bo'lishi mumkin.",
    "related": [
      "partial-dependency",
      "transitive-dependency",
      "armstrong-axioms",
      "bcnf"
    ],
    "keywords": [
      "functional dependency",
      "fd",
      "funksional bogliqlik",
      "determinant",
      "x->y",
      "normalizatsiya"
    ]
  },
  {
    "id": "partial-dependency",
    "name": "PARTIAL DEPENDENCY (Qisman Bog'liqlik — 2NF Dushmani)",
    "category": "2-Hafta • Relatsion & Normalizatsiya",
    "week": 2,
    "summary": "Kompozit (ko'p ustunli) Primary Key ning faqat bir qismiga bog'lanib qolgan ustunlar mavjudligi.",
    "whatItDoes": "Jadval Primary Key si `{talaba_id, kurs_id}` bo'lsa-yu, `talaba_ismi` faqatgina `talaba_id` ga bog'liq bo'lsa (`kurs_id` ga umuman aloqasi yo'q), bu qisman bog'liqlik deyiladi. Oqibatda bitta talaba 10 ta kursga yozilsa, uning ismi 10 marta takroran yoziladi!",
    "whenToUse": "2NF ga o'tishda aniqlanadi va jadvalni bo'lish orqali yo'qotiladi.",
    "syntax": "-- XATO:\n-- PK: (buyurtma_id, mahsulot_id)\n-- Bog'liqlik: mahsulot_id -> mahsulot_nomi (Qisman bog'liqlik!)",
    "combinations": "2NF talabi: Jadval 1NF da bo'lishi va birorta ham qisman bog'liqlik bo'lmasligi shart (Full Functional Dependency).",
    "example": "-- Qisman bog'liqlikni yo'qotish (2NF ga o'tkazish):\n-- Mahsulot ma'lumotlarini alohida jadvalga chiqaramiz:\nCREATE TABLE mahsulot (\n  mahsulot_id INT PRIMARY KEY,\n  nomi VARCHAR(100), -- Endi qisman bog'liqlik yo'q!\n  narx DECIMAL(10,2)\n);",
    "gotchas": "Agar jadvalning Primary Key si bitta ustundan iborat bo'lsa (Composite emas), u jadvalda QISMAN BOG'LIQLIK BO'LISHI MUMKIN EMAS! U avtomatik 2NF hisoblanadi.",
    "related": [
      "2nf",
      "functional-dependency",
      "transitive-dependency"
    ],
    "keywords": [
      "partial dependency",
      "qisman bogliqlik",
      "2nf",
      "composite pk",
      "dublikat"
    ]
  },
  {
    "id": "transitive-dependency",
    "name": "TRANSITIVE DEPENDENCY (Tranzitiv Bog'liqlik — 3NF Dushmani)",
    "category": "2-Hafta • Relatsion & Normalizatsiya",
    "week": 2,
    "summary": "Nokalit ustunning boshqa bir nokalit ustun orqali Primary Key ga bilvosita bog'lanishi (A → B va B → C).",
    "whatItDoes": "Masalan: `xodim_id -> bolim_id` va `bolim_id -> bolim_boshligi`. Natijada `xodim_id -> bolim_boshligi` tranzitiv bog'liqligi hosil bo'ladi. Agar bo'limda 100 ta xodim ishlasa, bo'lim boshlig'ining ismi 100 marta takrorlanadi!",
    "whenToUse": "3NF ga o'tishda bunday oraliq ustunlar alohida jadvalga chiqariladi.",
    "syntax": "-- Tranzitiv zanjir: A -> B, B -> C  =>  A -> C (Bu yerda B ham, C ham kalit emas)",
    "combinations": "3NF talabi: Jadval 2NF da bo'lishi va birorta ham tranzitiv bog'liqlik bo'lmasligi shart.",
    "example": "-- 3NF buzilgan holat:\n-- xodim(xodim_id, ism, bolim_id, bolim_nomi) -> bolim_id orqali tranzitiv!\n\n-- 3NF ga keltirilgan to'g'ri holat:\nCREATE TABLE bolim (\n  bolim_id INT PRIMARY KEY,\n  bolim_nomi VARCHAR(50)\n);\nCREATE TABLE xodim (\n  xodim_id INT PRIMARY KEY,\n  ism VARCHAR(50),\n  bolim_id INT REFERENCES bolim(bolim_id)\n);",
    "gotchas": "Tranzitiv bog'liqlik bo'lsa, 'Update Anomaly' yuzaga keladi: bo'lim nomi o'zgarsa, 100 ta qatordagi ma'lumotni yangilashga majbur bo'lasiz.",
    "related": [
      "3nf",
      "partial-dependency",
      "functional-dependency"
    ],
    "keywords": [
      "transitive dependency",
      "tranzitiv",
      "3nf",
      "zanjir",
      "oraliq bogliqlik"
    ]
  },
  {
    "id": "armstrong-axioms",
    "name": "ARMSTRONG'S AXIOMS (Armstrong Aksiomalari)",
    "category": "2-Hafta • Relatsion & Normalizatsiya",
    "week": 2,
    "summary": "Funksional bog'liqliklardan yangi xulosalar chiqarish uchun qo'llaniladigan 3 ta asosiy qoida.",
    "whatItDoes": "1. Refleksivlik (Reflexivity): Agar $Y subseteq X$ bo'lsa, u holda $X \to Y$.\n2. Qo'shimchalik (Augmentation): Agar $X \to Y$ bo'lsa, ixtiyoriy $Z$ uchun $XZ \to YZ$.\n3. Tranzitivlik (Transitivity): Agar $X \to Y$ va $Y \to Z$ bo'lsa, u holda $X \to Z$.",
    "whenToUse": "Nomzod kalitlarni (Candidate Keys) matematik hisoblashda va minimal qoplamani (Minimal Cover) topishda.",
    "syntax": "-- Keltirib chiqarilgan qo'shimcha qoidalar:\n-- Birlashma (Union): X -> Y va X -> Z bo'lsa => X -> YZ\n-- Ajratish (Decomposition): X -> YZ bo'lsa => X -> Y va X -> Z\n-- Psevdo-tranzitivlik: X -> Y va WY -> Z bo'lsa => WX -> Z",
    "combinations": "Relatsion nazariyaning to'liqligi (Sound & Complete) aynan shu aksiomalar bilan isbotlangan.",
    "example": "-- Misol: {id, passport} -> id (Refleksivlik qoidasi bo'yicha har doim to'g'ri)",
    "gotchas": "Ajratish (Decomposition) qoidasi faqat o'ng tomon uchun ishlaydi! $X \to YZ$ dan $X \to Y$ kelib chiqadi. Lekin $XY \to Z$ dan $X \to Z$ deb ajratib BO'LMAYDI!",
    "related": [
      "functional-dependency",
      "bcnf"
    ],
    "keywords": [
      "armstrong",
      "aksioma",
      "reflexivity",
      "transitivity",
      "augmentation",
      "qoidalar"
    ]
  },
  {
    "id": "unnormalized-form",
    "name": "UNF (Unnormalized Form / Boshlang'ich Jadval)",
    "category": "2-Hafta • Relatsion & Normalizatsiya",
    "week": 2,
    "summary": "Tarkibida takrorlanuvchi guruhlar, massivlar va noatomar qiymatlar bo'lgan tartiblanmagan xom jadval.",
    "whatItDoes": "Excel jadvallari yoki qog'oz blankalarga o'xshaydi: bitta katakda vergul bilan ajratilgan 3 ta telefon raqam yoki bitta qatorda bir nechta tovarlar ro'yxati yozilgan bo'ladi.",
    "whenToUse": "Mavjud qog'oz hujjat yoki Excel faylni ma'lumotlar bazasiga o'tkazishni boshlashda (0-bosqich).",
    "syntax": "-- UNF holatidagi jadval misoli:\n-- Buyurtma_№ | Mijoz | Telefonlar               | Tovar_nomlari\n-- 101         | Ali   | +99890..., +99897...      | Non, Sut, Yog'",
    "combinations": "UNF dan 1NF ga o'tish uchun barcha takrorlanuvchi guruhlar alohida atomar qatorlarga yoki yangi jadvallarga ajratiladi.",
    "example": "-- UNF ni tuzatish:\n-- 1. Telefonlarni alohida qatorlarga chiqaramiz\n-- 2. Tovar nomlarini alohida 'buyurtma_tarkibi' jadvaliga ko'chiramiz",
    "gotchas": "UNF holatidagi ma'lumotlar bazasida qidiruv, saralash va filtrlash dahshatli darajada sekin va xatoliklarga to'la bo'ladi.",
    "related": [
      "1nf",
      "multivalued-attribute"
    ],
    "keywords": [
      "unf",
      "unnormalized",
      "xom jadval",
      "takrorlanuvchi guruh",
      "normalizatsiya"
    ]
  },
  {
    "id": "1nf",
    "name": "1NF (Birinchi Normal Forma / First Normal Form)",
    "category": "2-Hafta • Relatsion & Normalizatsiya",
    "week": 2,
    "summary": "Har bir katakda faqat va faqat bitta bo'linmas (atomar) qiymat saqlanishi va takrorlanuvchi guruhlar bo'lmasligi sharti.",
    "whatItDoes": "Bitta ustun ichida vergul bilan ajratilgan massivlar (`+998901, +998902`) yoki bir nechta qatorli matnlar bo'lishini taqiqlaydi. Har bir qator yagona Primary Key orqali aniqlanishi shart.",
    "whenToUse": "Barcha relyatsion ma'lumotlar bazalari uchun eng minimal boshlang'ich talab.",
    "syntax": "-- 1NF buzilgan:\ntelefonlar VARCHAR(255) -- '+99890111, +99890222'\n\n-- 1NF ga keltirilgan:\nxodim_telefonlari (xodim_id, telefon) -- Har bir telefon alohida qatorda!",
    "combinations": "Ko'p qiymatli atributlar va tarkibli atributlarni atomar ustunlarga ajratish orqali ta'minlanadi.",
    "example": "CREATE TABLE talaba_tillari (\n  talaba_id INT REFERENCES talaba(id),\n  til_kodi VARCHAR(5),\n  PRIMARY KEY (talaba_id, til_kodi) -- Har bir qiymat atomar!\n);",
    "gotchas": "Bitta ustunga JSON saqlash texnik jihatdan mumkin bo'lsa-da, klassik relyatsion nazariya bo'yicha 1NF ni buzish hisoblanadi (agar u relyatsion ustun sifatida indekslanmasa).",
    "related": [
      "unnormalized-form",
      "2nf",
      "composite-attribute",
      "multivalued-attribute"
    ],
    "keywords": [
      "1nf",
      "birinchi normal forma",
      "atomar",
      "takrorlanuvchi",
      "normalizatsiya"
    ]
  },
  {
    "id": "2nf",
    "name": "2NF (Ikkinchi Normal Forma / Second Normal Form)",
    "category": "2-Hafta • Relatsion & Normalizatsiya",
    "week": 2,
    "summary": "Jadval 1NF da bo'lishi va barcha nokalit ustunlar Composite Primary Key ga to'liq bog'liq bo'lishi sharti.",
    "whatItDoes": "Qisman bog'liqlikni (Partial Dependency) yo'qotadi. Agar jadval Primary Key si 2 ta ustundan iborat bo'lsa (`A, B`), qolgan har bir ustun faqat `A` ga yoki faqat `B` ga emas, balki ikkalasiga birgalikda bog'liq bo'lishi shart.",
    "whenToUse": "Kompozit (ko'p ustunli) kalitga ega bo'lgan oraliq jadvallarni loyihalashda.",
    "syntax": "-- Qoida: Har bir nokalit ustun to'liq Primary Key ga bog'liq bo'lsin.\n-- Agar qisman bog'liqlik bo'lsa, o'sha ustun alohida o'z ota jadvaliga ko'chiriladi.",
    "combinations": "2NF ga erishish uchun qisman bog'langan atributlar yangi jadvalga o'tkazilib, ular o'rtasida FK o'rnatiladi.",
    "example": "-- 2NF ga keltirilgan Buyurtma Tarkibi jadvali:\nCREATE TABLE buyurtma_tarkibi (\n  buyurtma_id INT REFERENCES buyurtma(id),\n  mahsulot_id INT REFERENCES mahsulot(id),\n  miqdor INT NOT NULL,     -- Miqdor aynan shu buyurtmadagi shu mahsulotga tegishli (To'liq bog'liq!)\n  narx DECIMAL(10,2) NOT NULL, -- Xarid paytidagi narx\n  PRIMARY KEY (buyurtma_id, mahsulot_id)\n);",
    "gotchas": "Agar jadvalingiz Primary Key si bitta ustundan iborat bo'lsa (masalan shunchaki `id`), jadval 1NF da bo'lsa bas — u avtomatik ravishda 2NF da bo'ladi!",
    "related": [
      "1nf",
      "3nf",
      "partial-dependency"
    ],
    "keywords": [
      "2nf",
      "ikkinchi normal forma",
      "qisman bogliqlik",
      "full functional dependency"
    ]
  },
  {
    "id": "3nf",
    "name": "3NF (Uchinchi Normal Forma / Third Normal Form)",
    "category": "2-Hafta • Relatsion & Normalizatsiya",
    "week": 2,
    "summary": "Jadval 2NF da bo'lishi va birorta ham nokalit ustun boshqa nokalit ustunga bog'liq bo'lmasligi sharti.",
    "whatItDoes": "Tranzitiv bog'liqlikni (Transitive Dependency) yo'qotadi. 'Hech bir nokalit ustun boshqa nokalit ustun orqali Primary Key ga suyanmasin!'. Har bir ustun to'g'ridan-to'g'ri faqat Primary Key ga bog'liq bo'lishi shart.",
    "whenToUse": "Keng tarqalgan biznes jadvallarida (mijoz, xodim, buyurtma) ma'lumotlar dublikatini tozalashda. 95% real loyihalar 3NF darajasida loyihalanadi.",
    "syntax": "-- Oltin qoida: 'The Key, the Whole Key, and Nothing but the Key, so help me Codd!'\n-- (Har bir ustun Kalitga, to'liq Kalitga va faqatgina Kalitga bog'liq bo'lsin!)",
    "combinations": "Oraliq ustunlar alohida jadvallarga chiqarilib, o'rtada Foreign Key o'rnatiladi.",
    "example": "-- 3NF dagi toza struktura:\n-- 1. Shaharlar jadvali alohida\nCREATE TABLE shahar (\n  shahar_id INT PRIMARY KEY,\n  shahar_nomi VARCHAR(50),\n  viloyat VARCHAR(50)\n);\n-- 2. Mijozlar faqat shahar_id ni saqlaydi (viloyat nomi takrorlanmaydi!)\nCREATE TABLE mijoz (\n  mijoz_id INT PRIMARY KEY,\n  ism VARCHAR(50),\n  shahar_id INT REFERENCES shahar(shahar_id)\n);",
    "gotchas": "3NF ga keltirilmagan jadvalda yangilash anomaliyasi (Update Anomaly) sodir bo'ladi: Masalan, Chilonzor tumani nomi o'zgarsa, 50 000 ta mijoz qatorini birma-bir yangilashga to'g'ri keladi.",
    "related": [
      "2nf",
      "bcnf",
      "transitive-dependency"
    ],
    "keywords": [
      "3nf",
      "uchinchi normal forma",
      "tranzitiv",
      "codd",
      "normalizatsiya"
    ]
  },
  {
    "id": "bcnf",
    "name": "BCNF (Boyce-Codd Normal Form / 3.5NF)",
    "category": "2-Hafta • Relatsion & Normalizatsiya",
    "week": 2,
    "summary": "3NF ning kuchaytirilgan qat'iy ko'rinishi: Har qanday funksional bog'liqlikda (X → Y) determinant X albatta Nomzod Kalit bo'lishi shart.",
    "whatItDoes": "3NF da ruxsat berilgan kamyob anomaliyalarni (bir nechta kesishuvchi kompozit nomzod kalitlar bo'lgan holatlarni) ham yo'qotadi. Agar qandaydir ustun boshqa biror narsani aniqlayotgan bo'lsa, u albatta Super Key / Candidate Key bo'lishi shart!",
    "whenToUse": "Murakkab jadvallarda bir nechta bir-biriga bog'liq kompozit kalitlar mavjud bo'lganda.",
    "syntax": "-- BCNF qoidasi:\n-- Agar X -> Y mavjud bo'lsa va bu trivial bo'lmasa, X albatta Super Key bo'lishi shart!",
    "combinations": "BCNF ga keltirishda ba'zan funksional bog'liqlikni saqlash (Dependency Preservation) qurbon qilinishi mumkin.",
    "example": "-- Talaba, Fan, O'qituvchi munosabati:\n-- Har bir o'qituvchi faqat 1 ta fanni o'qitadi (Oqituvchi -> Fan).\n-- BCNF ga o'tkazish uchun jadval ikkiga bo'linadi:\n-- 1. Oqituvchi_Fan (oqituvchi_id PK, fan_id)\n-- 2. Talaba_Oqituvchi (talaba_id, oqituvchi_id, PRIMARY KEY (talaba_id, oqituvchi_id))",
    "gotchas": "Viva imtihonida eng sevimli savol: '3NF bilan BCNF ning farqi nima?'. 3NF da agar Y birlamchi kalitning bir bo'lagi (prime attribute) bo'lsa, X ning nomzod kalit bo'lishi shart emas edi. BCNF da esa istisno yo'q: X qat'iy ravishda Nomzod Kalit bo'lishi shart!",
    "related": [
      "3nf",
      "functional-dependency",
      "candidate-key",
      "lossless-decomposition"
    ],
    "keywords": [
      "bcnf",
      "boyce codd",
      "3.5nf",
      "determinant",
      "candidate key",
      "qat'iy normal forma"
    ]
  },
  {
    "id": "lossless-decomposition",
    "name": "LOSSLESS JOIN DECOMPOSITION (Yo'qotishsiz Bo'linish)",
    "category": "2-Hafta • Relatsion & Normalizatsiya",
    "week": 2,
    "summary": "Jadvalni normalizatsiya qilish uchun ikkiga bo'lganda, ularni qayta Natural Join qilganda hech qanday ma'lumot yo'qolmasligi yoki soxta qatorlar paydo bo'lmasligi sharti.",
    "whatItDoes": "Agar $R$ jadvali $R_1$ va $R_2$ ga bo'linsa, $R_1 \bowtie R_2 = R$ bo'lishi kafolatlanadi. Buning matematik sharti: $R_1 cap R_2 \to R_1$ yoki $R_1 cap R_2 \to R_2$ (ya'ni umumiy ustun kamida bitta jadvalda nomzod kalit bo'lishi shart).",
    "whenToUse": "Jadvallarni 2NF, 3NF va BCNF ga bo'lishda ma'lumotlar yaxlitligini matematik isbotlash uchun.",
    "syntax": "-- Lossless sharti:\n-- (R1 ∩ R2) -> R1  YOKI  (R1 ∩ R2) -> R2",
    "combinations": "Dependency Preservation (bog'liqliklarni saqlash) bilan birga tahlil qilinadi.",
    "example": "-- To'g'ri bo'linish (Lossless):\n-- Xodim_Bolim jadvali -> Xodim(xodim_id PK, ism, bolim_id) va Bolim(bolim_id PK, nom)\n-- Umumiy ustun 'bolim_id' Bolim jadvalining PK si bo'lgani uchun bo'linish yo'qotishsizdir!",
    "gotchas": "Agar jadvallarni o'rtada kalit bo'lmagan umumiy ustun (masalan shunchaki 'shahar') bo'yicha bo'lib yuborsangiz, ularni qayta JOIN qilganda minglab soxta (spurious) qatorlar paydo bo'lib, bazangiz alg'ov-dalg'ov bo'ladi!",
    "related": [
      "bcnf",
      "ra-natural-join",
      "functional-dependency"
    ],
    "keywords": [
      "lossless",
      "lossless join",
      "yoqotishsiz",
      "spurious tuples",
      "soxta qatorlar"
    ]
  },
  {
    "id": "create-table",
    "name": "CREATE TABLE (Jadval Yaratish)",
    "category": "3-Hafta • SQL DDL & DML Asoslari",
    "week": 3,
    "summary": "Ma'lumotlar bazasida yangi relyatsion jadval, uning ustunlari, ma'lumot turlari va cheklovlarini e'lon qilish.",
    "whatItDoes": "Diskda va katalog tizimida jadval strukturasini (sxemasini) hosil qiladi. Har bir ustunning nomini, ma'lumot turini (INT, VARCHAR, DATE) va butunlik qoidalarini (PRIMARY KEY, NOT NULL, CHECK, DEFAULT) belgilaydi.",
    "whenToUse": "Tizimning har qanday yangi subyekti (mijoz, tovar, to'lov) uchun ma'lumotlar ombori qurishda.",
    "syntax": "CREATE TABLE jadval_nomi (\n  ustun1 tur1 [cheklovlar],\n  ustun2 tur2 [cheklovlar],\n  CONSTRAINT cheklov_nomi CHEKLOV_TURI (ustun)\n);",
    "combinations": "PRIMARY KEY, FOREIGN KEY ... REFERENCES, UNIQUE, NOT NULL, CHECK, DEFAULT bilan qo'llaniladi.",
    "example": "CREATE TABLE mijozlar (\n  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n  fio VARCHAR(100) NOT NULL,\n  balans DECIMAL(12,2) DEFAULT 0.00 CHECK (balans >= 0),\n  royxat_sanasi TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);",
    "gotchas": "Jadvallarni yaratish ketma-ketligi o'ta muhim! Agar A jadval B ga tashqi kalit (FK) bilan bog'langan bo'lsa, avval B jadvalni yaratib olish shart, aks holda baza 'table does not exist' xatosini beradi.",
    "related": [
      "alter-table",
      "drop-table",
      "primary-key",
      "foreign-key"
    ],
    "keywords": [
      "create table",
      "jadval yaratish",
      "ddl",
      "schema",
      "ustunlar",
      "sql"
    ]
  },
  {
    "id": "alter-table",
    "name": "ALTER TABLE (Jadvalni O'zgartirish)",
    "category": "3-Hafta • SQL DDL & DML Asoslari",
    "week": 3,
    "summary": "Mavjud jadval tarkibiga yangi ustun qo'shish, ustunni o'chirish, turini o'zgartirish yoki yangi cheklovlar biriktirish.",
    "whatItDoes": "Mavjud jadvalni va undagi saqlangan ma'lumotlarni o'chirib yubormasdan, uning tuzilishini xavfsiz kengaytiradi yoki tahrirlaydi.",
    "whenToUse": "Tizim ishga tushgandan so'ng yangi talablar paydo bo'lganda (masalan, mijoz jadvaliga `telegram_id` ustuni qo'shish kerak bo'lganda).",
    "syntax": "-- Ustun qo'shish:\nALTER TABLE jadval ADD COLUMN yangi_ustun TUR;\n\n-- Cheklov qo'shish:\nALTER TABLE jadval ADD CONSTRAINT fk_nomi FOREIGN KEY (u) REFERENCES ota(id);\n\n-- Ustunni o'chirish:\nALTER TABLE jadval DROP COLUMN ustun_nomi;",
    "combinations": "ADD, DROP COLUMN, ALTER COLUMN / MODIFY, ADD CONSTRAINT, DROP CONSTRAINT, RENAME TO buyruqlari bilan ishlatiladi.",
    "example": "-- Mijoz jadvaliga telefon ustuni va UNIQUE cheklov qo'shish:\nALTER TABLE mijozlar ADD COLUMN telefon VARCHAR(20);\nALTER TABLE mijozlar ADD CONSTRAINT uq_mijoz_telefon UNIQUE (telefon);",
    "gotchas": "Agar jadvalda allaqachon ma'lumotlar bor bo'lsa va siz `NOT NULL` ustun qo'shmoqchi bo'lsangiz, albatta `DEFAULT` qiymat berishingiz shart! Aks holda eski qatorlar NULL bo'lib qoladi va xatolik beradi.",
    "related": [
      "create-table",
      "check-constraint",
      "foreign-key"
    ],
    "keywords": [
      "alter table",
      "ozgartirish",
      "ustun qoshish",
      "add column",
      "ddl"
    ]
  },
  {
    "id": "drop-table",
    "name": "DROP TABLE & CASCADE CONSTRAINTS (Jadvalni Butunlay Yo'q Qilish)",
    "category": "3-Hafta • SQL DDL & DML Asoslari",
    "week": 3,
    "summary": "Jadvalni uning barcha qatorlari, indekslari, triggerlari va sxemasi bilan birga diskdan butunlay o'chirib yuborish.",
    "whatItDoes": "DELETE yoki TRUNCATE dan farqli o'laroq, jadvalning o'zini ham yo'q qiladi. Baza katalogidan uning nomi o'chiriladi. Orqaga qaytarib (ROLLBACK qilib) bo'lmaydi!",
    "whenToUse": "Eskirgan vaqtincha jadvallarni yoki sinov loyihalarini butunlay tozalashda.",
    "syntax": "DROP TABLE jadval_nomi [CASCADE CONSTRAINTS];",
    "combinations": "Agar boshqa jadvallar ushbu jadvalga FK bilan ulanib turgan bo'lsa, `CASCADE CONSTRAINTS` (yoki PostgreSQL da `CASCADE`) qo'shilmasa, baza o'chirishga ruxsat bermaydi.",
    "example": "DROP TABLE IF EXISTS vaqtincha_hisobot CASCADE;",
    "gotchas": "Dahshatli buyruq! 'DROP TABLE' so'rovi tranzaksiyadan tashqarida ishlaydi (avtomatik COMMIT bo'ladi). Bir soniyada butun ma'lumotlar bazasini yo'q qilib qo'yishingiz mumkin. Har doim `IF EXISTS` bilan ishlating.",
    "related": [
      "truncate-table",
      "delete-from",
      "create-table"
    ],
    "keywords": [
      "drop table",
      "ochirish",
      "yoq qilish",
      "cascade constraints",
      "ddl"
    ]
  },
  {
    "id": "truncate-table",
    "name": "TRUNCATE TABLE (Jadvalni Chaqmoqdek Tez Bo'shatish)",
    "category": "3-Hafta • SQL DDL & DML Asoslari",
    "week": 3,
    "summary": "Jadval strukturasini saqlagan holda uning barcha qatorlarini DELETE ga nisbatan 100x tezroq tozalash.",
    "whatItDoes": "Har bir qatorni birma-bir o'chirib tranzaksiya logiga (WAL) yozib o'tirmaydi, balki to'g'ridan-to'g'ri ma'lumotlar saqlangan xotira sahifalarini (data pages) bo'shatadi va avtomatik ID hisoblagichini (Identity/Sequence) boshlang'ich 1 ga tushiradi (Reset).",
    "whenToUse": "Katta hajmli log jadvallarini, kesh jadvallarini yoki test ma'lumotlarini har kuni tunda tozalashda.",
    "syntax": "TRUNCATE TABLE jadval_nomi [RESTART IDENTITY];",
    "combinations": "DDL buyrug'i hisoblanadi. Triggerlarni (ON DELETE) ishga tushirmaydi.",
    "example": "TRUNCATE TABLE sessiyalar RESTART IDENTITY;",
    "gotchas": "TRUNCATE buyrug'ida `WHERE` shartini yozib bo'lmaydi! U har doim barcha qatorlarni yo'q qiladi. Agar faqat ba'zi qatorlarni o'chirish kerak bo'lsa, `DELETE FROM ... WHERE` ishlatilishi shart.",
    "related": [
      "delete-from",
      "drop-table"
    ],
    "keywords": [
      "truncate",
      "truncate table",
      "tez tozalash",
      "reset identity",
      "ddl"
    ]
  },
  {
    "id": "insert-into",
    "name": "INSERT INTO (Yangi Qator Qo'shish)",
    "category": "3-Hafta • SQL DDL & DML Asoslari",
    "week": 3,
    "summary": "Jadvalga yangi ma'lumot qatorlarini kiritish (DML buyrug'i).",
    "whatItDoes": "Jadvalga bitta yoki birdaniga bir nechta qatorlarni yozadi. Shuningdek boshqa jadvaldan qidirib topilgan natijalarni to'g'ridan-to'g'ri ko'chirib o'tkazish (`INSERT INTO ... SELECT`) imkoniyatiga ega.",
    "whenToUse": "Yangi foydalanuvchi ro'yxatdan o'tganda, yangi buyurtma berilganda, to'lov amalga oshirilganda.",
    "syntax": "-- Aniq ustunlar ko'rsatilgan xavfsiz usul:\nINSERT INTO jadval (u1, u2) VALUES (qiymat1, qiymat2);\n\n-- Bir nechta qator kiritish (Batch):\nINSERT INTO jadval (u1, u2) VALUES (q1, q2), (q3, q4);",
    "combinations": "RETURNING id (PostgreSQL) yordamida yangi yaratilgan ID ni darhol qaytarib olish mumkin.",
    "example": "INSERT INTO foydalanuvchilar (ism, email, balans)\nVALUES ('Anvar', 'anvar@example.com', 50000.00)\nRETURNING id, royxat_sanasi;",
    "gotchas": "Hech qachon ustun nomlarini yozmasdan shunchaki `INSERT INTO jadval VALUES (...)` qilmang! Kelajakda jadvalga yangi ustun qo'shilsa yoki ustunlar o'rni almashsa, kodingiz qulab tushadi.",
    "related": [
      "update-set",
      "delete-from",
      "select-from"
    ],
    "keywords": [
      "insert",
      "insert into",
      "yozuv kiritish",
      "values",
      "dml"
    ]
  },
  {
    "id": "update-set",
    "name": "UPDATE ... SET (Ma'lumotlarni Yangilash)",
    "category": "3-Hafta • SQL DDL & DML Asoslari",
    "week": 3,
    "summary": "Jadvaldagi mavjud qatorlarning ustun qiymatlarini o'zgartirish va yangilash.",
    "whatItDoes": "WHERE shartiga mos keladigan barcha qatorlardagi ko'rsatilgan ustunlarni yangi qiymatlar bilan almashtiradi.",
    "whenToUse": "Mijoz parolini yangilaganda, mahsulot narxi oshganda yoki buyurtma holati 'Yetkazildi' ga o'zgarganda.",
    "syntax": "UPDATE jadval_nomi\nSET ustun1 = yangi_qiymat1, ustun2 = yangi_qiymat2\nWHERE shart;",
    "combinations": "Matematik amallar bilan ishlatish mumkin: `SET balans = balans + 10000`.",
    "example": "-- 42-buyurtmaning holatini o'zgartirish:\nUPDATE buyurtmalar\nSET holat = 'yetkazildi', yangilangan_vaqt = CURRENT_TIMESTAMP\nWHERE buyurtma_id = 42;",
    "gotchas": "Eng mashhur fojia: WHERE shartini yozishni unutmang! Agar `UPDATE xodimlar SET oylik = 0;` deb yozib yuborsangiz, kompaniyadagi barcha 10 000 ta xodimning oyligi 0 bo'lib qoladi!",
    "related": [
      "delete-from",
      "insert-into",
      "where-clause"
    ],
    "keywords": [
      "update",
      "set",
      "yangilash",
      "tahrirlash",
      "where",
      "dml"
    ]
  },
  {
    "id": "delete-from",
    "name": "DELETE FROM (Qatorlarni O'chirish)",
    "category": "3-Hafta • SQL DDL & DML Asoslari",
    "week": 3,
    "summary": "Jadvaldan ko'rsatilgan shartga mos keluvchi qatorlarni xavfsiz o'chirish.",
    "whatItDoes": "Jadval strukturasiga tegmasdan, faqat WHERE filtriga tushgan qatorlarni o'chiradi. Har bir o'chirish tranzaksiya logiga yoziladi, shuning uchun `ROLLBACK` bilan qaytarib olish mumkin.",
    "whenToUse": "Bekor qilingan buyurtmalarni yoki muddati o'tgan xabarlarni o'chirishda.",
    "syntax": "DELETE FROM jadval_nomi WHERE shart;",
    "combinations": "Subquery bilan ishlatish mumkin: `WHERE mijoz_id IN (SELECT id FROM ...)`.",
    "example": "DELETE FROM savat_bandlari\nWHERE savat_id = 105 AND tovar_id = 12;",
    "gotchas": "Aynan UPDATE kabi: WHERE shartisiz yozilgan `DELETE FROM jadval;` jadvaldagi BARCHA qatorlarni o'chirib tashlaydi!",
    "related": [
      "truncate-table",
      "update-set",
      "where-clause"
    ],
    "keywords": [
      "delete",
      "delete from",
      "ochirish",
      "where",
      "dml"
    ]
  },
  {
    "id": "select-from",
    "name": "SELECT ... FROM (So'rov va Proyeksiya)",
    "category": "3-Hafta • SQL DDL & DML Asoslari",
    "week": 3,
    "summary": "Bazada saqlangan ma'lumotlarni o'qish, hisob-kitob qilish va ekranga chiqarishning asosiy buyrug'i.",
    "whatItDoes": "FROM qaysi jadvaldan olishni, SELECT esa aynan qaysi ustunlar yoki hisoblangan ifodalarni ko'rsatishni belgilaydi. Bazadagi ma'lumotlarni o'zgartirmaydi (Read-Only).",
    "whenToUse": "Foydalanuvchiga ro'yxatlarni, hisobotlarni, statistikani ko'rsatishda (eng ko'p ishlatiladigan SQL buyrug'i).",
    "syntax": "SELECT ustun1, ustun2 AS taxallus FROM jadval_nomi;",
    "combinations": "WHERE, GROUP BY, HAVING, ORDER BY, LIMIT kabi barcha SQL qismlarining boshlang'ich nuqtasi.",
    "example": "SELECT id, nomi, narx, narx * 0.88 AS chegirmali_narx\nFROM mahsulotlar;",
    "gotchas": "Hech qachon ishlab chiqarishda (Production) `SELECT *` yozmang! Bu tarmoqni keraksiz megabaytlar bilan to'ldiradi va B-Tree Covering Index optimizatsiyasini o'ldiradi. Faqat kerakli ustunlarni sanab yozing.",
    "related": [
      "where-clause",
      "order-by",
      "distinct-clause",
      "ra-project"
    ],
    "keywords": [
      "select",
      "from",
      "sorov",
      "proyeksiya",
      "dql",
      "ustunlar"
    ]
  },
  {
    "id": "where-clause",
    "name": "WHERE (Qatorlarni Filtrlash)",
    "category": "3-Hafta • SQL DDL & DML Asoslari",
    "week": 3,
    "summary": "SELECT, UPDATE yoki DELETE buyruqlarida faqat ko'rsatilgan mantiqiy shartga mos keluvchi qatorlar ustida ishlash.",
    "whatItDoes": "Har bir qatorni tekshiradi. Shart natijasi `TRUE` bo'lgan qatorlargina tanlab olinadi. `FALSE` yoki `UNKNOWN` (NULL bo'lsa) bo'lgan qatorlar chetlashtiriladi.",
    "whenToUse": "Keraksiz millionlab qatorlarni tashlab, faqat kerakli qatorlarni tezkor qidirishda.",
    "syntax": "SELECT * FROM jadval WHERE ustun = qiymat AND shart2 OR NOT shart3;",
    "combinations": "Taqqoslagichlar (`=, <>, !=, <, >, <=, >=`), `BETWEEN`, `IN`, `LIKE`, `IS NULL` va mantiqiy bog'lovchilar (`AND, OR, NOT`) bilan ishlaydi.",
    "example": "SELECT fio, oylik FROM xodimlar\nWHERE bolim_id = 10 AND (oylik > 5000000 OR lavozim = 'Rahbar');",
    "gotchas": "WHERE ichida agregat funksiyalarni (`SUM, AVG, COUNT`) to'g'ridan-to'g'ri ishlatib bo'lmaydi! Masalan `WHERE COUNT(*) > 5` xato beradi. Guruhlarni filtrlash uchun `HAVING` kerak.",
    "related": [
      "having-clause",
      "like-operator",
      "between-operator",
      "in-operator",
      "is-null"
    ],
    "keywords": [
      "where",
      "filtr",
      "shart",
      "and",
      "or",
      "not",
      "taqqoslash"
    ]
  },
  {
    "id": "distinct-clause",
    "name": "DISTINCT (Takrorlanuvchi Nusxalarni Tozalash)",
    "category": "3-Hafta • SQL DDL & DML Asoslari",
    "week": 3,
    "summary": "Natijalar ro'yxatidagi bir xil bo'lgan dublikat qatorlarni olib tashlab, faqat unikal nusxalarni qoldirish.",
    "whatItDoes": "Barcha ko'rsatilgan ustunlar kombinatsiyasi bo'yicha saralaydi (yoki xotirada Hash Table quradi) va aynan bir xil qatorlarni bittaga qisqartiradi.",
    "whenToUse": "Hayotiy misol: 'Bizning tizimimizda qaysi shaharlardan xaridorlar bor?'. Shahar nomlari 100 000 marta takrorlanmasligi uchun `DISTINCT shahar` deb yoziladi.",
    "syntax": "SELECT DISTINCT ustun1, ustun2 FROM jadval;",
    "combinations": "`COUNT(DISTINCT ustun)` ko'rinishida unikal elementlar sonini sanashda keng qo'llaniladi.",
    "example": "-- Mijozlarimiz buyurtma bergan unikal shaharlar:\nSELECT DISTINCT viloyat, shahar FROM manzillar ORDER BY viloyat;",
    "gotchas": "DISTINCT butun qatorga taalluqli bo'ladi! Agar `SELECT DISTINCT shahar, ism` deb yozsangiz, baza 'shahar + ism' juftligi bo'yicha unikal qiladi, faqat shahar bo'yicha emas.",
    "related": [
      "select-from",
      "count-func",
      "ra-project"
    ],
    "keywords": [
      "distinct",
      "takrorlanmas",
      "unikal",
      "dublikat yoqotish",
      "select distinct"
    ]
  },
  {
    "id": "order-by",
    "name": "ORDER BY (Natijalarni Tartiblash: ASC, DESC)",
    "category": "3-Hafta • SQL DDL & DML Asoslari",
    "week": 3,
    "summary": "So'rov natijalarini ko'rsatilgan ustunlar bo'yicha o'sish (ASC) yoki kamayish (DESC) tartibida saralash.",
    "whatItDoes": "Relyatsion ma'lumotlar bazasida qatorlar xotirada betartib saqlanadi. Agar ORDER BY yozmasangiz, natijalar tartibi kafolatlanmaydi. ORDER BY so'rovning eng oxirgi bosqichida ishga tushadi.",
    "whenToUse": "Eng so'nggi yangiliklarni (sana bo'yicha kamayuvchi), eng arzon mahsulotlarni (narx bo'yicha o'suvchi) yoki alifbo tartibida saralashda.",
    "syntax": "SELECT * FROM jadval ORDER BY ustun1 ASC, ustun2 DESC [NULLS FIRST | NULLS LAST];",
    "combinations": "`NULLS LAST` yoki `NULLS FIRST` orqali bo'sh (NULL) qiymatlar ro'yxatning boshida yoki oxirida turishini nazorat qilish mumkin.",
    "example": "-- Narxi eng qimmat 10 ta tovar:\nSELECT nomi, narx\nFROM tovarlar\nORDER BY narx DESC NULLS LAST\nLIMIT 10;",
    "gotchas": "Indekslanmagan katta jadvallarda ORDER BY juda og'ir 'External Sort' (diskka yozib saralash) ga sabab bo'lishi mumkin. Tez-tez saralanadigan ustunlarga B-Tree indeks qo'yish kerak.",
    "related": [
      "limit-offset",
      "select-from",
      "create-index"
    ],
    "keywords": [
      "order by",
      "saralash",
      "tartiblash",
      "asc",
      "desc",
      "nulls last"
    ]
  },
  {
    "id": "limit-offset",
    "name": "LIMIT & OFFSET (Sahifalash / Pagination)",
    "category": "3-Hafta • SQL DDL & DML Asoslari",
    "week": 3,
    "summary": "Natijaviy ro'yxatdan faqat ma'lum sondagi qatorlarni qirqib olish (Sahifalab ko'rsatish).",
    "whatItDoes": "LIMIT — qancha qator olishni belgilaydi (`LIMIT 20`). OFFSET — boshidan nechta qatorni tashlab yuborishni (sakrab o'tishni) belgilaydi (`OFFSET 40` -> 3-sahifa). ANSI SQL da `FETCH FIRST n ROWS ONLY` deb yoziladi.",
    "whenToUse": "Web saytlarda va mobil ilovalarda cheksiz scroll yoki sahifalar (1-sahifa, 2-sahifa...) yaratishda.",
    "syntax": "-- PostgreSQL / MySQL / SQLite:\nSELECT * FROM mahsulotlar ORDER BY id LIMIT 20 OFFSET 40;\n\n-- ANSI SQL / Oracle 12c+:\nOFFSET 40 ROWS FETCH NEXT 20 ROWS ONLY;",
    "combinations": "Har doim `ORDER BY` bilan birga ishlatilishi shart! Aks holda har safar tasodifiy qatorlar chiqib sahifalash buziladi.",
    "example": "-- 2-sahifadagi 10 ta buyurtma (har sahifada 10 tadan):\nSELECT * FROM buyurtmalar\nORDER BY buyurtma_vaqti DESC\nLIMIT 10 OFFSET 10;",
    "gotchas": "Katta OFFSET (masalan `OFFSET 1000000`) juda sekin ishlaydi! Chunki baza oldingi 1 million qatorni o'qib, keyin tashlab yuborishga majbur bo'ladi. Millionlab qatorlar uchun 'Keyset Pagination' (`WHERE id > last_id LIMIT 20`) ishlatiladi.",
    "related": [
      "order-by",
      "select-from"
    ],
    "keywords": [
      "limit",
      "offset",
      "pagination",
      "sahifalash",
      "fetch first"
    ]
  },
  {
    "id": "like-operator",
    "name": "LIKE & ILIKE (Shablon Bo'yicha Qidiruv: %, _)",
    "category": "3-Hafta • SQL DDL & DML Asoslari",
    "week": 3,
    "summary": "Matnli ustunlar ichidan qisman moslik yoki shablon asosida qidirish operatori.",
    "whatItDoes": "`%` belgisi — ixtiyoriy sondagi (0 ta yoki undan ko'p) ixtiyoriy belgilarni bildiradi. `_` (pastki chiziq) — aynan 1 ta ixtiyoriy belgini bildiradi. `ILIKE` — katta-kichik harfni ajratmaydigan (Case-Insensitive) qidiruv.",
    "whenToUse": "Qidiruv qatoriga foydalanuvchi so'z yozganda: 'Ismi Al... bilan boshlanuvchilar' yoki 'Gmail pochtasiga ega bo'lganlar'.",
    "syntax": "-- 'Ali' bilan boshlanadiganlar:\nWHERE ism LIKE 'Ali%'\n\n-- Ichida 'phone' so'zi borlar:\nWHERE mahsulot_nomi ILIKE '%phone%'\n\n-- Aniq 5 ta harfdan iborat bo'lganlar:\nWHERE kod LIKE '_____'",
    "combinations": "`NOT LIKE` orqali mos kelmaydiganlarni topish mumkin. ESCAPE orqali `%` ning o'zini qidirish mumkin.",
    "example": "-- O'zbekiston telefon raqamlarini topish:\nSELECT fio, telefon FROM mijozlar\nWHERE telefon LIKE '+99890%' OR telefon LIKE '+99891%';",
    "gotchas": "Indeks tuzog'i! Agar qidiruvni foiz bilan boshlasangiz (`WHERE ism LIKE '%bek'`), B-Tree indeks umuman ishlamaydi va Full Table Scan (million qatorni ko'rib chiqish) yuz beradi! B-Tree faqat boshidan qidirganda (`'bek%'`) ishlaydi.",
    "related": [
      "where-clause",
      "upper-lower",
      "create-index"
    ],
    "keywords": [
      "like",
      "ilike",
      "shablon",
      "wildcard",
      "foiz",
      "qidiruv"
    ]
  },
  {
    "id": "between-operator",
    "name": "BETWEEN ... AND ... (Diapazon Bo'yicha Filtrlash)",
    "category": "3-Hafta • SQL DDL & DML Asoslari",
    "week": 3,
    "summary": "Qiymat berilgan minimal va maksimal chegaralar oralig'ida ekanligini qisqa va qulay tekshirish.",
    "whatItDoes": "`ustun >= min AND ustun <= max` ifodasining ixcham ekvivalenti. E'tibor bering: ikkala chegara qiymatlari ham oraliqqa kiradi (Inclusive).",
    "whenToUse": "Narxlar oralig'ini belgilashda (`BETWEEN 100000 AND 500000`), sanalar bo'yicha hisobot olishda yoki yosh chegaralarini tekshirishda.",
    "syntax": "WHERE narx BETWEEN 50000 AND 150000\nWHERE tugilgan_sana BETWEEN '2000-01-01' AND '2005-12-31'",
    "combinations": "`NOT BETWEEN` orqali oraliqqa kirmaydigan elementlarni topish mumkin.",
    "example": "-- 2024-yil yanvar oyidagi buyurtmalar:\nSELECT buyurtma_id, summa\nFROM buyurtmalar\nWHERE sana BETWEEN '2024-01-01' AND '2024-01-31';",
    "gotchas": "TIMESTAMP bilan ishlashda tuzoq! Agar ustunda soat-daqiqa bo'lsa (`2024-01-31 18:30`), `'2024-01-31'` deb yozsangiz, u `2024-01-31 00:00:00` deb qabul qilinadi va 31-yanvar kungi kunduzgi buyurtmalar qolib ketadi!",
    "related": [
      "where-clause",
      "in-operator"
    ],
    "keywords": [
      "between",
      "and",
      "diapazon",
      "oraliq",
      "chegara",
      "narx oraligi"
    ]
  },
  {
    "id": "in-operator",
    "name": "IN (...) & NOT IN (...) (To'plam / Ro'yxat Ichidan Qidirish)",
    "category": "3-Hafta • SQL DDL & DML Asoslari",
    "week": 3,
    "summary": "Ustun qiymati berilgan ro'yxatdagi qiymatlardan birortasiga tengligini tekshirish.",
    "whatItDoes": "Bir nechta `OR` shartlarini ixchamlashtiradi (`ustun = 'A' OR ustun = 'B' OR ustun = 'C' => ustun IN ('A', 'B', 'C')`). Shuningdek ichiga subquery qabul qila oladi.",
    "whenToUse": "Foydalanuvchi bir nechta filtrlarni tanlaganda (masalan: Status 'Yangi', 'Jarayonda' yoki 'Yetkazilmoqda' bo'lgan buyurtmalar).",
    "syntax": "-- Statik ro'yxat:\nWHERE status IN ('NEW', 'PROCESSING', 'DELIVERED')\n\n-- Dinamik subquery:\nWHERE bolim_id IN (SELECT id FROM bolimlar WHERE shahar = 'Toshkent')",
    "combinations": "`NOT IN (...)` ro'yxatda yo'q bo'lganlarni saralaydi.",
    "example": "SELECT fio, lavozim FROM xodimlar\nWHERE bolim_id IN (10, 20, 30);",
    "gotchas": "NOT IN va NULL tuzog'i! Agar `NOT IN` ro'yxati ichida bitta dona bo'lsa ham `NULL` qiymat uchrasa (masalan subquery natijasida), butun so'rov natijasi BO'SH (0 qator) bo'lib chiqadi! Har doim `NOT EXISTS` ishlatish xavfsizroq.",
    "related": [
      "where-clause",
      "between-operator",
      "exists-operator",
      "three-valued-logic"
    ],
    "keywords": [
      "in",
      "not in",
      "royxat",
      "toplam",
      "subquery in",
      "where in"
    ]
  },
  {
    "id": "is-null",
    "name": "IS NULL & IS NOT NULL (Bo'sh Qiymatlarni Tekshirish)",
    "category": "3-Hafta • SQL DDL & DML Asoslari",
    "week": 3,
    "summary": "Ustunda ma'lumot yo'qligini (noma'lum / bo'sh ekanligini) tekshirishning yagona to'g'ri usuli.",
    "whatItDoes": "NULL bu nol (0) yoki bo'sh matn ('') emas. NULL — bu ma'lumotning yo'qligi yoki noma'lumligidir. Shu sababli uni tenglik bilan (`ustun = NULL`) tekshirib bo'lmaydi! Faqat `IS NULL` yoki `IS NOT NULL` deb yoziladi.",
    "whenToUse": "Hali telefon raqamini kiritmagan mijozlarni yoki hali yopilmagan (tugash sanasi yo'q) ochiq loyihalarni topishda.",
    "syntax": "WHERE telefon IS NULL;\nWHERE yopilgan_sana IS NOT NULL;",
    "combinations": "COALESCE, NVL yoki IFNULL funksiyalari bilan birgalikda NULL qiymatlarni standart qiymatga almashtirishda qo'llaniladi.",
    "example": "-- Boshliqlari bo'lmagan xodimlarni (Top Managerlarni) topish:\nSELECT fio, lavozim FROM xodimlar\nWHERE rahbar_id IS NULL;",
    "gotchas": "Klassik xato: `WHERE rahbar_id = NULL` deb yozish! SQL uch qiymatli mantiqqa ega bo'lgani uchun `= NULL` har doim `UNKNOWN` qaytaradi va birorta ham qator chiqmaydi!",
    "related": [
      "three-valued-logic",
      "coalesce",
      "nvl"
    ],
    "keywords": [
      "is null",
      "is not null",
      "bosh qiymat",
      "nomanlum",
      "null tekshirish"
    ]
  },
  {
    "id": "three-valued-logic",
    "name": "THREE-VALUED LOGIC (Uch Qiymatli Mantiq: TRUE, FALSE, UNKNOWN)",
    "category": "3-Hafta • SQL DDL & DML Asoslari",
    "week": 3,
    "summary": "SQL da mantiqiy ifodalar faqat Rost yoki Yolg'on emas, balki Noma'lum (UNKNOWN) ham bo'lishi mumkinligi qoidasi.",
    "whatItDoes": "NULL bilan qilingan har qanday arifmetik yoki mantiqiy amal (`NULL = 5`, `NULL + 10`, `NULL = NULL`) har doim `NULL` yoki `UNKNOWN` qaytaradi. `WHERE` sharti esa faqat qat'iy `TRUE` bo'lgan qatorlarnigina o'tkazadi.",
    "whenToUse": "Murakkab shartli filtrlarda NULL qiymatlar kutilmagan xatoliklarga olib kelmasligi uchun hisobga olinadi.",
    "syntax": "-- Mantiq jadvali:\n-- TRUE AND UNKNOWN => UNKNOWN\n-- FALSE AND UNKNOWN => FALSE\n-- TRUE OR UNKNOWN => TRUE\n-- NOT UNKNOWN => UNKNOWN",
    "combinations": "`IS NULL` va `COALESCE` orqali UNKNOWN holatini oldini olish mumkin.",
    "example": "-- Agar bonus ustuni NULL bo'lsa:\nSELECT fio, oylik + COALESCE(bonus, 0) AS jami_daromad\nFROM xodimlar;\n-- Agar COALESCE ishlatilmasa, oylik + NULL => NULL bo'lib qoladi!",
    "gotchas": "NULL bilan hech narsani tenglashtirib bo'lmaydi! Hatto `NULL = NULL` ham FALSE/UNKNOWN qaytaradi!",
    "related": [
      "is-null",
      "coalesce",
      "where-clause"
    ],
    "keywords": [
      "three valued logic",
      "uch qiymatli mantiq",
      "unknown",
      "null mantiq",
      "haqiqat jadvali"
    ]
  },
  {
    "id": "sql-datatypes",
    "name": "SQL DATA TYPES (Ma'lumot Turlari: INT, VARCHAR, NUMERIC, TIMESTAMP)",
    "category": "3-Hafta • SQL DDL & DML Asoslari",
    "week": 3,
    "summary": "Ustunda qanday turdagi qiymat saqlanishini va u xotiradan qancha joy olishini belgilovchi turlar.",
    "whatItDoes": "1. Sonli: `INT` (4 bayt), `BIGINT` (8 bayt, ID lar uchun), `DECIMAL(12,2)` (pul va moliya uchun aniq kasr son).\n2. Matnli: `VARCHAR(n)` (o'zgaruvchan uzunlik), `CHAR(n)` (qat'iy uzunlik), `TEXT` (cheksiz matn).\n3. Sana: `DATE` (faqat sana), `TIME` (faqat vaqt), `TIMESTAMP` (sana + soat, daqiqa, soniya).\n4. Mantiqiy: `BOOLEAN` (TRUE / FALSE).",
    "whenToUse": "Jadval yaratishda to'g'ri va tejamkor ma'lumot turini tanlash xotirani 5x tejaydi va so'rovlarni tezlashtiradi.",
    "syntax": "id BIGINT,\nism VARCHAR(50),\nbalans DECIMAL(15,2),\nfaolmi BOOLEAN DEFAULT TRUE,\nyaratilgan_sana TIMESTAMP DEFAULT CURRENT_TIMESTAMP",
    "combinations": "Har bir ma'lumot turi o'ziga mos cheklovlar (`CHECK`, `DEFAULT`) bilan birga beriladi.",
    "example": "CREATE TABLE tolovlar (\n  tolov_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n  summa DECIMAL(12,2) NOT NULL CHECK (summa > 0),\n  valyuta CHAR(3) DEFAULT 'UZS',\n  tolangan_vaqt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP\n);",
    "gotchas": "Hech qachon pul mablag'lari (balans, narx) uchun `FLOAT` yoki `DOUBLE` ishlatmang! Chunki ular taqribiy (binary floating point) hisoblaydi va 0.1 + 0.2 = 0.30000000000000004 bo'lib hisoblar buziladi. Pul uchun faqat `DECIMAL` yoki `NUMERIC` kerak!",
    "related": [
      "create-table",
      "domain-integrity"
    ],
    "keywords": [
      "data types",
      "int",
      "bigint",
      "varchar",
      "decimal",
      "timestamp",
      "malumot turlari"
    ]
  },
  {
    "id": "check-constraint",
    "name": "CHECK CONSTRAINT (Shaxsiy Qoida Cheklovi)",
    "category": "3-Hafta • SQL DDL & DML Asoslari",
    "week": 3,
    "summary": "Ustundagi ma'lumotlar faqat dasturchi belgilab bergan maxsus mantiqiy qoidaga bo'ysunishini ta'minlovchi filtr.",
    "whatItDoes": "Har safar INSERT yoki UPDATE qilinganda shartni tekshiradi. Agar kiritilayotgan ma'lumot shartni buzsa, baza tranzaksiyani bekor qiladi va xatolik tashlaydi.",
    "whenToUse": "Foydalanuvchi yoshi manfiy bo'lmasligi (`yosh >= 0`), chegirma 100% dan oshmasligi (`chegirma <= 100`) yoki tugash sanasi boshlanish sanasidan keyin bo'lishi (`tugash_sana > boshlash_sana`).",
    "syntax": "-- Ustun darajasida:\nyosh INT CHECK (yosh >= 18 AND yosh <= 100)\n\n-- Jadval darajasida (ko'p ustunli tekshiruv):\nCONSTRAINT chk_sanalar CHECK (tugash_sanasi >= boshlanish_sanasi)",
    "combinations": "RegEx (muntazam ifodalar) bilan birga telefon formati yoki email formatini tekshirish mumkin.",
    "example": "CREATE TABLE xodimlar (\n  id INT PRIMARY KEY,\n  fio VARCHAR(100),\n  oylik DECIMAL(12,2) CHECK (oylik >= 1500000),\n  jins CHAR(1) CHECK (jins IN ('M', 'F'))\n);",
    "gotchas": "CHECK sharti ichida boshqa jadvallardan subquery qilib tekshirib bo'lmaydi! Agar boshqa jadval bilan bog'liq qoida kerak bo'lsa, `TRIGGER` yozishga to'g'ri keladi.",
    "related": [
      "domain-integrity",
      "create-table",
      "default-constraint"
    ],
    "keywords": [
      "check",
      "check constraint",
      "cheklov",
      "mantiqiy qoida",
      "validatsiya"
    ]
  },
  {
    "id": "default-constraint",
    "name": "DEFAULT CONSTRAINT (Standart Avtomatik Qiymat)",
    "category": "3-Hafta • SQL DDL & DML Asoslari",
    "week": 3,
    "summary": "Agar INSERT paytida ustun uchun hech qanday qiymat berilmasa, avtomatik ravishda qo'yiladigan boshlang'ich qiymat.",
    "whatItDoes": "Ustun bo'sh (NULL) qolib ketishining oldini oladi. Dasturchi ko'rsatmagan taqdirda ham standart holatni (`'pending'`, `0`, `CURRENT_TIMESTAMP`) yozib qo'yadi.",
    "whenToUse": "Yangi ro'yxatdan o'tgan foydalanuvchining hisobini avtomatik `balans = 0` qilish yoki `status = 'ACTIVE'` qilib belgilashda.",
    "syntax": "ustun_nomi TUR DEFAULT standart_qiymat",
    "combinations": "`NOT NULL` bilan birga ishlatilganda, ustunning hech qachon NULL bo'lmasligini 100% kafolatlaydi.",
    "example": "CREATE TABLE buyurtmalar (\n  id INT PRIMARY KEY,\n  holat VARCHAR(20) DEFAULT 'kutilmoqda',\n  yaratilgan_vaqt TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);",
    "gotchas": "Agar dasturchi atayin `INSERT INTO ... VALUES (id, NULL)` deb qo'lda `NULL` bersa, DEFAULT ishga tushmaydi! DEFAULT faqat ustun umuman ko'rsatilmaganda ishlaydi.",
    "related": [
      "create-table",
      "check-constraint",
      "sql-datatypes"
    ],
    "keywords": [
      "default",
      "standart qiymat",
      "avtomatik",
      "current_timestamp",
      "ddl"
    ]
  },
  {
    "id": "unique-constraint",
    "name": "UNIQUE CONSTRAINT (Noyoblik Cheklovi)",
    "category": "3-Hafta • SQL DDL & DML Asoslari",
    "week": 3,
    "summary": "Ustundagi barcha qiymatlar bir-birini takrorlamasligini (unikal bo'lishini) ta'minlovchi cheklov.",
    "whatItDoes": "Primary Key ga o'xshaydi, lekin undan farqli o'laroq jadvalda bir nechta UNIQUE ustun bo'lishi mumkin va u NULL qiymat qabul qila oladi. Baza orqa fonda tezkor B-Tree Unique Index yaratadi.",
    "whenToUse": "Email, Telefon raqam, Pasport seriya, Foydalanuvchi logini (Username) kabi takrorlanmasligi shart bo'lgan maydonlarda.",
    "syntax": "-- Ustun darajasida:\nemail VARCHAR(100) UNIQUE\n\n-- Jadval darajasida:\nCONSTRAINT uq_pasport UNIQUE (seriya, raqam)",
    "combinations": "Alternate Key larni yaratishning asosiy mexanizmi hisoblanadi.",
    "example": "CREATE TABLE haydovchilar (\n  id INT PRIMARY KEY,\n  fio VARCHAR(100),\n  guvohnoma_raqami VARCHAR(20) UNIQUE NOT NULL\n);",
    "gotchas": "Standart SQL da (PostgreSQL, Oracle) UNIQUE ustun bir nechta NULL qiymat qabul qilishi mumkin (chunki NULL != NULL). Agar NULL umuman bo'lmasin desangiz, albatta `UNIQUE NOT NULL` deb yozing!",
    "related": [
      "primary-key",
      "alternate-key",
      "create-table"
    ],
    "keywords": [
      "unique",
      "noyob",
      "takrorlanmas",
      "unikal",
      "alternate key"
    ]
  },
  {
    "id": "sql-sequence",
    "name": "SEQUENCE & IDENTITY (Avtomatik O'suvchi Raqamlar)",
    "category": "3-Hafta • SQL DDL & DML Asoslari",
    "week": 3,
    "summary": "Jadvaldagi Primary Key ID larini avtomatik ravishda 1, 2, 3... qilib oshirib boruvchi mustaqil raqam generatori.",
    "whatItDoes": "Ko'p foydalanuvchili tizimlarda bir vaqtning o'zida yuzlab buyurtmalar kelsa ham, ularga hech qachon bir xil ID bermaydi (Thread-Safe). Standart SQL da `GENERATED ALWAYS AS IDENTITY`, PostgreSQL da `SERIAL`, Oracle da `SEQUENCE` deyiladi.",
    "whenToUse": "Barcha Surrogate Primary Key ustunlarida avtomatik ID berish uchun.",
    "syntax": "-- ANSI SQL standarti:\nid INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY\n\n-- Mustaqil SEQUENCE obyekti:\nCREATE SEQUENCE mijoz_seq START WITH 1 INCREMENT BY 1;\nSELECT nextval('mijoz_seq');",
    "combinations": "`nextval('ketma_ketlik_nomi')` va `currval('ketma_ketlik_nomi')` funksiyalari bilan boshqariladi.",
    "example": "CREATE TABLE xabarlar (\n  id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,\n  matn TEXT NOT NULL\n);",
    "gotchas": "Tranzaksiya bekor qilinsa (ROLLBACK), Sequence generatsiya qilgan ID orqaga qaytmaydi! Shu sababli ID larda teshiklar (1, 2, 5, 6...) paydo bo'lishi tabiiy holat hisoblanadi.",
    "related": [
      "surrogate-key",
      "primary-key",
      "create-table"
    ],
    "keywords": [
      "sequence",
      "identity",
      "serial",
      "autoincrement",
      "generator",
      "nextval"
    ]
  },
  {
    "id": "inner-join",
    "name": "INNER JOIN (Ichki Bog'lash / Faqat Jufti Borlar)",
    "category": "4-Hafta • JOIN & Funksiyalar",
    "week": 4,
    "summary": "Ikkala jadvalda ham o'zaro mos keluvchi (jufti bor) qatorlarnigina birlashtirib chiqaruvchi eng asosiy JOIN turi.",
    "whatItDoes": "ON shartiga ko'ra ikkala jadval ustunlarini taqqoslaydi. Agar A jadvaldagi qatorga B jadvalda mos qator topilmasa (yoki aksincha), u qator natijaga kiritilmaydi. Matematik kesishmaga o'xshaydi.",
    "whenToUse": "Hayotiy misol: Faqat bo'limi aniq tayinlangan xodimlarni va faqat xodimlari bor bo'limlarni ko'rishda.",
    "syntax": "SELECT a.ustun, b.ustun\nFROM jadvalA a\nINNER JOIN jadvalB b ON a.kalit = b.tashqi_kalit;",
    "combinations": "Bir vaqtning o'zida 3-4 ta jadvalni ketma-ket ulash mumkin: `FROM t1 JOIN t2 ON ... JOIN t3 ON ...`.",
    "example": "SELECT e.ename, d.dname\nFROM emp e\nINNER JOIN dept d ON e.deptno = d.deptno;",
    "gotchas": "Agar bo'limda hali birorta ham xodim ishlamasa yoki yangi xodim hali hech qaysi bo'limga biriktirilmagan bo'lsa, ular INNER JOIN natijasida CHIQMAY QOLADI! Ularni ham ko'rish uchun `LEFT JOIN` kerak.",
    "related": [
      "left-outer-join",
      "right-outer-join",
      "full-outer-join",
      "join-using"
    ],
    "keywords": [
      "inner join",
      "join",
      "ichki boglash",
      "on",
      "kesishma"
    ]
  },
  {
    "id": "left-outer-join",
    "name": "LEFT OUTER JOIN (Chapdan Bog'lash)",
    "category": "4-Hafta • JOIN & Funksiyalar",
    "week": 4,
    "summary": "Chapdagi jadvalning BARCHA qatorlarini to'liq saqlab, o'ngdagi jadvaldan faqat mos keluvchilarini birlashtirish.",
    "whatItDoes": "Agar chap jadvaldagi qatorga o'ng tomondan juft topilmasa, o'ng jadvalning ustunlari `NULL` qiymat bilan to'ldiriladi. Chapdagi birorta ham qator yo'qolib ketmaydi.",
    "whenToUse": "Hayotiy misol: 'Barcha mijozlarimizni va ularning buyurtmalarini chiqaring. Hali umuman buyurtma bermagan yangi mijozlar ham ro'yxatda qolsin!'.",
    "syntax": "SELECT a.ustun, b.ustun\nFROM chap_jadval a\nLEFT JOIN ong_jadval b ON a.id = b.ota_id;",
    "combinations": "`WHERE b.id IS NULL` qo'shilsa, 'faqat o'ng tomonda jufti bo'lmagan' (masalan: birorta ham buyurtma bermagan mijozlar) topiladi (Anti-Join).",
    "example": "-- Barcha bo'limlar va ularning xodimlari (hatto bo'sh bo'limlar ham chiqadi):\nSELECT d.dname, e.ename\nFROM dept d\nLEFT JOIN emp e ON d.deptno = e.deptno;",
    "gotchas": "WHERE tuzog'i! Agar LEFT JOIN qilgandan so'ng `WHERE b.status = 'ACTIVE'` deb yozsangiz, o'ng tomoni NULL bo'lgan barcha qatorlar o'chib ketadi va so'rovingiz beixtiyor oddiy INNER JOIN ga aylanib qoladi! Shartni `ON` ichiga yozish kerak.",
    "related": [
      "inner-join",
      "right-outer-join",
      "full-outer-join",
      "is-null"
    ],
    "keywords": [
      "left join",
      "left outer join",
      "chapdan boglash",
      "null toldirish",
      "anti join"
    ]
  },
  {
    "id": "right-outer-join",
    "name": "RIGHT OUTER JOIN (O'ngdan Bog'lash)",
    "category": "4-Hafta • JOIN & Funksiyalar",
    "week": 4,
    "summary": "O'ngdagi jadvalning BARCHA qatorlarini to'liq saqlab, chapdagi jadvaldan moslarini birlashtirish.",
    "whatItDoes": "LEFT JOIN ning ko'zgu aksi. O'ng jadvaldagi barcha qatorlar chiqadi, agar chapdan juft topilmasa chap ustunlar `NULL` bo'ladi.",
    "whenToUse": "O'ngdagi jadval asosiy subyekt bo'lganda ishlatiladi (lekin dasturchilar kod o'qilishini osonlashtirish uchun odatda jadvallar o'rnini almashtirib `LEFT JOIN` yozishni afzal ko'rishadi).",
    "syntax": "SELECT a.ustun, b.ustun\nFROM jadvalA a\nRIGHT JOIN jadvalB b ON a.id = b.a_id;",
    "combinations": "`A RIGHT JOIN B` aynan `B LEFT JOIN A` bilan bir xil natija beradi.",
    "example": "SELECT e.ename, d.dname\nFROM emp e\nRIGHT JOIN dept d ON e.deptno = d.deptno;",
    "gotchas": "RIGHT JOIN ko'p jadvalli murakkab so'rovlarda kodni o'qishni qiyinlashtiradi. Jamoada qoidaga ko'ra hamma joyda faqat `LEFT JOIN` ishlatish tavsiya etiladi.",
    "related": [
      "left-outer-join",
      "inner-join",
      "full-outer-join"
    ],
    "keywords": [
      "right join",
      "right outer join",
      "ongdan boglash",
      "join"
    ]
  },
  {
    "id": "full-outer-join",
    "name": "FULL OUTER JOIN (To'liq Tashqi Bog'lash)",
    "category": "4-Hafta • JOIN & Funksiyalar",
    "week": 4,
    "summary": "Ikkala jadvalning ham BARCHA qatorlarini saqlab qoluvchi eng keng qamrovli JOIN turi.",
    "whatItDoes": "Jufti bor qatorlarni oddiy birlashtiradi. Jufti bo'lmagan qatorlarni esa qarama-qarshi tomoniga `NULL` qo'ygan holda natijaga qo'shadi. Ikkala tomondan ham birorta qator tashlab ketilmaydi.",
    "whenToUse": "Ikki tizimdagi ma'lumotlarni solishtirishda (Reconciliation): Masalan, Bank hisoboti va Buxgalteriya dasturi — qaysi to'lovlar birida bor-u, ikkinchisida yo'qligini aniqlashda.",
    "syntax": "SELECT a.fio, b.summa\nFROM hisob_kitob a\nFULL OUTER JOIN bank_karta b ON a.id = b.id;",
    "combinations": "`WHERE a.id IS NULL OR b.id IS NULL` filtri bilan ikkala tizim orasidagi nomutanosibliklarni (faqat bittasida borlarini) darhol topish mumkin.",
    "example": "SELECT e.ename, d.dname\nFROM emp e\nFULL JOIN dept d ON e.deptno = d.deptno;",
    "gotchas": "MySQL ma'lumotlar bazasida `FULL OUTER JOIN` to'g'ridan-to'g'ri qo'llab-quvvatlanmaydi! MySQL da unga erishish uchun `LEFT JOIN ... UNION ... RIGHT JOIN` kombinatsiyasi yoziladi.",
    "related": [
      "left-outer-join",
      "right-outer-join",
      "inner-join"
    ],
    "keywords": [
      "full join",
      "full outer join",
      "toliq boglash",
      "solishtirish",
      "reconciliation"
    ]
  },
  {
    "id": "cross-join",
    "name": "CROSS JOIN (Dekart Ko'paytmasi)",
    "category": "4-Hafta • JOIN & Funksiyalar",
    "week": 4,
    "summary": "Birinchi jadvaldagi har bir qatorni ikkinchi jadvaldagi barcha qatorlarga hech qanday shartsiz ulab chiqish.",
    "whatItDoes": "Natijadagi qatorlar soni = $A_{qatorlar} \times B_{qatorlar}$. Hech qanday `ON` kalit so'zi talab qilinmaydi.",
    "whenToUse": "Hamma mumkin bo'lgan matritsalarni generatsiya qilishda: Masalan, 12 ta oy $\times$ 50 ta filial = Har bir filial uchun 12 oylik reja katakchalarini yaratish.",
    "syntax": "SELECT * FROM jadval1 CROSS JOIN jadval2;",
    "combinations": "Kalendar jadvallar (Date dimension) bilan sotuvlar matritsasini bo'sh oylarsiz to'ldirishda qo'llaniladi.",
    "example": "-- O'lchamlar va Ranglar kombinatsiyasi:\nSELECT o.olcham, r.rang\nFROM olchamlar o CROSS JOIN ranglar r;",
    "gotchas": "Tasodifan `ON` shartisiz `FROM jadval1, jadval2` deb yozib qo'ysangiz, baza implicit CROSS JOIN qiladi va agar jadvallar katta bo'lsa serverni osiltirib qo'yadi!",
    "related": [
      "ra-cartesian",
      "inner-join"
    ],
    "keywords": [
      "cross join",
      "dekart",
      "matritsa",
      "kombinatsiya"
    ]
  },
  {
    "id": "self-join",
    "name": "SELF JOIN (Jadvalning O'zini O'ziga Ulash)",
    "category": "4-Hafta • JOIN & Funksiyalar",
    "week": 4,
    "summary": "Bitta jadvalni turli taxalluslar (alias) yordamida o'ziga-o'zi bog'lash usuli.",
    "whatItDoes": "Jadval xotirada ikkita mustaqil nusxa sifatida qaraladi: biri asosiy subyekt, ikkinchisi uning bog'langan obyekti rolida.",
    "whenToUse": "Hayotiy misol: 'Xodim va uning Rahbari'. Xodim ham `emp` jadvalida, uning rahbari ham o'sha `emp` jadvalida saqlanadi.",
    "syntax": "SELECT e.ename AS xodim, m.ename AS rahbar\nFROM emp e\nLEFT JOIN emp m ON e.mgr = m.empno;",
    "combinations": "Ko'pincha `LEFT JOIN` bilan ishlatiladi, chunki eng yuqori rahbarning (Bosh direktorning) tepasida rahbar bo'lmaydi (`mgr IS NULL`).",
    "example": "-- Bir xil shaharda yashovchi mijozlar juftligini topish:\nSELECT a.ism AS mijoz1, b.ism AS mijoz2, a.shahar\nFROM mijozlar a\nJOIN mijozlar b ON a.shahar = b.shahar AND a.id < b.id;",
    "gotchas": "Doimo har xil alias (`e` va `m`) bering! Agar jadval nomiga alias bermasangiz, baza qaysi ustun kimga tegishli ekanini tushunmay 'table name specified more than once' xatosini beradi.",
    "related": [
      "unary-relationship",
      "recursive-cte",
      "ra-rename"
    ],
    "keywords": [
      "self join",
      "oziga boglash",
      "rahbar",
      "menejer",
      "iyerarxiya"
    ]
  },
  {
    "id": "natural-join",
    "name": "NATURAL JOIN (Nomlari Bir Xil Ustunlar Bo'yicha Bog'lash)",
    "category": "4-Hafta • JOIN & Funksiyalar",
    "week": 4,
    "summary": "Ikkala jadvaldagi aynan bir xil nomlangan barcha ustunlarni avtomatik topib, ular bo'yicha tenglik bilan bog'lovchi JOIN.",
    "whatItDoes": "`ON` yoki `USING` yozishni talab qilmaydi. Agar ikkala jadvalda ham `deptno` degan ustun bo'lsa, ularni avtomatik `ON a.deptno = b.deptno` deb ulaydi.",
    "whenToUse": "O'quv mashg'ulotlarida yoki standart kalitli jadvallarda tezkor so'rov yozishda.",
    "syntax": "SELECT * FROM emp NATURAL JOIN dept;",
    "combinations": "Natijada umumiy ustun faqat bitta marta ko'rinadi (dublikat bo'lmaydi).",
    "example": "SELECT ename, dname, deptno\nFROM emp NATURAL JOIN dept;",
    "gotchas": "Xavfli tuzoq! Agar ikkala jadvalda `created_at` yoki `status` degan ustun ham bo'lsa, NATURAL JOIN ularni ham bir vaqtda tenglashtirib yuboradi va natijangiz kutilmaganda bo'sh chiqadi!",
    "related": [
      "inner-join",
      "join-using",
      "ra-natural-join"
    ],
    "keywords": [
      "natural join",
      "tabiiy",
      "avtomatik join",
      "bir xil ustunlar"
    ]
  },
  {
    "id": "join-using",
    "name": "JOIN ... USING (Bir Xil Ustun Bo'yicha Qisqa Sintaksis)",
    "category": "4-Hafta • JOIN & Funksiyalar",
    "week": 4,
    "summary": "Ikkala jadvalda nomi bir xil bo'lgan ustunni ko'rsatishning qisqa va xavfsiz usuli: ON a.id = b.id o'rniga USING (id).",
    "whatItDoes": "`ON a.deptno = b.deptno` yozish o'rniga qisqagina `USING (deptno)` deb yozish imkonini beradi. NATURAL JOIN dan farqli o'laroq, faqat siz ko'rsatgan ustunnigina bog'laydi.",
    "whenToUse": "Jadvallarda Foreign Key ota jadvaldagi Primary Key bilan aynan bir xil nomlangan bo'lsa.",
    "syntax": "SELECT * FROM emp JOIN dept USING (deptno);",
    "combinations": "Natijada `SELECT *` qilinganda ham `deptno` ustuni bitta bo'lib chiqadi (prefix talab qilmaydi).",
    "example": "SELECT e.ename, d.dname, deptno\nFROM emp e\nJOIN dept d USING (deptno);",
    "gotchas": "Agar ustunlar nomlari har xil bo'lsa (masalan birida `id`, ikkinchisida `mijoz_id`), `USING` ishlamaydi. Bunday holda klassik `ON a.id = b.mijoz_id` yozish shart.",
    "related": [
      "inner-join",
      "natural-join"
    ],
    "keywords": [
      "using",
      "join using",
      "qisqa join",
      "on"
    ]
  },
  {
    "id": "group-by",
    "name": "GROUP BY (Qatorlarni Guruhlarga Jamlash)",
    "category": "4-Hafta • JOIN & Funksiyalar",
    "week": 4,
    "summary": "Ko'rsatilgan ustunlardagi bir xil qiymatlarga ega qatorlarni bitta umumiy guruhga birlashtirish.",
    "whatItDoes": "Har bir guruh uchun yagona yakuniy hisob-kitob (SUM, AVG, COUNT, MIN, MAX) chiqarish imkonini beradi.",
    "whenToUse": "Hayotiy misol: 'Har bir bo'limda qanchadan xodim ishlaydi?', 'Har bir viloyat bo'yicha jami savdo aylanmasi qancha?'.",
    "syntax": "SELECT ustun, COUNT(*), SUM(summa)\nFROM jadval\nGROUP BY ustun;",
    "combinations": "HAVING orqali guruhlar filtrlanadi, ORDER BY orqali esa guruhlar saralanadi.",
    "example": "-- Har bir lavozim bo'yicha xodimlar soni va o'rtacha oylik:\nSELECT job, COUNT(*) AS xodimlar_soni, ROUND(AVG(sal), 2) AS ortacha_oylik\nFROM emp\nGROUP BY job\nORDER BY ortacha_oylik DESC;",
    "gotchas": "SQL ning eng qat'iy qoidasi: SELECT ro'yxatida yozilgan har qanday oddiy ustun ALBATTA GROUP BY ichida ham bo'lishi shart! Aks holda 'column must appear in the GROUP BY clause or be used in an aggregate function' degan xatolik chiqadi.",
    "related": [
      "having-clause",
      "count-func",
      "sum-avg",
      "grouping-sets"
    ],
    "keywords": [
      "group by",
      "guruhlash",
      "jamlash",
      "agregat",
      "aggregate"
    ]
  },
  {
    "id": "having-clause",
    "name": "HAVING (Guruhlangan Natijalarni Filtrlash)",
    "category": "4-Hafta • JOIN & Funksiyalar",
    "week": 4,
    "summary": "GROUP BY qilingandan so'ng hosil bo'lgan umumiy guruhlar ustida shart tekshirish (Guruhlar filtri).",
    "whatItDoes": "WHERE yakka qatorlarni tekshirsa, HAVING guruhlangan yig'indilarni (SUM, COUNT, AVG) tekshiradi. HAVING so'rov bajarilish zanjirida GROUP BY dan keyin ishlaydi.",
    "whenToUse": "Hayotiy misol: 'Faqat xodimlar soni 5 tadan ko'p bo'lgan bo'limlarni ko'rsat' yoki 'Jami savdosi 100 milliondan oshgan filiallar'.",
    "syntax": "SELECT bolim_id, COUNT(*)\nFROM xodimlar\nGROUP BY bolim_id\nHAVING COUNT(*) >= 5;",
    "combinations": "Bitta so'rovda ham `WHERE` (qatorlarni filtrlash uchun), ham `HAVING` (guruhlarni filtrlash uchun) birga ishlatilishi mumkin.",
    "example": "-- O'rtacha oyligi 3 000 000 dan yuqori bo'lgan lavozimlar:\nSELECT job, AVG(sal) AS ortacha\nFROM emp\nWHERE status = 'ACTIVE' -- Avval faol xodimlar tanlanadi\nGROUP BY job\nHAVING AVG(sal) > 3000000; -- Keyin guruh filtrlanadi",
    "gotchas": "Imtihon savoli: 'WHERE bilan HAVING ning farqi nima?'. WHERE agregat funksiyalardan (`COUNT, SUM`) oldin ishlaydi va ularni o'z ichiga ololmaydi. HAVING esa agregat funksiyalar hisoblangandan keyin guruhlarni filtrlash uchun ishlatiladi!",
    "related": [
      "group-by",
      "where-clause",
      "count-func"
    ],
    "keywords": [
      "having",
      "guruh filtri",
      "where vs having",
      "having count",
      "agregat filtr"
    ]
  },
  {
    "id": "grouping-sets",
    "name": "GROUPING SETS, ROLLUP & CUBE (Oraliq Jami Hisobotlar)",
    "category": "4-Hafta • JOIN & Funksiyalar",
    "week": 4,
    "summary": "Bitta so'rovda bir nechta turli darajadagi guruhlashlarni va oraliq umumiy jamilarni (Subtotals & Grand Total) hisoblash.",
    "whatItDoes": "`ROLLUP(yil, oy)` — iyerarxik oraliq jamilarni (har oy uchun + har yil uchun jami + butun davr uchun umumiy jami) chiqaradi. `CUBE(a, b)` — barcha mumkin bo'lgan kombinatsiyalarni hisoblaydi.",
    "whenToUse": "Buxgalteriya va moliyaviy hisobotlarda: 'Viloyat bo'yicha jami, tuman bo'yicha jami va butun respublika bo'yicha umumiy yig'indi'.",
    "syntax": "-- ROLLUP yordamida:\nGROUP BY ROLLUP (viloyat, shahar)\n\n-- GROUPING SETS yordamida aniq kombinatsiyalar:\nGROUP BY GROUPING SETS ((viloyat), (viloyat, shahar), ());",
    "combinations": "`GROUPING(ustun)` funksiyasi qatorning oraliq jami ekanligini (1 yoki 0) aniqlashda yordam beradi.",
    "example": "SELECT viloyat, shahar, SUM(summa) AS jami_savdo\nFROM savdolar\nGROUP BY ROLLUP (viloyat, shahar);",
    "gotchas": "CUBE juda ko'p ustunlar bilan ishlatilsa ($2^N$ kombinatsiya), hisoblash eksponentsial darajada sekinlashib ketadi.",
    "related": [
      "group-by",
      "sum-avg"
    ],
    "keywords": [
      "grouping sets",
      "rollup",
      "cube",
      "subtotal",
      "grand total",
      "oraliq jami"
    ]
  },
  {
    "id": "count-func",
    "name": "COUNT(), COUNT(*), COUNT(DISTINCT) (Qatorlarni Sanash)",
    "category": "4-Hafta • JOIN & Funksiyalar",
    "week": 4,
    "summary": "Jadvaldagi yoki guruhdagi qatorlar sonini sanovchi agregat funksiya.",
    "whatItDoes": "1. `COUNT(*)` — barcha qatorlarni, shu jumladan NULL li qatorlarni ham to'liq sanaydi.\n2. `COUNT(ustun)` — ko'rsatilgan ustunda faqat NULL bo'lmagan qiymatlarni sanaydi.\n3. `COUNT(DISTINCT ustun)` — faqat takrorlanmas unikal qiymatlarni sanaydi.",
    "whenToUse": "Jadvalda nechta foydalanuvchi borligini, nechta buyurtma berilganini bilishda.",
    "syntax": "SELECT COUNT(*), COUNT(telefon), COUNT(DISTINCT shahar) FROM mijozlar;",
    "combinations": "GROUP BY bilan birga guruhdagi elementlar sonini sanashda asosiy qurol.",
    "example": "-- Kompaniyada qancha xodim bor va ulardan nechtasida komissiya puli bor:\nSELECT COUNT(*) AS jami_xodimlar, COUNT(comm) AS komissiya_oluvchilar\nFROM emp;",
    "gotchas": "`COUNT(ustun)` ustundagi NULL larni hisobga olmaydi! Agar jadvalda 10 ta qator bo'lib, 3 tasining telefoni NULL bo'lsa, `COUNT(telefon)` 7 chiqaradi. Jami qatorlarni aniq bilish uchun har doim `COUNT(*)` ishlatish kerak.",
    "related": [
      "group-by",
      "distinct-clause",
      "is-null"
    ],
    "keywords": [
      "count",
      "count(*)",
      "count distinct",
      "sanash",
      "agregat"
    ]
  },
  {
    "id": "sum-avg",
    "name": "SUM() & AVG() (Yig'indi va O'rtacha Qiymat)",
    "category": "4-Hafta • JOIN & Funksiyalar",
    "week": 4,
    "summary": "Sonli ustunlarning umumiy arifmetik yig'indisini (SUM) va o'rtacha qiymatini (AVG) hisoblovchi funksiyalar.",
    "whatItDoes": "Ustundagi barcha qatorlarni qo'shib chiqadi. Ikkala funksiya ham hisoblash paytida NULL qiymatlarni avtomatik tarzda tashlab o'tadi (e'tiborsiz qoldiradi).",
    "whenToUse": "Oylik savdo aylanmasini hisoblashda (`SUM(summa)`), xodimlarning o'rtacha maoshini bilishda (`AVG(oylik)`).",
    "syntax": "SELECT SUM(narx * miqdor) AS jami, ROUND(AVG(narx), 2) AS ortacha FROM buyurtmalar;",
    "combinations": "`ROUND(AVG(oylik), 2)` ko'rinishida verguldan keyingi ortiqcha kasr xonalarni qisqartirish uchun `ROUND` bilan birga ishlatiladi.",
    "example": "SELECT deptno, SUM(sal) AS jami_maosh_fondi, AVG(sal) AS ortacha_maosh\nFROM emp\nGROUP BY deptno;",
    "gotchas": "AVG va NULL tuzog'i! Agar bo'limda 4 ta xodim bo'lib, oyliklari: 100, 200, 300 va NULL bo'lsa, `AVG(oylik)` buni 4 ga emas, 3 ga bo'ladi ($(100+200+300)/3 = 200$)! Agar 4 ga bo'linishi kerak bo'lsa, `AVG(COALESCE(oylik, 0))` deb yozish shart.",
    "related": [
      "group-by",
      "min-max",
      "coalesce",
      "round-trunc"
    ],
    "keywords": [
      "sum",
      "avg",
      "yigindi",
      "ortacha",
      "hisoblash",
      "agregat"
    ]
  },
  {
    "id": "min-max",
    "name": "MIN() & MAX() (Eng Kichik va Eng Katta Qiymat)",
    "category": "4-Hafta • JOIN & Funksiyalar",
    "week": 4,
    "summary": "Guruh yoki jadvaldagi eng minimal va eng maksimal qiymatni topuvchi agregat funksiyalar.",
    "whatItDoes": "Faqat sonlarda emas, balki matnlarda (alifbo bo'yicha birinchi va oxirgi) hamda sanalarda (eng birinchi sana va eng so'nggi sana) ham ishlaydi. NULL larni inobatga olmaydi.",
    "whenToUse": "Eng qimmat tovar narxini, eng oxirgi kiritilgan buyurtma sanasini yoki eng past ballni aniqlashda.",
    "syntax": "SELECT MIN(narx) AS eng_arzon, MAX(narx) AS eng_qimmat FROM tovarlar;",
    "combinations": "Subquery larda: `WHERE narx = (SELECT MAX(narx) FROM tovarlar)` (eng qimmat tovarni topish).",
    "example": "-- Eng birinchi va eng oxirgi ishga kirgan xodimlar sanasi:\nSELECT MIN(hiredate) AS eng_faxriy, MAX(hiredate) AS eng_yangi\nFROM emp;",
    "gotchas": "MIN/MAX ustun indekslangan bo'lsa (B-Tree), so'rov 1 millisekundda (O(1) tezlikda) natija beradi, chunki qiymat daraxtning eng chekka yaprog'ida turadi.",
    "related": [
      "sum-avg",
      "count-func",
      "create-index"
    ],
    "keywords": [
      "min",
      "max",
      "eng kichik",
      "eng katta",
      "minimum",
      "maksimum"
    ]
  },
  {
    "id": "coalesce",
    "name": "COALESCE(val1, val2, ..., val_n)",
    "category": "4-Hafta • JOIN & Funksiyalar",
    "week": 4,
    "summary": "Berilgan parametrlar ro'yxatidan birinchi bo'lib uchragan NULL bo'lmagan qiymatni qaytaradi.",
    "whatItDoes": "Chapdan o'ngga qarab tekshiradi. Birinchi uchragan tirik ma'lumotni oladi. Agar barcha berilgan qiymatlar NULL bo'lsa, natija ham NULL bo'ladi. Standart ANSI SQL funksiyasi bo'lib, barcha ma'lumotlar bazalarida ishlaydi.",
    "whenToUse": "Hayotiy misol: Foydalanuvchiga xabar yuborish kerak. Agar `mobil_telefon` bo'lsa telefonga, bo'lmasa `uy_telefoni`ga, u ham bo'lmasa `elektron_pochta`ga, hech biri bo'lmasa `'Mavjud emas'` yozuviga almashtirishda.",
    "syntax": "COALESCE(ustun1, ustun2, ustun3, 'Standart Qiymat')",
    "combinations": "Arifmetik amallarda NULL dan himoyalanish uchun juda qo'l keladi: `narx * (1 - COALESCE(chegirma, 0))`.",
    "example": "-- Xodimning jami daromadi (agar komissiya NULL bo'lsa 0 deb olinsin):\nSELECT ename, sal + COALESCE(comm, 0) AS jami_daromad\nFROM emp;",
    "gotchas": "Barcha parametrlar ma'lumotlar turi bo'yicha bir-biriga mos (yoki avtomatik o'giriladigan) bo'lishi shart! Sonli ustun bilan matnni aralashtirib yuborsangiz type mismatch xatosi chiqadi.",
    "related": [
      "nvl",
      "nullif",
      "is-null",
      "three-valued-logic"
    ],
    "keywords": [
      "coalesce",
      "null almashtirish",
      "birinchi not null",
      "standart qiymat"
    ]
  },
  {
    "id": "nvl",
    "name": "NVL / IFNULL",
    "category": "4-Hafta • JOIN & Funksiyalar",
    "week": 4,
    "summary": "Faqat 2 ta parametr qabul qiluvchi va birinchi qiymat NULL bo'lsa, ikkinchisini qaytaruvchi funksiya.",
    "whatItDoes": "Oracle tizimida `NVL(a, b)`, MySQL da `IFNULL(a, b)`, SQL Server da `ISNULL(a, b)` deb ataladi. Ular COALESCE ning soddalashtirilgan 2 parametrli varianti.",
    "whenToUse": "Oddiy NULL almashtirishlarda.",
    "syntax": "-- Oracle:\nNVL(comm, 0)\n\n-- MySQL:\nIFNULL(comm, 0)",
    "combinations": "Universal portability (boshqa bazaga ko'chish) uchun doimo standart `COALESCE` dan foydalanish tavsiya etiladi.",
    "example": "SELECT ename, sal + NVL(comm, 0) AS daromad FROM emp;",
    "gotchas": "NVL va IFNULL standart ANSI SQL emas! Agar kodingizni PostgreSQL ga ko'chirsangiz NVL ishlamaydi (PostgreSQL da faqat COALESCE ishlaydi).",
    "related": [
      "coalesce",
      "nullif"
    ],
    "keywords": [
      "nvl",
      "ifnull",
      "isnull",
      "oracle nvl",
      "null almashtirish"
    ]
  },
  {
    "id": "nullif",
    "name": "NULLIF(val1, val2)",
    "category": "4-Hafta • JOIN & Funksiyalar",
    "week": 4,
    "summary": "Agar ikkala qiymat o'zaro teng bo'lsa NULL qaytaradi, aks holda birinchi qiymatni qaytaradi.",
    "whatItDoes": "`val1 = val2` bo'lganda `NULL` beradi. Aks holda `val1` ni o'zini beradi.",
    "whenToUse": "Eng muhim vazifasi: Nolga bo'linish xatosidan (Division by Zero) 100% himoya qilish!",
    "syntax": "NULLIF(ustun, 0)",
    "combinations": "`summa / NULLIF(miqdor, 0)` ko'rinishida yozilsa, agar miqdor 0 bo'lsa, ifoda `summa / NULL` ga aylanadi va xatolik berib qulash o'rniga xavfsiz `NULL` qaytaradi.",
    "example": "-- Reja bajarilish foizi (agar reja 0 bo'lsa xatolik chiqmasin):\nSELECT filial, haqiqiy_savdo / NULLIF(reja_savdo, 0) * 100 AS bajarilish_foizi\nFROM rejalar;",
    "gotchas": "Agar ikkala qiymat teng bo'lsa natija NULL bo'ladi. Buni unutib qo'ysangiz kutilmaganda NULL qiymatlar paydo bo'ladi.",
    "related": [
      "coalesce",
      "nvl"
    ],
    "keywords": [
      "nullif",
      "nolga bolinish",
      "division by zero",
      "teng bolsa null"
    ]
  },
  {
    "id": "concat-func",
    "name": "CONCAT() & || Operator (Satrlarni Birlashtirish)",
    "category": "4-Hafta • JOIN & Funksiyalar",
    "week": 4,
    "summary": "Bir nechta matnli ustunlar va so'zlarni bitta yaxlit matnga yopishtirish.",
    "whatItDoes": "ANSI SQL, PostgreSQL va Oracle da `||` (ikkita vertikal chiziq) operatori ishlatiladi. MySQL va boshqa tizimlarda `CONCAT(satr1, satr2, ...)` funksiyasi mavjud.",
    "whenToUse": "Familiya, Ism va Sharifni birlashtirib bitta to'liq F.I.O hosil qilishda.",
    "syntax": "-- Standart SQL / PostgreSQL / Oracle:\nism || ' ' || familiya\n\n-- Funksiya orqali:\nCONCAT(ism, ' ', familiya)",
    "combinations": "`CONCAT_WS(' ', ism, familiya, sharif)` (Concat With Separator) bo'sh joylarni avtomatik qo'yib ketadi.",
    "example": "SELECT ename || ' kompaniyaning ' || job || ' lavozimida ishlaydi' AS malumot\nFROM emp;",
    "gotchas": "Standart `||` operatorida agar satrlardan bittasi `NULL` bo'lsa, butun natija `NULL` bo'lib qoladi! `CONCAT()` funksiyasi esa NULL larni e'tiborsiz qoldirib yopishtiradi.",
    "related": [
      "substr-instr",
      "length-trim"
    ],
    "keywords": [
      "concat",
      "||",
      "satr ulash",
      "yopishtirish",
      "matn"
    ]
  },
  {
    "id": "upper-lower",
    "name": "UPPER(), LOWER(), INITCAP() (Matn Registri)",
    "category": "4-Hafta • JOIN & Funksiyalar",
    "week": 4,
    "summary": "Matndagi harflarni bosh harflarga (UPPER), kichik harflarga (LOWER) yoki har bir so'z boshini bosh harfga (INITCAP) o'tkazish.",
    "whatItDoes": "Registrga bog'liq bo'lmagan qidiruvlarni amalga oshirishda va ma'lumotlarni yagona standart formatga keltirishda ishlatiladi.",
    "whenToUse": "Foydalanuvchi emailini kichik harflarda saqlashda (`LOWER(email)`) yoki qidiruvda harf kattaligidan qat'iy nazar topishda.",
    "syntax": "UPPER(matn)\nLOWER(matn)\nINITCAP(matn)",
    "combinations": "WHERE filtrida: `WHERE UPPER(fio) LIKE UPPER('%ali%')`.",
    "example": "SELECT UPPER(ename) AS katta_harf, LOWER(job) AS kichik_harf, INITCAP(ename) AS chiroyli\nFROM emp;",
    "gotchas": "Indeks tuzog'i! Agar `WHERE UPPER(email) = 'ALI@GMAIL.COM'` deb yozsangiz, oddiy `email` ustunidagi B-Tree indeks ishlamay qoladi! Bunday qidiruvlar uchun 'Functional Index' (`CREATE INDEX ON mijozlar (UPPER(email))`) yaratish lozim.",
    "related": [
      "like-operator",
      "create-index"
    ],
    "keywords": [
      "upper",
      "lower",
      "initcap",
      "registr",
      "katta harf",
      "kichik harf"
    ]
  },
  {
    "id": "substr-instr",
    "name": "SUBSTR() & INSTR() (Matn Bo'lagini Kesish va Joylashuvini Topish)",
    "category": "4-Hafta • JOIN & Funksiyalar",
    "week": 4,
    "summary": "Matnning ma'lum bir pozitsiyasidan boshlab kerakli uzunlikdagi bo'lagini qirqib olish (SUBSTR) va so'z qayerda joylashganini aniqlash (INSTR).",
    "whatItDoes": "`SUBSTR(matn, boshlanish, uzunlik)` — kesib oladi. `INSTR(matn, 'qidirilayotgan_soz')` (PostgreSQL da `POSITION`) — so'z nechanchi harfdan boshlanish indeksini qaytaradi.",
    "whenToUse": "Telefon raqamdan faqat operator kodini ajratib olishda (`SUBSTR(telefon, 5, 2)` -> '90') yoki emailning `@` dan keyingi domen qismini olishda.",
    "syntax": "SUBSTR('Toshkent', 1, 4) -- 'Tosh'\nINSTR('user@gmail.com', '@') -- 5",
    "combinations": "Ikkalasi birgalikda dinamik kesish uchun ishlatiladi: `SUBSTR(email, INSTR(email, '@') + 1)` (faqat domen nomini ajratadi).",
    "example": "-- Xodim ismining faqat birinchi harfini (bosh harf) olish:\nSELECT SUBSTR(ename, 1, 1) || '.' || ' ' || job AS qisqartma\nFROM emp;",
    "gotchas": "SQL da satr indeksatsiyasi 1 dan boshlanadi! (Python yoki Java dagi kabi 0 dan emas). `SUBSTR(matn, 1, 1)` birinchi harfni beradi.",
    "related": [
      "length-trim",
      "concat-func"
    ],
    "keywords": [
      "substr",
      "substring",
      "instr",
      "position",
      "kesish",
      "matn bolagi"
    ]
  },
  {
    "id": "length-trim",
    "name": "LENGTH(), TRIM(), LTRIM(), RTRIM() (Satr Uzunligi va Tozalash)",
    "category": "4-Hafta • JOIN & Funksiyalar",
    "week": 4,
    "summary": "Matndagi belgilar sonini sanash (LENGTH) va satr boshi/oxiridagi keraksiz bo'sh joylarni tozalash (TRIM).",
    "whatItDoes": "`LENGTH(matn)` — harflar sonini qaytaradi. `TRIM(matn)` — foydalanuvchi tasodifan bosib yuborgan ikki chetdagi keraksiz bo'sh joylarni (probellarni) qirqib tashlaydi.",
    "whenToUse": "Parol uzunligini tekshirishda (`LENGTH(parol) >= 8`) yoki formadan kelgan ma'lumotlarni tozalashda.",
    "syntax": "LENGTH(matn)\nTRIM(matn) -- Ikkala chetidagi probellarni tozalaydi\nLTRIM(matn) -- Faqat chap chetini tozalaydi\nRTRIM(matn) -- Faqat o'ng chetini tozalaydi",
    "combinations": "`CHECK (LENGTH(jshshir) = 14)` ko'rinishida jadval darajasidagi cheklovlarda qo'llanadi.",
    "example": "-- Tozalangan va uzunligi tekshirilgan foydalanuvchi ma'lumotlari:\nSELECT TRIM(fio) AS toza_fio, LENGTH(TRIM(fio)) AS harflar_soni\nFROM foydalanuvchilar;",
    "gotchas": "Agar foydalanuvchi ismiga probel qo'shib ro'yxatdan o'tsa (`' Ali '`), `WHERE ism = 'Ali'` qidiruvi uni topolmaydi! Shuning uchun saqlashdan oldin doimo `TRIM()` qilish zarur.",
    "related": [
      "substr-instr",
      "concat-func"
    ],
    "keywords": [
      "length",
      "trim",
      "ltrim",
      "rtrim",
      "uzunlik",
      "probel tozalash"
    ]
  },
  {
    "id": "round-trunc",
    "name": "ROUND(), TRUNC(), CEIL(), FLOOR(), ABS() (Matematik Yaxlitlash)",
    "category": "4-Hafta • JOIN & Funksiyalar",
    "week": 4,
    "summary": "Haqiqiy kasr sonlarni yaxlitlash, kesish va matematik amallar bajarish funksiyalari.",
    "whatItDoes": "1. `ROUND(son, n)` — matematik qoida bo'yicha eng yaqin songa yaxlitlaydi.\n2. `TRUNC(son, n)` — yaxlitlamasdan, ko'rsatilgan xonadan keyingisini shunchaki kesib tashlaydi.\n3. `CEIL(son)` — har doim yuqoriga qarab eng yaqin butun songa yaxlitlaydi.\n4. `FLOOR(son)` — har doim pastga qarab butun songa yaxlitlaydi.\n5. `ABS(son)` — modulini (musbat qiymatini) oladi.",
    "whenToUse": "O'rtacha ko'rsatkichlarni (`ROUND(AVG(baho), 2)`), hisob-kitoblarni sahifalash sonini topishda (`CEIL(jami / sahifa_hajmi)`) ishlatiladi.",
    "syntax": "ROUND(125.456, 2) -- 125.46\nTRUNC(125.456, 2) -- 125.45\nCEIL(4.1)         -- 5\nFLOOR(4.9)        -- 4\nABS(-50)          -- 50",
    "combinations": "Moliya va foiz hisob-kitoblarida agregat funksiyalar bilan birga qo'llanadi.",
    "example": "SELECT deptno, ROUND(AVG(sal), 2) AS ortacha_oylik\nFROM emp\nGROUP BY deptno;",
    "gotchas": "Tijoriy bank hisoblarida yaxlitlash usuli qonuniy me'yorlar bilan belgilanadi. ROUND o'rniga TRUNC ishlatib yuborish tiyinlar hisobida katta kamomad keltirib chiqarishi mumkin.",
    "related": [
      "sum-avg",
      "sql-datatypes"
    ],
    "keywords": [
      "round",
      "trunc",
      "ceil",
      "floor",
      "abs",
      "yaxlitlash",
      "matematik"
    ]
  },
  {
    "id": "date-functions",
    "name": "CURRENT_DATE, NOW(), EXTRACT(), INTERVAL (Sana Funksiyalari)",
    "category": "4-Hafta • JOIN & Funksiyalar",
    "week": 4,
    "summary": "Joriy vaqtni olish, sanalar orasidagi farqni hisoblash, sanadan yil/oy/kunni ajratib olish va vaqt qo'shish.",
    "whatItDoes": "1. `CURRENT_DATE` — bugungi sana.\n2. `NOW()` / `CURRENT_TIMESTAMP` — ayni soniyagacha bo'lgan to'liq vaqt.\n3. `EXTRACT(YEAR FROM sana)` — sanadan yilni ajratadi.\n4. `sana + INTERVAL '30 days'` — sanaga 30 kun qo'shadi.",
    "whenToUse": "Buyurtma muddatini hisoblashda, foydalanuvchi yoshini topishda, bugungi kungi savdolarni filtrlab olishda.",
    "syntax": "-- Bugungi sana:\nSELECT CURRENT_DATE;\n\n-- Yilni ajratish:\nEXTRACT(YEAR FROM buyurtma_sanasi)\n\n-- Muddati o'tgan to'lovlar:\nWHERE muddat < CURRENT_DATE",
    "combinations": "`AGE(CURRENT_DATE, tugilgan_sana)` orqali shaxsning necha yoshu necha oylik ekani aniq hisoblanadi.",
    "example": "-- So'nggi 7 kunda berilgan buyurtmalar:\nSELECT id, buyurtma_vaqti\nFROM buyurtmalar\nWHERE buyurtma_vaqti >= CURRENT_TIMESTAMP - INTERVAL '7 days';",
    "gotchas": "Vaqt zonalari (Time Zone) tuzog'i! Server vaqti bilan mijoz vaqti boshqacha bo'lishi mumkin. Har doim bazada `TIMESTAMP WITH TIME ZONE` (UTC) formatida saqlash tavsiya etiladi.",
    "related": [
      "derived-attribute",
      "between-operator",
      "sql-datatypes"
    ],
    "keywords": [
      "date",
      "current_date",
      "now",
      "extract",
      "interval",
      "sana funksiyalari"
    ]
  },
  {
    "id": "cast-convert",
    "name": "CAST(x AS type) & ::type (Ma'lumot Turini O'zgartirish)",
    "category": "4-Hafta • JOIN & Funksiyalar",
    "week": 4,
    "summary": "Qiymatni bir ma'lumot turidan boshqa bir mos ma'lumot turiga xavfsiz o'tkazish (Type Casting).",
    "whatItDoes": "Masalan: matn ko'rinishidagi `'123'` ni sonli `INT` ga, yoki sonni formatlangan matnga o'tkazadi.",
    "whenToUse": "Ikki xil turdagi ustunlarni taqqoslashda yoki butun sonlarni bo'lganda kasr qismi yo'qolib ketmasligi uchun.",
    "syntax": "-- ANSI SQL standarti:\nCAST(ustun AS DECIMAL(10,2))\n\n-- PostgreSQL qisqartmasi:\nustun::INT",
    "combinations": "Bo'linma hisoblashda: `CAST(son1 AS FLOAT) / son2` butun sonli bo'linish (Integer Division) tuzog'idan saqlaydi.",
    "example": "-- Butun sonlarni o'zaro to'g'ri bo'lish:\nSELECT CAST(muvaffaqiyatli_urinishlar AS DECIMAL(5,2)) / jami_urinishlar * 100 AS foiz\nFROM testlar;",
    "gotchas": "Agar matn ichida harflar bo'lsa (masalan `'12a'`), uni INT ga CAST qilish xatolik (Invalid text representation) berib butun so'rovni qulatadi.",
    "related": [
      "sql-datatypes",
      "round-trunc"
    ],
    "keywords": [
      "cast",
      "convert",
      "type cast",
      "tur ozgartirish",
      "type conversion"
    ]
  },
  {
    "id": "subquery-scalar",
    "name": "SCALAR SUBQUERY (Skalyar Quyi So'rov)",
    "category": "5-Hafta • Subquery & Analitik",
    "week": 5,
    "summary": "Aynan 1 ta qator va 1 ta ustundan iborat yagona qiymat qaytaruvchi ichma-ich so'rov.",
    "whatItDoes": "O'zini xuddi bitta o'zgarmas son yoki satr kabi tutadi. Shu sababli uni `=`, `>`, `<`, `+` kabi oddiy taqqoslash amallarida yoki to'g'ridan-to'g'ri `SELECT` ustunlar ro'yxatida ishlatish mumkin.",
    "whenToUse": "Hayotiy misol: 'Oyligi butun kompaniya bo'yicha o'rtacha oylikdan yuqori bo'lgan xodimlarni toping'.",
    "syntax": "SELECT * FROM xodimlar\nWHERE oylik > (SELECT AVG(oylik) FROM xodimlar);",
    "combinations": "SELECT ro'yxatida har bir qator uchun qo'shimcha yakka hisob-kitob chiqarishda ham ishlatiladi.",
    "example": "-- Har bir xodim o'z oyligi va kompaniya o'rtacha oyligi o'rtasidagi farqni ko'rishi:\nSELECT ename, sal, sal - (SELECT AVG(sal) FROM emp) AS farq\nFROM emp;",
    "gotchas": "Skalyar subquery dan ehtiyot bo'ling! Agar ichki so'rov tasodifan 1 tadan ko'p qator (masalan 2 ta qator) qaytarsa, baza 'more than one row returned by a subquery used as an expression' degan xato bilan butun so'rovni to'xtatadi!",
    "related": [
      "subquery-in-any-all",
      "correlated-subquery",
      "sum-avg"
    ],
    "keywords": [
      "scalar subquery",
      "skalyar",
      "ichki sorov",
      "subquery",
      "yakka qiymat"
    ]
  },
  {
    "id": "subquery-in-any-all",
    "name": "MULTI-ROW SUBQUERY (IN, ANY/SOME, ALL bilan Quyi So'rov)",
    "category": "5-Hafta • Subquery & Analitik",
    "week": 5,
    "summary": "Bir nechta qatorlardan iborat ro'yxat qaytaruvchi ichki so'rovlar bilan ishlash operatorlari.",
    "whatItDoes": "1. `IN` — ro'yxatdagi qiymatlardan birontasiga teng bo'lsa kifoya.\n2. `> ANY` (yoki `> SOME`) — ro'yxatdagi eng kichigidan katta bo'lsa bas (kamida bittasidan katta).\n3. `> ALL` — ro'yxatdagi barcha qiymatlarning har biridan katta bo'lishi shart (eng kattasidan ham katta).",
    "whenToUse": "'Toshkent filialidagi xodimlarning har biridan ko'p maosh oluvchi Samarqandlik xodimlar' (`> ALL`).",
    "syntax": "-- 30-bo'limdagi eng kam maosh oluvchidan ko'p oluvchilar:\nWHERE sal > ANY (SELECT sal FROM emp WHERE deptno = 30)\n\n-- 30-bo'limdagi barcha xodimlardan ko'p oluvchilar:\nWHERE sal > ALL (SELECT sal FROM emp WHERE deptno = 30)",
    "combinations": "WHERE va HAVING qismlarida to'plamlar bilan taqqoslashda asosiy qurol.",
    "example": "SELECT ename, sal FROM emp\nWHERE sal > ALL (SELECT sal FROM emp WHERE job = 'CLERK');",
    "gotchas": "`NOT IN` va `ALL` operatorlarida agar subquery natijasida bitta dona `NULL` chiqsa, natija to'liq bo'sh bo'lib qoladi! Doimo subquery ga `WHERE ustun IS NOT NULL` qo'yishni unutmang.",
    "related": [
      "subquery-scalar",
      "in-operator",
      "exists-operator"
    ],
    "keywords": [
      "multi row subquery",
      "any",
      "some",
      "all",
      "in",
      "toplam subquery"
    ]
  },
  {
    "id": "correlated-subquery",
    "name": "CORRELATED SUBQUERY (Korrelyatsion Quyi So'rov)",
    "category": "5-Hafta • Subquery & Analitik",
    "week": 5,
    "summary": "Tashqi so'rovning har bir qatori uchun qayta-qayta ishga tushadigan va tashqi jadval ustuniga suyanadigan ichki so'rov.",
    "whatItDoes": "Oddiy subquery mustaqil bir marta ishlasa, korrelyatsion subquery tashqi so'rovdagi har bir qator qiymatini parametr sifatida ichkariga oladi. Xuddi dasturlashdagi `for` tsikli ichidagi ichki tsiklga o'xshaydi.",
    "whenToUse": "Hayotiy misol: 'Har bir xodimni o'zining bo'limidagi o'rtacha maosh bilan solishtirish' (har bo'limning o'rtachasi har xil!).",
    "syntax": "SELECT e.ename, e.sal, e.deptno\nFROM emp e\nWHERE e.sal > (\n  SELECT AVG(i.sal) FROM emp i WHERE i.deptno = e.deptno -- e.deptno ga bog'langan!\n);",
    "combinations": "`EXISTS` va `NOT EXISTS` operatorlari deyarli har doim korrelyatsion subquery bilan birga ishlatiladi.",
    "example": "-- O'z bo'limidagi eng katta maoshni oluvchi xodimlarni topish:\nSELECT e.ename, e.deptno, e.sal\nFROM emp e\nWHERE e.sal = (SELECT MAX(i.sal) FROM emp i WHERE i.deptno = e.deptno);",
    "gotchas": "Samaradorlik tuzog'i! Agar tashqi jadvalda 1 000 000 qator bo'lsa, korrelyatsion subquery 1 000 000 marta qayta ishlaydi! Katta jadvallarda uni `JOIN` yoki `Window Functions` (`AVG() OVER (PARTITION BY ...)`) ga almashtirish so'rovni 100x tezlashtiradi.",
    "related": [
      "over-clause",
      "exists-operator",
      "subquery-scalar"
    ],
    "keywords": [
      "correlated subquery",
      "korrelyatsion",
      "ichma-ich",
      "tsikl",
      "subquery"
    ]
  },
  {
    "id": "derived-table",
    "name": "DERIVED TABLE / INLINE VIEW (FROM Ichidagi Quyi So'rov)",
    "category": "5-Hafta • Subquery & Analitik",
    "week": 5,
    "summary": "So'rovning FROM qismida yozilib, vaqtinchalik virtual jadvaldek xizmat qiluvchi quyi so'rov.",
    "whatItDoes": "Murakkab hisob-kitoblarni oldindan tayyorlab olib, asosiy so'rovda ularni oddiy jadval ustunlaridek ishlatish imkonini beradi.",
    "whenToUse": "Guruhlangan ma'lumotlarni boshqa jadvallar bilan qayta JOIN qilishda yoki agregat qilingan ustunlar ustida yana filtrlash o'tkazishda.",
    "syntax": "SELECT dt.dname, dt.ortacha_maosh\nFROM (\n  SELECT deptno, AVG(sal) AS ortacha_maosh FROM emp GROUP BY deptno\n) dt\nJOIN dept d ON dt.deptno = d.deptno;",
    "combinations": "Zamonaviy SQL da derived table larni o'rniga kodni o'qilishini osonlashtirish uchun `WITH` (CTE) ishlatish urf bo'lgan.",
    "example": "SELECT mijoz_id, jami_harid\nFROM (\n  SELECT mijoz_id, SUM(summa) AS jami_harid\n  FROM buyurtmalar GROUP BY mijoz_id\n) statistika\nWHERE jami_harid > 10000000;",
    "gotchas": "Majburiy talab: FROM ichidagi har qanday derived table ALBATTA o'zining shaxsiy taxallusiga (Alias) ega bo'lishi shart! Agar oxiriga `AS dt` qo'yishni unutsangiz baza darhol xato beradi.",
    "related": [
      "cte-with",
      "select-from"
    ],
    "keywords": [
      "derived table",
      "inline view",
      "from subquery",
      "vaqtincha jadval",
      "alias"
    ]
  },
  {
    "id": "case-when",
    "name": "CASE WHEN ... THEN ... ELSE ... END (SQL Shartli Tanlash Mantiqi)",
    "category": "5-Hafta • Subquery & Analitik",
    "week": 5,
    "summary": "Dasturlash tillaridagi `if-else` yoki `switch-case` mantiqini to'g'ridan-to'g'ri SQL so'rovi ichida qo'llash.",
    "whatItDoes": "Har bir qator uchun berilgan shartlarni ketma-ket tekshiradi. Birinchi to'g'ri kelgan `WHEN` ning javobini qaytaradi. Agar hech biri to'g'ri kelmasa, `ELSE` dagi qiymatni beradi.",
    "whenToUse": "Hayotiy misol: Status kodlarini tushunarli matnga o'girish (`'P' -> 'Kutilmoqda'`, `'D' -> 'Yetkazildi'`) yoki mijozlarni yoshiga qarab toifalarga ajratish.",
    "syntax": "CASE\n  WHEN shart1 THEN natija1\n  WHEN shart2 THEN natija2\n  ELSE standart_natija\nEND",
    "combinations": "`SUM(CASE WHEN status = 'TOLANDI' THEN summa ELSE 0 END)` ko'rinishida yozilib, Pivot hisobotlar qurishda eng kuchli usul hisoblanadi.",
    "example": "-- Xodimlarni maosh toifasiga ajratish:\nSELECT ename, sal,\n  CASE\n    WHEN sal >= 4000000 THEN 'Yuqori'\n    WHEN sal >= 2000000 THEN 'O''rta'\n    ELSE 'Boshlang''ich'\n  END AS maosh_toifasi\nFROM emp;",
    "gotchas": "Oxiriga `END` so'zini qo'yishni unutmang! Shuningdek `ELSE` yozilmasa va hech qaysi shart bajarilmasa, avtomatik `NULL` qaytadi.",
    "related": [
      "select-from",
      "coalesce"
    ],
    "keywords": [
      "case when",
      "if else",
      "shartli mantiq",
      "case",
      "then",
      "else",
      "end"
    ]
  },
  {
    "id": "over-clause",
    "name": "OVER (PARTITION BY ... ORDER BY ...) (Oyna Funksiyalari Asosi)",
    "category": "5-Hafta • Subquery & Analitik",
    "week": 5,
    "summary": "GROUP BY dan farqli o'laroq, qatorlarni yagona qatorga qisqartirib yubormasdan, har bir qator yonida guruh statistikasini ko'rsatish.",
    "whatItDoes": "1. `PARTITION BY` — qatorlarni mantiqiy oynalarga (guruhlarga) bo'ladi.\n2. `ORDER BY` — oyna ichida tartibni belgilaydi.\nHar bir qator o'zining barcha shaxsiy ustunlarini saqlab qoladi!",
    "whenToUse": "Har bir xodim yonida uning o'z bo'limidagi jami maoshni yoki bo'limdagi o'rtachani ko'rsatish talab qilinganda.",
    "syntax": "FUNKSIYA() OVER (\n  PARTITION BY guruh_ustuni\n  ORDER BY tartib_ustuni\n)",
    "combinations": "ROW_NUMBER, RANK, DENSE_RANK, LAG, LEAD, SUM, AVG kabi funksiyalar bilan birga ishlaydi.",
    "example": "-- Har bir xodim maoshi va uning bo'limidagi o'rtacha maosh:\nSELECT ename, deptno, sal,\n  ROUND(AVG(sal) OVER (PARTITION BY deptno), 2) AS bolim_ortachasi\nFROM emp;",
    "gotchas": "Oyna funksiyalarini `WHERE` yoki `HAVING` ichida to'g'ridan-to'g'ri ishlatib bo'lmaydi! Chunki ular WHERE va HAVING dan keyin hisoblanadi. Ularni filtrlash uchun so'rovni `WITH` (CTE) ichiga o'rash kerak.",
    "related": [
      "row-number",
      "rank-func",
      "dense-rank",
      "lag-lead",
      "sum-over-running"
    ],
    "keywords": [
      "over",
      "partition by",
      "window function",
      "oyna funksiyasi",
      "analitik"
    ]
  },
  {
    "id": "row-number",
    "name": "ROW_NUMBER() (Takrorlanmas Tartib Raqami)",
    "category": "5-Hafta • Subquery & Analitik",
    "week": 5,
    "summary": "Oyna doirasida har bir qatorga qat'iy 1, 2, 3... qilib takrorlanmas noyob tartib raqami beruvchi analitik funksiya.",
    "whatItDoes": "Agar ikkita qatorning saralash qiymatlari teng bo'lsa ham, ularga bir xil raqam bermaydi, ketma-ket navbat beradi.",
    "whenToUse": "Dublikat yozuvlarni tozalashda (`WHERE rn > 1` qilib o'chirish) yoki 'Har bir toifadagi eng oxirgi 1 ta buyurtmani topish' da.",
    "syntax": "ROW_NUMBER() OVER (PARTITION BY guruh ORDER BY saralash DESC)",
    "combinations": "CTE bilan birgalikda 'Top-N per group' masalalarini yechishda 1-raqamli standart usul.",
    "example": "-- Har bir bo'limda eng ko'p oylik oluvchi xodimni topish:\nWITH xodim_reyting AS (\n  SELECT ename, deptno, sal,\n    ROW_NUMBER() OVER (PARTITION BY deptno ORDER BY sal DESC) AS rn\n  FROM emp\n)\nSELECT * FROM xodim_reyting WHERE rn = 1;",
    "gotchas": "Teng qiymatlarda qaysi biri 1, qaysi biri 2 bo'lishi deterministik bo'lmasligi mumkin. Aniq tartib kerak bo'lsa `ORDER BY sal DESC, empno ASC` deb ikkinchi ustunni qo'shish lozim.",
    "related": [
      "rank-func",
      "dense-rank",
      "over-clause"
    ],
    "keywords": [
      "row_number",
      "row number",
      "tartib raqam",
      "top n",
      "dublikat tozalash"
    ]
  },
  {
    "id": "rank-func",
    "name": "RANK() (Olimpiada Usulida Reyting va Sakrash)",
    "category": "5-Hafta • Subquery & Analitik",
    "week": 5,
    "summary": "Teng qiymatlarga bir xil o'rin beruvchi va keyingi o'rinni sakratib o'tuvchi (1, 2, 2, 4...) reyting funksiyasi.",
    "whatItDoes": "Xuddi sport musobaqalaridagi kabi: agar ikki kishi 2-o'rinni bo'lishib olsa, keyingi odamga 3-o'rin berilmaydi, to'g'ridan-to'g'ri 4-o'rin beriladi.",
    "whenToUse": "Talabalar stipendiya reytingini hisoblashda yoki musobaqa sovrindorlarini aniqlashda.",
    "syntax": "RANK() OVER (ORDER BY ball DESC)",
    "combinations": "PARTITION BY bilan birga guruh ichida reyting hisoblaydi.",
    "example": "-- Xodimlarning oylik bo'yicha reytingi (teng bo'lsa bir xil o'rin va sakrash):\nSELECT ename, sal,\n  RANK() OVER (ORDER BY sal DESC) AS oylik_orni\nFROM emp;",
    "gotchas": "Agar ro'yxatda sakrashlar (bo'shliqlar) bo'lmasin desangiz, RANK emas, `DENSE_RANK()` ishlatishingiz kerak.",
    "related": [
      "dense-rank",
      "row-number",
      "over-clause"
    ],
    "keywords": [
      "rank",
      "reyting",
      "sakrash",
      "sport reytingi",
      "window function"
    ]
  },
  {
    "id": "dense-rank",
    "name": "DENSE_RANK() (Sakrashlarsiz Zich Reyting)",
    "category": "5-Hafta • Subquery & Analitik",
    "week": 5,
    "summary": "Teng qiymatlarga bir xil o'rin beruvchi, ammo o'rinlarni sakratmasdan zich ketma-ket (1, 2, 2, 3...) davom ettiruvchi funksiya.",
    "whatItDoes": "Ikkita xodim teng 2-o'rinda bo'lsa ham, keyingi xodimga 4 emas, 3-o'rin beriladi. Hech qanday raqam tashlab ketilmaydi.",
    "whenToUse": "Hayotiy misol: 'Kompaniyada eng ko'p oylik oluvchilar bo'yicha 2-o'rindagi maosh miqdorini toping' (2nd Highest Salary).",
    "syntax": "DENSE_RANK() OVER (ORDER BY sal DESC)",
    "combinations": "Ish intervyularida eng ko'p beriladigan masalalarning kaliti.",
    "example": "-- Kompaniyada 2-eng katta oylikni oluvchi xodimlarni topish:\nWITH reyting AS (\n  SELECT ename, sal,\n    DENSE_RANK() OVER (ORDER BY sal DESC) AS dr\n  FROM emp\n)\nSELECT * FROM reyting WHERE dr = 2;",
    "gotchas": "Imtihon savoli: 'ROW_NUMBER, RANK va DENSE_RANK farqi nima?'. Qiymatlar `100, 100, 50` bo'lsa:\n- ROW_NUMBER: 1, 2, 3\n- RANK: 1, 1, 3\n- DENSE_RANK: 1, 1, 2!",
    "related": [
      "rank-func",
      "row-number",
      "over-clause"
    ],
    "keywords": [
      "dense_rank",
      "dense rank",
      "zich reyting",
      "2nd highest salary",
      "intervyu"
    ]
  },
  {
    "id": "ntile-func",
    "name": "NTILE(k) (Ma'lumotlarni k ta Teng Guruhga Bo'lish)",
    "category": "5-Hafta • Subquery & Analitik",
    "week": 5,
    "summary": "Saralangan ma'lumotlar ro'yxatini ko'rsatilgan sondagi (k ta) teng chelaklarga (kvartil, detsil) taqsimlash.",
    "whatItDoes": "`NTILE(4)` qilsangiz, barcha qatorlarni 4 ta teng guruhga (Kvartillarga: 1, 2, 3, 4) ajratib beradi. Eng yuqori 25% mijozlar 1-guruhga, keyingi 25% 2-guruhga tushadi.",
    "whenToUse": "Mijozlarni xarid hajmiga qarab toifalarga (VIP, Gold, Silver, Bronze) avtomatik ajratishda.",
    "syntax": "NTILE(4) OVER (ORDER BY jami_harid DESC)",
    "combinations": "CASE WHEN bilan birlashtirilib mijoz toifalariga nom beriladi.",
    "example": "-- Mijozlarni 3 ta teng guruhga (Katta, O'rta, Kichik) ajratish:\nSELECT mijoz_id, harid_summasi,\n  NTILE(3) OVER (ORDER BY harid_summasi DESC) AS toifa_guruhi\nFROM mijoz_statistika;",
    "gotchas": "Agar qatorlar soni k ga qoldiqsiz bo'linmasa, ortib qolgan dastlabki qoldiq qatorlar birinchi guruhlarga 1 tadan ortiqcha taqsimlanadi.",
    "related": [
      "over-clause",
      "dense-rank"
    ],
    "keywords": [
      "ntile",
      "kvartil",
      "guruhlash",
      "teng taqsimlash",
      "vip"
    ]
  },
  {
    "id": "lag-lead",
    "name": "LAG() & LEAD() (Oldingi va Keyingi Qator Qiymatini O'qish)",
    "category": "5-Hafta • Subquery & Analitik",
    "week": 5,
    "summary": "O'z-o'ziga JOIN yozmasdan, joriy qatordan oldingi (LAG) yoki keyingi (LEAD) qator qiymatini bir zumda olish.",
    "whatItDoes": "`LAG(ustun, 1)` — bitta oldingi qator qiymatini ko'rsatadi. `LEAD(ustun, 1)` — bitta keyingi qator qiymatini ko'rsatadi.",
    "whenToUse": "Oylik savdo o'sishini (YoY / MoM) hisoblashda: Joriy oy savdosidan oldingi oy savdosini ayirishda.",
    "syntax": "LAG(ustun, qadam, standart_qiymat) OVER (ORDER BY sana)\nLEAD(ustun, qadam, standart_qiymat) OVER (ORDER BY sana)",
    "combinations": "Foizli o'sish: `(joriy - LAG(joriy) OVER (ORDER BY oy)) / LAG(joriy) OVER (...) * 100`.",
    "example": "-- Har bir oylik savdoning oldingi oyga nisbatan o'sishi:\nSELECT oy, savdo_summa,\n  LAG(savdo_summa) OVER (ORDER BY oy) AS oldingi_oy_savdosi,\n  savdo_summa - LAG(savdo_summa) OVER (ORDER BY oy) AS sof_farq\nFROM oylik_hisobot;",
    "gotchas": "Eng birinchi qatorda undan oldingi qator bo'lmagani uchun LAG `NULL` qaytaradi. Buni tuzatish uchun 3-parametrga standart qiymat berish mumkin: `LAG(savdo, 1, 0)`.",
    "related": [
      "over-clause",
      "first-last-value"
    ],
    "keywords": [
      "lag",
      "lead",
      "oldingi qator",
      "keyingi qator",
      "yoy",
      "mom",
      "savdo osishi"
    ]
  },
  {
    "id": "first-last-value",
    "name": "FIRST_VALUE() & LAST_VALUE() (Guruhning Birinchi va Oxirgi Qiymati)",
    "category": "5-Hafta • Subquery & Analitik",
    "week": 5,
    "summary": "Oyna doirasida tartiblangan qatorlarning eng birinchi yoki eng oxirgi qiymatini qaytarish.",
    "whatItDoes": "Har bir xodim yonida bo'limdagi eng kam tajribali yoki eng katta oylik oluvchining ismini biriktirib ko'rsatish imkonini beradi.",
    "whenToUse": "Har bir xaridni mijozning eng birinchi bergan buyurtmasi bilan solishtirishda.",
    "syntax": "FIRST_VALUE(ustun) OVER (PARTITION BY guruh ORDER BY tartib)",
    "combinations": "Oyna freymi (`ROWS BETWEEN`) bilan birga to'g'ri sozlanishi shart.",
    "example": "-- Har bir xodim qatorida o'z bo'limidagi eng katta maoshni ko'rsatish:\nSELECT ename, deptno, sal,\n  FIRST_VALUE(sal) OVER (PARTITION BY deptno ORDER BY sal DESC) AS eng_katta_oylik\nFROM emp;",
    "gotchas": "LAST_VALUE tuzog'i! Standart freym `ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW` bo'lgani uchun, `LAST_VALUE()` butun guruhning oxirgisini emas, joriy qatorning o'zini ko'rsatib qo'yadi! Butun guruh oxirgisini ko'rish uchun `ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING` deb yozish shart!",
    "related": [
      "over-clause",
      "window-frames",
      "lag-lead"
    ],
    "keywords": [
      "first_value",
      "last_value",
      "birinchi qiymat",
      "oxirgi qiymat",
      "window function"
    ]
  },
  {
    "id": "sum-over-running",
    "name": "RUNNING TOTAL (Harakatdagi O'suvchi Jami Balans)",
    "category": "5-Hafta • Subquery & Analitik",
    "week": 5,
    "summary": "Har bir yangi tranzaksiya bilan yig'ilib boruvchi o'suvchi yakuniy hisobni (Cumulative Sum) chiqarish.",
    "whatItDoes": "`SUM(summa) OVER (ORDER BY sana)` deb yozilsa, har bir yangi qatorda oldingi barcha qatorlar qo'shilib, kassa qoldig'i (running balance) hosil bo'ladi.",
    "whenToUse": "Bank ko'chirmalarida: Har bir kirim-chiqimdan so'ng kartada qolgan qoldiq balansni hisoblab borishda.",
    "syntax": "SUM(summa) OVER (PARTITION BY hisob_raqam ORDER BY tranzaksiya_vaqti)",
    "combinations": "`AVG(summa) OVER (...)` orqali harakatdagi siljuvchi o'rtacha (Moving Average) hisoblanadi.",
    "example": "-- O'suvchi kassa balansi:\nSELECT sana, summa,\n  SUM(summa) OVER (ORDER BY sana) AS jami_jamg'arilgan_mablag'\nFROM kassa;",
    "gotchas": "Agar `ORDER BY` ustunida bir xil qiymatlar (masalan bir xil sanalar) bo'lsa, baza ularni bir vaqtda qo'shib yuborishi mumkin. Aniq birma-bir o'sish uchun `ORDER BY sana, id` deb yozish kerak.",
    "related": [
      "over-clause",
      "sum-avg",
      "window-frames"
    ],
    "keywords": [
      "running total",
      "cumulative sum",
      "jamgarma",
      "kassa balansi",
      "harakatdagi yigindi"
    ]
  },
  {
    "id": "window-frames",
    "name": "ROWS BETWEEN (Oyna Freymlari: Unbounded Preceding, Current Row)",
    "category": "5-Hafta • Subquery & Analitik",
    "week": 5,
    "summary": "Oyna funksiyasi aynan joriy qatordan oldingi va keyingi nechta qatorni hisob-kitobga olishini mikroskopik aniqlikda sozlash.",
    "whatItDoes": "1. `UNBOUNDED PRECEDING` — guruhning eng boshidan boshlab.\n2. `CURRENT ROW` — joriy qatorgacha.\n3. `1 PRECEDING AND 1 FOLLOWING` — bitta oldingi va bitta keyingi (3 kunlik siljuvchi oyna).",
    "whenToUse": "Aksiyalar narxining 7 kunlik siljuvchi o'rtacha qiymatini (7-day Moving Average) hisoblashda.",
    "syntax": "AVG(narx) OVER (\n  ORDER BY sana\n  ROWS BETWEEN 3 PRECEDING AND 3 FOLLOWING\n)",
    "combinations": "`ROWS` (aniq qatorlar soni) va `RANGE` (qiymatlar diapazoni) variantlari bor.",
    "example": "-- 3 kunlik siljuvchi o'rtacha narx:\nSELECT sana, narx,\n  ROUND(AVG(narx) OVER (\n    ORDER BY sana\n    ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING\n  ), 2) AS uch_kunlik_ortacha\nFROM aksiya_narxlari;",
    "gotchas": "Freymni noto'g'ri ko'rsatish hisobotlarni xato chiqaradi. Agar hech narsa yozilmasa, standart holat: `RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW` hisoblanadi.",
    "related": [
      "over-clause",
      "first-last-value",
      "sum-over-running"
    ],
    "keywords": [
      "window frames",
      "rows between",
      "unbounded preceding",
      "current row",
      "moving average"
    ]
  },
  {
    "id": "transactions-acid",
    "name": "TRANSACTIONS & ACID (Tranzaksiya va ACID Xususiyatlari)",
    "category": "5-Hafta • Subquery & Analitik",
    "week": 5,
    "summary": "Bir nechta SQL amallarini yagona bo'linmas paket sifatida bajarish va tizim ishonchliligi garovi.",
    "whatItDoes": "ACID xususiyatlari:\n1. A (Atomicity - Bo'linmaslik): Paketdagi barcha buyruqlar yo 100% bajariladi, yoki birortasi ham bajarilmaydi.\n2. C (Consistency - Muvofiqlik): Baza hech qachon qoidalarni buzuvchi holatga tushmaydi.\n3. I (Isolation - Ajratilganlik): Bir vaqtda ishlayotgan tranzaksiyalar bir-biriga xalaqit bermaydi.\n4. D (Durability - Chidamlilik): Tasdiqlangan (COMMIT bo'lgan) ma'lumot svet o'chsa ham diskda omon qoladi.",
    "whenToUse": "Hayotiy misol: Payme orqali kartadan kartaga 100 000 so'm pul o'tkazish. 1-amal: Alining hisobidan 100 000 yechiladi. 2-amal: Valining hisobiga 100 000 qo'shiladi. Agar 1-amal bajarilib, 2-amal paytida server o'chib qolsa nima bo'ladi? Atomicity bo'lmasa pul yo'qolib ketadi!",
    "syntax": "BEGIN TRANSACTION;\n  UPDATE hisob SET balans = balans - 100000 WHERE id = 1;\n  UPDATE hisob SET balans = balans + 100000 WHERE id = 2;\nCOMMIT;",
    "combinations": "COMMIT, ROLLBACK, SAVEPOINT va Izolyatsiya darajalari bilan boshqariladi.",
    "example": "-- Xavfsiz pul o'tkazish tranzaksiyasi:\nBEGIN;\n  UPDATE hisoblar SET balans = balans - 50000 WHERE id = 10;\n  UPDATE hisoblar SET balans = balans + 50000 WHERE id = 20;\nCOMMIT;",
    "gotchas": "Tranzaksiyani ochiq qoldirib ketmang! Agar dastur `BEGIN` qilib, xatolik yuz berganda `ROLLBACK` qilmasa, qatorlar doimiy qulflanib (Deadlock) butun tizim qotib qoladi.",
    "related": [
      "commit-rollback",
      "isolation-levels",
      "concurrency-phenomena"
    ],
    "keywords": [
      "acid",
      "tranzaksiya",
      "atomicity",
      "consistency",
      "isolation",
      "durability",
      "payme"
    ]
  },
  {
    "id": "commit-rollback",
    "name": "COMMIT, ROLLBACK & SAVEPOINT (O'zgarishlarni Boshqarish)",
    "category": "5-Hafta • Subquery & Analitik",
    "week": 5,
    "summary": "Tranzaksiya ichida qilingan barcha o'zgarishlarni bazaga doimiy saqlash (COMMIT) yoki xatolikda bekor qilish (ROLLBACK).",
    "whatItDoes": "`COMMIT` — barcha o'zgarishlarni diskka muhrlaydi. `ROLLBACK` — tranzaksiya boshlangan nuqtaga qaytarib, barcha qilingan o'zgarishlarni bekor qiladi. `SAVEPOINT` — oraliq saqlash nuqtasini qo'yadi.",
    "whenToUse": "To'lov jarayonida yoki bir nechta jadvallarni bir vaqtda yangilashda xatolik yuz bersa tizimni toza saqlashda.",
    "syntax": "BEGIN;\n  INSERT INTO buyurtma ...;\n  SAVEPOINT nuqta1;\n  INSERT INTO buyurtma_tarkibi ...;\n  -- Agar xatolik bo'lsa:\n  ROLLBACK TO nuqta1;\nCOMMIT;",
    "combinations": "Try-Catch bloklari ichida xatolik yuz berganda avtomatik `ROLLBACK` chaqirish bilan ishlatiladi.",
    "example": "BEGIN;\n  DELETE FROM xabarlar WHERE muddat < '2020-01-01';\n  -- Agar xato qilib qo'yganingizni bilsangiz:\n  ROLLBACK;\n  -- Ma'lumotlar joyiga qaytadi!",
    "gotchas": "DDL buyruqlari (masalan `CREATE TABLE`, `DROP TABLE`) ko'p ma'lumotlar bazalarida (MySQL, Oracle) avtomatik COMMIT chaqiradi! Ularni oddiy ROLLBACK bilan orqaga qaytarib bo'lmaydi.",
    "related": [
      "transactions-acid",
      "isolation-levels"
    ],
    "keywords": [
      "commit",
      "rollback",
      "savepoint",
      "tranzaksiya bekor qilish",
      "tcl"
    ]
  },
  {
    "id": "isolation-levels",
    "name": "TRANSACTION ISOLATION LEVELS (Tranzaksiya Izolyatsiya Darajalari)",
    "category": "5-Hafta • Subquery & Analitik",
    "week": 5,
    "summary": "Bir vaqtning o'zida ishlayotgan parallel tranzaksiyalarning bir-biridan qanchalik qat'iy ajratilganlik darajasi.",
    "whatItDoes": "SQL standartida 4 ta daraja bor (quyi darajadan yuqoriga):\n1. `READ UNCOMMITTED` — eng tez, lekin Dirty Read xavfi bor.\n2. `READ COMMITTED` — faqat tasdiqlangan o'zgarishlarni o'qiydi (Standart default).\n3. `REPEATABLE READ` — tranzaksiya davomida bir marta o'qilgan qator qiymati o'zgarmasligi kafolatlanadi.\n4. `SERIALIZABLE` — 100% xavfsiz, go'yo barcha tranzaksiyalar navbatma-navbat bittadan ishlayotgandek, lekin eng sekin.",
    "whenToUse": "Moliyaviy tizimlarda poyga sharoitlari (Race Condition) va xatolar oldini olishda.",
    "syntax": "SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;\nBEGIN;\n  -- amallar ...\nCOMMIT;",
    "combinations": "Locking (qulflash) va MVCC (Multi-Version Concurrency Control) mexanizmlari bilan ta'minlanadi.",
    "example": "SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;\nBEGIN;\n  SELECT SUM(balans) FROM hisoblar;\nCOMMIT;",
    "gotchas": "SERIALIZABLE darajasi haddan tashqari ko'p tranzaksiyalarni 'Serialization Failure' xatosi bilan to'xtatishi mumkin. Dastur ularni qayta urinib ko'rish (Retry) mantig'iga ega bo'lishi lozim.",
    "related": [
      "concurrency-phenomena",
      "transactions-acid"
    ],
    "keywords": [
      "isolation levels",
      "read committed",
      "repeatable read",
      "serializable",
      "izolyatsiya"
    ]
  },
  {
    "id": "concurrency-phenomena",
    "name": "DIRTY READ, NON-REPEATABLE READ & PHANTOM READ (Poyga Tuzoqlari)",
    "category": "5-Hafta • Subquery & Analitik",
    "week": 5,
    "summary": "Parallel tranzaksiyalar to'g'ri izolyatsiya qilinmaganda yuzaga keladigan 3 ta xavfli mantiqiy xatolik.",
    "whatItDoes": "1. Dirty Read: Hali COMMIT qilinmagan (balki bekor bo'ladigan) xom ma'lumotni boshqa odam o'qib olishi.\n2. Non-Repeatable Read: Bitta tranzaksiya ichida bitta qatorni ikki marta o'qiganda ikki xil qiymat chiqishi (chunki oraliqda boshqa odam UPDATE qildi).\n3. Phantom Read: Bitta shart bilan qidirganda ikkinchi safar yangi qatorlar paydo bo'lib qolishi (chunki oraliqda boshqa odam INSERT qildi).",
    "whenToUse": "Bazada ma'lumotlar xavfsizligini ta'minlashda qaysi izolyatsiya darajasini tanlashni to'g'ri hal qilish uchun.",
    "syntax": "-- Izolyatsiya darajalari qaysi anomaliyalardan himoya qiladi:\n-- Read Uncommitted: Hech biridan himoya qilmaydi\n-- Read Committed: Dirty Read dan himoya qiladi\n-- Repeatable Read: Dirty Read va Non-Repeatable Read dan himoya qiladi\n-- Serializable: BARCHASIDAN (Phantom Read dan ham) to'liq himoya qiladi!",
    "combinations": "Bank kartalari, chipta bron qilish (aviatashuvlar, kinoteatr) tizimlarida poyga xatolarini bartaraf etishda o'rganiladi.",
    "example": "-- Kinoteatrda bitta joyni 2 kishi bir vaqtda sotib ololmasligi uchun himoya choralari ko'riladi.",
    "gotchas": "Viva imtihonida eng ko'p qulatadigan savol: 'Non-repeatable read bilan Phantom read ning farqi nima?'. Non-repeatable mavjud qatorning UPDATE bo'lishidan kelib chiqadi, Phantom esa yangi qatorning INSERT bo'lishidan kelib chiqadi!",
    "related": [
      "isolation-levels",
      "transactions-acid"
    ],
    "keywords": [
      "dirty read",
      "non repeatable read",
      "phantom read",
      "anomaliya",
      "poyga",
      "viva"
    ]
  },
  {
    "id": "union-all",
    "name": "UNION vs UNION ALL (Natijalarni Birlashtirish)",
    "category": "6-Hafta • Optimizatsiya & CTE",
    "week": 6,
    "summary": "Ikki yoki undan ortiq SELECT so'rovlari natijalarini bitta umumiy ro'yxatga birlashtirish.",
    "whatItDoes": "1. `UNION` — ikkala so'rov natijasini birlashtiradi va takrorlangan bir xil qatorlarni (dublikatlarni) qidirib o'chirib tashlaydi (saralash xarajati bor).\n2. `UNION ALL` — hech qanday tekshiruvsiz va saralashsiz barcha qatorlarni to'g'ridan-to'g'ri bir-biriga ulab qo'yadi (juda tez ishlaydi).",
    "whenToUse": "Tarixiy arxiv jadvallari bilan joriy yil jadvallarini bitta umumiy hisobotga jamlashda.",
    "syntax": "SELECT ustun1, ustun2 FROM jadval1\nUNION ALL\nSELECT ustun1, ustun2 FROM jadval2\nORDER BY ustun1;",
    "combinations": "Barcha SELECT larda ustunlar soni va ma'lumot turlari bir xil tartibda bo'lishi shart! `ORDER BY` faqat eng oxirgi so'rovdan keyin bitta yoziladi.",
    "example": "-- Barcha mijozlar va barcha yetkazib beruvchilarning telefon raqamlari:\nSELECT kompaniya_nomi, telefon, 'Mijoz' AS toifa FROM mijozlar\nUNION ALL\nSELECT kompaniya_nomi, telefon, 'Yetkazib beruvchi' FROM taminotchilar;",
    "gotchas": "Samaradorlik qoidasi: Agar dublikatlarni yo'qotish biznes talabi bo'lmasa, har doim `UNION ALL` dan foydalaning! Oddiy `UNION` xotirada og'ir saralash (Sort Unique) qiladi va 10x sekinroq ishlaydi.",
    "related": [
      "intersect-operator",
      "except-operator",
      "ra-union"
    ],
    "keywords": [
      "union",
      "union all",
      "birlashtirish",
      "set operator",
      "saralash"
    ]
  },
  {
    "id": "intersect-operator",
    "name": "INTERSECT (Ikkala So'rovda Ham Bor Umumiy Natijalar)",
    "category": "6-Hafta • Optimizatsiya & CTE",
    "week": 6,
    "summary": "Birinchi so'rovda ham, ikkinchi so'rovda ham bir vaqtda mavjud bo'lgan umumiy qatorlarni (kesishmani) topish.",
    "whatItDoes": "Matematik kesishma ($cap$). Faqat ikkala tomonda ham bor qatorlargina natijaga chiqadi. Dublikatlar avtomatik tarzda bittaga keltiriladi.",
    "whenToUse": "Hayotiy misol: 'Ham Toshkent, ham Samarqand filialida bir vaqtda savdo qilgan mijozlar ro'yxatini toping'.",
    "syntax": "SELECT mijoz_id FROM filial_toshkent\nINTERSECT\nSELECT mijoz_id FROM filial_samarqand;",
    "combinations": "Ikki so'rovning ustunlar soni va turlari bir xil bo'lishi shart.",
    "example": "-- Ham ma'lumotlar bazasi, ham dasturlash kursini tanlagan talabalar:\nSELECT talaba_id FROM kurs_yozilish WHERE kurs_id = 'DB101'\nINTERSECT\nSELECT talaba_id FROM kurs_yozilish WHERE kurs_id = 'CS102';",
    "gotchas": "`INNER JOIN` yordamida ham xuddi shu natijaga erishish mumkin va odatda JOIN yirik bazalarda INTERSECT ga qaraganda yaxshiroq optimallashtiriladi.",
    "related": [
      "union-all",
      "except-operator",
      "ra-intersect",
      "inner-join"
    ],
    "keywords": [
      "intersect",
      "kesishma",
      "umumiy qatorlar",
      "set operator"
    ]
  },
  {
    "id": "except-operator",
    "name": "EXCEPT / MINUS (Birinchi So'rovda Bor, Ikkinchisida Yo'q Qatorlar)",
    "category": "6-Hafta • Optimizatsiya & CTE",
    "week": 6,
    "summary": "Birinchi ro'yxatda mavjud bo'lib, ikkinchi ro'yxatda umuman uchramaydigan qatorlarni ayirib olish.",
    "whatItDoes": "PostgreSQL, SQLite va ANSI SQL da `EXCEPT`, Oracle da esa `MINUS` deb ataladi. Birinchi so'rovdan ikkinchi so'rovning barcha mos keluvchilarini kesib tashlaydi.",
    "whenToUse": "Hayotiy misol: 'Ro'yxatdan o'tgan, lekin hali birorta ham to'lov qilmagan mijozlarni topish'.",
    "syntax": "-- PostgreSQL / SQL Server:\nSELECT id FROM mijozlar\nEXCEPT\nSELECT mijoz_id FROM tolovlar;\n\n-- Oracle:\nSELECT id FROM mijozlar\nMINUS\nSELECT mijoz_id FROM tolovlar;",
    "combinations": "`NOT EXISTS` yoki `LEFT JOIN ... WHERE b.id IS NULL` bilan bir xil mantiqiy vazifani bajaradi.",
    "example": "SELECT xodim_id FROM barcha_xodimlar\nEXCEPT\nSELECT masul_id FROM joriy_loyihalar;",
    "gotchas": "Ketma-ketlikka diqqat qiling! `A EXCEPT B` bu $A$ dan $B$ ni ayirishdir. Agar o'rnini almashtirsangiz (`B EXCEPT A`), natija mutlaqo boshqa chiqadi.",
    "related": [
      "union-all",
      "intersect-operator",
      "ra-diff",
      "exists-operator"
    ],
    "keywords": [
      "except",
      "minus",
      "ayirma",
      "set operator",
      "faqat birinchisida"
    ]
  },
  {
    "id": "exists-operator",
    "name": "EXISTS & NOT EXISTS (Mavjudlikni Tezkor Tekshirish)",
    "category": "6-Hafta • Optimizatsiya & CTE",
    "week": 6,
    "summary": "Quyi so'rov kamida 1 ta qator qaytarishini tekshirish. Bitta mos qator topilishi bilanoq qidiruvni to'xtatuvchi eng tezkor operator.",
    "whatItDoes": "Butun jadvalni oxirigacha o'qib chiqmaydi! Shartga mos bitta yozuv topilsa bas, darhol `TRUE` qaytaradi (Short-circuit evaluation). Shu sababli `IN` ga nisbatan katta jadvallarda 10x tezroq ishlaydi.",
    "whenToUse": "'Kamida bitta buyurtma bergan mijozlar' (`EXISTS`) yoki 'Hali birorta ham xarid qilmagan mijozlar' (`NOT EXISTS`).",
    "syntax": "SELECT * FROM mijozlar m\nWHERE EXISTS (\n  SELECT 1 FROM buyurtmalar b WHERE b.mijoz_id = m.id\n);",
    "combinations": "`SELECT 1` yozish odat tusiga kirgan, chunki EXISTS uchun ichki so'rov qanday qiymat qaytarishi emas, shunchaki qator bor yoki yo'qligi muhim.",
    "example": "-- Buyurtmasi bo'lmagan yangi mijozlarni topish (NOT EXISTS usuli - eng tezkor va xavfsiz):\nSELECT m.id, m.fio\nFROM mijozlar m\nWHERE NOT EXISTS (\n  SELECT 1 FROM buyurtmalar b WHERE b.mijoz_id = m.id\n);",
    "gotchas": "`NOT IN` dan farqli o'laroq, `NOT EXISTS` ichki so'rovdagi `NULL` qiymatlardan aslo qo'rqmaydi va xatolikka uchramaydi!",
    "related": [
      "in-operator",
      "correlated-subquery",
      "except-operator"
    ],
    "keywords": [
      "exists",
      "not exists",
      "mavjudlik",
      "select 1",
      "tezkor filtr"
    ]
  },
  {
    "id": "cte-with",
    "name": "WITH (CTE - Common Table Expressions / Umumiy Jadval Ifodalari)",
    "category": "6-Hafta • Optimizatsiya & CTE",
    "week": 6,
    "summary": "Murakkab so'rovlar boshida vaqtinchalik nomlangan jadvallar e'lon qilish va kodni toza, o'qilishi oson holga keltirish.",
    "whatItDoes": "Ichma-ich chigal subquery larni (FROM ichidagi quyi so'rovlarni) zanjirdek ketma-ket, tushunarli mantiqiy bloklarga ajratib yozish imkonini beradi.",
    "whenToUse": "Bir necha bosqichli hisob-kitoblarda: 1-qadamda guruhlash, 2-qadamda reyting qo'yish, 3-qadamda asosiy jadvalga ulash.",
    "syntax": "WITH hisobot AS (\n  SELECT deptno, AVG(sal) AS avg_sal FROM emp GROUP BY deptno\n),\nyuqori_bolimlar AS (\n  SELECT deptno FROM hisobot WHERE avg_sal > 3000000\n)\nSELECT * FROM yuqori_bolimlar;",
    "combinations": "Bitta `WITH` so'zi ostida vergul bilan ajratib bir nechta CTE larni e'lon qilish va ularni bir-biriga ulash mumkin.",
    "example": "-- Har bir viloyat bo'yicha jami savdo va ularning umumiy ulushini hisoblash:\nWITH viloyat_savdo AS (\n  SELECT viloyat, SUM(summa) AS jami FROM savdolar GROUP BY viloyat\n)\nSELECT viloyat, jami,\n  ROUND(jami / (SELECT SUM(jami) FROM viloyat_savdo) * 100, 2) AS ulush_foizi\nFROM viloyat_savdo;",
    "gotchas": "PostgreSQL 12 gacha bo'lgan eski versiyalarda CTE har doim xotiraga yuklanib optimizatorga JOIN larni birlashtirishga xalaqit berardi (Optimization Fence). Yangi versiyalarda baza ularni avtomatik tarzda inline qilib birlashtiradi.",
    "related": [
      "recursive-cte",
      "derived-table",
      "create-view"
    ],
    "keywords": [
      "cte",
      "with",
      "common table expression",
      "nomlangan sorov",
      "toza kod"
    ]
  },
  {
    "id": "recursive-cte",
    "name": "RECURSIVE CTE (Rekursiv CTE — Daraxtsimon Iyerarxiyalar)",
    "category": "6-Hafta • Optimizatsiya & CTE",
    "week": 6,
    "summary": "O'z-o'zini qayta-qayta chaqirib, iyerarxik daraxtlar, tashkilot tuzilmasi yoki kategoriyalar shoxlarini ildizigacha aylanib chiqish.",
    "whatItDoes": "Ikki qismdan iborat bo'ladi:\n1. Anchor Member (Boshlang'ich nuqta) — daraxtning ildizi (masalan Bosh direktor: `mgr IS NULL`).\n2. Recursive Member — topilgan natijaga bo'ysunuvchi keyingi qatorlarni o'qib keluvchi so'rov.\nIkkala qism `UNION ALL` orqali ulanadi va bo'sh qator chiqquncha davom etadi.",
    "whenToUse": "Hayotiy misol: 'Bosh direktor qo'l ostidagi barcha xodimlar va ularning qo'l ostidagilarni darajalari (Level 1, Level 2, Level 3...) bilan to'liq ro'yxatini chiqaring'.",
    "syntax": "WITH RECURSIVE iyerarxiya AS (\n  -- 1. Anchor\n  SELECT empno, ename, mgr, 1 AS daraja\n  FROM emp WHERE mgr IS NULL\n  UNION ALL\n  -- 2. Recursive\n  SELECT e.empno, e.ename, e.mgr, i.daraja + 1\n  FROM emp e\n  JOIN iyerarxiya i ON e.mgr = i.empno\n)\nSELECT * FROM iyerarxiya;",
    "combinations": "Graf yo'nalishlarini (masalan, samolyot yo'nalishlari: Toshkent -> Istanbul -> Frankfurt) topishda eng kuchli vosita.",
    "example": "-- 1 dan 10 gacha bo'lgan sonlar ketma-ketligini generatsiya qilish:\nWITH RECURSIVE sonlar AS (\n  SELECT 1 AS n\n  UNION ALL\n  SELECT n + 1 FROM sonlar WHERE n < 10\n)\nSELECT n FROM sonlar;",
    "gotchas": "Cheksiz halqa (Infinite Loop) xavfi! Agar daraxt ichida sikl bo'lsa (A ning boshlig'i B, B ning boshlig'i A), rekursiv CTE cheksiz aylanib xotirani to'ldiradi. Doimo `WHERE daraja < 100` kabi chegara qo'yish lozim.",
    "related": [
      "cte-with",
      "unary-relationship",
      "self-join"
    ],
    "keywords": [
      "recursive cte",
      "with recursive",
      "daraxt",
      "iyerarxiya",
      "tashkilot tuzilmasi",
      "graf"
    ]
  },
  {
    "id": "create-view",
    "name": "CREATE VIEW (Virtual Ko'rinish Yaratish)",
    "category": "6-Hafta • Optimizatsiya & CTE",
    "week": 6,
    "summary": "Murakkab so'rovni diskda alohida jadval qilib saqlamasdan, virtual jadval ko'rinishida nomlab qo'yish.",
    "whatItDoes": "View o'zida jismoniy ma'lumotlarni saqlamaydi, u faqat SQL so'rovining shablonini (matnini) saqlaydi. Har safar `SELECT * FROM view_nomi` deb chaqirilganda, orqa fonda uning ichidagi asosiy so'rov ishga tushadi.",
    "whenToUse": "1. Xavfsizlik: Xodimlarga jadvallarni ko'rsatish, lekin ulardan maxfiy maosh yoki pasport ustunlarini yashirish.\n2. Soddalashtirish: 5 ta jadvalni JOIN qiluvchi murakkab so'rovni bitta qisqa nom bilan qayta-qayta ishlatish.",
    "syntax": "CREATE OR REPLACE VIEW view_nomi AS\nSELECT ustun1, ustun2 FROM jadval WHERE shart;",
    "combinations": "`WITH CHECK OPTION` bilan birga view orqali noto'g'ri ma'lumotlar qo'shilishini bloklash mumkin.",
    "example": "-- Xodimlar haqida ommaviy xavfsiz ko'rinish (oylik ko'rsatilmaydi):\nCREATE VIEW v_xodimlar_ommaviy AS\nSELECT empno, ename, job, deptno\nFROM emp;",
    "gotchas": "View virtual bo'lgani uchun har bir murojaatda asosiy jadvallarni qaytadan o'qiydi. Agar so'rov juda og'ir bo'lsa, har safar sekin ishlaydi. Bunday holatda natijani keshlovchi `MATERIALIZED VIEW` kerak.",
    "related": [
      "materialized-view",
      "view-check-option",
      "create-table"
    ],
    "keywords": [
      "view",
      "create view",
      "virtual jadval",
      "xavfsizlik",
      "ddl"
    ]
  },
  {
    "id": "materialized-view",
    "name": "MATERIALIZED VIEW (Xotirada Saqlanuvchi Kesh Jadval)",
    "category": "6-Hafta • Optimizatsiya & CTE",
    "week": 6,
    "summary": "Murakkab so'rov natijalarini hisoblab, diskka jismoniy jadval ko'rinishida muhrlab qo'yuvchi tezkor kesh View.",
    "whatItDoes": "Oddiy View dan farqli o'laroq, so'rov natijasi jismoniy saqlanadi va uning ustiga o'zining shaxsiy indekslarini qurish mumkin. Natijada 3 daqiqa davom etadigan og'ir hisobot 2 millisekundda ochiladi!",
    "whenToUse": "Tahliliy hisobotlar (BI, Dashboards), millionlab tranzaksiyalarning oylik yig'indilari.",
    "syntax": "-- Yaratish:\nCREATE MATERIALIZED VIEW mv_oylik_savdo AS\nSELECT viloyat, SUM(summa) AS jami\nFROM savdolar GROUP BY viloyat;\n\n-- Yangilash:\nREFRESH MATERIALIZED VIEW mv_oylik_savdo;",
    "combinations": "`REFRESH MATERIALIZED VIEW CONCURRENTLY` (noyob indeks bo'lsa) o'qish so'rovlarini to'xtatmasdan orqa fonda yangilaydi.",
    "example": "CREATE UNIQUE INDEX idx_mv_viloyat ON mv_oylik_savdo (viloyat);\nREFRESH MATERIALIZED VIEW CONCURRENTLY mv_oylik_savdo;",
    "gotchas": "Materialized View real vaqtda avtomatik yangilanmaydi! Agar asosiy jadvalga yangi tovar kelsa, `REFRESH` buyrug'i chaqirilmaguncha u bu view da ko'rinmaydi (ma'lumot eskiradi). Odatda u har soatda Cron orqali yangilanadi.",
    "related": [
      "create-view",
      "create-index"
    ],
    "keywords": [
      "materialized view",
      "refresh",
      "kesh",
      "dashboard",
      "analitika",
      "tezlashtirish"
    ]
  },
  {
    "id": "view-check-option",
    "name": "WITH CHECK OPTION (View Orqali Qoidabuzar Yozuvlarni Bloklash)",
    "category": "6-Hafta • Optimizatsiya & CTE",
    "week": 6,
    "summary": "View orqali INSERT yoki UPDATE qilinganda, yangi ma'lumot view ning WHERE shartiga mos kelishini majburiy tekshirish.",
    "whatItDoes": "Agar View faqat `deptno = 20` bo'lgan xodimlarni ko'rsatsa, kimdir bu View orqali `deptno = 30` qilib yozuv qo'shishga urinsa, baza buni taqiqlaydi va xatolik beradi.",
    "whenToUse": "Foydalanuvchilarga faqat o'z bo'limiga tegishli ma'lumotlarni tahrirlash huquqini berishda.",
    "syntax": "CREATE VIEW v_toshkent_mijozlari AS\nSELECT * FROM mijozlar WHERE shahar = 'Toshkent'\nWITH CHECK OPTION;",
    "combinations": "`WITH LOCAL CHECK OPTION` va `WITH CASCADED CHECK OPTION` darajalari mavjud.",
    "example": "-- Shahar Toshkent bo'lmagan yozuvlarni kiritish taqiqlanadi:\nINSERT INTO v_toshkent_mijozlari (fio, shahar) VALUES ('Vali', 'Samarqand');\n-- ERROR: new row violates check option for view 'v_toshkent_mijozlari'",
    "gotchas": "Agar `WITH CHECK OPTION` yozilmasa, foydalanuvchi view orqali shartga mos kelmaydigan ma'lumotni kiritib yuborishi mumkin va o'zi kiritgan ma'lumot view dan darhol yo'qolib qolib chalkashlik keltirib chiqaradi.",
    "related": [
      "create-view",
      "check-constraint"
    ],
    "keywords": [
      "with check option",
      "view check option",
      "xavfsizlik",
      "updatable view"
    ]
  },
  {
    "id": "create-index",
    "name": "CREATE INDEX (B-Tree Indeks — Qidiruvni 100x Tezlashtirish)",
    "category": "6-Hafta • Optimizatsiya & CTE",
    "week": 6,
    "summary": "Kitob oxiridagi mundarijaga o'xshab, jadval qatorlarini diskda birma-bir varaqlamasdan, soniyaning mingdan birida topish imkonini beruvchi struktura.",
    "whatItDoes": "Standart B-Tree (Balanslashgan Daraxt) quradi. Qidiruv murakkabligi $O(N)$ dan $O(log N)$ ga tushadi. Masalan, 1 000 000 qatorli jadvaldan kerakli qatorni topish uchun 1 000 000 ta operatsiya emas, atigi 20 ta operatsiya yetarli bo'ladi!",
    "whenToUse": "WHERE, JOIN ON, ORDER BY va GROUP BY qismlarida tez-tez ishlatiladigan ustunlarga qo'yiladi.",
    "syntax": "CREATE INDEX idx_xodim_familiya ON xodimlar (familiya);",
    "combinations": "Ko'p ustunli (Composite Index) yoki Funksional indekslar (`UPPER(email)`) yaratilishi mumkin.",
    "example": "-- Mijozning telefon raqami bo'yicha chaqmoqdek tez qidiruv:\nCREATE INDEX idx_mijoz_telefon ON mijozlar (telefon);",
    "gotchas": "Indekslar bepul emas! Har bir indeks diskdan qo'shimcha joy oladi va har safar `INSERT`, `UPDATE`, `DELETE` qilinganda indeks daraxti qayta quriladi (yozish sekinlashadi). Keraksiz har bir ustunga duch kelgancha indeks qo'yib tashlamang!",
    "related": [
      "unique-index",
      "composite-index",
      "index-types",
      "index-pitfalls"
    ],
    "keywords": [
      "index",
      "create index",
      "b-tree",
      "tezlashtirish",
      "optimizatsiya",
      "mundarija"
    ]
  },
  {
    "id": "unique-index",
    "name": "CREATE UNIQUE INDEX (Noyob Indeks)",
    "category": "6-Hafta • Optimizatsiya & CTE",
    "week": 6,
    "summary": "Bir vaqtning o'zida ham qidiruvni tezlashtiruvchi, ham ustundagi qiymatlarning unikal (takrorlanmas) bo'lishini ta'minlovchi indeks.",
    "whatItDoes": "Dublikat yozuv kiritilishiga yo'l qo'ymaydi. Baza `PRIMARY KEY` yoki `UNIQUE` cheklovi e'lon qilinganda orqa fonda aynan UNIQUE INDEX yaratadi.",
    "whenToUse": "Pasport seriyasi, telefon raqam, email yoki akkaunt loginlarini himoyalashda.",
    "syntax": "CREATE UNIQUE INDEX idx_uq_email ON foydalanuvchilar (LOWER(email));",
    "combinations": "Shartli indeks (Partial Unique Index) bilan birgalikda: `WHERE status = 'ACTIVE'` (faqat faol akkauntlar unikal bo'lsin).",
    "example": "CREATE UNIQUE INDEX uq_shartnoma_raqam ON shartnomalar (shartnoma_raqami);",
    "gotchas": "Agar jadvalda allaqachon dublikat yozuvlar mavjud bo'lsa, UNIQUE INDEX yaratish xatolik beradi. Avval dublikatlarni tozalab olish shart.",
    "related": [
      "create-index",
      "unique-constraint",
      "primary-key"
    ],
    "keywords": [
      "unique index",
      "noyob indeks",
      "unikal",
      "b-tree",
      "dublikat taqiqlash"
    ]
  },
  {
    "id": "composite-index",
    "name": "COMPOSITE INDEX & LEFTMOST PREFIX (Ko'p Ustunli Indeks)",
    "category": "6-Hafta • Optimizatsiya & CTE",
    "week": 6,
    "summary": "Bir nechta ustunlarni birgalikda indekslash va 'Chapdan O'ngga Qoidasi' (Leftmost Prefix Rule).",
    "whatItDoes": "Agar indeks `(viloyat, shahar, tuman)` deb yaratilgan bo'lsa, u telefon kitobidagi kabi tartiblanadi. U quyidagi qidiruvlarni tezlashtiradi:\n1. Faqat `viloyat` bo'yicha\n2. `viloyat + shahar` bo'yicha\n3. `viloyat + shahar + tuman` bo'yicha.",
    "whenToUse": "So'rovlarda bir vaqtda 2-3 ta ustun bo'yicha filtrlash yoki saralash qilinganda (`WHERE deptno = 10 ORDER BY sal DESC`).",
    "syntax": "CREATE INDEX idx_emp_dept_sal ON emp (deptno, sal DESC);",
    "combinations": "Covering Index (Index Only Scan) imkonini beradi: agar so'ralgan barcha ustunlar indeks ichida bo'lsa, asosiy jadvalga umuman kirmaydi!",
    "example": "CREATE INDEX idx_buyurtma_mijoz_sana ON buyurtmalar (mijoz_id, buyurtma_sanasi DESC);",
    "gotchas": "Leftmost Prefix qoidasi! Agar siz indeksning birinchi ustunini (`viloyat` ni) tashlab, to'g'ridan-to'g'ri `WHERE shahar = 'Chilonzor'` deb qidirsangiz, bu indeks UMUMAN ISHLAMAYDI! Ustunlar tartibi eng ko'p filtrlanadigan ustundan boshlanishi shart.",
    "related": [
      "create-index",
      "index-pitfalls",
      "seq-vs-index-scan"
    ],
    "keywords": [
      "composite index",
      "leftmost prefix",
      "kop ustunli",
      "covering index",
      "optimizatsiya"
    ]
  },
  {
    "id": "index-types",
    "name": "B-TREE, HASH, BITMAP & GIN INDEX (Indeks Turlari)",
    "category": "6-Hafta • Optimizatsiya & CTE",
    "week": 6,
    "summary": "Turli xil ma'lumot turlari va qidiruv ehtiyojlari uchun mo'ljallangan maxsus indeks tuzilmalari.",
    "whatItDoes": "1. `B-Tree` (Standart) — tenglik (`=`), diapazonlar (`BETWEEN, <, >`) va saralash (`ORDER BY`) uchun ideal.\n2. `Hash Index` — faqat aniq tenglik (`=`) uchun O(1) chaqmoq tezlik, lekin diapazonlarda ishlamaydi.\n3. `Bitmap Index` (Oracle) — kam xillikka ega ustunlar (Jins: Erkak/Ayol, Status) uchun o'ta kam joy oladi.\n4. `GIN / GiST` (PostgreSQL) — massivlar, JSONB va Full-Text qidiruv uchun.",
    "whenToUse": "To'g'ri ma'lumot turiga to'g'ri indeks tanlashda.",
    "syntax": "-- PostgreSQL Hash Index:\nCREATE INDEX idx_sessiya_token ON sessiyalar USING HASH (token);\n\n-- GIN Index (JSON uchun):\nCREATE INDEX idx_json_meta ON tovarlar USING GIN (xususiyatlar);",
    "combinations": "EXPLAIN orqali indeksning samaradorligi tekshiriladi.",
    "example": "-- JSONB ustunidan tezkor qidirish uchun GIN indeks:\nCREATE INDEX idx_tovar_param ON tovarlar USING GIN (parametrlar jsonb_path_ops);",
    "gotchas": "OLTP (tez-tez yangilanuvchi) tizimlarda Bitmap indeks qo'ymang! Chunki bitta qator yangilanganda butun bir blok qulflanadi va parallel foydalanuvchilar to'xtab qoladi.",
    "related": [
      "create-index",
      "explain-plan"
    ],
    "keywords": [
      "b-tree",
      "hash index",
      "bitmap index",
      "gin",
      "gist",
      "indeks turlari"
    ]
  },
  {
    "id": "index-pitfalls",
    "name": "INDEX PITFALLS (Indeks Qachon Ishlamaydi? Qora Tuzoqlar)",
    "category": "6-Hafta • Optimizatsiya & CTE",
    "week": 6,
    "summary": "Dasturchilar yo'l qo'yadigan va indeksni o'chirib qo'yadigan (ishlamasligiga olib keladigan) 5 ta asosiy xato.",
    "whatItDoes": "1. Ustun ustida funksiya chaqirish: `WHERE YEAR(sana) = 2024` (Indeks o'ladi! To'g'risi: `WHERE sana >= '2024-01-01' AND sana < '2025-01-01'`).\n2. Boshidan foiz bilan qidirish: `WHERE ism LIKE '%bek'` (Indeks ishlamaydi!).\n3. Tur mos kelmasligi (Implicit Type Cast): `WHERE telefon = 99890123` (telefon VARCHAR bo'lsa indeks ishlamaydi, `WHERE telefon = '99890123'` deb yozish shart).\n4. Arifmetik amallar: `WHERE oylik * 12 > 100000000` (To'g'risi: `WHERE oylik > 100000000 / 12`).\n5. NOT EQUAL (`!=, <>`) ko'pincha indeksdan foydalana olmaydi.",
    "whenToUse": "Sekin ishlayotgan so'rovlarni tahlil qilish va ularni 10x tezlashtirishda.",
    "syntax": "-- XATO (Sekin):\nWHERE EXTRACT(YEAR FROM sana) = 2024\n\n-- TO'G'RI (Indeks ishlaydi):\nWHERE sana >= '2024-01-01' AND sana < '2025-01-01'",
    "combinations": "Bunday holatlarda 'Function-based Index' (`CREATE INDEX ON jadval (LOWER(email))`) yordamga keladi.",
    "example": "-- So'rovni indeksga moslab to'g'rilash:\n-- Xato: WHERE oylik + 500000 > 5000000;\n-- To'g'ri: WHERE oylik > 4500000; -- Indeks to'liq ishlaydi!",
    "gotchas": "Viva va ish intervyusining eng sevimli amaliy savoli! Sizga sekin so'rov beriladi va 'Nega indeks ishlamayapti?' deb so'raladi. Javob: Ustun funksiya yoki arifmetika ichiga o'ralgan!",
    "related": [
      "create-index",
      "explain-plan",
      "query-tuning"
    ],
    "keywords": [
      "index pitfalls",
      "indeks tuzoqlari",
      "sekin sorov",
      "like foiz",
      "funksiya tuzogi"
    ]
  },
  {
    "id": "explain-plan",
    "name": "EXPLAIN / EXPLAIN ANALYZE (Ijro Rejasini Tahlil Qilish)",
    "category": "6-Hafta • Optimizatsiya & CTE",
    "week": 6,
    "summary": "Ma'lumotlar bazasi optimizatori so'rovni qanday ketma-ketlikda bajarishini va qancha resurs sarflashini ko'rsatuvchi rentgen.",
    "whatItDoes": "Baza so'rovingizni bajarishdan oldin ijro rejasini (Query Execution Plan) tuzadi: qaysi indeksni tanlaydi, qaysi JOIN algoritmini ishlatadi, qancha xotira va vaqt ketadi (Cost & Time). `EXPLAIN ANALYZE` esa so'rovni haqiqatda bajarib, aniq millisekundlarni ko'rsatadi.",
    "whenToUse": "So'rov kutilganidan sekin ishlayotganda uning 'og'riqli nuqtasi' (Bottleneck) qayerda ekanini aniqlashda.",
    "syntax": "EXPLAIN ANALYZE\nSELECT * FROM xodimlar WHERE bolim_id = 10;",
    "combinations": "Natijadagi `Seq Scan`, `Index Scan`, `Hash Join`, `Nested Loop` kabi tugunlar o'rganiladi.",
    "example": "-- Ijro rejasini chiqarish:\nEXPLAIN\nSELECT e.ename, d.dname\nFROM emp e JOIN dept d ON e.deptno = d.deptno;",
    "gotchas": "EXPLAIN ANALYZE so'rovni haqiqatda ishga tushiradi! Agar `EXPLAIN ANALYZE DELETE FROM mijozlar` deb yozsangiz, u nafaqat rejasini ko'rsatadi, balki mijozlarni chindan ham o'chirib yuboradi! Shuning uchun uni ehtiyotkorlik bilan tranzaksiya ichida tekshirish lozim.",
    "related": [
      "seq-vs-index-scan",
      "hash-join",
      "nested-loop-join",
      "merge-join"
    ],
    "keywords": [
      "explain",
      "explain analyze",
      "ijro rejasi",
      "execution plan",
      "cost",
      "optimizatsiya"
    ]
  },
  {
    "id": "seq-vs-index-scan",
    "name": "SEQ SCAN vs INDEX SCAN vs INDEX ONLY SCAN (Baza Qanday O'qiydi?)",
    "category": "6-Hafta • Optimizatsiya & CTE",
    "week": 6,
    "summary": "Optimizator jadvaldan ma'lumotlarni qidirishda tanlaydigan 3 ta asosiy strategiya.",
    "whatItDoes": "1. `Seq Scan` (Table Scan) — jadvaldagi barcha qatorlarni boshidan oxirigacha birma-bir o'qib chiqadi (katta jadvallarda juda sekin).\n2. `Index Scan` — indeks daraxtidan kerakli qator manzilini (TID/ROWID) topadi, so'ngra diskka borib asosiy jadvaldan qolgan ustunlarni o'qiydi.\n3. `Index Only Scan` — eng mukammal holat! Barcha kerakli ustunlar indeksning o'zida bor, asosiy jadvalga (diskka) borish umuman talab etilmaydi!",
    "whenToUse": "EXPLAIN natijasini tushunish va 'Index Only Scan' darajasiga erishish uchun indekslarni sozlashda.",
    "syntax": "-- EXPLAIN natijasida ko'rinadigan tugunlar:\n-- -> Seq Scan on mijozlar\n-- -> Index Scan using idx_telefon on mijozlar\n-- -> Index Only Scan using idx_mijoz_fio_tel on mijozlar",
    "combinations": "Composite Covering Index tuzish orqali `Index Only Scan` ga erishiladi.",
    "example": "-- Index Only Scan ga misol:\nCREATE INDEX idx_emp_dept_sal ON emp (deptno, sal);\n-- Quyidagi so'rov faqat indeksdan o'qiladi:\nEXPLAIN SELECT deptno, sal FROM emp WHERE deptno = 10;",
    "gotchas": "Kichik jadvallarda (masalan 100 qatorli jadval) hatto indeks bo'lsa ham baza atayin `Seq Scan` qiladi! Chunki 100 qatorni to'g'ridan-to'g'ri o'qish indeksga kirib-chiqishdan ko'ra tezroqdir. Bu xatolik emas, optimizatorning to'g'ri qaroridir.",
    "related": [
      "explain-plan",
      "create-index",
      "composite-index"
    ],
    "keywords": [
      "seq scan",
      "index scan",
      "index only scan",
      "table scan",
      "ijro rejasi"
    ]
  },
  {
    "id": "nested-loop-join",
    "name": "NESTED LOOP JOIN (Ichma-ich Halqali Birlashtirish)",
    "category": "6-Hafta • Optimizatsiya & CTE",
    "week": 6,
    "summary": "Birinchi jadvalning har bir qatori uchun ikkinchi jadvaldagi mos qatorni indeks orqali qidiruvchi JOIN algoritmi.",
    "whatItDoes": "Dasturlashdagi oddiy `for` tsikli: `for rowA in tableA: for rowB in tableB: if match: yield (rowA, rowB)`. Agar ichki jadval indekslangan bo'lsa va tashqi jadval kichik bo'lsa, eng tezkor algoritm hisoblanadi.",
    "whenToUse": "Bitta kichik jadvalni ikkinchi katta indekslangan jadvalga ulayotganda va natijada oz sonli qatorlar chiqishi kutilganda.",
    "syntax": "-- Optimizator tomonidan avtomatik tanlanadi:\n-- -> Nested Loop\n--    -> Seq Scan on kichik_jadval\n--    -> Index Scan on katta_jadval using idx_fk",
    "combinations": "Oracle da `/*+ USE_NL(a b) */` HINT orqali majburlash mumkin.",
    "example": "-- 1 ta aniq buyurtmaga tegishli tovarlarni olishda Nested Loop ishlaydi:\nSELECT * FROM buyurtma b JOIN buyurtma_tarkibi t ON b.id = t.buyurtma_id\nWHERE b.id = 500;",
    "gotchas": "Agar ichki jadvalda indeks bo'lmasa va ikkala jadval ham katta bo'lsa, Nested Loop falokatga aylanadi ($O(N \times M)$ operatsiya bajariladi)!",
    "related": [
      "hash-join",
      "merge-join",
      "explain-plan"
    ],
    "keywords": [
      "nested loop",
      "join algoritmi",
      "for tsikli",
      "kichik jadval",
      "optimizator"
    ]
  },
  {
    "id": "hash-join",
    "name": "HASH JOIN (Xotirada Hash Birlashtirish)",
    "category": "6-Hafta • Optimizatsiya & CTE",
    "week": 6,
    "summary": "Katta hajmli jadvallarni bir-biriga ulashda eng tezkor ishlaydigan relyatsion JOIN ijro algoritmi.",
    "whatItDoes": "1. Build bosqichi: Kichikroq jadvalni xotiraga (RAM) yuklab, bog'lanish ustuni bo'yicha tezkor Hash Table quradi.\n2. Probe bosqichi: Ikkinchi katta jadvalni bir marta o'qib, xotiradagi hash-jadval orqali bir zumda juftlarini topadi ($O(N + M)$ tezlikda).",
    "whenToUse": "Indekslanmagan yirik jadvallarni tenglik (`=`) sharti bilan bog'laganda va Data Warehouse tahliliy so'rovlarida.",
    "syntax": "-- EXPLAIN natijasida ko'rinadi:\n-- -> Hash Join (e.deptno = d.deptno)\n--    -> Seq Scan on dept d\n--    -> Hash\n--       -> Seq Scan on emp e",
    "combinations": "Equi-join (`=`) shartlarida optimizator tomonidan eng afzal ko'riladi.",
    "example": "SELECT e.ename, d.dname\nFROM katta_xodimlar e JOIN katta_bolimlar d ON e.deptno = d.deptno;",
    "gotchas": "Hash Join faqat tenglik (`=`) shartida ishlaydi! No-tenglik shartlarida (`<`, `>`, `BETWEEN`) Hash Join ishlamaydi. Shuningdek agar hash-jadval xotiraga (RAM) sig'masa, diskka tushib (Spill to Disk) sekinlashadi.",
    "related": [
      "nested-loop-join",
      "merge-join",
      "explain-plan"
    ],
    "keywords": [
      "hash join",
      "join algoritmi",
      "ram",
      "hash table",
      "optimizatsiya"
    ]
  },
  {
    "id": "merge-join",
    "name": "MERGE JOIN / SORT-MERGE JOIN (Saralangan Birlashtirish)",
    "category": "6-Hafta • Optimizatsiya & CTE",
    "week": 6,
    "summary": "Ikkala jadval ham bog'lanish ustuni bo'yicha oldindan saralangan bo'lsa, ularni xuddi ikkita lentadek parallel ulab ketuvchi algoritm.",
    "whatItDoes": "Ikkala saralangan ro'yxatni boshidan boshlab bitta yurishda birlashtiradi ($O(N + M)$). Agar jadvallar oldindan saralanmagan bo'lsa, avval ularni saralaydi (Sort-Merge Join).",
    "whenToUse": "Katta jadvallar bog'lanish ustunlari bo'yicha allaqachon B-Tree indeksga ega bo'lsa yoki katta hajmdagi ma'lumotlarni tenglik/tengsizlik shartlari bilan birlashtirishda.",
    "syntax": "-- EXPLAIN da ko'rinishi:\n-- -> Merge Join (e.deptno = d.deptno)\n--    -> Index Scan on dept (deptno bo'yicha saralangan)\n--    -> Index Scan on emp (deptno bo'yicha saralangan)",
    "combinations": "B-Tree indekslari saralangan tartibda saqlangani uchun Merge Join B-Tree bilan mukammal ishlaydi.",
    "example": "SELECT * FROM savdolar s JOIN tolovlar t ON s.id = t.savdo_id;",
    "gotchas": "Agar jadvallarda indeks bo'lmasa, baza avval ikkala ulkan jadvalni ham saralashga majbur bo'ladi (Sort bosqichi) va bu ko'p vaqt oladi.",
    "related": [
      "hash-join",
      "nested-loop-join",
      "explain-plan"
    ],
    "keywords": [
      "merge join",
      "sort merge join",
      "saralangan",
      "join algoritmi"
    ]
  },
  {
    "id": "query-tuning",
    "name": "QUERY TUNING (So'rovlarni 10x Tezlashtirishning Oltin Qoidalari)",
    "category": "6-Hafta • Optimizatsiya & CTE",
    "week": 6,
    "summary": "Sekin ishlayotgan ma'lumotlar bazasi so'rovlarini tahlil qilib, ularni chaqmoqdek tezlashtirishning 10 ta amaliy qoidasi.",
    "whatItDoes": "1. Hech qachon `SELECT *` yozmang (faqat kerakli ustunlarni oling).\n2. Ustun ustiga funksiya o'ramang (`WHERE YEAR(sana) = 2024` emas, `WHERE sana >= ...`).\n3. LIKE qidiruvini foiz bilan boshlamang (`'%soz'` B-Tree ni o'ldiradi).\n4. `NOT IN` o'rniga doimo `NOT EXISTS` ishlating.\n5. `UNION` o'rniga iloji boricha `UNION ALL` ishlating.\n6. Foreign Key ustunlariga ALBATTA indeks qo'ying (JOIN lar tezlashishi uchun).\n7. Ko'p qavatli subquery larni `JOIN` yoki `CTE` ga o'giring.\n8. LIMIT bilan sahifalashda Keyset Pagination (`WHERE id > last_id`) dan foydalaning.\n9. Kam xillikli ustunlar (jins, status) ga yolg'iz B-Tree indeks qo'ymang.\n10. EXPLAIN ANALYZE orqali har bir sekin so'rovning rentgenini ko'ring.",
    "whenToUse": "VIVA imtihonida, kurs ishi loyihasida va har qanday real korporativ tizimni ishlab chiqishda.",
    "syntax": "-- Optimallashtirish tekshiruv shabloni:\nEXPLAIN (ANALYZE, BUFFERS)\nSELECT ... ;",
    "combinations": "Indekslash, Tranzaksiya qulflarini kamaytirish va Partitsiyalash (Table Partitioning) bilan birga qo'llaniladi.",
    "example": "-- Oldin (Sekin - 1400ms):\n-- SELECT * FROM buyurtmalar WHERE EXTRACT(YEAR FROM sana) = 2024 AND status = 'DONE';\n\n-- Keyin (Tez - 4ms, 350x tezroq!):\n-- CREATE INDEX idx_buyurtma_sana_status ON buyurtmalar (sana, status);\n-- SELECT id, summa FROM buyurtmalar WHERE sana >= '2024-01-01' AND sana < '2025-01-01' AND status = 'DONE';",
    "gotchas": "Premature Optimization (Erta optimallashtirish) qilmang! Avval so'rovni to'g'ri va toza yozing. So'ngra EXPLAIN orqali qayeri sekinligini ko'rib, aynan o'sha joyiga aniq indeks qo'ying.",
    "related": [
      "explain-plan",
      "create-index",
      "index-pitfalls"
    ],
    "keywords": [
      "query tuning",
      "optimizatsiya",
      "tezlashtirish",
      "oltin qoidalar",
      "viva tayyorgarlik"
    ]
  }
];

  if (typeof window !== 'undefined') {
    window.databaseDictionary = DICTIONARY_DATA;
  }

  // Class: DatabaseEncyclopedia
  class DatabaseEncyclopedia {
    constructor() {
      this.data = DICTIONARY_DATA;
      this.currentCategory = 'all';
      this.searchQuery = '';
      this.selectedItem = this.data[0];
      this.initModal();
      this.bindEvents();
    }

    initModal() {
      if (document.getElementById('encyclopediaModal')) return;

      const modalHtml = `
        <div class="dict-modal-backdrop" id="encyclopediaModal">
          <div class="dict-modal-card">
            <!-- Modal Header -->
            <div class="dict-header">
              <div class="dict-title-box">
                <div class="dict-emblem">🔍</div>
                <div>
                  <div class="dict-title">
                    <span>SQL & Ma'lumotlar Bazasi Entsiklopedik Lug'ati</span>
                  </div>
                  <div class="dict-sub">Barcha 6 haftalik komandalari, funksiyalari, sintaksisi va qoidalari (100+ ta)</div>
                </div>
              </div>
              <button class="dict-close-btn" id="dictCloseBtn" title="Yopish (Esc)">✕</button>
            </div>

            <!-- Search Bar & Category Filter -->
            <div class="dict-controls">
              <div class="dict-search-wrap">
                <span class="dict-search-icon">🔍</span>
                <input 
                  type="text" 
                  class="dict-search-input" 
                  id="dictSearchInput" 
                  placeholder="Komanda yoki funksiyani yozing (Masalan: COALESCE, NVL, INNER JOIN, BCNF, GROUP BY)..." 
                  autocomplete="off" 
                  spellcheck="false"
                />
                <button class="dict-search-clear" id="dictSearchClear" title="Tozalash">✕</button>
              </div>

              <!-- Category Chips -->
              <div class="dict-filter-chips" id="dictCategoryChips">
                <button class="dict-chip active" data-cat="all">
                  Barchasi <span class="dict-chip-count">${this.data.length}</span>
                </button>
                <button class="dict-chip" data-cat="1">
                  1-Hafta: EER Modeli <span class="dict-chip-count">${this.data.filter(d => d.week === 1).length}</span>
                </button>
                <button class="dict-chip" data-cat="2">
                  2-Hafta: Relatsion & 1NF-BCNF <span class="dict-chip-count">${this.data.filter(d => d.week === 2).length}</span>
                </button>
                <button class="dict-chip" data-cat="3">
                  3-Hafta: SQL DDL & DML <span class="dict-chip-count">${this.data.filter(d => d.week === 3).length}</span>
                </button>
                <button class="dict-chip" data-cat="4">
                  4-Hafta: JOIN & Funksiyalar <span class="dict-chip-count">${this.data.filter(d => d.week === 4).length}</span>
                </button>
                <button class="dict-chip" data-cat="5">
                  5-Hafta: Subquery & Analitik <span class="dict-chip-count">${this.data.filter(d => d.week === 5).length}</span>
                </button>
                <button class="dict-chip" data-cat="6">
                  6-Hafta: Optimizatsiya & CTE <span class="dict-chip-count">${this.data.filter(d => d.week === 6).length}</span>
                </button>
              </div>
            </div>

            <!-- Master-Detail Body -->
            <div class="dict-body" id="dictBody">
              <!-- Left List Pane -->
              <div class="dict-list-pane" id="dictListPane"></div>

              <!-- Right Detail Pane -->
              <div class="dict-detail-pane" id="dictDetailPane"></div>
            </div>
          </div>
        </div>
      `;

      document.body.insertAdjacentHTML('beforeend', modalHtml);
      this.modalEl = document.getElementById('encyclopediaModal');
      this.listEl = document.getElementById('dictListPane');
      this.detailEl = document.getElementById('dictDetailPane');
      this.searchInput = document.getElementById('dictSearchInput');
      this.clearBtn = document.getElementById('dictSearchClear');
      this.bodyEl = document.getElementById('dictBody');

      this.renderList();
      this.renderDetail(this.selectedItem);
    }

    bindEvents() {
      // 1. Search Input typing
      this.searchInput?.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.trim().toLowerCase();
        if (this.clearBtn) {
          this.clearBtn.style.display = this.searchQuery ? 'block' : 'none';
        }
        this.renderList();
      });

      this.clearBtn?.addEventListener('click', () => {
        this.searchInput.value = '';
        this.searchQuery = '';
        this.clearBtn.style.display = 'none';
        this.searchInput.focus();
        this.renderList();
      });

      // 2. Category Chips
      const chips = document.querySelectorAll('.dict-chip');
      chips.forEach(chip => {
        chip.addEventListener('click', () => {
          chips.forEach(c => c.classList.remove('active'));
          chip.classList.add('active');
          this.currentCategory = chip.getAttribute('data-cat');
          this.renderList();
        });
      });

      // 3. Modal close buttons
      document.getElementById('dictCloseBtn')?.addEventListener('click', () => this.close());
      this.modalEl?.addEventListener('click', (e) => {
        if (e.target === this.modalEl) this.close();
      });

      // 4. Keyboard Shortcuts: Esc, Ctrl+K, /
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.isOpen()) {
          this.close();
        } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
          e.preventDefault();
          this.toggle();
        } else if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName) && !document.activeElement?.isContentEditable) {
          e.preventDefault();
          this.open();
        }
      });

      // 5. Connect to any buttons in page with id "btnOpenDictionary" or attribute
      document.addEventListener('click', (e) => {
        const trigger = e.target.closest('#btnOpenDictionary, [data-action="open-dictionary"], .btn-dictionary');
        if (trigger) {
          e.preventDefault();
          this.open();
        }
      });
    }

    getFilteredData() {
      return this.data.filter(item => {
        // Category Filter
        if (this.currentCategory !== 'all') {
          const weekNum = parseInt(this.currentCategory, 10);
          if (item.week !== weekNum) return false;
        }

        // Search Query Filter
        if (!this.searchQuery) return true;

        const q = this.searchQuery;
        const inName = item.name.toLowerCase().includes(q);
        const inSummary = item.summary.toLowerCase().includes(q);
        const inCategory = item.category.toLowerCase().includes(q);
        const inWhat = item.whatItDoes.toLowerCase().includes(q);
        const inWhen = item.whenToUse.toLowerCase().includes(q);
        const inKeywords = (item.keywords || []).some(k => k.toLowerCase().includes(q));

        return inName || inSummary || inCategory || inWhat || inWhen || inKeywords;
      });
    }

    renderList() {
      if (!this.listEl) return;
      const list = this.getFilteredData();

      if (list.length === 0) {
        this.listEl.innerHTML = `
          <div class="dict-no-results">
            <span style="font-size:32px;">🔍</span>
            <div style="font-weight:700; color:#f2ede4;">Mos keluvchi komanda topilmadi</div>
            <div style="font-size:12px;">Boshqa so'z bilan qidirib ko'ring (Masalan: JOIN, NULL, BCNF, INDEX)</div>
          </div>
        `;
        return;
      }

      let html = '';
      list.forEach(item => {
        const isSelected = this.selectedItem && this.selectedItem.id === item.id;
        const weekTagClass = `dict-tag-w${item.week || 1}`;

        html += `
          <div class="dict-item-card ${isSelected ? 'active' : ''}" data-id="${item.id}">
            <div class="dict-item-card-top">
              <span class="dict-item-name">${item.name}</span>
              <span class="dict-week-tag ${weekTagClass}">${item.week}-Hafta</span>
            </div>
            <div class="dict-item-snippet">${item.summary}</div>
          </div>
        `;
      });

      this.listEl.innerHTML = html;

      // Click card
      this.listEl.querySelectorAll('.dict-item-card').forEach(card => {
        card.addEventListener('click', () => {
          const id = card.getAttribute('data-id');
          const found = this.data.find(d => d.id === id);
          if (found) {
            this.selectedItem = found;
            this.listEl.querySelectorAll('.dict-item-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            this.renderDetail(found);
            // On mobile, slide to detail view
            if (this.bodyEl) {
              this.bodyEl.classList.add('mobile-view-detail');
            }
          }
        });
      });

      // If current selected is not in filtered list, select first match
      if (!list.some(d => d.id === this.selectedItem?.id)) {
        this.selectedItem = list[0];
        this.renderDetail(this.selectedItem);
      }
    }

    renderDetail(item) {
      if (!this.detailEl || !item) return;

      const weekTagClass = `dict-tag-w${item.week || 1}`;
      const relatedPillsHtml = (item.related || []).map(relId => {
        const relObj = this.data.find(d => d.id === relId);
        if (!relObj) return '';
        return `<button class="dict-rel-pill" data-target="${relObj.id}">🔗 ${relObj.name}</button>`;
      }).join('');

      this.detailEl.innerHTML = `
        <button class="dict-mobile-back" id="dictMobileBack">
          <span>←</span> Natijalar ro'yxatiga qaytish
        </button>

        <div class="dict-detail-hero">
          <div class="dict-hero-badge-row">
            <span class="dict-week-tag ${weekTagClass}">${item.week}-HAFTA</span>
            <span class="dict-category-badge">${item.category}</span>
          </div>
          <h1 class="dict-detail-title">${item.name}</h1>
          <div class="dict-detail-summary">${item.summary}</div>
        </div>

        <!-- 1. NIMA ISH QILADI? -->
        <div class="dict-section-block">
          <div class="dict-sec-title">
            <span>🎯</span> 1. Nima Ish Qiladi? (Funksional Mohiyati)
          </div>
          <div class="dict-sec-content">
            <p>${item.whatItDoes}</p>
          </div>
        </div>

        <!-- 2. QACHON KERAK BO'LADI? -->
        <div class="dict-section-block">
          <div class="dict-sec-title">
            <span>🏢</span> 2. Qachon Kerak Bo'ladi? (Real Hayotiy Amaliyot)
          </div>
          <div class="dict-sec-content">
            <p>${item.whenToUse}</p>
          </div>
        </div>

        <!-- 3. QANDAY YOZILADI (SINTAKSIS)? -->
        <div class="dict-section-block">
          <div class="dict-sec-title">
            <span>📝</span> 3. Qanday Yoziladi (Sintaksis)?
          </div>
          <div class="dict-code-box">
            <button class="dict-copy-btn" data-copy="syntax">Nusxa olish</button>
            <code>${this.escapeHtml(item.syntax)}</code>
          </div>
        </div>

        <!-- 4. QANDAY QO'SHIMCHALAR BILAN ISHLAYDI? -->
        <div class="dict-section-block">
          <div class="dict-sec-title">
            <span>⚡</span> 4. Qo'shimchalar va Kombinatsiyalar
          </div>
          <div class="dict-sec-content">
            <p>${item.combinations}</p>
          </div>
        </div>

        <!-- 5. JONLI AMALIY MISOL -->
        <div class="dict-section-block">
          <div class="dict-sec-title">
            <span>💻</span> 5. Jonli Amaliy Kod / Misol
          </div>
          <div class="dict-code-box">
            <button class="dict-copy-btn" data-copy="example">Nusxa olish</button>
            <code>${this.escapeHtml(item.example)}</code>
          </div>
        </div>

        <!-- 6. DIQQAT / TUZOQLAR -->
        <div class="dict-warning-block">
          <div class="dict-warning-title">
            <span>⚠️</span> 6. Diqqat Qilinishi Kerak Bo'lgan Tuzoqlar (Gotchas)
          </div>
          <div class="dict-warning-content">
            <p>${item.gotchas}</p>
          </div>
        </div>

        <!-- 7. ALOQADOR TUSHUNCHALAR -->
        ${relatedPillsHtml ? `
          <div class="dict-section-block">
            <div class="dict-sec-title">
              <span>🔗</span> 7. Bog'langan Tushunchalar va Komandalar
            </div>
            <div class="dict-related-wrap">
              ${relatedPillsHtml}
            </div>
          </div>
        ` : ''}
      `;

      // Mobile back button
      this.detailEl.querySelector('#dictMobileBack')?.addEventListener('click', () => {
        if (this.bodyEl) {
          this.bodyEl.classList.remove('mobile-view-detail');
        }
      });

      // Copy buttons
      this.detailEl.querySelectorAll('.dict-copy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const type = btn.getAttribute('data-copy');
          const textToCopy = type === 'syntax' ? item.syntax : item.example;
          navigator.clipboard.writeText(textToCopy).then(() => {
            const old = btn.textContent;
            btn.textContent = '✓ Nusxalandi!';
            setTimeout(() => { btn.textContent = old; }, 1800);
          });
        });
      });

      // Related pills jump
      this.detailEl.querySelectorAll('.dict-rel-pill').forEach(pill => {
        pill.addEventListener('click', () => {
          const targetId = pill.getAttribute('data-target');
          const targetItem = this.data.find(d => d.id === targetId);
          if (targetItem) {
            this.selectedItem = targetItem;
            this.renderList();
            this.renderDetail(targetItem);
            this.detailEl.scrollTop = 0;
          }
        });
      });
    }

    escapeHtml(text) {
      if (!text) return '';
      return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    }

    open(query = '') {
      if (!this.modalEl) this.initModal();
      this.modalEl.classList.add('open');
      if (this.bodyEl) {
        this.bodyEl.classList.remove('mobile-view-detail');
      }

      if (query) {
        this.searchInput.value = query;
        this.searchQuery = query.toLowerCase();
        if (this.clearBtn) this.clearBtn.style.display = 'block';
        this.renderList();
      }

      setTimeout(() => {
        this.searchInput?.focus();
        this.searchInput?.select();
      }, 50);
    }

    close() {
      if (this.modalEl) {
        this.modalEl.classList.remove('open');
      }
      if (this.bodyEl) {
        this.bodyEl.classList.remove('mobile-view-detail');
      }
    }

    toggle() {
      if (this.isOpen()) this.close();
      else this.open();
    }

    isOpen() {
      return this.modalEl?.classList.contains('open');
    }
  }

  // Auto-instantiate when DOM is ready
  function init() {
    window.databaseEncyclopedia = new DatabaseEncyclopedia();

    // Auto-inject Search button in header if not present
    const hudActions = document.querySelector('.hud-actions');
    if (hudActions && !document.getElementById('btnOpenDictionary')) {
      const btn = document.createElement('button');
      btn.id = 'btnOpenDictionary';
      btn.className = 'btn btn-dictionary';
      btn.title = "Barcha 6 haftalik SQL & Ma'lumotlar Bazasi Lug'ati (Ctrl+K)";
      btn.innerHTML = `<span>🔍</span> <span>Lug'at</span> <span class="kbd-shortcut">Ctrl+K</span>`;
      btn.addEventListener('click', () => {
        window.databaseEncyclopedia?.open();
      });
      hudActions.insertBefore(btn, hudActions.children[1] || null);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
