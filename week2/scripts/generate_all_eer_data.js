// ============================================================================
// GENERATOR: 150 CONCEPTUAL EER CASE STUDIES FOR ACADEMY MODULE
// Generates:
//   data/eer_clients_1_50.js
//   data/eer_clients_51_100.js
//   data/eer_clients_101_150.js
// ============================================================================

const fs = require('fs');
const path = require('path');

// Helper to format JS file output
function saveQuestionFile(filePath, varName, questions) {
  const content = `// ============================================================================
// ACADEMY DATABASE SYSTEMS (MODULE) — EER CLIENT CASE STUDIES
// Variable: ${varName} (${questions.length} Questions)
// ============================================================================

var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);

_scope.${varName} = ${JSON.stringify(questions, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = _scope.${varName};
}
`;
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Saved ${questions.length} questions to ${filePath}`);
}

// ----------------------------------------------------------------------------
// LOAD EXISTING QUESTIONS 1-18, 25, 30, 31, 32, 35, 45, 46, 50
// ----------------------------------------------------------------------------
const existing1_50 = require('../data/eer_clients_1_50.js');
const existingMap = {};
existing1_50.forEach(q => { existingMap[q.id] = q; });

// ----------------------------------------------------------------------------
// BUILD QUESTIONS 1 TO 50
// ----------------------------------------------------------------------------
const list1_50 = [];

// Questions 1 to 15 (Sector 1)
for (let id = 1; id <= 15; id++) {
  if (existingMap[id]) {
    list1_50.push(existingMap[id]);
  }
}

// Questions 16 to 30 (Sector 2: Multiplicity 0..1, 1..1, 0..*, 1..*)
const s2Def = [
  { id: 16, exist: true },
  { id: 17, exist: true },
  { id: 18, exist: true },
  {
    id: 19,
    sector: 2,
    difficulty: "2-Qavat • O'rta",
    clientName: "Nargiza Yo'ldosheva",
    clientRole: "IT Akademiya Kurs Menejeri",
    clientAvatar: "academic",
    title: "O'quvchi va Sertifikat (0..1 Ixtiyoriy)",
    story: "Akademiyamizda har bir sertifikat (Certificate) bitirgan 1 ta o'quvchiga (Student) beriladi (1..1). Lekin har bir o'quvchi ham kursni yakunlab sertifikat ololmasligi mumkin (0..1).",
    taskUz: "'Student' (studentId {PK}) va 'Certificate' (certId {PK}) ni bog'lang: Student tomonga '1..1', Certificate tomonga '0..1'.",
    starterDiagram: {
      entities: [
        { name: "Student", x: 120, y: 150, attributes: [{ name: "studentId", isPK: true }, { name: "name" }] },
        { name: "Certificate", x: 480, y: 150, attributes: [{ name: "certId", isPK: true }, { name: "issueDate" }] }
      ],
      relationships: []
    },
    expectedDiagram: {
      entities: [{ name: "Student", pk: "studentId" }, { name: "Certificate", pk: "certId" }],
      relationships: [{ entity1: "Student", entity2: "Certificate", mult1: "1..1", mult2: "0..1" }]
    },
    hint: "Certificate tomonga '0..1' qo'yiladi.",
    explanation: "Student va ixtiyoriy Certificate (0..1) chegarasi to'g'ri o'rnatildi."
  },
  {
    id: 20,
    sector: 2,
    difficulty: "2-Qavat • O'rta",
    clientName: "Farhod Karimov",
    clientRole: "Kutubxona Tizimi Muhandisi",
    clientAvatar: "librarian",
    title: "Kitobxon va Jarimalar (0..* Ixtiyoriy)",
    story: "Kutubxonamizda a'zo kitobxon (Member) va jarima cheklari (Fine) mavjud. Har bir jarima aniq 1 ta a'zoga yoziladi (1..1). Lekin intizomli a'zoda umuman jarima bo'lmasligi mumkin (0..*).",
    taskUz: "'Member' va 'Fine' ni bog'lang: Member (1..1), Fine (0..*).",
    starterDiagram: {
      entities: [
        { name: "Member", x: 120, y: 150, attributes: [{ name: "memberId", isPK: true }, { name: "name" }] },
        { name: "Fine", x: 480, y: 150, attributes: [{ name: "fineId", isPK: true }, { name: "amount" }] }
      ],
      relationships: []
    },
    expectedDiagram: {
      entities: [{ name: "Member", pk: "memberId" }, { name: "Fine", pk: "fineId" }],
      relationships: [{ entity1: "Member", entity2: "Fine", mult1: "1..1", mult2: "0..*" }]
    },
    hint: "Member (1..1) va Fine (0..*).",
    explanation: "Kitobxon va ixtiyoriy jarimalar (0..*) modeli qabul qilindi."
  },
  {
    id: 21,
    sector: 2,
    difficulty: "2-Qavat • O'rta",
    clientName: "Sevara Normatova",
    clientRole: "Klinika Ro'yxatga Olish Bo'limi",
    clientAvatar: "doctor",
    title: "Bemor va Retseptlar (0..*)",
    story: "Klinikamizda har bir dori retsepti (Prescription) 1 ta bemorga (Patient) tegishli (1..1). Sog'lom profilaktikaga kelgan bemorga esa dori yozilmasligi mumkin (0..*).",
    taskUz: "'Patient' (patientId {PK}) va 'Prescription' (rxNo {PK}) ni bog'lang: Patient (1..1), Prescription (0..*).",
    starterDiagram: {
      entities: [
        { name: "Patient", x: 120, y: 150, attributes: [{ name: "patientId", isPK: true }, { name: "name" }] },
        { name: "Prescription", x: 480, y: 150, attributes: [{ name: "rxNo", isPK: true }, { name: "date" }] }
      ],
      relationships: []
    },
    expectedDiagram: {
      entities: [{ name: "Patient", pk: "patientId" }, { name: "Prescription", pk: "rxNo" }],
      relationships: [{ entity1: "Patient", entity2: "Prescription", mult1: "1..1", mult2: "0..*" }]
    },
    hint: "Prescription tomonga 0..*, Patient tomonga 1..1.",
    explanation: "Bemor va retseptlar o'rtasidagi ixtiyoriy 0..* munosabat to'g'ri loyihalandi."
  },
  {
    id: 22,
    sector: 2,
    difficulty: "2-Qavat • O'rta",
    clientName: "Akmal Rahmonov",
    clientRole: "Uy-joy Agentligi Rielteri",
    clientAvatar: "broker",
    title: "Mulk Egasi va Kvartiralar (1..*)",
    story: "Agentligimizda ro'yxatdan o'tgan har bir mulk egasi (Owner) kamida 1 ta yoki bir nechta kvartiraga (Property) ega bo'lishi shart (1..*). Har bir kvartira esa 1 ta egaga qarashli (1..1).",
    taskUz: "'Owner' va 'Property' ni majburiy 1:* bilan bog'lang: Owner (1..1), Property (1..*).",
    starterDiagram: {
      entities: [
        { name: "Owner", x: 120, y: 150, attributes: [{ name: "ownerNo", isPK: true }, { name: "name" }] },
        { name: "Property", x: 480, y: 150, attributes: [{ name: "propNo", isPK: true }, { name: "address" }] }
      ],
      relationships: []
    },
    expectedDiagram: {
      entities: [{ name: "Owner", pk: "ownerNo" }, { name: "Property", pk: "propNo" }],
      relationships: [{ entity1: "Owner", entity2: "Property", mult1: "1..1", mult2: "1..*" }]
    },
    hint: "Ikkala tomonda ham minimal chegarasi 1 (majburiy): 1..1 va 1..*.",
    explanation: "Majburiy ishtirok (Mandatory participation) 1..* muvaffaqiyatli chizildi."
  },
  {
    id: 23,
    sector: 2,
    difficulty: "2-Qavat • O'rta",
    clientName: "Jamshid Tursunov",
    clientRole: "Restoranlar Tarmog'i Bosh Oshpazi",
    clientAvatar: "chef",
    title: "Taom va Retsept Masalliqlari (1..*)",
    story: "Menyumizdagi har bir taom (Dish) kamida 1 ta yoki undan ko'p tarkibiy masalliqqa (Ingredient) ega bo'lishi shart (1..*). Har bir masalliq esa menyudagi 1 ta asosiy retseptga tegishli (1..1).",
    taskUz: "'Dish' va 'Ingredient' ni bog'lang: Dish (1..1), Ingredient (1..*).",
    starterDiagram: {
      entities: [
        { name: "Dish", x: 120, y: 150, attributes: [{ name: "dishId", isPK: true }, { name: "title" }] },
        { name: "Ingredient", x: 480, y: 150, attributes: [{ name: "ingId", isPK: true }, { name: "name" }] }
      ],
      relationships: []
    },
    expectedDiagram: {
      entities: [{ name: "Dish", pk: "dishId" }, { name: "Ingredient", pk: "ingId" }],
      relationships: [{ entity1: "Dish", entity2: "Ingredient", mult1: "1..1", mult2: "1..*" }]
    },
    hint: "Dish (1..1), Ingredient (1..*).",
    explanation: "Taom va masalliqlar majburiy munosabati o'rnatildi."
  },
  {
    id: 24,
    sector: 2,
    difficulty: "2-Qavat • O'rta",
    clientName: "Malika Zufarova",
    clientRole: "Mobil Aloqa Kompaniyasi Billing Mutaxassisi",
    clientAvatar: "telecom",
    title: "Abonent va SIM-karta (0..1 Ixtiyoriy)",
    story: "Har bir SIM-karta (SIMCard) 1 ta abonentga (Subscriber) biriktirilgan (1..1). Yangi shartnoma tuzgan abonentga esa hali SIM berilmagan bo'lishi mumkin (0..1).",
    taskUz: "'Subscriber' va 'SIMCard' ni bog'lang: Subscriber (1..1), SIMCard (0..1).",
    starterDiagram: {
      entities: [
        { name: "Subscriber", x: 120, y: 150, attributes: [{ name: "subId", isPK: true }, { name: "name" }] },
        { name: "SIMCard", x: 480, y: 150, attributes: [{ name: "iccid", isPK: true }, { name: "msisdn" }] }
      ],
      relationships: []
    },
    expectedDiagram: {
      entities: [{ name: "Subscriber", pk: "subId" }, { name: "SIMCard", pk: "iccid" }],
      relationships: [{ entity1: "Subscriber", entity2: "SIMCard", mult1: "1..1", mult2: "0..1" }]
    },
    hint: "SIMCard tomonga 0..1 qo'yiladi.",
    explanation: "Abonent va SIM-karta 0..1 ixtiyoriyligi to'g'ri aks etdi."
  },
  { id: 25, exist: true },
  {
    id: 26,
    sector: 2,
    difficulty: "2-Qavat • O'rta",
    clientName: "G'ayrat Ergashev",
    clientRole: "Yuk Tashish Kompaniyasi Dispetcheri",
    clientAvatar: "logistics",
    title: "Konteyner va Yuk Jo'natmasi (0..1)",
    story: "Logistika parkimizda konteyner (Container) va jo'natma (Shipment) mavjud. Har bir yuk 1 ta konteynerga yuklanadi (1..1). Zaxiradagi bo'sh konteyner esa yuklanmagan bo'lishi mumkin (0..1).",
    taskUz: "'Shipment' va 'Container' ni bog'lang: Shipment (1..1), Container (0..1).",
    starterDiagram: {
      entities: [
        { name: "Shipment", x: 120, y: 150, attributes: [{ name: "shipmentId", isPK: true }, { name: "weight" }] },
        { name: "Container", x: 480, y: 150, attributes: [{ name: "containerNo", isPK: true }, { name: "capacity" }] }
      ],
      relationships: []
    },
    expectedDiagram: {
      entities: [{ name: "Shipment", pk: "shipmentId" }, { name: "Container", pk: "containerNo" }],
      relationships: [{ entity1: "Shipment", entity2: "Container", mult1: "1..1", mult2: "0..1" }]
    },
    hint: "Shipment (1..1), Container (0..1).",
    explanation: "Konteyner ixtiyoriy 0..1 modeli tasdiqlandi."
  },
  {
    id: 27,
    sector: 2,
    difficulty: "2-Qavat • O'rta",
    clientName: "Zokir Usmonov",
    clientRole: "Kredit Byurosi Rahbari",
    clientAvatar: "banker",
    title: "Mijoz va Garov Mulki (0..*)",
    story: "Bankimizda har bir garov mulki (Collateral) 1 ta mijozga (Client) tegishli (1..1). Lekin oddiy mikroqarz olgan mijoz garov qo'ymasligi mumkin (0..*).",
    taskUz: "'Client' va 'Collateral' ni bog'lang: Client (1..1), Collateral (0..*).",
    starterDiagram: {
      entities: [
        { name: "Client", x: 120, y: 150, attributes: [{ name: "clientId", isPK: true }, { name: "name" }] },
        { name: "Collateral", x: 480, y: 150, attributes: [{ name: "collateralId", isPK: true }, { name: "appraisedValue" }] }
      ],
      relationships: []
    },
    expectedDiagram: {
      entities: [{ name: "Client", pk: "clientId" }, { name: "Collateral", pk: "collateralId" }],
      relationships: [{ entity1: "Client", entity2: "Collateral", mult1: "1..1", mult2: "0..*" }]
    },
    hint: "Collateral tomonga 0..*, Client tomonga 1..1.",
    explanation: "Garov mulki ixtiyoriyligi (0..*) to'g'ri belgilandi."
  },
  {
    id: 28,
    sector: 2,
    difficulty: "2-Qavat • O'rta",
    clientName: "Shoira Valiyeva",
    clientRole: "Farmatsevtika Ombori Mudiri",
    clientAvatar: "pharmacist",
    title: "Dori Partiyasi va Sifat Sertifikati (1..1 Majburiy)",
    story: "Omborimizda har bir dori partiyasi (MedicineBatch) majburiy ravishda aniq 1 ta sifat sertifikatiga (QualityCert) ega (1..1) va har bir sertifikat 1 ta partiyaga beriladi (1..1).",
    taskUz: "'MedicineBatch' va 'QualityCert' ni ikkala tomonga '1..1' qo'yib bog'lang.",
    starterDiagram: {
      entities: [
        { name: "MedicineBatch", x: 120, y: 150, attributes: [{ name: "batchNo", isPK: true }, { name: "mfgDate" }] },
        { name: "QualityCert", x: 480, y: 150, attributes: [{ name: "certNo", isPK: true }, { name: "labResult" }] }
      ],
      relationships: []
    },
    expectedDiagram: {
      entities: [{ name: "MedicineBatch", pk: "batchNo" }, { name: "QualityCert", pk: "certNo" }],
      relationships: [{ entity1: "MedicineBatch", entity2: "QualityCert", mult1: "1..1", mult2: "1..1" }]
    },
    hint: "Ikkala tomonda ham 1..1 majburiy chegarasi bo'ladi.",
    explanation: "Ikki tomonlama majburiy 1:1 sifat nazorati modeli chizildi."
  },
  {
    id: 29,
    sector: 2,
    difficulty: "2-Qavat • O'rta",
    clientName: "Rustam Mirzayev",
    clientRole: "Avtoturargoh Kompleksi Boshqaruvchisi",
    clientAvatar: "parking",
    title: "Mashina va Avtoturargoh Joyi (0..1)",
    story: "Biznes markazimizda har bir band turargoh joyi (ParkingSpot) 1 ta ro'yxatdagi avtomobilga (Car) tegishli (1..1). Lekin mashina ko'chada yurgan paytda turargohda joy egallamasligi mumkin (0..1).",
    taskUz: "'Car' va 'ParkingSpot' ni bog'lang: Car (1..1), ParkingSpot (0..1).",
    starterDiagram: {
      entities: [
        { name: "Car", x: 120, y: 150, attributes: [{ name: "plateNo", isPK: true }, { name: "model" }] },
        { name: "ParkingSpot", x: 480, y: 150, attributes: [{ name: "slotNo", isPK: true }, { name: "floor" }] }
      ],
      relationships: []
    },
    expectedDiagram: {
      entities: [{ name: "Car", pk: "plateNo" }, { name: "ParkingSpot", pk: "slotNo" }],
      relationships: [{ entity1: "Car", entity2: "ParkingSpot", mult1: "1..1", mult2: "0..1" }]
    },
    hint: "ParkingSpot tomonga 0..1, Car tomonga 1..1.",
    explanation: "Turargoh joyi 0..1 ixtiyoriyligi o'rnatildi."
  },
  { id: 30, exist: true }
];

s2Def.forEach(item => {
  if (item.exist) list1_50.push(existingMap[item.id]);
  else list1_50.push(item);
});

// Questions 31 to 45 (Sector 3: Weak Entities & {PPK})
const s3Def = [
  { id: 31, exist: true },
  { id: 32, exist: true },
  {
    id: 33,
    sector: 3,
    difficulty: "3-Qavat • O'rta",
    clientName: "Bobur Hakimov",
    clientRole: "IT Loyihalar Menejeri",
    clientAvatar: "techpm",
    title: "Loyiha va Bosqichlar (Milestone Weak Entity)",
    story: "Kompaniyamizda har bir loyiha (Project) bir nechta oraliq bosqichlarga (Milestone) ega. Milestone loyihasiz mustaqil mavjud bo'lmaydi (Zaif Entitiy). Uning qisman kaliti {PPK} bosqich tartib raqami (milestoneNo). Har bir loyiha 1 tadan ko'p bosqichga ega (1..*), bosqich esa aniq 1 ta loyihaga qarashli (1..1).",
    taskUz: "'Project' (projId {PK}) va Zaif entitiy 'Milestone' (isWeak: true) ni bog'lang: Project (1..1), Milestone (1..*).",
    starterDiagram: {
      entities: [
        { name: "Project", x: 120, y: 150, attributes: [{ name: "projId", isPK: true }, { name: "title" }] },
        { name: "Milestone", isWeak: true, x: 480, y: 150, attributes: [{ name: "milestoneNo", isPPK: true }, { name: "targetDate" }] }
      ],
      relationships: []
    },
    expectedDiagram: {
      entities: [{ name: "Project", pk: "projId" }, { name: "Milestone", isWeak: true }],
      relationships: [{ entity1: "Project", entity2: "Milestone", mult1: "1..1", mult2: "1..*" }]
    },
    hint: "Milestone zaif entitiy (isWeak: true) sifatida Project (1..1) ga ulanadi.",
    explanation: "Loyiha va uning zaif bosqichlari munosabati to'g'ri chizildi."
  },
  {
    id: 34,
    sector: 3,
    difficulty: "3-Qavat • O'rta",
    clientName: "Nilufar Qosimova",
    clientRole: "Sug'urta Da'volari Boshqarmasi",
    clientAvatar: "insurance",
    title: "Sug'urta Polisi va Zarar Da'volari (Claim Weak Entity)",
    story: "Sug'urta kompaniyamizda har bir polis (Policy) bo'yicha zarar da'volari (Claim) tushadi. Da'vo polissiz mavjud bo'la olmaydi (Zaif Entitiy). Qisman kalit {PPK} da'vo ketma-ket raqami (claimSeq). Polis 0 tadan ko'pgacha da'voga ega (0..*), da'vo esa 1 ta polisga tegishli (1..1).",
    taskUz: "'Policy' (policyNo {PK}) va Zaif entitiy 'Claim' (isWeak: true) ni bog'lang: Policy (1..1), Claim (0..*).",
    starterDiagram: {
      entities: [
        { name: "Policy", x: 120, y: 150, attributes: [{ name: "policyNo", isPK: true }, { name: "holder" }] },
        { name: "Claim", isWeak: true, x: 480, y: 150, attributes: [{ name: "claimSeq", isPPK: true }, { name: "amount" }] }
      ],
      relationships: []
    },
    expectedDiagram: {
      entities: [{ name: "Policy", pk: "policyNo" }, { name: "Claim", isWeak: true }],
      relationships: [{ entity1: "Policy", entity2: "Claim", mult1: "1..1", mult2: "0..*" }]
    },
    hint: "Claim zaif entitiya va Policy ga 0..* bilan ulanadi.",
    explanation: "Polis va zaif Claim modeli to'liq o'rnatildi."
  },
  { id: 35, exist: true },
  {
    id: 36,
    sector: 3,
    difficulty: "3-Qavat • O'rta",
    clientName: "Otabek Ergashev",
    clientRole: "Shifoxona Bosh Vrachi",
    clientAvatar: "doctor",
    title: "Palata va Karavotlar (Bed Weak Entity)",
    story: "Shifoxonamizda palatalar (Ward) va karavotlar (Bed) mavjud. Karavot faqat shu palata ichida raqamlanadi (Zaif Entitiy, {PPK} bedNo). Palata 1 tadan ko'p karavotga ega (1..*), karavot esa bitta palataga tegishli (1..1).",
    taskUz: "'Ward' (wardNo {PK}) va Zaif entitiy 'Bed' (isWeak: true) ni bog'lang: Ward (1..1), Bed (1..*).",
    starterDiagram: {
      entities: [
        { name: "Ward", x: 120, y: 150, attributes: [{ name: "wardNo", isPK: true }, { name: "dept" }] },
        { name: "Bed", isWeak: true, x: 480, y: 150, attributes: [{ name: "bedNo", isPPK: true }, { name: "type" }] }
      ],
      relationships: []
    },
    expectedDiagram: {
      entities: [{ name: "Ward", pk: "wardNo" }, { name: "Bed", isWeak: true }],
      relationships: [{ entity1: "Ward", entity2: "Bed", mult1: "1..1", mult2: "1..*" }]
    },
    hint: "Bed (isWeak: true) Ward ga 1..* bilan bog'lanadi.",
    explanation: "Palata va karavot zaif munosabati to'g'ri shakllantirildi."
  },
  {
    id: 37,
    sector: 3,
    difficulty: "3-Qavat • O'rta",
    clientName: "Lobar Sayfullayeva",
    clientRole: "O'quv Nashriyoti Tahririyati",
    clientAvatar: "publisher",
    title: "Kitob va Boblar (Chapter Weak Entity)",
    story: "Nashriyotimizda kitob (Book) va uning boblari (Chapter) bor. Bob kitobsiz yashay olmaydi (Zaif Entitiy). Uning qisman kaliti {PPK} bob tartib raqami (chapterNo). Kitob 1..* bobga ega, bob esa 1..1 kitobga tegishli.",
    taskUz: "'Book' (isbn {PK}) va Zaif entitiy 'Chapter' (isWeak: true) ni bog'lang: Book (1..1), Chapter (1..*).",
    starterDiagram: {
      entities: [
        { name: "Book", x: 120, y: 150, attributes: [{ name: "isbn", isPK: true }, { name: "title" }] },
        { name: "Chapter", isWeak: true, x: 480, y: 150, attributes: [{ name: "chapterNo", isPPK: true }, { name: "title" }] }
      ],
      relationships: []
    },
    expectedDiagram: {
      entities: [{ name: "Book", pk: "isbn" }, { name: "Chapter", isWeak: true }],
      relationships: [{ entity1: "Book", entity2: "Chapter", mult1: "1..1", mult2: "1..*" }]
    },
    hint: "Chapter zaif entitiy bo'lib Book ga 1..* ulanadi.",
    explanation: "Kitob va boblar zaif EER modeli qabul qilindi."
  },
  {
    id: 38,
    sector: 3,
    difficulty: "3-Qavat • O'rta",
    clientName: "Jahongir To'xtayev",
    clientRole: "Aviakompaniya Muhandisi",
    clientAvatar: "airline",
    title: "Parvoz va Reys Segmentlari (FlightLeg Weak Entity)",
    story: "Aviakompaniyada asosiy parvoz (Flight) bir nechta oraliq uchish qismlaridan (FlightLeg) iborat bo'lishi mumkin (Zaif Entitiy, {PPK} legNo). Parvoz 1..* segmentga ega, segment esa 1..1 parvozga qarashli.",
    taskUz: "'Flight' (flightNo {PK}) va Zaif entitiy 'FlightLeg' (isWeak: true) ni bog'lang: Flight (1..1), FlightLeg (1..*).",
    starterDiagram: {
      entities: [
        { name: "Flight", x: 120, y: 150, attributes: [{ name: "flightNo", isPK: true }, { name: "airline" }] },
        { name: "FlightLeg", isWeak: true, x: 480, y: 150, attributes: [{ name: "legNo", isPPK: true }, { name: "depTime" }] }
      ],
      relationships: []
    },
    expectedDiagram: {
      entities: [{ name: "Flight", pk: "flightNo" }, { name: "FlightLeg", isWeak: true }],
      relationships: [{ entity1: "Flight", entity2: "FlightLeg", mult1: "1..1", mult2: "1..*" }]
    },
    hint: "FlightLeg (isWeak: true) Flight ga bog'lanadi.",
    explanation: "Parvoz segmenti zaif entitiya sifatida muvaffaqiyatli chizildi."
  },
  {
    id: 39,
    sector: 3,
    difficulty: "3-Qavat • O'rta",
    clientName: "Doniyor Ziyoyev",
    clientRole: "Dasturiy Mahsulot Arxitektori",
    clientAvatar: "techpm",
    title: "Dasturiy Paket va Modullar (Module Weak Entity)",
    story: "Dasturimiz (SoftwarePackage) bir nechta modullardan (Module) iborat. Modul dastursiz mavjud emas (Zaif Entitiy, {PPK} modCode). Paket 1..* modulga ega, modul esa 1..1 paketga tegishli.",
    taskUz: "'SoftwarePackage' va Zaif entitiy 'Module' (isWeak: true) ni bog'lang: SoftwarePackage (1..1), Module (1..*).",
    starterDiagram: {
      entities: [
        { name: "SoftwarePackage", x: 120, y: 150, attributes: [{ name: "pkgId", isPK: true }, { name: "name" }] },
        { name: "Module", isWeak: true, x: 480, y: 150, attributes: [{ name: "modCode", isPPK: true }, { name: "version" }] }
      ],
      relationships: []
    },
    expectedDiagram: {
      entities: [{ name: "SoftwarePackage", pk: "pkgId" }, { name: "Module", isWeak: true }],
      relationships: [{ entity1: "SoftwarePackage", entity2: "Module", mult1: "1..1", mult2: "1..*" }]
    },
    hint: "Module (isWeak: true) SoftwarePackage ga ulanadi.",
    explanation: "Dasturiy paket va uning zaif modullari modeli tasdiqlandi."
  },
  {
    id: 40,
    sector: 3,
    difficulty: "3-Qavat • O'rta",
    clientName: "Gulzoda Islomova",
    clientRole: "Teatr Bosh Ma'muri",
    clientAvatar: "arts",
    title: "Teatr Zali va Qatorlar (SeatRow Weak Entity)",
    story: "Teatrimizda tomosha zali (Hall) va undagi o'rindiqlar qatori (SeatRow) mavjud. Qator zalsiz mavjud bo'lmaydi (Zaif Entitiy, {PPK} rowNo). Zal 1..* qatorga ega, qator esa 1..1 zalga qarashli.",
    taskUz: "'Hall' (hallId {PK}) va Zaif entitiy 'SeatRow' (isWeak: true) ni bog'lang: Hall (1..1), SeatRow (1..*).",
    starterDiagram: {
      entities: [
        { name: "Hall", x: 120, y: 150, attributes: [{ name: "hallId", isPK: true }, { name: "hallName" }] },
        { name: "SeatRow", isWeak: true, x: 480, y: 150, attributes: [{ name: "rowNo", isPPK: true }, { name: "seatCount" }] }
      ],
      relationships: []
    },
    expectedDiagram: {
      entities: [{ name: "Hall", pk: "hallId" }, { name: "SeatRow", isWeak: true }],
      relationships: [{ entity1: "Hall", entity2: "SeatRow", mult1: "1..1", mult2: "1..*" }]
    },
    hint: "SeatRow zaif entitiya, Hall ga 1..* bilan bog'lanadi.",
    explanation: "Teatr zali va qatorlari zaif bog'lanishi chizildi."
  },
  {
    id: 41,
    sector: 3,
    difficulty: "3-Qavat • O'rta",
    clientName: "Bexruz Normurodov",
    clientRole: "Chiptaxona Boshlig'i",
    clientAvatar: "retailer",
    title: "Chipta va Chipta Kuponlari (Coupon Weak Entity)",
    story: "Xalqaro poyezd chiptasi (Ticket) bir nechta kupon varaqlaridan (Coupon) iborat (Zaif Entitiy, {PPK} couponNo). Chipta 1..* kupondan iborat, kupon 1..1 chiptaga tegishli.",
    taskUz: "'Ticket' (ticketId {PK}) va Zaif entitiy 'Coupon' (isWeak: true) ni bog'lang: Ticket (1..1), Coupon (1..*).",
    starterDiagram: {
      entities: [
        { name: "Ticket", x: 120, y: 150, attributes: [{ name: "ticketId", isPK: true }, { name: "price" }] },
        { name: "Coupon", isWeak: true, x: 480, y: 150, attributes: [{ name: "couponNo", isPPK: true }, { name: "validDate" }] }
      ],
      relationships: []
    },
    expectedDiagram: {
      entities: [{ name: "Ticket", pk: "ticketId" }, { name: "Coupon", isWeak: true }],
      relationships: [{ entity1: "Ticket", entity2: "Coupon", mult1: "1..1", mult2: "1..*" }]
    },
    hint: "Coupon zaif entitiya, Ticket ga 1..* bilan ulanadi.",
    explanation: "Chipta va zaif kuponlar munosabati o'rnatildi."
  },
  {
    id: 42,
    sector: 3,
    difficulty: "3-Qavat • O'rta",
    clientName: "Maftuna Alimova",
    clientRole: "Bank Kartalari Monitoringi",
    clientAvatar: "banker",
    title: "Plastik Karta va PIN-Konvert (PinEnvelope Weak Entity)",
    story: "Bank plastik kartasi (BankCard) o'zining himoyalangan PIN-konvertiga (PinEnvelope) ega (Zaif Entitiy, {PPK} envSeq). Karta 0..1 konvertga ega, konvert 1..1 kartaga qarashli.",
    taskUz: "'BankCard' (cardNo {PK}) va Zaif entitiy 'PinEnvelope' (isWeak: true) ni bog'lang: BankCard (1..1), PinEnvelope (0..1).",
    starterDiagram: {
      entities: [
        { name: "BankCard", x: 120, y: 150, attributes: [{ name: "cardNo", isPK: true }, { name: "expDate" }] },
        { name: "PinEnvelope", isWeak: true, x: 480, y: 150, attributes: [{ name: "envSeq", isPPK: true }, { name: "salt" }] }
      ],
      relationships: []
    },
    expectedDiagram: {
      entities: [{ name: "BankCard", pk: "cardNo" }, { name: "PinEnvelope", isWeak: true }],
      relationships: [{ entity1: "BankCard", entity2: "PinEnvelope", mult1: "1..1", mult2: "0..1" }]
    },
    hint: "PinEnvelope (isWeak: true) BankCard ga 0..1 bilan bog'lanadi.",
    explanation: "Karta va PIN-konvert zaif 1:1 munosabati o'rnatildi."
  },
  {
    id: 43,
    sector: 3,
    difficulty: "3-Qavat • O'rta",
    clientName: "Nodir Mahmudov",
    clientRole: "Yuk Kemasi Kapitani",
    clientAvatar: "logistics",
    title: "Kema va Kema Xonalari (Cabin Weak Entity)",
    story: "Yuk kemasida (Ship) kayutalar (Cabin) mavjud (Zaif Entitiy, {PPK} cabinNo). Kema 1..* kayutaga ega, kayuta 1..1 kemaga qarashli.",
    taskUz: "'Ship' (imoNumber {PK}) va Zaif entitiy 'Cabin' (isWeak: true) ni bog'lang: Ship (1..1), Cabin (1..*).",
    starterDiagram: {
      entities: [
        { name: "Ship", x: 120, y: 150, attributes: [{ name: "imoNumber", isPK: true }, { name: "name" }] },
        { name: "Cabin", isWeak: true, x: 480, y: 150, attributes: [{ name: "cabinNo", isPPK: true }, { name: "beds" }] }
      ],
      relationships: []
    },
    expectedDiagram: {
      entities: [{ name: "Ship", pk: "imoNumber" }, { name: "Cabin", isWeak: true }],
      relationships: [{ entity1: "Ship", entity2: "Cabin", mult1: "1..1", mult2: "1..*" }]
    },
    hint: "Cabin (isWeak: true) Ship ga 1..* bilan ulanadi.",
    explanation: "Kema va kayutalar zaif munosabati to'g'ri chizildi."
  },
  {
    id: 44,
    sector: 3,
    difficulty: "3-Qavat • O'rta",
    clientName: "Zuhra Shodiyeva",
    clientRole: "Kollej O'quv Rejalari Boshlig'i",
    clientAvatar: "principal",
    title: "Fan Sillabusi va Dars Mavzulari (Topic Weak Entity)",
    story: "Fan sillabusida (Syllabus) dars mavzulari (Topic) bor (Zaif Entitiy, {PPK} topicNo). Sillabus 1..* mavzuga ega, mavzu 1..1 sillabusga qarashli.",
    taskUz: "'Syllabus' (sylId {PK}) va Zaif entitiy 'Topic' (isWeak: true) ni bog'lang: Syllabus (1..1), Topic (1..*).",
    starterDiagram: {
      entities: [
        { name: "Syllabus", x: 120, y: 150, attributes: [{ name: "sylId", isPK: true }, { name: "subject" }] },
        { name: "Topic", isWeak: true, x: 480, y: 150, attributes: [{ name: "topicNo", isPPK: true }, { name: "hours" }] }
      ],
      relationships: []
    },
    expectedDiagram: {
      entities: [{ name: "Syllabus", pk: "sylId" }, { name: "Topic", isWeak: true }],
      relationships: [{ entity1: "Syllabus", entity2: "Topic", mult1: "1..1", mult2: "1..*" }]
    },
    hint: "Topic zaif entitiy bo'lib Syllabus ga 1..* ulanadi.",
    explanation: "Sillabus va dars mavzulari zaif modeli to'liq qabul qilindi."
  },
  { id: 45, exist: true }
];

s3Def.forEach(item => {
  if (item.exist) list1_50.push(existingMap[item.id]);
  else list1_50.push(item);
});

// Questions 46 to 50 (Sector 4: Association Classes)
const s4Part1 = [
  { id: 46, exist: true },
  {
    id: 47,
    sector: 4,
    difficulty: "4-Qavat • O'rta",
    clientName: "Rustam Fayziyev",
    clientRole: "Avtomobil Zavodi Ta'minot Menejeri",
    clientAvatar: "automotive",
    title: "Yetkazib Beruvchi va Detallar (Supplies - narx Atributi)",
    story: "Zavodimizda ta'minotchi (Supplier) va detallar (Part) o'rtasida 'Supplies' ko'pdan-ko'pga (*:*) aloqasi mavjud. Bir ta'minotchi ko'plab detal yetkazadi (0..*), har bir detal ko'plab ta'minotchidan olinishi mumkin (1..*). Yetkazib berish narxi (unitPrice) aynan shu aloqaga tegishli (Association Class)!",
    taskUz: "'Supplier' va 'Part' ni 'Supplies' aloqasi (Association Class) bilan bog'lang: Supplier (1..*), Part (0..*).",
    starterDiagram: {
      entities: [
        { name: "Supplier", x: 120, y: 150, attributes: [{ name: "supplierId", isPK: true }, { name: "companyName" }] },
        { name: "Part", x: 480, y: 150, attributes: [{ name: "partNo", isPK: true }, { name: "description" }] }
      ],
      relationships: []
    },
    expectedDiagram: {
      entities: [{ name: "Supplier", pk: "supplierId" }, { name: "Part", pk: "partNo" }],
      relationships: [{ entity1: "Supplier", entity2: "Part", name: "Supplies", mult1: "1..*", mult2: "0..*", associationClass: true }]
    },
    hint: "Supplies aloqasiga unitPrice bo'lgan Association Class ni qo'shing.",
    explanation: "Supplier va Part munosabatida Association Class to'g'ri o'rnatildi."
  },
  {
    id: 48,
    sector: 4,
    difficulty: "4-Qavat • O'rta",
    clientName: "Shohrux Mirzohidov",
    clientRole: "Kutubxona Tarmog'i Ma'muri",
    clientAvatar: "librarian",
    title: "A'zo va Kitob Ijarasi (Borrow - borrowDate Atributi)",
    story: "Kutubxonamizda a'zo kitobxon (Member) va kitob nusxasi (Book) o'rtasida 'Borrows' aloqasi bor. A'zo ko'p kitob olishi (0..*), kitob esa ko'p marta berilishi mumkin (0..*). Olingan sana (borrowDate) va qaytarish muddati (dueDate) aloqaning Association Class atributlaridir.",
    taskUz: "'Member' va 'Book' ni 'Borrows' aloqasi (associationClass: true) bilan bog'lang: Member (0..*), Book (0..*).",
    starterDiagram: {
      entities: [
        { name: "Member", x: 120, y: 150, attributes: [{ name: "memberId", isPK: true }, { name: "fullName" }] },
        { name: "Book", x: 480, y: 150, attributes: [{ name: "bookId", isPK: true }, { name: "title" }] }
      ],
      relationships: []
    },
    expectedDiagram: {
      entities: [{ name: "Member", pk: "memberId" }, { name: "Book", pk: "bookId" }],
      relationships: [{ entity1: "Member", entity2: "Book", name: "Borrows", mult1: "0..*", mult2: "0..*", associationClass: true }]
    },
    hint: "Borrows aloqasida associationClass: true bo'lishi kerak.",
    explanation: "Kitob ijarasi Association Class modeli muvaffaqiyatli topshirildi."
  },
  {
    id: 49,
    sector: 4,
    difficulty: "4-Qavat • O'rta",
    clientName: "Dilorom Yusupova",
    clientRole: "Kasalxona Konsultatsiya Bo'limi",
    clientAvatar: "doctor",
    title: "Shifokor va Bemor Qabuli (Consults - konsultatsiya Tashxisi)",
    story: "Shifokor (Doctor) va bemor (Patient) o'rtasida 'Consults' aloqasi mavjud. Shifokor ko'p bemorni ko'radi (0..*), bemor ko'p shifokorga uchrashishi mumkin (0..*). Konsultatsiya natijasidagi tashxis (diagnosis) va to'lov (fee) aynan aloqa atributidir (Association Class).",
    taskUz: "'Doctor' va 'Patient' ni 'Consults' aloqasi (Association Class) bilan bog'lang: Doctor (0..*), Patient (0..*).",
    starterDiagram: {
      entities: [
        { name: "Doctor", x: 120, y: 150, attributes: [{ name: "docId", isPK: true }, { name: "specialty" }] },
        { name: "Patient", x: 480, y: 150, attributes: [{ name: "patientId", isPK: true }, { name: "fullName" }] }
      ],
      relationships: []
    },
    expectedDiagram: {
      entities: [{ name: "Doctor", pk: "docId" }, { name: "Patient", pk: "patientId" }],
      relationships: [{ entity1: "Doctor", entity2: "Patient", name: "Consults", mult1: "0..*", mult2: "0..*", associationClass: true }]
    },
    hint: "Consults aloqasiga associationClass qo'shiladi.",
    explanation: "Tibbiy konsultatsiya Association Class modeli tasdiqlandi."
  },
  { id: 50, exist: true }
];

s4Part1.forEach(item => {
  if (item.exist) list1_50.push(existingMap[item.id]);
  else list1_50.push(item);
});

// Save Questions 1 to 50
saveQuestionFile(path.join(__dirname, '../data/eer_clients_1_50.js'), 'EER_CLIENTS_1_50', list1_50);

// ----------------------------------------------------------------------------
// BUILD QUESTIONS 51 TO 100
// ----------------------------------------------------------------------------
const list51_100 = [];

// Questions 51 to 60 (Sector 4 cont.: Association Classes)
for (let id = 51; id <= 60; id++) {
  const titles = [
    "Aktyor va Film: 'ActsIn' Aloqasi (Role Atributi)",
    "Foydalanuvchi va Guruh: 'MemberOf' Aloqasi (JoinedDate Atributi)",
    "Avtomobil va Xizmat Safari: 'Drives' Aloqasi (Mileage Atributi)",
    "Dasturchi va Repozitoriy: 'Contributes' Aloqasi (Commits Atributi)",
    "Sayyoh va Mehmonxona: 'StaysAt' Aloqasi (CheckIn Atributi)",
    "Xaridor va Do'kon Cheki: 'Purchases' Aloqasi (Discount Atributi)",
    "Dori va Kasallik: 'Treats' Aloqasi (Dosage Atributi)",
    "O'qituvchi va Sinf: 'Supervises' Aloqasi (AcademicYear Atributi)",
    "Kompaniya va Homiylik: 'Sponsors' Aloqasi (Amount Atributi)",
    "4-Qavat Final Bossi: Xalqaro Logistika Tranziti ('Transits' - FreightCost)"
  ];
  const e1Names = ["Actor", "User", "Driver", "Developer", "Tourist", "Buyer", "Drug", "Teacher", "Company", "Carrier"];
  const e2Names = ["Movie", "UserGroup", "Route", "Repository", "Hotel", "Receipt", "Disease", "ClassRoom", "Event", "CargoHub"];
  const relNames = ["ActsIn", "MemberOf", "Drives", "Contributes", "StaysAt", "Purchases", "Treats", "Supervises", "Sponsors", "Transits"];
  const idx = id - 51;

  list51_100.push({
    id: id,
    sector: 4,
    floor: 4,
    difficulty: id === 60 ? "4-Qavat • Qiyin (4-Qavat Bossi)" : "4-Qavat • O'rta",
    clientName: "Biznes Hamkor #" + id,
    clientRole: "Tizim Tahlilchisi",
    clientAvatar: "retailer",
    title: titles[idx],
    story: `'${e1Names[idx]}' va '${e2Names[idx]}' o'rtasida ko'pdan-ko'pga (*:*) '${relNames[idx]}' munosabati bor. Aloqa ustida qo'shimcha biznes atribut saqlanadi (Association Class).`,
    taskUz: `'${e1Names[idx]}' va '${e2Names[idx]}' ni '${relNames[idx]}' aloqasi (Association Class) bilan bog'lang (0..* va 0..*).`,
    starterDiagram: {
      entities: [
        { name: e1Names[idx], x: 120, y: 150, attributes: [{ name: "id", isPK: true }, { name: "name" }] },
        { name: e2Names[idx], x: 480, y: 150, attributes: [{ name: "code", isPK: true }, { name: "title" }] }
      ],
      relationships: []
    },
    expectedDiagram: {
      entities: [{ name: e1Names[idx], pk: "id" }, { name: e2Names[idx], pk: "code" }],
      relationships: [{ entity1: e1Names[idx], entity2: e2Names[idx], name: relNames[idx], mult1: "0..*", mult2: "0..*", associationClass: true }]
    },
    hint: `${relNames[idx]} aloqasini associationClass: true sifatida chizing.`,
    explanation: `Association Class (${relNames[idx]}) to'g'ri loyihalandi.`
  });
}

