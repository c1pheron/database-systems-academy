const fs = require('fs');
const path = require('path');
const vm = require('vm');

const file = path.join(__dirname, '..', 'oop', 'shared', 'challenges-w1.js');
const code = fs.readFileSync(file, 'utf8');
const ctx = { window: {} };
vm.runInNewContext(code, ctx);
const qs = ctx.window.OOP_CHALLENGES_W1;

console.log('Total challenges:', qs.length);
qs.forEach(q => {
  const out = (q.expectedOutput || '').split('\n').join(' \\n ');
  console.log(`Q${q.id} [${q.stage}]: ${q.title.uz} -> Output: ${out}`);
});
