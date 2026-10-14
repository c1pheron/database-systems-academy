// ============================================================================
// ACADEMY DATABASE SYSTEMS (MODULE) — WEEK 2: RELATIONAL SCHEMA ARCHITECTURE
// Interactive Relational Table Designer, Blueprint Engine & Schema Grader
// ============================================================================

var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);

_scope.RELATIONAL_CATALOG = {
  version: "2026.2.5",
  course: "ACADEMY Database Systems (MODULE)",
  module: "Week 2 — Relational Schema Design & ER/EER Mapping (150 Practical Schema Challenges)",

  // 10 Progressive Schema Design Floors
  sectors: [
    {
      id: 1,
      name: "1-Qavat: Yagona Mustaqil Jadvallar",
      subtitle: "1 ta kuchli entitiy, Birlamchi kalit (PK) & kompozit atributlar yoyilishi",
      range: [1, 15],
      floorRange: [1, 15],
      color: "#4ea8de",
      badge: "1F • 1-Jadval",
      description: "Mustaqil entitiylar uchun 1 ta jadval chizish, PK tanlash, Name va Address kompozit atributlarini oddiy ustunlarga yoyish."
    },
    {
      id: 2,
      name: "2-Qavat: Tabiiy & Kompozit Birlamchi Kalitlar",
      subtitle: "Natural keys (VIN, ISBN, PINFL) & ko'p ustunli Kompozit PK",
      range: [16, 30],
      floorRange: [16, 30],
      color: "#d4af37",
      badge: "2F • Kompozit PK",
      description: "Tabiiy unikal kalitlar va 2-3 ustun birikmasidan iborat kompozit birlamchi kalitli jadvallarni loyihalash."
    },
    {
      id: 3,
      name: "3-Qavat: 1:* Aloqali Jadvallar (Ota & Bola)",
      subtitle: "2 ta jadval, Tashqi kalitni (FK) bolaga joylash, Crow's Foot || va o<",
      range: [31, 45],
      floorRange: [31, 45],
      color: "#64dfdf",
      badge: "3F • 1:* Aloqa",
      description: "1:* munosabatlar: FK ni har doim bola jadvaliga qo'yish, NOT NULL va Crow's Foot chiziqlarini tortish."
    },
    {
      id: 4,
      name: "4-Qavat: Zaif Entitiy Jadvallari (Weak Entities)",
      subtitle: "Ota + Zaif bola, Qisman kalit va kompozit [PK,FK1] kaliti",
      range: [46, 60],
      floorRange: [46, 60],
      color: "#c28b5e",
      badge: "4F • Zaif Entitiy",
      description: "Zaif entitiy jadvallarini chizish: (Owner_PK, Partial_Key) kompozit kalitini [PK,FK1] bilan bog'lash."
    },
    {
      id: 5,
      name: "5-Qavat: 1:1 Aloqali Jadvallar (Boshqaruv & Audit)",
      subtitle: "FK joylashuv strategiyasi (NULL larni kamaytirish), majburiy [UQ] cheklovi",
      range: [61, 75],
      floorRange: [61, 75],
      color: "#f39c12",
      badge: "5F • 1:1 Aloqa",
      description: "1:1 munosabatlar: FK ni majburiy (Total) tomonga qo'yish va 1:1 kafolati uchun FK ga majburiy [UQ] berish."
    },
    {
      id: 6,
      name: "6-Qavat: *:* Bog'lovchi Jadvallar (Bridge Tables)",
      subtitle: "3 ta jadval: 2 ta asosiy + 1 ta oraliq bog'lovchi, kompozit PK (FK1, FK2)",
      range: [76, 90],
      floorRange: [76, 90],
      color: "#e76f51",
      badge: "6F • *:* Bridge",
      description: "*:* munosabatlarni yangi oraliq jadval bilan hal qilish, aloqa atributlarini (hours, grade) oraliq jadvalga joylash."
    },
    {
      id: 7,
      name: "7-Qavat: Ko'p Qiymatli Atribut Jadvallari",
      subtitle: "Multi-valued atributlar (Phone[1..*], Skill[*]), 1NF normalizatsiyasi",
      range: [91, 105],
      floorRange: [91, 105],
      color: "#e63946",
      badge: "7F • 1NF Multi-Valued",
      description: "Ko'p qiymatli atributlar uchun alohida jadval ochish: (Entity_PK, MultiValued_Value) kompozit kaliti."
    },
    {
      id: 8,
      name: "8-Qavat: Ko'p Bosqichli Zanjirlar & Rekursiv Jadvallar",
      subtitle: "3–4 jadvalli ierarxiyalar va o'z-o'ziga bog'lanuvchi (supervisorId) jadvallar",
      range: [106, 120],
      floorRange: [106, 120],
      color: "#72efdd",
      badge: "8F • Ko'p Jadvalli",
      description: "Kompaniya -> Bo'lim -> Jamoa ko'p bosqichli 1:* zanjirlari va rekursiv rahbar jadvallarini loyihalash."
    },
    {
      id: 9,
      name: "9-Qavat: Ternary (3-talik Aloqa) Jadvallari",
      subtitle: "Step 7 Oltin Qoidasi: 1..1 kardinallikdagi FK ni PK dan chiqarish!",
      range: [121, 135],
      floorRange: [121, 135],
      color: "#9d4edd",
      badge: "9F • Ternary Step 7",
      description: "Teaches(Course, Semester, Instructor) murakkab aloqalari, 1..1 bo'lganda PK ni toraytirish oltin qoidasi."
    },
    {
      id: 10,
      name: "10-Qavat: EER Subclasslar (8A–8D) & Master Korporativ Sxema",
      subtitle: "Option 8A, 8B, 8C, 8D va Seminar 2 Task 4 Master Company EER arxitekturasi",
      range: [136, 150],
      floorRange: [136, 150],
      color: "#2a9d8f",
      badge: "10F • Master EER",
      description: "EER maxsuslashtirish opsiyalari va 7 ta jadval, 4 ta subklassdan iborat to'liq korporativ me'moriy tizim."
    }
  ],

  // 10 Architectural Dilemma Story Events
  mappingEvents: [
    {
      id: "ev1",
      title: "1-Dilemma: Kompozit Atributni Qanday Jadvallashtirish Kerak?",
      desc: "`Employee` entitiyasida `Name(fName, lName)` va `Address(street, city, postcode)` kompozit atributlari bor. Relyatsion jadvalda ular qanday paydo bo'lishi kerak?",
      choices: [
        {
          text: "'Name' va 'Address' ni olib tashlab, faqat ularning oddiy qismlarini (fName, lName, street, city, postcode) alohida ustunlar qilib chizish.",
          rewardXp: 40,
          explanation: "To'g'ri! Step 1 ga ko'ra kompozit atributlar relying jadvallarda faqat ularni tashkil etuvchi oddiy ustunlarga yoyiladi."
        },
        {
          text: "Bitta 'name' va bitta 'address' ustuni ochib ichiga barcha matnni birlashtirib yozish.",
          rewardXp: 10,
          explanation: "Bu qidirish va saralashni qiyinlashtiradi hamda reliance standartiga zid."
        }
      ]
    },
    {
      id: "ev2",
      title: "2-Dilemma: Zaif Entitiy Birlamchi Kalitini Qanday Tuzamiz?",
      desc: "Xodimning farzandi `Child` ning faqat ismi `name` va yoshi bor. Nega `Child` jadvalida faqat `name` PK bo'la olmaydi?",
      choices: [
        {
          text: "Chunki turli xodimlarning farzandlari bir xil ismga ega bo'lishi mumkin; PK majburiy ravishda kompozit: (empNo, name) bo'lishi shart!",
          rewardXp: 45,
          explanation: "Aynan to'g'ri! Zaif entitiyaning qisman kaliti ota entitiya PK si bilan birgalikda kompozit PK hosil qiladi."
        },
        {
          text: "Chunki ism matn turida bo'lgani uchun tez ishlamaydi.",
          rewardXp: 15,
          explanation: "Asosiy sabab ma'lumotlar yaxlitligi va unikal identifikatsiyadir."
        }
      ]
    },
    {
      id: "ev3",
      title: "3-Dilemma: 1:* Aloqada Tashqi Kalit (FK) Qayerga Tushadi?",
      desc: "`Department` (1) va `Employee` (*) o'rtasidagi munosabatda `deptNo` tashqi kaliti qaysi jadvalga ustun qilib qo'shilishi kerak?",
      choices: [
        {
          text: "Har doim *-tomonga (bola jadvaliga, ya'ni Employee ga) joylashtiriladi.",
          rewardXp: 45,
          explanation: "Step 3 Oltin Qoidasi: 1:* munosabatda tashqi kalit har doim ko'p tomondagi bola jadvaliga tushadi."
        },
        {
          text: "1-tomonga (Department jadvaliga) joylashtiriladi.",
          rewardXp: 10,
          explanation: "Xato! Ota tomonga qo'yilsa ko'p qiymatli bo'lib 1NF atomiklik qoidasi buziladi."
        }
      ]
    },
    {
      id: "ev4",
      title: "4-Dilemma: 1:1 Aloqani 1:* dan Nima Ajratib Turadi?",
      desc: "`Department` va `Employee` o'rtasida `Manages` (1:1) aloqasi bor. `Department` jadvaliga qo'yilgan `managerId` FK ustuniga qaysi belgi qo'yilmasa, aloqa 1:* bo'lib qoladi?",
      choices: [
        {
          text: "UNIQUE [UQ] cheklovi; u bitta xodimning ikkinchi bo'limga rahbar bo'lishini to'xtatadi.",
          rewardXp: 50,
          explanation: "Mukammal! 1:1 aloqaning kafolati tashqi kalitdagi UNIQUE cheklovidir."
        },
        {
          text: "CHECK cheklovi.",
          rewardXp: 15,
          explanation: "CHECK boshqa qiymatlarni tekshiradi, yagonalikni esa UNIQUE kafolatlaydi."
        }
      ]
    },
    {
      id: "ev5",
      title: "5-Dilemma: *:* Aloqada Nega 3-Jadval Shart?",
      desc: "Xodim ko'p loyihada, loyiha ko'p xodimda (`WorksOn`). Nega oraliq jadvalsiz buni ifodalab bo'lmaydi?",
      choices: [
        {
          text: "Chunki qaysi jadvalga FK qo'ysangiz ham u ko'p qiymatli bo'lib 1NF ni buzadi; ikkala PK ni birlashtiruvchi alohida oraliq jadval shart.",
          rewardXp: 45,
          explanation: "To'g'ri! *:* munosabat faqat ikkala PK ni kompozit PK qilib olgan yangi oraliq jadval bilan relying modelga o'tkaziladi."
        },
        {
          text: "Chunki loyiha nomi xodim nomidan uzunroq.",
          rewardXp: 10,
          explanation: "Nom uzunligi munosabat turiga aloqador emas."
        }
      ]
    },
    {
      id: "ev6",
      title: "6-Dilemma: Ko'p Qiymatli Telefon Raqamlarini Mapp Qilish",
      desc: "Bo'limning bir nechta telefoni bor: `Phone[1..*]`. Buni to'g'ri relyatsion sxemaga o'tkazish yo'li qanday?",
      choices: [
        {
          text: "Alohida `DeptPhone(deptNo [PK,FK1], phone [PK])` jadvali ochilib, ikkala maydon kompozit PK qilinadi.",
          rewardXp: 45,
          explanation: "Step 6 qoidasi: ko'p qiymatli atribut alohida jadval bo'lib, ota PK si bilan birgalikda kompozit PK hosil qiladi."
        },
        {
          text: "Department jadvalida 5 ta ustun ochish: phone1, phone2, phone3, phone4, phone5.",
          rewardXp: 15,
          explanation: "Bu cheklangan va xunuk dizayn bo'lib, bo'sh NULL larni keltirib chiqaradi."
        }
      ]
    },
    {
      id: "ev7",
      title: "7-Dilemma: Ternary Aloqada 1..1 Kardinallik Istisnosi (Step 7)",
      desc: "`Teaches(Course, Semester, Instructor)` aloqasida 'bitta semestrda bitta kursni faqat 1 ta o'qituvchi o'tishi mumkin' (Instructor 1..1). Birlamchi Kalit nima?",
      choices: [
        {
          text: "Faqat (CourseCode, SemesterCode); InstructorId esa Birlamchi Kalitdan chiqarilib, oddiy FK bo'lib qoladi!",
          rewardXp: 50,
          explanation: "Step 7 Oltin Qoidasi: Agar bitta ishtirokchi kardinalligi 1 bo'lsa, uning kaliti PK dan chiqariladi!"
        },
        {
          text: "Uchala kalit ham: (CourseCode, SemesterCode, InstructorId) kompozit PK bo'ladi.",
          rewardXp: 15,
          explanation: "Bu bir semestrda bitta kursni 2 kishi o'tishiga ruxsat berib qo'yadi va 1..1 qoidasini buzadi."
        }
      ]
    },
    {
      id: "ev8",
      title: "8-Dilemma: Superklass Mapping: Nega 8A Tanlanadi?",
      desc: "Kompaniyada `Project.managerId` faqat `ProjectManager` ga, `testerId` faqat `Tester` ga qaraydi. Nega Option 8C (bitta umumiy jadval) yaramaydi?",
      choices: [
        {
          text: "Chunki Tashqi Kalit ma'lum bir subklassga yo'nalishi kerak, 8C da esa alohida jadval bo'lmaydi; shuning uchun Option 8A shart!",
          rewardXp: 50,
          explanation: "A'lo me'moriy bilim! Agar boshqa jadvallardan subklassga FK kelsa, faqat Option 8A ishlaydi (Seminar 2 Task 4)."
        },
        {
          text: "Chunki 8C da jadvallar soni kam bo'lib qoladi.",
          rewardXp: 10,
          explanation: "Jadvallar soni emas, referensial yaxlitlik qoidasi buni talab qiladi."
        }
      ]
    },
    {
      id: "ev9",
      title: "9-Dilemma: Ikkinchi Darajali Subklassning Birlamchi Kaliti",
      desc: "`SeniorDeveloper` dasturchi `Developer` ning subklassi bo'lib, uning o'zi `Employee` ning subklassi. `SeniorDeveloper` ning PK si nima bo'ladi?",
      choices: [
        {
          text: "Eng yuqori ota superklassning PK si: `empNo` (PK,FK1 bo'lib xizmat qiladi).",
          rewardXp: 45,
          explanation: "To'g'ri! Subklasslar ierarxiyasi necha pog'onali bo'lishidan qat'i nazar eng boshdagi ota PK sini saqlaydi."
        },
        {
          text: "Yangi sun'iy 'senior_dev_id' yaratilishi shart.",
          rewardXp: 15,
          explanation: "Bu superklass bilan tabiiy 1:1 bog'liqlikni buzadi."
        }
      ]
    },
    {
      id: "ev10",
      title: "10-Dilemma: draw.io Crow's Foot Notatsiyasida Ikki Chiziqcha (||)",
      desc: "Ota-bola bog'lanish chizig'ida ota tomonga ikkita parallel chiziqcha ('||') qachon qo'yiladi?",
      choices: [
        {
          text: "Bola jadvalidagi Tashqi Kalit har doim qiymatga ega bo'lishi (NOT NULL) shart bo'lganda.",
          rewardXp: 45,
          explanation: "To'g'ri! Two bars (||) = exactly one, ya'ni bola har doim otaga ega bo'lishi shartligini bildiradi."
        },
        {
          text: "Tashqi kalit NULL bo'lishi mumkin bo'lganda.",
          rewardXp: 10,
          explanation: "NULL bo'lishi mumkin bo'lsa circle and bar (o|) qo'yiladi."
        }
      ]
    }
  ]
};

