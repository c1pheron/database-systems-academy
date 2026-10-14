const fs = require('fs');
const path = require('path');

// ============================================================================
// 1. TRANSLATE WEEK 6 COMPANY_DB.JS
// ============================================================================
const dbPath = path.join(__dirname, '../week6/data/company_db.js');
let dbContent = fs.readFileSync(dbPath, 'utf8');

dbContent = dbContent.replace(/ACADEMY DATABASE SYSTEMS \(MODULE\)/g, "DATABASE SYSTEMS ACADEMY");

const sectors6 = [
  { id: 1, name: "FLOOR 1: SCALAR SUBQUERIES (WHERE)", sub: "WHERE col = (SELECT ...), minimum salary, president's department (1–15)" },
  { id: 2, name: "FLOOR 2: MULTI-ROW SUBQUERIES (IN & NOT IN)", sub: "IN list filters, salary tiers, and the NOT IN NULL trap (16–30)" },
  { id: 3, name: "FLOOR 3: QUANTITATIVE OPERATORS (ANY & ALL)", sub: "> ANY (greater than at least one), > ALL (greater than all) (31–45)" },
  { id: 4, name: "FLOOR 4: CORRELATED SUBQUERIES (EXISTS & NOT EXISTS)", sub: "Correlated subqueries, EXISTS, and empty departments (46–60)" },
  { id: 5, name: "FLOOR 5: SUBQUERIES IN SELECT & FROM", sub: "Scalar expressions in SELECT, derived tables in FROM (61–75)" },
  { id: 6, name: "FLOOR 6: SET THEORY: UNION & UNION ALL", sub: "Combining emp and applicant tables, duplicate handling (76–90)" },
  { id: 7, name: "FLOOR 7: INTERSECTION & DIFFERENCE: INTERSECT & EXCEPT", sub: "Admitted applicants, unmatched records, and set differences (91–105)" },
  { id: 8, name: "FLOOR 8: RELATIONAL VIEWS (CREATE VIEW)", sub: "CREATE VIEW, updatable views, and reporting abstractions (106–120)" },
  { id: 9, name: "FLOOR 9: HEURISTIC QUERY OPTIMIZATION & RELATIONAL TREES", sub: "Pushing Selection (σ) and Projection (π) down query trees (121–135)" },
  { id: 10, name: "FLOOR 10: COST-BASED OPTIMIZATION & EXPLAIN PLANS", sub: "PostgreSQL cost model, EXPLAIN, Nested Loop vs Hash Join (136–150)" }
];

sectors6.forEach(s => {
  const regName = new RegExp(`name:\\s*"${s.id}-QAVAT:[^"]*"`);
  dbContent = dbContent.replace(regName, `name: "${s.name}"`);

  const regSub = new RegExp(`id:\\s*${s.id},[\\s\\S]*?subtitle:\\s*"[^"]*"`);
  dbContent = dbContent.replace(regSub, (match) => {
    return match.replace(/subtitle:\s*"[^"]*"/, `subtitle: "${s.sub}"`);
  });
});

// Career Ranks
dbContent = dbContent.replace('Stajyor Tahlilchi', 'Intern Analyst');
dbContent = dbContent.replace("Subquery Mutaxassisi", 'Subquery Specialist');
dbContent = dbContent.replace("Korrelyatsion So'rov Muhandisi", 'Correlated Query Engineer');
dbContent = dbContent.replace("To'plamlar Nazariyasi Me'mori", 'Set Operations Architect');
dbContent = dbContent.replace("Relyatsion Ko'rinishlar Dizayneri", 'Database Views & Schema Designer');
dbContent = dbContent.replace("Hevristik Optimallashtirish Yetakchisi", 'Heuristic Query Optimization Lead');
dbContent = dbContent.replace("Bosh Xarajat Me'mori (Principal)", 'Chief Performance Architect (Principal)');
dbContent = dbContent.replace(/\/oy/g, '/mo');

// Clean personal name "Architect" and "ACADEMY"
dbContent = dbContent.replace(/Architect/g, "Architect");
dbContent = dbContent.replace(/ACADEMY/g, "Academy");

fs.writeFileSync(dbPath, dbContent, 'utf8');
console.log('Updated week6/data/company_db.js');

// ============================================================================
// 2. TRANSLATE WEEK 6 INDEX.HTML
// ============================================================================
const indexPath = path.join(__dirname, '../week6/index.html');
let html = fs.readFileSync(indexPath, 'utf8');

