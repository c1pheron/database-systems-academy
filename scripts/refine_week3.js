const fs = require('fs');
const path = require('path');

global.window = global;
require('../week3/data/questions_1_50.js');
require('../week3/data/questions_51_100.js');
require('../week3/data/questions_101_150.js');

const q1 = global.QUESTIONS_1_50;
const q2 = global.QUESTIONS_51_100;
const q3 = global.QUESTIONS_101_150;

function cleanEnglishText(text) {
  if (!text) return "";
  let s = text;

  // Replacements
  s = s.replace(/\(butun son — integer\)/gi, "(integer)");
  s = s.replace(/\(uzunligi \d+ gacha bo'lgan matn — (varchar\(\d+\))\)/gi, "($1)");
  s = s.replace(/\(sana — date\)/gi, "(date)");
  s = s.replace(/\(haqiqiy son — numeric\(([^)]+)\)\)/gi, "(numeric($1))");
  s = s.replace(/\(mantiqiy tur — boolean\)/gi, "(boolean)");
  s = s.replace(/ustunlari bo'lsin\.?/gi, "columns.");
  s = s.replace(/ustunlari bilan\.?/gi, "columns.");
  s = s.replace(/ustuni bilan\.?/gi, "column.");
  s = s.replace(/\bunda\b/gi, "with");
  s = s.replace(/\bhamda\b/gi, "and");
  s = s.replace(/\bva\b/gi, "and");
  s = s.replace(/\bbo'lgan\b/gi, "being");
  s = s.replace(/\bdeb e'lon qiling\b/gi, "declared");
  s = s.replace(/\bikkinchi ustun\b/gi, "second column");
  s = s.replace(/\buchinchi ustun\b/gi, "third column");
  s = s.replace(/\bbirinchi ustun\b/gi, "first column");
  s = s.replace(/\bustunini\b/gi, "column");
  s = s.replace(/\bustuni\b/gi, "column");
  s = s.replace(/\bjadvaliga\b/gi, "table");
  s = s.replace(/\bjadvalidan\b/gi, "from table");
  s = s.replace(/\bnomli jadval yarating:?\b/gi, "create table named");
  s = s.replace(/\bnomlangan\b/gi, "named");
  s = s.replace(/\bcheklovi bilan\b/gi, "constraint");
  s = s.replace(/\bcheklovini qo'shing\b/gi, "add constraint");
  s = s.replace(/\bquyidagi\b/gi, "the following");
  s = s.replace(/\bso'rovini SQL da yozing\b/gi, "query in SQL");
  s = s.replace(/\bbarcha qatorlarni\b/gi, "all rows");
  s = s.replace(/\bbarcha ustunlarni\b/gi, "all columns");
  s = s.replace(/\bchiquvchi\b/gi, "output");
  s = s.replace(/ACADEMY/gi, "Academy");

  return s;
}

[q1, q2, q3].forEach(list => {
  list.forEach(q => {
    q.task = cleanEnglishText(q.task);
    q.taskUz = q.task;
    q.hint = cleanEnglishText(q.hint);
    q.explanation = cleanEnglishText(q.explanation);
    q.story = cleanEnglishText(q.story);
  });
});

function saveFile(filename, varName, questions) {
  const content = `// ============================================================================
// DATABASE SYSTEMS ACADEMY — WEEK 3: SQL DDL & RELATIONAL ALGEBRA
// Variable: ${varName} (${questions.length} Questions)
// ============================================================================

window.${varName} = ${JSON.stringify(questions, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = window.${varName};
}
`;
  fs.writeFileSync(filename, content, 'utf8');
}

saveFile(path.join(__dirname, '../week3/data/questions_1_50.js'), 'QUESTIONS_1_50', q1);
saveFile(path.join(__dirname, '../week3/data/questions_51_100.js'), 'QUESTIONS_51_100', q2);
saveFile(path.join(__dirname, '../week3/data/questions_101_150.js'), 'QUESTIONS_101_150', q3);

console.log('Week 3 refined English cleaning done!');
