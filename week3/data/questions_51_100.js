// WIUT Database Systems (5BUIS009C) Week 3 - QUESTIONS_51_100
// Auto-generated comprehensive curriculum (150 Challenges)
window.QUESTIONS_51_100 = [
  {
    "id": 51,
    "sector": 4,
    "difficulty": "Floor 4 • Medium",
    "source": "T03 Task 3.5 • Explicit DEFAULT Kalit So'zi",
    "title": "Aniq DEFAULT Kalit So'zidan Foydalanish",
    "story": "Seminar 3 3.5: Ba'zan so'rovda barcha ustunlar ro'yxatga olinib, ayrimlariga ochiqcha `DEFAULT` kalit so'zi beriladi.",
    "taskUz": "`employee` jadvaliga `first_name`, `last_name`, `email`, `salary` va `active` ustunlarini ko'rsatib qator qo'shing:\n• `first_name`: 'Bobur'\n• `last_name`: 'Azizov'\n• `email`: 'bobur@wiut.uz'\n• `salary`: DEFAULT\n• `active`: DEFAULT\n\n📋 **Kutilayotgan DML:**\n`INSERT INTO employee (first_name, last_name, email, salary, active) VALUES ('Bobur', 'Azizov', 'bobur@wiut.uz', DEFAULT, DEFAULT);`",
    "hint": "`INSERT INTO employee (first_name, last_name, email, salary, active) VALUES ('Bobur', 'Azizov', 'bobur@wiut.uz', DEFAULT, DEFAULT);`",
    "solutions": [
      "INSERT INTO employee (first_name, last_name, email, salary, active) VALUES ('Bobur', 'Azizov', 'bobur@wiut.uz', DEFAULT, DEFAULT)",
      "INSERT INTO employee (first_name, last_name, email, salary, active) VALUES ('Bobur', 'Azizov', 'bobur@wiut.uz', DEFAULT, DEFAULT);",
      "insert into employee (first_name, last_name, email, salary, active) values ('bobur', 'azizov', 'bobur@wiut.uz', default, default)",
      "insert into employee (first_name, last_name, email, salary, active) values ('bobur', 'azizov', 'bobur@wiut.uz', default, default);"
    ],
    "explanation": "VALUES qatorida aniq DEFAULT kalit so'zi ishlatildi.",
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
      "description": "Xodim Bobur Azizov explicit DEFAULT kalit so'zi bilan qo'shildi."
    }
  },
  {
    "id": 52,
    "sector": 4,
    "difficulty": "Floor 4 • Hard",
    "source": "T03 Task 3.2 • OVERRIDING SYSTEM VALUE",
    "title": "OVERRIDING SYSTEM VALUE bilan Majburiy ID Kiritish",
    "story": "Seminar 3 3.2: `GENERATED ALWAYS AS IDENTITY` ustuniga qo'lda ID kiritmoqchi bo'lsak, xatolik chiqadi. Buni chetlab o'tish uchun `OVERRIDING SYSTEM VALUE` qo'llanadi.",
    "taskUz": "`department` jadvaliga majburiy `id = 99` qiymati bilan 'Executive' bo'limini qo'shing:\n\n📋 **Kutilayotgan DML:**\n`INSERT INTO department (id, title, budget) OVERRIDING SYSTEM VALUE VALUES (99, 'Executive', 500000.00);`",
    "hint": "`INSERT INTO department (id, title, budget) OVERRIDING SYSTEM VALUE VALUES (99, 'Executive', 500000.00);`",
    "solutions": [
      "INSERT INTO department (id, title, budget) OVERRIDING SYSTEM VALUE VALUES (99, 'Executive', 500000.00)",
      "INSERT INTO department (id, title, budget) OVERRIDING SYSTEM VALUE VALUES (99, 'Executive', 500000.00);",
      "insert into department (id, title, budget) overriding system value values (99, 'executive', 500000.00)",
      "insert into department (id, title, budget) overriding system value values (99, 'executive', 500000.00);",
      "INSERT INTO department (id, title, budget) OVERRIDING SYSTEM VALUE VALUES (99, 'Executive', 500000)",
      "INSERT INTO department (id, title, budget) OVERRIDING SYSTEM VALUE VALUES (99, 'Executive', 500000);",
      "insert into department (id, title, budget) overriding system value values (99, 'executive', 500000)",
      "insert into department (id, title, budget) overriding system value values (99, 'executive', 500000);"
    ],
    "explanation": "OVERRIDING SYSTEM VALUE orqali GENERATED ALWAYS ustuniga 99 raqami muvaffaqiyatli yozildi.",
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
      "description": "OVERRIDING SYSTEM VALUE yordamida id=99 kiritildi."
    }
  },
  {
    "id": 53,
    "sector": 4,
    "difficulty": "Floor 4 • Hard",
    "source": "T03 Task 3.2 • OVERRIDING USER VALUE",
    "title": "OVERRIDING USER VALUE Bilan Tizim Kalitini Tiklash",
    "story": "Agar jadval `GENERATED BY DEFAULT` bo'lsa va foydalanuvchi bergan qiymatni rad etib, tizim avtomatik qiymat berishini xohlasak, `OVERRIDING USER VALUE` qo'llaniladi.",
    "taskUz": "`department` jadvaliga `OVERRIDING USER VALUE` bilan 'Logistics' bo'limini qo'shing:\n\n📋 **Kutilayotgan DML:**\n`INSERT INTO department (id, title) OVERRIDING USER VALUE VALUES (5, 'Logistics');`",
    "hint": "`INSERT INTO department (id, title) OVERRIDING USER VALUE VALUES (5, 'Logistics');`",
    "solutions": [
      "INSERT INTO department (id, title) OVERRIDING USER VALUE VALUES (5, 'Logistics')",
      "INSERT INTO department (id, title) OVERRIDING USER VALUE VALUES (5, 'Logistics');",
      "insert into department (id, title) overriding user value values (5, 'logistics')",
      "insert into department (id, title) overriding user value values (5, 'logistics');"
    ],
    "explanation": "OVERRIDING USER VALUE orqali foydalanuvchi kiritgan id inkor etilib, sequence ishga tushdi.",
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
      "description": "OVERRIDING USER VALUE bilan ketma-ketlik himoyalandi."
    }
  },
  {
    "id": 54,
    "sector": 4,
    "difficulty": "Floor 4 • Medium",
    "source": "T03 Task 3 • RETURNING Id Mexanizmi",
    "title": "INSERT RETURNING id: Yangi Kalitni Darhol Qaytarish",
    "story": "Backend dasturchilar qator qo'shgandan so'ng avtomatik hosil bo'lgan ID ni olish uchun alohida so'rov yubormasdan `RETURNING id` dan foydalanadilar.",
    "taskUz": "`department` jadvaliga 'Research' bo'limini (byudjet 400000.00) qo'shing va hosil bo'lgan `id` ni qaytaring:\n\n📋 **Kutilayotgan DML:**\n`INSERT INTO department (title, budget) VALUES ('Research', 400000.00) RETURNING id;`",
    "hint": "`INSERT INTO department (title, budget) VALUES ('Research', 400000.00) RETURNING id;`",
    "solutions": [
      "INSERT INTO department (title, budget) VALUES ('Research', 400000.00) RETURNING id",
      "INSERT INTO department (title, budget) VALUES ('Research', 400000.00) RETURNING id;",
      "insert into department (title, budget) values ('research', 400000.00) returning id",
      "insert into department (title, budget) values ('research', 400000.00) returning id;",
      "INSERT INTO department (title, budget) VALUES ('Research', 400000) RETURNING id",
      "INSERT INTO department (title, budget) VALUES ('Research', 400000) RETURNING id;",
      "insert into department (title, budget) values ('research', 400000) returning id",
      "insert into department (title, budget) values ('research', 400000) returning id;"
    ],
    "explanation": "RETURNING id orqali yangi hosil bo'lgan identifikator o'qib olindi.",
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
      "description": "Research bo'limi qo'shildi va RETURNING id bilan qaytarildi."
    }
  },
  {
    "id": 55,
    "sector": 4,
    "difficulty": "Floor 4 • Medium",
    "source": "T03 Task 3 • RETURNING * bilan Audit",
    "title": "INSERT RETURNING * bilan Butun Qatorni Olish",
    "story": "Yangi xodim qo'shilganda uning barcha sukut bo'yicha to'ldirilgan ustunlarini (id, active, hired_at) to'liq ko'rish uchun `RETURNING *` beriladi.",
    "taskUz": "`employee` jadvaliga 'Sherzod', 'Tursunov', 'sherzod@wiut.uz' xodimini qo'shing va butun qatorni qaytaring (`RETURNING *`):\n\n📋 **Kutilayotgan DML:**\n`INSERT INTO employee (first_name, last_name, email) VALUES ('Sherzod', 'Tursunov', 'sherzod@wiut.uz') RETURNING *;`",
    "hint": "`INSERT INTO employee (first_name, last_name, email) VALUES ('Sherzod', 'Tursunov', 'sherzod@wiut.uz') RETURNING *;`",
    "solutions": [
      "INSERT INTO employee (first_name, last_name, email) VALUES ('Sherzod', 'Tursunov', 'sherzod@wiut.uz') RETURNING *",
      "INSERT INTO employee (first_name, last_name, email) VALUES ('Sherzod', 'Tursunov', 'sherzod@wiut.uz') RETURNING *;",
      "insert into employee (first_name, last_name, email) values ('sherzod', 'tursunov', 'sherzod@wiut.uz') returning *",
      "insert into employee (first_name, last_name, email) values ('sherzod', 'tursunov', 'sherzod@wiut.uz') returning *;"
    ],
    "explanation": "RETURNING * yordamida yangi xodimning to'liq profilingi qaytarildi.",
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
      "description": "Xodim qo'shildi va RETURNING * orqali barcha atributlar ko'rsatildi."
    }
  },
  {
    "id": 56,
    "sector": 4,
    "difficulty": "Floor 4 • Hard",
    "source": "L03 Slide 28 • INSERT INTO ... SELECT",
    "title": "Subquery bilan Ko'chirish (INSERT INTO ... SELECT)",
    "story": "Arxivlash jarayoni: byudjeti 300000 dan oshiq bo'lgan barcha bo'limlarni `department_archive` jadvaliga ko'chiring.",
    "taskUz": "`department_archive` jadvaliga `department` dan `budget > 300000` bo'lgan bo'limlarning `id`, `title`, `budget` ustunlarini ko'chirib yozing.\n\n📋 **Kutilayotgan DML:**\n`INSERT INTO department_archive (id, title, budget) SELECT id, title, budget FROM department WHERE budget > 300000;`",
    "hint": "`INSERT INTO department_archive (id, title, budget) SELECT id, title, budget FROM department WHERE budget > 300000;`",
    "solutions": [
      "INSERT INTO department_archive (id, title, budget) SELECT id, title, budget FROM department WHERE budget > 300000",
      "INSERT INTO department_archive (id, title, budget) SELECT id, title, budget FROM department WHERE budget > 300000;",
      "insert into department_archive (id, title, budget) select id, title, budget from department where budget > 300000",
      "insert into department_archive (id, title, budget) select id, title, budget from department where budget > 300000;",
      "INSERT INTO department_archive (id, title, budget) SELECT id, title, budget FROM department WHERE budget > 300000.00",
      "INSERT INTO department_archive (id, title, budget) SELECT id, title, budget FROM department WHERE budget > 300000.00;",
      "insert into department_archive (id, title, budget) select id, title, budget from department where budget > 300000.00",
      "insert into department_archive (id, title, budget) select id, title, budget from department where budget > 300000.00;"
    ],
    "explanation": "INSERT INTO ... SELECT subquery orqali katta byudjetli bo'limlar arxivlandi.",
    "expectedSchema": {
      "operation": "INSERT_INTO",
      "tableName": "department_archive",
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
      "description": "Mavjud department jadvalidan ma'lumotlar arxiv jadvaliga ko'chirildi."
    }
  },
  {
    "id": 57,
    "sector": 4,
    "difficulty": "Floor 4 • Medium",
    "source": "T03 Task 3 • Sana va Vaqt Literal Formatlari",
    "title": "Sana va Vaqt Tamg'asi Literallari bilan INSERT",
    "story": "PostgreSQL da ISO 8601 standartidagi sana ('YYYY-MM-DD') va vaqt ('YYYY-MM-DD HH:MI:SS') literallari qabul qilinadi.",
    "taskUz": "`employee` jadvaliga quyidagi ma'lumotlarni kiriting:\n• `first_name`: 'Nodira'\n• `last_name`: 'Ergasheva'\n• `email`: 'nodira@wiut.uz'\n• `dob`: '1998-11-20'\n• `hired_at`: '2023-09-01 09:00:00'\n\n📋 **Kutilayotgan DML:**\n`INSERT INTO employee (first_name, last_name, email, dob, hired_at) VALUES ('Nodira', 'Ergasheva', 'nodira@wiut.uz', '1998-11-20', '2023-09-01 09:00:00');`",
    "hint": "`INSERT INTO employee (first_name, last_name, email, dob, hired_at) VALUES ('Nodira', 'Ergasheva', 'nodira@wiut.uz', '1998-11-20', '2023-09-01 09:00:00');`",
    "solutions": [
      "INSERT INTO employee (first_name, last_name, email, dob, hired_at) VALUES ('Nodira', 'Ergasheva', 'nodira@wiut.uz', '1998-11-20', '2023-09-01 09:00:00')",
      "INSERT INTO employee (first_name, last_name, email, dob, hired_at) VALUES ('Nodira', 'Ergasheva', 'nodira@wiut.uz', '1998-11-20', '2023-09-01 09:00:00');",
      "insert into employee (first_name, last_name, email, dob, hired_at) values ('nodira', 'ergasheva', 'nodira@wiut.uz', '1998-11-20', '2023-09-01 09:00:00')",
      "insert into employee (first_name, last_name, email, dob, hired_at) values ('nodira', 'ergasheva', 'nodira@wiut.uz', '1998-11-20', '2023-09-01 09:00:00');"
    ],
    "explanation": "ISO sana va vaqt literallari muvaffaqiyatli saqlandi.",
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
      "description": "Xodim aniq dob va hired_at sanalari bilan kiritildi."
    }
  },
  {
    "id": 58,
    "sector": 4,
    "difficulty": "Floor 4 • Medium",
    "source": "T03 Task 3.4 • CHECK Chegarasidagi Qiymatni Kiritish",
    "title": "CHECK Chegarasidagi Qiymat (salary = 5000.00)",
    "story": "Seminar 3 3.4: Xodimning maksimal ruxsat etilgan oyligi 5000.00. Chegara qiymatini sinovdan o'tkazamiz.",
    "taskUz": "`employee` jadvaliga maksimal chegaraviy oylik bilan xodim qo'shing:\n• `first_name`: 'Zafar'\n• `last_name`: 'Saidov'\n• `email`: 'zafar@wiut.uz'\n• `salary`: 5000.00\n\n📋 **Kutilayotgan DML:**\n`INSERT INTO employee (first_name, last_name, email, salary) VALUES ('Zafar', 'Saidov', 'zafar@wiut.uz', 5000.00);`",
    "hint": "`INSERT INTO employee (first_name, last_name, email, salary) VALUES ('Zafar', 'Saidov', 'zafar@wiut.uz', 5000.00);`",
    "solutions": [
      "INSERT INTO employee (first_name, last_name, email, salary) VALUES ('Zafar', 'Saidov', 'zafar@wiut.uz', 5000.00)",
      "INSERT INTO employee (first_name, last_name, email, salary) VALUES ('Zafar', 'Saidov', 'zafar@wiut.uz', 5000.00);",
      "insert into employee (first_name, last_name, email, salary) values ('zafar', 'saidov', 'zafar@wiut.uz', 5000.00)",
      "insert into employee (first_name, last_name, email, salary) values ('zafar', 'saidov', 'zafar@wiut.uz', 5000.00);",
      "INSERT INTO employee (first_name, last_name, email, salary) VALUES ('Zafar', 'Saidov', 'zafar@wiut.uz', 5000)",
      "INSERT INTO employee (first_name, last_name, email, salary) VALUES ('Zafar', 'Saidov', 'zafar@wiut.uz', 5000);",
      "insert into employee (first_name, last_name, email, salary) values ('zafar', 'saidov', 'zafar@wiut.uz', 5000)",
      "insert into employee (first_name, last_name, email, salary) values ('zafar', 'saidov', 'zafar@wiut.uz', 5000);"
    ],
    "explanation": "CHECK cheklovining yuqori chegarasi muvaffaqiyatli qabul qilindi.",
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
      "description": "Maksimal ruxsat etilgan 5000.00 oylik bilan xodim kiritildi."
    }
  },
  {
    "id": 59,
    "sector": 4,
    "difficulty": "Floor 4 • Medium",
    "source": "T03 Task 3 • NULL Bo'lmagan Aloqa Ma'lumotlari",
    "title": "Telefon Raqami bilan Xodim Qo'shish",
    "story": "Xodimning aloqa raqami xalqaro formatda kiritilishi talab etiladi.",
    "taskUz": "`employee` jadvaliga 'Madina', 'Usmonova', 'madina@wiut.uz', '+998931112233' ma'lumotlarini qo'shing:\n\n📋 **Kutilayotgan DML:**\n`INSERT INTO employee (first_name, last_name, email, phone) VALUES ('Madina', 'Usmonova', 'madina@wiut.uz', '+998931112233');`",
    "hint": "`INSERT INTO employee (first_name, last_name, email, phone) VALUES ('Madina', 'Usmonova', 'madina@wiut.uz', '+998931112233');`",
    "solutions": [
      "INSERT INTO employee (first_name, last_name, email, phone) VALUES ('Madina', 'Usmonova', 'madina@wiut.uz', '+998931112233')",
      "INSERT INTO employee (first_name, last_name, email, phone) VALUES ('Madina', 'Usmonova', 'madina@wiut.uz', '+998931112233');",
      "insert into employee (first_name, last_name, email, phone) values ('madina', 'usmonova', 'madina@wiut.uz', '+998931112233')",
      "insert into employee (first_name, last_name, email, phone) values ('madina', 'usmonova', 'madina@wiut.uz', '+998931112233');"
    ],
    "explanation": "Telefon raqamli yangi xodim yozuvi muvaffaqiyatli saqlandi.",
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
      "description": "Xodim shaxsiy telefon raqami bilan ro'yxatga olindi."
    }
  },
  {
    "id": 60,
    "sector": 4,
    "difficulty": "Floor 4 • Boss Challenge",
    "source": "4-Qavat Bossi • Korporativ Batch INSERT va RETURNING",
    "title": "4-Qavat Bossi: Enterprise Batch INSERT va RETURNING id, title",
    "story": "4-qavatning buyuk bossi: Kompaniyaning ikkita yangi yuqori texnologik bo'limini bir so'rovda qo'shing va ularning hosil bo'lgan `id` hamda `title` ustunlarini qaytaring!\n1) 'AI Lab', 'Tashkent', 750000.00\n2) 'Cyber Security', 'London', 850000.00",
    "taskUz": "`department` jadvaliga yuqoridagi 2 ta bo'limni bir vaqtda qo'shib, `RETURNING id, title` orqali natijani qaytaring.\n\n📋 **Kutilayotgan DML:**\n`INSERT INTO department (title, location, budget) VALUES ('AI Lab', 'Tashkent', 750000.00), ('Cyber Security', 'London', 850000.00) RETURNING id, title;`",
    "hint": "`INSERT INTO department (title, location, budget) VALUES ('AI Lab', 'Tashkent', 750000.00), ('Cyber Security', 'London', 850000.00) RETURNING id, title;`",
    "solutions": [
      "INSERT INTO department (title, location, budget) VALUES ('AI Lab', 'Tashkent', 750000.00), ('Cyber Security', 'London', 850000.00) RETURNING id, title",
      "INSERT INTO department (title, location, budget) VALUES ('AI Lab', 'Tashkent', 750000.00), ('Cyber Security', 'London', 850000.00) RETURNING id, title;",
      "insert into department (title, location, budget) values ('ai lab', 'tashkent', 750000.00), ('cyber security', 'london', 850000.00) returning id, title",
      "insert into department (title, location, budget) values ('ai lab', 'tashkent', 750000.00), ('cyber security', 'london', 850000.00) returning id, title;",
      "INSERT INTO department (title, location, budget) VALUES ('AI Lab', 'Tashkent', 750000), ('Cyber Security', 'London', 850000) RETURNING id, title",
      "INSERT INTO department (title, location, budget) VALUES ('AI Lab', 'Tashkent', 750000), ('Cyber Security', 'London', 850000) RETURNING id, title;",
      "insert into department (title, location, budget) values ('ai lab', 'tashkent', 750000), ('cyber security', 'london', 850000) returning id, title",
      "insert into department (title, location, budget) values ('ai lab', 'tashkent', 750000), ('cyber security', 'london', 850000) returning id, title;"
    ],
    "explanation": "4-Qavat Bossi zabt etildi! DML INSERT mexanizmlari, DEFAULT, OVERRIDING va RETURNING mukammal o'zlashtirildi.",
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
      "description": "AI Lab va Cyber Security bo'limlari qo'shildi va RETURNING id, title bilan tasdiqlandi."
    }
  },
  {
    "id": 61,
    "sector": 5,
    "difficulty": "Floor 5 • Easy",
    "source": "T03 Task 3 • UPDATE Bitta Ustunni Yangilash",
    "title": "Bitta Ustun Qiymatini Yangilash (UPDATE)",
    "story": "Moliya bo'limi byudjeti oshirildi. `id = 1` bo'lgan bo'limning byudjetini 350000.00 ga tenglashtiring.",
    "taskUz": "`department` jadvalida `id = 1` bo'lgan satrning `budget` qiymatini 350000.00 ga yangilang.\n\n📋 **Kutilayotgan DML:**\n`UPDATE department SET budget = 350000.00 WHERE id = 1;`",
    "hint": "`UPDATE department SET budget = 350000.00 WHERE id = 1;`",
    "solutions": [
      "UPDATE department SET budget = 350000.00 WHERE id = 1",
      "UPDATE department SET budget = 350000.00 WHERE id = 1;",
      "update department set budget = 350000.00 where id = 1",
      "update department set budget = 350000.00 where id = 1;",
      "UPDATE department SET budget = 350000 WHERE id = 1",
      "UPDATE department SET budget = 350000 WHERE id = 1;",
      "update department set budget = 350000 where id = 1",
      "update department set budget = 350000 where id = 1;"
    ],
    "explanation": "Bo'lim byudjeti muvaffaqiyatli yangilandi.",
    "expectedSchema": {
      "operation": "UPDATE",
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
      "description": "id=1 bo'lgan bo'lim byudjeti 350000 ga ko'tarildi."
    }
  },
  {
    "id": 62,
    "sector": 5,
    "difficulty": "Floor 5 • Easy",
    "source": "T03 Task 3 • Matn Ustunini Yangilash",
    "title": "Bo'lim Joylashuvini Ko'chirish (location Yangilash)",
    "story": "'Finance' bo'limi yangi Toshkent binosiga ko'chib o'tdi. Joylashuvni yangilash lozim.",
    "taskUz": "`department` jadvalida `title = 'Finance'` bo'lgan qatorning `location` qiymatini 'Tashkent' ga o'zgartiring.\n\n📋 **Kutilayotgan DML:**\n`UPDATE department SET location = 'Tashkent' WHERE title = 'Finance';`",
    "hint": "`UPDATE department SET location = 'Tashkent' WHERE title = 'Finance';`",
    "solutions": [
      "UPDATE department SET location = 'Tashkent' WHERE title = 'Finance'",
      "UPDATE department SET location = 'Tashkent' WHERE title = 'Finance';",
      "update department set location = 'tashkent' where title = 'finance'",
      "update department set location = 'tashkent' where title = 'finance';"
    ],
    "explanation": "Finance bo'limi joylashuvi Toshkentga o'zgartirildi.",
    "expectedSchema": {
      "operation": "UPDATE",
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
      "description": "Finance bo'limi location ustuni 'Tashkent' ga o'zgartirildi."
    }
  },
  {
    "id": 63,
    "sector": 5,
    "difficulty": "Floor 5 • Medium",
    "source": "T03 Task 3 • Bir Nechta Ustunni Yangilash",
    "title": "Bir Nechta Ustunni Bir Vaqtda Yangilash",
    "story": "2-raqamli bo'lim yangi shahar filialiga aylantirildi: uning byudjeti 280000.00, joylashuvi esa 'Samarkand' bo'lishi kerak.",
    "taskUz": "`department` jadvalida `id = 2` bo'lgan bo'limning `budget = 280000.00` va `location = 'Samarkand'` qilib yangilang.\n\n📋 **Kutilayotgan DML:**\n`UPDATE department SET budget = 280000.00, location = 'Samarkand' WHERE id = 2;`",
    "hint": "`UPDATE department SET budget = 280000.00, location = 'Samarkand' WHERE id = 2;`",
    "solutions": [
      "UPDATE department SET budget = 280000.00, location = 'Samarkand' WHERE id = 2",
      "UPDATE department SET budget = 280000.00, location = 'Samarkand' WHERE id = 2;",
      "update department set budget = 280000.00, location = 'samarkand' where id = 2",
      "update department set budget = 280000.00, location = 'samarkand' where id = 2;",
      "UPDATE department SET budget = 280000, location = 'Samarkand' WHERE id = 2",
      "UPDATE department SET budget = 280000, location = 'Samarkand' WHERE id = 2;",
      "update department set budget = 280000, location = 'samarkand' where id = 2",
      "update department set budget = 280000, location = 'samarkand' where id = 2;",
      "UPDATE department SET location = 'Samarkand', budget = 280000.00 WHERE id = 2",
      "UPDATE department SET location = 'Samarkand', budget = 280000.00 WHERE id = 2;",
      "update department set location = 'samarkand', budget = 280000.00 where id = 2",
      "update department set location = 'samarkand', budget = 280000.00 where id = 2;"
    ],
    "explanation": "Bir vaqtning o'zida byudjet va joylashuv yangilandi.",
    "expectedSchema": {
      "operation": "UPDATE",
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
      "description": "id=2 bo'limining budget va location ustunlari yangilandi."
    }
  },
  {
    "id": 64,
    "sector": 5,
    "difficulty": "Floor 5 • Medium",
    "source": "T03 Task 3 • Ifodali Yangilash (Expressions)",
    "title": "Hisob-Kitobli Yangilash: 10% Oylik Oshirish",
    "story": "Inflyatsiya kompensatsiyasi: 1-bo'limdagi barcha xodimlarning maoshini 10% ga oshirish lozim (`salary = salary * 1.10`).",
    "taskUz": "`employee` jadvalida `department_id = 1` bo'lgan barcha xodimlarning oyligini 10% ga oshiring.\n\n📋 **Kutilayotgan DML:**\n`UPDATE employee SET salary = salary * 1.10 WHERE department_id = 1;`",
    "hint": "`UPDATE employee SET salary = salary * 1.10 WHERE department_id = 1;`",
    "solutions": [
      "UPDATE employee SET salary = salary * 1.10 WHERE department_id = 1",
      "UPDATE employee SET salary = salary * 1.10 WHERE department_id = 1;",
      "update employee set salary = salary * 1.10 where department_id = 1",
      "update employee set salary = salary * 1.10 where department_id = 1;",
      "UPDATE employee SET salary = salary * 1.1 WHERE department_id = 1",
      "UPDATE employee SET salary = salary * 1.1 WHERE department_id = 1;",
      "update employee set salary = salary * 1.1 where department_id = 1",
      "update employee set salary = salary * 1.1 where department_id = 1;"
    ],
    "explanation": "1-bo'lim xodimlarining barchasiga 10% qo'shildi.",
    "expectedSchema": {
      "operation": "UPDATE",
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
      "description": "1-bo'lim xodimlarining maoshi 1.1 baravarga oshirildi."
    }
  },
  {
    "id": 65,
    "sector": 5,
    "difficulty": "Floor 5 • Medium",
    "source": "T03 Task 3.5 • Standart Qiymatni Tiklash (SET col = DEFAULT)",
    "title": "Standart Qiymatni Tiklash (SET salary = DEFAULT)",
    "story": "Xodim oyligi xato hisoblangan edi. Uni qayta boshlang'ich standart oylikka (1000.00) tenglashtirish uchun `DEFAULT` dan foydalaning.",
    "taskUz": "`employee` jadvalida `id = 3` bo'lgan xodimning oyligini standart qiymatga tiklang (`SET salary = DEFAULT`).\n\n📋 **Kutilayotgan DML:**\n`UPDATE employee SET salary = DEFAULT WHERE id = 3;`",
    "hint": "`UPDATE employee SET salary = DEFAULT WHERE id = 3;`",
    "solutions": [
      "UPDATE employee SET salary = DEFAULT WHERE id = 3",
      "UPDATE employee SET salary = DEFAULT WHERE id = 3;",
      "update employee set salary = default where id = 3",
      "update employee set salary = default where id = 3;"
    ],
    "explanation": "salary ustuni o'zining DEFAULT qiymatiga tiklandi.",
    "expectedSchema": {
      "operation": "UPDATE",
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
      "description": "id=3 bo'lgan xodim maoshi standart 1000.00 ga qaytarildi."
    }
  },
  {
    "id": 66,
    "sector": 5,
    "difficulty": "Floor 5 • Medium",
    "source": "T03 Task 3 • Shartli Deaktivatsiya (WHERE hired_at)",
    "title": "Shartli Deaktivatsiya (active = false)",
    "story": "Eski xodimlar auditdan o'tmoqda: 2020-yil 1-yanvardan oldin ishga kirgan xodimlarning holatini `active = false` qiling.",
    "taskUz": "`employee` jadvalida `hired_at < '2020-01-01'` bo'lgan barcha xodimlarning `active` holatini `false` ga o'zgartiring.\n\n📋 **Kutilayotgan DML:**\n`UPDATE employee SET active = false WHERE hired_at < '2020-01-01';`",
    "hint": "`UPDATE employee SET active = false WHERE hired_at < '2020-01-01';`",
    "solutions": [
      "UPDATE employee SET active = false WHERE hired_at < '2020-01-01'",
      "UPDATE employee SET active = false WHERE hired_at < '2020-01-01';",
      "update employee set active = false where hired_at < '2020-01-01'",
      "update employee set active = false where hired_at < '2020-01-01';"
    ],
    "explanation": "2020-yildan oldingi yozuvlar faolsizlantirildi.",
    "expectedSchema": {
      "operation": "UPDATE",
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
      "description": "Eski xodimlar active=false holatiga o'tkazildi."
    }
  },
  {
    "id": 67,
    "sector": 5,
    "difficulty": "Floor 5 • Medium",
    "source": "T03 Task 3 • Aloqa Ma'lumotlarini Yangilash",
    "title": "Xodim Telefon va Emailini Yangilash",
    "story": "1-raqamli xodim aloqa ma'lumotlarini o'zgartirdi: `phone = '+998909876543'`, `email = 'ali.new@wiut.uz'`.",
    "taskUz": "`employee` jadvalida `id = 1` bo'lgan xodimning `phone` va `email` ustunlarini yuqoridagi qiymatlar bilan yangilang.\n\n📋 **Kutilayotgan DML:**\n`UPDATE employee SET phone = '+998909876543', email = 'ali.new@wiut.uz' WHERE id = 1;`",
    "hint": "`UPDATE employee SET phone = '+998909876543', email = 'ali.new@wiut.uz' WHERE id = 1;`",
    "solutions": [
      "UPDATE employee SET phone = '+998909876543', email = 'ali.new@wiut.uz' WHERE id = 1",
      "UPDATE employee SET phone = '+998909876543', email = 'ali.new@wiut.uz' WHERE id = 1;",
      "update employee set phone = '+998909876543', email = 'ali.new@wiut.uz' where id = 1",
      "update employee set phone = '+998909876543', email = 'ali.new@wiut.uz' where id = 1;",
      "UPDATE employee SET email = 'ali.new@wiut.uz', phone = '+998909876543' WHERE id = 1",
      "UPDATE employee SET email = 'ali.new@wiut.uz', phone = '+998909876543' WHERE id = 1;",
      "update employee set email = 'ali.new@wiut.uz', phone = '+998909876543' where id = 1",
      "update employee set email = 'ali.new@wiut.uz', phone = '+998909876543' where id = 1;"
    ],
    "explanation": "Telefon va elektron pochta manzillari unikal talablar asosida yangilandi.",
    "expectedSchema": {
      "operation": "UPDATE",
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
      "description": "id=1 bo'lgan xodimning telefon va emaillari yangilandi."
    }
  },
  {
    "id": 68,
    "sector": 5,
    "difficulty": "Floor 5 • Hard",
    "source": "T03 Task 3 • UPDATE RETURNING",
    "title": "UPDATE bilan Yangilangan Natijani Qaytarish (RETURNING)",
    "story": "Byudjetga 50000 qo'shildi va dastur yangilangan byudjet miqdorini darhol o'qib olishi lozim.",
    "taskUz": "`department` jadvalida `id = 1` bo'lgan bo'lim byudjetiga 50000 qo'shing va `RETURNING id, budget` orqali yangi qiymatni qaytaring.\n\n📋 **Kutilayotgan DML:**\n`UPDATE department SET budget = budget + 50000 WHERE id = 1 RETURNING id, budget;`",
    "hint": "`UPDATE department SET budget = budget + 50000 WHERE id = 1 RETURNING id, budget;`",
    "solutions": [
      "UPDATE department SET budget = budget + 50000 WHERE id = 1 RETURNING id, budget",
      "UPDATE department SET budget = budget + 50000 WHERE id = 1 RETURNING id, budget;",
      "update department set budget = budget + 50000 where id = 1 returning id, budget",
      "update department set budget = budget + 50000 where id = 1 returning id, budget;",
      "UPDATE department SET budget = budget + 50000.00 WHERE id = 1 RETURNING id, budget",
      "UPDATE department SET budget = budget + 50000.00 WHERE id = 1 RETURNING id, budget;",
      "update department set budget = budget + 50000.00 where id = 1 returning id, budget",
      "update department set budget = budget + 50000.00 where id = 1 returning id, budget;"
    ],
    "explanation": "Byudjet oshirildi va RETURNING bilan yangi ko'rsatkich ekranga chiqarildi.",
    "expectedSchema": {
      "operation": "UPDATE",
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
      "description": "Byudjetga 50000 qo'shildi va RETURNING id, budget qaytarildi."
    }
  },
  {
    "id": 69,
    "sector": 5,
    "difficulty": "Floor 5 • Medium",
    "source": "T03 Task 3.4 • CHECK Cheklovini Hurmat Qilish",
    "title": "CHECK Chekloviga Mos Oylik Yangilash",
    "story": "Seminar 3 3.4: Xodim oyligini ko'tarayotganda 5000.00 dan oshib ketmaslik kerak. 2-xodimning maoshini 4999.99 ga tenglashtiring.",
    "taskUz": "`employee` jadvalida `id = 2` bo'lgan xodimning `salary` ustunini 4999.99 qiling.\n\n📋 **Kutilayotgan DML:**\n`UPDATE employee SET salary = 4999.99 WHERE id = 2;`",
    "hint": "`UPDATE employee SET salary = 4999.99 WHERE id = 2;`",
    "solutions": [
      "UPDATE employee SET salary = 4999.99 WHERE id = 2",
      "UPDATE employee SET salary = 4999.99 WHERE id = 2;",
      "update employee set salary = 4999.99 where id = 2",
      "update employee set salary = 4999.99 where id = 2;"
    ],
    "explanation": "CHECK chegarasini buzmagan holda maosh yangilandi.",
    "expectedSchema": {
      "operation": "UPDATE",
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
      "description": "id=2 bo'lgan xodim maoshi 4999.99 ga o'zgartirildi."
    }
  },
  {
    "id": 70,
    "sector": 5,
    "difficulty": "Floor 5 • Medium",
    "source": "T03 Task 3 • Bir Nechta Bo'lim Xodimlarini Faollashtirish",
    "title": "IN Predikati bilan Guruhli Yangilash",
    "story": "1 va 2-bo'limdagi barcha xodimlarni birdaniga faol holatga (`active = true`) keltirish lozim.",
    "taskUz": "`employee` jadvalida `department_id IN (1, 2)` bo'lgan barcha xodimlarning `active = true` qiling.\n\n📋 **Kutilayotgan DML:**\n`UPDATE employee SET active = true WHERE department_id IN (1, 2);`",
    "hint": "`UPDATE employee SET active = true WHERE department_id IN (1, 2);`",
    "solutions": [
      "UPDATE employee SET active = true WHERE department_id IN (1, 2)",
      "UPDATE employee SET active = true WHERE department_id IN (1, 2);",
      "update employee set active = true where department_id in (1, 2)",
      "update employee set active = true where department_id in (1, 2);",
      "UPDATE employee SET active = true WHERE department_id IN (1,2)",
      "UPDATE employee SET active = true WHERE department_id IN (1,2);",
      "update employee set active = true where department_id in (1,2)",
      "update employee set active = true where department_id in (1,2);"
    ],
    "explanation": "1 va 2-bo'lim xodimlari bitta so'rovda faollashtirildi.",
    "expectedSchema": {
      "operation": "UPDATE",
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
      "description": "1 va 2-bo'lim xodimlari active=true holatiga keltirildi."
    }
  },
  {
    "id": 71,
    "sector": 5,
    "difficulty": "Floor 5 • Medium",
    "source": "T03 Task 2 & 3 • Tug'ilgan Sanani (dob) Yangilash",
    "title": "Tug'ilgan Sana (dob) Qiymatini Kiritish",
    "story": "1-raqamli xodimning shaxsiy ish jildiga tug'ilgan sanasi (`dob = '1992-04-15'`) kiritilmoqda.",
    "taskUz": "`employee` jadvalida `id = 1` bo'lgan xodimning `dob` ustunini '1992-04-15' ga yangilang.\n\n📋 **Kutilayotgan DML:**\n`UPDATE employee SET dob = '1992-04-15' WHERE id = 1;`",
    "hint": "`UPDATE employee SET dob = '1992-04-15' WHERE id = 1;`",
    "solutions": [
      "UPDATE employee SET dob = '1992-04-15' WHERE id = 1",
      "UPDATE employee SET dob = '1992-04-15' WHERE id = 1;",
      "update employee set dob = '1992-04-15' where id = 1",
      "update employee set dob = '1992-04-15' where id = 1;"
    ],
    "explanation": "Xodimning dob ustuni muvaffaqiyatli to'ldirildi.",
    "expectedSchema": {
      "operation": "UPDATE",
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
      "description": "id=1 bo'lgan xodimning tug'ilgan sanasi kiritildi."
    }
  },
  {
    "id": 72,
    "sector": 5,
    "difficulty": "Floor 5 • Hard",
    "source": "L03 Slide 28 • Subquery bilan UPDATE",
    "title": "Subquery Asosida Oylik Qo'shish",
    "story": "'Finance' bo'limida ishlaydigan xodimlarga qo'shimcha 200.00 mukofot puli qo'shing (`department_id = (SELECT id FROM department WHERE title = 'Finance')`).",
    "taskUz": "`employee` jadvalida 'Finance' bo'limi xodimlarining oyligiga 200 qo'shing (`salary = salary + 200`).\n\n📋 **Kutilayotgan DML:**\n`UPDATE employee SET salary = salary + 200 WHERE department_id = (SELECT id FROM department WHERE title = 'Finance');`",
    "hint": "`UPDATE employee SET salary = salary + 200 WHERE department_id = (SELECT id FROM department WHERE title = 'Finance');`",
    "solutions": [
      "UPDATE employee SET salary = salary + 200 WHERE department_id = (SELECT id FROM department WHERE title = 'Finance')",
      "UPDATE employee SET salary = salary + 200 WHERE department_id = (SELECT id FROM department WHERE title = 'Finance');",
      "update employee set salary = salary + 200 where department_id = (select id from department where title = 'finance')",
      "update employee set salary = salary + 200 where department_id = (select id from department where title = 'finance');",
      "UPDATE employee SET salary = salary + 200.00 WHERE department_id = (SELECT id FROM department WHERE title = 'Finance')",
      "UPDATE employee SET salary = salary + 200.00 WHERE department_id = (SELECT id FROM department WHERE title = 'Finance');",
      "update employee set salary = salary + 200.00 where department_id = (select id from department where title = 'finance')",
      "update employee set salary = salary + 200.00 where department_id = (select id from department where title = 'finance');"
    ],
    "explanation": "Subquery orqali dinamik topilgan bo'lim xodimlarining oyligi oshirildi.",
    "expectedSchema": {
      "operation": "UPDATE",
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
      "description": "Finance bo'limidagi barcha xodimlarga 200 qo'shildi."
    }
  },
  {
    "id": 73,
    "sector": 5,
    "difficulty": "Floor 5 • Easy",
    "source": "T03 Task 3 • Qiymatni NULL ga Tenglashtirish",
    "title": "Ixtiyoriy Maydonni Bo'shatish (SET phone = NULL)",
    "story": "Xodim shaxsiy telefon raqamini tizimdan o'chirishni so'radi. Ustun nullable bo'lgani sababli uni `NULL` ga tenglashtiramiz.",
    "taskUz": "`employee` jadvalida `id = 4` bo'lgan xodimning `phone` ustunini `NULL` ga o'zgartiring.\n\n📋 **Kutilayotgan DML:**\n`UPDATE employee SET phone = NULL WHERE id = 4;`",
    "hint": "`UPDATE employee SET phone = NULL WHERE id = 4;`",
    "solutions": [
      "UPDATE employee SET phone = NULL WHERE id = 4",
      "UPDATE employee SET phone = NULL WHERE id = 4;",
      "update employee set phone = null where id = 4",
      "update employee set phone = null where id = 4;"
    ],
    "explanation": "phone ustuni bo'shatildi (NULL holatiga keltirildi).",
    "expectedSchema": {
      "operation": "UPDATE",
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
      "description": "id=4 bo'lgan xodim telefoni NULL qilindi."
    }
  },
  {
    "id": 74,
    "sector": 5,
    "difficulty": "Floor 5 • Medium",
    "source": "T03 Task 3 • Ko'p Qirrali Yangilash",
    "title": "Byudjetni 5% ga Oshirish va Joylashuvni O'zgartirish",
    "story": "Bosh qarorgoh (HQ) modernizatsiyasi: 1-bo'lim byudjetini 5% ga oshiring (`budget = budget * 1.05`) va joylashuvini 'Tashkent HQ' deb belgilang.",
    "taskUz": "`department` jadvalida `id = 1` bo'lgan bo'lim uchun `budget = budget * 1.05, location = 'Tashkent HQ'` ni bajaring.\n\n📋 **Kutilayotgan DML:**\n`UPDATE department SET budget = budget * 1.05, location = 'Tashkent HQ' WHERE id = 1;`",
    "hint": "`UPDATE department SET budget = budget * 1.05, location = 'Tashkent HQ' WHERE id = 1;`",
    "solutions": [
      "UPDATE department SET budget = budget * 1.05, location = 'Tashkent HQ' WHERE id = 1",
      "UPDATE department SET budget = budget * 1.05, location = 'Tashkent HQ' WHERE id = 1;",
      "update department set budget = budget * 1.05, location = 'tashkent hq' where id = 1",
      "update department set budget = budget * 1.05, location = 'tashkent hq' where id = 1;",
      "UPDATE department SET location = 'Tashkent HQ', budget = budget * 1.05 WHERE id = 1",
      "UPDATE department SET location = 'Tashkent HQ', budget = budget * 1.05 WHERE id = 1;",
      "update department set location = 'tashkent hq', budget = budget * 1.05 where id = 1",
      "update department set location = 'tashkent hq', budget = budget * 1.05 where id = 1;"
    ],
    "explanation": "Byudjet foizi va joylashuv nomi bitta buyruqda yangilandi.",
    "expectedSchema": {
      "operation": "UPDATE",
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
      "description": "Bosh boshqarma byudjeti 5% ga oshirildi va lokatsiyasi yangilandi."
    }
  },
  {
    "id": 75,
    "sector": 5,
    "difficulty": "Floor 5 • Boss Challenge",
    "source": "5-Qavat Bossi • Xodimlarni Tiklash va Oylik Qayta Hisobi",
    "title": "5-Qavat Bossi: Yillik Qayta Tiklash va RETURNING id, salary, active",
    "story": "5-qavatning buyuk bossi: Nofaol bo'lib turgan (`active = false`) barcha xodimlarni faollashtiring (`active = true`), ularning maoshini 15% ga oshiring (`salary = salary * 1.15`) va natijani `RETURNING id, salary, active` orqali qaytaring!",
    "taskUz": "`employee` jadvalida `WHERE active = false` bo'lgan xodimlar uchun `SET salary = salary * 1.15, active = true RETURNING id, salary, active;` ni bajaring.\n\n📋 **Kutilayotgan DML:**\n`UPDATE employee SET salary = salary * 1.15, active = true WHERE active = false RETURNING id, salary, active;`",
    "hint": "`UPDATE employee SET salary = salary * 1.15, active = true WHERE active = false RETURNING id, salary, active;`",
    "solutions": [
      "UPDATE employee SET salary = salary * 1.15, active = true WHERE active = false RETURNING id, salary, active",
      "UPDATE employee SET salary = salary * 1.15, active = true WHERE active = false RETURNING id, salary, active;",
      "update employee set salary = salary * 1.15, active = true where active = false returning id, salary, active",
      "update employee set salary = salary * 1.15, active = true where active = false returning id, salary, active;",
      "UPDATE employee SET active = true, salary = salary * 1.15 WHERE active = false RETURNING id, salary, active",
      "UPDATE employee SET active = true, salary = salary * 1.15 WHERE active = false RETURNING id, salary, active;",
      "update employee set active = true, salary = salary * 1.15 where active = false returning id, salary, active",
      "update employee set active = true, salary = salary * 1.15 where active = false returning id, salary, active;"
    ],
    "explanation": "5-Qavat Bossi muvaffaqiyatli zabt etildi! DML UPDATE imkoniyatlari, matematik ifodalar va RETURNING mukammal o'zlashtirildi.",
    "expectedSchema": {
      "operation": "UPDATE",
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
      "description": "Nofaol xodimlar faollashtirildi, 15% bonus qo'shildi va natijalar qaytarildi."
    }
  },
  {
    "id": 76,
    "sector": 6,
    "difficulty": "Floor 6 • Easy",
    "source": "T03 Task 4 • Ustun Darajasidagi Tashqi Kalit (Inline FK)",
    "title": "Inline Tashqi Kalit (REFERENCES department(id))",
    "story": "Seminar 3 4-topshiriq: Xodimlarni bo'limlarga biriktirish uchun `employee` jadvalida ustun darajasidagi tashqi kalit belgilaymiz.",
    "taskUz": "`employee` nomli jadval yarating: `id` (integer PRIMARY KEY), `first_name` (varchar(25)), `department_id` (integer REFERENCES department(id)).\n\n📋 **Kutilayotgan Sxema:**\n• Ustunlar: `id integer PRIMARY KEY`, `first_name varchar(25)`, `department_id integer REFERENCES department(id)`",
    "hint": "`CREATE TABLE employee (id integer PRIMARY KEY, first_name varchar(25), department_id integer REFERENCES department(id));`",
    "solutions": [
      "CREATE TABLE employee (id integer PRIMARY KEY, first_name varchar(25), department_id integer REFERENCES department(id))",
      "CREATE TABLE employee (id integer PRIMARY KEY, first_name varchar(25), department_id integer REFERENCES department(id));",
      "create table employee (id integer primary key, first_name varchar(25), department_id integer references department(id))",
      "create table employee (id integer primary key, first_name varchar(25), department_id integer references department(id));",
      "CREATE TABLE employee (id int PRIMARY KEY, first_name varchar(25), department_id int REFERENCES department(id))",
      "CREATE TABLE employee (id int PRIMARY KEY, first_name varchar(25), department_id int REFERENCES department(id));",
      "create table employee (id int primary key, first_name varchar(25), department_id int references department(id))",
      "create table employee (id int primary key, first_name varchar(25), department_id int references department(id));"
    ],
    "explanation": "department_id ustuni department jadvaliga inline FK orqali bog'landi.",
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
          "type": "varchar(25)"
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
    "id": 77,
    "sector": 6,
    "difficulty": "Floor 6 • Easy",
    "source": "T03 Task 4 • Jadval Darajasidagi Tashqi Kalit",
    "title": "Nomlangan Tashqi Kalit (CONSTRAINT fk_employee_department)",
    "story": "Katta ma'lumotlar bazalarida tashqi kalitlarga aniq nom beriladi (`CONSTRAINT fk_... FOREIGN KEY (...) REFERENCES ...`).",
    "taskUz": "`employee` jadvalini yarating: `id` (integer PRIMARY KEY), `first_name` (varchar(25)), `department_id` (integer) va `CONSTRAINT fk_employee_department FOREIGN KEY (department_id) REFERENCES department(id)`.\n\n📋 **Kutilayotgan Sxema:**\n• Cheklov: `CONSTRAINT fk_employee_department FOREIGN KEY (department_id) REFERENCES department(id)`",
    "hint": "`CREATE TABLE employee (id integer PRIMARY KEY, first_name varchar(25), department_id integer, CONSTRAINT fk_employee_department FOREIGN KEY (department_id) REFERENCES department(id));`",
    "solutions": [
      "CREATE TABLE employee (id integer PRIMARY KEY, first_name varchar(25), department_id integer, CONSTRAINT fk_employee_department FOREIGN KEY (department_id) REFERENCES department(id))",
      "CREATE TABLE employee (id integer PRIMARY KEY, first_name varchar(25), department_id integer, CONSTRAINT fk_employee_department FOREIGN KEY (department_id) REFERENCES department(id));",
      "create table employee (id integer primary key, first_name varchar(25), department_id integer, constraint fk_employee_department foreign key (department_id) references department(id))",
      "create table employee (id integer primary key, first_name varchar(25), department_id integer, constraint fk_employee_department foreign key (department_id) references department(id));",
      "CREATE TABLE employee (id int PRIMARY KEY, first_name varchar(25), department_id int, CONSTRAINT fk_employee_department FOREIGN KEY (department_id) REFERENCES department(id))",
      "CREATE TABLE employee (id int PRIMARY KEY, first_name varchar(25), department_id int, CONSTRAINT fk_employee_department FOREIGN KEY (department_id) REFERENCES department(id));",
      "create table employee (id int primary key, first_name varchar(25), department_id int, constraint fk_employee_department foreign key (department_id) references department(id))",
      "create table employee (id int primary key, first_name varchar(25), department_id int, constraint fk_employee_department foreign key (department_id) references department(id));"
    ],
    "explanation": "Nomlangan fk_employee_department tashqi kaliti o'rnatildi.",
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
          "type": "varchar(25)"
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
    "id": 78,
    "sector": 6,
    "difficulty": "Floor 6 • Medium",
    "source": "L03 Slide 23 • Muqobil Kalitga Tashqi Kalit Bog'lash",
    "title": "Alternate Key (UNIQUE) Ustuniga Tashqi Kalit Bog'lash",
    "story": "Tashqi kalit nafaqat PK ga, balki UNIQUE bo'lgan ixtiyoriy maydonga ham bog'lanishi mumkin (masalan, `manager_email`).",
    "taskUz": "`project` nomli jadval yarating: `proj_id` (integer PRIMARY KEY), `title` (varchar(100)), `lead_email` (varchar(100) REFERENCES employee(email)).\n\n📋 **Kutilayotgan Sxema:**\n• Ustunlar: `proj_id integer PRIMARY KEY`, `title varchar(100)`, `lead_email varchar(100) REFERENCES employee(email)`",
    "hint": "`CREATE TABLE project (proj_id integer PRIMARY KEY, title varchar(100), lead_email varchar(100) REFERENCES employee(email));`",
    "solutions": [
      "CREATE TABLE project (proj_id integer PRIMARY KEY, title varchar(100), lead_email varchar(100) REFERENCES employee(email))",
      "CREATE TABLE project (proj_id integer PRIMARY KEY, title varchar(100), lead_email varchar(100) REFERENCES employee(email));",
      "create table project (proj_id integer primary key, title varchar(100), lead_email varchar(100) references employee(email))",
      "create table project (proj_id integer primary key, title varchar(100), lead_email varchar(100) references employee(email));",
      "CREATE TABLE project (proj_id int PRIMARY KEY, title varchar(100), lead_email varchar(100) REFERENCES employee(email))",
      "CREATE TABLE project (proj_id int PRIMARY KEY, title varchar(100), lead_email varchar(100) REFERENCES employee(email));",
      "create table project (proj_id int primary key, title varchar(100), lead_email varchar(100) references employee(email))",
      "create table project (proj_id int primary key, title varchar(100), lead_email varchar(100) references employee(email));"
    ],
    "explanation": "employee jadvalining unikal email ustuniga tashqi kalit ulandi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
      "tableName": "project",
      "columns": [
        {
          "name": "proj_id",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "title",
          "type": "varchar(100)"
        },
        {
          "name": "lead_email",
          "type": "varchar(100)",
          "isFK": true,
          "references": "employee(email)"
        }
      ]
    }
  },
  {
    "id": 79,
    "sector": 6,
    "difficulty": "Floor 6 • Medium",
    "source": "T03 Task 1 & 4 • Bog'lovchi Jadvalda Ikkita Tashqi Kalit",
    "title": "M:N Bog'lovchi Jadval Tashqi Kalitlari (assigned)",
    "story": "Seminar 3 1 va 4-topshiriqlar: `assigned` jadvali ham `employee(id)` ga, ham `project(id)` ga tayanadi.",
    "taskUz": "`assigned` nomli jadval yarating: `emp_id` (integer REFERENCES employee(id)), `proj_id` (integer REFERENCES project(id)), `role` (varchar(50)), va `PRIMARY KEY (emp_id, proj_id)`.\n\n📋 **Kutilayotgan Sxema:**\n• Birlamchi kalit: `PRIMARY KEY (emp_id, proj_id)`\n• Tashqi kalitlar: `REFERENCES employee(id)`, `REFERENCES project(id)`",
    "hint": "`CREATE TABLE assigned (emp_id integer REFERENCES employee(id), proj_id integer REFERENCES project(id), role varchar(50), PRIMARY KEY (emp_id, proj_id));`",
    "solutions": [
      "CREATE TABLE assigned (emp_id integer REFERENCES employee(id), proj_id integer REFERENCES project(id), role varchar(50), PRIMARY KEY (emp_id, proj_id))",
      "CREATE TABLE assigned (emp_id integer REFERENCES employee(id), proj_id integer REFERENCES project(id), role varchar(50), PRIMARY KEY (emp_id, proj_id));",
      "create table assigned (emp_id integer references employee(id), proj_id integer references project(id), role varchar(50), primary key (emp_id, proj_id))",
      "create table assigned (emp_id integer references employee(id), proj_id integer references project(id), role varchar(50), primary key (emp_id, proj_id));",
      "CREATE TABLE assigned (emp_id int REFERENCES employee(id), proj_id int REFERENCES project(id), role varchar(50), PRIMARY KEY (emp_id, proj_id))",
      "CREATE TABLE assigned (emp_id int REFERENCES employee(id), proj_id int REFERENCES project(id), role varchar(50), PRIMARY KEY (emp_id, proj_id));",
      "create table assigned (emp_id int references employee(id), proj_id int references project(id), role varchar(50), primary key (emp_id, proj_id))",
      "create table assigned (emp_id int references employee(id), proj_id int references project(id), role varchar(50), primary key (emp_id, proj_id));"
    ],
    "explanation": "assigned relyatsion ko'prigi ikkita tashqi kalit bilan hosil qilindi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
      "tableName": "assigned",
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
          "type": "varchar(50)"
        }
      ]
    }
  },
  {
    "id": 80,
    "sector": 6,
    "difficulty": "Floor 6 • Medium",
    "source": "L03 Slide 24 • O'z-O'ziga Bog'langan Tashqi Kalit (Self-Referencing FK)",
    "title": "O'z-O'ziga Bog'lanish: Boshliq-Xodim Ierarxiyasi",
    "story": "Kompaniya ierarxiyasida xodimning boshlig'i ham aynan shu jadvaldagi boshqa bir xodimdir (`manager_id REFERENCES employee(id)`).",
    "taskUz": "`staff_tree` nomli jadval yarating: `id` (integer PRIMARY KEY), `full_name` (varchar(50)), `manager_id` (integer REFERENCES staff_tree(id)).\n\n📋 **Kutilayotgan Sxema:**\n• Ustunlar: `id integer PRIMARY KEY`, `full_name varchar(50)`, `manager_id integer REFERENCES staff_tree(id)`",
    "hint": "`CREATE TABLE staff_tree (id integer PRIMARY KEY, full_name varchar(50), manager_id integer REFERENCES staff_tree(id));`",
    "solutions": [
      "CREATE TABLE staff_tree (id integer PRIMARY KEY, full_name varchar(50), manager_id integer REFERENCES staff_tree(id))",
      "CREATE TABLE staff_tree (id integer PRIMARY KEY, full_name varchar(50), manager_id integer REFERENCES staff_tree(id));",
      "create table staff_tree (id integer primary key, full_name varchar(50), manager_id integer references staff_tree(id))",
      "create table staff_tree (id integer primary key, full_name varchar(50), manager_id integer references staff_tree(id));",
      "CREATE TABLE staff_tree (id int PRIMARY KEY, full_name varchar(50), manager_id int REFERENCES staff_tree(id))",
      "CREATE TABLE staff_tree (id int PRIMARY KEY, full_name varchar(50), manager_id int REFERENCES staff_tree(id));",
      "create table staff_tree (id int primary key, full_name varchar(50), manager_id int references staff_tree(id))",
      "create table staff_tree (id int primary key, full_name varchar(50), manager_id int references staff_tree(id));"
    ],
    "explanation": "Self-referencing kalit orqali tashkiliy daraxt shakllantirildi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
      "tableName": "staff_tree",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "full_name",
          "type": "varchar(50)"
        },
        {
          "name": "manager_id",
          "type": "integer",
          "isFK": true,
          "references": "staff_tree(id)"
        }
      ]
    }
  },
  {
    "id": 81,
    "sector": 6,
    "difficulty": "Floor 6 • Medium",
    "source": "T03 Task 4 • Nomlangan Self-Referencing FK",
    "title": "Nomlangan Self-Referencing FK Cheklovi",
    "story": "Xodimlar jadvalida boshliq cheklovini `CONSTRAINT fk_staff_manager` deb nomlab jadval oxirida e'lon qilamiz.",
    "taskUz": "`staff_tree` jadvalini yarating va `CONSTRAINT fk_staff_manager FOREIGN KEY (manager_id) REFERENCES staff_tree(id)` cheklovini qo'shing.\n\n📋 **Kutilayotgan Sxema:**\n• Ustunlar: `id integer PRIMARY KEY`, `full_name varchar(50)`, `manager_id integer`\n• Cheklov: `CONSTRAINT fk_staff_manager FOREIGN KEY (manager_id) REFERENCES staff_tree(id)`",
    "hint": "`CREATE TABLE staff_tree (id integer PRIMARY KEY, full_name varchar(50), manager_id integer, CONSTRAINT fk_staff_manager FOREIGN KEY (manager_id) REFERENCES staff_tree(id));`",
    "solutions": [
      "CREATE TABLE staff_tree (id integer PRIMARY KEY, full_name varchar(50), manager_id integer, CONSTRAINT fk_staff_manager FOREIGN KEY (manager_id) REFERENCES staff_tree(id))",
      "CREATE TABLE staff_tree (id integer PRIMARY KEY, full_name varchar(50), manager_id integer, CONSTRAINT fk_staff_manager FOREIGN KEY (manager_id) REFERENCES staff_tree(id));",
      "create table staff_tree (id integer primary key, full_name varchar(50), manager_id integer, constraint fk_staff_manager foreign key (manager_id) references staff_tree(id))",
      "create table staff_tree (id integer primary key, full_name varchar(50), manager_id integer, constraint fk_staff_manager foreign key (manager_id) references staff_tree(id));",
      "CREATE TABLE staff_tree (id int PRIMARY KEY, full_name varchar(50), manager_id int, CONSTRAINT fk_staff_manager FOREIGN KEY (manager_id) REFERENCES staff_tree(id))",
      "CREATE TABLE staff_tree (id int PRIMARY KEY, full_name varchar(50), manager_id int, CONSTRAINT fk_staff_manager FOREIGN KEY (manager_id) REFERENCES staff_tree(id));",
      "create table staff_tree (id int primary key, full_name varchar(50), manager_id int, constraint fk_staff_manager foreign key (manager_id) references staff_tree(id))",
      "create table staff_tree (id int primary key, full_name varchar(50), manager_id int, constraint fk_staff_manager foreign key (manager_id) references staff_tree(id));"
    ],
    "explanation": "fk_staff_manager nomli ierarxik tashqi kalit biriktirildi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
      "tableName": "staff_tree",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "full_name",
          "type": "varchar(50)"
        },
        {
          "name": "manager_id",
          "type": "integer",
          "isFK": true,
          "references": "staff_tree(id)"
        }
      ]
    }
  },
  {
    "id": 82,
    "sector": 6,
    "difficulty": "Floor 6 • Medium",
    "source": "T03 Task 5 • Sotuv Guruhi (sales_team) Bog'liqligi",
    "title": "Sotuv Guruhi (sales_team) va Bo'limga Bog'lanish",
    "story": "Seminar 3 5-topshiriq: Har bir savdo jamoasi bitta bo'limga qarashli bo'ladi (`dept_id REFERENCES department(id)`).",
    "taskUz": "`sales_team` nomli jadval yarating: `team_id` (integer PRIMARY KEY), `team_name` (varchar(50)), `dept_id` (integer REFERENCES department(id)).\n\n📋 **Kutilayotgan Sxema:**\n• Ustunlar: `team_id integer PRIMARY KEY`, `team_name varchar(50)`, `dept_id integer REFERENCES department(id)`",
    "hint": "`CREATE TABLE sales_team (team_id integer PRIMARY KEY, team_name varchar(50), dept_id integer REFERENCES department(id));`",
    "solutions": [
      "CREATE TABLE sales_team (team_id integer PRIMARY KEY, team_name varchar(50), dept_id integer REFERENCES department(id))",
      "CREATE TABLE sales_team (team_id integer PRIMARY KEY, team_name varchar(50), dept_id integer REFERENCES department(id));",
      "create table sales_team (team_id integer primary key, team_name varchar(50), dept_id integer references department(id))",
      "create table sales_team (team_id integer primary key, team_name varchar(50), dept_id integer references department(id));",
      "CREATE TABLE sales_team (team_id int PRIMARY KEY, team_name varchar(50), dept_id int REFERENCES department(id))",
      "CREATE TABLE sales_team (team_id int PRIMARY KEY, team_name varchar(50), dept_id int REFERENCES department(id));",
      "create table sales_team (team_id int primary key, team_name varchar(50), dept_id int references department(id))",
      "create table sales_team (team_id int primary key, team_name varchar(50), dept_id int references department(id));"
    ],
    "explanation": "sales_team jadvali department ga muvaffaqiyatli bog'landi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
      "tableName": "sales_team",
      "columns": [
        {
          "name": "team_id",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "team_name",
          "type": "varchar(50)"
        },
        {
          "name": "dept_id",
          "type": "integer",
          "isFK": true,
          "references": "department(id)"
        }
      ]
    }
  },
  {
    "id": 83,
    "sector": 6,
    "difficulty": "Floor 6 • Medium",
    "source": "T03 Task 5 • Sotuv Xodimi (sales_rep) Bog'liqligi",
    "title": "Savdo Vakili (sales_rep) va Xodim Jadvali Bog'liqligi",
    "story": "Seminar 3 5-topshiriq: Savdo vakili qaysi jamoada (`team_id`) va qaysi xodim (`emp_id`) ekanligini ifodalaydi.",
    "taskUz": "`sales_rep` nomli jadval yarating: `id` (integer PRIMARY KEY), `team_id` (integer REFERENCES sales_team(team_id)), `emp_id` (integer REFERENCES employee(id)), `quota` (numeric(10,2)).\n\n📋 **Kutilayotgan Sxema:**\n• Ustunlar: `team_id`, `emp_id`, `quota`",
    "hint": "`CREATE TABLE sales_rep (id integer PRIMARY KEY, team_id integer REFERENCES sales_team(team_id), emp_id integer REFERENCES employee(id), quota numeric(10,2));`",
    "solutions": [
      "CREATE TABLE sales_rep (id integer PRIMARY KEY, team_id integer REFERENCES sales_team(team_id), emp_id integer REFERENCES employee(id), quota numeric(10,2))",
      "CREATE TABLE sales_rep (id integer PRIMARY KEY, team_id integer REFERENCES sales_team(team_id), emp_id integer REFERENCES employee(id), quota numeric(10,2));",
      "create table sales_rep (id integer primary key, team_id integer references sales_team(team_id), emp_id integer references employee(id), quota numeric(10,2))",
      "create table sales_rep (id integer primary key, team_id integer references sales_team(team_id), emp_id integer references employee(id), quota numeric(10,2));",
      "CREATE TABLE sales_rep (id int PRIMARY KEY, team_id int REFERENCES sales_team(team_id), emp_id int REFERENCES employee(id), quota numeric(10,2))",
      "CREATE TABLE sales_rep (id int PRIMARY KEY, team_id int REFERENCES sales_team(team_id), emp_id int REFERENCES employee(id), quota numeric(10,2));",
      "create table sales_rep (id int primary key, team_id int references sales_team(team_id), emp_id int references employee(id), quota numeric(10,2))",
      "create table sales_rep (id int primary key, team_id int references sales_team(team_id), emp_id int references employee(id), quota numeric(10,2));"
    ],
    "explanation": "sales_rep jadvali sales_team va employee ga muvaffaqiyatli bog'landi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
      "tableName": "sales_rep",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "team_id",
          "type": "integer",
          "isFK": true,
          "references": "sales_team(team_id)"
        },
        {
          "name": "emp_id",
          "type": "integer",
          "isFK": true,
          "references": "employee(id)"
        },
        {
          "name": "quota",
          "type": "numeric(10,2)"
        }
      ]
    }
  },
  {
    "id": 84,
    "sector": 6,
    "difficulty": "Floor 6 • Medium",
    "source": "T03 Task 4 • Loyihalar va Bo'lim Bog'liqligi",
    "title": "Loyihalar Jadvali (project) va Bo'lim Tashqi Kaliti",
    "story": "Har bir loyiha o'ziga mas'ul bo'lgan bo'lim tomonidan moliyalashtiriladi (`department_id REFERENCES department(id)`).",
    "taskUz": "`project` nomli jadval yarating: `id` (integer PRIMARY KEY), `name` (varchar(100) NOT NULL), `department_id` (integer REFERENCES department(id)).\n\n📋 **Kutilayotgan Sxema:**\n• Ustunlar: `id integer PRIMARY KEY`, `name varchar(100) NOT NULL`, `department_id integer REFERENCES department(id)`",
    "hint": "`CREATE TABLE project (id integer PRIMARY KEY, name varchar(100) NOT NULL, department_id integer REFERENCES department(id));`",
    "solutions": [
      "CREATE TABLE project (id integer PRIMARY KEY, name varchar(100) NOT NULL, department_id integer REFERENCES department(id))",
      "CREATE TABLE project (id integer PRIMARY KEY, name varchar(100) NOT NULL, department_id integer REFERENCES department(id));",
      "create table project (id integer primary key, name varchar(100) not null, department_id integer references department(id))",
      "create table project (id integer primary key, name varchar(100) not null, department_id integer references department(id));",
      "CREATE TABLE project (id int PRIMARY KEY, name varchar(100) NOT NULL, department_id int REFERENCES department(id))",
      "CREATE TABLE project (id int PRIMARY KEY, name varchar(100) NOT NULL, department_id int REFERENCES department(id));",
      "create table project (id int primary key, name varchar(100) not null, department_id int references department(id))",
      "create table project (id int primary key, name varchar(100) not null, department_id int references department(id));"
    ],
    "explanation": "project jadvali department ga ulandi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
      "tableName": "project",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "name",
          "type": "varchar(100)",
          "isNotNull": true
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
    "id": 85,
    "sector": 6,
    "difficulty": "Floor 6 • Medium",
    "source": "T03 Task 4 • Vazifalar (task) Jadvali",
    "title": "Vazifalar Jadvali (task) va Bog'liqliklar",
    "story": "Har bir topshiriq ma'lum bir loyihaga (`project_id`) tegishli bo'ladi va ma'sul xodimga (`assignee_id`) yuklatiladi.",
    "taskUz": "`task` nomli jadval yarating: `id` (integer PRIMARY KEY), `summary` (varchar(120)), `project_id` (integer REFERENCES project(id)), `assignee_id` (integer REFERENCES employee(id)).\n\n📋 **Kutilayotgan Sxema:**\n• Ustunlar: `id`, `summary`, `project_id`, `assignee_id`",
    "hint": "`CREATE TABLE task (id integer PRIMARY KEY, summary varchar(120), project_id integer REFERENCES project(id), assignee_id integer REFERENCES employee(id));`",
    "solutions": [
      "CREATE TABLE task (id integer PRIMARY KEY, summary varchar(120), project_id integer REFERENCES project(id), assignee_id integer REFERENCES employee(id))",
      "CREATE TABLE task (id integer PRIMARY KEY, summary varchar(120), project_id integer REFERENCES project(id), assignee_id integer REFERENCES employee(id));",
      "create table task (id integer primary key, summary varchar(120), project_id integer references project(id), assignee_id integer references employee(id))",
      "create table task (id integer primary key, summary varchar(120), project_id integer references project(id), assignee_id integer references employee(id));",
      "CREATE TABLE task (id int PRIMARY KEY, summary varchar(120), project_id int REFERENCES project(id), assignee_id int REFERENCES employee(id))",
      "CREATE TABLE task (id int PRIMARY KEY, summary varchar(120), project_id int REFERENCES project(id), assignee_id int REFERENCES employee(id));",
      "create table task (id int primary key, summary varchar(120), project_id int references project(id), assignee_id int references employee(id))",
      "create table task (id int primary key, summary varchar(120), project_id int references project(id), assignee_id int references employee(id));"
    ],
    "explanation": "task jadvali loyihalar va xodimlar bilan integratsiya qilindi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
      "tableName": "task",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "summary",
          "type": "varchar(120)"
        },
        {
          "name": "project_id",
          "type": "integer",
          "isFK": true,
          "references": "project(id)"
        },
        {
          "name": "assignee_id",
          "type": "integer",
          "isFK": true,
          "references": "employee(id)"
        }
      ]
    }
  },
  {
    "id": 86,
    "sector": 6,
    "difficulty": "Floor 6 • Medium",
    "source": "T03 Task 1 & 4 • Mijoz Shartnomalari (client_contract)",
    "title": "Mijoz Shartnomalari va client_id Tashqi Kaliti",
    "story": "Shartnomalar mijoz identifikatoriga tayanadi (`client_id REFERENCES client(client_id)`).",
    "taskUz": "`client_contract` nomli jadval yarating: `contract_no` (integer PRIMARY KEY), `client_id` (integer REFERENCES client(client_id)), `amount` (numeric(14,2)).\n\n📋 **Kutilayotgan Sxema:**\n• Ustunlar: `contract_no integer PRIMARY KEY`, `client_id integer REFERENCES client(client_id)`, `amount numeric(14,2)`",
    "hint": "`CREATE TABLE client_contract (contract_no integer PRIMARY KEY, client_id integer REFERENCES client(client_id), amount numeric(14,2));`",
    "solutions": [
      "CREATE TABLE client_contract (contract_no integer PRIMARY KEY, client_id integer REFERENCES client(client_id), amount numeric(14,2))",
      "CREATE TABLE client_contract (contract_no integer PRIMARY KEY, client_id integer REFERENCES client(client_id), amount numeric(14,2));",
      "create table client_contract (contract_no integer primary key, client_id integer references client(client_id), amount numeric(14,2))",
      "create table client_contract (contract_no integer primary key, client_id integer references client(client_id), amount numeric(14,2));",
      "CREATE TABLE client_contract (contract_no int PRIMARY KEY, client_id int REFERENCES client(client_id), amount numeric(14,2))",
      "CREATE TABLE client_contract (contract_no int PRIMARY KEY, client_id int REFERENCES client(client_id), amount numeric(14,2));",
      "create table client_contract (contract_no int primary key, client_id int references client(client_id), amount numeric(14,2))",
      "create table client_contract (contract_no int primary key, client_id int references client(client_id), amount numeric(14,2));"
    ],
    "explanation": "Mijoz shartnomalari relyatsion munosabati barpo etildi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
      "tableName": "client_contract",
      "columns": [
        {
          "name": "contract_no",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "client_id",
          "type": "integer",
          "isFK": true,
          "references": "client(client_id)"
        },
        {
          "name": "amount",
          "type": "numeric(14,2)"
        }
      ]
    }
  },
  {
    "id": 87,
    "sector": 6,
    "difficulty": "Floor 6 • Hard",
    "source": "T03 Task 4 • Siklik Bog'liqlik (Circular Dependency)",
    "title": "Bo'lim Boshlig'i Ustuni (dept_head_id)",
    "story": "Klassik muammo: `department` xodimlariga ega, lekin uning boshlig'i `dept_head_id` ham aynan bitta xodimga ishora qiladi.",
    "taskUz": "`department` jadvaliga `dept_head_id integer` qo'shib, uni xodimlar jadvaliga bog'lang: `REFERENCES employee(id)`.\n\n📋 **Kutilayotgan Sxema:**\n• Ustunlar: `id integer PRIMARY KEY`, `title varchar(100)`, `dept_head_id integer REFERENCES employee(id)`",
    "hint": "`CREATE TABLE department (id integer PRIMARY KEY, title varchar(100), dept_head_id integer REFERENCES employee(id));`",
    "solutions": [
      "CREATE TABLE department (id integer PRIMARY KEY, title varchar(100), dept_head_id integer REFERENCES employee(id))",
      "CREATE TABLE department (id integer PRIMARY KEY, title varchar(100), dept_head_id integer REFERENCES employee(id));",
      "create table department (id integer primary key, title varchar(100), dept_head_id integer references employee(id))",
      "create table department (id integer primary key, title varchar(100), dept_head_id integer references employee(id));",
      "CREATE TABLE department (id int PRIMARY KEY, title varchar(100), dept_head_id int REFERENCES employee(id))",
      "CREATE TABLE department (id int PRIMARY KEY, title varchar(100), dept_head_id int REFERENCES employee(id));",
      "create table department (id int primary key, title varchar(100), dept_head_id int references employee(id))",
      "create table department (id int primary key, title varchar(100), dept_head_id int references employee(id));"
    ],
    "explanation": "Bo'lim boshlig'i tashqi kaliti o'rnatildi.",
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
          "name": "dept_head_id",
          "type": "integer",
          "isFK": true,
          "references": "employee(id)"
        }
      ]
    }
  },
  {
    "id": 88,
    "sector": 6,
    "difficulty": "Floor 6 • Hard",
    "source": "L03 Slide 24 • Murakkab Composite Kalitga Tashqi Kalit",
    "title": "Composite Primary Key ga Bog'langan Tashqi Kalit",
    "story": "Agar ota jadvalning birlamchi kaliti (title, location) bo'lsa, unga bog'lanuvchi tashqi kalit ham ikkita ustundan iborat bo'ladi.",
    "taskUz": "`office_expense` nomli jadval yarating: `id` (integer PRIMARY KEY), `dept_title` (varchar(100)), `dept_loc` (varchar(50)), `amount` (numeric(10,2)), va `FOREIGN KEY (dept_title, dept_loc) REFERENCES department(title, location)`.\n\n📋 **Kutilayotgan Sxema:**\n• Cheklov: `FOREIGN KEY (dept_title, dept_loc) REFERENCES department(title, location)`",
    "hint": "`CREATE TABLE office_expense (id integer PRIMARY KEY, dept_title varchar(100), dept_loc varchar(50), amount numeric(10,2), FOREIGN KEY (dept_title, dept_loc) REFERENCES department(title, location));`",
    "solutions": [
      "CREATE TABLE office_expense (id integer PRIMARY KEY, dept_title varchar(100), dept_loc varchar(50), amount numeric(10,2), FOREIGN KEY (dept_title, dept_loc) REFERENCES department(title, location))",
      "CREATE TABLE office_expense (id integer PRIMARY KEY, dept_title varchar(100), dept_loc varchar(50), amount numeric(10,2), FOREIGN KEY (dept_title, dept_loc) REFERENCES department(title, location));",
      "create table office_expense (id integer primary key, dept_title varchar(100), dept_loc varchar(50), amount numeric(10,2), foreign key (dept_title, dept_loc) references department(title, location))",
      "create table office_expense (id integer primary key, dept_title varchar(100), dept_loc varchar(50), amount numeric(10,2), foreign key (dept_title, dept_loc) references department(title, location));",
      "CREATE TABLE office_expense (id int PRIMARY KEY, dept_title varchar(100), dept_loc varchar(50), amount numeric(10,2), FOREIGN KEY (dept_title, dept_loc) REFERENCES department(title, location))",
      "CREATE TABLE office_expense (id int PRIMARY KEY, dept_title varchar(100), dept_loc varchar(50), amount numeric(10,2), FOREIGN KEY (dept_title, dept_loc) REFERENCES department(title, location));",
      "create table office_expense (id int primary key, dept_title varchar(100), dept_loc varchar(50), amount numeric(10,2), foreign key (dept_title, dept_loc) references department(title, location))",
      "create table office_expense (id int primary key, dept_title varchar(100), dept_loc varchar(50), amount numeric(10,2), foreign key (dept_title, dept_loc) references department(title, location));"
    ],
    "explanation": "Murakkab composite PK ga mos composite FK yaratildi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
      "tableName": "office_expense",
      "columns": [
        {
          "name": "id",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "dept_title",
          "type": "varchar(100)"
        },
        {
          "name": "dept_loc",
          "type": "varchar(50)"
        },
        {
          "name": "amount",
          "type": "numeric(10,2)"
        }
      ]
    }
  },
  {
    "id": 89,
    "sector": 6,
    "difficulty": "Floor 6 • Medium",
    "source": "T03 Task 4 • Kompaniya Filiali Bog'liqligi",
    "title": "Filial va Hududiy Boshqaruv Bog'lanishi",
    "story": "Kompaniya filiali hududiy bo'limga tashqi kalit bilan biriktiriladi (`head_dept_id REFERENCES department(id)`).",
    "taskUz": "`regional_branch` nomli jadval yarating: `branch_id` (integer PRIMARY KEY), `city` (varchar(50)), `head_dept_id` (integer REFERENCES department(id)).\n\n📋 **Kutilayotgan Sxema:**\n• Ustunlar: `branch_id integer PRIMARY KEY`, `city varchar(50)`, `head_dept_id integer REFERENCES department(id)`",
    "hint": "`CREATE TABLE regional_branch (branch_id integer PRIMARY KEY, city varchar(50), head_dept_id integer REFERENCES department(id));`",
    "solutions": [
      "CREATE TABLE regional_branch (branch_id integer PRIMARY KEY, city varchar(50), head_dept_id integer REFERENCES department(id))",
      "CREATE TABLE regional_branch (branch_id integer PRIMARY KEY, city varchar(50), head_dept_id integer REFERENCES department(id));",
      "create table regional_branch (branch_id integer primary key, city varchar(50), head_dept_id integer references department(id))",
      "create table regional_branch (branch_id integer primary key, city varchar(50), head_dept_id integer references department(id));",
      "CREATE TABLE regional_branch (branch_id int PRIMARY KEY, city varchar(50), head_dept_id int REFERENCES department(id))",
      "CREATE TABLE regional_branch (branch_id int PRIMARY KEY, city varchar(50), head_dept_id int REFERENCES department(id));",
      "create table regional_branch (branch_id int primary key, city varchar(50), head_dept_id int references department(id))",
      "create table regional_branch (branch_id int primary key, city varchar(50), head_dept_id int references department(id));"
    ],
    "explanation": "Filial jadvali boshqaruv bo'limi bilan mustahkamlandi.",
    "expectedSchema": {
      "operation": "CREATE_TABLE",
      "tableName": "regional_branch",
      "columns": [
        {
          "name": "branch_id",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "city",
          "type": "varchar(50)"
        },
        {
          "name": "head_dept_id",
          "type": "integer",
          "isFK": true,
          "references": "department(id)"
        }
      ]
    }
  },
  {
    "id": 90,
    "sector": 6,
    "difficulty": "Floor 6 • Boss Challenge",
    "source": "6-Qavat Bossi • To'liq Relyatsion Integretet Arxitekturasi",
    "title": "6-Qavat Bossi: Loyihalar Taqsimoti Relyatsion Arxitekturasi",
    "story": "6-qavatning buyuk bossi: Xodimlarni loyihalarga bog'lovchi `project_assignment` jadvalini nomlangan birlamchi kalit (`CONSTRAINT pk_proj_assign`) va ikkita alohida nomlangan tashqi kalit (`CONSTRAINT fk_assign_employee`, `CONSTRAINT fk_assign_project`) bilan barpo eting!",
    "taskUz": "`project_assignment` jadvalini yarating:\n• `emp_id integer`\n• `proj_id integer`\n• `hours_allocated numeric(5,2)`\n• `CONSTRAINT pk_proj_assign PRIMARY KEY (emp_id, proj_id)`\n• `CONSTRAINT fk_assign_employee FOREIGN KEY (emp_id) REFERENCES employee(id)`\n• `CONSTRAINT fk_assign_project FOREIGN KEY (proj_id) REFERENCES project(id)`\n\n📋 **Kutilayotgan DDL:**\n`CREATE TABLE project_assignment (emp_id integer, proj_id integer, hours_allocated numeric(5,2), CONSTRAINT pk_proj_assign PRIMARY KEY (emp_id, proj_id), CONSTRAINT fk_assign_employee FOREIGN KEY (emp_id) REFERENCES employee(id), CONSTRAINT fk_assign_project FOREIGN KEY (proj_id) REFERENCES project(id));`",
    "hint": "`CREATE TABLE project_assignment (emp_id integer, proj_id integer, hours_allocated numeric(5,2), CONSTRAINT pk_proj_assign PRIMARY KEY (emp_id, proj_id), CONSTRAINT fk_assign_employee FOREIGN KEY (emp_id) REFERENCES employee(id), CONSTRAINT fk_assign_project FOREIGN KEY (proj_id) REFERENCES project(id));`",
    "solutions": [
      "CREATE TABLE project_assignment (emp_id integer, proj_id integer, hours_allocated numeric(5,2), CONSTRAINT pk_proj_assign PRIMARY KEY (emp_id, proj_id), CONSTRAINT fk_assign_employee FOREIGN KEY (emp_id) REFERENCES employee(id), CONSTRAINT fk_assign_project FOREIGN KEY (proj_id) REFERENCES project(id))",
      "CREATE TABLE project_assignment (emp_id integer, proj_id integer, hours_allocated numeric(5,2), CONSTRAINT pk_proj_assign PRIMARY KEY (emp_id, proj_id), CONSTRAINT fk_assign_employee FOREIGN KEY (emp_id) REFERENCES employee(id), CONSTRAINT fk_assign_project FOREIGN KEY (proj_id) REFERENCES project(id));",
      "create table project_assignment (emp_id integer, proj_id integer, hours_allocated numeric(5,2), constraint pk_proj_assign primary key (emp_id, proj_id), constraint fk_assign_employee foreign key (emp_id) references employee(id), constraint fk_assign_project foreign key (proj_id) references project(id))",
      "create table project_assignment (emp_id integer, proj_id integer, hours_allocated numeric(5,2), constraint pk_proj_assign primary key (emp_id, proj_id), constraint fk_assign_employee foreign key (emp_id) references employee(id), constraint fk_assign_project foreign key (proj_id) references project(id));",
      "CREATE TABLE project_assignment (emp_id int, proj_id int, hours_allocated numeric(5,2), CONSTRAINT pk_proj_assign PRIMARY KEY (emp_id, proj_id), CONSTRAINT fk_assign_employee FOREIGN KEY (emp_id) REFERENCES employee(id), CONSTRAINT fk_assign_project FOREIGN KEY (proj_id) REFERENCES project(id))",
      "CREATE TABLE project_assignment (emp_id int, proj_id int, hours_allocated numeric(5,2), CONSTRAINT pk_proj_assign PRIMARY KEY (emp_id, proj_id), CONSTRAINT fk_assign_employee FOREIGN KEY (emp_id) REFERENCES employee(id), CONSTRAINT fk_assign_project FOREIGN KEY (proj_id) REFERENCES project(id));",
      "create table project_assignment (emp_id int, proj_id int, hours_allocated numeric(5,2), constraint pk_proj_assign primary key (emp_id, proj_id), constraint fk_assign_employee foreign key (emp_id) references employee(id), constraint fk_assign_project foreign key (proj_id) references project(id))",
      "create table project_assignment (emp_id int, proj_id int, hours_allocated numeric(5,2), constraint pk_proj_assign primary key (emp_id, proj_id), constraint fk_assign_employee foreign key (emp_id) references employee(id), constraint fk_assign_project foreign key (proj_id) references project(id));"
    ],
    "explanation": "6-Qavat Bossi zabt etildi! Tashqi kalitlar, relyatsion yaxlitlik (referential integrity) va bog'lovchi jadvallar mukammal o'zlashtirildi.",
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
          "name": "hours_allocated",
          "type": "numeric(5,2)"
        }
      ]
    }
  },
  {
    "id": 91,
    "sector": 7,
    "difficulty": "Floor 7 • Easy",
    "source": "T03 Task 4 • Qator O'chirish (DELETE)",
    "title": "Bitta Qatorni O'chirish (DELETE FROM WHERE id)",
    "story": "Eski 5-raqamli bo'lim o'z faoliyatini tugatdi. Uni jadvaldan xavfsiz o'chiring.",
    "taskUz": "`department` jadvalidan `id = 5` bo'lgan bo'limni o'chirib tashlang.\n\n📋 **Kutilayotgan DML:**\n`DELETE FROM department WHERE id = 5;`",
    "hint": "`DELETE FROM department WHERE id = 5;`",
    "solutions": [
      "DELETE FROM department WHERE id = 5",
      "DELETE FROM department WHERE id = 5;",
      "delete from department where id = 5",
      "delete from department where id = 5;"
    ],
    "explanation": "5-bo'lim bazadan o'chirildi.",
    "expectedSchema": {
      "operation": "DELETE",
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
      "description": "id=5 bo'lgan bo'lim o'chirildi."
    }
  },
  {
    "id": 92,
    "sector": 7,
    "difficulty": "Floor 7 • Easy",
    "source": "T03 Task 4 • Shartli O'chirish (WHERE active = false)",
    "title": "Nofaol Xodimlarni Tozalash (DELETE)",
    "story": "Tizim ma'lumotlar bazasini tozalash: barcha faolsiz (`active = false`) xodimlarni o'chiring.",
    "taskUz": "`employee` jadvalidan `active = false` bo'lgan xodimlarni o'chiring.\n\n📋 **Kutilayotgan DML:**\n`DELETE FROM employee WHERE active = false;`",
    "hint": "`DELETE FROM employee WHERE active = false;`",
    "solutions": [
      "DELETE FROM employee WHERE active = false",
      "DELETE FROM employee WHERE active = false;",
      "delete from employee where active = false",
      "delete from employee where active = false;"
    ],
    "explanation": "Nofaol xodimlar jadvaldan tozalandi.",
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
      "description": "active=false bo'lgan barcha xodimlar o'chirildi."
    }
  },
  {
    "id": 93,
    "sector": 7,
    "difficulty": "Floor 7 • Medium",
    "source": "T03 Task 4 • DELETE RETURNING Mexanizmi",
    "title": "O'chirilgan Qator Ma'lumotlarini Qaytarish (RETURNING)",
    "story": "10-raqamli xodim o'chirilayotganda, audit jurnali uchun uning `id` va `email` manzillarini qaytarib olish lozim.",
    "taskUz": "`employee` jadvalidan `id = 10` bo'lgan xodimni o'chiring va `RETURNING id, email` qiling.\n\n📋 **Kutilayotgan DML:**\n`DELETE FROM employee WHERE id = 10 RETURNING id, email;`",
    "hint": "`DELETE FROM employee WHERE id = 10 RETURNING id, email;`",
    "solutions": [
      "DELETE FROM employee WHERE id = 10 RETURNING id, email",
      "DELETE FROM employee WHERE id = 10 RETURNING id, email;",
      "delete from employee where id = 10 returning id, email",
      "delete from employee where id = 10 returning id, email;"
    ],
    "explanation": "O'chirilgan satr identifikatori va emaili qaytarildi.",
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
      "description": "id=10 xodimi o'chirildi va RETURNING id, email qilindi."
    }
  },
  {
    "id": 94,
    "sector": 7,
    "difficulty": "Floor 7 • Medium",
    "source": "L03 Slide 25 • Jadvalni Tezkor Bo'shatish (TRUNCATE)",
    "title": "Jadvalni Tezkor Bo'shatish: TRUNCATE TABLE",
    "story": "Loglar yoki vaqtinchalik ma'lumotlarni qatorma-qator emas, balki bir zumda tozalash uchun `TRUNCATE` qo'llanadi.",
    "taskUz": "`temp_cache` jadvalining barcha satrlarini `TRUNCATE` yordamida tozalang.\n\n📋 **Kutilayotgan DDL:**\n`TRUNCATE TABLE temp_cache;`",
    "hint": "`TRUNCATE TABLE temp_cache;` deb yozing.",
    "solutions": [
      "TRUNCATE TABLE temp_cache",
      "TRUNCATE TABLE temp_cache;",
      "truncate table temp_cache",
      "truncate table temp_cache;",
      "TRUNCATE temp_cache",
      "TRUNCATE temp_cache;",
      "truncate temp_cache",
      "truncate temp_cache;"
    ],
    "explanation": "temp_cache jadvali bir zumda bo'shatildi.",
    "expectedSchema": {
      "operation": "DELETE",
      "tableName": "temp_cache",
      "description": "TRUNCATE TABLE yordamida kesh jadvali bo'shatildi."
    }
  },
  {
    "id": 95,
    "sector": 7,
    "difficulty": "Floor 7 • Medium",
    "source": "T03 Task 6 • TRUNCATE RESTART IDENTITY",
    "title": "TRUNCATE RESTART IDENTITY: Hisoblagichni 1 ga Qaytarish",
    "story": "Seminar 3 6-topshiriq: Jadval tozalanayotganda avtomatik `IDENTITY` (sequence) hisoblagichini ham boshlang'ich 1 ga tushirish lozim.",
    "taskUz": "`audit_log` jadvalini barcha ma'lumotlardan tozalab, hisoblagichini 1 ga qaytaring (`TRUNCATE TABLE audit_log RESTART IDENTITY;`).\n\n📋 **Kutilayotgan DDL:**\n`TRUNCATE TABLE audit_log RESTART IDENTITY;`",
    "hint": "`TRUNCATE TABLE audit_log RESTART IDENTITY;`",
    "solutions": [
      "TRUNCATE TABLE audit_log RESTART IDENTITY",
      "TRUNCATE TABLE audit_log RESTART IDENTITY;",
      "truncate table audit_log restart identity",
      "truncate table audit_log restart identity;",
      "TRUNCATE audit_log RESTART IDENTITY",
      "TRUNCATE audit_log RESTART IDENTITY;",
      "truncate audit_log restart identity",
      "truncate audit_log restart identity;"
    ],
    "explanation": "Jadval tozalandi va sequence hisoblagichi qayta ishga tushirildi.",
    "expectedSchema": {
      "operation": "DELETE",
      "tableName": "audit_log",
      "description": "audit_log jadvali tozalandi va RESTART IDENTITY bilan hisoblagich 1 ga qaytarildi."
    }
  },
  {
    "id": 96,
    "sector": 7,
    "difficulty": "Floor 7 • Medium",
    "source": "T03 Task 5 • ON DELETE CASCADE Harakati",
    "title": "Kaskadli O'chirish: ON DELETE CASCADE",
    "story": "Seminar 3 5-topshiriq: Ota bo'lim o'chirilganda, unga qarashli barcha xodimlar ham avtomatik o'chib ketishi shart (`ON DELETE CASCADE`).",
    "taskUz": "`employee` nomli jadval yarating: `id` (integer PRIMARY KEY), `department_id` (integer REFERENCES department(id) ON DELETE CASCADE).\n\n📋 **Kutilayotgan Sxema:**\n• Ustunlar: `id integer PRIMARY KEY`, `department_id integer REFERENCES department(id) ON DELETE CASCADE`",
    "hint": "`CREATE TABLE employee (id integer PRIMARY KEY, department_id integer REFERENCES department(id) ON DELETE CASCADE);`",
    "solutions": [
      "CREATE TABLE employee (id integer PRIMARY KEY, department_id integer REFERENCES department(id) ON DELETE CASCADE)",
      "CREATE TABLE employee (id integer PRIMARY KEY, department_id integer REFERENCES department(id) ON DELETE CASCADE);",
      "create table employee (id integer primary key, department_id integer references department(id) on delete cascade)",
      "create table employee (id integer primary key, department_id integer references department(id) on delete cascade);",
      "CREATE TABLE employee (id int PRIMARY KEY, department_id int REFERENCES department(id) ON DELETE CASCADE)",
      "CREATE TABLE employee (id int PRIMARY KEY, department_id int REFERENCES department(id) ON DELETE CASCADE);",
      "create table employee (id int primary key, department_id int references department(id) on delete cascade)",
      "create table employee (id int primary key, department_id int references department(id) on delete cascade);"
    ],
    "explanation": "ON DELETE CASCADE kaskad harakati o'rnatildi.",
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
          "references": "department(id) ON DELETE CASCADE"
        }
      ]
    }
  },
  {
    "id": 97,
    "sector": 7,
    "difficulty": "Floor 7 • Medium",
    "source": "T03 Task 5 • ON DELETE SET NULL Harakati",
    "title": "Yetim Qatorlarni Saqlab Qolish: ON DELETE SET NULL",
    "story": "Seminar 3 5-topshiriq: Bo'lim yopilganda, xodimlar ishdan bo'shatilmasin, faqat ularning `department_id` ustuni `NULL` bo'lib qolsin.",
    "taskUz": "`employee` nomli jadval yarating: `id` (integer PRIMARY KEY), `department_id` (integer REFERENCES department(id) ON DELETE SET NULL).\n\n📋 **Kutilayotgan Sxema:**\n• Ustunlar: `id integer PRIMARY KEY`, `department_id integer REFERENCES department(id) ON DELETE SET NULL`",
    "hint": "`CREATE TABLE employee (id integer PRIMARY KEY, department_id integer REFERENCES department(id) ON DELETE SET NULL);`",
    "solutions": [
      "CREATE TABLE employee (id integer PRIMARY KEY, department_id integer REFERENCES department(id) ON DELETE SET NULL)",
      "CREATE TABLE employee (id integer PRIMARY KEY, department_id integer REFERENCES department(id) ON DELETE SET NULL);",
      "create table employee (id integer primary key, department_id integer references department(id) on delete set null)",
      "create table employee (id integer primary key, department_id integer references department(id) on delete set null);",
      "CREATE TABLE employee (id int PRIMARY KEY, department_id int REFERENCES department(id) ON DELETE SET NULL)",
      "CREATE TABLE employee (id int PRIMARY KEY, department_id int REFERENCES department(id) ON DELETE SET NULL);",
      "create table employee (id int primary key, department_id int references department(id) on delete set null)",
      "create table employee (id int primary key, department_id int references department(id) on delete set null);"
    ],
    "explanation": "ON DELETE SET NULL xavfsiz neytrallashtirish harakati qo'yildi.",
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
          "references": "department(id) ON DELETE SET NULL"
        }
      ]
    }
  },
  {
    "id": 98,
    "sector": 7,
    "difficulty": "Floor 7 • Medium",
    "source": "T03 Task 5 • ON DELETE RESTRICT Harakati",
    "title": "O'chirishni Qat'iy Taqiqlash: ON DELETE RESTRICT",
    "story": "Agar bo'limda hech bo'lmaganda 1 ta xodim bo'lsa, o'sha bo'limni o'chirishga ruxsat berilmasin (`ON DELETE RESTRICT`).",
    "taskUz": "`employee` nomli jadval yarating: `id` (integer PRIMARY KEY), `department_id` (integer REFERENCES department(id) ON DELETE RESTRICT).\n\n📋 **Kutilayotgan Sxema:**\n• Ustunlar: `id integer PRIMARY KEY`, `department_id integer REFERENCES department(id) ON DELETE RESTRICT`",
    "hint": "`CREATE TABLE employee (id integer PRIMARY KEY, department_id integer REFERENCES department(id) ON DELETE RESTRICT);`",
    "solutions": [
      "CREATE TABLE employee (id integer PRIMARY KEY, department_id integer REFERENCES department(id) ON DELETE RESTRICT)",
      "CREATE TABLE employee (id integer PRIMARY KEY, department_id integer REFERENCES department(id) ON DELETE RESTRICT);",
      "create table employee (id integer primary key, department_id integer references department(id) on delete restrict)",
      "create table employee (id integer primary key, department_id integer references department(id) on delete restrict);",
      "CREATE TABLE employee (id int PRIMARY KEY, department_id int REFERENCES department(id) ON DELETE RESTRICT)",
      "CREATE TABLE employee (id int PRIMARY KEY, department_id int REFERENCES department(id) ON DELETE RESTRICT);",
      "create table employee (id int primary key, department_id int references department(id) on delete restrict)",
      "create table employee (id int primary key, department_id int references department(id) on delete restrict);"
    ],
    "explanation": "ON DELETE RESTRICT bilan o'chirish taqiqlandi.",
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
          "references": "department(id) ON DELETE RESTRICT"
        }
      ]
    }
  },
  {
    "id": 99,
    "sector": 7,
    "difficulty": "Floor 7 • Medium",
    "source": "L03 Slide 23 • ON DELETE NO ACTION (Sukut Bo'yicha)",
    "title": "Sukut Bo'yicha Qoida: ON DELETE NO ACTION",
    "story": "PostgreSQL da referensial harakat ko'rsatilmaganda, sukut bo'yicha `NO ACTION` (tranzaksiya oxirida yaxlitlikni tekshirish) ishlaydi.",
    "taskUz": "`employee` nomli jadval yarating: `id` (integer PRIMARY KEY), `department_id` (integer REFERENCES department(id) ON DELETE NO ACTION).\n\n📋 **Kutilayotgan Sxema:**\n• Ustunlar: `id integer PRIMARY KEY`, `department_id integer REFERENCES department(id) ON DELETE NO ACTION`",
    "hint": "`CREATE TABLE employee (id integer PRIMARY KEY, department_id integer REFERENCES department(id) ON DELETE NO ACTION);`",
    "solutions": [
      "CREATE TABLE employee (id integer PRIMARY KEY, department_id integer REFERENCES department(id) ON DELETE NO ACTION)",
      "CREATE TABLE employee (id integer PRIMARY KEY, department_id integer REFERENCES department(id) ON DELETE NO ACTION);",
      "create table employee (id integer primary key, department_id integer references department(id) on delete no action)",
      "create table employee (id integer primary key, department_id integer references department(id) on delete no action);",
      "CREATE TABLE employee (id int PRIMARY KEY, department_id int REFERENCES department(id) ON DELETE NO ACTION)",
      "CREATE TABLE employee (id int PRIMARY KEY, department_id int REFERENCES department(id) ON DELETE NO ACTION);",
      "create table employee (id int primary key, department_id int references department(id) on delete no action)",
      "create table employee (id int primary key, department_id int references department(id) on delete no action);"
    ],
    "explanation": "ON DELETE NO ACTION qoidasi o'rnatildi.",
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
          "references": "department(id) ON DELETE NO ACTION"
        }
      ]
    }
  },
  {
    "id": 100,
    "sector": 7,
    "difficulty": "Floor 7 • Medium",
    "source": "T03 Task 5 • ON UPDATE CASCADE Harakati",
    "title": "Ota Kalit O'zgarganda Kaskad: ON UPDATE CASCADE",
    "story": "Seminar 3 5-topshiriq: Agar bo'limning `id` si o'zgartirilsa, xodimlar jadvalidagi `department_id` ham avtomatik sinxron yangilansin.",
    "taskUz": "`employee` nomli jadval yarating: `id` (integer PRIMARY KEY), `department_id` (integer REFERENCES department(id) ON UPDATE CASCADE).\n\n📋 **Kutilayotgan Sxema:**\n• Ustunlar: `id integer PRIMARY KEY`, `department_id integer REFERENCES department(id) ON UPDATE CASCADE`",
    "hint": "`CREATE TABLE employee (id integer PRIMARY KEY, department_id integer REFERENCES department(id) ON UPDATE CASCADE);`",
    "solutions": [
      "CREATE TABLE employee (id integer PRIMARY KEY, department_id integer REFERENCES department(id) ON UPDATE CASCADE)",
      "CREATE TABLE employee (id integer PRIMARY KEY, department_id integer REFERENCES department(id) ON UPDATE CASCADE);",
      "create table employee (id integer primary key, department_id integer references department(id) on update cascade)",
      "create table employee (id integer primary key, department_id integer references department(id) on update cascade);",
      "CREATE TABLE employee (id int PRIMARY KEY, department_id int REFERENCES department(id) ON UPDATE CASCADE)",
      "CREATE TABLE employee (id int PRIMARY KEY, department_id int REFERENCES department(id) ON UPDATE CASCADE);",
      "create table employee (id int primary key, department_id int references department(id) on update cascade)",
      "create table employee (id int primary key, department_id int references department(id) on update cascade);"
    ],
    "explanation": "ON UPDATE CASCADE sinxronizatsiya mexanizmi o'rnatildi.",
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
          "references": "department(id) ON UPDATE CASCADE"
        }
      ]
    }
  }
];
