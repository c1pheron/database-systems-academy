const fs = require('fs');
const path = require('path');

// Ensure directory exists
const w1DataDir = path.join(__dirname, '../week1/data');
if (!fs.existsSync(w1DataDir)) fs.mkdirSync(w1DataDir, { recursive: true });

// Read source questions from week2 scripts or generator
global.window = global;
require('../week2/data/eer_clients_1_50.js');
require('../week2/data/eer_clients_51_100.js');
require('../week2/data/eer_clients_101_150.js');

const q1 = global.EER_CLIENTS_1_50;
const q2 = global.EER_CLIENTS_51_100;
const q3 = global.EER_CLIENTS_101_150;

function formatUzbekQuestion(q) {
  // Sector difficulty in Uzbek
  const sec = q.sector || Math.ceil(q.id / 15);
  let diff = `${sec}-Qavat • `;
  if (sec <= 2) diff += "Boshlang'ich";
  else if (sec <= 4) diff += "O'rta";
  else if (sec <= 6) diff += "Ilg'or";
  else if (sec <= 8) diff += "Ekspert";
  else if (sec === 9) diff += "Tuzoqlar Tahlili";
  else diff += "Bosh Me'mor (Boss)";
  q.difficulty = diff;

  // Uzbek titles
  let title = q.title || "";
  title = title
    .replace(/Branches and Staff System/g, "Bank Filiallari va Xodimlar Tizimi")
    .replace(/Faculty and Student Registry/g, "Fakultet va Talabalar Ro'yxati")
    .replace(/Hospital Wards and Patients/g, "Shifoxona Bo'limlari va Bemorlar")
    .replace(/Company and Employees/g, "Kompaniya va Xodimlar")
    .replace(/Store and Products/g, "Savdo Do'koni va Mahsulotlar")
    .replace(/University Management/g, "Universitet Boshqaruv Tizimi")
    .replace(/Building and Rooms/g, "Bino va Xonalar (Zaif Entitiy)")
    .replace(/Correction/g, "Tuzatish")
    .replace(/Recursive Relationship/g, "Rekursiv Aloqasi")
    .replace(/Weak Entity/g, "Zaif Entitiy");
  q.title = title;

  // Uzbek role
  let role = q.clientRole || "Boshqaruv Raisi";
  role = role
    .replace(/President & CEO/g, "Boshqaruv Raisi")
    .replace(/Faculty Dean/g, "Fakultet Dekani")
    .replace(/Library Systems Engineer/g, "Kutubxona Tizimi Muhandisi")
    .replace(/Hospital Registrar/g, "Klinika Ro'yxatga Olish Bo'limi")
    .replace(/Enterprise Client/g, "Bosh Buyurtmachi");
  q.clientRole = role;

  const exp = q.expectedDiagram || {};
  const rels = exp.relationships || [];
  const entities = exp.entities || [];
  const subs = exp.subclasses;

  // 100% natural Uzbek Task
  let taskUz = "";
  if (subs) {
    const superName = subs.superclass;
    const subNames = (subs.subclasses || []).map(s => `'${s}'`).join(', ');
    const constraint = subs.constraint || "{Mandatory, Or}";
    taskUz = `'${superName}' superklassi va uning subklasslarini (${subNames}) doskada chizing hamda '${constraint}' ixtisoslashuv cheklovini o'rnating.`;
  } else if (rels.length === 1 && rels[0].entity1 === rels[0].entity2) {
    const r = rels[0];
    taskUz = `'${r.entity1}' entitiyasining o'z-o'ziga bog'lanuvchi rekursiv munosabatini chizing: bir tomoniga '${r.mult1}', ikkinchi tomoniga '${r.mult2}' multiplisitiyalarini qo'ying.`;
  } else if (rels.length === 1) {
    const r = rels[0];
    const e1 = r.entity1;
    const e2 = r.entity2;
    const weak = entities.find(e => e.isWeak);
    if (weak) {
      taskUz = `'${e1}' va '${e2}' entitiylarini chizing. '${weak.name}' entitiysini 'Zaif Entitiy' deb belgilang, qisman kalitini ko'rsating va ularni '${r.mult1}' hamda '${r.mult2}' multiplisitiyalari bilan bog'lang.`;
    } else {
      taskUz = `'${e1}' va '${e2}' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '${r.mult1}' hamda '${r.mult2}' multiplisitiyalari bilan bog'lang.`;
    }
  } else if (rels.length > 1) {
    const names = entities.map(e => `'${e.name || e}'`).join(', ');
    taskUz = `${names} entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang.`;
  } else {
    const names = entities.map(e => `'${e.name || e}'`).join(', ');
    taskUz = `${names} entitiylarini chizing va ularning birlamchi kalitlarini {PK} belgilang.`;
  }

  q.taskUz = taskUz;
  q.task = taskUz;

  // Uzbek Story
  let story = q.story || "";
  story = story
    .replace(/Hello, Architect!/g, "Assalomu alaykum, Me'mor!")
    .replace(/In our /g, "Bizning ")
    .replace(/are present/g, "mavjud")
    .replace(/Academy/g, "Akademiya");
  q.story = story;

  // Uzbek Hint
  if (subs) {
    q.hint = `Subklass oynasini oching: superklass qilib '${subs.superclass}'ni tanlang, '${subs.constraint}' cheklovini tanlang va pastdagi subklasslarni belgilang.`;
  } else if (rels.length > 0) {
    const r = rels[0];
    q.hint = `'${r.entity1}' (${r.mult1}) va '${r.entity2}' (${r.mult2}) ni 'Aloqa Bog'lash' orqali ulang va {PK} kalitini bosishni unutmang.`;
  } else {
    q.hint = `Entitiylarni doskaga joylashtiring va ularning birlamchi kalit ustuniga {PK} belgisini bosing.`;
  }

  // Uzbek Explanation
  if (subs) {
    q.explanation = `'${subs.superclass}' ostidagi '${subs.constraint}' ixtisoslashuv ierarxiyasi to'g'ri va xatosiz o'rnatildi.`;
  } else if (rels.length > 0) {
    q.explanation = `'${rels[0].entity1}' (${rels[0].mult1}) va '${rels[0].entity2}' (${rels[0].mult2}) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.`;
  } else {
    q.explanation = `Konseptual EER modeli talablarga to'liq javob berdi va tasdiqlandi.`;
  }

  return q;
}

function saveFile(filename, varName, questions) {
  const content = `// ============================================================================
// DATABASE SYSTEMS ACADEMY — 1-HAFTA: KONSEPTUAL EER MODEL VA DIAGRAMMALAR
// O'zgaruvchi: ${varName} (${questions.length} ta Amaliy Vizual EER Keyslari)
// ============================================================================

var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);

_scope.${varName} = ${JSON.stringify(questions.map(formatUzbekQuestion), null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = _scope.${varName};
}
`;
  fs.writeFileSync(filename, content, 'utf8');
  console.log(`Saved ${questions.length} questions to ${filename}`);
}

saveFile(path.join(w1DataDir, 'eer_clients_1_50.js'), 'EER_CLIENTS_1_50', q1);
saveFile(path.join(w1DataDir, 'eer_clients_51_100.js'), 'EER_CLIENTS_51_100', q2);
saveFile(path.join(w1DataDir, 'eer_clients_101_150.js'), 'EER_CLIENTS_101_150', q3);

console.log('Week 1 all 150 questions generated in 100% natural Uzbek!');