// Questions 61 to 75 (Sector 5: Recursive / Unary Relationships)
for (let id = 61; id <= 75; id++) {
  const titles = [
    "Xodim va Rahbar Rekursiv Aloqasi (Supervises)",
    "Ierarxik Katalog Daraxti Rekursiv Aloqasi (SubCategoryOf)",
    "Zavod Detallari Rekursiv *:* Yig'masi (BOM - Contains)",
    "Universitet Fani Prerekvizitlari Rekursiv Aloqasi (Prerequisite)",
    "Ijtimoiy Tarmoq Do'stlik Rekursiv Aloqasi (FriendOf)",
    "Korxona Tashkiliy Bo'linmalar Daraxti (SubDivisionOf)",
    "Tarixiy Voqealar Sabab-Oqibat Rekursiv Aloqasi (LeadsTo)",
    "Moliya Balans Moddalari Ierarxiyasi (SubAccountOf)",
    "Dasturiy Komponentlar Paketlar Daraxti (DependsOn)",
    "Avtomobil Ehtiyot Qismlari O'rnini Bosish (Replaces)",
    "Xizmat Vazifalari Ketma-ketligi Rekursiv Aloqasi (Follows)",
    "Kadrlar Almashinuvi Merosxo'rlik Tizimi (Succeeds)",
    "Geografik Hududlar Ma'muriy Daraxti (BelongsToRegion)",
    "Elektron Pochta Xatlari Zanjiri (ReplyToThread)",
    "5-Qavat Bossi: Mentorlik va Jamoa Rahbarligi Rekursiv Tizimi"
  ];
  const entNames = ["Employee", "Category", "Part", "Course", "User", "Division", "HistoricalEvent", "Account", "Component", "SparePart", "Task", "Staff", "Region", "EmailMessage", "Staff"];
  const relNames = ["Supervises", "SubCategoryOf", "Contains", "Prerequisite", "FriendOf", "SubDivisionOf", "LeadsTo", "SubAccountOf", "DependsOn", "Replaces", "Follows", "Succeeds", "BelongsToRegion", "ReplyToThread", "Mentors"];
  const m1s = ["0..1", "0..1", "0..*", "0..*", "0..*", "0..1", "0..*", "0..1", "0..*", "0..1", "0..1", "0..1", "0..1", "0..1", "0..1"];
  const m2s = ["0..*", "0..*", "0..*", "0..*", "0..*", "0..*", "0..*", "0..*", "0..*", "0..*", "0..*", "0..*", "0..*", "0..*", "0..*"];
  const idx = id - 61;

  list51_100.push({
    id: id,
    sector: 5,
    floor: 5,
    difficulty: id === 75 ? "5-Qavat • Qiyin (5-Qavat Bossi)" : "5-Qavat • O'rta",
    clientName: "Biznes Hamkor #" + id,
    clientRole: "Tashkiliy Boshqaruv Mutaxassisi",
    clientAvatar: "ceo",
    title: titles[idx],
    story: `'${entNames[idx]}' entitiyasining o'z-o'ziga bog'lanuvchi rekursiv '${relNames[idx]}' munosabati mavjud: bir tomon '${m1s[idx]}', ikkinchi tomon esa '${m2s[idx]}'.`,
    taskUz: `'${entNames[idx]}' entitiyasining rekursiv '${relNames[idx]}' aloqasini chizing: '${m1s[idx]}' va '${m2s[idx]}'.`,
    starterDiagram: {
      entities: [
        { name: entNames[idx], x: 280, y: 150, attributes: [{ name: "id", isPK: true }, { name: "name" }] }
      ],
      relationships: []
    },
    expectedDiagram: {
      entities: [{ name: entNames[idx], pk: "id" }],
      relationships: [{ entity1: entNames[idx], entity2: entNames[idx], name: relNames[idx], mult1: m1s[idx], mult2: m2s[idx] }]
    },
    hint: `${entNames[idx]} o'z-o'ziga bog'lanadi: ${m1s[idx]} va ${m2s[idx]}.`,
    explanation: `Rekursiv munosabat (${relNames[idx]}) to'g'ri o'rnatildi.`
  });
}

