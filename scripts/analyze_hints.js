const fs = require('fs');
const path = require('path');
const vm = require('vm');

const file = path.join(__dirname, '..', 'week1', 'data', 'eer_clients_1_50.js');
const code = fs.readFileSync(file, 'utf8');
const ctx = { window: {}, global: {} };
vm.runInNewContext(code, ctx);
const qs = Object.values(ctx.window)[0] || [];

const regex = /(\b[01MNmn]:[01MNmn]\b|\([01\.\*]+\)|1\.\.1|0\.\.\*|1\.\.\*|0\.\.1)/;
let count = 0;
qs.forEach(q => {
  ['story', 'storyEn', 'instruction', 'instructionEn'].forEach(field => {
    if (q[field] && regex.test(q[field])) {
      count++;
      console.log(`Q${q.id} [${field}]: ${q[field]}`);
    }
  });
});
console.log(`Total occurrences: ${count}`);
