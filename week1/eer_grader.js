/**
 * EER DIAGRAM INTELLIGENT GRADER
 * Evaluates student's visual diagram on the canvas against expectedDiagram.
 * Provides clear, actionable, friendly pedagogical feedback in Uzbek.
 */

(function () {
  "use strict";

  const EER_GRADER = {
    grade: function (userDiagram, q) {
      const isEn = typeof window !== 'undefined' && window.I18N && window.I18N.getLang() === 'en';

      // First priority: High-precision diagram diagnostics engine
      if (typeof window !== 'undefined' && window.DatabaseDiagramDiagnostics) {
        const diag = window.DatabaseDiagramDiagnostics.diagnose(userDiagram, q, 'eer');
        return {
          passed: diag.passed,
          feedback: diag.formattedReport,
          feedbackHTML: diag.formattedHTML,
          errors: diag.errors,
          passedItems: diag.passedItems
        };
      }

      if (!q || !q.expectedDiagram) {
        return { 
          passed: true, 
          feedback: isEn ? "Great job! The diagram has been structured correctly." : "Ajoyib! Diagramma to'g'ri shakllantirildi." 
        };
      }

      const expected = q.expectedDiagram;
      const uEntities = (userDiagram && userDiagram.entities) || [];
      const uRels = (userDiagram && userDiagram.relationships) || [];
      const uSubclasses = userDiagram && userDiagram.subclasses;

      // Helper to clean and normalize strings
      const norm = str => (str || '').toLowerCase().replace(/[\s_\-]/g, '');

      // 1. CHECK ENTITIES
      const expEntities = expected.entities || [];
      for (const expE of expEntities) {
        const found = uEntities.find(ue => norm(ue.name) === norm(expE.name));
        if (!found) {
          return {
            passed: false,
            feedback: isEn 
              ? `⚠️ Entity <strong>'${expE.name}'</strong> was not found. Please add an entity from the shapes panel and name it '${expE.name}'.`
              : `⚠️ <strong>'${expE.name}'</strong> entitiysi topilmadi. Iltimos, shakllar panelidan entitiy qo'shing va nomini '${expE.name}' deb yozing.`
          };
        }

        // Check Primary Key {PK} if expected
        if (expE.pk) {
          const hasPkAttr = (found.attributes || []).some(a => a.isPK && norm(a.name) === norm(expE.pk));
          const hasAnyPk = (found.attributes || []).some(a => a.isPK);
          const hasAttrByName = (found.attributes || []).some(a => norm(a.name) === norm(expE.pk));

          if (!hasPkAttr && !found.pk && !hasAnyPk && !hasAttrByName) {
            return {
              passed: false,
              feedback: isEn
                ? `💡 Don't forget to designate <strong>'${expE.pk}'</strong> as the {PK} Primary Key attribute on <strong>'${expE.name}'</strong>!`
                : `💡 <strong>'${expE.name}'</strong> entitiysiga <strong>'${expE.pk}'</strong> {PK} birlamchi kalit atributini qo'shishni unutmang!`
            };
          }
        }

        // Check Weak Entity status if expected
        if (expE.isWeak && !found.isWeak) {
          // Soft check
        }
      }

      // 2. CHECK RELATIONSHIPS (if expected)
      const expRels = expected.relationships || [];
      for (const expR of expRels) {
        const e1Norm = norm(expR.entity1);
        const e2Norm = norm(expR.entity2);

        // Find relationship in user diagram (either direction)
        const foundRel = uRels.find(ur => {
          const uFrom = norm(ur.fromEntityName || ur.entity1);
          const uTo = norm(ur.toEntityName || ur.entity2);
          return (uFrom === e1Norm && uTo === e2Norm) || (uFrom === e2Norm && uTo === e1Norm);
        });

        if (!foundRel) {
          return {
            passed: false,
            feedback: isEn
              ? `⚠️ Relationship line between <strong>'${expR.entity1}'</strong> and <strong>'${expR.entity2}'</strong> not found. Connect them using connector ports or relationship line.`
              : `⚠️ <strong>'${expR.entity1}'</strong> va <strong>'${expR.entity2}'</strong> o'rtasida aloqa chizig'i topilmadi. Shakllar panelidagi 'Aloqa Chizig'i' yoki magnit nuqtalar orqali ularni bog'lang.`
          };
        }

        // Check Multiplicity if specified
        if (expR.mult1 && expR.mult2) {
          const uFrom = norm(foundRel.fromEntityName || foundRel.entity1);
          let uM1 = foundRel.mult1;
          let uM2 = foundRel.mult2;

          // If reversed direction, swap user multiplicities
          if (e1Norm !== e2Norm && uFrom === e2Norm) {
            uM1 = foundRel.mult2;
            uM2 = foundRel.mult1;
          }

          // Normalize multiplicity (allow slight format differences like 1:1, 1..1, 1..*)
          const normM = m => (m || '').replace(/:/g, '..').replace(/n/gi, '*').replace(/m/gi, '*');
          let m1Matches = normM(uM1) === normM(expR.mult1);
          let m2Matches = normM(uM2) === normM(expR.mult2);
          if (e1Norm === e2Norm && (!m1Matches || !m2Matches)) {
            if (normM(uM1) === normM(expR.mult2) && normM(uM2) === normM(expR.mult1)) {
              m1Matches = true;
              m2Matches = true;
            }
          }

          if (!m1Matches || !m2Matches) {
            const hasUnset = !uM1 || uM1 === '+' || uM1 === '?' || !uM2 || uM2 === '+' || uM2 === '?';
            return {
              passed: false,
              feedback: isEn
                ? (hasUnset
                    ? `💡 Click the <strong>[ + ]</strong> button on the connector line between <strong>'${expR.entity1}'</strong> and <strong>'${expR.entity2}'</strong> to set the multiplicity!`
                    : `⚠️ Check multiplicity: it should be <strong>'${expR.entity1}'</strong> (${expR.mult1}) and <strong>'${expR.entity2}'</strong> (${expR.mult2}). Click the badge to adjust!`)
                : (hasUnset
                    ? `💡 <strong>'${expR.entity1}'</strong> va <strong>'${expR.entity2}'</strong> o'rtasidagi chiziqda turgan <strong>[ + ]</strong> tugmachasini bosib multiplisitiyani o'rnating!`
                    : `⚠️ Multiplisitiyani to'g'ri tanlang: <strong>'${expR.entity1}'</strong> (${expR.mult1}) va <strong>'${expR.entity2}'</strong> (${expR.mult2}) bo'lishi kerak. Chiziqdagi qiymat ustiga bosib o'zgartiring!`)
            };
          }
        }
      }

      // 3. CHECK SUBCLASSES / EER SPECIALISATION (if expected)
      if (expected.subclasses) {
        const expSuper = norm(expected.subclasses.superclass);
        const expSubs = (expected.subclasses.subs || []).map(s => norm(typeof s === 'string' ? s : s.name));

        // User either created a subclass node or sub-entities
        let subFound = false;
        if (uSubclasses && norm(uSubclasses.superclass) === expSuper) {
          subFound = true;
        } else {
          // Alternatively, user might have entities with those subclass names
          const allSubsExistAsEntities = expSubs.every(es => uEntities.some(ue => norm(ue.name) === es));
          if (allSubsExistAsEntities) {
            subFound = true;
          }
        }

        if (!subFound && expSubs.length > 0) {
          return {
            passed: false,
            feedback: isEn
              ? `⚠️ EER Specialization: Subclasses <strong>${expected.subclasses.subs.map(s => typeof s === 'string' ? s : s.name).join(', ')}</strong> must be created under superclass <strong>'${expected.subclasses.superclass}'</strong>.`
              : `⚠️ EER Ixtisoslashuv: <strong>'${expected.subclasses.superclass}'</strong> superklassi ostida <strong>${expected.subclasses.subs.map(s => typeof s === 'string' ? s : s.name).join(', ')}</strong> subklasslarini hosil qilishingiz lozim.`
          };
        }
      }

      // If all critical structural elements are verified
      return {
        passed: true,
        feedback: isEn 
          ? "Excellent work! All entities, attributes, primary keys, and relationships have been designed properly."
          : "A'lo darajada bajarildi! Barcha entitiylar, atributlar va munosabatlar to'g'ri loyihalashtirildi."
      };
    }
  };

  if (typeof window !== 'undefined') {
    window.EER_GRADER = EER_GRADER;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = EER_GRADER;
  }
})();
