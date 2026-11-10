// ============================================================================
// DATABASE SYSTEMS ACADEMY — WEEK 7 DATABASE & SQL WINDOW / CTE ENGINE
// Includes Emp-Dept-Salgrade, Applicant (13 rows), Dasturxon Delivery Courier Log,
// Car Service Workshop, Pharmacy Orders, Career Ranks, and Office Events.
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

  // 13 Job Applicants
  applicant: [
    { aid: 1,  aname: "BLAKE",  job: "MANAGER",  appdate: "2010-04-01", deptno: 30 },
    { aid: 2,  aname: "CLARK",  job: "MANAGER",  appdate: "2011-06-01", deptno: 10 },
    { aid: 3,  aname: "JONES",  job: "MANAGER",  appdate: "2000-04-01", deptno: 20 },
    { aid: 4,  aname: "MARTIN", job: "SALESMAN", appdate: "2012-09-20", deptno: 30 },
    { aid: 5,  aname: "ALLEN",  job: "SALESMAN", appdate: "2002-02-10", deptno: 30 },
    { aid: 6,  aname: "TURNER", job: "SALESMAN", appdate: "2003-09-01", deptno: 30 },
    { aid: 7,  aname: "JAMES",  job: "CLERK",    appdate: "2005-12-01", deptno: 30 },
    { aid: 8,  aname: "KATE",   job: "SALESMAN", appdate: "2001-02-01", deptno: 30 },
    { aid: 9,  aname: "FORD",   job: "ANALYST",  appdate: "2006-12-01", deptno: 20 },
    { aid: 10, aname: "SMITH",  job: "CLERK",    appdate: "2007-12-12", deptno: 20 },
    { aid: 11, aname: "SCOTT",  job: "ANALYST",  appdate: "2001-12-03", deptno: 20 },
    { aid: 12, aname: "ADAMS",  job: "CLERK",    appdate: "2002-01-05", deptno: 20 },
    { aid: 13, aname: "MIKE",   job: "CLERK",    appdate: "2005-01-11", deptno: 10 }
  ],

  // 5 Salary Grades
  salgrade: [
    { grade: 1, losal: 700.00,  hisal: 1200.00 },
    { grade: 2, losal: 1201.00, hisal: 1400.00 },
    { grade: 3, losal: 1401.00, hisal: 2000.00 },
    { grade: 4, losal: 2001.00, hisal: 3000.00 },
    { grade: 5, losal: 3001.00, hisal: 9999.00 }
  ],

  // 5 Projects
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

  // Dasturxon Delivery Shift Log (Lecture 7 & Seminar 8)
  dasturxon_delivery: [
    { id: 1, courier_id: "C01", shift: "Mon-AM", zone: "Chilanzar",      vehicle: "Bike",    supervisor: "Rahimov" },
    { id: 2, courier_id: "C02", shift: "Mon-AM", zone: "Yunusabad",      vehicle: "Car",     supervisor: "Saidova" },
    { id: 3, courier_id: "C01", shift: "Mon-PM", zone: "Chilanzar",      vehicle: "Bike",    supervisor: "Rahimov" },
    { id: 4, courier_id: "C03", shift: "Mon-AM", zone: "Chilanzar",      vehicle: "Scooter", supervisor: "Rahimov" },
    { id: 5, courier_id: "C02", shift: "Tue-AM", zone: "Chilanzar",      vehicle: "Car",     supervisor: "Rahimov" },
    { id: 6, courier_id: "C04", shift: "Tue-AM", zone: "Yunusabad",      vehicle: "Bike",    supervisor: "Saidova" },
    { id: 7, courier_id: "C05", shift: "Tue-PM", zone: "Mirzo-Ulugbek",  vehicle: "Scooter", supervisor: "Rahimov" }
  ],

  // Car Service Workshop (Seminar 8 Normalization)
  car_service: [
    { job_id: 1001, reg_no: "01A777AA", model: "Cobalt",   make: "Chevrolet", owner: "Karimov",  mech_id: "M01", mech_name: "Rustam", mech_phone: "901112233", part_code: "P01", part_name: "Oil Filter",   part_price: 65000 },
    { job_id: 1001, reg_no: "01A777AA", model: "Cobalt",   make: "Chevrolet", owner: "Karimov",  mech_id: "M01", mech_name: "Rustam", mech_phone: "901112233", part_code: "P02", part_name: "Synthetic Oil",part_price: 350000 },
    { job_id: 1002, reg_no: "01B888BB", model: "Tracker",  make: "Chevrolet", owner: "Aliyeva",  mech_id: "M02", mech_name: "Bobur",  mech_phone: "902223344", part_code: "P03", part_name: "Brake Pads",   part_price: 240000 },
    { job_id: 1003, reg_no: "01C999CC", model: "Gentra",   make: "Chevrolet", owner: "Saidov",   mech_id: "M01", mech_name: "Rustam", mech_phone: "901112233", part_code: "P01", part_name: "Oil Filter",   part_price: 65000 },
    { job_id: 1004, reg_no: "01D111DD", model: "Sonata",   make: "Hyundai",   owner: "Tursunov", mech_id: "M03", mech_name: "Jasur",  mech_phone: "903334455", part_code: "P04", part_name: "Spark Plugs",  part_price: 180000 }
  ],

  // Online Pharmacy Orders (Seminar 8 Advanced Normalization)
  pharmacy_orders: [
    { order_no: 5001, order_date: "2026-10-01", cust_id: "U01", cust_name: "Aziza",   cust_phone: "901234567", drug_code: "D01", drug_name: "Paracetamol", manuf: "Nobel",  manuf_country: "Uzbekistan", qty: 2, pharm_id: "PH1", pharm_name: "Nodira" },
    { order_no: 5001, order_date: "2026-10-01", cust_id: "U01", cust_name: "Aziza",   cust_phone: "901234567", drug_code: "D02", drug_name: "Ibuprofen",   manuf: "Bayer",  manuf_country: "Germany",    qty: 1, pharm_id: "PH1", pharm_name: "Nodira" },
    { order_no: 5002, order_date: "2026-10-02", cust_id: "U02", cust_name: "Bekzod",  cust_phone: "902345678", drug_code: "D03", drug_name: "Amoxicillin", manuf: "Sandoz", manuf_country: "Switzerland",qty: 3, pharm_id: "PH2", pharm_name: "Sardor" },
    { order_no: 5003, order_date: "2026-10-02", cust_id: "U03", cust_name: "Dilnoza", cust_phone: "903456789", drug_code: "D01", drug_name: "Paracetamol", manuf: "Nobel",  manuf_country: "Uzbekistan", qty: 4, pharm_id: "PH1", pharm_name: "Nodira" }
  ],

  // 10 Corporate Sectors for Week 7 (15 questions each)
  sectors: [
    { id: 1,  floor: "1-Qavat", title: "Funksional Bog'liqliklar (FD) & Dasturxon Logs", color: "#38bdf8", badge: "FD & Anomalies" },
    { id: 2,  floor: "2-Qavat", title: "Atributlar Yopilishi (Closure) & Kalitlar",     color: "#34d399", badge: "Keys & Closure" },
    { id: 3,  floor: "3-Qavat", title: "1NF & 2NF Normalizatsiya Amaliyoti",           color: "#f59e0b", badge: "1NF / 2NF" },
    { id: 4,  floor: "4-Qavat", title: "3NF Normalizatsiya & Avtoservis Keysi",        color: "#fb923c", badge: "3NF Decomposition" },
    { id: 5,  floor: "5-Qavat", title: "BCNF Normal Forma & Lossless Join Tahlili",    color: "#a855f7", badge: "BCNF & Lossless" },
    { id: 6,  floor: "6-Qavat", title: "SQL Oyna Funksiyalari: Jami & O'rtacha Qiymat", color: "#ec4899", badge: "Window Aggregates" },
    { id: 7,  floor: "7-Qavat", title: "O'suvchi Jami (Running Total) & Reytinglar",   color: "#06b6d4", badge: "Running & Ranks" },
    { id: 8,  floor: "8-Qavat", title: "Pozitsion Oyna Funksiyalari: LEAD, LAG & FIRST",color: "#10b981", badge: "LEAD & LAG" },
    { id: 9,  floor: "9-Qavat", title: "Common Table Expressions (CTE) & Subquery Refactor", color: "#6366f1", badge: "WITH CTEs" },
    { id: 10, floor: "10-Qavat",title: "Rekursiv CTE, EXPLAIN ANALYZE & Indekslar",    color: "#e11d48", badge: "Recursive & Optimization" }
  ],

  // 10 Career Ranks
  careerRanks: [
    { minSolved: 0,   title: "Stajyor Tahlilchi",               salary: "$2,000/oy", badge: "🎓" },
    { minSolved: 15,  title: "FD & Relyatsion Auditor",         salary: "$3,200/oy", badge: "📐" },
    { minSolved: 30,  title: "Kalitlar & Yopilish Mutaxassisi", salary: "$4,500/oy", badge: "🔑" },
    { minSolved: 45,  title: "2NF Normalizatsiya Muhandisi",    salary: "$5,800/oy", badge: "🛠️" },
    { minSolved: 60,  title: "3NF Me'mori (Car Workshop Lead)", salary: "$7,200/oy", badge: "🚗" },
    { minSolved: 75,  title: "BCNF & Relyatsion Nazariyotchi",  salary: "$8,500/oy", badge: "🏛️" },
    { minSolved: 90,  title: "SQL Oyna Funksiyalari Eksperti",  salary: "$10,000/oy", badge: "🪟" },
    { minSolved: 105, title: "Katta Analitik SQL Muhandisi",    salary: "$12,000/oy", badge: "📈" },
    { minSolved: 120, title: "CTE & Rekursiv Tizimlar Yetakchisi",salary: "$14,500/oy", badge: "🌲" },
    { minSolved: 140, title: "Bosh Baza Me'mori (Penthouse VIP)", salary: "$18,000/oy", badge: "👑" }
  ],

  // Office Events
  officeEvents: [
    { id: "evt_w7_1", title: "Dasturxon Delivery: Anomaliyalar Shoshilinch Xabari!", text: "Kuryerlar jadvalida bitta kuryer turli transport vositalarida qayd etilgan. FD qoidalarini tekshiring!" },
    { id: "evt_w7_2", title: "Avtoservis Bazasi Qayta Qurilmoqda", text: "Mexaniklar bir xil ma'lumotlarni qayta-qayta yozishdan charchashdi. 3NF ga o'tkazish talab etiladi." },
    { id: "evt_w7_3", title: "Prof. Atlas: Oyna Funksiyalari Quvvati", text: "GROUP BY qatorlarni birlashtirsa, Window Function har bir xodim qatorini saqlagan holda agregat hisoblaydi!" },
    { id: "evt_w7_4", title: "Kompaniya Moliya Bo'limi: Running Totals", text: "Buxgalteriya har bir bo'lim bo'yicha maoshlarning o'suvchi jamini ko'rishni talab qilmoqda." },
    { id: "evt_w7_5", title: "Rekursiv Boshqaruv Daraxti", text: "Prezident KING dan tortib barcha darajadagi xodimlarni ierarxik daraxt ko'rinishida chiqarish vaqti keldi!" }
  ]
};

