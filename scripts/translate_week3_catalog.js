const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '../week3/data/ddl_catalog.js');
let content = fs.readFileSync(targetPath, 'utf8');

// Header
content = content.replace("course: \"ACADEMY Database Systems (MODULE)\",", "course: \"Database Systems Academy\",");
content = content.replace(/module: "Week 3 — SQL DDL & Relational Algebra.*",/, 'module: "Week 3 — SQL DDL & Schema Engineering (150 Challenges)",');

// Sectors
const sectorsEn = [
  {
    id: 1,
    name: "Floor 1: DDL Fundamentals & Data Types",
    subtitle: "CREATE TABLE, DROP TABLE, and fundamental data types",
    badge: "1F • Beginner",
    description: "Table creation, columns, and data types (integer, varchar, numeric, boolean, date, timestamp)."
  },
  {
    id: 2,
    name: "Floor 2: Primary Keys & Identity",
    subtitle: "PRIMARY KEY and GENERATED ALWAYS AS IDENTITY",
    badge: "2F • Keys",
    description: "Primary keys, named constraints, and auto-increment mechanisms (START WITH, INCREMENT BY)."
  },
  {
    id: 3,
    name: "Floor 3: Uniqueness & NOT NULL",
    subtitle: "Unique columns and mandatory field enforcement",
    badge: "3F • Constraints",
    description: "Column and table-level UNIQUE constraints and NOT NULL integrity rules."
  },
  {
    id: 4,
    name: "Floor 4: Business Rules (CHECK Constraints)",
    subtitle: "Logical conditions and data range validations",
    badge: "4F • Business Logic",
    description: "CHECK constraints: budget limits, salary ranges, email patterns, and comparison rules."
  },
  {
    id: 5,
    name: "Floor 5: Default Values & Composite Keys",
    subtitle: "DEFAULT values and multi-column primary keys",
    badge: "5F • Composite",
    description: "DEFAULT values (CURRENT_TIMESTAMP, boolean, numbers) and composite primary keys."
  },
  {
    id: 6,
    name: "Floor 6: Foreign Keys & Relationships",
    subtitle: "Relational dependencies and REFERENCES rules",
    badge: "6F • Relationships",
    description: "Foreign keys between parent and child tables and referential integrity."
  },
  {
    id: 7,
    name: "Floor 7: Referential Actions (FK Actions)",
    subtitle: "CASCADE, SET NULL, RESTRICT, and NO ACTION",
    badge: "7F • Actions",
    description: "ON DELETE and ON UPDATE actions: cascading deletes, setting null, and restrictions."
  },
  {
    id: 8,
    name: "Floor 8: Table Structure Alteration (ALTER TABLE)",
    subtitle: "Adding, dropping, and renaming columns",
    badge: "8F • Migration",
    description: "ALTER TABLE ADD COLUMN, DROP COLUMN, RENAME COLUMN, and RENAME TO operations."
  },
  {
    id: 9,
    name: "Floor 9: Dynamic Constraint Management",
    subtitle: "Adding and dropping constraints via ALTER TABLE",
    badge: "9F • Architecture",
    description: "Adding and dropping constraints dynamically on existing tables."
  },
  {
    id: 10,
    name: "Floor 10: Relational Algebra & Enterprise Schema",
    subtitle: "Relational algebra operations and enterprise architecture",
    badge: "10F • Master Architect",
    description: "Relational algebra (σ, π, ⨝, ∪, −) and comprehensive multi-table enterprise schema design."
  }
];

// Replace sector definitions in content
sectorsEn.forEach(s => {
  const regName = new RegExp(`name:\\s*"${s.id}-Qavat:[^"]*"`);
  content = content.replace(regName, `name: "${s.name}"`);

  const regSub = new RegExp(`id:\\s*${s.id},[\\s\\S]*?subtitle:\\s*"[^"]*"`);
  content = content.replace(regSub, (match) => {
    return match.replace(/subtitle:\s*"[^"]*"/, `subtitle: "${s.subtitle}"`);
  });

  const regBadge = new RegExp(`id:\\s*${s.id},[\\s\\S]*?badge:\\s*"[^"]*"`);
  content = content.replace(regBadge, (match) => {
    return match.replace(/badge:\s*"[^"]*"/, `badge: "${s.badge}"`);
  });

  const regDesc = new RegExp(`id:\\s*${s.id},[\\s\\S]*?description:\\s*"[^"]*"`);
  content = content.replace(regDesc, (match) => {
    return match.replace(/description:\s*"[^"]*"/, `description: "${s.description}"`);
  });
});

// Translate news ticker
content = content.replace("PostgreSQL 16 Engine ishga tushirildi. Tranzaksiyaviy DDL tayyor.", "PostgreSQL 16 Engine online. Transactional DDL ready.");
content = content.replace("Barcha jadvallar Relyatsion Modellashtirish (T03) qoidalariga muvofiq loyihalanmoqda.", "All tables modeled according to Relational Schema standards.");
content = content.replace("Birlamchi va Tashqi kalitlar (PK/FK) yaxlitlik zanjiri faol holatda.", "Primary and Foreign Key (PK/FK) integrity chain active.");
content = content.replace("150 ta DDL loyihasi bo'yicha arxitektura topshiriqlari navbatda turibdi.", "150 DDL architectural challenges queued for execution.");

