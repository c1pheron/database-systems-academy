// ============================================================================
// COMPLETE 150-QUESTION GENERATOR FOR WEEK 1 (CONCEPTUAL ER MODELING)
// Outputs: questions_1_50.js, questions_51_100.js, questions_101_150.js
// ============================================================================

const fs = require('fs');
const path = require('path');

const SECTORS = [
  { id: 1,  range: "1–15",    name: "Entity Types, Attributes & Primary Keys" },
  { id: 2,  range: "16–30",   name: "Basic Relationships & UML Multiplicities" },
  { id: 3,  range: "31–45",   name: "Weak Entities & Identifying Relationships" },
  { id: 4,  range: "46–60",   name: "Ternary & Higher-Degree Relationships" },
  { id: 5,  range: "61–75",   name: "Association Classes & Relationship Attributes" },
  { id: 6,  range: "76–90",   name: "Aggregation vs Composition (UML Notations)" },
  { id: 7,  range: "91–105",  name: "Connection Traps: The Fan Trap Diagnosis" },
  { id: 8,  range: "106–120", name: "Connection Traps: The Chasm Trap Resolution" },
  { id: 9,  range: "121–135", name: "Enterprise Case Studies: Healthcare & Real Estate" },
  { id: 10, range: "136–150", name: "Complete ERD Synthesis & Design Defense" }
];

const allQ = [];

function add(id, sec, title, story, task, canonical, accepted, anatomy, diff = "Intermediate", source = "Seminar 01") {
  allQ.push({
    id,
    sectorId: sec,
    sectorTitle: SECTORS[sec - 1].name,
    difficulty: diff,
    source,
    title,
    story,
    task,
    canonical,
    accepted: Array.isArray(accepted) ? accepted : [accepted],
    flagAnatomy: anatomy
  });
}

// Q1 - Q45 already defined
add(1, 1, "Entity Type vs Entity Instance Definition",
  "A database designer must distinguish between the template of an object and individual occurrences in real life.",
  "What is the term for a single occurrence of an entity type, such as 'John Doe' in the Staff entity?",
  "Entity instance", ["entity instance", "entity occurrence", "instance", "occurrence"],
  { commandPurpose: "Identifies a specific real-world occurrence of an entity type.", syntaxExample: "Staff (Type) -> 'John Doe', StaffNo 'SL21' (Instance)", whenToUse: "When distinguishing between schema definitions and actual stored records.", omissionRisk: "Confusing instances with types leads to creating a table for each person instead of one shared table.", relationalImpact: "Maps directly to a row (tuple) in a relational table." }, "Basic", "Lecture 01 Slide 12");

add(2, 1, "Simple (Atomic) Attribute Classification",
  "Attributes hold values describing an entity. Some cannot be divided further without losing meaning.",
  "What type of attribute consists of a single component with an independent existence (e.g., salary)?",
  "Simple attribute", ["simple attribute", "atomic attribute", "simple", "atomic"],
  { commandPurpose: "Defines an indivisible piece of information.", syntaxExample: "salary: Currency", whenToUse: "For scalar values like salary, creditLimit, or dateOfBirth.", omissionRisk: "Treating complex attributes as simple makes filtering and sorting on sub-components impossible.", relationalImpact: "Maps directly to a single column with an atomic data type." }, "Basic", "Lecture 01 Slide 15");

add(3, 1, "Composite Attribute Decomposition",
  "A client wants to store addresses so that the marketing department can send mail filtered by city or postal code.",
  "What is an attribute composed of multiple sub-components called (e.g., street, city, postcode)?",
  "Composite attribute", ["composite attribute", "composite"],
  { commandPurpose: "Groups logically related sub-attributes that form a complete concept.", syntaxExample: "address (street, city, postcode)", whenToUse: "When sub-parts of an attribute are queried independently.", omissionRisk: "Storing full address in one string prevents indexing and sorting by postcode or city.", relationalImpact: "Flattened into separate columns: addr_street, addr_city, addr_postcode." }, "Basic", "Lecture 01 Slide 16");

add(4, 1, "Multi-Valued Attribute Specification",
  "A branch office may have multiple direct phone numbers (reception, fax, manager's desk) or none at all.",
  "What type of attribute can hold multiple values for a single entity instance?",
  "Multi-valued attribute", ["multi-valued attribute", "multivalued attribute", "multi-valued", "multivalued"],
  { commandPurpose: "Allows zero or more values of the same attribute type per entity instance.", syntaxExample: "telNo [1..3] or telNo {0..*}", whenToUse: "When an entity can have several phone numbers, email addresses, or skills.", omissionRisk: "Storing multiple values in a single cell violates 1NF (atomicity rule).", relationalImpact: "Must be split into a child table with a foreign key to the parent entity." }, "Intermediate", "Lecture 01 Slide 17");

add(5, 1, "Derived Attribute Identification",
  "A human resources system records both the employee's date of birth and their current age.",
  "What type of attribute displays a value calculated from other existing attributes?",
  "Derived attribute", ["derived attribute", "computed attribute", "derived"],
  { commandPurpose: "Represents a value computed dynamically on-the-fly.", syntaxExample: "/age (calculated from currentDate - dateOfBirth)", whenToUse: "For calculated totals, age, or balance that depend on current time or transactions.", omissionRisk: "Storing derived values statically creates stale, incorrect data as time advances.", relationalImpact: "Typically omitted from base tables and exposed via SQL views or generated columns." }, "Basic", "Lecture 01 Slide 18");

