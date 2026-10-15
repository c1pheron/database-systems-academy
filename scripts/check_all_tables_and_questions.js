const fs = require('fs');
const path = require('path');

console.log("=== INSPECTING ALL DS QUESTIONS (W1 to W6) FOR TABLE CONSISTENCY ===");

// 1. Week 4 Check
['week4/data/questions_1_50.js', 'week4/data/questions_51_100.js', 'week4/data/questions_101_150.js'].forEach(file => {
  const fullPath = path.join(__dirname, '..', file);
  if (!fs.existsSync(fullPath)) return;
  const content = fs.readFileSync(fullPath, 'utf8');
  const sandbox = {};
  const fn = new Function('window', 'global', '_scope', content);
  fn(sandbox, sandbox, sandbox);
  const qList = sandbox.QUESTIONS_1_50 || sandbox.QUESTIONS_51_100 || sandbox.QUESTIONS_101_150 || [];
  
  qList.forEach(q => {
    // Check solutions for non-emp/dept/salgrade tables
    (q.solutions || []).forEach(sol => {
      // Find table after FROM or JOIN
      const re = /\b(?:FROM|JOIN)\s+([a-zA-Z0-9_]+)/gi;
      let match;
      while ((match = re.exec(sol)) !== null) {
        const tbl = match[1].toLowerCase();
        if (!['emp', 'dept', 'salgrade', 'ranked', 'org', 'chain'].includes(tbl)) {
          console.log(`[Week 4] Q#${q.id} references table '${tbl}' in solution: "${sol}"`);
        }
      }
    });

    // Check if taskUz asks for unknown table
    const task = q.taskUz || '';
    if (task.includes('student') || task.includes('course') || task.includes('customer') || task.includes('order')) {
      console.log(`[Week 4] Q#${q.id} task text mentions possible non-emp table: ${task.substring(0, 100)}...`);
    }
  });
});

// 2. Week 3 Check (DDL and Relational Algebra)
['week3/data/questions_1_50.js', 'week3/data/questions_51_100.js', 'week3/data/questions_101_150.js'].forEach(file => {
  const fullPath = path.join(__dirname, '..', file);
  if (!fs.existsSync(fullPath)) return;
  const content = fs.readFileSync(fullPath, 'utf8');
  const sandbox = {};
  const fn = new Function('window', 'global', '_scope', content);
  fn(sandbox, sandbox, sandbox);
  const qList = sandbox.QUESTIONS_1_50 || sandbox.QUESTIONS_51_100 || sandbox.QUESTIONS_101_150 || [];
  
  qList.forEach(q => {
    // Check if expectedSchema exists or not
    if (!q.expectedSchema) {
      console.log(`[Week 3] Q#${q.id} missing expectedSchema! Title: ${q.title}`);
    }
  });
});

console.log("=== CHECK COMPLETE ===");
