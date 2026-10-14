/**
 * Pedagogical Puzzle Sanitizer for Week 1 and Week 2
 * Strips out answer leaks, removes explicit multiplicity hints, and turns tasks into genuine puzzles.
 */

const fs = require('fs');
const path = require('path');

// ----------------------------------------------------------------------------
// 1. TRANSFORM WEEK 1 QUESTIONS
// ----------------------------------------------------------------------------
function transformWeek1Question(q) {
  const exp = q.expectedDiagram || {};
  const rels = exp.relationships || [];
  const entities = exp.entities || [];
  const subs = exp.subclasses;

  const entNames = entities.map(e => e.name);

  // Clean Task: Never leak '1..1' or '1..*' or specific multiplicities
  let cleanTask = "";
  if (subs) {
    cleanTask = `'${subs.superclass}' va uning ostidagi subklasslar ierarxiyasini tahlil qiling. Mijoz talabidagi ixtisoslashuv turini (kesishmaydigan yoki kesishuvchi) hamda to'liqlik cheklovini aniqlab, EER diagrammani to'g'ri shakllantiring.`;
  } else if (q.sector === 9) {
    cleanTask = `Ushbu biznes modelidagi yashirin aloqa tuzog'ini (Fan Trap yoki Chasm Trap) aniqlang. Noaniqlikni bartaraf qilish uchun entitiylar orasidagi noto'g'ri zanjirni uzib, to'g'ri mantiqiy yo'nalish bo'ylab bog'lang.`;
  } else if (rels.length === 0) {
    cleanTask = `Mijoz talablaridan kelib chiqib, zarur entitiylarni yarating, ularning Birlamchi Kalitlarini {PK} belgilang va barcha talab etilgan atributlarni kiriting.`;
  } else if (rels.length === 1) {
    cleanTask = `'${entNames.join("' va '")}' entitiylari o'rtasidagi biznes qoidalarini chuqur o'rganing. Har bir tomonning minimal va maksimal ishtirok chegaralarini (UML multiplicity) mustaqil aniqlab, ularni diagrammada to'g'ri bog'lang.`;
  } else {
    cleanTask = `Mijoz bayon qilgan ko'p tomonlama munosabatlarni tahlil qiling. Barcha entitiylar orasidagi to'g'ri aloqalarni o'rnating va har bir bog'lanish uchidagi UML multiplisitiyalarini mustaqil aniqlang.`;
  }

  q.taskUz = cleanTask;

  // Clean Hint: Socratic reflection, never direct answers
  if (subs) {
    q.hint = "Bitta ob'ekt bir vaqtning o'zida bir nechta subklassga tegishli bo'lishi mumkinmi (And) yoki qat'iy bittasigami (Or)? Har bir ob'ekt subklassga kirishi shartmi (Mandatory) yoki ixtiyoriymi (Optional)?";
  } else if (q.sector === 9) {
    q.hint = "Fan Trap 1:* aloqalar bitta umumiy markazdan tarmoqlanganda paydo bo'ladi. Natijada chetdagi 2 entitiy bir-biriga bog'lanmay qoladi. Zanjirni qayta ko'rib chiqing.";
  } else if (rels.some(r => r.isIdentifying)) {
    q.hint = "Zaif entitiy o'zining mustaqil Birlamchi Kalitiga ega bo'lmaydi. U ota entitiyga to'liq qaram bo'lib, identifikatsion aloqa talab qiladi.";
  } else {
    q.hint = "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.";
  }

  // Remove pre-connected relationships from starterDiagram so student connects them themselves!
  if (q.starterDiagram) {
    q.starterDiagram.relationships = [];
  }

  return q;
}

