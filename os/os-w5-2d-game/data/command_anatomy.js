/**
 * WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 5 COMMAND & FLAG ANATOMY ENGINE
 * "Buyruq & Bayroqlar Tahlili" (5-Point Flag Anatomy & Omission Risk Breakdown)
 * Topics: CPU Scheduling, Memory Management, Systemd Timers, Crontab & Docker Pods.
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.COMMAND_ANATOMY_W5 = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {

  // Master Flag Reference Dictionary (Flag Anatomy Dictionary) for Week 5
  const MASTER_FLAG_DICTIONARY = [
    {
      cmd: "crontab",
      flag: "-l",
      name: "List cron jobs (Jadvalni ko'rish)",
      syntax: "crontab -l",
      purpose: "Joriy foydalanuvchining barcha faol rejalashtirilgan cron vazifalari ro'yxatini ekranga chiqaradi.",
      withoutRisk: "Agar -l ko'rsatilmasa, crontab buyrug'i standart kiritishni (STDIN) kutib turadi yoki xatolik chiqaradi. Tizim jadvalini bilmasdan yangi vazifa qo'shish xavfli."
    },
    {
      cmd: "crontab",
      flag: "-e",
      name: "Edit cron jobs (Tahrirlash rejimi)",
      syntax: "crontab -e",
      purpose: "Foydalanuvchi crontab faylini birlamchi matn muharririda (nano yoki vim) xavfsiz tahrirlash uchun ochadi.",
      withoutRisk: "Agar -e bo'lmasa, faylni to'g'ridan-to'g'ri /var/spool/cron/ dan tahrirlash kerak bo'ladi, bu esa sintaksis tekshiruvini (crontab validity check) chetlab o'tib, buzilishga olib keladi."
    },
    {
      cmd: "crontab",
      flag: "-r",
      name: "Remove crontab (Jadvalni butunlay o'chirish)",
      syntax: "crontab -r",
      purpose: "Foydalanuvchining barcha cron vazifalarini tizimdan butunlay o'chirib tashlaydi.",
      withoutRisk: "DIQQAT: -e o'rniga adashib -r bosilsa, hech qanday so'rovsiz barcha rejalar o'chib ketadi! Qayta tiklashning iloji yo'q."
    },
    {
      cmd: "systemctl",
      flag: "enable --now",
      name: "Enable & Immediate Start (Avtostart va Darhol Yoqish)",
      syntax: "sudo systemctl enable --now disk-check.timer",
      purpose: "Taymer yoki xizmatni ham operatsion tizim yuklanishiga (boot) avtomatik qo'shadi, ham aynan hozirgi daqiqadan faollashtiradi.",
      withoutRisk: "Agar --now ko'rsatilmasa, faqat 'enable' bo'ladi. Tizim qayta yuklanguncha (reboot) taymer ishga tushmaydi va hozirgi reja bajarilmay qoladi."
    },
    {
      cmd: "systemctl",
      flag: "daemon-reload",
      name: "Reload Systemd Units (Konfiguratsiyani qayta o'qish)",
      syntax: "sudo systemctl daemon-reload",
      purpose: "Yangi yaratilgan yoki tahrirlangan .service/.timer fayllarini diskdan Systemd xotirasiga qayta yuklaydi.",
      withoutRisk: "Agar daemon-reload bajarilmasa, Systemd eski keshdagi sozlamalarni ushlab turadi va kiritilgan yangi o'zgarishlar e'tiborga olinmaydi."
    },
    {
      cmd: "systemd-analyze",
      flag: "verify",
      name: "Verify Unit Syntax (Sintaksisni tekshirish)",
      syntax: "systemd-analyze verify /etc/systemd/system/cleanup.service",
      purpose: "Unit faylidagi xatoliklar, xato kalit so'zlar va direktivalarni xizmatni yoqmasdan turib diagnostika qiladi.",
      withoutRisk: "Agar tekshirilmasa, sintaksisdagi bitta xato harf tufayli taymer 'Failed' holatiga tushadi va ishlab chiqarishdagi muhim tozalash to'xtab qoladi."
    },
    {
      cmd: "journalctl",
      flag: "-u",
      name: "Unit Filter (Faqat bitta xizmat loglari)",
      syntax: "journalctl -u cleanup.timer",
      purpose: "Faqat ko'rsatilgan unit (timer yoki service) qaydlarini ajratib ko'rsatadi.",
      withoutRisk: "Agar -u ko'rsatilmasa, journalctl butun Linux tizimining millionlab umumiy loglarini chiqarib, kerakli taymer xabarini topishni qiyinlashtiradi."
    },
    {
      cmd: "df",
      flag: "--output=pcent",
      name: "Output Percentage Only (Faqat foiz ustuni)",
      syntax: "df / --output=pcent",
      purpose: "df natijasidagi ortiqcha ustunlarni (Blocks, Used, Available) yashirib, faqat disk to'lish foizini qaytaradi.",
      withoutRisk: "Agar --output bo'lmasa, df barcha 6 ta ustunni chiqaradi. Skriptda foizni ajratib olish uchun murakkab awk/cut filtrlari talab etiladi."
    },
    {
      cmd: "tail",
      flag: "-n 1",
      name: "Last Line Only (Faqat oxirgi qator)",
      syntax: "tail -n 1",
      purpose: "Chiqarilgan matnning faqat so'nggi bitta qatorini oladi (jadval sarlavhasini tashlab yuboradi).",
      withoutRisk: "Agar -n 1 bo'lmasa, jadvalning 'Use%' sarlavhasi ham o'zgaruvchiga tushib qoladi va bash butun son taqqoslashida (integer expression) sintaksis xatosi beradi."
    },
    {
      cmd: "tr",
      flag: "-d",
      name: "Delete Characters (Belgilarni qirqish)",
      syntax: "tr -d ' %'",
      purpose: "Matn tarkibidagi bo'sh joylar (spaces) va '%' belgisini o'chirib, sof raqamni (masalan: 87) qoldiradi.",
      withoutRisk: "Agar -d ishlatilmasa, o'zgaruvchida '87%' qoladi va bash '-gt 85' shartida xato beradi, chunki '%' belgisi arifmetik raqam emas."
    },
    {
      cmd: "curl",
      flag: "-s",
      name: "Silent Mode (Sokin rejim)",
      syntax: "curl -s",
      purpose: "Yuklash foizi, tezlik o'lchagich va progress-barni yashiradi.",
      withoutRisk: "Agar -s bo'lmasa, cron skripti har 5 daqiqada log fayliga ulkan progress grafigini yozib, diskni tezda to'ldirib yuboradi."
    },
    {
      cmd: "curl",
      flag: "-X POST",
      name: "HTTP POST Request (Ma'lumot yuborish)",
      syntax: "curl -s -X POST 'https://api.telegram.org/...'",
      purpose: "Serverga yangi ma'lumot jo'natish uchun HTTP metodini POST ga o'zgartiradi.",
      withoutRisk: "Agar -X POST ko'rsatilmasa, standart GET so'rovi ketadi va ko'plab REST API lari (jumladan Telegram bot sendMessage) so'rovni rad etadi."
    },
    {
      cmd: "curl",
      flag: "-d",
      name: "Data Payload (POST parametrlar)",
      syntax: "curl -d 'chat_id=123' -d 'text=Alert'",
      purpose: "So'rov tanasida (body) xabar matni va qabul qiluvchi identifikatorini uzatadi.",
      withoutRisk: "Agar -d bo'lmasa, API bo'sh so'rov oladi va 'chat_id missing' xatosi bilan xabar jo'natilmay qoladi."
    },
    {
      cmd: "docker",
      flag: "run -d",
      name: "Detached Mode (Orqa fonda ishga tushirish)",
      syntax: "docker container run -d --name web nginx",
      purpose: "Konteynerni mustaqil fon rejimida (daemon) yurgazadi va joriy terminalni bo'shatadi.",
      withoutRisk: "Agar -d bo'lmasa, konteyner terminalni bloklab oladi. Terminal yopilsa yoki Ctrl+C bosilsa, konteyner ham darhol to'xtaydi."
    },
    {
      cmd: "docker",
      flag: "run -it",
      name: "Interactive & Pseudo-TTY (Interaktiv terminal)",
      syntax: "docker container run -it ubuntu bash",
      purpose: "-i (STDIN ochiq ushlash) va -t (terminal tty emulyatori) orqali konteyner ichida to'g'ridan-to'g'ri interaktiv buyruq kiritish imkonini beradi.",
      withoutRisk: "Agar -it bo'lmasa, bash buyrug'i kiritishni kutmasdan darhol exit (0) kodi bilan o'chib qoladi."
    },
    {
      cmd: "docker",
      flag: "--name",
      name: "Custom Container Name (Maxsus nomlash)",
      syntax: "docker container run --name my-ubuntu ubuntu",
      purpose: "Konteynerga inson tushunadigan aniq nom beradi (masalan: my-ubuntu, nginx8888).",
      withoutRisk: "Agar --name ko'rsatilmasa, Docker tasodifiy nom beradi (masalan: clever_curie, zen_newton). Keyinchalik skriptlarda konteynerni boshqarish qiyinlashadi."
    },
    {
      cmd: "docker",
      flag: "-p",
      name: "Port Forwarding (Portlarni yo'naltirish)",
      syntax: "docker container run -d -p 8888:80 --name web nginx",
      purpose: "Xost mashinasining 8888-portini konteyner ichidagi 80-portga bog'laydi (HostPort:ContainerPort).",
      withoutRisk: "Agar -p ko'rsatilmasa, konteyner ichidagi veb-server faqat ichki Docker tarmog'ida yopiq qoladi; tashqi brauzer yoki localhost:8888 orqali unga ulanib bo'lmaydi!"
    },
    {
      cmd: "docker",
      flag: "ls -a",
      name: "List All Containers (Barcha konteynerlar ro'yxati)",
      syntax: "docker container ls -a",
      purpose: "Nafaqat faol ishlayotgan, balki to'xtatilgan (Exited) konteynerlarni ham to'liq ko'rsatadi.",
      withoutRisk: "Agar -a bo'lmasa, faqat ishlayotganlar chiqadi. Xato tufayli to'xtab qolgan (crash bo'lgan) konteynerlarni ko'rib bo'lmaydi."
    },
    {
      cmd: "docker",
      flag: "exec -it",
      name: "Execute in Running Container (Ishlayotgan konteyner ichiga kirish)",
      syntax: "docker container exec -it my-ubuntu bash",
      purpose: "Konteynerni to'xtatmasdan, uning ichida yangi bash sessiyasini ishga tushirib kiradi.",
      withoutRisk: "Agar exec ishlatilmasa, konteyner ichidagi fayllarni tekshirish yoki uning jarayonlariga aralashishning iloji bo'lmaydi."
    },
    {
      cmd: "docker",
      flag: "attach",
      name: "Attach to Main Process (Asosiy jarayonga ulanish)",
      syntax: "docker container attach my-ubuntu",
      purpose: "Konteynerning 1-PID ga ega asosiy ishchi jarayonining kirish/chiqish oqimiga to'g'ridan-to'g'ri ulanadi.",
      withoutRisk: "DIQQAT: attach rejimida ehtiyotsizlik bilan Ctrl+C bosilsa, butun konteyner to'xtaydi! Chiqish uchun 'Ctrl+P, Ctrl+Q' kombinatsiyasidan foydalanish lozim."
    },
    {
      cmd: "docker",
      flag: "logs -f",
      name: "Follow Container Logs (Jonli log kuzatish)",
      syntax: "docker container logs -f my-ubuntu",
      purpose: "Konteyner stdout/stderr xabarlarini jonli efir rejimida (real-time stream) ekranga uzatadi.",
      withoutRisk: "Agar -f bo'lmasa, faqat o'tmishdagi loglarni ko'rsatib chiqib ketadi; yangi kelayotgan veb-so'rovlarni real vaqtda kuzatib bo'lmaydi."
    },
    {
      cmd: "docker",
      flag: "stats",
      name: "Container Resource Metrics (Resurslar statistikasi)",
      syntax: "docker stats",
      purpose: "Barcha faol konteynerlarning CPU, RAM, Tarmoq I/O va Disk sarfini real vaqtda foizlarda ko'rsatadi.",
      withoutRisk: "Agar stats bo'lmasa, qaysi konteyner xotira sizishiga (memory leak) olib kelayotganini aniqlash qiyin bo'ladi."
    },
    {
      cmd: "docker",
      flag: "rm -f",
      name: "Force Remove Container (Majburiy o'chirish)",
      syntax: "docker container rm -f my-ubuntu",
      purpose: "Ishlayotgan konteynerga avval SIGKILL beradi va darhol tizimdan butunlay o'chirib tashlaydi.",
      withoutRisk: "Agar -f bo'lmasa, Docker 'You cannot remove a running container' xatosi bilan o'chirishdan bosh tortadi. Avval stop qilish shart bo'ladi."
    },
    {
      cmd: "docker",
      flag: "rename",
      name: "Rename Container (Nomini o'zgartirish)",
      syntax: "docker container rename old_name new_name",
      purpose: "Mavjud konteyner identifikatori va sozlamalarini saqlagan holda uning nomini o'zgartiradi.",
      withoutRisk: "Agar rename bo'lmasa, yangi nom berish uchun konteynerni o'chirib noldan boshqatdan run qilishga to'g'ri keladi."
    },
    {
      cmd: "usermod",
      flag: "-aG docker",
      name: "Append Group (Docker guruhiga qo'shish)",
      syntax: "sudo usermod -aG docker $USER",
      purpose: "Foydalanuvchini mavjud guruhlarini saqlagan holda 'docker' guruhiga qo'shadi, bu esa sudonisiz Docker buyruqlarini berish huquqini taqdim etadi.",
      withoutRisk: "DIQQAT: Agar -a (append) unutilib, faqat '-G docker' yozilsa, foydalanuvchi qolgan barcha guruhlaridan (sudo, adm, dev) chiqarib yuboriladi va tizimda adminlik huquqini yo'qotadi!"
    },
    {
      cmd: "find",
      flag: "-mtime +1",
      name: "Modified Time Filter (Eski fayllar)",
      syntax: "find /tmp -type f -mtime +1 -ls",
      purpose: "So'nggi 24 soatdan (1 kundan) ko'proq vaqt oldin o'zgartirilgan fayllarni ajratadi.",
      withoutRisk: "Agar -mtime ko'rsatilmasa, hozirgina yaratilgan yangi fayllar ham o'chib ketishi xavfi tug'iladi."
    },
    {
      cmd: "find",
      flag: "-delete",
      name: "Delete Matched Files (Haqiqiy o'chirish)",
      syntax: "find /tmp -type f -mtime +1 -delete",
      purpose: "Qidiruv shartiga to'g'ri kelgan fayllarni xavfsiz o'chiradi.",
      withoutRisk: "Avval -ls orqali qaysi fayllar o'chishini tekshirib olmasdan -delete bersangiz, adashib butun katalog fayllari o'chib ketishi mumkin."
    }
  ];

  /**
   * Generates the 5-point Pedagogical Command Card HTML for any question.
   */
  function formatCommandCard(anatomy, isCompact) {
    if (!anatomy) return '';

    const flagsList = (anatomy.flags && anatomy.flags.length > 0)
      ? anatomy.flags.map(f => `
          <div class="cmd-flag-row">
            <div class="cmd-flag-top">
              <span class="cmd-flag-tag">${escapeHtml(f.flag)}</span>
              <span class="cmd-flag-name">${escapeHtml(f.name || '')}</span>
              <span class="cmd-flag-pos">${escapeHtml(f.position || 'Buyruq kaliti')}</span>
            </div>
            <div class="cmd-flag-purpose">${escapeHtml(f.purpose || '')}</div>
            ${f.withoutRisk ? `<div class="cmd-flag-risk"><b>⚠️ Agar bu bayroq bo'lmasa nima bo'ladi:</b> ${escapeHtml(f.withoutRisk)}</div>` : ''}
          </div>
        `).join('')
      : `<div class="cmd-sec-text">Standart buyruq (Qo'shimcha bayroqsiz bajariladi).</div>`;

    return `
      <div class="cmd-section">
        <div class="cmd-sec-head cyan">🎯 1. BUYRUQNING VAZIFASI:</div>
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
