// WIUT Database Systems (5BUIS009C) Week 3 - QUESTIONS_1_50
// Auto-generated comprehensive curriculum (150 Challenges)
window.QUESTIONS_1_50 = [
  {
    "id": 1,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "T03 Prepare Workspace • Schema va Qidiruv Yo'li",
    "title": "Set Working Schema (search_path)",
    "story": "Laboratoriya serverida yangi DDL amaliyotini boshlayapmiz. Tizim jadvallarni to'g'ri izlashi uchun qidiruv yo'lini `ddl_lab` va `public` ga yo'naltirish lozim.",
    "taskUz": "PostgreSQL qidiruv yo'lini (`search_path`) joriy sessiya uchun `ddl_lab` va `public` sxemalariga o'rnating.\n\n📋 **Kutilayotgan DDL:**\n`SET search_path TO ddl_lab, public;`",
    "hint": "`SET search_path TO ddl_lab, public;` deb yozing.",
    "solutions": [
      "SET search_path TO ddl_lab, public",
      "SET search_path TO ddl_lab, public;",
      "set search_path to ddl_lab, public",
      "set search_path to ddl_lab, public;",
      "SET search_path = ddl_lab, public",
      "SET search_path = ddl_lab, public;",
      "set search_path = ddl_lab, public",
      "set search_path = ddl_lab, public;",
      "SET search_path TO ddl_lab,public",
      "SET search_path TO ddl_lab,public;",
      "set search_path to ddl_lab,public",
      "set search_path to ddl_lab,public;",
      "SET search_path = ddl_lab,public",
      "SET search_path = ddl_lab,public;",
      "set search_path = ddl_lab,public",
      "set search_path = ddl_lab,public;"
    ],
    "explanation": "PostgreSQL qidiruv sxemasi muvaffaqiyatli ddl_lab ga yo'naltirildi.",
    "expectedSchema": {
      "operation": "SET_SEARCH_PATH",
      "action": "SET search_path",
      "target": "ddl_lab, public",
      "title": "PostgreSQL Session Configuration",
      "description": "Qidiruv sxemasi (search_path) ddl_lab va public ga yo'naltirildi."
    }
  },
  {
    "id": 2,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "T03 Prepare Workspace • Tizim Holatini Tekshirish",
    "title": "Check System Information",
    "story": "Dastlabki ulanishda joriy ma'lumotlar bazasi nomi, tizim foydalanuvchisi va PostgreSQL versiyasini so'rov orqali aniqlang.",
    "taskUz": "Joriy ma'lumotlar bazasi, foydalanuvchi va server versiyasini chiqaruvchi standart PostgreSQL funksiyalarini chaqiring: `SELECT current_database(), current_user, version();`",
    "hint": "`SELECT current_database(), current_user, version();` ni kiriting.",
    "solutions": [
      "SELECT current_database(), current_user, version()",
      "SELECT current_database(), current_user, version();",
      "select current_database(), current_user, version()",
      "select current_database(), current_user, version();"
    ],
    "explanation": "PostgreSQL server tizim axborotlari muvaffaqiyatli olindi.",
    "expectedSchema": {
      "operation": "SYSTEM_QUERY",
      "title": "PostgreSQL Diagnostic Query",
      "description": "Sessiya metama'lumotlari: current_database(), current_user, version()."
    }
  },
  {
    "id": 3,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "T03 Prepare Workspace • Sxema Yaratish",
    "title": "Create ddl_lab Schema",
    "story": "O'quv laboratoriyasi uchun alohida nom maydoni (namespace) yaratish talab qilinadi.",
    "taskUz": "`ddl_lab` nomli yangi PostgreSQL sxemasini yarating.\n\n📋 **Kutilayotgan DDL:**\n`CREATE SCHEMA ddl_lab;`",
    "hint": "`CREATE SCHEMA ddl_lab;` deb yozing.",
    "solutions": [
      "CREATE SCHEMA ddl_lab",
      "CREATE SCHEMA ddl_lab;",
      "create schema ddl_lab",
      "create schema ddl_lab;"
    ],
    "explanation": "ddl_lab nomli yangi sxema muvaffaqiyatli yaratildi.",
    "expectedSchema": {
      "operation": "SCHEMA",
      "action": "CREATE SCHEMA",
      "target": "ddl_lab",
      "title": "Schema Namespace Foundry",
      "description": "ddl_lab nomli ma'lumotlar sxemasi yaratildi."
    }
  },
  {
    "id": 4,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "T03 Task 1 Intro • Oddiy Filial Jadvali",
    "title": "Core Branch Table",
    "story": "Kompaniya filiallarni ro'yxatga olish uchun eng sodda jadval yaratmoqchi. Filial kodi (id) va nomi (name) bo'lishi kifoya.",
    "taskUz": "`branch` nomli jadval yarating: ustunlari `id` (integer) va `name` (varchar(50)).\n\n📋 **Kutilayotgan Relyatsion Sxema:**\n• Jadval: **branch**\n• Ustunlar: `id integer`, `name varchar(50)`",
    "hint": "`CREATE TABLE branch (id integer, name varchar(50));`",
    "solutions": [
      "CREATE TABLE branch (id integer, name varchar(50))",
      "CREATE TABLE branch (id integer, name varchar(50));",
      "create table branch (id integer, name varchar(50))",
      "create table branch (id integer, name varchar(50));",
      "CREATE TABLE branch (id int, name varchar(50))",
      "CREATE TABLE branch (id int, name varchar(50));",
      "create table branch (id int, name varchar(50))",
      "create table branch (id int, name varchar(50));",
      "CREATE TABLE branch (\n  id integer,\n  name varchar(50)\n)",
      "CREATE TABLE branch (\n  id integer,\n  name varchar(50)\n);",
      "CREATE TABLE branch ( id integer, name varchar(50) )",
      "CREATE TABLE branch ( id integer, name varchar(50) );",
      "create table branch (\n  id integer,\n  name varchar(50)\n)",
      "create table branch (\n  id integer,\n  name varchar(50)\n);"
    ],
    "explanation": "branch jadvali oddiy integer va varchar turlari bilan yaratildi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
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
    }
  },
  {
    "id": 5,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "T03 Task 1 Intro • Sana Ma'lumot Turi",
    "title": "Staff Registry Table va Qabul Sanasi",
    "story": "Kadrlar bo'limi xodimlarning ismi va ishga qabul qilingan sanasini (hire_date) qayd etuvchi oddiy struktura so'radi.",
    "taskUz": "`staff` nomli jadval yarating: ustunlari `id` (integer), `full_name` (varchar(100)) va `hire_date` (date).\n\n📋 **Kutilayotgan Sxema:**\n• Jadval: **staff**\n• Ustunlar: `id integer`, `full_name varchar(100)`, `hire_date date`",
    "hint": "`CREATE TABLE staff (id integer, full_name varchar(100), hire_date date);`",
    "solutions": [
      "CREATE TABLE staff (id integer, full_name varchar(100), hire_date date)",
      "CREATE TABLE staff (id integer, full_name varchar(100), hire_date date);",
      "create table staff (id integer, full_name varchar(100), hire_date date)",
      "create table staff (id integer, full_name varchar(100), hire_date date);",
      "CREATE TABLE staff (id int, full_name varchar(100), hire_date date)",
      "CREATE TABLE staff (id int, full_name varchar(100), hire_date date);",
      "create table staff (id int, full_name varchar(100), hire_date date)",
      "create table staff (id int, full_name varchar(100), hire_date date);",
      "CREATE TABLE staff (\n  id integer,\n  full_name varchar(100),\n  hire_date date\n)",
      "CREATE TABLE staff (\n  id integer,\n  full_name varchar(100),\n  hire_date date\n);",
      "CREATE TABLE staff ( id integer, full_name varchar(100), hire_date date )",
      "CREATE TABLE staff ( id integer, full_name varchar(100), hire_date date );",
      "create table staff (\n  id integer,\n  full_name varchar(100),\n  hire_date date\n)",
      "create table staff (\n  id integer,\n  full_name varchar(100),\n  hire_date date\n);"
    ],
    "explanation": "staff jadvali date turi bilan muvaffaqiyatli shakllantirildi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
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
    }
  },
  {
    "id": 6,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L03 Slide 16 • Aniq Moliyaviy Numeric Turi",
    "title": "Mahsulotlar va Aniq Narx Maydoni",
    "story": "Omborxona uchun mahsulotlar jadvali kerak. Moliyaviy hisob-kitoblar uchun narx tiyingacha aniq saqlanishi shart (numeric(10,2)).",
    "taskUz": "`product` nomli jadval yarating: `item_no` (integer), `title` (varchar(80)) va `price` (numeric(10,2)).\n\n📋 **Kutilayotgan Sxema:**\n• Jadval: **product**\n• Ustunlar: `item_no integer`, `title varchar(80)`, `price numeric(10,2)`",
    "hint": "`CREATE TABLE product (item_no integer, title varchar(80), price numeric(10,2));`",
    "solutions": [
      "CREATE TABLE product (item_no integer, title varchar(80), price numeric(10,2))",
      "CREATE TABLE product (item_no integer, title varchar(80), price numeric(10,2));",
      "create table product (item_no integer, title varchar(80), price numeric(10,2))",
      "create table product (item_no integer, title varchar(80), price numeric(10,2));",
      "CREATE TABLE product (item_no int, title varchar(80), price numeric(10,2))",
      "CREATE TABLE product (item_no int, title varchar(80), price numeric(10,2));",
      "create table product (item_no int, title varchar(80), price numeric(10,2))",
      "create table product (item_no int, title varchar(80), price numeric(10,2));",
      "CREATE TABLE product (\n  item_no integer,\n  title varchar(80),\n  price numeric(10,2)\n)",
      "CREATE TABLE product (\n  item_no integer,\n  title varchar(80),\n  price numeric(10,2)\n);",
      "CREATE TABLE product ( item_no integer, title varchar(80), price numeric(10,2) )",
      "CREATE TABLE product ( item_no integer, title varchar(80), price numeric(10,2) );",
      "create table product (\n  item_no integer,\n  title varchar(80),\n  price numeric(10,2)\n)",
      "create table product (\n  item_no integer,\n  title varchar(80),\n  price numeric(10,2)\n);"
    ],
    "explanation": "product jadvali aniq numeric(10,2) turi bilan barpo etildi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
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
    }
  },
  {
    "id": 7,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "T03 Task 1 • Bo'limlar Boshlang'ich Sxemasi",
    "title": "Department Boshlang'ich Jadvali",
    "story": "Seminar 3 ning 1-topshirig'i boshlanmoqda. Kompaniya bo'limlari uchun boshlang'ich jadval strukturasi talab qilinmoqda.",
    "taskUz": "`department` nomli jadval yarating: `id` (integer), `title` (varchar(100)), `location` (varchar(50)) va `budget` (numeric(12,2)).\n\n📋 **Kutilayotgan Sxema:**\n• Jadval: **department**\n• Ustunlar: `id integer`, `title varchar(100)`, `location varchar(50)`, `budget numeric(12,2)`",
    "hint": "`CREATE TABLE department (id integer, title varchar(100), location varchar(50), budget numeric(12,2));`",
    "solutions": [
      "CREATE TABLE department (id integer, title varchar(100), location varchar(50), budget numeric(12,2))",
      "CREATE TABLE department (id integer, title varchar(100), location varchar(50), budget numeric(12,2));",
      "create table department (id integer, title varchar(100), location varchar(50), budget numeric(12,2))",
      "create table department (id integer, title varchar(100), location varchar(50), budget numeric(12,2));",
      "CREATE TABLE department (id int, title varchar(100), location varchar(50), budget numeric(12,2))",
      "CREATE TABLE department (id int, title varchar(100), location varchar(50), budget numeric(12,2));",
      "create table department (id int, title varchar(100), location varchar(50), budget numeric(12,2))",
      "create table department (id int, title varchar(100), location varchar(50), budget numeric(12,2));"
    ],
    "explanation": "department boshlang'ich relyatsion jadvali yaratildi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
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
    }
  },
  {
    "id": 8,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L03 Slide 15 • Boolean Mantiqiy Turi",
    "title": "Project Status va Boolean Bayrog'i",
    "story": "Loyihalar holatini faol yoki nofaol ekanligini ifodalash uchun mantiqiy boolean turidan foydalaniladi.",
    "taskUz": "`project_status` nomli jadval yarating: `code` (varchar(10)) va `is_active` (boolean).\n\n📋 **Kutilayotgan Sxema:**\n• Jadval: **project_status**\n• Ustunlar: `code varchar(10)`, `is_active boolean`",
    "hint": "`CREATE TABLE project_status (code varchar(10), is_active boolean);`",
    "solutions": [
      "CREATE TABLE project_status (code varchar(10), is_active boolean)",
      "CREATE TABLE project_status (code varchar(10), is_active boolean);",
      "create table project_status (code varchar(10), is_active boolean)",
      "create table project_status (code varchar(10), is_active boolean);",
      "CREATE TABLE project_status (code varchar(10), is_active bool)",
      "CREATE TABLE project_status (code varchar(10), is_active bool);",
      "create table project_status (code varchar(10), is_active bool)",
      "create table project_status (code varchar(10), is_active bool);"
    ],
    "explanation": "boolean mantiqiy maydonli jadval tuzildi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
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
    }
  },
  {
    "id": 9,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L03 Slide 16 • Timestamp Vaqt Tamg'asi",
    "title": "Audit Log va Timestamp Turi",
    "story": "Xavfsizlik audit jurnali hodisa yuz bergan aniq vaqtni (yil, oy, kun, soat, daqiqa, soniya) saqlashi lozim.",
    "taskUz": "`audit_log` nomli jadval yarating: `log_id` (integer), `action` (varchar(50)) va `occurred_at` (timestamp).\n\n📋 **Kutilayotgan Sxema:**\n• Jadval: **audit_log**\n• Ustunlar: `log_id integer`, `action varchar(50)`, `occurred_at timestamp`",
    "hint": "`CREATE TABLE audit_log (log_id integer, action varchar(50), occurred_at timestamp);`",
    "solutions": [
      "CREATE TABLE audit_log (log_id integer, action varchar(50), occurred_at timestamp)",
      "CREATE TABLE audit_log (log_id integer, action varchar(50), occurred_at timestamp);",
      "create table audit_log (log_id integer, action varchar(50), occurred_at timestamp)",
      "create table audit_log (log_id integer, action varchar(50), occurred_at timestamp);",
      "CREATE TABLE audit_log (log_id int, action varchar(50), occurred_at timestamp)",
      "CREATE TABLE audit_log (log_id int, action varchar(50), occurred_at timestamp);",
      "create table audit_log (log_id int, action varchar(50), occurred_at timestamp)",
      "create table audit_log (log_id int, action varchar(50), occurred_at timestamp);"
    ],
    "explanation": "timestamp vaqt tamg'asi maydoni bilan audit jurnali yaratildi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
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
    }
  },
  {
    "id": 10,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L03 Slide 16 • Text Katta Matn Turi",
    "title": "Employee Profile va Cheklanmagan Text Turi",
    "story": "Xodimlarning erkin tarjimai holi (bio) varchar bilan cheklanmasligi, katta hajmda yozilishi mumkin bo'lishi kerak.",
    "taskUz": "`employee_profile` nomli jadval yarating: `emp_id` (integer), `bio` (text) va `joined_on` (date).\n\n📋 **Kutilayotgan Sxema:**\n• Jadval: **employee_profile**\n• Ustunlar: `emp_id integer`, `bio text`, `joined_on date`",
    "hint": "`CREATE TABLE employee_profile (emp_id integer, bio text, joined_on date);`",
    "solutions": [
      "CREATE TABLE employee_profile (emp_id integer, bio text, joined_on date)",
      "CREATE TABLE employee_profile (emp_id integer, bio text, joined_on date);",
      "create table employee_profile (emp_id integer, bio text, joined_on date)",
      "create table employee_profile (emp_id integer, bio text, joined_on date);",
      "CREATE TABLE employee_profile (emp_id int, bio text, joined_on date)",
      "CREATE TABLE employee_profile (emp_id int, bio text, joined_on date);",
      "create table employee_profile (emp_id int, bio text, joined_on date)",
      "create table employee_profile (emp_id int, bio text, joined_on date);"
    ],
    "explanation": "Cheklanmagan text turi bilan tarjimai hol maydoni yaratildi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
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
    }
  },
  {
    "id": 11,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "T03 Task 1 • Invoyslar Jadvali",
    "title": "Invoices va To'lov Holati",
    "story": "Hisob-kitob bo'limi invoys raqami, jami summa va to'langanlik bayrog'ini saqlovchi jadval so'ramoqda.",
    "taskUz": "`invoice` nomli jadval yarating: `inv_no` (integer), `total_amount` (numeric(12,2)) va `paid` (boolean).\n\n📋 **Kutilayotgan Sxema:**\n• Jadval: **invoice**\n• Ustunlar: `inv_no integer`, `total_amount numeric(12,2)`, `paid boolean`",
    "hint": "`CREATE TABLE invoice (inv_no integer, total_amount numeric(12,2), paid boolean);`",
    "solutions": [
      "CREATE TABLE invoice (inv_no integer, total_amount numeric(12,2), paid boolean)",
      "CREATE TABLE invoice (inv_no integer, total_amount numeric(12,2), paid boolean);",
      "create table invoice (inv_no integer, total_amount numeric(12,2), paid boolean)",
      "create table invoice (inv_no integer, total_amount numeric(12,2), paid boolean);",
      "CREATE TABLE invoice (inv_no int, total_amount numeric(12,2), paid boolean)",
      "CREATE TABLE invoice (inv_no int, total_amount numeric(12,2), paid boolean);",
      "create table invoice (inv_no int, total_amount numeric(12,2), paid boolean)",
      "create table invoice (inv_no int, total_amount numeric(12,2), paid boolean);"
    ],
    "explanation": "invoice jadvali yaratildi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
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
    }
  },
  {
    "id": 12,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L03 Slide 16 • Kesh Jadvali",
    "title": "Katta Hajmli Kesh Jadvali (temp_cache)",
    "story": "Tizim tezkor qidiruv uchun vaqtinchalik kalit-qiymat kesh jadvalini hosil qilmoqda.",
    "taskUz": "`temp_cache` nomli jadval yarating: `cache_key` (varchar(50)) va `cache_val` (text).\n\n📋 **Kutilayotgan Sxema:**\n• Jadval: **temp_cache**\n• Ustunlar: `cache_key varchar(50)`, `cache_val text`",
    "hint": "`CREATE TABLE temp_cache (cache_key varchar(50), cache_val text);`",
    "solutions": [
      "CREATE TABLE temp_cache (cache_key varchar(50), cache_val text)",
      "CREATE TABLE temp_cache (cache_key varchar(50), cache_val text);",
      "create table temp_cache (cache_key varchar(50), cache_val text)",
      "create table temp_cache (cache_key varchar(50), cache_val text);"
    ],
    "explanation": "temp_cache jadvali barpo etildi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
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
    }
  },
  {
    "id": 13,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L03 Slide 25 • DROP TABLE IF EXISTS",
    "title": "Vaqtinchalik Jadvalni O'chirish (DROP)",
    "story": "Kesh muddati tugadi. Endi `temp_cache` jadvalini mavjud bo'lsa xatoliksiz xavfsiz o'chirish lozim.",
    "taskUz": "`temp_cache` jadvalini agar mavjud bo'lsa o'chiring (`DROP TABLE IF EXISTS ...`).\n\n📋 **Kutilayotgan DDL:**\n`DROP TABLE IF EXISTS temp_cache;`",
    "hint": "`DROP TABLE IF EXISTS temp_cache;` deb yozing.",
    "solutions": [
      "DROP TABLE IF EXISTS temp_cache",
      "DROP TABLE IF EXISTS temp_cache;",
      "drop table if exists temp_cache",
      "drop table if exists temp_cache;"
    ],
    "explanation": "temp_cache jadvali bazadan xavfsiz o'chirildi.",
    "expectedSchema": {
      "operation": "DROP_TABLE",
      "tableName": "temp_cache",
      "ifExists": true,
      "description": "Vaqtinchalik 'temp_cache' jadvali xavfsiz o'chirildi."
    }
  },
  {
    "id": 14,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "T03 Task 1 • Mijozlar Balansi",
    "title": "Client Balans Jadvali",
    "story": "Katta korporativ mijozlar balansi 14 xonali va 2 xonasi tiyin bo'lgan yuqori aniqlikdagi numeric turini talab qiladi.",
    "taskUz": "`client` nomli jadval yarating: `client_id` (integer), `company_name` (varchar(120)) va `balance` (numeric(14,2)).\n\n📋 **Kutilayotgan Sxema:**\n• Jadval: **client**\n• Ustunlar: `client_id integer`, `company_name varchar(120)`, `balance numeric(14,2)`",
    "hint": "`CREATE TABLE client (client_id integer, company_name varchar(120), balance numeric(14,2));`",
    "solutions": [
      "CREATE TABLE client (client_id integer, company_name varchar(120), balance numeric(14,2))",
      "CREATE TABLE client (client_id integer, company_name varchar(120), balance numeric(14,2));",
      "create table client (client_id integer, company_name varchar(120), balance numeric(14,2))",
      "create table client (client_id integer, company_name varchar(120), balance numeric(14,2));",
      "CREATE TABLE client (client_id int, company_name varchar(120), balance numeric(14,2))",
      "CREATE TABLE client (client_id int, company_name varchar(120), balance numeric(14,2));",
      "create table client (client_id int, company_name varchar(120), balance numeric(14,2))",
      "create table client (client_id int, company_name varchar(120), balance numeric(14,2));"
    ],
    "explanation": "client jadvali numeric(14,2) bilan yaratildi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
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
    }
  },
  {
    "id": 15,
    "sector": 1,
    "difficulty": "Floor 1 • Boss Challenge",
    "source": "1-Qavat Bossi • Barcha Boshlang'ich Turlar Sintezi",
    "title": "1-Qavat Bossi: Tashkiliy Birlik Arxitekturasi",
    "story": "1-qavatning yakuniy sinov vazifasi: integer, varchar, numeric, boolean va timestamp ma'lumot turlarini yagona jadvalda sintez qiling.",
    "taskUz": "`organization_unit` nomli jadval yarating: `unit_id` (integer), `unit_name` (varchar(100)), `operational_budget` (numeric(15,2)), `active` (boolean) va `created_at` (timestamp).\n\n📋 **Kutilayotgan Sxema:**\n• Jadval: **organization_unit**\n• Ustunlar: `unit_id integer`, `unit_name varchar(100)`, `operational_budget numeric(15,2)`, `active boolean`, `created_at timestamp`",
    "hint": "`CREATE TABLE organization_unit (unit_id integer, unit_name varchar(100), operational_budget numeric(15,2), active boolean, created_at timestamp);`",
    "solutions": [
      "CREATE TABLE organization_unit (unit_id integer, unit_name varchar(100), operational_budget numeric(15,2), active boolean, created_at timestamp)",
      "CREATE TABLE organization_unit (unit_id integer, unit_name varchar(100), operational_budget numeric(15,2), active boolean, created_at timestamp);",
      "create table organization_unit (unit_id integer, unit_name varchar(100), operational_budget numeric(15,2), active boolean, created_at timestamp)",
      "create table organization_unit (unit_id integer, unit_name varchar(100), operational_budget numeric(15,2), active boolean, created_at timestamp);",
      "CREATE TABLE organization_unit (unit_id int, unit_name varchar(100), operational_budget numeric(15,2), active bool, created_at timestamp)",
      "CREATE TABLE organization_unit (unit_id int, unit_name varchar(100), operational_budget numeric(15,2), active bool, created_at timestamp);",
      "create table organization_unit (unit_id int, unit_name varchar(100), operational_budget numeric(15,2), active bool, created_at timestamp)",
      "create table organization_unit (unit_id int, unit_name varchar(100), operational_budget numeric(15,2), active bool, created_at timestamp);"
    ],
    "explanation": "1-Qavat Bossi muvaffaqiyatli bajarildi! Barcha asosiy ma'lumot turlari o'zlashtirildi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
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
    }
  },
  {
    "id": 16,
    "sector": 2,
    "difficulty": "Floor 2 • Easy",
    "source": "T03 Task 1 • Ustun Darajasidagi Birlamchi Kalit",
    "title": "Column-level Primary Key",
    "story": "Jadvaldagi har bir satr takrorlanmas unikal identifikatorga ega bo'lishi shart. Buni ustun darajasidagi `PRIMARY KEY` orqali ta'minlaymiz.",
    "taskUz": "`department` nomli jadval yarating: `id` (integer PRIMARY KEY), `title` (varchar(100)) va `location` (varchar(50)).\n\n📋 **Kutilayotgan Sxema:**\n• Jadval: **department**\n• Ustunlar: `id integer PRIMARY KEY`, `title varchar(100)`, `location varchar(50)`",
    "hint": "`CREATE TABLE department (id integer PRIMARY KEY, title varchar(100), location varchar(50));`",
    "solutions": [
      "CREATE TABLE department (id integer PRIMARY KEY, title varchar(100), location varchar(50))",
      "CREATE TABLE department (id integer PRIMARY KEY, title varchar(100), location varchar(50));",
      "create table department (id integer primary key, title varchar(100), location varchar(50))",
      "create table department (id integer primary key, title varchar(100), location varchar(50));",
      "CREATE TABLE department (id int PRIMARY KEY, title varchar(100), location varchar(50))",
      "CREATE TABLE department (id int PRIMARY KEY, title varchar(100), location varchar(50));",
      "create table department (id int primary key, title varchar(100), location varchar(50))",
      "create table department (id int primary key, title varchar(100), location varchar(50));",
      "CREATE TABLE department (\n  id integer PRIMARY KEY,\n  title varchar(100),\n  location varchar(50)\n)",
      "CREATE TABLE department (\n  id integer PRIMARY KEY,\n  title varchar(100),\n  location varchar(50)\n);",
      "CREATE TABLE department ( id integer PRIMARY KEY, title varchar(100), location varchar(50) )",
      "CREATE TABLE department ( id integer PRIMARY KEY, title varchar(100), location varchar(50) );",
      "create table department (\n  id integer primary key,\n  title varchar(100),\n  location varchar(50)\n)",
      "create table department (\n  id integer primary key,\n  title varchar(100),\n  location varchar(50)\n);"
    ],
    "explanation": "Ustun darajasidagi PRIMARY KEY bilan department jadvali tuzildi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
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
        },
        {
          "name": "location",
          "type": "varchar(50)"
        }
      ]
    }
  },
  {
    "id": 17,
    "sector": 2,
    "difficulty": "Floor 2 • Easy",
    "source": "L03 Slide 20 • Jadval Darajasidagi Birlamchi Kalit",
    "title": "Table-level Named Primary Key",
    "story": "Katta loyihalarda cheklovlarga aniq nom berish yaxshi amaliyot sanaladi (`CONSTRAINT pk_... PRIMARY KEY`).",
    "taskUz": "`department` nomli jadval yarating va `pk_department` nomli jadval darajasidagi birlamchi kalit belgilang.\n\n📋 **Kutilayotgan Sxema:**\n• Jadval: **department**\n• Ustunlar: `id integer`, `title varchar(100)`\n• Cheklov: `CONSTRAINT pk_department PRIMARY KEY (id)`",
    "hint": "`CREATE TABLE department (id integer, title varchar(100), CONSTRAINT pk_department PRIMARY KEY (id));`",
    "solutions": [
      "CREATE TABLE department (id integer, title varchar(100), CONSTRAINT pk_department PRIMARY KEY (id))",
      "CREATE TABLE department (id integer, title varchar(100), CONSTRAINT pk_department PRIMARY KEY (id));",
      "create table department (id integer, title varchar(100), constraint pk_department primary key (id))",
      "create table department (id integer, title varchar(100), constraint pk_department primary key (id));",
      "CREATE TABLE department (id int, title varchar(100), CONSTRAINT pk_department PRIMARY KEY (id))",
      "CREATE TABLE department (id int, title varchar(100), CONSTRAINT pk_department PRIMARY KEY (id));",
      "create table department (id int, title varchar(100), constraint pk_department primary key (id))",
      "create table department (id int, title varchar(100), constraint pk_department primary key (id));"
    ],
    "explanation": "Aniq nomlangan pk_department birlamchi kaliti yaratildi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
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
      ]
    }
  },
  {
    "id": 18,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "T03 Task 1 • GENERATED ALWAYS AS IDENTITY",
    "title": "SQL Standard GENERATED ALWAYS AS IDENTITY",
    "story": "PostgreSQL 10+ versiyalarida SQL standartidagi `GENERATED ALWAYS AS IDENTITY` xavfsiz avtomatik inkrementni kafolatlaydi.",
    "taskUz": "`department` jadvalini yarating: `id` (integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY) va `title` (varchar(100)).\n\n📋 **Kutilayotgan Sxema:**\n• Jadval: **department**\n• Ustunlar: `id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY`, `title varchar(100)`",
    "hint": "`CREATE TABLE department (id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY, title varchar(100));`",
    "solutions": [
      "CREATE TABLE department (id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY, title varchar(100))",
      "CREATE TABLE department (id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY, title varchar(100));",
      "create table department (id integer generated always as identity primary key, title varchar(100))",
      "create table department (id integer generated always as identity primary key, title varchar(100));",
      "CREATE TABLE department (id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY, title varchar(100))",
      "CREATE TABLE department (id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY, title varchar(100));",
      "create table department (id int generated always as identity primary key, title varchar(100))",
      "create table department (id int generated always as identity primary key, title varchar(100));"
    ],
    "explanation": "SQL standartidagi GENERATED ALWAYS identity kaliti muvaffaqiyatli tatbiq etildi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
      "tableName": "department",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true,
          "isIdentity": true
        },
        {
          "name": "title",
          "type": "varchar(100)"
        }
      ]
    }
  },
  {
    "id": 19,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "L03 Slide 21 • GENERATED BY DEFAULT AS IDENTITY",
    "title": "GENERATED BY DEFAULT AS IDENTITY Moslashuvchanligi",
    "story": "Foydalanuvchi o'zi id kiritishini ham istisno hollarda qo'llab-quvvatlash uchun `BY DEFAULT` ishlatiladi.",
    "taskUz": "`department` jadvalini `id` ustuni `GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY` bo'lgan holda yarating.\n\n📋 **Kutilayotgan Sxema:**\n• Jadval: **department**\n• Ustunlar: `id integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY`, `title varchar(100)`",
    "hint": "`CREATE TABLE department (id integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY, title varchar(100));`",
    "solutions": [
      "CREATE TABLE department (id integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY, title varchar(100))",
      "CREATE TABLE department (id integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY, title varchar(100));",
      "create table department (id integer generated by default as identity primary key, title varchar(100))",
      "create table department (id integer generated by default as identity primary key, title varchar(100));",
      "CREATE TABLE department (id int GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY, title varchar(100))",
      "CREATE TABLE department (id int GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY, title varchar(100));",
      "create table department (id int generated by default as identity primary key, title varchar(100))",
      "create table department (id int generated by default as identity primary key, title varchar(100));"
    ],
    "explanation": "GENERATED BY DEFAULT AS IDENTITY bilan moslashuvchan kalit hosil qilindi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
      "tableName": "department",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true,
          "isIdentity": true
        },
        {
          "name": "title",
          "type": "varchar(100)"
        }
      ]
    }
  },
  {
    "id": 20,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "T03 Task 6 • Sequence Parametrlari (START WITH / INCREMENT)",
    "title": "Identity Sequence Parametrlari",
    "story": "Tashkilot bo'lim raqamlari 100 dan boshlanib, 10 qadam bilan oshishi talab etiladi.",
    "taskUz": "`department` jadvalini yarating: `id` (integer GENERATED ALWAYS AS IDENTITY (START WITH 100 INCREMENT BY 10) PRIMARY KEY) va `title` (varchar(100)).\n\n📋 **Kutilayotgan Sxema:**\n• Ustun: `id integer GENERATED ALWAYS AS IDENTITY (START WITH 100 INCREMENT BY 10) PRIMARY KEY`",
    "hint": "`CREATE TABLE department (id integer GENERATED ALWAYS AS IDENTITY (START WITH 100 INCREMENT BY 10) PRIMARY KEY, title varchar(100));`",
    "solutions": [
      "CREATE TABLE department (id integer GENERATED ALWAYS AS IDENTITY (START WITH 100 INCREMENT BY 10) PRIMARY KEY, title varchar(100))",
      "CREATE TABLE department (id integer GENERATED ALWAYS AS IDENTITY (START WITH 100 INCREMENT BY 10) PRIMARY KEY, title varchar(100));",
      "create table department (id integer generated always as identity (start with 100 increment by 10) primary key, title varchar(100))",
      "create table department (id integer generated always as identity (start with 100 increment by 10) primary key, title varchar(100));",
      "CREATE TABLE department (id int GENERATED ALWAYS AS IDENTITY (START WITH 100 INCREMENT BY 10) PRIMARY KEY, title varchar(100))",
      "CREATE TABLE department (id int GENERATED ALWAYS AS IDENTITY (START WITH 100 INCREMENT BY 10) PRIMARY KEY, title varchar(100));",
      "create table department (id int generated always as identity (start with 100 increment by 10) primary key, title varchar(100))",
      "create table department (id int generated always as identity (start with 100 increment by 10) primary key, title varchar(100));"
    ],
    "explanation": "Ketma-ketlik (sequence) maxsus parametrlar bilan ishga tushirildi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
      "tableName": "department",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true,
          "isIdentity": true
        },
        {
          "name": "title",
          "type": "varchar(100)"
        }
      ]
    }
  },
  {
    "id": 21,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "T03 Task 1 • Composite Primary Key (title, location)",
    "title": "Bo'limlar uchun Murakkab Birlamchi Kalit (Composite PK)",
    "story": "Seminar 3 1-topshirig'i: Bir xil nomli bo'lim faqat boshqa shaharda ochilishi mumkin. Shuning uchun (title, location) birgalikda unikal bo'lishi kerak.",
    "taskUz": "`department` nomli jadval yarating: `id` (integer), `title` (varchar(100)), `location` (varchar(50)) va `budget` (numeric(12,2)). Birlamchi kalit: `PRIMARY KEY (title, location)`.\n\n📋 **Kutilayotgan Sxema:**\n• Birlamchi kalit: `PRIMARY KEY (title, location)`",
    "hint": "`CREATE TABLE department (id integer, title varchar(100), location varchar(50), budget numeric(12,2), PRIMARY KEY (title, location));`",
    "solutions": [
      "CREATE TABLE department (id integer, title varchar(100), location varchar(50), budget numeric(12,2), PRIMARY KEY (title, location))",
      "CREATE TABLE department (id integer, title varchar(100), location varchar(50), budget numeric(12,2), PRIMARY KEY (title, location));",
      "create table department (id integer, title varchar(100), location varchar(50), budget numeric(12,2), primary key (title, location))",
      "create table department (id integer, title varchar(100), location varchar(50), budget numeric(12,2), primary key (title, location));",
      "CREATE TABLE department (id int, title varchar(100), location varchar(50), budget numeric(12,2), PRIMARY KEY (title, location))",
      "CREATE TABLE department (id int, title varchar(100), location varchar(50), budget numeric(12,2), PRIMARY KEY (title, location));",
      "create table department (id int, title varchar(100), location varchar(50), budget numeric(12,2), primary key (title, location))",
      "create table department (id int, title varchar(100), location varchar(50), budget numeric(12,2), primary key (title, location));"
    ],
    "explanation": "Murakkab (composite) birlamchi kalit (title, location) muvaffaqiyatli o'rnatildi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
      "tableName": "department",
      "columns": [
        {
          "name": "id",
          "type": "integer"
        },
        {
          "name": "title",
          "type": "varchar(100)",
          "isPK": true
        },
        {
          "name": "location",
          "type": "varchar(50)",
          "isPK": true
        },
        {
          "name": "budget",
          "type": "numeric(12,2)"
        }
      ]
    }
  },
  {
    "id": 22,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "T03 Task 1 • Loyihaga Biriktirish (assigned Jadvali)",
    "title": "Loyihaga Biriktirish (assigned) va Composite PK",
    "story": "Seminar 3 ning klassik ko'pga-ko'p (M:N) bog'lovchi `assigned` jadvali: xodim bitta loyihaga faqat bir marta biriktiriladi.",
    "taskUz": "`assigned` nomli jadval yarating: `emp_id` (integer), `proj_id` (integer), `role` (varchar(50)) va `PRIMARY KEY (emp_id, proj_id)`.\n\n📋 **Kutilayotgan Sxema:**\n• Ustunlar: `emp_id integer`, `proj_id integer`, `role varchar(50)`\n• Birlamchi kalit: `PRIMARY KEY (emp_id, proj_id)`",
    "hint": "`CREATE TABLE assigned (emp_id integer, proj_id integer, role varchar(50), PRIMARY KEY (emp_id, proj_id));`",
    "solutions": [
      "CREATE TABLE assigned (emp_id integer, proj_id integer, role varchar(50), PRIMARY KEY (emp_id, proj_id))",
      "CREATE TABLE assigned (emp_id integer, proj_id integer, role varchar(50), PRIMARY KEY (emp_id, proj_id));",
      "create table assigned (emp_id integer, proj_id integer, role varchar(50), primary key (emp_id, proj_id))",
      "create table assigned (emp_id integer, proj_id integer, role varchar(50), primary key (emp_id, proj_id));",
      "CREATE TABLE assigned (emp_id int, proj_id int, role varchar(50), PRIMARY KEY (emp_id, proj_id))",
      "CREATE TABLE assigned (emp_id int, proj_id int, role varchar(50), PRIMARY KEY (emp_id, proj_id));",
      "create table assigned (emp_id int, proj_id int, role varchar(50), primary key (emp_id, proj_id))",
      "create table assigned (emp_id int, proj_id int, role varchar(50), primary key (emp_id, proj_id));"
    ],
    "explanation": "assigned ko'pga-ko'p bog'lovchi jadvali composite PK bilan barpo etildi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
      "tableName": "assigned",
      "columns": [
        {
          "name": "emp_id",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "proj_id",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "role",
          "type": "varchar(50)"
        }
      ]
    }
  },
  {
    "id": 23,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "L03 Slide 20 • Ko'p Qiymatli Atribut Jadvali",
    "title": "Department Telefonlari (department_phone)",
    "story": "Bo'limning bir nechta telefon raqamlari bo'lishi mumkin. 1NF qoidasiga ko'ra har bir telefon alohida satrda saqlanadi.",
    "taskUz": "`department_phone` jadvalini yarating: `dept_id` (integer), `phone_number` (varchar(20)) va `PRIMARY KEY (dept_id, phone_number)`.\n\n📋 **Kutilayotgan Sxema:**\n• Birlamchi kalit: `PRIMARY KEY (dept_id, phone_number)`",
    "hint": "`CREATE TABLE department_phone (dept_id integer, phone_number varchar(20), PRIMARY KEY (dept_id, phone_number));`",
    "solutions": [
      "CREATE TABLE department_phone (dept_id integer, phone_number varchar(20), PRIMARY KEY (dept_id, phone_number))",
      "CREATE TABLE department_phone (dept_id integer, phone_number varchar(20), PRIMARY KEY (dept_id, phone_number));",
      "create table department_phone (dept_id integer, phone_number varchar(20), primary key (dept_id, phone_number))",
      "create table department_phone (dept_id integer, phone_number varchar(20), primary key (dept_id, phone_number));",
      "CREATE TABLE department_phone (dept_id int, phone_number varchar(20), PRIMARY KEY (dept_id, phone_number))",
      "CREATE TABLE department_phone (dept_id int, phone_number varchar(20), PRIMARY KEY (dept_id, phone_number));",
      "create table department_phone (dept_id int, phone_number varchar(20), primary key (dept_id, phone_number))",
      "create table department_phone (dept_id int, phone_number varchar(20), primary key (dept_id, phone_number));"
    ],
    "explanation": "Bo'lim telefonlari jadvali composite PK bilan hosil qilindi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
      "tableName": "department_phone",
      "columns": [
        {
          "name": "dept_id",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "phone_number",
          "type": "varchar(20)",
          "isPK": true
        }
      ]
    }
  },
  {
    "id": 24,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "T03 Task 1 • Nomlangan Composite Birlamchi Kalit",
    "title": "Nomlangan Composite PK Cheklovi",
    "story": "Relyatsion arxitekturada cheklovni aniq nomlash audit va kelajakdagi o'zgarishlar uchun qulaylik yaratadi.",
    "taskUz": "`assigned` jadvalini yarating va `CONSTRAINT pk_assigned PRIMARY KEY (emp_id, proj_id)` shaklida nomlangan birlamchi kalit o'rnating.\n\n📋 **Kutilayotgan Sxema:**\n• Ustunlar: `emp_id integer`, `proj_id integer`, `role varchar(50)`\n• Cheklov: `CONSTRAINT pk_assigned PRIMARY KEY (emp_id, proj_id)`",
    "hint": "`CREATE TABLE assigned (emp_id integer, proj_id integer, role varchar(50), CONSTRAINT pk_assigned PRIMARY KEY (emp_id, proj_id));`",
    "solutions": [
      "CREATE TABLE assigned (emp_id integer, proj_id integer, role varchar(50), CONSTRAINT pk_assigned PRIMARY KEY (emp_id, proj_id))",
      "CREATE TABLE assigned (emp_id integer, proj_id integer, role varchar(50), CONSTRAINT pk_assigned PRIMARY KEY (emp_id, proj_id));",
      "create table assigned (emp_id integer, proj_id integer, role varchar(50), constraint pk_assigned primary key (emp_id, proj_id))",
      "create table assigned (emp_id integer, proj_id integer, role varchar(50), constraint pk_assigned primary key (emp_id, proj_id));",
      "CREATE TABLE assigned (emp_id int, proj_id int, role varchar(50), CONSTRAINT pk_assigned PRIMARY KEY (emp_id, proj_id))",
      "CREATE TABLE assigned (emp_id int, proj_id int, role varchar(50), CONSTRAINT pk_assigned PRIMARY KEY (emp_id, proj_id));",
      "create table assigned (emp_id int, proj_id int, role varchar(50), constraint pk_assigned primary key (emp_id, proj_id))",
      "create table assigned (emp_id int, proj_id int, role varchar(50), constraint pk_assigned primary key (emp_id, proj_id));"
    ],
    "explanation": "pk_assigned nomli murakkab birlamchi kalit yaratildi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
      "tableName": "assigned",
      "columns": [
        {
          "name": "emp_id",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "proj_id",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "role",
          "type": "varchar(50)"
        }
      ]
    }
  },
  {
    "id": 25,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "L03 Slide 25 • Jadvalni Qayta Yaratish Oldidan O'chirish",
    "title": "Eski Jadvalni O'chirish (DROP TABLE)",
    "story": "Sxemani yangilashdan oldin eski `department` jadvalini o'chirib tashlash lozim.",
    "taskUz": "`department` jadvalini agar u mavjud bo'lsa o'chiring (`DROP TABLE IF EXISTS ...`).\n\n📋 **Kutilayotgan DDL:**\n`DROP TABLE IF EXISTS department;`",
    "hint": "`DROP TABLE IF EXISTS department;` deb yozing.",
    "solutions": [
      "DROP TABLE IF EXISTS department",
      "DROP TABLE IF EXISTS department;",
      "drop table if exists department",
      "drop table if exists department;"
    ],
    "explanation": "department jadvali muvaffaqiyatli o'chirildi.",
    "expectedSchema": {
      "operation": "DROP_TABLE",
      "tableName": "department",
      "ifExists": true,
      "description": "department jadvali xavfsiz o'chirildi."
    }
  },
  {
    "id": 26,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "L03 Slide 21 • SERIAL Sun'iy Kalit Mexanizmi",
    "title": "SERIAL Sun'iy Kaliti (PostgreSQL Klassik Usuli)",
    "story": "PostgreSQL tarixan avtomatik o'suvchi ketma-ketliklar uchun qisqa `SERIAL` psevdo-turini qo'llab kelgan.",
    "taskUz": "`warehouse` nomli jadval yarating: `wh_id SERIAL PRIMARY KEY` va `city varchar(50)`.\n\n📋 **Kutilayotgan Sxema:**\n• Jadval: **warehouse**\n• Ustunlar: `wh_id SERIAL PRIMARY KEY`, `city varchar(50)`",
    "hint": "`CREATE TABLE warehouse (wh_id SERIAL PRIMARY KEY, city varchar(50));`",
    "solutions": [
      "CREATE TABLE warehouse (wh_id SERIAL PRIMARY KEY, city varchar(50))",
      "CREATE TABLE warehouse (wh_id SERIAL PRIMARY KEY, city varchar(50));",
      "create table warehouse (wh_id serial primary key, city varchar(50))",
      "create table warehouse (wh_id serial primary key, city varchar(50));",
      "CREATE TABLE warehouse (\n  wh_id SERIAL PRIMARY KEY,\n  city varchar(50)\n)",
      "CREATE TABLE warehouse (\n  wh_id SERIAL PRIMARY KEY,\n  city varchar(50)\n);",
      "CREATE TABLE warehouse ( wh_id SERIAL PRIMARY KEY, city varchar(50) )",
      "CREATE TABLE warehouse ( wh_id SERIAL PRIMARY KEY, city varchar(50) );",
      "create table warehouse (\n  wh_id serial primary key,\n  city varchar(50)\n)",
      "create table warehouse (\n  wh_id serial primary key,\n  city varchar(50)\n);"
    ],
    "explanation": "SERIAL turi bilan avtomatik ketma-ketlik kaliti hosil qilindi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
      "tableName": "warehouse",
      "columns": [
        {
          "name": "wh_id",
          "type": "integer",
          "isPK": true,
          "isIdentity": true
        },
        {
          "name": "city",
          "type": "varchar(50)"
        }
      ]
    }
  },
  {
    "id": 27,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "L03 Slide 16 • Katta Ma'lumotlar uchun BIGINT Identity",
    "title": "BIGINT GENERATED ALWAYS AS IDENTITY",
    "story": "Yuqori chastotali tranzaksiyalar (millionlab qatorlar) uchun 4 baytli integer yetmaydi, 8 baytli bigint talab etiladi.",
    "taskUz": "`event_stream` nomli jadval yarating: `event_id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY` va `event_type varchar(50)`.\n\n📋 **Kutilayotgan Sxema:**\n• Ustunlar: `event_id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY`, `event_type varchar(50)`",
    "hint": "`CREATE TABLE event_stream (event_id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY, event_type varchar(50));`",
    "solutions": [
      "CREATE TABLE event_stream (event_id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY, event_type varchar(50))",
      "CREATE TABLE event_stream (event_id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY, event_type varchar(50));",
      "create table event_stream (event_id bigint generated always as identity primary key, event_type varchar(50))",
      "create table event_stream (event_id bigint generated always as identity primary key, event_type varchar(50));"
    ],
    "explanation": "Katta hajmli jadvallar uchun 64-bitli bigint identity kaliti yaratildi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
      "tableName": "event_stream",
      "columns": [
        {
          "name": "event_id",
          "type": "bigint",
          "isPK": true,
          "isIdentity": true
        },
        {
          "name": "event_type",
          "type": "varchar(50)"
        }
      ]
    }
  },
  {
    "id": 28,
    "sector": 2,
    "difficulty": "Floor 2 • Easy",
    "source": "L03 Slide 19 • Tabiiy Kalit (Natural Key)",
    "title": "Mamlakatlar va Tabiiy Birlamchi Kalit",
    "story": "Dunyo standartida ISO davlat kodlari allaqachon mavjud (UZB, USA, GBR). Bu tabiiy kalit (natural key) hisoblanadi.",
    "taskUz": "`country` nomli jadval yarating: `country_code varchar(3) PRIMARY KEY` va `country_name varchar(80)`.\n\n📋 **Kutilayotgan Sxema:**\n• Ustunlar: `country_code varchar(3) PRIMARY KEY`, `country_name varchar(80)`",
    "hint": "`CREATE TABLE country (country_code varchar(3) PRIMARY KEY, country_name varchar(80));`",
    "solutions": [
      "CREATE TABLE country (country_code varchar(3) PRIMARY KEY, country_name varchar(80))",
      "CREATE TABLE country (country_code varchar(3) PRIMARY KEY, country_name varchar(80));",
      "create table country (country_code varchar(3) primary key, country_name varchar(80))",
      "create table country (country_code varchar(3) primary key, country_name varchar(80));",
      "CREATE TABLE country (country_code char(3) PRIMARY KEY, country_name varchar(80))",
      "CREATE TABLE country (country_code char(3) PRIMARY KEY, country_name varchar(80));",
      "create table country (country_code char(3) primary key, country_name varchar(80))",
      "create table country (country_code char(3) primary key, country_name varchar(80));"
    ],
    "explanation": "Tabiiy birlamchi kalitli davlatlar jadvali yaratildi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
      "tableName": "country",
      "columns": [
        {
          "name": "country_code",
          "type": "varchar(3)",
          "isPK": true
        },
        {
          "name": "country_name",
          "type": "varchar(80)"
        }
      ]
    }
  },
  {
    "id": 29,
    "sector": 2,
    "difficulty": "Floor 2 • Easy",
    "source": "L03 Slide 19 • Valyuta Kodlari (char(3))",
    "title": "Valyuta Kurslari va Belgilangan Matn Kaliti",
    "story": "Valyuta kodi doimo qat'iy 3 ta belgidan iborat (USD, EUR, UZS). Shuning uchun `char(3)` qulay.",
    "taskUz": "`currency` nomli jadval yarating: `iso_code char(3) PRIMARY KEY` va `exchange_rate numeric(10,4)`.\n\n📋 **Kutilayotgan Sxema:**\n• Ustunlar: `iso_code char(3) PRIMARY KEY`, `exchange_rate numeric(10,4)`",
    "hint": "`CREATE TABLE currency (iso_code char(3) PRIMARY KEY, exchange_rate numeric(10,4));`",
    "solutions": [
      "CREATE TABLE currency (iso_code char(3) PRIMARY KEY, exchange_rate numeric(10,4))",
      "CREATE TABLE currency (iso_code char(3) PRIMARY KEY, exchange_rate numeric(10,4));",
      "create table currency (iso_code char(3) primary key, exchange_rate numeric(10,4))",
      "create table currency (iso_code char(3) primary key, exchange_rate numeric(10,4));",
      "CREATE TABLE currency (iso_code varchar(3) PRIMARY KEY, exchange_rate numeric(10,4))",
      "CREATE TABLE currency (iso_code varchar(3) PRIMARY KEY, exchange_rate numeric(10,4));",
      "create table currency (iso_code varchar(3) primary key, exchange_rate numeric(10,4))",
      "create table currency (iso_code varchar(3) primary key, exchange_rate numeric(10,4));"
    ],
    "explanation": "char(3) tabiiy kalitli valyutalar jadvali yaratildi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
      "tableName": "currency",
      "columns": [
        {
          "name": "iso_code",
          "type": "char(3)",
          "isPK": true
        },
        {
          "name": "exchange_rate",
          "type": "numeric(10,4)"
        }
      ]
    }
  },
  {
    "id": 30,
    "sector": 2,
    "difficulty": "Floor 2 • Boss Challenge",
    "source": "2-Qavat Bossi • M:N Biriktirish Arxitekturasi",
    "title": "2-Qavat Bossi: Loyiha Taqsimoti (project_assignment)",
    "story": "2-qavatning eng katta sinovi: Xodimlarni loyihalarga bandlik foizi (allocation_pct) va sanasi bilan biriktiruvchi to'liq relyatsion ko'prik jadvalini yarating.",
    "taskUz": "`project_assignment` nomli jadval yarating: `emp_id` (integer), `proj_id` (integer), `allocation_pct` (numeric(5,2)), `assigned_at` (date) va `CONSTRAINT pk_project_assignment PRIMARY KEY (emp_id, proj_id)`.\n\n📋 **Kutilayotgan Sxema:**\n• Cheklov: `CONSTRAINT pk_project_assignment PRIMARY KEY (emp_id, proj_id)`",
    "hint": "`CREATE TABLE project_assignment (emp_id integer, proj_id integer, allocation_pct numeric(5,2), assigned_at date, CONSTRAINT pk_project_assignment PRIMARY KEY (emp_id, proj_id));`",
    "solutions": [
      "CREATE TABLE project_assignment (emp_id integer, proj_id integer, allocation_pct numeric(5,2), assigned_at date, CONSTRAINT pk_project_assignment PRIMARY KEY (emp_id, proj_id))",
      "CREATE TABLE project_assignment (emp_id integer, proj_id integer, allocation_pct numeric(5,2), assigned_at date, CONSTRAINT pk_project_assignment PRIMARY KEY (emp_id, proj_id));",
      "create table project_assignment (emp_id integer, proj_id integer, allocation_pct numeric(5,2), assigned_at date, constraint pk_project_assignment primary key (emp_id, proj_id))",
      "create table project_assignment (emp_id integer, proj_id integer, allocation_pct numeric(5,2), assigned_at date, constraint pk_project_assignment primary key (emp_id, proj_id));",
      "CREATE TABLE project_assignment (emp_id int, proj_id int, allocation_pct numeric(5,2), assigned_at date, CONSTRAINT pk_project_assignment PRIMARY KEY (emp_id, proj_id))",
      "CREATE TABLE project_assignment (emp_id int, proj_id int, allocation_pct numeric(5,2), assigned_at date, CONSTRAINT pk_project_assignment PRIMARY KEY (emp_id, proj_id));",
      "create table project_assignment (emp_id int, proj_id int, allocation_pct numeric(5,2), assigned_at date, constraint pk_project_assignment primary key (emp_id, proj_id))",
      "create table project_assignment (emp_id int, proj_id int, allocation_pct numeric(5,2), assigned_at date, constraint pk_project_assignment primary key (emp_id, proj_id));",
      "CREATE TABLE project_assignment (emp_id integer, proj_id integer, allocation_pct numeric(5,2), assigned_at date, PRIMARY KEY (emp_id, proj_id))",
      "CREATE TABLE project_assignment (emp_id integer, proj_id integer, allocation_pct numeric(5,2), assigned_at date, PRIMARY KEY (emp_id, proj_id));",
      "create table project_assignment (emp_id integer, proj_id integer, allocation_pct numeric(5,2), assigned_at date, primary key (emp_id, proj_id))",
      "create table project_assignment (emp_id integer, proj_id integer, allocation_pct numeric(5,2), assigned_at date, primary key (emp_id, proj_id));"
    ],
    "explanation": "2-Qavat Bossi zabt etildi! Birlamchi kalitlar va relyatsion bog'lovchi jadvallar to'liq o'zlashtirildi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
      "tableName": "project_assignment",
      "columns": [
        {
          "name": "emp_id",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "proj_id",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "allocation_pct",
          "type": "numeric(5,2)"
        },
        {
          "name": "assigned_at",
          "type": "date"
        }
      ]
    }
  },
  {
    "id": 31,
    "sector": 3,
    "difficulty": "Floor 3 • Easy",
    "source": "T03 Task 1 • NOT NULL Cheklovi",
    "title": "Majburiy Maydon (NOT NULL)",
    "story": "Bo'lim nomi bo'sh (NULL) bo'lishi mutlaqo mumkin emas. Buning uchun `NOT NULL` cheklovidan foydalanamiz.",
    "taskUz": "`department` nomli jadval yarating: `id` (integer PRIMARY KEY), `title` (varchar(100) NOT NULL) va `location` (varchar(50)).\n\n📋 **Kutilayotgan Sxema:**\n• Ustunlar: `id integer PRIMARY KEY`, `title varchar(100) NOT NULL`, `location varchar(50)`",
    "hint": "`CREATE TABLE department (id integer PRIMARY KEY, title varchar(100) NOT NULL, location varchar(50));`",
    "solutions": [
      "CREATE TABLE department (id integer PRIMARY KEY, title varchar(100) NOT NULL, location varchar(50))",
      "CREATE TABLE department (id integer PRIMARY KEY, title varchar(100) NOT NULL, location varchar(50));",
      "create table department (id integer primary key, title varchar(100) not null, location varchar(50))",
      "create table department (id integer primary key, title varchar(100) not null, location varchar(50));",
      "CREATE TABLE department (id int PRIMARY KEY, title varchar(100) NOT NULL, location varchar(50))",
      "CREATE TABLE department (id int PRIMARY KEY, title varchar(100) NOT NULL, location varchar(50));",
      "create table department (id int primary key, title varchar(100) not null, location varchar(50))",
      "create table department (id int primary key, title varchar(100) not null, location varchar(50));"
    ],
    "explanation": "NOT NULL cheklovi bilan title ustuni majburiy etib belgilandi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
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
          "isNotNull": true
        },
        {
          "name": "location",
          "type": "varchar(50)"
        }
      ]
    }
  },
  {
    "id": 32,
    "sector": 3,
    "difficulty": "Floor 3 • Easy",
    "source": "T03 Task 1 • Bir Nechta NOT NULL Maydonlar",
    "title": "Xodim Ism va Familiyasi Majburiyligi",
    "story": "Seminar 3 1-topshirig'i: Har bir xodimning ismi (`first_name`) va familiyasi (`last_name`) kiritilishi shart.",
    "taskUz": "`employee` nomli jadval yarating: `id` (integer PRIMARY KEY), `first_name` (varchar(25) NOT NULL) va `last_name` (varchar(25) NOT NULL).\n\n📋 **Kutilayotgan Sxema:**\n• Ustunlar: `id integer PRIMARY KEY`, `first_name varchar(25) NOT NULL`, `last_name varchar(25) NOT NULL`",
    "hint": "`CREATE TABLE employee (id integer PRIMARY KEY, first_name varchar(25) NOT NULL, last_name varchar(25) NOT NULL);`",
    "solutions": [
      "CREATE TABLE employee (id integer PRIMARY KEY, first_name varchar(25) NOT NULL, last_name varchar(25) NOT NULL)",
      "CREATE TABLE employee (id integer PRIMARY KEY, first_name varchar(25) NOT NULL, last_name varchar(25) NOT NULL);",
      "create table employee (id integer primary key, first_name varchar(25) not null, last_name varchar(25) not null)",
      "create table employee (id integer primary key, first_name varchar(25) not null, last_name varchar(25) not null);",
      "CREATE TABLE employee (id int PRIMARY KEY, first_name varchar(25) NOT NULL, last_name varchar(25) NOT NULL)",
      "CREATE TABLE employee (id int PRIMARY KEY, first_name varchar(25) NOT NULL, last_name varchar(25) NOT NULL);",
      "create table employee (id int primary key, first_name varchar(25) not null, last_name varchar(25) not null)",
      "create table employee (id int primary key, first_name varchar(25) not null, last_name varchar(25) not null);"
    ],
    "explanation": "Xodimlar jadvalida ism va familiya maydonlari NOT NULL qilindi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
      "tableName": "employee",
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
    }
  },
  {
    "id": 33,
    "sector": 3,
    "difficulty": "Floor 3 • Easy",
    "source": "L03 Slide 20 • UNIQUE Cheklovi",
    "title": "Ustun Darajasidagi UNIQUE Cheklovi",
    "story": "Tashkilotda ikkita bo'lim bir xil nomga ega bo'lishi mumkin emas. Ustunda `UNIQUE` qoidasini qo'llaymiz.",
    "taskUz": "`department` jadvalini yarating: `id` (integer PRIMARY KEY) va `title` (varchar(100) NOT NULL UNIQUE).\n\n📋 **Kutilayotgan Sxema:**\n• Ustun: `title varchar(100) NOT NULL UNIQUE`",
    "hint": "`CREATE TABLE department (id integer PRIMARY KEY, title varchar(100) NOT NULL UNIQUE);`",
    "solutions": [
      "CREATE TABLE department (id integer PRIMARY KEY, title varchar(100) NOT NULL UNIQUE)",
      "CREATE TABLE department (id integer PRIMARY KEY, title varchar(100) NOT NULL UNIQUE);",
      "create table department (id integer primary key, title varchar(100) not null unique)",
      "create table department (id integer primary key, title varchar(100) not null unique);",
      "CREATE TABLE department (id int PRIMARY KEY, title varchar(100) NOT NULL UNIQUE)",
      "CREATE TABLE department (id int PRIMARY KEY, title varchar(100) NOT NULL UNIQUE);",
      "create table department (id int primary key, title varchar(100) not null unique)",
      "create table department (id int primary key, title varchar(100) not null unique);"
    ],
    "explanation": "title ustuni unikal etib belgilandi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
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
      ]
    }
  },
  {
    "id": 34,
    "sector": 3,
    "difficulty": "Floor 3 • Easy",
    "source": "T03 Task 1 • Jadval Darajasidagi UNIQUE Cheklovi",
    "title": "Nomlangan UNIQUE Cheklovi",
    "story": "Xatolik ro'y berganda aniq tushunish uchun unikal cheklovga `uq_department_title` nomini beramiz.",
    "taskUz": "`department` nomli jadval yarating va `CONSTRAINT uq_department_title UNIQUE (title)` cheklovini qo'shing.\n\n📋 **Kutilayotgan Sxema:**\n• Ustunlar: `id integer PRIMARY KEY`, `title varchar(100) NOT NULL`\n• Cheklov: `CONSTRAINT uq_department_title UNIQUE (title)`",
    "hint": "`CREATE TABLE department (id integer PRIMARY KEY, title varchar(100) NOT NULL, CONSTRAINT uq_department_title UNIQUE (title));`",
    "solutions": [
      "CREATE TABLE department (id integer PRIMARY KEY, title varchar(100) NOT NULL, CONSTRAINT uq_department_title UNIQUE (title))",
      "CREATE TABLE department (id integer PRIMARY KEY, title varchar(100) NOT NULL, CONSTRAINT uq_department_title UNIQUE (title));",
      "create table department (id integer primary key, title varchar(100) not null, constraint uq_department_title unique (title))",
      "create table department (id integer primary key, title varchar(100) not null, constraint uq_department_title unique (title));",
      "CREATE TABLE department (id int PRIMARY KEY, title varchar(100) NOT NULL, CONSTRAINT uq_department_title UNIQUE (title))",
      "CREATE TABLE department (id int PRIMARY KEY, title varchar(100) NOT NULL, CONSTRAINT uq_department_title UNIQUE (title));",
      "create table department (id int primary key, title varchar(100) not null, constraint uq_department_title unique (title))",
      "create table department (id int primary key, title varchar(100) not null, constraint uq_department_title unique (title));"
    ],
    "explanation": "Nomlangan unikal cheklov uq_department_title o'rnatildi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
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
      ]
    }
  },
  {
    "id": 35,
    "sector": 3,
    "difficulty": "Floor 3 • Medium",
    "source": "L03 Slide 20 • Composite UNIQUE Cheklovi",
    "title": "Murakkab (Composite) UNIQUE Cheklovi",
    "story": "Bitta bo'limda bir xil lavozimda faqat bitta boshliq bo'lishi mumkin. Ya'ni (department_id, position) birgalikda unikal bo'lishi shart.",
    "taskUz": "`dept_role` nomli jadval yarating: `id` (integer PRIMARY KEY), `department_id` (integer), `position` (varchar(50)) va `CONSTRAINT uq_dept_pos UNIQUE (department_id, position)`.\n\n📋 **Kutilayotgan Sxema:**\n• Cheklov: `CONSTRAINT uq_dept_pos UNIQUE (department_id, position)`",
    "hint": "`CREATE TABLE dept_role (id integer PRIMARY KEY, department_id integer, position varchar(50), CONSTRAINT uq_dept_pos UNIQUE (department_id, position));`",
    "solutions": [
      "CREATE TABLE dept_role (id integer PRIMARY KEY, department_id integer, position varchar(50), CONSTRAINT uq_dept_pos UNIQUE (department_id, position))",
      "CREATE TABLE dept_role (id integer PRIMARY KEY, department_id integer, position varchar(50), CONSTRAINT uq_dept_pos UNIQUE (department_id, position));",
      "create table dept_role (id integer primary key, department_id integer, position varchar(50), constraint uq_dept_pos unique (department_id, position))",
      "create table dept_role (id integer primary key, department_id integer, position varchar(50), constraint uq_dept_pos unique (department_id, position));",
      "CREATE TABLE dept_role (id int PRIMARY KEY, department_id int, position varchar(50), CONSTRAINT uq_dept_pos UNIQUE (department_id, position))",
      "CREATE TABLE dept_role (id int PRIMARY KEY, department_id int, position varchar(50), CONSTRAINT uq_dept_pos UNIQUE (department_id, position));",
      "create table dept_role (id int primary key, department_id int, position varchar(50), constraint uq_dept_pos unique (department_id, position))",
      "create table dept_role (id int primary key, department_id int, position varchar(50), constraint uq_dept_pos unique (department_id, position));"
    ],
    "explanation": "department_id va position ustunlariga birgalikda UNIQUE o'rnatildi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
      "tableName": "dept_role",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "department_id",
          "type": "integer"
        },
        {
          "name": "position",
          "type": "varchar(50)"
        }
      ]
    }
  },
  {
    "id": 36,
    "sector": 3,
    "difficulty": "Floor 3 • Medium",
    "source": "T03 Task 1 • CHECK Cheklovi (budget >= 0)",
    "title": "Musbat Byudjet uchun CHECK Cheklovi",
    "story": "Seminar 3 1-topshirig'i talabi: Bo'lim byudjeti (`budget`) hech qachon manfiy bo'lmasligi kerak (`budget >= 0`).",
    "taskUz": "`department` jadvalini yarating: `id` (integer PRIMARY KEY), `title` (varchar(100) NOT NULL), `budget` (numeric(12,2) CHECK (budget >= 0)).\n\n📋 **Kutilayotgan Sxema:**\n• Ustun: `budget numeric(12,2) CHECK (budget >= 0)`",
    "hint": "`CREATE TABLE department (id integer PRIMARY KEY, title varchar(100) NOT NULL, budget numeric(12,2) CHECK (budget >= 0));`",
    "solutions": [
      "CREATE TABLE department (id integer PRIMARY KEY, title varchar(100) NOT NULL, budget numeric(12,2) CHECK (budget >= 0))",
      "CREATE TABLE department (id integer PRIMARY KEY, title varchar(100) NOT NULL, budget numeric(12,2) CHECK (budget >= 0));",
      "create table department (id integer primary key, title varchar(100) not null, budget numeric(12,2) check (budget >= 0))",
      "create table department (id integer primary key, title varchar(100) not null, budget numeric(12,2) check (budget >= 0));",
      "CREATE TABLE department (id int PRIMARY KEY, title varchar(100) NOT NULL, budget numeric(12,2) CHECK (budget >= 0))",
      "CREATE TABLE department (id int PRIMARY KEY, title varchar(100) NOT NULL, budget numeric(12,2) CHECK (budget >= 0));",
      "create table department (id int primary key, title varchar(100) not null, budget numeric(12,2) check (budget >= 0))",
      "create table department (id int primary key, title varchar(100) not null, budget numeric(12,2) check (budget >= 0));"
    ],
    "explanation": "budget ustuniga CHECK (budget >= 0) qoidasi biriktirildi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
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
          "isNotNull": true
        },
        {
          "name": "budget",
          "type": "numeric(12,2)",
          "hasCheck": true
        }
      ]
    }
  },
  {
    "id": 37,
    "sector": 3,
    "difficulty": "Floor 3 • Medium",
    "source": "T03 Task 1 • Nomlangan CHECK Cheklovi",
    "title": "Nomlangan CHECK Cheklovi (chk_department_budget)",
    "story": "Seminar 3 da barcha biznes cheklovlar aniq nomlanadi: `CONSTRAINT chk_department_budget CHECK (budget >= 0)`.",
    "taskUz": "`department` jadvalini yarating va jadval darajasida nomlangan CHECK cheklovini qo'shing.\n\n📋 **Kutilayotgan Sxema:**\n• Ustunlar: `id integer PRIMARY KEY`, `title varchar(100) NOT NULL`, `budget numeric(12,2)`\n• Cheklov: `CONSTRAINT chk_department_budget CHECK (budget >= 0)`",
    "hint": "`CREATE TABLE department (id integer PRIMARY KEY, title varchar(100) NOT NULL, budget numeric(12,2), CONSTRAINT chk_department_budget CHECK (budget >= 0));`",
    "solutions": [
      "CREATE TABLE department (id integer PRIMARY KEY, title varchar(100) NOT NULL, budget numeric(12,2), CONSTRAINT chk_department_budget CHECK (budget >= 0))",
      "CREATE TABLE department (id integer PRIMARY KEY, title varchar(100) NOT NULL, budget numeric(12,2), CONSTRAINT chk_department_budget CHECK (budget >= 0));",
      "create table department (id integer primary key, title varchar(100) not null, budget numeric(12,2), constraint chk_department_budget check (budget >= 0))",
      "create table department (id integer primary key, title varchar(100) not null, budget numeric(12,2), constraint chk_department_budget check (budget >= 0));",
      "CREATE TABLE department (id int PRIMARY KEY, title varchar(100) NOT NULL, budget numeric(12,2), CONSTRAINT chk_department_budget CHECK (budget >= 0))",
      "CREATE TABLE department (id int PRIMARY KEY, title varchar(100) NOT NULL, budget numeric(12,2), CONSTRAINT chk_department_budget CHECK (budget >= 0));",
      "create table department (id int primary key, title varchar(100) not null, budget numeric(12,2), constraint chk_department_budget check (budget >= 0))",
      "create table department (id int primary key, title varchar(100) not null, budget numeric(12,2), constraint chk_department_budget check (budget >= 0));"
    ],
    "explanation": "chk_department_budget nomli tekshirish cheklovi muvaffaqiyatli o'rnatildi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
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
          "isNotNull": true
        },
        {
          "name": "budget",
          "type": "numeric(12,2)",
          "hasCheck": true
        }
      ]
    }
  },
  {
    "id": 38,
    "sector": 3,
    "difficulty": "Floor 3 • Medium",
    "source": "T03 Task 1 • Oylik Oralig'i CHECK Cheklovi",
    "title": "Oylik Chegarasi CHECK (salary > 0 AND salary <= 5000)",
    "story": "Seminar 3 1-topshirig'i: Xodimning oyligi 0 dan katta va 5000 dan oshmasligi qat'iy talab etiladi.",
    "taskUz": "`employee` nomli jadval yarating: `id` (integer PRIMARY KEY), `salary` (numeric(10,2) CHECK (salary > 0 AND salary <= 5000)).\n\n📋 **Kutilayotgan Sxema:**\n• Ustun: `salary numeric(10,2) CHECK (salary > 0 AND salary <= 5000)`",
    "hint": "`CREATE TABLE employee (id integer PRIMARY KEY, salary numeric(10,2) CHECK (salary > 0 AND salary <= 5000));`",
    "solutions": [
      "CREATE TABLE employee (id integer PRIMARY KEY, salary numeric(10,2) CHECK (salary > 0 AND salary <= 5000))",
      "CREATE TABLE employee (id integer PRIMARY KEY, salary numeric(10,2) CHECK (salary > 0 AND salary <= 5000));",
      "create table employee (id integer primary key, salary numeric(10,2) check (salary > 0 and salary <= 5000))",
      "create table employee (id integer primary key, salary numeric(10,2) check (salary > 0 and salary <= 5000));",
      "CREATE TABLE employee (id int PRIMARY KEY, salary numeric(10,2) CHECK (salary > 0 AND salary <= 5000))",
      "CREATE TABLE employee (id int PRIMARY KEY, salary numeric(10,2) CHECK (salary > 0 AND salary <= 5000));",
      "create table employee (id int primary key, salary numeric(10,2) check (salary > 0 and salary <= 5000))",
      "create table employee (id int primary key, salary numeric(10,2) check (salary > 0 and salary <= 5000));"
    ],
    "explanation": "Xodim oyligi 1 dan 5000 gacha oraliqda cheklandi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
      "tableName": "employee",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "salary",
          "type": "numeric(10,2)",
          "hasCheck": true
        }
      ]
    }
  },
  {
    "id": 39,
    "sector": 3,
    "difficulty": "Floor 3 • Medium",
    "source": "T03 Task 1 • Email Formati CHECK Cheklovi",
    "title": "Email Formatini Tekshiruvchi CHECK Cheklovi",
    "story": "Elektron pochta manzili ichida majburiy `@` belgisi bo'lishini ma'lumotlar bazasi darajasida kafolatlaymiz.",
    "taskUz": "`employee` nomli jadval yarating: `id` (integer PRIMARY KEY), `email` (varchar(100) NOT NULL UNIQUE CHECK (email LIKE '%@%')).\n\n📋 **Kutilayotgan Sxema:**\n• Ustun: `email varchar(100) NOT NULL UNIQUE CHECK (email LIKE '%@%')`",
    "hint": "`CREATE TABLE employee (id integer PRIMARY KEY, email varchar(100) NOT NULL UNIQUE CHECK (email LIKE '%@%'));`",
    "solutions": [
      "CREATE TABLE employee (id integer PRIMARY KEY, email varchar(100) NOT NULL UNIQUE CHECK (email LIKE '%@%'))",
      "CREATE TABLE employee (id integer PRIMARY KEY, email varchar(100) NOT NULL UNIQUE CHECK (email LIKE '%@%'));",
      "create table employee (id integer primary key, email varchar(100) not null unique check (email like '%@%'))",
      "create table employee (id integer primary key, email varchar(100) not null unique check (email like '%@%'));",
      "CREATE TABLE employee (id int PRIMARY KEY, email varchar(100) NOT NULL UNIQUE CHECK (email LIKE '%@%'))",
      "CREATE TABLE employee (id int PRIMARY KEY, email varchar(100) NOT NULL UNIQUE CHECK (email LIKE '%@%'));",
      "create table employee (id int primary key, email varchar(100) not null unique check (email like '%@%'))",
      "create table employee (id int primary key, email varchar(100) not null unique check (email like '%@%'));"
    ],
    "explanation": "Email ustuniga format tekshiruvchi CHECK qo'yildi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
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
          "isUQ": true,
          "hasCheck": true
        }
      ]
    }
  },
  {
    "id": 40,
    "sector": 3,
    "difficulty": "Floor 3 • Easy",
    "source": "T03 Task 1 • DEFAULT Mantiqiy Qiymati",
    "title": "Standart Holat (DEFAULT true)",
    "story": "Yangi xodim qo'shilganda uning holati sukut bo'yicha darhol faol (`active = true`) bo'lishi lozim.",
    "taskUz": "`employee` nomli jadval yarating: `id` (integer PRIMARY KEY), `active` (boolean NOT NULL DEFAULT true).\n\n📋 **Kutilayotgan Sxema:**\n• Ustun: `active boolean NOT NULL DEFAULT true`",
    "hint": "`CREATE TABLE employee (id integer PRIMARY KEY, active boolean NOT NULL DEFAULT true);`",
    "solutions": [
      "CREATE TABLE employee (id integer PRIMARY KEY, active boolean NOT NULL DEFAULT true)",
      "CREATE TABLE employee (id integer PRIMARY KEY, active boolean NOT NULL DEFAULT true);",
      "create table employee (id integer primary key, active boolean not null default true)",
      "create table employee (id integer primary key, active boolean not null default true);",
      "CREATE TABLE employee (id int PRIMARY KEY, active boolean NOT NULL DEFAULT true)",
      "CREATE TABLE employee (id int PRIMARY KEY, active boolean NOT NULL DEFAULT true);",
      "create table employee (id int primary key, active boolean not null default true)",
      "create table employee (id int primary key, active boolean not null default true);"
    ],
    "explanation": "active ustuni sukut bo'yicha true qiymatiga ega bo'ldi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
      "tableName": "employee",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "active",
          "type": "boolean",
          "isNotNull": true,
          "hasDefault": true
        }
      ]
    }
  },
  {
    "id": 41,
    "sector": 3,
    "difficulty": "Floor 3 • Easy",
    "source": "T03 Task 1 • DEFAULT CURRENT_TIMESTAMP",
    "title": "Avtomatik Vaqt Tamg'asi (DEFAULT CURRENT_TIMESTAMP)",
    "story": "Seminar 3 1-topshirig'i: `hired_at` xodim qachon ro'yxatdan o'tgan bo'lsa, o'sha aniq tizim vaqtini avtomatik yozishi shart.",
    "taskUz": "`employee` nomli jadval yarating: `id` (integer PRIMARY KEY), `hired_at` (timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP).\n\n📋 **Kutilayotgan Sxema:**\n• Ustun: `hired_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`",
    "hint": "`CREATE TABLE employee (id integer PRIMARY KEY, hired_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP);`",
    "solutions": [
      "CREATE TABLE employee (id integer PRIMARY KEY, hired_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP)",
      "CREATE TABLE employee (id integer PRIMARY KEY, hired_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP);",
      "create table employee (id integer primary key, hired_at timestamp not null default current_timestamp)",
      "create table employee (id integer primary key, hired_at timestamp not null default current_timestamp);",
      "CREATE TABLE employee (id int PRIMARY KEY, hired_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP)",
      "CREATE TABLE employee (id int PRIMARY KEY, hired_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP);",
      "create table employee (id int primary key, hired_at timestamp not null default current_timestamp)",
      "create table employee (id int primary key, hired_at timestamp not null default current_timestamp);",
      "CREATE TABLE employee (id integer PRIMARY KEY, hired_at timestamp NOT NULL DEFAULT now())",
      "CREATE TABLE employee (id integer PRIMARY KEY, hired_at timestamp NOT NULL DEFAULT now());",
      "create table employee (id integer primary key, hired_at timestamp not null default now())",
      "create table employee (id integer primary key, hired_at timestamp not null default now());"
    ],
    "explanation": "hired_at ustuniga avtomatik joriy vaqt tamg'asi DEFAULT qilib belgilandi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
      "tableName": "employee",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "hired_at",
          "type": "timestamp",
          "isNotNull": true,
          "hasDefault": true
        }
      ]
    }
  },
  {
    "id": 42,
    "sector": 3,
    "difficulty": "Floor 3 • Easy",
    "source": "T03 Task 1 • DEFAULT Oylik Standarti",
    "title": "Standart Boshlang'ich Oylik (DEFAULT 1000.00)",
    "story": "Seminar 3 qoidasi: Yangi xodim maoshi ko'rsatilmagan holda qo'shilsa, unga avtomatik 1000.00 belgilanadi.",
    "taskUz": "`employee` nomli jadval yarating: `id` (integer PRIMARY KEY), `salary` (numeric(10,2) DEFAULT 1000.00).\n\n📋 **Kutilayotgan Sxema:**\n• Ustun: `salary numeric(10,2) DEFAULT 1000.00`",
    "hint": "`CREATE TABLE employee (id integer PRIMARY KEY, salary numeric(10,2) DEFAULT 1000.00);`",
    "solutions": [
      "CREATE TABLE employee (id integer PRIMARY KEY, salary numeric(10,2) DEFAULT 1000.00)",
      "CREATE TABLE employee (id integer PRIMARY KEY, salary numeric(10,2) DEFAULT 1000.00);",
      "create table employee (id integer primary key, salary numeric(10,2) default 1000.00)",
      "create table employee (id integer primary key, salary numeric(10,2) default 1000.00);",
      "CREATE TABLE employee (id integer PRIMARY KEY, salary numeric(10,2) DEFAULT 1000)",
      "CREATE TABLE employee (id integer PRIMARY KEY, salary numeric(10,2) DEFAULT 1000);",
      "create table employee (id integer primary key, salary numeric(10,2) default 1000)",
      "create table employee (id integer primary key, salary numeric(10,2) default 1000);",
      "CREATE TABLE employee (id int PRIMARY KEY, salary numeric(10,2) DEFAULT 1000.00)",
      "CREATE TABLE employee (id int PRIMARY KEY, salary numeric(10,2) DEFAULT 1000.00);",
      "create table employee (id int primary key, salary numeric(10,2) default 1000.00)",
      "create table employee (id int primary key, salary numeric(10,2) default 1000.00);"
    ],
    "explanation": "salary ustuniga standart 1000.00 boshlang'ich qiymati ulandi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
      "tableName": "employee",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "salary",
          "type": "numeric(10,2)",
          "hasDefault": true
        }
      ]
    }
  },
  {
    "id": 43,
    "sector": 3,
    "difficulty": "Floor 3 • Medium",
    "source": "T03 Task 1 • DEFAULT va CHECK Sintezi",
    "title": "Oylik Ustunida DEFAULT va CHECK Birgalikda",
    "story": "Kombinatsiya: `salary` ustuni bir vaqtning o'zida `DEFAULT 1000.00` ga ega bo'lishi va `CHECK (salary > 0 AND salary <= 5000)` qoidasiga bo'ysunishi shart.",
    "taskUz": "`employee` nomli jadval yarating: `id` (integer PRIMARY KEY), `salary` (numeric(10,2) DEFAULT 1000.00 CHECK (salary > 0 AND salary <= 5000)).\n\n📋 **Kutilayotgan Sxema:**\n• Ustun: `salary numeric(10,2) DEFAULT 1000.00 CHECK (salary > 0 AND salary <= 5000)`",
    "hint": "`CREATE TABLE employee (id integer PRIMARY KEY, salary numeric(10,2) DEFAULT 1000.00 CHECK (salary > 0 AND salary <= 5000));`",
    "solutions": [
      "CREATE TABLE employee (id integer PRIMARY KEY, salary numeric(10,2) DEFAULT 1000.00 CHECK (salary > 0 AND salary <= 5000))",
      "CREATE TABLE employee (id integer PRIMARY KEY, salary numeric(10,2) DEFAULT 1000.00 CHECK (salary > 0 AND salary <= 5000));",
      "create table employee (id integer primary key, salary numeric(10,2) default 1000.00 check (salary > 0 and salary <= 5000))",
      "create table employee (id integer primary key, salary numeric(10,2) default 1000.00 check (salary > 0 and salary <= 5000));",
      "CREATE TABLE employee (id int PRIMARY KEY, salary numeric(10,2) DEFAULT 1000.00 CHECK (salary > 0 AND salary <= 5000))",
      "CREATE TABLE employee (id int PRIMARY KEY, salary numeric(10,2) DEFAULT 1000.00 CHECK (salary > 0 AND salary <= 5000));",
      "create table employee (id int primary key, salary numeric(10,2) default 1000.00 check (salary > 0 and salary <= 5000))",
      "create table employee (id int primary key, salary numeric(10,2) default 1000.00 check (salary > 0 and salary <= 5000));"
    ],
    "explanation": "DEFAULT va CHECK cheklovlari sinergiyasi hosil qilindi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
      "tableName": "employee",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "salary",
          "type": "numeric(10,2)",
          "hasDefault": true,
          "hasCheck": true
        }
      ]
    }
  },
  {
    "id": 44,
    "sector": 3,
    "difficulty": "Floor 3 • Hard",
    "source": "T03 Task 1 • Department To'liq Cheklovlar Arxitekturasi",
    "title": "To'liq Department Jadvali Cheklovlari",
    "story": "Seminar 3 1-topshirig'idagi to'liq `department` jadvali: `id` (GENERATED ALWAYS), `title` (NOT NULL), `location` va `budget` (CHECK budget >= 0).",
    "taskUz": "`department` nomli jadval yarating: `id` (integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY), `title` (varchar(100) NOT NULL), `location` (varchar(50)), `budget` (numeric(12,2) CHECK (budget >= 0)).\n\n📋 **Kutilayotgan Relyatsion Sxema:**\n• Jadval: **department**\n• Ustunlar: `id`, `title`, `location`, `budget`",
    "hint": "`CREATE TABLE department (id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY, title varchar(100) NOT NULL, location varchar(50), budget numeric(12,2) CHECK (budget >= 0));`",
    "solutions": [
      "CREATE TABLE department (id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY, title varchar(100) NOT NULL, location varchar(50), budget numeric(12,2) CHECK (budget >= 0))",
      "CREATE TABLE department (id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY, title varchar(100) NOT NULL, location varchar(50), budget numeric(12,2) CHECK (budget >= 0));",
      "create table department (id integer generated always as identity primary key, title varchar(100) not null, location varchar(50), budget numeric(12,2) check (budget >= 0))",
      "create table department (id integer generated always as identity primary key, title varchar(100) not null, location varchar(50), budget numeric(12,2) check (budget >= 0));",
      "CREATE TABLE department (id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY, title varchar(100) NOT NULL, location varchar(50), budget numeric(12,2) CHECK (budget >= 0))",
      "CREATE TABLE department (id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY, title varchar(100) NOT NULL, location varchar(50), budget numeric(12,2) CHECK (budget >= 0));",
      "create table department (id int generated always as identity primary key, title varchar(100) not null, location varchar(50), budget numeric(12,2) check (budget >= 0))",
      "create table department (id int generated always as identity primary key, title varchar(100) not null, location varchar(50), budget numeric(12,2) check (budget >= 0));"
    ],
    "explanation": "Seminar 3 ning to'liq department jadvali yaratildi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
      "tableName": "department",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true,
          "isIdentity": true
        },
        {
          "name": "title",
          "type": "varchar(100)",
          "isNotNull": true
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
      ]
    }
  },
  {
    "id": 45,
    "sector": 3,
    "difficulty": "Floor 3 • Boss Challenge",
    "source": "3-Qavat Bossi • Employee To'liq Boshlang'ich Sxemasi",
    "title": "3-Qavat Bossi: Xodimlar Poydevor Arxitekturasi (employee)",
    "story": "3-qavatning eng mas'uliyatli bossi: Seminar 3 Task 1 dagi to'liq `employee` jadvali! Barcha cheklovlar: GENERATED ALWAYS AS IDENTITY, NOT NULL, UNIQUE, CHECK, va DEFAULT larni birlashtiring.",
    "taskUz": "`employee` nomli jadval yarating:\n• `id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY`\n• `first_name varchar(25) NOT NULL`\n• `last_name varchar(25) NOT NULL`\n• `dob date`\n• `email varchar(100) NOT NULL UNIQUE`\n• `phone varchar(20)`\n• `salary numeric(10,2) DEFAULT 1000.00 CHECK (salary > 0 AND salary <= 5000)`\n• `active boolean NOT NULL DEFAULT true`\n• `hired_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`\n\n📋 **Kutilayotgan Sxema:**\n• Barcha 9 ta ustun to'liq o'z turlari va cheklovlari bilan!",
    "hint": "`CREATE TABLE employee (id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY, first_name varchar(25) NOT NULL, last_name varchar(25) NOT NULL, dob date, email varchar(100) NOT NULL UNIQUE, phone varchar(20), salary numeric(10,2) DEFAULT 1000.00 CHECK (salary > 0 AND salary <= 5000), active boolean NOT NULL DEFAULT true, hired_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP);`",
    "solutions": [
      "CREATE TABLE employee (id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY, first_name varchar(25) NOT NULL, last_name varchar(25) NOT NULL, dob date, email varchar(100) NOT NULL UNIQUE, phone varchar(20), salary numeric(10,2) DEFAULT 1000.00 CHECK (salary > 0 AND salary <= 5000), active boolean NOT NULL DEFAULT true, hired_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP)",
      "CREATE TABLE employee (id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY, first_name varchar(25) NOT NULL, last_name varchar(25) NOT NULL, dob date, email varchar(100) NOT NULL UNIQUE, phone varchar(20), salary numeric(10,2) DEFAULT 1000.00 CHECK (salary > 0 AND salary <= 5000), active boolean NOT NULL DEFAULT true, hired_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP);",
      "create table employee (id integer generated always as identity primary key, first_name varchar(25) not null, last_name varchar(25) not null, dob date, email varchar(100) not null unique, phone varchar(20), salary numeric(10,2) default 1000.00 check (salary > 0 and salary <= 5000), active boolean not null default true, hired_at timestamp not null default current_timestamp)",
      "create table employee (id integer generated always as identity primary key, first_name varchar(25) not null, last_name varchar(25) not null, dob date, email varchar(100) not null unique, phone varchar(20), salary numeric(10,2) default 1000.00 check (salary > 0 and salary <= 5000), active boolean not null default true, hired_at timestamp not null default current_timestamp);",
      "CREATE TABLE employee (id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY, first_name varchar(25) NOT NULL, last_name varchar(25) NOT NULL, dob date, email varchar(100) NOT NULL UNIQUE, phone varchar(20), salary numeric(10,2) DEFAULT 1000.00 CHECK (salary > 0 AND salary <= 5000), active boolean NOT NULL DEFAULT true, hired_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP)",
      "CREATE TABLE employee (id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY, first_name varchar(25) NOT NULL, last_name varchar(25) NOT NULL, dob date, email varchar(100) NOT NULL UNIQUE, phone varchar(20), salary numeric(10,2) DEFAULT 1000.00 CHECK (salary > 0 AND salary <= 5000), active boolean NOT NULL DEFAULT true, hired_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP);",
      "create table employee (id int generated always as identity primary key, first_name varchar(25) not null, last_name varchar(25) not null, dob date, email varchar(100) not null unique, phone varchar(20), salary numeric(10,2) default 1000.00 check (salary > 0 and salary <= 5000), active boolean not null default true, hired_at timestamp not null default current_timestamp)",
      "create table employee (id int generated always as identity primary key, first_name varchar(25) not null, last_name varchar(25) not null, dob date, email varchar(100) not null unique, phone varchar(20), salary numeric(10,2) default 1000.00 check (salary > 0 and salary <= 5000), active boolean not null default true, hired_at timestamp not null default current_timestamp);"
    ],
    "explanation": "3-Qavat Bossi zabt etildi! Seminar 3 dagi haqiqiy employee jadvali barcha cheklovlari bilan barpo etildi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
      "tableName": "employee",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true,
          "isIdentity": true,
          "isNotNull": true
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
          "type": "numeric(10,2)",
          "hasDefault": true,
          "hasCheck": true
        },
        {
          "name": "active",
          "type": "boolean",
          "isNotNull": true,
          "hasDefault": true
        },
        {
          "name": "hired_at",
          "type": "timestamp",
          "isNotNull": true,
          "hasDefault": true
        }
      ]
    }
  },
  {
    "id": 46,
    "sector": 4,
    "difficulty": "Floor 4 • Easy",
    "source": "T03 Task 3.1 • To'liq Qator Qo'shish (INSERT)",
    "title": "Bo'lim Qo'shish: Barcha Ustunlar Bilan",
    "story": "Seminar 3 3.1-topshiriq: Yangi 'Finance' bo'limini barcha ustunlariga (title, location, budget) aniq qiymat berib jadvalga qo'shing.",
    "taskUz": "`department` jadvaliga yangi bo'lim qo'shing:\n• `title`: 'Finance'\n• `location`: 'London'\n• `budget`: 250000.00\n\n📋 **Kutilayotgan DML:**\n`INSERT INTO department (title, location, budget) VALUES ('Finance', 'London', 250000.00);`",
    "hint": "`INSERT INTO department (title, location, budget) VALUES ('Finance', 'London', 250000.00);`",
    "solutions": [
      "INSERT INTO department (title, location, budget) VALUES ('Finance', 'London', 250000.00)",
      "INSERT INTO department (title, location, budget) VALUES ('Finance', 'London', 250000.00);",
      "insert into department (title, location, budget) values ('finance', 'london', 250000.00)",
      "insert into department (title, location, budget) values ('finance', 'london', 250000.00);",
      "INSERT INTO department (title, location, budget) VALUES ('Finance', 'London', 250000)",
      "INSERT INTO department (title, location, budget) VALUES ('Finance', 'London', 250000);",
      "insert into department (title, location, budget) values ('finance', 'london', 250000)",
      "insert into department (title, location, budget) values ('finance', 'london', 250000);",
      "INSERT INTO department (title, location, budget) VALUES ('Finance', 'London', 250000.0)",
      "INSERT INTO department (title, location, budget) VALUES ('Finance', 'London', 250000.0);",
      "insert into department (title, location, budget) values ('finance', 'london', 250000.0)",
      "insert into department (title, location, budget) values ('finance', 'london', 250000.0);"
    ],
    "explanation": "Finance bo'limi barcha ustunlari bilan department jadvaliga muvaffaqiyatli kiritildi.",
    "expectedSchema": {
      "operation": "INSERT_INTO",
      "tableName": "department",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true,
          "isIdentity": true,
          "isNotNull": true
        },
        {
          "name": "title",
          "type": "varchar(100)",
          "isNotNull": true,
          "isUQ": true
        },
        {
          "name": "location",
          "type": "varchar(50)",
          "isNotNull": false
        },
        {
          "name": "budget",
          "type": "numeric(12,2)",
          "isNotNull": false,
          "hasCheck": true
        }
      ],
      "description": "department jadvaliga Finance bo'limi kiritildi."
    }
  },
  {
    "id": 47,
    "sector": 4,
    "difficulty": "Floor 4 • Easy",
    "source": "T03 Task 3.1 • Qisman Ustunlar va NULL Qiymat",
    "title": "Qisman Ustunlar bilan Qator Qo'shish",
    "story": "Seminar 3 3.1: Bo'lim joylashuvi hozircha noma'lum. Faqat `title` va `budget` ko'rsatiladi, `location` esa avtomatik NULL bo'ladi.",
    "taskUz": "`department` jadvaliga faqat `title` va `budget` ustunlarini ko'rsatib qator qo'shing:\n• `title`: 'HR'\n• `budget`: 100000.00\n\n📋 **Kutilayotgan DML:**\n`INSERT INTO department (title, budget) VALUES ('HR', 100000.00);`",
    "hint": "`INSERT INTO department (title, budget) VALUES ('HR', 100000.00);`",
    "solutions": [
      "INSERT INTO department (title, budget) VALUES ('HR', 100000.00)",
      "INSERT INTO department (title, budget) VALUES ('HR', 100000.00);",
      "insert into department (title, budget) values ('hr', 100000.00)",
      "insert into department (title, budget) values ('hr', 100000.00);",
      "INSERT INTO department (title, budget) VALUES ('HR', 100000)",
      "INSERT INTO department (title, budget) VALUES ('HR', 100000);",
      "insert into department (title, budget) values ('hr', 100000)",
      "insert into department (title, budget) values ('hr', 100000);"
    ],
    "explanation": "Faqat majburiy ustunlar kiritilib, qolganlari NULL holatda qoldirildi.",
    "expectedSchema": {
      "operation": "INSERT_INTO",
      "tableName": "department",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true,
          "isIdentity": true,
          "isNotNull": true
        },
        {
          "name": "title",
          "type": "varchar(100)",
          "isNotNull": true,
          "isUQ": true
        },
        {
          "name": "location",
          "type": "varchar(50)",
          "isNotNull": false
        },
        {
          "name": "budget",
          "type": "numeric(12,2)",
          "isNotNull": false,
          "hasCheck": true
        }
      ],
      "description": "HR bo'limi qo'shildi (location = NULL)."
    }
  },
  {
    "id": 48,
    "sector": 4,
    "difficulty": "Floor 4 • Medium",
    "source": "T03 Task 3.1 • Bir Nechta Satrni Bir So'rovda Kiritish",
    "title": "Multi-Row INSERT: Bir Nechta Satr Kiritish",
    "story": "Tizim tezligi va tranzaksiyalar samaradorligi uchun bir nechta satrlarni vergul bilan bitta `INSERT` so'rovida yozamiz.",
    "taskUz": "`department` jadvaliga ikkita bo'limni bir vaqtda qo'shing:\n1) 'Marketing', 'Tashkent', 150000.00\n2) 'IT Support', 'London', 300000.00\n\n📋 **Kutilayotgan DML:**\n`INSERT INTO department (title, location, budget) VALUES ('Marketing', 'Tashkent', 150000.00), ('IT Support', 'London', 300000.00);`",
    "hint": "`INSERT INTO department (title, location, budget) VALUES ('Marketing', 'Tashkent', 150000.00), ('IT Support', 'London', 300000.00);`",
    "solutions": [
      "INSERT INTO department (title, location, budget) VALUES ('Marketing', 'Tashkent', 150000.00), ('IT Support', 'London', 300000.00)",
      "INSERT INTO department (title, location, budget) VALUES ('Marketing', 'Tashkent', 150000.00), ('IT Support', 'London', 300000.00);",
      "insert into department (title, location, budget) values ('marketing', 'tashkent', 150000.00), ('it support', 'london', 300000.00)",
      "insert into department (title, location, budget) values ('marketing', 'tashkent', 150000.00), ('it support', 'london', 300000.00);",
      "INSERT INTO department (title, location, budget) VALUES ('Marketing', 'Tashkent', 150000), ('IT Support', 'London', 300000)",
      "INSERT INTO department (title, location, budget) VALUES ('Marketing', 'Tashkent', 150000), ('IT Support', 'London', 300000);",
      "insert into department (title, location, budget) values ('marketing', 'tashkent', 150000), ('it support', 'london', 300000)",
      "insert into department (title, location, budget) values ('marketing', 'tashkent', 150000), ('it support', 'london', 300000);"
    ],
    "explanation": "Multi-row INSERT orqali ikkita bo'lim bitta so'rovda yaratildi.",
    "expectedSchema": {
      "operation": "INSERT_INTO",
      "tableName": "department",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true,
          "isIdentity": true,
          "isNotNull": true
        },
        {
          "name": "title",
          "type": "varchar(100)",
          "isNotNull": true,
          "isUQ": true
        },
        {
          "name": "location",
          "type": "varchar(50)",
          "isNotNull": false
        },
        {
          "name": "budget",
          "type": "numeric(12,2)",
          "isNotNull": false,
          "hasCheck": true
        }
      ],
      "description": "Marketing va IT Support bo'limlari bitta buyruq bilan qo'shildi."
    }
  },
  {
    "id": 49,
    "sector": 4,
    "difficulty": "Floor 4 • Medium",
    "source": "T03 Task 3.1 • Xodimlar Jadvaliga To'liq Satr Kiritish",
    "title": "Xodim Yaratish: Barcha Shaxsiy Ma'lumotlar Bilan",
    "story": "Seminar 3 3.1: Yangi xodim 'Ali Valiyev' barcha shaxsiy ma'lumotlari (`dob`, `email`, `phone`, `salary`, `active`, `hired_at`) bilan qo'shilmoqda.",
    "taskUz": "`employee` jadvaliga yangi xodim qo'shing:\n• `first_name`: 'Ali'\n• `last_name`: 'Valiyev'\n• `dob`: '1995-05-12'\n• `email`: 'ali@wiut.uz'\n• `phone`: '+998901234567'\n• `salary`: 3500.00\n\n📋 **Kutilayotgan DML:**\n`INSERT INTO employee (first_name, last_name, dob, email, phone, salary) VALUES ('Ali', 'Valiyev', '1995-05-12', 'ali@wiut.uz', '+998901234567', 3500.00);`",
    "hint": "`INSERT INTO employee (first_name, last_name, dob, email, phone, salary) VALUES ('Ali', 'Valiyev', '1995-05-12', 'ali@wiut.uz', '+998901234567', 3500.00);`",
    "solutions": [
      "INSERT INTO employee (first_name, last_name, dob, email, phone, salary) VALUES ('Ali', 'Valiyev', '1995-05-12', 'ali@wiut.uz', '+998901234567', 3500.00)",
      "INSERT INTO employee (first_name, last_name, dob, email, phone, salary) VALUES ('Ali', 'Valiyev', '1995-05-12', 'ali@wiut.uz', '+998901234567', 3500.00);",
      "insert into employee (first_name, last_name, dob, email, phone, salary) values ('ali', 'valiyev', '1995-05-12', 'ali@wiut.uz', '+998901234567', 3500.00)",
      "insert into employee (first_name, last_name, dob, email, phone, salary) values ('ali', 'valiyev', '1995-05-12', 'ali@wiut.uz', '+998901234567', 3500.00);",
      "INSERT INTO employee (first_name, last_name, dob, email, phone, salary) VALUES ('Ali', 'Valiyev', '1995-05-12', 'ali@wiut.uz', '+998901234567', 3500)",
      "INSERT INTO employee (first_name, last_name, dob, email, phone, salary) VALUES ('Ali', 'Valiyev', '1995-05-12', 'ali@wiut.uz', '+998901234567', 3500);",
      "insert into employee (first_name, last_name, dob, email, phone, salary) values ('ali', 'valiyev', '1995-05-12', 'ali@wiut.uz', '+998901234567', 3500)",
      "insert into employee (first_name, last_name, dob, email, phone, salary) values ('ali', 'valiyev', '1995-05-12', 'ali@wiut.uz', '+998901234567', 3500);"
    ],
    "explanation": "Ali Valiyev haqidagi to'liq ma'lumotlar xodimlar jadvaliga kiritildi.",
    "expectedSchema": {
      "operation": "INSERT_INTO",
      "tableName": "employee",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true,
          "isIdentity": true,
          "isNotNull": true
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
          "type": "date",
          "isNotNull": false
        },
        {
          "name": "email",
          "type": "varchar(100)",
          "isNotNull": true,
          "isUQ": true
        },
        {
          "name": "phone",
          "type": "varchar(20)",
          "isNotNull": false
        },
        {
          "name": "salary",
          "type": "numeric(10,2)",
          "isNotNull": false,
          "hasDefault": true
        },
        {
          "name": "active",
          "type": "boolean",
          "isNotNull": true,
          "hasDefault": true
        },
        {
          "name": "hired_at",
          "type": "timestamp",
          "isNotNull": true,
          "hasDefault": true
        },
        {
          "name": "department_id",
          "type": "integer",
          "isFK": true,
          "references": "department(id)"
        }
      ],
      "description": "Xodim Ali Valiyev dob va kontaktlari bilan qo'shildi."
    }
  },
  {
    "id": 50,
    "sector": 4,
    "difficulty": "Floor 4 • Medium",
    "source": "T03 Task 3.1 • DEFAULT Qiymatlarga Tayanuvchi INSERT",
    "title": "DEFAULT Qiymatlarga Tayanuvchi INSERT",
    "story": "Seminar 3 3.1: Xodim qo'shilganda faqat ism, familiya va email beriladi. `salary` (1000.00), `active` (true) va `hired_at` (now) standart qiymatlarni oladi.",
    "taskUz": "`employee` jadvaliga faqat `first_name`, `last_name` va `email` ustunlarini ko'rsatib yangi xodim qo'shing:\n• `first_name`: 'Malika'\n• `last_name`: 'Karimova'\n• `email`: 'malika@wiut.uz'\n\n📋 **Kutilayotgan DML:**\n`INSERT INTO employee (first_name, last_name, email) VALUES ('Malika', 'Karimova', 'malika@wiut.uz');`",
    "hint": "`INSERT INTO employee (first_name, last_name, email) VALUES ('Malika', 'Karimova', 'malika@wiut.uz');`",
    "solutions": [
      "INSERT INTO employee (first_name, last_name, email) VALUES ('Malika', 'Karimova', 'malika@wiut.uz')",
      "INSERT INTO employee (first_name, last_name, email) VALUES ('Malika', 'Karimova', 'malika@wiut.uz');",
      "insert into employee (first_name, last_name, email) values ('malika', 'karimova', 'malika@wiut.uz')",
      "insert into employee (first_name, last_name, email) values ('malika', 'karimova', 'malika@wiut.uz');",
      "INSERT INTO employee (first_name, last_name, email) VALUES ('Malika','Karimova','malika@wiut.uz')",
      "INSERT INTO employee (first_name, last_name, email) VALUES ('Malika','Karimova','malika@wiut.uz');",
      "insert into employee (first_name, last_name, email) values ('malika','karimova','malika@wiut.uz')",
      "insert into employee (first_name, last_name, email) values ('malika','karimova','malika@wiut.uz');"
    ],
    "explanation": "Malika Karimova qo'shildi, sukut bo'yicha parametrlar avtomatik ishga tushdi.",
    "expectedSchema": {
      "operation": "INSERT_INTO",
      "tableName": "employee",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true,
          "isIdentity": true,
          "isNotNull": true
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
          "type": "date",
          "isNotNull": false
        },
        {
          "name": "email",
          "type": "varchar(100)",
          "isNotNull": true,
          "isUQ": true
        },
        {
          "name": "phone",
          "type": "varchar(20)",
          "isNotNull": false
        },
        {
          "name": "salary",
          "type": "numeric(10,2)",
          "isNotNull": false,
          "hasDefault": true
        },
        {
          "name": "active",
          "type": "boolean",
          "isNotNull": true,
          "hasDefault": true
        },
        {
          "name": "hired_at",
          "type": "timestamp",
          "isNotNull": true,
          "hasDefault": true
        },
        {
          "name": "department_id",
          "type": "integer",
          "isFK": true,
          "references": "department(id)"
        }
      ],
      "description": "Xodim qo'shildi, salary=1000 va active=true sukut bo'yicha to'ldirildi."
    }
  }
];
