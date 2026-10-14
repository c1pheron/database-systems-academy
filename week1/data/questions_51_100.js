/**
 * DATABASE SYSTEMS ACADEMY — WEEK 1 QUESTIONS (QUESTIONS_W1_PART2)
 * Simple English, Neutral Branding, UML Standard.
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.QUESTIONS_W1_PART2 = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  return [
  {
    "id": 51,
    "sectorId": 4,
    "sectorTitle": "Ternary & Higher-Degree Relationships",
    "difficulty": "Intermediate",
    "source": "Seminar 01",
    "title": "Ternary Multiplicity on Associative Entity Leg",
    "story": "Analysis Scenario: Ternary Multiplicity on Associative Entity Leg. Carefully review the business requirements.",
    "task": "When Supplier (1..1) relates to the associative entity 'SupplyContract', what multiplicity sits beside SupplyContract?",
    "canonical": "0..*",
    "accepted": [
      "0..*",
      "0..n",
      "0..N",
      "1..*"
    ],
    "flagAnatomy": {
      "commandPurpose": "Allows a supplier to enter into zero, one, or many supply contracts.",
      "syntaxExample": "Supplier 1..1 - Signs - 0..* SupplyContract",
      "whenToUse": "On the associative entity side of decomposed ternary models.",
      "omissionRisk": "Setting 1..1 limits a supplier to only a single contract across all projects.",
      "relationalImpact": "SupplyContract table has foreign key supplierID (non-unique)."
    }
  },
  {
    "id": 52,
    "sectorId": 4,
    "sectorTitle": "Ternary & Higher-Degree Relationships",
    "difficulty": "Intermediate",
    "source": "Seminar 01",
    "title": "Binary Multiplicity on Supplier End from Associative Entity",
    "story": "Analysis Scenario: Binary Multiplicity on Supplier End from Associative Entity. Carefully review the business requirements.",
    "task": "In the decomposed ternary model, for one specific SupplyContract, how many Suppliers are involved?",
    "canonical": "1..1",
    "accepted": [
      "1..1",
      "1"
    ],
    "flagAnatomy": {
      "commandPurpose": "Binds each contract instance to exactly one designated supplier.",
      "syntaxExample": "Supplier 1..1 - Signs - 0..* SupplyContract",
      "whenToUse": "Decomposing ternary associations.",
      "omissionRisk": "Allowing 0..* at supplier end creates contracts with ambiguous or missing vendors.",
      "relationalImpact": "supplierID foreign key in SupplyContract is NOT NULL."
    }
  },
  {
    "id": 53,
    "sectorId": 4,
    "sectorTitle": "Ternary & Higher-Degree Relationships",
    "difficulty": "Intermediate",
    "source": "Seminar 01",
    "title": "Ternary Relationship Primary Key Composition",
    "story": "Analysis Scenario: Ternary Relationship Primary Key Composition. Carefully review the business requirements.",
    "task": "When a ternary relationship (Supplier, Part, Project) with multiplicity 0..* on all legs is mapped to SQL, how is the primary key formed?",
    "canonical": "Composite of all three foreign keys",
    "accepted": [
      "composite of all three foreign keys",
      "{supplierid, partid, projectid}",
      "all three foreign keys",
      "three foreign keys"
    ],
    "flagAnatomy": {
      "commandPurpose": "Uniquely identifies each 3-way combination in the relational database.",
      "syntaxExample": "PRIMARY KEY (supplierID, partID, projectID)",
      "whenToUse": "When all three participants vary independently.",
      "omissionRisk": "Omitting one key permits duplicate shipments of identical parts under the same contract.",
      "relationalImpact": "Three-column composite primary key in the resulting table."
    }
  },
  {
    "id": 54,
    "sectorId": 4,
    "sectorTitle": "Ternary & Higher-Degree Relationships",
    "difficulty": "Intermediate",
    "source": "Seminar 01",
    "title": "Degree of an Associative Entity",
    "story": "Analysis Scenario: Degree of an Associative Entity. Carefully review the business requirements.",
    "task": "When an associative entity replaces a ternary relationship, what is the degree of each of the newly created relationships?",
    "canonical": "Binary",
    "accepted": [
      "binary",
      "degree 2",
      "2"
    ],
    "flagAnatomy": {
      "commandPurpose": "Simplifies conceptual complexity by reducing degree 3 to degree 2 relationships.",
      "syntaxExample": "Three binary 1:N relationships",
      "whenToUse": "To facilitate standard drawing tool support and clear relational translation.",
      "omissionRisk": "Assuming the associative entity itself has degree 3.",
      "relationalImpact": "Every relationship is a standard 1:N foreign key reference."
    }
  },
  {
    "id": 55,
    "sectorId": 4,
    "sectorTitle": "Ternary & Higher-Degree Relationships",
    "difficulty": "Intermediate",
    "source": "Seminar 01",
    "title": "N-ary Relationship Definition",
    "story": "Analysis Scenario: N-ary Relationship Definition. Carefully review the business requirements.",
    "task": "What is the general term for a relationship connecting four or more entity types simultaneously?",
    "canonical": "N-ary relationship",
    "accepted": [
      "n-ary relationship",
      "n-ary",
      "higher degree relationship"
    ],
    "flagAnatomy": {
      "commandPurpose": "Classifies associations involving N entity types.",
      "syntaxExample": "Degree 4 (Quaternary), Degree N",
      "whenToUse": "Rare enterprise situations involving complex coordination across 4+ entities.",
      "omissionRisk": "High cognitive complexity and difficulty in enforcing constraints.",
      "relationalImpact": "Almost always decomposed into an associative entity."
    }
  },
  {
    "id": 56,
    "sectorId": 4,
    "sectorTitle": "Ternary & Higher-Degree Relationships",
    "difficulty": "Intermediate",
    "source": "Seminar 01",
    "title": "Doctor Patient Drug Prescription as Ternary",
    "story": "A doctor prescribes a drug to a patient with dosage and duration instructions.",
    "task": "Which three entity types participate in this ternary prescription relationship?",
    "canonical": "Doctor, Patient, Drug",
    "accepted": [
      "doctor, patient, drug",
      "patient, doctor, drug",
      "doctor, drug, patient"
    ],
    "flagAnatomy": {
      "commandPurpose": "Identifies classic healthcare 3-way association.",
      "syntaxExample": "Prescription (Doctor, Patient, Drug) with dosage",
      "whenToUse": "When prescription validity requires all three participants.",
      "omissionRisk": "Storing prescription between Doctor and Patient loses which medicine was given.",
      "relationalImpact": "Prescription table links doctorID, patientID, drugID."
    }
  },
  {
    "id": 57,
    "sectorId": 4,
    "sectorTitle": "Ternary & Higher-Degree Relationships",
    "difficulty": "Intermediate",
    "source": "Seminar 01",
    "title": "Ternary Multiplicity for Exclusive Project Allocation",
    "story": "Analysis Scenario: Ternary Multiplicity for Exclusive Project Allocation. Carefully review the business requirements.",
    "task": "If business policy dictates that a specific Part can only ever be used on at most ONE Project regardless of supplier, what multiplicity appears on the Project leg?",
    "canonical": "0..1",
    "accepted": [
      "0..1"
    ],
    "flagAnatomy": {
      "commandPurpose": "Enforces that for a (Supplier, Part) pair, at most one project can be associated.",
      "syntaxExample": "Project leg: 0..1",
      "whenToUse": "When part usage is project-exclusive.",
      "omissionRisk": "Using 0..* allows parts to be diverted to unauthorized projects.",
      "relationalImpact": "ProjectID is omitted from the primary key; (SupplierID, PartID) forms candidate key."
    }
  },
  {
    "id": 58,
    "sectorId": 4,
    "sectorTitle": "Ternary & Higher-Degree Relationships",
    "difficulty": "Intermediate",
    "source": "Seminar 01",
    "title": "Semantic Loss when Decomposing Ternary into Two Binaries",
    "story": "Analysis Scenario: Semantic Loss when Decomposing Ternary into Two Binaries. Carefully review the business requirements.",
    "task": "If a ternary Supplier-Part-Project relationship is split into (Supplier-Part) and (Part-Project), what critical information is lost?",
    "canonical": "Which supplier supplied the part to which project",
    "accepted": [
      "which supplier supplied the part to which project",
      "which supplier supplied which project",
      "supplier to project link"
    ],
    "flagAnatomy": {
      "commandPurpose": "Illustrates the danger of pseudo-decomposition without an associative entity.",
      "syntaxExample": "Loss of 3-way atomic binding",
      "whenToUse": "Explaining why ternary relationships cannot simply be erased.",
      "omissionRisk": "Queries report false supply paths (semantic loss / connection distortion).",
      "relationalImpact": "Produces incorrect Cartesian product joins in SQL."
    }
  },
  {
    "id": 59,
    "sectorId": 4,
    "sectorTitle": "Ternary & Higher-Degree Relationships",
    "difficulty": "Intermediate",
    "source": "Seminar 01",
    "title": "Associative Entity Naming Convention",
    "story": "Analysis Scenario: Associative Entity Naming Convention. Carefully review the business requirements.",
    "task": "What is a common convention for naming the associative entity that replaces a ternary relationship 'Supplies'?",
    "canonical": "Supply or SupplyContract",
    "accepted": [
      "supply or supplycontract",
      "supply",
      "supplycontract",
      "shipment"
    ],
    "flagAnatomy": {
      "commandPurpose": "Converts the action verb of the relationship into a meaningful business noun.",
      "syntaxExample": "Supplies (verb) -> SupplyContract (noun)",
      "whenToUse": "When modeling junction entities in UML.",
      "omissionRisk": "Giving cryptic names like 'Table1' obscures business intent.",
      "relationalImpact": "Names the resulting SQL table clearly."
    }
  },
  {
    "id": 60,
    "sectorId": 4,
    "sectorTitle": "Ternary & Higher-Degree Relationships",
    "difficulty": "Intermediate",
    "source": "Seminar 01",
    "title": "Ternary Relationship Symbol in UML Notation",
    "story": "Analysis Scenario: Ternary Relationship Symbol in UML Notation. Carefully review the business requirements.",
    "task": "In UML notation, what geometric shape is used to represent a ternary relationship?",
    "canonical": "Diamond",
    "accepted": [
      "diamond",
      "rhombus"
    ],
    "flagAnatomy": {
      "commandPurpose": "Standard UML symbol for relationships of degree 3 or higher.",
      "syntaxExample": "Diamond with 3 lines radiating to entities",
      "whenToUse": "When drawing ternary relationships in UML.",
      "omissionRisk": "Using a rectangle confuses the relationship with a regular entity.",
      "relationalImpact": "Signifies a multi-key junction table."
    }
  },
  {
    "id": 61,
    "sectorId": 5,
    "sectorTitle": "Association Classes & Relationship Attributes",
    "difficulty": "Intermediate",
    "source": "Seminar 01",
    "title": "Relationship Attribute Concept",
    "story": "In an academic database, a student registers for a course. The final grade they achieve belongs to this specific registration.",
    "task": "What is an attribute that describes a relationship rather than an individual entity called?",
    "canonical": "Relationship attribute",
    "accepted": [
      "relationship attribute",
      "descriptive attribute",
      "attribute of a relationship"
    ],
    "flagAnatomy": {
      "commandPurpose": "Stores properties that emerge purely from the association between two entities.",
      "syntaxExample": "grade on Enrolls relationship",
      "whenToUse": "When data cannot be assigned strictly to either participant.",
      "omissionRisk": "Putting it on an entity causes duplicate or conflicting data.",
      "relationalImpact": "Placed in the bridge table resulting from M:N mapping."
    }
  },
  {
    "id": 62,
    "sectorId": 5,
    "sectorTitle": "Association Classes & Relationship Attributes",
    "difficulty": "Intermediate",
    "source": "Seminar 01",
    "title": "Association Class UML Notation",
    "story": "Analysis Scenario: Association Class UML Notation. Carefully review the business requirements.",
    "task": "In UML class diagram notation, what construct is used to draw attributes that belong to a relationship?",
    "canonical": "Association class",
    "accepted": [
      "association class",
      "association class box"
    ],
    "flagAnatomy": {
      "commandPurpose": "Represents a relationship that has its own attributes and operations.",
      "syntaxExample": "Box with only attributes compartment connected by dashed line",
      "whenToUse": "Every time a relationship requires descriptive attributes.",
      "omissionRisk": "Inventing independent entities with unnecessary primary keys.",
      "relationalImpact": "Directly converted into a relational bridge table."
    }
  },
  {
    "id": 63,
    "sectorId": 5,
    "sectorTitle": "Association Classes & Relationship Attributes",
    "difficulty": "Intermediate",
    "source": "Seminar 01",
    "title": "Association Class Connecting Line Style",
    "story": "Analysis Scenario: Association Class Connecting Line Style. Carefully review the business requirements.",
    "task": "In UML notation, what line style connects the association class box to the main relationship line?",
    "canonical": "Dashed line",
    "accepted": [
      "dashed line",
      "dashed",
      "broken line"
    ],
    "flagAnatomy": {
      "commandPurpose": "Visually links the association class to the relationship line.",
      "syntaxExample": "- - - - - - (Dashed line to relationship)",
      "whenToUse": "Drawing association classes in draw.io or UML tools.",
      "omissionRisk": "Using a solid line makes it look like an inheritance or ordinary association.",
      "relationalImpact": "Shows that the class derives its identity from the relationship line."
    }
  },
  {
    "id": 64,
    "sectorId": 5,
    "sectorTitle": "Association Classes & Relationship Attributes",
    "difficulty": "Intermediate",
    "source": "Seminar 01",
    "title": "Why Grade Cannot Live in Student Entity",
    "story": "Analysis Scenario: Why Grade Cannot Live in Student Entity. Carefully review the business requirements.",
    "task": "If the attribute 'grade' were placed inside the Student entity, what critical flaw occurs?",
    "canonical": "A student could only have one grade across all courses",
    "accepted": [
      "a student could only have one grade across all courses",
      "only one grade",
      "student has only one grade",
      "cannot store multiple grades"
    ],
    "flagAnatomy": {
      "commandPurpose": "Demonstrates attribute placement integrity.",
      "syntaxExample": "Student (studentID, grade) -> Fails for multiple courses",
      "whenToUse": "Defending association classes.",
      "omissionRisk": "Violates 1NF or limits student to a single course completion.",
      "relationalImpact": "Causes massive update anomalies."
    }
  },
  {
    "id": 65,
    "sectorId": 5,
    "sectorTitle": "Association Classes & Relationship Attributes",
    "difficulty": "Intermediate",
    "source": "Seminar 01",
    "title": "Why Grade Cannot Live in Course Entity",
    "story": "Analysis Scenario: Why Grade Cannot Live in Course Entity. Carefully review the business requirements.",
    "task": "If the attribute 'grade' were placed inside the Course entity, what critical flaw occurs?",
    "canonical": "All students taking the course would share the exact same grade",
    "accepted": [
      "all students taking the course would share the exact same grade",
      "course has only one grade",
      "all students get same grade",
      "same grade for all students"
    ],
    "flagAnatomy": {
      "commandPurpose": "Demonstrates attribute placement integrity on the other end.",
      "syntaxExample": "Course (courseID, grade) -> Fails for multiple students",
      "whenToUse": "Explaining why neither entity can host the attribute.",
      "omissionRisk": "Disallows individual student performance evaluations.",
      "relationalImpact": "Violates fundamental database normalization."
    }
  },
  {
    "id": 66,
    "sectorId": 5,
    "sectorTitle": "Association Classes & Relationship Attributes",
    "difficulty": "Intermediate",
    "source": "Seminar 01",
    "title": "Association Class Compartment Contents",
    "story": "Analysis Scenario: Association Class Compartment Contents. Carefully review the business requirements.",
    "task": "Unlike a regular entity box, what compartment is omitted from an association class box in UML?",
    "canonical": "Name compartment",
    "accepted": [
      "name compartment",
      "class name",
      "entity name",
      "name"
    ],
    "flagAnatomy": {
      "commandPurpose": "Distinguishes association class notation in Connolly & Begg UML standard.",
      "syntaxExample": "A box holding ONLY attributes - it has no name compartment",
      "whenToUse": "When drawing relationship attributes in UML.",
      "omissionRisk": "Treating it as a named entity alters the conceptual relationship line.",
      "relationalImpact": "Name is inherited from the relationship name (e.g. Enrolls)."
    }
  },
  {
    "id": 67,
    "sectorId": 5,
    "sectorTitle": "Association Classes & Relationship Attributes",
    "difficulty": "Intermediate",
    "source": "Seminar 01",
    "title": "Association Attribute in 1:N Relationships",
    "story": "Analysis Scenario: Association Attribute in 1:N Relationships. Carefully review the business requirements.",
    "task": "When a relationship is 1:N (e.g. Branch 1..1 Employs 1..* Staff) and has an attribute 'dateJoined', where is this attribute migrated during relational design?",
    "canonical": "To the 'many' side entity (Staff)",
    "accepted": [
      "to the many side entity (staff)",
      "many side entity",
      "staff",
      "staff table",
      "many side"
    ],
    "flagAnatomy": {
      "commandPurpose": "Eliminates unnecessary junction tables for 1:N relationships.",
      "syntaxExample": "Staff (staffNo, ..., branchNo, dateJoined)",
      "whenToUse": "Translating 1:N relationship attributes into relational tables.",
      "omissionRisk": "Creating a redundant 3rd table for a simple 1:N relationship.",
      "relationalImpact": "Placed as a regular column in the table holding the foreign key."
    }
  },
  {
    "id": 68,
    "sectorId": 5,
    "sectorTitle": "Association Classes & Relationship Attributes",
    "difficulty": "Intermediate",
    "source": "Seminar 01",
    "title": "Association Attribute in M:N Relationships",
    "story": "Analysis Scenario: Association Attribute in M:N Relationships. Carefully review the business requirements.",
    "task": "When an M:N relationship (Student M:N Module) has an attribute 'semester', where does this attribute live in the relational schema?",
    "canonical": "In the junction table",
    "accepted": [
      "in the junction table",
      "junction table",
      "bridge table",
      "in the bridge table",
      "enrollment table"
    ],
    "flagAnatomy": {
      "commandPurpose": "Ensures relationship attributes are bound to composite foreign keys.",
      "syntaxExample": "Enrollment (studentID, moduleCode, semester, grade)",
      "whenToUse": "Mapping M:N association classes.",
      "omissionRisk": "Cannot be placed in either parent table without repeating groups.",
      "relationalImpact": "Column inside the intersection table alongside primary keys."
    }
  },
  {
    "id": 69,
    "sectorId": 5,
    "sectorTitle": "Association Classes & Relationship Attributes",
    "difficulty": "Intermediate",
    "source": "Seminar 01",
    "title": "Hours Worked on Project Assignment",
    "story": "Analysis Scenario: Hours Worked on Project Assignment. Carefully review the business requirements.",
    "task": "Employees work on projects. The number of hours worked per week varies per project assignment. What modeling construct holds 'hoursPerWeek'?",
    "canonical": "Association class",
    "accepted": [
      "association class",
      "relationship attribute"
    ],
    "flagAnatomy": {
      "commandPurpose": "Models labor allocation across multiple assignments.",
      "syntaxExample": "WorksOn association class (hoursPerWeek)",
      "whenToUse": "For timesheets, billing rates, and effort logs.",
      "omissionRisk": "Restricting employee to the same hours across all projects.",
      "relationalImpact": "Becomes column in WorksOn table."
    }
  },
  {
    "id": 70,
    "sectorId": 5,
    "sectorTitle": "Association Classes & Relationship Attributes",
    "difficulty": "Intermediate",
    "source": "Seminar 01",
    "title": "Operations in Association Class",
    "story": "Analysis Scenario: Operations in Association Class. Carefully review the business requirements.",
    "task": "Can an association class in UML include operations (methods) as well as attributes?",
    "canonical": "Yes",
    "accepted": [
      "yes",
      "true"
    ],
    "flagAnatomy": {
      "commandPurpose": "Confirms object-oriented extensibility of UML association classes.",
      "syntaxExample": "calculateGPA(), computeBilling()",
      "whenToUse": "In full object-oriented software engineering modeling.",
      "omissionRisk": "Underestimating the behavioral capabilities of association classes.",
      "relationalImpact": "Maps to stored procedures or application service logic."
    }
  },
  {
    "id": 71,
    "sectorId": 5,
    "sectorTitle": "Association Classes & Relationship Attributes",
    "difficulty": "Intermediate",
    "source": "Seminar 01",
    "title": "Promoting Association Class to Full Entity",
    "story": "Analysis Scenario: Promoting Association Class to Full Entity. Carefully review the business requirements.",
    "task": "If an association class itself begins participating in other relationships (e.g. Invoicing a Supply Contract), what should the designer do?",
    "canonical": "Promote it to a full entity",
    "accepted": [
      "promote it to a full entity",
      "convert to entity",
      "make it an entity",
      "convert to full entity"
    ],
    "flagAnatomy": {
      "commandPurpose": "Refactors complex associations into first-class enterprise entities.",
      "syntaxExample": "Association Class -> Full Entity (e.g. Contract, Booking)",
      "whenToUse": "When an association becomes a subject of further business actions.",
      "omissionRisk": "Attempting to link an association line to another association line.",
      "relationalImpact": "Receives its own dedicated primary key and becomes an independent table."
    }
  },
  {
    "id": 72,
    "sectorId": 5,
    "sectorTitle": "Association Classes & Relationship Attributes",
    "difficulty": "Intermediate",
    "source": "Seminar 01",
    "title": "Multiplicity on Association Class",
    "story": "Analysis Scenario: Multiplicity on Association Class. Carefully review the business requirements.",
    "task": "Does the association class box itself have multiplicities written beside it?",
    "canonical": "No",
    "accepted": [
      "no",
      "false"
    ],
    "flagAnatomy": {
      "commandPurpose": "Clarifies that multiplicity belongs on the ends of the relationship line, not on the attribute box.",
      "syntaxExample": "Multiplicities remain on the main line between the two entity classes",
      "whenToUse": "Drafting clean UML diagrams.",
      "omissionRisk": "Writing redundant multiplicity on the dashed line confuses evaluators.",
      "relationalImpact": "Relationship line multiplicities govern table constraints."
    }
  },
  {
    "id": 73,
    "sectorId": 5,
    "sectorTitle": "Association Classes & Relationship Attributes",
    "difficulty": "Intermediate",
    "source": "Seminar 01",
    "title": "Property Viewing Date and Comment Case",
    "story": "Analysis Scenario: Property Viewing Date and Comment Case. Carefully review the business requirements.",
    "task": "In the DreamHome real estate system, a Client views a PropertyForRent. The date of viewing and comments made by the client must be recorded. How should this be modeled?",
    "canonical": "Association class on Views relationship",
    "accepted": [
      "association class on views relationship",
      "association class",
      "views association class"
    ],
    "flagAnatomy": {
      "commandPurpose": "Captures interaction history between potential buyers and properties.",
      "syntaxExample": "Views association class (viewDate, comment)",
      "whenToUse": "Whenever clients view, review, or evaluate items.",
      "omissionRisk": "Assuming a client only ever views one property or properties have only one viewer.",
      "relationalImpact": "Viewing table with (clientNo, propertyNo, viewDate) as composite key."
    }
  },
  {
    "id": 74,
    "sectorId": 5,
    "sectorTitle": "Association Classes & Relationship Attributes",
    "difficulty": "Intermediate",
    "source": "Seminar 01",
    "title": "Primary Key of Association Class Table",
    "story": "Analysis Scenario: Primary Key of Association Class Table. Carefully review the business requirements.",
    "task": "What attributes typically form the primary key of the table generated from an M:N association class?",
    "canonical": "Primary keys of both participating entities",
    "accepted": [
      "primary keys of both participating entities",
      "both primary keys",
      "composite of both foreign keys",
      "foreign keys of both entities"
    ],
    "flagAnatomy": {
      "commandPurpose": "Establishes composite unique identification for the junction record.",
      "syntaxExample": "PRIMARY KEY (studentID, moduleCode)",
      "whenToUse": "Creating SQL DDL for M:N relationships.",
      "omissionRisk": "Creating duplicate pairing records if composite key is omitted.",
      "relationalImpact": "Composite PRIMARY KEY constraint."
    }
  },
  {
    "id": 75,
    "sectorId": 5,
    "sectorTitle": "Association Classes & Relationship Attributes",
    "difficulty": "Intermediate",
    "source": "Seminar 01",
    "title": "Multiple Viewings on Same Date",
    "story": "Analysis Scenario: Multiple Viewings on Same Date. Carefully review the business requirements.",
    "task": "If a client views the same property multiple times on different dates, what must be added to the composite primary key?",
    "canonical": "viewDate",
    "accepted": [
      "viewdate",
      "date",
      "viewing date"
    ],
    "flagAnatomy": {
      "commandPurpose": "Allows multiple historical occurrences between the same pair of entities.",
      "syntaxExample": "PRIMARY KEY (clientNo, propertyNo, viewDate)",
      "whenToUse": "For repeat transactions or multi-session activities.",
      "omissionRisk": "Database blocks a client from viewing a property a second time.",
      "relationalImpact": "Includes timestamp/date in primary key."
    }
  },
  {
    "id": 76,
    "sectorId": 6,
    "sectorTitle": "Aggregation vs Composition (UML Notations)",
    "difficulty": "Intermediate",
    "source": "Seminar 01",
    "title": "Aggregation Concept Definition",
    "story": "Analysis Scenario: Aggregation Concept Definition. Carefully review the business requirements.",
    "task": "A relationship that represents a 'has-a' or 'part-of' association where the whole and parts have independent lifecycles is called what?",
    "canonical": "Aggregation",
    "accepted": [
      "aggregation",
      "shared aggregation"
    ],
    "flagAnatomy": {
      "commandPurpose": "Models non-exclusive whole-part relationships.",
      "syntaxExample": "Whole ◇- Part",
      "whenToUse": "When components can exist without the parent container.",
      "omissionRisk": "Deleting parts when the whole is deleted.",
      "relationalImpact": "Foreign key allows NULL or references an alternate container."
    }
  },
  {
    "id": 77,
    "sectorId": 6,
    "sectorTitle": "Aggregation vs Composition (UML Notations)",
    "difficulty": "Intermediate",
    "source": "Seminar 01",
    "title": "Shared Aggregation UML Symbol",
    "story": "Analysis Scenario: Shared Aggregation UML Symbol. Carefully review the business requirements.",
    "task": "In UML notation, what symbol represents shared aggregation?",
    "canonical": "Hollow diamond",
    "accepted": [
      "hollow diamond",
      "open diamond",
      "white diamond"
    ],
    "flagAnatomy": {
      "commandPurpose": "Distinguishes loose part-of relationships from strict composition.",
      "syntaxExample": "Session ◇- Paper",
      "whenToUse": "When parts can survive independently.",
      "omissionRisk": "Using filled diamond causes unintended cascade deletion.",
      "relationalImpact": "ON DELETE SET NULL or ON DELETE RESTRICT."
    }
  },
  {
    "id": 78,
    "sectorId": 6,
    "sectorTitle": "Aggregation vs Composition (UML Notations)",
    "difficulty": "Intermediate",
    "source": "Seminar 01",
    "title": "Diamond Placement Rule in Aggregation",
    "story": "Analysis Scenario: Diamond Placement Rule in Aggregation. Carefully review the business requirements.",
    "task": "In UML notation, at which end of the relationship line is the aggregation diamond placed?",
    "canonical": "At the whole end",
    "accepted": [
      "at the whole end",
      "whole end",
      "whole",
      "parent end"
    ],
    "flagAnatomy": {
      "commandPurpose": "Specifies which entity is the container and which is the component.",
      "syntaxExample": "Whole (Diamond) - Part",
      "whenToUse": "All aggregation and composition diagrams.",
      "omissionRisk": "Placing diamond on part reverses the whole-part hierarchy.",
      "relationalImpact": "Identifies parent table in foreign key structure."
    }
  },
  {
    "id": 79,
    "sectorId": 6,
    "sectorTitle": "Aggregation vs Composition (UML Notations)",
    "difficulty": "Intermediate",
    "source": "Seminar 01",
    "title": "Composition (Composite Aggregation) Definition",
    "story": "Analysis Scenario: Composition (Composite Aggregation) Definition. Carefully review the business requirements.",
    "task": "A relationship where the part belongs to exactly one whole, and when the whole is destroyed, the parts are destroyed with it, is called what?",
    "canonical": "Composition",
    "accepted": [
      "composition",
      "composite aggregation"
    ],
    "flagAnatomy": {
      "commandPurpose": "Models strict ownership and shared lifecycle.",
      "syntaxExample": "Whole ◆- Part",
      "whenToUse": "When components have no standalone existence (e.g. Building and Room).",
      "omissionRisk": "Leaving orphan component records after parent destruction.",
      "relationalImpact": "ON DELETE CASCADE on foreign key."
    }
  },
  {
    "id": 80,
    "sectorId": 6,
    "sectorTitle": "Aggregation vs Composition (UML Notations)",
    "difficulty": "Intermediate",
    "source": "Seminar 01",
    "title": "Composition UML Symbol",
    "story": "Analysis Scenario: Composition UML Symbol. Carefully review the business requirements.",
    "task": "In UML notation, what symbol represents composition?",
    "canonical": "Filled diamond",
    "accepted": [
      "filled diamond",
      "solid diamond",
      "black diamond"
    ],
    "flagAnatomy": {
      "commandPurpose": "Standard UML notation for strict existential composition.",
      "syntaxExample": "Conference ◆- Session",
      "whenToUse": "When parts cannot exist without the whole.",
      "omissionRisk": "Using hollow diamond fails to convey lifecycle dependency.",
      "relationalImpact": "Translates to mandatory foreign key with cascade deletion."
    }
  },
  {
    "id": 81,
    "sectorId": 6,
    "sectorTitle": "Aggregation vs Composition (UML Notations)",
    "difficulty": "Intermediate",
    "source": "Seminar 01",
    "title": "Multiplicity at Whole End in Composition",
    "story": "Analysis Scenario: Multiplicity at Whole End in Composition. Carefully review the business requirements.",
    "task": "What MUST the multiplicity at the whole end of a composition relationship ALWAYS be?",
    "canonical": "1..1",
    "accepted": [
      "1..1",
      "1"
    ],
    "flagAnatomy": {
      "commandPurpose": "Enforces that a composite part belongs to exactly one container.",
      "syntaxExample": "Whole 1..1 ◆- 1..* Part",
      "whenToUse": "Every composition relationship.",
      "omissionRisk": "Allowing 0..* contradicts exclusive ownership.",
      "relationalImpact": "Foreign key column in part table must be NOT NULL."
    }
  },
  {
    "id": 82,
    "sectorId": 6,
    "sectorTitle": "Aggregation vs Composition (UML Notations)",
    "difficulty": "Intermediate",
    "source": "Seminar 01",
    "title": "Conference and Session Case Analysis",
    "story": "Seminar Task 4: An academic conference is made of sessions. If the conference is canceled, its sessions cease to exist.",
    "task": "Which construct correctly models the relationship: Association, Aggregation, or Composition?",
    "canonical": "Composition",
    "accepted": [
      "composition"
    ],
    "flagAnatomy": {
      "commandPurpose": "Applies composition to event schedule hierarchy.",
      "syntaxExample": "Conference 1..1 ◆- 1..* Session",
      "whenToUse": "When session schedules cannot exist without their parent conference.",
      "omissionRisk": "Ghost sessions remaining scheduled without a conference.",
      "relationalImpact": "ConferenceID in Session is NOT NULL with ON DELETE CASCADE."
    }
  },
  {
    "id": 83,
    "sectorId": 6,
    "sectorTitle": "Aggregation vs Composition (UML Notations)",
    "difficulty": "Intermediate",
    "source": "Seminar 01",
    "title": "Session and Paper Case Analysis",
    "story": "Seminar Task 4: A session presents academic papers. If a session is canceled, the research papers still exist and can be rescheduled.",
    "task": "Which construct correctly models the relationship: Association, Aggregation, or Composition?",
    "canonical": "Aggregation",
    "accepted": [
      "aggregation",
      "shared aggregation"
    ],
    "flagAnatomy": {
      "commandPurpose": "Applies shared aggregation where parts outlive containers.",
      "syntaxExample": "Session 0..* ◇- 1..* Paper",
      "whenToUse": "When academic papers belong to sessions but have independent value.",
      "omissionRisk": "Deleting research manuscripts when a timetable session is dropped.",
      "relationalImpact": "Paper foreign key sessionID allows NULL or re-assignment."
    }
  },
  {
    "id": 84,
    "sectorId": 6,
    "sectorTitle": "Aggregation vs Composition (UML Notations)",
    "difficulty": "Intermediate",
    "source": "Seminar 01",
    "title": "Building and Room Relationship Classification",
    "story": "A university campus has Buildings and Rooms. If a building is demolished, all its rooms are demolished.",
    "task": "Is this relationship an Association, an Aggregation, or a Composition?",
    "canonical": "Composition",
    "accepted": [
      "composition"
    ],
    "flagAnatomy": {
      "commandPurpose": "Classic architectural composition example.",
      "syntaxExample": "Building 1..1 ◆- 1..* Room",
      "whenToUse": "Physical sub-spaces of a structure.",
      "omissionRisk": "Retaining room records for demolished facilities.",
      "relationalImpact": "Room table uses composite key (buildingID, roomNo) with cascade delete."
    }
  },
  {
    "id": 85,
    "sectorId": 6,
    "sectorTitle": "Aggregation vs Composition (UML Notations)",
    "difficulty": "Intermediate",
    "source": "Seminar 01",
    "title": "Team and Player Relationship Classification",
    "story": "A sports league has Teams and Players. If a team disbands, the players remain free agents and can join other teams.",
    "task": "Is this relationship an Association, an Aggregation, or a Composition?",
    "canonical": "Aggregation",
    "accepted": [
      "aggregation",
      "shared aggregation"
    ],
    "flagAnatomy": {
      "commandPurpose": "Models transferable human resource affiliations.",
      "syntaxExample": "Team 0..1 ◇- 1..* Player",
      "whenToUse": "When members can exist without their current organization.",
      "omissionRisk": "Deleting athlete records when a club goes bankrupt.",
      "relationalImpact": "teamID in Player table is nullable."
    }
  },
  {
    "id": 86,
    "sectorId": 6,
    "sectorTitle": "Aggregation vs Composition (UML Notations)",
    "difficulty": "Intermediate",
    "source": "Seminar 01",
    "title": "Car and Engine Relationship Classification",
    "story": "A car has an engine. If the car is decommissioned, the engine can be removed, refurbished, and installed into another vehicle.",
    "task": "Is this relationship best modeled as Aggregation or Composition?",
    "canonical": "Aggregation",
    "accepted": [
      "aggregation",
      "shared aggregation"
    ],
    "flagAnatomy": {
      "commandPurpose": "Demonstrates modular part interchangeability.",
      "syntaxExample": "Car 0..1 ◇- 1..1 Engine",
      "whenToUse": "For salvageable, swappable components.",
      "omissionRisk": "Composition would delete expensive assets upon chassis retirement.",
      "relationalImpact": "Engine table maintains its own primary key (serialNo)."
    }
  },
  {
    "id": 87,
    "sectorId": 6,
    "sectorTitle": "Aggregation vs Composition (UML Notations)",
    "difficulty": "Intermediate",
    "source": "Seminar 01",
    "title": "Invoice and InvoiceLine Relationship Classification",
    "story": "An accounting system stores Invoices and InvoiceLines. An invoice line has no meaning or legal existence outside its invoice.",
    "task": "Is this relationship an Association, an Aggregation, or a Composition?",
    "canonical": "Composition",
    "accepted": [
      "composition"
    ],
    "flagAnatomy": {
      "commandPurpose": "Models financial document integrity.",
      "syntaxExample": "Invoice 1..1 ◆- 1..* InvoiceLine",
      "whenToUse": "For line items, receipts, and order breakdowns.",
      "omissionRisk": "Loose association allows orphaned charges.",
      "relationalImpact": "InvoiceLine has composite key (invoiceNo, lineNo)."
    }
  },
  {
    "id": 88,
    "sectorId": 6,
    "sectorTitle": "Aggregation vs Composition (UML Notations)",
    "difficulty": "Intermediate",
    "source": "Seminar 01",
    "title": "Can a Part Belong to Multiple Wholes in Composition?",
    "story": "Analysis Scenario: Can a Part Belong to Multiple Wholes in Composition?. Carefully review the business requirements.",
    "task": "Under strict UML composition rules, can an instance of a part belong to more than one instance of a whole at the same time?",
    "canonical": "No",
    "accepted": [
      "no",
      "false"
    ],
    "flagAnatomy": {
      "commandPurpose": "Enforces the exclusivity principle of composition.",
      "syntaxExample": "Multiplicity at whole end must be at most 1",
      "whenToUse": "Validating composite hierarchy rules.",
      "omissionRisk": "Permitting shared ownership breaks single-parent cascade deletion.",
      "relationalImpact": "Foreign key column cannot store multiple parent IDs without bridge table."
    }
  },
  {
    "id": 89,
    "sectorId": 6,
    "sectorTitle": "Aggregation vs Composition (UML Notations)",
    "difficulty": "Intermediate",
    "source": "Seminar 01",
    "title": "Can a Part Belong to Multiple Wholes in Shared Aggregation?",
    "story": "Analysis Scenario: Can a Part Belong to Multiple Wholes in Shared Aggregation?. Carefully review the business requirements.",
    "task": "Under UML shared aggregation rules, can an instance of a part belong to multiple whole instances (e.g. Paper in multiple Sessions)?",
    "canonical": "Yes",
    "accepted": [
      "yes",
      "true"
    ],
    "flagAnatomy": {
      "commandPurpose": "Highlights the 'shared' aspect of aggregation.",
      "syntaxExample": "Multiplicity at whole end can be 0..*",
      "whenToUse": "When items are cross-listed in multiple categories or bundles.",
      "omissionRisk": "Thinking aggregation restricts items to single containers.",
      "relationalImpact": "Implemented using an M:N junction table."
    }
  },
  {
    "id": 90,
    "sectorId": 6,
    "sectorTitle": "Aggregation vs Composition (UML Notations)",
    "difficulty": "Intermediate",
    "source": "Seminar 01",
    "title": "Weak Entity as Composition Equivalence",
    "story": "Analysis Scenario: Weak Entity as Composition Equivalence. Carefully review the business requirements.",
    "task": "In database modeling with UML, every weak entity relationship is semantically equivalent to which construct?",
    "canonical": "Composition",
    "accepted": [
      "composition",
      "composite aggregation"
    ],
    "flagAnatomy": {
      "commandPurpose": "Connects traditional ER weak entity theory with modern UML class diagrams.",
      "syntaxExample": "Owner 1..1 ◆- 1..* WeakEntity",
      "whenToUse": "Explaining notation convergence.",
      "omissionRisk": "Confusing weak entities with plain associations.",
      "relationalImpact": "Identical relational schema: composite key and ON DELETE CASCADE."
    }
  },
  {
    "id": 91,
    "sectorId": 7,
    "sectorTitle": "Connection Traps: The Fan Trap Diagnosis",
    "difficulty": "Intermediate",
    "source": "Seminar 01",
    "title": "Connection Trap General Definition",
    "story": "Analysis Scenario: Connection Trap General Definition. Carefully review the business requirements.",
    "task": "A structural error in an ER diagram where relationship pathways produce ambiguity or lose data for certain instances is called what?",
    "canonical": "Connection trap",
    "accepted": [
      "connection trap",
      "structural trap"
    ],
    "flagAnatomy": {
      "commandPurpose": "Identifies systemic topological modeling errors in ER schemas.",
      "syntaxExample": "Fan Trap or Chasm Trap",
      "whenToUse": "During ER validation and semantic pathway verification.",
      "omissionRisk": "Deploying a schema that cannot answer essential business queries.",
      "relationalImpact": "Forces complex, slow, or impossible SQL queries."
    }
  },
  {
    "id": 92,
    "sectorId": 7,
    "sectorTitle": "Connection Traps: The Fan Trap Diagnosis",
    "difficulty": "Intermediate",
    "source": "Seminar 01",
    "title": "Fan Trap Structural Definition",
    "story": "Analysis Scenario: Fan Trap Structural Definition. Carefully review the business requirements.",
    "task": "A connection trap where two 1:N relationships fan out from the same entity, creating ambiguity regarding how the two 'many' ends relate, is called what?",
    "canonical": "Fan trap",
    "accepted": [
      "fan trap",
      "the fan trap"
    ],
    "flagAnatomy": {
      "commandPurpose": "Defines the classic fan-out ambiguity pattern.",
      "syntaxExample": "Staff (1..*) <- Division (1..1) -> Branch (1..*)",
      "whenToUse": "Detecting misarranged 1:N associations.",
      "omissionRisk": "The database cannot determine which staff member belongs to which branch.",
      "relationalImpact": "Produces misleading Cartesian product combinations."
    }
  },
  {
    "id": 93,
    "sectorId": 7,
    "sectorTitle": "Connection Traps: The Fan Trap Diagnosis",
    "difficulty": "Intermediate",
    "source": "Seminar 01",
    "title": "Seminar Task 6 Fan Trap Scenario",
    "story": "Analysis Scenario: Seminar Task 6 Fan Trap Scenario. Carefully review the business requirements.",
    "task": "Seminar Task 6: Division D1 operates branches B1 and B2, and employs staff S21 and S22. Which entity does the model fan out from?",
    "canonical": "Division",
    "accepted": [
      "division"
    ],
    "flagAnatomy": {
      "commandPurpose": "Locates the central fanning entity in the seminar case study.",
      "syntaxExample": "Division operates Branch, Division employs Staff",
      "whenToUse": "Analyzing why the navigation path is ambiguous.",
      "omissionRisk": "Blaming Staff or Branch instead of the focal Division entity.",
      "relationalImpact": "Division table holds no keys to resolve staff-branch allocation."
    }
  },
  {
    "id": 94,
    "sectorId": 7,
    "sectorTitle": "Connection Traps: The Fan Trap Diagnosis",
    "difficulty": "Intermediate",
    "source": "Seminar 01",
    "title": "Why Division-Staff-Branch Path Fails",
    "story": "Analysis Scenario: Why Division-Staff-Branch Path Fails. Carefully review the business requirements.",
    "task": "Why can the pathway Staff -> Division -> Branch not tell which branch staff member S21 works at?",
    "canonical": "It returns all branches of the division",
    "accepted": [
      "it returns all branches of the division",
      "returns all branches",
      "gives all branches",
      "ambiguous",
      "multiple branches returned"
    ],
    "flagAnatomy": {
      "commandPurpose": "Explains the exact query failure caused by a fan trap.",
      "syntaxExample": "S21 -> D1 -> {B1, B2} (Ambiguous result)",
      "whenToUse": "Testing schema against business questions.",
      "omissionRisk": "Assuming any connected path can resolve specific instance linkages.",
      "relationalImpact": "SQL query returns 2 rows instead of 1."
    }
  },
  {
    "id": 95,
    "sectorId": 7,
    "sectorTitle": "Connection Traps: The Fan Trap Diagnosis",
    "difficulty": "Intermediate",
    "source": "Seminar 01",
    "title": "Restructuring Fan Trap into a Linear Chain",
    "story": "Analysis Scenario: Restructuring Fan Trap into a Linear Chain. Carefully review the business requirements.",
    "task": "To repair the fan trap in Task 6, how must the relationships be rearranged?",
    "canonical": "Into a chain",
    "accepted": [
      "into a chain",
      "chain",
      "linear chain"
    ],
    "flagAnatomy": {
      "commandPurpose": "Applies the classic fan trap restructuring strategy.",
      "syntaxExample": "Staff -> Branch -> Division",
      "whenToUse": "Resolving all fan trap ambiguities.",
      "omissionRisk": "Adding redundant relationships without fixing the core pathway.",
      "relationalImpact": "Eliminates ambiguous foreign key references."
    }
  },
  {
    "id": 96,
    "sectorId": 7,
    "sectorTitle": "Connection Traps: The Fan Trap Diagnosis",
    "difficulty": "Intermediate",
    "source": "Seminar 01",
    "title": "Repaired Path: Staff to Branch Relationship",
    "story": "Analysis Scenario: Repaired Path: Staff to Branch Relationship. Carefully review the business requirements.",
    "task": "In the repaired fan trap model, what relationship directly links Staff and Branch?",
    "canonical": "Staff works at Branch",
    "accepted": [
      "staff works at branch",
      "worksat",
      "works at",
      "staff branch"
    ],
    "flagAnatomy": {
      "commandPurpose": "Establishes unambiguous local affiliation for each employee.",
      "syntaxExample": "Staff 1..* - WorksAt - 1..1 Branch",
      "whenToUse": "Re-linking the two 'many' ends directly.",
      "omissionRisk": "Leaving staff connected only to division.",
      "relationalImpact": "branchNo foreign key placed in Staff table."
    }
  },
  {
    "id": 97,
    "sectorId": 7,
    "sectorTitle": "Connection Traps: The Fan Trap Diagnosis",
    "difficulty": "Intermediate",
    "source": "Seminar 01",
    "title": "Repaired Path: Branch to Division Relationship",
    "story": "Analysis Scenario: Repaired Path: Branch to Division Relationship. Carefully review the business requirements.",
    "task": "In the repaired fan trap model, how does Branch relate to Division?",
    "canonical": "Branch belongs to Division",
    "accepted": [
      "branch belongs to division",
      "belongsto",
      "belongs to",
      "operates"
    ],
    "flagAnatomy": {
      "commandPurpose": "Maintains organizational hierarchy through the branch node.",
      "syntaxExample": "Branch 1..* - BelongsTo - 1..1 Division",
      "whenToUse": "Connecting locations to regional divisions.",
      "omissionRisk": "Losing which division oversees which branch.",
      "relationalImpact": "divisionNo foreign key placed in Branch table."
    }
  },
  {
    "id": 98,
    "sectorId": 7,
    "sectorTitle": "Connection Traps: The Fan Trap Diagnosis",
    "difficulty": "Intermediate",
    "source": "Seminar 01",
    "title": "Answering 'Which Division Does Staff S21 Belong To?'",
    "story": "Analysis Scenario: Answering 'Which Division Does Staff S21 Belong To?'. Carefully review the business requirements.",
    "task": "In the repaired model (Staff -> Branch -> Division), can we still determine which division a staff member belongs to?",
    "canonical": "Yes",
    "accepted": [
      "yes",
      "true"
    ],
    "flagAnatomy": {
      "commandPurpose": "Confirms that the repaired chain answers both original business questions.",
      "syntaxExample": "S21 -> B1 -> D1 (Unambiguous navigation)",
      "whenToUse": "Validating that no query capability was sacrificed.",
      "omissionRisk": "Fearing that restructuring broke division-level reporting.",
      "relationalImpact": "Standard 2-join query: Staff JOIN Branch JOIN Division."
    }
  },
  {
    "id": 99,
    "sectorId": 7,
    "sectorTitle": "Connection Traps: The Fan Trap Diagnosis",
    "difficulty": "Intermediate",
    "source": "Seminar 01",
    "title": "Underlying Cause of Fan Traps",
    "story": "Analysis Scenario: Underlying Cause of Fan Traps. Carefully review the business requirements.",
    "task": "A fan trap occurs because the real real-world association actually runs between which ends?",
    "canonical": "Between the two 'many' ends",
    "accepted": [
      "between the two many ends",
      "the two many ends",
      "between many ends",
      "many ends"
    ],
    "flagAnatomy": {
      "commandPurpose": "States the root ontological cause of fan traps.",
      "syntaxExample": "Staff (many) - Branch (many) should be directly linked",
      "whenToUse": "Recognizing when two 1:N relationships represent a disguised chain.",
      "omissionRisk": "Modeling through a shared parent when children have direct bonds.",
      "relationalImpact": "Resolves missing foreign key constraints."
    }
  },
  {
    "id": 100,
    "sectorId": 7,
    "sectorTitle": "Connection Traps: The Fan Trap Diagnosis",
    "difficulty": "Intermediate",
    "source": "Seminar 01",
    "title": "Fan Trap Visual Recognition Pattern",
    "story": "Analysis Scenario: Fan Trap Visual Recognition Pattern. Carefully review the business requirements.",
    "task": "Visually, what pattern in an ER diagram immediately alerts the designer to a possible fan trap?",
    "canonical": "Two 1:N relationships fanning out from the same entity",
    "accepted": [
      "two 1:n relationships fanning out from the same entity",
      "two 1:n relationships",
      "two one to many relationships",
      "arrows fanning out"
    ],
    "flagAnatomy": {
      "commandPurpose": "Provides quick visual diagnostic heuristic for ER auditing.",
      "syntaxExample": "(1..*) <- [Entity] -> (1..*)",
      "whenToUse": "Reviewing draft diagrams for connection traps.",
      "omissionRisk": "Overlooking fan traps during coursework or design reviews.",
      "relationalImpact": "Prevents flawed database schema implementations."
    }
  }
];
});
