// ============================================================================
// DATABASE SYSTEMS ACADEMY — WEEK 3: SQL DDL & RELATIONAL ALGEBRA
// Variable: QUESTIONS_1_50 (50 Questions)
// ============================================================================

window.QUESTIONS_1_50 = [
  {
    "id": 1,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "T03 Prepare Workspace • Schema va Qidiruv Yo'li",
    "title": "Set Working Schema",
    "story": "Laboratoriya serverida yangi DDL amaliyotini boshlayapmiz. Tizim jadvallarni to'g'ri izlashi uchun qidiruv yo'lini `ddl_lab` and `public` ga yo'naltirish lozim.",
    "taskUz": "Set the PostgreSQL search path (`search_path`) to `ddl_lab` and `public` schemas in the current session.",
    "starterCode": "",
    "hint": "`SET search_path TO ...` syntax. and ikkala sxema nomini vergul bilan ajrating.",
    "solutions": [
      "SET search_path TO ddl_lab, public",
      "SET search_path = ddl_lab, public",
      "SET search_path TO ddl_lab,public"
    ],
    "requiredPatterns": [
      {}
    ],
    "explanation": "PostgreSQL qidiruv sxemasi muvaffaqiyatli ddl_lab ga yo'naltirildi.",
    "task": "Set the PostgreSQL search path (`search_path`) to `ddl_lab` and `public` schemas in the current session."
  },
  {
    "id": 2,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "T03 Task 1 Intro • Oddiy Filial Jadvali",
    "title": "Core Branch Table",
    "story": "Kompaniya filiallarni ro'yxatga olish uchun eng sodda jadval yaratmoqchi. with filial kodi and nomi bo'lishi kifoya.",
    "taskUz": "Create a table named `branch`: with `id` (integer) and `name` (varchar(50)) columns.",
    "starterCode": "",
    "hint": "`CREATE TABLE branch (...)` yozib, qavs ichida ustun nomi and uning tipini ko'rsating.",
    "solutions": [
      "CREATE TABLE branch (id integer, name varchar(50))",
      "CREATE TABLE branch (\n  id integer,\n  name varchar(50)\n)",
      "CREATE TABLE branch (id int, name varchar(50))"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "expectedSchema": {
      "tableName": "branch",
      "columns": [
        {
          "name": "id",
          "type": "integer"
        },
        {
          "name": "name",
          "type": "varchar(50)"
        }
      ]
    },
    "explanation": "branch jadvali created successfully.",
    "task": "Create a table named `branch`: with `id` (integer) and `name` (varchar(50)) columns."
  },
  {
    "id": 3,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L03 Slide 12 • Sana Maydoni",
    "title": "Staff Registry Table va Qabul Sanasi",
    "story": "Kadrlar bo'limi xodimlarning ismi and ishga qabul qilingan sanasini qayd etuvchi oddiy struktura so'radi.",
    "taskUz": "Create a table named `staff` with columns: `id` (integer), `full_name` (varchar(100)) and `hire_date` (date).",
    "starterCode": "",
    "hint": "Sana turi uchun `date` kalit so'zidan foydalaning.",
    "solutions": [
      "CREATE TABLE staff (id integer, full_name varchar(100), hire_date date)",
      "CREATE TABLE staff (\n  id integer,\n  full_name varchar(100),\n  hire_date date\n)"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {}
    ],
    "expectedSchema": {
      "tableName": "staff",
      "columns": [
        {
          "name": "id",
          "type": "integer"
        },
        {
          "name": "full_name",
          "type": "varchar(100)"
        },
        {
          "name": "hire_date",
          "type": "date"
        }
      ]
    },
    "explanation": "staff jadvali date turi bilan birga shakllantirildi.",
    "task": "Create a table named `staff` with columns: `id` (integer), `full_name` (varchar(100)) and `hire_date` (date)."
  },
  {
    "id": 4,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L03 Slide 14 • Aniq Son (Numeric/Decimal)",
    "title": "Mahsulotlar va Narx Maydoni",
    "story": "Omborxona uchun mahsulotlar jadvali kerak. Mahsulot narxi tiyingacha aniq bo'lishi lozim.",
    "taskUz": "Create a table named `product` with columns: `item_no` (integer), `title` (varchar(80)) and `price` (10 xonali, 2 tasi kasr — numeric(10,2)).",
    "starterCode": "",
    "hint": "Kasrli aniq pul qiymati uchun `numeric(10,2)` tipidan foydalaning.",
    "solutions": [
      "CREATE TABLE product (item_no integer, title varchar(80), price numeric(10,2))",
      "CREATE TABLE product (\n  item_no integer,\n  title varchar(80),\n  price numeric(10,2)\n)"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {}
    ],
    "expectedSchema": {
      "tableName": "product",
      "columns": [
        {
          "name": "item_no",
          "type": "integer"
        },
        {
          "name": "title",
          "type": "varchar(80)"
        },
        {
          "name": "price",
          "type": "numeric(10,2)"
        }
      ]
    },
    "explanation": "product jadvali numeric(10,2) narx column. barpo etildi.",
    "task": "Create a table named `product` with columns: `item_no` (integer), `title` (varchar(80)) and `price` (10 xonali, 2 tasi kasr — numeric(10,2))."
  },
  {
    "id": 5,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "T03 Task 1 • Bo'limlar Asosiy Tuzilmasi",
    "title": "Bo'limlar Boshlang'ich Sxemasi",
    "story": "Seminar 3 ning 1-topshirig'i boshlanmoqda. Kompaniya bo'limlari uchun asosiy jadval strukturasi talab qilinmoqda.",
    "taskUz": "Create a table named `department` with columns: `id` (integer), `title` (varchar(100)), `location` (varchar(50)) and `budget` (numeric(12,2)).",
    "starterCode": "",
    "hint": "To'rtta ustun nomini ketma-ket ko'rsatilgan turlar bilan e'lon qiling.",
    "solutions": [
      "CREATE TABLE department (id integer, title varchar(100), location varchar(50), budget numeric(12,2))",
      "CREATE TABLE department (\n  id integer,\n  title varchar(100),\n  location varchar(50),\n  budget numeric(12,2)\n)"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {},
      {}
    ],
    "expectedSchema": {
      "tableName": "department",
      "columns": [
        {
          "name": "id",
          "type": "integer"
        },
        {
          "name": "title",
          "type": "varchar(100)"
        },
        {
          "name": "location",
          "type": "varchar(50)"
        },
        {
          "name": "budget",
          "type": "numeric(12,2)"
        }
      ]
    },
    "explanation": "department jadvali to'rtta asosiy ustun bilan yaratildi.",
    "task": "Create a table named `department` with columns: `id` (integer), `title` (varchar(100)), `location` (varchar(50)) and `budget` (numeric(12,2))."
  },
  {
    "id": 6,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L03 Slide 15 • Boolean Maydoni",
    "title": "Loyiha Holatlari va Mantiqiy Bayroqcha",
    "story": "Loyihalarning faol yoki to'xtatilganligini kuzatish uchun mantiqiy (ha/yo'q) ustun zarur.",
    "taskUz": "Create a table named `project_status` with columns: `code` (varchar(10)) and `is_active` (boolean).",
    "starterCode": "",
    "hint": "Mantiqiy haqiqat/yolg'on qiymatlari uchun `boolean` turini yozing.",
    "solutions": [
      "CREATE TABLE project_status (code varchar(10), is_active boolean)",
      "CREATE TABLE project_status (\n  code varchar(10),\n  is_active boolean\n)"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "expectedSchema": {
      "tableName": "project_status",
      "columns": [
        {
          "name": "code",
          "type": "varchar(10)"
        },
        {
          "name": "is_active",
          "type": "boolean"
        }
      ]
    },
    "explanation": "project_status jadvali boolean turi bilan barpo etildi.",
    "task": "Create a table named `project_status` with columns: `code` (varchar(10)) and `is_active` (boolean)."
  },
  {
    "id": 7,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L03 Slide 13 • Timestamp Maydoni",
    "title": "Audit Jurnali va Vaqt Tamg'asi",
    "story": "Xavfsizlik tizimi har bir amaliyotning aniq sekundigacha being vaqtini saqlashi lozim.",
    "taskUz": "Create a table named `audit_log` with columns: `log_id` (integer), `action` (varchar(50)) and `occurred_at` (sana and vaqt — timestamp).",
    "starterCode": "",
    "hint": "Sana and soat/minut/sekundni birlashtiruvchi tur `timestamp` deb ataladi.",
    "solutions": [
      "CREATE TABLE audit_log (log_id integer, action varchar(50), occurred_at timestamp)",
      "CREATE TABLE audit_log (\n  log_id integer,\n  action varchar(50),\n  occurred_at timestamp\n)"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {}
    ],
    "expectedSchema": {
      "tableName": "audit_log",
      "columns": [
        {
          "name": "log_id",
          "type": "integer"
        },
        {
          "name": "action",
          "type": "varchar(50)"
        },
        {
          "name": "occurred_at",
          "type": "timestamp"
        }
      ]
    },
    "explanation": "audit_log jadvali timestamp vaqt tamg'asi bilan yaratildi.",
    "task": "Create a table named `audit_log` with columns: `log_id` (integer), `action` (varchar(50)) and `occurred_at` (sana and vaqt — timestamp)."
  },
  {
    "id": 8,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "T03 Task 1 • Telefon Raqamlari",
    "title": "Aloqa Ma'lumotlari Jadvali",
    "story": "Xodimlarning telefon raqamlarini saqlash uchun alohida sodda struktura talab etiladi.",
    "taskUz": "Create a table named `contact_info` with columns: `staff_id` (integer) and `phone_number` (varchar(20)).",
    "starterCode": "",
    "hint": "Telefon raqami simvollarni o'z ichiga olishi uchun varchar(20) turini qo'llang.",
    "solutions": [
      "CREATE TABLE contact_info (staff_id integer, phone_number varchar(20))",
      "CREATE TABLE contact_info (\n  staff_id integer,\n  phone_number varchar(20)\n)"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "expectedSchema": {
      "tableName": "contact_info",
      "columns": [
        {
          "name": "staff_id",
          "type": "integer"
        },
        {
          "name": "phone_number",
          "type": "varchar(20)"
        }
      ]
    },
    "explanation": "contact_info jadvali shakllantirildi.",
    "task": "Create a table named `contact_info` with columns: `staff_id` (integer) and `phone_number` (varchar(20))."
  },
  {
    "id": 9,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L03 Slide 14 • Katta Balans va Mijozlar",
    "title": "Mijozlar Balansi Jadvali",
    "story": "Korporativ mijozlar uchun hisob balansi katta miqdorlarni (14 xona, 2 tasi tiyin) sig'dira olishi kerak.",
    "taskUz": "Create a table named `client` with columns: `client_id` (integer), `company_name` (varchar(120)) and `balance` (numeric(14,2)).",
    "starterCode": "",
    "hint": "`numeric(14,2)` yozuvi umumiy 14 xona, verguldan keyin 2 ta kasr xonasini bildiradi.",
    "solutions": [
      "CREATE TABLE client (client_id integer, company_name varchar(120), balance numeric(14,2))",
      "CREATE TABLE client (\n  client_id integer,\n  company_name varchar(120),\n  balance numeric(14,2)\n)"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {}
    ],
    "expectedSchema": {
      "tableName": "client",
      "columns": [
        {
          "name": "client_id",
          "type": "integer"
        },
        {
          "name": "company_name",
          "type": "varchar(120)"
        },
        {
          "name": "balance",
          "type": "numeric(14,2)"
        }
      ]
    },
    "explanation": "client jadvali numeric(14,2) balansi bilan yaratildi.",
    "task": "Create a table named `client` with columns: `client_id` (integer), `company_name` (varchar(120)) and `balance` (numeric(14,2))."
  },
  {
    "id": 10,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L03 Slide 11 • Text Turi",
    "title": "Katta Hajmli Kesh Jadvali",
    "story": "Cheklanmagan uzunlikdagi matnli ma'lumotlarni saqlash uchun PostgreSQL da `text` turi qulay.",
    "taskUz": "Create a table named `temp_cache` with columns: `cache_key` (varchar(50)) and `cache_val` (cheklanmagan matn — text).",
    "starterCode": "",
    "hint": "Uzunligi cheklanmagan erkin matn turi `text` deb yoziladi.",
    "solutions": [
      "CREATE TABLE temp_cache (cache_key varchar(50), cache_val text)",
      "CREATE TABLE temp_cache (\n  cache_key varchar(50),\n  cache_val text\n)"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "expectedSchema": {
      "tableName": "temp_cache",
      "columns": [
        {
          "name": "cache_key",
          "type": "varchar(50)"
        },
        {
          "name": "cache_val",
          "type": "text"
        }
      ]
    },
    "explanation": "temp_cache jadvali text turi bilan barpo etildi.",
    "task": "Create a table named `temp_cache` with columns: `cache_key` (varchar(50)) and `cache_val` (cheklanmagan matn — text)."
  },
  {
    "id": 11,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "T03 Task 1 • DROP TABLE Xavfsizligi",
    "title": "Vaqtinchalik Jadvalni O'chirish (DROP)",
    "story": "Oldingi bosqichda yaratilgan vaqtinchalik `temp_cache` jadvali o'z vazifasini bajardi. Uni xavfsiz o'chirish kerak.",
    "taskUz": "Safely drop table `temp_cache` if it exists (using `IF EXISTS`).",
    "starterCode": "",
    "hint": "`DROP TABLE IF EXISTS jadval_nomi` buyrug'idan foydalaning.",
    "solutions": [
      "DROP TABLE IF EXISTS temp_cache",
      "DROP TABLE temp_cache"
    ],
    "requiredPatterns": [
      {}
    ],
    "explanation": "temp_cache jadvali bazadan o'chirildi.",
    "task": "Safely drop table `temp_cache` if it exists (using `IF EXISTS`)."
  },
  {
    "id": 12,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "T03 Task 1 Step 2 • Qayta Yaratish Oldidan Tozalash",
    "title": "Bo'limlar Jadvalini O'chirish",
    "story": "Seminar 3 vazifasiga binoan, bo'sh `department` jadvalini cheklovlar bilan qayta qurishdan oldin o'chirib tashlash lozim.",
    "taskUz": "`department` nomli jadvalni butunlay o'chirib tashlang.",
    "starterCode": "",
    "hint": "`DROP TABLE department` buyrug'ini kiriting.",
    "solutions": [
      "DROP TABLE department",
      "DROP TABLE IF EXISTS department"
    ],
    "requiredPatterns": [
      {}
    ],
    "explanation": "department jadvali tozalab tashlandi.",
    "task": "`department` nomli jadvalni butunlay o'chirib tashlang."
  },
  {
    "id": 13,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L03 Slide 12 • Profil va Bio",
    "title": "Xodim Tarjimai Holi Jadvali",
    "story": "Kompaniya xodimlarining qisqacha tarjimai holi and qo'shilgan sanasini saqlamoqchi.",
    "taskUz": "Create a table named `employee_profile` with columns: `emp_id` (integer), `bio` (text) and `joined_on` (date).",
    "starterCode": "",
    "hint": "`integer`, `text` and `date` turlarini ketma-ket qo'llang.",
    "solutions": [
      "CREATE TABLE employee_profile (emp_id integer, bio text, joined_on date)",
      "CREATE TABLE employee_profile (\n  emp_id integer,\n  bio text,\n  joined_on date\n)"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {}
    ],
    "expectedSchema": {
      "tableName": "employee_profile",
      "columns": [
        {
          "name": "emp_id",
          "type": "integer"
        },
        {
          "name": "bio",
          "type": "text"
        },
        {
          "name": "joined_on",
          "type": "date"
        }
      ]
    },
    "explanation": "employee_profile jadvali text and date bilan birga yaratildi.",
    "task": "Create a table named `employee_profile` with columns: `emp_id` (integer), `bio` (text) and `joined_on` (date)."
  },
  {
    "id": 14,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L03 Slide 15 • Invoyslar va To'lov Holati",
    "title": "Invoyslar va To'lov Holati",
    "story": "Buxgalteriya bo'limi har bir hisob-faktura raqami, jami summasi and to'langanlik holatini saqlashni so'radi.",
    "taskUz": "Create a table named `invoice` with columns: `inv_no` (integer), `total_amount` (numeric(12,2)) and `paid` (boolean).",
    "starterCode": "",
    "hint": "`integer`, `numeric(12,2)` and `boolean` turlarini ishlating.",
    "solutions": [
      "CREATE TABLE invoice (inv_no integer, total_amount numeric(12,2), paid boolean)",
      "CREATE TABLE invoice (\n  inv_no integer,\n  total_amount numeric(12,2),\n  paid boolean\n)"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {}
    ],
    "expectedSchema": {
      "tableName": "invoice",
      "columns": [
        {
          "name": "inv_no",
          "type": "integer"
        },
        {
          "name": "total_amount",
          "type": "numeric(12,2)"
        },
        {
          "name": "paid",
          "type": "boolean"
        }
      ]
    },
    "explanation": "invoice moliyaviy jadvali yaratildi.",
    "task": "Create a table named `invoice` with columns: `inv_no` (integer), `total_amount` (numeric(12,2)) and `paid` (boolean)."
  },
  {
    "id": 15,
    "sector": 1,
    "difficulty": "Floor 1 • Master Architect",
    "source": "T03 Core Preparation • 1-Qavat Yakuni",
    "title": "1-Qavat Bossi: Tashkiliy Birlik Arxitekturasi",
    "story": "1-qavatning yakuniy sinovi! Korporatsiyaning barcha tashkiliy birliklari (unit) uchun barcha 5 ta asosiy ma'lumot turlarini o'zida jamlagan mukammal jadval talab qilinmoqda.",
    "taskUz": "Create a table named `organization_unit` with columns: `unit_id` (integer), `unit_name` (varchar(100)), `operational_budget` (numeric(15,2)), `active` (boolean) and `created_at` (timestamp).",
    "starterCode": "",
    "hint": "Barcha 5 ustunni ko'rsatilgan turlar bilan bitta CREATE TABLE ichida e'lon qiling.",
    "solutions": [
      "CREATE TABLE organization_unit (unit_id integer, unit_name varchar(100), operational_budget numeric(15,2), active boolean, created_at timestamp)",
      "CREATE TABLE organization_unit (\n  unit_id integer,\n  unit_name varchar(100),\n  operational_budget numeric(15,2),\n  active boolean,\n  created_at timestamp\n)"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {},
      {},
      {}
    ],
    "expectedSchema": {
      "tableName": "organization_unit",
      "columns": [
        {
          "name": "unit_id",
          "type": "integer"
        },
        {
          "name": "unit_name",
          "type": "varchar(100)"
        },
        {
          "name": "operational_budget",
          "type": "numeric(15,2)"
        },
        {
          "name": "active",
          "type": "boolean"
        },
        {
          "name": "created_at",
          "type": "timestamp"
        }
      ]
    },
    "explanation": "1-Qavat Bossi zabt etildi! Barcha asosiy ma'lumot turlari to'g'ri bog'landi.",
    "task": "Create a table named `organization_unit` with columns: `unit_id` (integer), `unit_name` (varchar(100)), `operational_budget` (numeric(15,2)), `active` (boolean) and `created_at` (timestamp)."
  },
  {
    "id": 16,
    "sector": 2,
    "difficulty": "Floor 2 • Easy",
    "source": "T03 Task 1 • Ustun Darajasidagi Primary Key",
    "title": "Ustun Darajasida Primary Key",
    "story": "Jadvalda har bir qatorni bir qiymatli aniqlash uchun birlamchi kalit (PK) shart. Eng oddiy usul — uni ustun yonida e'lon qilish.",
    "taskUz": "Create a table named `warehouse`: `id` (integer) column bevosita ustun darajasida `PRIMARY KEY` qilib belgilang, second column esa `city` (varchar(50)) bo'lsin.",
    "starterCode": "",
    "hint": "`id integer PRIMARY KEY, city varchar(50)` .",
    "solutions": [
      "CREATE TABLE warehouse (id integer PRIMARY KEY, city varchar(50))",
      "CREATE TABLE warehouse (\n  id integer PRIMARY KEY,\n  city varchar(50)\n)"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "expectedSchema": {
      "tableName": "warehouse",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "city",
          "type": "varchar(50)"
        }
      ]
    },
    "explanation": "warehouse jadvali ustun darajasidagi PRIMARY KEY bilan yaratildi.",
    "task": "Create a table named `warehouse`: `id` (integer) column bevosita ustun darajasida `PRIMARY KEY` qilib belgilang, second column esa `city` (varchar(50)) bo'lsin."
  },
  {
    "id": 17,
    "sector": 2,
    "difficulty": "Floor 2 • Easy",
    "source": "T03 Task 1 • Jadval Darajasidagi Primary Key",
    "title": "Jadval Darajasida Primary Key",
    "story": "Ko'pincha arxitekturada kalitlar alohida qatorda yoziladi. Bu kodni o'qishni and boshqarishni osonlashtiradi.",
    "taskUz": "Create a table named `supplier` with columns: `id` (integer) and `company` (varchar(80)). primary keyni jadval darajasida `PRIMARY KEY (id)` declared.",
    "starterCode": "",
    "hint": "Ustunlardan so'ng vergul qo'yib, `PRIMARY KEY (id)` .",
    "solutions": [
      "CREATE TABLE supplier (id integer, company varchar(80), PRIMARY KEY (id))",
      "CREATE TABLE supplier (\n  id integer,\n  company varchar(80),\n  PRIMARY KEY (id)\n)"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {}
    ],
    "expectedSchema": {
      "tableName": "supplier",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "company",
          "type": "varchar(80)"
        }
      ]
    },
    "explanation": "supplier jadvali jadval darajasidagi PRIMARY KEY bilan yaratildi.",
    "task": "Create a table named `supplier` with columns: `id` (integer) and `company` (varchar(80)). primary keyni jadval darajasida `PRIMARY KEY (id)` declared."
  },
  {
    "id": 18,
    "sector": 2,
    "difficulty": "Floor 2 • Easy",
    "source": "T03 Task 1 Rules • Nomlangan Birlamchi Kalit",
    "title": "Nomlangan Primary Key (Named Constraint)",
    "story": "Academy and professional enterprise qoidalariga ko'ra, har bir cheklov o'z rasmiy nomiga (`pk_jadval_ustun`) ega bo'lishi shart.",
    "taskUz": "Create a table named `department` with columns: `id` (integer) and `title` (varchar(100)). primary keyga `pk_department_id` deb nom bering (`CONSTRAINT pk_department_id PRIMARY KEY (id)`).",
    "starterCode": "",
    "hint": "`CONSTRAINT pk_department_id PRIMARY KEY (id)` sintaksisini jadval oxirida qo'llang.",
    "solutions": [
      "CREATE TABLE department (id integer, title varchar(100), CONSTRAINT pk_department_id PRIMARY KEY (id))",
      "CREATE TABLE department (\n  id integer,\n  title varchar(100),\n  CONSTRAINT pk_department_id PRIMARY KEY (id)\n)"
    ],
    "requiredPatterns": [
      {},
      {}
    ],
    "expectedSchema": {
      "tableName": "department",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "title",
          "type": "varchar(100)"
        }
      ],
      "requiredConstraints": [
        "pk_department_id"
      ]
    },
    "explanation": "named pk_department_id birlamchi kaliti o'rnatildi.",
    "task": "Create a table named `department` with columns: `id` (integer) and `title` (varchar(100)). primary keyga `pk_department_id` deb nom bering (`CONSTRAINT pk_department_id PRIMARY KEY (id)`)."
  },
  {
    "id": 19,
    "sector": 2,
    "difficulty": "Floor 2 • Easy",
    "source": "T03 Task 1 • GENERATED ALWAYS AS IDENTITY",
    "title": "Avto-inkrement (Identity) Mexanizmi",
    "story": "Baza har bir yangi qator kiritilganda unikal ID raqamini o'zi avtomatik generatsiya qilishi kerak.",
    "taskUz": "Create a table named `customer`: `id` (integer) ustuniga `GENERATED ALWAYS AS IDENTITY` xususiyatini bering, second column esa `fullname` (varchar(70)) bo'lsin.",
    "starterCode": "",
    "hint": "`id integer GENERATED ALWAYS AS IDENTITY` .",
    "solutions": [
      "CREATE TABLE customer (id integer GENERATED ALWAYS AS IDENTITY, fullname varchar(70))",
      "CREATE TABLE customer (\n  id integer GENERATED ALWAYS AS IDENTITY,\n  fullname varchar(70)\n)"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "expectedSchema": {
      "tableName": "customer",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "hasIdentity": true
        },
        {
          "name": "fullname",
          "type": "varchar(70)"
        }
      ]
    },
    "explanation": "SQL:2003 standarti bo'yicha GENERATED ALWAYS AS IDENTITY muvaffaqiyatli o'rnatildi.",
    "task": "Create a table named `customer`: `id` (integer) ustuniga `GENERATED ALWAYS AS IDENTITY` xususiyatini bering, second column esa `fullname` (varchar(70)) bo'lsin."
  },
  {
    "id": 20,
    "sector": 2,
    "difficulty": "Floor 2 • Easy",
    "source": "T03 Task 1 • Identity va PK Kombinatsiyasi",
    "title": "Identity va Nomlangan PK Birgalikda",
    "story": "Seminar 3 qoidasi: Identity qiymat yetkazib beradi (supply), Primary Key esa uning takrorlanmasligini qat'iy kafolatlaydi (enforce).",
    "taskUz": "Create a table named `project` with columns: `id` (integer GENERATED ALWAYS AS IDENTITY) and `title` (varchar(100)). primary key nomini `pk_project_id` deb belgilang.",
    "starterCode": "",
    "hint": "`id integer GENERATED ALWAYS AS IDENTITY`, keyin `title varchar(100)`, oxirida `CONSTRAINT pk_project_id PRIMARY KEY (id)` yozing.",
    "solutions": [
      "CREATE TABLE project (id integer GENERATED ALWAYS AS IDENTITY, title varchar(100), CONSTRAINT pk_project_id PRIMARY KEY (id))",
      "CREATE TABLE project (\n  id integer GENERATED ALWAYS AS IDENTITY,\n  title varchar(100),\n  CONSTRAINT pk_project_id PRIMARY KEY (id)\n)"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "expectedSchema": {
      "tableName": "project",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true,
          "hasIdentity": true
        },
        {
          "name": "title",
          "type": "varchar(100)"
        }
      ],
      "requiredConstraints": [
        "pk_project_id"
      ]
    },
    "explanation": "Identity and named Primary Key kombinatsiyasi to'liq bajarildi.",
    "task": "Create a table named `project` with columns: `id` (integer GENERATED ALWAYS AS IDENTITY) and `title` (varchar(100)). primary key nomini `pk_project_id` deb belgilang."
  },
  {
    "id": 21,
    "sector": 2,
    "difficulty": "Floor 2 • Intermediate",
    "source": "T03 Task 1 Step 3 • Identity Parametrlari",
    "title": "Identity: 1 dan Boshlanib 10 tadan Oshish",
    "story": "Tizim raqamlar oraliqlarini guruhlarga ajratish uchun ID ni 1 dan boshlab 10 tadan oshirib borishni (`START WITH 1 INCREMENT BY 10`) talab qilmoqda.",
    "taskUz": "Create a table named `department`: `id` column `integer GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 10)` declared, second column `title` (varchar(100)) bo'lsin.",
    "starterCode": "",
    "hint": "`IDENTITY` so'zidan keyin qavs ichida `(START WITH 1 INCREMENT BY 10)` parametrlarini bering.",
    "solutions": [
      "CREATE TABLE department (id integer GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 10), title varchar(100))",
      "CREATE TABLE department (\n  id integer GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 10),\n  title varchar(100)\n)"
    ],
    "requiredPatterns": [
      {},
      {}
    ],
    "explanation": "Identity sequence parametrlari (1 dan 10 qadam bilan) to'g'ri sozlandi.",
    "task": "Create a table named `department`: `id` column `integer GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 10)` declared, second column `title` (varchar(100)) bo'lsin."
  },
  {
    "id": 22,
    "sector": 2,
    "difficulty": "Floor 2 • Intermediate",
    "source": "T03 Appendix A • Katta Qadamli Sequence",
    "title": "Yirik Qadamli Identity Parametrlari",
    "story": "Kompaniya filiallariga 100 dan boshlanib 50 tadan oshuvchi blokli ID larni ajratmoqda (100, 150, 200...).",
    "taskUz": "Create a table named `region` with columns: `id integer GENERATED ALWAYS AS IDENTITY (START WITH 100 INCREMENT BY 50)` and `region_name varchar(60)`.",
    "starterCode": "",
    "hint": "`START WITH 100 INCREMENT BY 50` variantini IDENTITY qavsi ichida yozing.",
    "solutions": [
      "CREATE TABLE region (id integer GENERATED ALWAYS AS IDENTITY (START WITH 100 INCREMENT BY 50), region_name varchar(60))",
      "CREATE TABLE region (\n  id integer GENERATED ALWAYS AS IDENTITY (START WITH 100 INCREMENT BY 50),\n  region_name varchar(60)\n)"
    ],
    "requiredPatterns": [
      {},
      {}
    ],
    "explanation": "Yirik oraliqli identity parametrli jadval shakllantirildi.",
    "task": "Create a table named `region` with columns: `id integer GENERATED ALWAYS AS IDENTITY (START WITH 100 INCREMENT BY 50)` and `region_name varchar(60)`."
  },
  {
    "id": 23,
    "sector": 2,
    "difficulty": "Floor 2 • Easy",
    "source": "T03 Task 4 • Tabiiy Kalit (Natural Primary Key)",
    "title": "Tabiiy Primary Key (Pasport Raqami)",
    "story": "Seminar 2 and 3 kompaniya sxemasida: `passport_no` tabiiy birlamchi kalit hisoblanadi (surrogate sonli id emas, balki real hayotiy unikal kod).",
    "taskUz": "Create a table named `person`: `passport_no` (varchar(20)) column named primary key (`CONSTRAINT pk_person_passport PRIMARY KEY (passport_no)`) qiling and `name` (varchar(50)) column qo'shing.",
    "starterCode": "",
    "hint": "`passport_no` matnli column `CONSTRAINT pk_person_passport PRIMARY KEY (passport_no)` orqali asosiy kalit qiling.",
    "solutions": [
      "CREATE TABLE person (passport_no varchar(20), name varchar(50), CONSTRAINT pk_person_passport PRIMARY KEY (passport_no))",
      "CREATE TABLE person (\n  passport_no varchar(20),\n  name varchar(50),\n  CONSTRAINT pk_person_passport PRIMARY KEY (passport_no)\n)"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "expectedSchema": {
      "tableName": "person",
      "columns": [
        {
          "name": "passport_no",
          "type": "varchar(20)",
          "isPK": true
        },
        {
          "name": "name",
          "type": "varchar(50)"
        }
      ],
      "requiredConstraints": [
        "pk_person_passport"
      ]
    },
    "explanation": "passport_no tabiiy birlamchi kaliti barpo etildi.",
    "task": "Create a table named `person`: `passport_no` (varchar(20)) column named primary key (`CONSTRAINT pk_person_passport PRIMARY KEY (passport_no)`) qiling and `name` (varchar(50)) column qo'shing."
  },
  {
    "id": 24,
    "sector": 2,
    "difficulty": "Floor 2 • Easy",
    "source": "L03 Slide 18 • Matnli Buyurtma Kategoriya Klyuchi",
    "title": "Buyurtmalar Koddagi Primary Key",
    "story": "Elektron do'konda buyurtma kodi (masalan, `ORD-2026-X`) matn shaklida birlamchi kalit bo'lishi belgilangan.",
    "taskUz": "Create a table named `orders`: `order_code` (varchar(30)) column named primary key (`CONSTRAINT pk_orders_code PRIMARY KEY (order_code)`) qilib, `order_date` (date) column qo'shing.",
    "starterCode": "",
    "hint": "`CONSTRAINT pk_orders_code PRIMARY KEY (order_code)` yordamida nomlang.",
    "solutions": [
      "CREATE TABLE orders (order_code varchar(30), order_date date, CONSTRAINT pk_orders_code PRIMARY KEY (order_code))",
      "CREATE TABLE orders (\n  order_code varchar(30),\n  order_date date,\n  CONSTRAINT pk_orders_code PRIMARY KEY (order_code)\n)"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "Matnli birlamchi kalit muvaffaqiyatli bog'landi.",
    "task": "Create a table named `orders`: `order_code` (varchar(30)) column named primary key (`CONSTRAINT pk_orders_code PRIMARY KEY (order_code)`) qilib, `order_date` (date) column qo'shing."
  },
  {
    "id": 25,
    "sector": 2,
    "difficulty": "Floor 2 • Easy",
    "source": "T03 Task 1 • Xodimlar Jadvalining Birlamchi Kaliti",
    "title": "Xodimlar Jadvali va Identity PK",
    "story": "Kompaniya xodimlarining har biriga tizim tomonidan doimiy avtomatik xodim raqami berilishi shart.",
    "taskUz": "Create a table named `employee`: `id` (integer GENERATED ALWAYS AS IDENTITY), `first_name` (varchar(25)) ustunlari and named primary key (`CONSTRAINT pk_employee_id PRIMARY KEY (id)`) bilan.",
    "starterCode": "",
    "hint": "`id integer GENERATED ALWAYS AS IDENTITY`, so'ng ustunlar and `CONSTRAINT pk_employee_id PRIMARY KEY (id)`.",
    "solutions": [
      "CREATE TABLE employee (id integer GENERATED ALWAYS AS IDENTITY, first_name varchar(25), CONSTRAINT pk_employee_id PRIMARY KEY (id))",
      "CREATE TABLE employee (\n  id integer GENERATED ALWAYS AS IDENTITY,\n  first_name varchar(25),\n  CONSTRAINT pk_employee_id PRIMARY KEY (id)\n)"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "expectedSchema": {
      "tableName": "employee",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true,
          "hasIdentity": true
        },
        {
          "name": "first_name",
          "type": "varchar(25)"
        }
      ],
      "requiredConstraints": [
        "pk_employee_id"
      ]
    },
    "explanation": "employee jadvali Identity and pk_employee_id bilan qurildi.",
    "task": "Create a table named `employee`: `id` (integer GENERATED ALWAYS AS IDENTITY), `first_name` (varchar(25)) ustunlari and named primary key (`CONSTRAINT pk_employee_id PRIMARY KEY (id)`) bilan."
  },
  {
    "id": 26,
    "sector": 2,
    "difficulty": "Floor 2 • Easy",
    "source": "L03 Slide 17 • Talabalar Birlamchi Kaliti",
    "title": "Talabalar Reyestri va Talaba ID",
    "story": "Universitet tizimida har bir talabaning o'z talaba guvohnomasi raqami birlamchi kalit hisoblanadi.",
    "taskUz": "Create a table named `student`: `student_id` (integer) column `CONSTRAINT pk_student PRIMARY KEY (student_id)` deb nomlang and `full_name` (varchar(90)) column e'lon qiling.",
    "starterCode": "",
    "hint": "`CONSTRAINT pk_student PRIMARY KEY (student_id)` dan foydalaning.",
    "solutions": [
      "CREATE TABLE student (student_id integer, full_name varchar(90), CONSTRAINT pk_student PRIMARY KEY (student_id))",
      "CREATE TABLE student (\n  student_id integer,\n  full_name varchar(90),\n  CONSTRAINT pk_student PRIMARY KEY (student_id)\n)"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "student jadvali named birlamchi kalit bilan yaratildi.",
    "task": "Create a table named `student`: `student_id` (integer) column `CONSTRAINT pk_student PRIMARY KEY (student_id)` deb nomlang and `full_name` (varchar(90)) column e'lon qiling."
  },
  {
    "id": 27,
    "sector": 2,
    "difficulty": "Floor 2 • Easy",
    "source": "L03 Slide 18 • Avtomobillar VIN Klyuchi",
    "title": "Avtomobillar Reyestri va VIN Klyuchi",
    "story": "Avtomobil xalqaro 17 xonali VIN raqamiga ega bo'lib, u takrorlanmas tabiiy birlamchi kalit hisoblanadi.",
    "taskUz": "Create a table named `vehicle`: `vin` (varchar(17)) column named primary key (`CONSTRAINT pk_vehicle_vin PRIMARY KEY (vin)`) qiling and `model` (varchar(50)) column qo'shing.",
    "starterCode": "",
    "hint": "`vin varchar(17)` ustuniga `CONSTRAINT pk_vehicle_vin PRIMARY KEY (vin)` cheklovini qo'ying.",
    "solutions": [
      "CREATE TABLE vehicle (vin varchar(17), model varchar(50), CONSTRAINT pk_vehicle_vin PRIMARY KEY (vin))",
      "CREATE TABLE vehicle (\n  vin varchar(17),\n  model varchar(50),\n  CONSTRAINT pk_vehicle_vin PRIMARY KEY (vin)\n)"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "vehicle jadvali xalqaro VIN birlamchi kaliti bilan tasdiqlandi.",
    "task": "Create a table named `vehicle`: `vin` (varchar(17)) column named primary key (`CONSTRAINT pk_vehicle_vin PRIMARY KEY (vin)`) qiling and `model` (varchar(50)) column qo'shing."
  },
  {
    "id": 28,
    "sector": 2,
    "difficulty": "Floor 2 • Easy",
    "source": "T03 Task 6 • Avtomatik Cheklar Jadvali",
    "title": "Avtomatik Kassa Cheklari",
    "story": "Kassadan output har bir chek uchun avtomatik ketma-ketlikda o'suvchi chek raqami kerak.",
    "taskUz": "Create a table named `receipt` with columns: `receipt_id` (integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY) and `amount` (numeric(10,2)).",
    "starterCode": "",
    "hint": "Ustun darajasida `receipt_id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY` deb yozishingiz mumkin.",
    "solutions": [
      "CREATE TABLE receipt (receipt_id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY, amount numeric(10,2))",
      "CREATE TABLE receipt (\n  receipt_id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n  amount numeric(10,2)\n)"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "receipt jadvali identity primary key bilan barpo etildi.",
    "task": "Create a table named `receipt` with columns: `receipt_id` (integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY) and `amount` (numeric(10,2))."
  },
  {
    "id": 29,
    "sector": 2,
    "difficulty": "Floor 2 • Easy",
    "source": "L03 Slide 18 • Ombor Mahsulot Kodi (SKU)",
    "title": "Ombor Mahsulot Kodi (SKU Klyuchi)",
    "story": "Logistikada har bir mahsulot unikal SKU kodiga (masalan `SKU-EL-902`) ega.",
    "taskUz": "Create a table named `inventory_item`: `sku` (varchar(25)) column `CONSTRAINT pk_inventory_sku PRIMARY KEY (sku)` qilib, `stock_qty` (integer) column qo'shing.",
    "starterCode": "",
    "hint": "`CONSTRAINT pk_inventory_sku PRIMARY KEY (sku)` yozuvi orqali bajaring.",
    "solutions": [
      "CREATE TABLE inventory_item (sku varchar(25), stock_qty integer, CONSTRAINT pk_inventory_sku PRIMARY KEY (sku))",
      "CREATE TABLE inventory_item (\n  sku varchar(25),\n  stock_qty integer,\n  CONSTRAINT pk_inventory_sku PRIMARY KEY (sku)\n)"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "inventory_item jadvali SKU klyuchi bilan yaratildi.",
    "task": "Create a table named `inventory_item`: `sku` (varchar(25)) column `CONSTRAINT pk_inventory_sku PRIMARY KEY (sku)` qilib, `stock_qty` (integer) column qo'shing."
  },
  {
    "id": 30,
    "sector": 2,
    "difficulty": "Floor 2 • Master Architect",
    "source": "T03 Task 1 Final • 2-Qavat Yakuni",
    "title": "2-Qavat Bossi: Bo'limlar To'liq Primary Key Standarti",
    "story": "2-qavatning eng mas'uliyatli topshirig'i! Seminar 3 talabiga muvofiq, `department` jadvali 1 dan boshlanib 10 tadan oshuvchi Identity column and rasmiy named birlamchi kalit bilan qayta qurilishi lozim.",
    "taskUz": "Create a table named `department`: `id` (integer GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 10)), `title` (varchar(100)), `location` (varchar(50)), `budget` (numeric(12,2)) ustunlari and named primary key (`CONSTRAINT pk_department_id PRIMARY KEY (id)`) bilan.",
    "starterCode": "",
    "hint": "`id` ustuniga `GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 10)` bering, so'ng qolgan 3 ustunni yozib, oxirida `CONSTRAINT pk_department_id PRIMARY KEY (id)` qo'shing.",
    "solutions": [
      "CREATE TABLE department (id integer GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 10), title varchar(100), location varchar(50), budget numeric(12,2), CONSTRAINT pk_department_id PRIMARY KEY (id))",
      "CREATE TABLE department (\n  id integer GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 10),\n  title varchar(100),\n  location varchar(50),\n  budget numeric(12,2),\n  CONSTRAINT pk_department_id PRIMARY KEY (id)\n)"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "expectedSchema": {
      "tableName": "department",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true,
          "hasIdentity": true
        },
        {
          "name": "title",
          "type": "varchar(100)"
        },
        {
          "name": "location",
          "type": "varchar(50)"
        },
        {
          "name": "budget",
          "type": "numeric(12,2)"
        }
      ],
      "requiredConstraints": [
        "pk_department_id"
      ]
    },
    "explanation": "2-Qavat Bossi tasdiqlandi! Identity start/increment and named PK standarti to'liq bajarildi.",
    "task": "Create a table named `department`: `id` (integer GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 10)), `title` (varchar(100)), `location` (varchar(50)), `budget` (numeric(12,2)) ustunlari and named primary key (`CONSTRAINT pk_department_id PRIMARY KEY (id)`) bilan."
  },
  {
    "id": 31,
    "sector": 3,
    "difficulty": "Floor 3 • Easy",
    "source": "T03 Task 1 • Ustun Darajasidagi NOT NULL",
    "title": "Majburiy Ism va Familiya (NOT NULL)",
    "story": "Xodimlar jadvalida xodimning ismi and familiyasi hech qachon bo'sh (NULL) qolmasligi shart.",
    "taskUz": "Create a table named `staff_member` with columns: `id` (integer PRIMARY KEY), `first_name` (varchar(25) NOT NULL) and `last_name` (varchar(25) NOT NULL).",
    "starterCode": "",
    "hint": "Har bir majburiy ustun turidan keyin `NOT NULL` .",
    "solutions": [
      "CREATE TABLE staff_member (id integer PRIMARY KEY, first_name varchar(25) NOT NULL, last_name varchar(25) NOT NULL)",
      "CREATE TABLE staff_member (\n  id integer PRIMARY KEY,\n  first_name varchar(25) NOT NULL,\n  last_name varchar(25) NOT NULL\n)"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "expectedSchema": {
      "tableName": "staff_member",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "first_name",
          "type": "varchar(25)",
          "isNotNull": true
        },
        {
          "name": "last_name",
          "type": "varchar(25)",
          "isNotNull": true
        }
      ]
    },
    "explanation": "staff_member jadvali NOT NULL qoidalari bilan yaratildi.",
    "task": "Create a table named `staff_member` with columns: `id` (integer PRIMARY KEY), `first_name` (varchar(25) NOT NULL) and `last_name` (varchar(25) NOT NULL)."
  },
  {
    "id": 32,
    "sector": 3,
    "difficulty": "Floor 3 • Easy",
    "source": "T03 Task 1 • Ustun Darajasidagi UNIQUE",
    "title": "Ustun Darajasida Unikallik (UNIQUE)",
    "story": "Elektron pochta manzillari tizimda takrorlanmasligi kerak. Eng sodda usul — ustun yoniga `UNIQUE` yozish.",
    "taskUz": "Create a table named `user_account` with columns: `id` (integer PRIMARY KEY) and `email` (varchar(100) NOT NULL UNIQUE).",
    "starterCode": "",
    "hint": "`email varchar(100) NOT NULL UNIQUE` .",
    "solutions": [
      "CREATE TABLE user_account (id integer PRIMARY KEY, email varchar(100) NOT NULL UNIQUE)",
      "CREATE TABLE user_account (\n  id integer PRIMARY KEY,\n  email varchar(100) NOT NULL UNIQUE\n)"
    ],
    "requiredPatterns": [
      {},
      {}
    ],
    "expectedSchema": {
      "tableName": "user_account",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "email",
          "type": "varchar(100)",
          "isNotNull": true,
          "isUQ": true
        }
      ]
    },
    "explanation": "email ustuniga NOT NULL UNIQUE cheklovi o'rnatildi.",
    "task": "Create a table named `user_account` with columns: `id` (integer PRIMARY KEY) and `email` (varchar(100) NOT NULL UNIQUE)."
  },
  {
    "id": 33,
    "sector": 3,
    "difficulty": "Floor 3 • Easy",
    "source": "T03 Task 1 • Nomlangan UNIQUE Cheklovi",
    "title": "Nomlangan UNIQUE Constrainti (Constraint)",
    "story": "Bo'lim nomlari takrorlanmasligi shart. Xatolik sodir bo'lganda aniq nom chiqishi uchun cheklovni `uq_department_title` deb nomlash zarur.",
    "taskUz": "Create a table named `department`: `id` (integer PRIMARY KEY), `title` (varchar(100) NOT NULL) ustunlari and named `CONSTRAINT uq_department_title UNIQUE (title)` with constraint.",
    "starterCode": "",
    "hint": "Jadval darajasida `CONSTRAINT uq_department_title UNIQUE (title)` declared.",
    "solutions": [
      "CREATE TABLE department (id integer PRIMARY KEY, title varchar(100) NOT NULL, CONSTRAINT uq_department_title UNIQUE (title))",
      "CREATE TABLE department (\n  id integer PRIMARY KEY,\n  title varchar(100) NOT NULL,\n  CONSTRAINT uq_department_title UNIQUE (title)\n)"
    ],
    "requiredPatterns": [
      {},
      {}
    ],
    "expectedSchema": {
      "tableName": "department",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "title",
          "type": "varchar(100)",
          "isNotNull": true,
          "isUQ": true
        }
      ],
      "requiredConstraints": [
        "uq_department_title"
      ]
    },
    "explanation": "uq_department_title named cheklovi o'rnatildi.",
    "task": "Create a table named `department`: `id` (integer PRIMARY KEY), `title` (varchar(100) NOT NULL) ustunlari and named `CONSTRAINT uq_department_title UNIQUE (title)` with constraint."
  },
  {
    "id": 34,
    "sector": 3,
    "difficulty": "Floor 3 • Easy",
    "source": "T03 Task 1 Employee • Nomlangan Email UNIQUE",
    "title": "Xodimning Nomlangan Email Constrainti",
    "story": "Seminar 3 ning employee jadvalida xodimning pochtasi unikal bo'lishi and `uq_employee_email` deb nomlanishi belgilangan.",
    "taskUz": "Create a table named `employee`: `id` (integer PRIMARY KEY), `email` (varchar(100) NOT NULL) and `CONSTRAINT uq_employee_email UNIQUE (email)` with constraint.",
    "starterCode": "",
    "hint": "`CONSTRAINT uq_employee_email UNIQUE (email)` sintaksisini qo'shing.",
    "solutions": [
      "CREATE TABLE employee (id integer PRIMARY KEY, email varchar(100) NOT NULL, CONSTRAINT uq_employee_email UNIQUE (email))",
      "CREATE TABLE employee (\n  id integer PRIMARY KEY,\n  email varchar(100) NOT NULL,\n  CONSTRAINT uq_employee_email UNIQUE (email)\n)"
    ],
    "requiredPatterns": [
      {},
      {}
    ],
    "expectedSchema": {
      "tableName": "employee",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "email",
          "type": "varchar(100)",
          "isNotNull": true,
          "isUQ": true
        }
      ],
      "requiredConstraints": [
        "uq_employee_email"
      ]
    },
    "explanation": "uq_employee_email unikal cheklovi tasdiqlandi.",
    "task": "Create a table named `employee`: `id` (integer PRIMARY KEY), `email` (varchar(100) NOT NULL) and `CONSTRAINT uq_employee_email UNIQUE (email)` with constraint."
  },
  {
    "id": 35,
    "sector": 3,
    "difficulty": "Floor 3 • Intermediate",
    "source": "L03 Slide 19 • Ikkita Mustaqil UNIQUE Ustun",
    "title": "Ikkita Mustaqil Unikal Constraint",
    "story": "Xavfsizlik tizimida ham telefon raqami, ham login bir-biriga bog'liq bo'lmagan holda mustaqil unikal bo'lishi talab etiladi.",
    "taskUz": "Create a table named `member`: `id` (integer PRIMARY KEY), `phone` (varchar(20) NOT NULL), `username` (varchar(40) NOT NULL) and ikkita named cheklov: `CONSTRAINT uq_member_phone UNIQUE (phone)` and `CONSTRAINT uq_member_username UNIQUE (username)` bilan.",
    "starterCode": "",
    "hint": "Ikkita alohida `CONSTRAINT ... UNIQUE (...)` qatorini vergul bilan ajratib yozing.",
    "solutions": [
      "CREATE TABLE member (id integer PRIMARY KEY, phone varchar(20) NOT NULL, username varchar(40) NOT NULL, CONSTRAINT uq_member_phone UNIQUE (phone), CONSTRAINT uq_member_username UNIQUE (username))",
      "CREATE TABLE member (\n  id integer PRIMARY KEY,\n  phone varchar(20) NOT NULL,\n  username varchar(40) NOT NULL,\n  CONSTRAINT uq_member_phone UNIQUE (phone),\n  CONSTRAINT uq_member_username UNIQUE (username)\n)"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "Ikkita mustaqil named UNIQUE cheklovlari muvaffaqiyatli bog'landi.",
    "task": "Create a table named `member`: `id` (integer PRIMARY KEY), `phone` (varchar(20) NOT NULL), `username` (varchar(40) NOT NULL) and ikkita named cheklov: `CONSTRAINT uq_member_phone UNIQUE (phone)` and `CONSTRAINT uq_member_username UNIQUE (username)` bilan."
  },
  {
    "id": 36,
    "sector": 3,
    "difficulty": "Floor 3 • Easy",
    "source": "L03 Slide 19 • Shtrix-kod Unikalligi",
    "title": "Shtrix-kod Unikal Constrainti",
    "story": "Savdo markazidagi mahsulotlar shtrix-kodi takrorlanishi mumkin emas.",
    "taskUz": "Create a table named `inventory`: `id` (integer PRIMARY KEY), `barcode` (varchar(30) NOT NULL) and `CONSTRAINT uq_inventory_barcode UNIQUE (barcode)` with constraint.",
    "starterCode": "",
    "hint": "`CONSTRAINT uq_inventory_barcode UNIQUE (barcode)` dan foydalaning.",
    "solutions": [
      "CREATE TABLE inventory (id integer PRIMARY KEY, barcode varchar(30) NOT NULL, CONSTRAINT uq_inventory_barcode UNIQUE (barcode))",
      "CREATE TABLE inventory (\n  id integer PRIMARY KEY,\n  barcode varchar(30) NOT NULL,\n  CONSTRAINT uq_inventory_barcode UNIQUE (barcode)\n)"
    ],
    "requiredPatterns": [
      {},
      {}
    ],
    "explanation": "uq_inventory_barcode cheklovi barpo etildi.",
    "task": "Create a table named `inventory`: `id` (integer PRIMARY KEY), `barcode` (varchar(30) NOT NULL) and `CONSTRAINT uq_inventory_barcode UNIQUE (barcode)` with constraint."
  },
  {
    "id": 37,
    "sector": 3,
    "difficulty": "Floor 3 • Easy",
    "source": "L03 Slide 19 • Fuqaro Shaxsiy Raqami",
    "title": "JShShIR / Milliy ID Unikalligi",
    "story": "Davlat xizmatlarida fuqaroning 14 xonali shaxsiy identifikatsiya raqami (PINFL) yagona bo'lishi shart.",
    "taskUz": "Create a table named `citizen`: `id` (integer PRIMARY KEY), `pinfl` (varchar(14) NOT NULL) and `CONSTRAINT uq_citizen_pinfl UNIQUE (pinfl)` with constraint.",
    "starterCode": "",
    "hint": "`CONSTRAINT uq_citizen_pinfl UNIQUE (pinfl)` sintaksisini yozing.",
    "solutions": [
      "CREATE TABLE citizen (id integer PRIMARY KEY, pinfl varchar(14) NOT NULL, CONSTRAINT uq_citizen_pinfl UNIQUE (pinfl))",
      "CREATE TABLE citizen (\n  id integer PRIMARY KEY,\n  pinfl varchar(14) NOT NULL,\n  CONSTRAINT uq_citizen_pinfl UNIQUE (pinfl)\n)"
    ],
    "requiredPatterns": [
      {},
      {}
    ],
    "explanation": "citizen jadvalida PINFL unikalligi o'rnatildi.",
    "task": "Create a table named `citizen`: `id` (integer PRIMARY KEY), `pinfl` (varchar(14) NOT NULL) and `CONSTRAINT uq_citizen_pinfl UNIQUE (pinfl)` with constraint."
  },
  {
    "id": 38,
    "sector": 3,
    "difficulty": "Floor 3 • Easy",
    "source": "L03 Slide 20 • Domen Nomlari",
    "title": "Internet Domen Nomlari Unikalligi",
    "story": "Hosting provayderi bitta domenni ikki xil mijozga berib qo'ymasligi uchun jadval darajasida qat'iy cheklov o'rnatmoqda.",
    "taskUz": "Create a table named `hosted_domain`: `id` (integer PRIMARY KEY), `domain_name` (varchar(100) NOT NULL) and `CONSTRAINT uq_domain_name UNIQUE (domain_name)` with constraint.",
    "starterCode": "",
    "hint": "`CONSTRAINT uq_domain_name UNIQUE (domain_name)` yordamida bajaring.",
    "solutions": [
      "CREATE TABLE hosted_domain (id integer PRIMARY KEY, domain_name varchar(100) NOT NULL, CONSTRAINT uq_domain_name UNIQUE (domain_name))",
      "CREATE TABLE hosted_domain (\n  id integer PRIMARY KEY,\n  domain_name varchar(100) NOT NULL,\n  CONSTRAINT uq_domain_name UNIQUE (domain_name)\n)"
    ],
    "requiredPatterns": [
      {},
      {}
    ],
    "explanation": "uq_domain_name cheklovi yaratildi.",
    "task": "Create a table named `hosted_domain`: `id` (integer PRIMARY KEY), `domain_name` (varchar(100) NOT NULL) and `CONSTRAINT uq_domain_name UNIQUE (domain_name)` with constraint."
  },
  {
    "id": 39,
    "sector": 3,
    "difficulty": "Floor 3 • Easy",
    "source": "T03 Task 1 Employee • Xodim Nishon Raqami",
    "title": "Xodimning Ruxsatnoma Nishon Raqami (Badge)",
    "story": "Bosh ofisga kirish uchun turniket nishonlari (badge) har bir xodim uchun unikal bo'lishi shart.",
    "taskUz": "Create a table named `security_badge`: `id` (integer PRIMARY KEY), `badge_no` (varchar(15) NOT NULL) and `CONSTRAINT uq_badge_no UNIQUE (badge_no)` with constraint.",
    "starterCode": "",
    "hint": "`CONSTRAINT uq_badge_no UNIQUE (badge_no)` cheklovini e'lon qiling.",
    "solutions": [
      "CREATE TABLE security_badge (id integer PRIMARY KEY, badge_no varchar(15) NOT NULL, CONSTRAINT uq_badge_no UNIQUE (badge_no))",
      "CREATE TABLE security_badge (\n  id integer PRIMARY KEY,\n  badge_no varchar(15) NOT NULL,\n  CONSTRAINT uq_badge_no UNIQUE (badge_no)\n)"
    ],
    "requiredPatterns": [
      {},
      {}
    ],
    "explanation": "security_badge jadvalida nishonlar unikalligi ta'minlandi.",
    "task": "Create a table named `security_badge`: `id` (integer PRIMARY KEY), `badge_no` (varchar(15) NOT NULL) and `CONSTRAINT uq_badge_no UNIQUE (badge_no)` with constraint."
  },
  {
    "id": 40,
    "sector": 3,
    "difficulty": "Floor 3 • Easy",
    "source": "L03 Slide 19 • URL Slug Unikalligi",
    "title": "Maqolalar URL Manzili (Slug)",
    "story": "Yangiliklar portalida har bir maqolaning internetdagi qisqa URL manzili (`slug`) betakror bo'lishi kerak.",
    "taskUz": "Create a table named `article`: `id` (integer PRIMARY KEY), `slug` (varchar(80) NOT NULL) and `CONSTRAINT uq_article_slug UNIQUE (slug)` with constraint.",
    "starterCode": "",
    "hint": "`CONSTRAINT uq_article_slug UNIQUE (slug)` .",
    "solutions": [
      "CREATE TABLE article (id integer PRIMARY KEY, slug varchar(80) NOT NULL, CONSTRAINT uq_article_slug UNIQUE (slug))",
      "CREATE TABLE article (\n  id integer PRIMARY KEY,\n  slug varchar(80) NOT NULL,\n  CONSTRAINT uq_article_slug UNIQUE (slug)\n)"
    ],
    "requiredPatterns": [
      {},
      {}
    ],
    "explanation": "uq_article_slug cheklovi o'rnatildi.",
    "task": "Create a table named `article`: `id` (integer PRIMARY KEY), `slug` (varchar(80) NOT NULL) and `CONSTRAINT uq_article_slug UNIQUE (slug)` with constraint."
  },
  {
    "id": 41,
    "sector": 3,
    "difficulty": "Floor 3 • Easy",
    "source": "T03 Task 1 • Bo'lim Menejeri Pasporti",
    "title": "Menejer Pasport Raqami Unikalligi (1:1 Aloqa)",
    "story": "Seminar 2 da: har bir bo'limga faqat bitta menejer biriktiriladi and har bir menejer faqat bitta bo'limni boshqarishi mumkin (`1:1`). Buni ta'minlash uchun `manager_passport_no` unikal bo'lishi kerak.",
    "taskUz": "Create a table named `dept_mgr`: `dept_id` (integer PRIMARY KEY), `manager_passport_no` (varchar(20) NOT NULL) and `CONSTRAINT uq_dept_manager UNIQUE (manager_passport_no)` with constraint.",
    "starterCode": "",
    "hint": "`CONSTRAINT uq_dept_manager UNIQUE (manager_passport_no)` cheklovini kiriting.",
    "solutions": [
      "CREATE TABLE dept_mgr (dept_id integer PRIMARY KEY, manager_passport_no varchar(20) NOT NULL, CONSTRAINT uq_dept_manager UNIQUE (manager_passport_no))",
      "CREATE TABLE dept_mgr (\n  dept_id integer PRIMARY KEY,\n  manager_passport_no varchar(20) NOT NULL,\n  CONSTRAINT uq_dept_manager UNIQUE (manager_passport_no)\n)"
    ],
    "requiredPatterns": [
      {},
      {}
    ],
    "explanation": "1:1 bog'liqlik uchun zarur being unikal menejer cheklovi o'rnatildi.",
    "task": "Create a table named `dept_mgr`: `dept_id` (integer PRIMARY KEY), `manager_passport_no` (varchar(20) NOT NULL) and `CONSTRAINT uq_dept_manager UNIQUE (manager_passport_no)` with constraint."
  },
  {
    "id": 42,
    "sector": 3,
    "difficulty": "Floor 3 • Easy",
    "source": "L03 Slide 19 • Hisob Raqami (IBAN)",
    "title": "Bank Hisob Raqami (IBAN) Unikalligi",
    "story": "Bank hisob raqamlari xalqaro standartda (IBAN) takrorlanmas bo'lishi shart.",
    "taskUz": "Create a table named `bank_account`: `account_id` (integer PRIMARY KEY), `iban` (varchar(34) NOT NULL) and `CONSTRAINT uq_account_iban UNIQUE (iban)` with constraint.",
    "starterCode": "",
    "hint": "`CONSTRAINT uq_account_iban UNIQUE (iban)` .",
    "solutions": [
      "CREATE TABLE bank_account (account_id integer PRIMARY KEY, iban varchar(34) NOT NULL, CONSTRAINT uq_account_iban UNIQUE (iban))",
      "CREATE TABLE bank_account (\n  account_id integer PRIMARY KEY,\n  iban varchar(34) NOT NULL,\n  CONSTRAINT uq_account_iban UNIQUE (iban)\n)"
    ],
    "requiredPatterns": [
      {},
      {}
    ],
    "explanation": "uq_account_iban cheklovi o'rnatildi.",
    "task": "Create a table named `bank_account`: `account_id` (integer PRIMARY KEY), `iban` (varchar(34) NOT NULL) and `CONSTRAINT uq_account_iban UNIQUE (iban)` with constraint."
  },
  {
    "id": 43,
    "sector": 3,
    "difficulty": "Floor 3 • Easy",
    "source": "L03 Slide 19 • Qurilma MAC Manzili",
    "title": "Tarmoq Qurilmasi MAC Manzili",
    "story": "IT xavfsizligi barcha kompyuterlarning 17 xonali fizik MAC manzilini (masalan `00:1A:2B:3C:4D:5E`) qat'iy unikal saqlashi kerak.",
    "taskUz": "Create a table named `network_device`: `id` (integer PRIMARY KEY), `mac_address` (varchar(17) NOT NULL) and `CONSTRAINT uq_device_mac UNIQUE (mac_address)` with constraint.",
    "starterCode": "",
    "hint": "`CONSTRAINT uq_device_mac UNIQUE (mac_address)` dan foydalaning.",
    "solutions": [
      "CREATE TABLE network_device (id integer PRIMARY KEY, mac_address varchar(17) NOT NULL, CONSTRAINT uq_device_mac UNIQUE (mac_address))",
      "CREATE TABLE network_device (\n  id integer PRIMARY KEY,\n  mac_address varchar(17) NOT NULL,\n  CONSTRAINT uq_device_mac UNIQUE (mac_address)\n)"
    ],
    "requiredPatterns": [
      {},
      {}
    ],
    "explanation": "uq_device_mac cheklovi yaratildi.",
    "task": "Create a table named `network_device`: `id` (integer PRIMARY KEY), `mac_address` (varchar(17) NOT NULL) and `CONSTRAINT uq_device_mac UNIQUE (mac_address)` with constraint."
  },
  {
    "id": 44,
    "sector": 3,
    "difficulty": "Floor 3 • Intermediate",
    "source": "T03 Task 1 Employee Setup • Majburiy Maydonlar To'plami",
    "title": "Xodimning To'liq Majburiy Maydonlari",
    "story": "Seminar 3 ning employee jadvalida xodimning ismi, familiyasi and emaili qat'iy `NOT NULL` bo'lishi belgilangan.",
    "taskUz": "Create a table named `emp_core`: `id` (integer PRIMARY KEY), `first_name` (varchar(25) NOT NULL), `last_name` (varchar(25) NOT NULL) and `email` (varchar(100) NOT NULL CONSTRAINT uq_emp_core_email UNIQUE) bilan.",
    "starterCode": "",
    "hint": "`first_name` and `last_name` ga `NOT NULL`, `email` ga esa `NOT NULL CONSTRAINT uq_emp_core_email UNIQUE` bering.",
    "solutions": [
      "CREATE TABLE emp_core (id integer PRIMARY KEY, first_name varchar(25) NOT NULL, last_name varchar(25) NOT NULL, email varchar(100) NOT NULL CONSTRAINT uq_emp_core_email UNIQUE)",
      "CREATE TABLE emp_core (\n  id integer PRIMARY KEY,\n  first_name varchar(25) NOT NULL,\n  last_name varchar(25) NOT NULL,\n  email varchar(100) NOT NULL CONSTRAINT uq_emp_core_email UNIQUE\n)"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {}
    ],
    "explanation": "emp_core jadvali barcha majburiy and unikal ustunlar bilan to'liq barpo etildi.",
    "task": "Create a table named `emp_core`: `id` (integer PRIMARY KEY), `first_name` (varchar(25) NOT NULL), `last_name` (varchar(25) NOT NULL) and `email` (varchar(100) NOT NULL CONSTRAINT uq_emp_core_email UNIQUE) bilan."
  },
  {
    "id": 45,
    "sector": 3,
    "difficulty": "Floor 3 • Master Architect",
    "source": "T03 Task 1 Employee Complete • 3-Qavat Yakuni",
    "title": "3-Qavat Bossi: Xodimlar Jadvalining To'liq Constraintlari",
    "story": "3-qavatning bosh sinovi! Seminar 3 dagi `employee` jadvalining asosiy karkasini quring: Identity orqali avtomatik ID, named birlamchi kalit (`pk_employee_id`), majburiy ism-familiya and named unikal email (`uq_employee_email`).",
    "taskUz": "Create a table named `employee`: `id` (integer GENERATED ALWAYS AS IDENTITY), `first_name` (varchar(25) NOT NULL), `last_name` (varchar(25) NOT NULL), `email` (varchar(100) NOT NULL), `CONSTRAINT pk_employee_id PRIMARY KEY (id)` and `CONSTRAINT uq_employee_email UNIQUE (email)` bilan.",
    "starterCode": "",
    "hint": "Ikkala cheklovni ham jadval darajasida named holda e'lon qiling (`CONSTRAINT pk_employee_id ...` and `CONSTRAINT uq_employee_email ...`).",
    "solutions": [
      "CREATE TABLE employee (id integer GENERATED ALWAYS AS IDENTITY, first_name varchar(25) NOT NULL, last_name varchar(25) NOT NULL, email varchar(100) NOT NULL, CONSTRAINT pk_employee_id PRIMARY KEY (id), CONSTRAINT uq_employee_email UNIQUE (email))",
      "CREATE TABLE employee (\n  id integer GENERATED ALWAYS AS IDENTITY,\n  first_name varchar(25) NOT NULL,\n  last_name varchar(25) NOT NULL,\n  email varchar(100) NOT NULL,\n  CONSTRAINT pk_employee_id PRIMARY KEY (id),\n  CONSTRAINT uq_employee_email UNIQUE (email)\n)"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {},
      {},
      {}
    ],
    "expectedSchema": {
      "tableName": "employee",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true,
          "hasIdentity": true
        },
        {
          "name": "first_name",
          "type": "varchar(25)",
          "isNotNull": true
        },
        {
          "name": "last_name",
          "type": "varchar(25)",
          "isNotNull": true
        },
        {
          "name": "email",
          "type": "varchar(100)",
          "isNotNull": true,
          "isUQ": true
        }
      ],
      "requiredConstraints": [
        "pk_employee_id",
        "uq_employee_email"
      ]
    },
    "explanation": "3-Qavat Bossi tasdiqlandi! Identity, NOT NULL and named UNIQUE/PK to'liq o'rnatildi.",
    "task": "Create a table named `employee`: `id` (integer GENERATED ALWAYS AS IDENTITY), `first_name` (varchar(25) NOT NULL), `last_name` (varchar(25) NOT NULL), `email` (varchar(100) NOT NULL), `CONSTRAINT pk_employee_id PRIMARY KEY (id)` and `CONSTRAINT uq_employee_email UNIQUE (email)` bilan."
  },
  {
    "id": 46,
    "sector": 4,
    "difficulty": "Floor 4 • Easy",
    "source": "T03 Task 1 • CHECK Budget >= 0",
    "title": "Ijobiy Byudjet Constrainti (CHECK)",
    "story": "Seminar 3 qoidasi: kompaniya bo'limlarining byudjeti hech qachon manfiy bo'lishi mumkin emas (`budget >= 0`).",
    "taskUz": "Create a table named `dept_budget`: `id` (integer PRIMARY KEY), `budget` (numeric(12,2)) ustunlari and named `CONSTRAINT ck_dept_budget CHECK (budget >= 0)` with constraint.",
    "starterCode": "",
    "hint": "`CONSTRAINT ck_dept_budget CHECK (budget >= 0)` .",
    "solutions": [
      "CREATE TABLE dept_budget (id integer PRIMARY KEY, budget numeric(12,2), CONSTRAINT ck_dept_budget CHECK (budget >= 0))",
      "CREATE TABLE dept_budget (\n  id integer PRIMARY KEY,\n  budget numeric(12,2),\n  CONSTRAINT ck_dept_budget CHECK (budget >= 0)\n)"
    ],
    "requiredPatterns": [
      {},
      {}
    ],
    "explanation": "ck_dept_budget ijobiy byudjet cheklovi o'rnatildi.",
    "task": "Create a table named `dept_budget`: `id` (integer PRIMARY KEY), `budget` (numeric(12,2)) ustunlari and named `CONSTRAINT ck_dept_budget CHECK (budget >= 0)` with constraint."
  },
  {
    "id": 47,
    "sector": 4,
    "difficulty": "Floor 4 • Easy",
    "source": "T03 Task 2 Step 5 • Maosh Oralig'i Cheklovi",
    "title": "Maosh Diapazoni Constrainti (Salary Range)",
    "story": "Kompaniyada xodim maoshi 0 dan qat'iy katta and 5000 dollardan oshmasligi lozim (`salary > 0 AND salary <= 5000`).",
    "taskUz": "Create a table named `staff_salary`: `id` (integer PRIMARY KEY), `salary` (numeric(10,2)) ustunlari and named `CONSTRAINT ck_staff_salary CHECK (salary > 0 AND salary <= 5000)` with constraint.",
    "starterCode": "",
    "hint": "`CONSTRAINT ck_staff_salary CHECK (salary > 0 AND salary <= 5000)` sintaksisini kiriting.",
    "solutions": [
      "CREATE TABLE staff_salary (id integer PRIMARY KEY, salary numeric(10,2), CONSTRAINT ck_staff_salary CHECK (salary > 0 AND salary <= 5000))",
      "CREATE TABLE staff_salary (\n  id integer PRIMARY KEY,\n  salary numeric(10,2),\n  CONSTRAINT ck_staff_salary CHECK (salary > 0 AND salary <= 5000)\n)"
    ],
    "requiredPatterns": [
      {},
      {}
    ],
    "explanation": "ck_staff_salary maosh oralig'i biznes qoidasi o'rnatildi.",
    "task": "Create a table named `staff_salary`: `id` (integer PRIMARY KEY), `salary` (numeric(10,2)) ustunlari and named `CONSTRAINT ck_staff_salary CHECK (salary > 0 AND salary <= 5000)` with constraint."
  },
  {
    "id": 48,
    "sector": 4,
    "difficulty": "Floor 4 • Easy",
    "source": "T03 Task 2 Step 6 • Email Shablon Cheklovi",
    "title": "Email Shabloni Constrainti (LIKE '@')",
    "story": "Seminar 3 qoidasi: foydalanuvchi kiritgan elektron pochtada `@` belgisi bo'lishini ta'minlash uchun sinf shablon tekshiruvi kerak.",
    "taskUz": "Create a table named `contact_email`: `id` (integer PRIMARY KEY), `email` (varchar(100)) ustunlari and named `CONSTRAINT ck_contact_email CHECK (email LIKE '%@%')` with constraint.",
    "starterCode": "",
    "hint": "`CONSTRAINT ck_contact_email CHECK (email LIKE '%@%')` syntax..",
    "solutions": [
      "CREATE TABLE contact_email (id integer PRIMARY KEY, email varchar(100), CONSTRAINT ck_contact_email CHECK (email LIKE '%@%'))",
      "CREATE TABLE contact_email (\n  id integer PRIMARY KEY,\n  email varchar(100),\n  CONSTRAINT ck_contact_email CHECK (email LIKE '%@%')\n)"
    ],
    "requiredPatterns": [
      {},
      {}
    ],
    "explanation": "ck_contact_email shablon tekshiruvi muvaffaqiyatli o'rnatildi.",
    "task": "Create a table named `contact_email`: `id` (integer PRIMARY KEY), `email` (varchar(100)) ustunlari and named `CONSTRAINT ck_contact_email CHECK (email LIKE '%@%')` with constraint."
  },
  {
    "id": 49,
    "sector": 4,
    "difficulty": "Floor 4 • Easy",
    "source": "L03 Slide 21 • Ijobiy Narx Cheklovi",
    "title": "Mahsulot Narxi Ijobiyligi (Price > 0)",
    "story": "Do'konda mahsulot narxi 0 dan katta bo'lishi shart (tekin yoki manfiy narxga yo'l qo'yilmaydi).",
    "taskUz": "Create a table named `item_price`: `id` (integer PRIMARY KEY), `price` (numeric(8,2)) ustunlari and named `CONSTRAINT ck_item_price CHECK (price > 0)` with constraint.",
    "starterCode": "",
    "hint": "`CONSTRAINT ck_item_price CHECK (price > 0)` .",
    "solutions": [
      "CREATE TABLE item_price (id integer PRIMARY KEY, price numeric(8,2), CONSTRAINT ck_item_price CHECK (price > 0))",
      "CREATE TABLE item_price (\n  id integer PRIMARY KEY,\n  price numeric(8,2),\n  CONSTRAINT ck_item_price CHECK (price > 0)\n)"
    ],
    "requiredPatterns": [
      {},
      {}
    ],
    "explanation": "ck_item_price cheklovi o'rnatildi.",
    "task": "Create a table named `item_price`: `id` (integer PRIMARY KEY), `price` (numeric(8,2)) ustunlari and named `CONSTRAINT ck_item_price CHECK (price > 0)` with constraint."
  },
  {
    "id": 50,
    "sector": 4,
    "difficulty": "Floor 4 • Easy",
    "source": "L03 Slide 21 • Yosh Cheklovi (Age >= 18)",
    "title": "Voyaga Yetganlik Constrainti (Age >= 18)",
    "story": "Ishga qabul qilish qoidasiga ko'ra, xodimning yoshi kamida 18 yosh bo'lishi kerak.",
    "taskUz": "Create a table named `applicant`: `id` (integer PRIMARY KEY), `age` (integer) ustunlari and named `CONSTRAINT ck_applicant_age CHECK (age >= 18)` with constraint.",
    "starterCode": "",
    "hint": "`CONSTRAINT ck_applicant_age CHECK (age >= 18)` cheklovini yozing.",
    "solutions": [
      "CREATE TABLE applicant (id integer PRIMARY KEY, age integer, CONSTRAINT ck_applicant_age CHECK (age >= 18))",
      "CREATE TABLE applicant (\n  id integer PRIMARY KEY,\n  age integer,\n  CONSTRAINT ck_applicant_age CHECK (age >= 18)\n)"
    ],
    "requiredPatterns": [
      {},
      {}
    ],
    "explanation": "ck_applicant_age yosh cheklovi o'rnatildi.",
    "task": "Create a table named `applicant`: `id` (integer PRIMARY KEY), `age` (integer) ustunlari and named `CONSTRAINT ck_applicant_age CHECK (age >= 18)` with constraint."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = window.QUESTIONS_1_50;
}
