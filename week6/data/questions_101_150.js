// ============================================================================
// DATABASE SYSTEMS ACADEMY — WEEK 6: QUERY OPTIMIZATION & TRANSACTIONS
// Variable: QUESTIONS_101_150 (50 Questions)
// ============================================================================

window.QUESTIONS_101_150 = [
  {
    "id": 101,
    "sector": 7,
    "difficulty": "Floor 7 • Expert",
    "source": "S06 Task 25g • 20-Bo'lim Kesishmasi",
    "title": "20-Bo'lim Xodimlari va Dallas Nomzodlari Kesishmasi (INTERSECT)",
    "story": "20-bo'limga tegishli bo'lgan hamda ikkala ro'yxatda mavjud shaxslarni aniqlang.",
    "taskUz": "20-bo'lim xodimlari (`ename WHERE deptno = 20`) and 20-bo'lim nomzodlari (`aname WHERE deptno = 20`) ning kesishmasini `INTERSECT` using display. Order results by `ename`.",
    "expectedSql": "SELECT ename FROM emp WHERE deptno = 20 INTERSECT SELECT aname FROM applicant WHERE deptno = 20 ORDER BY ename",
    "hint": "`SELECT ename FROM emp WHERE deptno = 20 INTERSECT SELECT aname FROM applicant WHERE deptno = 20 ORDER BY ename` yozing.",
    "tags": [
      "INTERSECT",
      "DEPT20",
      "SET OPERATIONS"
    ],
    "solutions": [
      "SELECT ename FROM emp WHERE deptno = 20 INTERSECT SELECT aname FROM applicant WHERE deptno = 20 ORDER BY ename"
    ],
    "task": "20-bo'lim xodimlari (`ename WHERE deptno = 20`) and 20-bo'lim nomzodlari (`aname WHERE deptno = 20`) ning kesishmasini `INTERSECT` using display. Order results by `ename`.",
    "explanation": ""
  },
  {
    "id": 102,
    "sector": 7,
    "difficulty": "Floor 7 • Expert",
    "source": "S06 Task 25h • 20-Bo'lim Ayirmasi",
    "title": "20-Bo'lim Xodimlaridan Nomzod Bo'lmaganlarini Ayirish (EXCEPT)",
    "story": "20-bo'limda ishlayotgan, ammo dastlabki nomzodlar ro'yxatida bo'lmagan xodimni toping.",
    "taskUz": "20-bo'lim xodimlaridan (`ename WHERE deptno = 20`) 20-bo'lim nomzodlarini (`aname WHERE deptno = 20`) `EXCEPT` via ayirib display. Order results by `ename`.",
    "expectedSql": "SELECT ename FROM emp WHERE deptno = 20 EXCEPT SELECT aname FROM applicant WHERE deptno = 20 ORDER BY ename",
    "hint": "`SELECT ename FROM emp WHERE deptno = 20 EXCEPT SELECT aname FROM applicant WHERE deptno = 20 ORDER BY ename` yozing.",
    "tags": [
      "EXCEPT",
      "DEPT20",
      "SET OPERATIONS"
    ],
    "solutions": [
      "SELECT ename FROM emp WHERE deptno = 20 EXCEPT SELECT aname FROM applicant WHERE deptno = 20 ORDER BY ename"
    ],
    "task": "20-bo'lim xodimlaridan (`ename WHERE deptno = 20`) 20-bo'lim nomzodlarini (`aname WHERE deptno = 20`) `EXCEPT` via ayirib display. Order results by `ename`.",
    "explanation": ""
  },
  {
    "id": 103,
    "sector": 7,
    "difficulty": "Floor 7 • Expert",
    "source": "S06 Task 25i • Kotib va 20-Bo'lim Kesishmasi",
    "title": "Ham CLERK, Ham 20-Bo'limda Ishlovchilar (INTERSECT)",
    "story": "Ikki mustaqil filtrlash so'rovi kesishmasi orqali kotiblar va 20-bo'lim xodimlarini toping.",
    "taskUz": "Lavozimi 'CLERK' bo'lgan xodimlar (`ename WHERE job = 'CLERK'`) and 20-bo'limda ishlovchi xodimlar (`ename WHERE deptno = 20`) ning kesishmasini `INTERSECT` via display. Order results by `ename`.",
    "expectedSql": "SELECT ename FROM emp WHERE job = 'CLERK' INTERSECT SELECT ename FROM emp WHERE deptno = 20 ORDER BY ename",
    "hint": "`SELECT ename FROM emp WHERE job = 'CLERK' INTERSECT SELECT ename FROM emp WHERE deptno = 20 ORDER BY ename` yozing.",
    "tags": [
      "INTERSECT",
      "JOB",
      "DEPT"
    ],
    "solutions": [
      "SELECT ename FROM emp WHERE job = 'CLERK' INTERSECT SELECT ename FROM emp WHERE deptno = 20 ORDER BY ename"
    ],
    "task": "Lavozimi 'CLERK' bo'lgan xodimlar (`ename WHERE job = 'CLERK'`) and 20-bo'limda ishlovchi xodimlar (`ename WHERE deptno = 20`) ning kesishmasini `INTERSECT` via display. Order results by `ename`.",
    "explanation": ""
  },
  {
    "id": 104,
    "sector": 7,
    "difficulty": "Floor 7 • Expert",
    "source": "S06 Task 25j • Menejersiz Lavozimlar (EXCEPT)",
    "title": "Barcha Lavozimlardan Menejerni Ayirib Chiqarish (EXCEPT)",
    "story": "Barcha kasblar to'plamidan boshqaruv lavozimi 'MANAGER' ni to'plamlar ayirmasi bilan olib tashlang.",
    "taskUz": "Barcha mavjud lavozimlardan (`job FROM emp`) faqat 'MANAGER' lavozimini (`job FROM emp WHERE job = 'MANAGER'`) `EXCEPT` via ayirib display. Order results by `job`.",
    "expectedSql": "SELECT job FROM emp EXCEPT SELECT job FROM emp WHERE job = 'MANAGER' ORDER BY job",
    "hint": "`SELECT job FROM emp EXCEPT SELECT job FROM emp WHERE job = 'MANAGER' ORDER BY job` yozing.",
    "tags": [
      "EXCEPT",
      "JOB",
      "SET OPERATIONS"
    ],
    "solutions": [
      "SELECT job FROM emp EXCEPT SELECT job FROM emp WHERE job = 'MANAGER' ORDER BY job"
    ],
    "task": "Barcha mavjud lavozimlardan (`job FROM emp`) faqat 'MANAGER' lavozimini (`job FROM emp WHERE job = 'MANAGER'`) `EXCEPT` via ayirib display. Order results by `job`.",
    "explanation": ""
  },
  {
    "id": 105,
    "sector": 7,
    "difficulty": "Floor 7 • Expert",
    "source": "S06 Task 25k • Ism va Kasb Kesishmasi",
    "title": "Xodim va Nomzodlarning Ismi Hamda Kasbi Kesishmasi (INTERSECT)",
    "story": "Ikkala ro'yxatda ham ismi va kasbi 100% bir xil bo'lgan to'liq mosliklarni toping.",
    "taskUz": "`emp` jadandlidagi `ename, job` ustunlari and `applicant` jadandlidagi `aname, job` ustunlarining kesishmasini `INTERSECT` using display. Order results by `ename`.",
    "expectedSql": "SELECT ename, job FROM emp INTERSECT SELECT aname, job FROM applicant ORDER BY ename",
    "hint": "`SELECT ename, job FROM emp INTERSECT SELECT aname, job FROM applicant ORDER BY ename` yozing.",
    "tags": [
      "INTERSECT",
      "MULTI-COLUMN",
      "SET OPERATIONS"
    ],
    "solutions": [
      "SELECT ename, job FROM emp INTERSECT SELECT aname, job FROM applicant ORDER BY ename"
    ],
    "task": "`emp` jadandlidagi `ename, job` ustunlari and `applicant` jadandlidagi `aname, job` ustunlarining kesishmasini `INTERSECT` using display. Order results by `ename`.",
    "explanation": ""
  },
  {
    "id": 106,
    "sector": 8,
    "difficulty": "Floor 8 • Arxitektor",
    "source": "S06 Task 26 • CREATE VIEW v_emp_dept30",
    "title": "30-Bo'lim Ko'rinishini Yaratish (CREATE VIEW)",
    "story": "Eslatma: Relyatsion ko'rinish (VIEW) — bu ma'lumotlar bazasida saqlanadigan virtual jadvaldir.",
    "taskUz": "Faqat 30-bo'lim xodimlarini ko'rsatuvchi `v_emp_dept30` ko'rinishini yarating (`empno, ename, job, sal, deptno` ustunlari bilan).",
    "expectedSql": "CREATE VIEW v_emp_dept30 AS SELECT empno, ename, job, sal, deptno FROM emp WHERE deptno = 30",
    "hint": "`CREATE VIEW v_emp_dept30 AS SELECT empno, ename, job, sal, deptno FROM emp WHERE deptno = 30` .",
    "tags": [
      "CREATE VIEW",
      "VIEWS",
      "DDL"
    ],
    "solutions": [
      "CREATE VIEW v_emp_dept30 AS SELECT empno, ename, job, sal, deptno FROM emp WHERE deptno = 30"
    ],
    "task": "Faqat 30-bo'lim xodimlarini ko'rsatuvchi `v_emp_dept30` ko'rinishini yarating (`empno, ename, job, sal, deptno` ustunlari bilan).",
    "explanation": ""
  },
  {
    "id": 107,
    "sector": 8,
    "difficulty": "Floor 8 • Arxitektor",
    "source": "S06 Task 27 • SELECT FROM VIEW",
    "title": "Ko'rinishdan Maoshi 1500 dan Yuqori Xodimlarni Filtrlash",
    "story": "Yaratilgan virtual `v_emp_dept30` ko'rinishidan oddiy jadval kabi so'rov orqali ma'lumot oling.",
    "taskUz": "`v_emp_dept30` ko'rinishidan maoshi 1500 dan yuqori (`sal > 1500`) bo'lgan xodimlarning name (`ename`) and salary (`sal`) display. Order results by `sal DESC`.",
    "expectedSql": "SELECT ename, sal FROM v_emp_dept30 WHERE sal > 1500 ORDER BY sal DESC",
    "hint": "`SELECT ename, sal FROM v_emp_dept30 WHERE sal > 1500 ORDER BY sal DESC` yozing.",
    "tags": [
      "SELECT FROM VIEW",
      "VIEWS",
      "FILTER"
    ],
    "solutions": [
      "SELECT ename, sal FROM v_emp_dept30 WHERE sal > 1500 ORDER BY sal DESC"
    ],
    "task": "`v_emp_dept30` ko'rinishidan maoshi 1500 dan yuqori (`sal > 1500`) bo'lgan xodimlarning name (`ename`) and salary (`sal`) display. Order results by `sal DESC`.",
    "explanation": ""
  },
  {
    "id": 108,
    "sector": 8,
    "difficulty": "Floor 8 • Arxitektor",
    "source": "S06 Task 28 • CREATE VIEW v_emp_public",
    "title": "Ommaviy Xavfsiz Ko'rinish Yaratish (v_emp_public)",
    "story": "Xavfsizlik nuqtai nazaridan maxfiy maosh (`sal`) ustunini yashirgan holda ommaviy ko'rinish yaratamiz.",
    "taskUz": "Faqat `empno, ename, job, deptno` ustunlaridan iborat bo'lgan `v_emp_public` ko'rinishini yarating.",
    "expectedSql": "CREATE VIEW v_emp_public AS SELECT empno, ename, job, deptno FROM emp",
    "hint": "`CREATE VIEW v_emp_public AS SELECT empno, ename, job, deptno FROM emp` yozing.",
    "tags": [
      "CREATE VIEW",
      "SECURITY",
      "VIEWS"
    ],
    "solutions": [
      "CREATE VIEW v_emp_public AS SELECT empno, ename, job, deptno FROM emp"
    ],
    "task": "Faqat `empno, ename, job, deptno` ustunlaridan iborat bo'lgan `v_emp_public` ko'rinishini yarating.",
    "explanation": ""
  },
  {
    "id": 109,
    "sector": 8,
    "difficulty": "Floor 8 • Arxitektor",
    "source": "S06 Task 28b • v_emp_public dan Filtrlash",
    "title": "Ommaviy Ko'rinishdan Kotiblarni Saralash",
    "story": "Ommaviy `v_emp_public` ko'rinishidan faqat CLERK lavozimidagi xodimlarni saralab oling.",
    "taskUz": "`v_emp_public` ko'rinishidan lavozimi kotib (`job = 'CLERK'`) bo'lgan xodimlarning raqami (`empno`) and ismini (`ename`) display. Order results by `ename`.",
    "expectedSql": "SELECT empno, ename FROM v_emp_public WHERE job = 'CLERK' ORDER BY ename",
    "hint": "`SELECT empno, ename FROM v_emp_public WHERE job = 'CLERK' ORDER BY ename` yozing.",
    "tags": [
      "SELECT FROM VIEW",
      "SECURITY",
      "CLERK"
    ],
    "solutions": [
      "SELECT empno, ename FROM v_emp_public WHERE job = 'CLERK' ORDER BY ename"
    ],
    "task": "`v_emp_public` ko'rinishidan lavozimi kotib (`job = 'CLERK'`) bo'lgan xodimlarning raqami (`empno`) and ismini (`ename`) display. Order results by `ename`.",
    "explanation": ""
  },
  {
    "id": 110,
    "sector": 8,
    "difficulty": "Floor 8 • Arxitektor",
    "source": "S06 Task 29 • CREATE VIEW v_dept_summary",
    "title": "Bo'limlar Xulosasi Ko'rinishini Yaratish (v_dept_summary)",
    "story": "Agregatlangan hisobotlar uchun oldindan hisoblangan virtual ko'rinish yaratamiz.",
    "taskUz": "Bo'limlar bo'yicha `deptno`, xodimlar soni (`COUNT(*) AS emp_count`) and o'rtacha maoshni (`ROUND(AVG(sal), 2) AS avg_sal`) jamlovchi `v_dept_summary` ko'rinishini yarating.",
    "expectedSql": "CREATE VIEW v_dept_summary AS SELECT deptno, COUNT(*) AS emp_count, ROUND(AVG(sal), 2) AS avg_sal FROM emp GROUP BY deptno",
    "hint": "`CREATE VIEW v_dept_summary AS SELECT deptno, COUNT(*) AS emp_count, ROUND(AVG(sal), 2) AS avg_sal FROM emp GROUP BY deptno` yozing.",
    "tags": [
      "CREATE VIEW",
      "AGGREGATE",
      "VIEWS"
    ],
    "solutions": [
      "CREATE VIEW v_dept_summary AS SELECT deptno, COUNT(*) AS emp_count, ROUND(AVG(sal), 2) AS avg_sal FROM emp GROUP BY deptno"
    ],
    "task": "Bo'limlar bo'yicha `deptno`, xodimlar soni (`COUNT(*) AS emp_count`) and o'rtacha maoshni (`ROUND(AVG(sal), 2) AS avg_sal`) jamlovchi `v_dept_summary` ko'rinishini yarating.",
    "explanation": ""
  },
  {
    "id": 111,
    "sector": 8,
    "difficulty": "Floor 8 • Arxitektor",
    "source": "S06 Task 29b • v_dept_summary dan Filtrlash",
    "title": "Xulosa Ko'rinishidan O'rtachasi 2000 dan Yuqorilarini Tanlash",
    "story": "Agregatlangan ko'rinish ustida qo'shimcha WHERE filtrlashni bajaring.",
    "taskUz": "`v_dept_summary` ko'rinishidan o'rtacha maoshi 2000 dan yuqori (`avg_sal > 2000`) bo'lgan bo'limlarning `deptno` and `avg_sal` ustunlarini display. Order results by `avg_sal DESC`.",
    "expectedSql": "SELECT deptno, avg_sal FROM v_dept_summary WHERE avg_sal > 2000 ORDER BY avg_sal DESC",
    "hint": "`SELECT deptno, avg_sal FROM v_dept_summary WHERE avg_sal > 2000 ORDER BY avg_sal DESC` yozing.",
    "tags": [
      "SELECT FROM VIEW",
      "AGGREGATE",
      "FILTER"
    ],
    "solutions": [
      "SELECT deptno, avg_sal FROM v_dept_summary WHERE avg_sal > 2000 ORDER BY avg_sal DESC"
    ],
    "task": "`v_dept_summary` ko'rinishidan o'rtacha maoshi 2000 dan yuqori (`avg_sal > 2000`) bo'lgan bo'limlarning `deptno` and `avg_sal` ustunlarini display. Order results by `avg_sal DESC`.",
    "explanation": ""
  },
  {
    "id": 112,
    "sector": 8,
    "difficulty": "Floor 8 • Arxitektor",
    "source": "S06 Task 29c • CREATE VIEW v_emp_dept_info",
    "title": "Bog'langan Ko'p Jadval Ko'rinishi (v_emp_dept_info)",
    "story": "Dasturchilar doimiy JOIN yozib o'tirmasligi uchun xodim va bo'limni oldindan bog'lovchi ko'rinish tuzing.",
    "taskUz": "`emp` and `dept` jadandllarini `deptno` via bog'lab, `ename, job, sal, dname, loc` ustunlariga ega `v_emp_dept_info` ko'rinishini yarating.",
    "expectedSql": "CREATE VIEW v_emp_dept_info AS SELECT e.ename, e.job, e.sal, d.dname, d.loc FROM emp e JOIN dept d ON e.deptno = d.deptno",
    "hint": "`CREATE VIEW v_emp_dept_info AS SELECT e.ename, e.job, e.sal, d.dname, d.loc FROM emp e JOIN dept d ON e.deptno = d.deptno` yozing.",
    "tags": [
      "CREATE VIEW",
      "JOIN VIEW",
      "VIEWS"
    ],
    "solutions": [
      "CREATE VIEW v_emp_dept_info AS SELECT e.ename, e.job, e.sal, d.dname, d.loc FROM emp e JOIN dept d ON e.deptno = d.deptno"
    ],
    "task": "`emp` and `dept` jadandllarini `deptno` via bog'lab, `ename, job, sal, dname, loc` ustunlariga ega `v_emp_dept_info` ko'rinishini yarating.",
    "explanation": ""
  },
  {
    "id": 113,
    "sector": 8,
    "difficulty": "Floor 8 • Arxitektor",
    "source": "S06 Task 29d • v_emp_dept_info dan Dallasni Filtrlash",
    "title": "Bog'langan Ko'rinishdan Dallas Filialini Tanlash",
    "story": "`v_emp_dept_info` ko'rinishi orqali Dallas shahrida ishlovchilarni oson tanlab oling.",
    "taskUz": "`v_emp_dept_info` ko'rinishidan `loc = 'DALLAS'` shahrida ishlovchi xodimlarning name (`ename`), job title (`job`) and salary (`sal`) display. Order results by `sal DESC`.",
    "expectedSql": "SELECT ename, job, sal FROM v_emp_dept_info WHERE loc = 'DALLAS' ORDER BY sal DESC",
    "hint": "`SELECT ename, job, sal FROM v_emp_dept_info WHERE loc = 'DALLAS' ORDER BY sal DESC` yozing.",
    "tags": [
      "SELECT FROM VIEW",
      "JOIN VIEW",
      "LOC"
    ],
    "solutions": [
      "SELECT ename, job, sal FROM v_emp_dept_info WHERE loc = 'DALLAS' ORDER BY sal DESC"
    ],
    "task": "`v_emp_dept_info` ko'rinishidan `loc = 'DALLAS'` shahrida ishlovchi xodimlarning name (`ename`), job title (`job`) and salary (`sal`) display. Order results by `sal DESC`.",
    "explanation": ""
  },
  {
    "id": 114,
    "sector": 8,
    "difficulty": "Floor 8 • Arxitektor",
    "source": "S06 Task 29e • CREATE VIEW v_commissioned_staff",
    "title": "Komissiya Oluvchilar Ko'rinishi (v_commissioned_staff)",
    "story": "Sotuv departamenti uchun maxsus komissiya oluvchi xodimlar ko'rinishini hosil qiling.",
    "taskUz": "Faqat komissiya oluvchi (`comm IS NOT NULL AND comm > 0`) xodimlarning `empno, ename, job, sal, comm` ustunlaridan iborat `v_commissioned_staff` ko'rinishini yarating.",
    "expectedSql": "CREATE VIEW v_commissioned_staff AS SELECT empno, ename, job, sal, comm FROM emp WHERE comm IS NOT NULL AND comm > 0",
    "hint": "`CREATE VIEW v_commissioned_staff AS SELECT empno, ename, job, sal, comm FROM emp WHERE comm IS NOT NULL AND comm > 0` yozing.",
    "tags": [
      "CREATE VIEW",
      "COMMISSION",
      "VIEWS"
    ],
    "solutions": [
      "CREATE VIEW v_commissioned_staff AS SELECT empno, ename, job, sal, comm FROM emp WHERE comm IS NOT NULL AND comm > 0"
    ],
    "task": "Faqat komissiya oluvchi (`comm IS NOT NULL AND comm > 0`) xodimlarning `empno, ename, job, sal, comm` ustunlaridan iborat `v_commissioned_staff` ko'rinishini yarating.",
    "explanation": ""
  },
  {
    "id": 115,
    "sector": 8,
    "difficulty": "Floor 8 • Arxitektor",
    "source": "S06 Task 29f • v_commissioned_staff dan Filtrlash",
    "title": "Komissiyali Ko'rinishdan Maoshi 1400 dan Yuqorilarini Tanlash",
    "story": "`v_commissioned_staff` ko'rinishidan maoshi 1400 dan baland xodimlarni filtrlash.",
    "taskUz": "`v_commissioned_staff` ko'rinishidan maoshi 1400 dan yuqori (`sal > 1400`) bo'lgan xodimlarning name (`ename`), maoshi (`sal`) and komissiyasini (`comm`) display.",
    "expectedSql": "SELECT ename, sal, comm FROM v_commissioned_staff WHERE sal > 1400",
    "hint": "`SELECT ename, sal, comm FROM v_commissioned_staff WHERE sal > 1400` yozing.",
    "tags": [
      "SELECT FROM VIEW",
      "COMMISSION",
      "FILTER"
    ],
    "solutions": [
      "SELECT ename, sal, comm FROM v_commissioned_staff WHERE sal > 1400"
    ],
    "task": "`v_commissioned_staff` ko'rinishidan maoshi 1400 dan yuqori (`sal > 1400`) bo'lgan xodimlarning name (`ename`), maoshi (`sal`) and komissiyasini (`comm`) display.",
    "explanation": ""
  },
  {
    "id": 116,
    "sector": 8,
    "difficulty": "Floor 8 • Arxitektor",
    "source": "S06 Task 29g • CREATE VIEW v_all_talents",
    "title": "Barcha Iqtidorlar Ko'rinishi (v_all_talents)",
    "story": "Xodimlar va nomzodlar birlashmasidan iborat korporativ iqtidorlar ko'rinishini yarating.",
    "taskUz": "`emp` dagi `ename, job` and `applicant` dagi `aname, job` ning `UNION` birlashmasidan iborat `v_all_talents` ko'rinishini yarating.",
    "expectedSql": "CREATE VIEW v_all_talents AS SELECT ename, job FROM emp UNION SELECT aname, job FROM applicant",
    "hint": "`CREATE VIEW v_all_talents AS SELECT ename, job FROM emp UNION SELECT aname, job FROM applicant` yozing.",
    "tags": [
      "CREATE VIEW",
      "UNION VIEW",
      "VIEWS"
    ],
    "solutions": [
      "CREATE VIEW v_all_talents AS SELECT ename, job FROM emp UNION SELECT aname, job FROM applicant"
    ],
    "task": "`emp` dagi `ename, job` and `applicant` dagi `aname, job` ning `UNION` birlashmasidan iborat `v_all_talents` ko'rinishini yarating.",
    "explanation": ""
  },
  {
    "id": 117,
    "sector": 8,
    "difficulty": "Floor 8 • Arxitektor",
    "source": "S06 Task 29h • v_all_talents dan Tahlilchilarni Saralash",
    "title": "Iqtidorlar Ko'rinishidan Analitiklarni Tanlash",
    "story": "`v_all_talents` ko'rinishi orqali kompaniyadagi barcha mavjud va potentsial analitiklarni ajrating.",
    "taskUz": "`v_all_talents` ko'rinishidan lavozimi analitik (`job = 'ANALYST'`) bo'lgan barcha shaxslarning ismini (`ename`) display. Natijani alphabetical order saralang.",
    "expectedSql": "SELECT ename FROM v_all_talents WHERE job = 'ANALYST' ORDER BY ename",
    "hint": "`SELECT ename FROM v_all_talents WHERE job = 'ANALYST' ORDER BY ename` yozing.",
    "tags": [
      "SELECT FROM VIEW",
      "UNION VIEW",
      "ANALYST"
    ],
    "solutions": [
      "SELECT ename FROM v_all_talents WHERE job = 'ANALYST' ORDER BY ename"
    ],
    "task": "`v_all_talents` ko'rinishidan lavozimi analitik (`job = 'ANALYST'`) bo'lgan barcha shaxslarning ismini (`ename`) display. Natijani alphabetical order saralang.",
    "explanation": ""
  },
  {
    "id": 118,
    "sector": 8,
    "difficulty": "Floor 8 • Arxitektor",
    "source": "S06 Task 29i • v_emp_dept30 dan Kotibni Topish",
    "title": "30-Bo'lim Ko'rinishidan Kotibni Topish",
    "story": "`v_emp_dept30` ko'rinishi bo'yicha CLERK lavozimida faoliyat yurituvchi xodimni aniqlang.",
    "taskUz": "`v_emp_dept30` ko'rinishidan `job = 'CLERK'` bo'lgan xodimning name (`ename`) and salary (`sal`) display.",
    "expectedSql": "SELECT ename, sal FROM v_emp_dept30 WHERE job = 'CLERK'",
    "hint": "`SELECT ename, sal FROM v_emp_dept30 WHERE job = 'CLERK'` yozing.",
    "tags": [
      "SELECT FROM VIEW",
      "CLERK",
      "FILTER"
    ],
    "solutions": [
      "SELECT ename, sal FROM v_emp_dept30 WHERE job = 'CLERK'"
    ],
    "task": "`v_emp_dept30` ko'rinishidan `job = 'CLERK'` bo'lgan xodimning name (`ename`) and salary (`sal`) display.",
    "explanation": ""
  },
  {
    "id": 119,
    "sector": 8,
    "difficulty": "Floor 8 • Arxitektor",
    "source": "S06 Task 29j • v_emp_dept_info dan ACCOUNTING Xodimlari",
    "title": "Bog'langan Ko'rinishdan Buxgalteriya Bo'limini Saralash",
    "story": "`v_emp_dept_info` ko'rinishidan buxgalteriya (`dname = 'ACCOUNTING'`) xodimlarini saralang.",
    "taskUz": "`v_emp_dept_info` ko'rinishidan `dname = 'ACCOUNTING'` bo'limida ishlovchi xodimlarning name (`ename`) and salary (`sal`) display. Order results by `sal DESC`.",
    "expectedSql": "SELECT ename, sal FROM v_emp_dept_info WHERE dname = 'ACCOUNTING' ORDER BY sal DESC",
    "hint": "`SELECT ename, sal FROM v_emp_dept_info WHERE dname = 'ACCOUNTING' ORDER BY sal DESC` yozing.",
    "tags": [
      "SELECT FROM VIEW",
      "ACCOUNTING",
      "ORDER BY"
    ],
    "solutions": [
      "SELECT ename, sal FROM v_emp_dept_info WHERE dname = 'ACCOUNTING' ORDER BY sal DESC"
    ],
    "task": "`v_emp_dept_info` ko'rinishidan `dname = 'ACCOUNTING'` bo'limida ishlovchi xodimlarning name (`ename`) and salary (`sal`) display. Order results by `sal DESC`.",
    "explanation": ""
  },
  {
    "id": 120,
    "sector": 8,
    "difficulty": "Floor 8 • Arxitektor",
    "source": "S06 Task 29k • CREATE OR REPLACE VIEW",
    "title": "Ko'rinishni Yangilash (CREATE OR REPLACE VIEW)",
    "story": "PostgreSQL da ko'rinish tuzilishini mavjud nom bilan xavfsiz yangilash uchun `CREATE OR REPLACE VIEW` ishlatiladi.",
    "taskUz": "`v_emp_dept30` ko'rinishini `CREATE OR REPLACE VIEW` using qayta yarating (`empno, ename, job, sal, deptno FROM emp WHERE deptno = 30`).",
    "expectedSql": "CREATE OR REPLACE VIEW v_emp_dept30 AS SELECT empno, ename, job, sal, deptno FROM emp WHERE deptno = 30",
    "hint": "`CREATE OR REPLACE VIEW v_emp_dept30 AS SELECT empno, ename, job, sal, deptno FROM emp WHERE deptno = 30` .",
    "tags": [
      "CREATE OR REPLACE VIEW",
      "DDL",
      "VIEWS"
    ],
    "solutions": [
      "CREATE OR REPLACE VIEW v_emp_dept30 AS SELECT empno, ename, job, sal, deptno FROM emp WHERE deptno = 30"
    ],
    "task": "`v_emp_dept30` ko'rinishini `CREATE OR REPLACE VIEW` using qayta yarating (`empno, ename, job, sal, deptno FROM emp WHERE deptno = 30`).",
    "explanation": ""
  },
  {
    "id": 121,
    "sector": 9,
    "difficulty": "Floor 9 • Bosh Arxitektor",
    "source": "L06 Heuristic Rule 1 • Optimal Reja",
    "title": "Optimal So'rov Rejasini Tanlash (is_optimal = true)",
    "story": "Hevristik optimallashtirishning 1-oltin qoidasi: Selektsiyani (WHERE filtrini) relyatsion daraxtda iloji boricha pastki barglarga tushirish kerak.",
    "taskUz": "`query_plans` jadandlidan eng optimal deb baholangan (`is_optimal = true`) strategiyaning `plan_id, query_desc, strategy` ustunlarini display.",
    "expectedSql": "SELECT plan_id, query_desc, strategy FROM query_plans WHERE is_optimal = true",
    "hint": "`SELECT plan_id, query_desc, strategy FROM query_plans WHERE is_optimal = true` yozing.",
    "tags": [
      "HEURISTICS",
      "OPTIMAL PLAN",
      "RELATIONAL ALGEBRA"
    ],
    "solutions": [
      "SELECT plan_id, query_desc, strategy FROM query_plans WHERE is_optimal = true"
    ],
    "task": "`query_plans` jadandlidan eng optimal deb baholangan (`is_optimal = true`) strategiyaning `plan_id, query_desc, strategy` ustunlarini display.",
    "explanation": ""
  },
  {
    "id": 122,
    "sector": 9,
    "difficulty": "Floor 9 • Bosh Arxitektor",
    "source": "L06 Heuristic Evaluation • I/O Yuklamasi Saralash",
    "title": "Strategiyalarni Hisoblangan I/O Bo'yicha Saralash",
    "story": "So'rov rejalari qancha kam disk I/O sarflasa, tizim shuncha tez ishlaydi.",
    "taskUz": "`query_plans` jadandlidan strategiyalarni hisoblangan I/O yuklamasi (`estimated_io`) bo'yicha eng tejamkoridan boshlab saralang (`plan_id, strategy, estimated_io`).",
    "expectedSql": "SELECT plan_id, strategy, estimated_io FROM query_plans ORDER BY estimated_io",
    "hint": "`SELECT plan_id, strategy, estimated_io FROM query_plans ORDER BY estimated_io` yozing.",
    "tags": [
      "HEURISTICS",
      "DISK IO",
      "ORDER BY"
    ],
    "solutions": [
      "SELECT plan_id, strategy, estimated_io FROM query_plans ORDER BY estimated_io"
    ],
    "task": "`query_plans` jadandlidan strategiyalarni hisoblangan I/O yuklamasi (`estimated_io`) bo'yicha eng tejamkoridan boshlab saralang (`plan_id, strategy, estimated_io`).",
    "explanation": ""
  },
  {
    "id": 123,
    "sector": 9,
    "difficulty": "Floor 9 • Bosh Arxitektor",
    "source": "L06 Relational Algebra • Tejamkorlik Foizi",
    "title": "Hevristik Tejamkorlik Foizini Hisoblash",
    "story": "Dekart ko'paytmasidan (101050 I/O) Selektsiyani pastga tushirishga (1160 I/O) o'tgandagi tejamkorlik foizini hisoblang.",
    "taskUz": "Disk I/O yuklamasi tejamkorlik foizini hisoblang: `SELECT ROUND((101050.0 - 1160.0) / 101050.0 * 100, 2) AS saving_pct;`",
    "expectedSql": "SELECT ROUND((101050.0 - 1160.0) / 101050.0 * 100, 2) AS saving_pct",
    "hint": "`SELECT ROUND((101050.0 - 1160.0) / 101050.0 * 100, 2) AS saving_pct` .",
    "tags": [
      "MATH",
      "PERCENTAGE",
      "SAVINGS"
    ],
    "solutions": [
      "SELECT ROUND((101050.0 - 1160.0) / 101050.0 * 100, 2) AS saving_pct"
    ],
    "task": "Disk I/O yuklamasi tejamkorlik foizini hisoblang: `SELECT ROUND((101050.0 - 1160.0) / 101050.0 * 100, 2) AS saving_pct;`",
    "explanation": ""
  },
  {
    "id": 124,
    "sector": 9,
    "difficulty": "Floor 9 • Bosh Arxitektor",
    "source": "L06 Heuristic Cost • Eng Samarasiz Reja",
    "title": "Eng Yuqori Xarajatli (Samarasiz) Strategiya",
    "story": "Optimizatsiyada qochilishi kerak bo'lgan eng qimmat (Dekart ko'paytmasi) rejasini aniqlang.",
    "taskUz": "`query_plans` jadandlidan eng past samardorlikka (`cost_rank = 3`) ega strategiyaning `plan_id, strategy, estimated_io` ustunlarini display.",
    "expectedSql": "SELECT plan_id, strategy, estimated_io FROM query_plans WHERE cost_rank = 3",
    "hint": "`SELECT plan_id, strategy, estimated_io FROM query_plans WHERE cost_rank = 3` yozing.",
    "tags": [
      "HEURISTICS",
      "WORST PLAN",
      "CARTESIAN"
    ],
    "solutions": [
      "SELECT plan_id, strategy, estimated_io FROM query_plans WHERE cost_rank = 3"
    ],
    "task": "`query_plans` jadandlidan eng past samardorlikka (`cost_rank = 3`) ega strategiyaning `plan_id, strategy, estimated_io` ustunlarini display.",
    "explanation": ""
  },
  {
    "id": 125,
    "sector": 9,
    "difficulty": "Floor 9 • Bosh Arxitektor",
    "source": "L06 Heuristic Rule 2 • Proyeksiyani (π) Tushirish",
    "title": "Proyeksiyani Pastga Tushirish: Keraksiz Ustunlarni Erta Olib Tashlash",
    "story": "Hevristikaning 2-qoidasi: Relyatsion daraxtda faqat kerakli ustunlarni erta tanlab olish (Proyeksiya π) oraliq xotira sarfini keskin kamaytiradi.",
    "taskUz": "`emp` and `dept` jadandllarini `deptno` via bog'lab, faqat `ename` and `dname` ustunlarini display. Order results by `ename`.",
    "expectedSql": "SELECT e.ename, d.dname FROM emp e JOIN dept d ON e.deptno = d.deptno ORDER BY e.ename",
    "hint": "`SELECT e.ename, d.dname FROM emp e JOIN dept d ON e.deptno = d.deptno ORDER BY e.ename` yozing.",
    "tags": [
      "PROJECTION",
      "JOIN",
      "HEURISTICS"
    ],
    "solutions": [
      "SELECT e.ename, d.dname FROM emp e JOIN dept d ON e.deptno = d.deptno ORDER BY e.ename"
    ],
    "task": "`emp` and `dept` jadandllarini `deptno` via bog'lab, faqat `ename` and `dname` ustunlarini display. Order results by `ename`.",
    "explanation": ""
  },
  {
    "id": 126,
    "sector": 9,
    "difficulty": "Floor 9 • Bosh Arxitektor",
    "source": "L06 Selektsiya Kaskadi • Cascade of Selection",
    "title": "Relyatsion Algebra: Selektsiya Kaskadi (σ)",
    "story": "Kaskad qoidasi: `σ_c1 ∧ c2(R) ≡ σ_c1(σ_c2(R))`. Ikki filtrni birlashtirib, faqat 10-bo'limdagi maoshi 2000 dan yuqori xodimlarni toping.",
    "taskUz": "10-bo'limda ishlaydigan and maoshi 2000 dan yuqori bo'lgan xodimlarning name (`ename`), maoshi (`sal`) and bo'lim raqamini (`deptno`) display. Order results by `sal DESC`.",
    "expectedSql": "SELECT ename, sal, deptno FROM emp WHERE deptno = 10 AND sal > 2000 ORDER BY sal DESC",
    "hint": "`SELECT ename, sal, deptno FROM emp WHERE deptno = 10 AND sal > 2000 ORDER BY sal DESC` yozing.",
    "tags": [
      "CASCADE",
      "SELECTION",
      "WHERE"
    ],
    "solutions": [
      "SELECT ename, sal, deptno FROM emp WHERE deptno = 10 AND sal > 2000 ORDER BY sal DESC"
    ],
    "task": "10-bo'limda ishlaydigan and maoshi 2000 dan yuqori bo'lgan xodimlarning name (`ename`), maoshi (`sal`) and bo'lim raqamini (`deptno`) display. Order results by `sal DESC`.",
    "explanation": ""
  },
  {
    "id": 127,
    "sector": 9,
    "difficulty": "Floor 9 • Bosh Arxitektor",
    "source": "L06 Cartesian Product • Dekart Xavfi",
    "title": "Dekart Ko'paytmasi Qatorlar Hajmini Hisoblash",
    "story": "Agar `emp` (14) va `dept` (4) shartsiz CROSS JOIN qilinsa, nechta oraliq qator hosil bo'lishini hisoblang.",
    "taskUz": "Dekart ko'paytmasi qatorlari sonini hisoblang: `SELECT 14 * 4 AS cartesian_rows;`",
    "expectedSql": "SELECT 14 * 4 AS cartesian_rows",
    "hint": "`SELECT 14 * 4 AS cartesian_rows` .",
    "tags": [
      "CARTESIAN",
      "MATH",
      "ROWS"
    ],
    "solutions": [
      "SELECT 14 * 4 AS cartesian_rows"
    ],
    "task": "Dekart ko'paytmasi qatorlari sonini hisoblang: `SELECT 14 * 4 AS cartesian_rows;`",
    "explanation": ""
  },
  {
    "id": 128,
    "sector": 9,
    "difficulty": "Floor 9 • Bosh Arxitektor",
    "source": "L06 Heuristic Join Order • 3 Jadval Bog'lanishi",
    "title": "Optimal Bog'lanish Tartibi (emp, dept, works_on)",
    "story": "Uchta jadvalni bog'lashda filtrni (`pno = 101`) biriktirib, oraliq qatorlar sonini minimal darajada saqlang.",
    "taskUz": "`emp`, `dept` and `works_on` jadandllarini optimal bog'lab, 101-loyihada (`w.pno = 101`) ishlayotgan xodimlarning `ename, dname, hours` ustunlarini display. Order results by `ename`.",
    "expectedSql": "SELECT e.ename, d.dname, w.hours FROM emp e JOIN dept d ON e.deptno = d.deptno JOIN works_on w ON e.empno = w.empno WHERE w.pno = 101 ORDER BY e.ename",
    "hint": "`SELECT e.ename, d.dname, w.hours FROM emp e JOIN dept d ON e.deptno = d.deptno JOIN works_on w ON e.empno = w.empno WHERE w.pno = 101 ORDER BY e.ename` yozing.",
    "tags": [
      "JOIN ORDER",
      "HEURISTICS",
      "3-TABLES"
    ],
    "solutions": [
      "SELECT e.ename, d.dname, w.hours FROM emp e JOIN dept d ON e.deptno = d.deptno JOIN works_on w ON e.empno = w.empno WHERE w.pno = 101 ORDER BY e.ename"
    ],
    "task": "`emp`, `dept` and `works_on` jadandllarini optimal bog'lab, 101-loyihada (`w.pno = 101`) ishlayotgan xodimlarning `ename, dname, hours` ustunlarini display. Order results by `ename`.",
    "explanation": ""
  },
  {
    "id": 129,
    "sector": 9,
    "difficulty": "Floor 9 • Bosh Arxitektor",
    "source": "L06 Subexpression Elimination • Diapazon",
    "title": "Umumiy Ifodani Hisoblash (Maosh Diapazoni)",
    "story": "Kompaniyadagi maksimal va minimal maosh farqini (diapazonini) bitta optimallashgan ifodada chiqaring.",
    "taskUz": "`emp` jadandlidagi maksimal maoshdan minimal maoshni ayirib, diapazonni (`MAX(sal) - MIN(sal) AS sal_range`) display.",
    "expectedSql": "SELECT MAX(sal) - MIN(sal) AS sal_range FROM emp",
    "hint": "`SELECT MAX(sal) - MIN(sal) AS sal_range FROM emp` yozing.",
    "tags": [
      "SUBEXPRESSION",
      "AGGREGATE",
      "RANGE"
    ],
    "solutions": [
      "SELECT MAX(sal) - MIN(sal) AS sal_range FROM emp"
    ],
    "task": "`emp` jadandlidagi maksimal maoshdan minimal maoshni ayirib, diapazonni (`MAX(sal) - MIN(sal) AS sal_range`) display.",
    "explanation": ""
  },
  {
    "id": 130,
    "sector": 9,
    "difficulty": "Floor 9 • Bosh Arxitektor",
    "source": "L06 Pushdown into Views • Predikatni Tushirish",
    "title": "Predikatni Ko'rinish Ichiga Tushirish (Pushdown)",
    "story": "Optimallashtiruvchi ko'rinish tashqarisidagi `WHERE job = 'MANAGER'` filtrini ko'rinish ichidagi jadvalga tushiradi.",
    "taskUz": "`v_emp_dept30` ko'rinishidan `job = 'MANAGER'` bo'lgan xodimning name (`ename`) and salary (`sal`) display.",
    "expectedSql": "SELECT ename, sal FROM v_emp_dept30 WHERE job = 'MANAGER'",
    "hint": "`SELECT ename, sal FROM v_emp_dept30 WHERE job = 'MANAGER'` yozing.",
    "tags": [
      "PUSHDOWN",
      "VIEW",
      "PREDICATE"
    ],
    "solutions": [
      "SELECT ename, sal FROM v_emp_dept30 WHERE job = 'MANAGER'"
    ],
    "task": "`v_emp_dept30` ko'rinishidan `job = 'MANAGER'` bo'lgan xodimning name (`ename`) and salary (`sal`) display.",
    "explanation": ""
  },
  {
    "id": 131,
    "sector": 9,
    "difficulty": "Floor 9 • Bosh Arxitektor",
    "source": "L06 Query Transformation • Ekvivalent Almashtirish",
    "title": "So'rovni Ekvivalent Skalyar Tenglikka O'zgartirish",
    "story": "Yagona natija beruvchi subqueryni `IN` o'rniga to'g'ridan-to'g'ri skalyar `=` operatoriga aylantirish samaraliroqdir.",
    "taskUz": "Prezident (`job = 'PRESIDENT'`) ning maoshiga teng bo'lgan xodimning name (`ename`) and salary (`sal`) skalyar `=` subquerysi via display.",
    "expectedSql": "SELECT ename, sal FROM emp WHERE sal = (SELECT sal FROM emp WHERE job = 'PRESIDENT')",
    "hint": "`SELECT ename, sal FROM emp WHERE sal = (SELECT sal FROM emp WHERE job = 'PRESIDENT')` yozing.",
    "tags": [
      "TRANSFORMATION",
      "SCALAR EQUAL",
      "EQUIVALENCE"
    ],
    "solutions": [
      "SELECT ename, sal FROM emp WHERE sal = (SELECT sal FROM emp WHERE job = 'PRESIDENT')"
    ],
    "task": "Prezident (`job = 'PRESIDENT'`) ning maoshiga teng bo'lgan xodimning name (`ename`) and salary (`sal`) skalyar `=` subquerysi via display.",
    "explanation": ""
  },
  {
    "id": 132,
    "sector": 9,
    "difficulty": "Floor 9 • Bosh Arxitektor",
    "source": "L06 Intermediate Row Reduction • Erta Selektsiya",
    "title": "Erta Selektsiya Orqali Oraliq Qatorlarni Qisqartirish",
    "story": "20-bo'limdagi barcha xodimlarni emas, faqat ANALYST lavozimidagilarni darhol filtrlash oraliq xotirani tejaydi.",
    "taskUz": "20-bo'limdagi (`deptno = 20`) and analitik (`job = 'ANALYST'`) lavozimidagi xodimlarning name (`ename`) and salary (`sal`) display. Order results by `ename`.",
    "expectedSql": "SELECT ename, sal FROM emp WHERE deptno = 20 AND job = 'ANALYST' ORDER BY ename",
    "hint": "`SELECT ename, sal FROM emp WHERE deptno = 20 AND job = 'ANALYST' ORDER BY ename` yozing.",
    "tags": [
      "EARLY SELECTION",
      "WHERE",
      "INTERMEDIATE"
    ],
    "solutions": [
      "SELECT ename, sal FROM emp WHERE deptno = 20 AND job = 'ANALYST' ORDER BY ename"
    ],
    "task": "20-bo'limdagi (`deptno = 20`) and analitik (`job = 'ANALYST'`) lavozimidagi xodimlarning name (`ename`) and salary (`sal`) display. Order results by `ename`.",
    "explanation": ""
  },
  {
    "id": 133,
    "sector": 9,
    "difficulty": "Floor 9 • Bosh Arxitektor",
    "source": "L06 Subquery Flattening • Unnesting to JOIN",
    "title": "Subqueryni JOIN ga O'girish (Unnesting / Flattening)",
    "story": "Optimallashtiruvchi sekin korrelyatsion subqueryni tezkor JOIN va GROUP BY ko'rinishiga aylantiradi.",
    "taskUz": "Rahbarlar and ularga bo'ysunuvchilar sonini `emp m JOIN emp e ON m.empno = e.mgr` via guruhlab display. (`m.ename, COUNT(e.empno) AS reports_count`). Order results by `reports_count DESC`.",
    "expectedSql": "SELECT m.ename, COUNT(e.empno) AS reports_count FROM emp m JOIN emp e ON m.empno = e.mgr GROUP BY m.ename ORDER BY reports_count DESC",
    "hint": "`SELECT m.ename, COUNT(e.empno) AS reports_count FROM emp m JOIN emp e ON m.empno = e.mgr GROUP BY m.ename ORDER BY reports_count DESC` yozing.",
    "tags": [
      "UNNESTING",
      "FLATTENING",
      "GROUP BY"
    ],
    "solutions": [
      "SELECT m.ename, COUNT(e.empno) AS reports_count FROM emp m JOIN emp e ON m.empno = e.mgr GROUP BY m.ename ORDER BY reports_count DESC"
    ],
    "task": "Rahbarlar and ularga bo'ysunuvchilar sonini `emp m JOIN emp e ON m.empno = e.mgr` via guruhlab display. (`m.ename, COUNT(e.empno) AS reports_count`). Order results by `reports_count DESC`.",
    "explanation": ""
  },
  {
    "id": 134,
    "sector": 9,
    "difficulty": "Floor 9 • Bosh Arxitektor",
    "source": "L06 Cost Saving • I/O Farqini Hisoblash",
    "title": "Hevristik I/O Yuklama Farqini Hisoblash",
    "story": "'Join then Filter' (3050 I/O) va 'Push Selections Down' (1160 I/O) orasidagi tejalgan I/O miqdorini hisoblang.",
    "taskUz": "Oraliq yuklama farqini hisoblang: `SELECT 3050 - 1160 AS io_difference;`",
    "expectedSql": "SELECT 3050 - 1160 AS io_difference",
    "hint": "`SELECT 3050 - 1160 AS io_difference` .",
    "tags": [
      "MATH",
      "DIFF",
      "DISK IO"
    ],
    "solutions": [
      "SELECT 3050 - 1160 AS io_difference"
    ],
    "task": "Oraliq yuklama farqini hisoblang: `SELECT 3050 - 1160 AS io_difference;`",
    "explanation": ""
  },
  {
    "id": 135,
    "sector": 9,
    "difficulty": "Floor 9 • Bosh Arxitektor",
    "source": "L06 Heuristic Elimination • Samarasiz Rejalar",
    "title": "Barcha Samarasiz (is_optimal = false) Rejalar",
    "story": "Tizim qaysi rejalarni rad etishi kerakligini tekshirish uchun samarasiz rejalarni saralang.",
    "taskUz": "`query_plans` jadandlidan `is_optimal = false` bo'lgan strategiyalarning `plan_id, strategy, estimated_io` ustunlarini display. Order results by `cost_rank`.",
    "expectedSql": "SELECT plan_id, strategy, estimated_io FROM query_plans WHERE is_optimal = false ORDER BY cost_rank",
    "hint": "`SELECT plan_id, strategy, estimated_io FROM query_plans WHERE is_optimal = false ORDER BY cost_rank` yozing.",
    "tags": [
      "ELIMINATION",
      "QUERY PLANS",
      "HEURISTICS"
    ],
    "solutions": [
      "SELECT plan_id, strategy, estimated_io FROM query_plans WHERE is_optimal = false ORDER BY cost_rank"
    ],
    "task": "`query_plans` jadandlidan `is_optimal = false` bo'lgan strategiyalarning `plan_id, strategy, estimated_io` ustunlarini display. Order results by `cost_rank`.",
    "explanation": ""
  },
  {
    "id": 136,
    "sector": 10,
    "difficulty": "Floor 10 • Data Arxitektori",
    "source": "L06 PostgreSQL EXPLAIN • So'rov Rejasini Ko'rish",
    "title": "PostgreSQL EXPLAIN: JOIN So'rov Rejasi",
    "story": "PostgreSQL da so'rov rejasini (Execution Plan) ko'rish uchun so'rov oldiga `EXPLAIN` kalit so'zi qo'yiladi.",
    "taskUz": "`emp` and `dept` jadandllari bog'lanishi uchun `EXPLAIN SELECT e.ename, d.dname FROM emp e JOIN dept d ON e.deptno = d.deptno` buyrug'ini bering.",
    "expectedSql": "EXPLAIN SELECT e.ename, d.dname FROM emp e JOIN dept d ON e.deptno = d.deptno",
    "hint": "`EXPLAIN SELECT e.ename, d.dname FROM emp e JOIN dept d ON e.deptno = d.deptno` .",
    "tags": [
      "EXPLAIN",
      "COST MODEL",
      "POSTGRESQL"
    ],
    "solutions": [
      "EXPLAIN SELECT e.ename, d.dname FROM emp e JOIN dept d ON e.deptno = d.deptno"
    ],
    "task": "`emp` and `dept` jadandllari bog'lanishi uchun `EXPLAIN SELECT e.ename, d.dname FROM emp e JOIN dept d ON e.deptno = d.deptno` buyrug'ini bering.",
    "explanation": ""
  },
  {
    "id": 137,
    "sector": 10,
    "difficulty": "Floor 10 • Data Arxitektori",
    "source": "L06 PostgreSQL EXPLAIN • Subquery Rejasi",
    "title": "PostgreSQL EXPLAIN: Ichki So'rov Rejasi",
    "story": "Ichki subqueryli so'rov qanday fizik operatorlar bilan bajarilishini ko'rish uchun EXPLAIN qiling.",
    "taskUz": "O'rtacha maoshdan yuqori xodimlarni topish so'rovi uchun `EXPLAIN SELECT ename, sal FROM emp WHERE sal > (SELECT AVG(sal) FROM emp)` rejasini display.",
    "expectedSql": "EXPLAIN SELECT ename, sal FROM emp WHERE sal > (SELECT AVG(sal) FROM emp)",
    "hint": "`EXPLAIN SELECT ename, sal FROM emp WHERE sal > (SELECT AVG(sal) FROM emp)` yozing.",
    "tags": [
      "EXPLAIN",
      "SUBQUERY PLAN",
      "COST"
    ],
    "solutions": [
      "EXPLAIN SELECT ename, sal FROM emp WHERE sal > (SELECT AVG(sal) FROM emp)"
    ],
    "task": "O'rtacha maoshdan yuqori xodimlarni topish so'rovi uchun `EXPLAIN SELECT ename, sal FROM emp WHERE sal > (SELECT AVG(sal) FROM emp)` rejasini display.",
    "explanation": ""
  },
  {
    "id": 138,
    "sector": 10,
    "difficulty": "Floor 10 • Data Arxitektori",
    "source": "L06 PostgreSQL EXPLAIN • Filtr Rejasi",
    "title": "PostgreSQL EXPLAIN: WHERE Filtr Rejasi (Seq Scan)",
    "story": "`WHERE sal >= 2000` filtrlash so'rovi ketma-ket skanerlash (Seq Scan) va filtr shartini ko'rsatadi.",
    "taskUz": "Maosh filtri uchun `EXPLAIN SELECT ename, job, sal FROM emp WHERE sal >= 2000` rejasini display.",
    "expectedSql": "EXPLAIN SELECT ename, job, sal FROM emp WHERE sal >= 2000",
    "hint": "`EXPLAIN SELECT ename, job, sal FROM emp WHERE sal >= 2000` yozing.",
    "tags": [
      "EXPLAIN",
      "SEQ SCAN",
      "FILTER"
    ],
    "solutions": [
      "EXPLAIN SELECT ename, job, sal FROM emp WHERE sal >= 2000"
    ],
    "task": "Maosh filtri uchun `EXPLAIN SELECT ename, job, sal FROM emp WHERE sal >= 2000` rejasini display.",
    "explanation": ""
  },
  {
    "id": 139,
    "sector": 10,
    "difficulty": "Floor 10 • Data Arxitektori",
    "source": "L06 PostgreSQL EXPLAIN • Aggregation Rejasi",
    "title": "PostgreSQL EXPLAIN: Guruhlash Rejasi (HashAggregate)",
    "story": "`GROUP BY deptno` agregatsiyasi HashAggregate orqali xotirada qanday hisoblanishini ko'ring.",
    "taskUz": "Guruhlash so'rovi uchun `EXPLAIN SELECT deptno, COUNT(*) FROM emp GROUP BY deptno` rejasini display.",
    "expectedSql": "EXPLAIN SELECT deptno, COUNT(*) FROM emp GROUP BY deptno",
    "hint": "`EXPLAIN SELECT deptno, COUNT(*) FROM emp GROUP BY deptno` yozing.",
    "tags": [
      "EXPLAIN",
      "HASH AGGREGATE",
      "GROUP BY"
    ],
    "solutions": [
      "EXPLAIN SELECT deptno, COUNT(*) FROM emp GROUP BY deptno"
    ],
    "task": "Guruhlash so'rovi uchun `EXPLAIN SELECT deptno, COUNT(*) FROM emp GROUP BY deptno` rejasini display.",
    "explanation": ""
  },
  {
    "id": 140,
    "sector": 10,
    "difficulty": "Floor 10 • Data Arxitektori",
    "source": "L06 Cost Parameters • seq_page_cost",
    "title": "PostgreSQL Narx Parametri: seq_page_cost (1.0)",
    "story": "PostgreSQL da bitta sahifani ketma-ket (sequential) o'qish narxi standart bo'yicha 1.0 ga teng.",
    "taskUz": "`optimizer_stats` jadandlidan `param_name = 'seq_page_cost'` parametrining `param_name, default_andlue, description` ustunlarini display.",
    "expectedSql": "SELECT param_name, default_value, description FROM optimizer_stats WHERE param_name = 'seq_page_cost'",
    "hint": "`SELECT param_name, default_value, description FROM optimizer_stats WHERE param_name = 'seq_page_cost'` yozing.",
    "tags": [
      "COST PARAMETER",
      "SEQ_PAGE_COST",
      "STATS"
    ],
    "solutions": [
      "SELECT param_name, default_value, description FROM optimizer_stats WHERE param_name = 'seq_page_cost'"
    ],
    "task": "`optimizer_stats` jadandlidan `param_name = 'seq_page_cost'` parametrining `param_name, default_andlue, description` ustunlarini display.",
    "explanation": ""
  },
  {
    "id": 141,
    "sector": 10,
    "difficulty": "Floor 10 • Data Arxitektori",
    "source": "L06 Cost Parameters • random_page_cost",
    "title": "PostgreSQL Narx Parametri: random_page_cost (4.0)",
    "story": "Tasodifiy sahifa o'qish narxi (`random_page_cost`) disk kallasining siljishi tufayli 4.0 (4 baravar qimmat) qilib belgilangan.",
    "taskUz": "`optimizer_stats` jadandlidan `param_name = 'random_page_cost'` parametrining `param_name, default_andlue, description` ustunlarini display.",
    "expectedSql": "SELECT param_name, default_value, description FROM optimizer_stats WHERE param_name = 'random_page_cost'",
    "hint": "`SELECT param_name, default_value, description FROM optimizer_stats WHERE param_name = 'random_page_cost'` yozing.",
    "tags": [
      "COST PARAMETER",
      "RANDOM_PAGE_COST",
      "STATS"
    ],
    "solutions": [
      "SELECT param_name, default_value, description FROM optimizer_stats WHERE param_name = 'random_page_cost'"
    ],
    "task": "`optimizer_stats` jadandlidan `param_name = 'random_page_cost'` parametrining `param_name, default_andlue, description` ustunlarini display.",
    "explanation": ""
  },
  {
    "id": 142,
    "sector": 10,
    "difficulty": "Floor 10 • Data Arxitektori",
    "source": "L06 Cost Parameters • cpu_tuple_cost",
    "title": "PostgreSQL Narx Parametri: cpu_tuple_cost (0.01)",
    "story": "Bitta qatorni CPU da tekshirish narxi (`cpu_tuple_cost`) standart 0.01 birlik hisoblanadi.",
    "taskUz": "`optimizer_stats` jadandlidan `param_name = 'cpu_tuple_cost'` parametrining `param_name, default_andlue, description` ustunlarini display.",
    "expectedSql": "SELECT param_name, default_value, description FROM optimizer_stats WHERE param_name = 'cpu_tuple_cost'",
    "hint": "`SELECT param_name, default_value, description FROM optimizer_stats WHERE param_name = 'cpu_tuple_cost'` yozing.",
    "tags": [
      "COST PARAMETER",
      "CPU_TUPLE_COST",
      "STATS"
    ],
    "solutions": [
      "SELECT param_name, default_value, description FROM optimizer_stats WHERE param_name = 'cpu_tuple_cost'"
    ],
    "task": "`optimizer_stats` jadandlidan `param_name = 'cpu_tuple_cost'` parametrining `param_name, default_andlue, description` ustunlarini display.",
    "explanation": ""
  },
  {
    "id": 143,
    "sector": 10,
    "difficulty": "Floor 10 • Data Arxitektori",
    "source": "L06 Cost Ratio • random vs seq Nisbati",
    "title": "Tasodifiy va Ketma-ket O'qish Narxlari Nisbati",
    "story": "`random_page_cost` (4.0) ning `seq_page_cost` (1.0) ga nisbatini hisoblang.",
    "taskUz": "Narxlar nisbatini hisoblang: `SELECT 4.0 / 1.0 AS cost_ratio;`",
    "expectedSql": "SELECT 4.0 / 1.0 AS cost_ratio",
    "hint": "`SELECT 4.0 / 1.0 AS cost_ratio` .",
    "tags": [
      "MATH",
      "COST RATIO",
      "OPTIMIZER"
    ],
    "solutions": [
      "SELECT 4.0 / 1.0 AS cost_ratio"
    ],
    "task": "Narxlar nisbatini hisoblang: `SELECT 4.0 / 1.0 AS cost_ratio;`",
    "explanation": ""
  },
  {
    "id": 144,
    "sector": 10,
    "difficulty": "Floor 10 • Data Arxitektori",
    "source": "L06 Selectivity Formula • s = r / d",
    "title": "Selektsiya Selektivligi Formulasi (s = r / d)",
    "story": "Formula: r = 14 qator, d = 3 bo'lim. Tenglik shartini qanoatlantiruvchi o'rtacha qatorlar sonini hisoblang.",
    "taskUz": "Selektsiya selektivligini hisoblang: `SELECT ROUND(14.0 / 3.0, 2) AS selectivity;`",
    "expectedSql": "SELECT ROUND(14.0 / 3.0, 2) AS selectivity",
    "hint": "`SELECT ROUND(14.0 / 3.0, 2) AS selectivity` yozing.",
    "tags": [
      "SELECTIVITY",
      "CARDINALITY",
      "FORMULA"
    ],
    "solutions": [
      "SELECT ROUND(14.0 / 3.0, 2) AS selectivity"
    ],
    "task": "Selektsiya selektivligini hisoblang: `SELECT ROUND(14.0 / 3.0, 2) AS selectivity;`",
    "explanation": ""
  },
  {
    "id": 145,
    "sector": 10,
    "difficulty": "Floor 10 • Data Arxitektori",
    "source": "L06 Cost Formula • Pages va Tuples Xarajati",
    "title": "PostgreSQL Xarajat Formulasi: Cost = pages*1.0 + tuples*0.01",
    "story": "Agar jadval 10 ta sahifa va 1000 ta qatordan iborat bo'lsa, umumiy so'rov narxini hisoblang.",
    "taskUz": "Xarajatni hisoblang: `SELECT 10 * 1.0 + 1000 * 0.01 AS estimated_cost;`",
    "expectedSql": "SELECT 10 * 1.0 + 1000 * 0.01 AS estimated_cost",
    "hint": "`SELECT 10 * 1.0 + 1000 * 0.01 AS estimated_cost` .",
    "tags": [
      "COST FORMULA",
      "MATH",
      "CALCULATION"
    ],
    "solutions": [
      "SELECT 10 * 1.0 + 1000 * 0.01 AS estimated_cost"
    ],
    "task": "Xarajatni hisoblang: `SELECT 10 * 1.0 + 1000 * 0.01 AS estimated_cost;`",
    "explanation": ""
  },
  {
    "id": 146,
    "sector": 10,
    "difficulty": "Floor 10 • Data Arxitektori",
    "source": "L06 Full Cost Formula • Operator Narxi Bilan",
    "title": "Operator Baholash Bilan To'liq Xarajat Formulasi",
    "story": "50 sahifa, 5000 qator va 5000 operator baholash (har biri 0.0025) bo'lgandagi to'liq xarajatni hisoblang.",
    "taskUz": "To'liq xarajatni hisoblang: `SELECT 50 * 1.0 + 5000 * 0.01 + 5000 * 0.0025 AS full_cost;`",
    "expectedSql": "SELECT 50 * 1.0 + 5000 * 0.01 + 5000 * 0.0025 AS full_cost",
    "hint": "`SELECT 50 * 1.0 + 5000 * 0.01 + 5000 * 0.0025 AS full_cost` .",
    "tags": [
      "COST FORMULA",
      "OPERATOR COST",
      "FULL COST"
    ],
    "solutions": [
      "SELECT 50 * 1.0 + 5000 * 0.01 + 5000 * 0.0025 AS full_cost"
    ],
    "task": "To'liq xarajatni hisoblang: `SELECT 50 * 1.0 + 5000 * 0.01 + 5000 * 0.0025 AS full_cost;`",
    "explanation": ""
  },
  {
    "id": 147,
    "sector": 10,
    "difficulty": "Floor 10 • Data Arxitektori",
    "source": "L06 Join Collapse Limit • Qayta Tartiblash Chegarasi",
    "title": "PostgreSQL Parametri: join_collapse_limit (8)",
    "story": "Optimallashtiruvchi to'liq kombinatorik tartiblaydigan maksimal jadvallar soni standart bo'yicha 8 tadir.",
    "taskUz": "`optimizer_stats` jadandlidan `param_name = 'join_collapse_limit'` parametrining `param_name, default_andlue` ustunlarini display.",
    "expectedSql": "SELECT param_name, default_value FROM optimizer_stats WHERE param_name = 'join_collapse_limit'",
    "hint": "`SELECT param_name, default_value FROM optimizer_stats WHERE param_name = 'join_collapse_limit'` yozing.",
    "tags": [
      "JOIN LIMIT",
      "OPTIMIZER",
      "STATS"
    ],
    "solutions": [
      "SELECT param_name, default_value FROM optimizer_stats WHERE param_name = 'join_collapse_limit'"
    ],
    "task": "`optimizer_stats` jadandlidan `param_name = 'join_collapse_limit'` parametrining `param_name, default_andlue` ustunlarini display.",
    "explanation": ""
  },
  {
    "id": 148,
    "sector": 10,
    "difficulty": "Floor 10 • Data Arxitektori",
    "source": "L06 EXPLAIN ANALYZE • Haqiqiy Vaqt Bilan Tahlil",
    "title": "PostgreSQL EXPLAIN ANALYZE: Haqiqiy Vaqt Tahlili",
    "story": "Eslatma: `EXPLAIN ANALYZE` so'rovni haqiqatda bajaradi va rejadagi `actual time` hamda qatorlar sonini aniq o'lchaydi.",
    "taskUz": "`emp` and `dept` bog'lanishining haqiqiy bajarilish andqtini o'lchash uchun `EXPLAIN ANALYZE SELECT e.ename, d.dname FROM emp e JOIN dept d ON e.deptno = d.deptno` buyrug'ini bering.",
    "expectedSql": "EXPLAIN ANALYZE SELECT e.ename, d.dname FROM emp e JOIN dept d ON e.deptno = d.deptno",
    "hint": "`EXPLAIN ANALYZE SELECT e.ename, d.dname FROM emp e JOIN dept d ON e.deptno = d.deptno` .",
    "tags": [
      "EXPLAIN ANALYZE",
      "EXECUTION TIME",
      "POSTGRESQL"
    ],
    "solutions": [
      "EXPLAIN ANALYZE SELECT e.ename, d.dname FROM emp e JOIN dept d ON e.deptno = d.deptno"
    ],
    "task": "`emp` and `dept` bog'lanishining haqiqiy bajarilish andqtini o'lchash uchun `EXPLAIN ANALYZE SELECT e.ename, d.dname FROM emp e JOIN dept d ON e.deptno = d.deptno` buyrug'ini bering.",
    "explanation": ""
  },
  {
    "id": 149,
    "sector": 10,
    "difficulty": "Floor 10 • Data Arxitektori",
    "source": "L06 EXPLAIN ANALYZE Subquery • Haqiqiy Bajarilish",
    "title": "Ichki So'rovning EXPLAIN ANALYZE Rejasi",
    "story": "Ichki subqueryli so'rovning haqiqiy ishlash vaqtini EXPLAIN ANALYZE orqali tahlil qiling.",
    "taskUz": "`EXPLAIN ANALYZE SELECT ename, sal FROM emp WHERE sal > (SELECT AVG(sal) FROM emp)` buyrug'ini bering.",
    "expectedSql": "EXPLAIN ANALYZE SELECT ename, sal FROM emp WHERE sal > (SELECT AVG(sal) FROM emp)",
    "hint": "`EXPLAIN ANALYZE SELECT ename, sal FROM emp WHERE sal > (SELECT AVG(sal) FROM emp)` yozing.",
    "tags": [
      "EXPLAIN ANALYZE",
      "SUBQUERY",
      "TIME MEASURE"
    ],
    "solutions": [
      "EXPLAIN ANALYZE SELECT ename, sal FROM emp WHERE sal > (SELECT AVG(sal) FROM emp)"
    ],
    "task": "`EXPLAIN ANALYZE SELECT ename, sal FROM emp WHERE sal > (SELECT AVG(sal) FROM emp)` buyrug'ini bering.",
    "explanation": ""
  },
  {
    "id": 150,
    "sector": 10,
    "difficulty": "Floor 10 • Grand Master",
    "source": "L06 Grand Final • Bosh Data Arxitektori Sertifikatsiyasi",
    "title": "Bosh Data Arxitektori Final Sinovi (Optimal Korrelyatsiya & JOIN)",
    "story": "TABRIKLAYMIZ! Final 150-sinov: Korrelyatsion subquery, JOIN va optimal tartiblashni o'zida birlashtirgan elita so'rov.",
    "taskUz": "O'z bo'limining o'rtacha maoshidan ko'proq maosh oluvchi xodimlarning name (`ename`), job title (`job`), maoshi (`sal`) and bo'lim nomini (`dname`) optimal JOIN and korrelyatsion subquery bilan display. Order results by `sal DESC`.",
    "expectedSql": "SELECT e.ename, e.job, e.sal, d.dname FROM emp e JOIN dept d ON e.deptno = d.deptno WHERE e.sal > (SELECT AVG(sub.sal) FROM emp sub WHERE sub.deptno = e.deptno) ORDER BY e.sal DESC",
    "hint": "`SELECT e.ename, e.job, e.sal, d.dname FROM emp e JOIN dept d ON e.deptno = d.deptno WHERE e.sal > (SELECT AVG(sub.sal) FROM emp sub WHERE sub.deptno = e.deptno) ORDER BY e.sal DESC` yozing.",
    "tags": [
      "GRAND FINALE",
      "CORRELATED",
      "JOIN",
      "OPTIMIZATION"
    ],
    "solutions": [
      "SELECT e.ename, e.job, e.sal, d.dname FROM emp e JOIN dept d ON e.deptno = d.deptno WHERE e.sal > (SELECT AVG(sub.sal) FROM emp sub WHERE sub.deptno = e.deptno) ORDER BY e.sal DESC"
    ],
    "task": "O'z bo'limining o'rtacha maoshidan ko'proq maosh oluvchi xodimlarning name (`ename`), job title (`job`), maoshi (`sal`) and bo'lim nomini (`dname`) optimal JOIN and korrelyatsion subquery bilan display. Order results by `sal DESC`.",
    "explanation": ""
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = window.QUESTIONS_101_150;
}
