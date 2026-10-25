// ============================================================================
// ACADEMY DATABASE SYSTEMS (MODULE) — WEEK 3: SQL DDL & RELATIONAL ALGEBRA
// Data Architecture Foundry, Schema Catalog, and In-Memory DDL Parser/Grader
// ============================================================================

window.DDL_CATALOG = {
  version: "2026.3.0",
  course: "Database Systems Academy",
  module: "Week 3 — SQL DDL & Schema Engineering (150 Challenges)",

  // 10 Corporate Engineering Floors / Sectors
  sectors: [
    {
      id: 1,
      name: "Floor 1: DDL Fundamentals & Data Types",
      subtitle: "CREATE TABLE, DROP TABLE, and fundamental data types",
      range: [1, 15],
      floorRange: [1, 15],
      color: "#c8a96e",
      badge: "1F • Beginner",
      description: "Table creation, columns, and data types (integer, varchar, numeric, boolean, date, timestamp)."
    },
    {
      id: 2,
      name: "Floor 2: Primary Keys & Identity",
      subtitle: "PRIMARY KEY and GENERATED ALWAYS AS IDENTITY",
      range: [16, 30],
      floorRange: [16, 30],
      color: "#d4af37",
      badge: "2F • Keys",
      description: "Primary keys, named constraints, and auto-increment mechanisms (START WITH, INCREMENT BY)."
    },
    {
      id: 3,
      name: "Floor 3: Uniqueness & NOT NULL",
      subtitle: "Unique columns and mandatory field enforcement",
      range: [31, 45],
      floorRange: [31, 45],
      color: "#7c9a82",
      badge: "3F • Constraints",
      description: "Column and table-level UNIQUE constraints and NOT NULL integrity rules."
    },
    {
      id: 4,
      name: "Floor 4: Business Rules (CHECK Constraints)",
      subtitle: "Logical conditions and data range validations",
      range: [46, 60],
      floorRange: [46, 60],
      color: "#b89778",
      badge: "4F • Business Logic",
      description: "CHECK constraints: budget limits, salary ranges, email patterns, and comparison rules."
    },
    {
      id: 5,
      name: "Floor 5: Default Values & Composite Keys",
      subtitle: "DEFAULT values and multi-column primary keys",
      range: [61, 75],
      floorRange: [61, 75],
      color: "#8c6244",
      badge: "5F • Composite",
      description: "DEFAULT values (CURRENT_TIMESTAMP, boolean, numbers) and composite primary keys."
    },
    {
      id: 6,
      name: "Floor 6: Foreign Keys & Relationships",
      subtitle: "Relational dependencies and REFERENCES rules",
      range: [76, 90],
      floorRange: [76, 90],
      color: "#68899e",
      badge: "6F • Relationships",
      description: "Foreign keys between parent and child tables and referential integrity."
    },
    {
      id: 7,
      name: "Floor 7: Referential Actions (FK Actions)",
      subtitle: "CASCADE, SET NULL, RESTRICT, and NO ACTION",
      range: [91, 105],
      floorRange: [91, 105],
      color: "#c97a63",
      badge: "7F • Actions",
      description: "ON DELETE and ON UPDATE actions: cascading deletes, setting null, and restrictions."
    },
    {
      id: 8,
      name: "Floor 8: Table Structure Alteration (ALTER TABLE)",
      subtitle: "Adding, dropping, and renaming columns",
      range: [106, 120],
      floorRange: [106, 120],
      color: "#4a6b5b",
      badge: "8F • Migration",
      description: "ALTER TABLE ADD COLUMN, DROP COLUMN, RENAME COLUMN, and RENAME TO operations."
    },
    {
      id: 9,
      name: "Floor 9: Dynamic Constraint Management",
      subtitle: "Adding and dropping constraints via ALTER TABLE",
      range: [121, 135],
      floorRange: [121, 135],
      color: "#8c4a3e",
      badge: "9F • Architecture",
      description: "Adding and dropping constraints dynamically on existing tables."
    },
    {
      id: 10,
      name: "Floor 10: Relational Algebra & Enterprise Schema",
      subtitle: "Relational algebra operations and enterprise architecture",
      range: [136, 150],
      floorRange: [136, 150],
      color: "#d4af37",
      badge: "10F • Master Architect",
      description: "Relational algebra (σ, π, ⨝, ∪, −) and comprehensive multi-table enterprise schema design."
    }
  ],

  // Interactive Real-Life Engineering Events ("Voqealiklar")
  architectureEvents: [
    {
      id: "ev1",
      triggerAfterQ: 15,
      speaker: "Chief Architect Atlas",
      role: "Bosh Tizim Arxitektori",
      avatar: "🏛",
      title: "1-Bosqich Auditi: Ma'lumotlar Turlarini Tanlash",
      narrative: "Yangi loyihada xodimlar maoshi uchun ustun yaratilmoqda. Junior dasturchi `salary float` turidan foydalanmoqchi bo'ldi. Moliya bo'limi esa yaxlitlashdagi tiyin yo'qolishlaridan xavotirda.",
      choices: [
        {
          text: "Moliyaviy hisob-kitoblar uchun aniq `numeric(10,2)` (yoki `decimal`) turidan foydalanish lozim.",
          correct: true,
          outcome: "Ajoyib qaror! `float` suzuvchi nuqtali approksimatsiyaga ega, moliya va bank tizimlarida faqat `numeric(p, s)` ishlatiladi.",
          bonus: 400
        },
        {
          text: "Baza xotirasini tejash uchun `integer` ga o'girib, tiyinlarni hisoblamaslik kerak.",
          correct: false,
          outcome: "Noto'g'ri: Audit talablariga ko'ra tiyinlar (sentlar) qat'iy saqlanishi shart."
        }
      ]
    },
    {
      id: "ev2",
      triggerAfterQ: 30,
      speaker: "Engineer Maya",
      role: "Katta Ma'lumotlar Muhandisi",
      avatar: "👩‍💻",
      title: "Identity vs Serial: PostgreSQL Standartlari",
      narrative: "Tizim PostgreSQL 15 versiyasiga ko'chirilmoqda. Eski skriptlarda `id SERIAL PRIMARY KEY` yozilgan. Maya SQL standartiga mos `IDENTITY` mexanizmiga o'tishni tavsiya qilmoqda.",
      choices: [
        {
          text: "`id integer GENERATED ALWAYS AS IDENTITY` sintaksisini qo'llash — bu zamonaviy SQL:2003 standarti.",
          correct: true,
          outcome: "Mutlaqo to'g'ri! `IDENTITY` ustunlari PostgreSQL da ketma-ketliklarni xavfsiz boshqaradi va tashqaridan qo'lda noo'rin ID yozilishining oldini oladi.",
          bonus: 450
        },
        {
          text: "Ikkalasining hech qanday farqi yo'q, xohlaganini yozish mumkin.",
          correct: false,
          outcome: "Farqi bor: `SERIAL` eski PostgreSQL ichki makrosi bo'lib, SQL xalqaro standartiga kirmaydi."
        }
      ]
    },
    {
      id: "ev3",
      triggerAfterQ: 60,
      speaker: "Security Auditor Rustam",
      role: "Xavfsizlik va Muvofiqlik Auditori",
      avatar: "🛡",
      title: "CHECK Cheklovi va NULL Qiymatlar Semantikasi",
      narrative: "Auditor `CHECK (salary > 0)` cheklovi qo'yilgan jadvalni tekshirmoqda. Savol: agar yangi kiritilgan qatorda `salary` qiymati berilmasa (NULL bo'lsa), ushbu CHECK qoidasi uni rad etadimi?",
      choices: [
        {
          text: "Yo'q! SQL dagi 3-qiymatli mantiqqa ko'ra `NULL > 0` UNKNOWN beradi, CHECK esa faqat FALSE bo'lsagina rad etadi. Shuning uchun qo'shimcha `NOT NULL` ham kerak!",
          correct: true,
          outcome: "Mukammal tushuncha! SQL da CHECK sharti `UNKNOWN` bo'lsa qator qabul qilinadi. Shuning uchun majburiylik uchun alohida `NOT NULL` zarur.",
          bonus: 500
        },
        {
          text: "Ha, CHECK avtomatik ravishda barcha NULL qiymatlarni ham bloklaydi.",
          correct: false,
          outcome: "Xato! Bu ko'p uchraydigan tuzoq. CHECK cheklovi NULL ni o'tkazib yuboradi."
        }
      ]
    },
    {
      id: "ev4",
      triggerAfterQ: 105,
      speaker: "Chief Architect Atlas",
      role: "Bosh Tizim Arxitektori",
      avatar: "🏛",
      title: "Kritik Tanlov: ON DELETE CASCADE vs RESTRICT",
      narrative: "Bizda `department` (ota jadval) va `employee` (bola jadval) bor. Bo'lim tugatilganda (DELETE) unga tegishli xodimlar yozuvlari bilan nima sodir bo'lishi kerak?",
      choices: [
        {
          text: "Xodimlar tasodifan o'chib ketmasligi uchun `ON DELETE RESTRICT` (yoki `NO ACTION`), yoki bo'limsiz qolishi uchun `SET NULL` qo'llash xavfsizroq.",
          correct: true,
          outcome: "Tizim yaxlitligi saqlab qolindi! `CASCADE` qo'yilsa, bitta bo'lim o'chirilganda yuzlab xodimlarning barcha shaxsiy profillari bazadan butunlay yo'qolib ketishi mumkin edi.",
          bonus: 550
        },
        {
          text: "Har doim faqat `ON DELETE CASCADE` ishlatish kerak, shunda xatolik chiqmaydi.",
          correct: false,
          outcome: "Juda xatarli! Real biznes tizimlarida o'rganilmagan `CASCADE` ma'lumotlarning jiddiy yo'qotilishiga olib keladi."
        }
      ]
    }
  ],

  // Live Server Foundry News Ticker
  newsTicker: [
    { speaker: "🔧 Server Rack A1", text: "PostgreSQL 16 Engine online. Transactional DDL ready." },
    { speaker: "📐 Arxitektura Doskasi", text: "All tables modeled according to Relational Schema standards." },
    { speaker: "🛡 Xavfsizlik Konsoli", text: "Primary and Foreign Key (PK/FK) integrity chain active." },
    { speaker: "⚡ Tizim Ko'rsatkichi", text: "150 DDL architectural challenges queued for execution." }
  ]
};

