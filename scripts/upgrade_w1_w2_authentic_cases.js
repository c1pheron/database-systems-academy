const fs = require('fs');
const path = require('path');
const vm = require('vm');

// ============================================================================
// 1. WEEK 1 AUTHENTIC CASE STUDIES ENRICHER (Seminar 1 Standard)
// ============================================================================

function generateW1Story(q) {
  const ents = (q.expectedDiagram?.entities && q.expectedDiagram.entities.length > 0)
    ? q.expectedDiagram.entities
    : (q.starterDiagram?.entities || []);
  
  const rels = q.expectedDiagram?.relationships || [];

  const entDescriptions = ents.map(e => {
    const starterEnt = (q.starterDiagram?.entities || []).find(se => se.name === e.name);
    const attrs = (starterEnt?.attributes || []).map(a => {
      if (a.isPK) return `noyob identifikatori \`${a.name}\` {PK}`;
      return `\`${a.name}\``;
    });
    return `**${e.name}** entitiysi (atributlari: ${attrs.join(', ')})`;
  });

  let relNarrative = "";
  if (rels.length > 0) {
    const relParts = rels.map(r => {
      const e1 = r.entity1;
      const e2 = r.entity2;
      const m1 = r.mult1 || '1..1';
      const m2 = r.mult2 || '1..*';

      let explanation = "";
      if (m1 === '1..1' && m2 === '1..*') {
        explanation = `Har bir ${e2} faqat va faqat bitta ${e1} ga qat'iy biriktiriladi (majburiy, 1..1). Boshqa tomondan, har bir ${e1} o'z tasarrufida kamida 1 ta va ko'pi bilan ko'plab ${e2} larni qamrab olishi talab etiladi (1..*).`;
      } else if (m1 === '1..1' && m2 === '0..*') {
        explanation = `Har bir ${e2} aniq bitta ${e1} ga tegishli (1..1), biroq yangi ochilgan ${e1} da hozircha birorta ham ${e2} bo'lmasligi yoki kelgusida ko'plab bo'lishi mumkin (ixtiyoriy, 0..*).`;
      } else if (m1 === '0..1' && m2 === '1..1') {
        explanation = `Har bir ${e2} aniq bitta ${e1} tomonidan boshqariladi (1..1). Har bir ${e1} esa ko'pi bilan bitta ${e2} ni boshqarishi mumkin, ayrimlari esa umuman boshqarmaydi (ixtiyoriy, 0..1).`;
      } else if (m1 === '0..*' && m2 === '0..*') {
        explanation = `Bu ko'pga-ko'p (*:*) assotsiatsiyadir: bitta ${e1} bir nechta ${e2} ga bog'lanishi mumkin, va aksincha, bitta ${e2} bir nechta ${e1} bilan hamkorlik qilishi mumkin (0..* ↔ 0..*).`;
      } else {
        explanation = `Biznes qoidasiga ko'ra, munosabat chegaralari: \`${e1}\` tomonida **${m1}**, \`${e2}\` tomonida esa **${m2}** qatnashishi shart.`;
      }
      return `• **${e1}** va **${e2}** o'rtasidagi munosabat: ${explanation}`;
    });
    relNarrative = relParts.join('\n');
  } else {
    relNarrative = "Mazkur mustaqil entitiy tashkilotning asosiy axborot yadrosi bo'lib, o'zining mustaqil birlamchi kalitiga ega.";
  }

  const baseTitle = q.title || "Tizim Loyihasi";
  const client = q.clientName || "Bosh Arxitektor";
  const role = q.clientRole || "Kompaniya Maslahatchisi";

  let story = `**Mijoz Portfolio:** ${client} (${role})\n`;
  story += `**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n`;
  story += `📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n${entDescriptions.map(d => `• ${d}`).join('\n')}\n\n`;
  story += `🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n${relNarrative}\n\n`;
  story += `Agar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.`;

  return story;
}

