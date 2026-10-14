// ============================================================================
// QUESTION GENERATOR FOR WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 2
// Generates exactly 150 questions (15 per sector x 10 sectors)
// Saves to data/questions_1_50.js, questions_51_100.js, questions_101_150.js
// ============================================================================

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const questions = [];

function addQ(id, title, story, taskUz, expectedCmd, hint, tags, solutions, sector, difficulty, source) {
  questions.push({
    id,
    title,
    story,
    taskUz,
    expectedSql: expectedCmd, // compatibility alias
    expectedBash: expectedCmd,
    hint,
    tags,
    solutions: solutions || [expectedCmd],
    sector,
    difficulty,
    source
  });
}

// ----------------------------------------------------------------------------
// SECTOR 1 (1 - 15): Foydalanuvchilar Boshqaruvi & Yaratish
// ----------------------------------------------------------------------------
addQ(1, "Barcha Foydalanuvchilar Ro'yxatini Ko'rish",
  "Debian serverida qaysi tizim foydalanuvchilari ro'yxatdan o'tganligini tekshirish zarur.",
  "Foydalanuvchilar ma'lumotlari saqlanuvchi <code>/etc/passwd</code> faylining to'liq tarkibini ekranga chiqaring.",
  "cat /etc/passwd",
  "`cat` buyrug'i orqali `/etc/passwd` faylini o'qing.",
  ["USERADD", "PASSWD", "CAT"],
  ["cat /etc/passwd", "/bin/cat /etc/passwd"],
  1, "1-Qavat • Oson", "S02 Task 1 • User Management");

addQ(2, "Muayyan Foydalanuvchini Qidirish",
  "Tizimda 'student' foydalanuvchisi mavjudligini tezkor aniqlash lozim.",
  "<code>/etc/passwd</code> faylidan 'student' so'zini qidirib toping.",
  "grep \"student\" /etc/passwd",
  "`grep \"student\" /etc/passwd` buyrug'idan foydalaning.",
  ["GREP", "PASSWD", "USER"],
  ["grep \"student\" /etc/passwd", "grep student /etc/passwd"],
  1, "1-Qavat • Oson", "S02 Task 1 • User Management");

addQ(3, "Yangi Xodim Alice'ni Boshlang'ich Yaratish",
  "Kompaniyaga yangi DevOps muhandisi Alice ishga kirdi. Uni skript orqali yaratish lozim.",
  "<code>useradd</code> buyrug'i orqali 'alice' foydalanuvchisini yarating (parametrlar talab etilmaydi).",
  "useradd alice",
  "`useradd alice` yoki `sudo useradd alice` buyrug'ini bering.",
  ["USERADD", "PAM", "ADMIN"],
  ["useradd alice", "sudo useradd alice"],
  1, "1-Qavat • Oson", "S02 Task 1 • New Employee");

addQ(4, "Foydalanuvchini Uy Papkasi Bilan Yaratish (-m)",
  "Foydalanuvchi tizimga kirganda shaxsiy fayllarini saqlashi uchun unga uy katalogi ochilishi shart.",
  "<code>developer1</code> nomli yangi foydalanuvchini uy katalogi (<code>-m</code>) bilan birga yarating.",
  "useradd -m developer1",
  "`useradd -m developer1` buyrug'idan foydalaning.",
  ["USERADD", "HOME", "AUTOMATION"],
  ["useradd -m developer1", "sudo useradd -m developer1"],
  1, "1-Qavat • Oson", "S02 Task 1 • New Employee");

addQ(5, "Default Bash Shell Belvash (-s)",
  "Standart holatda tizim cheklangan shell berishi mumkin. Foydalanuvchiga <code>/bin/bash</code> belgilash zarur.",
  "Yangi foydalanuvchi <code>developer2</code> ni <code>-s /bin/bash</code> parametr bilan yarating.",
  "useradd -s /bin/bash developer2",
  "`useradd -s /bin/bash developer2` buyrug'ini yozing.",
  ["USERADD", "BASH", "SHELL"],
  ["useradd -s /bin/bash developer2", "sudo useradd -s /bin/bash developer2"],
  1, "1-Qavat • Oson", "S02 Task 1 • Shell Setup");

addQ(6, "Foydalanuvchiga Izoh / To'liq Ism Berish (-c)",
  "Audit jurnallarida xodimning to'liq ism-familiyasi ko'rinib turishi lozim.",
  "<code>qa_tester</code> nomli foydalanuvchini <code>-c \"QA Lead Tester\"</code> izohi bilan yarating.",
  "useradd -c \"QA Lead Tester\" qa_tester",
  "`useradd -c \"QA Lead Tester\" qa_tester` buyrug'ini kiriting.",
  ["USERADD", "COMMENT", "AUDIT"],
  ["useradd -c \"QA Lead Tester\" qa_tester", "sudo useradd -c \"QA Lead Tester\" qa_tester"],
  1, "1-Qavat • Oson", "S02 Task 1 • User Management");

addQ(7, "Qo'shimcha Guruhga Qo'shish (-G)",
  "Foydalanuvchi imtiyozli ma'murlar guruhiga a'zo bo'lishi kerak.",
  "Yangi foydalanuvchi <code>sec_admin</code> ni <code>sudo</code> guruhiga (<code>-G sudo</code>) qo'shgan holda yarating.",
  "useradd -G sudo sec_admin",
  "`useradd -G sudo sec_admin` buyrug'ini yozing.",
  ["USERADD", "GROUPS", "SUDO"],
  ["useradd -G sudo sec_admin", "sudo useradd -G sudo sec_admin"],
  1, "1-Qavat • O'rta", "S02 Task 1 • Group Assignment");

addQ(8, "To'liq Professional Xodim Onboarding Buyrug'i",
  "Seminar 2 1-topshiriq talabi: Uy katalogi, bash qobig'i va sudo guruhi bilan to'liq yaratish.",
  "<code>alice</code> foydalanuvchisini uy katalogi (<code>-m</code>), <code>-s /bin/bash</code> va <code>-G sudo</code> bilan yarating.",
  "useradd -m -s /bin/bash -G sudo alice",
  "`useradd -m -s /bin/bash -G sudo alice` buyrug'ini bering.",
  ["USERADD", "SEMINAR", "BEST_PRACTICE"],
  ["useradd -m -s /bin/bash -G sudo alice", "sudo useradd -m -s /bin/bash -G sudo alice"],
  1, "1-Qavat • O'rta", "S02 Task 1 • Model Answer");

addQ(9, "Skeleton (Shablon) Fayllarini Ko'rish",
  "Yangi ochilgan foydalanuvchilarning uy katalogiga qaysi standart shablon fayllar ko'chirilishini tekshiring.",
  "<code>/etc/skel</code> katalogidagi barcha yashirin fayllarni (<code>-la</code>) ko'ring.",
  "ls -la /etc/skel",
  "`ls -la /etc/skel` buyrug'ini bering.",
  ["SKEL", "LS", "PROFILE"],
  ["ls -la /etc/skel", "ls -a /etc/skel"],
  1, "1-Qavat • Oson", "S02 Seminar • /etc/skel");

addQ(10, "Standart .bashrc Shablonini O'qish",
  "Yangi foydalanuvchining boshlang'ich muhiti qanday sozlanishini bilish uchun shablonni o'rganing.",
  "<code>/etc/skel/.bashrc</code> faylining tarkibini ko'ring.",
  "cat /etc/skel/.bashrc",
  "`cat /etc/skel/.bashrc` buyrug'ini kiriting.",
  ["CAT", "SKEL", "BASHRC"],
  ["cat /etc/skel/.bashrc"],
  1, "1-Qavat • Oson", "S02 Seminar • /etc/skel");

addQ(11, "Barcha Tizim Guruhlarini Tekshirish",
  "Serverda qanday guruhlar mavjudligini va ularning identifikatorlarini (GID) ko'ring.",
  "<code>/etc/group</code> faylining tarkibini ekranga chiqaring.",
  "cat /etc/group",
  "`cat /etc/group` buyrug'ini yozing.",
  ["GROUP", "CAT", "ACCOUNTS"],
  ["cat /etc/group"],
  1, "1-Qavat • Oson", "S02 Task 1 • Groups");

addQ(12, "Sudo Guruhidagi Foydalanuvchilarni Aniqlash",
  "Xavfsizlik talabiga ko'ra, qaysi foydalanuvchilar 'sudo' guruhida ekanligini tezkor tekshiring.",
  "<code>/etc/group</code> faylidan 'sudo' satrini qidiring.",
  "grep \"sudo\" /etc/group",
  "`grep \"sudo\" /etc/group` buyrug'ini bering.",
  ["GREP", "SUDO", "SECURITY"],
  ["grep \"sudo\" /etc/group", "grep sudo /etc/group"],
  1, "1-Qavat • Oson", "S02 Task 1 • Audit");

addQ(13, "Devteam Guruhini Topish",
  "Dasturchilar jamoasi loyihalari uchun ochilgan 'devteam' guruhini tekshiring.",
  "<code>/etc/group</code> faylidan 'devteam' satrini filtrlang.",
  "grep \"devteam\" /etc/group",
  "`grep \"devteam\" /etc/group` buyrug'idan foydalaning.",
  ["GREP", "DEVTEAM", "GROUPS"],
  ["grep \"devteam\" /etc/group", "grep devteam /etc/group"],
  1, "1-Qavat • Oson", "S02 Case Study 3");

addQ(14, "Joriy Foydalanuvchi Shaxsiy Identifikatori",
  "Hozirgi foydalanuvchining UID, GID va barcha tegishli guruhlarini aniqlovchi klassik buyruqni bering.",
  "<code>id</code> buyrug'i orqali joriy identifikatorlarni ekranga chiqaring.",
  "id",
  "`id` buyrug'ini yozing.",
  ["ID", "WHOAMI", "UID"],
  ["id", "/usr/bin/id"],
  1, "1-Qavat • Oson", "S02 Seminar • System Calls");

addQ(15, "Shifrlangan Parollar Fayli Ruxsatini Tekshirish",
  "Linuxda oddiy foydalanuvchilar parollar heshini ko'ra olmasligi uchun ruxsatlar cheklangan bo'ladi.",
  "<code>/etc/shadow</code> faylining batafsil xususiyatlarini (<code>ls -l</code>) ko'ring.",
  "ls -l /etc/shadow",
  "`ls -l /etc/shadow` buyrug'ini kiriting.",
  ["SHADOW", "LS", "PERMISSIONS"],
  ["ls -l /etc/shadow"],
  1, "1-Qavat • O'rta", "S02 Task 1 • Shadow Security");

// ----------------------------------------------------------------------------
// SECTOR 2 (16 - 30): Foydalanuvchi Sozlamalari & Qulflash (usermod, passwd)
// ----------------------------------------------------------------------------
addQ(16, "Foydalanuvchi Parolini Yangilash",
  "Seminar 2 talabi: Yangi yaratilgan foydalanuvchiga parol o'rnatish lozim.",
  "<code>alice</code> foydalanuvchisiga yangi parol o'rnatish uchun buyruq bering.",
  "passwd alice",
  "`passwd alice` yoki `sudo passwd alice` buyrug'ini bering.",
  ["PASSWD", "SECURITY", "PAM"],
  ["passwd alice", "sudo passwd alice"],
  2, "2-Qavat • Oson", "S02 Task 1 • Set Password");

addQ(17, "Foydalanuvchining Standart Shellini O'zgartirish",
  "Mavjud foydalanuvchining login qobig'ini xavfsizroq yoki qulayroq shellga o'tkazish kerak.",
  "<code>bob</code> foydalanuvchisining standart qobig'ini <code>/bin/bash</code> ga o'zgartiring.",
  "usermod -s /bin/bash bob",
  "`usermod -s /bin/bash bob` buyrug'ini bering.",
  ["USERMOD", "SHELL", "BASH"],
  ["usermod -s /bin/bash bob", "sudo usermod -s /bin/bash bob"],
  2, "2-Qavat • Oson", "S02 Case Study 2 • Fixing Account");

