// ============================================================================
// DATABASE SYSTEMS ACADEMY — WEEK 5: JOINS, AGGREGATION & STORAGE
// Variable: QUESTIONS_1_50 (50 Questions)
// ============================================================================

window.QUESTIONS_1_50 = [
  {
    "id": 1,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "S05 Task 1 • ANSI JOIN ... ON",
    "title": "Dallas Bo'limidagi Xodimlar",
    "story": "Dallas shahridagi tadqiqot bo'limiga yangi loyihalar topshirilmoqda. Rahbariyat ushbu filialda kimlar ishlayotgani va ularning maoshini bilishni istaydi.",
    "taskUz": "Dallas working in departments located in employee name (`ename`), salary (`sal`) and department name (`dname`) display.",
    "expectedSql": "SELECT e.ename, e.sal, d.dname FROM emp e JOIN dept d ON e.deptno = d.deptno WHERE d.loc = 'DALLAS'",
    "hint": "`emp` va `dept` jadvallarini `deptno` kaliti orqali `JOIN ... ON` bilan bog'lang va `loc = 'DALLAS'` shartini qo'ying.",
    "tags": [
      "INNER JOIN",
      "WHERE",
      "ANSI SQL"
    ],
    "solutions": [
      "SELECT e.ename, e.sal, d.dname FROM emp e JOIN dept d ON e.deptno = d.deptno WHERE d.loc = 'DALLAS'"
    ],
    "task": "Dallas working in departments located in employee name (`ename`), salary (`sal`) and department name (`dname`) display.",
    "explanation": ""
  },
  {
    "id": 2,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "S05 Task 2 • Bo'lim va Xodim Saralash",
    "title": "Xodimlar va Bo'lim Nomi",
    "story": "Korporativ HR portali uchun har bir xodim qaysi bo'limda xizmat qilayotganini ko'rsatuvchi tartiblangan hisobot kerak.",
    "taskUz": "All employee name (`ename`) and department name (`dname`) display. Natijani avandl bo'lim nomi (`dname`), so'ng xodim ismi (`ename`) bo'yicha order by.",
    "expectedSql": "SELECT e.ename, d.dname FROM emp e JOIN dept d ON e.deptno = d.deptno ORDER BY d.dname, e.ename",
    "hint": "`ORDER BY d.dname, e.ename` yordamida ikki darajali alifbo tartibida saralang.",
    "tags": [
      "INNER JOIN",
      "ORDER BY"
    ],
    "solutions": [
      "SELECT e.ename, d.dname FROM emp e JOIN dept d ON e.deptno = d.deptno ORDER BY d.dname, e.ename"
    ],
    "task": "All employee name (`ename`) and department name (`dname`) display. Natijani avandl bo'lim nomi (`dname`), so'ng xodim ismi (`ename`) bo'yicha order by.",
    "explanation": ""
  },
  {
    "id": 3,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "S05 Task 2b • JOIN ... USING",
    "title": "USING Sintaksisi Bilan Bog'lash",
    "story": "SQL standartida ikkala jadvalda bir xil nomlangan ustun bo'lsa, `ON e.deptno = d.deptno` o'rniga qisqaroq `USING` qo'llanilishi mumkin.",
    "taskUz": "`JOIN dept USING (deptno)` sintaksisidan foydalanib, xodim ismi (`ename`) and uning department name (`dname`) display.",
    "expectedSql": "SELECT e.ename, d.dname FROM emp e JOIN dept d USING (deptno)",
    "hint": "`ON e.deptno = d.deptno` o'rniga qavs ichida `USING (deptno)` .",
    "tags": [
      "JOIN USING",
      "ANSI SQL"
    ],
    "solutions": [
      "SELECT e.ename, d.dname FROM emp e JOIN dept d USING (deptno)"
    ],
    "task": "`JOIN dept USING (deptno)` sintaksisidan foydalanib, xodim ismi (`ename`) and uning department name (`dname`) display.",
    "explanation": ""
  },
  {
    "id": 4,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "S05 Task 1 • Kasb va Filial",
    "title": "Chikago Sotuvchilari",
    "story": "Chikago filialida maxsus savdo kampaniyasi o'tkazilmoqda. Boshqaruv faqat ushbu shahardagi sotuvchilar ro'yxatini talab qildi.",
    "taskUz": "Chikagoda ishlaydigan and lavozimi 'SALESMAN' bo'lgan employee name (`ename`), salary (`sal`) and shahrini (`loc`) display.",
    "expectedSql": "SELECT e.ename, e.sal, d.loc FROM emp e JOIN dept d ON e.deptno = d.deptno WHERE d.loc = 'CHICAGO' AND e.job = 'SALESMAN'",
    "hint": "`WHERE d.loc = 'CHICAGO' AND e.job = 'SALESMAN'` mantiqiy shartini qo'llang.",
    "tags": [
      "INNER JOIN",
      "AND filter"
    ],
    "solutions": [
      "SELECT e.ename, e.sal, d.loc FROM emp e JOIN dept d ON e.deptno = d.deptno WHERE d.loc = 'CHICAGO' AND e.job = 'SALESMAN'"
    ],
    "task": "Chikagoda ishlaydigan and lavozimi 'SALESMAN' bo'lgan employee name (`ename`), salary (`sal`) and shahrini (`loc`) display.",
    "explanation": ""
  },
  {
    "id": 5,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "S05 Task 1 • Shaharlar Filtrlash",
    "title": "Nyu-York Boshqaruvchilari",
    "story": "Nyu-York bosh ofisidagi boshqaruv kengashi (MANAGER) xodimlarining ro'yxati moliyaviy audit uchun taqdim etilishi kerak.",
    "taskUz": "Nyu-Yorkda (`NEW YORK`) ishlaydigan All menejerlarning (`job = 'MANAGER'`) ismi (`ename`), lavozimi (`job`) and shahrini (`loc`) display.",
    "expectedSql": "SELECT e.ename, e.job, d.loc FROM emp e JOIN dept d ON e.deptno = d.deptno WHERE d.loc = 'NEW YORK' AND e.job = 'MANAGER'",
    "hint": "`loc = 'NEW YORK'` va `job = 'MANAGER'` tengliklarini tekshiring.",
    "tags": [
      "INNER JOIN",
      "WHERE"
    ],
    "solutions": [
      "SELECT e.ename, e.job, d.loc FROM emp e JOIN dept d ON e.deptno = d.deptno WHERE d.loc = 'NEW YORK' AND e.job = 'MANAGER'"
    ],
    "task": "Nyu-Yorkda (`NEW YORK`) ishlaydigan All menejerlarning (`job = 'MANAGER'`) ismi (`ename`), lavozimi (`job`) and shahrini (`loc`) display.",
    "explanation": ""
  },
  {
    "id": 6,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "S05 Task 1 • Eski Sintaksis Vergul Bilan",
    "title": "Tarixiy Ulam Sintaksisi (FROM emp, dept)",
    "story": "Eski SQL kodlarida ANSI `JOIN` kalit so'zi o'rniga jadvallar vergul bilan ajratilib, ulam sharti `WHERE` ga yozilgan.",
    "taskUz": "Vergul sintaksisi (`FROM emp e, dept d`) and `WHERE e.deptno = d.deptno` via xodim ismi (`ename`) and department name (`dname`) display.",
    "expectedSql": "SELECT e.ename, d.dname FROM emp e, dept d WHERE e.deptno = d.deptno",
    "hint": "`FROM emp e, dept d WHERE e.deptno = d.deptno` shaklida yozing.",
    "tags": [
      "Comma Join",
      "Theta Join"
    ],
    "solutions": [
      "SELECT e.ename, d.dname FROM emp e, dept d WHERE e.deptno = d.deptno"
    ],
    "task": "Vergul sintaksisi (`FROM emp e, dept d`) and `WHERE e.deptno = d.deptno` via xodim ismi (`ename`) and department name (`dname`) display.",
    "explanation": ""
  },
  {
    "id": 7,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "S05 Task 1 • Maosh Filtrlash",
    "title": "Yuqori Maoshli Dallas Xodimlari",
    "story": "Dallas filialidagi ilmiy xodimlardan maoshi $2,500 dan yuqori bo'lgan yuqori malakali mutaxassislar ro'yxatini shakllantiring.",
    "taskUz": "Dallasda ishlaydigan and salary 2500 dan katta bo'lgan employee name (`ename`), lavozimi (`job`) and salaryni (`sal`) display.",
    "expectedSql": "SELECT e.ename, e.job, e.sal FROM emp e JOIN dept d ON e.deptno = d.deptno WHERE d.loc = 'DALLAS' AND e.sal > 2500",
    "hint": "`d.loc = 'DALLAS' AND e.sal > 2500` shartini bering.",
    "tags": [
      "INNER JOIN",
      "Numeric filter"
    ],
    "solutions": [
      "SELECT e.ename, e.job, e.sal FROM emp e JOIN dept d ON e.deptno = d.deptno WHERE d.loc = 'DALLAS' AND e.sal > 2500"
    ],
    "task": "Dallasda ishlaydigan and salary 2500 dan katta bo'lgan employee name (`ename`), lavozimi (`job`) and salaryni (`sal`) display.",
    "explanation": ""
  },
  {
    "id": 8,
    "sector": 1,
    "difficulty": "Floor 1 • Intermediate",
    "source": "L05 Engineering Projects • 2-Jadval",
    "title": "Korporativ Loyihalar va Bo'limlar",
    "story": "Kompaniya qoshidagi muhandislik loyihalari (`project`) qaysi bo'limlar homiyligida olib borilayotganini tahlil qilish lozim.",
    "taskUz": "Har bir loyiha nomi (`pname`), uning byudjeti (`budget`) and unga mas'ul department name (`dname`) display.",
    "expectedSql": "SELECT p.pname, p.budget, d.dname FROM project p JOIN dept d ON p.deptno = d.deptno",
    "hint": "`project p JOIN dept d ON p.deptno = d.deptno` orqali bog'lang.",
    "tags": [
      "project",
      "dept",
      "INNER JOIN"
    ],
    "solutions": [
      "SELECT p.pname, p.budget, d.dname FROM project p JOIN dept d ON p.deptno = d.deptno"
    ],
    "task": "Har bir loyiha nomi (`pname`), uning byudjeti (`budget`) and unga mas'ul department name (`dname`) display.",
    "explanation": ""
  },
  {
    "id": 9,
    "sector": 1,
    "difficulty": "Floor 1 • Intermediate",
    "source": "L05 Engineering Projects • Shahar Mosligi",
    "title": "Tashkent va Nyu-York Loyihalari",
    "story": "Xalqaro IT xablar doirasida Toshkent yoki Nyu-York shahrida amalga oshirilayotgan yirik tizim loyihalarini ajratib ko'rsating.",
    "taskUz": "Shahri 'TASHKENT' yoki 'NEW YORK' bo'lgan loyihalarning nomi (`pname`), shahri (`ploc`) and byudjetini (`budget`) bo'lim nomi (`dname`) bilan birga display.",
    "expectedSql": "SELECT p.pname, p.ploc, p.budget, d.dname FROM project p JOIN dept d ON p.deptno = d.deptno WHERE p.ploc IN ('TASHKENT', 'NEW YORK')",
    "hint": "`WHERE p.ploc IN ('TASHKENT', 'NEW YORK')` shartidan foydalaning.",
    "tags": [
      "project",
      "IN filter"
    ],
    "solutions": [
      "SELECT p.pname, p.ploc, p.budget, d.dname FROM project p JOIN dept d ON p.deptno = d.deptno WHERE p.ploc IN ('TASHKENT', 'NEW YORK')"
    ],
    "task": "Shahri 'TASHKENT' yoki 'NEW YORK' bo'lgan loyihalarning nomi (`pname`), shahri (`ploc`) and byudjetini (`budget`) bo'lim nomi (`dname`) bilan birga display.",
    "explanation": ""
  },
  {
    "id": 10,
    "sector": 1,
    "difficulty": "Floor 1 • Intermediate",
    "source": "Chinook DB Intro • Tracks & Genres",
    "title": "Chinook: Treklar va Janr Nomi",
    "story": "Chinook raqamli media do'konida har bir musiqa treki qaysi musiqa janriga mansubligini aniqlash zarur.",
    "taskUz": "Trek nomi (`name`) and tegishli janr nomini (`name` o'rniga `g.name`) `track` and `genre` jadandllarini joining display.",
    "expectedSql": "SELECT t.name, g.name AS genre_name FROM track t JOIN genre g ON t.genre_id = g.genre_id",
    "hint": "`track t JOIN genre g ON t.genre_id = g.genre_id` orqali bog'lang.",
    "tags": [
      "Chinook",
      "track",
      "genre"
    ],
    "solutions": [
      "SELECT t.name, g.name AS genre_name FROM track t JOIN genre g ON t.genre_id = g.genre_id"
    ],
    "task": "Trek nomi (`name`) and tegishli janr nomini (`name` o'rniga `g.name`) `track` and `genre` jadandllarini joining display.",
    "explanation": ""
  },
  {
    "id": 11,
    "sector": 1,
    "difficulty": "Floor 1 • Intermediate",
    "source": "Chinook DB • Albums & Artists",
    "title": "Chinook: Albomlar va Ijrochilar",
    "story": "Foydalanuvchilar qidiruv tizimida albom nomi bilan birga uni ijro etgan guruh yoki musiqachi nomini ko'rishlari kerak.",
    "taskUz": "Albom sarlavhasi (`title`) and ijrochi nomini (`name`) `album` and `artist` jadandllarini `artist_id` via joining display.",
    "expectedSql": "SELECT al.title, ar.name FROM album al JOIN artist ar ON al.artist_id = ar.artist_id",
    "hint": "`album al JOIN artist ar ON al.artist_id = ar.artist_id` orqali ulam yarating.",
    "tags": [
      "Chinook",
      "album",
      "artist"
    ],
    "solutions": [
      "SELECT al.title, ar.name FROM album al JOIN artist ar ON al.artist_id = ar.artist_id"
    ],
    "task": "Albom sarlavhasi (`title`) and ijrochi nomini (`name`) `album` and `artist` jadandllarini `artist_id` via joining display.",
    "explanation": ""
  },
  {
    "id": 12,
    "sector": 1,
    "difficulty": "Floor 1 • Intermediate",
    "source": "Chinook DB • Invoices & Customers",
    "title": "Chinook: Invoyslar va Xaridorlar",
    "story": "Buxgalteriya har bir to'lov kvitansiyasi (invoys) qaysi xaridorga tegishli ekanligini qayd etib bormoqda.",
    "taskUz": "Invoys raqami (`invoice_id`), to'lov sanasi (`invoice_date`), jami summa (`total`) and xaridorning familiyasini (`last_name`) display.",
    "expectedSql": "SELECT i.invoice_id, i.invoice_date, i.total, c.last_name FROM invoice i JOIN customer c ON i.customer_id = c.customer_id",
    "hint": "`invoice i JOIN customer c ON i.customer_id = c.customer_id` ulamini qo'llang.",
    "tags": [
      "Chinook",
      "invoice",
      "customer"
    ],
    "solutions": [
      "SELECT i.invoice_id, i.invoice_date, i.total, c.last_name FROM invoice i JOIN customer c ON i.customer_id = c.customer_id"
    ],
    "task": "Invoys raqami (`invoice_id`), to'lov sanasi (`invoice_date`), jami summa (`total`) and xaridorning familiyasini (`last_name`) display.",
    "explanation": ""
  },
  {
    "id": 13,
    "sector": 1,
    "difficulty": "Floor 1 • Intermediate",
    "source": "Chinook DB • Germany Invoices",
    "title": "Germaniyalik Xaridorlar Invoyslari",
    "story": "Yevropa filiali faqat Germaniyada ro'yxatdan o'tgan buyurtmachilarning invoyslarini tekshirmoqchi.",
    "taskUz": "Invoys mamlakati 'Germany' bo'lgan xaridorlarning ismi (`first_name`), familiyasi (`last_name`) and invoys summasini (`total`) display.",
    "expectedSql": "SELECT c.first_name, c.last_name, i.total FROM invoice i JOIN customer c ON i.customer_id = c.customer_id WHERE i.billing_country = 'Germany'",
    "hint": "`WHERE i.billing_country = 'Germany'` shartini qo'ying.",
    "tags": [
      "Chinook",
      "billing_country"
    ],
    "solutions": [
      "SELECT c.first_name, c.last_name, i.total FROM invoice i JOIN customer c ON i.customer_id = c.customer_id WHERE i.billing_country = 'Germany'"
    ],
    "task": "Invoys mamlakati 'Germany' bo'lgan xaridorlarning ismi (`first_name`), familiyasi (`last_name`) and invoys summasini (`total`) display.",
    "explanation": ""
  },
  {
    "id": 14,
    "sector": 1,
    "difficulty": "Floor 1 • Intermediate",
    "source": "S05 Task 2 • Bo'lim Xodimlari Saralash",
    "title": "Xodimlar va Ishga Kirgan Sanasi",
    "story": "Korporatsiya stajini hisoblash uchun xodimlarning bo'limi va ish boshlagan sanasi (`hiredate`) taqqoslanmoqda.",
    "taskUz": "Bo'lim nomi (`dname`), xodim ismi (`ename`) and ishga qabul qilingan sanasini (`hiredate`) display. Natijani ishga kirgan sanasi bo'yicha order by.",
    "expectedSql": "SELECT d.dname, e.ename, e.hiredate FROM emp e JOIN dept d ON e.deptno = d.deptno ORDER BY e.hiredate",
    "hint": "`ORDER BY e.hiredate` orqali o'sish tartibida saralang.",
    "tags": [
      "INNER JOIN",
      "hiredate"
    ],
    "solutions": [
      "SELECT d.dname, e.ename, e.hiredate FROM emp e JOIN dept d ON e.deptno = d.deptno ORDER BY e.hiredate"
    ],
    "task": "Bo'lim nomi (`dname`), xodim ismi (`ename`) and ishga qabul qilingan sanasini (`hiredate`) display. Natijani ishga kirgan sanasi bo'yicha order by.",
    "explanation": ""
  },
  {
    "id": 15,
    "sector": 1,
    "difficulty": "Floor 1 • Sarhisob",
    "source": "S05 Task 1–2 Sarhisob",
    "title": "1-Qavat Bosh Imtihoni: Katta ANSI Ulam",
    "story": "1-qavat portali ochilishi uchun Nyu-York va Dallasdagi menejer hamda tahlilchilarni aniq hisoblab bering.",
    "taskUz": "Shahri 'NEW YORK' yoki 'DALLAS' bo'lgan, lavozimi 'MANAGER' yoki 'ANALYST' bo'lgan employee name (`ename`), lavozimi (`job`), salary (`sal`) and shahrini (`loc`) display. Natijani maosh bo'yicha kamayish tartibida order by.",
    "expectedSql": "SELECT e.ename, e.job, e.sal, d.loc FROM emp e JOIN dept d ON e.deptno = d.deptno WHERE d.loc IN ('NEW YORK', 'DALLAS') AND e.job IN ('MANAGER', 'ANALYST') ORDER BY e.sal DESC",
    "hint": "`WHERE d.loc IN ('NEW YORK', 'DALLAS') AND e.job IN ('MANAGER', 'ANALYST') ORDER BY e.sal DESC` shartini qo'ying.",
    "tags": [
      "Floor 1 Boss",
      "INNER JOIN",
      "IN",
      "ORDER BY DESC"
    ],
    "solutions": [
      "SELECT e.ename, e.job, e.sal, d.loc FROM emp e JOIN dept d ON e.deptno = d.deptno WHERE d.loc IN ('NEW YORK', 'DALLAS') AND e.job IN ('MANAGER', 'ANALYST') ORDER BY e.sal DESC"
    ],
    "task": "Shahri 'NEW YORK' yoki 'DALLAS' bo'lgan, lavozimi 'MANAGER' yoki 'ANALYST' bo'lgan employee name (`ename`), lavozimi (`job`), salary (`sal`) and shahrini (`loc`) display. Natijani maosh bo'yicha kamayish tartibida order by.",
    "explanation": ""
  },
  {
    "id": 16,
    "sector": 2,
    "difficulty": "Floor 2 • Easy",
    "source": "S05 Task 5 • Non-Equi Join (BETWEEN)",
    "title": "Xodimlar Maosh Razryadi (salgrade)",
    "story": "Kompaniyada xodimlarning maoshi ma'lum bir razryad oralig'iga tushadi. Bu yerda tenglik emas, oraliq tekshiriladi.",
    "taskUz": "Har bir xodimning ismi (`ename`), salary (`sal`) and qaysi maosh razryadida (`grade`) ekanligini `salgrade` bilan joining display.",
    "expectedSql": "SELECT e.ename, e.sal, s.grade FROM emp e JOIN salgrade s ON e.sal BETWEEN s.losal AND s.hisal",
    "hint": "`JOIN salgrade s ON e.sal BETWEEN s.losal AND s.hisal` - Non-equi join sintaksisidan foydalaning.",
    "tags": [
      "Non-Equi Join",
      "BETWEEN",
      "salgrade"
    ],
    "solutions": [
      "SELECT e.ename, e.sal, s.grade FROM emp e JOIN salgrade s ON e.sal BETWEEN s.losal AND s.hisal"
    ],
    "task": "Har bir xodimning ismi (`ename`), salary (`sal`) and qaysi maosh razryadida (`grade`) ekanligini `salgrade` bilan joining display.",
    "explanation": ""
  },
  {
    "id": 17,
    "sector": 2,
    "difficulty": "Floor 2 • Easy",
    "source": "S05 Task 5 • Razryad Chegaralari",
    "title": "Razryad Chegaralari Bilan To'liq Hisobot",
    "story": "HR taftish komissiyasi har bir xodim maoshi bilan birga uning razryadining eng quyi (`losal`) va eng yuqori (`hisal`) chegaralarini talab qildi.",
    "taskUz": "Xodim ismi (`ename`), salary (`sal`), razryadi (`grade`), `losal` and `hisal` qiymatlarini display. Natijani razryad (`grade`), so'ng maosh (`sal`) bo'yicha order by.",
    "expectedSql": "SELECT e.ename, e.sal, s.grade, s.losal, s.hisal FROM emp e JOIN salgrade s ON e.sal BETWEEN s.losal AND s.hisal ORDER BY s.grade, e.sal",
    "hint": "`ORDER BY s.grade, e.sal` orqali tartiblang.",
    "tags": [
      "salgrade",
      "losal",
      "hisal"
    ],
    "solutions": [
      "SELECT e.ename, e.sal, s.grade, s.losal, s.hisal FROM emp e JOIN salgrade s ON e.sal BETWEEN s.losal AND s.hisal ORDER BY s.grade, e.sal"
    ],
    "task": "Xodim ismi (`ename`), salary (`sal`), razryadi (`grade`), `losal` and `hisal` qiymatlarini display. Natijani razryad (`grade`), so'ng maosh (`sal`) bo'yicha order by.",
    "explanation": ""
  },
  {
    "id": 18,
    "sector": 2,
    "difficulty": "Floor 2 • Easy",
    "source": "S05 Task 5 • Yuqori Razryad Filtr",
    "title": "4-Razryaddagi Katta Mutaxassislar",
    "story": "Kompaniyaning 4-razryadida ($2001 - $3000) faoliyat yurituvchi yetakchi mutaxassislarni aniqlang.",
    "taskUz": "Maosh razryadi 4 ga teng bo'lgan employee name (`ename`), lavozimi (`job`) and salaryni (`sal`) display.",
    "expectedSql": "SELECT e.ename, e.job, e.sal FROM emp e JOIN salgrade s ON e.sal BETWEEN s.losal AND s.hisal WHERE s.grade = 4",
    "hint": "`WHERE s.grade = 4` shartini qo'shing.",
    "tags": [
      "salgrade",
      "grade = 4"
    ],
    "solutions": [
      "SELECT e.ename, e.job, e.sal FROM emp e JOIN salgrade s ON e.sal BETWEEN s.losal AND s.hisal WHERE s.grade = 4"
    ],
    "task": "Maosh razryadi 4 ga teng bo'lgan employee name (`ename`), lavozimi (`job`) and salaryni (`sal`) display.",
    "explanation": ""
  },
  {
    "id": 19,
    "sector": 2,
    "difficulty": "Floor 2 • Intermediate",
    "source": "S05 Task 7 • 3-Jadval Birikmasi",
    "title": "Xodim, Bo'lim va Maosh Razryadi",
    "story": "3 ta asosiy korporativ jadvalni birlashtirish: xodim kim, qaysi bo'limda ishlaydi va qaysi razryad toifasiga kiradi?",
    "taskUz": "Xodim ismi (`ename`), bo'lim nomi (`dname`) and maosh razryadini (`grade`) `emp`, `dept` and `salgrade` jadandllarini birga joining display.",
    "expectedSql": "SELECT e.ename, d.dname, s.grade FROM emp e JOIN dept d ON e.deptno = d.deptno JOIN salgrade s ON e.sal BETWEEN s.losal AND s.hisal",
    "hint": "Ketma-ket ikkita `JOIN` yozing: biri `dept d ON ...`, ikkinchisi `salgrade s ON ...`.",
    "tags": [
      "3-Table Join",
      "emp",
      "dept",
      "salgrade"
    ],
    "solutions": [
      "SELECT e.ename, d.dname, s.grade FROM emp e JOIN dept d ON e.deptno = d.deptno JOIN salgrade s ON e.sal BETWEEN s.losal AND s.hisal"
    ],
    "task": "Xodim ismi (`ename`), bo'lim nomi (`dname`) and maosh razryadini (`grade`) `emp`, `dept` and `salgrade` jadandllarini birga joining display.",
    "explanation": ""
  },
  {
    "id": 20,
    "sector": 2,
    "difficulty": "Floor 2 • Intermediate",
    "source": "L05 Engineering • 3-Table Join",
    "title": "Xodim, Loyiha va Ishlagan Soatlari",
    "story": "Muhandislik hisobotida kim qaysi loyihada necha soat xizmat qilgani aks etishi kerak.",
    "taskUz": "Xodim ismi (`ename`), loyiha nomi (`pname`) and ishlangan soatlar sonini (`hours`) `emp`, `works_on` and `project` jadandllarini joining display.",
    "expectedSql": "SELECT e.ename, p.pname, w.hours FROM emp e JOIN works_on w ON e.empno = w.empno JOIN project p ON w.pno = p.pno",
    "hint": "`emp` -> `works_on` (empno orqali) -> `project` (pno orqali) zanjirini bog'lang.",
    "tags": [
      "works_on",
      "project",
      "3-Table Join"
    ],
    "solutions": [
      "SELECT e.ename, p.pname, w.hours FROM emp e JOIN works_on w ON e.empno = w.empno JOIN project p ON w.pno = p.pno"
    ],
    "task": "Xodim ismi (`ename`), loyiha nomi (`pname`) and ishlangan soatlar sonini (`hours`) `emp`, `works_on` and `project` jadandllarini joining display.",
    "explanation": ""
  },
  {
    "id": 21,
    "sector": 2,
    "difficulty": "Floor 2 • Intermediate",
    "source": "Chinook DB H1 • Track, Album & Artist",
    "title": "Chinook: Trek, Albom va Ijrochi",
    "story": "Musiqa trekining qaysi albomga va qaysi san'atkorga tegishli ekanligini 3 ta jadval ulamidan toping.",
    "taskUz": "Trek nomi (`name`), albom sarlavhasi (`title`) and ijrochi nomini (`ar.name`) `track`, `album` and `artist` jadandllarini joining display.",
    "expectedSql": "SELECT t.name, al.title, ar.name AS artist_name FROM track t JOIN album al ON t.album_id = al.album_id JOIN artist ar ON al.artist_id = ar.artist_id",
    "hint": "`track t JOIN album al ON t.album_id = al.album_id JOIN artist ar ON al.artist_id = ar.artist_id` bog'lamasini tuzing.",
    "tags": [
      "Chinook",
      "track",
      "album",
      "artist"
    ],
    "solutions": [
      "SELECT t.name, al.title, ar.name AS artist_name FROM track t JOIN album al ON t.album_id = al.album_id JOIN artist ar ON al.artist_id = ar.artist_id"
    ],
    "task": "Trek nomi (`name`), albom sarlavhasi (`title`) and ijrochi nomini (`ar.name`) `track`, `album` and `artist` jadandllarini joining display.",
    "explanation": ""
  },
  {
    "id": 22,
    "sector": 2,
    "difficulty": "Floor 2 • Intermediate",
    "source": "Chinook DB H1 • AC/DC Treklari",
    "title": "Chinook: 'AC/DC' Guruhining Barcha Treklari",
    "story": "Afsonaviy 'AC/DC' rok guruhining barcha musiqiy kompozitsiyalarini katalogdan saralab oling.",
    "taskUz": "'AC/DC' ijrochisining All treklari uchun albom nomi (`title`) and trek nomini (`name`) display. Natijani albom sarlavhasi, so'ng trek nomi bo'yicha order by.",
    "expectedSql": "SELECT al.title, t.name FROM track t JOIN album al ON t.album_id = al.album_id JOIN artist ar ON al.artist_id = ar.artist_id WHERE ar.name = 'AC/DC' ORDER BY al.title, t.name",
    "hint": "`WHERE ar.name = 'AC/DC'` shartini qo'ying.",
    "tags": [
      "Chinook H1",
      "AC/DC"
    ],
    "solutions": [
      "SELECT al.title, t.name FROM track t JOIN album al ON t.album_id = al.album_id JOIN artist ar ON al.artist_id = ar.artist_id WHERE ar.name = 'AC/DC' ORDER BY al.title, t.name"
    ],
    "task": "'AC/DC' ijrochisining All treklari uchun albom nomi (`title`) and trek nomini (`name`) display. Natijani albom sarlavhasi, so'ng trek nomi bo'yicha order by.",
    "explanation": ""
  },
  {
    "id": 23,
    "sector": 2,
    "difficulty": "Floor 2 • Intermediate",
    "source": "Chinook DB • Trek, Janr va Narx",
    "title": "Chinook: 300 Sekunddan Uzun Rok Treklar",
    "story": "Davomiyligi 5 daqiqadan (300,000 millisekund) oshadigan Rok janridagi treklar audiofayllar ro'yxatini shakllantiring.",
    "taskUz": "Janri 'Rock' bo'lgan and davomiyligi 300,000 millisekunddan katta bo'lgan treklarning nomi (`name`), albom sarlavhasi (`title`) and millisekundlarini (`milliseconds`) display.",
    "expectedSql": "SELECT t.name, al.title, t.milliseconds FROM track t JOIN album al ON t.album_id = al.album_id JOIN genre g ON t.genre_id = g.genre_id WHERE g.name = 'Rock' AND t.milliseconds > 300000",
    "hint": "`WHERE g.name = 'Rock' AND t.milliseconds > 300000` shartini bering.",
    "tags": [
      "Chinook",
      "genre",
      "milliseconds"
    ],
    "solutions": [
      "SELECT t.name, al.title, t.milliseconds FROM track t JOIN album al ON t.album_id = al.album_id JOIN genre g ON t.genre_id = g.genre_id WHERE g.name = 'Rock' AND t.milliseconds > 300000"
    ],
    "task": "Janri 'Rock' bo'lgan and davomiyligi 300,000 millisekunddan katta bo'lgan treklarning nomi (`name`), albom sarlavhasi (`title`) and millisekundlarini (`milliseconds`) display.",
    "explanation": ""
  },
  {
    "id": 24,
    "sector": 2,
    "difficulty": "Floor 2 • Intermediate",
    "source": "Chinook DB • Sales Chain 3 Tables",
    "title": "Chinook: Invoys Satrlari, Trek va Invoys",
    "story": "Xarid qilingan har bir trekning narxi va sotilgan sanasini bilish uchun sotuv zanjirini birlashtiring.",
    "taskUz": "Invoys sanasi (`invoice_date`), trek nomi (`name`) and sotilgan donasi (`quantity`) ustunlarini `invoice`, `invoice_line` and `track` jadandllarini joining display.",
    "expectedSql": "SELECT i.invoice_date, t.name, il.quantity FROM invoice i JOIN invoice_line il ON i.invoice_id = il.invoice_id JOIN track t ON il.track_id = t.track_id",
    "hint": "`invoice` -> `invoice_line` -> `track` zanjirini bog'lang.",
    "tags": [
      "Chinook",
      "invoice_line",
      "Sales Chain"
    ],
    "solutions": [
      "SELECT i.invoice_date, t.name, il.quantity FROM invoice i JOIN invoice_line il ON i.invoice_id = il.invoice_id JOIN track t ON il.track_id = t.track_id"
    ],
    "task": "Invoys sanasi (`invoice_date`), trek nomi (`name`) and sotilgan donasi (`quantity`) ustunlarini `invoice`, `invoice_line` and `track` jadandllarini joining display.",
    "explanation": ""
  },
  {
    "id": 25,
    "sector": 2,
    "difficulty": "Floor 2 • Intermediate",
    "source": "L05 Engineering • UzumPay Loyihasi Xodimlari",
    "title": "UzumPay Loyihasidagi Muhandislar",
    "story": "Toshkentdagi 'UzumPay' moliyaviy loyihasida ter to'kayotgan muhandislar va ularning sarflagan vaqtlarini aniqlang.",
    "taskUz": "'UzumPay' loyihasida ishlayotgan employee name (`ename`), lavozimi (`job`) and ishlagan soatlarini (`hours`) display.",
    "expectedSql": "SELECT e.ename, e.job, w.hours FROM emp e JOIN works_on w ON e.empno = w.empno JOIN project p ON w.pno = p.pno WHERE p.pname = 'UzumPay'",
    "hint": "`WHERE p.pname = 'UzumPay'` shartini kiriting.",
    "tags": [
      "works_on",
      "UzumPay"
    ],
    "solutions": [
      "SELECT e.ename, e.job, w.hours FROM emp e JOIN works_on w ON e.empno = w.empno JOIN project p ON w.pno = p.pno WHERE p.pname = 'UzumPay'"
    ],
    "task": "'UzumPay' loyihasida ishlayotgan employee name (`ename`), lavozimi (`job`) and ishlagan soatlarini (`hours`) display.",
    "explanation": ""
  },
  {
    "id": 26,
    "sector": 2,
    "difficulty": "Floor 2 • Intermediate",
    "source": "S05 Task 5 • 1 va 2-Razryadlar",
    "title": "Boshlang'ich Maosh Razryadlari (1 va 2)",
    "story": "Ijtimoiy yordam paketi uchun kompaniyadagi eng quyi 1- va 2-razryadlarda faoliyat yuritayotgan xodimlar ro'yxati tuzilmoqda.",
    "taskUz": "Maosh razryadi 1 yoki 2 bo'lgan employee name (`ename`), bo'lim nomi (`dname`) and razryadini (`grade`) display.",
    "expectedSql": "SELECT e.ename, d.dname, s.grade FROM emp e JOIN dept d ON e.deptno = d.deptno JOIN salgrade s ON e.sal BETWEEN s.losal AND s.hisal WHERE s.grade IN (1, 2)",
    "hint": "`WHERE s.grade IN (1, 2)` orqali filtrlang.",
    "tags": [
      "salgrade",
      "IN (1, 2)"
    ],
    "solutions": [
      "SELECT e.ename, d.dname, s.grade FROM emp e JOIN dept d ON e.deptno = d.deptno JOIN salgrade s ON e.sal BETWEEN s.losal AND s.hisal WHERE s.grade IN (1, 2)"
    ],
    "task": "Maosh razryadi 1 yoki 2 bo'lgan employee name (`ename`), bo'lim nomi (`dname`) and razryadini (`grade`) display.",
    "explanation": ""
  },
  {
    "id": 27,
    "sector": 2,
    "difficulty": "Floor 2 • Intermediate",
    "source": "Chinook DB • Customer & Support Agent",
    "title": "Chinook: Xaridor va Unga Mas'ul Xodim",
    "story": "Har bir xaridorga konsultatsiya beruvchi korporativ qo'llab-quvvatlash agenti (support rep) biriktirilgan.",
    "taskUz": "Xaridorning ismi (`first_name`), uning mamlakati (`country`) and unga mas'ul xodimning ismini (`ename`) `customer` and `emp` jadandllarini `support_rep_id = empno` via joining display.",
    "expectedSql": "SELECT c.first_name, c.country, e.ename FROM customer c JOIN emp e ON c.support_rep_id = e.empno",
    "hint": "`customer c JOIN emp e ON c.support_rep_id = e.empno` ulamini qo'llang.",
    "tags": [
      "customer",
      "emp",
      "support_rep_id"
    ],
    "solutions": [
      "SELECT c.first_name, c.country, e.ename FROM customer c JOIN emp e ON c.support_rep_id = e.empno"
    ],
    "task": "Xaridorning ismi (`first_name`), uning mamlakati (`country`) and unga mas'ul xodimning ismini (`ename`) `customer` and `emp` jadandllarini `support_rep_id = empno` via joining display.",
    "explanation": ""
  },
  {
    "id": 28,
    "sector": 2,
    "difficulty": "Floor 2 • Intermediate",
    "source": "S05 Task 7 • 3-Jadval Dallas",
    "title": "Dallasdagi Xodimlar va Ularning Razryadi",
    "story": "Dallas filiali maosh toifalarini qayta ko'rib chiqmoqda. Faqat Dallas bo'limidagi xodimlar toifalari kerak.",
    "taskUz": "Dallasda ishlovchi employee name (`ename`), salary (`sal`) and razryadini (`grade`) display. Natijani maosh bo'yicha kamayish tartibida order by.",
    "expectedSql": "SELECT e.ename, e.sal, s.grade FROM emp e JOIN dept d ON e.deptno = d.deptno JOIN salgrade s ON e.sal BETWEEN s.losal AND s.hisal WHERE d.loc = 'DALLAS' ORDER BY e.sal DESC",
    "hint": "`WHERE d.loc = 'DALLAS' ORDER BY e.sal DESC` shartini bering.",
    "tags": [
      "DALLAS",
      "salgrade",
      "ORDER BY DESC"
    ],
    "solutions": [
      "SELECT e.ename, e.sal, s.grade FROM emp e JOIN dept d ON e.deptno = d.deptno JOIN salgrade s ON e.sal BETWEEN s.losal AND s.hisal WHERE d.loc = 'DALLAS' ORDER BY e.sal DESC"
    ],
    "task": "Dallasda ishlovchi employee name (`ename`), salary (`sal`) and razryadini (`grade`) display. Natijani maosh bo'yicha kamayish tartibida order by.",
    "explanation": ""
  },
  {
    "id": 29,
    "sector": 2,
    "difficulty": "Floor 2 • Hard",
    "source": "L05 Engineering • 40 Soatdan Ko'p Ishlaganlar",
    "title": "Katta Loyiha Yuklamasi (>= 40 Soat)",
    "story": "Overtime (ortiqcha ish) monitoringida biror loyihaga 40 yoki undan ko'p soat ajratgan muhandislar tahlil qilinmoqda.",
    "taskUz": "Biror loyihaga 40 yoki undan ko'p soat ishlagan employee name (`ename`), bo'lim nomi (`dname`), loyiha nomi (`pname`) and soatlarini (`hours`) display.",
    "expectedSql": "SELECT e.ename, d.dname, p.pname, w.hours FROM emp e JOIN dept d ON e.deptno = d.deptno JOIN works_on w ON e.empno = w.empno JOIN project p ON w.pno = p.pno WHERE w.hours >= 40",
    "hint": "4 ta jadvalni ketma-ket bog'lang (`emp` -> `dept`, `works_on`, `project`) va `w.hours >= 40` shartini qo'ying.",
    "tags": [
      "4-Table Join",
      "hours >= 40"
    ],
    "solutions": [
      "SELECT e.ename, d.dname, p.pname, w.hours FROM emp e JOIN dept d ON e.deptno = d.deptno JOIN works_on w ON e.empno = w.empno JOIN project p ON w.pno = p.pno WHERE w.hours >= 40"
    ],
    "task": "Biror loyihaga 40 yoki undan ko'p soat ishlagan employee name (`ename`), bo'lim nomi (`dname`), loyiha nomi (`pname`) and soatlarini (`hours`) display.",
    "explanation": ""
  },
  {
    "id": 30,
    "sector": 2,
    "difficulty": "Floor 2 • Sarhisob",
    "source": "S05 Task 7 • 2-Qavat Bosh Imtihoni",
    "title": "2-Qavat Bosh Imtihoni: Katta Korporativ Matritsa",
    "story": "2-qavat liftini ochish uchun xodim, uning bo'limi, maosh razryadi va unga yuklatilgan loyiha nomini yagona so'rovda chiqaring.",
    "taskUz": "Xodim ismi (`ename`), bo'lim nomi (`dname`), maosh razryadi (`grade`) and loyiha nomini (`pname`) `emp`, `dept`, `salgrade`, `works_on` and `project` jadandllarini joining display. Natijani xodim ismi bo'yicha order by.",
    "expectedSql": "SELECT e.ename, d.dname, s.grade, p.pname FROM emp e JOIN dept d ON e.deptno = d.deptno JOIN salgrade s ON e.sal BETWEEN s.losal AND s.hisal JOIN works_on w ON e.empno = w.empno JOIN project p ON w.pno = p.pno ORDER BY e.ename",
    "hint": "Barcha 5 ta jadvalni to'g'ri kalitlar bilan bog'lang va `ORDER BY e.ename` qiling.",
    "tags": [
      "Floor 2 Boss",
      "5-Table Join",
      "Grand Matrix"
    ],
    "solutions": [
      "SELECT e.ename, d.dname, s.grade, p.pname FROM emp e JOIN dept d ON e.deptno = d.deptno JOIN salgrade s ON e.sal BETWEEN s.losal AND s.hisal JOIN works_on w ON e.empno = w.empno JOIN project p ON w.pno = p.pno ORDER BY e.ename"
    ],
    "task": "Xodim ismi (`ename`), bo'lim nomi (`dname`), maosh razryadi (`grade`) and loyiha nomini (`pname`) `emp`, `dept`, `salgrade`, `works_on` and `project` jadandllarini joining display. Natijani xodim ismi bo'yicha order by.",
    "explanation": ""
  },
  {
    "id": 31,
    "sector": 3,
    "difficulty": "Floor 3 • Easy",
    "source": "S05 Task 10a • LEFT JOIN",
    "title": "Barcha Bo'limlar va Ularning Xodimlari",
    "story": "Kompaniyada 4 ta bo'lim bor, ammo 40-bo'limda (OPERATIONS) hali birorta xodim ishga olinmagan. Oddiy `JOIN` uni yo'qotib yuboradi.",
    "taskUz": "All bo'lim ma'lumotlarini saqlab qolgan holda bo'lim nomi (`dname`), xodim raqami (`empno`) and xodim ismini (`ename`) `LEFT JOIN` via display.",
    "expectedSql": "SELECT d.dname, e.empno, e.ename FROM dept d LEFT JOIN emp e ON d.deptno = e.deptno",
    "hint": "`FROM dept d LEFT JOIN emp e ON d.deptno = e.deptno` - chapdagi `dept` ning barcha qatorlari natijada qoladi.",
    "tags": [
      "LEFT JOIN",
      "dept",
      "emp"
    ],
    "solutions": [
      "SELECT d.dname, e.empno, e.ename FROM dept d LEFT JOIN emp e ON d.deptno = e.deptno"
    ],
    "task": "All bo'lim ma'lumotlarini saqlab qolgan holda bo'lim nomi (`dname`), xodim raqami (`empno`) and xodim ismini (`ename`) `LEFT JOIN` via display.",
    "explanation": ""
  },
  {
    "id": 32,
    "sector": 3,
    "difficulty": "Floor 3 • Easy",
    "source": "S05 Task 10b • RIGHT JOIN",
    "title": "Aylantirilgan RIGHT JOIN",
    "story": "SQL da `dept LEFT JOIN emp` va `emp RIGHT JOIN dept` aynan bir xil ma'noni anglatadi — jadvallar o'rni almashadi.",
    "taskUz": "`RIGHT JOIN` sintaksisidan foydalanib, All bo'lim nomlari (`dname`) and xodim ismlarini (`ename`) display.",
    "expectedSql": "SELECT d.dname, e.ename FROM emp e RIGHT JOIN dept d ON e.deptno = d.deptno",
    "hint": "`FROM emp e RIGHT JOIN dept d ON e.deptno = d.deptno` shaklida yozing.",
    "tags": [
      "RIGHT JOIN"
    ],
    "solutions": [
      "SELECT d.dname, e.ename FROM emp e RIGHT JOIN dept d ON e.deptno = d.deptno"
    ],
    "task": "`RIGHT JOIN` sintaksisidan foydalanib, All bo'lim nomlari (`dname`) and xodim ismlarini (`ename`) display.",
    "explanation": ""
  },
  {
    "id": 33,
    "sector": 3,
    "difficulty": "Floor 3 • Easy",
    "source": "L05 Engineering • Barcha Loyihalar va Xodimlar",
    "title": "Barcha Loyihalar va Biriktirilgan Xodimlar",
    "story": "Ba'zi yangi loyihalarga hali hech kim biriktirilmagan bo'lishi mumkin. Barcha loyihalar ro'yxati to'liq chiqishi shart.",
    "taskUz": "All loyihalar nomi (`pname`) and unga biriktirilgan xodimlarning `empno` ustunini `project LEFT JOIN works_on` via display.",
    "expectedSql": "SELECT p.pname, w.empno FROM project p LEFT JOIN works_on w ON p.pno = w.pno",
    "hint": "`project p LEFT JOIN works_on w ON p.pno = w.pno` bog'lanishidan foydalaning.",
    "tags": [
      "LEFT JOIN",
      "project",
      "works_on"
    ],
    "solutions": [
      "SELECT p.pname, w.empno FROM project p LEFT JOIN works_on w ON p.pno = w.pno"
    ],
    "task": "All loyihalar nomi (`pname`) and unga biriktirilgan xodimlarning `empno` ustunini `project LEFT JOIN works_on` via display.",
    "explanation": ""
  },
  {
    "id": 34,
    "sector": 3,
    "difficulty": "Floor 3 • Intermediate",
    "source": "Chinook DB H4 • Albomi Yo'q Ijrochilar",
    "title": "Chinook: Barcha Ijrochilar va Albomlari",
    "story": "Chinook ma'lumotlar bazasida ro'yxatga olingan, lekin hali birorta albom chiqarmagan ijrochilar ham mavjud.",
    "taskUz": "All ijrochi nomlari (`name`) and ularning albom sarlavhalarini (`title`) `artist LEFT JOIN album` via display.",
    "expectedSql": "SELECT ar.name, al.title FROM artist ar LEFT JOIN album al ON ar.artist_id = al.artist_id",
    "hint": "`artist ar LEFT JOIN album al ON ar.artist_id = al.artist_id` qiling.",
    "tags": [
      "Chinook H4",
      "LEFT JOIN",
      "artist",
      "album"
    ],
    "solutions": [
      "SELECT ar.name, al.title FROM artist ar LEFT JOIN album al ON ar.artist_id = al.artist_id"
    ],
    "task": "All ijrochi nomlari (`name`) and ularning albom sarlavhalarini (`title`) `artist LEFT JOIN album` via display.",
    "explanation": ""
  },
  {
    "id": 35,
    "sector": 3,
    "difficulty": "Floor 3 • Intermediate",
    "source": "Chinook DB H2 • Xaridorlar va Xodimlar",
    "title": "Chinook: Barcha Xaridorlar va Qo'llab-Quvvatlovchilar",
    "story": "Yangi ro'yxatdan o'tgan mijozga hali qo'llab-quvvatlash xodimi biriktirilmagan bo'lishi mumkin. Mijoz hisobotdan tushib qolmasligi lozim.",
    "taskUz": "All mijozlarning familiyasi (`last_name`), mamlakati (`country`) and ularga biriktirilgan xodim ismini (`ename`) `customer LEFT JOIN emp` via display.",
    "expectedSql": "SELECT c.last_name, c.country, e.ename FROM customer c LEFT JOIN emp e ON c.support_rep_id = e.empno",
    "hint": "`customer c LEFT JOIN emp e ON c.support_rep_id = e.empno` .",
    "tags": [
      "Chinook H2",
      "LEFT JOIN",
      "customer"
    ],
    "solutions": [
      "SELECT c.last_name, c.country, e.ename FROM customer c LEFT JOIN emp e ON c.support_rep_id = e.empno"
    ],
    "task": "All mijozlarning familiyasi (`last_name`), mamlakati (`country`) and ularga biriktirilgan xodim ismini (`ename`) `customer LEFT JOIN emp` via display.",
    "explanation": ""
  },
  {
    "id": 36,
    "sector": 3,
    "difficulty": "Floor 3 • Intermediate",
    "source": "S05 Task 15 • Shartni ON Bandiga Qo'yish",
    "title": "Shartni ON Bandiga Joylashtirish (Faqat Clerklar)",
    "story": "Diqqat: Tashqi ulamda qo'shimcha shartni `ON` bandiga qo'yish bilan `WHERE` bandiga qo'yish natijani butunlay o'zgartiradi!",
    "taskUz": "All bo'limlar (`dept`) chiqishi shart bo'lgan holda, faqat 'CLERK' lavozimidagi xodimlarni bog'lang. Bo'lim nomi (`dname`) and xodim ismini (`ename`) display.",
    "expectedSql": "SELECT d.dname, e.ename FROM dept d LEFT JOIN emp e ON d.deptno = e.deptno AND e.job = 'CLERK'",
    "hint": "Shartni `ON` bandining o'ziga qo'ying: `ON d.deptno = e.deptno AND e.job = 'CLERK'`.",
    "tags": [
      "S05 Task 15",
      "ON condition",
      "CLERK"
    ],
    "solutions": [
      "SELECT d.dname, e.ename FROM dept d LEFT JOIN emp e ON d.deptno = e.deptno AND e.job = 'CLERK'"
    ],
    "task": "All bo'limlar (`dept`) chiqishi shart bo'lgan holda, faqat 'CLERK' lavozimidagi xodimlarni bog'lang. Bo'lim nomi (`dname`) and xodim ismini (`ename`) display.",
    "explanation": ""
  },
  {
    "id": 37,
    "sector": 3,
    "difficulty": "Floor 3 • Intermediate",
    "source": "S05 Task 15 • Shartni WHERE Bandiga Qo'yish",
    "title": "Shartni WHERE Bandiga Joylashtirish Tuzog'i",
    "story": "Agar `e.job = 'CLERK'` sharti `WHERE` ga qo'yilsa, xodimi yo'q bo'limlar tashlab yuboriladi va u amalda `INNER JOIN` ga aylanib qoladi!",
    "taskUz": "Shartni `WHERE` bandiga qo'yib, bo'lim nomi (`dname`) and xodim ismini (`ename`) display. (faqat kotiblari bor bo'limlar qoladi).",
    "expectedSql": "SELECT d.dname, e.ename FROM dept d LEFT JOIN emp e ON d.deptno = e.deptno WHERE e.job = 'CLERK'",
    "hint": "`WHERE e.job = 'CLERK'` qilib yozing.",
    "tags": [
      "S05 Task 15",
      "WHERE trap"
    ],
    "solutions": [
      "SELECT d.dname, e.ename FROM dept d LEFT JOIN emp e ON d.deptno = e.deptno WHERE e.job = 'CLERK'"
    ],
    "task": "Shartni `WHERE` bandiga qo'yib, bo'lim nomi (`dname`) and xodim ismini (`ename`) display. (faqat kotiblari bor bo'limlar qoladi).",
    "explanation": ""
  },
  {
    "id": 38,
    "sector": 3,
    "difficulty": "Floor 3 • Intermediate",
    "source": "Chinook DB H5 • Barcha Treklar va Invoyslar",
    "title": "Chinook: Sotilgan va Sotilmagan Barcha Treklar",
    "story": "Do'konda mavjud bo'lgan barcha musiqiy treklarning sotilishini tekshirish uchun ularni xarid qilingan invoys satrlari bilan bog'lang.",
    "taskUz": "All treklarning nomi (`name`) and ularning xarid narxini (`unit_price`) `track LEFT JOIN invoice_line` via display.",
    "expectedSql": "SELECT t.name, il.unit_price FROM track t LEFT JOIN invoice_line il ON t.track_id = il.track_id",
    "hint": "`track t LEFT JOIN invoice_line il ON t.track_id = il.track_id` .",
    "tags": [
      "Chinook H5",
      "LEFT JOIN",
      "track"
    ],
    "solutions": [
      "SELECT t.name, il.unit_price FROM track t LEFT JOIN invoice_line il ON t.track_id = il.track_id"
    ],
    "task": "All treklarning nomi (`name`) and ularning xarid narxini (`unit_price`) `track LEFT JOIN invoice_line` via display.",
    "explanation": ""
  },
  {
    "id": 39,
    "sector": 3,
    "difficulty": "Floor 3 • Intermediate",
    "source": "L05 Engineering • Barcha Xodimlar va Loyihalari",
    "title": "Barcha Xodimlar va Ularning Loyihalari",
    "story": "Kompaniyada ba'zi xodimlar (masalan, Prezident KING yoki yangi xodimlar) hali birorta muhandislik loyihasiga biriktirilmagan.",
    "taskUz": "All employee name (`ename`) and ularning biriktirilgan loyiha raqamini (`pno`) `emp LEFT JOIN works_on` via display.",
    "expectedSql": "SELECT e.ename, w.pno FROM emp e LEFT JOIN works_on w ON e.empno = w.empno",
    "hint": "`emp e LEFT JOIN works_on w ON e.empno = w.empno` orqali barcha xodimlarni saqlang.",
    "tags": [
      "emp",
      "works_on",
      "LEFT JOIN"
    ],
    "solutions": [
      "SELECT e.ename, w.pno FROM emp e LEFT JOIN works_on w ON e.empno = w.empno"
    ],
    "task": "All employee name (`ename`) and ularning biriktirilgan loyiha raqamini (`pno`) `emp LEFT JOIN works_on` via display.",
    "explanation": ""
  },
  {
    "id": 40,
    "sector": 3,
    "difficulty": "Floor 3 • Intermediate",
    "source": "S05 Task 10 • Menejerlar Tashqi Ulami",
    "title": "Barcha Bo'limlar va Faqat Menejerlar",
    "story": "Boshqaruv xaritasida barcha bo'limlar ko'rinishi, lekin har bir bo'lim qarshisida faqat uning boshqaruvchisi (MANAGER) turishi kerak.",
    "taskUz": "All bo'limlar nomi (`dname`) and uning menejeri ismini (`ename`) `LEFT JOIN ... AND e.job = 'MANAGER'` via display.",
    "expectedSql": "SELECT d.dname, e.ename FROM dept d LEFT JOIN emp e ON d.deptno = e.deptno AND e.job = 'MANAGER'",
    "hint": "`ON d.deptno = e.deptno AND e.job = 'MANAGER'` shartini yozing.",
    "tags": [
      "LEFT JOIN",
      "MANAGER"
    ],
    "solutions": [
      "SELECT d.dname, e.ename FROM dept d LEFT JOIN emp e ON d.deptno = e.deptno AND e.job = 'MANAGER'"
    ],
    "task": "All bo'limlar nomi (`dname`) and uning menejeri ismini (`ename`) `LEFT JOIN ... AND e.job = 'MANAGER'` via display.",
    "explanation": ""
  },
  {
    "id": 41,
    "sector": 3,
    "difficulty": "Floor 3 • Intermediate",
    "source": "Chinook DB • Invoysi Yo'q Xaridorlar",
    "title": "Chinook: Barcha Xaridorlar va Invoys Sanalari",
    "story": "Ro'yxatdan o'tgan mijozlarning faolligini o'rganish uchun ularni invoyslar bilan tashqi bog'lang.",
    "taskUz": "All xaridorlarning familiyasi (`last_name`) and invoys sanasini (`invoice_date`) `customer LEFT JOIN invoice` via display.",
    "expectedSql": "SELECT c.last_name, i.invoice_date FROM customer c LEFT JOIN invoice i ON c.customer_id = i.customer_id",
    "hint": "`customer c LEFT JOIN invoice i ON c.customer_id = i.customer_id` orqali bog'lang.",
    "tags": [
      "Chinook",
      "customer",
      "invoice"
    ],
    "solutions": [
      "SELECT c.last_name, i.invoice_date FROM customer c LEFT JOIN invoice i ON c.customer_id = i.customer_id"
    ],
    "task": "All xaridorlarning familiyasi (`last_name`) and invoys sanasini (`invoice_date`) `customer LEFT JOIN invoice` via display.",
    "explanation": ""
  },
  {
    "id": 42,
    "sector": 3,
    "difficulty": "Floor 3 • Intermediate",
    "source": "L05 Engineering • 3 Ta Jadval Ketma-ket LEFT JOIN",
    "title": "Ketma-ket 3 Ta Jadval Tashqi Ulami",
    "story": "Bo'limlar, ularning xodimlari va o'sha xodimlarning loyihalarini birorta ham bo'limni yo'qotmasdan bog'lash talab etiladi.",
    "taskUz": "Bo'lim nomi (`dname`), xodim ismi (`ename`) and loyiha raqamini (`pno`) `dept LEFT JOIN emp` and keyin `LEFT JOIN works_on` via display.",
    "expectedSql": "SELECT d.dname, e.ename, w.pno FROM dept d LEFT JOIN emp e ON d.deptno = e.deptno LEFT JOIN works_on w ON e.empno = w.empno",
    "hint": "Ikkita ketma-ket `LEFT JOIN` ishlating.",
    "tags": [
      "Chained LEFT JOIN",
      "dept",
      "emp",
      "works_on"
    ],
    "solutions": [
      "SELECT d.dname, e.ename, w.pno FROM dept d LEFT JOIN emp e ON d.deptno = e.deptno LEFT JOIN works_on w ON e.empno = w.empno"
    ],
    "task": "Bo'lim nomi (`dname`), xodim ismi (`ename`) and loyiha raqamini (`pno`) `dept LEFT JOIN emp` and keyin `LEFT JOIN works_on` via display.",
    "explanation": ""
  },
  {
    "id": 43,
    "sector": 3,
    "difficulty": "Floor 3 • Intermediate",
    "source": "S05 Task 14 • Barcha Xodimlar va Rahbari",
    "title": "Barcha Xodimlar va Rahbarining Ismi (KING bilan)",
    "story": "Prezident KING ning rahbari yo'q (`supervisor IS NULL`). Oddiy `JOIN` uni o'chirib yuboradi. Barcha 14 ta xodim chiqishi kerak.",
    "taskUz": "All 14 nafar xodimning ismi (`ename`) and ularning rahbari ismini (`m.ename`) `emp e LEFT JOIN emp m ON e.supervisor = m.empno` via display.",
    "expectedSql": "SELECT e.ename, m.ename AS manager_name FROM emp e LEFT JOIN emp m ON e.supervisor = m.empno",
    "hint": "`emp e LEFT JOIN emp m ON e.supervisor = m.empno` yordamida chapdagi xodimlarning barchasini saqlang.",
    "tags": [
      "LEFT JOIN",
      "supervisor",
      "KING"
    ],
    "solutions": [
      "SELECT e.ename, m.ename AS manager_name FROM emp e LEFT JOIN emp m ON e.supervisor = m.empno"
    ],
    "task": "All 14 nafar xodimning ismi (`ename`) and ularning rahbari ismini (`m.ename`) `emp e LEFT JOIN emp m ON e.supervisor = m.empno` via display.",
    "explanation": ""
  },
  {
    "id": 44,
    "sector": 3,
    "difficulty": "Floor 3 • Hard",
    "source": "Chinook DB • Artists, Albums & Tracks",
    "title": "Chinook: 3 Jadvalli To'liq Tashqi Katalog",
    "story": "Do'konda hali albomi yo'q ijrochilar ham, albomi bo'lib treki yo'q plastinkalar ham katalogda qolishi lozim.",
    "taskUz": "Ijrochi nomi (`ar.name`), albom sarlavhasi (`title`) and trek nomini (`t.name`) `artist LEFT JOIN album` and `LEFT JOIN track` via display.",
    "expectedSql": "SELECT ar.name, al.title, t.name AS track_name FROM artist ar LEFT JOIN album al ON ar.artist_id = al.artist_id LEFT JOIN track t ON al.album_id = t.album_id",
    "hint": "`artist` -> `album` -> `track` zanjirini ketma-ket `LEFT JOIN` bilan bog'lang.",
    "tags": [
      "Chinook",
      "Chained LEFT JOIN"
    ],
    "solutions": [
      "SELECT ar.name, al.title, t.name AS track_name FROM artist ar LEFT JOIN album al ON ar.artist_id = al.artist_id LEFT JOIN track t ON al.album_id = t.album_id"
    ],
    "task": "Ijrochi nomi (`ar.name`), albom sarlavhasi (`title`) and trek nomini (`t.name`) `artist LEFT JOIN album` and `LEFT JOIN track` via display.",
    "explanation": ""
  },
  {
    "id": 45,
    "sector": 3,
    "difficulty": "Floor 3 • Sarhisob",
    "source": "S05 Task 10–15 • 3-Qavat Bosh Imtihoni",
    "title": "3-Qavat Bosh Imtihoni: Tashqi Ulam Boshqarmasi",
    "story": "3-qavat liftini ochish uchun barcha bo'limlar, ularning xodimlari va xodimlarning maosh razryadlarini to'liq bog'lab bering.",
    "taskUz": "Bo'lim nomi (`dname`), xodim ismi (`ename`) and uning maosh razryadini (`grade`) `dept LEFT JOIN emp` and `LEFT JOIN salgrade` via display. Bo'sh 40-bo'lim ham natijada ko'rinishi shart.",
    "expectedSql": "SELECT d.dname, e.ename, s.grade FROM dept d LEFT JOIN emp e ON d.deptno = e.deptno LEFT JOIN salgrade s ON e.sal BETWEEN s.losal AND s.hisal",
    "hint": "`dept LEFT JOIN emp ON ... LEFT JOIN salgrade s ON e.sal BETWEEN s.losal AND s.hisal` .",
    "tags": [
      "Floor 3 Boss",
      "Chained LEFT JOIN",
      "salgrade"
    ],
    "solutions": [
      "SELECT d.dname, e.ename, s.grade FROM dept d LEFT JOIN emp e ON d.deptno = e.deptno LEFT JOIN salgrade s ON e.sal BETWEEN s.losal AND s.hisal"
    ],
    "task": "Bo'lim nomi (`dname`), xodim ismi (`ename`) and uning maosh razryadini (`grade`) `dept LEFT JOIN emp` and `LEFT JOIN salgrade` via display. Bo'sh 40-bo'lim ham natijada ko'rinishi shart.",
    "explanation": ""
  },
  {
    "id": 46,
    "sector": 4,
    "difficulty": "Floor 4 • Easy",
    "source": "S05 Task 11 • Anti-Join",
    "title": "Hech Kim Ishlamaydigan Bo'limlar (Anti-Join)",
    "story": "Audit tekshiruvida birorta xodimi bo'lmagan bo'sh bo'limlarni topish topshirig'i berildi. Bu mantiqiy 'Anti-Join' deyiladi.",
    "taskUz": "Birorta ham xodim ishlamaydigan bo'limning nomi (`dname`) and shahrini (`loc`) `dept LEFT JOIN emp` qilib, `WHERE e.empno IS NULL` via display.",
    "expectedSql": "SELECT d.dname, d.loc FROM dept d LEFT JOIN emp e ON d.deptno = e.deptno WHERE e.empno IS NULL",
    "hint": "`WHERE e.empno IS NULL` sharti orqali ulam topilmagan qatorlarni ajratib oling.",
    "tags": [
      "Anti-Join",
      "IS NULL",
      "dept"
    ],
    "solutions": [
      "SELECT d.dname, d.loc FROM dept d LEFT JOIN emp e ON d.deptno = e.deptno WHERE e.empno IS NULL"
    ],
    "task": "Birorta ham xodim ishlamaydigan bo'limning nomi (`dname`) and shahrini (`loc`) `dept LEFT JOIN emp` qilib, `WHERE e.empno IS NULL` via display.",
    "explanation": ""
  },
  {
    "id": 47,
    "sector": 4,
    "difficulty": "Floor 4 • Easy",
    "source": "Chinook DB H4 • Albomi Yo'q San'atkorlar",
    "title": "Chinook: Birorta Albomi Bo'lmagan Ijrochilar",
    "story": "Musiqa studiyasi ro'yxatida nomi bor, ammo diskografiyasida birorta albomi mavjud bo'lmagan san'atkorlarni aniqlang.",
    "taskUz": "Albomga ega bo'lmagan ijrochilarning nomini (`name`) `artist LEFT JOIN album` and `WHERE al.album_id IS NULL` via display.",
    "expectedSql": "SELECT ar.name FROM artist ar LEFT JOIN album al ON ar.artist_id = al.artist_id WHERE al.album_id IS NULL",
    "hint": "`WHERE al.album_id IS NULL` filtri bilan anti-join hosil qiling.",
    "tags": [
      "Chinook H4",
      "Anti-Join",
      "artist"
    ],
    "solutions": [
      "SELECT ar.name FROM artist ar LEFT JOIN album al ON ar.artist_id = al.artist_id WHERE al.album_id IS NULL"
    ],
    "task": "Albomga ega bo'lmagan ijrochilarning nomini (`name`) `artist LEFT JOIN album` and `WHERE al.album_id IS NULL` via display.",
    "explanation": ""
  },
  {
    "id": 48,
    "sector": 4,
    "difficulty": "Floor 4 • Easy",
    "source": "Chinook DB H5 • Hech Qachon Sotilmagan Treklar",
    "title": "Chinook: Birorta Ham Sotilmagan Treklar",
    "story": "Do'konda turgan, lekin mijozlar tomonidan biror marta ham sotib olinmagan treklarni inventarizatsiya qiling.",
    "taskUz": "Biror marta ham sotilmagan (invoys satrlarida uchramagan) treklarning nomini (`name`) `track LEFT JOIN invoice_line` and `WHERE il.track_id IS NULL` via display.",
    "expectedSql": "SELECT t.name FROM track t LEFT JOIN invoice_line il ON t.track_id = il.track_id WHERE il.track_id IS NULL",
    "hint": "`WHERE il.track_id IS NULL` shartini qo'llang.",
    "tags": [
      "Chinook H5",
      "Anti-Join",
      "track"
    ],
    "solutions": [
      "SELECT t.name FROM track t LEFT JOIN invoice_line il ON t.track_id = il.track_id WHERE il.track_id IS NULL"
    ],
    "task": "Biror marta ham sotilmagan (invoys satrlarida uchramagan) treklarning nomini (`name`) `track LEFT JOIN invoice_line` and `WHERE il.track_id IS NULL` via display.",
    "explanation": ""
  },
  {
    "id": 49,
    "sector": 4,
    "difficulty": "Floor 4 • Easy",
    "source": "L05 Engineering • Loyihaga Biriktirilmagan Xodimlar",
    "title": "Loyihalarda Qatnashmayotgan Xodimlar",
    "story": "Barcha xodimlar bandligini tekshirish jarayonida birorta muhandislik loyihasiga jalb qilinmagan xodimlarni aniqlang.",
    "taskUz": "Birorta ham loyihada ishlamayotgan employee name (`ename`) and lavozimini (`job`) `emp LEFT JOIN works_on` and `WHERE w.empno IS NULL` via display.",
    "expectedSql": "SELECT e.ename, e.job FROM emp e LEFT JOIN works_on w ON e.empno = w.empno WHERE w.empno IS NULL",
    "hint": "`WHERE w.empno IS NULL` orqali filtrlang.",
    "tags": [
      "works_on",
      "Anti-Join",
      "emp"
    ],
    "solutions": [
      "SELECT e.ename, e.job FROM emp e LEFT JOIN works_on w ON e.empno = w.empno WHERE w.empno IS NULL"
    ],
    "task": "Birorta ham loyihada ishlamayotgan employee name (`ename`) and lavozimini (`job`) `emp LEFT JOIN works_on` and `WHERE w.empno IS NULL` via display.",
    "explanation": ""
  },
  {
    "id": 50,
    "sector": 4,
    "difficulty": "Floor 4 • Easy",
    "source": "S05 Task 16 • Hech Kimni Boshqarmaydigan Xodimlar",
    "title": "Oddiy Ijrochilar (Hech Kimga Rahbar Bo'lmaganlar)",
    "story": "Ierarxik tuzilmada o'z qo'l ostida birorta ham bo'ysunuvchi xodimi bo'lmagan oddiy ijrochilarni topish kerak.",
    "taskUz": "Boshqa hech bir xodimga rahbar bo'lmagan employee name (`ename`) and lavozimini (`job`) `emp e LEFT JOIN emp s ON e.empno = s.supervisor WHERE s.empno IS NULL` via display.",
    "expectedSql": "SELECT e.ename, e.job FROM emp e LEFT JOIN emp s ON e.empno = s.supervisor WHERE s.empno IS NULL",
    "hint": "`emp e LEFT JOIN emp s ON e.empno = s.supervisor WHERE s.empno IS NULL` self-anti-join ni qo'llang.",
    "tags": [
      "S05 Task 16",
      "Self-Anti-Join"
    ],
    "solutions": [
      "SELECT e.ename, e.job FROM emp e LEFT JOIN emp s ON e.empno = s.supervisor WHERE s.empno IS NULL"
    ],
    "task": "Boshqa hech bir xodimga rahbar bo'lmagan employee name (`ename`) and lavozimini (`job`) `emp e LEFT JOIN emp s ON e.empno = s.supervisor WHERE s.empno IS NULL` via display.",
    "explanation": ""
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = window.QUESTIONS_1_50;
}