// Questions 76 to 90 (Sector 6: Ternary Relationships)
for (let id = 76; id <= 90; id++) {
  const titles = [
    "O'qitish Taqsimoti Ternary Rombi (Teaches: Course, Instructor, Semester)",
    "Ta'minot Shartnomasi Ternary Rombi (Supplies: Supplier, Part, Project)",
    "Tibbiy Davolash Rejasi (Prescribes: Doctor, Patient, Drug)",
    "Sug'urta Da'vosi Ko'rib Chiqilishi (Assesses: Policy, Claim, Agent)",
    "Avtomobil Ijarasi Shartnomasi (Rents: Customer, Vehicle, AgencyBranch)",
    "Qurilish Obyekti Mashina Taqsimoti (Deploys: Site, Machinery, Operator)",
    "Sport Musobaqasi Hakamligi (Officiates: Referee, Match, Tournament)",
    "Bank Kredit Komissiyasi (Evaluates: LoanApp, Officer, Committee)",
    "Yuk Bojxona Tekshiruvi (Inspects: Cargo, Inspector, CustomsPost)",
    "Laboratoriya Namunasi Tahlili (Tests: Sample, Chemist, Equipment)",
    "Mehmonxona Xona Bandligi (Books: Guest, Room, BookingAgent)",
    "Xalqaro Parvoz Ekipaji (Assigns: Flight, Pilot, Aircraft)",
    "Kinofilm Kasting Taqsimoti (Casts: Movie, Role, Actor)",
    "Zavod Mahsulotini Qadoqlash (Packs: Product, PackagingLine, Operator)",
    "6-Qavat Bossi: Festival Chiqishlari Ternary Tizimi (Artist, Stage, FestivalDay)"
  ];
  const e1s = ["Course", "Supplier", "Doctor", "Policy", "Customer", "Site", "Referee", "LoanApp", "Cargo", "Sample", "Guest", "Flight", "Movie", "Product", "Artist"];
  const e2s = ["Instructor", "Part", "Patient", "Claim", "Vehicle", "Machinery", "Match", "Officer", "Inspector", "Chemist", "Room", "Pilot", "Role", "PackagingLine", "Stage"];
  const e3s = ["Semester", "Project", "Drug", "Agent", "AgencyBranch", "Operator", "Tournament", "Committee", "CustomsPost", "Equipment", "BookingAgent", "Aircraft", "Actor", "Operator", "FestivalDay"];
  const idx = id - 76;

  list51_100.push({
    id: id,
    sector: 6,
    floor: 6,
    difficulty: id === 90 ? "6-Qavat • Qiyin (6-Qavat Bossi)" : "6-Qavat • O'rta",
    clientName: "Biznes Hamkor #" + id,
    clientRole: "Tizim Integratori",
    clientAvatar: "vicechancellor",
    title: titles[idx],
    story: `'${e1s[idx]}', '${e2s[idx]}' va '${e3s[idx]}' ob'ektlari 3 tomonlama yaxlit ternary romb orqali bog'lanadi. Har bir bog'lanish chizig'iga 0..* multiplicity o'rnatiladi.`,
    taskUz: `'${e1s[idx]}', '${e2s[idx]}' va '${e3s[idx]}' entitiylarini markaziy ternary aloqa orqali bog'lang.`,
    starterDiagram: {
      entities: [
        { name: e1s[idx], x: 100, y: 150, attributes: [{ name: "id1", isPK: true }] },
        { name: e2s[idx], x: 450, y: 80, attributes: [{ name: "id2", isPK: true }] },
        { name: e3s[idx], x: 450, y: 220, attributes: [{ name: "id3", isPK: true }] }
      ],
      relationships: []
    },
    expectedDiagram: {
      entities: [
        { name: e1s[idx], pk: "id1" },
        { name: e2s[idx], pk: "id2" },
        { name: e3s[idx], pk: "id3" }
      ],
      relationships: [
        { entity1: e1s[idx], entity2: e2s[idx], mult1: "0..*", mult2: "0..*" },
        { entity1: e1s[idx], entity2: e3s[idx], mult1: "0..*", mult2: "0..*" }
      ]
    },
    hint: `${e1s[idx]}, ${e2s[idx]} va ${e3s[idx]} entitiylarini ternary munosabat bilan ulang.`,
    explanation: `Ternary (3 tomonlama) munosabat muvaffaqiyatli chizildi.`
  });
}

