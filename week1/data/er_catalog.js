// ============================================================================
// DATABASE SYSTEMS ACADEMY — 1-HAFTA: KONSEPTUAL EER MODEL KATALOGI VA GRADERI
// Draw.io uslubidagi Vizual EER Diagramma Dvigateli, Sektorlar va Semantik Baholovchi
// ============================================================================

var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);

_scope.EER_CATALOG = {
  version: "2026.3.0",
  course: "Database Systems Academy",
  module: "1-Hafta — Konseptual Ma'lumotlar Bazasi & EER Modellashtirish Atelesi (150 Amaliy Keys)",

  sectors: [
    {
      id: 1,
      name: "1-Qavat: Binar Aloqalar va Birlamchi Kalitlar",
      subtitle: "2 ta mustaqil entitiy, {PK} tanlash, asosiy 1:* va 1:1 bog'lanishlar",
      range: [1, 15],
      floorRange: [1, 15],
      badge: "1F • Binar ER",
      description: "Mijoz talablaridan 2 ta asosiy entitiyni aniqlash, ularning Birlamchi Kaliti {PK} va oddiy 1:* hamda 1:1 aloqalarini chizish."
    },
    {
      id: 2,
      name: "2-Qavat: Multiplicity Chegaralari (0..1, 1..1, 0..*, 1..*)",
      subtitle: "Ixtiyoriy vs Majburiy ishtirok, min..max chegaralarini to'g'ri joylashtirish",
      range: [16, 30],
      floorRange: [16, 30],
      badge: "2F • Multiplicity",
      description: "Mijoz hikoyasidan qat'iy majburiy (1..1, 1..*) va ixtiyoriy (0..1, 0..*) qoidalarni aniqlab, chiziq uchlariga qo'yish."
    },
    {
      id: 3,
      name: "3-Qavat: Zaif Entitiylar (Weak Entities)",
      subtitle: "Ota entitiyga qaramlik, identifikatsion aloqa va qisman kalit {PPK}",
      range: [31, 45],
      floorRange: [31, 45],
      badge: "3F • Zaif Entitiy",
      description: "Mustaqil yashay olmaydigan zaif entitiylar (Dependent, Room, Milestone) va ularning {PPK} qisman kalitlarini chizish."
    },
    {
      id: 4,
      name: "4-Qavat: *:* Aloqalar va Aloqa Atributlari (Association Class)",
      subtitle: "Ko'pdan-ko'pga munosabatlar va aloqaga tegishli bo'lgan atribut qutilari",
      range: [46, 60],
      floorRange: [46, 60],
      badge: "4F • Association Class",
      description: "*:* aloqalar (WorksOn, Registers) va aloqa chizig'iga punktir bilan ulanadigan atributlar (hours, grade) ni loyihalash."
    },
    {
      id: 5,
      name: "5-Qavat: Rekursiv (Unitar) Aloqalar",
      subtitle: "O'z-o'ziga bog'lanuvchi entitiylar: rahbarlik, daraxt va BOM tuzilmalari",
      range: [61, 75],
      floorRange: [61, 75],
      badge: "5F • Rekursiv ER",
      description: "Bitta entitiyning o'ziga qaytuvchi rekursiv aloqalari (Employee Supervises Employee, Category Parent Category)."
    },
    {
      id: 6,
      name: "6-Qavat: Ternary (3 Tomonlama) Munosabatlar",
      subtitle: "Markaziy romb (Diamond) orqali 3 ta entitiyni birlashtirish",
      range: [76, 90],
      floorRange: [76, 90],
      badge: "6F • Ternary Romb",
      description: "Course, Instructor, Semester kabi 3 tomonlama munosabatlarni markaziy romb orqali EER diagrammada ifodalash."
    },
    {
      id: 7,
      name: "7-Qavat: EER Subklasslar 1: Disjoint ({Mandatory, Or} va {Optional, Or})",
      subtitle: "Kesishmaydigan ixtisoslashuv: ob'ekt faqat 1 ta subklassga tegishli bo'lishi",
      range: [91, 105],
      floorRange: [91, 105],
      badge: "7F • Disjoint Subclass",
      description: "Xodim yoki transport vositalarining kesishmaydigan (Or) maxsuslashtirilgan subklasslari va ularning cheklovlari."
    },
    {
      id: 8,
      name: "8-Qavat: EER Subklasslar 2: Overlapping ({Mandatory, And} va {Optional, And})",
      subtitle: "Kesishuvchi ixtisoslashuv: ob'ekt bir vaqtning o'zida bir nechta subklass bo'lishi",
      range: [106, 120],
      floorRange: [106, 120],
      badge: "8F • Overlapping Subclass",
      description: "Bitta ob'ekt (masalan Detal: ham ishlab chiqarilgan, ham sotib olingan) bir vaqtda 2 subklassga kiruvchi And ierarxiyasi."
    },
    {
      id: 9,
      name: "9-Qavat: Bog'lanish Tuzoqlari (Fan Trap & Chasm Trap)",
      subtitle: "Xato aloqalarni payqash va diagrammani qayta tuzatish orqali tuzoqlarni yechish",
      range: [121, 135],
      floorRange: [121, 135],
      badge: "9F • Connection Traps",
      description: "Noma'lumlikka olib keluvchi Fan Trap va ma'lumot yo'qolib qoluvchi Chasm Trap tuzoqlarini aniqlab, to'g'ri modelga o'tkazish."
    },
    {
      id: 10,
      name: "10-Qavat: Korporativ EER Master Keyslari",
      subtitle: "5–8 ta entitiyli to'liq korporativ arxitekturalar (Penthouse Boss)",
      range: [136, 150],
      floorRange: [136, 150],
      badge: "10F • Master EER Keys",
      description: "Barcha EER mezonlarini o'z ichiga olgan keng qamrovli xolding, shifoxona, avia-tizim va IT korxonalari bosh arxitekturasi."
    }
  ],

  // Career Titles in Uzbek matching Week 4
  careerRanks: [
    { minSolved: 0,   title: "Stajyor Tahlilchi",            salary: "$1,200/oy", badge: "🎓" },
    { minSolved: 15,  title: "Kichik Ma'lumotlar Mutaxassisi", salary: "$2,200/oy", badge: "💼" },
    { minSolved: 35,  title: "O'rta Bo'g'in ER Me'mori",       salary: "$3,800/oy", badge: "💻" },
    { minSolved: 60,  title: "Katta Ma'lumotlar Arxitektori",  salary: "$6,000/oy", badge: "🏛" },
    { minSolved: 90,  title: "Bosh Tizim Me'mori",            salary: "$9,500/oy", badge: "📊" },
    { minSolved: 120, title: "Vitse-Prezident (VP Data)",     salary: "$14,000/oy", badge: "🎖" },
    { minSolved: 145, title: "Bosh Texnik Direktor (CDO)",     salary: "$22,000/oy", badge: "👑" }
  ],

  // Interactive Real-Life Office Events in Uzbek
  officeEvents: [
    {
      id: "ev1",
      triggerAfterQuestion: 15,
      triggerAfterQ: 15,
      speaker: "Chief Architect Atlas",
      role: "Bosh Tizim Arxitektori",
      avatar: "🏛",
      title: "📞 Bosh Arxitektor Maslahati: Multiplicity Chegaralari",
      narrative: "Atlas stolingizga kelib shunday dedi: 'Me'mor, mijozimiz har bir filialda kamida 1 ta, ko'pi bilan ko'plab xodim ishlashi shart deb aytdi. Bu UML da qaysi multiplisitiy bilan ifodalanadi?'",
      choices: [
        {
          text: "`1..*` (Minimal 1 ta majburiy, maksimal ko'plab).",
          correct: true,
          bonus: 500,
          outcome: "Atlas mamnun jilmaydi: 'Ofarin! Qat'iy majburiy ishtirok doim minimal 1 dan boshlanadi. Sizga $500 bonus yozildi!'"
        },
        {
          text: "`0..*` (Ixtiyoriy va ko'plab).",
          correct: false,
          bonus: 0,
          outcome: "Atlas tuzatdi: 'Yo'q! 0 bo'lsa xodimsiz filial ham bo'lishi mumkin degani. Mijoz esa kamida bitta xodim shart dedi!'"
        }
      ]
    },
    {
      id: "ev2",
      triggerAfterQuestion: 45,
      triggerAfterQ: 45,
      speaker: "Maya",
      role: "Katta Ma'lumotlar Muhandisi",
      avatar: "👩‍💻",
      title: "☕ Zaif Entitiy va Ota Bog'liqlik",
      narrative: "Kofe-breykda Maya savol berdi: 'Bino (Building) va uning Xonasi (Room) bor. Xonani alohida entitiy qilib, unga shunchaki roomNo kalitini qo'ysak bo'ladimi yoki u zaif entitiymi?'",
      choices: [
        {
          text: "Xona alohida mavjud bo'la olmaydi — u Zaif Entitiy (Weak Entity) bo'lib, bino raqami bilan birga kompozit kalit hosil qiladi.",
          correct: true,
          bonus: 500,
          outcome: "Maya qoyil qoldi: 'Aynan shunday! Binoni buzib tashlasak, xonalar ham yo'qoladi — klassik zaif entitiy!'"
        },
        {
          text: "Farqi yo'q, xona ham oddiy mustaqil jadval.",
          correct: false,
          bonus: 0,
          outcome: "Noto'g'ri: Turli binolarda bir xil raqamli xonalar (masalan 101-xona) bo'lishi mumkin, binoni ko'rsatmasdan xonani unikal aniqlab bo'lmaydi."
        }
      ]
    }
  ]
};

