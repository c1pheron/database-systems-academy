// ============================================================================
// DATABASE SYSTEMS ACADEMY — WEEK 9 SECURITY & TRANSACTION ENGINE
// Supports Security Roles, Grants, Revokes, Views, Parameterized Statements,
// ACID Transactions (BEGIN, COMMIT, ROLLBACK, SAVEPOINT), Locks, Isolation Levels,
// and Redis Transactions (MULTI, EXEC, WATCH).
// ============================================================================

window.COMPANY_DB = {
  dept: [
    { deptno: 10, dname: "ACCOUNTING", loc: "NEW YORK" },
    { deptno: 20, dname: "RESEARCH",   loc: "DALLAS" },
    { deptno: 30, dname: "SALES",      loc: "CHICAGO" },
    { deptno: 40, dname: "OPERATIONS", loc: "BOSTON" }
  ],

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

  // Security Roles Table
  security_roles: [
    { role_name: "admin",      can_login: true,  is_superuser: true },
    { role_name: "hr_clerk",   can_login: true,  is_superuser: false },
    { role_name: "analyst",    can_login: false, is_superuser: false },
    { role_name: "auditor",    can_login: true,  is_superuser: false }
  ],

  // System Locks Table (pg_locks simulation)
  pg_locks: [
    { locktype: "relation", relation: "emp", mode: "RowShareLock", granted: true },
    { locktype: "transactionid", relation: null, mode: "ExclusiveLock", granted: true }
  ],

  // Bank Accounts for Transaction simulation (The vanishing deposit problem)
  bank_accounts: [
    { acc_no: "ACC_AZIZ",  holder: "Aziz",  balance: 1000.00 },
    { acc_no: "ACC_TIMUR", holder: "Timur", balance: 500.00 }
  ],

  // 10 Corporate Sectors for Week 9 (15 questions each)
  sectors: [
    { id: 1,  floor: "1-Qavat", title: "Ma'lumotlar Bazasi Xavfsizligi & CIA Triadasi", color: "#38bdf8", badge: "CIA Triad" },
    { id: 2,  floor: "2-Qavat", title: "Kirishni Boshqarish: DAC, MAC & RBAC",          color: "#34d399", badge: "DAC/MAC/RBAC" },
    { id: 3,  floor: "3-Qavat", title: "PostgreSQL Rollar & Huquqlar: GRANT & REVOKE",  color: "#f59e0b", badge: "Roles & DCL" },
    { id: 4,  floor: "4-Qavat", title: "SQL Injection & Parametrlangan Xavfsiz So'rovlar", color: "#fb923c", badge: "SQLi & Prepare" },
    { id: 5,  floor: "5-Qavat", title: "Xavfsiz Ko'rinishlar (Views) & CHECK OPTION",  color: "#a855f7", badge: "Secure Views" },
    { id: 6,  floor: "6-Qavat", title: "Tranzaksiyalar Boshqaruvi & ACID Tamoyillari", color: "#ec4899", badge: "ACID Properties" },
    { id: 7,  floor: "7-Qavat", title: "Tranzaksiya Holatlari & TCL: BEGIN, COMMIT",   color: "#06b6d4", badge: "TCL Commands" },
    { id: 8,  floor: "8-Qavat", title: "Parallel Bajarilish & Concurrency Anomaliyalari", color: "#10b981", badge: "Anomalies" },
    { id: 9,  floor: "9-Qavat", title: "Blokirovkalar (Locks), 2PL & Deadlocklar",      color: "#6366f1", badge: "2PL & Locks" },
    { id: 10, floor: "10-Qavat",title: "Izolyatsiya Darajalari & Redis Tranzaksiyalari",color: "#e11d48", badge: "Isolation & MULTI" }
  ],

  careerRanks: [
    { minSolved: 0,   title: "Stajyor Xavfsizlik Muhandisi",      salary: "$2,500/oy", badge: "🎓" },
    { minSolved: 15,  title: "CIA & Tahdidlar Auditor",          salary: "$3,800/oy", badge: "🛡️" },
    { minSolved: 30,  title: "RBAC & Huquqlar Me'mori",          salary: "$5,200/oy", badge: "🔑" },
    { minSolved: 45,  title: "DCL & Rol Boshqaruv Mutaxassisi",  salary: "$6,800/oy", badge: "📜" },
    { minSolved: 60,  title: "SQL Injection Himoyachisi",        salary: "$8,500/oy", badge: "💉" },
    { minSolved: 75,  title: "Tranzaksiyalar (ACID) Muhandisi",  salary: "$10,500/oy", badge: "⚡" },
    { minSolved: 90,  title: "TCL & Qaytarish (Rollback) Eksperti", salary: "$12,500/oy", badge: "🔄" },
    { minSolved: 105, title: "Concurrency & 2PL Qulflar Yetakchisi", salary: "$15,000/oy", badge: "🔒" },
    { minSolved: 120, title: "Deadlock & Izolyatsiya Bosh Arxitektori", salary: "$18,000/oy", badge: "🛑" },
    { minSolved: 140, title: "Bosh Baza Xavfsizligi & ACID Penthouse Direktori", salary: "$22,000/oy", badge: "👑" }
  ],

  officeEvents: [
    { id: "evt_w9_1", title: "Kiberxavfsizlik Xabari: SQL Injection Hujumi Qaytarildi!", text: "Veb-ilovaga ' OR '1'='1 ko'rinishidagi so'rov yuborildi. Prepared Statements orqali to'liq zararsizlantirildi." },
    { id: "evt_w9_2", title: "Kompaniya Bankida G'oyib Bo'lgan Omonat!", text: "Bir vaqtning o'zida ikkita kassir hisobdan pul yechganda Lost Update xatosi bo'lmasligi uchun Strict 2PL qulflari kiritildi." },
    { id: "evt_w9_3", title: "Prof. Atlas: 2PL Qoidasi", text: "Growing phase da faqat qulflar olinadi, bitta qulf ochildimi - Shrinking phase boshlanadi va yangi qulf olib bo'lmaydi!" },
    { id: "evt_w9_4", title: "Deadlock Tutilishi va Wait-For Graph", text: "Tranzaksiya T1 va T2 bir-birining qulfini kutib to'xtab qoldi. Tizim eng arzon tranzaksiyani abort qildi." },
    { id: "evt_w9_5", title: "Redis MULTI / EXEC Atomikligi", text: "Redis tranzaksiyasi barcha buyruqlarni navbatga olib, EXEC bilan bitta atomik blok sifatida bajaradi!" }
  ]
};