// ============================================================================
// INTERACTIVE RELATIONAL SCHEMA PARSER & GRADER (RELATIONAL_GRADER)
// Evaluates constructed schema models, table objects, columns, PK, FK, and UQ
// ============================================================================

_scope.RELATIONAL_GRADER = {
  // Parses text input (Relational notation or DBML) into a structured schema AST
  parseTextToSchema(text) {
    if (!text || typeof text !== 'string') return { tables: [] };
    const clean = text.replace(/--.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '').trim();
    const tables = [];

    // Format 1: DBML syntax: Table Name { col type [pk] ... }
    const dbmlRegex = /Table\s+([a-zA-Z0-9_]+)\s*\{([^}]+)\}/gi;
    let match;
    while ((match = dbmlRegex.exec(clean)) !== null) {
      const tableName = match[1];
      const body = match[2];
      const columns = [];
      const lines = body.split(/[\r\n;]+/).map(l => l.trim()).filter(Boolean);

      let compositePks = [];
      // Look for indexes { (c1, c2) [pk] }
      const idxMatch = body.match(/indexes\s*\{\s*\(([^)]+)\)\s*\[pk\]\s*\}/i);
      if (idxMatch) {
        compositePks = idxMatch[1].split(',').map(s => s.trim().toLowerCase());
      }

      for (const line of lines) {
        if (line.toLowerCase().startsWith('indexes')) continue;
        const tokens = line.split(/\s+/);
        if (tokens.length >= 1) {
          const colName = tokens[0];
          const colLower = colName.toLowerCase();
          const colType = tokens[1] || 'varchar';
          const isPk = line.toLowerCase().includes('[pk]') || compositePks.includes(colLower);
          const isFk = line.toLowerCase().includes('[fk]') || line.toLowerCase().includes('ref:') || line.toLowerCase().includes('foreign');
          const isUq = line.toLowerCase().includes('[unique]') || line.toLowerCase().includes('[uq]');
          const isNn = line.toLowerCase().includes('[not null]') || line.toLowerCase().includes('not null') || isPk;

          columns.push({
            name: colName,
            type: colType,
            isPK: isPk,
            isFK: isFk,
            isUQ: isUq,
            isNotNull: isNn
          });
        }
      }

      tables.push({ tableName, columns });
    }

    // Format 2: Relational Schema notation: TableName(col1 [PK], col2 [FK], ...)
    if (tables.length === 0) {
      const schemaRegex = /([a-zA-Z0-9_]+)\s*\(([^)]+)\)/g;
      let sMatch;
      while ((sMatch = schemaRegex.exec(clean)) !== null) {
        const tableName = sMatch[1];
        const colListStr = sMatch[2];
        const colDefs = colListStr.split(',').map(c => c.trim()).filter(Boolean);
        const columns = [];

        for (const colDef of colDefs) {
          const lower = colDef.toLowerCase();
          const colName = colDef.replace(/\[.*?\]|\*/g, '').trim().split(/\s+/)[0];
          const isPk = lower.includes('[pk]') || lower.includes('pk,') || lower.includes(',pk') || colDef.endsWith('*');
          const isFk = lower.includes('[fk]') || lower.includes('fk') || lower.includes('->');
          const isUq = lower.includes('[uq]') || lower.includes('unique');

          columns.push({
            name: colName,
            isPK: isPk,
            isFK: isFk,
            isUQ: isUq
          });
        }
        tables.push({ tableName, columns });
      }
    }

    return { tables };
  },

  // Main grading function
  grade(userInput, question) {
    if (!userInput || (typeof userInput === 'string' && !userInput.trim())) {
      return {
        passed: false,
        feedback: "Sxema bo'sh! Iltimos, jadvallarni chizing yoki relyatsion sxema yozing."
      };
    }

    // Check direct pattern or solution match first (for express quick inputs)
    if (typeof userInput === 'string') {
      const normalized = userInput.trim().replace(/\s+/g, ' ').toLowerCase();
      if (question.solutions) {
        for (const sol of question.solutions) {
          if (sol.trim().replace(/\s+/g, ' ').toLowerCase() === normalized) {
            return { passed: true, feedback: "Sxema to'liq mos keldi!" };
          }
        }
      }
      if (question.requiredPatterns) {
        let allPatternsMatch = true;
        for (const pat of question.requiredPatterns) {
          if (!pat.test(userInput)) {
            allPatternsMatch = false;
            break;
          }
        }
        if (allPatternsMatch) {
          return { passed: true, feedback: "Barcha me'moriy shartlar to'liq bajarildi!" };
        }
      }
    }

    // Parse AST
    let userSchema;
    if (typeof userInput === 'object' && userInput !== null) {
      if (Array.isArray(userInput.tables)) {
        userSchema = userInput;
      } else if (userInput.tableName) {
        userSchema = { tables: [userInput] };
      } else {
        userSchema = { tables: [] };
      }
    } else {
      userSchema = this.parseTextToSchema(userInput);
    }

    const exp = question.expectedSchema;
    if (!exp) {
      return { passed: true, feedback: "Sxema qabul qilindi!" };
    }

    // If expectedSchema has multiple tables
    const expectedTables = exp.tables || [exp];

    // Check table count
    if (userSchema.tables.length < expectedTables.length) {
      return {
        passed: false,
        feedback: `Jadvallar yetishmayapti: Ushbu topshiriqda kamida ${expectedTables.length} ta jadval chizishingiz kerak (Sizda: ${userSchema.tables.length} ta).`
      };
    }

    // Check each expected table
    for (const expTable of expectedTables) {
      const userTable = userSchema.tables.find(
        t => t.tableName.toLowerCase() === expTable.tableName.toLowerCase()
      );

      if (!userTable) {
        return {
          passed: false,
          feedback: `Kerakli jadval topilmadi: '${expTable.tableName}' nomli jadvalni yaratishingiz lozim.`
        };
      }

      // Check required columns in this table
      if (expTable.columns) {
        for (const expCol of expTable.columns) {
          const userCol = userTable.columns.find(
            c => c.name.toLowerCase() === expCol.name.toLowerCase()
          );

          if (!userCol) {
            return {
              passed: false,
              feedback: `'${userTable.tableName}' jadvalida '${expCol.name}' ustuni yetishmayapti!`
            };
          }

          // Check Primary Key
          if (expCol.isPK && !userCol.isPK) {
            return {
              passed: false,
              feedback: `'${userTable.tableName}' jadvalidagi '${expCol.name}' ustuni Birlamchi Kalit [PK] bo'lishi kerak!`
            };
          }

          // Check Foreign Key
          if (expCol.isFK && !userCol.isFK) {
            return {
              passed: false,
              feedback: `'${userTable.tableName}' jadvalidagi '${expCol.name}' ustuni Tashqi Kalit [FK] bo'lishi kerak!`
            };
          }

          // Check Unique constraint (crucial for 1:1)
          if (expCol.isUQ && !userCol.isUQ) {
            return {
              passed: false,
              feedback: `'${userTable.tableName}' jadvalidagi '${expCol.name}' ustuniga UNIQUE [UQ] cheklovi qo'yilishi shart (aks holda 1:1 aloqa 1:* ga aylanib ketadi)!`
            };
          }
        }
      }
    }

    return {
      passed: true,
      feedback: "A'lo! Barcha jadvallar, kalitlar, bog'liqliklar va multiplisitiy to'g'ri hal qilindi."
    };
  }
};