// ============================================================================
// SQL GRADER ENGINE — WEEK 7 (WITH WINDOW FUNCTIONS & CTEs)
// ============================================================================

window.SQL_GRADER = {
  normalizeSQL(sql) {
    if (!sql) return "";
    return sql
      .replace(/--.*$/gm, " ")
      .replace(/\/\*[\s\S]*?\*\//g, " ")
      .trim()
      .replace(/;+\s*$/g, "")
      .replace(/['']/g, "'")
      .replace(/[""]/g, '"')
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
      if (pCount < 0) return "Sintaksis xatosi: Ortiqcha yopuvchi ')' qavs yozilgan.";
    }
    if (pCount !== 0) {
      return `Sintaksis xatosi: Qavslar balansi buzilgan — ${pCount} ta ochilgan '(' qavs yopilmagan.`;
    }

    if (!/^\s*(SELECT|WITH|CREATE\s+(?:OR\s+REPLACE\s+)?VIEW|CREATE\s+INDEX|EXPLAIN)\b/i.test(trimmed)) {
      return "Sintaksis xatosi: SQL so'rov 'SELECT', 'WITH', 'CREATE VIEW', 'CREATE INDEX' yoki 'EXPLAIN' bilan boshlanishi lozim.";
    }
    return null;
  },

  generateExplainPlan(sql, isAnalyze) {
    const lines = [];
    const upper = sql.toUpperCase();
    const hasWindow = upper.includes("OVER (") || upper.includes("OVER(");
    const hasCTE = upper.startsWith("WITH");
    const hasJoin = upper.includes("JOIN");

    if (hasCTE) {
      lines.push("CTE Scan on cte_t  (cost=1.20..3.50 rows=14 width=64)" + (isAnalyze ? " (actual time=0.035..0.048 rows=14 loops=1)" : ""));
      lines.push("  CTE cte_t");
      lines.push("    ->  Seq Scan on emp  (cost=0.00..1.14 rows=14 width=36)" + (isAnalyze ? " (actual time=0.005..0.009 rows=14 loops=1)" : ""));
    } else if (hasWindow) {
      lines.push("WindowAgg  (cost=1.30..2.80 rows=14 width=56)" + (isAnalyze ? " (actual time=0.040..0.055 rows=14 loops=1)" : ""));
      lines.push("  ->  Sort  (cost=1.25..1.28 rows=14 width=36)" + (isAnalyze ? " (actual time=0.020..0.023 rows=14 loops=1)" : ""));
      lines.push("        Sort Key: deptno, sal DESC");
      lines.push("        ->  Seq Scan on emp  (cost=0.00..1.14 rows=14 width=36)" + (isAnalyze ? " (actual time=0.005..0.008 rows=14 loops=1)" : ""));
    } else if (hasJoin) {
      lines.push("Hash Join  (cost=1.18..2.55 rows=14 width=68)" + (isAnalyze ? " (actual time=0.031..0.045 rows=14 loops=1)" : ""));
      lines.push("  Hash Cond: (e.deptno = d.deptno)");
      lines.push("  ->  Seq Scan on emp e  (cost=0.00..1.14 rows=14 width=36)" + (isAnalyze ? " (actual time=0.005..0.008 rows=14 loops=1)" : ""));
      lines.push("  ->  Hash  (cost=1.04..1.04 rows=4 width=32)" + (isAnalyze ? " (actual time=0.015..0.015 rows=4 loops=1)" : ""));
      lines.push("        ->  Seq Scan on dept d  (cost=0.00..1.04 rows=4 width=32)" + (isAnalyze ? " (actual time=0.004..0.006 rows=4 loops=1)" : ""));
    } else {
      lines.push("Seq Scan on emp  (cost=0.00..1.14 rows=14 width=36)" + (isAnalyze ? " (actual time=0.006..0.012 rows=14 loops=1)" : ""));
    }

    if (isAnalyze) {
      lines.push("Planning Time: 0.088 ms");
      lines.push("Execution Time: 0.052 ms");
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
      // 0a. Check CREATE INDEX
      const createIndexMatch = raw.match(/^\s*CREATE\s+(?:UNIQUE\s+)?INDEX\s+([a-zA-Z0-9_]+)\s+ON\s+([a-zA-Z0-9_]+)\s*\(([^\)]+)\)$/i);
      if (createIndexMatch) {
        return {
          success: true,
          columns: ["STATUS", "INDEX_NAME", "TABLE_NAME", "COLUMNS"],
          rows: [{ STATUS: "CREATE INDEX muvaffaqiyatli bajarildi", INDEX_NAME: createIndexMatch[1].toUpperCase(), TABLE_NAME: createIndexMatch[2].toUpperCase(), COLUMNS: createIndexMatch[3].trim() }]
        };
      }

      // 0b. Check EXPLAIN / EXPLAIN ANALYZE
      const explainMatch = raw.match(/^\s*EXPLAIN(?:\s+ANALYZE)?\s+([\s\S]+)$/i);
      if (explainMatch) {
        const innerSql = explainMatch[1].trim();
        return this.generateExplainPlan(innerSql, /EXPLAIN\s+ANALYZE/i.test(raw));
      }

      // 0c. Check CTE: WITH ... AS (...)
      if (/^\s*WITH\b/i.test(raw)) {
        return this.executeCTE(raw);
      }

      // Standard query
      return this.runSingleQuery(raw);
    } catch (e) {
      return { success: false, error: e.message || String(e), columns: [], rows: [] };
    }
  },

  executeCTE(sql) {
    // Parse WITH [RECURSIVE] name AS (...) [, name2 AS (...)] SELECT ...
    const isRecursive = /^\s*WITH\s+RECURSIVE\b/i.test(sql);
    const withPrefixMatch = sql.match(/^\s*WITH(?:\s+RECURSIVE)?\s+/i);
    const body = sql.slice(withPrefixMatch[0].length);

    // Extract CTE definitions before the final SELECT
    // Find the matching parenthesis for each CTE
    let i = 0;
    const ctes = {};

    while (i < body.length) {
      // Look for: cte_name [(cols)] AS (
      const headerMatch = body.slice(i).match(/^\s*([a-zA-Z0-9_]+)(?:\s*\([^\)]+\))?\s+AS\s*\(/i);
      if (!headerMatch) break;

      const cteName = headerMatch[1].toLowerCase();
      const openParenIdx = i + headerMatch[0].length - 1;
      let depth = 1;
      let closeParenIdx = -1;

      for (let j = openParenIdx + 1; j < body.length; j++) {
        if (body[j] === "(") depth++;
        else if (body[j] === ")") {
          depth--;
          if (depth === 0) {
            closeParenIdx = j;
            break;
          }
        }
      }

      if (closeParenIdx === -1) throw new Error("CTE qavsi yopilmagan");

      const cteSql = body.slice(openParenIdx + 1, closeParenIdx).trim();

      // Execute CTE and register as temporary table
      if (isRecursive && (cteSql.toUpperCase().includes("UNION ALL") || cteSql.toUpperCase().includes("UNION"))) {
        ctes[cteName] = this.evalRecursiveCTE(cteSql);
      } else {
        const res = this.runSingleQueryWithCTEs(cteSql, ctes);
        if (!res.success) throw new Error("CTE xatosi: " + res.error);
        ctes[cteName] = res.rows;
      }

      i = closeParenIdx + 1;
      // Skip comma if any
      const commaMatch = body.slice(i).match(/^\s*,\s*/);
      if (commaMatch) {
        i += commaMatch[0].length;
      } else {
        break;
      }
    }

    const mainSelect = body.slice(i).trim();
    return this.runSingleQueryWithCTEs(mainSelect, ctes);
  },

  evalRecursiveCTE(cteSql) {
    // Standard recursive hierarchy for Company employees
    // Level 1: KING (mgr IS NULL), Level 2: BLAKE, CLARK, JONES, Level 3: etc.
    const empData = window.COMPANY_DB?.emp || [];
    const rows = [];
    function traverse(mgr, level) {
      for (const e of empData) {
        if (e.mgr === mgr || (mgr === null && (e.mgr === null || e.supervisor === null))) {
          rows.push({
            empno: e.empno,
            ename: e.ename,
            mgr: e.mgr,
            deptno: e.deptno,
            sal: e.sal,
            lvl: level,
            level: level,
            path: mgr === null ? e.ename : "KING -> " + e.ename
          });
          traverse(e.empno, level + 1);
        }
      }
    }
    traverse(null, 1);
    return rows;
  },

  runSingleQueryWithCTEs(sql, ctes = {}) {
    // Temporarily attach CTE tables to window.COMPANY_DB
    const db = window.COMPANY_DB || {};
    const backup = {};
    for (const k of Object.keys(ctes)) {
      backup[k] = db[k];
      db[k] = ctes[k];
    }
    try {
      return this.runSingleQuery(sql);
    } finally {
      for (const k of Object.keys(ctes)) {
        if (backup[k] !== undefined) db[k] = backup[k];
        else delete db[k];
      }
    }
  },

  runSingleQuery(sql) {
    const raw = this.normalizeSQL(sql);
    const selectMatch = raw.match(/^\s*SELECT\s+([\s\S]+?)\s+FROM\s+([\s\S]+?)(?:\s+WHERE\s+([\s\S]+?))?(?:\s+GROUP\s+BY\s+([\s\S]+?))?(?:\s+HAVING\s+([\s\S]+?))?(?:\s+ORDER\s+BY\s+([\s\S]+?))?(?:\s+LIMIT\s+(\d+))?$/i);

    if (!selectMatch) {
      // Check simple SELECT without FROM (e.g. SELECT 1, 'test')
      const noFromMatch = raw.match(/^\s*SELECT\s+([\s\S]+)$/i);
      if (noFromMatch) {
        return { success: true, columns: ["RESULT"], rows: [{ RESULT: noFromMatch[1].trim() }] };
      }
      return { success: false, error: "Noto'g'ri SELECT sintaksisi", columns: [], rows: [] };
    }

    const selectPart = selectMatch[1].trim();
    const fromPart   = selectMatch[2].trim();
    const wherePart  = selectMatch[3] ? selectMatch[3].trim() : null;
    const groupByPart= selectMatch[4] ? selectMatch[4].trim() : null;
    const havingPart = selectMatch[5] ? selectMatch[5].trim() : null;
    const orderByPart= selectMatch[6] ? selectMatch[6].trim() : null;
    const limitPart  = selectMatch[7] ? parseInt(selectMatch[7], 10) : null;

    // 1. Resolve FROM source rows
    let rows = this.resolveFromTable(fromPart);

    // 2. Filter WHERE
    if (wherePart) {
      rows = rows.filter(r => this.evalPredicate(r, wherePart));
    }

    // 3. GROUP BY & HAVING
    if (groupByPart) {
      rows = this.evalGroupBy(rows, groupByPart, selectPart, havingPart);
      // Order By
      if (orderByPart) {
        rows = this.evalOrderBy(rows, orderByPart);
      }
      if (limitPart !== null) {
        rows = rows.slice(0, limitPart);
      }
      const cols = rows.length > 0 ? Object.keys(rows[0]) : this.extractColumnAliases(selectPart);
      return { success: true, columns: cols, rows };
    }

    // 4. Check Window Functions in SELECT
    const hasWindow = /\bOVER\s*\(/i.test(selectPart);
    if (hasWindow) {
      rows = this.evalWindowFunctions(rows, selectPart);
      if (orderByPart) {
        rows = this.evalOrderBy(rows, orderByPart);
      }
      if (limitPart !== null) {
        rows = rows.slice(0, limitPart);
      }
      const cols = rows.length > 0 ? Object.keys(rows[0]) : this.extractColumnAliases(selectPart);
      return { success: true, columns: cols, rows };
    }

    // 5. Standard Projection
    const projectedRows = rows.map(r => this.projectRow(r, selectPart));
    let finalRows = projectedRows;

    // Check DISTINCT
    if (/^\s*DISTINCT\b/i.test(selectPart)) {
      const seen = new Set();
      finalRows = finalRows.filter(r => {
        const key = JSON.stringify(r);
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });
    }

    if (orderByPart) {
      finalRows = this.evalOrderBy(finalRows, orderByPart);
    }
    if (limitPart !== null) {
      finalRows = finalRows.slice(0, limitPart);
    }

    const cols = finalRows.length > 0 ? Object.keys(finalRows[0]) : this.extractColumnAliases(selectPart);
    return { success: true, columns: cols, rows: finalRows };
  },

  resolveFromTable(fromPart) {
    const db = window.COMPANY_DB || {};
    // Handle JOINs if present
    if (/\bJOIN\b/i.test(fromPart)) {
      return this.evalJoin(fromPart);
    }

    const tableName = fromPart.trim().split(/\s+/)[0].toLowerCase();
    const data = db[tableName] || [];
    // clone rows
    return data.map(r => Object.assign({}, r));
  },

  evalJoin(fromPart) {
    // Simple join evaluator for emp and dept
    const db = window.COMPANY_DB || {};
    const emp = db.emp || [];
    const dept = db.dept || [];

    const joined = [];
    for (const e of emp) {
      const d = dept.find(dep => dep.deptno === e.deptno) || {};
      joined.push({
        empno: e.empno,
        ename: e.ename,
        job: e.job,
        sal: e.sal,
        comm: e.comm,
        hiredate: e.hiredate,
        mgr: e.mgr,
        deptno: e.deptno,
        dname: d.dname || null,
        loc: d.loc || null
      });
    }
    return joined;
  },

  evalGroupBy(rows, groupByPart, selectPart, havingPart) {
    const groupCols = groupByPart.split(",").map(c => c.trim().toLowerCase());
    const groups = new Map();

    for (const r of rows) {
      const key = groupCols.map(c => r[c] !== undefined ? r[c] : "").join("___");
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(r);
    }

    const resultRows = [];
    for (const [key, gRows] of groups.entries()) {
      // Evaluate HAVING if present
      if (havingPart) {
        if (!this.evalHavingPredicate(gRows, havingPart)) continue;
      }
      // Project group row
      const groupRow = this.projectGroupRow(gRows, selectPart, groupCols);
      resultRows.push(groupRow);
    }
    return resultRows;
  },

  evalHavingPredicate(gRows, havingSql) {
    // e.g. COUNT(DISTINCT vehicle) > 1
    // e.g. COUNT(*) > 1
    const distCountMatch = havingSql.match(/COUNT\s*\(\s*DISTINCT\s+([a-zA-Z0-9_]+)\s*\)\s*(>|>=|=|!=|<)\s*(\d+)/i);
    if (distCountMatch) {
      const col = distCountMatch[1].toLowerCase();
      const op = distCountMatch[2];
      const target = parseInt(distCountMatch[3], 10);
      const uniqueVals = new Set(gRows.map(r => r[col]));
      const cnt = uniqueVals.size;
      if (op === ">") return cnt > target;
      if (op === ">=") return cnt >= target;
      if (op === "=") return cnt === target;
      if (op === "!=") return cnt !== target;
      if (op === "<") return cnt < target;
    }
    return true;
  },

  projectGroupRow(gRows, selectPart, groupCols) {
    const row = {};
    const first = gRows[0];
    for (const gc of groupCols) {
      row[gc] = first[gc];
    }
    // Parse aggregate expressions
    if (/\bCOUNT\s*\(\s*\*\s*\)/i.test(selectPart)) {
      row["count"] = gRows.length;
    }
    if (/\bSUM\s*\(\s*sal\s*\)/i.test(selectPart)) {
      row["total_sal"] = gRows.reduce((a, b) => a + (b.sal || 0), 0);
    }
    if (/\bAVG\s*\(\s*sal\s*\)/i.test(selectPart)) {
      row["avg_sal"] = +(gRows.reduce((a, b) => a + (b.sal || 0), 0) / gRows.length).toFixed(2);
    }
    return row;
  },

  evalWindowFunctions(rows, selectPart) {
    // Evaluate standard columns + Window functions on rows
    // Parse select items separated by commas outside parentheses
    const items = this.splitTopLevelCommas(selectPart.replace(/^\s*DISTINCT\s+/i, ""));

    // Prepare window computation
    const totalCount = rows.length;
    const totalSumSal = rows.reduce((acc, r) => acc + (parseFloat(r.sal) || 0), 0);
    const totalAvgSal = +(totalSumSal / totalCount).toFixed(2);
    const totalMaxSal = Math.max(...rows.map(r => parseFloat(r.sal) || 0));

    // Department-level stats
    const deptStats = {};
    for (const r of rows) {
      const d = r.deptno;
      if (!deptStats[d]) {
        deptStats[d] = { count: 0, sumSal: 0, maxSal: 0, minSal: 999999 };
      }
      const s = parseFloat(r.sal) || 0;
      deptStats[d].count++;
      deptStats[d].sumSal += s;
      if (s > deptStats[d].maxSal) deptStats[d].maxSal = s;
      if (s < deptStats[d].minSal) deptStats[d].minSal = s;
    }
    for (const d of Object.keys(deptStats)) {
      deptStats[d].avgSal = +(deptStats[d].sumSal / deptStats[d].count).toFixed(2);
    }

    // Sort rows for ranking or running totals if needed
    // Default clone
    const computedRows = rows.map((r, idx) => {
      const out = {};
      const d = r.deptno;
      const s = parseFloat(r.sal) || 0;

      for (const item of items) {
        const aliasMatch = item.match(/\s+AS\s+([a-zA-Z0-9_]+)$/i);
        let colName = aliasMatch ? aliasMatch[1] : item.trim();

        // 1. Window: SUM(sal) OVER ()
        if (/SUM\s*\(\s*sal\s*\)\s+OVER\s*\(\s*\)/i.test(item)) {
          out[colName] = totalSumSal;
        }
        // 2. Window: AVG(sal) OVER ()
        else if (/AVG\s*\(\s*sal\s*\)\s+OVER\s*\(\s*\)/i.test(item)) {
          out[colName] = totalAvgSal;
        }
        // 3. Window: COUNT(*) OVER ()
        else if (/COUNT\s*\(\s*\*\s*\)\s+OVER\s*\(\s*\)/i.test(item)) {
          out[colName] = totalCount;
        }
        // 4. Window: MAX(sal) OVER ()
        else if (/MAX\s*\(\s*sal\s*\)\s+OVER\s*\(\s*\)/i.test(item)) {
          out[colName] = totalMaxSal;
        }
        // 5. Window: AVG(sal) OVER (PARTITION BY deptno)
        else if (/AVG\s*\(\s*sal\s*\)\s+OVER\s*\(\s*PARTITION\s+BY\s+deptno\s*\)/i.test(item)) {
          out[colName] = deptStats[d] ? deptStats[d].avgSal : null;
        }
        // 6. Window: MAX(sal) OVER (PARTITION BY deptno)
        else if (/MAX\s*\(\s*sal\s*\)\s+OVER\s*\(\s*PARTITION\s+BY\s+deptno\s*\)/i.test(item)) {
          out[colName] = deptStats[d] ? deptStats[d].maxSal : null;
        }
        // 7. Window: COUNT(*) OVER (PARTITION BY deptno)
        else if (/COUNT\s*\(\s*\*\s*\)\s+OVER\s*\(\s*PARTITION\s+BY\s+deptno\s*\)/i.test(item)) {
          out[colName] = deptStats[d] ? deptStats[d].count : null;
        }
        // 8. Window: ROW_NUMBER() OVER (PARTITION BY deptno ORDER BY ...)
        else if (/ROW_NUMBER\s*\(\s*\)\s+OVER/i.test(item)) {
          // Calculate row number within partition
          const deptRows = rows.filter(x => x.deptno === d);
          deptRows.sort((a, b) => (a.ename > b.ename ? 1 : -1));
          out[colName] = deptRows.findIndex(x => x.empno === r.empno) + 1;
        }
        // 9. Window: DENSE_RANK() OVER (PARTITION BY deptno ORDER BY sal DESC)
        else if (/DENSE_RANK\s*\(\s*\)\s+OVER/i.test(item)) {
          const deptRows = rows.filter(x => x.deptno === d);
          const distinctSals = Array.from(new Set(deptRows.map(x => x.sal))).sort((a, b) => b - a);
          out[colName] = distinctSals.indexOf(r.sal) + 1;
        }
        // 10. Window: RANK() OVER (PARTITION BY deptno ORDER BY sal DESC)
        else if (/RANK\s*\(\s*\)\s+OVER/i.test(item)) {
          const deptRows = rows.filter(x => x.deptno === d);
          deptRows.sort((a, b) => b.sal - a.sal);
          out[colName] = deptRows.findIndex(x => x.sal === r.sal) + 1;
        }
        // 11. Window: LAG(sal) OVER (ORDER BY hiredate)
        else if (/LAG\s*\(\s*sal\s*\)\s+OVER/i.test(item)) {
          const sorted = [...rows].sort((a, b) => (a.hiredate > b.hiredate ? 1 : -1));
          const pos = sorted.findIndex(x => x.empno === r.empno);
          out[colName] = pos > 0 ? sorted[pos - 1].sal : null;
        }
        // 12. Window: LEAD(sal) OVER (ORDER BY hiredate)
        else if (/LEAD\s*\(\s*sal\s*\)\s+OVER/i.test(item)) {
          const sorted = [...rows].sort((a, b) => (a.hiredate > b.hiredate ? 1 : -1));
          const pos = sorted.findIndex(x => x.empno === r.empno);
          out[colName] = pos < sorted.length - 1 ? sorted[pos + 1].sal : null;
        }
        // 13. Window: FIRST_VALUE(sal) OVER (PARTITION BY deptno ORDER BY sal)
        else if (/FIRST_VALUE\s*\(\s*sal\s*\)\s+OVER/i.test(item)) {
          out[colName] = deptStats[d] ? deptStats[d].minSal : null;
        }
        // 14. Window: Running Total of salaries
        else if (/SUM\s*\(\s*sal\s*\)\s+OVER\s*\(\s*ORDER\s+BY\s+empno\s*\)/i.test(item)) {
          const sorted = [...rows].sort((a, b) => a.empno - b.empno);
          let sum = 0;
          for (const x of sorted) {
            sum += x.sal;
            if (x.empno === r.empno) break;
          }
          out[colName] = sum;
        }
        // Standard column
        else {
          const cleanCol = item.trim().replace(/^e\./i, "").replace(/^d\./i, "").toLowerCase();
          out[colName] = r[cleanCol] !== undefined ? r[cleanCol] : r[item.trim()];
        }
      }
      return out;
    });

    return computedRows;
  },

  splitTopLevelCommas(str) {
    const parts = [];
    let depth = 0;
    let start = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "(") depth++;
      else if (str[i] === ")") depth--;
      else if (str[i] === "," && depth === 0) {
        parts.push(str.slice(start, i).trim());
        start = i + 1;
      }
    }
    if (start < str.length) parts.push(str.slice(start).trim());
    return parts;
  },

  projectRow(row, selectPart) {
    if (selectPart.trim() === "*") return Object.assign({}, row);
    const out = {};
    const items = this.splitTopLevelCommas(selectPart);
    for (const it of items) {
      const aliasMatch = it.match(/\s+AS\s+([a-zA-Z0-9_]+)$/i);
      const colName = aliasMatch ? aliasMatch[1] : it.trim().split(/\s+/).pop();
      const rawExpr = aliasMatch ? it.slice(0, aliasMatch.index).trim() : it.trim();

      // Check math expressions, e.g. sal * 1.15
      const mathMatch = rawExpr.match(/^([a-zA-Z0-9_]+)\s*([\*\+\-\/])\s*([0-9\.]+)$/);
      if (mathMatch) {
        const val = parseFloat(row[mathMatch[1].toLowerCase()] || 0);
        const factor = parseFloat(mathMatch[3]);
        if (mathMatch[2] === "*") out[colName] = +(val * factor).toFixed(2);
        else if (mathMatch[2] === "+") out[colName] = +(val + factor).toFixed(2);
        else if (mathMatch[2] === "-") out[colName] = +(val - factor).toFixed(2);
        else if (mathMatch[2] === "/") out[colName] = +(val / factor).toFixed(2);
      } else {
        const cleanKey = rawExpr.replace(/^[a-zA-Z0-9_]+\./, "").toLowerCase();
        out[colName] = row[cleanKey] !== undefined ? row[cleanKey] : null;
      }
    }
    return out;
  },

  evalPredicate(row, whereSql) {
    // Check multiple AND conditions
    const andParts = whereSql.split(/\bAND\b/i).map(s => s.trim());
    for (const part of andParts) {
      // Comparison: col = val, col != val, col > val, etc.
      const compMatch = part.match(/^([a-zA-Z0-9_\.]+)\s*(=|!=|<>|>|>=|<|<=)\s*(.+)$/i);
      if (compMatch) {
        const col = compMatch[1].replace(/^[a-zA-Z0-9_]+\./, "").toLowerCase();
        const op = compMatch[2];
        let rawVal = compMatch[3].trim().replace(/^'|'$/g, "");
        const actual = row[col];

        if (!isNaN(rawVal) && actual !== null && typeof actual === "number") {
          const numVal = parseFloat(rawVal);
          if (op === "=" && actual !== numVal) return false;
          if ((op === "!=" || op === "<>") && actual === numVal) return false;
          if (op === ">" && actual <= numVal) return false;
          if (op === ">=" && actual < numVal) return false;
          if (op === "<" && actual >= numVal) return false;
          if (op === "<=" && actual > numVal) return false;
        } else {
          if (op === "=" && String(actual).toLowerCase() !== rawVal.toLowerCase()) return false;
          if ((op === "!=" || op === "<>") && String(actual).toLowerCase() === rawVal.toLowerCase()) return false;
        }
      }
    }
    return true;
  },

  evalOrderBy(rows, orderPart) {
    const items = orderPart.split(",").map(s => {
      const parts = s.trim().split(/\s+/);
      return { col: parts[0].toLowerCase(), desc: parts.length > 1 && parts[1].toUpperCase() === "DESC" };
    });

    return [...rows].sort((a, b) => {
      for (const item of items) {
        let va = a[item.col];
        let vb = b[item.col];
        if (va === undefined || vb === undefined) continue;
        if (va < vb) return item.desc ? 1 : -1;
        if (va > vb) return item.desc ? -1 : 1;
      }
      return 0;
    });
  },

  extractColumnAliases(selectPart) {
    return this.splitTopLevelCommas(selectPart).map(s => {
      const m = s.match(/\s+AS\s+([a-zA-Z0-9_]+)$/i);
      return m ? m[1] : s.trim().split(/\s+/).pop();
    });
  },

  compareResults(actual, expected) {
    if (!actual.success && !expected.success) return { match: true };
    if (!actual.success || !expected.success) return { match: false, message: "Muvaffaqiyatsiz bajarilish" };
    if (actual.rows.length !== expected.rows.length) {
      return { match: false, message: `Qatorlar soni mos kelmadi: kutilgan ${expected.rows.length}, olingan ${actual.rows.length}` };
    }
    return { match: true };
  }
};
