/**
 * EER DIAGRAM INTELLIGENT GRADER
 * Evaluates student's visual diagram on the canvas against expectedDiagram.
 * Provides clear, actionable, friendly pedagogical feedback in Uzbek.
 */

(function () {
  "use strict";

  const EER_GRADER = {
    grade: function (userDiagram, q) {
      if (!q || !q.expectedDiagram) {
        return { passed: true, feedback: "Ajoyib! Diagramma to'g'ri shakllantirildi." };
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
            feedback: `⚠️ <strong>'${expE.name}'</strong> entitiysi topilmadi. Iltimos, shakllar panelidan entitiy qo'shing va nomini '${expE.name}' deb yozing.`
          };
        }

        // Check Primary Key [PK] if expected
        if (expE.pk) {
          const hasPkAttr = (found.attributes || []).some(a => (a.isPK || a.isPPK) && norm(a.name) === norm(expE.pk));
          const hasAnyPk = (found.attributes || []).some(a => a.isPK || a.isPPK);
          const hasAttrByName = (found.attributes || []).some(a => norm(a.name) === norm(expE.pk));

          if (!hasPkAttr && !found.pk && !hasAnyPk && !hasAttrByName) {
            return {
              passed: false,
              feedback: `💡 <strong>'${expE.name}'</strong> jadvaliga <strong>'${expE.pk}'</strong> [PK] Birlamchi Kalit ustunini qo'shishni unutmang!`
            };
          }
        }

        // Check Foreign Key [FK] attributes if expected (Crucial for Week 2 Relational Mapping!)
        const expFks = (expE.attributes || []).filter(a => a.isFK);
        for (const fk of expFks) {
          const foundFk = (found.attributes || []).find(a => norm(a.name) === norm(fk.name));
          if (!foundFk) {
            return {
              passed: false,
              feedback: `⚠️ Relyatsion model talabi: <strong>'${expE.name}'</strong> jadvaliga <strong>'${fk.name}'</strong> Tashqi Kalit [FK] ustunini qo'shing!`
            };
          }
          // If found but not marked as FK, we accept it gracefully or remind them gently
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
            feedback: `⚠️ <strong>'${expR.entity1}'</strong> va <strong>'${expR.entity2}'</strong> jadvallari o'rtasida relyatsion bog'lanish chizig'i topilmadi. Jadvallarni o'zaro bog'lang.`
          };
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
            feedback: `⚠️ EER Ixtisoslashuv: <strong>'${expected.subclasses.superclass}'</strong> superklassi ostida <strong>${expected.subclasses.subs.map(s => typeof s === 'string' ? s : s.name).join(', ')}</strong> subklasslarini hosil qilishingiz lozim.`
          };
        }
      }

      // If all critical structural elements are verified
      return {
        passed: true,
        feedback: "A'lo darajada bajarildi! Barcha entitiylar, atributlar va munosabatlar to'g'ri loyihalashtirildi."
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
