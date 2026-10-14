const fs = require('fs');
const path = require('path');

global.window = global;
require('../week3/data/questions_1_50.js');
require('../week3/data/questions_51_100.js');
require('../week3/data/questions_101_150.js');

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

function translateTitle(t) {
  if (!t) return "";
  return t
    .replace(/ACADEMY/g, "Academy")
    .replace(/Ishchi Sxemani O'rnatish/g, "Set Working Schema")
    .replace(/Filiallar Asosiy Jadvali/g, "Core Branch Table")
    .replace(/Xodimlar Qaydnomasi/g, "Staff Registry Table")
    .replace(/Birlamchi Kalit/g, "Primary Key")
    .replace(/Tashqi Kalit/g, "Foreign Key")
    .replace(/Yangi Ustun Qo'shish/g, "Add New Column")
    .replace(/Ustunni O'chirish/g, "Drop Column")
    .replace(/Kaskadli O'chirish/g, "Cascade Delete")
    .replace(/Relyatsion Algebra/g, "Relational Algebra")
    .replace(/Tanlash \(Selection — σ\)/g, "Selection (σ)")
    .replace(/Proyeksiya \(Projection — π\)/g, "Projection (π)")
    .replace(/Birlashma \(Join — ⨝\)/g, "Natural Join (⨝)")
    .replace(/Jadval Yarating/g, "Create Table")
    .replace(/Cheklov/g, "Constraint");
}

function translateTask(q) {
  let uz = q.taskUz || "";
  let en = uz;

  // Common patterns
  en = en.replace(/Joriy sessiyada PostgreSQL qidiruv yo'lini \(`search_path`\) ketma-ket `([^`]+)` va `([^`]+)` sxemalariga o'rnating\./,
    "Set the PostgreSQL search path (`search_path`) to `$1` and `$2` schemas in the current session.");
  en = en.replace(/`([^`]+)` nomli jadval yarating: unda `([^`]+)` \([^)]+\) va `([^`]+)` \([^)]+\) ustunlari bo'lsin\./,
    "Create a table named `$1` with columns `$2` and `$3`.");
  en = en.replace(/`([^`]+)` nomli jadval yarating: (.*) ustunlari bilan\./,
    "Create a table named `$1` with columns: $2.");
  en = en.replace(/`([^`]+)` nomli jadval yarating: (.*)/,
    "Create a table named `$1`: $2");
  en = en.replace(/`([^`]+)` jadvalini mavjud bo'lsa xavfsiz o'chirib tashlang \(`IF EXISTS` bilan\)\./,
    "Safely drop table `$1` if it exists (using `IF EXISTS`).");
  en = en.replace(/`([^`]+)` jadvaliga `([^`]+)` ustunini qo'shing \(`ALTER TABLE \.\.\. ADD COLUMN \.\.\.`\)\./,
    "Add column `$2` to table `$1` using `ALTER TABLE ... ADD COLUMN`.");
  en = en.replace(/`([^`]+)` jadvalidan `([^`]+)` ustunini o'chiring\./,
    "Drop column `$2` from table `$1` using `ALTER TABLE ... DROP COLUMN`.");
  en = en.replace(/Relyatsion algebra ifodasini SQL ekvivalentiga o'giring: (.*)/,
    "Translate the relational algebra expression to SQL: $1");

  // Vocabulary replacements
  en = en.replace(/nomli jadval yarating/g, "create table named");
  en = en.replace(/ustunlari bilan/g, "with columns");
  en = en.replace(/ustunini/g, "column");
  en = en.replace(/birlamchi kalit/gi, "primary key");
  en = en.replace(/tashqi kalit/gi, "foreign key");
  en = en.replace(/cheklovi bilan/g, "with constraint");
  en = en.replace(/ACADEMY/g, "Academy");

  return en;
}

function translateHint(q) {
  let h = q.hint || "";
  h = h.replace(/deb yozing\./g, ".");
  h = h.replace(/ko'rinishida yozing\./g, ".");
  h = h.replace(/sintaksisidan foydalaning/g, "syntax.");
  h = h.replace(/ACADEMY/g, "Academy");
  return h;
}

function translateExplanation(q) {
  let exp = q.explanation || "";
  exp = exp.replace(/muvaffaqiyatli yaratildi\./g, "created successfully.");
  exp = exp.replace(/muvaffaqiyatli bajarildi\./g, "executed successfully.");
  exp = exp.replace(/to'g'ri o'rnatildi\./g, "configured successfully.");
  exp = exp.replace(/ACADEMY/g, "Academy");
  return exp || "DDL statement validated and executed successfully.";
}

function processQuestion(q) {
  q.difficulty = translateDifficulty(q.difficulty);
  q.title = translateTitle(q.title);
  const taskEn = translateTask(q);
  q.task = taskEn;
  q.taskUz = taskEn; // ensure English in both
  q.hint = translateHint(q);
  q.explanation = translateExplanation(q);

  let story = q.story || "";
  story = story.replace(/ACADEMY/g, "Academy");
  q.story = story;

  return q;
}

function saveFile(filename, varName, questions) {
  const content = `// ============================================================================
// DATABASE SYSTEMS ACADEMY — WEEK 3: SQL DDL & RELATIONAL ALGEBRA
// Variable: ${varName} (${questions.length} Questions)
// ============================================================================

window.${varName} = ${JSON.stringify(questions.map(processQuestion), null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = window.${varName};
}
`;
  fs.writeFileSync(filename, content, 'utf8');
  console.log(`Saved ${questions.length} questions to ${filename}`);
}

saveFile(path.join(__dirname, '../week3/data/questions_1_50.js'), 'QUESTIONS_1_50', q1);
saveFile(path.join(__dirname, '../week3/data/questions_51_100.js'), 'QUESTIONS_51_100', q2);
saveFile(path.join(__dirname, '../week3/data/questions_101_150.js'), 'QUESTIONS_101_150', q3);

console.log('Week 3 all 150 questions translated successfully!');
