// ============================================================================
// DATABASE SYSTEMS ACADEMY — WEEK 6: QUERY OPTIMIZATION & TRANSACTIONS
// Variable: QUESTIONS_51_100 (50 Questions)
// ============================================================================

window.QUESTIONS_51_100 = [
  {
    "id": 51,
    "sector": 4,
    "difficulty": "Floor 4 • Murakkab",
    "source": "S06 Task 15d • Bo'limning Eng Yuqori Maoshi",
    "title": "O'z Bo'limining Eng Yuqori Maoshini Oluvchilar",
    "story": "Har bir bo'limda o'sha bo'limning eng maksimal maoshini oladigan xodim(lar)ni korrelyatsion tarzda toping.",
    "taskUz": "O'z bo'limida eng yuqori maosh oluvchi xodimlarning name (`ename`), maoshi (`sal`) and bo'lim raqamini (`deptno`) display. Order results by `deptno`.",
    "expectedSql": "SELECT e.ename, e.sal, e.deptno FROM emp e WHERE e.sal = (SELECT MAX(sub.sal) FROM emp sub WHERE sub.deptno = e.deptno) ORDER BY e.deptno",
    "hint": "`WHERE e.sal = (SELECT MAX(sub.sal) FROM emp sub WHERE sub.deptno = e.deptno) ORDER BY e.deptno` yozing.",
    "tags": [
      "CORRELATED",
      "MAX",
      "DEPT"
    ],
    "solutions": [
      "SELECT e.ename, e.sal, e.deptno FROM emp e WHERE e.sal = (SELECT MAX(sub.sal) FROM emp sub WHERE sub.deptno = e.deptno) ORDER BY e.deptno"
    ],
    "task": "O'z bo'limida eng yuqori maosh oluvchi xodimlarning name (`ename`), maoshi (`sal`) and bo'lim raqamini (`deptno`) display. Order results by `deptno`.",
    "explanation": ""
  },
  {
    "id": 52,
    "sector": 4,
    "difficulty": "Floor 4 • Murakkab",
    "source": "S06 Task 15e • Bo'limning Eng Kam Maoshi",
    "title": "O'z Bo'limining Eng Kam Maoshini Oluvchilar",
    "story": "Har bir bo'limda eng minimal maosh olayotgan xodimlarni korrelyatsion tarzda aniqlang.",
    "taskUz": "O'z bo'limida eng kam maosh oluvchi xodimlarning name (`ename`), maoshi (`sal`) and bo'lim raqamini (`deptno`) display. Order results by `deptno`.",
    "expectedSql": "SELECT e.ename, e.sal, e.deptno FROM emp e WHERE e.sal = (SELECT MIN(sub.sal) FROM emp sub WHERE sub.deptno = e.deptno) ORDER BY e.deptno",
    "hint": "`WHERE e.sal = (SELECT MIN(sub.sal) FROM emp sub WHERE sub.deptno = e.deptno) ORDER BY e.deptno` yozing.",
    "tags": [
      "CORRELATED",
      "MIN",
      "DEPT"
    ],
    "solutions": [
      "SELECT e.ename, e.sal, e.deptno FROM emp e WHERE e.sal = (SELECT MIN(sub.sal) FROM emp sub WHERE sub.deptno = e.deptno) ORDER BY e.deptno"
    ],
    "task": "O'z bo'limida eng kam maosh oluvchi xodimlarning name (`ename`), maoshi (`sal`) and bo'lim raqamini (`deptno`) display. Order results by `deptno`.",
    "explanation": ""
  },
  {
    "id": 53,
    "sector": 4,
    "difficulty": "Floor 4 • Murakkab",
    "source": "S06 Task 15f • Loyihaga Biriktirilgan Xodimlar (EXISTS)",
    "title": "Kamida Bitta Loyihaga Biriktirilgan Xodimlar (EXISTS)",
    "story": "`works_on` jadvali bilan korrelyatsiya qilib, kamida bitta loyihada ishlayotgan xodimlarni aniqlang.",
    "taskUz": "`EXISTS` using kamida bitta loyihaga biriktirilgan xodimlarning raqami (`empno`), name (`ename`) and lavozimini (`job`) display. Order results by `empno`.",
    "expectedSql": "SELECT e.empno, e.ename, e.job FROM emp e WHERE EXISTS (SELECT 1 FROM works_on w WHERE w.empno = e.empno) ORDER BY e.empno",
    "hint": "`WHERE EXISTS (SELECT 1 FROM works_on w WHERE w.empno = e.empno) ORDER BY e.empno` yozing.",
    "tags": [
      "EXISTS",
      "WORKS_ON",
      "CORRELATED"
    ],
    "solutions": [
      "SELECT e.empno, e.ename, e.job FROM emp e WHERE EXISTS (SELECT 1 FROM works_on w WHERE w.empno = e.empno) ORDER BY e.empno"
    ],
    "task": "`EXISTS` using kamida bitta loyihaga biriktirilgan xodimlarning raqami (`empno`), name (`ename`) and lavozimini (`job`) display. Order results by `empno`.",
    "explanation": ""
  },
  {
    "id": 54,
    "sector": 4,
    "difficulty": "Floor 4 • Murakkab",
    "source": "S06 Task 15g • Loyihasiz Xodimlar (NOT EXISTS)",
    "title": "Hech Qaysi Loyihaga Biriktirilmagan Xodimlar (NOT EXISTS)",
    "story": "`NOT EXISTS` orqali birorta ham loyihada faoliyat ko'rsatmayotgan xodimlarni ajratib oling.",
    "taskUz": "`NOT EXISTS` using hech qanday loyihaga biriktirilmagan xodimlarning raqami (`empno`), name (`ename`) and lavozimini (`job`) display. Order results by `empno`.",
    "expectedSql": "SELECT e.empno, e.ename, e.job FROM emp e WHERE NOT EXISTS (SELECT 1 FROM works_on w WHERE w.empno = e.empno) ORDER BY e.empno",
    "hint": "`WHERE NOT EXISTS (SELECT 1 FROM works_on w WHERE w.empno = e.empno) ORDER BY e.empno` yozing.",
    "tags": [
      "NOT EXISTS",
      "WORKS_ON",
      "CORRELATED"
    ],
    "solutions": [
      "SELECT e.empno, e.ename, e.job FROM emp e WHERE NOT EXISTS (SELECT 1 FROM works_on w WHERE w.empno = e.empno) ORDER BY e.empno"
    ],
    "task": "`NOT EXISTS` using hech qanday loyihaga biriktirilmagan xodimlarning raqami (`empno`), name (`ename`) and lavozimini (`job`) display. Order results by `empno`.",
    "explanation": ""
  },
  {
    "id": 55,
    "sector": 4,
    "difficulty": "Floor 4 • Murakkab",
    "source": "S06 Task 15h • Xodimli Loyihalar (EXISTS)",
    "title": "Kamida Bitta Xodim Biriktirilgan Loyihalar (EXISTS)",
    "story": "`project` jadvalida qaysi loyihalarga real xodim biriktirilganini `EXISTS` orqali tekshiring.",
    "taskUz": "`EXISTS` using kamida bitta xodim biriktirilgan loyihalarning raqami (`pno`) and nomini (`pname`) display. Order results by `pno`.",
    "expectedSql": "SELECT p.pno, p.pname FROM project p WHERE EXISTS (SELECT 1 FROM works_on w WHERE w.pno = p.pno) ORDER BY p.pno",
    "hint": "`WHERE EXISTS (SELECT 1 FROM works_on w WHERE w.pno = p.pno) ORDER BY p.pno` yozing.",
    "tags": [
      "EXISTS",
      "PROJECT",
      "CORRELATED"
    ],
    "solutions": [
      "SELECT p.pno, p.pname FROM project p WHERE EXISTS (SELECT 1 FROM works_on w WHERE w.pno = p.pno) ORDER BY p.pno"
    ],
    "task": "`EXISTS` using kamida bitta xodim biriktirilgan loyihalarning raqami (`pno`) and nomini (`pname`) display. Order results by `pno`.",
    "explanation": ""
  },
  {
    "id": 56,
    "sector": 4,
    "difficulty": "Floor 4 • Murakkab",
    "source": "S06 Task 15i • O'z Kasbi O'rtachasidan Kam",
    "title": "O'z Kasbi (JOB) Bo'yicha O'rtachadan Kam Oluvchilar",
    "story": "Har bir kasbning o'z o'rtacha maoshi mavjud. Shu kasb bo'yicha o'rtachadan kam maosh oluvchilarni toping.",
    "taskUz": "O'z lavozimidagi (`job`) xodimlarning o'rtacha maoshidan kam maosh oladigan xodimlarning name (`ename`), job title (`job`) and salary (`sal`) display. Order results by `job` and `sal`.",
    "expectedSql": "SELECT e.ename, e.job, e.sal FROM emp e WHERE e.sal < (SELECT AVG(sub.sal) FROM emp sub WHERE sub.job = e.job) ORDER BY e.job, e.sal",
    "hint": "`WHERE e.sal < (SELECT AVG(sub.sal) FROM emp sub WHERE sub.job = e.job) ORDER BY e.job, e.sal` yozing.",
    "tags": [
      "CORRELATED",
      "JOB",
      "AVG"
    ],
    "solutions": [
      "SELECT e.ename, e.job, e.sal FROM emp e WHERE e.sal < (SELECT AVG(sub.sal) FROM emp sub WHERE sub.job = e.job) ORDER BY e.job, e.sal"
    ],
    "task": "O'z lavozimidagi (`job`) xodimlarning o'rtacha maoshidan kam maosh oladigan xodimlarning name (`ename`), job title (`job`) and salary (`sal`) display. Order results by `job` and `sal`.",
    "explanation": ""
  },
  {
    "id": 57,
    "sector": 4,
    "difficulty": "Floor 4 • Murakkab",
    "source": "S06 Task 15j • Nomzodlar Ichida Mavjud (EXISTS)",
    "title": "Nomzodlar Ro'yxatida Ham Arizasi Bor Xodimlar (EXISTS)",
    "story": "`EXISTS` orqali xodimning ismi `applicant` jadvalida ham borligini aniqlang.",
    "taskUz": "`EXISTS` operatori using dastlab ariza topshirgan nomzodlar (`applicant`) ro'yxatida ham arizasi bor xodimlarning raqami (`empno`), name (`ename`) and lavozimini (`job`) display. Order results by `ename`.",
    "expectedSql": "SELECT e.empno, e.ename, e.job FROM emp e WHERE EXISTS (SELECT 1 FROM applicant a WHERE a.aname = e.ename) ORDER BY e.ename",
    "hint": "`WHERE EXISTS (SELECT 1 FROM applicant a WHERE a.aname = e.ename) ORDER BY e.ename` yozing.",
    "tags": [
      "EXISTS",
      "APPLICANT",
      "CORRELATED"
    ],
    "solutions": [
      "SELECT e.empno, e.ename, e.job FROM emp e WHERE EXISTS (SELECT 1 FROM applicant a WHERE a.aname = e.ename) ORDER BY e.ename"
    ],
    "task": "`EXISTS` operatori using dastlab ariza topshirgan nomzodlar (`applicant`) ro'yxatida ham arizasi bor xodimlarning raqami (`empno`), name (`ename`) and lavozimini (`job`) display. Order results by `ename`.",
    "explanation": ""
  },
  {
    "id": 58,
    "sector": 4,
    "difficulty": "Floor 4 • Murakkab",
    "source": "S06 Task 15k • O'zidan Yuqori Hamkasbi Yo'q (NOT EXISTS)",
    "title": "O'zidan Ko'proq Maosh Oluvchi Hamkasbi Yo'q Xodim (NOT EXISTS)",
    "story": "Kompaniyada o'zidan ko'proq maosh oluvchi birorta ham boshqa xodim bo'lmagan shaxsni `NOT EXISTS` orqali toping.",
    "taskUz": "`NOT EXISTS` using o'zidan ko'proq maosh oluvchi birorta ham boshqa xodim mavjud bo'lmagan (mutlaq maksimal maoshli) xodimning name (`ename`) and salary (`sal`) display.",
    "expectedSql": "SELECT e.ename, e.sal FROM emp e WHERE NOT EXISTS (SELECT 1 FROM emp sub WHERE sub.sal > e.sal)",
    "hint": "`WHERE NOT EXISTS (SELECT 1 FROM emp sub WHERE sub.sal > e.sal)` .",
    "tags": [
      "NOT EXISTS",
      "MAX",
      "CORRELATED"
    ],
    "solutions": [
      "SELECT e.ename, e.sal FROM emp e WHERE NOT EXISTS (SELECT 1 FROM emp sub WHERE sub.sal > e.sal)"
    ],
    "task": "`NOT EXISTS` using o'zidan ko'proq maosh oluvchi birorta ham boshqa xodim mavjud bo'lmagan (mutlaq maksimal maoshli) xodimning name (`ename`) and salary (`sal`) display.",
    "explanation": ""
  },
  {
    "id": 59,
    "sector": 4,
    "difficulty": "Floor 4 • Murakkab",
    "source": "S06 Task 15l • O'z Bo'limida Faxriysi Bor Xodimlar (EXISTS)",
    "title": "O'z Bo'limida O'zidan Oldinroq Kirgan Xodimi Borlar (EXISTS)",
    "story": "O'z bo'limida o'zidan oldinroq ishga qabul qilingan faxriy hamkasbi bor xodimlarni aniqlang.",
    "taskUz": "O'z bo'limida o'zidan oldinroq (`sub.hiredate < e.hiredate`) ishga kirgan hamkasbi mavjud bo'lgan xodimlarning name (`ename`), ishga kirgan sanasi (`hiredate`) and bo'lim raqamini (`deptno`) display. Order results by `deptno` and `hiredate`.",
    "expectedSql": "SELECT e.ename, e.hiredate, e.deptno FROM emp e WHERE EXISTS (SELECT 1 FROM emp sub WHERE sub.deptno = e.deptno AND sub.hiredate < e.hiredate) ORDER BY e.deptno, e.hiredate",
    "hint": "`WHERE EXISTS (SELECT 1 FROM emp sub WHERE sub.deptno = e.deptno AND sub.hiredate < e.hiredate) ORDER BY e.deptno, e.hiredate` yozing.",
    "tags": [
      "EXISTS",
      "DATE",
      "CORRELATED"
    ],
    "solutions": [
      "SELECT e.ename, e.hiredate, e.deptno FROM emp e WHERE EXISTS (SELECT 1 FROM emp sub WHERE sub.deptno = e.deptno AND sub.hiredate < e.hiredate) ORDER BY e.deptno, e.hiredate"
    ],
    "task": "O'z bo'limida o'zidan oldinroq (`sub.hiredate < e.hiredate`) ishga kirgan hamkasbi mavjud bo'lgan xodimlarning name (`ename`), ishga kirgan sanasi (`hiredate`) and bo'lim raqamini (`deptno`) display. Order results by `deptno` and `hiredate`.",
    "explanation": ""
  },
  {
    "id": 60,
    "sector": 4,
    "difficulty": "Floor 4 • Murakkab",
    "source": "S06 Task 15m • Komissiyasiz va Rahbarsiz Xodimlar",
    "title": "Komissiya Olmaydigan va Boshqaruvda Bo'lmagan Xodimlar",
    "story": "Komissiya olmaydigan (`comm IS NULL`) va hech kimga rahbarlik qilmaydigan oddiy ijrochilarni toping.",
    "taskUz": "Komissiya olmaydigan (`e.comm IS NULL`) and hech kimga rahbar bo'lmagan (`NOT EXISTS`) xodimlarning name (`ename`) and lavozimini (`job`) display. Order results by `ename`.",
    "expectedSql": "SELECT e.ename, e.job FROM emp e WHERE e.comm IS NULL AND NOT EXISTS (SELECT 1 FROM emp sub WHERE sub.mgr = e.empno) ORDER BY e.ename",
    "hint": "`WHERE e.comm IS NULL AND NOT EXISTS (SELECT 1 FROM emp sub WHERE sub.mgr = e.empno) ORDER BY e.ename` yozing.",
    "tags": [
      "NOT EXISTS",
      "NULL",
      "CORRELATED"
    ],
    "solutions": [
      "SELECT e.ename, e.job FROM emp e WHERE e.comm IS NULL AND NOT EXISTS (SELECT 1 FROM emp sub WHERE sub.mgr = e.empno) ORDER BY e.ename"
    ],
    "task": "Komissiya olmaydigan (`e.comm IS NULL`) and hech kimga rahbar bo'lmagan (`NOT EXISTS`) xodimlarning name (`ename`) and lavozimini (`job`) display. Order results by `ename`.",
    "explanation": ""
  },
  {
    "id": 61,
    "sector": 5,
    "difficulty": "Floor 5 • Expert",
    "source": "L06 Subquery in SELECT • Skalyar Proyeksiya",
    "title": "Xodim Maoshi va Korxona O'rtacha Maoshi (SELECT)",
    "story": "SELECT ustunlar ro'yxatida skalyar subquery orqali butun korxona o'rtacha maoshini har bir qatorga chiqaramiz.",
    "taskUz": "Har bir xodimning name (`ename`), maoshi (`sal`) and korxonaning o'rtacha maoshini (`(SELECT ROUND(AVG(sal), 2) FROM emp) AS avg_sal`) display. Order results by maosh kamayishi.",
    "expectedSql": "SELECT ename, sal, (SELECT ROUND(AVG(sal), 2) FROM emp) AS avg_sal FROM emp ORDER BY sal DESC",
    "hint": "`SELECT ename, sal, (SELECT ROUND(AVG(sal), 2) FROM emp) AS avg_sal FROM emp ORDER BY sal DESC` yozing.",
    "tags": [
      "SUBQUERY IN SELECT",
      "AVG",
      "PROJECTION"
    ],
    "solutions": [
      "SELECT ename, sal, (SELECT ROUND(AVG(sal), 2) FROM emp) AS avg_sal FROM emp ORDER BY sal DESC"
    ],
    "task": "Har bir xodimning name (`ename`), maoshi (`sal`) and korxonaning o'rtacha maoshini (`(SELECT ROUND(AVG(sal), 2) FROM emp) AS avg_sal`) display. Order results by maosh kamayishi.",
    "explanation": ""
  },
  {
    "id": 62,
    "sector": 5,
    "difficulty": "Floor 5 • Expert",
    "source": "L06 Correlated Subquery in SELECT • Bo'lim O'rtachasi",
    "title": "Har Bir Xodim va Uning O'z Bo'limi O'rtacha Maoshi",
    "story": "SELECT ro'yxatidagi korrelyatsion subquery yordamida xodimning o'z bo'limidagi o'rtacha maoshini yonma-yon ko'rsatamiz.",
    "taskUz": "Har bir xodimning name (`ename`), maoshi (`sal`) and uning o'z bo'limi o'rtacha maoshini (`(SELECT ROUND(AVG(sub.sal), 2) FROM emp sub WHERE sub.deptno = e.deptno) AS dept_avg`) display. Order results by `deptno` and `sal DESC`.",
    "expectedSql": "SELECT e.ename, e.sal, (SELECT ROUND(AVG(sub.sal), 2) FROM emp sub WHERE sub.deptno = e.deptno) AS dept_avg FROM emp e ORDER BY e.deptno, e.sal DESC",
    "hint": "SELECT ro'yxatida korrelyatsion `WHERE sub.deptno = e.deptno` subquerysini ishlating.",
    "tags": [
      "CORRELATED IN SELECT",
      "AVG",
      "DEPT"
    ],
    "solutions": [
      "SELECT e.ename, e.sal, (SELECT ROUND(AVG(sub.sal), 2) FROM emp sub WHERE sub.deptno = e.deptno) AS dept_avg FROM emp e ORDER BY e.deptno, e.sal DESC"
    ],
    "task": "Har bir xodimning name (`ename`), maoshi (`sal`) and uning o'z bo'limi o'rtacha maoshini (`(SELECT ROUND(AVG(sub.sal), 2) FROM emp sub WHERE sub.deptno = e.deptno) AS dept_avg`) display. Order results by `deptno` and `sal DESC`.",
    "explanation": ""
  },
  {
    "id": 63,
    "sector": 5,
    "difficulty": "Floor 5 • Expert",
    "source": "L06 Derived Table in FROM • Bo'lim O'rtacha Maoshi",
    "title": "Derived Table: O'rtacha Maoshi 2000 dan Yuqori Bo'limlar",
    "story": "FROM bandida vaqtinchalik hosila jadval (Derived table / Inline view) yaratib, uni tashqi WHERE orqali filtrlaymiz.",
    "taskUz": "FROM bandidagi hosila jadandl (`(SELECT deptno, ROUND(AVG(sal), 2) AS avg_sal FROM emp GROUP BY deptno) AS d`) via o'rtacha maoshi 2000 dan yuqori bo'lgan bo'limlarning `deptno` and `avg_sal` ustunlarini display. Order results by `avg_sal DESC`.",
    "expectedSql": "SELECT d.deptno, d.avg_sal FROM (SELECT deptno, ROUND(AVG(sal), 2) AS avg_sal FROM emp GROUP BY deptno) AS d WHERE d.avg_sal > 2000 ORDER BY d.avg_sal DESC",
    "hint": "`FROM (SELECT deptno, ROUND(AVG(sal), 2) AS avg_sal FROM emp GROUP BY deptno) AS d WHERE d.avg_sal > 2000` .",
    "tags": [
      "DERIVED TABLE",
      "FROM",
      "GROUP BY"
    ],
    "solutions": [
      "SELECT d.deptno, d.avg_sal FROM (SELECT deptno, ROUND(AVG(sal), 2) AS avg_sal FROM emp GROUP BY deptno) AS d WHERE d.avg_sal > 2000 ORDER BY d.avg_sal DESC"
    ],
    "task": "FROM bandidagi hosila jadandl (`(SELECT deptno, ROUND(AVG(sal), 2) AS avg_sal FROM emp GROUP BY deptno) AS d`) via o'rtacha maoshi 2000 dan yuqori bo'lgan bo'limlarning `deptno` and `avg_sal` ustunlarini display. Order results by `avg_sal DESC`.",
    "explanation": ""
  },
  {
    "id": 64,
    "sector": 5,
    "difficulty": "Floor 5 • Expert",
    "source": "L06 Derived Table in FROM • Kasblar Bo'yicha Fond",
    "title": "Derived Table: Lavozimlar Bo'yicha Jami Maosh Fondi",
    "story": "Kasblar kesimida umumiy maosh sarfi va xodimlar sonini FROM bandidagi hosila jadval orqali umumlashtiramiz.",
    "taskUz": "FROM bandidagi hosila jadandl (`(SELECT job, SUM(sal) AS total_sal, COUNT(*) AS emp_count FROM emp GROUP BY job) AS j`) using har bir lavozim (`job`), umumiy maosh fondi (`total_sal`) and xodimlar sonini (`emp_count`) display. Order results by `total_sal DESC`.",
    "expectedSql": "SELECT j.job, j.total_sal, j.emp_count FROM (SELECT job, SUM(sal) AS total_sal, COUNT(*) AS emp_count FROM emp GROUP BY job) AS j ORDER BY j.total_sal DESC",
    "hint": "`FROM (SELECT job, SUM(sal) AS total_sal, COUNT(*) AS emp_count FROM emp GROUP BY job) AS j ORDER BY j.total_sal DESC` yozing.",
    "tags": [
      "DERIVED TABLE",
      "SUM",
      "COUNT"
    ],
    "solutions": [
      "SELECT j.job, j.total_sal, j.emp_count FROM (SELECT job, SUM(sal) AS total_sal, COUNT(*) AS emp_count FROM emp GROUP BY job) AS j ORDER BY j.total_sal DESC"
    ],
    "task": "FROM bandidagi hosila jadandl (`(SELECT job, SUM(sal) AS total_sal, COUNT(*) AS emp_count FROM emp GROUP BY job) AS j`) using har bir lavozim (`job`), umumiy maosh fondi (`total_sal`) and xodimlar sonini (`emp_count`) display. Order results by `total_sal DESC`.",
    "explanation": ""
  },
  {
    "id": 65,
    "sector": 5,
    "difficulty": "Floor 5 • Expert",
    "source": "L06 Derived Table in FROM • Bo'limlar Statistikasi",
    "title": "Derived Table: Har Bir Bo'limning Xodimlar Soni va O'rtacha Maoshi",
    "story": "Bo'limlar statistikasini hosila jadval sifatida shakllantirib, bo'lim raqami bo'yicha tartiblaymiz.",
    "taskUz": "FROM bandidagi hosila jadandl (`(SELECT deptno, COUNT(*) AS cnt, ROUND(AVG(sal), 2) AS avg_sal FROM emp GROUP BY deptno) AS d`) via har bir bo'limning `deptno`, `cnt` and `avg_sal` ustunlarini display. Order results by `deptno`.",
    "expectedSql": "SELECT d.deptno, d.cnt, d.avg_sal FROM (SELECT deptno, COUNT(*) AS cnt, ROUND(AVG(sal), 2) AS avg_sal FROM emp GROUP BY deptno) AS d ORDER BY d.deptno",
    "hint": "`FROM (SELECT deptno, COUNT(*) AS cnt, ROUND(AVG(sal), 2) AS avg_sal FROM emp GROUP BY deptno) AS d ORDER BY d.deptno` yozing.",
    "tags": [
      "DERIVED TABLE",
      "COUNT",
      "AVG"
    ],
    "solutions": [
      "SELECT d.deptno, d.cnt, d.avg_sal FROM (SELECT deptno, COUNT(*) AS cnt, ROUND(AVG(sal), 2) AS avg_sal FROM emp GROUP BY deptno) AS d ORDER BY d.deptno"
    ],
    "task": "FROM bandidagi hosila jadandl (`(SELECT deptno, COUNT(*) AS cnt, ROUND(AVG(sal), 2) AS avg_sal FROM emp GROUP BY deptno) AS d`) via har bir bo'limning `deptno`, `cnt` and `avg_sal` ustunlarini display. Order results by `deptno`.",
    "explanation": ""
  },
  {
    "id": 66,
    "sector": 5,
    "difficulty": "Floor 5 • Expert",
    "source": "L06 Subquery in SELECT • Umumiy Fond Taqqoslash",
    "title": "Menejerlar Maoshi va Korxona Umumiy Maosh Fondi",
    "story": "Menejerlarning oylik maoshini butun korxonaning jami oylik fondi bilan solishtirish talab etiladi.",
    "taskUz": "Menejer (`job = 'MANAGER'`) lavozimidagi xodimlarning name (`ename`), maoshi (`sal`) and korxona umumiy maosh fondini (`(SELECT SUM(sal) FROM emp) AS total_fund`) display. Order results by maosh kamayishi.",
    "expectedSql": "SELECT ename, sal, (SELECT SUM(sal) FROM emp) AS total_fund FROM emp WHERE job = 'MANAGER' ORDER BY sal DESC",
    "hint": "`SELECT ename, sal, (SELECT SUM(sal) FROM emp) AS total_fund FROM emp WHERE job = 'MANAGER' ORDER BY sal DESC` yozing.",
    "tags": [
      "SUBQUERY IN SELECT",
      "SUM",
      "MANAGER"
    ],
    "solutions": [
      "SELECT ename, sal, (SELECT SUM(sal) FROM emp) AS total_fund FROM emp WHERE job = 'MANAGER' ORDER BY sal DESC"
    ],
    "task": "Menejer (`job = 'MANAGER'`) lavozimidagi xodimlarning name (`ename`), maoshi (`sal`) and korxona umumiy maosh fondini (`(SELECT SUM(sal) FROM emp) AS total_fund`) display. Order results by maosh kamayishi.",
    "explanation": ""
  },
  {
    "id": 67,
    "sector": 5,
    "difficulty": "Floor 5 • Expert",
    "source": "L06 Subquery in FROM • Filtrlangan O'rtacha",
    "title": "Subquery in FROM: 1500 dan Yuqori Maoshlarning O'rtachasi",
    "story": "Dastlab 1500 dan yuqori maoshlarni hosila jadval qilib, so'ng ularning o'rtacha qiymatini hisoblaymiz.",
    "taskUz": "FROM bandida faqat maoshi 1500 dan yuqori bo'lgan xodimlarni olib (`(SELECT sal FROM emp WHERE sal > 1500) AS t`), ularning o'rtacha maoshini (`ROUND(AVG(t.sal), 2) AS avg_high_sal`) hisoblang.",
    "expectedSql": "SELECT ROUND(AVG(t.sal), 2) AS avg_high_sal FROM (SELECT sal FROM emp WHERE sal > 1500) AS t",
    "hint": "`SELECT ROUND(AVG(t.sal), 2) AS avg_high_sal FROM (SELECT sal FROM emp WHERE sal > 1500) AS t` .",
    "tags": [
      "DERIVED TABLE",
      "AVG",
      "FROM"
    ],
    "solutions": [
      "SELECT ROUND(AVG(t.sal), 2) AS avg_high_sal FROM (SELECT sal FROM emp WHERE sal > 1500) AS t"
    ],
    "task": "FROM bandida faqat maoshi 1500 dan yuqori bo'lgan xodimlarni olib (`(SELECT sal FROM emp WHERE sal > 1500) AS t`), ularning o'rtacha maoshini (`ROUND(AVG(t.sal), 2) AS avg_high_sal`) hisoblang.",
    "explanation": ""
  },
  {
    "id": 68,
    "sector": 5,
    "difficulty": "Floor 5 • Expert",
    "source": "L06 Subquery in SELECT • Bo'ysunuvchilar Soni",
    "title": "Har Bir Rahbar va Unga Bo'ysunuvchi Xodimlar Soni",
    "story": "Har bir rahbar qancha xodimni boshqarayotganini SELECT bandidagi korrelyatsion hisoblash orqali ko'rsating.",
    "taskUz": "Prezident and Menejerlar (`job IN ('PRESIDENT', 'MANAGER')`) name (`ename`) and ularga bevosita hisobot beruvchi xodimlar sonini (`(SELECT COUNT(*) FROM emp sub WHERE sub.mgr = e.empno) AS subordinates_count`) display. Order results by xodimlar soni kamayishi.",
    "expectedSql": "SELECT e.ename, (SELECT COUNT(*) FROM emp sub WHERE sub.mgr = e.empno) AS subordinates_count FROM emp e WHERE e.job IN ('PRESIDENT', 'MANAGER') ORDER BY subordinates_count DESC",
    "hint": "`SELECT e.ename, (SELECT COUNT(*) FROM emp sub WHERE sub.mgr = e.empno) AS subordinates_count ... ORDER BY subordinates_count DESC` yozing.",
    "tags": [
      "SUBQUERY IN SELECT",
      "COUNT",
      "MGR"
    ],
    "solutions": [
      "SELECT e.ename, (SELECT COUNT(*) FROM emp sub WHERE sub.mgr = e.empno) AS subordinates_count FROM emp e WHERE e.job IN ('PRESIDENT', 'MANAGER') ORDER BY subordinates_count DESC"
    ],
    "task": "Prezident and Menejerlar (`job IN ('PRESIDENT', 'MANAGER')`) name (`ename`) and ularga bevosita hisobot beruvchi xodimlar sonini (`(SELECT COUNT(*) FROM emp sub WHERE sub.mgr = e.empno) AS subordinates_count`) display. Order results by xodimlar soni kamayishi.",
    "explanation": ""
  },
  {
    "id": 69,
    "sector": 5,
    "difficulty": "Floor 5 • Expert",
    "source": "L06 Subquery in SELECT • Bo'lim Xodimlari Soni",
    "title": "Har Bir Bo'lim Nomi va Undagi Xodimlar Soni",
    "story": "`dept` jadvali asosida har bir bo'limda ishlovchilar sonini SELECT dagi korrelyatsion subquery orqali toping.",
    "taskUz": "Har bir bo'lim nomi (`dname`) and undagi ishchilar sonini (`(SELECT COUNT(*) FROM emp e WHERE e.deptno = d.deptno) AS emp_count`) display. Order results by `emp_count DESC`.",
    "expectedSql": "SELECT d.dname, (SELECT COUNT(*) FROM emp e WHERE e.deptno = d.deptno) AS emp_count FROM dept d ORDER BY emp_count DESC",
    "hint": "`SELECT d.dname, (SELECT COUNT(*) FROM emp e WHERE e.deptno = d.deptno) AS emp_count FROM dept d ORDER BY emp_count DESC` yozing.",
    "tags": [
      "SUBQUERY IN SELECT",
      "DEPT",
      "COUNT"
    ],
    "solutions": [
      "SELECT d.dname, (SELECT COUNT(*) FROM emp e WHERE e.deptno = d.deptno) AS emp_count FROM dept d ORDER BY emp_count DESC"
    ],
    "task": "Har bir bo'lim nomi (`dname`) and undagi ishchilar sonini (`(SELECT COUNT(*) FROM emp e WHERE e.deptno = d.deptno) AS emp_count`) display. Order results by `emp_count DESC`.",
    "explanation": ""
  },
  {
    "id": 70,
    "sector": 5,
    "difficulty": "Floor 5 • Expert",
    "source": "L06 Derived Table in FROM • Maksimal Maosh 2500 dan Yuqori",
    "title": "Derived Table: Maksimal Maoshi 2500 dan Yuqori Bo'limlar",
    "story": "Bo'limlar maksimal maoshini FROM dagi hosila jadval orqali hisoblab, 2500 dan yuqori bo'lganlarini tanlang.",
    "taskUz": "FROM dagi hosila jadandl (`(SELECT deptno, MAX(sal) AS max_sal FROM emp GROUP BY deptno) AS b`) via maksimal maoshi 2500 dan yuqori bo'lgan bo'limlarning `deptno` and `max_sal` ustunlarini display. Order results by `max_sal DESC`.",
    "expectedSql": "SELECT b.deptno, b.max_sal FROM (SELECT deptno, MAX(sal) AS max_sal FROM emp GROUP BY deptno) AS b WHERE b.max_sal > 2500 ORDER BY b.max_sal DESC",
    "hint": "`FROM (SELECT deptno, MAX(sal) AS max_sal FROM emp GROUP BY deptno) AS b WHERE b.max_sal > 2500 ORDER BY b.max_sal DESC` yozing.",
    "tags": [
      "DERIVED TABLE",
      "MAX",
      "FROM"
    ],
    "solutions": [
      "SELECT b.deptno, b.max_sal FROM (SELECT deptno, MAX(sal) AS max_sal FROM emp GROUP BY deptno) AS b WHERE b.max_sal > 2500 ORDER BY b.max_sal DESC"
    ],
    "task": "FROM dagi hosila jadandl (`(SELECT deptno, MAX(sal) AS max_sal FROM emp GROUP BY deptno) AS b`) via maksimal maoshi 2500 dan yuqori bo'lgan bo'limlarning `deptno` and `max_sal` ustunlarini display. Order results by `max_sal DESC`.",
    "explanation": ""
  },
  {
    "id": 71,
    "sector": 5,
    "difficulty": "Floor 5 • Expert",
    "source": "L06 Subquery in SELECT • Loyihadagi Soatlar",
    "title": "20-Bo'lim Xodimlari va Loyihalardagi Ish Soatlari",
    "story": "20-bo'limdagi har bir xodimning loyihalarda sarflagan jami ish soatlarini SELECT subquerysi orqali chiqaring.",
    "taskUz": "20-bo'lim (`deptno = 20`) xodimlarining name (`ename`) and ularning loyihalardagi umumiy sarflagan soatlarini (`(SELECT SUM(w.hours) FROM works_on w WHERE w.empno = e.empno) AS total_hours`) display. Order results by `total_hours DESC`.",
    "expectedSql": "SELECT e.ename, (SELECT SUM(w.hours) FROM works_on w WHERE w.empno = e.empno) AS total_hours FROM emp e WHERE e.deptno = 20 ORDER BY total_hours DESC",
    "hint": "`SELECT e.ename, (SELECT SUM(w.hours) FROM works_on w WHERE w.empno = e.empno) AS total_hours FROM emp e WHERE e.deptno = 20 ...` yozing.",
    "tags": [
      "SUBQUERY IN SELECT",
      "WORKS_ON",
      "SUM"
    ],
    "solutions": [
      "SELECT e.ename, (SELECT SUM(w.hours) FROM works_on w WHERE w.empno = e.empno) AS total_hours FROM emp e WHERE e.deptno = 20 ORDER BY total_hours DESC"
    ],
    "task": "20-bo'lim (`deptno = 20`) xodimlarining name (`ename`) and ularning loyihalardagi umumiy sarflagan soatlarini (`(SELECT SUM(w.hours) FROM works_on w WHERE w.empno = e.empno) AS total_hours`) display. Order results by `total_hours DESC`.",
    "explanation": ""
  },
  {
    "id": 72,
    "sector": 5,
    "difficulty": "Floor 5 • Expert",
    "source": "L06 Derived Table in FROM • Eng Katta Bo'lim O'rtachasi",
    "title": "Derived Table: Bo'limlar O'rtacha Maoshlarining Maksimali",
    "story": "Dastlab bo'limlar o'rtacha maoshini hisoblab, so'ng ushbu o'rtachalar ichidan eng maksimalini toping.",
    "taskUz": "FROM dagi hosila jadandl (`(SELECT ROUND(AVG(sal), 2) AS avg_sal FROM emp GROUP BY deptno) AS t`) using bo'limlar o'rtacha maoshlarining eng yuqorisini (`MAX(t.avg_sal) AS highest_dept_avg`) display.",
    "expectedSql": "SELECT MAX(t.avg_sal) AS highest_dept_avg FROM (SELECT ROUND(AVG(sal), 2) AS avg_sal FROM emp GROUP BY deptno) AS t",
    "hint": "`SELECT MAX(t.avg_sal) AS highest_dept_avg FROM (SELECT ROUND(AVG(sal), 2) AS avg_sal FROM emp GROUP BY deptno) AS t` yozing.",
    "tags": [
      "DERIVED TABLE",
      "MAX",
      "AVG"
    ],
    "solutions": [
      "SELECT MAX(t.avg_sal) AS highest_dept_avg FROM (SELECT ROUND(AVG(sal), 2) AS avg_sal FROM emp GROUP BY deptno) AS t"
    ],
    "task": "FROM dagi hosila jadandl (`(SELECT ROUND(AVG(sal), 2) AS avg_sal FROM emp GROUP BY deptno) AS t`) using bo'limlar o'rtacha maoshlarining eng yuqorisini (`MAX(t.avg_sal) AS highest_dept_avg`) display.",
    "explanation": ""
  },
  {
    "id": 73,
    "sector": 5,
    "difficulty": "Floor 5 • Expert",
    "source": "L06 Inline View • 20-Bo'lim Min va Max",
    "title": "Inline View: 20-Bo'limdagi Minimal va Maksimal Maosh",
    "story": "20-bo'lim xodimlari maoshlaridan tashkil topgan inline jadvaldan minimal va maksimal maoshni oling.",
    "taskUz": "FROM dagi hosila jadandl (`(SELECT sal FROM emp WHERE deptno = 20) AS t`) via 20-bo'limdagi minimal (`MIN(t.sal) AS min_s`) and maksimal (`MAX(t.sal) AS max_s`) maoshni display.",
    "expectedSql": "SELECT MIN(t.sal) AS min_s, MAX(t.sal) AS max_s FROM (SELECT sal FROM emp WHERE deptno = 20) AS t",
    "hint": "`SELECT MIN(t.sal) AS min_s, MAX(t.sal) AS max_s FROM (SELECT sal FROM emp WHERE deptno = 20) AS t` .",
    "tags": [
      "DERIVED TABLE",
      "MIN",
      "MAX"
    ],
    "solutions": [
      "SELECT MIN(t.sal) AS min_s, MAX(t.sal) AS max_s FROM (SELECT sal FROM emp WHERE deptno = 20) AS t"
    ],
    "task": "FROM dagi hosila jadandl (`(SELECT sal FROM emp WHERE deptno = 20) AS t`) via 20-bo'limdagi minimal (`MIN(t.sal) AS min_s`) and maksimal (`MAX(t.sal) AS max_s`) maoshni display.",
    "explanation": ""
  },
  {
    "id": 74,
    "sector": 5,
    "difficulty": "Floor 5 • Expert",
    "source": "L06 Correlated Subquery in SELECT • Bo'lim Maksimali",
    "title": "Har Bir Xodim va Uning Bo'limidagi Eng Yuqori Maosh",
    "story": "Har bir xodim o'z bo'limidagi eng katta oylikdan qancha kam olayotganini ko'rish uchun bo'lim maksimalini SELECT da chiqaring.",
    "taskUz": "Har bir xodimning name (`ename`), maoshi (`sal`) and o'z bo'limidagi eng yuqori maoshni (`(SELECT MAX(sub.sal) FROM emp sub WHERE sub.deptno = e.deptno) AS dept_max`) display. Order results by `deptno` and `sal DESC`.",
    "expectedSql": "SELECT e.ename, e.sal, (SELECT MAX(sub.sal) FROM emp sub WHERE sub.deptno = e.deptno) AS dept_max FROM emp e ORDER BY e.deptno, e.sal DESC",
    "hint": "`SELECT e.ename, e.sal, (SELECT MAX(sub.sal) FROM emp sub WHERE sub.deptno = e.deptno) AS dept_max FROM emp e ORDER BY e.deptno, e.sal DESC` yozing.",
    "tags": [
      "CORRELATED IN SELECT",
      "MAX",
      "DEPT"
    ],
    "solutions": [
      "SELECT e.ename, e.sal, (SELECT MAX(sub.sal) FROM emp sub WHERE sub.deptno = e.deptno) AS dept_max FROM emp e ORDER BY e.deptno, e.sal DESC"
    ],
    "task": "Har bir xodimning name (`ename`), maoshi (`sal`) and o'z bo'limidagi eng yuqori maoshni (`(SELECT MAX(sub.sal) FROM emp sub WHERE sub.deptno = e.deptno) AS dept_max`) display. Order results by `deptno` and `sal DESC`.",
    "explanation": ""
  },
  {
    "id": 75,
    "sector": 5,
    "difficulty": "Floor 5 • Expert",
    "source": "L06 Correlated Subquery in SELECT • 10-Bo'lim Tahlili",
    "title": "10-Bo'lim Xodimlari va Bo'lim O'rtacha Maoshi",
    "story": "10-bo'lim xodimlarining maoshini va bo'limning o'rtacha maoshini yonma-yon solishtiring.",
    "taskUz": "10-bo'lim (`deptno = 10`) xodimlarining name (`ename`), maoshi (`sal`) and ushbu bo'limning o'rtacha maoshini (`(SELECT ROUND(AVG(sub.sal), 2) FROM emp sub WHERE sub.deptno = e.deptno) AS d_avg`) display. Order results by `sal DESC`.",
    "expectedSql": "SELECT e.ename, e.sal, (SELECT ROUND(AVG(sub.sal), 2) FROM emp sub WHERE sub.deptno = e.deptno) AS d_avg FROM emp e WHERE e.deptno = 10 ORDER BY e.sal DESC",
    "hint": "`SELECT e.ename, e.sal, (SELECT ROUND(AVG(sub.sal), 2) FROM emp sub WHERE sub.deptno = e.deptno) AS d_avg FROM emp e WHERE e.deptno = 10 ORDER BY e.sal DESC` yozing.",
    "tags": [
      "CORRELATED IN SELECT",
      "DEPT10",
      "AVG"
    ],
    "solutions": [
      "SELECT e.ename, e.sal, (SELECT ROUND(AVG(sub.sal), 2) FROM emp sub WHERE sub.deptno = e.deptno) AS d_avg FROM emp e WHERE e.deptno = 10 ORDER BY e.sal DESC"
    ],
    "task": "10-bo'lim (`deptno = 10`) xodimlarining name (`ename`), maoshi (`sal`) and ushbu bo'limning o'rtacha maoshini (`(SELECT ROUND(AVG(sub.sal), 2) FROM emp sub WHERE sub.deptno = e.deptno) AS d_avg`) display. Order results by `sal DESC`.",
    "explanation": ""
  },
  {
    "id": 76,
    "sector": 6,
    "difficulty": "Floor 6 • Advanced",
    "source": "S06 Task 16 • UNION (Noyob Ismlar)",
    "title": "Xodimlar va Nomzodlarning Noyob Ismlari (UNION)",
    "story": "Eslatma: `UNION` ikkala jadvaldagi yozuvlarni birlashtiradi va takrorlangan dublikatlarni avtomatik o'chiradi.",
    "taskUz": "`emp` jadandlidagi xodimlar (`ename`) and `applicant` jadandlidagi nomzodlar (`aname`) ning noyob ismlarini `UNION` using display. Natijani alphabetical order saralang.",
    "expectedSql": "SELECT ename FROM emp UNION SELECT aname FROM applicant ORDER BY ename",
    "hint": "`SELECT ename FROM emp UNION SELECT aname FROM applicant ORDER BY ename` yozing.",
    "tags": [
      "UNION",
      "APPLICANT",
      "SET OPERATIONS"
    ],
    "solutions": [
      "SELECT ename FROM emp UNION SELECT aname FROM applicant ORDER BY ename"
    ],
    "task": "`emp` jadandlidagi xodimlar (`ename`) and `applicant` jadandlidagi nomzodlar (`aname`) ning noyob ismlarini `UNION` using display. Natijani alphabetical order saralang.",
    "explanation": ""
  },
  {
    "id": 77,
    "sector": 6,
    "difficulty": "Floor 6 • Advanced",
    "source": "S06 Task 17 • UNION ALL (Barcha Ismlar)",
    "title": "Barcha Xodimlar va Nomzodlar Ro'yxati (UNION ALL)",
    "story": "Eslatma: `UNION ALL` dublikatlarni tozalamaydi — barcha 14 ta xodim va 13 ta nomzod (jami 27 ta qator) to'liq chiqadi.",
    "taskUz": "Barcha xodimlar and nomzodlarning ismlarini dublikatlarni saqlagan holda `UNION ALL` via display. Natijani alphabetical order saralang.",
    "expectedSql": "SELECT ename FROM emp UNION ALL SELECT aname FROM applicant ORDER BY ename",
    "hint": "`SELECT ename FROM emp UNION ALL SELECT aname FROM applicant ORDER BY ename` yozing.",
    "tags": [
      "UNION ALL",
      "APPLICANT",
      "SET OPERATIONS"
    ],
    "solutions": [
      "SELECT ename FROM emp UNION ALL SELECT aname FROM applicant ORDER BY ename"
    ],
    "task": "Barcha xodimlar and nomzodlarning ismlarini dublikatlarni saqlagan holda `UNION ALL` via display. Natijani alphabetical order saralang.",
    "explanation": ""
  },
  {
    "id": 78,
    "sector": 6,
    "difficulty": "Floor 6 • Advanced",
    "source": "S06 Task 18 • UNION (Lavozimlar)",
    "title": "Xodimlar va Nomzodlarning Barcha Lavozimlari (UNION)",
    "story": "Korxonadagi mavjud xodimlar va kelgan nomzodlar qanday lavozimlarga ega ekanini aniqlang.",
    "taskUz": "`emp` and `applicant` jadandllaridagi barcha unikal lavozimlarni (`job`) `UNION` using display. Order results by `job`.",
    "expectedSql": "SELECT job FROM emp UNION SELECT job FROM applicant ORDER BY job",
    "hint": "`SELECT job FROM emp UNION SELECT job FROM applicant ORDER BY job` yozing.",
    "tags": [
      "UNION",
      "JOB",
      "SET OPERATIONS"
    ],
    "solutions": [
      "SELECT job FROM emp UNION SELECT job FROM applicant ORDER BY job"
    ],
    "task": "`emp` and `applicant` jadandllaridagi barcha unikal lavozimlarni (`job`) `UNION` using display. Order results by `job`.",
    "explanation": ""
  },
  {
    "id": 79,
    "sector": 6,
    "difficulty": "Floor 6 • Advanced",
    "source": "S06 Task 19 • UNION (Bo'limlar)",
    "title": "Xodimlar va Nomzodlar Bo'lim Raqamlari Birlashmasi (UNION)",
    "story": "Xodimlar ishlayotgan va yangi nomzodlar ariza topshirgan barcha unikal bo'lim raqamlarini birlashtiring.",
    "taskUz": "`emp` and `applicant` jadandllaridagi `deptno` ustunlarini `UNION` via birlashtirib display. Order results by `deptno`.",
    "expectedSql": "SELECT deptno FROM emp UNION SELECT deptno FROM applicant ORDER BY deptno",
    "hint": "`SELECT deptno FROM emp UNION SELECT deptno FROM applicant ORDER BY deptno` yozing.",
    "tags": [
      "UNION",
      "DEPT",
      "SET OPERATIONS"
    ],
    "solutions": [
      "SELECT deptno FROM emp UNION SELECT deptno FROM applicant ORDER BY deptno"
    ],
    "task": "`emp` and `applicant` jadandllaridagi `deptno` ustunlarini `UNION` via birlashtirib display. Order results by `deptno`.",
    "explanation": ""
  },
  {
    "id": 80,
    "sector": 6,
    "difficulty": "Floor 6 • Advanced",
    "source": "S06 Task 20 • UNION (Ism va Kasb)",
    "title": "Xodimlar va Nomzodlarning Ismi Hamda Lavozimi (UNION)",
    "story": "Har bir shaxsning ismi va uning lavozimini birlashtirilgan unikal jadval ko'rinishida taqdim eting.",
    "taskUz": "`emp` dagi `ename, job` and `applicant` dagi `aname, job` ustunlarini `UNION` using birlashtiring. Order results by `ename`.",
    "expectedSql": "SELECT ename, job FROM emp UNION SELECT aname, job FROM applicant ORDER BY ename",
    "hint": "`SELECT ename, job FROM emp UNION SELECT aname, job FROM applicant ORDER BY ename` yozing.",
    "tags": [
      "UNION",
      "MULTI-COLUMN",
      "SET OPERATIONS"
    ],
    "solutions": [
      "SELECT ename, job FROM emp UNION SELECT aname, job FROM applicant ORDER BY ename"
    ],
    "task": "`emp` dagi `ename, job` and `applicant` dagi `aname, job` ustunlarini `UNION` using birlashtiring. Order results by `ename`.",
    "explanation": ""
  },
  {
    "id": 81,
    "sector": 6,
    "difficulty": "Floor 6 • Advanced",
    "source": "S06 Task 20b • UNION ALL (Status Bilan)",
    "title": "Status Yorlig'i Bilan Birlashtirish (UNION ALL)",
    "story": "Har bir shaxsning kimligini bilish uchun 'XODIM' yoki 'NOMZOD' statust matnli ustunini qo'shib birlashtiramiz.",
    "taskUz": "`emp` dan `ename, 'XODIM' AS status` and `applicant` dan `aname, 'NOMZOD' AS status` ustunlarini `UNION ALL` via display. Order results by `ename`.",
    "expectedSql": "SELECT ename, 'XODIM' AS status FROM emp UNION ALL SELECT aname, 'NOMZOD' AS status FROM applicant ORDER BY ename",
    "hint": "`SELECT ename, 'XODIM' AS status FROM emp UNION ALL SELECT aname, 'NOMZOD' AS status FROM applicant ORDER BY ename` yozing.",
    "tags": [
      "UNION ALL",
      "LITERAL STATUS",
      "SET OPERATIONS"
    ],
    "solutions": [
      "SELECT ename, 'XODIM' AS status FROM emp UNION ALL SELECT aname, 'NOMZOD' AS status FROM applicant ORDER BY ename"
    ],
    "task": "`emp` dan `ename, 'XODIM' AS status` and `applicant` dan `aname, 'NOMZOD' AS status` ustunlarini `UNION ALL` via display. Order results by `ename`.",
    "explanation": ""
  },
  {
    "id": 82,
    "sector": 6,
    "difficulty": "Floor 6 • Advanced",
    "source": "S06 Task 20c • Nyu-York va Chikago Birlashmasi",
    "title": "Nyu-York (10) va Chikago (30) Xodimlari Birlashmasi (UNION)",
    "story": "10-bo'lim va 30-bo'limdagi xodimlarning ismlarini alohida SELECT larda olib, UNION orqali birlashtiring.",
    "taskUz": "10-bo'limdagi xodimlar (`deptno = 10`) and 30-bo'limdagi xodimlar (`deptno = 30`) ning ismlarini (`ename`) `UNION` via birlashtiring. Order results by `ename`.",
    "expectedSql": "SELECT ename FROM emp WHERE deptno = 10 UNION SELECT ename FROM emp WHERE deptno = 30 ORDER BY ename",
    "hint": "`SELECT ename FROM emp WHERE deptno = 10 UNION SELECT ename FROM emp WHERE deptno = 30 ORDER BY ename` yozing.",
    "tags": [
      "UNION",
      "DEPT",
      "SET OPERATIONS"
    ],
    "solutions": [
      "SELECT ename FROM emp WHERE deptno = 10 UNION SELECT ename FROM emp WHERE deptno = 30 ORDER BY ename"
    ],
    "task": "10-bo'limdagi xodimlar (`deptno = 10`) and 30-bo'limdagi xodimlar (`deptno = 30`) ning ismlarini (`ename`) `UNION` via birlashtiring. Order results by `ename`.",
    "explanation": ""
  },
  {
    "id": 83,
    "sector": 6,
    "difficulty": "Floor 6 • Advanced",
    "source": "S06 Task 20d • 10 va 20-Bo'lim Maoshlari",
    "title": "10-Bo'lim va 20-Bo'lim Xodimlari Maoshi Birlashmasi (UNION)",
    "story": "10 va 20-bo'lim xodimlarining ismi va maoshini UNION orqali birlashtiring.",
    "taskUz": "10-bo'limdagi xodimlar (`ename, sal`) and 20-bo'limdagi xodimlarning (`ename, sal`) `UNION` birlashmasini display. Order results by maosh kamayishi (`sal DESC`).",
    "expectedSql": "SELECT ename, sal FROM emp WHERE deptno = 10 UNION SELECT ename, sal FROM emp WHERE deptno = 20 ORDER BY sal DESC",
    "hint": "`SELECT ename, sal FROM emp WHERE deptno = 10 UNION SELECT ename, sal FROM emp WHERE deptno = 20 ORDER BY sal DESC` yozing.",
    "tags": [
      "UNION",
      "SALARY",
      "SET OPERATIONS"
    ],
    "solutions": [
      "SELECT ename, sal FROM emp WHERE deptno = 10 UNION SELECT ename, sal FROM emp WHERE deptno = 20 ORDER BY sal DESC"
    ],
    "task": "10-bo'limdagi xodimlar (`ename, sal`) and 20-bo'limdagi xodimlarning (`ename, sal`) `UNION` birlashmasini display. Order results by maosh kamayishi (`sal DESC`).",
    "explanation": ""
  },
  {
    "id": 84,
    "sector": 6,
    "difficulty": "Floor 6 • Advanced",
    "source": "S06 Task 20e • Menejerlar va Tahlilchilar",
    "title": "Menejerlar va Tahlilchilar Birlashmasi (UNION)",
    "story": "Menejerlar va tahlilchilar (ANALYST) toifasini birlashtiruvchi hisobot tayyorlang.",
    "taskUz": "Menejerlar (`job = 'MANAGER'`) and tahlilchilar (`job = 'ANALYST'`) ning name (`ename`) and lavozimini (`job`) `UNION` via birlashtiring. Order results by `ename`.",
    "expectedSql": "SELECT ename, job FROM emp WHERE job = 'MANAGER' UNION SELECT ename, job FROM emp WHERE job = 'ANALYST' ORDER BY ename",
    "hint": "`SELECT ename, job FROM emp WHERE job = 'MANAGER' UNION SELECT ename, job FROM emp WHERE job = 'ANALYST' ORDER BY ename` yozing.",
    "tags": [
      "UNION",
      "ROLES",
      "SET OPERATIONS"
    ],
    "solutions": [
      "SELECT ename, job FROM emp WHERE job = 'MANAGER' UNION SELECT ename, job FROM emp WHERE job = 'ANALYST' ORDER BY ename"
    ],
    "task": "Menejerlar (`job = 'MANAGER'`) and tahlilchilar (`job = 'ANALYST'`) ning name (`ename`) and lavozimini (`job`) `UNION` via birlashtiring. Order results by `ename`.",
    "explanation": ""
  },
  {
    "id": 85,
    "sector": 6,
    "difficulty": "Floor 6 • Advanced",
    "source": "S06 Task 20f • Komissiyadorlar va Yuqori Maoshlilar",
    "title": "Komissiya Oluvchilar va 2500 dan Yuqori Maoshlilar (UNION)",
    "story": "Bonus oluvchilar va yuqori daromadli xodimlarning umumiy guruhini shakllantiring.",
    "taskUz": "Komissiya oluvchi (`comm IS NOT NULL AND comm > 0`) xodimlar and maoshi 2500 dan yuqori (`sal > 2500`) bo'lgan xodimlarning name (`ename`) and salary (`sal`) `UNION` via display. Order results by `sal DESC`.",
    "expectedSql": "SELECT ename, sal FROM emp WHERE comm IS NOT NULL AND comm > 0 UNION SELECT ename, sal FROM emp WHERE sal > 2500 ORDER BY sal DESC",
    "hint": "`SELECT ename, sal FROM emp WHERE comm IS NOT NULL AND comm > 0 UNION SELECT ename, sal FROM emp WHERE sal > 2500 ORDER BY sal DESC` yozing.",
    "tags": [
      "UNION",
      "COMM",
      "SET OPERATIONS"
    ],
    "solutions": [
      "SELECT ename, sal FROM emp WHERE comm IS NOT NULL AND comm > 0 UNION SELECT ename, sal FROM emp WHERE sal > 2500 ORDER BY sal DESC"
    ],
    "task": "Komissiya oluvchi (`comm IS NOT NULL AND comm > 0`) xodimlar and maoshi 2500 dan yuqori (`sal > 2500`) bo'lgan xodimlarning name (`ename`) and salary (`sal`) `UNION` via display. Order results by `sal DESC`.",
    "explanation": ""
  },
  {
    "id": 86,
    "sector": 6,
    "difficulty": "Floor 6 • Advanced",
    "source": "S06 Task 20g • 102 va 104-Loyiha Birlashmasi",
    "title": "102-Loyiha va 104-Loyiha Xodimlari Birlashmasi (UNION)",
    "story": "UzumPay (102) va AI Engine (104) loyihalarida qatnashayotgan barcha xodimlar raqamini birlashtiring.",
    "taskUz": "102-loyihada (`pno = 102`) and 104-loyihada (`pno = 104`) ishlayotgan xodimlarning raqamini (`empno`) `UNION` via display. Order results by `empno`.",
    "expectedSql": "SELECT empno FROM works_on WHERE pno = 102 UNION SELECT empno FROM works_on WHERE pno = 104 ORDER BY empno",
    "hint": "`SELECT empno FROM works_on WHERE pno = 102 UNION SELECT empno FROM works_on WHERE pno = 104 ORDER BY empno` yozing.",
    "tags": [
      "UNION",
      "WORKS_ON",
      "SET OPERATIONS"
    ],
    "solutions": [
      "SELECT empno FROM works_on WHERE pno = 102 UNION SELECT empno FROM works_on WHERE pno = 104 ORDER BY empno"
    ],
    "task": "102-loyihada (`pno = 102`) and 104-loyihada (`pno = 104`) ishlayotgan xodimlarning raqamini (`empno`) `UNION` via display. Order results by `empno`.",
    "explanation": ""
  },
  {
    "id": 87,
    "sector": 6,
    "difficulty": "Floor 6 • Advanced",
    "source": "S06 Task 20h • 1-Daraja va 5-Daraja Birlashmasi",
    "title": "1-Daraja (700-1200) va 5-Daraja (>3000) Maosh Birlashmasi (UNION)",
    "story": "Eng kam haq to'lanadigan va eng yuqori haq to'lanadigan qutb xodimlar ro'yxatini birlashtiring.",
    "taskUz": "1-darajali (`sal BETWEEN 700 AND 1200`) and 5-darajali (`sal > 3000`) xodimlarning name (`ename`) and salary (`sal`) `UNION` via display. Order results by `sal DESC`.",
    "expectedSql": "SELECT ename, sal FROM emp WHERE sal BETWEEN 700 AND 1200 UNION SELECT ename, sal FROM emp WHERE sal > 3000 ORDER BY sal DESC",
    "hint": "`SELECT ename, sal FROM emp WHERE sal BETWEEN 700 AND 1200 UNION SELECT ename, sal FROM emp WHERE sal > 3000 ORDER BY sal DESC` yozing.",
    "tags": [
      "UNION",
      "SALGRADE",
      "SET OPERATIONS"
    ],
    "solutions": [
      "SELECT ename, sal FROM emp WHERE sal BETWEEN 700 AND 1200 UNION SELECT ename, sal FROM emp WHERE sal > 3000 ORDER BY sal DESC"
    ],
    "task": "1-darajali (`sal BETWEEN 700 AND 1200`) and 5-darajali (`sal > 3000`) xodimlarning name (`ename`) and salary (`sal`) `UNION` via display. Order results by `sal DESC`.",
    "explanation": ""
  },
  {
    "id": 88,
    "sector": 6,
    "difficulty": "Floor 6 • Advanced",
    "source": "S06 Task 20i • 2001 va 2002-Yilda Kirganlar",
    "title": "2001 va 2002-Yillarda Ishga Qabul Qilinganlar (UNION)",
    "story": "2001-yil va 2002-yillarda ish boshlagan faxriy jamoani birlashtiruvchi hisobot tuzing.",
    "taskUz": "2001-yilda (`hiredate >= '2001-01-01' AND hiredate <= '2001-12-31'`) and 2002-yilda (`hiredate >= '2002-01-01' AND hiredate <= '2002-12-31'`) ishga kirganlarning name (`ename`) and sanasini (`hiredate`) `UNION` via display. Order results by `hiredate`.",
    "expectedSql": "SELECT ename, hiredate FROM emp WHERE hiredate >= '2001-01-01' AND hiredate <= '2001-12-31' UNION SELECT ename, hiredate FROM emp WHERE hiredate >= '2002-01-01' AND hiredate <= '2002-12-31' ORDER BY hiredate",
    "hint": "`SELECT ename, hiredate FROM emp WHERE hiredate >= '2001-01-01' AND hiredate <= '2001-12-31' UNION SELECT ename, hiredate FROM emp WHERE hiredate >= '2002-01-01' AND hiredate <= '2002-12-31' ORDER BY hiredate` yozing.",
    "tags": [
      "UNION",
      "DATE",
      "SET OPERATIONS"
    ],
    "solutions": [
      "SELECT ename, hiredate FROM emp WHERE hiredate >= '2001-01-01' AND hiredate <= '2001-12-31' UNION SELECT ename, hiredate FROM emp WHERE hiredate >= '2002-01-01' AND hiredate <= '2002-12-31' ORDER BY hiredate"
    ],
    "task": "2001-yilda (`hiredate >= '2001-01-01' AND hiredate <= '2001-12-31'`) and 2002-yilda (`hiredate >= '2002-01-01' AND hiredate <= '2002-12-31'`) ishga kirganlarning name (`ename`) and sanasini (`hiredate`) `UNION` via display. Order results by `hiredate`.",
    "explanation": ""
  },
  {
    "id": 89,
    "sector": 6,
    "difficulty": "Floor 6 • Advanced",
    "source": "S06 Task 20j • 10-Bo'lim Xodim va Nomzodlari",
    "title": "10-Bo'limdagi Nomzodlar va Xodimlar Birlashmasi (UNION)",
    "story": "10-bo'limga tegishli bo'lgan mavjud xodimlar va nomzodlar ismlarini birlashtiring.",
    "taskUz": "10-bo'limdagi xodimlar (`ename WHERE deptno = 10`) and 10-bo'lim nomzodlari (`aname WHERE deptno = 10`) ning unikal ismlarini `UNION` via display. Order results by `ename`.",
    "expectedSql": "SELECT ename FROM emp WHERE deptno = 10 UNION SELECT aname FROM applicant WHERE deptno = 10 ORDER BY ename",
    "hint": "`SELECT ename FROM emp WHERE deptno = 10 UNION SELECT aname FROM applicant WHERE deptno = 10 ORDER BY ename` yozing.",
    "tags": [
      "UNION",
      "DEPT10",
      "APPLICANT"
    ],
    "solutions": [
      "SELECT ename FROM emp WHERE deptno = 10 UNION SELECT aname FROM applicant WHERE deptno = 10 ORDER BY ename"
    ],
    "task": "10-bo'limdagi xodimlar (`ename WHERE deptno = 10`) and 10-bo'lim nomzodlari (`aname WHERE deptno = 10`) ning unikal ismlarini `UNION` via display. Order results by `ename`.",
    "explanation": ""
  },
  {
    "id": 90,
    "sector": 6,
    "difficulty": "Floor 6 • Advanced",
    "source": "S06 Task 20k • 3 Bo'g'inli UNION",
    "title": "Prezident, Menejerlar va Tahlilchilar Birlashmasi (3 Bo'g'inli UNION)",
    "story": "Uchta mustaqil so'rovni ketma-ket UNION bilan bog'lash imkoniyatini amalda sinang.",
    "taskUz": "Prezident (`job = 'PRESIDENT'`), Menejerlar (`job = 'MANAGER'`) and Analitiklar (`job = 'ANALYST'`) ning name (`ename`) and lavozimini (`job`) 3 ta so'rovli `UNION` via display. Order results by `job` and `ename`.",
    "expectedSql": "SELECT ename, job FROM emp WHERE job = 'PRESIDENT' UNION SELECT ename, job FROM emp WHERE job = 'MANAGER' UNION SELECT ename, job FROM emp WHERE job = 'ANALYST' ORDER BY job, ename",
    "hint": "`SELECT ... UNION SELECT ... UNION SELECT ... ORDER BY job, ename` yozing.",
    "tags": [
      "UNION",
      "3-WAY",
      "SET OPERATIONS"
    ],
    "solutions": [
      "SELECT ename, job FROM emp WHERE job = 'PRESIDENT' UNION SELECT ename, job FROM emp WHERE job = 'MANAGER' UNION SELECT ename, job FROM emp WHERE job = 'ANALYST' ORDER BY job, ename"
    ],
    "task": "Prezident (`job = 'PRESIDENT'`), Menejerlar (`job = 'MANAGER'`) and Analitiklar (`job = 'ANALYST'`) ning name (`ename`) and lavozimini (`job`) 3 ta so'rovli `UNION` via display. Order results by `job` and `ename`.",
    "explanation": ""
  },
  {
    "id": 91,
    "sector": 7,
    "difficulty": "Floor 7 • Expert",
    "source": "S06 Task 21 • INTERSECT (Xodim va Nomzod)",
    "title": "Ham Xodim, Ham Nomzod Bo'lgan Shaxslar (INTERSECT)",
    "story": "Eslatma: `INTERSECT` ikkala to'plamda ham bir vaqtda mavjud bo'lgan umumiy (kesishuvchi) elementlarni qaytaradi.",
    "taskUz": "`emp` jadandlidagi xodimlar (`ename`) and `applicant` jadandlidagi nomzodlar (`aname`) orasida bir xil bo'lgan (qabul qilingan) shaxslarning ismlarini `INTERSECT` using display. Order results by `ename`.",
    "expectedSql": "SELECT ename FROM emp INTERSECT SELECT aname FROM applicant ORDER BY ename",
    "hint": "`SELECT ename FROM emp INTERSECT SELECT aname FROM applicant ORDER BY ename` yozing.",
    "tags": [
      "INTERSECT",
      "APPLICANT",
      "SET OPERATIONS"
    ],
    "solutions": [
      "SELECT ename FROM emp INTERSECT SELECT aname FROM applicant ORDER BY ename"
    ],
    "task": "`emp` jadandlidagi xodimlar (`ename`) and `applicant` jadandlidagi nomzodlar (`aname`) orasida bir xil bo'lgan (qabul qilingan) shaxslarning ismlarini `INTERSECT` using display. Order results by `ename`.",
    "explanation": ""
  },
  {
    "id": 92,
    "sector": 7,
    "difficulty": "Floor 7 • Expert",
    "source": "S06 Task 22 • EXCEPT (Qabul Qilinmagan Nomzodlar)",
    "title": "Nomzod Bo'lgan, Lekin Ishga Qabul Qilinmaganlar (EXCEPT)",
    "story": "Eslatma: `A EXCEPT B` birinchi to'plamda bor, lekin ikkinchisida yo'q bo'lgan elementlarni qaytaradi (KATE va MIKE).",
    "taskUz": "`applicant` jadandlidagi nomzodlar (`aname`) ro'yxatidan `emp` jadandlidagi xodimlar (`ename`) ni `EXCEPT` via ayirib, ishga qabul qilinmagan nomzodlarni display. Order results by `aname`.",
    "expectedSql": "SELECT aname FROM applicant EXCEPT SELECT ename FROM emp ORDER BY aname",
    "hint": "`SELECT aname FROM applicant EXCEPT SELECT ename FROM emp ORDER BY aname` yozing.",
    "tags": [
      "EXCEPT",
      "APPLICANT ONLY",
      "SET OPERATIONS"
    ],
    "solutions": [
      "SELECT aname FROM applicant EXCEPT SELECT ename FROM emp ORDER BY aname"
    ],
    "task": "`applicant` jadandlidagi nomzodlar (`aname`) ro'yxatidan `emp` jadandlidagi xodimlar (`ename`) ni `EXCEPT` via ayirib, ishga qabul qilinmagan nomzodlarni display. Order results by `aname`.",
    "explanation": ""
  },
  {
    "id": 93,
    "sector": 7,
    "difficulty": "Floor 7 • Expert",
    "source": "S06 Task 23 • EXCEPT (Nomzod Bo'lmagan Xodimlar)",
    "title": "Dastlab Nomzodlar Ro'yxatida Bo'lmagan Xodimlar (EXCEPT)",
    "story": "Xodimlar orasidan dastlab ariza topshirmasdan to'g'ridan-to'g'ri rahbarlikka olingan faxriylarni (KING, WARD, MILLER) toping.",
    "taskUz": "`emp` jadandlidagi xodimlardan (`ename`) `applicant` jadandlidagi nomzodlarni (`aname`) `EXCEPT` via ayirib display. Order results by `ename`.",
    "expectedSql": "SELECT ename FROM emp EXCEPT SELECT aname FROM applicant ORDER BY ename",
    "hint": "`SELECT ename FROM emp EXCEPT SELECT aname FROM applicant ORDER BY ename` yozing.",
    "tags": [
      "EXCEPT",
      "EMP ONLY",
      "SET OPERATIONS"
    ],
    "solutions": [
      "SELECT ename FROM emp EXCEPT SELECT aname FROM applicant ORDER BY ename"
    ],
    "task": "`emp` jadandlidagi xodimlardan (`ename`) `applicant` jadandlidagi nomzodlarni (`aname`) `EXCEPT` via ayirib display. Order results by `ename`.",
    "explanation": ""
  },
  {
    "id": 94,
    "sector": 7,
    "difficulty": "Floor 7 • Expert",
    "source": "S06 Task 24 • INTERSECT (Umumiy Lavozimlar)",
    "title": "Xodimlar va Nomzodlar Kesishmasidagi Kasblar (INTERSECT)",
    "story": "Ham ishlayotgan xodimlar, ham yangi ariza topshirgan nomzodlar orasida mavjud bo'lgan kasblarni aniqlang.",
    "taskUz": "`emp` and `applicant` jadandllaridagi lavozimlarning (`job`) kesishmasini `INTERSECT` via display. Order results by `job`.",
    "expectedSql": "SELECT job FROM emp INTERSECT SELECT job FROM applicant ORDER BY job",
    "hint": "`SELECT job FROM emp INTERSECT SELECT job FROM applicant ORDER BY job` yozing.",
    "tags": [
      "INTERSECT",
      "JOB",
      "SET OPERATIONS"
    ],
    "solutions": [
      "SELECT job FROM emp INTERSECT SELECT job FROM applicant ORDER BY job"
    ],
    "task": "`emp` and `applicant` jadandllaridagi lavozimlarning (`job`) kesishmasini `INTERSECT` via display. Order results by `job`.",
    "explanation": ""
  },
  {
    "id": 95,
    "sector": 7,
    "difficulty": "Floor 7 • Expert",
    "source": "S06 Task 25 • 10-Bo'lim Kesishmasi",
    "title": "10-Bo'limdagi Xodimlar va Nomzodlar Kesishmasi (INTERSECT)",
    "story": "10-bo'limga tegishli bo'lgan va ikkala jadvalda ham uchraydigan shaxslarni aniqlang.",
    "taskUz": "10-bo'lim xodimlari (`ename WHERE deptno = 10`) and 10-bo'lim nomzodlari (`aname WHERE deptno = 10`) ning kesishmasini `INTERSECT` using display. Order results by `ename`.",
    "expectedSql": "SELECT ename FROM emp WHERE deptno = 10 INTERSECT SELECT aname FROM applicant WHERE deptno = 10 ORDER BY ename",
    "hint": "`SELECT ename FROM emp WHERE deptno = 10 INTERSECT SELECT aname FROM applicant WHERE deptno = 10 ORDER BY ename` yozing.",
    "tags": [
      "INTERSECT",
      "DEPT10",
      "SET OPERATIONS"
    ],
    "solutions": [
      "SELECT ename FROM emp WHERE deptno = 10 INTERSECT SELECT aname FROM applicant WHERE deptno = 10 ORDER BY ename"
    ],
    "task": "10-bo'lim xodimlari (`ename WHERE deptno = 10`) and 10-bo'lim nomzodlari (`aname WHERE deptno = 10`) ning kesishmasini `INTERSECT` using display. Order results by `ename`.",
    "explanation": ""
  },
  {
    "id": 96,
    "sector": 7,
    "difficulty": "Floor 7 • Expert",
    "source": "S06 Task 25b • 30-Bo'lim Kesishmasi",
    "title": "30-Bo'limdagi Xodimlar va Nomzodlar Kesishmasi (INTERSECT)",
    "story": "30-bo'limdagi ham xodim, ham nomzod bo'lgan shaxslarni INTERSECT orqali toping.",
    "taskUz": "30-bo'lim xodimlari (`ename WHERE deptno = 30`) and 30-bo'lim nomzodlari (`aname WHERE deptno = 30`) ning kesishmasini `INTERSECT` via display. Order results by `ename`.",
    "expectedSql": "SELECT ename FROM emp WHERE deptno = 30 INTERSECT SELECT aname FROM applicant WHERE deptno = 30 ORDER BY ename",
    "hint": "`SELECT ename FROM emp WHERE deptno = 30 INTERSECT SELECT aname FROM applicant WHERE deptno = 30 ORDER BY ename` yozing.",
    "tags": [
      "INTERSECT",
      "DEPT30",
      "SET OPERATIONS"
    ],
    "solutions": [
      "SELECT ename FROM emp WHERE deptno = 30 INTERSECT SELECT aname FROM applicant WHERE deptno = 30 ORDER BY ename"
    ],
    "task": "30-bo'lim xodimlari (`ename WHERE deptno = 30`) and 30-bo'lim nomzodlari (`aname WHERE deptno = 30`) ning kesishmasini `INTERSECT` via display. Order results by `ename`.",
    "explanation": ""
  },
  {
    "id": 97,
    "sector": 7,
    "difficulty": "Floor 7 • Expert",
    "source": "S06 Task 25c • 102 va 104-Loyiha Kesishmasi",
    "title": "Ham 102, Ham 104-Loyihada Ishlayotgan Xodimlar (INTERSECT)",
    "story": "Bir vaqtning o'zida ikkala muhim loyihada (UzumPay va AI Engine) ishlayotgan xodimlarni toping.",
    "taskUz": "102-loyihada (`pno = 102`) and 104-loyihada (`pno = 104`) ishlayotgan xodimlarning raqamini (`empno`) `INTERSECT` via display. Order results by `empno`.",
    "expectedSql": "SELECT empno FROM works_on WHERE pno = 102 INTERSECT SELECT empno FROM works_on WHERE pno = 104 ORDER BY empno",
    "hint": "`SELECT empno FROM works_on WHERE pno = 102 INTERSECT SELECT empno FROM works_on WHERE pno = 104 ORDER BY empno` yozing.",
    "tags": [
      "INTERSECT",
      "WORKS_ON",
      "SET OPERATIONS"
    ],
    "solutions": [
      "SELECT empno FROM works_on WHERE pno = 102 INTERSECT SELECT empno FROM works_on WHERE pno = 104 ORDER BY empno"
    ],
    "task": "102-loyihada (`pno = 102`) and 104-loyihada (`pno = 104`) ishlayotgan xodimlarning raqamini (`empno`) `INTERSECT` via display. Order results by `empno`.",
    "explanation": ""
  },
  {
    "id": 98,
    "sector": 7,
    "difficulty": "Floor 7 • Expert",
    "source": "S06 Task 25d • 102 da Bor, 104 da Yo'q (EXCEPT)",
    "title": "102-Loyihada Ishlaydigan, Ammo 104 da Ishlamaydiganlar (EXCEPT)",
    "story": "Faqat 102-loyihada bo'lib, 104-loyihada qatnashmaydigan xodimlarni ayirma orqali toping.",
    "taskUz": "102-loyihada (`pno = 102`) ishlovchi xodimlardan 104-loyihada (`pno = 104`) ishlovchilarni `EXCEPT` via ayirib display. Order results by `empno`.",
    "expectedSql": "SELECT empno FROM works_on WHERE pno = 102 EXCEPT SELECT empno FROM works_on WHERE pno = 104 ORDER BY empno",
    "hint": "`SELECT empno FROM works_on WHERE pno = 102 EXCEPT SELECT empno FROM works_on WHERE pno = 104 ORDER BY empno` yozing.",
    "tags": [
      "EXCEPT",
      "WORKS_ON",
      "SET OPERATIONS"
    ],
    "solutions": [
      "SELECT empno FROM works_on WHERE pno = 102 EXCEPT SELECT empno FROM works_on WHERE pno = 104 ORDER BY empno"
    ],
    "task": "102-loyihada (`pno = 102`) ishlovchi xodimlardan 104-loyihada (`pno = 104`) ishlovchilarni `EXCEPT` via ayirib display. Order results by `empno`.",
    "explanation": ""
  },
  {
    "id": 99,
    "sector": 7,
    "difficulty": "Floor 7 • Expert",
    "source": "S06 Task 25e • Bo'sh Bo'limni Ayirish Bilan Topish",
    "title": "Barcha Bo'limlardan Xodimli Bo'limlarni Ayirib Bo'shini Topish (EXCEPT)",
    "story": "`dept` dagi barcha bo'limlardan `emp` dagi bo'limlarni `EXCEPT` bilan ayirsak, xodimsiz qolgan bo'lim chiqadi.",
    "taskUz": "`dept` jadandlidagi barcha `deptno` lardan `emp` jadandlidagi `deptno` larni `EXCEPT` via ayirib display. Order results by `deptno`.",
    "expectedSql": "SELECT deptno FROM dept EXCEPT SELECT deptno FROM emp ORDER BY deptno",
    "hint": "`SELECT deptno FROM dept EXCEPT SELECT deptno FROM emp ORDER BY deptno` yozing.",
    "tags": [
      "EXCEPT",
      "DEPT",
      "SET OPERATIONS"
    ],
    "solutions": [
      "SELECT deptno FROM dept EXCEPT SELECT deptno FROM emp ORDER BY deptno"
    ],
    "task": "`dept` jadandlidagi barcha `deptno` lardan `emp` jadandlidagi `deptno` larni `EXCEPT` via ayirib display. Order results by `deptno`.",
    "explanation": ""
  },
  {
    "id": 100,
    "sector": 7,
    "difficulty": "Floor 7 • Expert",
    "source": "S06 Task 25f • Kotib Bo'lmagan Nomzodlar (EXCEPT)",
    "title": "Nomzodlar Ichidan CLERK Bo'lmaganlarini Ayirish (EXCEPT)",
    "story": "Nomzodlar to'plamidan kotib (CLERK) lavozimiga ariza topshirganlarni to'plamlar ayirmasi orqali olib tashlang.",
    "taskUz": "Barcha nomzodlar ismlaridan (`aname FROM applicant`) CLERK lavozimiga topshirgan nomzodlarni (`aname FROM applicant WHERE job = 'CLERK'`) `EXCEPT` via ayirib display. Order results by `aname`.",
    "expectedSql": "SELECT aname FROM applicant EXCEPT SELECT aname FROM applicant WHERE job = 'CLERK' ORDER BY aname",
    "hint": "`SELECT aname FROM applicant EXCEPT SELECT aname FROM applicant WHERE job = 'CLERK' ORDER BY aname` yozing.",
    "tags": [
      "EXCEPT",
      "APPLICANT",
      "SET OPERATIONS"
    ],
    "solutions": [
      "SELECT aname FROM applicant EXCEPT SELECT aname FROM applicant WHERE job = 'CLERK' ORDER BY aname"
    ],
    "task": "Barcha nomzodlar ismlaridan (`aname FROM applicant`) CLERK lavozimiga topshirgan nomzodlarni (`aname FROM applicant WHERE job = 'CLERK'`) `EXCEPT` via ayirib display. Order results by `aname`.",
    "explanation": ""
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = window.QUESTIONS_51_100;
}