// Questions 91 to 100 (Sector 7: EER Disjoint Subclasses part 1)
for (let id = 91; id <= 100; id++) {
  const titles = [
    "Xodimlar Ixtisoslashuvi: Soatbay va Oylik ({Mandatory, Or})",
    "Transport Vositalari Ierarxiyasi ({Mandatory, Or})",
    "Universitet Xodimlari Qisman Ixtisoslashuvi ({Optional, Or})",
    "Bank Hisob Varaqlari: Omonat va Joriy ({Mandatory, Or})",
    "Kutubxona Resurslari: Kitob va Jurnal ({Mandatory, Or})",
    "Mulk Turlari: Turarjoy va Tijorat Mulki ({Mandatory, Or})",
    "Kompaniya Mijozlari: Jismoniy va Yuridik Shaxs ({Mandatory, Or})",
    "Dasturiy Foydalanuvchilar: Admin va Mehmon ({Optional, Or})",
    "Tibbiy Sug'urta Rejalari: Baza va Premium ({Mandatory, Or})",
    "7-Qavat Bossi: Bemorlar Ixtisoslashuvi ({Mandatory, Or})"
  ];
  const supers = ["Employee", "Vehicle", "Person", "Account", "LibraryItem", "Property", "Customer", "User", "InsurancePlan", "Patient"];
  const sub1s = ["HourlyEmp", "Car", "Staff", "SavingsAcc", "Book", "Residential", "Individual", "Admin", "BasicPlan", "InPatient"];
  const sub2s = ["SalariedEmp", "Truck", "Student", "CurrentAcc", "Journal", "Commercial", "Corporate", "Guest", "PremiumPlan", "OutPatient"];
  const constraints = [
    "{Mandatory, Or}", "{Mandatory, Or}", "{Optional, Or}", "{Mandatory, Or}", "{Mandatory, Or}",
    "{Mandatory, Or}", "{Mandatory, Or}", "{Optional, Or}", "{Mandatory, Or}", "{Mandatory, Or}"
  ];
  const idx = id - 91;

  list51_100.push({
    id: id,
    sector: 7,
    floor: 7,
    difficulty: id === 100 ? "7-Qavat • Qiyin (7-Qavat Bossi)" : "7-Qavat • O'rta",
    clientName: "Biznes Hamkor #" + id,
    clientRole: "EER Arxitektura Eksperti",
    clientAvatar: "architect",
    title: titles[idx],
    story: `'${supers[idx]}' superklassi ostida '${sub1s[idx]}' va '${sub2s[idx]}' subklasslari mavjud. Cheklov turi: '${constraints[idx]}'.`,
    taskUz: `'${supers[idx]}' superklassi ostida '${sub1s[idx]}' va '${sub2s[idx]}' subklasslarini '${constraints[idx]}' cheklovi bilan bog'lang.`,
    starterDiagram: {
      entities: [
        { name: supers[idx], x: 280, y: 80, attributes: [{ name: "id", isPK: true }, { name: "name" }] },
        { name: sub1s[idx], x: 120, y: 220, attributes: [{ name: "attr1" }] },
        { name: sub2s[idx], x: 440, y: 220, attributes: [{ name: "attr2" }] }
      ],
      subclasses: []
    },
    expectedDiagram: {
      entities: [{ name: supers[idx], pk: "id" }],
      subclasses: {
        superclass: supers[idx],
        constraint: constraints[idx],
        subclasses: [sub1s[idx], sub2s[idx]]
      }
    },
    hint: `${supers[idx]} ostiga ${constraints[idx]} cheklovini qo'ying.`,
    explanation: `Disjoint Subclass (${constraints[idx]}) to'liq tasdiqlandi.`
  });
}

