// ============================================================================
// DATABASE SYSTEMS ACADEMY — EER CONCEPTUAL MODELING CATALOG & GRADER
// Draw.io-style Visual EER Diagram Engine, Sectors, Semantics & Graph Evaluator
// ============================================================================

var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);

_scope.EER_CATALOG = {
  version: "2026.3.0",
  course: "Database Systems Academy",
  module: "Week 2 — Conceptual Database Design & EER Modeling (150 Client Case Studies)",

  sectors: [
    {
      id: 1,
      name: "Floor 1: Binary Relationships & Primary Keys",
      subtitle: "2 independent entities, {PK} selection, essential 1:* and 1:1 links",
      range: [1, 15],
      floorRange: [1, 15],
      badge: "1F • Binary ER",
      description: "Identify 2 core entities from client specifications, set their Primary Key {PK}, and model basic 1:* and 1:1 relationships."
    },
    {
      id: 2,
      name: "Floor 2: Multiplicity Constraints (0..1, 1..1, 0..*, 1..*)",
      subtitle: "Optional vs Mandatory participation, positioning min..max bounds correctly",
      range: [16, 30],
      floorRange: [16, 30],
      badge: "2F • Multiplicity",
      description: "Determine strict mandatory (1..1, 1..*) and optional (0..1, 0..*) business rules from the client story and place them at connector ends."
    },
    {
      id: 3,
      name: "Floor 3: Weak Entities",
      subtitle: "Parent dependency, identifying relationships, and partial keys {PPK}",
      range: [31, 45],
      floorRange: [31, 45],
      badge: "3F • Weak Entity",
      description: "Model weak entities (Dependent, Room, Milestone) that cannot exist without an owner, along with their partial key {PPK}."
    },
    {
      id: 4,
      name: "Floor 4: Many-to-Many & Association Classes",
      subtitle: "M:N relationships with relationship-specific attribute boxes",
      range: [46, 60],
      floorRange: [46, 60],
      badge: "4F • Association Class",
      description: "Design many-to-many relationships (WorksOn, Registers) and link relationship attributes (hours, grade) with dashed lines."
    },
    {
      id: 5,
      name: "Floor 5: Recursive (Unary) Relationships",
      subtitle: "Self-referencing entities: management hierarchies, trees, and BOM structures",
      range: [61, 75],
      floorRange: [61, 75],
      badge: "5F • Recursive ER",
      description: "Model unary relationships where an entity refers to itself (Employee Supervises Employee, Category Parent Category)."
    },
    {
      id: 6,
      name: "Floor 6: Ternary (3-Way) Relationships",
      subtitle: "Connecting 3 entities through a central diamond",
      range: [76, 90],
      floorRange: [76, 90],
      badge: "6F • Ternary Diamond",
      description: "Represent 3-way interactions like Course, Instructor, and Semester connected through a central diamond shape."
    },
    {
      id: 7,
      name: "Floor 7: EER Subclasses 1: Disjoint ({Mandatory, Or} & {Optional, Or})",
      subtitle: "Disjoint specialization: an instance belongs to at most one subclass",
      range: [91, 105],
      floorRange: [91, 105],
      badge: "7F • Disjoint Subclass",
      description: "Specialized non-overlapping (Or) subclasses of employees or vehicles, configuring their constraints."
    },
    {
      id: 8,
      name: "Floor 8: EER Subclasses 2: Overlapping ({Mandatory, And} & {Optional, And})",
      subtitle: "Overlapping specialization: an instance can belong to multiple subclasses simultaneously",
      range: [106, 120],
      floorRange: [106, 120],
      badge: "8F • Overlapping Subclass",
      description: "Model entities that can belong to multiple subclasses at once (e.g. Part: both Manufactured and Purchased)."
    },
    {
      id: 9,
      name: "Floor 9: Connection Traps (Fan Trap & Chasm Trap Diagnostics)",
      subtitle: "Spot misleading relationships and restructure the diagram to resolve traps",
      range: [121, 135],
      floorRange: [121, 135],
      badge: "9F • Connection Traps",
      description: "Diagnose ambiguous Fan Traps and information-losing Chasm Traps, and reconstruct valid schema paths."
    },
    {
      id: 10,
      name: "Floor 10: Enterprise EER Master Case Studies",
      subtitle: "Comprehensive 5–8 entity architectures covering full business domains",
      range: [136, 150],
      floorRange: [136, 150],
      badge: "10F • Master EER Keys",
      description: "Architect full enterprise databases for holding groups, healthcare networks, airline systems, and tech corporations."
    }
  ]
};

