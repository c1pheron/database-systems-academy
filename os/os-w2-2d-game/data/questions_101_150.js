// ============================================================================
// WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 2 QUESTIONS 101 TO 150
// ============================================================================

window.QUESTIONS_101_150_W2 = [
  {
    "id": 101,
    "title": "Fanlar Bo'yicha Saralash Va Takrorlarni O'chirish",
    "story": "Barcha fanlarni alifbo bo'yicha tartiblab, takrorlanuvchi nomlarni bittadan qoldiring.",
    "taskUz": "<code>cut -d, -f3 scores.csv | sort | uniq</code> buyrug'ini bering.",
    "expectedSql": "cut -d, -f3 scores.csv | sort | uniq",
    "expectedBash": "cut -d, -f3 scores.csv | sort | uniq",
    "hint": "`cut -d, -f3 scores.csv | sort | uniq` buyrug'ini bering.",
    "tags": [
      "CUT",
      "SORT",
      "UNIQ"
    ],
    "solutions": [
      "cut -d, -f3 scores.csv | sort | uniq",
      "cut -d',' -f3 scores.csv | sort | uniq"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • O'rta",
    "source": "S02 Seminar • Pipeline Combo"
  },
  {
    "id": 102,
    "title": "Har Bir Fanda Nechta Talaba O'qishini Sanash",
    "story": "Fanlar takrorlanishlar sonini hisoblash (<code>uniq -c</code>).",
    "taskUz": "<code>cut -d, -f3 scores.csv | sort | uniq -c</code> buyrug'ini bering.",
    "expectedSql": "cut -d, -f3 scores.csv | sort | uniq -c",
    "expectedBash": "cut -d, -f3 scores.csv | sort | uniq -c",
    "hint": "`cut -d, -f3 scores.csv | sort | uniq -c` buyrug'ini bering.",
    "tags": [
      "UNIQ_COUNT",
      "STATS",
      "PIPELINE"
    ],
    "solutions": [
      "cut -d, -f3 scores.csv | sort | uniq -c",
      "cut -d',' -f3 scores.csv | sort | uniq -c"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • O'rta",
    "source": "S02 Seminar • Subject Count"
  },
  {
    "id": 103,
    "title": "Satrning Dastlabki 10 Ta Belgi Kesib Olish (-c1-10)",
    "story": "Belgilar bo'yicha kesish (masalan sana yoki boshlang'ich identifikator).",
    "taskUz": "<code>cut -c1-10 scores.csv</code> buyrug'ini bering.",
    "expectedSql": "cut -c1-10 scores.csv",
    "expectedBash": "cut -c1-10 scores.csv",
    "hint": "`cut -c1-10 scores.csv` buyrug'ini bering.",
    "tags": [
      "CUT",
      "CHARS",
      "SLICING"
    ],
    "solutions": [
      "cut -c1-10 scores.csv"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • Oson",
    "source": "S02 Seminar • Character Cut"
  },
  {
    "id": 104,
    "title": "Protsesslar Ro'yxatini Saralash (Simulyatsiya)",
    "story": "Tizim foydalanuvchilarini alifbo tartibida tartiblab birinchi 3 tasini ko'rish.",
    "taskUz": "<code>cut -d: -f1 /etc/passwd | sort | head -n 3</code> buyrug'ini bering.",
    "expectedSql": "cut -d: -f1 /etc/passwd | sort | head -n 3",
    "expectedBash": "cut -d: -f1 /etc/passwd | sort | head -n 3",
    "hint": "`cut -d: -f1 /etc/passwd | sort | head -n 3` buyrug'ini bering.",
    "tags": [
      "CUT",
      "SORT",
      "HEAD"
    ],
    "solutions": [
      "cut -d: -f1 /etc/passwd | sort | head -n 3",
      "cut -d: -f1 /etc/passwd | sort | head -3"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • O'rta",
    "source": "S02 Seminar • Process Sort"
  },
  {
    "id": 105,
    "title": "Inventory Serverlarini Turiga Qarab Saralash",
    "story": "<code>inventory.txt</code> faylidan serverlarni tartiblang.",
    "taskUz": "<code>sort inventory.txt</code> buyrug'ini bering.",
    "expectedSql": "sort inventory.txt",
    "expectedBash": "sort inventory.txt",
    "hint": "`sort inventory.txt` buyrug'ini bering.",
    "tags": [
      "SORT",
      "INVENTORY",
      "SERVERS"
    ],
    "solutions": [
      "sort inventory.txt"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • Oson",
    "source": "S02 Seminar • Inventory Sort"
  },
  {
    "id": 106,
    "title": "Apache Logida Shubhali IP Qidirish",
    "story": "Seminar 2 Case Study 1: IP 83.149.9.216 ga tegishli barcha so'rovlarni topish.",
    "taskUz": "<code>grep \"83.149.9.216\" /var/log/apache_logs.txt</code> buyrug'ini bering.",
    "expectedSql": "grep \"83.149.9.216\" /var/log/apache_logs.txt",
    "expectedBash": "grep \"83.149.9.216\" /var/log/apache_logs.txt",
    "hint": "`grep \"83.149.9.216\" /var/log/apache_logs.txt` buyrug'ini bering.",
    "tags": [
      "GREP",
      "APACHE",
      "IP_SEARCH"
    ],
    "solutions": [
      "grep \"83.149.9.216\" /var/log/apache_logs.txt",
      "grep 83.149.9.216 /var/log/apache_logs.txt"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • Oson",
    "source": "S02 Case Study 1 • Task 1"
  },
  {
    "id": 107,
    "title": "Shubhali IP So'rovlari Soni (-c)",
    "story": "Seminar 2 Case Study 1: Ushbu IP qancha so'rov yuborganligini sanash.",
    "taskUz": "<code>grep -c \"83.149.9.216\" /var/log/apache_logs.txt</code> buyrug'ini bering.",
    "expectedSql": "grep -c \"83.149.9.216\" /var/log/apache_logs.txt",
    "expectedBash": "grep -c \"83.149.9.216\" /var/log/apache_logs.txt",
    "hint": "`grep -c \"83.149.9.216\" /var/log/apache_logs.txt` buyrug'ini bering.",
    "tags": [
      "GREP",
      "COUNT",
      "APACHE"
    ],
    "solutions": [
      "grep -c \"83.149.9.216\" /var/log/apache_logs.txt",
      "grep -c 83.149.9.216 /var/log/apache_logs.txt"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • Oson",
    "source": "S02 Case Study 1 • Task 2"
  },
  {
    "id": 108,
    "title": "Muayyan IP dan Faqat POST So'rovlarni Qidirish",
    "story": "Seminar 2 Case Study 1: IP 78.173.140.106 tomonidan yuborilgan POST so'rovlarni topish.",
    "taskUz": "<code>grep \"78.173.140.106.*POST\" /var/log/apache_logs.txt</code> buyrug'ini bering.",
    "expectedSql": "grep \"78.173.140.106.*POST\" /var/log/apache_logs.txt",
    "expectedBash": "grep \"78.173.140.106.*POST\" /var/log/apache_logs.txt",
    "hint": "`grep \"78.173.140.106.*POST\" /var/log/apache_logs.txt` buyrug'ini bering.",
    "tags": [
      "GREP",
      "REGEX",
      "POST"
    ],
    "solutions": [
      "grep \"78.173.140.106.*POST\" /var/log/apache_logs.txt"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • O'rta",
    "source": "S02 Case Study 1 • Task 3"
  },
  {
    "id": 109,
    "title": "Server 500 Xatoliklari Atrofidagi Kontekst (-B 2 -A 2)",
    "story": "Seminar 2 Case Study 1: Har bir HTTP 500 xatosidan oldingi va keyingi 2 satrni ko'rish.",
    "taskUz": "<code>grep -B 2 -A 2 \" 500 \" /var/log/apache_logs.txt</code> buyrug'ini bering.",
    "expectedSql": "grep -B 2 -A 2 \" 500 \" /var/log/apache_logs.txt",
    "expectedBash": "grep -B 2 -A 2 \" 500 \" /var/log/apache_logs.txt",
    "hint": "`grep -B 2 -A 2 \" 500 \" /var/log/apache_logs.txt` buyrug'ini bering.",
    "tags": [
      "GREP",
      "CONTEXT",
      "HTTP_500"
    ],
    "solutions": [
      "grep -B 2 -A 2 \" 500 \" /var/log/apache_logs.txt",
      "grep -C 2 \" 500 \" /var/log/apache_logs.txt"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • O'rta",
    "source": "S02 Case Study 1 • Task 4"
  },
  {
    "id": 110,
    "title": "PHP Fayllariga So'rovlarni Topish (Regex)",
    "story": "Seminar 2 Case Study 1: .php fayllariga bo'lgan so'rovlarni topish.",
    "taskUz": "<code>grep -E \"\\.php\" /var/log/apache_logs.txt</code> buyrug'ini bering.",
    "expectedSql": "grep -E \"\\.php\" /var/log/apache_logs.txt",
    "expectedBash": "grep -E \"\\.php\" /var/log/apache_logs.txt",
    "hint": "`grep -E \"\\.php\" /var/log/apache_logs.txt` buyrug'ini bering.",
    "tags": [
      "GREP",
      "EXTENDED",
      "PHP"
    ],
    "solutions": [
      "grep -E \"\\.php\" /var/log/apache_logs.txt",
      "grep \"\\.php\" /var/log/apache_logs.txt"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • O'rta",
    "source": "S02 Case Study 1 • Task 5"
  },
  {
    "id": 111,
    "title": "Rasm Fayllariga So'rovlarni Topish (png|jpg|gif)",
    "story": "Seminar 2 Case Study 1: Rasmlarga (png, jpg, gif) yo'llangan so'rovlarni guruhli regex bilan topish.",
    "taskUz": "<code>grep -E \"\\.(png|jpg|gif)\" /var/log/apache_logs.txt</code> buyrug'ini bering.",
    "expectedSql": "grep -E \"\\.(png|jpg|gif)\" /var/log/apache_logs.txt",
    "expectedBash": "grep -E \"\\.(png|jpg|gif)\" /var/log/apache_logs.txt",
    "hint": "`grep -E \"\\.(png|jpg|gif)\" /var/log/apache_logs.txt` buyrug'ini bering.",
    "tags": [
      "GREP",
      "IMAGES",
      "REGEX_GROUP"
    ],
    "solutions": [
      "grep -E \"\\.(png|jpg|gif)\" /var/log/apache_logs.txt"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • O'rta",
    "source": "S02 Case Study 1 • Task 6"
  },
  {
    "id": 112,
    "title": "Soat 10:00 Va 10:59 Oralig'idagi So'rovlar",
    "story": "Seminar 2 Case Study 1: Muayyan soatdagi loglarni topish.",
    "taskUz": "<code>grep \"17/May/2015:10:\" /var/log/apache_logs.txt</code> buyrug'ini bering.",
    "expectedSql": "grep \"17/May/2015:10:\" /var/log/apache_logs.txt",
    "expectedBash": "grep \"17/May/2015:10:\" /var/log/apache_logs.txt",
    "hint": "`grep \"17/May/2015:10:\" /var/log/apache_logs.txt` buyrug'ini bering.",
    "tags": [
      "GREP",
      "TIMESTAMP",
      "APACHE"
    ],
    "solutions": [
      "grep \"17/May/2015:10:\" /var/log/apache_logs.txt"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • O'rta",
    "source": "S02 Case Study 1 • Task 7"
  },
  {
    "id": 113,
    "title": "Faqat IP Manzillarni Ajratib Olish (grep -oE)",
    "story": "Seminar 2 Case Study 1: Log satrlarining boshidan faqat IP manzillarni ajratish.",
    "taskUz": "<code>grep -oE \"^[0-9.]+\" /var/log/apache_logs.txt</code> buyrug'ini bering.",
    "expectedSql": "grep -oE \"^[0-9.]+\" /var/log/apache_logs.txt",
    "expectedBash": "grep -oE \"^[0-9.]+\" /var/log/apache_logs.txt",
    "hint": "`grep -oE \"^[0-9.]+\" /var/log/apache_logs.txt` buyrug'ini bering.",
    "tags": [
      "GREP",
      "-OE",
      "IP_EXTRACT"
    ],
    "solutions": [
      "grep -oE \"^[0-9.]+\" /var/log/apache_logs.txt"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • Qiyin",
    "source": "S02 Case Study 1 • Task 9"
  },
  {
    "id": 114,
    "title": "Noyob IP Manzillar Ro'yxati",
    "story": "Ajratilgan IP larni saralab, faqat takrorlanmaganlarini ko'rsatish.",
    "taskUz": "<code>grep -oE \"^[0-9.]+\" /var/log/apache_logs.txt | sort | uniq</code> buyrug'ini bering.",
    "expectedSql": "grep -oE \"^[0-9.]+\" /var/log/apache_logs.txt | sort | uniq",
    "expectedBash": "grep -oE \"^[0-9.]+\" /var/log/apache_logs.txt | sort | uniq",
    "hint": "`grep -oE \"^[0-9.]+\" /var/log/apache_logs.txt | sort | uniq` buyrug'ini bering.",
    "tags": [
      "GREP",
      "SORT",
      "UNIQ_IPS"
    ],
    "solutions": [
      "grep -oE \"^[0-9.]+\" /var/log/apache_logs.txt | sort | uniq"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • Qiyin",
    "source": "S02 Case Study 1 • Unique IPs"
  },
  {
    "id": 115,
    "title": "Eng Faol Top 5 IP Manzil (Case Study 1 Yakuni)",
    "story": "Seminar 2 Case Study 1: Eng ko'p so'rov yuborgan 5 ta IP ni aniqlash.",
    "taskUz": "<code>grep -oE \"^[0-9.]+\" /var/log/apache_logs.txt | sort | uniq -c | sort -nr | head -5</code> buyrug'ini bering.",
    "expectedSql": "grep -oE \"^[0-9.]+\" /var/log/apache_logs.txt | sort | uniq -c | sort -nr | head -5",
    "expectedBash": "grep -oE \"^[0-9.]+\" /var/log/apache_logs.txt | sort | uniq -c | sort -nr | head -5",
    "hint": "`grep -oE \"^[0-9.]+\" /var/log/apache_logs.txt | sort | uniq -c | sort -nr | head -5` buyrug'ini bering.",
    "tags": [
      "GREP",
      "TOP5",
      "FORENSICS"
    ],
    "solutions": [
      "grep -oE \"^[0-9.]+\" /var/log/apache_logs.txt | sort | uniq -c | sort -nr | head -5",
      "grep -oE \"^[0-9.]+\" /var/log/apache_logs.txt | sort | uniq -c | sort -nr | head -n 5"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • Qiyin",
    "source": "S02 Case Study 1 • Model Answer"
  },
  {
    "id": 116,
    "title": "Muvaffaqiyatsiz So'rovlarni Topish (grep -v 200)",
    "story": "Seminar 2 Case Study 1: HTTP 200 kodiga ega bo'lmagan xatolik so'rovlarini topish.",
    "taskUz": "<code>grep -v \" 200 \" /var/log/apache_logs.txt</code> buyrug'ini bering.",
    "expectedSql": "grep -v \" 200 \" /var/log/apache_logs.txt",
    "expectedBash": "grep -v \" 200 \" /var/log/apache_logs.txt",
    "hint": "`grep -v \" 200 \" /var/log/apache_logs.txt` buyrug'ini bering.",
    "tags": [
      "GREP",
      "INVERT",
      "HTTP_NON200"
    ],
    "solutions": [
      "grep -v \" 200 \" /var/log/apache_logs.txt"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • O'rta",
    "source": "S02 Case Study 1 • Non-200"
  },
  {
    "id": 117,
    "title": "Katta-Kichik Harflarni Inkor Qilish (grep -i)",
    "story": "CPU so'zini har qanday registrda qidirish.",
    "taskUz": "<code>grep -i \"cpu\" /var/log/syslog</code> buyrug'ini bering.",
    "expectedSql": "grep -i \"cpu\" /var/log/syslog",
    "expectedBash": "grep -i \"cpu\" /var/log/syslog",
    "hint": "`grep -i \"cpu\" /var/log/syslog` buyrug'ini bering.",
    "tags": [
      "GREP",
      "CASE_INSENSITIVE",
      "SYS"
    ],
    "solutions": [
      "grep -i \"cpu\" /var/log/syslog",
      "grep -i cpu /var/log/syslog"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • Oson",
    "source": "S02 Seminar • grep -i"
  },
  {
    "id": 118,
    "title": "Satr Raqamlari Bilan Ko'rsatish (grep -n)",
    "story": "Qaysi satrda xato borligini bilish uchun line numberlarni chiqarish.",
    "taskUz": "<code>grep -n \"student\" /etc/passwd</code> buyrug'ini bering.",
    "expectedSql": "grep -n \"student\" /etc/passwd",
    "expectedBash": "grep -n \"student\" /etc/passwd",
    "hint": "`grep -n \"student\" /etc/passwd` buyrug'ini bering.",
    "tags": [
      "GREP",
      "LINE_NUM",
      "PASSWD"
    ],
    "solutions": [
      "grep -n \"student\" /etc/passwd",
      "grep -n student /etc/passwd"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • Oson",
    "source": "S02 Seminar • grep -n"
  },
  {
    "id": 119,
    "title": "Faqat Fayl Nomlarini Ko'rsatish (grep -l)",
    "story": "Katalog ichidagi qaysi fayllarda izlangan so'z borligini bilish.",
    "taskUz": "<code>grep -l \"root\" /var/log/*</code> buyrug'ini bering.",
    "expectedSql": "grep -l \"root\" /var/log/*",
    "expectedBash": "grep -l \"root\" /var/log/*",
    "hint": "`grep -l \"root\" /var/log/*` buyrug'ini bering.",
    "tags": [
      "GREP",
      "FILES_WITH_MATCH",
      "LOGS"
    ],
    "solutions": [
      "grep -l \"root\" /var/log/*",
      "grep -l root /var/log/*"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • O'rta",
    "source": "S02 Seminar • grep -l"
  },
  {
    "id": 120,
    "title": "Satr Boshidan Qidirish (^)",
    "story": "Aniq satr boshi bilan boshlanuvchi yozuvlarni topish.",
    "taskUz": "<code>grep \"^root:\" /etc/passwd</code> buyrug'ini bering.",
    "expectedSql": "grep \"^root:\" /etc/passwd",
    "expectedBash": "grep \"^root:\" /etc/passwd",
    "hint": "`grep \"^root:\" /etc/passwd` buyrug'ini bering.",
    "tags": [
      "GREP",
      "CARET",
      "REGEX_START"
    ],
    "solutions": [
      "grep \"^root:\" /etc/passwd"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • Oson",
    "source": "S02 Seminar • Regex ^"
  },
  {
    "id": 121,
    "title": "Sed Bilan So'zni O'zgartirish (s/old/new/)",
    "story": "Seminar 2 ma'ruzasi: Sed orqali birinchi uchragan so'zni almashtirish.",
    "taskUz": "<code>scores.csv</code> faylidagi 'Math' so'zini 'Calculus' ga almashtirib ekranga chiqaring.",
    "expectedSql": "sed 's/Math/Calculus/' scores.csv",
    "expectedBash": "sed 's/Math/Calculus/' scores.csv",
    "hint": "`sed 's/Math/Calculus/' scores.csv` buyrug'ini bering.",
    "tags": [
      "SED",
      "SUBSTITUTE",
      "STREAM"
    ],
    "solutions": [
      "sed 's/Math/Calculus/' scores.csv",
      "sed \"s/Math/Calculus/\" scores.csv"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • Oson",
    "source": "S02 Seminar • sed s///"
  },
  {
    "id": 122,
    "title": "Global Almashtirish (s/old/new/g)",
    "story": "Satrdagi barcha takrorlangan so'zlarni global (<code>g</code>) almashtirish.",
    "taskUz": "<code>sed 's/Math/Calculus/g' scores.csv</code> buyrug'ini bering.",
    "expectedSql": "sed 's/Math/Calculus/g' scores.csv",
    "expectedBash": "sed 's/Math/Calculus/g' scores.csv",
    "hint": "`sed 's/Math/Calculus/g' scores.csv` buyrug'ini bering.",
    "tags": [
      "SED",
      "GLOBAL",
      "REPLACE"
    ],
    "solutions": [
      "sed 's/Math/Calculus/g' scores.csv",
      "sed \"s/Math/Calculus/g\" scores.csv"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • Oson",
    "source": "S02 Seminar • sed global"
  },
  {
    "id": 123,
    "title": "Sed Bilan Muayyan Satrni O'chirish (3d)",
    "story": "Darslik namunasi: 3-satrni o'chirib qolganlarini ekranga chiqarish.",
    "taskUz": "<code>sed '3d' scores.csv</code> buyrug'ini bering.",
    "expectedSql": "sed '3d' scores.csv",
    "expectedBash": "sed '3d' scores.csv",
    "hint": "`sed '3d' scores.csv` buyrug'ini bering.",
    "tags": [
      "SED",
      "DELETE_LINE",
      "3D"
    ],
    "solutions": [
      "sed '3d' scores.csv",
      "sed \"3d\" scores.csv"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • O'rta",
    "source": "S02 Seminar • sed 3d"
  },
  {
    "id": 124,
    "title": "Sed Bilan 1-Satrni O'chirish (Header Olib Tashlash)",
    "story": "Sarlavha satrini o'chirish uchun <code>1d</code> buyrug'i qo'llaniladi.",
    "taskUz": "<code>sed '1d' scores.csv</code> buyrug'ini bering.",
    "expectedSql": "sed '1d' scores.csv",
    "expectedBash": "sed '1d' scores.csv",
    "hint": "`sed '1d' scores.csv` buyrug'ini bering.",
    "tags": [
      "SED",
      "DELETE_HEADER",
      "1D"
    ],
    "solutions": [
      "sed '1d' scores.csv",
      "sed \"1d\" scores.csv"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • O'rta",
    "source": "S02 Seminar • sed 1d"
  },
  {
    "id": 125,
    "title": "Awk Bilan 1-Ustunni Chiqarish (awk '{print $1}')",
    "story": "Seminar 2 namunasi: Matnning har bir satridan 1-maydonni (field) ajratib olish.",
    "taskUz": "<code>inventory.txt</code> faylidan faqat server nomlarini (<code>awk '{print $1}'</code>) chiqaring.",
    "expectedSql": "awk '{print $1}' inventory.txt",
    "expectedBash": "awk '{print $1}' inventory.txt",
    "hint": "`awk '{print $1}' inventory.txt` buyrug'ini bering.",
    "tags": [
      "AWK",
      "PRINT_1",
      "COLUMNS"
    ],
    "solutions": [
      "awk '{print $1}' inventory.txt",
      "awk \"{print \\$1}\" inventory.txt"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • Oson",
    "source": "S02 Seminar • awk print $1"
  },
  {
    "id": 126,
    "title": "Awk Bilan 2-Ustunni (IP Manzilni) Olish",
    "story": "<code>inventory.txt</code> faylidan server IP manzillarini (2-maydon) ajrating.",
    "taskUz": "<code>awk '{print $2}' inventory.txt</code> buyrug'ini bering.",
    "expectedSql": "awk '{print $2}' inventory.txt",
    "expectedBash": "awk '{print $2}' inventory.txt",
    "hint": "`awk '{print $2}' inventory.txt` buyrug'ini bering.",
    "tags": [
      "AWK",
      "PRINT_2",
      "IPS"
    ],
    "solutions": [
      "awk '{print $2}' inventory.txt",
      "awk \"{print \\$2}\" inventory.txt"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • Oson",
    "source": "S02 Seminar • awk print $2"
  },
  {
    "id": 127,
    "title": "Awk Delimiter Bilan: /etc/passwd dan Foydalanuvchilarni Olish (-F:)",
    "story": "Seminar 2 namunasi: Ikki nuqta (<code>:</code>) bilan ajratilgan fayldan 1-ustunni olish.",
    "taskUz": "<code>awk -F: '{print $1}' /etc/passwd</code> buyrug'ini bering.",
    "expectedSql": "awk -F: '{print $1}' /etc/passwd",
    "expectedBash": "awk -F: '{print $1}' /etc/passwd",
    "hint": "`awk -F: '{print $1}' /etc/passwd` buyrug'ini bering.",
    "tags": [
      "AWK",
      "DELIMITER",
      "PASSWD"
    ],
    "solutions": [
      "awk -F: '{print $1}' /etc/passwd",
      "awk -F':' '{print $1}' /etc/passwd"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • O'rta",
    "source": "S02 Seminar • awk -F:"
  },
  {
    "id": 128,
    "title": "Foydalanuvchi Nomi Va Uy Katalogini Birga Chiqarish ($1, $6)",
    "story": "Foydalanuvchi nomi va uning uy manzilini yonma-yon chiqarish.",
    "taskUz": "<code>awk -F: '{print $1, $6}' /etc/passwd</code> buyrug'ini bering.",
    "expectedSql": "awk -F: '{print $1, $6}' /etc/passwd",
    "expectedBash": "awk -F: '{print $1, $6}' /etc/passwd",
    "hint": "`awk -F: '{print $1, $6}' /etc/passwd` buyrug'ini bering.",
    "tags": [
      "AWK",
      "FIELDS_1_6",
      "USER_HOME"
    ],
    "solutions": [
      "awk -F: '{print $1, $6}' /etc/passwd",
      "awk -F':' '{print $1, $6}' /etc/passwd"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • O'rta",
    "source": "S02 Seminar • awk fields"
  },
  {
    "id": 129,
    "title": "Foydalanuvchi Nomi Va Shellni Chiqarish ($1, $7)",
    "story": "Seminar 2 rasmiy namunasi: Username va login shellini ajratish.",
    "taskUz": "<code>awk -F: '{print $1, $7}' /etc/passwd</code> buyrug'ini bering.",
    "expectedSql": "awk -F: '{print $1, $7}' /etc/passwd",
    "expectedBash": "awk -F: '{print $1, $7}' /etc/passwd",
    "hint": "`awk -F: '{print $1, $7}' /etc/passwd` buyrug'ini bering.",
    "tags": [
      "AWK",
      "FIELDS_1_7",
      "USER_SHELL"
    ],
    "solutions": [
      "awk -F: '{print $1, $7}' /etc/passwd",
      "awk -F':' '{print $1, $7}' /etc/passwd"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • O'rta",
    "source": "S02 Seminar • awk fields 1,7"
  },
  {
    "id": 130,
    "title": "CSV Fayldan Ism Va Ballni Chiqarish (-F,)",
    "story": "<code>scores.csv</code> faylidan vergul bilan ajratilgan 1- va 2-maydonlarni oling.",
    "taskUz": "<code>awk -F, '{print $1, $2}' scores.csv</code> buyrug'ini bering.",
    "expectedSql": "awk -F, '{print $1, $2}' scores.csv",
    "expectedBash": "awk -F, '{print $1, $2}' scores.csv",
    "hint": "`awk -F, '{print $1, $2}' scores.csv` buyrug'ini bering.",
    "tags": [
      "AWK",
      "CSV",
      "STUDENT_SCORES"
    ],
    "solutions": [
      "awk -F, '{print $1, $2}' scores.csv",
      "awk -F',' '{print $1, $2}' scores.csv"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • Oson",
    "source": "S02 Seminar • awk CSV"
  },
  {
    "id": 131,
    "title": "Awk Bilan Aniq 5-Satrni Ko'rish (NR==5)",
    "story": "Seminar 2 namunasi: Faylning 5-satrini ekranga chiqarish.",
    "taskUz": "<code>awk 'NR==5' /etc/passwd</code> buyrug'ini bering.",
    "expectedSql": "awk 'NR==5' /etc/passwd",
    "expectedBash": "awk 'NR==5' /etc/passwd",
    "hint": "`awk 'NR==5' /etc/passwd` buyrug'ini bering.",
    "tags": [
      "AWK",
      "NR==5",
      "LINE_FILTER"
    ],
    "solutions": [
      "awk 'NR==5' /etc/passwd",
      "awk \"NR==5\" /etc/passwd"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • O'rta",
    "source": "S02 Seminar • awk NR==5"
  },
  {
    "id": 132,
    "title": "Vim Muharriridan Saqlab Chiqish (:wq)",
    "story": "Linuxda Vim ochilganda matnni saqlab chiqish buyrug'i qanday?",
    "taskUz": "Ekranga <code>echo \":wq\"</code> chiqarib o'z bilimingizni tasdiqlang.",
    "expectedSql": "echo \":wq\"",
    "expectedBash": "echo \":wq\"",
    "hint": "`echo \":wq\"` buyrug'ini bering.",
    "tags": [
      "VIM",
      "EXIT",
      "WRITE_QUIT"
    ],
    "solutions": [
      "echo \":wq\"",
      "echo :wq"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • Oson",
    "source": "S02 Seminar • Vim :wq"
  },
  {
    "id": 133,
    "title": "Vim Muharriridan Saqlamasdan Chiqish (:q!)",
    "story": "O'zgarishlarni bekor qilib chiqish buyrug'i.",
    "taskUz": "Ekranga <code>echo \":q!\"</code> chiqaring.",
    "expectedSql": "echo \":q!\"",
    "expectedBash": "echo \":q!\"",
    "hint": "`echo \":q!\"` buyrug'ini bering.",
    "tags": [
      "VIM",
      "DISCARD",
      "QUIT_FORCE"
    ],
    "solutions": [
      "echo \":q!\"",
      "echo :q!"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • Oson",
    "source": "S02 Seminar • Vim :q!"
  },
  {
    "id": 134,
    "title": "Nano Muharririda Saqlash Va Chiqish Kombinatsiyasi",
    "story": "Nano muharririda saqlash Ctrl+O, chiqish esa Ctrl+X.",
    "taskUz": "Ekranga <code>echo \"Ctrl+O, Ctrl+X\"</code> chiqaring.",
    "expectedSql": "echo \"Ctrl+O, Ctrl+X\"",
    "expectedBash": "echo \"Ctrl+O, Ctrl+X\"",
    "hint": "`echo \"Ctrl+O, Ctrl+X\"` buyrug'ini bering.",
    "tags": [
      "NANO",
      "SAVE_EXIT",
      "SHORTCUTS"
    ],
    "solutions": [
      "echo \"Ctrl+O, Ctrl+X\""
    ],
    "sector": 9,
    "difficulty": "9-Qavat • Oson",
    "source": "S02 Seminar • Nano"
  },
  {
    "id": 135,
    "title": "Stream Tahrirlash Quvvati Xulosasi",
    "story": "Joriy papkadagi barcha fayllar ro'yxatini ko'ring.",
    "taskUz": "<code>ls -la</code> buyrug'ini bering.",
    "expectedSql": "ls -la",
    "expectedBash": "ls -la",
    "hint": "`ls -la` buyrug'ini bering.",
    "tags": [
      "LS",
      "SUMMARY",
      "STREAM"
    ],
    "solutions": [
      "ls -la"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • Oson",
    "source": "S02 Seminar • Directory Check"
  },
  {
    "id": 136,
    "title": "Disk Maydonidan Foydalanishni Tekshirish (df -h)",
    "story": "Seminar 2 Case Study: Server diski to'lib qolayotganini tekshirish uchun fayl tizimlari xotirasini inson o'qiy oladigan formatda ko'ring.",
    "taskUz": "<code>df -h</code> buyrug'ini bering.",
    "expectedSql": "df -h",
    "expectedBash": "df -h",
    "hint": "`df -h` buyrug'ini bering.",
    "tags": [
      "DF",
      "DISK_USAGE",
      "CASE_STUDY_DISK"
    ],
    "solutions": [
      "df -h"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • Oson",
    "source": "S02 Disk Emergency • Task 1"
  },
  {
    "id": 137,
    "title": "Fayl Tizimi Turi Bilan Ko'rish (df -hT)",
    "story": "Ext4, tmpfs kabi fayl tizimlari turlari bilan birga disk maydonini ko'rish.",
    "taskUz": "<code>df -hT</code> buyrug'ini bering.",
    "expectedSql": "df -hT",
    "expectedBash": "df -hT",
    "hint": "`df -hT` buyrug'ini bering.",
    "tags": [
      "DF",
      "TYPE",
      "STORAGE"
    ],
    "solutions": [
      "df -hT"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • Oson",
    "source": "S02 Seminar • df -hT"
  },
  {
    "id": 138,
    "title": "Kataloglar Xotira Hajmini Aniqlash (du -sh)",
    "story": "Seminar 2 Case Study: <code>/var/log</code> katalogi qancha disk maydoni egallayotganini ko'ring.",
    "taskUz": "<code>du -sh /var/log</code> buyrug'ini bering.",
    "expectedSql": "du -sh /var/log",
    "expectedBash": "du -sh /var/log",
    "hint": "`du -sh /var/log` buyrug'ini bering.",
    "tags": [
      "DU",
      "LOG_SIZE",
      "CASE_STUDY_DISK"
    ],
    "solutions": [
      "du -sh /var/log"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • Oson",
    "source": "S02 Disk Emergency • Task 2"
  },
  {
    "id": 139,
    "title": "100MB dan Katta Log Fayllarni Topish (find -size +100M)",
    "story": "Seminar 2 Disk Emergency: Diskni to'ldirib yuborayotgan 100MB dan katta fayllarni qidirish.",
    "taskUz": "<code>find /var -type f -name \"*.log\" -size +100M</code> buyrug'ini bering.",
    "expectedSql": "find /var -type f -name \"*.log\" -size +100M",
    "expectedBash": "find /var -type f -name \"*.log\" -size +100M",
    "hint": "`find /var -type f -name \"*.log\" -size +100M` buyrug'ini bering.",
    "tags": [
      "FIND",
      "SIZE_100M",
      "CASE_STUDY_DISK"
    ],
    "solutions": [
      "find /var -type f -name \"*.log\" -size +100M"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • O'rta",
    "source": "S02 Disk Emergency • Task 3"
  },
  {
    "id": 140,
    "title": "Fayllarni Arxivlash (tar -cvzf)",
    "story": "Auditdan so'ng log fayllarni siqilgan gzip arxivida saqlash lozim.",
    "taskUz": "<code>tar -cvzf logs_backup.tar.gz /var/log</code> buyrug'ini bering.",
    "expectedSql": "tar -cvzf logs_backup.tar.gz /var/log",
    "expectedBash": "tar -cvzf logs_backup.tar.gz /var/log",
    "hint": "`tar -cvzf logs_backup.tar.gz /var/log` buyrug'ini bering.",
    "tags": [
      "TAR",
      "GZIP",
      "ARCHIVE"
    ],
    "solutions": [
      "tar -cvzf logs_backup.tar.gz /var/log"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • O'rta",
    "source": "S02 Seminar • tar create"
  },
  {
    "id": 141,
    "title": "Arxiv Tarkibini Ochmasdan Ko'rish (tar -tvf)",
    "story": "Arxiv ichida qanday fayllar borligini tekshirish.",
    "taskUz": "<code>tar -tvf logs_backup.tar.gz</code> buyrug'ini bering.",
    "expectedSql": "tar -tvf logs_backup.tar.gz",
    "expectedBash": "tar -tvf logs_backup.tar.gz",
    "hint": "`tar -tvf logs_backup.tar.gz` buyrug'ini bering.",
    "tags": [
      "TAR",
      "LIST",
      "VERBOSE"
    ],
    "solutions": [
      "tar -tvf logs_backup.tar.gz",
      "tar -tf logs_backup.tar.gz"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • Oson",
    "source": "S02 Seminar • tar list"
  },
  {
    "id": 142,
    "title": "Arxivni Qayta Ochish (tar -xvzf)",
    "story": "Siqilgan arxivdan fayllarni qaytarib olish.",
    "taskUz": "<code>tar -xvzf logs_backup.tar.gz</code> buyrug'ini bering.",
    "expectedSql": "tar -xvzf logs_backup.tar.gz",
    "expectedBash": "tar -xvzf logs_backup.tar.gz",
    "hint": "`tar -xvzf logs_backup.tar.gz` buyrug'ini bering.",
    "tags": [
      "TAR",
      "EXTRACT",
      "UNPACK"
    ],
    "solutions": [
      "tar -xvzf logs_backup.tar.gz"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • O'rta",
    "source": "S02 Seminar • tar extract"
  },
  {
    "id": 143,
    "title": "Apache Logidagi So'rovlar Umumiy Soni",
    "story": "Tizim auditining yakuniy bosqichi: <code>/var/log/apache_logs.txt</code> dagi barcha satrlar sonini hisoblang.",
    "taskUz": "<code>wc -l /var/log/apache_logs.txt</code> buyrug'ini bering.",
    "expectedSql": "wc -l /var/log/apache_logs.txt",
    "expectedBash": "wc -l /var/log/apache_logs.txt",
    "hint": "`wc -l /var/log/apache_logs.txt` buyrug'ini bering.",
    "tags": [
      "WC",
      "APACHE",
      "TOTAL_LINES"
    ],
    "solutions": [
      "wc -l /var/log/apache_logs.txt"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • Oson",
    "source": "S02 Final Audit • Total Requests"
  },
  {
    "id": 144,
    "title": "GET So'rovlari Sonini Hisoblash",
    "story": "Logdagi GET so'rovlarining sonini toping.",
    "taskUz": "<code>grep -c \"GET\" /var/log/apache_logs.txt</code> buyrug'ini bering.",
    "expectedSql": "grep -c \"GET\" /var/log/apache_logs.txt",
    "expectedBash": "grep -c \"GET\" /var/log/apache_logs.txt",
    "hint": "`grep -c \"GET\" /var/log/apache_logs.txt` buyrug'ini bering.",
    "tags": [
      "GREP",
      "GET",
      "COUNT"
    ],
    "solutions": [
      "grep -c \"GET\" /var/log/apache_logs.txt",
      "grep -c GET /var/log/apache_logs.txt"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • Oson",
    "source": "S02 Final Audit • GET Requests"
  },
  {
    "id": 145,
    "title": "POST So'rovlari Sonini Hisoblash",
    "story": "Logdagi POST so'rovlari sonini hisoblang.",
    "taskUz": "<code>grep -c \"POST\" /var/log/apache_logs.txt</code> buyrug'ini bering.",
    "expectedSql": "grep -c \"POST\" /var/log/apache_logs.txt",
    "expectedBash": "grep -c \"POST\" /var/log/apache_logs.txt",
    "hint": "`grep -c \"POST\" /var/log/apache_logs.txt` buyrug'ini bering.",
    "tags": [
      "GREP",
      "POST",
      "COUNT"
    ],
    "solutions": [
      "grep -c \"POST\" /var/log/apache_logs.txt",
      "grep -c POST /var/log/apache_logs.txt"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • Oson",
    "source": "S02 Final Audit • POST Requests"
  },
  {
    "id": 146,
    "title": "Xatolik Kodlari (HTTP 500) Soni",
    "story": "Serverda qancha ichki xatolik (HTTP 500) yuz berganini sanang.",
    "taskUz": "<code>grep -c \" 500 \" /var/log/apache_logs.txt</code> buyrug'ini bering.",
    "expectedSql": "grep -c \" 500 \" /var/log/apache_logs.txt",
    "expectedBash": "grep -c \" 500 \" /var/log/apache_logs.txt",
    "hint": "`grep -c \" 500 \" /var/log/apache_logs.txt` buyrug'ini bering.",
    "tags": [
      "GREP",
      "500",
      "COUNT"
    ],
    "solutions": [
      "grep -c \" 500 \" /var/log/apache_logs.txt"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • Oson",
    "source": "S02 Final Audit • HTTP 500 Count"
  },
  {
    "id": 147,
    "title": "Muvaffaqiyatli HTTP 200 So'rovlari Soni",
    "story": "Muvaffaqiyatli yakunlangan so'rovlarni sanang.",
    "taskUz": "<code>grep -c \" 200 \" /var/log/apache_logs.txt</code> buyrug'ini bering.",
    "expectedSql": "grep -c \" 200 \" /var/log/apache_logs.txt",
    "expectedBash": "grep -c \" 200 \" /var/log/apache_logs.txt",
    "hint": "`grep -c \" 200 \" /var/log/apache_logs.txt` buyrug'ini bering.",
    "tags": [
      "GREP",
      "200",
      "COUNT"
    ],
    "solutions": [
      "grep -c \" 200 \" /var/log/apache_logs.txt"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • Oson",
    "source": "S02 Final Audit • HTTP 200 Count"
  },
  {
    "id": 148,
    "title": "Eng Ko'p So'ralgan Resurslarni Tartiblash (Cut & Sort)",
    "story": "Logdan URL manzilini (7-maydon) ajratib, saralash.",
    "taskUz": "<code>cut -d' ' -f7 /var/log/apache_logs.txt | sort | uniq -c</code> buyrug'ini bering.",
    "expectedSql": "cut -d' ' -f7 /var/log/apache_logs.txt | sort | uniq -c",
    "expectedBash": "cut -d' ' -f7 /var/log/apache_logs.txt | sort | uniq -c",
    "hint": "`cut -d' ' -f7 /var/log/apache_logs.txt | sort | uniq -c` buyrug'ini bering.",
    "tags": [
      "CUT",
      "SORT",
      "RESOURCE_STATS"
    ],
    "solutions": [
      "cut -d' ' -f7 /var/log/apache_logs.txt | sort | uniq -c"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • Qiyin",
    "source": "S02 Final Audit • URL Analysis"
  },
  {
    "id": 149,
    "title": "Joriy Tizim Holati Xulosasi",
    "story": "Barcha audit yakunlangach joriy foydalanuvchini tekshiring.",
    "taskUz": "<code>whoami</code> buyrug'ini bering.",
    "expectedSql": "whoami",
    "expectedBash": "whoami",
    "hint": "`whoami` buyrug'ini bering.",
    "tags": [
      "WHOAMI",
      "AUDIT",
      "FINAL"
    ],
    "solutions": [
      "whoami"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • Oson",
    "source": "S02 Final Audit • whoami"
  },
  {
    "id": 150,
    "title": "Bosh Linux Tizim Muhandisi Final Sinovi",
    "story": "Professor Turing tabriklaydi! 2-hafta bo'yicha barcha 150 topshiriq muvaffaqiyatli yechildi. Joriy ishchi katalogni ekranga chiqaring.",
    "taskUz": "<code>pwd</code> buyrug'ini bering.",
    "expectedSql": "pwd",
    "expectedBash": "pwd",
    "hint": "`pwd` buyrug'ini bering.",
    "tags": [
      "PWD",
      "FINAL_ARCHITECT",
      "VICTORY"
    ],
    "solutions": [
      "pwd"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • Oson",
    "source": "S02 Final Audit • Victory PWD"
  }
];