addQ(18, "Foydalanuvchini Yangi Guruhga Qo'shish (-aG)",
  "Seminar 2 talabi: Mavjud guruhlarni o'chirmasdan yangi guruhni append qilish.",
  "<code>student</code> foydalanuvchisini <code>devteam</code> guruhiga qo'shing (<code>-aG</code>).",
  "usermod -aG devteam student",
  "`usermod -aG devteam student` buyrug'idan foydalaning.",
  ["USERMOD", "APPEND_GROUP", "DEVTEAM"],
  ["usermod -aG devteam student", "sudo usermod -aG devteam student"],
  2, "2-Qavat • O'rta", "S02 Case Study 3 • Group Membership");

addQ(19, "Hisobni Vaqtincha Qulflash (Lock Account -L)",
  "Xavfsizlik tekshiruvi davrida foydalanuvchining tizimga kirishini vaqtincha to'xtatib turish kerak.",
  "<code>alice</code> foydalanuvchisining hisobini qulflang (<code>-L</code> parametri orqali).",
  "usermod -L alice",
  "`usermod -L alice` buyrug'ini kiriting.",
  ["USERMOD", "LOCK", "SECURITY"],
  ["usermod -L alice", "sudo usermod -L alice"],
  2, "2-Qavat • O'rta", "S02 Task 1 • Lock Account");

addQ(20, "Qulflangan Hisobni Qayta Ochish (Unlock Account -U)",
  "Audit muvaffaqiyatli o'tgach, xodimning hisobini qayta faollashtirish zarur.",
  "<code>alice</code> hisobidagi qulfni yeching (<code>-U</code> parametri orqali).",
  "usermod -U alice",
  "`usermod -U alice` buyrug'ini kiriting.",
  ["USERMOD", "UNLOCK", "SECURITY"],
  ["usermod -U alice", "sudo usermod -U alice"],
  2, "2-Qavat • O'rta", "S02 Task 1 • Unlock Account");

addQ(21, "Foydalanuvchining Uy Katalogini Ko'chirish (-m -d)",
  "Xodimning ish joyi o'zgarganda uning uy papkasi yangi manzilga ko'chiriladi.",
  "<code>student</code> ning uy katalogini <code>/home/student_new</code> ga ko'chiring (<code>-m -d</code>).",
  "usermod -m -d /home/student_new student",
  "`usermod -m -d /home/student_new student` buyrug'idan foydalaning.",
  ["USERMOD", "HOME_MOVE", "DIR"],
  ["usermod -m -d /home/student_new student", "sudo usermod -m -d /home/student_new student"],
  2, "2-Qavat • Qiyin", "S02 Seminar • usermod");

addQ(22, "Buzilgan Foydalanuvchi Bob Uchun Papka Ochish",
  "Seminar 2 Case Study 2: Bob uy katalogisiz ochilgan edi. Bob uchun qo'lda papka ochish kerak.",
  "<code>/home/bob</code> katalogini yarating.",
  "mkdir /home/bob",
  "`mkdir /home/bob` yoki `sudo mkdir /home/bob` buyrug'ini bering.",
  ["MKDIR", "BOB", "CASE_STUDY_2"],
  ["mkdir /home/bob", "sudo mkdir /home/bob"],
  2, "2-Qavat • Oson", "S02 Case Study 2 • Step 1");

addQ(23, "Standart Shablon Fayllarni Bob'ga Ko'chirish",
  "Seminar 2 Case Study 2: <code>/etc/skel</code> dagi barcha shablon fayllarni Bob'ning yangi katalogiga ko'chiring.",
  "<code>/etc/skel/.</code> ichidagi fayllarni <code>/home/bob/</code> ga arxiv rejimida (<code>cp -a</code>) ko'chiring.",
  "cp -a /etc/skel/. /home/bob/",
  "`cp -a /etc/skel/. /home/bob/` buyrug'ini kiriting.",
  ["CP", "SKEL", "CASE_STUDY_2"],
  ["cp -a /etc/skel/. /home/bob/", "sudo cp -a /etc/skel/. /home/bob/"],
  2, "2-Qavat • O'rta", "S02 Case Study 2 • Step 2");

addQ(24, "Bob'ning Yangi Papkasiga To'liq Egalik Huquqini Berish",
  "Ko'chirilgan fayllar root nomida bo'lib qolmasligi uchun egalikni Bob'ga o'tkazish shart.",
  "<code>/home/bob</code> katalogiga va uning barcha ichki fayllariga rekursiv <code>bob:bob</code> egaligini bering.",
  "chown -R bob:bob /home/bob",
  "`chown -R bob:bob /home/bob` buyrug'idan foydalaning.",
  ["CHOWN", "RECURSIVE", "CASE_STUDY_2"],
  ["chown -R bob:bob /home/bob", "sudo chown -R bob:bob /home/bob"],
  2, "2-Qavat • O'rta", "S02 Case Study 2 • Step 3");

addQ(25, "Bob'ga Bash Qobig'ini Bog'lash",
  "Seminar 2 Case Study 2 yakuniy qadami: Bob uchun standart qobiqni <code>/bin/bash</code> qilib sozlang.",
  "<code>usermod</code> orqali <code>bob</code> ning shellini <code>/bin/bash</code> ga o'zgartiring.",
  "usermod -s /bin/bash bob",
  "`usermod -s /bin/bash bob` buyrug'ini bering.",
  ["USERMOD", "BASH", "CASE_STUDY_2"],
  ["usermod -s /bin/bash bob", "sudo usermod -s /bin/bash bob"],
  2, "2-Qavat • Oson", "S02 Case Study 2 • Step 4");

addQ(26, "Alice Uy Katalogiga Faqat Egasi Kirish Ruxsatini O'rnatish",
  "Seminar 2 talabi: <code>/home/alice</code> faqat Alice uchun ochiq bo'lishi (700 ruxsat) kerak.",
  "<code>/home/alice</code> katalogiga 700 ruxsatini o'rnating.",
  "chmod 700 /home/alice",
  "`chmod 700 /home/alice` buyrug'ini kiriting.",
  ["CHMOD", "OCTAL_700", "SECURITY"],
  ["chmod 700 /home/alice", "sudo chmod 700 /home/alice"],
  2, "2-Qavat • Oson", "S02 Task 1 • Security 700");

addQ(27, "Foydalanuvchi Hisobining Amal Qilish Muddatini Tekshirish",
  "Foydalanuvchi paroli eskirganligini tekshirish uchun <code>chage</code> yoki shadow faylini ko'rish kerak.",
  "<code>/etc/shadow</code> faylidan 'alice' satrini toping.",
  "grep \"alice\" /etc/shadow",
  "`grep \"alice\" /etc/shadow` buyrug'ini bering.",
  ["SHADOW", "GREP", "EXPIRE"],
  ["grep \"alice\" /etc/shadow", "grep alice /etc/shadow"],
  2, "2-Qavat • Oson", "S02 Seminar • Shadow File");

addQ(28, "Foydalanuvchi Shaxsiy Parolini O'zgartirish (O'zi)",
  "Tizimga kirgan foydalanuvchi o'z parolini o'zgartirishi uchun argumentlarsiz buyruq beradi.",
  "Joriy foydalanuvchi parolini o'zgartiruvchi buyruqni bering.",
  "passwd",
  "`passwd` buyrug'ini yozing.",
  ["PASSWD", "SELF", "SECURITY"],
  ["passwd", "/usr/bin/passwd"],
  2, "2-Qavat • Oson", "S02 Seminar • passwd");

addQ(29, "Sudoers Faylini Xavfsiz Tekshirish",
  "Imtiyozli buyruqlar ruxsatnomasi qayerda saqlanishini ko'rish uchun <code>/etc/group</code> dagi sudo a'zolarini ko'ring.",
  "<code>/etc/group</code> faylining birinchi 5 satrini ko'ring.",
  "head -n 5 /etc/group",
  "`head -n 5 /etc/group` buyrug'ini kiriting.",
  ["HEAD", "GROUP", "AUDIT"],
  ["head -n 5 /etc/group", "head -5 /etc/group"],
  2, "2-Qavat • Oson", "S02 Task 1 • Groups");

addQ(30, "Alice Foydalanuvchisi Haqida To'liq Ma'lumot",
  "Alice'ning UID, GID va barcha guruhlarini tekshiring.",
  "<code>id alice</code> buyrug'i orqali ma'lumotlarni ko'ring.",
  "id alice",
  "`id alice` buyrug'ini bering.",
  ["ID", "ALICE", "VERIFICATION"],
  ["id alice"],
  2, "2-Qavat • Oson", "S02 Task 1 • Verify");

// ----------------------------------------------------------------------------
// SECTOR 3 (31 - 45): Ruxsatlar Matematikasi & Chmod (4=r, 2=w, 1=x)
// ----------------------------------------------------------------------------
addQ(31, "Standart Skriptga Bajarish Huquqini Qo'shish (+x)",
  "Yangi yozilgan Bash skripti standart holatda bajarilmaydi. Unga ijro ruxsatini qo'shish kerak.",
  "<code>readme.txt</code> fayliga bajarish ruxsatini (<code>+x</code>) qo'shing.",
  "chmod +x readme.txt",
  "`chmod +x readme.txt` buyrug'ini bering.",
  ["CHMOD", "EXECUTE", "PERM"],
  ["chmod +x readme.txt", "chmod a+x readme.txt"],
  3, "3-Qavat • Oson", "S02 Task 2 • File Permissions");

addQ(32, "Skriptdan Ijro Huquqini Olib Tashlash (-x)",
  "Xavfli buyruqlar tasodifan ishga tushib ketmasligi uchun fayldan execute huquqini oling.",
  "<code>readme.txt</code> faylidan bajarish huquqini (<code>-x</code>) olib tashlang.",
  "chmod -x readme.txt",
  "`chmod -x readme.txt` buyrug'ini kiriting.",
  ["CHMOD", "REMOVE_EXEC", "SECURITY"],
  ["chmod -x readme.txt", "chmod a-x readme.txt"],
  3, "3-Qavat • Oson", "S02 Task 2 • chmod -x");

addQ(33, "Oktal Ruxsat: 755 (Egasi To'liq, Boshqalar O'qish/Ijro)",
  "Dasturlar va umumiy kataloglar uchun eng mashhur 755 (rwxr-xr-x) ruxsatini o'rnating.",
  "<code>readme.txt</code> fayliga 755 ruxsatini bering.",
  "chmod 755 readme.txt",
  "`chmod 755 readme.txt` buyrug'idan foydalaning.",
  ["CHMOD", "OCTAL_755", "STANDARD"],
  ["chmod 755 readme.txt"],
  3, "3-Qavat • Oson", "S02 Task 2 • chmod 755");

addQ(34, "Oktal Ruxsat: 644 (Klassik Oddiy Fayl Ruxsati)",
  "Matnli hujjatlar va konfiguratsiya fayllari uchun standart 644 (rw-r--r--) o'rnating.",
  "<code>scores.csv</code> fayliga 644 ruxsatini o'rnating.",
  "chmod 644 scores.csv",
  "`chmod 644 scores.csv` buyrug'ini bering.",
  ["CHMOD", "OCTAL_644", "DEFAULT"],
  ["chmod 644 scores.csv"],
  3, "3-Qavat • Oson", "S02 Task 2 • chmod 644");

addQ(35, "Oktal Ruxsat: 700 (Maxfiy Shaxsiy Fayl)",
  "Faqat fayl egasi o'qishi, yozishi va bajarishi mumkin bo'lgan 700 (rwx------) rejimini qo'llang.",
  "<code>inventory.txt</code> fayliga 700 ruxsatini bering.",
  "chmod 700 inventory.txt",
  "`chmod 700 inventory.txt` buyrug'ini kiriting.",
  ["CHMOD", "OCTAL_700", "PRIVATE"],
  ["chmod 700 inventory.txt"],
  3, "3-Qavat • Oson", "S02 Task 2 • chmod 700");

addQ(36, "Oktal Ruxsat: 664 (Jamoaviy Hamkorlik Hujjati)",
  "Egasi va guruh a'zolari o'qishi va yozishi mumkin, boshqalar esa faqat o'qiydi (rw-rw-r--).",
  "<code>scores.csv</code> fayliga 664 ruxsatini o'rnating.",
  "chmod 664 scores.csv",
  "`chmod 664 scores.csv` buyrug'ini bering.",
  ["CHMOD", "OCTAL_664", "TEAM"],
  ["chmod 664 scores.csv"],
  3, "3-Qavat • Oson", "S02 Task 2 • chmod 664");