// Save Questions 51 to 100
saveQuestionFile(path.join(__dirname, '../data/eer_clients_51_100.js'), 'EER_CLIENTS_51_100', list51_100);

// ----------------------------------------------------------------------------
// BUILD QUESTIONS 101 TO 150
// ----------------------------------------------------------------------------
const list101_150 = [];

// Questions 101 to 105 (Sector 7 cont.: Disjoint Subclasses part 2)
for (let id = 101; id <= 105; id++) {
  const titles = [
    "To'lov Usullari: Naqd va Karta ({Mandatory, Or})",
    "Soliq To'lovchilar: Rezident va Norezident ({Mandatory, Or})",
    "Avtomobil Dvigatellari: Benzin va Elektr ({Mandatory, Or})",
    "Mehmonxona Xonalari: Standart va Lyuks ({Mandatory, Or})",
    "7-Qavat Grand Boss: Aeroport Xodimlari ({Mandatory, Or})"
  ];
  const supers = ["PaymentMethod", "TaxPayer", "Engine", "HotelRoom", "AirportStaff"];
  const sub1s = ["CashPayment", "Resident", "PetrolEngine", "StandardRoom", "GroundCrew"];
  const sub2s = ["CardPayment", "NonResident", "ElectricEngine", "DeluxeRoom", "FlightCrew"];
  const idx = id - 101;

  list101_150.push({
    id: id,
    sector: 7,
    floor: 7,
    difficulty: id === 105 ? "7-Qavat • Qiyin (7-Qavat Grand Boss)" : "7-Qavat • O'rta",
    clientName: "Biznes Hamkor #" + id,
    clientRole: "EER Mutaxassisi",
    clientAvatar: "architect",
    title: titles[idx],
    story: `'${supers[idx]}' superklassi ostida '${sub1s[idx]}' va '${sub2s[idx]}' kesishmaydigan subklasslari joylashgan ({Mandatory, Or}).`,
    taskUz: `'${supers[idx]}' ostida '${sub1s[idx]}' va '${sub2s[idx]}' ni '{Mandatory, Or}' cheklovi bilan bog'lang.`,
    starterDiagram: {
      entities: [
        { name: supers[idx], x: 280, y: 80, attributes: [{ name: "id", isPK: true }] },
        { name: sub1s[idx], x: 120, y: 220, attributes: [{ name: "attr1" }] },
        { name: sub2s[idx], x: 440, y: 220, attributes: [{ name: "attr2" }] }
      ],
      subclasses: []
    },
    expectedDiagram: {
      entities: [{ name: supers[idx], pk: "id" }],
      subclasses: {
        superclass: supers[idx],
        constraint: "{Mandatory, Or}",
        subclasses: [sub1s[idx], sub2s[idx]]
      }
    },
    hint: `{Mandatory, Or} cheklovini tanlang.`,
    explanation: `Disjoint Subclass {Mandatory, Or} modeli qabul qilindi.`
  });
}

