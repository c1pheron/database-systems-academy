/**
 * ============================================================================
 * DATABASE SYSTEMS ACADEMY — ENCYCLOPEDIA & COMMANDS DICTIONARY (LUG'AT)
 * Barcha 6 ta haftalikning to'liq komandalar, funksiyalar va modellashtirish
 * tushunchalari ensiklopediyasi.
 * Har bir komandaning:
 * 1. Nima ish qilishi
 * 2. Qachon kerak bo'lishi (Real hayotiy misollar)
 * 3. Qanday yozilishi (Sintaksisi)
 * 4. Qanday qo'shimchalar / kombinatsiyalar bilan ishlashi
 * 5. Jonli amaliy kodi / misoli
 * 6. Diqqat qilinishi kerak bo'lgan tuzoqlari (Gotchas)
 * ============================================================================
 */

(function () {
  'use strict';

  const DICTIONARY_DATA = [
    // ========================================================================
    // 1-HAFTA: EER (ENHANCED ENTITY-RELATIONSHIP) MODELI
    // ========================================================================
    {
      id: 'entity',
      name: 'ENTITY (Entitiy / Obyekt)',
      category: '1-Hafta • EER Asoslari',
      week: 1,
      summary: "Tizimda alohida mavjud bo'lgan, xususiyatlarga ega mustaqil obyekt yoki tushuncha.",
      whatItDoes: "Ma'lumotlar bazasida mustaqil identifikatorga (Primary Key) ega bo'lgan real yoki abstrakt obyektni ifodalaydi. Diagrammada to'g'ri to'rtburchak (rectangle) bilan chiziladi. Har bir entitiy o'zining atributlari (ustunlari) bilan tavsiflanadi.",
      whenToUse: "Tizimda ma'lumotlarini saqlash lozim bo'lgan har qanday asosiy subyekt uchun ishlatiladi. Masalan: Uzum Marketda 'Mijoz' (Customer), 'Mahsulot' (Product), 'Buyurtma' (Order) yoki bank tizimida 'Hisobraqam' (Account).",
      syntax: "-- ERD da: [ Xodim ]\n-- SQL da jadval sifatida yaratiladi:\nCREATE TABLE xodim (\n  xodim_id INT PRIMARY KEY,\n  ism VARCHAR(50) NOT NULL\n);",
      combinations: "Entitiylar o'zaro Aloqalar (Relationship - olmos shakli) orqali 1:1, 1:N yoki M:N kardinallikda bog'lanadi. Shuningdek, Zaif Entitiy (Weak Entity) yoki Superclass/Subclass iyerarxiyasiga ega bo'lishi mumkin.",
      example: "-- 'Mijoz' va 'Buyurtma' o'rtasidagi 1:N aloqa\nCREATE TABLE mijoz (\n  mijoz_id INT PRIMARY KEY,\n  fio VARCHAR(100) NOT NULL,\n  telefon VARCHAR(20) UNIQUE\n);\n\nCREATE TABLE buyurtma (\n  buyurtma_id INT PRIMARY KEY,\n  mijoz_id INT REFERENCES mijoz(mijoz_id),\n  sana DATE NOT NULL,\n  jami_summa DECIMAL(12,2)\n);",
      gotchas: "Entitiyni uning bitta atributi bilan adashtirmang. Masalan, 'Telefon raqam' alohida entitiy emas, Mijozning atributidir. Agar telefon raqamining o'zi alohida tarix, operator va balans kabi bir nechta ustunlarga ega bo'lsa, shundagina u entitiyga aylanadi.",
      related: ['weak-entity', 'primary-key', 'foreign-key'],
      keywords: ['entity', 'jadval', 'table', 'obyekt', 'model', 'erd', 'eer', 'mustaqil']
    },
    {
      id: 'weak-entity',
      name: 'WEAK ENTITY (Zaif Entitiy)',
      category: '1-Hafta • EER Asoslari',
      week: 1,
      summary: "O'zining shaxsiy birlamchi kalitiga ega bo'lmagan, faqat boshqa kuchli entitiy orqali yashaydigan obyekt.",
      whatItDoes: "Mustaqil yashay olmaydi; uning mavjudligi kuchli (Owner/Parent) entitiyga bog'liq. Diagrammada qo'shaloq to'g'ri to'rtburchak (double rectangle) bilan ifodalanadi. Uning kaliti qisman kalit (Partial Key / Discriminator) va ota jadvalning PK si kombinatsiyasidan hosil bo'ladi.",
      whenToUse: "Ota entitiy o'chirilganda bola obyektning yashashidan ma'no qolmaydigan vaziyatlarda. Masalan: Xodimning qaramog'idagilar (Dependent/Farzandlari), Mehmonxonadagi Xonalar (Bino bo'lmasa xona mavjud emas), yoki Buyurtma tarkibidagi bandlar (Order Items).",
      syntax: "-- ERD da: [[ Qaramog'idagi ]] <=> (( Tegishli )) <=> [ Xodim ]\n-- SQL da Composite PK va ON DELETE CASCADE bilan:\nCREATE TABLE qaramogidagi (\n  xodim_id INT,\n  farzand_ismi VARCHAR(50),\n  tugilgan_sana DATE,\n  PRIMARY KEY (xodim_id, farzand_ismi),\n  FOREIGN KEY (xodim_id) REFERENCES xodim(xodim_id) ON DELETE CASCADE\n);",
      combinations: "Har doim Identifying Relationship (qo'shaloq olmos) va Total Participation (qo'shaloq chiziq) orqali kuchli entitiyga ulanadi.",
      example: "-- Buyurtma (Kuchli) va Buyurtma_Bandlari (Zaif):\nCREATE TABLE buyurtma_bandi (\n  buyurtma_id INT,\n  qator_raqami INT, -- Partial Key (Discriminator)\n  mahsulot_id INT,\n  miqdor INT,\n  PRIMARY KEY (buyurtma_id, qator_raqami),\n  FOREIGN KEY (buyurtma_id) REFERENCES buyurtma(buyurtma_id) ON DELETE CASCADE\n);",
      gotchas: "Zaif entitiyga mustaqil sun'iy ID (Surrogate Key) qo'yib yuborsangiz, u zaiflik xususiyatini yo'qotadi. Uning asosiy mohiyati — ota kalitsiz shaxsiy kalitga ega bo'lolmasligidir.",
      related: ['entity', 'partial-key', 'on-delete-cascade'],
      keywords: ['weak entity', 'zaif', 'discriminator', 'dependent', 'identifying', 'composite pk']
    },
    {
      id: 'primary-key',
      name: 'PRIMARY KEY (PK / Birlamchi Kalit)',
      category: '1-Hafta • EER Asoslari',
      week: 1,
      summary: "Jadvaldagi har bir qatorni bir qiymatli (unique) identifikatsiya qiluvchi ustun yoki ustunlar to'plami.",
      whatItDoes: "Jadvalda dublikat (takroriy) yozuvlar paydo bo'lishini 100% to'xtatadi va NULL qiymat qabul qilmaydi (`UNIQUE + NOT NULL`). Baza tizimi birlamchi kalit ustunida avtomatik ravishda eng tezkor B-Tree Unique Index quradi.",
      whenToUse: "Istisnosiz har bitta relyatsion jadvalda kamida 1 ta Primary Key bo'lishi shart! Masalan: `user_id`, `order_id`, `passport_seriya_raqam`.",
      syntax: "-- Ustun darajasida:\nid INT PRIMARY KEY\n\n-- Jadval darajasida (Composite PK uchun):\nPRIMARY KEY (mamlakat_kodi, pasport_raqami)",
      combinations: "FOREIGN KEY boshqa jadvaldagi aynan PRIMARY KEY ustuniga murojaat qiladi. AUTO_INCREMENT yoki IDENTITY yoki SEQUENCE bilan birga ishlatiladi.",
      example: "CREATE TABLE mijozlar (\n  mijoz_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n  fio VARCHAR(100) NOT NULL,\n  email VARCHAR(100) UNIQUE NOT NULL\n);",
      gotchas: "Hech qachon o'zgaruvchan qiymatlarni (masalan, telefon raqam yoki familiya) Primary Key qilib tanlamang. Agar foydalanuvchi telefonini o'zgartirsa, butun tizimdagi bog'langan barcha jadvallarni yangilashga to'g'ri keladi.",
      related: ['foreign-key', 'unique-constraint', 'surrogate-key'],
      keywords: ['primary key', 'pk', 'birlamchi kalit', 'kalit', 'identifikator', 'not null', 'unique']
    },
    {
      id: 'partial-key',
      name: 'PARTIAL KEY (Discriminator / PPK)',
      category: '1-Hafta • EER Asoslari',
      week: 1,
      summary: "Zaif entitiya ichidagi yozuvlarni bir ota doirasida farqlovchi qisman kalit (punktir tagchiziq).",
      whatItDoes: "Zaif entitiyaning barcha qatorlarini umumiy holda emas, balki birgina ota obyektga tegishli qatorlar orasidagina noyobligini ta'minlaydi. ER diagrammada uning nomi ostiga uzuq-uzuq punktir chiziq (dashed underline) chiziladi.",
      whenToUse: "Xonalar raqami (har bir qavatda 1, 2, 3 xonalar takrorlanadi, lekin 'Qavat_ID + Xona_Raqami' noyob bo'ladi) yoki buyurtmadagi qator raqami (1-band, 2-band).",
      syntax: "-- ERD da: [ buyurtma_id (PK) ] === [[ buyurtma_bandi: qator_raqami (PPK) ]]\nPRIMARY KEY (buyurtma_id, qator_raqami)",
      combinations: "Doimo ota entitiyaning Primary Key ustuni bilan birgalikda Composite Primary Key hosil qiladi.",
      example: "CREATE TABLE bino_xonasi (\n  bino_id INT,\n  xona_raqami INT, -- Partial Key\n  maydoni_kvm DECIMAL(5,2),\n  PRIMARY KEY (bino_id, xona_raqami),\n  FOREIGN KEY (bino_id) REFERENCES bino(bino_id) ON DELETE CASCADE\n);",
      gotchas: "Partial Key o'z holicha butun jadval bo'yicha takrorlanishi mumkin. U faqat ota kalit bilan qo'shilgandagina to'liq Primary Key vazifasini bajaradi.",
      related: ['weak-entity', 'primary-key'],
      keywords: ['partial key', 'discriminator', 'ppk', 'punktir', 'qisman kalit']
    },
    {
      id: 'composite-attribute',
      name: 'COMPOSITE ATTRIBUTE (Tarkibli Atribut)',
      category: '1-Hafta • EER Asoslari',
      week: 1,
      summary: "O'z navbatida bir nechta mustaqil mayda atributlarga bo'linadigan murakkab atribut.",
      whatItDoes: "Mantiqan bitta tushunchani bildiruvchi, ammo amalda alohida qismlardan iborat ma'lumotlarni ifodalaydi. Masalan: 'Manzil' -> Shaxar, Tuman, Ko'cha, Uy_raqami; yoki 'F.I.O' -> Familiya, Ism, Sharif.",
      whenToUse: "Foydalanuvchilarni shahar bo'yicha saralash, faqat familiyasi bo'yicha qidirish yoki pochta indeksini alohida tekshirish talab qilinganda.",
      syntax: "-- EER diagrammada asosiy atributdan yangi shoxchalar chiqadi\n-- Relyatsion jadvalga o'tkazilganda atomar ustunlarga bo'linadi (1NF talabi):\nviloyat VARCHAR(50),\nshahar VARCHAR(50),\nkucha VARCHAR(100)",
      combinations: "1NF (Birinchi Normal Forma) qoidasiga ko'ra, relyatsion modelga o'tkazilayotganda barcha tarkibli atributlar maydalanib, alohida mustaqil ustunlarga aylantirilishi shart.",
      example: "CREATE TABLE mijozlar (\n  mijoz_id INT PRIMARY KEY,\n  ism VARCHAR(50) NOT NULL,\n  familiya VARCHAR(50) NOT NULL,\n  manzil_viloyat VARCHAR(50),\n  manzil_shahar VARCHAR(50),\n  manzil_kucha VARCHAR(100)\n);",
      gotchas: "Butun manzilni bitta VARCHAR ustuniga `Toshkent, Chilonzor, 5-uy` deb yozib qo'ysangiz, keyinchalik faqat Chilonzorda yashovchilarni indeks bo'yicha tez qidirib bo'lmaydi.",
      related: ['1nf', 'entity'],
      keywords: ['composite attribute', 'tarkibli', 'murakkab atribut', 'manzil', 'atomar']
    },
    {
      id: 'multivalued-attribute',
      name: 'MULTI-VALUED ATTRIBUTE (Ko\'p Qiymatli Atribut)',
      category: '1-Hafta • EER Asoslari',
      week: 1,
      summary: "Bitta obyekt uchun bir vaqtning o'zida bir nechta qiymatga ega bo'la oladigan atribut (qo'shaloq oval).",
      whatItDoes: "Bitta shaxsning bir nechta telefon raqami, bir nechta chet tillari yoki bir nechta diplomlari bo'lishi holatini ifodalaydi. ERD da qo'shaloq ellips (double oval) bilan chiziladi.",
      whenToUse: "Xodimning 2-3 ta telefon raqami, mashinaning bir nechta rangi yoki dasturchining bir nechta mahoratlari (skills) bo'lganda.",
      syntax: "-- EER da: (( telefon_raqamlari ))\n-- Relyatsion modelda alohida jadvalga chiqariladi:\nCREATE TABLE xodim_telefonlari (\n  xodim_id INT,\n  telefon VARCHAR(20),\n  PRIMARY KEY (xodim_id, telefon),\n  FOREIGN KEY (xodim_id) REFERENCES xodim(xodim_id) ON DELETE CASCADE\n);",
      combinations: "1NF talabini buzmaslik uchun ko'p qiymatli atribut har doim yangi alohida jadvalga ajratiladi va ota jadvalga FK bilan ulanadi.",
      example: "-- Dasturchi va uning texnologiyalari (ko'p qiymatli atribut alohida jadvalda):\nCREATE TABLE dasturchi_skills (\n  dasturchi_id INT REFERENCES dasturchi(id) ON DELETE CASCADE,\n  skill_nomi VARCHAR(50),\n  PRIMARY KEY (dasturchi_id, skill_nomi)\n);",
      gotchas: "Bitta ustun ichiga `+998901234567, +998977654321` deb vergul bilan yozib saqlash 1NF qoidasini qo'pol buzish hisoblanadi va LIKE qidiruvini haddan tashqari sekinlashtiradi.",
      related: ['1nf', 'weak-entity'],
      keywords: ['multivalued', 'kop qiymatli', 'double oval', 'telefonlar', 'massiv']
    },
    {
      id: 'derived-attribute',
      name: 'DERIVED ATTRIBUTE (Hisoblab Topiladigan Atribut)',
      category: '1-Hafta • EER Asoslari',
      week: 1,
      summary: "Bazaga statik saqlanmasdan, boshqa atributlar asosida dinamik hisoblab chiqariladigan atribut (punktir oval).",
      whatItDoes: "Bazada saqlangan birlamchi ma'lumotlar (masalan: `tugilgan_sana`, `narx`, `miqdor`) asosida formula orqali hisoblanadi. Diagrammada punktir chiziqli oval bilan ifodalanadi.",
      whenToUse: "Xodimning yoshi (`CURRENT_DATE - tugilgan_sana`), Buyurtmaning umumiy narxi (`miqdor * dona_narx`) yoki ish staji.",
      syntax: "-- ERD da: - - ( yoshi ) - -\n-- SQL da Generated Column yoki VIEW orqali amalga oshiriladi:\nyoshi INT GENERATED ALWAYS AS (EXTRACT(YEAR FROM CURRENT_DATE) - EXTRACT(YEAR FROM tugilgan_sana)) STORED",
      combinations: "SQL da `VIRTUAL` yoki `STORED GENERATED COLUMNS` yoxud `CREATE VIEW` ichida formula sifatida ishlatiladi.",
      example: "CREATE TABLE buyurtma_tarkibi (\n  id INT PRIMARY KEY,\n  narx DECIMAL(10,2) NOT NULL,\n  miqdor INT NOT NULL,\n  jami_summa DECIMAL(12,2) GENERATED ALWAYS AS (narx * miqdor)\n);",
      gotchas: "Hech qachon bazada statik 'yosh' ustuni saqlamang! Chunki har yili u eskiradi. Har doim `tugilgan_sana` saqlanib, yosh dinamik hisoblanishi kerak.",
      related: ['create-view', 'extract'],
      keywords: ['derived attribute', 'hisoblanadigan', 'yoshi', 'generated column', 'punktir oval']
    },
    {
      id: 'cardinality',
      name: 'CARDINALITY & PARTICIPATION (Kardinallik va Ishtirok)',
      category: '1-Hafta • EER Asoslari',
      week: 1,
      summary: "Ikki entitiy o'rtasidagi nusxalar soni (1:1, 1:N, M:N) va majburiylik darajasi (Total vs Partial).",
      whatItDoes: "Munosabatlardagi chegaralarni belgilaydi. Multiplicity: `1..1` (aniq bitta), `0..1` (ixtiyoriy), `1..*` (kamida bitta), `0..*` (ixtiyoriy ko'p). Total participation (majburiy) qo'shaloq chiziq bilan, Partial (ixtiyoriy) yakka chiziq bilan chiziladi.",
      whenToUse: "Biznes qoidalarini aniq belgilashda: 'Har bir Bo'limda kamida bitta xodim ishlashi shartmi?', 'Har bir talabaning kafili bo'lishi majburiymi?'.",
      syntax: "-- Multiplicity belgilari:\n-- 1..1 : Har bir mashinaning aniq 1 ta dvigatel raqami bor\n-- 0..1 : Xodimning kompaniya mashinasi bo'lishi mumkin yoki yo'q\n-- 1..* : Bo'limda kamida 1 ta xodim bo'lishi shart\n-- 0..* : Yangi mijoz hali hech qanday buyurtma bermagan bo'lishi mumkin",
      combinations: "1:N aloqada FK 'N' (ko'p) tomonga tushadi. 1:1 aloqada FK ixtiyoriy (0..1) tomonga tushadi. M:N aloqada alohida Junction Table ochiladi.",
      example: "-- 1:N aloqa: Har bir Bo'limda ko'p xodimlar bor (1..*), xodim aniq 1 ta bo'limda ishlaydi (1..1):\nCREATE TABLE xodimlar (\n  xodim_id INT PRIMARY KEY,\n  deptno INT NOT NULL REFERENCES dept(deptno) -- NOT NULL majburiy ishtirokni bildiradi\n);",
      gotchas: "M:N aloqani to'g'ridan-to'g'ri bitta jadvalga joylashga urinmang — bu ma'lumotlarning takrorlanishiga olib keladi.",
      related: ['foreign-key', 'mn-mapping'],
      keywords: ['cardinality', 'participation', 'multiplicity', '1:1', '1:n', 'm:n', 'majburiy', 'total']
    },
    {
      id: 'specialization',
      name: 'SPECIALIZATION & GENERALIZATION (Superclass / Subclass)',
      category: '1-Hafta • EER Asoslari',
      week: 1,
      summary: "Umumiy entitiy (Ota) va uning ixtisoslashgan turlari (Bolalar) o'rtasidagi merosxo'rlik (IS-A) munosabati.",
      whatItDoes: "Umumiy atributlarni yuqori Superclass da (masalan, `Xodim: id, ism, oylik`), maxsus atributlarni esa Subclass larda (masalan, `Dasturchi: github_link`, `Haydovchi: prava_toifasi`) saqlash imkonini beradi.",
      whenToUse: "Tizimda bir xil turdagi, ammo o'ziga xos xususiyatlarga ega obyektlar bo'lganda. Masalan: Bank hisobraqamlari -> Omonat hisobi (foiz stavkasi) va Joriy hisob (overdraft limiti).",
      syntax: "-- Diagrammada yarim doira (U) belgisi bilan belgilanadi:\n-- Superclass: Xodim\n-- Subclasses: [Dasturchi] IS-A [Xodim], [Menejer] IS-A [Xodim]",
      combinations: "Disjoint (d) yoki Overlapping (o) cheklovlari hamda Total (majburiy) yoki Partial (ixtiyoriy) ixtisoslashuv bilan birga qo'llaniladi.",
      example: "-- Relyatsion modelda har bir subklass ota jadvalning PK sini o'zining PK va FK si qilib oladi:\nCREATE TABLE xodim (\n  xodim_id INT PRIMARY KEY,\n  ism VARCHAR(50) NOT NULL\n);\n\nCREATE TABLE dasturchi (\n  xodim_id INT PRIMARY KEY REFERENCES xodim(xodim_id) ON DELETE CASCADE,\n  github_akkount VARCHAR(100) NOT NULL\n);",
      gotchas: "Subklassda yangi sun'iy `dasturchi_id` ochmang. Uning Primary Keyi ota jadvalning `xodim_id` si bilan 1:1 bog'langan bo'lishi kerak.",
      related: ['disjoint-overlap', 'primary-key'],
      keywords: ['specialization', 'generalization', 'superclass', 'subclass', 'is-a', 'meros']
    },
    {
      id: 'disjoint-overlap',
      name: 'DISJOINT (d) VS OVERLAPPING (o)',
      category: '1-Hafta • EER Asoslari',
      week: 1,
      summary: "Subklasslar orasidagi kesishmaslik (faqat bittasi bo'lish) yoki bir vaqtda bir nechtasiga tegishli bo'la olish qoidasi.",
      whatItDoes: "`Disjoint (d)`: Obyekt bir vaqtning o'zida faqat bitta subklassga tegishli bo'lishi mumkin (masalan, hisob raqam yo Omonat, yo Joriy bo'ladi). `Overlapping (o)`: Obyekt bir vaqtning o'zida bir nechta subklass bo'la oladi (masalan, universitet a'zosi bir vaqtda ham 'Talaba', ham 'Xodim' bo'la oladi).",
      whenToUse: "Kompaniyada xodim ham Dasturchi, ham Menejer bo'la oladimi yo'qmi degan biznes qoidasini mustahkamlashda.",
      syntax: "-- ER diagrammada doira ichiga 'd' yoki 'o' harfi yoziladi:\n-- (d) - Disjoint\n-- (o) - Overlapping",
      combinations: "Total specialization (qo'shaloq chiziq) bilan birga: Total Disjoint (har bir xodim yo Dasturchi, yo Menejer bo'lishi SHART, boshqa variant yo'q).",
      example: "-- Overlapping bo'lsa, har bir subklass alohida jadval qilinadi:\n-- Xodim bir vaqtning o'zida ikkala jadvalda ham mavjud bo'lishi mumkin:\nSELECT x.ism, d.github_akkount, m.bonus_foizi \nFROM xodim x\nLEFT JOIN dasturchi d ON x.xodim_id = d.xodim_id\nLEFT JOIN menejer m ON x.xodim_id = m.xodim_id;",
      gotchas: "Agar 'd' (Disjoint) bo'lsa, dasturiy ta'minot yoki TRIGGER darajasida obyektning birdan ortiq subklass jadvaliga yozilishini taqiqlash lozim.",
      related: ['specialization'],
      keywords: ['disjoint', 'overlapping', 'subclass cheklovi', 'ajratilgan', 'kesishuvchi']
    },
    {
      id: 'fan-trap',
      name: 'FAN TRAP (Muxlislar Tuzog\'i)',
      category: '1-Hafta • EER Asoslari',
      week: 1,
      summary: "Bitta ota entitiyga ikkita 1:N aloqa tutashishi oqibatida bolalar o'rtasidagi aniq bog'liqlik yo'qolib qolish tuzog'i.",
      whatItDoes: "Struktura `A (1) <--- (N) B (1) ---> (N) C` ko'rinishida bo'lganda paydo bo'ladi. Bunda B ota jadval bo'lib, unga A va C bolalar ulangan. Natijada A ning qaysi qatori C ning aynan qaysi qatoriga tegishli ekanligini aniqlab bo'lmaydi.",
      whenToUse: "ER modelni loyihalash va audit qilish paytida arxitektura xatolarini aniqlash va tuzatishda.",
      syntax: "-- NOTO'G'RI: Bo'lim (1) -> (N) Xodim VA Bo'lim (1) -> (N) Loyiha\n-- Xodim qaysi loyihada ishlayotgani noma'lum!\n\n-- TO'G'RI: Bo'lim (1) -> (N) Xodim (1) -> (N) Loyiha\n-- Yoki Xodim va Loyiha o'rtasida to'g'ridan-to'g'ri M:N aloqa o'rnatish.",
      combinations: "Bog'lanishlar yo'nalishini qayta ko'rib chiqish yoki to'g'ridan-to'g'ri assotsiativ aloqa qo'shish orqali hal qilinadi.",
      example: "-- Fan Trap yechimi: Xodim va Loyiha o'rtasida to'g'ridan-to'g'ri aloqa jadvali tuzish:\nCREATE TABLE xodim_loyiha (\n  xodim_id INT REFERENCES xodim(xodim_id),\n  loyiha_id INT REFERENCES loyiha(loyiha_id),\n  PRIMARY KEY (xodim_id, loyiha_id)\n);",
      gotchas: "Faqat umumiy ota jadval orqali ma'lumot topishga urinish noto'g'ri Cartesian ko'paytma va yolg'on hisobotlarga olib keladi.",
      related: ['chasm-trap', 'cardinality'],
      keywords: ['fan trap', 'muxlislar tuzogi', 'tuzoq', 'eer xato', 'boglanish xatosi']
    },
    {
      id: 'chasm-trap',
      name: 'CHASM TRAP (Bo\'shliq / Jar Tuzog\'i)',
      category: '1-Hafta • EER Asoslari',
      week: 1,
      summary: "Oraliqdagi ixtiyoriy (0..1 yoki 0..*) aloqa tufayli zanjirdagi entitiylar o'rtasida yo'l uzilib qolishi.",
      whatItDoes: "Zanjir bo'ylab ma'lumot izlayotganda, oraliqdagi entitiylardan biri ixtiyoriy (partial participation) bo'lsa, qatorlar yo'qolib qoladi va so'rov bo'sh natija qaytaradi.",
      whenToUse: "Kompaniyada xodim hali birorta filialga biriktirilmagan bo'lsa, uning orqali filial mulkini qidirishda yo'l uzilishi holatlarini bartaraf etishda.",
      syntax: "-- NOTO'G'RI: Filial (1) --- (0..1) Xodim (1) --- (0..*) Avtomobil\n-- Agar Filialda xodim bo'lmasa, Filial avtomobillari ko'rinmay qoladi!\n\n-- TO'G'RI: Filial (1) --- (0..*) Avtomobil to'g'ridan-to'g'ri bog'lanishi kerak.",
      combinations: "To'g'ridan-to'g'ri tashqi kalit (Foreign Key) yoki LEFT JOIN orqali bo'shliqlarni aylanib o'tish bilan yechiladi.",
      example: "-- Chasm trapni yechish uchun Filial va Avtomobil o'rtasida to'g'ridan-to'g'ri FK o'rnatiladi:\nALTER TABLE avtomobil ADD COLUMN filial_id INT REFERENCES filial(filial_id);",
      gotchas: "Oraliqdagi entitiyga qat'iy bog'lanib qolish o'rniga, biznes talabi bo'yicha mustaqil to'g'ridan-to'g'ri aloqani chizish lozim.",
      related: ['fan-trap', 'left-join'],
      keywords: ['chasm trap', 'jar tuzogi', 'boshliq', 'uzilish', 'eer tuzoq']
    },

    // ========================================================================
    // 2-HAFTA: RELATSION MODEL & NORMALIZATSIYA (1NF - BCNF)
    // ========================================================================
    {
      id: 'foreign-key',
      name: 'FOREIGN KEY (FK / Tashqi Kalit)',
      category: '2-Hafta • Relyatsion Model',
      week: 2,
      summary: "Boshqa jadvalning Primary Key ustuniga havola qiluvchi va referensial butunlikni ta'minlovchi ustun.",
      whatItDoes: "Ikki jadvalni bir-biriga bog'laydi. Tashqi kalit ustuniga faqat ota jadvalda mavjud bo'lgan kalit qiymatlarini kiritish mumkin, bu orqali bazada 'yetim' (mavjud bo'lmagan ID ga bog'langan) yozuvlar paydo bo'lishining oldi olinadi.",
      whenToUse: "Har qanday 1:N yoki 1:1 bog'lanishda bola jadvalga ota jadval ID sini saqlash uchun. Masalan, har bir xodim qaysi bo'limda ishlashini saqlash: `deptno REFERENCES dept(deptno)`.",
      syntax: "-- Ustun darajasida:\ndeptno INT REFERENCES dept(deptno)\n\n-- Jadval darajasida cheklov nomi bilan:\nCONSTRAINT fk_xodim_dept FOREIGN KEY (deptno) REFERENCES dept(deptno) ON DELETE SET NULL",
      combinations: "ON DELETE CASCADE, ON DELETE SET NULL yoki ON DELETE RESTRICT qoidalari bilan birga qo'llaniladi.",
      example: "CREATE TABLE emp (\n  empno INT PRIMARY KEY,\n  ename VARCHAR(50) NOT NULL,\n  deptno INT,\n  CONSTRAINT fk_emp_dept FOREIGN KEY (deptno)\n    REFERENCES dept(deptno)\n    ON DELETE SET NULL\n);",
      gotchas: "Tashqi kalit va unga mos ota jadval Primary Key ustunlarining ma'lumot turlari (Data Type) mutlaqo bir xil bo'lishi shart (masalan, ikkisi ham INT).",
      related: ['primary-key', 'on-delete-cascade', 'on-delete-set-null'],
      keywords: ['foreign key', 'fk', 'tashqi kalit', 'referential integrity', 'references', 'boglanish']
    },
    {
      id: 'on-delete-cascade',
      name: 'ON DELETE CASCADE (Kaskadli O\'chirish)',
      category: '2-Hafta • Relyatsion Model',
      week: 2,
      summary: "Ota jadvaldagi yozuv o'chirilganda, unga bog'langan barcha bola yozuvlarni ham avtomatik o'chirib yuborish qoidasi.",
      whatItDoes: "Ota yozuv o'chirilganda referensial xatolik yuzaga kelishini oldini oladi va unga qarashli barcha yozuvlarni bir zumda tozalaydi.",
      whenToUse: "Zaif entitiyalar yoki qat'iy kompozitsiya aloqalarida. Masalan: Buyurtma (Order) o'chirilsa, uning ichidagi barcha 'Buyurtma bandlari' (Order Items) ham o'chib ketishi kerak.",
      syntax: "FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE",
      combinations: "ON UPDATE CASCADE bilan birgalikda ota kalit o'zgarganda bolalarda ham kalitni avtomatik yangilash uchun ishlatiladi.",
      example: "CREATE TABLE buyurtma_tarkibi (\n  id INT PRIMARY KEY,\n  buyurtma_id INT NOT NULL,\n  mahsulot_id INT NOT NULL,\n  FOREIGN KEY (buyurtma_id) REFERENCES buyurtma(id) ON DELETE CASCADE\n);",
      gotchas: "Xavfli qoida! Agar noto'g'ri qo'yilsa, bitta mijozni o'chirganingizda uning 5 yillik barcha to'lovlari, buyurtmalari va kvitansiyalari butunlay yo'q bo'lib ketishi mumkin.",
      related: ['foreign-key', 'on-delete-set-null'],
      keywords: ['on delete cascade', 'cascade', 'kaskadli ochirish', 'avtomatik ochirish']
    },
    {
      id: 'on-delete-set-null',
      name: 'ON DELETE SET NULL',
      category: '2-Hafta • Relyatsion Model',
      week: 2,
      summary: "Ota jadvaldagi yozuv o'chirilganda, bola jadvaldagi tashqi kalit qiymatini NULL ga aylantirish qoidasi.",
      whatItDoes: "Bola yozuvni o'chirib yubormaydi, balki uning ota jadval bilan bog'lanishini uzib, bo'sh (NULL) qilib qo'yadi.",
      whenToUse: "Ota obyekt yo'qolsa ham bola obyektning yashashi muhim bo'lgan vaziyatlarda. Masalan, Bo'lim yopilsa, uning xodimlarini o'chirmasdan, ularning `deptno` sini vaqtincha NULL qilib turish.",
      syntax: "FOREIGN KEY (deptno) REFERENCES dept(deptno) ON DELETE SET NULL",
      combinations: "Bu qoida ishlashi uchun bola ustun `NOT NULL` bo'lmasligi, ya'ni NULL qiymatlarni qabul qila olishi shart.",
      example: "CREATE TABLE xodimlar (\n  xodim_id INT PRIMARY KEY,\n  fio VARCHAR(100),\n  loyiha_id INT NULL, -- NULL bo'lishi shart!\n  FOREIGN KEY (loyiha_id) REFERENCES loyiha(id) ON DELETE SET NULL\n);",
      gotchas: "Agar ustunga `NOT NULL` cheklovi qo'yilgan bo'lsa, `ON DELETE SET NULL` ishlamaydi va o'chirish paytida baza xatolik beradi.",
      related: ['foreign-key', 'on-delete-cascade'],
      keywords: ['on delete set null', 'set null', 'bosh qiymat', 'ota ochirilganda']
    },
    {
      id: '1nf',
      name: '1NF (First Normal Form / Birinchi Normal Forma)',
      category: '2-Hafta • Normalizatsiya',
      week: 2,
      summary: "Jadvaldagi har bir katakcha faqat bitta atomar (bo'linmas) qiymatdan iborat bo'lishi va takroriy guruhlar bo'lmasligi sharti.",
      whatItDoes: "Bitta katakka vergul bilan bir nechta qiymat yozishni (`+998901234567, +998907654321`) va takrorlanuvchi ustunlarni (`tel1, tel2, tel3`) butunlay taqiqlaydi. Har bir qator alohida Primary Keyga ega bo'lishini talab qiladi.",
      whenToUse: "Baza loyihalashning eng birinchi va majburiy bosqichi.",
      syntax: "-- NOTO'G'RI: xodim(id, ism, telefonlar)\n-- TO'G'RI (1NF): Alohida jadvallarga ajratish:\nxodim(xodim_id, ism)\nxodim_telefon(xodim_id, telefon)",
      combinations: "Barcha keyingi normal formalar (2NF, 3NF, BCNF) oldin 1NF talabi to'liq bajarilgan bo'lishini shart qilib qo'yadi.",
      example: "-- 1NF ga keltirilgan ko'rinish:\nCREATE TABLE talaba_kurslari (\n  talaba_id INT,\n  kurs_kodi VARCHAR(10),\n  PRIMARY KEY (talaba_id, kurs_kodi)\n);",
      gotchas: "Vergul bilan ajratilgan ma'lumotlarni saqlash `WHERE telefon LIKE '%998%'` kabi juda sekin va xatolikka moyil so'rovlarga majbur qiladi.",
      related: ['2nf', '3nf', 'composite-attribute'],
      keywords: ['1nf', 'birinchi normal forma', 'atomar', 'takrorlanuvchi guruhlar']
    },
    {
      id: '2nf',
      name: '2NF (Second Normal Form / Ikkinchi Normal Forma)',
      category: '2-Hafta • Normalizatsiya',
      week: 2,
      summary: "Jadval 1NF da bo'lishi va har bir no-kalit ustun butun Primary Keyga to'liq funksional bog'liq bo'lishi sharti.",
      whatItDoes: "Qisman bog'liqlikni (Partial Functional Dependency) yo'qotadi. Agar jadvalning kaliti kompozit (ikki yoki undan ortiq ustundan iborat) bo'lsa, biron-bir oddiy ustun kalitning faqat bitta bo'lagiga bog'lanib qolmasligi kerak.",
      whenToUse: "Jadvalda Composite Primary Key (masalan, `talaba_id, kurs_id`) mavjud bo'lganda.",
      syntax: "-- NOTO'G'RI (2NF buzilgan):\n-- jadval: (talaba_id, kurs_id, kurs_nomi, baxo)\n-- 'kurs_nomi' faqat 'kurs_id' ga bog'liq, talabaga emas!\n\n-- TO'G'RI (2NF ga ajratish):\n-- kurslar(kurs_id, kurs_nomi)\n-- baholar(talaba_id, kurs_id, baxo)",
      combinations: "Agar jadvalning Primary Keyi bitta ustundan iborat bo'lsa, u avtomatik ravishda 2NF talabini qanoatlantiradi (chunki qisman kalit bo'lishi mumkin emas).",
      example: "-- 2NF ga ajratilgan tuzilma:\nCREATE TABLE kurslar (\n  kurs_id INT PRIMARY KEY,\n  kurs_nomi VARCHAR(100) NOT NULL\n);\n\nCREATE TABLE baholar (\n  talaba_id INT,\n  kurs_id INT REFERENCES kurslar(kurs_id),\n  baho INT,\n  PRIMARY KEY (talaba_id, kurs_id)\n);",
      gotchas: "2NF dagi qisman bog'liqlik sababli kurs nomini yangilaganda hamma talabalar qatorini bittalab UPDATE qilish kerak bo'lib qoladi (Update Anomaly).",
      related: ['1nf', '3nf', 'bcnf'],
      keywords: ['2nf', 'ikkinchi normal forma', 'qisman bogliqlik', 'partial dependency']
    },
    {
      id: '3nf',
      name: '3NF (Third Normal Form / Uchinchi Normal Forma)',
      category: '2-Hafta • Normalizatsiya',
      week: 2,
      summary: "Jadval 2NF da bo'lishi va hech qanday tranzitiv (zanjirli) funksional bog'liqlik bo'lmasligi sharti.",
      whatItDoes: "No-kalit ustunning boshqa no-kalit ustunga bog'lanib qolishini taqiqlaydi (`A -> B -> C`, ya'ni `xodim_id -> deptno -> dept_name`). Har bir no-kalit ustun FAQAT va FAQAT Primary Keyga bog'liq bo'lishi kerak.",
      whenToUse: "Bosh ofis, korporativ ERP va bank ma'lumotlar bazalarining 'Oltin Standarti' hisoblanadi. Barcha sohaviy relyatsion bazalar kamida 3NF da bo'lishi lozim.",
      syntax: "-- NOTO'G'RI (3NF buzilgan):\n-- emp(empno [PK], ename, deptno, dname, loc)\n-- Bu yerda dname va loc empno ga emas, deptno ga bog'liq!\n\n-- TO'G'RI (3NF ga ajratish):\n-- dept(deptno [PK], dname, loc)\n-- emp(empno [PK], ename, deptno [FK])",
      combinations: "Birlamchi va tashqi kalitlar (PK-FK) orqali jadvallarni ajratish yordamida amalga oshiriladi.",
      example: "CREATE TABLE dept (\n  deptno INT PRIMARY KEY,\n  dname VARCHAR(50) NOT NULL,\n  loc VARCHAR(50)\n);\n\nCREATE TABLE emp (\n  empno INT PRIMARY KEY,\n  ename VARCHAR(50) NOT NULL,\n  deptno INT REFERENCES dept(deptno)\n);",
      gotchas: "3NF buzilsa, bo'limda birorta ham xodim qolmasa, bo'lim nomi va manzili ham bazadan o'chib ketadi (Deletion Anomaly).",
      related: ['2nf', 'bcnf', 'foreign-key'],
      keywords: ['3nf', 'uchinchi normal forma', 'tranzitiv bogliqlik', 'transitive dependency', 'anomaliya']
    },
    {
      id: 'bcnf',
      name: 'BCNF (Boyce-Codd Normal Form / 3.5NF)',
      category: '2-Hafta • Normalizatsiya',
      week: 2,
      summary: "3NF ning yanada qat'iy talabi: jadvaldagi har bir determinant (boshqa ustunni aniqlovchi) albatta Candidate Key bo'lishi shart.",
      whatItDoes: "Bir nechta ustunli va bir-birini qoplovchi (overlapping) muqobil nomzod kalitlar (Candidate Keys) mavjud bo'lgan kamyob holatlardagi anomaliyalarni to'liq bartaraf etadi.",
      whenToUse: "Jadvalda bir nechta murakkab nomzod kalitlar o'zaro kesishganda.",
      syntax: "-- Har qanday funksional bog'liqlik X -> Y uchun, X albatta Superkey (Candidate Key) bo'lishi shart.",
      combinations: "3NF talabidan o'tgan, lekin kalit bo'lmagan ustun kalitning bir qismini belgilab qo'ygan holatlarda qo'llanadi.",
      example: "-- Professor, Fan va Talaba munosabatida:\n-- Agar har bir professor faqat bitta fandan dars bersa (prof -> fan),\n-- unda (prof, fan) alohida jadvalga chiqarilishi lozim:\nCREATE TABLE prof_fan (\n  professor VARCHAR(50) PRIMARY KEY,\n  fan VARCHAR(50) NOT NULL\n);",
      gotchas: "BCNF ga bo'lish ba'zan funksional bog'liqliklarni saqlab qolishni qiyinlashtirishi (Dependency Preservation yo'qolishi) mumkin, shuning uchun amaliyotda ko'pincha 3NF bilan cheklaniladi.",
      related: ['3nf', '2nf'],
      keywords: ['bcnf', 'boyce codd', 'determinant', 'candidate key', 'superkey']
    },

    // ========================================================================
    // 3-HAFTA: SQL DDL, DML & ASOSIY SO'ROVLAR
    // ========================================================================
    {
      id: 'create-table',
      name: 'CREATE TABLE (Jadval Yaratish)',
      category: '3-Hafta • SQL DDL',
      week: 3,
      summary: "Ma'lumotlar bazasida yangi relyatsion jadval va uning ustunlari hamda cheklovlarini e'lon qilish.",
      whatItDoes: "Baza katalogida jadvalning sxemasini, ustun nomlarini, ma'lumot turlarini (INT, VARCHAR, DATE) va butunlik cheklovlarini (PRIMARY KEY, UNIQUE, NOT NULL, CHECK, FOREIGN KEY) yaratadi.",
      whenToUse: "Yangi loyiha boshlanganda yoki yangi modul kiritilganda.",
      syntax: "CREATE TABLE jadval_nomi (\n  ustun1 turi [cheklovlar],\n  ustun2 turi [cheklovlar],\n  CONSTRAINT cheklov_nomi ...\n);",
      combinations: "PRIMARY KEY, FOREIGN KEY REFERENCES, NOT NULL, UNIQUE, CHECK, DEFAULT bilan birgalikda yoziladi.",
      example: "CREATE TABLE mahsulotlar (\n  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n  nomi VARCHAR(150) NOT NULL,\n  narx DECIMAL(10,2) NOT NULL CHECK (narx > 0),\n  mavjud_soni INT DEFAULT 0 CHECK (mavjud_soni >= 0),\n  yaratilgan_sana TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);",
      gotchas: "Jadval nomlarida bo'sh joy yoki maxsus belgilardan foydalanmang. Nomlarni doimo kichik harflar va pastki chiziq bilan yozing (`foydalanuvchi_akkountlari`).",
      related: ['alter-table', 'drop-table', 'primary-key'],
      keywords: ['create table', 'jadval yaratish', 'ddl', 'sxema', 'ustunlar']
    },
    {
      id: 'alter-table',
      name: 'ALTER TABLE (Jadvalni O\'zgartirish)',
      category: '3-Hafta • SQL DDL',
      week: 3,
      summary: "Mavjud jadvalning tuzilishiga yangi ustun qo'shish, ustunni o'chirish, turini o'zgartirish yoki cheklov ulash.",
      whatItDoes: "Jadvaldagi ma'lumotlarni o'chirib yubormasdan uning arxitekturasini dinamik modifikatsiya qiladi (`ADD COLUMN`, `DROP COLUMN`, `MODIFY / ALTER COLUMN`, `ADD CONSTRAINT`).",
      whenToUse: "Tizim kengayganda mavjud jadvalga yangi maydon (masalan, foydalanuvchiga `telegram_chat_id`) qo'shish kerak bo'lganda.",
      syntax: "-- Ustun qo'shish:\nALTER TABLE jadval ADD COLUMN ustun_nomi turi;\n\n-- Cheklov qo'shish:\nALTER TABLE jadval ADD CONSTRAINT nom CHECK (shart);",
      combinations: "ADD, DROP, RENAME COLUMN, MODIFY / ALTER COLUMN, ADD CONSTRAINT bandlari bilan qo'llaniladi.",
      example: "-- Mijozlar jadvaliga telefon raqam ustuni va unga UNIQUE cheklovini qo'shish:\nALTER TABLE mijozlar ADD COLUMN telefon VARCHAR(20);\nALTER TABLE mijozlar ADD CONSTRAINT uq_mijoz_tel UNIQUE (telefon);",
      gotchas: "Mavjud jadvalga `NOT NULL` ustun qo'shayotganda, agar jadvalda allaqachon yozuvlar bo'lsa, albatta `DEFAULT` qiymat berish shart, aks holda baza xatolik beradi.",
      related: ['create-table', 'drop-table'],
      keywords: ['alter table', 'ozgartirish', 'ustun qoshish', 'add column', 'ddl']
    },
    {
      id: 'insert-into',
      name: 'INSERT INTO (Yozuv Kiritish)',
      category: '3-Hafta • SQL DML',
      week: 3,
      summary: "Jadvalga yangi qator (yozuv / tuple) qo'shish buyrug'i.",
      whatItDoes: "Ko'rsatilgan ustunlarga mos qiymatlarni jadvalning yangi qatori sifatida diskka yozadi. Agar Primary Key yoki boshqa cheklovlar buzilsa, tranzaksiya bekor qilinadi.",
      whenToUse: "Yangi mijoz ro'yxatdan o'tganda, to'lov amalga oshirilganda yoki yangi xodim ishga qabul qilinganda.",
      syntax: "INSERT INTO jadval (ustun1, ustun2) VALUES (qiymat1, qiymat2);\n\n-- Bir nechta qatorni birdan kiritish:\nINSERT INTO jadval (u1, u2) VALUES (q1, q2), (q3, q4);",
      combinations: "VALUES ro'yxati yoki boshqa so'rov natijasini kiritish uchun `INSERT INTO ... SELECT ... FROM` kombinatsiyasi bilan ishlaydi.",
      example: "-- Yangi bo'lim va xodim qo'shish:\nINSERT INTO dept (deptno, dname, loc)\nVALUES (50, 'MARKETING', 'SAMARQAND');\n\n-- Boshqa jadvaldan ko'chirib kiritish:\nINSERT INTO arxiv_emp SELECT * FROM emp WHERE hiredate < '2000-01-01';",
      gotchas: "Ustunlar ro'yxatini yozmasdan shunchaki `INSERT INTO emp VALUES (...)` deb yozish juda xavfli. Agar kelajakda jadvalga yangi ustun qo'shilsa, kod darhol sinadi.",
      related: ['update-set', 'delete-from', 'select-from'],
      keywords: ['insert into', 'values', 'yozuv qoshish', 'qator kiritish', 'dml']
    },
    {
      id: 'update-set',
      name: 'UPDATE ... SET (Ma\'lumotni Tahrirlash)',
      category: '3-Hafta • SQL DML',
      week: 3,
      summary: "Jadvaldagi mavjud yozuvlarning qiymatlarini shart asosida o'zgartirish.",
      whatItDoes: "`WHERE` filtri orqali tanlangan qatorlarning ko'rsatilgan ustunlarini yangi qiymatlar bilan almashtiradi.",
      whenToUse: "Xodimning lavozimi yoki oyligi oshganda, buyurtma holati 'Yetkazildi' ga o'zgarganda.",
      syntax: "UPDATE jadval_nomi\nSET ustun1 = yangi_qiymat, ustun2 = formula\nWHERE shart;",
      combinations: "Har doim `WHERE` bilan yoziladi. Subquery natijasi bilan ustunni yangilashda `SET oylik = (SELECT AVG(oylik) ...)` kabi ishlatiladi.",
      example: "-- 20-bo'limdagi barcha xodimlarning maoshini 10% ga oshirish:\nUPDATE emp\nSET sal = sal * 1.10\nWHERE deptno = 20;",
      gotchas: "ENG KATTA XATO: `WHERE` shartini yozishni unutib qoldirsangiz, butun jadvaldagi BARCHA xodimlarning ma'lumotlari bir zumda o'zgarib ketadi!",
      related: ['delete-from', 'insert-into', 'where-clause'],
      keywords: ['update', 'set', 'tahrirlash', 'yangilash', 'ozgartirish', 'dml']
    },
    {
      id: 'delete-from',
      name: 'DELETE FROM (Yozuvlarni O\'chirish)',
      category: '3-Hafta • SQL DML',
      week: 3,
      summary: "Jadvaldagi qatorlarni berilgan shart asosida o'chirish buyrug'i.",
      whatItDoes: "`WHERE` bandiga mos keluvchi qatorlarni jadvaldan o'chiradi. Har bir o'chirilgan qator tranzaksiya jurnaliga (Undo/Redo log) yoziladi, shuning uchun kerak bo'lsa `ROLLBACK` qilish mumkin.",
      whenToUse: "Eski yoki bekor qilingan yozuvlarni tozalashda.",
      syntax: "DELETE FROM jadval_nomi WHERE shart;",
      combinations: "WHERE sharti, IN (subquery), EXISTS bilan birgalikda qo'llanadi.",
      example: "-- Ishdan bo'shatilgan xodimni o'chirish:\nDELETE FROM emp WHERE empno = 7934;\n\n-- Hech qanday xodimi yo'q bo'limlarni o'chirish:\nDELETE FROM dept WHERE deptno NOT IN (SELECT DISTINCT deptno FROM emp WHERE deptno IS NOT NULL);",
      gotchas: "`WHERE` shartsiz `DELETE FROM emp;` butun jadvalni bo'shatadi! Jadvalni to'liq tozalash uchun DELETE emas, `TRUNCATE` tezroq va xavfsizroq hisoblanadi.",
      related: ['truncate-table', 'update-set', 'where-clause'],
      keywords: ['delete from', 'ochirish', 'qatorni ochirish', 'dml', 'rollback']
    },
    {
      id: 'truncate-table',
      name: 'TRUNCATE TABLE (Tezkor Tozalash)',
      category: '3-Hafta • SQL DDL',
      week: 3,
      summary: "Jadvaldagi barcha ma'lumotlarni qatorlab o'tirmasdan, sahifalarni qayta initsializatsiya qilib bir zumda tozalash.",
      whatItDoes: "DELETE ga qaraganda 100 baravar tez ishlaydi, chunki har bitta qatorni alohida log qilmaydi, balki to'g'ridan-to'g'ri jadvalning ma'lumotlar bloklarini (HWM - High Water Mark) nolga tushiradi.",
      whenToUse: "Vaqtinchalik jadvallarni, hisobot kesh jadvallarini yoki test ma'lumotlarini butunlay tozalashda.",
      syntax: "TRUNCATE TABLE jadval_nomi;",
      combinations: "WHERE shartini qabul qilmaydi! Doimo butun jadvalni tozalaydi va AUTO_INCREMENT hisoblagichini boshiga qaytaradi.",
      example: "TRUNCATE TABLE vaqtinchalik_import_loglari;",
      gotchas: "DDL komandasi bo'lgani sababli, odatda `ROLLBACK` qilib orqaga qaytarib bo'lmaydi! Agar boshqa jadval unga Foreign Key bilan bog'langan bo'lsa, TRUNCATE xatolik beradi.",
      related: ['delete-from', 'drop-table'],
      keywords: ['truncate', 'tozalash', 'nolga tushirish', 'tezkor ochirish', 'ddl']
    },
    {
      id: 'select-from',
      name: 'SELECT ... FROM (So\'rov va Proyeksiya)',
      category: '3-Hafta • SQL Asoslari',
      week: 3,
      summary: "Ma'lumotlar bazasidan kerakli ustunlarni o'qib olish va ekranga chiqarishning asosiy komandasi.",
      whatItDoes: "`FROM` orqali ko'rsatilgan jadvaldan `SELECT` ro'yxatidagi ustunlarni relyatsion algebra proyeksiyasi (π) bo'yicha ajratib oladi.",
      whenToUse: "Bazada ma'lumotlarni ko'rish va tahlil qilishning har bitta so'rovida ishlatiladi.",
      syntax: "SELECT ustun1, ustun2, ifoda AS taxallus\nFROM jadval_nomi;",
      combinations: "WHERE, GROUP BY, HAVING, ORDER BY, JOIN, LIMIT bilan to'liq SQL zanjirini hosil qiladi.",
      example: "SELECT empno, ename, sal, sal * 12 AS yillik_maosh\nFROM emp;",
      gotchas: "Ishlab chiqarish (Production) tizimlarida hech qachon `SELECT *` deb yozmang! Bu tarmoq trafigini behuda oshiradi va indekslardan unumli foydalanishni cheklaydi.",
      related: ['where-clause', 'distinct-clause'],
      keywords: ['select', 'from', 'oqish', 'sorov', 'ustunlar', 'proyeksiya']
    },
    {
      id: 'where-clause',
      name: 'WHERE (Qatorlarni Filtrlash)',
      category: '3-Hafta • SQL Asoslari',
      week: 3,
      summary: "Faqat berilgan mantiqiy shartga (TRUE) mos keluvchi qatorlarni tanlab olish.",
      whatItDoes: "Relyatsion algebra seleksiyasi (σ) vazifasini bajaradi. Jadvalning har bir qatorini tekshirib, shart rost bo'lganlarini keyingi bosqichga o'tkazadi.",
      whenToUse: "Faqat ma'lum bir bo'limdagi xodimlarni, maoshi $2,000 dan yuqorilarni yoki bugun sotilgan tovarlarni saralashda.",
      syntax: "SELECT * FROM emp\nWHERE deptno = 10 AND sal >= 2000;",
      combinations: "=, <>, !=, <, >, <=, >=, BETWEEN, IN, LIKE, IS NULL, AND, OR, NOT operatorlari bilan ishlaydi.",
      example: "SELECT ename, job, sal\nFROM emp\nWHERE job = 'MANAGER' AND sal > 2500;",
      gotchas: "WHERE qismida agregat funksiyalarni (masalan: `WHERE AVG(sal) > 2000`) ishlatib bo'lmaydi! Agregat natijalarni filtrlash uchun `HAVING` ishlatiladi.",
      related: ['having-clause', 'and-or-not'],
      keywords: ['where', 'filtr', 'shart', 'seleksiya', 'saralash']
    },
    {
      id: 'distinct-clause',
      name: 'DISTINCT (Dublikatlarni Yo\'qotish)',
      category: '3-Hafta • SQL Asoslari',
      week: 3,
      summary: "So'rov natijasida bir xil bo'lib takrorlangan nusxa qatorlarni o'chirib, faqat unikal qiymatlarni qoldirish.",
      whatItDoes: "Natijalar to'plamini saralab yoki hash-jadval orqali solishtirib, barcha ko'rsatilgan ustunlari bir xil bo'lgan dublikatlarni bittaga keltiradi.",
      whenToUse: "Kompaniyada jami qanday lavozimlar borligini yoki xodimlar qaysi bo'limlarda ishlashini takrorlarsiz bilish uchun.",
      syntax: "SELECT DISTINCT ustun1, ustun2 FROM jadval;",
      combinations: "COUNT bilan birga unikal qiymatlar sonini sanashda juda kuchli: `COUNT(DISTINCT deptno)`.",
      example: "-- Kompaniyadagi barcha unikal lavozimlar ro'yxati:\nSELECT DISTINCT job FROM emp;\n\n-- Xodimlar faoliyat yuritayotgan unikal bo'limlar soni:\nSELECT COUNT(DISTINCT deptno) AS faol_bolimlar FROM emp;",
      gotchas: "DISTINCT ni butun so'rovga ko'r-ko'rona qo'yish unumdorlikni pasaytiradi, chunki baza barcha natijalarni diskda yoki xotirada saralashga majbur bo'ladi.",
      related: ['select-from', 'count-func'],
      keywords: ['distinct', 'unikal', 'takrorlanmas', 'dublikat', 'nusxa']
    },
    {
      id: 'order-by',
      name: 'ORDER BY (Natijalarni Saralash)',
      category: '3-Hafta • SQL Asoslari',
      week: 3,
      summary: "So'rov natijalarini o'sish (ASC) yoki kamayish (DESC) tartibida tartiblash.",
      whatItDoes: "SQL jadvallarida ma'lumotlar tartibsiz to'plam (unordered set) ko'rinishida saqlanadi. `ORDER BY` ko'rsatilgan ustunlar bo'yicha qatorlarni aniq ketma-ketlikka soladi.",
      whenToUse: "Top 10 ta eng yuqori maosh oluvchilarni chiqarishda, buyurtmalarni sanasi bo'yicha yangidan eskiga qarab saralashda.",
      syntax: "SELECT * FROM emp\nORDER BY sal DESC, ename ASC;",
      combinations: "ASC (sukut bo'yicha o'sish tartibi), DESC (kamayish tartibi), NULLS FIRST, NULLS LAST bilan ishlaydi.",
      example: "-- Eng katta maoshdan boshlab saralash, teng bo'lsa alifbo tartibida:\nSELECT ename, job, sal\nFROM emp\nORDER BY sal DESC, ename ASC;",
      gotchas: "SQL da `ORDER BY` eng oxirgi bajariladigan bosqichdir. Agar katta jadvallarda tartiblash ustunida indeks bo'lmasa, `Sort` operatsiyasi so'rovni sekinlashtiradi.",
      related: ['limit-offset', 'select-from'],
      keywords: ['order by', 'asc', 'desc', 'saralash', 'tartiblash', 'alfabit']
    },
    {
      id: 'like-operator',
      name: 'LIKE (Shablon Bo\'yicha Qidirish)',
      category: '3-Hafta • SQL Asoslari',
      week: 3,
      summary: "Matnli ma'lumotlar ichidan belgilangan qolip (wildcard: % va _) bo'yicha qidirish.",
      whatItDoes: "`%` belgisi — ixtiyoriy sondagi (0 ta yoki undan ortiq) belgilarni, `_` (pastki chiziq) belgisi — aniq bitta ixtiyoriy belgini ifodalaydi.",
      whenToUse: "Foydalanuvchi qidiruv satriga so'zning faqat bir qismini kiritganda yoki ismi 'A' bilan boshlanuvchilarni topishda.",
      syntax: "-- 'A' bilan boshlanuvchilar:\nWHERE ename LIKE 'A%'\n\n-- Ikkinchi harfi 'L' bo'lganlar:\nWHERE ename LIKE '_L%'\n\n-- Ichida 'AR' so'zi borlar:\nWHERE ename LIKE '%AR%'",
      combinations: "NOT LIKE, ILIKE (Postgres da registrni hisobga olmasdan qidirish), ESCAPE bandlari bilan ishlaydi.",
      example: "-- Ismi 'S' bilan boshlanib 'H' bilan tugaydigan xodimlar (masalan: SMITH):\nSELECT ename, job FROM emp WHERE ename LIKE 'S%H';",
      gotchas: "Agar shablon boshiga `%` qo'ysangiz (`WHERE ename LIKE '%SON'`), baza mavjud B-Tree indeksdan foydalana olmaydi va Full Table Scan qilishga majbur bo'ladi.",
      related: ['where-clause', 'upper-lower'],
      keywords: ['like', 'wildcard', 'foiz', 'qolip', 'matn qidirish', 'pattern']
    },
    {
      id: 'is-null',
      name: 'IS NULL / IS NOT NULL',
      category: '3-Hafta • SQL Asoslari',
      week: 3,
      summary: "Ustundagi qiymat mavjud emasligini (bo'sh / NULL) yoki aksincha borligini tekshirish.",
      whatItDoes: "SQL uch qiymatli mantiqqa (Three-Valued Logic: TRUE, FALSE, UNKNOWN) ega. NULL hech qachon hech narsaga teng bo'la olmaydi (hatto o'ziga ham), shuning uchun `= NULL` deb yozish mumkin emas, faqat `IS NULL` ishlaydi.",
      whenToUse: "Komissiya olmaydigan xodimlarni (`comm IS NULL`) yoki rahbari yo'q Prezidentni (`mgr IS NULL`) topishda.",
      syntax: "WHERE ustun IS NULL\nWHERE ustun IS NOT NULL",
      combinations: "COALESCE, NVL funksiyalari bilan NULL o'rniga zaxira qiymat berishda qo'llanadi.",
      example: "-- Rahbari (MGR) yo'q bosh rahbarlarni topish:\nSELECT ename, job FROM emp WHERE mgr IS NULL;\n\n-- Komissiya oladigan xodimlar:\nSELECT ename, comm FROM emp WHERE comm IS NOT NULL AND comm > 0;",
      gotchas: "Hech qachon `WHERE comm = NULL` deb yozmang! Bu shart hech qachon TRUE qaytarmaydi va so'rov doimo bo'sh natija beradi.",
      related: ['coalesce', 'nvl', 'nullif'],
      keywords: ['is null', 'is not null', 'null', 'bosh qiymat', 'uch qiymatli mantiq']
    },

    // ========================================================================
    // 4-HAFTA: JOINLAR & SKALYAR/AGREGAT FUNKSIYALAR
    // ========================================================================
    {
      id: 'inner-join',
      name: 'INNER JOIN (Ichki Bog\'lash)',
      category: '4-Hafta • Jadvallarni Bog\'lash',
      week: 4,
      summary: "Ikkala jadvalda ham bog'lanish shartiga to'liq mos kelgan qatorlarnigina birlashtirib chiqarish.",
      whatItDoes: "Chap jadval va o'ng jadval qatorlarini solishtiradi. Faqat ikkala tomonda ham mos jufti bor yozuvlar ekranga chiqadi; mos jufti bo'lmagan qatorlar tashlab yuboriladi.",
      whenToUse: "Xodim va uning bo'lim nomini birga ko'rishda (agar xodim bo'limsiz bo'lsa yoki bo'lim xodimsiz bo'lsa, chiqmaydi).",
      syntax: "SELECT e.ename, d.dname\nFROM emp e\nINNER JOIN dept d ON e.deptno = d.deptno;",
      combinations: "ON sharti, USING (ustun), bir nechta JOIN larni zanjir qilib ulash bilan ishlaydi.",
      example: "SELECT e.empno, e.ename, e.job, d.dname, d.loc\nFROM emp e\nINNER JOIN dept d ON e.deptno = d.deptno\nWHERE d.loc = 'DALLAS';",
      gotchas: "Agar shart yozilmasa yoki xato yozilsa, kutilmaganda Cartesian Product (har bir qator har bir qatorga ko'payib ketishi) yuz beradi.",
      related: ['left-outer-join', 'self-join', 'on-vs-using'],
      keywords: ['inner join', 'join', 'boglash', 'kesishma', 'on', 'jadvallar']
    },
    {
      id: 'left-outer-join',
      name: 'LEFT OUTER JOIN (Chapdan Bog\'lash)',
      category: '4-Hafta • Jadvallarni Bog\'lash',
      week: 4,
      summary: "Chap jadvalning barcha yozuvlarini to'liq saqlab qolib, o'ng jadvaldan faqat mos kelganlarini ulash.",
      whatItDoes: "Agar chap jadvaldagi qatorga o'ng jadvalda mos juft topilmasa, o'ng jadval ustunlari o'rniga NULL qo'yib natijaga qo'shadi.",
      whenToUse: "Hali birorta ham xodim ishlamaydigan bo'limlarni ham ro'yxatda yo'qotmasdan ko'rish yoki hali xarid qilmagan mijozlarni tahlil qilishda.",
      syntax: "SELECT d.dname, e.ename\nFROM dept d\nLEFT OUTER JOIN emp e ON d.deptno = e.deptno;",
      combinations: "O'ng tomondagi yozuv mavjud emasligini tekshirish uchun `WHERE e.empno IS NULL` bilan birga ishlatiladi (Anti-Join).",
      example: "-- Birorta ham xodimi yo'q bo'limlarni topish (Anti-Join):\nSELECT d.deptno, d.dname\nFROM dept d\nLEFT JOIN emp e ON d.deptno = e.deptno\nWHERE e.empno IS NULL;",
      gotchas: "WHERE qismida o'ng jadval ustuniga shart qo'ysangiz (masalan: `WHERE e.sal > 1000`), LEFT JOIN beixtiyor oddiy INNER JOIN ga aylanib qoladi. Shartni `ON` ichiga yozish kerak.",
      related: ['inner-join', 'right-outer-join', 'full-outer-join'],
      keywords: ['left join', 'left outer join', 'chapdan boglash', 'anti join', 'null saqlash']
    },
    {
      id: 'right-outer-join',
      name: 'RIGHT OUTER JOIN (O\'ngdan Bog\'lash)',
      category: '4-Hafta • Jadvallarni Bog\'lash',
      week: 4,
      summary: "O'ng jadvaldagi barcha qatorlarni to'liq saqlab qolib, chap jadvaldan mos kelganlarini ulash.",
      whatItDoes: "LEFT JOIN ning teskarisi. O'ng jadvaldagi barcha qatorlar chiqadi, chap tomonda mos jufti bo'lmaganlarga NULL qo'yiladi.",
      whenToUse: "Asosan jadvallar tartibini o'zgartirmasdan o'ng jadval ustuvorligini saqlashda.",
      syntax: "SELECT e.ename, d.dname\nFROM emp e\nRIGHT OUTER JOIN dept d ON e.deptno = d.deptno;",
      combinations: "Amaliyotda deyarli barcha dasturchilar kod o'qilishi oson bo'lishi uchun RIGHT JOIN o'rniga jadvallar o'rnini almashtirib LEFT JOIN ishlatishadi.",
      example: "SELECT e.ename, d.dname\nFROM emp e\nRIGHT JOIN dept d ON e.deptno = d.deptno;",
      gotchas: "Jamoaviy kod yozishda LEFT JOIN va RIGHT JOIN larni aralashtirib yuborish so'rov mantiqini chalkashtirib yuboradi.",
      related: ['left-outer-join', 'inner-join'],
      keywords: ['right join', 'right outer join', 'ongdan boglash']
    },
    {
      id: 'full-outer-join',
      name: 'FULL OUTER JOIN (To\'liq Tashqi Bog\'lash)',
      category: '4-Hafta • Jadvallarni Bog\'lash',
      week: 4,
      summary: "Ikkala jadvaldagi barcha yozuvlarni to'liq chiqarish, mos kelmagan tomonlarga NULL qo'yish.",
      whatItDoes: "LEFT JOIN va RIGHT JOIN natijalarining birlashmasi. Ikkala jadvalning birorta ham qatori yo'qolmaydi.",
      whenToUse: "Ikki tizim ma'lumotlarini o'zaro solishtirishda: masalan, bank hisoblari va buxgalteriya hisoblari o'rtasidagi nomuvofiqliklarni aniqlashda.",
      syntax: "SELECT e.ename, d.dname\nFROM emp e\nFULL OUTER JOIN dept d ON e.deptno = d.deptno;",
      combinations: "Ikki tomonlama nomutanosibliklarni topishda `WHERE e.empno IS NULL OR d.deptno IS NULL` bilan birga ishlatiladi.",
      example: "SELECT e.ename, d.dname\nFROM emp e\nFULL JOIN dept d ON e.deptno = d.deptno\nWHERE e.empno IS NULL OR d.dname IS NULL;",
      gotchas: "MySQL kabi ba'zi bazalarda `FULL OUTER JOIN` to'g'ridan-to'g'ri mavjud emas; ularda `LEFT JOIN` va `RIGHT JOIN` ni `UNION` qilish orqali erishiladi.",
      related: ['left-outer-join', 'union'],
      keywords: ['full join', 'full outer join', 'toliq boglash', 'solishtirish']
    },
    {
      id: 'self-join',
      name: 'SELF JOIN (Jadvalning O\'zini O\'ziga Ulash)',
      category: '4-Hafta • Jadvallarni Bog\'lash',
      week: 4,
      summary: "Bitta jadvalga ikkita turli taxallus (alias) berib, uni o'ziga o'zi JOIN qilish.",
      whatItDoes: "Bitta jadval ichidagi ierarxik munosabatlarni ochib beradi. Masalan, xodim ham, uning boshlig'i (MGR) ham bitta `emp` jadvalida saqlanadi.",
      whenToUse: "Xodim va uning rahbarining ismini yonma-yon chiqarishda, yoki mahsulot va uning asosiy toifasini ko'rishda.",
      syntax: "SELECT xodim.ename AS xodim, rahbar.ename AS rahbar\nFROM emp xodim\nLEFT JOIN emp rahbar ON xodim.mgr = rahbar.empno;",
      combinations: "Rahbari bo'lmagan eng oliy rahbar (KING) ham chiqishi uchun doimo `LEFT JOIN` bilan ishlatiladi.",
      example: "-- Har bir xodim va uning rahbarining ismi:\nSELECT \n  w.ename AS xodim,\n  w.job AS lavozim,\n  COALESCE(m.ename, 'BOSH DIREKTOR') AS bevosita_rahbari\nFROM emp w\nLEFT JOIN emp m ON w.mgr = m.empno;",
      gotchas: "Agar oddiy `INNER JOIN` ishlatsangiz, bosh direktorning `mgr` ustuni NULL bo'lgani uchun u ro'yxatdan butunlay tushib qoladi.",
      related: ['left-outer-join', 'coalesce'],
      keywords: ['self join', 'ozini oziga boglash', 'rahbar', 'ierarxiya', 'alias']
    },
    {
      id: 'group-by',
      name: 'GROUP BY (Qatorlarni Guruhlarga Yig\'ish)',
      category: '4-Hafta • Agregat Funksiyalar',
      week: 4,
      summary: "Belgilangan ustunlardagi bir xil qiymatlarga ega qatorlarni bitta jamlovchi guruhga birlashtirish.",
      whatItDoes: "Bir nechta qatordan bitta jamlama qator hosil qiladi. Odatda agregat funksiyalar (`COUNT`, `SUM`, `AVG`, `MIN`, `MAX`) bilan birga har bir guruh statistikasini chiqarishda qo'llanadi.",
      whenToUse: "Har bir bo'limdagi xodimlar soni, har bir viloyat bo'yicha jami savdo summasi, yoki har bir lavozimning o'rtacha oyligini hisoblashda.",
      syntax: "SELECT deptno, COUNT(*), AVG(sal)\nFROM emp\nGROUP BY deptno;",
      combinations: "HAVING (guruhlarni filtrlash), ORDER BY (guruhlarni saralash), ROLLUP / CUBE bilan birga ishlaydi.",
      example: "-- Har bir bo'lim bo'yicha xodimlar soni va o'rtacha maosh:\nSELECT \n  deptno,\n  COUNT(*) AS xodimlar_soni,\n  ROUND(AVG(sal), 2) AS ortacha_maosh,\n  SUM(sal) AS jami_fond\nFROM emp\nGROUP BY deptno\nORDER BY jami_fond DESC;",
      gotchas: "OLTIN QOIDA: `SELECT` ro'yxatida turgan va agregat funksiya ichiga olinmagan HAR BIR ustun albatta `GROUP BY` ro'yxatida bo'lishi shart!",
      related: ['having-clause', 'count-func', 'sum-func'],
      keywords: ['group by', 'guruhlash', 'jamlash', 'agregat', 'statistika']
    },
    {
      id: 'having-clause',
      name: 'HAVING (Guruhlangan Natijalarni Filtrlash)',
      category: '4-Hafta • Agregat Funksiyalar',
      week: 4,
      summary: "GROUP BY orqali hosil qilingan agregat guruhlar ustidan shart qo'yish (WHERE guruhlar uchun).",
      whatItDoes: "`WHERE` individual qatorlarni guruhlashdan oldin filtrlaydi, `HAVING` esa guruhlashdan keyin hosil bo'lgan agregat natijalarni filtrlaydi.",
      whenToUse: "Faqat xodimlar soni 3 tadan ko'p bo'lgan bo'limlarni, yoki o'rtacha maoshi $2,000 dan baland lavozimlarni chiqarishda.",
      syntax: "SELECT deptno, AVG(sal)\nFROM emp\nGROUP BY deptno\nHAVING AVG(sal) > 2000;",
      combinations: "Doimo `GROUP BY` dan keyin va `ORDER BY` dan oldin keladi.",
      example: "-- Kamida 3 ta xodimi bor va jami maosh fondi $5,000 dan oshadigan bo'limlar:\nSELECT deptno, COUNT(*) AS soni, SUM(sal) AS fond\nFROM emp\nGROUP BY deptno\nHAVING COUNT(*) >= 3 AND SUM(sal) > 5000;",
      gotchas: "Individual ustun shartini (masalan: `HAVING deptno = 10`) HAVING ga qo'ymang. Uni `WHERE deptno = 10` qilib oldinroq filtrlasangiz, so'rov ancha tez ishlaydi.",
      related: ['group-by', 'where-clause'],
      keywords: ['having', 'agregat filtr', 'guruh sharti', 'group by filter']
    },
    {
      id: 'count-func',
      name: 'COUNT() (Qatorlar va Qiymatlarni Sanash)',
      category: '4-Hafta • Agregat Funksiyalar',
      week: 4,
      summary: "Jadvaldagi yozuvlar sonini yoki ko'rsatilgan ustunda NULL bo'lmagan qiymatlarni sanash.",
      whatItDoes: "`COUNT(*)` — NULL bor-yo'qligidan qat'i nazar barcha qatorlarni sanaydi. `COUNT(ustun)` — faqat ko'rsatilgan ustunda qiymati bor (NOT NULL) qatorlarnigina sanaydi.",
      whenToUse: "Tizimdagi jami foydalanuvchilar soni, komissiya oluvchi xodimlar soni yoki buyurtmalar sonini bilishda.",
      syntax: "SELECT COUNT(*), COUNT(comm), COUNT(DISTINCT job) FROM emp;",
      combinations: "GROUP BY, DISTINCT, FILTER (WHERE ...) bilan birga qo'llanadi.",
      example: "SELECT \n  COUNT(*) AS jami_xodimlar,\n  COUNT(comm) AS komissiya_oluvchilar,\n  COUNT(DISTINCT job) AS unikal_lavozimlar\nFROM emp;",
      gotchas: "Agar xodimlarning komissiya sonini bilmoqchi bo'lsangiz, `COUNT(*)` qilsangiz barcha xodimlar chiqadi, komissiyasi NULL bo'lganlar ham sanalib ketadi. Faqat `COUNT(comm)` yozish kerak.",
      related: ['group-by', 'distinct-clause'],
      keywords: ['count', 'sanash', 'qatorlar soni', 'agregat']
    },
    {
      id: 'coalesce',
      name: 'COALESCE(val1, val2, ..., val_n)',
      category: '4-Hafta • Null & Skalyar Funksiyalar',
      week: 4,
      summary: "Berilgan argumentlar ro'yxatidan birinchi bo'lib NULL bo'lmagan (NOT NULL) qiymatni qaytaradi.",
      whatItDoes: "Bir nechta variant ichidan birinchi mavjud ma'lumotni tanlab oladi. Agar barcha berilgan parametrlar NULL bo'lsa, natija ham NULL bo'ladi. SQL ANSI standarti bo'lib, barcha ma'lumotlar bazalarida (Oracle, PostgreSQL, MySQL, SQL Server) bir xil ishlaydi.",
      whenToUse: "Foydalanuvchining aloqa vositalari ro'yxatida (Mobil tel, Uy teli, Email) birinchi to'ldirilganini olishda, yoki hisob-kitobda xodimning komissiyasi (COMM) NULL bo'lsa, uni 0 ga almashtirib umumiy daromadni `sal + COALESCE(comm, 0)` tarzda to'g'ri hisoblashda.",
      syntax: "COALESCE(ifoda1, ifoda2, ..., zaxira_qiymat)",
      combinations: "SELECT, WHERE, ORDER BY, GROUP BY, arifmetik amallar (`+`, `-`, `*`), matn birlashtirish (`CONCAT`, `||`) va boshqa skalyar funksiyalar bilan erkin kombinatsiya qilinadi.",
      example: "-- 1. Jami daromadni hisoblash (NULL qo'shilib ketishini to'xtatish):\nSELECT \n  ename,\n  sal,\n  comm,\n  sal + COALESCE(comm, 0) AS jami_daromad,\n  COALESCE(TO_CHAR(comm), 'Komissiya belgilanmagan') AS izoh\nFROM emp;\n\n-- 2. Bir nechta zaxira qiymatlar zanjiri:\nSELECT fio, COALESCE(mobil_tel, uy_tel, ish_tel, 'Raqam yo''q') AS asosiy_aloqa\nFROM mijozlar;",
      gotchas: "1-tuzoq: Oddiy arifmetikada `sal + comm` qilsangiz, agar `comm` NULL bo'lsa, butun natija `NULL` bo'lib qoladi! Shuning uchun `COALESCE(comm, 0)` shart.\n2-tuzoq: Barcha argumentlar bir-biriga mos ma'lumot turida bo'lishi kerak. Masalan son ustuniga `COALESCE(comm, 'Mavjud emas')` deb yozsangiz xato beradi; buning uchun `COALESCE(TO_CHAR(comm), 'Mavjud emas')` deb yoziladi.",
      related: ['nvl', 'nullif', 'is-null', 'case-when'],
      keywords: ['coalesce', 'null almashtirish', 'bosh qiymat', 'zaxira', 'nvl', 'ifnull']
    },
    {
      id: 'nvl',
      name: 'NVL / IFNULL',
      category: '4-Hafta • Null & Skalyar Funksiyalar',
      week: 4,
      summary: "Agar birinchi qiymat NULL bo'lsa, uning o'rniga berilgan ikkinchi zaxira qiymatni qaytaradi.",
      whatItDoes: "`NVL(val, replacement)` — Oracle bazasida, `IFNULL(val, replacement)` — MySQL da ishlatiladi. `COALESCE` ning faqat 2 ta argument qabul qiluvchi soddalashtirilgan ko'rinishidir.",
      whenToUse: "Bitta ustun NULL bo'lganda uning o'rniga standart qiymat qo'yishda. Masalan, komissiya bo'lmasa 0 qo'yish.",
      syntax: "-- Oracle:\nNVL(comm, 0)\n\n-- MySQL:\nIFNULL(comm, 0)",
      combinations: "Arifmetik amallarda va hisobotlarda NULL larni tozalashda ishlatiladi.",
      example: "SELECT ename, sal, NVL(comm, 0) AS komissiya\nFROM emp;",
      gotchas: "`NVL` har ikkala argumentni darhol hisoblaydi (eager evaluation). `COALESCE` esa short-circuit usulida ishlaydi (birinchi qiymat topilsa, qolganlarini hisoblab o'tirmaydi). Standart SQL uchun `COALESCE` tavsiya etiladi.",
      related: ['coalesce', 'nullif'],
      keywords: ['nvl', 'ifnull', 'null', 'zaxira qiymat']
    },
    {
      id: 'nullif',
      name: 'NULLIF(val1, val2)',
      category: '4-Hafta • Null & Skalyar Funksiyalar',
      week: 4,
      summary: "Ikkala argument bir-biriga teng bo'lsa NULL qaytaradi, aks holda birinchi argumentni qaytaradi.",
      whatItDoes: "Qiymatlarni solishtiradi: `val1 == val2` bo'lsa natija NULL, aks holda `val1`. Nolga bo'lish (Division by Zero) xatoligini oldini olishda tengsiz vositadir.",
      whenToUse: "Matematik bo'lish amallarida maxraj 0 bo'lib qolishidan himoyalanishda: `summa / NULLIF(soni, 0)` (0 ga bo'lish xatosi o'rniga xavfsiz NULL qaytaradi).",
      syntax: "NULLIF(ifoda1, ifoda2)",
      combinations: "COALESCE bilan birgalikda: `COALESCE(summa / NULLIF(soni, 0), 0)`.",
      example: "-- Nolga bo'lish xatosini to'xtatish:\nSELECT \n  dname,\n  jami_savdo,\n  xodimlar_soni,\n  jami_savdo / NULLIF(xodimlar_soni, 0) AS xodim_boshiga_savdo\nFROM hisobot;",
      gotchas: "Ikkala argument ham NULL bo'lsa xato beradi (`NULLIF(NULL, NULL)` taqiqlangan).",
      related: ['coalesce', 'nvl'],
      keywords: ['nullif', 'nolga bolish', 'division by zero', 'teng bolsa null']
    },
    {
      id: 'upper-lower',
      name: 'UPPER / LOWER / INITCAP (Matn Registri)',
      category: '4-Hafta • Matn Funksiyalari',
      week: 4,
      summary: "Matndagi harflarni katta (UPPER), kichik (LOWER) yoki so'z bosh harflarini katta (INITCAP) qilish.",
      whatItDoes: "Foydalanuvchi qidiruvda kichik yoki katta harf yozishidan qat'i nazar (Case-Insensitive) to'g'ri solishtirishni ta'minlaydi.",
      whenToUse: "Foydalanuvchi ism-familiyasini chiroyli formatda chiqarishda yoki qidiruv tizimlarida.",
      syntax: "UPPER(matn)\nLOWER(matn)\nINITCAP(matn)",
      combinations: "WHERE shartida: `WHERE UPPER(ename) = UPPER('smith')`.",
      example: "SELECT \n  LOWER(ename) AS kichik_ism,\n  INITCAP(job) AS chiroyli_kasb\nFROM emp\nWHERE UPPER(ename) = 'KING';",
      gotchas: "Agar ustunga `WHERE UPPER(ename) = 'SCOTT'` deb shart bersangiz va ustunda oddiy B-Tree indeks bo'lsa, indeks ishlamay qoladi! Buning uchun Function-Based Index yaratish kerak.",
      related: ['substr-instr', 'trim-func'],
      keywords: ['upper', 'lower', 'initcap', 'katta harf', 'kichik harf', 'registr']
    },
    {
      id: 'substr-instr',
      name: 'SUBSTR / INSTR (Matn Qismini Ajratish)',
      category: '4-Hafta • Matn Funksiyalari',
      week: 4,
      summary: "Matndan belgilangan o'rindan boshlab qism kesib olish (SUBSTR) va qidirilayotgan so'z indeksini topish (INSTR).",
      whatItDoes: "`SUBSTR(matn, boshlangich_orin, uzunlik)` matn parchasini qaytaradi. `INSTR(matn, qidirilayotgan_harf)` esa harf matnda nechanchi o'rinda turganini raqam sifatida beradi.",
      whenToUse: "Telefon raqamidan kodni ajratish (`+998`), seriya raqamlarini tahlil qilish yoki email domenini ajratib olishda.",
      syntax: "SUBSTR(matn, start, length)\nINSTR(matn, qidiruv)",
      combinations: "Emailning faqat domen qismini olish uchun ikkisi birga ishlatiladi: `SUBSTR(email, INSTR(email, '@') + 1)`.",
      example: "SELECT \n  ename,\n  SUBSTR(ename, 1, 3) AS birinchi_3_harf,\n  INSTR(ename, 'A') AS a_harfi_orni\nFROM emp;",
      gotchas: "SQL da indekslar dasturlash tillari (0 dan) kabi emas, 1 dan boshlanadi! `SUBSTR(ename, 1, 1)` birinchi harfni beradi.",
      related: ['length-func', 'upper-lower'],
      keywords: ['substr', 'instr', 'substring', 'kesish', 'matn qismi']
    },
    {
      id: 'length-trim',
      name: 'LENGTH / TRIM',
      category: '4-Hafta • Matn Funksiyalari',
      week: 4,
      summary: "Matn uzunligini belgilarda sanash (LENGTH) va bosh/oxiridagi keraksiz bo'shliqlarni tozalash (TRIM).",
      whatItDoes: "`TRIM` kiritilgan ma'lumotlarning ikki chekkasidagi tasodifiy bo'sh joylarni tozalaydi. `LENGTH` esa matn necha belgidan iboratligini hisoblaydi.",
      whenToUse: "Parol uzunligini tekshirishda (`LENGTH(parol) >= 8`) yoki foydalanuvchi kiritgan telefon raqami chetidagi bo'shliqlarni olib tashlashda.",
      syntax: "LENGTH(matn)\nTRIM(matn)\nLTRIM(matn) / RTRIM(matn)",
      combinations: "WHERE shartlarida va ma'lumotlarni tozalash (Data Cleansing) jarayonlarida.",
      example: "SELECT ename, LENGTH(ename) AS harflar_soni\nFROM emp\nWHERE LENGTH(ename) = 4;\n\n-- Chetdagi bo'shliqlarni tozalash:\nUPDATE mijozlar SET telefon = TRIM(telefon);",
      gotchas: "CHAR turidagi ustunlar o'z uzunligini to'ldirish uchun o'ng tomonga avtomatik bo'shliqlar qo'shadi, shuning uchun CHAR bilan ishlaganda doim `RTRIM` kerak bo'ladi.",
      related: ['substr-instr', 'upper-lower'],
      keywords: ['length', 'trim', 'ltrim', 'rtrim', 'uzunlik', 'boshliqni tozalash']
    },

    // ========================================================================
    // 5-HAFTA: MURAKKAB TAHLIL, SUBQUERY & WINDOW FUNKSIYALARI
    // ========================================================================
    {
      id: 'case-when',
      name: 'CASE WHEN ... THEN ... ELSE ... END',
      category: '5-Hafta • Shartli Mantiq',
      week: 5,
      summary: "SQL so'rovlarida shartli tarmoqlanish (IF-THEN-ELSE mantiqi) ifodasi.",
      whatItDoes: "Har bir qator uchun berilgan shartlarni ketma-ket tekshirib, birinchi TRUE bo'lgan `THEN` qiymatini qaytaradi. Agar hech qaysi shart bajarilmasa, `ELSE` dagi qiymat olinadi.",
      whenToUse: "Oylik miqdoriga qarab xodimlarga toifa berish ('PAST', 'O'RTA', 'YUQORI'), buyurtma holatini matn ko'rinishida formatlash, yoki pivot jadval yasashda.",
      syntax: "CASE \n  WHEN shart1 THEN natija1\n  WHEN shart2 THEN natija2\n  ELSE zaxira_natija\nEND",
      combinations: "SELECT, WHERE, ORDER BY, hatto agregat funksiyalar ichida shartli hisoblash uchun ishlatiladi: `SUM(CASE WHEN deptno = 10 THEN sal ELSE 0 END)`.",
      example: "SELECT \n  ename,\n  sal,\n  CASE \n    WHEN sal >= 3000 THEN 'Yuqori Daraja'\n    WHEN sal >= 1500 THEN 'O''rta Daraja'\n    ELSE 'Kichik Daraja'\n  END AS maosh_toifasi\nFROM emp;",
      gotchas: "Har doim oxirida `END` kalit so'zini qo'yishni unutmang. Agar `ELSE` yozilmasa va hech qaysi shart mos kelmasa, natija sukut bo'yicha NULL bo'ladi.",
      related: ['coalesce', 'decode-func'],
      keywords: ['case when', 'if else', 'shartli ifoda', 'tarmoqlanish', 'then else end']
    },
    {
      id: 'correlated-subquery',
      name: 'CORRELATED SUBQUERY (Korrelyatsion Quyi So\'rov)',
      category: '5-Hafta • Quyi So\'rovlar',
      week: 5,
      summary: "Tashqi so'rovning joriy qatoriga bog'langan va har bir qator uchun qayta-qayta hisoblanadigan quyi so'rov.",
      whatItDoes: "Quyi so'rov ichida tashqi jadvalning ustuniga havola qilinadi (`e1.deptno = e2.deptno`). Tashqi so'rovdagi har bir qator uchun ichki so'rov qayta bajarilib, joriy qator kontekstida hisoblanadi.",
      whenToUse: "Har bir xodimni o'zining bo'limidagi o'rtacha oylik bilan solishtirishda: 'O'z bo'limining o'rtacha maoshidan ko'p oluvchi xodimlarni toping'.",
      syntax: "SELECT * FROM emp e1\nWHERE sal > (\n  SELECT AVG(sal) FROM emp e2 WHERE e2.deptno = e1.deptno\n);",
      combinations: "EXISTS, NOT EXISTS, WHERE, SELECT ro'yxatida korrelyatsiya bilan qo'llaniladi.",
      example: "-- O'z bo'limidagi o'rtacha oylikdan ko'p maosh oluvchilar:\nSELECT e1.empno, e1.ename, e1.deptno, e1.sal\nFROM emp e1\nWHERE e1.sal > (\n  SELECT AVG(e2.sal) \n  FROM emp e2 \n  WHERE e2.deptno = e1.deptno\n);",
      gotchas: "Unumdorlik tuzog'i! Agar tashqi jadvalda 1 million qator bo'lsa, ichki so'rov 1 million marta qayta-qayta ishga tushadi! Bunday vaziyatda Window funksiyalar (`AVG(sal) OVER (PARTITION BY deptno)`) orqali yozish 100 barobar tezroq ishlaydi.",
      related: ['exists-operator', 'window-functions'],
      keywords: ['correlated subquery', 'korrelyatsion', 'bogliq quyi sorov', 'ichma-ich']
    },
    {
      id: 'row-number',
      name: 'ROW_NUMBER() OVER (...)',
      category: '5-Hafta • Analitik Funksiyalar',
      week: 5,
      summary: "Natijalar to'plamiga yoki har bir guruhga 1 dan boshlab qat'iy o'sib boruvchi noyob tartib raqami berish.",
      whatItDoes: "Bir xil qiymatlar bo'lsa ham tenglik qilmaydi, har bir qatorga albatta alohida noyob raqam (1, 2, 3, 4...) beradi.",
      whenToUse: "Sahifalash (Pagination) qilishda yoki har bir bo'limdan eng oxirgi ishga kirgan 1 ta xodimni topishda (Top-1 per group).",
      syntax: "ROW_NUMBER() OVER (PARTITION BY guruh_ustuni ORDER BY saralash_ustuni DESC)",
      combinations: "CTE (Common Table Expression) bilan birga Top-N filtrlashda ishlatiladi: `WHERE rn <= 3`.",
      example: "-- Har bir bo'limdagi eng ko'p maosh oluvchi birinchi xodimni topish:\nWITH Tartiblangan AS (\n  SELECT \n    ename, deptno, sal,\n    ROW_NUMBER() OVER (PARTITION BY deptno ORDER BY sal DESC) AS rn\n  FROM emp\n)\nSELECT ename, deptno, sal\nFROM Tartiblangan\nWHERE rn = 1;",
      gotchas: "Agar ikkita xodimning maoshi bir xil bo'lsa, kim birinchi, kim ikkinchi bo'lishi deterministik bo'lmasligi mumkin. Deterministik bo'lishi uchun `ORDER BY sal DESC, empno ASC` deb ikkinchi unikal ustun qo'shish kerak.",
      related: ['rank-func', 'dense-rank', 'partition-by'],
      keywords: ['row_number', 'tartib raqami', 'window function', 'analitik', 'over partition by']
    },
    {
      id: 'dense-rank',
      name: 'DENSE_RANK() OVER (...)',
      category: '5-Hafta • Analitik Funksiyalar',
      week: 5,
      summary: "Qiymatlar teng bo'lganda bir xil o'rin beruvchi va raqamlarni sakratib yubormaydigan zich reyting funksiyasi.",
      whatItDoes: "Olimpiada o'rinlari kabi ishlaydi: agar 2 kishi 1-o'rinni olsa (1, 1), keyingi odamga albatta 2-o'rin beriladi (1, 1, 2, 3). `RANK()` kabi oraliqni sakratib (1, 1, 3) yubormaydi.",
      whenToUse: "Kompaniyadagi 'Eng yuqori 3 xil maosh darajasi'ni topishda.",
      syntax: "DENSE_RANK() OVER (ORDER BY sal DESC)",
      combinations: "PARTITION BY bilan bo'limlar kesimida reytinglashda qo'llanadi.",
      example: "-- Kompaniyadagi ikkinchi eng yuqori maosh oluvchilarni topish:\nWITH MaoshReyting AS (\n  SELECT ename, sal, DENSE_RANK() OVER (ORDER BY sal DESC) AS rnk\n  FROM emp\n)\nSELECT ename, sal FROM MaoshReyting WHERE rnk = 2;",
      gotchas: "Agar `RANK()` ishlatsangiz va eng yuqori maoshni ikkita xodim olsa (1, 1), 2-o'rin yo'qolib, keyingisi 3 bo'lib ketadi va `WHERE rnk = 2` bo'sh natija qaytaradi! Shuning uchun `DENSE_RANK` xavfsiz.",
      related: ['row-number', 'rank-func', 'partition-by'],
      keywords: ['dense_rank', 'reyting', 'zich reyting', 'sakrashsiz', 'window function']
    },
    {
      id: 'lag-lead',
      name: 'LAG() & LEAD() (Oldingi va Keyingi Qator)',
      category: '5-Hafta • Analitik Funksiyalar',
      week: 5,
      summary: "Joriy qatordan turib o'zidan oldingi (LAG) yoki o'zidan keyingi (LEAD) qator qiymatini qo'shimcha JOIN siz o'qib olish.",
      whatItDoes: "Vaqt qatorlari (Time Series) bo'yicha o'sish dinamikasini hisoblash imkonini beradi. Masalan, joriy oyning savdosini o'tgan oy savdosi bilan solishtirish.",
      whenToUse: "Oylik tushumning o'tgan oyga nisbatan o'sish foizini hisoblashda, xodimning maoshi o'zidan oldin ishga kirgan hamkasbidan qanchaga farq qilishini bilishda.",
      syntax: "LAG(ustun, oraliq_qadami, zaxira_qiymat) OVER (ORDER BY sana)\nLEAD(ustun, oraliq_qadami, zaxira_qiymat) OVER (ORDER BY sana)",
      combinations: "PARTITION BY bilan bo'limlar yoki toifalar doirasida ishlatiladi.",
      example: "-- Har bir xodimning maoshini o'zidan oldin olingan maosh bilan solishtirish:\nSELECT \n  ename,\n  sal,\n  LAG(sal, 1, 0) OVER (ORDER BY sal) AS oldingi_maosh,\n  sal - LAG(sal, 1, sal) OVER (ORDER BY sal) AS farqi\nFROM emp;",
      gotchas: "Eng birinchi qator uchun `LAG` ning oldingi qiymati bo'lmagani sababli NULL qaytaradi. Buning oldini olish uchun uchinchi argumentda zaxira qiymat bering: `LAG(sal, 1, 0)`.",
      related: ['row-number', 'dense-rank'],
      keywords: ['lag', 'lead', 'oldingi qator', 'keyingi qator', 'dinamika', 'window']
    },

    // ========================================================================
    // 6-HAFTA: TO'PLAM OPERATORLARI, CTE, KO'RINISHLAR & OPTIMIZATSIYA
    // ========================================================================
    {
      id: 'union-all',
      name: 'UNION vs UNION ALL (Natijalarni Birlashtirish)',
      category: '6-Hafta • To\'plam Operatorlari',
      week: 6,
      summary: "Ikkita yoki undan ortiq SELECT so'rovlarining natijalarini bitta umumiy ro'yxatga birlashtirish.",
      whatItDoes: "`UNION ALL` barcha natijalarni boricha, dublikatlari bilan birga tezkor birlashtiradi. `UNION` esa birlashtirgandan so'ng xotirada saralab, barcha takrorlangan dublikatlarni o'chirib tashlaydi.",
      whenToUse: "Toshkent filiali va Samarqand filiali jadvallaridagi ma'lumotlarni yagona hisobotga jamlashda.",
      syntax: "SELECT ustun1, ustun2 FROM jadval1\nUNION ALL\nSELECT ustun1, ustun2 FROM jadval2;",
      combinations: "Ikkala so'rovdagi ustunlar soni va ularning ma'lumot turlari (Data Types) mutlaqo mos kelishi shart. `ORDER BY` faqat eng oxirgi SELECT dan keyin qo'yiladi.",
      example: "-- Barcha xodimlar va bo'lim boshliqlarini yagona kontaktlar ro'yxatiga chiqarish:\nSELECT ename AS ism, 'XODIM' AS toifa FROM emp\nUNION ALL\nSELECT dname AS ism, 'BOLIM' AS toifa FROM dept\nORDER BY ism;",
      gotchas: "Agar dublikatlar bo'lmasligiga ishonchingiz komil bo'lsa yoki dublikatlar kerak bo'lsa, DOIMO `UNION ALL` ishlating! Oddiy `UNION` keraksiz saralash (Sort Unique) tufayli katta jadvallarda juda sekin ishlaydi.",
      related: ['intersect-operator', 'except-operator'],
      keywords: ['union', 'union all', 'birlashtirish', 'toplam', 'set operator']
    },
    {
      id: 'intersect-operator',
      name: 'INTERSECT (Kesishma Topish)',
      category: '6-Hafta • To\'plam Operatorlari',
      week: 6,
      summary: "Ikkala so'rov natijasida ham mavjud bo'lgan umumiy (kesishuvchi) qatorlarni topish.",
      whatItDoes: "To'plamlar nazariyasidagi kesishma (A ∩ B) amalini bajaradi. Faqat ikkala SELECT da ham bir xil bo'lgan yozuvlar ekranga chiqadi.",
      whenToUse: "Ham 2025-yilda, ham 2026-yilda xarid qilgan doimiy mijozlarni topishda.",
      syntax: "SELECT mijoz_id FROM buyurtmalar_2025\nINTERSECT\nSELECT mijoz_id FROM buyurtmalar_2026;",
      combinations: "Ustunlar soni va turlari mos bo'lishi shart.",
      example: "-- Ham 'CLERK', ham 'MANAGER' lavozimi mavjud bo'lgan bo'limlar:\nSELECT deptno FROM emp WHERE job = 'CLERK'\nINTERSECT\nSELECT deptno FROM emp WHERE job = 'MANAGER';",
      gotchas: "Ko'pincha `INTERSECT` o'rniga `INNER JOIN` yoki `EXISTS` ishlatish mumkin va ular optimizator tomonidan indekslardan yaxshiroq foydalanadi.",
      related: ['union-all', 'except-operator'],
      keywords: ['intersect', 'kesishma', 'umumiy qatorlar', 'set operator']
    },
    {
      id: 'except-operator',
      name: 'EXCEPT / MINUS (To\'plam Ayirmasi)',
      category: '6-Hafta • To\'plam Operatorlari',
      week: 6,
      summary: "Birinchi so'rov natijalaridan ikkinchi so'rovda uchragan barcha qatorlarni ayirib tashlash.",
      whatItDoes: "To'plamlar ayirmasini (A - B) hisoblaydi. PostgreSQL/MySQL/SQL Server da `EXCEPT`, Oracle da `MINUS` deb nomlanadi.",
      whenToUse: "Kompaniyada mavjud bo'lgan, ammo ichida birorta ham xodim ishlamaydigan bo'limlarni topishda.",
      syntax: "-- Barcha bo'limlardan xodimi bor bo'limlarni ayirish:\nSELECT deptno FROM dept\nEXCEPT\nSELECT DISTINCT deptno FROM emp WHERE deptno IS NOT NULL;",
      combinations: "ORDER BY faqat butun ifodaning eng oxirida beriladi.",
      example: "SELECT deptno FROM dept\nMINUS\nSELECT deptno FROM emp;",
      gotchas: "Ketma-ketlik muhim! `A EXCEPT B` bilan `B EXCEPT A` umuman boshqa-boshqa natijalar qaytaradi.",
      related: ['intersect-operator', 'not-exists'],
      keywords: ['except', 'minus', 'ayirma', 'ayirib tashlash', 'set difference']
    },
    {
      id: 'exists-operator',
      name: 'EXISTS / NOT EXISTS',
      category: '6-Hafta • Quyi So\'rovlar',
      week: 6,
      summary: "Quyi so'rovda kamida 1 ta mos qator mavjud yoki mavjud emasligini boolean (TRUE/FALSE) ko'rinishida tekshirish.",
      whatItDoes: "Short-circuit xususiyatiga ega: quyi so'rovdan birinchi mos yozuv topilishi bilanoq, qidiruvni to'xtatadi va TRUE qaytaradi. Butun jadvalni to'liq skan qilib o'tirmaydi.",
      whenToUse: "Katta ma'lumotlar bazalarida `IN` va `NOT IN` o'rniga tezkor tekshiruvlar o'tkazishda.",
      syntax: "WHERE EXISTS (\n  SELECT 1 FROM boglangan_jadval b WHERE b.id = asosiy.id\n)",
      combinations: "Korrelyatsion quyi so'rovlar bilan birga ishlatiladi. `SELECT 1` yoki `SELECT *` yozishning farqi yo'q, chunki optimizator faqat qator borligini tekshiradi.",
      example: "-- Kamida bitta qo'l ostidagi xodimi bor rahbarlarni topish:\nSELECT e.empno, e.ename, e.job\nFROM emp e\nWHERE EXISTS (\n  SELECT 1 FROM emp w WHERE w.mgr = e.empno\n);",
      gotchas: "MUHIM TUZOQ: Agar quyi so'rovda bitta bo'lsa ham `NULL` qiymat bo'lsa, `NOT IN (...)` operatori butunlay sinadi va bo'sh natija qaytaradi! `NOT EXISTS` esa NULL qiymatlardan qo'rqmaydi va doimo 100% to'g'ri ishlaydi.",
      related: ['correlated-subquery', 'except-operator'],
      keywords: ['exists', 'not exists', 'mavjudlik', 'tezkor tekshiruv', 'short circuit']
    },
    {
      id: 'cte-with',
      name: 'WITH (CTE - Common Table Expressions)',
      category: '6-Hafta • Murakkab So\'rovlar',
      week: 6,
      summary: "So'rov boshida nomlangan, qayta ishlatiladigan mantiqiy virtual oraliq jadvallarni (WITH bloklarini) e'lon qilish.",
      whatItDoes: "O'qilishi juda qiyin bo'lgan ko'p qavatli ichma-ich so'rovlarni (Subqueries) toza, qadam-baqadam tartiblangan mantiqiy bloklarga ajratadi. Kodning o'qilishini (Readability) 10 barobarga oshiradi.",
      whenToUse: "Murakkab analitik hisobotlarda, bir nechta guruhlash bosqichlaridan o'tuvchi hisob-kitoblarda.",
      syntax: "WITH blok1 AS (\n  SELECT ... FROM ...\n),\nblok2 AS (\n  SELECT ... FROM blok1 WHERE ...\n)\nSELECT * FROM blok2;",
      combinations: "Rekursiv CTE (`WITH RECURSIVE`) orqali daraxtsimon ierarxiyalarni (tashkilot tuzilmasi, yo'nalishlar) aylanib chiqish mumkin.",
      example: "-- Bo'limlar o'rtacha maoshini hisoblab, keyin unga JOIN qilish:\nWITH BolimOrtacha AS (\n  SELECT deptno, AVG(sal) AS avg_sal\n  FROM emp\n  GROUP BY deptno\n)\nSELECT e.ename, e.sal, bo.avg_sal, e.sal - bo.avg_sal AS farq\nFROM emp e\nJOIN BolimOrtacha bo ON e.deptno = bo.deptno\nWHERE e.sal > bo.avg_sal;",
      gotchas: "CTE faqat o'zi e'lon qilingan bitta so'rov doirasidagina yashaydi. Boshqa mustaqil so'rovlarda uni chaqirib bo'lmaydi (buning uchun `VIEW` yaratish kerak).",
      related: ['create-view', 'correlated-subquery'],
      keywords: ['cte', 'with', 'common table expression', 'oraliq jadval', 'toza kod']
    },
    {
      id: 'create-view',
      name: 'CREATE VIEW (Virtual Ko\'rinish Yaratish)',
      category: '6-Hafta • Baza Obyektlari',
      week: 6,
      summary: "Murakkab so'rovni virtual jadval sifatida bazada saqlash (diskda ma'lumot saqlamaydi, so'rov chaqirilganda yuguradi).",
      whatItDoes: "Murakkab ko'p jadvalli JOIN larni bitta sodda virtual jadval ortiga yashiradi. Ma'lumotlar xavfsizligini ta'minlaydi: foydalanuvchiga butun jadvalni emas, faqat VIEW ni berib, maxfiy ustunlarni (masalan, parol yoki oylik) yashirib qo'yish mumkin.",
      whenToUse: "Hisobotlar uchun tayyor virtual jadvallar taqdim etishda va xavfsizlik chegaralarini belgilashda.",
      syntax: "CREATE OR REPLACE VIEW ko'rinish_nomi AS\nSELECT ustun1, ustun2 FROM jadval WHERE ...;",
      combinations: "WITH CHECK OPTION (VIEW orqali kiritilayotgan yozuvlar uning WHERE shartiga mos kelishini majburlash) bilan birga ishlatiladi.",
      example: "-- Xodimlarning oyliklarini yashirgan holda ommaviy ko'rinish yaratish:\nCREATE VIEW v_ommaviy_xodimlar AS\nSELECT empno, ename, job, deptno\nFROM emp;\n\n-- Oddiy jadvaldek chaqirish:\nSELECT * FROM v_ommaviy_xodimlar WHERE deptno = 10;",
      gotchas: "Oddiy VIEW diskda yangi ma'lumot saqlamaydi. Har safar VIEW chaqirilganda uning ichidagi SQL so'rovi qaytadan ishga tushadi. Agar VIEW juda sekin ishlayotgan bo'lsa, `MATERIALIZED VIEW` ishlatish kerak.",
      related: ['cte-with', 'create-table'],
      keywords: ['view', 'create view', 'virtual jadval', 'korinish', 'xavfsizlik']
    },
    {
      id: 'create-index',
      name: 'CREATE INDEX (B-Tree Indeks Yaratish)',
      category: '6-Hafta • So\'rov Optimallashtirish',
      week: 6,
      summary: "Qidiruv (SELECT, WHERE, JOIN) amallarini yuzlab barobarga tezlashtiruvchi B-Tree ma'lumotlar strukturasi.",
      whatItDoes: "Kitob oxiridagi mundarijaga o'xshaydi. Millionlab qatorlar ichidan butun jadvalni boshidan oxirigacha titib chiqmasdan (Full Table Scan qilmasdan), logarifmik vaqtda `O(log N)` kerakli qatorni darhol topib beradi.",
      whenToUse: "WHERE, JOIN ON yoki ORDER BY da juda ko'p qatnashadigan ustunlarga (masalan: `mijoz_telefon`, `email`, `tovar_artikul`) qo'yiladi.",
      syntax: "CREATE INDEX idx_nomi ON jadval_nomi (ustun_nomi);\n\n-- Kompozit indeks:\nCREATE INDEX idx_emp_dept_sal ON emp (deptno, sal);",
      combinations: "UNIQUE INDEX (birlamchi kalit kabi noyoblikni ham ta'minlaydi), COMPOSITE INDEX (bir nechta ustun uchun) turlarida qo'llanadi.",
      example: "-- Xodimlar jadvalidagi 'ename' ustuniga qidiruvni tezlashtiruvchi indeks:\nCREATE INDEX idx_emp_ename ON emp (ename);\n\n-- Endi bu so'rov bir zumda ishlaydi:\nSELECT * FROM emp WHERE ename = 'SCOTT';",
      gotchas: "ME'YORNI BILISH SHART: Har bir yangi indeks `INSERT`, `UPDATE` va `DELETE` amallarini sekinlashtiradi, chunki ma'lumot qo'shilganda har bitta indeks daraxti ham qayta muvozanatlanadi. Faqat haqiqatan qidiriladigan ustunlarga indeks qo'ying.",
      related: ['explain-plan', 'primary-key'],
      keywords: ['index', 'create index', 'b-tree', 'tezlashtirish', 'optimizatsiya', 'mundarija']
    },
    {
      id: 'explain-plan',
      name: 'EXPLAIN / EXPLAIN PLAN (Ijro Rejasini Tahlil Qilish)',
      category: '6-Hafta • So\'rov Optimallashtirish',
      week: 6,
      summary: "Baza optimizatori so'rovni qanday ketma-ketlikda, qaysi indekslar orqali va qancha xarajat (Cost) bilan bajarishini ko'rsatuvchi tahlil vositasi.",
      whatItDoes: "SQL kodingiz qanday bajarilishini 'kapot ostiga qarab' ko'rsatib beradi: Full Table Scan bo'lyaptimi yoki Index Scan? Qaysi JOIN algoritmi (Nested Loops, Hash Join) tanlangan? Taxminiy sarflanadigan xotira va I/O yuklamasi qancha?",
      whenToUse: "So'rov sekin ishlayotganda uning sababini topish va optimallashtirishda.",
      syntax: "EXPLAIN PLAN FOR SELECT ...;\n-- PostgreSQL / MySQL da:\nEXPLAIN ANALYZE SELECT ...;",
      combinations: "ANALYZE (so'rovni haqiqatda ishga tushirib, real vaqt bilan reja vaqtini solishtirish) bilan birga qo'llanadi.",
      example: "EXPLAIN SELECT e.ename, d.dname\nFROM emp e\nJOIN dept d ON e.deptno = d.deptno\nWHERE e.sal > 3000;",
      gotchas: "Ko'rsatilgan `Cost` (xarajat) bu soniyalar emas, balki optimizatorning nisbiy ball tizimidir. Eng muhim qaraydigan joyingiz — rejadagi `Filter` va `Seq Scan / Full Table Scan` yozuvlaridir.",
      related: ['create-index', 'hash-join'],
      keywords: ['explain', 'explain plan', 'ijro rejasi', 'cost', 'optimizator', 'tahlil']
    },
    {
      id: 'hash-join',
      name: 'HASH JOIN (Xotirada Hash Birlashtirish)',
      category: '6-Hafta • So\'rov Optimallashtirish',
      week: 6,
      summary: "Katta hajmli jadvallarni bir-biriga ulashda eng tezkor ishlaydigan relyatsion JOIN ijro algoritmi.",
      whatItDoes: "Optimizator kichikroq jadvalni xotiraga (RAM) yuklab, bog'lanish ustuni bo'yicha tezkor Hash Table quradi. So'ngra ikkinchi katta jadvalni bir marta o'qib, xotiradagi hash-jadval orqali bir zumda juftlarini topadi.",
      whenToUse: "Indekslanmagan yirik jadvallarni tenglik (`=`) sharti bilan bog'laganda.",
      syntax: "-- Optimizator tomonidan avtomatik tanlanadi yoki HINT orqali majburlanadi:\nSELECT /*+ USE_HASH(e d) */ e.ename, d.dname\nFROM emp e JOIN dept d ON e.deptno = d.deptno;",
      combinations: "Equi-join (`=`) shartlarida va katta ma'lumotlar omborlarida (Data Warehouses) qo'llaniladi.",
      example: "-- EXPLAIN natijasida ko'rinadi:\n-- -> Hash Join (e.deptno = d.deptno)\n--    -> Seq Scan on dept d\n--    -> Hash\n--       -> Seq Scan on emp e",
      gotchas: "Faqat tenglik (`=`) shartida ishlaydi. No-tenglik shartlarida (`<`, `>`, `BETWEEN`) Hash Join ishlamaydi.",
      related: ['explain-plan', 'inner-join'],
      keywords: ['hash join', 'join algoritmi', 'optimizatsiya', 'xotira', 'ijro rejasi']
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