addQ(37, "Oktal Ruxsat: 775 (Jamoaviy Loyiha Papkasi)",
  "Egasi va guruh a'zolari to'liq kirishi va yaratishi mumkin (rwxrwxr-x).",
  "<code>scores.csv</code> fayliga 775 ruxsatini o'rnating.",
  "chmod 775 scores.csv",
  "`chmod 775 scores.csv` buyrug'ini bering.",
  ["CHMOD", "OCTAL_775", "TEAM_DIR"],
  ["chmod 775 scores.csv"],
  3, "3-Qavat • Oson", "S02 Task 2 • chmod 775");

addQ(38, "Oktal Ruxsat: 600 (Maxfiy Kalitlar va Konfiglar)",
  "SSH private kalitlari va maxfiy ma'lumotlar uchun faqat egasiga o'qish/yozish (rw-------).",
  "<code>readme.txt</code> fayliga 600 ruxsatini bering.",
  "chmod 600 readme.txt",
  "`chmod 600 readme.txt` buyrug'ini bering.",
  ["CHMOD", "OCTAL_600", "SSH_KEY"],
  ["chmod 600 readme.txt"],
  3, "3-Qavat • Oson", "S02 Task 2 • Secret Config");

addQ(39, "Xavfli Ruxsat: 777 (Barchaga To'liq Ruxsat)",
  "Darslikdagi ogohlantirish: 777 ruxsati barcha foydalanuvchilarga to'liq ruxsat ochadi.",
  "<code>readme.txt</code> fayliga 777 ruxsatini bering.",
  "chmod 777 readme.txt",
  "`chmod 777 readme.txt` buyrug'ini bering.",
  ["CHMOD", "OCTAL_777", "SECURITY_RISK"],
  ["chmod 777 readme.txt"],
  3, "3-Qavat • Oson", "S02 Task 2 • chmod 777");

addQ(40, "Xavfsiz Qaytarish: 644 ga Qayta Sozlash",
  "Xavfli 777 ruxsatini xavfsiz standart 644 ga qaytaring.",
  "<code>readme.txt</code> fayliga 644 ruxsatini o'rnating.",
  "chmod 644 readme.txt",
  "`chmod 644 readme.txt` buyrug'ini kiriting.",
  ["CHMOD", "FIX_PERM", "SECURITY"],
  ["chmod 644 readme.txt"],
  3, "3-Qavat • Oson", "S02 Task 2 • Rollback");

addQ(41, "Katalog Ruxsatini Tekshirish (ls -ld)",
  "Katalog ichidagi fayllarni emas, katalogning o'z ruxsatlarini ko'rish uchun <code>-d</code> kerak.",
  "Joriy katalog (<code>.</code>) ruxsatlarini <code>ls -ld</code> bilan ko'ring.",
  "ls -ld .",
  "`ls -ld .` buyrug'ini bering.",
  ["LS", "DIR_PERM", "FLAGS"],
  ["ls -ld .", "ls -ld"],
  3, "3-Qavat • Oson", "S02 Seminar • Directory Permissions");

addQ(42, "Faylning Inode va Ruxsatlar Statini Ko'rish",
  "Ruxsatlarning sonli (oktal) va ramziy holatini to'liq ko'rish uchun <code>stat</code> buyrug'idan foydalaning.",
  "<code>scores.csv</code> faylining stat ma'lumotlarini ekranga chiqaring.",
  "stat scores.csv",
  "`stat scores.csv` buyrug'ini bering.",
  ["STAT", "INODE", "PERM"],
  ["stat scores.csv"],
  3, "3-Qavat • Oson", "S02 Seminar • Stat");

addQ(43, "Faqat Guruh Ruxsatini O'zgartirish (g+w)",
  "Simvolik rejim: Egasi va boshqalarga tegmasdan faqat guruhga yozish huquqini qo'shing.",
  "<code>scores.csv</code> fayliga <code>g+w</code> ruxsatini bering.",
  "chmod g+w scores.csv",
  "`chmod g+w scores.csv` buyrug'ini kiriting.",
  ["CHMOD", "SYMBOLIC", "GROUP_WRITE"],
  ["chmod g+w scores.csv"],
  3, "3-Qavat • O'rta", "S02 Seminar • Symbolic Mode");

addQ(44, "Boshqalardan O'qish Huquqini Olish (o-r)",
  "Boshqa begona foydalanuvchilar faylni o'qiy olmasligi uchun <code>o-r</code> qiling.",
  "<code>scores.csv</code> faylidan boshqalarning o'qish huquqini (<code>o-r</code>) olib tashlang.",
  "chmod o-r scores.csv",
  "`chmod o-r scores.csv` buyrug'ini bering.",
  ["CHMOD", "SYMBOLIC", "OTHERS"],
  ["chmod o-r scores.csv"],
  3, "3-Qavat • O'rta", "S02 Seminar • Symbolic Mode");

addQ(45, "Rekursiv Ruxsat O'zgartirish (-R 755)",
  "Katalog va uning ichidagi barcha fayllarga bir vaqtda ruxsat belgilash.",
  "Joriy katalogdagi barcha fayllarga rekursiv (<code>-R 755</code>) ruxsat bering.",
  "chmod -R 755 .",
  "`chmod -R 755 .` buyrug'ini bering.",
  ["CHMOD", "RECURSIVE", "OCTAL"],
  ["chmod -R 755 ."],
  3, "3-Qavat • O'rta", "S02 Seminar • Recursive Chmod");

// ----------------------------------------------------------------------------
// SECTOR 4 (46 - 60): Sticky Bit & Xavfsiz Jamoaviy Papkalar (/srv/project)
// ----------------------------------------------------------------------------
addQ(46, "Umumiy Loyiha Katalogi Ruxsatlarini Tekshirish",
  "Seminar 2 Case Study 3: Jamoa <code>/srv/project</code> katalogida ishlaydi.",
  "<code>/srv/project</code> katalogining ruxsatlarini (<code>ls -ld</code>) ko'ring.",
  "ls -ld /srv/project",
  "`ls -ld /srv/project` buyrug'ini bering.",
  ["LS", "STICKY", "CASE_STUDY_3"],
  ["ls -ld /srv/project"],
  4, "4-Qavat • Oson", "S02 Case Study 3 • Step 1");

addQ(47, "Loyiha Katalogi Egaligini root:devteam ga O'tkazish",
  "Seminar 2 Case Study 3: Katalogni egasi root, guruhi esa <code>devteam</code> bo'lishi kerak.",
  "<code>/srv/project</code> katalogiga <code>root:devteam</code> egaligini o'rnating.",
  "chown root:devteam /srv/project",
  "`chown root:devteam /srv/project` yoki `sudo chown root:devteam /srv/project` buyrug'ini bering.",
  ["CHOWN", "DEVTEAM", "CASE_STUDY_3"],
  ["chown root:devteam /srv/project", "sudo chown root:devteam /srv/project"],
  4, "4-Qavat • O'rta", "S02 Case Study 3 • Step 2");

addQ(48, "Sticky Bit Nima Uchun Kerakligini Anglash (+t)",
  "Katalogda Sticky Bit qo'yilganda, faqat fayl egasi yoki root o'z faylini o'chira oladi.",
  "<code>/srv/project</code> katalogiga Sticky Bit (<code>+t</code>) qo'shing.",
  "chmod +t /srv/project",
  "`chmod +t /srv/project` buyrug'ini bering.",
  ["STICKY_BIT", "CHMOD", "CASE_STUDY_3"],
  ["chmod +t /srv/project", "sudo chmod +t /srv/project"],
  4, "4-Qavat • O'rta", "S02 Case Study 3 • Step 3");

addQ(49, "To'liq Oktal Rejim: 1775 Bilan Sozlash",
  "Seminar 2 Case Study 3 rasmiy yechimi: Sticky bit (1) + rwxrwxr-x (775) = 1775.",
  "<code>/srv/project</code> katalogiga 1775 ruxsatini o'rnating.",
  "chmod 1775 /srv/project",
  "`chmod 1775 /srv/project` buyrug'ini bering.",
  ["CHMOD", "1775", "MODEL_ANSWER"],
  ["chmod 1775 /srv/project", "sudo chmod 1775 /srv/project"],
  4, "4-Qavat • O'rta", "S02 Case Study 3 • Model Answer");

addQ(50, "Tmp Katalogi Sticky Bitini Tekshirish",
  "Linuxdagi klassik /tmp katalogi har doim Sticky Bit (1777 / rwxrwxrwt) rejimida ishlaydi.",
  "<code>/tmp</code> katalogining ruxsatlarini (<code>ls -ld /tmp</code>) ko'ring.",
  "ls -ld /tmp",
  "`ls -ld /tmp` buyrug'ini bering.",
  ["LS", "TMP", "STICKY"],
  ["ls -ld /tmp"],
  4, "4-Qavat • Oson", "S02 Seminar • /tmp Sticky");

addQ(51, "Tmp Katalogiga 1777 Ruxsatini Berish",
  "Agar /tmp katalogida sticky bit buzilsa, tizim xavfsizligi keskin pasayadi.",
  "<code>/tmp</code> katalogiga 1777 ruxsatini o'rnating.",
  "chmod 1777 /tmp",
  "`chmod 1777 /tmp` buyrug'ini kiriting.",
  ["CHMOD", "1777", "TMP_SECURITY"],
  ["chmod 1777 /tmp", "sudo chmod 1777 /tmp"],
  4, "4-Qavat • Oson", "S02 Seminar • /tmp 1777");

addQ(52, "Sticky Bitni Olib Tashlash (-t)",
  "Agar maxsus test uchun sticky bitni o'chirish talab etilsa <code>-t</code> ishlatiladi.",
  "<code>/srv/project</code> katalogidan sticky bitni olib tashlang (<code>-t</code>).",
  "chmod -t /srv/project",
  "`chmod -t /srv/project` buyrug'ini bering.",
  ["CHMOD", "REMOVE_STICKY", "FLAGS"],
  ["chmod -t /srv/project", "sudo chmod -t /srv/project"],
  4, "4-Qavat • Oson", "S02 Seminar • Unset Sticky");

addQ(53, "Oktal 0777 Bilan Sticky Bitni Bekor Qilish",
  "Oktal formatda birinchi raqamni 0 qo'yish sticky bitni o'chiradi (0777).",
  "<code>/srv/project</code> katalogiga 0777 ruxsatini bering.",
  "chmod 0777 /srv/project",
  "`chmod 0777 /srv/project` buyrug'ini kiriting.",
  ["CHMOD", "0777", "OCTAL"],
  ["chmod 0777 /srv/project", "sudo chmod 0777 /srv/project"],
  4, "4-Qavat • Oson", "S02 Seminar • Unset Sticky");

addQ(54, "Qayta 1775 Xavfsiz Rejimiga Tiklash",
  "Loyiha xavfsizligini ta'minlash uchun katalogni qaytadan 1775 rejimiga o'tkazing.",
  "<code>/srv/project</code> katalogiga 1775 ruxsatini bering.",
  "chmod 1775 /srv/project",
  "`chmod 1775 /srv/project` buyrug'ini bering.",
  ["CHMOD", "1775", "SECURITY"],
  ["chmod 1775 /srv/project", "sudo chmod 1775 /srv/project"],
  4, "4-Qavat • Oson", "S02 Case Study 3 • Fix");

addQ(55, "Loyiha Fayllari Tarkibini Ko'rish",
  "Jamoa <code>/srv/project</code> ichida qanday fayllar ustida ishlayotganini tekshiring.",
  "<code>ls -la /srv/project</code> buyrug'i orqali barcha fayllarni ko'ring.",
  "ls -la /srv/project",
  "`ls -la /srv/project` buyrug'ini bering.",
  ["LS", "PROJECT", "FILES"],
  ["ls -la /srv/project"],
  4, "4-Qavat • Oson", "S02 Case Study 3 • Files");

addQ(56, "Loyiha README Hujjatini O'qish",
  "Jamoa qoidalari yozilgan <code>/srv/project/README.md</code> hujjatini o'qing.",
  "<code>cat /srv/project/README.md</code> buyrug'ini bering.",
  "cat /srv/project/README.md",
  "`cat /srv/project/README.md` buyrug'ini kiriting.",
  ["CAT", "README", "DOCS"],
  ["cat /srv/project/README.md"],
  4, "4-Qavat • Oson", "S02 Case Study 3 • Readme");