function generateW1Task(q) {
  const ents = (q.expectedDiagram?.entities && q.expectedDiagram.entities.length > 0)
    ? q.expectedDiagram.entities
    : (q.starterDiagram?.entities || []);
  
  const rels = q.expectedDiagram?.relationships || [];

  let task = `Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n`;
  task += `1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n`;
  task += `2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n`;
  task += `3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n`;

  task += `📋 **Kutilayotgan Entitiylar va Atributlar:**\n`;
  ents.forEach(e => {
    const starterEnt = (q.starterDiagram?.entities || []).find(se => se.name === e.name);
    const attrs = (starterEnt?.attributes || []).map(a => {
      const mark = a.isPK ? ' {PK}' : '';
      return `\`${a.name}\`${mark}`;
    });
    task += `• **${e.name}** (Birlamchi kalit: \`${e.pk || (starterEnt?.attributes?.find(a => a.isPK)?.name) || 'id'}\`): ${attrs.join(', ')}\n`;
  });

  if (rels.length > 0) {
    task += `🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n`;
    rels.forEach(r => {
      task += `• \`${r.entity1}\` (**${r.mult1 || '1..1'}**) ↔ \`${r.entity2}\` (**${r.mult2 || '1..*'}**)\n`;
    });
  }

  return task.trim();
}

function processWeek1Files() {
  const dir = path.join(__dirname, '..', 'week1', 'data');
  const files = ['eer_clients_1_50.js', 'eer_clients_51_100.js', 'eer_clients_101_150.js'];

  files.forEach(f => {
    const filePath = path.join(dir, f);
    if (!fs.existsSync(filePath)) return;

    const raw = fs.readFileSync(filePath, 'utf8');
    const sandbox = { global: {}, window: {} };
    sandbox.global = sandbox;
    sandbox.window = sandbox;
    vm.createContext(sandbox);
    vm.runInContext(raw, sandbox);

    const varName = Object.keys(sandbox).find(k => k.startsWith('EER_CLIENTS_'));
    const list = sandbox[varName];
    if (!list) return;

    list.forEach(q => {
      q.story = generateW1Story(q);
      q.taskUz = generateW1Task(q);
    });

    const out = `var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);\n\n_scope.${varName} = ${JSON.stringify(list, null, 2)};\n`;
    fs.writeFileSync(filePath, out, 'utf8');
    console.log(`Upgraded Week 1 authentic cases: ${f} (${list.length} questions)`);
  });
}

// ============================================================================
// 2. WEEK 2 AUTHENTIC RELATIONAL MAPPING ENRICHER (Tutorial 2 Standard)
// ============================================================================

function generateW2Story(q) {
  const exp = q.expectedSchema || {};
  const expTables = exp.tables || (exp.tableName ? [exp] : []);
  const refs = exp.references || [];
  const title = q.title || "Relyatsion Xaritalash";

  let story = `**Tutorial 2: Mapping ER / EER Diagram to Relational Schema**\n\n`;
  story += `Yuqoridagi **"Berilgan Konseptual ER / EER Diagrammasi (Manba)"** blokida keltirilgan UML modelini diqqat bilan o'rganing. `;

  if (expTables.length === 1) {
    const t = expTables[0];
    const pk = (t.columns || []).find(c => c.isPK)?.name || 'id';
    story += `Mazkur topshiriqda mustaqil kuchli entitiy (**${t.tableName || t.name}**) berilgan bo'lib, uning birlamchi kaliti \`${pk}\` {PK} hisoblanadi. `;
    story += `Tutorial 2 qoidasiga ko'ra, har bir kuchli entitiy relyatsion modelda alohida jadvalga aylanadi va uning barcha oddiy atributlari jadval ustunlariga o'tkaziladi.`;
  } else if (refs.length > 0) {
    story += `Diagrammada quyidagi entitiylar va ularning munosabatlari aks ettirilgan:\n`;
    expTables.forEach(t => {
      const pks = (t.columns || []).filter(c => c.isPK).map(c => `\`${c.name}\` [PK]`);
      story += `• **${t.tableName || t.name}** jadvali (Birlamchi kaliti: ${pks.join(', ') || 'mavjud'})\n`;
    });
    story += `\n**Aloqalar va Tashqi Kalit (Foreign Key) qoidalari:**\n`;
    refs.forEach(r => {
      story += `• \`${r.fromTable}\` (${r.fromMult || '1..*'}) ↔ \`${r.toTable}\` (${r.toMult || '1..1'}): Tutorial 2 dagi 1:* xaritalash qoidasiga muvofiq, '1' tomondagi \`${r.toTable}\` ning birlamchi kaliti '*' tomondagi \`${r.fromTable}\` jadvaliga Tashqi Kalit [FK] sifatida joylashtiriladi.\n`;
    });
  } else {
    story += `Taqdim etilgan ER/EER model ixtisoslashuv (Subclass/Superclass) yoki alohida mantiqiy bloklarni o'z ichiga oladi. Tutorial 2 dagi Option 8A/8B/8C/8D xaritalash tamoyillaridan foydalanib, to'g'ri relyatsion jadvallar to'plamini tuzing.`;
  }

  return story;
}

