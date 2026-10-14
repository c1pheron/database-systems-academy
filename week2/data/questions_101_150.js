// ============================================================================
// ACADEMY DATABASE SYSTEMS (MODULE) — WEEK 2: QUESTIONS 101 TO 150
// Floors 7 (cont.), 8, 9, 10: 100% Practical Relational Schema & Table Design Challenges
// Chained Multi-tier Systems, Recursive Trees, Step 7 Ternary, EER 8A-8D & Master Boss
// ============================================================================

var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);

_scope.QUESTIONS_101_150 = [
  // ==========================================================================
  // 7-QAVAT DAVOMI (101–105): *:* BOG'LOVCHI VA KO'P QIYMATLI ATRIBUT JADVALLARI
  // ==========================================================================
  {
    id: 101,
    sector: 7,
    difficulty: "7-Qavat • O'rta",
    source: "T02 Page 3 & L02 Slide 38 • WorksOn Bridge Table",
    title: "Xodim va Loyiha Bog'lovchi Jadvali (WorksOn)",
    story: "Kompaniyada xodimlar va loyihalar o'rtasida ko'pdan-ko'pga (*:*) munosabat mavjud. Har bir xodim loyihada ma'lum soat `hours` ishlaydi.",
    taskUz: "`WorksOn` jadvalini chizing: `(empNo, projNo)` [PK] (empNo [FK], projNo [FK]) va `hours` ustunlari bilan. empNo Employee.empNo ga, projNo Project.projNo ga yo'naltirilsin.",
    starterCode: "Table WorksOn {\n  empNo int [ref: > Employee.empNo]\n  projNo int [ref: > Project.projNo]\n  hours decimal\n  indexes {\n    (empNo, projNo) [pk]\n  }\n}",
    hint: "empNo va projNo birgalikda kompozit [PK] bo'ladi va har biri o'z ota jadvaliga [FK] bo'ladi.",
    solutions: [
      "Table WorksOn { empNo int [ref: > Employee.empNo] projNo int [ref: > Project.projNo] hours decimal indexes { (empNo, projNo) [pk] } }",
      "WorksOn(empNo [PK, FK], projNo [PK, FK], hours)"
    ],
    expectedSchema: {
      tableName: "WorksOn",
      columns: [
        { name: "empNo", type: "integer", isPK: true, isFK: true, references: "Employee(empNo)" },
        { name: "projNo", type: "integer", isPK: true, isFK: true, references: "Project(projNo)" },
        { name: "hours", type: "decimal" }
      ]
    },
    explanation: "WorksOn oraliq jadvali (empNo, projNo) kompozit PK va hours atributi bilan to'liq loyihalandi."
  },
  {
    id: 102,
    sector: 7,
    difficulty: "7-Qavat • O'rta",
    source: "L02 Slide 38 • Student Course Enrollment Bridge",
    title: "Talaba va Kurs Ro'yxatdan O'tish Jadvali (Enrollment)",
    story: "Universitetda talaba `Student(studentId)` ko'plab fanlarga yoziladi, fan `Course(courseId)` ko'plab talabalarga ega. Aloqa atributlari: yozilgan sana `enrollDate` va yakuniy ball `finalGrade`.",
    taskUz: "`Enrollment` jadvalini chizing: `(studentId, courseId)` [PK] (studentId [FK], courseId [FK]), `enrollDate` va `finalGrade` ustunlari bilan.",
    starterCode: "Table Enrollment {\n  studentId int [ref: > Student.studentId]\n  courseId varchar [ref: > Course.courseId]\n  enrollDate date\n  finalGrade varchar\n  indexes {\n    (studentId, courseId) [pk]\n  }\n}",
    hint: "studentId va courseId kompozit [PK] bo'lib, ikkalasi ham tashqi kalit hisoblanadi.",
    solutions: [
      "Table Enrollment { studentId int [ref: > Student.studentId] courseId varchar [ref: > Course.courseId] enrollDate date finalGrade varchar indexes { (studentId, courseId) [pk] } }",
      "Enrollment(studentId [PK, FK], courseId [PK, FK], enrollDate, finalGrade)"
    ],
    expectedSchema: {
      tableName: "Enrollment",
      columns: [
        { name: "studentId", type: "integer", isPK: true, isFK: true, references: "Student(studentId)" },
        { name: "courseId", type: "varchar(10)", isPK: true, isFK: true, references: "Course(courseId)" },
        { name: "enrollDate", type: "date" },
        { name: "finalGrade", type: "varchar(5)" }
      ]
    },
    explanation: "Enrollment *:* oraliq jadvali to'g'ri loyihalandi."
  },
  {
    id: 103,
    sector: 7,
    difficulty: "7-Qavat • O'rta",
    source: "L02 Slide 38 • Date Attribute on Bridge Relation",
    title: "Sana Atributli Tayinlash Jadvali (Assigned)",
    story: "Kompaniyada xodim va loyiha o'rtasida `Assigned` aloqasi tayinlangan sana `assignedDate` va rol `roleTitle` atributlariga ega.",
    taskUz: "`Assigned` jadvalini chizing: `(empNo, projNo)` [PK] (empNo [FK], projNo [FK]), `assignedDate` va `roleTitle` ustunlari bilan.",
    starterCode: "Table Assigned {\n  empNo int [ref: > Employee.empNo]\n  projNo int [ref: > Project.projNo]\n  assignedDate date\n  roleTitle varchar\n  indexes {\n    (empNo, projNo) [pk]\n  }\n}",
    hint: "Assigned jadvali empNo va projNo kompozit PK va aloqa atributlarini saqlaydi.",
    solutions: [
      "Table Assigned { empNo int [ref: > Employee.empNo] projNo int [ref: > Project.projNo] assignedDate date roleTitle varchar indexes { (empNo, projNo) [pk] } }",
      "Assigned(empNo [PK, FK], projNo [PK, FK], assignedDate, roleTitle)"
    ],
    expectedSchema: {
      tableName: "Assigned",
      columns: [
        { name: "empNo", type: "integer", isPK: true, isFK: true, references: "Employee(empNo)" },
        { name: "projNo", type: "integer", isPK: true, isFK: true, references: "Project(projNo)" },
        { name: "assignedDate", type: "date" },
        { name: "roleTitle", type: "varchar(50)" }
      ]
    },
    explanation: "assignedDate va roleTitle atributlari Assigned bog'lovchi relatsiyasiga muvaffaqiyatli joylashtirildi."
  },
  {
    id: 104,
    sector: 7,
    difficulty: "7-Qavat • O'rta",
    source: "L02 Slide 40 • Multi-valued Author Awards",
    title: "Muallif Mukofotlari Ko'p Qiymatli Jadvali (AuthorAward)",
    story: "Kitob muallifi bir nechta mukofotlarga sazovor bo'lgan `Award[*]`. 1NF talabiga binoan ushbu ko'p qiymatli atribut alohida jadvalga ajratiladi.",
    taskUz: "`AuthorAward` jadvalini chizing: `(authorId, awardName)` [PK] (authorId [FK]) va `awardYear` ustunlari bilan. authorId Author.authorId ga yo'naltirilsin.",
    starterCode: "Table AuthorAward {\n  authorId int [ref: > Author.authorId]\n  awardName varchar\n  awardYear int\n  indexes {\n    (authorId, awardName) [pk]\n  }\n}",
    hint: "authorId va awardName birgalikda kompozit [PK] bo'ladi.",
    solutions: [
      "Table AuthorAward { authorId int [ref: > Author.authorId] awardName varchar awardYear int indexes { (authorId, awardName) [pk] } }",
      "AuthorAward(authorId [PK, FK], awardName [PK], awardYear)"
    ],
    expectedSchema: {
      tableName: "AuthorAward",
      columns: [
        { name: "authorId", type: "integer", isPK: true, isFK: true, references: "Author(authorId)" },
        { name: "awardName", type: "varchar(100)", isPK: true },
        { name: "awardYear", type: "integer" }
      ]
    },
    explanation: "AuthorAward ko'p qiymatli atribut jadvali 1NF qoidasi bo'yicha chizildi."
  },
  {
    id: 105,
    sector: 7,
    difficulty: "7-Qavat • Qiyin (7-Qavat Bossi)",
    source: "L02 Slide 38 • Supplies Many-to-Many Boss",
    title: "7-Qavat Bossi: Ta'minotchi va Mahsulot (Supplies)",
    story: "Ta'minotchi `Supplier(suppId)` va mahsulot `Product(prodId)` o'rtasida `Supplies` *:* munosabati bor. Aloqa xususiyatlari: narx `unitPrice` va minimal buyurtma miqdori `minQuantity`.",
    taskUz: "`Supplies` oraliq jadvalini chizing: `(suppId, prodId)` [PK] (suppId [FK], prodId [FK]), `unitPrice` va `minQuantity` ustunlari bilan.",
    starterCode: "Table Supplies {\n  suppId varchar [ref: > Supplier.suppId]\n  prodId varchar [ref: > Product.prodId]\n  unitPrice decimal\n  minQuantity int\n  indexes {\n    (suppId, prodId) [pk]\n  }\n}",
    hint: "suppId va prodId kompozit [PK] bo'ladi va ota jadvallarga havolalanadi.",
    solutions: [
      "Table Supplies { suppId varchar [ref: > Supplier.suppId] prodId varchar [ref: > Product.prodId] unitPrice decimal minQuantity int indexes { (suppId, prodId) [pk] } }",
      "Supplies(suppId [PK, FK], prodId [PK, FK], unitPrice, minQuantity)"
    ],
    expectedSchema: {
      tableName: "Supplies",
      columns: [
        { name: "suppId", type: "varchar(10)", isPK: true, isFK: true, references: "Supplier(suppId)" },
        { name: "prodId", type: "varchar(20)", isPK: true, isFK: true, references: "Product(prodId)" },
        { name: "unitPrice", type: "decimal" },
        { name: "minQuantity", type: "integer" }
      ]
    },
    explanation: "7-Qavat Bossi: Supplies oraliq relatsiyasi kompozit PK va atributlari bilan to'liq tuzildi."
  },

  // ==========================================================================
  // 8-QAVAT (106–120): KO'P BOSQICHLI ZANJIRLAR & REKURSIZ JADVALLAR
  // ==========================================================================
  {
    id: 106,
    sector: 8,
    difficulty: "8-Qavat • Boshlang'ich",
    source: "L02 Slide 36 • Chained 1:* Hierarchy Step 3",
    title: "Kompaniya va Bo'linma Zanjiri (Company & Division)",
    story: "Xoldingda har bir kompaniya `Company(companyId, compName)` bir nechta bo'linmalarga `Division(divisionId, companyId, divName)` ega.",
    taskUz: "Ikkala jadvalni chizing: `Company` (companyId [PK], compName) va `Division` (divisionId [PK], companyId [FK], divName). Division.companyId Company.companyId ga bog'lansin.",
    starterCode: "Table Company {\n  companyId int [pk]\n  compName varchar\n}\n\nTable Division {\n  divisionId int [pk]\n  companyId int [ref: > Company.companyId]\n  divName varchar\n}",
    hint: "Company ota jadval, Division esa companyId [FK] ga ega bo'lgan bola jadval.",
    solutions: [
      "Table Company { companyId int [pk] compName varchar } Table Division { divisionId int [pk] companyId int [ref: > Company.companyId] divName varchar }",
      "Company(companyId [PK], compName)\nDivision(divisionId [PK], companyId [FK], divName)"
    ],
    expectedSchema: {
      tables: [
        {
          tableName: "Company",
          columns: [
            { name: "companyId", type: "integer", isPK: true },
            { name: "compName", type: "varchar(80)" }
          ]
        },
        {
          tableName: "Division",
          columns: [
            { name: "divisionId", type: "integer", isPK: true },
            { name: "companyId", type: "integer", isFK: true, references: "Company(companyId)" },
            { name: "divName", type: "varchar(80)" }
          ]
        }
      ]
    },
    explanation: "Company va Division zanjirli 1:* relyatsion modeli qurildi."
  },
  {
    id: 107,
    sector: 8,
    difficulty: "8-Qavat • O'rta",
    source: "L02 Slide 36 • 3-Tier Enterprise Hierarchy",
    title: "3 Bosqichli Korporativ Zanjir (Company -> Division -> Department)",
    story: "Korporatsiya ierarxiyasi 3 pog'onali: Kompaniya -> Bo'linma -> Bo'lim `Department(deptId, divisionId, dName)`.",
    taskUz: "Bo'lim jadvalini chizing: `Department` (deptId [PK], divisionId [FK], dName). divisionId Division.divisionId ga yo'naltirilsin.",
    starterCode: "Table Department {\n  deptId int [pk]\n  divisionId int [ref: > Division.divisionId]\n  dName varchar\n}",
    hint: "Department jadvalida deptId [PK] va divisionId [FK] bo'ladi.",
    solutions: [
      "Table Department { deptId int [pk] divisionId int [ref: > Division.divisionId] dName varchar }",
      "Department(deptId [PK], divisionId [FK], dName)"
    ],
    expectedSchema: {
      tableName: "Department",
      columns: [
        { name: "deptId", type: "integer", isPK: true },
        { name: "divisionId", type: "integer", isFK: true, references: "Division(divisionId)" },
        { name: "dName", type: "varchar(50)" }
      ]
    },
    explanation: "3 bosqichli korporativ zanjirning uchinchi pog'onasi Department jadvali loyihalandi."
  },
  {
    id: 108,
    sector: 8,
    difficulty: "8-Qavat • O'rta",
    source: "L02 Slide 36 • Multi-tier Branch & Staff",
    title: "Filial va Xodim Zanjiri (Branch -> Employee)",
    story: "Bank filiali `Branch(branchId)` va uning xodimlari `Employee(empId, branchId, fullName, salary)` o'rtasidagi 1:* bog'liqlik.",
    taskUz: "`Employee` jadvalini chizing: `empId` [PK], `branchId` [FK], `fullName` va `salary` ustunlari bilan. branchId Branch.branchId ga bog'lansin.",
    starterCode: "Table Employee {\n  empId int [pk]\n  branchId int [ref: > Branch.branchId]\n  fullName varchar\n  salary decimal\n}",
    hint: "Employee jadvaliga branchId [FK] ni joylashtiring.",
    solutions: [
      "Table Employee { empId int [pk] branchId int [ref: > Branch.branchId] fullName varchar salary decimal }",
      "Employee(empId [PK], branchId [FK], fullName, salary)"
    ],
    expectedSchema: {
      tableName: "Employee",
      columns: [
        { name: "empId", type: "integer", isPK: true },
        { name: "branchId", type: "integer", isFK: true, references: "Branch(branchId)" },
        { name: "fullName", type: "varchar(70)" },
        { name: "salary", type: "decimal" }
      ]
    },
    explanation: "Employee bola jadvali ota Branch ga branchId [FK] bilan muvaffaqiyatli ulandi."
  },
  {
    id: 109,
    sector: 8,
    difficulty: "8-Qavat • O'rta",
    source: "L02 Slide 37 • Recursive 1:* Supervisor Relationship",
    title: "O'z-O'ziga Bog'lanuvchi Rahbarlik Jadvali (Employee Supervisor)",
    story: "Kompaniyada xodim `Employee` boshqa xodimlarga rahbar `managerId` bo'lishi mumkin. Bu 1:* rekursiv (unitar) munosabatdir.",
    taskUz: "`Employee` rekursiv jadvalini chizing: `empNo` [PK], `fullName`, `managerId` [FK] va `salary`. managerId o'sha Employee.empNo ga yo'naltirilsin.",
    starterCode: "Table Employee {\n  empNo int [pk]\n  fullName varchar\n  managerId int [ref: > Employee.empNo]\n  salary decimal\n}",
    hint: "managerId aynan shu Employee jadvalining empNo ustuniga [FK] bo'ladi.",
    solutions: [
      "Table Employee { empNo int [pk] fullName varchar managerId int [ref: > Employee.empNo] salary decimal }",
      "Employee(empNo [PK], fullName, managerId [FK], salary)"
    ],
    expectedSchema: {
      tableName: "Employee",
      columns: [
        { name: "empNo", type: "integer", isPK: true },
        { name: "fullName", type: "varchar(60)" },
        { name: "managerId", type: "integer", isFK: true, references: "Employee(empNo)" },
        { name: "salary", type: "decimal" }
      ]
    },
    explanation: "Rekursiv supervisor bog'liqligi o'z-o'ziga qaragan managerId [FK] bilan to'g'ri loyihalandi."
  },
  {
    id: 110,
    sector: 8,
    difficulty: "8-Qavat • O'rta",
    source: "L02 Slide 37 • Recursive Category Tree",
    title: "Rekursiv Katalog Daraxti (Category Tree)",
    story: "E-tijorat do'konida toifalar ierarxik daraxt hosil qiladi: har bir toifa `Category` o'z ota toifasi `parentCatId` ga havola qiladi (bosh toifalar uchun u NULL bo'ladi).",
    taskUz: "`Category` rekursiv jadvalini chizing: `categoryId` [PK], `catName`, `parentCatId` [FK] va `sortOrder` ustunlari bilan.",
    starterCode: "Table Category {\n  categoryId int [pk]\n  catName varchar\n  parentCatId int [ref: > Category.categoryId]\n  sortOrder int\n}",
    hint: "parentCatId Category.categoryId ga [FK] havolasi bo'ladi.",
    solutions: [
      "Table Category { categoryId int [pk] catName varchar parentCatId int [ref: > Category.categoryId] sortOrder int }",
      "Category(categoryId [PK], catName, parentCatId [FK], sortOrder)"
    ],
    expectedSchema: {
      tableName: "Category",
      columns: [
        { name: "categoryId", type: "integer", isPK: true },
        { name: "catName", type: "varchar(50)" },
        { name: "parentCatId", type: "integer", isFK: true, references: "Category(categoryId)" },
        { name: "sortOrder", type: "integer" }
      ]
    },
    explanation: "Category rekursiv daraxt tuzilmasi loyihalandi."
  },
  {
    id: 111,
    sector: 8,
    difficulty: "8-Qavat • Qiyin",
    source: "L02 Slide 38 • Bill of Materials (BOM) Recursive *:*",
    title: "Detal va Yig'ma Qismlar Rekursiv *:* Jadvali (PartAssembly)",
    story: "Zavodda detal `Part(partNo)` boshqa detallardan tashkil topishi va o'zi ham boshqa yirik detallar tarkibiga kirishi mumkin (Bill of Materials).",
    taskUz: "`PartAssembly` oraliq jadvalini chizing: `(parentPartNo, childPartNo)` [PK] (parentPartNo [FK], childPartNo [FK]) va `quantity` ustunlari bilan.",
    starterCode: "Table PartAssembly {\n  parentPartNo varchar [ref: > Part.partNo]\n  childPartNo varchar [ref: > Part.partNo]\n  quantity int\n  indexes {\n    (parentPartNo, childPartNo) [pk]\n  }\n}",
    hint: "parentPartNo va childPartNo kompozit [PK] bo'ladi va ikkalasi ham Part.partNo ga [FK] bo'ladi.",
    solutions: [
      "Table PartAssembly { parentPartNo varchar [ref: > Part.partNo] childPartNo varchar [ref: > Part.partNo] quantity int indexes { (parentPartNo, childPartNo) [pk] } }",
      "PartAssembly(parentPartNo [PK, FK], childPartNo [PK, FK], quantity)"
    ],
    expectedSchema: {
      tableName: "PartAssembly",
      columns: [
        { name: "parentPartNo", type: "varchar(20)", isPK: true, isFK: true, references: "Part(partNo)" },
        { name: "childPartNo", type: "varchar(20)", isPK: true, isFK: true, references: "Part(partNo)" },
        { name: "quantity", type: "integer" }
      ]
    },
    explanation: "Bill of Materials (BOM) rekursiv ko'pdan-ko'pga munosabati oraliq jadval yordamida to'liq hal qilindi."
  },
  {
    id: 112,
    sector: 8,
    difficulty: "8-Qavat • O'rta",
    source: "L02 Slide 36 • University Hierarchy (Faculty -> Dept -> Course)",
    title: "Universitet Fanlar Zanjiri (Course)",
    story: "Universitetda fakultet ostida kafedra `Department`, kafedra ostida esa o'quv fani `Course(courseCode, deptId, title, credits)` joylashgan.",
    taskUz: "`Course` jadvalini chizing: `courseCode` [PK], `deptId` [FK], `title` va `credits` ustunlari bilan. deptId Department.deptId ga yo'naltirilsin.",
    starterCode: "Table Course {\n  courseCode varchar [pk]\n  deptId int [ref: > Department.deptId]\n  title varchar\n  credits int\n}",
    hint: "courseCode [PK], deptId [FK] Department.deptId ga.",
    solutions: [
      "Table Course { courseCode varchar [pk] deptId int [ref: > Department.deptId] title varchar credits int }",
      "Course(courseCode [PK], deptId [FK], title, credits)"
    ],
    expectedSchema: {
      tableName: "Course",
      columns: [
        { name: "courseCode", type: "varchar(10)", isPK: true },
        { name: "deptId", type: "integer", isFK: true, references: "Department(deptId)" },
        { name: "title", type: "varchar(80)" },
        { name: "credits", type: "integer" }
      ]
    },
    explanation: "Course jadvali kafedraga bog'langan holda loyihalandi."
  },
  {
    id: 113,
    sector: 8,
    difficulty: "8-Qavat • O'rta",
    source: "L02 Slide 36 • Warehouse Shelf Slot Hierarchy",
    title: "Ombor Tokcha Yacheykasi (ShelfSlot)",
    story: "Logistika markazida: Ombor `Warehouse` -> Qator `Aisle(aisleId)` -> Tokcha yacheykasi `ShelfSlot(slotId, aisleId, slotCode, maxWeight)`.",
    taskUz: "`ShelfSlot` jadvalini chizing: `slotId` [PK], `aisleId` [FK], `slotCode` va `maxWeight` ustunlari bilan. aisleId Aisle.aisleId ga bog'lansin.",
    starterCode: "Table ShelfSlot {\n  slotId int [pk]\n  aisleId int [ref: > Aisle.aisleId]\n  slotCode varchar\n  maxWeight decimal\n}",
    hint: "slotId [PK], aisleId [FK] qilib loyihalang.",
    solutions: [
      "Table ShelfSlot { slotId int [pk] aisleId int [ref: > Aisle.aisleId] slotCode varchar maxWeight decimal }",
      "ShelfSlot(slotId [PK], aisleId [FK], slotCode, maxWeight)"
    ],
    expectedSchema: {
      tableName: "ShelfSlot",
      columns: [
        { name: "slotId", type: "integer", isPK: true },
        { name: "aisleId", type: "integer", isFK: true, references: "Aisle(aisleId)" },
        { name: "slotCode", type: "varchar(20)" },
        { name: "maxWeight", type: "decimal" }
      ]
    },
    explanation: "ShelfSlot ombor ierarxiyasining quyi jadvali sifatida yaratildi."
  },
  {
    id: 114,
    sector: 8,
    difficulty: "8-Qavat • O'rta",
    source: "L02 Slide 38 • Course Prerequisite Recursive *:*",
    title: "Fan Prerekviziti Rekursiv *:* Jadvali (Prerequisite)",
    story: "Bir fanni o'rganish uchun boshqa fanni oldindan tugatgan bo'lish talab qilinishi mumkin `Course(courseCode)`. Bu rekursiv ko'pdan-ko'pga munosabatdir.",
    taskUz: "`Prerequisite` oraliq jadvalini chizing: `(courseCode, prereqCode)` [PK] (courseCode [FK], prereqCode [FK]). Ikkalasi ham Course.courseCode ga yo'naltirilsin.",
    starterCode: "Table Prerequisite {\n  courseCode varchar [ref: > Course.courseCode]\n  prereqCode varchar [ref: > Course.courseCode]\n  indexes {\n    (courseCode, prereqCode) [pk]\n  }\n}",
    hint: "courseCode va prereqCode ikkalasi ham [PK] va Course.courseCode ga [FK].",
    solutions: [
      "Table Prerequisite { courseCode varchar [ref: > Course.courseCode] prereqCode varchar [ref: > Course.courseCode] indexes { (courseCode, prereqCode) [pk] } }",
      "Prerequisite(courseCode [PK, FK], prereqCode [PK, FK])"
    ],
    expectedSchema: {
      tableName: "Prerequisite",
      columns: [
        { name: "courseCode", type: "varchar(10)", isPK: true, isFK: true, references: "Course(courseCode)" },
        { name: "prereqCode", type: "varchar(10)", isPK: true, isFK: true, references: "Course(courseCode)" }
      ]
    },
    explanation: "Prerequisite rekursiv oraliq jadvali loyihalandi."
  },
  {
    id: 115,
    sector: 8,
    difficulty: "8-Qavat • O'rta",
    source: "L02 Slide 36 • Hospital Ward Bed Multi-tier",
    title: "Shifoxona Koyka O'rni (Bed)",
    story: "Klinikada: Shifoxona -> Bino -> Palata `Ward(wardId)` -> Koyka o'rni `Bed(bedId, wardId, bedNumber, isOccupied)`.",
    taskUz: "`Bed` jadvalini chizing: `bedId` [PK], `wardId` [FK], `bedNumber` va `isOccupied` ustunlari bilan. wardId Ward.wardId ga yo'naltirilsin.",
    starterCode: "Table Bed {\n  bedId int [pk]\n  wardId int [ref: > Ward.wardId]\n  bedNumber varchar\n  isOccupied boolean\n}",
    hint: "bedId [PK], wardId [FK] qilib Ward jadvaliga ulang.",
    solutions: [
      "Table Bed { bedId int [pk] wardId int [ref: > Ward.wardId] bedNumber varchar isOccupied boolean }",
      "Bed(bedId [PK], wardId [FK], bedNumber, isOccupied)"
    ],
    expectedSchema: {
      tableName: "Bed",
      columns: [
        { name: "bedId", type: "integer", isPK: true },
        { name: "wardId", type: "integer", isFK: true, references: "Ward(wardId)" },
        { name: "bedNumber", type: "varchar(10)" },
        { name: "isOccupied", type: "boolean" }
      ]
    },
    explanation: "Bed jadvali shifoxona ierarxiyasi bilan bog'landi."
  },
  {
    id: 116,
    sector: 8,
    difficulty: "8-Qavat • O'rta",
    source: "L02 Slide 36 • Logistics Delivery Route Hierarchy",
    title: "Logistika Yetkazish Yo'nalishi (DeliveryRoute)",
    story: "Yuk tashuvchi kompaniya: Tashuvchi `Carrier` -> Avtomobil `FleetVehicle(vehicleId)` -> Yetkazish yo'nalishi `DeliveryRoute(routeId, vehicleId, destCity, distanceKm)`.",
    taskUz: "`DeliveryRoute` jadvalini chizing: `routeId` [PK], `vehicleId` [FK], `destCity` va `distanceKm` ustunlari bilan. vehicleId FleetVehicle.vehicleId ga bog'lansin.",
    starterCode: "Table DeliveryRoute {\n  routeId int [pk]\n  vehicleId int [ref: > FleetVehicle.vehicleId]\n  destCity varchar\n  distanceKm decimal\n}",
    hint: "routeId [PK], vehicleId [FK] FleetVehicle ga.",
    solutions: [
      "Table DeliveryRoute { routeId int [pk] vehicleId int [ref: > FleetVehicle.vehicleId] destCity varchar distanceKm decimal }",
      "DeliveryRoute(routeId [PK], vehicleId [FK], destCity, distanceKm)"
    ],
    expectedSchema: {
      tableName: "DeliveryRoute",
      columns: [
        { name: "routeId", type: "integer", isPK: true },
        { name: "vehicleId", type: "integer", isFK: true, references: "FleetVehicle(vehicleId)" },
        { name: "destCity", type: "varchar(60)" },
        { name: "distanceKm", type: "decimal" }
      ]
    },
    explanation: "DeliveryRoute jadvali avtopark ierarxiyasiga ulandi."
  },
  {
    id: 117,
    sector: 8,
    difficulty: "8-Qavat • O'rta",
    source: "L02 Slide 37 • Recursive Organization Units",
    title: "Tashkiliy Bo'linmalar Daraxti (OrgUnit Tree)",
    story: "Vazirlikda har bir departament yoki bo'linma `OrgUnit` o'z ota departamentiga `parentUnitId` rekursiv 1:* munosabat bilan birikadi.",
    taskUz: "`OrgUnit` rekursiv jadvalini chizing: `unitId` [PK], `unitName`, `parentUnitId` [FK] va `headTitle` ustunlari bilan. parentUnitId OrgUnit.unitId ga bog'lansin.",
    starterCode: "Table OrgUnit {\n  unitId int [pk]\n  unitName varchar\n  parentUnitId int [ref: > OrgUnit.unitId]\n  headTitle varchar\n}",
    hint: "parentUnitId aynan OrgUnit.unitId ga [FK] bo'ladi.",
    solutions: [
      "Table OrgUnit { unitId int [pk] unitName varchar parentUnitId int [ref: > OrgUnit.unitId] headTitle varchar }",
      "OrgUnit(unitId [PK], unitName, parentUnitId [FK], headTitle)"
    ],
    expectedSchema: {
      tableName: "OrgUnit",
      columns: [
        { name: "unitId", type: "integer", isPK: true },
        { name: "unitName", type: "varchar(80)" },
        { name: "parentUnitId", type: "integer", isFK: true, references: "OrgUnit(unitId)" },
        { name: "headTitle", type: "varchar(60)" }
      ]
    },
    explanation: "OrgUnit daraxt strukturasi rekursiv kalit bilan chizildi."
  },
  {
    id: 118,
    sector: 8,
    difficulty: "8-Qavat • O'rta",
    source: "L02 Slide 36 • Publishing Multi-tier Book Volume",
    title: "Nashriyot Kitob Jildi (BookVolume)",
    story: "Nashriyotda: Nashriyot `Publisher` -> Kitoblar turkumi `BookSeries(seriesId)` -> Alohida jild `BookVolume(volumeId, seriesId, volumeNumber, isbn)`.",
    taskUz: "`BookVolume` jadvalini chizing: `volumeId` [PK], `seriesId` [FK], `volumeNumber` va `isbn` [UQ] ustunlari bilan. seriesId BookSeries.seriesId ga yo'naltirilsin.",
    starterCode: "Table BookVolume {\n  volumeId int [pk]\n  seriesId int [ref: > BookSeries.seriesId]\n  volumeNumber int\n  isbn varchar [unique]\n}",
    hint: "volumeId [PK], seriesId [FK], isbn [UQ] qilib loyihalang.",
    solutions: [
      "Table BookVolume { volumeId int [pk] seriesId int [ref: > BookSeries.seriesId] volumeNumber int isbn varchar [unique] }",
      "BookVolume(volumeId [PK], seriesId [FK], volumeNumber, isbn [UQ])"
    ],
    expectedSchema: {
      tableName: "BookVolume",
      columns: [
        { name: "volumeId", type: "integer", isPK: true },
        { name: "seriesId", type: "integer", isFK: true, references: "BookSeries(seriesId)" },
        { name: "volumeNumber", type: "integer" },
        { name: "isbn", type: "varchar(20)", isUQ: true }
      ]
    },
    explanation: "BookVolume ko'p bosqichli nashriyot tizimiga ulandi."
  },
  {
    id: 119,
    sector: 8,
    difficulty: "8-Qavat • O'rta",
    source: "L02 Slide 36 • Vendor Contract Purchase Order",
    title: "Xarid Buyurtmasi Zanjiri (PurchaseOrder)",
    story: "Ta'minot zanjiri: Yetkazib beruvchi `Vendor` -> Shartnoma `VendorContract(contractId)` -> Buyurtma `PurchaseOrder(orderId, contractId, orderDate, totalAmount)`.",
    taskUz: "`PurchaseOrder` jadvalini chizing: `orderId` [PK], `contractId` [FK], `orderDate` va `totalAmount` ustunlari bilan. contractId VendorContract.contractId ga yo'naltirilsin.",
    starterCode: "Table PurchaseOrder {\n  orderId int [pk]\n  contractId int [ref: > VendorContract.contractId]\n  orderDate date\n  totalAmount decimal\n}",
    hint: "orderId [PK], contractId [FK] qilib loyihalang.",
    solutions: [
      "Table PurchaseOrder { orderId int [pk] contractId int [ref: > VendorContract.contractId] orderDate date totalAmount decimal }",
      "PurchaseOrder(orderId [PK], contractId [FK], orderDate, totalAmount)"
    ],
    expectedSchema: {
      tableName: "PurchaseOrder",
      columns: [
        { name: "orderId", type: "integer", isPK: true },
        { name: "contractId", type: "integer", isFK: true, references: "VendorContract(contractId)" },
        { name: "orderDate", type: "date" },
        { name: "totalAmount", type: "decimal" }
      ]
    },
    explanation: "PurchaseOrder jadvali shartnoma zanjiriga ulandi."
  },
  {
    id: 120,
    sector: 8,
    difficulty: "8-Qavat • Qiyin (8-Qavat Bossi)",
    source: "L02 Slide 36 & Slide 37 • Multi-tier + Recursive Staff Boss",
    title: "8-Qavat Bossi: Bo'lim va Mentorli Xodim Sxemasi",
    story: "Kompaniyada `Department(deptId, dName)` bo'limi va unda ishlovchi xodimlar `Staff(staffId, deptId, mentorId, fullName)` mavjud. Har bir xodim ma'lum bo'limda ishlaydi va o'zining tajribali ustozi `mentorId` ga (o'sha Staff.staffId ga rekursiv) ega.",
    taskUz: "Ikkala to'liq jadvalni chizing: `Department(deptId [PK], dName)` va `Staff(staffId [PK], deptId [FK], mentorId [FK], fullName)`. Staff.deptId Department.deptId ga, Staff.mentorId esa Staff.staffId ga yo'naltirilsin.",
    starterCode: "Table Department {\n  deptId int [pk]\n  dName varchar\n}\n\nTable Staff {\n  staffId int [pk]\n  deptId int [ref: > Department.deptId]\n  mentorId int [ref: > Staff.staffId]\n  fullName varchar\n}",
    hint: "Department ota jadval; Staff esa 2 ta FK ga ega: biri Department.deptId ga, ikkinchisi rekursiv Staff.staffId ga.",
    solutions: [
      "Table Department { deptId int [pk] dName varchar } Table Staff { staffId int [pk] deptId int [ref: > Department.deptId] mentorId int [ref: > Staff.staffId] fullName varchar }",
      "Department(deptId [PK], dName)\nStaff(staffId [PK], deptId [FK], mentorId [FK], fullName)"
    ],
    expectedSchema: {
      tables: [
        {
          tableName: "Department",
          columns: [
            { name: "deptId", type: "integer", isPK: true },
            { name: "dName", type: "varchar(50)" }
          ]
        },
        {
          tableName: "Staff",
          columns: [
            { name: "staffId", type: "integer", isPK: true },
            { name: "deptId", type: "integer", isFK: true, references: "Department(deptId)" },
            { name: "mentorId", type: "integer", isFK: true, references: "Staff(staffId)" },
            { name: "fullName", type: "varchar(60)" }
          ]
        }
      ]
    },
    explanation: "8-Qavat Bossi: Bo'lim va rekursiv ustozlik (mentorId) tizimi to'liq relying arxitekturaga o'tkazildi."
  },

  // ==========================================================================
  // 9-QAVAT (121–135): 7-QADAM — TERNARY (3-TALIK ALOQA) JADVALLARI
  // ==========================================================================
  {
    id: 121,
    sector: 9,
    difficulty: "9-Qavat • Boshlang'ich",
    source: "L02 Slide 42 • Step 7: Pure Ternary (*:*:*)",
    title: "Klassik Ternary O'qitish Jadvali (Teaches)",
    story: "Universitetda fan `Course(courseCode)`, o'qituvchi `Instructor(instId)` va o'quv semestri `Semester(semCode)` o'rtasida 3 tomonlama `Teaches` aloqasi mavjud (barcha tomonlar ko'plikda: *:*:*). Qo'shimcha xususiyat: xona `roomNo`.",
    taskUz: "`Teaches` oraliq jadvalini chizing: `(courseCode, instId, semCode)` [PK] (barchasi [FK]) va `roomNo` ustuni bilan.",
    starterCode: "Table Teaches {\n  courseCode varchar [ref: > Course.courseCode]\n  instId int [ref: > Instructor.instId]\n  semCode varchar [ref: > Semester.semCode]\n  roomNo varchar\n  indexes {\n    (courseCode, instId, semCode) [pk]\n  }\n}",
    hint: "Step 7 sof ternary qoidasi: 3 ta ota kalit birgalikda kompozit [PK] bo'ladi.",
    solutions: [
      "Table Teaches { courseCode varchar [ref: > Course.courseCode] instId int [ref: > Instructor.instId] semCode varchar [ref: > Semester.semCode] roomNo varchar indexes { (courseCode, instId, semCode) [pk] } }",
      "Teaches(courseCode [PK, FK], instId [PK, FK], semCode [PK, FK], roomNo)"
    ],
    expectedSchema: {
      tableName: "Teaches",
      columns: [
        { name: "courseCode", type: "varchar(10)", isPK: true, isFK: true, references: "Course(courseCode)" },
        { name: "instId", type: "integer", isPK: true, isFK: true, references: "Instructor(instId)" },
        { name: "semCode", type: "varchar(10)", isPK: true, isFK: true, references: "Semester(semCode)" },
        { name: "roomNo", type: "varchar(20)" }
      ]
    },
    explanation: "Step 7 ga binoan *:*:* ternary munosabatda uchala ota kalit birlashib kompozit PK hosil qiladi."
  },
  {
    id: 122,
    sector: 9,
    difficulty: "9-Qavat • O'rta",
    source: "L02 Slide 42 • Step 7 Oltin Qoidasi (1..1 Kardinallik Cheklovi)",
    title: "Ternary Oltin Qoidasi: 1..1 Cheklovli O'qitish (Teaches)",
    story: "Faraz qilaylik, kafedrada qat'iy qoida o'rnatildi: 'Bitta semestrda bitta fanni faqat bitta o'qituvchi o'qitishi mumkin' (Instructor kardinalligi 1..1). Step 7 oltin qoidasiga ko'ra `instId` Birlamchi Kalitdan (PK) chiqariladi va oddiy Tashqi Kalit [FK] bo'lib qoladi!",
    taskUz: "`Teaches` jadvalini chizing: `(courseCode, semCode)` [PK] (har biri [FK]), `instId` [FK] va `roomNo` ustunlari bilan. instId PK bo'lmasin!",
    starterCode: "Table Teaches {\n  courseCode varchar [ref: > Course.courseCode]\n  semCode varchar [ref: > Semester.semCode]\n  instId int [ref: > Instructor.instId]\n  roomNo varchar\n  indexes {\n    (courseCode, semCode) [pk]\n  }\n}",
    hint: "Faqat (courseCode, semCode) kompozit [PK] bo'ladi; instId esa oddiy [FK] bo'lib qoladi.",
    solutions: [
      "Table Teaches { courseCode varchar [ref: > Course.courseCode] semCode varchar [ref: > Semester.semCode] instId int [ref: > Instructor.instId] roomNo varchar indexes { (courseCode, semCode) [pk] } }",
      "Teaches(courseCode [PK, FK], semCode [PK, FK], instId [FK], roomNo)"
    ],
    expectedSchema: {
      tableName: "Teaches",
      columns: [
        { name: "courseCode", type: "varchar(10)", isPK: true, isFK: true, references: "Course(courseCode)" },
        { name: "semCode", type: "varchar(10)", isPK: true, isFK: true, references: "Semester(semCode)" },
        { name: "instId", type: "integer", isPK: false, isFK: true, references: "Instructor(instId)" },
        { name: "roomNo", type: "varchar(20)" }
      ]
    },
    explanation: "Step 7 Oltin Qoidasi: 1..1 qatnashchi kaliti PK dan chiqariladi, aks holda bitta kurs-semestrga 2 ta o'qituvchi yozilib qolishi mumkin edi."
  },
  {
    id: 123,
    sector: 9,
    difficulty: "9-Qavat • O'rta",
    source: "L02 Slide 42 • Doctor Consultation Ternary",
    title: "Tibbiy Konsultatsiya Ternary Jadvali (Consultation)",
    story: "Tibbiy markazda Shifokor `Doctor(doctorId)`, Bemor `Patient(patientId)` va Klinika filiali `Clinic(clinicId)` o'rtasida 3 tomonlama konsultatsiya o'tkaziladi. Qo'shimcha atribut: konsultatsiya sanasi `consultDate`.",
    taskUz: "`Consultation` jadvalini chizing: `(doctorId, patientId, clinicId)` [PK] (barchasi [FK]) va `consultDate` ustunlari bilan.",
    starterCode: "Table Consultation {\n  doctorId int [ref: > Doctor.doctorId]\n  patientId int [ref: > Patient.patientId]\n  clinicId int [ref: > Clinic.clinicId]\n  consultDate timestamp\n  indexes {\n    (doctorId, patientId, clinicId) [pk]\n  }\n}",
    hint: "doctorId, patientId va clinicId uchalasi birgalikda kompozit [PK] bo'ladi.",
    solutions: [
      "Table Consultation { doctorId int [ref: > Doctor.doctorId] patientId int [ref: > Patient.patientId] clinicId int [ref: > Clinic.clinicId] consultDate timestamp indexes { (doctorId, patientId, clinicId) [pk] } }",
      "Consultation(doctorId [PK, FK], patientId [PK, FK], clinicId [PK, FK], consultDate)"
    ],
    expectedSchema: {
      tableName: "Consultation",
      columns: [
        { name: "doctorId", type: "integer", isPK: true, isFK: true, references: "Doctor(doctorId)" },
        { name: "patientId", type: "integer", isPK: true, isFK: true, references: "Patient(patientId)" },
        { name: "clinicId", type: "integer", isPK: true, isFK: true, references: "Clinic(clinicId)" },
        { name: "consultDate", type: "timestamp" }
      ]
    },
    explanation: "Consultation 3 tomonlama aloqa jadvali muvaffaqiyatli tuzildi."
  },
  {
    id: 124,
    sector: 9,
    difficulty: "9-Qavat • O'rta",
    source: "L02 Slide 42 • Supplier Part Project Pure Ternary",
    title: "Ta'minotchi, Detal va Loyiha Ternary Jadvali (SupplyProject)",
    story: "Ta'minotchi `Supplier(suppId)` muayyan detalni `Part(partNo)` aniq bir loyiha `Project(projNo)` uchun yetkazib beradi. Qo'shimcha xususiyat: yetkazilgan miqdor `quantity`.",
    taskUz: "`SupplyProject` jadvalini chizing: `(suppId, partNo, projNo)` [PK] (barchasi [FK]) va `quantity` ustunlari bilan.",
    starterCode: "Table SupplyProject {\n  suppId varchar [ref: > Supplier.suppId]\n  partNo varchar [ref: > Part.partNo]\n  projNo int [ref: > Project.projNo]\n  quantity int\n  indexes {\n    (suppId, partNo, projNo) [pk]\n  }\n}",
    hint: "suppId, partNo va projNo 3 talik kompozit [PK] hosil qiladi.",
    solutions: [
      "Table SupplyProject { suppId varchar [ref: > Supplier.suppId] partNo varchar [ref: > Part.partNo] projNo int [ref: > Project.projNo] quantity int indexes { (suppId, partNo, projNo) [pk] } }",
      "SupplyProject(suppId [PK, FK], partNo [PK, FK], projNo [PK, FK], quantity)"
    ],
    expectedSchema: {
      tableName: "SupplyProject",
      columns: [
        { name: "suppId", type: "varchar(10)", isPK: true, isFK: true, references: "Supplier(suppId)" },
        { name: "partNo", type: "varchar(20)", isPK: true, isFK: true, references: "Part(partNo)" },
        { name: "projNo", type: "integer", isPK: true, isFK: true, references: "Project(projNo)" },
        { name: "quantity", type: "integer" }
      ]
    },
    explanation: "SupplyProject klassik 3 talik relying oraliq jadvali loyihalandi."
  },
  {
    id: 125,
    sector: 9,
    difficulty: "9-Qavat • Qiyin",
    source: "L02 Slide 42 • Step 7: 1..1 on Project Constraint",
    title: "1..1 Loyiha Cheklovli Ta'minot Ternary (SupplyProject)",
    story: "Kompaniya shartnomasi: Ta'minotchi `Supplier(suppId)` bitta detalni `Part(partNo)` faqat bitta loyihaga `Project(projNo)` yetkazib berishi mumkin (Project kardinalligi 1..1). Shuning uchun `projNo` PK dan chiqariladi!",
    taskUz: "`SupplyProject` jadvalini chizing: `(suppId, partNo)` [PK] (har biri [FK]), `projNo` [FK] va `quantity` ustunlari bilan. projNo PK bo'lmasin!",
    starterCode: "Table SupplyProject {\n  suppId varchar [ref: > Supplier.suppId]\n  partNo varchar [ref: > Part.partNo]\n  projNo int [ref: > Project.projNo]\n  quantity int\n  indexes {\n    (suppId, partNo) [pk]\n  }\n}",
    hint: "Faqat (suppId, partNo) kompozit [PK] bo'ladi; projNo esa oddiy [FK].",
    solutions: [
      "Table SupplyProject { suppId varchar [ref: > Supplier.suppId] partNo varchar [ref: > Part.partNo] projNo int [ref: > Project.projNo] quantity int indexes { (suppId, partNo) [pk] } }",
      "SupplyProject(suppId [PK, FK], partNo [PK, FK], projNo [FK], quantity)"
    ],
    expectedSchema: {
      tableName: "SupplyProject",
      columns: [
        { name: "suppId", type: "varchar(10)", isPK: true, isFK: true, references: "Supplier(suppId)" },
        { name: "partNo", type: "varchar(20)", isPK: true, isFK: true, references: "Part(partNo)" },
        { name: "projNo", type: "integer", isPK: false, isFK: true, references: "Project(projNo)" },
        { name: "quantity", type: "integer" }
      ]
    },
    explanation: "Step 7 qoidasi: Project 1..1 bo'lgani uchun projNo PK dan chiqarilib, oddiy FK qilib saqlanadi."
  },
  {
    id: 126,
    sector: 9,
    difficulty: "9-Qavat • O'rta",
    source: "L02 Slide 42 • Festival Concert Ternary",
    title: "Festival Konserti Ternary Jadvali (Concert)",
    story: "Musiqa festivalida: San'atkor `Artist(artistId)`, Sahna `Stage(stageId)` va Festival kuni `FestDay(dayId)` 3 tomonlama chiqish `Concert` ni belgilaydi. Atribut: vaqt `performanceTime`.",
    taskUz: "`Concert` jadvalini chizing: `(artistId, stageId, dayId)` [PK] (barchasi [FK]) va `performanceTime` ustunlari bilan.",
    starterCode: "Table Concert {\n  artistId int [ref: > Artist.artistId]\n  stageId int [ref: > Stage.stageId]\n  dayId int [ref: > FestDay.dayId]\n  performanceTime time\n  indexes {\n    (artistId, stageId, dayId) [pk]\n  }\n}",
    hint: "artistId, stageId va dayId kompozit [PK] bo'ladi.",
    solutions: [
      "Table Concert { artistId int [ref: > Artist.artistId] stageId int [ref: > Stage.stageId] dayId int [ref: > FestDay.dayId] performanceTime time indexes { (artistId, stageId, dayId) [pk] } }",
      "Concert(artistId [PK, FK], stageId [PK, FK], dayId [PK, FK], performanceTime)"
    ],
    expectedSchema: {
      tableName: "Concert",
      columns: [
        { name: "artistId", type: "integer", isPK: true, isFK: true, references: "Artist(artistId)" },
        { name: "stageId", type: "integer", isPK: true, isFK: true, references: "Stage(stageId)" },
        { name: "dayId", type: "integer", isPK: true, isFK: true, references: "FestDay(dayId)" },
        { name: "performanceTime", type: "time" }
      ]
    },
    explanation: "Concert ternary jadvali to'g'ri loyihalandi."
  },
  {
    id: 127,
    sector: 9,
    difficulty: "9-Qavat • O'rta",
    source: "L02 Slide 42 • Flight Crew Ternary",
    title: "Aviareys Ekipaj Tayinlash Ternary Jadvali (FlightDuty)",
    story: "Aviakompaniyada: Parvoz `Flight(flightNo)`, Samolyot `Aircraft(tailNo)` va Ekipaj guruhi `CrewGroup(groupId)` 3 tomonlama parvoz navbatchiligini hosil qiladi. Atribut: `dutyDate`.",
    taskUz: "`FlightDuty` jadvalini chizing: `(flightNo, tailNo, groupId)` [PK] (barchasi [FK]) va `dutyDate` ustunlari bilan.",
    starterCode: "Table FlightDuty {\n  flightNo varchar [ref: > Flight.flightNo]\n  tailNo varchar [ref: > Aircraft.tailNo]\n  groupId int [ref: > CrewGroup.groupId]\n  dutyDate date\n  indexes {\n    (flightNo, tailNo, groupId) [pk]\n  }\n}",
    hint: "flightNo, tailNo va groupId uchalasi birgalikda [PK] bo'ladi.",
    solutions: [
      "Table FlightDuty { flightNo varchar [ref: > Flight.flightNo] tailNo varchar [ref: > Aircraft.tailNo] groupId int [ref: > CrewGroup.groupId] dutyDate date indexes { (flightNo, tailNo, groupId) [pk] } }",
      "FlightDuty(flightNo [PK, FK], tailNo [PK, FK], groupId [PK, FK], dutyDate)"
    ],
    expectedSchema: {
      tableName: "FlightDuty",
      columns: [
        { name: "flightNo", type: "varchar(10)", isPK: true, isFK: true, references: "Flight(flightNo)" },
        { name: "tailNo", type: "varchar(15)", isPK: true, isFK: true, references: "Aircraft(tailNo)" },
        { name: "groupId", type: "integer", isPK: true, isFK: true, references: "CrewGroup(groupId)" },
        { name: "dutyDate", type: "date" }
      ]
    },
    explanation: "FlightDuty 3 tomonlama navbatchilik sxemasi yaratildi."
  },
  {
    id: 128,
    sector: 9,
    difficulty: "9-Qavat • O'rta",
    source: "L02 Slide 42 • Hotel Room Guest Booking Ternary",
    title: "Mehmonxona Xona Band Qilish Ternary (RoomBooking)",
    story: "Mehmonxona tarmog'ida: Mehmonxona `Hotel(hotelId)`, Xona raqami `Room(roomNo)` va Mehmon `Guest(guestId)` o'rtasidagi bronlash `RoomBooking`. Atributlar: `checkInDate` va `totalPaid`.",
    taskUz: "`RoomBooking` jadvalini chizing: `(hotelId, roomNo, guestId)` [PK] (barchasi [FK]), `checkInDate` va `totalPaid` ustunlari bilan.",
    starterCode: "Table RoomBooking {\n  hotelId int [ref: > Hotel.hotelId]\n  roomNo int [ref: > Room.roomNo]\n  guestId int [ref: > Guest.guestId]\n  checkInDate date\n  totalPaid decimal\n  indexes {\n    (hotelId, roomNo, guestId) [pk]\n  }\n}",
    hint: "hotelId, roomNo va guestId kompozit [PK] bo'ladi.",
    solutions: [
      "Table RoomBooking { hotelId int [ref: > Hotel.hotelId] roomNo int [ref: > Room.roomNo] guestId int [ref: > Guest.guestId] checkInDate date totalPaid decimal indexes { (hotelId, roomNo, guestId) [pk] } }",
      "RoomBooking(hotelId [PK, FK], roomNo [PK, FK], guestId [PK, FK], checkInDate, totalPaid)"
    ],
    expectedSchema: {
      tableName: "RoomBooking",
      columns: [
        { name: "hotelId", type: "integer", isPK: true, isFK: true, references: "Hotel(hotelId)" },
        { name: "roomNo", type: "integer", isPK: true, isFK: true, references: "Room(roomNo)" },
        { name: "guestId", type: "integer", isPK: true, isFK: true, references: "Guest(guestId)" },
        { name: "checkInDate", type: "date" },
        { name: "totalPaid", type: "decimal" }
      ]
    },
    explanation: "RoomBooking ternary jadvali loyihalandi."
  },
  {
    id: 129,
    sector: 9,
    difficulty: "9-Qavat • O'rta",
    source: "L02 Slide 42 • Car Rental Branch Ternary",
    title: "Avtomobil Ijara Shartnomasi Ternary (CarRentalContract)",
    story: "Avto-ijara kompaniyasida: Avtomobil `Vehicle(vin)`, Mijoz `Customer(custId)` va Filial `Branch(branchId)` 3 tomonlama ijara tuzadi. Atribut: `startDate`.",
    taskUz: "`CarRentalContract` jadvalini chizing: `(vin, custId, branchId)` [PK] (barchasi [FK]) va `startDate` ustunlari bilan.",
    starterCode: "Table CarRentalContract {\n  vin varchar [ref: > Vehicle.vin]\n  custId int [ref: > Customer.custId]\n  branchId int [ref: > Branch.branchId]\n  startDate date\n  indexes {\n    (vin, custId, branchId) [pk]\n  }\n}",
    hint: "vin, custId va branchId kompozit [PK] bo'ladi.",
    solutions: [
      "Table CarRentalContract { vin varchar [ref: > Vehicle.vin] custId int [ref: > Customer.custId] branchId int [ref: > Branch.branchId] startDate date indexes { (vin, custId, branchId) [pk] } }",
      "CarRentalContract(vin [PK, FK], custId [PK, FK], branchId [PK, FK], startDate)"
    ],
    expectedSchema: {
      tableName: "CarRentalContract",
      columns: [
        { name: "vin", type: "varchar(20)", isPK: true, isFK: true, references: "Vehicle(vin)" },
        { name: "custId", type: "integer", isPK: true, isFK: true, references: "Customer(custId)" },
        { name: "branchId", type: "integer", isPK: true, isFK: true, references: "Branch(branchId)" },
        { name: "startDate", type: "date" }
      ]
    },
    explanation: "CarRentalContract ternary munosabat jadvali loyihalandi."
  },
  {
    id: 130,
    sector: 9,
    difficulty: "9-Qavat • O'rta",
    source: "L02 Slide 42 • Sports League Fixture Ternary",
    title: "Futbol Uchrashuvi Ternary Jadvali (MatchFixture)",
    story: "Futbol ligasida: Mezbon jamoa `Team(homeTeamId)`, Mehmon jamoa `Team(awayTeamId)` va Stadion `Stadium(stadiumId)` o'rtasidagi o'yin. Atribut: `matchDate`.",
    taskUz: "`MatchFixture` jadvalini chizing: `(homeTeamId, awayTeamId, stadiumId)` [PK] (har biri [FK]) va `matchDate` ustunlari bilan.",
    starterCode: "Table MatchFixture {\n  homeTeamId int [ref: > Team.teamId]\n  awayTeamId int [ref: > Team.teamId]\n  stadiumId int [ref: > Stadium.stadiumId]\n  matchDate date\n  indexes {\n    (homeTeamId, awayTeamId, stadiumId) [pk]\n  }\n}",
    hint: "homeTeamId, awayTeamId va stadiumId kompozit [PK] bo'ladi.",
    solutions: [
      "Table MatchFixture { homeTeamId int [ref: > Team.teamId] awayTeamId int [ref: > Team.teamId] stadiumId int [ref: > Stadium.stadiumId] matchDate date indexes { (homeTeamId, awayTeamId, stadiumId) [pk] } }",
      "MatchFixture(homeTeamId [PK, FK], awayTeamId [PK, FK], stadiumId [PK, FK], matchDate)"
    ],
    expectedSchema: {
      tableName: "MatchFixture",
      columns: [
        { name: "homeTeamId", type: "integer", isPK: true, isFK: true, references: "Team(teamId)" },
        { name: "awayTeamId", type: "integer", isPK: true, isFK: true, references: "Team(teamId)" },
        { name: "stadiumId", type: "integer", isPK: true, isFK: true, references: "Stadium(stadiumId)" },
        { name: "matchDate", type: "date" }
      ]
    },
    explanation: "MatchFixture sport ligasi ternary jadvali chizildi."
  },
  {
    id: 131,
    sector: 9,
    difficulty: "9-Qavat • Qiyin",
    source: "L02 Slide 42 • Step 7: 1..1 Pallet Placement",
    title: "1..1 Poddon Joylashuv Cheklovi Ternary (PalletPlacement)",
    story: "Logistika omborida poddon `Pallet(palletId)` ayni vaqtda faqat 1 ta ombor `Warehouse(whId)` va 1 ta zona `Zone(zoneId)` da bo'lishi mumkin (Pallet kardinalligi 1..1). Shuning uchun `palletId` yagona Birlamchi Kalit bo'ladi, `whId` va `zoneId` esa oddiy [FK] bo'ladi!",
    taskUz: "`PalletPlacement` jadvalini chizing: `palletId` [PK] (va [FK]), `whId` [FK], `zoneId` [FK] va `placedDate` ustunlari bilan.",
    starterCode: "Table PalletPlacement {\n  palletId int [pk, ref: > Pallet.palletId]\n  whId int [ref: > Warehouse.whId]\n  zoneId int [ref: > Zone.zoneId]\n  placedDate timestamp\n}",
    hint: "Faqat palletId [PK] bo'ladi, chunki poddon bir vaqtning o'zida faqat bitta joyda turishi shart.",
    solutions: [
      "Table PalletPlacement { palletId int [pk, ref: > Pallet.palletId] whId int [ref: > Warehouse.whId] zoneId int [ref: > Zone.zoneId] placedDate timestamp }",
      "PalletPlacement(palletId [PK, FK], whId [FK], zoneId [FK], placedDate)"
    ],
    expectedSchema: {
      tableName: "PalletPlacement",
      columns: [
        { name: "palletId", type: "integer", isPK: true, isFK: true, references: "Pallet(palletId)" },
        { name: "whId", type: "integer", isPK: false, isFK: true, references: "Warehouse(whId)" },
        { name: "zoneId", type: "integer", isPK: false, isFK: true, references: "Zone(zoneId)" },
        { name: "placedDate", type: "timestamp" }
      ]
    },
    explanation: "Step 7 Oltin Qoidasi: Poddon faqat 1 ta joyda tura olganligi uchun uning o'zi yagona PK bo'ladi."
  },
  {
    id: 132,
    sector: 9,
    difficulty: "9-Qavat • O'rta",
    source: "L02 Slide 42 • Exam Grading Ternary",
    title: "Imtihon Baholash Ternary Jadvali (ExamGrading)",
    story: "Universitetda: Talaba `Student(studentId)`, Imtihon varaqasi `ExamPaper(paperId)` va Tekshiruvchi professor `Examiner(examinerId)` o'rtasidagi baholash. Atribut: `score`.",
    taskUz: "`ExamGrading` jadvalini chizing: `(studentId, paperId, examinerId)` [PK] (barchasi [FK]) va `score` ustunlari bilan.",
    starterCode: "Table ExamGrading {\n  studentId int [ref: > Student.studentId]\n  paperId int [ref: > ExamPaper.paperId]\n  examinerId int [ref: > Examiner.examinerId]\n  score decimal\n  indexes {\n    (studentId, paperId, examinerId) [pk]\n  }\n}",
    hint: "studentId, paperId va examinerId kompozit [PK] bo'ladi.",
    solutions: [
      "Table ExamGrading { studentId int [ref: > Student.studentId] paperId int [ref: > ExamPaper.paperId] examinerId int [ref: > Examiner.examinerId] score decimal indexes { (studentId, paperId, examinerId) [pk] } }",
      "ExamGrading(studentId [PK, FK], paperId [PK, FK], examinerId [PK, FK], score)"
    ],
    expectedSchema: {
      tableName: "ExamGrading",
      columns: [
        { name: "studentId", type: "integer", isPK: true, isFK: true, references: "Student(studentId)" },
        { name: "paperId", type: "integer", isPK: true, isFK: true, references: "ExamPaper(paperId)" },
        { name: "examinerId", type: "integer", isPK: true, isFK: true, references: "Examiner(examinerId)" },
        { name: "score", type: "decimal" }
      ]
    },
    explanation: "ExamGrading ternary munosabat jadvali tuzildi."
  },
  {
    id: 133,
    sector: 9,
    difficulty: "9-Qavat • O'rta",
    source: "L02 Slide 42 • Contractor Task Ternary with Attributes",
    title: "Pudratchi Vazifa Tayinlash Ternary (TaskContract)",
    story: "Buyurtmachi `Client(clientId)`, Pudratchi `Contractor(contractorId)` va Vazifa `ProjectTask(taskId)` o'rtasidagi kelishuv. Atributlar: soatlik narx `hourlyRate` va rejalangan soat `plannedHours`.",
    taskUz: "`TaskContract` jadvalini chizing: `(clientId, contractorId, taskId)` [PK] (barchasi [FK]), `hourlyRate` va `plannedHours` ustunlari bilan.",
    starterCode: "Table TaskContract {\n  clientId int [ref: > Client.clientId]\n  contractorId int [ref: > Contractor.contractorId]\n  taskId int [ref: > ProjectTask.taskId]\n  hourlyRate decimal\n  plannedHours int\n  indexes {\n    (clientId, contractorId, taskId) [pk]\n  }\n}",
    hint: "clientId, contractorId va taskId kompozit [PK] bo'ladi.",
    solutions: [
      "Table TaskContract { clientId int [ref: > Client.clientId] contractorId int [ref: > Contractor.contractorId] taskId int [ref: > ProjectTask.taskId] hourlyRate decimal plannedHours int indexes { (clientId, contractorId, taskId) [pk] } }",
      "TaskContract(clientId [PK, FK], contractorId [PK, FK], taskId [PK, FK], hourlyRate, plannedHours)"
    ],
    expectedSchema: {
      tableName: "TaskContract",
      columns: [
        { name: "clientId", type: "integer", isPK: true, isFK: true, references: "Client(clientId)" },
        { name: "contractorId", type: "integer", isPK: true, isFK: true, references: "Contractor(contractorId)" },
        { name: "taskId", type: "integer", isPK: true, isFK: true, references: "ProjectTask(taskId)" },
        { name: "hourlyRate", type: "decimal" },
        { name: "plannedHours", type: "integer" }
      ]
    },
    explanation: "TaskContract ternary jadvali barcha atributlari bilan chizildi."
  },
  {
    id: 134,
    sector: 9,
    difficulty: "9-Qavat • Qiyin",
    source: "L02 Slide 42 • Step 7: Equipment Deployment 1..1",
    title: "1..1 Uskuna Joylashuv Cheklovi Ternary (EquipmentDeploy)",
    story: "Muhandislik bazasida qimmatbaho uskuna `Equipment(equipId)` ayni vaqtda faqat 1 ta qurilish ob'ekti `Site(siteId)` va 1 ta mas'ul muhandis `Engineer(engId)` ga biriktiriladi (Equipment 1..1). Shuning uchun `equipId` yagona Birlamchi Kalit bo'ladi!",
    taskUz: "`EquipmentDeploy` jadvalini chizing: `equipId` [PK] (va [FK]), `siteId` [FK], `engId` [FK] va `deployDate` ustunlari bilan.",
    starterCode: "Table EquipmentDeploy {\n  equipId int [pk, ref: > Equipment.equipId]\n  siteId int [ref: > Site.siteId]\n  engId int [ref: > Engineer.engId]\n  deployDate date\n}",
    hint: "equipId [PK, FK], siteId [FK], engId [FK].",
    solutions: [
      "Table EquipmentDeploy { equipId int [pk, ref: > Equipment.equipId] siteId int [ref: > Site.siteId] engId int [ref: > Engineer.engId] deployDate date }",
      "EquipmentDeploy(equipId [PK, FK], siteId [FK], engId [FK], deployDate)"
    ],
    expectedSchema: {
      tableName: "EquipmentDeploy",
      columns: [
        { name: "equipId", type: "integer", isPK: true, isFK: true, references: "Equipment(equipId)" },
        { name: "siteId", type: "integer", isPK: false, isFK: true, references: "Site(siteId)" },
        { name: "engId", type: "integer", isPK: false, isFK: true, references: "Engineer(engId)" },
        { name: "deployDate", type: "date" }
      ]
    },
    explanation: "Step 7 oltin qoidasi muvaffaqiyatli qo'llandi: equipId yagona PK bo'ldi."
  },
  {
    id: 135,
    sector: 9,
    difficulty: "9-Qavat • Qiyin (9-Qavat Bossi)",
    source: "L02 Slide 42 & T02 • Master Step 7 Course Offering Boss",
    title: "9-Qavat Bossi: Semestrda Dars O'tish Taklifi (CourseOffering)",
    story: "Universitetda fan `Course(courseCode)`, semestr `Semester(semCode)` va o'qituvchi `Instructor(instId)` ishtirok etadi. Qoida: 'Har bir semestrda bitta fanni faqat bitta o'qituvchi o'tishi shart (Instructor 1..1)'. Xona `roomNo` va auditoriya sig'imi `capacity` qayd etiladi.",
    taskUz: "`CourseOffering` jadvalini chizing: `(courseCode, semCode)` [PK] (har biri [FK]), `instId` [FK], `roomNo` va `capacity` ustunlari bilan. instId PK bo'lmasin!",
    starterCode: "Table CourseOffering {\n  courseCode varchar [ref: > Course.courseCode]\n  semCode varchar [ref: > Semester.semCode]\n  instId int [ref: > Instructor.instId]\n  roomNo varchar\n  capacity int\n  indexes {\n    (courseCode, semCode) [pk]\n  }\n}",
    hint: "Faqat (courseCode, semCode) kompozit [PK] bo'ladi; instId esa oddiy [FK].",
    solutions: [
      "Table CourseOffering { courseCode varchar [ref: > Course.courseCode] semCode varchar [ref: > Semester.semCode] instId int [ref: > Instructor.instId] roomNo varchar capacity int indexes { (courseCode, semCode) [pk] } }",
      "CourseOffering(courseCode [PK, FK], semCode [PK, FK], instId [FK], roomNo, capacity)"
    ],
    expectedSchema: {
      tableName: "CourseOffering",
      columns: [
        { name: "courseCode", type: "varchar(10)", isPK: true, isFK: true, references: "Course(courseCode)" },
        { name: "semCode", type: "varchar(10)", isPK: true, isFK: true, references: "Semester(semCode)" },
        { name: "instId", type: "integer", isPK: false, isFK: true, references: "Instructor(instId)" },
        { name: "roomNo", type: "varchar(20)" },
        { name: "capacity", type: "integer" }
      ]
    },
    explanation: "9-Qavat Bossi: Step 7 oltin qoidasi mukammal bajarildi: instId PK dan chiqarilib, faqat (courseCode, semCode) kompozit PK bo'ldi."
  },

  // ==========================================================================
  // 10-QAVAT (136–150): 8-QADAM — EER SUPERCLASS/SUBCLASS MAPPINGS (8A–8D) & MASTER BOSSLAR
  // ==========================================================================
  {
    id: 136,
    sector: 10,
    difficulty: "10-Qavat • Boshlang'ich",
    source: "L02 Slide 43 • Step 8 Option 8A (Superclass + Subclasses)",
    title: "Option 8A: Rahbar Subklassi (Manager Subclass)",
    story: "Step 8 Option 8A ga ko'ra ota jadval `Employee(empNo, name, jobType)` alohida yaratiladi va har bir subklass `Manager(empNo, bonus)` o'z jadvaliga ega bo'lib, ota PK sini o'zining [PK, FK] si sifatida saqlaydi.",
    taskUz: "Ikkala jadvalni chizing: `Employee(empNo [PK], name, jobType)` va `Manager(empNo [PK, FK], bonus)`. Manager.empNo Employee.empNo ga yo'naltirilsin.",
    starterCode: "Table Employee {\n  empNo int [pk]\n  name varchar\n  jobType varchar\n}\n\nTable Manager {\n  empNo int [pk, ref: > Employee.empNo]\n  bonus decimal\n}",
    hint: "Manager jadvalida empNo bir vaqtning o'zida [PK] va Employee ga [FK] bo'ladi.",
    solutions: [
      "Table Employee { empNo int [pk] name varchar jobType varchar } Table Manager { empNo int [pk, ref: > Employee.empNo] bonus decimal }",
      "Employee(empNo [PK], name, jobType)\nManager(empNo [PK, FK], bonus)"
    ],
    expectedSchema: {
      tables: [
        {
          tableName: "Employee",
          columns: [
            { name: "empNo", type: "integer", isPK: true },
            { name: "name", type: "varchar(60)" },
            { name: "jobType", type: "varchar(20)" }
          ]
        },
        {
          tableName: "Manager",
          columns: [
            { name: "empNo", type: "integer", isPK: true, isFK: true, references: "Employee(empNo)" },
            { name: "bonus", type: "decimal" }
          ]
        }
      ]
    },
    explanation: "Option 8A: Superklass va subklass alohida jadvallar bo'lib, ota PK subklassda [PK, FK] bo'lib xizmat qiladi."
  },
  {
    id: 137,
    sector: 10,
    difficulty: "10-Qavat • O'rta",
    source: "L02 Slide 43 • Option 8A SalesPerson Subclass",
    title: "Option 8A: Sotuvchi Subklassi (SalesPerson)",
    story: "Xodim `Employee(empNo)` ning maxsus subklassi `SalesPerson` komissiya foizi `commissionRate` va sotuv rejasi `salesTarget` ga ega.",
    taskUz: "`SalesPerson` subklass jadvalini chizing: `empNo` [PK, FK] (Employee.empNo ga), `commissionRate` va `salesTarget` ustunlari bilan.",
    starterCode: "Table SalesPerson {\n  empNo int [pk, ref: > Employee.empNo]\n  commissionRate decimal\n  salesTarget decimal\n}",
    hint: "empNo [PK, FK] bo'ladi va Employee.empNo ga yo'naltiriladi.",
    solutions: [
      "Table SalesPerson { empNo int [pk, ref: > Employee.empNo] commissionRate decimal salesTarget decimal }",
      "SalesPerson(empNo [PK, FK], commissionRate, salesTarget)"
    ],
    expectedSchema: {
      tableName: "SalesPerson",
      columns: [
        { name: "empNo", type: "integer", isPK: true, isFK: true, references: "Employee(empNo)" },
        { name: "commissionRate", type: "decimal" },
        { name: "salesTarget", type: "decimal" }
      ]
    },
    explanation: "SalesPerson subklassi Option 8A me'morchiligi asosida loyihalandi."
  },
  {
    id: 138,
    sector: 10,
    difficulty: "10-Qavat • O'rta",
    source: "L02 Slide 43 • Option 8A Engineer Subclass",
    title: "Option 8A: Muhandis Subklassi (Engineer)",
    story: "Xodim `Employee(empNo)` ning subklassi bo'lgan `Engineer` ixtisoslik `specialty` va kasbiy litsenziya raqami `licenseNo` atributlariga ega.",
    taskUz: "`Engineer` subklass jadvalini chizing: `empNo` [PK, FK] (Employee.empNo ga), `specialty` va `licenseNo` ustunlari bilan.",
    starterCode: "Table Engineer {\n  empNo int [pk, ref: > Employee.empNo]\n  specialty varchar\n  licenseNo varchar\n}",
    hint: "empNo [PK, FK] Employee.empNo ga yo'naltirilsin.",
    solutions: [
      "Table Engineer { empNo int [pk, ref: > Employee.empNo] specialty varchar licenseNo varchar }",
      "Engineer(empNo [PK, FK], specialty, licenseNo)"
    ],
    expectedSchema: {
      tableName: "Engineer",
      columns: [
        { name: "empNo", type: "integer", isPK: true, isFK: true, references: "Employee(empNo)" },
        { name: "specialty", type: "varchar(50)" },
        { name: "licenseNo", type: "varchar(30)" }
      ]
    },
    explanation: "Engineer subklass relatsiyasi tuzildi."
  },
  {
    id: 139,
    sector: 10,
    difficulty: "10-Qavat • O'rta",
    source: "L02 Slide 43 • Option 8A Secretary Subclass",
    title: "Option 8A: Kotiba Subklassi (Secretary)",
    story: "Xodim `Employee(empNo)` ning subklassi bo'lgan `Secretary` yozish tezligi `typingSpeed` (so'z/daqiqa) atributiga ega.",
    taskUz: "`Secretary` subklass jadvalini chizing: `empNo` [PK, FK] (Employee.empNo ga) va `typingSpeed` ustunlari bilan.",
    starterCode: "Table Secretary {\n  empNo int [pk, ref: > Employee.empNo]\n  typingSpeed int\n}",
    hint: "empNo [PK, FK] bo'ladi va typingSpeed int ustuni bo'ladi.",
    solutions: [
      "Table Secretary { empNo int [pk, ref: > Employee.empNo] typingSpeed int }",
      "Secretary(empNo [PK, FK], typingSpeed)"
    ],
    expectedSchema: {
      tableName: "Secretary",
      columns: [
        { name: "empNo", type: "integer", isPK: true, isFK: true, references: "Employee(empNo)" },
        { name: "typingSpeed", type: "integer" }
      ]
    },
    explanation: "Secretary subklass jadvali yaratildi."
  },
  {
    id: 140,
    sector: 10,
    difficulty: "10-Qavat • O'rta",
    source: "L02 Slide 44 • Option 8B (Subclasses Only)",
    title: "Option 8B: Faqat Subklasslar (Hourly & Salaried Employee)",
    story: "Step 8 Option 8B (Total Specialization {Mandatory, Disjoint}): Superklass ochilmaydi; faqat subklasslar ochilib, ota atributlari har bir subklassga ko'chiriladi. Masalan: soatbay `HourlyEmp(empNo, name, hourlyRate)` va oylik maoshli `SalariedEmp(empNo, name, annualSalary)`.",
    taskUz: "Ikkala mustaqil subklass jadvalini chizing: `HourlyEmp(empNo [PK], name, hourlyRate)` va `SalariedEmp(empNo [PK], name, annualSalary)`.",
    starterCode: "Table HourlyEmp {\n  empNo int [pk]\n  name varchar\n  hourlyRate decimal\n}\n\nTable SalariedEmp {\n  empNo int [pk]\n  name varchar\n  annualSalary decimal\n}",
    hint: "Option 8B da ota Employee jadvali bo'lmaydi; har bir subklass o'z empNo [PK] siga ega.",
    solutions: [
      "Table HourlyEmp { empNo int [pk] name varchar hourlyRate decimal } Table SalariedEmp { empNo int [pk] name varchar annualSalary decimal }",
      "HourlyEmp(empNo [PK], name, hourlyRate)\nSalariedEmp(empNo [PK], name, annualSalary)"
    ],
    expectedSchema: {
      tables: [
        {
          tableName: "HourlyEmp",
          columns: [
            { name: "empNo", type: "integer", isPK: true },
            { name: "name", type: "varchar(60)" },
            { name: "hourlyRate", type: "decimal" }
          ]
        },
        {
          tableName: "SalariedEmp",
          columns: [
            { name: "empNo", type: "integer", isPK: true },
            { name: "name", type: "varchar(60)" },
            { name: "annualSalary", type: "decimal" }
          ]
        }
      ]
    },
    explanation: "Option 8B: Umumiy ota jadvalsiz, to'liq ajratilgan subklasslar relying arxitekturasi qurildi."
  },
  {
    id: 141,
    sector: 10,
    difficulty: "10-Qavat • O'rta",
    source: "L02 Slide 44 • Option 8B Vehicle Specialization",
    title: "Option 8B: Avtomobil va Yuk Mashinasi Subklasslari",
    story: "Avtotransport parki to'liq ikkiga bo'linadi (Total Disjoint): Yengil mashina `Car(vin, make, model, trunkLitres)` va Yuk mashinasi `Truck(vin, make, model, cargoTonnage)`. Option 8B ga ko'ra umumiy Vehicle ochilmaydi.",
    taskUz: "Ikkala jadvalni chizing: `Car(vin [PK], make, model, trunkLitres)` va `Truck(vin [PK], make, model, cargoTonnage)`.",
    starterCode: "Table Car {\n  vin varchar [pk]\n  make varchar\n  model varchar\n  trunkLitres int\n}\n\nTable Truck {\n  vin varchar [pk]\n  make varchar\n  model varchar\n  cargoTonnage decimal\n}",
    hint: "Ikkala jadval ham vin [PK] bilan mustaqil chiziladi.",
    solutions: [
      "Table Car { vin varchar [pk] make varchar model varchar trunkLitres int } Table Truck { vin varchar [pk] make varchar model varchar cargoTonnage decimal }",
      "Car(vin [PK], make, model, trunkLitres)\nTruck(vin [PK], make, model, cargoTonnage)"
    ],
    expectedSchema: {
      tables: [
        {
          tableName: "Car",
          columns: [
            { name: "vin", type: "varchar(20)", isPK: true },
            { name: "make", type: "varchar(40)" },
            { name: "model", type: "varchar(40)" },
            { name: "trunkLitres", type: "integer" }
          ]
        },
        {
          tableName: "Truck",
          columns: [
            { name: "vin", type: "varchar(20)", isPK: true },
            { name: "make", type: "varchar(40)" },
            { name: "model", type: "varchar(40)" },
            { name: "cargoTonnage", type: "decimal" }
          ]
        }
      ]
    },
    explanation: "Option 8B transport vositalari modeli muvaffaqiyatli tuzildi."
  },
  {
    id: 142,
    sector: 10,
    difficulty: "10-Qavat • O'rta",
    source: "L02 Slide 45 • Option 8C (Single Relation with Type Discriminator)",
    title: "Option 8C: Yagona Birlashgan Jadval va Diskriminator Ustuni",
    story: "Step 8 Option 8C (Disjoint subklasslar uchun): Barcha subklasslar bitta yagona `Vehicle` jadvaliga birlashtiriladi. Subklass turini ajratish uchun `vehicleType` diskriminator ustuni va subklasslarning o'ziga xos ustunlari (`trunkLitres`, `cargoTonnage`) qo'shiladi.",
    taskUz: "`Vehicle` jadvalini chizing: `vin` [PK], `make`, `model`, `vehicleType`, `trunkLitres` va `cargoTonnage` ustunlari bilan.",
    starterCode: "Table Vehicle {\n  vin varchar [pk]\n  make varchar\n  model varchar\n  vehicleType varchar\n  trunkLitres int\n  cargoTonnage decimal\n}",
    hint: "Option 8C da barcha atributlar yagona Vehicle jadvalida jamlanadi.",
    solutions: [
      "Table Vehicle { vin varchar [pk] make varchar model varchar vehicleType varchar trunkLitres int cargoTonnage decimal }",
      "Vehicle(vin [PK], make, model, vehicleType, trunkLitres, cargoTonnage)"
    ],
    expectedSchema: {
      tableName: "Vehicle",
      columns: [
        { name: "vin", type: "varchar(20)", isPK: true },
        { name: "make", type: "varchar(40)" },
        { name: "model", type: "varchar(40)" },
        { name: "vehicleType", type: "varchar(20)" },
        { name: "trunkLitres", type: "integer" },
        { name: "cargoTonnage", type: "decimal" }
      ]
    },
    explanation: "Option 8C: Barcha subklasslar vehicleType diskriminatori bilan yagona relyatsion jadvalga birlashtirildi."
  },
  {
    id: 143,
    sector: 10,
    difficulty: "10-Qavat • O'rta",
    source: "L02 Slide 46 • Option 8D (Overlapping with Boolean Flags)",
    title: "Option 8D: Kesishevchi Subklasslar va Mantiqiy Bayroqlar (Part)",
    story: "Step 8 Option 8D (Overlapping subklasslar uchun): Detal `Part` bir vaqtning o'zida ham korxonada ishlab chiqarilgan `isManufactured`, ham chetdan sotib olingan `isPurchased` bo'lishi mumkin. Yagona jadvalda ikkita boolean bayroq va ularning atributlari (`drawingNo`, `supplierCost`) saqlanadi.",
    taskUz: "`Part` jadvalini chizing: `partNo` [PK], `partName`, `isManufactured`, `drawingNo`, `isPurchased` va `supplierCost` ustunlari bilan.",
    starterCode: "Table Part {\n  partNo varchar [pk]\n  partName varchar\n  isManufactured boolean\n  drawingNo varchar\n  isPurchased boolean\n  supplierCost decimal\n}",
    hint: "Option 8D da isManufactured va isPurchased bayroqlari bilan bitta jadval tuziladi.",
    solutions: [
      "Table Part { partNo varchar [pk] partName varchar isManufactured boolean drawingNo varchar isPurchased boolean supplierCost decimal }",
      "Part(partNo [PK], partName, isManufactured, drawingNo, isPurchased, supplierCost)"
    ],
    expectedSchema: {
      tableName: "Part",
      columns: [
        { name: "partNo", type: "varchar(20)", isPK: true },
        { name: "partName", type: "varchar(60)" },
        { name: "isManufactured", type: "boolean" },
        { name: "drawingNo", type: "varchar(30)" },
        { name: "isPurchased", type: "boolean" },
        { name: "supplierCost", type: "decimal" }
      ]
    },
    explanation: "Option 8D: Kesishevchi (overlapping) subklasslar boolean bayroqlar orqali yagona jadvalda hal etildi."
  },
  {
    id: 144,
    sector: 10,
    difficulty: "10-Qavat • O'rta",
    source: "T02 Page 25 • FK Pointing to Subclass (Why Option 8A is Mandatory)",
    title: "Subklassga Tashqi Kalit Yo'nalishi (Project Manager FK)",
    story: "Seminar 2 Task 4 da muhim me'moriy qoida bor: Loyiha rahbari `Project.managerId` oddiy xodimga emas, aniq `ProjectManager` subklassiga havola bo'lishi shart. Buni qo'llash uchun `ProjectManager` alohida jadval bo'lishi (Option 8A) majburiydir!",
    taskUz: "Ikkala jadvalni chizing: `ProjectManager(empNo [PK, FK], bonus)` va `Project(projNo [PK], title, managerId [FK])`. Project.managerId ProjectManager.empNo ga yo'naltirilsin.",
    starterCode: "Table ProjectManager {\n  empNo int [pk, ref: > Employee.empNo]\n  bonus decimal\n}\n\nTable Project {\n  projNo int [pk]\n  title varchar\n  managerId int [ref: > ProjectManager.empNo]\n}",
    hint: "ProjectManager [PK, FK] bo'ladi; Project.managerId esa aynan ProjectManager.empNo ga [FK] bo'ladi.",
    solutions: [
      "Table ProjectManager { empNo int [pk, ref: > Employee.empNo] bonus decimal } Table Project { projNo int [pk] title varchar managerId int [ref: > ProjectManager.empNo] }",
      "ProjectManager(empNo [PK, FK], bonus)\nProject(projNo [PK], title, managerId [FK])"
    ],
    expectedSchema: {
      tables: [
        {
          tableName: "ProjectManager",
          columns: [
            { name: "empNo", type: "integer", isPK: true, isFK: true, references: "Employee(empNo)" },
            { name: "bonus", type: "decimal" }
          ]
        },
        {
          tableName: "Project",
          columns: [
            { name: "projNo", type: "integer", isPK: true },
            { name: "title", type: "varchar(80)" },
            { name: "managerId", type: "integer", isFK: true, references: "ProjectManager(empNo)" }
          ]
        }
      ]
    },
    explanation: "Subklassga FK yo'naltirilgan holda Option 8A referensial yaxlitlikni to'liq ta'minlaydi."
  },
  {
    id: 145,
    sector: 10,
    difficulty: "10-Qavat • O'rta",
    source: "L02 Slide 43 • 2-Tier Subclass Hierarchy",
    title: "2 Pog'onali Subklass Ierarxiyasi (Person -> Staff -> AcademicStaff)",
    story: "Inson `Person(personId, fullName)` -> Xodim `Staff(personId, salary)` -> Akademik o'qituvchi `AcademicStaff(personId, researchDomain)`. 2-pog'onali subklassda ham eng yuqori ota kaliti `personId` o'zgarishsiz saqlanadi.",
    taskUz: "`AcademicStaff` jadvalini chizing: `personId` [PK, FK] (Staff.personId ga) va `researchDomain` ustunlari bilan.",
    starterCode: "Table AcademicStaff {\n  personId int [pk, ref: > Staff.personId]\n  researchDomain varchar\n}",
    hint: "personId [PK, FK] Staff.personId ga yo'naltirilsin.",
    solutions: [
      "Table AcademicStaff { personId int [pk, ref: > Staff.personId] researchDomain varchar }",
      "AcademicStaff(personId [PK, FK], researchDomain)"
    ],
    expectedSchema: {
      tableName: "AcademicStaff",
      columns: [
        { name: "personId", type: "integer", isPK: true, isFK: true, references: "Staff(personId)" },
        { name: "researchDomain", type: "varchar(80)" }
      ]
    },
    explanation: "Ko'p bosqichli subklass ierarxiyasida ota PK har doim [PK, FK] bo'lib davom etadi."
  },
  {
    id: 146,
    sector: 10,
    difficulty: "10-Qavat • O'rta",
    source: "L02 Slide 43 • Bank Account EER Hierarchy",
    title: "Bank Hisob Raqamlari EER Ierarxiyasi (Savings & Checking)",
    story: "Bankda ota jadval `Account(accountNo, balance, openDate)` va uning ikkita subklassi: Jamg'arma `SavingsAccount(accountNo, interestRate)` va Joriy `CheckingAccount(accountNo, overdraftLimit)` mavjud.",
    taskUz: "Uchala jadvalni chizing: `Account(accountNo [PK], balance, openDate)`, `SavingsAccount(accountNo [PK, FK], interestRate)` va `CheckingAccount(accountNo [PK, FK], overdraftLimit)`.",
    starterCode: "Table Account {\n  accountNo varchar [pk]\n  balance decimal\n  openDate date\n}\n\nTable SavingsAccount {\n  accountNo varchar [pk, ref: > Account.accountNo]\n  interestRate decimal\n}\n\nTable CheckingAccount {\n  accountNo varchar [pk, ref: > Account.accountNo]\n  overdraftLimit decimal\n}",
    hint: "SavingsAccount va CheckingAccount ikkalasi ham accountNo [PK, FK] orqali Account ga ulanadi.",
    solutions: [
      "Table Account { accountNo varchar [pk] balance decimal openDate date } Table SavingsAccount { accountNo varchar [pk, ref: > Account.accountNo] interestRate decimal } Table CheckingAccount { accountNo varchar [pk, ref: > Account.accountNo] overdraftLimit decimal }",
      "Account(accountNo [PK], balance, openDate)\nSavingsAccount(accountNo [PK, FK], interestRate)\nCheckingAccount(accountNo [PK, FK], overdraftLimit)"
    ],
    expectedSchema: {
      tables: [
        {
          tableName: "Account",
          columns: [
            { name: "accountNo", type: "varchar(20)", isPK: true },
            { name: "balance", type: "decimal" },
            { name: "openDate", type: "date" }
          ]
        },
        {
          tableName: "SavingsAccount",
          columns: [
            { name: "accountNo", type: "varchar(20)", isPK: true, isFK: true, references: "Account(accountNo)" },
            { name: "interestRate", type: "decimal" }
          ]
        },
        {
          tableName: "CheckingAccount",
          columns: [
            { name: "accountNo", type: "varchar(20)", isPK: true, isFK: true, references: "Account(accountNo)" },
            { name: "overdraftLimit", type: "decimal" }
          ]
        }
      ]
    },
    explanation: "Bank hisob raqamlari EER ierarxiyasi Option 8A bo'yicha to'liq yaratildi."
  },
  {
    id: 147,
    sector: 10,
    difficulty: "10-Qavat • O'rta",
    source: "L02 Slide 43 • Patient In/Out EER Hierarchy",
    title: "Statsionar va Ambulator Bemorlar EER Ierarxiyasi",
    story: "Kasalxonada `Patient(patientId, fullName)` umumiy ota jadval bo'lib, uning ikkita subklassi bor: Statsionar yotuvchi `InPatient(patientId, bedNo, admitDate)` va Ambulator qatnovchi `OutPatient(patientId, clinicDate)`.",
    taskUz: "Ikkala subklass jadvalini chizing: `InPatient(patientId [PK, FK], bedNo, admitDate)` va `OutPatient(patientId [PK, FK], clinicDate)`. Ikkalasi ham Patient.patientId ga yo'naltirilsin.",
    starterCode: "Table InPatient {\n  patientId int [pk, ref: > Patient.patientId]\n  bedNo varchar\n  admitDate date\n}\n\nTable OutPatient {\n  patientId int [pk, ref: > Patient.patientId]\n  clinicDate date\n}",
    hint: "patientId ikkala jadvalda ham [PK, FK] bo'ladi.",
    solutions: [
      "Table InPatient { patientId int [pk, ref: > Patient.patientId] bedNo varchar admitDate date } Table OutPatient { patientId int [pk, ref: > Patient.patientId] clinicDate date }",
      "InPatient(patientId [PK, FK], bedNo, admitDate)\nOutPatient(patientId [PK, FK], clinicDate)"
    ],
    expectedSchema: {
      tables: [
        {
          tableName: "InPatient",
          columns: [
            { name: "patientId", type: "integer", isPK: true, isFK: true, references: "Patient(patientId)" },
            { name: "bedNo", type: "varchar(10)" },
            { name: "admitDate", type: "date" }
          ]
        },
        {
          tableName: "OutPatient",
          columns: [
            { name: "patientId", type: "integer", isPK: true, isFK: true, references: "Patient(patientId)" },
            { name: "clinicDate", type: "date" }
          ]
        }
      ]
    },
    explanation: "Statsionar va ambulator bemorlar subklass sxemasi chizildi."
  },
  {
    id: 148,
    sector: 10,
    difficulty: "10-Qavat • O'rta",
    source: "L02 Slide 43 • Vehicle Rental Booking Subclass Link",
    title: "Yengil Mashina Subklassi va Ijara Bronlash Jadvali",
    story: "Avtomobillar bazasida `Car(plateNo, numSeats)` ota `Vehicle(plateNo)` ning subklassi bo'lib, unga mijozlar `RentalBooking(bookingId, plateNo, custId, rentalDays)` orqali bron rasmiylashtiradi.",
    taskUz: "Ikkala jadvalni chizing: `Car(plateNo [PK, FK], numSeats)` va `RentalBooking(bookingId [PK], plateNo [FK], custId [FK], rentalDays)`. RentalBooking.plateNo Car.plateNo ga bog'lansin.",
    starterCode: "Table Car {\n  plateNo varchar [pk, ref: > Vehicle.plateNo]\n  numSeats int\n}\n\nTable RentalBooking {\n  bookingId int [pk]\n  plateNo varchar [ref: > Car.plateNo]\n  custId int [ref: > Customer.custId]\n  rentalDays int\n}",
    hint: "Car [PK, FK] bo'ladi; RentalBooking.plateNo esa Car.plateNo ga [FK] bo'ladi.",
    solutions: [
      "Table Car { plateNo varchar [pk, ref: > Vehicle.plateNo] numSeats int } Table RentalBooking { bookingId int [pk] plateNo varchar [ref: > Car.plateNo] custId int [ref: > Customer.custId] rentalDays int }",
      "Car(plateNo [PK, FK], numSeats)\nRentalBooking(bookingId [PK], plateNo [FK], custId [FK], rentalDays)"
    ],
    expectedSchema: {
      tables: [
        {
          tableName: "Car",
          columns: [
            { name: "plateNo", type: "varchar(15)", isPK: true, isFK: true, references: "Vehicle(plateNo)" },
            { name: "numSeats", type: "integer" }
          ]
        },
        {
          tableName: "RentalBooking",
          columns: [
            { name: "bookingId", type: "integer", isPK: true },
            { name: "plateNo", type: "varchar(15)", isFK: true, references: "Car(plateNo)" },
            { name: "custId", type: "integer", isFK: true, references: "Customer(custId)" },
            { name: "rentalDays", type: "integer" }
          ]
        }
      ]
    },
    explanation: "Car subklassi va unga yo'naltirilgan RentalBooking relying modeli qurildi."
  },
  {
    id: 149,
    sector: 10,
    difficulty: "10-Qavat • Qiyin",
    source: "T02 Task 4 • IT Enterprise Developer & QA Hierarchy",
    title: "Seminar 2 Task 4: Dasturchi va QA Muhandisi Subklasslari",
    story: "IT kompaniyasida `Employee(empNo, fName, lName)` xodimlaridan ikkita subklass ajratilgan: Dasturchi `Developer(empNo, githubUser)` va Testchi `QAEngineer(empNo, testTool)`.",
    taskUz: "Ikkala subklass jadvalini chizing: `Developer(empNo [PK, FK], githubUser)` va `QAEngineer(empNo [PK, FK], testTool)`. Ikkalasi ham Employee.empNo ga yo'naltirilsin.",
    starterCode: "Table Developer {\n  empNo int [pk, ref: > Employee.empNo]\n  githubUser varchar\n}\n\nTable QAEngineer {\n  empNo int [pk, ref: > Employee.empNo]\n  testTool varchar\n}",
    hint: "Developer va QAEngineer jadvallarining ikkalasi ham empNo [PK, FK] orqali Employee ga ulanadi.",
    solutions: [
      "Table Developer { empNo int [pk, ref: > Employee.empNo] githubUser varchar } Table QAEngineer { empNo int [pk, ref: > Employee.empNo] testTool varchar }",
      "Developer(empNo [PK, FK], githubUser)\nQAEngineer(empNo [PK, FK], testTool)"
    ],
    expectedSchema: {
      tables: [
        {
          tableName: "Developer",
          columns: [
            { name: "empNo", type: "integer", isPK: true, isFK: true, references: "Employee(empNo)" },
            { name: "githubUser", type: "varchar(50)" }
          ]
        },
        {
          tableName: "QAEngineer",
          columns: [
            { name: "empNo", type: "integer", isPK: true, isFK: true, references: "Employee(empNo)" },
            { name: "testTool", type: "varchar(50)" }
          ]
        }
      ]
    },
    explanation: "Developer va QAEngineer subklasslari Seminar 2 andozasida tuzildi."
  },
  {
    id: 150,
    sector: 10,
    difficulty: "10-Qavat • Master Grand Boss (Grand Finale)",
    source: "T02 Seminar Task 4 & L02 • Complete Enterprise EER Relational Schema",
    title: "150-Savol MASTER GRAND BOSS: Seminar 2 Task 4 Korporativ EER Arxitekturasi",
    story: "Grand Finale: Butun Week 2 kursining cho'qqisi! Kompaniyada 4 ta asosiy o'zaro bog'liq relatsiya mavjud: \n1) Xodimlar ota jadvali: `Employee(empNo, fName, lName)` \n2) Rahbar subklassi: `ProjectManager(empNo, bonus)` (Employee ga [PK, FK]) \n3) Loyiha jadvali: `Project(projNo, title, managerId)` (managerId ProjectManager.empNo ga [FK]) \n4) Oraliq ish taqsimoti jadvali: `WorksOn(empNo, projNo, hours)` (empNo Employee ga [FK], projNo Project ga [FK], ikkalasi kompozit [PK]).",
    taskUz: "Barcha 4 ta jadvalni to'liq relyatsion sxemada chizing: \n- `Employee(empNo [PK], fName, lName)` \n- `ProjectManager(empNo [PK, FK], bonus)` \n- `Project(projNo [PK], title, managerId [FK])` \n- `WorksOn((empNo, projNo) [PK], hours)`",
    starterCode: "Table Employee {\n  empNo int [pk]\n  fName varchar\n  lName varchar\n}\n\nTable ProjectManager {\n  empNo int [pk, ref: > Employee.empNo]\n  bonus decimal\n}\n\nTable Project {\n  projNo int [pk]\n  title varchar\n  managerId int [ref: > ProjectManager.empNo]\n}\n\nTable WorksOn {\n  empNo int [ref: > Employee.empNo]\n  projNo int [ref: > Project.projNo]\n  hours decimal\n  indexes {\n    (empNo, projNo) [pk]\n  }\n}",
    hint: "To'rtta jadvalni ketma-ket e'lon qiling: Employee, ProjectManager, Project va WorksOn.",
    solutions: [
      "Table Employee { empNo int [pk] fName varchar lName varchar } Table ProjectManager { empNo int [pk, ref: > Employee.empNo] bonus decimal } Table Project { projNo int [pk] title varchar managerId int [ref: > ProjectManager.empNo] } Table WorksOn { empNo int [ref: > Employee.empNo] projNo int [ref: > Project.projNo] hours decimal indexes { (empNo, projNo) [pk] } }",
      "Employee(empNo [PK], fName, lName)\nProjectManager(empNo [PK, FK], bonus)\nProject(projNo [PK], title, managerId [FK])\nWorksOn(empNo [PK, FK], projNo [PK, FK], hours)"
    ],
    expectedSchema: {
      tables: [
        {
          tableName: "Employee",
          columns: [
            { name: "empNo", type: "integer", isPK: true },
            { name: "fName", type: "varchar(50)" },
            { name: "lName", type: "varchar(50)" }
          ]
        },
        {
          tableName: "ProjectManager",
          columns: [
            { name: "empNo", type: "integer", isPK: true, isFK: true, references: "Employee(empNo)" },
            { name: "bonus", type: "decimal" }
          ]
        },
        {
          tableName: "Project",
          columns: [
            { name: "projNo", type: "integer", isPK: true },
            { name: "title", type: "varchar(80)" },
            { name: "managerId", type: "integer", isFK: true, references: "ProjectManager(empNo)" }
          ]
        },
        {
          tableName: "WorksOn",
          columns: [
            { name: "empNo", type: "integer", isPK: true, isFK: true, references: "Employee(empNo)" },
            { name: "projNo", type: "integer", isPK: true, isFK: true, references: "Project(projNo)" },
            { name: "hours", type: "decimal" }
          ]
        }
      ]
    },
    explanation: "TABRIKLAYMIZ! 150-savol Master Boss to'liq yechildi! Siz Week 2 Relational Model & EER Mapping kursini professional Bosh Relyatsion Me'mor darajasida o'zlashtirdingiz!"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = _scope.QUESTIONS_101_150;
}
