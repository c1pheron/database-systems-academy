const fs = require('fs');
const path = require('path');
const vm = require('vm');

function cleanUzbekText(text) {
  if (!text) return "";
  let s = text.trim();

  // Common broken machine-translation replacements in Week 5 & 6
  s = s.replace(/working in departments located in/gi, "shahrida joylashgan bo'limlarda ishlovchi");
  s = s.replace(/All employee name/gi, "Barcha xodimlarning ismi");
  s = s.replace(/display\./gi, "chiqaring.");
  s = s.replace(/display/gi, "chiqaring");
  s = s.replace(/Natijani avandl/gi, "Natijani avval");
  s = s.replace(/order by\./gi, "tartibida saralang.");
  s = s.replace(/order by/gi, "saralang");
  s = s.replace(/bo'yicha order by/gi, "bo'yicha saralang");
  s = s.replace(/Show /gi, "Ko'rsating: ");
  s = s.replace(/Find /gi, "Toping: ");
  s = s.replace(/List /gi, "Ro'yxatini chiqaring: ");

  return s;
}

function extractSqlMetadata(sql) {
  if (!sql) return { columns: [], tables: [], orderBy: "" };
  const s = sql.trim().replace(/--.*$/gm, " ").replace(/\s+/g, " ");

  // Columns
  let columns = [];
  const selectMatch = s.match(/SELECT\s+(DISTINCT\s+)?([\s\S]+?)\s+FROM\b/i);
  if (selectMatch) {
    const rawCols = selectMatch[2];
    columns = rawCols.split(',').map(c => {
      const aliasMatch = c.match(/\bAS\s+([a-zA-Z0-9_]+)/i);
      if (aliasMatch) return aliasMatch[1];
      const parts = c.trim().split(/\s+/);
      const clean = parts[parts.length - 1].replace(/["']/g, "");
      const dotParts = clean.split('.');
      return dotParts[dotParts.length - 1];
    }).filter(c => c && c !== '*');
  }

  // Tables
  let tables = [];
  const fromMatch = s.match(/\bFROM\s+([\s\S]+?)(?=\s+WHERE|\s+GROUP|\s+HAVING|\s+ORDER|\s+LIMIT|;|$)/i);
  if (fromMatch) {
    const fromStr = 'FROM ' + fromMatch[1];
    const tblMatches = [...fromStr.matchAll(/\b(?:FROM|JOIN)\s+([a-zA-Z0-9_]+)/gi)];
    tables = tblMatches.map(m => m[1].toLowerCase()).filter(t => !['select', 'as', 'on', 'where', 'distinct'].includes(t));
    if (tables.length === 0) {
      const first = fromMatch[1].trim().split(/\s+/)[0];
      if (first && !['select', 'as', 'on', 'where'].includes(first.toLowerCase())) {
        tables.push(first.toLowerCase());
      }
    }
  }

  // Order By
  let orderBy = "";
  const orderMatch = s.match(/\bORDER\s+BY\s+([\s\S]+?)(?=\s+LIMIT|;|$)/i);
  if (orderMatch) {
    orderBy = orderMatch[1].trim();
  }

  return { columns, tables: [...new Set(tables)], orderBy };
}

// -------------------------------------------------------------
// PROCESS WEEK 1
// -------------------------------------------------------------
function processWeek1() {
  const dir = path.join(__dirname, '..', 'week1', 'data');
  const files = ['eer_clients_1_50.js', 'eer_clients_51_100.js', 'eer_clients_101_150.js'];

  files.forEach(f => {
    const filePath = path.join(dir, f);
    if (!fs.existsSync(filePath)) return;

    const rawCode = fs.readFileSync(filePath, 'utf8');
    const sandbox = { global: {}, window: {} };
    sandbox.global = sandbox;
    sandbox.window = sandbox;
    vm.createContext(sandbox);
    vm.runInContext(rawCode, sandbox);

    const varName = Object.keys(sandbox).find(k => k.startsWith('EER_CLIENTS_'));
    const list = sandbox[varName];
    if (!list) return;

    list.forEach(q => {
      if (q.taskUz && q.taskUz.includes("📋 **Kutilayotgan Entitiylar va Atributlar:**")) return;

      const entDetails = [];
      const ents = (q.expectedDiagram?.entities && q.expectedDiagram.entities.length > 0)
        ? q.expectedDiagram.entities
        : (q.starterDiagram?.entities || []);

      ents.forEach(e => {
        const starterEnt = (q.starterDiagram?.entities || []).find(se => se.name === e.name);
        const attrs = starterEnt?.attributes || e.attributes || [];
        let attrNames = [];
        if (attrs.length > 0) {
          attrNames = attrs.map(a => `${a.name}${a.isPK ? ' {PK}' : ''}`);
        } else if (e.pk) {
          attrNames.push(`${e.pk} {PK}`);
        }
        const pkStr = e.pk ? ` (Birlamchi kalit: \`${e.pk}\`)` : '';
        const attrsStr = attrNames.length > 0 ? `: ${attrNames.map(a => `\`${a}\``).join(', ')}` : '';
        entDetails.push(`• **${e.name}**${pkStr}${attrsStr}`);
      });

      const relDetails = [];
      if (q.expectedDiagram?.relationships) {
        q.expectedDiagram.relationships.forEach(r => {
          const e1 = r.entity1 || r.fromEntityName || 'Entity1';
          const e2 = r.entity2 || r.toEntityName || 'Entity2';
          const m1 = r.mult1 || '1..1';
          const m2 = r.mult2 || '1..*';
          relDetails.push(`• \`${e1}\` (**${m1}**) ↔ \`${e2}\` (**${m2}**)`);
        });
      }

      if (entDetails.length > 0) {
        let specBlock = `\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n${entDetails.join('\n')}`;
        if (relDetails.length > 0) {
          specBlock += `\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n${relDetails.join('\n')}`;
        }
        q.taskUz = (q.taskUz || "").trim() + specBlock;
      }
    });

    const newCode = `var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);\n\n_scope.${varName} = ${JSON.stringify(list, null, 2)};\n`;
    fs.writeFileSync(filePath, newCode, 'utf8');
    console.log(`Updated Week 1: ${f} (${list.length} questions)`);
  });
}