// ============================================================================
// EER GRAPH SEMANTIC GRADER
// Evaluates user's drawn visual diagram (nodes, edges, multiplicities, keys)
// ============================================================================

_scope.EER_GRADER = {
  // Normalizes name string (removes whitespace, lowercases)
  norm(str) {
    if (!str) return "";
    return str.toString().trim().toLowerCase().replace(/[^a-z0-9]/g, '');
  },

  // Normalizes multiplicity string (e.g. "1..*", "1:*", "1..M" -> "1..*")
  normMult(m) {
    if (!m) return "1..1";
    let s = m.toString().trim().toLowerCase();
    s = s.replace(/m|n/g, '*').replace(/:/g, '..');
    if (s === "1") return "1..1";
    if (s === "*") return "0..*";
    return s;
  },

  // Grades user's diagram against question's expected model
  grade(userDiagram, question) {
    if (!userDiagram || !userDiagram.entities || userDiagram.entities.length === 0) {
      return {
        passed: false,
        feedback: "Canvas is empty! Please place entities according to client requirements and link them."
      };
    }

    const exp = question.expectedDiagram;
    if (!exp) {
      return { passed: true, feedback: "Diagram accepted!" };
    }

    const uEntities = userDiagram.entities || [];
    const uRels = userDiagram.relationships || [];
    const uSubclasses = userDiagram.subclasses || [];

    // 1. CHECK REQUIRED ENTITIES
    const expEntities = exp.entities || [];
    for (const expEnt of expEntities) {
      const entName = typeof expEnt === 'string' ? expEnt : expEnt.name;
      const found = uEntities.find(e => this.norm(e.name) === this.norm(entName));

      if (!found) {
        return {
          passed: false,
          feedback: `Missing required entity: Please add '${entName}' to the canvas.`
        };
      }

      // Check Primary Key {PK} if specified
      if (typeof expEnt === 'object' && expEnt.pk) {
        const pkAttr = (found.attributes || []).find(a => a.isPK || (a.name && a.name.toLowerCase().includes('{pk}')));
        if (!pkAttr) {
          return {
            passed: false,
            feedback: `Primary Key {PK} missing on '${found.name}'! Click {PK} on at least one key attribute.`
          };
        }
      }

      // Check Weak Entity flag if expected
      if (typeof expEnt === 'object' && expEnt.isWeak) {
        if (!found.isWeak) {
          return {
            passed: false,
            feedback: `'${found.name}' must be marked as a Weak Entity! Toggle the Weak Entity switch on this card.`
          };
        }
      }
    }

    // 2. CHECK RELATIONSHIPS
    const expRels = exp.relationships || [];
    for (const expRel of expRels) {
      const e1Norm = this.norm(expRel.entity1);
      const e2Norm = this.norm(expRel.entity2);

      // Find relationship matching entity1 and entity2 (in either direction)
      const foundRel = uRels.find(r => {
        const r1Norm = this.norm(r.fromEntityName || r.entity1);
        const r2Norm = this.norm(r.toEntityName || r.entity2);
        return (r1Norm === e1Norm && r2Norm === e2Norm) || (r1Norm === e2Norm && r2Norm === e1Norm);
      });

      if (!foundRel) {
        return {
          passed: false,
          feedback: `No relationship line found between '${expRel.entity1}' and '${expRel.entity2}'! Connect them with a relationship link.`
        };
      }

      // Verify multiplicities on both ends
      const r1 = this.norm(foundRel.fromEntityName || foundRel.entity1);
      const isDirect = (r1 === e1Norm);

      const userMult1 = this.normMult(isDirect ? (foundRel.mult1 || foundRel.fromMult) : (foundRel.mult2 || foundRel.toMult));
      const userMult2 = this.normMult(isDirect ? (foundRel.mult2 || foundRel.toMult) : (foundRel.mult1 || foundRel.fromMult));

      const expMult1 = this.normMult(expRel.mult1);
      const expMult2 = this.normMult(expRel.mult2);

      if (e1Norm === e2Norm) {
        // Recursive relationship: either direct or reversed order is accepted
        const matchesDirect = (!expMult1 || userMult1 === expMult1) && (!expMult2 || userMult2 === expMult2);
        const matchesReversed = (!expMult1 || userMult2 === expMult1) && (!expMult2 || userMult1 === expMult2);
        if (!matchesDirect && !matchesReversed) {
          return {
            passed: false,
            feedback: `'${expRel.entity1}' recursive relationship multiplicities incorrect: Expected '${expMult1}' and '${expMult2}' (Found: '${userMult1}' and '${userMult2}').`
          };
        }
      } else {
        // Compare mult1 (on entity1 end)
        if (expMult1 && userMult1 !== expMult1) {
          return {
            passed: false,
            feedback: `Multiplicity mismatch on '${expRel.entity1}' side: Expected '${expMult1}' (Found: '${userMult1}').`
          };
        }

        // Compare mult2 (on entity2 end)
        if (expMult2 && userMult2 !== expMult2) {
          return {
            passed: false,
            feedback: `Multiplicity mismatch on '${expRel.entity2}' side: Expected '${expMult2}' (Found: '${userMult2}').`
          };
        }
      }

      // Check association class if required
      if (expRel.associationClass) {
        const hasAssoc = foundRel.associationClass || (foundRel.attributes && foundRel.attributes.length > 0);
        if (!hasAssoc) {
          return {
            passed: false,
            feedback: `Relationship between '${expRel.entity1}' and '${expRel.entity2}' must have an Association Class attribute!`
          };
        }
      }
    }

    // 3. CHECK SUBCLASSES (EER SPECIALISATION)
    const expSub = exp.subclasses;
    if (expSub) {
      const superNorm = this.norm(expSub.superclass);
      const userSubGroup = uSubclasses.find(s => this.norm(s.superclass) === superNorm);

      if (!userSubGroup) {
        return {
          passed: false,
          feedback: `Missing subclass hierarchy under superclass '${expSub.superclass}'! Open the Subclass Modal to configure it.`
        };
      }

      // Check constraint {Mandatory/Optional, Or/And}
      if (expSub.constraint) {
        const expConstraintNorm = this.norm(expSub.constraint);
        const userConstraintNorm = this.norm(userSubGroup.constraint);
        if (userConstraintNorm !== expConstraintNorm) {
          return {
            passed: false,
            feedback: `Constraint mismatch for '${expSub.superclass}' subclasses: Expected '${expSub.constraint}' (Found: '${userSubGroup.constraint || "none"}').`
          };
        }
      }

      // Check expected subclass entities
      if (expSub.subclasses) {
        for (const subName of expSub.subclasses) {
          const hasSub = (userSubGroup.subclasses || []).some(s => this.norm(s) === this.norm(subName));
          if (!hasSub) {
            return {
              passed: false,
              feedback: `Subclass '${subName}' is missing under '${expSub.superclass}'!`
            };
          }
        }
      }
    }

    return {
      passed: true,
      feedback: "Excellent work! The client has fully approved and accepted your EER diagram!"
    };
  }
};

// ============================================================================
// DRAW.IO XML GENERATOR (EXPORTER)
// Allows 1-click export of the student's diagram directly to .drawio format
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

      // Multiplicity labels
      cells += `<mxCell id="lbl_${cellId++}" value="${m1}" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" vertex="1" connectable="0" parent="${rId}">
        <mxGeometry x="-0.8" relative="1" as="geometry"><mxPoint y="-10" as="offset"/></mxGeometry>
      </mxCell>\n`;
      cells += `<mxCell id="lbl_${cellId++}" value="${m2}" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" vertex="1" connectable="0" parent="${rId}">
        <mxGeometry x="0.8" relative="1" as="geometry"><mxPoint y="-10" as="offset"/></mxGeometry>
      </mxCell>\n`;
    });

    return `<?xml version="1.0" encoding="UTF-8"?>
<mxfile host="app.diagrams.net" version="24.0.0">
  <diagram name="EER Schema">
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
