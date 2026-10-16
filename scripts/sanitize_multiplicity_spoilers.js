const fs = require('fs');
const path = require('path');

function sanitizeText(str) {
  if (!str) return '';
  return str
    .replace(/Westminster International University in Tashkent\s*\(WIUT\)/gi, 'Toshkent IT Universiteti')
    .replace(/Westminster International University in Tashkent/gi, 'IT Universiteti')
    .replace(/\bWIUT\b/g, 'IT Akademiya')
    .replace(/\s*\((1\.\.1|0\.\.1|1\.\.\*|0\.\.\*|\*\.\.\*|M:N|1:N|1:1)\)/g, '')
    .replace(/\s*\(Fan-In.*?\)/gi, '')
    .replace(/\s*\(Fan-Out.*?\)/gi, '')
    .replace(/\s*\(Step\s*1[-–]8\)/gi, '')
    .replace(/o'rtasidagi\s*(1:1|1:N|M:N)\s*aloqani/gi, 'o\'rtasidagi munosabatni')
    .replace(/bilan\s*(1:1|1:N|M:N)\s*aloqa\s*bilan/gi, 'bilan binar munosabat orqali')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

function sanitizeInstructionUz(inst) {
  if (!inst) return '';
  let cleaned = inst;

  cleaned = cleaned
    .replace(/\b1:1\b/g, 'binar')
    .replace(/\b1:N\b/g, 'binar')
    .replace(/\bM:N\b/g, 'ko\'pdan-ko\'pga')
    .replace(/:\s*[^.]*tomonga\s*['\"]?[01\*]\.\.[01\*]['\"]?[^.]*multiplisitiyasini\s*(qo'ying|o'rnating|belgilang)\.?/gi, ' hamda biznes talablari asosida har ikkala tomonning multiplisitiyasini aniqlab o\'rnating.')
    .replace(/:\s*[A-Za-z0-9_\s]+\([01\*]\.\.[01\*]\),\s*[A-Za-z0-9_\s]+\([01\*]\.\.[01\*]\)\.?/gi, ' hamda talablarga muvofiq multiplisitiya chegaralarini o\'rnating.')
    .replace(/:\s*[A-Za-z0-9_\s',\.\*]+multiplisitiyasini\s*o'rnating\.?/gi, ' hamda multiplisitiya chegaralarini aniqlab o\'rnating.')
    .replace(/:\s*[A-Za-z0-9_\s',\.\*]+multiplisitiya\s*chegaralarini/gi, ' hamda multiplisitiya chegaralarini')
    .replace(/:\s*[A-Za-z0-9_\s',\.\*]+Tegishli multiplisitiya/gi, ' hamda tegishli multiplisitiya')
    .replace(/\s*\((1\.\.1|0\.\.1|1\.\.\*|0\.\.\*|\*\.\.\*|M:N|1:N|1:1)\)/g, '')
    .replace(/\s*tomonga\s*['\"]?[01\*]\.\.[01\*]['\"]?/gi, '')
    .replace(/\s*multiplisitiyasini\s*qo'ying\.?/gi, ' multiplisitiya chegaralarini tahlil qilib o\'rnating.');

  if (!cleaned.includes('multiplisitiya') && !cleaned.includes('chegara')) {
    cleaned += ' hamda multiplisitiya chegaralarini aniqlab o\'rnating.';
  }

  return cleaned.replace(/:\s*([A-Za-z0-9_'\s,]+)\./g, ' hamda multiplisitiya chegaralarini aniqlab o\'rnating.')
    .replace(/\s{2,}/g, ' ')
    .replace(/\s+\./g, '.')
    .trim();
}

function sanitizeInstructionEn(inst) {
  if (!inst) return '';
  let cleaned = inst;

  cleaned = cleaned
    .replace(/\b1:1\b/g, 'binary')
    .replace(/\b1:N\b/g, 'binary')
    .replace(/\bM:N\b/g, 'many-to-many')
    .replace(/:\s*set\s*['\"]?[01\*]\.\.[01\*]['\"]?\s*on\s*[A-Za-z0-9_\s]+and\s*['\"]?[01\*]\.\.[01\*]['\"]?\s*on\s*[A-Za-z0-9_\s]+\.?/gi, ', analyzing business requirements to determine and configure the correct multiplicity constraints.')
    .replace(/:\s*[A-Za-z0-9_\s]+\([01\*]\.\.[01\*]\),\s*[A-Za-z0-9_\s]+\([01\*]\.\.[01\*]\)\.?/gi, ', analyzing domain constraints to determine the proper min..max multiplicities.')
    .replace(/\s*\((1\.\.1|0\.\.1|1\.\.\*|0\.\.\*|\*\.\.\*|M:N|1:N|1:1)\)/g, '')
    .replace(/\s*set\s*['\"]?[01\*]\.\.[01\*]['\"]?\s*on\s*[A-Za-z0-9_\s]+/gi, '')
    .replace(/Determine and configure the correct multiplicity constraints based on the domain rules\.\s*Determine and configure.*/gi, 'Determine and configure the correct multiplicity constraints based on the domain rules.');

  if (!cleaned.toLowerCase().includes('multiplicity')) {
    cleaned += ', analyzing the requirements to determine and configure the correct multiplicity constraints.';
  }

  return cleaned.replace(/\s{2,}/g, ' ').replace(/\s+\./g, '.').trim();
}

function processFile(filePath, varName) {
  console.log(`Processing ${filePath}...`);
  const fullPath = path.resolve(__dirname, '..', filePath);
  if (!fs.existsSync(fullPath)) {
    console.warn(`File not found: ${fullPath}`);
    return;
  }

  const data = require(fullPath);
  console.log(`Loaded ${data.length} items from ${filePath}`);

  for (const q of data) {
    q.story = sanitizeText(q.story);
    if (q.storyEn) q.storyEn = sanitizeText(q.storyEn);

    q.instruction = sanitizeInstructionUz(q.instruction);
    if (q.instructionEn) q.instructionEn = sanitizeInstructionEn(q.instructionEn);
  }

  const outputCode = `var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);\n` +
    `_scope.${varName} = ${JSON.stringify(data, null, 2)};\n\n` +
    `if (typeof module !== 'undefined' && module.exports) {\n` +
    `  module.exports = _scope.${varName};\n` +
    `}\n`;

  fs.writeFileSync(fullPath, outputCode, 'utf8');
  console.log(`Successfully updated ${filePath}!`);
}

processFile('week1/data/eer_clients_1_50.js', 'EER_CLIENTS_1_50');
processFile('week2/data/questions_1_50.js', 'QUESTIONS_1_50');
processFile('week2/data/eer_clients_1_50.js', 'EER_CLIENTS_1_50');