// Questions 106 to 120 (Sector 8: Overlapping Subclasses: {Mandatory, And} & {Optional, And})
for (let id = 106; id <= 120; id++) {
  const titles = [
    "Detal Ishlab Chiqarish va Xarid: {Mandatory, And}",
    "Universitet Xodimi va Talaba Kesishuvi: {Optional, And}",
    "Muallif va Tarjimon Kesishuvi: {Optional, And}",
    "Dastur Foydalanuvchisi: Xaridor va Sotuvchi ({Mandatory, And})",
    "Avtomobil Ishlab Chiqaruvchi va Sotuvchi: {Optional, And}",
    "Sportchi va Murabbiy Kesishuvi: {Optional, And}",
    "Shifoxona Xodimi: Vrach va O'qituvchi ({Optional, And})",
    "Kompaniya Filiali: Savdo va Servis Markazi ({Mandatory, And})",
    "Musiqachi: Bastakor va Ijrochi ({Optional, And})",
    "IT Mutaxassis: Dasturchi va DevOps ({Optional, And})",
    "Bino: Ofis va Turarjoy Majmuasi ({Mandatory, And})",
    "Kredit Karta Egasi: Debet va Kredit Funksiyasi ({Mandatory, And})",
    "Restoran Xodimi: Oshpaz va Ma'mur ({Optional, And})",
    "Ilmiy Xodim: Tadqiqotchi va Ekspert ({Optional, And})",
    "8-Qavat Bossi: Aviatsiya Xodimi (Uchuvchi va Instruktor {Optional, And})"
  ];
  const supers = ["Part", "Person", "Writer", "PlatformUser", "AutoCompany", "Athlete", "HospitalStaff", "Branch", "Musician", "TechStaff", "Building", "CardHolder", "RestStaff", "Scientist", "AeroStaff"];
  const sub1s = ["ManufacturedPart", "StaffMember", "Author", "Buyer", "Manufacturer", "Player", "Doctor", "SalesOffice", "Composer", "Coder", "OfficeSpace", "DebitCard", "Cook", "Researcher", "Pilot"];
  const sub2s = ["PurchasedPart", "StudentMember", "Translator", "Seller", "Dealer", "Coach", "Lecturer", "ServiceCenter", "Performer", "DevOps", "ApartmentSpace", "CreditCard", "Manager", "Expert", "FlightInstructor"];
  const constraints = [
    "{Mandatory, And}", "{Optional, And}", "{Optional, And}", "{Mandatory, And}", "{Optional, And}",
    "{Optional, And}", "{Optional, And}", "{Mandatory, And}", "{Optional, And}", "{Optional, And}",
    "{Mandatory, And}", "{Mandatory, And}", "{Optional, And}", "{Optional, And}", "{Optional, And}"
  ];
  const idx = id - 106;

  list101_150.push({
    id: id,
    sector: 8,
    floor: 8,
    difficulty: id === 120 ? "8-Qavat • Qiyin (8-Qavat Bossi)" : "8-Qavat • O'rta",
    clientName: "Biznes Hamkor #" + id,
    clientRole: "EER Overlapping Arxitektori",
    clientAvatar: "architect",
    title: titles[idx],
    story: `'${supers[idx]}' superklassi ostida '${sub1s[idx]}' va '${sub2s[idx]}' bir vaqtning o'zida amal qilishi mumkin bo'lgan kesishuvchi subklasslar mavjud. Qoida: '${constraints[idx]}'.`,
    taskUz: `'${supers[idx]}' ostida '${sub1s[idx]}' va '${sub2s[idx]}' ni '${constraints[idx]}' cheklovi bilan ulang.`,
    starterDiagram: {
      entities: [
        { name: supers[idx], x: 280, y: 80, attributes: [{ name: "id", isPK: true }] },
        { name: sub1s[idx], x: 120, y: 220, attributes: [{ name: "subAttr1" }] },
        { name: sub2s[idx], x: 440, y: 220, attributes: [{ name: "subAttr2" }] }
      ],
      subclasses: []
    },
    expectedDiagram: {
      entities: [{ name: supers[idx], pk: "id" }],
      subclasses: {
        superclass: supers[idx],
        constraint: constraints[idx],
        subclasses: [sub1s[idx], sub2s[idx]]
      }
    },
    hint: `Overlapping ierarxiyasi uchun ${constraints[idx]} cheklovini tanlang.`,
    explanation: `Overlapping Subclass (${constraints[idx]}) muvaffaqiyatli qabul qilindi.`
  });
}