addQ(57, "Loyiha Konfiguratsiya Faylini O'qish",
  "Alice tomonidan tayyorlangan <code>/srv/project/app_config.json</code> sozlamalarini ko'ring.",
  "<code>cat /srv/project/app_config.json</code> buyrug'ini bering.",
  "cat /srv/project/app_config.json",
  "`cat /srv/project/app_config.json` buyrug'ini yozing.",
  ["CAT", "JSON", "CONFIG"],
  ["cat /srv/project/app_config.json"],
  4, "4-Qavat • Oson", "S02 Case Study 3 • Config");

addQ(58, "Loyiha CI/CD Pipeline Skriptini Ko'rish",
  "Jamoaviy <code>/srv/project/pipeline.sh</code> avtomatlashtirish skriptini tekshiring.",
  "<code>cat /srv/project/pipeline.sh</code> buyrug'ini bering.",
  "cat /srv/project/pipeline.sh",
  "`cat /srv/project/pipeline.sh` buyrug'ini kiriting.",
  ["CAT", "BASH", "PIPELINE"],
  ["cat /srv/project/pipeline.sh"],
  4, "4-Qavat • Oson", "S02 Case Study 3 • Pipeline");

addQ(59, "Faqat Bitta Fayl Egaligini O'zgartirish",
  "<code>scores.csv</code> faylining egasini <code>alice</code> ga o'zgartiring.",
  "<code>chown alice scores.csv</code> buyrug'ini bering.",
  "chown alice scores.csv",
  "`chown alice scores.csv` buyrug'ini yozing.",
  ["CHOWN", "USER_ONLY", "FILES"],
  ["chown alice scores.csv", "sudo chown alice scores.csv"],
  4, "4-Qavat • Oson", "S02 Seminar • chown");

addQ(60, "Fayl Egasi Va Guruhini Qaytarish",
  "<code>scores.csv</code> faylining egasini va guruhini yana <code>student:student</code> ga qaytaring.",
  "<code>chown student:student scores.csv</code> buyrug'ini bering.",
  "chown student:student scores.csv",
  "`chown student:student scores.csv` buyrug'ini bering.",
  ["CHOWN", "RESTORE", "GROUPS"],
  ["chown student:student scores.csv", "sudo chown student:student scores.csv"],
  4, "4-Qavat • Oson", "S02 Seminar • chown");

// ----------------------------------------------------------------------------
// SECTOR 5 (61 - 75): Umask & Standart Xavfsizlik Maskalari
// ----------------------------------------------------------------------------
addQ(61, "Joriy Umask Qiymatini Ko'rish",
  "Yangi yaratiladigan fayl va kataloglar qanday standart ruxsat olishini bilish uchun joriy umaskni ko'ring.",
  "Argumentlarsiz <code>umask</code> buyrug'ini bering.",
  "umask",
  "`umask` buyrug'ini bering.",
  ["UMASK", "DEFAULT_MASK", "SECURITY"],
  ["umask", "/usr/bin/umask"],
  5, "5-Qavat • Oson", "S02 Seminar • umask");

addQ(62, "Umaskni Ramziy Formatda Ko'rish (-S)",
  "Raqamlardan ko'ra ramziy (u=rwx,g=rx,o=rx) shaklda ko'rish osonroq tushuniladi.",
  "<code>umask -S</code> buyrug'ini bering.",
  "umask -S",
  "`umask -S` buyrug'ini kiriting.",
  ["UMASK", "SYMBOLIC", "FLAGS"],
  ["umask -S"],
  5, "5-Qavat • Oson", "S02 Seminar • umask -S");

addQ(63, "Standart 022 Umaskini O'rnatish",
  "Umask 022 bo'lganda yangi fayllar 644 (rw-r--r--), yangi kataloglar esa 755 (rwxr-xr-x) ruxsat oladi.",
  "<code>umask 022</code> buyrug'ini bering.",
  "umask 022",
  "`umask 022` buyrug'ini bering.",
  ["UMASK", "022", "STANDARD"],
  ["umask 022"],
  5, "5-Qavat • Oson", "S02 Seminar • umask 022");

addQ(64, "Jamoaviy 002 Umaskini O'rnatish",
  "Seminar 2 Case Study 3: Yangi fayllar 664 (rw-rw-r--) va yangi papkalar 775 (rwxrwxr-x) bo'lishi uchun.",
  "<code>umask 002</code> buyrug'ini o'rnating.",
  "umask 002",
  "`umask 002` buyrug'ini bering.",
  ["UMASK", "002", "CASE_STUDY_3"],
  ["umask 002"],
  5, "5-Qavat • Oson", "S02 Case Study 3 • umask 002");

addQ(65, "Qat'iy Xavfsiz 027 Umaskini O'rnatish",
  "Egasiga to'liq, guruhga o'qish/ijro, begonalarga (others) umuman ruxsat berilmaydi (fayllar 640, papkalar 750).",
  "<code>umask 027</code> buyrug'ini bering.",
  "umask 027",
  "`umask 027` buyrug'ini yozing.",
  ["UMASK", "027", "HARDENED"],
  ["umask 027"],
  5, "5-Qavat • O'rta", "S02 Seminar • umask 027");

addQ(66, "Maksimal Maxfiy 077 Umaskini O'rnatish",
  "Faqat va faqat egasining o'zi kira oladigan rejim (yangi fayllar 600, yangi papkalar 700).",
  "<code>umask 077</code> buyrug'ini bering.",
  "umask 077",
  "`umask 077` buyrug'ini kiriting.",
  ["UMASK", "077", "PRIVATE"],
  ["umask 077"],
  5, "5-Qavat • O'rta", "S02 Seminar • umask 077");

addQ(67, "Umask Ta'sirini Yangi Faylda Sinash",
  "Umask 022 holatida yangi ochilgan fayl 644 ruxsatini oladi.",
  "<code>touch test_umask.txt</code> buyrug'i orqali test fayl oching.",
  "touch test_umask.txt",
  "`touch test_umask.txt` buyrug'ini bering.",
  ["TOUCH", "TEST", "UMASK"],
  ["touch test_umask.txt"],
  5, "5-Qavat • Oson", "S02 Seminar • Test File");

addQ(68, "Test Fayl Ruxsatini Tekshirish",
  "Yangi ochilgan <code>test_umask.txt</code> faylining ruxsatlarini ko'ring.",
  "<code>ls -l test_umask.txt</code> buyrug'ini bering.",
  "ls -l test_umask.txt",
  "`ls -l test_umask.txt` buyrug'ini bering.",
  ["LS", "TEST", "VERIFY"],
  ["ls -l test_umask.txt"],
  5, "5-Qavat • Oson", "S02 Seminar • Verify Umask");

addQ(69, "Umask Ta'sirini Yangi Papkada Sinash",
  "Umask 022 holatida yangi ochilgan katalog 755 ruxsatini oladi.",
  "<code>mkdir test_dir</code> buyrug'i orqali yangi katalog oching.",
  "mkdir test_dir",
  "`mkdir test_dir` buyrug'ini kiriting.",
  ["MKDIR", "TEST", "UMASK"],
  ["mkdir test_dir"],
  5, "5-Qavat • Oson", "S02 Seminar • Test Dir");

addQ(70, "Test Papka Ruxsatini Tekshirish (ls -ld)",
  "Yangi ochilgan <code>test_dir</code> katalogining ruxsatlarini ko'ring.",
  "<code>ls -ld test_dir</code> buyrug'ini bering.",
  "ls -ld test_dir",
  "`ls -ld test_dir` buyrug'ini yozing.",
  ["LS", "DIR", "VERIFY"],
  ["ls -ld test_dir"],
  5, "5-Qavat • Oson", "S02 Seminar • Verify Dir");

addQ(71, "Test Faylni Tozalash (O'chirish)",
  "Test yakunlangach, ortiqcha faylni tizimdan o'chiring.",
  "<code>rm test_umask.txt</code> buyrug'ini bering.",
  "rm test_umask.txt",
  "`rm test_umask.txt` buyrug'ini kiriting.",
  ["RM", "CLEANUP", "TEST"],
  ["rm test_umask.txt"],
  5, "5-Qavat • Oson", "S02 Seminar • Cleanup");

addQ(72, "Test Papkani O'chirish",
  "Test uchun ochilgan bo'sh katalogni <code>rmdir</code> orqali tozalang.",
  "<code>rmdir test_dir</code> buyrug'ini bering.",
  "rmdir test_dir",
  "`rmdir test_dir` buyrug'ini yozing.",
  ["RMDIR", "CLEANUP", "TEST"],
  ["rmdir test_dir"],
  5, "5-Qavat • Oson", "S02 Seminar • Cleanup");

addQ(73, "Umaskni Yana Standart 022 ga Qaytarish",
  "Kelgusi ishlar to'g'ri ishlashi uchun umaskni standart 022 ga qaytaring.",
  "<code>umask 022</code> buyrug'ini bering.",
  "umask 022",
  "`umask 022` buyrug'ini kiriting.",
  ["UMASK", "022", "RESET"],
  ["umask 022"],
  5, "5-Qavat • Oson", "S02 Seminar • Reset Umask");

addQ(74, "Standart Umask Qiymatini Qayta Tekshirish",
  "Umask 0022 ekanligini yana bir bor tekshiring.",
  "<code>umask</code> buyrug'ini bering.",
  "umask",
  "`umask` buyrug'ini bering.",
  ["UMASK", "CHECK", "STATUS"],
  ["umask"],
  5, "5-Qavat • Oson", "S02 Seminar • Check Umask");

addQ(75, "Umask Matematikasi Tushunchasi",
  "Fayllar uchun bazaviy 666 dan umask 022 ayirilsa 644 hosil bo'ladi. Hozirgi katalogni tekshiring.",
  "<code>pwd</code> buyrug'ini bering.",
  "pwd",
  "`pwd` buyrug'ini bering.",
  ["PWD", "MATH", "CHECK"],
  ["pwd"],
  5, "5-Qavat • Oson", "S02 Seminar • Math");

// ----------------------------------------------------------------------------
// SECTOR 6 (76 - 90): Oqimlar, Xatoliklar & Redirection
// ----------------------------------------------------------------------------
addQ(76, "Chiqishni Yangi Faylga Yozish (>)",
  "Seminar 2 talabi: Buyruq natijasini faylga yangitdan yozish (mavjud bo'lsa ustidan yozish).",
  "<code>ls -l</code> chiqishini <code>~/files.list</code> fayliga yo'naltiring.",
  "ls -l > ~/files.list",
  "`ls -l > ~/files.list` buyrug'ini bering.",
  ["REDIRECTION", "WRITE", "STDOUT"],
  ["ls -l > ~/files.list", "ls -l > /home/student/files.list"],
  6, "6-Qavat • Oson", "S02 Seminar • Redirection >");

addQ(77, "Chiqishni Mavjud Faylga Qo'shish (>>)",
  "Fayl ichidagi mavjud ma'lumotlarni o'chirmasdan pastiga qo'shish.",
  "<code>date</code> yoki matnni <code>echo \"End of list\" >> ~/files.list</code> orqali fayl oxiriga qo'shing.",
  "echo \"End of list\" >> ~/files.list",
  "`echo \"End of list\" >> ~/files.list` buyrug'ini bering.",
  ["REDIRECTION", "APPEND", "STDOUT"],
  ["echo \"End of list\" >> ~/files.list", "echo 'End of list' >> ~/files.list"],
  6, "6-Qavat • Oson", "S02 Seminar • Append >>");

addQ(78, "Hosil Bo'lgan Faylni Tekshirish",
  "Yo'naltirilgan ma'lumotlarni tekshirish uchun faylni o'qing.",
  "<code>cat ~/files.list</code> buyrug'ini bering.",
  "cat ~/files.list",
  "`cat ~/files.list` buyrug'ini bering.",
  ["CAT", "READ", "VERIFY"],
  ["cat ~/files.list", "cat /home/student/files.list"],
  6, "6-Qavat • Oson", "S02 Seminar • Cat list");

addQ(79, "Xatoliklar Oqimini Faylga Yo'naltirish (2>)",
  "Buyruq xatolik bersa (stderr), xatolik matnini alohida <code>errors.txt</code> fayliga yozish kerak.",
  "Mavjud bo'lmagan faylni o'qishda xatolikni yo'naltiring: <code>cat non_existing.txt 2> errors.txt</code>.",
  "cat non_existing.txt 2> errors.txt",
  "`cat non_existing.txt 2> errors.txt` buyrug'ini bering.",
  ["STDERR", "2>", "ERRORS"],
  ["cat non_existing.txt 2> errors.txt"],
  6, "6-Qavat • O'rta", "S02 Seminar • 2> Redirect");