// -------------------------------------------------------------
// PROCESS WEEK 2
// -------------------------------------------------------------
function processWeek2() {
  const dir = path.join(__dirname, '..', 'week2', 'data');
  const files = ['questions_1_50.js', 'questions_51_100.js', 'questions_101_150.js'];

  files.forEach(f => {
    const filePath = path.join(dir, f);
    if (!fs.existsSync(filePath)) return;

    const rawCode = fs.readFileSync(filePath, 'utf8');
    const sandbox = { global: {}, window: {} };
    sandbox.global = sandbox;
    sandbox.window = sandbox;
    vm.createContext(sandbox);
    vm.runInContext(rawCode, sandbox);

    const varName = Object.keys(sandbox).find(k => k.startsWith('QUESTIONS_'));
    const list = sandbox[varName];
    if (!list) return;

    list.forEach(q => {
      if (q.taskUz && q.taskUz.includes("📋 **Kutilayotgan Jadval va Ustunlar:**")) return;

      const tableDetails = [];
      if (q.expectedSchema) {
        if (q.expectedSchema.tableName) {
          const tName = q.expectedSchema.tableName;
          const cols = (q.expectedSchema.columns || []).map(c => {
            const mark = c.isPK ? ' [PK]' : (c.isFK ? ' [FK]' : '');
            const typeStr = c.type ? ` (${c.type})` : '';
            return `\`${c.name}\`${mark}${typeStr}`;
          });
          tableDetails.push(`• Jadval: **${tName}**\n• Ustunlar: ${cols.join(', ')}`);
        } else if (q.expectedSchema.tables) {
          q.expectedSchema.tables.forEach(t => {
            const tName = t.tableName || t.name;
            const cols = (t.columns || []).map(c => {
              const mark = c.isPK ? ' [PK]' : (c.isFK ? ' [FK]' : '');
              const typeStr = c.type ? ` (${c.type})` : '';
              return `\`${c.name}\`${mark}${typeStr}`;
            });
            tableDetails.push(`• Jadval: **${tName}** (Ustunlar: ${cols.join(', ')})`);
          });
          if (q.expectedSchema.references && q.expectedSchema.references.length > 0) {
            const refStr = q.expectedSchema.references.map(r => `• \`${r.fromTable}\` (${r.fromMult || '0..*'}) ↔ \`${r.toTable}\` (${r.toMult || '1..1'})`).join('\n');
            tableDetails.push(`🔗 **Bog'lanishlar (Tashqi Kalit / Crow's Foot):**\n${refStr}`);
          }
        }
      }

      if (tableDetails.length > 0) {
        q.taskUz = (q.taskUz || "").trim() + `\n\n📋 **Kutilayotgan Jadval va Ustunlar:**\n${tableDetails.join('\n')}`;
      }
    });

    const newCode = `var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);\n\n_scope.${varName} = ${JSON.stringify(list, null, 2)};\n`;
    fs.writeFileSync(filePath, newCode, 'utf8');
    console.log(`Updated Week 2: ${f} (${list.length} questions)`);
  });
}

