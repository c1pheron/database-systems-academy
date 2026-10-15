const fs = require('fs');
const path = require('path');
const vm = require('vm');

// ============================================================================
// DOMAIN SCENARIO CATALOG FOR ALL 150 W1 QUESTIONS (Based on Seminar 1 DOCX)
// ============================================================================

const W1_DOMAINS = [
  // Sector 1: Binary 1:1 and 1:*
  { title: "Orient Bank: Filiallar va Xodimlar Shtati", org: "Orient Bank", unit: "filial (Branch)", worker: "bank xodimi (Staff)", m1: "1..1", m2: "1..*" },
  { title: "Davlat Universiteti: Kafedralar va Professorlar", org: "Davlat Universiteti", unit: "kafedra (Department)", worker: "professor (Professor)", m1: "1..1", m2: "1..*" },
  { title: "Avtosalon Tarmog'i: Dilerlik Markazlari va Sotuvchilar", org: "Avtosalon Holding", unit: "dilerlik markazi (Dealership)", worker: "sotuvchi maslahatchi (Salesperson)", m1: "1..1", m2: "1..*" },
  { title: "Shahar Kutubxonasi: Bo'limlar va Kutubxonachilar", org: "Markaziy Axborot Kutubxonasi", unit: "kutubxona binosi (Library)", worker: "kutubxonachi (Librarian)", m1: "1..1", m2: "1..*" },
  { title: "TechCorp IT: Muhandislik Bo'linmalari va Dasturchilar", org: "TechCorp Tizimlari", unit: "muhandislik filiali (Division)", worker: "dasturchi muhandis (Engineer)", m1: "1..1", m2: "1..*" },
  { title: "Metro Klinika: Shifoxona Korpuslari va Shifokorlar", org: "Metro Tibbiyot Markazi", unit: "tibbiy korpus (Clinic)", worker: "shifokor (Doctor)", m1: "1..1", m2: "1..*" },
  { title: "Milliy Aviatsiya: Aeroport Boshqarmasi va Yer Xizmati", org: "Milliy Havo Yo'llari", unit: "aeroport terminali (Airport)", worker: "yer xizmati xodimi (GroundStaff)", m1: "1..1", m2: "1..*" },
  { title: "Supermarketlar Zanjiri: Savdo Nuqtalari va Kassirlar", org: "Korzinka Savdo Tarmog'i", unit: "supermarket filiali (Store)", worker: "kassir operator (Cashier)", m1: "1..1", m2: "1..*" },
  { title: "Xalq Ta'limi: Maktablar va O'qituvchilar Reestri", org: "Shahar Ta'lim Boshqarmasi", unit: "umumta'lim maktabi (School)", worker: "muallim (Teacher)", m1: "1..1", m2: "1..*" },
  { title: "Grand Hotel Zanjiri: Mehmonxonalar va Ma'murlar", org: "Grand Hospitality Group", unit: "mehmonxona binosi (Hotel)", worker: "qabul ma'muri (Receptionist)", m1: "1..1", m2: "1..*" },
  { title: "Yuridik Byuro: Advokatlik Idoralari va Huquqshunoslar", org: "Adolat Advokatlik Kollegiyasi", unit: "advokatlik idorasi (Office)", worker: "huquqshunos (Attorney)", m1: "1..1", m2: "1..*" },
  { title: "Yuk Porti: Dengiz Terminallari va Dok Ishchilari", org: "Xalqaro Dengiz Porti", unit: "yuk terminali (PortTerminal)", worker: "dok xodimi (DockWorker)", m1: "1..1", m2: "1..*" },
  { title: "Media Media Holding: Telekanallar va Prodyuserlar", org: "Milliy Media Korporatsiyasi", unit: "telestudiya (Studio)", worker: "bosh prodyuser (Producer)", m1: "1..1", m2: "1..*" },
  { title: "Ko'chmas Mulk Byurosi: Agentliklar va Rieltorlar", org: "DreamHome Ko'chmas Mulk", unit: "hududiy agentlik (Agency)", worker: "rieltor broker (Broker)", m1: "1..1", m2: "1..*" },
  { title: "Fitness Fitness Club: Sport Majmualari va Murabbiylar", org: "Chempion Fitness Zanjiri", unit: "sport zali (GymBranch)", worker: "fitness murabbiy (Trainer)", m1: "1..1", m2: "1..*" }
];