addQ(80, "Xatoliklar Faylini Tekshirish",
  "Yozilgan xatolik xabarini ko'rish uchun <code>cat errors.txt</code> buyrug'ini bering.",
  "<code>cat errors.txt</code> buyrug'ini bering.",
  "cat errors.txt",
  "`cat errors.txt` buyrug'ini bering.",
  ["CAT", "ERRORS", "LOGS"],
  ["cat errors.txt"],
  6, "6-Qavat • Oson", "S02 Seminar • Check errors");

addQ(81, "Xatoliklarni Qora Tuynukka Tashlash (2> /dev/null)",
  "Tizim adminlari ortiqcha xatoliklar ekranga chiqib chalg'itmasligi uchun uni <code>/dev/null</code> ga yo'naltiradi.",
  "<code>cat /var/log/syslog 2> /dev/null</code> buyrug'ini bering.",
  "cat /var/log/syslog 2> /dev/null",
  "`cat /var/log/syslog 2> /dev/null` buyrug'ini bering.",
  ["DEV_NULL", "SILENT", "STDERR"],
  ["cat /var/log/syslog 2> /dev/null"],
  6, "6-Qavat • O'rta", "S02 Seminar • 2> /dev/null");

addQ(82, "Bir Vaqtda Ham Chiqish, Ham Xatolikni Yo'naltirish",
  "Seminar 2 namunasi: stdout ni bir faylga, xatolikni esa <code>/dev/null</code> ga ajratish.",
  "<code>cat /var/log/syslog 2> /dev/null > ~/log.txt</code> buyrug'ini bering.",
  "cat /var/log/syslog 2> /dev/null > ~/log.txt",
  "`cat /var/log/syslog 2> /dev/null > ~/log.txt` buyrug'ini bering.",
  ["STDOUT", "STDERR", "DUAL_ROUTING"],
  ["cat /var/log/syslog 2> /dev/null > ~/log.txt", "cat /var/log/syslog > ~/log.txt 2> /dev/null"],
  6, "6-Qavat • O'rta", "S02 Seminar • Dual Redirection");

addQ(83, "Ikkala Oqimni Bitta Faylga Birlashtirish (&>)",
  "Zamonaviy Bash sintaksisi: ham stdout, ham stderr ni bitta <code>output.log</code> ga yozish.",
  "<code>ls -la &> output.log</code> buyrug'ini bering.",
  "ls -la &> output.log",
  "`ls -la &> output.log` buyrug'ini bering.",
  ["MERGE", "&>", "COMBINED"],
  ["ls -la &> output.log"],
  6, "6-Qavat • O'rta", "S02 Seminar • &> Operator");

addQ(84, "Klassik 2>&1 Sintaksisi",
  "Seminar 2 talabi: <code>2>&1</code> orqali 2-oqimni 1-oqimga qo'shib yuborish.",
  "<code>cat /etc/passwd > all.log 2>&1</code> buyrug'ini bering.",
  "cat /etc/passwd > all.log 2>&1",
  "`cat /etc/passwd > all.log 2>&1` buyrug'ini bering.",
  ["2>&1", "POSIX", "MERGE"],
  ["cat /etc/passwd > all.log 2>&1"],
  6, "6-Qavat • O'rta", "S02 Seminar • 2>&1");

addQ(85, "Pipeline Bilan Bog'lash (cmd1 | cmd2)",
  "Birinchi buyruqning chiqishini ikkinchi buyruqqa kirish qilib uzatish.",
  "<code>cat /etc/passwd | wc -l</code> buyrug'i orqali foydalanuvchilar sonini hisoblang.",
  "cat /etc/passwd | wc -l",
  "`cat /etc/passwd | wc -l` buyrug'ini bering.",
  ["PIPE", "WC", "STREAM"],
  ["cat /etc/passwd | wc -l"],
  6, "6-Qavat • Oson", "S02 Seminar • Pipeline");

addQ(86, "Grep Bilan Pipeline: Faqat Bash Foydalanuvchilarini Sanash",
  "<code>/etc/passwd</code> faylidan bash ishlatuvchilarni topib sanash.",
  "<code>grep \"bash\" /etc/passwd | wc -l</code> buyrug'ini bering.",
  "grep \"bash\" /etc/passwd | wc -l",
  "`grep \"bash\" /etc/passwd | wc -l` buyrug'ini bering.",
  ["PIPE", "GREP", "COUNT"],
  ["grep \"bash\" /etc/passwd | wc -l", "grep bash /etc/passwd | wc -l"],
  6, "6-Qavat • O'rta", "S02 Seminar • Grep Pipe");

addQ(87, "Pipeline Natijasini Faylga Saqlash",
  "Filtrlangan natijani to'g'ridan-to'g'ri faylga yo'naltirish.",
  "<code>grep \"bash\" /etc/passwd > bash_users.txt</code> buyrug'ini bering.",
  "grep \"bash\" /etc/passwd > bash_users.txt",
  "`grep \"bash\" /etc/passwd > bash_users.txt` buyrug'ini bering.",
  ["GREP", "SAVE", "BASH_USERS"],
  ["grep \"bash\" /etc/passwd > bash_users.txt", "grep bash /etc/passwd > bash_users.txt"],
  6, "6-Qavat • Oson", "S02 Seminar • Save Filtered");

addQ(88, "Yozilgan Faylni Tekshirish",
  "Saqlangan <code>bash_users.txt</code> faylini ko'ring.",
  "<code>cat bash_users.txt</code> buyrug'ini bering.",
  "cat bash_users.txt",
  "`cat bash_users.txt` buyrug'ini bering.",
  ["CAT", "CHECK", "VERIFY"],
  ["cat bash_users.txt"],
  6, "6-Qavat • Oson", "S02 Seminar • Verify");

addQ(89, "Xatoliklarni Append Qilish (2>>)",
  "Mavjud xatoliklar jurnaliga yangi xatolarni qo'shib borish.",
  "<code>cat missing.txt 2>> errors.txt</code> buyrug'ini bering.",
  "cat missing.txt 2>> errors.txt",
  "`cat missing.txt 2>> errors.txt` buyrug'ini bering.",
  ["2>>", "APPEND_ERROR", "LOGGING"],
  ["cat missing.txt 2>> errors.txt"],
  6, "6-Qavat • Oson", "S02 Seminar • 2>> Append");

addQ(90, "Vaqtinchalik Test Fayllarni Tozalash",
  "Oqimlar bo'limida yaratilgan test fayllarini o'chiring.",
  "<code>rm -f errors.txt all.log output.log bash_users.txt</code> buyrug'ini bering.",
  "rm -f errors.txt all.log output.log bash_users.txt",
  "`rm -f errors.txt all.log output.log bash_users.txt` buyrug'ini bering.",
  ["RM", "CLEANUP", "WORKSPACE"],
  ["rm -f errors.txt all.log output.log bash_users.txt", "rm errors.txt all.log output.log bash_users.txt"],
  6, "6-Qavat • Oson", "S02 Seminar • Clean Streams");

// ----------------------------------------------------------------------------
// SECTOR 7 (91 - 105): Matn Filtrlash & Saralash (sort, uniq, cut)
// ----------------------------------------------------------------------------
addQ(91, "Matn Faylini Alifbo Bo'yicha Saralash",
  "Fayldagi satrlarni oddiy alifbo tartibida saralash.",
  "<code>sort scores.csv</code> buyrug'ini bering.",
  "sort scores.csv",
  "`sort scores.csv` buyrug'ini bering.",
  ["SORT", "ALPHABETICAL", "TEXT"],
  ["sort scores.csv"],
  7, "7-Qavat • Oson", "S02 Seminar • sort");

addQ(92, "Matnni Teskari Saralash (-r)",
  "Satrlarni Z dan A gacha (kamayish tartibida) joylashtirish.",
  "<code>sort -r scores.csv</code> buyrug'ini bering.",
  "sort -r scores.csv",
  "`sort -r scores.csv` buyrug'ini bering.",
  ["SORT", "REVERSE", "TEXT"],
  ["sort -r scores.csv"],
  7, "7-Qavat • Oson", "S02 Seminar • sort -r");

addQ(93, "Takroriy Satrlarni Bittalab Qoldirish (uniq)",
  "Takrorlanuvchi satrlardan faqat bittadan nusxa qoldirish. Eslatma: uniq saralangan matn bilan ishlaydi.",
  "<code>sort scores.csv | uniq</code> buyrug'ini bering.",
  "sort scores.csv | uniq",
  "`sort scores.csv | uniq` buyrug'ini bering.",
  ["UNIQ", "SORT", "DEDUPLICATE"],
  ["sort scores.csv | uniq"],
  7, "7-Qavat • Oson", "S02 Seminar • uniq");

addQ(94, "Takrorlanishlar Soni Bilan Chiqarish (uniq -c)",
  "Har bir satr necha marta uchraganini hisoblash.",
  "<code>sort scores.csv | uniq -c</code> buyrug'ini bering.",
  "sort scores.csv | uniq -c",
  "`sort scores.csv | uniq -c` buyrug'ini bering.",
  ["UNIQ", "COUNT", "METRICS"],
  ["sort scores.csv | uniq -c"],
  7, "7-Qavat • Oson", "S02 Seminar • uniq -c");

addQ(95, "Faqat Takrorlanmagan (Unique) Satrlarni Ko'rish (uniq -u)",
  "Faqat 1 marta uchragan nodir satrlarni ajratib olish.",
  "<code>sort scores.csv | uniq -u</code> buyrug'ini bering.",
  "sort scores.csv | uniq -u",
  "`sort scores.csv | uniq -u` buyrug'ini bering.",
  ["UNIQ", "UNIQUE_ONLY", "AUDIT"],
  ["sort scores.csv | uniq -u"],
  7, "7-Qavat • Oson", "S02 Seminar • uniq -u");

addQ(96, "Faqat Dublikat Satrlarni Ko'rish (uniq -d)",
  "Kamida 2 marta uchragan takroriy satrlarni topish.",
  "<code>sort scores.csv | uniq -d</code> buyrug'ini bering.",
  "sort scores.csv | uniq -d",
  "`sort scores.csv | uniq -d` buyrug'ini bering.",
  ["UNIQ", "DUPLICATES", "AUDIT"],
  ["sort scores.csv | uniq -d"],
  7, "7-Qavat • Oson", "S02 Seminar • uniq -d");

addQ(97, "Cut Bilan 1-Ustunni Ajratish (cut -d: -f1)",
  "Seminar 2 namunasi: <code>/etc/passwd</code> faylidan faqat foydalanuvchi nomlarini (1-ustun) kesib olish.",
  "<code>cut -d: -f1 /etc/passwd</code> buyrug'ini bering.",
  "cut -d: -f1 /etc/passwd",
  "`cut -d: -f1 /etc/passwd` buyrug'ini bering.",
  ["CUT", "DELIMITER", "PASSWD"],
  ["cut -d: -f1 /etc/passwd", "cut -d':' -f1 /etc/passwd"],
  7, "7-Qavat • Oson", "S02 Seminar • cut -d: -f1");

addQ(98, "Foydalanuvchi Nomi Va Shellini Ajratish (-f1,7)",
  "Seminar 2 namunasi: 1-ustun (username) va 7-ustun (shell) ni ajratish.",
  "<code>cut -d: -f1,7 /etc/passwd</code> buyrug'ini bering.",
  "cut -d: -f1,7 /etc/passwd",
  "`cut -d: -f1,7 /etc/passwd` buyrug'ini bering.",
  ["CUT", "FIELDS", "PASSWD"],
  ["cut -d: -f1,7 /etc/passwd", "cut -d':' -f1,7 /etc/passwd"],
  7, "7-Qavat • O'rta", "S02 Seminar • cut fields");

addQ(99, "CSV Fayldan Talabalar Ismlarini Kesib Olish",
  "<code>scores.csv</code> vergul bilan ajratilgan faylidan 1-ustunni (talaba ismini) oling.",
  "<code>cut -d, -f1 scores.csv</code> buyrug'ini bering.",
  "cut -d, -f1 scores.csv",
  "`cut -d, -f1 scores.csv` buyrug'ini bering.",
  ["CUT", "CSV", "NAMES"],
  ["cut -d, -f1 scores.csv", "cut -d',' -f1 scores.csv"],
  7, "7-Qavat • Oson", "S02 Seminar • CSV Cut");

