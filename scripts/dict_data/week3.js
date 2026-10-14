/**
 * 3-HAFTA: SQL DDL, DML, CHEKLOVLAR & MA'LUMOT TURLARI
 * Jadval tuzilishi, ustun turlari, yaxlitlik cheklovlari va asosiy SQL so'rovlari.
 */
module.exports = [
  {
    id: 'set-search-path',
    name: 'SET search_path (Sxema Qidiruv Yo\'li)',
    category: '3-Hafta • SQL DDL & DML Asoslari',
    week: 3,
    summary: "PostgreSQL sessiyasida SQL so'rovlari jadvallarni qaysi sxemalar ichidan qidirishi kerakligini belgilovchi qidiruv yo'lini o'rnatish.",
    whatItDoes: "Foydalanuvchi SQL so'rovida jadval nomini sxemasiz yozganda (masalan, `SELECT * FROM branch`), PostgreSQL `search_path` ro'yxatidagi sxemalarni chapdan o'ngga qarab ketma-ket tekshiradi va birinchi uchragan joydan ochadi. Bu jadvallarni `sxema.jadval` deb uzun yozmasdan to'g'ridan-to'g'ri chaqirish imkonini beradi va ko'p foydalanuvchili tizimlarda ma'lumotlar aralashib ketishining oldini oladi.",
    whenToUse: "Yangi laboratoriya muhitiga, filial bazasiga yoki maxsus modulga (masalan, `ddl_lab`, `company_lab`) ulanganda tizim jadvallarni to'g'ri topishi uchun.",
    syntax: "-- 1. Standart o'rnatish:\nSET search_path TO sxema1, sxema2, public;\n\n-- 2. Tenglik belgisi bilan yozish:\nSET search_path = sxema1, sxema2;\n\n-- 3. Joriy qidiruv yo'lini ko'rish:\nSHOW search_path;",
    combinations: `Barcha Asosiy Kombinatsiyalar:
• SET search_path TO sxema1, public — Dastlab 'sxema1' dan, topilmasa umumiy 'public' dan qidiradi
• SET search_path = sxema1, sxema2 — '=' belgisi orqali o'rnatish
• SHOW search_path — Hozir qaysi sxemalar faol ekanligini konsolda ko'rsatadi
• RESET search_path — Standart ("$user", public) qidiruv yo'liga qaytaradi
• SET LOCAL search_path TO ... — Faqat bitta tranzaksiya (BEGIN...COMMIT) ichida amal qiluvchi vaqtinchalik yo'naltirish`,
    example: "-- ddl_lab va public sxemalarini qidiruv yo'liga kiritish:\nSET search_path TO ddl_lab, public;\n\n-- Endi jadvallarni ddl_lab.branch emas, to'g'ridan-to'g'ri branch deb chaqirish mumkin:\nSELECT * FROM branch;",
    gotchas: "Tuzoq! Agar `SET search_path` ro'yxatiga `public` sxemasini qo'shishni unutsangiz, standart funksiyalar va umumiy jadvallar 'relation does not exist' xatosi bilan ishlamay qolishi mumkin. Shuningdek, `SET` buyrug'i faqat joriy sessiya (ulanib turgan vaqt) uchun amal qiladi; yangi sessiya ochilganda standart holatga qaytadi.",
    related: ['create-schema', 'create-table', 'sql-datatypes'],
    keywords: ['search_path', 'set search_path', 'set', 'schema', 'sxema', 'qidiruv yoli', 'ddl_lab', 'company_lab', 'public', 'show search_path']
  },
  {
    id: 'create-schema',
    name: 'CREATE SCHEMA (Sxema / Modul Yaratish)',
    category: '3-Hafta • SQL DDL & DML Asoslari',
    week: 3,
    summary: "Ma'lumotlar bazasida jadvallar, ko'rinishlar (view) va funksiyalarni mantiqiy guruhlash uchun yangi nomlar fazosi (namespace/sxema) yaratish.",
    whatItDoes: "Xuddi operatsion tizimdagi papka (folder) kabi ishlaydi. Bitta ma'lumotlar bazasi ichida alohida bo'limlar (masalan: `buxgalteriya`, `ombor`, `kadrlar`) uchun alohida jadvallarni yaratish va huquqlarni boshqarish imkonini beradi.",
    whenToUse: "Katta loyihalarda mikroxizmatlar yoki modullar jadvallarini bir-biriga aralashtirmasdan ajratishda.",
    syntax: "CREATE SCHEMA sxema_nomi;\nCREATE SCHEMA IF NOT EXISTS sxema_nomi;\nDROP SCHEMA sxema_nomi CASCADE;",
    combinations: "`IF NOT EXISTS` orqali sxema mavjud bo'lsa xatolik bermaslikni ta'minlash mumkin. `AUTHORIZATION` orqali sxemaga ega foydalanuvchi biriktiriladi.",
    example: "CREATE SCHEMA IF NOT EXISTS company_lab;\nSET search_path TO company_lab, public;",
    gotchas: "Sxema o'chirilganda (`DROP SCHEMA`) uning ichida jadvallar bor bo'lsa xatolik beradi. Agar barcha jadvallari bilan qo'shib yo'q qilish kerak bo'lsa, `CASCADE` qo'shilishi shart.",
    related: ['set-search-path', 'create-table', 'drop-table'],
    keywords: ['create schema', 'schema', 'sxema', 'namespace', 'modul', 'ddl']
  },
  {
    id: 'create-table',
    name: 'CREATE TABLE (Jadval Yaratish)',
    category: '3-Hafta • SQL DDL & DML Asoslari',
    week: 3,
    summary: "Ma'lumotlar bazasida yangi relyatsion jadval, uning ustunlari, ma'lumot turlari va cheklovlarini e'lon qilish.",
    whatItDoes: "Diskda va katalog tizimida jadval strukturasini (sxemasini) hosil qiladi. Har bir ustunning nomini, ma'lumot turini (INT, VARCHAR, DATE) va butunlik qoidalarini (PRIMARY KEY, NOT NULL, CHECK, DEFAULT) belgilaydi.",
    whenToUse: "Tizimning har qanday yangi subyekti (mijoz, tovar, to'lov) uchun ma'lumotlar ombori qurishda.",
    syntax: "CREATE TABLE jadval_nomi (\n  ustun1 tur1 [cheklovlar],\n  ustun2 tur2 [cheklovlar],\n  CONSTRAINT cheklov_nomi CHEKLOV_TURI (ustun)\n);",
    combinations: "PRIMARY KEY, FOREIGN KEY ... REFERENCES, UNIQUE, NOT NULL, CHECK, DEFAULT bilan qo'llaniladi.",
    example: "CREATE TABLE mijozlar (\n  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n  fio VARCHAR(100) NOT NULL,\n  balans DECIMAL(12,2) DEFAULT 0.00 CHECK (balans >= 0),\n  royxat_sanasi TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);",
    gotchas: "Jadvallarni yaratish ketma-ketligi o'ta muhim! Agar A jadval B ga tashqi kalit (FK) bilan bog'langan bo'lsa, avval B jadvalni yaratib olish shart, aks holda baza 'table does not exist' xatosini beradi.",
    related: ['alter-table', 'drop-table', 'primary-key', 'foreign-key'],
    keywords: ['create table', 'jadval yaratish', 'ddl', 'schema', 'ustunlar', 'sql']
  },
  {
    id: 'alter-table',
    name: 'ALTER TABLE (Jadvalni O\'zgartirish)',
    category: '3-Hafta • SQL DDL & DML Asoslari',
    week: 3,
    summary: "Mavjud jadval tarkibiga yangi ustun qo'shish, ustunni o'chirish, turini o'zgartirish yoki yangi cheklovlar biriktirish.",
    whatItDoes: "Mavjud jadvalni va undagi saqlangan ma'lumotlarni o'chirib yubormasdan, uning tuzilishini xavfsiz kengaytiradi yoki tahrirlaydi.",
    whenToUse: "Tizim ishga tushgandan so'ng yangi talablar paydo bo'lganda (masalan, mijoz jadvaliga `telegram_id` ustuni qo'shish kerak bo'lganda).",
    syntax: "-- Ustun qo'shish:\nALTER TABLE jadval ADD COLUMN yangi_ustun TUR;\n\n-- Cheklov qo'shish:\nALTER TABLE jadval ADD CONSTRAINT fk_nomi FOREIGN KEY (u) REFERENCES ota(id);\n\n-- Ustunni o'chirish:\nALTER TABLE jadval DROP COLUMN ustun_nomi;",
    combinations: "ADD, DROP COLUMN, ALTER COLUMN / MODIFY, ADD CONSTRAINT, DROP CONSTRAINT, RENAME TO buyruqlari bilan ishlatiladi.",
    example: "-- Mijoz jadvaliga telefon ustuni va UNIQUE cheklov qo'shish:\nALTER TABLE mijozlar ADD COLUMN telefon VARCHAR(20);\nALTER TABLE mijozlar ADD CONSTRAINT uq_mijoz_telefon UNIQUE (telefon);",
    gotchas: "Agar jadvalda allaqachon ma'lumotlar bor bo'lsa va siz `NOT NULL` ustun qo'shmoqchi bo'lsangiz, albatta `DEFAULT` qiymat berishingiz shart! Aks holda eski qatorlar NULL bo'lib qoladi va xatolik beradi.",
    related: ['create-table', 'check-constraint', 'foreign-key'],
    keywords: ['alter table', 'ozgartirish', 'ustun qoshish', 'add column', 'ddl']
  },
  {
    id: 'drop-table',
    name: 'DROP TABLE & CASCADE CONSTRAINTS (Jadvalni Butunlay Yo\'q Qilish)',
    category: '3-Hafta • SQL DDL & DML Asoslari',
    week: 3,
    summary: "Jadvalni uning barcha qatorlari, indekslari, triggerlari va sxemasi bilan birga diskdan butunlay o'chirib yuborish.",
    whatItDoes: "DELETE yoki TRUNCATE dan farqli o'laroq, jadvalning o'zini ham yo'q qiladi. Baza katalogidan uning nomi o'chiriladi. Orqaga qaytarib (ROLLBACK qilib) bo'lmaydi!",
    whenToUse: "Eskirgan vaqtincha jadvallarni yoki sinov loyihalarini butunlay tozalashda.",
    syntax: "DROP TABLE jadval_nomi [CASCADE CONSTRAINTS];",
    combinations: "Agar boshqa jadvallar ushbu jadvalga FK bilan ulanib turgan bo'lsa, `CASCADE CONSTRAINTS` (yoki PostgreSQL da `CASCADE`) qo'shilmasa, baza o'chirishga ruxsat bermaydi.",
    example: "DROP TABLE IF EXISTS vaqtincha_hisobot CASCADE;",
    gotchas: "Dahshatli buyruq! 'DROP TABLE' so'rovi tranzaksiyadan tashqarida ishlaydi (avtomatik COMMIT bo'ladi). Bir soniyada butun ma'lumotlar bazasini yo'q qilib qo'yishingiz mumkin. Har doim `IF EXISTS` bilan ishlating.",
    related: ['truncate-table', 'delete-from', 'create-table'],
    keywords: ['drop table', 'ochirish', 'yoq qilish', 'cascade constraints', 'ddl']
  },
  {
    id: 'truncate-table',
    name: 'TRUNCATE TABLE (Jadvalni Chaqmoqdek Tez Bo\'shatish)',
    category: '3-Hafta • SQL DDL & DML Asoslari',
    week: 3,
    summary: "Jadval strukturasini saqlagan holda uning barcha qatorlarini DELETE ga nisbatan 100x tezroq tozalash.",
    whatItDoes: "Har bir qatorni birma-bir o'chirib tranzaksiya logiga (WAL) yozib o'tirmaydi, balki to'g'ridan-to'g'ri ma'lumotlar saqlangan xotira sahifalarini (data pages) bo'shatadi va avtomatik ID hisoblagichini (Identity/Sequence) boshlang'ich 1 ga tushiradi (Reset).",
    whenToUse: "Katta hajmli log jadvallarini, kesh jadvallarini yoki test ma'lumotlarini har kuni tunda tozalashda.",
    syntax: "TRUNCATE TABLE jadval_nomi [RESTART IDENTITY];",
    combinations: "DDL buyrug'i hisoblanadi. Triggerlarni (ON DELETE) ishga tushirmaydi.",
    example: "TRUNCATE TABLE sessiyalar RESTART IDENTITY;",
    gotchas: "TRUNCATE buyrug'ida `WHERE` shartini yozib bo'lmaydi! U har doim barcha qatorlarni yo'q qiladi. Agar faqat ba'zi qatorlarni o'chirish kerak bo'lsa, `DELETE FROM ... WHERE` ishlatilishi shart.",
    related: ['delete-from', 'drop-table'],
    keywords: ['truncate', 'truncate table', 'tez tozalash', 'reset identity', 'ddl']
  },
  {
    id: 'insert-into',
    name: 'INSERT INTO (Yangi Qator Qo\'shish)',
    category: '3-Hafta • SQL DDL & DML Asoslari',
    week: 3,
    summary: "Jadvalga yangi ma'lumot qatorlarini kiritish (DML buyrug'i).",
    whatItDoes: "Jadvalga bitta yoki birdaniga bir nechta qatorlarni yozadi. Shuningdek boshqa jadvaldan qidirib topilgan natijalarni to'g'ridan-to'g'ri ko'chirib o'tkazish (`INSERT INTO ... SELECT`) imkoniyatiga ega.",
    whenToUse: "Yangi foydalanuvchi ro'yxatdan o'tganda, yangi buyurtma berilganda, to'lov amalga oshirilganda.",
    syntax: "-- Aniq ustunlar ko'rsatilgan xavfsiz usul:\nINSERT INTO jadval (u1, u2) VALUES (qiymat1, qiymat2);\n\n-- Bir nechta qator kiritish (Batch):\nINSERT INTO jadval (u1, u2) VALUES (q1, q2), (q3, q4);",
    combinations: "RETURNING id (PostgreSQL) yordamida yangi yaratilgan ID ni darhol qaytarib olish mumkin.",
    example: "INSERT INTO foydalanuvchilar (ism, email, balans)\nVALUES ('Anvar', 'anvar@example.com', 50000.00)\nRETURNING id, royxat_sanasi;",
    gotchas: "Hech qachon ustun nomlarini yozmasdan shunchaki `INSERT INTO jadval VALUES (...)` qilmang! Kelajakda jadvalga yangi ustun qo'shilsa yoki ustunlar o'rni almashsa, kodingiz qulab tushadi.",
    related: ['update-set', 'delete-from', 'select-from'],
    keywords: ['insert', 'insert into', 'yozuv kiritish', 'values', 'dml']
  },
  {
    id: 'update-set',
    name: 'UPDATE ... SET (Ma\'lumotlarni Yangilash)',
    category: '3-Hafta • SQL DDL & DML Asoslari',
    week: 3,
    summary: "Jadvaldagi mavjud qatorlarning ustun qiymatlarini o'zgartirish va yangilash.",
    whatItDoes: "WHERE shartiga mos keladigan barcha qatorlardagi ko'rsatilgan ustunlarni yangi qiymatlar bilan almashtiradi.",
    whenToUse: "Mijoz parolini yangilaganda, mahsulot narxi oshganda yoki buyurtma holati 'Yetkazildi' ga o'zgarganda.",
    syntax: "UPDATE jadval_nomi\nSET ustun1 = yangi_qiymat1, ustun2 = yangi_qiymat2\nWHERE shart;",
    combinations: "Matematik amallar bilan ishlatish mumkin: `SET balans = balans + 10000`.",
    example: "-- 42-buyurtmaning holatini o'zgartirish:\nUPDATE buyurtmalar\nSET holat = 'yetkazildi', yangilangan_vaqt = CURRENT_TIMESTAMP\nWHERE buyurtma_id = 42;",
    gotchas: "Eng mashhur fojia: WHERE shartini yozishni unutmang! Agar `UPDATE xodimlar SET oylik = 0;` deb yozib yuborsangiz, kompaniyadagi barcha 10 000 ta xodimning oyligi 0 bo'lib qoladi!",
    related: ['delete-from', 'insert-into', 'where-clause'],
    keywords: ['update', 'set', 'yangilash', 'tahrirlash', 'where', 'dml']
  },
  {
    id: 'delete-from',
    name: 'DELETE FROM (Qatorlarni O\'chirish)',
    category: '3-Hafta • SQL DDL & DML Asoslari',
    week: 3,
    summary: "Jadvaldan ko'rsatilgan shartga mos keluvchi qatorlarni xavfsiz o'chirish.",
    whatItDoes: "Jadval strukturasiga tegmasdan, faqat WHERE filtriga tushgan qatorlarni o'chiradi. Har bir o'chirish tranzaksiya logiga yoziladi, shuning uchun `ROLLBACK` bilan qaytarib olish mumkin.",
    whenToUse: "Bekor qilingan buyurtmalarni yoki muddati o'tgan xabarlarni o'chirishda.",
    syntax: "DELETE FROM jadval_nomi WHERE shart;",
    combinations: "Subquery bilan ishlatish mumkin: `WHERE mijoz_id IN (SELECT id FROM ...)`.",
    example: "DELETE FROM savat_bandlari\nWHERE savat_id = 105 AND tovar_id = 12;",
    gotchas: "Aynan UPDATE kabi: WHERE shartisiz yozilgan `DELETE FROM jadval;` jadvaldagi BARCHA qatorlarni o'chirib tashlaydi!",
    related: ['truncate-table', 'update-set', 'where-clause'],
    keywords: ['delete', 'delete from', 'ochirish', 'where', 'dml']
  },
  {
    id: 'select-from',
    name: 'SELECT ... FROM (So\'rov va Proyeksiya)',
    category: '3-Hafta • SQL DDL & DML Asoslari',
    week: 3,
    summary: "Bazada saqlangan ma'lumotlarni o'qish, hisob-kitob qilish va ekranga chiqarishning asosiy buyrug'i.",
    whatItDoes: "FROM qaysi jadvaldan olishni, SELECT esa aynan qaysi ustunlar yoki hisoblangan ifodalarni ko'rsatishni belgilaydi. Bazadagi ma'lumotlarni o'zgartirmaydi (Read-Only).",
    whenToUse: "Foydalanuvchiga ro'yxatlarni, hisobotlarni, statistikani ko'rsatishda (eng ko'p ishlatiladigan SQL buyrug'i).",
    syntax: "SELECT ustun1, ustun2 AS taxallus FROM jadval_nomi;",
    combinations: "WHERE, GROUP BY, HAVING, ORDER BY, LIMIT kabi barcha SQL qismlarining boshlang'ich nuqtasi.",
    example: "SELECT id, nomi, narx, narx * 0.88 AS chegirmali_narx\nFROM mahsulotlar;",
    gotchas: "Hech qachon ishlab chiqarishda (Production) `SELECT *` yozmang! Bu tarmoqni keraksiz megabaytlar bilan to'ldiradi va B-Tree Covering Index optimizatsiyasini o'ldiradi. Faqat kerakli ustunlarni sanab yozing.",
    related: ['where-clause', 'order-by', 'distinct-clause', 'ra-project'],
    keywords: ['select', 'from', 'sorov', 'proyeksiya', 'dql', 'ustunlar']
  },
  {
    id: 'where-clause',
    name: 'WHERE (Qatorlarni Filtrlash)',
    category: '3-Hafta • SQL DDL & DML Asoslari',
    week: 3,
    summary: "SELECT, UPDATE yoki DELETE buyruqlarida faqat ko'rsatilgan mantiqiy shartga mos keluvchi qatorlar ustida ishlash.",
    whatItDoes: "Har bir qatorni tekshiradi. Shart natijasi `TRUE` bo'lgan qatorlargina tanlab olinadi. `FALSE` yoki `UNKNOWN` (NULL bo'lsa) bo'lgan qatorlar chetlashtiriladi.",
    whenToUse: "Keraksiz millionlab qatorlarni tashlab, faqat kerakli qatorlarni tezkor qidirishda.",
    syntax: "SELECT * FROM jadval WHERE ustun = qiymat AND shart2 OR NOT shart3;",
    combinations: "Taqqoslagichlar (`=, <>, !=, <, >, <=, >=`), `BETWEEN`, `IN`, `LIKE`, `IS NULL` va mantiqiy bog'lovchilar (`AND, OR, NOT`) bilan ishlaydi.",
    example: "SELECT fio, oylik FROM xodimlar\nWHERE bolim_id = 10 AND (oylik > 5000000 OR lavozim = 'Rahbar');",
    gotchas: "WHERE ichida agregat funksiyalarni (`SUM, AVG, COUNT`) to'g'ridan-to'g'ri ishlatib bo'lmaydi! Masalan `WHERE COUNT(*) > 5` xato beradi. Guruhlarni filtrlash uchun `HAVING` kerak.",
    related: ['having-clause', 'like-operator', 'between-operator', 'in-operator', 'is-null'],
    keywords: ['where', 'filtr', 'shart', 'and', 'or', 'not', 'taqqoslash']
  },
  {
    id: 'distinct-clause',
    name: 'DISTINCT (Takrorlanuvchi Nusxalarni Tozalash)',
    category: '3-Hafta • SQL DDL & DML Asoslari',
    week: 3,
    summary: "Natijalar ro'yxatidagi bir xil bo'lgan dublikat qatorlarni olib tashlab, faqat unikal nusxalarni qoldirish.",
    whatItDoes: "Barcha ko'rsatilgan ustunlar kombinatsiyasi bo'yicha saralaydi (yoki xotirada Hash Table quradi) va aynan bir xil qatorlarni bittaga qisqartiradi.",
    whenToUse: "Hayotiy misol: 'Bizning tizimimizda qaysi shaharlardan xaridorlar bor?'. Shahar nomlari 100 000 marta takrorlanmasligi uchun `DISTINCT shahar` deb yoziladi.",
    syntax: "SELECT DISTINCT ustun1, ustun2 FROM jadval;",
    combinations: "`COUNT(DISTINCT ustun)` ko'rinishida unikal elementlar sonini sanashda keng qo'llaniladi.",
    example: "-- Mijozlarimiz buyurtma bergan unikal shaharlar:\nSELECT DISTINCT viloyat, shahar FROM manzillar ORDER BY viloyat;",
    gotchas: "DISTINCT butun qatorga taalluqli bo'ladi! Agar `SELECT DISTINCT shahar, ism` deb yozsangiz, baza 'shahar + ism' juftligi bo'yicha unikal qiladi, faqat shahar bo'yicha emas.",
    related: ['select-from', 'count-func', 'ra-project'],
    keywords: ['distinct', 'takrorlanmas', 'unikal', 'dublikat yoqotish', 'select distinct']
  },
  {
    id: 'order-by',
    name: 'ORDER BY (Natijalarni Tartiblash: ASC, DESC)',
    category: '3-Hafta • SQL DDL & DML Asoslari',
    week: 3,
    summary: "So'rov natijalarini ko'rsatilgan ustunlar bo'yicha o'sish (ASC) yoki kamayish (DESC) tartibida saralash.",
    whatItDoes: "Relyatsion ma'lumotlar bazasida qatorlar xotirada betartib saqlanadi. Agar ORDER BY yozmasangiz, natijalar tartibi kafolatlanmaydi. ORDER BY so'rovning eng oxirgi bosqichida ishga tushadi.",
    whenToUse: "Eng so'nggi yangiliklarni (sana bo'yicha kamayuvchi), eng arzon mahsulotlarni (narx bo'yicha o'suvchi) yoki alifbo tartibida saralashda.",
    syntax: "SELECT * FROM jadval ORDER BY ustun1 ASC, ustun2 DESC [NULLS FIRST | NULLS LAST];",
    combinations: "`NULLS LAST` yoki `NULLS FIRST` orqali bo'sh (NULL) qiymatlar ro'yxatning boshida yoki oxirida turishini nazorat qilish mumkin.",
    example: "-- Narxi eng qimmat 10 ta tovar:\nSELECT nomi, narx\nFROM tovarlar\nORDER BY narx DESC NULLS LAST\nLIMIT 10;",
    gotchas: "Indekslanmagan katta jadvallarda ORDER BY juda og'ir 'External Sort' (diskka yozib saralash) ga sabab bo'lishi mumkin. Tez-tez saralanadigan ustunlarga B-Tree indeks qo'yish kerak.",
    related: ['limit-offset', 'select-from', 'create-index'],
    keywords: ['order by', 'saralash', 'tartiblash', 'asc', 'desc', 'nulls last']
  },
  {
    id: 'limit-offset',
    name: 'LIMIT & OFFSET (Sahifalash / Pagination)',
    category: '3-Hafta • SQL DDL & DML Asoslari',
    week: 3,
    summary: "Natijaviy ro'yxatdan faqat ma'lum sondagi qatorlarni qirqib olish (Sahifalab ko'rsatish).",
    whatItDoes: "LIMIT — qancha qator olishni belgilaydi (`LIMIT 20`). OFFSET — boshidan nechta qatorni tashlab yuborishni (sakrab o'tishni) belgilaydi (`OFFSET 40` -> 3-sahifa). ANSI SQL da `FETCH FIRST n ROWS ONLY` deb yoziladi.",
    whenToUse: "Web saytlarda va mobil ilovalarda cheksiz scroll yoki sahifalar (1-sahifa, 2-sahifa...) yaratishda.",
    syntax: "-- PostgreSQL / MySQL / SQLite:\nSELECT * FROM mahsulotlar ORDER BY id LIMIT 20 OFFSET 40;\n\n-- ANSI SQL / Oracle 12c+:\nOFFSET 40 ROWS FETCH NEXT 20 ROWS ONLY;",
    combinations: "Har doim `ORDER BY` bilan birga ishlatilishi shart! Aks holda har safar tasodifiy qatorlar chiqib sahifalash buziladi.",
    example: "-- 2-sahifadagi 10 ta buyurtma (har sahifada 10 tadan):\nSELECT * FROM buyurtmalar\nORDER BY buyurtma_vaqti DESC\nLIMIT 10 OFFSET 10;",
    gotchas: "Katta OFFSET (masalan `OFFSET 1000000`) juda sekin ishlaydi! Chunki baza oldingi 1 million qatorni o'qib, keyin tashlab yuborishga majbur bo'ladi. Millionlab qatorlar uchun 'Keyset Pagination' (`WHERE id > last_id LIMIT 20`) ishlatiladi.",
    related: ['order-by', 'select-from'],
    keywords: ['limit', 'offset', 'pagination', 'sahifalash', 'fetch first']
  },
  {
    id: 'like-operator',
    name: 'LIKE & ILIKE (Shablon Qidiruvi: Barcha Wildcard Kombinatsiyalari)',
    category: '3-Hafta • SQL DDL & DML Asoslari',
    week: 3,
    summary: "Matnli ustunlar ichidan qisman moslik yoki shablon asosida qidirish operatori. Barcha wildcard kombinatsiyalari (% va _), ESCAPE va ILIKE.",
    whatItDoes: "LIKE operatori matn ustunlarini ko'rsatilgan shablonga (pattern) solishtiradi. Unda 2 ta maxsus belgi (wildcard) bor:\n1. `%` — 0 ta, 1 ta yoki istalgancha ixtiyoriy belgi o'rniga o'tadi.\n2. `_` (pastki chiziq) — qat'iy bitta ixtiyoriy belgi o'rniga o'tadi.\n`ILIKE` — PostgreSQL da katta-kichik harflarni farqlamaydigan (Case-Insensitive) qidiruv.",
    whenToUse: "Foydalanuvchi qidiruv maydonchasiga so'z kiritganda, email domenini aniqlashda, telefon raqam prefiksini tekshirishda yoki kod formatini tekshirishda.",
    syntax: "-- 1. 'L' bilan boshlanuvchilar:\nWHERE shahar LIKE 'L%'\n\n-- 2. 'n' bilan tugovchilar:\nWHERE shahar LIKE '%n'\n\n-- 3. Ichida 'L' harfi bo'lganlar:\nWHERE shahar LIKE '%L%'\n\n-- 4. 2-harfi 'L' bo'lganlar:\nWHERE ism LIKE '_L%'\n\n-- 5. 3-harfi 'L' bo'lganlar:\nWHERE kod LIKE '__L%'\n\n-- 6. 'L' bilan boshlanib 'n' bilan tugovchilar:\nWHERE shahar LIKE 'L%n'\n\n-- 7. 'L' bilan boshlanib 'n' bilan tugaydigan aniq 4 ta harfli so'zlar:\nWHERE kod LIKE 'L__n'\n\n-- 8. Aniq 5 ta belgidan iborat barcha qatorlar:\nWHERE parol LIKE '_____'\n\n-- 9. Matn ichidagi haqiqiy '%' (foiz) belgisining o'zini qidirish (ESCAPE):\nWHERE chegirma LIKE '%!%%' ESCAPE '!'\n\n-- 10. Matn ichidagi haqiqiy '_' (pastki chiziq) belgisini qidirish:\nWHERE fayl_nomi LIKE '%!_%' ESCAPE '!'\n\n-- 11. Mos kelmaydiganlarni qidirish (NOT LIKE):\nWHERE email NOT LIKE '%@spam.com'\n\n-- 12. Katta-kichik harfni ajratmasdan qidirish (ILIKE):\nWHERE qidiruv ILIKE '%toshkent%'",
    combinations: `Barcha Asosiy Kombinatsiyalar Ro'yxati:
• 'L%' — 'L' bilan boshlanadigan istalgan so'z ('London', 'Lola')
• '%L' — 'L' bilan tugaydigan istalgan so'z ('Aral', 'Hotel')
• '%L%' — Tarkibida 'L' harfi mavjud barcha so'zlar ('Alisher', 'Qalam')
• '_L%' — 1-harfi ixtiyoriy, 2-harfi aynan 'L' bo'lgan so'zlar ('Ali', 'Ulughbek')
• '__L%' — Dastlabki 2 ta harfi ixtiyoriy, 3-harfi aynan 'L' bo'lgan so'zlar ('Salom', 'Polvon')
• 'L%n' — 'L' bilan boshlanib, 'n' bilan tugaydigan so'zlar ('London', 'Lion')
• 'L__n' — 'L' bilan boshlanib, 'n' bilan tugaydigan va JAMI AYNAN 4 ta belgidan iborat so'zlar ('Lean', 'Loan')
• '____' — Aynan 4 ta ixtiyoriy belgidan iborat so'zlar
• LIKE '%!%%' ESCAPE '!' — Haqiqiy '%' belgisini qidirish ('100%' so'zini topadi)
• LIKE '%!_%' ESCAPE '!' — Haqiqiy '_' belgisini qidirish ('user_id' so'zini topadi)
• NOT LIKE '%@gmail.com' — Gmail pochtasidan FOYDALANMAYDIGAN foydalanuvchilar
• ILIKE '%apple%' — Katta-kichik harf farqsiz ('Apple', 'APPLE', 'apple')
• SIMILAR TO '%(A|B)%' — SQL standarti bo'yicha Regex shablon qidiruvi`,
    example: `-- 1. Toshkent shahridagi yoki telefon raqami +99890 bilan boshlangan mijozlar:
SELECT fio, shahar, telefon FROM mijozlar
WHERE shahar ILIKE 'toshkent%' OR telefon LIKE '+99890%';

-- 2. Matnda haqiqiy 50% chegirma yozilgan mahsulotlarni topish:
SELECT tovar_nomi, izoh FROM mahsulotlar
WHERE izoh LIKE '%50!%%' ESCAPE '!';

-- 3. Davlat raqami 01 A 777 AA kabi 2-harfi aniq bo'lgan mashinalarni topish:
SELECT avto_raqam FROM avtomobillar
WHERE avto_raqam LIKE '__!_%' ESCAPE '!';`,
    gotchas: "Indeks tuzog'i (Performance Gotcha)! Agar shablon foiz bilan boshlansa (`'%bek'`), relyatsion bazalardagi an'anaviy B-Tree indeksi ishlamaydi va Full Table Scan (millionlab qatorni qarab chiqish) yuz beradi! B-Tree faqat prefiksli qidiruvda (`'bek%'`) ishlaydi. '%soz%' kabi to'liq matnli qidiruvlar uchun GIN / GiST Trigram indeksi (`pg_trgm`) ishlatilishi shart.",
    related: ['where-clause', 'upper-lower', 'create-index', 'gin-gist-index'],
    keywords: ['like', 'ilike', 'wildcard', 'foiz', 'pastki chiziq', 'escape', 'not like', 'similar to', 'shablon', 'qidiruv']
  },
  {
    id: 'between-operator',
    name: 'BETWEEN ... AND ... (Diapazon Bo\'yicha Filtrlash)',
    category: '3-Hafta • SQL DDL & DML Asoslari',
    week: 3,
    summary: "Qiymat berilgan minimal va maksimal chegaralar oralig'ida ekanligini qisqa va qulay tekshirish.",
    whatItDoes: "`ustun >= min AND ustun <= max` ifodasining ixcham ekvivalenti. E'tibor bering: ikkala chegara qiymatlari ham oraliqqa kiradi (Inclusive).",
    whenToUse: "Narxlar oralig'ini belgilashda (`BETWEEN 100000 AND 500000`), sanalar bo'yicha hisobot olishda yoki yosh chegaralarini tekshirishda.",
    syntax: "WHERE narx BETWEEN 50000 AND 150000\nWHERE tugilgan_sana BETWEEN '2000-01-01' AND '2005-12-31'",
    combinations: "`NOT BETWEEN` orqali oraliqqa kirmaydigan elementlarni topish mumkin.",
    example: "-- 2024-yil yanvar oyidagi buyurtmalar:\nSELECT buyurtma_id, summa\nFROM buyurtmalar\nWHERE sana BETWEEN '2024-01-01' AND '2024-01-31';",
    gotchas: "TIMESTAMP bilan ishlashda tuzoq! Agar ustunda soat-daqiqa bo'lsa (`2024-01-31 18:30`), `'2024-01-31'` deb yozsangiz, u `2024-01-31 00:00:00` deb qabul qilinadi va 31-yanvar kungi kunduzgi buyurtmalar qolib ketadi!",
    related: ['where-clause', 'in-operator'],
    keywords: ['between', 'and', 'diapazon', 'oraliq', 'chegara', 'narx oraligi']
  },
  {
    id: 'in-operator',
    name: 'IN (...) & NOT IN (...) (To\'plam / Ro\'yxat Ichidan Qidirish)',
    category: '3-Hafta • SQL DDL & DML Asoslari',
    week: 3,
    summary: "Ustun qiymati berilgan ro'yxatdagi qiymatlardan birortasiga tengligini tekshirish.",
    whatItDoes: "Bir nechta `OR` shartlarini ixchamlashtiradi (`ustun = 'A' OR ustun = 'B' OR ustun = 'C' => ustun IN ('A', 'B', 'C')`). Shuningdek ichiga subquery qabul qila oladi.",
    whenToUse: "Foydalanuvchi bir nechta filtrlarni tanlaganda (masalan: Status 'Yangi', 'Jarayonda' yoki 'Yetkazilmoqda' bo'lgan buyurtmalar).",
    syntax: "-- Statik ro'yxat:\nWHERE status IN ('NEW', 'PROCESSING', 'DELIVERED')\n\n-- Dinamik subquery:\nWHERE bolim_id IN (SELECT id FROM bolimlar WHERE shahar = 'Toshkent')",
    combinations: "`NOT IN (...)` ro'yxatda yo'q bo'lganlarni saralaydi.",
    example: "SELECT fio, lavozim FROM xodimlar\nWHERE bolim_id IN (10, 20, 30);",
    gotchas: "NOT IN va NULL tuzog'i! Agar `NOT IN` ro'yxati ichida bitta dona bo'lsa ham `NULL` qiymat uchrasa (masalan subquery natijasida), butun so'rov natijasi BO'SH (0 qator) bo'lib chiqadi! Har doim `NOT EXISTS` ishlatish xavfsizroq.",
    related: ['where-clause', 'between-operator', 'exists-operator', 'three-valued-logic'],
    keywords: ['in', 'not in', 'royxat', 'toplam', 'subquery in', 'where in']
  },
  {
    id: 'is-null',
    name: 'IS NULL & IS NOT NULL (Bo\'sh Qiymatlarni Tekshirish)',
    category: '3-Hafta • SQL DDL & DML Asoslari',
    week: 3,
    summary: "Ustunda ma'lumot yo'qligini (noma'lum / bo'sh ekanligini) tekshirishning yagona to'g'ri usuli.",
    whatItDoes: "NULL bu nol (0) yoki bo'sh matn ('') emas. NULL — bu ma'lumotning yo'qligi yoki noma'lumligidir. Shu sababli uni tenglik bilan (`ustun = NULL`) tekshirib bo'lmaydi! Faqat `IS NULL` yoki `IS NOT NULL` deb yoziladi.",
    whenToUse: "Hali telefon raqamini kiritmagan mijozlarni yoki hali yopilmagan (tugash sanasi yo'q) ochiq loyihalarni topishda.",
    syntax: "WHERE telefon IS NULL;\nWHERE yopilgan_sana IS NOT NULL;",
    combinations: "COALESCE, NVL yoki IFNULL funksiyalari bilan birgalikda NULL qiymatlarni standart qiymatga almashtirishda qo'llaniladi.",
    example: "-- Boshliqlari bo'lmagan xodimlarni (Top Managerlarni) topish:\nSELECT fio, lavozim FROM xodimlar\nWHERE rahbar_id IS NULL;",
    gotchas: "Klassik xato: `WHERE rahbar_id = NULL` deb yozish! SQL uch qiymatli mantiqqa ega bo'lgani uchun `= NULL` har doim `UNKNOWN` qaytaradi va birorta ham qator chiqmaydi!",
    related: ['three-valued-logic', 'coalesce', 'nvl'],
    keywords: ['is null', 'is not null', 'bosh qiymat', 'nomanlum', 'null tekshirish']
  },
  {
    id: 'three-valued-logic',
    name: 'THREE-VALUED LOGIC (Uch Qiymatli Mantiq: TRUE, FALSE, UNKNOWN)',
    category: '3-Hafta • SQL DDL & DML Asoslari',
    week: 3,
    summary: "SQL da mantiqiy ifodalar faqat Rost yoki Yolg'on emas, balki Noma'lum (UNKNOWN) ham bo'lishi mumkinligi qoidasi.",
    whatItDoes: "NULL bilan qilingan har qanday arifmetik yoki mantiqiy amal (`NULL = 5`, `NULL + 10`, `NULL = NULL`) har doim `NULL` yoki `UNKNOWN` qaytaradi. `WHERE` sharti esa faqat qat'iy `TRUE` bo'lgan qatorlarnigina o'tkazadi.",
    whenToUse: "Murakkab shartli filtrlarda NULL qiymatlar kutilmagan xatoliklarga olib kelmasligi uchun hisobga olinadi.",
    syntax: "-- Mantiq jadvali:\n-- TRUE AND UNKNOWN => UNKNOWN\n-- FALSE AND UNKNOWN => FALSE\n-- TRUE OR UNKNOWN => TRUE\n-- NOT UNKNOWN => UNKNOWN",
    combinations: "`IS NULL` va `COALESCE` orqali UNKNOWN holatini oldini olish mumkin.",
    example: "-- Agar bonus ustuni NULL bo'lsa:\nSELECT fio, oylik + COALESCE(bonus, 0) AS jami_daromad\nFROM xodimlar;\n-- Agar COALESCE ishlatilmasa, oylik + NULL => NULL bo'lib qoladi!",
    gotchas: "NULL bilan hech narsani tenglashtirib bo'lmaydi! Hatto `NULL = NULL` ham FALSE/UNKNOWN qaytaradi!",
    related: ['is-null', 'coalesce', 'where-clause'],
    keywords: ['three valued logic', 'uch qiymatli mantiq', 'unknown', 'null mantiq', 'haqiqat jadvali']
  },
  {
    id: 'sql-datatypes',
    name: 'SQL DATA TYPES (Ma\'lumot Turlari: INT, VARCHAR, NUMERIC, TIMESTAMP)',
    category: '3-Hafta • SQL DDL & DML Asoslari',
    week: 3,
    summary: "Ustunda qanday turdagi qiymat saqlanishini va u xotiradan qancha joy olishini belgilovchi turlar.",
    whatItDoes: "1. Sonli: `INT` (4 bayt), `BIGINT` (8 bayt, ID lar uchun), `DECIMAL(12,2)` (pul va moliya uchun aniq kasr son).\n2. Matnli: `VARCHAR(n)` (o'zgaruvchan uzunlik), `CHAR(n)` (qat'iy uzunlik), `TEXT` (cheksiz matn).\n3. Sana: `DATE` (faqat sana), `TIME` (faqat vaqt), `TIMESTAMP` (sana + soat, daqiqa, soniya).\n4. Mantiqiy: `BOOLEAN` (TRUE / FALSE).",
    whenToUse: "Jadval yaratishda to'g'ri va tejamkor ma'lumot turini tanlash xotirani 5x tejaydi va so'rovlarni tezlashtiradi.",
    syntax: "id BIGINT,\nism VARCHAR(50),\nbalans DECIMAL(15,2),\nfaolmi BOOLEAN DEFAULT TRUE,\nyaratilgan_sana TIMESTAMP DEFAULT CURRENT_TIMESTAMP",
    combinations: "Har bir ma'lumot turi o'ziga mos cheklovlar (`CHECK`, `DEFAULT`) bilan birga beriladi.",
    example: "CREATE TABLE tolovlar (\n  tolov_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n  summa DECIMAL(12,2) NOT NULL CHECK (summa > 0),\n  valyuta CHAR(3) DEFAULT 'UZS',\n  tolangan_vaqt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP\n);",
    gotchas: "Hech qachon pul mablag'lari (balans, narx) uchun `FLOAT` yoki `DOUBLE` ishlatmang! Chunki ular taqribiy (binary floating point) hisoblaydi va 0.1 + 0.2 = 0.30000000000000004 bo'lib hisoblar buziladi. Pul uchun faqat `DECIMAL` yoki `NUMERIC` kerak!",
    related: ['create-table', 'domain-integrity'],
    keywords: ['data types', 'int', 'bigint', 'varchar', 'decimal', 'timestamp', 'malumot turlari']
  },
  {
    id: 'check-constraint',
    name: 'CHECK CONSTRAINT (Shaxsiy Qoida Cheklovi)',
    category: '3-Hafta • SQL DDL & DML Asoslari',
    week: 3,
    summary: "Ustundagi ma'lumotlar faqat dasturchi belgilab bergan maxsus mantiqiy qoidaga bo'ysunishini ta'minlovchi filtr.",
    whatItDoes: "Har safar INSERT yoki UPDATE qilinganda shartni tekshiradi. Agar kiritilayotgan ma'lumot shartni buzsa, baza tranzaksiyani bekor qiladi va xatolik tashlaydi.",
    whenToUse: "Foydalanuvchi yoshi manfiy bo'lmasligi (`yosh >= 0`), chegirma 100% dan oshmasligi (`chegirma <= 100`) yoki tugash sanasi boshlanish sanasidan keyin bo'lishi (`tugash_sana > boshlash_sana`).",
    syntax: "-- Ustun darajasida:\nyosh INT CHECK (yosh >= 18 AND yosh <= 100)\n\n-- Jadval darajasida (ko'p ustunli tekshiruv):\nCONSTRAINT chk_sanalar CHECK (tugash_sanasi >= boshlanish_sanasi)",
    combinations: "RegEx (muntazam ifodalar) bilan birga telefon formati yoki email formatini tekshirish mumkin.",
    example: "CREATE TABLE xodimlar (\n  id INT PRIMARY KEY,\n  fio VARCHAR(100),\n  oylik DECIMAL(12,2) CHECK (oylik >= 1500000),\n  jins CHAR(1) CHECK (jins IN ('M', 'F'))\n);",
    gotchas: "CHECK sharti ichida boshqa jadvallardan subquery qilib tekshirib bo'lmaydi! Agar boshqa jadval bilan bog'liq qoida kerak bo'lsa, `TRIGGER` yozishga to'g'ri keladi.",
    related: ['domain-integrity', 'create-table', 'default-constraint'],
    keywords: ['check', 'check constraint', 'cheklov', 'mantiqiy qoida', 'validatsiya']
  },
  {
    id: 'default-constraint',
    name: 'DEFAULT CONSTRAINT (Standart Avtomatik Qiymat)',
    category: '3-Hafta • SQL DDL & DML Asoslari',
    week: 3,
    summary: "Agar INSERT paytida ustun uchun hech qanday qiymat berilmasa, avtomatik ravishda qo'yiladigan boshlang'ich qiymat.",
    whatItDoes: "Ustun bo'sh (NULL) qolib ketishining oldini oladi. Dasturchi ko'rsatmagan taqdirda ham standart holatni (`'pending'`, `0`, `CURRENT_TIMESTAMP`) yozib qo'yadi.",
    whenToUse: "Yangi ro'yxatdan o'tgan foydalanuvchining hisobini avtomatik `balans = 0` qilish yoki `status = 'ACTIVE'` qilib belgilashda.",
    syntax: "ustun_nomi TUR DEFAULT standart_qiymat",
    combinations: "`NOT NULL` bilan birga ishlatilganda, ustunning hech qachon NULL bo'lmasligini 100% kafolatlaydi.",
    example: "CREATE TABLE buyurtmalar (\n  id INT PRIMARY KEY,\n  holat VARCHAR(20) DEFAULT 'kutilmoqda',\n  yaratilgan_vaqt TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);",
    gotchas: "Agar dasturchi atayin `INSERT INTO ... VALUES (id, NULL)` deb qo'lda `NULL` bersa, DEFAULT ishga tushmaydi! DEFAULT faqat ustun umuman ko'rsatilmaganda ishlaydi.",
    related: ['create-table', 'check-constraint', 'sql-datatypes'],
    keywords: ['default', 'standart qiymat', 'avtomatik', 'current_timestamp', 'ddl']
  },
  {
    id: 'unique-constraint',
    name: 'UNIQUE CONSTRAINT (Noyoblik Cheklovi)',
    category: '3-Hafta • SQL DDL & DML Asoslari',
    week: 3,
    summary: "Ustundagi barcha qiymatlar bir-birini takrorlamasligini (unikal bo'lishini) ta'minlovchi cheklov.",
    whatItDoes: "Primary Key ga o'xshaydi, lekin undan farqli o'laroq jadvalda bir nechta UNIQUE ustun bo'lishi mumkin va u NULL qiymat qabul qila oladi. Baza orqa fonda tezkor B-Tree Unique Index yaratadi.",
    whenToUse: "Email, Telefon raqam, Pasport seriya, Foydalanuvchi logini (Username) kabi takrorlanmasligi shart bo'lgan maydonlarda.",
    syntax: "-- Ustun darajasida:\nemail VARCHAR(100) UNIQUE\n\n-- Jadval darajasida:\nCONSTRAINT uq_pasport UNIQUE (seriya, raqam)",
    combinations: "Alternate Key larni yaratishning asosiy mexanizmi hisoblanadi.",
    example: "CREATE TABLE haydovchilar (\n  id INT PRIMARY KEY,\n  fio VARCHAR(100),\n  guvohnoma_raqami VARCHAR(20) UNIQUE NOT NULL\n);",
    gotchas: "Standart SQL da (PostgreSQL, Oracle) UNIQUE ustun bir nechta NULL qiymat qabul qilishi mumkin (chunki NULL != NULL). Agar NULL umuman bo'lmasin desangiz, albatta `UNIQUE NOT NULL` deb yozing!",
    related: ['primary-key', 'alternate-key', 'create-table'],
    keywords: ['unique', 'noyob', 'takrorlanmas', 'unikal', 'alternate key']
  },
  {
    id: 'sql-sequence',
    name: 'SEQUENCE & IDENTITY (Avtomatik O\'suvchi Raqamlar)',
    category: '3-Hafta • SQL DDL & DML Asoslari',
    week: 3,
    summary: "Jadvaldagi Primary Key ID larini avtomatik ravishda 1, 2, 3... qilib oshirib boruvchi mustaqil raqam generatori.",
    whatItDoes: "Ko'p foydalanuvchili tizimlarda bir vaqtning o'zida yuzlab buyurtmalar kelsa ham, ularga hech qachon bir xil ID bermaydi (Thread-Safe). Standart SQL da `GENERATED ALWAYS AS IDENTITY`, PostgreSQL da `SERIAL`, Oracle da `SEQUENCE` deyiladi.",
    whenToUse: "Barcha Surrogate Primary Key ustunlarida avtomatik ID berish uchun.",
    syntax: "-- ANSI SQL standarti:\nid INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY\n\n-- Mustaqil SEQUENCE obyekti:\nCREATE SEQUENCE mijoz_seq START WITH 1 INCREMENT BY 1;\nSELECT nextval('mijoz_seq');",
    combinations: "`nextval('ketma_ketlik_nomi')` va `currval('ketma_ketlik_nomi')` funksiyalari bilan boshqariladi.",
    example: "CREATE TABLE xabarlar (\n  id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,\n  matn TEXT NOT NULL\n);",
    gotchas: "Tranzaksiya bekor qilinsa (ROLLBACK), Sequence generatsiya qilgan ID orqaga qaytmaydi! Shu sababli ID larda teshiklar (1, 2, 5, 6...) paydo bo'lishi tabiiy holat hisoblanadi.",
    related: ['surrogate-key', 'primary-key', 'create-table'],
    keywords: ['sequence', 'identity', 'serial', 'autoincrement', 'generator', 'nextval']
  }
];