// ============================================================================
// COMPREHENSIVE IN-MEMORY SQL DDL PARSER, SCHEMA ENGINE & GRADER
// ============================================================================

window.DDL_GRADER = {
  // Normalize SQL DDL strings
  normalizeDDL(sql) {
    if (!sql) return "";
    let s = sql
      .replace(/--.*$/gm, " ")
      .replace(/\/\*[\s\S]*?\*\//g, " ")
      .trim()
      .replace(/;+\s*$/g, "")
      .replace(/[‘’]/g, "'")
      .replace(/[“”]/g, '"')
      .replace(/\bint\b/gi, "integer")
      .replace(/\bbool\b/gi, "boolean")
      .replace(/\bcharacter\s+varying\b/gi, "varchar")
      .replace(/\s+/g, " ")
      .trim();
    return s;
  },

  normalizeType(t) {
    if (!t) return "";
    let s = t.toLowerCase().replace(/\s+/g, "");
    if (s === "int" || s.startsWith("int4") || s === "integer") return "integer";
    if (s.startsWith("int8") || s === "bigint") return "bigint";
    if (s.startsWith("int2") || s === "smallint") return "smallint";
    if (s === "bool" || s === "boolean") return "boolean";
    if (s.startsWith("charactervarying")) return s.replace("charactervarying", "varchar");
    return s;
  },

  // Pinpoint Syntax and Semantic Diagnostics in Uzbek
  detectDiagnostics(rawSql, question) {
    if (!rawSql || !rawSql.trim()) {
      return "Workbench terminal is empty! Type your SQL DDL code and click 'Run & Test' (Ctrl+Enter).";
    }

    const trimmed = rawSql.trim();

    // 1. Single quotes balance
    let quoteCount = 0;
    for (let i = 0; i < trimmed.length; i++) {
      if (trimmed[i] === "'") {
        if (i > 0 && trimmed[i - 1] === "\\") continue;
        quoteCount++;
      }
    }
    if (quoteCount % 2 !== 0) {
      return "Syntax error: Unclosed single quote ('). Check quotes at the end of the line.";
    }

    // 2. Parentheses balance
    let pCount = 0;
    for (let i = 0; i < trimmed.length; i++) {
      if (trimmed[i] === "(") pCount++;
      if (trimmed[i] === ")") pCount--;
      if (pCount < 0) {
        return "Syntax error: Unbalanced parentheses — unexpected closing ')'.";
      }
    }
    if (pCount !== 0) {
      return `Syntax error: Unbalanced parentheses — ${pCount} unclosed '('.`;
    }

    // 3. Must start with SQL DDL / DML command
    if (!/^\s*(CREATE|ALTER|DROP|TRUNCATE|INSERT|UPDATE|DELETE|SET|SELECT)\b/i.test(trimmed)) {
      return "Syntax error: SQL statement must begin with a valid command (CREATE, ALTER, DROP, TRUNCATE, INSERT, UPDATE, DELETE, SET, or SELECT).";
    }

    // 4. Common Typos in Data Types
    if (/\bvarchr\b/i.test(trimmed)) {
      return "Type error: 'varchr' detected, correct spelling is 'varchar(...)'.";
    }
    if (/\bintiger\b/i.test(trimmed) || /\binteger\s*\(\d+\)/i.test(trimmed)) {
      return "Type error: Integer type in PostgreSQL is 'integer' (or 'int') without parentheses.";
    }
    if (/\bboolean\s*\(\d+\)/i.test(trimmed)) {
      return "Type error: 'boolean' type is written without parentheses.";
    }

    // 5. Common Constraint Typos
    if (/\bcontraint\b/i.test(trimmed)) {
      return "Syntax error: Typo in keyword — write 'CONSTRAINT'.";
    }
    if (/\bforeing\s+key\b/i.test(trimmed)) {
      return "Syntax error: Write 'FOREIGN KEY' instead of 'foreing'.";
    }
    if (/\breference\b/i.test(trimmed) && !/\breferences\b/i.test(trimmed)) {
      return "Syntax error: Use plural 'REFERENCES' instead of 'reference'.";
    }

    // 6. Question specific trap checks
    if (question.trapChecks && Array.isArray(question.trapChecks)) {
      for (const tc of question.trapChecks) {
        if (tc.regex && tc.regex.test(trimmed)) {
          return tc.message;
        }
        if (tc.mustContain && !tc.mustContain.test(trimmed)) {
          return tc.message;
        }
      }
    }

    return null;
  },

  // Parse CREATE TABLE statement into structured schema object
  parseCreateTable(sql) {
    try {
      const norm = this.normalizeDDL(sql);
      const match = norm.match(/^create\s+table\s+([a-zA-Z0-9_]+)\s*\(([\s\S]+)\)$/i);
      if (!match) return null;

      const tableName = match[1].toLowerCase();
      const body = match[2];

      // Split body into items respecting nested parentheses
      const items = [];
      let depth = 0;
      let start = 0;
      for (let i = 0; i < body.length; i++) {
        if (body[i] === "(") depth++;
        if (body[i] === ")") depth--;
        if (body[i] === "," && depth === 0) {
          items.push(body.slice(start, i).trim());
          start = i + 1;
        }
      }
      if (start < body.length) {
        items.push(body.slice(start).trim());
      }

      const columns = [];
      const constraints = [];

      items.forEach((item) => {
        // Table-level named constraint
        const mConstraint = item.match(/^constraint\s+([a-zA-Z0-9_]+)\s+(.+)$/i);
        if (mConstraint) {
          const cName = mConstraint[1].toLowerCase();
          const cDef = mConstraint[2].trim();
          constraints.push({ name: cName, definition: cDef });
          return;
        }

        // Table-level unnamed PRIMARY KEY / FOREIGN KEY / UNIQUE / CHECK
        if (/^primary\s+key\s*\(/i.test(item)) {
          constraints.push({ name: `pk_${tableName}`, definition: item });
          return;
        }
        if (/^foreign\s+key\s*\(/i.test(item)) {
          constraints.push({ name: `fk_${tableName}`, definition: item });
          return;
        }
        if (/^unique\s*\(/i.test(item)) {
          constraints.push({ name: `uq_${tableName}`, definition: item });
          return;
        }
        if (/^check\s*\(/i.test(item)) {
          constraints.push({ name: `ck_${tableName}`, definition: item });
          return;
        }

        // Regular column definition
        const colParts = item.match(/^([a-zA-Z0-9_]+)\s+([a-zA-Z0-9_]+(?:\s*\([^)]+\))?)(.*)$/i);
        if (colParts) {
          const colName = colParts[1].toLowerCase();
          const colType = colParts[2].toLowerCase().replace(/\s+/g, "");
          const colModifiers = colParts[3].trim();
          columns.push({
            name: colName,
            type: colType,
            isNotNull: /\bnot\s+null\b/i.test(colModifiers),
            isPK: /\bprimary\s+key\b/i.test(colModifiers),
            isUQ: /\bunique\b/i.test(colModifiers),
            hasIdentity: /\bgenerated\s+always\s+as\s+identity\b/i.test(colModifiers),
            modifiers: colModifiers
          });
        }
      });

      return {
        type: "CREATE_TABLE",
        tableName,
        columns,
        constraints
      };
    } catch (e) {
      return null;
    }
  },

  // Parse ALTER TABLE statement
  parseAlterTable(sql) {
    try {
      const norm = this.normalizeDDL(sql);
      const match = norm.match(/^alter\s+table\s+([a-zA-Z0-9_]+)\s+([\s\S]+)$/i);
      if (!match) return null;

      const tableName = match[1].toLowerCase();
      const actionText = match[2].trim();

      return {
        type: "ALTER_TABLE",
        tableName,
        actionText
      };
    } catch (e) {
      return null;
    }
  },

  // Main Comprehensive DDL Grader
  grade(rawSql, question) {
    // Step 1: Pinpoint syntax & semantic diagnostics
    const diagMsg = this.detectDiagnostics(rawSql, question);
    if (diagMsg) {
      return { passed: false, feedback: diagMsg };
    }

    const normUser = this.normalizeDDL(rawSql).toLowerCase();

    // Step 2: Direct match against official canonical solutions
    if (question.solutions && question.solutions.length > 0) {
      for (const sol of question.solutions) {
        const normSol = this.normalizeDDL(sol).toLowerCase();
        if (normUser === normSol) {
          return {
            passed: true,
            feedback: question.explanation || "Architecture verified! SQL DDL executed successfully."
          };
        }
      }
    }

    // Step 3: Required Patterns matching
    if (question.requiredPatterns && question.requiredPatterns.length > 0) {
      const validPatterns = question.requiredPatterns.filter(pat => {
        if (!pat) return false;
        if (typeof pat === 'object' && !(pat instanceof RegExp) && !Array.isArray(pat) && Object.keys(pat).length === 0) {
          return false;
        }
        return true;
      });

      const allMatched = validPatterns.length > 0 ? validPatterns.every((pat) => {
        if (pat instanceof RegExp) {
          return pat.test(rawSql) || pat.test(normUser);
        }
        if (Array.isArray(pat)) {
          return pat.some((sub) =>
            sub instanceof RegExp
              ? sub.test(rawSql) || sub.test(normUser)
              : normUser.includes(sub.toLowerCase())
          );
        }
        return normUser.includes(String(pat).toLowerCase());
      }) : false;

      const forbiddenHit =
        question.forbiddenPatterns &&
        question.forbiddenPatterns.some((f) =>
          f instanceof RegExp ? f.test(rawSql) || f.test(normUser) : normUser.includes(String(f).toLowerCase())
        );

      if (allMatched && !forbiddenHit) {
        return {
          passed: true,
          feedback: question.explanation || "Architecture verified! All structural requirements satisfied."
        };
      }
    }

    // Step 4: Semantic AST evaluation for CREATE TABLE
    const parsedUser = this.parseCreateTable(rawSql);
    if (parsedUser && question.expectedSchema) {
      const exp = question.expectedSchema;

      // Table name check
      if (exp.tableName && parsedUser.tableName !== exp.tableName.toLowerCase()) {
        return {
          passed: false,
          feedback: `Table name mismatch: expected '${exp.tableName}', found '${parsedUser.tableName}'.`
        };
      }

      // Column count check
      if (exp.columns && parsedUser.columns.length !== exp.columns.length) {
        return {
          passed: false,
          feedback: `Column count mismatch: you defined ${parsedUser.columns.length} columns, but ${exp.columns.length} columns were expected.`
        };
      }

      // Check each expected column
      if (exp.columns) {
        for (const expCol of exp.columns) {
          const userCol = parsedUser.columns.find((c) => c.name === expCol.name.toLowerCase());
          if (!userCol) {
            return {
              passed: false,
              feedback: `Missing column: '${expCol.name}' was not found in table definition.`
            };
          }
          const uTypeNorm = this.normalizeType(userCol.type);
          const eTypeNorm = this.normalizeType(expCol.type);
          if (eTypeNorm && !uTypeNorm.startsWith(eTypeNorm) && !eTypeNorm.startsWith(uTypeNorm)) {
            return {
              passed: false,
              feedback: `Column type mismatch for '${expCol.name}': expected '${expCol.type}', found '${userCol.type}'.`
            };
          }
        }
      }

      // Check required constraints
      if (exp.requiredConstraints) {
        for (const reqC of exp.requiredConstraints) {
          const found = parsedUser.constraints.some((c) =>
            c.name.includes(reqC.toLowerCase()) || c.definition.toLowerCase().includes(reqC.toLowerCase())
          );
          if (!found) {
            return {
              passed: false,
              feedback: `Missing constraint: '${reqC}' constraint was not declared.`
            };
          }
        }
      }

      return {
        passed: true,
        feedback: question.explanation || "Architecture verified! Table schema and constraints successfully created."
      };
    }

    // Contextual hints if query was close
    let hintFeedback = "There is a discrepancy in the DDL statement.";
    if (!/\bCONSTRAINT\b/i.test(rawSql) && /\bconstraint\b/i.test(question.solutions?.[0] || "")) {
      hintFeedback = "A named CONSTRAINT is required. Use the 'CONSTRAINT name ...' syntax.";
    } else if (!/\bPRIMARY\s+KEY\b/i.test(rawSql) && /\bprimary\s+key\b/i.test(question.solutions?.[0] || "")) {
      hintFeedback = "PRIMARY KEY must be declared.";
    } else if (!/\bREFERENCES\b/i.test(rawSql) && /\breferences\b/i.test(question.solutions?.[0] || "")) {
      hintFeedback = "Specify the parent table for the FOREIGN KEY using 'REFERENCES parent_table(column)'.";
    } else if (!/\bCHECK\b/i.test(rawSql) && /\bcheck\b/i.test(question.solutions?.[0] || "")) {
      hintFeedback = "Did you remember to include the 'CHECK (...)' constraint for business rules?";
    } else {
      hintFeedback = "DDL does not fully match specifications. Check keywords, column types, or constraint names. Click 'Hint' for guidance.";
    }

    return {
      passed: false,
      feedback: hintFeedback
    };
  },

  // Generates visual schema model for the live schema diagram
  getSchemaPreview(question) {
    if (question.expectedSchema) {
      return question.expectedSchema;
    }
    return {
      tableName: "department",
      columns: [
        { name: "id", type: "integer", isPK: true, isIdentity: true },
        { name: "title", type: "varchar(100)", isUQ: true, isNotNull: true },
        { name: "location", type: "varchar(50)", isNotNull: false },
        { name: "budget", type: "numeric(12,2)", hasCheck: true }
      ]
    };
  }
};