addQ(100, "CSV Fayldan Fanlar Ro'yxatini Olish (-f3)",
  "<code>scores.csv</code> faylidan 3-ustunni (fan nomini) kesib oling.",
  "<code>cut -d, -f3 scores.csv</code> buyrug'ini bering.",
  "cut -d, -f3 scores.csv",
  "`cut -d, -f3 scores.csv` buyrug'ini bering.",
  ["CUT", "CSV", "SUBJECTS"],
  ["cut -d, -f3 scores.csv", "cut -d',' -f3 scores.csv"],
  7, "7-Qavat • Oson", "S02 Seminar • CSV Cut 3");

addQ(101, "Fanlar Bo'yicha Saralash Va Takrorlarni O'chirish",
  "Barcha fanlarni alifbo bo'yicha tartiblab, takrorlanuvchi nomlarni bittadan qoldiring.",
  "<code>cut -d, -f3 scores.csv | sort | uniq</code> buyrug'ini bering.",
  "cut -d, -f3 scores.csv | sort | uniq",
  "`cut -d, -f3 scores.csv | sort | uniq` buyrug'ini bering.",
  ["CUT", "SORT", "UNIQ"],
  ["cut -d, -f3 scores.csv | sort | uniq", "cut -d',' -f3 scores.csv | sort | uniq"],
  7, "7-Qavat • O'rta", "S02 Seminar • Pipeline Combo");

addQ(102, "Har Bir Fanda Nechta Talaba O'qishini Sanash",
  "Fanlar takrorlanishlar sonini hisoblash (<code>uniq -c</code>).",
  "<code>cut -d, -f3 scores.csv | sort | uniq -c</code> buyrug'ini bering.",
  "cut -d, -f3 scores.csv | sort | uniq -c",
  "`cut -d, -f3 scores.csv | sort | uniq -c` buyrug'ini bering.",
  ["UNIQ_COUNT", "STATS", "PIPELINE"],
  ["cut -d, -f3 scores.csv | sort | uniq -c", "cut -d',' -f3 scores.csv | sort | uniq -c"],
  7, "7-Qavat • O'rta", "S02 Seminar • Subject Count");

addQ(103, "Satrning Dastlabki 10 Ta Belgi Kesib Olish (-c1-10)",
  "Belgilar bo'yicha kesish (masalan sana yoki boshlang'ich identifikator).",
  "<code>cut -c1-10 scores.csv</code> buyrug'ini bering.",
  "cut -c1-10 scores.csv",
  "`cut -c1-10 scores.csv` buyrug'ini bering.",
  ["CUT", "CHARS", "SLICING"],
  ["cut -c1-10 scores.csv"],
  7, "7-Qavat • Oson", "S02 Seminar • Character Cut");

addQ(104, "Protsesslar Ro'yxatini Saralash (Simulyatsiya)",
  "Tizim foydalanuvchilarini alifbo tartibida tartiblab birinchi 3 tasini ko'rish.",
  "<code>cut -d: -f1 /etc/passwd | sort | head -n 3</code> buyrug'ini bering.",
  "cut -d: -f1 /etc/passwd | sort | head -n 3",
  "`cut -d: -f1 /etc/passwd | sort | head -n 3` buyrug'ini bering.",
  ["CUT", "SORT", "HEAD"],
  ["cut -d: -f1 /etc/passwd | sort | head -n 3", "cut -d: -f1 /etc/passwd | sort | head -3"],
  7, "7-Qavat • O'rta", "S02 Seminar • Process Sort");

addQ(105, "Inventory Serverlarini Turiga Qarab Saralash",
  "<code>inventory.txt</code> faylidan serverlarni tartiblang.",
  "<code>sort inventory.txt</code> buyrug'ini bering.",
  "sort inventory.txt",
  "`sort inventory.txt` buyrug'ini bering.",
  ["SORT", "INVENTORY", "SERVERS"],
  ["sort inventory.txt"],
  7, "7-Qavat • Oson", "S02 Seminar • Inventory Sort");

// ----------------------------------------------------------------------------
// SECTOR 8 (106 - 120): Grep & RegEx Quvvati
// ----------------------------------------------------------------------------
addQ(106, "Apache Logida Shubhali IP Qidirish",
  "Seminar 2 Case Study 1: IP 83.149.9.216 ga tegishli barcha so'rovlarni topish.",
  "<code>grep \"83.149.9.216\" /var/log/apache_logs.txt</code> buyrug'ini bering.",
  "grep \"83.149.9.216\" /var/log/apache_logs.txt",
  "`grep \"83.149.9.216\" /var/log/apache_logs.txt` buyrug'ini bering.",
  ["GREP", "APACHE", "IP_SEARCH"],
  ["grep \"83.149.9.216\" /var/log/apache_logs.txt", "grep 83.149.9.216 /var/log/apache_logs.txt"],
  8, "8-Qavat • Oson", "S02 Case Study 1 • Task 1");

addQ(107, "Shubhali IP So'rovlari Soni (-c)",
  "Seminar 2 Case Study 1: Ushbu IP qancha so'rov yuborganligini sanash.",
  "<code>grep -c \"83.149.9.216\" /var/log/apache_logs.txt</code> buyrug'ini bering.",
  "grep -c \"83.149.9.216\" /var/log/apache_logs.txt",
  "`grep -c \"83.149.9.216\" /var/log/apache_logs.txt` buyrug'ini bering.",
  ["GREP", "COUNT", "APACHE"],
  ["grep -c \"83.149.9.216\" /var/log/apache_logs.txt", "grep -c 83.149.9.216 /var/log/apache_logs.txt"],
  8, "8-Qavat • Oson", "S02 Case Study 1 • Task 2");

addQ(108, "Muayyan IP dan Faqat POST So'rovlarni Qidirish",
  "Seminar 2 Case Study 1: IP 78.173.140.106 tomonidan yuborilgan POST so'rovlarni topish.",
  "<code>grep \"78.173.140.106.*POST\" /var/log/apache_logs.txt</code> buyrug'ini bering.",
  "grep \"78.173.140.106.*POST\" /var/log/apache_logs.txt",
  "`grep \"78.173.140.106.*POST\" /var/log/apache_logs.txt` buyrug'ini bering.",
  ["GREP", "REGEX", "POST"],
  ["grep \"78.173.140.106.*POST\" /var/log/apache_logs.txt"],
  8, "8-Qavat • O'rta", "S02 Case Study 1 • Task 3");

addQ(109, "Server 500 Xatoliklari Atrofidagi Kontekst (-B 2 -A 2)",
  "Seminar 2 Case Study 1: Har bir HTTP 500 xatosidan oldingi va keyingi 2 satrni ko'rish.",
  "<code>grep -B 2 -A 2 \" 500 \" /var/log/apache_logs.txt</code> buyrug'ini bering.",
  "grep -B 2 -A 2 \" 500 \" /var/log/apache_logs.txt",
  "`grep -B 2 -A 2 \" 500 \" /var/log/apache_logs.txt` buyrug'ini bering.",
  ["GREP", "CONTEXT", "HTTP_500"],
  ["grep -B 2 -A 2 \" 500 \" /var/log/apache_logs.txt", "grep -C 2 \" 500 \" /var/log/apache_logs.txt"],
  8, "8-Qavat • O'rta", "S02 Case Study 1 • Task 4");

addQ(110, "PHP Fayllariga So'rovlarni Topish (Regex)",
  "Seminar 2 Case Study 1: .php fayllariga bo'lgan so'rovlarni topish.",
  "<code>grep -E \"\\.php\" /var/log/apache_logs.txt</code> buyrug'ini bering.",
  "grep -E \"\\.php\" /var/log/apache_logs.txt",
  "`grep -E \"\\.php\" /var/log/apache_logs.txt` buyrug'ini bering.",
  ["GREP", "EXTENDED", "PHP"],
  ["grep -E \"\\.php\" /var/log/apache_logs.txt", "grep \"\\.php\" /var/log/apache_logs.txt"],
  8, "8-Qavat • O'rta", "S02 Case Study 1 • Task 5");

addQ(111, "Rasm Fayllariga So'rovlarni Topish (png|jpg|gif)",
  "Seminar 2 Case Study 1: Rasmlarga (png, jpg, gif) yo'llangan so'rovlarni guruhli regex bilan topish.",
  "<code>grep -E \"\\.(png|jpg|gif)\" /var/log/apache_logs.txt</code> buyrug'ini bering.",
  "grep -E \"\\.(png|jpg|gif)\" /var/log/apache_logs.txt",
  "`grep -E \"\\.(png|jpg|gif)\" /var/log/apache_logs.txt` buyrug'ini bering.",
  ["GREP", "IMAGES", "REGEX_GROUP"],
  ["grep -E \"\\.(png|jpg|gif)\" /var/log/apache_logs.txt"],
  8, "8-Qavat • O'rta", "S02 Case Study 1 • Task 6");

addQ(112, "Soat 10:00 Va 10:59 Oralig'idagi So'rovlar",
  "Seminar 2 Case Study 1: Muayyan soatdagi loglarni topish.",
  "<code>grep \"17/May/2015:10:\" /var/log/apache_logs.txt</code> buyrug'ini bering.",
  "grep \"17/May/2015:10:\" /var/log/apache_logs.txt",
  "`grep \"17/May/2015:10:\" /var/log/apache_logs.txt` buyrug'ini bering.",
  ["GREP", "TIMESTAMP", "APACHE"],
  ["grep \"17/May/2015:10:\" /var/log/apache_logs.txt"],
  8, "8-Qavat • O'rta", "S02 Case Study 1 • Task 7");

addQ(113, "Faqat IP Manzillarni Ajratib Olish (grep -oE)",
  "Seminar 2 Case Study 1: Log satrlarining boshidan faqat IP manzillarni ajratish.",
  "<code>grep -oE \"^[0-9.]+\" /var/log/apache_logs.txt</code> buyrug'ini bering.",
  "grep -oE \"^[0-9.]+\" /var/log/apache_logs.txt",
  "`grep -oE \"^[0-9.]+\" /var/log/apache_logs.txt` buyrug'ini bering.",
  ["GREP", "-OE", "IP_EXTRACT"],
  ["grep -oE \"^[0-9.]+\" /var/log/apache_logs.txt"],
  8, "8-Qavat • Qiyin", "S02 Case Study 1 • Task 9");

addQ(114, "Noyob IP Manzillar Ro'yxati",
  "Ajratilgan IP larni saralab, faqat takrorlanmaganlarini ko'rsatish.",
  "<code>grep -oE \"^[0-9.]+\" /var/log/apache_logs.txt | sort | uniq</code> buyrug'ini bering.",
  "grep -oE \"^[0-9.]+\" /var/log/apache_logs.txt | sort | uniq",
  "`grep -oE \"^[0-9.]+\" /var/log/apache_logs.txt | sort | uniq` buyrug'ini bering.",
  ["GREP", "SORT", "UNIQ_IPS"],
  ["grep -oE \"^[0-9.]+\" /var/log/apache_logs.txt | sort | uniq"],
  8, "8-Qavat • Qiyin", "S02 Case Study 1 • Unique IPs");

addQ(115, "Eng Faol Top 5 IP Manzil (Case Study 1 Yakuni)",
  "Seminar 2 Case Study 1: Eng ko'p so'rov yuborgan 5 ta IP ni aniqlash.",
  "<code>grep -oE \"^[0-9.]+\" /var/log/apache_logs.txt | sort | uniq -c | sort -nr | head -5</code> buyrug'ini bering.",
  "grep -oE \"^[0-9.]+\" /var/log/apache_logs.txt | sort | uniq -c | sort -nr | head -5",
  "`grep -oE \"^[0-9.]+\" /var/log/apache_logs.txt | sort | uniq -c | sort -nr | head -5` buyrug'ini bering.",
  ["GREP", "TOP5", "FORENSICS"],
  ["grep -oE \"^[0-9.]+\" /var/log/apache_logs.txt | sort | uniq -c | sort -nr | head -5", "grep -oE \"^[0-9.]+\" /var/log/apache_logs.txt | sort | uniq -c | sort -nr | head -n 5"],
  8, "8-Qavat • Qiyin", "S02 Case Study 1 • Model Answer");

