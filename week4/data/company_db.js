// ============================================================================
// DATABASE SYSTEMS ACADEMY — COMPANY DATABASE & SMART SQL GRADER
// Standard Oracle/PostgreSQL Emp-Dept Database for Week 4
// ============================================================================

window.COMPANY_DB = {
  // 4 Departments
  dept: [
    { deptno: 10, dname: "ACCOUNTING", loc: "NEW YORK" },
    { deptno: 20, dname: "RESEARCH",   loc: "DALLAS" },
    { deptno: 30, dname: "SALES",      loc: "CHICAGO" },
    { deptno: 40, dname: "OPERATIONS", loc: "BOSTON" }
  ],

  // 14 Employees (both supervisor and mgr aliases supported)
  emp: [
    { empno: 7369, ename: "SMITH",  job: "CLERK",     supervisor: 7902, mgr: 7902, hiredate: "1990-12-17", sal: 800.00,  comm: null,    deptno: 20 },
    { empno: 7499, ename: "ALLEN",  job: "SALESMAN",  supervisor: 7698, mgr: 7698, hiredate: "2001-02-20", sal: 1600.00, comm: 300.00,  deptno: 30 },
    { empno: 7521, ename: "WARD",   job: "SALESMAN",  supervisor: 7698, mgr: 7698, hiredate: "2001-02-22", sal: 1250.00, comm: 500.00,  deptno: 30 },
    { empno: 7566, ename: "JONES",  job: "MANAGER",   supervisor: 7839, mgr: 7839, hiredate: "2001-04-02", sal: 2975.00, comm: null,    deptno: 20 },
    { empno: 7654, ename: "MARTIN", job: "SALESMAN",  supervisor: 7698, mgr: 7698, hiredate: "2001-09-28", sal: 1250.00, comm: 1400.00, deptno: 30 },
    { empno: 7698, ename: "BLAKE",  job: "MANAGER",   supervisor: 7839, mgr: 7839, hiredate: "2010-05-01", sal: 2850.00, comm: null,    deptno: 30 },
    { empno: 7782, ename: "CLARK",  job: "MANAGER",   supervisor: 7839, mgr: 7839, hiredate: "1991-06-09", sal: 2450.00, comm: null,    deptno: 10 },
    { empno: 7788, ename: "SCOTT",  job: "ANALYST",   supervisor: 7566, mgr: 7566, hiredate: "2001-12-09", sal: 3000.00, comm: null,    deptno: 20 },
    { empno: 7839, ename: "KING",   job: "PRESIDENT", supervisor: null, mgr: null, hiredate: "2001-11-17", sal: 5000.00, comm: null,    deptno: 10 },
    { empno: 7844, ename: "TURNER", job: "SALESMAN",  supervisor: 7698, mgr: 7698, hiredate: "2001-09-08", sal: 1500.00, comm: 0.00,    deptno: 30 },
    { empno: 7876, ename: "ADAMS",  job: "CLERK",     supervisor: 7788, mgr: 7788, hiredate: "2003-01-12", sal: 1100.00, comm: null,    deptno: 20 },
    { empno: 7900, ename: "JAMES",  job: "CLERK",     supervisor: 7698, mgr: 7698, hiredate: "2001-12-03", sal: 950.00,  comm: null,    deptno: 30 },
    { empno: 7902, ename: "FORD",   job: "ANALYST",   supervisor: 7566, mgr: 7566, hiredate: "2006-12-03", sal: 3000.00, comm: null,    deptno: 20 },
    { empno: 7934, ename: "MILLER", job: "CLERK",     supervisor: 7782, mgr: 7782, hiredate: "2002-01-23", sal: 1300.00, comm: null,    deptno: 10 }
  ],

  // 5 Salary Grades
  salgrade: [
    { grade: 1, losal: 700.00,  hisal: 1200.00 },
    { grade: 2, losal: 1201.00, hisal: 1400.00 },
    { grade: 3, losal: 1401.00, hisal: 2000.00 },
    { grade: 4, losal: 2001.00, hisal: 3000.00 },
    { grade: 5, losal: 3001.00, hisal: 9999.00 }
  ],

  // 10 Real-Life Luxury Corporate Floors (15 questions each = 150 questions)
  sectors: [
    {
      id: 1,
      name: "FLOOR 1: MAIN RECEPTION & HR REGISTRY",
      subtitle: "SELECT basics, arithmetic, column aliases, and DISTINCT (1–15)",
      color: "#c8a96e",
      wallTop: "#26231f",
      wallBottom: "#332e28",
      floorColor: "#463c33",
      floorRange: [1, 15],
      range: [1, 15],
      roomTheme: "lobby"
    },
    {
      id: 2,
      name: "FLOOR 2: TALENT SCREENING DEPARTMENT",
      subtitle: "WHERE conditions, BETWEEN, IN, and operator precedence (16–30)",
      color: "#7c9a82",
      wallTop: "#1f2622",
      wallBottom: "#2a342e",
      floorColor: "#3d352e",
      floorRange: [16, 30],
      range: [16, 30],
      roomTheme: "hr_office"
    },
    {
      id: 3,
      name: "FLOOR 3: INTERNAL AUDIT & INSPECTION BUREAU",
      subtitle: "NULL values, three-valued logic, COALESCE, NULLIF, and IS DISTINCT FROM (31–45)",
      color: "#b89778",
      wallTop: "#25211e",
      wallBottom: "#352e29",
      floorColor: "#42382f",
      floorRange: [31, 45],
      range: [31, 45],
      roomTheme: "audit"
    },
    {
      id: 4,
      name: "FLOOR 4: CORPORATE ARCHIVES & RECORDS HALL",
      subtitle: "LIKE, ILIKE, ESCAPE, and string functions (46–60)",
      color: "#c49a6c",
      wallTop: "#27211c",
      wallBottom: "#382f27",
      floorColor: "#4a3c30",
      floorRange: [46, 60],
      range: [46, 60],
      roomTheme: "archive"
    },
    {
      id: 5,
      name: "FLOOR 5: FINANCE & TEMPORAL OFFICE",
      subtitle: "Math and date/time functions: ROUND, MOD, EXTRACT, AGE, TO_CHAR (61–75)",
      color: "#8fa89b",
      wallTop: "#1e2426",
      wallBottom: "#293236",
      floorColor: "#3e3630",
      floorRange: [61, 75],
      range: [61, 75],
      roomTheme: "finance"
    },
    {
      id: 6,
      name: "FLOOR 6: RANKINGS & QUEUING COUNCIL",
      subtitle: "ORDER BY, NULLS LAST, multi-level sorting, and LIMIT/OFFSET (76–90)",
      color: "#d1a772",
      wallTop: "#24201d",
      wallBottom: "#332c27",
      floorColor: "#453a31",
      floorRange: [76, 90],
      range: [76, 90],
      roomTheme: "boardroom"
    },
    {
      id: 7,
      name: "FLOOR 7: INTER-BRANCH OPERATIONS CENTER",
      subtitle: "Relational Algebra, INNER/LEFT/RIGHT/FULL JOIN, Self-Join, and Salgrade (91–105)",
      color: "#88a096",
      wallTop: "#1e2324",
      wallBottom: "#2a3133",
      floorColor: "#3b342d",
      floorRange: [91, 105],
      range: [91, 105],
      roomTheme: "operations"
    },
    {
      id: 8,
      name: "FLOOR 8: STRATEGIC BUDGET & ANALYTICS SUITE",
      subtitle: "COUNT, SUM, AVG, MIN, MAX, GROUP BY, HAVING, and CASE/FILTER (106–120)",
      color: "#c9a063",
      wallTop: "#26211c",
      wallBottom: "#362f28",
      floorColor: "#473b30",
      floorRange: [106, 120],
      range: [106, 120],
      roomTheme: "strategy"
    },
    {
      id: 9,
      name: "FLOOR 9: BOARD OF DIRECTORS SUITE",
      subtitle: "Subqueries (Scalar, IN, ANY/ALL, Correlated, EXISTS) and Set Operations (121–135)",
      color: "#b59273",
      wallTop: "#231e1c",
      wallBottom: "#332a27",
      floorColor: "#42362e",
      floorRange: [121, 135],
      range: [121, 135],
      roomTheme: "directors"
    },
    {
      id: 10,
      name: "FLOOR 10: EXECUTIVE PRESIDENTIAL PENTHOUSE",
      subtitle: "Window Functions (OVER, PARTITION BY, RANK, LAG) and CTEs (136–150)",
      color: "#d4af37",
      wallTop: "#1f1b18",
      wallBottom: "#2e2722",
      floorColor: "#3d3229",
      floorRange: [136, 150],
      range: [136, 150],
      roomTheme: "penthouse"
    }
  ],

  // Career Titles unlocked as player solves questions
  careerRanks: [
    { minSolved: 0,   title: "Intern Analyst",       salary: "$1,200/mo", badge: "🎓" },
    { minSolved: 15,  title: "Junior Data Specialist", salary: "$2,200/mo", badge: "💼" },
    { minSolved: 35,  title: "Mid-level SQL Engineer",   salary: "$3,800/mo", badge: "💻" },
    { minSolved: 60,  title: "Senior Data Architect",  salary: "$6,000/mo", badge: "🏛" },
    { minSolved: 90,  title: "Principal Systems Designer",            salary: "$9,500/mo", badge: "📊" },
    { minSolved: 120, title: "Vice President of Data",     salary: "$14,000/mo", badge: "🎖" },
    { minSolved: 145, title: "Chief Data Officer (CDO)",     salary: "$22,000/mo", badge: "👑" }
  ],

  // Interactive Real-Life Corporate Events ("Voqealiklar")
  officeEvents: [
    {
      id: "ev1",
      triggerAfterQuestion: 3,
      triggerAfterQ: 3,
      speaker: "CLARK",
      role: "10-Bo'lim Menejeri (Nyu-York)",
      avatar: "👔",
      title: "📞 Nyu-York Bosh Ofisidan Shoshilinch Xabar",
      narrative: "Clark stolingizga yaqinlashib, qog'oz jildni qo'ydi: 'Architect, choraklik moliyaviy tekshiruv boshlandi. Yosh tahlilchilar hisoblangan ustunlarda qavslarni unutib, yillik byudjetni 12 baravar xato chiqarishibdi! SQL da arifmetik amallar qaysi tartibda bajariladi?'",
      description: "Clark stolingizga yaqinlashib, qog'oz jildni qo'ydi: 'Architect, choraklik moliyaviy tekshiruv boshlandi. Yosh tahlilchilar hisoblangan ustunlarda qavslarni unutib, yillik byudjetni 12 baravar xato chiqarishibdi! SQL da arifmetik amallar qaysi tartibda bajariladi?'",
      choices: [
        {
          text: "Avval qavslar `()`, keyin ko'paytirish/bo'lish `* /`, va oxirida qo'shish/ayirish `+ -` bajariladi.",
          correct: true,
          bonus: 500,
          outcome: "Clark mamnun bosh irg'adi: 'Aynan shunday! Buxgalteriya sizga $500 mukofot yozdi!'"
        },
        {
          text: "Chapdan o'ngga qarab qaysi amal birinchi kelsa, o'sha birinchi bajariladi.",
          correct: false,
          bonus: 0,
          outcome: "Clark jilmayib tuzatdi: 'Yo'q, ko'paytirish va bo'lish qo'shishdan ustun turadi. Qavslar esa tartibni boshqaradi!'"
        }
      ]
    },
    {
      id: "ev2",
      triggerAfterQuestion: 15,
      triggerAfterQ: 15,
      speaker: "JONES",
      role: "20-Bo'lim Menejeri (Dallas)",
      avatar: "🔬",
      title: "☕ Dallas Tadqiqot Markazi Bilan Kofe-Breyk",
      narrative: "Kofe mashinasi yonida JONES sizga murojaat qildi: 'Bizning bo'limda FORD va SCOTT bir xil $3000 maosh oladi. HR bo'limi hisobotda takroriy lavozimlarni ko'rib adashib qolyapti. Agar `SELECT DISTINCT deptno, job` desak, `DISTINCT` faqat `deptno` ga ta'sir qiladimi yoki ikkalasigami?'",
      description: "Kofe mashinasi yonida JONES sizga murojaat qildi: 'Bizning bo'limda FORD va SCOTT bir xil $3000 maosh oladi. HR bo'limi hisobotda takroriy lavozimlarni ko'rib adashib qolyapti. Agar `SELECT DISTINCT deptno, job` desak, `DISTINCT` faqat `deptno` ga ta'sir qiladimi yoki ikkalasigami?'",
      choices: [
        {
          text: "Ikkala ustun kombinatsiyasiga! Ya'ni `(deptno, job)` juftligi sifatida takrorlanmas qatorlar qoladi.",
          correct: true,
          bonus: 500,
          outcome: "JONES qoyil qoldi: 'Aniq javob! Dallas jamoasi sizning nomzodingizni yuqori lavozimga tavsiya qiladi!'"
        },
        {
          text: "Faqat birinchi yozilgan `deptno` ustuniga ta'sir qiladi.",
          correct: false,
          bonus: 0,
          outcome: "JONES tushuntirdi: '`DISTINCT` butun tanlangan qator (barcha ko'rsatilgan ustunlar juftligi) bo'yicha dublikatlarni olib tashlaydi.'"
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
      title: "🚨 Chikago Sotuv Bo'limida Favqulodda Vaziyat!",
      narrative: "BLAKE xonaga shoshib kirib keldi: 'Architect! Bizning sotuvchimiz TURNER bu oy $0 komissiya olgan (`comm = 0`). Qolgan 10 ta xodimda esa komissiya umuman belgilanmagan (`NULL`). Auditorlar komissiyasi 300 ga teng bo'lmagan BARCHA xodimlarni so'rashganda, stajyor `WHERE comm <> 300` deb yozib, atigi 3 kishini chiqaribdi! Qolgan 10 kishi qani?!'",
      description: "BLAKE xonaga shoshib kirib keldi: 'Architect! Bizning sotuvchimiz TURNER bu oy $0 komissiya olgan (`comm = 0`). Qolgan 10 ta xodimda esa komissiya umuman belgilanmagan (`NULL`). Auditorlar komissiyasi 300 ga teng bo'lmagan BARCHA xodimlarni so'rashganda, stajyor `WHERE comm <> 300` deb yozib, atigi 3 kishini chiqaribdi! Qolgan 10 kishi qani?!'",
      choices: [
        {
          text: "Chunki `NULL <> 300` natijasi `TRUE` emas, `UNKNOWN` bo'ladi va `WHERE` ularni tashlab ketadi! `IS DISTINCT FROM 300` yoki `OR comm IS NULL` kerak.",
          correct: true,
          bonus: 750,
          outcome: "BLAKE qo'lingizni siqdi: 'Siz bizni jarimadan qutqardingiz! Mana haqiqiy Arxitektor!'"
        },
        {
          text: "Bazadagi ma'lumotlar o'chib ketgan bo'lishi kerak.",
          correct: false,
          bonus: 0,
          outcome: "BLAKE bosh chayqadi: 'Ma'lumotlar joyida, faqat SQL ning 3-qiymatli mantiqida `NULL <> 300` noma'lum (`UNKNOWN`) qaytaradi!'"
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
      title: "💥 Buxgalteriya Serverida 'Division By Zero' Xatosi",
      narrative: "TURNER xijolat bo'lib stolingiz yoniga keldi: 'Kechirasiz, mening komissiyam `0` bo'lgani uchun (`comm = 0`), maoshni komissiyaga bo'lganda (`sal / comm`) butun hisobot dasturi qulab tushyapti. Meni ishdan bo'shatishmasdan oldin shuni xatosiz ishlaydigan qila olasizmi?'",
      description: "TURNER xijolat bo'lib stolingiz yoniga keldi: 'Kechirasiz, mening komissiyam `0` bo'lgani uchun (`comm = 0`), maoshni komissiyaga bo'lganda (`sal / comm`) butun hisobot dasturi qulab tushyapti. Meni ishdan bo'shatishmasdan oldin shuni xatosiz ishlaydigan qila olasizmi?'",
      choices: [
        {
          text: "Albatta! `sal / NULLIF(comm, 0)` yozamiz — agar `comm` 0 bo'lsa, u `NULL` ga aylanadi va xato bermasdan `NULL` qaytaradi.",
          correct: true,
          bonus: 750,
          outcome: "TURNER yengil nafas oldi: 'Rahmat sizga! Server endi hech qachon qulamaydi!'"
        },
        {
          text: "`COALESCE(comm, 0)` ishlatsak muammo hal bo'ladi.",
          correct: false,
          bonus: 0,
          outcome: "`COALESCE(comm, 0)` aksincha `NULL` larni ham `0` ga aylantirib, nolga bo'lish xatosini ko'paytiradi! `NULLIF(comm, 0)` kerak."
        }
      ]
    },
    {
      id: "ev5",
      triggerAfterQuestion: 75,
      triggerAfterQ: 75,
      speaker: "FORD & SCOTT",
      role: "Katta Tahlilchilar (Dallas)",
      avatar: "📊",
      title: "📂 Arxivdagi Yashirin Probellar Siri",
      narrative: "FORD noutbukini sizga ko'rsatdi: 'Biz Payshanba kuni ishga kirgan xodimlarni topish uchun `WHERE TO_CHAR(hiredate, 'Day') = 'Thursday'` deb yozdik, ammo natija 0 ta qator chiqyapti! Vaholanki jadvalda Payshanba kuni kirganlar bor. Sababi nimada?'",
      description: "FORD noutbukini sizga ko'rsatdi: 'Biz Payshanba kuni ishga kirgan xodimlarni topish uchun `WHERE TO_CHAR(hiredate, 'Day') = 'Thursday'` deb yozdik, ammo natija 0 ta qator chiqyapti! Vaholanki jadvalda Payshanba kuni kirganlar bor. Sababi nimada?'",
      choices: [
        {
          text: "`'Day'` formati satr oxiriga 9 ta belgigacha bo'sh probellar qo'shadi (`'Thursday '`). Probellarni o'chirish uchun `'FMDay'` (Fill Mode) yozish shart!",
          correct: true,
          bonus: 1000,
          outcome: "SCOTT qarsak chaldi: 'Qoyil! `FM` modifikatori haqida faqat tajribali ustalar biladi!'"
        },
        {
          text: "PostgreSQL da kun nomlari kichik harflarda saqlanadi, shuning uchun 'thursday' yozish kerak.",
          correct: false,
          bonus: 0,
          outcome: "FORD eslatdi: 'Asosiy sabab — formatning 9 ta katakni to'ldirib probel qo'shishidadir. `FM` (Fill Mode) shuni tozalaydi.'"
        }
      ]
    },
    {
      id: "ev6",
      triggerAfterQuestion: 105,
      triggerAfterQ: 105,
      speaker: "Tashqi Auditor Smit",
      role: "Xalqaro Audit Tekshiruvchisi",
      avatar: "🔍",
      title: "📑 Tashqi Taftish: 40-Bo'lim Tuzog'i",
      narrative: "Auditor qattiq ohangda so'radi: 'Kompaniyangizda 4 ta bo'lim bor, lekin `OPERATIONS` (40-bo'limda) hech kim ishlamaydi. Nega oddiy `LEFT JOIN` qilib `COUNT(*)` hisoblagan hisobotda 40-bo'lim uchun 1 ta xodim deb ko'rsatilgan?!'",
      description: "Auditor qattiq ohangda so'radi: 'Kompaniyangizda 4 ta bo'lim bor, lekin `OPERATIONS` (40-bo'limda) hech kim ishlamaydi. Nega oddiy `LEFT JOIN` qilib `COUNT(*)` hisoblagan hisobotda 40-bo'lim uchun 1 ta xodim deb ko'rsatilgan?!'",
      choices: [
        {
          text: "Chunki `COUNT(*)` jadvaldagi bo'sh `NULL` qatorni ham 1 ta qator deb sanab yuboradi! `COUNT(e.empno)` ishlatilsa, u to'g'ri `0` chiqaradi.",
          correct: true,
          bonus: 1200,
          outcome: "Auditor tabassum qildi: 'A'lo darajada! Xalqaro audit sertifikatiga loyiqsiz!'"
        },
        {
          text: "`LEFT JOIN` o'rniga `INNER JOIN` ishlatsak 0 chiqadi.",
          correct: false,
          bonus: 0,
          outcome: "Auditor tushuntirdi: '`INNER JOIN` 40-bo'limni umuman yo'qotib yuboradi (0 qator). To'g'ri yo'li — `LEFT JOIN` va `COUNT(e.empno)`!'"
        }
      ]
    },
    {
      id: "ev7",
      triggerAfterQuestion: 135,
      triggerAfterQ: 135,
      speaker: "KING",
      role: "Bosh Direktor & Prezident",
      avatar: "👑",
      title: "👑 Penthouse Kengashi: `LAST_VALUE` Oyna Chegarasi Siri",
      narrative: "Direktorlar kengashida Prezident KING sizga yuzlandi: 'Har bir xodimning yonida o'z bo'limidagi eng oxirgi maoshni ko'rish uchun `LAST_VALUE(sal) OVER (PARTITION BY deptno ORDER BY sal)` yozilsa, nega u bo'limning oxirgi qiymatini emas, har bir xodimning o'z maoshini qaytarib qo'yadi?'",
      description: "Direktorlar kengashida Prezident KING sizga yuzlandi: 'Har bir xodimning yonida o'z bo'limidagi eng oxirgi maoshni ko'rish uchun `LAST_VALUE(sal) OVER (PARTITION BY deptno ORDER BY sal)` yozilsa, nega u bo'limning oxirgi qiymatini emas, har bir xodimning o'z maoshini qaytarib qo'yadi?'",
      choices: [
        {
          text: "Chunki `ORDER BY` qo'shilganda standart oyna chegarasi `CURRENT ROW` (joriy qator) da tugaydi! Uni `ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING` deb oxirigacha ochish shart.",
          correct: true,
          bonus: 2000,
          outcome: "Butun Direktorlar Kengashi o'rnidan turib olqishladi! Sizga Korporativ Bosh Texnik Direktor (CDO) maqomi taqdim etiladi!"
        },
        {
          text: "`LAST_VALUE` funksiyasi PostgreSQL da faqat sanalar uchun ishlaydi.",
          correct: false,
          bonus: 0,
          outcome: "Prezident KING eslatdi: 'Gap standart oyna ramkasining (`CURRENT ROW`) joriy qatorda tugashidadir!'"
        }
      ]
    }
  ]
};

// ============================================================================
// COMPREHENSIVE IN-MEMORY SQL PARSER & ERROR DIAGNOSTICS ENGINE
// ============================================================================

window.SQL_GRADER = {
  // Normalize whitespace, casing and known dialect aliases
  normalizeSQL(sql) {
    if (!sql) return "";
    let s = sql
      .replace(/--.*$/gm, " ")
      .replace(/\/\*[\s\S]*?\*\//g, " ")
      .trim()
      .replace(/;+\s*$/g, "")
      .replace(/[‘’]/g, "'")
      .replace(/[“”]/g, '"')
      .replace(/!=/g, "<>")
      .replace(/\bmgr\b/gi, "supervisor")
      .replace(/\bLEFT\s+OUTER\s+JOIN\b/gi, "LEFT JOIN")
      .replace(/\bRIGHT\s+OUTER\s+JOIN\b/gi, "RIGHT JOIN")
      .replace(/\bFULL\s+OUTER\s+JOIN\b/gi, "FULL JOIN")
      .replace(/\bINNER\s+JOIN\b/gi, "JOIN")
      .replace(/\bSOME\s*\(/gi, "ANY (")
      .replace(/\s*\(\s*/g, "(")
      .replace(/\s*\)\s*/g, ")")
      .replace(/\b(where|from|join|and|or|select|with|not|in)\(/gi, "$1 (")
      .replace(/\s*,\s*/g, ", ")
      .replace(/\s*=\s*/g, " = ")
      .replace(/\s*<>\s*/g, " <> ")
      .replace(/\s*>=\s*/g, " >= ")
      .replace(/\s*<=\s*/g, " <= ")
      .replace(/\s*>\s*/g, " > ")
      .replace(/\s*<\s*/g, " < ")
      .replace(/<\s+>/g, "<>")
      .replace(/>\s+=/g, ">=")
      .replace(/<\s+=/g, "<=")
      .replace(/:\s*:/g, "::")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();
    return s;
  },

  stripTableAliases(normSql) {
    return normSql
      .replace(/\b(emp|dept|salgrade|e|d|s|m)\./g, "")
      .replace(/\b(from|join)\s+(emp|dept|salgrade)\s+(?:as\s+)?[a-z0-9_]+\b/gi, "$1 $2");
  },

  stripOptionalAliases(normSql) {
    return normSql
      .replace(/\s+as\s+("[a-z0-9_ ]+"|[a-z0-9_]+)/gi, "")
      .replace(/\s*\(\s*/g, "(")
      .replace(/\s*\)\s*/g, ")");
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

    // 4. FROM clause exists if not a pure scalar SELECT
    if (!/\bFROM\b/i.test(trimmed) && !/^\s*SELECT\s+[\d\s\+\-\*\/]+\s*;?\s*$/i.test(trimmed)) {
      return "Sintaksis xatosi: 'FROM' bandi yetishmayapti. Qaysi jadvaldan (`emp`, `dept`, `salgrade`) tanlayotganingizni ko'rsating.";
    }

    // 5. Check Table Names
    const fromMatches = trimmed.matchAll(/\b(?:FROM|JOIN)\s+([a-zA-Z0-9_]+)/gi);
    const validTables = new Set(["emp", "dept", "salgrade"]);
    for (const m of fromMatches) {
      const tbl = m[1].toLowerCase();
      // Ignore CTE names or subquery aliases
      if (/\b(?:as|ranked|org|chain|d|e|s|m)\b/i.test(tbl)) continue;
      if (!validTables.has(tbl) && !/^\(/.test(tbl)) {
        if (tbl === "employee" || tbl === "employees" || tbl === "empp") {
          return `Jadval topilmadi: '${m[1]}' nomli jadval yo'q. Xodimlar jadvali 'emp' deb nomlanadi.`;
        }
        if (tbl === "department" || tbl === "departments" || tbl === "dep") {
          return `Jadval topilmadi: '${m[1]}' nomli jadval yo'q. Bo'limlar jadvali 'dept' deb nomlanadi.`;
        }
      }
    }

    // 6. Check common Column typos in simple queries
    const words = trimmed.match(/[a-zA-Z_][a-zA-Z0-9_]*/g) || [];
    const validCols = new Set([
      "empno", "ename", "job", "supervisor", "mgr", "hiredate", "sal", "comm", "deptno",
      "dname", "loc", "grade", "losal", "hisal",
      "select", "from", "where", "order", "by", "group", "having", "join", "left", "right",
      "full", "outer", "inner", "cross", "on", "as", "asc", "desc", "limit", "offset",
      "distinct", "between", "and", "or", "not", "in", "like", "ilike", "is", "null",
      "first", "last", "nulls", "case", "when", "then", "else", "end", "with", "recursive",
      "union", "all", "intersect", "except", "over", "partition", "rows", "unbounded",
      "preceding", "following", "current", "row", "range"
    ]);

    for (const w of words) {
      const lw = w.toLowerCase();
      if (/^(slary|sallary|salary)$/i.test(lw)) {
        return "Ustun xatosi: Maosh ustuni 'salary' emas, qisqartirilgan 'sal' deb nomlangan.";
      }
      if (/^(empname|employeename|name)$/i.test(lw) && !/\bAS\s+name\b/i.test(trimmed)) {
        return "Ustun xatosi: Ism ustuni 'name' emas, 'ename' (Employee Name) deb nomlangan.";
      }
      if (/^(depno|department_id|dept_no)$/i.test(lw)) {
        return "Ustun xatosi: Bo'lim raqami ustuni 'deptno' deb nomlangan.";
      }
    }

    // 7. 3-Valued Logic trap: = NULL or <> NULL
    if (/(=|<>|!=)\s*NULL\b/i.test(trimmed)) {
      return "⚠️ 3-Qiymatli Mantiq (NULL Tuzog'i): SQL da '= NULL' har doim UNKNOWN qaytaradi va 0 ta qator chiqadi! 'IS NULL' yoki 'IS NOT NULL' dan foydalaning.";
    }

    // 8. Aggregate inside WHERE trap
    const upper = trimmed.toUpperCase();
    const wherePart = upper.split(/\bGROUP\s+BY\b|\bHAVING\b|\bORDER\s+BY\b/)[0];
    if (/\bWHERE\b/.test(wherePart)) {
      const afterWhere = wherePart.split(/\bWHERE\b/).slice(1).join(" ");
      if (!/\bSELECT\b/.test(afterWhere) && /\b(COUNT|SUM|AVG|MIN|MAX)\s*\(/i.test(afterWhere)) {
        return "⚠️ Diqqat: WHERE bandida agregat funksiyani (COUNT, AVG, SUM...) to'g'ridan-to'g'ri ishlatib bo'lmaydi! Buning o'rniga GROUP BY dan so'ng HAVING bandidan foydalaning.";
      }
    }

    // 9. Column alias inside WHERE trap (only check inside the WHERE clause itself)
    if (!/\bWITH\b/i.test(trimmed) && !/\(\s*SELECT\b/i.test(trimmed)) {
      const whereMatch = trimmed.match(/\bWHERE\b\s+([\s\S]+?)(?:\bGROUP\s+BY\b|\bHAVING\b|\bORDER\s+BY\b|\bLIMIT\b|;|$)/i);
      if (whereMatch) {
        const whereClauseText = whereMatch[1];
        const selectPartMatch = trimmed.match(/\bSELECT\b\s+([\s\S]+?)\bFROM\b/i);
        if (selectPartMatch) {
          const selectPart = selectPartMatch[1];
          const aliasMatches = selectPart.matchAll(/\bAS\s+([a-zA-Z0-9_]+)\b/gi);
          for (const am of aliasMatches) {
            const aliasName = am[1];
            if (new RegExp(`\\b${aliasName}\\b`, "i").test(whereClauseText)) {
              return `⚠️ Diqqat: WHERE bandi SELECT dan oldin bajariladi! Shuning uchun '${aliasName}' ustun taxallusi WHERE ichida hali mavjud emas. Hisoblash ifodasining o'zini WHERE da yozing.`;
            }
          }
        }
      }
    }

    // 10. Question-specific trap checks
    if (question.trapChecks && Array.isArray(question.trapChecks)) {
      for (const tc of question.trapChecks) {
        if (tc.regex && tc.regex.test(trimmed)) {
          return tc.message;
        }
        if (tc.mustContain && !tc.mustContain.test(trimmed)) {
          return tc.message;
        }
      }
    }

    return null;
  },

  // Helper to split SQL condition string by top-level AND / OR (respecting parentheses)
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

  // Evaluates a WHERE condition on an in-memory row
  evalRowCondition(row, cond) {
    if (!cond || !cond.trim()) return true;
    let c = cond.trim().replace(/\b(emp|dept|salgrade|e|d|s|m)\./gi, "");

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

    // Check OR
    const orParts = this.splitTopLevel(c, "or");
    if (orParts.length > 1) {
      return orParts.some(part => this.evalRowCondition(row, part));
    }

    // Check AND
    const andParts = this.splitTopLevel(c, "and");
    if (andParts.length > 1) {
      return andParts.every(part => this.evalRowCondition(row, part));
    }

    // Handle NOT
    if (/^not\s+/i.test(c)) {
      return !this.evalRowCondition(row, c.replace(/^not\s+/i, ""));
    }

    // IS NULL / IS NOT NULL
    let m = c.match(/^([a-z0-9_]+)\s+is\s+not\s+null$/i);
    if (m) {
      const val = row[m[1].toLowerCase()];
      return val !== null && val !== undefined && val !== "NULL";
    }
    m = c.match(/^([a-z0-9_]+)\s+is\s+null$/i);
    if (m) {
      const val = row[m[1].toLowerCase()];
      return val === null || val === undefined || val === "NULL";
    }

    // BETWEEN a AND b
    m = c.match(/^([a-z0-9_]+)\s+between\s+(-?\d+(?:\.\d+)?)\s+and\s+(-?\d+(?:\.\d+)?)$/i);
    if (m) {
      const val = Number(row[m[1].toLowerCase()]);
      const low = Number(m[2]), high = Number(m[3]);
      return val >= low && val <= high;
    }

    // IN (...)
    m = c.match(/^([a-z0-9_]+)\s+(not\s+)?in\s*\((.+?)\)$/i);
    if (m) {
      const col = m[1].toLowerCase();
      const isNot = !!m[2];
      const items = m[3].split(",").map(s => s.trim().replace(/^['"]|['"]$/g, "").toUpperCase());
      const val = String(row[col] ?? "").toUpperCase();
      const has = items.includes(val);
      return isNot ? !has : has;
    }

    // LIKE / ILIKE
    m = c.match(/^([a-z0-9_]+)\s+(?:i?like)\s*'([^']*)'$/i);
    if (m) {
      const col = m[1].toLowerCase();
      const pattern = m[2];
      const regexStr = "^" + pattern.replace(/%/g, ".*").replace(/_/g, ".") + "$";
      const reg = new RegExp(regexStr, "i");
      return reg.test(String(row[col] ?? ""));
    }

    // Binary comparison operators (=, <>, !=, >=, <=, >, <)
    m = c.match(/^(.+?)\s*(=|<>|!=|>=|<=|>|<)\s*(.+)$/);
    if (m) {
      const leftRaw = m[1].trim();
      const op = m[2] === "!=" ? "<>" : m[2];
      const rightRaw = m[3].trim();

      const getVal = (token) => {
        if (/^'[^']*'$/.test(token)) return token.slice(1, -1).toUpperCase();
        if (/^-?\d+(?:\.\d+)?$/.test(token)) return Number(token);
        const col = token.toLowerCase().replace(/^[a-z0-9_]+\./, "");
        if (row[col] !== undefined) {
          if (typeof row[col] === "string") return row[col].toUpperCase();
          return row[col];
        }
        return token;
      };

      const lVal = getVal(leftRaw);
      const rVal = getVal(rightRaw);

      if (lVal === null || rVal === null || lVal === undefined || rVal === undefined) return false;
      if (op === "=") return lVal === rVal;
      if (op === "<>") return lVal !== rVal;
      if (op === ">") return lVal > rVal;
      if (op === "<") return lVal < rVal;
      if (op === ">=") return lVal >= rVal;
      if (op === "<=") return lVal <= rVal;
    }

    return true;
  },

  // Robust In-Memory SQL Executor for Company Database
  executeSQL(rawSql, db) {
    try {
      const norm = this.normalizeSQL(rawSql);
      if (!norm || !db) return null;

      const fromMatch = norm.match(/\bfrom\s+([a-zA-Z0-9_]+)(?:\s+(?:as\s+)?[a-zA-Z0-9_]+)?/i);
      if (!fromMatch) return null;

      const mainTable = fromMatch[1].toLowerCase();
      let rows = [];
      if (mainTable === "emp") {
        rows = db.emp.map(e => ({ ...e }));
      } else if (mainTable === "dept") {
        rows = db.dept.map(d => ({ ...d }));
      } else if (mainTable === "salgrade") {
        rows = db.salgrade.map(s => ({ ...s }));
      } else {
        return null;
      }

      // Handle simple JOINs
      if (/\bjoin\s+dept\b/i.test(norm)) {
        rows = rows.map(e => {
          const d = db.dept.find(dept => dept.deptno === e.deptno);
          return d ? { ...e, dname: d.dname, loc: d.loc } : e;
        });
      }
      if (/\bjoin\s+salgrade\b/i.test(norm)) {
        rows = rows.map(e => {
          const s = db.salgrade.find(sg => e.sal >= sg.losal && e.sal <= sg.hisal);
          return s ? { ...e, grade: s.grade, losal: s.losal, hisal: s.hisal } : e;
        });
      }
      if (/\bjoin\s+emp\b/i.test(norm) && (/\bsupervisor\b/i.test(norm) || /\bmgr\b/i.test(norm))) {
        rows = rows.map(e => {
          const m = db.emp.find(emp => emp.empno === e.supervisor);
          return m ? { ...e, mgr_ename: m.ename, supervisor_name: m.ename } : e;
        });
      }

      // Handle WHERE
      const whereMatch = norm.match(/\bwhere\s+([\s\S]+?)(?:\bgroup\s+by\b|\bhaving\b|\border\s+by\b|\blimit\b|;|$)/i);
      if (whereMatch) {
        const whereClause = whereMatch[1].trim();
        rows = rows.filter(r => this.evalRowCondition(r, whereClause));
      }

      // Handle GROUP BY and Aggregates
      const groupByMatch = norm.match(/\bgroup\s+by\s+([a-zA-Z0-9_,\s]+?)(?:\bhaving\b|\border\s+by\b|\blimit\b|;|$)/i);
      const isAgg = /\b(count|sum|avg|min|max)\s*\(/i.test(norm);
      if (groupByMatch || isAgg) {
        const groupCols = groupByMatch
          ? groupByMatch[1].split(",").map(c => c.trim().replace(/^[a-zA-Z0-9_]+\./, "").toLowerCase())
          : [];

        const groups = new Map();
        if (groupCols.length === 0) {
          groups.set("__ALL__", rows);
        } else {
          rows.forEach(r => {
            const key = groupCols.map(c => r[c]).join("___");
            if (!groups.has(key)) groups.set(key, []);
            groups.get(key).push(r);
          });
        }

        const groupedRows = [];
        for (const [, items] of groups.entries()) {
          const first = items[0] || {};
          const gRow = { ...first };
          gRow["count(*)"] = items.length;
          gRow["count"] = items.length;
          const sumSal = items.reduce((acc, x) => acc + (x.sal || 0), 0);
          gRow["sum(sal)"] = sumSal;
          gRow["avg(sal)"] = items.length ? Math.round((sumSal / items.length) * 100) / 100 : 0;
          gRow["round(avg(sal), 2)"] = gRow["avg(sal)"];
          gRow["min(sal)"] = items.length ? Math.min(...items.map(x => x.sal || 0)) : 0;
          gRow["max(sal)"] = items.length ? Math.max(...items.map(x => x.sal || 0)) : 0;
          groupedRows.push(gRow);
        }
        rows = groupedRows;

        // HAVING
        const havingMatch = norm.match(/\bhaving\s+([\s\S]+?)(?:\border\s+by\b|\blimit\b|;|$)/i);
        if (havingMatch) {
          const havingClause = havingMatch[1].trim();
          rows = rows.filter(r => this.evalRowCondition(r, havingClause));
        }
      }

      // Handle ORDER BY
      const orderMatch = norm.match(/\border\s+by\s+([\s\S]+?)(?:\blimit\b|;|$)/i);
      if (orderMatch) {
        const orderClause = orderMatch[1].trim();
        const orderDirectives = orderClause.split(",").map(od => {
          const parts = od.trim().split(/\s+/);
          const col = parts[0].replace(/^[a-zA-Z0-9_]+\./, "").toLowerCase();
          const isDesc = od.toLowerCase().includes("desc");
          return { col, isDesc };
        });

        rows.sort((a, b) => {
          for (const { col, isDesc } of orderDirectives) {
            const valA = a[col];
            const valB = b[col];
            if (valA === valB) continue;
            if (valA === null || valA === undefined) return isDesc ? -1 : 1;
            if (valB === null || valB === undefined) return isDesc ? 1 : -1;
            if (typeof valA === "number" && typeof valB === "number") {
              return isDesc ? valB - valA : valA - valB;
            }
            const comp = String(valA).localeCompare(String(valB));
            if (comp !== 0) return isDesc ? -comp : comp;
          }
          return 0;
        });
      }

      // Handle LIMIT & OFFSET
      const limitMatch = norm.match(/\blimit\s+(\d+)(?:\s+offset\s+(\d+))?/i);
      if (limitMatch) {
        const lim = parseInt(limitMatch[1], 10);
        const off = limitMatch[2] ? parseInt(limitMatch[2], 10) : 0;
        rows = rows.slice(off, off + lim);
      }

      // Handle SELECT column projections
      const selectPartMatch = norm.match(/^select\s+(distinct\s+)?([\s\S]+?)\bfrom\b/i);
      let isDistinct = false;
      let rawCols = "*";
      if (selectPartMatch) {
        isDistinct = !!selectPartMatch[1];
        rawCols = selectPartMatch[2].trim();
      }

      let cols = [];
      if (rawCols.includes("*")) {
        cols = mainTable === "dept"
          ? ["deptno", "dname", "loc"]
          : mainTable === "salgrade"
          ? ["grade", "losal", "hisal"]
          : ["empno", "ename", "job", "supervisor", "hiredate", "sal", "comm", "deptno"];
      } else {
        cols = rawCols.split(",").map(c => {
          return c.trim()
            .split(/\s+as\s+/i)[0]
            .replace(/^["']|["']$/g, "")
            .replace(/^[a-zA-Z0-9_]+\./, "");
        });
      }

      let resRows = rows.map(r => {
        return cols.map(c => {
          const lc = c.toLowerCase();
          if (r[lc] !== undefined) return r[lc];
          if (r[c] !== undefined) return r[c];
          if (/\bsal\s*\*\s*12\b/i.test(c) && r.sal !== undefined) return r.sal * 12;
          if (/\bsal\s*\+\s*500\b/i.test(c) && r.sal !== undefined) return r.sal + 500;
          if (/\bround\s*\(\s*sal\s*\*\s*1\.1/i.test(c) && r.sal !== undefined) return Math.round(r.sal * 1.1 * 100) / 100;
          return "NULL";
        });
      });

      if (isDistinct) {
        const seen = new Set();
        const distinctRows = [];
        resRows.forEach(r => {
          const key = JSON.stringify(r);
          if (!seen.has(key)) {
            seen.add(key);
            distinctRows.push(r);
          }
        });
        resRows = distinctRows;
      }

      return {
        columns: cols,
        rows: resRows,
        matchedEmpnos: rows.map(r => r.empno).filter(Boolean)
      };
    } catch (e) {
      return null;
    }
  },

  // Deep Result Comparison (Row-by-Row, Count, and Permutation Tolerance)
  compareResults(userRes, expectedRes, question) {
    if (!userRes || !expectedRes) return null;

    const uRows = userRes.rows || [];
    const eRows = expectedRes.rows || [];
    const uCols = userRes.columns || [];
    const eCols = expectedRes.columns || [];

    // 1. Check Row Count
    if (uRows.length !== eRows.length) {
      if (uRows.length === 0) {
        return `So'rovingiz 0 ta qator qaytardi (bo'sh to'plam). Lekin topshiriqda ${eRows.length} ta qator kutilgan edi. WHERE filtrlash shartidagi taqqoslash belgilari yoki qiymatlarni qayta tekshiring.`;
      }
      if (uRows.length === 14 && eRows.length < 14) {
        return `So'rovingiz barcha 14 ta xodimni qaytardi. Topshiriq shartidagi WHERE filtrlash shartini yozishni unutmadingizmi?`;
      }
      return `Qatorlar soni mos kelmadi: sizning so'rovingiz ${uRows.length} ta qator chiqardi, lekin kutilgan natijada ${eRows.length} ta qator bo'lishi kerak.`;
    }

    // 2. Check Columns
    const empAllCols = ["empno", "ename", "job", "supervisor", "hiredate", "sal", "comm", "deptno"];
    const isUserAllEmp = uCols.length === 8 && empAllCols.every(c => uCols.map(x => x.toLowerCase()).includes(c));
    const isExpectedEmp = eCols.every(c => empAllCols.includes(c.toLowerCase()));
    const allowEmpWildcard = isUserAllEmp && isExpectedEmp;

    if (uCols.length !== eCols.length && !question.flexibleColumns && !allowEmpWildcard) {
      return `Ustunlar soni mos kelmadi: siz ${uCols.length} ta ustun chiqardingiz, kutilgan natijada esa ${eCols.length} ta ustun bo'lishi kerak ([${eCols.join(", ")}]).`;
    }

    // 3. String representation comparison (projecting onto common columns if wildcard)
    let serializeRow = (r) => r.map(c => String(c).trim().toUpperCase()).join("|");
    if (allowEmpWildcard) {
      const uColIndices = eCols.map(c => uCols.findIndex(x => x.toLowerCase() === c.toLowerCase()));
      serializeRow = (r) => uColIndices.map(idx => String(r[idx] ?? "").trim().toUpperCase()).join("|");
    }

    const uSerialized = uRows.map(serializeRow);
    const eSerialized = eRows.map(r => r.map(c => String(c).trim().toUpperCase()).join("|"));

    // Exact order match
    const exactMatch = uSerialized.every((val, idx) => val === eSerialized[idx]);
    if (exactMatch) {
      return { matches: true };
    }

    // Unordered set match (multiset equality)
    const uSorted = [...uSerialized].sort();
    const eSorted = [...eSerialized].sort();
    const setMatch = uSorted.every((val, idx) => val === eSorted[idx]);

    if (setMatch) {
      if (/order\s+by/i.test(question.solutions?.[0] || "")) {
        return "Qatorlar to'g'ri tanlangan, lekin saralash tartibi noto'g'ri! 'ORDER BY' bandi va ASC / DESC saralash yo'nalishini tekshiring.";
      }
      return { matches: true };
    }

    return "Qaytarilgan ma'lumotlar kutilgan natijadan farq qiladi. 'Kutilayotgan Natija' tugmasi orqali to'g'ri jadval ko'rinishini tekshirib oling.";
  },

  // Main Comprehensive Grader
  grade(rawSql, question) {
    // Step 1: Pinpoint Syntax & Lexical Validation
    const diagMsg = this.detectDiagnostics(rawSql, question);
    if (diagMsg) {
      return { passed: false, feedback: diagMsg };
    }

    const normUser = this.normalizeSQL(rawSql);
    const normUserNoAlias = this.stripTableAliases(normUser);
    const normUserNoColAlias = this.stripOptionalAliases(normUserNoAlias);

    // Step 2: Direct match against official solution variations
    if (question.solutions && question.solutions.length > 0) {
      for (const sol of question.solutions) {
        const normSol = this.normalizeSQL(sol);
        const normSolNoAlias = this.stripTableAliases(normSol);
        const normSolNoColAlias = this.stripOptionalAliases(normSolNoAlias);
        if (
          normUser === normSol ||
          normUserNoAlias === normSolNoAlias ||
          (!question.strictAlias && normUserNoColAlias === normSolNoColAlias)
        ) {
          return {
            passed: true,
            feedback: question.explanation || "Query verified! SQL query is correctly structured."
          };
        }
      }
    }

    // Step 3: Required Patterns check
    if (question.requiredPatterns && question.requiredPatterns.length > 0) {
      const allMatched = question.requiredPatterns.every((pat) => {
        if (pat instanceof RegExp) {
          return pat.test(rawSql) || pat.test(normUser);
        }
        if (Array.isArray(pat)) {
          return pat.some((sub) =>
            sub instanceof RegExp
              ? sub.test(rawSql) || sub.test(normUser)
              : normUser.includes(sub.toLowerCase())
          );
        }
        return normUser.includes(String(pat).toLowerCase());
      });

      const forbiddenHit =
        question.forbiddenPatterns &&
        question.forbiddenPatterns.some((f) =>
          f instanceof RegExp ? f.test(rawSql) || f.test(normUser) : normUser.includes(String(f).toLowerCase())
        );

      if (allMatched && !forbiddenHit) {
        return {
          passed: true,
          feedback: question.explanation || "Query verified! All conditions satisfied."
        };
      }
    }

    // Step 4: Execute on in-memory DB and compare with Expected Result
    const expected = this.getExpectedResult(question);
    const userRes = this.executeSQL(rawSql, window.COMPANY_DB);

    if (userRes && expected) {
      const comp = this.compareResults(userRes, expected, question);
      if (comp && comp.matches) {
        return {
          passed: true,
          feedback: question.explanation || "Query verified! Expected result set returned."
        };
      } else if (typeof comp === "string") {
        return { passed: false, feedback: comp };
      }
    }

    // Step 5: Helpful contextual feedback based on missing parts
    let hintFeedback = "So'rovda kamchilik bor.";
    if (!/\bWHERE\b/i.test(rawSql) && /\bwhere\b/i.test(question.solutions?.[0] || "")) {
      hintFeedback = "Filtering condition required. Did you include the 'WHERE' clause?";
    } else if (!/\bORDER\s+BY\b/i.test(rawSql) && /\border\s+by\b/i.test(question.solutions?.[0] || "")) {
      hintFeedback = "Sorting required. Please add the 'ORDER BY' clause to the end of the query.";
    } else if (!/\bJOIN\b/i.test(rawSql) && /\bjoin\b/i.test(question.solutions?.[0] || "")) {
      hintFeedback = "Table joining required. Check your 'JOIN ... ON ...' syntax.";
    } else if (!/\bGROUP\s+BY\b/i.test(rawSql) && /\bgroup\s+by\b/i.test(question.solutions?.[0] || "")) {
      hintFeedback = "Aggregation grouping required. Please add the 'GROUP BY' clause.";
    } else {
      hintFeedback = "Query output does not match expected result. Check selected columns, WHERE filters, or ORDER BY clauses. Use 'Hint' if needed.";
    }

    return {
      passed: false,
      feedback: hintFeedback
    };
  },

  getExpectedResult(question) {
    if (typeof question.resultBuilder === "function") {
      return question.resultBuilder(window.COMPANY_DB);
    }
    const emp = window.COMPANY_DB.emp;
    const matched = question.matchedEmpnos
      ? emp.filter(e => question.matchedEmpnos.includes(e.empno))
      : emp;
    return {
      columns: ["empno", "ename", "job", "sal", "deptno"],
      rows: matched.slice(0, 8).map((e) => [e.empno, e.ename, e.job, e.sal, e.deptno]),
      matchedEmpnos: matched.map((e) => e.empno)
    };
  }
};
