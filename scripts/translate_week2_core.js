const fs = require('fs');
const path = require('path');

// ============================================================================
// 1. TRANSLATE WEEK 2 INDEX.HTML
// ============================================================================
const indexPath = path.join(__dirname, '../week2/index.html');
let indexHtml = fs.readFileSync(indexPath, 'utf8');

indexHtml = indexHtml.replace('<html lang="uz">', '<html lang="en">');
indexHtml = indexHtml.replace(
  /<title>.*?<\/title>/,
  '<title>Database Systems Academy — Week 2: EER Modeling Studio (150 Challenges)</title>'
);

// Inject Telegram WebApp script if not present
if (!indexHtml.includes('telegram-web-app.js')) {
  indexHtml = indexHtml.replace('</head>', '  <script src="https://telegram.org/js/telegram-web-app.js"></script>\n</head>');
}

// Brand section
indexHtml = indexHtml.replace(
  /<div class="brand-badge">.*?<\/div>/,
  '<div class="brand-badge">DATABASE SYSTEMS • MODULE 02</div>'
);
indexHtml = indexHtml.replace(
  /<h1>Konseptual Ma'lumotlar Bazasi & EER Modellashtirish Byurosi<\/h1>/,
  '<h1>Conceptual Database & EER Modeling Studio</h1>'
);
indexHtml = indexHtml.replace(
  /<p>1–2-Hafta: Binar.*?<\/p>/,
  '<p>Week 2: Binary, Multiplicity, Weak Entities, Association Classes, Recursive, Ternary & EER Hierarchies (150 Challenges)</p>'
);

// HUD stats
indexHtml = indexHtml.replace('Tasdiqlangan Sxemalar', 'Approved Schemas');
indexHtml = indexHtml.replace("Me'moriy Tajriba", 'Architect XP');

// HUD Actions: Add "← Academy Hub" return button
const hubBtn = '<a href="../index.html" class="btn-hud" style="text-decoration:none;" title="Return to Academy Hub"><span>←</span> Academy Hub</a>\n      ';
if (!indexHtml.includes('Academy Hub')) {
  indexHtml = indexHtml.replace('<button class="btn-hud primary" id="btnOpenMap"', hubBtn + '<button class="btn-hud primary" id="btnOpenMap"');
}
indexHtml = indexHtml.replace("150 Savol Xaritasi", "150 Question Map");
indexHtml = indexHtml.replace("Barcha 150 savol xaritasi", "Interactive 150 Challenge Map");
indexHtml = indexHtml.replace("Qayta Boshlash", "Reset Progress");
indexHtml = indexHtml.replace("Natijalarni tozalash", "Clear Progress Data");

// Right col cards
indexHtml = indexHtml.replace("1-Qavat", "Floor 1");
indexHtml = indexHtml.replace("Savol 1 / 150", "Challenge 1 / 150");
indexHtml = indexHtml.replace("Boshlang'ich", "Beginner");
indexHtml = indexHtml.replace("Me'moriy Vazifa:", "Architectural Task:");
indexHtml = indexHtml.replace("Professor Atlasdan Maslahat Olish", "Get Architect Hint");
indexHtml = indexHtml.replace("Loyihalash Rejimi", "Drafting Mode");
indexHtml = indexHtml.replace(
  "Mijoz talablari asosida EER diagrammani doskada chizing va \"Mijozga Taqdim Qilish\" tugmasini bosing.",
  "Draft the EER diagram on the canvas according to client requirements, then click \"Submit to Client\"."
);
indexHtml = indexHtml.replace("Mijozga Taqdim Qilish (Submit to Client)", "Submit to Client");
indexHtml = indexHtml.replace("<span>❮</span> Oldingi", "<span>❮</span> Previous");
indexHtml = indexHtml.replace("Keyingi <span>❯</span>", "Next <span>❯</span>");
indexHtml = indexHtml.replace("Oldingi Savol (Ctrl+Chapga)", "Previous Question (Ctrl+Left)");
indexHtml = indexHtml.replace("Keyingi Savol (Ctrl+O'ngga)", "Next Question (Ctrl+Right)");

// Map modal
indexHtml = indexHtml.replace("150 Ta EER Savollari Xaritasi", "150 EER Challenge Map");
indexHtml = indexHtml.replace(
  "Istalgan savol raqamini tanlab, to'g'ridan-to'g'ri uning konseptual EER topshirig'iga o'tishingiz mumkin:",
  "Select any challenge number to jump directly to its conceptual EER specification:"
);