addQ(116, "Muvaffaqiyatsiz So'rovlarni Topish (grep -v 200)",
  "Seminar 2 Case Study 1: HTTP 200 kodiga ega bo'lmagan xatolik so'rovlarini topish.",
  "<code>grep -v \" 200 \" /var/log/apache_logs.txt</code> buyrug'ini bering.",
  "grep -v \" 200 \" /var/log/apache_logs.txt",
  "`grep -v \" 200 \" /var/log/apache_logs.txt` buyrug'ini bering.",
  ["GREP", "INVERT", "HTTP_NON200"],
  ["grep -v \" 200 \" /var/log/apache_logs.txt"],
  8, "8-Qavat • O'rta", "S02 Case Study 1 • Non-200");

addQ(117, "Katta-Kichik Harflarni Inkor Qilish (grep -i)",
  "CPU so'zini har qanday registrda qidirish.",
  "<code>grep -i \"cpu\" /var/log/syslog</code> buyrug'ini bering.",
  "grep -i \"cpu\" /var/log/syslog",
  "`grep -i \"cpu\" /var/log/syslog` buyrug'ini bering.",
  ["GREP", "CASE_INSENSITIVE", "SYS"],
  ["grep -i \"cpu\" /var/log/syslog", "grep -i cpu /var/log/syslog"],
  8, "8-Qavat • Oson", "S02 Seminar • grep -i");

addQ(118, "Satr Raqamlari Bilan Ko'rsatish (grep -n)",
  "Qaysi satrda xato borligini bilish uchun line numberlarni chiqarish.",
  "<code>grep -n \"student\" /etc/passwd</code> buyrug'ini bering.",
  "grep -n \"student\" /etc/passwd",
  "`grep -n \"student\" /etc/passwd` buyrug'ini bering.",
  ["GREP", "LINE_NUM", "PASSWD"],
  ["grep -n \"student\" /etc/passwd", "grep -n student /etc/passwd"],
  8, "8-Qavat • Oson", "S02 Seminar • grep -n");

addQ(119, "Faqat Fayl Nomlarini Ko'rsatish (grep -l)",
  "Katalog ichidagi qaysi fayllarda izlangan so'z borligini bilish.",
  "<code>grep -l \"root\" /var/log/*</code> buyrug'ini bering.",
  "grep -l \"root\" /var/log/*",
  "`grep -l \"root\" /var/log/*` buyrug'ini bering.",
  ["GREP", "FILES_WITH_MATCH", "LOGS"],
  ["grep -l \"root\" /var/log/*", "grep -l root /var/log/*"],
  8, "8-Qavat • O'rta", "S02 Seminar • grep -l");

addQ(120, "Satr Boshidan Qidirish (^)",
  "Aniq satr boshi bilan boshlanuvchi yozuvlarni topish.",
  "<code>grep \"^root:\" /etc/passwd</code> buyrug'ini bering.",
  "grep \"^root:\" /etc/passwd",
  "`grep \"^root:\" /etc/passwd` buyrug'ini bering.",
  ["GREP", "CARET", "REGEX_START"],
  ["grep \"^root:\" /etc/passwd"],
  8, "8-Qavat • Oson", "S02 Seminar • Regex ^");

// ----------------------------------------------------------------------------
// SECTOR 9 (121 - 135): Ilg'or Stream Tahrirlovchilar: Sed & Awk
// ----------------------------------------------------------------------------
addQ(121, "Sed Bilan So'zni O'zgartirish (s/old/new/)",
  "Seminar 2 ma'ruzasi: Sed orqali birinchi uchragan so'zni almashtirish.",
  "<code>scores.csv</code> faylidagi 'Math' so'zini 'Calculus' ga almashtirib ekranga chiqaring.",
  "sed 's/Math/Calculus/' scores.csv",
  "`sed 's/Math/Calculus/' scores.csv` buyrug'ini bering.",
  ["SED", "SUBSTITUTE", "STREAM"],
  ["sed 's/Math/Calculus/' scores.csv", "sed \"s/Math/Calculus/\" scores.csv"],
  9, "9-Qavat • Oson", "S02 Seminar • sed s///");

addQ(122, "Global Almashtirish (s/old/new/g)",
  "Satrdagi barcha takrorlangan so'zlarni global (<code>g</code>) almashtirish.",
  "<code>sed 's/Math/Calculus/g' scores.csv</code> buyrug'ini bering.",
  "sed 's/Math/Calculus/g' scores.csv",
  "`sed 's/Math/Calculus/g' scores.csv` buyrug'ini bering.",
  ["SED", "GLOBAL", "REPLACE"],
  ["sed 's/Math/Calculus/g' scores.csv", "sed \"s/Math/Calculus/g\" scores.csv"],
  9, "9-Qavat • Oson", "S02 Seminar • sed global");

addQ(123, "Sed Bilan Muayyan Satrni O'chirish (3d)",
  "Darslik namunasi: 3-satrni o'chirib qolganlarini ekranga chiqarish.",
  "<code>sed '3d' scores.csv</code> buyrug'ini bering.",
  "sed '3d' scores.csv",
  "`sed '3d' scores.csv` buyrug'ini bering.",
  ["SED", "DELETE_LINE", "3D"],
  ["sed '3d' scores.csv", "sed \"3d\" scores.csv"],
  9, "9-Qavat • O'rta", "S02 Seminar • sed 3d");

addQ(124, "Sed Bilan 1-Satrni O'chirish (Header Olib Tashlash)",
  "Sarlavha satrini o'chirish uchun <code>1d</code> buyrug'i qo'llaniladi.",
  "<code>sed '1d' scores.csv</code> buyrug'ini bering.",
  "sed '1d' scores.csv",
  "`sed '1d' scores.csv` buyrug'ini bering.",
  ["SED", "DELETE_HEADER", "1D"],
  ["sed '1d' scores.csv", "sed \"1d\" scores.csv"],
  9, "9-Qavat • O'rta", "S02 Seminar • sed 1d");

addQ(125, "Awk Bilan 1-Ustunni Chiqarish (awk '{print $1}')",
  "Seminar 2 namunasi: Matnning har bir satridan 1-maydonni (field) ajratib olish.",
  "<code>inventory.txt</code> faylidan faqat server nomlarini (<code>awk '{print $1}'</code>) chiqaring.",
  "awk '{print $1}' inventory.txt",
  "`awk '{print $1}' inventory.txt` buyrug'ini bering.",
  ["AWK", "PRINT_1", "COLUMNS"],
  ["awk '{print $1}' inventory.txt", "awk \"{print \\$1}\" inventory.txt"],
  9, "9-Qavat • Oson", "S02 Seminar • awk print $1");

addQ(126, "Awk Bilan 2-Ustunni (IP Manzilni) Olish",
  "<code>inventory.txt</code> faylidan server IP manzillarini (2-maydon) ajrating.",
  "<code>awk '{print $2}' inventory.txt</code> buyrug'ini bering.",
  "awk '{print $2}' inventory.txt",
  "`awk '{print $2}' inventory.txt` buyrug'ini bering.",
  ["AWK", "PRINT_2", "IPS"],
  ["awk '{print $2}' inventory.txt", "awk \"{print \\$2}\" inventory.txt"],
  9, "9-Qavat • Oson", "S02 Seminar • awk print $2");

addQ(127, "Awk Delimiter Bilan: /etc/passwd dan Foydalanuvchilarni Olish (-F:)",
  "Seminar 2 namunasi: Ikki nuqta (<code>:</code>) bilan ajratilgan fayldan 1-ustunni olish.",
  "<code>awk -F: '{print $1}' /etc/passwd</code> buyrug'ini bering.",
  "awk -F: '{print $1}' /etc/passwd",
  "`awk -F: '{print $1}' /etc/passwd` buyrug'ini bering.",
  ["AWK", "DELIMITER", "PASSWD"],
  ["awk -F: '{print $1}' /etc/passwd", "awk -F':' '{print $1}' /etc/passwd"],
  9, "9-Qavat • O'rta", "S02 Seminar • awk -F:");

addQ(128, "Foydalanuvchi Nomi Va Uy Katalogini Birga Chiqarish ($1, $6)",
  "Foydalanuvchi nomi va uning uy manzilini yonma-yon chiqarish.",
  "<code>awk -F: '{print $1, $6}' /etc/passwd</code> buyrug'ini bering.",
  "awk -F: '{print $1, $6}' /etc/passwd",
  "`awk -F: '{print $1, $6}' /etc/passwd` buyrug'ini bering.",
  ["AWK", "FIELDS_1_6", "USER_HOME"],
  ["awk -F: '{print $1, $6}' /etc/passwd", "awk -F':' '{print $1, $6}' /etc/passwd"],
  9, "9-Qavat • O'rta", "S02 Seminar • awk fields");

addQ(129, "Foydalanuvchi Nomi Va Shellni Chiqarish ($1, $7)",
  "Seminar 2 rasmiy namunasi: Username va login shellini ajratish.",
  "<code>awk -F: '{print $1, $7}' /etc/passwd</code> buyrug'ini bering.",
  "awk -F: '{print $1, $7}' /etc/passwd",
  "`awk -F: '{print $1, $7}' /etc/passwd` buyrug'ini bering.",
  ["AWK", "FIELDS_1_7", "USER_SHELL"],
  ["awk -F: '{print $1, $7}' /etc/passwd", "awk -F':' '{print $1, $7}' /etc/passwd"],
  9, "9-Qavat • O'rta", "S02 Seminar • awk fields 1,7");

addQ(130, "CSV Fayldan Ism Va Ballni Chiqarish (-F,)",
  "<code>scores.csv</code> faylidan vergul bilan ajratilgan 1- va 2-maydonlarni oling.",
  "<code>awk -F, '{print $1, $2}' scores.csv</code> buyrug'ini bering.",
  "awk -F, '{print $1, $2}' scores.csv",
  "`awk -F, '{print $1, $2}' scores.csv` buyrug'ini bering.",
  ["AWK", "CSV", "STUDENT_SCORES"],
  ["awk -F, '{print $1, $2}' scores.csv", "awk -F',' '{print $1, $2}' scores.csv"],
  9, "9-Qavat • Oson", "S02 Seminar • awk CSV");

addQ(131, "Awk Bilan Aniq 5-Satrni Ko'rish (NR==5)",
  "Seminar 2 namunasi: Faylning 5-satrini ekranga chiqarish.",
  "<code>awk 'NR==5' /etc/passwd</code> buyrug'ini bering.",
  "awk 'NR==5' /etc/passwd",
  "`awk 'NR==5' /etc/passwd` buyrug'ini bering.",
  ["AWK", "NR==5", "LINE_FILTER"],
  ["awk 'NR==5' /etc/passwd", "awk \"NR==5\" /etc/passwd"],
  9, "9-Qavat • O'rta", "S02 Seminar • awk NR==5");

addQ(132, "Vim Muharriridan Saqlab Chiqish (:wq)",
  "Linuxda Vim ochilganda matnni saqlab chiqish buyrug'i qanday?",
  "Ekranga <code>echo \":wq\"</code> chiqarib o'z bilimingizni tasdiqlang.",
  "echo \":wq\"",
  "`echo \":wq\"` buyrug'ini bering.",
  ["VIM", "EXIT", "WRITE_QUIT"],
  ["echo \":wq\"", "echo :wq"],
  9, "9-Qavat • Oson", "S02 Seminar • Vim :wq");

addQ(133, "Vim Muharriridan Saqlamasdan Chiqish (:q!)",
  "O'zgarishlarni bekor qilib chiqish buyrug'i.",
  "Ekranga <code>echo \":q!\"</code> chiqaring.",
  "echo \":q!\"",
  "`echo \":q!\"` buyrug'ini bering.",
  ["VIM", "DISCARD", "QUIT_FORCE"],
  ["echo \":q!\"", "echo :q!"],
  9, "9-Qavat • Oson", "S02 Seminar • Vim :q!");

