var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);

_scope.QUESTIONS_1_50 = [
  {
    "id": 1,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L09 Part 1 Slide 2-7 • CIA Triad & Threats",
    "title": "CIA Triadasi: Maxfiylik, Yaxlitlik va Mavjudlik",
    "story": "Kompaniyadagi rollarni tekshirib, kimlar tizimga bevosita login qila olishini aniqlang.",
    "taskUz": "Login qilish ruxsati bor bo'lgan (`can_login = true`) xavfsizlik rollarini chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Standart SQL so'rovi",
    "expectedSql": "SELECT role_name, can_login, is_superuser FROM security_roles WHERE can_login = true",
    "hint": "`WHERE can_login = true` shartini bering.",
    "tags": [
      "SECURITY",
      "CIA_TRIAD",
      "ROLES"
    ],
    "solutions": [
      "SELECT role_name, can_login, is_superuser FROM security_roles WHERE can_login = true"
    ],
    "task": "Login qilish ruxsati bor bo'lgan (`can_login = true`) xavfsizlik rollarini chiqaring.",
    "explanation": ""
  },
  {
    "id": 2,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L09 Part 1 Slide 2-7 • CIA Triad & Threats",
    "title": "Xavfsizlik Arxitekturasi & CIA Triadasi (2-Qadam)",
    "story": "L09 Part 1: Kompaniya ma'lumotlar bazasi maxfiylik (Confidentiality), yaxlitlik (Integrity) va doimiy mavjudlik (Availability) talablariga mos bo'lishi kerak.",
    "taskUz": "Tizim xavfsizlik rollari ro'yxatini `security_roles` jadvalidan chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Standart SQL so'rovi",
    "expectedSql": "SELECT role_name, can_login, is_superuser FROM security_roles",
    "hint": "`SELECT role_name, can_login, is_superuser FROM security_roles` yozing.",
    "tags": [
      "SECURITY",
      "CIA_TRIAD",
      "ROLES"
    ],
    "solutions": [
      "SELECT role_name, can_login, is_superuser FROM security_roles"
    ],
    "task": "Tizim xavfsizlik rollari ro'yxatini `security_roles` jadvalidan chiqaring.",
    "explanation": ""
  },
  {
    "id": 3,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L09 Part 1 Slide 2-7 • CIA Triad & Threats",
    "title": "Xavfsizlik Arxitekturasi & CIA Triadasi (3-Qadam)",
    "story": "L09 Part 1: Kompaniya ma'lumotlar bazasi maxfiylik (Confidentiality), yaxlitlik (Integrity) va doimiy mavjudlik (Availability) talablariga mos bo'lishi kerak.",
    "taskUz": "Tizim xavfsizlik rollari ro'yxatini `security_roles` jadvalidan chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Standart SQL so'rovi",
    "expectedSql": "SELECT role_name, can_login, is_superuser FROM security_roles",
    "hint": "`SELECT role_name, can_login, is_superuser FROM security_roles` yozing.",
    "tags": [
      "SECURITY",
      "CIA_TRIAD",
      "ROLES"
    ],
    "solutions": [
      "SELECT role_name, can_login, is_superuser FROM security_roles"
    ],
    "task": "Tizim xavfsizlik rollari ro'yxatini `security_roles` jadvalidan chiqaring.",
    "explanation": ""
  },
  {
    "id": 4,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L09 Part 1 Slide 2-7 • CIA Triad & Threats",
    "title": "Xavfsizlik Arxitekturasi & CIA Triadasi (4-Qadam)",
    "story": "L09 Part 1: Kompaniya ma'lumotlar bazasi maxfiylik (Confidentiality), yaxlitlik (Integrity) va doimiy mavjudlik (Availability) talablariga mos bo'lishi kerak.",
    "taskUz": "Tizim xavfsizlik rollari ro'yxatini `security_roles` jadvalidan chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Standart SQL so'rovi",
    "expectedSql": "SELECT role_name, can_login, is_superuser FROM security_roles",
    "hint": "`SELECT role_name, can_login, is_superuser FROM security_roles` yozing.",
    "tags": [
      "SECURITY",
      "CIA_TRIAD",
      "ROLES"
    ],
    "solutions": [
      "SELECT role_name, can_login, is_superuser FROM security_roles"
    ],
    "task": "Tizim xavfsizlik rollari ro'yxatini `security_roles` jadvalidan chiqaring.",
    "explanation": ""
  },
  {
    "id": 5,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L09 Part 1 Slide 2-7 • CIA Triad & Threats",
    "title": "Xavfsizlik Arxitekturasi & CIA Triadasi (5-Qadam)",
    "story": "L09 Part 1: Kompaniya ma'lumotlar bazasi maxfiylik (Confidentiality), yaxlitlik (Integrity) va doimiy mavjudlik (Availability) talablariga mos bo'lishi kerak.",
    "taskUz": "Tizim xavfsizlik rollari ro'yxatini `security_roles` jadvalidan chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Standart SQL so'rovi",
    "expectedSql": "SELECT role_name, can_login, is_superuser FROM security_roles",
    "hint": "`SELECT role_name, can_login, is_superuser FROM security_roles` yozing.",
    "tags": [
      "SECURITY",
      "CIA_TRIAD",
      "ROLES"
    ],
    "solutions": [
      "SELECT role_name, can_login, is_superuser FROM security_roles"
    ],
    "task": "Tizim xavfsizlik rollari ro'yxatini `security_roles` jadvalidan chiqaring.",
    "explanation": ""
  },
  {
    "id": 6,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L09 Part 1 Slide 2-7 • CIA Triad & Threats",
    "title": "Xavfsizlik Arxitekturasi & CIA Triadasi (6-Qadam)",
    "story": "L09 Part 1: Kompaniya ma'lumotlar bazasi maxfiylik (Confidentiality), yaxlitlik (Integrity) va doimiy mavjudlik (Availability) talablariga mos bo'lishi kerak.",
    "taskUz": "Tizim xavfsizlik rollari ro'yxatini `security_roles` jadvalidan chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Standart SQL so'rovi",
    "expectedSql": "SELECT role_name, can_login, is_superuser FROM security_roles",
    "hint": "`SELECT role_name, can_login, is_superuser FROM security_roles` yozing.",
    "tags": [
      "SECURITY",
      "CIA_TRIAD",
      "ROLES"
    ],
    "solutions": [
      "SELECT role_name, can_login, is_superuser FROM security_roles"
    ],
    "task": "Tizim xavfsizlik rollari ro'yxatini `security_roles` jadvalidan chiqaring.",
    "explanation": ""
  },
  {
    "id": 7,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L09 Part 1 Slide 2-7 • CIA Triad & Threats",
    "title": "Xavfsizlik Arxitekturasi & CIA Triadasi (7-Qadam)",
    "story": "L09 Part 1: Kompaniya ma'lumotlar bazasi maxfiylik (Confidentiality), yaxlitlik (Integrity) va doimiy mavjudlik (Availability) talablariga mos bo'lishi kerak.",
    "taskUz": "Tizim xavfsizlik rollari ro'yxatini `security_roles` jadvalidan chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Standart SQL so'rovi",
    "expectedSql": "SELECT role_name, can_login, is_superuser FROM security_roles",
    "hint": "`SELECT role_name, can_login, is_superuser FROM security_roles` yozing.",
    "tags": [
      "SECURITY",
      "CIA_TRIAD",
      "ROLES"
    ],
    "solutions": [
      "SELECT role_name, can_login, is_superuser FROM security_roles"
    ],
    "task": "Tizim xavfsizlik rollari ro'yxatini `security_roles` jadvalidan chiqaring.",
    "explanation": ""
  },
  {
    "id": 8,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L09 Part 1 Slide 2-7 • CIA Triad & Threats",
    "title": "Xavfsizlik Arxitekturasi & CIA Triadasi (8-Qadam)",
    "story": "L09 Part 1: Kompaniya ma'lumotlar bazasi maxfiylik (Confidentiality), yaxlitlik (Integrity) va doimiy mavjudlik (Availability) talablariga mos bo'lishi kerak.",
    "taskUz": "Tizim xavfsizlik rollari ro'yxatini `security_roles` jadvalidan chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Standart SQL so'rovi",
    "expectedSql": "SELECT role_name, can_login, is_superuser FROM security_roles",
    "hint": "`SELECT role_name, can_login, is_superuser FROM security_roles` yozing.",
    "tags": [
      "SECURITY",
      "CIA_TRIAD",
      "ROLES"
    ],
    "solutions": [
      "SELECT role_name, can_login, is_superuser FROM security_roles"
    ],
    "task": "Tizim xavfsizlik rollari ro'yxatini `security_roles` jadvalidan chiqaring.",
    "explanation": ""
  },
  {
    "id": 9,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L09 Part 1 Slide 2-7 • CIA Triad & Threats",
    "title": "Xavfsizlik Arxitekturasi & CIA Triadasi (9-Qadam)",
    "story": "L09 Part 1: Kompaniya ma'lumotlar bazasi maxfiylik (Confidentiality), yaxlitlik (Integrity) va doimiy mavjudlik (Availability) talablariga mos bo'lishi kerak.",
    "taskUz": "Tizim xavfsizlik rollari ro'yxatini `security_roles` jadvalidan chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Standart SQL so'rovi",
    "expectedSql": "SELECT role_name, can_login, is_superuser FROM security_roles",
    "hint": "`SELECT role_name, can_login, is_superuser FROM security_roles` yozing.",
    "tags": [
      "SECURITY",
      "CIA_TRIAD",
      "ROLES"
    ],
    "solutions": [
      "SELECT role_name, can_login, is_superuser FROM security_roles"
    ],
    "task": "Tizim xavfsizlik rollari ro'yxatini `security_roles` jadvalidan chiqaring.",
    "explanation": ""
  },
  {
    "id": 10,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L09 Part 1 Slide 2-7 • CIA Triad & Threats",
    "title": "Xavfsizlik Arxitekturasi & CIA Triadasi (10-Qadam)",
    "story": "L09 Part 1: Kompaniya ma'lumotlar bazasi maxfiylik (Confidentiality), yaxlitlik (Integrity) va doimiy mavjudlik (Availability) talablariga mos bo'lishi kerak.",
    "taskUz": "Tizim xavfsizlik rollari ro'yxatini `security_roles` jadvalidan chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Standart SQL so'rovi",
    "expectedSql": "SELECT role_name, can_login, is_superuser FROM security_roles",
    "hint": "`SELECT role_name, can_login, is_superuser FROM security_roles` yozing.",
    "tags": [
      "SECURITY",
      "CIA_TRIAD",
      "ROLES"
    ],
    "solutions": [
      "SELECT role_name, can_login, is_superuser FROM security_roles"
    ],
    "task": "Tizim xavfsizlik rollari ro'yxatini `security_roles` jadvalidan chiqaring.",
    "explanation": ""
  },
  {
    "id": 11,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L09 Part 1 Slide 2-7 • CIA Triad & Threats",
    "title": "Xavfsizlik Arxitekturasi & CIA Triadasi (11-Qadam)",
    "story": "L09 Part 1: Kompaniya ma'lumotlar bazasi maxfiylik (Confidentiality), yaxlitlik (Integrity) va doimiy mavjudlik (Availability) talablariga mos bo'lishi kerak.",
    "taskUz": "Tizim xavfsizlik rollari ro'yxatini `security_roles` jadvalidan chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Standart SQL so'rovi",
    "expectedSql": "SELECT role_name, can_login, is_superuser FROM security_roles",
    "hint": "`SELECT role_name, can_login, is_superuser FROM security_roles` yozing.",
    "tags": [
      "SECURITY",
      "CIA_TRIAD",
      "ROLES"
    ],
    "solutions": [
      "SELECT role_name, can_login, is_superuser FROM security_roles"
    ],
    "task": "Tizim xavfsizlik rollari ro'yxatini `security_roles` jadvalidan chiqaring.",
    "explanation": ""
  },
  {
    "id": 12,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L09 Part 1 Slide 2-7 • CIA Triad & Threats",
    "title": "Xavfsizlik Arxitekturasi & CIA Triadasi (12-Qadam)",
    "story": "L09 Part 1: Kompaniya ma'lumotlar bazasi maxfiylik (Confidentiality), yaxlitlik (Integrity) va doimiy mavjudlik (Availability) talablariga mos bo'lishi kerak.",
    "taskUz": "Tizim xavfsizlik rollari ro'yxatini `security_roles` jadvalidan chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Standart SQL so'rovi",
    "expectedSql": "SELECT role_name, can_login, is_superuser FROM security_roles",
    "hint": "`SELECT role_name, can_login, is_superuser FROM security_roles` yozing.",
    "tags": [
      "SECURITY",
      "CIA_TRIAD",
      "ROLES"
    ],
    "solutions": [
      "SELECT role_name, can_login, is_superuser FROM security_roles"
    ],
    "task": "Tizim xavfsizlik rollari ro'yxatini `security_roles` jadvalidan chiqaring.",
    "explanation": ""
  },
  {
    "id": 13,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L09 Part 1 Slide 2-7 • CIA Triad & Threats",
    "title": "Xavfsizlik Arxitekturasi & CIA Triadasi (13-Qadam)",
    "story": "L09 Part 1: Kompaniya ma'lumotlar bazasi maxfiylik (Confidentiality), yaxlitlik (Integrity) va doimiy mavjudlik (Availability) talablariga mos bo'lishi kerak.",
    "taskUz": "Tizim xavfsizlik rollari ro'yxatini `security_roles` jadvalidan chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Standart SQL so'rovi",
    "expectedSql": "SELECT role_name, can_login, is_superuser FROM security_roles",
    "hint": "`SELECT role_name, can_login, is_superuser FROM security_roles` yozing.",
    "tags": [
      "SECURITY",
      "CIA_TRIAD",
      "ROLES"
    ],
    "solutions": [
      "SELECT role_name, can_login, is_superuser FROM security_roles"
    ],
    "task": "Tizim xavfsizlik rollari ro'yxatini `security_roles` jadvalidan chiqaring.",
    "explanation": ""
  },
  {
    "id": 14,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L09 Part 1 Slide 2-7 • CIA Triad & Threats",
    "title": "Xavfsizlik Arxitekturasi & CIA Triadasi (14-Qadam)",
    "story": "L09 Part 1: Kompaniya ma'lumotlar bazasi maxfiylik (Confidentiality), yaxlitlik (Integrity) va doimiy mavjudlik (Availability) talablariga mos bo'lishi kerak.",
    "taskUz": "Tizim xavfsizlik rollari ro'yxatini `security_roles` jadvalidan chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Standart SQL so'rovi",
    "expectedSql": "SELECT role_name, can_login, is_superuser FROM security_roles",
    "hint": "`SELECT role_name, can_login, is_superuser FROM security_roles` yozing.",
    "tags": [
      "SECURITY",
      "CIA_TRIAD",
      "ROLES"
    ],
    "solutions": [
      "SELECT role_name, can_login, is_superuser FROM security_roles"
    ],
    "task": "Tizim xavfsizlik rollari ro'yxatini `security_roles` jadvalidan chiqaring.",
    "explanation": ""
  },
  {
    "id": 15,
    "sector": 1,
    "difficulty": "Floor 1 • Easy",
    "source": "L09 Part 1 Slide 2-7 • CIA Triad & Threats",
    "title": "Xavfsizlik Arxitekturasi & CIA Triadasi (15-Qadam)",
    "story": "L09 Part 1: Kompaniya ma'lumotlar bazasi maxfiylik (Confidentiality), yaxlitlik (Integrity) va doimiy mavjudlik (Availability) talablariga mos bo'lishi kerak.",
    "taskUz": "Tizim xavfsizlik rollari ro'yxatini `security_roles` jadvalidan chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Standart SQL so'rovi",
    "expectedSql": "SELECT role_name, can_login, is_superuser FROM security_roles",
    "hint": "`SELECT role_name, can_login, is_superuser FROM security_roles` yozing.",
    "tags": [
      "SECURITY",
      "CIA_TRIAD",
      "ROLES"
    ],
    "solutions": [
      "SELECT role_name, can_login, is_superuser FROM security_roles"
    ],
    "task": "Tizim xavfsizlik rollari ro'yxatini `security_roles` jadvalidan chiqaring.",
    "explanation": ""
  },
  {
    "id": 16,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "L09 Part 1 Slide 8-15 • Access Control Models",
    "title": "RBAC Modeli: Superuser Rollarini Aniqlash",
    "story": "Tizimda cheksiz vakolatga ega bo'lgan rollarni audit qilish zarur.",
    "taskUz": "`is_superuser = true` bo'lgan barcha superuser rollarini chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Standart SQL so'rovi",
    "expectedSql": "SELECT role_name, is_superuser FROM security_roles WHERE is_superuser = true",
    "hint": "`WHERE is_superuser = true` yozing.",
    "tags": [
      "DAC",
      "MAC",
      "RBAC"
    ],
    "solutions": [
      "SELECT role_name, is_superuser FROM security_roles WHERE is_superuser = true"
    ],
    "task": "`is_superuser = true` bo'lgan barcha superuser rollarini chiqaring.",
    "explanation": ""
  },
  {
    "id": 17,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "L09 Part 1 Slide 8-15 • Access Control Models",
    "title": "Kirishni Boshqarish Modellari (DAC/MAC/RBAC) (2-Topshiriq)",
    "story": "L09 Part 1: DAC da obyekt egasi huquq beradi, MAC da tizim xavfsizlik yorliqlari orqali boshqaradi, RBAC da esa foydalanuvchilar rollarga biriktiriladi.",
    "taskUz": "Kompaniya rollari va huquqlarini tekshirish uchun `security_roles` jadvalidan ma'lumotlarni chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Standart SQL so'rovi",
    "expectedSql": "SELECT role_name, is_superuser FROM security_roles",
    "hint": "`SELECT role_name, is_superuser FROM security_roles` deb yozing.",
    "tags": [
      "DAC",
      "MAC",
      "RBAC"
    ],
    "solutions": [
      "SELECT role_name, is_superuser FROM security_roles"
    ],
    "task": "Kompaniya rollari va huquqlarini tekshirish uchun `security_roles` jadvalidan ma'lumotlarni chiqaring.",
    "explanation": ""
  },
  {
    "id": 18,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "L09 Part 1 Slide 8-15 • Access Control Models",
    "title": "Kirishni Boshqarish Modellari (DAC/MAC/RBAC) (3-Topshiriq)",
    "story": "L09 Part 1: DAC da obyekt egasi huquq beradi, MAC da tizim xavfsizlik yorliqlari orqali boshqaradi, RBAC da esa foydalanuvchilar rollarga biriktiriladi.",
    "taskUz": "Kompaniya rollari va huquqlarini tekshirish uchun `security_roles` jadvalidan ma'lumotlarni chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Standart SQL so'rovi",
    "expectedSql": "SELECT role_name, is_superuser FROM security_roles",
    "hint": "`SELECT role_name, is_superuser FROM security_roles` deb yozing.",
    "tags": [
      "DAC",
      "MAC",
      "RBAC"
    ],
    "solutions": [
      "SELECT role_name, is_superuser FROM security_roles"
    ],
    "task": "Kompaniya rollari va huquqlarini tekshirish uchun `security_roles` jadvalidan ma'lumotlarni chiqaring.",
    "explanation": ""
  },
  {
    "id": 19,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "L09 Part 1 Slide 8-15 • Access Control Models",
    "title": "Kirishni Boshqarish Modellari (DAC/MAC/RBAC) (4-Topshiriq)",
    "story": "L09 Part 1: DAC da obyekt egasi huquq beradi, MAC da tizim xavfsizlik yorliqlari orqali boshqaradi, RBAC da esa foydalanuvchilar rollarga biriktiriladi.",
    "taskUz": "Kompaniya rollari va huquqlarini tekshirish uchun `security_roles` jadvalidan ma'lumotlarni chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Standart SQL so'rovi",
    "expectedSql": "SELECT role_name, is_superuser FROM security_roles",
    "hint": "`SELECT role_name, is_superuser FROM security_roles` deb yozing.",
    "tags": [
      "DAC",
      "MAC",
      "RBAC"
    ],
    "solutions": [
      "SELECT role_name, is_superuser FROM security_roles"
    ],
    "task": "Kompaniya rollari va huquqlarini tekshirish uchun `security_roles` jadvalidan ma'lumotlarni chiqaring.",
    "explanation": ""
  },
  {
    "id": 20,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "L09 Part 1 Slide 8-15 • Access Control Models",
    "title": "Kirishni Boshqarish Modellari (DAC/MAC/RBAC) (5-Topshiriq)",
    "story": "L09 Part 1: DAC da obyekt egasi huquq beradi, MAC da tizim xavfsizlik yorliqlari orqali boshqaradi, RBAC da esa foydalanuvchilar rollarga biriktiriladi.",
    "taskUz": "Kompaniya rollari va huquqlarini tekshirish uchun `security_roles` jadvalidan ma'lumotlarni chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Standart SQL so'rovi",
    "expectedSql": "SELECT role_name, is_superuser FROM security_roles",
    "hint": "`SELECT role_name, is_superuser FROM security_roles` deb yozing.",
    "tags": [
      "DAC",
      "MAC",
      "RBAC"
    ],
    "solutions": [
      "SELECT role_name, is_superuser FROM security_roles"
    ],
    "task": "Kompaniya rollari va huquqlarini tekshirish uchun `security_roles` jadvalidan ma'lumotlarni chiqaring.",
    "explanation": ""
  },
  {
    "id": 21,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "L09 Part 1 Slide 8-15 • Access Control Models",
    "title": "Kirishni Boshqarish Modellari (DAC/MAC/RBAC) (6-Topshiriq)",
    "story": "L09 Part 1: DAC da obyekt egasi huquq beradi, MAC da tizim xavfsizlik yorliqlari orqali boshqaradi, RBAC da esa foydalanuvchilar rollarga biriktiriladi.",
    "taskUz": "Kompaniya rollari va huquqlarini tekshirish uchun `security_roles` jadvalidan ma'lumotlarni chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Standart SQL so'rovi",
    "expectedSql": "SELECT role_name, is_superuser FROM security_roles",
    "hint": "`SELECT role_name, is_superuser FROM security_roles` deb yozing.",
    "tags": [
      "DAC",
      "MAC",
      "RBAC"
    ],
    "solutions": [
      "SELECT role_name, is_superuser FROM security_roles"
    ],
    "task": "Kompaniya rollari va huquqlarini tekshirish uchun `security_roles` jadvalidan ma'lumotlarni chiqaring.",
    "explanation": ""
  },
  {
    "id": 22,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "L09 Part 1 Slide 8-15 • Access Control Models",
    "title": "Kirishni Boshqarish Modellari (DAC/MAC/RBAC) (7-Topshiriq)",
    "story": "L09 Part 1: DAC da obyekt egasi huquq beradi, MAC da tizim xavfsizlik yorliqlari orqali boshqaradi, RBAC da esa foydalanuvchilar rollarga biriktiriladi.",
    "taskUz": "Kompaniya rollari va huquqlarini tekshirish uchun `security_roles` jadvalidan ma'lumotlarni chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Standart SQL so'rovi",
    "expectedSql": "SELECT role_name, is_superuser FROM security_roles",
    "hint": "`SELECT role_name, is_superuser FROM security_roles` deb yozing.",
    "tags": [
      "DAC",
      "MAC",
      "RBAC"
    ],
    "solutions": [
      "SELECT role_name, is_superuser FROM security_roles"
    ],
    "task": "Kompaniya rollari va huquqlarini tekshirish uchun `security_roles` jadvalidan ma'lumotlarni chiqaring.",
    "explanation": ""
  },
  {
    "id": 23,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "L09 Part 1 Slide 8-15 • Access Control Models",
    "title": "Kirishni Boshqarish Modellari (DAC/MAC/RBAC) (8-Topshiriq)",
    "story": "L09 Part 1: DAC da obyekt egasi huquq beradi, MAC da tizim xavfsizlik yorliqlari orqali boshqaradi, RBAC da esa foydalanuvchilar rollarga biriktiriladi.",
    "taskUz": "Kompaniya rollari va huquqlarini tekshirish uchun `security_roles` jadvalidan ma'lumotlarni chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Standart SQL so'rovi",
    "expectedSql": "SELECT role_name, is_superuser FROM security_roles",
    "hint": "`SELECT role_name, is_superuser FROM security_roles` deb yozing.",
    "tags": [
      "DAC",
      "MAC",
      "RBAC"
    ],
    "solutions": [
      "SELECT role_name, is_superuser FROM security_roles"
    ],
    "task": "Kompaniya rollari va huquqlarini tekshirish uchun `security_roles` jadvalidan ma'lumotlarni chiqaring.",
    "explanation": ""
  },
  {
    "id": 24,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "L09 Part 1 Slide 8-15 • Access Control Models",
    "title": "Kirishni Boshqarish Modellari (DAC/MAC/RBAC) (9-Topshiriq)",
    "story": "L09 Part 1: DAC da obyekt egasi huquq beradi, MAC da tizim xavfsizlik yorliqlari orqali boshqaradi, RBAC da esa foydalanuvchilar rollarga biriktiriladi.",
    "taskUz": "Kompaniya rollari va huquqlarini tekshirish uchun `security_roles` jadvalidan ma'lumotlarni chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Standart SQL so'rovi",
    "expectedSql": "SELECT role_name, is_superuser FROM security_roles",
    "hint": "`SELECT role_name, is_superuser FROM security_roles` deb yozing.",
    "tags": [
      "DAC",
      "MAC",
      "RBAC"
    ],
    "solutions": [
      "SELECT role_name, is_superuser FROM security_roles"
    ],
    "task": "Kompaniya rollari va huquqlarini tekshirish uchun `security_roles` jadvalidan ma'lumotlarni chiqaring.",
    "explanation": ""
  },
  {
    "id": 25,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "L09 Part 1 Slide 8-15 • Access Control Models",
    "title": "Kirishni Boshqarish Modellari (DAC/MAC/RBAC) (10-Topshiriq)",
    "story": "L09 Part 1: DAC da obyekt egasi huquq beradi, MAC da tizim xavfsizlik yorliqlari orqali boshqaradi, RBAC da esa foydalanuvchilar rollarga biriktiriladi.",
    "taskUz": "Kompaniya rollari va huquqlarini tekshirish uchun `security_roles` jadvalidan ma'lumotlarni chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Standart SQL so'rovi",
    "expectedSql": "SELECT role_name, is_superuser FROM security_roles",
    "hint": "`SELECT role_name, is_superuser FROM security_roles` deb yozing.",
    "tags": [
      "DAC",
      "MAC",
      "RBAC"
    ],
    "solutions": [
      "SELECT role_name, is_superuser FROM security_roles"
    ],
    "task": "Kompaniya rollari va huquqlarini tekshirish uchun `security_roles` jadvalidan ma'lumotlarni chiqaring.",
    "explanation": ""
  },
  {
    "id": 26,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "L09 Part 1 Slide 8-15 • Access Control Models",
    "title": "Kirishni Boshqarish Modellari (DAC/MAC/RBAC) (11-Topshiriq)",
    "story": "L09 Part 1: DAC da obyekt egasi huquq beradi, MAC da tizim xavfsizlik yorliqlari orqali boshqaradi, RBAC da esa foydalanuvchilar rollarga biriktiriladi.",
    "taskUz": "Kompaniya rollari va huquqlarini tekshirish uchun `security_roles` jadvalidan ma'lumotlarni chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Standart SQL so'rovi",
    "expectedSql": "SELECT role_name, is_superuser FROM security_roles",
    "hint": "`SELECT role_name, is_superuser FROM security_roles` deb yozing.",
    "tags": [
      "DAC",
      "MAC",
      "RBAC"
    ],
    "solutions": [
      "SELECT role_name, is_superuser FROM security_roles"
    ],
    "task": "Kompaniya rollari va huquqlarini tekshirish uchun `security_roles` jadvalidan ma'lumotlarni chiqaring.",
    "explanation": ""
  },
  {
    "id": 27,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "L09 Part 1 Slide 8-15 • Access Control Models",
    "title": "Kirishni Boshqarish Modellari (DAC/MAC/RBAC) (12-Topshiriq)",
    "story": "L09 Part 1: DAC da obyekt egasi huquq beradi, MAC da tizim xavfsizlik yorliqlari orqali boshqaradi, RBAC da esa foydalanuvchilar rollarga biriktiriladi.",
    "taskUz": "Kompaniya rollari va huquqlarini tekshirish uchun `security_roles` jadvalidan ma'lumotlarni chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Standart SQL so'rovi",
    "expectedSql": "SELECT role_name, is_superuser FROM security_roles",
    "hint": "`SELECT role_name, is_superuser FROM security_roles` deb yozing.",
    "tags": [
      "DAC",
      "MAC",
      "RBAC"
    ],
    "solutions": [
      "SELECT role_name, is_superuser FROM security_roles"
    ],
    "task": "Kompaniya rollari va huquqlarini tekshirish uchun `security_roles` jadvalidan ma'lumotlarni chiqaring.",
    "explanation": ""
  },
  {
    "id": 28,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "L09 Part 1 Slide 8-15 • Access Control Models",
    "title": "Kirishni Boshqarish Modellari (DAC/MAC/RBAC) (13-Topshiriq)",
    "story": "L09 Part 1: DAC da obyekt egasi huquq beradi, MAC da tizim xavfsizlik yorliqlari orqali boshqaradi, RBAC da esa foydalanuvchilar rollarga biriktiriladi.",
    "taskUz": "Kompaniya rollari va huquqlarini tekshirish uchun `security_roles` jadvalidan ma'lumotlarni chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Standart SQL so'rovi",
    "expectedSql": "SELECT role_name, is_superuser FROM security_roles",
    "hint": "`SELECT role_name, is_superuser FROM security_roles` deb yozing.",
    "tags": [
      "DAC",
      "MAC",
      "RBAC"
    ],
    "solutions": [
      "SELECT role_name, is_superuser FROM security_roles"
    ],
    "task": "Kompaniya rollari va huquqlarini tekshirish uchun `security_roles` jadvalidan ma'lumotlarni chiqaring.",
    "explanation": ""
  },
  {
    "id": 29,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "L09 Part 1 Slide 8-15 • Access Control Models",
    "title": "Kirishni Boshqarish Modellari (DAC/MAC/RBAC) (14-Topshiriq)",
    "story": "L09 Part 1: DAC da obyekt egasi huquq beradi, MAC da tizim xavfsizlik yorliqlari orqali boshqaradi, RBAC da esa foydalanuvchilar rollarga biriktiriladi.",
    "taskUz": "Kompaniya rollari va huquqlarini tekshirish uchun `security_roles` jadvalidan ma'lumotlarni chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Standart SQL so'rovi",
    "expectedSql": "SELECT role_name, is_superuser FROM security_roles",
    "hint": "`SELECT role_name, is_superuser FROM security_roles` deb yozing.",
    "tags": [
      "DAC",
      "MAC",
      "RBAC"
    ],
    "solutions": [
      "SELECT role_name, is_superuser FROM security_roles"
    ],
    "task": "Kompaniya rollari va huquqlarini tekshirish uchun `security_roles` jadvalidan ma'lumotlarni chiqaring.",
    "explanation": ""
  },
  {
    "id": 30,
    "sector": 2,
    "difficulty": "Floor 2 • Medium",
    "source": "L09 Part 1 Slide 8-15 • Access Control Models",
    "title": "Kirishni Boshqarish Modellari (DAC/MAC/RBAC) (15-Topshiriq)",
    "story": "L09 Part 1: DAC da obyekt egasi huquq beradi, MAC da tizim xavfsizlik yorliqlari orqali boshqaradi, RBAC da esa foydalanuvchilar rollarga biriktiriladi.",
    "taskUz": "Kompaniya rollari va huquqlarini tekshirish uchun `security_roles` jadvalidan ma'lumotlarni chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• Standart SQL so'rovi",
    "expectedSql": "SELECT role_name, is_superuser FROM security_roles",
    "hint": "`SELECT role_name, is_superuser FROM security_roles` deb yozing.",
    "tags": [
      "DAC",
      "MAC",
      "RBAC"
    ],
    "solutions": [
      "SELECT role_name, is_superuser FROM security_roles"
    ],
    "task": "Kompaniya rollari va huquqlarini tekshirish uchun `security_roles` jadvalidan ma'lumotlarni chiqaring.",
    "explanation": ""
  },
  {
    "id": 31,
    "sector": 3,
    "difficulty": "Floor 3 • Medium",
    "source": "L09 Part 1 Slide 12-16 • PostgreSQL Roles & Grants",
    "title": "Yangi Rol Yaratish: CREATE ROLE hr_analyst",
    "story": "L09 Part 1 Slide 12: HR tahlilchilari uchun tizimga login qila olmaydigan (guruh) rolini ochish.",
    "taskUz": "`hr_analyst` nomli rolni `CREATE ROLE` orqali yarating.\n\n📋 **Kutilayotgan Buyruq:**\n• PostgreSQL DCL buyrug'i",
    "expectedSql": "CREATE ROLE hr_analyst NOLOGIN",
    "hint": "`CREATE ROLE hr_analyst NOLOGIN` deb yozing.",
    "tags": [
      "POSTGRES",
      "CREATE_ROLE",
      "RBAC"
    ],
    "solutions": [
      "CREATE ROLE hr_analyst NOLOGIN"
    ],
    "task": "`hr_analyst` nomli rolni `CREATE ROLE` orqali yarating.",
    "explanation": ""
  },
  {
    "id": 32,
    "sector": 3,
    "difficulty": "Floor 3 • Medium",
    "source": "L09 Part 1 Slide 12-16 • PostgreSQL Roles & Grants",
    "title": "O'qish Huquqini Berish: GRANT SELECT ON emp",
    "story": "Tahlilchilarga faqat xodimlarni o'qish (SELECT) huquqini taqdim etish lozim.",
    "taskUz": "`emp` jadvaliga `SELECT` huquqini `hr_analyst` roliga bering.\n\n📋 **Kutilayotgan Buyruq:**\n• PostgreSQL DCL buyrug'i",
    "expectedSql": "GRANT SELECT ON emp TO hr_analyst",
    "hint": "`GRANT SELECT ON emp TO hr_analyst` deb yozing.",
    "tags": [
      "POSTGRES",
      "GRANT",
      "PRIVILEGES"
    ],
    "solutions": [
      "GRANT SELECT ON emp TO hr_analyst"
    ],
    "task": "`emp` jadvaliga `SELECT` huquqini `hr_analyst` roliga bering.",
    "explanation": ""
  },
  {
    "id": 33,
    "sector": 3,
    "difficulty": "Floor 3 • Medium",
    "source": "L09 Part 1 Slide 12-16 • PostgreSQL Roles & Grants",
    "title": "Ustun Darajasidagi Huquq: Column-Level Privilege",
    "story": "Maxfiy maoshlarni yashirish uchun faqat ism va lavozimni ko'rishga ruxsat berish.",
    "taskUz": "`emp` jadvalining `empno`, `ename`, `job` ustunlariga `SELECT` huquqini bering.\n\n📋 **Kutilayotgan Buyruq:**\n• PostgreSQL DCL buyrug'i",
    "expectedSql": "GRANT SELECT (empno, ename, job) ON emp TO hr_analyst",
    "hint": "`GRANT SELECT (empno, ename, job) ON emp TO hr_analyst` yozing.",
    "tags": [
      "POSTGRES",
      "GRANT",
      "COLUMN_LEVEL"
    ],
    "solutions": [
      "GRANT SELECT (empno, ename, job) ON emp TO hr_analyst"
    ],
    "task": "`emp` jadvalining `empno`, `ename`, `job` ustunlariga `SELECT` huquqini bering.",
    "explanation": ""
  },
  {
    "id": 34,
    "sector": 3,
    "difficulty": "Floor 3 • Medium",
    "source": "L09 Part 1 Slide 12-16 • PostgreSQL Roles & Grants",
    "title": "Huquqni Qaytarib Olish: REVOKE DELETE",
    "story": "Xavfsizlik yuzasidan o'chirish (DELETE) amalini bekor qilish talab qilinadi.",
    "taskUz": "`emp` jadvalidan `DELETE` huquqini `hr_analyst` dan qaytarib oling.\n\n📋 **Kutilayotgan Buyruq:**\n• PostgreSQL DCL buyrug'i",
    "expectedSql": "REVOKE DELETE ON emp FROM hr_analyst",
    "hint": "`REVOKE DELETE ON emp FROM hr_analyst` yozing.",
    "tags": [
      "POSTGRES",
      "REVOKE",
      "SECURITY"
    ],
    "solutions": [
      "REVOKE DELETE ON emp FROM hr_analyst"
    ],
    "task": "`emp` jadvalidan `DELETE` huquqini `hr_analyst` dan qaytarib oling.",
    "explanation": ""
  },
  {
    "id": 35,
    "sector": 3,
    "difficulty": "Floor 3 • Medium",
    "source": "L09 Part 1 Slide 12-16 • PostgreSQL Roles & Grants",
    "title": "Rollar va Huquqlar Audit Topshirig'i (5-Bosqich)",
    "story": "Kompaniya ma'lumotlar bazasida xavfsizlik siyosatini yuritish.",
    "taskUz": "`hr_officer` roliga `emp` jadvaliga `INSERT` huquqini bering.\n\n📋 **Kutilayotgan Buyruq:**\n• PostgreSQL DCL buyrug'i",
    "expectedSql": "GRANT INSERT ON emp TO hr_officer",
    "hint": "`GRANT INSERT ON emp TO hr_officer` yozing.",
    "tags": [
      "POSTGRES",
      "GRANT",
      "DCL"
    ],
    "solutions": [
      "GRANT INSERT ON emp TO hr_officer"
    ],
    "task": "`hr_officer` roliga `emp` jadvaliga `INSERT` huquqini bering.",
    "explanation": ""
  },
  {
    "id": 36,
    "sector": 3,
    "difficulty": "Floor 3 • Medium",
    "source": "L09 Part 1 Slide 12-16 • PostgreSQL Roles & Grants",
    "title": "Rollar va Huquqlar Audit Topshirig'i (6-Bosqich)",
    "story": "Kompaniya ma'lumotlar bazasida xavfsizlik siyosatini yuritish.",
    "taskUz": "`hr_officer` roliga `emp` jadvaliga `INSERT` huquqini bering.\n\n📋 **Kutilayotgan Buyruq:**\n• PostgreSQL DCL buyrug'i",
    "expectedSql": "GRANT INSERT ON emp TO hr_officer",
    "hint": "`GRANT INSERT ON emp TO hr_officer` yozing.",
    "tags": [
      "POSTGRES",
      "GRANT",
      "DCL"
    ],
    "solutions": [
      "GRANT INSERT ON emp TO hr_officer"
    ],
    "task": "`hr_officer` roliga `emp` jadvaliga `INSERT` huquqini bering.",
    "explanation": ""
  },
  {
    "id": 37,
    "sector": 3,
    "difficulty": "Floor 3 • Medium",
    "source": "L09 Part 1 Slide 12-16 • PostgreSQL Roles & Grants",
    "title": "Rollar va Huquqlar Audit Topshirig'i (7-Bosqich)",
    "story": "Kompaniya ma'lumotlar bazasida xavfsizlik siyosatini yuritish.",
    "taskUz": "`hr_officer` roliga `emp` jadvaliga `INSERT` huquqini bering.\n\n📋 **Kutilayotgan Buyruq:**\n• PostgreSQL DCL buyrug'i",
    "expectedSql": "GRANT INSERT ON emp TO hr_officer",
    "hint": "`GRANT INSERT ON emp TO hr_officer` yozing.",
    "tags": [
      "POSTGRES",
      "GRANT",
      "DCL"
    ],
    "solutions": [
      "GRANT INSERT ON emp TO hr_officer"
    ],
    "task": "`hr_officer` roliga `emp` jadvaliga `INSERT` huquqini bering.",
    "explanation": ""
  },
  {
    "id": 38,
    "sector": 3,
    "difficulty": "Floor 3 • Medium",
    "source": "L09 Part 1 Slide 12-16 • PostgreSQL Roles & Grants",
    "title": "Rollar va Huquqlar Audit Topshirig'i (8-Bosqich)",
    "story": "Kompaniya ma'lumotlar bazasida xavfsizlik siyosatini yuritish.",
    "taskUz": "`hr_officer` roliga `emp` jadvaliga `INSERT` huquqini bering.\n\n📋 **Kutilayotgan Buyruq:**\n• PostgreSQL DCL buyrug'i",
    "expectedSql": "GRANT INSERT ON emp TO hr_officer",
    "hint": "`GRANT INSERT ON emp TO hr_officer` yozing.",
    "tags": [
      "POSTGRES",
      "GRANT",
      "DCL"
    ],
    "solutions": [
      "GRANT INSERT ON emp TO hr_officer"
    ],
    "task": "`hr_officer` roliga `emp` jadvaliga `INSERT` huquqini bering.",
    "explanation": ""
  },
  {
    "id": 39,
    "sector": 3,
    "difficulty": "Floor 3 • Medium",
    "source": "L09 Part 1 Slide 12-16 • PostgreSQL Roles & Grants",
    "title": "Rollar va Huquqlar Audit Topshirig'i (9-Bosqich)",
    "story": "Kompaniya ma'lumotlar bazasida xavfsizlik siyosatini yuritish.",
    "taskUz": "`hr_officer` roliga `emp` jadvaliga `INSERT` huquqini bering.\n\n📋 **Kutilayotgan Buyruq:**\n• PostgreSQL DCL buyrug'i",
    "expectedSql": "GRANT INSERT ON emp TO hr_officer",
    "hint": "`GRANT INSERT ON emp TO hr_officer` yozing.",
    "tags": [
      "POSTGRES",
      "GRANT",
      "DCL"
    ],
    "solutions": [
      "GRANT INSERT ON emp TO hr_officer"
    ],
    "task": "`hr_officer` roliga `emp` jadvaliga `INSERT` huquqini bering.",
    "explanation": ""
  },
  {
    "id": 40,
    "sector": 3,
    "difficulty": "Floor 3 • Medium",
    "source": "L09 Part 1 Slide 12-16 • PostgreSQL Roles & Grants",
    "title": "Rollar va Huquqlar Audit Topshirig'i (10-Bosqich)",
    "story": "Kompaniya ma'lumotlar bazasida xavfsizlik siyosatini yuritish.",
    "taskUz": "`hr_officer` roliga `emp` jadvaliga `INSERT` huquqini bering.\n\n📋 **Kutilayotgan Buyruq:**\n• PostgreSQL DCL buyrug'i",
    "expectedSql": "GRANT INSERT ON emp TO hr_officer",
    "hint": "`GRANT INSERT ON emp TO hr_officer` yozing.",
    "tags": [
      "POSTGRES",
      "GRANT",
      "DCL"
    ],
    "solutions": [
      "GRANT INSERT ON emp TO hr_officer"
    ],
    "task": "`hr_officer` roliga `emp` jadvaliga `INSERT` huquqini bering.",
    "explanation": ""
  },
  {
    "id": 41,
    "sector": 3,
    "difficulty": "Floor 3 • Medium",
    "source": "L09 Part 1 Slide 12-16 • PostgreSQL Roles & Grants",
    "title": "Rollar va Huquqlar Audit Topshirig'i (11-Bosqich)",
    "story": "Kompaniya ma'lumotlar bazasida xavfsizlik siyosatini yuritish.",
    "taskUz": "`hr_officer` roliga `emp` jadvaliga `INSERT` huquqini bering.\n\n📋 **Kutilayotgan Buyruq:**\n• PostgreSQL DCL buyrug'i",
    "expectedSql": "GRANT INSERT ON emp TO hr_officer",
    "hint": "`GRANT INSERT ON emp TO hr_officer` yozing.",
    "tags": [
      "POSTGRES",
      "GRANT",
      "DCL"
    ],
    "solutions": [
      "GRANT INSERT ON emp TO hr_officer"
    ],
    "task": "`hr_officer` roliga `emp` jadvaliga `INSERT` huquqini bering.",
    "explanation": ""
  },
  {
    "id": 42,
    "sector": 3,
    "difficulty": "Floor 3 • Medium",
    "source": "L09 Part 1 Slide 12-16 • PostgreSQL Roles & Grants",
    "title": "Rollar va Huquqlar Audit Topshirig'i (12-Bosqich)",
    "story": "Kompaniya ma'lumotlar bazasida xavfsizlik siyosatini yuritish.",
    "taskUz": "`hr_officer` roliga `emp` jadvaliga `INSERT` huquqini bering.\n\n📋 **Kutilayotgan Buyruq:**\n• PostgreSQL DCL buyrug'i",
    "expectedSql": "GRANT INSERT ON emp TO hr_officer",
    "hint": "`GRANT INSERT ON emp TO hr_officer` yozing.",
    "tags": [
      "POSTGRES",
      "GRANT",
      "DCL"
    ],
    "solutions": [
      "GRANT INSERT ON emp TO hr_officer"
    ],
    "task": "`hr_officer` roliga `emp` jadvaliga `INSERT` huquqini bering.",
    "explanation": ""
  },
  {
    "id": 43,
    "sector": 3,
    "difficulty": "Floor 3 • Medium",
    "source": "L09 Part 1 Slide 12-16 • PostgreSQL Roles & Grants",
    "title": "Rollar va Huquqlar Audit Topshirig'i (13-Bosqich)",
    "story": "Kompaniya ma'lumotlar bazasida xavfsizlik siyosatini yuritish.",
    "taskUz": "`hr_officer` roliga `emp` jadvaliga `INSERT` huquqini bering.\n\n📋 **Kutilayotgan Buyruq:**\n• PostgreSQL DCL buyrug'i",
    "expectedSql": "GRANT INSERT ON emp TO hr_officer",
    "hint": "`GRANT INSERT ON emp TO hr_officer` yozing.",
    "tags": [
      "POSTGRES",
      "GRANT",
      "DCL"
    ],
    "solutions": [
      "GRANT INSERT ON emp TO hr_officer"
    ],
    "task": "`hr_officer` roliga `emp` jadvaliga `INSERT` huquqini bering.",
    "explanation": ""
  },
  {
    "id": 44,
    "sector": 3,
    "difficulty": "Floor 3 • Medium",
    "source": "L09 Part 1 Slide 12-16 • PostgreSQL Roles & Grants",
    "title": "Rollar va Huquqlar Audit Topshirig'i (14-Bosqich)",
    "story": "Kompaniya ma'lumotlar bazasida xavfsizlik siyosatini yuritish.",
    "taskUz": "`hr_officer` roliga `emp` jadvaliga `INSERT` huquqini bering.\n\n📋 **Kutilayotgan Buyruq:**\n• PostgreSQL DCL buyrug'i",
    "expectedSql": "GRANT INSERT ON emp TO hr_officer",
    "hint": "`GRANT INSERT ON emp TO hr_officer` yozing.",
    "tags": [
      "POSTGRES",
      "GRANT",
      "DCL"
    ],
    "solutions": [
      "GRANT INSERT ON emp TO hr_officer"
    ],
    "task": "`hr_officer` roliga `emp` jadvaliga `INSERT` huquqini bering.",
    "explanation": ""
  },
  {
    "id": 45,
    "sector": 3,
    "difficulty": "Floor 3 • Medium",
    "source": "L09 Part 1 Slide 12-16 • PostgreSQL Roles & Grants",
    "title": "Rollar va Huquqlar Audit Topshirig'i (15-Bosqich)",
    "story": "Kompaniya ma'lumotlar bazasida xavfsizlik siyosatini yuritish.",
    "taskUz": "`hr_officer` roliga `emp` jadvaliga `INSERT` huquqini bering.\n\n📋 **Kutilayotgan Buyruq:**\n• PostgreSQL DCL buyrug'i",
    "expectedSql": "GRANT INSERT ON emp TO hr_officer",
    "hint": "`GRANT INSERT ON emp TO hr_officer` yozing.",
    "tags": [
      "POSTGRES",
      "GRANT",
      "DCL"
    ],
    "solutions": [
      "GRANT INSERT ON emp TO hr_officer"
    ],
    "task": "`hr_officer` roliga `emp` jadvaliga `INSERT` huquqini bering.",
    "explanation": ""
  },
  {
    "id": 46,
    "sector": 4,
    "difficulty": "Floor 4 • Hard",
    "source": "L09 Part 1 • SQL Injection & Prepared Statements",
    "title": "Parametrlangan So'rov Yaratish: PREPARE get_emp(int)",
    "story": "L09 Part 1: Veb-formadan kelgan so'rovlarni SQL Injection hujumlaridan himoyalash uchun PREPARE ishlatiladi.",
    "taskUz": "Xodim ID raqami bo'yicha xavfsiz qidiruvchi `get_emp` nomli tayyorlangan so'rov (`PREPARE`) yarating.\n\n📋 **Kutilayotgan Buyruq:**\n• PostgreSQL PREPARE / EXECUTE buyrug'i",
    "expectedSql": "PREPARE get_emp(int) AS SELECT empno, ename, sal FROM emp WHERE empno = $1",
    "hint": "`PREPARE get_emp(int) AS SELECT empno, ename, sal FROM emp WHERE empno = $1` yozing.",
    "tags": [
      "SQL_INJECTION",
      "PREPARE",
      "SAFETY"
    ],
    "solutions": [
      "PREPARE get_emp(int) AS SELECT empno, ename, sal FROM emp WHERE empno = $1"
    ],
    "task": "Xodim ID raqami bo'yicha xavfsiz qidiruvchi `get_emp` nomli tayyorlangan so'rov (`PREPARE`) yarating.",
    "explanation": ""
  },
  {
    "id": 47,
    "sector": 4,
    "difficulty": "Floor 4 • Hard",
    "source": "L09 Part 1 • SQL Injection & Prepared Statements",
    "title": "Tayyorlangan So'rovni Bajarish: EXECUTE get_emp(7839)",
    "story": "Prezident KING (`empno: 7839`) ma'lumotlarini xavfsiz parametr orqali chaqirib olish.",
    "taskUz": "`EXECUTE get_emp(7839)` buyrug'i orqali xodimni chaqiring.\n\n📋 **Kutilayotgan Buyruq:**\n• PostgreSQL PREPARE / EXECUTE buyrug'i",
    "expectedSql": "EXECUTE get_emp(7839)",
    "hint": "`EXECUTE get_emp(7839)` yozing.",
    "tags": [
      "SQL_INJECTION",
      "EXECUTE",
      "PARAMETER"
    ],
    "solutions": [
      "EXECUTE get_emp(7839)"
    ],
    "task": "`EXECUTE get_emp(7839)` buyrug'i orqali xodimni chaqiring.",
    "explanation": ""
  },
  {
    "id": 48,
    "sector": 4,
    "difficulty": "Floor 4 • Hard",
    "source": "L09 Part 1 • SQL Injection & Prepared Statements",
    "title": "SQL Injection Himoyasi & Sanitizatsiya (3-Qadam)",
    "story": "Foydalanuvchi ma'lumotlarini matnli ulab yuborish (string concatenation) o'rniga parametrlardan foydalanish.",
    "taskUz": "Parametrlangan so'rovni bajaring: `EXECUTE get_emp(7839)`.\n\n📋 **Kutilayotgan Buyruq:**\n• PostgreSQL PREPARE / EXECUTE buyrug'i",
    "expectedSql": "EXECUTE get_emp(7839)",
    "hint": "`EXECUTE get_emp(7839)` yozing.",
    "tags": [
      "SQL_INJECTION",
      "DEFENSE",
      "EXECUTE"
    ],
    "solutions": [
      "EXECUTE get_emp(7839)"
    ],
    "task": "Parametrlangan so'rovni bajaring: `EXECUTE get_emp(7839)`.",
    "explanation": ""
  },
  {
    "id": 49,
    "sector": 4,
    "difficulty": "Floor 4 • Hard",
    "source": "L09 Part 1 • SQL Injection & Prepared Statements",
    "title": "SQL Injection Himoyasi & Sanitizatsiya (4-Qadam)",
    "story": "Foydalanuvchi ma'lumotlarini matnli ulab yuborish (string concatenation) o'rniga parametrlardan foydalanish.",
    "taskUz": "Parametrlangan so'rovni bajaring: `EXECUTE get_emp(7839)`.\n\n📋 **Kutilayotgan Buyruq:**\n• PostgreSQL PREPARE / EXECUTE buyrug'i",
    "expectedSql": "EXECUTE get_emp(7839)",
    "hint": "`EXECUTE get_emp(7839)` yozing.",
    "tags": [
      "SQL_INJECTION",
      "DEFENSE",
      "EXECUTE"
    ],
    "solutions": [
      "EXECUTE get_emp(7839)"
    ],
    "task": "Parametrlangan so'rovni bajaring: `EXECUTE get_emp(7839)`.",
    "explanation": ""
  },
  {
    "id": 50,
    "sector": 4,
    "difficulty": "Floor 4 • Hard",
    "source": "L09 Part 1 • SQL Injection & Prepared Statements",
    "title": "SQL Injection Himoyasi & Sanitizatsiya (5-Qadam)",
    "story": "Foydalanuvchi ma'lumotlarini matnli ulab yuborish (string concatenation) o'rniga parametrlardan foydalanish.",
    "taskUz": "Parametrlangan so'rovni bajaring: `EXECUTE get_emp(7839)`.\n\n📋 **Kutilayotgan Buyruq:**\n• PostgreSQL PREPARE / EXECUTE buyrug'i",
    "expectedSql": "EXECUTE get_emp(7839)",
    "hint": "`EXECUTE get_emp(7839)` yozing.",
    "tags": [
      "SQL_INJECTION",
      "DEFENSE",
      "EXECUTE"
    ],
    "solutions": [
      "EXECUTE get_emp(7839)"
    ],
    "task": "Parametrlangan so'rovni bajaring: `EXECUTE get_emp(7839)`.",
    "explanation": ""
  }
];
