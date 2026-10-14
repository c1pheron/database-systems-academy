const fs = require('fs');
const path = require('path');

// ============================================================================
// 1. TRANSLATE WEEK 5 COMPANY_DB.JS
// ============================================================================
const dbPath = path.join(__dirname, '../week5/data/company_db.js');
let dbContent = fs.readFileSync(dbPath, 'utf8');

dbContent = dbContent.replace(/ACADEMY DATABASE SYSTEMS \(MODULE\)/g, "DATABASE SYSTEMS ACADEMY");

const sectors5 = [
  { id: 1, name: "FLOOR 1: ANSI INNER JOIN BASICS", sub: "2-table joins, JOIN...ON, JOIN...USING, and WHERE filters (1–15)" },
  { id: 2, name: "FLOOR 2: MULTI-TABLE & NON-EQUI JOINS", sub: "3+ tables, BETWEEN non-equi joins, and Chinook catalog (16–30)" },
  { id: 3, name: "FLOOR 3: LEFT JOIN & RIGHT JOIN MANAGEMENT", sub: "Preserving outer rows, NULL handling, ON vs WHERE placement (31–45)" },
  { id: 4, name: "FLOOR 4: ANTI-JOIN & NULL AUDIT CENTER", sub: "Anti-joins via IS NULL, three-valued logic, COALESCE, and NULLIF (46–60)" },
  { id: 5, name: "FLOOR 5: FULL OUTER JOIN & CARTESIAN PRODUCT", sub: "Full outer joins, CROSS JOIN matrix, and row multiplication (61–75)" },
  { id: 6, name: "FLOOR 6: SELF JOIN & HIERARCHICAL TREES", sub: "Employee < Manager < Executive, colleague pairs, inequality joins (76–90)" },
  { id: 7, name: "FLOOR 7: AGGREGATION & GROUP BY ANALYTICS", sub: "COUNT(*), COUNT(col), SUM, AVG, MIN, MAX, and grouped reports (91–105)" },
  { id: 8, name: "FLOOR 8: HAVING FILTERS & CONDITIONAL AGGREGATION", sub: "WHERE vs HAVING, conditional CASE aggregation, and FILTER (106–120)" },
  { id: 9, name: "FLOOR 9: PHYSICAL STORAGE & FILE STRUCTURES", sub: "Pages, blocks, blocking factor (bfr), Heap vs Sorted vs Hash costs (121–135)" },
  { id: 10, name: "FLOOR 10: INDEX ARCHITECTURE, B+ TREES & RAID", sub: "Dense/Sparse, Primary/Clustering/Secondary, B+ Trees, and RAID (136–150)" }
];

sectors5.forEach(s => {
  const regName = new RegExp(`name:\\s*"${s.id}-QAVAT:[^"]*"`);
  dbContent = dbContent.replace(regName, `name: "${s.name}"`);

  const regSub = new RegExp(`id:\\s*${s.id},[\\s\\S]*?subtitle:\\s*"[^"]*"`);
  dbContent = dbContent.replace(regSub, (match) => {
    return match.replace(/subtitle:\s*"[^"]*"/, `subtitle: "${s.sub}"`);
  });
});

// Career Ranks
dbContent = dbContent.replace('Stajyor Tahlilchi', 'Intern Analyst');
dbContent = dbContent.replace('Kichik SQL Muhandis', 'Junior SQL Engineer');
dbContent = dbContent.replace('Relyatsion Baza Mutaxassisi', 'Relational Database Specialist');
dbContent = dbContent.replace("Katta Ma'lumotlar Tahlilchisi", 'Senior Data Analyst');
dbContent = dbContent.replace("Senior ETL & DWH Me'mori", 'Senior ETL & DWH Architect');
dbContent = dbContent.replace('Ierarxik Baza Arxitektori', 'Hierarchical Schema Architect');
dbContent = dbContent.replace('Bosh Korporativ Analitik', 'Principal Corporate Analyst');
dbContent = dbContent.replace('Query & Filter Optimization Lead', 'Query & Filter Optimization Lead');
dbContent = dbContent.replace('Storage & Disk Systems Engineer', 'Storage & Disk Systems Engineer');
dbContent = dbContent.replace('Bosh Vitse-Prezident (CDO / Partner)', 'Executive Vice President (CDO / Partner)');
dbContent = dbContent.replace(/\/oy/g, '/mo');

// Clean personal name "Architect" and "ACADEMY"
dbContent = dbContent.replace(/Architect/g, "Architect");
dbContent = dbContent.replace(/ACADEMY/g, "Academy");