// Questions 121 to 135 (Sector 9: Connection Traps: Fan Trap & Chasm Trap)
for (let id = 121; id <= 135; id++) {
  const isFan = (id % 2 === 1);
  const trapType = isFan ? "Fan Trap" : "Chasm Trap";
  const titles = [
    "Bo'lim, Filial va Xodim: Fan Trap Bartaraf Etish",
    "Mulk, Filial va Xodim: Chasm Trap Tuzatish",
    "Fakultet, Kafedra va O'qituvchi: Fan Trap Hal Qilish",
    "Loyiha, Bo'lim va Dasturchi: Chasm Trap Bartaraf Etish",
    "Zavod, Tsex va Ishchi: Fan Trap Tuzatish",
    "Kasalxona, Bo'lim va Palata: Chasm Trap Hal Qilish",
    "Bank, Filial va Kassir: Fan Trap Bartaraf Etish",
    "Kompaniya, Shartnoma va Mijoz: Chasm Trap Tuzatish",
    "Do'kon, Ombor va Yukchi: Fan Trap Hal Qilish",
    "Universitet, Guruh va Talaba: Chasm Trap Bartaraf Etish",
    "Nashriyot, Jurnal va Maqola: Fan Trap Tuzatish",
    "Klinika, Shifokor va Retsept: Chasm Trap Hal Qilish",
    "Holding, Korxona va Boshqaruvchi: Fan Trap Bartaraf Etish",
    "Aviakompaniya, Samolyot va Reys: Chasm Trap Tuzatish",
    "9-Qavat Bossi: Murakkab Fan va Chasm Trap Korporativ Qayta Loyihalash"
  ];
  const idx = id - 121;

  const e1 = isFan ? "Division" : "Branch";
  const e2 = isFan ? "Branch" : "Staff";
  const e3 = isFan ? "Staff" : "Property";

  list101_150.push({
    id: id,
    sector: 9,
    floor: 9,
    difficulty: id === 135 ? "9-Qavat • Qiyin (9-Qavat Bossi)" : "9-Qavat • O'rta",
    clientName: "Biznes Hamkor #" + id,
    clientRole: "Ma'lumotlar Bazasi Audit Xizmati",
    clientAvatar: "auditor",
    title: titles[idx],
    story: `Tizimda ${trapType} xatosi aniqlangan! Bog'lanishlar ketma-ketligi buzilganligi tufayli mantiqiy chalkashlik yuzaga kelgan. To'g'ri arxitektura: '${e1}' (1..1) -> '${e2}' (1..*) va '${e2}' (1..1) -> '${e3}' (1..*).`,
    taskUz: `'${e1}', '${e2}' va '${e3}' o'rtasida to'g'ri aloqa zanjirini tiklang va ${trapType}ni bartaraf eting.`,
    starterDiagram: {
      entities: [
        { name: e1, x: 80, y: 150, attributes: [{ name: "id1", isPK: true }] },
        { name: e2, x: 300, y: 150, attributes: [{ name: "id2", isPK: true }] },
        { name: e3, x: 520, y: 150, attributes: [{ name: "id3", isPK: true }] }
      ],
      relationships: []
    },
    expectedDiagram: {
      entities: [{ name: e1, pk: "id1" }, { name: e2, pk: "id2" }, { name: e3, pk: "id3" }],
      relationships: [
        { entity1: e1, entity2: e2, mult1: "1..1", mult2: "1..*" },
        { entity1: e2, entity2: e3, mult1: "1..1", mult2: "1..*" }
      ]
    },
    hint: `${e1} -> ${e2} -> ${e3} ketma-ketligi orqali ${trapType}ni tuzating.`,
    explanation: `${trapType} to'g'ri aloqa zanjiri orqali muvaffaqiyatli bartaraf etildi.`
  });
}

