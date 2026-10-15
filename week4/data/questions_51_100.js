var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);

_scope.QUESTIONS_51_100 = [
  {
    "id": 51,
    "sector": 4,
    "difficulty": "Floor 4 • Intermediate",
    "source": "T04 Task C14 • ESCAPE Bilan Haqiqiy Foiz Belgisi",
    "title": "Maxsus Belgi Qidiruvi: Haqiqiy Foiz (%)",
    "story": "Arxivdagi ba'zi yozuvlarda foiz belgisi (`%`) shablon sifatida emas, oddiy matn belgisi sifatida qatnashgan bo'lishi mumkin. Uni `ESCAPE` yordamida qidirish qoidasini ko'rsating.",
    "taskUz": "From the employee table (`emp`), ismida (`ename`) haqiqiy foiz (`%`) belgisi qatnashgan qatorlarni `'!'` qochish belgisi (`ESCAPE`) using qidiruvchi so'rov yozing.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "`LIKE` shablonida haqiqiy foiz belgisidan oldin undov (`!%`) qo'ying va oxirida `ESCAPE '!'` bandini yozing.",
    "solutions": [
      "SELECT * FROM emp WHERE ename LIKE '%!%%' ESCAPE '!'",
      "SELECT ename FROM emp WHERE ename LIKE '%!%%' ESCAPE '!'"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "T04 C14: `!%` birikmasi `ESCAPE '!'` tufayli shablonni emas, haqiqiy foiz belgisini qidiradi (jadvalda bunday ism yo'qligi uchun 0 qator qaytishi to'g'ri).",
    "task": "From the employee table (`emp`), ismida (`ename`) haqiqiy foiz (`%`) belgisi qatnashgan qatorlarni `'!'` qochish belgisi (`ESCAPE`) using qidiruvchi so'rov yozing."
  },
  {
    "id": 52,
    "sector": 4,
    "difficulty": "Floor 4 • Intermediate",
    "source": "T04 Task H7 • ESCAPE Bilan Haqiqiy Pastki Chiziq (_)",
    "title": "Uchinchi Belgisi Pastki Chiziq Bo'lgan Yozuvlar (H7)",
    "story": "Endi ismining aynan 3-belgisi haqiqiy pastki chiziq (`_`) bo'lgan qatorlarni qidirish shablonini tuzing.",
    "taskUz": "From the employee table (`emp`), ismining (`ename`) dastlabki ikki belgisi ixtiyoriy, uchinchi belgisi esa haqiqiy pastki chiziq (`_`) having qatorlarni `'!'` qochish belgisi (`ESCAPE`) using toping.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "Dastlabki ikki belgi uchun ikkita `_`, uchinchi belgi uchun esa `!_` va `%` yozib, `ESCAPE '!'` qo'shing.",
    "solutions": [
      "SELECT * FROM emp WHERE ename LIKE '__!_%' ESCAPE '!'",
      "SELECT ename FROM emp WHERE ename LIKE '__!_%' ESCAPE '!'"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "T04 H7: Dastlabki ikkita `_` har qanday ikki harfni, `!_` esa haqiqiy pastki chiziqni bildiradi.",
    "task": "From the employee table (`emp`), ismining (`ename`) dastlabki ikki belgisi ixtiyoriy, uchinchi belgisi esa haqiqiy pastki chiziq (`_`) having qatorlarni `'!'` qochish belgisi (`ESCAPE`) using toping."
  },
  {
    "id": 53,
    "sector": 4,
    "difficulty": "Floor 4 • Intermediate",
    "source": "T04 Task C15 • Apostrof Belgisini Qidirish",
    "title": "Ism Tarkibidagi Apostrof (')",
    "story": "Irlandcha familiyalarda (masalan, O'NEIL) bittalik tirnoq (apostrof) uchraydi. SQL satri ichida bitta apostrofni qanday qidiramiz?",
    "taskUz": "From the employee table (`emp`), ismida (`ename`) bittalik tirnoq (apostrof `'`) qatnashgan qatorlarni `LIKE` using qidiring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "SQL satri ichida bitta apostrofni ifodalash uchun ketma-ket ikkita bittalik tirnoq (`''`) yoziladi.",
    "solutions": [
      "SELECT * FROM emp WHERE ename LIKE '%''%'",
      "SELECT ename FROM emp WHERE ename LIKE '%''%'"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "T04 C15: Foiz belgilari orasida ikkita bittalik tirnoq yozish orqali literal apostrof qidiriladi.",
    "task": "From the employee table (`emp`), ismida (`ename`) bittalik tirnoq (apostrof `'`) qatnashgan qatorlarni `LIKE` using qidiring."
  },
  {
    "id": 54,
    "sector": 4,
    "difficulty": "Floor 4 • Easy",
    "source": "T04 Task C4 (Query 2) • LOWER Funksiyasi",
    "title": "Kichik Harfdagi Lavozimlar (`LOWER`)",
    "story": "Nashriyot bo'limi barcha lavozim nomlarini kichik harflarga o'girib, takrorlarsiz chiqarib berishni so'radi.",
    "taskUz": "From the employee table (`emp`), takrorlanmas (`DISTINCT`) lavozim nomlarini (`job`) kichik harflarga o'giruvchi funksiya (`LOWER`) using chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `LOWER(job)`\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "`DISTINCT` dan so'ng matnni kichik harfga o'tkazuvchi funksiyani `job` ustuniga qo'llang.",
    "solutions": [
      "SELECT DISTINCT LOWER(job) FROM emp",
      "SELECT DISTINCT lower(job) AS \"Job title\" FROM emp ORDER BY \"Job title\" DESC"
    ],
    "requiredPatterns": [
      {},
      {}
    ],
    "explanation": "T04 C4: Lavozim nomlari kichik harflarga (`analyst`, `clerk`, `manager`, `president`, `salesman`) o'tkazildi.",
    "task": "From the employee table (`emp`), takrorlanmas (`DISTINCT`) lavozim nomlarini (`job`) kichik harflarga o'giruvchi funksiya (`LOWER`) using chiqaring."
  },
  {
    "id": 55,
    "sector": 4,
    "difficulty": "Floor 4 • Intermediate",
    "source": "T04 String Functions • LENGTH Funksiyasi",
    "title": "Olti Harfli Ismlar (`LENGTH`)",
    "story": "Beydjik (ruxsatnoma) tayyorlovchi bo'lim ismining uzunligi aynan 6 ta harfdan iborat bo'lgan xodimlarni aniqlamoqchi.",
    "taskUz": "From the employee table (`emp`), ismining (`ename`) belgilar soni (`LENGTH`) aynan `6` ga teng having xodimlarning `ename`, `job` and ism uzunligini chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `job`, `LENGTH(ename)`\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "Satr uzunligini hisoblovchi funksiyani ham `SELECT`, ham `WHERE` qismida ishlating.",
    "solutions": [
      "SELECT ename, job, LENGTH(ename) FROM emp WHERE LENGTH(ename) = 6",
      "SELECT * FROM emp WHERE LENGTH(ename) = 6"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "MARTIN, TURNER va MILLER ismlari aynan 6 ta harfdan iborat.",
    "task": "From the employee table (`emp`), ismining (`ename`) belgilar soni (`LENGTH`) aynan `6` ga teng having xodimlarning `ename`, `job` and ism uzunligini chiqaring."
  },
  {
    "id": 56,
    "sector": 4,
    "difficulty": "Floor 4 • Intermediate",
    "source": "T04 Task H10 • LENGTH va Oxirgi Harf",
    "title": "Uzunligi 4 dan Katta va H yoki T Bilan Tugaydiganlar (H10)",
    "story": "Arxiv topishmog'i: ismining uzunligi 4 ta harfdan ko'p bo'lgan hamda `H` yoki `T` harfi bilan tugaydigan xodimlar kimlar?",
    "taskUz": "From the employee table (`emp`), ismining (`ename`) uzunligi `4` dan katta having and ismi `'H'` yoki `'T'` harfi bilan tugaydigan xodimlarni toping.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "`LENGTH(ename) > 4` shartini `AND` orqali qavs ichidagi ikkita `LIKE` / `ILIKE` sharti bilan bog'lang.",
    "solutions": [
      "SELECT * FROM emp WHERE LENGTH(ename) > 4 AND (ename ILIKE '%H' OR ename ILIKE '%T')",
      "SELECT * FROM emp WHERE LENGTH(ename) > 4 AND (ename LIKE '%H' OR ename LIKE '%T')",
      "SELECT * FROM emp WHERE length(ename) > 4 AND (ename ILIKE '%H' OR ename ILIKE '%T') ORDER BY length(ename), ename"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {}
    ],
    "explanation": "T04 H10: SMITH va SCOTT ushbu ikki shartni birdek qanoatlantiradi.",
    "task": "From the employee table (`emp`), ismining (`ename`) uzunligi `4` dan katta having and ismi `'H'` yoki `'T'` harfi bilan tugaydigan xodimlarni toping."
  },
  {
    "id": 57,
    "sector": 4,
    "difficulty": "Floor 4 • Intermediate",
    "source": "T04 Task C13 (Query 2) • SUBSTRING Funksiyasi",
    "title": "Kesib Olish Yordamida 3-Harfni Tekshirish (`SUBSTRING`)",
    "story": "49-savolda 3-harfi `r` bo'lganlarni `ILIKE` bilan topgan edik. Endi T04 C13 ning 2-usuli bo'yicha `SUBSTRING` funksiyasi yordamida ismdan 3-harfdan boshlab 1 ta belgini kesib olib tekshiring!",
    "taskUz": "From the employee table (`emp`), `SUBSTRING` funksiyasi using ismining (`ename`) 3-pozitsiyasidan 1 ta harf kesib olinganda `'R'` (yoki kichik `'r'`) ga teng bo'ladigan xodimlarni toping.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "`SUBSTRING(ename FROM 3 FOR 1)` ifodasini `'R'` ga (yoki `LOWER` bilan `'r'` ga) tenglashtiring.",
    "solutions": [
      "SELECT * FROM emp WHERE LOWER(SUBSTRING(ename FROM 3 FOR 1)) = 'r'",
      "SELECT * FROM emp WHERE SUBSTRING(ename FROM 3 FOR 1) = 'R'",
      "SELECT emp.*, substring(ename FROM 3 FOR 1) AS \"Third letter\" FROM emp WHERE lower(substring(ename FROM 3 FOR 1)) = 'r' ORDER BY job, sal DESC"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "T04 C13 (2-so'rov): `SUBSTRING` matnning aniq pozitsiyasidan kerakli uzunlikdagi qismni ajratib oladi.",
    "task": "From the employee table (`emp`), `SUBSTRING` funksiyasi using ismining (`ename`) 3-pozitsiyasidan 1 ta harf kesib olinganda `'R'` (yoki kichik `'r'`) ga teng bo'ladigan xodimlarni toping."
  },
  {
    "id": 58,
    "sector": 4,
    "difficulty": "Floor 4 • Intermediate",
    "source": "T04 Task C19 • Matnlarni Birlashtirish (`||`)",
    "title": "20-Bo'lim Klerklari Tavsifi (T04 C19)",
    "story": "Kadrlar ma'lumotnomasi uchun 20-bo'limdagi klerklar haqida `'SMITH works as a clerk'` ko'rinishidagi jumlani hosil qilish kerak.",
    "taskUz": "From the employee table (`emp`), 20-bo'limda (`deptno = 20`) ishlovchi klerklar (`job = 'CLERK'`) uchun: katta harfdagi ismi (`UPPER`), `' works as a '` matni and kichik harfdagi lavozimini (`LOWER`) `||` operatori bilan birlashtirib chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `a`\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "`UPPER(ename)`, `' works as a '` va `LOWER(job)` qismlarini `||` operatori bilan ulang.",
    "solutions": [
      "SELECT UPPER(ename) || ' works as a ' || LOWER(job) FROM emp WHERE job = 'CLERK' AND deptno = 20",
      "SELECT upper(ename) || ' works as a ' || lower(job) AS \"Employee description\" FROM emp WHERE job = 'CLERK' AND deptno = 20 ORDER BY job, ename DESC"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {},
      {}
    ],
    "explanation": "T04 C19: Matn ulash operatori (`||`) va registr funksiyalari yordamida tayyor hisobot jumlasi yaratildi.",
    "task": "From the employee table (`emp`), 20-bo'limda (`deptno = 20`) ishlovchi klerklar (`job = 'CLERK'`) uchun: katta harfdagi ismi (`UPPER`), `' works as a '` matni and kichik harfdagi lavozimini (`LOWER`) `||` operatori bilan birlashtirib chiqaring."
  },
  {
    "id": 59,
    "sector": 4,
    "difficulty": "Floor 4 • Hard",
    "source": "T04 Task C20 • LEFT va SUBSTRING Bilan Ism Formatlash",
    "title": "Bosh Harfli Ism Standarti (T04 C20)",
    "story": "Bazadagi barcha ismlar katta harflarda (`KING`, `SMITH`) yozilgan. Rasmiy xatlar uchun ularni faqat birinchi harfi katta, qolgan harflari kichik (`King`, `Smith`) ko'rinishga keltirish lozim.",
    "taskUz": "From the employee table (`emp`), xodim ismining chapdan 1-harfini (`LEFT`) katta harfda (`UPPER`) and 2-harfdan boshlab qolgan qismini (`SUBSTRING`) kichik harfda (`LOWER`) `||` orqali birlashtirib chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `UPPER(LEFT(ename`, `LOWER(SUBSTRING(ename`\n• Asosiy jadvallar: `2`, `emp`",
    "starterCode": "",
    "hint": "Birinchi harf uchun `UPPER(LEFT(ename, 1))`, qolgan qismi uchun `LOWER(SUBSTRING(ename FROM 2))` ifodasini `||` bilan ulang.",
    "solutions": [
      "SELECT UPPER(LEFT(ename, 1)) || LOWER(SUBSTRING(ename FROM 2)) FROM emp",
      "SELECT upper(left(ename, 1)) || lower(substring(ename FROM 2)) AS \"Employee name\" FROM emp"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "T04 C20: Barcha 14 nafar xodimning ismi standart Title-Case ko'rinishiga keltirildi.",
    "task": "From the employee table (`emp`), xodim ismining chapdan 1-harfini (`LEFT`) katta harfda (`UPPER`) and 2-harfdan boshlab qolgan qismini (`SUBSTRING`) kichik harfda (`LOWER`) `||` orqali birlashtirib chiqaring."
  },
  {
    "id": 60,
    "sector": 4,
    "difficulty": "Floor 4 Yakuni • Master Architect",
    "source": "T04 Extra Task E5 • TRANSLATE va Unli Harflar Soni",
    "title": "4-Qavat Bossi: Unli Harflar Tahlilchisi (T04 E5)",
    "story": "4-qavatning yakuniy masalasi (T04 E5): Xodimning ismida nechta unli harf (`A, E, I, O, U`) borligini qanday hisoblaymiz? Ismning umumiy uzunligidan unli harflari `TRANSLATE` funksiyasi yordamida o'chirib tashlangan ism uzunligini ayiramiz!",
    "taskUz": "From the employee table (`emp`), `ename`, `job` and ism uzunligidan (`LENGTH`) unli harflari (`'AEIOU'`) bo'sh satrga (`''`) almashtirilgan (`TRANSLATE`) ism uzunligini ayirish natijasini `vowel_count` ustun nomi bilan chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `job`, `LENGTH(TRANSLATE(UPPER(ename)`, `AEIOU`, `vowel_count`\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "`LENGTH(ename)` dan `LENGTH(TRANSLATE(UPPER(ename), 'AEIOU', ''))` ni ayiring.",
    "solutions": [
      "SELECT ename, job, LENGTH(ename) - LENGTH(TRANSLATE(UPPER(ename), 'AEIOU', '')) AS vowel_count FROM emp",
      "SELECT ename, job, LENGTH(ename) - LENGTH(TRANSLATE(UPPER(ename), 'AEIOU', '')) FROM emp"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "4-Qavat yakunlandi! `TRANSLATE` belgilarni bittalab o'chiradi va uzunliklar ayirmasi unli harflar sonini aniq beradi!",
    "task": "From the employee table (`emp`), `ename`, `job` and ism uzunligidan (`LENGTH`) unli harflari (`'AEIOU'`) bo'sh satrga (`''`) almashtirilgan (`TRANSLATE`) ism uzunligini ayirish natijasini `vowel_count` ustun nomi bilan chiqaring."
  },
  {
    "id": 61,
    "sector": 5,
    "difficulty": "Floor 5 • Easy",
    "source": "T04 Task C17 • ROUND Yaxlitlash",
    "title": "Maoshni 15.3% Oshirish va Yaxlitlash (T04 C17)",
    "story": "5-qavat — Moliya va Vaqt boshqarmasi. Maoshlar 15.3 foizga (`1.153` ga ko'paytirish orqali) oshirilگanda kasr qismi tiyinlargacha (2 xona aniqlikda) yaxlitlanishi shart.",
    "taskUz": "From the employee table (`emp`), `ename`, `sal` and maoshning `1.153` ga ko'paytmasini 2 ta kasr xonasigacha yaxlitlab (`ROUND`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `sal`, `153`, `proposed_sal`\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "`ROUND` funksiyasining birinchi argumentiga ko'paytmani, ikkinchi argumentiga `2` sonini bering.",
    "solutions": [
      "SELECT ename, sal, ROUND(sal * 1.153, 2) AS proposed_sal FROM emp",
      "SELECT ename, sal, round(sal * 1.153, 2)::numeric(9,2) AS \"Increased salary\" FROM emp",
      "SELECT ename, sal, ROUND(sal * 1.153, 2) FROM emp"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {}
    ],
    "explanation": "T04 C17: Barcha yangi maoshlar 2 xona aniqlikda yaxlitlandi.",
    "task": "From the employee table (`emp`), `ename`, `sal` and maoshning `1.153` ga ko'paytmasini 2 ta kasr xonasigacha yaxlitlab (`ROUND`) chiqaring."
  },
  {
    "id": 62,
    "sector": 5,
    "difficulty": "Floor 5 • Easy",
    "source": "T04 Math Functions • MOD Qoldiq",
    "title": "250 Dollarga Karrali Maoshlar (`MOD`)",
    "story": "G'aznachilik faqat 250 dollarlik banknotalarda qoldiqsiz to'lanadigan maoshlarni (ya'ni 250 ga bo'lganda qoldig'i 0 chiqadiganlarni) tekshirmoqda.",
    "taskUz": "From the employee table (`emp`), maoshi (`sal`) `250` ga qoldiqsiz bo'linadigan (`MOD` funksiyasi 0 qaytaradigan) xodimlarning `ename`, `job` and `sal` columns chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `job`, `sal`\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "`WHERE` bandida `MOD(sal, 250)` ifodasini `0` ga tenglashtiring.",
    "solutions": [
      "SELECT ename, job, sal FROM emp WHERE MOD(sal, 250) = 0",
      "SELECT * FROM emp WHERE MOD(sal, 250) = 0"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "KING (5000), FORD (3000), SCOTT (3000), TURNER (1500), MARTIN (1250) va WARD (1250) maoshlari 250 ga karrali.",
    "task": "From the employee table (`emp`), maoshi (`sal`) `250` ga qoldiqsiz bo'linadigan (`MOD` funksiyasi 0 qaytaradigan) xodimlarning `ename`, `job` and `sal` columns chiqaring."
  },
  {
    "id": 63,
    "sector": 5,
    "difficulty": "Floor 5 • Intermediate",
    "source": "T04 Extra Task E9 • ABS va MOD",
    "title": "Etalon Maoshdan Masofa (`ABS` va `MOD` — T04 E9)",
    "story": "T04 E9 topshirig'i: Kompaniya 2000 dollarni etalon maosh deb belgiladi. Maoshi 2000 dan uzoqligi (absolyut farqi) 1000 dan oshmaydigan VA 250 ga qoldiqsiz bo'linadigan xodimlarni toping.",
    "taskUz": "From the employee table (`emp`), maoshining `2000` dan absolyut farqi (`ABS`) `1000` dan kichik yoki teng having and maoshi `250` ga qoldiqsiz bo'linadigan (`MOD`) xodimlarning `ename`, `sal` and absolyut farqini chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `sal`, `benchmark_distance`\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "`ABS(sal - 2000) <= 1000` hamda `MOD(sal, 250) = 0` shartlarini `AND` bilan birlashtiring.",
    "solutions": [
      "SELECT ename, sal, ABS(sal - 2000) AS benchmark_distance FROM emp WHERE ABS(sal - 2000) <= 1000 AND MOD(sal, 250) = 0",
      "SELECT ename, sal, abs(sal - 2000) AS benchmark_distance FROM emp WHERE abs(sal - 2000) <= 1000 AND mod(sal, 250) = 0 ORDER BY benchmark_distance, sal DESC, ename"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {}
    ],
    "explanation": "T04 E9: `ABS` manfiy farqni ham musbat masofaga aylantiradi (TURNER, MARTIN, WARD, FORD, SCOTT).",
    "task": "From the employee table (`emp`), maoshining `2000` dan absolyut farqi (`ABS`) `1000` dan kichik yoki teng having and maoshi `250` ga qoldiqsiz bo'linadigan (`MOD`) xodimlarning `ename`, `sal` and absolyut farqini chiqaring."
  },
  {
    "id": 64,
    "sector": 5,
    "difficulty": "Floor 5 • Intermediate",
    "source": "T04 Extra Task E7 • Komissiya Foizi Auditi",
    "title": "Komissiyaning Maoshga Nisbatan Foizi (T04 E7)",
    "story": "T04 E7: Faqat maoshi va komissiyasi 0 dan katta bo'lgan hamda komissiyasining maoshga nisbatan foizi (100 ko'paytirilgan komissiyani nolga bo'lishdan himoyalangan maoshga bo'lganda) 10% va 100% oralig'ida bo'lgan xodimlarni aniqlang.",
    "taskUz": "From the employee table (`emp`), maoshi and komissiyasi 0 dan katta having and komissiyaning maoshga nisbatan foizi (`100` and `comm` ko'paytmasini nolga bo'lishdan himoyalangan `sal` ga bo'linmasi) `10` bilan `100` oralig'ida having xodimlarning `ename`, `sal`, `comm` and 2 xonagacha yaxlitlangan foizini chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `sal`, `comm`, `NULLIF(sal`, `0)`, `commission_pct`\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "`ROUND(100 * comm / NULLIF(sal, 0), 2)` ifodasini `SELECT` da, `100 * comm / NULLIF(sal, 0) BETWEEN 10 AND 100` shartini esa `WHERE` da yozing.",
    "solutions": [
      "SELECT ename, sal, comm, ROUND(100 * comm / NULLIF(sal, 0), 2) AS commission_pct FROM emp WHERE sal > 0 AND comm > 0 AND 100 * comm / NULLIF(sal, 0) BETWEEN 10 AND 100",
      "SELECT ename, sal, comm, round(100 * comm / nullif(sal, 0), 2) AS commission_pct FROM emp WHERE sal > 0 AND comm > 0 AND 100 * comm / nullif(sal, 0) BETWEEN 10 AND 100 ORDER BY 100 * comm / nullif(sal, 0) DESC, ename"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "T04 E7: MARTINning komissiyasi (1400) maoshidan (1250) katta (112%) bo'lgani uchun chiqarib tashlanadi; faqat WARD (40%) va ALLEN (18.75%) qoladi!",
    "task": "From the employee table (`emp`), maoshi and komissiyasi 0 dan katta having and komissiyaning maoshga nisbatan foizi (`100` and `comm` ko'paytmasini nolga bo'lishdan himoyalangan `sal` ga bo'linmasi) `10` bilan `100` oralig'ida having xodimlarning `ename`, `sal`, `comm` and 2 xonagacha yaxlitlangan foizini chiqaring."
  },
  {
    "id": 65,
    "sector": 5,
    "difficulty": "Floor 5 • Hard",
    "source": "T04 Extra Task E8 • LEAST va GREATEST Chegaralari",
    "title": "Chegaralangan Byudjet Ustamasi (T04 E8)",
    "story": "T04 E8: Xodimlarga maoshining 8.5% miqdorida (`0.085` ga ko'paytirib) ustama beriladi, biroq ustama kamida 100 dollar va ko'pi bilan 250 dollar bo'lishi shart!",
    "taskUz": "From the employee table (`emp`), `ename`, `sal` and eng kichik and eng katta qiymatni tanlovchi funksiyalar using `[100, 250]` oralig'ida chegaralangan `8.5%` lik (`sal * 0.085`) ustama miqdorini chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `sal`, `085`, `100)`, `bonus`\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "Ichkarida `GREATEST(sal * 0.085, 100)` orqali quyi chegarani, tashqarida `LEAST(..., 250)` orqali yuqori chegarani belgilang.",
    "solutions": [
      "SELECT ename, sal, LEAST(GREATEST(sal * 0.085, 100), 250) AS bonus FROM emp",
      "SELECT ename, sal, ROUND(LEAST(GREATEST(sal * 0.085, 100), 250), 2) AS bonus FROM emp"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "T04 E8: `GREATEST` va `LEAST` funksiyalari kombinatsiyasi har qanday sonni `[min, max]` koridori ichida ushlab turadi.",
    "task": "From the employee table (`emp`), `ename`, `sal` and eng kichik and eng katta qiymatni tanlovchi funksiyalar using `[100, 250]` oralig'ida chegaralangan `8.5%` lik (`sal * 0.085`) ustama miqdorini chiqaring."
  },
  {
    "id": 66,
    "sector": 5,
    "difficulty": "Floor 5 • Easy",
    "source": "T04 Task C7 & H4 • DATE Literal Solishtirish",
    "title": "2010-Yildan Oldingi Faxriylar (T04 C7)",
    "story": "Kadrlar bo'limi 2010-yil 1-yanvargacha (`'2010-01-01'`) ishga qabul qilingan faxriy xodimlarning ro'yxatini tuzmoqda.",
    "taskUz": "From the employee table (`emp`), ishga kirgan sanasi (`hiredate`) `'2010-01-01'` sanasidan kichik (oldin) having xodimlarning `ename` and `hiredate` columns chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `hiredate`\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "`WHERE` bandida `hiredate` ustunini `DATE '2010-01-01'` bilan solishtiring.",
    "solutions": [
      "SELECT ename, hiredate FROM emp WHERE hiredate < DATE '2010-01-01'",
      "SELECT ename, hiredate FROM emp WHERE hiredate < DATE '2010-01-01' ORDER BY job DESC, ename",
      "SELECT ename, hiredate FROM emp WHERE hiredate < '2010-01-01'"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {},
      {}
    ],
    "explanation": "T04 C7: 2010-yilgacha ishga kirgan 11 nafar xodim aniqlandi.",
    "task": "From the employee table (`emp`), ishga kirgan sanasi (`hiredate`) `'2010-01-01'` sanasidan kichik (oldin) having xodimlarning `ename` and `hiredate` columns chiqaring."
  },
  {
    "id": 67,
    "sector": 5,
    "difficulty": "Floor 5 • Easy",
    "source": "T04 Task C8 • Sana Oralig'i (BETWEEN DATE)",
    "title": "2010-Yil Bahorgi Qabul (T04 C8)",
    "story": "Arxivdan `'2010-01-01'` va `'2010-05-25'` sanalari oralig'ida ishga kirgan xodimni topish kerak.",
    "taskUz": "From the employee table (`emp`), `hiredate` ustuni `'2010-01-01'` and `'2010-05-25'` sanalari oralig'ida having xodimlarni diapazon operatori using toping.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "`hiredate BETWEEN DATE '2010-01-01' AND DATE '2010-05-25'` shartini yozing.",
    "solutions": [
      "SELECT * FROM emp WHERE hiredate BETWEEN DATE '2010-01-01' AND DATE '2010-05-25'",
      "SELECT emp.*, to_char(hiredate, 'Day') AS \"Hire weekday\" FROM emp WHERE hiredate BETWEEN DATE '2010-01-01' AND DATE '2010-05-25' ORDER BY hiredate DESC"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "T04 C8: Ushbu sanalar oralig'ida faqat BLAKE (`2010-05-01`) ishga qabul qilingan.",
    "task": "From the employee table (`emp`), `hiredate` ustuni `'2010-01-01'` and `'2010-05-25'` sanalari oralig'ida having xodimlarni diapazon operatori using toping."
  },
  {
    "id": 68,
    "sector": 5,
    "difficulty": "Floor 5 • Easy",
    "source": "T04 Task C9 • EXTRACT(MONTH FROM hiredate)",
    "title": "Dekabr Oyida Ishga Kirganlar (T04 C9)",
    "story": "Kadrlar bo'limi faqat Dekabr oyida (`12`-oy) ishga qabul qilingan xodimlarni ajratib olmoqchi.",
    "taskUz": "From the employee table (`emp`), sanadan qism ajratib oluvchi funksiya using `hiredate` ustunidagi oy raqami `12` ga teng having xodimlarni toping.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "`WHERE` bandida `EXTRACT(MONTH FROM hiredate)` ifodasini `12` ga tenglashtiring.",
    "solutions": [
      "SELECT * FROM emp WHERE EXTRACT(MONTH FROM hiredate) = 12",
      "SELECT ename, hiredate, EXTRACT(MONTH FROM hiredate) FROM emp WHERE EXTRACT(MONTH FROM hiredate) = 12"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "T04 C9: JAMES, FORD, SMITH va SCOTT dekabr oyida ishga kirgan.",
    "task": "From the employee table (`emp`), sanadan qism ajratib oluvchi funksiya using `hiredate` ustunidagi oy raqami `12` ga teng having xodimlarni toping."
  },
  {
    "id": 69,
    "sector": 5,
    "difficulty": "Floor 5 • Intermediate",
    "source": "T04 Task H5 • Bir Nechta Oylarni Filtrlash",
    "title": "Aprel, May va Dekabr Qabullari (T04 H5)",
    "story": "Statistika bo'limiga faqat 4-oy (Aprel), 5-oy (May) yoki 12-oy (Dekabr) da ishga kirgan xodimlar ro'yxati kerak.",
    "taskUz": "From the employee table (`emp`), `hiredate` sanasidan ajratib olingan oy raqami `4`, `5` yoki `12` having xodimlarni ro'yxat operatori using chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "`EXTRACT(MONTH FROM hiredate)` ifodasidan so'ng `IN (4, 5, 12)` yozing.",
    "solutions": [
      "SELECT * FROM emp WHERE EXTRACT(MONTH FROM hiredate) IN (4, 5, 12)",
      "SELECT * FROM emp WHERE extract(month FROM hiredate) IN (4, 5, 12) ORDER BY deptno, hiredate"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "T04 H5: JONES (Aprel), BLAKE (May) va 4 nafar dekabrda kirgan xodimlar (jami 6 kishi) topildi.",
    "task": "From the employee table (`emp`), `hiredate` sanasidan ajratib olingan oy raqami `4`, `5` yoki `12` having xodimlarni ro'yxat operatori using chiqaring."
  },
  {
    "id": 70,
    "sector": 5,
    "difficulty": "Floor 5 • Intermediate",
    "source": "T04 Task C16 • ISODOW Hafta Kuni",
    "title": "Yakshanba Kuni Rasmiylashtirilgan Shartnomalar",
    "story": "ISO standarti bo'yicha (`ISODOW`) Dushanba — 1, Yakshanba esa — 7 hisoblanadi. Dam olish kuni (Yakshanba, `7`) rasmiylashtirilgan xodimlarni aniqlang.",
    "taskUz": "From the employee table (`emp`), `hiredate` sanasidan ISO standarti bo'yicha hafta kuni (`ISODOW`) ajratib olinganda `7` ga teng having xodimlarni toping.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "`EXTRACT(ISODOW FROM hiredate) = 7` shartidan foydalaning.",
    "solutions": [
      "SELECT * FROM emp WHERE EXTRACT(ISODOW FROM hiredate) = 7",
      "SELECT ename, job, hiredate FROM emp WHERE EXTRACT(ISODOW FROM hiredate) = 7"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "JONES, FORD, SCOTT va MILLERning shartnomalari kalendar bo'yicha Yakshanba kuniga to'g'ri kelgan.",
    "task": "From the employee table (`emp`), `hiredate` sanasidan ISO standarti bo'yicha hafta kuni (`ISODOW`) ajratib olinganda `7` ga teng having xodimlarni toping."
  },
  {
    "id": 71,
    "sector": 5,
    "difficulty": "Floor 5 • Intermediate",
    "source": "T04 Task C10 • INTERVAL '10 years'",
    "title": "O'n Yillik Xizmat Sanasi",
    "story": "Kadrlar bo'limi har bir xodimning ishga kirgan sanasiga 10 yil qo'shilganda qaysi sana hosil bo'lishini hisoblamoqda.",
    "taskUz": "From the employee table (`emp`), `ename`, `hiredate` and `hiredate` sanasiga 10 yillik andqt interandli qo'shilgan ustunni chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `hiredate`, `years`\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "`hiredate` ustuniga `+ INTERVAL '10 years'` ifodasini qo'shing.",
    "solutions": [
      "SELECT ename, hiredate, hiredate + INTERVAL '10 years' FROM emp",
      "SELECT ename, hiredate, hiredate + INTERVAL '10 years' AS ten_years FROM emp"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {}
    ],
    "explanation": "T04 C10: `INTERVAL '10 years'` sanani kalendar bo'yicha roppa-rosa 10 yil oldinga suradi.",
    "task": "From the employee table (`emp`), `ename`, `hiredate` and `hiredate` sanasiga 10 yillik andqt interandli qo'shilgan ustunni chiqaring."
  },
  {
    "id": 72,
    "sector": 5,
    "difficulty": "Floor 5 • Intermediate",
    "source": "T04 Task H11 • TO_CHAR va Fill Mode ('FM')",
    "title": "Bo'sh Probellarsiz Oy va Hafta Kuni Nomlari",
    "story": "Sanani matnga o'girishda standart oy va kun qoliplari satr oxiriga bo'sh probellar qo'shib yuboradi. Probellarsiz toza oy va hafta kuni nomini olish uchun `FM` (Fill Mode) prefiksidan foydalaning!",
    "taskUz": "From the employee table (`emp`), sotuvchilar (`'SALESMAN'`) uchun `ename`, probellarsiz oy nomi (`'FMMonth'`) and probellarsiz hafta kuni nomini (`'FMDay'`) sanani matnga formatlash funksiyasi using chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `TO_CHAR(hiredate`, `FMMonth)`, `TO_CHAR(hiredate`, `FMDay)`\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "`TO_CHAR` funksiyasida format sifatida `'FMMonth'` va `'FMDay'` satrlarini ishlating.",
    "solutions": [
      "SELECT ename, TO_CHAR(hiredate, 'FMMonth'), TO_CHAR(hiredate, 'FMDay') FROM emp WHERE job = 'SALESMAN'",
      "SELECT ename, TO_CHAR(hiredate, 'FMMonth') AS hire_month, TO_CHAR(hiredate, 'FMDay') AS hire_day FROM emp WHERE job = 'SALESMAN'"
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
        "message": "⚠️ Formatda `FM` (Fill Mode) prefiksini unutdingiz! Bo'sh probellarni olib tashlash uchun `'FMMonth'` va `'FMDay'` deb yozing."
      }
    ],
    "explanation": "T04 H11: `FM` rejimi formatlangan oy va kun nomlaridagi ortiqcha probellarni tozalaydi.",
    "task": "From the employee table (`emp`), sotuvchilar (`'SALESMAN'`) uchun `ename`, probellarsiz oy nomi (`'FMMonth'`) and probellarsiz hafta kuni nomini (`'FMDay'`) sanani matnga formatlash funksiyasi using chiqaring."
  },
  {
    "id": 73,
    "sector": 5,
    "difficulty": "Floor 5 • Hard",
    "source": "T04 Task C11 • AGE Funksiyasi Bilan To'liq Staj",
    "title": "2006-Yilgi Xodimning To'liq Ish Staji",
    "story": "T04 C11: Xodim joriy sanagacha (`CURRENT_DATE`) necha TO'LIQ yil ishlaganini hisoblash uchun yosh/davr farqi funksiyasidan yil qismi ajratib olinadi.",
    "taskUz": "From the employee table (`emp`), `hiredate` yili `2006` ga teng having xodimning `ename`, `hiredate` and `CURRENT_DATE` and `hiredate` orasidagi davrdan (`AGE`) ajratib olingan to'liq yillar sonini chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `hiredate`, `EXTRACT(YEAR`\n• Asosiy jadvallar: `age`, `emp`",
    "starterCode": "",
    "hint": "`SELECT` da `EXTRACT(YEAR FROM AGE(CURRENT_DATE, hiredate))` va `WHERE` da `EXTRACT(YEAR FROM hiredate) = 2006` yozing.",
    "solutions": [
      "SELECT ename, hiredate, EXTRACT(YEAR FROM AGE(CURRENT_DATE, hiredate)) FROM emp WHERE EXTRACT(YEAR FROM hiredate) = 2006",
      "SELECT ename, deptno, hiredate, extract(year FROM age(CURRENT_DATE, hiredate))::integer AS \"Years worked\" FROM emp WHERE extract(year FROM hiredate) = 2006 ORDER BY \"Years worked\" DESC"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {}
    ],
    "explanation": "T04 C11: `AGE` funksiyasi kalendar yillar ayirmasini emas, balki haqiqiy to'liq o'tgan yillarni hisoblaydi.",
    "task": "From the employee table (`emp`), `hiredate` yili `2006` ga teng having xodimning `ename`, `hiredate` and `CURRENT_DATE` and `hiredate` orasidagi davrdan (`AGE`) ajratib olingan to'liq yillar sonini chiqaring."
  },
  {
    "id": 74,
    "sector": 5,
    "difficulty": "Floor 5 • Hard",
    "source": "T04 Task C23 • Sanalar Ayirmasi (Kunlar Soni)",
    "title": "Belgilangan Sanagacha O'tgan Kunlar (T04 C23)",
    "story": "T04 C23: Sentabr (`9`) yoki Dekabr (`12`) oyida ishga kirgan klerk va sotuvchilarning ishga kirgan sanasidan `'2015-11-30'` sanasigacha necha kun o'tganini hisoblang.",
    "taskUz": "From the employee table (`emp`), lavozimi `'SALESMAN'` yoki `'CLERK'` having and ishga kirgan oyi `9` yoki `12` having xodimlar uchun `ename`, `job`, `hiredate` and `'2015-11-30'` sanasidan `hiredate` sanasini ayirish natijasini (kunlar farqini) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `job`, `hiredate`, `hiredate`\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "Sanalar farqi uchun `DATE '2015-11-30' - hiredate` ifodasini yozing, `WHERE` da esa `job IN ('SALESMAN', 'CLERK')` va `EXTRACT(MONTH FROM hiredate) IN (9, 12)` ishlating.",
    "solutions": [
      "SELECT ename, job, hiredate, DATE '2015-11-30' - hiredate FROM emp WHERE job IN ('SALESMAN', 'CLERK') AND EXTRACT(MONTH FROM hiredate) IN (9, 12)",
      "SELECT ename, job, hiredate, DATE '2015-11-30' - hiredate AS days_elapsed FROM emp WHERE job IN ('SALESMAN', 'CLERK') AND EXTRACT(MONTH FROM hiredate) IN (9, 12)"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {}
    ],
    "explanation": "T04 C23: PostgreSQL da ikkita `DATE` qiymatini ayirish ular orasidagi aniq kunlar sonini (`integer`) qaytaradi.",
    "task": "From the employee table (`emp`), lavozimi `'SALESMAN'` yoki `'CLERK'` having and ishga kirgan oyi `9` yoki `12` having xodimlar uchun `ename`, `job`, `hiredate` and `'2015-11-30'` sanasidan `hiredate` sanasini ayirish natijasini (kunlar farqini) chiqaring."
  },
  {
    "id": 75,
    "sector": 5,
    "difficulty": "Floor 5 Yakuni • Master Architect",
    "source": "T04 Extra Task E3 • 25 Yillik Yubiley Taqvim Bossi",
    "title": "5-Qavat Bossi: Chorak Asrlik Yubiley (T04 E3)",
    "story": "5-qavat Boss sinovi (T04 E3): Kimlarning 25 yillik xizmat yubileyi (`hiredate` ga 25 yil qo'shilgandagi sana) `'2026-09-19'` sanasidan boshlab keyingi 90 kun ichida nishonlanadi?",
    "taskUz": "From the employee table (`emp`), ishga kirgan sanasiga 25 yillik interandl qo'shib sanaga (`date`) o'girilgan yubiley sanasi `'2026-09-19'` sanasi and unga 90 kunlik interandl qo'shilgan sana oralig'iga tushadigan xodimlarning `ename` and yubiley sanasini chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `anniversary`\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "`(hiredate + INTERVAL '25 years')::date` ifodasini ham `SELECT` da, ham `WHERE ... BETWEEN ...` ichida ishlating (`WHERE` da ustun aliasini ishlatib bo'lmasligini unutmang!).",
    "solutions": [
      "SELECT ename, (hiredate + INTERVAL '25 years')::date AS anniversary FROM emp WHERE (hiredate + INTERVAL '25 years')::date BETWEEN DATE '2026-09-19' AND DATE '2026-09-19' + INTERVAL '90 days'",
      "SELECT ename, (hiredate + INTERVAL '25 years')::date FROM emp WHERE (hiredate + INTERVAL '25 years')::date BETWEEN DATE '2026-09-19' AND DATE '2026-09-19' + INTERVAL '90 days'"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "5-Qavat yakunlandi! Prezident KING va tahlilchi SCOTTning 25 yillik yubileyi ushbu 90 kunlik oynaga to'g'ri keladi!",
    "task": "From the employee table (`emp`), ishga kirgan sanasiga 25 yillik interandl qo'shib sanaga (`date`) o'girilgan yubiley sanasi `'2026-09-19'` sanasi and unga 90 kunlik interandl qo'shilgan sana oralig'iga tushadigan xodimlarning `ename` and yubiley sanasini chiqaring."
  },
  {
    "id": 76,
    "sector": 6,
    "difficulty": "Floor 6 • Easy",
    "source": "L04 Slide 34 • ORDER BY ASC",
    "title": "Maosh O'sish Tartibi",
    "story": "6-qavat — Reyting va Navbat kengashi. Kengash a'zolari barcha xodimlarni maoshi eng kamidan eng ko'piga qarab tartiblangan holda ko'rmoqchi.",
    "taskUz": "From the employee table (`emp`), `ename`, `job` and `sal` columns maosh (`sal`) in ascending order sorted by chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `job`, `sal`\n• Asosiy jadvallar: `emp`\n• Saralash (ORDER BY): `sal`",
    "starterCode": "",
    "hint": "So'rov oxirida saralash bandini (`ORDER BY`) va `sal` ustunini yozing.",
    "solutions": [
      "SELECT ename, job, sal FROM emp ORDER BY sal",
      "SELECT ename, job, sal FROM emp ORDER BY sal ASC",
      "SELECT * FROM emp ORDER BY sal"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "Xodimlar 800 dollar oluvchi SMITHdan 5000 dollar oluvchi KINGgacha o'sish tartibida tizildi.",
    "task": "From the employee table (`emp`), `ename`, `job` and `sal` columns maosh (`sal`) in ascending order sorted by chiqaring."
  },
  {
    "id": 77,
    "sector": 6,
    "difficulty": "Floor 6 • Easy",
    "source": "L04 Slide 34 • ORDER BY DESC",
    "title": "Eng Yuqori Maoshlilar Reytingi",
    "story": "Endi aksincha: ro'yxat boshida eng katta maosh oluvchilar turishi uchun kamayish tartibida saralang.",
    "taskUz": "From the employee table (`emp`), `ename`, `job` and `sal` columns maosh (`sal`) in descending order sorted by chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `job`, `sal`\n• Asosiy jadvallar: `emp`\n• Saralash (ORDER BY): `sal DESC`",
    "starterCode": "",
    "hint": "`ORDER BY sal` dan so'ng kamayish tartibini bildiruvchi `DESC` kalit so'zini qo'shing.",
    "solutions": [
      "SELECT ename, job, sal FROM emp ORDER BY sal DESC",
      "SELECT * FROM emp ORDER BY sal DESC"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "Kamayish tartibida (`DESC`) Prezident KING ro'yxatning 1-qatoriga chiqdi.",
    "task": "From the employee table (`emp`), `ename`, `job` and `sal` columns maosh (`sal`) in descending order sorted by chiqaring."
  },
  {
    "id": 78,
    "sector": 6,
    "difficulty": "Floor 6 • Easy",
    "source": "T04 Task C1 • Uch Ustun Bo'yicha Saralash",
    "title": "Bo'lim, Lavozim va Ism Tartibi (T04 C1)",
    "story": "Rasmiy telefon ma'lumotnomasi uchun xodimlarni avval bo'lim raqami, bo'lim ichida lavozimi, va lavozimi ham bir xil bo'lsa ismi bo'yicha alifbo tartibida saralash kerak.",
    "taskUz": "Xodimlar jadandlidagi (`emp`) barcha ma'lumotlarni `deptno`, `job` and `ename` ustunlari bo'yicha in ascending order saralang.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadvallar: `emp`\n• Saralash (ORDER BY): `deptno, job, ename`",
    "starterCode": "",
    "hint": "`ORDER BY` dan keyin uchta ustun nomini vergul bilan ajratib yozing.",
    "solutions": [
      "SELECT * FROM emp ORDER BY deptno, job, ename",
      "SELECT * FROM emp ORDER BY deptno ASC, job ASC, ename ASC"
    ],
    "requiredPatterns": [
      {},
      {}
    ],
    "explanation": "T04 C1: Ko'p bosqichli saralashda har bir keyingi ustun oldingi ustun qiymatlari teng bo'lgandagina tartibni hal qiladi.",
    "task": "Xodimlar jadandlidagi (`emp`) barcha ma'lumotlarni `deptno`, `job` and `ename` ustunlari bo'yicha in ascending order saralang."
  },
  {
    "id": 79,
    "sector": 6,
    "difficulty": "Floor 6 • Intermediate",
    "source": "L04 Slide 35 & T04 C6 • Aralash ASC va DESC",
    "title": "Bo'lim O'sish, Maosh Kamayish Tartibida (T04 C6)",
    "story": "10 va 20-bo'lim xodimlarini bo'lim raqami o'sish tartibida, ammo har bir bo'lim ichida maoshi kamayish tartibida ko'rsating.",
    "taskUz": "From the employee table (`emp`), `10` and `20`-bo'lim xodimlarini ro'yxat operatori bilan ajratib, `deptno` o'sish and `sal` in descending order chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadvallar: `emp`\n• Saralash (ORDER BY): `deptno, sal DESC`",
    "starterCode": "",
    "hint": "`ORDER BY` qismida `deptno` va `sal DESC` ni vergul bilan yozing.",
    "solutions": [
      "SELECT * FROM emp WHERE deptno IN (10, 20) ORDER BY deptno, sal DESC",
      "SELECT * FROM emp WHERE deptno IN (10, 20) ORDER BY deptno ASC, sal DESC"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {}
    ],
    "explanation": "10-bo'lim xodimlari yuqorida (KING -> CLARK -> MILLER), 20-bo'lim esa ulardan keyin maosh kamayish tartibida joylashdi.",
    "task": "From the employee table (`emp`), `10` and `20`-bo'lim xodimlarini ro'yxat operatori bilan ajratib, `deptno` o'sish and `sal` in descending order chiqaring."
  },
  {
    "id": 80,
    "sector": 6,
    "difficulty": "Floor 6 • Intermediate",
    "source": "L04 Slide 97 & T04 Intro • ORDER BY da Ustun Aliasini Ishlatish",
    "title": "10% Oshirilgan Maosh: Filtrlash va Saralash Qoidasi",
    "story": "Mantiqiy bajarilish tartibini eslang: filtrlash bandi `SELECT` dan oldin bajarilgani uchun unda ustun taxallusini (alias) ishlatib bo'lmaydi, saralash bandi esa `SELECT` dan keyin bajarilgani uchun taxallusni taniydi!",
    "taskUz": "From the employee table (`emp`), `ename` and 2 kasr xonasigacha yaxlitlangan 10% oshirilgan maoshni (`sal * 1.10`) `proposed_salary` ustun nomi bilan tanlang; filtrlash qismida shu oshirilgan maoshi `3000` dan kam bo'lmaganlarni ajrating and saralash qismida `proposed_salary` taxallusi bo'yicha in descending order chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `10`, `proposed_salary`\n• Asosiy jadvallar: `emp`\n• Saralash (ORDER BY): `proposed_salary DESC, ename`",
    "starterCode": "",
    "hint": "Ifodani `WHERE` ichida qayta yozing (`>= 3000`), `ORDER BY` da esa `proposed_salary DESC` aliasini ishlating.",
    "strictAlias": true,
    "solutions": [
      "SELECT ename, ROUND(sal * 1.10, 2) AS proposed_salary FROM emp WHERE ROUND(sal * 1.10, 2) >= 3000 ORDER BY proposed_salary DESC, ename",
      "SELECT ename, ROUND(sal * 1.10, 2) AS proposed_salary FROM emp WHERE ROUND(sal * 1.10, 2) >= 3000 ORDER BY proposed_salary DESC"
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
        "message": "⚠️ Diqqat: `WHERE` bajarilayotgan paytda `SELECT` dagi `proposed_salary` aliasi hali yaratilmagan bo'ladi! `WHERE` ichida hisoblash ifodasining o'zini yozing."
      }
    ],
    "explanation": "Besh nafar xodim (KING, FORD, SCOTT, JONES, BLAKE) 10% oshishdan so'ng 3000 dollarlik chegaradan o'tdi.",
    "task": "From the employee table (`emp`), `ename` and 2 kasr xonasigacha yaxlitlangan 10% oshirilgan maoshni (`sal * 1.10`) `proposed_salary` ustun nomi bilan tanlang; filtrlash qismida shu oshirilgan maoshi `3000` dan kam bo'lmaganlarni ajrating and saralash qismida `proposed_salary` taxallusi bo'yicha in descending order chiqaring."
  },
  {
    "id": 81,
    "sector": 6,
    "difficulty": "Floor 6 • Intermediate",
    "source": "T04 Task H13 • Maosh O'sishi Farqi Bo'yicha Filtr va Saralash",
    "title": "12.5% Maosh Oshishi Auditi (T04 H13)",
    "story": "T04 H13: Maosh 12.5% (`1.125` ga ko'paytirib, 2 xonagacha yaxlitlab) oshirilganda yangi maoshi 1500 dan kichik bo'lib qoladigan, ammo o'sish miqdori (yangi maosh minus eski maosh) kamida 150 dollar bo'lgan xodimlarni toping.",
    "taskUz": "From the employee table (`emp`), `ename`, `sal`, 2 xonagacha yaxlitlangan `12.5%` oshirilgan maoshni (`proposed_sal` nomi bilan) and yangi maoshdan eski maosh ayirmasini (`increase` nomi bilan) tanlang; yangi maoshi `1500` dan kichik and o'sish miqdori kamida `150` havinglarni `increase` in descending order chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `sal`, `125`, `proposed_sal`, `125`, `increase`\n• Asosiy jadvallar: `emp`\n• Saralash (ORDER BY): `increase DESC, ename`",
    "starterCode": "",
    "hint": "`WHERE` da ikkala shartni ifoda ko'rinishida yozing, `ORDER BY` da esa `increase DESC` aliasidan foydalaning.",
    "solutions": [
      "SELECT ename, sal, ROUND(sal * 1.125, 2) AS proposed_sal, ROUND(sal * 1.125, 2) - sal AS increase FROM emp WHERE ROUND(sal * 1.125, 2) < 1500 AND ROUND(sal * 1.125, 2) - sal >= 150 ORDER BY increase DESC, ename",
      "SELECT ename, sal, ROUND(sal * 1.125, 2) AS proposed_sal, ROUND(sal * 1.125, 2) - sal AS increase FROM emp WHERE ROUND(sal * 1.125, 2) < 1500 AND ROUND(sal * 1.125, 2) - sal >= 150 ORDER BY increase DESC"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {},
      {}
    ],
    "explanation": "T04 H13: MILLER (+162.50), MARTIN (+156.25) va WARD (+156.25) aynan shu byudjet mezoniga mos tushadi.",
    "task": "From the employee table (`emp`), `ename`, `sal`, 2 xonagacha yaxlitlangan `12.5%` oshirilgan maoshni (`proposed_sal` nomi bilan) and yangi maoshdan eski maosh ayirmasini (`increase` nomi bilan) tanlang; yangi maoshi `1500` dan kichik and o'sish miqdori kamida `150` havinglarni `increase` in descending order chiqaring."
  },
  {
    "id": 82,
    "sector": 6,
    "difficulty": "Floor 6 • Intermediate",
    "source": "T04 Intro • DESC NULLS LAST",
    "title": "Komissiya Reytingida Bo'sh Qiymatlarni Oxirga Surish",
    "story": "PostgreSQL da `NULL` eng katta qiymat hisoblangani sababli, oddiy kamayish tartibida saralansa 10 ta `NULL` qator eng tepaga chiqib oladi! Ularni ro'yxat oxiriga tushiring.",
    "taskUz": "From the employee table (`emp`), `ename`, `job` and `comm` columns komissiya in descending order, ammo `NULL` qiymatlarni eng oxirida qoldirib saralang.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `job`, `comm`\n• Asosiy jadvallar: `emp`\n• Saralash (ORDER BY): `comm DESC NULLS LAST, ename`",
    "starterCode": "",
    "hint": "`ORDER BY comm DESC` dan keyin `NULLS LAST` iborasini qo'shing.",
    "solutions": [
      "SELECT ename, job, comm FROM emp ORDER BY comm DESC NULLS LAST, ename",
      "SELECT ename, job, comm FROM emp ORDER BY comm DESC NULLS LAST"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "`DESC NULLS LAST` tufayli avval haqiqiy komissiya olgan 4 kishi (1400, 500, 300, 0), so'ngra `NULL` lar joylashdi.",
    "task": "From the employee table (`emp`), `ename`, `job` and `comm` columns komissiya in descending order, ammo `NULL` qiymatlarni eng oxirida qoldirib saralang."
  },
  {
    "id": 83,
    "sector": 6,
    "difficulty": "Floor 6 • Intermediate",
    "source": "T04 Sorting • ASC NULLS FIRST",
    "title": "Rahbari Yo'q Xodimni Birinchi Ko'rsatish",
    "story": "O'sish tartibida saralanganda `NULL` lar sukut bo'yicha oxirida chiqadi. Rahbari `NULL` bo'lgan Prezident KING ro'yxatning eng boshida chiqishi uchun maxsus tartiblash ko'rsatmasidan foydalaning.",
    "taskUz": "From the employee table (`emp`), `ename`, `job` and `supervisor` columns `supervisor` in ascending order, ammo `NULL` qiymatni birinchi o'ringa qo'yib saralang.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `job`, `supervisor`\n• Asosiy jadvallar: `emp`\n• Saralash (ORDER BY): `supervisor NULLS FIRST, ename`",
    "starterCode": "",
    "hint": "`ORDER BY supervisor NULLS FIRST` (yoki `ASC NULLS FIRST`) yozing.",
    "solutions": [
      "SELECT ename, job, supervisor FROM emp ORDER BY supervisor NULLS FIRST, ename",
      "SELECT ename, job, supervisor FROM emp ORDER BY supervisor ASC NULLS FIRST",
      "SELECT ename, job, supervisor FROM emp ORDER BY supervisor NULLS FIRST"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "`NULLS FIRST` yordamida o'sish tartibida ham `NULL` qiymatli qator (KING) 1-o'ringa chiqarildi.",
    "task": "From the employee table (`emp`), `ename`, `job` and `supervisor` columns `supervisor` in ascending order, ammo `NULL` qiymatni birinchi o'ringa qo'yib saralang."
  },
  {
    "id": 84,
    "sector": 6,
    "difficulty": "Floor 6 • Intermediate",
    "source": "T04 Task H6 • Funksiya Natijasi Bo'yicha Saralash",
    "title": "Ismning Oxirgi Ikki Harfi Bo'yicha Saralash (T04 H6)",
    "story": "T04 H6: Ismi 5 ta harfdan uzun va `'N'` bilan tugaydigan xodimlarni ismining oxirgi 2 ta harfi bo'yicha alifbo tartibida saralang.",
    "taskUz": "From the employee table (`emp`), ismining uzunligi `5` dan katta and ismi `'N'` bilan tugaydigan xodimlarni tanlab, ularni ismining o'ng tomondagi 2 ta harfi bo'yicha saralang.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadvallar: `emp`\n• Saralash (ORDER BY): `RIGHT(ename, 2), ename`",
    "starterCode": "",
    "hint": "`WHERE` da `LENGTH(ename) > 5` va `ename ILIKE '%N'`, `ORDER BY` da esa `RIGHT(ename, 2), ename` yozing.",
    "solutions": [
      "SELECT * FROM emp WHERE LENGTH(ename) > 5 AND ename ILIKE '%N' ORDER BY RIGHT(ename, 2), ename",
      "SELECT * FROM emp WHERE LENGTH(ename) > 5 AND ename LIKE '%N' ORDER BY RIGHT(ename, 2)"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {}
    ],
    "explanation": "T04 H6: `ORDER BY` bandida ustun nomi o'rniga istalgan matn yoki matematik funksiyani yozish mumkin.",
    "task": "From the employee table (`emp`), ismining uzunligi `5` dan katta and ismi `'N'` bilan tugaydigan xodimlarni tanlab, ularni ismining o'ng tomondagi 2 ta harfi bo'yicha saralang."
  },
  {
    "id": 85,
    "sector": 6,
    "difficulty": "Floor 6 • Intermediate",
    "source": "T04 Intro • DISTINCT va ORDER BY Qoidasi",
    "title": "2010-Yilgacha Ishga Kirgan Oylar Ro'yxati",
    "story": "T04 Intro: Takrorlarsiz tanlash ishlatilganda faqat `SELECT` ro'yxatida mavjud bo'lgan ustunlar bo'yicha saralash mumkin! 2010-yilgacha ishga qabul bo'lib o'tgan oylar raqami va nomini oy raqami tartibida chiqaring.",
    "taskUz": "From the employee table (`emp`), `'2010-01-01'` gacha ishga kirganlar uchun takrorlanmas oy raqami (`hire_month` nomi bilan) and probellarsiz oy nomini (`'FMMonth'` formatida, `month_name` nomi bilan) `hire_month` bo'yicha sorted by chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `EXTRACT(MONTH`\n• Asosiy jadvallar: `hiredate`, `emp`\n• Saralash (ORDER BY): `hire_month`",
    "starterCode": "",
    "hint": "`SELECT DISTINCT EXTRACT(MONTH FROM hiredate) AS hire_month, TO_CHAR(hiredate, 'FMMonth') AS month_name` yozib, `ORDER BY hire_month` bilan yakunlang.",
    "solutions": [
      "SELECT DISTINCT EXTRACT(MONTH FROM hiredate) AS hire_month, TO_CHAR(hiredate, 'FMMonth') AS month_name FROM emp WHERE hiredate < DATE '2010-01-01' ORDER BY hire_month",
      "SELECT DISTINCT EXTRACT(MONTH FROM hiredate), TO_CHAR(hiredate, 'FMMonth') FROM emp WHERE hiredate < DATE '2010-01-01' ORDER BY 1"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {},
      {}
    ],
    "explanation": "Oy nomi alifbo bo'yicha emas, balki kalendar oy raqami (`hire_month` 1..12) bo'yicha to'g'ri tartiblandi.",
    "task": "From the employee table (`emp`), `'2010-01-01'` gacha ishga kirganlar uchun takrorlanmas oy raqami (`hire_month` nomi bilan) and probellarsiz oy nomini (`'FMMonth'` formatida, `month_name` nomi bilan) `hire_month` bo'yicha sorted by chiqaring."
  },
  {
    "id": 86,
    "sector": 6,
    "difficulty": "Floor 6 • Hard",
    "source": "T04 Intro • Boolean Expression Sorting",
    "title": "Mantiqiy Saralash: Klerklarni Ro'yxat Boshiga Chiqarish",
    "story": "PostgreSQL da `FALSE < TRUE`! Shu bois saralash qismida mantiqiy shart yozib kamayish tartibi berilsa, o'sha shartga mos (`TRUE`) qatorlar ro'yxatning eng boshiga chiqadi!",
    "taskUz": "From the employee table (`emp`), `ename`, `job` and `comm` columns tanlab, saralash qismida mantiqiy ifoda using avandl barcha `'CLERK'` lavozimidagi xodimlarni ro'yxatning eng boshiga (in descending order), so'ngra `ename` bo'yicha sorted by chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `job`, `comm`\n• Asosiy jadvallar: `emp`\n• Saralash (ORDER BY): `(job = 'CLERK') DESC, ename`",
    "starterCode": "",
    "hint": "`ORDER BY` bandida `(job = 'CLERK') DESC, ename` ko'rinishida mantiqiy saralashdan foydalaning.",
    "solutions": [
      "SELECT ename, job, comm FROM emp ORDER BY (job = 'CLERK') DESC, ename",
      "SELECT ename, job, comm FROM emp ORDER BY (job = 'CLERK') DESC NULLS LAST, comm DESC NULLS LAST, ename"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "Boolean saralash yordamida barcha 4 nafar klerk ro'yxatning yuqori qismiga ko'tarildi.",
    "task": "From the employee table (`emp`), `ename`, `job` and `comm` columns tanlab, saralash qismida mantiqiy ifoda using avandl barcha `'CLERK'` lavozimidagi xodimlarni ro'yxatning eng boshiga (in descending order), so'ngra `ename` bo'yicha sorted by chiqaring."
  },
  {
    "id": 87,
    "sector": 6,
    "difficulty": "Floor 6 • Hard",
    "source": "T04 Extra Task E6 • Ko'p Bosqichli Ustuvor Saralash",
    "title": "Maxsus Bo'lim Ustuvorligi: Avval 30, Keyin 10, Keyin 20 (T04 E6)",
    "story": "T04 E6: Kengash hisobotda 1-navbatda 30-bo'limni, 2-navbatda 10-bo'limni, va oxirida 20-bo'limni, har bir bo'lim ichida esa maosh kamayish tartibida ko'rmoqchi.",
    "taskUz": "From the employee table (`emp`), `ename`, `deptno`, `sal`, `comm` columns mantiqiy saralash using avandl `30`-bo'lim, keyin `10`-bo'lim, and ichida maosh in descending order chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `deptno`, `sal`, `comm`\n• Asosiy jadvallar: `emp`\n• Saralash (ORDER BY): `(deptno = 30) DESC, (deptno = 10) DESC, sal DESC`",
    "starterCode": "",
    "hint": "`ORDER BY` da ketma-ket ikkita mantiqiy shart: `(deptno = 30) DESC, (deptno = 10) DESC, sal DESC` yozing.",
    "solutions": [
      "SELECT ename, deptno, sal, comm FROM emp ORDER BY (deptno = 30) DESC, (deptno = 10) DESC, sal DESC",
      "SELECT ename, deptno, sal, comm FROM emp ORDER BY (deptno = 30) DESC, (deptno = 10) DESC, deptno, (comm > 0) DESC NULLS LAST, sal DESC NULLS LAST, ename"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {}
    ],
    "explanation": "T04 E6: Ketma-ket Boolean ustunlar yordamida bo'limlar `30 -> 10 -> 20` tartibida tizildi.",
    "task": "From the employee table (`emp`), `ename`, `deptno`, `sal`, `comm` columns mantiqiy saralash using avandl `30`-bo'lim, keyin `10`-bo'lim, and ichida maosh in descending order chiqaring."
  },
  {
    "id": 88,
    "sector": 6,
    "difficulty": "Floor 6 • Hard",
    "source": "T04 Extra Task E4 • Mavsumiy Modulo Saralash",
    "title": "Oktabrdan Boshlanuvchi Moliya Yili Tartibi (T04 E4)",
    "story": "T04 E4: AQSH moliya yili Oktabr (10-oy) dan boshlanadi. Oy raqamiga 2 qo'shib, 12 ga bo'lgandagi qoldiq olinsa: Oktabr `0`, Noyabr `1`, Dekabr `2`, Yanvar `3` bo'lib ketma-ket tiziladi!",
    "taskUz": "From the employee table (`emp`), `ename` and `hiredate` columns `hiredate` oy raqamiga (butun songa `::integer` o'girilgan) `2` qo'shib, `12` ga havingdagi qoldiq bo'yicha sorted by chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `hiredate`\n• Asosiy jadvallar: `emp`\n• Saralash (ORDER BY): `MOD(EXTRACT(MONTH FROM hiredate)::integer + 2, 12), ename`",
    "starterCode": "",
    "hint": "`ORDER BY` ichida `MOD(EXTRACT(MONTH FROM hiredate)::integer + 2, 12), ename` ifodasini qo'llang.",
    "solutions": [
      "SELECT ename, hiredate FROM emp ORDER BY MOD(EXTRACT(MONTH FROM hiredate)::integer + 2, 12), ename",
      "SELECT ename, hiredate FROM emp ORDER BY MOD(EXTRACT(MONTH FROM hiredate)::int + 2, 12), ename"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {}
    ],
    "explanation": "T04 E4: Modulo arifmetikasi yordamida kalendar oylari Oktabrdan boshlanadigan siklik tartibga keltirildi.",
    "task": "From the employee table (`emp`), `ename` and `hiredate` columns `hiredate` oy raqamiga (butun songa `::integer` o'girilgan) `2` qo'shib, `12` ga havingdagi qoldiq bo'yicha sorted by chiqaring."
  },
  {
    "id": 89,
    "sector": 6,
    "difficulty": "Floor 6 • Easy",
    "source": "L04 Slide 33 & 36 • LIMIT",
    "title": "Top-3 Eng Yuqori Maosh Oluvchilar (`LIMIT`)",
    "story": "Kengashga kompaniyadagi eng ko'p maosh oluvchi faqat 3 nafar xodimning ro'yxati kerak.",
    "taskUz": "From the employee table (`emp`), `ename` and `sal` columns maosh in descending order sorted by, faqat dastlabki `3` ta qatorni (`LIMIT`) kesib oling.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `sal`\n• Asosiy jadvallar: `emp`\n• Saralash (ORDER BY): `sal DESC`",
    "starterCode": "",
    "hint": "`ORDER BY sal DESC` dan so'ng `LIMIT 3` bandini yozing.",
    "solutions": [
      "SELECT ename, sal FROM emp ORDER BY sal DESC LIMIT 3",
      "SELECT * FROM emp ORDER BY sal DESC LIMIT 3"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {}
    ],
    "explanation": "KING ($5000), SCOTT ($3000) va FORD ($3000) eng yuqori maoshli uchlikni tashkil etadi.",
    "task": "From the employee table (`emp`), `ename` and `sal` columns maosh in descending order sorted by, faqat dastlabki `3` ta qatorni (`LIMIT`) kesib oling."
  },
  {
    "id": 90,
    "sector": 6,
    "difficulty": "Floor 6 Yakuni • Master Architect",
    "source": "L04 Slide 36 • LIMIT va OFFSET Sahifalash",
    "title": "6-Qavat Bossi: Ikkinchi Sahifa Xodimlari (`LIMIT` va `OFFSET`)",
    "story": "6-qavat Boss sinovi: Maosh kamayish tartibida saralangan ro'yxatning dastlabki 3 nafar yetakchisini o'tkazib yuborib (`OFFSET`), undan keyin keluvchi 4 nafar xodimni chiqaring!",
    "taskUz": "From the employee table (`emp`), `ename` and `sal` columns `sal DESC, empno` tartibida sorted by, dastlabki `3` ta qatorni tashlab o'tib (`OFFSET 3`), keyingi `4` ta qatorni (`LIMIT 4`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `sal`\n• Asosiy jadvallar: `emp`\n• Saralash (ORDER BY): `sal DESC, empno`",
    "starterCode": "",
    "hint": "`ORDER BY sal DESC, empno` dan keyin `LIMIT 4 OFFSET 3` yozing.",
    "solutions": [
      "SELECT ename, sal FROM emp ORDER BY sal DESC, empno LIMIT 4 OFFSET 3",
      "SELECT ename, sal FROM emp ORDER BY sal DESC LIMIT 4 OFFSET 3",
      "SELECT * FROM emp ORDER BY sal DESC, empno LIMIT 4 OFFSET 3"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {},
      {}
    ],
    "explanation": "6-Qavat yakunlandi! Top-3 dan keyingi to'rtlik — JONES, BLAKE, CLARK va ALLEN ekranga chiqarildi!",
    "task": "From the employee table (`emp`), `ename` and `sal` columns `sal DESC, empno` tartibida sorted by, dastlabki `3` ta qatorni tashlab o'tib (`OFFSET 3`), keyingi `4` ta qatorni (`LIMIT 4`) chiqaring."
  },
  {
    "id": 91,
    "sector": 7,
    "difficulty": "Floor 7 • Easy",
    "source": "L04 Slide 8–12 • Relyatsion Algebra σ va π",
    "title": "Relyatsion Algebra Ifodasini SQL ga O'girish",
    "story": "7-qavat — Filiallararo Operatsiyalar Markazi. Arxitektura chizmasida $\\pi_{ename, job}(\\sigma_{deptno=10}(emp))$ relyatsion algebra formulasi yozilgan. Uni SQL so'roviga aylantiring!",
    "taskUz": "Relyatsion algebradagi $\\pi_{ename, job}(\\sigma_{deptno=10}(emp))$ ifodasiga mos keluvchi SQL so'rovni yozing (10-bo'lim xodimlarining ismi and lavozimi).\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `job`\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "$\\pi$ (Pi) — `SELECT` ustunlari, $\\sigma$ (Sigma) esa `WHERE` filtrlash shartidir.",
    "solutions": [
      "SELECT ename, job FROM emp WHERE deptno = 10"
    ],
    "requiredPatterns": [
      {},
      {}
    ],
    "explanation": "L04 Slide 9: Relyatsion algebra nazariyasi SQL ning bevosita matematik poydevori hisoblanadi.",
    "task": "Relyatsion algebradagi $\\pi_{ename, job}(\\sigma_{deptno=10}(emp))$ ifodasiga mos keluvchi SQL so'rovni yozing (10-bo'lim xodimlarining ismi and lavozimi)."
  },
  {
    "id": 92,
    "sector": 7,
    "difficulty": "Floor 7 • Easy",
    "source": "L04 Slide 11 • Dekart Ko'paytmasi (CROSS JOIN)",
    "title": "Dekart Ko'paytmasi (`CROSS JOIN`)",
    "story": "L04 Slide 11: Relyatsion algebradagi Dekart ko'paytmasi ($emp \\times dept$) har bir xodimni barcha 4 ta bo'lim bilan kombinatsiya qilib, $14 \\times 4 = 56$ ta qator hosil qiladi.",
    "taskUz": "Xodimlar (`emp`) and bo'limlar (`dept`) jadandllarining Dekart ko'paytmasini `CROSS JOIN` using hosil qilib, `ename` and `dname` columns chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `dname`\n• Asosiy jadvallar: `emp`, `dept`",
    "starterCode": "",
    "hint": "`FROM emp CROSS JOIN dept` sintaksisidan foydalaning.",
    "solutions": [
      "SELECT ename, dname FROM emp CROSS JOIN dept",
      "SELECT e.ename, d.dname FROM emp e CROSS JOIN dept d",
      "SELECT * FROM emp CROSS JOIN dept"
    ],
    "requiredPatterns": [
      {},
      {}
    ],
    "explanation": "L04 Slide 11: `CROSS JOIN` bog'lanish shartisiz barcha mumkin bo'lgan juftliklarni (56 qator) hosil qiladi.",
    "task": "Xodimlar (`emp`) and bo'limlar (`dept`) jadandllarining Dekart ko'paytmasini `CROSS JOIN` using hosil qilib, `ename` and `dname` columns chiqaring."
  },
  {
    "id": 93,
    "sector": 7,
    "difficulty": "Floor 7 • Easy",
    "source": "L04 Slide 38 & 42 • INNER JOIN",
    "title": "Xodim va Uning Bo'lim Nomi (`JOIN ... ON`)",
    "story": "Xodimlar jadvalida faqat bo'lim raqami bor, bo'limning nomi esa `dept` jadvalida joylashgan. Ikkala jadvalni bo'lim raqami bo'yicha bog'lang!",
    "taskUz": "Xodimlar (`emp e`) and bo'limlar (`dept d`) jadandllarini `deptno` ustuni bo'yicha ichki ulanish (`JOIN ... ON`) qilib, xodimning ismi (`ename`), lavozimi (`job`) and bo'lim nomini (`dname`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `job`, `dname`\n• Asosiy jadvallar: `emp`, `dept`",
    "starterCode": "",
    "hint": "`FROM emp e JOIN dept d ON e.deptno = d.deptno` ko'rinishida bog'lang.",
    "solutions": [
      "SELECT e.ename, e.job, d.dname FROM emp e JOIN dept d ON e.deptno = d.deptno",
      "SELECT ename, job, dname FROM emp JOIN dept ON emp.deptno = dept.deptno",
      "SELECT e.ename, d.dname FROM emp e JOIN dept d ON e.deptno = d.deptno"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {},
      {},
      {}
    ],
    "explanation": "L04 Slide 38: Har bir xodim o'zining haqiqiy bo'lim nomi bilan muvaffaqiyatli bog'landi.",
    "task": "Xodimlar (`emp e`) and bo'limlar (`dept d`) jadandllarini `deptno` ustuni bo'yicha ichki ulanish (`JOIN ... ON`) qilib, xodimning ismi (`ename`), lavozimi (`job`) and bo'lim nomini (`dname`) chiqaring."
  },
  {
    "id": 94,
    "sector": 7,
    "difficulty": "Floor 7 • Intermediate",
    "source": "L04 Slide 42 • JOIN va Shahar Filtri",
    "title": "Nyu-York Bosh Ofisi Xodimlari (`JOIN` + `WHERE`)",
    "story": "Bosh ofis Nyu-York (`'NEW YORK'`) shahrida joylashgan. `emp` va `dept` jadvallarini bog'lab, faqat Nyu-Yorkda ishlovchi xodimlarni toping.",
    "taskUz": "Xodimlar (`emp e`) and bo'limlar (`dept d`) jadandllarini `JOIN` qilib, joylashgan shahri (`loc`) `'NEW YORK'` having xodimlarning `ename`, `job`, `sal` and `dname` columns chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `job`, `sal`, `dname`\n• Asosiy jadvallar: `emp`, `dept`",
    "starterCode": "",
    "hint": "`JOIN ... ON` dan keyin `WHERE d.loc = 'NEW YORK'` shartini qo'shing.",
    "solutions": [
      "SELECT e.ename, e.job, e.sal, d.dname FROM emp e JOIN dept d ON e.deptno = d.deptno WHERE d.loc = 'NEW YORK'",
      "SELECT ename, job, sal, dname FROM emp e JOIN dept d ON e.deptno = d.deptno WHERE loc = 'NEW YORK'"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {},
      {}
    ],
    "explanation": "Nyu-Yorkdagi `ACCOUNTING` bo'limida ishlovchi KING, CLARK va MILLER topildi.",
    "task": "Xodimlar (`emp e`) and bo'limlar (`dept d`) jadandllarini `JOIN` qilib, joylashgan shahri (`loc`) `'NEW YORK'` having xodimlarning `ename`, `job`, `sal` and `dname` columns chiqaring."
  },
  {
    "id": 95,
    "sector": 7,
    "difficulty": "Floor 7 • Intermediate",
    "source": "L04 Slide 42–43 • JOIN + IN + ORDER BY",
    "title": "Dallas va Chikago Filiallari Reytingi",
    "story": "Endi `'DALLAS'` yoki `'CHICAGO'` shaharlarida ishlovchi xodimlarni bo'lim nomi va shahri bilan birga maosh kamayish tartibida chiqaring.",
    "taskUz": "Xodimlar (`emp e`) and bo'limlar (`dept d`) jadandllarini bog'lab, shahri (`loc`) `'DALLAS'` yoki `'CHICAGO'` having xodimlarning `ename`, `sal`, `dname`, `loc` columns maosh kamayish (`sal DESC`) tartibida chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `sal`, `dname`, `loc`\n• Asosiy jadvallar: `emp`, `dept`\n• Saralash (ORDER BY): `e.sal DESC`",
    "starterCode": "",
    "hint": "`JOIN` dan so'ng `WHERE d.loc IN ('DALLAS', 'CHICAGO')` va `ORDER BY e.sal DESC` yozing.",
    "solutions": [
      "SELECT e.ename, e.sal, d.dname, d.loc FROM emp e JOIN dept d ON e.deptno = d.deptno WHERE d.loc IN ('DALLAS', 'CHICAGO') ORDER BY e.sal DESC",
      "SELECT ename, sal, dname, loc FROM emp e JOIN dept d ON e.deptno = d.deptno WHERE loc IN ('DALLAS', 'CHICAGO') ORDER BY sal DESC"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {},
      {},
      {}
    ],
    "explanation": "Dallas va Chikagodagi 11 nafar xodim maosh kamayish tartibida saralandi.",
    "task": "Xodimlar (`emp e`) and bo'limlar (`dept d`) jadandllarini bog'lab, shahri (`loc`) `'DALLAS'` yoki `'CHICAGO'` having xodimlarning `ename`, `sal`, `dname`, `loc` columns maosh kamayish (`sal DESC`) tartibida chiqaring."
  },
  {
    "id": 96,
    "sector": 7,
    "difficulty": "Floor 7 • Intermediate",
    "source": "L04 Slide 11 • Theta / Non-Equi Join (salgrade)",
    "title": "Xodimlarning Maosh Razryadini Aniqlash (Non-Equi Join)",
    "story": "Har bir xodimning maoshi (`sal`) `salgrade` jadvalidagi `losal` va `hisal` oralig'iga tushishini tekshirib, uning nechanchi razryadga (`grade`) mansubligini aniqlang.",
    "taskUz": "Xodimlar (`emp e`) and maosh darajalari (`salgrade s`) jadandllarini xodim maoshi `losal` and `hisal` oralig'ida bo'lish sharti (`BETWEEN`) bilan `JOIN` qilib, `ename`, `sal` and `grade` columns chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `sal`, `grade`\n• Asosiy jadvallar: `emp`, `salgrade`",
    "starterCode": "",
    "hint": "`ON` shartida tenglik o'rniga `e.sal BETWEEN s.losal AND s.hisal` diapazon shartini yozing.",
    "solutions": [
      "SELECT e.ename, e.sal, s.grade FROM emp e JOIN salgrade s ON e.sal BETWEEN s.losal AND s.hisal",
      "SELECT ename, sal, grade FROM emp JOIN salgrade ON sal BETWEEN losal AND hisal",
      "SELECT e.ename, e.sal, s.grade FROM emp e JOIN salgrade s ON e.sal >= s.losal AND e.sal <= s.hisal"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {}
    ],
    "explanation": "Diapazon orqali bog'lash (Non-Equi Join) yordamida har bir xodimning razryadi hisoblandi.",
    "task": "Xodimlar (`emp e`) and maosh darajalari (`salgrade s`) jadandllarini xodim maoshi `losal` and `hisal` oralig'ida bo'lish sharti (`BETWEEN`) bilan `JOIN` qilib, `ename`, `sal` and `grade` columns chiqaring."
  },
  {
    "id": 97,
    "sector": 7,
    "difficulty": "Floor 7 • Hardroq",
    "source": "L04 Multi-Table Join • Uchta Jadvalni Ulash",
    "title": "Uch Jadval Hisoboti: Xodim, Bo'lim va Razryad",
    "story": "Kengash uchun uchala jadvalni (`emp`, `dept`, `salgrade`) bitta so'rovda birlashtirib, faqat 4 va 5-razryadli xodimlarni chiqarish kerak.",
    "taskUz": "`emp e`, `dept d` and `salgrade s` jadandllarini ketma-ket `JOIN` qilib, razryadi (`grade`) `4` yoki undan katta having xodimlarning `ename`, `dname`, `sal` and `grade` columns chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `dname`, `sal`, `grade`\n• Asosiy jadvallar: `emp`, `dept`, `salgrade`",
    "starterCode": "",
    "hint": "Avval `emp` ni `dept` bilan `deptno` orqali, keyin `salgrade` bilan `BETWEEN` orqali `JOIN` qiling va `WHERE s.grade >= 4` yozing.",
    "solutions": [
      "SELECT e.ename, d.dname, e.sal, s.grade FROM emp e JOIN dept d ON e.deptno = d.deptno JOIN salgrade s ON e.sal BETWEEN s.losal AND s.hisal WHERE s.grade >= 4",
      "SELECT ename, dname, sal, grade FROM emp e JOIN dept d ON e.deptno = d.deptno JOIN salgrade s ON e.sal BETWEEN s.losal AND s.hisal WHERE grade >= 4"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {},
      {},
      {}
    ],
    "explanation": "Uchta jadval muvaffaqiyatli birlashtirilib, 6 nafar yuqori razryadli xodim ajratib olindi.",
    "task": "`emp e`, `dept d` and `salgrade s` jadandllarini ketma-ket `JOIN` qilib, razryadi (`grade`) `4` yoki undan katta having xodimlarning `ename`, `dname`, `sal` and `grade` columns chiqaring."
  },
  {
    "id": 98,
    "sector": 7,
    "difficulty": "Floor 7 • Intermediate",
    "source": "L04 Slide 40 • Self-Join (Xodim va Rahbar)",
    "title": "Xodim va Uning Bevosita Rahbari Ismi (Self-Join)",
    "story": "Rahbarning ismi ham aynan `emp` jadvalida saqlanadi! Jadvalni o'z-o'ziga ikki xil taxallus (`emp e` va `emp m`) bilan ulab, har bir xodimning yonida rahbarining ismini chiqaring.",
    "taskUz": "Xodimlar jadandlini o'z-o'ziga (`emp e` and `emp m` sifatida) xodimning `supervisor` ustuni rahbarning `empno` ustuniga teng bo'lish sharti bilan ulab, `e.ename` (xodim) and `m.ename` (rahbar) columns chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `employee`, `manager`\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "`FROM emp e JOIN emp m ON e.supervisor = m.empno` sintaksisidan foydalaning.",
    "solutions": [
      "SELECT e.ename AS employee, m.ename AS manager FROM emp e JOIN emp m ON e.supervisor = m.empno",
      "SELECT e.ename, m.ename FROM emp e JOIN emp m ON e.supervisor = m.empno"
    ],
    "requiredPatterns": [
      {},
      {},
      {},
      {}
    ],
    "explanation": "Self-Join yordamida 13 nafar xodim o'z rahbari ismi bilan juftlandi.",
    "task": "Xodimlar jadandlini o'z-o'ziga (`emp e` and `emp m` sifatida) xodimning `supervisor` ustuni rahbarning `empno` ustuniga teng bo'lish sharti bilan ulab, `e.ename` (xodim) and `m.ename` (rahbar) columns chiqaring."
  },
  {
    "id": 99,
    "sector": 7,
    "difficulty": "Floor 7 • Hard",
    "source": "L04 Self-Join Challenge • Rahbaridan Ko'p Maosh Oluvchilar",
    "title": "O'z Rahbaridan Yuqori Maosh Oluvchi Mutaxassislar",
    "story": "Ichki audit qiziq holatni aniqladi: ba'zi xodimlar o'zining bevosita boshlig'idan ko'proq maosh olar ekan! Jadvalni o'z-o'ziga ulash yordamida ularni toping.",
    "taskUz": "Xodimlar jadandlini o'z-o'ziga (`emp e` and `emp m` sifatida, `supervisor` and `empno` ustunlari orqali) ulab, xodimning maoshi (`e.sal`) rahbarining maoshidan (`m.sal`) katta havinglarning `e.ename`, `e.sal`, `m.ename` and `m.sal` columns chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `sal`, `manager`, `mgr_sal`\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "Self-Join dan keyin `WHERE e.sal > m.sal` shartini qo'ying.",
    "solutions": [
      "SELECT e.ename, e.sal, m.ename AS manager, m.sal AS mgr_sal FROM emp e JOIN emp m ON e.supervisor = m.empno WHERE e.sal > m.sal",
      "SELECT e.ename, e.sal, m.ename, m.sal FROM emp e JOIN emp m ON e.supervisor = m.empno WHERE e.sal > m.sal"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "Tahlilchilar FORD ($3000) va SCOTT ($3000) o'z menejeri JONES ($2975) dan ko'proq maosh oladi!",
    "task": "Xodimlar jadandlini o'z-o'ziga (`emp e` and `emp m` sifatida, `supervisor` and `empno` ustunlari orqali) ulab, xodimning maoshi (`e.sal`) rahbarining maoshidan (`m.sal`) katta havinglarning `e.ename`, `e.sal`, `m.ename` and `m.sal` columns chiqaring."
  },
  {
    "id": 100,
    "sector": 7,
    "difficulty": "Floor 7 • Hard",
    "source": "L04 Self-Join Challenge • Rahbaridan Oldin Ishga Kirganlar",
    "title": "O'z Rahbaridan Oldin Ishga Qabul Qilingan Tajribali Xodimlar",
    "story": "Yana bir qiziqarli tekshiruv: kimlar kompaniyaga o'zining bevosita rahbaridan OLDINROQ ishga kirgan?",
    "taskUz": "Xodimlar jadandlini o'z-o'ziga (`emp e` and `emp m` sifatida, `supervisor` and `empno` orqali) ulab, xodimning ishga kirgan sanasi (`e.hiredate`) rahbarining ishga kirgan sanasidan (`m.hiredate`) oldin havinglarning `e.ename`, `e.hiredate`, `m.ename`, `m.hiredate` columns chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Kutilayotgan ustunlar: `ename`, `hiredate`, `ename`, `hiredate`\n• Asosiy jadvallar: `emp`",
    "starterCode": "",
    "hint": "Self-Join qilib, `WHERE e.hiredate < m.hiredate` shartini yozing.",
    "solutions": [
      "SELECT e.ename, e.hiredate, m.ename, m.hiredate FROM emp e JOIN emp m ON e.supervisor = m.empno WHERE e.hiredate < m.hiredate",
      "SELECT e.ename, e.hiredate, m.ename AS manager, m.hiredate AS mgr_hiredate FROM emp e JOIN emp m ON e.supervisor = m.empno WHERE e.hiredate < m.hiredate"
    ],
    "requiredPatterns": [
      {},
      {},
      {}
    ],
    "explanation": "JONES, ALLEN, TURNER, JAMES, WARD va MILLER kompaniyaga o'zlarining hozirgi boshliqlaridan oldinroq ishga kirgan!",
    "task": "Xodimlar jadandlini o'z-o'ziga (`emp e` and `emp m` sifatida, `supervisor` and `empno` orqali) ulab, xodimning ishga kirgan sanasi (`e.hiredate`) rahbarining ishga kirgan sanasidan (`m.hiredate`) oldin havinglarning `e.ename`, `e.hiredate`, `m.ename`, `m.hiredate` columns chiqaring."
  }
];
