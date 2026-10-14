const fs = require('fs');
const path = require('path');

global.window = global;
require('../week2/data/eer_clients_1_50.js');
require('../week2/data/eer_clients_51_100.js');
require('../week2/data/eer_clients_101_150.js');

const q1 = global.EER_CLIENTS_1_50;
const q2 = global.EER_CLIENTS_51_100;
const q3 = global.EER_CLIENTS_101_150;

function translateDifficulty(diff) {
  if (!diff) return "Floor 1 • Beginner";
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
    .replace(/Boshlang'ich/g, "Beginner")
    .replace(/Oson/g, "Easy")
    .replace(/O'rta/g, "Intermediate")
    .replace(/Ilg'or/g, "Advanced")
    .replace(/Ekspert/g, "Expert")
    .replace(/Boss/g, "Master Architect");
}

function translateRole(role) {
  if (!role) return "Enterprise Client";
  return role
    .replace(/ACADEMY/g, "University")
    .replace(/Boshqaruv Raisi/g, "President & CEO")
    .replace(/Fakultet Dekani/g, "Faculty Dean")
    .replace(/Menejeri/g, "Manager")
    .replace(/Muhandisi/g, "Engineer")
    .replace(/Bo'limi/g, "Department")
    .replace(/Boshlig'i/g, "Head")
    .replace(/Rahbari/g, "Director")
    .replace(/Rielteri/g, "Broker")
    .replace(/Klinika/g, "Clinic")
    .replace(/Kutubxona/g, "Library")
    .replace(/Do'koni/g, "Store")
    .replace(/Kompaniyasi/g, "Company")
    .replace(/Agentligi/g, "Agency")
    .replace(/Zavodi/g, "Plant");
}

function translateQuestion(q) {
  q.difficulty = translateDifficulty(q.difficulty);
  q.clientRole = translateRole(q.clientRole);

  // Clean university/personal names from title and story
  let title = q.title || "";
  title = title.replace(/ACADEMY/g, "University");
  title = title.replace(/Filiallari va Xodimlar Tizimi/g, "Branches and Staff System");
  title = title.replace(/Fakultet va Talabalar Ro'yxati/g, "Faculty and Student Registry");
  title = title.replace(/Shifoxona Palatalari va Bemorlar/g, "Hospital Wards and Patients");
  title = title.replace(/Kompaniya va Xodimlar/g, "Company and Employees");
  title = title.replace(/Do'kon va Tovarlar/g, "Store and Products");
  title = title.replace(/Universitet Boshqaruv/g, "University Management");
  title = title.replace(/Bino va Xonalar/g, "Building and Rooms");
  title = title.replace(/Tuzatish/g, "Correction");
  title = title.replace(/Rekursiv Aloqasi/g, "Recursive Relationship");
  title = title.replace(/Zaif Entitiy/g, "Weak Entity");
  q.title = title;

  const exp = q.expectedDiagram || {};
  const rels = exp.relationships || [];
  const entities = exp.entities || [];
  const subs = exp.subclasses;

  // Build clean English task
  let taskEn = "";
  if (subs) {
    const superName = subs.superclass;
    const subNames = (subs.subclasses || []).map(s => `'${s}'`).join(', ');
    const constraint = subs.constraint || "{Mandatory, Or}";
    taskEn = `Model superclass '${superName}' and its subclasses (${subNames}) with the '${constraint}' constraint according to client requirements.`;
  } else if (rels.length === 1 && rels[0].entity1 === rels[0].entity2) {
    const r = rels[0];
    taskEn = `Model the recursive relationship on '${r.entity1}' with multiplicities '${r.mult1}' and '${r.mult2}'.`;
  } else if (rels.length === 1) {
    const r = rels[0];
    const e1 = r.entity1;
    const e2 = r.entity2;
    const weak = entities.find(e => e.isWeak);
    if (weak) {
      taskEn = `Model '${e1}' and weak entity '${e2}' with partial key, mark '${weak.name}' as Weak Entity, and link with '${r.mult1}' and '${r.mult2}'.`;
    } else {
      taskEn = `Model '${e1}' and '${e2}' entities, designate primary keys {PK}, and connect them with multiplicities '${r.mult1}' and '${r.mult2}'.`;
    }
  } else if (rels.length > 1) {
    const names = entities.map(e => `'${e.name || e}'`).join(', ');
    taskEn = `Model the multi-entity diagram for ${names}, assign primary keys {PK}, and connect them with the required multiplicity constraints.`;
  } else {
    const names = entities.map(e => `'${e.name || e}'`).join(', ');
    taskEn = `Model the required entities (${names}) with primary keys {PK} according to client specifications.`;
  }

  q.task = taskEn;
  q.taskUz = taskEn; // keep both in English so all UI display logic renders English!

  // Clean story
  let story = q.story || "";
  story = story.replace(/ACADEMY/g, "Tech Academy");
  story = story.replace(/Assalomu alaykum, Me'mor!/g, "Hello, Architect!");
  story = story.replace(/Bizning /g, "In our ");
  story = story.replace(/Zaif Entitiy/g, "Weak Entity");
  story = story.replace(/mavjud/g, "are present");
  q.story = story;

  // English hint
  if (subs) {
    q.hint = `Open the Subclass modal: set superclass to '${subs.superclass}', select '${subs.constraint}', and check child subclasses.`;
  } else if (rels.length > 0) {
    const r = rels[0];
    q.hint = `Connect '${r.entity1}' (${r.mult1}) to '${r.entity2}' (${r.mult2}) and ensure Primary Keys {PK} are set.`;
  } else {
    q.hint = `Place the required entities and assign {PK} to key attributes.`;
  }

  // English explanation
  if (subs) {
    q.explanation = `EER Subclass hierarchy under '${subs.superclass}' configured with '${subs.constraint}' successfully.`;
  } else if (rels.length > 0) {
    q.explanation = `Relationship between '${rels[0].entity1}' (${rels[0].mult1}) and '${rels[0].entity2}' (${rels[0].mult2}) verified and approved.`;
  } else {
    q.explanation = `Conceptual EER diagram successfully validated and accepted by client.`;
  }

  return q;
}

function saveFile(filename, varName, questions) {
  const content = `// ============================================================================
// DATABASE SYSTEMS ACADEMY — EER CLIENT CASE STUDIES
// Variable: ${varName} (${questions.length} Questions)
// ============================================================================

var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);

_scope.${varName} = ${JSON.stringify(questions.map(translateQuestion), null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = _scope.${varName};
}
`;
  fs.writeFileSync(filename, content, 'utf8');
  console.log(`Saved ${questions.length} questions to ${filename}`);
}

saveFile(path.join(__dirname, '../week2/data/eer_clients_1_50.js'), 'EER_CLIENTS_1_50', q1);
saveFile(path.join(__dirname, '../week2/data/eer_clients_51_100.js'), 'EER_CLIENTS_51_100', q2);
saveFile(path.join(__dirname, '../week2/data/eer_clients_101_150.js'), 'EER_CLIENTS_101_150', q3);

console.log('Week 2 all 150 questions translated successfully!');
