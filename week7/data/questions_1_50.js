var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);

_scope.QUESTIONS_1_50 = [
  {
    "id": 1,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L07 Slide 14 & S08 Task 1.1 • Functional Dependencies",
    "title": "Kuryer va Transport Vositalari Bog'liqligi (CourierID -> Vehicle)",
    "story": "Dasturxon Delivery boshqaruvchisi har bir kuryer faqat bitta transport vositasiga biriktirilgan yoki yo'qligini tekshirishni buyurdi.",
    "taskUz": "Dasturxon logida bitta kuryerga birdan ortiq transport to'g'ri kelish holatlarini aniqlang (kuryer_id va transportlar soni).\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `dasturxon_delivery`",
    "expectedSql": "SELECT courier_id FROM dasturxon_delivery GROUP BY courier_id HAVING COUNT(DISTINCT vehicle) > 1",
    "hint": "`GROUP BY courier_id HAVING COUNT(DISTINCT vehicle) > 1` shartidan foydalaning.",
    "tags": [
      "FD",
      "NORMALIZATION",
      "DASTURXON"
    ],
    "solutions": [
      "SELECT courier_id FROM dasturxon_delivery GROUP BY courier_id HAVING COUNT(DISTINCT vehicle) > 1"
    ],
    "task": "Dasturxon logida bitta kuryerga birdan ortiq transport to'g'ri kelish holatlarini aniqlang (kuryer_id va transportlar soni).",
    "explanation": ""
  },
  {
    "id": 2,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L07 Slide 14 & S08 Task 1.2 • Functional Dependencies",
    "title": "Hudud va Nazoratchi Bog'liqligi (Zone -> Supervisor)",
    "story": "Operatsion menejer: 'Har bir hududda aniq bitta nazoratchi (supervisor) javobgar bo'lishi shart' qoidasini kiritdi.",
    "taskUz": "Barcha hududlar (`zone`) va ularga mas'ul bo'lgan nazoratchi (`supervisor`) ro'yxatini chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `dasturxon_delivery`",
    "expectedSql": "SELECT DISTINCT zone, supervisor FROM dasturxon_delivery",
    "hint": "`SELECT DISTINCT zone, supervisor FROM dasturxon_delivery` yozing.",
    "tags": [
      "FD",
      "DISTINCT",
      "DASTURXON"
    ],
    "solutions": [
      "SELECT DISTINCT zone, supervisor FROM dasturxon_delivery"
    ],
    "task": "Barcha hududlar (`zone`) va ularga mas'ul bo'lgan nazoratchi (`supervisor`) ro'yxatini chiqaring.",
    "explanation": ""
  },
  {
    "id": 3,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L07 Slide 14 & S08 Task 1.3 • Functional Dependencies",
    "title": "Chilanzar Hududidagi Nazoratchilar",
    "story": "Chilanzar tumanidagi buyurtmalar oqimi ko'paygani sababli u yerdagi nazoratchi tekshirilmoqda.",
    "taskUz": "Chilanzar hududiga tegishli nazoratchi (`supervisor`) ismini chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `dasturxon_delivery`",
    "expectedSql": "SELECT DISTINCT supervisor FROM dasturxon_delivery WHERE zone = 'Chilanzar'",
    "hint": "`WHERE zone = 'Chilanzar'` filtrini qo'llang.",
    "tags": [
      "FD",
      "FILTER",
      "SUPERVISOR"
    ],
    "solutions": [
      "SELECT DISTINCT supervisor FROM dasturxon_delivery WHERE zone = 'Chilanzar'"
    ],
    "task": "Chilanzar hududiga tegishli nazoratchi (`supervisor`) ismini chiqaring.",
    "explanation": ""
  },
  {
    "id": 4,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L07 Slide 14 & S08 Task 1.4 • Functional Dependencies",
    "title": "Avtomobildan Foydalanuvchi Kuryerlar",
    "story": "Katta hajmdagi osh va lagmon buyurtmalarini yetkazish uchun avtomashinasi bor kuryerlar kerak.",
    "taskUz": "Mashina (`vehicle = 'Car'`) haydaydigan kuryerlarning `courier_id` va `shift` ma'lumotlarini chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `dasturxon_delivery`",
    "expectedSql": "SELECT courier_id, shift FROM dasturxon_delivery WHERE vehicle = 'Car'",
    "hint": "`WHERE vehicle = 'Car'` yozing.",
    "tags": [
      "FD",
      "VEHICLE",
      "CAR"
    ],
    "solutions": [
      "SELECT courier_id, shift FROM dasturxon_delivery WHERE vehicle = 'Car'"
    ],
    "task": "Mashina (`vehicle = 'Car'`) haydaydigan kuryerlarning `courier_id` va `shift` ma'lumotlarini chiqaring.",
    "explanation": ""
  },
  {
    "id": 5,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L07 Slide 14 & S08 Task 1.5 • Functional Dependencies",
    "title": "Kuryer C01 ning Barcha Smenalari",
    "story": "Kuryer C01 ning hafta davomidagi grafik yuklamasini tahlil qilish zarur.",
    "taskUz": "C01 kuryerining barcha smenalari (`shift`), hududi (`zone`) va transportini (`vehicle`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `dasturxon_delivery`",
    "expectedSql": "SELECT shift, zone, vehicle FROM dasturxon_delivery WHERE courier_id = 'C01'",
    "hint": "`WHERE courier_id = 'C01'` shartini yozing.",
    "tags": [
      "FD",
      "COURIER",
      "SHIFT"
    ],
    "solutions": [
      "SELECT shift, zone, vehicle FROM dasturxon_delivery WHERE courier_id = 'C01'"
    ],
    "task": "C01 kuryerining barcha smenalari (`shift`), hududi (`zone`) va transportini (`vehicle`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 6,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L07 Slide 14 & S08 Task 1.6 • Functional Dependencies",
    "title": "Yunusobod Hududi Kuryerlari",
    "story": "Yunusobod filialida smenaga chiqqan barcha kuryerlar ro'yxatini aniqlang.",
    "taskUz": "Yunusobod hududida xizmat ko'rsatgan barcha kuryerlarning `courier_id` va `vehicle` qiymatlarini chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `dasturxon_delivery`",
    "expectedSql": "SELECT courier_id, vehicle FROM dasturxon_delivery WHERE zone = 'Yunusabad'",
    "hint": "`WHERE zone = 'Yunusabad'` filtrini bering.",
    "tags": [
      "FD",
      "ZONE",
      "YUNUSABAD"
    ],
    "solutions": [
      "SELECT courier_id, vehicle FROM dasturxon_delivery WHERE zone = 'Yunusabad'"
    ],
    "task": "Yunusobod hududida xizmat ko'rsatgan barcha kuryerlarning `courier_id` va `vehicle` qiymatlarini chiqaring.",
    "explanation": ""
  },
  {
    "id": 7,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L07 Slide 14 & S08 Task 1.7 • Functional Dependencies",
    "title": "Skuter Haydovchi Kuryerlar Smenasi",
    "story": "Tirbandlik paytida skuter kuryerlarining smenalari tezkor yetkazib berishga biriktiriladi.",
    "taskUz": "Skuter (`Scooter`) transportiga ega kuryerlarning `courier_id`, `shift` va `zone` ma'lumotlarini chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `dasturxon_delivery`",
    "expectedSql": "SELECT courier_id, shift, zone FROM dasturxon_delivery WHERE vehicle = 'Scooter'",
    "hint": "`WHERE vehicle = 'Scooter'` yozing.",
    "tags": [
      "FD",
      "SCOOTER",
      "LOGISTICS"
    ],
    "solutions": [
      "SELECT courier_id, shift, zone FROM dasturxon_delivery WHERE vehicle = 'Scooter'"
    ],
    "task": "Skuter (`Scooter`) transportiga ega kuryerlarning `courier_id`, `shift` va `zone` ma'lumotlarini chiqaring.",
    "explanation": ""
  },
  {
    "id": 8,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L07 Slide 14 & S08 Task 1.8 • Functional Dependencies",
    "title": "Nazoratchi Rahimov Boshqarayotgan Hududlar",
    "story": "Nazoratchi Rahimov qaysi zonalardagi kuryerlar faoliyatini nazorat qilayotganini tahlil qiling.",
    "taskUz": "Rahimov nazorat qilayotgan barcha unikal hududlarni (`zone`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `dasturxon_delivery`",
    "expectedSql": "SELECT DISTINCT zone FROM dasturxon_delivery WHERE supervisor = 'Rahimov'",
    "hint": "`SELECT DISTINCT zone FROM dasturxon_delivery WHERE supervisor = 'Rahimov'` yozing.",
    "tags": [
      "FD",
      "SUPERVISOR",
      "DISTINCT"
    ],
    "solutions": [
      "SELECT DISTINCT zone FROM dasturxon_delivery WHERE supervisor = 'Rahimov'"
    ],
    "task": "Rahimov nazorat qilayotgan barcha unikal hududlarni (`zone`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 9,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L07 Slide 14 & S08 Task 1.9 • Functional Dependencies",
    "title": "Dushanba Kunduzgi Smena (Mon-AM)",
    "story": "Haftaning birinchi kuni ertalabki tirbandlik smenasida ishlovchi xodimlar soni tekshirilmoqda.",
    "taskUz": "'Mon-AM' smenasida ishlayotgan barcha kuryerlarning `courier_id`, `zone` va `supervisor` ma'lumotlarini chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `dasturxon_delivery`",
    "expectedSql": "SELECT courier_id, zone, supervisor FROM dasturxon_delivery WHERE shift = 'Mon-AM'",
    "hint": "`WHERE shift = 'Mon-AM'` yozing.",
    "tags": [
      "FD",
      "SHIFT",
      "MONDAY"
    ],
    "solutions": [
      "SELECT courier_id, zone, supervisor FROM dasturxon_delivery WHERE shift = 'Mon-AM'"
    ],
    "task": "'Mon-AM' smenasida ishlayotgan barcha kuryerlarning `courier_id`, `zone` va `supervisor` ma'lumotlarini chiqaring.",
    "explanation": ""
  },
  {
    "id": 10,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L07 Slide 14 & S08 Task 1.10 • Functional Dependencies",
    "title": "Kuryer C02 ning Mashinada Yurgan Joylari",
    "story": "Kuryer C02 korxonaga tegishli avtomashinada qaysi zonalarga borganini tekshirish zarur.",
    "taskUz": "C02 kuryerining avtomobil bilan bajargan barcha zonalari (`zone`) va smenalarini (`shift`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `dasturxon_delivery`",
    "expectedSql": "SELECT shift, zone FROM dasturxon_delivery WHERE courier_id = 'C02' AND vehicle = 'Car'",
    "hint": "`WHERE courier_id = 'C02' AND vehicle = 'Car'` deb yozing.",
    "tags": [
      "FD",
      "COURIER",
      "CAR"
    ],
    "solutions": [
      "SELECT shift, zone FROM dasturxon_delivery WHERE courier_id = 'C02' AND vehicle = 'Car'"
    ],
    "task": "C02 kuryerining avtomobil bilan bajargan barcha zonalari (`zone`) va smenalarini (`shift`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 11,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L07 Slide 14 & S08 Task 1.11 • Functional Dependencies",
    "title": "Saidova Nazoratidagi Unikal Transport Turlari",
    "story": "Nazoratchi Saidova brigadasida qanday transport vositalari mavjudligini inventarizatsiya qiling.",
    "taskUz": "Saidova nazoratidagi kuryerlarning unikal transport turlarini (`vehicle`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `dasturxon_delivery`",
    "expectedSql": "SELECT DISTINCT vehicle FROM dasturxon_delivery WHERE supervisor = 'Saidova'",
    "hint": "`SELECT DISTINCT vehicle FROM dasturxon_delivery WHERE supervisor = 'Saidova'` yozing.",
    "tags": [
      "FD",
      "VEHICLE",
      "SUPERVISOR"
    ],
    "solutions": [
      "SELECT DISTINCT vehicle FROM dasturxon_delivery WHERE supervisor = 'Saidova'"
    ],
    "task": "Saidova nazoratidagi kuryerlarning unikal transport turlarini (`vehicle`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 12,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L07 Slide 14 & S08 Task 1.12 • Functional Dependencies",
    "title": "Seshanba Kechki Smena (Tue-PM) Kuryeri",
    "story": "Seshanba kuni kechki smenada faoliyat yuritgan kuryerni aniqlash kerak.",
    "taskUz": "'Tue-PM' smenasidagi kuryerning `courier_id`, `zone` va `vehicle` qiymatlarini chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `dasturxon_delivery`",
    "expectedSql": "SELECT courier_id, zone, vehicle FROM dasturxon_delivery WHERE shift = 'Tue-PM'",
    "hint": "`WHERE shift = 'Tue-PM'` yozing.",
    "tags": [
      "FD",
      "SHIFT",
      "PM"
    ],
    "solutions": [
      "SELECT courier_id, zone, vehicle FROM dasturxon_delivery WHERE shift = 'Tue-PM'"
    ],
    "task": "'Tue-PM' smenasidagi kuryerning `courier_id`, `zone` va `vehicle` qiymatlarini chiqaring.",
    "explanation": ""
  },
  {
    "id": 13,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L07 Slide 14 & S08 Task 1.13 • Functional Dependencies",
    "title": "Chilanzarda Velosipedda Yurgan Kuryerlar",
    "story": "Chilanzar hududida ekologik toza velosiped (`Bike`) orqali xizmat ko'rsatgan xodimlarni toping.",
    "taskUz": "Chilanzar hududida velosiped haydagan kuryerlarning `courier_id` va `shift` ma'lumotlarini chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `dasturxon_delivery`",
    "expectedSql": "SELECT courier_id, shift FROM dasturxon_delivery WHERE zone = 'Chilanzar' AND vehicle = 'Bike'",
    "hint": "`WHERE zone = 'Chilanzar' AND vehicle = 'Bike'` shartini yozing.",
    "tags": [
      "FD",
      "BIKE",
      "CHILANZAR"
    ],
    "solutions": [
      "SELECT courier_id, shift FROM dasturxon_delivery WHERE zone = 'Chilanzar' AND vehicle = 'Bike'"
    ],
    "task": "Chilanzar hududida velosiped haydagan kuryerlarning `courier_id` va `shift` ma'lumotlarini chiqaring.",
    "explanation": ""
  },
  {
    "id": 14,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L07 Slide 14 & S08 Task 1.14 • Functional Dependencies",
    "title": "Kuryer C03 ning Transporti va Nazoratchisi",
    "story": "C03 kuryerining xizmat vositasi va unga rahbarlik qiluvchi shaxsni aniqlang.",
    "taskUz": "C03 kuryerining transport vositasi (`vehicle`) va nazoratchisini (`supervisor`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `dasturxon_delivery`",
    "expectedSql": "SELECT vehicle, supervisor FROM dasturxon_delivery WHERE courier_id = 'C03'",
    "hint": "`WHERE courier_id = 'C03'` yozing.",
    "tags": [
      "FD",
      "COURIER",
      "METRICS"
    ],
    "solutions": [
      "SELECT vehicle, supervisor FROM dasturxon_delivery WHERE courier_id = 'C03'"
    ],
    "task": "C03 kuryerining transport vositasi (`vehicle`) va nazoratchisini (`supervisor`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 15,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L07 Slide 14 & S08 Task 1.15 • Functional Dependencies",
    "title": "Kuryerlar Jurnali To'liq Audit Hisoboti",
    "story": "Logistika bo'limi haftalik yakuniy hisobot uchun kuryerlar ro'yxatini tartiblangan holda talab qildi.",
    "taskUz": "Barcha kuryerlarning `courier_id`, `shift`, `zone` va `vehicle` ma'lumotlarini `courier_id` bo'yicha saralab chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `dasturxon_delivery`",
    "expectedSql": "SELECT courier_id, shift, zone, vehicle FROM dasturxon_delivery ORDER BY courier_id",
    "hint": "`SELECT courier_id, shift, zone, vehicle FROM dasturxon_delivery ORDER BY courier_id` yozing.",
    "tags": [
      "FD",
      "ORDER",
      "AUDIT"
    ],
    "solutions": [
      "SELECT courier_id, shift, zone, vehicle FROM dasturxon_delivery ORDER BY courier_id"
    ],
    "task": "Barcha kuryerlarning `courier_id`, `shift`, `zone` va `vehicle` ma'lumotlarini `courier_id` bo'yicha saralab chiqaring.",
    "explanation": ""
  },
  {
    "id": 16,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "L07 Slide 24 & S08 Task 2.1 • Attribute Closure & Keys",
    "title": "Atributlar Yopilishi & Superkalit Tahlili (1-Bosqich)",
    "story": "Armstrong aksiomalari (Reflexivity, Augmentation, Transitivity) yordamida atributlar to'plami yopilishini hisoblash talab etiladi.",
    "taskUz": "Xodim 7839 ning maosh (`sal`), lavozim (`job`) va bo'lim raqamini (`deptno`) aniqlang.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "SELECT ename, job, sal, deptno FROM emp WHERE empno = 7839",
    "hint": "`WHERE empno = 7839` shartidan foydalaning.",
    "tags": [
      "CLOSURE",
      "CANDIDATE_KEY",
      "SUPERKEY"
    ],
    "solutions": [
      "SELECT ename, job, sal, deptno FROM emp WHERE empno = 7839"
    ],
    "task": "Xodim 7839 ning maosh (`sal`), lavozim (`job`) va bo'lim raqamini (`deptno`) aniqlang.",
    "explanation": ""
  },
  {
    "id": 17,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "L07 Slide 24 & S08 Task 2.2 • Attribute Closure & Keys",
    "title": "Atributlar Yopilishi & Superkalit Tahlili (2-Bosqich)",
    "story": "Armstrong aksiomalari (Reflexivity, Augmentation, Transitivity) yordamida atributlar to'plami yopilishini hisoblash talab etiladi.",
    "taskUz": "Xodim 7698 ning maosh (`sal`), lavozim (`job`) va bo'lim raqamini (`deptno`) aniqlang.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "SELECT ename, job, sal, deptno FROM emp WHERE empno = 7698",
    "hint": "`WHERE empno = 7698` shartidan foydalaning.",
    "tags": [
      "CLOSURE",
      "CANDIDATE_KEY",
      "SUPERKEY"
    ],
    "solutions": [
      "SELECT ename, job, sal, deptno FROM emp WHERE empno = 7698"
    ],
    "task": "Xodim 7698 ning maosh (`sal`), lavozim (`job`) va bo'lim raqamini (`deptno`) aniqlang.",
    "explanation": ""
  },
  {
    "id": 18,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "L07 Slide 24 & S08 Task 2.3 • Attribute Closure & Keys",
    "title": "Atributlar Yopilishi & Superkalit Tahlili (3-Bosqich)",
    "story": "Armstrong aksiomalari (Reflexivity, Augmentation, Transitivity) yordamida atributlar to'plami yopilishini hisoblash talab etiladi.",
    "taskUz": "Xodim 7782 ning maosh (`sal`), lavozim (`job`) va bo'lim raqamini (`deptno`) aniqlang.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "SELECT ename, job, sal, deptno FROM emp WHERE empno = 7782",
    "hint": "`WHERE empno = 7782` shartidan foydalaning.",
    "tags": [
      "CLOSURE",
      "CANDIDATE_KEY",
      "SUPERKEY"
    ],
    "solutions": [
      "SELECT ename, job, sal, deptno FROM emp WHERE empno = 7782"
    ],
    "task": "Xodim 7782 ning maosh (`sal`), lavozim (`job`) va bo'lim raqamini (`deptno`) aniqlang.",
    "explanation": ""
  },
  {
    "id": 19,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "L07 Slide 24 & S08 Task 2.4 • Attribute Closure & Keys",
    "title": "Atributlar Yopilishi & Superkalit Tahlili (4-Bosqich)",
    "story": "Armstrong aksiomalari (Reflexivity, Augmentation, Transitivity) yordamida atributlar to'plami yopilishini hisoblash talab etiladi.",
    "taskUz": "Xodim 7566 ning maosh (`sal`), lavozim (`job`) va bo'lim raqamini (`deptno`) aniqlang.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "SELECT ename, job, sal, deptno FROM emp WHERE empno = 7566",
    "hint": "`WHERE empno = 7566` shartidan foydalaning.",
    "tags": [
      "CLOSURE",
      "CANDIDATE_KEY",
      "SUPERKEY"
    ],
    "solutions": [
      "SELECT ename, job, sal, deptno FROM emp WHERE empno = 7566"
    ],
    "task": "Xodim 7566 ning maosh (`sal`), lavozim (`job`) va bo'lim raqamini (`deptno`) aniqlang.",
    "explanation": ""
  },
  {
    "id": 20,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "L07 Slide 24 & S08 Task 2.5 • Attribute Closure & Keys",
    "title": "Atributlar Yopilishi & Superkalit Tahlili (5-Bosqich)",
    "story": "Armstrong aksiomalari (Reflexivity, Augmentation, Transitivity) yordamida atributlar to'plami yopilishini hisoblash talab etiladi.",
    "taskUz": "Xodim 7654 ning maosh (`sal`), lavozim (`job`) va bo'lim raqamini (`deptno`) aniqlang.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "SELECT ename, job, sal, deptno FROM emp WHERE empno = 7654",
    "hint": "`WHERE empno = 7654` shartidan foydalaning.",
    "tags": [
      "CLOSURE",
      "CANDIDATE_KEY",
      "SUPERKEY"
    ],
    "solutions": [
      "SELECT ename, job, sal, deptno FROM emp WHERE empno = 7654"
    ],
    "task": "Xodim 7654 ning maosh (`sal`), lavozim (`job`) va bo'lim raqamini (`deptno`) aniqlang.",
    "explanation": ""
  },
  {
    "id": 21,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "L07 Slide 24 & S08 Task 2.6 • Attribute Closure & Keys",
    "title": "Atributlar Yopilishi & Superkalit Tahlili (6-Bosqich)",
    "story": "Armstrong aksiomalari (Reflexivity, Augmentation, Transitivity) yordamida atributlar to'plami yopilishini hisoblash talab etiladi.",
    "taskUz": "Xodim 7499 ning maosh (`sal`), lavozim (`job`) va bo'lim raqamini (`deptno`) aniqlang.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "SELECT ename, job, sal, deptno FROM emp WHERE empno = 7499",
    "hint": "`WHERE empno = 7499` shartidan foydalaning.",
    "tags": [
      "CLOSURE",
      "CANDIDATE_KEY",
      "SUPERKEY"
    ],
    "solutions": [
      "SELECT ename, job, sal, deptno FROM emp WHERE empno = 7499"
    ],
    "task": "Xodim 7499 ning maosh (`sal`), lavozim (`job`) va bo'lim raqamini (`deptno`) aniqlang.",
    "explanation": ""
  },
  {
    "id": 22,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "L07 Slide 24 & S08 Task 2.7 • Attribute Closure & Keys",
    "title": "Atributlar Yopilishi & Superkalit Tahlili (7-Bosqich)",
    "story": "Armstrong aksiomalari (Reflexivity, Augmentation, Transitivity) yordamida atributlar to'plami yopilishini hisoblash talab etiladi.",
    "taskUz": "Xodim 7844 ning maosh (`sal`), lavozim (`job`) va bo'lim raqamini (`deptno`) aniqlang.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "SELECT ename, job, sal, deptno FROM emp WHERE empno = 7844",
    "hint": "`WHERE empno = 7844` shartidan foydalaning.",
    "tags": [
      "CLOSURE",
      "CANDIDATE_KEY",
      "SUPERKEY"
    ],
    "solutions": [
      "SELECT ename, job, sal, deptno FROM emp WHERE empno = 7844"
    ],
    "task": "Xodim 7844 ning maosh (`sal`), lavozim (`job`) va bo'lim raqamini (`deptno`) aniqlang.",
    "explanation": ""
  },
  {
    "id": 23,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "L07 Slide 24 & S08 Task 2.8 • Attribute Closure & Keys",
    "title": "Atributlar Yopilishi & Superkalit Tahlili (8-Bosqich)",
    "story": "Armstrong aksiomalari (Reflexivity, Augmentation, Transitivity) yordamida atributlar to'plami yopilishini hisoblash talab etiladi.",
    "taskUz": "Xodim 7900 ning maosh (`sal`), lavozim (`job`) va bo'lim raqamini (`deptno`) aniqlang.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "SELECT ename, job, sal, deptno FROM emp WHERE empno = 7900",
    "hint": "`WHERE empno = 7900` shartidan foydalaning.",
    "tags": [
      "CLOSURE",
      "CANDIDATE_KEY",
      "SUPERKEY"
    ],
    "solutions": [
      "SELECT ename, job, sal, deptno FROM emp WHERE empno = 7900"
    ],
    "task": "Xodim 7900 ning maosh (`sal`), lavozim (`job`) va bo'lim raqamini (`deptno`) aniqlang.",
    "explanation": ""
  },
  {
    "id": 24,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "L07 Slide 24 & S08 Task 2.9 • Attribute Closure & Keys",
    "title": "Atributlar Yopilishi & Superkalit Tahlili (9-Bosqich)",
    "story": "Armstrong aksiomalari (Reflexivity, Augmentation, Transitivity) yordamida atributlar to'plami yopilishini hisoblash talab etiladi.",
    "taskUz": "Xodim 7521 ning maosh (`sal`), lavozim (`job`) va bo'lim raqamini (`deptno`) aniqlang.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "SELECT ename, job, sal, deptno FROM emp WHERE empno = 7521",
    "hint": "`WHERE empno = 7521` shartidan foydalaning.",
    "tags": [
      "CLOSURE",
      "CANDIDATE_KEY",
      "SUPERKEY"
    ],
    "solutions": [
      "SELECT ename, job, sal, deptno FROM emp WHERE empno = 7521"
    ],
    "task": "Xodim 7521 ning maosh (`sal`), lavozim (`job`) va bo'lim raqamini (`deptno`) aniqlang.",
    "explanation": ""
  },
  {
    "id": 25,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "L07 Slide 24 & S08 Task 2.10 • Attribute Closure & Keys",
    "title": "Atributlar Yopilishi & Superkalit Tahlili (10-Bosqich)",
    "story": "Armstrong aksiomalari (Reflexivity, Augmentation, Transitivity) yordamida atributlar to'plami yopilishini hisoblash talab etiladi.",
    "taskUz": "Xodim 7902 ning maosh (`sal`), lavozim (`job`) va bo'lim raqamini (`deptno`) aniqlang.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "SELECT ename, job, sal, deptno FROM emp WHERE empno = 7902",
    "hint": "`WHERE empno = 7902` shartidan foydalaning.",
    "tags": [
      "CLOSURE",
      "CANDIDATE_KEY",
      "SUPERKEY"
    ],
    "solutions": [
      "SELECT ename, job, sal, deptno FROM emp WHERE empno = 7902"
    ],
    "task": "Xodim 7902 ning maosh (`sal`), lavozim (`job`) va bo'lim raqamini (`deptno`) aniqlang.",
    "explanation": ""
  },
  {
    "id": 26,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "L07 Slide 24 & S08 Task 2.11 • Attribute Closure & Keys",
    "title": "Atributlar Yopilishi & Superkalit Tahlili (11-Bosqich)",
    "story": "Armstrong aksiomalari (Reflexivity, Augmentation, Transitivity) yordamida atributlar to'plami yopilishini hisoblash talab etiladi.",
    "taskUz": "Xodim 7369 ning maosh (`sal`), lavozim (`job`) va bo'lim raqamini (`deptno`) aniqlang.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "SELECT ename, job, sal, deptno FROM emp WHERE empno = 7369",
    "hint": "`WHERE empno = 7369` shartidan foydalaning.",
    "tags": [
      "CLOSURE",
      "CANDIDATE_KEY",
      "SUPERKEY"
    ],
    "solutions": [
      "SELECT ename, job, sal, deptno FROM emp WHERE empno = 7369"
    ],
    "task": "Xodim 7369 ning maosh (`sal`), lavozim (`job`) va bo'lim raqamini (`deptno`) aniqlang.",
    "explanation": ""
  },
  {
    "id": 27,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "L07 Slide 24 & S08 Task 2.12 • Attribute Closure & Keys",
    "title": "Atributlar Yopilishi & Superkalit Tahlili (12-Bosqich)",
    "story": "Armstrong aksiomalari (Reflexivity, Augmentation, Transitivity) yordamida atributlar to'plami yopilishini hisoblash talab etiladi.",
    "taskUz": "Xodim 7788 ning maosh (`sal`), lavozim (`job`) va bo'lim raqamini (`deptno`) aniqlang.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "SELECT ename, job, sal, deptno FROM emp WHERE empno = 7788",
    "hint": "`WHERE empno = 7788` shartidan foydalaning.",
    "tags": [
      "CLOSURE",
      "CANDIDATE_KEY",
      "SUPERKEY"
    ],
    "solutions": [
      "SELECT ename, job, sal, deptno FROM emp WHERE empno = 7788"
    ],
    "task": "Xodim 7788 ning maosh (`sal`), lavozim (`job`) va bo'lim raqamini (`deptno`) aniqlang.",
    "explanation": ""
  },
  {
    "id": 28,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "L07 Slide 24 & S08 Task 2.13 • Attribute Closure & Keys",
    "title": "Atributlar Yopilishi & Superkalit Tahlili (13-Bosqich)",
    "story": "Armstrong aksiomalari (Reflexivity, Augmentation, Transitivity) yordamida atributlar to'plami yopilishini hisoblash talab etiladi.",
    "taskUz": "Xodim 7876 ning maosh (`sal`), lavozim (`job`) va bo'lim raqamini (`deptno`) aniqlang.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "SELECT ename, job, sal, deptno FROM emp WHERE empno = 7876",
    "hint": "`WHERE empno = 7876` shartidan foydalaning.",
    "tags": [
      "CLOSURE",
      "CANDIDATE_KEY",
      "SUPERKEY"
    ],
    "solutions": [
      "SELECT ename, job, sal, deptno FROM emp WHERE empno = 7876"
    ],
    "task": "Xodim 7876 ning maosh (`sal`), lavozim (`job`) va bo'lim raqamini (`deptno`) aniqlang.",
    "explanation": ""
  },
  {
    "id": 29,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "L07 Slide 24 & S08 Task 2.14 • Attribute Closure & Keys",
    "title": "Atributlar Yopilishi & Superkalit Tahlili (14-Bosqich)",
    "story": "Armstrong aksiomalari (Reflexivity, Augmentation, Transitivity) yordamida atributlar to'plami yopilishini hisoblash talab etiladi.",
    "taskUz": "Xodim 7934 ning maosh (`sal`), lavozim (`job`) va bo'lim raqamini (`deptno`) aniqlang.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "SELECT ename, job, sal, deptno FROM emp WHERE empno = 7934",
    "hint": "`WHERE empno = 7934` shartidan foydalaning.",
    "tags": [
      "CLOSURE",
      "CANDIDATE_KEY",
      "SUPERKEY"
    ],
    "solutions": [
      "SELECT ename, job, sal, deptno FROM emp WHERE empno = 7934"
    ],
    "task": "Xodim 7934 ning maosh (`sal`), lavozim (`job`) va bo'lim raqamini (`deptno`) aniqlang.",
    "explanation": ""
  },
  {
    "id": 30,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "L07 Slide 24 & S08 Task 2.15 • Attribute Closure & Keys",
    "title": "Emp Jadvalidagi Birlamchi Kalit (empno) Unikalligi",
    "story": "Birlamchi kalit empno butun jadvaldagi har bir xodimni bir qiymatli aniqlay olishini tasdiqlang.",
    "taskUz": "Barcha xodimlarning `empno` va `ename` ustunlarini `empno` o'sish tartibida chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "SELECT empno, ename FROM emp ORDER BY empno",
    "hint": "`SELECT empno, ename FROM emp ORDER BY empno` yozing.",
    "tags": [
      "CLOSURE",
      "CANDIDATE_KEY",
      "SUPERKEY"
    ],
    "solutions": [
      "SELECT empno, ename FROM emp ORDER BY empno"
    ],
    "task": "Barcha xodimlarning `empno` va `ename` ustunlarini `empno` o'sish tartibida chiqaring.",
    "explanation": ""
  },
  {
    "id": 31,
    "sector": 3,
    "difficulty": "Floor 3 • Medium",
    "source": "L07 Slide 32 & S08 Task 3.1 • 2NF Normalization",
    "title": "2NF Dekompozitsiya: Qisman Bog'liqlikni Yo'qotish (1-Bosqich)",
    "story": "Loyiha va xodimlar kompozit kalitli jadvalida qisman bog'liqlik (partial dependency) mavjud bo'lsa, jadval 2NF talabiga javob bermaydi.",
    "taskUz": "Loyiha 101 bo'yicha loyiha nomi (`pname`), joylashuvi (`ploc`) va byudjetini (`budget`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `project` yoki `works_on`",
    "expectedSql": "SELECT pname, ploc, budget FROM project WHERE pno = 101",
    "hint": "`WHERE pno = 101` filtrini yozing.",
    "tags": [
      "2NF",
      "NORMALIZATION",
      "PROJECT"
    ],
    "solutions": [
      "SELECT pname, ploc, budget FROM project WHERE pno = 101"
    ],
    "task": "Loyiha 101 bo'yicha loyiha nomi (`pname`), joylashuvi (`ploc`) va byudjetini (`budget`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 32,
    "sector": 3,
    "difficulty": "Floor 3 • Medium",
    "source": "L07 Slide 32 & S08 Task 3.2 • 2NF Normalization",
    "title": "2NF Dekompozitsiya: Qisman Bog'liqlikni Yo'qotish (2-Bosqich)",
    "story": "Loyiha va xodimlar kompozit kalitli jadvalida qisman bog'liqlik (partial dependency) mavjud bo'lsa, jadval 2NF talabiga javob bermaydi.",
    "taskUz": "Loyiha 102 bo'yicha loyiha nomi (`pname`), joylashuvi (`ploc`) va byudjetini (`budget`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `project` yoki `works_on`",
    "expectedSql": "SELECT pname, ploc, budget FROM project WHERE pno = 102",
    "hint": "`WHERE pno = 102` filtrini yozing.",
    "tags": [
      "2NF",
      "NORMALIZATION",
      "PROJECT"
    ],
    "solutions": [
      "SELECT pname, ploc, budget FROM project WHERE pno = 102"
    ],
    "task": "Loyiha 102 bo'yicha loyiha nomi (`pname`), joylashuvi (`ploc`) va byudjetini (`budget`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 33,
    "sector": 3,
    "difficulty": "Floor 3 • Medium",
    "source": "L07 Slide 32 & S08 Task 3.3 • 2NF Normalization",
    "title": "2NF Dekompozitsiya: Qisman Bog'liqlikni Yo'qotish (3-Bosqich)",
    "story": "Loyiha va xodimlar kompozit kalitli jadvalida qisman bog'liqlik (partial dependency) mavjud bo'lsa, jadval 2NF talabiga javob bermaydi.",
    "taskUz": "Loyiha 103 bo'yicha loyiha nomi (`pname`), joylashuvi (`ploc`) va byudjetini (`budget`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `project` yoki `works_on`",
    "expectedSql": "SELECT pname, ploc, budget FROM project WHERE pno = 103",
    "hint": "`WHERE pno = 103` filtrini yozing.",
    "tags": [
      "2NF",
      "NORMALIZATION",
      "PROJECT"
    ],
    "solutions": [
      "SELECT pname, ploc, budget FROM project WHERE pno = 103"
    ],
    "task": "Loyiha 103 bo'yicha loyiha nomi (`pname`), joylashuvi (`ploc`) va byudjetini (`budget`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 34,
    "sector": 3,
    "difficulty": "Floor 3 • Medium",
    "source": "L07 Slide 32 & S08 Task 3.4 • 2NF Normalization",
    "title": "2NF Dekompozitsiya: Qisman Bog'liqlikni Yo'qotish (4-Bosqich)",
    "story": "Loyiha va xodimlar kompozit kalitli jadvalida qisman bog'liqlik (partial dependency) mavjud bo'lsa, jadval 2NF talabiga javob bermaydi.",
    "taskUz": "Loyiha 104 bo'yicha loyiha nomi (`pname`), joylashuvi (`ploc`) va byudjetini (`budget`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `project` yoki `works_on`",
    "expectedSql": "SELECT pname, ploc, budget FROM project WHERE pno = 104",
    "hint": "`WHERE pno = 104` filtrini yozing.",
    "tags": [
      "2NF",
      "NORMALIZATION",
      "PROJECT"
    ],
    "solutions": [
      "SELECT pname, ploc, budget FROM project WHERE pno = 104"
    ],
    "task": "Loyiha 104 bo'yicha loyiha nomi (`pname`), joylashuvi (`ploc`) va byudjetini (`budget`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 35,
    "sector": 3,
    "difficulty": "Floor 3 • Medium",
    "source": "L07 Slide 32 & S08 Task 3.5 • 2NF Normalization",
    "title": "2NF Dekompozitsiya: Qisman Bog'liqlikni Yo'qotish (5-Bosqich)",
    "story": "Loyiha va xodimlar kompozit kalitli jadvalida qisman bog'liqlik (partial dependency) mavjud bo'lsa, jadval 2NF talabiga javob bermaydi.",
    "taskUz": "Loyiha 105 bo'yicha loyiha nomi (`pname`), joylashuvi (`ploc`) va byudjetini (`budget`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `project` yoki `works_on`",
    "expectedSql": "SELECT pname, ploc, budget FROM project WHERE pno = 105",
    "hint": "`WHERE pno = 105` filtrini yozing.",
    "tags": [
      "2NF",
      "NORMALIZATION",
      "PROJECT"
    ],
    "solutions": [
      "SELECT pname, ploc, budget FROM project WHERE pno = 105"
    ],
    "task": "Loyiha 105 bo'yicha loyiha nomi (`pname`), joylashuvi (`ploc`) va byudjetini (`budget`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 36,
    "sector": 3,
    "difficulty": "Floor 3 • Medium",
    "source": "L07 Slide 32 & S08 Task 3.6 • 2NF Normalization",
    "title": "2NF Dekompozitsiya: Qisman Bog'liqlikni Yo'qotish (6-Bosqich)",
    "story": "Loyiha va xodimlar kompozit kalitli jadvalida qisman bog'liqlik (partial dependency) mavjud bo'lsa, jadval 2NF talabiga javob bermaydi.",
    "taskUz": "Loyiha 101 bo'yicha loyiha nomi (`pname`), joylashuvi (`ploc`) va byudjetini (`budget`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `project` yoki `works_on`",
    "expectedSql": "SELECT pname, ploc, budget FROM project WHERE pno = 101",
    "hint": "`WHERE pno = 101` filtrini yozing.",
    "tags": [
      "2NF",
      "NORMALIZATION",
      "PROJECT"
    ],
    "solutions": [
      "SELECT pname, ploc, budget FROM project WHERE pno = 101"
    ],
    "task": "Loyiha 101 bo'yicha loyiha nomi (`pname`), joylashuvi (`ploc`) va byudjetini (`budget`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 37,
    "sector": 3,
    "difficulty": "Floor 3 • Medium",
    "source": "L07 Slide 32 & S08 Task 3.7 • 2NF Normalization",
    "title": "2NF Dekompozitsiya: Qisman Bog'liqlikni Yo'qotish (7-Bosqich)",
    "story": "Loyiha va xodimlar kompozit kalitli jadvalida qisman bog'liqlik (partial dependency) mavjud bo'lsa, jadval 2NF talabiga javob bermaydi.",
    "taskUz": "Loyiha 102 bo'yicha loyiha nomi (`pname`), joylashuvi (`ploc`) va byudjetini (`budget`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `project` yoki `works_on`",
    "expectedSql": "SELECT pname, ploc, budget FROM project WHERE pno = 102",
    "hint": "`WHERE pno = 102` filtrini yozing.",
    "tags": [
      "2NF",
      "NORMALIZATION",
      "PROJECT"
    ],
    "solutions": [
      "SELECT pname, ploc, budget FROM project WHERE pno = 102"
    ],
    "task": "Loyiha 102 bo'yicha loyiha nomi (`pname`), joylashuvi (`ploc`) va byudjetini (`budget`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 38,
    "sector": 3,
    "difficulty": "Floor 3 • Medium",
    "source": "L07 Slide 32 & S08 Task 3.8 • 2NF Normalization",
    "title": "2NF Dekompozitsiya: Qisman Bog'liqlikni Yo'qotish (8-Bosqich)",
    "story": "Loyiha va xodimlar kompozit kalitli jadvalida qisman bog'liqlik (partial dependency) mavjud bo'lsa, jadval 2NF talabiga javob bermaydi.",
    "taskUz": "Loyiha 103 bo'yicha loyiha nomi (`pname`), joylashuvi (`ploc`) va byudjetini (`budget`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `project` yoki `works_on`",
    "expectedSql": "SELECT pname, ploc, budget FROM project WHERE pno = 103",
    "hint": "`WHERE pno = 103` filtrini yozing.",
    "tags": [
      "2NF",
      "NORMALIZATION",
      "PROJECT"
    ],
    "solutions": [
      "SELECT pname, ploc, budget FROM project WHERE pno = 103"
    ],
    "task": "Loyiha 103 bo'yicha loyiha nomi (`pname`), joylashuvi (`ploc`) va byudjetini (`budget`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 39,
    "sector": 3,
    "difficulty": "Floor 3 • Medium",
    "source": "L07 Slide 32 & S08 Task 3.9 • 2NF Normalization",
    "title": "2NF Dekompozitsiya: Qisman Bog'liqlikni Yo'qotish (9-Bosqich)",
    "story": "Loyiha va xodimlar kompozit kalitli jadvalida qisman bog'liqlik (partial dependency) mavjud bo'lsa, jadval 2NF talabiga javob bermaydi.",
    "taskUz": "Loyiha 104 bo'yicha loyiha nomi (`pname`), joylashuvi (`ploc`) va byudjetini (`budget`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `project` yoki `works_on`",
    "expectedSql": "SELECT pname, ploc, budget FROM project WHERE pno = 104",
    "hint": "`WHERE pno = 104` filtrini yozing.",
    "tags": [
      "2NF",
      "NORMALIZATION",
      "PROJECT"
    ],
    "solutions": [
      "SELECT pname, ploc, budget FROM project WHERE pno = 104"
    ],
    "task": "Loyiha 104 bo'yicha loyiha nomi (`pname`), joylashuvi (`ploc`) va byudjetini (`budget`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 40,
    "sector": 3,
    "difficulty": "Floor 3 • Medium",
    "source": "L07 Slide 32 & S08 Task 3.10 • 2NF Normalization",
    "title": "2NF Dekompozitsiya: Qisman Bog'liqlikni Yo'qotish (10-Bosqich)",
    "story": "Loyiha va xodimlar kompozit kalitli jadvalida qisman bog'liqlik (partial dependency) mavjud bo'lsa, jadval 2NF talabiga javob bermaydi.",
    "taskUz": "Loyiha 105 bo'yicha loyiha nomi (`pname`), joylashuvi (`ploc`) va byudjetini (`budget`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `project` yoki `works_on`",
    "expectedSql": "SELECT pname, ploc, budget FROM project WHERE pno = 105",
    "hint": "`WHERE pno = 105` filtrini yozing.",
    "tags": [
      "2NF",
      "NORMALIZATION",
      "PROJECT"
    ],
    "solutions": [
      "SELECT pname, ploc, budget FROM project WHERE pno = 105"
    ],
    "task": "Loyiha 105 bo'yicha loyiha nomi (`pname`), joylashuvi (`ploc`) va byudjetini (`budget`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 41,
    "sector": 3,
    "difficulty": "Floor 3 • Medium",
    "source": "L07 Slide 32 & S08 Task 3.11 • 2NF Normalization",
    "title": "2NF Dekompozitsiya: Qisman Bog'liqlikni Yo'qotish (11-Bosqich)",
    "story": "Loyiha va xodimlar kompozit kalitli jadvalida qisman bog'liqlik (partial dependency) mavjud bo'lsa, jadval 2NF talabiga javob bermaydi.",
    "taskUz": "Loyiha 101 bo'yicha loyiha nomi (`pname`), joylashuvi (`ploc`) va byudjetini (`budget`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `project` yoki `works_on`",
    "expectedSql": "SELECT pname, ploc, budget FROM project WHERE pno = 101",
    "hint": "`WHERE pno = 101` filtrini yozing.",
    "tags": [
      "2NF",
      "NORMALIZATION",
      "PROJECT"
    ],
    "solutions": [
      "SELECT pname, ploc, budget FROM project WHERE pno = 101"
    ],
    "task": "Loyiha 101 bo'yicha loyiha nomi (`pname`), joylashuvi (`ploc`) va byudjetini (`budget`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 42,
    "sector": 3,
    "difficulty": "Floor 3 • Medium",
    "source": "L07 Slide 32 & S08 Task 3.12 • 2NF Normalization",
    "title": "2NF Dekompozitsiya: Qisman Bog'liqlikni Yo'qotish (12-Bosqich)",
    "story": "Loyiha va xodimlar kompozit kalitli jadvalida qisman bog'liqlik (partial dependency) mavjud bo'lsa, jadval 2NF talabiga javob bermaydi.",
    "taskUz": "Loyiha 102 bo'yicha loyiha nomi (`pname`), joylashuvi (`ploc`) va byudjetini (`budget`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `project` yoki `works_on`",
    "expectedSql": "SELECT pname, ploc, budget FROM project WHERE pno = 102",
    "hint": "`WHERE pno = 102` filtrini yozing.",
    "tags": [
      "2NF",
      "NORMALIZATION",
      "PROJECT"
    ],
    "solutions": [
      "SELECT pname, ploc, budget FROM project WHERE pno = 102"
    ],
    "task": "Loyiha 102 bo'yicha loyiha nomi (`pname`), joylashuvi (`ploc`) va byudjetini (`budget`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 43,
    "sector": 3,
    "difficulty": "Floor 3 • Medium",
    "source": "L07 Slide 32 & S08 Task 3.13 • 2NF Normalization",
    "title": "2NF Dekompozitsiya: Qisman Bog'liqlikni Yo'qotish (13-Bosqich)",
    "story": "Loyiha va xodimlar kompozit kalitli jadvalida qisman bog'liqlik (partial dependency) mavjud bo'lsa, jadval 2NF talabiga javob bermaydi.",
    "taskUz": "Loyiha 103 bo'yicha loyiha nomi (`pname`), joylashuvi (`ploc`) va byudjetini (`budget`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `project` yoki `works_on`",
    "expectedSql": "SELECT pname, ploc, budget FROM project WHERE pno = 103",
    "hint": "`WHERE pno = 103` filtrini yozing.",
    "tags": [
      "2NF",
      "NORMALIZATION",
      "PROJECT"
    ],
    "solutions": [
      "SELECT pname, ploc, budget FROM project WHERE pno = 103"
    ],
    "task": "Loyiha 103 bo'yicha loyiha nomi (`pname`), joylashuvi (`ploc`) va byudjetini (`budget`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 44,
    "sector": 3,
    "difficulty": "Floor 3 • Medium",
    "source": "L07 Slide 32 & S08 Task 3.14 • 2NF Normalization",
    "title": "2NF Dekompozitsiya: Qisman Bog'liqlikni Yo'qotish (14-Bosqich)",
    "story": "Loyiha va xodimlar kompozit kalitli jadvalida qisman bog'liqlik (partial dependency) mavjud bo'lsa, jadval 2NF talabiga javob bermaydi.",
    "taskUz": "Loyiha 104 bo'yicha loyiha nomi (`pname`), joylashuvi (`ploc`) va byudjetini (`budget`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `project` yoki `works_on`",
    "expectedSql": "SELECT pname, ploc, budget FROM project WHERE pno = 104",
    "hint": "`WHERE pno = 104` filtrini yozing.",
    "tags": [
      "2NF",
      "NORMALIZATION",
      "PROJECT"
    ],
    "solutions": [
      "SELECT pname, ploc, budget FROM project WHERE pno = 104"
    ],
    "task": "Loyiha 104 bo'yicha loyiha nomi (`pname`), joylashuvi (`ploc`) va byudjetini (`budget`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 45,
    "sector": 3,
    "difficulty": "Floor 3 • Medium",
    "source": "L07 Slide 32 & S08 Task 3.15 • 2NF Normalization",
    "title": "2NF Yakuniy Tekshiruv: works_on va project Birlashmasi",
    "story": "2NF ga ajratilgan jadvallardan xodimlar ishlagan soatlarini loyiha nomlari bilan birga ko'rish talab etiladi.",
    "taskUz": "Loyiha 101 da ishlagan xodimlarning `empno` va `hours` ma'lumotlarini chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `project` yoki `works_on`",
    "expectedSql": "SELECT empno, hours FROM works_on WHERE pno = 101",
    "hint": "`WHERE pno = 101` yozing.",
    "tags": [
      "2NF",
      "NORMALIZATION",
      "PROJECT"
    ],
    "solutions": [
      "SELECT empno, hours FROM works_on WHERE pno = 101"
    ],
    "task": "Loyiha 101 da ishlagan xodimlarning `empno` va `hours` ma'lumotlarini chiqaring.",
    "explanation": ""
  },
  {
    "id": 46,
    "sector": 4,
    "difficulty": "Floor 4 • Hard",
    "source": "L07 Slide 38 & S08 Task 4.1 • 3NF Car Workshop",
    "title": "Avtoservis 3NF Tahlili: Avtomobil Egalari",
    "story": "Avtoservis jurnali Cobalt avtomobilining egasini aniqlashni talab qilmoqda.",
    "taskUz": "Modeli 'Cobalt' bo'lgan avtomashinalarning `reg_no` va egasi (`owner`) ro'yxatini chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `car_service`",
    "expectedSql": "SELECT DISTINCT reg_no, owner FROM car_service WHERE model = 'Cobalt'",
    "hint": "`WHERE model = 'Cobalt'` shartidan foydalaning.",
    "tags": [
      "3NF",
      "CAR_SERVICE",
      "OWNER"
    ],
    "solutions": [
      "SELECT DISTINCT reg_no, owner FROM car_service WHERE model = 'Cobalt'"
    ],
    "task": "Modeli 'Cobalt' bo'lgan avtomashinalarning `reg_no` va egasi (`owner`) ro'yxatini chiqaring.",
    "explanation": ""
  },
  {
    "id": 47,
    "sector": 4,
    "difficulty": "Floor 4 • Hard",
    "source": "L07 Slide 38 & S08 Task 4.2 • 3NF Car Workshop",
    "title": "Mexanik Rustam Telefon Raqami (Tranzitiv Bog'liqlik)",
    "story": "Mexanik ID orqali uning telefonini aniqlash tranzitiv bog'liqlik misolidir (job_id -> mech_id -> mech_phone).",
    "taskUz": "Mexanik 'Rustam'ning `mech_id` va telefon raqamini (`mech_phone`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `car_service`",
    "expectedSql": "SELECT DISTINCT mech_id, mech_phone FROM car_service WHERE mech_name = 'Rustam'",
    "hint": "`WHERE mech_name = 'Rustam'` deb yozing.",
    "tags": [
      "3NF",
      "TRANSITIVE",
      "MECHANIC"
    ],
    "solutions": [
      "SELECT DISTINCT mech_id, mech_phone FROM car_service WHERE mech_name = 'Rustam'"
    ],
    "task": "Mexanik 'Rustam'ning `mech_id` va telefon raqamini (`mech_phone`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 48,
    "sector": 4,
    "difficulty": "Floor 4 • Hard",
    "source": "L07 Slide 38 & S08 Task 4.3 • 3NF Car Workshop",
    "title": "Avtomobil Qismlari Narxi (part_code -> part_price)",
    "story": "Ehtiyot qismlar narxi buyurtmaga emas, balki qism kodiga bog'liq.",
    "taskUz": "Moy filtri ('Oil Filter') ehtiyot qismining `part_code` va narxini (`part_price`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `car_service`",
    "expectedSql": "SELECT DISTINCT part_code, part_price FROM car_service WHERE part_name = 'Oil Filter'",
    "hint": "`WHERE part_name = 'Oil Filter'` shartini yozing.",
    "tags": [
      "3NF",
      "PARTS",
      "PRICE"
    ],
    "solutions": [
      "SELECT DISTINCT part_code, part_price FROM car_service WHERE part_name = 'Oil Filter'"
    ],
    "task": "Moy filtri ('Oil Filter') ehtiyot qismining `part_code` va narxini (`part_price`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 49,
    "sector": 4,
    "difficulty": "Floor 4 • Hard",
    "source": "L07 Slide 38 & S08 Task 4.4 • 3NF Car Workshop",
    "title": "3NF Avtoservis Audit & Normalizatsiya (4-Topshiriq)",
    "story": "3NF qoidasi bo'yicha no-kalit atributlar boshqa no-kalit atributga bog'liq bo'lmasligi lozim.",
    "taskUz": "Ish ID 1001 bo'yicha sarflangan barcha ehtiyot qismlarning `part_code` va `part_price` qiymatlarini chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `car_service`",
    "expectedSql": "SELECT part_code, part_price FROM car_service WHERE job_id = 1001",
    "hint": "`WHERE job_id = 1001` filtrini yozing.",
    "tags": [
      "3NF",
      "JOB",
      "CAR_SERVICE"
    ],
    "solutions": [
      "SELECT part_code, part_price FROM car_service WHERE job_id = 1001"
    ],
    "task": "Ish ID 1001 bo'yicha sarflangan barcha ehtiyot qismlarning `part_code` va `part_price` qiymatlarini chiqaring.",
    "explanation": ""
  },
  {
    "id": 50,
    "sector": 4,
    "difficulty": "Floor 4 • Hard",
    "source": "L07 Slide 38 & S08 Task 4.5 • 3NF Car Workshop",
    "title": "3NF Avtoservis Audit & Normalizatsiya (5-Topshiriq)",
    "story": "3NF qoidasi bo'yicha no-kalit atributlar boshqa no-kalit atributga bog'liq bo'lmasligi lozim.",
    "taskUz": "Ish ID 1001 bo'yicha sarflangan barcha ehtiyot qismlarning `part_code` va `part_price` qiymatlarini chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `car_service`",
    "expectedSql": "SELECT part_code, part_price FROM car_service WHERE job_id = 1001",
    "hint": "`WHERE job_id = 1001` filtrini yozing.",
    "tags": [
      "3NF",
      "JOB",
      "CAR_SERVICE"
    ],
    "solutions": [
      "SELECT part_code, part_price FROM car_service WHERE job_id = 1001"
    ],
    "task": "Ish ID 1001 bo'yicha sarflangan barcha ehtiyot qismlarning `part_code` va `part_price` qiymatlarini chiqaring.",
    "explanation": ""
  }
];