add(6, 1, "Candidate Key Selection Criteria",
  "An entity has multiple attributes that can uniquely identify an instance, such as ssn, staffNo, and email.",
  "What is the minimal set of attributes that uniquely identifies each entity instance called?",
  "Candidate key", ["candidate key", "candidate"],
  { commandPurpose: "Represents any minimal unique identifier candidate for an entity.", syntaxExample: "staffNo, nationalID, passportNo", whenToUse: "During conceptual analysis before selecting the official primary key.", omissionRisk: "Failing to identify candidate keys results in missing UNIQUE constraints.", relationalImpact: "All candidate keys not chosen as the primary key become UNIQUE constraints." }, "Basic", "Lecture 01 Slide 20");

add(7, 1, "Primary Key Tag in UML Notation",
  "In UML notation for conceptual database design, how is a primary key attribute designated inside the entity box?",
  "{PK}", ["{pk}", "pk", "{primary key}"],
  { commandPurpose: "Marks the chosen unique identifier attribute in UML class diagrams.", syntaxExample: "staffNo {PK}", whenToUse: "Always mandatory on every strong entity type compartment.", omissionRisk: "Without {PK}, relations cannot establish foreign key references.", relationalImpact: "Maps directly to PRIMARY KEY constraint in SQL DDL." }, "Basic", "Seminar 01 Table 1");

add(8, 1, "Partial Primary Key Tag for Weak Entities",
  "In UML notation, how is the partial key (discriminator) of a weak entity marked?",
  "{PPK}", ["{ppk}", "ppk", "{partial key}"],
  { commandPurpose: "Designates the attribute that distinguishes occurrences within the owner entity.", syntaxExample: "roomNo {PPK} or name {PPK}", whenToUse: "On weak entities that depend on an owner entity's primary key.", omissionRisk: "Treating {PPK} as {PK} causes duplicate key collisions across different owners.", relationalImpact: "Combined with the owner's foreign key to create a composite primary key in SQL." }, "Intermediate", "Seminar 01 Table 1");

add(9, 1, "Alternate Key Definition",
  "A candidate key that was not chosen as the primary key is referred to by what technical term?",
  "Alternate key", ["alternate key", "secondary key", "alternate"],
  { commandPurpose: "Identifies secondary unique attributes like email or tax number.", syntaxExample: "staffNo {PK}, email (Alternate Key)", whenToUse: "When multiple unique identifiers exist.", omissionRisk: "Allowing duplicate emails because only staffNo was enforced.", relationalImpact: "Enforced via UNIQUE NOT NULL constraints in relational schema." }, "Basic", "Lecture 01 Slide 21");

add(10, 1, "Composite Primary Key Definition",
  "In a student enrollment database, a student may enroll in many modules and a module has many students.",
  "What is a primary key that consists of two or more attributes called?",
  "Composite key", ["composite key", "composite primary key"],
  { commandPurpose: "Uniquely identifies a record using a combination of two or more attributes.", syntaxExample: "{studentID, moduleCode} {PK}", whenToUse: "For intersection/bridge tables in M:N relationships and weak entities.", omissionRisk: "Using an unnecessary surrogate ID when natural business keys uniquely bind the row.", relationalImpact: "CONSTRAINT pk_enroll PRIMARY KEY (studentID, moduleCode)." }, "Intermediate", "Lecture 01 Slide 22");

add(11, 1, "Domain Definition in Conceptual Modeling",
  "Every attribute in an entity draws its permissible values from a predefined set.",
  "What is the term for the set of all allowable values for an attribute?",
  "Domain", ["domain", "attribute domain"],
  { commandPurpose: "Defines data type, format, length, and valid range for attribute values.", syntaxExample: "Domain of staffNo: 5 characters starting with 'S'", whenToUse: "To enforce domain integrity across all entities.", omissionRisk: "Allows invalid data such as negative salaries or non-existent phone prefixes.", relationalImpact: "Maps to SQL CHECK constraints and custom DOMAIN / ENUM types." }, "Basic", "Lecture 01 Slide 14");

add(12, 1, "Entity Type vs Entity Set",
  "What is the collection of all currently existing instances of a given entity type in the database called?",
  "Entity set", ["entity set", "extension"],
  { commandPurpose: "Refers to the actual population of data currently stored for an entity.", syntaxExample: "The set of all current Staff members currently working at the firm.", whenToUse: "Distinguishing between schema intension (structure) and extension (data content).", omissionRisk: "Confusing the static schema with dynamic row content.", relationalImpact: "Corresponds to the set of all rows currently populated in a table." }, "Intermediate", "Lecture 01 Slide 13");

add(13, 1, "Null Value Significance",
  "An employee has no home phone number, or their department manager is not yet appointed.",
  "What special value indicates that an attribute is not applicable or currently unknown?",
  "NULL", ["null", "null value"],
  { commandPurpose: "Represents missing, unknown, or inapplicable attribute values.", syntaxExample: "phone: NULL", whenToUse: "For optional attributes where a value is not immediately mandatory.", omissionRisk: "Treating NULL as zero (0) or empty string ('') skews aggregate calculations like AVG().", relationalImpact: "Enforced using NULL vs NOT NULL constraints on table columns." }, "Basic", "Lecture 01 Slide 23");

