var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);

_scope.QUESTIONS_1_50 = [
  {
    "id": 1,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L08 Slide 2-12 • Why NoSQL & Sharding",
    "title": "Gorizontal Masshtablash (Scale Out) & NoSQL Zarurati",
    "story": "Bitta serverning CPU va RAM quvvati chegaralangan bo'lib, millionlab foydalanuvchilar oqimini ko'p tugunli klasterga bo'lib yuborish lozim.",
    "taskUz": "Relyatsion bazadagi barcha xodimlarni `empno`, `ename`, `job`, `sal` va `deptno` ustunlari bo'yicha ko'rib chiqing.\n\n📋 **Kutilayotgan Buyruq:**\n• Standart SQL so'rovi",
    "expectedSql": "SELECT empno, ename, job, sal, deptno FROM emp",
    "hint": "`SELECT empno, ename, job, sal, deptno FROM emp` yozing.",
    "tags": [
      "NOSQL_FOUNDATIONS",
      "SCALE_OUT",
      "SHARDING"
    ],
    "solutions": [
      "SELECT empno, ename, job, sal, deptno FROM emp"
    ],
    "task": "Relyatsion bazadagi barcha xodimlarni `empno`, `ename`, `job`, `sal` va `deptno` ustunlari bo'yicha ko'rib chiqing.",
    "explanation": ""
  },
  {
    "id": 2,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L08 Slide 2-12 • Why NoSQL & Sharding",
    "title": "Relyatsion va NoSQL Taqqoslashi (2-Bosqich)",
    "story": "Uzum va korporativ platformalarda an'anaviy RDBMS vertikal kengayish (Scale UP) chegarasiga yetganda, gorizontal Sharding talab etiladi.",
    "taskUz": "Kompaniya xodimlarining `empno`, `ename` va `deptno` ma'lumotlarini SQL orqali chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Standart SQL so'rovi",
    "expectedSql": "SELECT empno, ename, deptno FROM emp",
    "hint": "`SELECT empno, ename, deptno FROM emp` deb yozing.",
    "tags": [
      "NOSQL_FOUNDATIONS",
      "SCALE_OUT",
      "SHARDING"
    ],
    "solutions": [
      "SELECT empno, ename, deptno FROM emp"
    ],
    "task": "Kompaniya xodimlarining `empno`, `ename` va `deptno` ma'lumotlarini SQL orqali chiqaring.",
    "explanation": ""
  },
  {
    "id": 3,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L08 Slide 2-12 • Why NoSQL & Sharding",
    "title": "Relyatsion va NoSQL Taqqoslashi (3-Bosqich)",
    "story": "Uzum va korporativ platformalarda an'anaviy RDBMS vertikal kengayish (Scale UP) chegarasiga yetganda, gorizontal Sharding talab etiladi.",
    "taskUz": "Kompaniya xodimlarining `empno`, `ename` va `deptno` ma'lumotlarini SQL orqali chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Standart SQL so'rovi",
    "expectedSql": "SELECT empno, ename, deptno FROM emp",
    "hint": "`SELECT empno, ename, deptno FROM emp` deb yozing.",
    "tags": [
      "NOSQL_FOUNDATIONS",
      "SCALE_OUT",
      "SHARDING"
    ],
    "solutions": [
      "SELECT empno, ename, deptno FROM emp"
    ],
    "task": "Kompaniya xodimlarining `empno`, `ename` va `deptno` ma'lumotlarini SQL orqali chiqaring.",
    "explanation": ""
  },
  {
    "id": 4,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L08 Slide 2-12 • Why NoSQL & Sharding",
    "title": "Relyatsion va NoSQL Taqqoslashi (4-Bosqich)",
    "story": "Uzum va korporativ platformalarda an'anaviy RDBMS vertikal kengayish (Scale UP) chegarasiga yetganda, gorizontal Sharding talab etiladi.",
    "taskUz": "Kompaniya xodimlarining `empno`, `ename` va `deptno` ma'lumotlarini SQL orqali chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Standart SQL so'rovi",
    "expectedSql": "SELECT empno, ename, deptno FROM emp",
    "hint": "`SELECT empno, ename, deptno FROM emp` deb yozing.",
    "tags": [
      "NOSQL_FOUNDATIONS",
      "SCALE_OUT",
      "SHARDING"
    ],
    "solutions": [
      "SELECT empno, ename, deptno FROM emp"
    ],
    "task": "Kompaniya xodimlarining `empno`, `ename` va `deptno` ma'lumotlarini SQL orqali chiqaring.",
    "explanation": ""
  },
  {
    "id": 5,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L08 Slide 2-12 • Why NoSQL & Sharding",
    "title": "Bo'lim 10 Xodimlarini Ko'rish (Relational Baseline)",
    "story": "NoSQL hujjatlar modeliga o'tkazishdan oldin 10-bo'lim xodimlarini tekshirib oling.",
    "taskUz": "10-bo'limdagi barcha xodimlarning `empno`, `ename` va `sal` qiymatlarini chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Standart SQL so'rovi",
    "expectedSql": "SELECT empno, ename, sal, deptno FROM emp WHERE deptno = 10",
    "hint": "`WHERE deptno = 10` shartini bering.",
    "tags": [
      "NOSQL_FOUNDATIONS",
      "SCALE_OUT",
      "SHARDING"
    ],
    "solutions": [
      "SELECT empno, ename, sal, deptno FROM emp WHERE deptno = 10"
    ],
    "task": "10-bo'limdagi barcha xodimlarning `empno`, `ename` va `sal` qiymatlarini chiqaring.",
    "explanation": ""
  },
  {
    "id": 6,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L08 Slide 2-12 • Why NoSQL & Sharding",
    "title": "Relyatsion va NoSQL Taqqoslashi (6-Bosqich)",
    "story": "Uzum va korporativ platformalarda an'anaviy RDBMS vertikal kengayish (Scale UP) chegarasiga yetganda, gorizontal Sharding talab etiladi.",
    "taskUz": "Kompaniya xodimlarining `empno`, `ename` va `deptno` ma'lumotlarini SQL orqali chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Standart SQL so'rovi",
    "expectedSql": "SELECT empno, ename, deptno FROM emp",
    "hint": "`SELECT empno, ename, deptno FROM emp` deb yozing.",
    "tags": [
      "NOSQL_FOUNDATIONS",
      "SCALE_OUT",
      "SHARDING"
    ],
    "solutions": [
      "SELECT empno, ename, deptno FROM emp"
    ],
    "task": "Kompaniya xodimlarining `empno`, `ename` va `deptno` ma'lumotlarini SQL orqali chiqaring.",
    "explanation": ""
  },
  {
    "id": 7,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L08 Slide 2-12 • Why NoSQL & Sharding",
    "title": "Relyatsion va NoSQL Taqqoslashi (7-Bosqich)",
    "story": "Uzum va korporativ platformalarda an'anaviy RDBMS vertikal kengayish (Scale UP) chegarasiga yetganda, gorizontal Sharding talab etiladi.",
    "taskUz": "Kompaniya xodimlarining `empno`, `ename` va `deptno` ma'lumotlarini SQL orqali chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Standart SQL so'rovi",
    "expectedSql": "SELECT empno, ename, deptno FROM emp",
    "hint": "`SELECT empno, ename, deptno FROM emp` deb yozing.",
    "tags": [
      "NOSQL_FOUNDATIONS",
      "SCALE_OUT",
      "SHARDING"
    ],
    "solutions": [
      "SELECT empno, ename, deptno FROM emp"
    ],
    "task": "Kompaniya xodimlarining `empno`, `ename` va `deptno` ma'lumotlarini SQL orqali chiqaring.",
    "explanation": ""
  },
  {
    "id": 8,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L08 Slide 2-12 • Why NoSQL & Sharding",
    "title": "Relyatsion va NoSQL Taqqoslashi (8-Bosqich)",
    "story": "Uzum va korporativ platformalarda an'anaviy RDBMS vertikal kengayish (Scale UP) chegarasiga yetganda, gorizontal Sharding talab etiladi.",
    "taskUz": "Kompaniya xodimlarining `empno`, `ename` va `deptno` ma'lumotlarini SQL orqali chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Standart SQL so'rovi",
    "expectedSql": "SELECT empno, ename, deptno FROM emp",
    "hint": "`SELECT empno, ename, deptno FROM emp` deb yozing.",
    "tags": [
      "NOSQL_FOUNDATIONS",
      "SCALE_OUT",
      "SHARDING"
    ],
    "solutions": [
      "SELECT empno, ename, deptno FROM emp"
    ],
    "task": "Kompaniya xodimlarining `empno`, `ename` va `deptno` ma'lumotlarini SQL orqali chiqaring.",
    "explanation": ""
  },
  {
    "id": 9,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L08 Slide 2-12 • Why NoSQL & Sharding",
    "title": "Relyatsion va NoSQL Taqqoslashi (9-Bosqich)",
    "story": "Uzum va korporativ platformalarda an'anaviy RDBMS vertikal kengayish (Scale UP) chegarasiga yetganda, gorizontal Sharding talab etiladi.",
    "taskUz": "Kompaniya xodimlarining `empno`, `ename` va `deptno` ma'lumotlarini SQL orqali chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Standart SQL so'rovi",
    "expectedSql": "SELECT empno, ename, deptno FROM emp",
    "hint": "`SELECT empno, ename, deptno FROM emp` deb yozing.",
    "tags": [
      "NOSQL_FOUNDATIONS",
      "SCALE_OUT",
      "SHARDING"
    ],
    "solutions": [
      "SELECT empno, ename, deptno FROM emp"
    ],
    "task": "Kompaniya xodimlarining `empno`, `ename` va `deptno` ma'lumotlarini SQL orqali chiqaring.",
    "explanation": ""
  },
  {
    "id": 10,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L08 Slide 2-12 • Why NoSQL & Sharding",
    "title": "Relyatsion va NoSQL Taqqoslashi (10-Bosqich)",
    "story": "Uzum va korporativ platformalarda an'anaviy RDBMS vertikal kengayish (Scale UP) chegarasiga yetganda, gorizontal Sharding talab etiladi.",
    "taskUz": "Kompaniya xodimlarining `empno`, `ename` va `deptno` ma'lumotlarini SQL orqali chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Standart SQL so'rovi",
    "expectedSql": "SELECT empno, ename, deptno FROM emp",
    "hint": "`SELECT empno, ename, deptno FROM emp` deb yozing.",
    "tags": [
      "NOSQL_FOUNDATIONS",
      "SCALE_OUT",
      "SHARDING"
    ],
    "solutions": [
      "SELECT empno, ename, deptno FROM emp"
    ],
    "task": "Kompaniya xodimlarining `empno`, `ename` va `deptno` ma'lumotlarini SQL orqali chiqaring.",
    "explanation": ""
  },
  {
    "id": 11,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L08 Slide 2-12 • Why NoSQL & Sharding",
    "title": "Relyatsion va NoSQL Taqqoslashi (11-Bosqich)",
    "story": "Uzum va korporativ platformalarda an'anaviy RDBMS vertikal kengayish (Scale UP) chegarasiga yetganda, gorizontal Sharding talab etiladi.",
    "taskUz": "Kompaniya xodimlarining `empno`, `ename` va `deptno` ma'lumotlarini SQL orqali chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Standart SQL so'rovi",
    "expectedSql": "SELECT empno, ename, deptno FROM emp",
    "hint": "`SELECT empno, ename, deptno FROM emp` deb yozing.",
    "tags": [
      "NOSQL_FOUNDATIONS",
      "SCALE_OUT",
      "SHARDING"
    ],
    "solutions": [
      "SELECT empno, ename, deptno FROM emp"
    ],
    "task": "Kompaniya xodimlarining `empno`, `ename` va `deptno` ma'lumotlarini SQL orqali chiqaring.",
    "explanation": ""
  },
  {
    "id": 12,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L08 Slide 2-12 • Why NoSQL & Sharding",
    "title": "Relyatsion va NoSQL Taqqoslashi (12-Bosqich)",
    "story": "Uzum va korporativ platformalarda an'anaviy RDBMS vertikal kengayish (Scale UP) chegarasiga yetganda, gorizontal Sharding talab etiladi.",
    "taskUz": "Kompaniya xodimlarining `empno`, `ename` va `deptno` ma'lumotlarini SQL orqali chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Standart SQL so'rovi",
    "expectedSql": "SELECT empno, ename, deptno FROM emp",
    "hint": "`SELECT empno, ename, deptno FROM emp` deb yozing.",
    "tags": [
      "NOSQL_FOUNDATIONS",
      "SCALE_OUT",
      "SHARDING"
    ],
    "solutions": [
      "SELECT empno, ename, deptno FROM emp"
    ],
    "task": "Kompaniya xodimlarining `empno`, `ename` va `deptno` ma'lumotlarini SQL orqali chiqaring.",
    "explanation": ""
  },
  {
    "id": 13,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L08 Slide 2-12 • Why NoSQL & Sharding",
    "title": "Relyatsion va NoSQL Taqqoslashi (13-Bosqich)",
    "story": "Uzum va korporativ platformalarda an'anaviy RDBMS vertikal kengayish (Scale UP) chegarasiga yetganda, gorizontal Sharding talab etiladi.",
    "taskUz": "Kompaniya xodimlarining `empno`, `ename` va `deptno` ma'lumotlarini SQL orqali chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Standart SQL so'rovi",
    "expectedSql": "SELECT empno, ename, deptno FROM emp",
    "hint": "`SELECT empno, ename, deptno FROM emp` deb yozing.",
    "tags": [
      "NOSQL_FOUNDATIONS",
      "SCALE_OUT",
      "SHARDING"
    ],
    "solutions": [
      "SELECT empno, ename, deptno FROM emp"
    ],
    "task": "Kompaniya xodimlarining `empno`, `ename` va `deptno` ma'lumotlarini SQL orqali chiqaring.",
    "explanation": ""
  },
  {
    "id": 14,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L08 Slide 2-12 • Why NoSQL & Sharding",
    "title": "Relyatsion va NoSQL Taqqoslashi (14-Bosqich)",
    "story": "Uzum va korporativ platformalarda an'anaviy RDBMS vertikal kengayish (Scale UP) chegarasiga yetganda, gorizontal Sharding talab etiladi.",
    "taskUz": "Kompaniya xodimlarining `empno`, `ename` va `deptno` ma'lumotlarini SQL orqali chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Standart SQL so'rovi",
    "expectedSql": "SELECT empno, ename, deptno FROM emp",
    "hint": "`SELECT empno, ename, deptno FROM emp` deb yozing.",
    "tags": [
      "NOSQL_FOUNDATIONS",
      "SCALE_OUT",
      "SHARDING"
    ],
    "solutions": [
      "SELECT empno, ename, deptno FROM emp"
    ],
    "task": "Kompaniya xodimlarining `empno`, `ename` va `deptno` ma'lumotlarini SQL orqali chiqaring.",
    "explanation": ""
  },
  {
    "id": 15,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L08 Slide 2-12 • Why NoSQL & Sharding",
    "title": "Relyatsion va NoSQL Taqqoslashi (15-Bosqich)",
    "story": "Uzum va korporativ platformalarda an'anaviy RDBMS vertikal kengayish (Scale UP) chegarasiga yetganda, gorizontal Sharding talab etiladi.",
    "taskUz": "Kompaniya xodimlarining `empno`, `ename` va `deptno` ma'lumotlarini SQL orqali chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Standart SQL so'rovi",
    "expectedSql": "SELECT empno, ename, deptno FROM emp",
    "hint": "`SELECT empno, ename, deptno FROM emp` deb yozing.",
    "tags": [
      "NOSQL_FOUNDATIONS",
      "SCALE_OUT",
      "SHARDING"
    ],
    "solutions": [
      "SELECT empno, ename, deptno FROM emp"
    ],
    "task": "Kompaniya xodimlarining `empno`, `ename` va `deptno` ma'lumotlarini SQL orqali chiqaring.",
    "explanation": ""
  },
  {
    "id": 16,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "L08 Slide 15-25 • CAP Theorem & BASE",
    "title": "CAP Teoremasi: CP Tizimlar (MongoDB, HBase)",
    "story": "MongoDB tarmoq uzilishi paytida Muvofiqlik (Consistency) va Partition Toleranceni tanlaydi (CP).",
    "taskUz": "Kompaniya xodimlarining to'liq ro'yxatini chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Konsistensiya tekshiruvi so'rovi",
    "expectedSql": "SELECT empno, ename, job, sal, deptno FROM emp",
    "hint": "`SELECT empno, ename, job, sal, deptno FROM emp` yozing.",
    "tags": [
      "CAP_THEOREM",
      "BASE",
      "CONSISTENCY"
    ],
    "solutions": [
      "SELECT empno, ename, job, sal, deptno FROM emp"
    ],
    "task": "Kompaniya xodimlarining to'liq ro'yxatini chiqaring.",
    "explanation": ""
  },
  {
    "id": 17,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "L08 Slide 15-25 • CAP Theorem & BASE",
    "title": "CAP Teoremasi & Partition Tolerance (2-Qadam)",
    "story": "Brewer's CAP teoremasi: Tarmoq uzilishi (Partition) yuz berganda Consistency (Muvofiqlik) yoki Availability (Mavjudlik) o'rtasida tanlov qilinadi.",
    "taskUz": "Tahlil uchun `emp` jadvalidan maoshi 2000 dan yuqori bo'lgan xodimlarni chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Konsistensiya tekshiruvi so'rovi",
    "expectedSql": "SELECT empno, ename, sal, deptno FROM emp WHERE sal > 2000",
    "hint": "`WHERE sal > 2000` deb yozing.",
    "tags": [
      "CAP_THEOREM",
      "BASE",
      "CONSISTENCY"
    ],
    "solutions": [
      "SELECT empno, ename, sal, deptno FROM emp WHERE sal > 2000"
    ],
    "task": "Tahlil uchun `emp` jadvalidan maoshi 2000 dan yuqori bo'lgan xodimlarni chiqaring.",
    "explanation": ""
  },
  {
    "id": 18,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "L08 Slide 15-25 • CAP Theorem & BASE",
    "title": "CAP Teoremasi & Partition Tolerance (3-Qadam)",
    "story": "Brewer's CAP teoremasi: Tarmoq uzilishi (Partition) yuz berganda Consistency (Muvofiqlik) yoki Availability (Mavjudlik) o'rtasida tanlov qilinadi.",
    "taskUz": "Tahlil uchun `emp` jadvalidan maoshi 2000 dan yuqori bo'lgan xodimlarni chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Konsistensiya tekshiruvi so'rovi",
    "expectedSql": "SELECT empno, ename, sal, deptno FROM emp WHERE sal > 2000",
    "hint": "`WHERE sal > 2000` deb yozing.",
    "tags": [
      "CAP_THEOREM",
      "BASE",
      "CONSISTENCY"
    ],
    "solutions": [
      "SELECT empno, ename, sal, deptno FROM emp WHERE sal > 2000"
    ],
    "task": "Tahlil uchun `emp` jadvalidan maoshi 2000 dan yuqori bo'lgan xodimlarni chiqaring.",
    "explanation": ""
  },
  {
    "id": 19,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "L08 Slide 15-25 • CAP Theorem & BASE",
    "title": "CAP Teoremasi & Partition Tolerance (4-Qadam)",
    "story": "Brewer's CAP teoremasi: Tarmoq uzilishi (Partition) yuz berganda Consistency (Muvofiqlik) yoki Availability (Mavjudlik) o'rtasida tanlov qilinadi.",
    "taskUz": "Tahlil uchun `emp` jadvalidan maoshi 2000 dan yuqori bo'lgan xodimlarni chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Konsistensiya tekshiruvi so'rovi",
    "expectedSql": "SELECT empno, ename, sal, deptno FROM emp WHERE sal > 2000",
    "hint": "`WHERE sal > 2000` deb yozing.",
    "tags": [
      "CAP_THEOREM",
      "BASE",
      "CONSISTENCY"
    ],
    "solutions": [
      "SELECT empno, ename, sal, deptno FROM emp WHERE sal > 2000"
    ],
    "task": "Tahlil uchun `emp` jadvalidan maoshi 2000 dan yuqori bo'lgan xodimlarni chiqaring.",
    "explanation": ""
  },
  {
    "id": 20,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "L08 Slide 15-25 • CAP Theorem & BASE",
    "title": "CAP Teoremasi & Partition Tolerance (5-Qadam)",
    "story": "Brewer's CAP teoremasi: Tarmoq uzilishi (Partition) yuz berganda Consistency (Muvofiqlik) yoki Availability (Mavjudlik) o'rtasida tanlov qilinadi.",
    "taskUz": "Tahlil uchun `emp` jadvalidan maoshi 2000 dan yuqori bo'lgan xodimlarni chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Konsistensiya tekshiruvi so'rovi",
    "expectedSql": "SELECT empno, ename, sal, deptno FROM emp WHERE sal > 2000",
    "hint": "`WHERE sal > 2000` deb yozing.",
    "tags": [
      "CAP_THEOREM",
      "BASE",
      "CONSISTENCY"
    ],
    "solutions": [
      "SELECT empno, ename, sal, deptno FROM emp WHERE sal > 2000"
    ],
    "task": "Tahlil uchun `emp` jadvalidan maoshi 2000 dan yuqori bo'lgan xodimlarni chiqaring.",
    "explanation": ""
  },
  {
    "id": 21,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "L08 Slide 15-25 • CAP Theorem & BASE",
    "title": "CAP Teoremasi & Partition Tolerance (6-Qadam)",
    "story": "Brewer's CAP teoremasi: Tarmoq uzilishi (Partition) yuz berganda Consistency (Muvofiqlik) yoki Availability (Mavjudlik) o'rtasida tanlov qilinadi.",
    "taskUz": "Tahlil uchun `emp` jadvalidan maoshi 2000 dan yuqori bo'lgan xodimlarni chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Konsistensiya tekshiruvi so'rovi",
    "expectedSql": "SELECT empno, ename, sal, deptno FROM emp WHERE sal > 2000",
    "hint": "`WHERE sal > 2000` deb yozing.",
    "tags": [
      "CAP_THEOREM",
      "BASE",
      "CONSISTENCY"
    ],
    "solutions": [
      "SELECT empno, ename, sal, deptno FROM emp WHERE sal > 2000"
    ],
    "task": "Tahlil uchun `emp` jadvalidan maoshi 2000 dan yuqori bo'lgan xodimlarni chiqaring.",
    "explanation": ""
  },
  {
    "id": 22,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "L08 Slide 15-25 • CAP Theorem & BASE",
    "title": "CAP Teoremasi & Partition Tolerance (7-Qadam)",
    "story": "Brewer's CAP teoremasi: Tarmoq uzilishi (Partition) yuz berganda Consistency (Muvofiqlik) yoki Availability (Mavjudlik) o'rtasida tanlov qilinadi.",
    "taskUz": "Tahlil uchun `emp` jadvalidan maoshi 2000 dan yuqori bo'lgan xodimlarni chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Konsistensiya tekshiruvi so'rovi",
    "expectedSql": "SELECT empno, ename, sal, deptno FROM emp WHERE sal > 2000",
    "hint": "`WHERE sal > 2000` deb yozing.",
    "tags": [
      "CAP_THEOREM",
      "BASE",
      "CONSISTENCY"
    ],
    "solutions": [
      "SELECT empno, ename, sal, deptno FROM emp WHERE sal > 2000"
    ],
    "task": "Tahlil uchun `emp` jadvalidan maoshi 2000 dan yuqori bo'lgan xodimlarni chiqaring.",
    "explanation": ""
  },
  {
    "id": 23,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "L08 Slide 15-25 • CAP Theorem & BASE",
    "title": "CAP Teoremasi & Partition Tolerance (8-Qadam)",
    "story": "Brewer's CAP teoremasi: Tarmoq uzilishi (Partition) yuz berganda Consistency (Muvofiqlik) yoki Availability (Mavjudlik) o'rtasida tanlov qilinadi.",
    "taskUz": "Tahlil uchun `emp` jadvalidan maoshi 2000 dan yuqori bo'lgan xodimlarni chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Konsistensiya tekshiruvi so'rovi",
    "expectedSql": "SELECT empno, ename, sal, deptno FROM emp WHERE sal > 2000",
    "hint": "`WHERE sal > 2000` deb yozing.",
    "tags": [
      "CAP_THEOREM",
      "BASE",
      "CONSISTENCY"
    ],
    "solutions": [
      "SELECT empno, ename, sal, deptno FROM emp WHERE sal > 2000"
    ],
    "task": "Tahlil uchun `emp` jadvalidan maoshi 2000 dan yuqori bo'lgan xodimlarni chiqaring.",
    "explanation": ""
  },
  {
    "id": 24,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "L08 Slide 15-25 • CAP Theorem & BASE",
    "title": "CAP Teoremasi & Partition Tolerance (9-Qadam)",
    "story": "Brewer's CAP teoremasi: Tarmoq uzilishi (Partition) yuz berganda Consistency (Muvofiqlik) yoki Availability (Mavjudlik) o'rtasida tanlov qilinadi.",
    "taskUz": "Tahlil uchun `emp` jadvalidan maoshi 2000 dan yuqori bo'lgan xodimlarni chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Konsistensiya tekshiruvi so'rovi",
    "expectedSql": "SELECT empno, ename, sal, deptno FROM emp WHERE sal > 2000",
    "hint": "`WHERE sal > 2000` deb yozing.",
    "tags": [
      "CAP_THEOREM",
      "BASE",
      "CONSISTENCY"
    ],
    "solutions": [
      "SELECT empno, ename, sal, deptno FROM emp WHERE sal > 2000"
    ],
    "task": "Tahlil uchun `emp` jadvalidan maoshi 2000 dan yuqori bo'lgan xodimlarni chiqaring.",
    "explanation": ""
  },
  {
    "id": 25,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "L08 Slide 15-25 • CAP Theorem & BASE",
    "title": "BASE: Eventual Consistency Tahlili",
    "story": "BASE (Basically Available, Soft state, Eventual consistency) modeli ACID ga nisbatan yuqori tezlikni ta'minlaydi.",
    "taskUz": "Xodimlar ro'yxatini chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Konsistensiya tekshiruvi so'rovi",
    "expectedSql": "SELECT empno, ename, sal, deptno FROM emp",
    "hint": "`SELECT empno, ename, sal, deptno FROM emp` yozing.",
    "tags": [
      "CAP_THEOREM",
      "BASE",
      "CONSISTENCY"
    ],
    "solutions": [
      "SELECT empno, ename, sal, deptno FROM emp"
    ],
    "task": "Xodimlar ro'yxatini chiqaring.",
    "explanation": ""
  },
  {
    "id": 26,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "L08 Slide 15-25 • CAP Theorem & BASE",
    "title": "CAP Teoremasi & Partition Tolerance (11-Qadam)",
    "story": "Brewer's CAP teoremasi: Tarmoq uzilishi (Partition) yuz berganda Consistency (Muvofiqlik) yoki Availability (Mavjudlik) o'rtasida tanlov qilinadi.",
    "taskUz": "Tahlil uchun `emp` jadvalidan maoshi 2000 dan yuqori bo'lgan xodimlarni chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Konsistensiya tekshiruvi so'rovi",
    "expectedSql": "SELECT empno, ename, sal, deptno FROM emp WHERE sal > 2000",
    "hint": "`WHERE sal > 2000` deb yozing.",
    "tags": [
      "CAP_THEOREM",
      "BASE",
      "CONSISTENCY"
    ],
    "solutions": [
      "SELECT empno, ename, sal, deptno FROM emp WHERE sal > 2000"
    ],
    "task": "Tahlil uchun `emp` jadvalidan maoshi 2000 dan yuqori bo'lgan xodimlarni chiqaring.",
    "explanation": ""
  },
  {
    "id": 27,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "L08 Slide 15-25 • CAP Theorem & BASE",
    "title": "CAP Teoremasi & Partition Tolerance (12-Qadam)",
    "story": "Brewer's CAP teoremasi: Tarmoq uzilishi (Partition) yuz berganda Consistency (Muvofiqlik) yoki Availability (Mavjudlik) o'rtasida tanlov qilinadi.",
    "taskUz": "Tahlil uchun `emp` jadvalidan maoshi 2000 dan yuqori bo'lgan xodimlarni chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Konsistensiya tekshiruvi so'rovi",
    "expectedSql": "SELECT empno, ename, sal, deptno FROM emp WHERE sal > 2000",
    "hint": "`WHERE sal > 2000` deb yozing.",
    "tags": [
      "CAP_THEOREM",
      "BASE",
      "CONSISTENCY"
    ],
    "solutions": [
      "SELECT empno, ename, sal, deptno FROM emp WHERE sal > 2000"
    ],
    "task": "Tahlil uchun `emp` jadvalidan maoshi 2000 dan yuqori bo'lgan xodimlarni chiqaring.",
    "explanation": ""
  },
  {
    "id": 28,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "L08 Slide 15-25 • CAP Theorem & BASE",
    "title": "CAP Teoremasi & Partition Tolerance (13-Qadam)",
    "story": "Brewer's CAP teoremasi: Tarmoq uzilishi (Partition) yuz berganda Consistency (Muvofiqlik) yoki Availability (Mavjudlik) o'rtasida tanlov qilinadi.",
    "taskUz": "Tahlil uchun `emp` jadvalidan maoshi 2000 dan yuqori bo'lgan xodimlarni chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Konsistensiya tekshiruvi so'rovi",
    "expectedSql": "SELECT empno, ename, sal, deptno FROM emp WHERE sal > 2000",
    "hint": "`WHERE sal > 2000` deb yozing.",
    "tags": [
      "CAP_THEOREM",
      "BASE",
      "CONSISTENCY"
    ],
    "solutions": [
      "SELECT empno, ename, sal, deptno FROM emp WHERE sal > 2000"
    ],
    "task": "Tahlil uchun `emp` jadvalidan maoshi 2000 dan yuqori bo'lgan xodimlarni chiqaring.",
    "explanation": ""
  },
  {
    "id": 29,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "L08 Slide 15-25 • CAP Theorem & BASE",
    "title": "CAP Teoremasi & Partition Tolerance (14-Qadam)",
    "story": "Brewer's CAP teoremasi: Tarmoq uzilishi (Partition) yuz berganda Consistency (Muvofiqlik) yoki Availability (Mavjudlik) o'rtasida tanlov qilinadi.",
    "taskUz": "Tahlil uchun `emp` jadvalidan maoshi 2000 dan yuqori bo'lgan xodimlarni chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Konsistensiya tekshiruvi so'rovi",
    "expectedSql": "SELECT empno, ename, sal, deptno FROM emp WHERE sal > 2000",
    "hint": "`WHERE sal > 2000` deb yozing.",
    "tags": [
      "CAP_THEOREM",
      "BASE",
      "CONSISTENCY"
    ],
    "solutions": [
      "SELECT empno, ename, sal, deptno FROM emp WHERE sal > 2000"
    ],
    "task": "Tahlil uchun `emp` jadvalidan maoshi 2000 dan yuqori bo'lgan xodimlarni chiqaring.",
    "explanation": ""
  },
  {
    "id": 30,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "L08 Slide 15-25 • CAP Theorem & BASE",
    "title": "CAP Teoremasi & Partition Tolerance (15-Qadam)",
    "story": "Brewer's CAP teoremasi: Tarmoq uzilishi (Partition) yuz berganda Consistency (Muvofiqlik) yoki Availability (Mavjudlik) o'rtasida tanlov qilinadi.",
    "taskUz": "Tahlil uchun `emp` jadvalidan maoshi 2000 dan yuqori bo'lgan xodimlarni chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Konsistensiya tekshiruvi so'rovi",
    "expectedSql": "SELECT empno, ename, sal, deptno FROM emp WHERE sal > 2000",
    "hint": "`WHERE sal > 2000` deb yozing.",
    "tags": [
      "CAP_THEOREM",
      "BASE",
      "CONSISTENCY"
    ],
    "solutions": [
      "SELECT empno, ename, sal, deptno FROM emp WHERE sal > 2000"
    ],
    "task": "Tahlil uchun `emp` jadvalidan maoshi 2000 dan yuqori bo'lgan xodimlarni chiqaring.",
    "explanation": ""
  },
  {
    "id": 31,
    "sector": 3,
    "difficulty": "Floor 3 • Medium",
    "source": "S09 Part A • MongoDB Insert Data",
    "title": "MongoDB Hujjat Yaratish: db.emp.insertOne()",
    "story": "S09 Task Part A: Yangi xodim Ali haqidagi ma'lumotlarni JSON/BSON formatida `emp` kolleksiyasiga qo'shish.",
    "taskUz": "Ali xodimini `emp` kolleksiyasiga kiritish uchun `insertOne()` buyrug'ini yozing.\n\n📋 **Kutilayotgan Buyruq:**\n• MongoDB mongosh buyrug'i",
    "expectedSql": "db.emp.insertOne({ empno: 8001, ename: \"ALI\", job: \"DEVELOPER\", sal: 2500, deptno: 30 })",
    "hint": "`db.emp.insertOne({ empno: 8001, ename: \"ALI\", job: \"DEVELOPER\", sal: 2500, deptno: 30 })` yozing.",
    "tags": [
      "MONGODB",
      "INSERT_ONE",
      "DOCUMENT"
    ],
    "solutions": [
      "db.emp.insertOne({ empno: 8001, ename: \"ALI\", job: \"DEVELOPER\", sal: 2500, deptno: 30 })"
    ],
    "task": "Ali xodimini `emp` kolleksiyasiga kiritish uchun `insertOne()` buyrug'ini yozing.",
    "explanation": ""
  },
  {
    "id": 32,
    "sector": 3,
    "difficulty": "Floor 3 • Medium",
    "source": "S09 Part A • MongoDB Insert Data",
    "title": "Bir Nechta Hujjatlarni Kiritish: db.emp.insertMany()",
    "story": "Bir vaqtning o'zida ikkita nomzodni xodimlar kolleksiyasiga qo'shish talab etiladi.",
    "taskUz": "Ikkita xodimni massiv ko'rinishida `insertMany()` orqali kiriting.\n\n📋 **Kutilayotgan Buyruq:**\n• MongoDB mongosh buyrug'i",
    "expectedSql": "db.emp.insertMany([ { empno: 8002, ename: \"NODIR\", sal: 2200 }, { empno: 8003, ename: \"ZARINA\", sal: 2700 } ])",
    "hint": "`db.emp.insertMany([ ... ])` sintaksisidan foydalaning.",
    "tags": [
      "MONGODB",
      "INSERT_MANY",
      "ARRAY"
    ],
    "solutions": [
      "db.emp.insertMany([ { empno: 8002, ename: \"NODIR\", sal: 2200 }, { empno: 8003, ename: \"ZARINA\", sal: 2700 } ])"
    ],
    "task": "Ikkita xodimni massiv ko'rinishida `insertMany()` orqali kiriting.",
    "explanation": ""
  },
  {
    "id": 33,
    "sector": 3,
    "difficulty": "Floor 3 • Medium",
    "source": "S09 Part A • MongoDB Insert Data",
    "title": "MongoDB Hujjatlar Arxitekturasi (3-Topshiriq)",
    "story": "Moslashuvchan schema (Flexible schema) yordamida yangi xodimlarni kiritish.",
    "taskUz": "Yangi xodimni `insertOne()` orqali kiriting.\n\n📋 **Kutilayotgan Buyruq:**\n• MongoDB mongosh buyrug'i",
    "expectedSql": "db.emp.insertOne({ empno: 8001, ename: \"ALI\", job: \"DEVELOPER\", sal: 2500, deptno: 30 })",
    "hint": "`db.emp.insertOne(...)` yozing.",
    "tags": [
      "MONGODB",
      "INSERT",
      "JSON"
    ],
    "solutions": [
      "db.emp.insertOne({ empno: 8001, ename: \"ALI\", job: \"DEVELOPER\", sal: 2500, deptno: 30 })"
    ],
    "task": "Yangi xodimni `insertOne()` orqali kiriting.",
    "explanation": ""
  },
  {
    "id": 34,
    "sector": 3,
    "difficulty": "Floor 3 • Medium",
    "source": "S09 Part A • MongoDB Insert Data",
    "title": "MongoDB Hujjatlar Arxitekturasi (4-Topshiriq)",
    "story": "Moslashuvchan schema (Flexible schema) yordamida yangi xodimlarni kiritish.",
    "taskUz": "Yangi xodimni `insertOne()` orqali kiriting.\n\n📋 **Kutilayotgan Buyruq:**\n• MongoDB mongosh buyrug'i",
    "expectedSql": "db.emp.insertOne({ empno: 8001, ename: \"ALI\", job: \"DEVELOPER\", sal: 2500, deptno: 30 })",
    "hint": "`db.emp.insertOne(...)` yozing.",
    "tags": [
      "MONGODB",
      "INSERT",
      "JSON"
    ],
    "solutions": [
      "db.emp.insertOne({ empno: 8001, ename: \"ALI\", job: \"DEVELOPER\", sal: 2500, deptno: 30 })"
    ],
    "task": "Yangi xodimni `insertOne()` orqali kiriting.",
    "explanation": ""
  },
  {
    "id": 35,
    "sector": 3,
    "difficulty": "Floor 3 • Medium",
    "source": "S09 Part A • MongoDB Insert Data",
    "title": "MongoDB Hujjatlar Arxitekturasi (5-Topshiriq)",
    "story": "Moslashuvchan schema (Flexible schema) yordamida yangi xodimlarni kiritish.",
    "taskUz": "Yangi xodimni `insertOne()` orqali kiriting.\n\n📋 **Kutilayotgan Buyruq:**\n• MongoDB mongosh buyrug'i",
    "expectedSql": "db.emp.insertOne({ empno: 8001, ename: \"ALI\", job: \"DEVELOPER\", sal: 2500, deptno: 30 })",
    "hint": "`db.emp.insertOne(...)` yozing.",
    "tags": [
      "MONGODB",
      "INSERT",
      "JSON"
    ],
    "solutions": [
      "db.emp.insertOne({ empno: 8001, ename: \"ALI\", job: \"DEVELOPER\", sal: 2500, deptno: 30 })"
    ],
    "task": "Yangi xodimni `insertOne()` orqali kiriting.",
    "explanation": ""
  },
  {
    "id": 36,
    "sector": 3,
    "difficulty": "Floor 3 • Medium",
    "source": "S09 Part A • MongoDB Insert Data",
    "title": "MongoDB Hujjatlar Arxitekturasi (6-Topshiriq)",
    "story": "Moslashuvchan schema (Flexible schema) yordamida yangi xodimlarni kiritish.",
    "taskUz": "Yangi xodimni `insertOne()` orqali kiriting.\n\n📋 **Kutilayotgan Buyruq:**\n• MongoDB mongosh buyrug'i",
    "expectedSql": "db.emp.insertOne({ empno: 8001, ename: \"ALI\", job: \"DEVELOPER\", sal: 2500, deptno: 30 })",
    "hint": "`db.emp.insertOne(...)` yozing.",
    "tags": [
      "MONGODB",
      "INSERT",
      "JSON"
    ],
    "solutions": [
      "db.emp.insertOne({ empno: 8001, ename: \"ALI\", job: \"DEVELOPER\", sal: 2500, deptno: 30 })"
    ],
    "task": "Yangi xodimni `insertOne()` orqali kiriting.",
    "explanation": ""
  },
  {
    "id": 37,
    "sector": 3,
    "difficulty": "Floor 3 • Medium",
    "source": "S09 Part A • MongoDB Insert Data",
    "title": "MongoDB Hujjatlar Arxitekturasi (7-Topshiriq)",
    "story": "Moslashuvchan schema (Flexible schema) yordamida yangi xodimlarni kiritish.",
    "taskUz": "Yangi xodimni `insertOne()` orqali kiriting.\n\n📋 **Kutilayotgan Buyruq:**\n• MongoDB mongosh buyrug'i",
    "expectedSql": "db.emp.insertOne({ empno: 8001, ename: \"ALI\", job: \"DEVELOPER\", sal: 2500, deptno: 30 })",
    "hint": "`db.emp.insertOne(...)` yozing.",
    "tags": [
      "MONGODB",
      "INSERT",
      "JSON"
    ],
    "solutions": [
      "db.emp.insertOne({ empno: 8001, ename: \"ALI\", job: \"DEVELOPER\", sal: 2500, deptno: 30 })"
    ],
    "task": "Yangi xodimni `insertOne()` orqali kiriting.",
    "explanation": ""
  },
  {
    "id": 38,
    "sector": 3,
    "difficulty": "Floor 3 • Medium",
    "source": "S09 Part A • MongoDB Insert Data",
    "title": "MongoDB Hujjatlar Arxitekturasi (8-Topshiriq)",
    "story": "Moslashuvchan schema (Flexible schema) yordamida yangi xodimlarni kiritish.",
    "taskUz": "Yangi xodimni `insertOne()` orqali kiriting.\n\n📋 **Kutilayotgan Buyruq:**\n• MongoDB mongosh buyrug'i",
    "expectedSql": "db.emp.insertOne({ empno: 8001, ename: \"ALI\", job: \"DEVELOPER\", sal: 2500, deptno: 30 })",
    "hint": "`db.emp.insertOne(...)` yozing.",
    "tags": [
      "MONGODB",
      "INSERT",
      "JSON"
    ],
    "solutions": [
      "db.emp.insertOne({ empno: 8001, ename: \"ALI\", job: \"DEVELOPER\", sal: 2500, deptno: 30 })"
    ],
    "task": "Yangi xodimni `insertOne()` orqali kiriting.",
    "explanation": ""
  },
  {
    "id": 39,
    "sector": 3,
    "difficulty": "Floor 3 • Medium",
    "source": "S09 Part A • MongoDB Insert Data",
    "title": "MongoDB Hujjatlar Arxitekturasi (9-Topshiriq)",
    "story": "Moslashuvchan schema (Flexible schema) yordamida yangi xodimlarni kiritish.",
    "taskUz": "Yangi xodimni `insertOne()` orqali kiriting.\n\n📋 **Kutilayotgan Buyruq:**\n• MongoDB mongosh buyrug'i",
    "expectedSql": "db.emp.insertOne({ empno: 8001, ename: \"ALI\", job: \"DEVELOPER\", sal: 2500, deptno: 30 })",
    "hint": "`db.emp.insertOne(...)` yozing.",
    "tags": [
      "MONGODB",
      "INSERT",
      "JSON"
    ],
    "solutions": [
      "db.emp.insertOne({ empno: 8001, ename: \"ALI\", job: \"DEVELOPER\", sal: 2500, deptno: 30 })"
    ],
    "task": "Yangi xodimni `insertOne()` orqali kiriting.",
    "explanation": ""
  },
  {
    "id": 40,
    "sector": 3,
    "difficulty": "Floor 3 • Medium",
    "source": "S09 Part A • MongoDB Insert Data",
    "title": "MongoDB Hujjatlar Arxitekturasi (10-Topshiriq)",
    "story": "Moslashuvchan schema (Flexible schema) yordamida yangi xodimlarni kiritish.",
    "taskUz": "Yangi xodimni `insertOne()` orqali kiriting.\n\n📋 **Kutilayotgan Buyruq:**\n• MongoDB mongosh buyrug'i",
    "expectedSql": "db.emp.insertOne({ empno: 8001, ename: \"ALI\", job: \"DEVELOPER\", sal: 2500, deptno: 30 })",
    "hint": "`db.emp.insertOne(...)` yozing.",
    "tags": [
      "MONGODB",
      "INSERT",
      "JSON"
    ],
    "solutions": [
      "db.emp.insertOne({ empno: 8001, ename: \"ALI\", job: \"DEVELOPER\", sal: 2500, deptno: 30 })"
    ],
    "task": "Yangi xodimni `insertOne()` orqali kiriting.",
    "explanation": ""
  },
  {
    "id": 41,
    "sector": 3,
    "difficulty": "Floor 3 • Medium",
    "source": "S09 Part A • MongoDB Insert Data",
    "title": "MongoDB Hujjatlar Arxitekturasi (11-Topshiriq)",
    "story": "Moslashuvchan schema (Flexible schema) yordamida yangi xodimlarni kiritish.",
    "taskUz": "Yangi xodimni `insertOne()` orqali kiriting.\n\n📋 **Kutilayotgan Buyruq:**\n• MongoDB mongosh buyrug'i",
    "expectedSql": "db.emp.insertOne({ empno: 8001, ename: \"ALI\", job: \"DEVELOPER\", sal: 2500, deptno: 30 })",
    "hint": "`db.emp.insertOne(...)` yozing.",
    "tags": [
      "MONGODB",
      "INSERT",
      "JSON"
    ],
    "solutions": [
      "db.emp.insertOne({ empno: 8001, ename: \"ALI\", job: \"DEVELOPER\", sal: 2500, deptno: 30 })"
    ],
    "task": "Yangi xodimni `insertOne()` orqali kiriting.",
    "explanation": ""
  },
  {
    "id": 42,
    "sector": 3,
    "difficulty": "Floor 3 • Medium",
    "source": "S09 Part A • MongoDB Insert Data",
    "title": "MongoDB Hujjatlar Arxitekturasi (12-Topshiriq)",
    "story": "Moslashuvchan schema (Flexible schema) yordamida yangi xodimlarni kiritish.",
    "taskUz": "Yangi xodimni `insertOne()` orqali kiriting.\n\n📋 **Kutilayotgan Buyruq:**\n• MongoDB mongosh buyrug'i",
    "expectedSql": "db.emp.insertOne({ empno: 8001, ename: \"ALI\", job: \"DEVELOPER\", sal: 2500, deptno: 30 })",
    "hint": "`db.emp.insertOne(...)` yozing.",
    "tags": [
      "MONGODB",
      "INSERT",
      "JSON"
    ],
    "solutions": [
      "db.emp.insertOne({ empno: 8001, ename: \"ALI\", job: \"DEVELOPER\", sal: 2500, deptno: 30 })"
    ],
    "task": "Yangi xodimni `insertOne()` orqali kiriting.",
    "explanation": ""
  },
  {
    "id": 43,
    "sector": 3,
    "difficulty": "Floor 3 • Medium",
    "source": "S09 Part A • MongoDB Insert Data",
    "title": "MongoDB Hujjatlar Arxitekturasi (13-Topshiriq)",
    "story": "Moslashuvchan schema (Flexible schema) yordamida yangi xodimlarni kiritish.",
    "taskUz": "Yangi xodimni `insertOne()` orqali kiriting.\n\n📋 **Kutilayotgan Buyruq:**\n• MongoDB mongosh buyrug'i",
    "expectedSql": "db.emp.insertOne({ empno: 8001, ename: \"ALI\", job: \"DEVELOPER\", sal: 2500, deptno: 30 })",
    "hint": "`db.emp.insertOne(...)` yozing.",
    "tags": [
      "MONGODB",
      "INSERT",
      "JSON"
    ],
    "solutions": [
      "db.emp.insertOne({ empno: 8001, ename: \"ALI\", job: \"DEVELOPER\", sal: 2500, deptno: 30 })"
    ],
    "task": "Yangi xodimni `insertOne()` orqali kiriting.",
    "explanation": ""
  },
  {
    "id": 44,
    "sector": 3,
    "difficulty": "Floor 3 • Medium",
    "source": "S09 Part A • MongoDB Insert Data",
    "title": "MongoDB Hujjatlar Arxitekturasi (14-Topshiriq)",
    "story": "Moslashuvchan schema (Flexible schema) yordamida yangi xodimlarni kiritish.",
    "taskUz": "Yangi xodimni `insertOne()` orqali kiriting.\n\n📋 **Kutilayotgan Buyruq:**\n• MongoDB mongosh buyrug'i",
    "expectedSql": "db.emp.insertOne({ empno: 8001, ename: \"ALI\", job: \"DEVELOPER\", sal: 2500, deptno: 30 })",
    "hint": "`db.emp.insertOne(...)` yozing.",
    "tags": [
      "MONGODB",
      "INSERT",
      "JSON"
    ],
    "solutions": [
      "db.emp.insertOne({ empno: 8001, ename: \"ALI\", job: \"DEVELOPER\", sal: 2500, deptno: 30 })"
    ],
    "task": "Yangi xodimni `insertOne()` orqali kiriting.",
    "explanation": ""
  },
  {
    "id": 45,
    "sector": 3,
    "difficulty": "Floor 3 • Medium",
    "source": "S09 Part A • MongoDB Insert Data",
    "title": "MongoDB Hujjatlar Arxitekturasi (15-Topshiriq)",
    "story": "Moslashuvchan schema (Flexible schema) yordamida yangi xodimlarni kiritish.",
    "taskUz": "Yangi xodimni `insertOne()` orqali kiriting.\n\n📋 **Kutilayotgan Buyruq:**\n• MongoDB mongosh buyrug'i",
    "expectedSql": "db.emp.insertOne({ empno: 8001, ename: \"ALI\", job: \"DEVELOPER\", sal: 2500, deptno: 30 })",
    "hint": "`db.emp.insertOne(...)` yozing.",
    "tags": [
      "MONGODB",
      "INSERT",
      "JSON"
    ],
    "solutions": [
      "db.emp.insertOne({ empno: 8001, ename: \"ALI\", job: \"DEVELOPER\", sal: 2500, deptno: 30 })"
    ],
    "task": "Yangi xodimni `insertOne()` orqali kiriting.",
    "explanation": ""
  },
  {
    "id": 46,
    "sector": 4,
    "difficulty": "Floor 4 • Hard",
    "source": "S09 Part A • MongoDB Query Data",
    "title": "Barcha Hujjatlarni Olish: db.emp.find()",
    "story": "S09 Core Task: `emp` kolleksiyasidagi barcha xodimlar hujjatlarini ko'rib chiqish.",
    "taskUz": "`emp` kolleksiyasidagi barcha hujjatlarni chiqarish uchun `find()` buyrug'ini yozing.\n\n📋 **Kutilayotgan Buyruq:**\n• MongoDB mongosh buyrug'i",
    "expectedSql": "db.emp.find()",
    "hint": "`db.emp.find()` deb yozing.",
    "tags": [
      "MONGODB",
      "FIND",
      "ALL"
    ],
    "solutions": [
      "db.emp.find()"
    ],
    "task": "`emp` kolleksiyasidagi barcha hujjatlarni chiqarish uchun `find()` buyrug'ini yozing.",
    "explanation": ""
  },
  {
    "id": 47,
    "sector": 4,
    "difficulty": "Floor 4 • Hard",
    "source": "S09 Part A • MongoDB Query Data",
    "title": "Bo'lim Bo'yicha Filtrlash: { deptno: 10 }",
    "story": "Faqat 10-bo'limga tegishli hujjatlarni saralab olish.",
    "taskUz": "10-bo'limdagi xodimlarni olish uchun `{ deptno: 10 }` filtri bilan `find()` buyrug'ini yozing.\n\n📋 **Kutilayotgan Buyruq:**\n• MongoDB mongosh buyrug'i",
    "expectedSql": "db.emp.find({ deptno: 10 })",
    "hint": "`db.emp.find({ deptno: 10 })` yozing.",
    "tags": [
      "MONGODB",
      "FIND",
      "EQUALITY"
    ],
    "solutions": [
      "db.emp.find({ deptno: 10 })"
    ],
    "task": "10-bo'limdagi xodimlarni olish uchun `{ deptno: 10 }` filtri bilan `find()` buyrug'ini yozing.",
    "explanation": ""
  },
  {
    "id": 48,
    "sector": 4,
    "difficulty": "Floor 4 • Hard",
    "source": "S09 Part A • MongoDB Query Data",
    "title": "Katta yoki Teng Maoshlar: { sal: { $gte: 3000 } }",
    "story": "Maoshi 3000 va undan yuqori bo'lgan yuqori lavozimli xodimlarni topish.",
    "taskUz": "Maoshi 3000 dan kam bo'lmagan xodimlarni topish uchun `$gte` operatoridan foydalaning.\n\n📋 **Kutilayotgan Buyruq:**\n• MongoDB mongosh buyrug'i",
    "expectedSql": "db.emp.find({ sal: { $gte: 3000 } })",
    "hint": "`db.emp.find({ sal: { $gte: 3000 } })` yozing.",
    "tags": [
      "MONGODB",
      "GTE",
      "FILTER"
    ],
    "solutions": [
      "db.emp.find({ sal: { $gte: 3000 } })"
    ],
    "task": "Maoshi 3000 dan kam bo'lmagan xodimlarni topish uchun `$gte` operatoridan foydalaning.",
    "explanation": ""
  },
  {
    "id": 49,
    "sector": 4,
    "difficulty": "Floor 4 • Hard",
    "source": "S09 Part A • MongoDB Query Data",
    "title": "Hujjatlar Sonini Sanash: countDocuments()",
    "story": "30-bo'limda jami nechta xodim hujjati mavjudligini hisoblang.",
    "taskUz": "30-bo'limdagi hujjatlar sonini `countDocuments()` orqali chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• MongoDB mongosh buyrug'i",
    "expectedSql": "db.emp.countDocuments({ deptno: 30 })",
    "hint": "`db.emp.countDocuments({ deptno: 30 })` yozing.",
    "tags": [
      "MONGODB",
      "COUNT",
      "METRICS"
    ],
    "solutions": [
      "db.emp.countDocuments({ deptno: 30 })"
    ],
    "task": "30-bo'limdagi hujjatlar sonini `countDocuments()` orqali chiqaring.",
    "explanation": ""
  },
  {
    "id": 50,
    "sector": 4,
    "difficulty": "Floor 4 • Hard",
    "source": "S09 Part A • MongoDB Query Data",
    "title": "MongoDB Qidiruv & Proyeksiyalar (5-Bosqich)",
    "story": "Kolleksiyadagi hujjatlarni filtrlash.",
    "taskUz": "20-bo'limdagi xodimlarni `find({ deptno: 20 })` orqali chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• MongoDB mongosh buyrug'i",
    "expectedSql": "db.emp.find({ deptno: 20 })",
    "hint": "`db.emp.find({ deptno: 20 })` yozing.",
    "tags": [
      "MONGODB",
      "FIND",
      "DEPT"
    ],
    "solutions": [
      "db.emp.find({ deptno: 20 })"
    ],
    "task": "20-bo'limdagi xodimlarni `find({ deptno: 20 })` orqali chiqaring.",
    "explanation": ""
  }
];
