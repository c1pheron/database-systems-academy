var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);

_scope.QUESTIONS_101_150 = [
  {
    "id": 101,
    "sector": 7,
    "difficulty": "Floor 7 • Hard",
    "source": "L09 Part 2 Slide 6-10 • TCL Commands",
    "title": "TCL Tranzaksiya Nazorati (11-Topshiriq)",
    "story": "Tranzaksiya chegaralarini boshqarish.",
    "taskUz": "Tranzaksiyani muvaffaqiyatli yakunlang: `COMMIT`.\n\n📋 **Kutilayotgan Buyruq:**\n• TCL buyrug'i",
    "expectedSql": "COMMIT",
    "hint": "`COMMIT` yozing.",
    "tags": [
      "TCL",
      "COMMIT",
      "CONSISTENCY"
    ],
    "solutions": [
      "COMMIT"
    ],
    "task": "Tranzaksiyani muvaffaqiyatli yakunlang: `COMMIT`.",
    "explanation": ""
  },
  {
    "id": 102,
    "sector": 7,
    "difficulty": "Floor 7 • Hard",
    "source": "L09 Part 2 Slide 6-10 • TCL Commands",
    "title": "TCL Tranzaksiya Nazorati (12-Topshiriq)",
    "story": "Tranzaksiya chegaralarini boshqarish.",
    "taskUz": "Tranzaksiyani muvaffaqiyatli yakunlang: `COMMIT`.\n\n📋 **Kutilayotgan Buyruq:**\n• TCL buyrug'i",
    "expectedSql": "COMMIT",
    "hint": "`COMMIT` yozing.",
    "tags": [
      "TCL",
      "COMMIT",
      "CONSISTENCY"
    ],
    "solutions": [
      "COMMIT"
    ],
    "task": "Tranzaksiyani muvaffaqiyatli yakunlang: `COMMIT`.",
    "explanation": ""
  },
  {
    "id": 103,
    "sector": 7,
    "difficulty": "Floor 7 • Hard",
    "source": "L09 Part 2 Slide 6-10 • TCL Commands",
    "title": "TCL Tranzaksiya Nazorati (13-Topshiriq)",
    "story": "Tranzaksiya chegaralarini boshqarish.",
    "taskUz": "Tranzaksiyani muvaffaqiyatli yakunlang: `COMMIT`.\n\n📋 **Kutilayotgan Buyruq:**\n• TCL buyrug'i",
    "expectedSql": "COMMIT",
    "hint": "`COMMIT` yozing.",
    "tags": [
      "TCL",
      "COMMIT",
      "CONSISTENCY"
    ],
    "solutions": [
      "COMMIT"
    ],
    "task": "Tranzaksiyani muvaffaqiyatli yakunlang: `COMMIT`.",
    "explanation": ""
  },
  {
    "id": 104,
    "sector": 7,
    "difficulty": "Floor 7 • Hard",
    "source": "L09 Part 2 Slide 6-10 • TCL Commands",
    "title": "TCL Tranzaksiya Nazorati (14-Topshiriq)",
    "story": "Tranzaksiya chegaralarini boshqarish.",
    "taskUz": "Tranzaksiyani muvaffaqiyatli yakunlang: `COMMIT`.\n\n📋 **Kutilayotgan Buyruq:**\n• TCL buyrug'i",
    "expectedSql": "COMMIT",
    "hint": "`COMMIT` yozing.",
    "tags": [
      "TCL",
      "COMMIT",
      "CONSISTENCY"
    ],
    "solutions": [
      "COMMIT"
    ],
    "task": "Tranzaksiyani muvaffaqiyatli yakunlang: `COMMIT`.",
    "explanation": ""
  },
  {
    "id": 105,
    "sector": 7,
    "difficulty": "Floor 7 • Hard",
    "source": "L09 Part 2 Slide 6-10 • TCL Commands",
    "title": "TCL Tranzaksiya Nazorati (15-Topshiriq)",
    "story": "Tranzaksiya chegaralarini boshqarish.",
    "taskUz": "Tranzaksiyani muvaffaqiyatli yakunlang: `COMMIT`.\n\n📋 **Kutilayotgan Buyruq:**\n• TCL buyrug'i",
    "expectedSql": "COMMIT",
    "hint": "`COMMIT` yozing.",
    "tags": [
      "TCL",
      "COMMIT",
      "CONSISTENCY"
    ],
    "solutions": [
      "COMMIT"
    ],
    "task": "Tranzaksiyani muvaffaqiyatli yakunlang: `COMMIT`.",
    "explanation": ""
  },
  {
    "id": 106,
    "sector": 8,
    "difficulty": "Floor 8 • Hard",
    "source": "L09 Part 2 Slide 14-20 • Concurrency Anomalies",
    "title": "Lost Update va Dirty Read Tahlili",
    "story": "Bitta tranzaksiya commit qilmasdan yozgan ma'lumotni boshqasi o'qib olsa, Dirty Read xatosi kelib chiqadi.",
    "taskUz": "Tizim qulflari ro'yxatini chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• pg_locks so'rovi",
    "expectedSql": "SELECT locktype, relation, mode, granted FROM pg_locks",
    "hint": "`SELECT locktype, relation, mode, granted FROM pg_locks` yozing.",
    "tags": [
      "CONCURRENCY",
      "ANOMALIES",
      "LOCKS"
    ],
    "solutions": [
      "SELECT locktype, relation, mode, granted FROM pg_locks"
    ],
    "task": "Tizim qulflari ro'yxatini chiqaring.",
    "explanation": ""
  },
  {
    "id": 107,
    "sector": 8,
    "difficulty": "Floor 8 • Hard",
    "source": "L09 Part 2 Slide 14-20 • Concurrency Anomalies",
    "title": "Parallel Bajarilish & Anomaliyalar Auditi (2-Qadam)",
    "story": "L09 Part 2 Slide 14: 1. Lost Update, 2. Dirty Read (G1), 3. Non-Repeatable Read (G2a), 4. Phantom Read (A3). Tizim blokirovkalarini tekshiring.",
    "taskUz": "Tizimdagi joriy qulflarni `pg_locks` jadvalidan so'rab oling.\n\n📋 **Kutilayotgan Buyruq:**\n• pg_locks so'rovi",
    "expectedSql": "SELECT locktype, relation, mode, granted FROM pg_locks",
    "hint": "`SELECT locktype, relation, mode, granted FROM pg_locks` yozing.",
    "tags": [
      "CONCURRENCY",
      "ANOMALIES",
      "LOCKS"
    ],
    "solutions": [
      "SELECT locktype, relation, mode, granted FROM pg_locks"
    ],
    "task": "Tizimdagi joriy qulflarni `pg_locks` jadvalidan so'rab oling.",
    "explanation": ""
  },
  {
    "id": 108,
    "sector": 8,
    "difficulty": "Floor 8 • Hard",
    "source": "L09 Part 2 Slide 14-20 • Concurrency Anomalies",
    "title": "Parallel Bajarilish & Anomaliyalar Auditi (3-Qadam)",
    "story": "L09 Part 2 Slide 14: 1. Lost Update, 2. Dirty Read (G1), 3. Non-Repeatable Read (G2a), 4. Phantom Read (A3). Tizim blokirovkalarini tekshiring.",
    "taskUz": "Tizimdagi joriy qulflarni `pg_locks` jadvalidan so'rab oling.\n\n📋 **Kutilayotgan Buyruq:**\n• pg_locks so'rovi",
    "expectedSql": "SELECT locktype, relation, mode, granted FROM pg_locks",
    "hint": "`SELECT locktype, relation, mode, granted FROM pg_locks` yozing.",
    "tags": [
      "CONCURRENCY",
      "ANOMALIES",
      "LOCKS"
    ],
    "solutions": [
      "SELECT locktype, relation, mode, granted FROM pg_locks"
    ],
    "task": "Tizimdagi joriy qulflarni `pg_locks` jadvalidan so'rab oling.",
    "explanation": ""
  },
  {
    "id": 109,
    "sector": 8,
    "difficulty": "Floor 8 • Hard",
    "source": "L09 Part 2 Slide 14-20 • Concurrency Anomalies",
    "title": "Parallel Bajarilish & Anomaliyalar Auditi (4-Qadam)",
    "story": "L09 Part 2 Slide 14: 1. Lost Update, 2. Dirty Read (G1), 3. Non-Repeatable Read (G2a), 4. Phantom Read (A3). Tizim blokirovkalarini tekshiring.",
    "taskUz": "Tizimdagi joriy qulflarni `pg_locks` jadvalidan so'rab oling.\n\n📋 **Kutilayotgan Buyruq:**\n• pg_locks so'rovi",
    "expectedSql": "SELECT locktype, relation, mode, granted FROM pg_locks",
    "hint": "`SELECT locktype, relation, mode, granted FROM pg_locks` yozing.",
    "tags": [
      "CONCURRENCY",
      "ANOMALIES",
      "LOCKS"
    ],
    "solutions": [
      "SELECT locktype, relation, mode, granted FROM pg_locks"
    ],
    "task": "Tizimdagi joriy qulflarni `pg_locks` jadvalidan so'rab oling.",
    "explanation": ""
  },
  {
    "id": 110,
    "sector": 8,
    "difficulty": "Floor 8 • Hard",
    "source": "L09 Part 2 Slide 14-20 • Concurrency Anomalies",
    "title": "Parallel Bajarilish & Anomaliyalar Auditi (5-Qadam)",
    "story": "L09 Part 2 Slide 14: 1. Lost Update, 2. Dirty Read (G1), 3. Non-Repeatable Read (G2a), 4. Phantom Read (A3). Tizim blokirovkalarini tekshiring.",
    "taskUz": "Tizimdagi joriy qulflarni `pg_locks` jadvalidan so'rab oling.\n\n📋 **Kutilayotgan Buyruq:**\n• pg_locks so'rovi",
    "expectedSql": "SELECT locktype, relation, mode, granted FROM pg_locks",
    "hint": "`SELECT locktype, relation, mode, granted FROM pg_locks` yozing.",
    "tags": [
      "CONCURRENCY",
      "ANOMALIES",
      "LOCKS"
    ],
    "solutions": [
      "SELECT locktype, relation, mode, granted FROM pg_locks"
    ],
    "task": "Tizimdagi joriy qulflarni `pg_locks` jadvalidan so'rab oling.",
    "explanation": ""
  },
  {
    "id": 111,
    "sector": 8,
    "difficulty": "Floor 8 • Hard",
    "source": "L09 Part 2 Slide 14-20 • Concurrency Anomalies",
    "title": "Parallel Bajarilish & Anomaliyalar Auditi (6-Qadam)",
    "story": "L09 Part 2 Slide 14: 1. Lost Update, 2. Dirty Read (G1), 3. Non-Repeatable Read (G2a), 4. Phantom Read (A3). Tizim blokirovkalarini tekshiring.",
    "taskUz": "Tizimdagi joriy qulflarni `pg_locks` jadvalidan so'rab oling.\n\n📋 **Kutilayotgan Buyruq:**\n• pg_locks so'rovi",
    "expectedSql": "SELECT locktype, relation, mode, granted FROM pg_locks",
    "hint": "`SELECT locktype, relation, mode, granted FROM pg_locks` yozing.",
    "tags": [
      "CONCURRENCY",
      "ANOMALIES",
      "LOCKS"
    ],
    "solutions": [
      "SELECT locktype, relation, mode, granted FROM pg_locks"
    ],
    "task": "Tizimdagi joriy qulflarni `pg_locks` jadvalidan so'rab oling.",
    "explanation": ""
  },
  {
    "id": 112,
    "sector": 8,
    "difficulty": "Floor 8 • Hard",
    "source": "L09 Part 2 Slide 14-20 • Concurrency Anomalies",
    "title": "Parallel Bajarilish & Anomaliyalar Auditi (7-Qadam)",
    "story": "L09 Part 2 Slide 14: 1. Lost Update, 2. Dirty Read (G1), 3. Non-Repeatable Read (G2a), 4. Phantom Read (A3). Tizim blokirovkalarini tekshiring.",
    "taskUz": "Tizimdagi joriy qulflarni `pg_locks` jadvalidan so'rab oling.\n\n📋 **Kutilayotgan Buyruq:**\n• pg_locks so'rovi",
    "expectedSql": "SELECT locktype, relation, mode, granted FROM pg_locks",
    "hint": "`SELECT locktype, relation, mode, granted FROM pg_locks` yozing.",
    "tags": [
      "CONCURRENCY",
      "ANOMALIES",
      "LOCKS"
    ],
    "solutions": [
      "SELECT locktype, relation, mode, granted FROM pg_locks"
    ],
    "task": "Tizimdagi joriy qulflarni `pg_locks` jadvalidan so'rab oling.",
    "explanation": ""
  },
  {
    "id": 113,
    "sector": 8,
    "difficulty": "Floor 8 • Hard",
    "source": "L09 Part 2 Slide 14-20 • Concurrency Anomalies",
    "title": "Parallel Bajarilish & Anomaliyalar Auditi (8-Qadam)",
    "story": "L09 Part 2 Slide 14: 1. Lost Update, 2. Dirty Read (G1), 3. Non-Repeatable Read (G2a), 4. Phantom Read (A3). Tizim blokirovkalarini tekshiring.",
    "taskUz": "Tizimdagi joriy qulflarni `pg_locks` jadvalidan so'rab oling.\n\n📋 **Kutilayotgan Buyruq:**\n• pg_locks so'rovi",
    "expectedSql": "SELECT locktype, relation, mode, granted FROM pg_locks",
    "hint": "`SELECT locktype, relation, mode, granted FROM pg_locks` yozing.",
    "tags": [
      "CONCURRENCY",
      "ANOMALIES",
      "LOCKS"
    ],
    "solutions": [
      "SELECT locktype, relation, mode, granted FROM pg_locks"
    ],
    "task": "Tizimdagi joriy qulflarni `pg_locks` jadvalidan so'rab oling.",
    "explanation": ""
  },
  {
    "id": 114,
    "sector": 8,
    "difficulty": "Floor 8 • Hard",
    "source": "L09 Part 2 Slide 14-20 • Concurrency Anomalies",
    "title": "Parallel Bajarilish & Anomaliyalar Auditi (9-Qadam)",
    "story": "L09 Part 2 Slide 14: 1. Lost Update, 2. Dirty Read (G1), 3. Non-Repeatable Read (G2a), 4. Phantom Read (A3). Tizim blokirovkalarini tekshiring.",
    "taskUz": "Tizimdagi joriy qulflarni `pg_locks` jadvalidan so'rab oling.\n\n📋 **Kutilayotgan Buyruq:**\n• pg_locks so'rovi",
    "expectedSql": "SELECT locktype, relation, mode, granted FROM pg_locks",
    "hint": "`SELECT locktype, relation, mode, granted FROM pg_locks` yozing.",
    "tags": [
      "CONCURRENCY",
      "ANOMALIES",
      "LOCKS"
    ],
    "solutions": [
      "SELECT locktype, relation, mode, granted FROM pg_locks"
    ],
    "task": "Tizimdagi joriy qulflarni `pg_locks` jadvalidan so'rab oling.",
    "explanation": ""
  },
  {
    "id": 115,
    "sector": 8,
    "difficulty": "Floor 8 • Hard",
    "source": "L09 Part 2 Slide 14-20 • Concurrency Anomalies",
    "title": "Parallel Bajarilish & Anomaliyalar Auditi (10-Qadam)",
    "story": "L09 Part 2 Slide 14: 1. Lost Update, 2. Dirty Read (G1), 3. Non-Repeatable Read (G2a), 4. Phantom Read (A3). Tizim blokirovkalarini tekshiring.",
    "taskUz": "Tizimdagi joriy qulflarni `pg_locks` jadvalidan so'rab oling.\n\n📋 **Kutilayotgan Buyruq:**\n• pg_locks so'rovi",
    "expectedSql": "SELECT locktype, relation, mode, granted FROM pg_locks",
    "hint": "`SELECT locktype, relation, mode, granted FROM pg_locks` yozing.",
    "tags": [
      "CONCURRENCY",
      "ANOMALIES",
      "LOCKS"
    ],
    "solutions": [
      "SELECT locktype, relation, mode, granted FROM pg_locks"
    ],
    "task": "Tizimdagi joriy qulflarni `pg_locks` jadvalidan so'rab oling.",
    "explanation": ""
  },
  {
    "id": 116,
    "sector": 8,
    "difficulty": "Floor 8 • Hard",
    "source": "L09 Part 2 Slide 14-20 • Concurrency Anomalies",
    "title": "Parallel Bajarilish & Anomaliyalar Auditi (11-Qadam)",
    "story": "L09 Part 2 Slide 14: 1. Lost Update, 2. Dirty Read (G1), 3. Non-Repeatable Read (G2a), 4. Phantom Read (A3). Tizim blokirovkalarini tekshiring.",
    "taskUz": "Tizimdagi joriy qulflarni `pg_locks` jadvalidan so'rab oling.\n\n📋 **Kutilayotgan Buyruq:**\n• pg_locks so'rovi",
    "expectedSql": "SELECT locktype, relation, mode, granted FROM pg_locks",
    "hint": "`SELECT locktype, relation, mode, granted FROM pg_locks` yozing.",
    "tags": [
      "CONCURRENCY",
      "ANOMALIES",
      "LOCKS"
    ],
    "solutions": [
      "SELECT locktype, relation, mode, granted FROM pg_locks"
    ],
    "task": "Tizimdagi joriy qulflarni `pg_locks` jadvalidan so'rab oling.",
    "explanation": ""
  },
  {
    "id": 117,
    "sector": 8,
    "difficulty": "Floor 8 • Hard",
    "source": "L09 Part 2 Slide 14-20 • Concurrency Anomalies",
    "title": "Parallel Bajarilish & Anomaliyalar Auditi (12-Qadam)",
    "story": "L09 Part 2 Slide 14: 1. Lost Update, 2. Dirty Read (G1), 3. Non-Repeatable Read (G2a), 4. Phantom Read (A3). Tizim blokirovkalarini tekshiring.",
    "taskUz": "Tizimdagi joriy qulflarni `pg_locks` jadvalidan so'rab oling.\n\n📋 **Kutilayotgan Buyruq:**\n• pg_locks so'rovi",
    "expectedSql": "SELECT locktype, relation, mode, granted FROM pg_locks",
    "hint": "`SELECT locktype, relation, mode, granted FROM pg_locks` yozing.",
    "tags": [
      "CONCURRENCY",
      "ANOMALIES",
      "LOCKS"
    ],
    "solutions": [
      "SELECT locktype, relation, mode, granted FROM pg_locks"
    ],
    "task": "Tizimdagi joriy qulflarni `pg_locks` jadvalidan so'rab oling.",
    "explanation": ""
  },
  {
    "id": 118,
    "sector": 8,
    "difficulty": "Floor 8 • Hard",
    "source": "L09 Part 2 Slide 14-20 • Concurrency Anomalies",
    "title": "Parallel Bajarilish & Anomaliyalar Auditi (13-Qadam)",
    "story": "L09 Part 2 Slide 14: 1. Lost Update, 2. Dirty Read (G1), 3. Non-Repeatable Read (G2a), 4. Phantom Read (A3). Tizim blokirovkalarini tekshiring.",
    "taskUz": "Tizimdagi joriy qulflarni `pg_locks` jadvalidan so'rab oling.\n\n📋 **Kutilayotgan Buyruq:**\n• pg_locks so'rovi",
    "expectedSql": "SELECT locktype, relation, mode, granted FROM pg_locks",
    "hint": "`SELECT locktype, relation, mode, granted FROM pg_locks` yozing.",
    "tags": [
      "CONCURRENCY",
      "ANOMALIES",
      "LOCKS"
    ],
    "solutions": [
      "SELECT locktype, relation, mode, granted FROM pg_locks"
    ],
    "task": "Tizimdagi joriy qulflarni `pg_locks` jadvalidan so'rab oling.",
    "explanation": ""
  },
  {
    "id": 119,
    "sector": 8,
    "difficulty": "Floor 8 • Hard",
    "source": "L09 Part 2 Slide 14-20 • Concurrency Anomalies",
    "title": "Parallel Bajarilish & Anomaliyalar Auditi (14-Qadam)",
    "story": "L09 Part 2 Slide 14: 1. Lost Update, 2. Dirty Read (G1), 3. Non-Repeatable Read (G2a), 4. Phantom Read (A3). Tizim blokirovkalarini tekshiring.",
    "taskUz": "Tizimdagi joriy qulflarni `pg_locks` jadvalidan so'rab oling.\n\n📋 **Kutilayotgan Buyruq:**\n• pg_locks so'rovi",
    "expectedSql": "SELECT locktype, relation, mode, granted FROM pg_locks",
    "hint": "`SELECT locktype, relation, mode, granted FROM pg_locks` yozing.",
    "tags": [
      "CONCURRENCY",
      "ANOMALIES",
      "LOCKS"
    ],
    "solutions": [
      "SELECT locktype, relation, mode, granted FROM pg_locks"
    ],
    "task": "Tizimdagi joriy qulflarni `pg_locks` jadvalidan so'rab oling.",
    "explanation": ""
  },
  {
    "id": 120,
    "sector": 8,
    "difficulty": "Floor 8 • Hard",
    "source": "L09 Part 2 Slide 14-20 • Concurrency Anomalies",
    "title": "Parallel Bajarilish & Anomaliyalar Auditi (15-Qadam)",
    "story": "L09 Part 2 Slide 14: 1. Lost Update, 2. Dirty Read (G1), 3. Non-Repeatable Read (G2a), 4. Phantom Read (A3). Tizim blokirovkalarini tekshiring.",
    "taskUz": "Tizimdagi joriy qulflarni `pg_locks` jadvalidan so'rab oling.\n\n📋 **Kutilayotgan Buyruq:**\n• pg_locks so'rovi",
    "expectedSql": "SELECT locktype, relation, mode, granted FROM pg_locks",
    "hint": "`SELECT locktype, relation, mode, granted FROM pg_locks` yozing.",
    "tags": [
      "CONCURRENCY",
      "ANOMALIES",
      "LOCKS"
    ],
    "solutions": [
      "SELECT locktype, relation, mode, granted FROM pg_locks"
    ],
    "task": "Tizimdagi joriy qulflarni `pg_locks` jadvalidan so'rab oling.",
    "explanation": ""
  },
  {
    "id": 121,
    "sector": 9,
    "difficulty": "Floor 9 • Hard",
    "source": "L09 Part 2 Slide 25-35 • 2PL & Deadlocks",
    "title": "Shared (S) va Exclusive (X) Qulflar Mosligi",
    "story": "O'qish uchun Shared qulf olinadi, yozish uchun esa Exclusive qulf talab qilinadi.",
    "taskUz": "Barcha qulflar va ularning berilganligini (`granted`) tekshiring.\n\n📋 **Kutilayotgan Buyruq:**\n• pg_locks so'rovi",
    "expectedSql": "SELECT locktype, relation, mode, granted FROM pg_locks",
    "hint": "`WHERE mode = 'ExclusiveLock'` yozing.",
    "tags": [
      "2PL",
      "EXCLUSIVE_LOCK",
      "DEADLOCK"
    ],
    "solutions": [
      "SELECT locktype, relation, mode, granted FROM pg_locks"
    ],
    "task": "Barcha qulflar va ularning berilganligini (`granted`) tekshiring.",
    "explanation": ""
  },
  {
    "id": 122,
    "sector": 9,
    "difficulty": "Floor 9 • Hard",
    "source": "L09 Part 2 Slide 25-35 • 2PL & Deadlocks",
    "title": "Two-Phase Locking (2PL) & Deadlocklar (2-Bosqich)",
    "story": "L09 Part 2 Slide 25-35: 2PL protokoli: O'sish fazasida qulflar olinadi, qisqarish fazasida esa faqat chiqariladi. Shared (S) va Exclusive (X) qulflar mosligi.",
    "taskUz": "Qulflar jadvalidan eksklyuziv qulflarni (`mode = 'ExclusiveLock'`) chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• pg_locks so'rovi",
    "expectedSql": "SELECT locktype, relation, mode, granted FROM pg_locks WHERE mode = 'ExclusiveLock'",
    "hint": "`WHERE mode = 'ExclusiveLock'` yozing.",
    "tags": [
      "2PL",
      "EXCLUSIVE_LOCK",
      "DEADLOCK"
    ],
    "solutions": [
      "SELECT locktype, relation, mode, granted FROM pg_locks WHERE mode = 'ExclusiveLock'"
    ],
    "task": "Qulflar jadvalidan eksklyuziv qulflarni (`mode = 'ExclusiveLock'`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 123,
    "sector": 9,
    "difficulty": "Floor 9 • Hard",
    "source": "L09 Part 2 Slide 25-35 • 2PL & Deadlocks",
    "title": "Two-Phase Locking (2PL) & Deadlocklar (3-Bosqich)",
    "story": "L09 Part 2 Slide 25-35: 2PL protokoli: O'sish fazasida qulflar olinadi, qisqarish fazasida esa faqat chiqariladi. Shared (S) va Exclusive (X) qulflar mosligi.",
    "taskUz": "Qulflar jadvalidan eksklyuziv qulflarni (`mode = 'ExclusiveLock'`) chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• pg_locks so'rovi",
    "expectedSql": "SELECT locktype, relation, mode, granted FROM pg_locks WHERE mode = 'ExclusiveLock'",
    "hint": "`WHERE mode = 'ExclusiveLock'` yozing.",
    "tags": [
      "2PL",
      "EXCLUSIVE_LOCK",
      "DEADLOCK"
    ],
    "solutions": [
      "SELECT locktype, relation, mode, granted FROM pg_locks WHERE mode = 'ExclusiveLock'"
    ],
    "task": "Qulflar jadvalidan eksklyuziv qulflarni (`mode = 'ExclusiveLock'`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 124,
    "sector": 9,
    "difficulty": "Floor 9 • Hard",
    "source": "L09 Part 2 Slide 25-35 • 2PL & Deadlocks",
    "title": "Two-Phase Locking (2PL) & Deadlocklar (4-Bosqich)",
    "story": "L09 Part 2 Slide 25-35: 2PL protokoli: O'sish fazasida qulflar olinadi, qisqarish fazasida esa faqat chiqariladi. Shared (S) va Exclusive (X) qulflar mosligi.",
    "taskUz": "Qulflar jadvalidan eksklyuziv qulflarni (`mode = 'ExclusiveLock'`) chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• pg_locks so'rovi",
    "expectedSql": "SELECT locktype, relation, mode, granted FROM pg_locks WHERE mode = 'ExclusiveLock'",
    "hint": "`WHERE mode = 'ExclusiveLock'` yozing.",
    "tags": [
      "2PL",
      "EXCLUSIVE_LOCK",
      "DEADLOCK"
    ],
    "solutions": [
      "SELECT locktype, relation, mode, granted FROM pg_locks WHERE mode = 'ExclusiveLock'"
    ],
    "task": "Qulflar jadvalidan eksklyuziv qulflarni (`mode = 'ExclusiveLock'`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 125,
    "sector": 9,
    "difficulty": "Floor 9 • Hard",
    "source": "L09 Part 2 Slide 25-35 • 2PL & Deadlocks",
    "title": "Two-Phase Locking (2PL) & Deadlocklar (5-Bosqich)",
    "story": "L09 Part 2 Slide 25-35: 2PL protokoli: O'sish fazasida qulflar olinadi, qisqarish fazasida esa faqat chiqariladi. Shared (S) va Exclusive (X) qulflar mosligi.",
    "taskUz": "Qulflar jadvalidan eksklyuziv qulflarni (`mode = 'ExclusiveLock'`) chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• pg_locks so'rovi",
    "expectedSql": "SELECT locktype, relation, mode, granted FROM pg_locks WHERE mode = 'ExclusiveLock'",
    "hint": "`WHERE mode = 'ExclusiveLock'` yozing.",
    "tags": [
      "2PL",
      "EXCLUSIVE_LOCK",
      "DEADLOCK"
    ],
    "solutions": [
      "SELECT locktype, relation, mode, granted FROM pg_locks WHERE mode = 'ExclusiveLock'"
    ],
    "task": "Qulflar jadvalidan eksklyuziv qulflarni (`mode = 'ExclusiveLock'`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 126,
    "sector": 9,
    "difficulty": "Floor 9 • Hard",
    "source": "L09 Part 2 Slide 25-35 • 2PL & Deadlocks",
    "title": "Two-Phase Locking (2PL) & Deadlocklar (6-Bosqich)",
    "story": "L09 Part 2 Slide 25-35: 2PL protokoli: O'sish fazasida qulflar olinadi, qisqarish fazasida esa faqat chiqariladi. Shared (S) va Exclusive (X) qulflar mosligi.",
    "taskUz": "Qulflar jadvalidan eksklyuziv qulflarni (`mode = 'ExclusiveLock'`) chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• pg_locks so'rovi",
    "expectedSql": "SELECT locktype, relation, mode, granted FROM pg_locks WHERE mode = 'ExclusiveLock'",
    "hint": "`WHERE mode = 'ExclusiveLock'` yozing.",
    "tags": [
      "2PL",
      "EXCLUSIVE_LOCK",
      "DEADLOCK"
    ],
    "solutions": [
      "SELECT locktype, relation, mode, granted FROM pg_locks WHERE mode = 'ExclusiveLock'"
    ],
    "task": "Qulflar jadvalidan eksklyuziv qulflarni (`mode = 'ExclusiveLock'`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 127,
    "sector": 9,
    "difficulty": "Floor 9 • Hard",
    "source": "L09 Part 2 Slide 25-35 • 2PL & Deadlocks",
    "title": "Two-Phase Locking (2PL) & Deadlocklar (7-Bosqich)",
    "story": "L09 Part 2 Slide 25-35: 2PL protokoli: O'sish fazasida qulflar olinadi, qisqarish fazasida esa faqat chiqariladi. Shared (S) va Exclusive (X) qulflar mosligi.",
    "taskUz": "Qulflar jadvalidan eksklyuziv qulflarni (`mode = 'ExclusiveLock'`) chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• pg_locks so'rovi",
    "expectedSql": "SELECT locktype, relation, mode, granted FROM pg_locks WHERE mode = 'ExclusiveLock'",
    "hint": "`WHERE mode = 'ExclusiveLock'` yozing.",
    "tags": [
      "2PL",
      "EXCLUSIVE_LOCK",
      "DEADLOCK"
    ],
    "solutions": [
      "SELECT locktype, relation, mode, granted FROM pg_locks WHERE mode = 'ExclusiveLock'"
    ],
    "task": "Qulflar jadvalidan eksklyuziv qulflarni (`mode = 'ExclusiveLock'`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 128,
    "sector": 9,
    "difficulty": "Floor 9 • Hard",
    "source": "L09 Part 2 Slide 25-35 • 2PL & Deadlocks",
    "title": "Two-Phase Locking (2PL) & Deadlocklar (8-Bosqich)",
    "story": "L09 Part 2 Slide 25-35: 2PL protokoli: O'sish fazasida qulflar olinadi, qisqarish fazasida esa faqat chiqariladi. Shared (S) va Exclusive (X) qulflar mosligi.",
    "taskUz": "Qulflar jadvalidan eksklyuziv qulflarni (`mode = 'ExclusiveLock'`) chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• pg_locks so'rovi",
    "expectedSql": "SELECT locktype, relation, mode, granted FROM pg_locks WHERE mode = 'ExclusiveLock'",
    "hint": "`WHERE mode = 'ExclusiveLock'` yozing.",
    "tags": [
      "2PL",
      "EXCLUSIVE_LOCK",
      "DEADLOCK"
    ],
    "solutions": [
      "SELECT locktype, relation, mode, granted FROM pg_locks WHERE mode = 'ExclusiveLock'"
    ],
    "task": "Qulflar jadvalidan eksklyuziv qulflarni (`mode = 'ExclusiveLock'`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 129,
    "sector": 9,
    "difficulty": "Floor 9 • Hard",
    "source": "L09 Part 2 Slide 25-35 • 2PL & Deadlocks",
    "title": "Two-Phase Locking (2PL) & Deadlocklar (9-Bosqich)",
    "story": "L09 Part 2 Slide 25-35: 2PL protokoli: O'sish fazasida qulflar olinadi, qisqarish fazasida esa faqat chiqariladi. Shared (S) va Exclusive (X) qulflar mosligi.",
    "taskUz": "Qulflar jadvalidan eksklyuziv qulflarni (`mode = 'ExclusiveLock'`) chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• pg_locks so'rovi",
    "expectedSql": "SELECT locktype, relation, mode, granted FROM pg_locks WHERE mode = 'ExclusiveLock'",
    "hint": "`WHERE mode = 'ExclusiveLock'` yozing.",
    "tags": [
      "2PL",
      "EXCLUSIVE_LOCK",
      "DEADLOCK"
    ],
    "solutions": [
      "SELECT locktype, relation, mode, granted FROM pg_locks WHERE mode = 'ExclusiveLock'"
    ],
    "task": "Qulflar jadvalidan eksklyuziv qulflarni (`mode = 'ExclusiveLock'`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 130,
    "sector": 9,
    "difficulty": "Floor 9 • Hard",
    "source": "L09 Part 2 Slide 25-35 • 2PL & Deadlocks",
    "title": "Two-Phase Locking (2PL) & Deadlocklar (10-Bosqich)",
    "story": "L09 Part 2 Slide 25-35: 2PL protokoli: O'sish fazasida qulflar olinadi, qisqarish fazasida esa faqat chiqariladi. Shared (S) va Exclusive (X) qulflar mosligi.",
    "taskUz": "Qulflar jadvalidan eksklyuziv qulflarni (`mode = 'ExclusiveLock'`) chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• pg_locks so'rovi",
    "expectedSql": "SELECT locktype, relation, mode, granted FROM pg_locks WHERE mode = 'ExclusiveLock'",
    "hint": "`WHERE mode = 'ExclusiveLock'` yozing.",
    "tags": [
      "2PL",
      "EXCLUSIVE_LOCK",
      "DEADLOCK"
    ],
    "solutions": [
      "SELECT locktype, relation, mode, granted FROM pg_locks WHERE mode = 'ExclusiveLock'"
    ],
    "task": "Qulflar jadvalidan eksklyuziv qulflarni (`mode = 'ExclusiveLock'`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 131,
    "sector": 9,
    "difficulty": "Floor 9 • Hard",
    "source": "L09 Part 2 Slide 25-35 • 2PL & Deadlocks",
    "title": "Two-Phase Locking (2PL) & Deadlocklar (11-Bosqich)",
    "story": "L09 Part 2 Slide 25-35: 2PL protokoli: O'sish fazasida qulflar olinadi, qisqarish fazasida esa faqat chiqariladi. Shared (S) va Exclusive (X) qulflar mosligi.",
    "taskUz": "Qulflar jadvalidan eksklyuziv qulflarni (`mode = 'ExclusiveLock'`) chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• pg_locks so'rovi",
    "expectedSql": "SELECT locktype, relation, mode, granted FROM pg_locks WHERE mode = 'ExclusiveLock'",
    "hint": "`WHERE mode = 'ExclusiveLock'` yozing.",
    "tags": [
      "2PL",
      "EXCLUSIVE_LOCK",
      "DEADLOCK"
    ],
    "solutions": [
      "SELECT locktype, relation, mode, granted FROM pg_locks WHERE mode = 'ExclusiveLock'"
    ],
    "task": "Qulflar jadvalidan eksklyuziv qulflarni (`mode = 'ExclusiveLock'`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 132,
    "sector": 9,
    "difficulty": "Floor 9 • Hard",
    "source": "L09 Part 2 Slide 25-35 • 2PL & Deadlocks",
    "title": "Two-Phase Locking (2PL) & Deadlocklar (12-Bosqich)",
    "story": "L09 Part 2 Slide 25-35: 2PL protokoli: O'sish fazasida qulflar olinadi, qisqarish fazasida esa faqat chiqariladi. Shared (S) va Exclusive (X) qulflar mosligi.",
    "taskUz": "Qulflar jadvalidan eksklyuziv qulflarni (`mode = 'ExclusiveLock'`) chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• pg_locks so'rovi",
    "expectedSql": "SELECT locktype, relation, mode, granted FROM pg_locks WHERE mode = 'ExclusiveLock'",
    "hint": "`WHERE mode = 'ExclusiveLock'` yozing.",
    "tags": [
      "2PL",
      "EXCLUSIVE_LOCK",
      "DEADLOCK"
    ],
    "solutions": [
      "SELECT locktype, relation, mode, granted FROM pg_locks WHERE mode = 'ExclusiveLock'"
    ],
    "task": "Qulflar jadvalidan eksklyuziv qulflarni (`mode = 'ExclusiveLock'`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 133,
    "sector": 9,
    "difficulty": "Floor 9 • Hard",
    "source": "L09 Part 2 Slide 25-35 • 2PL & Deadlocks",
    "title": "Two-Phase Locking (2PL) & Deadlocklar (13-Bosqich)",
    "story": "L09 Part 2 Slide 25-35: 2PL protokoli: O'sish fazasida qulflar olinadi, qisqarish fazasida esa faqat chiqariladi. Shared (S) va Exclusive (X) qulflar mosligi.",
    "taskUz": "Qulflar jadvalidan eksklyuziv qulflarni (`mode = 'ExclusiveLock'`) chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• pg_locks so'rovi",
    "expectedSql": "SELECT locktype, relation, mode, granted FROM pg_locks WHERE mode = 'ExclusiveLock'",
    "hint": "`WHERE mode = 'ExclusiveLock'` yozing.",
    "tags": [
      "2PL",
      "EXCLUSIVE_LOCK",
      "DEADLOCK"
    ],
    "solutions": [
      "SELECT locktype, relation, mode, granted FROM pg_locks WHERE mode = 'ExclusiveLock'"
    ],
    "task": "Qulflar jadvalidan eksklyuziv qulflarni (`mode = 'ExclusiveLock'`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 134,
    "sector": 9,
    "difficulty": "Floor 9 • Hard",
    "source": "L09 Part 2 Slide 25-35 • 2PL & Deadlocks",
    "title": "Two-Phase Locking (2PL) & Deadlocklar (14-Bosqich)",
    "story": "L09 Part 2 Slide 25-35: 2PL protokoli: O'sish fazasida qulflar olinadi, qisqarish fazasida esa faqat chiqariladi. Shared (S) va Exclusive (X) qulflar mosligi.",
    "taskUz": "Qulflar jadvalidan eksklyuziv qulflarni (`mode = 'ExclusiveLock'`) chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• pg_locks so'rovi",
    "expectedSql": "SELECT locktype, relation, mode, granted FROM pg_locks WHERE mode = 'ExclusiveLock'",
    "hint": "`WHERE mode = 'ExclusiveLock'` yozing.",
    "tags": [
      "2PL",
      "EXCLUSIVE_LOCK",
      "DEADLOCK"
    ],
    "solutions": [
      "SELECT locktype, relation, mode, granted FROM pg_locks WHERE mode = 'ExclusiveLock'"
    ],
    "task": "Qulflar jadvalidan eksklyuziv qulflarni (`mode = 'ExclusiveLock'`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 135,
    "sector": 9,
    "difficulty": "Floor 9 • Hard",
    "source": "L09 Part 2 Slide 25-35 • 2PL & Deadlocks",
    "title": "Two-Phase Locking (2PL) & Deadlocklar (15-Bosqich)",
    "story": "L09 Part 2 Slide 25-35: 2PL protokoli: O'sish fazasida qulflar olinadi, qisqarish fazasida esa faqat chiqariladi. Shared (S) va Exclusive (X) qulflar mosligi.",
    "taskUz": "Qulflar jadvalidan eksklyuziv qulflarni (`mode = 'ExclusiveLock'`) chiqaring.\n\n📋 **Kutilayotgan Buyruq:**\n• pg_locks so'rovi",
    "expectedSql": "SELECT locktype, relation, mode, granted FROM pg_locks WHERE mode = 'ExclusiveLock'",
    "hint": "`WHERE mode = 'ExclusiveLock'` yozing.",
    "tags": [
      "2PL",
      "EXCLUSIVE_LOCK",
      "DEADLOCK"
    ],
    "solutions": [
      "SELECT locktype, relation, mode, granted FROM pg_locks WHERE mode = 'ExclusiveLock'"
    ],
    "task": "Qulflar jadvalidan eksklyuziv qulflarni (`mode = 'ExclusiveLock'`) chiqaring.",
    "explanation": ""
  },
  {
    "id": 136,
    "sector": 10,
    "difficulty": "Floor 10 • Expert",
    "source": "L09 Part 2 & S09 Redis Tx • Isolation Levels & Redis MULTI",
    "title": "Izolyatsiya Darajasini O'rnatish: SERIALIZABLE",
    "story": "L09 Part 2 Slide 36: Barcha fantom va no-konsistent holatlarni butunlay yo'qotuvchi eng yuqori izolyatsiya darajasini o'rnatish.",
    "taskUz": "Tranzaksiya izolyatsiyasini `SERIALIZABLE` darajasiga o'rnating.\n\n📋 **Kutilayotgan Buyruq:**\n• SQL yoki Redis tranzaksiya buyrug'i",
    "expectedSql": "SET TRANSACTION ISOLATION LEVEL SERIALIZABLE",
    "hint": "`SET TRANSACTION ISOLATION LEVEL SERIALIZABLE` deb yozing.",
    "tags": [
      "ISOLATION",
      "SERIALIZABLE",
      "ACID"
    ],
    "solutions": [
      "SET TRANSACTION ISOLATION LEVEL SERIALIZABLE"
    ],
    "task": "Tranzaksiya izolyatsiyasini `SERIALIZABLE` darajasiga o'rnating.",
    "explanation": ""
  },
  {
    "id": 137,
    "sector": 10,
    "difficulty": "Floor 10 • Expert",
    "source": "L09 Part 2 & S09 Redis Tx • Isolation Levels & Redis MULTI",
    "title": "PostgreSQL Standart Izolyatsiyasi: READ COMMITTED",
    "story": "PostgreSQL ning odatiy izolyatsiya darajasi faqat tasdiqlangan ma'lumotlarni o'qishga imkon beradi.",
    "taskUz": "Izolyatsiya darajasini `READ COMMITTED` ga o'rnating.\n\n📋 **Kutilayotgan Buyruq:**\n• SQL yoki Redis tranzaksiya buyrug'i",
    "expectedSql": "SET TRANSACTION ISOLATION LEVEL READ COMMITTED",
    "hint": "`SET TRANSACTION ISOLATION LEVEL READ COMMITTED` yozing.",
    "tags": [
      "ISOLATION",
      "READ_COMMITTED",
      "STANDARD"
    ],
    "solutions": [
      "SET TRANSACTION ISOLATION LEVEL READ COMMITTED"
    ],
    "task": "Izolyatsiya darajasini `READ COMMITTED` ga o'rnating.",
    "explanation": ""
  },
  {
    "id": 138,
    "sector": 10,
    "difficulty": "Floor 10 • Expert",
    "source": "L09 Part 2 & S09 Redis Tx • Isolation Levels & Redis MULTI",
    "title": "Redis Tranzaksiyasini Boshlash: MULTI",
    "story": "S09 Part B: Redis da barcha buyruqlarni navbatga olib, atomik tarzda bajarish uchun MULTI boshlanadi.",
    "taskUz": "Redis tranzaksiyasini ochish uchun `MULTI` buyrug'ini bering.\n\n📋 **Kutilayotgan Buyruq:**\n• SQL yoki Redis tranzaksiya buyrug'i",
    "expectedSql": "MULTI",
    "hint": "`MULTI` deb yozing.",
    "tags": [
      "REDIS_TX",
      "MULTI",
      "ATOMIC"
    ],
    "solutions": [
      "MULTI"
    ],
    "task": "Redis tranzaksiyasini ochish uchun `MULTI` buyrug'ini bering.",
    "explanation": ""
  },
  {
    "id": 139,
    "sector": 10,
    "difficulty": "Floor 10 • Expert",
    "source": "L09 Part 2 & S09 Redis Tx • Isolation Levels & Redis MULTI",
    "title": "Redis Tranzaksiyasini Bajarish: EXEC",
    "story": "Navbatdagi barcha Redis buyruqlarini bitta atomik blok sifatida bajarish va tasdiqlash.",
    "taskUz": "Redis tranzaksiyasini yakunlash uchun `EXEC` buyrug'ini yozing.\n\n📋 **Kutilayotgan Buyruq:**\n• SQL yoki Redis tranzaksiya buyrug'i",
    "expectedSql": "EXEC",
    "hint": "`EXEC` yozing.",
    "tags": [
      "REDIS_TX",
      "EXEC",
      "COMMIT"
    ],
    "solutions": [
      "EXEC"
    ],
    "task": "Redis tranzaksiyasini yakunlash uchun `EXEC` buyrug'ini yozing.",
    "explanation": ""
  },
  {
    "id": 140,
    "sector": 10,
    "difficulty": "Floor 10 • Expert",
    "source": "L09 Part 2 & S09 Redis Tx • Isolation Levels & Redis MULTI",
    "title": "Redis Optimistik Blokirovka: WATCH",
    "story": "Hisob balansini o'zgartirishdan oldin boshqa hech kim tegmaganiga ishonch hosil qilish uchun WATCH ishlatiladi.",
    "taskUz": "`bank_accounts:ACC_AZIZ` kalitiga `WATCH` qo'ying.\n\n📋 **Kutilayotgan Buyruq:**\n• SQL yoki Redis tranzaksiya buyrug'i",
    "expectedSql": "WATCH bank_accounts:ACC_AZIZ",
    "hint": "`WATCH bank_accounts:ACC_AZIZ` yozing.",
    "tags": [
      "REDIS_TX",
      "WATCH",
      "OPTIMISTIC"
    ],
    "solutions": [
      "WATCH bank_accounts:ACC_AZIZ"
    ],
    "task": "`bank_accounts:ACC_AZIZ` kalitiga `WATCH` qo'ying.",
    "explanation": ""
  },
  {
    "id": 141,
    "sector": 10,
    "difficulty": "Floor 10 • Expert",
    "source": "L09 Part 2 & S09 Redis Tx • Isolation Levels & Redis MULTI",
    "title": "Bosh Baza Xavfsizligi & ACID Himoya Yakuni (6-Topshiriq)",
    "story": "CW1 Coursework va Westminster Viva uchun xavfsizlik va tranzaksiyalar bo'yicha to'liq tayyorgarlik.",
    "taskUz": "Tranzaksiya izolyatsiyasini `SERIALIZABLE` ga o'rnating.\n\n📋 **Kutilayotgan Buyruq:**\n• SQL yoki Redis tranzaksiya buyrug'i",
    "expectedSql": "SET TRANSACTION ISOLATION LEVEL SERIALIZABLE",
    "hint": "`SET TRANSACTION ISOLATION LEVEL SERIALIZABLE` yozing.",
    "tags": [
      "CW1_VIVA",
      "SECURITY",
      "ACID"
    ],
    "solutions": [
      "SET TRANSACTION ISOLATION LEVEL SERIALIZABLE"
    ],
    "task": "Tranzaksiya izolyatsiyasini `SERIALIZABLE` ga o'rnating.",
    "explanation": ""
  },
  {
    "id": 142,
    "sector": 10,
    "difficulty": "Floor 10 • Expert",
    "source": "L09 Part 2 & S09 Redis Tx • Isolation Levels & Redis MULTI",
    "title": "Bosh Baza Xavfsizligi & ACID Himoya Yakuni (7-Topshiriq)",
    "story": "CW1 Coursework va Westminster Viva uchun xavfsizlik va tranzaksiyalar bo'yicha to'liq tayyorgarlik.",
    "taskUz": "Tranzaksiya izolyatsiyasini `SERIALIZABLE` ga o'rnating.\n\n📋 **Kutilayotgan Buyruq:**\n• SQL yoki Redis tranzaksiya buyrug'i",
    "expectedSql": "SET TRANSACTION ISOLATION LEVEL SERIALIZABLE",
    "hint": "`SET TRANSACTION ISOLATION LEVEL SERIALIZABLE` yozing.",
    "tags": [
      "CW1_VIVA",
      "SECURITY",
      "ACID"
    ],
    "solutions": [
      "SET TRANSACTION ISOLATION LEVEL SERIALIZABLE"
    ],
    "task": "Tranzaksiya izolyatsiyasini `SERIALIZABLE` ga o'rnating.",
    "explanation": ""
  },
  {
    "id": 143,
    "sector": 10,
    "difficulty": "Floor 10 • Expert",
    "source": "L09 Part 2 & S09 Redis Tx • Isolation Levels & Redis MULTI",
    "title": "Bosh Baza Xavfsizligi & ACID Himoya Yakuni (8-Topshiriq)",
    "story": "CW1 Coursework va Westminster Viva uchun xavfsizlik va tranzaksiyalar bo'yicha to'liq tayyorgarlik.",
    "taskUz": "Tranzaksiya izolyatsiyasini `SERIALIZABLE` ga o'rnating.\n\n📋 **Kutilayotgan Buyruq:**\n• SQL yoki Redis tranzaksiya buyrug'i",
    "expectedSql": "SET TRANSACTION ISOLATION LEVEL SERIALIZABLE",
    "hint": "`SET TRANSACTION ISOLATION LEVEL SERIALIZABLE` yozing.",
    "tags": [
      "CW1_VIVA",
      "SECURITY",
      "ACID"
    ],
    "solutions": [
      "SET TRANSACTION ISOLATION LEVEL SERIALIZABLE"
    ],
    "task": "Tranzaksiya izolyatsiyasini `SERIALIZABLE` ga o'rnating.",
    "explanation": ""
  },
  {
    "id": 144,
    "sector": 10,
    "difficulty": "Floor 10 • Expert",
    "source": "L09 Part 2 & S09 Redis Tx • Isolation Levels & Redis MULTI",
    "title": "Bosh Baza Xavfsizligi & ACID Himoya Yakuni (9-Topshiriq)",
    "story": "CW1 Coursework va Westminster Viva uchun xavfsizlik va tranzaksiyalar bo'yicha to'liq tayyorgarlik.",
    "taskUz": "Tranzaksiya izolyatsiyasini `SERIALIZABLE` ga o'rnating.\n\n📋 **Kutilayotgan Buyruq:**\n• SQL yoki Redis tranzaksiya buyrug'i",
    "expectedSql": "SET TRANSACTION ISOLATION LEVEL SERIALIZABLE",
    "hint": "`SET TRANSACTION ISOLATION LEVEL SERIALIZABLE` yozing.",
    "tags": [
      "CW1_VIVA",
      "SECURITY",
      "ACID"
    ],
    "solutions": [
      "SET TRANSACTION ISOLATION LEVEL SERIALIZABLE"
    ],
    "task": "Tranzaksiya izolyatsiyasini `SERIALIZABLE` ga o'rnating.",
    "explanation": ""
  },
  {
    "id": 145,
    "sector": 10,
    "difficulty": "Floor 10 • Expert",
    "source": "L09 Part 2 & S09 Redis Tx • Isolation Levels & Redis MULTI",
    "title": "Bosh Baza Xavfsizligi & ACID Himoya Yakuni (10-Topshiriq)",
    "story": "CW1 Coursework va Westminster Viva uchun xavfsizlik va tranzaksiyalar bo'yicha to'liq tayyorgarlik.",
    "taskUz": "Tranzaksiya izolyatsiyasini `SERIALIZABLE` ga o'rnating.\n\n📋 **Kutilayotgan Buyruq:**\n• SQL yoki Redis tranzaksiya buyrug'i",
    "expectedSql": "SET TRANSACTION ISOLATION LEVEL SERIALIZABLE",
    "hint": "`SET TRANSACTION ISOLATION LEVEL SERIALIZABLE` yozing.",
    "tags": [
      "CW1_VIVA",
      "SECURITY",
      "ACID"
    ],
    "solutions": [
      "SET TRANSACTION ISOLATION LEVEL SERIALIZABLE"
    ],
    "task": "Tranzaksiya izolyatsiyasini `SERIALIZABLE` ga o'rnating.",
    "explanation": ""
  },
  {
    "id": 146,
    "sector": 10,
    "difficulty": "Floor 10 • Expert",
    "source": "L09 Part 2 & S09 Redis Tx • Isolation Levels & Redis MULTI",
    "title": "Bosh Baza Xavfsizligi & ACID Himoya Yakuni (11-Topshiriq)",
    "story": "CW1 Coursework va Westminster Viva uchun xavfsizlik va tranzaksiyalar bo'yicha to'liq tayyorgarlik.",
    "taskUz": "Tranzaksiya izolyatsiyasini `SERIALIZABLE` ga o'rnating.\n\n📋 **Kutilayotgan Buyruq:**\n• SQL yoki Redis tranzaksiya buyrug'i",
    "expectedSql": "SET TRANSACTION ISOLATION LEVEL SERIALIZABLE",
    "hint": "`SET TRANSACTION ISOLATION LEVEL SERIALIZABLE` yozing.",
    "tags": [
      "CW1_VIVA",
      "SECURITY",
      "ACID"
    ],
    "solutions": [
      "SET TRANSACTION ISOLATION LEVEL SERIALIZABLE"
    ],
    "task": "Tranzaksiya izolyatsiyasini `SERIALIZABLE` ga o'rnating.",
    "explanation": ""
  },
  {
    "id": 147,
    "sector": 10,
    "difficulty": "Floor 10 • Expert",
    "source": "L09 Part 2 & S09 Redis Tx • Isolation Levels & Redis MULTI",
    "title": "Bosh Baza Xavfsizligi & ACID Himoya Yakuni (12-Topshiriq)",
    "story": "CW1 Coursework va Westminster Viva uchun xavfsizlik va tranzaksiyalar bo'yicha to'liq tayyorgarlik.",
    "taskUz": "Tranzaksiya izolyatsiyasini `SERIALIZABLE` ga o'rnating.\n\n📋 **Kutilayotgan Buyruq:**\n• SQL yoki Redis tranzaksiya buyrug'i",
    "expectedSql": "SET TRANSACTION ISOLATION LEVEL SERIALIZABLE",
    "hint": "`SET TRANSACTION ISOLATION LEVEL SERIALIZABLE` yozing.",
    "tags": [
      "CW1_VIVA",
      "SECURITY",
      "ACID"
    ],
    "solutions": [
      "SET TRANSACTION ISOLATION LEVEL SERIALIZABLE"
    ],
    "task": "Tranzaksiya izolyatsiyasini `SERIALIZABLE` ga o'rnating.",
    "explanation": ""
  },
  {
    "id": 148,
    "sector": 10,
    "difficulty": "Floor 10 • Expert",
    "source": "L09 Part 2 & S09 Redis Tx • Isolation Levels & Redis MULTI",
    "title": "Bosh Baza Xavfsizligi & ACID Himoya Yakuni (13-Topshiriq)",
    "story": "CW1 Coursework va Westminster Viva uchun xavfsizlik va tranzaksiyalar bo'yicha to'liq tayyorgarlik.",
    "taskUz": "Tranzaksiya izolyatsiyasini `SERIALIZABLE` ga o'rnating.\n\n📋 **Kutilayotgan Buyruq:**\n• SQL yoki Redis tranzaksiya buyrug'i",
    "expectedSql": "SET TRANSACTION ISOLATION LEVEL SERIALIZABLE",
    "hint": "`SET TRANSACTION ISOLATION LEVEL SERIALIZABLE` yozing.",
    "tags": [
      "CW1_VIVA",
      "SECURITY",
      "ACID"
    ],
    "solutions": [
      "SET TRANSACTION ISOLATION LEVEL SERIALIZABLE"
    ],
    "task": "Tranzaksiya izolyatsiyasini `SERIALIZABLE` ga o'rnating.",
    "explanation": ""
  },
  {
    "id": 149,
    "sector": 10,
    "difficulty": "Floor 10 • Expert",
    "source": "L09 Part 2 & S09 Redis Tx • Isolation Levels & Redis MULTI",
    "title": "Bosh Baza Xavfsizligi & ACID Himoya Yakuni (14-Topshiriq)",
    "story": "CW1 Coursework va Westminster Viva uchun xavfsizlik va tranzaksiyalar bo'yicha to'liq tayyorgarlik.",
    "taskUz": "Tranzaksiya izolyatsiyasini `SERIALIZABLE` ga o'rnating.\n\n📋 **Kutilayotgan Buyruq:**\n• SQL yoki Redis tranzaksiya buyrug'i",
    "expectedSql": "SET TRANSACTION ISOLATION LEVEL SERIALIZABLE",
    "hint": "`SET TRANSACTION ISOLATION LEVEL SERIALIZABLE` yozing.",
    "tags": [
      "CW1_VIVA",
      "SECURITY",
      "ACID"
    ],
    "solutions": [
      "SET TRANSACTION ISOLATION LEVEL SERIALIZABLE"
    ],
    "task": "Tranzaksiya izolyatsiyasini `SERIALIZABLE` ga o'rnating.",
    "explanation": ""
  },
  {
    "id": 150,
    "sector": 10,
    "difficulty": "Floor 10 • Expert",
    "source": "L09 Part 2 & S09 Redis Tx • Isolation Levels & Redis MULTI",
    "title": "Bosh Baza Xavfsizligi & ACID Himoya Yakuni (15-Topshiriq)",
    "story": "CW1 Coursework va Westminster Viva uchun xavfsizlik va tranzaksiyalar bo'yicha to'liq tayyorgarlik.",
    "taskUz": "Tranzaksiya izolyatsiyasini `SERIALIZABLE` ga o'rnating.\n\n📋 **Kutilayotgan Buyruq:**\n• SQL yoki Redis tranzaksiya buyrug'i",
    "expectedSql": "SET TRANSACTION ISOLATION LEVEL SERIALIZABLE",
    "hint": "`SET TRANSACTION ISOLATION LEVEL SERIALIZABLE` yozing.",
    "tags": [
      "CW1_VIVA",
      "SECURITY",
      "ACID"
    ],
    "solutions": [
      "SET TRANSACTION ISOLATION LEVEL SERIALIZABLE"
    ],
    "task": "Tranzaksiya izolyatsiyasini `SERIALIZABLE` ga o'rnating.",
    "explanation": ""
  }
];