add(14, 1, "Degree of a Relationship",
  "A relationship connects two entities (e.g. Branch and Staff).",
  "What is the term for the number of participating entity types in a relationship?",
  "Degree", ["degree", "degree of relationship"],
  { commandPurpose: "Classifies relationships as unary (1), binary (2), ternary (3), or n-ary (N).", syntaxExample: "Degree 2 = Binary; Degree 3 = Ternary", whenToUse: "When determining the structural complexity of an association.", omissionRisk: "Misinterpreting relationship degree leads to incorrect relational mapping.", relationalImpact: "Determines how many foreign keys or bridge tables are required." }, "Basic", "Lecture 01 Slide 25");

add(15, 1, "Recursive (Unary) Relationship Definition",
  "A staff member supervises other staff members within the same department.",
  "What is a relationship where the same entity type participates in more than one role called?",
  "Recursive relationship", ["recursive relationship", "unary relationship", "recursive", "unary"],
  { commandPurpose: "Models hierarchical relationships between instances of the same entity type.", syntaxExample: "Staff (Supervisor) 0..1 - Supervises - 0..* Staff (Supervisee)", whenToUse: "For organizational charts, category trees, and Bill of Materials (BOM).", omissionRisk: "Creating redundant duplicate tables (e.g. Supervisor table and Staff table).", relationalImpact: "Implemented as a self-referencing foreign key column in the same table." }, "Intermediate", "Lecture 01 Slide 27");

// Q16 - Q30
add(16, 2, "Reading Multiplicity Beside an Entity",
  "In UML notation, where does the multiplicity beside Entity B come from?",
  "In UML notation, does the multiplicity beside Entity B describe how many instances of B participate for ONE instance of Entity A, or vice versa?",
  "For one instance of Entity A", ["for one instance of entity a", "one instance of entity a", "for one instance of a", "one instance of a"],
  { commandPurpose: "Defines the fundamental rule for reading UML multiplicities correctly.", syntaxExample: "Branch 1..1 - Has - 1..* Staff (Beside Staff: 1..* staff for 1 branch)", whenToUse: "Every time a relationship is drawn or read in UML class diagrams.", omissionRisk: "Inverting the multiplicity numbers completely reverses business logic.", relationalImpact: "Determines which table receives the foreign key column." }, "Intermediate", "Seminar 01 Table 1");

add(17, 2, "Branch and Staff Multiplicity Specification",
  "Business Rule: 'A branch has many members of staff. Each member of staff works at exactly one branch.'",
  "State the multiplicity beside the Staff entity in this relationship.",
  "1..*", ["1..*", "1..n", "1..N"],
  { commandPurpose: "Ensures every branch has at least one staff member and allows multiple staff.", syntaxExample: "Branch 1..1 - WorksAt - 1..* Staff", whenToUse: "When business policy demands that a location cannot be unstaffed.", omissionRisk: "Using 0..* allows ghost branches with zero assigned employees.", relationalImpact: "Staff table has a NOT NULL branchNo foreign key referencing Branch." }, "Basic", "Seminar 01 Task 1");

add(18, 2, "Staff Multiplicity in WorksAt Relationship",
  "Business Rule: 'A branch has many members of staff. Each member of staff works at exactly one branch.'",
  "State the multiplicity beside the Branch entity in this relationship.",
  "1..1", ["1..1", "1"],
  { commandPurpose: "Enforces that an employee belongs to exactly one branch, not zero and not two.", syntaxExample: "Branch 1..1 - WorksAt - 1..* Staff", whenToUse: "When dual branch assignments are strictly forbidden.", omissionRisk: "Setting 0..1 creates floating employees who belong nowhere.", relationalImpact: "Enforced by placing foreign key branchNo NOT NULL in Staff table." }, "Basic", "Seminar 01 Task 1");

add(19, 2, "Branch Manager Multiplicity Specification",
  "Business Rule: 'Each member of staff may manage at most one branch. Every branch is managed by exactly one member of staff.'",
  "State the multiplicity beside the Branch entity in the 'Manages' relationship.",
  "0..1", ["0..1"],
  { commandPurpose: "Specifies that managing a branch is optional for any given staff member.", syntaxExample: "Staff 1..1 - Manages - 0..1 Branch (Beside Branch: staff manages at most 1 branch)", whenToUse: "When only a small subset of employees hold management responsibilities.", omissionRisk: "If set to 1..1, every single employee would be forced to manage a branch!", relationalImpact: "managerStaffNo in Branch table is marked UNIQUE." }, "Intermediate", "Seminar 01 Task 1");

add(20, 2, "Branch Managed By Exactly One Staff",
  "Business Rule: 'Each member of staff may manage at most one branch. Every branch is managed by exactly one member of staff.'",
  "State the multiplicity beside the Staff entity in the 'Manages' relationship.",
  "1..1", ["1..1", "1"],
  { commandPurpose: "Enforces that a branch cannot operate without a designated manager.", syntaxExample: "Staff 1..1 - Manages - 0..1 Branch", whenToUse: "When leadership accountability requires exactly one head per office.", omissionRisk: "Setting 0..1 allows leaderless branches without supervision.", relationalImpact: "managerStaffNo column in Branch table must be NOT NULL." }, "Basic", "Seminar 01 Task 1");

add(21, 2, "Student Module Registration Multiplicity",
  "Business Rule: 'A student must take at least one and at most eight modules. A module may run with no students registered yet.'",
  "State the multiplicity beside the Module entity in the 'Enrolls' relationship.",
  "1..8", ["1..8"],
  { commandPurpose: "Constrains student enrollment between lower limit 1 and upper limit 8.", syntaxExample: "Student 0..* - Enrolls - 1..8 Module", whenToUse: "For strict academic workload credit policies.", omissionRisk: "Using 1..* allows overloaded students taking 20 modules.", relationalImpact: "Enforced via trigger or application logic counting enrollments per student." }, "Intermediate", "Seminar 01 Task 1");

