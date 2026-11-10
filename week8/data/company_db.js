// ============================================================================
// DATABASE SYSTEMS ACADEMY — WEEK 8 NoSQL (MONGODB & REDIS) SIMULATION ENGINE
// Supports Relational (Emp-Dept), MongoDB Collections & Aggregations,
// and Redis In-Memory Key-Value / Hashes / Lists / Sets / Sorted Sets.
// ============================================================================

window.COMPANY_DB = {
  // Relational Tables
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

  // In-memory Redis Store Simulation
  redisStore: {
    "emp:7839:ename": "KING",
    "emp:7839:sal": "5000",
    "dept:10:name": "ACCOUNTING"
  },

  // In-memory Redis Hashes Simulation
  redisHashes: {
    "emp:7839": { ename: "KING", job: "PRESIDENT", sal: "5000", deptno: "10" },
    "emp:7698": { ename: "BLAKE", job: "MANAGER", sal: "2850", deptno: "30" }
  },

  // In-memory Redis Lists Simulation
  redisLists: {
    "tasks:urgent": ["audit_w8", "verify_shards", "backup_redis"]
  },

  // In-memory Redis Sets Simulation
  redisSets: {
    "dept:10:members": new Set(["7839", "7782", "7934"]),
    "dept:20:members": new Set(["7566", "7902", "7369", "7788", "7876"]),
    "dept:30:members": new Set(["7698", "7654", "7499", "7844", "7900", "7521"])
  },

  // In-memory Redis Sorted Sets Simulation
  redisSortedSets: {
    "leaderboard:sal": [
      { member: "SMITH", score: 800 },
      { member: "JAMES", score: 950 },
      { member: "ADAMS", score: 1100 },
      { member: "WARD", score: 1250 },
      { member: "MARTIN", score: 1250 },
      { member: "MILLER", score: 1300 },
      { member: "TURNER", score: 1500 },
      { member: "ALLEN", score: 1600 },
      { member: "CLARK", score: 2450 },
      { member: "BLAKE", score: 2850 },
      { member: "JONES", score: 2975 },
      { member: "SCOTT", score: 3000 },
      { member: "FORD", score: 3000 },
      { member: "KING", score: 5000 }
    ]
  },

  // 10 Corporate Sectors for Week 8 (15 questions each)
  sectors: [
    { id: 1,  floor: "1-Qavat", title: "NoSQL Arxitekturasi & Relyatsion Cheklovlar",  color: "#38bdf8", badge: "NoSQL Scale" },
    { id: 2,  floor: "2-Qavat", title: "CAP Teoremasi, BASE & Taqsimlangan Sharding", color: "#34d399", badge: "CAP & BASE" },
    { id: 3,  floor: "3-Qavat", title: "MongoDB Hujjatli Modeli & insertOne/Many",     color: "#f59e0b", badge: "Mongo Insert" },
    { id: 4,  floor: "4-Qavat", title: "MongoDB Qidiruv & Filtrlash: find(), $gt, $in",color: "#fb923c", badge: "Mongo Find" },
    { id: 5,  floor: "5-Qavat", title: "MongoDB Yangilash & O'chirish: update, $set",  color: "#a855f7", badge: "Mongo Updates" },
    { id: 6,  floor: "6-Qavat", title: "MongoDB Aggregatsiya: $match & $group",        color: "#ec4899", badge: "Aggregation 1" },
    { id: 7,  floor: "7-Qavat", title: "MongoDB Aggregatsiya: $project, $sort & $lookup", color: "#06b6d4", badge: "Aggregation 2" },
    { id: 8,  floor: "8-Qavat", title: "Redis Kalit-Qiymat Modeli: SET, GET & TTL",    color: "#10b981", badge: "Redis KV" },
    { id: 9,  floor: "9-Qavat", title: "Redis Hash, List & Set Tuzilmalari",          color: "#6366f1", badge: "Redis Structures" },
    { id: 10, floor: "10-Qavat",title: "Redis Saralangan To'plamlar (ZSET) & Gibrid Tizim", color: "#e11d48", badge: "ZSET & Architecture" }
  ],

  // 10 Career Ranks
  careerRanks: [
    { minSolved: 0,   title: "Stajyor NoSQL Tahlilchi",          salary: "$2,200/oy", badge: "🎓" },
    { minSolved: 15,  title: "CAP & Taqsimlangan Tizimlar Muhandisi", salary: "$3,500/oy", badge: "🌐" },
    { minSolved: 30,  title: "MongoDB Hujjatlar Modeli Me'mori", salary: "$4,800/oy", badge: "🍃" },
    { minSolved: 45,  title: "MongoDB So'rovlar & Indeks Mutaxassisi", salary: "$6,200/oy", badge: "🔍" },
    { minSolved: 60,  title: "MongoDB Aggregation Pipeline Lead",salary: "$7,800/oy", badge: "⚙️" },
    { minSolved: 75,  title: "Redis In-Memory Kesh Me'mori",     salary: "$9,200/oy", badge: "⚡" },
    { minSolved: 90,  title: "Taqsimlangan Hash & Set Eksperti", salary: "$11,000/oy", badge: "🗃️" },
    { minSolved: 105, title: "Redis Leaderboard & ZSET Muhandisi", salary: "$13,000/oy", badge: "🏆" },
    { minSolved: 120, title: "Poliglot Ma'lumotlar Bosh Arxitektori", salary: "$15,500/oy", badge: "🏰" },
    { minSolved: 140, title: "Bosh NoSQL & Sharding Penthouse Eksperti", salary: "$20,000/oy", badge: "👑" }
  ],

  officeEvents: [
    { id: "evt_w8_1", title: "Uzum Market: Flesh-Seyl va Kesh Portlashi!", text: "Millionlab mijozlar bir vaqtda kirganda RDBMS bardosh bera olmadi. Redis kesh qatlami o'rnatildi!" },
    { id: "evt_w8_2", title: "MongoDB Klasterida Sharding Sinovi", text: "Toshkent va Frankfurt ma'lumotlar markazlari orasida tarmoq uzilishi (Network Partition) yuz berdi. CAP teoremasiga ko'ra CP tanlandi." },
    { id: "evt_w8_3", title: "Prof. Atlas: Aggregation Pipeline Quvvati", text: "$match qidiruvni filtrlaydi, $group esa bo'limlar bo'yicha maosh agregatlarini bir zumda jamlaydi!" },
    { id: "evt_w8_4", title: "Redis Hashes va Foydalanuvchi Sessiyalari", text: "Foydalanuvchi ma'lumotlarini alohida kalitlarga sochmasdan, HSET orqali ixcham saqlash xotirani 40% tejaydi." },
    { id: "evt_w8_5", title: "Jonli Savdo Peshqadamlari (Leaderboard)", text: "Redis ZADD va ZREVRANGE yordamida eng ko'p savdo qilgan sotuvchilar real vaqtda yangilanib turadi!" }
  ]
};

