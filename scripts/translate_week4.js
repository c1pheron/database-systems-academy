const fs = require('fs');
const path = require('path');

// ============================================================================
// 1. TRANSLATE WEEK 4 COMPANY_DB.JS
// ============================================================================
const dbPath = path.join(__dirname, '../week4/data/company_db.js');
let dbContent = fs.readFileSync(dbPath, 'utf8');

// Replace header
dbContent = dbContent.replace(/ACADEMY DATABASE SYSTEMS \(MODULE\)/g, "DATABASE SYSTEMS ACADEMY");

// Sectors
const sectors4 = [
  { id: 1, name: "FLOOR 1: MAIN RECEPTION & HR REGISTRY", sub: "SELECT basics, arithmetic, column aliases, and DISTINCT (1–15)" },
  { id: 2, name: "FLOOR 2: TALENT SCREENING DEPARTMENT", sub: "WHERE conditions, BETWEEN, IN, and operator precedence (16–30)" },
  { id: 3, name: "FLOOR 3: INTERNAL AUDIT & INSPECTION BUREAU", sub: "NULL values, three-valued logic, COALESCE, NULLIF, and IS DISTINCT FROM (31–45)" },
  { id: 4, name: "FLOOR 4: CORPORATE ARCHIVES & RECORDS HALL", sub: "LIKE, ILIKE, ESCAPE, and string functions (46–60)" },
  { id: 5, name: "FLOOR 5: FINANCE & TEMPORAL OFFICE", sub: "Math and date/time functions: ROUND, MOD, EXTRACT, AGE, TO_CHAR (61–75)" },
  { id: 6, name: "FLOOR 6: RANKINGS & QUEUING COUNCIL", sub: "ORDER BY, NULLS LAST, multi-level sorting, and LIMIT/OFFSET (76–90)" },
  { id: 7, name: "FLOOR 7: INTER-BRANCH OPERATIONS CENTER", sub: "Relational Algebra, INNER/LEFT/RIGHT/FULL JOIN, Self-Join, and Salgrade (91–105)" },
  { id: 8, name: "FLOOR 8: STRATEGIC BUDGET & ANALYTICS SUITE", sub: "COUNT, SUM, AVG, MIN, MAX, GROUP BY, HAVING, and CASE/FILTER (106–120)" },
  { id: 9, name: "FLOOR 9: BOARD OF DIRECTORS SUITE", sub: "Subqueries (Scalar, IN, ANY/ALL, Correlated, EXISTS) and Set Operations (121–135)" },
  { id: 10, name: "FLOOR 10: EXECUTIVE PRESIDENTIAL PENTHOUSE", sub: "Window Functions (OVER, PARTITION BY, RANK, LAG) and CTEs (136–150)" }
];

sectors4.forEach(s => {
  const regName = new RegExp(`name:\\s*"${s.id}-QAVAT:[^"]*"`);
  dbContent = dbContent.replace(regName, `name: "${s.name}"`);

  const regSub = new RegExp(`id:\\s*${s.id},[\\s\\S]*?subtitle:\\s*"[^"]*"`);
  dbContent = dbContent.replace(regSub, (match) => {
    return match.replace(/subtitle:\s*"[^"]*"/, `subtitle: "${s.sub}"`);
  });
});

// Career Ranks
dbContent = dbContent.replace('Stajyor Tahlilchi', 'Intern Analyst');
dbContent = dbContent.replace("Kichik Ma'lumotlar Mutaxassisi", 'Junior Data Specialist');
dbContent = dbContent.replace("O'rta Bo'g'in SQL Muhandisi", 'Mid-level SQL Engineer');
dbContent = dbContent.replace("Katta Ma'lumotlar Arxitektori", 'Senior Data Architect');
dbContent = dbContent.replace("Bosh Tizim Me'mori", 'Principal Systems Designer');
dbContent = dbContent.replace("Vitse-Prezident (VP Data)", 'Vice President of Data');
dbContent = dbContent.replace("Bosh Texnik Direktor (CDO)", 'Chief Data Officer (CDO)');
dbContent = dbContent.replace(/\/oy/g, '/mo');

// Clean personal name "Architect" from events
dbContent = dbContent.replace(/Architect/g, "Architect");

