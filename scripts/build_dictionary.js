/**
 * DATABASE SYSTEMS ACADEMY — BUILD MASTER ENCYCLOPEDIA (LUG'AT)
 * Merges all 6 weekly dictionary modules (132 rich items) into database_dictionary.js
 */
const fs = require('fs');
const path = require('path');

const w1 = require('./dict_data/week1.js');
const w2 = require('./dict_data/week2.js');
const w3 = require('./dict_data/week3.js');
const w4 = require('./dict_data/week4.js');
const w5 = require('./dict_data/week5.js');
const w6 = require('./dict_data/week6.js');

const allEntries = [...w1, ...w2, ...w3, ...w4, ...w5, ...w6];

console.log(`Compiling ${allEntries.length} encyclopedia entries across 6 modules...`);

const targetFile = path.resolve(__dirname, '../database_dictionary.js');
const existingCode = fs.readFileSync(targetFile, 'utf8');

const classMarker = "if (typeof window !== 'undefined') {";
const classIndex = existingCode.indexOf(classMarker);

if (classIndex === -1) {
  console.error("Could not find class marker in database_dictionary.js");
  process.exit(1);
}

const classCode = existingCode.substring(classIndex);

const fileHeader = `/**
 * ============================================================================
 * DATABASE SYSTEMS ACADEMY — ENCYCLOPEDIA & COMMANDS DICTIONARY (LUG'AT)
 * Barcha 6 ta haftalikning to'liq 130+ ta komandalari, funksiyalari,
 * relyatsion algebra, EER modellashtirish va optimizatsiya ensiklopediyasi.
 * Har bir mavzuning:
 * 1. Nima ish qilishi (Sodda, tushunarli tilda)
 * 2. Qachon kerak bo'lishi (Payme, Uzum, Korzinka, Click kabi jonli tizimlar)
 * 3. Qanday yozilishi (Toza SQL sintaksisi)
 * 4. Qanday qo'shimchalar / kombinatsiyalar bilan ishlashi
 * 5. Jonli amaliy kodi / misoli
 * 6. Diqqat qilinishi kerak bo'lgan tuzoqlari (Gotchas)
 * 7. Bog'langan tushunchalar
 * ============================================================================
 */

(function () {
  'use strict';

  const DICTIONARY_DATA = ${JSON.stringify(allEntries, null, 2)};

  `;

const finalContent = fileHeader + classCode;

fs.writeFileSync(targetFile, finalContent, 'utf8');
console.log(`Successfully updated database_dictionary.js (${finalContent.length} bytes, ${allEntries.length} entries).`);