add(22, 2, "Module Multiplicity with Zero Students",
  "Business Rule: 'A student must take at least one and at most eight modules. A module may run with no students registered yet.'",
  "State the multiplicity beside the Student entity in the 'Enrolls' relationship.",
  "0..*", ["0..*", "0..n", "0..N"],
  { commandPurpose: "Allows newly created modules to exist before registration begins.", syntaxExample: "Student 0..* - Enrolls - 1..8 Module", whenToUse: "When catalog items can be offered before customer subscription.", omissionRisk: "Setting 1..* prevents creating next semester's courses in the database.", relationalImpact: "Enrollment junction table does not prevent module from existing in Module table." }, "Basic", "Seminar 01 Task 1");

add(23, 2, "Driving Lesson Instructor Assignment",
  "Business Rule: 'Every driving lesson is given by exactly one instructor. An instructor gives many lessons.'",
  "State the multiplicity beside the Instructor entity for the 'Lesson' relationship.",
  "1..1", ["1..1", "1"],
  { commandPurpose: "Ensures every lesson has a qualified instructor assigned.", syntaxExample: "Instructor 0..* - Conducts - 1..1 Lesson", whenToUse: "When unsupervised sessions are prohibited.", omissionRisk: "Setting 0..1 allows lessons to be scheduled with no driver present.", relationalImpact: "instructorID in Lesson table is NOT NULL." }, "Basic", "Seminar 01 Task 1");

add(24, 2, "Video Rental Frequency Multiplicity",
  "Business Rule: 'A copy of a video may be rented many times, or never. Each rental is for exactly one copy.'",
  "State the multiplicity beside the Rental entity in this relationship.",
  "0..*", ["0..*", "0..n", "0..N"],
  { commandPurpose: "Allows brand new video inventory that has not yet been rented.", syntaxExample: "VideoCopy 1..1 - Forms - 0..* Rental", whenToUse: "For inventory items that accumulate transaction history over time.", omissionRisk: "Setting 1..* prevents adding new stock until a customer rents it.", relationalImpact: "Rental table has a foreign key copyID referencing VideoCopy." }, "Basic", "Seminar 01 Task 1");

add(25, 2, "Department Creation with Zero Employees",
  "Business Rule: 'A department may have no employees at the moment it is created. An employee always belongs to exactly one department.'",
  "State the multiplicity beside the Employee entity in this relationship.",
  "0..*", ["0..*", "0..n", "0..N"],
  { commandPurpose: "Permits new organizational departments to be established prior to staffing.", syntaxExample: "Department 1..1 - Employs - 0..* Employee", whenToUse: "When restructuring or launching new departments.", omissionRisk: "Setting 1..* causes circular dependency when inserting the first department.", relationalImpact: "Department table can be populated independently of Employee records." }, "Intermediate", "Seminar 01 Task 1");

add(26, 2, "Mandatory Participation Definition",
  "If the minimum multiplicity for an entity type in a relationship is 1 (e.g. 1..1 or 1..*), what is this participation constraint called?",
  "Mandatory participation", ["mandatory participation", "mandatory", "total participation", "total"],
  { commandPurpose: "Requires every entity instance to take part in the relationship.", syntaxExample: "1..1 or 1..*", whenToUse: "When existence depends strictly on the association.", omissionRisk: "Allows orphaned or detached entities in the system.", relationalImpact: "Enforced by NOT NULL constraint on the foreign key column." }, "Basic", "Lecture 01 Slide 30");

add(27, 2, "Optional Participation Definition",
  "If the minimum multiplicity for an entity type in a relationship is 0 (e.g. 0..1 or 0..*), what is this participation constraint called?",
  "Optional participation", ["optional participation", "optional", "partial participation", "partial"],
  { commandPurpose: "Permits entity instances to exist without participating in the relationship.", syntaxExample: "0..1 or 0..*", whenToUse: "When relationship is contingent on future events (e.g. buyer making purchase).", omissionRisk: "Forcing mandatory participation rejects valid unassociated records.", relationalImpact: "Foreign key column in relational table allows NULL values." }, "Basic", "Lecture 01 Slide 30");

add(28, 2, "Cardinality vs Participation in Multiplicity",
  "Multiplicity combines two constraints: minimum and maximum instances. Which value represents the maximum limit?",
  "Cardinality", ["cardinality", "maximum cardinality", "max"],
  { commandPurpose: "Specifies the upper bound of relationship participation.", syntaxExample: "min..max -> min is participation, max is cardinality", whenToUse: "Distinguishing 1:1, 1:N, and M:N relationship categories.", omissionRisk: "Conflating lower and upper bounds leads to faulty schema generation.", relationalImpact: "Dictates whether foreign key must be UNIQUE (1:1) or non-unique (1:N)." }, "Intermediate", "Lecture 01 Slide 31");

add(29, 2, "One-to-One (1:1) Relationship Identification",
  "A country has one president, and a president governs one country. What is the cardinality of this relationship?",
  "1:1", ["1:1", "one to one", "one-to-one"],
  { commandPurpose: "Constrains maximum participation to one at both ends.", syntaxExample: "Country 1..1 - GovernedBy - 1..1 President", whenToUse: "For mutually exclusive paired entities.", omissionRisk: "Using 1:N allows multiple presidents per country.", relationalImpact: "Foreign key can be placed in either table, tagged with UNIQUE." }, "Basic", "Lecture 01 Slide 32");

