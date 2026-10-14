/**
 * DATABASE SYSTEMS ACADEMY — WEEK 1 CONCEPT CATALOG & EVALUATOR
 * Module: Conceptual Design & Entity-Relationship (ER) Modeling
 * Notation: UML Class Diagram Notation (Standard Connolly & Begg)
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.ER_CATALOG_W1 = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {

  // 10 Progressive Database Modeler Ranks
  const CAREER_RANKS = [
    { threshold: 0,   title: "Junior Data Modeler",            salary: "$2,500/mo", color: "cyan" },
    { threshold: 15,  title: "Entity & Attribute Analyst",     salary: "$3,200/mo", color: "cyan" },
    { threshold: 30,  title: "Multiplicity Specialist",        salary: "$4,000/mo", color: "emerald" },
    { threshold: 45,  title: "Weak Entity Designer",           salary: "$5,000/mo", color: "emerald" },
    { threshold: 60,  title: "Ternary Decomposition Engineer", salary: "$6,200/mo", color: "emerald" },
    { threshold: 75,  title: "Association & Class Architect",  salary: "$7,800/mo", color: "amber" },
    { threshold: 90,  title: "Aggregation & Composition Lead", salary: "$9,500/mo", color: "amber" },
    { threshold: 105, title: "Trap Diagnosis Specialist",      salary: "$12,000/mo", color: "violet" },
    { threshold: 120, title: "Enterprise Conceptual Lead",     salary: "$15,000/mo", color: "violet" },
    { threshold: 135, title: "Principal Database Architect",   salary: "$20,000/mo", color: "gold" }
  ];

  // 10 Pedagogical Sectors
  const SECTORS = [
    { id: 1,  range: "1–15",    name: "Entity Types, Attributes & Primary Keys", icon: "🏛️" },
    { id: 2,  range: "16–30",   name: "Basic Relationships & UML Multiplicities", icon: "📐" },
    { id: 3,  range: "31–45",   name: "Weak Entities & Identifying Relationships", icon: "🔗" },
    { id: 4,  range: "46–60",   name: "Ternary & Higher-Degree Relationships", icon: "🔺" },
    { id: 5,  range: "61–75",   name: "Association Classes & Relationship Attributes", icon: "📋" },
    { id: 6,  range: "76–90",   name: "Aggregation vs Composition (UML Notations)", icon: "💎" },
    { id: 7,  range: "91–105",  name: "Connection Traps: The Fan Trap Diagnosis", icon: "⚠️" },
    { id: 8,  range: "106–120", name: "Connection Traps: The Chasm Trap Resolution", icon: "⚡" },
    { id: 9,  range: "121–135", name: "Enterprise Case Studies: Healthcare & Real Estate", icon: "🏥" },
    { id: 10, range: "136–150", name: "Complete ERD Synthesis & Design Defense", icon: "🏆" }
  ];

  // 5 Emergency Conceptual Incidents
  const EMERGENCY_EVENTS = [
    {
      id: "event_fan_trap",
      title: "🚨 Ambiguous Pathway Detected: Fan Trap in Division Operations!",
      speaker: "CHIEF ARCHITECT",
      desc: "Two 1:N relationships fan out from 'Division' to 'Staff' and 'Branch'. Management cannot determine which branch a staff member works at!",
      solution: "Restructure into a single linear chain: Staff (1..*) works at Branch (1..1), and Branch (1..*) belongs to Division (1..1)."
    },
    {
      id: "event_chasm_trap",
      title: "⚠️ Broken Pathway Alert: Chasm Trap in Property Overseeing!",
      speaker: "DATABASE CONTROLLER",
      desc: "Staff member PG4 is currently unassigned (0..1 participation). The pathway Branch -> Staff -> Property breaks, leaving property PG4 detached from any branch!",
      solution: "Introduce the missing direct relationship: Branch (1..1) Offers (0..*) PropertyForRent."
    },
    {
      id: "event_weak_entity_orphan",
      title: "💥 Orphan Record Threat: Weak Entity Missing Composite Key!",
      speaker: "INTEGRITY AUDITOR",
      desc: "Room numbers are stored as plain integers without linking to HotelID. Room 101 in London collides with Room 101 in Paris!",
      solution: "Enforce identifying relationship with composition. Primary key of Room must be {HotelID, RoomNo}."
    },
    {
      id: "event_ternary_redundancy",
      title: "🔥 Multiplicity Misinterpretation in Ternary Relationship!",
      speaker: "MODELING ADVISOR",
      desc: "Junior designer placed 1..1 on the Part leg of Supplier-Part-Project, mistakenly restricting each supplier to only ever supply one part to a project!",
      solution: "Re-evaluate semantics: for one (Supplier, Project) pair, how many Parts can be provided? Use 0..* or decompose into an associative entity."
    },
    {
      id: "event_multiplicity_leak",
      title: "⚡ Data Integrity Leak: Mandatory Multiplicity Violated!",
      speaker: "SYSTEM ARCHITECT",
      desc: "A branch was instantiated without a branch manager, violating the business rule 'Every branch must be managed by exactly one staff member'!",
      solution: "Set Branch multiplicity in Manages relationship to exactly 1..1, not 0..1."
    }
  ];

  // Master Concept & Architecture Dictionary (20+ terms)
  const MASTER_CONCEPT_DICTIONARY = [
    {
      concept: "Entity Type",
      symbol: "Class Rectangle",
      category: "Fundamental",
      syntax: "Staff / staffNo {PK}, name, salary",
      purpose: "A group of objects with the same properties, identified by the enterprise as having an independent existence.",
      omissionRisk: "Without entities, there is no conceptual storage structure for business objects."
    },
    {
      concept: "Primary Key {PK}",
      symbol: "{PK} tag beside attribute",
      category: "Integrity",
      syntax: "staffNo {PK}",
      purpose: "The candidate key selected to uniquely identify each occurrence of an entity type.",
      omissionRisk: "Without a primary key, individual entity occurrences cannot be distinguished, leading to duplicate records."
    },
    {
      concept: "Composite Attribute",
      symbol: "Hierarchical sub-attributes",
      category: "Attributes",
      syntax: "address (street, city, postcode)",
      purpose: "An attribute composed of multiple components, each with an independent existence.",
      omissionRisk: "Lumping into a single string makes sorting by city or searching by postcode difficult and slow."
    },
    {
      concept: "Multi-valued Attribute",
      symbol: "{0..*} or {1..*} notation",
      category: "Attributes",
      syntax: "telNo [1..3]",
      purpose: "An attribute that holds multiple values for a single entity occurrence.",
      omissionRisk: "If not identified, it violates First Normal Form (1NF) during relational mapping."
    },
    {
      concept: "Derived Attribute",
      symbol: "/ prefix or computed note",
      category: "Attributes",
      syntax: "/age (computed from DOB)",
      purpose: "An attribute whose value is calculable from related attributes and does not need physical storage.",
      omissionRisk: "Storing it directly causes data inconsistency when base attributes (e.g. current date) change."
    },
    {
      concept: "Multiplicity: 1..1",
      symbol: "1..1",
      category: "Multiplicity",
      syntax: "Branch 1..1 - ManagedBy - 0..1 Staff",
      purpose: "Specifies mandatory participation with an upper limit of exactly one instance.",
      omissionRisk: "If relaxed to 0..1, an entity can exist without its required parent, violating business constraints."
    },
    {
      concept: "Multiplicity: 0..1",
      symbol: "0..1",
      category: "Multiplicity",
      syntax: "Staff 0..1 - Manages - 1..1 Branch",
      purpose: "Specifies optional participation with an upper limit of at most one instance.",
      omissionRisk: "If forced to 1..1, every employee would be erroneously required to manage a branch."
    },
    {
      concept: "Multiplicity: 1..*",
      symbol: "1..*",
      category: "Multiplicity",
      syntax: "Staff 1..* - WorksIn - 1..1 Branch",
      purpose: "Specifies mandatory participation with one or many instances allowed.",
      omissionRisk: "If relaxed to 0..*, empty branches could be created with zero staff members."
    },
    {
      concept: "Multiplicity: 0..*",
      symbol: "0..*",
      category: "Multiplicity",
      syntax: "PropertyForRent 0..* - OwnedBy - 1..1 Owner",
      purpose: "Specifies optional participation with zero, one, or many instances allowed.",
      omissionRisk: "If set to 1..*, an owner could not register in the system before registering a property."
    },
    {
      concept: "Weak Entity",
      symbol: "Entity with {PPK} partial key",
      category: "Advanced ER",
      syntax: "Dependent (name {PPK}, age)",
      purpose: "An entity type that cannot be uniquely identified solely by its own attributes and relies on an owner entity.",
      omissionRisk: "Attempting to assign a synthetic key creates an independent entity that can become an orphan when the owner is deleted."
    },
    {
      concept: "Partial Key {PPK}",
      symbol: "{PPK} discriminator tag",
      category: "Advanced ER",
      syntax: "roomNo {PPK}",
      purpose: "An attribute that uniquely identifies weak entity occurrences only within the scope of a specific parent owner.",
      omissionRisk: "Without {PPK}, identical room numbers across different hotels cause collision."
    },
    {
      concept: "Identifying Relationship",
      symbol: "Composition line (solid diamond on owner)",
      category: "Advanced ER",
      syntax: "Hotel 1..1 *- Room 1..*",
      purpose: "The relationship that gives a weak entity its identity and existence dependency.",
      omissionRisk: "Without identifying relationship, cascade delete cannot be enforced."
    },
    {
      concept: "Ternary Relationship",
      symbol: "Diamond connecting 3 entities",
      category: "Advanced ER",
      syntax: "Supplier - Part - Project [Registers]",
      purpose: "A simultaneous relationship of degree 3 connecting three entity types.",
      omissionRisk: "Splitting prematurely into binary relationships loses the 3-way atomic association."
    },
    {
      concept: "Association Class",
      symbol: "Box with attributes on dashed line",
      category: "Advanced ER",
      syntax: "Student M:N Module with class (grade, semester)",
      purpose: "Holds attributes that belong to the association itself rather than either participating entity.",
      omissionRisk: "Placing 'grade' on Student assumes one grade across all modules; on Module assumes all students share the grade."
    },
    {
      concept: "Shared Aggregation",
      symbol: "Hollow diamond (◇) at whole end",
      category: "UML Advanced",
      syntax: "Session ◇- Paper",
      purpose: "Represents a 'part-of' relationship where the child part can exist independently of the whole.",
      omissionRisk: "Using composition deletes papers when a session is canceled, losing academic research."
    },
    {
      concept: "Composite Aggregation (Composition)",
      symbol: "Filled diamond (◆) at whole end",
      category: "UML Advanced",
      syntax: "Building ◆- Room",
      purpose: "Represents strong ownership where child lifecycle is bound to the parent whole. Parent multiplicity is always 1..1.",
      omissionRisk: "Using simple association leaves ghost rooms in the system after a building is demolished."
    },
    {
      concept: "Fan Trap",
      symbol: "Ambiguous 1:N fanning pathways",
      category: "Connection Traps",
      syntax: "Staff (1..*) <- Division (1..1) -> Branch (1..*)",
      purpose: "A modeling flaw where two 1:N relationships fan out from one entity, creating ambiguity regarding which many-end relates to which.",
      omissionRisk: "The database cannot answer which branch a staff member works at."
    },
    {
      concept: "Chasm Trap",
      symbol: "Broken pathway via 0..1 optionality",
      category: "Connection Traps",
      syntax: "Branch (1..1) -> Staff (0..1) -> Property (0..*)",
      purpose: "A modeling flaw where optional participation along a relationship path loses connections for unassigned instances.",
      omissionRisk: "Unassigned properties have no navigable link to their offering branch."
    }
  ];

  // 5-Point Pedagogical Concept & Flag Anatomy Generator
  function formatConceptCard(anatomy) {
    if (!anatomy) return "";

    return `
      <div class="cmd-section">
        <div class="cmd-sec-head cyan">🎯 1. CONCEPT ROLE & DEFINITION:</div>
        <div class="cmd-sec-text">${escapeHtml(anatomy.commandPurpose || anatomy.purpose || '')}</div>
      </div>

      <div class="cmd-section">
        <div class="cmd-sec-head amber">🏷️ 2. UML NOTATION & MULTIPLICITY SYNTAX:</div>
        <div class="cmd-sec-text"><code>${escapeHtml(anatomy.syntaxExample || anatomy.syntax || '')}</code></div>
      </div>

      <div class="cmd-section">
        <div class="cmd-sec-head emerald">⏱️ 3. WHEN & WHY TO APPLY THIS RULE:</div>
        <div class="cmd-sec-text">${escapeHtml(anatomy.whenToUse || '')}</div>
      </div>

      <div class="cmd-section">
        <div class="cmd-sec-head ruby">⚠️ 4. MODELING TRAP / OMISSION RISK:</div>
        <div class="cmd-sec-text">${escapeHtml(anatomy.omissionRisk || '')}</div>
      </div>

      <div class="cmd-section">
        <div class="cmd-sec-head cyan">📋 5. RELATIONAL CONVERSION IMPLICATION:</div>
        <div class="cmd-sec-text">${escapeHtml(anatomy.relationalImpact || 'Maps to foreign key constraint during logical schema design.')}</div>
      </div>
    `;
  }

  // Grader for ER Conceptual Modeling
  const ER_GRADER = {
    evaluate(question, userInput) {
      if (!question || !userInput) return false;

      const user = String(userInput).trim().toLowerCase();
      const canonical = String(question.canonical || "").trim().toLowerCase();

      // Direct match
      if (user === canonical) return true;

      // Accepted list match
      if (Array.isArray(question.accepted)) {
        for (const item of question.accepted) {
          if (user === String(item).trim().toLowerCase()) return true;
        }
      }

      // Normalized whitespace & punctuation
      const cleanUser = user.replace(/[\s\t\n]+/g, ' ').replace(/["'(){}\[\]]/g, '');
      const cleanCanonical = canonical.replace(/[\s\t\n]+/g, ' ').replace(/["'(){}\[\]]/g, '');
      if (cleanUser === cleanCanonical) return true;

      // Multiplicity normalization (e.g. "0..*" vs "0..n" vs "0..N")
      const normMultiUser = user.replace(/\.\.n/g, '..*').replace(/\s+/g, '');
      const normMultiCanonical = canonical.replace(/\.\.n/g, '..*').replace(/\s+/g, '');
      if (normMultiUser === normMultiCanonical) return true;

      return false;
    }
  };

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  return {
    CAREER_RANKS,
    SECTORS,
    EMERGENCY_EVENTS,
    MASTER_CONCEPT_DICTIONARY,
    formatConceptCard,
    ER_GRADER
  };
});