// Feedback translations
dbContent = dbContent.replace(
  "Hisobot tasdiqlandi! SQL so'rov to'g'ri tuzilgan.",
  "Query verified! SQL query is correctly structured."
);
dbContent = dbContent.replace(
  "Hisobot tasdiqlandi! Barcha shartlar to'g'ri bajarildi.",
  "Query verified! All conditions satisfied."
);
dbContent = dbContent.replace(
  "Hisobot tasdiqlandi! So'rov ma'lumotlarni to'g'ri chiqardi.",
  "Query verified! Expected result set returned."
);
dbContent = dbContent.replace(
  "Topshiriqda shart bo'yicha filtrlash so'ralgan. 'WHERE' bandini qo'shishni unutmadingizmi?",
  "Filtering condition required. Did you include the 'WHERE' clause?"
);
dbContent = dbContent.replace(
  "Topshiriqda ma'lumotlarni saralash talab qilingan. So'rov oxiriga 'ORDER BY' bandini qo'shing.",
  "Sorting required. Please add the 'ORDER BY' clause to the end of the query."
);
dbContent = dbContent.replace(
  "Jadvallarni bog'lash so'ralgan. 'JOIN ... ON ...' sintaksisini tekshiring.",
  "Table joining required. Check your 'JOIN ... ON ...' syntax."
);
dbContent = dbContent.replace(
  "Guruhlash talab etilgan. 'GROUP BY' bandini qo'shing.",
  "Aggregation grouping required. Please add the 'GROUP BY' clause."
);
dbContent = dbContent.replace(
  "So'rov natijasi kutilgan javob bilan to'liq mos kelmadi. Ustun nomlari, filtrlash qiymatlari yoki saralashni tekshiring. Yordam kerak bo'lsa 'Maslahat (Hint)' tugmasidan foydalaning.",
  "Query output does not match expected result. Check selected columns, WHERE filters, or ORDER BY clauses. Use 'Hint' if needed."
);

fs.writeFileSync(dbPath, dbContent, 'utf8');
console.log('Updated week4/data/company_db.js');

// ============================================================================
// 2. TRANSLATE WEEK 4 INDEX.HTML
// ============================================================================
const indexPath = path.join(__dirname, '../week4/index.html');
let html = fs.readFileSync(indexPath, 'utf8');

html = html.replace('<html lang="uz">', '<html lang="en">');
html = html.replace(
  /<title>.*?<\/title>/,
  '<title>Database Systems Academy — Week 4: SQL DML & Query Engineering (150 Challenges)</title>'
);

if (!html.includes('telegram-web-app.js')) {
  html = html.replace('</head>', '  <script src="https://telegram.org/js/telegram-web-app.js"></script>\n</head>');
}

html = html.replace(
  /KORPORATIV BOSH OFIS • MA'LUMOTLAR ARXITEKTORI/,
  'DATABASE SYSTEMS ACADEMY • MODULE 04'
);
html = html.replace(
  /ACADEMY Database Systems \(MODULE\) • Week 4: 150 Bosqichli Amaliy Simulyator/,
  'Corporate Headquarters • Week 4: 150-Stage SQL DML Simulator'
);

html = html.replace('Lavozim:', 'Rank:');
html = html.replace('Oylik Maosh:', 'Salary:');
html = html.replace('Bonus Kapital:', 'Bonus:');
html = html.replace('Bajarildi:', 'Solved:');

// Add "← Academy Hub" return button
const hubBtn = '<a href="../index.html" class="btn" style="text-decoration:none;" title="Return to Academy Hub">← Academy Hub</a>\n      ';
if (!html.includes('Academy Hub')) {
  html = html.replace('<button class="btn btn-event"', hubBtn + '<button class="btn btn-event"');
}
html = html.replace(/☕ Ofis Voqeasi \(<span id="eventBadgeCount">Yangi<\/span>\)/, '☕ Office Event (<span id="eventBadgeCount">New</span>)');
html = html.replace("🗺 150 Savol Xaritasi", "🗺 150 Question Map");

// Workbench labels
html = html.replace("SQL So'rov Terminali", "SQL Query Terminal");
html = html.replace("Tugmalar: Ctrl + Enter (Hisobotni tekshirish)", "Shortcut: Ctrl + Enter (Execute & Test)");
html = html.replace("▶ Hisobotni Ishga Tushirish", "▶ Run & Test");
html = html.replace("💡 Maslahat Olish", "💡 Get Hint");
html = html.replace("🔑 Namunaviy Yechim", "🔑 Sample Solution");
html = html.replace("◀ Oldingi", "◀ Prev");
html = html.replace("Keyingi ▶", "Next ▶");
html = html.replace("Kompaniya Baza Sxemasi", "Company DB Schema");
html = html.replace("Joriy Natija Jadvali", "Result Set Table");
html = html.replace("So'rov natijasi bu yerda aks etadi...", "Query result set will appear here...");

fs.writeFileSync(indexPath, html, 'utf8');
console.log('Updated week4/index.html');

// ============================================================================
// 3. TRANSLATE WEEK 4 GAME.JS
// ============================================================================
const gamePath = path.join(__dirname, '../week4/game.js');
let game = fs.readFileSync(gamePath, 'utf8');

game = game.replace("const STORAGE_KEY = 'ACADEMY_DS_W4_PROGRESS_V2';", "const STORAGE_KEY = 'DS_W4_PROGRESS';");
game = game.replace(
  "const saved = localStorage.getItem(STORAGE_KEY);",
  "const saved = localStorage.getItem(STORAGE_KEY) || localStorage.getItem('ACADEMY_DS_W4_PROGRESS_V2');"
);
game = game.replace(/Architect/g, "Architect");
game = game.replace(/ACADEMY/g, "Academy");

fs.writeFileSync(gamePath, game, 'utf8');
console.log('Updated week4/game.js');

