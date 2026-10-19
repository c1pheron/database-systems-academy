const fs = require('fs');
const path = require('path');

const cssSnippet = `
/* ==========================================================
   AUTHENTIC STORY & NUMBERED STEPS CARDS (OOP PEDAGOGY)
   ========================================================== */
.problem-scenario-container {
  display: flex !important;
  flex-direction: column !important;
  gap: 12px !important;
  margin-bottom: 12px !important;
}
.scenario-story-card {
  background: linear-gradient(135deg, rgba(30, 20, 58, 0.85) 0%, rgba(18, 14, 40, 0.95) 100%) !important;
  border: 1px solid rgba(168, 85, 247, 0.35) !important;
  border-left: 4px solid #a855f7 !important;
  border-radius: 8px !important;
  padding: 12px 14px !important;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3) !important;
}
.scenario-header {
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;
  margin-bottom: 8px !important;
}
.scenario-badge {
  display: inline-flex !important;
  align-items: center !important;
  gap: 6px !important;
  font-size: 11px !important;
  font-weight: 800 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.6px !important;
  padding: 3px 8px !important;
  border-radius: 4px !important;
}
.scenario-badge.story-badge {
  background: rgba(168, 85, 247, 0.2) !important;
  color: #e9d5ff !important;
  border: 1px solid rgba(168, 85, 247, 0.4) !important;
}
.scenario-badge.steps-badge {
  background: rgba(56, 189, 248, 0.2) !important;
  color: #bae6fd !important;
  border: 1px solid rgba(56, 189, 248, 0.4) !important;
}
.scenario-story-text {
  margin: 0 !important;
  font-size: 13px !important;
  line-height: 1.65 !important;
  color: #e2e8f0 !important;
  font-weight: 400 !important;
}
.scenario-steps-card {
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(12, 17, 34, 0.95) 100%) !important;
  border: 1px solid rgba(56, 189, 248, 0.35) !important;
  border-left: 4px solid #38bdf8 !important;
  border-radius: 8px !important;
  padding: 12px 14px !important;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3) !important;
}
.scenario-steps-list {
  list-style: none !important;
  padding: 0 !important;
  margin: 8px 0 0 0 !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 8px !important;
}
.scenario-step-item {
  display: flex !important;
  align-items: flex-start !important;
  gap: 10px !important;
  background: rgba(22, 27, 46, 0.6) !important;
  border: 1px solid rgba(148, 163, 184, 0.15) !important;
  border-radius: 6px !important;
  padding: 8px 10px !important;
  transition: all 0.2s ease !important;
}
.scenario-step-item:hover {
  background: rgba(30, 41, 59, 0.8) !important;
  border-color: rgba(56, 189, 248, 0.4) !important;
  transform: translateX(2px) !important;
}
.scenario-step-num {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  width: 22px !important;
  height: 22px !important;
  min-width: 22px !important;
  border-radius: 50% !important;
  background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%) !important;
  color: #ffffff !important;
  font-size: 11px !important;
  font-weight: 800 !important;
  box-shadow: 0 0 8px rgba(56, 189, 248, 0.5) !important;
  margin-top: 2px !important;
}
.scenario-step-content {
  font-size: 12.5px !important;
  line-height: 1.6 !important;
  color: #f1f5f9 !important;
  flex: 1 !important;
}
.scenario-step-content code {
  background: rgba(168, 85, 247, 0.18) !important;
  color: #38bdf8 !important;
  border: 1px solid rgba(168, 85, 247, 0.3) !important;
  padding: 1px 5px !important;
  border-radius: 4px !important;
  font-family: Consolas, 'Courier New', monospace !important;
  font-size: 12px !important;
  font-weight: 600 !important;
}
`;

const weeks = ['oop-w2-game', 'oop-w3-game', 'oop-w4-game', 'oop-w5-game', 'oop-w6-game'];

weeks.forEach(w => {
  const dir = path.join(__dirname, '..', 'oop', w);
  if (!fs.existsSync(dir)) return;

  // 1. index.html
  const indexPath = path.join(dir, 'index.html');
  if (fs.existsSync(indexPath)) {
    let indexHtml = fs.readFileSync(indexPath, 'utf8');
    if (indexHtml.includes('<p id="problemScenario"></p>')) {
      indexHtml = indexHtml.replace('<p id="problemScenario"></p>', '<div id="problemScenario" class="problem-scenario-container"></div>');
      fs.writeFileSync(indexPath, indexHtml, 'utf8');
      console.log('Updated index.html in', w);
    }
  }

  // 2. game.js
  const gamePath = path.join(dir, 'game.js');
  if (fs.existsSync(gamePath)) {
    let gameJs = fs.readFileSync(gamePath, 'utf8');
    const oldCode = 'if (elScenario) elScenario.textContent = (ch.scenario && ch.scenario[currentLang]) ? ch.scenario[currentLang] : (ch.scenario?.uz || "");';
    const newCode = 'if (elScenario) {\n      if (typeof window.formatChallengeScenarioHTML === "function") {\n        elScenario.innerHTML = window.formatChallengeScenarioHTML(ch, currentLang);\n      } else {\n        elScenario.textContent = (ch.scenario && ch.scenario[currentLang]) ? ch.scenario[currentLang] : (ch.scenario?.uz || "");\n      }\n    }';
    if (gameJs.includes(oldCode)) {
      gameJs = gameJs.replace(oldCode, newCode);
      fs.writeFileSync(gamePath, gameJs, 'utf8');
      console.log('Updated game.js in', w);
    }
  }

  // 3. styles.css
  const stylesPath = path.join(dir, 'styles.css');
  if (fs.existsSync(stylesPath)) {
    let stylesCss = fs.readFileSync(stylesPath, 'utf8');
    if (!stylesCss.includes('.scenario-story-card')) {
      stylesCss += cssSnippet;
      fs.writeFileSync(stylesPath, stylesCss, 'utf8');
      console.log('Updated styles.css in', w);
    }
  }
});
console.log('Scenario engine propagation complete.');
