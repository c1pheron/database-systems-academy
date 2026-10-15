var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);

_scope.QUESTIONS_101_150 = [
  {
    "id": 101,
    "sector": 7,
    "difficulty": "Floor 7 • Intermediate",
    "source": "Chinook DB A1 • Janrlar Bo'yicha Treklar",
    "title": "Chinook: Janrlar Bo'yicha Treklar Soni",
    "story": "Chinook kutubxonasida har bir janr bo'yicha nechta audio trek saqlanayotganini hisoblab bering.",
    "taskUz": "Janr nomi (`g.name`) and undagi treklar sonini (`track_count`) `track` and `genre` jadandllarini joining, `GROUP BY g.name` via chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `genre_name`, `track_count`\n• Asosiy jadvallar: `genre`, `track`",
    "expectedSql": "SELECT g.name AS genre_name, COUNT(t.track_id) AS track_count FROM genre g JOIN track t ON g.genre_id = t.genre_id GROUP BY g.name",
    "hint": "`SELECT g.name AS genre_name, COUNT(t.track_id) AS track_count FROM genre g JOIN track t ON g.genre_id = t.genre_id GROUP BY g.name` .",
    "tags": [
      "Chinook A1",
      "COUNT",
      "GROUP BY"
    ],
    "solutions": [
      "SELECT g.name AS genre_name, COUNT(t.track_id) AS track_count FROM genre g JOIN track t ON g.genre_id = t.genre_id GROUP BY g.name"
    ],
    "task": "Janr nomi (`g.name`) and undagi treklar sonini (`track_count`) `track` and `genre` jadandllarini joining, `GROUP BY g.name` via chiqaring.",
    "explanation": ""
  },
  {
    "id": 102,
    "sector": 7,
    "difficulty": "Floor 7 • Intermediate",
    "source": "Chinook DB H6 • Ijrochilar Albomlari Soni",
    "title": "Chinook: Ijrochilar va Ularning Albomlari Soni",
    "story": "Qaysi musiqachi qancha disk chiqarganini hisoblash uchun `artist` va `album` jadvallarini guruhlang.",
    "taskUz": "Ijrochi nomi (`ar.name`) and uning jami albomlari sonini (`album_count`) `GROUP BY ar.name` via chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `name`, `album_count`\n• Asosiy jadvallar: `artist`, `album`",
    "expectedSql": "SELECT ar.name, COUNT(al.album_id) AS album_count FROM artist ar JOIN album al ON ar.artist_id = al.artist_id GROUP BY ar.name",
    "hint": "`SELECT ar.name, COUNT(al.album_id) AS album_count FROM artist ar JOIN album al ON ar.artist_id = al.artist_id GROUP BY ar.name` .",
    "tags": [
      "Chinook H6",
      "COUNT(album_id)"
    ],
    "solutions": [
      "SELECT ar.name, COUNT(al.album_id) AS album_count FROM artist ar JOIN album al ON ar.artist_id = al.artist_id GROUP BY ar.name"
    ],
    "task": "Ijrochi nomi (`ar.name`) and uning jami albomlari sonini (`album_count`) `GROUP BY ar.name` via chiqaring.",
    "explanation": ""
  },
  {
    "id": 103,
    "sector": 7,
    "difficulty": "Floor 7 • Intermediate",
    "source": "Chinook DB H7 • Mamlakatlar Bo'yicha Tushum",
    "title": "Chinook: Mamlakatlar Bo'yicha Jami Tushum",
    "story": "Xalqaro savdo hisobotida har bir billing mamlakati bo'yicha tushgan umumiy to'lov miqdorini hisoblang.",
    "taskUz": "Mamlakat nomi (`billing_country`) and tushgan jami summani (`total_revenue`) `GROUP BY billing_country` via chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `billing_country`, `total_revenue`\n• Asosiy jadvallar: `invoice`",
    "expectedSql": "SELECT billing_country, SUM(total) AS total_revenue FROM invoice GROUP BY billing_country",
    "hint": "`SELECT billing_country, SUM(total) AS total_revenue FROM invoice GROUP BY billing_country` .",
    "tags": [
      "Chinook H7",
      "SUM(total)"
    ],
    "solutions": [
      "SELECT billing_country, SUM(total) AS total_revenue FROM invoice GROUP BY billing_country"
    ],
    "task": "Mamlakat nomi (`billing_country`) and tushgan jami summani (`total_revenue`) `GROUP BY billing_country` via chiqaring.",
    "explanation": ""
  },
  {
    "id": 104,
    "sector": 7,
    "difficulty": "Floor 7 • Hard",
    "source": "L05 Engineering • Loyihalar Bo'yicha Jami Soatlar",
    "title": "Loyihalar Bo'yicha Umumiy Ishlangan Soatlar",
    "story": "Har bir muhandislik loyihasiga butun jamoa tomonidan jami qancha vaqt (soat) sarflanganini aniqlang.",
    "taskUz": "Loyiha nomi (`pname`) and All xodimlar ishlagan jami soatlarni (`total_hours`) `project` and `works_on` ni joining chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `pname`, `total_hours`\n• Asosiy jadvallar: `project`, `works_on`",
    "expectedSql": "SELECT p.pname, SUM(w.hours) AS total_hours FROM project p JOIN works_on w ON p.pno = w.pno GROUP BY p.pname",
    "hint": "`SELECT p.pname, SUM(w.hours) AS total_hours FROM project p JOIN works_on w ON p.pno = w.pno GROUP BY p.pname` .",
    "tags": [
      "SUM(hours)",
      "project",
      "works_on"
    ],
    "solutions": [
      "SELECT p.pname, SUM(w.hours) AS total_hours FROM project p JOIN works_on w ON p.pno = w.pno GROUP BY p.pname"
    ],
    "task": "Loyiha nomi (`pname`) and All xodimlar ishlagan jami soatlarni (`total_hours`) `project` and `works_on` ni joining chiqaring.",
    "explanation": ""
  },
  {
    "id": 105,
    "sector": 7,
    "difficulty": "Floor 7 • Sarhisob",
    "source": "S05 Task 24–26 • 7-Qavat Bosh Imtihoni",
    "title": "7-Qavat Bosh Imtihoni: Korporativ Analitik Svodka",
    "story": "7-qavat portalini ochish uchun bo'limlar bo'yicha xodimlar soni va umumiy oylik byudjetni to'liq hisoblab bering.",
    "taskUz": "Bo'lim nomi (`dname`), undagi xodimlar soni (`emp_count`) and bo'limning jami maosh fondini (`total_sal`) `GROUP BY d.dname` via chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `dname`, `emp_count`, `total_sal`\n• Asosiy jadvallar: `dept`, `emp`",
    "expectedSql": "SELECT d.dname, COUNT(e.empno) AS emp_count, SUM(e.sal) AS total_sal FROM dept d JOIN emp e ON d.deptno = e.deptno GROUP BY d.dname",
    "hint": "`SELECT d.dname, COUNT(e.empno) AS emp_count, SUM(e.sal) AS total_sal FROM dept d JOIN emp e ON d.deptno = e.deptno GROUP BY d.dname` .",
    "tags": [
      "Floor 7 Boss",
      "COUNT",
      "SUM",
      "GROUP BY"
    ],
    "solutions": [
      "SELECT d.dname, COUNT(e.empno) AS emp_count, SUM(e.sal) AS total_sal FROM dept d JOIN emp e ON d.deptno = e.deptno GROUP BY d.dname"
    ],
    "task": "Bo'lim nomi (`dname`), undagi xodimlar soni (`emp_count`) and bo'limning jami maosh fondini (`total_sal`) `GROUP BY d.dname` via chiqaring.",
    "explanation": ""
  },
  {
    "id": 106,
    "sector": 8,
    "difficulty": "Floor 8 • Easy",
    "source": "S05 Task 27 • HAVING COUNT(*) > 1",
    "title": "Xodimlari 1 tadan Ko'p Bo'lgan Guruhlar",
    "story": "`WHERE` bandi individual qatorlarni filtrlaydi, `HAVING` esa guruhlangan natijalarni filtrlaydi. 1 tadan ko'p xodimga ega lavozimlarni toping.",
    "taskUz": "Xodimlari soni 1 tadan ko'p bo'lgan lavozim nomi (`job`) and ularning sonini (`emp_count`) `GROUP BY job HAVING COUNT(*) > 1` via chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `job`, `emp_count`\n• Asosiy jadvallar: `emp`",
    "expectedSql": "SELECT job, COUNT(*) AS emp_count FROM emp GROUP BY job HAVING COUNT(*) > 1",
    "hint": "`GROUP BY job HAVING COUNT(*) > 1` .",
    "tags": [
      "HAVING",
      "COUNT(*) > 1",
      "S05 Task 27"
    ],
    "solutions": [
      "SELECT job, COUNT(*) AS emp_count FROM emp GROUP BY job HAVING COUNT(*) > 1"
    ],
    "task": "Xodimlari soni 1 tadan ko'p bo'lgan lavozim nomi (`job`) and ularning sonini (`emp_count`) `GROUP BY job HAVING COUNT(*) > 1` via chiqaring.",
    "explanation": ""
  },
  {
    "id": 107,
    "sector": 8,
    "difficulty": "Floor 8 • Easy",
    "source": "S05 Task 27 • WHERE va HAVING Birgalikda",
    "title": "WHERE (Maosh > 1000) va HAVING (Soni > 1)",
    "story": "Avval maoshi $1000 dan oshadigan xodimlar filtrlanadi (`WHERE sal > 1000`), so'ngra guruhlar ichidan 1 tadan ko'p xodimi borlari saralanadi (`HAVING COUNT(*) > 1`).",
    "taskUz": "salary 1000 dan katta bo'lgan xodimlardan tashkil topgan and soni 1 tadan ko'p bo'lgan lavozimlar (`job`) and ularning sonini (`emp_count`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `job`, `emp_count`\n• Asosiy jadvallar: `emp`",
    "expectedSql": "SELECT job, COUNT(*) AS emp_count FROM emp WHERE sal > 1000 GROUP BY job HAVING COUNT(*) > 1",
    "hint": "`WHERE sal > 1000 GROUP BY job HAVING COUNT(*) > 1` .",
    "tags": [
      "WHERE vs HAVING",
      "S05 Task 27"
    ],
    "solutions": [
      "SELECT job, COUNT(*) AS emp_count FROM emp WHERE sal > 1000 GROUP BY job HAVING COUNT(*) > 1"
    ],
    "task": "salary 1000 dan katta bo'lgan xodimlardan tashkil topgan and soni 1 tadan ko'p bo'lgan lavozimlar (`job`) and ularning sonini (`emp_count`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 108,
    "sector": 8,
    "difficulty": "Floor 8 • Intermediate",
    "source": "S05 Task 27 • STRING_AGG Funksiyasi",
    "title": "string_agg Bilan Ismlarni Birlashtirish",
    "story": "PostgreSQL ning kuchli `string_agg(ename, ', ')` funksiyasi bir guruhga tegishli barcha ismlarni bitta satrda vergul bilan ajratib beradi.",
    "taskUz": "Har bir lavozim (`job`) and unga tegishli All xodimlar ismlari ro'yxatini (`STRING_AGG(ename, ', ') AS names`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `job`, `STRING_AGG(ename`, `names`\n• Asosiy jadvallar: `emp`",
    "expectedSql": "SELECT job, STRING_AGG(ename, ', ') AS names FROM emp GROUP BY job",
    "hint": "`SELECT job, STRING_AGG(ename, ', ') AS names FROM emp GROUP BY job` .",
    "tags": [
      "string_agg",
      "PostgreSQL feature"
    ],
    "solutions": [
      "SELECT job, STRING_AGG(ename, ', ') AS names FROM emp GROUP BY job"
    ],
    "task": "Har bir lavozim (`job`) and unga tegishli All xodimlar ismlari ro'yxatini (`STRING_AGG(ename, ', ') AS names`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 109,
    "sector": 8,
    "difficulty": "Floor 8 • Intermediate",
    "source": "S05 Task 29 • Ko'p Xodimni Boshqaruvchi Menejerlar",
    "title": "2 tadan Ko'p Xodimni Boshqaradigan Rahbarlar",
    "story": "Katta yuklama ostidagi rahbarlar: o'z qo'l ostida 2 tadan ko'p bo'ysunuvchisi bor menejerlarni toping.",
    "taskUz": "Rahbar ismi (`m.ename AS manager`) and u boshqarayotgan xodimlar sonini (`subordinate_count`) `emp e JOIN emp m ON e.supervisor = m.empno GROUP BY m.ename HAVING COUNT(e.empno) > 2` via chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `manager`, `subordinate_count`\n• Asosiy jadvallar: `emp`",
    "expectedSql": "SELECT m.ename AS manager, COUNT(e.empno) AS subordinate_count FROM emp e JOIN emp m ON e.supervisor = m.empno GROUP BY m.ename HAVING COUNT(e.empno) > 2",
    "hint": "`GROUP BY m.ename HAVING COUNT(e.empno) > 2` .",
    "tags": [
      "S05 Task 29",
      "HAVING COUNT > 2"
    ],
    "solutions": [
      "SELECT m.ename AS manager, COUNT(e.empno) AS subordinate_count FROM emp e JOIN emp m ON e.supervisor = m.empno GROUP BY m.ename HAVING COUNT(e.empno) > 2"
    ],
    "task": "Rahbar ismi (`m.ename AS manager`) and u boshqarayotgan xodimlar sonini (`subordinate_count`) `emp e JOIN emp m ON e.supervisor = m.empno GROUP BY m.ename HAVING COUNT(e.empno) > 2` via chiqaring.",
    "explanation": ""
  },
  {
    "id": 110,
    "sector": 8,
    "difficulty": "Floor 8 • Intermediate",
    "source": "S05 Task 30 • Shartli Agregatsiya (CASE WHEN)",
    "title": "Shartli Agregatsiya: Bo'limdagi Kotiblar Soni",
    "story": "`COUNT(CASE WHEN job = 'CLERK' THEN 1 END)` faqat kotib bo'lgan qatorlarni sanaydi, boshqalarda esa NULL qaytarib hisobga olmaydi.",
    "taskUz": "Har bir bo'lim nomi (`dname`) and undagi aynan kotiblar sonini (`clerk_count`) `COUNT(CASE WHEN e.job = 'CLERK' THEN 1 END)` via chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `dname`, `clerk_count`\n• Asosiy jadvallar: `dept`, `emp`",
    "expectedSql": "SELECT d.dname, COUNT(CASE WHEN e.job = 'CLERK' THEN 1 END) AS clerk_count FROM dept d LEFT JOIN emp e ON d.deptno = e.deptno GROUP BY d.dname",
    "hint": "`COUNT(CASE WHEN e.job = 'CLERK' THEN 1 END) AS clerk_count` iborasidan foydalaning.",
    "tags": [
      "Conditional Aggregation",
      "CASE WHEN",
      "S05 Task 30"
    ],
    "solutions": [
      "SELECT d.dname, COUNT(CASE WHEN e.job = 'CLERK' THEN 1 END) AS clerk_count FROM dept d LEFT JOIN emp e ON d.deptno = e.deptno GROUP BY d.dname"
    ],
    "task": "Har bir bo'lim nomi (`dname`) and undagi aynan kotiblar sonini (`clerk_count`) `COUNT(CASE WHEN e.job = 'CLERK' THEN 1 END)` via chiqaring.",
    "explanation": ""
  },
  {
    "id": 111,
    "sector": 8,
    "difficulty": "Floor 8 • Intermediate",
    "source": "S05 Task 30 • Bo'limdagi Sotuvchilar Soni",
    "title": "Bo'limlar Bo'yicha Sotuvchilar Soni",
    "story": "Har bir bo'limda nechta sotuvchi (`SALESMAN`) borligini bitta so'rovda hisoblang.",
    "taskUz": "Bo'lim nomi (`dname`) and sotuvchilar sonini (`sales_count`) `COUNT(CASE WHEN e.job = 'SALESMAN' THEN 1 END)` via chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `dname`, `sales_count`\n• Asosiy jadvallar: `dept`, `emp`",
    "expectedSql": "SELECT d.dname, COUNT(CASE WHEN e.job = 'SALESMAN' THEN 1 END) AS sales_count FROM dept d LEFT JOIN emp e ON d.deptno = e.deptno GROUP BY d.dname",
    "hint": "`COUNT(CASE WHEN e.job = 'SALESMAN' THEN 1 END) AS sales_count` .",
    "tags": [
      "CASE WHEN",
      "SALESMAN count"
    ],
    "solutions": [
      "SELECT d.dname, COUNT(CASE WHEN e.job = 'SALESMAN' THEN 1 END) AS sales_count FROM dept d LEFT JOIN emp e ON d.deptno = e.deptno GROUP BY d.dname"
    ],
    "task": "Bo'lim nomi (`dname`) and sotuvchilar sonini (`sales_count`) `COUNT(CASE WHEN e.job = 'SALESMAN' THEN 1 END)` via chiqaring.",
    "explanation": ""
  },
  {
    "id": 112,
    "sector": 8,
    "difficulty": "Floor 8 • Intermediate",
    "source": "S05 Task 26 • O'rtacha Maoshi $2000 dan Yuqori Bo'limlar",
    "title": "O'rtacha Maoshi $2,000 dan Yuqori Bo'limlar",
    "story": "Kompaniyaning eng yuqori maosh to'laydigan bo'limlarini aniqlash uchun guruhlash natijasini `HAVING AVG(e.sal) > 2000` bilan filtrlang.",
    "taskUz": "O'rtacha salary 2000 dan katta bo'lgan bo'limlarning nomi (`dname`) and o'rtacha salaryni (`avg_sal`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `dname`, `avg_sal`\n• Asosiy jadvallar: `dept`, `emp`",
    "expectedSql": "SELECT d.dname, AVG(e.sal) AS avg_sal FROM dept d JOIN emp e ON d.deptno = e.deptno GROUP BY d.dname HAVING AVG(e.sal) > 2000",
    "hint": "`GROUP BY d.dname HAVING AVG(e.sal) > 2000` .",
    "tags": [
      "HAVING AVG",
      "Salary Threshold"
    ],
    "solutions": [
      "SELECT d.dname, AVG(e.sal) AS avg_sal FROM dept d JOIN emp e ON d.deptno = e.deptno GROUP BY d.dname HAVING AVG(e.sal) > 2000"
    ],
    "task": "O'rtacha salary 2000 dan katta bo'lgan bo'limlarning nomi (`dname`) and o'rtacha salaryni (`avg_sal`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 113,
    "sector": 8,
    "difficulty": "Floor 8 • Intermediate",
    "source": "Chinook DB A1 • HAVING Treklar Soni",
    "title": "Chinook: Kamida 3 Ta Treki Bor Janrlar",
    "story": "Bizning namunaviy bazamizda kamida 3 ta audio trekka ega bo'lgan faol janrlarni aniqlang.",
    "taskUz": "Kamida 3 ta treki bor janrlarning nomi (`g.name`) and treklar sonini (`track_count`) `HAVING COUNT(t.track_id) >= 3` via chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `genre_name`, `track_count`\n• Asosiy jadvallar: `genre`, `track`",
    "expectedSql": "SELECT g.name AS genre_name, COUNT(t.track_id) AS track_count FROM genre g JOIN track t ON g.genre_id = t.genre_id GROUP BY g.name HAVING COUNT(t.track_id) >= 3",
    "hint": "`GROUP BY g.name HAVING COUNT(t.track_id) >= 3` .",
    "tags": [
      "Chinook A1",
      "HAVING COUNT >= 3"
    ],
    "solutions": [
      "SELECT g.name AS genre_name, COUNT(t.track_id) AS track_count FROM genre g JOIN track t ON g.genre_id = t.genre_id GROUP BY g.name HAVING COUNT(t.track_id) >= 3"
    ],
    "task": "Kamida 3 ta treki bor janrlarning nomi (`g.name`) and treklar sonini (`track_count`) `HAVING COUNT(t.track_id) >= 3` via chiqaring.",
    "explanation": ""
  },
  {
    "id": 114,
    "sector": 8,
    "difficulty": "Floor 8 • Intermediate",
    "source": "Chinook DB A2 • Eng Ko'p Daromad Keltirgan Ijrochilar",
    "title": "Chinook: Eng Ko'p Daromad Keltirgan Ijrochi",
    "story": "Xarid qilingan barcha treklar bo'yicha eng yuqori tushum keltirgan yetakchi san'atkorni aniqlang.",
    "taskUz": "Ijrochi nomi (`ar.name`) and keltirgan umumiy daromadini (`total_revenue`) `invoice_line`, `track`, `album` and `artist` jadandllarini joining, `saralang total_revenue DESC LIMIT 1` via chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `name`, `total_revenue`\n• Asosiy jadvallar: `artist`, `album`, `track`, `invoice_line`\n• Saralash (ORDER BY): `total_revenue DESC`",
    "expectedSql": "SELECT ar.name, SUM(il.unit_price * il.quantity) AS total_revenue FROM artist ar JOIN album al ON ar.artist_id = al.artist_id JOIN track t ON al.album_id = t.album_id JOIN invoice_line il ON t.track_id = il.track_id GROUP BY ar.name ORDER BY total_revenue DESC LIMIT 1",
    "hint": "`SUM(il.unit_price * il.quantity) AS total_revenue ... ORDER BY total_revenue DESC LIMIT 1` qiling.",
    "tags": [
      "Chinook A2",
      "Revenue",
      "LIMIT 1"
    ],
    "solutions": [
      "SELECT ar.name, SUM(il.unit_price * il.quantity) AS total_revenue FROM artist ar JOIN album al ON ar.artist_id = al.artist_id JOIN track t ON al.album_id = t.album_id JOIN invoice_line il ON t.track_id = il.track_id GROUP BY ar.name ORDER BY total_revenue DESC LIMIT 1"
    ],
    "task": "Ijrochi nomi (`ar.name`) and keltirgan umumiy daromadini (`total_revenue`) `invoice_line`, `track`, `album` and `artist` jadandllarini joining, `saralang total_revenue DESC LIMIT 1` via chiqaring.",
    "explanation": ""
  },
  {
    "id": 115,
    "sector": 8,
    "difficulty": "Floor 8 • Intermediate",
    "source": "L05 Engineering • Bir Nechta Loyihada Ishlayotganlar",
    "title": "1 tadan Ko'p Loyihada Band Bo'lgan Muhandislar",
    "story": "Resurslar zo'riqishi: bir vaqtning o'zida 1 tadan ko'p loyihaga jalb qilingan xodimlarni aniqlang.",
    "taskUz": "1 tadan ko'p loyihada ishlayotgan employee name (`ename`) and loyihalari sonini (`project_count`) `GROUP BY e.ename HAVING COUNT(w.pno) > 1` via chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `project_count`\n• Asosiy jadvallar: `emp`, `works_on`",
    "expectedSql": "SELECT e.ename, COUNT(w.pno) AS project_count FROM emp e JOIN works_on w ON e.empno = w.empno GROUP BY e.ename HAVING COUNT(w.pno) > 1",
    "hint": "`GROUP BY e.ename HAVING COUNT(w.pno) > 1` .",
    "tags": [
      "HAVING COUNT > 1",
      "Multi-Project Staff"
    ],
    "solutions": [
      "SELECT e.ename, COUNT(w.pno) AS project_count FROM emp e JOIN works_on w ON e.empno = w.empno GROUP BY e.ename HAVING COUNT(w.pno) > 1"
    ],
    "task": "1 tadan ko'p loyihada ishlayotgan employee name (`ename`) and loyihalari sonini (`project_count`) `GROUP BY e.ename HAVING COUNT(w.pno) > 1` via chiqaring.",
    "explanation": ""
  },
  {
    "id": 116,
    "sector": 8,
    "difficulty": "Floor 8 • Intermediate",
    "source": "L05 Engineering • Katta Soatli Loyihalar",
    "title": "Umumiy Ish Vaqti 50 Soatdan Oshgan Loyihalar",
    "story": "Har bir loyiha bo'yicha jami sarflangan soatlar 50 dan oshgan asosiy korporativ loyihalarni aniqlang.",
    "taskUz": "Umumiy ishlangan soatlari 50 dan katta bo'lgan loyihalarning nomi (`pname`) and jami soatlarini (`total_hours`) `HAVING SUM(w.hours) > 50` via chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `pname`, `total_hours`\n• Asosiy jadvallar: `project`, `works_on`",
    "expectedSql": "SELECT p.pname, SUM(w.hours) AS total_hours FROM project p JOIN works_on w ON p.pno = w.pno GROUP BY p.pname HAVING SUM(w.hours) > 50",
    "hint": "`GROUP BY p.pname HAVING SUM(w.hours) > 50` .",
    "tags": [
      "HAVING SUM > 50",
      "Heavy Projects"
    ],
    "solutions": [
      "SELECT p.pname, SUM(w.hours) AS total_hours FROM project p JOIN works_on w ON p.pno = w.pno GROUP BY p.pname HAVING SUM(w.hours) > 50"
    ],
    "task": "Umumiy ishlangan soatlari 50 dan katta bo'lgan loyihalarning nomi (`pname`) and jami soatlarini (`total_hours`) `HAVING SUM(w.hours) > 50` via chiqaring.",
    "explanation": ""
  },
  {
    "id": 117,
    "sector": 8,
    "difficulty": "Floor 8 • Intermediate",
    "source": "S05 Task 24 • Kamida 3 Ta Xodimi Bor Bo'limlar",
    "title": "Kamida 3 Nafer Xodimi Bor Bo'limlar",
    "story": "Katta tarkibli bo'limlar: o'z safida kamida 3 nafar xodimga ega bo'limlarni toping.",
    "taskUz": "Kamida 3 nafar xodimga ega bo'lgan bo'lim nomi (`dname`) and xodimlar sonini (`emp_count`) `GROUP BY d.dname HAVING COUNT(e.empno) >= 3` via chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `dname`, `emp_count`\n• Asosiy jadvallar: `dept`, `emp`",
    "expectedSql": "SELECT d.dname, COUNT(e.empno) AS emp_count FROM dept d JOIN emp e ON d.deptno = e.deptno GROUP BY d.dname HAVING COUNT(e.empno) >= 3",
    "hint": "`GROUP BY d.dname HAVING COUNT(e.empno) >= 3` .",
    "tags": [
      "HAVING COUNT >= 3",
      "Large Departments"
    ],
    "solutions": [
      "SELECT d.dname, COUNT(e.empno) AS emp_count FROM dept d JOIN emp e ON d.deptno = e.deptno GROUP BY d.dname HAVING COUNT(e.empno) >= 3"
    ],
    "task": "Kamida 3 nafar xodimga ega bo'lgan bo'lim nomi (`dname`) and xodimlar sonini (`emp_count`) `GROUP BY d.dname HAVING COUNT(e.empno) >= 3` via chiqaring.",
    "explanation": ""
  },
  {
    "id": 118,
    "sector": 8,
    "difficulty": "Floor 8 • Hard",
    "source": "Chinook DB H7 • Invoyslar Soni 2 tadan Ko'p Mamlakatlar",
    "title": "Chinook: 2 tadan Ko'p Invoysga Ega Mamlakatlar",
    "story": "Doimiy xaridorlar oqimiga ega bo'lgan mamlakatlarni guruhlash filtrida ajrating.",
    "taskUz": "Invoyslar soni 2 tadan ko'p bo'lgan mamlakatlarning nomi (`billing_country`) and invoyslar sonini (`invoice_count`) `HAVING COUNT(invoice_id) > 2` via chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `billing_country`, `invoice_count`\n• Asosiy jadvallar: `invoice`",
    "expectedSql": "SELECT billing_country, COUNT(invoice_id) AS invoice_count FROM invoice GROUP BY billing_country HAVING COUNT(invoice_id) > 2",
    "hint": "`GROUP BY billing_country HAVING COUNT(invoice_id) > 2` .",
    "tags": [
      "Chinook",
      "HAVING invoice_count > 2"
    ],
    "solutions": [
      "SELECT billing_country, COUNT(invoice_id) AS invoice_count FROM invoice GROUP BY billing_country HAVING COUNT(invoice_id) > 2"
    ],
    "task": "Invoyslar soni 2 tadan ko'p bo'lgan mamlakatlarning nomi (`billing_country`) and invoyslar sonini (`invoice_count`) `HAVING COUNT(invoice_id) > 2` via chiqaring.",
    "explanation": ""
  },
  {
    "id": 119,
    "sector": 8,
    "difficulty": "Floor 8 • Hard",
    "source": "S05 Task 28b • Bir Nechta Razryadga Ega Kasblar",
    "title": "Bir Nechta Maosh Razryadiga Ega Lavozimlar",
    "story": "Kompaniyada xodimlari bittadan ko'p har xil maosh razryadlarida turuvchi lavozimlarni aniqlang.",
    "taskUz": "Turli xil maosh razryadlari soni 1 tadan ko'p bo'lgan lavozimlar (`job`) and ularning razryadlari sonini (`grade_count`) `HAVING COUNT(DISTINCT s.grade) > 1` via chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `job`, `grade_count`\n• Asosiy jadvallar: `emp`, `salgrade`",
    "expectedSql": "SELECT e.job, COUNT(DISTINCT s.grade) AS grade_count FROM emp e JOIN salgrade s ON e.sal BETWEEN s.losal AND s.hisal GROUP BY e.job HAVING COUNT(DISTINCT s.grade) > 1",
    "hint": "`GROUP BY e.job HAVING COUNT(DISTINCT s.grade) > 1` .",
    "tags": [
      "COUNT(DISTINCT grade) > 1"
    ],
    "solutions": [
      "SELECT e.job, COUNT(DISTINCT s.grade) AS grade_count FROM emp e JOIN salgrade s ON e.sal BETWEEN s.losal AND s.hisal GROUP BY e.job HAVING COUNT(DISTINCT s.grade) > 1"
    ],
    "task": "Turli xil maosh razryadlari soni 1 tadan ko'p bo'lgan lavozimlar (`job`) and ularning razryadlari sonini (`grade_count`) `HAVING COUNT(DISTINCT s.grade) > 1` via chiqaring.",
    "explanation": ""
  },
  {
    "id": 120,
    "sector": 8,
    "difficulty": "Floor 8 • Sarhisob",
    "source": "S05 Task 27–30 • 8-Qavat Bosh Imtihoni",
    "title": "8-Qavat Bosh Imtihoni: Katta HAVING & Shartli Svodka",
    "story": "8-qavat liftini ochish uchun har bir bo'limdagi kotiblar va boshqa xodimlar sonini hamda kamida 1 xodimi borligini HAVING orqali tasdiqlang.",
    "taskUz": "Bo'lim nomi (`dname`), undagi kotiblar soni (`clerks`) and jami xodimlar sonini (`total_emps`) `COUNT(CASE WHEN e.job = 'CLERK' THEN 1 END)` bilan hisoblab, `HAVING COUNT(e.empno) >= 1` via chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `dname`, `clerks`, `total_emps`\n• Asosiy jadvallar: `dept`, `emp`",
    "expectedSql": "SELECT d.dname, COUNT(CASE WHEN e.job = 'CLERK' THEN 1 END) AS clerks, COUNT(e.empno) AS total_emps FROM dept d JOIN emp e ON d.deptno = e.deptno GROUP BY d.dname HAVING COUNT(e.empno) >= 1",
    "hint": "`SELECT d.dname, COUNT(CASE WHEN e.job = 'CLERK' THEN 1 END) AS clerks, COUNT(e.empno) AS total_emps FROM dept d JOIN emp e ON d.deptno = e.deptno GROUP BY d.dname HAVING COUNT(e.empno) >= 1` .",
    "tags": [
      "Floor 8 Boss",
      "HAVING",
      "CASE WHEN"
    ],
    "solutions": [
      "SELECT d.dname, COUNT(CASE WHEN e.job = 'CLERK' THEN 1 END) AS clerks, COUNT(e.empno) AS total_emps FROM dept d JOIN emp e ON d.deptno = e.deptno GROUP BY d.dname HAVING COUNT(e.empno) >= 1"
    ],
    "task": "Bo'lim nomi (`dname`), undagi kotiblar soni (`clerks`) and jami xodimlar sonini (`total_emps`) `COUNT(CASE WHEN e.job = 'CLERK' THEN 1 END)` bilan hisoblab, `HAVING COUNT(e.empno) >= 1` via chiqaring.",
    "explanation": ""
  },
  {
    "id": 121,
    "sector": 9,
    "difficulty": "Floor 9 • Easy",
    "source": "L05 Slide 7–8 • Sahifa (Page) O'lchami",
    "title": "PostgreSQL Standart Sahifa (Page) O'lchami",
    "story": "PostgreSQL va Oracle kabi relyatsion ma'lumotlar bazalarida disk bilan operativ xotira o'rtasida ma'lumotlar alohida qator emas, butun bir 8 KB (8192 bayt) sahifa ko'rinishida uzatiladi.",
    "taskUz": "PostgreSQL ning standart sahifa o'lchamini baytlarda hisoblab, `page_size_bytes` deb nomlang (`SELECT 8 * 1024 AS page_size_bytes`).",
    "expectedSql": "SELECT 8 * 1024 AS page_size_bytes",
    "hint": "`SELECT 8 * 1024 AS page_size_bytes` .",
    "tags": [
      "Page Size",
      "8 KB",
      "L05 Slide 7"
    ],
    "solutions": [
      "SELECT 8 * 1024 AS page_size_bytes"
    ],
    "task": "PostgreSQL ning standart sahifa o'lchamini baytlarda hisoblab, `page_size_bytes` deb nomlang (`SELECT 8 * 1024 AS page_size_bytes`).",
    "explanation": ""
  },
  {
    "id": 122,
    "sector": 9,
    "difficulty": "Floor 9 • Easy",
    "source": "L05 Slide 7 • Bloklash Omili (bfr)",
    "title": "Bloklash Omilini (bfr) Hisoblash",
    "story": "Bloklash omili (Blocking Factor): bitta 8192 baytli sahifaga qancha yozuv sig'ishi formulasi: bfr = floor(B / R). Agar sahifa B=8192 bayt, bitta mijoz yozuvi R=126 bayt bo'lsa, bfr ni toping.",
    "taskUz": "8192 ni 126 ga bo'lib, uning butun qismini hisoblang (`SELECT 8192 / 126 AS bfr`).",
    "expectedSql": "SELECT 8192 / 126 AS bfr",
    "hint": "`SELECT 8192 / 126 AS bfr` deb yozing (natija 65 chiqadi).",
    "tags": [
      "bfr",
      "Blocking Factor",
      "L05 Slide 7"
    ],
    "solutions": [
      "SELECT 8192 / 126 AS bfr"
    ],
    "task": "8192 ni 126 ga bo'lib, uning butun qismini hisoblang (`SELECT 8192 / 126 AS bfr`).",
    "explanation": ""
  },
  {
    "id": 123,
    "sector": 9,
    "difficulty": "Floor 9 • Easy",
    "source": "L05 Slide 7–8 • Jami Sahifalar Soni (b)",
    "title": "1,000,000 Ta Mijoz Uchun Jami Sahifalar Soni (b)",
    "story": "Kompaniyamizda r = 1,000,000 ta mijoz bor. Bitta sahifaga bfr = 65 ta mijoz sig'sa, jadval diskda jami nechta sahifani (b = ceil(r / bfr)) egallaydi?",
    "taskUz": "1,000,000 ni 65 ga bo'lib, jami sahifalar sonini hisoblang (`SELECT 1000000 / 65 AS total_pages`).",
    "expectedSql": "SELECT 1000000 / 65 AS total_pages",
    "hint": "`SELECT 1000000 / 65 AS total_pages` deb yozing (ma'ruza 8-slaydidagi 15,384 ~ 15,395 sahifa!).",
    "tags": [
      "total_pages",
      "b",
      "L05 Slide 8"
    ],
    "solutions": [
      "SELECT 1000000 / 65 AS total_pages"
    ],
    "task": "1,000,000 ni 65 ga bo'lib, jami sahifalar sonini hisoblang (`SELECT 1000000 / 65 AS total_pages`).",
    "explanation": ""
  },
  {
    "id": 124,
    "sector": 9,
    "difficulty": "Floor 9 • Intermediate",
    "source": "L05 Slide 14 & 17 • Heap Faylda Qidirish Narxi",
    "title": "Heap (Tartibsiz) Faylda Qidirish Narxi (b / 2)",
    "story": "Heap faylda yozuvlar tartibsiz joylashadi. Kalit bo'yicha qidirganda o'rtacha butun faylning yarmi o'qiladi: b / 2. 15,395 sahifali jadval uchun o'rtacha o'qiladigan sahifalar sonini toping.",
    "taskUz": "15,395 sahifaning yarmini hisoblang (`SELECT 15395 / 2 AS heap_search_pages`).",
    "expectedSql": "SELECT 15395 / 2 AS heap_search_pages",
    "hint": "`SELECT 15395 / 2 AS heap_search_pages` deb yozing (natija 7,697 ~ 7,698 sahifa o'qish).",
    "tags": [
      "Heap Search Cost",
      "b / 2",
      "L05 Slide 14"
    ],
    "solutions": [
      "SELECT 15395 / 2 AS heap_search_pages"
    ],
    "task": "15,395 sahifaning yarmini hisoblang (`SELECT 15395 / 2 AS heap_search_pages`).",
    "explanation": ""
  },
  {
    "id": 125,
    "sector": 9,
    "difficulty": "Floor 9 • Intermediate",
    "source": "L05 Slide 15 & 17 • Sorted Faylda Ikkilik Qidiruv",
    "title": "Sorted Faylda Ikkilik Qidiruv (log2 b)",
    "story": "Agar fayl kalit bo'yicha tartiblangan (Sequential/Sorted) bo'lsa, ikkilik qidiruv (Binary Search) qo'llaniladi va atigi ceil(log2(15395)) ta sahifa o'qiladi. 2 ning 14-darajasi 16,384 bo'lgani uchun natija 14 ga teng!",
    "taskUz": "Ikkilik qidiruvda 15,395 ta sahifa uchun talab qilinadigan sahifa o'qishlar sonini chiqaring. (`SELECT 14 AS sorted_binary_search_cost`).",
    "expectedSql": "SELECT 14 AS sorted_binary_search_cost",
    "hint": "`SELECT 14 AS sorted_binary_search_cost` deb yozing (Heap dagi 7698 o'rniga atigi 14 ta!).",
    "tags": [
      "Sorted File",
      "Binary Search",
      "L05 Slide 15"
    ],
    "solutions": [
      "SELECT 14 AS sorted_binary_search_cost"
    ],
    "task": "Ikkilik qidiruvda 15,395 ta sahifa uchun talab qilinadigan sahifa o'qishlar sonini chiqaring. (`SELECT 14 AS sorted_binary_search_cost`).",
    "explanation": ""
  },
  {
    "id": 126,
    "sector": 9,
    "difficulty": "Floor 9 • Intermediate",
    "source": "L05 Slide 16 & 17 • Hash Faylda Qidiruv Narxi",
    "title": "Hash Faylda Qidiruv Narxi (O(1))",
    "story": "Xesh faylda kalit bo'yicha savatcha h(key) bevosita hisoblanadi. Shuning uchun tenglik bo'yicha qidirish narxi atigi 1 ta sahifa o'qishga teng!",
    "taskUz": "Hash faylda tenglik bo'yicha qidiruvning o'rtacha sahifa o'qish narxini chiqaring. (`SELECT 1 AS hash_equality_search_cost`).",
    "expectedSql": "SELECT 1 AS hash_equality_search_cost",
    "hint": "`SELECT 1 AS hash_equality_search_cost` .",
    "tags": [
      "Hash File",
      "O(1) Search",
      "L05 Slide 16"
    ],
    "solutions": [
      "SELECT 1 AS hash_equality_search_cost"
    ],
    "task": "Hash faylda tenglik bo'yicha qidiruvning o'rtacha sahifa o'qish narxini chiqaring. (`SELECT 1 AS hash_equality_search_cost`).",
    "explanation": ""
  },
  {
    "id": 127,
    "sector": 9,
    "difficulty": "Floor 9 • Intermediate",
    "source": "L05 Slide 17 • INSERT Amalida Heap ning Ustunligi",
    "title": "INSERT Amalida Heap ning Ustunligi",
    "story": "Nega PostgreSQL jadvallari standart holatda Heap fayl shaklida yaratiladi? Chunki yangi yozuvni qo'shish (INSERT) Heap da eng arzon: atigi 1 marta o'qish + 1 marta yozish (jami 2 I/O).",
    "taskUz": "Heap faylga yangi yozuv qo'shishning sahifa I/O narxini chiqaring. (`SELECT 2 AS heap_insert_cost`).",
    "expectedSql": "SELECT 2 AS heap_insert_cost",
    "hint": "`SELECT 2 AS heap_insert_cost` .",
    "tags": [
      "Heap Insert",
      "2 I/O",
      "L05 Slide 17"
    ],
    "solutions": [
      "SELECT 2 AS heap_insert_cost"
    ],
    "task": "Heap faylga yangi yozuv qo'shishning sahifa I/O narxini chiqaring. (`SELECT 2 AS heap_insert_cost`).",
    "explanation": ""
  },
  {
    "id": 128,
    "sector": 9,
    "difficulty": "Floor 9 • Intermediate",
    "source": "L05 Slide 16 • Hash Fayl Diapazon Kamchiligi",
    "title": "Diapazonli Qidiruvda Hash Faylning Yaroqsizligi",
    "story": "Xeshlash tartibni yo'qotadi! Shuning uchun `WHERE age BETWEEN 20 AND 30` kabi diapazonli (Range) so'rovda Hash fayl barcha savatchalarni (b ta sahifani) to'liq skan qilishga majbur bo'ladi.",
    "taskUz": "15,395 sahifali jadandlda Hash fayl diapazonli qidiruv uchun All sahifalarni o'qishini ko'rsating (`SELECT 15395 AS hash_range_scan_cost`).",
    "expectedSql": "SELECT 15395 AS hash_range_scan_cost",
    "hint": "`SELECT 15395 AS hash_range_scan_cost` .",
    "tags": [
      "Hash Limitation",
      "Range Query"
    ],
    "solutions": [
      "SELECT 15395 AS hash_range_scan_cost"
    ],
    "task": "15,395 sahifali jadandlda Hash fayl diapazonli qidiruv uchun All sahifalarni o'qishini ko'rsating (`SELECT 15395 AS hash_range_scan_cost`).",
    "explanation": ""
  },
  {
    "id": 129,
    "sector": 9,
    "difficulty": "Floor 9 • Intermediate",
    "source": "L05 Slide 9 • Bufer Kesh (Buffer Pool)",
    "title": "Bufer Keshdagi Sahifalarni Tahlil Qilish",
    "story": "Diskdan o'qilgan sahifalar tezlik uchun operativ xotiradagi Buffer Pool (Shared Buffers) da keshlanadi. `storage_pages` jadvalidan keshda turgan sahifalarni ko'ring.",
    "taskUz": "`storage_pages` jadandlidan keshda turgan (`is_cached = true`) sahifalarning `page_id`, `relname`, `record_count` and `hit_count` ustunlarini chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `page_id`, `relname`, `record_count`, `hit_count`\n• Asosiy jadvallar: `storage_pages`",
    "expectedSql": "SELECT page_id, relname, record_count, hit_count FROM storage_pages WHERE is_cached = true",
    "hint": "`SELECT page_id, relname, record_count, hit_count FROM storage_pages WHERE is_cached = true` .",
    "tags": [
      "Buffer Pool",
      "Cache Hit",
      "storage_pages"
    ],
    "solutions": [
      "SELECT page_id, relname, record_count, hit_count FROM storage_pages WHERE is_cached = true"
    ],
    "task": "`storage_pages` jadandlidan keshda turgan (`is_cached = true`) sahifalarning `page_id`, `relname`, `record_count` and `hit_count` ustunlarini chiqaring.",
    "explanation": ""
  },
  {
    "id": 130,
    "sector": 9,
    "difficulty": "Floor 9 • Intermediate",
    "source": "L05 Slide 13 • CTID Jismoniy Manzili",
    "title": "CTID Ustuni: Jismoniy Manzil (page, slot)",
    "story": "PostgreSQL da har bir yozuvning jismoniy joylashuv manzili `ctid = (sahifa_raqami, slot_raqami)` ko'rinishida bo'ladi.",
    "taskUz": "`storage_pages` jadandlidan sahifa raqami (`page_id`), jadandl nomi (`relname`) and manzil namunasini (`ctid_sample`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `page_id`, `relname`, `ctid_sample`\n• Asosiy jadvallar: `storage_pages`",
    "expectedSql": "SELECT page_id, relname, ctid_sample FROM storage_pages",
    "hint": "`SELECT page_id, relname, ctid_sample FROM storage_pages` .",
    "tags": [
      "CTID",
      "Tuple Identifier",
      "L05 Slide 13"
    ],
    "solutions": [
      "SELECT page_id, relname, ctid_sample FROM storage_pages"
    ],
    "task": "`storage_pages` jadandlidan sahifa raqami (`page_id`), jadandl nomi (`relname`) and manzil namunasini (`ctid_sample`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 131,
    "sector": 9,
    "difficulty": "Floor 9 • Intermediate",
    "source": "L05 Slide 17 • Fayl Tuzilmalari Solishtirma Jadvali",
    "title": "Fayl Tuzilmalari Unumdorligi Taqqosi",
    "story": "Bizning simulyatorimizdagi `file_stats` jadvali Heap, Sorted, Hash va B+ Tree tuzilmalarining qidirish va qo'shish narxlarini solishtiradi.",
    "taskUz": "`file_stats` jadandlidan fayl turi (`file_type`), tenglik bo'yicha qidiruv narxi (`avg_equality_scan_pages`) and qo'shish narxini (`insert_pages`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `file_type`, `avg_equality_scan_pages`, `insert_pages`\n• Asosiy jadvallar: `file_stats`",
    "expectedSql": "SELECT file_type, avg_equality_scan_pages, insert_pages FROM file_stats",
    "hint": "`SELECT file_type, avg_equality_scan_pages, insert_pages FROM file_stats` .",
    "tags": [
      "file_stats",
      "Comparison",
      "L05 Slide 17"
    ],
    "solutions": [
      "SELECT file_type, avg_equality_scan_pages, insert_pages FROM file_stats"
    ],
    "task": "`file_stats` jadandlidan fayl turi (`file_type`), tenglik bo'yicha qidiruv narxi (`avg_equality_scan_pages`) and qo'shish narxini (`insert_pages`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 132,
    "sector": 9,
    "difficulty": "Floor 9 • Intermediate",
    "source": "L05 Slide 6 • RAM vs SSD vs HDD Vaqtlar Farqi",
    "title": "Xotira Ierarxiyasi: RAM vs SSD vs HDD",
    "story": "RAM ga kirish ~100 nanosekund, SSD random o'qish ~100 mikrosekund, HDD random o'qish esa ~10 millisekund (10,000,000 ns!). Shuning uchun disk I/O butun tizim tezligini belgilaydi.",
    "taskUz": "HDD tasodifiy o'qishi (10 ms) RAM ga kirishdan (0.0001 ms) necha baraandr sekin ekanligini hisoblang (`SELECT 10000000 / 100 AS hdd_vs_ram_slowdown`).",
    "expectedSql": "SELECT 10000000 / 100 AS hdd_vs_ram_slowdown",
    "hint": "`SELECT 10000000 / 100 AS hdd_vs_ram_slowdown` deb yozing (100,000 baravar!).",
    "tags": [
      "Memory Hierarchy",
      "I/O Dominance",
      "L05 Slide 6"
    ],
    "solutions": [
      "SELECT 10000000 / 100 AS hdd_vs_ram_slowdown"
    ],
    "task": "HDD tasodifiy o'qishi (10 ms) RAM ga kirishdan (0.0001 ms) necha baraandr sekin ekanligini hisoblang (`SELECT 10000000 / 100 AS hdd_vs_ram_slowdown`).",
    "explanation": ""
  },
  {
    "id": 133,
    "sector": 9,
    "difficulty": "Floor 9 • Intermediate",
    "source": "L05 Slide 7 • Sahifadagi Bo'sh Joy (Free Space)",
    "title": "Sahifalardagi Bo'sh Joy Miqdori",
    "story": "Slotted Page arxitekturasida yozuvlar sahifaning oxiridan, ko'rsatkichlar (line pointers) esa boshidan o'sib, o'rtada bo'sh joy (free space) qoladi.",
    "taskUz": "`storage_pages` jadandlidan bo'sh joyi 500 baytdan katta bo'lgan sahifalarning `page_id`, `record_count` and `free_bytes` ustunlarini chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `page_id`, `record_count`, `free_bytes`\n• Asosiy jadvallar: `storage_pages`",
    "expectedSql": "SELECT page_id, record_count, free_bytes FROM storage_pages WHERE free_bytes > 500",
    "hint": "`WHERE free_bytes > 500` shartini bering.",
    "tags": [
      "Slotted Page",
      "free_bytes"
    ],
    "solutions": [
      "SELECT page_id, record_count, free_bytes FROM storage_pages WHERE free_bytes > 500"
    ],
    "task": "`storage_pages` jadandlidan bo'sh joyi 500 baytdan katta bo'lgan sahifalarning `page_id`, `record_count` and `free_bytes` ustunlarini chiqaring.",
    "explanation": ""
  },
  {
    "id": 134,
    "sector": 9,
    "difficulty": "Floor 9 • Hard",
    "source": "L05 Slide 18 • Heap dan Sorted ga O'tish Tejamkorligi",
    "title": "Heap dan Sorted ga O'tish Tejamkorligi",
    "story": "Heap faylda bitta mijozni qidirish 7698 sahifa o'qish talab qilgan bo'lsa, Sorted faylda ikkilik qidiruv atigi 14 sahifa talab qildi. Qancha sahifa tejalganini hisoblang.",
    "taskUz": "7698 dan 14 ni ayirib, tejalgan sahifalar sonini `pages_saved` deb nomlang (`SELECT 7698 - 14 AS pages_saved`).",
    "expectedSql": "SELECT 7698 - 14 AS pages_saved",
    "hint": "`SELECT 7698 - 14 AS pages_saved` deb yozing (7,684 ta sahifa I/O tejaladi!).",
    "tags": [
      "I/O Savings",
      "Binary vs Linear"
    ],
    "solutions": [
      "SELECT 7698 - 14 AS pages_saved"
    ],
    "task": "7698 dan 14 ni ayirib, tejalgan sahifalar sonini `pages_saved` deb nomlang (`SELECT 7698 - 14 AS pages_saved`).",
    "explanation": ""
  },
  {
    "id": 135,
    "sector": 9,
    "difficulty": "Floor 9 • Sarhisob",
    "source": "L05 Slides 1–18 • 9-Qavat Bosh Imtihoni",
    "title": "9-Qavat Bosh Imtihoni: Katta Jismoniy Saqlash Svodkasi",
    "story": "9-qavat portalini ochish uchun eng ko'p murojaat qilingan (hit_count eng yuqori) keshdagi sahifalarni saralab bering.",
    "taskUz": "`storage_pages` jadandlidan All sahifalarning `page_id`, `file_type`, `relname` and `hit_count` ustunlarini chiqarib, `hit_count` kamayishi bo'yicha tartibida saralang.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `page_id`, `file_type`, `relname`, `hit_count`\n• Asosiy jadvallar: `storage_pages`\n• Saralash (ORDER BY): `hit_count DESC`",
    "expectedSql": "SELECT page_id, file_type, relname, hit_count FROM storage_pages ORDER BY hit_count DESC",
    "hint": "`SELECT page_id, file_type, relname, hit_count FROM storage_pages ORDER BY hit_count DESC` .",
    "tags": [
      "Floor 9 Boss",
      "Storage Architecture",
      "Buffer Cache"
    ],
    "solutions": [
      "SELECT page_id, file_type, relname, hit_count FROM storage_pages ORDER BY hit_count DESC"
    ],
    "task": "`storage_pages` jadandlidan All sahifalarning `page_id`, `file_type`, `relname` and `hit_count` ustunlarini chiqarib, `hit_count` kamayishi bo'yicha tartibida saralang.",
    "explanation": ""
  },
  {
    "id": 136,
    "sector": 10,
    "difficulty": "Floor 10 • Easy",
    "source": "L05 Slide 19–20 • Indeks Asoslari",
    "title": "Indeks Asoslari: Qidiruv Kaliti va Ko'rsatkich",
    "story": "Indeks kitob oxiridagi mundarijaga o'xshaydi: butun kitobni boshidan o'qimasdan, to'g'ridan-to'g'ri kerakli sahifaga borish imkonini beradi.",
    "taskUz": "`file_stats` jadandlidan B+ Tree indeksi uchun qidiruv narxini (`avg_equality_scan_pages`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `file_type`, `avg_equality_scan_pages`\n• Asosiy jadvallar: `file_stats`",
    "expectedSql": "SELECT file_type, avg_equality_scan_pages FROM file_stats WHERE file_type = 'B+ Tree Index'",
    "hint": "`WHERE file_type = 'B+ Tree Index'` deb yozing (atigi 3 ta sahifa!).",
    "tags": [
      "Index Basics",
      "L05 Slide 19"
    ],
    "solutions": [
      "SELECT file_type, avg_equality_scan_pages FROM file_stats WHERE file_type = 'B+ Tree Index'"
    ],
    "task": "`file_stats` jadandlidan B+ Tree indeksi uchun qidiruv narxini (`avg_equality_scan_pages`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 137,
    "sector": 10,
    "difficulty": "Floor 10 • Easy",
    "source": "L05 Slide 24 • Dense vs Sparse Indekslar",
    "title": "Zich (Dense) va Siyrak (Sparse) Indekslar",
    "story": "Dense indeksda har bir qidiruv kaliti qiymati uchun alohida yozuv bo'ladi. Sparse indeksda esa har bir sahifa (blok) uchun bittadan langar (block anchor) yozuvi bo'ladi.",
    "taskUz": "Sparse indeks 15,395 ta sahifali jadandl uchun aynan 15,395 ta yozuvga ega bo'lishini ko'rsating (`SELECT 15395 AS sparse_index_entries`).",
    "expectedSql": "SELECT 15395 AS sparse_index_entries",
    "hint": "`SELECT 15395 AS sparse_index_entries` .",
    "tags": [
      "Dense vs Sparse",
      "L05 Slide 24"
    ],
    "solutions": [
      "SELECT 15395 AS sparse_index_entries"
    ],
    "task": "Sparse indeks 15,395 ta sahifali jadandl uchun aynan 15,395 ta yozuvga ega bo'lishini ko'rsating (`SELECT 15395 AS sparse_index_entries`).",
    "explanation": ""
  },
  {
    "id": 138,
    "sector": 10,
    "difficulty": "Floor 10 • Easy",
    "source": "L05 Slide 25 • Birlamchi Indeks (Primary Index)",
    "title": "Birlamchi Indeks (Primary Index)",
    "story": "Darslik ta'rifi bo'yicha Birlamchi Indeks: ma'lumotlar fayli kalit maydon bo'yicha tartiblangan bo'ladi va har bir blok uchun bitta indeks yozuvi bo'ladi (ya'ni Siyrak / Sparse bo'ladi).",
    "taskUz": "Bitta jadandlda ko'pi bilan nechta Birlamchi Indeks bo'lishi mumkinligini chiqaring. (`SELECT 1 AS max_primary_indexes_per_file`).",
    "expectedSql": "SELECT 1 AS max_primary_indexes_per_file",
    "hint": "`SELECT 1 AS max_primary_indexes_per_file` deb yozing (jadval faqat bitta tartibda saralanishi mumkin!).",
    "tags": [
      "Primary Index",
      "L05 Slide 25"
    ],
    "solutions": [
      "SELECT 1 AS max_primary_indexes_per_file"
    ],
    "task": "Bitta jadandlda ko'pi bilan nechta Birlamchi Indeks bo'lishi mumkinligini chiqaring. (`SELECT 1 AS max_primary_indexes_per_file`).",
    "explanation": ""
  },
  {
    "id": 139,
    "sector": 10,
    "difficulty": "Floor 10 • Intermediate",
    "source": "L05 Slide 26 • Klasterlangan Indeks (Clustering Index)",
    "title": "Klasterlangan Indeks (Clustering Index)",
    "story": "Agar fayl takrorlanuvchi maydon (masalan, `country`) bo'yicha tartiblangan bo'lsa, har bir noyob qiymat uchun birinchi blokni ko'rsatuvchi Klasterlangan Indeks quriladi.",
    "taskUz": "Faylda yoki Primary, yoki Clustering indeks bo'lishi mumkin (ikkalasi birga bo'lolmaydi). Buni tasdiqlang (`SELECT 1 AS max_clustering_index`).",
    "expectedSql": "SELECT 1 AS max_clustering_index",
    "hint": "`SELECT 1 AS max_clustering_index` .",
    "tags": [
      "Clustering Index",
      "L05 Slide 26"
    ],
    "solutions": [
      "SELECT 1 AS max_clustering_index"
    ],
    "task": "Faylda yoki Primary, yoki Clustering indeks bo'lishi mumkin (ikkalasi birga bo'lolmaydi). Buni tasdiqlang (`SELECT 1 AS max_clustering_index`).",
    "explanation": ""
  },
  {
    "id": 140,
    "sector": 10,
    "difficulty": "Floor 10 • Intermediate",
    "source": "L05 Slide 27 • Ikkilamchi Indeks (Secondary Index)",
    "title": "Ikkilamchi Indeks (Secondary Index)",
    "story": "Faylning tartibiga bog'liq bo'lmagan maydonga quriladigan indeks. U albatta Zich (Dense) bo'lishi shart, chunki fayl tartibsiz bo'lgani sababli barcha qatorlarga ko'rsatkich kerak bo'ladi.",
    "taskUz": "1,000,000 ta mijoz uchun ikkilamchi indeks nechta yozuvga ega bo'lishini chiqaring. (`SELECT 1000000 AS secondary_index_entries`).",
    "expectedSql": "SELECT 1000000 AS secondary_index_entries",
    "hint": "`SELECT 1000000 AS secondary_index_entries` .",
    "tags": [
      "Secondary Index",
      "Dense",
      "L05 Slide 27"
    ],
    "solutions": [
      "SELECT 1000000 AS secondary_index_entries"
    ],
    "task": "1,000,000 ta mijoz uchun ikkilamchi indeks nechta yozuvga ega bo'lishini chiqaring. (`SELECT 1000000 AS secondary_index_entries`).",
    "explanation": ""
  },
  {
    "id": 141,
    "sector": 10,
    "difficulty": "Floor 10 • Intermediate",
    "source": "L05 Slide 28–30 • B+ Daraxt Balandligi",
    "title": "B+ Daraxt Chuqurligi va Balandligi (Height)",
    "story": "B+ Tree o'z-o'zini balanslovchi daraxtdir. Katta shoxlanish koeffitsienti (Fan-out p=100) tufayli 1,000,000 yozuvli baza uchun ham daraxt balandligi atigi 3 ta darajadan oshmaydi!",
    "taskUz": "Fan-out p = 100 and 1,000,000 bargli daraxtning balandligini (h = 3) chiqaring. (`SELECT 3 AS btree_height`).",
    "expectedSql": "SELECT 3 AS btree_height",
    "hint": "`SELECT 3 AS btree_height` deb yozing (100 * 100 * 100 = 1,000,000!).",
    "tags": [
      "B+ Tree Height",
      "Fan-out",
      "L05 Slide 29"
    ],
    "solutions": [
      "SELECT 3 AS btree_height"
    ],
    "task": "Fan-out p = 100 and 1,000,000 bargli daraxtning balandligini (h = 3) chiqaring. (`SELECT 3 AS btree_height`).",
    "explanation": ""
  },
  {
    "id": 142,
    "sector": 10,
    "difficulty": "Floor 10 • Intermediate",
    "source": "L05 Slide 30 • B+ Tree Barglar Bog'lamasi",
    "title": "B+ Tree Barglarining O'zaro Bog'liqligi",
    "story": "B+ Daraxtning eng katta mo''jizasi: barcha barg tugunlari (leaf nodes) o'zaro ikki tomonlama bog'langan ro'yxat (linked list) bilan ulangan. Bu diapazonli qidiruvni (Range Scan) g'oyat tezlashtiradi!",
    "taskUz": "B+ Tree barglari qidiruvida ildizdan tushib bitta barg topilgach, keyingi qatorlar to'g'ridan-to'g'ri bog'lamadan o'qilishini tasdiqlang (`SELECT 4 AS btree_range_scan_cost`).",
    "expectedSql": "SELECT 4 AS btree_range_scan_cost",
    "hint": "`SELECT 4 AS btree_range_scan_cost` .",
    "tags": [
      "B+ Tree Leaves",
      "Range Scan",
      "Linked List"
    ],
    "solutions": [
      "SELECT 4 AS btree_range_scan_cost"
    ],
    "task": "B+ Tree barglari qidiruvida ildizdan tushib bitta barg topilgach, keyingi qatorlar to'g'ridan-to'g'ri bog'lamadan o'qilishini tasdiqlang (`SELECT 4 AS btree_range_scan_cost`).",
    "explanation": ""
  },
  {
    "id": 143,
    "sector": 10,
    "difficulty": "Floor 10 • Intermediate",
    "source": "L05 Slide 22 • Seq Scan vs Index Scan",
    "title": "Optimizer Tanlovi: Seq Scan vs Index Scan",
    "story": "Indeks har doim ham tez ishlayveradimi? Yo'q! Agar so'rov jadvaldagi qatorlarning 30% dan ko'pini tanlab olsa, optimizer sekin Random I/O qilib o'tirmay, tezkor Sequential Scan (ketma-ket o'qish) ni tanlaydi.",
    "taskUz": "Bizning `storage_pages` jadandlidan B+ Tree ildiz and barg sahifalarini (`file_type LIKE 'BTREE%'`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `page_id`, `file_type`, `hit_count`\n• Asosiy jadvallar: `storage_pages`",
    "expectedSql": "SELECT page_id, file_type, hit_count FROM storage_pages WHERE file_type LIKE 'BTREE%'",
    "hint": "`WHERE file_type LIKE 'BTREE%'` .",
    "tags": [
      "Optimizer Choice",
      "storage_pages",
      "BTREE"
    ],
    "solutions": [
      "SELECT page_id, file_type, hit_count FROM storage_pages WHERE file_type LIKE 'BTREE%'"
    ],
    "task": "Bizning `storage_pages` jadandlidan B+ Tree ildiz and barg sahifalarini (`file_type LIKE 'BTREE%'`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 144,
    "sector": 10,
    "difficulty": "Floor 10 • Intermediate",
    "source": "L05 Slide 32 • Qoplovchi Indeks (Covering Index)",
    "title": "Qoplovchi Indeks (Index-Only Scan)",
    "story": "Agar so'rov talab qilgan barcha ustunlar indeksning o'zida mavjud bo'lsa, asosiy ma'lumotlar jadvaliga borishga hojat qolmaydi! Bu 'Index-Only Scan' deyiladi.",
    "taskUz": "Index-Only Scan da jadandl sahifalariga kirish soni 0 ga teng bo'lishini ko'rsating (`SELECT 0 AS table_pages_accessed`).",
    "expectedSql": "SELECT 0 AS table_pages_accessed",
    "hint": "`SELECT 0 AS table_pages_accessed` .",
    "tags": [
      "Covering Index",
      "Index-Only Scan",
      "L05 Slide 32"
    ],
    "solutions": [
      "SELECT 0 AS table_pages_accessed"
    ],
    "task": "Index-Only Scan da jadandl sahifalariga kirish soni 0 ga teng bo'lishini ko'rsating (`SELECT 0 AS table_pages_accessed`).",
    "explanation": ""
  },
  {
    "id": 145,
    "sector": 10,
    "difficulty": "Floor 10 • Intermediate",
    "source": "L05 Slide 23 • Indekslarning Salbiy Tomoni",
    "title": "Indekslarning Narxi: Sekinlashuvchi INSERT/UPDATE",
    "story": "Har bir yangi indeks INSERT va DELETE amallarini sekinlashtiradi. Ma'ruzadagi tajriba: indekslarsiz 1,000,000 qatorni yuklash 0.9 soniya olgan bo'lsa, 7 ta indeks bilan 14.0 soniya (~15 baravar ko'p) vaqt oldi!",
    "taskUz": "14.0 ni 0.9 ga bo'lib, sekinlashuv koeffitsientini hisoblang (`SELECT 140 / 9 AS insert_slowdown_factor`).",
    "expectedSql": "SELECT 140 / 9 AS insert_slowdown_factor",
    "hint": "`SELECT 140 / 9 AS insert_slowdown_factor` deb yozing (~15 baravar sekin!).",
    "tags": [
      "Index Overhead",
      "INSERT penalty",
      "L05 Slide 23"
    ],
    "solutions": [
      "SELECT 140 / 9 AS insert_slowdown_factor"
    ],
    "task": "14.0 ni 0.9 ga bo'lib, sekinlashuv koeffitsientini hisoblang (`SELECT 140 / 9 AS insert_slowdown_factor`).",
    "explanation": ""
  },
  {
    "id": 146,
    "sector": 10,
    "difficulty": "Floor 10 • Intermediate",
    "source": "L05 Slide 33 • PostgreSQL Indeks Turlari",
    "title": "PostgreSQL Indeks Turlari: B-tree, GiST, GIN, BRIN",
    "story": "PostgreSQL da matnli to'liq qidiruv (Full-Text Search) uchun GIN, geofazoviy (GIS) ma'lumotlar uchun GiST, gigant jadvallar uchun esa BRIN (Block Range Index) ishlatiladi.",
    "taskUz": "PostgreSQL da standart holatda qo'llaniladigan indeks turi 'BTREE' ekanligini chiqaring. (`SELECT 'BTREE' AS default_pg_index_type`).",
    "expectedSql": "SELECT 'BTREE' AS default_pg_index_type",
    "hint": "`SELECT 'BTREE' AS default_pg_index_type` .",
    "tags": [
      "PostgreSQL Indexes",
      "GIN",
      "GiST",
      "BRIN"
    ],
    "solutions": [
      "SELECT 'BTREE' AS default_pg_index_type"
    ],
    "task": "PostgreSQL da standart holatda qo'llaniladigan indeks turi 'BTREE' ekanligini chiqaring. (`SELECT 'BTREE' AS default_pg_index_type`).",
    "explanation": ""
  },
  {
    "id": 147,
    "sector": 10,
    "difficulty": "Floor 10 • Intermediate",
    "source": "L05 Slide 31 • Bitmap Indekslar",
    "title": "Bitmap Indeks va Bitli Mantiqiy Amallar",
    "story": "Kardinalligi past ustunlar (masalan, `gender`, `status`) uchun har bir qiymatga 0 va 1 lardan iborat bit vektorlari yasaladi. So'rovlar bitli AND / OR amallari orqali chaqmoqdek tez hisoblanadi.",
    "taskUz": "1000 ta qator uchun bitta bit vektori atigi 1000 bit (125 bayt) joy olishini ko'rsating (`SELECT 1000 / 8 AS bitmap_bytes_per_1000_rows`).",
    "expectedSql": "SELECT 1000 / 8 AS bitmap_bytes_per_1000_rows",
    "hint": "`SELECT 1000 / 8 AS bitmap_bytes_per_1000_rows` .",
    "tags": [
      "Bitmap Index",
      "Analytics",
      "L05 Slide 31"
    ],
    "solutions": [
      "SELECT 1000 / 8 AS bitmap_bytes_per_1000_rows"
    ],
    "task": "1000 ta qator uchun bitta bit vektori atigi 1000 bit (125 bayt) joy olishini ko'rsating (`SELECT 1000 / 8 AS bitmap_bytes_per_1000_rows`).",
    "explanation": ""
  },
  {
    "id": 148,
    "sector": 10,
    "difficulty": "Floor 10 • Hard",
    "source": "L05 Slide 32 • Kompozit Indeks va Leftmost Prefix",
    "title": "Kompozit Indeks va Chap Qism Qoidasi (Leftmost Prefix)",
    "story": "Agar `(surname, firstname)` bo'yicha indeks bo'lsa, `WHERE surname = 'Smith'` indeksdan foydalana oladi, lekin `WHERE firstname = 'John'` indeksdan foydalana OLMAYDI! Ustunlar ketma-ketligi hal qiluvchi ahamiyatga ega.",
    "taskUz": "Kompozit indeksda birinchi ustun har doim eng yuqori selektivlikka ega bo'lishi kerakligini tasdiqlang (`SELECT 1 AS leftmost_prefix_andlid`).",
    "expectedSql": "SELECT 1 AS leftmost_prefix_valid",
    "hint": "`SELECT 1 AS leftmost_prefix_valid` .",
    "tags": [
      "Composite Index",
      "Leftmost Prefix",
      "L05 Slide 32"
    ],
    "solutions": [
      "SELECT 1 AS leftmost_prefix_valid"
    ],
    "task": "Kompozit indeksda birinchi ustun har doim eng yuqori selektivlikka ega bo'lishi kerakligini tasdiqlang (`SELECT 1 AS leftmost_prefix_andlid`).",
    "explanation": ""
  },
  {
    "id": 149,
    "sector": 10,
    "difficulty": "Floor 10 • Hard",
    "source": "L05 Slide 35 • Relyatsion Bazalar Uchun RAID 10",
    "title": "Relyatsion Tranzaksiya Bazalari Uchun RAID 10",
    "story": "Nega korporativ relyatsion bazalarda RAID 5 o'rniga RAID 10 ishlatiladi? Chunki RAID 5 da paritet penaltisi (har bir yozishda 2 ta o'qish + 2 ta yozish) bo'ladi. RAID 10 (Striped Mirrors) esa paritetsiz eng yuqori unumdorlik va to'liq ishonchlilikni kafolatlaydi.",
    "taskUz": "4 ta 1 TB li diskdan RAID 10 massivi tuzilganda foydali saqlash sig'imini (TB) hisoblang (`SELECT 4 / 2 AS raid10_usable_capacity_tb`).",
    "expectedSql": "SELECT 4 / 2 AS raid10_usable_capacity_tb",
    "hint": "`SELECT 4 / 2 AS raid10_usable_capacity_tb` deb yozing (50% ko'zguga ketadi = 2 TB qoladi).",
    "tags": [
      "RAID 10",
      "Storage Hardware",
      "L05 Slide 35"
    ],
    "solutions": [
      "SELECT 4 / 2 AS raid10_usable_capacity_tb"
    ],
    "task": "4 ta 1 TB li diskdan RAID 10 massivi tuzilganda foydali saqlash sig'imini (TB) hisoblang (`SELECT 4 / 2 AS raid10_usable_capacity_tb`).",
    "explanation": ""
  },
  {
    "id": 150,
    "sector": 10,
    "difficulty": "Floor 10 • Katta Final",
    "source": "L05 & S05 Butun Kurs • 150-Bosqich Grand Imtihon",
    "title": "150-BOSQICH GRAND IMTIHON: BOSH DATA ARXITEKTORI",
    "story": "Tabriklaymiz! Siz 150 bosqichli Academy Database Systems simulyatorining cho'qqisiga yetib keldingiz. Barcha bo'limlar, ularning xodimlari va keshdagi xotira sahifalarini tahlil qilib, yakuniy sertifikatsiyani qo'lga kiriting!",
    "taskUz": "Kompaniya xodimlari orasida eng yuqori maosh oluvchi rahbarning ismi (`ename`), lavozimi (`job`), salary (`sal`) and department name (`dname`) `emp` and `dept` ni joining, `sal = 5000` sharti bilan chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `job`, `sal`, `dname`\n• Asosiy jadvallar: `emp`, `dept`",
    "expectedSql": "SELECT e.ename, e.job, e.sal, d.dname FROM emp e JOIN dept d ON e.deptno = d.deptno WHERE e.sal = 5000",
    "hint": "`SELECT e.ename, e.job, e.sal, d.dname FROM emp e JOIN dept d ON e.deptno = d.deptno WHERE e.sal = 5000` deb yozing (Prezident KING!).",
    "tags": [
      "Grand Finale",
      "150 Boss",
      "Chief Data Architect"
    ],
    "solutions": [
      "SELECT e.ename, e.job, e.sal, d.dname FROM emp e JOIN dept d ON e.deptno = d.deptno WHERE e.sal = 5000"
    ],
    "task": "Kompaniya xodimlari orasida eng yuqori maosh oluvchi rahbarning ismi (`ename`), lavozimi (`job`), salary (`sal`) and department name (`dname`) `emp` and `dept` ni joining, `sal = 5000` sharti bilan chiqaring.",
    "explanation": ""
  }
];