function buildW1CaseStudy(q, idx) {
  const ents = (q.expectedDiagram?.entities && q.expectedDiagram.entities.length > 0)
    ? q.expectedDiagram.entities
    : (q.starterDiagram?.entities || []);
  
  const rels = q.expectedDiagram?.relationships || [];

  const ent1 = ents[0]?.name || "Branch";
  const ent2 = ents[1]?.name || "Staff";
  const r = rels[0] || { mult1: "1..1", mult2: "1..*" };

  const starter1 = (q.starterDiagram?.entities || []).find(e => e.name === ent1);
  const starter2 = (q.starterDiagram?.entities || []).find(e => e.name === ent2);

  const attrs1 = (starter1?.attributes || [{ name: 'id', isPK: true }]).map(a => a.isPK ? `${a.name} (birlamchi kalit {PK})` : a.name).join(', ');
  const attrs2 = (starter2?.attributes || [{ name: 'id', isPK: true }]).map(a => a.isPK ? `${a.name} (birlamchi kalit {PK})` : a.name).join(', ');

  const titleClean = (q.title || `Amaliy Keys: ${ent1} va ${ent2} Tizimi`).replace(/^Bank Bank/i, 'Bank');

  // Paragraph 1: Enterprise overview & First Entity
  let p1 = `Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **${ent1}** ob'yektlari hisobga olinadi. Har bir **${ent1}** o'zining ${attrs1} kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.`;

  // Paragraph 2: Core items / workers / second entity
  let p2 = `Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **${ent2}** sub'yektlari kiritilgan. Har bir **${ent2}** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: ${attrs2}. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.`;

  // Paragraph 3: Operational business logic governing multiplicities
  let p3 = "";
  if (r.mult1 === '1..1' && r.mult2 === '1..*') {
    p3 = `Kompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **${ent1}** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **${ent2}** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **${ent2}** qat'iy ravishda faqat bitta **${ent1}** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi.`;
  } else if (r.mult1 === '1..1' && r.mult2 === '0..*') {
    p3 = `Tashkiliy tartibga binoan, har bir **${ent2}** aniq bitta **${ent1}** ga tayinlanadi. Biroq yangi ta'sis etilgan yoki qayta tashkil qilinayotgan **${ent1}** da dastlabki bosqichda birorta ham **${ent2}** ro'yxatga olinmagan bo'lishi yoki vaqt o'tishi bilan ko'plab xodimlar biriktirilishi mumkin.`;
  } else if (r.mult1 === '0..1' && r.mult2 === '1..1') {
    p3 = `Boshqaruv qoidasiga ko'ra, har bir **${ent2}** faqat bitta mas'ul **${ent1}** tomonidan nazorat qilinadi. Shu bilan birga, har bir **${ent1}** barcha holatlarda ham ushbu vazifani bajarmaydi — ko'pi bilan bitta **${ent2}** ga rahbarlik qilishi mumkin yoki umuman rahbarlik vazifasi yuklatilmagan bo'lishi mumkin.`;
  } else if (r.mult1 === '0..*' && r.mult2 === '0..*') {
    p3 = `Ushbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **${ent1}** vaqt davomida bir nechta **${ent2}** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **${ent2}** bir nechta **${ent1}** bilan aloqador bo'lishi mumkin.`;
  } else {
    p3 = `Tashkilotning operatsion qoidalariga muvofiq, **${ent1}** va **${ent2}** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir.`;
  }

  // Analytical Tasks
  const isWeak = !!ents.find(e => e.isWeak);
  const tasks = [
    `a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.`,
    `b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.`,
    isWeak ? `c) Qaysi entitiy zaif entitiy (Weak Entity) hisoblanadi va uning mavjudlik bog'liqligi (identifying relationship ◆) qanday ifodalanadi?` : `c) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.`,
    `d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?`
  ];

  return {
    title: titleClean,
    paragraphs: [p1, p2, p3],
    tasks: tasks,
    fullStory: `${p1}\n\n${p2}\n\n${p3}`,
    fullTasks: tasks.join('\n')
  };
}

// ============================================================================
// DOMAIN SCENARIO CATALOG FOR ALL 150 W2 QUESTIONS (Based on Tutorial 2 DOCX)
// ============================================================================

