/**
 * DATABASE SYSTEMS ACADEMY — WEEK 1 QUESTIONS (Part 1: Q1 - Q50)
 * Simple English, Neutral Branding, UML Standard.
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.QUESTIONS_W1_PART1 = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  return [
  {
    "id": 1,
    "sectorId": 1,
    "sectorTitle": "Entity Types, Attributes & Primary Keys",
    "difficulty": "Basic",
    "source": "Lecture 01 Slide 12",
    "title": "Entity Type vs Entity Instance Definition",
    "story": "A database designer must distinguish between the template of an object and individual occurrences in real life.",
    "task": "What is the term for a single occurrence of an entity type, such as 'John Doe' in the Staff entity?",
    "canonical": "Entity instance",
    "accepted": [
      "entity instance",
      "entity occurrence",
      "instance",
      "occurrence"
    ],
    "flagAnatomy": {
      "commandPurpose": "Identifies a specific real-world occurrence of an entity type.",
      "syntaxExample": "Staff (Type) -> 'John Doe', StaffNo 'SL21' (Instance)",
      "whenToUse": "When distinguishing between schema definitions and actual stored records.",
      "omissionRisk": "Confusing instances with types leads to creating a table for each person instead of one shared table.",
      "relationalImpact": "Maps directly to a row (tuple) in a relational table."
    }
  },
  {
    "id": 2,
    "sectorId": 1,
    "sectorTitle": "Entity Types, Attributes & Primary Keys",
    "difficulty": "Basic",
    "source": "Lecture 01 Slide 15",
    "title": "Simple (Atomic) Attribute Classification",
    "story": "Attributes hold values describing an entity. Some cannot be divided further without losing meaning.",
    "task": "What type of attribute consists of a single component with an independent existence (e.g., salary)?",
    "canonical": "Simple attribute",
    "accepted": [
      "simple attribute",
      "atomic attribute",
      "simple",
      "atomic"
    ],
    "flagAnatomy": {
      "commandPurpose": "Defines an indivisible piece of information.",
      "syntaxExample": "salary: Currency",
      "whenToUse": "For scalar values like salary, creditLimit, or dateOfBirth.",
      "omissionRisk": "Treating complex attributes as simple makes filtering and sorting on sub-components impossible.",
      "relationalImpact": "Maps directly to a single column with an atomic data type."
    }
  },
  {
    "id": 3,
    "sectorId": 1,
    "sectorTitle": "Entity Types, Attributes & Primary Keys",
    "difficulty": "Basic",
    "source": "Lecture 01 Slide 16",
    "title": "Composite Attribute Decomposition",
    "story": "A client wants to store addresses so that the marketing department can send mail filtered by city or postal code.",
    "task": "What is an attribute composed of multiple sub-components called (e.g., street, city, postcode)?",
    "canonical": "Composite attribute",
    "accepted": [
      "composite attribute",
      "composite"
    ],
    "flagAnatomy": {
      "commandPurpose": "Groups logically related sub-attributes that form a complete concept.",
      "syntaxExample": "address (street, city, postcode)",
      "whenToUse": "When sub-parts of an attribute are queried independently.",
      "omissionRisk": "Storing full address in one string prevents indexing and sorting by postcode or city.",
      "relationalImpact": "Flattened into separate columns: addr_street, addr_city, addr_postcode."
    }
  },
  {
    "id": 4,
    "sectorId": 1,
    "sectorTitle": "Entity Types, Attributes & Primary Keys",
    "difficulty": "Intermediate",
    "source": "Lecture 01 Slide 17",
    "title": "Multi-Valued Attribute Specification",
    "story": "A branch office may have multiple direct phone numbers (reception, fax, manager's desk) or none at all.",
    "task": "What type of attribute can hold multiple values for a single entity instance?",
    "canonical": "Multi-valued attribute",
    "accepted": [
      "multi-valued attribute",
      "multivalued attribute",
      "multi-valued",
      "multivalued"
    ],
    "flagAnatomy": {
      "commandPurpose": "Allows zero or more values of the same attribute type per entity instance.",
      "syntaxExample": "telNo [1..3] or telNo {0..*}",
      "whenToUse": "When an entity can have several phone numbers, email addresses, or skills.",
      "omissionRisk": "Storing multiple values in a single cell violates 1NF (atomicity rule).",
      "relationalImpact": "Must be split into a child table with a foreign key to the parent entity."
    }
  },
  {
    "id": 5,
    "sectorId": 1,
    "sectorTitle": "Entity Types, Attributes & Primary Keys",
    "difficulty": "Basic",
    "source": "Lecture 01 Slide 18",
    "title": "Derived Attribute Identification",
    "story": "A human resources system records both the employee's date of birth and their current age.",
    "task": "What type of attribute displays a value calculated from other existing attributes?",
    "canonical": "Derived attribute",
    "accepted": [
      "derived attribute",
      "computed attribute",
      "derived"
    ],
    "flagAnatomy": {
      "commandPurpose": "Represents a value computed dynamically on-the-fly.",
      "syntaxExample": "/age (calculated from currentDate - dateOfBirth)",
      "whenToUse": "For calculated totals, age, or balance that depend on current time or transactions.",
      "omissionRisk": "Storing derived values statically creates stale, incorrect data as time advances.",
      "relationalImpact": "Typically omitted from base tables and exposed via SQL views or generated columns."
    }
  },
  {
    "id": 6,
    "sectorId": 1,
    "sectorTitle": "Entity Types, Attributes & Primary Keys",
    "difficulty": "Basic",
    "source": "Lecture 01 Slide 20",
    "title": "Candidate Key Selection Criteria",
    "story": "An entity has multiple attributes that can uniquely identify an instance, such as ssn, staffNo, and email.",
    "task": "What is the minimal set of attributes that uniquely identifies each entity instance called?",
    "canonical": "Candidate key",
    "accepted": [
      "candidate key",
      "candidate"
    ],
    "flagAnatomy": {
      "commandPurpose": "Represents any minimal unique identifier candidate for an entity.",
      "syntaxExample": "staffNo, nationalID, passportNo",
      "whenToUse": "During conceptual analysis before selecting the official primary key.",
      "omissionRisk": "Failing to identify candidate keys results in missing UNIQUE constraints.",
      "relationalImpact": "All candidate keys not chosen as the primary key become UNIQUE constraints."
    }
  },
  {
    "id": 7,
    "sectorId": 1,
    "sectorTitle": "Entity Types, Attributes & Primary Keys",
    "difficulty": "Seminar 01 Table 1",
    "source": "Seminar 01",
    "title": "Primary Key Tag in UML Notation",
    "story": "In UML notation for conceptual database design, how is a primary key attribute designated inside the entity box?",
    "task": "{PK}",
    "canonical": [
      "{pk}",
      "pk",
      "{primary key}"
    ],
    "accepted": [
      {
        "commandPurpose": "Marks the chosen unique identifier attribute in UML class diagrams.",
        "syntaxExample": "staffNo {PK}",
        "whenToUse": "Always mandatory on every strong entity type compartment.",
        "omissionRisk": "Without {PK}, relations cannot establish foreign key references.",
        "relationalImpact": "Maps directly to PRIMARY KEY constraint in SQL DDL."
      }
    ],
    "flagAnatomy": "Basic"
  },
  {
    "id": 8,
    "sectorId": 1,
    "sectorTitle": "Entity Types, Attributes & Primary Keys",
    "difficulty": "Seminar 01 Table 1",
    "source": "Seminar 01",
    "title": "Partial Primary Key Tag for Weak Entities",
    "story": "In UML notation, how is the partial key (discriminator) of a weak entity marked?",
    "task": "{PPK}",
    "canonical": [
      "{ppk}",
      "ppk",
      "{partial key}"
    ],
    "accepted": [
      {
        "commandPurpose": "Designates the attribute that distinguishes occurrences within the owner entity.",
        "syntaxExample": "roomNo {PPK} or name {PPK}",
        "whenToUse": "On weak entities that depend on an owner entity's primary key.",
        "omissionRisk": "Treating {PPK} as {PK} causes duplicate key collisions across different owners.",
        "relationalImpact": "Combined with the owner's foreign key to create a composite primary key in SQL."
      }
    ],
    "flagAnatomy": "Intermediate"
  },
  {
    "id": 9,
    "sectorId": 1,
    "sectorTitle": "Entity Types, Attributes & Primary Keys",
    "difficulty": "Lecture 01 Slide 21",
    "source": "Seminar 01",
    "title": "Alternate Key Definition",
    "story": "A candidate key that was not chosen as the primary key is referred to by what technical term?",
    "task": "Alternate key",
    "canonical": [
      "alternate key",
      "secondary key",
      "alternate"
    ],
    "accepted": [
      {
        "commandPurpose": "Identifies secondary unique attributes like email or tax number.",
        "syntaxExample": "staffNo {PK}, email (Alternate Key)",
        "whenToUse": "When multiple unique identifiers exist.",
        "omissionRisk": "Allowing duplicate emails because only staffNo was enforced.",
        "relationalImpact": "Enforced via UNIQUE NOT NULL constraints in relational schema."
      }
    ],
    "flagAnatomy": "Basic"
  },
  {
    "id": 10,
    "sectorId": 1,
    "sectorTitle": "Entity Types, Attributes & Primary Keys",
    "difficulty": "Intermediate",
    "source": "Lecture 01 Slide 22",
    "title": "Composite Primary Key Definition",
    "story": "In a student enrollment database, a student may enroll in many modules and a module has many students.",
    "task": "What is a primary key that consists of two or more attributes called?",
    "canonical": "Composite key",
    "accepted": [
      "composite key",
      "composite primary key"
    ],
    "flagAnatomy": {
      "commandPurpose": "Uniquely identifies a record using a combination of two or more attributes.",
      "syntaxExample": "{studentID, moduleCode} {PK}",
      "whenToUse": "For intersection/bridge tables in M:N relationships and weak entities.",
      "omissionRisk": "Using an unnecessary surrogate ID when natural business keys uniquely bind the row.",
      "relationalImpact": "CONSTRAINT pk_enroll PRIMARY KEY (studentID, moduleCode)."
    }
  },
  {
    "id": 11,
    "sectorId": 1,
    "sectorTitle": "Entity Types, Attributes & Primary Keys",
    "difficulty": "Basic",
    "source": "Lecture 01 Slide 14",
    "title": "Domain Definition in Conceptual Modeling",
    "story": "Every attribute in an entity draws its permissible values from a predefined set.",
    "task": "What is the term for the set of all allowable values for an attribute?",
    "canonical": "Domain",
    "accepted": [
      "domain",
      "attribute domain"
    ],
    "flagAnatomy": {
      "commandPurpose": "Defines data type, format, length, and valid range for attribute values.",
      "syntaxExample": "Domain of staffNo: 5 characters starting with 'S'",
      "whenToUse": "To enforce domain integrity across all entities.",
      "omissionRisk": "Allows invalid data such as negative salaries or non-existent phone prefixes.",
      "relationalImpact": "Maps to SQL CHECK constraints and custom DOMAIN / ENUM types."
    }
  },
  {
    "id": 12,
    "sectorId": 1,
    "sectorTitle": "Entity Types, Attributes & Primary Keys",
    "difficulty": "Lecture 01 Slide 13",
    "source": "Seminar 01",
    "title": "Entity Type vs Entity Set",
    "story": "What is the collection of all currently existing instances of a given entity type in the database called?",
    "task": "Entity set",
    "canonical": [
      "entity set",
      "extension"
    ],
    "accepted": [
      {
        "commandPurpose": "Refers to the actual population of data currently stored for an entity.",
        "syntaxExample": "The set of all current Staff members currently working at the firm.",
        "whenToUse": "Distinguishing between schema intension (structure) and extension (data content).",
        "omissionRisk": "Confusing the static schema with dynamic row content.",
        "relationalImpact": "Corresponds to the set of all rows currently populated in a table."
      }
    ],
    "flagAnatomy": "Intermediate"
  },
  {
    "id": 13,
    "sectorId": 1,
    "sectorTitle": "Entity Types, Attributes & Primary Keys",
    "difficulty": "Basic",
    "source": "Lecture 01 Slide 23",
    "title": "Null Value Significance",
    "story": "An employee has no home phone number, or their department manager is not yet appointed.",
    "task": "What special value indicates that an attribute is not applicable or currently unknown?",
    "canonical": "NULL",
    "accepted": [
      "null",
      "null value"
    ],
    "flagAnatomy": {
      "commandPurpose": "Represents missing, unknown, or inapplicable attribute values.",
      "syntaxExample": "phone: NULL",
      "whenToUse": "For optional attributes where a value is not immediately mandatory.",
      "omissionRisk": "Treating NULL as zero (0) or empty string ('') skews aggregate calculations like AVG().",
      "relationalImpact": "Enforced using NULL vs NOT NULL constraints on table columns."
    }
  },
  {
    "id": 14,
    "sectorId": 1,
    "sectorTitle": "Entity Types, Attributes & Primary Keys",
    "difficulty": "Basic",
    "source": "Lecture 01 Slide 25",
    "title": "Degree of a Relationship",
    "story": "A relationship connects two entities (e.g. Branch and Staff).",
    "task": "What is the term for the number of participating entity types in a relationship?",
    "canonical": "Degree",
    "accepted": [
      "degree",
      "degree of relationship"
    ],
    "flagAnatomy": {
      "commandPurpose": "Classifies relationships as unary (1), binary (2), ternary (3), or n-ary (N).",
      "syntaxExample": "Degree 2 = Binary; Degree 3 = Ternary",
      "whenToUse": "When determining the structural complexity of an association.",
      "omissionRisk": "Misinterpreting relationship degree leads to incorrect relational mapping.",
      "relationalImpact": "Determines how many foreign keys or bridge tables are required."
    }
  },
  {
    "id": 15,
    "sectorId": 1,
    "sectorTitle": "Entity Types, Attributes & Primary Keys",
    "difficulty": "Intermediate",
    "source": "Lecture 01 Slide 27",
    "title": "Recursive (Unary) Relationship Definition",
    "story": "A staff member supervises other staff members within the same department.",
    "task": "What is a relationship where the same entity type participates in more than one role called?",
    "canonical": "Recursive relationship",
    "accepted": [
      "recursive relationship",
      "unary relationship",
      "recursive",
      "unary"
    ],
    "flagAnatomy": {
      "commandPurpose": "Models hierarchical relationships between instances of the same entity type.",
      "syntaxExample": "Staff (Supervisor) 0..1 - Supervises - 0..* Staff (Supervisee)",
      "whenToUse": "For organizational charts, category trees, and Bill of Materials (BOM).",
      "omissionRisk": "Creating redundant duplicate tables (e.g. Supervisor table and Staff table).",
      "relationalImpact": "Implemented as a self-referencing foreign key column in the same table."
    }
  },
  {
    "id": 16,
    "sectorId": 2,
    "sectorTitle": "Basic Relationships & UML Multiplicities",
    "difficulty": "Intermediate",
    "source": "Seminar 01 Table 1",
    "title": "Reading Multiplicity Beside an Entity",
    "story": "In UML notation, where does the multiplicity beside Entity B come from?",
    "task": "In UML notation, does the multiplicity beside Entity B describe how many instances of B participate for ONE instance of Entity A, or vice versa?",
    "canonical": "For one instance of Entity A",
    "accepted": [
      "for one instance of entity a",
      "one instance of entity a",
      "for one instance of a",
      "one instance of a"
    ],
    "flagAnatomy": {
      "commandPurpose": "Defines the fundamental rule for reading UML multiplicities correctly.",
      "syntaxExample": "Branch 1..1 - Has - 1..* Staff (Beside Staff: 1..* staff for 1 branch)",
      "whenToUse": "Every time a relationship is drawn or read in UML class diagrams.",
      "omissionRisk": "Inverting the multiplicity numbers completely reverses business logic.",
      "relationalImpact": "Determines which table receives the foreign key column."
    }
  },
  {
    "id": 17,
    "sectorId": 2,
    "sectorTitle": "Basic Relationships & UML Multiplicities",
    "difficulty": "Basic",
    "source": "Seminar 01 Task 1",
    "title": "Branch and Staff Multiplicity Specification",
    "story": "Business Rule: 'A branch has many members of staff. Each member of staff works at exactly one branch.'",
    "task": "State the multiplicity beside the Staff entity in this relationship.",
    "canonical": "1..*",
    "accepted": [
      "1..*",
      "1..n",
      "1..N"
    ],
    "flagAnatomy": {
      "commandPurpose": "Ensures every branch has at least one staff member and allows multiple staff.",
      "syntaxExample": "Branch 1..1 - WorksAt - 1..* Staff",
      "whenToUse": "When business policy demands that a location cannot be unstaffed.",
      "omissionRisk": "Using 0..* allows ghost branches with zero assigned employees.",
      "relationalImpact": "Staff table has a NOT NULL branchNo foreign key referencing Branch."
    }
  },
  {
    "id": 18,
    "sectorId": 2,
    "sectorTitle": "Basic Relationships & UML Multiplicities",
    "difficulty": "Basic",
    "source": "Seminar 01 Task 1",
    "title": "Staff Multiplicity in WorksAt Relationship",
    "story": "Business Rule: 'A branch has many members of staff. Each member of staff works at exactly one branch.'",
    "task": "State the multiplicity beside the Branch entity in this relationship.",
    "canonical": "1..1",
    "accepted": [
      "1..1",
      "1"
    ],
    "flagAnatomy": {
      "commandPurpose": "Enforces that an employee belongs to exactly one branch, not zero and not two.",
      "syntaxExample": "Branch 1..1 - WorksAt - 1..* Staff",
      "whenToUse": "When dual branch assignments are strictly forbidden.",
      "omissionRisk": "Setting 0..1 creates floating employees who belong nowhere.",
      "relationalImpact": "Enforced by placing foreign key branchNo NOT NULL in Staff table."
    }
  },
  {
    "id": 19,
    "sectorId": 2,
    "sectorTitle": "Basic Relationships & UML Multiplicities",
    "difficulty": "Intermediate",
    "source": "Seminar 01 Task 1",
    "title": "Branch Manager Multiplicity Specification",
    "story": "Business Rule: 'Each member of staff may manage at most one branch. Every branch is managed by exactly one member of staff.'",
    "task": "State the multiplicity beside the Branch entity in the 'Manages' relationship.",
    "canonical": "0..1",
    "accepted": [
      "0..1"
    ],
    "flagAnatomy": {
      "commandPurpose": "Specifies that managing a branch is optional for any given staff member.",
      "syntaxExample": "Staff 1..1 - Manages - 0..1 Branch (Beside Branch: staff manages at most 1 branch)",
      "whenToUse": "When only a small subset of employees hold management responsibilities.",
      "omissionRisk": "If set to 1..1, every single employee would be forced to manage a branch!",
      "relationalImpact": "managerStaffNo in Branch table is marked UNIQUE."
    }
  },
  {
    "id": 20,
    "sectorId": 2,
    "sectorTitle": "Basic Relationships & UML Multiplicities",
    "difficulty": "Basic",
    "source": "Seminar 01 Task 1",
    "title": "Branch Managed By Exactly One Staff",
    "story": "Business Rule: 'Each member of staff may manage at most one branch. Every branch is managed by exactly one member of staff.'",
    "task": "State the multiplicity beside the Staff entity in the 'Manages' relationship.",
    "canonical": "1..1",
    "accepted": [
      "1..1",
      "1"
    ],
    "flagAnatomy": {
      "commandPurpose": "Enforces that a branch cannot operate without a designated manager.",
      "syntaxExample": "Staff 1..1 - Manages - 0..1 Branch",
      "whenToUse": "When leadership accountability requires exactly one head per office.",
      "omissionRisk": "Setting 0..1 allows leaderless branches without supervision.",
      "relationalImpact": "managerStaffNo column in Branch table must be NOT NULL."
    }
  },
  {
    "id": 21,
    "sectorId": 2,
    "sectorTitle": "Basic Relationships & UML Multiplicities",
    "difficulty": "Intermediate",
    "source": "Seminar 01 Task 1",
    "title": "Student Module Registration Multiplicity",
    "story": "Business Rule: 'A student must take at least one and at most eight modules. A module may run with no students registered yet.'",
    "task": "State the multiplicity beside the Module entity in the 'Enrolls' relationship.",
    "canonical": "1..8",
    "accepted": [
      "1..8"
    ],
    "flagAnatomy": {
      "commandPurpose": "Constrains student enrollment between lower limit 1 and upper limit 8.",
      "syntaxExample": "Student 0..* - Enrolls - 1..8 Module",
      "whenToUse": "For strict academic workload credit policies.",
      "omissionRisk": "Using 1..* allows overloaded students taking 20 modules.",
      "relationalImpact": "Enforced via trigger or application logic counting enrollments per student."
    }
  },
  {
    "id": 22,
    "sectorId": 2,
    "sectorTitle": "Basic Relationships & UML Multiplicities",
    "difficulty": "Basic",
    "source": "Seminar 01 Task 1",
    "title": "Module Multiplicity with Zero Students",
    "story": "Business Rule: 'A student must take at least one and at most eight modules. A module may run with no students registered yet.'",
    "task": "State the multiplicity beside the Student entity in the 'Enrolls' relationship.",
    "canonical": "0..*",
    "accepted": [
      "0..*",
      "0..n",
      "0..N"
    ],
    "flagAnatomy": {
      "commandPurpose": "Allows newly created modules to exist before registration begins.",
      "syntaxExample": "Student 0..* - Enrolls - 1..8 Module",
      "whenToUse": "When catalog items can be offered before customer subscription.",
      "omissionRisk": "Setting 1..* prevents creating next semester's courses in the database.",
      "relationalImpact": "Enrollment junction table does not prevent module from existing in Module table."
    }
  },
  {
    "id": 23,
    "sectorId": 2,
    "sectorTitle": "Basic Relationships & UML Multiplicities",
    "difficulty": "Basic",
    "source": "Seminar 01 Task 1",
    "title": "Driving Lesson Instructor Assignment",
    "story": "Business Rule: 'Every driving lesson is given by exactly one instructor. An instructor gives many lessons.'",
    "task": "State the multiplicity beside the Instructor entity for the 'Lesson' relationship.",
    "canonical": "1..1",
    "accepted": [
      "1..1",
      "1"
    ],
    "flagAnatomy": {
      "commandPurpose": "Ensures every lesson has a qualified instructor assigned.",
      "syntaxExample": "Instructor 0..* - Conducts - 1..1 Lesson",
      "whenToUse": "When unsupervised sessions are prohibited.",
      "omissionRisk": "Setting 0..1 allows lessons to be scheduled with no driver present.",
      "relationalImpact": "instructorID in Lesson table is NOT NULL."
    }
  },
  {
    "id": 24,
    "sectorId": 2,
    "sectorTitle": "Basic Relationships & UML Multiplicities",
    "difficulty": "Basic",
    "source": "Seminar 01 Task 1",
    "title": "Video Rental Frequency Multiplicity",
    "story": "Business Rule: 'A copy of a video may be rented many times, or never. Each rental is for exactly one copy.'",
    "task": "State the multiplicity beside the Rental entity in this relationship.",
    "canonical": "0..*",
    "accepted": [
      "0..*",
      "0..n",
      "0..N"
    ],
    "flagAnatomy": {
      "commandPurpose": "Allows brand new video inventory that has not yet been rented.",
      "syntaxExample": "VideoCopy 1..1 - Forms - 0..* Rental",
      "whenToUse": "For inventory items that accumulate transaction history over time.",
      "omissionRisk": "Setting 1..* prevents adding new stock until a customer rents it.",
      "relationalImpact": "Rental table has a foreign key copyID referencing VideoCopy."
    }
  },
  {
    "id": 25,
    "sectorId": 2,
    "sectorTitle": "Basic Relationships & UML Multiplicities",
    "difficulty": "Intermediate",
    "source": "Seminar 01 Task 1",
    "title": "Department Creation with Zero Employees",
    "story": "Business Rule: 'A department may have no employees at the moment it is created. An employee always belongs to exactly one department.'",
    "task": "State the multiplicity beside the Employee entity in this relationship.",
    "canonical": "0..*",
    "accepted": [
      "0..*",
      "0..n",
      "0..N"
    ],
    "flagAnatomy": {
      "commandPurpose": "Permits new organizational departments to be established prior to staffing.",
      "syntaxExample": "Department 1..1 - Employs - 0..* Employee",
      "whenToUse": "When restructuring or launching new departments.",
      "omissionRisk": "Setting 1..* causes circular dependency when inserting the first department.",
      "relationalImpact": "Department table can be populated independently of Employee records."
    }
  },
  {
    "id": 26,
    "sectorId": 2,
    "sectorTitle": "Basic Relationships & UML Multiplicities",
    "difficulty": "Lecture 01 Slide 30",
    "source": "Seminar 01",
    "title": "Mandatory Participation Definition",
    "story": "If the minimum multiplicity for an entity type in a relationship is 1 (e.g. 1..1 or 1..*), what is this participation constraint called?",
    "task": "Mandatory participation",
    "canonical": [
      "mandatory participation",
      "mandatory",
      "total participation",
      "total"
    ],
    "accepted": [
      {
        "commandPurpose": "Requires every entity instance to take part in the relationship.",
        "syntaxExample": "1..1 or 1..*",
        "whenToUse": "When existence depends strictly on the association.",
        "omissionRisk": "Allows orphaned or detached entities in the system.",
        "relationalImpact": "Enforced by NOT NULL constraint on the foreign key column."
      }
    ],
    "flagAnatomy": "Basic"
  },
  {
    "id": 27,
    "sectorId": 2,
    "sectorTitle": "Basic Relationships & UML Multiplicities",
    "difficulty": "Lecture 01 Slide 30",
    "source": "Seminar 01",
    "title": "Optional Participation Definition",
    "story": "If the minimum multiplicity for an entity type in a relationship is 0 (e.g. 0..1 or 0..*), what is this participation constraint called?",
    "task": "Optional participation",
    "canonical": [
      "optional participation",
      "optional",
      "partial participation",
      "partial"
    ],
    "accepted": [
      {
        "commandPurpose": "Permits entity instances to exist without participating in the relationship.",
        "syntaxExample": "0..1 or 0..*",
        "whenToUse": "When relationship is contingent on future events (e.g. buyer making purchase).",
        "omissionRisk": "Forcing mandatory participation rejects valid unassociated records.",
        "relationalImpact": "Foreign key column in relational table allows NULL values."
      }
    ],
    "flagAnatomy": "Basic"
  },
  {
    "id": 28,
    "sectorId": 2,
    "sectorTitle": "Basic Relationships & UML Multiplicities",
    "difficulty": "Lecture 01 Slide 31",
    "source": "Seminar 01",
    "title": "Cardinality vs Participation in Multiplicity",
    "story": "Multiplicity combines two constraints: minimum and maximum instances. Which value represents the maximum limit?",
    "task": "Cardinality",
    "canonical": [
      "cardinality",
      "maximum cardinality",
      "max"
    ],
    "accepted": [
      {
        "commandPurpose": "Specifies the upper bound of relationship participation.",
        "syntaxExample": "min..max -> min is participation, max is cardinality",
        "whenToUse": "Distinguishing 1:1, 1:N, and M:N relationship categories.",
        "omissionRisk": "Conflating lower and upper bounds leads to faulty schema generation.",
        "relationalImpact": "Dictates whether foreign key must be UNIQUE (1:1) or non-unique (1:N)."
      }
    ],
    "flagAnatomy": "Intermediate"
  },
  {
    "id": 29,
    "sectorId": 2,
    "sectorTitle": "Basic Relationships & UML Multiplicities",
    "difficulty": "Lecture 01 Slide 32",
    "source": "Seminar 01",
    "title": "One-to-One (1:1) Relationship Identification",
    "story": "A country has one president, and a president governs one country. What is the cardinality of this relationship?",
    "task": "1:1",
    "canonical": [
      "1:1",
      "one to one",
      "one-to-one"
    ],
    "accepted": [
      {
        "commandPurpose": "Constrains maximum participation to one at both ends.",
        "syntaxExample": "Country 1..1 - GovernedBy - 1..1 President",
        "whenToUse": "For mutually exclusive paired entities.",
        "omissionRisk": "Using 1:N allows multiple presidents per country.",
        "relationalImpact": "Foreign key can be placed in either table, tagged with UNIQUE."
      }
    ],
    "flagAnatomy": "Basic"
  },
  {
    "id": 30,
    "sectorId": 2,
    "sectorTitle": "Basic Relationships & UML Multiplicities",
    "difficulty": "Lecture 01 Slide 34",
    "source": "Seminar 01",
    "title": "Many-to-Many (M:N) Relationship Multiplicities",
    "story": "Students enroll in many courses, and courses enroll many students. What are the maximum cardinalities at both ends?",
    "task": "M:N",
    "canonical": [
      "m:n",
      "many to many",
      "many-to-many",
      "*:*"
    ],
    "accepted": [
      {
        "commandPurpose": "Permits multiple associations in both directions.",
        "syntaxExample": "Student 0..* - Enrolls - 0..* Course",
        "whenToUse": "For cross-referencing collections.",
        "omissionRisk": "Cannot be implemented with a single foreign key without data redundancy.",
        "relationalImpact": "Requires a dedicated bridge/junction table in relational schema."
      }
    ],
    "flagAnatomy": "Basic"
  },
  {
    "id": 31,
    "sectorId": 3,
    "sectorTitle": "Weak Entities & Identifying Relationships",
    "difficulty": "Basic",
    "source": "Seminar 01 Task 2",
    "title": "Weak Entity Fundamental Definition",
    "story": "In a corporate database, the 'Child' entity cannot be identified without knowing which Employee is their parent.",
    "task": "What is an entity called that cannot be uniquely identified by its own attributes alone?",
    "canonical": "Weak entity",
    "accepted": [
      "weak entity",
      "weak entity type",
      "weak"
    ],
    "flagAnatomy": {
      "commandPurpose": "Models entities that depend on another entity for identity and existence.",
      "syntaxExample": "Child (name {PPK}, age) dependent on Employee",
      "whenToUse": "For sub-items, line items, and dependents lacking global identity.",
      "omissionRisk": "Inventing artificial keys detaches the entity and risks orphan records.",
      "relationalImpact": "Foreign key of owner forms part of the weak entity's primary key."
    }
  },
  {
    "id": 32,
    "sectorId": 3,
    "sectorTitle": "Weak Entities & Identifying Relationships",
    "difficulty": "Seminar 01 Task 2",
    "source": "Seminar 01",
    "title": "Identifying Relationship UML Representation",
    "story": "How is an identifying relationship that gives a weak entity its existence represented in UML notation?",
    "task": "Composition",
    "canonical": [
      "composition",
      "composite aggregation",
      "filled diamond",
      "solid diamond"
    ],
    "accepted": [
      {
        "commandPurpose": "Visually indicates strong ownership and lifecycle dependency in UML.",
        "syntaxExample": "Employee 1..1 ◆- HasChild - 0..* Child",
        "whenToUse": "Whenever a weak entity's identity is bound to a parent whole.",
        "omissionRisk": "Using a plain association line obscures the existence dependency.",
        "relationalImpact": "Translates to ON DELETE CASCADE foreign key in SQL."
      }
    ],
    "flagAnatomy": "Intermediate"
  },
  {
    "id": 33,
    "sectorId": 3,
    "sectorTitle": "Weak Entities & Identifying Relationships",
    "difficulty": "Basic",
    "source": "Seminar 01 Task 2",
    "title": "Partial Key (Discriminator) Function",
    "story": "Inside the 'Child' weak entity, the attribute 'name' distinguishes siblings from one another.",
    "task": "What is the attribute called that distinguishes instances of a weak entity under the same owner?",
    "canonical": "Partial key",
    "accepted": [
      "partial key",
      "discriminator"
    ],
    "flagAnatomy": {
      "commandPurpose": "Provides local uniqueness among instances belonging to the same owner.",
      "syntaxExample": "name {PPK}",
      "whenToUse": "On weak entities alongside the owner's primary key.",
      "omissionRisk": "Assuming name is globally unique prevents two employees from having children with the same name.",
      "relationalImpact": "Forms the secondary column of the composite primary key (ssn, name)."
    }
  },
  {
    "id": 34,
    "sectorId": 3,
    "sectorTitle": "Weak Entities & Identifying Relationships",
    "difficulty": "Intermediate",
    "source": "Seminar 01 Task 2",
    "title": "Hotel and Room Weak Entity Relationship",
    "story": "A hotel chain has many hotels across the world. Each hotel has rooms numbered 1 to 100. Room numbers repeat in every hotel.",
    "task": "What is the composite primary key for the 'Room' weak entity?",
    "canonical": "{hotelID, roomNo}",
    "accepted": [
      "{hotelid, roomno}",
      "hotelid, roomno",
      "(hotelid, roomno)"
    ],
    "flagAnatomy": {
      "commandPurpose": "Guarantees global uniqueness for room identification across all hotels.",
      "syntaxExample": "Room ({hotelID, roomNo} {PK}, roomType, rate)",
      "whenToUse": "Whenever room numbers, ticket numbers, or floor numbers reset per location.",
      "omissionRisk": "Using only roomNo prevents differentiating Room 101 in London from Room 101 in Tokyo.",
      "relationalImpact": "PRIMARY KEY (hotelID, roomNo), FOREIGN KEY (hotelID) REFERENCES Hotel(hotelID)."
    }
  },
  {
    "id": 35,
    "sectorId": 3,
    "sectorTitle": "Weak Entities & Identifying Relationships",
    "difficulty": "Basic",
    "source": "Seminar 01 Task 2",
    "title": "Cascade Deletion Rule for Weak Entities",
    "story": "When an employee leaves the company and their record is deleted, company policy states that records of their children must also be deleted immediately.",
    "task": "What database constraint rule ensures automatic deletion of dependent child records when the parent is deleted?",
    "canonical": "ON DELETE CASCADE",
    "accepted": [
      "on delete cascade",
      "cascade delete",
      "cascade"
    ],
    "flagAnatomy": {
      "commandPurpose": "Automatically removes dependent weak entity rows upon parent deletion.",
      "syntaxExample": "FOREIGN KEY (ssn) REFERENCES Employee(ssn) ON DELETE CASCADE",
      "whenToUse": "For all weak entities and composite aggregations.",
      "omissionRisk": "Leaving orphan dependent records that reference non-existent employees.",
      "relationalImpact": "Maintains referential integrity without manual cleanup scripts."
    }
  },
  {
    "id": 36,
    "sectorId": 3,
    "sectorTitle": "Weak Entities & Identifying Relationships",
    "difficulty": "Seminar 01 Table 1",
    "source": "Seminar 01",
    "title": "Multiplicity at Owner End of Identifying Relationship",
    "story": "In UML notation, what must the multiplicity at the owner (parent) end of a composition relationship ALWAYS be?",
    "task": "1..1",
    "canonical": [
      "1..1",
      "1"
    ],
    "accepted": [
      {
        "commandPurpose": "Enforces that a weak entity cannot exist without its exactly one owner.",
        "syntaxExample": "Owner 1..1 ◆- 0..* WeakEntity",
        "whenToUse": "Every composition / identifying relationship.",
        "omissionRisk": "Writing 0..1 contradicts the definition of composition and weak entities.",
        "relationalImpact": "Owner foreign key column in weak table must be NOT NULL."
      }
    ],
    "flagAnatomy": "Intermediate"
  },
  {
    "id": 37,
    "sectorId": 3,
    "sectorTitle": "Weak Entities & Identifying Relationships",
    "difficulty": "Intermediate",
    "source": "Seminar 01 Task 2 Solution",
    "title": "Department and Employee Identifying Multiplicity",
    "story": "Task 2 Scenario: 'Each department is managed by an employee. Not all employees manage a department.'",
    "task": "Why is the multiplicity of Manages not 1..1 at both ends?",
    "canonical": "Not every employee is a manager",
    "accepted": [
      "not every employee is a manager",
      "most employees do not manage",
      "some employees are not managers",
      "optional for employee"
    ],
    "flagAnatomy": {
      "commandPurpose": "Explains optionality in managerial role assignments.",
      "syntaxExample": "Employee 0..1 - Manages - 1..1 Department",
      "whenToUse": "When only senior personnel occupy management roles.",
      "omissionRisk": "Forcing 1..1 would require every single worker to head a department.",
      "relationalImpact": "managerSSN in Department table allows unique matching without forcing all workers into manager roles."
    }
  },
  {
    "id": 38,
    "sectorId": 3,
    "sectorTitle": "Weak Entities & Identifying Relationships",
    "difficulty": "Basic",
    "source": "Seminar 01 Homework 2",
    "title": "Order and OrderLine Composition Case",
    "story": "An eCommerce platform stores Orders and OrderLines. An OrderLine represents an item ordered and cannot exist without its Order.",
    "task": "Which entity is the weak entity in this eCommerce scenario?",
    "canonical": "OrderLine",
    "accepted": [
      "orderline",
      "order item",
      "order line"
    ],
    "flagAnatomy": {
      "commandPurpose": "Classifies order line items as existence-dependent weak entities.",
      "syntaxExample": "Order 1..1 ◆- 1..* OrderLine",
      "whenToUse": "For invoices, order items, and receipt lines.",
      "omissionRisk": "Treating OrderLine as independent requires generating separate global tracking IDs unnecessarily.",
      "relationalImpact": "OrderLine has composite key (orderID, lineNo)."
    }
  },
  {
    "id": 39,
    "sectorId": 3,
    "sectorTitle": "Weak Entities & Identifying Relationships",
    "difficulty": "Seminar 01 Table 1",
    "source": "Seminar 01",
    "title": "Identifying Relationship Direction",
    "story": "In UML notation, on which entity does the filled diamond (composition) sit: the owner entity or the weak entity?",
    "task": "Owner entity",
    "canonical": [
      "owner entity",
      "owner",
      "parent entity",
      "parent",
      "the owner"
    ],
    "accepted": [
      {
        "commandPurpose": "Specifies that the whole (owner) contains and controls the part (weak entity).",
        "syntaxExample": "Owner (Diamond) ◆- WeakEntity",
        "whenToUse": "In all UML composition drawings.",
        "omissionRisk": "Drawing diamond on the weak entity reverses the ownership hierarchy.",
        "relationalImpact": "Owner receives the 1..1 constraint while weak entity gets 0..* or 1..*."
      }
    ],
    "flagAnatomy": "Basic"
  },
  {
    "id": 40,
    "sectorId": 3,
    "sectorTitle": "Weak Entities & Identifying Relationships",
    "difficulty": "Lecture 01 Slide 28",
    "source": "Seminar 01",
    "title": "Strong Entity Definition",
    "story": "An entity that has its own candidate key and can exist independently without reference to any other entity is called what?",
    "task": "Strong entity",
    "canonical": [
      "strong entity",
      "regular entity",
      "strong"
    ],
    "accepted": [
      {
        "commandPurpose": "Distinguishes self-sufficient entities from weak dependent entities.",
        "syntaxExample": "Employee (ssn {PK}), Department (dno {PK})",
        "whenToUse": "For primary enterprise entities like Customer, Product, Branch.",
        "omissionRisk": "Confusing strong entities with weak entities causes unnecessary foreign key clutter.",
        "relationalImpact": "Can be created, inserted, and deleted independently."
      }
    ],
    "flagAnatomy": "Basic"
  },
  {
    "id": 41,
    "sectorId": 3,
    "sectorTitle": "Weak Entities & Identifying Relationships",
    "difficulty": "Seminar 01 Task 2",
    "source": "Seminar 01",
    "title": "Dependent Child Name Collision Resolution",
    "story": "Employee Alice has a child named 'Sam'. Employee Bob also has a child named 'Sam'. Can both exist in the Child weak entity?",
    "task": "Yes",
    "canonical": [
      "yes",
      "true"
    ],
    "accepted": [
      {
        "commandPurpose": "Demonstrates that weak entity partial keys only require local uniqueness per owner.",
        "syntaxExample": "Child (Alice_SSN, 'Sam') and Child (Bob_SSN, 'Sam')",
        "whenToUse": "Explaining why composite keys resolve naming collisions across owners.",
        "omissionRisk": "Thinking child names must be globally unique causes false validation errors.",
        "relationalImpact": "The composite key (parentSSN, childName) makes both tuples uniquely distinguishable."
      }
    ],
    "flagAnatomy": "Basic"
  },
  {
    "id": 42,
    "sectorId": 3,
    "sectorTitle": "Weak Entities & Identifying Relationships",
    "difficulty": "Seminar 01 Solution 7",
    "source": "Seminar 01",
    "title": "Hospital Bed as Weak Entity",
    "story": "A hospital has multiple Wards. Each Ward contains Beds numbered 1 to 30. Which entity acts as the owner of Bed?",
    "task": "Ward",
    "canonical": [
      "ward"
    ],
    "accepted": [
      {
        "commandPurpose": "Identifies the parent container for localized bed allocations.",
        "syntaxExample": "Ward 1..1 ◆- 1..* Bed (bedNo {PPK})",
        "whenToUse": "For physical room, bay, and bed tracking in healthcare schemas.",
        "omissionRisk": "Attempting to track bed 1 without knowing which ward it is in leads to medical errors.",
        "relationalImpact": "Bed primary key is (wardNo, bedNo)."
      }
    ],
    "flagAnatomy": "Intermediate"
  },
  {
    "id": 43,
    "sectorId": 3,
    "sectorTitle": "Weak Entities & Identifying Relationships",
    "difficulty": "Lecture 01 Slide 29",
    "source": "Seminar 01",
    "title": "Existence Dependency Definition",
    "story": "When an entity instance cannot exist in the database without the presence of another entity instance, this condition is called what?",
    "task": "Existence dependency",
    "canonical": [
      "existence dependency",
      "existence dependent"
    ],
    "accepted": [
      {
        "commandPurpose": "Defines the core ontological dependency in database modeling.",
        "syntaxExample": "Child is existence dependent on Employee",
        "whenToUse": "Identifying lifecycle constraints in business requirements.",
        "omissionRisk": "Omitting existence dependency leads to orphaned data remnants upon entity deletion.",
        "relationalImpact": "Dictates mandatory foreign keys and cascade delete rules."
      }
    ],
    "flagAnatomy": "Basic"
  },
  {
    "id": 44,
    "sectorId": 3,
    "sectorTitle": "Weak Entities & Identifying Relationships",
    "difficulty": "Lecture 01 Slide 35",
    "source": "Seminar 01",
    "title": "Weak Entity Foreign Key Placement",
    "story": "When a weak entity is mapped into a relational schema, where does the owner's primary key get placed?",
    "task": "In the weak entity table",
    "canonical": [
      "in the weak entity table",
      "weak entity table",
      "in weak entity",
      "weak entity",
      "child table"
    ],
    "accepted": [
      {
        "commandPurpose": "Establishes referential link from weak entity back to its owner.",
        "syntaxExample": "Child(parentSSN, childName, age)",
        "whenToUse": "Relational mapping of weak entities.",
        "omissionRisk": "Placing weak key in owner table violates 1NF because an owner has multiple children.",
        "relationalImpact": "parentSSN becomes both foreign key and part of primary key."
      }
    ],
    "flagAnatomy": "Intermediate"
  },
  {
    "id": 45,
    "sectorId": 3,
    "sectorTitle": "Weak Entities & Identifying Relationships",
    "difficulty": "Seminar 01 Task 2",
    "source": "Seminar 01",
    "title": "Weak Entity Without Partial Key",
    "story": "Can a weak entity exist with no partial key at all, relying solely on its owner and an internal row order?",
    "task": "No",
    "canonical": [
      "no",
      "false"
    ],
    "accepted": [
      {
        "commandPurpose": "Enforces that weak entity occurrences must be distinguishable from one another.",
        "syntaxExample": "Must have at least a discriminator/partial key {PPK}.",
        "whenToUse": "Validating weak entity schema completeness.",
        "omissionRisk": "Without a partial key, duplicate identical rows violate relational set theory.",
        "relationalImpact": "Relational tables require at least one discriminator column to form the primary key."
      }
    ],
    "flagAnatomy": "Advanced"
  },
  {
    "id": 46,
    "sectorId": 4,
    "sectorTitle": "Ternary & Higher-Degree Relationships",
    "difficulty": "Basic",
    "source": "Seminar 01 Task 3",
    "title": "Ternary Relationship Definition",
    "story": "In manufacturing, a supplier supplies a specific part for a specific project.",
    "task": "What is a relationship that simultaneously links three entity types called?",
    "canonical": "Ternary relationship",
    "accepted": [
      "ternary relationship",
      "ternary",
      "degree 3 relationship"
    ],
    "flagAnatomy": {
      "commandPurpose": "Represents an atomic association connecting three distinct entity types.",
      "syntaxExample": "Registers (Supplier, Part, Project)",
      "whenToUse": "When the association cannot be split into independent pairs without losing context.",
      "omissionRisk": "Splitting prematurely into binary relationships loses which part was supplied to which project.",
      "relationalImpact": "Maps to a table with 3 foreign keys."
    }
  },
  {
    "id": 47,
    "sectorId": 4,
    "sectorTitle": "Ternary & Higher-Degree Relationships",
    "difficulty": "Seminar 01 Table 1",
    "source": "Seminar 01",
    "title": "Ternary Multiplicity Reading Rule",
    "story": "In UML notation, how is the multiplicity on any one leg of a ternary relationship interpreted?",
    "task": "Instances for one combination of the other two entities",
    "canonical": [
      "instances for one combination of the other two entities",
      "for one pair of the other two",
      "one combination of the other two"
    ],
    "accepted": [
      {
        "commandPurpose": "States the universal semantic rule for reading ternary multiplicities in UML.",
        "syntaxExample": "On Part leg: How many parts can Supplier S supply for Project P? (0..*)",
        "whenToUse": "Reading any ternary relationship diamond.",
        "omissionRisk": "Reading ternary multiplicity pairwise distorts business rules.",
        "relationalImpact": "Determines composite primary key columns in the resulting relational table."
      }
    ],
    "flagAnatomy": "Advanced"
  },
  {
    "id": 48,
    "sectorId": 4,
    "sectorTitle": "Ternary & Higher-Degree Relationships",
    "difficulty": "Intermediate",
    "source": "Seminar 01 Task 3",
    "title": "Supplier Part Project Many Parts Multiplicity",
    "story": "Seminar Task 3: A supplier may supply many different parts for a specific project.",
    "task": "What multiplicity appears on the Part leg of the ternary relationship?",
    "canonical": "0..*",
    "accepted": [
      "0..*",
      "0..n",
      "0..N",
      "1..*"
    ],
    "flagAnatomy": {
      "commandPurpose": "Enforces that a supplier can supply zero, one, or many parts for a single project.",
      "syntaxExample": "Part leg: 0..*",
      "whenToUse": "When supply variety per project is unbounded.",
      "omissionRisk": "Putting 1..1 restricts each supplier to providing at most one part per project.",
      "relationalImpact": "PartID must be included in the primary key of the junction table."
    }
  },
  {
    "id": 49,
    "sectorId": 4,
    "sectorTitle": "Ternary & Higher-Degree Relationships",
    "difficulty": "Intermediate",
    "source": "Seminar 01 Task 3",
    "title": "Ternary Attribute Placement",
    "story": "A supplier supplies 500 units of a bolt for Project Apollo. The attribute 'quantity' applies to this specific supply instance.",
    "task": "Does the attribute 'quantity' belong to Supplier, to Part, to Project, or to the Ternary Relationship?",
    "canonical": "To the Ternary Relationship",
    "accepted": [
      "to the ternary relationship",
      "ternary relationship",
      "relationship",
      "the relationship"
    ],
    "flagAnatomy": {
      "commandPurpose": "Associates data that depends on all three participating entities simultaneously.",
      "syntaxExample": "Supply (quantity)",
      "whenToUse": "For transaction amounts, hours, or scores resulting from a 3-way binding.",
      "omissionRisk": "Putting quantity on Part assumes that part is always supplied in that quantity everywhere.",
      "relationalImpact": "Becomes a non-key column in the ternary bridge table."
    }
  },
  {
    "id": 50,
    "sectorId": 4,
    "sectorTitle": "Ternary & Higher-Degree Relationships",
    "difficulty": "Intermediate",
    "source": "Seminar 01 Task 3",
    "title": "Replacing Ternary with Associative Entity",
    "story": "Seminar Task 3 Part (b): Draw the same Supplier-Part-Project model without a ternary relationship.",
    "task": "What construct is introduced to replace the ternary relationship with three binary relationships?",
    "canonical": "Associative entity",
    "accepted": [
      "associative entity",
      "intersection entity",
      "bridge entity",
      "junction entity"
    ],
    "flagAnatomy": {
      "commandPurpose": "Converts a 3-way diamond into a regular entity connected by three binary relationships.",
      "syntaxExample": "SupplyContract entity linked to Supplier, Part, Project",
      "whenToUse": "When relationship attributes grow complex or when binary notation is preferred.",
      "omissionRisk": "Complex multi-way joins become difficult to visualize without an explicit entity.",
      "relationalImpact": "Direct 1-to-1 mapping with the resulting relational junction table."
    }
  }
];
});