function generateW2Task(q) {
  const exp = q.expectedSchema || {};
  const expTables = exp.tables || (exp.tableName ? [exp] : []);
  const refs = exp.references || [];

  let task = `Tepada ko'rsatilgan Manba ER Diagrammasini Tutorial 2 qoidalari asosida relyatsion jadval(lar)ga o'tkazing:\n`;
  task += `1. **Jadvallar va Ustunlar:** Kerakli jadvallarni yarating va ularga barcha talab etilgan ustunlarni qo'shing.\n`;
  task += `2. **Kalitlar [PK] va [FK]:** Har bir jadvalning Birlamchi Kaliti [PK] va bog'lanishlar uchun Tashqi Kalit [FK] larini aniq ko'rsating.\n`;
  task += `3. **Crow's Foot Aloqalari:** Jadvallar o'rtasida to'g'ri kardinallikka ega bo'lgan Crow's Foot bog'lanish chiziqlarini torting.\n\n`;

  task += `📋 **Kutilayotgan Relyatsion Sxema (draw.io / DBML):**\n`;
  expTables.forEach(t => {
    const tName = t.tableName || t.name;
    const cols = (t.columns || []).map(c => {
      const mark = c.isPK ? ' [PK]' : (c.isFK ? ' [FK]' : '');
      const typeStr = c.type ? ` (${c.type})` : '';
      return `\`${c.name}\`${mark}${typeStr}`;
    });
    task += `• Jadval: **${tName}**\n  Ustunlar: ${cols.join(', ')}\n`;
  });

  if (refs.length > 0) {
    task += `🔗 **Tashqi Kalit Bog'lanishlari (Crow's Foot):**\n`;
    refs.forEach(r => {
      task += `• \`${r.fromTable}\` (${r.fromMult || '0..*'}) ↔ \`${r.toTable}\` (${r.toMult || '1..1'})\n`;
    });
  }

  return task.trim();
}

function processWeek2Files() {
  const dir = path.join(__dirname, '..', 'week2', 'data');
  const files = ['questions_1_50.js', 'questions_51_100.js', 'questions_101_150.js'];

  files.forEach(f => {
    const filePath = path.join(dir, f);
    if (!fs.existsSync(filePath)) return;

    const raw = fs.readFileSync(filePath, 'utf8');
    const sandbox = { global: {}, window: {} };
    sandbox.global = sandbox;
    sandbox.window = sandbox;
    vm.createContext(sandbox);
    vm.runInContext(raw, sandbox);

    const varName = Object.keys(sandbox).find(k => k.startsWith('QUESTIONS_'));
    const list = sandbox[varName];
    if (!list) return;

    list.forEach(q => {
      q.story = generateW2Story(q);
      q.taskUz = generateW2Task(q);
    });

    const out = `var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);\n\n_scope.${varName} = ${JSON.stringify(list, null, 2)};\n`;
    fs.writeFileSync(filePath, out, 'utf8');
    console.log(`Upgraded Week 2 authentic mapping cases: ${f} (${list.length} questions)`);
  });
}

console.log("=== UPGRADING W1 & W2 AUTHENTIC CASES (300 QUESTIONS) ===");
processWeek1Files();
processWeek2Files();
console.log("=== COMPLETED ALL 300 QUESTIONS UPGRADE ===");
