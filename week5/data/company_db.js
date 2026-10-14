// ============================================================================
// DATABASE SYSTEMS ACADEMY — WEEK 5 CORPORATE DATABASE & SQL ENGINE
// Includes Emp-Dept-Salgrade, Project & Works_On, Chinook DB subset,
// Storage & B+ Tree simulation tables, Career Ranks, and Office Events.
// ============================================================================

window.COMPANY_DB = {
  // 4 Corporate Departments
  dept: [
    { deptno: 10, dname: "ACCOUNTING", loc: "NEW YORK" },
    { deptno: 20, dname: "RESEARCH",   loc: "DALLAS" },
    { deptno: 30, dname: "SALES",      loc: "CHICAGO" },
    { deptno: 40, dname: "OPERATIONS", loc: "BOSTON" }
  ],

  // 14 Corporate Employees
  emp: [
    { empno: 7839, ename: "KING",   job: "PRESIDENT", supervisor: null, mgr: null, hiredate: "2001-11-17", sal: 5000.00, comm: null,    deptno: 10 },
    { empno: 7698, ename: "BLAKE",  job: "MANAGER",   supervisor: 7839, mgr: 7839, hiredate: "2010-05-01", sal: 2850.00, comm: null,    deptno: 30 },
    { empno: 7782, ename: "CLARK",  job: "MANAGER",   supervisor: 7839, mgr: 7839, hiredate: "2011-06-09", sal: 2450.00, comm: null,    deptno: 10 },
    { empno: 7566, ename: "JONES",  job: "MANAGER",   supervisor: 7839, mgr: 7839, hiredate: "2000-04-02", sal: 2975.00, comm: null,    deptno: 20 },
    { empno: 7654, ename: "MARTIN", job: "SALESMAN",  supervisor: 7698, mgr: 7698, hiredate: "2012-09-28", sal: 1250.00, comm: 1400.00, deptno: 30 },
    { empno: 7499, ename: "ALLEN",  job: "SALESMAN",  supervisor: 7698, mgr: 7698, hiredate: "2002-02-20", sal: 1600.00, comm: 300.00,  deptno: 30 },
    { empno: 7844, ename: "TURNER", job: "SALESMAN",  supervisor: 7698, mgr: 7698, hiredate: "2003-09-08", sal: 1500.00, comm: 0.00,    deptno: 30 },
    { empno: 7900, ename: "JAMES",  job: "CLERK",     supervisor: 7698, mgr: 7698, hiredate: "2005-12-03", sal: 950.00,  comm: null,    deptno: 30 },
    { empno: 7521, ename: "WARD",   job: "SALESMAN",  supervisor: 7698, mgr: 7698, hiredate: "2001-02-22", sal: 1250.00, comm: 500.00,  deptno: 30 },
    { empno: 7902, ename: "FORD",   job: "ANALYST",   supervisor: 7566, mgr: 7566, hiredate: "2006-12-03", sal: 3000.00, comm: null,    deptno: 20 },
    { empno: 7369, ename: "SMITH",  job: "CLERK",     supervisor: 7902, mgr: 7902, hiredate: "2007-12-17", sal: 800.00,  comm: null,    deptno: 20 },
    { empno: 7788, ename: "SCOTT",  job: "ANALYST",   supervisor: 7566, mgr: 7566, hiredate: "2001-12-09", sal: 3000.00, comm: null,    deptno: 20 },
    { empno: 7876, ename: "ADAMS",  job: "CLERK",     supervisor: 7788, mgr: 7788, hiredate: "2002-01-12", sal: 1100.00, comm: null,    deptno: 20 },
    { empno: 7934, ename: "MILLER", job: "CLERK",     supervisor: 7782, mgr: 7782, hiredate: "2005-01-23", sal: 1300.00, comm: null,    deptno: 10 }
  ],

  // 5 Salary Grades (Non-Equi Joins)
  salgrade: [
    { grade: 1, losal: 700.00,  hisal: 1200.00 },
    { grade: 2, losal: 1201.00, hisal: 1400.00 },
    { grade: 3, losal: 1401.00, hisal: 2000.00 },
    { grade: 4, losal: 2001.00, hisal: 3000.00 },
    { grade: 5, losal: 3001.00, hisal: 9999.00 }
  ],

  // 5 Engineering Projects
  project: [
    { pno: 101, pname: "CloudMigration", ploc: "NEW YORK", deptno: 10, budget: 150000 },
    { pno: 102, pname: "UzumPay",        ploc: "TASHKENT", deptno: 30, budget: 320000 },
    { pno: 103, pname: "DWH_Lake",       ploc: "DALLAS",   deptno: 20, budget: 210000 },
    { pno: 104, pname: "AI_Engine",      ploc: "CHICAGO",  deptno: 20, budget: 180000 },
    { pno: 105, pname: "SecurityVault",  ploc: "BOSTON",   deptno: 40, budget: 95000 }
  ],

  // Staff assignment on projects (16 assignments)
  works_on: [
    { empno: 7839, pno: 101, hours: 25.5 },
    { empno: 7782, pno: 101, hours: 38.0 },
    { empno: 7934, pno: 101, hours: 40.0 },
    { empno: 7698, pno: 102, hours: 30.0 },
    { empno: 7499, pno: 102, hours: 45.0 },
    { empno: 7654, pno: 102, hours: 28.0 },
    { empno: 7521, pno: 102, hours: 35.0 },
    { empno: 7566, pno: 103, hours: 20.0 },
    { empno: 7902, pno: 103, hours: 42.0 },
    { empno: 7369, pno: 103, hours: 40.0 },
    { empno: 7788, pno: 104, hours: 44.0 },
    { empno: 7876, pno: 104, hours: 36.0 },
    { empno: 7902, pno: 104, hours: 15.0 },
    { empno: 7499, pno: 104, hours: 10.0 },
    { empno: 7844, pno: 102, hours: 32.0 },
    { empno: 7900, pno: 102, hours: 20.0 }
  ],

  // Chinook DB subset: Artists
  artist: [
    { artist_id: 1, name: "AC/DC" },
    { artist_id: 2, name: "Accept" },
    { artist_id: 3, name: "Aerosmith" },
    { artist_id: 4, name: "Alanis Morissette" },
    { artist_id: 5, name: "Alice In Chains" },
    { artist_id: 6, name: "Antônio Carlos Jobim" },
    { artist_id: 7, name: "Audioslave" },
    { artist_id: 8, name: "BackBeat" },
    { artist_id: 9, name: "Billy Cobham" },
    { artist_id: 10, name: "Black Label Society" },
    { artist_id: 11, name: "Black Sabbath" },
    { artist_id: 12, name: "Body Count" },
    { artist_id: 22, name: "Led Zeppelin" },
    { artist_id: 50, name: "Metallica" },
    { artist_id: 99, name: "Ghost Artist No Album" } // Artist without albums for anti-join
  ],

  // Chinook DB: Albums
  album: [
    { album_id: 1, title: "For Those About To Rock We Salute You", artist_id: 1 },
    { album_id: 2, title: "Balls to the Wall", artist_id: 2 },
    { album_id: 3, title: "Restless and Wild", artist_id: 2 },
    { album_id: 4, title: "Let There Be Rock", artist_id: 1 },
    { album_id: 5, title: "Big Ones", artist_id: 3 },
    { album_id: 6, title: "Jagged Little Pill", artist_id: 4 },
    { album_id: 7, title: "Facelift", artist_id: 5 },
    { album_id: 8, title: "Warner 25 Anos", artist_id: 6 },
    { album_id: 9, title: "Plays Meter", artist_id: 6 },
    { album_id: 10, title: "Audioslave", artist_id: 7 },
    { album_id: 11, title: "Out of Exile", artist_id: 7 },
    { album_id: 30, title: "Master of Puppets", artist_id: 50 },
    { album_id: 31, title: "IV (Four Symbols)", artist_id: 22 }
  ],

  // Chinook DB: Genres
  genre: [
    { genre_id: 1, name: "Rock" },
    { genre_id: 2, name: "Jazz" },
    { genre_id: 3, name: "Metal" },
    { genre_id: 4, name: "Alternative & Punk" },
    { genre_id: 5, name: "Rock And Roll" },
    { genre_id: 6, name: "Blues" },
    { genre_id: 7, name: "Latin" },
    { genre_id: 8, name: "Reggae" },
    { genre_id: 9, name: "Pop" },
    { genre_id: 10, name: "Soundtrack" },
    { genre_id: 11, name: "Classical" }
  ],

  // Chinook DB: Tracks (Selection for Joins & Aggregations)
  track: [
    { track_id: 1, name: "For Those About To Rock", album_id: 1, genre_id: 1, milliseconds: 343719, unit_price: 0.99, composer: "Angus Young" },
    { track_id: 2, name: "Balls to the Wall", album_id: 2, genre_id: 3, milliseconds: 342562, unit_price: 0.99, composer: "U. Dirkschneider" },
    { track_id: 3, name: "Fast As a Shark", album_id: 3, genre_id: 3, milliseconds: 230619, unit_price: 0.99, composer: "Wolf Hoffmann" },
    { track_id: 4, name: "Restless and Wild", album_id: 3, genre_id: 3, milliseconds: 252051, unit_price: 0.99, composer: "Wolf Hoffmann" },
    { track_id: 5, name: "Princess of the Dawn", album_id: 3, genre_id: 3, milliseconds: 375418, unit_price: 0.99, composer: "Deaffy" },
    { track_id: 6, name: "Go Down", album_id: 4, genre_id: 1, milliseconds: 331180, unit_price: 0.99, composer: "AC/DC" },
    { track_id: 7, name: "Dog Eat Dog", album_id: 4, genre_id: 1, milliseconds: 215196, unit_price: 0.99, composer: "AC/DC" },
    { track_id: 8, name: "Let There Be Rock", album_id: 4, genre_id: 1, milliseconds: 366654, unit_price: 0.99, composer: "AC/DC" },
    { track_id: 9, name: "Overdose", album_id: 4, genre_id: 1, milliseconds: 369319, unit_price: 0.99, composer: "AC/DC" },
    { track_id: 10, name: "Cochise", album_id: 10, genre_id: 4, milliseconds: 222380, unit_price: 0.99, composer: "Audioslave" },
    { track_id: 11, name: "Show Me How to Live", album_id: 10, genre_id: 4, milliseconds: 277890, unit_price: 0.99, composer: "Audioslave" },
    { track_id: 12, name: "Like a Stone", album_id: 10, genre_id: 4, milliseconds: 300303, unit_price: 0.99, composer: "Audioslave" },
    { track_id: 13, name: "Master of Puppets", album_id: 30, genre_id: 3, milliseconds: 515239, unit_price: 0.99, composer: "James Hetfield" },
    { track_id: 14, name: "Stairway to Heaven", album_id: 31, genre_id: 1, milliseconds: 482000, unit_price: 0.99, composer: "Jimmy Page, Robert Plant" },
    { track_id: 999, name: "Unreleased Demo 2026", album_id: 1, genre_id: 1, milliseconds: 180000, unit_price: 0.99, composer: null } // Never sold track
  ],

  // Chinook DB: Customers (Selection)
  customer: [
    { customer_id: 1, first_name: "Luís", last_name: "Gonçalves", company: "Embraer", city: "São José dos Campos", country: "Brazil", support_rep_id: 7566 },
    { customer_id: 2, first_name: "Leonie", last_name: "Köhler", company: null, city: "Stuttgart", country: "Germany", support_rep_id: 7698 },
    { customer_id: 3, first_name: "François", last_name: "Tremblay", company: null, city: "Montréal", country: "Canada", support_rep_id: 7698 },
    { customer_id: 4, first_name: "Bjørn", last_name: "Hansen", company: null, city: "Oslo", country: "Norway", support_rep_id: 7782 },
    { customer_id: 5, first_name: "František", last_name: "Wichterlová", company: "ČEZ", city: "Prague", country: "Czech Republic", support_rep_id: 7566 },
    { customer_id: 6, first_name: "Helena", last_name: "Holý", company: null, city: "Prague", country: "Czech Republic", support_rep_id: 7566 },
    { customer_id: 7, first_name: "Astrid", last_name: "Gruber", company: null, city: "Vienna", country: "Austria", support_rep_id: 7698 },
    { customer_id: 8, first_name: "Daan", last_name: "Peeters", company: null, city: "Brussels", country: "Belgium", support_rep_id: 7782 },
    { customer_id: 9, first_name: "Kara", last_name: "Nielsen", company: null, city: "Copenhagen", country: "Denmark", support_rep_id: 7782 },
    { customer_id: 10, first_name: "Eduardo", last_name: "Martins", company: "Woodstock", city: "São Paulo", country: "Brazil", support_rep_id: 7566 },
    { customer_id: 11, first_name: "Alexandre", last_name: "Rocha", company: "Banco do Brasil", city: "São Paulo", country: "Brazil", support_rep_id: 7566 },
    { customer_id: 12, first_name: "Roberto", last_name: "Almeida", company: "Rieti", city: "Rio de Janeiro", country: "Brazil", support_rep_id: 7698 },
    { customer_id: 13, first_name: "Fernanda", last_name: "Ramos", company: null, city: "Brasília", country: "Brazil", support_rep_id: 7698 },
    { customer_id: 14, first_name: "Mark", last_name: "Philips", company: "Telus", city: "Edmonton", country: "Canada", support_rep_id: 7782 },
    { customer_id: 15, first_name: "Jennifer", last_name: "Peterson", company: "Rogers", city: "Vancouver", country: "Canada", support_rep_id: 7698 },
    { customer_id: 99, first_name: "New", last_name: "Prospect", company: "Uzum", city: "Tashkent", country: "Uzbekistan", support_rep_id: null } // No orders
  ],

  // Chinook DB: Invoices
  invoice: [
    { invoice_id: 1, customer_id: 2, invoice_date: "2024-01-01", billing_country: "Germany", total: 1.98 },
    { invoice_id: 2, customer_id: 4, invoice_date: "2024-01-02", billing_country: "Norway", total: 3.96 },
    { invoice_id: 3, customer_id: 8, invoice_date: "2024-01-03", billing_country: "Belgium", total: 5.94 },
    { invoice_id: 4, customer_id: 1, invoice_date: "2024-01-06", billing_country: "Brazil", total: 8.91 },
    { invoice_id: 5, customer_id: 3, invoice_date: "2024-01-11", billing_country: "Canada", total: 13.86 },
    { invoice_id: 6, customer_id: 2, invoice_date: "2024-02-19", billing_country: "Germany", total: 0.99 },
    { invoice_id: 7, customer_id: 5, invoice_date: "2024-03-05", billing_country: "Czech Republic", total: 1.98 },
    { invoice_id: 8, customer_id: 10, invoice_date: "2024-04-16", billing_country: "Brazil", total: 3.96 },
    { invoice_id: 9, customer_id: 11, invoice_date: "2024-05-29", billing_country: "Brazil", total: 5.94 },
    { invoice_id: 10, customer_id: 1, invoice_date: "2024-06-18", billing_country: "Brazil", total: 8.91 },
    { invoice_id: 11, customer_id: 7, invoice_date: "2025-01-10", billing_country: "Austria", total: 10.89 },
    { invoice_id: 12, customer_id: 12, invoice_date: "2025-02-15", billing_country: "Brazil", total: 14.85 },
    { invoice_id: 13, customer_id: 14, invoice_date: "2025-03-22", billing_country: "Canada", total: 9.90 },
    { invoice_id: 14, customer_id: 15, invoice_date: "2025-04-04", billing_country: "Canada", total: 11.88 }
  ],

  // Chinook DB: Invoice Lines
  invoice_line: [
    { invoice_line_id: 1, invoice_id: 1, track_id: 1, unit_price: 0.99, quantity: 1 },
    { invoice_line_id: 2, invoice_id: 1, track_id: 6, unit_price: 0.99, quantity: 1 },
    { invoice_line_id: 3, invoice_id: 2, track_id: 8, unit_price: 0.99, quantity: 1 },
    { invoice_line_id: 4, invoice_id: 2, track_id: 10, unit_price: 0.99, quantity: 1 },
    { invoice_line_id: 5, invoice_id: 2, track_id: 12, unit_price: 0.99, quantity: 2 },
    { invoice_line_id: 6, invoice_id: 3, track_id: 2, unit_price: 0.99, quantity: 1 },
    { invoice_line_id: 7, invoice_id: 3, track_id: 3, unit_price: 0.99, quantity: 1 },
    { invoice_line_id: 8, invoice_id: 3, track_id: 4, unit_price: 0.99, quantity: 4 },
    { invoice_line_id: 9, invoice_id: 4, track_id: 13, unit_price: 0.99, quantity: 3 },
    { invoice_line_id: 10, invoice_id: 4, track_id: 14, unit_price: 0.99, quantity: 6 },
    { invoice_line_id: 11, invoice_id: 5, track_id: 1, unit_price: 0.99, quantity: 14 }
  ],

  // Lecture 5 Storage & B+ Tree Simulation Tables
  storage_pages: [
    { page_id: 0, file_type: "HEAP", relname: "customer", record_count: 65, free_bytes: 420, is_cached: true, hit_count: 1420, ctid_sample: "(0,1)" },
    { page_id: 1, file_type: "HEAP", relname: "customer", record_count: 65, free_bytes: 380, is_cached: true, hit_count: 890, ctid_sample: "(1,1)" },
    { page_id: 2, file_type: "HEAP", relname: "customer", record_count: 64, free_bytes: 512, is_cached: false, hit_count: 120, ctid_sample: "(2,1)" },
    { page_id: 15394, file_type: "HEAP", relname: "customer", record_count: 29, free_bytes: 4720, is_cached: false, hit_count: 15, ctid_sample: "(15394,29)" },
    { page_id: 20000, file_type: "BTREE_LEAF", relname: "idx_cust_id", record_count: 380, free_bytes: 180, is_cached: true, hit_count: 8400, ctid_sample: "ROOT->(20000,1)" },
    { page_id: 20001, file_type: "BTREE_ROOT", relname: "idx_cust_id", record_count: 120, free_bytes: 1400, is_cached: true, hit_count: 19800, ctid_sample: "ROOT" }
  ],

  file_stats: [
    { file_type: "Heap File", table_name: "customer", total_rows: 1000000, page_size_kb: 8, bfr: 65, total_pages: 15395, avg_equality_scan_pages: 7698, range_scan_pages: 15395, insert_pages: 2 },
    { file_type: "Sorted File", table_name: "customer", total_rows: 1000000, page_size_kb: 8, bfr: 65, total_pages: 15395, avg_equality_scan_pages: 14, range_scan_pages: 14, insert_pages: 15409 },
    { file_type: "Hash File", table_name: "customer", total_rows: 1000000, page_size_kb: 8, bfr: 65, total_pages: 19244, avg_equality_scan_pages: 1.2, range_scan_pages: 19244, insert_pages: 2 },
    { file_type: "B+ Tree Index", table_name: "idx_customer_pk", total_rows: 1000000, page_size_kb: 8, bfr: 380, total_pages: 2632, avg_equality_scan_pages: 3, range_scan_pages: 4, insert_pages: 3 }
  ],

  // 10 Corporate Floors
  sectors: [
    {
      id: 1,
      name: "FLOOR 1: ANSI INNER JOIN BASICS",
      subtitle: "Dense/Sparse, Primary/Clustering/Secondary, B+ Trees, and RAID (136–150)",
      color: "#c8a96e",
      wallTop: "#26231f",
      wallBottom: "#332e28",
      floorColor: "#463c33",
      range: [1, 15],
      floorRange: [1, 15],
      roomTheme: "lobby"
    },
    {
      id: 2,
      name: "FLOOR 2: MULTI-TABLE & NON-EQUI JOINS",
      subtitle: "3+ jadval birikmasi, BETWEEN shartli ulamlar va Chinook katalogi (16–30)",
      color: "#7c9a82",
      wallTop: "#1f2622",
      wallBottom: "#2a342e",
      floorColor: "#3d352e",
      range: [16, 30],
      floorRange: [16, 30],
      roomTheme: "hr_office"
    },
    {
      id: 3,
      name: "FLOOR 3: LEFT JOIN & RIGHT JOIN MANAGEMENT",
      subtitle: "Yetishmayotgan qatorlar, tashqi ulamlar, ON vs WHERE joylashuv farqi (31–45)",
      color: "#b89778",
      wallTop: "#25211e",
      wallBottom: "#352e29",
      floorColor: "#42382f",
      range: [31, 45],
      floorRange: [31, 45],
      roomTheme: "audit"
    },
    {
      id: 4,
      name: "FLOOR 4: ANTI-JOIN & NULL AUDIT CENTER",
      subtitle: "Anti-Join (IS NULL), 3-qiymatli mantiq, COALESCE va NULLIF (46–60)",
      color: "#c49a6c",
      wallTop: "#27211c",
      wallBottom: "#382f27",
      floorColor: "#4a3c30",
      range: [46, 60],
      floorRange: [46, 60],
      roomTheme: "archive"
    },
    {
      id: 5,
      name: "FLOOR 5: FULL OUTER JOIN & CARTESIAN PRODUCT",
      subtitle: "Ikki tomonlama tashqi ulamlar, CROSS JOIN matritsasi va hajmi (61–75)",
      color: "#8fa89b",
      wallTop: "#1e2426",
      wallBottom: "#293236",
      floorColor: "#3e3630",
      range: [61, 75],
      floorRange: [61, 75],
      roomTheme: "finance"
    },
    {
      id: 6,
      name: "FLOOR 6: SELF JOIN & HIERARCHICAL TREES",
      subtitle: "Xodim < Rahbar < Rahbarning Rahbari, hamkasblar juftligi va tengsizlik (76–90)",
      color: "#9da3a8",
      wallTop: "#212224",
      wallBottom: "#2d3034",
      floorColor: "#3c3833",
      range: [76, 90],
      floorRange: [76, 90],
      roomTheme: "boardroom"
    },
    {
      id: 7,
      name: "FLOOR 7: AGGREGATION & GROUP BY ANALYTICS",
      subtitle: "COUNT(*), COUNT(col), SUM, AVG, MIN, MAX va guruhlangan hisobotlar (91–105)",
      color: "#b08c6b",
      wallTop: "#26201b",
      wallBottom: "#362c25",
      floorColor: "#483b30",
      range: [91, 105],
      floorRange: [91, 105],
      roomTheme: "analytics"
    },
    {
      id: 8,
      name: "FLOOR 8: HAVING FILTERS & CONDITIONAL AGGREGATION",
      subtitle: "WHERE vs HAVING, CASE WHEN agregatsiya, FILTER va string_agg (106–120)",
      color: "#988472",
      wallTop: "#23211f",
      wallBottom: "#322d2a",
      floorColor: "#40362f",
      range: [106, 120],
      floorRange: [106, 120],
      roomTheme: "server_vault"
    },
    {
      id: 9,
      name: "FLOOR 9: PHYSICAL STORAGE & FILE STRUCTURES",
      subtitle: "Pages, Blocks, bfr, Heap vs Sorted vs Hash narxlari va Buffer Cache (121–135)",
      color: "#7e9680",
      wallTop: "#1d2420",
      wallBottom: "#27322b",
      floorColor: "#38332c",
      range: [121, 135],
      floorRange: [121, 135],
      roomTheme: "directors"
    },
    {
      id: 10,
      name: "FLOOR 10: INDEX ARCHITECTURE, B+ TREES & RAID",
      subtitle: "Dense/Sparse, Primary/Clustering/Secondary, B+ Tree chuqurligi va RAID 10 (136–150)",
      color: "#d4af37",
      wallTop: "#1f1b18",
      wallBottom: "#2e2722",
      floorColor: "#3d3229",
      range: [136, 150],
      floorRange: [136, 150],
      roomTheme: "penthouse"
    }
  ],

  // 10 Corporate Career Ranks
  careerRanks: [
    { minSolved: 0,   title: "Intern Analyst",               salary: "$1,500/mo", badge: "🎓" },
    { minSolved: 15,  title: "Junior SQL Engineer",             salary: "$2,600/mo", badge: "📊" },
    { minSolved: 30,  title: "Relational Database Specialist",     salary: "$4,200/mo", badge: "⚡" },
    { minSolved: 45,  title: "Senior Data Analyst",   salary: "$5,800/mo", badge: "🔍" },
    { minSolved: 60,  title: "Senior ETL & DWH Architect",        salary: "$7,800/mo", badge: "🏢" },
    { minSolved: 75,  title: "Hierarchical Schema Architect",       salary: "$10,200/mo", badge: "🪞" },
    { minSolved: 90,  title: "Principal Corporate Analyst",        salary: "$13,000/mo", badge: "📈" },
    { minSolved: 105, title: "Query & Filter Optimization Lead", salary: "$16,500/mo", badge: "⚖️" },
    { minSolved: 120, title: "Storage & Disk Systems Engineer", salary: "$19,500/mo", badge: "💿" },
    { minSolved: 135, title: "Executive Vice President (CDO / Partner)", salary: "$24,000/mo", badge: "👑" }
  ],

  // 10 Interactive Corporate Office Events ("Voqealiklar")
  officeEvents: [
    {
      id: "ev1",
      triggerAfterQuestion: 5,
      triggerAfterQ: 5,
      speaker: "CLARK",
      role: "10-Bo'lim Menejeri (Nyu-York)",
      avatar: "👔",
      title: "☕ Nyu-York Bosh Ofisi: JOIN Sharti Qayerda Bo'lishi Kerak?",
      narrative: "Clark espresso stakanini qo'liga olib sizga yuzlandi: 'Architect, yangi stajyor ikkita jadvalni bog'lashda `FROM emp, dept` deb vergul qo'yib, ulam shartini `WHERE` bandiga yozibdi. Biz esa zamonaviy ANSI SQL da `JOIN ... ON` ishlatamiz. Nega zamonaviy `JOIN ... ON` eski vergulli usuldan ancha xavfsizroq va afzalroq hisoblanadi?'",
      description: "Clark espresso stakanini qo'liga olib sizga yuzlandi: 'Architect, yangi stajyor ikkita jadvalni bog'lashda `FROM emp, dept` deb vergul qo'yib, ulam shartini `WHERE` bandiga yozibdi. Biz esa zamonaviy ANSI SQL da `JOIN ... ON` ishlatamiz. Nega zamonaviy `JOIN ... ON` eski vergulli usuldan ancha xavfsizroq va afzalroq hisoblanadi?'",
      choices: [
        {
          text: "Chunki `JOIN ... ON` da ulam sharti (qanday bog'lanishi) va qatorlarni saralash filtri (`WHERE`) bir-biridan aniq ajraladi. Shartni unutib tasodifiy Dekart ko'paytma hosil qilish xavfi yo'qoladi!",
          correct: true,
          bonus: 600,
          outcome: "Clark mamnun jilmaydi: 'Aynan shunday! Bosh ofis sizga $600 bonus ajratdi!'"
        },
        {
          text: "Chunki eski vergulli sintaksis PostgreSQL da umuman ishlamaydi va xato beradi.",
          correct: false,
          bonus: 0,
          outcome: "Clark tuzatdi: 'Yo'q, eski sintaksis ishlaydi, ammo ulam sharti unutilsa, bilmasdan millionlab ortiqcha qatorli Dekart ko'paytma yuzaga keladi.'"
        }
      ]
    },
    {
      id: "ev2",
      triggerAfterQuestion: 20,
      triggerAfterQ: 20,
      speaker: "JONES",
      role: "20-Bo'lim Menejeri (Dallas)",
      avatar: "🔬",
      title: "🔬 Dallas Tadqiqoti: Non-Equi JOIN va Chegaralar",
      narrative: "JONES ilmiy xonadan chiqib stolingizga keldi: 'Biz xodimlarning maosh razryadini aniqlash uchun `salgrade` jadvali bilan bog'layapmiz. Biroq `salgrade` da `empno` ustuni yo'q! Tenglik belgisi (`=`) ishlamayapti. Bunday teng bo'lmagan (Non-Equi) bog'lanishda qaysi konstruktsiya ishlatiladi?'",
      description: "JONES ilmiy xonadan chiqib stolingizga keldi: 'Biz xodimlarning maosh razryadini aniqlash uchun `salgrade` jadvali bilan bog'layapmiz. Biroq `salgrade` da `empno` ustuni yo'q! Tenglik belgisi (`=`) ishlamayapti. Bunday teng bo'lmagan (Non-Equi) bog'lanishda qaysi konstruktsiya ishlatiladi?'",
      choices: [
        {
          text: "`JOIN salgrade s ON e.sal BETWEEN s.losal AND s.hisal` — ya'ni maosh quyi va yuqori chegara oralig'iga tushishi tekshiriladi.",
          correct: true,
          bonus: 750,
          outcome: "JONES quvondi: 'Ajoyib! Dallas ilmiy guruhi sizga $750 mukofot taqdim etdi!'"
        },
        {
          text: "Faqat `LIKE` operatori orqali matnli qidiruv qilish mumkin.",
          correct: false,
          bonus: 0,
          outcome: "JONES eslatdi: 'Raqamli intervallar uchun `BETWEEN ... AND ...` ishlatiladi!'"
        }
      ]
    },
    {
      id: "ev3",
      triggerAfterQuestion: 35,
      triggerAfterQ: 35,
      speaker: "BLAKE",
      role: "30-Bo'lim Menejeri (Chikago)",
      avatar: "💼",
      title: "🚨 Chikago Taftishi: Bo'sh 40-Bo'lim Qayerga Ketdi?",
      narrative: "BLAKE hayron bo'lib so'radi: 'Direktorimiz barcha 4 ta bo'limni xodimlari bilan ko'rmoqchi bo'ldi. Stajyor `INNER JOIN` qilib 14 ta qator chiqardi, lekin 40-bo'lim (OPERATIONS) hisobotda ko'rinmayapti! 40-bo'limda hech kim ishlamasa ham uni ko'rsatish uchun nima qilish kerak?'",
      description: "BLAKE hayron bo'lib so'radi: 'Direktorimiz barcha 4 ta bo'limni xodimlari bilan ko'rmoqchi bo'ldi. Stajyor `INNER JOIN` qilib 14 ta qator chiqardi, lekin 40-bo'lim (OPERATIONS) hisobotda ko'rinmayapti! 40-bo'limda hech kim ishlamasa ham uni ko'rsatish uchun nima qilish kerak?'",
      choices: [
        {
          text: "`dept LEFT JOIN emp ON dept.deptno = emp.deptno` ishlatish kerak. Chapdagi barcha bo'limlar qoladi, xodimlari yo'q bo'lsa `NULL` bilan to'ldiriladi.",
          correct: true,
          bonus: 800,
          outcome: "BLAKE qarsak chaldi: 'Ofarin! Haqiqiy tashqi ulam (LEFT JOIN) mutaxassisi!'"
        },
        {
          text: "Bazada avval 40-bo'limga xayoliy xodim qo'shish kerak.",
          correct: false,
          bonus: 0,
          outcome: "BLAKE bosh chayqadi: 'Xayoliy ma'lumot kiritish qat'iyan man etiladi! Buning uchun `LEFT JOIN` mavjud!'"
        }
      ]
    },
    {
      id: "ev4",
      triggerAfterQuestion: 50,
      triggerAfterQ: 50,
      speaker: "TURNER",
      role: "Sotuv Bo'limi Mutaxassisi",
      avatar: "📈",
      title: "🛡 Anti-Join Bilan Qopqonni Zararsizlantirish",
      narrative: "TURNER xijolat bilan keldi: 'Hech kim ishlamaydigan bo'limlarni topish (Anti-join) uchun `WHERE e.comm IS NULL` deb yozishsa bo'ladimi deb so'rashyapti. Nega aynan birlamchi kalit `WHERE e.empno IS NULL` bilan tekshirish shart?'",
      description: "TURNER xijolat bilan keldi: 'Hech kim ishlamaydigan bo'limlarni topish (Anti-join) uchun `WHERE e.comm IS NULL` deb yozishsa bo'ladimi deb so'rashyapti. Nega aynan birlamchi kalit `WHERE e.empno IS NULL` bilan tekshirish shart?'",
      choices: [
        {
          text: "Chunki haqiqiy xodimlarda ham komissiya `NULL` bo'lishi mumkin! Lekin mavjud xodimning birlamchi kaliti (`empno`) hech qachon `NULL` bo'lolmaydi. Shuning uchun `e.empno IS NULL` ulam topilmaganligini kafolatlaydi.",
          correct: true,
          bonus: 850,
          outcome: "TURNER minnatdor bo'ldi: 'Siz bizni chalkashlikdan asrab qoldingiz! +$850 bonus!'"
        },
        {
          text: "Har ikkisi ham bir xil ishlaydi, farqi yo'q.",
          correct: false,
          bonus: 0,
          outcome: "TURNER tushuntirdi: 'Komissiyasi yo'q 10 ta xodim bor! `comm IS NULL` ularni ham qo'shib yuborardi!'"
        }
      ]
    },
    {
      id: "ev5",
      triggerAfterQuestion: 65,
      triggerAfterQ: 65,
      speaker: "Bosh Buxgalter Anna",
      role: "Moliyaviy Nazorat Boshlig'i",
      avatar: "📑",
      title: "🌐 CROSS JOIN: Dekart Portlashi Xavfi",
      narrative: "Anna hisobotlarni ushlab turibdi: 'Agar kompaniyadagi 14 ta xodimni va 4 ta bo'limni hech qanday `ON` shartisiz `emp CROSS JOIN dept` qilsak, natijada nechta qator paydo bo'ladi va bu nima uchun xavfli bo'lishi mumkin?'",
      description: "Anna hisobotlarni ushlab turibdi: 'Agar kompaniyadagi 14 ta xodimni va 4 ta bo'limni hech qanday `ON` shartisiz `emp CROSS JOIN dept` qilsak, natijada nechta qator paydo bo'ladi va bu nima uchun xavfli bo'lishi mumkin?'",
      choices: [
        {
          text: "14 × 4 = 56 ta qator hosil bo'ladi. Million qatorli jadvallarda esa bu trillionlab qatorlarni hosil qilib, butun server xotirasini to'ldirib yuborishi mumkin!",
          correct: true,
          bonus: 900,
          outcome: "Anna tasdiqladi: 'To'g'ri! Katta bazalarda beixtiyor CROSS JOIN serverni to'xtatib qo'yadi!'"
        },
        {
          text: "Faqat 14 ta qator chiqadi, chunki xodimlar soni 14 ta.",
          correct: false,
          bonus: 0,
          outcome: "Anna eslatdi: 'CROSS JOIN har bir satrni ikkinchi jadvalning har bir satriga ko'paytiradi (14 × 4 = 56)!'"
        }
      ]
    },
    {
      id: "ev6",
      triggerAfterQuestion: 80,
      triggerAfterQ: 80,
      speaker: "FORD & SCOTT",
      role: "Dallas Bosh Tahlilchilari",
      avatar: "📊",
      title: "🪞 O'z Rahbaridan Ko'p Oluvchi Muhandislar",
      narrative: "FORD va SCOTT kulimsirab kofe ichishmoqda: 'Biz ikkalamiz ham $3000 maosh olamiz, bizning rahbarimiz JONES esa $2975 oladi! Ya'ni biz rahbarimizdan $25 ko'p maosh olamiz. Buni SQL da qanday aniqladingiz?'",
      description: "FORD va SCOTT kulimsirab kofe ichishmoqda: 'Biz ikkalamiz ham $3000 maosh olamiz, bizning rahbarimiz JONES esa $2975 oladi! Ya'ni biz rahbarimizdan $25 ko'p maosh olamiz. Buni SQL da qanday aniqladingiz?'",
      choices: [
        {
          text: "`emp e JOIN emp m ON e.supervisor = m.empno WHERE e.sal > m.sal` — bir xil jadvalni ikkita taxallus bilan o'z-o'ziga (SELF JOIN) bog'lab solishtirish orqali!",
          correct: true,
          bonus: 1000,
          outcome: "SCOTT qadah ko'tardi: 'Ajoyib! O'z-o'ziga bog'lanish ierarxiyani aniq ko'rsatadi!'"
        },
        {
          text: "Ikkita alohida so'rov yozib natijalarni daftarga yozib hisobladik.",
          correct: false,
          bonus: 0,
          outcome: "FORD eslatdi: 'SQL ning qudrati — SELF JOIN orqali birgina so'rovda barcha shajarani taqqoslashdadir!'"
        }
      ]
    },
    {
      id: "ev7",
      triggerAfterQuestion: 95,
      triggerAfterQ: 95,
      speaker: "Tashqi Auditor Smit",
      role: "Xalqaro Hisobot Taftishchisi",
      avatar: "🔍",
      title: "📈 COUNT(*) vs COUNT(comm) Siri",
      narrative: "Auditor qat'iy ohangda so'radi: 'Nega butun kompaniya bo'yicha `SELECT COUNT(*)` 14 chiqadi, ammo `SELECT COUNT(comm)` atigi 4 chiqadi? 10 ta qator qayerga yo'qoldi?'",
      description: "Auditor qat'iy ohangda so'radi: 'Nega butun kompaniya bo'yicha `SELECT COUNT(*)` 14 chiqadi, ammo `SELECT COUNT(comm)` atigi 4 chiqadi? 10 ta qator qayerga yo'qoldi?'",
      choices: [
        {
          text: "Chunki `COUNT(*)` barcha qatorlarni (NULL bo'lsa ham) sanaydi, `COUNT(ustun)` esa faqat NULL BO'LMAGAN (NOT NULL) qiymatlarni sanaydi!",
          correct: true,
          bonus: 1200,
          outcome: "Auditor bosh irg'adi: 'Mukammal tushuntirish! Xalqaro sertifikat bonusi: +$1,200!'"
        },
        {
          text: "Chunki bazada 10 ta xodimning komissiya yozuvi o'chib ketgan.",
          correct: false,
          bonus: 0,
          outcome: "Auditor eslatdi: 'Yozuv o'chmagan, NULL qiymatlar ustun bo'yicha sanalganda e'tiborga olinmaydi!'"
        }
      ]
    },
    {
      id: "ev8",
      triggerAfterQuestion: 110,
      triggerAfterQ: 110,
      speaker: "KING",
      role: "Prezident & Bosh Direktor",
      avatar: "👑",
      title: "⚖️ WHERE vs HAVING Chegarasi",
      narrative: "Prezident KING majlislar zalida to'xtadi: 'Menga 2 tadan ko'p xodimi bor lavozimlar kerak edi. Yangi mutaxassis `WHERE COUNT(*) > 2` deb yozib, qizil xatolik oldi. Nega bu xato bo'ldi?'",
      description: "Prezident KING majlislar zalida to'xtadi: 'Menga 2 tadan ko'p xodimi bor lavozimlar kerak edi. Yangi mutaxassis `WHERE COUNT(*) > 2` deb yozib, qizil xatolik oldi. Nega bu xato bo'ldi?'",
      choices: [
        {
          text: "Chunki `WHERE` guruhlashdan OLDIN har bir qatorni alohida filtrlaydi. Guruhlar yig'indisini filtrlash uchun esa faqat `GROUP BY` dan keyingi `HAVING` bandi ishlatiladi!",
          correct: true,
          bonus: 1500,
          outcome: "Prezident KING qo'l berib tabrikladi: 'Yuksak professionalizm! +$1,500 bonus!'"
        },
        {
          text: "Chunki `COUNT` funksiyasi faqat `ORDER BY` da ishlaydi.",
          correct: false,
          bonus: 0,
          outcome: "KING tuzatdi: 'Qoidani yodda tuting: qatorlar filtri — WHERE, guruhlar filtri — HAVING!'"
        }
      ]
    },
    {
      id: "ev9",
      triggerAfterQuestion: 125,
      triggerAfterQ: 125,
      speaker: "Server Xonasi Muhandisi Karim",
      role: "Infratuzilma Boshlig'i",
      avatar: "💾",
      title: "💿 Disk I/O va 15,395 Ta Sahifa Dominatsiyasi",
      narrative: "Karim server stoykasidan sovutish panelini ochdi: '1,000,000 ta mijoz saqlangan jadvalimiz 15,395 ta 8 KB lik sahifada (blokda) turibdi. Agar jadval Heap (tartibsiz) bo'lsa, bitta mijozni ID bo'yicha topish uchun o'rtacha nechta sahifani diskdan o'qish kerak bo'ladi?'",
      description: "Karim server stoykasidan sovutish panelini ochdi: '1,000,000 ta mijoz saqlangan jadvalimiz 15,395 ta 8 KB lik sahifada (blokda) turibdi. Agar jadval Heap (tartibsiz) bo'lsa, bitta mijozni ID bo'yicha topish uchun o'rtacha nechta sahifani diskdan o'qish kerak bo'ladi?'",
      choices: [
        {
          text: "O'rtacha b / 2 = 15,395 / 2 ≈ 7,698 ta sahifa! Sorted faylda esa ikkilik qidiruv bilan atigi ⌈log₂(15395)⌉ ≈ 14 ta sahifa kifoya qilardi.",
          correct: true,
          bonus: 1800,
          outcome: "Karim qoyil qoldi: 'Ajoyib hisob-kitob! Disk yuklamasini 500 baravar qisqartirish mumkin!'"
        },
        {
          text: "Atigi 1 ta sahifa, chunki operatsion tizim hamma narsani biladi.",
          correct: false,
          bonus: 0,
          outcome: "Karim eslatdi: 'Heap faylda indeks bo'lmasa, butun jadvalning yarmini chiziqli tekshirishga to'g'ri keladi!'"
        }
      ]
    },
    {
      id: "ev10",
      triggerAfterQuestion: 140,
      triggerAfterQ: 140,
      speaker: "Professor Atlas",
      role: "Academy Bosh Ma'lumotlar Arxitektori",
      avatar: "🏛",
      title: "🌳 B+ Daraxt va Relyatsion Korporativ RAID 10",
      narrative: "Professor Atlas ko'zoynagini to'g'rilab so'radi: 'Nega yirik bank va relatsion tranzaksiya bazalari (PostgreSQL/Oracle) uchun RAID 5 emas, aynan RAID 10 (1+0) eng yaxshi saqlash arxitekturasi hisoblanadi?'",
      description: "Professor Atlas ko'zoynagini to'g'rilab so'radi: 'Nega yirik bank va relatsion tranzaksiya bazalari (PostgreSQL/Oracle) uchun RAID 5 emas, aynan RAID 10 (1+0) eng yaxshi saqlash arxitekturasi hisoblanadi?'",
      choices: [
        {
          text: "Chunki RAID 5 da har bir WRITE amali paritet hisoblash (Read-Modify-Write) penaltisiga uchraydi! RAID 10 esa striping tezligini va ko'zgu (mirroring) ishonchliligini birlashtirib, eng yuqori yozish va o'qish unumdorligini beradi.",
          correct: true,
          bonus: 2500,
          outcome: "Professor Atlas olqishladi: 'Siz Academy DS W5 Bosh Arxitektori imtihonini a'lo bahoga topshirdingiz! +$2,500 mukofot!'"
        },
        {
          text: "Chunki RAID 10 eng kam disk talab qiladigan eng arzon variant.",
          correct: false,
          bonus: 0,
          outcome: "Professor Atlas tushuntirdi: 'Aksincha, RAID 10 qimmatroq (50% sig'im ko'zguga ketadi), lekin uning tezligi va paritet penaltisi yo'qligi uni birinchi raqamli qiladi!'"
        }
      ]
    }
  ]
};