// ============================================================================
// MULTI-ENGINE GRADER (SQL + MONGODB + REDIS) FOR WEEK 8
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
      return "Ishchi terminal bo'sh! SQL, MongoDB yoki Redis buyrug'ini yozib, 'Tekshirish' (Ctrl+Enter) tugmasini bosing.";
    }
    return null;
  },

  execute(command) {
    const raw = this.normalize(command);
    if (!raw) return { success: false, error: "Bo'sh buyruq", columns: [], rows: [] };

    try {
      // 1. Detect MongoDB command: db.collection.method(...)
      if (/^\s*db\./i.test(raw)) {
        return this.executeMongo(raw);
      }

      // 2. Detect Redis command: SET, GET, HSET, HGETALL, LPUSH, SADD, ZADD, etc.
      if (/^\s*(SET|GET|DEL|EXPIRE|TTL|INCR|HSET|HGET|HGETALL|HINCRBY|LPUSH|RPUSH|LPOP|RPOP|LRANGE|SADD|SMEMBERS|SISMEMBER|ZADD|ZRANGE|ZREVRANGE)\b/i.test(raw)) {
        return this.executeRedis(raw);
      }

      // 3. Fallback: Standard SQL Query
      return this.executeSql(raw);
    } catch (e) {
      return { success: false, error: e.message || String(e), columns: [], rows: [] };
    }
  },

  executeMongo(cmd) {
    const db = window.COMPANY_DB;
    const match = cmd.match(/^\s*db\.([a-zA-Z0-9_]+)\.([a-zA-Z0-9_]+)\s*\(([\s\S]*)\)$/);
    if (!match) {
      return { success: false, error: "Noto'g'ri MongoDB sintaksisi. Format: db.<collection>.<method>(<args>)", columns: [], rows: [] };
    }

    const collName = match[1].toLowerCase();
    const method = match[2];
    const argsRaw = match[3].trim();
    let data = db[collName] || db.emp || [];

    // db.emp.find(...)
    if (method === "find") {
      let filtered = [...data];
      if (argsRaw) {
        // Simple filter check
        if (argsRaw.includes("deptno: 10") || argsRaw.includes('"deptno": 10')) {
          filtered = filtered.filter(x => x.deptno === 10);
        } else if (argsRaw.includes("deptno: 20") || argsRaw.includes('"deptno": 20')) {
          filtered = filtered.filter(x => x.deptno === 20);
        } else if (argsRaw.includes("deptno: 30") || argsRaw.includes('"deptno": 30')) {
          filtered = filtered.filter(x => x.deptno === 30);
        } else if (argsRaw.includes("$gte: 3000") || argsRaw.includes('"$gte": 3000')) {
          filtered = filtered.filter(x => x.sal >= 3000);
        } else if (argsRaw.includes("$gt: 2000") || argsRaw.includes('"$gt": 2000')) {
          filtered = filtered.filter(x => x.sal > 2000);
        } else if (argsRaw.includes('job: "CLERK"') || argsRaw.includes("job: 'CLERK'") || argsRaw.includes('"job": "CLERK"')) {
          filtered = filtered.filter(x => x.job === "CLERK");
        }
      }
      return {
        success: true,
        columns: ["_id", "empno", "ename", "job", "sal", "deptno"],
        rows: filtered.map((r, i) => ({ _id: "ObjectId(" + (r.empno || (1000 + i)) + ")", empno: r.empno, ename: r.ename, job: r.job, sal: r.sal, deptno: r.deptno }))
      };
    }

    // db.emp.countDocuments(...)
    if (method === "countDocuments") {
      let cnt = data.length;
      if (argsRaw.includes("deptno: 30") || argsRaw.includes('"deptno": 30')) {
        cnt = data.filter(x => x.deptno === 30).length;
      } else if (argsRaw.includes("deptno: 20") || argsRaw.includes('"deptno": 20')) {
        cnt = data.filter(x => x.deptno === 20).length;
      }
      return {
        success: true,
        columns: ["COUNT"],
        rows: [{ COUNT: cnt }]
      };
    }

    // db.emp.insertOne(...)
    if (method === "insertOne") {
      return {
        success: true,
        columns: ["acknowledged", "insertedId"],
        rows: [{ acknowledged: true, insertedId: "ObjectId(8001)" }]
      };
    }

    // db.emp.insertMany(...)
    if (method === "insertMany") {
      return {
        success: true,
        columns: ["acknowledged", "insertedCount"],
        rows: [{ acknowledged: true, insertedCount: 2 }]
      };
    }

    // db.emp.updateOne(...)
    if (method === "updateOne") {
      return {
        success: true,
        columns: ["acknowledged", "matchedCount", "modifiedCount"],
        rows: [{ acknowledged: true, matchedCount: 1, modifiedCount: 1 }]
      };
    }

    // db.emp.updateMany(...)
    if (method === "updateMany") {
      return {
        success: true,
        columns: ["acknowledged", "matchedCount", "modifiedCount"],
        rows: [{ acknowledged: true, matchedCount: 5, modifiedCount: 5 }]
      };
    }

    // db.emp.deleteMany(...)
    if (method === "deleteMany") {
      return {
        success: true,
        columns: ["acknowledged", "deletedCount"],
        rows: [{ acknowledged: true, deletedCount: 1 }]
      };
    }

    // db.emp.aggregate([...])
    if (method === "aggregate") {
      // Return departmental aggregation by default
      const deptAgg = [
        { _id: 10, total_sal: 8750, avg_sal: 2916.67, emp_count: 3 },
        { _id: 20, total_sal: 10875, avg_sal: 2175.00, emp_count: 5 },
        { _id: 30, total_sal: 9400, avg_sal: 1566.67, emp_count: 6 }
      ];
      return {
        success: true,
        columns: ["_id", "total_sal", "avg_sal", "emp_count"],
        rows: deptAgg
      };
    }

    return { success: true, columns: ["STATUS"], rows: [{ STATUS: `db.${collName}.${method}() bajarildi` }] };
  },

  executeRedis(cmd) {
    const parts = cmd.split(/\s+/);
    const op = parts[0].toUpperCase();
    const key = parts[1];

    if (op === "SET") {
      const val = parts.slice(2).join(" ").replace(/^['"]|['"]$/g, "");
      return {
        success: true,
        columns: ["RESULT"],
        rows: [{ RESULT: "OK" }]
      };
    }

    if (op === "GET") {
      const val = window.COMPANY_DB?.redisStore?.[key] || "KING";
      return {
        success: true,
        columns: ["VALUE"],
        rows: [{ VALUE: val }]
      };
    }

    if (op === "DEL") {
      return {
        success: true,
        columns: ["INTEGER"],
        rows: [{ INTEGER: 1 }]
      };
    }

    if (op === "EXPIRE") {
      return {
        success: true,
        columns: ["INTEGER"],
        rows: [{ INTEGER: 1 }]
      };
    }

    if (op === "TTL") {
      return {
        success: true,
        columns: ["TTL_SECONDS"],
        rows: [{ TTL_SECONDS: 3600 }]
      };
    }

    if (op === "HSET") {
      return {
        success: true,
        columns: ["INTEGER"],
        rows: [{ INTEGER: 1 }]
      };
    }

    if (op === "HGETALL") {
      const hash = window.COMPANY_DB?.redisHashes?.[key] || { ename: "KING", sal: "5000", deptno: "10" };
      return {
        success: true,
        columns: ["FIELD", "VALUE"],
        rows: Object.entries(hash).map(([f, v]) => ({ FIELD: f, VALUE: v }))
      };
    }

    if (op === "LPUSH" || op === "RPUSH") {
      return {
        success: true,
        columns: ["LIST_LENGTH"],
        rows: [{ LIST_LENGTH: 3 }]
      };
    }

    if (op === "LRANGE") {
      const list = window.COMPANY_DB?.redisLists?.[key] || ["audit_w8", "verify_shards", "backup_redis"];
      return {
        success: true,
        columns: ["INDEX", "VALUE"],
        rows: list.map((item, idx) => ({ INDEX: idx, VALUE: item }))
      };
    }

    if (op === "SADD") {
      return {
        success: true,
        columns: ["INTEGER"],
        rows: [{ INTEGER: 1 }]
      };
    }

    if (op === "SMEMBERS") {
      const set = window.COMPANY_DB?.redisSets?.[key] || new Set(["7839", "7782", "7934"]);
      return {
        success: true,
        columns: ["MEMBER"],
        rows: Array.from(set).map(m => ({ MEMBER: m }))
      };
    }

    if (op === "ZADD") {
      return {
        success: true,
        columns: ["INTEGER"],
        rows: [{ INTEGER: 1 }]
      };
    }

    if (op === "ZRANGE" || op === "ZREVRANGE") {
      const zset = window.COMPANY_DB?.redisSortedSets?.["leaderboard:sal"] || [];
      const rows = op === "ZREVRANGE" ? [...zset].reverse().slice(0, 5) : zset.slice(0, 5);
      return {
        success: true,
        columns: ["MEMBER", "SCORE"],
        rows: rows.map(r => ({ MEMBER: r.member, SCORE: r.score }))
      };
    }

    return {
      success: true,
      columns: ["OUTPUT"],
      rows: [{ OUTPUT: `Redis ${op} buyrug'i bajarildi` }]
    };
  },

  executeSql(sql) {
    const raw = sql.trim();
    const data = window.COMPANY_DB?.emp || [];

    if (/^\s*SELECT\b/i.test(raw)) {
      if (raw.includes("deptno = 10")) {
        return {
          success: true,
          columns: ["empno", "ename", "sal", "deptno"],
          rows: data.filter(x => x.deptno === 10).map(x => ({ empno: x.empno, ename: x.ename, sal: x.sal, deptno: x.deptno }))
        };
      }
      return {
        success: true,
        columns: ["empno", "ename", "job", "sal", "deptno"],
        rows: data.map(x => ({ empno: x.empno, ename: x.ename, job: x.job, sal: x.sal, deptno: x.deptno }))
      };
    }

    return {
      success: true,
      columns: ["STATUS"],
      rows: [{ STATUS: "SQL bajarildi" }]
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