// -------------------------------------------------------------
// PROCESS WEEK 3
// -------------------------------------------------------------
function processWeek3() {
  const dir = path.join(__dirname, '..', 'week3', 'data');
  const files = ['questions_1_50.js', 'questions_51_100.js', 'questions_101_150.js'];

  files.forEach(f => {
    const filePath = path.join(dir, f);
    if (!fs.existsSync(filePath)) return;

    const rawCode = fs.readFileSync(filePath, 'utf8');
    const sandbox = { global: {}, window: {} };
    sandbox.global = sandbox;
    sandbox.window = sandbox;
    vm.createContext(sandbox);
    vm.runInContext(rawCode, sandbox);

    const varName = Object.keys(sandbox).find(k => k.startsWith('QUESTIONS_'));
    const list = sandbox[varName];
    if (!list) return;

    list.forEach(q => {
      // Remove empty {} from requiredPatterns
      if (q.requiredPatterns && Array.isArray(q.requiredPatterns)) {
        q.requiredPatterns = q.requiredPatterns.filter(pat => {
          if (!pat) return false;
          if (typeof pat === 'object' && !(pat instanceof RegExp) && !Array.isArray(pat) && Object.keys(pat).length === 0) {
            return false;
          }
          return true;
        });
      }

      if (q.taskUz && q.taskUz.includes("📋 **Kutilayotgan Relyatsion Sxema / DDL:**")) return;

      const ddlDetails = [];
      if (q.expectedSchema && q.expectedSchema.tableName) {
        const tName = q.expectedSchema.tableName;
        const cols = (q.expectedSchema.columns || []).map(c => {
          const mark = c.isPK ? ' [PK]' : (c.isNotNull ? ' [NOT NULL]' : (c.isUQ ? ' [UNIQUE]' : ''));
          const typeStr = c.type ? ` (${c.type})` : '';
          return `\`${c.name}\`${mark}${typeStr}`;
        });
        ddlDetails.push(`• Jadval: **${tName}**\n• Ustunlar: ${cols.join(', ')}`);
        if (q.expectedSchema.requiredConstraints && q.expectedSchema.requiredConstraints.length > 0) {
          ddlDetails.push(`• Cheklovlar: ${q.expectedSchema.requiredConstraints.map(c => `\`${c}\``).join(', ')}`);
        }
      }

      if (ddlDetails.length > 0) {
        q.taskUz = (q.taskUz || "").trim() + `\n\n📋 **Kutilayotgan Relyatsion Sxema / DDL:**\n${ddlDetails.join('\n')}`;
      }
    });

    const newCode = `var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);\n\n_scope.${varName} = ${JSON.stringify(list, null, 2)};\n`;
    fs.writeFileSync(filePath, newCode, 'utf8');
    console.log(`Updated Week 3: ${f} (${list.length} questions)`);
  });
}

// -------------------------------------------------------------
// PROCESS WEEKS 4, 5, 6 (SQL Query Modules)
// -------------------------------------------------------------
function processSqlWeeks(weekNum) {
  const dir = path.join(__dirname, '..', `week${weekNum}`, 'data');
  const files = ['questions_1_50.js', 'questions_51_100.js', 'questions_101_150.js'];

  files.forEach(f => {
    const filePath = path.join(dir, f);
    if (!fs.existsSync(filePath)) return;

    const rawCode = fs.readFileSync(filePath, 'utf8');
    const sandbox = { global: {}, window: {} };
    sandbox.global = sandbox;
    sandbox.window = sandbox;
    vm.createContext(sandbox);
    vm.runInContext(rawCode, sandbox);

    const varName = Object.keys(sandbox).find(k => k.startsWith('QUESTIONS_'));
    const list = sandbox[varName];
    if (!list) return;

    list.forEach(q => {
      // Strip previous metadata if present
      q.taskUz = (q.taskUz || "").replace(/\n\n📋 \*\*Kutilayotgan Natija Ustunlari & Manbalar:\*\*[\s\S]*$/g, "").trim();
      if (q.task) {
        q.task = q.task.replace(/\n\n📋 \*\*Kutilayotgan Natija Ustunlari & Manbalar:\*\*[\s\S]*$/g, "").trim();
      }

      // Clean broken machine translations
      q.taskUz = cleanUzbekText(q.taskUz);
      if (q.task) q.task = cleanUzbekText(q.task);

      const meta = extractSqlMetadata(q.expectedSql || (q.solutions && q.solutions[0]) || "");
      const metaDetails = [];

      if (meta.columns.length > 0) {
        metaDetails.push(`• Kutilayotgan ustunlar: ${meta.columns.map(c => `\`${c}\``).join(', ')}`);
      }
      if (meta.tables.length > 0) {
        metaDetails.push(`• Asosiy jadvallar: ${meta.tables.map(t => `\`${t}\``).join(', ')}`);
      }
      if (meta.orderBy) {
        metaDetails.push(`• Saralash (ORDER BY): \`${meta.orderBy}\``);
      }

      if (metaDetails.length > 0) {
        q.taskUz = q.taskUz.trim() + `\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n${metaDetails.join('\n')}`;
      }
    });

    const newCode = `var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);\n\n_scope.${varName} = ${JSON.stringify(list, null, 2)};\n`;
    fs.writeFileSync(filePath, newCode, 'utf8');
    console.log(`Updated Week ${weekNum}: ${f} (${list.length} questions)`);
  });
}

console.log("=== ENRICHING ALL 900 QUESTIONS ===");
processWeek1();
processWeek2();
processWeek3();
processSqlWeeks(4);
processSqlWeeks(5);
processSqlWeeks(6);
console.log("=== ALL 900 QUESTIONS FULLY ENRICHED & AUDITED! ===");
