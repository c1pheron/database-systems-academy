const fs = require('fs');
const path = require('path');
const vm = require('vm');

function sanitizeText(str, isEn, isWeek2 = false) {
  if (!str || typeof str !== 'string') return str;
  let s = str;

  // 1. Remove entity-multiplicity tuples like (Hotel 1..1, HotelRoom 1..*)
  s = s.replace(/\s*\([A-Za-z0-9_]+\s+[01]\.\.[1\*],\s*[A-Za-z0-9_]+\s+[01]\.\.[1\*]\)/g, '');

  // 2. Remove arrow multiplicities like (1..1 <-> 0..*)
  s = s.replace(/\s*\([01]\.\.[1\*]\s*<->\s*[01]\.\.[1\*]\)/g, '');

  // 3. Remove (1..1 va 1..1) or (1..1 and 1..1)
  s = s.replace(/\s*\([01]\.\.[1\*]\s*(?:va|and)\s*[01]\.\.[1\*]\)/gi, '');

  // 4. Remove specific associative entity formulas
  s = s.replace(/Doctor\s*\([01\.\*<>\s]+\)\s*Appointment\s*(?:va|and)\s*Patient\s*\([01\.\*<>\s]+\)\s*Appointment\.?/gi, (match) => {
    return isEn 
      ? 'Each appointment links to a single doctor and patient, while doctors and patients can have multiple appointments.'
      : 'Har bir qabul (Appointment) aniq bitta shifokor va bemorga biriktiriladi. Shifokor yoki bemorda bir nechta qabullar bo\'lishi mumkin.';
  });
  s = s.replace(/Student\s*\([01\.\*<>\s]+\)\s*Enrollment\s*(?:va|and)\s*Course\s*\([01\.\*<>\s]+\)\s*Enrollment\.?/gi, (match) => {
    return isEn
      ? 'Each enrollment links to a single student and course, while students and courses can have multiple enrollments.'
      : 'Har bir ro\'yxatdan o\'tish (Enrollment) aniq bitta talaba va kursga tegishli bo\'lib, talaba yoki kurs bir nechta yozuvlarga ega bo\'lishi mumkin.';
  });
  s = s.replace(/Developer\s*\([01\.\*<>\s]+\)\s*ProjectAssignment\s*(?:va|and)\s*Project\s*\([01\.\*<>\s]+\)\s*ProjectAssignment\.?/gi, (match) => {
    return isEn
      ? 'Each assignment links to a single developer and project, while developers and projects can have multiple assignments.'
      : 'Har bir biriktirish (ProjectAssignment) bitta dasturchi va loyihaga tegishli bo\'lib, dasturchi yoki loyiha bir nechta topshiriqlarga ega bo\'lishi mumkin.';
  });
  s = s.replace(/Supplier\s*\([01\.\*<>\s]+\)\s*SupplyContract\s*(?:va|and)\s*Part\s*\([01\.\*<>\s]+\)\s*SupplyContract\.?/gi, (match) => {
    return isEn
      ? 'Each contract links to a single supplier and part, while suppliers and parts can have multiple contracts.'
      : 'Har bir shartnoma (SupplyContract) bitta yetkazib beruvchi va detalga tegishli bo\'lib, yetkazib beruvchi yoki detal bir nechta shartnomalarga ega bo\'lishi mumkin.';
  });
  s = s.replace(/Customer\s*\([01\.\*<>\s]+\)\s*ProductReview\s*(?:va|and)\s*Product\s*\([01\.\*<>\s]+\)\s*ProductReview\.?/gi, (match) => {
    return isEn
      ? 'Each review links to a single customer and product, while customers and products can have multiple reviews.'
      : 'Har bir sharh (ProductReview) bitta xaridor va mahsulotga tegishli bo\'lib, xaridor yoki mahsulot bir nechta sharhlarga ega bo\'lishi mumkin.';
  });

  // 5. Remove standalone giveaways like (1..1), (1..*), (0..*), (0..1)
  s = s.replace(/\s*\([01]\.\.[1\*]\)/g, '');

  // 6. Remove 1:N, 1:1, M:N giveaways in text (Uzbek)
  s = s.replace(/va ular o'rtasidagi 1:N munosabatni o'rnating\.?/g, "va ular o'rtasidagi munosabatni o'rnating.");
  s = s.replace(/o'rtasidagi 1:N munosabatni loyihalashtiring\.?/g, "o'rtasidagi munosabatni loyihalashtiring.");
  s = s.replace(/o'rtasidagi ixtiyoriy 1:N munosabatni o'rnating\.?/g, "o'rtasidagi munosabatni o'rnating.");
  s = s.replace(/o'rtasida 1:N aloqa chizing\.?/g, "o'rtasida aloqa chizing.");
  s = s.replace(/o'rtasida 1:1 aloqa o'rnating\.?/g, "o'rtasida aloqa o'rnating.");
  s = s.replace(/1:1 munosabat bilan bog'lang\.?/g, "munosabat bilan bog'lang.");
  s = s.replace(/1:1 aloqa bilan bog'lang\.?/g, "aloqa bilan bog'lang.");
  s = s.replace(/entitiylarini qat'iy 1:1 aloqa bilan bog'lang\.?/g, "entitiylarini aloqa bilan bog'lang.");
  s = s.replace(/entitiylarini 1 hamda multiplisitiya chegaralarini o'rnating\.?/g, "entitiylarini bog'lang hamda multiplisitiya chegaralarini o'rnating.");
  s = s.replace(/\b1:N\s+munosabat\b/g, 'munosabat');
  s = s.replace(/\b1:1\s+munosabat\b/g, 'munosabat');
  s = s.replace(/\b1:N\s+aloqa\b/g, 'aloqa');
  s = s.replace(/\b1:1\s+aloqa\b/g, 'aloqa');
  s = s.replace(/\(\*:\*\)/g, '');
  s = s.replace(/\(\*\.\.\*\)/g, '');
  s = s.replace(/\*:\*\s*munosabat/g, 'munosabat');
  s = s.replace(/\*:\*\s*ta'minot munosabati/g, "ta'minot munosabati");
  s = s.replace(/\*:\*\s*sharh munosabati/g, "sharh munosabati");

  // English replacements
  s = s.replace(/with a mandatory 1:N binary relationship\.?/gi, 'with a binary relationship.');
  s = s.replace(/with a 1:N binary relationship\.?/gi, 'with a binary relationship.');
  s = s.replace(/Model the 1:N relationship between/gi, 'Model the relationship between');
  s = s.replace(/Model the optional 1:N relationship between/gi, 'Model the relationship between');
  s = s.replace(/Establish a 1:1 relationship between/gi, 'Establish a relationship between');
  s = s.replace(/with a strict 1:1 relationship\.?/gi, 'with a binary relationship.');
  s = s.replace(/with a 1:1 relationship\.?/gi, 'with a relationship.');
  s = s.replace(/\b1:N\s+relationship\b/gi, 'relationship');
  s = s.replace(/\b1:1\s+relationship\b/gi, 'relationship');
  s = s.replace(/many-to-many \(\*:\*\) relationship/gi, 'many-to-many relationship');

  // If in Week 2, remove multiplicity instruction requirements
  if (isWeek2) {
    s = s.replace(/hamda multiplisitiya chegaralarini aniqlab o'rnating\.?/gi, '');
    s = s.replace(/hamda multiplisitiya chegaralarini tahlil qilib o'rnating\.?/gi, '');
    s = s.replace(/hamda multiplisitiya chegaralarini tahlil qiling va o'rnating\.?/gi, '');
    s = s.replace(/Tegishli multiplisitiya chegaralarini tahlil qiling va o'rnating\.?/gi, '');
    s = s.replace(/Entitiylarni o'zaro bog'lang va multiplisitiya chegaralarini belgilang\.?/gi, "Entitiylarni o'zaro bog'lang.");
    s = s.replace(/Determine and configure the correct multiplicity constraints based on the domain rules\.?/gi, '');
    s = s.replace(/analyzing business requirements to determine and configure the correct multiplicity constraints\.?/gi, '');
    s = s.replace(/analyzing domain constraints to determine the proper min\.\.max multiplicities\.?/gi, '');
    s = s.replace(/,\s*analyzing business requirements to determine and configure the correct multiplicity constraints/gi, '');
    s = s.replace(/,\s*analyzing domain constraints to determine the proper min\.\.max multiplicities/gi, '');
  }

  // Clean trailing spaces, double periods and double spaces
  s = s.replace(/\s{2,}/g, ' ')
       .replace(/\s+\./g, '.')
       .replace(/\.{2,}/g, '.')
       .trim();
  return s;
}

function processFile(filePath, isWeek2 = false) {
  if (!fs.existsSync(filePath)) {
    console.log('File does not exist:', filePath);
    return;
  }
  const code = fs.readFileSync(filePath, 'utf8');
  const ctx = { window: {}, global: {} };
  vm.runInNewContext(code, ctx);

  let varName = '';
  let qs = null;
  for (const k of Object.keys(ctx.window)) {
    if (Array.isArray(ctx.window[k])) {
      varName = k;
      qs = ctx.window[k];
      break;
    }
  }
  if (!qs) {
    for (const k of Object.keys(ctx.global)) {
      if (Array.isArray(ctx.global[k])) {
        varName = k;
        qs = ctx.global[k];
        break;
      }
    }
  }

  if (!qs) {
    console.log('Could not find question array in', filePath);
    return;
  }

  let modifiedCount = 0;
  qs.forEach(q => {
    // Sanitize text fields
    if (q.story) q.story = sanitizeText(q.story, false, isWeek2);
    if (q.storyEn) q.storyEn = sanitizeText(q.storyEn, true, isWeek2);
    if (q.instruction) q.instruction = sanitizeText(q.instruction, false, isWeek2);
    if (q.instructionEn) q.instructionEn = sanitizeText(q.instructionEn, true, isWeek2);

    // If Week 2, strip mult1 and mult2 from expectedDiagram.relationships
    if (isWeek2 && q.expectedDiagram && Array.isArray(q.expectedDiagram.relationships)) {
      q.expectedDiagram.relationships.forEach(rel => {
        delete rel.mult1;
        delete rel.mult2;
      });
      // Also flag isWeek2 on question object for grader
      q.isWeek2 = true;
    }
    modifiedCount++;
  });

  const output = `var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);\n_scope.${varName} = ${JSON.stringify(qs, null, 2)};\n\nif (typeof module !== 'undefined' && module.exports) {\n  module.exports = _scope.${varName};\n}\n`;

  fs.writeFileSync(filePath, output, 'utf8');
  console.log(`Processed ${filePath}: ${modifiedCount} questions sanitized (isWeek2=${isWeek2})`);
}

module.exports = { processFile, sanitizeText };