// ============================================================================
// 4. TRANSLATE WEEK 4 QUESTIONS (1-150)
// ============================================================================
global.window = global;
require('../week4/data/questions_1_50.js');
require('../week4/data/questions_51_100.js');
require('../week4/data/questions_101_150.js');

const q1 = global.QUESTIONS_1_50;
const q2 = global.QUESTIONS_51_100;
const q3 = global.QUESTIONS_101_150;

function translateDifficulty(diff) {
  if (!diff) return "Floor 1 • Easy";
  return diff
    .replace(/1-Qavat/g, "Floor 1")
    .replace(/2-Qavat/g, "Floor 2")
    .replace(/3-Qavat/g, "Floor 3")
    .replace(/4-Qavat/g, "Floor 4")
    .replace(/5-Qavat/g, "Floor 5")
    .replace(/6-Qavat/g, "Floor 6")
    .replace(/7-Qavat/g, "Floor 7")
    .replace(/8-Qavat/g, "Floor 8")
    .replace(/9-Qavat/g, "Floor 9")
    .replace(/10-Qavat/g, "Floor 10")
    .replace(/Oson/g, "Easy")
    .replace(/O'rta/g, "Intermediate")
    .replace(/Qiyin/g, "Hard")
    .replace(/Ilg'or/g, "Advanced")
    .replace(/Ekspert/g, "Expert")
    .replace(/Boss/g, "Master Architect");
}

function cleanTask(task) {
  let s = task || "";
  s = s.replace(/Bo'limlar jadvalidagi \(`dept`\) barcha ustunlar va barcha qatorlarni ekranga chiqaring\./gi,
    "Display all columns and rows from the department table (`dept`).");
  s = s.replace(/Xodimlar jadvalidagi \(`emp`\) barcha ustun va qatorlarni to'liq chiqarib bering\./gi,
    "Display all columns and rows from the employee table (`emp`).");
  s = s.replace(/Xodimlar jadvalidan \(`emp`\)/gi, "From the employee table (`emp`),");
  s = s.replace(/Bo'limlar jadvalidan \(`dept`\)/gi, "From the department table (`dept`),");
  s = s.replace(/Maosh darajalari jadvalidan \(`salgrade`\)/gi, "From the salary grade table (`salgrade`),");
  s = s.replace(/ekranga chiqaring\.?/gi, "select and display.");
  s = s.replace(/chiqarib bering\.?/gi, "display.");
  s = s.replace(/chiqaring\.?/gi, "display.");
  s = s.replace(/yordamida/gi, "using");
  s = s.replace(/ustunlarini/gi, "columns");
  s = s.replace(/ustunini/gi, "column");
  s = s.replace(/barcha xodimlarning/gi, "all employees");
  s = s.replace(/bo'lgan/gi, "having");
  s = s.replace(/teng bo'lgan/gi, "equal to");
  s = s.replace(/katta bo'lgan/gi, "greater than");
  s = s.replace(/kichik bo'lgan/gi, "less than");
  s = s.replace(/saralab/gi, "sorted by");
  s = s.replace(/o'sish tartibida/gi, "in ascending order");
  s = s.replace(/kamayish tartibida/gi, "in descending order");
  s = s.replace(/hamda/gi, "and");
  s = s.replace(/va/gi, "and");
  s = s.replace(/Architect/gi, "Architect");
  s = s.replace(/ACADEMY/gi, "Academy");

  return s;
}

function processQ4(q) {
  q.difficulty = translateDifficulty(q.difficulty);
  const taskEn = cleanTask(q.taskUz);
  q.task = taskEn;
  q.taskUz = taskEn;

  let story = q.story || "";
  story = story.replace(/Architect/g, "Architect");
  story = story.replace(/ACADEMY/g, "Academy");
  q.story = story;

  let hint = q.hint || "";
  hint = hint.replace(/Architect/g, "Architect");
  hint = hint.replace(/deb yozing\./g, ".");
  q.hint = hint;

  let exp = q.explanation || "";
  exp = exp.replace(/muvaffaqiyatli olindi\./g, "successfully retrieved.");
  exp = exp.replace(/ekranga chiqarildi\./g, "successfully displayed.");
  exp = exp.replace(/Architect/g, "Architect");
  q.explanation = exp;

  return q;
}

function saveFile(filename, varName, questions) {
  const content = `// ============================================================================
// DATABASE SYSTEMS ACADEMY — WEEK 4: SQL DML & QUERY ENGINEERING
// Variable: ${varName} (${questions.length} Questions)
// ============================================================================

window.${varName} = ${JSON.stringify(questions.map(processQ4), null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = window.${varName};
}
`;
  fs.writeFileSync(filename, content, 'utf8');
}

saveFile(path.join(__dirname, '../week4/data/questions_1_50.js'), 'QUESTIONS_1_50', q1);
saveFile(path.join(__dirname, '../week4/data/questions_51_100.js'), 'QUESTIONS_51_100', q2);
saveFile(path.join(__dirname, '../week4/data/questions_101_150.js'), 'QUESTIONS_101_150', q3);

console.log('Week 4 translation completed successfully!');
