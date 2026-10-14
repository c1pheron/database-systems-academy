// ============================================================================
// DATABASE SYSTEMS ACADEMY — WEEK 4: SQL DML & QUERY ENGINEERING
// Variable: QUESTIONS_1_50 (50 Questions)
// ============================================================================

window.QUESTIONS_1_50 = [
  {
    "id": 1,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L04 Slide 14–15 • Jadvalni To'liq O'qish",
    "title": "Kompaniya Filiallari Ro'yxati",
    "story": "Bosh ofisdagi birinchi ish kuningiz. Kadrlar bo'limi rahbari sizdan kompaniyaning barcha filiallari haqidagi ma'lumotni bazadan chiqarib berishni so'radi.",
    "taskUz": "Display all columns and rows from the department table (`dept`).",
    "starterCode": "",
    "hint": "Jadvaldagi barcha ustunlarni tanlash uchun yulduzcha belgisidan va `dept` jadval nomidan foydalaning.",
    "solutions": [
      "SELECT * FROM dept",
      "SELECT deptno, dname, loc FROM dept"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "Bo'limlar jadvalidagi barcha 4 ta filial (Nyu-York, Dallas, Chikago va Boston) ma'lumotlari successfully retrieved.",
    "task": "Display all columns and rows from the department table (`dept`)."
  },
  {
    "id": 2,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L04 Slide 15 • Xodimlar Jadvali",
    "title": "Xodimlarning To'liq Reyestri",
    "story": "Bosh direktor KING yig'ilish oldidan korporatsiyada ishlayotgan barcha 14 nafar xodimning to'liq ro'yxatini ko'zdan kechirmoqchi.",
    "taskUz": "Display all columns and rows from the employee table (`emp`).",
    "starterCode": "",
    "hint": "Xodimlar jadvali `emp` deb nomlanadi. Barcha ustunlarni tanlash operatorini qo'llang.",
    "solutions": [
      "SELECT * FROM emp"
    ],
    "requiredPatterns": [
      {}
    ],
    "explanation": "Barcha 14 nafar xodimning shaxsiy raqami, ismi, lavozimi va maosh ma'lumotlari successfully displayed.",
    "task": "Display all columns and rows from the employee table (`emp`)."
  },
  {
    "id": 3,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "T04 Intro • Razryadlar Jadvali",
    "title": "Maosh Shkalasi va Razryadlar",
    "story": "Moliya bo'limi kompaniyadagi 5 bosqichli maosh razryadlari va ularning eng past hamda eng yuqori chegaralarini tekshirmoqda.",
    "taskUz": "Maosh darajalari jadandlidagi (`salgrade`) barcha ustunlarni (`grade`, `losal`, `hisal`) select and display.",
    "starterCode": "",
    "hint": "`salgrade` jadvalidan barcha ustunlarni yoki ushbu uchta ustun nomini ketma-ket yozib tanlab oling.",
    "solutions": [
      "SELECT * FROM salgrade",
      "SELECT grade, losal, hisal FROM salgrade"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "Kompaniyaning 1-darajadan 5-darajagacha bo'lgan maosh chegaralari jadvali tayyor.",
    "task": "Maosh darajalari jadandlidagi (`salgrade`) barcha ustunlarni (`grade`, `losal`, `hisal`) select and display."
  },
  {
    "id": 4,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L04 Slide 9 & 14 • Vertikal Proyeksiya",
    "title": "Qisqa Maosh Vedomosti",
    "story": "Hisobchi Clarkga xodimlarning barcha shaxsiy ma'lumotlari emas, faqatgina ismi, lavozimi va oylik maoshi yozilgan qisqa ro'yxat kerak.",
    "taskUz": "From the employee table (`emp`), faqatgina `ename`, `job` and `sal` columns (shu ketma-ketlikda) tanlab oling.",
    "starterCode": "",
    "hint": "Yulduzcha o'rniga kerakli uchta ustun nomini vergul bilan ajratib yozing.",
    "solutions": [
      "SELECT ename, job, sal FROM emp"
    ],
    "requiredPatterns": [
      {}
    ],
    "explanation": "Relyatsion algebradagi Proyeksiya (π) amali bajarildi: jadvaldan faqat so'ralgan 3 ta ustun ajratib olindi.",
    "task": "From the employee table (`emp`), faqatgina `ename`, `job` and `sal` columns (shu ketma-ketlikda) tanlab oling."
  },
  {
    "id": 5,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L04 Slide 14 • Bo'lim Nomlari va Shaharlar",
    "title": "Filiallar Geografiyasi",
    "story": "Logistika bo'limiga bo'lim raqamlari kerak emas — ularga faqat bo'lim nomi va u joylashgan shahar nomi zarur.",
    "taskUz": "From the department table (`dept`), faqat bo'lim nomi (`dname`) and joylashgan shahri (`loc`) columns display.",
    "starterCode": "",
    "hint": "`dept` jadvalidan `dname` va `loc` ustunlarini vergul orqali tanlang.",
    "solutions": [
      "SELECT dname, loc FROM dept"
    ],
    "requiredPatterns": [
      {}
    ],
    "explanation": "To'rtta filialning nomi va shahri ortiqcha ustunlarsiz taqdim etildi.",
    "task": "From the department table (`dept`), faqat bo'lim nomi (`dname`) and joylashgan shahri (`loc`) columns display."
  },
  {
    "id": 6,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L04 Slide 16–17 • Arifmetik Ko'paytirish",
    "title": "Yillik Maosh Hisob-kitobi",
    "story": "Moliyaviy rejalashtirish bo'limi har bir xodimning bir yillik asosiy maosh fondini (12 oy uchun) ko'rib chiqmoqchi.",
    "taskUz": "From the employee table (`emp`), xodimning ismini (`ename`), oylik maoshini (`sal`) and oylik maoshining 12 ga ko'paytmasini uchinchi ustun sifatida display.",
    "starterCode": "",
    "hint": "Uchinchi ustunda `sal` ustunini ko'paytirish amali yordamida 12 soniga ko'paytiring.",
    "solutions": [
      "SELECT ename, sal, sal * 12 FROM emp",
      "SELECT ename, sal, 12 * sal FROM emp"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {},
      {}
    ],
    "explanation": "Arifmetik ifoda yordamida har bir xodimning 12 oylik daromadi hisoblab chiqildi.",
    "task": "From the employee table (`emp`), xodimning ismini (`ename`), oylik maoshini (`sal`) and oylik maoshining 12 ga ko'paytmasini uchinchi ustun sifatida display."
  },
  {
    "id": 7,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "T04 Intro • Arifmetik Ayirish",
    "title": "Razryad Diapazoni Kengligi",
    "story": "Kadrlar bo'limi har bir maosh razryadining eng yuqori chegarasi bilan eng past chegarasi o'rtasidagi farqni (kenglikni) bilmoqchi.",
    "taskUz": "From the salary grade table (`salgrade`), razryad raqami (`grade`), quyi chegara (`losal`), yuqori chegara (`hisal`) and yuqori chegaradan quyi chegarani ayirish natijasini display.",
    "starterCode": "",
    "hint": "To'rtinchi ustun sifatida `hisal` ustunidan `losal` ustunini ayiring.",
    "solutions": [
      "SELECT grade, losal, hisal, hisal - losal FROM salgrade",
      "SELECT grade, losal, hisal, hisal - losal AS band_width FROM salgrade"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {},
      {},
      {}
    ],
    "explanation": "Har bir razryadning maosh diapazoni kengligi (`hisal - losal`) aniqlandi.",
    "task": "From the salary grade table (`salgrade`), razryad raqami (`grade`), quyi chegara (`losal`), yuqori chegara (`hisal`) and yuqori chegaradan quyi chegarani ayirish natijasini display."
  },
  {
    "id": 8,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L04 Slide 18 • Ustun Aliaslari (AS)",
    "title": "Bayram Mukofoti va Ustun Nomi",
    "story": "Yangi yil oldidan har bir xodimning oylik maoshiga 200 dollar miqdorida bir martalik mukofot qo'shib ko'rilmoqda. Hisobotda bu ustun `bonus_sal` deb nomlanishi shart.",
    "taskUz": "From the employee table (`emp`), xodimning ismini (`ename`), maoshini (`sal`) and maoshiga 200 qo'shilgan qiymatni `bonus_sal` ustun nomi (alias) bilan display.",
    "starterCode": "",
    "hint": "Qo'shish ifodasidan so'ng `AS` kalit so'zi orqali `bonus_sal` nomini bering.",
    "strictAlias": true,
    "solutions": [
      "SELECT ename, sal, sal + 200 AS bonus_sal FROM emp",
      "SELECT ename, sal, sal + 200 bonus_sal FROM emp"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {},
      {}
    ],
    "explanation": "Hisoblangan ustunga `bonus_sal` taxallusi (alias) berildi.",
    "task": "From the employee table (`emp`), xodimning ismini (`ename`), maoshini (`sal`) and maoshiga 200 qo'shilgan qiymatni `bonus_sal` ustun nomi (alias) bilan display."
  },
  {
    "id": 9,
    "sector": 1,
    "difficulty": "Floor 1 • Intermediate",
    "source": "L04 Slide 16–17 • Qavslar va Amallar Ustuvorligi",
    "title": "Qavslar Ustuvorligi: Oylik Bo'linma",
    "story": "Buxgalteriyada bahs chiqdi: xodimning maoshiga avval 240 qo'shilib, keyin hosil bo'lgan yig'indi 12 ga bo'linishi kerak. Qavssiz yozilsa, faqat 240 soni 12 ga bo'linib ketadi!",
    "taskUz": "From the employee table (`emp`), xodimning ismini (`ename`) and uning maoshiga (`sal`) avandl 240 ni qo'shib, so'ngra yig'indini 12 ga bo'lish natijasini `monthly_adj` ustun nomi bilan display.",
    "starterCode": "",
    "hint": "Qo'shish amali bo'lish amalidan oldin bajarilishi uchun qo'shish ifodasini qavs ichiga oling.",
    "strictAlias": true,
    "solutions": [
      "SELECT ename, (sal + 240) / 12 AS monthly_adj FROM emp",
      "SELECT ename, (sal + 240) / 12 monthly_adj FROM emp"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {},
      {}
    ],
    "trapChecks": [
      {
        "regex": {},
        "message": "⚠️ Diqqat: Siz qavs qo'ymadingiz! Qavssiz yozilsa avval 240 soni 12 ga bo'linib ketadi. Qo'shish amalini qavs ichiga oling."
      }
    ],
    "explanation": "Matematik qavslar tufayli avval yig'indi hisoblanib, so'ngra 12 oyga to'g'ri bo'lindi.",
    "task": "From the employee table (`emp`), xodimning ismini (`ename`) and uning maoshiga (`sal`) avandl 240 ni qo'shib, so'ngra yig'indini 12 ga bo'lish natijasini `monthly_adj` ustun nomi bilan display."
  },
  {
    "id": 10,
    "sector": 1,
    "difficulty": "Floor 1 • Intermediate",
    "source": "L04 Slide 18 & T04 C4 • Probelli Ustun Nomlari",
    "title": "Rasmiy Hisobot Sarlavhasi (Probelli Alias)",
    "story": "Direktorlar kengashi uchun tayyorlanayotgan hisobotda lavozim ustunining sarlavhasi probel bilan va bosh harfda `Job title` ko'rinishida chiqishi talab qilinmoqda.",
    "taskUz": "From the employee table (`emp`), xodimning ismini (`ename`) and lavozimini (`job`) tanlab oling, bunda lavozim ustuniga probel bilan yozilgan `Job title` nomini (alias) bering.",
    "starterCode": "",
    "hint": "SQL da tarkibida bo'sh joy (probel) bo'lgan ustun nomlari ikki tirnoq (qo'shtirnoq) ichiga olinadi.",
    "strictAlias": true,
    "solutions": [
      "SELECT ename, job AS \"Job title\" FROM emp",
      "SELECT ename, job \"Job title\" FROM emp"
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
        "message": "⚠️ Eslatma: Bittalik tirnoq matn qiymatlari uchun ishlatiladi. Probelli ustun nomini (identifikatorni) qo'shtirnoq (`\"...\"`) ichiga oling."
      }
    ],
    "explanation": "Qo'shtirnoq identifikator ichidagi bo'sh joyni va katta-kichik harflarni o'z holicha saqlaydi.",
    "task": "From the employee table (`emp`), xodimning ismini (`ename`) and lavozimini (`job`) tanlab oling, bunda lavozim ustuniga probel bilan yozilgan `Job title` nomini (alias) bering."
  },
  {
    "id": 11,
    "sector": 1,
    "difficulty": "Floor 1 • Intermediate",
    "source": "T04 Task C17 • Foizli O'sish",
    "title": "Inflyatsiya Indeksatsiyasi (15% O'sish)",
    "story": "Kadrlar bo'limi barcha xodimlarning maoshini 15 foizga (ya'ni 1.15 baravarga) oshirib ko'rmoqchi.",
    "taskUz": "From the employee table (`emp`), xodimning ismini (`ename`), joriy maoshini (`sal`) and maoshining `1.15` ga ko'paytmasini `increased_sal` ustun nomi bilan display.",
    "starterCode": "",
    "hint": "`sal` ustunini `1.15` ga ko'paytirib, `AS` orqali `increased_sal` nomini bering.",
    "strictAlias": true,
    "solutions": [
      "SELECT ename, sal, sal * 1.15 AS increased_sal FROM emp",
      "SELECT ename, sal, 1.15 * sal AS increased_sal FROM emp"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {},
      {}
    ],
    "explanation": "15 foizlik o'sish koeffitsiyenti (`1.15`) barcha xodimlar uchun hisoblandi.",
    "task": "From the employee table (`emp`), xodimning ismini (`ename`), joriy maoshini (`sal`) and maoshining `1.15` ga ko'paytmasini `increased_sal` ustun nomi bilan display."
  },
  {
    "id": 12,
    "sector": 1,
    "difficulty": "Floor 1 • Intermediate",
    "source": "L04 Slide 13 & 19, T04 C4 • DISTINCT",
    "title": "Noyob Lavozimlar Katalogi",
    "story": "Xodimlar jadvalida 14 kishi bo'lgani bilan, ularning ko'pchiligi bir xil lavozimda ishlaydi. HR bo'limiga lavozimlarning takrorlanmas ro'yxati kerak.",
    "taskUz": "From the employee table (`emp`), barcha takrorlanmas (noyob) lavozim nomlarini (`job`) select and display.",
    "starterCode": "",
    "hint": "Takroriy qatorlarni olib tashlash uchun `SELECT` dan keyin maxsus kalit so'zni (`DISTINCT`) ishlating.",
    "solutions": [
      "SELECT DISTINCT job FROM emp",
      "SELECT DISTINCT job FROM emp ORDER BY job"
    ],
    "requiredPatterns": [
      {}
    ],
    "explanation": "14 ta qatordan takrorlar olib tashlanib, korporatsiyadagi 5 ta noyob lavozim qoldirildi.",
    "task": "From the employee table (`emp`), barcha takrorlanmas (noyob) lavozim nomlarini (`job`) select and display."
  },
  {
    "id": 13,
    "sector": 1,
    "difficulty": "Floor 1 • Intermediate",
    "source": "L04 Slide 19 • Faol Bo'lim Raqamlari",
    "title": "Xodim Ishlayotgan Faol Bo'limlar",
    "story": "Kompaniyada 4 ta bo'lim ro'yxatdan o'tgan, biroq amalda faqat nechtasida xodimlar ishlayotganini `emp` jadvalidan bilib olish mumkin.",
    "taskUz": "From the employee table (`emp`), takrorlanmas (noyob) bo'lim raqamlarini (`deptno`) display.",
    "starterCode": "",
    "hint": "`emp` jadvalidan `deptno` ustunini takrorlarsiz tanlab oling.",
    "solutions": [
      "SELECT DISTINCT deptno FROM emp",
      "SELECT DISTINCT deptno FROM emp ORDER BY deptno"
    ],
    "requiredPatterns": [
      {}
    ],
    "explanation": "`emp` jadvalida faqat 10, 20 va 30-bo'limlar mavjud (40-bo'limda hech kim ishlamaydi).",
    "task": "From the employee table (`emp`), takrorlanmas (noyob) bo'lim raqamlarini (`deptno`) display."
  },
  {
    "id": 14,
    "sector": 1,
    "difficulty": "Floor 1 • Hardroq",
    "source": "T04 Intro & E2 • Ikki Ustunli DISTINCT",
    "title": "Bo'lim va Lavozim Kombinatsiyalari",
    "story": "Tashkiliy tuzilma tahlilchisi har bir bo'limda qanday lavozim turlari mavjudligini (takroriy juftliklarsiz) ko'rmoqchi.",
    "taskUz": "From the employee table (`emp`), bo'lim raqami (`deptno`) and lavozim (`job`) columnsng takrorlanmas kombinatsiyalarini display.",
    "starterCode": "",
    "hint": "Takrorlarni yo'qotuvchi kalit so'zni `SELECT` dan so'ng bir marta yozib, ketidan `deptno` va `job` ustunlarini ko'rsating.",
    "solutions": [
      "SELECT DISTINCT deptno, job FROM emp",
      "SELECT DISTINCT deptno, job FROM emp ORDER BY deptno, job"
    ],
    "requiredPatterns": [
      {}
    ],
    "explanation": "14 nafar xodim 9 xil noyob `(deptno, job)` kombinatsiyasiga mansub ekani aniqlandi.",
    "task": "From the employee table (`emp`), bo'lim raqami (`deptno`) and lavozim (`job`) columnsng takrorlanmas kombinatsiyalarini display."
  },
  {
    "id": 15,
    "sector": 1,
    "difficulty": "Floor 1 Yakuni • Master Architect",
    "source": "L04 Slide 16–18 • Kompleks Proyeksiya",
    "title": "1-Qavat Yakuniy Hisoboti: Yillik Paket",
    "story": "1-qavat liftiga chiqish oldidan Moliya direktori yakuniy hisobot so'radi: har bir xodimning yillik maoshiga 1000 dollar yillik bonus qo'shilgandagi umumiy summasi kerak.",
    "taskUz": "From the employee table (`emp`), xodimning ismini (`ename`), lavozimini (`job`) and oylik maoshini (`sal`) 12 ga ko'paytirib, natijaga 1000 qo'shilgan ifodani `annual_package` ustun nomi bilan display.",
    "starterCode": "",
    "hint": "`sal` ni 12 ga ko'paytirib, 1000 ni qo'shing va ustunga `annual_package` nomini bering.",
    "strictAlias": true,
    "solutions": [
      "SELECT ename, job, sal * 12 + 1000 AS annual_package FROM emp",
      "SELECT ename, job, (sal * 12) + 1000 AS annual_package FROM emp"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {},
      {}
    ],
    "explanation": "1-Qavat yakunlandi! Lift eshiklari ochildi — endi 2-qavatga (Kadrlar saralash departamentiga) ko'tarilamiz!",
    "task": "From the employee table (`emp`), xodimning ismini (`ename`), lavozimini (`job`) and oylik maoshini (`sal`) 12 ga ko'paytirib, natijaga 1000 qo'shilgan ifodani `annual_package` ustun nomi bilan display."
  },
  {
    "id": 16,
    "sector": 2,
    "difficulty": "Floor 2 • Easy",
    "source": "T04 Task C2 (Query 1) • Tenglik Sharti",
    "title": "Klerklar Ro'yxatini Ajratish",
    "story": "2-qavatga chiqdingiz. Kadrlar bo'limi faqat ish yurituvchi klerklar (`CLERK`) bilan alohida suhbat o'tkazmoqchi.",
    "taskUz": "From the employee table (`emp`), lavozimi (`job`) `'CLERK'` ga teng having all employees to'liq ma'lumotlarini (`*`) display.",
    "starterCode": "",
    "hint": "Qatorlarni filtrlash uchun `WHERE` bandidan foydalaning va matn qiymatini bittalik tirnoq ichida katta harflarda yozing.",
    "solutions": [
      "SELECT * FROM emp WHERE job = 'CLERK'",
      "SELECT * FROM emp WHERE job = 'CLERK' ORDER BY sal"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "To'rt nafar klerk (JAMES, SMITH, ADAMS va MILLER) ro'yxati ajratib olindi.",
    "task": "From the employee table (`emp`), lavozimi (`job`) `'CLERK'` ga teng having all employees to'liq ma'lumotlarini (`*`) display."
  },
  {
    "id": 17,
    "sector": 2,
    "difficulty": "Floor 2 • Easy",
    "source": "T04 Task C2 (Query 2) • Sonli Shart",
    "title": "Chikago Sotuv Bo'limi Xodimlari",
    "story": "Chikagodagi 30-bo'lim rahbari BLAKE o'z bo'limida ishlayotgan barcha xodimlarning ro'yxatini so'radi.",
    "taskUz": "From the employee table (`emp`), bo'lim raqami (`deptno`) `30` ga teng having barcha xodimlarni (`*`) toping.",
    "starterCode": "",
    "hint": "`WHERE` bandida `deptno` ustunini 30 soniga tenglashtiring.",
    "solutions": [
      "SELECT * FROM emp WHERE deptno = 30",
      "SELECT * FROM emp WHERE deptno = 30 ORDER BY hiredate"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "30-bo'limning barcha 6 nafar xodimi ro'yxati shakllantirildi.",
    "task": "From the employee table (`emp`), bo'lim raqami (`deptno`) `30` ga teng having barcha xodimlarni (`*`) toping."
  },
  {
    "id": 18,
    "sector": 2,
    "difficulty": "Floor 2 • Easy",
    "source": "L04 Slide 20 • Katta (`>`) Operator",
    "title": "Yuqori Maoshli Mutaxassislar",
    "story": "Soliq qo'mitasi oylik maoshi 2000 dollardan qat'iy yuqori bo'lgan xodimlarning ismi va maoshi haqida ma'lumotnoma so'radi.",
    "taskUz": "From the employee table (`emp`), maoshi (`sal`) `2000` dan katta having xodimlarning faqat ismi (`ename`) and maoshi (`sal`) columns display.",
    "starterCode": "",
    "hint": "`SELECT` da ikkita ustunni ko'rsatib, `WHERE` qismida katta belgisidan foydalaning.",
    "solutions": [
      "SELECT ename, sal FROM emp WHERE sal > 2000",
      "SELECT * FROM emp WHERE sal > 2000"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {},
      {}
    ],
    "explanation": "Olti nafar yuqori maosh oluvchi rahbar va tahlilchilar aniqlandi.",
    "task": "From the employee table (`emp`), maoshi (`sal`) `2000` dan katta having xodimlarning faqat ismi (`ename`) and maoshi (`sal`) columns display."
  },
  {
    "id": 19,
    "sector": 2,
    "difficulty": "Floor 2 • Easy",
    "source": "L04 Slide 22 • Kichik yoki Teng (`<=`)",
    "title": "Boshlang'ich Maosh Guruhi",
    "story": "Kasaba uyushmasi oylik maoshi 1250 dollardan oshmaydigan (1250 va undan kam) xodimlarga moddiy yordam ajratmoqchi.",
    "taskUz": "From the employee table (`emp`), maoshi (`sal`) `1250` dan kichik yoki unga teng having xodimlarning ismi (`ename`), lavozimi (`job`) and maoshini (`sal`) display.",
    "starterCode": "",
    "hint": "Kichik yoki teng (`<=`) taqqoslash operatorini ishlating.",
    "solutions": [
      "SELECT ename, job, sal FROM emp WHERE sal <= 1250",
      "SELECT * FROM emp WHERE sal <= 1250"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "Besh nafar xodim (SMITH, JAMES, ADAMS, WARD va MARTIN) ushbu mezon bo'yicha topildi.",
    "task": "From the employee table (`emp`), maoshi (`sal`) `1250` dan kichik yoki unga teng having xodimlarning ismi (`ename`), lavozimi (`job`) and maoshini (`sal`) display."
  },
  {
    "id": 20,
    "sector": 2,
    "difficulty": "Floor 2 • Easy",
    "source": "L04 Slide 22 • Teng Emas (`<>` / `!=`)",
    "title": "Sotuvdan Tashqari Xodimlar",
    "story": "Ichki trening faqat sotuvchi (`SALESMAN`) bo'lmagan xodimlar uchun o'tkaziladi.",
    "taskUz": "From the employee table (`emp`), lavozimi (`job`) `'SALESMAN'` ga teng bo'lmagan barcha xodimlarni (`*`) toping.",
    "starterCode": "",
    "hint": "SQL da 'teng emas' sharti uchun `<>` (yoki `!=`) operatoridan foydalaniladi.",
    "solutions": [
      "SELECT * FROM emp WHERE job <> 'SALESMAN'",
      "SELECT * FROM emp WHERE job != 'SALESMAN'",
      "SELECT * FROM emp WHERE NOT job = 'SALESMAN'"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "To'rt nafar sotuvchidan tashqari qolgan 10 nafar xodim ro'yxati olindi.",
    "task": "From the employee table (`emp`), lavozimi (`job`) `'SALESMAN'` ga teng bo'lmagan barcha xodimlarni (`*`) toping."
  },
  {
    "id": 21,
    "sector": 2,
    "difficulty": "Floor 2 • Easy",
    "source": "L04 Slide 27 & T04 C3 • BETWEEN Operator",
    "title": "Maosh Oralig'i Tekshiruvi (800 dan 1500 gacha)",
    "story": "Moliya bo'limiga maoshi 800 dollardan 1500 dollargacha (ikkala chegara ham kiradi) bo'lgan xodimlar ro'yxati kerak.",
    "taskUz": "From the employee table (`emp`), maoshi (`sal`) `800` and `1500` oralig'ida having xodimlarning `ename`, `sal` and `deptno` columns diapazon operatori (`BETWEEN`) using display.",
    "starterCode": "",
    "hint": "`WHERE` bandida diapazon tekshiruvchi `BETWEEN ... AND ...` operatorini qo'llang.",
    "solutions": [
      "SELECT ename, sal, deptno FROM emp WHERE sal BETWEEN 800 AND 1500",
      "SELECT ename, sal, deptno FROM emp WHERE sal BETWEEN 800 AND 1500 ORDER BY sal",
      "SELECT * FROM emp WHERE sal BETWEEN 800 AND 1500"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "`BETWEEN` ikkala chegarani ham o'z ichiga oladi: 800 oluvchi SMITH ham, 1500 oluvchi TURNER ham ro'yxatga kirdi.",
    "task": "From the employee table (`emp`), maoshi (`sal`) `800` and `1500` oralig'ida having xodimlarning `ename`, `sal` and `deptno` columns diapazon operatori (`BETWEEN`) using display."
  },
  {
    "id": 22,
    "sector": 2,
    "difficulty": "Floor 2 • Intermediate",
    "source": "L04 Slide 32 • NOT BETWEEN",
    "title": "O'rta Diapazondan Tashqaridagilar",
    "story": "Endi aksincha: maoshi 1200 va 2900 dollar oralig'iga KIRMAYDIGAN (eng kam yoki eng ko'p maosh oluvchi) xodimlarni topish talab etiladi.",
    "taskUz": "From the employee table (`emp`), maoshi (`sal`) `1200` and `2900` oralig'idan tashqarida having xodimlarning `ename`, `job` and `sal` columns `NOT BETWEEN` using display.",
    "starterCode": "",
    "hint": "`BETWEEN` operatoridan oldin `NOT` inkor so'zini qo'ying.",
    "solutions": [
      "SELECT ename, job, sal FROM emp WHERE sal NOT BETWEEN 1200 AND 2900",
      "SELECT * FROM emp WHERE sal NOT BETWEEN 1200 AND 2900"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "Maoshi 1200 dan past (SMITH, JAMES, ADAMS) va 2900 dan yuqori (JONES, FORD, SCOTT, KING) bo'lgan 7 nafar xodim topildi.",
    "task": "From the employee table (`emp`), maoshi (`sal`) `1200` and `2900` oralig'idan tashqarida having xodimlarning `ename`, `job` and `sal` columns `NOT BETWEEN` using display."
  },
  {
    "id": 23,
    "sector": 2,
    "difficulty": "Floor 2 • Easy",
    "source": "L04 Slide 28 & T04 C6 • IN Ro'yxat Operatori",
    "title": "Nyu-York va Dallas Filiallari (`IN`)",
    "story": "10-bo'lim (Nyu-York) va 20-bo'lim (Dallas) xodimlari uchun qo'shma vebinar tashkil etilmoqda.",
    "taskUz": "From the employee table (`emp`), bo'lim raqami (`deptno`) `10` yoki `20` having xodimlarni ro'yxat operatori (`IN`) using toping.",
    "starterCode": "",
    "hint": "`WHERE` bandida `deptno` ustunidan keyin `IN` operatorini va qavs ichida 10 hamda 20 sonlarini yozing.",
    "solutions": [
      "SELECT * FROM emp WHERE deptno IN (10, 20)",
      "SELECT ename, job, deptno FROM emp WHERE deptno IN (10, 20)"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "10 va 20-bo'limlarda ishlovchi 8 nafar xodim ro'yxati shakllantirildi.",
    "task": "From the employee table (`emp`), bo'lim raqami (`deptno`) `10` yoki `20` having xodimlarni ro'yxat operatori (`IN`) using toping."
  },
  {
    "id": 24,
    "sector": 2,
    "difficulty": "Floor 2 • Intermediate",
    "source": "T04 Intro • Shaharlar Bo'yicha Bo'limlar",
    "title": "Dallas va Chikago Ofislari",
    "story": "Boshqaruv kengashi faqat Dallas (`DALLAS`) va Chikago (`CHICAGO`) shaharlarida joylashgan bo'limlarning ma'lumotlarini so'radi.",
    "taskUz": "From the department table (`dept`), joylashgan shahri (`loc`) `'DALLAS'` yoki `'CHICAGO'` having qatorlarni display.",
    "starterCode": "",
    "hint": "`dept` jadvalida `loc` ustunini `IN` yoki `OR` yordamida `'DALLAS'` va `'CHICAGO'` qiymatlariga tekshiring.",
    "solutions": [
      "SELECT * FROM dept WHERE loc IN ('DALLAS', 'CHICAGO')",
      "SELECT deptno, dname, loc FROM dept WHERE loc IN ('DALLAS', 'CHICAGO') ORDER BY dname",
      "SELECT * FROM dept WHERE loc = 'DALLAS' OR loc = 'CHICAGO'"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "20-bo'lim (RESEARCH - DALLAS) va 30-bo'lim (SALES - CHICAGO) tanlab olindi.",
    "task": "From the department table (`dept`), joylashgan shahri (`loc`) `'DALLAS'` yoki `'CHICAGO'` having qatorlarni display."
  },
  {
    "id": 25,
    "sector": 2,
    "difficulty": "Floor 2 • Intermediate",
    "source": "T04 Task C18 (Query 1) • Rahbarlar Ro'yxati Bo'yicha Filtr",
    "title": "Tanlangan Menejerlar Jamoasi",
    "story": "Uch nafar rahbar — CLARK (`7782`), JONES (`7566`) va FORD (`7902`) ga bevosita bo'ysunadigan xodimlar ro'yxati talab qilindi.",
    "taskUz": "From the employee table (`emp`), bevosita rahbari (`supervisor`) `7782`, `7566` yoki `7902` having xodimlarni `IN` operatori using toping.",
    "starterCode": "",
    "hint": "`WHERE` bandida `supervisor` ustunini `(7782, 7566, 7902)` ro'yxatiga tekshiring.",
    "solutions": [
      "SELECT * FROM emp WHERE supervisor IN (7782, 7566, 7902)",
      "SELECT * FROM emp WHERE supervisor IN (7782, 7566, 7902) ORDER BY supervisor NULLS LAST, ename"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "Ushbu uch rahbarga bo'ysunadigan 4 nafar xodim (FORD, SCOTT, SMITH va MILLER) aniqlandi.",
    "task": "From the employee table (`emp`), bevosita rahbari (`supervisor`) `7782`, `7566` yoki `7902` having xodimlarni `IN` operatori using toping."
  },
  {
    "id": 26,
    "sector": 2,
    "difficulty": "Floor 2 • Intermediate",
    "source": "T04 Task H3 • Ikki Ro'yxat Kesishmasi",
    "title": "10 va 30-Bo'lim Klerk hamda Sotuvchilari",
    "story": "Kadrlar bo'limi faqat 10 yoki 30-bo'limda ishlaydigan klerk (`CLERK`) va sotuvchilarni (`SALESMAN`) ro'yxatga olmoqda.",
    "taskUz": "From the employee table (`emp`), lavozimi (`job`) `'CLERK'` yoki `'SALESMAN'` having and bo'lim raqami (`deptno`) `10` yoki `30` having xodimlarni toping.",
    "starterCode": "",
    "hint": "Ikkita `IN` ro'yxat shartini `AND` mantiqiy operatori bilan birlashtiring.",
    "solutions": [
      "SELECT * FROM emp WHERE job IN ('CLERK', 'SALESMAN') AND deptno IN (10, 30)",
      "SELECT * FROM emp WHERE deptno IN (10, 30) AND job IN ('CLERK', 'SALESMAN')"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {}
    ],
    "explanation": "20-bo'limdagi klerklar (SMITH va ADAMS) chiqarib tashlanib, 10 va 30-bo'limdagi 6 nafar xodim qoldi.",
    "task": "From the employee table (`emp`), lavozimi (`job`) `'CLERK'` yoki `'SALESMAN'` having and bo'lim raqami (`deptno`) `10` yoki `30` having xodimlarni toping."
  },
  {
    "id": 27,
    "sector": 2,
    "difficulty": "Floor 2 • Intermediate",
    "source": "T04 Task H8 • Lavozim va Maosh Chegarasi",
    "title": "O'rta Bo'g'in Klerk va Menejerlar",
    "story": "Rahbariyat lavozimi klerk (`CLERK`) yoki menejer (`MANAGER`) bo'lgan, biroq maoshi 1000 dan 2000 dollargacha bo'lgan xodimlarni qidirmoqda.",
    "taskUz": "From the employee table (`emp`), lavozimi (`job`) `'CLERK'` yoki `'MANAGER'` having and maoshi (`sal`) `1000` bilan `2000` oralig'ida having xodimlarni display.",
    "starterCode": "",
    "hint": "`job` uchun `IN` (yoki qavs ichida `OR`) va `sal` uchun `BETWEEN` operatorlarini `AND` bilan bog'lang.",
    "solutions": [
      "SELECT * FROM emp WHERE job IN ('CLERK', 'MANAGER') AND sal BETWEEN 1000 AND 2000",
      "SELECT * FROM emp WHERE (job = 'CLERK' OR job = 'MANAGER') AND sal BETWEEN 1000 AND 2000"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {}
    ],
    "explanation": "Menejerlarning barchasi 2000 dan ko'p maosh olgani sababli, bu oraliqda faqat ADAMS (1100) va MILLER (1300) topildi.",
    "task": "From the employee table (`emp`), lavozimi (`job`) `'CLERK'` yoki `'MANAGER'` having and maoshi (`sal`) `1000` bilan `2000` oralig'ida having xodimlarni display."
  },
  {
    "id": 28,
    "sector": 2,
    "difficulty": "Floor 2 • Hard",
    "source": "L04 Slide 24–25 & T04 Intro • AND va OR Ustuvorligi",
    "title": "Mantiqiy Ustuvorlik Qavslari",
    "story": "Yosh tahlilchi 'klerk yoki sotuvchi bo'lgan va kamida 1250 maosh oladiganlar'ni topaman deb qavs qo'ymay yozgan edi, 800 oladigan SMITH ham ro'yxatga kirib ketdi! Chunki `AND` amali `OR` dan oldin bajariladi!",
    "taskUz": "From the employee table (`emp`), lavozimi (`job`) `'CLERK'` yoki `'SALESMAN'` having and maoshi (`sal`) kamida `1250` (`>= 1250`) having xodimlarni qavslardan to'g'ri foydalanib toping.",
    "starterCode": "",
    "hint": "Avval lavozim shartlarini `OR` bilan qavs ichiga oling, so'ngra `AND` orqali maosh shartini qo'shing.",
    "solutions": [
      "SELECT * FROM emp WHERE (job = 'CLERK' OR job = 'SALESMAN') AND sal >= 1250",
      "SELECT * FROM emp WHERE job IN ('CLERK', 'SALESMAN') AND sal >= 1250"
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
        "message": "⚠️ Mantiqiy Ustuvorlik Xatosi: Qavssiz yozsangiz `AND` birinchi bajarilib, 1250 dan kam oladigan klerklar (SMITH, JAMES, ADAMS) ham chiqib qoladi! `OR` qismini qavs ichiga oling."
      }
    ],
    "explanation": "Qavslar tufayli ikkala kasb egalari uchun ham `>= 1250` maosh talabi qat'iy ishladi (5 nafar xodim).",
    "task": "From the employee table (`emp`), lavozimi (`job`) `'CLERK'` yoki `'SALESMAN'` having and maoshi (`sal`) kamida `1250` (`>= 1250`) having xodimlarni qavslardan to'g'ri foydalanib toping."
  },
  {
    "id": 29,
    "sector": 2,
    "difficulty": "Floor 2 • Hard",
    "source": "T04 Task C24 (Query 1) • Qo'shma Murakkab Filtr",
    "title": "Maxsus Attestatsiya Guruhi (T04 C24-1)",
    "story": "Attestatsiya komissiyasi ikkita maxsus toifadagi xodimlarni chaqirmoqda: 1-toifa — 20 yoki 30-bo'limda ishlaydigan va maoshi 1000 dan katta bo'lgan klerklar; 2-toifa — 30-bo'limda ishlaydigan va maoshi kamida 1500 bo'lgan sotuvchilar.",
    "taskUz": "From the employee table (`emp`), yuqoridagi ikki toifadan biriga mansub having xodimlarni toping: (lavozimi `'CLERK'`, bo'limi `20` yoki `30`, maoshi `1000` dan katta) YOKI (lavozimi `'SALESMAN'`, bo'limi `30`, maoshi `1500` dan katta yoki teng).",
    "starterCode": "",
    "hint": "Har bir toifaning uchta shartini `AND` bilan yozib, ikkita katta guruhni `OR` operatori bilan bog'lang.",
    "solutions": [
      "SELECT * FROM emp WHERE (job = 'CLERK' AND deptno IN (20, 30) AND sal > 1000) OR (job = 'SALESMAN' AND deptno = 30 AND sal >= 1500)",
      "SELECT * FROM emp WHERE (job = 'CLERK' AND deptno IN (20, 30) AND sal > 1000) OR (job = 'SALESMAN' AND deptno = 30 AND sal >= 1500) ORDER BY deptno DESC, sal"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {},
      {},
      {},
      {}
    ],
    "explanation": "T04 C24 (1-qism): Ushbu murakkab filtrdan 3 nafar xodim — ADAMS (1100), ALLEN (1600) va TURNER (1500) o'tdi.",
    "task": "From the employee table (`emp`), yuqoridagi ikki toifadan biriga mansub having xodimlarni toping: (lavozimi `'CLERK'`, bo'limi `20` yoki `30`, maoshi `1000` dan katta) YOKI (lavozimi `'SALESMAN'`, bo'limi `30`, maoshi `1500` dan katta yoki teng)."
  },
  {
    "id": 30,
    "sector": 2,
    "difficulty": "Floor 2 Yakuni • Master Architect",
    "source": "T04 Task C24 (Query 2) • Murakkab Filtrni Inkor Qilish",
    "title": "2-Qavat Bossi: Attestatsiyadan Ozod Qilinganlar (T04 C24-2)",
    "story": "Endi komissiya 29-savoldagi attestatsiya ro'yxatiga KIRMAGAN qolgan 11 nafar xodimning ro'yxatini talab qildi!",
    "taskUz": "29-savoldagi murakkab shartni butunligicha `NOT (...)` inkor operatori ichiga olib, ushbu mezonlarga tushmaydigan barcha 11 nafar xodimni (`emp`) display.",
    "starterCode": "",
    "hint": "`WHERE NOT ( ... )` yozib, qavs ichiga 29-savoldagi ikkala toifa shartlarini joylashtiring.",
    "solutions": [
      "SELECT * FROM emp WHERE NOT ((job = 'CLERK' AND deptno IN (20, 30) AND sal > 1000) OR (job = 'SALESMAN' AND deptno = 30 AND sal >= 1500))",
      "SELECT * FROM emp WHERE NOT ((job = 'CLERK' AND deptno IN (20, 30) AND sal > 1000) OR (job = 'SALESMAN' AND deptno = 30 AND sal >= 1500)) ORDER BY deptno DESC, sal"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {},
      {},
      {}
    ],
    "explanation": "2-Qavat zabt etildi! `NOT (...)` operatori butun murakkab mantiqiy ifodani inkor qilib, 11 nafar xodimni qaytardi.",
    "task": "29-savoldagi murakkab shartni butunligicha `NOT (...)` inkor operatori ichiga olib, ushbu mezonlarga tushmaydigan barcha 11 nafar xodimni (`emp`) display."
  },
  {
    "id": 31,
    "sector": 3,
    "difficulty": "Floor 3 • Easy",
    "source": "L04 Slide 31 • IS NULL",
    "title": "Yuqori Rahbariyat: Boshlig'i Yo'q Shaxs",
    "story": "3-qavat — Ichki Audit byurosi. Auditorlar korporatsiya ierarxiyasining eng cho'qqisida turgan va hech kimga bo'ysunmaydigan (`supervisor` qiymati `NULL` bo'lgan) shaxsni tekshirmoqda.",
    "taskUz": "From the employee table (`emp`), rahbari (`supervisor`) mavjud bo'lmagan (`NULL`) xodimning `ename` and `supervisor` columns display.",
    "starterCode": "",
    "hint": "SQL da `NULL` qiymatni oddiy tenglik (`=`) bilan tekshirib bo'lmaydi, `IS NULL` operatorini ishlating.",
    "solutions": [
      "SELECT ename, supervisor FROM emp WHERE supervisor IS NULL",
      "SELECT * FROM emp WHERE supervisor IS NULL"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "Korporatsiya prezidenti KINGning rahbari yo'q (`supervisor IS NULL`).",
    "task": "From the employee table (`emp`), rahbari (`supervisor`) mavjud bo'lmagan (`NULL`) xodimning `ename` and `supervisor` columns display."
  },
  {
    "id": 32,
    "sector": 3,
    "difficulty": "Floor 3 • Easy",
    "source": "L04 Slide 31 • comm IS NULL",
    "title": "Komissiya Olmaydigan Xodimlar",
    "story": "Audit guruhi shartnomasida komissiya to'lovi umuman ko'zda tutilmagan (`comm` ustuni `NULL` bo'lgan) 10 nafar xodimning ro'yxatini so'radi.",
    "taskUz": "From the employee table (`emp`), komissiyasi (`comm`) `NULL` having xodimlarning `ename`, `job` and `sal` columns display.",
    "starterCode": "",
    "hint": "`WHERE` bandida `comm` ustuni uchun `IS NULL` shartini yozing.",
    "solutions": [
      "SELECT ename, job, sal FROM emp WHERE comm IS NULL",
      "SELECT * FROM emp WHERE comm IS NULL"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "Sotuvchi bo'lmagan barcha 10 nafar xodimda komissiya ustuni `NULL` holatida saqlanadi.",
    "task": "From the employee table (`emp`), komissiyasi (`comm`) `NULL` having xodimlarning `ename`, `job` and `sal` columns display."
  },
  {
    "id": 33,
    "sector": 3,
    "difficulty": "Floor 3 • Easy",
    "source": "L04 Slide 31 • IS NOT NULL",
    "title": "Komissiya Qayd Etilgan Sotuvchilar",
    "story": "Endi komissiya ustunida aniq qiymat (`NULL` emas) yozilgan 4 nafar xodimni ajratib oling.",
    "taskUz": "From the employee table (`emp`), komissiyasi (`comm`) `NULL` bo'lmagan xodimlarning `ename`, `job`, `sal` and `comm` columns display.",
    "starterCode": "",
    "hint": "`IS NOT NULL` operatoridan foydalaning.",
    "solutions": [
      "SELECT ename, job, sal, comm FROM emp WHERE comm IS NOT NULL",
      "SELECT * FROM emp WHERE comm IS NOT NULL"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "MARTIN (1400), WARD (500), ALLEN (300) va TURNER (0) da komissiya qiymati mavjud.",
    "task": "From the employee table (`emp`), komissiyasi (`comm`) `NULL` bo'lmagan xodimlarning `ename`, `job`, `sal` and `comm` columns display."
  },
  {
    "id": 34,
    "sector": 3,
    "difficulty": "Floor 3 • Easy",
    "source": "T04 Task C5 & H2 • DISTINCT + IS NOT NULL",
    "title": "Rahbarlik Qilayotgan Xodimlar Raqamlari",
    "story": "Kadrlar bo'limiga kimdir ustidan rahbarlik qilayotgan boshliqlarning takrorlanmas tabel raqamlari (`supervisor`) kerak, bunda `NULL` qiymat ro'yxatga kirmasligi shart.",
    "taskUz": "From the employee table (`emp`), `supervisor` columnng `NULL` bo'lmagan and takrorlanmas (noyob) qiymatlarini display.",
    "starterCode": "",
    "hint": "`SELECT` da `DISTINCT` va `WHERE` da `IS NOT NULL` shartlarini birga qo'llang.",
    "solutions": [
      "SELECT DISTINCT supervisor FROM emp WHERE supervisor IS NOT NULL",
      "SELECT DISTINCT supervisor AS \"Supervisor empno\" FROM emp WHERE supervisor IS NOT NULL ORDER BY \"Supervisor empno\""
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "T04 C5: Kompaniyada 6 nafar xodim (7566, 7698, 7782, 7788, 7839, 7902) boshqalarga rahbarlik qiladi.",
    "task": "From the employee table (`emp`), `supervisor` columnng `NULL` bo'lmagan and takrorlanmas (noyob) qiymatlarini display."
  },
  {
    "id": 35,
    "sector": 3,
    "difficulty": "Floor 3 • Intermediate",
    "source": "T04 Task H15 • Nol yoki NULL Komissiya",
    "title": "Haqiqiy Bonus Olmaganlar (0 yoki NULL)",
    "story": "Auditorlar amalda bir dollar ham bonus olmagan xodimlarni — ya'ni komissiyasi `0` bo'lgan TURNERni ham, komissiyasi `NULL` bo'lgan 10 kishini ham bitta ro'yxatda ko'rmoqchi.",
    "taskUz": "From the employee table (`emp`), komissiyasi (`comm`) `0` ga teng YOKI `NULL` having barcha xodimlarni toping.",
    "starterCode": "",
    "hint": "`comm` ustunini `0` ga tengligini Yoki (`OR`) `IS NULL` ekanligini tekshiring.",
    "solutions": [
      "SELECT * FROM emp WHERE comm = 0 OR comm IS NULL",
      "SELECT ename, job, sal, comm FROM emp WHERE comm = 0 OR comm IS NULL",
      "SELECT * FROM emp WHERE COALESCE(comm, 0) = 0"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "Nol (`0`) va noma'lum (`NULL`) qiymatlar birlashtirilib, 11 nafar xodim aniqlandi.",
    "task": "From the employee table (`emp`), komissiyasi (`comm`) `0` ga teng YOKI `NULL` having barcha xodimlarni toping."
  },
  {
    "id": 36,
    "sector": 3,
    "difficulty": "Floor 3 • Intermediate",
    "source": "L04 Slide 26 • 3-Valued Logic: comm > 0",
    "title": "Ijobiy Komissiya Oluvchilar",
    "story": "Endi faqat 0 dan katta komissiya olgan sotuvchilarni ajrating. E'tibor bering: `comm > 0` sharti `TURNER (0)` uchun `FALSE`, `NULL` bo'lgan 10 kishi uchun esa `UNKNOWN` qaytaradi!",
    "taskUz": "From the employee table (`emp`), komissiyasi (`comm`) `0` dan qat'iy katta having xodimlarning `ename`, `sal` and `comm` columns display.",
    "starterCode": "",
    "hint": "`WHERE` bandida `comm` ustuni 0 dan katta ekanligini yozing.",
    "solutions": [
      "SELECT ename, sal, comm FROM emp WHERE comm > 0",
      "SELECT * FROM emp WHERE comm > 0"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "`WHERE` bandi faqat `TRUE` natijalarni o'tkazadi: ALLEN (300), WARD (500) va MARTIN (1400).",
    "task": "From the employee table (`emp`), komissiyasi (`comm`) `0` dan qat'iy katta having xodimlarning `ename`, `sal` and `comm` columns display."
  },
  {
    "id": 37,
    "sector": 3,
    "difficulty": "Floor 3 • Intermediate",
    "source": "T04 Intro • NOT IN va NULL Muammosi",
    "title": "Ikki Rahbardan Tashqari Barcha Xodimlar (T04 Intro)",
    "story": "Auditorlar rahbari 7902 (FORD) yoki 7566 (JONES) bo'lmagan barcha xodimlarni so'rashdi. Agar faqat `NOT IN (7902, 7566)` desangiz, rahbari `NULL` bo'lgan Prezident KING ro'yxatdan tushib qoladi!",
    "taskUz": "From the employee table (`emp`), rahbari (`supervisor`) `7902` and `7566` bo'lmagan and rahbari `NULL` having xodimlarning `ename` and `supervisor` columns display.",
    "starterCode": "",
    "hint": "`supervisor` ustuni uchun `NOT IN (7902, 7566)` shartiga `OR` orqali `supervisor IS NULL` shartini qo'shing.",
    "solutions": [
      "SELECT ename, supervisor FROM emp WHERE supervisor NOT IN (7902, 7566) OR supervisor IS NULL",
      "SELECT ename, supervisor FROM emp WHERE supervisor NOT IN (7902, 7566) OR supervisor IS NULL ORDER BY supervisor NULLS LAST, ename",
      "SELECT * FROM emp WHERE supervisor NOT IN (7902, 7566) OR supervisor IS NULL"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {}
    ],
    "trapChecks": [
      {
        "mustContain": {},
        "message": "⚠️ 3-Qiymatli Mantiq Tuzog'i: `OR supervisor IS NULL` yozmasangiz, rahbari `NULL` bo'lgan Prezident KING natijaga kirmay qoladi!"
      }
    ],
    "explanation": "Uch qiymatli mantiqda `NULL NOT IN (...)` noma'lum (`UNKNOWN`) bergani uchun `OR supervisor IS NULL` yordamida KING saqlab qolindi (11 kishi).",
    "task": "From the employee table (`emp`), rahbari (`supervisor`) `7902` and `7566` bo'lmagan and rahbari `NULL` having xodimlarning `ename` and `supervisor` columns display."
  },
  {
    "id": 38,
    "sector": 3,
    "difficulty": "Floor 3 • Intermediate",
    "source": "T04 Task C18 (Query 2) • Uch Rahbarni Istisno Qilish",
    "title": "Uch Rahbar Jamoasidan Tashqaridagilar (T04 C18-2)",
    "story": "25-savolda rahbari 7782, 7566 yoki 7902 bo'lgan 4 nafar xodimni topgan edik. Endi qolgan 10 nafar xodimni (Prezident KING bilan birga!) chiqarish kerak.",
    "taskUz": "From the employee table (`emp`), rahbari (`supervisor`) `(7782, 7566, 7902)` ro'yxatiga kirmaydigan yoki rahbari `NULL` having barcha 10 nafar xodimni (`*`) toping.",
    "starterCode": "",
    "hint": "`supervisor` uchun `NOT IN (7782, 7566, 7902)` va `OR supervisor IS NULL` shartlarini yozing.",
    "solutions": [
      "SELECT * FROM emp WHERE supervisor NOT IN (7782, 7566, 7902) OR supervisor IS NULL",
      "SELECT * FROM emp WHERE supervisor NOT IN (7782, 7566, 7902) OR supervisor IS NULL ORDER BY supervisor NULLS LAST, ename"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {}
    ],
    "explanation": "T04 C18 (2-so'rov): 10 nafar xodimning barchasi, shu jumladan KING ham ro'yxatga kiritildi.",
    "task": "From the employee table (`emp`), rahbari (`supervisor`) `(7782, 7566, 7902)` ro'yxatiga kirmaydigan yoki rahbari `NULL` having barcha 10 nafar xodimni (`*`) toping."
  },
  {
    "id": 39,
    "sector": 3,
    "difficulty": "Floor 3 • Intermediate",
    "source": "T04 Task 12 • IS DISTINCT FROM",
    "title": "Komissiyasi 300 Bo'lmagan 13 Xodim",
    "story": "Kompaniyada faqat ALLEN 300 dollar komissiya oladi. Demak, komissiyasi 300 bo'lmaganlar 13 kishi! Ularni (`NULL` komissiyalilar bilan birga) PostgreSQLning maxsus `IS DISTINCT FROM` operatori yordamida toping.",
    "taskUz": "From the employee table (`emp`), komissiyasi (`comm`) `300` dan farq qiluvchi barcha 13 nafar xodimning `ename`, `sal` and `comm` columns `IS DISTINCT FROM` operatori orqali display.",
    "starterCode": "",
    "hint": "`WHERE` bandida `comm` ustuni va `300` soni o'rtasida `IS DISTINCT FROM` operatorini ishlating.",
    "solutions": [
      "SELECT ename, sal, comm FROM emp WHERE comm IS DISTINCT FROM 300",
      "SELECT * FROM emp WHERE comm IS DISTINCT FROM 300"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "trapChecks": [
      {
        "regex": {},
        "message": "⚠️ `comm <> 300` faqat 3 kishini chiqaradi (`NULL` bo'lgan 10 kishini tashlab ketadi). `IS DISTINCT FROM` operatoridan foydalaning!"
      }
    ],
    "explanation": "`IS DISTINCT FROM` operatori `NULL` ni oddiy qiymat sifatida ko'rib, 300 ga teng emas deb hisoblaydi (13 ta qator).",
    "task": "From the employee table (`emp`), komissiyasi (`comm`) `300` dan farq qiluvchi barcha 13 nafar xodimning `ename`, `sal` and `comm` columns `IS DISTINCT FROM` operatori orqali display."
  },
  {
    "id": 40,
    "sector": 3,
    "difficulty": "Floor 3 • Intermediate",
    "source": "T04 Null-Safe Equality • IS NOT DISTINCT FROM",
    "title": "Null-Xavfsiz Tenglik Tekshiruvi",
    "story": "PostgreSQL da `IS DISTINCT FROM` ning teskarisi `IS NOT DISTINCT FROM` hisoblanadi — u hatto `NULL` bilan `NULL` ni ham teng (`TRUE`) deb qabul qiladi!",
    "taskUz": "From the employee table (`emp`), komissiyasi (`comm`) `NULL` qiymatdan farqsiz having (`IS NOT DISTINCT FROM NULL`) xodimlarning `ename` and `comm` columns display.",
    "starterCode": "",
    "hint": "`WHERE` bandida `comm` ustunidan keyin `IS NOT DISTINCT FROM NULL` iborasini yozing.",
    "solutions": [
      "SELECT ename, comm FROM emp WHERE comm IS NOT DISTINCT FROM NULL",
      "SELECT * FROM emp WHERE comm IS NOT DISTINCT FROM NULL"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "`comm IS NOT DISTINCT FROM NULL` mantiqan `comm IS NULL` bilan bir xil natija beradi va ikkita o'zgaruvchini solishtirishda juda qo'l keladi.",
    "task": "From the employee table (`emp`), komissiyasi (`comm`) `NULL` qiymatdan farqsiz having (`IS NOT DISTINCT FROM NULL`) xodimlarning `ename` and `comm` columns display."
  },
  {
    "id": 41,
    "sector": 3,
    "difficulty": "Floor 3 • Intermediate",
    "source": "T04 Intro • COALESCE Standart Qiymat",
    "title": "Komissiya O'rniga Nol Ko'rsatish (`COALESCE`)",
    "story": "Buxgalteriya hisobotida `NULL` yozuvi xunuk ko'rinmasligi uchun, komissiyasi `NULL` bo'lgan xodimlarda uning o'rniga `0` soni chiqishi kerak.",
    "taskUz": "From the employee table (`emp`), xodimning ismini (`ename`), maoshini (`sal`) and `COALESCE` funksiyasi using komissiyasini (`comm`, agar `NULL` bo'lsa `0`) `safe_comm` ustun nomi bilan display.",
    "starterCode": "",
    "hint": "`COALESCE` funksiyasiga birinchi argument qilib `comm`, ikkinchi argument qilib `0` bering.",
    "solutions": [
      "SELECT ename, sal, COALESCE(comm, 0) AS safe_comm FROM emp",
      "SELECT ename, sal, COALESCE(comm, 0) FROM emp"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {}
    ],
    "explanation": "`COALESCE` ro'yxatdagi birinchi `NULL` bo'lmagan qiymatni qaytaradi.",
    "task": "From the employee table (`emp`), xodimning ismini (`ename`), maoshini (`sal`) and `COALESCE` funksiyasi using komissiyasini (`comm`, agar `NULL` bo'lsa `0`) `safe_comm` ustun nomi bilan display."
  },
  {
    "id": 42,
    "sector": 3,
    "difficulty": "Floor 3 • Intermediate",
    "source": "T04 Task C25 • Maosh + Komissiya Yig'indisi",
    "title": "Jami Oylik Daromad (Maosh va Komissiya)",
    "story": "Agar maosh va komissiya oddiygina qo'shilsa, komissiyasi noma'lum bo'lgan 10 nafar xodimning jami maoshi ham noma'lum bo'lib qoladi! Komissiya bo'sh bo'lganda uni nolga almashtirib qo'shing.",
    "taskUz": "From the employee table (`emp`), `ename`, `sal`, `comm` and maoshga komissiyani (agar komissiya `NULL` bo'lsa `0` ga almashtirib) qo'shish orqali hisoblangan jami daromadni `total_income` ustun nomi bilan display.",
    "starterCode": "",
    "hint": "`sal` ustuniga `COALESCE(comm, 0)` ifodasini qo'shing.",
    "solutions": [
      "SELECT ename, sal, comm, sal + COALESCE(comm, 0) AS total_income FROM emp",
      "SELECT ename, sal, comm, sal + coalesce(comm, 0) AS \"Salary plus commission\" FROM emp",
      "SELECT ename, sal, comm, sal + COALESCE(comm, 0) FROM emp"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {}
    ],
    "explanation": "T04 C25: Barcha 14 xodimning maoshi va komissiyasi xatosiz jamlandi.",
    "task": "From the employee table (`emp`), `ename`, `sal`, `comm` and maoshga komissiyani (agar komissiya `NULL` bo'lsa `0` ga almashtirib) qo'shish orqali hisoblangan jami daromadni `total_income` ustun nomi bilan display."
  },
  {
    "id": 43,
    "sector": 3,
    "difficulty": "Floor 3 • Hardroq",
    "source": "T04 Task C18 (Query 3) • COALESCE in WHERE",
    "title": "Standart Qiymat Yordamida Rahbarlarni Filtrlash (T04 C18-3)",
    "story": "38-savoldagi qo'shimcha shartni yozmasdan, rahbar ustunidagi bo'sh qiymatga `-1` standart qiymat berib, `(7782, 7566, 7902)` ro'yxatida yo'qligini tekshirish mumkin!",
    "taskUz": "From the employee table (`emp`), `supervisor` column (agar `NULL` bo'lsa `-1` ga almashtiruvchi funksiya orqali) `(7782, 7566, 7902)` ro'yxatiga kirmasligini tekshiruvchi so'rov yozing.",
    "starterCode": "",
    "hint": "`WHERE` bandida `COALESCE(supervisor, -1)` ifodasidan keyin `NOT IN (7782, 7566, 7902)` yozing.",
    "solutions": [
      "SELECT * FROM emp WHERE COALESCE(supervisor, -1) NOT IN (7782, 7566, 7902)",
      "SELECT * FROM emp WHERE COALESCE(supervisor, -1) NOT IN (7782, 7566, 7902) ORDER BY supervisor NULLS LAST, ename"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "T04 C18 (3-yechim): `-1` ro'yxatda bo'lmagani uchun KING (`NULL -> -1`) avtomatik ravishda natijada qoladi!",
    "task": "From the employee table (`emp`), `supervisor` column (agar `NULL` bo'lsa `-1` ga almashtiruvchi funksiya orqali) `(7782, 7566, 7902)` ro'yxatiga kirmasligini tekshiruvchi so'rov yozing."
  },
  {
    "id": 44,
    "sector": 3,
    "difficulty": "Floor 3 • Hard",
    "source": "T04 Intro & E7 • NULLIF Xavfsiz Bo'lish",
    "title": "Nolga Bo'lish Xatosidan Himoya",
    "story": "TURNERning komissiyasi `0` ga teng. Maoshni komissiyaga bo'lganda dastur nolga bo'lish xatosi bilan to'xtab qolmasligi uchun komissiya 0 bo'lsa uni `NULL` ga aylantiruvchi funksiyadan foydalaning!",
    "taskUz": "From the employee table (`emp`), `ename`, `sal`, `comm` and maoshni (`sal`) nolga bo'lishdan himoyalangan komissiyaga (`comm` 0 bo'lsa `NULL` ga aylanadigan qilib) bo'lish natijasini display.",
    "starterCode": "",
    "hint": "Maxrajda `comm` o'rniga `NULLIF` funksiyasini yozib, unga `comm` va `0` argumentlarini bering.",
    "solutions": [
      "SELECT ename, sal, comm, sal / NULLIF(comm, 0) AS ratio FROM emp",
      "SELECT ename, sal, comm, sal / NULLIF(comm, 0) FROM emp"
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
        "message": "⚠️ Nolga Bo'lish Xatosi! TURNERda `comm = 0` bo'lgani uchun oddiy `sal / comm` xato beradi! Maxrajda `NULLIF(comm, 0)` ishlating."
      }
    ],
    "explanation": "`NULLIF(comm, 0)` komissiya 0 bo'lganda uni `NULL` ga aylantiradi va bo'linma xatosiz `NULL` qaytaradi.",
    "task": "From the employee table (`emp`), `ename`, `sal`, `comm` and maoshni (`sal`) nolga bo'lishdan himoyalangan komissiyaga (`comm` 0 bo'lsa `NULL` ga aylanadigan qilib) bo'lish natijasini display."
  },
  {
    "id": 45,
    "sector": 3,
    "difficulty": "Floor 3 Yakuni • Master Architect",
    "source": "T04 Extra Task E10 • IS TRUE va Mantiqiy XOR",
    "title": "3-Qavat Bossi: Aynan Bitta Mezon (T04 E10)",
    "story": "Audit byurosining eng murakkab savoli (T04 E10): Bizga ikkita mezondan AYNAN BITTASI rost bo'lgan xodimlar kerak: 1-mezon: lavozimi `'CLERK'`; 2-mezon: maoshi `1500` dan kam VA ishga kirgan sanasi `'2006-01-01'` dan oldin. Ikkala mezonni ham bajarganlar (JAMES, ADAMS, MILLER) chiqmasin!",
    "taskUz": "From the employee table (`emp`), 1-mezon (lavozimi `'CLERK'`) ning haqiqat qiymati (`IS TRUE`) 2-mezon (maoshi `1500` dan kichik and `hiredate` sanasi `'2006-01-01'` dan oldin) ning haqiqat qiymatiga (`IS TRUE`) teng bo'lmagan xodimlarning `ename`, `job`, `sal`, `hiredate` columns display.",
    "starterCode": "",
    "hint": "Birinchi shartni qavsga olib `IS TRUE` deng, ikkinchi qo'shma shartni ham qavsga olib `IS TRUE` deng va ular orasiga `<>` (teng emas) belgisini qo'ying.",
    "solutions": [
      "SELECT ename, job, sal, hiredate FROM emp WHERE ((job = 'CLERK') IS TRUE) <> ((sal < 1500 AND hiredate < DATE '2006-01-01') IS TRUE)",
      "SELECT ename, job, sal, hiredate FROM emp WHERE ((job = 'CLERK') IS TRUE) <> ((sal < 1500 AND hiredate < DATE '2006-01-01') IS TRUE) ORDER BY ename"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {},
      {},
      {},
      {}
    ],
    "explanation": "3-Qavat yakunlandi! SMITH (faqat 1-mezonga mos, chunki 2007-yilda kirgan) va WARD (faqat 2-mezonga mos, chunki sotuvchi) topildi!",
    "task": "From the employee table (`emp`), 1-mezon (lavozimi `'CLERK'`) ning haqiqat qiymati (`IS TRUE`) 2-mezon (maoshi `1500` dan kichik and `hiredate` sanasi `'2006-01-01'` dan oldin) ning haqiqat qiymatiga (`IS TRUE`) teng bo'lmagan xodimlarning `ename`, `job`, `sal`, `hiredate` columns display."
  },
  {
    "id": 46,
    "sector": 4,
    "difficulty": "Floor 4 • Easy",
    "source": "L04 Slide 29 • LIKE Boshi Bo'yicha Qidiruv",
    "title": "S Harfi Bilan Boshlanuvchi Xodimlar",
    "story": "4-qavat — Korporativ Arxiv. Arxivchi ismining bosh harfi `S` bo'lgan xodimlarning shaxsiy yig'majildlarini qidirmoqda.",
    "taskUz": "From the employee table (`emp`), ismi (`ename`) katta `'S'` harfi bilan boshlanadigan barcha xodimlarni `LIKE` operatori using toping.",
    "starterCode": "",
    "hint": "`LIKE` shablonida `'S'` harfidan keyin istalgancha belgini bildiruvchi foiz (`%`) belgisini qo'ying.",
    "solutions": [
      "SELECT * FROM emp WHERE ename LIKE 'S%'",
      "SELECT ename, job, sal FROM emp WHERE ename LIKE 'S%'",
      "SELECT * FROM emp WHERE ename ILIKE 'S%'"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "SMITH va SCOTTning arxiv hujjatlari topildi.",
    "task": "From the employee table (`emp`), ismi (`ename`) katta `'S'` harfi bilan boshlanadigan barcha xodimlarni `LIKE` operatori using toping."
  },
  {
    "id": 47,
    "sector": 4,
    "difficulty": "Floor 4 • Easy",
    "source": "L04 Slide 29 & T04 H6 • LIKE Oxiri Bo'yicha Qidiruv",
    "title": "N Harfi Bilan Tugaydigan Ismlar",
    "story": "Endi arxivdan ismi `N` harfi bilan tugaydigan xodimlarning ro'yxatini chiqarish kerak.",
    "taskUz": "From the employee table (`emp`), ismi (`ename`) `'N'` harfi bilan tugaydigan barcha xodimlarni toping.",
    "starterCode": "",
    "hint": "Shablonda foiz (`%`) belgisini `'N'` harfidan oldin yozing.",
    "solutions": [
      "SELECT * FROM emp WHERE ename LIKE '%N'",
      "SELECT * FROM emp WHERE ename ILIKE '%N'",
      "SELECT ename, job FROM emp WHERE ename LIKE '%N'"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "MARTIN va ALLEN ismlari `'N'` harfi bilan yakunlanadi.",
    "task": "From the employee table (`emp`), ismi (`ename`) `'N'` harfi bilan tugaydigan barcha xodimlarni toping."
  },
  {
    "id": 48,
    "sector": 4,
    "difficulty": "Floor 4 • Easy",
    "source": "L04 Slide 29 • `_` Bitta Belgi Shabloni",
    "title": "Ikkinchi Harfi L Bo'lgan Xodimlar",
    "story": "Arxiv kartotekasida ismining ikkinchi harfi `L` bo'lgan xodimlarni topish zarur.",
    "taskUz": "From the employee table (`emp`), ismining (`ename`) aynan ikkinchi harfi `'L'` having xodimlarni `LIKE` operatori using toping.",
    "starterCode": "",
    "hint": "Birinchi harf o'rniga bitta pastki chiziq (`_`), undan keyin `'L'` va foiz (`%`) belgisini yozing.",
    "solutions": [
      "SELECT * FROM emp WHERE ename LIKE '_L%'",
      "SELECT ename, job FROM emp WHERE ename LIKE '_L%'",
      "SELECT ename FROM emp WHERE ename LIKE '_L%'"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "BLAKE, CLARK va ALLEN ismlarining ikkinchi harfi `'L'` hisoblanadi.",
    "task": "From the employee table (`emp`), ismining (`ename`) aynan ikkinchi harfi `'L'` having xodimlarni `LIKE` operatori using toping."
  },
  {
    "id": 49,
    "sector": 4,
    "difficulty": "Floor 4 • Intermediate",
    "source": "T04 Task C13 • ILIKE va 3-Harf",
    "title": "Uchinchi Harfi R Bo'lganlar (`ILIKE`)",
    "story": "Qidiruv katta-kichik harfga sezgir bo'lmasligi uchun PostgreSQLning maxsus `ILIKE` operatoridan foydalanib, ismining 3-harfi `r` bo'lgan xodimlarni toping.",
    "taskUz": "From the employee table (`emp`), ismining (`ename`) uchinchi harfi `'r'` (katta yoki kichik) having xodimlarni `ILIKE` operatori using display.",
    "starterCode": "",
    "hint": "`ILIKE` shablonida ikkita pastki chiziq (`__`), keyin `r` harfi va `%` belgisini ishlating.",
    "solutions": [
      "SELECT * FROM emp WHERE ename ILIKE '__r%'",
      "SELECT emp.*, substring(ename FROM 3 FOR 1) AS \"Third letter\" FROM emp WHERE ename ILIKE '__r%' ORDER BY job, sal DESC"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "T04 C13: MARTIN, TURNER, WARD va FORD ismlarining 3-harfi `'R'` ga teng.",
    "task": "From the employee table (`emp`), ismining (`ename`) uchinchi harfi `'r'` (katta yoki kichik) having xodimlarni `ILIKE` operatori using display."
  },
  {
    "id": 50,
    "sector": 4,
    "difficulty": "Floor 4 • Intermediate",
    "source": "T04 Task C12 & H9 • Qo'shma Shablonlar",
    "title": "TH yoki LL Harf Birikmalari (T04 H9)",
    "story": "Tilshunoslik tahlili uchun ismida `'TH'` yoki `'LL'` harf juftligi qatnashgan xodimlar qidirilmoqda.",
    "taskUz": "From the employee table (`emp`), ismida (`ename`) `'TH'` birikmasi YOKI `'LL'` birikmasi qatnashgan xodimlarni toping.",
    "starterCode": "",
    "hint": "Ikkita `LIKE` (yoki `ILIKE`) shartini `OR` bilan bog'lang va harf birikmalarining ikki tomoniga `%` qo'ying.",
    "solutions": [
      "SELECT * FROM emp WHERE ename ILIKE '%TH%' OR ename ILIKE '%LL%'",
      "SELECT * FROM emp WHERE ename LIKE '%TH%' OR ename LIKE '%LL%'",
      "SELECT * FROM emp WHERE ename ILIKE '%TH%' OR ename ILIKE '%LL%' ORDER BY ename"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {}
    ],
    "explanation": "T04 H9: ALLEN (`LL`), MILLER (`LL`) va SMITH (`TH`) ushbu shartga mos tushadi.",
    "task": "From the employee table (`emp`), ismida (`ename`) `'TH'` birikmasi YOKI `'LL'` birikmasi qatnashgan xodimlarni toping."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = window.QUESTIONS_1_50;
}