// Translate detectDiagnostics
content = content.replace(
  "Ishchi terminal bo'sh! SQL DDL kodingizni yozib, 'Buyruqni Bajarish' (Ctrl+Enter) tugmasini bosing.",
  "Workbench terminal is empty! Type your SQL DDL code and click 'Run & Test' (Ctrl+Enter)."
);
content = content.replace(
  "Sintaksis xatosi: Matnli tirnoq (') yopilmagan. Satr oxiridagi tirnoqni tekshiring.",
  "Syntax error: Unclosed single quote ('). Check quotes at the end of the line."
);
content = content.replace(
  "Sintaksis xatosi: Qavslar balansi buzilgan — ortiqcha yopuvchi ')' qavs yozilgan.",
  "Syntax error: Unbalanced parentheses — unexpected closing ')'."
);
content = content.replace(
  "Sintaksis xatosi: Qavslar balansi buzilgan — ${pCount} ta ochilgan '(' qavs yopilmagan.",
  "Syntax error: Unbalanced parentheses — ${pCount} unclosed '('."
);
content = content.replace(
  "Sintaksis xatosi: SQL DDL buyrug'i 'CREATE TABLE', 'ALTER TABLE' yoki 'DROP TABLE' bilan boshlanishi lozim.",
  "Syntax error: SQL DDL statement must begin with 'CREATE TABLE', 'ALTER TABLE', or 'DROP TABLE'."
);
content = content.replace(
  "Tip xatosi: 'varchr' deb yozilgan, to'g'ri yozilishi: 'varchar(...)'.",
  "Type error: 'varchr' detected, correct spelling is 'varchar(...)'."
);
content = content.replace(
  "Tip xatosi: PostgreSQL da butun son tipi 'integer' (yoki 'int') deb yoziladi (qavssiz).",
  "Type error: Integer type in PostgreSQL is 'integer' (or 'int') without parentheses."
);
content = content.replace(
  "Tip xatosi: 'boolean' tipi qavssiz yoziladi.",
  "Type error: 'boolean' type is written without parentheses."
);
content = content.replace(
  "Sintaksis xatosi: 'contraint' so'zida xatolik — 'CONSTRAINT' deb yoziladi.",
  "Syntax error: Typo in keyword — write 'CONSTRAINT'."
);
content = content.replace(
  "Sintaksis xatosi: 'foreing' emas, 'FOREIGN KEY' deb yoziladi.",
  "Syntax error: Write 'FOREIGN KEY' instead of 'foreing'."
);
content = content.replace(
  "Sintaksis xatosi: 'reference' emas, ko'plik shaklida 'REFERENCES' deb yoziladi.",
  "Syntax error: Use plural 'REFERENCES' instead of 'reference'."
);

// Translate grade feedback
content = content.replace(
  "Arxitektura tasdiqlandi! DDL buyrug'i to'g'ri bajarildi.",
  "Architecture verified! SQL DDL executed successfully."
);
content = content.replace(
  "Arxitektura tasdiqlandi! Barcha strukturaviy shartlar to'g'ri.",
  "Architecture verified! All structural requirements satisfied."
);
content = content.replace(
  "Jadval nomi mos kelmadi: '${parsedUser.tableName}' emas, '${exp.tableName}' deb nomlanishi lozim.",
  "Table name mismatch: expected '${exp.tableName}', found '${parsedUser.tableName}'."
);
content = content.replace(
  "Ustunlar soni mos kelmadi: siz ${parsedUser.columns.length} ta ustun yozdingiz, lekin kutilgan jadvalda ${exp.columns.length} ta ustun bo'lishi kerak.",
  "Column count mismatch: you defined ${parsedUser.columns.length} columns, but ${exp.columns.length} columns were expected."
);
content = content.replace(
  "Yetishmayotgan ustun: '${expCol.name}' nomli ustun aniqlanmadi.",
  "Missing column: '${expCol.name}' was not found in table definition."
);
content = content.replace(
  "'${expCol.name}' ustunining tipi noto'g'ri: '${userCol.type}' emas, '${expCol.type}' kutilgan.",
  "Column type mismatch for '${expCol.name}': expected '${expCol.type}', found '${userCol.type}'."
);
content = content.replace(
  "Cheklov yetishmayapti: '${reqC}' nomli cheklov (CONSTRAINT) e'lon qilinmagan.",
  "Missing constraint: '${reqC}' constraint was not declared."
);
content = content.replace(
  "Arxitektura tasdiqlandi! Jadval tuzilmasi va cheklovlar to'g'ri yaratildi.",
  "Architecture verified! Table schema and constraints successfully created."
);
content = content.replace(
  "DDL so'rovida kamchilik bor.",
  "There is a discrepancy in the DDL statement."
);
content = content.replace(
  "Topshiriqda nomlangan cheklov (CONSTRAINT) so'ralgan. Nomlangan 'CONSTRAINT nom ...' sintaksisini qo'llang.",
  "A named CONSTRAINT is required. Use the 'CONSTRAINT name ...' syntax."
);
content = content.replace(
  "Birlamchi kalit (PRIMARY KEY) e'lon qilinishi shart.",
  "PRIMARY KEY must be declared."
);
content = content.replace(
  "Tashqi kalit (FOREIGN KEY) qaysi ota jadvalga bog'lanishini 'REFERENCES parent_table(column)' orqali ko'rsating.",
  "Specify the parent table for the FOREIGN KEY using 'REFERENCES parent_table(column)'."
);
content = content.replace(
  "Biznes qoidasi uchun 'CHECK (...)' cheklovini yozishni unutmadingizmi?",
  "Did you remember to include the 'CHECK (...)' constraint for business rules?"
);
content = content.replace(
  "DDL kodi talablarga to'liq mos kelmadi. Kalit so'zlar, ustun tiplari yoki cheklov nomlarini tekshiring. Yordam uchun 'Maslahat (Hint)' tugmasidan foydalaning.",
  "DDL does not fully match specifications. Check keywords, column types, or constraint names. Click 'Hint' for guidance."
);

fs.writeFileSync(targetPath, content, 'utf8');
console.log('Week 3 ddl_catalog.js translated successfully!');