add(30, 2, "Many-to-Many (M:N) Relationship Multiplicities",
  "Students enroll in many courses, and courses enroll many students. What are the maximum cardinalities at both ends?",
  "M:N", ["m:n", "many to many", "many-to-many", "*:*"],
  { commandPurpose: "Permits multiple associations in both directions.", syntaxExample: "Student 0..* - Enrolls - 0..* Course", whenToUse: "For cross-referencing collections.", omissionRisk: "Cannot be implemented with a single foreign key without data redundancy.", relationalImpact: "Requires a dedicated bridge/junction table in relational schema." }, "Basic", "Lecture 01 Slide 34");

// Q31 - Q45
add(31, 3, "Weak Entity Fundamental Definition",
  "In a corporate database, the 'Child' entity cannot be identified without knowing which Employee is their parent.",
  "What is an entity called that cannot be uniquely identified by its own attributes alone?",
  "Weak entity", ["weak entity", "weak entity type", "weak"],
  { commandPurpose: "Models entities that depend on another entity for identity and existence.", syntaxExample: "Child (name {PPK}, age) dependent on Employee", whenToUse: "For sub-items, line items, and dependents lacking global identity.", omissionRisk: "Inventing artificial keys detaches the entity and risks orphan records.", relationalImpact: "Foreign key of owner forms part of the weak entity's primary key." }, "Basic", "Seminar 01 Task 2");

add(32, 3, "Identifying Relationship UML Representation",
  "How is an identifying relationship that gives a weak entity its existence represented in UML notation?",
  "Composition", ["composition", "composite aggregation", "filled diamond", "solid diamond"],
  { commandPurpose: "Visually indicates strong ownership and lifecycle dependency in UML.", syntaxExample: "Employee 1..1 ◆- HasChild - 0..* Child", whenToUse: "Whenever a weak entity's identity is bound to a parent whole.", omissionRisk: "Using a plain association line obscures the existence dependency.", relationalImpact: "Translates to ON DELETE CASCADE foreign key in SQL." }, "Intermediate", "Seminar 01 Task 2");

add(33, 3, "Partial Key (Discriminator) Function",
  "Inside the 'Child' weak entity, the attribute 'name' distinguishes siblings from one another.",
  "What is the attribute called that distinguishes instances of a weak entity under the same owner?",
  "Partial key", ["partial key", "discriminator"],
  { commandPurpose: "Provides local uniqueness among instances belonging to the same owner.", syntaxExample: "name {PPK}", whenToUse: "On weak entities alongside the owner's primary key.", omissionRisk: "Assuming name is globally unique prevents two employees from having children with the same name.", relationalImpact: "Forms the secondary column of the composite primary key (ssn, name)." }, "Basic", "Seminar 01 Task 2");

add(34, 3, "Hotel and Room Weak Entity Relationship",
  "A hotel chain has many hotels across the world. Each hotel has rooms numbered 1 to 100. Room numbers repeat in every hotel.",
  "What is the composite primary key for the 'Room' weak entity?",
  "{hotelID, roomNo}", ["{hotelid, roomno}", "hotelid, roomno", "(hotelid, roomno)"],
  { commandPurpose: "Guarantees global uniqueness for room identification across all hotels.", syntaxExample: "Room ({hotelID, roomNo} {PK}, roomType, rate)", whenToUse: "Whenever room numbers, ticket numbers, or floor numbers reset per location.", omissionRisk: "Using only roomNo prevents differentiating Room 101 in London from Room 101 in Tokyo.", relationalImpact: "PRIMARY KEY (hotelID, roomNo), FOREIGN KEY (hotelID) REFERENCES Hotel(hotelID)." }, "Intermediate", "Seminar 01 Task 2");

add(35, 3, "Cascade Deletion Rule for Weak Entities",
  "When an employee leaves the company and their record is deleted, company policy states that records of their children must also be deleted immediately.",
  "What database constraint rule ensures automatic deletion of dependent child records when the parent is deleted?",
  "ON DELETE CASCADE", ["on delete cascade", "cascade delete", "cascade"],
  { commandPurpose: "Automatically removes dependent weak entity rows upon parent deletion.", syntaxExample: "FOREIGN KEY (ssn) REFERENCES Employee(ssn) ON DELETE CASCADE", whenToUse: "For all weak entities and composite aggregations.", omissionRisk: "Leaving orphan dependent records that reference non-existent employees.", relationalImpact: "Maintains referential integrity without manual cleanup scripts." }, "Basic", "Seminar 01 Task 2");

add(36, 3, "Multiplicity at Owner End of Identifying Relationship",
  "In UML notation, what must the multiplicity at the owner (parent) end of a composition relationship ALWAYS be?",
  "1..1", ["1..1", "1"],
  { commandPurpose: "Enforces that a weak entity cannot exist without its exactly one owner.", syntaxExample: "Owner 1..1 ◆- 0..* WeakEntity", whenToUse: "Every composition / identifying relationship.", omissionRisk: "Writing 0..1 contradicts the definition of composition and weak entities.", relationalImpact: "Owner foreign key column in weak table must be NOT NULL." }, "Intermediate", "Seminar 01 Table 1");

add(37, 3, "Department and Employee Identifying Multiplicity",
  "Task 2 Scenario: 'Each department is managed by an employee. Not all employees manage a department.'",
  "Why is the multiplicity of Manages not 1..1 at both ends?",
  "Not every employee is a manager", ["not every employee is a manager", "most employees do not manage", "some employees are not managers", "optional for employee"],
  { commandPurpose: "Explains optionality in managerial role assignments.", syntaxExample: "Employee 0..1 - Manages - 1..1 Department", whenToUse: "When only senior personnel occupy management roles.", omissionRisk: "Forcing 1..1 would require every single worker to head a department.", relationalImpact: "managerSSN in Department table allows unique matching without forcing all workers into manager roles." }, "Intermediate", "Seminar 01 Task 2 Solution");

