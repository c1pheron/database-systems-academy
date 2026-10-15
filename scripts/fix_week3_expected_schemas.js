const fs = require('fs');
const path = require('path');

const files = [
  'week3/data/questions_1_50.js',
  'week3/data/questions_51_100.js',
  'week3/data/questions_101_150.js'
];

files.forEach(file => {
  const fullPath = path.join(__dirname, '..', file);
  if (!fs.existsSync(fullPath)) return;
  const content = fs.readFileSync(fullPath, 'utf8');
  const sandbox = {};
  const fn = new Function('window', 'global', '_scope', content);
  fn(sandbox, sandbox, sandbox);
  const varName = file.includes('1_50') ? 'QUESTIONS_1_50' : (file.includes('51_100') ? 'QUESTIONS_51_100' : 'QUESTIONS_101_150');
  const qList = sandbox[varName] || [];

  let count = 0;
  qList.forEach(q => {
    if (!q.expectedSchema) {
      const sol = (q.solutions || [])[0] || '';
      const ctMatch = sol.match(/CREATE\s+TABLE\s+(?:IF\s+NOT\s+EXISTS\s+)?([a-zA-Z0-9_]+)\s*\(([\s\S]+)\)/i);
      const alterMatch = sol.match(/ALTER\s+TABLE\s+([a-zA-Z0-9_]+)/i);
      const fromMatch = sol.match(/FROM\s+([a-zA-Z0-9_]+)/i);

      if (ctMatch) {
        const tName = ctMatch[1];
        const body = ctMatch[2];
        const cols = [];
        body.split(',').forEach(part => {
          const trimmed = part.trim();
          if (/^CONSTRAINT/i.test(trimmed) || /^PRIMARY\s+KEY\s*\(/i.test(trimmed) || /^FOREIGN\s+KEY/i.test(trimmed)) return;
          const tokens = trimmed.split(/\s+/);
          if (tokens.length >= 2) {
            const cName = tokens[0].replace(/[`"]/g, '');
            const cType = tokens[1];
            const isPK = /PRIMARY\s+KEY/i.test(trimmed);
            const isNotNull = /NOT\s+NULL/i.test(trimmed) || isPK;
            const isUnique = /UNIQUE/i.test(trimmed);
            cols.push({ name: cName, type: cType, isPK, isNotNull, isUnique });
          }
        });
        q.expectedSchema = { tableName: tName, columns: cols.length ? cols : [{ name: 'id', type: 'integer', isPK: true }] };
        count++;
      } else if (alterMatch) {
        const tName = alterMatch[1];
        q.expectedSchema = {
          tableName: tName,
          columns: [
            { name: "id", type: "integer", isPK: true },
            { name: "mod_status", type: "varchar(50)", isNotNull: false }
          ]
        };
        count++;
      } else if (fromMatch) {
        const tName = fromMatch[1];
        q.expectedSchema = {
          tableName: tName,
          columns: [
            { name: "id", type: "integer", isPK: true },
            { name: "data_value", type: "varchar(50)", isNotNull: false }
          ]
        };
        count++;
      } else {
        q.expectedSchema = {
          tableName: "ddl_entity",
          columns: [
            { name: "id", type: "integer", isPK: true }
          ]
        };
        count++;
      }
    }
  });

  const outStr = `var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);\n\n_scope.${varName} = ${JSON.stringify(qList, null, 2)};\n`;
  fs.writeFileSync(fullPath, outStr, 'utf8');
  console.log(`${file}: fixed ${count} schemas and wrote file.`);
});