// Subclass modal
indexHtml = indexHtml.replace("EER Subklass Ierarxiyasini Bog'lash", "Configure EER Subclass Hierarchy");
indexHtml = indexHtml.replace("Superklass (Ota Entitiy):", "Superclass (Parent Entity):");
indexHtml = indexHtml.replace("Ixtisoslashuv Cheklovi (Constraint):", "Specialization Constraint:");
indexHtml = indexHtml.replace("{Mandatory, Or} — Majburiy va Kesishmaydigan (Disjoint)", "{Mandatory, Or} — Mandatory & Disjoint");
indexHtml = indexHtml.replace("{Optional, Or} — Ixtiyoriy va Kesishmaydigan (Disjoint)", "{Optional, Or} — Optional & Disjoint");
indexHtml = indexHtml.replace("{Mandatory, And} — Majburiy va Kesishuvchi (Overlapping)", "{Mandatory, And} — Mandatory & Overlapping");
indexHtml = indexHtml.replace("{Optional, And} — Ixtiyoriy va Kesishuvchi (Overlapping)", "{Optional, And} — Optional & Overlapping");
indexHtml = indexHtml.replace("Subklasslar (Quyi Entitiylar):", "Subclasses (Child Entities):");
indexHtml = indexHtml.replace("Bekor Qilish", "Cancel");
indexHtml = indexHtml.replace("Ierarxiyani O'rnatish", "Apply Hierarchy");

fs.writeFileSync(indexPath, indexHtml, 'utf8');
console.log('Updated week2/index.html');

// ============================================================================
// 2. TRANSLATE WEEK 2 GAME.JS
// ============================================================================
const gamePath = path.join(__dirname, '../week2/game.js');
let gameJs = fs.readFileSync(gamePath, 'utf8');

// Update storage key to DS_W2_PROGRESS
gameJs = gameJs.replace("const STORAGE_KEY = 'ACADEMY_DS_W2_EER_PROGRESS_V2';", "const STORAGE_KEY = 'DS_W2_PROGRESS';");
// Also add fallback in loadState
gameJs = gameJs.replace(
  "const saved = localStorage.getItem(STORAGE_KEY);",
  "const saved = localStorage.getItem(STORAGE_KEY) || localStorage.getItem('ACADEMY_DS_W2_EER_PROGRESS_V2');"
);

// UI feedback strings
gameJs = gameJs.replace(/Doska bo'sh\. "\+ Entitiy" tugmasi bilan boshlang\./g, 'Canvas is empty. Start with "+ Entity" button.');
gameJs = gameJs.replace(/Mijoz Tomonidan Qabul Qilingan/g, 'Approved by Client');
gameJs = gameJs.replace(/Ushbu konseptual EER model muvaffaqiyatli topshirilgan\./g, 'This conceptual EER model has been successfully approved.');
gameJs = gameJs.replace(/Loyihalash Rejimi/g, 'Drafting Mode');
gameJs = gameJs.replace(/Mijoz talablari asosida EER diagrammani doskada chizing va "Mijozga Taqdim Qilish" tugmasini bosing\./g, 'Draft the EER diagram according to client requirements and click "Submit to Client".');
gameJs = gameJs.replace(/Professor Atlas maslahati:/g, 'Architect Advice:');
gameJs = gameJs.replace(/Mijoz: 'Ajoyib me\\'moriy yechim! EER sxemani tasdiqlayman!'/g, "Client: 'Outstanding architecture! I approve this EER schema!'");
gameJs = gameJs.replace(/A'LO DARAJADA! MIJOZ ROZI BO'LDI!/g, 'EXCELLENT! SCHEMA APPROVED!');
gameJs = gameJs.replace(/Mijoz: 'Me\\'moriy xatolik! Sxemani qayta ko\\'rib chiqing\.'/g, "Client: 'Design error! Please review the schema requirements.'");
gameJs = gameJs.replace(/DIAGNOSTIKA: ME'MORIY XATOLIK/g, 'DIAGNOSTIC: SCHEMA MISMATCH');
gameJs = gameJs.replace(/Progress tozalandi!/g, 'Progress has been reset!');
gameJs = gameJs.replace(/Haqiqatan ham barcha natijalarni o'chirib, noldan boshlamoqchimisiz\?/g, 'Are you sure you want to reset all progress and start from scratch?');

fs.writeFileSync(gamePath, gameJs, 'utf8');
console.log('Updated week2/game.js');

// ============================================================================
// 3. TRANSLATE WEEK 2 EER_CANVAS.JS
// ============================================================================
const canvasPath = path.join(__dirname, '../week2/eer_canvas.js');
let canvasJs = fs.readFileSync(canvasPath, 'utf8');

canvasJs = canvasJs.replace(/Aloqa Bog'lash/g, 'Connect Link');
canvasJs = canvasJs.replace(/Subklass Bog'lami/g, 'Subclass Hierarchy');
canvasJs = canvasJs.replace(/Shablon/g, 'Template');
canvasJs = canvasJs.replace(/Tartiblash/g, 'Auto Layout');
canvasJs = canvasJs.replace(/Doskani butunlay tozalash/g, 'Clear Canvas');
canvasJs = canvasJs.replace(/Tozalash/g, 'Clear');
canvasJs = canvasJs.replace(/Atribut Qo'shish/g, '+ Attribute');
canvasJs = canvasJs.replace(/Zaif Entitiy/g, 'Weak Entity');
canvasJs = canvasJs.replace(/O'chirish/g, 'Delete');

fs.writeFileSync(canvasPath, canvasJs, 'utf8');
console.log('Updated week2/eer_canvas.js');