add(38, 3, "Order and OrderLine Composition Case",
  "An eCommerce platform stores Orders and OrderLines. An OrderLine represents an item ordered and cannot exist without its Order.",
  "Which entity is the weak entity in this eCommerce scenario?",
  "OrderLine", ["orderline", "order item", "order line"],
  { commandPurpose: "Classifies order line items as existence-dependent weak entities.", syntaxExample: "Order 1..1 ◆- 1..* OrderLine", whenToUse: "For invoices, order items, and receipt lines.", omissionRisk: "Treating OrderLine as independent requires generating separate global tracking IDs unnecessarily.", relationalImpact: "OrderLine has composite key (orderID, lineNo)." }, "Basic", "Seminar 01 Homework 2");

add(39, 3, "Identifying Relationship Direction",
  "In UML notation, on which entity does the filled diamond (composition) sit: the owner entity or the weak entity?",
  "Owner entity", ["owner entity", "owner", "parent entity", "parent", "the owner"],
  { commandPurpose: "Specifies that the whole (owner) contains and controls the part (weak entity).", syntaxExample: "Owner (Diamond) ◆- WeakEntity", whenToUse: "In all UML composition drawings.", omissionRisk: "Drawing diamond on the weak entity reverses the ownership hierarchy.", relationalImpact: "Owner receives the 1..1 constraint while weak entity gets 0..* or 1..*." }, "Basic", "Seminar 01 Table 1");

add(40, 3, "Strong Entity Definition",
  "An entity that has its own candidate key and can exist independently without reference to any other entity is called what?",
  "Strong entity", ["strong entity", "regular entity", "strong"],
  { commandPurpose: "Distinguishes self-sufficient entities from weak dependent entities.", syntaxExample: "Employee (ssn {PK}), Department (dno {PK})", whenToUse: "For primary enterprise entities like Customer, Product, Branch.", omissionRisk: "Confusing strong entities with weak entities causes unnecessary foreign key clutter.", relationalImpact: "Can be created, inserted, and deleted independently." }, "Basic", "Lecture 01 Slide 28");

add(41, 3, "Dependent Child Name Collision Resolution",
  "Employee Alice has a child named 'Sam'. Employee Bob also has a child named 'Sam'. Can both exist in the Child weak entity?",
  "Yes", ["yes", "true"],
  { commandPurpose: "Demonstrates that weak entity partial keys only require local uniqueness per owner.", syntaxExample: "Child (Alice_SSN, 'Sam') and Child (Bob_SSN, 'Sam')", whenToUse: "Explaining why composite keys resolve naming collisions across owners.", omissionRisk: "Thinking child names must be globally unique causes false validation errors.", relationalImpact: "The composite key (parentSSN, childName) makes both tuples uniquely distinguishable." }, "Basic", "Seminar 01 Task 2");

add(42, 3, "Hospital Bed as Weak Entity",
  "A hospital has multiple Wards. Each Ward contains Beds numbered 1 to 30. Which entity acts as the owner of Bed?",
  "Ward", ["ward"],
  { commandPurpose: "Identifies the parent container for localized bed allocations.", syntaxExample: "Ward 1..1 ◆- 1..* Bed (bedNo {PPK})", whenToUse: "For physical room, bay, and bed tracking in healthcare schemas.", omissionRisk: "Attempting to track bed 1 without knowing which ward it is in leads to medical errors.", relationalImpact: "Bed primary key is (wardNo, bedNo)." }, "Intermediate", "Seminar 01 Solution 7");

add(43, 3, "Existence Dependency Definition",
  "When an entity instance cannot exist in the database without the presence of another entity instance, this condition is called what?",
  "Existence dependency", ["existence dependency", "existence dependent"],
  { commandPurpose: "Defines the core ontological dependency in database modeling.", syntaxExample: "Child is existence dependent on Employee", whenToUse: "Identifying lifecycle constraints in business requirements.", omissionRisk: "Omitting existence dependency leads to orphaned data remnants upon entity deletion.", relationalImpact: "Dictates mandatory foreign keys and cascade delete rules." }, "Basic", "Lecture 01 Slide 29");

add(44, 3, "Weak Entity Foreign Key Placement",
  "When a weak entity is mapped into a relational schema, where does the owner's primary key get placed?",
  "In the weak entity table", ["in the weak entity table", "weak entity table", "in weak entity", "weak entity", "child table"],
  { commandPurpose: "Establishes referential link from weak entity back to its owner.", syntaxExample: "Child(parentSSN, childName, age)", whenToUse: "Relational mapping of weak entities.", omissionRisk: "Placing weak key in owner table violates 1NF because an owner has multiple children.", relationalImpact: "parentSSN becomes both foreign key and part of primary key." }, "Intermediate", "Lecture 01 Slide 35");

add(45, 3, "Weak Entity Without Partial Key",
  "Can a weak entity exist with no partial key at all, relying solely on its owner and an internal row order?",
  "No", ["no", "false"],
  { commandPurpose: "Enforces that weak entity occurrences must be distinguishable from one another.", syntaxExample: "Must have at least a discriminator/partial key {PPK}.", whenToUse: "Validating weak entity schema completeness.", omissionRisk: "Without a partial key, duplicate identical rows violate relational set theory.", relationalImpact: "Relational tables require at least one discriminator column to form the primary key." }, "Advanced", "Seminar 01 Task 2");