// ============================================================================
// EER GRAPH SEMANTIC GRADER (100% O'zbek tilida diagnostika)
// ============================================================================

_scope.EER_GRADER = {
  norm(str) {
    if (!str) return "";
    return str.toString().trim().toLowerCase().replace(/[^a-z0-9]/g, '');
  },

  normMult(m) {
    if (!m) return "1..1";
    let s = m.toString().trim().toLowerCase();
    s = s.replace(/m|n/g, '*').replace(/:/g, '..');
    if (s === "1") return "1..1";
    if (s === "*") return "0..*";
    return s;
  },

  grade(userDiagram, question) {
    if (!userDiagram || !userDiagram.entities || userDiagram.entities.length === 0) {
      return {
        passed: false,
        feedback: "Doska bo'sh! Iltimos, mijoz talablari asosida entitiylarni joylashtiring va ularni bog'lang."
      };
    }

    const exp = question.expectedDiagram;
    if (!exp) {
      return { passed: true, feedback: "Diagramma muvaffaqiyatli qabul qilindi!" };
    }

    const uEntities = userDiagram.entities || [];
    const uRels = userDiagram.relationships || [];
    const uSubclasses = userDiagram.subclasses || [];

    // 1. Entitiylar mavjudligini tekshirish
    const expEntities = exp.entities || [];
    for (const expEnt of expEntities) {
      const entName = typeof expEnt === 'string' ? expEnt : expEnt.name;
      const found = uEntities.find(e => this.norm(e.name) === this.norm(entName));

      if (!found) {
        return {
          passed: false,
          feedback: `Mijoz talabidagi muhim entitiy yetishmayapti: Doskaga '${entName}' entitiysini qo'shishingiz lozim.`
        };
      }

      // {PK} kalitini tekshirish
      if (typeof expEnt === 'object' && expEnt.pk) {
        const pkAttr = (found.attributes || []).find(a => a.isPK || (a.name && a.name.toLowerCase().includes('{pk}')));
        if (!pkAttr) {
          return {
            passed: false,
            feedback: `'${found.name}' entitiysida Birlamchi Kalit {PK} belgilanmagan! Kalit ustuniga {PK} belgisini bosing.`
          };
        }
      }

      // Zaif entitiy bayrog'ini tekshirish
      if (typeof expEnt === 'object' && expEnt.isWeak) {
        if (!found.isWeak) {
          return {
            passed: false,
            feedback: `'${found.name}' mustaqil bo'lmagan Zaif Entitiy (Weak Entity) bo'lishi kerak! Ushbu kartochkada 'Zaif Entitiy' tugmachasini yoqing.`
          };
        }
      }
    }

    // 2. Aloqalar (Relationships) va Multiplicity tekshiruvi
    const expRels = exp.relationships || [];
    for (const expRel of expRels) {
      const e1Norm = this.norm(expRel.entity1);
      const e2Norm = this.norm(expRel.entity2);

      const foundRel = uRels.find(r => {
        const r1Norm = this.norm(r.fromEntityName || r.entity1);
        const r2Norm = this.norm(r.toEntityName || r.entity2);
        return (r1Norm === e1Norm && r2Norm === e2Norm) || (r1Norm === e2Norm && r2Norm === e1Norm);
      });

      if (!foundRel) {
        return {
          passed: false,
          feedback: `'${expRel.entity1}' va '${expRel.entity2}' o'rtasida aloqa chizig'i topilmadi! Ularni chiziq bilan bog'lang.`
        };
      }

      const r1 = this.norm(foundRel.fromEntityName || foundRel.entity1);
      const isDirect = (r1 === e1Norm);

      const userMult1 = this.normMult(isDirect ? (foundRel.mult1 || foundRel.fromMult) : (foundRel.mult2 || foundRel.toMult));
      const userMult2 = this.normMult(isDirect ? (foundRel.mult2 || foundRel.toMult) : (foundRel.mult1 || foundRel.fromMult));

      const expMult1 = this.normMult(expRel.mult1);
      const expMult2 = this.normMult(expRel.mult2);

      if (e1Norm === e2Norm) {
        // Rekursiv aloqa
        const matchesDirect = (!expMult1 || userMult1 === expMult1) && (!expMult2 || userMult2 === expMult2);
        const matchesReversed = (!expMult1 || userMult2 === expMult1) && (!expMult2 || userMult1 === expMult2);
        if (!matchesDirect && !matchesReversed) {
          return {
            passed: false,
            feedback: `'${expRel.entity1}' rekursiv aloqasidagi multiplisitiylar noto'g'ri: '${expMult1}' va '${expMult2}' bo'lishi lozim (Sizda: '${userMult1}' va '${userMult2}').`
          };
        }
      } else {
        if (expMult1 && userMult1 !== expMult1) {
          return {
            passed: false,
            feedback: `'${expRel.entity1}' tomondagi multiplisitiy noto'g'ri: '${expMult1}' bo'lishi kutilgan (Sizda: '${userMult1}').`
          };
        }
        if (expMult2 && userMult2 !== expMult2) {
          return {
            passed: false,
            feedback: `'${expRel.entity2}' tomondagi multiplisitiy noto'g'ri: '${expMult2}' bo'lishi kutilgan (Sizda: '${userMult2}').`
          };
        }
      }

      if (expRel.associationClass) {
        const hasAssoc = foundRel.associationClass || (foundRel.attributes && foundRel.attributes.length > 0);
        if (!hasAssoc) {
          return {
            passed: false,
            feedback: `'${expRel.entity1}' va '${expRel.entity2}' aloqasi o'ziga xos atributga (Association Class) ega bo'lishi shart!`
          };
        }
      }
    }

    // 3. Subklasslar (EER Specialisation) tekshiruvi
    const expSub = exp.subclasses;
    if (expSub) {
      const superNorm = this.norm(expSub.superclass);
      const userSubGroup = uSubclasses.find(s => this.norm(s.superclass) === superNorm);

      if (!userSubGroup) {
        return {
          passed: false,
          feedback: `'${expSub.superclass}' superklassi ostida subklasslar bog'lami ochilishi lozim! Yuqoridagi 'Subklass Bog'lami' tugmasini bosing.`
        };
      }

      if (expSub.constraint) {
        const expConstraintNorm = this.norm(expSub.constraint);
        const userConstraintNorm = this.norm(userSubGroup.constraint);
        if (userConstraintNorm !== expConstraintNorm) {
          return {
            passed: false,
            feedback: `'${expSub.superclass}' subklasslari cheklovi noto'g'ri: '${expSub.constraint}' bo'lishi kerak (Sizda: '${userSubGroup.constraint || "aniqlanmagan"}').`
          };
        }
      }

      if (expSub.subclasses) {
        for (const subName of expSub.subclasses) {
          const hasSub = (userSubGroup.subclasses || []).some(s => this.norm(s) === this.norm(subName));
          if (!hasSub) {
            return {
              passed: false,
              feedback: `'${expSub.superclass}' ostida '${subName}' subklassi yetishmayapti!`
            };
          }
        }
      }
    }

    return {
      passed: true,
      feedback: "A'lo darajada! Mijoz siz taqdim etgan EER diagrammani to'liq tasdiqladi va qabul qildi!"
    };
  }
};

