var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);

_scope.QUESTIONS_101_150 = [
  {
    "id": 101,
    "sector": 7,
    "difficulty": "7-Qavat • O'rta",
    "source": "T02 Page 3 & L02 Slide 38 • WorksOn Bridge Table",
    "title": "Xodim va Loyiha Bog'lovchi Jadvali (WorksOn)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**WorksOn**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table WorksOn { empNo int [ref: > Employee.empNo] projNo int [ref: > Project.projNo] hours decimal indexes { (empNo, projNo) [pk] } }",
      "WorksOn(empNo [PK, FK], projNo [PK, FK], hours)"
    ],
    "expectedSchema": {
      "tableName": "WorksOn",
      "columns": [
        {
          "name": "empNo",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Employee(empNo)"
        },
        {
          "name": "projNo",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Project(projNo)"
        },
        {
          "name": "hours",
          "type": "decimal"
        }
      ]
    },
    "explanation": "WorksOn oraliq jadvali (empNo, projNo) kompozit PK va hours atributi bilan to'liq loyihalandi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**WorksOn**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
        "Siz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi."
      ],
      "tasks": [
        "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).",
        "b) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.",
        "c) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.",
        "d) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang."
      ]
    }
  },
  {
    "id": 102,
    "sector": 7,
    "difficulty": "7-Qavat • O'rta",
    "source": "L02 Slide 38 • Student Course Enrollment Bridge",
    "title": "Talaba va Kurs Ro'yxatdan O'tish Jadvali (Enrollment)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**Enrollment**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table Enrollment { studentId int [ref: > Student.studentId] courseId varchar [ref: > Course.courseId] enrollDate date finalGrade varchar indexes { (studentId, courseId) [pk] } }",
      "Enrollment(studentId [PK, FK], courseId [PK, FK], enrollDate, finalGrade)"
    ],
    "expectedSchema": {
      "tableName": "Enrollment",
      "columns": [
        {
          "name": "studentId",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Student(studentId)"
        },
        {
          "name": "courseId",
          "type": "varchar(10)",
          "isPK": true,
          "isFK": true,
          "references": "Course(courseId)"
        },
        {
          "name": "enrollDate",
          "type": "date"
        },
        {
          "name": "finalGrade",
          "type": "varchar(5)"
        }
      ]
    },
    "explanation": "Enrollment *:* oraliq jadvali to'g'ri loyihalandi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**Enrollment**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
        "Siz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi."
      ],
      "tasks": [
        "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).",
        "b) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.",
        "c) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.",
        "d) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang."
      ]
    }
  },
  {
    "id": 103,
    "sector": 7,
    "difficulty": "7-Qavat • O'rta",
    "source": "L02 Slide 38 • Date Attribute on Bridge Relation",
    "title": "Sana Atributli Tayinlash Jadvali (Assigned)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**Assigned**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table Assigned { empNo int [ref: > Employee.empNo] projNo int [ref: > Project.projNo] assignedDate date roleTitle varchar indexes { (empNo, projNo) [pk] } }",
      "Assigned(empNo [PK, FK], projNo [PK, FK], assignedDate, roleTitle)"
    ],
    "expectedSchema": {
      "tableName": "Assigned",
      "columns": [
        {
          "name": "empNo",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Employee(empNo)"
        },
        {
          "name": "projNo",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Project(projNo)"
        },
        {
          "name": "assignedDate",
          "type": "date"
        },
        {
          "name": "roleTitle",
          "type": "varchar(50)"
        }
      ]
    },
    "explanation": "assignedDate va roleTitle atributlari Assigned bog'lovchi relatsiyasiga muvaffaqiyatli joylashtirildi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**Assigned**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
        "Siz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi."
      ],
      "tasks": [
        "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).",
        "b) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.",
        "c) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.",
        "d) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang."
      ]
    }
  },
  {
    "id": 104,
    "sector": 7,
    "difficulty": "7-Qavat • O'rta",
    "source": "L02 Slide 40 • Multi-valued Author Awards",
    "title": "Muallif Mukofotlari Ko'p Qiymatli Jadvali (AuthorAward)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**AuthorAward**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table AuthorAward { authorId int [ref: > Author.authorId] awardName varchar awardYear int indexes { (authorId, awardName) [pk] } }",
      "AuthorAward(authorId [PK, FK], awardName [PK], awardYear)"
    ],
    "expectedSchema": {
      "tableName": "AuthorAward",
      "columns": [
        {
          "name": "authorId",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Author(authorId)"
        },
        {
          "name": "awardName",
          "type": "varchar(100)",
          "isPK": true
        },
        {
          "name": "awardYear",
          "type": "integer"
        }
      ]
    },
    "explanation": "AuthorAward ko'p qiymatli atribut jadvali 1NF qoidasi bo'yicha chizildi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**AuthorAward**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
        "Siz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi."
      ],
      "tasks": [
        "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).",
        "b) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.",
        "c) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.",
        "d) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang."
      ]
    }
  },
  {
    "id": 105,
    "sector": 7,
    "difficulty": "7-Qavat • Qiyin (7-Qavat Bossi)",
    "source": "L02 Slide 38 • Supplies Many-to-Many Boss",
    "title": "7-Qavat Bossi: Ta'minotchi va Mahsulot (Supplies)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**Supplies**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table Supplies { suppId varchar [ref: > Supplier.suppId] prodId varchar [ref: > Product.prodId] unitPrice decimal minQuantity int indexes { (suppId, prodId) [pk] } }",
      "Supplies(suppId [PK, FK], prodId [PK, FK], unitPrice, minQuantity)"
    ],
    "expectedSchema": {
      "tableName": "Supplies",
      "columns": [
        {
          "name": "suppId",
          "type": "varchar(10)",
          "isPK": true,
          "isFK": true,
          "references": "Supplier(suppId)"
        },
        {
          "name": "prodId",
          "type": "varchar(20)",
          "isPK": true,
          "isFK": true,
          "references": "Product(prodId)"
        },
        {
          "name": "unitPrice",
          "type": "decimal"
        },
        {
          "name": "minQuantity",
          "type": "integer"
        }
      ]
    },
    "explanation": "7-Qavat Bossi: Supplies oraliq relatsiyasi kompozit PK va atributlari bilan to'liq tuzildi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**Supplies**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
        "Siz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi."
      ],
      "tasks": [
        "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).",
        "b) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.",
        "c) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.",
        "d) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang."
      ]
    }
  },
  {
    "id": 106,
    "sector": 8,
    "difficulty": "8-Qavat • Boshlang'ich",
    "source": "L02 Slide 36 • Chained 1:* Hierarchy Step 3",
    "title": "Kompaniya va Bo'linma Zanjiri (Company & Division)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nMazkur vazifada ixtisoslashuv / umumlashtirish (Subclass / Superclass) yoki kompozit tuzilmalar keltirilgan. Tutorial 2 Task 2 dagi Option 8A, 8B, 8C yoki 8D usullaridan tegishli shartlar asosida to'g'ri relyatsion jadvallar to'plamini shakllantirish talab etiladi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table Company { companyId int [pk] compName varchar } Table Division { divisionId int [pk] companyId int [ref: > Company.companyId] divName varchar }",
      "Company(companyId [PK], compName)\nDivision(divisionId [PK], companyId [FK], divName)"
    ],
    "expectedSchema": {
      "tables": [
        {
          "tableName": "Company",
          "columns": [
            {
              "name": "companyId",
              "type": "integer",
              "isPK": true
            },
            {
              "name": "compName",
              "type": "varchar(80)"
            }
          ]
        },
        {
          "tableName": "Division",
          "columns": [
            {
              "name": "divisionId",
              "type": "integer",
              "isPK": true
            },
            {
              "name": "companyId",
              "type": "integer",
              "isFK": true,
              "references": "Company(companyId)"
            },
            {
              "name": "divName",
              "type": "varchar(80)"
            }
          ]
        }
      ]
    },
    "explanation": "Company va Division zanjirli 1:* relyatsion modeli qurildi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Mazkur vazifada ixtisoslashuv / umumlashtirish (Subclass / Superclass) yoki kompozit tuzilmalar keltirilgan. Tutorial 2 Task 2 dagi Option 8A, 8B, 8C yoki 8D usullaridan tegishli shartlar asosida to'g'ri relyatsion jadvallar to'plamini shakllantirish talab etiladi.",
        "Siz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi."
      ],
      "tasks": [
        "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).",
        "b) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.",
        "c) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.",
        "d) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang."
      ]
    }
  },
  {
    "id": 107,
    "sector": 8,
    "difficulty": "8-Qavat • O'rta",
    "source": "L02 Slide 36 • 3-Tier Enterprise Hierarchy",
    "title": "3 Bosqichli Korporativ Zanjir (Company -> Division -> Department)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**Department**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table Department { deptId int [pk] divisionId int [ref: > Division.divisionId] dName varchar }",
      "Department(deptId [PK], divisionId [FK], dName)"
    ],
    "expectedSchema": {
      "tableName": "Department",
      "columns": [
        {
          "name": "deptId",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "divisionId",
          "type": "integer",
          "isFK": true,
          "references": "Division(divisionId)"
        },
        {
          "name": "dName",
          "type": "varchar(50)"
        }
      ]
    },
    "explanation": "3 bosqichli korporativ zanjirning uchinchi pog'onasi Department jadvali loyihalandi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**Department**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
        "Siz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi."
      ],
      "tasks": [
        "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).",
        "b) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.",
        "c) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.",
        "d) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang."
      ]
    }
  },
  {
    "id": 108,
    "sector": 8,
    "difficulty": "8-Qavat • O'rta",
    "source": "L02 Slide 36 • Multi-tier Branch & Staff",
    "title": "Filial va Xodim Zanjiri (Branch -> Employee)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**Employee**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table Employee { empId int [pk] branchId int [ref: > Branch.branchId] fullName varchar salary decimal }",
      "Employee(empId [PK], branchId [FK], fullName, salary)"
    ],
    "expectedSchema": {
      "tableName": "Employee",
      "columns": [
        {
          "name": "empId",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "branchId",
          "type": "integer",
          "isFK": true,
          "references": "Branch(branchId)"
        },
        {
          "name": "fullName",
          "type": "varchar(70)"
        },
        {
          "name": "salary",
          "type": "decimal"
        }
      ]
    },
    "explanation": "Employee bola jadvali ota Branch ga branchId [FK] bilan muvaffaqiyatli ulandi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**Employee**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
        "Siz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi."
      ],
      "tasks": [
        "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).",
        "b) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.",
        "c) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.",
        "d) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang."
      ]
    }
  },
  {
    "id": 109,
    "sector": 8,
    "difficulty": "8-Qavat • O'rta",
    "source": "L02 Slide 37 • Recursive 1:* Supervisor Relationship",
    "title": "O'z-O'ziga Bog'lanuvchi Rahbarlik Jadvali (Employee Supervisor)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**Employee**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table Employee { empNo int [pk] fullName varchar managerId int [ref: > Employee.empNo] salary decimal }",
      "Employee(empNo [PK], fullName, managerId [FK], salary)"
    ],
    "expectedSchema": {
      "tableName": "Employee",
      "columns": [
        {
          "name": "empNo",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "fullName",
          "type": "varchar(60)"
        },
        {
          "name": "managerId",
          "type": "integer",
          "isFK": true,
          "references": "Employee(empNo)"
        },
        {
          "name": "salary",
          "type": "decimal"
        }
      ]
    },
    "explanation": "Rekursiv supervisor bog'liqligi o'z-o'ziga qaragan managerId [FK] bilan to'g'ri loyihalandi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**Employee**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
        "Siz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi."
      ],
      "tasks": [
        "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).",
        "b) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.",
        "c) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.",
        "d) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang."
      ]
    }
  },
  {
    "id": 110,
    "sector": 8,
    "difficulty": "8-Qavat • O'rta",
    "source": "L02 Slide 37 • Recursive Category Tree",
    "title": "Rekursiv Katalog Daraxti (Category Tree)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**Category**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table Category { categoryId int [pk] catName varchar parentCatId int [ref: > Category.categoryId] sortOrder int }",
      "Category(categoryId [PK], catName, parentCatId [FK], sortOrder)"
    ],
    "expectedSchema": {
      "tableName": "Category",
      "columns": [
        {
          "name": "categoryId",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "catName",
          "type": "varchar(50)"
        },
        {
          "name": "parentCatId",
          "type": "integer",
          "isFK": true,
          "references": "Category(categoryId)"
        },
        {
          "name": "sortOrder",
          "type": "integer"
        }
      ]
    },
    "explanation": "Category rekursiv daraxt tuzilmasi loyihalandi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**Category**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
        "Siz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi."
      ],
      "tasks": [
        "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).",
        "b) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.",
        "c) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.",
        "d) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang."
      ]
    }
  },
  {
    "id": 111,
    "sector": 8,
    "difficulty": "8-Qavat • Qiyin",
    "source": "L02 Slide 38 • Bill of Materials (BOM) Recursive *:*",
    "title": "Detal va Yig'ma Qismlar Rekursiv *:* Jadvali (PartAssembly)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**PartAssembly**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table PartAssembly { parentPartNo varchar [ref: > Part.partNo] childPartNo varchar [ref: > Part.partNo] quantity int indexes { (parentPartNo, childPartNo) [pk] } }",
      "PartAssembly(parentPartNo [PK, FK], childPartNo [PK, FK], quantity)"
    ],
    "expectedSchema": {
      "tableName": "PartAssembly",
      "columns": [
        {
          "name": "parentPartNo",
          "type": "varchar(20)",
          "isPK": true,
          "isFK": true,
          "references": "Part(partNo)"
        },
        {
          "name": "childPartNo",
          "type": "varchar(20)",
          "isPK": true,
          "isFK": true,
          "references": "Part(partNo)"
        },
        {
          "name": "quantity",
          "type": "integer"
        }
      ]
    },
    "explanation": "Bill of Materials (BOM) rekursiv ko'pdan-ko'pga munosabati oraliq jadval yordamida to'liq hal qilindi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**PartAssembly**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
        "Siz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi."
      ],
      "tasks": [
        "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).",
        "b) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.",
        "c) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.",
        "d) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang."
      ]
    }
  },
  {
    "id": 112,
    "sector": 8,
    "difficulty": "8-Qavat • O'rta",
    "source": "L02 Slide 36 • University Hierarchy (Faculty -> Dept -> Course)",
    "title": "Universitet Fanlar Zanjiri (Course)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**Course**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table Course { courseCode varchar [pk] deptId int [ref: > Department.deptId] title varchar credits int }",
      "Course(courseCode [PK], deptId [FK], title, credits)"
    ],
    "expectedSchema": {
      "tableName": "Course",
      "columns": [
        {
          "name": "courseCode",
          "type": "varchar(10)",
          "isPK": true
        },
        {
          "name": "deptId",
          "type": "integer",
          "isFK": true,
          "references": "Department(deptId)"
        },
        {
          "name": "title",
          "type": "varchar(80)"
        },
        {
          "name": "credits",
          "type": "integer"
        }
      ]
    },
    "explanation": "Course jadvali kafedraga bog'langan holda loyihalandi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**Course**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
        "Siz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi."
      ],
      "tasks": [
        "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).",
        "b) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.",
        "c) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.",
        "d) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang."
      ]
    }
  },
  {
    "id": 113,
    "sector": 8,
    "difficulty": "8-Qavat • O'rta",
    "source": "L02 Slide 36 • Warehouse Shelf Slot Hierarchy",
    "title": "Ombor Tokcha Yacheykasi (ShelfSlot)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**ShelfSlot**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table ShelfSlot { slotId int [pk] aisleId int [ref: > Aisle.aisleId] slotCode varchar maxWeight decimal }",
      "ShelfSlot(slotId [PK], aisleId [FK], slotCode, maxWeight)"
    ],
    "expectedSchema": {
      "tableName": "ShelfSlot",
      "columns": [
        {
          "name": "slotId",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "aisleId",
          "type": "integer",
          "isFK": true,
          "references": "Aisle(aisleId)"
        },
        {
          "name": "slotCode",
          "type": "varchar(20)"
        },
        {
          "name": "maxWeight",
          "type": "decimal"
        }
      ]
    },
    "explanation": "ShelfSlot ombor ierarxiyasining quyi jadvali sifatida yaratildi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**ShelfSlot**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
        "Siz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi."
      ],
      "tasks": [
        "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).",
        "b) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.",
        "c) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.",
        "d) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang."
      ]
    }
  },
  {
    "id": 114,
    "sector": 8,
    "difficulty": "8-Qavat • O'rta",
    "source": "L02 Slide 38 • Course Prerequisite Recursive *:*",
    "title": "Fan Prerekviziti Rekursiv *:* Jadvali (Prerequisite)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**Prerequisite**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table Prerequisite { courseCode varchar [ref: > Course.courseCode] prereqCode varchar [ref: > Course.courseCode] indexes { (courseCode, prereqCode) [pk] } }",
      "Prerequisite(courseCode [PK, FK], prereqCode [PK, FK])"
    ],
    "expectedSchema": {
      "tableName": "Prerequisite",
      "columns": [
        {
          "name": "courseCode",
          "type": "varchar(10)",
          "isPK": true,
          "isFK": true,
          "references": "Course(courseCode)"
        },
        {
          "name": "prereqCode",
          "type": "varchar(10)",
          "isPK": true,
          "isFK": true,
          "references": "Course(courseCode)"
        }
      ]
    },
    "explanation": "Prerequisite rekursiv oraliq jadvali loyihalandi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**Prerequisite**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
        "Siz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi."
      ],
      "tasks": [
        "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).",
        "b) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.",
        "c) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.",
        "d) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang."
      ]
    }
  },
  {
    "id": 115,
    "sector": 8,
    "difficulty": "8-Qavat • O'rta",
    "source": "L02 Slide 36 • Hospital Ward Bed Multi-tier",
    "title": "Shifoxona Koyka O'rni (Bed)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**Bed**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table Bed { bedId int [pk] wardId int [ref: > Ward.wardId] bedNumber varchar isOccupied boolean }",
      "Bed(bedId [PK], wardId [FK], bedNumber, isOccupied)"
    ],
    "expectedSchema": {
      "tableName": "Bed",
      "columns": [
        {
          "name": "bedId",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "wardId",
          "type": "integer",
          "isFK": true,
          "references": "Ward(wardId)"
        },
        {
          "name": "bedNumber",
          "type": "varchar(10)"
        },
        {
          "name": "isOccupied",
          "type": "boolean"
        }
      ]
    },
    "explanation": "Bed jadvali shifoxona ierarxiyasi bilan bog'landi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**Bed**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
        "Siz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi."
      ],
      "tasks": [
        "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).",
        "b) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.",
        "c) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.",
        "d) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang."
      ]
    }
  },
  {
    "id": 116,
    "sector": 8,
    "difficulty": "8-Qavat • O'rta",
    "source": "L02 Slide 36 • Logistics Delivery Route Hierarchy",
    "title": "Logistika Yetkazish Yo'nalishi (DeliveryRoute)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**DeliveryRoute**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table DeliveryRoute { routeId int [pk] vehicleId int [ref: > FleetVehicle.vehicleId] destCity varchar distanceKm decimal }",
      "DeliveryRoute(routeId [PK], vehicleId [FK], destCity, distanceKm)"
    ],
    "expectedSchema": {
      "tableName": "DeliveryRoute",
      "columns": [
        {
          "name": "routeId",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "vehicleId",
          "type": "integer",
          "isFK": true,
          "references": "FleetVehicle(vehicleId)"
        },
        {
          "name": "destCity",
          "type": "varchar(60)"
        },
        {
          "name": "distanceKm",
          "type": "decimal"
        }
      ]
    },
    "explanation": "DeliveryRoute jadvali avtopark ierarxiyasiga ulandi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**DeliveryRoute**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
        "Siz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi."
      ],
      "tasks": [
        "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).",
        "b) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.",
        "c) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.",
        "d) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang."
      ]
    }
  },
  {
    "id": 117,
    "sector": 8,
    "difficulty": "8-Qavat • O'rta",
    "source": "L02 Slide 37 • Recursive Organization Units",
    "title": "Tashkiliy Bo'linmalar Daraxti (OrgUnit Tree)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**OrgUnit**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table OrgUnit { unitId int [pk] unitName varchar parentUnitId int [ref: > OrgUnit.unitId] headTitle varchar }",
      "OrgUnit(unitId [PK], unitName, parentUnitId [FK], headTitle)"
    ],
    "expectedSchema": {
      "tableName": "OrgUnit",
      "columns": [
        {
          "name": "unitId",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "unitName",
          "type": "varchar(80)"
        },
        {
          "name": "parentUnitId",
          "type": "integer",
          "isFK": true,
          "references": "OrgUnit(unitId)"
        },
        {
          "name": "headTitle",
          "type": "varchar(60)"
        }
      ]
    },
    "explanation": "OrgUnit daraxt strukturasi rekursiv kalit bilan chizildi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**OrgUnit**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
        "Siz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi."
      ],
      "tasks": [
        "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).",
        "b) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.",
        "c) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.",
        "d) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang."
      ]
    }
  },
  {
    "id": 118,
    "sector": 8,
    "difficulty": "8-Qavat • O'rta",
    "source": "L02 Slide 36 • Publishing Multi-tier Book Volume",
    "title": "Nashriyot Kitob Jildi (BookVolume)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**BookVolume**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table BookVolume { volumeId int [pk] seriesId int [ref: > BookSeries.seriesId] volumeNumber int isbn varchar [unique] }",
      "BookVolume(volumeId [PK], seriesId [FK], volumeNumber, isbn [UQ])"
    ],
    "expectedSchema": {
      "tableName": "BookVolume",
      "columns": [
        {
          "name": "volumeId",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "seriesId",
          "type": "integer",
          "isFK": true,
          "references": "BookSeries(seriesId)"
        },
        {
          "name": "volumeNumber",
          "type": "integer"
        },
        {
          "name": "isbn",
          "type": "varchar(20)",
          "isUQ": true
        }
      ]
    },
    "explanation": "BookVolume ko'p bosqichli nashriyot tizimiga ulandi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**BookVolume**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
        "Siz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi."
      ],
      "tasks": [
        "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).",
        "b) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.",
        "c) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.",
        "d) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang."
      ]
    }
  },
  {
    "id": 119,
    "sector": 8,
    "difficulty": "8-Qavat • O'rta",
    "source": "L02 Slide 36 • Vendor Contract Purchase Order",
    "title": "Xarid Buyurtmasi Zanjiri (PurchaseOrder)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**PurchaseOrder**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table PurchaseOrder { orderId int [pk] contractId int [ref: > VendorContract.contractId] orderDate date totalAmount decimal }",
      "PurchaseOrder(orderId [PK], contractId [FK], orderDate, totalAmount)"
    ],
    "expectedSchema": {
      "tableName": "PurchaseOrder",
      "columns": [
        {
          "name": "orderId",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "contractId",
          "type": "integer",
          "isFK": true,
          "references": "VendorContract(contractId)"
        },
        {
          "name": "orderDate",
          "type": "date"
        },
        {
          "name": "totalAmount",
          "type": "decimal"
        }
      ]
    },
    "explanation": "PurchaseOrder jadvali shartnoma zanjiriga ulandi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**PurchaseOrder**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
        "Siz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi."
      ],
      "tasks": [
        "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).",
        "b) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.",
        "c) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.",
        "d) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang."
      ]
    }
  },
  {
    "id": 120,
    "sector": 8,
    "difficulty": "8-Qavat • Qiyin (8-Qavat Bossi)",
    "source": "L02 Slide 36 & Slide 37 • Multi-tier + Recursive Staff Boss",
    "title": "8-Qavat Bossi: Bo'lim va Mentorli Xodim Sxemasi",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nMazkur vazifada ixtisoslashuv / umumlashtirish (Subclass / Superclass) yoki kompozit tuzilmalar keltirilgan. Tutorial 2 Task 2 dagi Option 8A, 8B, 8C yoki 8D usullaridan tegishli shartlar asosida to'g'ri relyatsion jadvallar to'plamini shakllantirish talab etiladi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table Department { deptId int [pk] dName varchar } Table Staff { staffId int [pk] deptId int [ref: > Department.deptId] mentorId int [ref: > Staff.staffId] fullName varchar }",
      "Department(deptId [PK], dName)\nStaff(staffId [PK], deptId [FK], mentorId [FK], fullName)"
    ],
    "expectedSchema": {
      "tables": [
        {
          "tableName": "Department",
          "columns": [
            {
              "name": "deptId",
              "type": "integer",
              "isPK": true
            },
            {
              "name": "dName",
              "type": "varchar(50)"
            }
          ]
        },
        {
          "tableName": "Staff",
          "columns": [
            {
              "name": "staffId",
              "type": "integer",
              "isPK": true
            },
            {
              "name": "deptId",
              "type": "integer",
              "isFK": true,
              "references": "Department(deptId)"
            },
            {
              "name": "mentorId",
              "type": "integer",
              "isFK": true,
              "references": "Staff(staffId)"
            },
            {
              "name": "fullName",
              "type": "varchar(60)"
            }
          ]
        }
      ]
    },
    "explanation": "8-Qavat Bossi: Bo'lim va rekursiv ustozlik (mentorId) tizimi to'liq relying arxitekturaga o'tkazildi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Mazkur vazifada ixtisoslashuv / umumlashtirish (Subclass / Superclass) yoki kompozit tuzilmalar keltirilgan. Tutorial 2 Task 2 dagi Option 8A, 8B, 8C yoki 8D usullaridan tegishli shartlar asosida to'g'ri relyatsion jadvallar to'plamini shakllantirish talab etiladi.",
        "Siz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi."
      ],
      "tasks": [
        "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).",
        "b) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.",
        "c) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.",
        "d) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang."
      ]
    }
  },
  {
    "id": 121,
    "sector": 9,
    "difficulty": "9-Qavat • Boshlang'ich",
    "source": "L02 Slide 42 • Step 7: Pure Ternary (*:*:*)",
    "title": "Klassik Ternary O'qitish Jadvali (Teaches)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**Teaches**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table Teaches { courseCode varchar [ref: > Course.courseCode] instId int [ref: > Instructor.instId] semCode varchar [ref: > Semester.semCode] roomNo varchar indexes { (courseCode, instId, semCode) [pk] } }",
      "Teaches(courseCode [PK, FK], instId [PK, FK], semCode [PK, FK], roomNo)"
    ],
    "expectedSchema": {
      "tableName": "Teaches",
      "columns": [
        {
          "name": "courseCode",
          "type": "varchar(10)",
          "isPK": true,
          "isFK": true,
          "references": "Course(courseCode)"
        },
        {
          "name": "instId",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Instructor(instId)"
        },
        {
          "name": "semCode",
          "type": "varchar(10)",
          "isPK": true,
          "isFK": true,
          "references": "Semester(semCode)"
        },
        {
          "name": "roomNo",
          "type": "varchar(20)"
        }
      ]
    },
    "explanation": "Step 7 ga binoan *:*:* ternary munosabatda uchala ota kalit birlashib kompozit PK hosil qiladi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**Teaches**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
        "Siz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi."
      ],
      "tasks": [
        "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).",
        "b) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.",
        "c) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.",
        "d) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang."
      ]
    }
  },
  {
    "id": 122,
    "sector": 9,
    "difficulty": "9-Qavat • O'rta",
    "source": "L02 Slide 42 • Step 7 Oltin Qoidasi (1..1 Kardinallik Cheklovi)",
    "title": "Ternary Oltin Qoidasi: 1..1 Cheklovli O'qitish (Teaches)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**Teaches**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table Teaches { courseCode varchar [ref: > Course.courseCode] semCode varchar [ref: > Semester.semCode] instId int [ref: > Instructor.instId] roomNo varchar indexes { (courseCode, semCode) [pk] } }",
      "Teaches(courseCode [PK, FK], semCode [PK, FK], instId [FK], roomNo)"
    ],
    "expectedSchema": {
      "tableName": "Teaches",
      "columns": [
        {
          "name": "courseCode",
          "type": "varchar(10)",
          "isPK": true,
          "isFK": true,
          "references": "Course(courseCode)"
        },
        {
          "name": "semCode",
          "type": "varchar(10)",
          "isPK": true,
          "isFK": true,
          "references": "Semester(semCode)"
        },
        {
          "name": "instId",
          "type": "integer",
          "isPK": false,
          "isFK": true,
          "references": "Instructor(instId)"
        },
        {
          "name": "roomNo",
          "type": "varchar(20)"
        }
      ]
    },
    "explanation": "Step 7 Oltin Qoidasi: 1..1 qatnashchi kaliti PK dan chiqariladi, aks holda bitta kurs-semestrga 2 ta o'qituvchi yozilib qolishi mumkin edi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**Teaches**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
        "Siz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi."
      ],
      "tasks": [
        "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).",
        "b) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.",
        "c) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.",
        "d) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang."
      ]
    }
  },
  {
    "id": 123,
    "sector": 9,
    "difficulty": "9-Qavat • O'rta",
    "source": "L02 Slide 42 • Doctor Consultation Ternary",
    "title": "Tibbiy Konsultatsiya Ternary Jadvali (Consultation)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**Consultation**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table Consultation { doctorId int [ref: > Doctor.doctorId] patientId int [ref: > Patient.patientId] clinicId int [ref: > Clinic.clinicId] consultDate timestamp indexes { (doctorId, patientId, clinicId) [pk] } }",
      "Consultation(doctorId [PK, FK], patientId [PK, FK], clinicId [PK, FK], consultDate)"
    ],
    "expectedSchema": {
      "tableName": "Consultation",
      "columns": [
        {
          "name": "doctorId",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Doctor(doctorId)"
        },
        {
          "name": "patientId",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Patient(patientId)"
        },
        {
          "name": "clinicId",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Clinic(clinicId)"
        },
        {
          "name": "consultDate",
          "type": "timestamp"
        }
      ]
    },
    "explanation": "Consultation 3 tomonlama aloqa jadvali muvaffaqiyatli tuzildi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**Consultation**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
        "Siz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi."
      ],
      "tasks": [
        "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).",
        "b) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.",
        "c) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.",
        "d) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang."
      ]
    }
  },
  {
    "id": 124,
    "sector": 9,
    "difficulty": "9-Qavat • O'rta",
    "source": "L02 Slide 42 • Supplier Part Project Pure Ternary",
    "title": "Ta'minotchi, Detal va Loyiha Ternary Jadvali (SupplyProject)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**SupplyProject**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table SupplyProject { suppId varchar [ref: > Supplier.suppId] partNo varchar [ref: > Part.partNo] projNo int [ref: > Project.projNo] quantity int indexes { (suppId, partNo, projNo) [pk] } }",
      "SupplyProject(suppId [PK, FK], partNo [PK, FK], projNo [PK, FK], quantity)"
    ],
    "expectedSchema": {
      "tableName": "SupplyProject",
      "columns": [
        {
          "name": "suppId",
          "type": "varchar(10)",
          "isPK": true,
          "isFK": true,
          "references": "Supplier(suppId)"
        },
        {
          "name": "partNo",
          "type": "varchar(20)",
          "isPK": true,
          "isFK": true,
          "references": "Part(partNo)"
        },
        {
          "name": "projNo",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Project(projNo)"
        },
        {
          "name": "quantity",
          "type": "integer"
        }
      ]
    },
    "explanation": "SupplyProject klassik 3 talik relying oraliq jadvali loyihalandi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**SupplyProject**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
        "Siz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi."
      ],
      "tasks": [
        "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).",
        "b) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.",
        "c) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.",
        "d) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang."
      ]
    }
  },
  {
    "id": 125,
    "sector": 9,
    "difficulty": "9-Qavat • Qiyin",
    "source": "L02 Slide 42 • Step 7: 1..1 on Project Constraint",
    "title": "1..1 Loyiha Cheklovli Ta'minot Ternary (SupplyProject)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**SupplyProject**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table SupplyProject { suppId varchar [ref: > Supplier.suppId] partNo varchar [ref: > Part.partNo] projNo int [ref: > Project.projNo] quantity int indexes { (suppId, partNo) [pk] } }",
      "SupplyProject(suppId [PK, FK], partNo [PK, FK], projNo [FK], quantity)"
    ],
    "expectedSchema": {
      "tableName": "SupplyProject",
      "columns": [
        {
          "name": "suppId",
          "type": "varchar(10)",
          "isPK": true,
          "isFK": true,
          "references": "Supplier(suppId)"
        },
        {
          "name": "partNo",
          "type": "varchar(20)",
          "isPK": true,
          "isFK": true,
          "references": "Part(partNo)"
        },
        {
          "name": "projNo",
          "type": "integer",
          "isPK": false,
          "isFK": true,
          "references": "Project(projNo)"
        },
        {
          "name": "quantity",
          "type": "integer"
        }
      ]
    },
    "explanation": "Step 7 qoidasi: Project 1..1 bo'lgani uchun projNo PK dan chiqarilib, oddiy FK qilib saqlanadi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**SupplyProject**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
        "Siz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi."
      ],
      "tasks": [
        "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).",
        "b) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.",
        "c) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.",
        "d) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang."
      ]
    }
  },
  {
    "id": 126,
    "sector": 9,
    "difficulty": "9-Qavat • O'rta",
    "source": "L02 Slide 42 • Festival Concert Ternary",
    "title": "Festival Konserti Ternary Jadvali (Concert)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**Concert**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table Concert { artistId int [ref: > Artist.artistId] stageId int [ref: > Stage.stageId] dayId int [ref: > FestDay.dayId] performanceTime time indexes { (artistId, stageId, dayId) [pk] } }",
      "Concert(artistId [PK, FK], stageId [PK, FK], dayId [PK, FK], performanceTime)"
    ],
    "expectedSchema": {
      "tableName": "Concert",
      "columns": [
        {
          "name": "artistId",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Artist(artistId)"
        },
        {
          "name": "stageId",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Stage(stageId)"
        },
        {
          "name": "dayId",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "FestDay(dayId)"
        },
        {
          "name": "performanceTime",
          "type": "time"
        }
      ]
    },
    "explanation": "Concert ternary jadvali to'g'ri loyihalandi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**Concert**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
        "Siz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi."
      ],
      "tasks": [
        "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).",
        "b) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.",
        "c) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.",
        "d) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang."
      ]
    }
  },
  {
    "id": 127,
    "sector": 9,
    "difficulty": "9-Qavat • O'rta",
    "source": "L02 Slide 42 • Flight Crew Ternary",
    "title": "Aviareys Ekipaj Tayinlash Ternary Jadvali (FlightDuty)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**FlightDuty**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table FlightDuty { flightNo varchar [ref: > Flight.flightNo] tailNo varchar [ref: > Aircraft.tailNo] groupId int [ref: > CrewGroup.groupId] dutyDate date indexes { (flightNo, tailNo, groupId) [pk] } }",
      "FlightDuty(flightNo [PK, FK], tailNo [PK, FK], groupId [PK, FK], dutyDate)"
    ],
    "expectedSchema": {
      "tableName": "FlightDuty",
      "columns": [
        {
          "name": "flightNo",
          "type": "varchar(10)",
          "isPK": true,
          "isFK": true,
          "references": "Flight(flightNo)"
        },
        {
          "name": "tailNo",
          "type": "varchar(15)",
          "isPK": true,
          "isFK": true,
          "references": "Aircraft(tailNo)"
        },
        {
          "name": "groupId",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "CrewGroup(groupId)"
        },
        {
          "name": "dutyDate",
          "type": "date"
        }
      ]
    },
    "explanation": "FlightDuty 3 tomonlama navbatchilik sxemasi yaratildi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**FlightDuty**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
        "Siz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi."
      ],
      "tasks": [
        "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).",
        "b) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.",
        "c) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.",
        "d) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang."
      ]
    }
  },
  {
    "id": 128,
    "sector": 9,
    "difficulty": "9-Qavat • O'rta",
    "source": "L02 Slide 42 • Hotel Room Guest Booking Ternary",
    "title": "Mehmonxona Xona Band Qilish Ternary (RoomBooking)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**RoomBooking**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table RoomBooking { hotelId int [ref: > Hotel.hotelId] roomNo int [ref: > Room.roomNo] guestId int [ref: > Guest.guestId] checkInDate date totalPaid decimal indexes { (hotelId, roomNo, guestId) [pk] } }",
      "RoomBooking(hotelId [PK, FK], roomNo [PK, FK], guestId [PK, FK], checkInDate, totalPaid)"
    ],
    "expectedSchema": {
      "tableName": "RoomBooking",
      "columns": [
        {
          "name": "hotelId",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Hotel(hotelId)"
        },
        {
          "name": "roomNo",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Room(roomNo)"
        },
        {
          "name": "guestId",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Guest(guestId)"
        },
        {
          "name": "checkInDate",
          "type": "date"
        },
        {
          "name": "totalPaid",
          "type": "decimal"
        }
      ]
    },
    "explanation": "RoomBooking ternary jadvali loyihalandi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**RoomBooking**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
        "Siz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi."
      ],
      "tasks": [
        "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).",
        "b) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.",
        "c) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.",
        "d) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang."
      ]
    }
  },
  {
    "id": 129,
    "sector": 9,
    "difficulty": "9-Qavat • O'rta",
    "source": "L02 Slide 42 • Car Rental Branch Ternary",
    "title": "Avtomobil Ijara Shartnomasi Ternary (CarRentalContract)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**CarRentalContract**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table CarRentalContract { vin varchar [ref: > Vehicle.vin] custId int [ref: > Customer.custId] branchId int [ref: > Branch.branchId] startDate date indexes { (vin, custId, branchId) [pk] } }",
      "CarRentalContract(vin [PK, FK], custId [PK, FK], branchId [PK, FK], startDate)"
    ],
    "expectedSchema": {
      "tableName": "CarRentalContract",
      "columns": [
        {
          "name": "vin",
          "type": "varchar(20)",
          "isPK": true,
          "isFK": true,
          "references": "Vehicle(vin)"
        },
        {
          "name": "custId",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Customer(custId)"
        },
        {
          "name": "branchId",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Branch(branchId)"
        },
        {
          "name": "startDate",
          "type": "date"
        }
      ]
    },
    "explanation": "CarRentalContract ternary munosabat jadvali loyihalandi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**CarRentalContract**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
        "Siz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi."
      ],
      "tasks": [
        "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).",
        "b) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.",
        "c) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.",
        "d) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang."
      ]
    }
  },
  {
    "id": 130,
    "sector": 9,
    "difficulty": "9-Qavat • O'rta",
    "source": "L02 Slide 42 • Sports League Fixture Ternary",
    "title": "Futbol Uchrashuvi Ternary Jadvali (MatchFixture)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**MatchFixture**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table MatchFixture { homeTeamId int [ref: > Team.teamId] awayTeamId int [ref: > Team.teamId] stadiumId int [ref: > Stadium.stadiumId] matchDate date indexes { (homeTeamId, awayTeamId, stadiumId) [pk] } }",
      "MatchFixture(homeTeamId [PK, FK], awayTeamId [PK, FK], stadiumId [PK, FK], matchDate)"
    ],
    "expectedSchema": {
      "tableName": "MatchFixture",
      "columns": [
        {
          "name": "homeTeamId",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Team(teamId)"
        },
        {
          "name": "awayTeamId",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Team(teamId)"
        },
        {
          "name": "stadiumId",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Stadium(stadiumId)"
        },
        {
          "name": "matchDate",
          "type": "date"
        }
      ]
    },
    "explanation": "MatchFixture sport ligasi ternary jadvali chizildi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**MatchFixture**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
        "Siz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi."
      ],
      "tasks": [
        "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).",
        "b) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.",
        "c) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.",
        "d) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang."
      ]
    }
  },
  {
    "id": 131,
    "sector": 9,
    "difficulty": "9-Qavat • Qiyin",
    "source": "L02 Slide 42 • Step 7: 1..1 Pallet Placement",
    "title": "1..1 Poddon Joylashuv Cheklovi Ternary (PalletPlacement)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**PalletPlacement**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table PalletPlacement { palletId int [pk, ref: > Pallet.palletId] whId int [ref: > Warehouse.whId] zoneId int [ref: > Zone.zoneId] placedDate timestamp }",
      "PalletPlacement(palletId [PK, FK], whId [FK], zoneId [FK], placedDate)"
    ],
    "expectedSchema": {
      "tableName": "PalletPlacement",
      "columns": [
        {
          "name": "palletId",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Pallet(palletId)"
        },
        {
          "name": "whId",
          "type": "integer",
          "isPK": false,
          "isFK": true,
          "references": "Warehouse(whId)"
        },
        {
          "name": "zoneId",
          "type": "integer",
          "isPK": false,
          "isFK": true,
          "references": "Zone(zoneId)"
        },
        {
          "name": "placedDate",
          "type": "timestamp"
        }
      ]
    },
    "explanation": "Step 7 Oltin Qoidasi: Poddon faqat 1 ta joyda tura olganligi uchun uning o'zi yagona PK bo'ladi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**PalletPlacement**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
        "Siz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi."
      ],
      "tasks": [
        "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).",
        "b) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.",
        "c) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.",
        "d) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang."
      ]
    }
  },
  {
    "id": 132,
    "sector": 9,
    "difficulty": "9-Qavat • O'rta",
    "source": "L02 Slide 42 • Exam Grading Ternary",
    "title": "Imtihon Baholash Ternary Jadvali (ExamGrading)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**ExamGrading**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table ExamGrading { studentId int [ref: > Student.studentId] paperId int [ref: > ExamPaper.paperId] examinerId int [ref: > Examiner.examinerId] score decimal indexes { (studentId, paperId, examinerId) [pk] } }",
      "ExamGrading(studentId [PK, FK], paperId [PK, FK], examinerId [PK, FK], score)"
    ],
    "expectedSchema": {
      "tableName": "ExamGrading",
      "columns": [
        {
          "name": "studentId",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Student(studentId)"
        },
        {
          "name": "paperId",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "ExamPaper(paperId)"
        },
        {
          "name": "examinerId",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Examiner(examinerId)"
        },
        {
          "name": "score",
          "type": "decimal"
        }
      ]
    },
    "explanation": "ExamGrading ternary munosabat jadvali tuzildi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**ExamGrading**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
        "Siz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi."
      ],
      "tasks": [
        "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).",
        "b) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.",
        "c) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.",
        "d) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang."
      ]
    }
  },
  {
    "id": 133,
    "sector": 9,
    "difficulty": "9-Qavat • O'rta",
    "source": "L02 Slide 42 • Contractor Task Ternary with Attributes",
    "title": "Pudratchi Vazifa Tayinlash Ternary (TaskContract)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**TaskContract**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table TaskContract { clientId int [ref: > Client.clientId] contractorId int [ref: > Contractor.contractorId] taskId int [ref: > ProjectTask.taskId] hourlyRate decimal plannedHours int indexes { (clientId, contractorId, taskId) [pk] } }",
      "TaskContract(clientId [PK, FK], contractorId [PK, FK], taskId [PK, FK], hourlyRate, plannedHours)"
    ],
    "expectedSchema": {
      "tableName": "TaskContract",
      "columns": [
        {
          "name": "clientId",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Client(clientId)"
        },
        {
          "name": "contractorId",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Contractor(contractorId)"
        },
        {
          "name": "taskId",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "ProjectTask(taskId)"
        },
        {
          "name": "hourlyRate",
          "type": "decimal"
        },
        {
          "name": "plannedHours",
          "type": "integer"
        }
      ]
    },
    "explanation": "TaskContract ternary jadvali barcha atributlari bilan chizildi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**TaskContract**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
        "Siz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi."
      ],
      "tasks": [
        "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).",
        "b) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.",
        "c) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.",
        "d) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang."
      ]
    }
  },
  {
    "id": 134,
    "sector": 9,
    "difficulty": "9-Qavat • Qiyin",
    "source": "L02 Slide 42 • Step 7: Equipment Deployment 1..1",
    "title": "1..1 Uskuna Joylashuv Cheklovi Ternary (EquipmentDeploy)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**EquipmentDeploy**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table EquipmentDeploy { equipId int [pk, ref: > Equipment.equipId] siteId int [ref: > Site.siteId] engId int [ref: > Engineer.engId] deployDate date }",
      "EquipmentDeploy(equipId [PK, FK], siteId [FK], engId [FK], deployDate)"
    ],
    "expectedSchema": {
      "tableName": "EquipmentDeploy",
      "columns": [
        {
          "name": "equipId",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Equipment(equipId)"
        },
        {
          "name": "siteId",
          "type": "integer",
          "isPK": false,
          "isFK": true,
          "references": "Site(siteId)"
        },
        {
          "name": "engId",
          "type": "integer",
          "isPK": false,
          "isFK": true,
          "references": "Engineer(engId)"
        },
        {
          "name": "deployDate",
          "type": "date"
        }
      ]
    },
    "explanation": "Step 7 oltin qoidasi muvaffaqiyatli qo'llandi: equipId yagona PK bo'ldi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**EquipmentDeploy**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
        "Siz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi."
      ],
      "tasks": [
        "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).",
        "b) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.",
        "c) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.",
        "d) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang."
      ]
    }
  },
  {
    "id": 135,
    "sector": 9,
    "difficulty": "9-Qavat • Qiyin (9-Qavat Bossi)",
    "source": "L02 Slide 42 & T02 • Master Step 7 Course Offering Boss",
    "title": "9-Qavat Bossi: Semestrda Dars O'tish Taklifi (CourseOffering)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**CourseOffering**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table CourseOffering { courseCode varchar [ref: > Course.courseCode] semCode varchar [ref: > Semester.semCode] instId int [ref: > Instructor.instId] roomNo varchar capacity int indexes { (courseCode, semCode) [pk] } }",
      "CourseOffering(courseCode [PK, FK], semCode [PK, FK], instId [FK], roomNo, capacity)"
    ],
    "expectedSchema": {
      "tableName": "CourseOffering",
      "columns": [
        {
          "name": "courseCode",
          "type": "varchar(10)",
          "isPK": true,
          "isFK": true,
          "references": "Course(courseCode)"
        },
        {
          "name": "semCode",
          "type": "varchar(10)",
          "isPK": true,
          "isFK": true,
          "references": "Semester(semCode)"
        },
        {
          "name": "instId",
          "type": "integer",
          "isPK": false,
          "isFK": true,
          "references": "Instructor(instId)"
        },
        {
          "name": "roomNo",
          "type": "varchar(20)"
        },
        {
          "name": "capacity",
          "type": "integer"
        }
      ]
    },
    "explanation": "9-Qavat Bossi: Step 7 oltin qoidasi mukammal bajarildi: instId PK dan chiqarilib, faqat (courseCode, semCode) kompozit PK bo'ldi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**CourseOffering**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
        "Siz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi."
      ],
      "tasks": [
        "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).",
        "b) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.",
        "c) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.",
        "d) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang."
      ]
    }
  },
  {
    "id": 136,
    "sector": 10,
    "difficulty": "10-Qavat • Boshlang'ich",
    "source": "L02 Slide 43 • Step 8 Option 8A (Superclass + Subclasses)",
    "title": "Option 8A: Rahbar Subklassi (Manager Subclass)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nMazkur vazifada ixtisoslashuv / umumlashtirish (Subclass / Superclass) yoki kompozit tuzilmalar keltirilgan. Tutorial 2 Task 2 dagi Option 8A, 8B, 8C yoki 8D usullaridan tegishli shartlar asosida to'g'ri relyatsion jadvallar to'plamini shakllantirish talab etiladi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table Employee { empNo int [pk] name varchar jobType varchar } Table Manager { empNo int [pk, ref: > Employee.empNo] bonus decimal }",
      "Employee(empNo [PK], name, jobType)\nManager(empNo [PK, FK], bonus)"
    ],
    "expectedSchema": {
      "tables": [
        {
          "tableName": "Employee",
          "columns": [
            {
              "name": "empNo",
              "type": "integer",
              "isPK": true
            },
            {
              "name": "name",
              "type": "varchar(60)"
            },
            {
              "name": "jobType",
              "type": "varchar(20)"
            }
          ]
        },
        {
          "tableName": "Manager",
          "columns": [
            {
              "name": "empNo",
              "type": "integer",
              "isPK": true,
              "isFK": true,
              "references": "Employee(empNo)"
            },
            {
              "name": "bonus",
              "type": "decimal"
            }
          ]
        }
      ]
    },
    "explanation": "Option 8A: Superklass va subklass alohida jadvallar bo'lib, ota PK subklassda [PK, FK] bo'lib xizmat qiladi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Mazkur vazifada ixtisoslashuv / umumlashtirish (Subclass / Superclass) yoki kompozit tuzilmalar keltirilgan. Tutorial 2 Task 2 dagi Option 8A, 8B, 8C yoki 8D usullaridan tegishli shartlar asosida to'g'ri relyatsion jadvallar to'plamini shakllantirish talab etiladi.",
        "Siz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi."
      ],
      "tasks": [
        "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).",
        "b) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.",
        "c) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.",
        "d) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang."
      ]
    }
  },
  {
    "id": 137,
    "sector": 10,
    "difficulty": "10-Qavat • O'rta",
    "source": "L02 Slide 43 • Option 8A SalesPerson Subclass",
    "title": "Option 8A: Sotuvchi Subklassi (SalesPerson)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**SalesPerson**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table SalesPerson { empNo int [pk, ref: > Employee.empNo] commissionRate decimal salesTarget decimal }",
      "SalesPerson(empNo [PK, FK], commissionRate, salesTarget)"
    ],
    "expectedSchema": {
      "tableName": "SalesPerson",
      "columns": [
        {
          "name": "empNo",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Employee(empNo)"
        },
        {
          "name": "commissionRate",
          "type": "decimal"
        },
        {
          "name": "salesTarget",
          "type": "decimal"
        }
      ]
    },
    "explanation": "SalesPerson subklassi Option 8A me'morchiligi asosida loyihalandi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**SalesPerson**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
        "Siz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi."
      ],
      "tasks": [
        "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).",
        "b) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.",
        "c) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.",
        "d) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang."
      ]
    }
  },
  {
    "id": 138,
    "sector": 10,
    "difficulty": "10-Qavat • O'rta",
    "source": "L02 Slide 43 • Option 8A Engineer Subclass",
    "title": "Option 8A: Muhandis Subklassi (Engineer)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**Engineer**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table Engineer { empNo int [pk, ref: > Employee.empNo] specialty varchar licenseNo varchar }",
      "Engineer(empNo [PK, FK], specialty, licenseNo)"
    ],
    "expectedSchema": {
      "tableName": "Engineer",
      "columns": [
        {
          "name": "empNo",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Employee(empNo)"
        },
        {
          "name": "specialty",
          "type": "varchar(50)"
        },
        {
          "name": "licenseNo",
          "type": "varchar(30)"
        }
      ]
    },
    "explanation": "Engineer subklass relatsiyasi tuzildi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**Engineer**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
        "Siz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi."
      ],
      "tasks": [
        "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).",
        "b) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.",
        "c) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.",
        "d) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang."
      ]
    }
  },
  {
    "id": 139,
    "sector": 10,
    "difficulty": "10-Qavat • O'rta",
    "source": "L02 Slide 43 • Option 8A Secretary Subclass",
    "title": "Option 8A: Kotiba Subklassi (Secretary)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**Secretary**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table Secretary { empNo int [pk, ref: > Employee.empNo] typingSpeed int }",
      "Secretary(empNo [PK, FK], typingSpeed)"
    ],
    "expectedSchema": {
      "tableName": "Secretary",
      "columns": [
        {
          "name": "empNo",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Employee(empNo)"
        },
        {
          "name": "typingSpeed",
          "type": "integer"
        }
      ]
    },
    "explanation": "Secretary subklass jadvali yaratildi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**Secretary**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
        "Siz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi."
      ],
      "tasks": [
        "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).",
        "b) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.",
        "c) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.",
        "d) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang."
      ]
    }
  },
  {
    "id": 140,
    "sector": 10,
    "difficulty": "10-Qavat • O'rta",
    "source": "L02 Slide 44 • Option 8B (Subclasses Only)",
    "title": "Option 8B: Faqat Subklasslar (Hourly & Salaried Employee)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nMazkur vazifada ixtisoslashuv / umumlashtirish (Subclass / Superclass) yoki kompozit tuzilmalar keltirilgan. Tutorial 2 Task 2 dagi Option 8A, 8B, 8C yoki 8D usullaridan tegishli shartlar asosida to'g'ri relyatsion jadvallar to'plamini shakllantirish talab etiladi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table HourlyEmp { empNo int [pk] name varchar hourlyRate decimal } Table SalariedEmp { empNo int [pk] name varchar annualSalary decimal }",
      "HourlyEmp(empNo [PK], name, hourlyRate)\nSalariedEmp(empNo [PK], name, annualSalary)"
    ],
    "expectedSchema": {
      "tables": [
        {
          "tableName": "HourlyEmp",
          "columns": [
            {
              "name": "empNo",
              "type": "integer",
              "isPK": true
            },
            {
              "name": "name",
              "type": "varchar(60)"
            },
            {
              "name": "hourlyRate",
              "type": "decimal"
            }
          ]
        },
        {
          "tableName": "SalariedEmp",
          "columns": [
            {
              "name": "empNo",
              "type": "integer",
              "isPK": true
            },
            {
              "name": "name",
              "type": "varchar(60)"
            },
            {
              "name": "annualSalary",
              "type": "decimal"
            }
          ]
        }
      ]
    },
    "explanation": "Option 8B: Umumiy ota jadvalsiz, to'liq ajratilgan subklasslar relying arxitekturasi qurildi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Mazkur vazifada ixtisoslashuv / umumlashtirish (Subclass / Superclass) yoki kompozit tuzilmalar keltirilgan. Tutorial 2 Task 2 dagi Option 8A, 8B, 8C yoki 8D usullaridan tegishli shartlar asosida to'g'ri relyatsion jadvallar to'plamini shakllantirish talab etiladi.",
        "Siz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi."
      ],
      "tasks": [
        "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).",
        "b) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.",
        "c) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.",
        "d) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang."
      ]
    }
  },
  {
    "id": 141,
    "sector": 10,
    "difficulty": "10-Qavat • O'rta",
    "source": "L02 Slide 44 • Option 8B Vehicle Specialization",
    "title": "Option 8B: Avtomobil va Yuk Mashinasi Subklasslari",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nMazkur vazifada ixtisoslashuv / umumlashtirish (Subclass / Superclass) yoki kompozit tuzilmalar keltirilgan. Tutorial 2 Task 2 dagi Option 8A, 8B, 8C yoki 8D usullaridan tegishli shartlar asosida to'g'ri relyatsion jadvallar to'plamini shakllantirish talab etiladi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table Car { vin varchar [pk] make varchar model varchar trunkLitres int } Table Truck { vin varchar [pk] make varchar model varchar cargoTonnage decimal }",
      "Car(vin [PK], make, model, trunkLitres)\nTruck(vin [PK], make, model, cargoTonnage)"
    ],
    "expectedSchema": {
      "tables": [
        {
          "tableName": "Car",
          "columns": [
            {
              "name": "vin",
              "type": "varchar(20)",
              "isPK": true
            },
            {
              "name": "make",
              "type": "varchar(40)"
            },
            {
              "name": "model",
              "type": "varchar(40)"
            },
            {
              "name": "trunkLitres",
              "type": "integer"
            }
          ]
        },
        {
          "tableName": "Truck",
          "columns": [
            {
              "name": "vin",
              "type": "varchar(20)",
              "isPK": true
            },
            {
              "name": "make",
              "type": "varchar(40)"
            },
            {
              "name": "model",
              "type": "varchar(40)"
            },
            {
              "name": "cargoTonnage",
              "type": "decimal"
            }
          ]
        }
      ]
    },
    "explanation": "Option 8B transport vositalari modeli muvaffaqiyatli tuzildi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Mazkur vazifada ixtisoslashuv / umumlashtirish (Subclass / Superclass) yoki kompozit tuzilmalar keltirilgan. Tutorial 2 Task 2 dagi Option 8A, 8B, 8C yoki 8D usullaridan tegishli shartlar asosida to'g'ri relyatsion jadvallar to'plamini shakllantirish talab etiladi.",
        "Siz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi."
      ],
      "tasks": [
        "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).",
        "b) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.",
        "c) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.",
        "d) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang."
      ]
    }
  },
  {
    "id": 142,
    "sector": 10,
    "difficulty": "10-Qavat • O'rta",
    "source": "L02 Slide 45 • Option 8C (Single Relation with Type Discriminator)",
    "title": "Option 8C: Yagona Birlashgan Jadval va Diskriminator Ustuni",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**Vehicle**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table Vehicle { vin varchar [pk] make varchar model varchar vehicleType varchar trunkLitres int cargoTonnage decimal }",
      "Vehicle(vin [PK], make, model, vehicleType, trunkLitres, cargoTonnage)"
    ],
    "expectedSchema": {
      "tableName": "Vehicle",
      "columns": [
        {
          "name": "vin",
          "type": "varchar(20)",
          "isPK": true
        },
        {
          "name": "make",
          "type": "varchar(40)"
        },
        {
          "name": "model",
          "type": "varchar(40)"
        },
        {
          "name": "vehicleType",
          "type": "varchar(20)"
        },
        {
          "name": "trunkLitres",
          "type": "integer"
        },
        {
          "name": "cargoTonnage",
          "type": "decimal"
        }
      ]
    },
    "explanation": "Option 8C: Barcha subklasslar vehicleType diskriminatori bilan yagona relyatsion jadvalga birlashtirildi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**Vehicle**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
        "Siz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi."
      ],
      "tasks": [
        "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).",
        "b) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.",
        "c) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.",
        "d) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang."
      ]
    }
  },
  {
    "id": 143,
    "sector": 10,
    "difficulty": "10-Qavat • O'rta",
    "source": "L02 Slide 46 • Option 8D (Overlapping with Boolean Flags)",
    "title": "Option 8D: Kesishevchi Subklasslar va Mantiqiy Bayroqlar (Part)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**Part**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table Part { partNo varchar [pk] partName varchar isManufactured boolean drawingNo varchar isPurchased boolean supplierCost decimal }",
      "Part(partNo [PK], partName, isManufactured, drawingNo, isPurchased, supplierCost)"
    ],
    "expectedSchema": {
      "tableName": "Part",
      "columns": [
        {
          "name": "partNo",
          "type": "varchar(20)",
          "isPK": true
        },
        {
          "name": "partName",
          "type": "varchar(60)"
        },
        {
          "name": "isManufactured",
          "type": "boolean"
        },
        {
          "name": "drawingNo",
          "type": "varchar(30)"
        },
        {
          "name": "isPurchased",
          "type": "boolean"
        },
        {
          "name": "supplierCost",
          "type": "decimal"
        }
      ]
    },
    "explanation": "Option 8D: Kesishevchi (overlapping) subklasslar boolean bayroqlar orqali yagona jadvalda hal etildi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**Part**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
        "Siz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi."
      ],
      "tasks": [
        "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).",
        "b) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.",
        "c) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.",
        "d) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang."
      ]
    }
  },
  {
    "id": 144,
    "sector": 10,
    "difficulty": "10-Qavat • O'rta",
    "source": "T02 Page 25 • FK Pointing to Subclass (Why Option 8A is Mandatory)",
    "title": "Subklassga Tashqi Kalit Yo'nalishi (Project Manager FK)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nMazkur vazifada ixtisoslashuv / umumlashtirish (Subclass / Superclass) yoki kompozit tuzilmalar keltirilgan. Tutorial 2 Task 2 dagi Option 8A, 8B, 8C yoki 8D usullaridan tegishli shartlar asosida to'g'ri relyatsion jadvallar to'plamini shakllantirish talab etiladi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table ProjectManager { empNo int [pk, ref: > Employee.empNo] bonus decimal } Table Project { projNo int [pk] title varchar managerId int [ref: > ProjectManager.empNo] }",
      "ProjectManager(empNo [PK, FK], bonus)\nProject(projNo [PK], title, managerId [FK])"
    ],
    "expectedSchema": {
      "tables": [
        {
          "tableName": "ProjectManager",
          "columns": [
            {
              "name": "empNo",
              "type": "integer",
              "isPK": true,
              "isFK": true,
              "references": "Employee(empNo)"
            },
            {
              "name": "bonus",
              "type": "decimal"
            }
          ]
        },
        {
          "tableName": "Project",
          "columns": [
            {
              "name": "projNo",
              "type": "integer",
              "isPK": true
            },
            {
              "name": "title",
              "type": "varchar(80)"
            },
            {
              "name": "managerId",
              "type": "integer",
              "isFK": true,
              "references": "ProjectManager(empNo)"
            }
          ]
        }
      ]
    },
    "explanation": "Subklassga FK yo'naltirilgan holda Option 8A referensial yaxlitlikni to'liq ta'minlaydi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Mazkur vazifada ixtisoslashuv / umumlashtirish (Subclass / Superclass) yoki kompozit tuzilmalar keltirilgan. Tutorial 2 Task 2 dagi Option 8A, 8B, 8C yoki 8D usullaridan tegishli shartlar asosida to'g'ri relyatsion jadvallar to'plamini shakllantirish talab etiladi.",
        "Siz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi."
      ],
      "tasks": [
        "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).",
        "b) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.",
        "c) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.",
        "d) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang."
      ]
    }
  },
  {
    "id": 145,
    "sector": 10,
    "difficulty": "10-Qavat • O'rta",
    "source": "L02 Slide 43 • 2-Tier Subclass Hierarchy",
    "title": "2 Pog'onali Subklass Ierarxiyasi (Person -> Staff -> AcademicStaff)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**AcademicStaff**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table AcademicStaff { personId int [pk, ref: > Staff.personId] researchDomain varchar }",
      "AcademicStaff(personId [PK, FK], researchDomain)"
    ],
    "expectedSchema": {
      "tableName": "AcademicStaff",
      "columns": [
        {
          "name": "personId",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Staff(personId)"
        },
        {
          "name": "researchDomain",
          "type": "varchar(80)"
        }
      ]
    },
    "explanation": "Ko'p bosqichli subklass ierarxiyasida ota PK har doim [PK, FK] bo'lib davom etadi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**AcademicStaff**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
        "Siz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi."
      ],
      "tasks": [
        "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).",
        "b) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.",
        "c) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.",
        "d) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang."
      ]
    }
  },
  {
    "id": 146,
    "sector": 10,
    "difficulty": "10-Qavat • O'rta",
    "source": "L02 Slide 43 • Bank Account EER Hierarchy",
    "title": "Bank Hisob Raqamlari EER Ierarxiyasi (Savings & Checking)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nMazkur vazifada ixtisoslashuv / umumlashtirish (Subclass / Superclass) yoki kompozit tuzilmalar keltirilgan. Tutorial 2 Task 2 dagi Option 8A, 8B, 8C yoki 8D usullaridan tegishli shartlar asosida to'g'ri relyatsion jadvallar to'plamini shakllantirish talab etiladi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table Account { accountNo varchar [pk] balance decimal openDate date } Table SavingsAccount { accountNo varchar [pk, ref: > Account.accountNo] interestRate decimal } Table CheckingAccount { accountNo varchar [pk, ref: > Account.accountNo] overdraftLimit decimal }",
      "Account(accountNo [PK], balance, openDate)\nSavingsAccount(accountNo [PK, FK], interestRate)\nCheckingAccount(accountNo [PK, FK], overdraftLimit)"
    ],
    "expectedSchema": {
      "tables": [
        {
          "tableName": "Account",
          "columns": [
            {
              "name": "accountNo",
              "type": "varchar(20)",
              "isPK": true
            },
            {
              "name": "balance",
              "type": "decimal"
            },
            {
              "name": "openDate",
              "type": "date"
            }
          ]
        },
        {
          "tableName": "SavingsAccount",
          "columns": [
            {
              "name": "accountNo",
              "type": "varchar(20)",
              "isPK": true,
              "isFK": true,
              "references": "Account(accountNo)"
            },
            {
              "name": "interestRate",
              "type": "decimal"
            }
          ]
        },
        {
          "tableName": "CheckingAccount",
          "columns": [
            {
              "name": "accountNo",
              "type": "varchar(20)",
              "isPK": true,
              "isFK": true,
              "references": "Account(accountNo)"
            },
            {
              "name": "overdraftLimit",
              "type": "decimal"
            }
          ]
        }
      ]
    },
    "explanation": "Bank hisob raqamlari EER ierarxiyasi Option 8A bo'yicha to'liq yaratildi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Mazkur vazifada ixtisoslashuv / umumlashtirish (Subclass / Superclass) yoki kompozit tuzilmalar keltirilgan. Tutorial 2 Task 2 dagi Option 8A, 8B, 8C yoki 8D usullaridan tegishli shartlar asosida to'g'ri relyatsion jadvallar to'plamini shakllantirish talab etiladi.",
        "Siz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi."
      ],
      "tasks": [
        "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).",
        "b) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.",
        "c) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.",
        "d) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang."
      ]
    }
  },
  {
    "id": 147,
    "sector": 10,
    "difficulty": "10-Qavat • O'rta",
    "source": "L02 Slide 43 • Patient In/Out EER Hierarchy",
    "title": "Statsionar va Ambulator Bemorlar EER Ierarxiyasi",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nMazkur vazifada ixtisoslashuv / umumlashtirish (Subclass / Superclass) yoki kompozit tuzilmalar keltirilgan. Tutorial 2 Task 2 dagi Option 8A, 8B, 8C yoki 8D usullaridan tegishli shartlar asosida to'g'ri relyatsion jadvallar to'plamini shakllantirish talab etiladi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table InPatient { patientId int [pk, ref: > Patient.patientId] bedNo varchar admitDate date } Table OutPatient { patientId int [pk, ref: > Patient.patientId] clinicDate date }",
      "InPatient(patientId [PK, FK], bedNo, admitDate)\nOutPatient(patientId [PK, FK], clinicDate)"
    ],
    "expectedSchema": {
      "tables": [
        {
          "tableName": "InPatient",
          "columns": [
            {
              "name": "patientId",
              "type": "integer",
              "isPK": true,
              "isFK": true,
              "references": "Patient(patientId)"
            },
            {
              "name": "bedNo",
              "type": "varchar(10)"
            },
            {
              "name": "admitDate",
              "type": "date"
            }
          ]
        },
        {
          "tableName": "OutPatient",
          "columns": [
            {
              "name": "patientId",
              "type": "integer",
              "isPK": true,
              "isFK": true,
              "references": "Patient(patientId)"
            },
            {
              "name": "clinicDate",
              "type": "date"
            }
          ]
        }
      ]
    },
    "explanation": "Statsionar va ambulator bemorlar subklass sxemasi chizildi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Mazkur vazifada ixtisoslashuv / umumlashtirish (Subclass / Superclass) yoki kompozit tuzilmalar keltirilgan. Tutorial 2 Task 2 dagi Option 8A, 8B, 8C yoki 8D usullaridan tegishli shartlar asosida to'g'ri relyatsion jadvallar to'plamini shakllantirish talab etiladi.",
        "Siz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi."
      ],
      "tasks": [
        "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).",
        "b) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.",
        "c) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.",
        "d) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang."
      ]
    }
  },
  {
    "id": 148,
    "sector": 10,
    "difficulty": "10-Qavat • O'rta",
    "source": "L02 Slide 43 • Vehicle Rental Booking Subclass Link",
    "title": "Yengil Mashina Subklassi va Ijara Bronlash Jadvali",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nMazkur vazifada ixtisoslashuv / umumlashtirish (Subclass / Superclass) yoki kompozit tuzilmalar keltirilgan. Tutorial 2 Task 2 dagi Option 8A, 8B, 8C yoki 8D usullaridan tegishli shartlar asosida to'g'ri relyatsion jadvallar to'plamini shakllantirish talab etiladi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table Car { plateNo varchar [pk, ref: > Vehicle.plateNo] numSeats int } Table RentalBooking { bookingId int [pk] plateNo varchar [ref: > Car.plateNo] custId int [ref: > Customer.custId] rentalDays int }",
      "Car(plateNo [PK, FK], numSeats)\nRentalBooking(bookingId [PK], plateNo [FK], custId [FK], rentalDays)"
    ],
    "expectedSchema": {
      "tables": [
        {
          "tableName": "Car",
          "columns": [
            {
              "name": "plateNo",
              "type": "varchar(15)",
              "isPK": true,
              "isFK": true,
              "references": "Vehicle(plateNo)"
            },
            {
              "name": "numSeats",
              "type": "integer"
            }
          ]
        },
        {
          "tableName": "RentalBooking",
          "columns": [
            {
              "name": "bookingId",
              "type": "integer",
              "isPK": true
            },
            {
              "name": "plateNo",
              "type": "varchar(15)",
              "isFK": true,
              "references": "Car(plateNo)"
            },
            {
              "name": "custId",
              "type": "integer",
              "isFK": true,
              "references": "Customer(custId)"
            },
            {
              "name": "rentalDays",
              "type": "integer"
            }
          ]
        }
      ]
    },
    "explanation": "Car subklassi va unga yo'naltirilgan RentalBooking relying modeli qurildi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Mazkur vazifada ixtisoslashuv / umumlashtirish (Subclass / Superclass) yoki kompozit tuzilmalar keltirilgan. Tutorial 2 Task 2 dagi Option 8A, 8B, 8C yoki 8D usullaridan tegishli shartlar asosida to'g'ri relyatsion jadvallar to'plamini shakllantirish talab etiladi.",
        "Siz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi."
      ],
      "tasks": [
        "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).",
        "b) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.",
        "c) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.",
        "d) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang."
      ]
    }
  },
  {
    "id": 149,
    "sector": 10,
    "difficulty": "10-Qavat • Qiyin",
    "source": "T02 Task 4 • IT Enterprise Developer & QA Hierarchy",
    "title": "Seminar 2 Task 4: Dasturchi va QA Muhandisi Subklasslari",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nMazkur vazifada ixtisoslashuv / umumlashtirish (Subclass / Superclass) yoki kompozit tuzilmalar keltirilgan. Tutorial 2 Task 2 dagi Option 8A, 8B, 8C yoki 8D usullaridan tegishli shartlar asosida to'g'ri relyatsion jadvallar to'plamini shakllantirish talab etiladi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table Developer { empNo int [pk, ref: > Employee.empNo] githubUser varchar } Table QAEngineer { empNo int [pk, ref: > Employee.empNo] testTool varchar }",
      "Developer(empNo [PK, FK], githubUser)\nQAEngineer(empNo [PK, FK], testTool)"
    ],
    "expectedSchema": {
      "tables": [
        {
          "tableName": "Developer",
          "columns": [
            {
              "name": "empNo",
              "type": "integer",
              "isPK": true,
              "isFK": true,
              "references": "Employee(empNo)"
            },
            {
              "name": "githubUser",
              "type": "varchar(50)"
            }
          ]
        },
        {
          "tableName": "QAEngineer",
          "columns": [
            {
              "name": "empNo",
              "type": "integer",
              "isPK": true,
              "isFK": true,
              "references": "Employee(empNo)"
            },
            {
              "name": "testTool",
              "type": "varchar(50)"
            }
          ]
        }
      ]
    },
    "explanation": "Developer va QAEngineer subklasslari Seminar 2 andozasida tuzildi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Mazkur vazifada ixtisoslashuv / umumlashtirish (Subclass / Superclass) yoki kompozit tuzilmalar keltirilgan. Tutorial 2 Task 2 dagi Option 8A, 8B, 8C yoki 8D usullaridan tegishli shartlar asosida to'g'ri relyatsion jadvallar to'plamini shakllantirish talab etiladi.",
        "Siz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi."
      ],
      "tasks": [
        "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).",
        "b) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.",
        "c) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.",
        "d) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang."
      ]
    }
  },
  {
    "id": 150,
    "sector": 10,
    "difficulty": "10-Qavat • Master Grand Boss (Grand Finale)",
    "source": "T02 Seminar Task 4 & L02 • Complete Enterprise EER Relational Schema",
    "title": "150-Savol MASTER GRAND BOSS: Seminar 2 Task 4 Korporativ EER Arxitekturasi",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nMazkur vazifada ixtisoslashuv / umumlashtirish (Subclass / Superclass) yoki kompozit tuzilmalar keltirilgan. Tutorial 2 Task 2 dagi Option 8A, 8B, 8C yoki 8D usullaridan tegishli shartlar asosida to'g'ri relyatsion jadvallar to'plamini shakllantirish talab etiladi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table Employee { empNo int [pk] fName varchar lName varchar } Table ProjectManager { empNo int [pk, ref: > Employee.empNo] bonus decimal } Table Project { projNo int [pk] title varchar managerId int [ref: > ProjectManager.empNo] } Table WorksOn { empNo int [ref: > Employee.empNo] projNo int [ref: > Project.projNo] hours decimal indexes { (empNo, projNo) [pk] } }",
      "Employee(empNo [PK], fName, lName)\nProjectManager(empNo [PK, FK], bonus)\nProject(projNo [PK], title, managerId [FK])\nWorksOn(empNo [PK, FK], projNo [PK, FK], hours)"
    ],
    "expectedSchema": {
      "tables": [
        {
          "tableName": "Employee",
          "columns": [
            {
              "name": "empNo",
              "type": "integer",
              "isPK": true
            },
            {
              "name": "fName",
              "type": "varchar(50)"
            },
            {
              "name": "lName",
              "type": "varchar(50)"
            }
          ]
        },
        {
          "tableName": "ProjectManager",
          "columns": [
            {
              "name": "empNo",
              "type": "integer",
              "isPK": true,
              "isFK": true,
              "references": "Employee(empNo)"
            },
            {
              "name": "bonus",
              "type": "decimal"
            }
          ]
        },
        {
          "tableName": "Project",
          "columns": [
            {
              "name": "projNo",
              "type": "integer",
              "isPK": true
            },
            {
              "name": "title",
              "type": "varchar(80)"
            },
            {
              "name": "managerId",
              "type": "integer",
              "isFK": true,
              "references": "ProjectManager(empNo)"
            }
          ]
        },
        {
          "tableName": "WorksOn",
          "columns": [
            {
              "name": "empNo",
              "type": "integer",
              "isPK": true,
              "isFK": true,
              "references": "Employee(empNo)"
            },
            {
              "name": "projNo",
              "type": "integer",
              "isPK": true,
              "isFK": true,
              "references": "Project(projNo)"
            },
            {
              "name": "hours",
              "type": "decimal"
            }
          ]
        }
      ]
    },
    "explanation": "TABRIKLAYMIZ! 150-savol Master Boss to'liq yechildi! Siz Week 2 Relational Model & EER Mapping kursini professional Bosh Relyatsion Me'mor darajasida o'zlashtirdingiz!",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Mazkur vazifada ixtisoslashuv / umumlashtirish (Subclass / Superclass) yoki kompozit tuzilmalar keltirilgan. Tutorial 2 Task 2 dagi Option 8A, 8B, 8C yoki 8D usullaridan tegishli shartlar asosida to'g'ri relyatsion jadvallar to'plamini shakllantirish talab etiladi.",
        "Siz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi."
      ],
      "tasks": [
        "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).",
        "b) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.",
        "c) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.",
        "d) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang."
      ]
    }
  }
];
