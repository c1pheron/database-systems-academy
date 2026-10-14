// ============================================================================
// DATABASE SYSTEMS ACADEMY — WEEK 5: JOINS, AGGREGATION & STORAGE
// Variable: QUESTIONS_51_100 (50 Questions)
// ============================================================================

window.QUESTIONS_51_100 = [
  {
    "id": 51,
    "sector": 4,
    "difficulty": "Floor 4 • Intermediate",
    "source": "S05 Task 17 • Komissiyasiz Xodimlar",
    "title": "Komissiyasi Bo'lmagan Xodimlar",
    "story": "Diqqat: Xodimning komissiyasi `NULL` bo'lishi yoki `0` ga teng bo'lishi mumkin. Ikkala holat ham komissiyasiz hisoblanadi.",
    "taskUz": "Komissiyasi bo'lmagan employee name (`ename`) and salaryni (`sal`) `WHERE comm IS NULL OR comm = 0` sharti via display.",
    "expectedSql": "SELECT ename, sal FROM emp WHERE comm IS NULL OR comm = 0",
    "hint": "`WHERE comm IS NULL OR comm = 0` .",
    "tags": [
      "S05 Task 17",
      "comm IS NULL",
      "OR"
    ],
    "solutions": [
      "SELECT ename, sal FROM emp WHERE comm IS NULL OR comm = 0"
    ],
    "task": "Komissiyasi bo'lmagan employee name (`ename`) and salaryni (`sal`) `WHERE comm IS NULL OR comm = 0` sharti via display.",
    "explanation": ""
  },
  {
    "id": 52,
    "sector": 4,
    "difficulty": "Floor 4 • Intermediate",
    "source": "S05 Task 17b • COALESCE Bilan Komissiya",
    "title": "COALESCE Bilan Komissiyani Tekshirish",
    "story": "`COALESCE(comm, 0)` funksiyasi agar komissiya `NULL` bo'lsa, uni avtomatik ravishda `0` ga aylantirib beradi.",
    "taskUz": "`COALESCE` funksiyasidan foydalanib, komissiyasi mavjud bo'lmagan (`COALESCE(comm, 0) = 0`) employee name (`ename`) and lavozimini (`job`) display.",
    "expectedSql": "SELECT ename, job FROM emp WHERE COALESCE(comm, 0) = 0",
    "hint": "`WHERE COALESCE(comm, 0) = 0` shartidan foydalaning.",
    "tags": [
      "COALESCE",
      "S05 Task 17"
    ],
    "solutions": [
      "SELECT ename, job FROM emp WHERE COALESCE(comm, 0) = 0"
    ],
    "task": "`COALESCE` funksiyasidan foydalanib, komissiyasi mavjud bo'lmagan (`COALESCE(comm, 0) = 0`) employee name (`ename`) and lavozimini (`job`) display.",
    "explanation": ""
  },
  {
    "id": 53,
    "sector": 4,
    "difficulty": "Floor 4 • Intermediate",
    "source": "S05 Task 18 • Rahbari Bo'lmagan Xodimlar",
    "title": "Oliy Rahbariyat (supervisor IS NULL)",
    "story": "Nega `WHERE supervisor = NULL` hech qachon ishlamaydi? Chunki SQL ning uch qiymatli mantiqida har qanday sonning NULL ga tengligi UNKNOWN bo'ladi!",
    "taskUz": "Rahbari bo'lmagan oliy martabali xodimning ismi (`ename`), lavozimi (`job`) and salaryni (`sal`) `IS NULL` via display.",
    "expectedSql": "SELECT ename, job, sal FROM emp WHERE supervisor IS NULL",
    "hint": "`WHERE supervisor IS NULL` yozing (hech qachon `= NULL` qilmang!).",
    "tags": [
      "supervisor IS NULL",
      "Three-Valued Logic"
    ],
    "solutions": [
      "SELECT ename, job, sal FROM emp WHERE supervisor IS NULL"
    ],
    "task": "Rahbari bo'lmagan oliy martabali xodimning ismi (`ename`), lavozimi (`job`) and salaryni (`sal`) `IS NULL` via display.",
    "explanation": ""
  },
  {
    "id": 54,
    "sector": 4,
    "difficulty": "Floor 4 • Intermediate",
    "source": "S05 Task 13 • COALESCE 'No manager'",
    "title": "Xodimlar va Rahbari ('No manager' Matni Bilan)",
    "story": "Hisobotda NULL so'zi o'rniga tushunarli qilib 'No manager' yozuvi chiqishi kerak.",
    "taskUz": "All employee name (`ename`) and ularning rahbari ismini display. Agar rahbari bo'lmasa, `COALESCE(m.ename, 'No manager')` chiqsin.",
    "expectedSql": "SELECT e.ename, COALESCE(m.ename, 'No manager') AS manager_name FROM emp e LEFT JOIN emp m ON e.supervisor = m.empno",
    "hint": "`SELECT e.ename, COALESCE(m.ename, 'No manager') AS manager_name FROM emp e LEFT JOIN emp m ON e.supervisor = m.empno` .",
    "tags": [
      "COALESCE",
      "S05 Task 13"
    ],
    "solutions": [
      "SELECT e.ename, COALESCE(m.ename, 'No manager') AS manager_name FROM emp e LEFT JOIN emp m ON e.supervisor = m.empno"
    ],
    "task": "All employee name (`ename`) and ularning rahbari ismini display. Agar rahbari bo'lmasa, `COALESCE(m.ename, 'No manager')` chiqsin.",
    "explanation": ""
  },
  {
    "id": 55,
    "sector": 4,
    "difficulty": "Floor 4 • Intermediate",
    "source": "S05 Task 19 • Sotuvchilar Komissiya Nisbati",
    "title": "Komissiyasi Bor Xodimlar",
    "story": "Savdo bo'limi tahlili uchun komissiyasi noldan katta bo'lgan xodimlarni saralab oling.",
    "taskUz": "Komissiyasi bor (`comm > 0`) employee name (`ename`), salary (`sal`), komissiyasi (`comm`) ustunlarini display.",
    "expectedSql": "SELECT ename, sal, comm FROM emp WHERE comm > 0",
    "hint": "`WHERE comm > 0` shartini qo'llang.",
    "tags": [
      "comm > 0",
      "salesmen"
    ],
    "solutions": [
      "SELECT ename, sal, comm FROM emp WHERE comm > 0"
    ],
    "task": "Komissiyasi bor (`comm > 0`) employee name (`ename`), salary (`sal`), komissiyasi (`comm`) ustunlarini display.",
    "explanation": ""
  },
  {
    "id": 56,
    "sector": 4,
    "difficulty": "Floor 4 • Intermediate",
    "source": "S05 Task 20a • ORDER BY comm NULLS LAST",
    "title": "NULL Qiymatlarni Oxiriga Tartiblash",
    "story": "PostgreSQL da `ORDER BY comm DESC` qilinganda `NULL` lar eng boshida keladi. Ularni ro'yxat oxiriga tushirish kerak.",
    "taskUz": "employee name (`ename`) and komissiyasini (`comm`) display. Natijani komissiya kamayishi tartibida order by., komissiyasi yo'qlar esa eng oxirida chiqsin (`ORDER BY comm DESC NULLS LAST`).",
    "expectedSql": "SELECT ename, comm FROM emp ORDER BY comm DESC NULLS LAST",
    "hint": "`ORDER BY comm DESC NULLS LAST` sintaksisidan foydalaning.",
    "tags": [
      "NULLS LAST",
      "ORDER BY"
    ],
    "solutions": [
      "SELECT ename, comm FROM emp ORDER BY comm DESC NULLS LAST"
    ],
    "task": "employee name (`ename`) and komissiyasini (`comm`) display. Natijani komissiya kamayishi tartibida order by., komissiyasi yo'qlar esa eng oxirida chiqsin (`ORDER BY comm DESC NULLS LAST`).",
    "explanation": ""
  },
  {
    "id": 57,
    "sector": 4,
    "difficulty": "Floor 4 • Intermediate",
    "source": "S05 Task 20b • COALESCE(comm, sal) Bilan Saralash",
    "title": "Komissiyasi Yo'qlarga Maoshni Ishlatish",
    "story": "Agar xodimda komissiya bo'lmasa, uni baholashda uning oylik maoshini hisobga olish qoidasi joriy etildi.",
    "taskUz": "Xodim ismi (`ename`), komissiyasi (`comm`), salary (`sal`) and saralash mezonini (`COALESCE(comm, sal) AS sort_andl`) display.",
    "expectedSql": "SELECT ename, comm, sal, COALESCE(comm, sal) AS sort_val FROM emp ORDER BY sort_val DESC",
    "hint": "`SELECT ename, comm, sal, COALESCE(comm, sal) AS sort_val FROM emp ORDER BY sort_val DESC` .",
    "tags": [
      "COALESCE sort",
      "S05 Task 20b"
    ],
    "solutions": [
      "SELECT ename, comm, sal, COALESCE(comm, sal) AS sort_val FROM emp ORDER BY sort_val DESC"
    ],
    "task": "Xodim ismi (`ename`), komissiyasi (`comm`), salary (`sal`) and saralash mezonini (`COALESCE(comm, sal) AS sort_andl`) display.",
    "explanation": ""
  },
  {
    "id": 58,
    "sector": 4,
    "difficulty": "Floor 4 • Intermediate",
    "source": "Chinook DB • Buyurtma Qilmagan Mijozlar",
    "title": "Chinook: Birorta Ham Xarid Qilmagan Mijozlar",
    "story": "Marketing bo'limi ro'yxatdan o'tgan, biroq haligacha birorta buyurtma (invoys) rasmiylashtirmagan yangi mijozlarga promokod yubormoqchi.",
    "taskUz": "Birorta ham invoysi bo'lmagan xaridorlarning ismi (`first_name`), familiyasi (`last_name`) and shahrini (`city`) `customer LEFT JOIN invoice` via display.",
    "expectedSql": "SELECT c.first_name, c.last_name, c.city FROM customer c LEFT JOIN invoice i ON c.customer_id = i.customer_id WHERE i.invoice_id IS NULL",
    "hint": "`WHERE i.invoice_id IS NULL` filtri orqali anti-join qiling.",
    "tags": [
      "Chinook",
      "Anti-Join",
      "customer"
    ],
    "solutions": [
      "SELECT c.first_name, c.last_name, c.city FROM customer c LEFT JOIN invoice i ON c.customer_id = i.customer_id WHERE i.invoice_id IS NULL"
    ],
    "task": "Birorta ham invoysi bo'lmagan xaridorlarning ismi (`first_name`), familiyasi (`last_name`) and shahrini (`city`) `customer LEFT JOIN invoice` via display.",
    "explanation": ""
  },
  {
    "id": 59,
    "sector": 4,
    "difficulty": "Floor 4 • Hard",
    "source": "S05 Useful Functions • NULLIF Bo'lishdan Himoya",
    "title": "Nolga Bo'lishdan Himoya (NULLIF)",
    "story": "`NULLIF(comm, 0)` agar komissiya 0 bo'lsa, uni NULL ga aylantiradi va 'division by zero' xatosini oldini oladi.",
    "taskUz": "Sotuvchilarning (`job = 'SALESMAN'`) ismi (`ename`), komissiyasi (`comm`) and `NULLIF(comm, 0)` qiymatini display.",
    "expectedSql": "SELECT ename, comm, NULLIF(comm, 0) AS safe_comm FROM emp WHERE job = 'SALESMAN'",
    "hint": "`SELECT ename, comm, NULLIF(comm, 0) AS safe_comm FROM emp WHERE job = 'SALESMAN'` .",
    "tags": [
      "NULLIF",
      "Division by zero"
    ],
    "solutions": [
      "SELECT ename, comm, NULLIF(comm, 0) AS safe_comm FROM emp WHERE job = 'SALESMAN'"
    ],
    "task": "Sotuvchilarning (`job = 'SALESMAN'`) ismi (`ename`), komissiyasi (`comm`) and `NULLIF(comm, 0)` qiymatini display.",
    "explanation": ""
  },
  {
    "id": 60,
    "sector": 4,
    "difficulty": "Floor 4 • Sarhisob",
    "source": "S05 Task 11–20 • 4-Qavat Bosh Imtihoni",
    "title": "4-Qavat Bosh Imtihoni: Mukammal Anti-Join & NULL",
    "story": "4-qavat liftini ochish uchun hech qanday loyihaga biriktirilmagan xodimlar va ularning bo'lim nomini aniq topib bering.",
    "taskUz": "Birorta ham loyihaga biriktirilmagan employee name (`ename`), ularning bo'lim nomi (`dname`) and salaryni (`sal`) `emp` ni `works_on` ga `LEFT JOIN` qilib, `WHERE w.empno IS NULL` via display.",
    "expectedSql": "SELECT e.ename, d.dname, e.sal FROM emp e JOIN dept d ON e.deptno = d.deptno LEFT JOIN works_on w ON e.empno = w.empno WHERE w.empno IS NULL",
    "hint": "`emp` ni `dept` bilan `JOIN`, `works_on` bilan esa `LEFT JOIN` qilib, `WHERE w.empno IS NULL` bering.",
    "tags": [
      "Floor 4 Boss",
      "Anti-Join",
      "Unassigned staff"
    ],
    "solutions": [
      "SELECT e.ename, d.dname, e.sal FROM emp e JOIN dept d ON e.deptno = d.deptno LEFT JOIN works_on w ON e.empno = w.empno WHERE w.empno IS NULL"
    ],
    "task": "Birorta ham loyihaga biriktirilmagan employee name (`ename`), ularning bo'lim nomi (`dname`) and salaryni (`sal`) `emp` ni `works_on` ga `LEFT JOIN` qilib, `WHERE w.empno IS NULL` via display.",
    "explanation": ""
  },
  {
    "id": 61,
    "sector": 5,
    "difficulty": "Floor 5 • Easy",
    "source": "S05 Task 10c • FULL JOIN dept & emp",
    "title": "FULL OUTER JOIN: Ikki Tomonlama Tashqi Ulam",
    "story": "FULL JOIN ikkala jadvalning barcha qatorlarini saqlaydi — xodimsiz bo'limlar ham, bo'limsiz xodimlar ham ro'yxatda qoladi.",
    "taskUz": "Bo'lim nomi (`dname`) and xodim ismini (`ename`) `dept FULL JOIN emp ON dept.deptno = emp.deptno` via display.",
    "expectedSql": "SELECT d.dname, e.ename FROM dept d FULL JOIN emp e ON d.deptno = e.deptno",
    "hint": "`dept d FULL JOIN emp e ON d.deptno = e.deptno` .",
    "tags": [
      "FULL JOIN",
      "S05 Task 10c"
    ],
    "solutions": [
      "SELECT d.dname, e.ename FROM dept d FULL JOIN emp e ON d.deptno = e.deptno"
    ],
    "task": "Bo'lim nomi (`dname`) and xodim ismini (`ename`) `dept FULL JOIN emp ON dept.deptno = emp.deptno` via display.",
    "explanation": ""
  },
  {
    "id": 62,
    "sector": 5,
    "difficulty": "Floor 5 • Easy",
    "source": "L05 Engineering • FULL JOIN dept & project",
    "title": "Bo'limlar va Loyihalar FULL JOIN",
    "story": "Kompaniyadagi barcha bo'limlar va barcha loyihalarni ikkala tomondan ham yo'qotmasdan birlashtiring.",
    "taskUz": "Bo'lim nomi (`dname`) and loyiha nomini (`pname`) `dept FULL JOIN project ON dept.deptno = project.deptno` via display.",
    "expectedSql": "SELECT d.dname, p.pname FROM dept d FULL JOIN project p ON d.deptno = p.deptno",
    "hint": "`dept d FULL JOIN project p ON d.deptno = p.deptno` ulamini qo'llang.",
    "tags": [
      "FULL JOIN",
      "dept",
      "project"
    ],
    "solutions": [
      "SELECT d.dname, p.pname FROM dept d FULL JOIN project p ON d.deptno = p.deptno"
    ],
    "task": "Bo'lim nomi (`dname`) and loyiha nomini (`pname`) `dept FULL JOIN project ON dept.deptno = project.deptno` via display.",
    "explanation": ""
  },
  {
    "id": 63,
    "sector": 5,
    "difficulty": "Floor 5 • Easy",
    "source": "S05 Appendix • CROSS JOIN Tushunchasi",
    "title": "CROSS JOIN: Dekart Ko'paytma Asosi",
    "story": "CROSS JOIN hech qanday shartisiz ikkala jadvalning har bir qatorini bir-biriga ko'paytiradi (14 x 4 = 56 qator).",
    "taskUz": "Xodim ismi (`ename`) and department name (`dname`) `emp CROSS JOIN dept` via display.",
    "expectedSql": "SELECT e.ename, d.dname FROM emp e CROSS JOIN dept d",
    "hint": "`emp e CROSS JOIN dept d` .",
    "tags": [
      "CROSS JOIN",
      "Cartesian Product"
    ],
    "solutions": [
      "SELECT e.ename, d.dname FROM emp e CROSS JOIN dept d"
    ],
    "task": "Xodim ismi (`ename`) and department name (`dname`) `emp CROSS JOIN dept` via display.",
    "explanation": ""
  },
  {
    "id": 64,
    "sector": 5,
    "difficulty": "Floor 5 • Easy",
    "source": "L05 Engineering • Xodimlar x Loyihalar Matritsasi",
    "title": "Barcha Xodim va Loyiha Juftliklari",
    "story": "Resurslarni rejalashtirishda barcha 14 ta xodimni mavjud 5 ta loyihaga birma-bir moslash matritsasi kerak bo'ldi.",
    "taskUz": "Xodim ismi (`ename`) and loyiha nomini (`pname`) `emp CROSS JOIN project` via display.",
    "expectedSql": "SELECT e.ename, p.pname FROM emp e CROSS JOIN project p",
    "hint": "`SELECT e.ename, p.pname FROM emp e CROSS JOIN project p` .",
    "tags": [
      "CROSS JOIN",
      "Resource Matrix"
    ],
    "solutions": [
      "SELECT e.ename, p.pname FROM emp e CROSS JOIN project p"
    ],
    "task": "Xodim ismi (`ename`) and loyiha nomini (`pname`) `emp CROSS JOIN project` via display.",
    "explanation": ""
  },
  {
    "id": 65,
    "sector": 5,
    "difficulty": "Floor 5 • Intermediate",
    "source": "S05 Appendix • Bo'limlar x Maosh Razryadlari",
    "title": "Bo'limlar va Maosh Shkalasi Matritsasi",
    "story": "Kompaniya 4 ta bo'lim uchun 5 ta maosh razryadining kombinatsiyalangan tarif setkasini shakllantirmoqda.",
    "taskUz": "Bo'lim nomi (`dname`) and maosh razryadini (`grade`) `dept CROSS JOIN salgrade` via display.",
    "expectedSql": "SELECT d.dname, s.grade FROM dept d CROSS JOIN salgrade s",
    "hint": "`dept d CROSS JOIN salgrade s` orqali dekart ko'paytma hosil qiling.",
    "tags": [
      "CROSS JOIN",
      "salgrade"
    ],
    "solutions": [
      "SELECT d.dname, s.grade FROM dept d CROSS JOIN salgrade s"
    ],
    "task": "Bo'lim nomi (`dname`) and maosh razryadini (`grade`) `dept CROSS JOIN salgrade` via display.",
    "explanation": ""
  },
  {
    "id": 66,
    "sector": 5,
    "difficulty": "Floor 5 • Intermediate",
    "source": "Chinook DB • Janrlar x Pleylistlar Matritsasi",
    "title": "Chinook: Janrlar va Albomlar Matritsasi",
    "story": "Tavsiya tizimi algoritmi har bir janrni mavjud albomlar bilan o'zaro kombinatsiyasini tekshirmoqda.",
    "taskUz": "Janr nomi (`g.name`) and albom sarlavhasini (`al.title`) `genre CROSS JOIN album` via display.",
    "expectedSql": "SELECT g.name AS genre_name, al.title FROM genre g CROSS JOIN album al",
    "hint": "`genre g CROSS JOIN album al` bog'lanishidan foydalaning.",
    "tags": [
      "Chinook",
      "CROSS JOIN",
      "genre",
      "album"
    ],
    "solutions": [
      "SELECT g.name AS genre_name, al.title FROM genre g CROSS JOIN album al"
    ],
    "task": "Janr nomi (`g.name`) and albom sarlavhasini (`al.title`) `genre CROSS JOIN album` via display.",
    "explanation": ""
  },
  {
    "id": 67,
    "sector": 5,
    "difficulty": "Floor 5 • Intermediate",
    "source": "S05 Task 10c • FULL JOIN Ulam Topilmagan Qatorlar",
    "title": "FULL JOIN da Ulanmagan Tomonni Aniqlash",
    "story": "FULL JOIN qilinganda ulam topilmagan qatorlar `NULL` bilan to'ldiriladi. Xodimi yo'q bo'limlarni aniqlang.",
    "taskUz": "Bo'lim nomi (`dname`) and xodim ismini (`ename`) `dept FULL JOIN emp` qilib, faqat `e.empno IS NULL` bo'lgan qatorni display.",
    "expectedSql": "SELECT d.dname, e.ename FROM dept d FULL JOIN emp e ON d.deptno = e.deptno WHERE e.empno IS NULL",
    "hint": "`WHERE e.empno IS NULL` shartini qo'ying.",
    "tags": [
      "FULL JOIN",
      "IS NULL"
    ],
    "solutions": [
      "SELECT d.dname, e.ename FROM dept d FULL JOIN emp e ON d.deptno = e.deptno WHERE e.empno IS NULL"
    ],
    "task": "Bo'lim nomi (`dname`) and xodim ismini (`ename`) `dept FULL JOIN emp` qilib, faqat `e.empno IS NULL` bo'lgan qatorni display.",
    "explanation": ""
  },
  {
    "id": 68,
    "sector": 5,
    "difficulty": "Floor 5 • Intermediate",
    "source": "L05 Engineering • Loyihalar va Xodimlar FULL JOIN",
    "title": "Loyihalar va Xodimlar Birikmasi FULL JOIN",
    "story": "Loyihalar va ularga biriktirilgan soatlar haqidagi ma'lumotni to'liq tashqi bog'lang.",
    "taskUz": "Loyiha nomi (`pname`) and biriktirilgan soatlarini (`hours`) `project p FULL JOIN works_on w ON p.pno = w.pno` via display.",
    "expectedSql": "SELECT p.pname, w.hours FROM project p FULL JOIN works_on w ON p.pno = w.pno",
    "hint": "`project p FULL JOIN works_on w ON p.pno = w.pno` .",
    "tags": [
      "FULL JOIN",
      "project",
      "works_on"
    ],
    "solutions": [
      "SELECT p.pname, w.hours FROM project p FULL JOIN works_on w ON p.pno = w.pno"
    ],
    "task": "Loyiha nomi (`pname`) and biriktirilgan soatlarini (`hours`) `project p FULL JOIN works_on w ON p.pno = w.pno` via display.",
    "explanation": ""
  },
  {
    "id": 69,
    "sector": 5,
    "difficulty": "Floor 5 • Intermediate",
    "source": "S05 Appendix • CROSS JOIN va WHERE Filtrlash",
    "title": "CROSS JOIN va WHERE Bilan Tenglik Filtrlash",
    "story": "Qadimiy SQL da `INNER JOIN` o'rniga aynan `CROSS JOIN` qilinib, keyin `WHERE` bilan filtrlangan.",
    "taskUz": "`emp CROSS JOIN dept` qilib, `WHERE e.deptno = d.deptno` via xodim ismi (`ename`) and department name (`dname`) display.",
    "expectedSql": "SELECT e.ename, d.dname FROM emp e CROSS JOIN dept d WHERE e.deptno = d.deptno",
    "hint": "`FROM emp e CROSS JOIN dept d WHERE e.deptno = d.deptno` .",
    "tags": [
      "CROSS JOIN",
      "WHERE Theta Join"
    ],
    "solutions": [
      "SELECT e.ename, d.dname FROM emp e CROSS JOIN dept d WHERE e.deptno = d.deptno"
    ],
    "task": "`emp CROSS JOIN dept` qilib, `WHERE e.deptno = d.deptno` via xodim ismi (`ename`) and department name (`dname`) display.",
    "explanation": ""
  },
  {
    "id": 70,
    "sector": 5,
    "difficulty": "Floor 5 • Intermediate",
    "source": "L05 Engineering • Loyihalar x Bo'limlar Hajmi",
    "title": "Loyiha va Bo'lim Matritsasi Saralash Bilan",
    "story": "Korporativ byudjet rejalashtirishda barcha loyihalar va bo'limlar juftligi alifbo bo'yicha taqsimlanadi.",
    "taskUz": "Loyiha nomi (`pname`) and department name (`dname`) `project CROSS JOIN dept` via chiqarib, loyiha nomi bo'yicha order by.",
    "expectedSql": "SELECT p.pname, d.dname FROM project p CROSS JOIN dept d ORDER BY p.pname",
    "hint": "`SELECT p.pname, d.dname FROM project p CROSS JOIN dept d ORDER BY p.pname` .",
    "tags": [
      "CROSS JOIN",
      "ORDER BY"
    ],
    "solutions": [
      "SELECT p.pname, d.dname FROM project p CROSS JOIN dept d ORDER BY p.pname"
    ],
    "task": "Loyiha nomi (`pname`) and department name (`dname`) `project CROSS JOIN dept` via chiqarib, loyiha nomi bo'yicha order by.",
    "explanation": ""
  },
  {
    "id": 71,
    "sector": 5,
    "difficulty": "Floor 5 • Intermediate",
    "source": "Chinook DB • Treklar x Janrlar CROSS",
    "title": "Chinook: Narx va Janrlar Matritsasi",
    "story": "Musiqa katalogidagi narx kategoriyalari bilan janrlar kombinatsiyasini tekshiring.",
    "taskUz": "Janr nomi (`g.name`) and albom sarlavhasini (`al.title`) `CROSS JOIN` qilib, faqat `Rock` janriga tegishli qatorlarni display.",
    "expectedSql": "SELECT g.name AS genre_name, al.title FROM genre g CROSS JOIN album al WHERE g.name = 'Rock'",
    "hint": "`WHERE g.name = 'Rock'` shartini kiriting.",
    "tags": [
      "Chinook",
      "CROSS JOIN",
      "WHERE"
    ],
    "solutions": [
      "SELECT g.name AS genre_name, al.title FROM genre g CROSS JOIN album al WHERE g.name = 'Rock'"
    ],
    "task": "Janr nomi (`g.name`) and albom sarlavhasini (`al.title`) `CROSS JOIN` qilib, faqat `Rock` janriga tegishli qatorlarni display.",
    "explanation": ""
  },
  {
    "id": 72,
    "sector": 5,
    "difficulty": "Floor 5 • Hard",
    "source": "S05 Task 10c • 3 Jadvalli FULL JOIN",
    "title": "3 Jadvalli To'liq Tashqi Zanjir",
    "story": "Bo'limlar, xodimlar va ularning loyihalari o'rtasidagi ikki tomonlama bog'liqlikni FULL JOIN zanjiri orqali aks ettiring.",
    "taskUz": "Bo'lim nomi (`dname`), xodim ismi (`ename`) and loyiha raqamini (`w.pno`) `dept FULL JOIN emp` and keyin `FULL JOIN works_on` via display.",
    "expectedSql": "SELECT d.dname, e.ename, w.pno FROM dept d FULL JOIN emp e ON d.deptno = e.deptno FULL JOIN works_on w ON e.empno = w.empno",
    "hint": "Ikkita ketma-ket `FULL JOIN` sintaksisini qo'llang.",
    "tags": [
      "Chained FULL JOIN"
    ],
    "solutions": [
      "SELECT d.dname, e.ename, w.pno FROM dept d FULL JOIN emp e ON d.deptno = e.deptno FULL JOIN works_on w ON e.empno = w.empno"
    ],
    "task": "Bo'lim nomi (`dname`), xodim ismi (`ename`) and loyiha raqamini (`w.pno`) `dept FULL JOIN emp` and keyin `FULL JOIN works_on` via display.",
    "explanation": ""
  },
  {
    "id": 73,
    "sector": 5,
    "difficulty": "Floor 5 • Hard",
    "source": "L05 Storage Slides 11–17 • Qatorlar Hajmini Hisoblash",
    "title": "CROSS JOIN Qatorlar Hajmini (Rows) Hisoblash",
    "story": "Nazariy hisob-kitob: Agar 14 ta xodim va 4 ta bo'lim bo'lsa, Dekart ko'paytma nechta qator berishini hisoblang.",
    "taskUz": "14 and 4 sonlarini ko'paytirib, natijani `cartesian_rows` deb nomlang (`SELECT 14 * 4 AS cartesian_rows`).",
    "expectedSql": "SELECT 14 * 4 AS cartesian_rows",
    "hint": "`SELECT 14 * 4 AS cartesian_rows` .",
    "tags": [
      "Cartesian Calculation",
      "L05 Theory"
    ],
    "solutions": [
      "SELECT 14 * 4 AS cartesian_rows"
    ],
    "task": "14 and 4 sonlarini ko'paytirib, natijani `cartesian_rows` deb nomlang (`SELECT 14 * 4 AS cartesian_rows`).",
    "explanation": ""
  },
  {
    "id": 74,
    "sector": 5,
    "difficulty": "Floor 5 • Hard",
    "source": "Chinook DB • Customer & Artist FULL JOIN",
    "title": "Mijozlar va Ijrochilar Matritsasi",
    "story": "Germaniyalik mijozlar bilan AC/DC guruhi albomlarini o'zaro taqqoslash uchun kichik dekart matritsasini tuzing.",
    "taskUz": "Mijoz familiyasi (`last_name`) and albom sarlavhasini (`title`) `customer CROSS JOIN album` qilib, `c.country = 'Germany'` sharti bilan display.",
    "expectedSql": "SELECT c.last_name, al.title FROM customer c CROSS JOIN album al WHERE c.country = 'Germany'",
    "hint": "`WHERE c.country = 'Germany'` filtri bilan cheklang.",
    "tags": [
      "CROSS JOIN",
      "Germany"
    ],
    "solutions": [
      "SELECT c.last_name, al.title FROM customer c CROSS JOIN album al WHERE c.country = 'Germany'"
    ],
    "task": "Mijoz familiyasi (`last_name`) and albom sarlavhasini (`title`) `customer CROSS JOIN album` qilib, `c.country = 'Germany'` sharti bilan display.",
    "explanation": ""
  },
  {
    "id": 75,
    "sector": 5,
    "difficulty": "Floor 5 • Sarhisob",
    "source": "S05 Task 10c & CROSS • 5-Qavat Bosh Imtihoni",
    "title": "5-Qavat Bosh Imtihoni: Katta Tashqi Matritsa",
    "story": "5-qavat liftini ochish uchun xodimlar va loyihalarning to'liq tashqi bog'lanishini (FULL JOIN) amalga oshiring.",
    "taskUz": "Xodim ismi (`ename`), biriktirilgan loyiha raqami (`w.pno`) and ishlangan soatlarini (`w.hours`) `emp FULL JOIN works_on ON emp.empno = works_on.empno` via display.",
    "expectedSql": "SELECT e.ename, w.pno, w.hours FROM emp e FULL JOIN works_on w ON e.empno = w.empno",
    "hint": "`emp e FULL JOIN works_on w ON e.empno = w.empno` .",
    "tags": [
      "Floor 5 Boss",
      "FULL JOIN",
      "works_on"
    ],
    "solutions": [
      "SELECT e.ename, w.pno, w.hours FROM emp e FULL JOIN works_on w ON e.empno = w.empno"
    ],
    "task": "Xodim ismi (`ename`), biriktirilgan loyiha raqami (`w.pno`) and ishlangan soatlarini (`w.hours`) `emp FULL JOIN works_on ON emp.empno = works_on.empno` via display.",
    "explanation": ""
  },
  {
    "id": 76,
    "sector": 6,
    "difficulty": "Floor 6 • Easy",
    "source": "S05 Task 3 • Basic Self-Join",
    "title": "Xodim va Uning Bevosita Rahbari (Self-Join)",
    "story": "Kompaniya ierarxiyasida `supervisor` ustuni xodimning bevosita rahbarining `empno` sini saqlaydi.",
    "taskUz": "Xodim ismi (`ename`) and uning rahbari ismini (`m.ename AS manager`) `emp e JOIN emp m ON e.supervisor = m.empno` via display.",
    "expectedSql": "SELECT e.ename, m.ename AS manager FROM emp e JOIN emp m ON e.supervisor = m.empno",
    "hint": "`emp e JOIN emp m ON e.supervisor = m.empno` .",
    "tags": [
      "SELF JOIN",
      "S05 Task 3"
    ],
    "solutions": [
      "SELECT e.ename, m.ename AS manager FROM emp e JOIN emp m ON e.supervisor = m.empno"
    ],
    "task": "Xodim ismi (`ename`) and uning rahbari ismini (`m.ename AS manager`) `emp e JOIN emp m ON e.supervisor = m.empno` via display.",
    "explanation": ""
  },
  {
    "id": 77,
    "sector": 6,
    "difficulty": "Floor 6 • Easy",
    "source": "S05 Task 3 • Rahbar Bo'yicha Saralash",
    "title": "Rahbar va Xodim Saralashi",
    "story": "Kadrlar hisobotida xodimlar avval rahbarning ismi bo'yicha, so'ngra xodimning o'z ismi bo'yicha alifbo tartibida turishi kerak.",
    "taskUz": "Xodim ismi (`ename`) and rahbari ismini (`manager`) chiqarib, avandl rahbar ismi (`m.ename`), keyin xodim ismi (`e.ename`) bo'yicha order by.",
    "expectedSql": "SELECT e.ename, m.ename AS manager FROM emp e JOIN emp m ON e.supervisor = m.empno ORDER BY m.ename, e.ename",
    "hint": "`ORDER BY m.ename, e.ename` .",
    "tags": [
      "SELF JOIN",
      "ORDER BY"
    ],
    "solutions": [
      "SELECT e.ename, m.ename AS manager FROM emp e JOIN emp m ON e.supervisor = m.empno ORDER BY m.ename, e.ename"
    ],
    "task": "Xodim ismi (`ename`) and rahbari ismini (`manager`) chiqarib, avandl rahbar ismi (`m.ename`), keyin xodim ismi (`e.ename`) bo'yicha order by.",
    "explanation": ""
  },
  {
    "id": 78,
    "sector": 6,
    "difficulty": "Floor 6 • Intermediate",
    "source": "S05 Task 6 • Rahbaridan Ko'p Oluvchilar",
    "title": "O'z Rahbaridan Ko'p Maosh Oluvchi Xodimlar",
    "story": "Noyob korporativ anomaliya: qaysi xodimlar o'zlarining to'g'ridan-to'g'ri rahbaridan ko'proq oylik maosh oladi?",
    "taskUz": "O'z rahbaridan ko'p maosh oluvchi employee name (`e.ename`), lavozimi (`e.job`), salary (`e.sal`), rahbari ismi (`m.ename`) and rahbar salaryni (`m.sal`) display.",
    "expectedSql": "SELECT e.ename, e.job, e.sal, m.ename AS manager, m.sal AS manager_sal FROM emp e JOIN emp m ON e.supervisor = m.empno WHERE e.sal > m.sal",
    "hint": "`WHERE e.sal > m.sal` shartini qo'shing.",
    "tags": [
      "S05 Task 6",
      "SELF JOIN",
      "e.sal > m.sal"
    ],
    "solutions": [
      "SELECT e.ename, e.job, e.sal, m.ename AS manager, m.sal AS manager_sal FROM emp e JOIN emp m ON e.supervisor = m.empno WHERE e.sal > m.sal"
    ],
    "task": "O'z rahbaridan ko'p maosh oluvchi employee name (`e.ename`), lavozimi (`e.job`), salary (`e.sal`), rahbari ismi (`m.ename`) and rahbar salaryni (`m.sal`) display.",
    "explanation": ""
  },
  {
    "id": 79,
    "sector": 6,
    "difficulty": "Floor 6 • Intermediate",
    "source": "S05 Task 6 • Maosh Farqi",
    "title": "Rahbar Bilan Maosh Farqini Hisoblash",
    "story": "Moliyaviy audit uchun xodim va uning rahbari maoshi o'rtasidagi farqni (`e.sal - m.sal`) hisoblab chiqaring.",
    "taskUz": "Xodim ismi (`ename`), salary (`sal`), rahbar salary (`manager_sal`) and ular orasidagi farqni (`e.sal - m.sal AS diff`) `e.sal > m.sal` bo'lganlar uchun display.",
    "expectedSql": "SELECT e.ename, e.sal, m.sal AS manager_sal, e.sal - m.sal AS diff FROM emp e JOIN emp m ON e.supervisor = m.empno WHERE e.sal > m.sal",
    "hint": "`e.sal - m.sal AS diff` ifodasini qo'llang.",
    "tags": [
      "S05 Task 6",
      "Arithmetic diff"
    ],
    "solutions": [
      "SELECT e.ename, e.sal, m.sal AS manager_sal, e.sal - m.sal AS diff FROM emp e JOIN emp m ON e.supervisor = m.empno WHERE e.sal > m.sal"
    ],
    "task": "Xodim ismi (`ename`), salary (`sal`), rahbar salary (`manager_sal`) and ular orasidagi farqni (`e.sal - m.sal AS diff`) `e.sal > m.sal` bo'lganlar uchun display.",
    "explanation": ""
  },
  {
    "id": 80,
    "sector": 6,
    "difficulty": "Floor 6 • Intermediate",
    "source": "S05 Task 4 • Aniq Rahbarlar Qo'l Ostidagilar",
    "title": "KING, BLAKE va JONES Qo'l Ostidagi Xodimlar",
    "story": "Korporatsiyaning eng asosiy 3 ta yetakchisi: KING, BLAKE va JONES boshqarayotgan xodimlarni aniqlang.",
    "taskUz": "Xodim ismi (`ename`) and rahbar ismini (`manager`) chiqarib, faqat rahbari 'KING', 'BLAKE' yoki 'JONES' bo'lganlarni order by.",
    "expectedSql": "SELECT e.ename, m.ename AS manager FROM emp e JOIN emp m ON e.supervisor = m.empno WHERE m.ename IN ('KING', 'BLAKE', 'JONES')",
    "hint": "`WHERE m.ename IN ('KING', 'BLAKE', 'JONES')` shartini bering.",
    "tags": [
      "S05 Task 4",
      "IN ('KING', 'BLAKE', 'JONES')"
    ],
    "solutions": [
      "SELECT e.ename, m.ename AS manager FROM emp e JOIN emp m ON e.supervisor = m.empno WHERE m.ename IN ('KING', 'BLAKE', 'JONES')"
    ],
    "task": "Xodim ismi (`ename`) and rahbar ismini (`manager`) chiqarib, faqat rahbari 'KING', 'BLAKE' yoki 'JONES' bo'lganlarni order by.",
    "explanation": ""
  },
  {
    "id": 81,
    "sector": 6,
    "difficulty": "Floor 6 • Intermediate",
    "source": "S05 Task 4 • Nega SMITH Chiqmaydi?",
    "title": "SMITH Boshqarayotgan Xodimlar (0 Ta Qator)",
    "story": "Nega SMITH rahbar sifatida qidirilganda 0 ta qator chiqadi? Chunki SMITH oddiy kotib bo'lib, uning qo'l ostida hech kim ishlamaydi!",
    "taskUz": "Rahbari ismi 'SMITH' bo'lgan employee name (`ename`) and rahbar ismini (`manager`) display. (natija 0 ta qator qaytaradi).",
    "expectedSql": "SELECT e.ename, m.ename AS manager FROM emp e JOIN emp m ON e.supervisor = m.empno WHERE m.ename = 'SMITH'",
    "hint": "`WHERE m.ename = 'SMITH'` .",
    "tags": [
      "S05 Task 4",
      "Zero rows proof"
    ],
    "solutions": [
      "SELECT e.ename, m.ename AS manager FROM emp e JOIN emp m ON e.supervisor = m.empno WHERE m.ename = 'SMITH'"
    ],
    "task": "Rahbari ismi 'SMITH' bo'lgan employee name (`ename`) and rahbar ismini (`manager`) display. (natija 0 ta qator qaytaradi).",
    "explanation": ""
  },
  {
    "id": 82,
    "sector": 6,
    "difficulty": "Floor 6 • Hard",
    "source": "S05 Task 8 • 3 Pog'onali Ierarxiya",
    "title": "3 Pog'onali Shajara: Xodim < Rahbar < Katta Rahbar",
    "story": "Boshqaruv vertikalini to'liq ko'rish: Xodim -> Uning bevosita rahbari -> Rahbarning ham rahbari.",
    "taskUz": "Xodim ismi (`e.ename`), to'g'ridan-to'g'ri rahbari (`m.ename AS manager`) and rahbarining rahbari ismini (`mm.ename AS big_boss`) 3 ta `emp` ulamidan foydalanib display.",
    "expectedSql": "SELECT e.ename, m.ename AS manager, mm.ename AS big_boss FROM emp e JOIN emp m ON e.supervisor = m.empno JOIN emp mm ON m.supervisor = mm.empno",
    "hint": "`emp e JOIN emp m ON e.supervisor = m.empno JOIN emp mm ON m.supervisor = mm.empno` .",
    "tags": [
      "S05 Task 8",
      "3-Level Hierarchy"
    ],
    "solutions": [
      "SELECT e.ename, m.ename AS manager, mm.ename AS big_boss FROM emp e JOIN emp m ON e.supervisor = m.empno JOIN emp mm ON m.supervisor = mm.empno"
    ],
    "task": "Xodim ismi (`e.ename`), to'g'ridan-to'g'ri rahbari (`m.ename AS manager`) and rahbarining rahbari ismini (`mm.ename AS big_boss`) 3 ta `emp` ulamidan foydalanib display.",
    "explanation": ""
  },
  {
    "id": 83,
    "sector": 6,
    "difficulty": "Floor 6 • Hard",
    "source": "S05 Task 9 • Hamkasblar Juftligi",
    "title": "Bir Xil Bo'limdagi Hamkasblar Juftligi (< Operator)",
    "story": "Bir xil bo'limda bir xil lavozimda ishlovchi hamkasblar juftligini topish. Har bir juftlik faqat 1 marta chiqishi uchun `e1.empno < e2.empno` shart.",
    "taskUz": "Bir xil bo'limda and bir xil kasbda ishlaydigan xodimlar juftligi: bo'lim raqami (`deptno`), lavozimi (`job`), birinchi xodim (`e1.ename`) and ikkinchi xodim (`e2.ename`) ismlarini display.",
    "expectedSql": "SELECT e1.deptno, e1.job, e1.ename AS emp1, e2.ename AS emp2 FROM emp e1 JOIN emp e2 ON e1.deptno = e2.deptno AND e1.job = e2.job AND e1.empno < e2.empno",
    "hint": "`ON e1.deptno = e2.deptno AND e1.job = e2.job AND e1.empno < e2.empno` tengsizligini qo'llang.",
    "tags": [
      "S05 Task 9",
      "Colleague Pairs"
    ],
    "solutions": [
      "SELECT e1.deptno, e1.job, e1.ename AS emp1, e2.ename AS emp2 FROM emp e1 JOIN emp e2 ON e1.deptno = e2.deptno AND e1.job = e2.job AND e1.empno < e2.empno"
    ],
    "task": "Bir xil bo'limda and bir xil kasbda ishlaydigan xodimlar juftligi: bo'lim raqami (`deptno`), lavozimi (`job`), birinchi xodim (`e1.ename`) and ikkinchi xodim (`e2.ename`) ismlarini display.",
    "explanation": ""
  },
  {
    "id": 84,
    "sector": 6,
    "difficulty": "Floor 6 • Intermediate",
    "source": "Chinook DB H8 • Bir Xil Shahardagi Xaridorlar Juftligi",
    "title": "Chinook: Bir Xil Shaharda Yashovchi Xaridorlar",
    "story": "Mahalliy hamjamiyat tadbirlarini tashkil etish uchun bir shaharda istiqomat qiluvchi mijozlar juftligini shakllantiring.",
    "taskUz": "Shahri (`city`), birinchi xaridor familiyasi (`c1.last_name`) and ikkinchi xaridor familiyasini (`c2.last_name`) `c1.city = c2.city AND c1.customer_id < c2.customer_id` via display.",
    "expectedSql": "SELECT c1.city, c1.last_name AS cust1, c2.last_name AS cust2 FROM customer c1 JOIN customer c2 ON c1.city = c2.city AND c1.customer_id < c2.customer_id",
    "hint": "`customer c1 JOIN customer c2 ON c1.city = c2.city AND c1.customer_id < c2.customer_id` .",
    "tags": [
      "Chinook H8",
      "Customer Pairs"
    ],
    "solutions": [
      "SELECT c1.city, c1.last_name AS cust1, c2.last_name AS cust2 FROM customer c1 JOIN customer c2 ON c1.city = c2.city AND c1.customer_id < c2.customer_id"
    ],
    "task": "Shahri (`city`), birinchi xaridor familiyasi (`c1.last_name`) and ikkinchi xaridor familiyasini (`c2.last_name`) `c1.city = c2.city AND c1.customer_id < c2.customer_id` via display.",
    "explanation": ""
  },
  {
    "id": 85,
    "sector": 6,
    "difficulty": "Floor 6 • Intermediate",
    "source": "S05 A12 • Rahbaridan Oldin Ishga Kirganlar",
    "title": "Rahbaridan Tajribaliroq Xodimlar",
    "story": "Kompaniyada o'z rahbaridan ham oldinroq ishga qabul qilingan (`e.hiredate < m.hiredate`) xodimlarni aniqlang.",
    "taskUz": "Xodim ismi (`ename`), uning ishga kirgan sanasi (`hiredate`), rahbar ismi (`manager`) and rahbarning sanasini (`manager_hiredate`) `e.hiredate < m.hiredate` sharti via display.",
    "expectedSql": "SELECT e.ename, e.hiredate, m.ename AS manager, m.hiredate AS manager_hiredate FROM emp e JOIN emp m ON e.supervisor = m.empno WHERE e.hiredate < m.hiredate",
    "hint": "`WHERE e.hiredate < m.hiredate` shartini tekshiring.",
    "tags": [
      "S05 A12",
      "hiredate comparison"
    ],
    "solutions": [
      "SELECT e.ename, e.hiredate, m.ename AS manager, m.hiredate AS manager_hiredate FROM emp e JOIN emp m ON e.supervisor = m.empno WHERE e.hiredate < m.hiredate"
    ],
    "task": "Xodim ismi (`ename`), uning ishga kirgan sanasi (`hiredate`), rahbar ismi (`manager`) and rahbarning sanasini (`manager_hiredate`) `e.hiredate < m.hiredate` sharti via display.",
    "explanation": ""
  },
  {
    "id": 86,
    "sector": 6,
    "difficulty": "Floor 6 • Intermediate",
    "source": "S05 Task 7 & 14 • Xodim va Rahbar Bo'limlari",
    "title": "Xodim va Uning Rahbari Bo'limlari",
    "story": "Menejer va uning xodimi qaysi bo'limlarda xizmat qilayotganini aniqlang.",
    "taskUz": "Xodim ismi (`ename`), xodim bo'limi (`d.dname`), rahbar ismi (`m.ename`) and rahbar bo'limini (`md.dname AS mgr_dept`) display.",
    "expectedSql": "SELECT e.ename, d.dname, m.ename AS manager, md.dname AS mgr_dept FROM emp e JOIN dept d ON e.deptno = d.deptno JOIN emp m ON e.supervisor = m.empno JOIN dept md ON m.deptno = md.deptno",
    "hint": "4 ta jadvalni bog'lang: `emp e`, `dept d`, `emp m`, `dept md`.",
    "tags": [
      "S05 Task 7",
      "4-Table Hierarchy"
    ],
    "solutions": [
      "SELECT e.ename, d.dname, m.ename AS manager, md.dname AS mgr_dept FROM emp e JOIN dept d ON e.deptno = d.deptno JOIN emp m ON e.supervisor = m.empno JOIN dept md ON m.deptno = md.deptno"
    ],
    "task": "Xodim ismi (`ename`), xodim bo'limi (`d.dname`), rahbar ismi (`m.ename`) and rahbar bo'limini (`md.dname AS mgr_dept`) display.",
    "explanation": ""
  },
  {
    "id": 87,
    "sector": 6,
    "difficulty": "Floor 6 • Intermediate",
    "source": "S05 Appendix • Bir Xil Maosh Oluvchi Hamkasblar",
    "title": "Bir Xil Maosh Oluvchi Xodimlar Juftligi",
    "story": "Kompaniyada bir xil miqdorda maosh oluvchi xodimlar juftligini toping.",
    "taskUz": "salary teng bo'lgan xodimlar juftligi: birinchi xodim (`e1.ename`), ikkinchi xodim (`e2.ename`) and ularning salaryni (`sal`) `e1.sal = e2.sal AND e1.empno < e2.empno` via display.",
    "expectedSql": "SELECT e1.ename AS emp1, e2.ename AS emp2, e1.sal FROM emp e1 JOIN emp e2 ON e1.sal = e2.sal AND e1.empno < e2.empno",
    "hint": "`ON e1.sal = e2.sal AND e1.empno < e2.empno` shartidan foydalaning.",
    "tags": [
      "Colleague Pairs",
      "Same Salary"
    ],
    "solutions": [
      "SELECT e1.ename AS emp1, e2.ename AS emp2, e1.sal FROM emp e1 JOIN emp e2 ON e1.sal = e2.sal AND e1.empno < e2.empno"
    ],
    "task": "salary teng bo'lgan xodimlar juftligi: birinchi xodim (`e1.ename`), ikkinchi xodim (`e2.ename`) and ularning salaryni (`sal`) `e1.sal = e2.sal AND e1.empno < e2.empno` via display.",
    "explanation": ""
  },
  {
    "id": 88,
    "sector": 6,
    "difficulty": "Floor 6 • Hard",
    "source": "S05 Task 7 & 14 • 6 Jadvalli Ulkan Shajara",
    "title": "6 Jadvalli Shajara: Xodim va Rahbar Razryadlari",
    "story": "Xodim va rahbarning bo'limlari hamda maosh razryadlarini yaxlit hisobotga jamlang.",
    "taskUz": "Xodim ismi (`e.ename`), uning razryadi (`s.grade`), rahbar ismi (`m.ename`) and rahbar razryadini (`ms.grade AS mgr_grade`) 6 ta jadandlni joining display.",
    "expectedSql": "SELECT e.ename, s.grade, m.ename AS manager, ms.grade AS mgr_grade FROM emp e JOIN dept d ON e.deptno = d.deptno JOIN salgrade s ON e.sal BETWEEN s.losal AND s.hisal JOIN emp m ON e.supervisor = m.empno JOIN dept md ON m.deptno = md.deptno JOIN salgrade ms ON m.sal BETWEEN ms.losal AND ms.hisal",
    "hint": "`emp`, `dept`, `salgrade` xodim uchun va yana o'sha uchta jadval rahbar uchun birikadi.",
    "tags": [
      "6-Table Mega Join",
      "S05 Task 7"
    ],
    "solutions": [
      "SELECT e.ename, s.grade, m.ename AS manager, ms.grade AS mgr_grade FROM emp e JOIN dept d ON e.deptno = d.deptno JOIN salgrade s ON e.sal BETWEEN s.losal AND s.hisal JOIN emp m ON e.supervisor = m.empno JOIN dept md ON m.deptno = md.deptno JOIN salgrade ms ON m.sal BETWEEN ms.losal AND ms.hisal"
    ],
    "task": "Xodim ismi (`e.ename`), uning razryadi (`s.grade`), rahbar ismi (`m.ename`) and rahbar razryadini (`ms.grade AS mgr_grade`) 6 ta jadandlni joining display.",
    "explanation": ""
  },
  {
    "id": 89,
    "sector": 6,
    "difficulty": "Floor 6 • Hard",
    "source": "S05 Task 14 • LEFT JOIN Bilan KING ni Saqlash",
    "title": "To'liq Shajara (Prezident KING Bilan Birga)",
    "story": "Prezident KING yo'qolib qolmasligi uchun `LEFT JOIN` qo'llang.",
    "taskUz": "Xodim ismi (`e.ename`) and uning rahbari ismini (`m.ename AS manager`) `LEFT JOIN` via chiqarib, alifbo tartibida order by.",
    "expectedSql": "SELECT e.ename, m.ename AS manager FROM emp e LEFT JOIN emp m ON e.supervisor = m.empno ORDER BY e.ename",
    "hint": "`emp e LEFT JOIN emp m ON e.supervisor = m.empno ORDER BY e.ename` .",
    "tags": [
      "LEFT JOIN",
      "KING Included"
    ],
    "solutions": [
      "SELECT e.ename, m.ename AS manager FROM emp e LEFT JOIN emp m ON e.supervisor = m.empno ORDER BY e.ename"
    ],
    "task": "Xodim ismi (`e.ename`) and uning rahbari ismini (`m.ename AS manager`) `LEFT JOIN` via chiqarib, alifbo tartibida order by.",
    "explanation": ""
  },
  {
    "id": 90,
    "sector": 6,
    "difficulty": "Floor 6 • Sarhisob",
    "source": "S05 Task 3–9 • 6-Qavat Bosh Imtihoni",
    "title": "6-Qavat Bosh Imtihoni: Mukammal Ierarxik Zanjir",
    "story": "6-qavat liftini ochish uchun o'z rahbaridan ko'p maosh oluvchilar va ularning bo'lim nomlarini to'liq tekshirib bering.",
    "taskUz": "O'z rahbaridan ko'p maosh oluvchi employee name (`ename`), bo'lim nomi (`dname`), salary (`sal`) and rahbari ismini (`manager`) display.",
    "expectedSql": "SELECT e.ename, d.dname, e.sal, m.ename AS manager FROM emp e JOIN dept d ON e.deptno = d.deptno JOIN emp m ON e.supervisor = m.empno WHERE e.sal > m.sal",
    "hint": "`emp e JOIN dept d ON e.deptno = d.deptno JOIN emp m ON e.supervisor = m.empno WHERE e.sal > m.sal` .",
    "tags": [
      "Floor 6 Boss",
      "Hierarchy Master",
      "e.sal > m.sal"
    ],
    "solutions": [
      "SELECT e.ename, d.dname, e.sal, m.ename AS manager FROM emp e JOIN dept d ON e.deptno = d.deptno JOIN emp m ON e.supervisor = m.empno WHERE e.sal > m.sal"
    ],
    "task": "O'z rahbaridan ko'p maosh oluvchi employee name (`ename`), bo'lim nomi (`dname`), salary (`sal`) and rahbari ismini (`manager`) display.",
    "explanation": ""
  },
  {
    "id": 91,
    "sector": 7,
    "difficulty": "Floor 7 • Easy",
    "source": "S05 Task 21a • MAX() Funksiyasi",
    "title": "Kompaniyadagi Eng Yuqori Oylik Maosh",
    "story": "Bosh direktor lavozim maoshlari tahlilida butun korporatsiya bo'yicha eng katta to'lanadigan maosh summasini so'radi.",
    "taskUz": "`MAX` agregat funksiyasidan foydalanib, xodimlar orasidagi eng katta maoshni (`max_sal`) display.",
    "expectedSql": "SELECT MAX(sal) AS max_sal FROM emp",
    "hint": "`SELECT MAX(sal) AS max_sal FROM emp` .",
    "tags": [
      "MAX",
      "Aggregate",
      "S05 Task 21a"
    ],
    "solutions": [
      "SELECT MAX(sal) AS max_sal FROM emp"
    ],
    "task": "`MAX` agregat funksiyasidan foydalanib, xodimlar orasidagi eng katta maoshni (`max_sal`) display.",
    "explanation": ""
  },
  {
    "id": 92,
    "sector": 7,
    "difficulty": "Floor 7 • Easy",
    "source": "S05 Task 21b • ORDER BY & LIMIT 1",
    "title": "Eng Yuqori Maosh Oluvchi Xodim Ismi",
    "story": "Eng ko'p maosh oluvchi xodimni `ORDER BY ... LIMIT 1` bilan olinadi.",
    "taskUz": "Eng ko'p maosh oluvchi xodimning ismi (`ename`) and salaryni (`sal`) `ORDER BY sal DESC LIMIT 1` via display.",
    "expectedSql": "SELECT ename, sal FROM emp ORDER BY sal DESC LIMIT 1",
    "hint": "`ORDER BY sal DESC LIMIT 1` orqali eng yuqori qatorni ajrating.",
    "tags": [
      "ORDER BY DESC",
      "LIMIT 1"
    ],
    "solutions": [
      "SELECT ename, sal FROM emp ORDER BY sal DESC LIMIT 1"
    ],
    "task": "Eng ko'p maosh oluvchi xodimning ismi (`ename`) and salaryni (`sal`) `ORDER BY sal DESC LIMIT 1` via display.",
    "explanation": ""
  },
  {
    "id": 93,
    "sector": 7,
    "difficulty": "Floor 7 • Easy",
    "source": "S05 Task 22 • Clerklar Statistikasi",
    "title": "Kotiblar (CLERK) Maosh Ko'rsatkichlari",
    "story": "HR bo'limi barcha kotiblarning umumiy soni, eng kam maoshi va eng yuqori maoshini solishtirmoqchi.",
    "taskUz": "'CLERK' lavozimidagi xodimlarning umumiy soni (`clerk_count`), eng kam salary (`min_sal`) and eng yuqori salaryni (`max_sal`) display.",
    "expectedSql": "SELECT COUNT(*) AS clerk_count, MIN(sal) AS min_sal, MAX(sal) AS max_sal FROM emp WHERE job = 'CLERK'",
    "hint": "`SELECT COUNT(*) AS clerk_count, MIN(sal) AS min_sal, MAX(sal) AS max_sal FROM emp WHERE job = 'CLERK'` .",
    "tags": [
      "COUNT",
      "MIN",
      "MAX",
      "CLERK"
    ],
    "solutions": [
      "SELECT COUNT(*) AS clerk_count, MIN(sal) AS min_sal, MAX(sal) AS max_sal FROM emp WHERE job = 'CLERK'"
    ],
    "task": "'CLERK' lavozimidagi xodimlarning umumiy soni (`clerk_count`), eng kam salary (`min_sal`) and eng yuqori salaryni (`max_sal`) display.",
    "explanation": ""
  },
  {
    "id": 94,
    "sector": 7,
    "difficulty": "Floor 7 • Easy",
    "source": "S05 Task 23 • COUNT(*) vs COUNT(comm)",
    "title": "COUNT(*) va COUNT(comm) Farqi",
    "story": "Mukofot jamg'armasini rejalashtirishda barcha xodimlar soni va komissiya oluvchi xodimlar soni yonma-yon solishtiriladi.",
    "taskUz": "All xodimlar soni (`total_emps`) and komissiyasi bor xodimlar sonini (`comm_emps`) `COUNT(*)` and `COUNT(comm)` via display.",
    "expectedSql": "SELECT COUNT(*) AS total_emps, COUNT(comm) AS comm_emps FROM emp",
    "hint": "`SELECT COUNT(*) AS total_emps, COUNT(comm) AS comm_emps FROM emp` .",
    "tags": [
      "COUNT(*)",
      "COUNT(col)",
      "NULL handling"
    ],
    "solutions": [
      "SELECT COUNT(*) AS total_emps, COUNT(comm) AS comm_emps FROM emp"
    ],
    "task": "All xodimlar soni (`total_emps`) and komissiyasi bor xodimlar sonini (`comm_emps`) `COUNT(*)` and `COUNT(comm)` via display.",
    "explanation": ""
  },
  {
    "id": 95,
    "sector": 7,
    "difficulty": "Floor 7 • Intermediate",
    "source": "S05 Task 23c • COUNT(DISTINCT job)",
    "title": "Noyob Lavozimlar va Rahbarlar Soni",
    "story": "Korporatsiyada jami nechta turli xil kasbiy lavozimlar mavjudligini aniqlang.",
    "taskUz": "Kompaniyadagi takrorlanmas noyob kasblar sonini (`unique_jobs`) `COUNT(DISTINCT job)` via display.",
    "expectedSql": "SELECT COUNT(DISTINCT job) AS unique_jobs FROM emp",
    "hint": "`SELECT COUNT(DISTINCT job) AS unique_jobs FROM emp` .",
    "tags": [
      "COUNT(DISTINCT)",
      "Unique Jobs"
    ],
    "solutions": [
      "SELECT COUNT(DISTINCT job) AS unique_jobs FROM emp"
    ],
    "task": "Kompaniyadagi takrorlanmas noyob kasblar sonini (`unique_jobs`) `COUNT(DISTINCT job)` via display.",
    "explanation": ""
  },
  {
    "id": 96,
    "sector": 7,
    "difficulty": "Floor 7 • Intermediate",
    "source": "S05 Task 23e • SUM(sal)",
    "title": "Kompaniyaning Oylik Ish Haqi Fondi (SUM)",
    "story": "Buxgalteriya har oy xodimlarga to'lanadigan jami ish haqi fondini talab qilmoqda.",
    "taskUz": "All xodimlarning maoshlari yig'indisini (`total_salary`) `SUM(sal)` via display.",
    "expectedSql": "SELECT SUM(sal) AS total_salary FROM emp",
    "hint": "`SELECT SUM(sal) AS total_salary FROM emp` .",
    "tags": [
      "SUM(sal)",
      "Payroll"
    ],
    "solutions": [
      "SELECT SUM(sal) AS total_salary FROM emp"
    ],
    "task": "All xodimlarning maoshlari yig'indisini (`total_salary`) `SUM(sal)` via display.",
    "explanation": ""
  },
  {
    "id": 97,
    "sector": 7,
    "difficulty": "Floor 7 • Intermediate",
    "source": "S05 Task 24 • GROUP BY deptno",
    "title": "Bo'limlar Bo'yicha Xodimlar Soni",
    "story": "Har bir bo'limda (`deptno`) nechtadan xodim xizmat qilayotganini guruhlab hisoblang.",
    "taskUz": "Bo'lim raqami (`deptno`) and o'sha bo'limdagi xodimlar sonini (`emp_count`) `GROUP BY deptno` via display.",
    "expectedSql": "SELECT deptno, COUNT(*) AS emp_count FROM emp GROUP BY deptno",
    "hint": "`SELECT deptno, COUNT(*) AS emp_count FROM emp GROUP BY deptno` .",
    "tags": [
      "GROUP BY deptno",
      "S05 Task 24"
    ],
    "solutions": [
      "SELECT deptno, COUNT(*) AS emp_count FROM emp GROUP BY deptno"
    ],
    "task": "Bo'lim raqami (`deptno`) and o'sha bo'limdagi xodimlar sonini (`emp_count`) `GROUP BY deptno` via display.",
    "explanation": ""
  },
  {
    "id": 98,
    "sector": 7,
    "difficulty": "Floor 7 • Intermediate",
    "source": "S05 Task 24 • Bo'lim Nomi Bilan Guruhlash",
    "title": "Bo'lim Nomi Bilan Xodimlar Soni",
    "story": "Hisobotda bo'lim raqami emas, balki tushunarli bo'lim nomi (`dname`) aks etishi talab qilinadi.",
    "taskUz": "Bo'lim nomi (`dname`) and xodimlar sonini (`emp_count`) `emp` and `dept` ni joining, `GROUP BY d.dname` via display.",
    "expectedSql": "SELECT d.dname, COUNT(e.empno) AS emp_count FROM dept d JOIN emp e ON d.deptno = e.deptno GROUP BY d.dname",
    "hint": "`SELECT d.dname, COUNT(e.empno) AS emp_count FROM dept d JOIN emp e ON d.deptno = e.deptno GROUP BY d.dname` .",
    "tags": [
      "GROUP BY dname",
      "JOIN"
    ],
    "solutions": [
      "SELECT d.dname, COUNT(e.empno) AS emp_count FROM dept d JOIN emp e ON d.deptno = e.deptno GROUP BY d.dname"
    ],
    "task": "Bo'lim nomi (`dname`) and xodimlar sonini (`emp_count`) `emp` and `dept` ni joining, `GROUP BY d.dname` via display.",
    "explanation": ""
  },
  {
    "id": 99,
    "sector": 7,
    "difficulty": "Floor 7 • Intermediate",
    "source": "S05 Task 25 • Lavozimlar Bo'yicha O'rtacha Maosh",
    "title": "Lavozimlar Bo'yicha O'rtacha Maosh (AVG)",
    "story": "Har bir kasb egalarining o'rtacha maoshini tahlil qilib, ularni o'rtacha maosh kamayishi tartibida joylashtiring.",
    "taskUz": "Lavozim nomi (`job`) and o'rtacha salaryni (`avg_sal`) `GROUP BY job` via display. Natijani o'rtacha maosh kamayishi bo'yicha order by.",
    "expectedSql": "SELECT job, AVG(sal) AS avg_sal FROM emp GROUP BY job ORDER BY avg_sal DESC",
    "hint": "`SELECT job, AVG(sal) AS avg_sal FROM emp GROUP BY job ORDER BY avg_sal DESC` .",
    "tags": [
      "AVG(sal)",
      "GROUP BY job",
      "ORDER BY DESC"
    ],
    "solutions": [
      "SELECT job, AVG(sal) AS avg_sal FROM emp GROUP BY job ORDER BY avg_sal DESC"
    ],
    "task": "Lavozim nomi (`job`) and o'rtacha salaryni (`avg_sal`) `GROUP BY job` via display. Natijani o'rtacha maosh kamayishi bo'yicha order by.",
    "explanation": ""
  },
  {
    "id": 100,
    "sector": 7,
    "difficulty": "Floor 7 • Intermediate",
    "source": "S05 Task 26 • Bo'limlar Bo'yicha Max va Min Maosh",
    "title": "Bo'limlar Bo'yicha Maosh Diapazoni",
    "story": "Har bir bo'limdagi eng kam va eng ko'p maosh oluvchilar orasidagi tafovutni ko'rish lozim.",
    "taskUz": "Bo'lim nomi (`dname`), eng kam maosh (`min_sal`) and eng ko'p maoshni (`max_sal`) `GROUP BY d.dname` via display.",
    "expectedSql": "SELECT d.dname, MIN(e.sal) AS min_sal, MAX(e.sal) AS max_sal FROM dept d JOIN emp e ON d.deptno = e.deptno GROUP BY d.dname",
    "hint": "`SELECT d.dname, MIN(e.sal) AS min_sal, MAX(e.sal) AS max_sal FROM dept d JOIN emp e ON d.deptno = e.deptno GROUP BY d.dname` .",
    "tags": [
      "MIN",
      "MAX",
      "GROUP BY dname"
    ],
    "solutions": [
      "SELECT d.dname, MIN(e.sal) AS min_sal, MAX(e.sal) AS max_sal FROM dept d JOIN emp e ON d.deptno = e.deptno GROUP BY d.dname"
    ],
    "task": "Bo'lim nomi (`dname`), eng kam maosh (`min_sal`) and eng ko'p maoshni (`max_sal`) `GROUP BY d.dname` via display.",
    "explanation": ""
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = window.QUESTIONS_51_100;
}