// Questions 136 to 150 (Sector 10: Master Corporate EER Cases)
const corpCases = [
  {
    id: 136,
    title: "10-Qavat: 'Orient Bank' Korporativ EER Master Arxitekturasi",
    clientName: "Bobur Rahimov",
    clientRole: "Bank IT Direktori",
    story: "Bank filiallari (Branch), xodimlari (Staff) va hisob raqamlari (Account) o'rtasidagi to'liq arxitekturani chizing.",
    e1: "Branch", e2: "Staff", e3: "Account"
  },
  {
    id: 137,
    title: "10-Qavat: 'Akfa Medline' Markaziy Tibbiyot EER Tizimi",
    clientName: "Dr. Nilufar Mirzayeva",
    clientRole: "Tibbiyot Markazi Bosh Vrachi",
    story: "Kasalxona bo'limlari (Department), shifokorlar (Doctor) va bemorlar (Patient) munosabatini to'liq ifodalang.",
    e1: "Department", e2: "Doctor", e3: "Patient"
  },
  {
    id: 138,
    title: "10-Qavat: 'Uzbekistan Airways' Aviatashuvlar EER Bosh Sxemasi",
    clientName: "Farrux Qodirov",
    clientRole: "Aviatsiya Xavfsizligi Boshlig'i",
    story: "Samolyot (Aircraft), parvoz (Flight) va yo'lovchilar chiptasi (Ticket) zanjirini quring.",
    e1: "Aircraft", e2: "Flight", e3: "Ticket"
  },
  {
    id: 139,
    title: "10-Qavat: 'Uzum Market' E-tijorat & Logistika EER Modeli",
    clientName: "Temur Aliyev",
    clientRole: "Uzum Logistika Direktori",
    story: "Buyurtma (Order), xaridor (Customer) va yetkazib berish kuryeri (Courier) aloqalarini chizing.",
    e1: "Customer", e2: "Order", e3: "Courier"
  },
  {
    id: 140,
    title: "10-Qavat: 'ACADEMY ERP' Universitet Boshqaruv EER Tizimi",
    clientName: "Prof. Jahongir To'rayev",
    clientRole: "O'quv Boshqarmasi Prorektori",
    story: "Fakultet (Faculty), o'qituvchi (Lecturer) va fan (Course) o'rtasidagi munosabatlarni aniq quring.",
    e1: "Faculty", e2: "Lecturer", e3: "Course"
  },
  {
    id: 141,
    title: "10-Qavat: 'Tashkent City Hotel' Mehmonxona Majmuasi EER",
    clientName: "Nargiza Sodiqova",
    clientRole: "Bosh Mehmonxona Boshqaruvchisi",
    story: "Mehmonxona (Hotel), xona (Room) va bronlash (Reservation) modelini to'liq chizib bering.",
    e1: "Hotel", e2: "Room", e3: "Reservation"
  },
  {
    id: 142,
    title: "10-Qavat: 'Texnopark' Sanoat Ishlab Chiqarish EER Arxitekturasi",
    clientName: "Ibrohim Rustamov",
    clientRole: "Bosh Texnolog",
    story: "Zavod (Plant), ishlab chiqarish liniyasi (Line) va mahsulot (Product) munosabatini yarating.",
    e1: "Plant", e2: "Line", e3: "Product"
  },
  {
    id: 143,
    title: "10-Qavat: 'Korzinka' Supermarketlar Tarmog'i Ta'minot Zanjiri",
    clientName: "Botir Rahmonov",
    clientRole: "Ta'minot Boshlig'i",
    story: "Markaziy ombor (Warehouse), do'kon (Store) va tovar partiyasi (GoodsBatch) zanjirini quring.",
    e1: "Warehouse", e2: "Store", e3: "GoodsBatch"
  },
  {
    id: 144,
    title: "10-Qavat: 'Payme' To'lov Tizimi Kliring EER Tizimi",
    clientName: "Sardor Yusupov",
    clientRole: "Fintex Xavfsizlik Arxitektori",
    story: "Hamyon (Wallet), tranzaksiya (PaymentTx) va savdo nuqtasi (Merchant) arxitekturasini chizing.",
    e1: "Merchant", e2: "PaymentTx", e3: "Wallet"
  },
  {
    id: 145,
    title: "10-Qavat: 'IT Park Uzbekistan' Rezidentlar va Akseleratsiya EER",
    clientName: "Farhod Ibragimov",
    clientRole: "IT Park Bosh Direktori",
    story: "Akselerator (Accelerator), startap (Startup) va mentor (Mentor) o'rtasidagi aloqalarni birlashtiring.",
    e1: "Accelerator", e2: "Startup", e3: "Mentor"
  },
  {
    id: 146,
    title: "10-Qavat: 'O'zbekiston Temir Yo'llari' Ekspress Chipta Tizimi",
    clientName: "Otabek Qosimov",
    clientRole: "Magistral Dispetcheri",
    story: "Poyezd (Train), vagon (Carriage) va chipta (Ticket) zanjirini chizing.",
    e1: "Train", e2: "Carriage", e3: "Ticket"
  },
  {
    id: 147,
    title: "10-Qavat: 'UzAuto Motors' Avtomobil Yig'uv Klasteri EER",
    clientName: "Mansur Zokirov",
    clientRole: "Klaster Direktori",
    story: "Model (CarModel), korpus yig'ish sexi (BodyShop) va avtomobil nusxasi (CarUnit) ni bog'lang.",
    e1: "CarModel", e2: "BodyShop", e3: "CarUnit"
  },
  {
    id: 148,
    title: "10-Qavat: Sug'urta Xoldingi Integrallashgan EER Sxemasi",
    clientName: "Madina Hakimova",
    clientRole: "Xolding Bosh Aktuariysi",
    story: "Mijoz (Client), polis (Policy) va sug'urta agenti (Agent) bog'liqligini to'liq ko'rsating.",
    e1: "Client", e2: "Policy", e3: "Agent"
  },
  {
    id: 149,
    title: "10-Qavat: Farmatsevtika Holdingi Xalqaro Ta'minot EER Tizimi",
    clientName: "Rustam Mahmudov",
    clientRole: "GNP Nazorati Boshlig'i",
    story: "Ishlab chiqaruvchi (PharmaCorp), dori (Medicine) va distribyutor (Distributor) munosabatini chizing.",
    e1: "PharmaCorp", e2: "Medicine", e3: "Distributor"
  },
  {
    id: 150,
    title: "10-Qavat OLIY BOSSI: ACADEMY & Westminster University Enterprise Master EER",
    clientName: "Professor Atlas",
    clientRole: "Bosh Hakam & ACADEMY VIVA Imtihonchisi",
    story: "Tabriklayman, Bosh Me'mor! Siz 150-savol — Oliy Me'moriy Bossga yetib keldingiz! Butun universitet ekotizimini: Fakultet (Faculty), Kafedra (Department), Professor (Professor) va Talaba (Student) ning to'liq ierarxik va binar aloqalarini eng mukammal darajada chizib bering!",
    e1: "Faculty", e2: "Department", e3: "Professor"
  }
];

corpCases.forEach((c, idx) => {
  list101_150.push({
    id: c.id,
    sector: 10,
    floor: 10,
    difficulty: c.id === 150 ? "10-Qavat • OLIY BOSS (Professor Atlas)" : "10-Qavat • Master EER",
    clientName: c.clientName,
    clientRole: c.clientRole,
    clientAvatar: c.id === 150 ? "atlas" : "ceo",
    title: c.title,
    story: c.story,
    taskUz: `'${c.e1}' (1..1) -> '${c.e2}' (1..*) va '${c.e2}' (1..1) -> '${c.e3}' (1..*) munosabatlarini chizib, to'liq master EER arxitekturasini yarating!`,
    starterDiagram: {
      entities: [
        { name: c.e1, x: 80, y: 150, attributes: [{ name: "id1", isPK: true }, { name: "name" }] },
        { name: c.e2, x: 320, y: 150, attributes: [{ name: "id2", isPK: true }, { name: "title" }] },
        { name: c.e3, x: 560, y: 150, attributes: [{ name: "id3", isPK: true }, { name: "code" }] }
      ],
      relationships: []
    },
    expectedDiagram: {
      entities: [
        { name: c.e1, pk: "id1" },
        { name: c.e2, pk: "id2" },
        { name: c.e3, pk: "id3" }
      ],
      relationships: [
        { entity1: c.e1, entity2: c.e2, mult1: "1..1", mult2: "1..*" },
        { entity1: c.e2, entity2: c.e3, mult1: "1..1", mult2: "1..*" }
      ]
    },
    hint: `${c.e1} (1..1) -> ${c.e2} (1..*) va ${c.e2} (1..1) -> ${c.e3} (1..*).`,
    explanation: `${c.title} korporativ EER modeli muvaffaqiyatli topshirildi!`
  });
});

// Save Questions 101 to 150
saveQuestionFile(path.join(__dirname, '../data/eer_clients_101_150.js'), 'EER_CLIENTS_101_150', list101_150);

console.log("SUCCESS: All 150 EER Questions generated!");
