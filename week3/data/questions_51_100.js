var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);

_scope.QUESTIONS_51_100 = [
  {
    "id": 51,
    "sector": 4,
    "difficulty": "Floor 4 • Intermediate",
    "source": "L03 Slide 21 • Ro'yxatdan Tanlash (IN ro'yxat)",
    "title": "Cheklangan Qiymatlar Ro'yxati (CHECK IN)",
    "story": "Buyurtma holati faqat belgilangan 3 ta so'zdan biri bo'lishi mumkin: 'NEW', 'SHIPPED' yoki 'DELIVERED'.",
    "taskUz": "Create a table named `order_status`: `id` (integer PRIMARY KEY), `status` (varchar(20)) ustunlari and named `CONSTRAINT ck_order_status CHECK (status IN ('NEW', 'SHIPPED', 'DELIVERED'))` with constraint.",
    "starterCode": "",
    "hint": "`CONSTRAINT ck_order_status CHECK (status IN ('NEW', 'SHIPPED', 'DELIVERED'))` .",
    "solutions": [
      "CREATE TABLE order_status (id integer PRIMARY KEY, status varchar(20), CONSTRAINT ck_order_status CHECK (status IN ('NEW', 'SHIPPED', 'DELIVERED')))",
      "CREATE TABLE order_status (\n  id integer PRIMARY KEY,\n  status varchar(20),\n  CONSTRAINT ck_order_status CHECK (status IN ('NEW', 'SHIPPED', 'DELIVERED'))\n)"
    ],
    "requiredPatterns": [],
    "explanation": "ck_order_status ro'yxat tekshiruvi cheklovi muvaffaqiyatli o'rnatildi.",
    "task": "Create a table named `order_status`: `id` (integer PRIMARY KEY), `status` (varchar(20)) ustunlari and named `CONSTRAINT ck_order_status CHECK (status IN ('NEW', 'SHIPPED', 'DELIVERED'))` with constraint.",
    "expectedSchema": {
      "tableName": "order_status",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true,
          "isNotNull": true,
          "isUnique": false
        },
        {
          "name": "status",
          "type": "varchar(20)",
          "isPK": false,
          "isNotNull": false,
          "isUnique": false
        }
      ]
    }
  },
  {
    "id": 52,
    "sector": 4,
    "difficulty": "Floor 4 • Intermediate",
    "source": "L03 Slide 21 • Foiz Oralig'i (0 dan 100 gacha)",
    "title": "Foiz Oralig'i Constrainti (Discount 0–100)",
    "story": "Mijozga beriladigan chegirma foizi 0 dan kichik yoki 100 dan katta bo'lishi mumkin emas.",
    "taskUz": "Create a table named `discount_rate`: `id` (integer PRIMARY KEY), `rate` (numeric(5,2)) ustunlari and named `CONSTRAINT ck_discount_rate CHECK (rate >= 0 AND rate <= 100)` with constraint.",
    "starterCode": "",
    "hint": "`CONSTRAINT ck_discount_rate CHECK (rate >= 0 AND rate <= 100)` dan foydalaning.",
    "solutions": [
      "CREATE TABLE discount_rate (id integer PRIMARY KEY, rate numeric(5,2), CONSTRAINT ck_discount_rate CHECK (rate >= 0 AND rate <= 100))",
      "CREATE TABLE discount_rate (\n  id integer PRIMARY KEY,\n  rate numeric(5,2),\n  CONSTRAINT ck_discount_rate CHECK (rate >= 0 AND rate <= 100)\n)"
    ],
    "requiredPatterns": [],
    "explanation": "ck_discount_rate foiz chegarasi o'rnatildi.",
    "task": "Create a table named `discount_rate`: `id` (integer PRIMARY KEY), `rate` (numeric(5,2)) ustunlari and named `CONSTRAINT ck_discount_rate CHECK (rate >= 0 AND rate <= 100)` with constraint.",
    "expectedSchema": {
      "tableName": "discount_rate",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true,
          "isNotNull": true,
          "isUnique": false
        },
        {
          "name": "rate",
          "type": "numeric(5",
          "isPK": false,
          "isNotNull": false,
          "isUnique": false
        }
      ]
    }
  },
  {
    "id": 53,
    "sector": 4,
    "difficulty": "Floor 4 • Intermediate",
    "source": "L03 Slide 22 • Sanalar Solishtiruvi (End >= Start)",
    "title": "Tugash Sanasi Boshlanishidan Keyin Bo'lishi",
    "story": "Loyihaning tugash sanasi hech qachon uning boshlanish sanasidan oldin bo'lishi mumkin emas (`end_date >= start_date`).",
    "taskUz": "Create a table named `project_dates`: `id` (integer PRIMARY KEY), `start_date` (date), `end_date` (date) ustunlari and named `CONSTRAINT ck_project_dates CHECK (end_date >= start_date)` with constraint.",
    "starterCode": "",
    "hint": "`CONSTRAINT ck_project_dates CHECK (end_date >= start_date)` yozing.",
    "solutions": [
      "CREATE TABLE project_dates (id integer PRIMARY KEY, start_date date, end_date date, CONSTRAINT ck_project_dates CHECK (end_date >= start_date))",
      "CREATE TABLE project_dates (\n  id integer PRIMARY KEY,\n  start_date date,\n  end_date date,\n  CONSTRAINT ck_project_dates CHECK (end_date >= start_date)\n)"
    ],
    "requiredPatterns": [],
    "explanation": "ck_project_dates sanalar mantiqiy tartibi cheklovi barpo etildi.",
    "task": "Create a table named `project_dates`: `id` (integer PRIMARY KEY), `start_date` (date), `end_date` (date) ustunlari and named `CONSTRAINT ck_project_dates CHECK (end_date >= start_date)` with constraint.",
    "expectedSchema": {
      "tableName": "project_dates",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true,
          "isNotNull": true,
          "isUnique": false
        },
        {
          "name": "start_date",
          "type": "date",
          "isPK": false,
          "isNotNull": false,
          "isUnique": false
        },
        {
          "name": "end_date",
          "type": "date",
          "isPK": false,
          "isNotNull": false,
          "isUnique": false
        }
      ]
    }
  },
  {
    "id": 54,
    "sector": 4,
    "difficulty": "Floor 4 • Easy",
    "source": "L03 Slide 21 • Reyting Cheklovi (Rating 1–5)",
    "title": "Xizmat Reytingi Constrainti (1 dan 5 gacha)",
    "story": "Mijoz xizmatga 1 dan 5 gacha baho qo'yishi mumkin.",
    "taskUz": "Create a table named `feedback`: `id` (integer PRIMARY KEY), `rating` (integer) ustunlari and named `CONSTRAINT ck_feedback_rating CHECK (rating >= 1 AND rating <= 5)` with constraint.",
    "starterCode": "",
    "hint": "`CONSTRAINT ck_feedback_rating CHECK (rating >= 1 AND rating <= 5)` yordamida bajaring.",
    "solutions": [
      "CREATE TABLE feedback (id integer PRIMARY KEY, rating integer, CONSTRAINT ck_feedback_rating CHECK (rating >= 1 AND rating <= 5))",
      "CREATE TABLE feedback (\n  id integer PRIMARY KEY,\n  rating integer,\n  CONSTRAINT ck_feedback_rating CHECK (rating >= 1 AND rating <= 5)\n)"
    ],
    "requiredPatterns": [],
    "explanation": "ck_feedback_rating reyting cheklovi o'rnatildi.",
    "task": "Create a table named `feedback`: `id` (integer PRIMARY KEY), `rating` (integer) ustunlari and named `CONSTRAINT ck_feedback_rating CHECK (rating >= 1 AND rating <= 5)` with constraint.",
    "expectedSchema": {
      "tableName": "feedback",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true,
          "isNotNull": true,
          "isUnique": false
        },
        {
          "name": "rating",
          "type": "integer",
          "isPK": false,
          "isNotNull": false,
          "isUnique": false
        }
      ]
    }
  },
  {
    "id": 55,
    "sector": 4,
    "difficulty": "Floor 4 • Intermediate",
    "source": "L03 Slide 21 • Matn Uzunligi Cheklovi (Length)",
    "title": "Parol Minimal Uzunligi Constrainti (LENGTH >= 8)",
    "story": "Foydalanuvchi paroli xavfsizlik talabiga ko'ra kamida 8 ta belgidan iborat bo'lishi lozim.",
    "taskUz": "Create a table named `user_security`: `id` (integer PRIMARY KEY), `password_hash` (varchar(100)) ustunlari and named `CONSTRAINT ck_password_length CHECK (length(password_hash) >= 8)` with constraint.",
    "starterCode": "",
    "hint": "`CHECK (length(password_hash) >= 8)` funksiyasini named constraint ichida ishlating.",
    "solutions": [
      "CREATE TABLE user_security (id integer PRIMARY KEY, password_hash varchar(100), CONSTRAINT ck_password_length CHECK (length(password_hash) >= 8))",
      "CREATE TABLE user_security (\n  id integer PRIMARY KEY,\n  password_hash varchar(100),\n  CONSTRAINT ck_password_length CHECK (length(password_hash) >= 8)\n)"
    ],
    "requiredPatterns": [],
    "explanation": "ck_password_length parol uzunligi cheklovi o'rnatildi.",
    "task": "Create a table named `user_security`: `id` (integer PRIMARY KEY), `password_hash` (varchar(100)) ustunlari and named `CONSTRAINT ck_password_length CHECK (length(password_hash) >= 8)` with constraint.",
    "expectedSchema": {
      "tableName": "user_security",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true,
          "isNotNull": true,
          "isUnique": false
        },
        {
          "name": "password_hash",
          "type": "varchar(100)",
          "isPK": false,
          "isNotNull": false,
          "isUnique": false
        }
      ]
    }
  },
  {
    "id": 56,
    "sector": 4,
    "difficulty": "Floor 4 • Easy",
    "source": "L03 Slide 21 • Musbat Miqdor (Quantity > 0)",
    "title": "Ombor Miqdori Musbatligi (Qty >= 0)",
    "story": "Ombordagi qoldiq tovar soni hech qachon manfiy bo'lishi mumkin emas.",
    "taskUz": "Create a table named `warehouse_stock`: `id` (integer PRIMARY KEY), `qty` (integer) ustunlari and named `CONSTRAINT ck_stock_qty CHECK (qty >= 0)` with constraint.",
    "starterCode": "",
    "hint": "`CONSTRAINT ck_stock_qty CHECK (qty >= 0)` .",
    "solutions": [
      "CREATE TABLE warehouse_stock (id integer PRIMARY KEY, qty integer, CONSTRAINT ck_stock_qty CHECK (qty >= 0))",
      "CREATE TABLE warehouse_stock (\n  id integer PRIMARY KEY,\n  qty integer,\n  CONSTRAINT ck_stock_qty CHECK (qty >= 0)\n)"
    ],
    "requiredPatterns": [],
    "explanation": "ck_stock_qty tovar miqdori qoidasi o'rnatildi.",
    "task": "Create a table named `warehouse_stock`: `id` (integer PRIMARY KEY), `qty` (integer) ustunlari and named `CONSTRAINT ck_stock_qty CHECK (qty >= 0)` with constraint.",
    "expectedSchema": {
      "tableName": "warehouse_stock",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true,
          "isNotNull": true,
          "isUnique": false
        },
        {
          "name": "qty",
          "type": "integer",
          "isPK": false,
          "isNotNull": false,
          "isUnique": false
        }
      ]
    }
  },
  {
    "id": 57,
    "sector": 4,
    "difficulty": "Floor 4 • Intermediate",
    "source": "L03 Slide 21 • Ikkita Cheklov Birgalikda",
    "title": "Narx va Qoldiq Constraintlari Bir Jadvalda",
    "story": "Mahsulot narxi musbat (`price > 0`) and qoldig'i manfiy bo'lmasligi (`qty >= 0`) kerak.",
    "taskUz": "Create a table named `retail_item`: `id` (integer PRIMARY KEY), `price` (numeric(8,2)), `qty` (integer) ustunlari and `CONSTRAINT ck_retail_price CHECK (price > 0)` and `CONSTRAINT ck_retail_qty CHECK (qty >= 0)` cheklovlari bilan.",
    "starterCode": "",
    "hint": "Ikkita alohida `CONSTRAINT ... CHECK (...)` qatorini yozing.",
    "solutions": [
      "CREATE TABLE retail_item (id integer PRIMARY KEY, price numeric(8,2), qty integer, CONSTRAINT ck_retail_price CHECK (price > 0), CONSTRAINT ck_retail_qty CHECK (qty >= 0))",
      "CREATE TABLE retail_item (\n  id integer PRIMARY KEY,\n  price numeric(8,2),\n  qty integer,\n  CONSTRAINT ck_retail_price CHECK (price > 0),\n  CONSTRAINT ck_retail_qty CHECK (qty >= 0)\n)"
    ],
    "requiredPatterns": [],
    "explanation": "retail_item jadvalida ikkita mustaqil biznes qoida o'rnatildi.",
    "task": "Create a table named `retail_item`: `id` (integer PRIMARY KEY), `price` (numeric(8,2)), `qty` (integer) ustunlari and `CONSTRAINT ck_retail_price CHECK (price > 0)` and `CONSTRAINT ck_retail_qty CHECK (qty >= 0)` cheklovlari bilan.",
    "expectedSchema": {
      "tableName": "retail_item",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true,
          "isNotNull": true,
          "isUnique": false
        },
        {
          "name": "price",
          "type": "numeric(8",
          "isPK": false,
          "isNotNull": false,
          "isUnique": false
        },
        {
          "name": "qty",
          "type": "integer",
          "isPK": false,
          "isNotNull": false,
          "isUnique": false
        }
      ]
    }
  },
  {
    "id": 58,
    "sector": 4,
    "difficulty": "Floor 4 • Intermediate",
    "source": "L03 Slide 22 • Shartli Cheklov (Valyuta Kodlari)",
    "title": "Valyuta Kodi Format Constrainti (3 ta Harf)",
    "story": "Xalqaro standartda (ISO 4217) valyuta kodi doimo roppa-rosa 3 ta belgidan iborat bo'ladi (masalan USD, EUR, UZS).",
    "taskUz": "Create a table named `currency`: `id` (integer PRIMARY KEY), `code` (varchar(3)) ustunlari and named `CONSTRAINT ck_currency_code CHECK (length(code) = 3)` with constraint.",
    "starterCode": "",
    "hint": "`CONSTRAINT ck_currency_code CHECK (length(code) = 3)` dan foydalaning.",
    "solutions": [
      "CREATE TABLE currency (id integer PRIMARY KEY, code varchar(3), CONSTRAINT ck_currency_code CHECK (length(code) = 3))",
      "CREATE TABLE currency (\n  id integer PRIMARY KEY,\n  code varchar(3),\n  CONSTRAINT ck_currency_code CHECK (length(code) = 3)\n)"
    ],
    "requiredPatterns": [],
    "explanation": "ck_currency_code valyuta formati cheklovi o'rnatildi.",
    "task": "Create a table named `currency`: `id` (integer PRIMARY KEY), `code` (varchar(3)) ustunlari and named `CONSTRAINT ck_currency_code CHECK (length(code) = 3)` with constraint.",
    "expectedSchema": {
      "tableName": "currency",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true,
          "isNotNull": true,
          "isUnique": false
        },
        {
          "name": "code",
          "type": "varchar(3)",
          "isPK": false,
          "isNotNull": false,
          "isUnique": false
        }
      ]
    }
  },
  {
    "id": 59,
    "sector": 4,
    "difficulty": "Floor 4 • Intermediate",
    "source": "L03 Slide 22 • Imtiyoz va Minimal Maosh",
    "title": "Eng Kam Oylik Ish Haqi Constrainti (Min Wage)",
    "story": "Qonunchilikka binoan, xodimning oylik maoshi belgilangan eng kam miqdordan (masalan $800) kam bo'lishi taqiqlanadi.",
    "taskUz": "Create a table named `contract`: `id` (integer PRIMARY KEY), `salary` (numeric(10,2)) ustunlari and named `CONSTRAINT ck_min_wage CHECK (salary >= 800)` with constraint.",
    "starterCode": "",
    "hint": "`CONSTRAINT ck_min_wage CHECK (salary >= 800)` .",
    "solutions": [
      "CREATE TABLE contract (id integer PRIMARY KEY, salary numeric(10,2), CONSTRAINT ck_min_wage CHECK (salary >= 800))",
      "CREATE TABLE contract (\n  id integer PRIMARY KEY,\n  salary numeric(10,2),\n  CONSTRAINT ck_min_wage CHECK (salary >= 800)\n)"
    ],
    "requiredPatterns": [],
    "explanation": "ck_min_wage qonuniy me'yor cheklovi yaratildi.",
    "task": "Create a table named `contract`: `id` (integer PRIMARY KEY), `salary` (numeric(10,2)) ustunlari and named `CONSTRAINT ck_min_wage CHECK (salary >= 800)` with constraint.",
    "expectedSchema": {
      "tableName": "contract",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true,
          "isNotNull": true,
          "isUnique": false
        },
        {
          "name": "salary",
          "type": "numeric(10",
          "isPK": false,
          "isNotNull": false,
          "isUnique": false
        }
      ]
    }
  },
  {
    "id": 60,
    "sector": 4,
    "difficulty": "Floor 4 • Master Architect",
    "source": "T03 Task 1 & Task 2 • 4-Qavat Yakuni",
    "title": "4-Qavat Bossi: Bo'limlar Jadvalining Byudjet Constrainti",
    "story": "4-qavatning buyuk yakuni! Seminar 3 dagi `department` jadvalini to'liq arxitekturasini quring: Identity orqali avtomatik ID (1 dan 10 qadam bilan), named birlamchi kalit (`pk_department_id`), named unikal nom (`uq_department_title`) and named ijobiy byudjet cheklovi (`ck_department_budget`).",
    "taskUz": "Create a table named `department`: `id` (integer GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 10)), `title` (varchar(100) NOT NULL), `location` (varchar(50)), `budget` (numeric(12,2)) ustunlari and `CONSTRAINT pk_department_id PRIMARY KEY (id)`, `CONSTRAINT uq_department_title UNIQUE (title)`, `CONSTRAINT ck_department_budget CHECK (budget >= 0)` cheklovlari bilan.\n\n📋 **Kutilayotgan Relyatsion Sxema / DDL:**\n• Jadval: **department**\n• Ustunlar: `id` [PK] (integer), `title` [NOT NULL] (varchar(100)), `location` (varchar(50)), `budget` (numeric(12,2))\n• Cheklovlar: `pk_department_id`, `uq_department_title`, `ck_department_budget`",
    "starterCode": "",
    "hint": "Uchala named cheklovni ham jadval oxirida vergul bilan ketma-ket e'lon qiling.",
    "solutions": [
      "CREATE TABLE department (id integer GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 10), title varchar(100) NOT NULL, location varchar(50), budget numeric(12,2), CONSTRAINT pk_department_id PRIMARY KEY (id), CONSTRAINT uq_department_title UNIQUE (title), CONSTRAINT ck_department_budget CHECK (budget >= 0))",
      "CREATE TABLE department (\n  id integer GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 10),\n  title varchar(100) NOT NULL,\n  location varchar(50),\n  budget numeric(12,2),\n  CONSTRAINT pk_department_id PRIMARY KEY (id),\n  CONSTRAINT uq_department_title UNIQUE (title),\n  CONSTRAINT ck_department_budget CHECK (budget >= 0)\n)"
    ],
    "requiredPatterns": [],
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
          "type": "varchar(100)",
          "isNotNull": true,
          "isUQ": true
        },
        {
          "name": "location",
          "type": "varchar(50)"
        },
        {
          "name": "budget",
          "type": "numeric(12,2)",
          "hasCheck": true
        }
      ],
      "requiredConstraints": [
        "pk_department_id",
        "uq_department_title",
        "ck_department_budget"
      ]
    },
    "explanation": "4-Qavat Bossi zabt etildi! Seminar 3 ning to'liq mukammal department jadvali arxitekturasi barpo etildi.",
    "task": "Create a table named `department`: `id` (integer GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 10)), `title` (varchar(100) NOT NULL), `location` (varchar(50)), `budget` (numeric(12,2)) ustunlari and `CONSTRAINT pk_department_id PRIMARY KEY (id)`, `CONSTRAINT uq_department_title UNIQUE (title)`, `CONSTRAINT ck_department_budget CHECK (budget >= 0)` cheklovlari bilan."
  },
  {
    "id": 61,
    "sector": 5,
    "difficulty": "Floor 5 • Easy",
    "source": "T03 Task 1 Employee • DEFAULT true",
    "title": "Mantiqiy Standart Qiymat (DEFAULT true)",
    "story": "Seminar 3 qoidasi: yangi qo'shilgan xodim avtomatik tarzda faol (`active boolean NOT NULL DEFAULT true`) hisoblanadi.",
    "taskUz": "Create a table named `app_user` with columns: `id` (integer PRIMARY KEY), `username` (varchar(50) NOT NULL) and `active` (boolean NOT NULL DEFAULT true).",
    "starterCode": "",
    "hint": "`active boolean NOT NULL DEFAULT true` .",
    "solutions": [
      "CREATE TABLE app_user (id integer PRIMARY KEY, username varchar(50) NOT NULL, active boolean NOT NULL DEFAULT true)",
      "CREATE TABLE app_user (\n  id integer PRIMARY KEY,\n  username varchar(50) NOT NULL,\n  active boolean NOT NULL DEFAULT true\n)"
    ],
    "requiredPatterns": [],
    "explanation": "active boolean NOT NULL DEFAULT true standart qiymati o'rnatildi.",
    "task": "Create a table named `app_user` with columns: `id` (integer PRIMARY KEY), `username` (varchar(50) NOT NULL) and `active` (boolean NOT NULL DEFAULT true).",
    "expectedSchema": {
      "tableName": "app_user",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true,
          "isNotNull": true,
          "isUnique": false
        },
        {
          "name": "username",
          "type": "varchar(50)",
          "isPK": false,
          "isNotNull": true,
          "isUnique": false
        },
        {
          "name": "active",
          "type": "boolean",
          "isPK": false,
          "isNotNull": true,
          "isUnique": false
        }
      ]
    }
  },
  {
    "id": 62,
    "sector": 5,
    "difficulty": "Floor 5 • Easy",
    "source": "T03 Task 1 Employee • DEFAULT CURRENT_TIMESTAMP",
    "title": "Avtomatik Vaqt Tamg'asi (DEFAULT CURRENT_TIMESTAMP)",
    "story": "Qator qachon kiritilganini avtomatik belgilash uchun `DEFAULT CURRENT_TIMESTAMP` dan foydalaniladi.",
    "taskUz": "Create a table named `worker` with columns: `id` (integer PRIMARY KEY), `name` (varchar(50) NOT NULL) and `hired_at` (timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP).",
    "starterCode": "",
    "hint": "`hired_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP` sintaksisini qo'llang.",
    "solutions": [
      "CREATE TABLE worker (id integer PRIMARY KEY, name varchar(50) NOT NULL, hired_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP)",
      "CREATE TABLE worker (\n  id integer PRIMARY KEY,\n  name varchar(50) NOT NULL,\n  hired_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP\n)"
    ],
    "requiredPatterns": [],
    "explanation": "hired_at ustuniga CURRENT_TIMESTAMP standart vaqti o'rnatildi.",
    "task": "Create a table named `worker` with columns: `id` (integer PRIMARY KEY), `name` (varchar(50) NOT NULL) and `hired_at` (timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP).",
    "expectedSchema": {
      "tableName": "worker",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true,
          "isNotNull": true,
          "isUnique": false
        },
        {
          "name": "name",
          "type": "varchar(50)",
          "isPK": false,
          "isNotNull": true,
          "isUnique": false
        },
        {
          "name": "hired_at",
          "type": "timestamp",
          "isPK": false,
          "isNotNull": true,
          "isUnique": false
        }
      ]
    }
  },
  {
    "id": 63,
    "sector": 5,
    "difficulty": "Floor 5 • Easy",
    "source": "T03 Task 2 Step 5 • DEFAULT 1000",
    "title": "Standart Maosh Qiymati (DEFAULT 1000)",
    "story": "Seminar 3 qoidasi: agar xodim maoshi ko'rsatilmasa, unga avtomatik tarzda 1000 dollar standart qiymat biriktiriladi.",
    "taskUz": "Create a table named `payroll` with columns: `id` (integer PRIMARY KEY) and `salary` (numeric(10,2) DEFAULT 1000).",
    "starterCode": "",
    "hint": "`salary numeric(10,2) DEFAULT 1000` .",
    "solutions": [
      "CREATE TABLE payroll (id integer PRIMARY KEY, salary numeric(10,2) DEFAULT 1000)",
      "CREATE TABLE payroll (\n  id integer PRIMARY KEY,\n  salary numeric(10,2) DEFAULT 1000\n)"
    ],
    "requiredPatterns": [],
    "explanation": "salary maydoniga DEFAULT 1000 standart qiymati berildi.",
    "task": "Create a table named `payroll` with columns: `id` (integer PRIMARY KEY) and `salary` (numeric(10,2) DEFAULT 1000).",
    "expectedSchema": {
      "tableName": "payroll",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true,
          "isNotNull": true,
          "isUnique": false
        },
        {
          "name": "salary",
          "type": "numeric(10",
          "isPK": false,
          "isNotNull": false,
          "isUnique": false
        },
        {
          "name": "2)",
          "type": "DEFAULT",
          "isPK": false,
          "isNotNull": false,
          "isUnique": false
        }
      ]
    }
  },
  {
    "id": 64,
    "sector": 5,
    "difficulty": "Floor 5 • Easy",
    "source": "L03 Slide 23 • Standart Matnli Qiymat",
    "title": "Standart Matnli Holat (DEFAULT 'Pending')",
    "story": "Buyurtmalar dastlab kiritilganda ularning holati avtomatik ravishda 'Pending' (Kutilmoqda) bo'lishi kerak.",
    "taskUz": "Create a table named `service_order` with columns: `id` (integer PRIMARY KEY) and `status` (varchar(20) NOT NULL DEFAULT 'Pending').",
    "starterCode": "",
    "hint": "`status varchar(20) NOT NULL DEFAULT 'Pending'` yozing.",
    "solutions": [
      "CREATE TABLE service_order (id integer PRIMARY KEY, status varchar(20) NOT NULL DEFAULT 'Pending')",
      "CREATE TABLE service_order (\n  id integer PRIMARY KEY,\n  status varchar(20) NOT NULL DEFAULT 'Pending'\n)"
    ],
    "requiredPatterns": [],
    "explanation": "status maydoniga 'Pending' matnli standart qiymati o'rnatildi.",
    "task": "Create a table named `service_order` with columns: `id` (integer PRIMARY KEY) and `status` (varchar(20) NOT NULL DEFAULT 'Pending').",
    "expectedSchema": {
      "tableName": "service_order",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true,
          "isNotNull": true,
          "isUnique": false
        },
        {
          "name": "status",
          "type": "varchar(20)",
          "isPK": false,
          "isNotNull": true,
          "isUnique": false
        }
      ]
    }
  },
  {
    "id": 65,
    "sector": 5,
    "difficulty": "Floor 5 • Intermediate",
    "source": "T03 Task 1 Step 1 • Kompozit Birlamchi Kalit (Department2)",
    "title": "Kompozit Kalit: Nomi va Shahri Juftligi",
    "story": "Seminar 3 ning 1-qadami: bitta shaharda faqat bitta nomli bo'lim bo'lishi mumkin. Ya'ni bo'lim nomi (`title`) and joylashgan shahri (`location`) birgalikda kompozit (juft) birlamchi kalitni hosil qiladi.",
    "taskUz": "Create a table named `department2`: `title` (varchar(100)), `location` (varchar(50)) ustunlari and named kompozit primary key (`CONSTRAINT pk_department2 PRIMARY KEY (title, location)`) bilan.\n\n📋 **Kutilayotgan Relyatsion Sxema / DDL:**\n• Jadval: **department2**\n• Ustunlar: `title` [PK] (varchar(100)), `location` [PK] (varchar(50))\n• Cheklovlar: `pk_department2`",
    "starterCode": "",
    "hint": "`CONSTRAINT pk_department2 PRIMARY KEY (title, location)` ko'rinishida ikkita ustun nomini qavs ichida vergul bilan bering.",
    "solutions": [
      "CREATE TABLE department2 (title varchar(100), location varchar(50), CONSTRAINT pk_department2 PRIMARY KEY (title, location))",
      "CREATE TABLE department2 (\n  title varchar(100),\n  location varchar(50),\n  CONSTRAINT pk_department2 PRIMARY KEY (title, location)\n)"
    ],
    "requiredPatterns": [],
    "expectedSchema": {
      "tableName": "department2",
      "columns": [
        {
          "name": "title",
          "type": "varchar(100)",
          "isPK": true
        },
        {
          "name": "location",
          "type": "varchar(50)",
          "isPK": true
        }
      ],
      "requiredConstraints": [
        "pk_department2"
      ]
    },
    "explanation": "department2 jadvalida ikkita ustunli kompozit birlamchi kalit o'rnatildi.",
    "task": "Create a table named `department2`: `title` (varchar(100)), `location` (varchar(50)) ustunlari and named kompozit primary key (`CONSTRAINT pk_department2 PRIMARY KEY (title, location)`) bilan."
  },
  {
    "id": 66,
    "sector": 5,
    "difficulty": "Floor 5 • Intermediate",
    "source": "T03 Task 4 • Bo'lim Telefoni Kompozit Kaliti",
    "title": "Bo'lim Telefoni Juftlik Kaliti (dept_id + phone)",
    "story": "Seminar 2 and 3 dagi `department_phone` jadvalida: bitta bo'lim bir nechta telefonga ega bo'lishi mumkin. Shu sababli `dept_id` and `phone` birgalikda kompozit birlamchi kalit bo'ladi.",
    "taskUz": "Create a table named `department_phone`: `dept_id` (integer), `phone` (varchar(20)) ustunlari and named `CONSTRAINT pk_department_phone PRIMARY KEY (dept_id, phone)` kaliti bilan.\n\n📋 **Kutilayotgan Relyatsion Sxema / DDL:**\n• Jadval: **department_phone**\n• Ustunlar: `dept_id` [PK] (integer), `phone` [PK] (varchar(20))\n• Cheklovlar: `pk_department_phone`",
    "starterCode": "",
    "hint": "`CONSTRAINT pk_department_phone PRIMARY KEY (dept_id, phone)` .",
    "solutions": [
      "CREATE TABLE department_phone (dept_id integer, phone varchar(20), CONSTRAINT pk_department_phone PRIMARY KEY (dept_id, phone))",
      "CREATE TABLE department_phone (\n  dept_id integer,\n  phone varchar(20),\n  CONSTRAINT pk_department_phone PRIMARY KEY (dept_id, phone)\n)"
    ],
    "requiredPatterns": [],
    "expectedSchema": {
      "tableName": "department_phone",
      "columns": [
        {
          "name": "dept_id",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "phone",
          "type": "varchar(20)",
          "isPK": true
        }
      ],
      "requiredConstraints": [
        "pk_department_phone"
      ]
    },
    "explanation": "department_phone kompozit kalitli relyatsion jadvali yaratildi.",
    "task": "Create a table named `department_phone`: `dept_id` (integer), `phone` (varchar(20)) ustunlari and named `CONSTRAINT pk_department_phone PRIMARY KEY (dept_id, phone)` kaliti bilan."
  },
  {
    "id": 67,
    "sector": 5,
    "difficulty": "Floor 5 • Intermediate",
    "source": "L03 Slide 24 • Buyurtma va Mahsulot Bog'lovchi Kalit",
    "title": "Buyurtma Tarkibi Kompozit Kaliti (order_id + item_id)",
    "story": "Ko'pga-ko'p (M:N) aloqada buyurtma tarkibi jadvalida buyurtma raqami and mahsulot raqami juftligi yagona kalit hisoblanadi.",
    "taskUz": "Create a table named `order_item`: `order_id` (integer), `item_id` (integer), `quantity` (integer NOT NULL DEFAULT 1) ustunlari and `CONSTRAINT pk_order_item PRIMARY KEY (order_id, item_id)` bilan.",
    "starterCode": "",
    "hint": "`CONSTRAINT pk_order_item PRIMARY KEY (order_id, item_id)` and `quantity integer NOT NULL DEFAULT 1`.",
    "solutions": [
      "CREATE TABLE order_item (order_id integer, item_id integer, quantity integer NOT NULL DEFAULT 1, CONSTRAINT pk_order_item PRIMARY KEY (order_id, item_id))",
      "CREATE TABLE order_item (\n  order_id integer,\n  item_id integer,\n  quantity integer NOT NULL DEFAULT 1,\n  CONSTRAINT pk_order_item PRIMARY KEY (order_id, item_id)\n)"
    ],
    "requiredPatterns": [],
    "explanation": "order_item ko'pga-ko'p bog'lovchi kompozit jadvali barpo etildi.",
    "task": "Create a table named `order_item`: `order_id` (integer), `item_id` (integer), `quantity` (integer NOT NULL DEFAULT 1) ustunlari and `CONSTRAINT pk_order_item PRIMARY KEY (order_id, item_id)` bilan.",
    "expectedSchema": {
      "tableName": "order_item",
      "columns": [
        {
          "name": "order_id",
          "type": "integer",
          "isPK": false,
          "isNotNull": false,
          "isUnique": false
        },
        {
          "name": "item_id",
          "type": "integer",
          "isPK": false,
          "isNotNull": false,
          "isUnique": false
        },
        {
          "name": "quantity",
          "type": "integer",
          "isPK": false,
          "isNotNull": true,
          "isUnique": false
        }
      ]
    }
  },
  {
    "id": 68,
    "sector": 5,
    "difficulty": "Floor 5 • Intermediate",
    "source": "T03 Task 4 Child • Farzandlar Kompozit Kaliti",
    "title": "Xodim Farzandlari Kompozit Kaliti (parent + name)",
    "story": "Seminar 2 and 3 kompaniya sxemasida: `child` zaif (weak) sub'ekt bo'lib, uning birlamchi kaliti ota-onaning pasporti and farzandning ismidan iborat.",
    "taskUz": "Create a table named `child`: `parent_passport_no` (varchar(20)), `child_name` (varchar(50)), `dob` (date) ustunlari and `CONSTRAINT pk_child PRIMARY KEY (parent_passport_no, child_name)` bilan.",
    "starterCode": "",
    "hint": "`CONSTRAINT pk_child PRIMARY KEY (parent_passport_no, child_name)` declared.",
    "solutions": [
      "CREATE TABLE child (parent_passport_no varchar(20), child_name varchar(50), dob date, CONSTRAINT pk_child PRIMARY KEY (parent_passport_no, child_name))",
      "CREATE TABLE child (\n  parent_passport_no varchar(20),\n  child_name varchar(50),\n  dob date,\n  CONSTRAINT pk_child PRIMARY KEY (parent_passport_no, child_name)\n)"
    ],
    "requiredPatterns": [],
    "explanation": "child relyatsion kompozit kaliti muvaffaqiyatli o'rnatildi.",
    "task": "Create a table named `child`: `parent_passport_no` (varchar(20)), `child_name` (varchar(50)), `dob` (date) ustunlari and `CONSTRAINT pk_child PRIMARY KEY (parent_passport_no, child_name)` bilan.",
    "expectedSchema": {
      "tableName": "child",
      "columns": [
        {
          "name": "parent_passport_no",
          "type": "varchar(20)",
          "isPK": false,
          "isNotNull": false,
          "isUnique": false
        },
        {
          "name": "child_name",
          "type": "varchar(50)",
          "isPK": false,
          "isNotNull": false,
          "isUnique": false
        },
        {
          "name": "dob",
          "type": "date",
          "isPK": false,
          "isNotNull": false,
          "isUnique": false
        }
      ]
    }
  },
  {
    "id": 69,
    "sector": 5,
    "difficulty": "Floor 5 • Intermediate",
    "source": "L03 Slide 24 • Talaba va Fan Ro'yxati",
    "title": "Talabaning Fanlarga Yozilishi (student_id + course_id)",
    "story": "Bitta talaba bitta fanga faqat bir marta yozilishi mumkin. Shu sababli ikkala ustun birgalikda Primary Key bo'ladi.",
    "taskUz": "Create a table named `enrollment`: `student_id` (integer), `course_id` (integer), `enrolled_date` (date DEFAULT CURRENT_DATE) ustunlari and `CONSTRAINT pk_enrollment PRIMARY KEY (student_id, course_id)` bilan.",
    "starterCode": "",
    "hint": "`CONSTRAINT pk_enrollment PRIMARY KEY (student_id, course_id)` .",
    "solutions": [
      "CREATE TABLE enrollment (student_id integer, course_id integer, enrolled_date date DEFAULT CURRENT_DATE, CONSTRAINT pk_enrollment PRIMARY KEY (student_id, course_id))",
      "CREATE TABLE enrollment (\n  student_id integer,\n  course_id integer,\n  enrolled_date date DEFAULT CURRENT_DATE,\n  CONSTRAINT pk_enrollment PRIMARY KEY (student_id, course_id)\n)"
    ],
    "requiredPatterns": [],
    "explanation": "enrollment kompozit kalitli jadvali tasdiqlandi.",
    "task": "Create a table named `enrollment`: `student_id` (integer), `course_id` (integer), `enrolled_date` (date DEFAULT CURRENT_DATE) ustunlari and `CONSTRAINT pk_enrollment PRIMARY KEY (student_id, course_id)` bilan.",
    "expectedSchema": {
      "tableName": "enrollment",
      "columns": [
        {
          "name": "student_id",
          "type": "integer",
          "isPK": false,
          "isNotNull": false,
          "isUnique": false
        },
        {
          "name": "course_id",
          "type": "integer",
          "isPK": false,
          "isNotNull": false,
          "isUnique": false
        },
        {
          "name": "enrolled_date",
          "type": "date",
          "isPK": false,
          "isNotNull": false,
          "isUnique": false
        }
      ]
    }
  },
  {
    "id": 70,
    "sector": 5,
    "difficulty": "Floor 5 • Easy",
    "source": "L03 Slide 23 • Standart Nol (DEFAULT 0)",
    "title": "Ko'rishlar Soni Standart Qiymati (DEFAULT 0)",
    "story": "Maqola yangi e'lon qilinganda uning ko'rishlar soni (`views_count`) avtomatik tarzda 0 bo'lishi kerak.",
    "taskUz": "Create a table named `post` with columns: `id` (integer PRIMARY KEY), `title` (varchar(100) NOT NULL) and `views_count` (integer NOT NULL DEFAULT 0).",
    "starterCode": "",
    "hint": "`views_count integer NOT NULL DEFAULT 0` syntax..",
    "solutions": [
      "CREATE TABLE post (id integer PRIMARY KEY, title varchar(100) NOT NULL, views_count integer NOT NULL DEFAULT 0)",
      "CREATE TABLE post (\n  id integer PRIMARY KEY,\n  title varchar(100) NOT NULL,\n  views_count integer NOT NULL DEFAULT 0\n)"
    ],
    "requiredPatterns": [],
    "explanation": "DEFAULT 0 hisoblagichi o'rnatildi.",
    "task": "Create a table named `post` with columns: `id` (integer PRIMARY KEY), `title` (varchar(100) NOT NULL) and `views_count` (integer NOT NULL DEFAULT 0).",
    "expectedSchema": {
      "tableName": "post",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true,
          "isNotNull": true,
          "isUnique": false
        },
        {
          "name": "title",
          "type": "varchar(100)",
          "isPK": false,
          "isNotNull": true,
          "isUnique": false
        },
        {
          "name": "views_count",
          "type": "integer",
          "isPK": false,
          "isNotNull": true,
          "isUnique": false
        }
      ]
    }
  },
  {
    "id": 71,
    "sector": 5,
    "difficulty": "Floor 5 • Easy",
    "source": "T03 Task 1 Step 2 • Department2 Nomini O'zgartirish",
    "title": "Jadval Nomini O'zgartirish (RENAME TO)",
    "story": "Seminar 3 vazifasiga ko'ra, `department2` jadvalining nomini `department3` ga o'zgartirish talab etiladi.",
    "taskUz": "`department2` jadvalining nomini `department3` ga o'zgartiring (`ALTER TABLE ... RENAME TO ...`).",
    "starterCode": "",
    "hint": "`ALTER TABLE department2 RENAME TO department3` .",
    "solutions": [
      "ALTER TABLE department2 RENAME TO department3",
      "ALTER TABLE department2\nRENAME TO department3"
    ],
    "requiredPatterns": [],
    "explanation": "Jadval nomi department3 ga muvaffaqiyatli o'zgartirildi.",
    "task": "`department2` jadvalining nomini `department3` ga o'zgartiring (`ALTER TABLE ... RENAME TO ...`).",
    "expectedSchema": {
      "tableName": "department2",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "mod_status",
          "type": "varchar(50)",
          "isNotNull": false
        }
      ]
    }
  },
  {
    "id": 72,
    "sector": 5,
    "difficulty": "Floor 5 • Easy",
    "source": "T03 Task 1 Step 2 • Ustun Nomini O'zgartirish",
    "title": "Ustun Nomini Qisqartirish (RENAME COLUMN)",
    "story": "Seminar 3 ning navbatdagi qadami: `department3` jadvalidagi `location` column nomini qisqartirib `loc` deb o'zgartirish kerak.",
    "taskUz": "`department3` jadvalining `location` column nomini `loc` ga o'zgartiring.",
    "starterCode": "",
    "hint": "`ALTER TABLE department3 RENAME COLUMN location TO loc` sintaksisini qo'llang.",
    "solutions": [
      "ALTER TABLE department3 RENAME COLUMN location TO loc",
      "ALTER TABLE department3\nRENAME COLUMN location TO loc"
    ],
    "requiredPatterns": [],
    "explanation": "location column nomlanishi loc ga o'zgartirildi.",
    "task": "`department3` jadvalining `location` column nomini `loc` ga o'zgartiring.",
    "expectedSchema": {
      "tableName": "department3",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "mod_status",
          "type": "varchar(50)",
          "isNotNull": false
        }
      ]
    }
  },
  {
    "id": 73,
    "sector": 5,
    "difficulty": "Floor 5 • Easy",
    "source": "T03 Task 1 Step 2 • Department3 ni O'chirish",
    "title": "Sinov Jadvalini O'chirib Tashlash (DROP)",
    "story": "Seminar 3 ning 1-topshiriq sinovi tugadi: `department3` jadvalini butunlay o'chirib tashlash lozim.",
    "taskUz": "`department3` jadvalini bazadan butunlay o'chiring.",
    "starterCode": "",
    "hint": "`DROP TABLE department3` yoki `DROP TABLE IF EXISTS department3` .",
    "solutions": [
      "DROP TABLE department3",
      "DROP TABLE IF EXISTS department3"
    ],
    "requiredPatterns": [],
    "explanation": "department3 jadvali xavfsiz o'chirildi.",
    "task": "`department3` jadvalini bazadan butunlay o'chiring.",
    "expectedSchema": {
      "tableName": "ddl_entity",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true
        }
      ]
    }
  },
  {
    "id": 74,
    "sector": 5,
    "difficulty": "Floor 5 • Intermediate",
    "source": "L03 Slide 24 • Standart Sanalar Kombinatsiyasi",
    "title": "Standart Qiymatli Hujjatlar Reyestri",
    "story": "Kompaniya hujjatlar jadvalida har bir faylga yuklangan vaqt avtomatik yozilib, ko'rilganlik holati `false` bo'lishi kerak.",
    "taskUz": "Create a table named `doc_archive` with columns: `id` (integer PRIMARY KEY), `doc_name` (varchar(100) NOT NULL), `is_archived` (boolean NOT NULL DEFAULT false) and `archived_at` (timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP).",
    "starterCode": "",
    "hint": "`is_archived boolean NOT NULL DEFAULT false` and `archived_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`.",
    "solutions": [
      "CREATE TABLE doc_archive (id integer PRIMARY KEY, doc_name varchar(100) NOT NULL, is_archived boolean NOT NULL DEFAULT false, archived_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP)",
      "CREATE TABLE doc_archive (\n  id integer PRIMARY KEY,\n  doc_name varchar(100) NOT NULL,\n  is_archived boolean NOT NULL DEFAULT false,\n  archived_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP\n)"
    ],
    "requiredPatterns": [],
    "explanation": "doc_archive jadvali ikkita standart qiymat bilan birga yaratildi.",
    "task": "Create a table named `doc_archive` with columns: `id` (integer PRIMARY KEY), `doc_name` (varchar(100) NOT NULL), `is_archived` (boolean NOT NULL DEFAULT false) and `archived_at` (timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP).",
    "expectedSchema": {
      "tableName": "doc_archive",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true,
          "isNotNull": true,
          "isUnique": false
        },
        {
          "name": "doc_name",
          "type": "varchar(100)",
          "isPK": false,
          "isNotNull": true,
          "isUnique": false
        },
        {
          "name": "is_archived",
          "type": "boolean",
          "isPK": false,
          "isNotNull": true,
          "isUnique": false
        },
        {
          "name": "archived_at",
          "type": "timestamp",
          "isPK": false,
          "isNotNull": true,
          "isUnique": false
        }
      ]
    }
  },
  {
    "id": 75,
    "sector": 5,
    "difficulty": "Floor 5 • Master Architect",
    "source": "T03 Task 1 Complete Employee • 5-Qavat Yakuni",
    "title": "5-Qavat Bossi: Xodimlar Jadvalining Barcha Standart Maydonlari",
    "story": "5-qavatning eng mas'uliyatli sinovi! Seminar 3 dagi `employee` jadvalining barcha standart qiymatli maydonlarini e'lon qiling: Identity ID, majburiy ism-familiya, unikal email, `active boolean NOT NULL DEFAULT true`, `hired_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP` and `department_id integer`.",
    "taskUz": "Create a table named `employee`: `id` (integer GENERATED ALWAYS AS IDENTITY), `first_name` (varchar(25) NOT NULL), `last_name` (varchar(25) NOT NULL), `dob` (date), `email` (varchar(100) NOT NULL), `phone` (varchar(20)), `salary` (numeric(10,2)), `active` (boolean NOT NULL DEFAULT true), `hired_at` (timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP), `department_id` (integer), `CONSTRAINT pk_employee_id PRIMARY KEY (id)` and `CONSTRAINT uq_employee_email UNIQUE (email)` bilan.\n\n📋 **Kutilayotgan Relyatsion Sxema / DDL:**\n• Jadval: **employee**\n• Ustunlar: `id` [PK] (integer), `first_name` [NOT NULL] (varchar(25)), `last_name` [NOT NULL] (varchar(25)), `dob` (date), `email` [NOT NULL] (varchar(100)), `phone` (varchar(20)), `salary` (numeric(10,2)), `active` [NOT NULL] (boolean), `hired_at` [NOT NULL] (timestamp), `department_id` (integer)\n• Cheklovlar: `pk_employee_id`, `uq_employee_email`",
    "starterCode": "",
    "hint": "Barcha 10 ta ustunni and jadval oxirida `pk_employee_id` and `uq_employee_email` cheklovlarini to'liq yozing.",
    "solutions": [
      "CREATE TABLE employee (id integer GENERATED ALWAYS AS IDENTITY, first_name varchar(25) NOT NULL, last_name varchar(25) NOT NULL, dob date, email varchar(100) NOT NULL, phone varchar(20), salary numeric(10,2), active boolean NOT NULL DEFAULT true, hired_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, department_id integer, CONSTRAINT pk_employee_id PRIMARY KEY (id), CONSTRAINT uq_employee_email UNIQUE (email))",
      "CREATE TABLE employee (\n  id integer GENERATED ALWAYS AS IDENTITY,\n  first_name varchar(25) NOT NULL,\n  last_name varchar(25) NOT NULL,\n  dob date,\n  email varchar(100) NOT NULL,\n  phone varchar(20),\n  salary numeric(10,2),\n  active boolean NOT NULL DEFAULT true,\n  hired_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,\n  department_id integer,\n  CONSTRAINT pk_employee_id PRIMARY KEY (id),\n  CONSTRAINT uq_employee_email UNIQUE (email)\n)"
    ],
    "requiredPatterns": [],
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
          "name": "dob",
          "type": "date"
        },
        {
          "name": "email",
          "type": "varchar(100)",
          "isNotNull": true,
          "isUQ": true
        },
        {
          "name": "phone",
          "type": "varchar(20)"
        },
        {
          "name": "salary",
          "type": "numeric(10,2)"
        },
        {
          "name": "active",
          "type": "boolean",
          "isNotNull": true
        },
        {
          "name": "hired_at",
          "type": "timestamp",
          "isNotNull": true
        },
        {
          "name": "department_id",
          "type": "integer"
        }
      ],
      "requiredConstraints": [
        "pk_employee_id",
        "uq_employee_email"
      ]
    },
    "explanation": "5-Qavat Bossi tasdiqlandi! Seminar 3 dagi employee jadvali to'liq parametrlar bilan shakllantirildi.",
    "task": "Create a table named `employee`: `id` (integer GENERATED ALWAYS AS IDENTITY), `first_name` (varchar(25) NOT NULL), `last_name` (varchar(25) NOT NULL), `dob` (date), `email` (varchar(100) NOT NULL), `phone` (varchar(20)), `salary` (numeric(10,2)), `active` (boolean NOT NULL DEFAULT true), `hired_at` (timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP), `department_id` (integer), `CONSTRAINT pk_employee_id PRIMARY KEY (id)` and `CONSTRAINT uq_employee_email UNIQUE (email)` bilan."
  },
  {
    "id": 76,
    "sector": 6,
    "difficulty": "Floor 6 • Easy",
    "source": "L03 Slide 25 • Ustun Darajasidagi References",
    "title": "Ustun Darajasida Foreign Key (REFERENCES)",
    "story": "Filialdagi xodim qaysi bo'limda ishlashini ko'rsatish uchun uning `dept_id` column `department(id)` ga bog'lanishi shart.",
    "taskUz": "Create a table named `staff_dept` with columns: `id` (integer PRIMARY KEY), `full_name` (varchar(50)) and ustun darajasida `department(id)` ga bog'langan `dept_id` (integer REFERENCES department(id)).",
    "starterCode": "",
    "hint": "`dept_id integer REFERENCES department(id)` .",
    "solutions": [
      "CREATE TABLE staff_dept (id integer PRIMARY KEY, full_name varchar(50), dept_id integer REFERENCES department(id))",
      "CREATE TABLE staff_dept (\n  id integer PRIMARY KEY,\n  full_name varchar(50),\n  dept_id integer REFERENCES department(id)\n)"
    ],
    "requiredPatterns": [],
    "explanation": "staff_dept jadvalida ustun darajasidagi REFERENCES kaliti o'rnatildi.",
    "task": "Create a table named `staff_dept` with columns: `id` (integer PRIMARY KEY), `full_name` (varchar(50)) and ustun darajasida `department(id)` ga bog'langan `dept_id` (integer REFERENCES department(id)).",
    "expectedSchema": {
      "tableName": "staff_dept",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true,
          "isNotNull": true,
          "isUnique": false
        },
        {
          "name": "full_name",
          "type": "varchar(50)",
          "isPK": false,
          "isNotNull": false,
          "isUnique": false
        },
        {
          "name": "dept_id",
          "type": "integer",
          "isPK": false,
          "isNotNull": false,
          "isUnique": false
        }
      ]
    }
  },
  {
    "id": 77,
    "sector": 6,
    "difficulty": "Floor 6 • Easy",
    "source": "T03 Task 2 Step 4 • Nomlangan FOREIGN KEY Cheklovi",
    "title": "Nomlangan Foreign Key (Named Foreign Key)",
    "story": "Seminar 3 qoidasi: barcha tashqi kalitlar rasmiy nomga (`fk_bola_ota_ustun`) ega bo'lishi lozim.",
    "taskUz": "Create a table named `emp_assignment`: `id` (integer PRIMARY KEY), `department_id` (integer NOT NULL) and named `CONSTRAINT fk_emp_dept FOREIGN KEY (department_id) REFERENCES department(id)` with constraint.",
    "starterCode": "",
    "hint": "`CONSTRAINT fk_emp_dept FOREIGN KEY (department_id) REFERENCES department(id)` yozing.",
    "solutions": [
      "CREATE TABLE emp_assignment (id integer PRIMARY KEY, department_id integer NOT NULL, CONSTRAINT fk_emp_dept FOREIGN KEY (department_id) REFERENCES department(id))",
      "CREATE TABLE emp_assignment (\n  id integer PRIMARY KEY,\n  department_id integer NOT NULL,\n  CONSTRAINT fk_emp_dept FOREIGN KEY (department_id) REFERENCES department(id)\n)"
    ],
    "requiredPatterns": [],
    "explanation": "fk_emp_dept named tashqi kaliti yaratildi.",
    "task": "Create a table named `emp_assignment`: `id` (integer PRIMARY KEY), `department_id` (integer NOT NULL) and named `CONSTRAINT fk_emp_dept FOREIGN KEY (department_id) REFERENCES department(id)` with constraint.",
    "expectedSchema": {
      "tableName": "emp_assignment",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true,
          "isNotNull": true,
          "isUnique": false
        },
        {
          "name": "department_id",
          "type": "integer",
          "isPK": false,
          "isNotNull": true,
          "isUnique": false
        }
      ]
    }
  },
  {
    "id": 78,
    "sector": 6,
    "difficulty": "Floor 6 • Easy",
    "source": "T03 Task 4 • Bo'lim Telefonining Tashqi Kaliti",
    "title": "Bo'lim Telefonini Bog'lovchi Foreign Key",
    "story": "Seminar 3 ning 4-topshirig'i: `department_phone` jadvalidagi `dept_id` column `department(id)` ota table bog'lanishi shart.",
    "taskUz": "Create a table named `dept_phone_rel`: `dept_id` (integer), `phone` (varchar(20)), primary key `CONSTRAINT pk_dept_phone PRIMARY KEY (dept_id, phone)` and foreign key `CONSTRAINT fk_phone_dept FOREIGN KEY (dept_id) REFERENCES department(id)` bilan.",
    "starterCode": "",
    "hint": "Ikkala cheklovni ketma-ket yozing: avval PRIMARY KEY, so'ng FOREIGN KEY.",
    "solutions": [
      "CREATE TABLE dept_phone_rel (dept_id integer, phone varchar(20), CONSTRAINT pk_dept_phone PRIMARY KEY (dept_id, phone), CONSTRAINT fk_phone_dept FOREIGN KEY (dept_id) REFERENCES department(id))",
      "CREATE TABLE dept_phone_rel (\n  dept_id integer,\n  phone varchar(20),\n  CONSTRAINT pk_dept_phone PRIMARY KEY (dept_id, phone),\n  CONSTRAINT fk_phone_dept FOREIGN KEY (dept_id) REFERENCES department(id)\n)"
    ],
    "requiredPatterns": [],
    "explanation": "dept_phone_rel jadvalida kompozit PK and FK birgalikda o'rnatildi.",
    "task": "Create a table named `dept_phone_rel`: `dept_id` (integer), `phone` (varchar(20)), primary key `CONSTRAINT pk_dept_phone PRIMARY KEY (dept_id, phone)` and foreign key `CONSTRAINT fk_phone_dept FOREIGN KEY (dept_id) REFERENCES department(id)` bilan.",
    "expectedSchema": {
      "tableName": "dept_phone_rel",
      "columns": [
        {
          "name": "dept_id",
          "type": "integer",
          "isPK": false,
          "isNotNull": false,
          "isUnique": false
        },
        {
          "name": "phone",
          "type": "varchar(20)",
          "isPK": false,
          "isNotNull": false,
          "isUnique": false
        }
      ]
    }
  },
  {
    "id": 79,
    "sector": 6,
    "difficulty": "Floor 6 • Intermediate",
    "source": "L03 Slide 26 • Rekursiv / O'z-o'ziga Bog'langan FK (Self-referencing)",
    "title": "Rahbar (Supervisor / Manager) Foreign Keyi",
    "story": "Xodimning boshlig'i (supervisor) ham xodimlar jadvalidagi boshqa bir xodimdir. Bu o'z-o'ziga bog'lanish (self-referencing FK) deyiladi.",
    "taskUz": "Create a table named `staff_hierarchy`: `emp_id` (integer PRIMARY KEY), `full_name` (varchar(50)), `manager_id` (integer) and `CONSTRAINT fk_staff_manager FOREIGN KEY (manager_id) REFERENCES staff_hierarchy(emp_id)` bilan.",
    "starterCode": "",
    "hint": "`FOREIGN KEY (manager_id) REFERENCES staff_hierarchy(emp_id)` deb o'z jadvalining birlamchi kalitiga yo'naltiring.",
    "solutions": [
      "CREATE TABLE staff_hierarchy (emp_id integer PRIMARY KEY, full_name varchar(50), manager_id integer, CONSTRAINT fk_staff_manager FOREIGN KEY (manager_id) REFERENCES staff_hierarchy(emp_id))",
      "CREATE TABLE staff_hierarchy (\n  emp_id integer PRIMARY KEY,\n  full_name varchar(50),\n  manager_id integer,\n  CONSTRAINT fk_staff_manager FOREIGN KEY (manager_id) REFERENCES staff_hierarchy(emp_id)\n)"
    ],
    "requiredPatterns": [],
    "explanation": "O'z-o'ziga murojaat qiluvchi (self-referencing) iyerarxik tashqi kalit yaratildi.",
    "task": "Create a table named `staff_hierarchy`: `emp_id` (integer PRIMARY KEY), `full_name` (varchar(50)), `manager_id` (integer) and `CONSTRAINT fk_staff_manager FOREIGN KEY (manager_id) REFERENCES staff_hierarchy(emp_id)` bilan.",
    "expectedSchema": {
      "tableName": "staff_hierarchy",
      "columns": [
        {
          "name": "emp_id",
          "type": "integer",
          "isPK": true,
          "isNotNull": true,
          "isUnique": false
        },
        {
          "name": "full_name",
          "type": "varchar(50)",
          "isPK": false,
          "isNotNull": false,
          "isUnique": false
        },
        {
          "name": "manager_id",
          "type": "integer",
          "isPK": false,
          "isNotNull": false,
          "isUnique": false
        }
      ]
    }
  },
  {
    "id": 80,
    "sector": 6,
    "difficulty": "Floor 6 • Intermediate",
    "source": "T03 Task 4 Child • Farzandni Xodimga Bog'lash",
    "title": "Farzand Jadvalini Ota-onaga Bog'lash",
    "story": "Seminar 3 ning 4-topshirig'i: `child` jadvalidagi `parent_passport_no` column `employee(passport_no)` ga bog'lanishi shart.",
    "taskUz": "Create a table named `child_record`: `parent_passport_no` (varchar(20)), `child_name` (varchar(50)), `CONSTRAINT pk_child_rec PRIMARY KEY (parent_passport_no, child_name)` and `CONSTRAINT fk_child_parent FOREIGN KEY (parent_passport_no) REFERENCES person(passport_no)` bilan.",
    "starterCode": "",
    "hint": "`CONSTRAINT fk_child_parent FOREIGN KEY (parent_passport_no) REFERENCES person(passport_no)` yozing.",
    "solutions": [
      "CREATE TABLE child_record (parent_passport_no varchar(20), child_name varchar(50), CONSTRAINT pk_child_rec PRIMARY KEY (parent_passport_no, child_name), CONSTRAINT fk_child_parent FOREIGN KEY (parent_passport_no) REFERENCES person(passport_no))",
      "CREATE TABLE child_record (\n  parent_passport_no varchar(20),\n  child_name varchar(50),\n  CONSTRAINT pk_child_rec PRIMARY KEY (parent_passport_no, child_name),\n  CONSTRAINT fk_child_parent FOREIGN KEY (parent_passport_no) REFERENCES person(passport_no)\n)"
    ],
    "requiredPatterns": [],
    "explanation": "child_record tashqi kaliti person jadvali bilan mustahkamlandi.",
    "task": "Create a table named `child_record`: `parent_passport_no` (varchar(20)), `child_name` (varchar(50)), `CONSTRAINT pk_child_rec PRIMARY KEY (parent_passport_no, child_name)` and `CONSTRAINT fk_child_parent FOREIGN KEY (parent_passport_no) REFERENCES person(passport_no)` bilan.",
    "expectedSchema": {
      "tableName": "child_record",
      "columns": [
        {
          "name": "parent_passport_no",
          "type": "varchar(20)",
          "isPK": false,
          "isNotNull": false,
          "isUnique": false
        },
        {
          "name": "child_name",
          "type": "varchar(50)",
          "isPK": false,
          "isNotNull": false,
          "isUnique": false
        }
      ]
    }
  },
  {
    "id": 81,
    "sector": 6,
    "difficulty": "Floor 6 • Intermediate",
    "source": "L03 Slide 27 • Buyurtmani Mijozga Bog'lash",
    "title": "Buyurtmalar va Mijozlar Bog'liqligi",
    "story": "Har bir buyurtma mavjud mijozga tegishli bo'lishi shart (`client_id` -> `client(client_id)`).",
    "taskUz": "Create a table named `sales_order`: `order_id` (integer PRIMARY KEY), `client_id` (integer NOT NULL), `total` (numeric(10,2)) and `CONSTRAINT fk_order_client FOREIGN KEY (client_id) REFERENCES client(client_id)` bilan.",
    "starterCode": "",
    "hint": "`CONSTRAINT fk_order_client FOREIGN KEY (client_id) REFERENCES client(client_id)` dan foydalaning.",
    "solutions": [
      "CREATE TABLE sales_order (order_id integer PRIMARY KEY, client_id integer NOT NULL, total numeric(10,2), CONSTRAINT fk_order_client FOREIGN KEY (client_id) REFERENCES client(client_id))",
      "CREATE TABLE sales_order (\n  order_id integer PRIMARY KEY,\n  client_id integer NOT NULL,\n  total numeric(10,2),\n  CONSTRAINT fk_order_client FOREIGN KEY (client_id) REFERENCES client(client_id)\n)"
    ],
    "requiredPatterns": [],
    "explanation": "sales_order tashqi kaliti mijozlar table ulandi.",
    "task": "Create a table named `sales_order`: `order_id` (integer PRIMARY KEY), `client_id` (integer NOT NULL), `total` (numeric(10,2)) and `CONSTRAINT fk_order_client FOREIGN KEY (client_id) REFERENCES client(client_id)` bilan.",
    "expectedSchema": {
      "tableName": "sales_order",
      "columns": [
        {
          "name": "order_id",
          "type": "integer",
          "isPK": true,
          "isNotNull": true,
          "isUnique": false
        },
        {
          "name": "client_id",
          "type": "integer",
          "isPK": false,
          "isNotNull": true,
          "isUnique": false
        },
        {
          "name": "total",
          "type": "numeric(10",
          "isPK": false,
          "isNotNull": false,
          "isUnique": false
        }
      ]
    }
  },
  {
    "id": 82,
    "sector": 6,
    "difficulty": "Floor 6 • Intermediate",
    "source": "L03 Slide 27 • Mahsulot Turini Kategoriyaga Bog'lash",
    "title": "Mahsulotlar va Kategoriyalar Aloqasi",
    "story": "Mahsulotlar katalogida har bir tovar o'z toifasiga (`category_id`) ega bo'lishi kerak.",
    "taskUz": "Create a table named `category` with columns: `cat_id` (integer PRIMARY KEY) and `cat_name` (varchar(50) NOT NULL).",
    "starterCode": "",
    "hint": "`CREATE TABLE category (cat_id integer PRIMARY KEY, cat_name varchar(50) NOT NULL)` yozing.",
    "solutions": [
      "CREATE TABLE category (cat_id integer PRIMARY KEY, cat_name varchar(50) NOT NULL)",
      "CREATE TABLE category (\n  cat_id integer PRIMARY KEY,\n  cat_name varchar(50) NOT NULL\n)"
    ],
    "requiredPatterns": [],
    "explanation": "Ota jadval sifatida category yaratildi.",
    "task": "Create a table named `category` with columns: `cat_id` (integer PRIMARY KEY) and `cat_name` (varchar(50) NOT NULL).",
    "expectedSchema": {
      "tableName": "category",
      "columns": [
        {
          "name": "cat_id",
          "type": "integer",
          "isPK": true,
          "isNotNull": true,
          "isUnique": false
        },
        {
          "name": "cat_name",
          "type": "varchar(50)",
          "isPK": false,
          "isNotNull": true,
          "isUnique": false
        }
      ]
    }
  },
  {
    "id": 83,
    "sector": 6,
    "difficulty": "Floor 6 • Intermediate",
    "source": "L03 Slide 27 • Tovar-Kategoriya FK",
    "title": "Tovarni Kategoriyaga Foreign Key Bilan Bog'lash",
    "story": "Oldingi bosqichda yaratilgan `category` table `catalog_item` tovarlarini tashqi kalit orqali bog'lash kerak.",
    "taskUz": "Create a table named `catalog_item`: `item_id` (integer PRIMARY KEY), `title` (varchar(80)), `cat_id` (integer NOT NULL) and `CONSTRAINT fk_item_category FOREIGN KEY (cat_id) REFERENCES category(cat_id)` bilan.",
    "starterCode": "",
    "hint": "`CONSTRAINT fk_item_category FOREIGN KEY (cat_id) REFERENCES category(cat_id)` .",
    "solutions": [
      "CREATE TABLE catalog_item (item_id integer PRIMARY KEY, title varchar(80), cat_id integer NOT NULL, CONSTRAINT fk_item_category FOREIGN KEY (cat_id) REFERENCES category(cat_id))",
      "CREATE TABLE catalog_item (\n  item_id integer PRIMARY KEY,\n  title varchar(80),\n  cat_id integer NOT NULL,\n  CONSTRAINT fk_item_category FOREIGN KEY (cat_id) REFERENCES category(cat_id)\n)"
    ],
    "requiredPatterns": [],
    "explanation": "catalog_item jadvali category ga bog'landi.",
    "task": "Create a table named `catalog_item`: `item_id` (integer PRIMARY KEY), `title` (varchar(80)), `cat_id` (integer NOT NULL) and `CONSTRAINT fk_item_category FOREIGN KEY (cat_id) REFERENCES category(cat_id)` bilan.",
    "expectedSchema": {
      "tableName": "catalog_item",
      "columns": [
        {
          "name": "item_id",
          "type": "integer",
          "isPK": true,
          "isNotNull": true,
          "isUnique": false
        },
        {
          "name": "title",
          "type": "varchar(80)",
          "isPK": false,
          "isNotNull": false,
          "isUnique": false
        },
        {
          "name": "cat_id",
          "type": "integer",
          "isPK": false,
          "isNotNull": true,
          "isUnique": false
        }
      ]
    }
  },
  {
    "id": 84,
    "sector": 6,
    "difficulty": "Floor 6 • Intermediate",
    "source": "T03 Task 4 Project • Loyiha va Departament",
    "title": "Loyihani Boshqaruvchi Bo'limga Bog'lash",
    "story": "Kompaniya loyihasini qaysi bo'lim moliyalashtirayotganini aniqlash uchun `dept_id` tashqi kaliti kerak.",
    "taskUz": "Create a table named `project_work`: `proj_id` (integer PRIMARY KEY), `dept_id` (integer NOT NULL) and `CONSTRAINT fk_proj_dept FOREIGN KEY (dept_id) REFERENCES department(id)` bilan.",
    "starterCode": "",
    "hint": "`CONSTRAINT fk_proj_dept FOREIGN KEY (dept_id) REFERENCES department(id)` yozing.",
    "solutions": [
      "CREATE TABLE project_work (proj_id integer PRIMARY KEY, dept_id integer NOT NULL, CONSTRAINT fk_proj_dept FOREIGN KEY (dept_id) REFERENCES department(id))",
      "CREATE TABLE project_work (\n  proj_id integer PRIMARY KEY,\n  dept_id integer NOT NULL,\n  CONSTRAINT fk_proj_dept FOREIGN KEY (dept_id) REFERENCES department(id)\n)"
    ],
    "requiredPatterns": [],
    "explanation": "project_work bo'limlar table ulandi.",
    "task": "Create a table named `project_work`: `proj_id` (integer PRIMARY KEY), `dept_id` (integer NOT NULL) and `CONSTRAINT fk_proj_dept FOREIGN KEY (dept_id) REFERENCES department(id)` bilan.",
    "expectedSchema": {
      "tableName": "project_work",
      "columns": [
        {
          "name": "proj_id",
          "type": "integer",
          "isPK": true,
          "isNotNull": true,
          "isUnique": false
        },
        {
          "name": "dept_id",
          "type": "integer",
          "isPK": false,
          "isNotNull": true,
          "isUnique": false
        }
      ]
    }
  },
  {
    "id": 85,
    "sector": 6,
    "difficulty": "Floor 6 • Intermediate",
    "source": "L03 Slide 28 • Ikkita Tashqi Kalitli M:N Bog'lovchi",
    "title": "Xodim va Loyiha Bog'lovchi Jadvali (2 ta FK)",
    "story": "Xodim bir nechta loyihada, loyiha bir nechta xodimga ega bo'lishi mumkin. Bog'lovchi jadvalda ikkita alohida tashqi kalit kerak.",
    "taskUz": "Create a table named `emp_proj`: `emp_id` (integer), `proj_id` (integer), `hours` (numeric(5,2)), `CONSTRAINT pk_emp_proj PRIMARY KEY (emp_id, proj_id)`, `CONSTRAINT fk_ep_emp FOREIGN KEY (emp_id) REFERENCES employee(id)`, `CONSTRAINT fk_ep_proj FOREIGN KEY (proj_id) REFERENCES project(id)` bilan.",
    "starterCode": "",
    "hint": "Ikkita `CONSTRAINT ... FOREIGN KEY ... REFERENCES ...` e'lon qiling.",
    "solutions": [
      "CREATE TABLE emp_proj (emp_id integer, proj_id integer, hours numeric(5,2), CONSTRAINT pk_emp_proj PRIMARY KEY (emp_id, proj_id), CONSTRAINT fk_ep_emp FOREIGN KEY (emp_id) REFERENCES employee(id), CONSTRAINT fk_ep_proj FOREIGN KEY (proj_id) REFERENCES project(id))",
      "CREATE TABLE emp_proj (\n  emp_id integer,\n  proj_id integer,\n  hours numeric(5,2),\n  CONSTRAINT pk_emp_proj PRIMARY KEY (emp_id, proj_id),\n  CONSTRAINT fk_ep_emp FOREIGN KEY (emp_id) REFERENCES employee(id),\n  CONSTRAINT fk_ep_proj FOREIGN KEY (proj_id) REFERENCES project(id)\n)"
    ],
    "requiredPatterns": [],
    "explanation": "emp_proj ko'pga-ko'p bog'lovchi jadvalida ikkita mustaqil FK o'rnatildi.",
    "task": "Create a table named `emp_proj`: `emp_id` (integer), `proj_id` (integer), `hours` (numeric(5,2)), `CONSTRAINT pk_emp_proj PRIMARY KEY (emp_id, proj_id)`, `CONSTRAINT fk_ep_emp FOREIGN KEY (emp_id) REFERENCES employee(id)`, `CONSTRAINT fk_ep_proj FOREIGN KEY (proj_id) REFERENCES project(id)` bilan.",
    "expectedSchema": {
      "tableName": "emp_proj",
      "columns": [
        {
          "name": "emp_id",
          "type": "integer",
          "isPK": false,
          "isNotNull": false,
          "isUnique": false
        },
        {
          "name": "proj_id",
          "type": "integer",
          "isPK": false,
          "isNotNull": false,
          "isUnique": false
        },
        {
          "name": "hours",
          "type": "numeric(5",
          "isPK": false,
          "isNotNull": false,
          "isUnique": false
        }
      ]
    }
  },
  {
    "id": 86,
    "sector": 6,
    "difficulty": "Floor 6 • Intermediate",
    "source": "T03 Task 5 • Tashqi Kalitli Xodimlar Jadvali",
    "title": "Xodimlar Jadvaliga Bo'lim FK ni Bog'lash",
    "story": "Seminar 3 ning 5-topshirig'i: `employee_v2` jadvali o'zining `department_id` column `department(id)` ga named cheklov orqali bog'lashi kerak.",
    "taskUz": "Create a table named `employee_v2`: `id` (integer PRIMARY KEY), `name` (varchar(50)), `dept_id` (integer NOT NULL) and `CONSTRAINT fk_emp2_dept FOREIGN KEY (dept_id) REFERENCES department(id)` bilan.",
    "starterCode": "",
    "hint": "`CONSTRAINT fk_emp2_dept FOREIGN KEY (dept_id) REFERENCES department(id)` yozing.",
    "solutions": [
      "CREATE TABLE employee_v2 (id integer PRIMARY KEY, name varchar(50), dept_id integer NOT NULL, CONSTRAINT fk_emp2_dept FOREIGN KEY (dept_id) REFERENCES department(id))",
      "CREATE TABLE employee_v2 (\n  id integer PRIMARY KEY,\n  name varchar(50),\n  dept_id integer NOT NULL,\n  CONSTRAINT fk_emp2_dept FOREIGN KEY (dept_id) REFERENCES department(id)\n)"
    ],
    "requiredPatterns": [],
    "explanation": "employee_v2 jadvali tashqi kalit bilan yaratildi.",
    "task": "Create a table named `employee_v2`: `id` (integer PRIMARY KEY), `name` (varchar(50)), `dept_id` (integer NOT NULL) and `CONSTRAINT fk_emp2_dept FOREIGN KEY (dept_id) REFERENCES department(id)` bilan.",
    "expectedSchema": {
      "tableName": "employee_v2",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true,
          "isNotNull": true,
          "isUnique": false
        },
        {
          "name": "name",
          "type": "varchar(50)",
          "isPK": false,
          "isNotNull": false,
          "isUnique": false
        },
        {
          "name": "dept_id",
          "type": "integer",
          "isPK": false,
          "isNotNull": true,
          "isUnique": false
        }
      ]
    }
  },
  {
    "id": 87,
    "sector": 6,
    "difficulty": "Floor 6 • Easy",
    "source": "L03 Slide 28 • Talaba-Fakultet Bog'liqligi",
    "title": "Talaba va Fakultet Bog'liqligi",
    "story": "Har bir talaba ma'lum bir fakultetga tegishli bo'lishi uchun tashqi kalit qo'yiladi.",
    "taskUz": "Create a table named `student_fac`: `stud_id` (integer PRIMARY KEY), `fac_id` (integer NOT NULL) and `CONSTRAINT fk_stud_fac FOREIGN KEY (fac_id) REFERENCES department(id)` bilan.",
    "starterCode": "",
    "hint": "`CONSTRAINT fk_stud_fac FOREIGN KEY (fac_id) REFERENCES department(id)` .",
    "solutions": [
      "CREATE TABLE student_fac (stud_id integer PRIMARY KEY, fac_id integer NOT NULL, CONSTRAINT fk_stud_fac FOREIGN KEY (fac_id) REFERENCES department(id))",
      "CREATE TABLE student_fac (\n  stud_id integer PRIMARY KEY,\n  fac_id integer NOT NULL,\n  CONSTRAINT fk_stud_fac FOREIGN KEY (fac_id) REFERENCES department(id)\n)"
    ],
    "requiredPatterns": [],
    "explanation": "fk_stud_fac tashqi kaliti bog'landi.",
    "task": "Create a table named `student_fac`: `stud_id` (integer PRIMARY KEY), `fac_id` (integer NOT NULL) and `CONSTRAINT fk_stud_fac FOREIGN KEY (fac_id) REFERENCES department(id)` bilan.",
    "expectedSchema": {
      "tableName": "student_fac",
      "columns": [
        {
          "name": "stud_id",
          "type": "integer",
          "isPK": true,
          "isNotNull": true,
          "isUnique": false
        },
        {
          "name": "fac_id",
          "type": "integer",
          "isPK": false,
          "isNotNull": true,
          "isUnique": false
        }
      ]
    }
  },
  {
    "id": 88,
    "sector": 6,
    "difficulty": "Floor 6 • Intermediate",
    "source": "L03 Slide 28 • Shaharlar va Davlatlar Bog'liqligi",
    "title": "Shahar va Davlatlar Relyatsion Aloqasi",
    "story": "Geografik ma'lumotlar bazasida shahar o'zining davlat kodiga (`country_code`) murojaat qiladi.",
    "taskUz": "Create a table named `city`: `city_id` (integer PRIMARY KEY), `city_name` (varchar(60)), `country_id` (integer NOT NULL) and `CONSTRAINT fk_city_country FOREIGN KEY (country_id) REFERENCES region(id)` bilan.",
    "starterCode": "",
    "hint": "`CONSTRAINT fk_city_country FOREIGN KEY (country_id) REFERENCES region(id)` yozing.",
    "solutions": [
      "CREATE TABLE city (city_id integer PRIMARY KEY, city_name varchar(60), country_id integer NOT NULL, CONSTRAINT fk_city_country FOREIGN KEY (country_id) REFERENCES region(id))",
      "CREATE TABLE city (\n  city_id integer PRIMARY KEY,\n  city_name varchar(60),\n  country_id integer NOT NULL,\n  CONSTRAINT fk_city_country FOREIGN KEY (country_id) REFERENCES region(id)\n)"
    ],
    "requiredPatterns": [],
    "explanation": "city jadvalida region ga tashqi kalit ulandi.",
    "task": "Create a table named `city`: `city_id` (integer PRIMARY KEY), `city_name` (varchar(60)), `country_id` (integer NOT NULL) and `CONSTRAINT fk_city_country FOREIGN KEY (country_id) REFERENCES region(id)` bilan.",
    "expectedSchema": {
      "tableName": "city",
      "columns": [
        {
          "name": "city_id",
          "type": "integer",
          "isPK": true,
          "isNotNull": true,
          "isUnique": false
        },
        {
          "name": "city_name",
          "type": "varchar(60)",
          "isPK": false,
          "isNotNull": false,
          "isUnique": false
        },
        {
          "name": "country_id",
          "type": "integer",
          "isPK": false,
          "isNotNull": true,
          "isUnique": false
        }
      ]
    }
  },
  {
    "id": 89,
    "sector": 6,
    "difficulty": "Floor 6 • Intermediate",
    "source": "T03 Task 4 • Vazifalar va Xodimlar FK",
    "title": "Vazifalar (Task) va Xodimlar Aloqasi",
    "story": "Loyiha vazifasi bajaruvchi xodimga biriktiriladi (`assigned_to` -> `employee(id)`).",
    "taskUz": "Create a table named `project_task`: `task_id` (integer PRIMARY KEY), `task_name` (varchar(80)), `assigned_to` (integer) and `CONSTRAINT fk_task_employee FOREIGN KEY (assigned_to) REFERENCES employee(id)` bilan.",
    "starterCode": "",
    "hint": "`CONSTRAINT fk_task_employee FOREIGN KEY (assigned_to) REFERENCES employee(id)` .",
    "solutions": [
      "CREATE TABLE project_task (task_id integer PRIMARY KEY, task_name varchar(80), assigned_to integer, CONSTRAINT fk_task_employee FOREIGN KEY (assigned_to) REFERENCES employee(id))",
      "CREATE TABLE project_task (\n  task_id integer PRIMARY KEY,\n  task_name varchar(80),\n  assigned_to integer,\n  CONSTRAINT fk_task_employee FOREIGN KEY (assigned_to) REFERENCES employee(id)\n)"
    ],
    "requiredPatterns": [],
    "explanation": "project_task vazifalar jadvali xodimga bog'landi.",
    "task": "Create a table named `project_task`: `task_id` (integer PRIMARY KEY), `task_name` (varchar(80)), `assigned_to` (integer) and `CONSTRAINT fk_task_employee FOREIGN KEY (assigned_to) REFERENCES employee(id)` bilan.",
    "expectedSchema": {
      "tableName": "project_task",
      "columns": [
        {
          "name": "task_id",
          "type": "integer",
          "isPK": true,
          "isNotNull": true,
          "isUnique": false
        },
        {
          "name": "task_name",
          "type": "varchar(80)",
          "isPK": false,
          "isNotNull": false,
          "isUnique": false
        },
        {
          "name": "assigned_to",
          "type": "integer",
          "isPK": false,
          "isNotNull": false,
          "isUnique": false
        }
      ]
    }
  },
  {
    "id": 90,
    "sector": 6,
    "difficulty": "Floor 6 • Master Architect",
    "source": "T03 Task 5 Setup Complete • 6-Qavat Yakuni",
    "title": "6-Qavat Bossi: Bo'lim va Xodim Bog'liqlik Karkasi",
    "story": "6-qavatning bosh topshirig'i! Seminar 3 ning to'liq reliesion ota-bola aloqasini quring: `team` jadvalini yarating, uning `department_id` maydoni `department(id)` ota table named `CONSTRAINT fk_team_department FOREIGN KEY (department_id) REFERENCES department(id)` cheklovi orqali mustahkam bog'lansin.",
    "taskUz": "Create a table named `team`: `team_id` (integer GENERATED ALWAYS AS IDENTITY), `team_name` (varchar(50) NOT NULL), `department_id` (integer NOT NULL), `CONSTRAINT pk_team_id PRIMARY KEY (team_id)` and `CONSTRAINT fk_team_department FOREIGN KEY (department_id) REFERENCES department(id)` bilan.\n\n📋 **Kutilayotgan Relyatsion Sxema / DDL:**\n• Jadval: **team**\n• Ustunlar: `team_id` [PK] (integer), `team_name` [NOT NULL] (varchar(50)), `department_id` [NOT NULL] (integer)\n• Cheklovlar: `pk_team_id`, `fk_team_department`",
    "starterCode": "",
    "hint": "Avval `CONSTRAINT pk_team_id PRIMARY KEY (team_id)`, so'ng `CONSTRAINT fk_team_department FOREIGN KEY (department_id) REFERENCES department(id)` yozing.",
    "solutions": [
      "CREATE TABLE team (team_id integer GENERATED ALWAYS AS IDENTITY, team_name varchar(50) NOT NULL, department_id integer NOT NULL, CONSTRAINT pk_team_id PRIMARY KEY (team_id), CONSTRAINT fk_team_department FOREIGN KEY (department_id) REFERENCES department(id))",
      "CREATE TABLE team (\n  team_id integer GENERATED ALWAYS AS IDENTITY,\n  team_name varchar(50) NOT NULL,\n  department_id integer NOT NULL,\n  CONSTRAINT pk_team_id PRIMARY KEY (team_id),\n  CONSTRAINT fk_team_department FOREIGN KEY (department_id) REFERENCES department(id)\n)"
    ],
    "requiredPatterns": [],
    "expectedSchema": {
      "tableName": "team",
      "columns": [
        {
          "name": "team_id",
          "type": "integer",
          "isPK": true,
          "hasIdentity": true
        },
        {
          "name": "team_name",
          "type": "varchar(50)",
          "isNotNull": true
        },
        {
          "name": "department_id",
          "type": "integer",
          "isNotNull": true
        }
      ],
      "requiredConstraints": [
        "pk_team_id",
        "fk_team_department"
      ]
    },
    "explanation": "6-Qavat Bossi tasdiqlandi! Relyatsion ota-bola cheklovi muvaffaqiyatli qurildi.",
    "task": "Create a table named `team`: `team_id` (integer GENERATED ALWAYS AS IDENTITY), `team_name` (varchar(50) NOT NULL), `department_id` (integer NOT NULL), `CONSTRAINT pk_team_id PRIMARY KEY (team_id)` and `CONSTRAINT fk_team_department FOREIGN KEY (department_id) REFERENCES department(id)` bilan."
  },
  {
    "id": 91,
    "sector": 7,
    "difficulty": "Floor 7 • Easy",
    "source": "T03 Task 5 • ON DELETE CASCADE",
    "title": "Cascade Delete (ON DELETE CASCADE)",
    "story": "Seminar 3 qoidasi: agar ota jadvaldagi qator o'chirilsa, unga tegishli barcha bola qatorlar ham avtomatik o'chirilishi kerak bo'lsa `ON DELETE CASCADE` qo'llanadi.",
    "taskUz": "Create a table named `branch_audit`: `id` (integer PRIMARY KEY), `dept_id` (integer), and `CONSTRAINT fk_audit_dept FOREIGN KEY (dept_id) REFERENCES department(id) ON DELETE CASCADE` bilan.",
    "starterCode": "",
    "hint": "`REFERENCES department(id) ON DELETE CASCADE` deb oxiriga qo'shing.",
    "solutions": [
      "CREATE TABLE branch_audit (id integer PRIMARY KEY, dept_id integer, CONSTRAINT fk_audit_dept FOREIGN KEY (dept_id) REFERENCES department(id) ON DELETE CASCADE)",
      "CREATE TABLE branch_audit (\n  id integer PRIMARY KEY,\n  dept_id integer,\n  CONSTRAINT fk_audit_dept FOREIGN KEY (dept_id) REFERENCES department(id) ON DELETE CASCADE\n)"
    ],
    "requiredPatterns": [],
    "explanation": "ON DELETE CASCADE kaskadli o'chirish qoidasi o'rnatildi.",
    "task": "Create a table named `branch_audit`: `id` (integer PRIMARY KEY), `dept_id` (integer), and `CONSTRAINT fk_audit_dept FOREIGN KEY (dept_id) REFERENCES department(id) ON DELETE CASCADE` bilan.",
    "expectedSchema": {
      "tableName": "branch_audit",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true,
          "isNotNull": true,
          "isUnique": false
        },
        {
          "name": "dept_id",
          "type": "integer",
          "isPK": false,
          "isNotNull": false,
          "isUnique": false
        }
      ]
    }
  },
  {
    "id": 92,
    "sector": 7,
    "difficulty": "Floor 7 • Easy",
    "source": "T03 Task 5 • ON DELETE SET NULL",
    "title": "Bo'shatish (ON DELETE SET NULL)",
    "story": "Agar ota bo'lim tugatilsa, xodim o'chib ketmasin, balki uning bo'limi bo'sh (NULL) bo'lib qolsin (`ON DELETE SET NULL`).",
    "taskUz": "Create a table named `staff_flexible`: `id` (integer PRIMARY KEY), `dept_id` (integer), and `CONSTRAINT fk_sf_dept FOREIGN KEY (dept_id) REFERENCES department(id) ON DELETE SET NULL` bilan.",
    "starterCode": "",
    "hint": "`REFERENCES department(id) ON DELETE SET NULL` .",
    "solutions": [
      "CREATE TABLE staff_flexible (id integer PRIMARY KEY, dept_id integer, CONSTRAINT fk_sf_dept FOREIGN KEY (dept_id) REFERENCES department(id) ON DELETE SET NULL)",
      "CREATE TABLE staff_flexible (\n  id integer PRIMARY KEY,\n  dept_id integer,\n  CONSTRAINT fk_sf_dept FOREIGN KEY (dept_id) REFERENCES department(id) ON DELETE SET NULL\n)"
    ],
    "requiredPatterns": [],
    "explanation": "ON DELETE SET NULL xavfsiz neytrallash qoidasi o'rnatildi.",
    "task": "Create a table named `staff_flexible`: `id` (integer PRIMARY KEY), `dept_id` (integer), and `CONSTRAINT fk_sf_dept FOREIGN KEY (dept_id) REFERENCES department(id) ON DELETE SET NULL` bilan.",
    "expectedSchema": {
      "tableName": "staff_flexible",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true,
          "isNotNull": true,
          "isUnique": false
        },
        {
          "name": "dept_id",
          "type": "integer",
          "isPK": false,
          "isNotNull": false,
          "isUnique": false
        }
      ]
    }
  },
  {
    "id": 93,
    "sector": 7,
    "difficulty": "Floor 7 • Easy",
    "source": "T03 Task 5 • ON DELETE RESTRICT",
    "title": "O'chirishni Taqiqlash (ON DELETE RESTRICT)",
    "story": "Agar bo'limda xodimlar ishlayotgan bo'lsa, ota bo'limni o'chirishga ruxsat berilmasin (`ON DELETE RESTRICT`).",
    "taskUz": "Create a table named `staff_protected`: `id` (integer PRIMARY KEY), `dept_id` (integer NOT NULL), and `CONSTRAINT fk_sp_dept FOREIGN KEY (dept_id) REFERENCES department(id) ON DELETE RESTRICT` bilan.",
    "starterCode": "",
    "hint": "`REFERENCES department(id) ON DELETE RESTRICT` deb qo'shing.",
    "solutions": [
      "CREATE TABLE staff_protected (id integer PRIMARY KEY, dept_id integer NOT NULL, CONSTRAINT fk_sp_dept FOREIGN KEY (dept_id) REFERENCES department(id) ON DELETE RESTRICT)",
      "CREATE TABLE staff_protected (\n  id integer PRIMARY KEY,\n  dept_id integer NOT NULL,\n  CONSTRAINT fk_sp_dept FOREIGN KEY (dept_id) REFERENCES department(id) ON DELETE RESTRICT\n)"
    ],
    "requiredPatterns": [],
    "explanation": "ON DELETE RESTRICT taqiqlovchi xavfsizlik cheklovi barpo etildi.",
    "task": "Create a table named `staff_protected`: `id` (integer PRIMARY KEY), `dept_id` (integer NOT NULL), and `CONSTRAINT fk_sp_dept FOREIGN KEY (dept_id) REFERENCES department(id) ON DELETE RESTRICT` bilan.",
    "expectedSchema": {
      "tableName": "staff_protected",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true,
          "isNotNull": true,
          "isUnique": false
        },
        {
          "name": "dept_id",
          "type": "integer",
          "isPK": false,
          "isNotNull": true,
          "isUnique": false
        }
      ]
    }
  },
  {
    "id": 94,
    "sector": 7,
    "difficulty": "Floor 7 • Easy",
    "source": "T03 Task 2 Step 4 • ON DELETE NO ACTION & ON UPDATE NO ACTION",
    "title": "Standart Harakat (NO ACTION)",
    "story": "Seminar 3 ning 2-topshirig'i: hech qanday maxsus avtomatik o'zgarish bo'lmasin, standart PostgreSQL xatosi berilsin (`ON DELETE NO ACTION ON UPDATE NO ACTION`).",
    "taskUz": "Create a table named `staff_na`: `id` (integer PRIMARY KEY), `dept_id` (integer NOT NULL), and `CONSTRAINT fk_sna_dept FOREIGN KEY (dept_id) REFERENCES department(id) ON DELETE NO ACTION ON UPDATE NO ACTION` bilan.",
    "starterCode": "",
    "hint": "`ON DELETE NO ACTION ON UPDATE NO ACTION` sintaksisini qo'llang.",
    "solutions": [
      "CREATE TABLE staff_na (id integer PRIMARY KEY, dept_id integer NOT NULL, CONSTRAINT fk_sna_dept FOREIGN KEY (dept_id) REFERENCES department(id) ON DELETE NO ACTION ON UPDATE NO ACTION)",
      "CREATE TABLE staff_na (\n  id integer PRIMARY KEY,\n  dept_id integer NOT NULL,\n  CONSTRAINT fk_sna_dept FOREIGN KEY (dept_id) REFERENCES department(id) ON DELETE NO ACTION ON UPDATE NO ACTION\n)"
    ],
    "requiredPatterns": [],
    "explanation": "ON DELETE NO ACTION ON UPDATE NO ACTION standarti tasdiqlandi.",
    "task": "Create a table named `staff_na`: `id` (integer PRIMARY KEY), `dept_id` (integer NOT NULL), and `CONSTRAINT fk_sna_dept FOREIGN KEY (dept_id) REFERENCES department(id) ON DELETE NO ACTION ON UPDATE NO ACTION` bilan.",
    "expectedSchema": {
      "tableName": "staff_na",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true,
          "isNotNull": true,
          "isUnique": false
        },
        {
          "name": "dept_id",
          "type": "integer",
          "isPK": false,
          "isNotNull": true,
          "isUnique": false
        }
      ]
    }
  },
  {
    "id": 95,
    "sector": 7,
    "difficulty": "Floor 7 • Intermediate",
    "source": "L03 Slide 29 • ON UPDATE CASCADE",
    "title": "Yangilanishlarni Kaskadli O'tkazish (ON UPDATE CASCADE)",
    "story": "Agar ota jadvaldagi ID o'zgarsa, bola jadvallardagi bog'langan barcha ID lar ham avtomatik birga yangilanishi lozim.",
    "taskUz": "Create a table named `staff_cascade_up`: `id` (integer PRIMARY KEY), `dept_id` (integer), and `CONSTRAINT fk_scu_dept FOREIGN KEY (dept_id) REFERENCES department(id) ON UPDATE CASCADE` bilan.",
    "starterCode": "",
    "hint": "`ON UPDATE CASCADE` dan foydalaning.",
    "solutions": [
      "CREATE TABLE staff_cascade_up (id integer PRIMARY KEY, dept_id integer, CONSTRAINT fk_scu_dept FOREIGN KEY (dept_id) REFERENCES department(id) ON UPDATE CASCADE)",
      "CREATE TABLE staff_cascade_up (\n  id integer PRIMARY KEY,\n  dept_id integer,\n  CONSTRAINT fk_scu_dept FOREIGN KEY (dept_id) REFERENCES department(id) ON UPDATE CASCADE\n)"
    ],
    "requiredPatterns": [],
    "explanation": "ON UPDATE CASCADE yangilanish kaskadi o'rnatildi.",
    "task": "Create a table named `staff_cascade_up`: `id` (integer PRIMARY KEY), `dept_id` (integer), and `CONSTRAINT fk_scu_dept FOREIGN KEY (dept_id) REFERENCES department(id) ON UPDATE CASCADE` bilan.",
    "expectedSchema": {
      "tableName": "staff_cascade_up",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true,
          "isNotNull": true,
          "isUnique": false
        },
        {
          "name": "dept_id",
          "type": "integer",
          "isPK": false,
          "isNotNull": false,
          "isUnique": false
        }
      ]
    }
  },
  {
    "id": 96,
    "sector": 7,
    "difficulty": "Floor 7 • Intermediate",
    "source": "T03 Task 5 Compare • CASCADE + CASCADE",
    "title": "O'chirish va Yangilashda Kaskad (DELETE CASCADE & UPDATE CASCADE)",
    "story": "Seminar 3 qoidasi: ota yozuv o'chsa bola ham o'chadi, ota yozuv yangilansa bola ham yangilanadi.",
    "taskUz": "Create a table named `dept_item_casc`: `id` (integer PRIMARY KEY), `dept_id` (integer), and `CONSTRAINT fk_dic_dept FOREIGN KEY (dept_id) REFERENCES department(id) ON DELETE CASCADE ON UPDATE CASCADE` bilan.",
    "starterCode": "",
    "hint": "`ON DELETE CASCADE ON UPDATE CASCADE` .",
    "solutions": [
      "CREATE TABLE dept_item_casc (id integer PRIMARY KEY, dept_id integer, CONSTRAINT fk_dic_dept FOREIGN KEY (dept_id) REFERENCES department(id) ON DELETE CASCADE ON UPDATE CASCADE)",
      "CREATE TABLE dept_item_casc (\n  id integer PRIMARY KEY,\n  dept_id integer,\n  CONSTRAINT fk_dic_dept FOREIGN KEY (dept_id) REFERENCES department(id) ON DELETE CASCADE ON UPDATE CASCADE\n)"
    ],
    "requiredPatterns": [],
    "explanation": "Ikkala yo'nalishda ham CASCADE o'rnatildi.",
    "task": "Create a table named `dept_item_casc`: `id` (integer PRIMARY KEY), `dept_id` (integer), and `CONSTRAINT fk_dic_dept FOREIGN KEY (dept_id) REFERENCES department(id) ON DELETE CASCADE ON UPDATE CASCADE` bilan.",
    "expectedSchema": {
      "tableName": "dept_item_casc",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true,
          "isNotNull": true,
          "isUnique": false
        },
        {
          "name": "dept_id",
          "type": "integer",
          "isPK": false,
          "isNotNull": false,
          "isUnique": false
        }
      ]
    }
  },
  {
    "id": 97,
    "sector": 7,
    "difficulty": "Floor 7 • Intermediate",
    "source": "T03 Task 5 Compare • SET NULL + CASCADE",
    "title": "O'chirishda SET NULL, Yangilashda CASCADE",
    "story": "Kompaniya xavfsizlik standarti: ota bo'lim o'chirilganda xodim bo'shatiladi (`ON DELETE SET NULL`), lekin bo'lim ID si o'zgarsa xodimda ham o'zgaradi (`ON UPDATE CASCADE`).",
    "taskUz": "Create a table named `dept_emp_hybrid`: `id` (integer PRIMARY KEY), `dept_id` (integer), and `CONSTRAINT fk_deh_dept FOREIGN KEY (dept_id) REFERENCES department(id) ON DELETE SET NULL ON UPDATE CASCADE` bilan.",
    "starterCode": "",
    "hint": "`ON DELETE SET NULL ON UPDATE CASCADE` .",
    "solutions": [
      "CREATE TABLE dept_emp_hybrid (id integer PRIMARY KEY, dept_id integer, CONSTRAINT fk_deh_dept FOREIGN KEY (dept_id) REFERENCES department(id) ON DELETE SET NULL ON UPDATE CASCADE)",
      "CREATE TABLE dept_emp_hybrid (\n  id integer PRIMARY KEY,\n  dept_id integer,\n  CONSTRAINT fk_deh_dept FOREIGN KEY (dept_id) REFERENCES department(id) ON DELETE SET NULL ON UPDATE CASCADE\n)"
    ],
    "requiredPatterns": [],
    "explanation": "ON DELETE SET NULL ON UPDATE CASCADE kombinatsiyasi o'rnatildi.",
    "task": "Create a table named `dept_emp_hybrid`: `id` (integer PRIMARY KEY), `dept_id` (integer), and `CONSTRAINT fk_deh_dept FOREIGN KEY (dept_id) REFERENCES department(id) ON DELETE SET NULL ON UPDATE CASCADE` bilan.",
    "expectedSchema": {
      "tableName": "dept_emp_hybrid",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true,
          "isNotNull": true,
          "isUnique": false
        },
        {
          "name": "dept_id",
          "type": "integer",
          "isPK": false,
          "isNotNull": false,
          "isUnique": false
        }
      ]
    }
  },
  {
    "id": 98,
    "sector": 7,
    "difficulty": "Floor 7 • Intermediate",
    "source": "L03 Slide 29 • RESTRICT + CASCADE",
    "title": "O'chirishda RESTRICT, Yangilashda CASCADE",
    "story": "Ota bo'limni xodimlari bor paytda o'chirish qat'iy taqiqlanadi (`ON DELETE RESTRICT`), lekin uning ID si rebrendingda o'zgarsa avtomatik o'tadi (`ON UPDATE CASCADE`).",
    "taskUz": "Create a table named `dept_emp_restrict`: `id` (integer PRIMARY KEY), `dept_id` (integer NOT NULL), and `CONSTRAINT fk_der_dept FOREIGN KEY (dept_id) REFERENCES department(id) ON DELETE RESTRICT ON UPDATE CASCADE` bilan.",
    "starterCode": "",
    "hint": "`ON DELETE RESTRICT ON UPDATE CASCADE` yozing.",
    "solutions": [
      "CREATE TABLE dept_emp_restrict (id integer PRIMARY KEY, dept_id integer NOT NULL, CONSTRAINT fk_der_dept FOREIGN KEY (dept_id) REFERENCES department(id) ON DELETE RESTRICT ON UPDATE CASCADE)",
      "CREATE TABLE dept_emp_restrict (\n  id integer PRIMARY KEY,\n  dept_id integer NOT NULL,\n  CONSTRAINT fk_der_dept FOREIGN KEY (dept_id) REFERENCES department(id) ON DELETE RESTRICT ON UPDATE CASCADE\n)"
    ],
    "requiredPatterns": [],
    "explanation": "RESTRICT and CASCADE qoidalari uyg'unlashtirildi.",
    "task": "Create a table named `dept_emp_restrict`: `id` (integer PRIMARY KEY), `dept_id` (integer NOT NULL), and `CONSTRAINT fk_der_dept FOREIGN KEY (dept_id) REFERENCES department(id) ON DELETE RESTRICT ON UPDATE CASCADE` bilan.",
    "expectedSchema": {
      "tableName": "dept_emp_restrict",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true,
          "isNotNull": true,
          "isUnique": false
        },
        {
          "name": "dept_id",
          "type": "integer",
          "isPK": false,
          "isNotNull": true,
          "isUnique": false
        }
      ]
    }
  },
  {
    "id": 99,
    "sector": 7,
    "difficulty": "Floor 7 • Intermediate",
    "source": "T03 Task 5 • Farzandlar Kaskadli O'chishi",
    "title": "Farzandlar Rekordi Kaskadi (CASCADE)",
    "story": "Xodim korporatsiyadan butunlay ketsa, unga bog'liq farzandlar ro'yxati ham o'chib ketishi kerak.",
    "taskUz": "Create a table named `child_cascade`: `parent_passport_no` (varchar(20)), `child_name` (varchar(50)), `CONSTRAINT pk_cc PRIMARY KEY (parent_passport_no, child_name)` and `CONSTRAINT fk_cc_parent FOREIGN KEY (parent_passport_no) REFERENCES person(passport_no) ON DELETE CASCADE` bilan.",
    "starterCode": "",
    "hint": "`FOREIGN KEY (parent_passport_no) REFERENCES person(passport_no) ON DELETE CASCADE` .",
    "solutions": [
      "CREATE TABLE child_cascade (parent_passport_no varchar(20), child_name varchar(50), CONSTRAINT pk_cc PRIMARY KEY (parent_passport_no, child_name), CONSTRAINT fk_cc_parent FOREIGN KEY (parent_passport_no) REFERENCES person(passport_no) ON DELETE CASCADE)",
      "CREATE TABLE child_cascade (\n  parent_passport_no varchar(20),\n  child_name varchar(50),\n  CONSTRAINT pk_cc PRIMARY KEY (parent_passport_no, child_name),\n  CONSTRAINT fk_cc_parent FOREIGN KEY (parent_passport_no) REFERENCES person(passport_no) ON DELETE CASCADE\n)"
    ],
    "requiredPatterns": [],
    "explanation": "Zaif sub'ektlar uchun ON DELETE CASCADE muvaffaqiyatli o'rnatildi.",
    "task": "Create a table named `child_cascade`: `parent_passport_no` (varchar(20)), `child_name` (varchar(50)), `CONSTRAINT pk_cc PRIMARY KEY (parent_passport_no, child_name)` and `CONSTRAINT fk_cc_parent FOREIGN KEY (parent_passport_no) REFERENCES person(passport_no) ON DELETE CASCADE` bilan.",
    "expectedSchema": {
      "tableName": "child_cascade",
      "columns": [
        {
          "name": "parent_passport_no",
          "type": "varchar(20)",
          "isPK": false,
          "isNotNull": false,
          "isUnique": false
        },
        {
          "name": "child_name",
          "type": "varchar(50)",
          "isPK": false,
          "isNotNull": false,
          "isUnique": false
        }
      ]
    }
  },
  {
    "id": 100,
    "sector": 7,
    "difficulty": "Floor 7 • Intermediate",
    "source": "T03 Task 5 • Telefonlar Kaskadi",
    "title": "Bo'lim Telefonlari Kaskadli O'chishi",
    "story": "Bo'lim yopilsa, unga tegishli barcha telefonlar bazadan birga o'chib ketadi.",
    "taskUz": "Create a table named `phone_casc`: `dept_id` (integer), `phone` (varchar(20)), `CONSTRAINT pk_pc PRIMARY KEY (dept_id, phone)` and `CONSTRAINT fk_pc_dept FOREIGN KEY (dept_id) REFERENCES department(id) ON DELETE CASCADE` bilan.",
    "starterCode": "",
    "hint": "`ON DELETE CASCADE` bilan tashqi kalit bog'lang.",
    "solutions": [
      "CREATE TABLE phone_casc (dept_id integer, phone varchar(20), CONSTRAINT pk_pc PRIMARY KEY (dept_id, phone), CONSTRAINT fk_pc_dept FOREIGN KEY (dept_id) REFERENCES department(id) ON DELETE CASCADE)",
      "CREATE TABLE phone_casc (\n  dept_id integer,\n  phone varchar(20),\n  CONSTRAINT pk_pc PRIMARY KEY (dept_id, phone),\n  CONSTRAINT fk_pc_dept FOREIGN KEY (dept_id) REFERENCES department(id) ON DELETE CASCADE\n)"
    ],
    "requiredPatterns": [],
    "explanation": "Bo'lim telefonlari uchun ON DELETE CASCADE o'rnatildi.",
    "task": "Create a table named `phone_casc`: `dept_id` (integer), `phone` (varchar(20)), `CONSTRAINT pk_pc PRIMARY KEY (dept_id, phone)` and `CONSTRAINT fk_pc_dept FOREIGN KEY (dept_id) REFERENCES department(id) ON DELETE CASCADE` bilan.",
    "expectedSchema": {
      "tableName": "phone_casc",
      "columns": [
        {
          "name": "dept_id",
          "type": "integer",
          "isPK": false,
          "isNotNull": false,
          "isUnique": false
        },
        {
          "name": "phone",
          "type": "varchar(20)",
          "isPK": false,
          "isNotNull": false,
          "isUnique": false
        }
      ]
    }
  }
];