fs.writeFileSync(dbPath, dbContent, 'utf8');
console.log('Updated week5/data/company_db.js');

// ============================================================================
// 2. TRANSLATE WEEK 5 INDEX.HTML
// ============================================================================
const indexPath = path.join(__dirname, '../week5/index.html');
let html = fs.readFileSync(indexPath, 'utf8');

html = html.replace('<html lang="uz">', '<html lang="en">');
html = html.replace(
  /<title>.*?<\/title>/,
  '<title>Database Systems Academy — Week 5: Joins, Aggregation & Storage Architecture (150 Challenges)</title>'
);

if (!html.includes('telegram-web-app.js')) {
  html = html.replace('</head>', '  <script src="https://telegram.org/js/telegram-web-app.js"></script>\n</head>');
}

html = html.replace(
  /KORPORATIV BOSH OFIS • MA'LUMOTLAR VA TAHLIL ARXITEKTORI/,
  'DATABASE SYSTEMS ACADEMY • MODULE 05'
);
html = html.replace(
  /ACADEMY Database Systems \(MODULE\) • Week 5: 150 Bosqichli Amaliy Simulyator/,
  'Corporate Headquarters • Week 5: 150-Stage Joins & Storage Simulator'
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
console.log('Updated week5/index.html');

// ============================================================================
// 3. TRANSLATE WEEK 5 GAME.JS
// ============================================================================
const gamePath = path.join(__dirname, '../week5/game.js');
let game = fs.readFileSync(gamePath, 'utf8');

game = game.replace("const STORAGE_KEY = 'ACADEMY_DS_W5_PROGRESS_V2';", "const STORAGE_KEY = 'DS_W5_PROGRESS';");
game = game.replace(
  "const saved = localStorage.getItem(STORAGE_KEY);",
  "const saved = localStorage.getItem(STORAGE_KEY) || localStorage.getItem('ACADEMY_DS_W5_PROGRESS_V2');"
);
game = game.replace(/Architect/g, "Architect");
game = game.replace(/ACADEMY/g, "Academy");

fs.writeFileSync(gamePath, game, 'utf8');
console.log('Updated week5/game.js');

// ============================================================================
// 4. TRANSLATE WEEK 5 QUESTIONS (1-150)
// ============================================================================
global.window = global;
require('../week5/data/questions_1_50.js');
require('../week5/data/questions_51_100.js');
require('../week5/data/questions_101_150.js');

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

function cleanTask5(task) {
  let s = task || "";
  s = s.replace(/shahrida joylashgan bo'limda ishlaydigan/gi, "working in departments located in");
  s = s.replace(/xodimlarning ismi/gi, "employee name");
  s = s.replace(/maoshi/gi, "salary");
  s = s.replace(/bo'lim nomini/gi, "department name");
  s = s.replace(/chiqaring\.?/gi, "display.");
  s = s.replace(/orqali/gi, "via");
  s = s.replace(/yordamida/gi, "using");
  s = s.replace(/bog'lab/gi, "joining");
  s = s.replace(/ulab/gi, "joining");
  s = s.replace(/saralang\.?/gi, "order by.");
  s = s.replace(/hamda/gi, "and");
  s = s.replace(/va/gi, "and");
  s = s.replace(/Barcha/gi, "All");
  s = s.replace(/Architect/gi, "Architect");
  s = s.replace(/ACADEMY/gi, "Academy");

  return s;
}

function processQ5(q) {
  q.difficulty = translateDifficulty(q.difficulty);
  const taskEn = cleanTask5(q.taskUz);
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
  exp = exp.replace(/Architect/g, "Architect");
  exp = exp.replace(/ACADEMY/g, "Academy");
  q.explanation = exp;

  return q;
}

function saveFile(filename, varName, questions) {
  const content = `// ============================================================================
// DATABASE SYSTEMS ACADEMY — WEEK 5: JOINS, AGGREGATION & STORAGE
// Variable: ${varName} (${questions.length} Questions)
// ============================================================================

window.${varName} = ${JSON.stringify(questions.map(processQ5), null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = window.${varName};
}
`;
  fs.writeFileSync(filename, content, 'utf8');
}

saveFile(path.join(__dirname, '../week5/data/questions_1_50.js'), 'QUESTIONS_1_50', q1);
saveFile(path.join(__dirname, '../week5/data/questions_51_100.js'), 'QUESTIONS_51_100', q2);
saveFile(path.join(__dirname, '../week5/data/questions_101_150.js'), 'QUESTIONS_101_150', q3);

console.log('Week 5 translation completed successfully!');
