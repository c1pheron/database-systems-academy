// ============================================================================
// WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 2 QUESTIONS 1 TO 50
// ============================================================================

window.QUESTIONS_1_50_W2 = [
  {
    "id": 1,
    "title": "Barcha Foydalanuvchilar Ro'yxatini Ko'rish",
    "story": "Debian serverida qaysi tizim foydalanuvchilari ro'yxatdan o'tganligini tekshirish zarur.",
    "taskUz": "Foydalanuvchilar ma'lumotlari saqlanuvchi <code>/etc/passwd</code> faylining to'liq tarkibini ekranga chiqaring.",
    "expectedSql": "cat /etc/passwd",
    "expectedBash": "cat /etc/passwd",
    "hint": "`cat` buyrug'i orqali `/etc/passwd` faylini o'qing.",
    "tags": [
      "USERADD",
      "PASSWD",
      "CAT"
    ],
    "solutions": [
      "cat /etc/passwd",
      "/bin/cat /etc/passwd"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S02 Task 1 • User Management"
  },
  {
    "id": 2,
    "title": "Muayyan Foydalanuvchini Qidirish",
    "story": "Tizimda 'student' foydalanuvchisi mavjudligini tezkor aniqlash lozim.",
    "taskUz": "<code>/etc/passwd</code> faylidan 'student' so'zini qidirib toping.",
    "expectedSql": "grep \"student\" /etc/passwd",
    "expectedBash": "grep \"student\" /etc/passwd",
    "hint": "`grep \"student\" /etc/passwd` buyrug'idan foydalaning.",
    "tags": [
      "GREP",
      "PASSWD",
      "USER"
    ],
    "solutions": [
      "grep \"student\" /etc/passwd",
      "grep student /etc/passwd"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S02 Task 1 • User Management"
  },
  {
    "id": 3,
    "title": "Yangi Xodim Alice'ni Boshlang'ich Yaratish",
    "story": "Kompaniyaga yangi DevOps muhandisi Alice ishga kirdi. Uni skript orqali yaratish lozim.",
    "taskUz": "<code>useradd</code> buyrug'i orqali 'alice' foydalanuvchisini yarating (parametrlar talab etilmaydi).",
    "expectedSql": "useradd alice",
    "expectedBash": "useradd alice",
    "hint": "`useradd alice` yoki `sudo useradd alice` buyrug'ini bering.",
    "tags": [
      "USERADD",
      "PAM",
      "ADMIN"
    ],
    "solutions": [
      "useradd alice",
      "sudo useradd alice"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S02 Task 1 • New Employee"
  },
  {
    "id": 4,
    "title": "Foydalanuvchini Uy Papkasi Bilan Yaratish (-m)",
    "story": "Foydalanuvchi tizimga kirganda shaxsiy fayllarini saqlashi uchun unga uy katalogi ochilishi shart.",
    "taskUz": "<code>developer1</code> nomli yangi foydalanuvchini uy katalogi (<code>-m</code>) bilan birga yarating.",
    "expectedSql": "useradd -m developer1",
    "expectedBash": "useradd -m developer1",
    "hint": "`useradd -m developer1` buyrug'idan foydalaning.",
    "tags": [
      "USERADD",
      "HOME",
      "AUTOMATION"
    ],
    "solutions": [
      "useradd -m developer1",
      "sudo useradd -m developer1"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S02 Task 1 • New Employee"
  },
  {
    "id": 5,
    "title": "Default Bash Shell Belvash (-s)",
    "story": "Standart holatda tizim cheklangan shell berishi mumkin. Foydalanuvchiga <code>/bin/bash</code> belgilash zarur.",
    "taskUz": "Yangi foydalanuvchi <code>developer2</code> ni <code>-s /bin/bash</code> parametr bilan yarating.",
    "expectedSql": "useradd -s /bin/bash developer2",
    "expectedBash": "useradd -s /bin/bash developer2",
    "hint": "`useradd -s /bin/bash developer2` buyrug'ini yozing.",
    "tags": [
      "USERADD",
      "BASH",
      "SHELL"
    ],
    "solutions": [
      "useradd -s /bin/bash developer2",
      "sudo useradd -s /bin/bash developer2"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S02 Task 1 • Shell Setup"
  },
  {
    "id": 6,
    "title": "Foydalanuvchiga Izoh / To'liq Ism Berish (-c)",
    "story": "Audit jurnallarida xodimning to'liq ism-familiyasi ko'rinib turishi lozim.",
    "taskUz": "<code>qa_tester</code> nomli foydalanuvchini <code>-c \"QA Lead Tester\"</code> izohi bilan yarating.",
    "expectedSql": "useradd -c \"QA Lead Tester\" qa_tester",
    "expectedBash": "useradd -c \"QA Lead Tester\" qa_tester",
    "hint": "`useradd -c \"QA Lead Tester\" qa_tester` buyrug'ini kiriting.",
    "tags": [
      "USERADD",
      "COMMENT",
      "AUDIT"
    ],
    "solutions": [
      "useradd -c \"QA Lead Tester\" qa_tester",
      "sudo useradd -c \"QA Lead Tester\" qa_tester"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S02 Task 1 • User Management"
  },
  {
    "id": 7,
    "title": "Qo'shimcha Guruhga Qo'shish (-G)",
    "story": "Foydalanuvchi imtiyozli ma'murlar guruhiga a'zo bo'lishi kerak.",
    "taskUz": "Yangi foydalanuvchi <code>sec_admin</code> ni <code>sudo</code> guruhiga (<code>-G sudo</code>) qo'shgan holda yarating.",
    "expectedSql": "useradd -G sudo sec_admin",
    "expectedBash": "useradd -G sudo sec_admin",
    "hint": "`useradd -G sudo sec_admin` buyrug'ini yozing.",
    "tags": [
      "USERADD",
      "GROUPS",
      "SUDO"
    ],
    "solutions": [
      "useradd -G sudo sec_admin",
      "sudo useradd -G sudo sec_admin"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • O'rta",
    "source": "S02 Task 1 • Group Assignment"
  },
  {
    "id": 8,
    "title": "To'liq Professional Xodim Onboarding Buyrug'i",
    "story": "Seminar 2 1-topshiriq talabi: Uy katalogi, bash qobig'i va sudo guruhi bilan to'liq yaratish.",
    "taskUz": "<code>alice</code> foydalanuvchisini uy katalogi (<code>-m</code>), <code>-s /bin/bash</code> va <code>-G sudo</code> bilan yarating.",
    "expectedSql": "useradd -m -s /bin/bash -G sudo alice",
    "expectedBash": "useradd -m -s /bin/bash -G sudo alice",
    "hint": "`useradd -m -s /bin/bash -G sudo alice` buyrug'ini bering.",
    "tags": [
      "USERADD",
      "SEMINAR",
      "BEST_PRACTICE"
    ],
    "solutions": [
      "useradd -m -s /bin/bash -G sudo alice",
      "sudo useradd -m -s /bin/bash -G sudo alice"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • O'rta",
    "source": "S02 Task 1 • Model Answer"
  },
  {
    "id": 9,
    "title": "Skeleton (Shablon) Fayllarini Ko'rish",
    "story": "Yangi ochilgan foydalanuvchilarning uy katalogiga qaysi standart shablon fayllar ko'chirilishini tekshiring.",
    "taskUz": "<code>/etc/skel</code> katalogidagi barcha yashirin fayllarni (<code>-la</code>) ko'ring.",
    "expectedSql": "ls -la /etc/skel",
    "expectedBash": "ls -la /etc/skel",
    "hint": "`ls -la /etc/skel` buyrug'ini bering.",
    "tags": [
      "SKEL",
      "LS",
      "PROFILE"
    ],
    "solutions": [
      "ls -la /etc/skel",
      "ls -a /etc/skel"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S02 Seminar • /etc/skel"
  },
  {
    "id": 10,
    "title": "Standart .bashrc Shablonini O'qish",
    "story": "Yangi foydalanuvchining boshlang'ich muhiti qanday sozlanishini bilish uchun shablonni o'rganing.",
    "taskUz": "<code>/etc/skel/.bashrc</code> faylining tarkibini ko'ring.",
    "expectedSql": "cat /etc/skel/.bashrc",
    "expectedBash": "cat /etc/skel/.bashrc",
    "hint": "`cat /etc/skel/.bashrc` buyrug'ini kiriting.",
    "tags": [
      "CAT",
      "SKEL",
      "BASHRC"
    ],
    "solutions": [
      "cat /etc/skel/.bashrc"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S02 Seminar • /etc/skel"
  },
  {
    "id": 11,
    "title": "Barcha Tizim Guruhlarini Tekshirish",
    "story": "Serverda qanday guruhlar mavjudligini va ularning identifikatorlarini (GID) ko'ring.",
    "taskUz": "<code>/etc/group</code> faylining tarkibini ekranga chiqaring.",
    "expectedSql": "cat /etc/group",
    "expectedBash": "cat /etc/group",
    "hint": "`cat /etc/group` buyrug'ini yozing.",
    "tags": [
      "GROUP",
      "CAT",
      "ACCOUNTS"
    ],
    "solutions": [
      "cat /etc/group"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S02 Task 1 • Groups"
  },
  {
    "id": 12,
    "title": "Sudo Guruhidagi Foydalanuvchilarni Aniqlash",
    "story": "Xavfsizlik talabiga ko'ra, qaysi foydalanuvchilar 'sudo' guruhida ekanligini tezkor tekshiring.",
    "taskUz": "<code>/etc/group</code> faylidan 'sudo' satrini qidiring.",
    "expectedSql": "grep \"sudo\" /etc/group",
    "expectedBash": "grep \"sudo\" /etc/group",
    "hint": "`grep \"sudo\" /etc/group` buyrug'ini bering.",
    "tags": [
      "GREP",
      "SUDO",
      "SECURITY"
    ],
    "solutions": [
      "grep \"sudo\" /etc/group",
      "grep sudo /etc/group"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S02 Task 1 • Audit"
  },
  {
    "id": 13,
    "title": "Devteam Guruhini Topish",
    "story": "Dasturchilar jamoasi loyihalari uchun ochilgan 'devteam' guruhini tekshiring.",
    "taskUz": "<code>/etc/group</code> faylidan 'devteam' satrini filtrlang.",
    "expectedSql": "grep \"devteam\" /etc/group",
    "expectedBash": "grep \"devteam\" /etc/group",
    "hint": "`grep \"devteam\" /etc/group` buyrug'idan foydalaning.",
    "tags": [
      "GREP",
      "DEVTEAM",
      "GROUPS"
    ],
    "solutions": [
      "grep \"devteam\" /etc/group",
      "grep devteam /etc/group"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S02 Case Study 3"
  },
  {
    "id": 14,
    "title": "Joriy Foydalanuvchi Shaxsiy Identifikatori",
    "story": "Hozirgi foydalanuvchining UID, GID va barcha tegishli guruhlarini aniqlovchi klassik buyruqni bering.",
    "taskUz": "<code>id</code> buyrug'i orqali joriy identifikatorlarni ekranga chiqaring.",
    "expectedSql": "id",
    "expectedBash": "id",
    "hint": "`id` buyrug'ini yozing.",
    "tags": [
      "ID",
      "WHOAMI",
      "UID"
    ],
    "solutions": [
      "id",
      "/usr/bin/id"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S02 Seminar • System Calls"
  },
  {
    "id": 15,
    "title": "Shifrlangan Parollar Fayli Ruxsatini Tekshirish",
    "story": "Linuxda oddiy foydalanuvchilar parollar heshini ko'ra olmasligi uchun ruxsatlar cheklangan bo'ladi.",
    "taskUz": "<code>/etc/shadow</code> faylining batafsil xususiyatlarini (<code>ls -l</code>) ko'ring.",
    "expectedSql": "ls -l /etc/shadow",
    "expectedBash": "ls -l /etc/shadow",
    "hint": "`ls -l /etc/shadow` buyrug'ini kiriting.",
    "tags": [
      "SHADOW",
      "LS",
      "PERMISSIONS"
    ],
    "solutions": [
      "ls -l /etc/shadow"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • O'rta",
    "source": "S02 Task 1 • Shadow Security"
  },
  {
    "id": 16,
    "title": "Foydalanuvchi Parolini Yangilash",
    "story": "Seminar 2 talabi: Yangi yaratilgan foydalanuvchiga parol o'rnatish lozim.",
    "taskUz": "<code>alice</code> foydalanuvchisiga yangi parol o'rnatish uchun buyruq bering.",
    "expectedSql": "passwd alice",
    "expectedBash": "passwd alice",
    "hint": "`passwd alice` yoki `sudo passwd alice` buyrug'ini bering.",
    "tags": [
      "PASSWD",
      "SECURITY",
      "PAM"
    ],
    "solutions": [
      "passwd alice",
      "sudo passwd alice"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • Oson",
    "source": "S02 Task 1 • Set Password"
  },
  {
    "id": 17,
    "title": "Foydalanuvchining Standart Shellini O'zgartirish",
    "story": "Mavjud foydalanuvchining login qobig'ini xavfsizroq yoki qulayroq shellga o'tkazish kerak.",
    "taskUz": "<code>bob</code> foydalanuvchisining standart qobig'ini <code>/bin/bash</code> ga o'zgartiring.",
    "expectedSql": "usermod -s /bin/bash bob",
    "expectedBash": "usermod -s /bin/bash bob",
    "hint": "`usermod -s /bin/bash bob` buyrug'ini bering.",
    "tags": [
      "USERMOD",
      "SHELL",
      "BASH"
    ],
    "solutions": [
      "usermod -s /bin/bash bob",
      "sudo usermod -s /bin/bash bob"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • Oson",
    "source": "S02 Case Study 2 • Fixing Account"
  },
  {
    "id": 18,
    "title": "Foydalanuvchini Yangi Guruhga Qo'shish (-aG)",
    "story": "Seminar 2 talabi: Mavjud guruhlarni o'chirmasdan yangi guruhni append qilish.",
    "taskUz": "<code>student</code> foydalanuvchisini <code>devteam</code> guruhiga qo'shing (<code>-aG</code>).",
    "expectedSql": "usermod -aG devteam student",
    "expectedBash": "usermod -aG devteam student",
    "hint": "`usermod -aG devteam student` buyrug'idan foydalaning.",
    "tags": [
      "USERMOD",
      "APPEND_GROUP",
      "DEVTEAM"
    ],
    "solutions": [
      "usermod -aG devteam student",
      "sudo usermod -aG devteam student"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "source": "S02 Case Study 3 • Group Membership"
  },
  {
    "id": 19,
    "title": "Hisobni Vaqtincha Qulflash (Lock Account -L)",
    "story": "Xavfsizlik tekshiruvi davrida foydalanuvchining tizimga kirishini vaqtincha to'xtatib turish kerak.",
    "taskUz": "<code>alice</code> foydalanuvchisining hisobini qulflang (<code>-L</code> parametri orqali).",
    "expectedSql": "usermod -L alice",
    "expectedBash": "usermod -L alice",
    "hint": "`usermod -L alice` buyrug'ini kiriting.",
    "tags": [
      "USERMOD",
      "LOCK",
      "SECURITY"
    ],
    "solutions": [
      "usermod -L alice",
      "sudo usermod -L alice"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "source": "S02 Task 1 • Lock Account"
  },
  {
    "id": 20,
    "title": "Qulflangan Hisobni Qayta Ochish (Unlock Account -U)",
    "story": "Audit muvaffaqiyatli o'tgach, xodimning hisobini qayta faollashtirish zarur.",
    "taskUz": "<code>alice</code> hisobidagi qulfni yeching (<code>-U</code> parametri orqali).",
    "expectedSql": "usermod -U alice",
    "expectedBash": "usermod -U alice",
    "hint": "`usermod -U alice` buyrug'ini kiriting.",
    "tags": [
      "USERMOD",
      "UNLOCK",
      "SECURITY"
    ],
    "solutions": [
      "usermod -U alice",
      "sudo usermod -U alice"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "source": "S02 Task 1 • Unlock Account"
  },
  {
    "id": 21,
    "title": "Foydalanuvchining Uy Katalogini Ko'chirish (-m -d)",
    "story": "Xodimning ish joyi o'zgarganda uning uy papkasi yangi manzilga ko'chiriladi.",
    "taskUz": "<code>student</code> ning uy katalogini <code>/home/student_new</code> ga ko'chiring (<code>-m -d</code>).",
    "expectedSql": "usermod -m -d /home/student_new student",
    "expectedBash": "usermod -m -d /home/student_new student",
    "hint": "`usermod -m -d /home/student_new student` buyrug'idan foydalaning.",
    "tags": [
      "USERMOD",
      "HOME_MOVE",
      "DIR"
    ],
    "solutions": [
      "usermod -m -d /home/student_new student",
      "sudo usermod -m -d /home/student_new student"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • Qiyin",
    "source": "S02 Seminar • usermod"
  },
  {
    "id": 22,
    "title": "Buzilgan Foydalanuvchi Bob Uchun Papka Ochish",
    "story": "Seminar 2 Case Study 2: Bob uy katalogisiz ochilgan edi. Bob uchun qo'lda papka ochish kerak.",
    "taskUz": "<code>/home/bob</code> katalogini yarating.",
    "expectedSql": "mkdir /home/bob",
    "expectedBash": "mkdir /home/bob",
    "hint": "`mkdir /home/bob` yoki `sudo mkdir /home/bob` buyrug'ini bering.",
    "tags": [
      "MKDIR",
      "BOB",
      "CASE_STUDY_2"
    ],
    "solutions": [
      "mkdir /home/bob",
      "sudo mkdir /home/bob"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • Oson",
    "source": "S02 Case Study 2 • Step 1"
  },
  {
    "id": 23,
    "title": "Standart Shablon Fayllarni Bob'ga Ko'chirish",
    "story": "Seminar 2 Case Study 2: <code>/etc/skel</code> dagi barcha shablon fayllarni Bob'ning yangi katalogiga ko'chiring.",
    "taskUz": "<code>/etc/skel/.</code> ichidagi fayllarni <code>/home/bob/</code> ga arxiv rejimida (<code>cp -a</code>) ko'chiring.",
    "expectedSql": "cp -a /etc/skel/. /home/bob/",
    "expectedBash": "cp -a /etc/skel/. /home/bob/",
    "hint": "`cp -a /etc/skel/. /home/bob/` buyrug'ini kiriting.",
    "tags": [
      "CP",
      "SKEL",
      "CASE_STUDY_2"
    ],
    "solutions": [
      "cp -a /etc/skel/. /home/bob/",
      "sudo cp -a /etc/skel/. /home/bob/"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "source": "S02 Case Study 2 • Step 2"
  },
  {
    "id": 24,
    "title": "Bob'ning Yangi Papkasiga To'liq Egalik Huquqini Berish",
    "story": "Ko'chirilgan fayllar root nomida bo'lib qolmasligi uchun egalikni Bob'ga o'tkazish shart.",
    "taskUz": "<code>/home/bob</code> katalogiga va uning barcha ichki fayllariga rekursiv <code>bob:bob</code> egaligini bering.",
    "expectedSql": "chown -R bob:bob /home/bob",
    "expectedBash": "chown -R bob:bob /home/bob",
    "hint": "`chown -R bob:bob /home/bob` buyrug'idan foydalaning.",
    "tags": [
      "CHOWN",
      "RECURSIVE",
      "CASE_STUDY_2"
    ],
    "solutions": [
      "chown -R bob:bob /home/bob",
      "sudo chown -R bob:bob /home/bob"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "source": "S02 Case Study 2 • Step 3"
  },
  {
    "id": 25,
    "title": "Bob'ga Bash Qobig'ini Bog'lash",
    "story": "Seminar 2 Case Study 2 yakuniy qadami: Bob uchun standart qobiqni <code>/bin/bash</code> qilib sozlang.",
    "taskUz": "<code>usermod</code> orqali <code>bob</code> ning shellini <code>/bin/bash</code> ga o'zgartiring.",
    "expectedSql": "usermod -s /bin/bash bob",
    "expectedBash": "usermod -s /bin/bash bob",
    "hint": "`usermod -s /bin/bash bob` buyrug'ini bering.",
    "tags": [
      "USERMOD",
      "BASH",
      "CASE_STUDY_2"
    ],
    "solutions": [
      "usermod -s /bin/bash bob",
      "sudo usermod -s /bin/bash bob"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • Oson",
    "source": "S02 Case Study 2 • Step 4"
  },
  {
    "id": 26,
    "title": "Alice Uy Katalogiga Faqat Egasi Kirish Ruxsatini O'rnatish",
    "story": "Seminar 2 talabi: <code>/home/alice</code> faqat Alice uchun ochiq bo'lishi (700 ruxsat) kerak.",
    "taskUz": "<code>/home/alice</code> katalogiga 700 ruxsatini o'rnating.",
    "expectedSql": "chmod 700 /home/alice",
    "expectedBash": "chmod 700 /home/alice",
    "hint": "`chmod 700 /home/alice` buyrug'ini kiriting.",
    "tags": [
      "CHMOD",
      "OCTAL_700",
      "SECURITY"
    ],
    "solutions": [
      "chmod 700 /home/alice",
      "sudo chmod 700 /home/alice"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • Oson",
    "source": "S02 Task 1 • Security 700"
  },
  {
    "id": 27,
    "title": "Foydalanuvchi Hisobining Amal Qilish Muddatini Tekshirish",
    "story": "Foydalanuvchi paroli eskirganligini tekshirish uchun <code>chage</code> yoki shadow faylini ko'rish kerak.",
    "taskUz": "<code>/etc/shadow</code> faylidan 'alice' satrini toping.",
    "expectedSql": "grep \"alice\" /etc/shadow",
    "expectedBash": "grep \"alice\" /etc/shadow",
    "hint": "`grep \"alice\" /etc/shadow` buyrug'ini bering.",
    "tags": [
      "SHADOW",
      "GREP",
      "EXPIRE"
    ],
    "solutions": [
      "grep \"alice\" /etc/shadow",
      "grep alice /etc/shadow"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • Oson",
    "source": "S02 Seminar • Shadow File"
  },
  {
    "id": 28,
    "title": "Foydalanuvchi Shaxsiy Parolini O'zgartirish (O'zi)",
    "story": "Tizimga kirgan foydalanuvchi o'z parolini o'zgartirishi uchun argumentlarsiz buyruq beradi.",
    "taskUz": "Joriy foydalanuvchi parolini o'zgartiruvchi buyruqni bering.",
    "expectedSql": "passwd",
    "expectedBash": "passwd",
    "hint": "`passwd` buyrug'ini yozing.",
    "tags": [
      "PASSWD",
      "SELF",
      "SECURITY"
    ],
    "solutions": [
      "passwd",
      "/usr/bin/passwd"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • Oson",
    "source": "S02 Seminar • passwd"
  },
  {
    "id": 29,
    "title": "Sudoers Faylini Xavfsiz Tekshirish",
    "story": "Imtiyozli buyruqlar ruxsatnomasi qayerda saqlanishini ko'rish uchun <code>/etc/group</code> dagi sudo a'zolarini ko'ring.",
    "taskUz": "<code>/etc/group</code> faylining birinchi 5 satrini ko'ring.",
    "expectedSql": "head -n 5 /etc/group",
    "expectedBash": "head -n 5 /etc/group",
    "hint": "`head -n 5 /etc/group` buyrug'ini kiriting.",
    "tags": [
      "HEAD",
      "GROUP",
      "AUDIT"
    ],
    "solutions": [
      "head -n 5 /etc/group",
      "head -5 /etc/group"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • Oson",
    "source": "S02 Task 1 • Groups"
  },
  {
    "id": 30,
    "title": "Alice Foydalanuvchisi Haqida To'liq Ma'lumot",
    "story": "Alice'ning UID, GID va barcha guruhlarini tekshiring.",
    "taskUz": "<code>id alice</code> buyrug'i orqali ma'lumotlarni ko'ring.",
    "expectedSql": "id alice",
    "expectedBash": "id alice",
    "hint": "`id alice` buyrug'ini bering.",
    "tags": [
      "ID",
      "ALICE",
      "VERIFICATION"
    ],
    "solutions": [
      "id alice"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • Oson",
    "source": "S02 Task 1 • Verify"
  },
  {
    "id": 31,
    "title": "Standart Skriptga Bajarish Huquqini Qo'shish (+x)",
    "story": "Yangi yozilgan Bash skripti standart holatda bajarilmaydi. Unga ijro ruxsatini qo'shish kerak.",
    "taskUz": "<code>readme.txt</code> fayliga bajarish ruxsatini (<code>+x</code>) qo'shing.",
    "expectedSql": "chmod +x readme.txt",
    "expectedBash": "chmod +x readme.txt",
    "hint": "`chmod +x readme.txt` buyrug'ini bering.",
    "tags": [
      "CHMOD",
      "EXECUTE",
      "PERM"
    ],
    "solutions": [
      "chmod +x readme.txt",
      "chmod a+x readme.txt"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • Oson",
    "source": "S02 Task 2 • File Permissions"
  },
  {
    "id": 32,
    "title": "Skriptdan Ijro Huquqini Olib Tashlash (-x)",
    "story": "Xavfli buyruqlar tasodifan ishga tushib ketmasligi uchun fayldan execute huquqini oling.",
    "taskUz": "<code>readme.txt</code> faylidan bajarish huquqini (<code>-x</code>) olib tashlang.",
    "expectedSql": "chmod -x readme.txt",
    "expectedBash": "chmod -x readme.txt",
    "hint": "`chmod -x readme.txt` buyrug'ini kiriting.",
    "tags": [
      "CHMOD",
      "REMOVE_EXEC",
      "SECURITY"
    ],
    "solutions": [
      "chmod -x readme.txt",
      "chmod a-x readme.txt"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • Oson",
    "source": "S02 Task 2 • chmod -x"
  },
  {
    "id": 33,
    "title": "Oktal Ruxsat: 755 (Egasi To'liq, Boshqalar O'qish/Ijro)",
    "story": "Dasturlar va umumiy kataloglar uchun eng mashhur 755 (rwxr-xr-x) ruxsatini o'rnating.",
    "taskUz": "<code>readme.txt</code> fayliga 755 ruxsatini bering.",
    "expectedSql": "chmod 755 readme.txt",
    "expectedBash": "chmod 755 readme.txt",
    "hint": "`chmod 755 readme.txt` buyrug'idan foydalaning.",
    "tags": [
      "CHMOD",
      "OCTAL_755",
      "STANDARD"
    ],
    "solutions": [
      "chmod 755 readme.txt"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • Oson",
    "source": "S02 Task 2 • chmod 755"
  },
  {
    "id": 34,
    "title": "Oktal Ruxsat: 644 (Klassik Oddiy Fayl Ruxsati)",
    "story": "Matnli hujjatlar va konfiguratsiya fayllari uchun standart 644 (rw-r--r--) o'rnating.",
    "taskUz": "<code>scores.csv</code> fayliga 644 ruxsatini o'rnating.",
    "expectedSql": "chmod 644 scores.csv",
    "expectedBash": "chmod 644 scores.csv",
    "hint": "`chmod 644 scores.csv` buyrug'ini bering.",
    "tags": [
      "CHMOD",
      "OCTAL_644",
      "DEFAULT"
    ],
    "solutions": [
      "chmod 644 scores.csv"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • Oson",
    "source": "S02 Task 2 • chmod 644"
  },
  {
    "id": 35,
    "title": "Oktal Ruxsat: 700 (Maxfiy Shaxsiy Fayl)",
    "story": "Faqat fayl egasi o'qishi, yozishi va bajarishi mumkin bo'lgan 700 (rwx------) rejimini qo'llang.",
    "taskUz": "<code>inventory.txt</code> fayliga 700 ruxsatini bering.",
    "expectedSql": "chmod 700 inventory.txt",
    "expectedBash": "chmod 700 inventory.txt",
    "hint": "`chmod 700 inventory.txt` buyrug'ini kiriting.",
    "tags": [
      "CHMOD",
      "OCTAL_700",
      "PRIVATE"
    ],
    "solutions": [
      "chmod 700 inventory.txt"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • Oson",
    "source": "S02 Task 2 • chmod 700"
  },
  {
    "id": 36,
    "title": "Oktal Ruxsat: 664 (Jamoaviy Hamkorlik Hujjati)",
    "story": "Egasi va guruh a'zolari o'qishi va yozishi mumkin, boshqalar esa faqat o'qiydi (rw-rw-r--).",
    "taskUz": "<code>scores.csv</code> fayliga 664 ruxsatini o'rnating.",
    "expectedSql": "chmod 664 scores.csv",
    "expectedBash": "chmod 664 scores.csv",
    "hint": "`chmod 664 scores.csv` buyrug'ini bering.",
    "tags": [
      "CHMOD",
      "OCTAL_664",
      "TEAM"
    ],
    "solutions": [
      "chmod 664 scores.csv"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • Oson",
    "source": "S02 Task 2 • chmod 664"
  },
  {
    "id": 37,
    "title": "Oktal Ruxsat: 775 (Jamoaviy Loyiha Papkasi)",
    "story": "Egasi va guruh a'zolari to'liq kirishi va yaratishi mumkin (rwxrwxr-x).",
    "taskUz": "<code>scores.csv</code> fayliga 775 ruxsatini o'rnating.",
    "expectedSql": "chmod 775 scores.csv",
    "expectedBash": "chmod 775 scores.csv",
    "hint": "`chmod 775 scores.csv` buyrug'ini bering.",
    "tags": [
      "CHMOD",
      "OCTAL_775",
      "TEAM_DIR"
    ],
    "solutions": [
      "chmod 775 scores.csv"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • Oson",
    "source": "S02 Task 2 • chmod 775"
  },
  {
    "id": 38,
    "title": "Oktal Ruxsat: 600 (Maxfiy Kalitlar va Konfiglar)",
    "story": "SSH private kalitlari va maxfiy ma'lumotlar uchun faqat egasiga o'qish/yozish (rw-------).",
    "taskUz": "<code>readme.txt</code> fayliga 600 ruxsatini bering.",
    "expectedSql": "chmod 600 readme.txt",
    "expectedBash": "chmod 600 readme.txt",
    "hint": "`chmod 600 readme.txt` buyrug'ini bering.",
    "tags": [
      "CHMOD",
      "OCTAL_600",
      "SSH_KEY"
    ],
    "solutions": [
      "chmod 600 readme.txt"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • Oson",
    "source": "S02 Task 2 • Secret Config"
  },
  {
    "id": 39,
    "title": "Xavfli Ruxsat: 777 (Barchaga To'liq Ruxsat)",
    "story": "Darslikdagi ogohlantirish: 777 ruxsati barcha foydalanuvchilarga to'liq ruxsat ochadi.",
    "taskUz": "<code>readme.txt</code> fayliga 777 ruxsatini bering.",
    "expectedSql": "chmod 777 readme.txt",
    "expectedBash": "chmod 777 readme.txt",
    "hint": "`chmod 777 readme.txt` buyrug'ini bering.",
    "tags": [
      "CHMOD",
      "OCTAL_777",
      "SECURITY_RISK"
    ],
    "solutions": [
      "chmod 777 readme.txt"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • Oson",
    "source": "S02 Task 2 • chmod 777"
  },
  {
    "id": 40,
    "title": "Xavfsiz Qaytarish: 644 ga Qayta Sozlash",
    "story": "Xavfli 777 ruxsatini xavfsiz standart 644 ga qaytaring.",
    "taskUz": "<code>readme.txt</code> fayliga 644 ruxsatini o'rnating.",
    "expectedSql": "chmod 644 readme.txt",
    "expectedBash": "chmod 644 readme.txt",
    "hint": "`chmod 644 readme.txt` buyrug'ini kiriting.",
    "tags": [
      "CHMOD",
      "FIX_PERM",
      "SECURITY"
    ],
    "solutions": [
      "chmod 644 readme.txt"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • Oson",
    "source": "S02 Task 2 • Rollback"
  },
  {
    "id": 41,
    "title": "Katalog Ruxsatini Tekshirish (ls -ld)",
    "story": "Katalog ichidagi fayllarni emas, katalogning o'z ruxsatlarini ko'rish uchun <code>-d</code> kerak.",
    "taskUz": "Joriy katalog (<code>.</code>) ruxsatlarini <code>ls -ld</code> bilan ko'ring.",
    "expectedSql": "ls -ld .",
    "expectedBash": "ls -ld .",
    "hint": "`ls -ld .` buyrug'ini bering.",
    "tags": [
      "LS",
      "DIR_PERM",
      "FLAGS"
    ],
    "solutions": [
      "ls -ld .",
      "ls -ld"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • Oson",
    "source": "S02 Seminar • Directory Permissions"
  },
  {
    "id": 42,
    "title": "Faylning Inode va Ruxsatlar Statini Ko'rish",
    "story": "Ruxsatlarning sonli (oktal) va ramziy holatini to'liq ko'rish uchun <code>stat</code> buyrug'idan foydalaning.",
    "taskUz": "<code>scores.csv</code> faylining stat ma'lumotlarini ekranga chiqaring.",
    "expectedSql": "stat scores.csv",
    "expectedBash": "stat scores.csv",
    "hint": "`stat scores.csv` buyrug'ini bering.",
    "tags": [
      "STAT",
      "INODE",
      "PERM"
    ],
    "solutions": [
      "stat scores.csv"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • Oson",
    "source": "S02 Seminar • Stat"
  },
  {
    "id": 43,
    "title": "Faqat Guruh Ruxsatini O'zgartirish (g+w)",
    "story": "Simvolik rejim: Egasi va boshqalarga tegmasdan faqat guruhga yozish huquqini qo'shing.",
    "taskUz": "<code>scores.csv</code> fayliga <code>g+w</code> ruxsatini bering.",
    "expectedSql": "chmod g+w scores.csv",
    "expectedBash": "chmod g+w scores.csv",
    "hint": "`chmod g+w scores.csv` buyrug'ini kiriting.",
    "tags": [
      "CHMOD",
      "SYMBOLIC",
      "GROUP_WRITE"
    ],
    "solutions": [
      "chmod g+w scores.csv"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "source": "S02 Seminar • Symbolic Mode"
  },
  {
    "id": 44,
    "title": "Boshqalardan O'qish Huquqini Olish (o-r)",
    "story": "Boshqa begona foydalanuvchilar faylni o'qiy olmasligi uchun <code>o-r</code> qiling.",
    "taskUz": "<code>scores.csv</code> faylidan boshqalarning o'qish huquqini (<code>o-r</code>) olib tashlang.",
    "expectedSql": "chmod o-r scores.csv",
    "expectedBash": "chmod o-r scores.csv",
    "hint": "`chmod o-r scores.csv` buyrug'ini bering.",
    "tags": [
      "CHMOD",
      "SYMBOLIC",
      "OTHERS"
    ],
    "solutions": [
      "chmod o-r scores.csv"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "source": "S02 Seminar • Symbolic Mode"
  },
  {
    "id": 45,
    "title": "Rekursiv Ruxsat O'zgartirish (-R 755)",
    "story": "Katalog va uning ichidagi barcha fayllarga bir vaqtda ruxsat belgilash.",
    "taskUz": "Joriy katalogdagi barcha fayllarga rekursiv (<code>-R 755</code>) ruxsat bering.",
    "expectedSql": "chmod -R 755 .",
    "expectedBash": "chmod -R 755 .",
    "hint": "`chmod -R 755 .` buyrug'ini bering.",
    "tags": [
      "CHMOD",
      "RECURSIVE",
      "OCTAL"
    ],
    "solutions": [
      "chmod -R 755 ."
    ],
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "source": "S02 Seminar • Recursive Chmod"
  },
  {
    "id": 46,
    "title": "Umumiy Loyiha Katalogi Ruxsatlarini Tekshirish",
    "story": "Seminar 2 Case Study 3: Jamoa <code>/srv/project</code> katalogida ishlaydi.",
    "taskUz": "<code>/srv/project</code> katalogining ruxsatlarini (<code>ls -ld</code>) ko'ring.",
    "expectedSql": "ls -ld /srv/project",
    "expectedBash": "ls -ld /srv/project",
    "hint": "`ls -ld /srv/project` buyrug'ini bering.",
    "tags": [
      "LS",
      "STICKY",
      "CASE_STUDY_3"
    ],
    "solutions": [
      "ls -ld /srv/project"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • Oson",
    "source": "S02 Case Study 3 • Step 1"
  },
  {
    "id": 47,
    "title": "Loyiha Katalogi Egaligini root:devteam ga O'tkazish",
    "story": "Seminar 2 Case Study 3: Katalogni egasi root, guruhi esa <code>devteam</code> bo'lishi kerak.",
    "taskUz": "<code>/srv/project</code> katalogiga <code>root:devteam</code> egaligini o'rnating.",
    "expectedSql": "chown root:devteam /srv/project",
    "expectedBash": "chown root:devteam /srv/project",
    "hint": "`chown root:devteam /srv/project` yoki `sudo chown root:devteam /srv/project` buyrug'ini bering.",
    "tags": [
      "CHOWN",
      "DEVTEAM",
      "CASE_STUDY_3"
    ],
    "solutions": [
      "chown root:devteam /srv/project",
      "sudo chown root:devteam /srv/project"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • O'rta",
    "source": "S02 Case Study 3 • Step 2"
  },
  {
    "id": 48,
    "title": "Sticky Bit Nima Uchun Kerakligini Anglash (+t)",
    "story": "Katalogda Sticky Bit qo'yilganda, faqat fayl egasi yoki root o'z faylini o'chira oladi.",
    "taskUz": "<code>/srv/project</code> katalogiga Sticky Bit (<code>+t</code>) qo'shing.",
    "expectedSql": "chmod +t /srv/project",
    "expectedBash": "chmod +t /srv/project",
    "hint": "`chmod +t /srv/project` buyrug'ini bering.",
    "tags": [
      "STICKY_BIT",
      "CHMOD",
      "CASE_STUDY_3"
    ],
    "solutions": [
      "chmod +t /srv/project",
      "sudo chmod +t /srv/project"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • O'rta",
    "source": "S02 Case Study 3 • Step 3"
  },
  {
    "id": 49,
    "title": "To'liq Oktal Rejim: 1775 Bilan Sozlash",
    "story": "Seminar 2 Case Study 3 rasmiy yechimi: Sticky bit (1) + rwxrwxr-x (775) = 1775.",
    "taskUz": "<code>/srv/project</code> katalogiga 1775 ruxsatini o'rnating.",
    "expectedSql": "chmod 1775 /srv/project",
    "expectedBash": "chmod 1775 /srv/project",
    "hint": "`chmod 1775 /srv/project` buyrug'ini bering.",
    "tags": [
      "CHMOD",
      "1775",
      "MODEL_ANSWER"
    ],
    "solutions": [
      "chmod 1775 /srv/project",
      "sudo chmod 1775 /srv/project"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • O'rta",
    "source": "S02 Case Study 3 • Model Answer"
  },
  {
    "id": 50,
    "title": "Tmp Katalogi Sticky Bitini Tekshirish",
    "story": "Linuxdagi klassik /tmp katalogi har doim Sticky Bit (1777 / rwxrwxrwt) rejimida ishlaydi.",
    "taskUz": "<code>/tmp</code> katalogining ruxsatlarini (<code>ls -ld /tmp</code>) ko'ring.",
    "expectedSql": "ls -ld /tmp",
    "expectedBash": "ls -ld /tmp",
    "hint": "`ls -ld /tmp` buyrug'ini bering.",
    "tags": [
      "LS",
      "TMP",
      "STICKY"
    ],
    "solutions": [
      "ls -ld /tmp"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • Oson",
    "source": "S02 Seminar • /tmp Sticky"
  }
];
