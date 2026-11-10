var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);

_scope.QUESTIONS_101_150 = [
  {
    "id": 101,
    "sector": 7,
    "difficulty": "Floor 7 • Hard",
    "source": "S07 Task 2 & 3 • Running Totals & Ranking",
    "title": "O'suvchi Jami & Reytinglash Simulyatsiyasi (11-Topshiriq)",
    "story": "Kompaniya xodimlarini maoshi va bo'limi bo'yicha tartiblash.",
    "taskUz": "Xodimlarning `deptno`, `ename`, `sal` va reytingini (`DENSE_RANK() OVER (PARTITION BY deptno ORDER BY sal DESC) AS rnk`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "SELECT deptno, ename, sal, DENSE_RANK() OVER (PARTITION BY deptno ORDER BY sal DESC) AS rnk FROM emp",
    "hint": "`DENSE_RANK() OVER (PARTITION BY deptno ORDER BY sal DESC)` yozing.",
    "tags": [
      "WINDOW",
      "RANK",
      "SALARY"
    ],
    "solutions": [
      "SELECT deptno, ename, sal, DENSE_RANK() OVER (PARTITION BY deptno ORDER BY sal DESC) AS rnk FROM emp"
    ],
    "task": "Xodimlarning `deptno`, `ename`, `sal` va reytingini (`DENSE_RANK() OVER (PARTITION BY deptno ORDER BY sal DESC) AS rnk`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 102,
    "sector": 7,
    "difficulty": "Floor 7 • Hard",
    "source": "S07 Task 2 & 3 • Running Totals & Ranking",
    "title": "O'suvchi Jami & Reytinglash Simulyatsiyasi (12-Topshiriq)",
    "story": "Kompaniya xodimlarini maoshi va bo'limi bo'yicha tartiblash.",
    "taskUz": "Xodimlarning `deptno`, `ename`, `sal` va reytingini (`DENSE_RANK() OVER (PARTITION BY deptno ORDER BY sal DESC) AS rnk`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "SELECT deptno, ename, sal, DENSE_RANK() OVER (PARTITION BY deptno ORDER BY sal DESC) AS rnk FROM emp",
    "hint": "`DENSE_RANK() OVER (PARTITION BY deptno ORDER BY sal DESC)` yozing.",
    "tags": [
      "WINDOW",
      "RANK",
      "SALARY"
    ],
    "solutions": [
      "SELECT deptno, ename, sal, DENSE_RANK() OVER (PARTITION BY deptno ORDER BY sal DESC) AS rnk FROM emp"
    ],
    "task": "Xodimlarning `deptno`, `ename`, `sal` va reytingini (`DENSE_RANK() OVER (PARTITION BY deptno ORDER BY sal DESC) AS rnk`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 103,
    "sector": 7,
    "difficulty": "Floor 7 • Hard",
    "source": "S07 Task 2 & 3 • Running Totals & Ranking",
    "title": "O'suvchi Jami & Reytinglash Simulyatsiyasi (13-Topshiriq)",
    "story": "Kompaniya xodimlarini maoshi va bo'limi bo'yicha tartiblash.",
    "taskUz": "Xodimlarning `deptno`, `ename`, `sal` va reytingini (`DENSE_RANK() OVER (PARTITION BY deptno ORDER BY sal DESC) AS rnk`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "SELECT deptno, ename, sal, DENSE_RANK() OVER (PARTITION BY deptno ORDER BY sal DESC) AS rnk FROM emp",
    "hint": "`DENSE_RANK() OVER (PARTITION BY deptno ORDER BY sal DESC)` yozing.",
    "tags": [
      "WINDOW",
      "RANK",
      "SALARY"
    ],
    "solutions": [
      "SELECT deptno, ename, sal, DENSE_RANK() OVER (PARTITION BY deptno ORDER BY sal DESC) AS rnk FROM emp"
    ],
    "task": "Xodimlarning `deptno`, `ename`, `sal` va reytingini (`DENSE_RANK() OVER (PARTITION BY deptno ORDER BY sal DESC) AS rnk`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 104,
    "sector": 7,
    "difficulty": "Floor 7 • Hard",
    "source": "S07 Task 2 & 3 • Running Totals & Ranking",
    "title": "O'suvchi Jami & Reytinglash Simulyatsiyasi (14-Topshiriq)",
    "story": "Kompaniya xodimlarini maoshi va bo'limi bo'yicha tartiblash.",
    "taskUz": "Xodimlarning `deptno`, `ename`, `sal` va reytingini (`DENSE_RANK() OVER (PARTITION BY deptno ORDER BY sal DESC) AS rnk`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "SELECT deptno, ename, sal, DENSE_RANK() OVER (PARTITION BY deptno ORDER BY sal DESC) AS rnk FROM emp",
    "hint": "`DENSE_RANK() OVER (PARTITION BY deptno ORDER BY sal DESC)` yozing.",
    "tags": [
      "WINDOW",
      "RANK",
      "SALARY"
    ],
    "solutions": [
      "SELECT deptno, ename, sal, DENSE_RANK() OVER (PARTITION BY deptno ORDER BY sal DESC) AS rnk FROM emp"
    ],
    "task": "Xodimlarning `deptno`, `ename`, `sal` va reytingini (`DENSE_RANK() OVER (PARTITION BY deptno ORDER BY sal DESC) AS rnk`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 105,
    "sector": 7,
    "difficulty": "Floor 7 • Hard",
    "source": "S07 Task 2 & 3 • Running Totals & Ranking",
    "title": "O'suvchi Jami & Reytinglash Simulyatsiyasi (15-Topshiriq)",
    "story": "Kompaniya xodimlarini maoshi va bo'limi bo'yicha tartiblash.",
    "taskUz": "Xodimlarning `deptno`, `ename`, `sal` va reytingini (`DENSE_RANK() OVER (PARTITION BY deptno ORDER BY sal DESC) AS rnk`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "SELECT deptno, ename, sal, DENSE_RANK() OVER (PARTITION BY deptno ORDER BY sal DESC) AS rnk FROM emp",
    "hint": "`DENSE_RANK() OVER (PARTITION BY deptno ORDER BY sal DESC)` yozing.",
    "tags": [
      "WINDOW",
      "RANK",
      "SALARY"
    ],
    "solutions": [
      "SELECT deptno, ename, sal, DENSE_RANK() OVER (PARTITION BY deptno ORDER BY sal DESC) AS rnk FROM emp"
    ],
    "task": "Xodimlarning `deptno`, `ename`, `sal` va reytingini (`DENSE_RANK() OVER (PARTITION BY deptno ORDER BY sal DESC) AS rnk`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 106,
    "sector": 8,
    "difficulty": "Floor 8 • Hard",
    "source": "S07 Task 4 & 5 • Positional Window Functions",
    "title": "Oldingi Ishga Kirgan Xodim Maoshi (LAG)",
    "story": "S07 Task 5: Ishga kirish sanasi (hiredate) bo'yicha oldingi hamkasbning maoshini yonma-yon ko'rish.",
    "taskUz": "Xodimlarning `ename`, `hiredate`, `sal` va oldingi xodim maoshini (`LAG(sal) OVER (ORDER BY hiredate) AS prev_sal`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "SELECT ename, hiredate, sal, LAG(sal) OVER (ORDER BY hiredate) AS prev_sal FROM emp",
    "hint": "`LAG(sal) OVER (ORDER BY hiredate)` yozing.",
    "tags": [
      "WINDOW",
      "LAG",
      "PREV_VALUE"
    ],
    "solutions": [
      "SELECT ename, hiredate, sal, LAG(sal) OVER (ORDER BY hiredate) AS prev_sal FROM emp"
    ],
    "task": "Xodimlarning `ename`, `hiredate`, `sal` va oldingi xodim maoshini (`LAG(sal) OVER (ORDER BY hiredate) AS prev_sal`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 107,
    "sector": 8,
    "difficulty": "Floor 8 • Hard",
    "source": "S07 Task 4 & 5 • Positional Window Functions",
    "title": "Keyingi Ishga Kirgan Xodim Maoshi (LEAD)",
    "story": "Kelajakdagi o'zgarishlar bilan solishtirish uchun keyingi qabul qilingan xodim maoshini aniqlang.",
    "taskUz": "Xodimlarning `ename`, `hiredate`, `sal` va keyingi xodim maoshini (`LEAD(sal) OVER (ORDER BY hiredate) AS next_sal`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "SELECT ename, hiredate, sal, LEAD(sal) OVER (ORDER BY hiredate) AS next_sal FROM emp",
    "hint": "`LEAD(sal) OVER (ORDER BY hiredate)` yozing.",
    "tags": [
      "WINDOW",
      "LEAD",
      "NEXT_VALUE"
    ],
    "solutions": [
      "SELECT ename, hiredate, sal, LEAD(sal) OVER (ORDER BY hiredate) AS next_sal FROM emp"
    ],
    "task": "Xodimlarning `ename`, `hiredate`, `sal` va keyingi xodim maoshini (`LEAD(sal) OVER (ORDER BY hiredate) AS next_sal`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 108,
    "sector": 8,
    "difficulty": "Floor 8 • Hard",
    "source": "S07 Task 4 & 5 • Positional Window Functions",
    "title": "Bo'limdagi Eng Kam Maosh (FIRST_VALUE)",
    "story": "S07 Task 4: Bo'lim ichida eng kam oylik oluvchi xodim maoshini barcha satrlarda aks ettirish.",
    "taskUz": "Xodimlarning `ename`, `deptno`, `sal` va bo'limning eng kam maoshini (`FIRST_VALUE(sal) OVER (PARTITION BY deptno ORDER BY sal) AS min_dept_sal`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "SELECT ename, deptno, sal, FIRST_VALUE(sal) OVER (PARTITION BY deptno ORDER BY sal) AS min_dept_sal FROM emp",
    "hint": "`FIRST_VALUE(sal) OVER (PARTITION BY deptno ORDER BY sal)` qo'llang.",
    "tags": [
      "WINDOW",
      "FIRST_VALUE",
      "MIN_SAL"
    ],
    "solutions": [
      "SELECT ename, deptno, sal, FIRST_VALUE(sal) OVER (PARTITION BY deptno ORDER BY sal) AS min_dept_sal FROM emp"
    ],
    "task": "Xodimlarning `ename`, `deptno`, `sal` va bo'limning eng kam maoshini (`FIRST_VALUE(sal) OVER (PARTITION BY deptno ORDER BY sal) AS min_dept_sal`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 109,
    "sector": 8,
    "difficulty": "Floor 8 • Hard",
    "source": "S07 Task 4 & 5 • Positional Window Functions",
    "title": "Pozitsion Taqqoslash & Dinamika (4-Topshiriq)",
    "story": "Xodimlar qatorlari orasidagi farqni kuzatish uchun LEAD va LAG funksiyalari qo'llaniladi.",
    "taskUz": "Xodimlarning `ename`, `hiredate`, `sal` va oldingi maoshni (`LAG(sal) OVER (ORDER BY hiredate) AS prev_sal`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "SELECT ename, hiredate, sal, LAG(sal) OVER (ORDER BY hiredate) AS prev_sal FROM emp",
    "hint": "`LAG(sal) OVER (ORDER BY hiredate)` yozing.",
    "tags": [
      "WINDOW",
      "LAG",
      "HIREDATE"
    ],
    "solutions": [
      "SELECT ename, hiredate, sal, LAG(sal) OVER (ORDER BY hiredate) AS prev_sal FROM emp"
    ],
    "task": "Xodimlarning `ename`, `hiredate`, `sal` va oldingi maoshni (`LAG(sal) OVER (ORDER BY hiredate) AS prev_sal`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 110,
    "sector": 8,
    "difficulty": "Floor 8 • Hard",
    "source": "S07 Task 4 & 5 • Positional Window Functions",
    "title": "Pozitsion Taqqoslash & Dinamika (5-Topshiriq)",
    "story": "Xodimlar qatorlari orasidagi farqni kuzatish uchun LEAD va LAG funksiyalari qo'llaniladi.",
    "taskUz": "Xodimlarning `ename`, `hiredate`, `sal` va oldingi maoshni (`LAG(sal) OVER (ORDER BY hiredate) AS prev_sal`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "SELECT ename, hiredate, sal, LAG(sal) OVER (ORDER BY hiredate) AS prev_sal FROM emp",
    "hint": "`LAG(sal) OVER (ORDER BY hiredate)` yozing.",
    "tags": [
      "WINDOW",
      "LAG",
      "HIREDATE"
    ],
    "solutions": [
      "SELECT ename, hiredate, sal, LAG(sal) OVER (ORDER BY hiredate) AS prev_sal FROM emp"
    ],
    "task": "Xodimlarning `ename`, `hiredate`, `sal` va oldingi maoshni (`LAG(sal) OVER (ORDER BY hiredate) AS prev_sal`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 111,
    "sector": 8,
    "difficulty": "Floor 8 • Hard",
    "source": "S07 Task 4 & 5 • Positional Window Functions",
    "title": "Pozitsion Taqqoslash & Dinamika (6-Topshiriq)",
    "story": "Xodimlar qatorlari orasidagi farqni kuzatish uchun LEAD va LAG funksiyalari qo'llaniladi.",
    "taskUz": "Xodimlarning `ename`, `hiredate`, `sal` va oldingi maoshni (`LAG(sal) OVER (ORDER BY hiredate) AS prev_sal`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "SELECT ename, hiredate, sal, LAG(sal) OVER (ORDER BY hiredate) AS prev_sal FROM emp",
    "hint": "`LAG(sal) OVER (ORDER BY hiredate)` yozing.",
    "tags": [
      "WINDOW",
      "LAG",
      "HIREDATE"
    ],
    "solutions": [
      "SELECT ename, hiredate, sal, LAG(sal) OVER (ORDER BY hiredate) AS prev_sal FROM emp"
    ],
    "task": "Xodimlarning `ename`, `hiredate`, `sal` va oldingi maoshni (`LAG(sal) OVER (ORDER BY hiredate) AS prev_sal`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 112,
    "sector": 8,
    "difficulty": "Floor 8 • Hard",
    "source": "S07 Task 4 & 5 • Positional Window Functions",
    "title": "Pozitsion Taqqoslash & Dinamika (7-Topshiriq)",
    "story": "Xodimlar qatorlari orasidagi farqni kuzatish uchun LEAD va LAG funksiyalari qo'llaniladi.",
    "taskUz": "Xodimlarning `ename`, `hiredate`, `sal` va oldingi maoshni (`LAG(sal) OVER (ORDER BY hiredate) AS prev_sal`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "SELECT ename, hiredate, sal, LAG(sal) OVER (ORDER BY hiredate) AS prev_sal FROM emp",
    "hint": "`LAG(sal) OVER (ORDER BY hiredate)` yozing.",
    "tags": [
      "WINDOW",
      "LAG",
      "HIREDATE"
    ],
    "solutions": [
      "SELECT ename, hiredate, sal, LAG(sal) OVER (ORDER BY hiredate) AS prev_sal FROM emp"
    ],
    "task": "Xodimlarning `ename`, `hiredate`, `sal` va oldingi maoshni (`LAG(sal) OVER (ORDER BY hiredate) AS prev_sal`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 113,
    "sector": 8,
    "difficulty": "Floor 8 • Hard",
    "source": "S07 Task 4 & 5 • Positional Window Functions",
    "title": "Pozitsion Taqqoslash & Dinamika (8-Topshiriq)",
    "story": "Xodimlar qatorlari orasidagi farqni kuzatish uchun LEAD va LAG funksiyalari qo'llaniladi.",
    "taskUz": "Xodimlarning `ename`, `hiredate`, `sal` va oldingi maoshni (`LAG(sal) OVER (ORDER BY hiredate) AS prev_sal`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "SELECT ename, hiredate, sal, LAG(sal) OVER (ORDER BY hiredate) AS prev_sal FROM emp",
    "hint": "`LAG(sal) OVER (ORDER BY hiredate)` yozing.",
    "tags": [
      "WINDOW",
      "LAG",
      "HIREDATE"
    ],
    "solutions": [
      "SELECT ename, hiredate, sal, LAG(sal) OVER (ORDER BY hiredate) AS prev_sal FROM emp"
    ],
    "task": "Xodimlarning `ename`, `hiredate`, `sal` va oldingi maoshni (`LAG(sal) OVER (ORDER BY hiredate) AS prev_sal`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 114,
    "sector": 8,
    "difficulty": "Floor 8 • Hard",
    "source": "S07 Task 4 & 5 • Positional Window Functions",
    "title": "Pozitsion Taqqoslash & Dinamika (9-Topshiriq)",
    "story": "Xodimlar qatorlari orasidagi farqni kuzatish uchun LEAD va LAG funksiyalari qo'llaniladi.",
    "taskUz": "Xodimlarning `ename`, `hiredate`, `sal` va oldingi maoshni (`LAG(sal) OVER (ORDER BY hiredate) AS prev_sal`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "SELECT ename, hiredate, sal, LAG(sal) OVER (ORDER BY hiredate) AS prev_sal FROM emp",
    "hint": "`LAG(sal) OVER (ORDER BY hiredate)` yozing.",
    "tags": [
      "WINDOW",
      "LAG",
      "HIREDATE"
    ],
    "solutions": [
      "SELECT ename, hiredate, sal, LAG(sal) OVER (ORDER BY hiredate) AS prev_sal FROM emp"
    ],
    "task": "Xodimlarning `ename`, `hiredate`, `sal` va oldingi maoshni (`LAG(sal) OVER (ORDER BY hiredate) AS prev_sal`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 115,
    "sector": 8,
    "difficulty": "Floor 8 • Hard",
    "source": "S07 Task 4 & 5 • Positional Window Functions",
    "title": "Pozitsion Taqqoslash & Dinamika (10-Topshiriq)",
    "story": "Xodimlar qatorlari orasidagi farqni kuzatish uchun LEAD va LAG funksiyalari qo'llaniladi.",
    "taskUz": "Xodimlarning `ename`, `hiredate`, `sal` va oldingi maoshni (`LAG(sal) OVER (ORDER BY hiredate) AS prev_sal`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "SELECT ename, hiredate, sal, LAG(sal) OVER (ORDER BY hiredate) AS prev_sal FROM emp",
    "hint": "`LAG(sal) OVER (ORDER BY hiredate)` yozing.",
    "tags": [
      "WINDOW",
      "LAG",
      "HIREDATE"
    ],
    "solutions": [
      "SELECT ename, hiredate, sal, LAG(sal) OVER (ORDER BY hiredate) AS prev_sal FROM emp"
    ],
    "task": "Xodimlarning `ename`, `hiredate`, `sal` va oldingi maoshni (`LAG(sal) OVER (ORDER BY hiredate) AS prev_sal`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 116,
    "sector": 8,
    "difficulty": "Floor 8 • Hard",
    "source": "S07 Task 4 & 5 • Positional Window Functions",
    "title": "Pozitsion Taqqoslash & Dinamika (11-Topshiriq)",
    "story": "Xodimlar qatorlari orasidagi farqni kuzatish uchun LEAD va LAG funksiyalari qo'llaniladi.",
    "taskUz": "Xodimlarning `ename`, `hiredate`, `sal` va oldingi maoshni (`LAG(sal) OVER (ORDER BY hiredate) AS prev_sal`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "SELECT ename, hiredate, sal, LAG(sal) OVER (ORDER BY hiredate) AS prev_sal FROM emp",
    "hint": "`LAG(sal) OVER (ORDER BY hiredate)` yozing.",
    "tags": [
      "WINDOW",
      "LAG",
      "HIREDATE"
    ],
    "solutions": [
      "SELECT ename, hiredate, sal, LAG(sal) OVER (ORDER BY hiredate) AS prev_sal FROM emp"
    ],
    "task": "Xodimlarning `ename`, `hiredate`, `sal` va oldingi maoshni (`LAG(sal) OVER (ORDER BY hiredate) AS prev_sal`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 117,
    "sector": 8,
    "difficulty": "Floor 8 • Hard",
    "source": "S07 Task 4 & 5 • Positional Window Functions",
    "title": "Pozitsion Taqqoslash & Dinamika (12-Topshiriq)",
    "story": "Xodimlar qatorlari orasidagi farqni kuzatish uchun LEAD va LAG funksiyalari qo'llaniladi.",
    "taskUz": "Xodimlarning `ename`, `hiredate`, `sal` va oldingi maoshni (`LAG(sal) OVER (ORDER BY hiredate) AS prev_sal`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "SELECT ename, hiredate, sal, LAG(sal) OVER (ORDER BY hiredate) AS prev_sal FROM emp",
    "hint": "`LAG(sal) OVER (ORDER BY hiredate)` yozing.",
    "tags": [
      "WINDOW",
      "LAG",
      "HIREDATE"
    ],
    "solutions": [
      "SELECT ename, hiredate, sal, LAG(sal) OVER (ORDER BY hiredate) AS prev_sal FROM emp"
    ],
    "task": "Xodimlarning `ename`, `hiredate`, `sal` va oldingi maoshni (`LAG(sal) OVER (ORDER BY hiredate) AS prev_sal`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 118,
    "sector": 8,
    "difficulty": "Floor 8 • Hard",
    "source": "S07 Task 4 & 5 • Positional Window Functions",
    "title": "Pozitsion Taqqoslash & Dinamika (13-Topshiriq)",
    "story": "Xodimlar qatorlari orasidagi farqni kuzatish uchun LEAD va LAG funksiyalari qo'llaniladi.",
    "taskUz": "Xodimlarning `ename`, `hiredate`, `sal` va oldingi maoshni (`LAG(sal) OVER (ORDER BY hiredate) AS prev_sal`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "SELECT ename, hiredate, sal, LAG(sal) OVER (ORDER BY hiredate) AS prev_sal FROM emp",
    "hint": "`LAG(sal) OVER (ORDER BY hiredate)` yozing.",
    "tags": [
      "WINDOW",
      "LAG",
      "HIREDATE"
    ],
    "solutions": [
      "SELECT ename, hiredate, sal, LAG(sal) OVER (ORDER BY hiredate) AS prev_sal FROM emp"
    ],
    "task": "Xodimlarning `ename`, `hiredate`, `sal` va oldingi maoshni (`LAG(sal) OVER (ORDER BY hiredate) AS prev_sal`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 119,
    "sector": 8,
    "difficulty": "Floor 8 • Hard",
    "source": "S07 Task 4 & 5 • Positional Window Functions",
    "title": "Pozitsion Taqqoslash & Dinamika (14-Topshiriq)",
    "story": "Xodimlar qatorlari orasidagi farqni kuzatish uchun LEAD va LAG funksiyalari qo'llaniladi.",
    "taskUz": "Xodimlarning `ename`, `hiredate`, `sal` va oldingi maoshni (`LAG(sal) OVER (ORDER BY hiredate) AS prev_sal`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "SELECT ename, hiredate, sal, LAG(sal) OVER (ORDER BY hiredate) AS prev_sal FROM emp",
    "hint": "`LAG(sal) OVER (ORDER BY hiredate)` yozing.",
    "tags": [
      "WINDOW",
      "LAG",
      "HIREDATE"
    ],
    "solutions": [
      "SELECT ename, hiredate, sal, LAG(sal) OVER (ORDER BY hiredate) AS prev_sal FROM emp"
    ],
    "task": "Xodimlarning `ename`, `hiredate`, `sal` va oldingi maoshni (`LAG(sal) OVER (ORDER BY hiredate) AS prev_sal`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 120,
    "sector": 8,
    "difficulty": "Floor 8 • Hard",
    "source": "S07 Task 4 & 5 • Positional Window Functions",
    "title": "Pozitsion Taqqoslash & Dinamika (15-Topshiriq)",
    "story": "Xodimlar qatorlari orasidagi farqni kuzatish uchun LEAD va LAG funksiyalari qo'llaniladi.",
    "taskUz": "Xodimlarning `ename`, `hiredate`, `sal` va oldingi maoshni (`LAG(sal) OVER (ORDER BY hiredate) AS prev_sal`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "SELECT ename, hiredate, sal, LAG(sal) OVER (ORDER BY hiredate) AS prev_sal FROM emp",
    "hint": "`LAG(sal) OVER (ORDER BY hiredate)` yozing.",
    "tags": [
      "WINDOW",
      "LAG",
      "HIREDATE"
    ],
    "solutions": [
      "SELECT ename, hiredate, sal, LAG(sal) OVER (ORDER BY hiredate) AS prev_sal FROM emp"
    ],
    "task": "Xodimlarning `ename`, `hiredate`, `sal` va oldingi maoshni (`LAG(sal) OVER (ORDER BY hiredate) AS prev_sal`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 121,
    "sector": 9,
    "difficulty": "Floor 9 • Hard",
    "source": "S07 Task 1 & 2 CTE Appendix • Common Table Expressions",
    "title": "CTE Orqali Bo'lim O'rtacha Maoshini Hisoblash (WITH cte AS)",
    "story": "Murakkab so'rovlarni o'qilishi oson va modulli qilish uchun WITH umumiy jadval ifodasidan foydalaniladi.",
    "taskUz": "CTE (`WITH dept_summary AS (...)`) yaratib, bo'lim raqami (`deptno`) va o'rtacha maoshni (`avg_sal`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "WITH dept_summary AS (SELECT deptno, AVG(sal) AS avg_sal FROM emp GROUP BY deptno) SELECT deptno, avg_sal FROM dept_summary",
    "hint": "`WITH dept_summary AS (SELECT deptno, AVG(sal) AS avg_sal FROM emp GROUP BY deptno) SELECT ...` yozing.",
    "tags": [
      "CTE",
      "WITH",
      "MODULAR"
    ],
    "solutions": [
      "WITH dept_summary AS (SELECT deptno, AVG(sal) AS avg_sal FROM emp GROUP BY deptno) SELECT deptno, avg_sal FROM dept_summary"
    ],
    "task": "CTE (`WITH dept_summary AS (...)`) yaratib, bo'lim raqami (`deptno`) va o'rtacha maoshni (`avg_sal`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 122,
    "sector": 9,
    "difficulty": "Floor 9 • Hard",
    "source": "S07 Task 1 & 2 CTE Appendix • Common Table Expressions",
    "title": "Top-2 Maosh Oluvchi Xodimlar (CTE va DENSE_RANK)",
    "story": "S07 Task 3 va CTE: Window funksiyani to'g'ridan-to'g'ri WHERE da ishlatib bo'lmaydi. Shuning uchun CTE dan foydalaning.",
    "taskUz": "CTE orqali har bir bo'limdan eng yuqori maosh oluvchi dastlabki 2 ta xodimni chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "WITH ranked_emp AS (SELECT deptno, ename, sal, DENSE_RANK() OVER (PARTITION BY deptno ORDER BY sal DESC) AS rnk FROM emp) SELECT deptno, ename, sal FROM ranked_emp WHERE rnk <= 2",
    "hint": "`WITH ranked_emp AS (...) SELECT ... WHERE rnk <= 2` deb yozing.",
    "tags": [
      "CTE",
      "DENSE_RANK",
      "TOP2"
    ],
    "solutions": [
      "WITH ranked_emp AS (SELECT deptno, ename, sal, DENSE_RANK() OVER (PARTITION BY deptno ORDER BY sal DESC) AS rnk FROM emp) SELECT deptno, ename, sal FROM ranked_emp WHERE rnk <= 2"
    ],
    "task": "CTE orqali har bir bo'limdan eng yuqori maosh oluvchi dastlabki 2 ta xodimni chiqaring.",
    "explanation": ""
  },
  {
    "id": 123,
    "sector": 9,
    "difficulty": "Floor 9 • Hard",
    "source": "S07 Task 1 & 2 CTE Appendix • Common Table Expressions",
    "title": "CTE Bilan Bo'limdagi Birinchi Xodim (ROW_NUMBER = 1)",
    "story": "Alifbo bo'yicha har bir bo'limdagi birinchi xodimni ko'rsatish talab qilinadi.",
    "taskUz": "CTE yordamida har bir bo'limdagi alifbo bo'yicha 1-o'rindagi xodimning `deptno`, `ename`, `sal` qiymatlarini chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "WITH first_emp AS (SELECT deptno, ename, sal, ROW_NUMBER() OVER (PARTITION BY deptno ORDER BY ename) AS rn FROM emp) SELECT deptno, ename, sal FROM first_emp WHERE rn = 1",
    "hint": "`WITH first_emp AS (...) SELECT ... WHERE rn = 1` yozing.",
    "tags": [
      "CTE",
      "ROW_NUMBER",
      "FIRST"
    ],
    "solutions": [
      "WITH first_emp AS (SELECT deptno, ename, sal, ROW_NUMBER() OVER (PARTITION BY deptno ORDER BY ename) AS rn FROM emp) SELECT deptno, ename, sal FROM first_emp WHERE rn = 1"
    ],
    "task": "CTE yordamida har bir bo'limdagi alifbo bo'yicha 1-o'rindagi xodimning `deptno`, `ename`, `sal` qiymatlarini chiqaring.",
    "explanation": ""
  },
  {
    "id": 124,
    "sector": 9,
    "difficulty": "Floor 9 • Hard",
    "source": "S07 Task 1 & 2 CTE Appendix • Common Table Expressions",
    "title": "CTE & Analitik So'rovlar Arxitekturasi (4-Bosqich)",
    "story": "Kompaniya bo'limlari statistikasi va tahlillarini WITH yordamida shakllantirish.",
    "taskUz": "CTE dan foydalanib bo'limlar bo'yicha o'rtacha maoshni chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "WITH d_stats AS (SELECT deptno, AVG(sal) AS avg_sal FROM emp GROUP BY deptno) SELECT deptno, avg_sal FROM d_stats",
    "hint": "`WITH d_stats AS (...) SELECT ...` yozing.",
    "tags": [
      "CTE",
      "AGGREGATE",
      "DEPT"
    ],
    "solutions": [
      "WITH d_stats AS (SELECT deptno, AVG(sal) AS avg_sal FROM emp GROUP BY deptno) SELECT deptno, avg_sal FROM d_stats"
    ],
    "task": "CTE dan foydalanib bo'limlar bo'yicha o'rtacha maoshni chiqaring.",
    "explanation": ""
  },
  {
    "id": 125,
    "sector": 9,
    "difficulty": "Floor 9 • Hard",
    "source": "S07 Task 1 & 2 CTE Appendix • Common Table Expressions",
    "title": "CTE & Analitik So'rovlar Arxitekturasi (5-Bosqich)",
    "story": "Kompaniya bo'limlari statistikasi va tahlillarini WITH yordamida shakllantirish.",
    "taskUz": "CTE dan foydalanib bo'limlar bo'yicha o'rtacha maoshni chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "WITH d_stats AS (SELECT deptno, AVG(sal) AS avg_sal FROM emp GROUP BY deptno) SELECT deptno, avg_sal FROM d_stats",
    "hint": "`WITH d_stats AS (...) SELECT ...` yozing.",
    "tags": [
      "CTE",
      "AGGREGATE",
      "DEPT"
    ],
    "solutions": [
      "WITH d_stats AS (SELECT deptno, AVG(sal) AS avg_sal FROM emp GROUP BY deptno) SELECT deptno, avg_sal FROM d_stats"
    ],
    "task": "CTE dan foydalanib bo'limlar bo'yicha o'rtacha maoshni chiqaring.",
    "explanation": ""
  },
  {
    "id": 126,
    "sector": 9,
    "difficulty": "Floor 9 • Hard",
    "source": "S07 Task 1 & 2 CTE Appendix • Common Table Expressions",
    "title": "CTE & Analitik So'rovlar Arxitekturasi (6-Bosqich)",
    "story": "Kompaniya bo'limlari statistikasi va tahlillarini WITH yordamida shakllantirish.",
    "taskUz": "CTE dan foydalanib bo'limlar bo'yicha o'rtacha maoshni chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "WITH d_stats AS (SELECT deptno, AVG(sal) AS avg_sal FROM emp GROUP BY deptno) SELECT deptno, avg_sal FROM d_stats",
    "hint": "`WITH d_stats AS (...) SELECT ...` yozing.",
    "tags": [
      "CTE",
      "AGGREGATE",
      "DEPT"
    ],
    "solutions": [
      "WITH d_stats AS (SELECT deptno, AVG(sal) AS avg_sal FROM emp GROUP BY deptno) SELECT deptno, avg_sal FROM d_stats"
    ],
    "task": "CTE dan foydalanib bo'limlar bo'yicha o'rtacha maoshni chiqaring.",
    "explanation": ""
  },
  {
    "id": 127,
    "sector": 9,
    "difficulty": "Floor 9 • Hard",
    "source": "S07 Task 1 & 2 CTE Appendix • Common Table Expressions",
    "title": "CTE & Analitik So'rovlar Arxitekturasi (7-Bosqich)",
    "story": "Kompaniya bo'limlari statistikasi va tahlillarini WITH yordamida shakllantirish.",
    "taskUz": "CTE dan foydalanib bo'limlar bo'yicha o'rtacha maoshni chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "WITH d_stats AS (SELECT deptno, AVG(sal) AS avg_sal FROM emp GROUP BY deptno) SELECT deptno, avg_sal FROM d_stats",
    "hint": "`WITH d_stats AS (...) SELECT ...` yozing.",
    "tags": [
      "CTE",
      "AGGREGATE",
      "DEPT"
    ],
    "solutions": [
      "WITH d_stats AS (SELECT deptno, AVG(sal) AS avg_sal FROM emp GROUP BY deptno) SELECT deptno, avg_sal FROM d_stats"
    ],
    "task": "CTE dan foydalanib bo'limlar bo'yicha o'rtacha maoshni chiqaring.",
    "explanation": ""
  },
  {
    "id": 128,
    "sector": 9,
    "difficulty": "Floor 9 • Hard",
    "source": "S07 Task 1 & 2 CTE Appendix • Common Table Expressions",
    "title": "CTE & Analitik So'rovlar Arxitekturasi (8-Bosqich)",
    "story": "Kompaniya bo'limlari statistikasi va tahlillarini WITH yordamida shakllantirish.",
    "taskUz": "CTE dan foydalanib bo'limlar bo'yicha o'rtacha maoshni chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "WITH d_stats AS (SELECT deptno, AVG(sal) AS avg_sal FROM emp GROUP BY deptno) SELECT deptno, avg_sal FROM d_stats",
    "hint": "`WITH d_stats AS (...) SELECT ...` yozing.",
    "tags": [
      "CTE",
      "AGGREGATE",
      "DEPT"
    ],
    "solutions": [
      "WITH d_stats AS (SELECT deptno, AVG(sal) AS avg_sal FROM emp GROUP BY deptno) SELECT deptno, avg_sal FROM d_stats"
    ],
    "task": "CTE dan foydalanib bo'limlar bo'yicha o'rtacha maoshni chiqaring.",
    "explanation": ""
  },
  {
    "id": 129,
    "sector": 9,
    "difficulty": "Floor 9 • Hard",
    "source": "S07 Task 1 & 2 CTE Appendix • Common Table Expressions",
    "title": "CTE & Analitik So'rovlar Arxitekturasi (9-Bosqich)",
    "story": "Kompaniya bo'limlari statistikasi va tahlillarini WITH yordamida shakllantirish.",
    "taskUz": "CTE dan foydalanib bo'limlar bo'yicha o'rtacha maoshni chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "WITH d_stats AS (SELECT deptno, AVG(sal) AS avg_sal FROM emp GROUP BY deptno) SELECT deptno, avg_sal FROM d_stats",
    "hint": "`WITH d_stats AS (...) SELECT ...` yozing.",
    "tags": [
      "CTE",
      "AGGREGATE",
      "DEPT"
    ],
    "solutions": [
      "WITH d_stats AS (SELECT deptno, AVG(sal) AS avg_sal FROM emp GROUP BY deptno) SELECT deptno, avg_sal FROM d_stats"
    ],
    "task": "CTE dan foydalanib bo'limlar bo'yicha o'rtacha maoshni chiqaring.",
    "explanation": ""
  },
  {
    "id": 130,
    "sector": 9,
    "difficulty": "Floor 9 • Hard",
    "source": "S07 Task 1 & 2 CTE Appendix • Common Table Expressions",
    "title": "CTE & Analitik So'rovlar Arxitekturasi (10-Bosqich)",
    "story": "Kompaniya bo'limlari statistikasi va tahlillarini WITH yordamida shakllantirish.",
    "taskUz": "CTE dan foydalanib bo'limlar bo'yicha o'rtacha maoshni chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "WITH d_stats AS (SELECT deptno, AVG(sal) AS avg_sal FROM emp GROUP BY deptno) SELECT deptno, avg_sal FROM d_stats",
    "hint": "`WITH d_stats AS (...) SELECT ...` yozing.",
    "tags": [
      "CTE",
      "AGGREGATE",
      "DEPT"
    ],
    "solutions": [
      "WITH d_stats AS (SELECT deptno, AVG(sal) AS avg_sal FROM emp GROUP BY deptno) SELECT deptno, avg_sal FROM d_stats"
    ],
    "task": "CTE dan foydalanib bo'limlar bo'yicha o'rtacha maoshni chiqaring.",
    "explanation": ""
  },
  {
    "id": 131,
    "sector": 9,
    "difficulty": "Floor 9 • Hard",
    "source": "S07 Task 1 & 2 CTE Appendix • Common Table Expressions",
    "title": "CTE & Analitik So'rovlar Arxitekturasi (11-Bosqich)",
    "story": "Kompaniya bo'limlari statistikasi va tahlillarini WITH yordamida shakllantirish.",
    "taskUz": "CTE dan foydalanib bo'limlar bo'yicha o'rtacha maoshni chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "WITH d_stats AS (SELECT deptno, AVG(sal) AS avg_sal FROM emp GROUP BY deptno) SELECT deptno, avg_sal FROM d_stats",
    "hint": "`WITH d_stats AS (...) SELECT ...` yozing.",
    "tags": [
      "CTE",
      "AGGREGATE",
      "DEPT"
    ],
    "solutions": [
      "WITH d_stats AS (SELECT deptno, AVG(sal) AS avg_sal FROM emp GROUP BY deptno) SELECT deptno, avg_sal FROM d_stats"
    ],
    "task": "CTE dan foydalanib bo'limlar bo'yicha o'rtacha maoshni chiqaring.",
    "explanation": ""
  },
  {
    "id": 132,
    "sector": 9,
    "difficulty": "Floor 9 • Hard",
    "source": "S07 Task 1 & 2 CTE Appendix • Common Table Expressions",
    "title": "CTE & Analitik So'rovlar Arxitekturasi (12-Bosqich)",
    "story": "Kompaniya bo'limlari statistikasi va tahlillarini WITH yordamida shakllantirish.",
    "taskUz": "CTE dan foydalanib bo'limlar bo'yicha o'rtacha maoshni chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "WITH d_stats AS (SELECT deptno, AVG(sal) AS avg_sal FROM emp GROUP BY deptno) SELECT deptno, avg_sal FROM d_stats",
    "hint": "`WITH d_stats AS (...) SELECT ...` yozing.",
    "tags": [
      "CTE",
      "AGGREGATE",
      "DEPT"
    ],
    "solutions": [
      "WITH d_stats AS (SELECT deptno, AVG(sal) AS avg_sal FROM emp GROUP BY deptno) SELECT deptno, avg_sal FROM d_stats"
    ],
    "task": "CTE dan foydalanib bo'limlar bo'yicha o'rtacha maoshni chiqaring.",
    "explanation": ""
  },
  {
    "id": 133,
    "sector": 9,
    "difficulty": "Floor 9 • Hard",
    "source": "S07 Task 1 & 2 CTE Appendix • Common Table Expressions",
    "title": "CTE & Analitik So'rovlar Arxitekturasi (13-Bosqich)",
    "story": "Kompaniya bo'limlari statistikasi va tahlillarini WITH yordamida shakllantirish.",
    "taskUz": "CTE dan foydalanib bo'limlar bo'yicha o'rtacha maoshni chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "WITH d_stats AS (SELECT deptno, AVG(sal) AS avg_sal FROM emp GROUP BY deptno) SELECT deptno, avg_sal FROM d_stats",
    "hint": "`WITH d_stats AS (...) SELECT ...` yozing.",
    "tags": [
      "CTE",
      "AGGREGATE",
      "DEPT"
    ],
    "solutions": [
      "WITH d_stats AS (SELECT deptno, AVG(sal) AS avg_sal FROM emp GROUP BY deptno) SELECT deptno, avg_sal FROM d_stats"
    ],
    "task": "CTE dan foydalanib bo'limlar bo'yicha o'rtacha maoshni chiqaring.",
    "explanation": ""
  },
  {
    "id": 134,
    "sector": 9,
    "difficulty": "Floor 9 • Hard",
    "source": "S07 Task 1 & 2 CTE Appendix • Common Table Expressions",
    "title": "CTE & Analitik So'rovlar Arxitekturasi (14-Bosqich)",
    "story": "Kompaniya bo'limlari statistikasi va tahlillarini WITH yordamida shakllantirish.",
    "taskUz": "CTE dan foydalanib bo'limlar bo'yicha o'rtacha maoshni chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "WITH d_stats AS (SELECT deptno, AVG(sal) AS avg_sal FROM emp GROUP BY deptno) SELECT deptno, avg_sal FROM d_stats",
    "hint": "`WITH d_stats AS (...) SELECT ...` yozing.",
    "tags": [
      "CTE",
      "AGGREGATE",
      "DEPT"
    ],
    "solutions": [
      "WITH d_stats AS (SELECT deptno, AVG(sal) AS avg_sal FROM emp GROUP BY deptno) SELECT deptno, avg_sal FROM d_stats"
    ],
    "task": "CTE dan foydalanib bo'limlar bo'yicha o'rtacha maoshni chiqaring.",
    "explanation": ""
  },
  {
    "id": 135,
    "sector": 9,
    "difficulty": "Floor 9 • Hard",
    "source": "S07 Task 1 & 2 CTE Appendix • Common Table Expressions",
    "title": "CTE & Analitik So'rovlar Arxitekturasi (15-Bosqich)",
    "story": "Kompaniya bo'limlari statistikasi va tahlillarini WITH yordamida shakllantirish.",
    "taskUz": "CTE dan foydalanib bo'limlar bo'yicha o'rtacha maoshni chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "WITH d_stats AS (SELECT deptno, AVG(sal) AS avg_sal FROM emp GROUP BY deptno) SELECT deptno, avg_sal FROM d_stats",
    "hint": "`WITH d_stats AS (...) SELECT ...` yozing.",
    "tags": [
      "CTE",
      "AGGREGATE",
      "DEPT"
    ],
    "solutions": [
      "WITH d_stats AS (SELECT deptno, AVG(sal) AS avg_sal FROM emp GROUP BY deptno) SELECT deptno, avg_sal FROM d_stats"
    ],
    "task": "CTE dan foydalanib bo'limlar bo'yicha o'rtacha maoshni chiqaring.",
    "explanation": ""
  },
  {
    "id": 136,
    "sector": 10,
    "difficulty": "Floor 10 • Expert",
    "source": "S07 Part B & CW1 Task 7 • Recursive CTE & Query Optimization",
    "title": "Prezident KING Ierarxik Rahbarlik Daraxti (WITH RECURSIVE)",
    "story": "Kompaniya ierarxiyasida KING dan boshlab barcha xodimlarni boshqaruv darajalari bo'yicha daraxt qilib chiqarish.",
    "taskUz": "Rekursiv CTE yordamida barcha xodimlarning `empno`, `ename` va ularning ierarxik darajasini (`lvl`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "WITH RECURSIVE org AS (SELECT empno, ename, mgr, 1 AS lvl FROM emp WHERE mgr IS NULL UNION ALL SELECT e.empno, e.ename, e.mgr, o.lvl + 1 FROM emp e JOIN org o ON e.mgr = o.empno) SELECT empno, ename, lvl FROM org",
    "hint": "`WITH RECURSIVE org AS (...) SELECT empno, ename, lvl FROM org` yozing.",
    "tags": [
      "RECURSIVE_CTE",
      "HIERARCHY",
      "LEVEL"
    ],
    "solutions": [
      "WITH RECURSIVE org AS (SELECT empno, ename, mgr, 1 AS lvl FROM emp WHERE mgr IS NULL UNION ALL SELECT e.empno, e.ename, e.mgr, o.lvl + 1 FROM emp e JOIN org o ON e.mgr = o.empno) SELECT empno, ename, lvl FROM org"
    ],
    "task": "Rekursiv CTE yordamida barcha xodimlarning `empno`, `ename` va ularning ierarxik darajasini (`lvl`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 137,
    "sector": 10,
    "difficulty": "Floor 10 • Expert",
    "source": "S07 Part B & CW1 Task 7 • Recursive CTE & Query Optimization",
    "title": "So'rov Rejasini Ko'rish (EXPLAIN Plan)",
    "story": "S07 Part B: PostgreSQL da so'rov qanday reja bilan bajarilishini ko'rish uchun EXPLAIN kalit so'zi qo'llaniladi.",
    "taskUz": "`emp` jadvalidan `sal > 2000` bo'lgan xodimlarni olish so'rovi rejasini (`EXPLAIN`) chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "EXPLAIN SELECT * FROM emp WHERE sal > 2000",
    "hint": "`EXPLAIN SELECT * FROM emp WHERE sal > 2000` deb yozing.",
    "tags": [
      "EXPLAIN",
      "QUERY_PLAN",
      "OPTIMIZATION"
    ],
    "solutions": [
      "EXPLAIN SELECT * FROM emp WHERE sal > 2000"
    ],
    "task": "`emp` jadvalidan `sal > 2000` bo'lgan xodimlarni olish so'rovi rejasini (`EXPLAIN`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 138,
    "sector": 10,
    "difficulty": "Floor 10 • Expert",
    "source": "S07 Part B & CW1 Task 7 • Recursive CTE & Query Optimization",
    "title": "Bajarilish Vaqti Bilan So'rov Tahlili (EXPLAIN ANALYZE)",
    "story": "Haqiqiy bajarilish vaqti (actual time) va loops sonini ko'rish uchun EXPLAIN ANALYZE ishlatiladi.",
    "taskUz": "`EXPLAIN ANALYZE` orqali `deptno = 10` shartli so'rovning aniq bajarilish statistikasini chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "EXPLAIN ANALYZE SELECT * FROM emp WHERE deptno = 10",
    "hint": "`EXPLAIN ANALYZE SELECT * FROM emp WHERE deptno = 10` deb yozing.",
    "tags": [
      "EXPLAIN_ANALYZE",
      "PERFORMANCE",
      "COST"
    ],
    "solutions": [
      "EXPLAIN ANALYZE SELECT * FROM emp WHERE deptno = 10"
    ],
    "task": "`EXPLAIN ANALYZE` orqali `deptno = 10` shartli so'rovning aniq bajarilish statistikasini chiqaring.",
    "explanation": ""
  },
  {
    "id": 139,
    "sector": 10,
    "difficulty": "Floor 10 • Expert",
    "source": "S07 Part B & CW1 Task 7 • Recursive CTE & Query Optimization",
    "title": "Oyna Funksiyasi Uchun B-Tree Indeks Yaratish",
    "story": "Bo'lim va maosh bo'yicha saralashni tezlashtirish uchun indeks yaratish tavsiya etiladi.",
    "taskUz": "`emp` jadvalining `deptno` va `sal DESC` ustunlari ustida `idx_emp_deptno_sal` nomli indeks yarating.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "CREATE INDEX idx_emp_deptno_sal ON emp(deptno, sal DESC)",
    "hint": "`CREATE INDEX idx_emp_deptno_sal ON emp(deptno, sal DESC)` yozing.",
    "tags": [
      "INDEX",
      "CREATE_INDEX",
      "BTREE"
    ],
    "solutions": [
      "CREATE INDEX idx_emp_deptno_sal ON emp(deptno, sal DESC)"
    ],
    "task": "`emp` jadvalining `deptno` va `sal DESC` ustunlari ustida `idx_emp_deptno_sal` nomli indeks yarating.",
    "explanation": ""
  },
  {
    "id": 140,
    "sector": 10,
    "difficulty": "Floor 10 • Expert",
    "source": "S07 Part B & CW1 Task 7 • Recursive CTE & Query Optimization",
    "title": "Ilg'or Optimizatsiya & Boshqaruv Hisoboti (5-Topshiriq)",
    "story": "Kompaniya bosh muhandisi so'rov rejalarini tahlil qilishni davom ettirmoqda.",
    "taskUz": "`EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000` so'rov rejasini chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000",
    "hint": "`EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000` yozing.",
    "tags": [
      "EXPLAIN",
      "COST",
      "TUNING"
    ],
    "solutions": [
      "EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000"
    ],
    "task": "`EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000` so'rov rejasini chiqaring.",
    "explanation": ""
  },
  {
    "id": 141,
    "sector": 10,
    "difficulty": "Floor 10 • Expert",
    "source": "S07 Part B & CW1 Task 7 • Recursive CTE & Query Optimization",
    "title": "Ilg'or Optimizatsiya & Boshqaruv Hisoboti (6-Topshiriq)",
    "story": "Kompaniya bosh muhandisi so'rov rejalarini tahlil qilishni davom ettirmoqda.",
    "taskUz": "`EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000` so'rov rejasini chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000",
    "hint": "`EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000` yozing.",
    "tags": [
      "EXPLAIN",
      "COST",
      "TUNING"
    ],
    "solutions": [
      "EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000"
    ],
    "task": "`EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000` so'rov rejasini chiqaring.",
    "explanation": ""
  },
  {
    "id": 142,
    "sector": 10,
    "difficulty": "Floor 10 • Expert",
    "source": "S07 Part B & CW1 Task 7 • Recursive CTE & Query Optimization",
    "title": "Ilg'or Optimizatsiya & Boshqaruv Hisoboti (7-Topshiriq)",
    "story": "Kompaniya bosh muhandisi so'rov rejalarini tahlil qilishni davom ettirmoqda.",
    "taskUz": "`EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000` so'rov rejasini chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000",
    "hint": "`EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000` yozing.",
    "tags": [
      "EXPLAIN",
      "COST",
      "TUNING"
    ],
    "solutions": [
      "EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000"
    ],
    "task": "`EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000` so'rov rejasini chiqaring.",
    "explanation": ""
  },
  {
    "id": 143,
    "sector": 10,
    "difficulty": "Floor 10 • Expert",
    "source": "S07 Part B & CW1 Task 7 • Recursive CTE & Query Optimization",
    "title": "Ilg'or Optimizatsiya & Boshqaruv Hisoboti (8-Topshiriq)",
    "story": "Kompaniya bosh muhandisi so'rov rejalarini tahlil qilishni davom ettirmoqda.",
    "taskUz": "`EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000` so'rov rejasini chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000",
    "hint": "`EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000` yozing.",
    "tags": [
      "EXPLAIN",
      "COST",
      "TUNING"
    ],
    "solutions": [
      "EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000"
    ],
    "task": "`EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000` so'rov rejasini chiqaring.",
    "explanation": ""
  },
  {
    "id": 144,
    "sector": 10,
    "difficulty": "Floor 10 • Expert",
    "source": "S07 Part B & CW1 Task 7 • Recursive CTE & Query Optimization",
    "title": "Ilg'or Optimizatsiya & Boshqaruv Hisoboti (9-Topshiriq)",
    "story": "Kompaniya bosh muhandisi so'rov rejalarini tahlil qilishni davom ettirmoqda.",
    "taskUz": "`EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000` so'rov rejasini chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000",
    "hint": "`EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000` yozing.",
    "tags": [
      "EXPLAIN",
      "COST",
      "TUNING"
    ],
    "solutions": [
      "EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000"
    ],
    "task": "`EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000` so'rov rejasini chiqaring.",
    "explanation": ""
  },
  {
    "id": 145,
    "sector": 10,
    "difficulty": "Floor 10 • Expert",
    "source": "S07 Part B & CW1 Task 7 • Recursive CTE & Query Optimization",
    "title": "Ilg'or Optimizatsiya & Boshqaruv Hisoboti (10-Topshiriq)",
    "story": "Kompaniya bosh muhandisi so'rov rejalarini tahlil qilishni davom ettirmoqda.",
    "taskUz": "`EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000` so'rov rejasini chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000",
    "hint": "`EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000` yozing.",
    "tags": [
      "EXPLAIN",
      "COST",
      "TUNING"
    ],
    "solutions": [
      "EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000"
    ],
    "task": "`EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000` so'rov rejasini chiqaring.",
    "explanation": ""
  },
  {
    "id": 146,
    "sector": 10,
    "difficulty": "Floor 10 • Expert",
    "source": "S07 Part B & CW1 Task 7 • Recursive CTE & Query Optimization",
    "title": "Ilg'or Optimizatsiya & Boshqaruv Hisoboti (11-Topshiriq)",
    "story": "Kompaniya bosh muhandisi so'rov rejalarini tahlil qilishni davom ettirmoqda.",
    "taskUz": "`EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000` so'rov rejasini chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000",
    "hint": "`EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000` yozing.",
    "tags": [
      "EXPLAIN",
      "COST",
      "TUNING"
    ],
    "solutions": [
      "EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000"
    ],
    "task": "`EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000` so'rov rejasini chiqaring.",
    "explanation": ""
  },
  {
    "id": 147,
    "sector": 10,
    "difficulty": "Floor 10 • Expert",
    "source": "S07 Part B & CW1 Task 7 • Recursive CTE & Query Optimization",
    "title": "Ilg'or Optimizatsiya & Boshqaruv Hisoboti (12-Topshiriq)",
    "story": "Kompaniya bosh muhandisi so'rov rejalarini tahlil qilishni davom ettirmoqda.",
    "taskUz": "`EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000` so'rov rejasini chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000",
    "hint": "`EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000` yozing.",
    "tags": [
      "EXPLAIN",
      "COST",
      "TUNING"
    ],
    "solutions": [
      "EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000"
    ],
    "task": "`EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000` so'rov rejasini chiqaring.",
    "explanation": ""
  },
  {
    "id": 148,
    "sector": 10,
    "difficulty": "Floor 10 • Expert",
    "source": "S07 Part B & CW1 Task 7 • Recursive CTE & Query Optimization",
    "title": "Ilg'or Optimizatsiya & Boshqaruv Hisoboti (13-Topshiriq)",
    "story": "Kompaniya bosh muhandisi so'rov rejalarini tahlil qilishni davom ettirmoqda.",
    "taskUz": "`EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000` so'rov rejasini chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000",
    "hint": "`EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000` yozing.",
    "tags": [
      "EXPLAIN",
      "COST",
      "TUNING"
    ],
    "solutions": [
      "EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000"
    ],
    "task": "`EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000` so'rov rejasini chiqaring.",
    "explanation": ""
  },
  {
    "id": 149,
    "sector": 10,
    "difficulty": "Floor 10 • Expert",
    "source": "S07 Part B & CW1 Task 7 • Recursive CTE & Query Optimization",
    "title": "Ilg'or Optimizatsiya & Boshqaruv Hisoboti (14-Topshiriq)",
    "story": "Kompaniya bosh muhandisi so'rov rejalarini tahlil qilishni davom ettirmoqda.",
    "taskUz": "`EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000` so'rov rejasini chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000",
    "hint": "`EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000` yozing.",
    "tags": [
      "EXPLAIN",
      "COST",
      "TUNING"
    ],
    "solutions": [
      "EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000"
    ],
    "task": "`EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000` so'rov rejasini chiqaring.",
    "explanation": ""
  },
  {
    "id": 150,
    "sector": 10,
    "difficulty": "Floor 10 • Expert",
    "source": "S07 Part B & CW1 Task 7 • Recursive CTE & Query Optimization",
    "title": "Ilg'or Optimizatsiya & Boshqaruv Hisoboti (15-Topshiriq)",
    "story": "Kompaniya bosh muhandisi so'rov rejalarini tahlil qilishni davom ettirmoqda.",
    "taskUz": "`EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000` so'rov rejasini chiqaring.\n\n📋 **Kutilayotgan Natija Ustunlari & Manbalar:**\n• Asosiy jadval: `emp`",
    "expectedSql": "EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000",
    "hint": "`EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000` yozing.",
    "tags": [
      "EXPLAIN",
      "COST",
      "TUNING"
    ],
    "solutions": [
      "EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000"
    ],
    "task": "`EXPLAIN SELECT ename, sal FROM emp WHERE sal >= 3000` so'rov rejasini chiqaring.",
    "explanation": ""
  }
];
