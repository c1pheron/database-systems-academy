var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);

_scope.QUESTIONS_101_150 = [
  {
    "id": 101,
    "sector": 7,
    "difficulty": "Floor 7 • Hard",
    "source": "L04 Slide 41 • LEFT OUTER JOIN (Self-Join)",
    "title": "Prezidentni Ham Ro'yxatda Saqlab Qolish",
    "story": "Oddiy ichki ulanishda rahbari bo'lmagan Prezident KING ro'yxatdan tushib qolgan edi. Rahbari yo'q xodim ham natijada qolishi uchun chap tashqi ulanishdan foydalaning.",
    "taskUz": "Xodimlar jadandlini (`emp e`) o'z-o'ziga rahbarlar jadandli (`emp m`) sifatida chap tashqi ulanish orqali xodimning `supervisor` ustuni and rahbarning `empno` ustuni bo'yicha bog'lang and xodim ismini (`e.ename`) and rahbar ismini (`m.ename`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `employee`, `manager`\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "Ichki `JOIN` o'rniga `LEFT JOIN` (yoki `LEFT OUTER JOIN`) ishlating: `FROM emp e LEFT JOIN emp m ON e.supervisor = m.empno`.",
    "solutions": [
      "SELECT e.ename AS employee, m.ename AS manager FROM emp e LEFT JOIN emp m ON e.supervisor = m.empno",
      "SELECT e.ename, m.ename FROM emp e LEFT JOIN emp m ON e.supervisor = m.empno",
      "SELECT e.ename, m.ename FROM emp e LEFT OUTER JOIN emp m ON e.supervisor = m.empno"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {}
    ],
    "explanation": "L04 Slide 41: Chap tashqi ulanish chap jadvaldagi barcha 14 xodimni (jumladan KINGni ham) natijada saqlab qoldi.",
    "task": "Xodimlar jadandlini (`emp e`) o'z-o'ziga rahbarlar jadandli (`emp m`) sifatida chap tashqi ulanish orqali xodimning `supervisor` ustuni and rahbarning `empno` ustuni bo'yicha bog'lang and xodim ismini (`e.ename`) and rahbar ismini (`m.ename`) chiqaring."
  },
  {
    "id": 102,
    "sector": 7,
    "difficulty": "Floor 7 • Hard",
    "source": "L04 Slide 41 & 44 • RIGHT OUTER JOIN",
    "title": "Xodimi Yo'q Bo'limni Ham Ko'rsatish",
    "story": "40-bo'limda (`OPERATIONS`, Boston) hozircha hech kim ishlamaydi. Xodimlar jadvaliga bo'limlar jadvalini o'ng tashqi ulanish bilan bog'lab, bo'sh turgan 40-bo'limni ham hisobotga chiqaring.",
    "taskUz": "Xodimlar (`emp e`) and bo'limlar (`dept d`) jadandllarini `deptno` ustuni bo'yicha o'ng tashqi ulanish orqali bog'lab, `ename`, `dname` and `loc` columns chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `dname`, `loc`\n• Asosiy jadvallar: `emp`, `dept`",
    "starterCode": "",
    "hint": "`FROM emp e RIGHT JOIN dept d ON e.deptno = d.deptno` sintaksisidan foydalaning.",
    "solutions": [
      "SELECT e.ename, d.dname, d.loc FROM emp e RIGHT JOIN dept d ON e.deptno = d.deptno",
      "SELECT ename, dname, loc FROM emp e RIGHT OUTER JOIN dept d ON e.deptno = d.deptno",
      "SELECT e.ename, d.dname FROM emp e RIGHT JOIN dept d ON e.deptno = d.deptno"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {}
    ],
    "explanation": "L04 Slide 44: O'ng tashqi ulanish o'ng jadvaldagi (`dept`) xodimi yo'q `OPERATIONS` bo'limini ham natijaga qo'shdi.",
    "task": "Xodimlar (`emp e`) and bo'limlar (`dept d`) jadandllarini `deptno` ustuni bo'yicha o'ng tashqi ulanish orqali bog'lab, `ename`, `dname` and `loc` columns chiqaring."
  },
  {
    "id": 103,
    "sector": 7,
    "difficulty": "Floor 7 • Hard",
    "source": "L04 Slide 41 • FULL OUTER JOIN",
    "title": "Ikki Tomonlama To'liq Tashqi Ulanish",
    "story": "Agar ikkala jadvalda ham jufti topilmagan qatorlar bo'lsa, ularning barchasini bitta hisobotda yo'qotmasdan chiqarish uchun to'liq tashqi ulanish kerak bo'ladi.",
    "taskUz": "Bo'limlar (`dept d`) and xodimlar (`emp e`) jadandllarini `deptno` ustuni bo'yicha to'liq tashqi ulanish orqali bog'lab, `dname` and `ename` columns chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `dname`, `ename`\n• Asosiy jadvallar: `dept`, `emp`",
    "starterCode": "",
    "hint": "Jadvallar orasida `FULL JOIN` (yoki `FULL OUTER JOIN`) iborasini yozing.",
    "solutions": [
      "SELECT d.dname, e.ename FROM dept d FULL JOIN emp e ON d.deptno = e.deptno",
      "SELECT d.dname, e.ename FROM dept d FULL OUTER JOIN emp e ON d.deptno = e.deptno",
      "SELECT e.ename, d.dname FROM emp e FULL JOIN dept d ON e.deptno = d.deptno"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "L04 Slide 41: To'liq tashqi ulanish chap va o'ng tashqi ulanishlarning imkoniyatlarini birlashtiradi.",
    "task": "Bo'limlar (`dept d`) and xodimlar (`emp e`) jadandllarini `deptno` ustuni bo'yicha to'liq tashqi ulanish orqali bog'lab, `dname` and `ename` columns chiqaring."
  },
  {
    "id": 104,
    "sector": 7,
    "difficulty": "Floor 7 • Hard",
    "source": "L04 Slide 44 • Anti-Join (LEFT JOIN + IS NULL)",
    "title": "Faqat Bo'sh Turgan Bo'limni Topish",
    "story": "Boshqaruv kengashiga faqatgina birorta ham xodimi yo'q bo'lim haqida ma'lumot kerak. Bo'limlar jadvaliga xodimlarni chap tashqi ulanish bilan ulab, xodim topilmagan qatorni ajratib oling!",
    "taskUz": "Bo'limlar jadandliga (`dept d`) xodimlar jadandlini (`emp e`) `deptno` ustuni bo'yicha chap tashqi ulanish orqali bog'lang and xodim raqami (`e.empno`) bo'sh (`NULL`) having bo'limning `deptno`, `dname` and `loc` columns chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `deptno`, `dname`, `loc`\n• Asosiy jadvallar: `dept`, `emp`",
    "starterCode": "",
    "hint": "`FROM dept d LEFT JOIN emp e ON d.deptno = e.deptno` dan keyin `WHERE e.empno IS NULL` shartini yozing.",
    "solutions": [
      "SELECT d.deptno, d.dname, d.loc FROM dept d LEFT JOIN emp e ON d.deptno = e.deptno WHERE e.empno IS NULL",
      "SELECT d.deptno, d.dname, d.loc FROM dept d LEFT OUTER JOIN emp e ON d.deptno = e.deptno WHERE e.deptno IS NULL"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {}
    ],
    "explanation": "Tashqi ulanish va `IS NULL` kombinatsiyasi (Anti-Join) bog'lanmagan qatorlarni topishning klassik usulidir.",
    "task": "Bo'limlar jadandliga (`dept d`) xodimlar jadandlini (`emp e`) `deptno` ustuni bo'yicha chap tashqi ulanish orqali bog'lang and xodim raqami (`e.empno`) bo'sh (`NULL`) having bo'limning `deptno`, `dname` and `loc` columns chiqaring."
  },
  {
    "id": 105,
    "sector": 7,
    "difficulty": "Floor 7 Yakuni • Master Architect",
    "source": "L04 Multi-Join Boss • Boshqa Shaharda Ishlovchi Rahbarlar",
    "title": "7-Qavat Bossi: Boshqa Filiallardan Boshqariluvchi Xodimlar",
    "story": "7-qavat Boss sinovi! Ba'zi menejerlar o'z bo'limida emas, balki boshqa shahardagi Prezident KINGga (Nyu-York) bo'ysunadi. Xodimning bo'limi bilan uning bevosita rahbarining bo'limi boshqa-boshqa bo'lgan juftliklarni toping!",
    "taskUz": "Xodimlar jadandlini o'z-o'ziga (`emp e` and `emp m`) and bo'limlar jadandliga (`dept d`) ulab, xodimning bo'lim raqami (`e.deptno`) rahbarining bo'lim raqamiga (`m.deptno`) teng bo'lmagan xodimlar uchun `e.ename`, `d.dname` and `m.ename` columns chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `dname`, `manager`\n• Asosiy jadvallar: `emp`, `dept`",
    "starterCode": "",
    "hint": "`emp e` ni `emp m` bilan (`e.supervisor = m.empno`) va `dept d` bilan (`e.deptno = d.deptno`) bog'lab, filtrlash qismida `e.deptno <> m.deptno` shartini yozing.",
    "solutions": [
      "SELECT e.ename, d.dname, m.ename AS manager FROM emp e JOIN emp m ON e.supervisor = m.empno JOIN dept d ON e.deptno = d.deptno WHERE e.deptno <> m.deptno",
      "SELECT e.ename, d.dname, m.ename FROM emp e JOIN emp m ON e.supervisor = m.empno JOIN dept d ON e.deptno = d.deptno WHERE e.deptno != m.deptno"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {},
      {}
    ],
    "explanation": "7-Qavat yakunlandi! Chikagodagi BLAKE va Dallasdagi JONES bevosita Nyu-Yorkdagi Prezident KINGga hisobot beradi.",
    "task": "Xodimlar jadandlini o'z-o'ziga (`emp e` and `emp m`) and bo'limlar jadandliga (`dept d`) ulab, xodimning bo'lim raqami (`e.deptno`) rahbarining bo'lim raqamiga (`m.deptno`) teng bo'lmagan xodimlar uchun `e.ename`, `d.dname` and `m.ename` columns chiqaring."
  },
  {
    "id": 106,
    "sector": 8,
    "difficulty": "Floor 8 • Easy",
    "source": "L04 Slide 47 • COUNT(*) Agregat Funksiyasi",
    "title": "Kompaniyadagi Jami Xodimlar Soni",
    "story": "8-qavat — Korporativ Strategiya va Analitika markaziga xush kelibsiz! Yillik hisobotning birinchi satri uchun kompaniyada jami nechta xodim ishlashini sanang.",
    "taskUz": "Xodimlar jadandlidagi (`emp`) barcha qatorlar sonini sanash funksiyasi using hisoblab chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `COUNT(*)`\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "`SELECT` ichida barcha qatorlarni sanaydigan `COUNT(*)` agregat funksiyasini yozing.",
    "solutions": [
      "SELECT COUNT(*) FROM emp",
      "SELECT COUNT(*) AS total_employees FROM emp"
    ],
    "requiredPatterns": [
      {},
      {}
    ],
    "explanation": "L04 Slide 47: `COUNT(*)` jadvaldagi barcha qatorlarni (`NULL` qiymatlar bor-yo'qligidan qat'i nazar) sanaydi.",
    "task": "Xodimlar jadandlidagi (`emp`) barcha qatorlar sonini sanash funksiyasi using hisoblab chiqaring."
  },
  {
    "id": 107,
    "sector": 8,
    "difficulty": "Floor 8 • Easy",
    "source": "L04 Slide 47–48 • COUNT(*) va COUNT(ustun) Farqi",
    "title": "Jami Xodimlar va Komissiya Oluvchilar Soni",
    "story": "Agregat funksiyalar `NULL` qiymatlarni e'tiborsiz qoldiradi (`COUNT(*)` dan tashqari). Bir vaqtning o'zida jami xodimlar sonini va komissiya ustuni bo'sh bo'lmagan xodimlar sonini chiqaring.",
    "taskUz": "From the employee table (`emp`), jami qatorlar sonini and `comm` ustunidagi `NULL` bo'lmagan qiymatlar sonini bitta so'rovda hisoblab chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `COUNT(*)`, `COUNT(comm)`\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "`SELECT` ro'yxatida `COUNT(*)` va `COUNT(comm)` funksiyalarini vergul bilan yozing.",
    "solutions": [
      "SELECT COUNT(*), COUNT(comm) FROM emp",
      "SELECT COUNT(*) AS total_emp, COUNT(comm) AS comm_emp FROM emp"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {}
    ],
    "explanation": "L04 Slide 48: Jami 14 ta qator bor, lekin `comm` ustuni faqat 4 kishida `NULL` emas (TURNERning 0 qiymati ham sanaladi!).",
    "task": "From the employee table (`emp`), jami qatorlar sonini and `comm` ustunidagi `NULL` bo'lmagan qiymatlar sonini bitta so'rovda hisoblab chiqaring."
  },
  {
    "id": 108,
    "sector": 8,
    "difficulty": "Floor 8 • Easy",
    "source": "L04 Slide 48 • COUNT(DISTINCT ...)",
    "title": "Noyob Lavozimlar va Bo'limlar Soni",
    "story": "Strategiya bo'limi xodimlar jadvalida nechta takrorlanmas lavozim va nechta faol bo'lim borligini bilmoqchi.",
    "taskUz": "From the employee table (`emp`), takrorlanmas (`DISTINCT`) lavozimlar (`job`) sonini and takrorlanmas bo'lim raqamlari (`deptno`) sonini sanab chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `job)`, `deptno)`\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "`COUNT` qavsi ichida `DISTINCT job` va ikkinchisida `DISTINCT deptno` yozing.",
    "solutions": [
      "SELECT COUNT(DISTINCT job), COUNT(DISTINCT deptno) FROM emp",
      "SELECT COUNT(DISTINCT job) AS unique_jobs, COUNT(DISTINCT deptno) AS active_depts FROM emp"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {}
    ],
    "explanation": "L04 Slide 48: Kompaniyada 5 xil lavozim va xodimlari mavjud 3 ta faol bo'lim (10, 20, 30) bor.",
    "task": "From the employee table (`emp`), takrorlanmas (`DISTINCT`) lavozimlar (`job`) sonini and takrorlanmas bo'lim raqamlari (`deptno`) sonini sanab chiqaring."
  },
  {
    "id": 109,
    "sector": 8,
    "difficulty": "Floor 8 • Easy",
    "source": "L04 Slide 47 & 49 • MIN, MAX, SUM, AVG",
    "title": "To'rtta Asosiy Maosh Ko'rsatkichi",
    "story": "Moliya kengashi uchun kompaniya bo'yicha eng kam maosh, eng ko'p maosh, jami maosh fondi va o'rtacha maoshni (2 xonagacha yaxlitlangan) bitta qatorda hisoblang.",
    "taskUz": "From the employee table (`emp`), `sal` columnng eng kichik, eng katta, yig'indi and 2 kasr xonasigacha yaxlitlangan o'rtacha qiymatini chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `MIN(sal)`, `MAX(sal)`, `SUM(sal)`, `ROUND(AVG(sal)`, `2)`\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "`MIN(sal)`, `MAX(sal)`, `SUM(sal)` va `ROUND(AVG(sal), 2)` funksiyalarini ketma-ket yozing.",
    "solutions": [
      "SELECT MIN(sal), MAX(sal), SUM(sal), ROUND(AVG(sal), 2) FROM emp",
      "SELECT MIN(sal) AS min_sal, MAX(sal) AS max_sal, SUM(sal) AS total_sal, ROUND(AVG(sal), 2) AS avg_sal FROM emp"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {},
      {},
      {}
    ],
    "explanation": "L04 Slide 49: Kompaniyaning oylik maosh fondi $29,025 bo'lib, o'rtacha maosh $2,073.21 ni tashkil etadi.",
    "task": "From the employee table (`emp`), `sal` columnng eng kichik, eng katta, yig'indi and 2 kasr xonasigacha yaxlitlangan o'rtacha qiymatini chiqaring."
  },
  {
    "id": 110,
    "sector": 8,
    "difficulty": "Floor 8 • Intermediate",
    "source": "L04 Slide 50–51 • GROUP BY deptno",
    "title": "Bo'limlar Kesimida Xodimlar Soni va Maosh Fondi",
    "story": "Umumiy raqamlarni endi har bir bo'lim (`deptno`) bo'yicha alohida guruhlab ko'rsating!",
    "taskUz": "From the employee table (`emp`), har bir bo'lim raqami (`deptno`), o'sha bo'limdagi xodimlar soni and maoshlar yig'indisini bo'lim raqami bo'yicha guruhlab (`GROUP BY`) and `deptno` in ascending order sorted by chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `deptno`, `COUNT(*)`, `SUM(sal)`\n• Asosiy jadvallar: `emp`\n• Saralash (ORDER BY): `deptno`",
    "starterCode": "",
    "hint": "`SELECT deptno, COUNT(*), SUM(sal) FROM emp` dan so'ng `GROUP BY deptno ORDER BY deptno` yozing.",
    "solutions": [
      "SELECT deptno, COUNT(*), SUM(sal) FROM emp GROUP BY deptno ORDER BY deptno",
      "SELECT deptno, COUNT(*) AS emp_count, SUM(sal) AS total_sal FROM emp GROUP BY deptno ORDER BY deptno"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {},
      {}
    ],
    "explanation": "L04 Slide 51: `GROUP BY` qatorlarni bo'lim raqami bo'yicha guruhlarga ajratib, har bir guruh uchun alohida agregatsiya hisoblaydi.",
    "task": "From the employee table (`emp`), har bir bo'lim raqami (`deptno`), o'sha bo'limdagi xodimlar soni and maoshlar yig'indisini bo'lim raqami bo'yicha guruhlab (`GROUP BY`) and `deptno` in ascending order sorted by chiqaring."
  },
  {
    "id": 111,
    "sector": 8,
    "difficulty": "Floor 8 • Intermediate",
    "source": "L04 Slide 51 • GROUP BY job",
    "title": "Lavozimlar Bo'yicha O'rtacha va Maksimal Maosh",
    "story": "Kadrlar bo'limi har bir lavozim (`job`) bo'yicha nechta xodim borligini, ularning o'rtacha maoshini (2 xonagacha yaxlitlab) va eng yuqori maoshini o'rtacha maosh kamayish tartibida ko'rmoqchi.",
    "taskUz": "From the employee table (`emp`), lavozim (`job`), xodimlar soni, 2 xonagacha yaxlitlangan o'rtacha maosh (`avg_sal` nomi bilan) and eng katta maoshni `job` bo'yicha guruhlab, `avg_sal` in descending order chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `job`, `COUNT(*)`, `ROUND(AVG(sal)`, `avg_sal`, `MAX(sal)`\n• Asosiy jadvallar: `emp`\n• Saralash (ORDER BY): `avg_sal DESC`",
    "starterCode": "",
    "hint": "`GROUP BY job` va `ORDER BY avg_sal DESC` iboralaridan foydalaning.",
    "strictAlias": true,
    "solutions": [
      "SELECT job, COUNT(*), ROUND(AVG(sal), 2) AS avg_sal, MAX(sal) FROM emp GROUP BY job ORDER BY avg_sal DESC",
      "SELECT job, COUNT(*) AS cnt, ROUND(AVG(sal), 2) AS avg_sal, MAX(sal) AS max_sal FROM emp GROUP BY job ORDER BY avg_sal DESC"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {},
      {},
      {}
    ],
    "explanation": "Lavozimlar o'rtacha maosh darajasi bo'yicha PRESIDENT ($5000) dan CLERK ($1037.50) gacha saralandi.",
    "task": "From the employee table (`emp`), lavozim (`job`), xodimlar soni, 2 xonagacha yaxlitlangan o'rtacha maosh (`avg_sal` nomi bilan) and eng katta maoshni `job` bo'yicha guruhlab, `avg_sal` in descending order chiqaring."
  },
  {
    "id": 112,
    "sector": 8,
    "difficulty": "Floor 8 • Intermediate",
    "source": "L04 Slide 52 • Ikki Ustun Bo'yicha GROUP BY",
    "title": "Bo'lim va Lavozim Matritsasi",
    "story": "Har bir bo'limning ichida qaysi lavozimdan nechta xodim borligini va ularning jami maoshini ko'rish uchun ikkita ustun bo'yicha guruhlash talab etiladi.",
    "taskUz": "From the employee table (`emp`), `deptno`, `job`, xodimlar soni and maoshlar yig'indisini `deptno` and `job` bo'yicha guruhlab and xuddi shu ikki ustun bo'yicha sorted by chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `deptno`, `job`, `COUNT(*)`, `SUM(sal)`\n• Asosiy jadvallar: `emp`\n• Saralash (ORDER BY): `deptno, job`",
    "starterCode": "",
    "hint": "Ham guruhlash (`GROUP BY`), ham saralash (`ORDER BY`) qismida `deptno, job` ustunlarini yozing.",
    "solutions": [
      "SELECT deptno, job, COUNT(*), SUM(sal) FROM emp GROUP BY deptno, job ORDER BY deptno, job",
      "SELECT deptno, job, COUNT(*) AS cnt, SUM(sal) AS sum_sal FROM emp GROUP BY deptno, job ORDER BY deptno, job"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {},
      {}
    ],
    "explanation": "L04 Slide 52: `SELECT` dagi agregat bo'lmagan barcha ustunlar (`deptno, job`) `GROUP BY` bandida qatnashishi shart!",
    "task": "From the employee table (`emp`), `deptno`, `job`, xodimlar soni and maoshlar yig'indisini `deptno` and `job` bo'yicha guruhlab and xuddi shu ikki ustun bo'yicha sorted by chiqaring."
  },
  {
    "id": 113,
    "sector": 8,
    "difficulty": "Floor 8 • Intermediate",
    "source": "L04 Slide 53–54 • HAVING Bandi",
    "title": "Kamida 4 Nafar Xodimi Bor Bo'limlar (`HAVING`)",
    "story": "Guruhlangan natijalarni agregat funksiya bo'yicha filtrlash uchun `WHERE` emas, balki maxsus `HAVING` bandi ishlatiladi!",
    "taskUz": "From the employee table (`emp`), xodimlar soni `4` ta yoki undan ko'p having bo'limlarning `deptno` and xodimlar sonini guruhlab chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `deptno`, `COUNT(*)`\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "`GROUP BY deptno` dan keyin `HAVING COUNT(*) >= 4` shartini yozing (`WHERE` ichida agregat funksiya ishlatmang!).",
    "solutions": [
      "SELECT deptno, COUNT(*) FROM emp GROUP BY deptno HAVING COUNT(*) >= 4",
      "SELECT deptno, COUNT(*) AS emp_count FROM emp GROUP BY deptno HAVING COUNT(*) >= 4 ORDER BY deptno"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {}
    ],
    "trapChecks": [
      {
        "regex": {},
        "message": "⚠️ Diqqat: `WHERE` bandida agregat funksiya (`COUNT`) ishlatib bo'lmaydi! Guruhlarni filtrlash uchun `GROUP BY` dan keyin `HAVING` ishlating."
      }
    ],
    "explanation": "L04 Slide 54: `WHERE` guruhlashdan oldin yakka qatorlarni filtrlaydi, `HAVING` esa guruhlashdan keyin tayyor guruhlarni filtrlaydi.",
    "task": "From the employee table (`emp`), xodimlar soni `4` ta yoki undan ko'p having bo'limlarning `deptno` and xodimlar sonini guruhlab chiqaring."
  },
  {
    "id": 114,
    "sector": 8,
    "difficulty": "Floor 8 • Intermediate",
    "source": "L04 Slide 54 • HAVING AVG(sal)",
    "title": "O'rtacha Maoshi 2000 dan Yuqori Bo'limlar",
    "story": "Strategiya kengashi faqatgina o'rtacha maoshi 2000 dollardan yuqori bo'lgan bo'limlarni ko'rib chiqmoqchi.",
    "taskUz": "From the employee table (`emp`), o'rtacha maoshi `2000` dan katta having bo'limlarning `deptno` and 2 xonagacha yaxlitlangan o'rtacha maoshini guruhlab chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `deptno`, `ROUND(AVG(sal)`, `2)`\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "`GROUP BY deptno` dan keyin `HAVING AVG(sal) > 2000` shartini qo'llang.",
    "solutions": [
      "SELECT deptno, ROUND(AVG(sal), 2) FROM emp GROUP BY deptno HAVING AVG(sal) > 2000",
      "SELECT deptno, ROUND(AVG(sal), 2) AS avg_sal FROM emp GROUP BY deptno HAVING AVG(sal) > 2000 ORDER BY deptno"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {}
    ],
    "explanation": "10-bo'lim ($2916.67) va 20-bo'lim ($2175.00) o'rtacha maoshi 2000 dan yuqori; 30-bo'lim ($1566.67) esa filtrdan o'tmadi.",
    "task": "From the employee table (`emp`), o'rtacha maoshi `2000` dan katta having bo'limlarning `deptno` and 2 xonagacha yaxlitlangan o'rtacha maoshini guruhlab chiqaring."
  },
  {
    "id": 115,
    "sector": 8,
    "difficulty": "Floor 8 • Hard",
    "source": "L04 Slide 55 • WHERE + GROUP BY + HAVING Birgalikda",
    "title": "Klerklarsiz Bo'limlar Maosh Fondi",
    "story": "Endi `WHERE`, `GROUP BY` va `HAVING` ni bitta so'rovda birlashtiramiz: avval klerklarni hisobdan chiqarib tashlang, keyin qolganlarni bo'lim bo'yicha guruhlab, maoshlar yig'indisi 5000 dan katta bo'limlarni qoldiring!",
    "taskUz": "From the employee table (`emp`), lavozimi `'CLERK'` bo'lmagan xodimlarni ajratib (`WHERE`), `deptno` bo'yicha guruhlang and qolgan xodimlarning maosh yig'indisi `5000` dan katta having bo'limlarning `deptno` and maosh yig'indisini chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `deptno`, `SUM(sal)`\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "Avval `WHERE job <> 'CLERK'`, keyin `GROUP BY deptno`, va undan keyin `HAVING SUM(sal) > 5000` yozing.",
    "solutions": [
      "SELECT deptno, SUM(sal) FROM emp WHERE job <> 'CLERK' GROUP BY deptno HAVING SUM(sal) > 5000",
      "SELECT deptno, SUM(sal) AS total_sal FROM emp WHERE job != 'CLERK' GROUP BY deptno HAVING SUM(sal) > 5000 ORDER BY deptno"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {},
      {}
    ],
    "explanation": "L04 Slide 55: Avval `WHERE` 4 ta klerkni olib tashladi, so'ng `GROUP BY` qolgan 10 kishini guruhladi, va `HAVING` yig'indini tekshirdi.",
    "task": "From the employee table (`emp`), lavozimi `'CLERK'` bo'lmagan xodimlarni ajratib (`WHERE`), `deptno` bo'yicha guruhlang and qolgan xodimlarning maosh yig'indisi `5000` dan katta having bo'limlarning `deptno` and maosh yig'indisini chiqaring."
  },
  {
    "id": 116,
    "sector": 8,
    "difficulty": "Floor 8 • Hard",
    "source": "L04 JOIN + GROUP BY • 40-Bo'limda 0 Chiqarish Tuzog'i",
    "title": "Barcha 4 ta Bo'limdagi Xodimlar Soni (0 Bilan)",
    "story": "Diqqat, klassik VIVA savoli! Agar `dept` va `emp` ni chap tashqi ulanish bilan bog'lab `COUNT(*)` yozsangiz, bo'sh 40-bo'lim uchun ham `1` chiqib qoladi! 40-bo'limda `0` chiqishi uchun nimani sanash kerak?",
    "taskUz": "Bo'limlar (`dept d`) jadandlidan chap tashqi ulanish orqali xodimlar (`emp e`) jadandliga bog'lanib, har bir bo'lim nomi (`d.dname`) and undagi haqiqiy xodimlar sonini (40-bo'lim uchun `0` chiqadigan qilib) `d.deptno` and `d.dname` bo'yicha guruhlab chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `dname`, `empno)`\n• Asosiy jadvallar: `dept`, `emp`\n• Saralash (ORDER BY): `d.deptno`",
    "starterCode": "",
    "hint": "`COUNT(*)` o'rniga `COUNT(e.empno)` ishlating, chunki 40-bo'limda `e.empno` qiymati `NULL` bo'ladi va `COUNT(ustun)` uni `0` deb sanaydi!",
    "solutions": [
      "SELECT d.dname, COUNT(e.empno) FROM dept d LEFT JOIN emp e ON d.deptno = e.deptno GROUP BY d.deptno, d.dname ORDER BY d.deptno",
      "SELECT d.dname, COUNT(e.empno) FROM dept d LEFT JOIN emp e ON d.deptno = e.deptno GROUP BY d.dname"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {}
    ],
    "trapChecks": [
      {
        "regex": {},
        "message": "⚠️ VIVA Tuzog'i: `LEFT JOIN` da `COUNT(*)` bo'sh 40-bo'limning `NULL` qatorini ham `1` deb sanab yuboradi! `COUNT(e.empno)` ishlating."
      }
    ],
    "explanation": "`COUNT(e.empno)` faqat `NULL` bo'lmagan xodim ID larini sanagani uchun `OPERATIONS` bo'limida to'g'ri `0` natija chiqdi!",
    "task": "Bo'limlar (`dept d`) jadandlidan chap tashqi ulanish orqali xodimlar (`emp e`) jadandliga bog'lanib, har bir bo'lim nomi (`d.dname`) and undagi haqiqiy xodimlar sonini (40-bo'lim uchun `0` chiqadigan qilib) `d.deptno` and `d.dname` bo'yicha guruhlab chiqaring."
  },
  {
    "id": 117,
    "sector": 8,
    "difficulty": "Floor 8 • Intermediate",
    "source": "L04 Slide 80–82 • CASE WHEN Shartli Ifodasi",
    "title": "Maosh Darajasini Matn Bilan Tasniflash (`CASE`)",
    "story": "L04 Slide 80: SQL da `IF-THEN-ELSE` mantiqini bajarish uchun `CASE WHEN ... THEN ... ELSE ... END` tuzilmasi ishlatiladi.",
    "taskUz": "From the employee table (`emp`), `ename`, `sal` and shartli ifoda (`CASE`) using maoshi `3000` and undan yuqori bo'lsa `'High'`, `1500` and undan yuqori bo'lsa `'Medium'`, aks holda `'Low'` qiymatini qaytaruvchi ustunni chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `sal`, `sal_tier`\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "`CASE WHEN sal >= 3000 THEN 'High' WHEN sal >= 1500 THEN 'Medium' ELSE 'Low' END` tuzilmasini `SELECT` ichida yozing.",
    "solutions": [
      "SELECT ename, sal, CASE WHEN sal >= 3000 THEN 'High' WHEN sal >= 1500 THEN 'Medium' ELSE 'Low' END AS sal_tier FROM emp",
      "SELECT ename, sal, CASE WHEN sal >= 3000 THEN 'High' WHEN sal >= 1500 THEN 'Medium' ELSE 'Low' END FROM emp"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "L04 Slide 81: `CASE` ifodasi shartlarni yuqoridan pastga qarab tekshiradi va birinchi mos kelgan `WHEN` shoxida to'xtaydi.",
    "task": "From the employee table (`emp`), `ename`, `sal` and shartli ifoda (`CASE`) using maoshi `3000` and undan yuqori bo'lsa `'High'`, `1500` and undan yuqori bo'lsa `'Medium'`, aks holda `'Low'` qiymatini qaytaruvchi ustunni chiqaring."
  },
  {
    "id": 118,
    "sector": 8,
    "difficulty": "Floor 8 • Hard",
    "source": "L04 Slide 83 • Shartli Agregatsiya (CASE ichida COUNT/SUM)",
    "title": "Yuqori va Past Maoshlilar Sonini Bitta Qatorda Sanash",
    "story": "Kengashga bitta umumiy qatorda ikkita raqam kerak: maoshi 2000 va undan yuqori bo'lgan xodimlar soni hamda maoshi 2000 dan past bo'lgan xodimlar soni.",
    "taskUz": "From the employee table (`emp`), shartli agregatsiya (`SUM` yoki `COUNT` ichida `CASE`) using maoshi `>= 2000` havinglar sonini and maoshi `< 2000` havinglar sonini bitta qatorda hisoblab chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `high_earners`, `low_earners`\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "`COUNT(CASE WHEN sal >= 2000 THEN 1 END)` (yoki `SUM(CASE WHEN sal >= 2000 THEN 1 ELSE 0 END)`) usulidan foydalaning.",
    "solutions": [
      "SELECT COUNT(CASE WHEN sal >= 2000 THEN 1 END) AS high_earners, COUNT(CASE WHEN sal < 2000 THEN 1 END) AS low_earners FROM emp",
      "SELECT SUM(CASE WHEN sal >= 2000 THEN 1 ELSE 0 END), SUM(CASE WHEN sal < 2000 THEN 1 ELSE 0 END) FROM emp"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {}
    ],
    "explanation": "L04 Slide 83: `CASE` ni agregat funksiya ichiga joylash orqali qatorlarni ustunlarga (Pivot) aylantirish mumkin.",
    "task": "From the employee table (`emp`), shartli agregatsiya (`SUM` yoki `COUNT` ichida `CASE`) using maoshi `>= 2000` havinglar sonini and maoshi `< 2000` havinglar sonini bitta qatorda hisoblab chiqaring."
  },
  {
    "id": 119,
    "sector": 8,
    "difficulty": "Floor 8 • Hard",
    "source": "L04 Non-Equi Join + GROUP BY • Razryadlar Kesimida Statistika",
    "title": "Har Bir Maosh Razryadidagi Xodimlar Soni",
    "story": "Xodimlar va maosh razryadlari (`salgrade`) jadvallarini bog'lab, har bir razryadda (`grade` 1 dan 5 gacha) nechtadan xodim borligini va o'sha razryaddagi o'rtacha maoshni aniqlang.",
    "taskUz": "`emp e` and `salgrade s` jadandllarini maosh diapazoni (`BETWEEN losal AND hisal`) bo'yicha bog'lab, `s.grade` bo'yicha guruhlang and `grade`, xodimlar soni and 2 xonagacha yaxlitlangan o'rtacha maoshni `grade` tartibida chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `grade`, `COUNT(*)`, `sal)`, `2)`\n• Asosiy jadvallar: `emp`, `salgrade`\n• Saralash (ORDER BY): `s.grade`",
    "starterCode": "",
    "hint": "`JOIN salgrade s ON e.sal BETWEEN s.losal AND s.hisal` dan keyin `GROUP BY s.grade ORDER BY s.grade` yozing.",
    "solutions": [
      "SELECT s.grade, COUNT(*), ROUND(AVG(e.sal), 2) FROM emp e JOIN salgrade s ON e.sal BETWEEN s.losal AND s.hisal GROUP BY s.grade ORDER BY s.grade",
      "SELECT grade, COUNT(*), ROUND(AVG(sal), 2) FROM emp JOIN salgrade ON sal BETWEEN losal AND hisal GROUP BY grade ORDER BY grade"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {},
      {},
      {}
    ],
    "explanation": "Eng ko'p xodim (5 kishi) 4-razryadda ($2001–$3000) to'plangan, 5-razryadda esa faqat Prezident KING bor.",
    "task": "`emp e` and `salgrade s` jadandllarini maosh diapazoni (`BETWEEN losal AND hisal`) bo'yicha bog'lab, `s.grade` bo'yicha guruhlang and `grade`, xodimlar soni and 2 xonagacha yaxlitlangan o'rtacha maoshni `grade` tartibida chiqaring."
  },
  {
    "id": 120,
    "sector": 8,
    "difficulty": "Floor 8 Yakuni • Master Architect",
    "source": "L04 Executive Pivot Boss • Bo'limlar va Lavozim Guruhlari",
    "title": "8-Qavat Bossi: Bo'limlar Bo'yicha Menejerlar va Klerklar Soni",
    "story": "8-qavat Boss sinovi! Boshqaruv kengashi uchun har bir bo'limda (`deptno`) jami nechta xodim, shulardan nechtasi `'MANAGER'` va nechtasi `'CLERK'` ekanligini bitta jadvalda ko'rsatuvchi svodniy (pivot) hisobot tuzing!",
    "taskUz": "From the employee table (`emp`), `deptno`, jami xodimlar soni, shartli agregatsiya using `'MANAGER'` lar soni and `'CLERK'` lar sonini `deptno` bo'yicha guruhlab and `deptno` tartibida sorted by chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `deptno`, `total`, `managers`, `clerks`\n• Asosiy jadvallar: `emp`\n• Saralash (ORDER BY): `deptno`",
    "starterCode": "",
    "hint": "`SELECT deptno, COUNT(*), COUNT(CASE WHEN job = 'MANAGER' THEN 1 END), COUNT(CASE WHEN job = 'CLERK' THEN 1 END)` ko'rinishida yozib, `GROUP BY deptno ORDER BY deptno` qo'shing.",
    "solutions": [
      "SELECT deptno, COUNT(*) AS total, COUNT(CASE WHEN job = 'MANAGER' THEN 1 END) AS managers, COUNT(CASE WHEN job = 'CLERK' THEN 1 END) AS clerks FROM emp GROUP BY deptno ORDER BY deptno",
      "SELECT deptno, COUNT(*), SUM(CASE WHEN job = 'MANAGER' THEN 1 ELSE 0 END), SUM(CASE WHEN job = 'CLERK' THEN 1 ELSE 0 END) FROM emp GROUP BY deptno ORDER BY deptno"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {},
      {}
    ],
    "explanation": "8-Qavat yakunlandi! Har bir bo'limda 1 nafardan menejer borligi, 20-bo'limda esa 2 nafar klerk ishlashi aniq ko'rindi!",
    "task": "From the employee table (`emp`), `deptno`, jami xodimlar soni, shartli agregatsiya using `'MANAGER'` lar soni and `'CLERK'` lar sonini `deptno` bo'yicha guruhlab and `deptno` tartibida sorted by chiqaring."
  },
  {
    "id": 121,
    "sector": 9,
    "difficulty": "Floor 9 • Easy",
    "source": "L04 Slide 57–58 • Skalyar Ichki So'rov (Subquery)",
    "title": "JONESdan Ko'p Maosh Oluvchi Xodimlar",
    "story": "9-qavat — Direktorlar Kengashi. Biz JONES qancha maosh olishini yoddan bilmaymiz deb faraz qiling. Ichki so'rov (Subquery) yordamida avval JONESning maoshini topib, undan ko'p oladiganlarni chiqaring!",
    "taskUz": "From the employee table (`emp`), maoshi (`sal`) `'JONES'` ismli xodimning maoshidan katta having xodimlarning `ename`, `job` and `sal` columns ichki so'rov using chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `job`, `sal`\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "`WHERE sal > (...)` qavsi ichida `'JONES'` ning maoshini qaytaruvchi alohida `SELECT` so'rovini yozing.",
    "solutions": [
      "SELECT ename, job, sal FROM emp WHERE sal > (SELECT sal FROM emp WHERE ename = 'JONES')",
      "SELECT * FROM emp WHERE sal > (SELECT sal FROM emp WHERE ename = 'JONES')"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "L04 Slide 58: Ichki so'rov `$2975` qiymatini qaytaradi, tashqi so'rov esa undan katta bo'lgan KING, FORD va SCOTTni topadi.",
    "task": "From the employee table (`emp`), maoshi (`sal`) `'JONES'` ismli xodimning maoshidan katta having xodimlarning `ename`, `job` and `sal` columns ichki so'rov using chiqaring."
  },
  {
    "id": 122,
    "sector": 9,
    "difficulty": "Floor 9 • Easy",
    "source": "L04 Slide 59 • Agregat Funksiya Bilan Ichki So'rov",
    "title": "Kompaniyada Eng Kam Maosh Oluvchi Xodim",
    "story": "`WHERE sal = MIN(sal)` deb yozish xato beradi! Eng kam maosh oluvchi xodimning ismini topish uchun `MIN(sal)` ni ichki so'rov ichiga joylang.",
    "taskUz": "From the employee table (`emp`), maoshi kompaniya bo'yicha eng kichik maoshga teng having xodimning `ename`, `job` and `sal` columns ichki so'rov using chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `job`, `sal`\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "`WHERE sal = (...)` qavsi ichida `emp` jadvalidan minimal maoshni topuvchi `SELECT` yozing.",
    "solutions": [
      "SELECT ename, job, sal FROM emp WHERE sal = (SELECT MIN(sal) FROM emp)",
      "SELECT * FROM emp WHERE sal = (SELECT MIN(sal) FROM emp)"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "L04 Slide 59: Ichki so'rov `800` ni topdi, tashqi so'rov esa shu maosh egasi SMITH ekanini aniqladi.",
    "task": "From the employee table (`emp`), maoshi kompaniya bo'yicha eng kichik maoshga teng having xodimning `ename`, `job` and `sal` columns ichki so'rov using chiqaring."
  },
  {
    "id": 123,
    "sector": 9,
    "difficulty": "Floor 9 • Intermediate",
    "source": "L04 Slide 59 • O'rtacha Maoshdan Yuqori Oluvchilar",
    "title": "Kompaniya O'rtacha Maoshidan Yuqori Oluvchilar",
    "story": "Direktorlar kengashi kompaniyaning o'rtacha maoshidan (`$2073.21`) ko'proq maosh oladigan barcha xodimlarni ko'rmoqchi.",
    "taskUz": "From the employee table (`emp`), maoshi kompaniyaning o'rtacha maoshidan katta having xodimlarning `ename`, `job` and `sal` columns ichki so'rov using chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `job`, `sal`\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "`WHERE sal > (...)` qavsi ichida o'rtacha maoshni hisoblovchi ichki `SELECT` so'rovini yozing.",
    "solutions": [
      "SELECT ename, job, sal FROM emp WHERE sal > (SELECT AVG(sal) FROM emp)",
      "SELECT * FROM emp WHERE sal > (SELECT AVG(sal) FROM emp)"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "Olti nafar xodim (KING, BLAKE, CLARK, JONES, FORD, SCOTT) o'rtacha ko'rsatkichdan yuqori maosh oladi.",
    "task": "From the employee table (`emp`), maoshi kompaniyaning o'rtacha maoshidan katta having xodimlarning `ename`, `job` and `sal` columns ichki so'rov using chiqaring."
  },
  {
    "id": 124,
    "sector": 9,
    "difficulty": "Floor 9 • Intermediate",
    "source": "L04 Slide 60 • Ikkita Ichki So'rov Kombinatsiyasi",
    "title": "7369-Xodim Lavozimidagi va 7876-Xodimdan Ko'p Oluvchilar",
    "story": "L04 Slide 60: Bitta `WHERE` ichida ikkita mustaqil ichki so'rovni `AND` bilan bog'lash mumkin!",
    "taskUz": "From the employee table (`emp`), lavozimi (`job`) `empno = 7369` having xodimning lavozimi bilan bir xil and maoshi (`sal`) `empno = 7876` having xodimning maoshidan katta havinglarning `ename`, `job` and `sal` columns chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `job`, `sal`\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "Birinchi ichki so'rovda `7369` ning `job` ustunini, ikkinchi ichki so'rovda `7876` ning `sal` ustunini olib `AND` bilan birlashtiring.",
    "solutions": [
      "SELECT ename, job, sal FROM emp WHERE job = (SELECT job FROM emp WHERE empno = 7369) AND sal > (SELECT sal FROM emp WHERE empno = 7876)"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "L04 Slide 60: 7369 (SMITH) — `CLERK`, 7876 (ADAMS) maoshi — `1100`. 1100 dan ko'p oladigan yagona klerk bu MILLER ($1300)!",
    "task": "From the employee table (`emp`), lavozimi (`job`) `empno = 7369` having xodimning lavozimi bilan bir xil and maoshi (`sal`) `empno = 7876` having xodimning maoshidan katta havinglarning `ename`, `job` and `sal` columns chiqaring."
  },
  {
    "id": 125,
    "sector": 9,
    "difficulty": "Floor 9 • Hard",
    "source": "L04 Slide 61 • HAVING Ichida Ichki So'rov",
    "title": "Minimal Maoshi 20-Bo'limnikidan Katta Bo'limlar",
    "story": "L04 Slide 61: Ichki so'rovni `HAVING` bandi ichida ham ishlatish mumkin! Eng kam maoshi 20-bo'limning eng kam maoshidan ($800) katta bo'lgan bo'limlarni toping.",
    "taskUz": "From the employee table (`emp`), `deptno` bo'yicha guruhlab, bo'limdagi eng kichik maosh `20`-bo'limning eng kichik maoshidan katta having bo'limlarning `deptno` and minimal maoshini chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `deptno`, `MIN(sal)`\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "`GROUP BY deptno` dan keyin `HAVING MIN(sal) > (...)` yozib, qavs ichida 20-bo'limning minimal maoshini toping.",
    "solutions": [
      "SELECT deptno, MIN(sal) FROM emp GROUP BY deptno HAVING MIN(sal) > (SELECT MIN(sal) FROM emp WHERE deptno = 20)",
      "SELECT deptno, MIN(sal) AS min_sal FROM emp GROUP BY deptno HAVING MIN(sal) > (SELECT MIN(sal) FROM emp WHERE deptno = 20) ORDER BY deptno"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {}
    ],
    "explanation": "L04 Slide 61: 20-bo'limning minimal maoshi $800. 10-bo'lim ($1300) va 30-bo'lim ($950) undan yuqori ko'rsatkichga ega.",
    "task": "From the employee table (`emp`), `deptno` bo'yicha guruhlab, bo'limdagi eng kichik maosh `20`-bo'limning eng kichik maoshidan katta having bo'limlarning `deptno` and minimal maoshini chiqaring."
  },
  {
    "id": 126,
    "sector": 9,
    "difficulty": "Floor 9 • Intermediate",
    "source": "L04 Slide 62 • Ko'p Qatorli Ichki So'rov (IN)",
    "title": "Kamida 5 Nafar Xodimi Bor Bo'limlardagi Ishchilar",
    "story": "Agar ichki so'rov bittadan ko'p qator qaytarsa, `=` o'rniga `IN` operatoridan foydalaniladi.",
    "taskUz": "From the employee table (`emp`), xodimlar soni `5` yoki undan ko'p having bo'limlarda ishlovchi xodimlarning `ename`, `job` and `deptno` columns `IN` and ichki so'rov using chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `job`, `deptno`\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "`WHERE deptno IN (...)` qavsi ichida `deptno` bo'yicha guruhlab `HAVING COUNT(*) >= 5` sharti bilan bo'lim raqamlarini qaytaring.",
    "solutions": [
      "SELECT ename, job, deptno FROM emp WHERE deptno IN (SELECT deptno FROM emp GROUP BY deptno HAVING COUNT(*) >= 5)"
    ],
    "requiredPatterns": [
      {},
      {}
    ],
    "explanation": "Ichki so'rov `{20, 30}` ro'yxatini qaytardi, tashqi so'rov esa shu ikki bo'limdagi 11 nafar xodimni chiqardi.",
    "task": "From the employee table (`emp`), xodimlar soni `5` yoki undan ko'p having bo'limlarda ishlovchi xodimlarning `ename`, `job` and `deptno` columns `IN` and ichki so'rov using chiqaring."
  },
  {
    "id": 127,
    "sector": 9,
    "difficulty": "Floor 9 • Hard",
    "source": "L04 Slide 63 • < ANY Operatori",
    "title": "Birorta Sotuvchidan Kam Maosh Oluvchi Xodimlar (`< ANY`)",
    "story": "L04 Slide 63: `< ANY` — ro'yxatdagi hech bo'lmaganda bitta qiymatdan (ya'ni eng kattasidan) kichik bo'lishni bildiradi.",
    "taskUz": "From the employee table (`emp`), lavozimi `'SALESMAN'` bo'lmagan and maoshi `'SALESMAN'` lavozimidagi xodimlarning hech bo'lmaganda bittasidan kichik (`< ANY`) having xodimlarning `ename`, `job` and `sal` columns chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `job`, `sal`\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "`WHERE job <> 'SALESMAN' AND sal < ANY (...)` yozib, qavs ichida sotuvchilarning maoshini tanlang.",
    "solutions": [
      "SELECT ename, job, sal FROM emp WHERE job <> 'SALESMAN' AND sal < ANY (SELECT sal FROM emp WHERE job = 'SALESMAN')"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "L04 Slide 63: Sotuvchilarning maksimal maoshi $1600 (ALLEN). `< ANY` sharti $1600 dan kam oluvchi barcha 4 ta klerkni topdi.",
    "task": "From the employee table (`emp`), lavozimi `'SALESMAN'` bo'lmagan and maoshi `'SALESMAN'` lavozimidagi xodimlarning hech bo'lmaganda bittasidan kichik (`< ANY`) having xodimlarning `ename`, `job` and `sal` columns chiqaring."
  },
  {
    "id": 128,
    "sector": 9,
    "difficulty": "Floor 9 • Hard",
    "source": "L04 Slide 64 • > ALL Operatori",
    "title": "Barcha Menejerlardan Ko'p Maosh Oluvchilar (`> ALL`)",
    "story": "L04 Slide 64: `> ALL` — ro'yxatdagi BARCHA qiymatlardan (ya'ni eng kattasidan ham) katta bo'lishni talab qiladi!",
    "taskUz": "From the employee table (`emp`), maoshi barcha `'MANAGER'` lavozimidagi xodimlarning maoshidan katta (`> ALL`) having xodimlarning `ename`, `job` and `sal` columns chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `job`, `sal`\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "`WHERE sal > ALL (...)` yozib, qavs ichida menejerlarning maoshini qaytaruvchi `SELECT` yozing.",
    "solutions": [
      "SELECT ename, job, sal FROM emp WHERE sal > ALL (SELECT sal FROM emp WHERE job = 'MANAGER')"
    ],
    "requiredPatterns": [
      {},
      {}
    ],
    "explanation": "L04 Slide 64: Eng ko'p maosh oluvchi menejer — JONES ($2975). Undan ko'p oladiganlar: KING ($5000), FORD ($3000) va SCOTT ($3000).",
    "task": "From the employee table (`emp`), maoshi barcha `'MANAGER'` lavozimidagi xodimlarning maoshidan katta (`> ALL`) having xodimlarning `ename`, `job` and `sal` columns chiqaring."
  },
  {
    "id": 129,
    "sector": 9,
    "difficulty": "Floor 9 • Hard",
    "source": "L04 Slide 65 • Bog'langan Ichki So'rov (Correlated Subquery)",
    "title": "O'z Bo'limining O'rtacha Maoshidan Ko'p Oluvchilar",
    "story": "L04 Slide 65: Har bir xodimni butun kompaniya bilan emas, balki O'Z BO'LIMINING (`e.deptno`) o'rtacha maoshi bilan solishtirish uchun bog'langan ichki so'rov (Correlated Subquery) ishlatiladi!",
    "taskUz": "Xodimlar jadandlidan (`emp e`) maoshi o'zi ishlayotgan bo'limning (`e.deptno`) o'rtacha maoshidan katta having xodimlarning `ename`, `deptno` and `sal` columns bog'langan ichki so'rov using chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `deptno`, `sal`\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "Tashqi jadvalga `emp e` deb nom bering, ichki so'rovda esa `WHERE deptno = e.deptno` sharti bilan o'rtacha maoshni hisoblang.",
    "solutions": [
      "SELECT e.ename, e.deptno, e.sal FROM emp e WHERE e.sal > (SELECT AVG(sal) FROM emp WHERE deptno = e.deptno)",
      "SELECT ename, deptno, sal FROM emp e WHERE sal > (SELECT AVG(sal) FROM emp d WHERE d.deptno = e.deptno)"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "L04 Slide 65: Bog'langan ichki so'rov har bir tashqi qatorning bo'limi uchun alohida o'rtacha maoshni hisoblab solishtiradi.",
    "task": "Xodimlar jadandlidan (`emp e`) maoshi o'zi ishlayotgan bo'limning (`e.deptno`) o'rtacha maoshidan katta having xodimlarning `ename`, `deptno` and `sal` columns bog'langan ichki so'rov using chiqaring."
  },
  {
    "id": 130,
    "sector": 9,
    "difficulty": "Floor 9 • Hard",
    "source": "L04 Slide 66 • EXISTS Operatori",
    "title": "Kamida Bitta Xodimi Bor Bo'limlar (`EXISTS`)",
    "story": "L04 Slide 66: `EXISTS` operatori ichki so'rov kamida bitta qator qaytarsa `TRUE` beradi va darhol qidiruvni to'xtatadi.",
    "taskUz": "Bo'limlar jadandlidan (`dept d`) `EXISTS` operatori and bog'langan ichki so'rov using `emp` jadandlida kamida bitta xodimi mavjud having bo'limlarning `deptno` and `dname` columns chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `deptno`, `dname`\n• Asosiy jadvallar: `dept`",
    "starterCode": "",
    "hint": "`WHERE EXISTS (...)` qavsi ichida `emp e` jadvalidan `e.deptno = d.deptno` sharti bilan qator tekshiring.",
    "solutions": [
      "SELECT d.deptno, d.dname FROM dept d WHERE EXISTS (SELECT 1 FROM emp e WHERE e.deptno = d.deptno)",
      "SELECT deptno, dname FROM dept d WHERE EXISTS (SELECT * FROM emp e WHERE e.deptno = d.deptno)"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "L04 Slide 66: `EXISTS` yordamida xodimlari bor 10, 20 va 30-bo'limlar ajratib olindi.",
    "task": "Bo'limlar jadandlidan (`dept d`) `EXISTS` operatori and bog'langan ichki so'rov using `emp` jadandlida kamida bitta xodimi mavjud having bo'limlarning `deptno` and `dname` columns chiqaring."
  },
  {
    "id": 131,
    "sector": 9,
    "difficulty": "Floor 9 • Hard",
    "source": "L04 Slide 66 • NOT EXISTS va NULL Tuzog'i",
    "title": "Qo'l Ostida Hech Kim Ishlamaydigan Xodimlar (`NOT EXISTS`)",
    "story": "VIVA Oltin Qoidasi: `supervisor` ustunida `NULL` borligi sababli `NOT IN (SELECT supervisor FROM emp)` yozilsa, natija bo'm-bo'sh (0 qator) chiqadi! `NULL` dan qo'rqmaydigan `NOT EXISTS` yordamida hech kimga rahbar bo'lmagan xodimlarni toping!",
    "taskUz": "Xodimlar jadandlidan (`emp e`) `NOT EXISTS` and bog'langan ichki so'rov (`emp sub`) using hech bir boshqa xodimning `supervisor` ustunida uchramaydigan (bo'ysunuvchisi yo'q) xodimlarning `ename` and `job` columns chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `job`\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "`WHERE NOT EXISTS (...)` qavsi ichida `emp sub` jadvalidan `sub.supervisor = e.empno` bo'lgan qatorni qidiring.",
    "solutions": [
      "SELECT e.ename, e.job FROM emp e WHERE NOT EXISTS (SELECT 1 FROM emp sub WHERE sub.supervisor = e.empno)",
      "SELECT ename, job FROM emp e WHERE NOT EXISTS (SELECT * FROM emp m WHERE m.supervisor = e.empno)"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "`NOT EXISTS` `NULL` qiymatlardan zarar ko'rmaydi va qo'l ostida xodimi yo'q 8 nafar mutaxassisni bexato topdi!",
    "task": "Xodimlar jadandlidan (`emp e`) `NOT EXISTS` and bog'langan ichki so'rov (`emp sub`) using hech bir boshqa xodimning `supervisor` ustunida uchramaydigan (bo'ysunuvchisi yo'q) xodimlarning `ename` and `job` columns chiqaring."
  },
  {
    "id": 132,
    "sector": 9,
    "difficulty": "Floor 9 • Intermediate",
    "source": "L04 Slide 45 • UNION To'plam Operatori",
    "title": "10 va 20-Bo'limdagi Lavozimlar Birlashmasi (`UNION`)",
    "story": "L04 Slide 45: To'plam operatorlari ikkita alohida `SELECT` natijasini ustma-ust birlashtiradi. `UNION` takroriy qatorlarni avtomatik olib tashlaydi.",
    "taskUz": "10-bo'limdagi lavozimlar (`job`) so'rovi bilan 20-bo'limdagi lavozimlar so'rovini takrorlarsiz birlashtiruvchi to'plam operatori (`UNION`) using chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `job`\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "Birinchi `SELECT job FROM emp WHERE deptno = 10` va ikkinchi `SELECT job FROM emp WHERE deptno = 20` orasiga `UNION` yozing.",
    "solutions": [
      "SELECT job FROM emp WHERE deptno = 10 UNION SELECT job FROM emp WHERE deptno = 20"
    ],
    "requiredPatterns": [
      {}
    ],
    "explanation": "L04 Slide 45: `UNION` ikkala bo'limdagi lavozimlarni birlashtirib, takrorlangan `CLERK` va `MANAGER` ni bittadan qoldirdi.",
    "task": "10-bo'limdagi lavozimlar (`job`) so'rovi bilan 20-bo'limdagi lavozimlar so'rovini takrorlarsiz birlashtiruvchi to'plam operatori (`UNION`) using chiqaring."
  },
  {
    "id": 133,
    "sector": 9,
    "difficulty": "Floor 9 • Intermediate",
    "source": "L04 Slide 45 • INTERSECT (Kesishma)",
    "title": "Ham 10, Ham 20-Bo'limda Uchraydigan Lavozimlar (`INTERSECT`)",
    "story": "Endi ikkala bo'lim uchun umumiy bo'lgan (kesishgan) lavozimlarni toping.",
    "taskUz": "10-bo'limdagi lavozimlar (`job`) so'rovi bilan 20-bo'limdagi lavozimlar so'rovining kesishmasini (`INTERSECT`) toping.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `job`\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "Ikkita `SELECT job FROM emp WHERE deptno = ...` so'rovi orasida `INTERSECT` operatorini ishlating.",
    "solutions": [
      "SELECT job FROM emp WHERE deptno = 10 INTERSECT SELECT job FROM emp WHERE deptno = 20"
    ],
    "requiredPatterns": [
      {}
    ],
    "explanation": "L04 Slide 45: `INTERSECT` faqat ikkala so'rov natijasida ham mavjud bo'lgan `CLERK` va `MANAGER` lavozimlarini qaytardi.",
    "task": "10-bo'limdagi lavozimlar (`job`) so'rovi bilan 20-bo'limdagi lavozimlar so'rovining kesishmasini (`INTERSECT`) toping."
  },
  {
    "id": 134,
    "sector": 9,
    "difficulty": "Floor 9 • Intermediate",
    "source": "L04 Slide 45 • EXCEPT (Ayirma)",
    "title": "30-Bo'limda Bor, Lekin 20-Bo'limda Yo'q Lavozimlar (`EXCEPT`)",
    "story": "L04 Slide 45: Birinchi so'rov natijasidan ikkinchi so'rovda bor qatorlarni ayirib tashlash uchun PostgreSQL da `EXCEPT` ishlatiladi.",
    "taskUz": "30-bo'limdagi lavozimlar (`job`) so'rovidan 20-bo'limdagi lavozimlar so'rovini to'plam ayirmasi (`EXCEPT`) using ayirib chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `job`\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "Avval `deptno = 30` so'rovini, keyin `EXCEPT`, keyin `deptno = 20` so'rovini yozing.",
    "solutions": [
      "SELECT job FROM emp WHERE deptno = 30 EXCEPT SELECT job FROM emp WHERE deptno = 20"
    ],
    "requiredPatterns": [
      {}
    ],
    "explanation": "30-bo'limdagi `CLERK` va `MANAGER` 20-bo'limda ham borligi uchun ayirib tashlandi va faqat `SALESMAN` qoldi.",
    "task": "30-bo'limdagi lavozimlar (`job`) so'rovidan 20-bo'limdagi lavozimlar so'rovini to'plam ayirmasi (`EXCEPT`) using ayirib chiqaring."
  },
  {
    "id": 135,
    "sector": 9,
    "difficulty": "Floor 9 Yakuni • Master Architect",
    "source": "L04 Derived Table Subquery Boss • FROM Ichida Ichki So'rov",
    "title": "9-Qavat Bossi: Bo'lim O'rtacha Maoshi Bilan Solishtirish",
    "story": "9-qavat Boss sinovi! Ichki so'rovni `FROM` bandi ichida vaqtinchalik jadval (Derived Table) sifatida yaratib, har bir xodimning maoshini uning bo'limi o'rtacha maoshi bilan yonma-yon chiqaring!",
    "taskUz": "Xodimlar jadandlidan (`emp e`) har bir bo'limning `deptno` and 2 xonagacha yaxlitlangan o'rtacha maoshini (`avg_sal`) hisoblovchi ichki so'rovga (`d`) `JOIN` qilib, o'rtachadan ko'p oladiganlarning `e.ename`, `e.deptno`, `e.sal` and `d.avg_sal` columns chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `deptno`, `sal`, `avg_sal`\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "`FROM emp e JOIN (SELECT deptno, ROUND(AVG(sal), 2) AS avg_sal FROM emp GROUP BY deptno) d ON e.deptno = d.deptno WHERE e.sal > d.avg_sal` tuzilmasini yozing.",
    "solutions": [
      "SELECT e.ename, e.deptno, e.sal, d.avg_sal FROM emp e JOIN (SELECT deptno, ROUND(AVG(sal), 2) AS avg_sal FROM emp GROUP BY deptno) d ON e.deptno = d.deptno WHERE e.sal > d.avg_sal"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "9-Qavat yakunlandi! Derived Table yordamida ham xodimning o'z maoshi, ham bo'limining o'rtacha maoshi bitta qatorda taqqoslandi.",
    "task": "Xodimlar jadandlidan (`emp e`) har bir bo'limning `deptno` and 2 xonagacha yaxlitlangan o'rtacha maoshini (`avg_sal`) hisoblovchi ichki so'rovga (`d`) `JOIN` qilib, o'rtachadan ko'p oladiganlarning `e.ename`, `e.deptno`, `e.sal` and `d.avg_sal` columns chiqaring."
  },
  {
    "id": 136,
    "sector": 10,
    "difficulty": "Floor 10 • Intermediate",
    "source": "L04 Slide 84–85 • Oyna Funksiyasi OVER ()",
    "title": "Qatorlarni Yo'qotmasdan Kompaniya O'rtacha Maoshini Chiqarish",
    "story": "10-qavat — Prezident Pentxausi! Oddiy `GROUP BY` qatorlarni yig'ib yuboradi, Oyna funksiyasi (`OVER ()`) esa barcha 14 ta xodim qatorini saqlab qolgan holda yonida umumiy o'rtacha maoshni ko'rsatadi!",
    "taskUz": "From the employee table (`emp`), `ename`, `sal` and oyna funksiyasi (`OVER ()`) using butun kompaniya bo'yicha 2 xonagacha yaxlitlangan o'rtacha maoshni chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `sal`, `()`, `company_avg`\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "`AVG(sal) OVER ()` ifodasini `ROUND(..., 2)` ichiga olib yozing.",
    "solutions": [
      "SELECT ename, sal, ROUND(AVG(sal) OVER (), 2) AS company_avg FROM emp",
      "SELECT ename, sal, ROUND(AVG(sal) OVER (), 2) FROM emp"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "L04 Slide 85: Bo'sh `OVER ()` oynasi barcha 14 qatorni qamrab oldi va har bir qator yonida `$2073.21` ni chiqardi.",
    "task": "From the employee table (`emp`), `ename`, `sal` and oyna funksiyasi (`OVER ()`) using butun kompaniya bo'yicha 2 xonagacha yaxlitlangan o'rtacha maoshni chiqaring."
  },
  {
    "id": 137,
    "sector": 10,
    "difficulty": "Floor 10 • Intermediate",
    "source": "L04 Slide 86 • PARTITION BY deptno",
    "title": "Bo'lim O'rtacha Maoshini Har Bir Xodim Yonida Ko'rsatish",
    "story": "L04 Slide 86: Oynani bo'limlar bo'yicha bo'laklarga ajratish (`PARTITION BY`) orqali har bir xodimning yonida aynan o'z bo'limining o'rtacha maoshini chiqaring.",
    "taskUz": "From the employee table (`emp`), `ename`, `deptno`, `sal` and `deptno` bo'yicha bo'laklangan (`PARTITION BY`) oyna funksiyasi using 2 xonagacha yaxlitlangan bo'lim o'rtacha maoshini chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `deptno`, `sal`, `deptno)`, `dept_avg`\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "`ROUND(AVG(sal) OVER (PARTITION BY deptno), 2)` ifodasidan foydalaning.",
    "solutions": [
      "SELECT ename, deptno, sal, ROUND(AVG(sal) OVER (PARTITION BY deptno), 2) AS dept_avg FROM emp",
      "SELECT ename, deptno, sal, ROUND(AVG(sal) OVER (PARTITION BY deptno), 2) FROM emp"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "L04 Slide 86: `PARTITION BY deptno` oynani 3 ta bo'limga ajratib, hech bir xodim qatorini yo'qotmasdan bo'lim o'rtachasini hisobladi.",
    "task": "From the employee table (`emp`), `ename`, `deptno`, `sal` and `deptno` bo'yicha bo'laklangan (`PARTITION BY`) oyna funksiyasi using 2 xonagacha yaxlitlangan bo'lim o'rtacha maoshini chiqaring."
  },
  {
    "id": 138,
    "sector": 10,
    "difficulty": "Floor 10 • Intermediate",
    "source": "L04 Slide 87 • MIN, MAX va SUM OVER (PARTITION BY ...)",
    "title": "Bo'limdagi Eng Kam, Eng Ko'p va Jami Maosh Oynasi",
    "story": "Har bir xodimning yonida uning bo'limidagi eng kam maosh, eng ko'p maosh va bo'limning jami maosh fondini oyna funksiyalari yordamida chiqaring.",
    "taskUz": "From the employee table (`emp`), `ename`, `deptno`, `sal` and `deptno` bo'yicha bo'laklangan oynada `sal` columnng minimal, maksimal and yig'indi qiymatlarini chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `deptno`, `sal`, `deptno)`, `deptno)`, `deptno)`\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "`MIN(sal) OVER (PARTITION BY deptno)`, `MAX(sal) OVER (PARTITION BY deptno)` va `SUM(sal) OVER (PARTITION BY deptno)` yozing.",
    "solutions": [
      "SELECT ename, deptno, sal, MIN(sal) OVER (PARTITION BY deptno), MAX(sal) OVER (PARTITION BY deptno), SUM(sal) OVER (PARTITION BY deptno) FROM emp"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {}
    ],
    "explanation": "L04 Slide 87: Bir nechta oyna funksiyalarini bitta `SELECT` ichida yonma-yon ishlatish mumkin.",
    "task": "From the employee table (`emp`), `ename`, `deptno`, `sal` and `deptno` bo'yicha bo'laklangan oynada `sal` columnng minimal, maksimal and yig'indi qiymatlarini chiqaring."
  },
  {
    "id": 139,
    "sector": 10,
    "difficulty": "Floor 10 • Intermediate",
    "source": "L04 Slide 88 • ROW_NUMBER() Tartib Raqami",
    "title": "Bo'lim Ichida Tartib Raqami Berish (`ROW_NUMBER`)",
    "story": "L04 Slide 88: Har bir bo'lim ichida xodimlarni maosh kamayish tartibida 1, 2, 3... deb uzluksiz raqamlash uchun `ROW_NUMBER()` funksiyasi ishlatiladi.",
    "taskUz": "From the employee table (`emp`), `ename`, `deptno`, `sal` and `deptno` bo'yicha bo'laklangan and `sal` in descending order saralangan oynada qator tartib raqamini (`ROW_NUMBER`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `deptno`, `sal`, `rn`\n• Asosiy jadvallar: `emp`\n• Saralash (ORDER BY): `sal DESC) AS rn FROM emp`",
    "starterCode": "",
    "hint": "`ROW_NUMBER() OVER (PARTITION BY deptno ORDER BY sal DESC)` ifodasini yozing.",
    "solutions": [
      "SELECT ename, deptno, sal, ROW_NUMBER() OVER (PARTITION BY deptno ORDER BY sal DESC) AS rn FROM emp",
      "SELECT ename, deptno, sal, ROW_NUMBER() OVER (PARTITION BY deptno ORDER BY sal DESC) FROM emp"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "L04 Slide 88: `ROW_NUMBER()` maoshi teng bo'lgan FORD va SCOTTga ham har xil raqam (1 va 2) beradi.",
    "task": "From the employee table (`emp`), `ename`, `deptno`, `sal` and `deptno` bo'yicha bo'laklangan and `sal` in descending order saralangan oynada qator tartib raqamini (`ROW_NUMBER`) chiqaring."
  },
  {
    "id": 140,
    "sector": 10,
    "difficulty": "Floor 10 • Hard",
    "source": "L04 Slide 88–89 • RANK() va DENSE_RANK() Farqi",
    "title": "O'rinlarni Bo'lishish: RANK va DENSE_RANK",
    "story": "20-bo'limda FORD va SCOTT bir xil ($3000) maosh oladi. `RANK()` ularga 1-o'rin berib, JONESni 3-o'ringa tushiradi (bo'shliq qoldiradi); `DENSE_RANK()` esa JONESga 2-o'rin beradi! Ikkalasini yonma-yon chiqaring.",
    "taskUz": "From the employee table (`emp`), `ename`, `deptno`, `sal` and `deptno` bo'yicha bo'laklangan and `sal DESC` bo'yicha saralangan oynada `RANK()` and `DENSE_RANK()` funksiyalarini chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `deptno`, `sal`, `rnk`, `dense_rnk`\n• Asosiy jadvallar: `emp`\n• Saralash (ORDER BY): `sal DESC) AS rnk, DENSE_RANK() OVER (PARTITION BY deptno ORDER BY sal DESC) AS dense_rnk FROM emp`",
    "starterCode": "",
    "hint": "Birinchi oynada `RANK() OVER (PARTITION BY deptno ORDER BY sal DESC)`, ikkinchisida `DENSE_RANK() OVER (PARTITION BY deptno ORDER BY sal DESC)` yozing.",
    "solutions": [
      "SELECT ename, deptno, sal, RANK() OVER (PARTITION BY deptno ORDER BY sal DESC) AS rnk, DENSE_RANK() OVER (PARTITION BY deptno ORDER BY sal DESC) AS dense_rnk FROM emp",
      "SELECT ename, deptno, sal, RANK() OVER (PARTITION BY deptno ORDER BY sal DESC), DENSE_RANK() OVER (PARTITION BY deptno ORDER BY sal DESC) FROM emp"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "L04 Slide 89: `RANK` tenglikdan keyin tartib raqamini sakratadi (`1, 1, 3`), `DENSE_RANK` esa sakratmaydi (`1, 1, 2`).",
    "task": "From the employee table (`emp`), `ename`, `deptno`, `sal` and `deptno` bo'yicha bo'laklangan and `sal DESC` bo'yicha saralangan oynada `RANK()` and `DENSE_RANK()` funksiyalarini chiqaring."
  },
  {
    "id": 141,
    "sector": 10,
    "difficulty": "Floor 10 • Intermediate",
    "source": "L04 Slide 88 • NTILE(4) Kvartillarga Bo'lish",
    "title": "Xodimlarni 4 ta Maosh Kvartiliga Ajratish (`NTILE`)",
    "story": "L04 Slide 88: Barcha 14 nafar xodimni maosh kamayish tartibida 4 ta teng guruhga (kvartilga: 1..4) taqsimlash uchun `NTILE(4)` funksiyasidan foydalaniladi.",
    "taskUz": "From the employee table (`emp`), `ename`, `sal` and maosh kamayish (`sal DESC`) tartibida saralangan oynada xodimlarni `4` ta guruhga ajratuvchi `NTILE(4)` funksiyasini chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `sal`, `quartile`\n• Asosiy jadvallar: `emp`\n• Saralash (ORDER BY): `sal DESC) AS quartile FROM emp`",
    "starterCode": "",
    "hint": "`NTILE(4) OVER (ORDER BY sal DESC)` ifodasini `SELECT` ro'yxatiga qo'shing.",
    "solutions": [
      "SELECT ename, sal, NTILE(4) OVER (ORDER BY sal DESC) AS quartile FROM emp",
      "SELECT ename, sal, NTILE(4) OVER (ORDER BY sal DESC) FROM emp"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "L04 Slide 88: `NTILE(4)` 14 ta xodimni 4 ta savatga (4, 4, 3, 3 tadan) teng taqsimlab berdi.",
    "task": "From the employee table (`emp`), `ename`, `sal` and maosh kamayish (`sal DESC`) tartibida saralangan oynada xodimlarni `4` ta guruhga ajratuvchi `NTILE(4)` funksiyasini chiqaring."
  },
  {
    "id": 142,
    "sector": 10,
    "difficulty": "Floor 10 • Hard",
    "source": "L04 Slide 90 • LAG() — Oldingi Qator Qiymati",
    "title": "Bo'limda O'zidan Oldin Ishga Kirgan Xodim Maoshi (`LAG`)",
    "story": "L04 Slide 90: Har bir bo'lim ichida xodimlarni `hiredate` bo'yicha tizib, o'zidan oldin ishga kirgan xodimning maoshi qancha bo'lganini `LAG` funksiyasi yordamida ko'rsating.",
    "taskUz": "From the employee table (`emp`), `ename`, `deptno`, `hiredate`, `sal` and `deptno` bo'yicha bo'laklangan and `hiredate` bo'yicha saralangan oynada bitta oldingi qatordagi `sal` qiymatini (`LAG`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `deptno`, `hiredate`, `sal`, `prev_sal`\n• Asosiy jadvallar: `emp`\n• Saralash (ORDER BY): `hiredate) AS prev_sal FROM emp`",
    "starterCode": "",
    "hint": "`LAG(sal) OVER (PARTITION BY deptno ORDER BY hiredate)` ifodasidan foydalaning.",
    "solutions": [
      "SELECT ename, deptno, hiredate, sal, LAG(sal) OVER (PARTITION BY deptno ORDER BY hiredate) AS prev_sal FROM emp",
      "SELECT ename, deptno, hiredate, sal, LAG(sal) OVER (PARTITION BY deptno ORDER BY hiredate) FROM emp"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "L04 Slide 90: `LAG(sal)` joriy qatordan bitta yuqoridagi qator qiymatini olib beradi (birinchi qatorda `NULL` bo'ladi).",
    "task": "From the employee table (`emp`), `ename`, `deptno`, `hiredate`, `sal` and `deptno` bo'yicha bo'laklangan and `hiredate` bo'yicha saralangan oynada bitta oldingi qatordagi `sal` qiymatini (`LAG`) chiqaring."
  },
  {
    "id": 143,
    "sector": 10,
    "difficulty": "Floor 10 • Hard",
    "source": "L04 Slide 90 • LEAD() — Keyingi Qator Qiymati",
    "title": "Bo'limda Keyingi Ishga Kirgan Xodim Maoshi (`LEAD`)",
    "story": "Endi aksincha: har bir xodimning yonida uning bo'limiga undan KEYIN ishga kirgan xodimning maoshini `LEAD` funksiyasi yordamida ko'rsating.",
    "taskUz": "From the employee table (`emp`), `ename`, `deptno`, `hiredate`, `sal` and `deptno` bo'yicha bo'laklangan and `hiredate` bo'yicha saralangan oynada bitta keyingi qatordagi `sal` qiymatini (`LEAD`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `deptno`, `hiredate`, `sal`, `next_sal`\n• Asosiy jadvallar: `emp`\n• Saralash (ORDER BY): `hiredate) AS next_sal FROM emp`",
    "starterCode": "",
    "hint": "`LEAD(sal) OVER (PARTITION BY deptno ORDER BY hiredate)` ifodasini yozing.",
    "solutions": [
      "SELECT ename, deptno, hiredate, sal, LEAD(sal) OVER (PARTITION BY deptno ORDER BY hiredate) AS next_sal FROM emp",
      "SELECT ename, deptno, hiredate, sal, LEAD(sal) OVER (PARTITION BY deptno ORDER BY hiredate) FROM emp"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "L04 Slide 90: `LEAD(sal)` oynadagi keyingi qatorning qiymatini olib beradi.",
    "task": "From the employee table (`emp`), `ename`, `deptno`, `hiredate`, `sal` and `deptno` bo'yicha bo'laklangan and `hiredate` bo'yicha saralangan oynada bitta keyingi qatordagi `sal` qiymatini (`LEAD`) chiqaring."
  },
  {
    "id": 144,
    "sector": 10,
    "difficulty": "Floor 10 • Hard",
    "source": "L04 Slide 90 • FIRST_VALUE() — Bo'lim Yetakchisi",
    "title": "Bo'limdagi Eng Yuqori Maoshli Yetakchi Ismi",
    "story": "Har bir xodimning yonida uning bo'limida eng ko'p maosh oluvchi 1-raqamli xodim kim ekanini ko'rsatish uchun oynaning birinchi qiymatini oluvchi funksiyadan foydalaning.",
    "taskUz": "From the employee table (`emp`), `ename`, `deptno`, `sal` and `deptno` bo'yicha bo'laklangan and `sal` in descending order saralangan oynada birinchi qatordagi `ename` qiymatini chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `deptno`, `sal`, `top_earner`\n• Asosiy jadvallar: `emp`\n• Saralash (ORDER BY): `sal DESC) AS top_earner FROM emp`",
    "starterCode": "",
    "hint": "`FIRST_VALUE(ename) OVER (PARTITION BY deptno ORDER BY sal DESC)` ifodasini qo'llang.",
    "solutions": [
      "SELECT ename, deptno, sal, FIRST_VALUE(ename) OVER (PARTITION BY deptno ORDER BY sal DESC) AS top_earner FROM emp",
      "SELECT ename, deptno, sal, FIRST_VALUE(ename) OVER (PARTITION BY deptno ORDER BY sal DESC) FROM emp"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "L04 Slide 90: `FIRST_VALUE(ename)` har bir bo'lim oynasining eng birinchi qatoridagi ismni qaytaradi.",
    "task": "From the employee table (`emp`), `ename`, `deptno`, `sal` and `deptno` bo'yicha bo'laklangan and `sal` in descending order saralangan oynada birinchi qatordagi `ename` qiymatini chiqaring."
  },
  {
    "id": 145,
    "sector": 10,
    "difficulty": "Floor 10 • Hard",
    "source": "L04 Slide 91–92 • O'sib Boruvchi Yig'indi (Running Total)",
    "title": "O'sib Boruvchi Maosh Fondi (Running Total)",
    "story": "L04 Slide 92: Bo'lim ichida xodimlarni ishga kirgan sanasi bo'yicha tizib, birinchi qatordan joriy qatorgacha bo'lgan o'sib boruvchi maosh yig'indisini (Running Total) hisoblang!",
    "taskUz": "From the employee table (`emp`), `ename`, `deptno`, `hiredate`, `sal` and `deptno` bo'yicha bo'laklangan, `hiredate` bo'yicha saralangan and oyna ramkasi cheksiz oldingi qatordan joriy qatorgacha qilib belgilangan `sal` yig'indisini chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `deptno`, `hiredate`, `sal`, `running_total`\n• Asosiy jadvallar: `emp`\n• Saralash (ORDER BY): `hiredate ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_total FROM emp`",
    "starterCode": "",
    "hint": "`SUM(sal) OVER (PARTITION BY deptno ORDER BY hiredate ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)` yozing.",
    "solutions": [
      "SELECT ename, deptno, hiredate, sal, SUM(sal) OVER (PARTITION BY deptno ORDER BY hiredate ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_total FROM emp",
      "SELECT ename, deptno, hiredate, sal, SUM(sal) OVER (PARTITION BY deptno ORDER BY hiredate ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) FROM emp"
    ],
    "requiredPatterns": [
      {},
      {}
    ],
    "explanation": "L04 Slide 92: Oyna ramkasi (`ROWS BETWEEN ...`) yordamida 10-bo'limda yig'indi 2450 -> 7450 -> 8750 bo'lib o'sib bordi.",
    "task": "From the employee table (`emp`), `ename`, `deptno`, `hiredate`, `sal` and `deptno` bo'yicha bo'laklangan, `hiredate` bo'yicha saralangan and oyna ramkasi cheksiz oldingi qatordan joriy qatorgacha qilib belgilangan `sal` yig'indisini chiqaring."
  },
  {
    "id": 146,
    "sector": 10,
    "difficulty": "Floor 10 • Hard",
    "source": "L04 Slide 92 • Sirpanuvchi O'rtacha (Moving Average)",
    "title": "3 Qatorlik Sirpanuvchi O'rtacha",
    "story": "L04 Slide 92: Joriy qator, bitta oldingi qator va bitta keyingi qator bo'yicha sirpanuvchi o'rtacha maoshni hisoblang.",
    "taskUz": "From the employee table (`emp`), `ename`, `hiredate`, `sal` and `hiredate` bo'yicha saralangan, oyna ramkasi 1 ta oldingi qatordan 1 ta keyingi qatorgacha having 2 xonagacha yaxlitlangan o'rtacha maoshni chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `hiredate`, `sal`, `FOLLOWING)`, `moving_avg`\n• Asosiy jadvallar: `emp`\n• Saralash (ORDER BY): `hiredate ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING), 2) AS moving_avg FROM emp`",
    "starterCode": "",
    "hint": "`ROUND(AVG(sal) OVER (ORDER BY hiredate ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING), 2)` ifodasidan foydalaning.",
    "solutions": [
      "SELECT ename, hiredate, sal, ROUND(AVG(sal) OVER (ORDER BY hiredate ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING), 2) AS moving_avg FROM emp",
      "SELECT ename, hiredate, sal, ROUND(AVG(sal) OVER (ORDER BY hiredate ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING), 2) FROM emp"
    ],
    "requiredPatterns": [
      {},
      {}
    ],
    "explanation": "L04 Slide 92: Sirpanuvchi oyna har bir qatorni uning ikkita qo'shnisi bilan birgalikda o'rtachasini hisoblaydi.",
    "task": "From the employee table (`emp`), `ename`, `hiredate`, `sal` and `hiredate` bo'yicha saralangan, oyna ramkasi 1 ta oldingi qatordan 1 ta keyingi qatorgacha having 2 xonagacha yaxlitlangan o'rtacha maoshni chiqaring."
  },
  {
    "id": 147,
    "sector": 10,
    "difficulty": "Floor 10 • Hard",
    "source": "L04 Slide 93 • LAST_VALUE va UNBOUNDED FOLLOWING Tuzog'i",
    "title": "Bo'limdagi Eng Kam Maoshli Xodim",
    "story": "L04 Slide 93 VIVA Tuzog'i: Oynaning oxirgi qiymatini oluvchi funksiya sukut bo'yicha faqat joriy qatorgacha qaraydi! Bo'limning eng oxirgi qatorini ko'rishi uchun ramkani cheksiz keyingi qatorgacha kengaytirish shart!",
    "taskUz": "From the employee table (`emp`), `ename`, `deptno`, `sal` and `deptno` bo'yicha bo'laklangan, `sal` in descending order saralangan and oyna ramkasi cheksiz oldingi qatordan cheksiz keyingi qatorgacha having oxirgi xodim ismini chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `deptno`, `sal`, `lowest_earner`\n• Asosiy jadvallar: `emp`\n• Saralash (ORDER BY): `sal DESC ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) AS lowest_earner FROM emp`",
    "starterCode": "",
    "hint": "`LAST_VALUE(ename) OVER (PARTITION BY deptno ORDER BY sal DESC ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING)` yozing.",
    "solutions": [
      "SELECT ename, deptno, sal, LAST_VALUE(ename) OVER (PARTITION BY deptno ORDER BY sal DESC ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) AS lowest_earner FROM emp",
      "SELECT ename, deptno, sal, LAST_VALUE(ename) OVER (PARTITION BY deptno ORDER BY sal DESC ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) FROM emp"
    ],
    "requiredPatterns": [
      {},
      {}
    ],
    "explanation": "L04 Slide 93: `UNBOUNDED FOLLOWING` qo'shilmaganda har bir xodim o'z ismini qaytarib qolar edi; endi esa haqiqiy oxirgi qator (MILLER) chiqdi!",
    "task": "From the employee table (`emp`), `ename`, `deptno`, `sal` and `deptno` bo'yicha bo'laklangan, `sal` in descending order saralangan and oyna ramkasi cheksiz oldingi qatordan cheksiz keyingi qatorgacha having oxirgi xodim ismini chiqaring."
  },
  {
    "id": 148,
    "sector": 10,
    "difficulty": "Floor 10 • Hard",
    "source": "L04 Slide 70–72 & 89 • CTE (WITH) + DENSE_RANK",
    "title": "Har Bir Bo'limning 1-O'rindagi Yetakchilarini Filtrlash",
    "story": "Oyna funksiyasini to'g'ridan-to'g'ri filtrlash bandi ichida yozib bo'lmaydi! Shu bois avval umumiy jadval ifodasi (CTE) ichida zich reytingni hisoblab, keyin tashqi so'rovda faqat 1-o'rindagilarni filtrlab oling.",
    "taskUz": "`WITH` umumiy jadandl ifodasi (`ranked` nomi bilan) ichida `emp` jadandlidan `ename`, `deptno`, `sal` and `deptno` bo'yicha maosh in descending order zich o'rin raqamini (`rnk` ustun nomi bilan) hisoblang; tashqi so'rovda esa `rnk = 1` having yetakchilarni chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `deptno`, `sal`, `rnk`\n• Asosiy jadvallar: `emp`, `ranked`\n• Saralash (ORDER BY): `sal DESC) AS rnk FROM emp) SELECT ename, deptno, sal FROM ranked WHERE rnk = 1`",
    "starterCode": "",
    "hint": "`WITH ranked AS (SELECT ename, deptno, sal, DENSE_RANK() OVER (PARTITION BY deptno ORDER BY sal DESC) AS rnk FROM emp) SELECT * FROM ranked WHERE rnk = 1` tuzilmasini yozing.",
    "solutions": [
      "WITH ranked AS (SELECT ename, deptno, sal, DENSE_RANK() OVER (PARTITION BY deptno ORDER BY sal DESC) AS rnk FROM emp) SELECT ename, deptno, sal FROM ranked WHERE rnk = 1",
      "WITH ranked AS (SELECT ename, deptno, sal, DENSE_RANK() OVER (PARTITION BY deptno ORDER BY sal DESC) AS rnk FROM emp) SELECT * FROM ranked WHERE rnk = 1"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "L04 Slide 71 & 89: CTE va `DENSE_RANK` kombinatsiyasi har bir bo'limdagi maksimal maosh egalarini (20-bo'limdan ham FORD, ham SCOTTni) ajratib berdi!",
    "task": "`WITH` umumiy jadandl ifodasi (`ranked` nomi bilan) ichida `emp` jadandlidan `ename`, `deptno`, `sal` and `deptno` bo'yicha maosh in descending order zich o'rin raqamini (`rnk` ustun nomi bilan) hisoblang; tashqi so'rovda esa `rnk = 1` having yetakchilarni chiqaring."
  },
  {
    "id": 149,
    "sector": 10,
    "difficulty": "Floor 10 • Expert",
    "source": "L04 Slide 73–76 • WITH RECURSIVE (Yuqoridan Pastga Iyerarxiya)",
    "title": "KINGdan Boshlanuvchi To'liq Korporativ Shajara",
    "story": "L04 Slide 74: Prezident KINGdan (1-pog'ona) boshlab barcha bo'ysunuvchilarni pog'onama-pog'ona topish uchun rekursiv umumiy jadval ifodasi tuziladi!",
    "taskUz": "Rekursiv CTE (`org` nomi bilan) using boshlang'ich qismda rahbari `NULL` having xodimni (`empno, ename, supervisor` and `1 AS lvl`), rekursiv qismida esa `UNION ALL` orqali xodimning `supervisor` ustuni `org` ning `empno` ustuniga teng havinglarni (`lvl + 1`) ulab, butun `org` shajarasini chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `empno`, `ename`, `supervisor`, `lvl`\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "Langar so'rov: `SELECT empno, ename, supervisor, 1 AS lvl FROM emp WHERE supervisor IS NULL`, so'ng `UNION ALL`, so'ng `SELECT e.empno, e.ename, e.supervisor, o.lvl + 1 FROM emp e JOIN org o ON e.supervisor = o.empno`.",
    "solutions": [
      "WITH RECURSIVE org AS (SELECT empno, ename, supervisor, 1 AS lvl FROM emp WHERE supervisor IS NULL UNION ALL SELECT e.empno, e.ename, e.supervisor, o.lvl + 1 FROM emp e JOIN org o ON e.supervisor = o.empno) SELECT * FROM org"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {}
    ],
    "explanation": "L04 Slide 75: Rekursiv CTE korporatsiyaning 4 pog'onali to'liq boshqaruv daraxtini (KING -> JONES -> FORD -> SMITH) qurib berdi!",
    "task": "Rekursiv CTE (`org` nomi bilan) using boshlang'ich qismda rahbari `NULL` having xodimni (`empno, ename, supervisor` and `1 AS lvl`), rekursiv qismida esa `UNION ALL` orqali xodimning `supervisor` ustuni `org` ning `empno` ustuniga teng havinglarni (`lvl + 1`) ulab, butun `org` shajarasini chiqaring."
  },
  {
    "id": 150,
    "sector": 10,
    "difficulty": "Floor 10 Final Master Architect • Grandmaster",
    "source": "L04 Slide 77–79 • WITH RECURSIVE (Pastdan Yuqoriga Zanjir)",
    "title": "150-FINAL BOSS: SMITHdan Prezident KINGgacha Bo'ysunuv Zanjiri!",
    "story": "BOSH OFISNING ENG SO'NGGI 150-SINOVI! L04 Slide 77: Eng quyi pog'onadagi `'SMITH'` dan boshlab, uning ustidagi barcha rahbarlarni (`SMITH -> FORD -> JONES -> KING`) pastdan yuqoriga qarab rekursiv zanjir sifatida chiqaring!",
    "taskUz": "Rekursiv CTE (`chain` nomi bilan) using boshlang'ich qismda ismi `'SMITH'` having xodimni (`empno, ename, supervisor` and `1 AS step`), rekursiv qismida esa `UNION ALL` orqali rahbarning `empno` ustuni `chain` ning `supervisor` ustuniga teng having rahbarlarni (`step + 1`) ulab, `chain` jadandlidan barcha qatorlarni chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `empno`, `ename`, `supervisor`, `step`\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "Langar qismida `WHERE ename = 'SMITH'`, rekursiv `JOIN` qismida esa `FROM emp m JOIN chain c ON m.empno = c.supervisor` shartini yozing!",
    "solutions": [
      "WITH RECURSIVE chain AS (SELECT empno, ename, supervisor, 1 AS step FROM emp WHERE ename = 'SMITH' UNION ALL SELECT m.empno, m.ename, m.supervisor, c.step + 1 FROM emp m JOIN chain c ON m.empno = c.supervisor) SELECT * FROM chain"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {}
    ],
    "explanation": "🏆 TABRIKLAYMIZ! Barcha 150 ta korporativ missiya muvaffaqiyatli yakunlandi! Siz ACADEMY Database Systems Week 4 (L04 + T04) bo'yicha Bosh Ma'lumotlar Arxitektori (Chief Data Officer) darajasiga erishdingiz!",
    "task": "Rekursiv CTE (`chain` nomi bilan) using boshlang'ich qismda ismi `'SMITH'` having xodimni (`empno, ename, supervisor` and `1 AS step`), rekursiv qismida esa `UNION ALL` orqali rahbarning `empno` ustuni `chain` ning `supervisor` ustuniga teng having rahbarlarni (`step + 1`) ulab, `chain` jadandlidan barcha qatorlarni chiqaring."
  }
];
