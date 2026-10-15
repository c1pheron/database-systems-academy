// ============================================================================
// DATABASE SYSTEMS ACADEMY — WEEK 6 DATABASE & SQL OPTIMIZER ENGINE
// Includes Emp-Dept-Salgrade, Applicant (13 rows), Chinook DB,
// Query Plans & Relational Algebra simulation, Career Ranks, and Office Events.
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

  // 13 Job Applicants (Crucial for UNION, INTERSECT, EXCEPT in Seminar 6)
  applicant: [
    { aid: 1,  aname: "BLAKE",  job: "MANAGER",  appdate: "2010-04-01", deptno: 30 },
    { aid: 2,  aname: "CLARK",  job: "MANAGER",  appdate: "2011-06-01", deptno: 10 },
    { aid: 3,  aname: "JONES",  job: "MANAGER",  appdate: "2000-04-01", deptno: 20 },
    { aid: 4,  aname: "MARTIN", job: "SALESMAN", appdate: "2012-09-20", deptno: 30 },
    { aid: 5,  aname: "ALLEN",  job: "SALESMAN", appdate: "2002-02-10", deptno: 30 },
    { aid: 6,  aname: "TURNER", job: "SALESMAN", appdate: "2003-09-01", deptno: 30 },
    { aid: 7,  aname: "JAMES",  job: "CLERK",    appdate: "2005-12-01", deptno: 30 },
    { aid: 8,  aname: "KATE",   job: "SALESMAN", appdate: "2001-02-01", deptno: 30 }, // Applicant only (not in emp)
    { aid: 9,  aname: "FORD",   job: "ANALYST",  appdate: "2006-12-01", deptno: 20 },
    { aid: 10, aname: "SMITH",  job: "CLERK",    appdate: "2007-12-12", deptno: 20 },
    { aid: 11, aname: "SCOTT",  job: "ANALYST",  appdate: "2001-12-03", deptno: 20 },
    { aid: 12, aname: "ADAMS",  job: "CLERK",    appdate: "2002-01-05", deptno: 20 },
    { aid: 13, aname: "MIKE",   job: "CLERK",    appdate: "2005-01-11", deptno: 10 }  // Applicant only (not in emp)
  ],

  // 5 Salary Grades
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

  // Chinook DB subset
  customer: [
    { customer_id: 1, first_name: "Luís", last_name: "Gonçalves", company: "Embraer", city: "São José dos Campos", country: "Brazil", support_rep_id: 7566 },
    { customer_id: 2, first_name: "Leonie", last_name: "Köhler", company: null, city: "Stuttgart", country: "Germany", support_rep_id: 7698 },
    { customer_id: 3, first_name: "François", last_name: "Tremblay", company: null, city: "Montréal", country: "Canada", support_rep_id: 7698 },
    { customer_id: 4, first_name: "Bjørn", last_name: "Hansen", company: null, city: "Oslo", country: "Norway", support_rep_id: 7782 },
    { customer_id: 5, first_name: "František", last_name: "Wichterlová", company: "ČEZ", city: "Prague", country: "Czech Republic", support_rep_id: 7566 },
    { customer_id: 6, first_name: "Helena", last_name: "Holý", company: null, city: "Prague", country: "Czech Republic", support_rep_id: 7566 },
    { customer_id: 7, first_name: "Astrid", last_name: "Gruber", company: null, city: "Vienna", country: "Austria", support_rep_id: 7698 },
    { customer_id: 8, first_name: "Daan", last_name: "Peeters", company: null, city: "Brussels", country: "Belgium", support_rep_id: 7782 }
  ],

  invoice: [
    { invoice_id: 1, customer_id: 2, invoice_date: "2024-01-01", billing_country: "Germany", total: 1.98 },
    { invoice_id: 2, customer_id: 4, invoice_date: "2024-01-02", billing_country: "Norway", total: 3.96 },
    { invoice_id: 3, customer_id: 8, invoice_date: "2024-01-03", billing_country: "Belgium", total: 5.94 },
    { invoice_id: 4, customer_id: 1, invoice_date: "2024-01-06", billing_country: "Brazil", total: 8.91 },
    { invoice_id: 5, customer_id: 3, invoice_date: "2024-01-11", billing_country: "Canada", total: 13.86 }
  ],

  // Optimizer & Execution Plan Simulation Table (Lecture 6)
  query_plans: [
    { plan_id: 1, query_desc: "Staff Manager in London (Cartesian + Filter)", strategy: "Product then Filter", estimated_io: 101050, cost_rank: 3, is_optimal: false },
    { plan_id: 2, query_desc: "Staff Manager in London (Join then Filter)", strategy: "Join then Filter", estimated_io: 3050, cost_rank: 2, is_optimal: false },
    { plan_id: 3, query_desc: "Staff Manager in London (Push Selection Down)", strategy: "Push Selections Down then Join", estimated_io: 1160, cost_rank: 1, is_optimal: true }
  ],

  optimizer_stats: [
    { param_name: "seq_page_cost", default_value: 1.0, description: "Sequential page read cost in PostgreSQL" },
    { param_name: "random_page_cost", default_value: 4.0, description: "Random page read cost (4x more expensive)" },
    { param_name: "cpu_tuple_cost", default_value: 0.01, description: "CPU cost to process one row" },
    { param_name: "cpu_operator_cost", default_value: 0.0025, description: "CPU cost to evaluate WHERE operator" },
    { param_name: "join_collapse_limit", default_value: 8, description: "Max tables reordered by optimizer" }
  ],

  // Pre-compiled Views (Lecture 6 & Seminar 6)
  v_emp_dept30: [
    { empno: 7698, ename: "BLAKE",  job: "MANAGER",  sal: 2850.00, deptno: 30 },
    { empno: 7654, ename: "MARTIN", job: "SALESMAN", sal: 1250.00, deptno: 30 },
    { empno: 7499, ename: "ALLEN",  job: "SALESMAN", sal: 1600.00, deptno: 30 },
    { empno: 7844, ename: "TURNER", job: "SALESMAN", sal: 1500.00, deptno: 30 },
    { empno: 7900, ename: "JAMES",  job: "CLERK",    sal: 950.00,  deptno: 30 },
    { empno: 7521, ename: "WARD",   job: "SALESMAN", sal: 1250.00, deptno: 30 }
  ],

  v_emp_public: [
    { empno: 7839, ename: "KING",   job: "PRESIDENT", deptno: 10 },
    { empno: 7698, ename: "BLAKE",  job: "MANAGER",   deptno: 30 },
    { empno: 7782, ename: "CLARK",  job: "MANAGER",   deptno: 10 },
    { empno: 7566, ename: "JONES",  job: "MANAGER",   deptno: 20 },
    { empno: 7654, ename: "MARTIN", job: "SALESMAN",  deptno: 30 },
    { empno: 7499, ename: "ALLEN",  job: "SALESMAN",  deptno: 30 },
    { empno: 7844, ename: "TURNER", job: "SALESMAN",  deptno: 30 },
    { empno: 7900, ename: "JAMES",  job: "CLERK",     deptno: 30 },
    { empno: 7521, ename: "WARD",   job: "SALESMAN",  deptno: 30 },
    { empno: 7902, ename: "FORD",   job: "ANALYST",   deptno: 20 },
    { empno: 7369, ename: "SMITH",  job: "CLERK",     deptno: 20 },
    { empno: 7788, ename: "SCOTT",  job: "ANALYST",   deptno: 20 },
    { empno: 7876, ename: "ADAMS",  job: "CLERK",     deptno: 20 },
    { empno: 7934, ename: "MILLER", job: "CLERK",     deptno: 10 }
  ],

  v_dept_summary: [
    { deptno: 10, dname: "ACCOUNTING", emp_count: 3, avg_sal: 2916.67 },
    { deptno: 20, dname: "RESEARCH",   emp_count: 5, avg_sal: 2175.00 },
    { deptno: 30, dname: "SALES",      emp_count: 6, avg_sal: 1566.67 },
    { deptno: 40, dname: "OPERATIONS", emp_count: 0, avg_sal: 0.00 }
  ],

  v_emp_dept_info: [
    { ename: "KING",   job: "PRESIDENT", sal: 5000.00, dname: "ACCOUNTING", loc: "NEW YORK" },
    { ename: "BLAKE",  job: "MANAGER",   sal: 2850.00, dname: "SALES",      loc: "CHICAGO" },
    { ename: "CLARK",  job: "MANAGER",   sal: 2450.00, dname: "ACCOUNTING", loc: "NEW YORK" },
    { ename: "JONES",  job: "MANAGER",   sal: 2975.00, dname: "RESEARCH",   loc: "DALLAS" },
    { ename: "MARTIN", job: "SALESMAN",  sal: 1250.00, dname: "SALES",      loc: "CHICAGO" },
    { ename: "ALLEN",  job: "SALESMAN",  sal: 1600.00, dname: "SALES",      loc: "CHICAGO" },
    { ename: "TURNER", job: "SALESMAN",  sal: 1500.00, dname: "SALES",      loc: "CHICAGO" },
    { ename: "JAMES",  job: "CLERK",     sal: 950.00,  dname: "SALES",      loc: "CHICAGO" },
    { ename: "WARD",   job: "SALESMAN",  sal: 1250.00, dname: "SALES",      loc: "CHICAGO" },
    { ename: "FORD",   job: "ANALYST",   sal: 3000.00, dname: "RESEARCH",   loc: "DALLAS" },
    { ename: "SMITH",  job: "CLERK",     sal: 800.00,  dname: "RESEARCH",   loc: "DALLAS" },
    { ename: "SCOTT",  job: "ANALYST",   sal: 3000.00, dname: "RESEARCH",   loc: "DALLAS" },
    { ename: "ADAMS",  job: "CLERK",     sal: 1100.00, dname: "RESEARCH",   loc: "DALLAS" },
    { ename: "MILLER", job: "CLERK",     sal: 1300.00, dname: "ACCOUNTING", loc: "NEW YORK" }
  ],

  v_commissioned_staff: [
    { empno: 7654, ename: "MARTIN", job: "SALESMAN", sal: 1250.00, comm: 1400.00 },
    { empno: 7499, ename: "ALLEN",  job: "SALESMAN", sal: 1600.00, comm: 300.00 },
    { empno: 7521, ename: "WARD",   job: "SALESMAN", sal: 1250.00, comm: 500.00 }
  ],

  v_all_talents: [
    { ename: "ADAMS",  job: "CLERK" },
    { ename: "ALLEN",  job: "SALESMAN" },
    { ename: "BLAKE",  job: "MANAGER" },
    { ename: "CLARK",  job: "MANAGER" },
    { ename: "FORD",   job: "ANALYST" },
    { ename: "JAMES",  job: "CLERK" },
    { ename: "JONES",  job: "MANAGER" },
    { ename: "KATE",   job: "SALESMAN" },
    { ename: "KING",   job: "PRESIDENT" },
    { ename: "MARTIN", job: "SALESMAN" },
    { ename: "MIKE",   job: "CLERK" },
    { ename: "MILLER", job: "CLERK" },
    { ename: "SCOTT",  job: "ANALYST" },
    { ename: "SMITH",  job: "CLERK" },
    { ename: "TURNER", job: "SALESMAN" },
    { ename: "WARD",   job: "SALESMAN" }
  ],

  // 10 Corporate Floors
  sectors: [
    {
      id: 1,
      name: "FLOOR 1: SCALAR SUBQUERIES (WHERE)",
      subtitle: "PostgreSQL cost model, EXPLAIN, Nested Loop vs Hash Join (136–150)",
      range: [1, 15]
    },
    {
      id: 2,
      name: "FLOOR 2: MULTI-ROW SUBQUERIES (IN & NOT IN)",
      subtitle: "IN ro'yxatlari, hisal qiymatlari va NOT IN NULL tuzog'i (16–30)",
      range: [16, 30]
    },
    {
      id: 3,
      name: "FLOOR 3: QUANTITATIVE OPERATORS (ANY & ALL)",
      subtitle: "> ANY (kamida bittasidan katta) va > ALL (barchasidan katta) (31–45)",
      range: [31, 45]
    },
    {
      id: 4,
      name: "FLOOR 4: CORRELATED SUBQUERIES (EXISTS & NOT EXISTS)",
      subtitle: "Tashqi jadvalga bog'langan so'rovlar, EXISTS va bo'sh bo'limlar (46–60)",
      range: [46, 60]
    },
    {
      id: 5,
      name: "FLOOR 5: SUBQUERIES IN SELECT & FROM",
      subtitle: "SELECT dagi skalyar ustunlar va FROM dagi hosila jadvallar (Derived Tables) (61–75)",
      range: [61, 75]
    },
    {
      id: 6,
      name: "FLOOR 6: SET THEORY: UNION & UNION ALL",
      subtitle: "emp va applicant jadvallarini birlashtirish, dublikatlar nazorati (76–90)",
      range: [76, 90]
    },
    {
      id: 7,
      name: "FLOOR 7: INTERSECTION & DIFFERENCE: INTERSECT & EXCEPT",
      subtitle: "Qabul qilingan nomzodlar, qabul qilinmaganlar va unikal to'plamlar (91–105)",
      range: [91, 105]
    },
    {
      id: 8,
      name: "FLOOR 8: RELATIONAL VIEWS (CREATE VIEW)",
      subtitle: "CREATE VIEW, yangilanuvchi ko'rinishlar va ko'p qatlamli hisobotlar (106–120)",
      range: [106, 120]
    },
    {
      id: 9,
      name: "FLOOR 9: HEURISTIC QUERY OPTIMIZATION & RELATIONAL TREES",
      subtitle: "Relational Algebra query tree, Selektsiya (σ) va Proyeksiyani (π) tushirish (121–135)",
      range: [121, 135]
    },
    {
      id: 10,
      name: "FLOOR 10: COST-BASED OPTIMIZATION & EXPLAIN PLANS",
      subtitle: "PostgreSQL Cost Model, EXPLAIN, Nested Loop vs Hash Join, Selektsiya s = r/d (136–150)",
      range: [136, 150]
    }
  ],

  // 10 Career Ranks
  careerRanks: [
    { minSolved: 0,   title: "Stajyor Subquery Muhandisi",      salary: "$1,800/mo", badge: "🎓" },
    { minSolved: 15,  title: "Junior SQL Optimizer",            salary: "$2,900/mo", badge: "📊" },
    { minSolved: 30,  title: "To'plamlar Nazariyasi Ustasi",    salary: "$4,500/mo", badge: "⚡" },
    { minSolved: 45,  title: "Korrelyatsion Mantiq Me'mori",    salary: "$6,200/mo", badge: "🔍" },
    { minSolved: 60,  title: "Derived Tables & View Specialist", salary: "$8,500/mo", badge: "🏢" },
    { minSolved: 75,  title: "Set Operations & HR Analyst",     salary: "$11,000/mo", badge: "🪞" },
    { minSolved: 90,  title: "Hevristik Optimallashtiruvchi",   salary: "$14,500/mo", badge: "📈" },
    { minSolved: 105, title: "Query Tree & Algebra Architect",  salary: "$18,000/mo", badge: "⚖️" },
    { minSolved: 120, title: "Cost-Based Engine Lead (EXPLAIN)", salary: "$22,000/mo", badge: "💿" },
    { minSolved: 135, title: "Bosh Vitse-Prezident (CDO / Partner)", salary: "$27,000/mo", badge: "👑" }
  ],

  // 10 Interactive Office Events
  officeEvents: [
    {
      id: "ev1",
      triggerAfterQuestion: 5,
      speaker: "CLARK",
      role: "10-Bo'lim Menejeri (Nyu-York)",
      avatar: "👔",
      title: "📞 Nega Skalyar Subquery Bitta Qiymat Talab Qiladi?",
      narrative: "Clark monitoring panelini ko'rsatdi: 'Architect, yangi dasturchi `WHERE deptno = (SELECT deptno FROM emp WHERE job = 'MANAGER')` deb yozib, xatolik oldi! Subquery 3 ta qator qaytargan ekan. Nega oddiy tenglik `=` bittadan ko'p qator bilan ishlamaydi?'",
      choices: [
        {
          text: "Chunki `=` operatori faqat YAGONA skalyar qiymatni taqqoslay oladi! Ro'yxat qaytganda `IN` yoki `= ANY` ishlatilishi shart.",
          correct: true,
          bonus: 600,
          outcome: "Clark mamnun: 'Aynan shunday! +$600 bonus!'"
        },
        {
          text: "Chunki PostgreSQL da MANAGER lavozimi katta harflarda yozilmagan.",
          correct: false,
          bonus: 0,
          outcome: "Clark tuzatdi: 'Xatolik sababi — bir nechta qator qaytganidadir!'"
        }
      ]
    },
    {
      id: "ev2",
      triggerAfterQuestion: 20,
      speaker: "JONES",
      role: "20-Bo'lim Menejeri (Dallas)",
      avatar: "🔬",
      title: "🚨 NOT IN va NULL Qopqoni!",
      narrative: "JONES xonaga kirib keldi: 'Biz hech kimga rahbar bo'lmagan xodimlarni topish uchun `WHERE empno NOT IN (SELECT supervisor FROM emp)` deb yozdik, ammo natija 0 ta qator chiqyapti! Holbuki oddiy xodimlar ko'p. Sababi nimada?'",
      choices: [
        {
          text: "Chunki `supervisor` ustunida KING ning qiymati `NULL`! Agar ro'yxatda bitta ham NULL bo'lsa, `x NOT IN (..., NULL)` har doim `UNKNOWN` qaytaradi va natija bo'sh bo'ladi!",
          correct: true,
          bonus: 800,
          outcome: "JONES qoyil qoldi: 'Aqlbovar qilmas chuqur bilim! Bu SQL ning eng mashhur tuzog'i! +$800!'"
        },
        {
          text: "Chunki NOT IN faqat matnli ustunlar uchun ishlaydi.",
          correct: false,
          bonus: 0,
          outcome: "JONES eslatdi: 'Gap NULL qiymatning mantiqiy solishtiruvni UNKNOWN ga aylantirishidadir!'"
        }
      ]
    },
    {
      id: "ev3",
      triggerAfterQuestion: 35,
      speaker: "BLAKE",
      role: "30-Bo'lim Menejeri (Chikago)",
      avatar: "💼",
      title: "⚖️ ANY vs ALL Farqi",
      narrative: "BLAKE kofe ichayotib so'radi: 'Sotuvchilardan ko'p maosh oluvchilarni topishda `> ANY` bilan `> ALL` ning qanday farqi bor?'",
      choices: [
        {
          text: "`> ANY` kamida bitta sotuvchidan ko'p (ya'ni eng kam sotuvchi maoshidan katta), `> ALL` esa barcha sotuvchilardan ko'p (ya'ni eng yuqori sotuvchi maoshidan katta) deganidir!",
          correct: true,
          bonus: 850,
          outcome: "BLAKE tasdiqladi: 'To'ppa-to'g'ri! Mantiqiy chegaralar aniq! +$850!'"
        },
        {
          text: "Ikkalasi ham bitta narsa, shunchaki sinonimlar.",
          correct: false,
          bonus: 0,
          outcome: "BLAKE bosh chayqadi: 'ANY — kamida bittasi, ALL — istisnosiz barchasi!'"
        }
      ]
    },
    {
      id: "ev4",
      triggerAfterQuestion: 50,
      speaker: "HR Mutaxassis Diana",
      role: "Kadrlar Boshlig'i",
      avatar: "👩‍💼",
      title: "👥 Nomzodlar va Xodimlar: UNION vs UNION ALL",
      narrative: "Diana hujjatlarni ko'rsatdi: 'Bizda 14 ta xodim va 13 ta nomzod (applicant) bor. Nega `UNION` qilganda 16 ta qator chiqadi, ammo `UNION ALL` qilganda 27 ta qator chiqadi?'",
      choices: [
        {
          text: "Chunki `UNION` takrorlangan ismlarni (dublikatlarni) avtomatik o'chiradi, `UNION ALL` esa barcha 14 + 13 = 27 qatorni saqlab qoladi!",
          correct: true,
          bonus: 900,
          outcome: "Diana quvondi: 'Ofarin! Qabul qilingan nomzodlar dublikat sifatida o'chirilgan! +$900!'"
        },
        {
          text: "Chunki UNION ALL yangi xodimlar qo'shadi.",
          correct: false,
          bonus: 0,
          outcome: "Diana eslatdi: 'UNION dublikatlarni tozalaydi, UNION ALL esa tozalashsiz birlashtiradi!'"
        }
      ]
    },
    {
      id: "ev5",
      triggerAfterQuestion: 65,
      speaker: "FORD & SCOTT",
      role: "Katta Tahlilchilar (Dallas)",
      avatar: "📊",
      title: "⚡ EXISTS Nega IN dan Tezroq Ishlaydi?",
      narrative: "FORD noutbukida EXPLAIN grafigini ko'rsatdi: 'Katta jadvallarda `WHERE EXISTS` nega ko'pincha `WHERE id IN (SELECT...)` dan ancha tez ishlaydi?'",
      choices: [
        {
          text: "Chunki `EXISTS` birinchi mos keluvchi qatorni topishi bilanoq to'xtaydi (Boolean short-circuit), butun ichki jadvalni xotiraga yuklab o'tirmaydi!",
          correct: true,
          bonus: 1000,
          outcome: "SCOTT qarsak chaldi: 'Mukammal tushuntirish! Optimizer aynan shunday fikrlaydi! +$1000!'"
        },
        {
          text: "Chunki EXISTS faqat raqamlar bilan ishlaydi.",
          correct: false,
          bonus: 0,
          outcome: "FORD tuzatdi: 'Gap Boolean qisqa tutashuvi (short-circuit) tufayli tez to'xtashidadir!'"
        }
      ]
    },
    {
      id: "ev6",
      triggerAfterQuestion: 80,
      speaker: "Tashqi Auditor Smit",
      role: "Xalqaro Hisobot Taftishchisi",
      avatar: "🔍",
      title: "📑 INTERSECT va EXCEPT Taftishi",
      narrative: "Auditor qat'iy ohangda so'radi: 'Nomzodlar jadvalidagi kimlar amalda xodim bo'lib ishga qabul qilinganini va kimlar qabul qilinmaganini qaysi to'plam operatorlari bilan ajratasiz?'",
      choices: [
        {
          text: "Qabul qilinganlar: `applicant INTERSECT emp`. Qabul qilinmaganlar: `applicant EXCEPT emp`!",
          correct: true,
          bonus: 1100,
          outcome: "Auditor tasdiqladi: 'Matematik to'plamlar nazariyasining mukammal tatbiqi! +$1100!'"
        },
        {
          text: "Faqat CROSS JOIN orqali topish mumkin.",
          correct: false,
          bonus: 0,
          outcome: "Auditor tushuntirdi: 'Kesishma uchun INTERSECT, to'plam ayirmasi uchun EXCEPT ishlatiladi!'"
        }
      ]
    },
    {
      id: "ev7",
      triggerAfterQuestion: 95,
      speaker: "KING",
      role: "Prezident & Bosh Direktor",
      avatar: "👑",
      title: "🛡 Ko'rinishlar (Views) Xavfsizligi",
      narrative: "Prezident KING so'radi: 'Kompaniyada xodimlarning maoshini sir tutish uchun boshqa bo'limlarga jadvalning o'zini emas, maoshsiz VIEW yaratib berish to'g'rimi?'",
      choices: [
        {
          text: "Ha, mutlaqo to'g'ri! VIEW ma'lumotlar bazasida xavfsizlik qatlami bo'lib, nozik ustunlarni (masalan `sal`) yashirish imkonini beradi.",
          correct: true,
          bonus: 1200,
          outcome: "KING olqishladi: 'Kompaniya xavfsizligi sizning qo'lingizda! +$1200!'"
        },
        {
          text: "Yo'q, VIEW jadvaldan sekin ishlaydi va foydasiz.",
          correct: false,
          bonus: 0,
          outcome: "KING eslatdi: 'VIEW xavfsizlik va mantiqiy soddalashtirishning asosiy vositasidir!'"
        }
      ]
    },
    {
      id: "ev8",
      triggerAfterQuestion: 110,
      speaker: "Server Muhandisi Karim",
      role: "Bosh Tizim Arxitektori",
      avatar: "💾",
      title: "🌳 Hevristika: Selektsiyani (σ) Pastga Tushirish",
      narrative: "Karim server monitorida Query Tree ni ko'rsatdi: 'Nega optimallashtiruvchi har doim `WHERE` filtrlashini (Selektsiya σ) Relational Algebra daraxtida eng pastki barglarga tushirishga harakat qiladi?'",
      choices: [
        {
          text: "Chunki qatorlar qancha erta filtrlab tashlansa, JOIN va boshqa oraliq amallarga shuncha kam ma'lumot uzatiladi va disk/xotira yuklamasi keskin kamayadi (87% gacha tejamkorlik)!",
          correct: true,
          bonus: 1500,
          outcome: "Karim qoyil qoldi: 'Aynan shunday! Hevristikaning 1-oltin qoidasi! +$1500!'"
        },
        {
          text: "Chunki pastdagi amallar chiroyli ko'rinadi.",
          correct: false,
          bonus: 0,
          outcome: "Karim tushuntirdi: 'Oraliq natijalar hajmini (intermediate rows) qisqartirish uchun!' "
        }
      ]
    },
    {
      id: "ev9",
      triggerAfterQuestion: 125,
      speaker: "Professor Atlas",
      role: "Academy Bosh Ma'lumotlar Arxitektori",
      avatar: "🏛",
      title: "⚙️ Nested Loop vs Hash Join: Qachon Qaysi Biri?",
      narrative: "Professor Atlas so'radi: 'PostgreSQL so'rov rejasida (EXPLAIN): qachon Nested Loop Join, qachon esa Hash Join tanlanadi?'",
      choices: [
        {
          text: "Nested Loop: tashqi jadval juda kichik bo'lsa yoki ichki jadvalda indeks bo'lsa; Hash Join: ikkala jadval ham katta, tartiblanmagan va tenglik (`=`) bo'yicha bog'langanda!",
          correct: true,
          bonus: 1800,
          outcome: "Professor Atlas tabassum qildi: 'A'lo darajada! Tizim muhandisining chuqur bilimi! +$1800!'"
        },
        {
          text: "Har doim faqat Nested Loop ishlatiladi.",
          correct: false,
          bonus: 0,
          outcome: "Atlas eslatdi: 'Katta hajmlarda Hash Join Nested Loop dan yuzlab baravar tez ishlaydi!'"
        }
      ]
    },
    {
      id: "ev10",
      triggerAfterQuestion: 140,
      speaker: "Professor Atlas",
      role: "Academy Bosh Ma'lumotlar Arxitektori",
      avatar: "🏛",
      title: "🎓 Bosh Data Me'mori Sertifikatsiyasi",
      narrative: "Professor Atlas qog'ozlarni topshirdi: 'So'rov optimallashtirishda Selektsiya selektivligi s = r / d formulasi nimani anglatadi?'",
      choices: [
        {
          text: "r — jami qatorlar soni, d — ustundagi noyob (distinct) qiymatlar soni, s — tenglik shartini qanoatlantiruvchi o'rtacha qatorlar soni!",
          correct: true,
          bonus: 2500,
          outcome: "Professor Atlas va butun kengash olqishladi: 'Siz Bosh Ma'lumotlar Arxitektori unvoniga sazovor bo'ldingiz! +$2500!' "
        },
        {
          text: "Bu diskdagi bo'sh baytlar miqdori.",
          correct: false,
          bonus: 0,
          outcome: "Atlas tuzatdi: 'Bu kardinallik va qatorlar selektivligi formulasidir!'"
        }
      ]
    }
  ]
};

