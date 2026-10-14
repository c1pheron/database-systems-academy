const fs = require('fs');
const path = require('path');

const baseDir = path.resolve(__dirname, '..');

function cleanText(text) {
  if (!text) return text;
  return text
    // Replace specific phrases in weak entity stories
    .replace(/\b1\.\.\*\s*bobga ega,\s*bob esa\s*1\.\.1\s*kitobga tegishli\b/gi, "kamida bitta yoki bir nechta bobga ega bo'ladi, har bir bob esa aniq bitta kitobga tegishli")
    .replace(/\b1\.\.\*\s*segmentga ega,\s*segment esa\s*1\.\.1\s*parvozga qarashli\b/gi, "bir nechta oraliq uchish qismlariga ega bo'lishi mumkin, har bir qism aniq bitta parvozga qarashli")
    .replace(/\b1\.\.\*\s*modulga ega,\s*modul esa\s*1\.\.1\s*paketga tegishli\b/gi, "bir nechta modullardan iborat bo'ladi, har bir modul esa aniq bitta paketga tegishli")
    .replace(/\b1\.\.\*\s*qatorga ega,\s*qator esa\s*1\.\.1\s*zalga qarashli\b/gi, "bir nechta qatorlarga ega bo'ladi, har bir qator aniq bitta tomosha zaliga qarashli")
    .replace(/\b1\.\.\*\s*kupondan iborat,\s*kupon\s*1\.\.1\s*chiptaga tegishli\b/gi, "bir nechta kuponlardan iborat bo'ladi, har bir kupon esa aniq bitta chiptaga tegishli")
    .replace(/\b0\.\.1\s*konvertga ega,\s*konvert\s*1\.\.1\s*kartaga qarashli\b/gi, "ko'pi bilan bitta PIN-konvertga ega bo'lishi mumkin, konvert esa faqat bitta kartaga tegishli")
    .replace(/\b1\.\.\*\s*kayutaga ega,\s*kayuta\s*1\.\.1\s*kemaga qarashli\b/gi, "bir nechta kayutalarga ega bo'ladi, har bir kayuta esa faqat bitta kemaga tegishli")
    .replace(/\b1\.\.\*\s*mavzuga ega,\s*mavzu\s*1\.\.1\s*sillabusga qarashli\b/gi, "bir nechta mavzulardan iborat bo'ladi, har bir mavzu esa faqat bitta sillabusga qarashli")
    // Replace recursive phrases: "bir tomon '0..1', ikkinchi tomon esa '0..*'"
    .replace(/:\s*bir tomon\s*'?0\.\.1'?,\s*ikkinchi tomon esa\s*'?0\.\.\*'?\.?/gi, ". Bunda ob'ektning ko'pi bilan bitta yuqori boshqaruvchisi bo'lishi yoki bo'lmasligi, hamda o'ziga bog'langan bir nechta quyi ob'ektlari bo'lishi mumkin.")
    // Generic cleanup of remaining [01]..[1*] or [01]:[1*]
    .replace(/\s*\(\s*[01]\.\.[1\*]\s*\)/g, '')
    .replace(/\s*\(\s*[01]:[1\*]\s*\)/g, '')
    .replace(/\s*\(\s*\*:*\*\s*\)/g, '')
    .replace(/\s*'?([01]\.\.[1\*])'?/g, '')
    .replace(/\s*\(\s*0\.\.1\s*Ixtiyoriy\s*\)/gi, ' (ixtiyoriy bo\'lishi mumkin)')
    .replace(/\s*\(\s*0\.\.\*\s*Ixtiyoriy\s*\)/gi, ' (ixtiyoriy bo\'lishi mumkin)')
    .replace(/\s*\(\s*1\.\.1\s*Majburiy\s*\)/gi, ' (majburiy)')
    .replace(/\s*\(\s*1\.\.\*\s*Majburiy\s*\)/gi, ' (kamida bitta bo\'lishi shart)')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

function cleanTitle(title) {
  if (!title) return title;
  return title
    .replace(/\s*1:1\s*Bog'liqligi/gi, " Munosabati")
    .replace(/\s*1:1\s*Munosabati/gi, " Munosabati")
    .replace(/\s*\(\s*0\.\.1\s*Ixtiyoriy\s*\)/gi, " Tizimi")
    .replace(/\s*\(\s*0\.\.\*\s*Ixtiyoriy\s*\)/gi, " Tizimi")
    .replace(/\s*\(\s*1\.\.1\s*Majburiy\s*\)/gi, " Tizimi")
    .replace(/\s*\(\s*[01]\.\.[1\*]\s*\)/gi, " Tizimi")
    .replace(/\s*\(\s*[01]:[1\*]\s*\)/gi, " Tizimi")
    .replace(/\s*\(\s*\*:*\*\s*\)/gi, " ")
    .replace(/\s{2,}/g, ' ')
    .trim();
}

function synthesizeTaskUz(q) {
  const exp = q.expectedDiagram || {};
  const rels = exp.relationships || [];
  const subs = exp.subclasses;
  const ents = (exp.entities || []).map(e => typeof e === 'string' ? e : e.name);

  if (subs) {
    return `'${subs.superclass}' superklassi va uning subklasslarini chizing hamda mijoz talabiga mos ixtisoslashuv cheklovini o'rnating.`;
  }

  if (rels.length > 0) {
    const r = rels[0];
    if (r.entity1 === r.entity2) {
      return `'${r.entity1}' entitiyasining rekursiv '${r.name || "Aloqa"}' munosabatini chizing va mijoz talabidagi biznes mantiqqa mos multiplisitiylar bilan bog'lang.`;
    }
    if (rels.length === 1) {
      return `'${r.entity1}' va '${r.entity2}' entitiylarini chizing, birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiylar bilan bog'lang.`;
    }
    return `'${ents.join("', '")}' entitiylarini chizing va mijoz talabiga mos to'g'ri multiplisitiylar bilan o'zaro bog'lang.`;
  }

  return `'${ents.join("', '")}' entitiylarini chizing va mijoz talabidagi munosabatlarni to'g'ri multiplisitiylar bilan bog'lang.`;
}

function synthesizeHint(q) {
  const exp = q.expectedDiagram || {};
  const rels = exp.relationships || [];
  const subs = exp.subclasses;

  if (subs) {
    return `Mantiqiy tahlil: Har bir ob'ekt majburan biror subklassga kirishi shartmi (Mandatory yoki Optional)? Bir vaqtning o'zida ikkala subklassga ham tegishli bo'la oladimi (Disjoint Or yoki Overlapping And)?`;
  }

  if (rels.length > 0) {
    const r = rels[0];
    if (r.entity1 === r.entity2) {
      return `Mantiqiy tahlil: '${r.entity1}'ning o'z-o'ziga bog'lanishida minimal qatnashuv (0 yoki 1) va maksimal chegaraga (*) e'tibor bering.`;
    }
    return `Mantiqiy tahlil: Hikoyaga diqqat qiling: har bir '${r.entity2}' '${r.entity1}'siz mavjud bo'la oladimi? Bir '${r.entity1}'da nechta '${r.entity2}' bo'lishi mumkin? Minimal (0 yoki 1) va maksimal (1 yoki *) ishtirok chegaralarini mantiqiy xulosa qiling.`;
  }

  return `Mijoz hikoyasidagi minimal va maksimal ishtirok qoidalariga diqqat qilib, mantiqiy multiplicity chegaralarini aniqlang.`;
}

function processFile(filePath, varName) {
  const fullPath = path.join(baseDir, filePath);
  let questions = require(fullPath);

  let modifiedCount = 0;
  questions = questions.map(q => {
    let oldStory = q.story;
    let newStory = cleanText(q.story);
    let newTitle = cleanTitle(q.title);
    let newTask = synthesizeTaskUz(q);
    let newHint = synthesizeHint(q);

    if (oldStory !== newStory || q.title !== newTitle || q.taskUz !== newTask) {
      modifiedCount++;
    }

    return {
      ...q,
      title: newTitle,
      story: newStory,
      taskUz: newTask,
      hint: newHint
    };
  });

  const content = `// ============================================================================
// ACADEMY DATABASE SYSTEMS (MODULE) — EER CLIENT CASE STUDIES
// Variable: ${varName} (${questions.length} Questions)
// ============================================================================

var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);

_scope.${varName} = ${JSON.stringify(questions, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = _scope.${varName};
}
`;

  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`Updated ${filePath}: ${modifiedCount} questions sanitized.`);
}

processFile('data/eer_clients_1_50.js', 'EER_CLIENTS_1_50');
processFile('data/eer_clients_51_100.js', 'EER_CLIENTS_51_100');
processFile('data/eer_clients_101_150.js', 'EER_CLIENTS_101_150');
console.log('Sanitization complete!');
