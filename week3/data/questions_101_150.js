// WIUT Database Systems (5BUIS009C) Week 3 - QUESTIONS_101_150
// Auto-generated comprehensive curriculum (150 Challenges)
window.QUESTIONS_101_150 = [
  {
    "id": 101,
    "sector": 7,
    "difficulty": "Floor 7 • Hard",
    "source": "T03 Task 5 • ON DELETE CASCADE va ON UPDATE CASCADE Kombinatsiyasi",
    "title": "To'liq Kaskad Arxitekturasi (CASCADE / CASCADE)",
    "story": "Kompaniya loyihalari uchun to'liq kaskad: ota yozuv o'chsa o'chadi, yangilansa yangilanadi.",
    "taskUz": "`project_task` nomli jadval yarating: `id` (integer PRIMARY KEY), `project_id` (integer REFERENCES project(id) ON DELETE CASCADE ON UPDATE CASCADE).\n\n📋 **Kutilayotgan Sxema:**\n• Cheklov: `REFERENCES project(id) ON DELETE CASCADE ON UPDATE CASCADE`",
    "hint": "`CREATE TABLE project_task (id integer PRIMARY KEY, project_id integer REFERENCES project(id) ON DELETE CASCADE ON UPDATE CASCADE);`",
    "solutions": [
      "CREATE TABLE project_task (id integer PRIMARY KEY, project_id integer REFERENCES project(id) ON DELETE CASCADE ON UPDATE CASCADE)",
      "CREATE TABLE project_task (id integer PRIMARY KEY, project_id integer REFERENCES project(id) ON DELETE CASCADE ON UPDATE CASCADE);",
      "create table project_task (id integer primary key, project_id integer references project(id) on delete cascade on update cascade)",
      "create table project_task (id integer primary key, project_id integer references project(id) on delete cascade on update cascade);",
      "CREATE TABLE project_task (id int PRIMARY KEY, project_id int REFERENCES project(id) ON DELETE CASCADE ON UPDATE CASCADE)",
      "CREATE TABLE project_task (id int PRIMARY KEY, project_id int REFERENCES project(id) ON DELETE CASCADE ON UPDATE CASCADE);",
      "create table project_task (id int primary key, project_id int references project(id) on delete cascade on update cascade)",
      "create table project_task (id int primary key, project_id int references project(id) on delete cascade on update cascade);"
    ],
    "explanation": "ON DELETE CASCADE ON UPDATE CASCADE kombinatsiyasi ulandi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
      "tableName": "project_task",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "project_id",
          "type": "integer",
          "isFK": true,
          "references": "project(id)"
        }
      ]
    }
  },
  {
    "id": 102,
    "sector": 7,
    "difficulty": "Floor 7 • Hard",
    "source": "T03 Task 5 • ON DELETE SET NULL va ON UPDATE CASCADE",
    "title": "Moslashuvchan Arxitektura: SET NULL va CASCADE",
    "story": "Seminar 3 5-topshiriq: Ota bo'lim o'chsa xodimlar saqlanib qolib NULL bo'lsin (`ON DELETE SET NULL`), lekin bo'lim ID yangilansa sinxron bo'lsin (`ON UPDATE CASCADE`).",
    "taskUz": "`employee` nomli jadval yarating: `id` (integer PRIMARY KEY), `department_id` (integer REFERENCES department(id) ON DELETE SET NULL ON UPDATE CASCADE).\n\n📋 **Kutilayotgan Sxema:**\n• Cheklov: `REFERENCES department(id) ON DELETE SET NULL ON UPDATE CASCADE`",
    "hint": "`CREATE TABLE employee (id integer PRIMARY KEY, department_id integer REFERENCES department(id) ON DELETE SET NULL ON UPDATE CASCADE);`",
    "solutions": [
      "CREATE TABLE employee (id integer PRIMARY KEY, department_id integer REFERENCES department(id) ON DELETE SET NULL ON UPDATE CASCADE)",
      "CREATE TABLE employee (id integer PRIMARY KEY, department_id integer REFERENCES department(id) ON DELETE SET NULL ON UPDATE CASCADE);",
      "create table employee (id integer primary key, department_id integer references department(id) on delete set null on update cascade)",
      "create table employee (id integer primary key, department_id integer references department(id) on delete set null on update cascade);",
      "CREATE TABLE employee (id int PRIMARY KEY, department_id int REFERENCES department(id) ON DELETE SET NULL ON UPDATE CASCADE)",
      "CREATE TABLE employee (id int PRIMARY KEY, department_id int REFERENCES department(id) ON DELETE SET NULL ON UPDATE CASCADE);",
      "create table employee (id int primary key, department_id int references department(id) on delete set null on update cascade)",
      "create table employee (id int primary key, department_id int references department(id) on delete set null on update cascade);"
    ],
    "explanation": "SET NULL va CASCADE kombinatsiyasi mustahkamlandi.",
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
          "name": "department_id",
          "type": "integer",
          "isFK": true,
          "references": "department(id)"
        }
      ]
    }
  },
  {
    "id": 103,
    "sector": 7,
    "difficulty": "Floor 7 • Medium",
    "source": "T03 Task 4 • Subquery bilan DELETE",
    "title": "Subquery Asosida Xodimlarni O'chirish",
    "story": "Byudjeti 0 bo'lgan bo'limlarning barcha xodimlarini bitta so'rovda o'chirib tashlang.",
    "taskUz": "`employee` jadvalidan `department_id IN (SELECT id FROM department WHERE budget = 0)` shartiga tushadigan xodimlarni o'chiring.\n\n📋 **Kutilayotgan DML:**\n`DELETE FROM employee WHERE department_id IN (SELECT id FROM department WHERE budget = 0);`",
    "hint": "`DELETE FROM employee WHERE department_id IN (SELECT id FROM department WHERE budget = 0);`",
    "solutions": [
      "DELETE FROM employee WHERE department_id IN (SELECT id FROM department WHERE budget = 0)",
      "DELETE FROM employee WHERE department_id IN (SELECT id FROM department WHERE budget = 0);",
      "delete from employee where department_id in (select id from department where budget = 0)",
      "delete from employee where department_id in (select id from department where budget = 0);",
      "DELETE FROM employee WHERE department_id IN (SELECT id FROM department WHERE budget = 0.00)",
      "DELETE FROM employee WHERE department_id IN (SELECT id FROM department WHERE budget = 0.00);",
      "delete from employee where department_id in (select id from department where budget = 0.00)",
      "delete from employee where department_id in (select id from department where budget = 0.00);"
    ],
    "explanation": "Subquery orqali nofaol bo'lim xodimlari tozalandi.",
    "expectedSchema": {
      "operation": "DELETE",
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
      "description": "Nol byudjetli bo'lim xodimlari o'chirildi."
    }
  },
  {
    "id": 104,
    "sector": 7,
    "difficulty": "Floor 7 • Hard",
    "source": "L03 Slide 25 • TRUNCATE CASCADE",
    "title": "Bog'langan Jadvallarni TRUNCATE CASCADE Bilan Tozalash",
    "story": "Agar jadvalga boshqa jadvallar tashqi kalit bilan bog'langan bo'lsa, oddiy TRUNCATE xato beradi. `TRUNCATE TABLE department CASCADE;` talab etiladi.",
    "taskUz": "`department` jadvalini va unga bog'liq bo'lgan barcha jadvallarni bir zumda tozalang: `TRUNCATE TABLE department CASCADE;`.\n\n📋 **Kutilayotgan DDL:**\n`TRUNCATE TABLE department CASCADE;`",
    "hint": "`TRUNCATE TABLE department CASCADE;` deb yozing.",
    "solutions": [
      "TRUNCATE TABLE department CASCADE",
      "TRUNCATE TABLE department CASCADE;",
      "truncate table department cascade",
      "truncate table department cascade;",
      "TRUNCATE department CASCADE",
      "TRUNCATE department CASCADE;",
      "truncate department cascade",
      "truncate department cascade;"
    ],
    "explanation": "TRUNCATE CASCADE bilan butun bog'liqliklar zanjiri tozalandi.",
    "expectedSchema": {
      "operation": "DELETE",
      "tableName": "department",
      "description": "department va bog'liq jadvallar TRUNCATE CASCADE bilan bo'shatildi."
    }
  },
  {
    "id": 105,
    "sector": 7,
    "difficulty": "Floor 7 • Boss Challenge",
    "source": "7-Qavat Bossi • Xavfsiz Kaskadli O'chirish Arxitekturasi",
    "title": "7-Qavat Bossi: Nomlangan Kaskadli Tashqi Kalit",
    "story": "7-qavatning buyuk bossi: `employee` jadvalida bo'limga bog'lanuvchi nomlangan tashqi kalit (`CONSTRAINT fk_emp_dept`) o'rnating, bunda o'chirishda kaskad (`ON DELETE CASCADE`), yangilanishda esa kaskad (`ON UPDATE CASCADE`) qoidalarini bir vaqtda qo'llang!",
    "taskUz": "`employee` nomli jadval yarating:\n• `id integer PRIMARY KEY`\n• `first_name varchar(25) NOT NULL`\n• `department_id integer`\n• `CONSTRAINT fk_emp_dept FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE ON UPDATE CASCADE`\n\n📋 **Kutilayotgan DDL:**\n`CREATE TABLE employee (id integer PRIMARY KEY, first_name varchar(25) NOT NULL, department_id integer, CONSTRAINT fk_emp_dept FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE ON UPDATE CASCADE);`",
    "hint": "`CREATE TABLE employee (id integer PRIMARY KEY, first_name varchar(25) NOT NULL, department_id integer, CONSTRAINT fk_emp_dept FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE ON UPDATE CASCADE);`",
    "solutions": [
      "CREATE TABLE employee (id integer PRIMARY KEY, first_name varchar(25) NOT NULL, department_id integer, CONSTRAINT fk_emp_dept FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE ON UPDATE CASCADE)",
      "CREATE TABLE employee (id integer PRIMARY KEY, first_name varchar(25) NOT NULL, department_id integer, CONSTRAINT fk_emp_dept FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE ON UPDATE CASCADE);",
      "create table employee (id integer primary key, first_name varchar(25) not null, department_id integer, constraint fk_emp_dept foreign key (department_id) references department(id) on delete cascade on update cascade)",
      "create table employee (id integer primary key, first_name varchar(25) not null, department_id integer, constraint fk_emp_dept foreign key (department_id) references department(id) on delete cascade on update cascade);",
      "CREATE TABLE employee (id int PRIMARY KEY, first_name varchar(25) NOT NULL, department_id int, CONSTRAINT fk_emp_dept FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE ON UPDATE CASCADE)",
      "CREATE TABLE employee (id int PRIMARY KEY, first_name varchar(25) NOT NULL, department_id int, CONSTRAINT fk_emp_dept FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE ON UPDATE CASCADE);",
      "create table employee (id int primary key, first_name varchar(25) not null, department_id int, constraint fk_emp_dept foreign key (department_id) references department(id) on delete cascade on update cascade)",
      "create table employee (id int primary key, first_name varchar(25) not null, department_id int, constraint fk_emp_dept foreign key (department_id) references department(id) on delete cascade on update cascade);"
    ],
    "explanation": "7-Qavat Bossi zabt etildi! DML DELETE, TRUNCATE, va referensial kaskad yaxlitlik qoidalari to'liq o'zlashtirildi.",
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
          "name": "department_id",
          "type": "integer",
          "isFK": true,
          "references": "department(id) ON DELETE CASCADE ON UPDATE CASCADE"
        }
      ]
    }
  },
  {
    "id": 106,
    "sector": 8,
    "difficulty": "Floor 8 • Easy",
    "source": "T03 Task 2 • Yangi Ustun Qo'shish (ADD COLUMN)",
    "title": "Yangi Ustun Qo'shish: notes text",
    "story": "Seminar 3 2-topshiriq: Xodimlar haqida qo'shimcha erkin izohlar yozish uchun `employee` jadvaliga `notes text` ustunini qo'shing.",
    "taskUz": "`employee` jadvaliga yangi `notes text` ustunini qo'shing.\n\n📋 **Kutilayotgan DDL:**\n`ALTER TABLE employee ADD COLUMN notes text;`",
    "hint": "`ALTER TABLE employee ADD COLUMN notes text;` deb yozing.",
    "solutions": [
      "ALTER TABLE employee ADD COLUMN notes text",
      "ALTER TABLE employee ADD COLUMN notes text;",
      "alter table employee add column notes text",
      "alter table employee add column notes text;",
      "ALTER TABLE employee ADD notes text",
      "ALTER TABLE employee ADD notes text;",
      "alter table employee add notes text",
      "alter table employee add notes text;"
    ],
    "explanation": "notes text ustuni employee jadvaliga muvaffaqiyatli qo'shildi.",
    "expectedSchema": {
      "operation": "ALTER_TABLE",
      "tableName": "employee",
      "action": "ADD COLUMN notes text",
      "detail": "Yangi 'notes' matnli ustunini qo'shish",
      "description": "Seminar 3 Task 2: employee jadvaliga erkin matnli notes ustuni qo'shildi.",
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
        },
        {
          "name": "notes",
          "type": "text",
          "isHighlighted": true,
          "customBadge": "ADDED"
        }
      ]
    }
  },
  {
    "id": 107,
    "sector": 8,
    "difficulty": "Floor 8 • Medium",
    "source": "T03 Task 2 • DEFAULT Bilan Ustun Qo'shish",
    "title": "Standart Qiymatli Yangi Ustun Qo'shish",
    "story": "Xodimlar reytingini yuritish uchun standart qiymati 5 bo'lgan `rating integer DEFAULT 5` ustunini qo'shing.",
    "taskUz": "`employee` jadvaliga `rating integer DEFAULT 5` ustunini qo'shing.\n\n📋 **Kutilayotgan DDL:**\n`ALTER TABLE employee ADD COLUMN rating integer DEFAULT 5;`",
    "hint": "`ALTER TABLE employee ADD COLUMN rating integer DEFAULT 5;`",
    "solutions": [
      "ALTER TABLE employee ADD COLUMN rating integer DEFAULT 5",
      "ALTER TABLE employee ADD COLUMN rating integer DEFAULT 5;",
      "alter table employee add column rating integer default 5",
      "alter table employee add column rating integer default 5;",
      "ALTER TABLE employee ADD rating integer DEFAULT 5",
      "ALTER TABLE employee ADD rating integer DEFAULT 5;",
      "alter table employee add rating integer default 5",
      "alter table employee add rating integer default 5;",
      "ALTER TABLE employee ADD COLUMN rating int DEFAULT 5",
      "ALTER TABLE employee ADD COLUMN rating int DEFAULT 5;",
      "alter table employee add column rating int default 5",
      "alter table employee add column rating int default 5;"
    ],
    "explanation": "rating ustuni standart 5 qiymati bilan ulandi.",
    "expectedSchema": {
      "operation": "ALTER_TABLE",
      "tableName": "employee",
      "action": "ADD COLUMN rating integer DEFAULT 5",
      "detail": "Standart 5 qiymatli rating ustunini qo'shish",
      "description": "employee jadvaliga standart qiymatli yangi maydon kiritildi.",
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
        },
        {
          "name": "rating",
          "type": "integer",
          "hasDefault": true,
          "isHighlighted": true,
          "customBadge": "ADDED DEFAULT 5"
        }
      ]
    }
  },
  {
    "id": 108,
    "sector": 8,
    "difficulty": "Floor 8 • Medium",
    "source": "T03 Task 2 • Ustunni O'chirish (DROP COLUMN)",
    "title": "Keraksiz Ustunni O'chirish: DROP COLUMN phone",
    "story": "Seminar 3 2-topshiriq: Maxfiylik qoidalariga binoan `employee` jadvalidan `phone` ustunini o'chirib tashlang.",
    "taskUz": "`employee` jadvalidan `phone` ustunini o'chiring.\n\n📋 **Kutilayotgan DDL:**\n`ALTER TABLE employee DROP COLUMN phone;`",
    "hint": "`ALTER TABLE employee DROP COLUMN phone;` deb yozing.",
    "solutions": [
      "ALTER TABLE employee DROP COLUMN phone",
      "ALTER TABLE employee DROP COLUMN phone;",
      "alter table employee drop column phone",
      "alter table employee drop column phone;",
      "ALTER TABLE employee DROP COLUMN IF EXISTS phone",
      "ALTER TABLE employee DROP COLUMN IF EXISTS phone;",
      "alter table employee drop column if exists phone",
      "alter table employee drop column if exists phone;",
      "ALTER TABLE employee DROP phone",
      "ALTER TABLE employee DROP phone;",
      "alter table employee drop phone",
      "alter table employee drop phone;"
    ],
    "explanation": "phone ustuni employee jadvalidan o'chirildi.",
    "expectedSchema": {
      "operation": "ALTER_TABLE",
      "tableName": "employee",
      "action": "DROP COLUMN phone",
      "detail": "phone ustunini jadval strukturasidan o'chirish",
      "description": "Seminar 3 Task 2: phone ustuni xavfsiz o'chirildi.",
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
      ]
    }
  },
  {
    "id": 109,
    "sector": 8,
    "difficulty": "Floor 8 • Medium",
    "source": "T03 Task 2 • Ustun Nomini O'zgartirish (RENAME COLUMN)",
    "title": "Ustun Nomini O'zgartirish: hired_at TO hire_date",
    "story": "Seminar 3 2-topshiriq: Standart nomlash konvensiyasiga moslashtirish uchun `hired_at` ustunini `hire_date` deb qayta nomlang.",
    "taskUz": "`employee` jadvalidagi `hired_at` ustuni nomini `hire_date` ga o'zgartiring.\n\n📋 **Kutilayotgan DDL:**\n`ALTER TABLE employee RENAME COLUMN hired_at TO hire_date;`",
    "hint": "`ALTER TABLE employee RENAME COLUMN hired_at TO hire_date;`",
    "solutions": [
      "ALTER TABLE employee RENAME COLUMN hired_at TO hire_date",
      "ALTER TABLE employee RENAME COLUMN hired_at TO hire_date;",
      "alter table employee rename column hired_at to hire_date",
      "alter table employee rename column hired_at to hire_date;",
      "ALTER TABLE employee RENAME hired_at TO hire_date",
      "ALTER TABLE employee RENAME hired_at TO hire_date;",
      "alter table employee rename hired_at to hire_date",
      "alter table employee rename hired_at to hire_date;"
    ],
    "explanation": "hired_at ustuni muvaffaqiyatli hire_date ga almashtirildi.",
    "expectedSchema": {
      "operation": "ALTER_TABLE",
      "tableName": "employee",
      "action": "RENAME COLUMN hired_at TO hire_date",
      "detail": "hired_at nomini hire_date ga o'zgartirish",
      "description": "Seminar 3 Task 2: Ustun nomi yangilandi.",
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
          "name": "hire_date",
          "type": "timestamp",
          "isNotNull": true,
          "hasDefault": true,
          "isHighlighted": true,
          "customBadge": "RENAMED"
        },
        {
          "name": "department_id",
          "type": "integer",
          "isFK": true,
          "references": "department(id)"
        }
      ]
    }
  },
  {
    "id": 110,
    "sector": 8,
    "difficulty": "Floor 8 • Hard",
    "source": "T03 Task 2 • Ustunni Majburiy Qilish (SET NOT NULL)",
    "title": "Tug'ilgan Sanani (dob) Majburiy Qilish: SET NOT NULL",
    "story": "Seminar 3 2-topshiriq: Dastlab xodimlarning `dob` (date of birth) ustuni ixtiyoriy (nullable) edi. Endi HR talabiga ko'ra uni majburiy (`SET NOT NULL`) qiling.",
    "taskUz": "`employee` jadvalining `dob` ustuniga `SET NOT NULL` cheklovini o'rnating.\n\n📋 **Kutilayotgan DDL:**\n`ALTER TABLE employee ALTER COLUMN dob SET NOT NULL;`",
    "hint": "`ALTER TABLE employee ALTER COLUMN dob SET NOT NULL;` deb yozing.",
    "solutions": [
      "ALTER TABLE employee ALTER COLUMN dob SET NOT NULL",
      "ALTER TABLE employee ALTER COLUMN dob SET NOT NULL;",
      "alter table employee alter column dob set not null",
      "alter table employee alter column dob set not null;",
      "ALTER TABLE employee ALTER dob SET NOT NULL",
      "ALTER TABLE employee ALTER dob SET NOT NULL;",
      "alter table employee alter dob set not null",
      "alter table employee alter dob set not null;"
    ],
    "explanation": "dob ustuni muvaffaqiyatli NOT NULL holatiga o'tkazildi.",
    "expectedSchema": {
      "operation": "ALTER_TABLE",
      "tableName": "employee",
      "action": "ALTER COLUMN dob SET NOT NULL",
      "detail": "dob ustunini majburiy (NOT NULL) qilish",
      "description": "Seminar 3 Task 2: Tug'ilgan sana ustuniga NOT NULL cheklovi o'rnatildi.",
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
          "isNotNull": true,
          "isHighlighted": true,
          "customBadge": "SET NOT NULL"
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
      ]
    }
  },
  {
    "id": 111,
    "sector": 8,
    "difficulty": "Floor 8 • Medium",
    "source": "T03 Task 2 • Majburiylikni Bekor Qilish (DROP NOT NULL)",
    "title": "Majburiylikni Bekor Qilish: DROP NOT NULL",
    "story": "Seminar 3 2-topshiriq: Xodimlarning `dob` ustunidagi majburiylik talabini bekor qilib, uni qayta ixtiyoriy (NULL bo'lishi mumkin) holatga keltiring.",
    "taskUz": "`employee` jadvalining `dob` ustunidagi NOT NULL cheklovini bekor qiling (`DROP NOT NULL`).\n\n📋 **Kutilayotgan DDL:**\n`ALTER TABLE employee ALTER COLUMN dob DROP NOT NULL;`",
    "hint": "`ALTER TABLE employee ALTER COLUMN dob DROP NOT NULL;` deb yozing.",
    "solutions": [
      "ALTER TABLE employee ALTER COLUMN dob DROP NOT NULL",
      "ALTER TABLE employee ALTER COLUMN dob DROP NOT NULL;",
      "alter table employee alter column dob drop not null",
      "alter table employee alter column dob drop not null;",
      "ALTER TABLE employee ALTER dob DROP NOT NULL",
      "ALTER TABLE employee ALTER dob DROP NOT NULL;",
      "alter table employee alter dob drop not null",
      "alter table employee alter dob drop not null;"
    ],
    "explanation": "dob ustunidan NOT NULL cheklovi olib tashlandi.",
    "expectedSchema": {
      "operation": "ALTER_TABLE",
      "tableName": "employee",
      "action": "ALTER COLUMN dob DROP NOT NULL",
      "detail": "dob ustunidan NOT NULL cheklovini bekor qilish",
      "description": "Seminar 3 Task 2: dob ustuni yana NULL qiymatlarni qabul qiladi.",
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
          "isNotNull": false,
          "isHighlighted": true,
          "customBadge": "NULLABLE"
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
      ]
    }
  },
  {
    "id": 112,
    "sector": 8,
    "difficulty": "Floor 8 • Medium",
    "source": "T03 Task 2 • Ustun Ma'lumot Turini O'zgartirish (ALTER TYPE)",
    "title": "Ustun Hajmini Kengaytirish: first_name TYPE varchar(50)",
    "story": "Seminar 3 2-topshiriq: Uzun chet el ismlari sig'ishi uchun `first_name` ustuni hajmini `varchar(25)` dan `varchar(50)` ga kengaytiring.",
    "taskUz": "`employee` jadvalida `first_name` ustuni turini `varchar(50)` ga o'zgartiring.\n\n📋 **Kutilayotgan DDL:**\n`ALTER TABLE employee ALTER COLUMN first_name TYPE varchar(50);`",
    "hint": "`ALTER TABLE employee ALTER COLUMN first_name TYPE varchar(50);`",
    "solutions": [
      "ALTER TABLE employee ALTER COLUMN first_name TYPE varchar(50)",
      "ALTER TABLE employee ALTER COLUMN first_name TYPE varchar(50);",
      "alter table employee alter column first_name type varchar(50)",
      "alter table employee alter column first_name type varchar(50);",
      "ALTER TABLE employee ALTER first_name TYPE varchar(50)",
      "ALTER TABLE employee ALTER first_name TYPE varchar(50);",
      "alter table employee alter first_name type varchar(50)",
      "alter table employee alter first_name type varchar(50);"
    ],
    "explanation": "first_name ustuni muvaffaqiyatli varchar(50) ga kengaytirildi.",
    "expectedSchema": {
      "operation": "ALTER_TABLE",
      "tableName": "employee",
      "action": "ALTER COLUMN first_name TYPE varchar(50)",
      "detail": "first_name turini varchar(50) ga oshirish",
      "description": "Seminar 3 Task 2: Ism ustuni hajmi 50 belgiga oshirildi.",
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
          "type": "varchar(50)",
          "isNotNull": true,
          "isHighlighted": true,
          "customBadge": "EXPANDED"
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
      ]
    }
  },
  {
    "id": 113,
    "sector": 8,
    "difficulty": "Floor 8 • Medium",
    "source": "T03 Task 2 • Telefon Maydoni Hajmini Kengaytirish",
    "title": "Telefon Maydoni Turini Kengaytirish: phone TYPE varchar(30)",
    "story": "Xalqaro qo'shimcha ichki raqamlar (extension) uchun `phone` maydonini `varchar(30)` ga o'zgartiring.",
    "taskUz": "`employee` jadvalida `phone` ustuni turini `varchar(30)` ga kengaytiring.\n\n📋 **Kutilayotgan DDL:**\n`ALTER TABLE employee ALTER COLUMN phone TYPE varchar(30);`",
    "hint": "`ALTER TABLE employee ALTER COLUMN phone TYPE varchar(30);`",
    "solutions": [
      "ALTER TABLE employee ALTER COLUMN phone TYPE varchar(30)",
      "ALTER TABLE employee ALTER COLUMN phone TYPE varchar(30);",
      "alter table employee alter column phone type varchar(30)",
      "alter table employee alter column phone type varchar(30);",
      "ALTER TABLE employee ALTER phone TYPE varchar(30)",
      "ALTER TABLE employee ALTER phone TYPE varchar(30);",
      "alter table employee alter phone type varchar(30)",
      "alter table employee alter phone type varchar(30);"
    ],
    "explanation": "phone maydoni turi varchar(30) ga muvaffaqiyatli o'zgartirildi.",
    "expectedSchema": {
      "operation": "ALTER_TABLE",
      "tableName": "employee",
      "action": "ALTER COLUMN phone TYPE varchar(30)",
      "detail": "phone ustuni turini varchar(30) qilish",
      "description": "Telefon raqamlari uchun xotira maydoni kengaytirildi.",
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
          "type": "varchar(30)",
          "isNotNull": false,
          "isHighlighted": true,
          "customBadge": "EXPANDED"
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
      ]
    }
  },
  {
    "id": 114,
    "sector": 8,
    "difficulty": "Floor 8 • Medium",
    "source": "T03 Task 2 • Yangi DEFAULT O'rnatish (SET DEFAULT)",
    "title": "Yangi Standart Oylik O'rnatish: SET DEFAULT 1200.00",
    "story": "Seminar 3 2-topshiriq: Bazaviy oylik ko'tarildi. `salary` ustuniga yangi `DEFAULT 1200.00` qiymatini o'rnating.",
    "taskUz": "`employee` jadvalida `salary` ustunining standart qiymatini 1200.00 qilib belgilang.\n\n📋 **Kutilayotgan DDL:**\n`ALTER TABLE employee ALTER COLUMN salary SET DEFAULT 1200.00;`",
    "hint": "`ALTER TABLE employee ALTER COLUMN salary SET DEFAULT 1200.00;`",
    "solutions": [
      "ALTER TABLE employee ALTER COLUMN salary SET DEFAULT 1200.00",
      "ALTER TABLE employee ALTER COLUMN salary SET DEFAULT 1200.00;",
      "alter table employee alter column salary set default 1200.00",
      "alter table employee alter column salary set default 1200.00;",
      "ALTER TABLE employee ALTER COLUMN salary SET DEFAULT 1200",
      "ALTER TABLE employee ALTER COLUMN salary SET DEFAULT 1200;",
      "alter table employee alter column salary set default 1200",
      "alter table employee alter column salary set default 1200;",
      "ALTER TABLE employee ALTER salary SET DEFAULT 1200.00",
      "ALTER TABLE employee ALTER salary SET DEFAULT 1200.00;",
      "alter table employee alter salary set default 1200.00",
      "alter table employee alter salary set default 1200.00;",
      "ALTER TABLE employee ALTER salary SET DEFAULT 1200",
      "ALTER TABLE employee ALTER salary SET DEFAULT 1200;",
      "alter table employee alter salary set default 1200",
      "alter table employee alter salary set default 1200;"
    ],
    "explanation": "salary ustuniga yangi DEFAULT 1200.00 o'rnatildi.",
    "expectedSchema": {
      "operation": "ALTER_TABLE",
      "tableName": "employee",
      "action": "ALTER COLUMN salary SET DEFAULT 1200.00",
      "detail": "Standart maosh qiymatini 1200.00 ga yangilash",
      "description": "Seminar 3 Task 2: salary ustunining standart qiymati yangilandi.",
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
          "hasDefault": true,
          "isHighlighted": true,
          "customBadge": "DEFAULT 1200"
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
      ]
    }
  },
  {
    "id": 115,
    "sector": 8,
    "difficulty": "Floor 8 • Medium",
    "source": "T03 Task 2 • DEFAULT ni Olib Tashlash (DROP DEFAULT)",
    "title": "Standart Qiymatni Olib Tashlash: DROP DEFAULT",
    "story": "Seminar 3 2-topshiriq: `salary` ustunidan sukut bo'yicha qiymatni olib tashlang, shunda har bir xodimga oylik majburiy kiritilishi ta'minlansin.",
    "taskUz": "`employee` jadvalining `salary` ustunidan `DROP DEFAULT` buyrug'i orqali standart qiymatni bekor qiling.\n\n📋 **Kutilayotgan DDL:**\n`ALTER TABLE employee ALTER COLUMN salary DROP DEFAULT;`",
    "hint": "`ALTER TABLE employee ALTER COLUMN salary DROP DEFAULT;`",
    "solutions": [
      "ALTER TABLE employee ALTER COLUMN salary DROP DEFAULT",
      "ALTER TABLE employee ALTER COLUMN salary DROP DEFAULT;",
      "alter table employee alter column salary drop default",
      "alter table employee alter column salary drop default;",
      "ALTER TABLE employee ALTER salary DROP DEFAULT",
      "ALTER TABLE employee ALTER salary DROP DEFAULT;",
      "alter table employee alter salary drop default",
      "alter table employee alter salary drop default;"
    ],
    "explanation": "salary ustunidan DEFAULT xususiyati olib tashlandi.",
    "expectedSchema": {
      "operation": "ALTER_TABLE",
      "tableName": "employee",
      "action": "ALTER COLUMN salary DROP DEFAULT",
      "detail": "salary ustunidan DEFAULT qiymatni o'chirish",
      "description": "Seminar 3 Task 2: Standart qiymat olib tashlandi.",
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
          "hasDefault": false,
          "isHighlighted": true,
          "customBadge": "NO DEFAULT"
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
      ]
    }
  },
  {
    "id": 116,
    "sector": 8,
    "difficulty": "Floor 8 • Medium",
    "source": "T03 Task 2 • Favqulodda Aloqa Ustuni Qo'shish",
    "title": "Favqulodda Aloqa Ustunini Qo'shish (emergency_contact)",
    "story": "HR xavfsizlik standarti bo'yicha `employee` jadvaliga `emergency_contact varchar(100)` ustunini qo'shish lozim.",
    "taskUz": "`employee` jadvaliga yangi `emergency_contact varchar(100)` ustunini qo'shing.\n\n📋 **Kutilayotgan DDL:**\n`ALTER TABLE employee ADD COLUMN emergency_contact varchar(100);`",
    "hint": "`ALTER TABLE employee ADD COLUMN emergency_contact varchar(100);`",
    "solutions": [
      "ALTER TABLE employee ADD COLUMN emergency_contact varchar(100)",
      "ALTER TABLE employee ADD COLUMN emergency_contact varchar(100);",
      "alter table employee add column emergency_contact varchar(100)",
      "alter table employee add column emergency_contact varchar(100);",
      "ALTER TABLE employee ADD emergency_contact varchar(100)",
      "ALTER TABLE employee ADD emergency_contact varchar(100);",
      "alter table employee add emergency_contact varchar(100)",
      "alter table employee add emergency_contact varchar(100);"
    ],
    "explanation": "emergency_contact maydoni muvaffaqiyatli qo'shildi.",
    "expectedSchema": {
      "operation": "ALTER_TABLE",
      "tableName": "employee",
      "action": "ADD COLUMN emergency_contact varchar(100)",
      "detail": "emergency_contact ustunini qo'shish",
      "description": "Xodimlar jadvaliga favqulodda aloqa maydoni ulandi.",
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
        },
        {
          "name": "emergency_contact",
          "type": "varchar(100)",
          "isHighlighted": true,
          "customBadge": "ADDED"
        }
      ]
    }
  },
  {
    "id": 117,
    "sector": 8,
    "difficulty": "Floor 8 • Easy",
    "source": "L03 Slide 26 • Jadval Nomini O'zgartirish (RENAME TO)",
    "title": "Jadval Nomini O'zgartirish: branch TO regional_branch",
    "story": "Kompaniya filiallarni qayta tasniflamoqda. `branch` jadvalini `regional_branch` deb qayta nomlang.",
    "taskUz": "`branch` jadvali nomini `regional_branch` ga o'zgartiring.\n\n📋 **Kutilayotgan DDL:**\n`ALTER TABLE branch RENAME TO regional_branch;`",
    "hint": "`ALTER TABLE branch RENAME TO regional_branch;`",
    "solutions": [
      "ALTER TABLE branch RENAME TO regional_branch",
      "ALTER TABLE branch RENAME TO regional_branch;",
      "alter table branch rename to regional_branch",
      "alter table branch rename to regional_branch;"
    ],
    "explanation": "branch jadvali regional_branch ga o'zgartirildi.",
    "expectedSchema": {
      "operation": "ALTER_TABLE",
      "tableName": "branch",
      "action": "RENAME TO regional_branch",
      "detail": "Jadval nomini regional_branch ga o'zgartirish",
      "description": "Jadval relyatsion nomi muvaffaqiyatli yangilandi."
    }
  },
  {
    "id": 118,
    "sector": 8,
    "difficulty": "Floor 8 • Easy",
    "source": "T03 Task 2 • Bo'lim Byudjeti Ustunini Nomlash",
    "title": "Ustun Nomini Oydinlashtirish: budget TO annual_budget",
    "story": "Seminar 3 2-topshiriq: `department` jadvalidagi `budget` ustunini aniqlik kiritish uchun `annual_budget` deb o'zgartiring.",
    "taskUz": "`department` jadvalida `budget` ustunini `annual_budget` deb qayta nomlang.\n\n📋 **Kutilayotgan DDL:**\n`ALTER TABLE department RENAME COLUMN budget TO annual_budget;`",
    "hint": "`ALTER TABLE department RENAME COLUMN budget TO annual_budget;`",
    "solutions": [
      "ALTER TABLE department RENAME COLUMN budget TO annual_budget",
      "ALTER TABLE department RENAME COLUMN budget TO annual_budget;",
      "alter table department rename column budget to annual_budget",
      "alter table department rename column budget to annual_budget;",
      "ALTER TABLE department RENAME budget TO annual_budget",
      "ALTER TABLE department RENAME budget TO annual_budget;",
      "alter table department rename budget to annual_budget",
      "alter table department rename budget to annual_budget;"
    ],
    "explanation": "budget ustuni annual_budget ga aylantirildi.",
    "expectedSchema": {
      "operation": "ALTER_TABLE",
      "tableName": "department",
      "action": "RENAME COLUMN budget TO annual_budget",
      "detail": "budget nomini annual_budget ga o'zgartirish",
      "description": "Seminar 3 Task 2: Byudjet ustuni nomi oydinlashtirildi.",
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
          "name": "annual_budget",
          "type": "numeric(12,2)",
          "isNotNull": false,
          "hasCheck": true,
          "isHighlighted": true,
          "customBadge": "RENAMED"
        }
      ]
    }
  },
  {
    "id": 119,
    "sector": 8,
    "difficulty": "Floor 8 • Medium",
    "source": "T03 Task 2 • Familiya Ustuni Hajmini Kengaytirish",
    "title": "Familiya Hajmini Kengaytirish: last_name TYPE varchar(50)",
    "story": "Seminar 3 2-topshiriq: Xodimlarning `last_name` (familiya) maydonini ham `varchar(50)` ga kengaytiring.",
    "taskUz": "`employee` jadvalida `last_name` ustuni turini `varchar(50)` ga o'zgartiring.\n\n📋 **Kutilayotgan DDL:**\n`ALTER TABLE employee ALTER COLUMN last_name TYPE varchar(50);`",
    "hint": "`ALTER TABLE employee ALTER COLUMN last_name TYPE varchar(50);`",
    "solutions": [
      "ALTER TABLE employee ALTER COLUMN last_name TYPE varchar(50)",
      "ALTER TABLE employee ALTER COLUMN last_name TYPE varchar(50);",
      "alter table employee alter column last_name type varchar(50)",
      "alter table employee alter column last_name type varchar(50);",
      "ALTER TABLE employee ALTER last_name TYPE varchar(50)",
      "ALTER TABLE employee ALTER last_name TYPE varchar(50);",
      "alter table employee alter last_name type varchar(50)",
      "alter table employee alter last_name type varchar(50);"
    ],
    "explanation": "last_name ustuni 50 ta belgiga kengaytirildi.",
    "expectedSchema": {
      "operation": "ALTER_TABLE",
      "tableName": "employee",
      "action": "ALTER COLUMN last_name TYPE varchar(50)",
      "detail": "last_name turini varchar(50) ga oshirish",
      "description": "Seminar 3 Task 2: Familiya ustuni hajmi oshirildi.",
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
          "type": "varchar(50)",
          "isNotNull": true,
          "isHighlighted": true,
          "customBadge": "EXPANDED"
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
      ]
    }
  },
  {
    "id": 120,
    "sector": 8,
    "difficulty": "Floor 8 • Boss Challenge",
    "source": "8-Qavat Bossi • Jismoniy Shaxs PINFL Ustunini Qo'shish",
    "title": "8-Qavat Bossi: Jismoniy Shaxs JShShIR Ustuni (national_id)",
    "story": "8-qavatning buyuk bossi: O'zbekiston soliq va pensiya tizimi integratsiyasi uchun `employee` jadvaliga 14 xonali unikal `national_id varchar(14)` ustunini qo'shing!",
    "taskUz": "`employee` jadvaliga yangi `national_id varchar(14)` ustunini qo'shing.\n\n📋 **Kutilayotgan DDL:**\n`ALTER TABLE employee ADD COLUMN national_id varchar(14);`",
    "hint": "`ALTER TABLE employee ADD COLUMN national_id varchar(14);`",
    "solutions": [
      "ALTER TABLE employee ADD COLUMN national_id varchar(14)",
      "ALTER TABLE employee ADD COLUMN national_id varchar(14);",
      "alter table employee add column national_id varchar(14)",
      "alter table employee add column national_id varchar(14);",
      "ALTER TABLE employee ADD national_id varchar(14)",
      "ALTER TABLE employee ADD national_id varchar(14);",
      "alter table employee add national_id varchar(14)",
      "alter table employee add national_id varchar(14);"
    ],
    "explanation": "8-Qavat Bossi zabt etildi! ALTER TABLE strukturaviy o'zgarishlar (ADD, DROP, RENAME, TYPE, SET NOT NULL, DEFAULT) mukammal o'zlashtirildi.",
    "expectedSchema": {
      "operation": "ALTER_TABLE",
      "tableName": "employee",
      "action": "ADD COLUMN national_id varchar(14)",
      "detail": "14 xonali national_id ustunini qo'shish",
      "description": "Davlat identifikatori (PINFL) ustuni employee jadvaliga muvaffaqiyatli kiritildi.",
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
        },
        {
          "name": "national_id",
          "type": "varchar(14)",
          "isHighlighted": true,
          "customBadge": "PINFL 14"
        }
      ]
    }
  },
  {
    "id": 121,
    "sector": 9,
    "difficulty": "Floor 9 • Easy",
    "source": "T03 Task 2 • ALTER TABLE ADD CONSTRAINT PRIMARY KEY",
    "title": "Birlamchi Kalit Cheklovini Qo'shish (ADD CONSTRAINT PK)",
    "story": "Seminar 3 2-topshiriq: Agar jadval yaratilganda PK qo'yilmagan bo'lsa, uni keyinchalik `ALTER TABLE` orqali qo'shamiz.",
    "taskUz": "`department` jadvaliga `pk_department` nomli birlamchi kalit qo'shing (`PRIMARY KEY (id)`).\n\n📋 **Kutilayotgan DDL:**\n`ALTER TABLE department ADD CONSTRAINT pk_department PRIMARY KEY (id);`",
    "hint": "`ALTER TABLE department ADD CONSTRAINT pk_department PRIMARY KEY (id);`",
    "solutions": [
      "ALTER TABLE department ADD CONSTRAINT pk_department PRIMARY KEY (id)",
      "ALTER TABLE department ADD CONSTRAINT pk_department PRIMARY KEY (id);",
      "alter table department add constraint pk_department primary key (id)",
      "alter table department add constraint pk_department primary key (id);",
      "ALTER TABLE department ADD PRIMARY KEY (id)",
      "ALTER TABLE department ADD PRIMARY KEY (id);",
      "alter table department add primary key (id)",
      "alter table department add primary key (id);"
    ],
    "explanation": "pk_department birlamchi kaliti jadvalga biriktirildi.",
    "expectedSchema": {
      "operation": "ALTER_TABLE",
      "tableName": "department",
      "action": "ADD CONSTRAINT pk_department PRIMARY KEY (id)",
      "detail": "id ustuniga birlamchi kalit o'rnatish",
      "description": "Seminar 3 Task 2: ALTER TABLE orqali Primary Key cheklovi o'rnatildi.",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true,
          "isIdentity": true,
          "isNotNull": true,
          "isHighlighted": true,
          "customBadge": "PK ADDED"
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
      ]
    }
  },
  {
    "id": 122,
    "sector": 9,
    "difficulty": "Floor 9 • Medium",
    "source": "T03 Task 2 • ALTER TABLE ADD CONSTRAINT FOREIGN KEY",
    "title": "Tashqi Kalit Cheklovini Qo'shish (ADD CONSTRAINT FK)",
    "story": "Seminar 3 2-topshiriq: `employee` jadvalidagi `department_id` ustunini `department(id)` ga bog'lovchi `fk_employee_department` cheklovini o'rnating.",
    "taskUz": "`employee` jadvaliga `fk_employee_department` nomli tashqi kalit qo'shing: `FOREIGN KEY (department_id) REFERENCES department(id)`.\n\n📋 **Kutilayotgan DDL:**\n`ALTER TABLE employee ADD CONSTRAINT fk_employee_department FOREIGN KEY (department_id) REFERENCES department(id);`",
    "hint": "`ALTER TABLE employee ADD CONSTRAINT fk_employee_department FOREIGN KEY (department_id) REFERENCES department(id);`",
    "solutions": [
      "ALTER TABLE employee ADD CONSTRAINT fk_employee_department FOREIGN KEY (department_id) REFERENCES department(id)",
      "ALTER TABLE employee ADD CONSTRAINT fk_employee_department FOREIGN KEY (department_id) REFERENCES department(id);",
      "alter table employee add constraint fk_employee_department foreign key (department_id) references department(id)",
      "alter table employee add constraint fk_employee_department foreign key (department_id) references department(id);",
      "ALTER TABLE employee ADD FOREIGN KEY (department_id) REFERENCES department(id)",
      "ALTER TABLE employee ADD FOREIGN KEY (department_id) REFERENCES department(id);",
      "alter table employee add foreign key (department_id) references department(id)",
      "alter table employee add foreign key (department_id) references department(id);"
    ],
    "explanation": "fk_employee_department tashqi kaliti o'rnatildi.",
    "expectedSchema": {
      "operation": "ALTER_TABLE",
      "tableName": "employee",
      "action": "ADD CONSTRAINT fk_employee_department",
      "detail": "department_id ustunini department(id) ga bog'lash",
      "description": "Seminar 3 Task 2: Referential integrity tashqi kaliti faollashtirildi.",
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
          "references": "department(id)",
          "isHighlighted": true,
          "customBadge": "FK LINKED"
        }
      ]
    }
  },
  {
    "id": 123,
    "sector": 9,
    "difficulty": "Floor 9 • Medium",
    "source": "T03 Task 2 • ALTER TABLE ADD CONSTRAINT UNIQUE",
    "title": "Unikal Cheklov Qo'shish: uq_employee_email",
    "story": "Seminar 3 2-topshiriq: `employee` jadvalidagi `email` ustuniga `uq_employee_email` nomli `UNIQUE` cheklovini o'rnating.",
    "taskUz": "`employee` jadvaliga `uq_employee_email` nomli unikal cheklov qo'shing (`UNIQUE (email)`).\n\n📋 **Kutilayotgan DDL:**\n`ALTER TABLE employee ADD CONSTRAINT uq_employee_email UNIQUE (email);`",
    "hint": "`ALTER TABLE employee ADD CONSTRAINT uq_employee_email UNIQUE (email);`",
    "solutions": [
      "ALTER TABLE employee ADD CONSTRAINT uq_employee_email UNIQUE (email)",
      "ALTER TABLE employee ADD CONSTRAINT uq_employee_email UNIQUE (email);",
      "alter table employee add constraint uq_employee_email unique (email)",
      "alter table employee add constraint uq_employee_email unique (email);",
      "ALTER TABLE employee ADD UNIQUE (email)",
      "ALTER TABLE employee ADD UNIQUE (email);",
      "alter table employee add unique (email)",
      "alter table employee add unique (email);"
    ],
    "explanation": "uq_employee_email unikal cheklovi ulandi.",
    "expectedSchema": {
      "operation": "ALTER_TABLE",
      "tableName": "employee",
      "action": "ADD CONSTRAINT uq_employee_email UNIQUE (email)",
      "detail": "email ustuniga unikal cheklov biriktirish",
      "description": "Seminar 3 Task 2: Email manzillarining takrorlanmasligi kafolatlandi.",
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
          "isUQ": true,
          "isHighlighted": true,
          "customBadge": "UQ ADDED"
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
      ]
    }
  },
  {
    "id": 124,
    "sector": 9,
    "difficulty": "Floor 9 • Medium",
    "source": "T03 Task 2 • ALTER TABLE ADD CONSTRAINT CHECK",
    "title": "Byudjet CHECK Cheklovini Qo'shish: chk_department_budget",
    "story": "Seminar 3 2-topshiriq: `department` jadvalidagi `budget` manfiy bo'lmasligi uchun `chk_department_budget` cheklovini (`CHECK (budget >= 0)`) qo'shing.",
    "taskUz": "`department` jadvaliga `chk_department_budget` nomli cheklov qo'shing: `CHECK (budget >= 0)`.\n\n📋 **Kutilayotgan DDL:**\n`ALTER TABLE department ADD CONSTRAINT chk_department_budget CHECK (budget >= 0);`",
    "hint": "`ALTER TABLE department ADD CONSTRAINT chk_department_budget CHECK (budget >= 0);`",
    "solutions": [
      "ALTER TABLE department ADD CONSTRAINT chk_department_budget CHECK (budget >= 0)",
      "ALTER TABLE department ADD CONSTRAINT chk_department_budget CHECK (budget >= 0);",
      "alter table department add constraint chk_department_budget check (budget >= 0)",
      "alter table department add constraint chk_department_budget check (budget >= 0);",
      "ALTER TABLE department ADD CHECK (budget >= 0)",
      "ALTER TABLE department ADD CHECK (budget >= 0);",
      "alter table department add check (budget >= 0)",
      "alter table department add check (budget >= 0);"
    ],
    "explanation": "chk_department_budget cheklovi o'rnatildi.",
    "expectedSchema": {
      "operation": "ALTER_TABLE",
      "tableName": "department",
      "action": "ADD CONSTRAINT chk_department_budget CHECK (budget >= 0)",
      "detail": "budget ustuniga musbatlik shartini o'rnatish",
      "description": "Seminar 3 Task 2: Byudjetning manfiy bo'lishi taqiqlandi.",
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
          "hasCheck": true,
          "isHighlighted": true,
          "customBadge": "CHECK >= 0"
        }
      ]
    }
  },
  {
    "id": 125,
    "sector": 9,
    "difficulty": "Floor 9 • Medium",
    "source": "T03 Task 2 • Oylik CHECK Cheklovi (salary > 0 AND salary <= 5000)",
    "title": "Oylik Oralig'i CHECK Cheklovini Qo'shish",
    "story": "Seminar 3 2-topshiriq: `employee` jadvalidagi `salary` ustuniga `chk_employee_salary` nomli `CHECK (salary > 0 AND salary <= 5000)` cheklovini qo'shing.",
    "taskUz": "`employee` jadvaliga `chk_employee_salary` nomli cheklov qo'shing: `CHECK (salary > 0 AND salary <= 5000)`.\n\n📋 **Kutilayotgan DDL:**\n`ALTER TABLE employee ADD CONSTRAINT chk_employee_salary CHECK (salary > 0 AND salary <= 5000);`",
    "hint": "`ALTER TABLE employee ADD CONSTRAINT chk_employee_salary CHECK (salary > 0 AND salary <= 5000);`",
    "solutions": [
      "ALTER TABLE employee ADD CONSTRAINT chk_employee_salary CHECK (salary > 0 AND salary <= 5000)",
      "ALTER TABLE employee ADD CONSTRAINT chk_employee_salary CHECK (salary > 0 AND salary <= 5000);",
      "alter table employee add constraint chk_employee_salary check (salary > 0 and salary <= 5000)",
      "alter table employee add constraint chk_employee_salary check (salary > 0 and salary <= 5000);",
      "ALTER TABLE employee ADD CHECK (salary > 0 AND salary <= 5000)",
      "ALTER TABLE employee ADD CHECK (salary > 0 AND salary <= 5000);",
      "alter table employee add check (salary > 0 and salary <= 5000)",
      "alter table employee add check (salary > 0 and salary <= 5000);"
    ],
    "explanation": "Oylik oralig'i tekshiruvi cheklovi muvaffaqiyatli qo'shildi.",
    "expectedSchema": {
      "operation": "ALTER_TABLE",
      "tableName": "employee",
      "action": "ADD CONSTRAINT chk_employee_salary",
      "detail": "salary oralig'ini 1 dan 5000 gacha cheklash",
      "description": "Seminar 3 Task 2: Xodimlar oyligi biznes chegarasiga bo'ysundirildi.",
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
          "hasDefault": true,
          "hasCheck": true,
          "isHighlighted": true,
          "customBadge": "CHECK 1..5000"
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
      ]
    }
  },
  {
    "id": 126,
    "sector": 9,
    "difficulty": "Floor 9 • Easy",
    "source": "T03 Task 2 • DROP CONSTRAINT CHECK",
    "title": "CHECK Cheklovini Olib Tashlash (DROP CONSTRAINT)",
    "story": "Seminar 3 2-topshiriq: Byudjet siyosati o'zgardi. `department` jadvalidan `chk_department_budget` cheklovini olib tashlang.",
    "taskUz": "`department` jadvalidan `chk_department_budget` nomli cheklovni o'chirib tashlang.\n\n📋 **Kutilayotgan DDL:**\n`ALTER TABLE department DROP CONSTRAINT chk_department_budget;`",
    "hint": "`ALTER TABLE department DROP CONSTRAINT chk_department_budget;`",
    "solutions": [
      "ALTER TABLE department DROP CONSTRAINT chk_department_budget",
      "ALTER TABLE department DROP CONSTRAINT chk_department_budget;",
      "alter table department drop constraint chk_department_budget",
      "alter table department drop constraint chk_department_budget;",
      "ALTER TABLE department DROP CONSTRAINT IF EXISTS chk_department_budget",
      "ALTER TABLE department DROP CONSTRAINT IF EXISTS chk_department_budget;",
      "alter table department drop constraint if exists chk_department_budget",
      "alter table department drop constraint if exists chk_department_budget;"
    ],
    "explanation": "chk_department_budget cheklovi jadvaldan olib tashlandi.",
    "expectedSchema": {
      "operation": "ALTER_TABLE",
      "tableName": "department",
      "action": "DROP CONSTRAINT chk_department_budget",
      "detail": "chk_department_budget cheklovini bekor qilish",
      "description": "Seminar 3 Task 2: Tekshirish cheklovi olib tashlandi.",
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
          "hasCheck": false,
          "isHighlighted": true,
          "customBadge": "CHECK REMOVED"
        }
      ]
    }
  },
  {
    "id": 127,
    "sector": 9,
    "difficulty": "Floor 9 • Easy",
    "source": "T03 Task 2 • DROP CONSTRAINT UNIQUE",
    "title": "Unikal Cheklovni Olib Tashlash: DROP CONSTRAINT uq",
    "story": "Seminar 3 2-topshiriq: `employee` jadvalidan `uq_employee_email` cheklovini olib tashlang.",
    "taskUz": "`employee` jadvalidan `uq_employee_email` nomli unikal cheklovni o'chiring.\n\n📋 **Kutilayotgan DDL:**\n`ALTER TABLE employee DROP CONSTRAINT uq_employee_email;`",
    "hint": "`ALTER TABLE employee DROP CONSTRAINT uq_employee_email;`",
    "solutions": [
      "ALTER TABLE employee DROP CONSTRAINT uq_employee_email",
      "ALTER TABLE employee DROP CONSTRAINT uq_employee_email;",
      "alter table employee drop constraint uq_employee_email",
      "alter table employee drop constraint uq_employee_email;",
      "ALTER TABLE employee DROP CONSTRAINT IF EXISTS uq_employee_email",
      "ALTER TABLE employee DROP CONSTRAINT IF EXISTS uq_employee_email;",
      "alter table employee drop constraint if exists uq_employee_email",
      "alter table employee drop constraint if exists uq_employee_email;"
    ],
    "explanation": "uq_employee_email cheklovi bekor qilindi.",
    "expectedSchema": {
      "operation": "ALTER_TABLE",
      "tableName": "employee",
      "action": "DROP CONSTRAINT uq_employee_email",
      "detail": "uq_employee_email unikal cheklovini o'chirish",
      "description": "Seminar 3 Task 2: Email cheklovi olib tashlandi.",
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
          "isUQ": false,
          "isHighlighted": true,
          "customBadge": "UQ REMOVED"
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
      ]
    }
  },
  {
    "id": 128,
    "sector": 9,
    "difficulty": "Floor 9 • Medium",
    "source": "T03 Task 2 • DROP CONSTRAINT FOREIGN KEY",
    "title": "Tashqi Kalitni Olib Tashlash: DROP CONSTRAINT fk",
    "story": "Seminar 3 2-topshiriq: Qayta tuzilma sababli `employee` jadvalidan `fk_employee_department` tashqi kalitini olib tashlang.",
    "taskUz": "`employee` jadvalidan `fk_employee_department` nomli tashqi kalit cheklovini o'chiring.\n\n📋 **Kutilayotgan DDL:**\n`ALTER TABLE employee DROP CONSTRAINT fk_employee_department;`",
    "hint": "`ALTER TABLE employee DROP CONSTRAINT fk_employee_department;`",
    "solutions": [
      "ALTER TABLE employee DROP CONSTRAINT fk_employee_department",
      "ALTER TABLE employee DROP CONSTRAINT fk_employee_department;",
      "alter table employee drop constraint fk_employee_department",
      "alter table employee drop constraint fk_employee_department;",
      "ALTER TABLE employee DROP CONSTRAINT IF EXISTS fk_employee_department",
      "ALTER TABLE employee DROP CONSTRAINT IF EXISTS fk_employee_department;",
      "alter table employee drop constraint if exists fk_employee_department",
      "alter table employee drop constraint if exists fk_employee_department;"
    ],
    "explanation": "fk_employee_department tashqi kaliti o'chirildi.",
    "expectedSchema": {
      "operation": "ALTER_TABLE",
      "tableName": "employee",
      "action": "DROP CONSTRAINT fk_employee_department",
      "detail": "fk_employee_department tashqi kalitini bekor qilish",
      "description": "Seminar 3 Task 2: Tashqi kalit relyatsiyasi uzildi.",
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
          "isFK": false,
          "references": "department(id)",
          "isHighlighted": true,
          "customBadge": "FK UNLINKED"
        }
      ]
    }
  },
  {
    "id": 129,
    "sector": 9,
    "difficulty": "Floor 9 • Hard",
    "source": "L03 Slide 27 • Birlamchi Kalitni CASCADE Bilan O'chirish",
    "title": "Birlamchi Kalitni CASCADE Bilan O'chirish",
    "story": "Ota jadvalning PK si o'chirilganda, unga bog'liq barcha tashqi kalitlar ham xatoliksiz uzilishi uchun `CASCADE` beriladi.",
    "taskUz": "`department` jadvalidan `pk_department` birlamchi kalitini `CASCADE` bilan o'chiring.\n\n📋 **Kutilayotgan DDL:**\n`ALTER TABLE department DROP CONSTRAINT pk_department CASCADE;`",
    "hint": "`ALTER TABLE department DROP CONSTRAINT pk_department CASCADE;`",
    "solutions": [
      "ALTER TABLE department DROP CONSTRAINT pk_department CASCADE",
      "ALTER TABLE department DROP CONSTRAINT pk_department CASCADE;",
      "alter table department drop constraint pk_department cascade",
      "alter table department drop constraint pk_department cascade;"
    ],
    "explanation": "pk_department birlamchi kaliti barcha bog'liq FK lari bilan kaskadli o'chirildi.",
    "expectedSchema": {
      "operation": "ALTER_TABLE",
      "tableName": "department",
      "action": "DROP CONSTRAINT pk_department CASCADE",
      "detail": "Birlamchi kalitni bog'liq elementlar bilan o'chirish",
      "description": "Birlamchi kalit kaskad orqali xavfsiz bekor qilindi.",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": false,
          "isIdentity": true,
          "isNotNull": true,
          "isHighlighted": true,
          "customBadge": "PK DROPPED"
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
      ]
    }
  },
  {
    "id": 130,
    "sector": 9,
    "difficulty": "Floor 9 • Medium",
    "source": "T03 Task 1 & 2 • Murakkab UNIQUE Cheklovini Qo'shish",
    "title": "Murakkab UNIQUE Cheklovi: uq_emp_proj",
    "story": "`project_assignment` jadvalida bir xodim bitta loyihaga faqat bir marta biriktirilishini kafolatlovchi `uq_emp_proj` nomli unikal cheklov qo'shing.",
    "taskUz": "`project_assignment` jadvaliga `uq_emp_proj` nomli cheklov qo'shing: `UNIQUE (emp_id, proj_id)`.\n\n📋 **Kutilayotgan DDL:**\n`ALTER TABLE project_assignment ADD CONSTRAINT uq_emp_proj UNIQUE (emp_id, proj_id);`",
    "hint": "`ALTER TABLE project_assignment ADD CONSTRAINT uq_emp_proj UNIQUE (emp_id, proj_id);`",
    "solutions": [
      "ALTER TABLE project_assignment ADD CONSTRAINT uq_emp_proj UNIQUE (emp_id, proj_id)",
      "ALTER TABLE project_assignment ADD CONSTRAINT uq_emp_proj UNIQUE (emp_id, proj_id);",
      "alter table project_assignment add constraint uq_emp_proj unique (emp_id, proj_id)",
      "alter table project_assignment add constraint uq_emp_proj unique (emp_id, proj_id);",
      "ALTER TABLE project_assignment ADD UNIQUE (emp_id, proj_id)",
      "ALTER TABLE project_assignment ADD UNIQUE (emp_id, proj_id);",
      "alter table project_assignment add unique (emp_id, proj_id)",
      "alter table project_assignment add unique (emp_id, proj_id);"
    ],
    "explanation": "uq_emp_proj murakkab unikal cheklovi o'rnatildi.",
    "expectedSchema": {
      "operation": "ALTER_TABLE",
      "tableName": "project_assignment",
      "action": "ADD CONSTRAINT uq_emp_proj UNIQUE (emp_id, proj_id)",
      "detail": "emp_id va proj_id juftligini unikal qilish",
      "description": "Takroriy biriktirishlarning oldi olindi."
    }
  },
  {
    "id": 131,
    "sector": 9,
    "difficulty": "Floor 9 • Hard",
    "source": "T03 Task 5 • ALTER TABLE bilan ON DELETE CASCADE FK Qo'shish",
    "title": "Kaskadli FK Cheklovini Qo'shish (ON DELETE CASCADE)",
    "story": "Seminar 3 5-topshiriq: `employee` jadvalidagi `department_id` ustuniga `ON DELETE CASCADE` xususiyatiga ega `fk_emp_dept` tashqi kalitini qo'shing.",
    "taskUz": "`employee` jadvaliga `fk_emp_dept` nomli cheklov qo'shing: `FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE`.\n\n📋 **Kutilayotgan DDL:**\n`ALTER TABLE employee ADD CONSTRAINT fk_emp_dept FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE;`",
    "hint": "`ALTER TABLE employee ADD CONSTRAINT fk_emp_dept FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE;`",
    "solutions": [
      "ALTER TABLE employee ADD CONSTRAINT fk_emp_dept FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE",
      "ALTER TABLE employee ADD CONSTRAINT fk_emp_dept FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE;",
      "alter table employee add constraint fk_emp_dept foreign key (department_id) references department(id) on delete cascade",
      "alter table employee add constraint fk_emp_dept foreign key (department_id) references department(id) on delete cascade;"
    ],
    "explanation": "fk_emp_dept kaskadli tashqi kaliti ALTER TABLE orqali ulandi.",
    "expectedSchema": {
      "operation": "ALTER_TABLE",
      "tableName": "employee",
      "action": "ADD CONSTRAINT fk_emp_dept ... ON DELETE CASCADE",
      "detail": "department(id) ga ON DELETE CASCADE bog'lash",
      "description": "Seminar 3 Task 5: Kaskadli o'chirish faollashtirildi.",
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
          "references": "department(id)",
          "isHighlighted": true,
          "customBadge": "CASCADE FK"
        }
      ]
    }
  },
  {
    "id": 132,
    "sector": 9,
    "difficulty": "Floor 9 • Hard",
    "source": "T03 Task 5 • ALTER TABLE bilan ON DELETE SET NULL FK Qo'shish",
    "title": "Neytrallashtiruvchi FK Qo'shish (ON DELETE SET NULL)",
    "story": "Seminar 3 5-topshiriq: `employee` jadvalidagi `department_id` ga `ON DELETE SET NULL` qoidasini beruvchi `fk_emp_dept_null` tashqi kalitini qo'shing.",
    "taskUz": "`employee` jadvaliga `fk_emp_dept_null` nomli cheklov qo'shing: `FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL`.\n\n📋 **Kutilayotgan DDL:**\n`ALTER TABLE employee ADD CONSTRAINT fk_emp_dept_null FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL;`",
    "hint": "`ALTER TABLE employee ADD CONSTRAINT fk_emp_dept_null FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL;`",
    "solutions": [
      "ALTER TABLE employee ADD CONSTRAINT fk_emp_dept_null FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL",
      "ALTER TABLE employee ADD CONSTRAINT fk_emp_dept_null FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL;",
      "alter table employee add constraint fk_emp_dept_null foreign key (department_id) references department(id) on delete set null",
      "alter table employee add constraint fk_emp_dept_null foreign key (department_id) references department(id) on delete set null;"
    ],
    "explanation": "ON DELETE SET NULL tashqi kaliti o'rnatildi.",
    "expectedSchema": {
      "operation": "ALTER_TABLE",
      "tableName": "employee",
      "action": "ADD CONSTRAINT fk_emp_dept_null ... ON DELETE SET NULL",
      "detail": "department(id) ga ON DELETE SET NULL bog'lash",
      "description": "Seminar 3 Task 5: SET NULL xavfsiz kaliti o'rnatildi.",
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
          "references": "department(id)",
          "isHighlighted": true,
          "customBadge": "SET NULL FK"
        }
      ]
    }
  },
  {
    "id": 133,
    "sector": 9,
    "difficulty": "Floor 9 • Medium",
    "source": "T03 Task 1 & 2 • Email Formati CHECK Cheklovini Qo'shish",
    "title": "Email Formati CHECK Cheklovini Qo'shish: chk_email_at",
    "story": "`employee` jadvalidagi `email` ustuniga `@` belgisini tekshiruvchi `chk_email_at` cheklovini (`CHECK (email LIKE '%@%')`) qo'shing.",
    "taskUz": "`employee` jadvaliga `chk_email_at` nomli cheklov qo'shing: `CHECK (email LIKE '%@%')`.\n\n📋 **Kutilayotgan DDL:**\n`ALTER TABLE employee ADD CONSTRAINT chk_email_at CHECK (email LIKE '%@%');`",
    "hint": "`ALTER TABLE employee ADD CONSTRAINT chk_email_at CHECK (email LIKE '%@%');`",
    "solutions": [
      "ALTER TABLE employee ADD CONSTRAINT chk_email_at CHECK (email LIKE '%@%')",
      "ALTER TABLE employee ADD CONSTRAINT chk_email_at CHECK (email LIKE '%@%');",
      "alter table employee add constraint chk_email_at check (email like '%@%')",
      "alter table employee add constraint chk_email_at check (email like '%@%');",
      "ALTER TABLE employee ADD CHECK (email LIKE '%@%')",
      "ALTER TABLE employee ADD CHECK (email LIKE '%@%');",
      "alter table employee add check (email like '%@%')",
      "alter table employee add check (email like '%@%');"
    ],
    "explanation": "chk_email_at formati tekshiruvi qo'shildi.",
    "expectedSchema": {
      "operation": "ALTER_TABLE",
      "tableName": "employee",
      "action": "ADD CONSTRAINT chk_email_at CHECK (email LIKE '%@%')",
      "detail": "email ustuniga @ belgisi shartini qo'yish",
      "description": "Elektron pochta sintaksisi kafolatlandi.",
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
          "isUQ": true,
          "hasCheck": true,
          "isHighlighted": true,
          "customBadge": "CHECK '%@%'"
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
      ]
    }
  },
  {
    "id": 134,
    "sector": 9,
    "difficulty": "Floor 9 • Medium",
    "source": "T03 Task 1 & 2 • Bo'lim Nomi Unikalligini O'rnatish",
    "title": "Bo'lim Nomi Unikalligi: uq_department_title",
    "story": "`department` jadvalidagi `title` ustuniga `uq_department_title` nomli `UNIQUE` cheklovini qo'shing.",
    "taskUz": "`department` jadvaliga `uq_department_title` nomli cheklov qo'shing (`UNIQUE (title)`).\n\n📋 **Kutilayotgan DDL:**\n`ALTER TABLE department ADD CONSTRAINT uq_department_title UNIQUE (title);`",
    "hint": "`ALTER TABLE department ADD CONSTRAINT uq_department_title UNIQUE (title);`",
    "solutions": [
      "ALTER TABLE department ADD CONSTRAINT uq_department_title UNIQUE (title)",
      "ALTER TABLE department ADD CONSTRAINT uq_department_title UNIQUE (title);",
      "alter table department add constraint uq_department_title unique (title)",
      "alter table department add constraint uq_department_title unique (title);",
      "ALTER TABLE department ADD UNIQUE (title)",
      "ALTER TABLE department ADD UNIQUE (title);",
      "alter table department add unique (title)",
      "alter table department add unique (title);"
    ],
    "explanation": "uq_department_title unikal cheklovi ulandi.",
    "expectedSchema": {
      "operation": "ALTER_TABLE",
      "tableName": "department",
      "action": "ADD CONSTRAINT uq_department_title UNIQUE (title)",
      "detail": "title ustuniga unikal cheklov o'rnatish",
      "description": "Bo'lim nomlari takrorlanmasligi ta'minlandi.",
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
          "isUQ": true,
          "isHighlighted": true,
          "customBadge": "UQ ADDED"
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
      ]
    }
  },
  {
    "id": 135,
    "sector": 9,
    "difficulty": "Floor 9 • Boss Challenge",
    "source": "9-Qavat Bossi • Korporativ Cheklovlar Qal'asi",
    "title": "9-Qavat Bossi: Korporativ Cheklovlar Qal'asi (ADD CONSTRAINT FK + CASCADE)",
    "story": "9-qavatning buyuk bossi: Kompaniyaning asosiy `employee` jadvaliga `fk_emp_dept_final` nomli to'liq kaskadli tashqi kalit cheklovini (`FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE ON UPDATE CASCADE`) o'rnating!",
    "taskUz": "`employee` jadvaliga `fk_emp_dept_final` nomli cheklovni qo'shing: `FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE ON UPDATE CASCADE`.\n\n📋 **Kutilayotgan DDL:**\n`ALTER TABLE employee ADD CONSTRAINT fk_emp_dept_final FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE ON UPDATE CASCADE;`",
    "hint": "`ALTER TABLE employee ADD CONSTRAINT fk_emp_dept_final FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE ON UPDATE CASCADE;`",
    "solutions": [
      "ALTER TABLE employee ADD CONSTRAINT fk_emp_dept_final FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE ON UPDATE CASCADE",
      "ALTER TABLE employee ADD CONSTRAINT fk_emp_dept_final FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE ON UPDATE CASCADE;",
      "alter table employee add constraint fk_emp_dept_final foreign key (department_id) references department(id) on delete cascade on update cascade",
      "alter table employee add constraint fk_emp_dept_final foreign key (department_id) references department(id) on delete cascade on update cascade;"
    ],
    "explanation": "9-Qavat Bossi zabt etildi! ALTER TABLE orqali cheklovlar boshqaruvi (ADD/DROP PK, FK, UQ, CHECK va CASCADE harakatlari) to'liq o'zlashtirildi.",
    "expectedSchema": {
      "operation": "ALTER_TABLE",
      "tableName": "employee",
      "action": "ADD CONSTRAINT fk_emp_dept_final ... ON DELETE CASCADE ON UPDATE CASCADE",
      "detail": "department_id ga to'liq ikki tomonlama kaskadli FK o'rnatish",
      "description": "9-Qavat Bossi: Korporativ ma'lumotlar bazasi cheklovlar qal'asi barpo etildi.",
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
          "references": "department(id)",
          "isHighlighted": true,
          "customBadge": "FULL CASCADE FK"
        }
      ]
    }
  },
  {
    "id": 136,
    "sector": 10,
    "difficulty": "Floor 10 • Easy",
    "source": "Relational Algebra Slide 6 • Tanlash (Selection σ)",
    "title": "Relyatsion Algebra: Tanlash (Selection σ_salary > 3000)",
    "story": "Relyatsion algebra ta'rifi: σ (sigma) operatori shartga mos keluvchi satrlarni tanlab oladi. SQL dagi ekvivalenti `SELECT * FROM ... WHERE ...`.",
    "taskUz": "`employee` jadvalidan oyligi 3000 dan katta bo'lgan barcha xodimlarni tanlang ($sigma_{salary > 3000}(employee)$).\n\n📋 **Kutilayotgan SQL:**\n`SELECT * FROM employee WHERE salary > 3000;`",
    "hint": "`SELECT * FROM employee WHERE salary > 3000;`",
    "solutions": [
      "SELECT * FROM employee WHERE salary > 3000",
      "SELECT * FROM employee WHERE salary > 3000;",
      "select * from employee where salary > 3000",
      "select * from employee where salary > 3000;",
      "SELECT * FROM employee WHERE salary > 3000.00",
      "SELECT * FROM employee WHERE salary > 3000.00;",
      "select * from employee where salary > 3000.00",
      "select * from employee where salary > 3000.00;"
    ],
    "explanation": "Selection (sigma) operatori SQL WHERE filtri orqali bajarildi.",
    "expectedSchema": {
      "operation": "RELATIONAL_ALGEBRA",
      "algebraSymbol": "Selection (σ)",
      "expression": "σ_{salary > 3000}(employee)",
      "sourceTables": [
        "employee"
      ],
      "resultColumns": [
        "* (Barcha ustunlar)"
      ],
      "description": "Relyatsion algebraning satrlarni filtrlash operatori."
    }
  },
  {
    "id": 137,
    "sector": 10,
    "difficulty": "Floor 10 • Easy",
    "source": "Relational Algebra Slide 7 • Proyeksiya (Projection π)",
    "title": "Relyatsion Algebra: Proyeksiya (Projection π)",
    "story": "Relyatsion algebrada π (pi) operatori jadvaldan faqat ko'rsatilgan ustunlarni qirqib oladi (SQL SELECT ustunlar ro'yxati).",
    "taskUz": "`employee` jadvalidan `first_name`, `last_name` va `email` ustunlarini proyeksiyalang ($pi_{first_name, last_name, email}(employee)$).\n\n📋 **Kutilayotgan SQL:**\n`SELECT first_name, last_name, email FROM employee;`",
    "hint": "`SELECT first_name, last_name, email FROM employee;`",
    "solutions": [
      "SELECT first_name, last_name, email FROM employee",
      "SELECT first_name, last_name, email FROM employee;",
      "select first_name, last_name, email from employee",
      "select first_name, last_name, email from employee;",
      "SELECT first_name,last_name,email FROM employee",
      "SELECT first_name,last_name,email FROM employee;",
      "select first_name,last_name,email from employee",
      "select first_name,last_name,email from employee;"
    ],
    "explanation": "Projection (pi) operatori vertikal kesim orqali kerakli ustunlarni ajratdi.",
    "expectedSchema": {
      "operation": "RELATIONAL_ALGEBRA",
      "algebraSymbol": "Projection (π)",
      "expression": "π_{first_name, last_name, email}(employee)",
      "sourceTables": [
        "employee"
      ],
      "resultColumns": [
        "first_name",
        "last_name",
        "email"
      ],
      "description": "Relyatsion algebraning ustunlarni tanlash (proyeksiya) operatori."
    }
  },
  {
    "id": 138,
    "sector": 10,
    "difficulty": "Floor 10 • Medium",
    "source": "Relational Algebra Slide 8 • π va σ Kombinatsiyasi",
    "title": "Proyeksiya va Tanlash Sintezi: π(σ(employee))",
    "story": "Kombinatsiya: Faol bo'lgan (`active = true`) xodimlarning `first_name` va `salary` ustunlarini tanlang ($pi_{first_name, salary}(sigma_{active = true}(employee))$).",
    "taskUz": "`employee` jadvalidan `WHERE active = true` bo'lgan xodimlarning `first_name` va `salary` ustunlarini chiqaring.\n\n📋 **Kutilayotgan SQL:**\n`SELECT first_name, salary FROM employee WHERE active = true;`",
    "hint": "`SELECT first_name, salary FROM employee WHERE active = true;`",
    "solutions": [
      "SELECT first_name, salary FROM employee WHERE active = true",
      "SELECT first_name, salary FROM employee WHERE active = true;",
      "select first_name, salary from employee where active = true",
      "select first_name, salary from employee where active = true;"
    ],
    "explanation": "Proyeksiya va tanlash birgalikda muvaffaqiyatli qo'llandi.",
    "expectedSchema": {
      "operation": "RELATIONAL_ALGEBRA",
      "algebraSymbol": "Composition π(σ)",
      "expression": "π_{first_name, salary}(σ_{active = true}(employee))",
      "sourceTables": [
        "employee"
      ],
      "resultColumns": [
        "first_name",
        "salary"
      ],
      "description": "Gorizontal filtr (WHERE) va vertikal proyeksiyalash sintezi."
    }
  },
  {
    "id": 139,
    "sector": 10,
    "difficulty": "Floor 10 • Medium",
    "source": "Relational Algebra Slide 9 • Dekart Ko'paytmasi (Cartesian Product ×)",
    "title": "Relyatsion Dekart Ko'paytmasi: department × project",
    "story": "Dekart ko'paytmasi ($\times$) har bir bo'limni har bir loyiha bilan juftlaydi ($n \times m$ ta satr). SQL dagi ekvivalenti `CROSS JOIN`.",
    "taskUz": "`department` va `project` jadvallarining to'liq Dekart ko'paytmasini chiqaring (`department CROSS JOIN project`).\n\n📋 **Kutilayotgan SQL:**\n`SELECT * FROM department CROSS JOIN project;`",
    "hint": "`SELECT * FROM department CROSS JOIN project;`",
    "solutions": [
      "SELECT * FROM department CROSS JOIN project",
      "SELECT * FROM department CROSS JOIN project;",
      "select * from department cross join project",
      "select * from department cross join project;",
      "SELECT * FROM department, project",
      "SELECT * FROM department, project;",
      "select * from department, project",
      "select * from department, project;"
    ],
    "explanation": "Cartesian product (Dekart ko'paytmasi) hosil qilindi.",
    "expectedSchema": {
      "operation": "RELATIONAL_ALGEBRA",
      "algebraSymbol": "Cartesian Product (×)",
      "expression": "department × project",
      "sourceTables": [
        "department",
        "project"
      ],
      "resultColumns": [
        "* (Barcha ustunlar juftligi)"
      ],
      "description": "Jadvallarning to'liq karrali ko'paytmasi."
    }
  },
  {
    "id": 140,
    "sector": 10,
    "difficulty": "Floor 10 • Medium",
    "source": "Relational Algebra Slide 10 • Tabiiy Bog'lash (Natural Join ⨝)",
    "title": "Tabiiy Bog'lanish: employee ⨝ department",
    "story": "Tabiiy bog'lanish ($\bowtie$) bir xil nomli ustunlar bo'yicha jadvallarni avtomatik birlashtiradi. SQL da `NATURAL JOIN`.",
    "taskUz": "`employee` va `department` jadvallarini tabiiy bog'lanish (`NATURAL JOIN`) orqali birlashtirib chiqaring.\n\n📋 **Kutilayotgan SQL:**\n`SELECT * FROM employee NATURAL JOIN department;`",
    "hint": "`SELECT * FROM employee NATURAL JOIN department;`",
    "solutions": [
      "SELECT * FROM employee NATURAL JOIN department",
      "SELECT * FROM employee NATURAL JOIN department;",
      "select * from employee natural join department",
      "select * from employee natural join department;"
    ],
    "explanation": "Natural join orqali umumiy ustunlar asosida birlashtirildi.",
    "expectedSchema": {
      "operation": "RELATIONAL_ALGEBRA",
      "algebraSymbol": "Natural Join (⨝)",
      "expression": "employee ⨝ department",
      "sourceTables": [
        "employee",
        "department"
      ],
      "resultColumns": [
        "* (Birlashtirilgan relyatsiya)"
      ],
      "description": "Bir xil nomli atributlar bo'yicha avtomatik bog'lanish."
    }
  },
  {
    "id": 141,
    "sector": 10,
    "difficulty": "Floor 10 • Medium",
    "source": "Relational Algebra Slide 11 • Theta-Join (⨝_θ / Equi-Join)",
    "title": "Tenglik Bog'lanishi: e.department_id = d.id",
    "story": "Theta-Join ($\bowtie_\theta$): Xodim ismi va uning bo'lim nomini aniq tenglik sharti asosida (`JOIN department d ON e.department_id = d.id`) bog'lab oling.",
    "taskUz": "`employee` (e) va `department` (d) jadvallaridan `e.first_name` va `d.title` ustunlarini tenglik sharti bilan chiqaring.\n\n📋 **Kutilayotgan SQL:**\n`SELECT e.first_name, d.title FROM employee e JOIN department d ON e.department_id = d.id;`",
    "hint": "`SELECT e.first_name, d.title FROM employee e JOIN department d ON e.department_id = d.id;`",
    "solutions": [
      "SELECT e.first_name, d.title FROM employee e JOIN department d ON e.department_id = d.id",
      "SELECT e.first_name, d.title FROM employee e JOIN department d ON e.department_id = d.id;",
      "select e.first_name, d.title from employee e join department d on e.department_id = d.id",
      "select e.first_name, d.title from employee e join department d on e.department_id = d.id;",
      "SELECT e.first_name, d.title FROM employee e INNER JOIN department d ON e.department_id = d.id",
      "SELECT e.first_name, d.title FROM employee e INNER JOIN department d ON e.department_id = d.id;",
      "select e.first_name, d.title from employee e inner join department d on e.department_id = d.id",
      "select e.first_name, d.title from employee e inner join department d on e.department_id = d.id;"
    ],
    "explanation": "Equi-Join orqali xodim va uning bo'limi aniq bog'landi.",
    "expectedSchema": {
      "operation": "RELATIONAL_ALGEBRA",
      "algebraSymbol": "Theta Join (⨝_θ)",
      "expression": "employee ⨝_{department_id = id} department",
      "sourceTables": [
        "employee",
        "department"
      ],
      "resultColumns": [
        "e.first_name",
        "d.title"
      ],
      "description": "Tashqi kalit tengligi bo'yicha relyatsion bog'lanish."
    }
  },
  {
    "id": 142,
    "sector": 10,
    "difficulty": "Floor 10 • Medium",
    "source": "Relational Algebra Slide 12 • To'plamlar Birlashmasi (Union ∪)",
    "title": "To'plamlar Birlashmasi: employee UNION client",
    "story": "To'plamlar birlashmasi ($cup$) ikkita relyatsiyadagi unikal qiymatlarni bitta ro'yxatga jamlaydi (`UNION`).",
    "taskUz": "`employee` dagi `email` va `client` dagi `email` ustunlarini unikal birlashtiring (`UNION`).\n\n📋 **Kutilayotgan SQL:**\n`SELECT email FROM employee UNION SELECT email FROM client;`",
    "hint": "`SELECT email FROM employee UNION SELECT email FROM client;`",
    "solutions": [
      "SELECT email FROM employee UNION SELECT email FROM client",
      "SELECT email FROM employee UNION SELECT email FROM client;",
      "select email from employee union select email from client",
      "select email from employee union select email from client;"
    ],
    "explanation": "Union orqali xodimlar va mijozlarning umumiy emaillari to'plami olindi.",
    "expectedSchema": {
      "operation": "RELATIONAL_ALGEBRA",
      "algebraSymbol": "Union (∪)",
      "expression": "π_{email}(employee) ∪ π_{email}(client)",
      "sourceTables": [
        "employee",
        "client"
      ],
      "resultColumns": [
        "email"
      ],
      "description": "Ikkita jadval ustunlarining unikal birlashmasi."
    }
  },
  {
    "id": 143,
    "sector": 10,
    "difficulty": "Floor 10 • Medium",
    "source": "Relational Algebra Slide 13 • To'plamlar Kesishmasi (Intersection ∩)",
    "title": "To'plamlar Kesishmasi: branch INTERSECT department",
    "story": "Kesishma ($cap$) ikkala jadvalda ham mavjud bo'lgan umumiy shahar nomlarini topadi (`INTERSECT`).",
    "taskUz": "`branch` jadvalidagi `city` ustuni bilan `department` jadvalidagi `location` ustunining kesishmasini toping (`INTERSECT`).\n\n📋 **Kutilayotgan SQL:**\n`SELECT city FROM branch INTERSECT SELECT location FROM department;`",
    "hint": "`SELECT city FROM branch INTERSECT SELECT location FROM department;`",
    "solutions": [
      "SELECT city FROM branch INTERSECT SELECT location FROM department",
      "SELECT city FROM branch INTERSECT SELECT location FROM department;",
      "select city from branch intersect select location from department",
      "select city from branch intersect select location from department;"
    ],
    "explanation": "Intersection orqali ikkala jadvalda ham bor bo'lgan shaharlar topildi.",
    "expectedSchema": {
      "operation": "RELATIONAL_ALGEBRA",
      "algebraSymbol": "Intersection (∩)",
      "expression": "π_{city}(branch) ∩ π_{location}(department)",
      "sourceTables": [
        "branch",
        "department"
      ],
      "resultColumns": [
        "city / location"
      ],
      "description": "Ikkala to'plamning umumiy elementlari."
    }
  },
  {
    "id": 144,
    "sector": 10,
    "difficulty": "Floor 10 • Medium",
    "source": "Relational Algebra Slide 14 • To'plamlar Ayirmasi (Difference − / EXCEPT)",
    "title": "To'plamlar Ayirmasi: department EXCEPT employee",
    "story": "To'plamlar ayirmasi ($-$) birinchi jadvalda bor, lekin ikkinchisida yo'q bo'lgan elementlarni ajratadi (PostgreSQL da `EXCEPT`).",
    "taskUz": "`department` dagi `id` ustunidan `employee` dagi `department_id` ustunini ayiring (`EXCEPT`), ya'ni hech qanday xodimi yo'q bo'limlarni toping.\n\n📋 **Kutilayotgan SQL:**\n`SELECT id FROM department EXCEPT SELECT department_id FROM employee;`",
    "hint": "`SELECT id FROM department EXCEPT SELECT department_id FROM employee;`",
    "solutions": [
      "SELECT id FROM department EXCEPT SELECT department_id FROM employee",
      "SELECT id FROM department EXCEPT SELECT department_id FROM employee;",
      "select id from department except select department_id from employee",
      "select id from department except select department_id from employee;"
    ],
    "explanation": "Difference (EXCEPT) orqali xodimsiz bo'limlar ajratildi.",
    "expectedSchema": {
      "operation": "RELATIONAL_ALGEBRA",
      "algebraSymbol": "Set Difference (−)",
      "expression": "π_{id}(department) − π_{department_id}(employee)",
      "sourceTables": [
        "department",
        "employee"
      ],
      "resultColumns": [
        "id"
      ],
      "description": "Xodimlari mavjud bo'lmagan bo'lim identifikatorlari to'plami."
    }
  },
  {
    "id": 145,
    "sector": 10,
    "difficulty": "Floor 10 • Hard",
    "source": "CW1 Case Study Capstone • Kompaniya Arxitekturasi 1-Qism",
    "title": "Enterprise Poydevor: company Jadvali",
    "story": "Kurs ishi (CW1) va Viva tayyorgarligi: 6 ta asosiy korporativ jadvallarni ketma-ket barpo etamiz. 1-qadam: Bosh kompaniya jadvali.",
    "taskUz": "`company` nomli jadval yarating: `id` (integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY), `name` (varchar(100) NOT NULL UNIQUE), `country` (varchar(50)).\n\n📋 **Kutilayotgan DDL:**\n`CREATE TABLE company (id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY, name varchar(100) NOT NULL UNIQUE, country varchar(50));`",
    "hint": "`CREATE TABLE company (id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY, name varchar(100) NOT NULL UNIQUE, country varchar(50));`",
    "solutions": [
      "CREATE TABLE company (id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY, name varchar(100) NOT NULL UNIQUE, country varchar(50))",
      "CREATE TABLE company (id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY, name varchar(100) NOT NULL UNIQUE, country varchar(50));",
      "create table company (id integer generated always as identity primary key, name varchar(100) not null unique, country varchar(50))",
      "create table company (id integer generated always as identity primary key, name varchar(100) not null unique, country varchar(50));",
      "CREATE TABLE company (id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY, name varchar(100) NOT NULL UNIQUE, country varchar(50))",
      "CREATE TABLE company (id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY, name varchar(100) NOT NULL UNIQUE, country varchar(50));",
      "create table company (id int generated always as identity primary key, name varchar(100) not null unique, country varchar(50))",
      "create table company (id int generated always as identity primary key, name varchar(100) not null unique, country varchar(50));"
    ],
    "explanation": "company bosh relyatsion jadvali yaratildi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
      "tableName": "company",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true,
          "isIdentity": true
        },
        {
          "name": "name",
          "type": "varchar(100)",
          "isNotNull": true,
          "isUQ": true
        },
        {
          "name": "country",
          "type": "varchar(50)"
        }
      ]
    }
  },
  {
    "id": 146,
    "sector": 10,
    "difficulty": "Floor 10 • Hard",
    "source": "CW1 Case Study Capstone • Kompaniya Arxitekturasi 2-Qism",
    "title": "Enterprise Struktura: department va company_id Bog'liqligi",
    "story": "2-qadam: Bo'limlar kompaniyaga qarashli bo'ladi (`company_id REFERENCES company(id)`).",
    "taskUz": "`department` nomli jadval yarating: `id` (integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY), `title` (varchar(100) NOT NULL), `company_id` (integer REFERENCES company(id) ON DELETE CASCADE).\n\n📋 **Kutilayotgan DDL:**\n`CREATE TABLE department (id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY, title varchar(100) NOT NULL, company_id integer REFERENCES company(id) ON DELETE CASCADE);`",
    "hint": "`CREATE TABLE department (id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY, title varchar(100) NOT NULL, company_id integer REFERENCES company(id) ON DELETE CASCADE);`",
    "solutions": [
      "CREATE TABLE department (id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY, title varchar(100) NOT NULL, company_id integer REFERENCES company(id) ON DELETE CASCADE)",
      "CREATE TABLE department (id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY, title varchar(100) NOT NULL, company_id integer REFERENCES company(id) ON DELETE CASCADE);",
      "create table department (id integer generated always as identity primary key, title varchar(100) not null, company_id integer references company(id) on delete cascade)",
      "create table department (id integer generated always as identity primary key, title varchar(100) not null, company_id integer references company(id) on delete cascade);",
      "CREATE TABLE department (id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY, title varchar(100) NOT NULL, company_id int REFERENCES company(id) ON DELETE CASCADE)",
      "CREATE TABLE department (id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY, title varchar(100) NOT NULL, company_id int REFERENCES company(id) ON DELETE CASCADE);",
      "create table department (id int generated always as identity primary key, title varchar(100) not null, company_id int references company(id) on delete cascade)",
      "create table department (id int generated always as identity primary key, title varchar(100) not null, company_id int references company(id) on delete cascade);"
    ],
    "explanation": "department jadvali company ga kaskadli ulandi.",
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
          "name": "company_id",
          "type": "integer",
          "isFK": true,
          "references": "company(id)"
        }
      ]
    }
  },
  {
    "id": 147,
    "sector": 10,
    "difficulty": "Floor 10 • Hard",
    "source": "CW1 Case Study Capstone • Kompaniya Arxitekturasi 3-Qism",
    "title": "Enterprise Xodimlar Jadvali (employee)",
    "story": "3-qadam: Seminar 3 dagi haqiqiy xodimlar jadvali `department(id)` ga tashqi kalit bilan ulanadi.",
    "taskUz": "`employee` nomli jadval yarating: `id` (integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY), `first_name` (varchar(25) NOT NULL), `last_name` (varchar(25) NOT NULL), `email` (varchar(100) NOT NULL UNIQUE), `department_id` (integer REFERENCES department(id) ON DELETE SET NULL).\n\n📋 **Kutilayotgan DDL:**\n`CREATE TABLE employee (id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY, first_name varchar(25) NOT NULL, last_name varchar(25) NOT NULL, email varchar(100) NOT NULL UNIQUE, department_id integer REFERENCES department(id) ON DELETE SET NULL);`",
    "hint": "`CREATE TABLE employee (id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY, first_name varchar(25) NOT NULL, last_name varchar(25) NOT NULL, email varchar(100) NOT NULL UNIQUE, department_id integer REFERENCES department(id) ON DELETE SET NULL);`",
    "solutions": [
      "CREATE TABLE employee (id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY, first_name varchar(25) NOT NULL, last_name varchar(25) NOT NULL, email varchar(100) NOT NULL UNIQUE, department_id integer REFERENCES department(id) ON DELETE SET NULL)",
      "CREATE TABLE employee (id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY, first_name varchar(25) NOT NULL, last_name varchar(25) NOT NULL, email varchar(100) NOT NULL UNIQUE, department_id integer REFERENCES department(id) ON DELETE SET NULL);",
      "create table employee (id integer generated always as identity primary key, first_name varchar(25) not null, last_name varchar(25) not null, email varchar(100) not null unique, department_id integer references department(id) on delete set null)",
      "create table employee (id integer generated always as identity primary key, first_name varchar(25) not null, last_name varchar(25) not null, email varchar(100) not null unique, department_id integer references department(id) on delete set null);",
      "CREATE TABLE employee (id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY, first_name varchar(25) NOT NULL, last_name varchar(25) NOT NULL, email varchar(100) NOT NULL UNIQUE, department_id int REFERENCES department(id) ON DELETE SET NULL)",
      "CREATE TABLE employee (id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY, first_name varchar(25) NOT NULL, last_name varchar(25) NOT NULL, email varchar(100) NOT NULL UNIQUE, department_id int REFERENCES department(id) ON DELETE SET NULL);",
      "create table employee (id int generated always as identity primary key, first_name varchar(25) not null, last_name varchar(25) not null, email varchar(100) not null unique, department_id int references department(id) on delete set null)",
      "create table employee (id int generated always as identity primary key, first_name varchar(25) not null, last_name varchar(25) not null, email varchar(100) not null unique, department_id int references department(id) on delete set null);"
    ],
    "explanation": "employee korporativ jadvali department ga SET NULL qoidasi bilan ulandi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
      "tableName": "employee",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true,
          "isIdentity": true
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
        },
        {
          "name": "department_id",
          "type": "integer",
          "isFK": true,
          "references": "department(id)"
        }
      ]
    }
  },
  {
    "id": 148,
    "sector": 10,
    "difficulty": "Floor 10 • Hard",
    "source": "CW1 Case Study Capstone • Kompaniya Arxitekturasi 4-Qism",
    "title": "Enterprise Loyihalar Jadvali (project)",
    "story": "4-qadam: Korxona loyihalari jadvali bo'limga bog'lanadi.",
    "taskUz": "`project` nomli jadval yarating: `id` (integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY), `name` (varchar(100) NOT NULL), `budget` (numeric(14,2) CHECK (budget >= 0)), `department_id` (integer REFERENCES department(id) ON DELETE CASCADE).\n\n📋 **Kutilayotgan DDL:**\n`CREATE TABLE project (id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY, name varchar(100) NOT NULL, budget numeric(14,2) CHECK (budget >= 0), department_id integer REFERENCES department(id) ON DELETE CASCADE);`",
    "hint": "`CREATE TABLE project (id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY, name varchar(100) NOT NULL, budget numeric(14,2) CHECK (budget >= 0), department_id integer REFERENCES department(id) ON DELETE CASCADE);`",
    "solutions": [
      "CREATE TABLE project (id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY, name varchar(100) NOT NULL, budget numeric(14,2) CHECK (budget >= 0), department_id integer REFERENCES department(id) ON DELETE CASCADE)",
      "CREATE TABLE project (id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY, name varchar(100) NOT NULL, budget numeric(14,2) CHECK (budget >= 0), department_id integer REFERENCES department(id) ON DELETE CASCADE);",
      "create table project (id integer generated always as identity primary key, name varchar(100) not null, budget numeric(14,2) check (budget >= 0), department_id integer references department(id) on delete cascade)",
      "create table project (id integer generated always as identity primary key, name varchar(100) not null, budget numeric(14,2) check (budget >= 0), department_id integer references department(id) on delete cascade);",
      "CREATE TABLE project (id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY, name varchar(100) NOT NULL, budget numeric(14,2) CHECK (budget >= 0), department_id int REFERENCES department(id) ON DELETE CASCADE)",
      "CREATE TABLE project (id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY, name varchar(100) NOT NULL, budget numeric(14,2) CHECK (budget >= 0), department_id int REFERENCES department(id) ON DELETE CASCADE);",
      "create table project (id int generated always as identity primary key, name varchar(100) not null, budget numeric(14,2) check (budget >= 0), department_id int references department(id) on delete cascade)",
      "create table project (id int generated always as identity primary key, name varchar(100) not null, budget numeric(14,2) check (budget >= 0), department_id int references department(id) on delete cascade);"
    ],
    "explanation": "project jadvali to'liq cheklovlari bilan barpo etildi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
      "tableName": "project",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true,
          "isIdentity": true
        },
        {
          "name": "name",
          "type": "varchar(100)",
          "isNotNull": true
        },
        {
          "name": "budget",
          "type": "numeric(14,2)",
          "hasCheck": true
        },
        {
          "name": "department_id",
          "type": "integer",
          "isFK": true,
          "references": "department(id)"
        }
      ]
    }
  },
  {
    "id": 149,
    "sector": 10,
    "difficulty": "Floor 10 • Hard",
    "source": "CW1 Case Study Capstone • Kompaniya Arxitekturasi 5-Qism",
    "title": "Enterprise M:N Bog'lovchi: project_assignment",
    "story": "5-qadam: Xodimlar va loyihalarni biriktiruvchi yakuniy ko'prik jadval.",
    "taskUz": "`project_assignment` nomli jadval yarating: `emp_id` (integer REFERENCES employee(id) ON DELETE CASCADE), `proj_id` (integer REFERENCES project(id) ON DELETE CASCADE), `role` (varchar(50) NOT NULL), `PRIMARY KEY (emp_id, proj_id)`.\n\n📋 **Kutilayotgan DDL:**\n`CREATE TABLE project_assignment (emp_id integer REFERENCES employee(id) ON DELETE CASCADE, proj_id integer REFERENCES project(id) ON DELETE CASCADE, role varchar(50) NOT NULL, PRIMARY KEY (emp_id, proj_id));`",
    "hint": "`CREATE TABLE project_assignment (emp_id integer REFERENCES employee(id) ON DELETE CASCADE, proj_id integer REFERENCES project(id) ON DELETE CASCADE, role varchar(50) NOT NULL, PRIMARY KEY (emp_id, proj_id));`",
    "solutions": [
      "CREATE TABLE project_assignment (emp_id integer REFERENCES employee(id) ON DELETE CASCADE, proj_id integer REFERENCES project(id) ON DELETE CASCADE, role varchar(50) NOT NULL, PRIMARY KEY (emp_id, proj_id))",
      "CREATE TABLE project_assignment (emp_id integer REFERENCES employee(id) ON DELETE CASCADE, proj_id integer REFERENCES project(id) ON DELETE CASCADE, role varchar(50) NOT NULL, PRIMARY KEY (emp_id, proj_id));",
      "create table project_assignment (emp_id integer references employee(id) on delete cascade, proj_id integer references project(id) on delete cascade, role varchar(50) not null, primary key (emp_id, proj_id))",
      "create table project_assignment (emp_id integer references employee(id) on delete cascade, proj_id integer references project(id) on delete cascade, role varchar(50) not null, primary key (emp_id, proj_id));",
      "CREATE TABLE project_assignment (emp_id int REFERENCES employee(id) ON DELETE CASCADE, proj_id int REFERENCES project(id) ON DELETE CASCADE, role varchar(50) NOT NULL, PRIMARY KEY (emp_id, proj_id))",
      "CREATE TABLE project_assignment (emp_id int REFERENCES employee(id) ON DELETE CASCADE, proj_id int REFERENCES project(id) ON DELETE CASCADE, role varchar(50) NOT NULL, PRIMARY KEY (emp_id, proj_id));",
      "create table project_assignment (emp_id int references employee(id) on delete cascade, proj_id int references project(id) on delete cascade, role varchar(50) not null, primary key (emp_id, proj_id))",
      "create table project_assignment (emp_id int references employee(id) on delete cascade, proj_id int references project(id) on delete cascade, role varchar(50) not null, primary key (emp_id, proj_id));"
    ],
    "explanation": "project_assignment M:N ko'priki kaskadli tashqi kalitlar bilan yaratildi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
      "tableName": "project_assignment",
      "columns": [
        {
          "name": "emp_id",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "employee(id)"
        },
        {
          "name": "proj_id",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "project(id)"
        },
        {
          "name": "role",
          "type": "varchar(50)",
          "isNotNull": true
        }
      ]
    }
  },
  {
    "id": 150,
    "sector": 10,
    "difficulty": "Floor 10 • Final Boss (Viva Capstone)",
    "source": "10-Qavat Bossi • Siklik Bog'liqlikni Yechish va Viva Arxitekturasi",
    "title": "10-Qavat Bossi: Viva Capstone — Siklik Bog'liqlikni Yechish",
    "story": "10-QAVATNING YAKUNIY BOSSI VA VIVA IMTIHONI: Department va Employee o'rtasidagi klassik siklik (circular) ziddiyatni hal qilish! Ikkala jadval ham yaratilib bo'lingach, `department` jadvaliga bo'lim boshlig'i `manager_id` ni `ALTER TABLE` orqali `employee(id)` ga bog'lang!",
    "taskUz": "`department` jadvaliga `fk_dept_manager` nomli tashqi kalit cheklovini qo'shing: `FOREIGN KEY (manager_id) REFERENCES employee(id);`\n\n📋 **Kutilayotgan DDL:**\n`ALTER TABLE department ADD CONSTRAINT fk_dept_manager FOREIGN KEY (manager_id) REFERENCES employee(id);`",
    "hint": "`ALTER TABLE department ADD CONSTRAINT fk_dept_manager FOREIGN KEY (manager_id) REFERENCES employee(id);`",
    "solutions": [
      "ALTER TABLE department ADD CONSTRAINT fk_dept_manager FOREIGN KEY (manager_id) REFERENCES employee(id)",
      "ALTER TABLE department ADD CONSTRAINT fk_dept_manager FOREIGN KEY (manager_id) REFERENCES employee(id);",
      "alter table department add constraint fk_dept_manager foreign key (manager_id) references employee(id)",
      "alter table department add constraint fk_dept_manager foreign key (manager_id) references employee(id);",
      "ALTER TABLE department ADD FOREIGN KEY (manager_id) REFERENCES employee(id)",
      "ALTER TABLE department ADD FOREIGN KEY (manager_id) REFERENCES employee(id);",
      "alter table department add foreign key (manager_id) references employee(id)",
      "alter table department add foreign key (manager_id) references employee(id);"
    ],
    "explanation": "TABRIKLAYMIZ! SIZ WEEK 3 DATABASE SYSTEMS DDL & DML TO'LIQ 150 TA MASALASINI YENGDINGIZ! Siklik relyatsiyalar, relyatsion algebra, DDL, DML va cheklovlar qal'asi to'liq egallandi!",
    "expectedSchema": {
      "operation": "ALTER_TABLE",
      "tableName": "department",
      "action": "ADD CONSTRAINT fk_dept_manager FOREIGN KEY (manager_id) REFERENCES employee(id)",
      "detail": "Siklik bog'liqlikni (Circular Dependency) muvaffaqiyatli hal qilish",
      "description": "10-Qavat Final Bossi: Viva imtihonchisi savoli bo'yicha siklik relyatsiya hal qilindi!",
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
        },
        {
          "name": "manager_id",
          "type": "integer",
          "isFK": true,
          "isHighlighted": true,
          "customBadge": "CIRCULAR FK"
        }
      ]
    }
  }
];
