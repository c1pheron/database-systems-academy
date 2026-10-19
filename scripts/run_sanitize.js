const path = require('path');
const { processFile } = require('./sanitize_datasets.js');

const root = path.join(__dirname, '..');

// Week 1 files (sanitize giveaway text, retain expectedDiagram multiplicity for learning)
const week1Files = [
  path.join(root, 'week1', 'data', 'eer_clients_1_50.js'),
  path.join(root, 'week1', 'data', 'questions_1_50.js'),
  path.join(root, 'week1', 'data', 'eer_clients_51_100.js'),
  path.join(root, 'week1', 'data', 'questions_51_100.js'),
  path.join(root, 'week1', 'data', 'eer_clients_101_150.js'),
  path.join(root, 'week1', 'data', 'questions_101_150.js'),
];

// Week 2 files (sanitize giveaway text AND remove mult1/mult2 from expectedDiagram)
const week2Files = [
  path.join(root, 'week2', 'data', 'eer_clients_1_50.js'),
  path.join(root, 'week2', 'data', 'questions_1_50.js'),
  path.join(root, 'week2', 'data', 'eer_clients_51_100.js'),
  path.join(root, 'week2', 'data', 'questions_51_100.js'),
  path.join(root, 'week2', 'data', 'eer_clients_101_150.js'),
  path.join(root, 'week2', 'data', 'questions_101_150.js'),
];

console.log('Sanitizing Week 1 datasets...');
week1Files.forEach(f => processFile(f, false));

console.log('Sanitizing Week 2 datasets (multiplicities completely stripped)...');
week2Files.forEach(f => processFile(f, true));

console.log('Sanitization complete!');