// ============================================================================
// DRAW.IO XML GENERATOR (EXPORTER)
// ============================================================================

_scope.DRAWIO_EXPORTER = {
  exportToXml(diagram) {
    const entities = diagram.entities || [];
    const rels = diagram.relationships || [];

    let cells = '';
    let cellId = 2;
    const idMap = {};

    entities.forEach(ent => {
      const eId = `ent_${cellId++}`;
      idMap[ent.name] = eId;
      const x = ent.x || 100;
      const y = ent.y || 100;
      const w = ent.width || 160;
      const h = Math.max(80, 40 + (ent.attributes || []).length * 20);

      let attrLines = (ent.attributes || []).map(a => {
        let label = a.name;
        if (a.isPK) label += ' {PK}';
        else if (a.isPPK) label += ' {PPK}';
        return label;
      }).join('&#10;');

      const label = `&lt;b&gt;${ent.name}&lt;/b&gt;&#10;----------------&#10;${attrLines}`;
      const style = ent.isWeak
        ? "shape=rectangle;whiteSpace=wrap;html=1;fontFamily=Helvetica;strokeWidth=3;"
        : "shape=rectangle;whiteSpace=wrap;html=1;fontFamily=Helvetica;strokeWidth=1.5;";

      cells += `<mxCell id="${eId}" value="${label}" style="${style}" vertex="1" parent="1"><mxGeometry x="${x}" y="${y}" width="${w}" height="${h}" as="geometry"/></mxCell>\n`;
    });

    rels.forEach(rel => {
      const rId = `rel_${cellId++}`;
      const sourceId = idMap[rel.fromEntityName || rel.entity1] || '1';
      const targetId = idMap[rel.toEntityName || rel.entity2] || '1';
      const name = rel.name || '';
      const m1 = rel.mult1 || '1..1';
      const m2 = rel.mult2 || '1..*';

      cells += `<mxCell id="${rId}" value="${name}" style="endArrow=none;html=1;strokeWidth=1.5;" edge="1" parent="1" source="${sourceId}" target="${targetId}">
        <mxGeometry relative="1" as="geometry">
          <mxPoint as="offset"/>
        </mxGeometry>
      </mxCell>\n`;

      cells += `<mxCell id="lbl_${cellId++}" value="${m1}" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" vertex="1" connectable="0" parent="${rId}">
        <mxGeometry x="-0.8" relative="1" as="geometry"><mxPoint y="-10" as="offset"/></mxGeometry>
      </mxCell>\n`;
      cells += `<mxCell id="lbl_${cellId++}" value="${m2}" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" vertex="1" connectable="0" parent="${rId}">
        <mxGeometry x="0.8" relative="1" as="geometry"><mxPoint y="-10" as="offset"/></mxGeometry>
      </mxCell>\n`;
    });

    return `<?xml version="1.0" encoding="UTF-8"?>
<mxfile host="app.diagrams.net" version="24.0.0">
  <diagram name="EER Sxema">
    <mxGraphModel dx="1200" dy="800" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="1169" pageHeight="826">
      <root>
        <mxCell id="0"/>
        <mxCell id="1" parent="0"/>
        ${cells}
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>`;
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    EER_CATALOG: _scope.EER_CATALOG,
    EER_GRADER: _scope.EER_GRADER,
    DRAWIO_EXPORTER: _scope.DRAWIO_EXPORTER
  };
}