// ============================================================================
// IN-MEMORY SQL EXECUTION ENGINE & SMART GRADER
// Executes ANSI JOINS, MULTI-JOINS, LEFT/RIGHT/FULL/CROSS/SELF JOINS,
// GROUP BY, HAVING, AGGREGATIONS, SORTING, NULLS, STORAGE SIMULATIONS.
// ============================================================================

window.SQL_GRADER = {
  normalizeSQL(sql) {
    if (!sql) return "";
    return sql
      .replace(/--.*$/gm, " ")
      .replace(/\/\*[\s\S]*?\*\//g, " ")
      .trim()
      .replace(/;+\s*$/g, "")
      .replace(/[‘’]/g, "'")
      .replace(/[“”]/g, '"')
      .replace(/!=/g, "<>")
      .replace(/\s+/g, " ")
      .trim();
  },

  // Pinpoint Syntax and Semantic Diagnostics
  detectDiagnostics(rawSql, question) {
    if (!rawSql || !rawSql.trim()) {
      return "Ishchi terminal bo'sh! SQL so'rovingizni yozib, 'Hisobotni Tekshirish' (Ctrl+Enter) tugmasini bosing.";
    }

    const trimmed = rawSql.trim();

    // 1. Single quotes balance
    let quoteCount = 0;
    for (let i = 0; i < trimmed.length; i++) {
      if (trimmed[i] === "'") {
        if (i > 0 && trimmed[i - 1] === "\\") continue;
        quoteCount++;
      }
    }
    if (quoteCount % 2 !== 0) {
      return "Sintaksis xatosi: Matnli tirnoq (') yopilmagan. Satr oxiridagi tirnoqni tekshiring.";
    }

    // 2. Parentheses balance
    let pCount = 0;
    for (let i = 0; i < trimmed.length; i++) {
      if (trimmed[i] === "(") pCount++;
      if (trimmed[i] === ")") pCount--;
      if (pCount < 0) {
        return "Sintaksis xatosi: Qavslar balansi buzilgan — ortiqcha yopuvchi ')' qavs yozilgan.";
      }
    }
    if (pCount !== 0) {
      return `Sintaksis xatosi: Qavslar balansi buzilgan — ${pCount} ta ochilgan '(' qavs yopilmagan.`;
    }

    // 3. Must start with SELECT or WITH
    if (!/^\s*(SELECT|WITH)\b/i.test(trimmed)) {
      return "Sintaksis xatosi: SQL so'rov 'SELECT' (yoki 'WITH') kalit so'zi bilan boshlanishi lozim.";
    }

    // 4. FROM clause exists if not pure scalar
    if (!/\bFROM\b/i.test(trimmed) && !/^\s*SELECT\s+[\d\s\+\-\*\/]+\s*;?\s*$/i.test(trimmed)) {
      return "Sintaksis xatosi: 'FROM' bandi yetishmayapti. Qaysi jadvaldan tanlayotganingizni ko'rsating.";
    }

    // 5. 3-Valued Logic trap: = NULL or <> NULL
    if (/(=|<>|!=)\s*NULL\b/i.test(trimmed)) {
      return "⚠️ 3-Qiymatli Mantiq (NULL Tuzog'i): SQL da '= NULL' har doim UNKNOWN qaytaradi va 0 ta qator chiqadi! 'IS NULL' yoki 'IS NOT NULL' dan foydalaning.";
    }

    // 6. Aggregate inside WHERE trap
    const upper = trimmed.toUpperCase();
    const wherePart = upper.split(/\bGROUP\s+BY\b|\bHAVING\b|\bORDER\s+BY\b/)[0];
    if (/\bWHERE\b/.test(wherePart)) {
      const afterWhere = wherePart.split(/\bWHERE\b/).slice(1).join(" ");
      if (!/\bSELECT\b/.test(afterWhere) && /\b(COUNT|SUM|AVG|MIN|MAX)\s*\(/i.test(afterWhere)) {
        return "⚠️ Diqqat: WHERE bandida agregat funksiyani (COUNT, AVG, SUM...) to'g'ridan-to'g'ri ishlatib bo'lmaydi! Buning o'rniga GROUP BY dan so'ng HAVING bandidan foydalaning.";
      }
    }

    return null;
  },

  // Execute SQL in JavaScript relational environment
  execute(sql) {
    const raw = this.normalizeSQL(sql);
    if (!raw) return { success: false, error: "Bo'sh so'rov", columns: [], rows: [] };

    try {
      return this.runQuery(raw);
    } catch (e) {
      return { success: false, error: e.message || String(e), columns: [], rows: [] };
    }
  },

  runQuery(sql) {
    const upper = sql.toUpperCase();

    // Check for calculation or scalar questions (e.g. SELECT 15395 / 2 AS avg_cost; or SELECT 'BTREE' AS type)
    if (!/\bFROM\b/i.test(sql) && /^\s*SELECT\s+/i.test(sql)) {
      const exprMatch = sql.match(/^\s*SELECT\s+([\s\S]+)$/i);
      if (exprMatch) {
        const item = exprMatch[1].trim();
        const aliasParts = item.split(/\s+AS\s+/i);
        const expr = aliasParts[0].trim();
        const alias = aliasParts.length > 1 ? aliasParts[1].replace(/["']/g, "").trim() : "result";

        // Check if string literal
        if ((expr.startsWith("'") && expr.endsWith("'")) || (expr.startsWith('"') && expr.endsWith('"'))) {
          return {
            success: true,
            columns: [alias],
            rows: [{ [alias]: expr.slice(1, -1) }]
          };
        }

        try {
          // evaluate simple math
          const cleanMath = expr.replace(/[^\d\.\+\-\*\/\(\)\s]/g, "");
          const val = Function(`"use strict"; return (${cleanMath});`)();
          return {
            success: true,
            columns: [alias],
            rows: [{ [alias]: typeof val === "number" ? Math.round(val * 100) / 100 : val }]
          };
        } catch (e) {
          return {
            success: true,
            columns: [alias],
            rows: [{ [alias]: expr }]
          };
        }
      }
    }

    // Parse main parts: SELECT ... FROM ... [JOINs] [WHERE] [GROUP BY] [HAVING] [ORDER BY] [LIMIT]
    const selectMatch = sql.match(/SELECT\s+([\s\S]+?)\s+FROM\s+/i);
    if (!selectMatch) throw new Error("SELECT yoki FROM bandi topilmadi.");

    const selectPart = selectMatch[1].trim();
    let remaining = sql.slice(selectMatch[0].length).trim();

    // Extract LIMIT / OFFSET
    let limit = null;
    let offset = 0;
    const limitMatch = remaining.match(/\bLIMIT\s+(\d+)(?:\s+OFFSET\s+(\d+))?/i);
    if (limitMatch) {
      limit = parseInt(limitMatch[1], 10);
      if (limitMatch[2]) offset = parseInt(limitMatch[2], 10);
      remaining = remaining.replace(/\bLIMIT\s+[\d\s\w]+$/i, "").trim();
    }

    // Extract ORDER BY
    let orderByPart = null;
    const orderMatch = remaining.match(/\bORDER\s+BY\s+([\s\S]+)$/i);
    if (orderMatch) {
      orderByPart = orderMatch[1].trim();
      remaining = remaining.slice(0, orderMatch.index).trim();
    }

    // Extract HAVING
    let havingPart = null;
    const havingMatch = remaining.match(/\bHAVING\s+([\s\S]+)$/i);
    if (havingMatch) {
      havingPart = havingMatch[1].trim();
      remaining = remaining.slice(0, havingMatch.index).trim();
    }

    // Extract GROUP BY
    let groupByPart = null;
    const groupMatch = remaining.match(/\bGROUP\s+BY\s+([\s\S]+)$/i);
    if (groupMatch) {
      groupByPart = groupMatch[1].trim();
      remaining = remaining.slice(0, groupMatch.index).trim();
    }

    // Extract WHERE
    let wherePart = null;
    const whereMatch = remaining.match(/\bWHERE\s+([\s\S]+)$/i);
    if (whereMatch) {
      wherePart = whereMatch[1].trim();
      remaining = remaining.slice(0, whereMatch.index).trim();
    }

    // Now remaining contains FROM and JOIN clauses
    const fromAndJoins = remaining.trim();
    const joinedRows = this.buildJoinedTable(fromAndJoins);

    // Apply WHERE filter
    let filteredRows = joinedRows;
    if (wherePart) {
      filteredRows = joinedRows.filter(row => this.evaluateCondition(row, wherePart));
    }

    // Apply GROUP BY & Aggregation
    let resultRows = [];
    if (groupByPart || this.hasAggregates(selectPart)) {
      resultRows = this.executeGrouping(filteredRows, groupByPart, selectPart, havingPart);
    } else {
      resultRows = this.projectSimple(filteredRows, selectPart);
    }

    // Apply ORDER BY
    if (orderByPart && resultRows.length > 0) {
      resultRows = this.applySorting(resultRows, orderByPart);
    }

    // Apply OFFSET & LIMIT
    if (offset > 0) {
      resultRows = resultRows.slice(offset);
    }
    if (limit !== null) {
      resultRows = resultRows.slice(0, limit);
    }

    // Extract output columns
    const columns = resultRows.length > 0 ? Object.keys(resultRows[0]) : this.extractColumnNames(selectPart);

    return {
      success: true,
      columns,
      rows: resultRows
    };
  },

  hasAggregates(selectStr) {
    return /\b(COUNT|SUM|AVG|MIN|MAX|STRING_AGG)\s*\(/i.test(selectStr);
  },

  extractColumnNames(selectStr) {
    const items = this.splitCommaRespectingParens(selectStr);
    return items.map(it => {
      const aliasMatch = it.match(/\bAS\s+("?[a-zA-Z0-9_ ]+"?)/i);
      if (aliasMatch) return aliasMatch[1].replace(/["']/g, "").trim();
      const parts = it.trim().split(/\s+/);
      const last = parts[parts.length - 1].replace(/["']/g, "").trim();
      const dotParts = last.split(".");
      return dotParts[dotParts.length - 1];
    });
  },

  splitCommaRespectingParens(str) {
    const res = [];
    let cur = "";
    let depth = 0;
    for (let i = 0; i < str.length; i++) {
      const ch = str[i];
      if (ch === "(") depth++;
      else if (ch === ")") depth--;
      if (ch === "," && depth === 0) {
        res.push(cur.trim());
        cur = "";
      } else {
        cur += ch;
      }
    }
    if (cur.trim()) res.push(cur.trim());
    return res;
  },

  buildJoinedTable(fromStr) {
    // Parse tables and joins
    // Example: emp e JOIN dept d ON e.deptno = d.deptno LEFT JOIN salgrade s ON e.sal BETWEEN s.losal AND s.hisal
    // Or old syntax: emp e, dept d
    if (fromStr.includes(",") && !/\bJOIN\b/i.test(fromStr)) {
      const tables = fromStr.split(",").map(s => s.trim());
      let combined = [{}];
      for (const t of tables) {
        const { name, alias } = this.parseTableSpec(t);
        const data = this.getTableData(name);
        const nextCombined = [];
        for (const rowA of combined) {
          for (const rowB of data) {
            nextCombined.push(this.mergeRowWithPrefix(rowA, rowB, alias || name));
          }
        }
        combined = nextCombined;
      }
      return combined;
    }

    // ANSI JOIN parser
    // Tokenize by JOIN keywords
    const joinRegex = /\b(LEFT\s+JOIN|RIGHT\s+JOIN|FULL\s+JOIN|FULL\s+OUTER\s+JOIN|CROSS\s+JOIN|INNER\s+JOIN|JOIN)\b/gi;
    const pieces = [];
    let lastIdx = 0;
    let match;

    const firstTableEnd = fromStr.search(joinRegex);
    if (firstTableEnd === -1) {
      // Single table
      const { name, alias } = this.parseTableSpec(fromStr);
      const data = this.getTableData(name);
      return data.map(r => this.mergeRowWithPrefix({}, r, alias || name));
    }

    const baseTableSpec = fromStr.slice(0, firstTableEnd).trim();
    const { name: baseName, alias: baseAlias } = this.parseTableSpec(baseTableSpec);
    let currentRows = this.getTableData(baseName).map(r => this.mergeRowWithPrefix({}, r, baseAlias || baseName));

    const joinClauseStr = fromStr.slice(firstTableEnd);
    const joinMatches = [...joinClauseStr.matchAll(/\b(LEFT\s+JOIN|RIGHT\s+JOIN|FULL\s+JOIN|FULL\s+OUTER\s+JOIN|CROSS\s+JOIN|INNER\s+JOIN|JOIN)\s+([\s\S]+?)(?=(?:\bLEFT\s+JOIN|\bRIGHT\s+JOIN|\bFULL\s+JOIN|\bFULL\s+OUTER\s+JOIN|\bCROSS\s+JOIN|\bINNER\s+JOIN|\bJOIN\b)|$)/gi)];

    for (const jm of joinMatches) {
      const typeRaw = jm[1].toUpperCase();
      const body = jm[2].trim();

      let joinType = "INNER";
      if (typeRaw.includes("LEFT")) joinType = "LEFT";
      else if (typeRaw.includes("RIGHT")) joinType = "RIGHT";
      else if (typeRaw.includes("FULL")) joinType = "FULL";
      else if (typeRaw.includes("CROSS")) joinType = "CROSS";

      let tblSpec = body;
      let onCond = null;
      let usingCol = null;

      const onMatch = body.match(/\bON\s+([\s\S]+)$/i);
      const usingMatch = body.match(/\bUSING\s*\(\s*([a-zA-Z0-9_]+)\s*\)/i);

      if (onMatch) {
        tblSpec = body.slice(0, onMatch.index).trim();
        onCond = onMatch[1].trim();
      } else if (usingMatch) {
        tblSpec = body.slice(0, usingMatch.index).trim();
        usingCol = usingMatch[1].trim();
      }

      const { name: rName, alias: rAlias } = this.parseTableSpec(tblSpec);
      const rData = this.getTableData(rName);
      const pfx = rAlias || rName;

      currentRows = this.performJoin(currentRows, rData, pfx, joinType, onCond, usingCol);
    }

    return currentRows;
  },

  parseTableSpec(str) {
    const parts = str.trim().split(/\s+(?:AS\s+)?/i);
    const name = parts[0].trim();
    const alias = parts.length > 1 ? parts[1].trim() : name;
    return { name, alias };
  },

  getTableData(name) {
    const lName = name.toLowerCase();
    if (window.COMPANY_DB && window.COMPANY_DB[lName]) {
      return window.COMPANY_DB[lName];
    }
    // Check common aliases
    if (lName === "employee") return window.COMPANY_DB.emp;
    if (lName === "department") return window.COMPANY_DB.dept;
    if (lName === "grades" || lName === "salary_grade") return window.COMPANY_DB.salgrade;
    return [];
  },

  mergeRowWithPrefix(baseRow, newRow, prefix) {
    const res = { ...baseRow };
    const pfx = prefix ? prefix.toLowerCase() + "." : "";
    for (const k of Object.keys(newRow)) {
      res[pfx + k.toLowerCase()] = newRow[k];
      // also keep bare column name if not conflicting, or overwrite
      if (res[k.toLowerCase()] === undefined) {
        res[k.toLowerCase()] = newRow[k];
      }
    }
    return res;
  },

  performJoin(leftRows, rightData, rightPrefix, joinType, onCond, usingCol) {
    const result = [];
    const rightMatched = new Set();

    for (const lRow of leftRows) {
      let matchedAny = false;

      for (let rIdx = 0; rIdx < rightData.length; rIdx++) {
        const rRow = rightData[rIdx];
        const merged = this.mergeRowWithPrefix(lRow, rRow, rightPrefix);

        let matches = false;
        if (joinType === "CROSS") {
          matches = true;
        } else if (usingCol) {
          const lVal = this.resolveColValue(lRow, usingCol);
          const rVal = rRow[usingCol] !== undefined ? rRow[usingCol] : rRow[usingCol.toLowerCase()];
          matches = (lVal !== undefined && lVal !== null && lVal === rVal);
        } else if (onCond) {
          matches = this.evaluateCondition(merged, onCond);
        }

        if (matches) {
          matchedAny = true;
          rightMatched.add(rIdx);
          result.push(merged);
        }
      }

      if (!matchedAny && (joinType === "LEFT" || joinType === "FULL")) {
        // produce row with right side NULLs
        const nullRight = {};
        if (rightData.length > 0) {
          for (const k of Object.keys(rightData[0])) {
            nullRight[k] = null;
          }
        }
        result.push(this.mergeRowWithPrefix(lRow, nullRight, rightPrefix));
      }
    }

    if (joinType === "RIGHT" || joinType === "FULL") {
      // add right rows that had no match
      for (let rIdx = 0; rIdx < rightData.length; rIdx++) {
        if (!rightMatched.has(rIdx)) {
          const rRow = rightData[rIdx];
          const nullLeft = {};
          if (leftRows.length > 0) {
            for (const k of Object.keys(leftRows[0])) {
              nullLeft[k] = null;
            }
          }
          result.push(this.mergeRowWithPrefix(nullLeft, rRow, rightPrefix));
        }
      }
    }

    return result;
  },

  resolveColValue(row, colExpr) {
    if (!row) return undefined;
    const clean = colExpr.trim().toLowerCase();

    // Direct match (with or without table prefix)
    if (row[clean] !== undefined) return row[clean];

    // Try without prefix if qualified
    if (clean.includes(".")) {
      const bare = clean.split(".")[1];
      if (row[bare] !== undefined) return row[bare];
    } else {
      // Find any table prefix that matches
      for (const k of Object.keys(row)) {
        if (k.endsWith("." + clean)) return row[k];
      }
    }

    return undefined;
  },

  evaluateCondition(row, cond) {
    if (!cond || !cond.trim()) return true;
    let c = cond.trim();

    // Strip outer parentheses
    while (c.startsWith("(") && c.endsWith(")")) {
      let depth = 0, canStrip = true;
      for (let i = 0; i < c.length - 1; i++) {
        if (c[i] === "(") depth++;
        if (c[i] === ")") depth--;
        if (depth === 0) { canStrip = false; break; }
      }
      if (canStrip) c = c.slice(1, -1).trim();
      else break;
    }

    // Split top-level OR
    const orParts = this.splitTopLevel(c, "OR");
    if (orParts.length > 1) {
      return orParts.some(p => this.evaluateCondition(row, p));
    }

    // Split top-level AND
    const andParts = this.splitTopLevel(c, "AND");
    if (andParts.length > 1) {
      return andParts.every(p => this.evaluateCondition(row, p));
    }

    // Handle NOT
    if (/^NOT\s+/i.test(c)) {
      return !this.evaluateCondition(row, c.replace(/^NOT\s+/i, ""));
    }

    // IS NULL / IS NOT NULL
    const isNullMatch = c.match(/^([\s\S]+?)\s+IS\s+NULL$/i);
    if (isNullMatch) {
      const val = this.evalExpression(row, isNullMatch[1]);
      return val === null || val === undefined;
    }

    const isNotNullMatch = c.match(/^([\s\S]+?)\s+IS\s+NOT\s+NULL$/i);
    if (isNotNullMatch) {
      const val = this.evalExpression(row, isNotNullMatch[1]);
      return val !== null && val !== undefined;
    }

    // BETWEEN
    const betweenMatch = c.match(/^([\s\S]+?)\s+BETWEEN\s+([\s\S]+?)\s+AND\s+([\s\S]+)$/i);
    if (betweenMatch) {
      const val = this.evalExpression(row, betweenMatch[1]);
      const lo = this.evalExpression(row, betweenMatch[2]);
      const hi = this.evalExpression(row, betweenMatch[3]);
      if (val === null || lo === null || hi === null) return false;
      return val >= lo && val <= hi;
    }

    // IN (...)
    const inMatch = c.match(/^([\s\S]+?)\s+IN\s*\(([\s\S]+)\)$/i);
    if (inMatch) {
      const val = this.evalExpression(row, inMatch[1]);
      const setList = inMatch[2].split(",").map(s => this.evalExpression(row, s.trim()));
      return setList.includes(val);
    }

    // Comparisons: =, <>, !=, <=, >=, <, >
    const compMatch = c.match(/^([\s\S]+?)\s*(=|<>|!=|<=|>=|<|>)\s*([\s\S]+)$/);
    if (compMatch) {
      const leftVal = this.evalExpression(row, compMatch[1]);
      const op = compMatch[2];
      const rightVal = this.evalExpression(row, compMatch[3]);

      if (leftVal === null || rightVal === null) return false;

      if (op === "=") return String(leftVal).toLowerCase() === String(rightVal).toLowerCase();
      if (op === "<>" || op === "!=") return String(leftVal).toLowerCase() !== String(rightVal).toLowerCase();
      if (op === "<=") return Number(leftVal) <= Number(rightVal);
      if (op === ">=") return Number(leftVal) >= Number(rightVal);
      if (op === "<") return Number(leftVal) < Number(rightVal);
      if (op === ">") return Number(leftVal) > Number(rightVal);
    }

    return true;
  },

  splitTopLevel(str, keyword) {
    const parts = [];
    let lastIdx = 0;
    const regex = new RegExp(`\\b${keyword}\\b`, "gi");
    let match;
    while ((match = regex.exec(str)) !== null) {
      const before = str.slice(0, match.index);
      const openP = (before.match(/\(/g) || []).length;
      const closeP = (before.match(/\)/g) || []).length;
      if (openP === closeP) {
        parts.push(str.slice(lastIdx, match.index).trim());
        lastIdx = regex.lastIndex;
      }
    }
    if (lastIdx < str.length) {
      parts.push(str.slice(lastIdx).trim());
    }
    return parts.length > 1 ? parts : [str];
  },

  evalExpression(row, expr) {
    if (!expr) return null;
    const trimmed = expr.trim();

    // String literal
    if ((trimmed.startsWith("'") && trimmed.endsWith("'")) || (trimmed.startsWith('"') && trimmed.endsWith('"'))) {
      return trimmed.slice(1, -1);
    }

    // Number literal
    if (/^-?\d+(\.\d+)?$/.test(trimmed)) {
      return parseFloat(trimmed);
    }

    // NULL
    if (trimmed.toUpperCase() === "NULL") return null;

    // COALESCE(a, b, ...)
    const coalMatch = trimmed.match(/^COALESCE\s*\(([\s\S]+)\)$/i);
    if (coalMatch) {
      const args = this.splitCommaRespectingParens(coalMatch[1]);
      for (const a of args) {
        const val = this.evalExpression(row, a);
        if (val !== null && val !== undefined) return val;
      }
      return null;
    }

    // NULLIF(a, b)
    const nullifMatch = trimmed.match(/^NULLIF\s*\(([\s\S]+)\)$/i);
    if (nullifMatch) {
      const args = this.splitCommaRespectingParens(nullifMatch[1]);
      const v1 = this.evalExpression(row, args[0]);
      const v2 = this.evalExpression(row, args[1]);
      return v1 === v2 ? null : v1;
    }

    // ROUND(val, dec)
    const roundMatch = trimmed.match(/^ROUND\s*\(([\s\S]+)\)$/i);
    if (roundMatch) {
      const args = this.splitCommaRespectingParens(roundMatch[1]);
      const val = this.evalExpression(row, args[0]);
      const dec = args.length > 1 ? parseInt(args[1], 10) : 0;
      if (val === null || val === undefined) return null;
      return Number(val).toFixed(dec);
    }

    // Direct column lookup in row
    const colVal = this.resolveColValue(row, trimmed);
    if (colVal !== undefined) return colVal;

    // Arithmetic expressions e.g. sal + comm, e.sal - m.sal
    if (/[\+\-\*\/]/.test(trimmed)) {
      try {
        let code = trimmed;
        // replace identifiers with row values
        const tokens = trimmed.match(/[a-zA-Z_][a-zA-Z0-9_\.]*/g) || [];
        for (const t of tokens) {
          const v = this.resolveColValue(row, t);
          if (v === null || v === undefined) return null; // NULL in math yields NULL
          code = code.replace(new RegExp(`\\b${t}\\b`, "g"), String(v));
        }
        return Function(`"use strict"; return (${code});`)();
      } catch (e) {
        return null;
      }
    }

    return null;
  },

  projectSimple(rows, selectPart) {
    const isDistinct = /^\s*DISTINCT\b/i.test(selectPart);
    const cleanSelect = selectPart.replace(/^\s*DISTINCT\s+/i, "");
    const items = this.splitCommaRespectingParens(cleanSelect);

    const projected = rows.map(row => {
      const out = {};
      for (const it of items) {
        const { expr, alias } = this.parseSelectExpr(it);
        out[alias] = this.evalExpression(row, expr);
      }
      return out;
    });

    if (isDistinct) {
      return this.deduplicateRows(projected);
    }
    return projected;
  },

  parseSelectExpr(str) {
    const trimmed = str.trim();
    const aliasMatch = trimmed.match(/^([\s\S]+?)\s+AS\s+("?[a-zA-Z0-9_ ]+"?)$/i) || trimmed.match(/^([\s\S]+?)\s+("?[a-zA-Z0-9_ ]+"?)$/i);
    if (aliasMatch && !/^(WHERE|FROM|ON|GROUP|HAVING|ORDER)$/i.test(aliasMatch[2])) {
      return {
        expr: aliasMatch[1].trim(),
        alias: aliasMatch[2].replace(/["']/g, "").trim()
      };
    }
    // Default alias
    const bare = trimmed.replace(/["']/g, "").trim();
    const dotParts = bare.split(".");
    return {
      expr: trimmed,
      alias: dotParts[dotParts.length - 1]
    };
  },

  deduplicateRows(rows) {
    const seen = new Set();
    const unique = [];
    for (const r of rows) {
      const key = JSON.stringify(r);
      if (!seen.has(key)) {
        seen.add(key);
        unique.push(r);
      }
    }
    return unique;
  },

  executeGrouping(rows, groupByPart, selectPart, havingPart) {
    const groupCols = groupByPart ? groupByPart.split(",").map(s => s.trim().toLowerCase()) : [];
    const groups = new Map();

    for (const r of rows) {
      const keyParts = groupCols.map(c => String(this.resolveColValue(r, c)));
      const key = keyParts.join("||");
      if (!groups.has(key)) {
        groups.set(key, { sample: r, rows: [] });
      }
      groups.get(key).rows.push(r);
    }

    const selectItems = this.splitCommaRespectingParens(selectPart.replace(/^\s*DISTINCT\s+/i, ""));
    const outputRows = [];

    for (const [key, g] of groups.entries()) {
      // Evaluate HAVING filter if provided
      if (havingPart) {
        const havingPass = this.evalHavingCondition(g.rows, g.sample, havingPart);
        if (!havingPass) continue;
      }

      const rowOut = {};
      for (const it of selectItems) {
        const { expr, alias } = this.parseSelectExpr(it);
        rowOut[alias] = this.evalAggregateOrScalar(g.rows, g.sample, expr);
      }
      outputRows.push(rowOut);
    }

    return outputRows;
  },

  evalAggregateOrScalar(groupRows, sampleRow, expr) {
    const trimmed = expr.trim();

    // COUNT(*)
    if (/^COUNT\s*\(\s*\*\s*\)$/i.test(trimmed)) {
      return groupRows.length;
    }

    // COUNT(DISTINCT col)
    const countDistMatch = trimmed.match(/^COUNT\s*\(\s*DISTINCT\s+([a-zA-Z0-9_\.]+)\s*\)$/i);
    if (countDistMatch) {
      const col = countDistMatch[1];
      const set = new Set();
      for (const r of groupRows) {
        const v = this.resolveColValue(r, col);
        if (v !== null && v !== undefined) set.add(v);
      }
      return set.size;
    }

    // COUNT(col)
    const countMatch = trimmed.match(/^COUNT\s*\(\s*([a-zA-Z0-9_\.]+)\s*\)$/i);
    if (countMatch) {
      const col = countMatch[1];
      let cnt = 0;
      for (const r of groupRows) {
        const v = this.resolveColValue(r, col);
        if (v !== null && v !== undefined) cnt++;
      }
      return cnt;
    }

    // COUNT(CASE WHEN ... THEN 1 END)
    const countCaseMatch = trimmed.match(/^COUNT\s*\(\s*CASE\s+WHEN\s+([\s\S]+?)\s+THEN\s+1\s+END\s*\)$/i);
    if (countCaseMatch) {
      const cond = countCaseMatch[1];
      let cnt = 0;
      for (const r of groupRows) {
        if (this.evaluateCondition(r, cond)) cnt++;
      }
      return cnt;
    }

    // SUM(col)
    const sumMatch = trimmed.match(/^SUM\s*\(\s*([a-zA-Z0-9_\.\+\-\*\/]+)\s*\)$/i);
    if (sumMatch) {
      const inner = sumMatch[1];
      let total = 0;
      for (const r of groupRows) {
        const v = this.evalExpression(r, inner);
        if (v !== null && v !== undefined) total += Number(v);
      }
      return Math.round(total * 100) / 100;
    }

    // AVG(col)
    const avgMatch = trimmed.match(/^AVG\s*\(\s*([a-zA-Z0-9_\.\+\-\*\/]+)\s*\)$/i);
    if (avgMatch) {
      const inner = avgMatch[1];
      let total = 0, count = 0;
      for (const r of groupRows) {
        const v = this.evalExpression(r, inner);
        if (v !== null && v !== undefined) {
          total += Number(v);
          count++;
        }
      }
      return count > 0 ? Math.round((total / count) * 100) / 100 : null;
    }

    // MIN(col)
    const minMatch = trimmed.match(/^MIN\s*\(\s*([a-zA-Z0-9_\.]+)\s*\)$/i);
    if (minMatch) {
      const col = minMatch[1];
      let minVal = null;
      for (const r of groupRows) {
        const v = this.evalExpression(r, col);
        if (v !== null && v !== undefined) {
          if (minVal === null || v < minVal) minVal = v;
        }
      }
      return minVal;
    }

    // MAX(col)
    const maxMatch = trimmed.match(/^MAX\s*\(\s*([a-zA-Z0-9_\.]+)\s*\)$/i);
    if (maxMatch) {
      const col = maxMatch[1];
      let maxVal = null;
      for (const r of groupRows) {
        const v = this.evalExpression(r, col);
        if (v !== null && v !== undefined) {
          if (maxVal === null || v > maxVal) maxVal = v;
        }
      }
      return maxVal;
    }

    // STRING_AGG(col, delimiter)
    const strAggMatch = trimmed.match(/^STRING_AGG\s*\(\s*([a-zA-Z0-9_\.]+)\s*,\s*('[^']+')\s*\)$/i);
    if (strAggMatch) {
      const col = strAggMatch[1];
      const delim = strAggMatch[2].slice(1, -1);
      const items = groupRows.map(r => this.resolveColValue(r, col)).filter(v => v !== null && v !== undefined);
      return items.join(delim);
    }

    // Regular scalar column
    return this.evalExpression(sampleRow, trimmed);
  },

  evalHavingCondition(groupRows, sampleRow, havingPart) {
    const cond = havingPart.trim();

    // Check COUNT(*) > X
    const compMatch = cond.match(/^([\s\S]+?)\s*(=|<>|!=|<=|>=|<|>)\s*([\s\S]+)$/);
    if (compMatch) {
      const leftVal = this.evalAggregateOrScalar(groupRows, sampleRow, compMatch[1]);
      const op = compMatch[2];
      const rightVal = parseFloat(compMatch[3]);

      if (op === ">") return leftVal > rightVal;
      if (op === ">=") return leftVal >= rightVal;
      if (op === "<") return leftVal < rightVal;
      if (op === "<=") return leftVal <= rightVal;
      if (op === "=") return leftVal === rightVal;
      if (op === "<>" || op === "!=") return leftVal !== rightVal;
    }

    return true;
  },

  applySorting(rows, orderByPart) {
    const items = orderByPart.split(",").map(s => s.trim());
    return [...rows].sort((a, b) => {
      for (const item of items) {
        const parts = item.split(/\s+/);
        const colSpec = parts[0].replace(/["']/g, "");
        const dir = parts.length > 1 && parts[1].toUpperCase() === "DESC" ? -1 : 1;

        let valA = a[colSpec];
        let valB = b[colSpec];

        // Handle numerical column index (e.g. ORDER BY 2)
        if (/^\d+$/.test(colSpec)) {
          const idx = parseInt(colSpec, 10) - 1;
          const keys = Object.keys(a);
          if (idx >= 0 && idx < keys.length) {
            valA = a[keys[idx]];
            valB = b[keys[idx]];
          }
        }

        if (valA === valB) continue;
        if (valA === null || valA === undefined) return 1;
        if (valB === null || valB === undefined) return -1;

        if (valA < valB) return -1 * dir;
        if (valA > valB) return 1 * dir;
      }
      return 0;
    });
  },

  // Compare User Execution Result against Expected Result
  compareResults(userRes, expectedRes) {
    if (!userRes.success) {
      return { match: false, message: `SQL bajarishda xatolik: ${userRes.error}` };
    }
    if (!expectedRes.success) {
      return { match: false, message: "Kutilayotgan yechimni bajarishda ichki xatolik." };
    }

    // 1. Row count match
    if (userRes.rows.length !== expectedRes.rows.length) {
      return {
        match: false,
        message: `Qatorlar soni mos kelmadi: Sizda ${userRes.rows.length} ta, kutilayotgan natijada esa ${expectedRes.rows.length} ta qator bor.`
      };
    }

    // 2. Column count check
    if (userRes.columns.length !== expectedRes.columns.length) {
      return {
        match: false,
        message: `Ustunlar soni mos kelmadi: Sizda ${userRes.columns.length} ta, kutilayotgan natijada esa ${expectedRes.columns.length} ta ustun talab qilingan.`
      };
    }

    // 3. Values check (row by row or unordered)
    for (let i = 0; i < expectedRes.rows.length; i++) {
      const expRow = expectedRes.rows[i];
      const usrRow = userRes.rows[i];
      const expKeys = Object.keys(expRow);
      const usrKeys = Object.keys(usrRow);

      for (let k = 0; k < expKeys.length; k++) {
        const expVal = expRow[expKeys[k]];
        const usrVal = usrRow[usrKeys[k]];

        if (expVal === null && usrVal !== null && usrVal !== undefined) {
          return { match: false, message: `${i + 1}-qatorda qiymat NULL bo'lishi kerak edi.` };
        }
        if (expVal !== null && String(expVal).toLowerCase().trim() !== String(usrVal).toLowerCase().trim()) {
          return {
            match: false,
            message: `${i + 1}-qatorda kutilgan '${expVal}' o'rniga '${usrVal}' chiqdi.`
          };
        }
      }
    }

    return { match: true, message: "A'lo darajada! Barcha natijalar to'liq mos keldi." };
  }
};