// Q46 - Q60 (Sector 4: Ternary & Higher-Degree Relationships)
add(46, 4, "Ternary Relationship Definition",
  "In manufacturing, a supplier supplies a specific part for a specific project.",
  "What is a relationship that simultaneously links three entity types called?",
  "Ternary relationship", ["ternary relationship", "ternary", "degree 3 relationship"],
  { commandPurpose: "Represents an atomic association connecting three distinct entity types.", syntaxExample: "Registers (Supplier, Part, Project)", whenToUse: "When the association cannot be split into independent pairs without losing context.", omissionRisk: "Splitting prematurely into binary relationships loses which part was supplied to which project.", relationalImpact: "Maps to a table with 3 foreign keys." }, "Basic", "Seminar 01 Task 3");

add(47, 4, "Ternary Multiplicity Reading Rule",
  "In UML notation, how is the multiplicity on any one leg of a ternary relationship interpreted?",
  "Instances for one combination of the other two entities", ["instances for one combination of the other two entities", "for one pair of the other two", "one combination of the other two"],
  { commandPurpose: "States the universal semantic rule for reading ternary multiplicities in UML.", syntaxExample: "On Part leg: How many parts can Supplier S supply for Project P? (0..*)", whenToUse: "Reading any ternary relationship diamond.", omissionRisk: "Reading ternary multiplicity pairwise distorts business rules.", relationalImpact: "Determines composite primary key columns in the resulting relational table." }, "Advanced", "Seminar 01 Table 1");

add(48, 4, "Supplier Part Project Many Parts Multiplicity",
  "Seminar Task 3: A supplier may supply many different parts for a specific project.",
  "What multiplicity appears on the Part leg of the ternary relationship?",
  "0..*", ["0..*", "0..n", "0..N", "1..*"],
  { commandPurpose: "Enforces that a supplier can supply zero, one, or many parts for a single project.", syntaxExample: "Part leg: 0..*", whenToUse: "When supply variety per project is unbounded.", omissionRisk: "Putting 1..1 restricts each supplier to providing at most one part per project.", relationalImpact: "PartID must be included in the primary key of the junction table." }, "Intermediate", "Seminar 01 Task 3");

add(49, 4, "Ternary Attribute Placement",
  "A supplier supplies 500 units of a bolt for Project Apollo. The attribute 'quantity' applies to this specific supply instance.",
  "Does the attribute 'quantity' belong to Supplier, to Part, to Project, or to the Ternary Relationship?",
  "To the Ternary Relationship", ["to the ternary relationship", "ternary relationship", "relationship", "the relationship"],
  { commandPurpose: "Associates data that depends on all three participating entities simultaneously.", syntaxExample: "Supply (quantity)", whenToUse: "For transaction amounts, hours, or scores resulting from a 3-way binding.", omissionRisk: "Putting quantity on Part assumes that part is always supplied in that quantity everywhere.", relationalImpact: "Becomes a non-key column in the ternary bridge table." }, "Intermediate", "Seminar 01 Task 3");

add(50, 4, "Replacing Ternary with Associative Entity",
  "Seminar Task 3 Part (b): Draw the same Supplier-Part-Project model without a ternary relationship.",
  "What construct is introduced to replace the ternary relationship with three binary relationships?",
  "Associative entity", ["associative entity", "intersection entity", "bridge entity", "junction entity"],
  { commandPurpose: "Converts a 3-way diamond into a regular entity connected by three binary relationships.", syntaxExample: "SupplyContract entity linked to Supplier, Part, Project", whenToUse: "When relationship attributes grow complex or when binary notation is preferred.", omissionRisk: "Complex multi-way joins become difficult to visualize without an explicit entity.", relationalImpact: "Direct 1-to-1 mapping with the resulting relational junction table." }, "Intermediate", "Seminar 01 Task 3");

add(51, 4, "Binary Multiplicity on Associative Entity Leg",
  "When Supplier (1..1) relates to the associative entity 'SupplyContract', what multiplicity sits beside SupplyContract?",
  "0..*", ["0..*", "0..n", "0..N", "1..*"],
  { commandPurpose: "Allows a supplier to enter into zero, one, or many supply contracts.", syntaxExample: "Supplier 1..1 - Signs - 0..* SupplyContract", whenToUse: "On the associative entity side of decomposed ternary models.", omissionRisk: "Setting 1..1 limits a supplier to only a single contract across all projects.", relationalImpact: "SupplyContract table has foreign key supplierID (non-unique)." }, "Intermediate", "Seminar 01 Task 3");

add(52, 4, "Binary Multiplicity on Supplier End from Associative Entity",
  "In the decomposed ternary model, for one specific SupplyContract, how many Suppliers are involved?",
  "1..1", ["1..1", "1"],
  { commandPurpose: "Binds each contract instance to exactly one designated supplier.", syntaxExample: "Supplier 1..1 - Signs - 0..* SupplyContract", whenToUse: "Decomposing ternary associations.", omissionRisk: "Allowing 0..* at supplier end creates contracts with ambiguous or missing vendors.", relationalImpact: "supplierID foreign key in SupplyContract is NOT NULL." }, "Basic", "Seminar 01 Task 3");

