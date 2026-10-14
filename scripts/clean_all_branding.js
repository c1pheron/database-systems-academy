const fs = require('fs');
const path = require('path');

const academyRoot = path.join(__dirname, '..');

function cleanFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  if (content.includes('MODULE')) {
    content = content.replace(/MODULE/g, 'MODULE');
    changed = true;
  }
  if (content.includes('ACADEMY')) {
    content = content.replace(/ACADEMY/g, 'ACADEMY');
    changed = true;
  }
  if (content.includes('Architect')) {
    content = content.replace(/Architect/g, 'Architect');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Cleaned: ${path.relative(academyRoot, filePath)}`);
  }
}

function traverse(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    if (f === '.git' || f === 'node_modules' || f.endsWith('.png')) continue;
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      traverse(full);
    } else if (f.endsWith('.js') || f.endsWith('.html') || f.endsWith('.css') || f.endsWith('.md')) {
      cleanFile(full);
    }
  }
}

traverse(academyRoot);
console.log('Zero-branding cleanup finished!');
