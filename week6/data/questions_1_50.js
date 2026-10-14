// ============================================================================
// DATABASE SYSTEMS ACADEMY — WEEK 6: QUERY OPTIMIZATION & TRANSACTIONS
// Variable: QUESTIONS_1_50 (50 Questions)
// ============================================================================

window.QUESTIONS_1_50 = [
  {
    "id": 1,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "S06 Task 1 • Skalyar Subquery (WHERE)",
    "title": "CLARK Bilan Bir Xil Bo'limdagi Hamkasblar",
    "story": "Kompaniya rahbariyati CLARK ishlayotgan bo'limdagi boshqa xodimlar tarkibini ko'rib chiqmoqchi.",
    "taskUz": "CLARK for all employees working in the same department as name (`ename`), job title (`job`) and salary (`sal`) display. (CLARK ning o'zi ro'yxatda chiqmasin).",
    "expectedSql": "SELECT ename, job, sal FROM emp WHERE deptno = (SELECT deptno FROM emp WHERE ename = 'CLARK') AND ename != 'CLARK'",
    "hint": "`WHERE deptno = (SELECT deptno FROM emp WHERE ename = 'CLARK') AND ename != 'CLARK'` shartidan foydalaning.",
    "tags": [
      "SUBQUERY",
      "WHERE",
      "SCALAR"
    ],
    "solutions": [
      "SELECT ename, job, sal FROM emp WHERE deptno = (SELECT deptno FROM emp WHERE ename = 'CLARK') AND ename != 'CLARK'"
    ],
    "task": "CLARK for all employees working in the same department as name (`ename`), job title (`job`) and salary (`sal`) display. (CLARK ning o'zi ro'yxatda chiqmasin).",
    "explanation": ""
  },
  {
    "id": 2,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "S06 Task 1b • Skalyar Subquery (WHERE)",
    "title": "Prezident KING Bo'limidagi Xodimlar",
    "story": "Korporatsiya prezidenti KING o'zining bo'limida qaysi xodimlar faoliyat yuritayotganini tekshirmoqda.",
    "taskUz": "Prezident KING for employees working in the department of name (`ename`), job title (`job`) and salary (`sal`) display. (KING ning o'zidan tashqari).",
    "expectedSql": "SELECT ename, job, sal FROM emp WHERE deptno = (SELECT deptno FROM emp WHERE ename = 'KING') AND ename != 'KING'",
    "hint": "`WHERE deptno = (SELECT deptno FROM emp WHERE ename = 'KING') AND ename != 'KING'` yozing.",
    "tags": [
      "SUBQUERY",
      "WHERE",
      "SCALAR"
    ],
    "solutions": [
      "SELECT ename, job, sal FROM emp WHERE deptno = (SELECT deptno FROM emp WHERE ename = 'KING') AND ename != 'KING'"
    ],
    "task": "Prezident KING for employees working in the department of name (`ename`), job title (`job`) and salary (`sal`) display. (KING ning o'zidan tashqari).",
    "explanation": ""
  },
  {
    "id": 3,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "S06 Task 2 • MIN Maosh Subquery",
    "title": "Eng Kam Maosh Oluvchi Xodim",
    "story": "Ijtimoiy yordam va maoshlarni indeksatsiya qilish uchun korxonadagi eng minimal maosh oluvchi xodimni aniqlash lozim.",
    "taskUz": "Korxona bo'yicha eng kam maosh oluvchi xodimning name (`ename`), job title (`job`) and salary (`sal`) display.",
    "expectedSql": "SELECT ename, job, sal FROM emp WHERE sal = (SELECT MIN(sal) FROM emp)",
    "hint": "`WHERE sal = (SELECT MIN(sal) FROM emp)` shartidan foydalaning.",
    "tags": [
      "SUBQUERY",
      "MIN",
      "WHERE"
    ],
    "solutions": [
      "SELECT ename, job, sal FROM emp WHERE sal = (SELECT MIN(sal) FROM emp)"
    ],
    "task": "Korxona bo'yicha eng kam maosh oluvchi xodimning name (`ename`), job title (`job`) and salary (`sal`) display.",
    "explanation": ""
  },
  {
    "id": 4,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "S06 Task 3 • AVG Maosh Subquery",
    "title": "O'rtacha Maoshdan Ko'p Oluvchilar",
    "story": "Moliya auditi kompaniya bo'yicha o'rtacha maoshdan yuqori daromad topadigan barcha xodimlarni tahlil qilmoqda.",
    "taskUz": "Korxona o'rtacha maoshidan ko'proq maosh oluvchi xodimlarning name (`ename`), job title (`job`) and salary (`sal`) display. Natijani maosh bo'yicha kamayish tartibida saralang.",
    "expectedSql": "SELECT ename, job, sal FROM emp WHERE sal > (SELECT AVG(sal) FROM emp) ORDER BY sal DESC",
    "hint": "`WHERE sal > (SELECT AVG(sal) FROM emp)` va `ORDER BY sal DESC` yozing.",
    "tags": [
      "SUBQUERY",
      "AVG",
      "ORDER BY"
    ],
    "solutions": [
      "SELECT ename, job, sal FROM emp WHERE sal > (SELECT AVG(sal) FROM emp) ORDER BY sal DESC"
    ],
    "task": "Korxona o'rtacha maoshidan ko'proq maosh oluvchi xodimlarning name (`ename`), job title (`job`) and salary (`sal`) display. Natijani maosh bo'yicha kamayish tartibida saralang.",
    "explanation": ""
  },
  {
    "id": 5,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "S06 Task 4 • BLAKE Maoshidan Kam",
    "title": "BLAKE Maoshidan Kam Oluvchilar",
    "story": "Menejer BLAKE o'z maoshidan kamroq maosh oladigan xodimlarning ro'yxatini so'ramoqda.",
    "taskUz": "BLAKE ning maoshidan kam maosh oladigan xodimlarning name (`ename`), job title (`job`) and salary (`sal`) display. Order results by maosh o'sishi.",
    "expectedSql": "SELECT ename, job, sal FROM emp WHERE sal < (SELECT sal FROM emp WHERE ename = 'BLAKE') ORDER BY sal",
    "hint": "`WHERE sal < (SELECT sal FROM emp WHERE ename = 'BLAKE') ORDER BY sal` dan foydalaning.",
    "tags": [
      "SUBQUERY",
      "WHERE",
      "ORDER BY"
    ],
    "solutions": [
      "SELECT ename, job, sal FROM emp WHERE sal < (SELECT sal FROM emp WHERE ename = 'BLAKE') ORDER BY sal"
    ],
    "task": "BLAKE ning maoshidan kam maosh oladigan xodimlarning name (`ename`), job title (`job`) and salary (`sal`) display. Order results by maosh o'sishi.",
    "explanation": ""
  },
  {
    "id": 6,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "S06 Task 4b • MAX Maosh Subquery",
    "title": "Eng Yuqori Maosh Oluvchi Xodim",
    "story": "Yillik hisobotda kompaniyadagi eng yuqori maoshga ega bo'lgan xodim qayd etilishi kerak.",
    "taskUz": "Korxonada eng ko'p maosh oladigan xodimning name (`ename`), job title (`job`) and salary (`sal`) display.",
    "expectedSql": "SELECT ename, job, sal FROM emp WHERE sal = (SELECT MAX(sal) FROM emp)",
    "hint": "`WHERE sal = (SELECT MAX(sal) FROM emp)` .",
    "tags": [
      "SUBQUERY",
      "MAX",
      "WHERE"
    ],
    "solutions": [
      "SELECT ename, job, sal FROM emp WHERE sal = (SELECT MAX(sal) FROM emp)"
    ],
    "task": "Korxonada eng ko'p maosh oladigan xodimning name (`ename`), job title (`job`) and salary (`sal`) display.",
    "explanation": ""
  },
  {
    "id": 7,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "S06 Task 4c • RESEARCH Bo'limi Subquery",
    "title": "Tadqiqot (RESEARCH) Bo'limi Xodimlari",
    "story": "Ilmiy bo'limga yangi laboratoriya ajratilmoqda. `dept` jadvalidan `RESEARCH` bo'limi raqamini subquery orqali olib, xodimlarni toping.",
    "taskUz": "`dept` jadandlidan subquery using `RESEARCH` bo'limida ishlaydigan xodimlarning name (`ename`), job title (`job`) and salary (`sal`) display.",
    "expectedSql": "SELECT ename, job, sal FROM emp WHERE deptno = (SELECT deptno FROM dept WHERE dname = 'RESEARCH')",
    "hint": "`WHERE deptno = (SELECT deptno FROM dept WHERE dname = 'RESEARCH')` yozing.",
    "tags": [
      "SUBQUERY",
      "WHERE",
      "RELATIONAL"
    ],
    "solutions": [
      "SELECT ename, job, sal FROM emp WHERE deptno = (SELECT deptno FROM dept WHERE dname = 'RESEARCH')"
    ],
    "task": "`dept` jadandlidan subquery using `RESEARCH` bo'limida ishlaydigan xodimlarning name (`ename`), job title (`job`) and salary (`sal`) display.",
    "explanation": ""
  },
  {
    "id": 8,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "S06 Task 4d • DALLAS Filiali Subquery",
    "title": "Dallas Shahridagi Filial Xodimlari",
    "story": "Dallas filialida ta'mirlash ishlari boshlanmoqda. U yerdagi xodimlarning ro'yxati talab etiladi.",
    "taskUz": "`dept` jadandlidan subquery using `loc = 'DALLAS'` shahrida joylashgan bo'lim xodimlarining name (`ename`), job title (`job`) and salary (`sal`) display.",
    "expectedSql": "SELECT ename, job, sal FROM emp WHERE deptno = (SELECT deptno FROM dept WHERE loc = 'DALLAS')",
    "hint": "`WHERE deptno = (SELECT deptno FROM dept WHERE loc = 'DALLAS')` shartidan foydalaning.",
    "tags": [
      "SUBQUERY",
      "WHERE",
      "LOC"
    ],
    "solutions": [
      "SELECT ename, job, sal FROM emp WHERE deptno = (SELECT deptno FROM dept WHERE loc = 'DALLAS')"
    ],
    "task": "`dept` jadandlidan subquery using `loc = 'DALLAS'` shahrida joylashgan bo'lim xodimlarining name (`ename`), job title (`job`) and salary (`sal`) display.",
    "explanation": ""
  },
  {
    "id": 9,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "S06 Task 4e • 30-Bo'lim O'rtachasidan Yuqori",
    "title": "30-Bo'lim O'rtacha Maoshidan Ko'p Oluvchilar",
    "story": "Sotuv (30) bo'limining o'rtacha maosh darajasi butun kompaniyaga mezon qilib belgilandi.",
    "taskUz": "30-bo'limning o'rtacha maoshidan ko'proq maosh oluvchi barcha xodimlarning name (`ename`), maoshi (`sal`) and bo'lim raqamini (`deptno`) display. Order results by maosh.",
    "expectedSql": "SELECT ename, sal, deptno FROM emp WHERE sal > (SELECT AVG(sal) FROM emp WHERE deptno = 30) ORDER BY sal",
    "hint": "`WHERE sal > (SELECT AVG(sal) FROM emp WHERE deptno = 30) ORDER BY sal` .",
    "tags": [
      "SUBQUERY",
      "AVG",
      "WHERE"
    ],
    "solutions": [
      "SELECT ename, sal, deptno FROM emp WHERE sal > (SELECT AVG(sal) FROM emp WHERE deptno = 30) ORDER BY sal"
    ],
    "task": "30-bo'limning o'rtacha maoshidan ko'proq maosh oluvchi barcha xodimlarning name (`ename`), maoshi (`sal`) and bo'lim raqamini (`deptno`) display. Order results by maosh.",
    "explanation": ""
  },
  {
    "id": 10,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "S06 Task 4f • SCOTT Kasbdoshlari",
    "title": "SCOTT Bilan Bir Xil Kasb Egalari",
    "story": "SCOTT ga yordamchi kerak. Uning kasbida (`job`) bo'lgan boshqa xodimlarni topish zarur.",
    "taskUz": "SCOTT bilan bir xil lavozimda (`job`) ishlaydigan (SCOTT ning o'zidan tashqari) xodimlarning name (`ename`), job title (`job`) and salary (`sal`) display.",
    "expectedSql": "SELECT ename, job, sal FROM emp WHERE job = (SELECT job FROM emp WHERE ename = 'SCOTT') AND ename != 'SCOTT'",
    "hint": "`WHERE job = (SELECT job FROM emp WHERE ename = 'SCOTT') AND ename != 'SCOTT'` .",
    "tags": [
      "SUBQUERY",
      "WHERE",
      "JOB"
    ],
    "solutions": [
      "SELECT ename, job, sal FROM emp WHERE job = (SELECT job FROM emp WHERE ename = 'SCOTT') AND ename != 'SCOTT'"
    ],
    "task": "SCOTT bilan bir xil lavozimda (`job`) ishlaydigan (SCOTT ning o'zidan tashqari) xodimlarning name (`ename`), job title (`job`) and salary (`sal`) display.",
    "explanation": ""
  },
  {
    "id": 11,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "S06 Task 4g • Eng Yangi Xodim",
    "title": "Kompaniyaga Eng Oxirgi Ishga Kirgan Xodim",
    "story": "Yangi kelgan xodimga mentor biriktirish uchun uning shaxsini aniqlang.",
    "taskUz": "Korxonaga eng oxirgi ishga qabul qilingan (maksimal `hiredate` ga ega) xodimning name (`ename`), job title (`job`) and ishga kirgan sanasini (`hiredate`) display.",
    "expectedSql": "SELECT ename, job, hiredate FROM emp WHERE hiredate = (SELECT MAX(hiredate) FROM emp)",
    "hint": "`WHERE hiredate = (SELECT MAX(hiredate) FROM emp)` .",
    "tags": [
      "SUBQUERY",
      "MAX",
      "DATE"
    ],
    "solutions": [
      "SELECT ename, job, hiredate FROM emp WHERE hiredate = (SELECT MAX(hiredate) FROM emp)"
    ],
    "task": "Korxonaga eng oxirgi ishga qabul qilingan (maksimal `hiredate` ga ega) xodimning name (`ename`), job title (`job`) and ishga kirgan sanasini (`hiredate`) display.",
    "explanation": ""
  },
  {
    "id": 12,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "S06 Task 4h • Faxriy Xodim",
    "title": "Kompaniyaning Eng Faxriy Xodimi",
    "story": "Kompaniya tashkil etilgan ilk yilda ishga kirgan birinchi xodimga faxriy mukofot topshiriladi.",
    "taskUz": "Korxonaga eng birinchi ishga qabul qilingan (minimal `hiredate` ga ega) xodimning name (`ename`), job title (`job`) and ishga kirgan sanasini (`hiredate`) display.",
    "expectedSql": "SELECT ename, job, hiredate FROM emp WHERE hiredate = (SELECT MIN(hiredate) FROM emp)",
    "hint": "`WHERE hiredate = (SELECT MIN(hiredate) FROM emp)` .",
    "tags": [
      "SUBQUERY",
      "MIN",
      "DATE"
    ],
    "solutions": [
      "SELECT ename, job, hiredate FROM emp WHERE hiredate = (SELECT MIN(hiredate) FROM emp)"
    ],
    "task": "Korxonaga eng birinchi ishga qabul qilingan (minimal `hiredate` ga ega) xodimning name (`ename`), job title (`job`) and ishga kirgan sanasini (`hiredate`) display.",
    "explanation": ""
  },
  {
    "id": 13,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "S06 Task 4i • JONES Rahbariga Hisobot",
    "title": "JONES Bilan Bir Xil Rahbarga Ega Xodimlar",
    "story": "JONES ning boshlig'iga bo'ysunadigan boshqa xodimlar yig'ilishga taklif qilinmoqda.",
    "taskUz": "JONES bilan bir xil rahbar (mgr)ga ega bo'lgan (JONES ning o'zidan tashqari) xodimlarning name (`ename`), job title (`job`) and rahbari raqamini (`mgr`) display.",
    "expectedSql": "SELECT ename, job, mgr FROM emp WHERE mgr = (SELECT mgr FROM emp WHERE ename = 'JONES') AND ename != 'JONES'",
    "hint": "`WHERE mgr = (SELECT mgr FROM emp WHERE ename = 'JONES') AND ename != 'JONES'` yozing.",
    "tags": [
      "SUBQUERY",
      "WHERE",
      "MGR"
    ],
    "solutions": [
      "SELECT ename, job, mgr FROM emp WHERE mgr = (SELECT mgr FROM emp WHERE ename = 'JONES') AND ename != 'JONES'"
    ],
    "task": "JONES bilan bir xil rahbar (mgr)ga ega bo'lgan (JONES ning o'zidan tashqari) xodimlarning name (`ename`), job title (`job`) and rahbari raqamini (`mgr`) display.",
    "explanation": ""
  },
  {
    "id": 14,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "S06 Task 4j • CLERK Maksimalidan Yuqori",
    "title": "Kotiblar (CLERK) Maksimal Maoshidan Yuqori",
    "story": "Oddiy kotiblar lavozimidagi eng katta maoshdan ham yuqori haq oladigan xodimlar tahlil qilinmoqda.",
    "taskUz": "CLERK lavozimidagi barcha xodimlarning maksimal maoshidan yuqori maosh oladigan xodimlarning name (`ename`), job title (`job`) and salary (`sal`) display. Order results by maosh.",
    "expectedSql": "SELECT ename, job, sal FROM emp WHERE sal > (SELECT MAX(sal) FROM emp WHERE job = 'CLERK') ORDER BY sal",
    "hint": "`WHERE sal > (SELECT MAX(sal) FROM emp WHERE job = 'CLERK') ORDER BY sal` .",
    "tags": [
      "SUBQUERY",
      "MAX",
      "ORDER BY"
    ],
    "solutions": [
      "SELECT ename, job, sal FROM emp WHERE sal > (SELECT MAX(sal) FROM emp WHERE job = 'CLERK') ORDER BY sal"
    ],
    "task": "CLERK lavozimidagi barcha xodimlarning maksimal maoshidan yuqori maosh oladigan xodimlarning name (`ename`), job title (`job`) and salary (`sal`) display. Order results by maosh.",
    "explanation": ""
  },
  {
    "id": 15,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "S06 Task 4k • Komissiyadorlar Ichida Min Maosh",
    "title": "Komissiya Oluvchilar Ichida Eng Kam Maosh",
    "story": "Komissiya oluvchi xodimlar ichida minimal asosiy oylikka ega xodim aniqlanmoqda.",
    "taskUz": "Komissiya oladigan (`comm IS NOT NULL AND comm > 0`) xodimlar orasida eng kam asosiy maosh (`sal`) oluvchi xodimning name (`ename`), maoshi (`sal`) and komissiyasini (`comm`) display.",
    "expectedSql": "SELECT ename, sal, comm FROM emp WHERE sal = (SELECT MIN(sal) FROM emp WHERE comm IS NOT NULL AND comm > 0)",
    "hint": "`WHERE sal = (SELECT MIN(sal) FROM emp WHERE comm IS NOT NULL AND comm > 0)` yozing.",
    "tags": [
      "SUBQUERY",
      "MIN",
      "COMM"
    ],
    "solutions": [
      "SELECT ename, sal, comm FROM emp WHERE sal = (SELECT MIN(sal) FROM emp WHERE comm IS NOT NULL AND comm > 0)"
    ],
    "task": "Komissiya oladigan (`comm IS NOT NULL AND comm > 0`) xodimlar orasida eng kam asosiy maosh (`sal`) oluvchi xodimning name (`ename`), maoshi (`sal`) and komissiyasini (`comm`) display.",
    "explanation": ""
  },
  {
    "id": 16,
    "sector": 2,
    "difficulty": "Floor 2 • Intermediate",
    "source": "S06 Task 5 • Rahbarlar Ro'yxati (IN)",
    "title": "Rahbar (Menejer) Bo'lib Xizmat Qiluvchilar",
    "story": "Boshqaruv kengashi kimlar kamida bitta xodimga bevosita rahbarlik qilayotganini aniqlamoqda.",
    "taskUz": "Kamida bitta xodimning rahbari (`mgr`) bo'lgan barcha xodimlarning raqami (`empno`), name (`ename`) and lavozimini (`job`) display. Order results by `empno`.",
    "expectedSql": "SELECT empno, ename, job FROM emp WHERE empno IN (SELECT mgr FROM emp WHERE mgr IS NOT NULL) ORDER BY empno",
    "hint": "`WHERE empno IN (SELECT mgr FROM emp WHERE mgr IS NOT NULL) ORDER BY empno` yozing.",
    "tags": [
      "IN",
      "SUBQUERY",
      "MGR"
    ],
    "solutions": [
      "SELECT empno, ename, job FROM emp WHERE empno IN (SELECT mgr FROM emp WHERE mgr IS NOT NULL) ORDER BY empno"
    ],
    "task": "Kamida bitta xodimning rahbari (`mgr`) bo'lgan barcha xodimlarning raqami (`empno`), name (`ename`) and lavozimini (`job`) display. Order results by `empno`.",
    "explanation": ""
  },
  {
    "id": 17,
    "sector": 2,
    "difficulty": "Floor 2 • Intermediate",
    "source": "S06 Task 6 • Megapolis Filiallari (IN)",
    "title": "Nyu-York va Chikago Filiali Xodimlari",
    "story": "Sharqiy mintaqa strategik uchrashuvi uchun Nyu-York yoki Chikagoda joylashgan bo'lim xodimlari ro'yxati kerak.",
    "taskUz": "Nyu-York yoki Chikagoda joylashgan bo'limlarda ishlovchi xodimlarning name (`ename`), job title (`job`) and bo'lim raqamini (`deptno`) display. Order results by `deptno`.",
    "expectedSql": "SELECT ename, job, deptno FROM emp WHERE deptno IN (SELECT deptno FROM dept WHERE loc IN ('NEW YORK', 'CHICAGO')) ORDER BY deptno",
    "hint": "`WHERE deptno IN (SELECT deptno FROM dept WHERE loc IN ('NEW YORK', 'CHICAGO')) ORDER BY deptno` yozing.",
    "tags": [
      "IN",
      "SUBQUERY",
      "LOC"
    ],
    "solutions": [
      "SELECT ename, job, deptno FROM emp WHERE deptno IN (SELECT deptno FROM dept WHERE loc IN ('NEW YORK', 'CHICAGO')) ORDER BY deptno"
    ],
    "task": "Nyu-York yoki Chikagoda joylashgan bo'limlarda ishlovchi xodimlarning name (`ename`), job title (`job`) and bo'lim raqamini (`deptno`) display. Order results by `deptno`.",
    "explanation": ""
  },
  {
    "id": 18,
    "sector": 2,
    "difficulty": "Floor 2 • Intermediate",
    "source": "S06 Task 6b • 4-Darajali Maosh Bo'limlari",
    "title": "4-Darajali Maoshga Ega Bo'lim Xodimlari",
    "story": "Kompaniyada 4-darajali (2001 dan 3000 gacha) maosh oluvchilar faoliyat yuritadigan bo'limlar aniqlanmoqda.",
    "taskUz": "Maoshi 2001 and 3000 oralig'ida bo'lgan xodimlar ishlaydigan bo'limlardagi barcha xodimlarning name (`ename`), maoshi (`sal`) and bo'lim raqamini (`deptno`) display. Order results by `deptno` and `sal`.",
    "expectedSql": "SELECT ename, sal, deptno FROM emp WHERE deptno IN (SELECT deptno FROM emp WHERE sal BETWEEN 2001 AND 3000) ORDER BY deptno, sal",
    "hint": "`WHERE deptno IN (SELECT deptno FROM emp WHERE sal BETWEEN 2001 AND 3000) ORDER BY deptno, sal` yozing.",
    "tags": [
      "IN",
      "SUBQUERY",
      "BETWEEN"
    ],
    "solutions": [
      "SELECT ename, sal, deptno FROM emp WHERE deptno IN (SELECT deptno FROM emp WHERE sal BETWEEN 2001 AND 3000) ORDER BY deptno, sal"
    ],
    "task": "Maoshi 2001 and 3000 oralig'ida bo'lgan xodimlar ishlaydigan bo'limlardagi barcha xodimlarning name (`ename`), maoshi (`sal`) and bo'lim raqamini (`deptno`) display. Order results by `deptno` and `sal`.",
    "explanation": ""
  },
  {
    "id": 19,
    "sector": 2,
    "difficulty": "Floor 2 • Intermediate",
    "source": "S06 Task 6c • Nomzodlar Ro'yxatidagi Xodimlar",
    "title": "Dastlab Nomzod Bo'lgan Xodimlar",
    "story": "HR bo'limi dastlab ish so'rab ariza topshirgan (`applicant`) nomzodlar orasidan qaysilari hozir xodim ekanini tekshirmoqda.",
    "taskUz": "`applicant` jadandlidagi nomzodlar ismlari ro'yxatida mavjud bo'lgan xodimlarning raqami (`empno`), name (`ename`) and lavozimini (`job`) display. Order results by `ename`.",
    "expectedSql": "SELECT empno, ename, job FROM emp WHERE ename IN (SELECT aname FROM applicant) ORDER BY ename",
    "hint": "`WHERE ename IN (SELECT aname FROM applicant) ORDER BY ename` yozing.",
    "tags": [
      "IN",
      "APPLICANT",
      "SUBQUERY"
    ],
    "solutions": [
      "SELECT empno, ename, job FROM emp WHERE ename IN (SELECT aname FROM applicant) ORDER BY ename"
    ],
    "task": "`applicant` jadandlidagi nomzodlar ismlari ro'yxatida mavjud bo'lgan xodimlarning raqami (`empno`), name (`ename`) and lavozimini (`job`) display. Order results by `ename`.",
    "explanation": ""
  },
  {
    "id": 20,
    "sector": 2,
    "difficulty": "Floor 2 • Intermediate",
    "source": "S06 Task 7 • NOT IN va NULL Qopqoni",
    "title": "Hech Kimga Rahbar Bo'lmagan Xodimlar (NULL Tuzog'i)",
    "story": "DIQQAT: SQL da agar ichki so'rov natijasida bitta bo'lsa ham `NULL` bo'lsa, `NOT IN` har doim bo'sh natija qaytaradi! Shu sababli `WHERE mgr IS NOT NULL` shartini qo'yish shart.",
    "taskUz": "Hech kimga rahbarlik qilmaydigan oddiy xodimlarning raqami (`empno`), name (`ename`) and lavozimini (`job`) `NOT IN` via display. (`mgr IS NOT NULL` filtrini unutmang!). Order results by `empno`.",
    "expectedSql": "SELECT empno, ename, job FROM emp WHERE empno NOT IN (SELECT mgr FROM emp WHERE mgr IS NOT NULL) ORDER BY empno",
    "hint": "`WHERE empno NOT IN (SELECT mgr FROM emp WHERE mgr IS NOT NULL) ORDER BY empno` yozing.",
    "tags": [
      "NOT IN",
      "NULL TRAP",
      "SUBQUERY"
    ],
    "solutions": [
      "SELECT empno, ename, job FROM emp WHERE empno NOT IN (SELECT mgr FROM emp WHERE mgr IS NOT NULL) ORDER BY empno"
    ],
    "task": "Hech kimga rahbarlik qilmaydigan oddiy xodimlarning raqami (`empno`), name (`ename`) and lavozimini (`job`) `NOT IN` via display. (`mgr IS NOT NULL` filtrini unutmang!). Order results by `empno`.",
    "explanation": ""
  },
  {
    "id": 21,
    "sector": 2,
    "difficulty": "Floor 2 • Intermediate",
    "source": "S06 Task 7b • ANALYST yoki PRESIDENT Bo'limi",
    "title": "Analitik yoki Prezident Bo'limidagi Xodimlar",
    "story": "Prezident yoki analitiklar faoliyat yuritadigan elita bo'limlardagi barcha xodimlarni saralash talab qilinadi.",
    "taskUz": "Lavozimi 'ANALYST' yoki 'PRESIDENT' bo'lgan xodimlar ishlaydigan bo'limlardagi barcha xodimlarning name (`ename`), job title (`job`) and bo'lim raqamini (`deptno`) display. Order results by `ename`.",
    "expectedSql": "SELECT ename, job, deptno FROM emp WHERE deptno IN (SELECT deptno FROM emp WHERE job IN ('ANALYST', 'PRESIDENT')) ORDER BY ename",
    "hint": "`WHERE deptno IN (SELECT deptno FROM emp WHERE job IN ('ANALYST', 'PRESIDENT')) ORDER BY ename` yozing.",
    "tags": [
      "IN",
      "SUBQUERY",
      "JOB"
    ],
    "solutions": [
      "SELECT ename, job, deptno FROM emp WHERE deptno IN (SELECT deptno FROM emp WHERE job IN ('ANALYST', 'PRESIDENT')) ORDER BY ename"
    ],
    "task": "Lavozimi 'ANALYST' yoki 'PRESIDENT' bo'lgan xodimlar ishlaydigan bo'limlardagi barcha xodimlarning name (`ename`), job title (`job`) and bo'lim raqamini (`deptno`) display. Order results by `ename`.",
    "explanation": ""
  },
  {
    "id": 22,
    "sector": 2,
    "difficulty": "Floor 2 • Intermediate",
    "source": "S06 Task 7c • UzumPay Loyihasi (IN)",
    "title": "UzumPay (102) Loyihasidagi Xodimlar",
    "story": "UzumPay milliy to'lov tizimi integratsiyasi uchun biriktirilgan jamoa a'zolarini aniqlang.",
    "taskUz": "`works_on` jadandlidan foydalanib, 102-loyihada (`pno = 102`) ishlayotgan barcha xodimlarning raqami (`empno`), name (`ename`) and lavozimini (`job`) display. Order results by `ename`.",
    "expectedSql": "SELECT empno, ename, job FROM emp WHERE empno IN (SELECT empno FROM works_on WHERE pno = 102) ORDER BY ename",
    "hint": "`WHERE empno IN (SELECT empno FROM works_on WHERE pno = 102) ORDER BY ename` yozing.",
    "tags": [
      "IN",
      "PROJECT",
      "SUBQUERY"
    ],
    "solutions": [
      "SELECT empno, ename, job FROM emp WHERE empno IN (SELECT empno FROM works_on WHERE pno = 102) ORDER BY ename"
    ],
    "task": "`works_on` jadandlidan foydalanib, 102-loyihada (`pno = 102`) ishlayotgan barcha xodimlarning raqami (`empno`), name (`ename`) and lavozimini (`job`) display. Order results by `ename`.",
    "explanation": ""
  },
  {
    "id": 23,
    "sector": 2,
    "difficulty": "Floor 2 • Intermediate",
    "source": "S06 Task 7d • Loyihasiz Xodimlar (NOT IN)",
    "title": "Hech Qanday Loyihada Ishlamaydigan Xodimlar",
    "story": "Loyiha boshqaruvi idorasi yangi vazifalarni yuklash uchun ayni paytda birorta ham loyihaga (`works_on`) biriktirilmagan xodimlarni qidirmoqda.",
    "taskUz": "Hech qanday loyihada ishlamaydigan xodimlarning raqami (`empno`), name (`ename`) and lavozimini (`job`) `NOT IN` using display. Order results by `ename`.",
    "expectedSql": "SELECT empno, ename, job FROM emp WHERE empno NOT IN (SELECT empno FROM works_on) ORDER BY ename",
    "hint": "`WHERE empno NOT IN (SELECT empno FROM works_on) ORDER BY ename` yozing.",
    "tags": [
      "NOT IN",
      "WORKS_ON",
      "SUBQUERY"
    ],
    "solutions": [
      "SELECT empno, ename, job FROM emp WHERE empno NOT IN (SELECT empno FROM works_on) ORDER BY ename"
    ],
    "task": "Hech qanday loyihada ishlamaydigan xodimlarning raqami (`empno`), name (`ename`) and lavozimini (`job`) `NOT IN` using display. Order results by `ename`.",
    "explanation": ""
  },
  {
    "id": 24,
    "sector": 2,
    "difficulty": "Floor 2 • Intermediate",
    "source": "S06 Task 7e • 101-Loyihada Faol Xodimlar",
    "title": "CloudMigration (101) Loyihasida 30 Soatdan Ko'p Ishlaganlar",
    "story": "CloudMigration loyihasida 30 soatdan ko'p mehnat sarflagan asosiy mutaxassislar aniqlanmoqda.",
    "taskUz": "101-loyihada 30 soatdan ortiq (`pno = 101 AND hours > 30`) ishlagan xodimlarning raqami (`empno`), name (`ename`) and lavozimini (`job`) display. Order results by `empno`.",
    "expectedSql": "SELECT empno, ename, job FROM emp WHERE empno IN (SELECT empno FROM works_on WHERE pno = 101 AND hours > 30) ORDER BY empno",
    "hint": "`WHERE empno IN (SELECT empno FROM works_on WHERE pno = 101 AND hours > 30) ORDER BY empno` yozing.",
    "tags": [
      "IN",
      "HOURS",
      "SUBQUERY"
    ],
    "solutions": [
      "SELECT empno, ename, job FROM emp WHERE empno IN (SELECT empno FROM works_on WHERE pno = 101 AND hours > 30) ORDER BY empno"
    ],
    "task": "101-loyihada 30 soatdan ortiq (`pno = 101 AND hours > 30`) ishlagan xodimlarning raqami (`empno`), name (`ename`) and lavozimini (`job`) display. Order results by `empno`.",
    "explanation": ""
  },
  {
    "id": 25,
    "sector": 2,
    "difficulty": "Floor 2 • Intermediate",
    "source": "S06 Task 8 • Xodimi Bor Bo'limlar",
    "title": "Kamida Bitta Xodimi Bor Bo'limlar",
    "story": "Faoliyat yuritayotgan bo'limlar ro'yxatini shakllantirish talab etiladi.",
    "taskUz": "Kamida bitta xodim ishlayotgan bo'limlarning raqami (`deptno`) and nomini (`dname`) `dept` jadandlidan subquery using display. Order results by `deptno`.",
    "expectedSql": "SELECT deptno, dname FROM dept WHERE deptno IN (SELECT deptno FROM emp) ORDER BY deptno",
    "hint": "`WHERE deptno IN (SELECT deptno FROM emp) ORDER BY deptno` .",
    "tags": [
      "IN",
      "DEPT",
      "SUBQUERY"
    ],
    "solutions": [
      "SELECT deptno, dname FROM dept WHERE deptno IN (SELECT deptno FROM emp) ORDER BY deptno"
    ],
    "task": "Kamida bitta xodim ishlayotgan bo'limlarning raqami (`deptno`) and nomini (`dname`) `dept` jadandlidan subquery using display. Order results by `deptno`.",
    "explanation": ""
  },
  {
    "id": 26,
    "sector": 2,
    "difficulty": "Floor 2 • Intermediate",
    "source": "S06 Task 8b • Bo'sh Bo'limlar (NOT IN)",
    "title": "Birorta Ham Xodimi Bo'lmagan Bo'lim",
    "story": "Optimizatsiya uchun birorta ham xodimi mavjud bo'lmagan bo'sh bo'limni aniqlang.",
    "taskUz": "Birorta ham xodimi ishlamaydigan bo'limlarning raqami (`deptno`), nomi (`dname`) and joylashuvini (`loc`) `NOT IN` via display. Order results by `deptno`.",
    "expectedSql": "SELECT deptno, dname, loc FROM dept WHERE deptno NOT IN (SELECT deptno FROM emp) ORDER BY deptno",
    "hint": "`WHERE deptno NOT IN (SELECT deptno FROM emp) ORDER BY deptno` yozing.",
    "tags": [
      "NOT IN",
      "EMPTY DEPT",
      "SUBQUERY"
    ],
    "solutions": [
      "SELECT deptno, dname, loc FROM dept WHERE deptno NOT IN (SELECT deptno FROM emp) ORDER BY deptno"
    ],
    "task": "Birorta ham xodimi ishlamaydigan bo'limlarning raqami (`deptno`), nomi (`dname`) and joylashuvini (`loc`) `NOT IN` via display. Order results by `deptno`.",
    "explanation": ""
  },
  {
    "id": 27,
    "sector": 2,
    "difficulty": "Floor 2 • Intermediate",
    "source": "S06 Task 8c • Komissiyali Bo'lim Xodimlari",
    "title": "Komissiya Mavjud Bo'limdagi Hamkasblar",
    "story": "Tizimda komissiya puli to'lanadigan xodimi bor bo'limlardagi barcha ishchilarni aniqlash lozim.",
    "taskUz": "Komissiya oluvchi (`comm IS NOT NULL AND comm > 0`) xodimlar ishlaydigan bo'limlardagi barcha xodimlarning name (`ename`), job title (`job`) and bo'lim raqamini (`deptno`) display. Order results by `ename`.",
    "expectedSql": "SELECT ename, job, deptno FROM emp WHERE deptno IN (SELECT deptno FROM emp WHERE comm IS NOT NULL AND comm > 0) ORDER BY ename",
    "hint": "`WHERE deptno IN (SELECT deptno FROM emp WHERE comm IS NOT NULL AND comm > 0) ORDER BY ename` yozing.",
    "tags": [
      "IN",
      "COMM",
      "SUBQUERY"
    ],
    "solutions": [
      "SELECT ename, job, deptno FROM emp WHERE deptno IN (SELECT deptno FROM emp WHERE comm IS NOT NULL AND comm > 0) ORDER BY ename"
    ],
    "task": "Komissiya oluvchi (`comm IS NOT NULL AND comm > 0`) xodimlar ishlaydigan bo'limlardagi barcha xodimlarning name (`ename`), job title (`job`) and bo'lim raqamini (`deptno`) display. Order results by `ename`.",
    "explanation": ""
  },
  {
    "id": 28,
    "sector": 2,
    "difficulty": "Floor 2 • Intermediate",
    "source": "S06 Task 8d • Menejer Maoshiga Teng",
    "title": "Menejerlar Maoshiga Teng Bo'lgan Boshqa Xodimlar",
    "story": "Menejer bo'lmasa-da, menejerlar bilan bir xil maosh olayotgan mutaxassislar darajasi tahlil qilinmoqda.",
    "taskUz": "Menejer (`job = 'MANAGER'`) lavozimidagi xodimlarning birontasi bilan bir xil maosh oladigan, lekin o'zi menejer bo'lmagan (`job != 'MANAGER'`) xodimlarning name (`ename`), job title (`job`) and salary (`sal`) display.",
    "expectedSql": "SELECT ename, job, sal FROM emp WHERE sal IN (SELECT sal FROM emp WHERE job = 'MANAGER') AND job != 'MANAGER'",
    "hint": "`WHERE sal IN (SELECT sal FROM emp WHERE job = 'MANAGER') AND job != 'MANAGER'` yozing.",
    "tags": [
      "IN",
      "SALARY",
      "SUBQUERY"
    ],
    "solutions": [
      "SELECT ename, job, sal FROM emp WHERE sal IN (SELECT sal FROM emp WHERE job = 'MANAGER') AND job != 'MANAGER'"
    ],
    "task": "Menejer (`job = 'MANAGER'`) lavozimidagi xodimlarning birontasi bilan bir xil maosh oladigan, lekin o'zi menejer bo'lmagan (`job != 'MANAGER'`) xodimlarning name (`ename`), job title (`job`) and salary (`sal`) display.",
    "explanation": ""
  },
  {
    "id": 29,
    "sector": 2,
    "difficulty": "Floor 2 • Intermediate",
    "source": "S06 Task 8e • Nomzod Bo'lmagan Xodimlar",
    "title": "Nomzodlar Ro'yxatidan Tashqarida Ishga Kirganlar",
    "story": "HR arxivida dastlabki nomzodlar (`applicant`) ro'yxatidan o'tmagan holda to'g'ridan-to'g'ri ishga olingan xodimlarni aniqlang.",
    "taskUz": "Nomzodlar (`applicant`) ro'yxatida ismi mavjud bo'lmagan xodimlarning raqami (`empno`), name (`ename`) and lavozimini (`job`) `NOT IN` via display. Order results by `ename`.",
    "expectedSql": "SELECT empno, ename, job FROM emp WHERE ename NOT IN (SELECT aname FROM applicant) ORDER BY ename",
    "hint": "`WHERE ename NOT IN (SELECT aname FROM applicant) ORDER BY ename` yozing.",
    "tags": [
      "NOT IN",
      "APPLICANT",
      "SUBQUERY"
    ],
    "solutions": [
      "SELECT empno, ename, job FROM emp WHERE ename NOT IN (SELECT aname FROM applicant) ORDER BY ename"
    ],
    "task": "Nomzodlar (`applicant`) ro'yxatida ismi mavjud bo'lmagan xodimlarning raqami (`empno`), name (`ename`) and lavozimini (`job`) `NOT IN` via display. Order results by `ename`.",
    "explanation": ""
  },
  {
    "id": 30,
    "sector": 2,
    "difficulty": "Floor 2 • Intermediate",
    "source": "S06 Task 8f • Dallas yoki Boston Xodimlari",
    "title": "Dallas yoki Boston Filiallaridagi Xodimlar",
    "story": "Shimoli-sharqiy hudud bo'yicha Dallas yoki Boston filiallaridagi xodimlarning umumiy hisoboti tuzilmoqda.",
    "taskUz": "Dallas yoki Boston filiallariga qarashli bo'limlarda ishlovchi xodimlarning name (`ename`), job title (`job`) and bo'lim raqamini (`deptno`) display. Order results by `ename`.",
    "expectedSql": "SELECT ename, job, deptno FROM emp WHERE deptno IN (SELECT deptno FROM dept WHERE loc IN ('DALLAS', 'BOSTON')) ORDER BY ename",
    "hint": "`WHERE deptno IN (SELECT deptno FROM dept WHERE loc IN ('DALLAS', 'BOSTON')) ORDER BY ename` .",
    "tags": [
      "IN",
      "LOC",
      "SUBQUERY"
    ],
    "solutions": [
      "SELECT ename, job, deptno FROM emp WHERE deptno IN (SELECT deptno FROM dept WHERE loc IN ('DALLAS', 'BOSTON')) ORDER BY ename"
    ],
    "task": "Dallas yoki Boston filiallariga qarashli bo'limlarda ishlovchi xodimlarning name (`ename`), job title (`job`) and bo'lim raqamini (`deptno`) display. Order results by `ename`.",
    "explanation": ""
  },
  {
    "id": 31,
    "sector": 3,
    "difficulty": "Floor 3 • Intermediate+",
    "source": "S06 Task 9 • ANY Operatori",
    "title": "Kamida Bitta CLERK dan Ko'p Maosh Oluvchilar (> ANY)",
    "story": "Eslatma: `> ANY (SELECT sal ...)` ifodasi 'ichki so'rov natijasidagi kamida bitta qiymatdan katta', ya'ni eng minimalidan katta deganidir.",
    "taskUz": "Kamida bitta kotib (CLERK) dan ko'proq maosh oladigan xodimlarning name (`ename`), job title (`job`) and salary (`sal`) display. Order results by maosh.",
    "expectedSql": "SELECT ename, job, sal FROM emp WHERE sal > ANY (SELECT sal FROM emp WHERE job = 'CLERK') ORDER BY sal",
    "hint": "`WHERE sal > ANY (SELECT sal FROM emp WHERE job = 'CLERK') ORDER BY sal` yozing.",
    "tags": [
      "ANY",
      "SUBQUERY",
      "QUANTITATIVE"
    ],
    "solutions": [
      "SELECT ename, job, sal FROM emp WHERE sal > ANY (SELECT sal FROM emp WHERE job = 'CLERK') ORDER BY sal"
    ],
    "task": "Kamida bitta kotib (CLERK) dan ko'proq maosh oladigan xodimlarning name (`ename`), job title (`job`) and salary (`sal`) display. Order results by maosh.",
    "explanation": ""
  },
  {
    "id": 32,
    "sector": 3,
    "difficulty": "Floor 3 • Intermediate+",
    "source": "S06 Task 10 • ALL Operatori",
    "title": "Barcha CLERK lardan Ko'p Maosh Oluvchilar (> ALL)",
    "story": "Eslatma: `> ALL (SELECT sal ...)` ifodasi 'ichki so'rov natijasidagi istisnosiz BARCHA qiymatlardan katta', ya'ni eng maksimalidan ham katta deganidir.",
    "taskUz": "Barcha kotib (CLERK) lardan ko'proq maosh oladigan xodimlarning name (`ename`), job title (`job`) and salary (`sal`) display. Order results by maosh.",
    "expectedSql": "SELECT ename, job, sal FROM emp WHERE sal > ALL (SELECT sal FROM emp WHERE job = 'CLERK') ORDER BY sal",
    "hint": "`WHERE sal > ALL (SELECT sal FROM emp WHERE job = 'CLERK') ORDER BY sal` yozing.",
    "tags": [
      "ALL",
      "SUBQUERY",
      "QUANTITATIVE"
    ],
    "solutions": [
      "SELECT ename, job, sal FROM emp WHERE sal > ALL (SELECT sal FROM emp WHERE job = 'CLERK') ORDER BY sal"
    ],
    "task": "Barcha kotib (CLERK) lardan ko'proq maosh oladigan xodimlarning name (`ename`), job title (`job`) and salary (`sal`) display. Order results by maosh.",
    "explanation": ""
  },
  {
    "id": 33,
    "sector": 3,
    "difficulty": "Floor 3 • Intermediate+",
    "source": "S06 Task 11 • Kamida Bitta Menejerdan Kam (< ANY)",
    "title": "Kamida Bitta Menejerdan Kam Maosh Oluvchilar (< ANY)",
    "story": "Menejerlarning eng yuqori maoshidan pastroq bo'lgan barcha xodimlar qamrab olinadi.",
    "taskUz": "Kamida bitta menejer (`job = 'MANAGER'`) dan kam maosh oladigan xodimlarning name (`ename`), job title (`job`) and salary (`sal`) display. Order results by maosh.",
    "expectedSql": "SELECT ename, job, sal FROM emp WHERE sal < ANY (SELECT sal FROM emp WHERE job = 'MANAGER') ORDER BY sal",
    "hint": "`WHERE sal < ANY (SELECT sal FROM emp WHERE job = 'MANAGER') ORDER BY sal` yozing.",
    "tags": [
      "ANY",
      "MANAGER",
      "SUBQUERY"
    ],
    "solutions": [
      "SELECT ename, job, sal FROM emp WHERE sal < ANY (SELECT sal FROM emp WHERE job = 'MANAGER') ORDER BY sal"
    ],
    "task": "Kamida bitta menejer (`job = 'MANAGER'`) dan kam maosh oladigan xodimlarning name (`ename`), job title (`job`) and salary (`sal`) display. Order results by maosh.",
    "explanation": ""
  },
  {
    "id": 34,
    "sector": 3,
    "difficulty": "Floor 3 • Intermediate+",
    "source": "S06 Task 12 • Barcha Menejerlardan Kam (< ALL)",
    "title": "Barcha Menejerlardan Kam Maosh Oluvchilar (< ALL)",
    "story": "Kompaniyadagi barcha menejerlarning eng past maoshidan ham kamroq maosh oladigan xodimlar toifasi.",
    "taskUz": "Barcha menejer (MANAGER) lardan kam maosh oladigan xodimlarning name (`ename`), job title (`job`) and salary (`sal`) display. Order results by maosh.",
    "expectedSql": "SELECT ename, job, sal FROM emp WHERE sal < ALL (SELECT sal FROM emp WHERE job = 'MANAGER') ORDER BY sal",
    "hint": "`WHERE sal < ALL (SELECT sal FROM emp WHERE job = 'MANAGER') ORDER BY sal` yozing.",
    "tags": [
      "ALL",
      "MANAGER",
      "SUBQUERY"
    ],
    "solutions": [
      "SELECT ename, job, sal FROM emp WHERE sal < ALL (SELECT sal FROM emp WHERE job = 'MANAGER') ORDER BY sal"
    ],
    "task": "Barcha menejer (MANAGER) lardan kam maosh oladigan xodimlarning name (`ename`), job title (`job`) and salary (`sal`) display. Order results by maosh.",
    "explanation": ""
  },
  {
    "id": 35,
    "sector": 3,
    "difficulty": "Floor 3 • Intermediate+",
    "source": "S06 Task 12b • 30-Bo'lim Xodimi Bilan Teng (= ANY)",
    "title": "30-Bo'limdagi Har Qanday Xodim Bilan Teng Maosh (= ANY)",
    "story": "30-bo'limdagi xodimlarning birortasi bilan bir xil maosh oladigan boshqa bo'lim xodimlarini toping.",
    "taskUz": "30-bo'limda ishlamaydigan (`deptno != 30`), lekin maoshi 30-bo'limdagi kamida bitta xodim maoshiga teng (`= ANY`) bo'lgan xodimlarning name (`ename`), maoshi (`sal`) and bo'lim raqamini (`deptno`) display.",
    "expectedSql": "SELECT ename, sal, deptno FROM emp WHERE sal = ANY (SELECT sal FROM emp WHERE deptno = 30) AND deptno != 30",
    "hint": "`WHERE sal = ANY (SELECT sal FROM emp WHERE deptno = 30) AND deptno != 30` .",
    "tags": [
      "ANY",
      "EQUAL",
      "SUBQUERY"
    ],
    "solutions": [
      "SELECT ename, sal, deptno FROM emp WHERE sal = ANY (SELECT sal FROM emp WHERE deptno = 30) AND deptno != 30"
    ],
    "task": "30-bo'limda ishlamaydigan (`deptno != 30`), lekin maoshi 30-bo'limdagi kamida bitta xodim maoshiga teng (`= ANY`) bo'lgan xodimlarning name (`ename`), maoshi (`sal`) and bo'lim raqamini (`deptno`) display.",
    "explanation": ""
  },
  {
    "id": 36,
    "sector": 3,
    "difficulty": "Floor 3 • Intermediate+",
    "source": "S06 Task 12c • Sotuvchilardan Ko'p Menejerlar (> ALL)",
    "title": "Barcha Sotuvchilardan (SALESMAN) Ko'p Oluvchi Menejerlar",
    "story": "Barcha sotuvchilardan ko'proq maosh oluvchi yuqori malakali menejerlar aniqlanmoqda.",
    "taskUz": "Barcha sotuvchi (`job = 'SALESMAN'`) lardan ko'proq maosh oladigan menejerlarning (`job = 'MANAGER'`) name (`ename`), job title (`job`) and salary (`sal`) display.",
    "expectedSql": "SELECT ename, job, sal FROM emp WHERE job = 'MANAGER' AND sal > ALL (SELECT sal FROM emp WHERE job = 'SALESMAN')",
    "hint": "`WHERE job = 'MANAGER' AND sal > ALL (SELECT sal FROM emp WHERE job = 'SALESMAN')` .",
    "tags": [
      "ALL",
      "SALESMAN",
      "SUBQUERY"
    ],
    "solutions": [
      "SELECT ename, job, sal FROM emp WHERE job = 'MANAGER' AND sal > ALL (SELECT sal FROM emp WHERE job = 'SALESMAN')"
    ],
    "task": "Barcha sotuvchi (`job = 'SALESMAN'`) lardan ko'proq maosh oladigan menejerlarning (`job = 'MANAGER'`) name (`ename`), job title (`job`) and salary (`sal`) display.",
    "explanation": ""
  },
  {
    "id": 37,
    "sector": 3,
    "difficulty": "Floor 3 • Intermediate+",
    "source": "S06 Task 12d • 20-Bo'limdan Kam (< ALL)",
    "title": "20-Bo'limdagi Barcha Xodimlardan Kam Maosh (< ALL)",
    "story": "20-bo'limdagi eng kam maoshli xodimdan ham kamroq haq oluvchi xodimlar saralanadi.",
    "taskUz": "20-bo'limdagi barcha xodimlardan kam maosh oladigan xodimlarning name (`ename`), job title (`job`) and salary (`sal`) display.",
    "expectedSql": "SELECT ename, job, sal FROM emp WHERE sal < ALL (SELECT sal FROM emp WHERE deptno = 20)",
    "hint": "`WHERE sal < ALL (SELECT sal FROM emp WHERE deptno = 20)` yozing.",
    "tags": [
      "ALL",
      "SUBQUERY",
      "DEPT"
    ],
    "solutions": [
      "SELECT ename, job, sal FROM emp WHERE sal < ALL (SELECT sal FROM emp WHERE deptno = 20)"
    ],
    "task": "20-bo'limdagi barcha xodimlardan kam maosh oladigan xodimlarning name (`ename`), job title (`job`) and salary (`sal`) display.",
    "explanation": ""
  },
  {
    "id": 38,
    "sector": 3,
    "difficulty": "Floor 3 • Intermediate+",
    "source": "S06 Task 12e • Loyihada 35 Soatdan Ko'p (= ANY)",
    "title": "Kamida Bitta Loyihada 35 Soatdan Ko'p Ishlaganlar (= ANY)",
    "story": "Kamida bitta loyihada 35 soatdan ortiq vaqt sarflagan xodimlarni `= ANY` orqali tanlang.",
    "taskUz": "Kamida bitta loyihada 35 soatdan ko'p ishlagan (`hours > 35`) xodimlarning raqami (`empno`), name (`ename`) and lavozimini (`job`) `= ANY` using display. Order results by `empno`.",
    "expectedSql": "SELECT empno, ename, job FROM emp WHERE empno = ANY (SELECT empno FROM works_on WHERE hours > 35) ORDER BY empno",
    "hint": "`WHERE empno = ANY (SELECT empno FROM works_on WHERE hours > 35) ORDER BY empno` yozing.",
    "tags": [
      "ANY",
      "HOURS",
      "SUBQUERY"
    ],
    "solutions": [
      "SELECT empno, ename, job FROM emp WHERE empno = ANY (SELECT empno FROM works_on WHERE hours > 35) ORDER BY empno"
    ],
    "task": "Kamida bitta loyihada 35 soatdan ko'p ishlagan (`hours > 35`) xodimlarning raqami (`empno`), name (`ename`) and lavozimini (`job`) `= ANY` using display. Order results by `empno`.",
    "explanation": ""
  },
  {
    "id": 39,
    "sector": 3,
    "difficulty": "Floor 3 • Intermediate+",
    "source": "S06 Task 12f • Sotuvchilardan Keyin Kirganlar (> ALL)",
    "title": "Barcha Sotuvchilardan Kechroq Ishga Kirganlar (> ALL)",
    "story": "Kompaniyadagi barcha sotuvchilardan (SALESMAN) kechroq qabul qilingan xodimlarni aniqlang.",
    "taskUz": "Barcha sotuvchilardan (`job = 'SALESMAN'`) kechroq sanada ishga kirgan xodimlarning name (`ename`), job title (`job`) and ishga kirgan sanasini (`hiredate`) display. Order results by `hiredate`.",
    "expectedSql": "SELECT ename, job, hiredate FROM emp WHERE hiredate > ALL (SELECT hiredate FROM emp WHERE job = 'SALESMAN') ORDER BY hiredate",
    "hint": "`WHERE hiredate > ALL (SELECT hiredate FROM emp WHERE job = 'SALESMAN') ORDER BY hiredate` yozing.",
    "tags": [
      "ALL",
      "DATE",
      "SUBQUERY"
    ],
    "solutions": [
      "SELECT ename, job, hiredate FROM emp WHERE hiredate > ALL (SELECT hiredate FROM emp WHERE job = 'SALESMAN') ORDER BY hiredate"
    ],
    "task": "Barcha sotuvchilardan (`job = 'SALESMAN'`) kechroq sanada ishga kirgan xodimlarning name (`ename`), job title (`job`) and ishga kirgan sanasini (`hiredate`) display. Order results by `hiredate`.",
    "explanation": ""
  },
  {
    "id": 40,
    "sector": 3,
    "difficulty": "Floor 3 • Intermediate+",
    "source": "S06 Task 12g • Barchadan Oldin Kirgan Faxriy (<= ALL)",
    "title": "Barcha Xodimlardan Oldinroq Ishga Kirgan Faxriy (<= ALL)",
    "story": "Eng faxriy xodimni miqdoriy `<= ALL` predikati orqali topish mumkin.",
    "taskUz": "Barcha xodimlardan oldinroq (yoki teng) ishga kirgan faxriy xodimning name (`ename`), job title (`job`) and ishga kirgan sanasini (`hiredate`) `<= ALL` via display.",
    "expectedSql": "SELECT ename, job, hiredate FROM emp WHERE hiredate <= ALL (SELECT hiredate FROM emp)",
    "hint": "`WHERE hiredate <= ALL (SELECT hiredate FROM emp)` .",
    "tags": [
      "ALL",
      "MIN_DATE",
      "SUBQUERY"
    ],
    "solutions": [
      "SELECT ename, job, hiredate FROM emp WHERE hiredate <= ALL (SELECT hiredate FROM emp)"
    ],
    "task": "Barcha xodimlardan oldinroq (yoki teng) ishga kirgan faxriy xodimning name (`ename`), job title (`job`) and ishga kirgan sanasini (`hiredate`) `<= ALL` via display.",
    "explanation": ""
  },
  {
    "id": 41,
    "sector": 3,
    "difficulty": "Floor 3 • Intermediate+",
    "source": "S06 Task 12h • 10-Bo'limdan Kam (< ALL)",
    "title": "10-Bo'limdagi Barcha Xodimlardan Kam Maosh (< ALL)",
    "story": "10-bo'limdagi har qanday xodim maoshidan past bo'lgan xodimlarni toping.",
    "taskUz": "10-bo'limdagi barcha xodimlardan kam maosh oladigan xodimlarning name (`ename`), job title (`job`) and salary (`sal`) display. Order results by maosh.",
    "expectedSql": "SELECT ename, job, sal FROM emp WHERE sal < ALL (SELECT sal FROM emp WHERE deptno = 10) ORDER BY sal",
    "hint": "`WHERE sal < ALL (SELECT sal FROM emp WHERE deptno = 10) ORDER BY sal` yozing.",
    "tags": [
      "ALL",
      "DEPT10",
      "SUBQUERY"
    ],
    "solutions": [
      "SELECT ename, job, sal FROM emp WHERE sal < ALL (SELECT sal FROM emp WHERE deptno = 10) ORDER BY sal"
    ],
    "task": "10-bo'limdagi barcha xodimlardan kam maosh oladigan xodimlarning name (`ename`), job title (`job`) and salary (`sal`) display. Order results by maosh.",
    "explanation": ""
  },
  {
    "id": 42,
    "sector": 3,
    "difficulty": "Floor 3 • Intermediate+",
    "source": "S06 Task 12i • Analitikdan Ko'p (> ANY)",
    "title": "Kamida Bitta ANALYST dan Ko'proq Maosh Oluvchilar (> ANY)",
    "story": "Analitiklar (ANALYST) maoshi yuqori hisoblanadi. Ularning kamida bittasidan ko'p maosh oluvchilarni toping.",
    "taskUz": "Kamida bitta ANALYST dan ko'proq maosh oladigan xodimlarning name (`ename`), job title (`job`) and salary (`sal`) display. Order results by maosh.",
    "expectedSql": "SELECT ename, job, sal FROM emp WHERE sal > ANY (SELECT sal FROM emp WHERE job = 'ANALYST') ORDER BY sal",
    "hint": "`WHERE sal > ANY (SELECT sal FROM emp WHERE job = 'ANALYST') ORDER BY sal` yozing.",
    "tags": [
      "ANY",
      "ANALYST",
      "SUBQUERY"
    ],
    "solutions": [
      "SELECT ename, job, sal FROM emp WHERE sal > ANY (SELECT sal FROM emp WHERE job = 'ANALYST') ORDER BY sal"
    ],
    "task": "Kamida bitta ANALYST dan ko'proq maosh oladigan xodimlarning name (`ename`), job title (`job`) and salary (`sal`) display. Order results by maosh.",
    "explanation": ""
  },
  {
    "id": 43,
    "sector": 3,
    "difficulty": "Floor 3 • Intermediate+",
    "source": "S06 Task 12j • Har Qanday Nomzoddan Keyin (> ANY)",
    "title": "Kamida Bitta Nomzod Arizasidan Keyin Ishga Kirganlar (> ANY)",
    "story": "Nomzodlar arizalarining har qanday sanasidan kechroq ishga kirgan xodimlarni aniqlang.",
    "taskUz": "Kamida bitta nomzod ariza topshirgan sanadan kechroq (`appdate`) ishga kirgan xodimlarning name (`ename`), job title (`job`) and ishga kirgan sanasini (`hiredate`) display. Order results by `hiredate`.",
    "expectedSql": "SELECT ename, job, hiredate FROM emp WHERE hiredate > ANY (SELECT appdate FROM applicant) ORDER BY hiredate",
    "hint": "`WHERE hiredate > ANY (SELECT appdate FROM applicant) ORDER BY hiredate` yozing.",
    "tags": [
      "ANY",
      "APPLICANT",
      "DATE"
    ],
    "solutions": [
      "SELECT ename, job, hiredate FROM emp WHERE hiredate > ANY (SELECT appdate FROM applicant) ORDER BY hiredate"
    ],
    "task": "Kamida bitta nomzod ariza topshirgan sanadan kechroq (`appdate`) ishga kirgan xodimlarning name (`ename`), job title (`job`) and ishga kirgan sanasini (`hiredate`) display. Order results by `hiredate`.",
    "explanation": ""
  },
  {
    "id": 44,
    "sector": 3,
    "difficulty": "Floor 3 • Intermediate+",
    "source": "S06 Task 12k • Barcha Nomzodlardan Keyin (> ALL)",
    "title": "Barcha Nomzodlarning Arizasidan Kechroq Ishga Kirganlar (> ALL)",
    "story": "Barcha nomzodlar ro'yxatidagi eng oxirgi ariza sanasidan ham keyin ishga qabul qilingan xodimlarni aniqlang.",
    "taskUz": "Barcha nomzodlarning arizasidan (`appdate`) kechroq ishga qabul qilingan xodimlarning name (`ename`), job title (`job`) and ishga kirgan sanasini (`hiredate`) display. Order results by `hiredate`.",
    "expectedSql": "SELECT ename, job, hiredate FROM emp WHERE hiredate > ALL (SELECT appdate FROM applicant) ORDER BY hiredate",
    "hint": "`WHERE hiredate > ALL (SELECT appdate FROM applicant) ORDER BY hiredate` .",
    "tags": [
      "ALL",
      "APPLICANT",
      "DATE"
    ],
    "solutions": [
      "SELECT ename, job, hiredate FROM emp WHERE hiredate > ALL (SELECT appdate FROM applicant) ORDER BY hiredate"
    ],
    "task": "Barcha nomzodlarning arizasidan (`appdate`) kechroq ishga qabul qilingan xodimlarning name (`ename`), job title (`job`) and ishga kirgan sanasini (`hiredate`) display. Order results by `hiredate`.",
    "explanation": ""
  },
  {
    "id": 45,
    "sector": 3,
    "difficulty": "Floor 3 • Intermediate+",
    "source": "S06 Task 12l • 3-Darajali Salgrade Chegarasidan Yuqori (> ALL)",
    "title": "3-Darajali Maoshning Barcha Chegaralaridan Baland (> ALL)",
    "story": "1, 2 va 3-darajali maoshlarning barcha yuqori chegaralaridan (`hisal`) baland haq oluvchilarni toping.",
    "taskUz": "1, 2 and 3-darajali maosh stavkalari yuqori chegaralaridan (`hisal WHERE grade <= 3`) baland maosh oladigan xodimlarning name (`ename`), job title (`job`) and salary (`sal`) display. Order results by maosh.",
    "expectedSql": "SELECT ename, job, sal FROM emp WHERE sal > ALL (SELECT hisal FROM salgrade WHERE grade <= 3) ORDER BY sal",
    "hint": "`WHERE sal > ALL (SELECT hisal FROM salgrade WHERE grade <= 3) ORDER BY sal` yozing.",
    "tags": [
      "ALL",
      "SALGRADE",
      "SUBQUERY"
    ],
    "solutions": [
      "SELECT ename, job, sal FROM emp WHERE sal > ALL (SELECT hisal FROM salgrade WHERE grade <= 3) ORDER BY sal"
    ],
    "task": "1, 2 and 3-darajali maosh stavkalari yuqori chegaralaridan (`hisal WHERE grade <= 3`) baland maosh oladigan xodimlarning name (`ename`), job title (`job`) and salary (`sal`) display. Order results by maosh.",
    "explanation": ""
  },
  {
    "id": 46,
    "sector": 4,
    "difficulty": "Floor 4 • Murakkab",
    "source": "S06 Task 13 • Rahbarlar (EXISTS)",
    "title": "Kamida Bitta Qo'l Ostidagi Xodimi Bor Rahbarlar (EXISTS)",
    "story": "Tashqi jadvaldagi `e.empno` ga bog'langan `EXISTS` subquerysi orqali kamida bitta bo'ysunuvchisi bor rahbarlarni aniqlang.",
    "taskUz": "`EXISTS` operatori using qo'l ostida kamida bitta xodimi bor rahbarlarning raqami (`empno`), name (`ename`) and lavozimini (`job`) display. Order results by `empno`.",
    "expectedSql": "SELECT e.empno, e.ename, e.job FROM emp e WHERE EXISTS (SELECT 1 FROM emp sub WHERE sub.mgr = e.empno) ORDER BY e.empno",
    "hint": "`WHERE EXISTS (SELECT 1 FROM emp sub WHERE sub.mgr = e.empno) ORDER BY e.empno` yozing.",
    "tags": [
      "EXISTS",
      "CORRELATED",
      "SUBQUERY"
    ],
    "solutions": [
      "SELECT e.empno, e.ename, e.job FROM emp e WHERE EXISTS (SELECT 1 FROM emp sub WHERE sub.mgr = e.empno) ORDER BY e.empno"
    ],
    "task": "`EXISTS` operatori using qo'l ostida kamida bitta xodimi bor rahbarlarning raqami (`empno`), name (`ename`) and lavozimini (`job`) display. Order results by `empno`.",
    "explanation": ""
  },
  {
    "id": 47,
    "sector": 4,
    "difficulty": "Floor 4 • Murakkab",
    "source": "S06 Task 14 • Bo'ysunuvchisiz Xodimlar (NOT EXISTS)",
    "title": "Hech Qanday Qo'l Ostidagi Xodimi Yo'q Xodimlar (NOT EXISTS)",
    "story": "`NOT EXISTS` tashqi xodimning raqami birorta ham xodimning `mgr` ustunida uchramasligini tekshiradi.",
    "taskUz": "`NOT EXISTS` using hech qanday bo'ysunuvchi xodimi bo'lmagan xodimlarning raqami (`empno`), name (`ename`) and lavozimini (`job`) display. Order results by `empno`.",
    "expectedSql": "SELECT e.empno, e.ename, e.job FROM emp e WHERE NOT EXISTS (SELECT 1 FROM emp sub WHERE sub.mgr = e.empno) ORDER BY e.empno",
    "hint": "`WHERE NOT EXISTS (SELECT 1 FROM emp sub WHERE sub.mgr = e.empno) ORDER BY e.empno` yozing.",
    "tags": [
      "NOT EXISTS",
      "CORRELATED",
      "SUBQUERY"
    ],
    "solutions": [
      "SELECT e.empno, e.ename, e.job FROM emp e WHERE NOT EXISTS (SELECT 1 FROM emp sub WHERE sub.mgr = e.empno) ORDER BY e.empno"
    ],
    "task": "`NOT EXISTS` using hech qanday bo'ysunuvchi xodimi bo'lmagan xodimlarning raqami (`empno`), name (`ename`) and lavozimini (`job`) display. Order results by `empno`.",
    "explanation": ""
  },
  {
    "id": 48,
    "sector": 4,
    "difficulty": "Floor 4 • Murakkab",
    "source": "S06 Task 15 • Xodimli Bo'limlar (EXISTS)",
    "title": "Kamida Bitta Xodimi Mavjud Bo'limlar (EXISTS)",
    "story": "`dept` jadvali bo'yicha har bir bo'limda xodim bor-yo'qligini `EXISTS` orqali tekshiring.",
    "taskUz": "`EXISTS` operatoridan foydalanib, kamida bitta xodimi bor bo'limlarning raqami (`deptno`) and nomini (`dname`) display. Order results by `deptno`.",
    "expectedSql": "SELECT d.deptno, d.dname FROM dept d WHERE EXISTS (SELECT 1 FROM emp e WHERE e.deptno = d.deptno) ORDER BY d.deptno",
    "hint": "`WHERE EXISTS (SELECT 1 FROM emp e WHERE e.deptno = d.deptno) ORDER BY d.deptno` yozing.",
    "tags": [
      "EXISTS",
      "DEPT",
      "CORRELATED"
    ],
    "solutions": [
      "SELECT d.deptno, d.dname FROM dept d WHERE EXISTS (SELECT 1 FROM emp e WHERE e.deptno = d.deptno) ORDER BY d.deptno"
    ],
    "task": "`EXISTS` operatoridan foydalanib, kamida bitta xodimi bor bo'limlarning raqami (`deptno`) and nomini (`dname`) display. Order results by `deptno`.",
    "explanation": ""
  },
  {
    "id": 49,
    "sector": 4,
    "difficulty": "Floor 4 • Murakkab",
    "source": "S06 Task 15b • Bo'sh Bo'limlar (NOT EXISTS)",
    "title": "Birorta Ham Xodimi Mavjud Bo'lmagan Bo'limlar (NOT EXISTS)",
    "story": "`dept` jadvalidan `NOT EXISTS` orqali hech qanday xodim biriktirilmagan bo'limni aniqlang.",
    "taskUz": "`NOT EXISTS` using birorta ham xodimi ishlamaydigan bo'limlarning raqami (`deptno`), nomi (`dname`) and joylashuvini (`loc`) display. Order results by `deptno`.",
    "expectedSql": "SELECT d.deptno, d.dname, d.loc FROM dept d WHERE NOT EXISTS (SELECT 1 FROM emp e WHERE e.deptno = d.deptno) ORDER BY d.deptno",
    "hint": "`WHERE NOT EXISTS (SELECT 1 FROM emp e WHERE e.deptno = d.deptno) ORDER BY d.deptno` yozing.",
    "tags": [
      "NOT EXISTS",
      "EMPTY DEPT",
      "CORRELATED"
    ],
    "solutions": [
      "SELECT d.deptno, d.dname, d.loc FROM dept d WHERE NOT EXISTS (SELECT 1 FROM emp e WHERE e.deptno = d.deptno) ORDER BY d.deptno"
    ],
    "task": "`NOT EXISTS` using birorta ham xodimi ishlamaydigan bo'limlarning raqami (`deptno`), nomi (`dname`) and joylashuvini (`loc`) display. Order results by `deptno`.",
    "explanation": ""
  },
  {
    "id": 50,
    "sector": 4,
    "difficulty": "Floor 4 • Murakkab",
    "source": "S06 Task 15c • O'z Bo'limi O'rtachasidan Ko'p",
    "title": "O'z Bo'limining O'rtacha Maoshidan Ko'proq Oluvchilar",
    "story": "Har bir xodimning maoshini aynan o'zi ishlayotgan bo'limning o'rtacha maoshi bilan korrelyatsion tarzda solishtiring.",
    "taskUz": "O'z bo'limining o'rtacha maoshidan ko'proq maosh oladigan xodimlarning name (`ename`), job title (`job`), maoshi (`sal`) and bo'lim raqamini (`deptno`) display. Order results by `deptno` and maosh kamayishi.",
    "expectedSql": "SELECT e.ename, e.job, e.sal, e.deptno FROM emp e WHERE e.sal > (SELECT AVG(sub.sal) FROM emp sub WHERE sub.deptno = e.deptno) ORDER BY e.deptno, e.sal DESC",
    "hint": "`WHERE e.sal > (SELECT AVG(sub.sal) FROM emp sub WHERE sub.deptno = e.deptno) ORDER BY e.deptno, e.sal DESC` yozing.",
    "tags": [
      "CORRELATED",
      "AVG",
      "DEPT"
    ],
    "solutions": [
      "SELECT e.ename, e.job, e.sal, e.deptno FROM emp e WHERE e.sal > (SELECT AVG(sub.sal) FROM emp sub WHERE sub.deptno = e.deptno) ORDER BY e.deptno, e.sal DESC"
    ],
    "task": "O'z bo'limining o'rtacha maoshidan ko'proq maosh oladigan xodimlarning name (`ename`), job title (`job`), maoshi (`sal`) and bo'lim raqamini (`deptno`) display. Order results by `deptno` and maosh kamayishi.",
    "explanation": ""
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = window.QUESTIONS_1_50;
}
