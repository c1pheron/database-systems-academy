/**
 * WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 6 COMMAND & FLAG ANATOMY ENGINE
 * "Buyruq & Bayroqlar Tahlili" (5-Point Flag Anatomy & Omission Risk Breakdown)
 * Topics: Virtual Memory, Demand Paging, Dockerfile, Container Networking, Volumes & Docker Compose.
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.COMMAND_ANATOMY_W6 = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {

  // Master Flag Reference Dictionary for Week 6 (Docker, Volumes, Compose & Memory)
  const MASTER_FLAG_DICTIONARY = [
    {
      cmd: "docker build",
      flag: "-t",
      name: "Tag Image (Obrazga nom va versiya berish)",
      syntax: "docker build -t sample-app:1.0 .",
      purpose: "Yaratilayotgan obrazga inson o'qiy oladigan repozitoriy nomi va tegi (versiyasi)ni biriktiradi.",
      withoutRisk: "Agar -t ko'rsatilmasa, obraz faqat 64 belgili sha256 xesh (masalan, <none>:<none>) bilan yaratiladi. Keyinchalik uni qidirib topish va ishga tushirish qiyinlashadi."
    },
    {
      cmd: "docker build",
      flag: ".",
      name: "Build Context (Qurish konteksti katalogi)",
      syntax: "docker build -t sample-app:1.0 .",
      purpose: "Joriy katalogni qurish konteksti (build context) deb belgilaydi va Dockerfile, app.py kabi fayllarni Docker deymoniga yuboradi.",
      withoutRisk: "Agar nuqta (.) yoki katalog yo'li qo'yilmasa, Docker buyrug'i sintaktik xato berib to'xtaydi, chunki Dockerfile va nusxalanadigan fayllar qayerdaligini bilolmaydi."
    },
    {
      cmd: "docker run",
      flag: "-d",
      name: "Detached Mode (Fon rejimida ishga tushirish)",
      syntax: "docker run -d --name app1 sample-app:1.0",
      purpose: "Konteynerni orqa fonda (background daemon) ishga tushiradi va terminalni bloklamasdan boshqaruvni foydalanuvchiga qaytaradi.",
      withoutRisk: "Agar -d berilmasa, konteyner foreground (old) rejimda ochilib terminalni band qilib qo'yadi. Terminal yopilsa yoki Ctrl+C bosilsa, butun veb-server ham to'xtab qoladi."
    },
    {
      cmd: "docker run",
      flag: "--name",
      name: "Container Name (Konteynerga nom berish)",
      syntax: "docker run -d --name app1 sample-app:1.0",
      purpose: "Konteynerga tasodifiy nom (masalan: cranky_darwin) o'rniga aniq mantiqiy nom (app1, mypg) beradi.",
      withoutRisk: "Agar --name ko'rsatilmasa, Docker tasodifiy nom generatsiya qiladi. Keyingi skriptlar, stop/rm buyruqlari va loglarni ko'rishda konteynerni topish murakkablashadi."
    },
    {
      cmd: "docker run",
      flag: "-p 127.0.0.1:5000:5000",
      name: "Port Publishing & Host Binding (Port yo'naltirish & IP chegaralash)",
      syntax: "docker run -d -p 127.0.0.1:5000:5000 sample-app:1.0",
      purpose: "Konteynerning ichki 5000-portini faqat lokal mashinaning (127.0.0.1) 5000-portiga bog'laydi.",
      withoutRisk: "Agar '127.0.0.1:' qo'yilmay faqat '-p 5000:5000' berilsa, port barcha tashqi tarmoq interfeyslariga (0.0.0.0) ochilib ketadi va butun internetga xavfsizlik tahdidini tug'diradi."
    },
    {
      cmd: "docker run",
      flag: "-e",
      name: "Environment Variable (Muhit o'zgaruvchisini o'rnatish)",
      syntax: "docker run -d -e APP_ENV=dev sample-app:1.0",
      purpose: "Konteyner ichidagi ilovaga muhit parametrini (masalan: APP_ENV=dev yoki POSTGRES_PASSWORD) uzatadi.",
      withoutRisk: "Agar -e berilmasa, dastur Dockerfile'dagi default qiymatni oladi yoki PostgreSQL kabi ma'lumotlar bazasi parol berilmagani uchun darhol qulab (crash) to'xtaydi."
    },
    {
      cmd: "docker run",
      flag: "--rm",
      name: "Auto-Remove (Tugagach o'z-o'zidan o'chirish)",
      syntax: "docker run --rm --name japp java-multistage:1.0",
      purpose: "Vazifasini bajarib bo'lgan konteyner to'xtashi bilan uning diskdagi qoldiqlarini avtomatik o'chirib tashlaydi.",
      withoutRisk: "Agar qisqa muddatli bir martalik vazifalarda --rm qo'yilmasa, yuzlab o'lik (exited) konteynerlar to'planib qolib, disk maydonini to'ldirib yuboradi."
    },
    {
      cmd: "docker run",
      flag: "-v pgdata:/var/lib/postgresql/data",
      name: "Volume Mount (Doimiy xotirani ulash)",
      syntax: "docker run -d -v pgdata:/var/lib/postgresql/data postgres:15",
      purpose: "Konteyner o'chirib yuborilsa ham, uning ma'lumotlar bazasi fayllari xostdagi 'pgdata' nomli hajmda omon qolishini ta'minlaydi.",
      withoutRisk: "DIQQAT: Agar -v bo'lmasa, barcha jadvallar konteynerning vaqtinchalik yozish qatlamida (writable layer) saqlanadi. 'docker rm' bajarilishi bilan butun baza yo'qoladi!"
    },
    {
      cmd: "docker exec",
      flag: "-it",
      name: "Interactive TTY (Interaktiv terminal rejimi)",
      syntax: "docker exec -it app1 sh",
      purpose: "Ishlab turgan konteyner ichida interaktiv buyruq qobig'ini (sh/bash) yoki dasturni (psql) ochadi.",
      withoutRisk: "Agar -it (interactive + tty) berilmasa, kiritish oqimi (STDIN) ulanmaydi, terminal darhol yopiladi va konteyner ichida interaktiv buyruq kiritib bo'lmaydi."
    },
    {
      cmd: "docker stats",
      flag: "--no-stream",
      name: "Static Snapshot (Bir martalik o'lchov olish)",
      syntax: "docker stats --no-stream app1",
      purpose: "Konteynerning CPU va RAM ishlatilishini jonli strim qilmasdan, aynan hozirgi lahzadagi bitta o'lchov natijasini chiqaradi.",
      withoutRisk: "Agar --no-stream qo'yilmasa, buyruq terminalni cheksiz monitor rejimiga olib kiradi va avtomatlashtirish skriptlari uning tugashini kutib qotib qoladi."
    },
    {
      cmd: "docker container ls",
      flag: "-as",
      name: "All Containers with Sizes (Barcha konteynerlar va hajmlar)",
      syntax: "docker container ls -as",
      purpose: "To'xtagan konteynerlarni ham chiqaradi va har bir konteynerning yoziladigan qatlami (writable layer) qancha disk egallaganini ko'rsatadi.",
      withoutRisk: "Oddiy 'docker ps' faqat ishlab turganlarni ko'rsatadi va qaysi to'xtagan konteyner qancha disk joyini yeb yotganini aniqlab bo'lmaydi."
    },
    {
      cmd: "docker volume",
      flag: "create",
      name: "Create Named Volume (Nomli doimiy hajm yaratish)",
      syntax: "docker volume create pgdata",
      purpose: "Docker tomonidan boshqariladigan mustaqil va xavfsiz fayl saqlash hududini barpo etadi.",
      withoutRisk: "Hajm oldindan yaratilmasa yoki nazorat qilinmasa, anonim vaqtinchalik hajmlar hosil bo'lib, zaxira nusxa (backup) olish qiyinlashadi."
    },
    {
      cmd: "docker volume",
      flag: "rm",
      name: "Remove Volume (Doimiy hajmni o'chirish)",
      syntax: "docker volume rm pgdata",
      purpose: "Foydalanilmayotgan doimiy ma'lumotlar hajmini diskdan butunlay tozalaydi.",
      withoutRisk: "Hajmni o'chirishdan oldin konteyner to'xtatilib o'chirilgan bo'lishi kerak. Ehtiyotsizlik bilan ishlatilsa barcha saqlangan PostgreSQL ma'lumotlari ketadi."
    },
    {
      cmd: "docker compose",
      flag: "config",
      name: "Validate Configuration (compose.yaml sintaksisini tekshirish)",
      syntax: "docker compose config",
      purpose: "compose.yaml faylidagi bo'shliqlar (indentation), portlar va o'zgaruvchilarni servislarni ishga tushirmasdan tekshiradi.",
      withoutRisk: "Agar tekshirilmasa, noto'g'ri YAML tab/space xatosi tufayli konteynerlar yarimta ko'tarilib, nosozlik keltirib chiqaradi."
    },
    {
      cmd: "docker compose",
      flag: "up -d --build",
      name: "Build & Detach Orchestration (Qurish va fonda ko'tarish)",
      syntax: "docker compose up -d --build",
      purpose: "Kod o'zgargan bo'lsa yangi obrazlarni quradi va barcha servislarni (web, db) fonda bir vaqtning o'zida ishga tushiradi.",
      withoutRisk: "Agar --build qo'yilmasa, Docker Compose eski keshdagi obrazni ko'taradi va yangi kiritilgan kod o'zgarishlari kuchga kirmay qoladi."
    },
    {
      cmd: "docker compose",
      flag: "down",
      name: "Tear Down Services (Servislarni xavfsiz to'xtatish)",
      syntax: "docker compose down",
      purpose: "Barcha konteynerlar va umumiy tarmoqni to'xtatib tozalaydi, lekin nomli ma'lumotlar bazasi hajmini saqlab qoladi.",
      withoutRisk: "DIQQAT: Agar 'down -v' berilsa, hajmlar ham o'chib ketadi! Odatiy 'down' esa ma'lumotlarni xavfsiz saqlaydi."
    },
    {
      cmd: "pip install",
      flag: "--no-cache-dir",
      name: "Disable Cache (Keshni o'chirish)",
      syntax: "pip install --no-cache-dir -r requirements.txt",
      purpose: "Yuklab olingan pip paketlarining g'ildiraklarini (wheels) keshga saqlamasdan, Docker obraz hajmini o'nlab megabaytga qisqartiradi.",
      withoutRisk: "Agar --no-cache-dir bo'lmasa, ~/.cache papkasi Docker qatlamiga kirib, yakuniy obraz hajmini asossiz kattalashtirib yuboradi."
    },
    {
      cmd: "psql",
      flag: "-c",
      name: "Command String (Bitta SQL so'rovini bajarish)",
      syntax: "docker exec mypg psql -U postgres -c \"SELECT * FROM students;\"",
      purpose: "Interaktiv psql konsoliga kirmasdan, bitta SQL buyrug'ini bajarib natijani to'g'ridan-to'g'ri terminalga chiqaradi.",
      withoutRisk: "Agar -c bo'lmasa, psql interaktiv sessiyani kutadi va avtomatlashtirilgan test skriptlari yoki terminal quvuri (pipe) to'xtab qoladi."
    },
    {
      cmd: "curl",
      flag: "-fsSL",
      name: "Fail Silent Show-Error Follow-Location (Xavfsiz yuklab olish)",
      syntax: "curl -fsSL https://get.docker.com -o get-docker.sh",
      purpose: "HTTP xatolarida xatoni bildiradi (-f), progress barni yashiradi (-s), lekin nosozlik bo'lsa xatoni ko'rsatadi (-S) va redirectlarni kuzatadi (-L).",
      withoutRisk: "Oddiy curl ishlatilsa, 404 HTML xato sahifasi ham skript fayliga yozilib qoladi va 'sh ./get-docker.sh' bajarilganda sintaksis halokati yuz beradi."
    },
    {
      cmd: "usermod",
      flag: "-aG docker",
      name: "Append Docker Group (Admin guruhini qo'shish)",
      syntax: "sudo usermod -aG docker \"$USER\"",
      purpose: "Foydalanuvchining mavjud guruhlariga teginmagan holda 'docker' guruhiga kiritadi.",
      withoutRisk: "DIQQAT: Agar -a unutilsa, foydalanuvchi barcha guruhlaridan mahrum bo'lib, faqat bitta docker guruhida qoladi va sudo huquqini yo'qotadi!"
    }
  ];

  /**
   * Generates the 5-point Pedagogical Command Card HTML for Week 6 questions.
   */
  function formatCommandCard(anatomy) {
    if (!anatomy) return '';

    const flagsList = (anatomy.flags && anatomy.flags.length > 0)
      ? anatomy.flags.map(f => `
          <div class="cmd-flag-row">
            <div class="cmd-flag-top">
              <span class="cmd-flag-tag">${escapeHtml(f.flag)}</span>
              <span class="cmd-flag-name">${escapeHtml(f.name || '')}</span>
              <span class="cmd-flag-pos">${escapeHtml(f.position || 'Kalit/Bayroq')}</span>
            </div>
            <div class="cmd-flag-purpose">${escapeHtml(f.purpose || '')}</div>
            ${f.withoutRisk ? `<div class="cmd-flag-risk"><b>⚠️ Agar bu bayroq bo'lmasa nima bo'ladi:</b> ${escapeHtml(f.withoutRisk)}</div>` : ''}
          </div>
        `).join('')
      : `<div class="cmd-sec-text">Standart buyruq yoki formula (Qo'shimcha bayroqsiz bajariladi).</div>`;

    return `
      <div class="cmd-section">
        <div class="cmd-sec-head cyan">🎯 1. BUYRUQ/FORMULA VAZIFASI:</div>
        <div class="cmd-sec-text">${escapeHtml(anatomy.commandPurpose || '')}</div>
      </div>

      <div class="cmd-section">
        <div class="cmd-sec-head amber">🏷️ 2. BAYROQLARNING O'RNI VA STRUKTURASI:</div>
        <div class="cmd-flag-grid">
          ${flagsList}
        </div>
      </div>

      <div class="cmd-section">
        <div class="cmd-sec-head emerald">⏱️ 3. QACHON VA NIMA MAQSADDA ISHLATILADI:</div>
        <div class="cmd-sec-text">${escapeHtml(anatomy.whenToUse || '')}</div>
      </div>

      <div class="cmd-section">
        <div class="cmd-sec-head ruby">⚠️ 4. AGAR SHU BAYROQLAR BO'LMASA NIMA BO'LADI (FARQI):</div>
        <div class="cmd-sec-text">${escapeHtml(anatomy.omissionRisk || '')}</div>
      </div>

      <div class="cmd-section">
        <div class="cmd-sec-head cyan">📋 5. NAMUNA SINTAKSIS & TAHLIL:</div>
        <div class="cmd-sec-text"><code>${escapeHtml(anatomy.syntaxExample || '')}</code></div>
      </div>
    `;
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  return {
    MASTER_FLAG_DICTIONARY,
    formatCommandCard
  };
});