// ============================================================================
// RELATIONAL SCHEMA DRAW.IO XML EXPORTER
// ============================================================================
_scope.RELATIONAL_DRAWIO_EXPORTER = {
  exportToXml(schema) {
    const tables = schema.tables || [];
    const references = schema.references || [];

    let cells = '';
    let cellId = 2;
    const idMap = {};

    tables.forEach(tbl => {
      const tId = `tbl_${cellId++}`;
      idMap[tbl.tableName || tbl.name] = tId;
      const x = tbl.x || 100;
      const y = tbl.y || 100;
      const w = tbl.width || 200;
      const h = Math.max(90, 40 + (tbl.columns || []).length * 22);

      let colLines = (tbl.columns || []).map(c => {
        let label = c.name;
        if (c.isPK && c.isFK) label = `[PK,FK] ${label}`;
        else if (c.isPK) label = `[PK] ${label}`;
        else if (c.isFK) label = `[FK] ${label}`;
        if (c.type) label += ` : ${c.type}`;
        return label;
      }).join('&#10;');

      const label = `&lt;b&gt;${tbl.tableName || tbl.name}&lt;/b&gt;&#10;--------------------------------&#10;${colLines}`;
      const style = "shape=rectangle;whiteSpace=wrap;html=1;fontFamily=Helvetica;strokeWidth=1.5;strokeColor=#c8a96e;fillColor=#251e18;fontColor=#f2ede4;align=left;spacingLeft=8;";

      cells += `<mxCell id="${tId}" value="${label}" style="${style}" vertex="1" parent="1"><mxGeometry x="${x}" y="${y}" width="${w}" height="${h}" as="geometry"/></mxCell>\n`;
    });

    // Foreign Key Crow's Foot edges
    tables.forEach(childTable => {
      (childTable.columns || []).forEach(col => {
        if (col.isFK && col.references) {
          const rId = `edge_${cellId++}`;
          const childId = idMap[childTable.tableName || childTable.name] || '1';
          const parentId = idMap[col.references.table] || '1';
          cells += `<mxCell id="${rId}" value="${col.name} → ${col.references.column || 'id'}" style="endArrow=ERmany;startArrow=ERmandOne;html=1;strokeColor=#d19a52;strokeWidth=2;" edge="1" parent="1" source="${parentId}" target="${childId}">
            <mxGeometry relative="1" as="geometry"/>
          </mxCell>\n`;
        }
      });
    });

    references.forEach(ref => {
      const rId = `edge_${cellId++}`;
      const childId = idMap[ref.fromTable] || '1';
      const parentId = idMap[ref.toTable] || '1';
      cells += `<mxCell id="${rId}" value="${ref.fromCol} → ${ref.toCol}" style="endArrow=ERmany;startArrow=ERmandOne;html=1;strokeColor=#d19a52;strokeWidth=2;" edge="1" parent="1" source="${parentId}" target="${childId}">
        <mxGeometry relative="1" as="geometry"/>
      </mxCell>\n`;
    });

    return `<?xml version="1.0" encoding="UTF-8"?>
<mxfile host="app.diagrams.net" version="24.0.0">
  <diagram name="Relational Schema">
    <mxGraphModel dx="1200" dy="800" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="1169" pageHeight="826">
      <root>
        <mxCell id="0"/>
        <mxCell id="1" parent="0"/>
        ${cells}
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>`;
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    RELATIONAL_CATALOG: _scope.RELATIONAL_CATALOG,
    RELATIONAL_GRADER: _scope.RELATIONAL_GRADER,
    RELATIONAL_DRAWIO_EXPORTER: _scope.RELATIONAL_DRAWIO_EXPORTER
  };
}