// ============================================================================
// SQL GRADER ENGINE — WEEK 9 (SECURITY, TRANSACTIONS, LOCKS & REDIS)
// ============================================================================

window.SQL_GRADER = {
  normalize(raw) {
    if (!raw) return "";
    return raw
      .replace(/--.*$/gm, " ")
      .replace(/\/\*[\s\S]*?\*\//g, " ")
      .trim()
      .replace(/;+\s*$/g, "")
      .trim();
  },

  detectDiagnostics(rawSql, question) {
    if (!rawSql || !rawSql.trim()) {
      return "Ishchi terminal bo'sh! SQL yoki buyruqni yozib 'Tekshirish' tugmasini bosing.";
    }
    return null;
  },

  execute(command) {
    const raw = this.normalize(command);
    if (!raw) return { success: false, error: "Bo'sh buyruq", columns: [], rows: [] };

    try {
      // 1. Check Redis transaction commands: MULTI, EXEC, WATCH, DISCARD
      if (/^\s*(MULTI|EXEC|WATCH|DISCARD)\b/i.test(raw)) {
        return this.executeRedisTx(raw);
      }

      // 2. Check TCL commands: BEGIN, COMMIT, ROLLBACK, SAVEPOINT
      if (/^\s*(BEGIN|COMMIT|ROLLBACK|SAVEPOINT|START\s+TRANSACTION)\b/i.test(raw)) {
        return this.executeTcl(raw);
      }

      // 3. Check DCL / Security: CREATE ROLE, GRANT, REVOKE, PREPARE
      if (/^\s*(CREATE\s+ROLE|CREATE\s+USER|GRANT|REVOKE|PREPARE|EXECUTE)\b/i.test(raw)) {
        return this.executeDcl(raw);
      }

      // 4. Check CREATE VIEW ... WITH CHECK OPTION
      if (/^\s*CREATE\s+(?:OR\s+REPLACE\s+)?VIEW\b/i.test(raw)) {
        return {
          success: true,
          columns: ["STATUS", "VIEW_NAME"],
          rows: [{ STATUS: "CREATE VIEW muvaffaqiyatli bajarildi", VIEW_NAME: "V_SECURE_VIEW" }]
        };
      }

      // 5. Check SET TRANSACTION ISOLATION LEVEL
      if (/^\s*SET\s+TRANSACTION\s+ISOLATION\s+LEVEL\b/i.test(raw)) {
        const lvl = raw.replace(/^\s*SET\s+TRANSACTION\s+ISOLATION\s+LEVEL\s+/i, "").toUpperCase();
        return {
          success: true,
          columns: ["STATUS", "ISOLATION_LEVEL"],
          rows: [{ STATUS: "Izolyatsiya darajasi o'rnatildi", ISOLATION_LEVEL: lvl }]
        };
      }

      // 6. Standard SQL Query
      return this.executeSqlQuery(raw);
    } catch (e) {
      return { success: false, error: e.message || String(e), columns: [], rows: [] };
    }
  },

  executeRedisTx(raw) {
    const op = raw.trim().toUpperCase().split(/\s+/)[0];
    if (op === "MULTI") {
      return { success: true, columns: ["STATUS"], rows: [{ STATUS: "OK (Tranzaksiya navbati ochildi)" }] };
    }
    if (op === "EXEC") {
      return { success: true, columns: ["STATUS", "RESULTS_COUNT"], rows: [{ STATUS: "COMMIT OK", RESULTS_COUNT: 2 }] };
    }
    if (op === "WATCH") {
      return { success: true, columns: ["STATUS"], rows: [{ STATUS: "OK (Optimistic Lock qo'yildi)" }] };
    }
    return { success: true, columns: ["STATUS"], rows: [{ STATUS: "DISCARD (Bekor qilindi)" }] };
  },

  executeTcl(raw) {
    const trimmed = raw.trim().toUpperCase();
    if (trimmed.startsWith("BEGIN") || trimmed.startsWith("START TRANSACTION")) {
      return { success: true, columns: ["STATUS"], rows: [{ STATUS: "BEGIN TRANSACTION bajarildi (Faol holat)" }] };
    }
    if (trimmed.startsWith("COMMIT")) {
      return { success: true, columns: ["STATUS"], rows: [{ STATUS: "COMMIT muvaffaqiyatli bajarildi (ACID Durability kafolatlangan)" }] };
    }
    if (trimmed.startsWith("ROLLBACK TO")) {
      return { success: true, columns: ["STATUS"], rows: [{ STATUS: "SAVEPOINT holatiga qaytarildi (Partial Rollback)" }] };
    }
    if (trimmed.startsWith("ROLLBACK")) {
      return { success: true, columns: ["STATUS"], rows: [{ STATUS: "ROLLBACK bajarildi (Barcha o'zgarishlar bekor qilindi)" }] };
    }
    if (trimmed.startsWith("SAVEPOINT")) {
      return { success: true, columns: ["STATUS"], rows: [{ STATUS: "SAVEPOINT o'rnatildi" }] };
    }
    return { success: true, columns: ["STATUS"], rows: [{ STATUS: "TCL muvaffaqiyatli bajarildi" }] };
  },

  executeDcl(raw) {
    const trimmed = raw.trim();
    if (/^CREATE\s+ROLE/i.test(trimmed)) {
      const match = trimmed.match(/^CREATE\s+ROLE\s+([a-zA-Z0-9_]+)/i);
      const roleName = match ? match[1].toUpperCase() : "ROLE";
      return { success: true, columns: ["STATUS", "ROLE_NAME"], rows: [{ STATUS: "CREATE ROLE muvaffaqiyatli bajarildi", ROLE_NAME: roleName }] };
    }
    if (/^GRANT/i.test(trimmed)) {
      return { success: true, columns: ["STATUS"], rows: [{ STATUS: "GRANT huquqlari muvaffaqiyatli berildi" }] };
    }
    if (/^REVOKE/i.test(trimmed)) {
      return { success: true, columns: ["STATUS"], rows: [{ STATUS: "REVOKE orqali huquqlar qaytarib olindi" }] };
    }
    if (/^PREPARE/i.test(trimmed)) {
      return { success: true, columns: ["STATUS"], rows: [{ STATUS: "PREPARE: Parametrlangan xavfsiz so'rov yaratildi" }] };
    }
    if (/^EXECUTE/i.test(trimmed)) {
      return { success: true, columns: ["empno", "ename", "sal"], rows: [{ empno: 7839, ename: "KING", sal: 5000 }] };
    }
    return { success: true, columns: ["STATUS"], rows: [{ STATUS: "DCL bajarildi" }] };
  },

  executeSqlQuery(sql) {
    const trimmed = sql.trim();
    const db = window.COMPANY_DB;

    // pg_locks query
    if (/FROM\s+pg_locks/i.test(trimmed)) {
      return {
        success: true,
        columns: ["locktype", "relation", "mode", "granted"],
        rows: db.pg_locks
      };
    }

    // security_roles query
    if (/FROM\s+security_roles/i.test(trimmed)) {
      return {
        success: true,
        columns: ["role_name", "can_login", "is_superuser"],
        rows: db.security_roles
      };
    }

    // bank_accounts query
    if (/FROM\s+bank_accounts/i.test(trimmed)) {
      return {
        success: true,
        columns: ["acc_no", "holder", "balance"],
        rows: db.bank_accounts
      };
    }

    // emp query
    const empData = db.emp || [];
    return {
      success: true,
      columns: ["empno", "ename", "job", "sal", "deptno"],
      rows: empData.slice(0, 5).map(e => ({ empno: e.empno, ename: e.ename, job: e.job, sal: e.sal, deptno: e.deptno }))
    };
  },

  compareResults(actual, expected) {
    if (!actual.success && !expected.success) return { match: true };
    if (!actual.success || !expected.success) return { match: false, message: "Muvaffaqiyatsiz buyruq" };
    if (actual.rows.length !== expected.rows.length) {
      return { match: false, message: `Qatorlar soni mos kelmadi: kutilgan ${expected.rows.length}, olingan ${actual.rows.length}` };
    }
    return { match: true };
  }
};