// ============================================================================
// IN-MEMORY SQL EXECUTION & SMART OPTIMIZER GRADER (WEEK 6)
// Supports Subqueries in WHERE, IN, NOT IN, ANY, ALL, EXISTS, NOT EXISTS,
// Subqueries in SELECT and FROM (Derived Tables), UNION, INTERSECT, EXCEPT.
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

  detectDiagnostics(rawSql, question) {
    if (!rawSql || !rawSql.trim()) {
      return "Ishchi terminal bo'sh! SQL so'rovingizni yozib, 'Hisobotni Tekshirish' (Ctrl+Enter) tugmasini bosing.";
    }

    const trimmed = rawSql.trim();

    // Quotes balance
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

    // Parentheses balance
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

    // Must start with SELECT, WITH, CREATE VIEW, or EXPLAIN
    if (!/^\s*(SELECT|WITH|CREATE\s+(?:OR\s+REPLACE\s+)?VIEW|EXPLAIN)\b/i.test(trimmed)) {
      return "Sintaksis xatosi: SQL so'rov 'SELECT', 'WITH', 'CREATE VIEW' yoki 'EXPLAIN' bilan boshlanishi lozim.";
    }

    return null;
  },

  generateExplainPlan(sql, isAnalyze) {
    const lines = [];
    const upper = sql.toUpperCase();
    const hasJoin = upper.includes("JOIN");
    const hasSubquery = upper.includes("EXISTS") || upper.includes("IN (") || upper.includes("ANY (") || upper.includes("ALL (");
    const hasAgg = upper.includes("GROUP BY") || upper.includes("COUNT(") || upper.includes("AVG(") || upper.includes("SUM(");
    const hasWhere = upper.includes("WHERE");

    if (hasJoin) {
      lines.push("Hash Join  (cost=1.18..2.55 rows=14 width=68)" + (isAnalyze ? " (actual time=0.031..0.045 rows=14 loops=1)" : ""));
      lines.push("  Hash Cond: (e.deptno = d.deptno)");
      lines.push("  ->  Seq Scan on emp e  (cost=0.00..1.14 rows=14 width=36)" + (isAnalyze ? " (actual time=0.005..0.008 rows=14 loops=1)" : ""));
      lines.push("  ->  Hash  (cost=1.04..1.04 rows=4 width=32)" + (isAnalyze ? " (actual time=0.015..0.015 rows=4 loops=1)" : ""));
      lines.push("        ->  Seq Scan on dept d  (cost=0.00..1.04 rows=4 width=32)" + (isAnalyze ? " (actual time=0.004..0.006 rows=4 loops=1)" : ""));
    } else if (hasSubquery) {
      lines.push("Nested Loop Semi Join  (cost=0.00..3.45 rows=6 width=36)" + (isAnalyze ? " (actual time=0.025..0.039 rows=6 loops=1)" : ""));
      lines.push("  Join Filter: (e.deptno = sub.deptno)");
      lines.push("  ->  Seq Scan on emp e  (cost=0.00..1.14 rows=14 width=36)" + (isAnalyze ? " (actual time=0.004..0.007 rows=14 loops=1)" : ""));
      lines.push("  ->  Materialize  (cost=0.00..1.15 rows=3 width=4)" + (isAnalyze ? " (actual time=0.002..0.003 rows=3 loops=14)" : ""));
      lines.push("        ->  Seq Scan on dept sub  (cost=0.00..1.04 rows=3 width=4)" + (isAnalyze ? " (actual time=0.003..0.005 rows=3 loops=1)" : ""));
    } else if (hasAgg) {
      lines.push("HashAggregate  (cost=1.25..1.35 rows=4 width=40)" + (isAnalyze ? " (actual time=0.022..0.028 rows=3 loops=1)" : ""));
      lines.push("  Group Key: deptno");
      lines.push("  ->  Seq Scan on emp  (cost=0.00..1.14 rows=14 width=36)" + (isAnalyze ? " (actual time=0.005..0.009 rows=14 loops=1)" : ""));
    } else if (hasWhere) {
      lines.push("Seq Scan on emp  (cost=0.00..1.18 rows=5 width=36)" + (isAnalyze ? " (actual time=0.011..0.019 rows=5 loops=1)" : ""));
      lines.push("  Filter: (sal >= 2000)");
      lines.push("  Rows Removed by Filter: 9");
    } else {
      lines.push("Seq Scan on emp  (cost=0.00..1.14 rows=14 width=36)" + (isAnalyze ? " (actual time=0.006..0.012 rows=14 loops=1)" : ""));
    }

    if (isAnalyze) {
      lines.push("Planning Time: 0.095 ms");
      lines.push("Execution Time: 0.058 ms");
    }

    return {
      success: true,
      columns: ["QUERY PLAN"],
      rows: lines.map(line => ({ "QUERY PLAN": line }))
    };
  },

  execute(sql) {
    const raw = this.normalizeSQL(sql);
    if (!raw) return { success: false, error: "Bo'sh so'rov", columns: [], rows: [] };

    try {
      // 0. Check CREATE VIEW / CREATE OR REPLACE VIEW
      const createViewMatch = raw.match(/^\s*CREATE\s+(?:OR\s+REPLACE\s+)?VIEW\s+([a-zA-Z0-9_]+)(?:\s*\([^\)]+\))?\s+AS\s+([\s\S]+)$/i);
      if (createViewMatch) {
        const viewName = createViewMatch[1].trim().toLowerCase();
        const viewSql = createViewMatch[2].trim();
        const res = this.runSingleQuery(viewSql);
        if (!res.success) return res;
        if (window.COMPANY_DB) {
          window.COMPANY_DB[viewName] = res.rows;
        }
        return {
          success: true,
          columns: ["STATUS", "VIEW_NAME", "ROWS_COUNT"],
          rows: [{ STATUS: "CREATE VIEW muvaffaqiyatli bajarildi", VIEW_NAME: viewName.toUpperCase(), ROWS_COUNT: res.rows.length }]
        };
      }

      // 0b. Check EXPLAIN
      const explainMatch = raw.match(/^\s*EXPLAIN(?:\s+ANALYZE)?\s+([\s\S]+)$/i);
      if (explainMatch) {
        const innerSql = explainMatch[1].trim();
        return this.generateExplainPlan(innerSql, /EXPLAIN\s+ANALYZE/i.test(raw));
      }

      // 1. Check Set Operations: UNION, UNION ALL, INTERSECT, EXCEPT
      const setOpMatch = this.detectSetOperation(raw);
      if (setOpMatch) {
        return this.executeSetOperation(setOpMatch.leftSql, setOpMatch.op, setOpMatch.rightSql);
      }

      // 2. Standard Query Execution
      return this.runSingleQuery(raw);
    } catch (e) {
      return { success: false, error: e.message || String(e), columns: [], rows: [] };
    }
  },

  detectSetOperation(sql) {
    // Look for top-level UNION ALL, UNION, INTERSECT, EXCEPT outside parentheses
    const keywords = ["UNION ALL", "UNION", "INTERSECT", "EXCEPT"];
    for (const kw of keywords) {
      const regex = new RegExp(`\\b${kw}\\b`, "i");
      let depth = 0;
      for (let i = 0; i < sql.length; i++) {
        if (sql[i] === "(") depth++;
        else if (sql[i] === ")") depth--;
        else if (depth === 0) {
          const sub = sql.slice(i);
          const match = sub.match(new RegExp(`^\\s*\\b${kw}\\b\\s*`, "i"));
          if (match) {
            return {
              leftSql: sql.slice(0, i).trim(),
              op: kw.toUpperCase(),
              rightSql: sql.slice(i + match[0].length).trim()
            };
          }
        }
      }
    }
    return null;
  },

  executeSetOperation(leftSql, op, rightSql) {
    const leftRes = this.runSingleQuery(leftSql);
    const rightRes = this.runSingleQuery(rightSql);

    if (!leftRes.success) return leftRes;
    if (!rightRes.success) return rightRes;

    const cols = leftRes.columns;
    let combined = [];

    // Helper to serialize row using left columns order
    const rowKey = (r, srcCols) => {
      const keys = Object.keys(r);
      return keys.map(k => String(r[k])).join("||");
    };

    if (op === "UNION ALL") {
      combined = [...leftRes.rows, ...rightRes.rows];
    } else if (op === "UNION") {
      const seen = new Set();
      for (const r of [...leftRes.rows, ...rightRes.rows]) {
        const k = rowKey(r);
        if (!seen.has(k)) {
          seen.add(k);
          combined.push(r);
        }
      }
    } else if (op === "INTERSECT") {
      const rightKeys = new Set(rightRes.rows.map(r => rowKey(r)));
      const seen = new Set();
      for (const r of leftRes.rows) {
        const k = rowKey(r);
        if (rightKeys.has(k) && !seen.has(k)) {
          seen.add(k);
          combined.push(r);
        }
      }
    } else if (op === "EXCEPT") {
      const rightKeys = new Set(rightRes.rows.map(r => rowKey(r)));
      const seen = new Set();
      for (const r of leftRes.rows) {
        const k = rowKey(r);
        if (!rightKeys.has(k) && !seen.has(k)) {
          seen.add(k);
          combined.push(r);
        }
      }
    }

    return {
      success: true,
      columns: cols,
      rows: combined
    };
  },

  runSingleQuery(sql) {
    // Check for calculation or scalar questions (e.g. SELECT 8192 / 126 AS bfr; or SELECT 'BTREE' AS type)
    if (!/\bFROM\b/i.test(sql) && /^\s*SELECT\s+/i.test(sql)) {
      const exprMatch = sql.match(/^\s*SELECT\s+([\s\S]+)$/i);
      if (exprMatch) {
        const item = exprMatch[1].trim();
        const aliasParts = item.split(/\s+AS\s+/i);
        const expr = aliasParts[0].trim();
        const alias = aliasParts.length > 1 ? aliasParts[1].replace(/["']/g, "").trim() : "result";

        if ((expr.startsWith("'") && expr.endsWith("'")) || (expr.startsWith('"') && expr.endsWith('"'))) {
          return { success: true, columns: [alias], rows: [{ [alias]: expr.slice(1, -1) }] };
        }

        try {
          const cleanMath = expr.replace(/[^\d\.\+\-\*\/\(\)\s]/g, "");
          const val = Function(`"use strict"; return (${cleanMath});`)();
          return {
            success: true,
            columns: [alias],
            rows: [{ [alias]: typeof val === "number" ? Math.round(val * 100) / 100 : val }]
          };
        } catch (e) {
          return { success: true, columns: [alias], rows: [{ [alias]: expr }] };
        }
      }
    }

    // Parse clauses
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

    // Build FROM & JOIN tables
    const joinedRows = this.buildJoinedTable(remaining);

    // Filter with WHERE (including correlated & subquery conditions)
    let filteredRows = joinedRows;
    if (wherePart) {
      filteredRows = joinedRows.filter(row => this.evaluateCondition(row, wherePart));
    }

    // Apply GROUP BY or simple projection
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

    if (offset > 0) resultRows = resultRows.slice(offset);
    if (limit !== null) resultRows = resultRows.slice(0, limit);

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
    const trimmed = fromStr.trim();

    // Check for Derived Table in FROM e.g. FROM (SELECT deptno, AVG(sal) AS avg_sal FROM emp GROUP BY deptno) AS d
    const derivedMatch = trimmed.match(/^\s*\(([\s\S]+)\)\s+(?:AS\s+)?([a-zA-Z0-9_]+)\s*$/i);
    if (derivedMatch) {
      const innerSql = derivedMatch[1].trim();
      const alias = derivedMatch[2].trim();
      const innerRes = this.runSingleQuery(innerSql);
      return innerRes.rows.map(r => this.mergeRowWithPrefix({}, r, alias));
    }

    if (trimmed.includes(",") && !/\bJOIN\b/i.test(trimmed)) {
      const tables = trimmed.split(",").map(s => s.trim());
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

    const joinRegex = /\b(LEFT\s+JOIN|RIGHT\s+JOIN|FULL\s+JOIN|FULL\s+OUTER\s+JOIN|CROSS\s+JOIN|INNER\s+JOIN|JOIN)\b/gi;
    const firstTableEnd = trimmed.search(joinRegex);
    if (firstTableEnd === -1) {
      const { name, alias } = this.parseTableSpec(trimmed);
      const data = this.getTableData(name);
      return data.map(r => this.mergeRowWithPrefix({}, r, alias || name));
    }

    const baseTableSpec = trimmed.slice(0, firstTableEnd).trim();
    const { name: baseName, alias: baseAlias } = this.parseTableSpec(baseTableSpec);
    let currentRows = this.getTableData(baseName).map(r => this.mergeRowWithPrefix({}, r, baseAlias || baseName));

    const joinClauseStr = trimmed.slice(firstTableEnd);
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
    if (lName === "employee") return window.COMPANY_DB.emp;
    if (lName === "department") return window.COMPANY_DB.dept;
    if (lName === "applicants") return window.COMPANY_DB.applicant;
    if (lName === "grades") return window.COMPANY_DB.salgrade;
    return [];
  },

  mergeRowWithPrefix(baseRow, newRow, prefix) {
    const res = { ...baseRow };
    const pfx = prefix ? prefix.toLowerCase() + "." : "";
    for (const k of Object.keys(newRow)) {
      res[pfx + k.toLowerCase()] = newRow[k];
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
        const nullRight = {};
        if (rightData.length > 0) {
          for (const k of Object.keys(rightData[0])) nullRight[k] = null;
        }
        result.push(this.mergeRowWithPrefix(lRow, nullRight, rightPrefix));
      }
    }

    if (joinType === "RIGHT" || joinType === "FULL") {
      for (let rIdx = 0; rIdx < rightData.length; rIdx++) {
        if (!rightMatched.has(rIdx)) {
          const rRow = rightData[rIdx];
          const nullLeft = {};
          if (leftRows.length > 0) {
            for (const k of Object.keys(leftRows[0])) nullLeft[k] = null;
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

    if (row[clean] !== undefined) return row[clean];

    if (clean.includes(".")) {
      const bare = clean.split(".")[1];
      if (row[bare] !== undefined) return row[bare];
    } else {
      for (const k of Object.keys(row)) {
        if (k.endsWith("." + clean)) return row[k];
      }
    }

    return undefined;
  },

  evaluateCondition(row, cond) {
    if (!cond || !cond.trim()) return true;
    let c = cond.trim();

    // Check EXISTS / NOT EXISTS
    const notExistsMatch = c.match(/^NOT\s+EXISTS\s*\(([\s\S]+)\)$/i);
    if (notExistsMatch) {
      return !this.evalExists(row, notExistsMatch[1]);
    }

    const existsMatch = c.match(/^EXISTS\s*\(([\s\S]+)\)$/i);
    if (existsMatch) {
      return this.evalExists(row, existsMatch[1]);
    }

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

    // Split top-level OR / AND
    const orParts = this.splitTopLevel(c, "OR");
    if (orParts.length > 1) {
      return orParts.some(p => this.evaluateCondition(row, p));
    }

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

    // NOT IN (SELECT ... or list)
    const notInMatch = c.match(/^([\s\S]+?)\s+NOT\s+IN\s*\(([\s\S]+)\)$/i);
    if (notInMatch) {
      const leftVal = this.evalExpression(row, notInMatch[1]);
      const inner = notInMatch[2].trim();
      let list = [];
      if (/^SELECT\b/i.test(inner)) {
        list = this.evalSubqueryList(row, inner);
      } else {
        list = inner.split(",").map(s => this.evalExpression(row, s.trim()));
      }
      // SQL NOT IN with NULL: if list contains null, returns null/false
      if (list.includes(null)) return false;
      return !list.includes(leftVal);
    }

    // IN (SELECT ... or list)
    const inMatch = c.match(/^([\s\S]+?)\s+IN\s*\(([\s\S]+)\)$/i);
    if (inMatch) {
      const leftVal = this.evalExpression(row, inMatch[1]);
      const inner = inMatch[2].trim();
      let list = [];
      if (/^SELECT\b/i.test(inner)) {
        list = this.evalSubqueryList(row, inner);
      } else {
        list = inner.split(",").map(s => this.evalExpression(row, s.trim()));
      }
      return list.includes(leftVal);
    }

    // ANY / SOME subquery: e.g. sal > ANY (SELECT ...)
    const anyMatch = c.match(/^([\s\S]+?)\s*(=|<>|!=|<=|>=|<|>)\s*(?:ANY|SOME)\s*\(([\s\S]+)\)$/i);
    if (anyMatch) {
      const leftVal = Number(this.evalExpression(row, anyMatch[1]));
      const op = anyMatch[2];
      const list = this.evalSubqueryList(row, anyMatch[3]).map(Number);
      if (op === ">") return list.some(v => leftVal > v);
      if (op === ">=") return list.some(v => leftVal >= v);
      if (op === "<") return list.some(v => leftVal < v);
      if (op === "<=") return list.some(v => leftVal <= v);
      if (op === "=") return list.some(v => leftVal === v);
      if (op === "<>" || op === "!=") return list.some(v => leftVal !== v);
    }

    // ALL subquery: e.g. sal > ALL (SELECT ...)
    const allMatch = c.match(/^([\s\S]+?)\s*(=|<>|!=|<=|>=|<|>)\s*ALL\s*\(([\s\S]+)\)$/i);
    if (allMatch) {
      const leftVal = Number(this.evalExpression(row, allMatch[1]));
      const op = allMatch[2];
      const list = this.evalSubqueryList(row, allMatch[3]).map(Number);
      if (list.length === 0) return true;
      if (op === ">") return list.every(v => leftVal > v);
      if (op === ">=") return list.every(v => leftVal >= v);
      if (op === "<") return list.every(v => leftVal < v);
      if (op === "<=") return list.every(v => leftVal <= v);
      if (op === "=") return list.every(v => leftVal === v);
      if (op === "<>" || op === "!=") return list.every(v => leftVal !== v);
    }

    // Scalar Subquery comparison: e.g. sal = (SELECT MIN(sal) FROM emp)
    const scalarSubMatch = c.match(/^([\s\S]+?)\s*(=|<>|!=|<=|>=|<|>)\s*\((SELECT\b[\s\S]+)\)$/i);
    if (scalarSubMatch) {
      const leftVal = this.evalExpression(row, scalarSubMatch[1]);
      const op = scalarSubMatch[2];
      const rightVal = this.evalScalarSubquery(row, scalarSubMatch[3]);

      if (leftVal === null || rightVal === null) return false;
      if (op === "=") return String(leftVal).toLowerCase() === String(rightVal).toLowerCase();
      if (op === "<>" || op === "!=") return String(leftVal).toLowerCase() !== String(rightVal).toLowerCase();
      if (op === "<=") return Number(leftVal) <= Number(rightVal);
      if (op === ">=") return Number(leftVal) >= Number(rightVal);
      if (op === "<") return Number(leftVal) < Number(rightVal);
      if (op === ">") return Number(leftVal) > Number(rightVal);
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

  evalExists(outerRow, subSql) {
    const boundSql = this.bindCorrelatedParams(subSql, outerRow);
    const res = this.runSingleQuery(boundSql);
    return res.success && res.rows.length > 0;
  },

  evalSubqueryList(outerRow, subSql) {
    const boundSql = this.bindCorrelatedParams(subSql, outerRow);
    const res = this.runSingleQuery(boundSql);
    if (!res.success || res.rows.length === 0) return [];
    const firstCol = res.columns[0];
    return res.rows.map(r => r[firstCol]);
  },

  evalScalarSubquery(outerRow, subSql) {
    const boundSql = this.bindCorrelatedParams(subSql, outerRow);
    const res = this.runSingleQuery(boundSql);
    if (!res.success || res.rows.length === 0) return null;
    const firstCol = res.columns[0];
    return res.rows[0][firstCol];
  },

  bindCorrelatedParams(sql, outerRow) {
    let s = sql;
    // Replace only qualified outer row references (containing a dot, e.g. e.deptno, emp.sal, outer.job)
    for (const k of Object.keys(outerRow)) {
      if (!k.includes(".")) continue;
      const val = outerRow[k];
      const lit = typeof val === "string" ? `'${val.replace(/'/g, "''")}'` : val === null ? "NULL" : String(val);
      const escapedKey = k.replace(/\./g, "\\.");
      s = s.replace(new RegExp(`\\b${escapedKey}\\b`, "gi"), lit);
    }
    return s;
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

    // Scalar Subquery inside expression: e.g. (SELECT AVG(sal) FROM emp WHERE deptno = 20)
    if (/^\(SELECT\b/i.test(trimmed) && trimmed.endsWith(")")) {
      return this.evalScalarSubquery(row, trimmed.slice(1, -1));
    }

    if ((trimmed.startsWith("'") && trimmed.endsWith("'")) || (trimmed.startsWith('"') && trimmed.endsWith('"'))) {
      return trimmed.slice(1, -1);
    }

    if (/^-?\d+(\.\d+)?$/.test(trimmed)) {
      return parseFloat(trimmed);
    }

    if (trimmed.toUpperCase() === "NULL") return null;

    const coalMatch = trimmed.match(/^COALESCE\s*\(([\s\S]+)\)$/i);
    if (coalMatch) {
      const args = this.splitCommaRespectingParens(coalMatch[1]);
      for (const a of args) {
        const val = this.evalExpression(row, a);
        if (val !== null && val !== undefined) return val;
      }
      return null;
    }

    const roundMatch = trimmed.match(/^ROUND\s*\(([\s\S]+)\)$/i);
    if (roundMatch) {
      const args = this.splitCommaRespectingParens(roundMatch[1]);
      const val = this.evalExpression(row, args[0]);
      const dec = args.length > 1 ? parseInt(args[1], 10) : 0;
      if (val === null || val === undefined) return null;
      return Number(val).toFixed(dec);
    }

    const colVal = this.resolveColValue(row, trimmed);
    if (colVal !== undefined) return colVal;

    // Math arithmetic
    if (/[\+\-\*\/]/.test(trimmed)) {
      try {
        let code = trimmed;
        const tokens = trimmed.match(/[a-zA-Z_][a-zA-Z0-9_\.]*/g) || [];
        for (const t of tokens) {
          const v = this.resolveColValue(row, t);
          if (v === null || v === undefined) return null;
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

    if (isDistinct) return this.deduplicateRows(projected);
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

    if (/^COUNT\s*\(\s*\*\s*\)$/i.test(trimmed)) return groupRows.length;

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

    return this.evalExpression(sampleRow, trimmed);
  },

  evalHavingCondition(groupRows, sampleRow, havingPart) {
    const cond = havingPart.trim();
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

  compareResults(userRes, expectedRes) {
    if (!userRes.success) {
      return { match: false, message: `SQL bajarishda xatolik: ${userRes.error}` };
    }
    if (!expectedRes.success) {
      return { match: false, message: "Kutilayotgan yechimni bajarishda ichki xatolik." };
    }

    if (userRes.rows.length !== expectedRes.rows.length) {
      return {
        match: false,
        message: `Qatorlar soni mos kelmadi: Sizda ${userRes.rows.length} ta, kutilayotgan natijada esa ${expectedRes.rows.length} ta qator bor.`
      };
    }

    if (userRes.columns.length !== expectedRes.columns.length) {
      return {
        match: false,
        message: `Ustunlar soni mos kelmadi: Sizda ${userRes.columns.length} ta, kutilayotgan natijada esa ${expectedRes.columns.length} ta ustun talab qilingan.`
      };
    }

    // 3. Direct ordered values check
    let directMatch = true;
    let mismatchMsg = "";

    for (let i = 0; i < expectedRes.rows.length; i++) {
      const expRow = expectedRes.rows[i];
      const usrRow = userRes.rows[i];
      const expKeys = Object.keys(expRow);
      const usrKeys = Object.keys(usrRow);

      for (let k = 0; k < expKeys.length; k++) {
        const expVal = expRow[expKeys[k]];
        const usrVal = usrRow[usrKeys[k]];

        if (expVal === null && usrVal !== null && usrVal !== undefined) {
          directMatch = false;
          mismatchMsg = `${i + 1}-qatorda qiymat NULL bo'lishi kerak edi.`;
          break;
        }
        if (expVal !== null && String(expVal).toLowerCase().trim() !== String(usrVal).toLowerCase().trim()) {
          directMatch = false;
          mismatchMsg = `${i + 1}-qatorda kutilgan '${expVal}' o'rniga '${usrVal}' chiqdi.`;
          break;
        }
      }
      if (!directMatch) break;
    }

    if (directMatch) {
      return { match: true, message: "A'lo darajada! Barcha natijalar to'liq mos keldi." };
    }

    // 4. Multiset fallback (unordered equality if no strict row order required)
    try {
      const serializeRow = (r) => {
        return Object.values(r).map(v => (v === null || v === undefined ? 'null' : String(v).trim().toLowerCase())).join('|||');
      };
      const expSorted = expectedRes.rows.map(serializeRow).sort();
      const usrSorted = userRes.rows.map(serializeRow).sort();

      const multisetMatch = expSorted.every((val, idx) => val === usrSorted[idx]);
      if (multisetMatch) {
        return { match: true, message: "A'lo darajada! Barcha qatorlar va qiymatlar to'liq mos keldi." };
      }
    } catch (e) {
      // ignore
    }

    return {
      match: false,
      message: mismatchMsg || "Natijalar kutilgan qiymatlarga mos kelmadi."
    };
  }
};
