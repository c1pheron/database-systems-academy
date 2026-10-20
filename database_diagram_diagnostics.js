/**
 * ============================================================================
 * DATABASE SYSTEMS ACADEMY — HIGH-PRECISION EER DIAGRAM DIAGNOSTICS ENGINE
 * Professor Atlas's Pinpoint Visual Diagram & Multiplicity Verifier
 * ============================================================================
 * EER va Relyatsion diagrammalarda aniq entitiy, atribut, {PK}, aloqa chizig'i,
 * multiplisitiya va subklasslar nomutanosibligini detallashtirilgan tarzda tahlil qiluvchi modul.
 */

(function () {
  'use strict';

  // Common entity typos dictionary for fuzzy matching
  const ENTITY_TYPOS = {
    'custmer': 'Customer',
    'cust': 'Customer',
    'clients': 'Client',
    'client': 'Customer',
    'sellers': 'Seller',
    'seler': 'Seller',
    'products': 'Product',
    'praduct': 'Product',
    'orders': 'Order',
    'ordr': 'Order',
    'users': 'User',
    'usr': 'User',
    'employees': 'Employee',
    'employe': 'Employee',
    'emp': 'Employee',
    'departments': 'Department',
    'departmnt': 'Department',
    'dept': 'Department',
    'courses': 'Course',
    'cours': 'Course',
    'students': 'Student',
    'studnt': 'Student',
    'orderitems': 'OrderItem',
    'orderitem': 'OrderItem',
    'items': 'OrderItem',
    'payments': 'Payment',
    'paymnt': 'Payment',
    'cards': 'BankCard',
    'card': 'BankCard',
    'accounts': 'Account',
    'acc': 'Account',
    'categories': 'Category',
    'category': 'Category',
    'invoices': 'Invoice',
    'suppliers': 'Supplier',
    'shipments': 'Shipment',
    'drivers': 'Driver',
    'vehicles': 'Vehicle',
    'branches': 'Branch',
    'transactions': 'Transaction'
  };

  const DatabaseDiagramDiagnostics = {
    // Normalization helper
    norm(str) {
      if (!str) return '';
      return str.toString().trim().toLowerCase().replace(/[^a-z0-9]/g, '');
    },

    // Multiplicity normalization helper
    normMult(m) {
      if (!m) return '';
      let s = m.toString().trim().toLowerCase();
      s = s.replace(/m|n/g, '*').replace(/:/g, '..');
      if (s === '1') return '1..1';
      if (s === '*') return '0..*';
      return s;
    },

    // HTML escape utility
    escapeHTML(str) {
      if (!str) return '';
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    },

    /**
     * Main diagnosis entry point
     * @param {object} userDiagram - { entities: [], relationships: [], subclasses: ... }
     * @param {object} question - question object containing expectedDiagram
     * @param {string} mode - 'eer' | 'relational' | 'auto'
     * @returns {object} - { passed, errors: [], passedItems: [], formattedHTML, formattedReport }
     */
    diagnose(userDiagram, question, mode = 'auto') {
      const isEn = typeof window !== 'undefined' && window.I18N && window.I18N.getLang() === 'en';
      const errors = [];
      const passedItems = [];

      if (!question || !question.expectedDiagram) {
        return {
          passed: true,
          errors: [],
          passedItems: [{ name: isEn ? "Status" : "Holat", detail: isEn ? "Freeform workspace" : "Erkin ish maydoni" }],
          formattedHTML: this.formatSuccessHTML(isEn),
          formattedReport: isEn ? "Diagram accepted." : "Diagramma qabul qilindi."
        };
      }

      const expected = question.expectedDiagram;
      const uEntities = (userDiagram && userDiagram.entities) || [];
      const uRels = (userDiagram && userDiagram.relationships) || [];
      const uSubclasses = userDiagram && userDiagram.subclasses;

      // 0. EMPTY CANVAS CHECK
      if (uEntities.length === 0) {
        const emptyErr = {
          category: 'empty',
          target: isEn ? 'Canvas' : 'Doska',
          title: isEn ? 'Canvas is completely empty!' : "Doska bo'm-bo'sh!",
          message: isEn 
            ? "No entities were found on the canvas. Please place required entities from the shapes palette."
            : "Polotnoda birorta ham entitiy topilmadi. Iltimos, chapdagi shakllar panelidan kerakli entitiylarni doskaga olib chiqing.",
          userVal: isEn ? 'Empty canvas' : "Bo'sh doska",
          expectedVal: (expected.entities || []).map(e => e.name || e).join(', '),
          fix: isEn 
            ? "Drag and drop the entities onto the canvas, configure their names, and connect them with relationship lines."
            : "Shakllar panelidan to'rtburchak entitiylarni doskaga torting, nomlarini yozing va aloqa chizig'i bilan bog'lang."
        };
        errors.push(emptyErr);

        return {
          passed: false,
          errors,
          passedItems,
          formattedHTML: this.formatReportHTML({ passed: false, errors, passedItems }, isEn),
          formattedReport: this.formatReportText({ passed: false, errors, passedItems }, isEn)
        };
      }

      const isWeek2 = (mode === 'week2' || mode === 'eer_w2') || 
        (typeof window !== 'undefined' && (
          window.IS_WEEK2 || 
          (window.location && window.location.pathname && window.location.pathname.includes('week2')) ||
          (window.location && window.location.href && window.location.href.includes('week2')) ||
          (window.EER_CATALOG && window.EER_CATALOG.module && window.EER_CATALOG.module.includes('Week 2'))
        )) || 
        Boolean(question && (question.isWeek2 || (question.sector && question.multRequired === false)));

      // 1. CHECK REQUIRED ENTITIES & PRIMARY KEYS
      this.checkEntities(uEntities, expected.entities || [], errors, passedItems, isEn);

      // 2. CHECK RELATIONSHIPS & MULTIPLICITIES (Requires '+' in Week 2 mode)
      this.checkRelationships(uEntities, uRels, expected.relationships || [], errors, passedItems, isEn, isWeek2);

      // 3. CHECK FOREIGN KEYS {FK} (Week 2 EER / Relational Schema)
      if (isWeek2) {
        this.checkForeignKeys(uEntities, uRels, expected.relationships || [], expected.entities || [], errors, passedItems, isEn);
      }

      // 4. CHECK SUBCLASSES & EER SPECIALISATION (if present in expectedDiagram)
      if (expected.subclasses) {
        this.checkSubclasses(uEntities, uSubclasses, expected.subclasses, errors, passedItems, isEn);
      }

      const passed = errors.length === 0;

      return {
        passed,
        errors,
        passedItems,
        formattedHTML: passed 
          ? this.formatSuccessHTML(isEn, passedItems, isWeek2) 
          : this.formatReportHTML({ passed: false, errors, passedItems }, isEn),
        formattedReport: this.formatReportText({ passed, errors, passedItems }, isEn)
      };
    },

    // 1. ENTITIES AUDIT
    checkEntities(uEntities, expEntities, errors, passedItems, isEn) {
      for (const expEnt of expEntities) {
        const expName = typeof expEnt === 'string' ? expEnt : expEnt.name;
        const expPk = typeof expEnt === 'object' ? expEnt.pk : null;
        const expWeak = typeof expEnt === 'object' ? !!expEnt.isWeak : false;

        const normExp = this.norm(expName);

        // Exact match search
        let found = uEntities.find(ue => this.norm(ue.name) === normExp);

        // Fuzzy match search for typos
        if (!found) {
          const fuzzy = uEntities.find(ue => {
            const uNorm = this.norm(ue.name);
            if (ENTITY_TYPOS[uNorm] && this.norm(ENTITY_TYPOS[uNorm]) === normExp) return true;
            if (uNorm.startsWith(normExp) || normExp.startsWith(uNorm)) return true;
            return false;
          });

          if (fuzzy) {
            errors.push({
              category: 'entity_typo',
              target: `${isEn ? 'Entity Name' : 'Entitiy Nomi'}: ${fuzzy.name}`,
              title: isEn ? `Typo in entity name '${fuzzy.name}'` : `'${fuzzy.name}' entitiy nomida orfografik xatolik`,
              message: isEn 
                ? `You named the entity '${fuzzy.name}', but the architectural requirement specifies '${expName}'.`
                : `Siz entitiyni '${fuzzy.name}' deb nomlagansiz, lekin talab bo'yicha u aniq '${expName}' deb nomlanishi shart.`,
              userVal: fuzzy.name,
              expectedVal: expName,
              fix: isEn 
                ? `Rename entity '${fuzzy.name}' to '${expName}'.`
                : `'${fuzzy.name}' kartochkasi sarlavhasiga ikki marta bosib, nomini '${expName}' ga o'zgartiring.`
            });
            continue;
          } else {
            errors.push({
              category: 'entity_missing',
              target: `${isEn ? 'Missing Entity' : 'Yetishmayotgan Entitiy'}: ${expName}`,
              title: isEn ? `Entity '${expName}' is missing from canvas` : `'${expName}' entitiysi polotnoda topilmadi`,
              message: isEn 
                ? `The scenario requires entity '${expName}', but it was not found on the canvas.`
                : `Mijoz talabidagi asosiy '${expName}' entitiysi polotnoda mavjud emas.`,
              userVal: isEn ? 'Not created' : "Qo'shilmagan",
              expectedVal: expName,
              fix: isEn 
                ? `Add an entity block to the canvas from the shapes palette and label it '${expName}'.`
                : `Chapdagi shakllar panelidan to'rtburchakni doskaga sudrab o'ting va unga '${expName}' nomini bering.`
            });
            continue;
          }
        }

        // Entity exists! Check its Primary Key {PK}
        // Strict Primary Key {PK} check:
        if (expPk) {
          const matchingPkAttr = (found.attributes || []).find(a => this.norm(a.name) === this.norm(expPk));
          if (!matchingPkAttr) {
            errors.push({
              category: 'pk_missing_attribute',
              target: `${isEn ? 'Primary Key Attribute' : 'Birlamchi Kalit Atributi'}: ${expName}.${expPk}`,
              title: isEn ? `Primary Key attribute '${expPk}' missing in '${expName}'` : `'${expName}' kartasida '${expPk}' Birlamchi Kalit atributi topilmadi!`,
              message: isEn 
                ? `Entity '${expName}' must contain primary key attribute '${expPk}'.`
                : `'${expName}' entitiyida unikal identifikator bo'lgan '${expPk}' atributi mavjud bo'lishi shart.`,
              proof: isEn 
                ? `Entity Integrity Rule: Every relational table requires a unique identifier attribute. '${expPk}' is designated as the Primary Key for '${expName}'.`
                : `Relyatsion Model Qoidasi (Entity Integrity): Har bir jadvalda yagona identifikator bo'lgan atribut bo'lishi shart. '${expName}' uchun '${expPk}' Birlamchi Kalit hisoblanadi.`,
              userVal: isEn ? 'Attribute missing' : "Atribut mavjud emas",
              expectedVal: `${expPk} {PK}`,
              fix: isEn 
                ? `Add attribute '${expPk}' to '${expName}' and mark it {PK}.`
                : `'${expName}' kartasiga '➕ Atribut' orqali '${expPk}' ni qo'shing va uni {PK} deb belgilang.`
            });
          } else if (!matchingPkAttr.isPK) {
            errors.push({
              category: 'pk_not_marked',
              target: `${isEn ? 'Primary Key' : 'Birlamchi Kalit {PK}'}: ${expName}.${expPk}`,
              title: isEn ? `'${expPk}' is not marked as {PK} on '${expName}'` : `'${expName}' kartasida '${expPk}' Birlamchi Kalit {PK} deb belgilanmagan!`,
              message: isEn 
                ? `Attribute '${expPk}' exists in '${expName}', but its badge is not set to {PK}.`
                : `'${expName}' kartasida '${expPk}' atributi bor, lekin uning yonidagi nishon {PK} qilib belgilanmagan (Hozirda: ${matchingPkAttr.isFK ? '{FK}' : (matchingPkAttr.isPPK ? '{PPK}' : 'Oddiy')}).`,
              proof: isEn 
                ? `Primary Key constraint: '${expPk}' must be designated as the Primary Key {PK} to serve as the unique row identifier and support relational integrity.`
                : `Relyatsion Butunlik Isboti: '${expPk}' jadvaldagi barcha qatorlarni unikal tarzda ajratib turuvchi Birlamchi Kalit {PK} bo'lishi shart. Busiz relyatsion sxema yaroqsiz hisoblanadi! '${expPk}' yonidagi tugmani bosib, uni {PK} holatiga o'tkazing.`,
              userVal: matchingPkAttr.isFK ? "{FK}" : (matchingPkAttr.isPPK ? "{PPK}" : (isEn ? "Plain attribute" : "Oddiy atribut")),
              expectedVal: `${expPk} {PK}`,
              fix: isEn 
                ? `Click the badge next to '${expPk}' on '${expName}' to toggle it to {PK}.`
                : `'${expName}' kartasida '${expPk}' atributi yonidagi tugmani bosib, uni {PK} holatiga keltiring.`
            });
          } else {
            passedItems.push({
              name: `${expName} {PK}`,
              detail: expPk
            });
          }
        }

        // Check Weak Entity status
        if (expWeak && !found.isWeak) {
          errors.push({
            category: 'weak_entity',
            target: `${isEn ? 'Entity Kind' : 'Entitiy Turi'}: ${expName}`,
            title: isEn ? `'${expName}' should be a Weak Entity` : `'${expName}' Zaif Entitiy (Weak Entity) bo'lishi kerak`,
            message: isEn 
              ? `'${expName}' cannot exist without its owner entity and lacks a full independent key.`
              : `'${expName}' o'z ota entitiysisiz mustaqil mavjud bo'la olmaydi (kompozit kalitga ega zaif entitiy).`,
            proof: isEn
              ? `Weak entities possess existence dependency and cannot be uniquely identified by their own attributes alone. They must be styled as a double-bordered rectangle with {W} enabled.`
              : `Zaif entitiy mavjudlik bo'yicha ota entitiyaga to'liq bog'liq (Existence Dependent) bo'lib, o'zining mustaqil birlamchi kalitiga ega emas. Shuning uchun uning kartochkasida {W} (Zaif Entitiy / ikki qavat hoshiya) rejimini yoqish shart!`,
            userVal: isEn ? 'Strong Entity (Single line)' : "Mustaqil entitiy (oddiy to'rtburchak)",
            expectedVal: isEn ? 'Weak Entity (Double line)' : "Zaif entitiy (qo'shaloq to'rtburchak)",
            fix: isEn 
              ? `Toggle the 'Weak Entity' switch on '${expName}' card.`
              : `'${expName}' kartochkasidagi 'Zaif Entitiy' (qo'shaloq hoshiya) tugmasini yoqing.`
          });
        }

        // Check Partial Primary Key {PPK} for Weak Entity attributes
        const expPPKAttrs = [
          ...((expEnt && expEnt.ppk) ? (Array.isArray(expEnt.ppk) ? expEnt.ppk : [expEnt.ppk]) : []),
          ...((expEnt && expEnt.attributes) ? expEnt.attributes.filter(a => a.isPPK).map(a => a.name) : [])
        ];
        if (expPPKAttrs.length > 0) {
          for (const expPPK of expPPKAttrs) {
            const userAttr = (found.attributes || []).find(a => this.norm(a.name) === this.norm(expPPK));
            if (!userAttr || !userAttr.isPPK) {
              errors.push({
                category: 'ppk_missing',
                target: `${isEn ? 'Partial Key {PPK}' : 'Qisman Kalit {PPK}'}: ${expName}.${expPPK}`,
                title: isEn ? `Partial Primary Key {PPK} not set on '${expPPK}'` : `'${expName}' kartasida '${expPPK}' qisman kalit {PPK} sifatida belgilanmagan`,
                message: isEn 
                  ? `In weak entities, discriminators must be designated as {PPK} (Partial Primary Key).`
                  : `Zaif entitiylarda alohida qatorlarni farqlovchi atribut {PPK} (Partial Primary Key / qisman kalit) sifatida belgilanishi shart.`,
                proof: isEn 
                  ? `A weak entity's partial key (discriminator) combined with the owner entity's primary key forms the full composite primary key in relational tables. Without {PPK}, relational transformation cannot build the composite primary key.`
                  : `Zaif entitiyaning qisman kaliti (diskriminatori) ota entitiyaning birlamchi kaliti bilan birgalikda to'liq kompozit kalit hosil qiladi. Diagrammada {PPK} belgilanmasa, relyatsion sxemaga o'tkazishda jadvallar xato shakllanadi!`,
                userVal: isEn ? "Regular attribute / PK" : "Oddiy atribut yoki noto'g'ri PK",
                expectedVal: `${expPPK} {PPK}`,
                fix: isEn 
                  ? `Click on '${expPPK}' in '${expName}' and select {PPK}.`
                  : `'${expName}' kartasidagi '${expPPK}' atributi yonidagi {PPK} tugmasini bosing.`
              });
            }
          }
        }

        passedItems.push({
          name: isEn ? "Entity" : "Entitiy",
          detail: expName
        });
      }
    },

    // 2. RELATIONSHIPS & MULTIPLICITY AUDIT
    checkRelationships(uEntities, uRels, expRels, errors, passedItems, isEn, isWeek2 = false) {
      for (const expR of expRels) {
        const e1Norm = this.norm(expR.entity1);
        const e2Norm = this.norm(expR.entity2);

        // Find relationship in either direction
        const foundRel = uRels.find(ur => {
          const uFrom = this.norm(ur.fromEntityName || ur.entity1);
          const uTo = this.norm(ur.toEntityName || ur.entity2);
          return (uFrom === e1Norm && uTo === e2Norm) || (uFrom === e2Norm && uTo === e1Norm);
        });

        const relLabel = `${expR.entity1} ⟷ ${expR.entity2}`;

        if (!foundRel) {
          // Check if user connected entity1 to an incorrect entity instead
          const wrongRel = uRels.find(ur => {
            const uFrom = this.norm(ur.fromEntityName || ur.entity1);
            const uTo = this.norm(ur.toEntityName || ur.entity2);
            return uFrom === e1Norm || uTo === e1Norm || uFrom === e2Norm || uTo === e2Norm;
          });

          if (wrongRel && (this.norm(wrongRel.fromEntityName || wrongRel.entity1) !== e2Norm && this.norm(wrongRel.toEntityName || wrongRel.entity2) !== e2Norm)) {
            const fromN = wrongRel.fromEntityName || wrongRel.entity1;
            const toN = wrongRel.toEntityName || wrongRel.entity2;
            errors.push({
              category: 'rel_wrong_entity',
              target: `${isEn ? 'Relationship' : 'Aloqa'}: ${relLabel}`,
              title: isEn ? `Misdirected relationship: ${fromN} ⟷ ${toN}` : `Noto'g'ri entitiylar bog'langan: ${fromN} ⟷ ${toN}`,
              message: isEn 
                ? `You connected '${fromN}' to '${toN}', but business rules require a direct relationship between '${expR.entity1}' and '${expR.entity2}'.`
                : `Siz '${fromN}' va '${toN}' ni o'zaro bog'lagansiz. Aslida esa biznes arxitekturasi bo'yicha '${expR.entity1}' to'g'ridan-to'g'ri '${expR.entity2}' bilan bog'lanishi shart!`,
              userVal: `${fromN} ⟷ ${toN}`,
              expectedVal: relLabel,
              fix: isEn 
                ? `Delete the incorrect line and connect '${expR.entity1}' directly to '${expR.entity2}'.`
                : `Noto'g'ri chiziqni o'chiring va '${expR.entity1}' dan '${expR.entity2}' ga to'g'ridan-to'g'ri aloqa chizig'ini torting.`
            });
          } else {
            errors.push({
              category: 'rel_missing',
              target: `${isEn ? 'Missing Connection' : "Aloqa Chizig'i Yetishmayapti"}: ${relLabel}`,
              title: isEn ? `No relationship line between '${expR.entity1}' and '${expR.entity2}'` : `'${expR.entity1}' va '${expR.entity2}' o'rtasida aloqa chizig'i yo'q`,
              message: isEn 
                ? `These two entities must be connected according to business specifications.`
                : `Ushbu ikki entitiy o'rtasida munosabat mavjud, lekin ularni bog'lovchi chiziq chizilmagan.`,
              userVal: isEn ? 'Disconnected' : "Bog'lanmagan",
              expectedVal: relLabel,
              fix: isEn 
                ? `Select the 'Relationship Line' tool or drag between connector ports to link '${expR.entity1}' and '${expR.entity2}'.`
                : `Shakllar panelidagi 'Aloqa Chizig'i' vositasi yordamida '${expR.entity1}' va '${expR.entity2}' kartochkalarini bir-biriga ulang.`
            });
          }
          continue;
        }

        // Connection exists!
        // In Week 2 EER mode: verify identifying mode AND strictly enforce that multiplicity is converted to '+'!
        if (isWeek2) {
          if (expR.isIdentifying && !foundRel.isIdentifying) {
            errors.push({
              category: 'rel_not_identifying',
              target: `${isEn ? 'Identifying Relationship' : 'Identifikatsion Aloqa'}: ${relLabel}`,
              title: isEn ? `Identifying relationship required between '${expR.entity1}' and '${expR.entity2}'` : `'${expR.entity1}' va '${expR.entity2}' o'rtasida identifikatsion aloqa talab etiladi`,
              message: isEn 
                ? `Weak entities depend on their parent entity via an identifying relationship (double diamond or double line).`
                : `Zaif entitiy o'z ota entitiysiga identifikatsion (identifying) aloqa orqali bog'lanishi shart (qo'sh chiziqli yoki ikki qavat rombli munosabat).`,
              proof: isEn 
                ? `A weak entity has existence dependency and cannot be uniquely identified without the primary key of its parent entity. Thus, the relationship that connects them must be identifying.`
                : `Zaif entitiy o'zining mustaqil PK ga ega emasligi tufayli mavjudlik bo'yicha ota entitiyaga to'liq qaram (Existence Dependent) hisoblanadi. Shuning uchun ularni bog'lovchi munosabat oddiy emas, Identifikatsion (Identifying Relationship) bo'lishi shart!`,
              userVal: isEn ? "Non-identifying (single line)" : "Oddiy aloqa (bir chiziqli)",
              expectedVal: isEn ? "Identifying (double line / identifying diamond)" : "Identifikatsion aloqa (qo'sh chiziqli)",
              fix: isEn 
                ? `Click the relationship line or diamond and toggle 'Identifying' on.`
                : `Aloqa chizig'ini yoki rombini tanlab, 'Identifikatsion' (Identifying) rejimini yoqing.`
            });
          }

          // Check Multiplicity in Week 2: Must be converted to '+' on both ends!
          const m1 = (foundRel.mult1 || '').trim();
          const m2 = (foundRel.mult2 || '').trim();
          if (m1 !== '+' || m2 !== '+') {
            errors.push({
              category: 'eer_mult_must_be_plus',
              target: `${isEn ? 'EER Multiplicity' : 'EER Multiplisitiya'}: ${relLabel}`,
              title: isEn ? `Multiplicity must be converted to '+'` : `Multiplicity '+' ga o'zgartirilishi shart!`,
              message: isEn
                ? `In Week 2 EER diagrams, traditional ER multiplicity bounds (${m1 || 'empty'} ⟷ ${m2 || 'empty'}) must not remain. You must convert both ends to '+' before submitting for verification.`
                : `2-Hafta EER diagrammasida an'anaviy ER multiplisitiyalari (${m1 || "bo'sh"} ⟷ ${m2 || "bo'sh"}) qolmasligi shart! Relyatsion modelga o'tkazishdan oldin aloqa chizig'idagi har ikkala tomon multiplisitiyasini '+' belgisiga o'zgartiring.`,
              proof: isEn
                ? `Pedagogical & Architectural Proof: In EER diagrams and relational schema mapping, lower/upper cardinality bounds (min..max) are superseded by the standard multiplicity-free '+' connector. Leaving ER multiplicities creates semantic conflict when mapping to relational foreign keys. Both ends of the relationship must be converted to '+'.`
                : `Pedagogik va Me'moriy Isbot: EER va relyatsion sxemaga o'tkazishda min..max chegaralari o'rniga yagona '+' belgisi qo'yiladi. Eski ER multiplisitiyalarini qoldirish relyatsion jadvallarga xaritalashda chalkashlik tug'diradi. Shu sababli relyatsion modelga o'tishdan oldin bog'lanishlar umumiy EER aloqasi ('+') ga keltirilishi shart!`,
              userVal: `${m1 || (isEn ? 'empty' : "bo'sh")} ⟷ ${m2 || (isEn ? 'empty' : "bo'sh")}`,
              expectedVal: `+ ⟷ +`,
              fix: isEn
                ? `Click the multiplicity badge on the relationship line and click '⚡ Set '+' on Both Ends' or select '+' for each side.`
                : `Chiziqdagi multiplisitiya nishonini bosing va '⚡ Ikkala tomonni '+' qilish' tugmasini bosing yoki har ikki tomonni '+' ga o'tkazing.`
            });
          } else {
            passedItems.push({
              name: `${isEn ? 'EER Link (+)' : "EER Bog'lanish (+)"}: ${relLabel}`,
              detail: '+ ⟷ +'
            });
          }
          continue;
        }

        // Audit Multiplicities (Week 1 / ER Mode)
        if (expR.mult1 && expR.mult2) {
          const uFrom = this.norm(foundRel.fromEntityName || foundRel.entity1);
          let uM1 = foundRel.mult1;
          let uM2 = foundRel.mult2;

          // Align user orientation with expected orientation
          let isReversed = false;
          if (e1Norm !== e2Norm && uFrom === e2Norm) {
            uM1 = foundRel.mult2;
            uM2 = foundRel.mult1;
            isReversed = true;
          }

          const normUserM1 = this.normMult(uM1);
          const normUserM2 = this.normMult(uM2);
          const normExpM1 = this.normMult(expR.mult1);
          const normExpM2 = this.normMult(expR.mult2);

          // Check if unconfigured ('+' or '?' or empty)
          const isUnset = !uM1 || uM1 === '+' || uM1 === '?' || !uM2 || uM2 === '+' || uM2 === '?' || !normUserM1 || !normUserM2;

          if (isUnset) {
            errors.push({
              category: 'mult_unset',
              target: `${isEn ? 'Multiplicity' : 'Multiplisitiya'}: ${relLabel}`,
              title: isEn ? `Multiplicity constraints not set on ${relLabel}` : `${relLabel} aloqasida multiplisitiya o'rnatilmagan`,
              message: isEn 
                ? `The connector line exists, but multiplicity boundaries (e.g. 1..1, 0..*, 1..*) are still unconfigured.`
                : `Aloqa chizig'i tortilgan, ammo uning ikki tomonidagi multiplisitiya chegaralari (1..1, 0..*, 1..*) hali tanlanmagan.`,
              proof: isEn
                ? `Every binary ER relationship requires explicit lower and upper bounds (min..max) on both ends to specify minimum participation and maximum cardinality.`
                : `Har bir binar ER munosabatida ikkala tomonga ham minimal va maksimal ishtirok chegaralarini (min..max) o'rnatish shart. Aks holda relyatsion sxema yaratishda munosabat turini (1:1, 1:N yoki M:N) aniqlab bo'lmaydi.`,
              userVal: `[ + ] / ?`,
              expectedVal: `${expR.entity1} (${expR.mult1}) ⟷ ${expR.entity2} (${expR.mult2})`,
              fix: isEn 
                ? `Click the [ + ] badge on the connector line to choose the correct multiplicity for both ends.`
                : `Chiziqdagi [ + ] nishonini bosing va har ikki tomon uchun to'g'ri multiplisitiya qiymatini tanlang.`
            });
            continue;
          }

          // Check if reversed (student placed values on the wrong ends)
          if (e1Norm !== e2Norm && normUserM1 === normExpM2 && normUserM2 === normExpM1 && normExpM1 !== normExpM2) {
            const proof = isEn 
              ? `Orientation Proof: In ER diagrams, the multiplicity placed next to '${expR.entity1}' describes how many '${expR.entity1}' records can associate with ONE '${expR.entity2}'. Reversing these values inverts the business dependency and leads to misplacing Foreign Keys in relational tables.`
              : `Yo'nalish Isboti: ER diagrammalarda '${expR.entity1}' yonidagi multiplisitiya bitta '${expR.entity2}' ushbu '${expR.entity1}' dan nechta bo'lishini ko'rsatadi. Tomonlarni teskari qo'yish munosabat mantig'ini buzadi va relyatsion modelda Tashqi Kalit (Foreign Key) ning teskari jadvalga tushib qolishiga olib keladi!`;

            errors.push({
              category: 'mult_reversed',
              target: `${isEn ? 'Reversed Multiplicity' : 'Teskari Multiplisitiya'}: ${relLabel}`,
              title: isEn ? `Multiplicity orientation inverted on ${relLabel}` : `${relLabel} aloqasida multiplisitiya tomonlari almashtirib qo'yilgan!`,
              message: isEn 
                ? `You assigned '${expR.mult2}' to '${expR.entity1}' and '${expR.mult1}' to '${expR.entity2}'. The logic is inverted!`
                : `Siz '${expR.entity1}' tomoniga '${expR.mult2}', '${expR.entity2}' tomoniga esa '${expR.mult1}' qo'ygansiz. Munosabat mantiqi teskari bo'lib qolgan!`,
              proof: proof,
              userVal: `${expR.entity1} (${uM1}) ⟷ ${expR.entity2} (${uM2})`,
              expectedVal: `${expR.entity1} (${expR.mult1}) ⟷ ${expR.entity2} (${expR.mult2})`,
              fix: isEn 
                ? `Swap the multiplicity values: '${expR.entity1}' side must be (${expR.mult1}), and '${expR.entity2}' side must be (${expR.mult2}).`
                : `Tomonlarni almashtiring: '${expR.entity1}' tomoniga (${expR.mult1}), '${expR.entity2}' tomoniga esa (${expR.mult2}) qiymatini belgilang.`
            });
            continue;
          }

          // Check specific end mismatch
          let m1Matches = normUserM1 === normExpM1;
          let m2Matches = normUserM2 === normExpM2;

          // For recursive self-loop relationships, orientation is symmetrical
          if (e1Norm === e2Norm && (!m1Matches || !m2Matches)) {
            if (normUserM1 === normExpM2 && normUserM2 === normExpM1) {
              m1Matches = true;
              m2Matches = true;
            }
          }

          if (!m1Matches || !m2Matches) {
            let specificReason = "";
            if (!m1Matches && !m2Matches) {
              specificReason = isEn 
                ? `Both ends have mismatched bounds.`
                : `Har ikkala tomon multiplisitiyasi ham noto'g'ri tanlangan.`;
            } else if (!m1Matches) {
              specificReason = isEn 
                ? `The bound on '${expR.entity1}' side is incorrect (Found: '${uM1}', Expected: '${expR.mult1}').`
                : `'${expR.entity1}' tomonidagi chegara noto'g'ri (Sizda: '${uM1}', Kutilgan: '${expR.mult1}').`;
            } else {
              specificReason = isEn 
                ? `The bound on '${expR.entity2}' side is incorrect (Found: '${uM2}', Expected: '${expR.mult2}').`
                : `'${expR.entity2}' tomonidagi chegara noto'g'ri (Sizda: '${uM2}', Kutilgan: '${expR.mult2}').`;
            }

            // Generate deep pedagogical proof proving WHY user's choice is invalid and WHY expected is required
            const proof = this.generateMultiplicityProof(
              expR.entity1, expR.entity2,
              uM1, uM2,
              expR.mult1, expR.mult2,
              m1Matches, m2Matches,
              isEn
            );

            // Pedagogical explanation for common business cases
            let pedagogicalTip = "";
            if (normExpM1 === '1..1' && normExpM2 === '0..*') {
              pedagogicalTip = isEn 
                ? `Each '${expR.entity2}' belongs to exactly ONE '${expR.entity1}' (1..1), while ONE '${expR.entity1}' can have zero or more '${expR.entity2}' (0..*).`
                : `Har bir '${expR.entity2}' aniq BITTA '${expR.entity1}' ga tegishli (1..1). Bitta '${expR.entity1}' esa 0 yoki undan ko'p '${expR.entity2}' ga ega bo'lishi mumkin (0..*).`;
            } else if (normExpM1 === '1..1' && normExpM2 === '1..*') {
              pedagogicalTip = isEn 
                ? `Mandatory 1:N: Each '${expR.entity2}' must belong to ONE '${expR.entity1}' (1..1), and each '${expR.entity1}' MUST have at least one or more '${expR.entity2}' (1..*).`
                : `Majburiy 1:N: Har bir '${expR.entity2}' bitta '${expR.entity1}' ga tegishli (1..1), va har bir '${expR.entity1}' kamida bitta yoki undan ko'p '${expR.entity2}' ga ega bo'lishi shart (1..*).`;
            } else if (normExpM1 === '1..1' && normExpM2 === '0..1') {
              pedagogicalTip = isEn 
                ? `1:1 Relationship: An instance of '${expR.entity1}' may optionally link to at most one '${expR.entity2}' (0..1).`
                : `1:1 Aloqa: '${expR.entity1}' ixtiyoriy ravishda ko'pi bilan bitta '${expR.entity2}' ga ulanishi mumkin (0..1).`;
            }

            errors.push({
              category: 'mult_mismatch',
              target: `${isEn ? 'Multiplicity Mismatch' : 'Multiplisitiya Nomutanosibligi'}: ${relLabel}`,
              title: isEn ? `Multiplicity mismatch on ${relLabel}` : `${relLabel} aloqasida multiplisitiya noto'g'ri`,
              message: `${specificReason} ${pedagogicalTip}`.trim(),
              proof: proof,
              userVal: `${expR.entity1} (${uM1 || '?'}) ⟷ ${expR.entity2} (${uM2 || '?'})`,
              expectedVal: `${expR.entity1} (${expR.mult1}) ⟷ ${expR.entity2} (${expR.mult2})`,
              fix: isEn 
                ? `Set '${expR.entity1}' to (${expR.mult1}) and '${expR.entity2}' to (${expR.mult2}).`
                : `'${expR.entity1}' tomoniga (${expR.mult1}), '${expR.entity2}' tomoniga esa (${expR.mult2}) ni tanlang.`
            });
            continue;
          }

          passedItems.push({
            name: `${isEn ? 'Multiplicity' : 'Multiplisitiya'}: ${relLabel}`,
            detail: `${expR.mult1} ⟷ ${expR.mult2}`
          });
        }
      }
    },

    // Deep Pedagogical Multiplicity Domain Proof Generator
    generateMultiplicityProof(entity1, entity2, uM1, uM2, expM1, expM2, m1Matches, m2Matches, isEn) {
      const proofs = [];

      const getSideProof = (sideEnt, otherEnt, userVal, expectedVal) => {
        const u = this.normMult(userVal);
        const exp = this.normMult(expectedVal);

        if (u === exp) return null;

        // 0..* chosen instead of 1..* (Optional Many instead of Mandatory Many)
        if (exp === '1..*' && u === '0..*') {
          return isEn
            ? `Why is '0..*' incorrect for '${sideEnt}'? Choosing '0..*' (Optional Many) implies that '${otherEnt}' can exist without even a single '${sideEnt}'. However, the business logic dictates that participation is strictly MANDATORY (min=1) — every registered '${otherEnt}' must maintain at least one '${sideEnt}'. Allowing 0 would create orphaned or invalid records. Hence, the lower bound must be 1, requiring '1..*'!`
            : `Nega '${sideEnt}' tomoniga '0..*' xato? Agar siz '0..*' (Ixtiyoriy ko'plik) qo'ysangiz, bu '${otherEnt}' tizimda birorta ham '${sideEnt}' ga ega bo'lmasdan mavjud bo'lishi mumkinligini anglatadi. Ammo mazkur soha biznes qoidasiga ko'ra, har bir '${otherEnt}' kamida bitta '${sideEnt}' ga ega bo'lishi QAT'IY MAJBURIYDIR (Majburiy ishtirok - Mandatory participation: min=1). Aks holda bazada harakatsiz yoki asossiz yetim yozuvlar yig'ilib qoladi. Shu sababli minimal chegara 1 bo'lib, to'g'ri qiymat '1..*' bo'lishi shart!`;
        }

        // 1..* chosen instead of 0..* (Mandatory Many instead of Optional Many)
        if (exp === '0..*' && u === '1..*') {
          return isEn
            ? `Why is '1..*' incorrect for '${sideEnt}'? Choosing '1..*' (Mandatory Many) forces every single '${otherEnt}' to immediately possess at least one '${sideEnt}'. In reality, a newly registered or currently idle '${otherEnt}' naturally has zero '${sideEnt}' records initially (Optional participation: min=0). Forcing '1..*' would reject creating new '${otherEnt}' records in the database. Hence, the lower bound must be 0, requiring '0..*'!`
            : `Nega '${sideEnt}' tomoniga '1..*' xato? Agar siz '1..*' (Majburiy ko'plik) qo'ysangiz, tizimdagi har bitta '${otherEnt}' doimo kamida bitta '${sideEnt}' ga ega bo'lishi SHART bo'lib qoladi. Real hayotda esa yangi ro'yxatdan o'tgan yoki bo'sh turgan '${otherEnt}' da hali birorta ham '${sideEnt}' bo'lmasligi mutlaqo tabiiy (Ixtiyoriy ishtirok - Optional participation: min=0). Agar '1..*' qo'yilsa, tizim yangi '${otherEnt}' ni kiritishga ruxsat bermay xatolik beradi. Shu sababli minimal chegara 0 bo'lib, to'g'ri multiplisitiya '0..*' bo'ladi!`;
        }

        // Many (* or 1..*) chosen instead of 1..1
        if (exp === '1..1' && (u === '1..*' || u === '0..*')) {
          return isEn
            ? `Why is Many ('*') incorrect for '${sideEnt}'? Setting the upper bound to '*' implies that a single '${otherEnt}' can link to multiple '${sideEnt}' records. But according to domain specifications, each '${otherEnt}' belongs strictly to at most ONE '${sideEnt}' (max=1). A scalar Foreign Key enforces this; allowing '*' would break scalar integrity. Hence, the bound must strictly be '1..1'!`
            : `Nega '${sideEnt}' tomoniga ko'plik ('*') xato? Siz yuqori chegarani ko'plik qilib belgilagansiz. Bu bitta '${otherEnt}' bir vaqtning o'zida bir nechta '${sideEnt}' ga birikishi mumkinligini anglatadi. Vaholanki, arxitektura qoidasida har bir yozuv faqat va faqat YAGONA bitta '${sideEnt}' ga tegishli bo'lishi qat'iy talab etiladi (max=1). Ko'plik qo'yilsa, relyatsion jadvalda dublikatlar va nomutanosibliklar kelib chiqadi. Shu sababli to'g'ri chegara '1..1' bo'lishi shart!`;
        }

        // 0..1 chosen instead of 1..1 (Optional One instead of Mandatory One)
        if (exp === '1..1' && u === '0..1') {
          return isEn
            ? `Why is '0..1' incorrect for '${sideEnt}'? A lower bound of 0 implies '${otherEnt}' can exist without any '${sideEnt}' (nullable Foreign Key). However, the business rule strictly mandates that every '${otherEnt}' MUST belong to a valid '${sideEnt}' (NOT NULL constraint). To prevent orphaned records, participation must be mandatory: '1..1'!`
            : `Nega '${sideEnt}' tomoniga '0..1' xato? Siz minimal chegarani 0 (Ixtiyoriy) qilib belgilagansiz. Bu '${otherEnt}' hech qanday '${sideEnt}' ga biriktirilmasdan ham mustaqil mavjud bo'la oladi (Foreign Key NULL bo'lishi mumkin) degani. Ammo biznes qoidasida har bir '${otherEnt}' muayyan '${sideEnt}' ga biriktirilishi MAJBURIY qilib qo'yilgan (NOT NULL FK). Bog'lanmagan yozuvlar yetim qolmasligi uchun minimal chegara 1, ya'ni '1..1' bo'lishi shart!`;
        }

        // 1..1 chosen instead of 0..1 (Mandatory One instead of Optional One)
        if (exp === '0..1' && u === '1..1') {
          return isEn
            ? `Why is '1..1' incorrect for '${sideEnt}'? A mandatory bound of '1..1' demands that every '${otherEnt}' must immediately possess an '${sideEnt}'. In this domain, this link is purely optional (e.g., an unassigned card or pending status). Forcing '1..1' blocks creating '${otherEnt}' before '${sideEnt}' exists. Hence, the bound must be '0..1'!`
            : `Nega '${sideEnt}' tomoniga '1..1' xato? '1..1' qo'yilsa, tizimdagi har bir '${otherEnt}' albatta bitta '${sideEnt}' ga ega bo'lishi shart degani. Lekin biznes talabiga binoan ushbu aloqa ixtiyoriy bo'lib, '${otherEnt}' da hali '${sideEnt}' mavjud bo'lmasligi mumkin (masalan, hali biriktirilmagan yoki berilmagan holat). Majburiy qilib qo'yilsa, tizim yangi ob'ektlarni saqlay olmaydi. Shuning uchun to'g'ri chegara '0..1' bo'ladi!`;
        }

        // 1..1 chosen instead of Many (1..* or 0..*)
        if ((exp === '1..*' || exp === '0..*') && (u === '1..1' || u === '0..1')) {
          return isEn
            ? `Why is Single ('1') incorrect for '${sideEnt}'? Limiting the bound to 1 restricts '${otherEnt}' to at most one '${sideEnt}'. However, the business domain requires supporting multiple '${sideEnt}' records. A bound of '1' blocks adding additional records. Hence, the upper bound must be '*', requiring '${expectedVal}'!`
            : `Nega '${sideEnt}' tomoniga yagona ('1') xato? Siz yuqori chegarani 1 ta bilan cheklab qo'ygansiz. Bu degani bitta '${otherEnt}' ga ko'pi bilan bittagina '${sideEnt}' biriktirilishi mumkin. Vaholanki, biznes talabida '${otherEnt}' bir nechta (ko'plab) '${sideEnt}' larni o'z ichiga olishi ko'rsatilgan. 1 cheklovi tizimda ikkinchi yozuv kiritilishini taqiqlab qo'yadi. Shu bois to'g'ri multiplisitiya '${expectedVal}' bo'lishi shart!`;
        }

        return isEn
          ? `Architectural domain proof: '${otherEnt}' associates with '${sideEnt}' as '${expectedVal}'. Bound '${userVal}' violates the business participation or cardinality constraint.`
          : `Biznes arxitektura isboti: '${otherEnt}' va '${sideEnt}' o'rtasida '${expectedVal}' talab etiladi. Tanlangan '${userVal}' qiymati ishtirok yoki kardinallik chegarasini noto'g'ri belgilaydi.`;
      };

      if (!m1Matches) {
        const p1 = getSideProof(entity1, entity2, uM1, expM1);
        if (p1) proofs.push(p1);
      }
      if (!m2Matches) {
        const p2 = getSideProof(entity2, entity1, uM2, expM2);
        if (p2) proofs.push(p2);
      }

      return proofs.join(' ');
    },

    // 3. FOREIGN KEYS AUDIT (Week 2 Relational Schema)
    checkForeignKeys(uEntities, uRels, expRels, expEntities, errors, passedItems, isEn) {
      for (const expE of expEntities) {
        const expName = typeof expE === 'string' ? expE : expE.name;
        let expectedFks = (expE && (expE.foreignKeys || expE.fk))
          ? (Array.isArray(expE.foreignKeys || expE.fk) ? (expE.foreignKeys || expE.fk) : [expE.foreignKeys || expE.fk])
          : [];

        // If no explicit FKs specified on expE, infer from 1:N relationships where this entity is child
        if (expectedFks.length === 0) {
          expRels.forEach(r => {
            const e1 = expEntities.find(e => this.norm(typeof e === 'string' ? e : e.name) === this.norm(r.entity1));
            const e2 = expEntities.find(e => this.norm(typeof e === 'string' ? e : e.name) === this.norm(r.entity2));
            if (!e1 || !e2) return;

            // Recursive self-reference (Sector 5)
            if (this.norm(r.entity1) === this.norm(r.entity2) && this.norm(r.entity1) === this.norm(expName)) {
              const recFk = r.role1 ? (r.role1 + 'Id') : (r.role2 ? (r.role2 + 'Id') : 'supervisorId');
              if (!expectedFks.includes(recFk)) expectedFks.push(recFk);
              return;
            }

            const m1 = r.mult1 || '';
            const m2 = r.mult2 || '';
            const isE1One = (m1 === '1..1' || m1 === '0..1');
            const isE2Many = (m2 === '1..*' || m2 === '0..*');
            const isE2One = (m2 === '1..1' || m2 === '0..1');
            const isE1Many = (m1 === '1..*' || m1 === '0..*');

            if (isE1One && isE2Many && this.norm(r.entity2) === this.norm(expName)) {
              // e1 is parent, expE is child
              const parentPk = (typeof e1 === 'object' && e1.pk) ? e1.pk : (e1.name.charAt(0).toLowerCase() + e1.name.slice(1) + 'Id');
              if (!expectedFks.includes(parentPk)) expectedFks.push(parentPk);
            } else if (isE2One && isE1Many && this.norm(r.entity1) === this.norm(expName)) {
              // e2 is parent, expE is child
              const parentPk = (typeof e2 === 'object' && e2.pk) ? e2.pk : (e2.name.charAt(0).toLowerCase() + e2.name.slice(1) + 'Id');
              if (!expectedFks.includes(parentPk)) expectedFks.push(parentPk);
            } else if (r.isIdentifying && (typeof expE === 'object' && expE.isWeak)) {
              // Weak entity gets owner PK as FK
              const owner = (this.norm(r.entity1) === this.norm(expName)) ? e2 : e1;
              if (owner) {
                const ownerPk = (typeof owner === 'object' && owner.pk) ? owner.pk : (owner.name.charAt(0).toLowerCase() + owner.name.slice(1) + 'Id');
                if (!expectedFks.includes(ownerPk)) expectedFks.push(ownerPk);
              }
            }
          });
        }

        if (expectedFks.length === 0) continue;

        const found = uEntities.find(ue => this.norm(ue.name) === this.norm(expName));
        if (!found) continue; // entity missing is handled by checkEntities

        for (const expFk of expectedFks) {
          const matchingAttr = (found.attributes || []).find(a => this.norm(a.name) === this.norm(expFk));

          if (!matchingAttr) {
            errors.push({
              category: 'fk_missing_attribute',
              target: `${isEn ? 'Foreign Key Attribute' : 'Tashqi Kalit Atributi'}: ${expName}.${expFk}`,
              title: isEn ? `Foreign Key attribute '${expFk}' missing in '${expName}'` : `'${expName}' kartasida '${expFk}' Tashqi Kalit atributi topilmadi!`,
              message: isEn
                ? `Entity '${expName}' must contain foreign key attribute '${expFk}' to reference its parent entity.`
                : `'${expName}' entitiyida ota entitiyaga murojaat qiluvchi '${expFk}' Tashqi Kalit atributi mavjud bo'lishi shart!`,
              proof: isEn
                ? `Referential Integrity Rule: In a relational model, parent-child relationships are enforced by placing the Primary Key of the parent entity as a Foreign Key {FK} into the child entity table. Without this attribute, relational joins and foreign key constraints cannot be established.`
                : `Referensial Butunlik Qoidasi (Referential Integrity): Relyatsion modelda ota va bola jadvallar o'rtasidagi bog'liqlik ota jadvalning Primary Key sini bola jadvalga Foreign Key {FK} sifatida joylashtirish orqali amalga oshiriladi. '${expFk}' atributi bo'lmasa, ma'lumotlar bazasida bog'lanish va qatorlar tegishliligi butunlay yo'qoladi!`,
              userVal: isEn ? 'Attribute missing' : "Atribut mavjud emas",
              expectedVal: `${expFk} {FK}`,
              fix: isEn
                ? `Add attribute '${expFk}' to '${expName}' and click its badge to set {FK}.`
                : `'${expName}' kartasidagi '➕ Atribut' tugmasi orqali '${expFk}' ni qo'shing va uning yonidagi nishonni bosib {FK} holatiga o'tkazing.`
            });
          } else if (!matchingAttr.isFK) {
            const curBadge = matchingAttr.isPK ? "{PK}" : (matchingAttr.isPPK ? "{PPK}" : (isEn ? "Plain attribute" : "Oddiy atribut"));
            errors.push({
              category: 'fk_not_marked',
              target: `${isEn ? 'Foreign Key {FK}' : 'Tashqi Kalit {FK}'}: ${expName}.${expFk}`,
              title: isEn ? `'${expFk}' is not marked as {FK} on '${expName}'` : `'${expName}' kartasida '${expFk}' Tashqi Kalit {FK} deb belgilanmagan!`,
              message: isEn
                ? `Attribute '${expFk}' exists in '${expName}', but its badge is not set to {FK} (Current: ${curBadge}).`
                : `'${expName}' kartasida '${expFk}' atributi bor, ammo u {FK} (Tashqi Kalit) deb belgilanmagan (Hozirda: ${curBadge}).`,
              proof: isEn
                ? `Referential Integrity Constraint: Attribute '${expFk}' links '${expName}' to its parent table. It must be explicitly tagged as Foreign Key {FK} so the relational DBMS creates the FOREIGN KEY constraint and prevents orphaned records.`
                : `Referensial Butunlik Isboti: '${expFk}' atributi '${expName}' jadvalini ota jadval bilan bog'lovchi kalit hisoblanadi. Uning yonidagi nishon {FK} (Foreign Key) deb belgilanmas ekan, ma'lumotlar bazasi uni oddiy ustun deb hisoblaydi va referensial butunlik cheklovini o'rnatmaydi. '${expFk}' yonidagi tugmani bosib, uni {FK} holatiga o'tkazing!`,
              userVal: curBadge,
              expectedVal: `${expFk} {FK}`,
              fix: isEn
                ? `Click the badge next to '${expFk}' on '${expName}' to toggle it to {FK}.`
                : `'${expName}' kartasida '${expFk}' atributi yonidagi tugmani bosib, uni {FK} holatiga keltiring.`
            });
          } else {
            passedItems.push({
              name: `${expName} {FK}`,
              detail: expFk
            });
          }
        }
      }
    },

    // 4. SUBCLASSES & EER SPECIALISATION AUDIT (Week 2)
    checkSubclasses(uEntities, uSubclasses, expSub, errors, passedItems, isEn) {
      const expSuper = this.norm(expSub.superclass);
      const expSubs = (expSub.subs || expSub.subclasses || []).map(s => this.norm(typeof s === 'string' ? s : s.name));
      const expSubNames = (expSub.subs || expSub.subclasses || []).map(s => typeof s === 'string' ? s : s.name);

      // Normalize user subclasses into array of specialization groups
      let userGroups = [];
      if (Array.isArray(uSubclasses)) {
        userGroups = uSubclasses;
      } else if (uSubclasses && typeof uSubclasses === 'object') {
        userGroups = [uSubclasses];
      }

      const matchingGroup = userGroups.find(g => this.norm(g.superclass) === expSuper);

      if (!matchingGroup) {
        const proofText = this.generateSpecializationProof(expSub.superclass, expSub.constraint, '', expSubNames, isEn);
        errors.push({
          category: 'subclasses_missing',
          target: `${isEn ? 'EER Specialization' : 'EER Ixtisoslashuv'}: ${expSub.superclass}`,
          title: isEn ? `Missing ISA Specialization under '${expSub.superclass}'` : `'${expSub.superclass}' superklassi ostida ISA ierarxiyasi yetishmayapti`,
          message: isEn 
            ? `Entities (${expSubNames.join(', ')}) must be grouped under superclass '${expSub.superclass}' using an ISA node (circle 'd' or 'o') with constraint '${expSub.constraint}'.`
            : `'${expSub.superclass}' superklassi ostidagi [${expSubNames.join(', ')}] subklasslari uchun ISA doirasi (d/o) va '${expSub.constraint}' cheklovi o'rnatilmagan!`,
          proof: proofText,
          userVal: isEn ? 'Not created (plain tables)' : "Meros (ISA) bog'lanmagan",
          expectedVal: `${expSub.superclass} ➔ ISA ${expSub.constraint} ➔ [${expSubNames.join(', ')}]`,
          fix: isEn 
            ? `Click '🎓 Meros (ISA)' in the toolbar or select the ISA tool to create the specialization hierarchy with '${expSub.constraint}'.`
            : `Asboblar panelidagi '🎓 Meros (ISA)' tugmasini bosing yoki shakllar palitrasidagi Meros (ISA) doirasidan foydalanib, '${expSub.superclass}' ni subklasslar bilan '${expSub.constraint}' qoidasi asosida bog'lang.`
        });
        return;
      }

      // Check constraint
      if (expSub.constraint) {
        const expConstraintNorm = this.norm(expSub.constraint);
        const userConstraintNorm = this.norm(matchingGroup.constraint || '');
        if (userConstraintNorm !== expConstraintNorm) {
          const proofText = this.generateSpecializationProof(expSub.superclass, expSub.constraint, matchingGroup.constraint, expSubNames, isEn);
          errors.push({
            category: 'subclass_constraint',
            target: `${isEn ? 'EER Constraint' : 'Subklass Cheklovi'}: ${expSub.superclass}`,
            title: isEn ? `Specialization constraint mismatch` : `Ixtisoslashuv (Specialization) cheklovi noto'g'ri`,
            message: isEn 
              ? `Expected constraint '${expSub.constraint}', but found '${matchingGroup.constraint || "none"}'.`
              : `Kutilgan cheklov: '${expSub.constraint}' (Sizda: '${matchingGroup.constraint || "belgilanmagan"}').`,
            proof: proofText,
            userVal: matchingGroup.constraint || (isEn ? "none" : "belgilanmagan"),
            expectedVal: expSub.constraint,
            fix: isEn 
              ? `Change the ISA specialization constraint to '${expSub.constraint}'.`
              : `ISA doirasini bosing va cheklov turini '${expSub.constraint}' holatiga o'tkazing.`
          });
        }
      }

      // Check that all required subclasses are linked
      const userSubs = (matchingGroup.subs || matchingGroup.subclasses || []).map(s => this.norm(typeof s === 'string' ? s : s.name));
      const missingSubs = expSubs.filter(es => !userSubs.includes(es));
      if (missingSubs.length > 0) {
        const missingNames = expSubNames.filter((name, idx) => !userSubs.includes(expSubs[idx]));
        errors.push({
          category: 'subclass_missing_items',
          target: `${isEn ? 'EER Subclasses' : 'Subklasslar'}: ${expSub.superclass}`,
          title: isEn ? `Missing subclass branches` : `Yetishmayotgan subklass shoxobchalari`,
          message: isEn 
            ? `The specialization hierarchy under '${expSub.superclass}' must include all sub-entities: ${missingNames.join(', ')} are missing.`
            : `'${expSub.superclass}' ierarxiyasida quyidagi subklasslar bog'lanmagan: ${missingNames.join(', ')}.`,
          userVal: (matchingGroup.subclasses || []).join(', ') || (isEn ? "None" : "Birorta ham yo'q"),
          expectedVal: expSubNames.join(', '),
          fix: isEn 
            ? `Open the ISA popover and check ${missingNames.join(', ')} as subclasses.`
            : `ISA doirasini bosing va subklasslar ro'yxatidan ${missingNames.join(', ')} ni tanlang.`
        });
      } else {
        passedItems.push({
          name: isEn ? "EER Specialization" : "EER Ixtisoslashuv",
          detail: `${expSub.superclass} (${expSub.constraint}) ➔ [${expSubNames.join(', ')}]`
        });
      }
    },

    // Pedagogical fact-based proof generator for EER Specialization
    generateSpecializationProof(superclass, expConstraint, userConstraint, subclasses, isEn) {
      const subNames = subclasses.join(', ');
      const normExp = (expConstraint || '').toLowerCase().replace(/[\s_{}]/g, '');
      const isDisjoint = normExp.includes('or') || normExp.includes('disjoint');
      const isMandatory = normExp.includes('mandatory') || normExp.includes('total');

      if (isEn) {
        if (isDisjoint && isMandatory) {
          return `Pedagogical Proof: '{Mandatory, Or}' specifies Disjoint and Total specialization. 1) Disjoint (Or / 'd'): An instance of '${superclass}' can belong to AT MOST ONE subclass (${subNames}). For example, an employee cannot simultaneously be an Hourly and Salaried worker. 2) Mandatory (Total / double line): Every '${superclass}' MUST belong to at least one subclass; generic, unspecialized instances are strictly prohibited in this business architecture. In relational mapping, this guarantees mutually exclusive row partitions or clean single-table mapping with a Type Discriminator.`;
        } else if (isDisjoint && !isMandatory) {
          return `Pedagogical Proof: '{Optional, Or}' specifies Disjoint and Partial specialization. 1) Disjoint (Or / 'd'): An instance can belong to at most one subclass. 2) Optional (Partial / single line): An instance of '${superclass}' does NOT have to belong to any subclass (e.g. A Person can be neither Student nor Staff). In relational mapping, subclasses are mapped to separate tables holding only specific attributes, leaving the superclass table intact.`;
        } else if (!isDisjoint && isMandatory) {
          return `Pedagogical Proof: '{Mandatory, And}' specifies Overlapping and Total specialization. 1) Overlapping (And / 'o'): An instance of '${superclass}' can belong to MULTIPLE subclasses at the same time (e.g. a Part can be both Manufactured and Purchased). 2) Mandatory (Total / double line): Every '${superclass}' must specialize into at least one subclass. In relational tables, each subclass requires its own independent table linked to '${superclass}' PK.`;
        } else {
          return `Pedagogical Proof: '{Optional, And}' specifies Overlapping and Partial specialization. An instance may belong to zero, one, or multiple subclasses simultaneously.`;
        }
      }

      // Uzbek domain proofs
      if (isDisjoint && isMandatory) {
        return `Biznes Arxitekturasi Isboti: '{Mandatory, Or}' qoidasi Ayri (Disjoint) va To'liq (Total) ixtisoslashuvni bildiradi: 1) Disjoint (Or / 'd'): '${superclass}' ob'ekti bir vaqtning o'zida bir nechta subklassga (${subNames}) TEGISHLI BO'LA OLMAYDI. Masalan, xodim bir vaqtda ham soatbay, ham oylik bo'la olmaydi. 2) Mandatory (Total / qo'sh chiziq): Har bir '${superclass}' albatta subklasslardan biriga kirishi SHART, ixtisoslashmagan umumiy nusxa bo'lishi mumkin emas. Relyatsion modelga o'tkazishda (Relational Mapping) bu qoida Primary Key va Type Discriminator orqali mutlaq aniqlikni ta'minlaydi.`;
      } else if (isDisjoint && !isMandatory) {
        return `Biznes Arxitekturasi Isboti: '{Optional, Or}' qoidasi Ayri (Disjoint) va Qisman (Partial) ixtisoslashuvni bildiradi: 1) Disjoint (Or / 'd'): Ob'ekt subklasslardan (${subNames}) ko'pi bilan bittasiga tegishli bo'lishi mumkin. 2) Optional (Partial / bir chiziq): '${superclass}' ning barcha nusxalari ham subklass bo'lishi shart emas (umumiy holatda qolishi mumkin, masalan, Person har doim ham Student yoki Staff bo'lishi majburiy emas).`;
      } else if (!isDisjoint && isMandatory) {
        return `Biznes Arxitekturasi Isboti: '{Mandatory, And}' qoidasi Kesishuvchi (Overlapping) va To'liq (Total) ixtisoslashuvni bildiradi: 1) Overlapping (And / 'o'): '${superclass}' ning bitta ob'ekti bir vaqtning o'zida BIR NECHTA subklass a'zosi bo'la oladi (masalan, ehtiyot qism bir vaqtda ham korxonada ishlab chiqarilishi, ham bozordan sotib olinishi mumkin). 2) Mandatory (Total / qo'sh chiziq): Har bir ob'ekt kamida bitta subklassga kirishi shart.`;
      } else {
        return `Biznes Arxitekturasi Isboti: '{Optional, And}' qoidasi Kesishuvchi (Overlapping) va Qisman (Partial) ixtisoslashuvni bildiradi: Ob'ekt nol, bir yoki bir nechta subklasslarga bir vaqtda tegishli bo'lishi mumkin.`;
      }
    },

    // Format high-contrast HTML report for UI
    formatReportHTML(res, isEn) {
      let html = `<div style="display:flex; flex-direction:column; gap:8px; font-family:var(--font-mono, monospace); font-size:12px; line-height:1.45;">`;

      html += `
        <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; border-bottom:1px solid rgba(239,68,68,0.3); padding-bottom:6px;">
          <div style="display:flex; align-items:center; gap:6px;">
            <span style="background:rgba(239,68,68,0.25); border:1px solid #ef4444; color:#fca5a5; padding:2px 7px; border-radius:4px; font-size:11px; font-weight:700;">
              ❌ ${isEn ? "DIAGRAM ERROR" : "DIAGRAMMA NOMUTANOSIBLIGI"}
            </span>
            <span style="color:#fecaca; font-weight:600; font-size:12px;">${isEn ? "Professor Atlas Pinpoint Diagnostics" : "Professor Atlas Aniq Diagnostikasi"}</span>
          </div>
          <span style="color:#94a3b8; font-size:11px;">${res.errors.length} ta xatolik</span>
        </div>
      `;

      res.errors.forEach(err => {
        html += `
          <div style="background:rgba(0,0,0,0.35); border:1px solid rgba(239,68,68,0.25); border-left:3px solid #ef4444; border-radius:4px; padding:8px 10px;">
            <div style="display:flex; align-items:center; gap:6px; margin-bottom:5px; flex-wrap:wrap;">
              <span style="background:rgba(239,68,68,0.3); border:1px solid #ef4444; color:#fca5a5; padding:1px 6px; border-radius:3px; font-weight:700; font-size:11px;">
                📍 ${this.escapeHTML(err.target)}
              </span>
              <span style="color:#fecaca; font-weight:600;">${this.escapeHTML(err.title)}</span>
            </div>

            <div style="color:#e2e8f0; font-size:12px; margin-bottom:6px;">
              ${this.escapeHTML(err.message)}
            </div>

            ${err.proof ? `
              <div style="background:rgba(245,158,11,0.12); border:1px solid rgba(245,158,11,0.35); border-left:3px solid #f59e0b; border-radius:4px; padding:7px 10px; margin-bottom:6px; font-size:11.5px; color:#fef3c7; line-height:1.5;">
                <div style="font-weight:700; color:#fbbf24; margin-bottom:3px; display:flex; align-items:center; gap:5px;">
                  <span>💡</span> <span>${isEn ? "Pedagogical Proof & Domain Logic:" : "Isbotlovchi Ma'lumot & Biznes Mantiqi:"}</span>
                </div>
                <div>${this.escapeHTML(err.proof)}</div>
              </div>
            ` : ''}

            ${(err.userVal || err.expectedVal) ? `
              <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; background:rgba(15,23,42,0.85); border:1px solid rgba(255,255,255,0.08); border-radius:4px; padding:6px 10px; margin-bottom:6px; font-size:11.5px;">
                <div>
                  <span style="color:#ef4444; font-weight:600;">✕ ${isEn ? 'Your Diagram:' : 'Siz qo\'ygan:'}</span><br>
                  <code style="color:#f87171;">${this.escapeHTML(err.userVal || '—')}</code>
                </div>
                <div>
                  <span style="color:#22c55e; font-weight:600;">✓ ${isEn ? 'Required Architecture:' : 'To\'g\'ri me\'moriy qoida:'}</span><br>
                  <code style="color:#4ade80;">${this.escapeHTML(err.expectedVal || '—')}</code>
                </div>
              </div>
            ` : ''}

            ${err.fix ? `
              <div style="color:#fde047; font-size:11.5px; display:flex; align-items:flex-start; gap:6px;">
                <span>💡</span>
                <span><strong>${isEn ? 'Fix Recommendation' : 'Tuzatish tavsiyasi'}:</strong> ${this.escapeHTML(err.fix)}</span>
              </div>
            ` : ''}
          </div>
        `;
      });

      if (res.passedItems && res.passedItems.length > 0) {
        html += `
          <div style="background:rgba(34,197,94,0.08); border:1px solid rgba(34,197,94,0.2); border-radius:4px; padding:6px 10px; color:#86efac; font-size:11.5px;">
            <div style="font-weight:600; color:#4ade80; margin-bottom:3px;">${isEn ? "✔️ Correctly designed elements:" : "✔️ To'g'ri loyihalashtirilgan qismlar:"}</div>
            <div style="display:flex; flex-wrap:wrap; gap:6px;">
              ${res.passedItems.map(it => `<span style="background:rgba(34,197,94,0.15); padding:1px 6px; border-radius:3px;">${this.escapeHTML(it.name)}: ${this.escapeHTML(it.detail)}</span>`).join('')}
            </div>
          </div>
        `;
      }

      html += `</div>`;
      return html;
    },

    // Format success HTML report
    formatSuccessHTML(isEn, passedItems = [], isWeek2 = false) {
      const subtitle = isWeek2
        ? (isEn ? "All entities, {PK} keys, relationship links, and EER specializations are structurally flawless." : "Barcha entitiylar, {PK} birlamchi kalitlari, aloqa chiziqlari va EER ixtisoslashuvlari to'liq to'g'ri loyihalashtirildi.")
        : (isEn ? "All entities, {PK} keys, relationship links, and multiplicities are structurally flawless." : "Barcha entitiylar, {PK} birlamchi kalitlari, aloqa chiziqlari va multiplisitiyalar to'liq to'g'ri loyihalashtirildi.");

      return `
        <div style="background:rgba(34,197,94,0.1); border:1px solid rgba(34,197,94,0.3); border-radius:6px; padding:10px 14px; color:#bbf7d0; font-family:var(--font-mono, monospace); font-size:12.5px; line-height:1.5;">
          <div style="font-weight:700; color:#4ade80; display:flex; align-items:center; gap:8px; margin-bottom:4px;">
            <span>🎉</span> <span>${isEn ? "EER DIAGRAM APPROVED BY CHIEF ARCHITECT!" : "EER DIAGRAMMA BOSH ARXITEKTOR TOMONIDAN TO'LIQ TASDIQLANDI!"}</span>
          </div>
          <div style="color:#86efac; font-size:12px; margin-bottom:6px;">
            ${subtitle}
          </div>
          ${passedItems.length > 0 ? `
            <div style="display:flex; flex-wrap:wrap; gap:6px; margin-top:6px;">
              ${passedItems.map(it => `<span style="background:rgba(34,197,94,0.2); border:1px solid rgba(34,197,94,0.3); padding:1px 6px; border-radius:3px; font-size:11px;">✓ ${this.escapeHTML(it.name)}</span>`).join('')}
            </div>
          ` : ''}
        </div>
      `;
    },

    // Format plaintext report
    formatReportText(res, isEn) {
      if (res.passed) {
        return isEn ? "All diagram checks passed!" : "Barcha diagramma tekshiruvlaridan muvaffaqiyatli o'tdi!";
      }
      let txt = (isEn ? "DIAGRAM ERRORS DETECTED:\n" : "DIAGRAMMADA XATOLIKLAR ANIQLANDI:\n");
      res.errors.forEach(err => {
        txt += `\n• [${err.target}]: ${err.title}\n  ${err.message}\n  ${err.proof ? `Isboti: ${err.proof}\n  ` : ''}Tavsiya: ${err.fix}\n`;
      });
      return txt;
    }
  };

  if (typeof window !== 'undefined') {
    window.DatabaseDiagramDiagnostics = DatabaseDiagramDiagnostics;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = DatabaseDiagramDiagnostics;
  }
})();
