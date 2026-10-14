const fs = require('fs');
const path = require('path');

// 1. INDEX.HTML
const indexPath = path.join(__dirname, '../week3/index.html');
let html = fs.readFileSync(indexPath, 'utf8');

html = html.replace('<html lang="uz">', '<html lang="en">');
html = html.replace(
  /<title>.*?<\/title>/,
  '<title>Database Systems Academy — Week 3: SQL DDL & Schema Foundry (150 Challenges)</title>'
);

if (!html.includes('telegram-web-app.js')) {
  html = html.replace('</head>', '  <script src="https://telegram.org/js/telegram-web-app.js"></script>\n</head>');
}

html = html.replace(
  /<div class="brand-badge">.*?<\/div>/,
  '<div class="brand-badge">DATABASE SYSTEMS • MODULE 03</div>'
);
html = html.replace(
  /<h1>Ma'lumotlar Arxitekturasi & SQL DDL Foundry<\/h1>/,
  '<h1>Data Architecture & SQL DDL Foundry</h1>'
);
html = html.replace(
  /<p>3-Hafta: Boshlang'ich DDL dan Relyatsion Algebra va Korporativ Sxemagacha<\/p>/,
  '<p>Week 3: DDL Fundamentals, Constraints, Referential Actions & Relational Algebra (150 Challenges)</p>'
);

// Stat labels
html = html.replace('Hal etildi', 'Solved');
html = html.replace("Muhandislik Tajribasi", "Engineering XP");

// HUD Actions: Add "← Academy Hub" return button
const hubBtn = '<a href="../index.html" class="btn-hud" style="text-decoration:none;" title="Return to Academy Hub"><span>←</span> Academy Hub</a>\n      ';
if (!html.includes('Academy Hub')) {
  html = html.replace('<button class="btn-hud primary" id="btnOpenMap"', hubBtn + '<button class="btn-hud primary" id="btnOpenMap"');
}
html = html.replace("150 Savol Xaritasi", "150 Question Map");
html = html.replace("Barcha 150 savol xaritasi", "Explore All 150 Challenges");
html = html.replace("Tizim Voqealari", "System Events");
html = html.replace("Arxitektura voqealari va muammolari", "Architecture Events & Real-World Dilemmas");
html = html.replace("Qayta Boshlash", "Reset Progress");
html = html.replace("Natijalarni tozalash", "Clear Progress Data");

// Left panel headers
html = html.replace("Ma'lumotlar Arxitekturasi & Server Markazi", "Data Architecture & Server Foundry");
html = html.replace("Serverlar Faol • DDL Monitor", "Servers Active • DDL Monitor");
html = html.replace("Sxema Vizualizatori • PostgreSQL Relyatsion Modeli", "Schema Visualizer • PostgreSQL Relational Model");
html = html.replace("Kompilyatsiya qilingan jadvallar va cheklovlar", "Live compiled tables & constraints");

// Quick tokens
html = html.replace("Tezkor DDL Operatorlari:", "Quick DDL Operators:");

// Editor header
html = html.replace("PostgreSQL DDL Shell (MODULE)", "PostgreSQL DDL Shell (Module 03)");
html = html.replace("Tugmalar: Ctrl + Enter (Tekshirish)", "Shortcut: Ctrl + Enter (Run & Test)");
html = html.replace("SQL DDL kodingizni bu yerga yozing...", "Type your SQL DDL code here...");

// Action buttons
html = html.replace("Tekshirish va Bajarish", "Run & Test");
html = html.replace("Maslahat", "Hint");
html = html.replace("Kutilgan Sxema", "Expected Schema");
html = html.replace("Namuna Kod", "Sample Solution");
html = html.replace("◀ Oldingi", "◀ Prev");
html = html.replace("Keyingi ▶", "Next ▶");

// Modals
html = html.replace("150 Ta DDL Savollari Xaritasi", "150 DDL Challenge Map");
html = html.replace(
  "Istalgan savol raqamini tanlab, to'g'ridan-to'g'ri uning DDL topshirig'iga o'tishingiz mumkin:",
  "Select any challenge number to jump directly to its DDL architecture task:"
);
html = html.replace("Arxitektura Voqeasi va Dilemmasi", "Architecture Event & Dilemma");

fs.writeFileSync(indexPath, html, 'utf8');
console.log('Updated week3/index.html');

// 2. GAME.JS
const gamePath = path.join(__dirname, '../week3/game.js');
let game = fs.readFileSync(gamePath, 'utf8');

// Update storage key
game = game.replace("const STORAGE_KEY = 'ACADEMY_DS_W3_DDL_PROGRESS_V2';", "const STORAGE_KEY = 'DS_W3_PROGRESS';");
game = game.replace(
  "const saved = localStorage.getItem(STORAGE_KEY);",
  "const saved = localStorage.getItem(STORAGE_KEY) || localStorage.getItem('ACADEMY_DS_W3_DDL_PROGRESS_V2');"
);

// UI task label
game = game.replace(/<strong>Me'moriy topshiriq:<\/strong>/g, "<strong>Architectural Task:</strong>");
game = game.replace(/Professor Atlas Maslahati:/g, "Architect Tip:");
game = game.replace(/Progress tozalandi!/g, "Progress has been reset!");
game = game.replace(/Haqiqatan ham barcha natijalarni o'chirib, noldan boshlamoqchimisiz\?/g, "Are you sure you want to reset all progress?");

fs.writeFileSync(gamePath, game, 'utf8');
console.log('Updated week3/game.js');