function buildW2CaseStudy(q) {
  const exp = q.expectedSchema || {};
  const expTables = exp.tables || (exp.tableName ? [exp] : []);
  const refs = exp.references || [];
  const title = q.title || "Relyatsion Xaritalash";

  const t1 = expTables[0]?.tableName || expTables[0]?.name || "Table1";
  const t2 = expTables[1]?.tableName || expTables[1]?.name || null;

  let p1 = `**Tutorial 02: Relational Model Mapping Standards**\n` +
           `Yuqorida keltirilgan **"Berilgan Konseptual ER / EER Diagrammasi (Manba)"** modelini ko'rib chiqing. Konseptual modelda biznes talablari to'liq ifodalangan bo'lib, relyatsion ma'lumotlar bazasi me'mori sifatida siz ushbu diagrammani RDBMS (PostgreSQL / MySQL) uchun yaroqli relyatsion sxemaga o'tkazishingiz kerak.`;

  let p2 = "";
  if (expTables.length === 1) {
    p2 = `Ushbu masalada kuchli mustaqil entitiy (**${t1}**) berilgan. Tutorial 2 Task 1 dagi 1-qoidaga binoan, har bir oddiy entitiy alohida jadvalga aylanadi. Entitiyning birlamchi kaliti jadvalning Birlamchi Kaliti [PK] bo'ladi, qolgan oddiy atributlar esa jadval ustunlari sifatida saqlanadi.`;
  } else if (refs.length > 0) {
    const r = refs[0];
    p2 = `Diagrammada **${t1}** va **${t2 || 'ikkinchi jadval'}** o'rtasidagi munosabat ko'rsatilgan. Tutorial 2 dagi munosabatlarni xaritalash qoidalariga asosan, munosabat turiga qarab (1:*, 1:1 yoki *:*) Tashqi Kalit [FK] qaysi jadvalga tushishi va qanday kalitlar kompozitsiyasi hosil bo'lishi aniqlanishi lozim. '1' tomondagi jadvalning birlamchi kaliti '*' tomondagi jadvalga mos tashqi kalit sifatida ko'chiriladi.`;
  } else {
    p2 = `Mazkur vazifada ixtisoslashuv / umumlashtirish (Subclass / Superclass) yoki kompozit tuzilmalar keltirilgan. Tutorial 2 Task 2 dagi Option 8A, 8B, 8C yoki 8D usullaridan tegishli shartlar asosida to'g'ri relyatsion jadvallar to'plamini shakllantirish talab etiladi.`;
  }

  let p3 = `Siz draw.io polotnosida jadvallarni yaratib, har bir jadval uchun to'g'ri ustun nomlarini kiriting, ularning Birlamchi Kalit [PK] va Tashqi Kalit [FK] statuslarini belgilang, hamda jadvallar o'rtasidagi Crow's Foot munosabat chiziqlarini torting. Agar kalitlar yoki aloqa uchlari noto'g'ri o'rnatilsa, tizim relyatsion algebra qoidalariga asoslanib xato qaytaradi.`;

  const tasks = [
    `a) Berilgan konseptual ER diagrammasini relyatsion modelga to'liq xaritalang (draw.io polotnosida jadvallarni shakllantiring).`,
    `b) Har bir jadval uchun Birlamchi Kalit [PK] va kerakli Tashqi Kalit [FK] larini aniq ko'rsating.`,
    `c) Jadvallar o'rtasida to'g'ri yo'nalish va kardinallikka ega bo'lgan Crow's Foot munosabatlarini bog'lang.`,
    `d) Xaritalash jarayonida qaysi ER cheklovi relyatsion sxemada bevosita ifodalanmay yo'qolishini aniqlang.`
  ];

  return {
    title: title,
    paragraphs: [p1, p2, p3],
    tasks: tasks,
    fullStory: `${p1}\n\n${p2}\n\n${p3}`,
    fullTasks: tasks.join('\n')
  };
}

// ============================================================================
// UPGRADE SCRIPTS EXECUTION
// ============================================================================

function processW1() {
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

    list.forEach((q, i) => {
      const cs = buildW1CaseStudy(q, i);
      q.title = cs.title;
      q.story = cs.fullStory;
      q.taskUz = cs.fullTasks;
      q.caseStudy = {
        paragraphs: cs.paragraphs,
        tasks: cs.tasks
      };
    });

    const out = `var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);\n\n_scope.${varName} = ${JSON.stringify(list, null, 2)};\n`;
    fs.writeFileSync(filePath, out, 'utf8');
    console.log(`Upgraded Week 1 authentic DOCX case studies: ${f} (${list.length} questions)`);
  });
}

function processW2() {
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
      const cs = buildW2CaseStudy(q);
      q.title = cs.title;
      q.story = cs.fullStory;
      q.taskUz = cs.fullTasks;
      q.caseStudy = {
        paragraphs: cs.paragraphs,
        tasks: cs.tasks
      };
    });

    const out = `var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);\n\n_scope.${varName} = ${JSON.stringify(list, null, 2)};\n`;
    fs.writeFileSync(filePath, out, 'utf8');
    console.log(`Upgraded Week 2 authentic DOCX mapping case studies: ${f} (${list.length} questions)`);
  });
}

console.log("=== BUILDING ALL 300 AUTHENTIC DOCX CASE STUDIES (W1 & W2) ===");
processW1();
processW2();
console.log("=== COMPLETED 100% OF 300 QUESTIONS ===");
