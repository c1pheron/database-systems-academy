var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);

_scope.QUESTIONS_101_150 = [
  {
    "id": 101,
    "sector": 7,
    "difficulty": "Floor 7 • Intermediate",
    "source": "T03 Task 5 • Xodim va Loyiha Kaskadli Aloqasi",
    "title": "Loyiha O'chirilganda Kaskadli Bog'lanish",
    "story": "Loyiha yopilsa, xodimlar unga sarflagan soatlar yozuvi ham o'chib ketishi kerak (`ON DELETE CASCADE`).",
    "taskUz": "Create a table named `project_assignment`: `id` (integer PRIMARY KEY), `proj_id` (integer), and `CONSTRAINT fk_pa_proj FOREIGN KEY (proj_id) REFERENCES project(id) ON DELETE CASCADE` bilan.",
    "starterCode": "",
    "hint": "`FOREIGN KEY (proj_id) REFERENCES project(id) ON DELETE CASCADE` yozing.",
    "solutions": [
      "CREATE TABLE project_assignment (id integer PRIMARY KEY, proj_id integer, CONSTRAINT fk_pa_proj FOREIGN KEY (proj_id) REFERENCES project(id) ON DELETE CASCADE)",
      "CREATE TABLE project_assignment (\n  id integer PRIMARY KEY,\n  proj_id integer,\n  CONSTRAINT fk_pa_proj FOREIGN KEY (proj_id) REFERENCES project(id) ON DELETE CASCADE\n)"
    ],
    "requiredPatterns": [],
    "explanation": "project_assignment kaskadli tashqi kaliti o'rnatildi.",
    "task": "Create a table named `project_assignment`: `id` (integer PRIMARY KEY), `proj_id` (integer), and `CONSTRAINT fk_pa_proj FOREIGN KEY (proj_id) REFERENCES project(id) ON DELETE CASCADE` bilan."
  },
  {
    "id": 102,
    "sector": 7,
    "difficulty": "Floor 7 • Intermediate",
    "source": "T03 Task 5 • Tashqi Kalitda RESTRICT Xavfsizligi",
    "title": "Foydalanuvchi va Buyurtmalar Xavfsizligi (RESTRICT)",
    "story": "Mijozning bazada buyurtmalari mavjud bo'lsa, mijoz hisobini o'chirish qat'iyan man etiladi (`ON DELETE RESTRICT`).",
    "taskUz": "Create a table named `client_order`: `order_id` (integer PRIMARY KEY), `client_id` (integer NOT NULL), and `CONSTRAINT fk_co_client FOREIGN KEY (client_id) REFERENCES client(client_id) ON DELETE RESTRICT` bilan.",
    "starterCode": "",
    "hint": "`ON DELETE RESTRICT` sintaksisini qo'shing.",
    "solutions": [
      "CREATE TABLE client_order (order_id integer PRIMARY KEY, client_id integer NOT NULL, CONSTRAINT fk_co_client FOREIGN KEY (client_id) REFERENCES client(client_id) ON DELETE RESTRICT)",
      "CREATE TABLE client_order (\n  order_id integer PRIMARY KEY,\n  client_id integer NOT NULL,\n  CONSTRAINT fk_co_client FOREIGN KEY (client_id) REFERENCES client(client_id) ON DELETE RESTRICT\n)"
    ],
    "requiredPatterns": [],
    "explanation": "client_order uchun RESTRICT himoyasi o'rnatildi.",
    "task": "Create a table named `client_order`: `order_id` (integer PRIMARY KEY), `client_id` (integer NOT NULL), and `CONSTRAINT fk_co_client FOREIGN KEY (client_id) REFERENCES client(client_id) ON DELETE RESTRICT` bilan."
  },
  {
    "id": 103,
    "sector": 7,
    "difficulty": "Floor 7 • Intermediate",
    "source": "T03 Task 5 • O'chirishda SET NULL Xavfsizligi",
    "title": "Kategoriya O'chirilganda Tovarni Saqlab Qolish (SET NULL)",
    "story": "Agar mahsulot toifasi o'chirilsa, mahsulotlarning o'zi o'chib ketmasligi kerak, ularning toifasi vaqtincha bo'sh (NULL) qoladi.",
    "taskUz": "Create a table named `product_item`: `item_id` (integer PRIMARY KEY), `cat_id` (integer), and `CONSTRAINT fk_pi_cat FOREIGN KEY (cat_id) REFERENCES category(cat_id) ON DELETE SET NULL` bilan.",
    "starterCode": "",
    "hint": "`ON DELETE SET NULL` yozing.",
    "solutions": [
      "CREATE TABLE product_item (item_id integer PRIMARY KEY, cat_id integer, CONSTRAINT fk_pi_cat FOREIGN KEY (cat_id) REFERENCES category(cat_id) ON DELETE SET NULL)",
      "CREATE TABLE product_item (\n  item_id integer PRIMARY KEY,\n  cat_id integer,\n  CONSTRAINT fk_pi_cat FOREIGN KEY (cat_id) REFERENCES category(cat_id) ON DELETE SET NULL\n)"
    ],
    "requiredPatterns": [],
    "explanation": "product_item uchun ON DELETE SET NULL o'rnatildi.",
    "task": "Create a table named `product_item`: `item_id` (integer PRIMARY KEY), `cat_id` (integer), and `CONSTRAINT fk_pi_cat FOREIGN KEY (cat_id) REFERENCES category(cat_id) ON DELETE SET NULL` bilan."
  },
  {
    "id": 104,
    "sector": 7,
    "difficulty": "Floor 7 • Intermediate",
    "source": "T03 Task 5 • NO ACTION Standart Xatti-harakat",
    "title": "Tranzaksiyaviy NO ACTION Harakati",
    "story": "PostgreSQL da tranzaksiya oxirigacha yaxlitlikni tekshirish imkonini beruvchi standart — `NO ACTION`.",
    "taskUz": "Create a table named `contract_dept`: `id` (integer PRIMARY KEY), `dept_id` (integer NOT NULL), and `CONSTRAINT fk_cd_dept FOREIGN KEY (dept_id) REFERENCES department(id) ON DELETE NO ACTION` bilan.",
    "starterCode": "",
    "hint": "`ON DELETE NO ACTION` .",
    "solutions": [
      "CREATE TABLE contract_dept (id integer PRIMARY KEY, dept_id integer NOT NULL, CONSTRAINT fk_cd_dept FOREIGN KEY (dept_id) REFERENCES department(id) ON DELETE NO ACTION)",
      "CREATE TABLE contract_dept (\n  id integer PRIMARY KEY,\n  dept_id integer NOT NULL,\n  CONSTRAINT fk_cd_dept FOREIGN KEY (dept_id) REFERENCES department(id) ON DELETE NO ACTION\n)"
    ],
    "requiredPatterns": [],
    "explanation": "contract_dept da NO ACTION o'rnatildi.",
    "task": "Create a table named `contract_dept`: `id` (integer PRIMARY KEY), `dept_id` (integer NOT NULL), and `CONSTRAINT fk_cd_dept FOREIGN KEY (dept_id) REFERENCES department(id) ON DELETE NO ACTION` bilan."
  },
  {
    "id": 105,
    "sector": 7,
    "difficulty": "Floor 7 • Master Architect",
    "source": "T03 Task 5 Complete • 7-Qavat Yakuni",
    "title": "7-Qavat Bossi: Barcha Bog'liqlik Harakatlari Auditi",
    "story": "7-qavatning eng muhim topshirig'i! Seminar 3 bo'yicha to'liq `employee_archive` jadvalini e'lon qiling: Identity ID, named PK (`pk_emp_arch`), and bo'lim o'chganda xodim bo'shatilib (`ON DELETE SET NULL`), bo'lim yangilanganda esa kaskadli o'tuvchi (`ON UPDATE CASCADE`) mustahkam tashqi kalit (`fk_arch_dept`).",
    "taskUz": "Create a table named `employee_archive`: `id` (integer GENERATED ALWAYS AS IDENTITY), `fullname` (varchar(50) NOT NULL), `department_id` (integer), `CONSTRAINT pk_emp_arch PRIMARY KEY (id)` and `CONSTRAINT fk_arch_dept FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL ON UPDATE CASCADE` bilan.\n\n📋 **Kutilayotgan Relyatsion Sxema / DDL:**\n• Jadval: **employee_archive**\n• Ustunlar: `id` [PK] (integer), `fullname` [NOT NULL] (varchar(50)), `department_id` (integer)\n• Cheklovlar: `pk_emp_arch`, `fk_arch_dept`",
    "starterCode": "",
    "hint": "`CONSTRAINT pk_emp_arch PRIMARY KEY (id)` and `CONSTRAINT fk_arch_dept FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL ON UPDATE CASCADE`.",
    "solutions": [
      "CREATE TABLE employee_archive (id integer GENERATED ALWAYS AS IDENTITY, fullname varchar(50) NOT NULL, department_id integer, CONSTRAINT pk_emp_arch PRIMARY KEY (id), CONSTRAINT fk_arch_dept FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL ON UPDATE CASCADE)",
      "CREATE TABLE employee_archive (\n  id integer GENERATED ALWAYS AS IDENTITY,\n  fullname varchar(50) NOT NULL,\n  department_id integer,\n  CONSTRAINT pk_emp_arch PRIMARY KEY (id),\n  CONSTRAINT fk_arch_dept FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL ON UPDATE CASCADE\n)"
    ],
    "requiredPatterns": [],
    "expectedSchema": {
      "tableName": "employee_archive",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true,
          "hasIdentity": true
        },
        {
          "name": "fullname",
          "type": "varchar(50)",
          "isNotNull": true
        },
        {
          "name": "department_id",
          "type": "integer"
        }
      ],
      "requiredConstraints": [
        "pk_emp_arch",
        "fk_arch_dept"
      ]
    },
    "explanation": "7-Qavat Bossi zabt etildi! SET NULL and CASCADE referensial xatti-harakatlari to'liq o'rnatildi.",
    "task": "Create a table named `employee_archive`: `id` (integer GENERATED ALWAYS AS IDENTITY), `fullname` (varchar(50) NOT NULL), `department_id` (integer), `CONSTRAINT pk_emp_arch PRIMARY KEY (id)` and `CONSTRAINT fk_arch_dept FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL ON UPDATE CASCADE` bilan."
  },
  {
    "id": 106,
    "sector": 8,
    "difficulty": "Floor 8 • Easy",
    "source": "T03 Task 2 Step 7 • Ustun Qo'shish (ADD COLUMN)",
    "title": "Add New Column (ADD COLUMN)",
    "story": "Seminar 3 ning 2-topshirig'i: mavjud `employee` table yangi `nickname varchar(30)` column qo'shish kerak.",
    "taskUz": "`employee` table `nickname` (varchar(30)) column qo'shing (`ALTER TABLE ... ADD COLUMN ...`).",
    "starterCode": "",
    "hint": "`ALTER TABLE employee ADD COLUMN nickname varchar(30)` .",
    "solutions": [
      "ALTER TABLE employee ADD COLUMN nickname varchar(30)",
      "ALTER TABLE employee ADD nickname varchar(30)",
      "ALTER TABLE employee\nADD COLUMN nickname varchar(30)"
    ],
    "requiredPatterns": [],
    "explanation": "employee table yangi nickname column qo'shildi.",
    "task": "`employee` table `nickname` (varchar(30)) column qo'shing (`ALTER TABLE ... ADD COLUMN ...`)."
  },
  {
    "id": 107,
    "sector": 8,
    "difficulty": "Floor 8 • Easy",
    "source": "T03 Task 2 Step 7 • Ustun Nomini O'zgartirish",
    "title": "Ustun Nomini O'zgartirish (RENAME COLUMN)",
    "story": "Seminar 3 qoidasi: yangi qo'shilgan `nickname` column nomini `display_name` deb o'zgartirish talab etiladi.",
    "taskUz": "`employee` jadvalidagi `nickname` column nomini `display_name` ga o'zgartiring.",
    "starterCode": "",
    "hint": "`ALTER TABLE employee RENAME COLUMN nickname TO display_name` sintaksisini qo'llang.",
    "solutions": [
      "ALTER TABLE employee RENAME COLUMN nickname TO display_name",
      "ALTER TABLE employee\nRENAME COLUMN nickname TO display_name"
    ],
    "requiredPatterns": [],
    "explanation": "nickname column display_name ga o'zgartirildi.",
    "task": "`employee` jadvalidagi `nickname` column nomini `display_name` ga o'zgartiring."
  },
  {
    "id": 108,
    "sector": 8,
    "difficulty": "Floor 8 • Easy",
    "source": "T03 Task 2 Step 7 • Ustunni O'chirish (DROP COLUMN)",
    "title": "Drop Column (DROP COLUMN)",
    "story": "Seminar 3 vazifasiga ko'ra, `display_name` column endi kerak emas, uni jadvaldan olib tashlang.",
    "taskUz": "`employee` from table `display_name` column o'chirib tashlang.",
    "starterCode": "",
    "hint": "`ALTER TABLE employee DROP COLUMN display_name` .",
    "solutions": [
      "ALTER TABLE employee DROP COLUMN display_name",
      "ALTER TABLE employee DROP display_name",
      "ALTER TABLE employee\nDROP COLUMN display_name"
    ],
    "requiredPatterns": [],
    "explanation": "display_name column muvaffaqiyatli o'chirildi.",
    "task": "`employee` from table `display_name` column o'chirib tashlang."
  },
  {
    "id": 109,
    "sector": 8,
    "difficulty": "Floor 8 • Easy",
    "source": "T03 Task 2 Step 1 • Ustun Hajmini Kengaytirish",
    "title": "Ustun Hajmini Kengaytirish (ALTER TYPE)",
    "story": "Seminar 3 ning 1-qadami: xodimlarning uzun familiyalarini sig'dirish uchun `last_name` column `varchar(60)` gacha kengaytiring.",
    "taskUz": "`employee` jadvalining `last_name` column turini `varchar(60)` ga o'zgartiring (`ALTER COLUMN ... TYPE ...`).",
    "starterCode": "",
    "hint": "`ALTER TABLE employee ALTER COLUMN last_name TYPE varchar(60)` syntax..",
    "solutions": [
      "ALTER TABLE employee ALTER COLUMN last_name TYPE varchar(60)",
      "ALTER TABLE employee ALTER last_name TYPE varchar(60)",
      "ALTER TABLE employee\nALTER COLUMN last_name TYPE varchar(60)"
    ],
    "requiredPatterns": [],
    "explanation": "last_name column hajmi varchar(60) ga muvaffaqiyatli oshirildi.",
    "task": "`employee` jadvalining `last_name` column turini `varchar(60)` ga o'zgartiring (`ALTER COLUMN ... TYPE ...`)."
  },
  {
    "id": 110,
    "sector": 8,
    "difficulty": "Floor 8 • Easy",
    "source": "T03 Task 2 Step 1 • NOT NULL Qilib Belgilash",
    "title": "Ustunga NOT NULL Qo'yish (SET NOT NULL)",
    "story": "Seminar 3 ning 1-qadami: xodimlarning tug'ilgan sanasi (`dob`) majburiy bo'lishi kerak.",
    "taskUz": "`employee` jadvalining `dob` ustuniga `NOT NULL` qoidasini o'rnating (`ALTER COLUMN ... SET NOT NULL`).",
    "starterCode": "",
    "hint": "`ALTER TABLE employee ALTER COLUMN dob SET NOT NULL` .",
    "solutions": [
      "ALTER TABLE employee ALTER COLUMN dob SET NOT NULL",
      "ALTER TABLE employee ALTER dob SET NOT NULL",
      "ALTER TABLE employee\nALTER COLUMN dob SET NOT NULL"
    ],
    "requiredPatterns": [],
    "explanation": "dob ustuniga SET NOT NULL o'rnatildi.",
    "task": "`employee` jadvalining `dob` ustuniga `NOT NULL` qoidasini o'rnating (`ALTER COLUMN ... SET NOT NULL`)."
  },
  {
    "id": 111,
    "sector": 8,
    "difficulty": "Floor 8 • Easy",
    "source": "T03 Task 2 Step 9 • NOT NULL ni Olib Tashlash",
    "title": "NOT NULL Constraintini Bekor Qilish (DROP NOT NULL)",
    "story": "Seminar 3 ning 9-qadami: `dob` column yana erkin (nullable — ixtiyoriy) holatga qaytaring.",
    "taskUz": "`employee` jadvalining `dob` ustunidan `NOT NULL` qoidasini olib tashlang (`DROP NOT NULL`).",
    "starterCode": "",
    "hint": "`ALTER TABLE employee ALTER COLUMN dob DROP NOT NULL` .",
    "solutions": [
      "ALTER TABLE employee ALTER COLUMN dob DROP NOT NULL",
      "ALTER TABLE employee ALTER dob DROP NOT NULL",
      "ALTER TABLE employee\nALTER COLUMN dob DROP NOT NULL"
    ],
    "requiredPatterns": [],
    "explanation": "dob ustunidan NOT NULL olib tashlandi and u yana nullable qilindi.",
    "task": "`employee` jadvalining `dob` ustunidan `NOT NULL` qoidasini olib tashlang (`DROP NOT NULL`)."
  },
  {
    "id": 112,
    "sector": 8,
    "difficulty": "Floor 8 • Easy",
    "source": "T03 Task 2 Step 8 • DEFAULT Qiymatni O'rnatish",
    "title": "Standart Qiymatni Sozlash (SET DEFAULT)",
    "story": "Seminar 3 ning 8-qadami: `active` ustunining standart qiymatini vaqtincha `false` ga o'zgartiring.",
    "taskUz": "`employee` jadvalining `active` ustuniga `SET DEFAULT false` qiymatini o'rnating.",
    "starterCode": "",
    "hint": "`ALTER TABLE employee ALTER COLUMN active SET DEFAULT false` sintaksisini qo'llang.",
    "solutions": [
      "ALTER TABLE employee ALTER COLUMN active SET DEFAULT false",
      "ALTER TABLE employee ALTER active SET DEFAULT false",
      "ALTER TABLE employee\nALTER COLUMN active SET DEFAULT false"
    ],
    "requiredPatterns": [],
    "explanation": "active ustuniga SET DEFAULT false o'rnatildi.",
    "task": "`employee` jadvalining `active` ustuniga `SET DEFAULT false` qiymatini o'rnating."
  },
  {
    "id": 113,
    "sector": 8,
    "difficulty": "Floor 8 • Easy",
    "source": "T03 Task 2 Step 8 • DEFAULT Qiymatni Bekor Qilish",
    "title": "Standart Qiymatni Olib Tashlash (DROP DEFAULT)",
    "story": "Seminar 3 ning 8-qadami: `active` ustunidan standart qiymatni butunlay olib tashlang (`DROP DEFAULT`).",
    "taskUz": "`employee` jadvalining `active` ustunidan standart qiymatni o'chirib tashlang.",
    "starterCode": "",
    "hint": "`ALTER TABLE employee ALTER COLUMN active DROP DEFAULT` .",
    "solutions": [
      "ALTER TABLE employee ALTER COLUMN active DROP DEFAULT",
      "ALTER TABLE employee ALTER active DROP DEFAULT",
      "ALTER TABLE employee\nALTER COLUMN active DROP DEFAULT"
    ],
    "requiredPatterns": [],
    "explanation": "active ustunidan DROP DEFAULT bajarildi.",
    "task": "`employee` jadvalining `active` ustunidan standart qiymatni o'chirib tashlang."
  },
  {
    "id": 114,
    "sector": 8,
    "difficulty": "Floor 8 • Easy",
    "source": "T03 Task 2 Step 8 • DEFAULT true ni Qayta Tiklash",
    "title": "DEFAULT true ni Qayta Tiklash",
    "story": "Seminar 3 qoidasi: `active` ustuniga yana rasmiy `DEFAULT true` qiymatini qayta biriktiring.",
    "taskUz": "`employee` jadvalining `active` ustuniga `SET DEFAULT true` qiymatini qayta o'rnating.",
    "starterCode": "",
    "hint": "`ALTER TABLE employee ALTER COLUMN active SET DEFAULT true` .",
    "solutions": [
      "ALTER TABLE employee ALTER COLUMN active SET DEFAULT true",
      "ALTER TABLE employee ALTER active SET DEFAULT true",
      "ALTER TABLE employee\nALTER COLUMN active SET DEFAULT true"
    ],
    "requiredPatterns": [],
    "explanation": "active ustuniga SET DEFAULT true qayta tiklandi.",
    "task": "`employee` jadvalining `active` ustuniga `SET DEFAULT true` qiymatini qayta o'rnating."
  },
  {
    "id": 115,
    "sector": 8,
    "difficulty": "Floor 8 • Easy",
    "source": "T03 Task 2 Step 9 • Byudjetni NOT NULL Qilish",
    "title": "Bo'lim Byudjetini Majburiy Qilish (SET NOT NULL)",
    "story": "Seminar 3 ning 9-qadami: `department` jadvalining `budget` column majburiy (`NOT NULL`) qilib belgilang.",
    "taskUz": "`department` jadvalining `budget` ustuniga `SET NOT NULL` o'rnating.",
    "starterCode": "",
    "hint": "`ALTER TABLE department ALTER COLUMN budget SET NOT NULL` .",
    "solutions": [
      "ALTER TABLE department ALTER COLUMN budget SET NOT NULL",
      "ALTER TABLE department ALTER budget SET NOT NULL",
      "ALTER TABLE department\nALTER COLUMN budget SET NOT NULL"
    ],
    "requiredPatterns": [],
    "explanation": "department.budget ustuniga SET NOT NULL o'rnatildi.",
    "task": "`department` jadvalining `budget` ustuniga `SET NOT NULL` o'rnating."
  },
  {
    "id": 116,
    "sector": 8,
    "difficulty": "Floor 8 • Easy",
    "source": "T03 Task 2 Step 9 • Telefonni NOT NULL Qilish",
    "title": "Telefon Raqamini Majburiy Qilish",
    "story": "Seminar 3 ning 9-qadami: `employee` jadvalidagi `phone` column `NOT NULL` qilib o'zgartiring.",
    "taskUz": "`employee` jadvalining `phone` ustuniga `SET NOT NULL` o'rnating.",
    "starterCode": "",
    "hint": "`ALTER TABLE employee ALTER COLUMN phone SET NOT NULL` .",
    "solutions": [
      "ALTER TABLE employee ALTER COLUMN phone SET NOT NULL",
      "ALTER TABLE employee ALTER phone SET NOT NULL",
      "ALTER TABLE employee\nALTER COLUMN phone SET NOT NULL"
    ],
    "requiredPatterns": [],
    "explanation": "employee.phone ustuniga SET NOT NULL o'rnatildi.",
    "task": "`employee` jadvalining `phone` ustuniga `SET NOT NULL` o'rnating."
  },
  {
    "id": 117,
    "sector": 8,
    "difficulty": "Floor 8 • Easy",
    "source": "T03 Task 2 Step 9 • Telefonni Qayta Nullable Qilish",
    "title": "Telefon Raqamini Qayta Ixtiyoriy Qilish",
    "story": "Seminar 3 ning 9-qadami: `employee` jadvalidagi `phone` ustunidan `NOT NULL` ni olib tashlang (`DROP NOT NULL`).",
    "taskUz": "`employee` jadvalining `phone` ustunidan `NOT NULL` qoidasini bekor qiling.",
    "starterCode": "",
    "hint": "`ALTER TABLE employee ALTER COLUMN phone DROP NOT NULL` yozing.",
    "solutions": [
      "ALTER TABLE employee ALTER COLUMN phone DROP NOT NULL",
      "ALTER TABLE employee ALTER phone DROP NOT NULL",
      "ALTER TABLE employee\nALTER COLUMN phone DROP NOT NULL"
    ],
    "requiredPatterns": [],
    "explanation": "employee.phone column yana nullable holatga qaytdi.",
    "task": "`employee` jadvalining `phone` ustunidan `NOT NULL` qoidasini bekor qiling."
  },
  {
    "id": 118,
    "sector": 8,
    "difficulty": "Floor 8 • Easy",
    "source": "T03 Task 2 Step 4 • Bo'lim ID sini NOT NULL Qilish",
    "title": "Foreign Key Maydonini NOT NULL Qilish",
    "story": "Seminar 3 ning 4-qadami: xodimning qaysi bo'limdaligini bildiruvchi `department_id` maydoni qat'iy majburiy (`NOT NULL`) bo'lishi shart.",
    "taskUz": "`employee` jadvalining `department_id` ustuniga `SET NOT NULL` o'rnating.",
    "starterCode": "",
    "hint": "`ALTER TABLE employee ALTER COLUMN department_id SET NOT NULL` .",
    "solutions": [
      "ALTER TABLE employee ALTER COLUMN department_id SET NOT NULL",
      "ALTER TABLE employee ALTER department_id SET NOT NULL",
      "ALTER TABLE employee\nALTER COLUMN department_id SET NOT NULL"
    ],
    "requiredPatterns": [],
    "explanation": "department_id ustuniga SET NOT NULL o'rnatildi.",
    "task": "`employee` jadvalining `department_id` ustuniga `SET NOT NULL` o'rnating."
  },
  {
    "id": 119,
    "sector": 8,
    "difficulty": "Floor 8 • Easy",
    "source": "L03 Slide 30 • Bo'lim Joylashuvini Kengaytirish",
    "title": "Joylashuv Matn Hajmini Oshirish",
    "story": "Bo'lim joylashgan manzil (shahar and ko'cha) matni 50 dan oshishi mumkinligi sababli `location` column `varchar(150)` ga kengaytirilmoqda.",
    "taskUz": "`department` jadvalining `location` column `varchar(150)` ga o'zgartiring.",
    "starterCode": "",
    "hint": "`ALTER TABLE department ALTER COLUMN location TYPE varchar(150)` .",
    "solutions": [
      "ALTER TABLE department ALTER COLUMN location TYPE varchar(150)",
      "ALTER TABLE department ALTER location TYPE varchar(150)",
      "ALTER TABLE department\nALTER COLUMN location TYPE varchar(150)"
    ],
    "requiredPatterns": [],
    "explanation": "department.location column varchar(150) ga muvaffaqiyatli kengaytirildi.",
    "task": "`department` jadvalining `location` column `varchar(150)` ga o'zgartiring."
  },
  {
    "id": 120,
    "sector": 8,
    "difficulty": "Floor 8 • Master Architect",
    "source": "T03 Task 2 Complete Flow • 8-Qavat Yakuni",
    "title": "8-Qavat Bossi: Xodim Maoshiga Standart Qiymat O'rnatish",
    "story": "8-qavatning bosh topshirig'i! Seminar 3 ning 2-topshiriq 5-qoidasi: `employee` jadvalidagi `salary` ustuniga 1000 dollar miqdoridagi standart qiymatni (`SET DEFAULT 1000`) o'rnating.",
    "taskUz": "`employee` jadvalining `salary` ustuniga `SET DEFAULT 1000` qiymatini biriktiring.",
    "starterCode": "",
    "hint": "`ALTER TABLE employee ALTER COLUMN salary SET DEFAULT 1000` .",
    "solutions": [
      "ALTER TABLE employee ALTER COLUMN salary SET DEFAULT 1000",
      "ALTER TABLE employee ALTER salary SET DEFAULT 1000",
      "ALTER TABLE employee\nALTER COLUMN salary SET DEFAULT 1000"
    ],
    "requiredPatterns": [],
    "explanation": "8-Qavat Bossi tasdiqlandi! employee.salary ustuniga SET DEFAULT 1000 o'rnatildi.",
    "task": "`employee` jadvalining `salary` ustuniga `SET DEFAULT 1000` qiymatini biriktiring."
  },
  {
    "id": 121,
    "sector": 9,
    "difficulty": "Floor 9 • Intermediate",
    "source": "T03 Task 2 Step 4 • ADD CONSTRAINT FK",
    "title": "Mavjud Jadvalga Foreign Key Qo'shish (ADD CONSTRAINT FK)",
    "story": "Seminar 3 ning eng markaziy amaliyoti! Bo'sh `employee` table `department` ga bog'lanuvchi `fk_employee_department_id` tashqi kalitini qo'shish kerak.",
    "taskUz": "`employee` table `fk_employee_department_id` nomli foreign key add constraint: u `department_id` column `department(id)` ga bog'lasin.",
    "starterCode": "",
    "hint": "`ALTER TABLE employee ADD CONSTRAINT fk_employee_department_id FOREIGN KEY (department_id) REFERENCES department(id)` sintaksisini qo'llang.",
    "solutions": [
      "ALTER TABLE employee ADD CONSTRAINT fk_employee_department_id FOREIGN KEY (department_id) REFERENCES department(id)",
      "ALTER TABLE employee\nADD CONSTRAINT fk_employee_department_id FOREIGN KEY (department_id) REFERENCES department(id)"
    ],
    "requiredPatterns": [],
    "explanation": "fk_employee_department_id tashqi kaliti ALTER TABLE orqali muvaffaqiyatli qo'shildi.",
    "task": "`employee` table `fk_employee_department_id` nomli foreign key add constraint: u `department_id` column `department(id)` ga bog'lasin."
  },
  {
    "id": 122,
    "sector": 9,
    "difficulty": "Floor 9 • Intermediate",
    "source": "T03 Task 2 Step 4 • Tashqi Kalitni Harakatlari Bilan Qo'shish",
    "title": "Foreign Keyni NO ACTION Harakatlari Bilan Qo'shish",
    "story": "Seminar 3 ning 2-topshirig'i: `employee` table `fk_employee_dept` tashqi kalitini `ON DELETE NO ACTION ON UPDATE NO ACTION` harakatlari bilan qo'shing.",
    "taskUz": "`employee` table `fk_employee_dept` foreign keyini qo'shing: `department_id` -> `department(id)`, `ON DELETE NO ACTION ON UPDATE NO ACTION` bilan.",
    "starterCode": "",
    "hint": "`ALTER TABLE employee ADD CONSTRAINT fk_employee_dept FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE NO ACTION ON UPDATE NO ACTION` .",
    "solutions": [
      "ALTER TABLE employee ADD CONSTRAINT fk_employee_dept FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE NO ACTION ON UPDATE NO ACTION",
      "ALTER TABLE employee\nADD CONSTRAINT fk_employee_dept FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE NO ACTION ON UPDATE NO ACTION"
    ],
    "requiredPatterns": [],
    "explanation": "fk_employee_dept tashqi kaliti to'liq referensial qoidalar bilan o'rnatildi.",
    "task": "`employee` table `fk_employee_dept` foreign keyini qo'shing: `department_id` -> `department(id)`, `ON DELETE NO ACTION ON UPDATE NO ACTION` bilan."
  },
  {
    "id": 123,
    "sector": 9,
    "difficulty": "Floor 9 • Intermediate",
    "source": "T03 Task 2 Step 5 • ADD CONSTRAINT CHECK Salary",
    "title": "Mavjud Jadvalga Maosh CHECK Constraintini Qo'shish",
    "story": "Seminar 3 ning 5-qadami: `employee` table maosh 0 dan katta and 5000 dan oshmasligini ta'minlovchi `ck_employee_salary` add constraint.",
    "taskUz": "`employee` table `ck_employee_salary` nomli cheklov qo'shing: `CHECK (salary > 0 AND salary <= 5000)`.",
    "starterCode": "",
    "hint": "`ALTER TABLE employee ADD CONSTRAINT ck_employee_salary CHECK (salary > 0 AND salary <= 5000)` yozing.",
    "solutions": [
      "ALTER TABLE employee ADD CONSTRAINT ck_employee_salary CHECK (salary > 0 AND salary <= 5000)",
      "ALTER TABLE employee\nADD CONSTRAINT ck_employee_salary CHECK (salary > 0 AND salary <= 5000)"
    ],
    "requiredPatterns": [],
    "explanation": "ck_employee_salary cheklovi ALTER TABLE orqali o'rnatildi.",
    "task": "`employee` table `ck_employee_salary` nomli cheklov qo'shing: `CHECK (salary > 0 AND salary <= 5000)`."
  },
  {
    "id": 124,
    "sector": 9,
    "difficulty": "Floor 9 • Intermediate",
    "source": "T03 Task 2 Step 6 • ADD CONSTRAINT CHECK Email",
    "title": "Mavjud Jadvalga Email CHECK Constraintini Qo'shish",
    "story": "Seminar 3 ning 6-qadami: `employee` jadvalidagi email maydoniga `@` belgisi borligini tekshiruvchi `ck_employee_email` add constraint.",
    "taskUz": "`employee` table `ck_employee_email` add constraint: `CHECK (email LIKE '%@%')`.",
    "starterCode": "",
    "hint": "`ALTER TABLE employee ADD CONSTRAINT ck_employee_email CHECK (email LIKE '%@%')` .",
    "solutions": [
      "ALTER TABLE employee ADD CONSTRAINT ck_employee_email CHECK (email LIKE '%@%')",
      "ALTER TABLE employee\nADD CONSTRAINT ck_employee_email CHECK (email LIKE '%@%')"
    ],
    "requiredPatterns": [],
    "explanation": "ck_employee_email cheklovi qo'shildi.",
    "task": "`employee` table `ck_employee_email` add constraint: `CHECK (email LIKE '%@%')`."
  },
  {
    "id": 125,
    "sector": 9,
    "difficulty": "Floor 9 • Intermediate",
    "source": "T03 Task 2 Step 3 • Birlamchi Kalitni O'chirish (DROP CONSTRAINT PK)",
    "title": "Primary Keyni O'chirish (DROP CONSTRAINT PK)",
    "story": "Seminar 3 ning 3-qadami: birlamchi kalitni qayta yaratishdan oldin, mavjud `pk_employee_id` cheklovini o'chirib tashlash kerak.",
    "taskUz": "`employee` from table `pk_employee_id` primary key cheklovini o'chirib tashlang (`DROP CONSTRAINT`).",
    "starterCode": "",
    "hint": "`ALTER TABLE employee DROP CONSTRAINT pk_employee_id` .",
    "solutions": [
      "ALTER TABLE employee DROP CONSTRAINT pk_employee_id",
      "ALTER TABLE employee\nDROP CONSTRAINT pk_employee_id"
    ],
    "requiredPatterns": [],
    "explanation": "pk_employee_id cheklovi olib tashlandi.",
    "task": "`employee` from table `pk_employee_id` primary key cheklovini o'chirib tashlang (`DROP CONSTRAINT`)."
  },
  {
    "id": 126,
    "sector": 9,
    "difficulty": "Floor 9 • Intermediate",
    "source": "T03 Task 2 Step 3 • Birlamchi Kalitni Qayta Tiklash",
    "title": "Primary Keyni Qayta Qo'shish (ADD CONSTRAINT PK)",
    "story": "Seminar 3 ning 3-qadami: `employee` table `pk_employee_id` birlamchi kalitini qaytadan biriktiring.",
    "taskUz": "`employee` table `pk_employee_id` nomli primary key add constraint (`id` ustuniga).",
    "starterCode": "",
    "hint": "`ALTER TABLE employee ADD CONSTRAINT pk_employee_id PRIMARY KEY (id)` yozing.",
    "solutions": [
      "ALTER TABLE employee ADD CONSTRAINT pk_employee_id PRIMARY KEY (id)",
      "ALTER TABLE employee\nADD CONSTRAINT pk_employee_id PRIMARY KEY (id)"
    ],
    "requiredPatterns": [],
    "explanation": "pk_employee_id cheklovi qayta tiklandi.",
    "task": "`employee` table `pk_employee_id` nomli primary key add constraint (`id` ustuniga)."
  },
  {
    "id": 127,
    "sector": 9,
    "difficulty": "Floor 9 • Intermediate",
    "source": "T03 Task 2 Step 3 • Unikal Cheklovni O'chirish (DROP CONSTRAINT UQ)",
    "title": "Unikal Constraintni O'chirish (DROP CONSTRAINT UQ)",
    "story": "Seminar 3 ning 3-qadami: email ustunidagi `uq_employee_email` unikal cheklovini o'chirib tashlang.",
    "taskUz": "`employee` from table `uq_employee_email` cheklovini o'chirib tashlang.",
    "starterCode": "",
    "hint": "`ALTER TABLE employee DROP CONSTRAINT uq_employee_email` .",
    "solutions": [
      "ALTER TABLE employee DROP CONSTRAINT uq_employee_email",
      "ALTER TABLE employee\nDROP CONSTRAINT uq_employee_email"
    ],
    "requiredPatterns": [],
    "explanation": "uq_employee_email unikal cheklovi olib tashlandi.",
    "task": "`employee` from table `uq_employee_email` cheklovini o'chirib tashlang."
  },
  {
    "id": 128,
    "sector": 9,
    "difficulty": "Floor 9 • Intermediate",
    "source": "T03 Task 2 Step 3 • Unikal Cheklovni Qayta Qo'shish",
    "title": "Unikal Constraintni Qayta Tiklash (ADD CONSTRAINT UQ)",
    "story": "Seminar 3 ning 3-qadami: `employee` jadvalidagi `email` ustuniga `uq_employee_email` cheklovini qaytadan o'rnating.",
    "taskUz": "`employee` table `uq_employee_email` nomli unikal cheklovni qo'shing (`UNIQUE (email)`).",
    "starterCode": "",
    "hint": "`ALTER TABLE employee ADD CONSTRAINT uq_employee_email UNIQUE (email)` .",
    "solutions": [
      "ALTER TABLE employee ADD CONSTRAINT uq_employee_email UNIQUE (email)",
      "ALTER TABLE employee\nADD CONSTRAINT uq_employee_email UNIQUE (email)"
    ],
    "requiredPatterns": [],
    "explanation": "uq_employee_email cheklovi qaytadan tiklandi.",
    "task": "`employee` table `uq_employee_email` nomli unikal cheklovni qo'shing (`UNIQUE (email)`)."
  },
  {
    "id": 129,
    "sector": 9,
    "difficulty": "Floor 9 • Intermediate",
    "source": "T03 Task 2 • CHECK Cheklovini O'chirish",
    "title": "CHECK Constraintini O'chirish (DROP CONSTRAINT CK)",
    "story": "Kompaniya maosh chegaralarini yangilash arafasida. Eski `ck_employee_salary` cheklovini o'chirib tashlash lozim.",
    "taskUz": "`employee` from table `ck_employee_salary` cheklovini o'chirib tashlang.",
    "starterCode": "",
    "hint": "`ALTER TABLE employee DROP CONSTRAINT ck_employee_salary` yozing.",
    "solutions": [
      "ALTER TABLE employee DROP CONSTRAINT ck_employee_salary",
      "ALTER TABLE employee\nDROP CONSTRAINT ck_employee_salary"
    ],
    "requiredPatterns": [],
    "explanation": "ck_employee_salary cheklovi muvaffaqiyatli o'chirildi.",
    "task": "`employee` from table `ck_employee_salary` cheklovini o'chirib tashlang."
  },
  {
    "id": 130,
    "sector": 9,
    "difficulty": "Floor 9 • Intermediate",
    "source": "T03 Task 2 • Yangilangan Maosh Cheklovini Qo'shish",
    "title": "Yangilangan Maosh Constraintini Qo'shish",
    "story": "Endi maosh diapazoni 500 dan 10000 gacha bo'lishi belgilandi (`salary >= 500 AND salary <= 10000`).",
    "taskUz": "`employee` table `ck_employee_salary` add constraint: `CHECK (salary >= 500 AND salary <= 10000)`.",
    "starterCode": "",
    "hint": "`ALTER TABLE employee ADD CONSTRAINT ck_employee_salary CHECK (salary >= 500 AND salary <= 10000)` yozing.",
    "solutions": [
      "ALTER TABLE employee ADD CONSTRAINT ck_employee_salary CHECK (salary >= 500 AND salary <= 10000)",
      "ALTER TABLE employee\nADD CONSTRAINT ck_employee_salary CHECK (salary >= 500 AND salary <= 10000)"
    ],
    "requiredPatterns": [],
    "explanation": "Yangi maosh diapazoni cheklovi o'rnatildi.",
    "task": "`employee` table `ck_employee_salary` add constraint: `CHECK (salary >= 500 AND salary <= 10000)`."
  },
  {
    "id": 131,
    "sector": 9,
    "difficulty": "Floor 9 • Intermediate",
    "source": "T03 Task 2 • Tashqi Kalitni O'chirish (DROP CONSTRAINT FK)",
    "title": "Foreign Keyni O'chirish (DROP CONSTRAINT FK)",
    "story": "Strukturani qayta loyihalash uchun `employee` jadvalidagi `fk_employee_department_id` tashqi kaliti o'chirilishi kerak.",
    "taskUz": "`employee` from table `fk_employee_department_id` foreign key cheklovini o'chirib tashlang.",
    "starterCode": "",
    "hint": "`ALTER TABLE employee DROP CONSTRAINT fk_employee_department_id` .",
    "solutions": [
      "ALTER TABLE employee DROP CONSTRAINT fk_employee_department_id",
      "ALTER TABLE employee\nDROP CONSTRAINT fk_employee_department_id"
    ],
    "requiredPatterns": [],
    "explanation": "fk_employee_department_id tashqi kaliti olib tashlandi.",
    "task": "`employee` from table `fk_employee_department_id` foreign key cheklovini o'chirib tashlang."
  },
  {
    "id": 132,
    "sector": 9,
    "difficulty": "Floor 9 • Intermediate",
    "source": "T03 Task 2 • CASCADE li Yangi Tashqi Kalit Qo'shish",
    "title": "Kaskadli Foreign Keyni Dinamik Qo'shish",
    "story": "Eski tashqi kalit o'rniga `ON DELETE CASCADE ON UPDATE CASCADE` bilan ishlovchi yangi `fk_employee_department_id` cheklovini qayta qo'shing.",
    "taskUz": "`employee` table `fk_employee_department_id` add constraint: `department_id` -> `department(id)` ga `ON DELETE CASCADE ON UPDATE CASCADE` bilan.",
    "starterCode": "",
    "hint": "`ALTER TABLE employee ADD CONSTRAINT fk_employee_department_id FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE ON UPDATE CASCADE` .",
    "solutions": [
      "ALTER TABLE employee ADD CONSTRAINT fk_employee_department_id FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE ON UPDATE CASCADE",
      "ALTER TABLE employee\nADD CONSTRAINT fk_employee_department_id FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE ON UPDATE CASCADE"
    ],
    "requiredPatterns": [],
    "explanation": "Kaskadli yangi tashqi kalit muvaffaqiyatli o'rnatildi.",
    "task": "`employee` table `fk_employee_department_id` add constraint: `department_id` -> `department(id)` ga `ON DELETE CASCADE ON UPDATE CASCADE` bilan."
  },
  {
    "id": 133,
    "sector": 9,
    "difficulty": "Floor 9 • Intermediate",
    "source": "T03 Task 1 • Bo'lim Byudjeti Cheklovini Qo'shish",
    "title": "Bo'lim Byudjetiga CHECK Constraintini Qo'shish",
    "story": "Mavjud `department` table byudjet 0 dan kichik bo'lmasligini kafolatlovchi `ck_dept_budget_pos` add constraint.",
    "taskUz": "`department` table `ck_dept_budget_pos` add constraint: `CHECK (budget >= 0)`.",
    "starterCode": "",
    "hint": "`ALTER TABLE department ADD CONSTRAINT ck_dept_budget_pos CHECK (budget >= 0)` .",
    "solutions": [
      "ALTER TABLE department ADD CONSTRAINT ck_dept_budget_pos CHECK (budget >= 0)",
      "ALTER TABLE department\nADD CONSTRAINT ck_dept_budget_pos CHECK (budget >= 0)"
    ],
    "requiredPatterns": [],
    "explanation": "ck_dept_budget_pos cheklovi o'rnatildi.",
    "task": "`department` table `ck_dept_budget_pos` add constraint: `CHECK (budget >= 0)`."
  },
  {
    "id": 134,
    "sector": 9,
    "difficulty": "Floor 9 • Intermediate",
    "source": "T03 Task 1 • Bo'lim Nomiga UNIQUE Cheklovini Qo'shish",
    "title": "Bo'lim Nomiga Dinamik UNIQUE Qo'shish",
    "story": "Mavjud `department` table bo'lim nomi unikal bo'lishini ta'minlovchi `uq_dept_name_unique` add constraint.",
    "taskUz": "`department` table `uq_dept_name_unique` add constraint: `UNIQUE (title)`.",
    "starterCode": "",
    "hint": "`ALTER TABLE department ADD CONSTRAINT uq_dept_name_unique UNIQUE (title)` yozing.",
    "solutions": [
      "ALTER TABLE department ADD CONSTRAINT uq_dept_name_unique UNIQUE (title)",
      "ALTER TABLE department\nADD CONSTRAINT uq_dept_name_unique UNIQUE (title)"
    ],
    "requiredPatterns": [],
    "explanation": "uq_dept_name_unique cheklovi dinamik o'rnatildi.",
    "task": "`department` table `uq_dept_name_unique` add constraint: `UNIQUE (title)`."
  },
  {
    "id": 135,
    "sector": 9,
    "difficulty": "Floor 9 • Master Architect",
    "source": "T03 Task 2 Complete Schema • 9-Qavat Yakuni",
    "title": "9-Qavat Bossi: Xodim va Bo'lim Constraintlarini Standartga Keltirish",
    "story": "9-qavatning buyuk arxitektura sinovi! `employee` jadvalidagi tashqi kalitni Seminar 3 ning rasmiy varianti bo'yicha qayta o'rnating: `department_id` maydoni `department(id)` ga `ON DELETE NO ACTION ON UPDATE NO ACTION` bilan bog'lansin and `fk_employee_department_id` deb nomlansin.",
    "taskUz": "`employee` table `fk_employee_department_id` foreign keyini qo'shing: `department_id` -> `department(id)` ga `ON DELETE NO ACTION ON UPDATE NO ACTION` bilan.",
    "starterCode": "",
    "hint": "`ALTER TABLE employee ADD CONSTRAINT fk_employee_department_id FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE NO ACTION ON UPDATE NO ACTION` .",
    "solutions": [
      "ALTER TABLE employee ADD CONSTRAINT fk_employee_department_id FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE NO ACTION ON UPDATE NO ACTION",
      "ALTER TABLE employee\nADD CONSTRAINT fk_employee_department_id FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE NO ACTION ON UPDATE NO ACTION"
    ],
    "requiredPatterns": [],
    "explanation": "9-Qavat Bossi zabt etildi! Seminar 3 ning rasmiy tashqi kalit cheklovi to'liq barpo etildi.",
    "task": "`employee` table `fk_employee_department_id` foreign keyini qo'shing: `department_id` -> `department(id)` ga `ON DELETE NO ACTION ON UPDATE NO ACTION` bilan."
  },
  {
    "id": 136,
    "sector": 10,
    "difficulty": "Floor 10 • Intermediate",
    "source": "Relational Algebra Slides • Tanlash (Selection - σ)",
    "title": "Relational Algebra: Selection (σ)",
    "story": "Relyatsion algebrada satrlarni shart bo'yicha saralab olish amali grekcha Sigma (σ) belgisi bilan belgilanadi. Masalan maoshi 2000 dan katta xodimlarni ajratish.",
    "taskUz": "Translate the relational algebra expression to SQL: `σ salary > 2000 (employee)` query in SQL (`SELECT * FROM employee WHERE salary > 2000`).",
    "starterCode": "",
    "hint": "`SELECT * FROM employee WHERE salary > 2000` .",
    "solutions": [
      "SELECT * FROM employee WHERE salary > 2000",
      "SELECT * FROM employee WHERE salary > 2000;"
    ],
    "requiredPatterns": [],
    "explanation": "Relyatsion algebra Selection (σ) amali SQL WHERE orqali ifodalandi.",
    "task": "Translate the relational algebra expression to SQL: `σ salary > 2000 (employee)` query in SQL (`SELECT * FROM employee WHERE salary > 2000`)."
  },
  {
    "id": 137,
    "sector": 10,
    "difficulty": "Floor 10 • Intermediate",
    "source": "Relational Algebra Slides • Proyeksiya (Projection - π)",
    "title": "Relational Algebra: Projection (π)",
    "story": "Jadvaldan faqat ma'lum ustunlarni vertikal ajratib olish Relyatsion Algebrada Pi (π) belgisi bilan yoziladi: `π first_name, last_name (employee)`.",
    "taskUz": "Ushbu proyeksiyaning SQL ekvivalentini yozing: `π first_name, last_name (employee)` (`SELECT first_name, last_name FROM employee`).",
    "starterCode": "",
    "hint": "`SELECT first_name, last_name FROM employee` .",
    "solutions": [
      "SELECT first_name, last_name FROM employee",
      "SELECT first_name, last_name FROM employee;"
    ],
    "requiredPatterns": [],
    "explanation": "Relyatsion algebra Projection (π) amali SQL SELECT ustunlar ro'yxati orqali bajarildi.",
    "task": "Ushbu proyeksiyaning SQL ekvivalentini yozing: `π first_name, last_name (employee)` (`SELECT first_name, last_name FROM employee`)."
  },
  {
    "id": 138,
    "sector": 10,
    "difficulty": "Floor 10 • Intermediate",
    "source": "Relational Algebra Slides • Birgalikda σ va π",
    "title": "Relational Algebra: Tanlash va Proyeksiya Birgalikda",
    "story": "Relyatsion algebrada amallar ketma-ket joylashtiriladi: `π first_name, salary (σ salary >= 3000 (employee))`.",
    "taskUz": "Ushbu algebraik ifodani SQL da yozing: maoshi 3000 dan kam bo'lmagan xodimlarning `first_name` and `salary` ustunlarini chiqaring.",
    "starterCode": "",
    "hint": "`SELECT first_name, salary FROM employee WHERE salary >= 3000` .",
    "solutions": [
      "SELECT first_name, salary FROM employee WHERE salary >= 3000",
      "SELECT first_name, salary FROM employee WHERE salary >= 3000;"
    ],
    "requiredPatterns": [],
    "explanation": "π and σ amallari kombinatsiyasi SQL da executed successfully.",
    "task": "Ushbu algebraik ifodani SQL da yozing: maoshi 3000 dan kam bo'lmagan xodimlarning `first_name` and `salary` ustunlarini chiqaring."
  },
  {
    "id": 139,
    "sector": 10,
    "difficulty": "Floor 10 • Intermediate",
    "source": "Relational Algebra Slides • Dekart Ko'paytma (Cartesian Product - ×)",
    "title": "Relational Algebra: Dekart Ko'paytma (× / CROSS JOIN)",
    "story": "Ikkita jadvalning barcha mumkin being qatorlar juftligini hosil qilish Relyatsion Algebrada `R × S` deb ataladi.",
    "taskUz": "`department` and `project` jadvallarining Dekart ko'paytmasini (`CROSS JOIN`) hosil qiluvchi SQL so'rovini yozing.",
    "starterCode": "",
    "hint": "`SELECT * FROM department CROSS JOIN project` yoki `SELECT * FROM department, project` .",
    "solutions": [
      "SELECT * FROM department CROSS JOIN project",
      "SELECT * FROM department, project"
    ],
    "requiredPatterns": [],
    "explanation": "Dekart ko'paytma (Cartesian Product) SQL CROSS JOIN orqali ifodalandi.",
    "task": "`department` and `project` jadvallarining Dekart ko'paytmasini (`CROSS JOIN`) hosil qiluvchi SQL so'rovini yozing."
  },
  {
    "id": 140,
    "sector": 10,
    "difficulty": "Floor 10 • Intermediate",
    "source": "Relational Algebra Slides • Tabiiy Bog'lanish (Natural Join - ⨝)",
    "title": "Relational Algebra: Tabiiy Bog'lanish (⨝ / JOIN)",
    "story": "Ikkita jadvalni umumiy kalit column bo'yicha birlashtirish Relyatsion Algebrada 'Bowtie' (⨝) belgisi bilan belgilanadi.",
    "taskUz": "`employee` and `department` jadvallarini `department_id = department.id` sharti bo'yicha bog'lab all columns chiqaring.",
    "starterCode": "",
    "hint": "`SELECT * FROM employee JOIN department ON employee.department_id = department.id` .",
    "solutions": [
      "SELECT * FROM employee JOIN department ON employee.department_id = department.id",
      "SELECT * FROM employee e JOIN department d ON e.department_id = d.id"
    ],
    "requiredPatterns": [],
    "explanation": "Relyatsion algebra Join (⨝) amali SQL JOIN ON orqali bajarildi.",
    "task": "`employee` and `department` jadvallarini `department_id = department.id` sharti bo'yicha bog'lab all columns chiqaring."
  },
  {
    "id": 141,
    "sector": 10,
    "difficulty": "Floor 10 • Intermediate",
    "source": "Relational Algebra Slides • Birlashma (Union - ∪)",
    "title": "Relational Algebra: Birlashma (Union — ∪)",
    "story": "Ikkita to'plamning elementlarini takrorlanishlarsiz birlashtirish Relyatsion Algebrada `R ∪ S` (UNION) hisoblanadi.",
    "taskUz": "`staff` jadvalidagi `full_name` and `applicant` jadvalidagi `full_name` ustunlarini `UNION` orqali birlashtiring.",
    "starterCode": "",
    "hint": "`SELECT full_name FROM staff UNION SELECT full_name FROM applicant` .",
    "solutions": [
      "SELECT full_name FROM staff UNION SELECT full_name FROM applicant",
      "SELECT full_name FROM staff\nUNION\nSELECT full_name FROM applicant"
    ],
    "requiredPatterns": [],
    "explanation": "To'plamlar birlashmasi (UNION) executed successfully.",
    "task": "`staff` jadvalidagi `full_name` and `applicant` jadvalidagi `full_name` ustunlarini `UNION` orqali birlashtiring."
  },
  {
    "id": 142,
    "sector": 10,
    "difficulty": "Floor 10 • Intermediate",
    "source": "Relational Algebra Slides • Kesishma (Intersection - ∩)",
    "title": "Relational Algebra: Kesishma (Intersection — ∩)",
    "story": "Ikkala to'plamda ham mavjud being umumiy elementlarni ajratib olish `R ∩ S` (INTERSECT) deb ataladi.",
    "taskUz": "`branch` jadvalidagi `name` and `department` jadvalidagi `title` ustunlarining umumiy kesishmasini (`INTERSECT`) chiqaring.",
    "starterCode": "",
    "hint": "`SELECT name FROM branch INTERSECT SELECT title FROM department` yozing.",
    "solutions": [
      "SELECT name FROM branch INTERSECT SELECT title FROM department",
      "SELECT name FROM branch\nINTERSECT\nSELECT title FROM department"
    ],
    "requiredPatterns": [],
    "explanation": "Kesishma (INTERSECT) amali tasdiqlandi.",
    "task": "`branch` jadvalidagi `name` and `department` jadvalidagi `title` ustunlarining umumiy kesishmasini (`INTERSECT`) chiqaring."
  },
  {
    "id": 143,
    "sector": 10,
    "difficulty": "Floor 10 • Intermediate",
    "source": "Relational Algebra Slides • Ayirma (Difference - −)",
    "title": "Relational Algebra: Ayirma (Difference — −)",
    "story": "Birinchi to'plamda bor, lekin ikkinchisida yo'q being elementlarni topish `R − S` (EXCEPT) deyiladi.",
    "taskUz": "`department` jadvalidagi barcha `id` lardan `employee` jadvalidagi `department_id` larni ayirib tashlang (`EXCEPT`).",
    "starterCode": "",
    "hint": "`SELECT id FROM department EXCEPT SELECT department_id FROM employee` yozing.",
    "solutions": [
      "SELECT id FROM department EXCEPT SELECT department_id FROM employee",
      "SELECT id FROM department\nEXCEPT\nSELECT department_id FROM employee"
    ],
    "requiredPatterns": [],
    "explanation": "Relyatsion to'plam ayirmasi (EXCEPT) executed successfully.",
    "task": "`department` jadvalidagi barcha `id` lardan `employee` jadvalidagi `department_id` larni ayirib tashlang (`EXCEPT`)."
  },
  {
    "id": 144,
    "sector": 10,
    "difficulty": "Floor 10 • Easy",
    "source": "T03 Task 4 Schema • Kompaniya Sxemasini Yaratish",
    "title": "Kompaniya Sxemasini E'lon Qilish (CREATE SCHEMA)",
    "story": "Seminar 3 ning 4-topshirig'i: mustaqil `company_lab` sxemasini yaratish talab etiladi.",
    "taskUz": "`company_lab` nomli yangi PostgreSQL sxemasini yarating (`CREATE SCHEMA company_lab`).",
    "starterCode": "",
    "hint": "`CREATE SCHEMA company_lab` .",
    "solutions": [
      "CREATE SCHEMA company_lab",
      "CREATE SCHEMA IF NOT EXISTS company_lab"
    ],
    "requiredPatterns": [],
    "explanation": "company_lab yangi arxitektura sxemasi yaratildi.",
    "task": "`company_lab` nomli yangi PostgreSQL sxemasini yarating (`CREATE SCHEMA company_lab`)."
  },
  {
    "id": 145,
    "sector": 10,
    "difficulty": "Floor 10 • Easy",
    "source": "T03 Task 4 Schema • Qidiruv Yo'lini Sxemaga O'rnatish",
    "title": "Qidiruv Yo'lini company_lab ga Yo'naltirish",
    "story": "Yangi yaratilgan `company_lab` sxemasida ishlash uchun `search_path` ni unga o'rnating.",
    "taskUz": "PostgreSQL qidiruv yo'lini `company_lab, public` ga o'rnating.",
    "starterCode": "",
    "hint": "`SET search_path TO company_lab, public` yozing.",
    "solutions": [
      "SET search_path TO company_lab, public",
      "SET search_path = company_lab, public"
    ],
    "requiredPatterns": [],
    "explanation": "Qidiruv yo'li company_lab ga yo'naltirildi.",
    "task": "PostgreSQL qidiruv yo'lini `company_lab, public` ga o'rnating."
  },
  {
    "id": 146,
    "sector": 10,
    "difficulty": "Floor 10 • Hard",
    "source": "T03 Task 4 Complete • Loyiha Jadvali Arxitekturasi",
    "title": "Kompaniya Loyihalari Jadvali (Project)",
    "story": "Seminar 3 kompaniya sxemasi: `project` jadvali avtomatik `id` (Identity), `title varchar(100) NOT NULL`, ixtiyoriy `date_started date` and named `CONSTRAINT pk_comp_proj PRIMARY KEY (id)` bilan barpo etilishi lozim.",
    "taskUz": "Create a table named `company_project`: `id` (integer GENERATED ALWAYS AS IDENTITY), `title` (varchar(100) NOT NULL), `date_started` (date), and `CONSTRAINT pk_comp_proj PRIMARY KEY (id)` bilan.",
    "starterCode": "",
    "hint": "`CONSTRAINT pk_comp_proj PRIMARY KEY (id)` deb birlamchi kalit bering.",
    "solutions": [
      "CREATE TABLE company_project (id integer GENERATED ALWAYS AS IDENTITY, title varchar(100) NOT NULL, date_started date, CONSTRAINT pk_comp_proj PRIMARY KEY (id))",
      "CREATE TABLE company_project (\n  id integer GENERATED ALWAYS AS IDENTITY,\n  title varchar(100) NOT NULL,\n  date_started date,\n  CONSTRAINT pk_comp_proj PRIMARY KEY (id)\n)"
    ],
    "requiredPatterns": [],
    "explanation": "company_project korporativ jadvali yaratildi.",
    "task": "Create a table named `company_project`: `id` (integer GENERATED ALWAYS AS IDENTITY), `title` (varchar(100) NOT NULL), `date_started` (date), and `CONSTRAINT pk_comp_proj PRIMARY KEY (id)` bilan."
  },
  {
    "id": 147,
    "sector": 10,
    "difficulty": "Floor 10 • Hard",
    "source": "T03 Task 4 Complete • Menejerli Bo'lim Jadvali",
    "title": "Menejerli Bo'lim Jadvali (Department)",
    "story": "Seminar 3 talabi: `company_dept` jadvali `id` (Identity), `title` (varchar(100) NOT NULL), `budget` (numeric(12,2) NOT NULL and >= 0), `manager_passport_no` (varchar(20) UNIQUE) and `pk_c_dept` birlamchi kaliti bilan qurilishi kerak.",
    "taskUz": "Create a table named `company_dept`: `id` (integer GENERATED ALWAYS AS IDENTITY), `title` (varchar(100) NOT NULL), `budget` (numeric(12,2) NOT NULL), `manager_passport_no` (varchar(20)), `CONSTRAINT pk_c_dept PRIMARY KEY (id)`, `CONSTRAINT uq_c_dept_mgr UNIQUE (manager_passport_no)`, `CONSTRAINT ck_c_dept_budget CHECK (budget >= 0)` bilan.",
    "starterCode": "",
    "hint": "Barcha 3 ta named cheklovni jadval darajasida e'lon qiling.",
    "solutions": [
      "CREATE TABLE company_dept (id integer GENERATED ALWAYS AS IDENTITY, title varchar(100) NOT NULL, budget numeric(12,2) NOT NULL, manager_passport_no varchar(20), CONSTRAINT pk_c_dept PRIMARY KEY (id), CONSTRAINT uq_c_dept_mgr UNIQUE (manager_passport_no), CONSTRAINT ck_c_dept_budget CHECK (budget >= 0))",
      "CREATE TABLE company_dept (\n  id integer GENERATED ALWAYS AS IDENTITY,\n  title varchar(100) NOT NULL,\n  budget numeric(12,2) NOT NULL,\n  manager_passport_no varchar(20),\n  CONSTRAINT pk_c_dept PRIMARY KEY (id),\n  CONSTRAINT uq_c_dept_mgr UNIQUE (manager_passport_no),\n  CONSTRAINT ck_c_dept_budget CHECK (budget >= 0)\n)"
    ],
    "requiredPatterns": [],
    "explanation": "company_dept jadvali barcha korporativ talablar bilan barpo etildi.",
    "task": "Create a table named `company_dept`: `id` (integer GENERATED ALWAYS AS IDENTITY), `title` (varchar(100) NOT NULL), `budget` (numeric(12,2) NOT NULL), `manager_passport_no` (varchar(20)), `CONSTRAINT pk_c_dept PRIMARY KEY (id)`, `CONSTRAINT uq_c_dept_mgr UNIQUE (manager_passport_no)`, `CONSTRAINT ck_c_dept_budget CHECK (budget >= 0)` bilan."
  },
  {
    "id": 148,
    "sector": 10,
    "difficulty": "Floor 10 • Hard",
    "source": "T03 Task 4 Complete • Pasportli Xodim Jadvali",
    "title": "Pasportli Bosh Xodimlar Jadvali (Employee)",
    "story": "Seminar 3 talabi: `company_emp` jadvali `passport_no` (varchar(20) PRIMARY KEY), `first_name` and `last_name` (varchar(50) NOT NULL), `salary` (numeric(10,2) NOT NULL and > 0), `dept_id` (integer NOT NULL and company_dept(id) ga bog'langan) bo'lishi shart.",
    "taskUz": "Create a table named `company_emp`: `passport_no` (varchar(20)), `first_name` (varchar(50) NOT NULL), `last_name` (varchar(50) NOT NULL), `salary` (numeric(10,2) NOT NULL), `dept_id` (integer NOT NULL), `CONSTRAINT pk_c_emp PRIMARY KEY (passport_no)`, `CONSTRAINT ck_c_emp_sal CHECK (salary > 0)`, `CONSTRAINT fk_c_emp_dept FOREIGN KEY (dept_id) REFERENCES company_dept(id)` bilan.",
    "starterCode": "",
    "hint": "`CONSTRAINT pk_c_emp PRIMARY KEY (passport_no)`, `CONSTRAINT ck_c_emp_sal CHECK (salary > 0)`, `CONSTRAINT fk_c_emp_dept FOREIGN KEY (dept_id) REFERENCES company_dept(id)`.",
    "solutions": [
      "CREATE TABLE company_emp (passport_no varchar(20), first_name varchar(50) NOT NULL, last_name varchar(50) NOT NULL, salary numeric(10,2) NOT NULL, dept_id integer NOT NULL, CONSTRAINT pk_c_emp PRIMARY KEY (passport_no), CONSTRAINT ck_c_emp_sal CHECK (salary > 0), CONSTRAINT fk_c_emp_dept FOREIGN KEY (dept_id) REFERENCES company_dept(id))",
      "CREATE TABLE company_emp (\n  passport_no varchar(20),\n  first_name varchar(50) NOT NULL,\n  last_name varchar(50) NOT NULL,\n  salary numeric(10,2) NOT NULL,\n  dept_id integer NOT NULL,\n  CONSTRAINT pk_c_emp PRIMARY KEY (passport_no),\n  CONSTRAINT ck_c_emp_sal CHECK (salary > 0),\n  CONSTRAINT fk_c_emp_dept FOREIGN KEY (dept_id) REFERENCES company_dept(id)\n)"
    ],
    "requiredPatterns": [],
    "explanation": "company_emp korporativ jadvali relyatsion yaxlitlik bilan yaratildi.",
    "task": "Create a table named `company_emp`: `passport_no` (varchar(20)), `first_name` (varchar(50) NOT NULL), `last_name` (varchar(50) NOT NULL), `salary` (numeric(10,2) NOT NULL), `dept_id` (integer NOT NULL), `CONSTRAINT pk_c_emp PRIMARY KEY (passport_no)`, `CONSTRAINT ck_c_emp_sal CHECK (salary > 0)`, `CONSTRAINT fk_c_emp_dept FOREIGN KEY (dept_id) REFERENCES company_dept(id)` bilan."
  },
  {
    "id": 149,
    "sector": 10,
    "difficulty": "Floor 10 • Hard",
    "source": "T03 Task 4 Complete • 1:1 Menejer Siklik Tashqi Kalit",
    "title": "Bo'lim Menejeri Siklik Foreign Keyini Bog'lash",
    "story": "Seminar 3 ning eng nozik nuqtasi: `company_dept` jadvalidagi `manager_passport_no` unikal column `company_emp(passport_no)` ga tashqi kalit qilib bog'lash (1:1 o'zaro bog'liqlik).",
    "taskUz": "`company_dept` table `fk_dept_mgr_emp` foreign keyini qo'shing: `manager_passport_no` -> `company_emp(passport_no)` ga.",
    "starterCode": "",
    "hint": "`ALTER TABLE company_dept ADD CONSTRAINT fk_dept_mgr_emp FOREIGN KEY (manager_passport_no) REFERENCES company_emp(passport_no)` .",
    "solutions": [
      "ALTER TABLE company_dept ADD CONSTRAINT fk_dept_mgr_emp FOREIGN KEY (manager_passport_no) REFERENCES company_emp(passport_no)",
      "ALTER TABLE company_dept\nADD CONSTRAINT fk_dept_mgr_emp FOREIGN KEY (manager_passport_no) REFERENCES company_emp(passport_no)"
    ],
    "requiredPatterns": [],
    "explanation": "Menejer and bo'lim o'rtasidagi 1:1 siklik tashqi kalit muvaffaqiyatli bog'landi.",
    "task": "`company_dept` table `fk_dept_mgr_emp` foreign keyini qo'shing: `manager_passport_no` -> `company_emp(passport_no)` ga."
  },
  {
    "id": 150,
    "sector": 10,
    "difficulty": "Floor 10 • Master Master Architect",
    "source": "ACADEMY DS Week 3 Final Exam • 150-Savol: Buyuk Arxitektor",
    "title": "150-Savol: Buyuk Arxitektor — Butun Korporativ Tizimni Sinovdan O'tkazish",
    "story": "Barcha 150 ta bosqichning mutlaq cho'qqisi! Chief Architect Atlas korporatsiyaning oxirgi sinovi sifatida `audit_trail` monitoring jadvalini barcha DDL talablari bilan talab qilmoqda: Identity orqali avtomatik ID, `table_name varchar(50) NOT NULL`, `operation_type varchar(10) NOT NULL`, `performed_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`, `CONSTRAINT pk_audit_trail PRIMARY KEY (id)`, and operatsiya turi faqat 'INSERT', 'UPDATE' yoki 'DELETE' bo'lishini ta'minlovchi `CONSTRAINT ck_audit_op CHECK (operation_type IN ('INSERT', 'UPDATE', 'DELETE'))`.",
    "taskUz": "`audit_trail` nomli yakuniy nazorat jadvalini e'lon qiling: `id` (integer GENERATED ALWAYS AS IDENTITY), `table_name` (varchar(50) NOT NULL), `operation_type` (varchar(10) NOT NULL), `performed_at` (timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP), `CONSTRAINT pk_audit_trail PRIMARY KEY (id)` and `CONSTRAINT ck_audit_op CHECK (operation_type IN ('INSERT', 'UPDATE', 'DELETE'))` bilan.\n\n📋 **Kutilayotgan Relyatsion Sxema / DDL:**\n• Jadval: **audit_trail**\n• Ustunlar: `id` [PK] (integer), `table_name` [NOT NULL] (varchar(50)), `operation_type` [NOT NULL] (varchar(10)), `performed_at` [NOT NULL] (timestamp)\n• Cheklovlar: `pk_audit_trail`, `ck_audit_op`",
    "starterCode": "",
    "hint": "all columns, DEFAULT qiymatni, named PK and named CHECK IN cheklovlarini to'liq yozing.",
    "solutions": [
      "CREATE TABLE audit_trail (id integer GENERATED ALWAYS AS IDENTITY, table_name varchar(50) NOT NULL, operation_type varchar(10) NOT NULL, performed_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, CONSTRAINT pk_audit_trail PRIMARY KEY (id), CONSTRAINT ck_audit_op CHECK (operation_type IN ('INSERT', 'UPDATE', 'DELETE')))",
      "CREATE TABLE audit_trail (\n  id integer GENERATED ALWAYS AS IDENTITY,\n  table_name varchar(50) NOT NULL,\n  operation_type varchar(10) NOT NULL,\n  performed_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,\n  CONSTRAINT pk_audit_trail PRIMARY KEY (id),\n  CONSTRAINT ck_audit_op CHECK (operation_type IN ('INSERT', 'UPDATE', 'DELETE'))\n)"
    ],
    "requiredPatterns": [],
    "expectedSchema": {
      "tableName": "audit_trail",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true,
          "hasIdentity": true
        },
        {
          "name": "table_name",
          "type": "varchar(50)",
          "isNotNull": true
        },
        {
          "name": "operation_type",
          "type": "varchar(10)",
          "isNotNull": true
        },
        {
          "name": "performed_at",
          "type": "timestamp",
          "isNotNull": true
        }
      ],
      "requiredConstraints": [
        "pk_audit_trail",
        "ck_audit_op"
      ]
    },
    "explanation": "🏆 TABRIKLAYMIZ! Siz Academy Database Systems (MODULE) Week 3 bo'yicha barcha 150 ta SQL DDL and Relyatsion Algebra sinovlarini to'liq zabt etib, 'Bosh Tizim Arxitektori' (Master Database Architect) unvoniga erishdingiz!",
    "task": "`audit_trail` nomli yakuniy nazorat jadvalini e'lon qiling: `id` (integer GENERATED ALWAYS AS IDENTITY), `table_name` (varchar(50) NOT NULL), `operation_type` (varchar(10) NOT NULL), `performed_at` (timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP), `CONSTRAINT pk_audit_trail PRIMARY KEY (id)` and `CONSTRAINT ck_audit_op CHECK (operation_type IN ('INSERT', 'UPDATE', 'DELETE'))` bilan."
  }
];
