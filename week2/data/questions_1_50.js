var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);

_scope.QUESTIONS_1_50 = [
  {
    "id": 1,
    "sector": 1,
    "difficulty": "1-Qavat • Boshlang'ich",
    "source": "L02 Slide 34 • Strong Entity Step 1",
    "title": "Filial Jadvalini Loyihalash (Branch)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**Branch**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "Table Branch {\n  // Ustunlarni va [pk] kalitini kiriting\n}",
    "hint": "Jadval nomi, har bir ustun tipi va kamida bitta Birlamchi Kalit [PK] ustuni bo'lishi shart.",
    "solutions": [
      "Table Branch { branchNo varchar [pk] city varchar postcode varchar }",
      "Branch(branchNo [PK], city, postcode)",
      "Branch(branchNo*, city, postcode)"
    ],
    "expectedSchema": {
      "tableName": "Branch",
      "columns": [
        {
          "name": "branchNo",
          "type": "varchar(10)",
          "isPK": true
        },
        {
          "name": "city",
          "type": "varchar(50)"
        },
        {
          "name": "postcode",
          "type": "varchar(15)"
        }
      ]
    },
    "explanation": "Branch jadvali branchNo birlamchi kaliti bilan loyihalandi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**Branch**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
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
    "id": 2,
    "sector": 1,
    "difficulty": "1-Qavat • Boshlang'ich",
    "source": "L02 Slide 34 • Student Entity",
    "title": "Talaba Jadvalini Loyihalash (Student)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**Student**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "Table Student {\n  // Ustunlarni va [pk] kalitini kiriting\n}",
    "hint": "Jadval nomi, har bir ustun tipi va kamida bitta Birlamchi Kalit [PK] ustuni bo'lishi shart.",
    "solutions": [
      "Table Student { studentId int [pk] firstName varchar lastName varchar enrollDate date }",
      "Student(studentId [PK], firstName, lastName, enrollDate)",
      "Student(studentId*, firstName, lastName, enrollDate)"
    ],
    "expectedSchema": {
      "tableName": "Student",
      "columns": [
        {
          "name": "studentId",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "firstName",
          "type": "varchar(50)"
        },
        {
          "name": "lastName",
          "type": "varchar(50)"
        },
        {
          "name": "enrollDate",
          "type": "date"
        }
      ]
    },
    "explanation": "Student jadvali loyihalandi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**Student**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
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
    "id": 3,
    "sector": 1,
    "difficulty": "1-Qavat • Boshlang'ich",
    "source": "L02 Slide 34 • Product Entity",
    "title": "Mahsulot Katalogi Jadvali (Product)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**Product**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "Table Product {\n  // Ustunlarni va [pk] kalitini kiriting\n}",
    "hint": "Jadval nomi, har bir ustun tipi va kamida bitta Birlamchi Kalit [PK] ustuni bo'lishi shart.",
    "solutions": [
      "Table Product { productCode varchar [pk] name varchar price decimal stockQuantity int }",
      "Product(productCode [PK], name, price, stockQuantity)"
    ],
    "expectedSchema": {
      "tableName": "Product",
      "columns": [
        {
          "name": "productCode",
          "type": "varchar(20)",
          "isPK": true
        },
        {
          "name": "name",
          "type": "varchar(100)"
        },
        {
          "name": "price",
          "type": "decimal"
        },
        {
          "name": "stockQuantity",
          "type": "integer"
        }
      ]
    },
    "explanation": "Product jadvali muvaffaqiyatli chizildi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**Product**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
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
    "id": 4,
    "sector": 1,
    "difficulty": "1-Qavat • Boshlang'ich",
    "source": "L02 Slide 34 • Course Entity",
    "title": "O'quv Kursi Jadvali (Course)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**Course**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "Table Course {\n  // Ustunlarni va [pk] kalitini kiriting\n}",
    "hint": "Jadval nomi, har bir ustun tipi va kamida bitta Birlamchi Kalit [PK] ustuni bo'lishi shart.",
    "solutions": [
      "Table Course { courseCode varchar [pk] title varchar credits int }",
      "Course(courseCode [PK], title, credits)"
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
          "name": "title",
          "type": "varchar(100)"
        },
        {
          "name": "credits",
          "type": "integer"
        }
      ]
    },
    "explanation": "Course jadvali loyihalandi.",
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
    "id": 5,
    "sector": 1,
    "difficulty": "1-Qavat • Boshlang'ich",
    "source": "L02 Slide 34 • Patient Entity",
    "title": "Bemor Jadvali (Patient)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**Patient**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "Table Patient {\n  // Ustunlarni va [pk] kalitini kiriting\n}",
    "hint": "Jadval nomi, har bir ustun tipi va kamida bitta Birlamchi Kalit [PK] ustuni bo'lishi shart.",
    "solutions": [
      "Table Patient { patientId varchar [pk] fullName varchar dateOfBirth date bloodGroup varchar }",
      "Patient(patientId [PK], fullName, dateOfBirth, bloodGroup)"
    ],
    "expectedSchema": {
      "tableName": "Patient",
      "columns": [
        {
          "name": "patientId",
          "type": "varchar(15)",
          "isPK": true
        },
        {
          "name": "fullName",
          "type": "varchar(80)"
        },
        {
          "name": "dateOfBirth",
          "type": "date"
        },
        {
          "name": "bloodGroup",
          "type": "varchar(5)"
        }
      ]
    },
    "explanation": "Patient jadvali loyihalandi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**Patient**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
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
    "id": 6,
    "sector": 1,
    "difficulty": "1-Qavat • O'rta",
    "source": "L02 Slide 34 & T02 Task 1 • Composite Name Mapping",
    "title": "Kompozit Atributni Yoyish: Xodim Jadvali (Employee)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**Employee**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "Table Employee {\n  // Ustunlarni va [pk] kalitini kiriting\n}",
    "hint": "Jadval nomi, har bir ustun tipi va kamida bitta Birlamchi Kalit [PK] ustuni bo'lishi shart.",
    "solutions": [
      "Table Employee { empNo int [pk] fName varchar lName varchar salary decimal }",
      "Employee(empNo [PK], fName, lName, salary)"
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
          "name": "fName",
          "type": "varchar(50)"
        },
        {
          "name": "lName",
          "type": "varchar(50)"
        },
        {
          "name": "salary",
          "type": "decimal"
        }
      ]
    },
    "explanation": "Employee jadvalida Name kompozit atributi fName va lName ustunlariga yoyildi.",
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
    "id": 7,
    "sector": 1,
    "difficulty": "1-Qavat • O'rta",
    "source": "L02 Slide 34 • Composite Address Mapping",
    "title": "Kompozit Manzilni Yoyish: Yetkazib Beruvchi (Supplier)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**Supplier**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "Table Supplier {\n  // Ustunlarni va [pk] kalitini kiriting\n}",
    "hint": "Jadval nomi, har bir ustun tipi va kamida bitta Birlamchi Kalit [PK] ustuni bo'lishi shart.",
    "solutions": [
      "Table Supplier { suppId varchar [pk] companyName varchar street varchar city varchar postcode varchar }",
      "Supplier(suppId [PK], companyName, street, city, postcode)"
    ],
    "expectedSchema": {
      "tableName": "Supplier",
      "columns": [
        {
          "name": "suppId",
          "type": "varchar(10)",
          "isPK": true
        },
        {
          "name": "companyName",
          "type": "varchar(80)"
        },
        {
          "name": "street",
          "type": "varchar(100)"
        },
        {
          "name": "city",
          "type": "varchar(50)"
        },
        {
          "name": "postcode",
          "type": "varchar(15)"
        }
      ]
    },
    "explanation": "Address kompozit atributi yoyilib Supplier jadvali tuzildi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**Supplier**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
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
    "id": 8,
    "sector": 1,
    "difficulty": "1-Qavat • O'rta",
    "source": "L02 Slide 3 • Derived Attribute Exclusion",
    "title": "Hosilaviy Atributni Chiqarish: Klub A'zosi (Member)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**Member**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "Table Member {\n  // Ustunlarni va [pk] kalitini kiriting\n}",
    "hint": "Jadval nomi, har bir ustun tipi va kamida bitta Birlamchi Kalit [PK] ustuni bo'lishi shart.",
    "solutions": [
      "Table Member { memberId int [pk] fullName varchar birthDate date }",
      "Member(memberId [PK], fullName, birthDate)"
    ],
    "expectedSchema": {
      "tableName": "Member",
      "columns": [
        {
          "name": "memberId",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "fullName",
          "type": "varchar(80)"
        },
        {
          "name": "birthDate",
          "type": "date"
        }
      ]
    },
    "explanation": "Hosilaviy age atributi chiqarib tashlandi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**Member**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
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
    "id": 9,
    "sector": 1,
    "difficulty": "1-Qavat • O'rta",
    "source": "L02 Slide 54 • Alternate Key UQ Mapping",
    "title": "Unikal Muqobil Kalitli Foydalanuvchi Jadvali (AppUser)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**AppUser**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "Table AppUser {\n  // Ustunlarni va [pk] kalitini kiriting\n}",
    "hint": "Jadval nomi, har bir ustun tipi va kamida bitta Birlamchi Kalit [PK] ustuni bo'lishi shart.",
    "solutions": [
      "Table AppUser { userId int [pk] username varchar [unique] email varchar [unique] regDate timestamp }",
      "AppUser(userId [PK], username [UQ], email [UQ], regDate)"
    ],
    "expectedSchema": {
      "tableName": "AppUser",
      "columns": [
        {
          "name": "userId",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "username",
          "type": "varchar(50)",
          "isUQ": true
        },
        {
          "name": "email",
          "type": "varchar(100)",
          "isUQ": true
        },
        {
          "name": "regDate",
          "type": "timestamp"
        }
      ]
    },
    "explanation": "AppUser jadvali unikal [UQ] muqobil kalitlar bilan loyihalandi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**AppUser**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
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
    "id": 10,
    "sector": 1,
    "difficulty": "1-Qavat • O'rta",
    "source": "L02 Slide 25 • Natural Key: ISBN",
    "title": "Tabiiy Kalitli Kitob Jadvali (Book)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**Book**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "Table Book {\n  // Ustunlarni va [pk] kalitini kiriting\n}",
    "hint": "Jadval nomi, har bir ustun tipi va kamida bitta Birlamchi Kalit [PK] ustuni bo'lishi shart.",
    "solutions": [
      "Table Book { isbn varchar [pk] title varchar pageCount int pubYear int }",
      "Book(isbn [PK], title, pageCount, pubYear)"
    ],
    "expectedSchema": {
      "tableName": "Book",
      "columns": [
        {
          "name": "isbn",
          "type": "varchar(20)",
          "isPK": true
        },
        {
          "name": "title",
          "type": "varchar(150)"
        },
        {
          "name": "pageCount",
          "type": "integer"
        },
        {
          "name": "pubYear",
          "type": "integer"
        }
      ]
    },
    "explanation": "Book jadvali tabiiy kalit isbn bilan loyihalandi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**Book**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
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
    "id": 11,
    "sector": 1,
    "difficulty": "1-Qavat • O'rta",
    "source": "L02 Slide 25 • Natural Key: VIN",
    "title": "Tabiiy Kalitli Avtomobil Jadvali (Vehicle)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**Vehicle**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "Table Vehicle {\n  // Ustunlarni va [pk] kalitini kiriting\n}",
    "hint": "Jadval nomi, har bir ustun tipi va kamida bitta Birlamchi Kalit [PK] ustuni bo'lishi shart.",
    "solutions": [
      "Table Vehicle { vin varchar [pk] make varchar model varchar year int }",
      "Vehicle(vin [PK], make, model, year)"
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
          "type": "varchar(50)"
        },
        {
          "name": "model",
          "type": "varchar(50)"
        },
        {
          "name": "year",
          "type": "integer"
        }
      ]
    },
    "explanation": "Vehicle jadvali vin [PK] bilan yaratildi.",
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
    "id": 12,
    "sector": 1,
    "difficulty": "1-Qavat • O'rta",
    "source": "L02 Slide 25 • Natural Key: PINFL",
    "title": "Fuqarolik Reestri Jadvali (Citizen)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**Citizen**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "Table Citizen {\n  // Ustunlarni va [pk] kalitini kiriting\n}",
    "hint": "Jadval nomi, har bir ustun tipi va kamida bitta Birlamchi Kalit [PK] ustuni bo'lishi shart.",
    "solutions": [
      "Table Citizen { pinfl varchar [pk] fullName varchar issueDate date }",
      "Citizen(pinfl [PK], fullName, issueDate)"
    ],
    "expectedSchema": {
      "tableName": "Citizen",
      "columns": [
        {
          "name": "pinfl",
          "type": "varchar(14)",
          "isPK": true
        },
        {
          "name": "fullName",
          "type": "varchar(100)"
        },
        {
          "name": "issueDate",
          "type": "date"
        }
      ]
    },
    "explanation": "Citizen jadvali pinfl kaliti bilan loyihalandi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**Citizen**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
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
    "id": 13,
    "sector": 1,
    "difficulty": "1-Qavat • O'rta",
    "source": "L02 Slide 34 • Aircraft Entity",
    "title": "Aviatsiya Parki Jadvali (Aircraft)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**Aircraft**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "Table Aircraft {\n  // Ustunlarni va [pk] kalitini kiriting\n}",
    "hint": "Jadval nomi, har bir ustun tipi va kamida bitta Birlamchi Kalit [PK] ustuni bo'lishi shart.",
    "solutions": [
      "Table Aircraft { tailNo varchar [pk] manufacturer varchar model varchar capacity int }",
      "Aircraft(tailNo [PK], manufacturer, model, capacity)"
    ],
    "expectedSchema": {
      "tableName": "Aircraft",
      "columns": [
        {
          "name": "tailNo",
          "type": "varchar(10)",
          "isPK": true
        },
        {
          "name": "manufacturer",
          "type": "varchar(50)"
        },
        {
          "name": "model",
          "type": "varchar(50)"
        },
        {
          "name": "capacity",
          "type": "integer"
        }
      ]
    },
    "explanation": "Aircraft jadvali loyihalandi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**Aircraft**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
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
    "id": 14,
    "sector": 1,
    "difficulty": "1-Qavat • O'rta",
    "source": "T02 Task 1 • Department Strong Entity",
    "title": "Seminar 2 Task 1: Departament Jadvali (Department)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**Department**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "Table Department {\n  // Ustunlarni va [pk] kalitini kiriting\n}",
    "hint": "Jadval nomi, har bir ustun tipi va kamida bitta Birlamchi Kalit [PK] ustuni bo'lishi shart.",
    "solutions": [
      "Table Department { deptNo int [pk] dName varchar budget decimal }",
      "Department(deptNo [PK], dName, budget)"
    ],
    "expectedSchema": {
      "tableName": "Department",
      "columns": [
        {
          "name": "deptNo",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "dName",
          "type": "varchar(50)"
        },
        {
          "name": "budget",
          "type": "decimal"
        }
      ]
    },
    "explanation": "Department kuchli entitiyasi Step 1 asosida chizildi.",
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
    "id": 15,
    "sector": 1,
    "difficulty": "1-Qavat • Qiyin (1-Qavat Bossi)",
    "source": "L02 Slide 34 • Floor 1 Strong Entity Boss",
    "title": "1-Qavat Bossi: Korporativ Xodim Yadro Jadvali (EmployeeCore)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**EmployeeCore**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "Table EmployeeCore {\n  // Ustunlarni va [pk] kalitini kiriting\n}",
    "hint": "Jadval nomi, har bir ustun tipi va kamida bitta Birlamchi Kalit [PK] ustuni bo'lishi shart.",
    "solutions": [
      "Table EmployeeCore { empNo int [pk] fName varchar lName varchar street varchar city varchar postcode varchar email varchar [unique] }",
      "EmployeeCore(empNo [PK], fName, lName, street, city, postcode, email [UQ])"
    ],
    "expectedSchema": {
      "tableName": "EmployeeCore",
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
        },
        {
          "name": "street",
          "type": "varchar(100)"
        },
        {
          "name": "city",
          "type": "varchar(50)"
        },
        {
          "name": "postcode",
          "type": "varchar(15)"
        },
        {
          "name": "email",
          "type": "varchar(100)",
          "isUQ": true
        }
      ]
    },
    "explanation": "1-Qavat Bossi: barcha kompozit atributlar yoyildi va to'liq jadval loyihalandi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**EmployeeCore**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
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
    "id": 16,
    "sector": 2,
    "difficulty": "2-Qavat • Boshlang'ich",
    "source": "L02 Slide 25 & 54 • Composite Primary Key",
    "title": "Kurs Nashri Jadvali (CourseEdition)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**CourseEdition**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "Table CourseEdition {\n  // Ustunlar va kompozit [pk] kalitlarini kiriting\n}",
    "hint": "Kompozit kalitda bir nechta ustunga [pk] belgisi qo'yiladi.",
    "solutions": [
      "Table CourseEdition { courseCode varchar editionYear int syllabusVersion varchar indexes { (courseCode, editionYear) [pk] } }",
      "CourseEdition(courseCode [PK], editionYear [PK], syllabusVersion)"
    ],
    "expectedSchema": {
      "tableName": "CourseEdition",
      "columns": [
        {
          "name": "courseCode",
          "type": "varchar(10)",
          "isPK": true
        },
        {
          "name": "editionYear",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "syllabusVersion",
          "type": "varchar(20)"
        }
      ]
    },
    "explanation": "CourseEdition kompozit PK bilan loyihalandi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**CourseEdition**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
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
    "id": 17,
    "sector": 2,
    "difficulty": "2-Qavat • Boshlang'ich",
    "source": "L02 Slide 25 • Warehouse Slot Composite Key",
    "title": "Omborxona Yacheykasi Jadvali (WarehouseSlot)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**WarehouseSlot**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "Table WarehouseSlot {\n  // Ustunlar va kompozit [pk] kalitlarini kiriting\n}",
    "hint": "Kompozit kalitda bir nechta ustunga [pk] belgisi qo'yiladi.",
    "solutions": [
      "Table WarehouseSlot { aisle varchar shelf int bin int capacityKg decimal indexes { (aisle, shelf, bin) [pk] } }",
      "WarehouseSlot(aisle [PK], shelf [PK], bin [PK], capacityKg)"
    ],
    "expectedSchema": {
      "tableName": "WarehouseSlot",
      "columns": [
        {
          "name": "aisle",
          "type": "varchar(5)",
          "isPK": true
        },
        {
          "name": "shelf",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "bin",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "capacityKg",
          "type": "decimal"
        }
      ]
    },
    "explanation": "WarehouseSlot 3 ustunli kompozit PK bilan yaratildi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**WarehouseSlot**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
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
    "id": 18,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "source": "L02 Slide 25 • Room Schedule Composite Key",
    "title": "Auditoriya Bandligi Jadvali (ClassSchedule)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**ClassSchedule**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "Table ClassSchedule {\n  // Ustunlar va kompozit [pk] kalitlarini kiriting\n}",
    "hint": "Kompozit kalitda bir nechta ustunga [pk] belgisi qo'yiladi.",
    "solutions": [
      "Table ClassSchedule { roomNo varchar periodNo int dayOfWeek varchar subjectTitle varchar indexes { (roomNo, periodNo, dayOfWeek) [pk] } }",
      "ClassSchedule(roomNo [PK], periodNo [PK], dayOfWeek [PK], subjectTitle)"
    ],
    "expectedSchema": {
      "tableName": "ClassSchedule",
      "columns": [
        {
          "name": "roomNo",
          "type": "varchar(10)",
          "isPK": true
        },
        {
          "name": "periodNo",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "dayOfWeek",
          "type": "varchar(10)",
          "isPK": true
        },
        {
          "name": "subjectTitle",
          "type": "varchar(80)"
        }
      ]
    },
    "explanation": "ClassSchedule kompozit kalit bilan chizildi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**ClassSchedule**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
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
    "id": 19,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "source": "L02 Slide 25 • Flight Seat Composite Key",
    "title": "Aviaqatnov O'rindiqlari (FlightSeat)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**FlightSeat**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "Table FlightSeat {\n  // Ustunlar va kompozit [pk] kalitlarini kiriting\n}",
    "hint": "Kompozit kalitda bir nechta ustunga [pk] belgisi qo'yiladi.",
    "solutions": [
      "Table FlightSeat { flightNo varchar seatNo varchar classType varchar indexes { (flightNo, seatNo) [pk] } }",
      "FlightSeat(flightNo [PK], seatNo [PK], classType)"
    ],
    "expectedSchema": {
      "tableName": "FlightSeat",
      "columns": [
        {
          "name": "flightNo",
          "type": "varchar(10)",
          "isPK": true
        },
        {
          "name": "seatNo",
          "type": "varchar(5)",
          "isPK": true
        },
        {
          "name": "classType",
          "type": "varchar(20)"
        }
      ]
    },
    "explanation": "FlightSeat jadvali loyihalandi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**FlightSeat**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
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
    "id": 20,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "source": "L02 Slide 25 • GeoPoint Composite Key",
    "title": "Geografik Nuqta Jadvali (GeoPoint)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**GeoPoint**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "Table GeoPoint {\n  // Ustunlar va kompozit [pk] kalitlarini kiriting\n}",
    "hint": "Kompozit kalitda bir nechta ustunga [pk] belgisi qo'yiladi.",
    "solutions": [
      "Table GeoPoint { latitude decimal longitude decimal locationName varchar indexes { (latitude, longitude) [pk] } }",
      "GeoPoint(latitude [PK], longitude [PK], locationName)"
    ],
    "expectedSchema": {
      "tableName": "GeoPoint",
      "columns": [
        {
          "name": "latitude",
          "type": "decimal",
          "isPK": true
        },
        {
          "name": "longitude",
          "type": "decimal",
          "isPK": true
        },
        {
          "name": "locationName",
          "type": "varchar(100)"
        }
      ]
    },
    "explanation": "GeoPoint kompozit koordinata kaliti bilan yaratildi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**GeoPoint**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
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
    "id": 21,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "source": "L02 Slide 25 • Passport Composite Authority",
    "title": "Pasport Seriyasi va Raqami Jadvali (PassportDoc)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**PassportDoc**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "Table PassportDoc {\n  // Ustunlar va kompozit [pk] kalitlarini kiriting\n}",
    "hint": "Kompozit kalitda bir nechta ustunga [pk] belgisi qo'yiladi.",
    "solutions": [
      "Table PassportDoc { series varchar docNumber varchar holderName varchar expiryDate date indexes { (series, docNumber) [pk] } }",
      "PassportDoc(series [PK], docNumber [PK], holderName, expiryDate)"
    ],
    "expectedSchema": {
      "tableName": "PassportDoc",
      "columns": [
        {
          "name": "series",
          "type": "varchar(5)",
          "isPK": true
        },
        {
          "name": "docNumber",
          "type": "varchar(15)",
          "isPK": true
        },
        {
          "name": "holderName",
          "type": "varchar(80)"
        },
        {
          "name": "expiryDate",
          "type": "date"
        }
      ]
    },
    "explanation": "PassportDoc jadvali kompozit PK bilan loyihalandi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**PassportDoc**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
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
    "id": 22,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "source": "L02 Slide 25 • Metric Observation Composite Key",
    "title": "Server Metrikalari Kuzatuvi (ServerMetric)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**ServerMetric**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "Table ServerMetric {\n  // Ustunlar va kompozit [pk] kalitlarini kiriting\n}",
    "hint": "Kompozit kalitda bir nechta ustunga [pk] belgisi qo'yiladi.",
    "solutions": [
      "Table ServerMetric { serverHost varchar metricName varchar recordedAt timestamp metricValue decimal indexes { (serverHost, metricName, recordedAt) [pk] } }",
      "ServerMetric(serverHost [PK], metricName [PK], recordedAt [PK], metricValue)"
    ],
    "expectedSchema": {
      "tableName": "ServerMetric",
      "columns": [
        {
          "name": "serverHost",
          "type": "varchar(50)",
          "isPK": true
        },
        {
          "name": "metricName",
          "type": "varchar(50)",
          "isPK": true
        },
        {
          "name": "recordedAt",
          "type": "timestamp",
          "isPK": true
        },
        {
          "name": "metricValue",
          "type": "decimal"
        }
      ]
    },
    "explanation": "ServerMetric 3 ustunli kompozit kalit bilan tuzildi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**ServerMetric**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
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
    "id": 23,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "source": "L02 Slide 25 • Tariff Composite Key",
    "title": "Zona Bo'yicha Tarif Jadvali (ZoneTariff)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**ZoneTariff**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "Table ZoneTariff {\n  // Ustunlar va kompozit [pk] kalitlarini kiriting\n}",
    "hint": "Kompozit kalitda bir nechta ustunga [pk] belgisi qo'yiladi.",
    "solutions": [
      "Table ZoneTariff { fromZone int toZone int baseCost decimal indexes { (fromZone, toZone) [pk] } }",
      "ZoneTariff(fromZone [PK], toZone [PK], baseCost)"
    ],
    "expectedSchema": {
      "tableName": "ZoneTariff",
      "columns": [
        {
          "name": "fromZone",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "toZone",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "baseCost",
          "type": "decimal"
        }
      ]
    },
    "explanation": "ZoneTariff jadvali loyihalandi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**ZoneTariff**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
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
    "id": 24,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "source": "L02 Slide 25 • Subject Prerequisite Composite Key",
    "title": "Fan Prerekviziti Jadvali (Prerequisite)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**Prerequisite**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "Table Prerequisite {\n  // Ustunlar va kompozit [pk] kalitlarini kiriting\n}",
    "hint": "Kompozit kalitda bir nechta ustunga [pk] belgisi qo'yiladi.",
    "solutions": [
      "Table Prerequisite { courseCode varchar prereqCourseCode varchar minGradeRequired varchar indexes { (courseCode, prereqCourseCode) [pk] } }",
      "Prerequisite(courseCode [PK], prereqCourseCode [PK], minGradeRequired)"
    ],
    "expectedSchema": {
      "tableName": "Prerequisite",
      "columns": [
        {
          "name": "courseCode",
          "type": "varchar(10)",
          "isPK": true
        },
        {
          "name": "prereqCourseCode",
          "type": "varchar(10)",
          "isPK": true
        },
        {
          "name": "minGradeRequired",
          "type": "varchar(5)"
        }
      ]
    },
    "explanation": "Prerequisite jadvali loyihalandi.",
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
    "id": 25,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "source": "L02 Slide 25 • Account Card Composite Key",
    "title": "Hisob va Karta Bog'lanishi (AccountCard)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**AccountCard**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "Table AccountCard {\n  // Ustunlar va kompozit [pk] kalitlarini kiriting\n}",
    "hint": "Kompozit kalitda bir nechta ustunga [pk] belgisi qo'yiladi.",
    "solutions": [
      "Table AccountCard { accountNo varchar cardNumber varchar cardholderName varchar indexes { (accountNo, cardNumber) [pk] } }",
      "AccountCard(accountNo [PK], cardNumber [PK], cardholderName)"
    ],
    "expectedSchema": {
      "tableName": "AccountCard",
      "columns": [
        {
          "name": "accountNo",
          "type": "varchar(20)",
          "isPK": true
        },
        {
          "name": "cardNumber",
          "type": "varchar(16)",
          "isPK": true
        },
        {
          "name": "cardholderName",
          "type": "varchar(80)"
        }
      ]
    },
    "explanation": "AccountCard jadvali yaratildi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**AccountCard**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
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
    "id": 26,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "source": "L02 Slide 25 • Sensor Log Composite Key",
    "title": "IoT Datchik Ko'rsatkichi Jadvali (SensorLog)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**SensorLog**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "Table SensorLog {\n  // Ustunlar va kompozit [pk] kalitlarini kiriting\n}",
    "hint": "Kompozit kalitda bir nechta ustunga [pk] belgisi qo'yiladi.",
    "solutions": [
      "Table SensorLog { sensorId varchar readTimestamp timestamp temperature decimal indexes { (sensorId, readTimestamp) [pk] } }",
      "SensorLog(sensorId [PK], readTimestamp [PK], temperature)"
    ],
    "expectedSchema": {
      "tableName": "SensorLog",
      "columns": [
        {
          "name": "sensorId",
          "type": "varchar(20)",
          "isPK": true
        },
        {
          "name": "readTimestamp",
          "type": "timestamp",
          "isPK": true
        },
        {
          "name": "temperature",
          "type": "decimal"
        }
      ]
    },
    "explanation": "SensorLog jadvali loyihalandi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**SensorLog**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
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
    "id": 27,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "source": "L02 Slide 25 • Lab Test Composite Key",
    "title": "Laboratoriya Sinov Namunasi (LabSample)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**LabSample**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "Table LabSample {\n  // Ustunlar va kompozit [pk] kalitlarini kiriting\n}",
    "hint": "Kompozit kalitda bir nechta ustunga [pk] belgisi qo'yiladi.",
    "solutions": [
      "Table LabSample { batchNo varchar sampleIndex int purityLevel decimal indexes { (batchNo, sampleIndex) [pk] } }",
      "LabSample(batchNo [PK], sampleIndex [PK], purityLevel)"
    ],
    "expectedSchema": {
      "tableName": "LabSample",
      "columns": [
        {
          "name": "batchNo",
          "type": "varchar(15)",
          "isPK": true
        },
        {
          "name": "sampleIndex",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "purityLevel",
          "type": "decimal"
        }
      ]
    },
    "explanation": "LabSample jadvali kompozit PK bilan tuzildi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**LabSample**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
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
    "id": 28,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "source": "L02 Slide 25 • Project Sprint Composite Key",
    "title": "Loyiha Sprinti Jadvali (ProjectSprint)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**ProjectSprint**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "Table ProjectSprint {\n  // Ustunlar va kompozit [pk] kalitlarini kiriting\n}",
    "hint": "Kompozit kalitda bir nechta ustunga [pk] belgisi qo'yiladi.",
    "solutions": [
      "Table ProjectSprint { projectCode varchar sprintNo int startDate date endDate date indexes { (projectCode, sprintNo) [pk] } }",
      "ProjectSprint(projectCode [PK], sprintNo [PK], startDate, endDate)"
    ],
    "expectedSchema": {
      "tableName": "ProjectSprint",
      "columns": [
        {
          "name": "projectCode",
          "type": "varchar(10)",
          "isPK": true
        },
        {
          "name": "sprintNo",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "startDate",
          "type": "date"
        },
        {
          "name": "endDate",
          "type": "date"
        }
      ]
    },
    "explanation": "ProjectSprint jadvali yaratildi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**ProjectSprint**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
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
    "id": 29,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "source": "L02 Slide 25 • Device Port Composite Key",
    "title": "Tarmoq Qurilmasi Porti (DevicePort)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**DevicePort**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "Table DevicePort {\n  // Ustunlar va kompozit [pk] kalitlarini kiriting\n}",
    "hint": "Kompozit kalitda bir nechta ustunga [pk] belgisi qo'yiladi.",
    "solutions": [
      "Table DevicePort { deviceMac varchar portIndex int speedMbps int indexes { (deviceMac, portIndex) [pk] } }",
      "DevicePort(deviceMac [PK], portIndex [PK], speedMbps)"
    ],
    "expectedSchema": {
      "tableName": "DevicePort",
      "columns": [
        {
          "name": "deviceMac",
          "type": "varchar(17)",
          "isPK": true
        },
        {
          "name": "portIndex",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "speedMbps",
          "type": "integer"
        }
      ]
    },
    "explanation": "DevicePort jadvali loyihalandi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**DevicePort**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
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
    "id": 30,
    "sector": 2,
    "difficulty": "2-Qavat • Qiyin (2-Qavat Bossi)",
    "source": "L02 Slide 25 • Composite Key Boss",
    "title": "2-Qavat Bossi: Konteyner Logistika Kuzatuvi (ContainerLog)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**ContainerLog**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "Table ContainerLog {\n  // Ustunlar va kompozit [pk] kalitlarini kiriting\n}",
    "hint": "Kompozit kalitda bir nechta ustunga [pk] belgisi qo'yiladi.",
    "solutions": [
      "Table ContainerLog { containerId varchar voyageCode varchar checkpointCode varchar inspectionStatus varchar weightTons decimal indexes { (containerId, voyageCode, checkpointCode) [pk] } }",
      "ContainerLog(containerId [PK], voyageCode [PK], checkpointCode [PK], inspectionStatus, weightTons)"
    ],
    "expectedSchema": {
      "tableName": "ContainerLog",
      "columns": [
        {
          "name": "containerId",
          "type": "varchar(20)",
          "isPK": true
        },
        {
          "name": "voyageCode",
          "type": "varchar(20)",
          "isPK": true
        },
        {
          "name": "checkpointCode",
          "type": "varchar(10)",
          "isPK": true
        },
        {
          "name": "inspectionStatus",
          "type": "varchar(30)"
        },
        {
          "name": "weightTons",
          "type": "decimal"
        }
      ]
    },
    "explanation": "2-Qavat Bossi: 3 ustunli murakkab kompozit PK li ContainerLog jadvali loyihalandi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**ContainerLog**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
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
    "id": 31,
    "sector": 3,
    "difficulty": "3-Qavat • Boshlang'ich",
    "source": "L02 Slide 36 & T02 Task 1 • Department-Employee 1:*",
    "title": "Departament va Xodim 1:* Sxemasi (Department -> Employee)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nMazkur vazifada ixtisoslashuv / umumlashtirish (Subclass / Superclass) yoki kompozit tuzilmalar keltirilgan. Tutorial 2 Task 2 dagi Option 8A, 8B, 8C yoki 8D usullaridan tegishli shartlar asosida to'g'ri relyatsion jadvallar to'plamini shakllantirish talab etiladi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Ota va Bola jadvallarini yarating va [ref: > Ota.pk] bilan bog'lang",
    "hint": "1:* munosabatda Tashqi Kalit (FK) har doim bola jadvaliga qo'yiladi va ota jadvalning PK siga havola qiladi.",
    "solutions": [
      "Table Department { deptNo int [pk] dName varchar } Table Employee { empNo int [pk] name varchar deptNo int [ref: > Department.deptNo] }",
      "Department(deptNo [PK], dName)\nEmployee(empNo [PK], name, deptNo [FK -> Department])"
    ],
    "expectedSchema": {
      "tables": [
        {
          "tableName": "Department",
          "columns": [
            {
              "name": "deptNo",
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
          "tableName": "Employee",
          "columns": [
            {
              "name": "empNo",
              "type": "integer",
              "isPK": true
            },
            {
              "name": "name",
              "type": "varchar(80)"
            },
            {
              "name": "deptNo",
              "type": "integer",
              "isFK": true,
              "references": "Department(deptNo)"
            }
          ]
        }
      ]
    },
    "explanation": "1:* aloqa muvaffaqiyatli chizildi: deptNo tashqi kaliti bola jadvali Employee ga joylashtirildi.",
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
    "id": 32,
    "sector": 3,
    "difficulty": "3-Qavat • Boshlang'ich",
    "source": "L02 Slide 36 • Branch-Staff 1:*",
    "title": "Filial va Xodimlar 1:* Sxemasi (Branch -> Staff)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nMazkur vazifada ixtisoslashuv / umumlashtirish (Subclass / Superclass) yoki kompozit tuzilmalar keltirilgan. Tutorial 2 Task 2 dagi Option 8A, 8B, 8C yoki 8D usullaridan tegishli shartlar asosida to'g'ri relyatsion jadvallar to'plamini shakllantirish talab etiladi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Ota va Bola jadvallarini yarating va [ref: > Ota.pk] bilan bog'lang",
    "hint": "1:* munosabatda Tashqi Kalit (FK) har doim bola jadvaliga qo'yiladi va ota jadvalning PK siga havola qiladi.",
    "solutions": [
      "Table Branch { branchNo varchar [pk] city varchar } Table Staff { staffNo varchar [pk] name varchar branchNo varchar [ref: > Branch.branchNo] }",
      "Branch(branchNo [PK], city)\nStaff(staffNo [PK], name, branchNo [FK -> Branch])"
    ],
    "expectedSchema": {
      "tables": [
        {
          "tableName": "Branch",
          "columns": [
            {
              "name": "branchNo",
              "type": "varchar(10)",
              "isPK": true
            },
            {
              "name": "city",
              "type": "varchar(50)"
            }
          ]
        },
        {
          "tableName": "Staff",
          "columns": [
            {
              "name": "staffNo",
              "type": "varchar(10)",
              "isPK": true
            },
            {
              "name": "name",
              "type": "varchar(80)"
            },
            {
              "name": "branchNo",
              "type": "varchar(10)",
              "isFK": true,
              "references": "Branch(branchNo)"
            }
          ]
        }
      ]
    },
    "explanation": "Branch va Staff jadvallari 1:* aloqasi bilan bog'landi.",
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
    "id": 33,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "source": "L02 Slide 36 • Faculty-Student 1:*",
    "title": "Fakultet va Talabalar 1:* Sxemasi (Faculty -> Student)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nMazkur vazifada ixtisoslashuv / umumlashtirish (Subclass / Superclass) yoki kompozit tuzilmalar keltirilgan. Tutorial 2 Task 2 dagi Option 8A, 8B, 8C yoki 8D usullaridan tegishli shartlar asosida to'g'ri relyatsion jadvallar to'plamini shakllantirish talab etiladi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Ota va Bola jadvallarini yarating va [ref: > Ota.pk] bilan bog'lang",
    "hint": "1:* munosabatda Tashqi Kalit (FK) har doim bola jadvaliga qo'yiladi va ota jadvalning PK siga havola qiladi.",
    "solutions": [
      "Table Faculty { facCode varchar [pk] facultyName varchar } Table Student { studentId int [pk] name varchar facCode varchar [ref: > Faculty.facCode] }",
      "Faculty(facCode [PK], facultyName)\nStudent(studentId [PK], name, facCode [FK -> Faculty])"
    ],
    "expectedSchema": {
      "tables": [
        {
          "tableName": "Faculty",
          "columns": [
            {
              "name": "facCode",
              "type": "varchar(10)",
              "isPK": true
            },
            {
              "name": "facultyName",
              "type": "varchar(80)"
            }
          ]
        },
        {
          "tableName": "Student",
          "columns": [
            {
              "name": "studentId",
              "type": "integer",
              "isPK": true
            },
            {
              "name": "name",
              "type": "varchar(80)"
            },
            {
              "name": "facCode",
              "type": "varchar(10)",
              "isFK": true,
              "references": "Faculty(facCode)"
            }
          ]
        }
      ]
    },
    "explanation": "Faculty va Student 1:* relyatsion sxemasi tuzildi.",
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
    "id": 34,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "source": "L02 Slide 36 • Publisher-Book 1:*",
    "title": "Nashriyot va Kitoblar 1:* Sxemasi (Publisher -> Book)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nMazkur vazifada ixtisoslashuv / umumlashtirish (Subclass / Superclass) yoki kompozit tuzilmalar keltirilgan. Tutorial 2 Task 2 dagi Option 8A, 8B, 8C yoki 8D usullaridan tegishli shartlar asosida to'g'ri relyatsion jadvallar to'plamini shakllantirish talab etiladi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Ota va Bola jadvallarini yarating va [ref: > Ota.pk] bilan bog'lang",
    "hint": "1:* munosabatda Tashqi Kalit (FK) har doim bola jadvaliga qo'yiladi va ota jadvalning PK siga havola qiladi.",
    "solutions": [
      "Table Publisher { pubId varchar [pk] pubName varchar } Table Book { isbn varchar [pk] title varchar pubId varchar [ref: > Publisher.pubId] }",
      "Publisher(pubId [PK], pubName)\nBook(isbn [PK], title, pubId [FK -> Publisher])"
    ],
    "expectedSchema": {
      "tables": [
        {
          "tableName": "Publisher",
          "columns": [
            {
              "name": "pubId",
              "type": "varchar(10)",
              "isPK": true
            },
            {
              "name": "pubName",
              "type": "varchar(80)"
            }
          ]
        },
        {
          "tableName": "Book",
          "columns": [
            {
              "name": "isbn",
              "type": "varchar(20)",
              "isPK": true
            },
            {
              "name": "title",
              "type": "varchar(100)"
            },
            {
              "name": "pubId",
              "type": "varchar(10)",
              "isFK": true,
              "references": "Publisher(pubId)"
            }
          ]
        }
      ]
    },
    "explanation": "Publisher va Book 1:* relyatsion sxemasi yaratildi.",
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
    "id": 35,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "source": "L02 Slide 36 • Category-Product 1:*",
    "title": "Kategoriya va Mahsulotlar 1:* Sxemasi (Category -> Product)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nMazkur vazifada ixtisoslashuv / umumlashtirish (Subclass / Superclass) yoki kompozit tuzilmalar keltirilgan. Tutorial 2 Task 2 dagi Option 8A, 8B, 8C yoki 8D usullaridan tegishli shartlar asosida to'g'ri relyatsion jadvallar to'plamini shakllantirish talab etiladi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Ota va Bola jadvallarini yarating va [ref: > Ota.pk] bilan bog'lang",
    "hint": "1:* munosabatda Tashqi Kalit (FK) har doim bola jadvaliga qo'yiladi va ota jadvalning PK siga havola qiladi.",
    "solutions": [
      "Table Category { catId int [pk] catTitle varchar } Table Product { prodId int [pk] prodName varchar catId int [ref: > Category.catId] }",
      "Category(catId [PK], catTitle)\nProduct(prodId [PK], prodName, catId [FK -> Category])"
    ],
    "expectedSchema": {
      "tables": [
        {
          "tableName": "Category",
          "columns": [
            {
              "name": "catId",
              "type": "integer",
              "isPK": true
            },
            {
              "name": "catTitle",
              "type": "varchar(50)"
            }
          ]
        },
        {
          "tableName": "Product",
          "columns": [
            {
              "name": "prodId",
              "type": "integer",
              "isPK": true
            },
            {
              "name": "prodName",
              "type": "varchar(80)"
            },
            {
              "name": "catId",
              "type": "integer",
              "isFK": true,
              "references": "Category(catId)"
            }
          ]
        }
      ]
    },
    "explanation": "Category va Product 1:* sxemasi tuzildi.",
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
    "id": 36,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "source": "L02 Slide 36 • Customer-Order 1:*",
    "title": "Mijoz va Buyurtmalar 1:* Sxemasi (Customer -> Order)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nMazkur vazifada ixtisoslashuv / umumlashtirish (Subclass / Superclass) yoki kompozit tuzilmalar keltirilgan. Tutorial 2 Task 2 dagi Option 8A, 8B, 8C yoki 8D usullaridan tegishli shartlar asosida to'g'ri relyatsion jadvallar to'plamini shakllantirish talab etiladi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Ota va Bola jadvallarini yarating va [ref: > Ota.pk] bilan bog'lang",
    "hint": "1:* munosabatda Tashqi Kalit (FK) har doim bola jadvaliga qo'yiladi va ota jadvalning PK siga havola qiladi.",
    "solutions": [
      "Table Customer { custId int [pk] custName varchar } Table CustomerOrder { orderNo int [pk] orderDate date custId int [ref: > Customer.custId] }",
      "Customer(custId [PK], custName)\nCustomerOrder(orderNo [PK], orderDate, custId [FK -> Customer])"
    ],
    "expectedSchema": {
      "tables": [
        {
          "tableName": "Customer",
          "columns": [
            {
              "name": "custId",
              "type": "integer",
              "isPK": true
            },
            {
              "name": "custName",
              "type": "varchar(80)"
            }
          ]
        },
        {
          "tableName": "CustomerOrder",
          "columns": [
            {
              "name": "orderNo",
              "type": "integer",
              "isPK": true
            },
            {
              "name": "orderDate",
              "type": "date"
            },
            {
              "name": "custId",
              "type": "integer",
              "isFK": true,
              "references": "Customer(custId)"
            }
          ]
        }
      ]
    },
    "explanation": "Customer va CustomerOrder 1:* aloqasi chizildi.",
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
    "id": 37,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "source": "L02 Slide 36 • Hospital-Ward 1:*",
    "title": "Shifoxona va Palatalar 1:* Sxemasi (Hospital -> Ward)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nMazkur vazifada ixtisoslashuv / umumlashtirish (Subclass / Superclass) yoki kompozit tuzilmalar keltirilgan. Tutorial 2 Task 2 dagi Option 8A, 8B, 8C yoki 8D usullaridan tegishli shartlar asosida to'g'ri relyatsion jadvallar to'plamini shakllantirish talab etiladi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Ota va Bola jadvallarini yarating va [ref: > Ota.pk] bilan bog'lang",
    "hint": "1:* munosabatda Tashqi Kalit (FK) har doim bola jadvaliga qo'yiladi va ota jadvalning PK siga havola qiladi.",
    "solutions": [
      "Table Hospital { hospCode varchar [pk] hospName varchar } Table Ward { wardNo int [pk] bedCount int hospCode varchar [ref: > Hospital.hospCode] }",
      "Hospital(hospCode [PK], hospName)\nWard(wardNo [PK], bedCount, hospCode [FK -> Hospital])"
    ],
    "expectedSchema": {
      "tables": [
        {
          "tableName": "Hospital",
          "columns": [
            {
              "name": "hospCode",
              "type": "varchar(10)",
              "isPK": true
            },
            {
              "name": "hospName",
              "type": "varchar(80)"
            }
          ]
        },
        {
          "tableName": "Ward",
          "columns": [
            {
              "name": "wardNo",
              "type": "integer",
              "isPK": true
            },
            {
              "name": "bedCount",
              "type": "integer"
            },
            {
              "name": "hospCode",
              "type": "varchar(10)",
              "isFK": true,
              "references": "Hospital(hospCode)"
            }
          ]
        }
      ]
    },
    "explanation": "Hospital va Ward 1:* sxemasi loyihalandi.",
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
    "id": 38,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "source": "L02 Slide 36 • Author-Article 1:*",
    "title": "Muallif va Maqolalar 1:* Sxemasi (Author -> Article)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nMazkur vazifada ixtisoslashuv / umumlashtirish (Subclass / Superclass) yoki kompozit tuzilmalar keltirilgan. Tutorial 2 Task 2 dagi Option 8A, 8B, 8C yoki 8D usullaridan tegishli shartlar asosida to'g'ri relyatsion jadvallar to'plamini shakllantirish talab etiladi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Ota va Bola jadvallarini yarating va [ref: > Ota.pk] bilan bog'lang",
    "hint": "1:* munosabatda Tashqi Kalit (FK) har doim bola jadvaliga qo'yiladi va ota jadvalning PK siga havola qiladi.",
    "solutions": [
      "Table Author { authorId int [pk] authorName varchar } Table Article { articleId int [pk] title varchar authorId int [ref: > Author.authorId] }",
      "Author(authorId [PK], authorName)\nArticle(articleId [PK], title, authorId [FK -> Author])"
    ],
    "expectedSchema": {
      "tables": [
        {
          "tableName": "Author",
          "columns": [
            {
              "name": "authorId",
              "type": "integer",
              "isPK": true
            },
            {
              "name": "authorName",
              "type": "varchar(80)"
            }
          ]
        },
        {
          "tableName": "Article",
          "columns": [
            {
              "name": "articleId",
              "type": "integer",
              "isPK": true
            },
            {
              "name": "title",
              "type": "varchar(120)"
            },
            {
              "name": "authorId",
              "type": "integer",
              "isFK": true,
              "references": "Author(authorId)"
            }
          ]
        }
      ]
    },
    "explanation": "Author va Article 1:* sxemasi yaratildi.",
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
    "id": 39,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "source": "L02 Slide 36 • Country-City 1:*",
    "title": "Davlat va Shaharlar 1:* Sxemasi (Country -> City)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nMazkur vazifada ixtisoslashuv / umumlashtirish (Subclass / Superclass) yoki kompozit tuzilmalar keltirilgan. Tutorial 2 Task 2 dagi Option 8A, 8B, 8C yoki 8D usullaridan tegishli shartlar asosida to'g'ri relyatsion jadvallar to'plamini shakllantirish talab etiladi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Ota va Bola jadvallarini yarating va [ref: > Ota.pk] bilan bog'lang",
    "hint": "1:* munosabatda Tashqi Kalit (FK) har doim bola jadvaliga qo'yiladi va ota jadvalning PK siga havola qiladi.",
    "solutions": [
      "Table Country { countryCode varchar [pk] countryName varchar } Table City { cityId int [pk] cityName varchar countryCode varchar [ref: > Country.countryCode] }",
      "Country(countryCode [PK], countryName)\nCity(cityId [PK], cityName, countryCode [FK -> Country])"
    ],
    "expectedSchema": {
      "tables": [
        {
          "tableName": "Country",
          "columns": [
            {
              "name": "countryCode",
              "type": "varchar(3)",
              "isPK": true
            },
            {
              "name": "countryName",
              "type": "varchar(60)"
            }
          ]
        },
        {
          "tableName": "City",
          "columns": [
            {
              "name": "cityId",
              "type": "integer",
              "isPK": true
            },
            {
              "name": "cityName",
              "type": "varchar(60)"
            },
            {
              "name": "countryCode",
              "type": "varchar(3)",
              "isFK": true,
              "references": "Country(countryCode)"
            }
          ]
        }
      ]
    },
    "explanation": "Country va City 1:* sxemasi tuzildi.",
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
    "id": 40,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "source": "L02 Slide 36 • Team-Player 1:*",
    "title": "Jamoa va O'yinchilar 1:* Sxemasi (Team -> Player)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nMazkur vazifada ixtisoslashuv / umumlashtirish (Subclass / Superclass) yoki kompozit tuzilmalar keltirilgan. Tutorial 2 Task 2 dagi Option 8A, 8B, 8C yoki 8D usullaridan tegishli shartlar asosida to'g'ri relyatsion jadvallar to'plamini shakllantirish talab etiladi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Ota va Bola jadvallarini yarating va [ref: > Ota.pk] bilan bog'lang",
    "hint": "1:* munosabatda Tashqi Kalit (FK) har doim bola jadvaliga qo'yiladi va ota jadvalning PK siga havola qiladi.",
    "solutions": [
      "Table Team { teamId int [pk] teamName varchar } Table Player { playerId int [pk] playerName varchar teamId int [ref: > Team.teamId] }",
      "Team(teamId [PK], teamName)\nPlayer(playerId [PK], playerName, teamId [FK -> Team])"
    ],
    "expectedSchema": {
      "tables": [
        {
          "tableName": "Team",
          "columns": [
            {
              "name": "teamId",
              "type": "integer",
              "isPK": true
            },
            {
              "name": "teamName",
              "type": "varchar(50)"
            }
          ]
        },
        {
          "tableName": "Player",
          "columns": [
            {
              "name": "playerId",
              "type": "integer",
              "isPK": true
            },
            {
              "name": "playerName",
              "type": "varchar(80)"
            },
            {
              "name": "teamId",
              "type": "integer",
              "isFK": true,
              "references": "Team(teamId)"
            }
          ]
        }
      ]
    },
    "explanation": "Team va Player 1:* aloqasi chizildi.",
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
    "id": 41,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "source": "L02 Slide 54 • Mandatory FK (NOT NULL) Syntax",
    "title": "Majburiy Qatnashuvli Tashqi Kalit (NOT NULL)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**Employee**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Ota va Bola jadvallarini yarating va [ref: > Ota.pk] bilan bog'lang",
    "hint": "1:* munosabatda Tashqi Kalit (FK) har doim bola jadvaliga qo'yiladi va ota jadvalning PK siga havola qiladi.",
    "solutions": [
      "Table Employee { empNo int [pk] name varchar deptNo int [not null, ref: > Department.deptNo] }",
      "Employee(empNo [PK], name, deptNo [FK, NN])"
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
          "name": "name",
          "type": "varchar(80)"
        },
        {
          "name": "deptNo",
          "type": "integer",
          "isFK": true,
          "isNotNull": true,
          "references": "Department(deptNo)"
        }
      ]
    },
    "explanation": "deptNo ga NOT NULL majburiy qatnashuv cheklovi kiritildi.",
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
    "id": 42,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "source": "L02 Slide 36 • Recursive 1:* Supervisor",
    "title": "Rekursiv 1:* Rahbar Ierarxiyasi Jadvali (EmployeeWithBoss)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**EmployeeWithBoss**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Ota va Bola jadvallarini yarating va [ref: > Ota.pk] bilan bog'lang",
    "hint": "1:* munosabatda Tashqi Kalit (FK) har doim bola jadvaliga qo'yiladi va ota jadvalning PK siga havola qiladi.",
    "solutions": [
      "Table EmployeeWithBoss { empNo int [pk] name varchar supervisorId int [ref: > EmployeeWithBoss.empNo] }",
      "EmployeeWithBoss(empNo [PK], name, supervisorId [FK -> EmployeeWithBoss])"
    ],
    "expectedSchema": {
      "tableName": "EmployeeWithBoss",
      "columns": [
        {
          "name": "empNo",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "name",
          "type": "varchar(80)"
        },
        {
          "name": "supervisorId",
          "type": "integer",
          "isFK": true,
          "references": "EmployeeWithBoss(empNo)"
        }
      ]
    },
    "explanation": "O'z-o'ziga bog'lanuvchi rekursiv 1:* sxema loyihalandi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**EmployeeWithBoss**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
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
    "id": 43,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "source": "L02 Slide 36 • Recursive Category Tree",
    "title": "Rekursiv Kategoriya Daraxti (CategoryTree)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**CategoryTree**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Ota va Bola jadvallarini yarating va [ref: > Ota.pk] bilan bog'lang",
    "hint": "1:* munosabatda Tashqi Kalit (FK) har doim bola jadvaliga qo'yiladi va ota jadvalning PK siga havola qiladi.",
    "solutions": [
      "Table CategoryTree { catId int [pk] title varchar parentCatId int [ref: > CategoryTree.catId] }",
      "CategoryTree(catId [PK], title, parentCatId [FK -> CategoryTree])"
    ],
    "expectedSchema": {
      "tableName": "CategoryTree",
      "columns": [
        {
          "name": "catId",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "title",
          "type": "varchar(60)"
        },
        {
          "name": "parentCatId",
          "type": "integer",
          "isFK": true,
          "references": "CategoryTree(catId)"
        }
      ]
    },
    "explanation": "Kategoriya daraxti rekursiv bog'landi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**CategoryTree**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
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
    "id": 44,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "source": "L02 Slide 36 • Warehouse-Pallet 1:*",
    "title": "Ombor va Palletlar 1:* Sxemasi (Warehouse -> Pallet)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nMazkur vazifada ixtisoslashuv / umumlashtirish (Subclass / Superclass) yoki kompozit tuzilmalar keltirilgan. Tutorial 2 Task 2 dagi Option 8A, 8B, 8C yoki 8D usullaridan tegishli shartlar asosida to'g'ri relyatsion jadvallar to'plamini shakllantirish talab etiladi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Ota va Bola jadvallarini yarating va [ref: > Ota.pk] bilan bog'lang",
    "hint": "1:* munosabatda Tashqi Kalit (FK) har doim bola jadvaliga qo'yiladi va ota jadvalning PK siga havola qiladi.",
    "solutions": [
      "Table Warehouse { whId int [pk] location varchar } Table Pallet { palletId int [pk] weight decimal whId int [ref: > Warehouse.whId] }",
      "Warehouse(whId [PK], location)\nPallet(palletId [PK], weight, whId [FK -> Warehouse])"
    ],
    "expectedSchema": {
      "tables": [
        {
          "tableName": "Warehouse",
          "columns": [
            {
              "name": "whId",
              "type": "integer",
              "isPK": true
            },
            {
              "name": "location",
              "type": "varchar(50)"
            }
          ]
        },
        {
          "tableName": "Pallet",
          "columns": [
            {
              "name": "palletId",
              "type": "integer",
              "isPK": true
            },
            {
              "name": "weight",
              "type": "decimal"
            },
            {
              "name": "whId",
              "type": "integer",
              "isFK": true,
              "references": "Warehouse(whId)"
            }
          ]
        }
      ]
    },
    "explanation": "Warehouse va Pallet 1:* sxemasi yaratildi.",
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
    "id": 45,
    "sector": 3,
    "difficulty": "3-Qavat • Qiyin (3-Qavat Bossi)",
    "source": "T02 Task 1 • Floor 3 Boss",
    "title": "3-Qavat Bossi: Korporativ Bo'lim va Xodimlar Sxemasi",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nMazkur vazifada ixtisoslashuv / umumlashtirish (Subclass / Superclass) yoki kompozit tuzilmalar keltirilgan. Tutorial 2 Task 2 dagi Option 8A, 8B, 8C yoki 8D usullaridan tegishli shartlar asosida to'g'ri relyatsion jadvallar to'plamini shakllantirish talab etiladi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Ota va Bola jadvallarini yarating va [ref: > Ota.pk] bilan bog'lang",
    "hint": "1:* munosabatda Tashqi Kalit (FK) har doim bola jadvaliga qo'yiladi va ota jadvalning PK siga havola qiladi.",
    "solutions": [
      "Table Department { deptNo int [pk] dName varchar budget decimal } Table Employee { empNo int [pk] fName varchar lName varchar salary decimal deptNo int [not null, ref: > Department.deptNo] }",
      "Department(deptNo [PK], dName, budget)\nEmployee(empNo [PK], fName, lName, salary, deptNo [FK, NN -> Department])"
    ],
    "expectedSchema": {
      "tables": [
        {
          "tableName": "Department",
          "columns": [
            {
              "name": "deptNo",
              "type": "integer",
              "isPK": true
            },
            {
              "name": "dName",
              "type": "varchar(50)"
            },
            {
              "name": "budget",
              "type": "decimal"
            }
          ]
        },
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
            },
            {
              "name": "salary",
              "type": "decimal"
            },
            {
              "name": "deptNo",
              "type": "integer",
              "isFK": true,
              "isNotNull": true,
              "references": "Department(deptNo)"
            }
          ]
        }
      ]
    },
    "explanation": "3-Qavat Bossi: Department va Employee 1:* me'moriy relyatsion sxemasi mukammal loyihalandi.",
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
    "id": 46,
    "sector": 4,
    "difficulty": "4-Qavat • Boshlang'ich",
    "source": "T02 Task 1 & L02 Slide 35 • Child Weak Entity",
    "title": "Farzand Zaif Entitiyasi Jadvali (Child)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**Child**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Ota jadval va [PK,FK1] kompozit kalitli zaif bola jadvalini yarating",
    "hint": "Zaif entitiyning kaliti = (Ota_PK + Qisman_Kalit). Shuning uchun ota kaliti ham PK, ham FK bo'ladi.",
    "solutions": [
      "Table Child { empNo int [ref: > Employee.empNo] name varchar age int indexes { (empNo, name) [pk] } }",
      "Child(empNo [PK, FK], name [PK], age)",
      "Child(empNo*, name*, age)"
    ],
    "expectedSchema": {
      "tableName": "Child",
      "columns": [
        {
          "name": "empNo",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Employee(empNo)"
        },
        {
          "name": "name",
          "type": "varchar(50)",
          "isPK": true
        },
        {
          "name": "age",
          "type": "integer"
        }
      ]
    },
    "explanation": "Child zaif entitiyasi Step 2 qoidasiga binoan (empNo, name) kompozit kaliti bilan chizildi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**Child**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
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
    "id": 47,
    "sector": 4,
    "difficulty": "4-Qavat • O'rta",
    "source": "L02 Slide 35 • OrderLine Weak Entity",
    "title": "Buyurtma Qatori Zaif Entitiyasi (OrderLine)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**OrderLine**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Ota jadval va [PK,FK1] kompozit kalitli zaif bola jadvalini yarating",
    "hint": "Zaif entitiyning kaliti = (Ota_PK + Qisman_Kalit). Shuning uchun ota kaliti ham PK, ham FK bo'ladi.",
    "solutions": [
      "Table OrderLine { orderNo int [ref: > Order.orderNo] lineNo int itemCode varchar quantity int indexes { (orderNo, lineNo) [pk] } }",
      "OrderLine(orderNo [PK, FK], lineNo [PK], itemCode, quantity)"
    ],
    "expectedSchema": {
      "tableName": "OrderLine",
      "columns": [
        {
          "name": "orderNo",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Order(orderNo)"
        },
        {
          "name": "lineNo",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "itemCode",
          "type": "varchar(20)"
        },
        {
          "name": "quantity",
          "type": "integer"
        }
      ]
    },
    "explanation": "OrderLine zaif entitiyasi kompozit kalit bilan loyihalandi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**OrderLine**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
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
    "id": 48,
    "sector": 4,
    "difficulty": "4-Qavat • O'rta",
    "source": "L02 Slide 35 • Room Weak Entity",
    "title": "Mehmonxona Xonasi Zaif Entitiyasi (Room)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**Room**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Ota jadval va [PK,FK1] kompozit kalitli zaif bola jadvalini yarating",
    "hint": "Zaif entitiyning kaliti = (Ota_PK + Qisman_Kalit). Shuning uchun ota kaliti ham PK, ham FK bo'ladi.",
    "solutions": [
      "Table Room { hotelNo varchar [ref: > Hotel.hotelNo] roomNo varchar roomType varchar pricePerNight decimal indexes { (hotelNo, roomNo) [pk] } }",
      "Room(hotelNo [PK, FK], roomNo [PK], roomType, pricePerNight)"
    ],
    "expectedSchema": {
      "tableName": "Room",
      "columns": [
        {
          "name": "hotelNo",
          "type": "varchar(10)",
          "isPK": true,
          "isFK": true,
          "references": "Hotel(hotelNo)"
        },
        {
          "name": "roomNo",
          "type": "varchar(10)",
          "isPK": true
        },
        {
          "name": "roomType",
          "type": "varchar(30)"
        },
        {
          "name": "pricePerNight",
          "type": "decimal"
        }
      ]
    },
    "explanation": "Room zaif entitiyasi loyihalandi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**Room**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
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
    "id": 49,
    "sector": 4,
    "difficulty": "4-Qavat • O'rta",
    "source": "L02 Slide 35 • Building Floor Weak Entity",
    "title": "Bino Qavati Zaif Entitiyasi (Floor)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**Floor**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Ota jadval va [PK,FK1] kompozit kalitli zaif bola jadvalini yarating",
    "hint": "Zaif entitiyning kaliti = (Ota_PK + Qisman_Kalit). Shuning uchun ota kaliti ham PK, ham FK bo'ladi.",
    "solutions": [
      "Table Floor { buildingId varchar [ref: > Building.buildingId] floorNo int usableArea decimal indexes { (buildingId, floorNo) [pk] } }",
      "Floor(buildingId [PK, FK], floorNo [PK], usableArea)"
    ],
    "expectedSchema": {
      "tableName": "Floor",
      "columns": [
        {
          "name": "buildingId",
          "type": "varchar(10)",
          "isPK": true,
          "isFK": true,
          "references": "Building(buildingId)"
        },
        {
          "name": "floorNo",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "usableArea",
          "type": "decimal"
        }
      ]
    },
    "explanation": "Floor zaif entitiyasi chizildi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**Floor**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
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
    "id": 50,
    "sector": 4,
    "difficulty": "4-Qavat • O'rta",
    "source": "L02 Slide 35 • Client Preference Weak Entity",
    "title": "Darslikdagi Preference Zaif Entitiyasi (Preference)",
    "story": "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.\n\nUshbu masalada kuchli mustaqil entitiy (**Preference**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.\n\nSiz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.",
    "taskUz": "a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).\nb) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.\nc) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.\nd) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.",
    "starterCode": "// Ota jadval va [PK,FK1] kompozit kalitli zaif bola jadvalini yarating",
    "hint": "Zaif entitiyning kaliti = (Ota_PK + Qisman_Kalit). Shuning uchun ota kaliti ham PK, ham FK bo'ladi.",
    "solutions": [
      "Table Preference { clientNo varchar [ref: > Client.clientNo] prefType varchar maxRent decimal indexes { (clientNo, prefType) [pk] } }",
      "Preference(clientNo [PK, FK], prefType [PK], maxRent)"
    ],
    "expectedSchema": {
      "tableName": "Preference",
      "columns": [
        {
          "name": "clientNo",
          "type": "varchar(10)",
          "isPK": true,
          "isFK": true,
          "references": "Client(clientNo)"
        },
        {
          "name": "prefType",
          "type": "varchar(30)",
          "isPK": true
        },
        {
          "name": "maxRent",
          "type": "decimal"
        }
      ]
    },
    "explanation": "Preference zaif entitiyasi Step 2 ga muvofiq chizildi.",
    "caseStudy": {
      "paragraphs": [
        "**Tutorial 02: Relational Model Mapping Standards**\nYuqorida keltirilgan **\"Berilgan Konseptual ER / EER Diagrammasi (Manba)\"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.",
        "Ushbu masalada kuchli mustaqil entitiy (**Preference**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.",
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