html = html.replace('<html lang="uz">', '<html lang="en">');
html = html.replace(
  /<title>.*?<\/title>/,
  '<title>Database Systems Academy — Week 6: Query Optimization, Transactions & Advanced DML (150 Challenges)</title>'
);

if (!html.includes('telegram-web-app.js')) {
  html = html.replace('</head>', '  <script src="https://telegram.org/js/telegram-web-app.js"></script>\n</head>');
}

html = html.replace(
  /KORPORATIV BOSH OFIS • SO'ROV OPTIMALLASHTIRISH VA ILG'OR DML/,
  'DATABASE SYSTEMS ACADEMY • MODULE 06'
);
html = html.replace(
  /ACADEMY Database Systems \(MODULE\) • Week 6: 150 Bosqichli Amaliy Simulyator/,
  'Corporate Headquarters • Week 6: 150-Stage Query Optimization Simulator'
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
console.log('Updated week6/index.html');

// ============================================================================
// 3. TRANSLATE WEEK 6 GAME.JS
// ============================================================================
const gamePath = path.join(__dirname, '../week6/game.js');
let game = fs.readFileSync(gamePath, 'utf8');

game = game.replace("const STORAGE_KEY = 'ACADEMY_DS_W6_PROGRESS_V2';", "const STORAGE_KEY = 'DS_W6_PROGRESS';");
game = game.replace(
  "const saved = localStorage.getItem(STORAGE_KEY);",
  "const saved = localStorage.getItem(STORAGE_KEY) || localStorage.getItem('ACADEMY_DS_W6_PROGRESS_V2');"
);
game = game.replace(/Architect/g, "Architect");
game = game.replace(/ACADEMY/g, "Academy");

fs.writeFileSync(gamePath, game, 'utf8');
console.log('Updated week6/game.js');

// ============================================================================
// 4. TRANSLATE WEEK 6 QUESTIONS (1-150)
// ============================================================================
global.window = global;
require('../week6/data/questions_1_50.js');
require('../week6/data/questions_51_100.js');
require('../week6/data/questions_101_150.js');

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

function cleanTask6(task) {
  let s = task || "";
  s = s.replace(/bilan bir xil bo'limda ishlaydigan barcha xodimlarning/gi, "for all employees working in the same department as");
  s = s.replace(/ishlayotgan bo'limdagi xodimlarning/gi, "for employees working in the department of");
  s = s.replace(/ismi \(`ename`\)/gi, "name (`ename`)");
  s = s.replace(/lavozimi \(`job`\)/gi, "job title (`job`)");
  s = s.replace(/maoshini \(`sal`\)/gi, "salary (`sal`)");
  s = s.replace(/chiqaring\.?/gi, "display.");
  s = s.replace(/yordamida/gi, "using");
  s = s.replace(/orqali/gi, "via");
  s = s.replace(/Natijani (.*) bo'yicha saralang\.?/gi, "Order results by $1.");
  s = s.replace(/alifbo tartibida/gi, "alphabetical order");
  s = s.replace(/kamayishi bo'yicha/gi, "in descending order");
  s = s.replace(/o'sishi bo'yicha/gi, "in ascending order");
  s = s.replace(/hamda/gi, "and");
  s = s.replace(/va/gi, "and");
  s = s.replace(/Architect/gi, "Architect");
  s = s.replace(/ACADEMY/gi, "Academy");

  return s;
}

function processQ6(q) {
  q.difficulty = translateDifficulty(q.difficulty);
  const taskEn = cleanTask6(q.taskUz);
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
// DATABASE SYSTEMS ACADEMY — WEEK 6: QUERY OPTIMIZATION & TRANSACTIONS
// Variable: ${varName} (${questions.length} Questions)
// ============================================================================

window.${varName} = ${JSON.stringify(questions.map(processQ6), null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = window.${varName};
}
`;
  fs.writeFileSync(filename, content, 'utf8');
}

saveFile(path.join(__dirname, '../week6/data/questions_1_50.js'), 'QUESTIONS_1_50', q1);
saveFile(path.join(__dirname, '../week6/data/questions_51_100.js'), 'QUESTIONS_51_100', q2);
saveFile(path.join(__dirname, '../week6/data/questions_101_150.js'), 'QUESTIONS_101_150', q3);

console.log('Week 6 translation completed successfully!');