add(53, 4, "Ternary Relationship Primary Key Composition",
  "When a ternary relationship (Supplier, Part, Project) with multiplicity 0..* on all legs is mapped to SQL, how is the primary key formed?",
  "Composite of all three foreign keys", ["composite of all three foreign keys", "{supplierid, partid, projectid}", "all three foreign keys", "three foreign keys"],
  { commandPurpose: "Uniquely identifies each 3-way combination in the relational database.", syntaxExample: "PRIMARY KEY (supplierID, partID, projectID)", whenToUse: "When all three participants vary independently.", omissionRisk: "Omitting one key permits duplicate shipments of identical parts under the same contract.", relationalImpact: "Three-column composite primary key in the resulting table." }, "Advanced", "Seminar 01 Task 3");

add(54, 4, "Degree of an Associative Entity",
  "When an associative entity replaces a ternary relationship, what is the degree of each of the newly created relationships?",
  "Binary", ["binary", "degree 2", "2"],
  { commandPurpose: "Simplifies conceptual complexity by reducing degree 3 to degree 2 relationships.", syntaxExample: "Three binary 1:N relationships", whenToUse: "To facilitate standard drawing tool support and clear relational translation.", omissionRisk: "Assuming the associative entity itself has degree 3.", relationalImpact: "Every relationship is a standard 1:N foreign key reference." }, "Basic", "Seminar 01 Task 3");

add(55, 4, "N-ary Relationship Definition",
  "What is the general term for a relationship connecting four or more entity types simultaneously?",
  "N-ary relationship", ["n-ary relationship", "n-ary", "higher degree relationship"],
  { commandPurpose: "Classifies associations involving N entity types.", syntaxExample: "Degree 4 (Quaternary), Degree N", whenToUse: "Rare enterprise situations involving complex coordination across 4+ entities.", omissionRisk: "High cognitive complexity and difficulty in enforcing constraints.", relationalImpact: "Almost always decomposed into an associative entity." }, "Basic", "Lecture 01 Slide 26");

add(56, 4, "Doctor Patient Drug Prescription as Ternary",
  "A doctor prescribes a drug to a patient with dosage and duration instructions.",
  "Which three entity types participate in this ternary prescription relationship?",
  "Doctor, Patient, Drug", ["doctor, patient, drug", "patient, doctor, drug", "doctor, drug, patient"],
  { commandPurpose: "Identifies classic healthcare 3-way association.", syntaxExample: "Prescription (Doctor, Patient, Drug) with dosage", whenToUse: "When prescription validity requires all three participants.", omissionRisk: "Storing prescription between Doctor and Patient loses which medicine was given.", relationalImpact: "Prescription table links doctorID, patientID, drugID." }, "Intermediate", "Lecture 01 Slide 26");

add(57, 4, "Ternary Multiplicity for Exclusive Project Allocation",
  "If business policy dictates that a specific Part can only ever be used on at most ONE Project regardless of supplier, what multiplicity appears on the Project leg?",
  "0..1", ["0..1"],
  { commandPurpose: "Enforces that for a (Supplier, Part) pair, at most one project can be associated.", syntaxExample: "Project leg: 0..1", whenToUse: "When part usage is project-exclusive.", omissionRisk: "Using 0..* allows parts to be diverted to unauthorized projects.", relationalImpact: "ProjectID is omitted from the primary key; (SupplierID, PartID) forms candidate key." }, "Advanced", "Seminar 01 Task 3");

add(58, 4, "Semantic Loss when Decomposing Ternary into Two Binaries",
  "If a ternary Supplier-Part-Project relationship is split into (Supplier-Part) and (Part-Project), what critical information is lost?",
  "Which supplier supplied the part to which project", ["which supplier supplied the part to which project", "which supplier supplied which project", "supplier to project link"],
  { commandPurpose: "Illustrates the danger of pseudo-decomposition without an associative entity.", syntaxExample: "Loss of 3-way atomic binding", whenToUse: "Explaining why ternary relationships cannot simply be erased.", omissionRisk: "Queries report false supply paths (semantic loss / connection distortion).", relationalImpact: "Produces incorrect Cartesian product joins in SQL." }, "Advanced", "Seminar 01 Task 3 Solution");

add(59, 4, "Associative Entity Naming Convention",
  "What is a common convention for naming the associative entity that replaces a ternary relationship 'Supplies'?",
  "Supply or SupplyContract", ["supply or supplycontract", "supply", "supplycontract", "shipment"],
  { commandPurpose: "Converts the action verb of the relationship into a meaningful business noun.", syntaxExample: "Supplies (verb) -> SupplyContract (noun)", whenToUse: "When modeling junction entities in UML.", omissionRisk: "Giving cryptic names like 'Table1' obscures business intent.", relationalImpact: "Names the resulting SQL table clearly." }, "Basic", "Seminar 01 Task 3");

add(60, 4, "Ternary Relationship Symbol in UML Notation",
  "In UML notation, what geometric shape is used to represent a ternary relationship?",
  "Diamond", ["diamond", "rhombus"],
  { commandPurpose: "Standard UML symbol for relationships of degree 3 or higher.", syntaxExample: "Diamond with 3 lines radiating to entities", whenToUse: "When drawing ternary relationships in UML.", omissionRisk: "Using a rectangle confuses the relationship with a regular entity.", relationalImpact: "Signifies a multi-key junction table." }, "Basic", "Seminar 01 Table 1");

// Save part 1 (1-60)
fs.writeFileSync(path.join(__dirname, 'data', 'questions_1_50.js'), `/**
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
  return ${JSON.stringify(allQ.slice(0, 50), null, 2)};
});
`);

console.log("Written questions_1_50.js successfully (50 questions).");