// Process Week 1 files
['eer_clients_1_50.js', 'eer_clients_51_100.js', 'eer_clients_101_150.js'].forEach(file => {
  const filePath = path.join(__dirname, '../week1/data', file);
  if (!fs.existsSync(filePath)) return;

  global.window = global;
  require(filePath);
  const varName = file.replace('.js', '').toUpperCase();
  const list = global[varName] || [];

  const updated = list.map(transformWeek1Question);

  const content = `// ============================================================================
// DATABASE SYSTEMS ACADEMY — 1-HAFTA: KONSEPTUAL EER MODEL VA DIAGRAMMALAR
// O'zgaruvchi: ${varName} (50 ta Amaliy Vizual EER Keyslari - Jumboq Rejimi)
// ============================================================================

var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);

_scope.${varName} = ${JSON.stringify(updated, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = _scope.${varName};
}
`;

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated Week 1: ${file} with puzzle tasks.`);
});

// ----------------------------------------------------------------------------
// 2. TRANSFORM WEEK 2 QUESTIONS
// ----------------------------------------------------------------------------
function transformWeek2Question(q) {
  const exp = q.expectedSchema || {};
  const tables = exp.tables || (exp.tableName ? [exp] : []);

  // Clean Task: Never give away the full table schema or column list directly
  if (q.sector === 1) {
    q.taskUz = `'${tables.map(t => t.tableName || t.name).join("', '")}' entitiysi uchun relyatsion jadvalni loyihalang. Birlamchi kalitni [PK] to'g'ri belgilang va barcha oddiy atributlarni ustunlarga yoying.`;
    q.starterCode = `Table ${tables[0]?.tableName || "Jadval"} {\n  // Ustunlarni va [pk] kalitini kiriting\n}`;
    q.hint = "Jadval nomi, har bir ustun tipi va kamida bitta Birlamchi Kalit [PK] ustuni bo'lishi shart.";
  } else if (q.sector === 2) {
    q.taskUz = `Mijoz talabidagi tabiiy unikal identifikatorlar yoki ko'p ustunli birikmadan iborat Kompozit Birlamchi Kalitli relyatsion jadvalni loyihalang.`;
    q.starterCode = `Table ${tables[0]?.tableName || "Jadval"} {\n  // Ustunlar va kompozit [pk] kalitlarini kiriting\n}`;
    q.hint = "Kompozit kalitda bir nechta ustunga [pk] belgisi qo'yiladi.";
  } else if (q.sector === 3) {
    q.taskUz = `1:* (Ota va Bola) munosabatini relying jadvallarga o'tkazing. Tashqi Kalit (FK) qaysi jadvalga joylashtirilishi kerakligini aniqlang va Crow's Foot bog'lanishini hosil qiling.`;
    q.starterCode = `// Ota va Bola jadvallarini yarating va [ref: > Ota.pk] bilan bog'lang`;
    q.hint = "1:* munosabatda Tashqi Kalit (FK) har doim bola jadvaliga qo'yiladi va ota jadvalning PK siga havola qiladi.";
  } else if (q.sector === 4) {
    q.taskUz = `Zaif entitiy va uning egasi (ota entitiy) uchun relyatsion jadvallarni loyihalang. Zaif jadvalning kompozit kalitini ([PK,FK1]) to'g'ri shakllantiring.`;
    q.starterCode = `// Ota jadval va [PK,FK1] kompozit kalitli zaif bola jadvalini yarating`;
    q.hint = "Zaif entitiyning kaliti = (Ota_PK + Qisman_Kalit). Shuning uchun ota kaliti ham PK, ham FK bo'ladi.";
  } else if (q.sector === 6) {
    q.taskUz = `*:* (M:N) munosabatni relying modelga o'tkazish uchun zarur jadvallarni, jumladan ikkala tomonni bog'lovchi Oraliq (Junction/Bridge) jadvalini loyihalang.`;
    q.starterCode = `// 2 ta asosiy jadval va 1 ta oraliq kompozit jadvalni loyihalang`;
    q.hint = "*:* aloqa to'g'ridan-to'g'ri ifodalanmaydi — ikkala jadvalning PK larini o'zida saqlovchi uchinchi oraliq jadval shart.";
  } else {
    q.taskUz = `Mijozning biznes talablariga mos relyatsion sxemani loyihalang. Kerakli jadvallar, Birlamchi Kalitlar (PK) va Tashqi Kalitlarni (FK) to'g'ri o'rnating.`;
    q.starterCode = `// Talab etilgan relyatsion jadvallar va aloqalarni kiriting`;
    q.hint = "Birlamchi va tashqi kalitlar munosabatini tekshiring.";
  }

  return q;
}

// Process Week 2 files
['questions_1_50.js', 'questions_51_100.js', 'questions_101_150.js'].forEach(file => {
  const filePath = path.join(__dirname, '../week2/data', file);
  if (!fs.existsSync(filePath)) return;

  global.window = global;
  require(filePath);
  const varName = file.replace('.js', '').toUpperCase();
  const list = global[varName] || [];

  const updated = list.map(transformWeek2Question);

  const content = `// ============================================================================
// ACADEMY DATABASE SYSTEMS (MODULE) — WEEK 2: QUESTIONS
// O'zgaruvchi: ${varName} (100% Amaliy Relyatsion Sxema Keyslari - Jumboq Rejimi)
// ============================================================================

var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);

_scope.${varName} = ${JSON.stringify(updated, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = _scope.${varName};
}
`;

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated Week 2: ${file} with puzzle tasks.`);
});