addQ(134, "Nano Muharririda Saqlash Va Chiqish Kombinatsiyasi",
  "Nano muharririda saqlash Ctrl+O, chiqish esa Ctrl+X.",
  "Ekranga <code>echo \"Ctrl+O, Ctrl+X\"</code> chiqaring.",
  "echo \"Ctrl+O, Ctrl+X\"",
  "`echo \"Ctrl+O, Ctrl+X\"` buyrug'ini bering.",
  ["NANO", "SAVE_EXIT", "SHORTCUTS"],
  ["echo \"Ctrl+O, Ctrl+X\""],
  9, "9-Qavat • Oson", "S02 Seminar • Nano");

addQ(135, "Stream Tahrirlash Quvvati Xulosasi",
  "Joriy papkadagi barcha fayllar ro'yxatini ko'ring.",
  "<code>ls -la</code> buyrug'ini bering.",
  "ls -la",
  "`ls -la` buyrug'ini bering.",
  ["LS", "SUMMARY", "STREAM"],
  ["ls -la"],
  9, "9-Qavat • Oson", "S02 Seminar • Directory Check");

// ----------------------------------------------------------------------------
// SECTOR 10 (136 - 150): Disk Audit & Apache Log Forensics
// ----------------------------------------------------------------------------
addQ(136, "Disk Maydonidan Foydalanishni Tekshirish (df -h)",
  "Seminar 2 Case Study: Server diski to'lib qolayotganini tekshirish uchun fayl tizimlari xotirasini inson o'qiy oladigan formatda ko'ring.",
  "<code>df -h</code> buyrug'ini bering.",
  "df -h",
  "`df -h` buyrug'ini bering.",
  ["DF", "DISK_USAGE", "CASE_STUDY_DISK"],
  ["df -h"],
  10, "10-Qavat • Oson", "S02 Disk Emergency • Task 1");

addQ(137, "Fayl Tizimi Turi Bilan Ko'rish (df -hT)",
  "Ext4, tmpfs kabi fayl tizimlari turlari bilan birga disk maydonini ko'rish.",
  "<code>df -hT</code> buyrug'ini bering.",
  "df -hT",
  "`df -hT` buyrug'ini bering.",
  ["DF", "TYPE", "STORAGE"],
  ["df -hT"],
  10, "10-Qavat • Oson", "S02 Seminar • df -hT");

addQ(138, "Kataloglar Xotira Hajmini Aniqlash (du -sh)",
  "Seminar 2 Case Study: <code>/var/log</code> katalogi qancha disk maydoni egallayotganini ko'ring.",
  "<code>du -sh /var/log</code> buyrug'ini bering.",
  "du -sh /var/log",
  "`du -sh /var/log` buyrug'ini bering.",
  ["DU", "LOG_SIZE", "CASE_STUDY_DISK"],
  ["du -sh /var/log"],
  10, "10-Qavat • Oson", "S02 Disk Emergency • Task 2");

addQ(139, "100MB dan Katta Log Fayllarni Topish (find -size +100M)",
  "Seminar 2 Disk Emergency: Diskni to'ldirib yuborayotgan 100MB dan katta fayllarni qidirish.",
  "<code>find /var -type f -name \"*.log\" -size +100M</code> buyrug'ini bering.",
  "find /var -type f -name \"*.log\" -size +100M",
  "`find /var -type f -name \"*.log\" -size +100M` buyrug'ini bering.",
  ["FIND", "SIZE_100M", "CASE_STUDY_DISK"],
  ["find /var -type f -name \"*.log\" -size +100M"],
  10, "10-Qavat • O'rta", "S02 Disk Emergency • Task 3");

addQ(140, "Fayllarni Arxivlash (tar -cvzf)",
  "Auditdan so'ng log fayllarni siqilgan gzip arxivida saqlash lozim.",
  "<code>tar -cvzf logs_backup.tar.gz /var/log</code> buyrug'ini bering.",
  "tar -cvzf logs_backup.tar.gz /var/log",
  "`tar -cvzf logs_backup.tar.gz /var/log` buyrug'ini bering.",
  ["TAR", "GZIP", "ARCHIVE"],
  ["tar -cvzf logs_backup.tar.gz /var/log"],
  10, "10-Qavat • O'rta", "S02 Seminar • tar create");

addQ(141, "Arxiv Tarkibini Ochmasdan Ko'rish (tar -tvf)",
  "Arxiv ichida qanday fayllar borligini tekshirish.",
  "<code>tar -tvf logs_backup.tar.gz</code> buyrug'ini bering.",
  "tar -tvf logs_backup.tar.gz",
  "`tar -tvf logs_backup.tar.gz` buyrug'ini bering.",
  ["TAR", "LIST", "VERBOSE"],
  ["tar -tvf logs_backup.tar.gz", "tar -tf logs_backup.tar.gz"],
  10, "10-Qavat • Oson", "S02 Seminar • tar list");

addQ(142, "Arxivni Qayta Ochish (tar -xvzf)",
  "Siqilgan arxivdan fayllarni qaytarib olish.",
  "<code>tar -xvzf logs_backup.tar.gz</code> buyrug'ini bering.",
  "tar -xvzf logs_backup.tar.gz",
  "`tar -xvzf logs_backup.tar.gz` buyrug'ini bering.",
  ["TAR", "EXTRACT", "UNPACK"],
  ["tar -xvzf logs_backup.tar.gz"],
  10, "10-Qavat • O'rta", "S02 Seminar • tar extract");

addQ(143, "Apache Logidagi So'rovlar Umumiy Soni",
  "Tizim auditining yakuniy bosqichi: <code>/var/log/apache_logs.txt</code> dagi barcha satrlar sonini hisoblang.",
  "<code>wc -l /var/log/apache_logs.txt</code> buyrug'ini bering.",
  "wc -l /var/log/apache_logs.txt",
  "`wc -l /var/log/apache_logs.txt` buyrug'ini bering.",
  ["WC", "APACHE", "TOTAL_LINES"],
  ["wc -l /var/log/apache_logs.txt"],
  10, "10-Qavat • Oson", "S02 Final Audit • Total Requests");

addQ(144, "GET So'rovlari Sonini Hisoblash",
  "Logdagi GET so'rovlarining sonini toping.",
  "<code>grep -c \"GET\" /var/log/apache_logs.txt</code> buyrug'ini bering.",
  "grep -c \"GET\" /var/log/apache_logs.txt",
  "`grep -c \"GET\" /var/log/apache_logs.txt` buyrug'ini bering.",
  ["GREP", "GET", "COUNT"],
  ["grep -c \"GET\" /var/log/apache_logs.txt", "grep -c GET /var/log/apache_logs.txt"],
  10, "10-Qavat • Oson", "S02 Final Audit • GET Requests");

addQ(145, "POST So'rovlari Sonini Hisoblash",
  "Logdagi POST so'rovlari sonini hisoblang.",
  "<code>grep -c \"POST\" /var/log/apache_logs.txt</code> buyrug'ini bering.",
  "grep -c \"POST\" /var/log/apache_logs.txt",
  "`grep -c \"POST\" /var/log/apache_logs.txt` buyrug'ini bering.",
  ["GREP", "POST", "COUNT"],
  ["grep -c \"POST\" /var/log/apache_logs.txt", "grep -c POST /var/log/apache_logs.txt"],
  10, "10-Qavat • Oson", "S02 Final Audit • POST Requests");

addQ(146, "Xatolik Kodlari (HTTP 500) Soni",
  "Serverda qancha ichki xatolik (HTTP 500) yuz berganini sanang.",
  "<code>grep -c \" 500 \" /var/log/apache_logs.txt</code> buyrug'ini bering.",
  "grep -c \" 500 \" /var/log/apache_logs.txt",
  "`grep -c \" 500 \" /var/log/apache_logs.txt` buyrug'ini bering.",
  ["GREP", "500", "COUNT"],
  ["grep -c \" 500 \" /var/log/apache_logs.txt"],
  10, "10-Qavat • Oson", "S02 Final Audit • HTTP 500 Count");

addQ(147, "Muvaffaqiyatli HTTP 200 So'rovlari Soni",
  "Muvaffaqiyatli yakunlangan so'rovlarni sanang.",
  "<code>grep -c \" 200 \" /var/log/apache_logs.txt</code> buyrug'ini bering.",
  "grep -c \" 200 \" /var/log/apache_logs.txt",
  "`grep -c \" 200 \" /var/log/apache_logs.txt` buyrug'ini bering.",
  ["GREP", "200", "COUNT"],
  ["grep -c \" 200 \" /var/log/apache_logs.txt"],
  10, "10-Qavat • Oson", "S02 Final Audit • HTTP 200 Count");

addQ(148, "Eng Ko'p So'ralgan Resurslarni Tartiblash (Cut & Sort)",
  "Logdan URL manzilini (7-maydon) ajratib, saralash.",
  "<code>cut -d' ' -f7 /var/log/apache_logs.txt | sort | uniq -c</code> buyrug'ini bering.",
  "cut -d' ' -f7 /var/log/apache_logs.txt | sort | uniq -c",
  "`cut -d' ' -f7 /var/log/apache_logs.txt | sort | uniq -c` buyrug'ini bering.",
  ["CUT", "SORT", "RESOURCE_STATS"],
  ["cut -d' ' -f7 /var/log/apache_logs.txt | sort | uniq -c"],
  10, "10-Qavat • Qiyin", "S02 Final Audit • URL Analysis");

addQ(149, "Joriy Tizim Holati Xulosasi",
  "Barcha audit yakunlangach joriy foydalanuvchini tekshiring.",
  "<code>whoami</code> buyrug'ini bering.",
  "whoami",
  "`whoami` buyrug'ini bering.",
  ["WHOAMI", "AUDIT", "FINAL"],
  ["whoami"],
  10, "10-Qavat • Oson", "S02 Final Audit • whoami");

addQ(150, "Bosh Linux Tizim Muhandisi Final Sinovi",
  "Professor Turing tabriklaydi! 2-hafta bo'yicha barcha 150 topshiriq muvaffaqiyatli yechildi. Joriy ishchi katalogni ekranga chiqaring.",
  "<code>pwd</code> buyrug'ini bering.",
  "pwd",
  "`pwd` buyrug'ini bering.",
  ["PWD", "FINAL_ARCHITECT", "VICTORY"],
  ["pwd"],
  10, "10-Qavat • Oson", "S02 Final Audit • Victory PWD");

console.log(`Generated all ${questions.length} questions for Week 2.`);

// Validate against VirtualLinuxShell and BASH_GRADER
const virtualFsCode = fs.readFileSync(path.join(__dirname, 'data/virtual_fs.js'), 'utf8');
const sandbox = { window: {}, console: console };
vm.createContext(sandbox);
vm.runInContext(virtualFsCode, sandbox);

const BASH_GRADER = sandbox.window.VIRTUAL_LINUX_W2.BASH_GRADER;
console.log("Validating all 150 questions with BASH_GRADER...");
let fails = 0;
questions.forEach(q => {
  const res = BASH_GRADER.evaluate(q.expectedBash, q.expectedBash, q);
  if (!res.match) {
    console.error(`Validation failed for Q#${q.id} (${q.title}):`, res.message);
    fails++;
  }
});

if (fails > 0) {
  console.error(`Validation failed on ${fails} questions!`);
  process.exit(1);
} else {
  console.log("PASS: All 150 questions validated successfully!");
}

// Split into 3 production files:
const q1_50 = questions.slice(0, 50);
const q51_100 = questions.slice(50, 100);
const q101_150 = questions.slice(100, 150);

fs.writeFileSync(
  path.join(__dirname, 'data/questions_1_50.js'),
  `// ============================================================================\n// WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 2 QUESTIONS 1 TO 50\n// ============================================================================\n\nwindow.QUESTIONS_1_50_W2 = ${JSON.stringify(q1_50, null, 2)};\n`,
  'utf8'
);

fs.writeFileSync(
  path.join(__dirname, 'data/questions_51_100.js'),
  `// ============================================================================\n// WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 2 QUESTIONS 51 TO 100\n// ============================================================================\n\nwindow.QUESTIONS_51_100_W2 = ${JSON.stringify(q51_100, null, 2)};\n`,
  'utf8'
);

fs.writeFileSync(
  path.join(__dirname, 'data/questions_101_150.js'),
  `// ============================================================================\n// WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 2 QUESTIONS 101 TO 150\n// ============================================================================\n\nwindow.QUESTIONS_101_150_W2 = ${JSON.stringify(q101_150, null, 2)};\n`,
  'utf8'
);

console.log("Successfully wrote all 3 question files for Week 2!");
