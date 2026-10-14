/**
 * DATABASE SYSTEMS ACADEMY — 2-HAFTA: 2D RELATSION ATELYE DVIGATELI
 * Korporativ Bosh Ofis & Bosh Arxitektor Atlas Konsultatsiya Zali
 * Tabiiy yong'oq daraxti, relyatsion sxemalar, jadvallar va jonli me'moriy suhbat
 */

class Relational2DEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");

    this.width = 860;
    this.height = 180;

    this.tick = 0;
    this.particles = [];
    this.activeAlert = null;
    this.alertTimer = 0;

    // Mentor: Professor Atlas
    this.mentor = {
      x: 140,
      y: 110,
      name: "Bosh Arxitektor Atlas",
      speech: "Har bir Tashqi Kalit (FK) qaysi Ota jadvalning PK siga qarashini aniqlang!",
      speechTimer: 200
    };

    // Client
    this.client = {
      x: 720,
      y: 110,
      name: "Mijoz",
      role: "Tizimlar Rahbari",
      speech: "Bizning relatsion jadvallarimiz 1NF dan to'g'ri o'tdimi?",
      speechTimer: 200
    };

    // Student Modeler
    this.student = {
      x: 430,
      y: 115,
      speech: "Crow's foot bog'lanish chiziqlarini tortyapman...",
      speechTimer: 180
    };

    this.resize();
    window.addEventListener('resize', () => this.resize());

    this.startLoop();
  }

  resize() {
    if (!this.canvas) return;
    const rect = this.canvas.getBoundingClientRect();
    const newWidth = Math.max(320, Math.round(rect.width || this.canvas.offsetWidth || 860));
    this.width = this.canvas.width = newWidth;
    this.height = this.canvas.height = 180;

    const centerX = this.width / 2;
    this.student.x = centerX;
    this.student.y = 115;

    const sideDist = Math.min(260, Math.max(100, this.width * 0.32));
    this.mentor.x = Math.max(65, Math.round(centerX - sideDist));
    this.mentor.y = 110;
    this.client.x = Math.min(this.width - 65, Math.round(centerX + sideDist));
    this.client.y = 110;
  }

  setClient(name, role, quote) {
    this.client.name = name || "Mijoz";
    this.client.role = role || "Buyurtmachi";
    if (quote) {
      this.client.speech = quote;
      this.client.speechTimer = 300;
    }
  }

  setMentorSpeech(text) {
    this.mentor.speech = text;
    this.mentor.speechTimer = 260;
  }

  triggerSuccess(text = "Relyatsion Sxema Tasdiqlandi!") {
    this.activeAlert = `✓ ${text}`;
    this.alertTimer = 160;

    for (let i = 0; i < 40; i++) {
      this.particles.push({
        x: this.student.x + (Math.random() - 0.5) * 160,
        y: 80 + (Math.random() - 0.5) * 40,
        vx: (Math.random() - 0.5) * 5,
        vy: -1.5 - Math.random() * 3,
        life: 45 + Math.random() * 25,
        color: Math.random() > 0.5 ? "#c8a96e" : "#5c8d73",
        size: 2.5 + Math.random() * 3
      });
    }
  }

  triggerError(text = "Sxemada xatolik bor!") {
    this.activeAlert = `✗ ${text}`;
    this.alertTimer = 140;
  }

  startLoop() {
    const loop = () => {
      this.update();
      this.draw();
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }

  update() {
    this.tick++;

    if (this.alertTimer > 0) {
      this.alertTimer--;
      if (this.alertTimer <= 0) this.activeAlert = null;
    }

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life--;
      if (p.life <= 0) {
        this.particles.splice(i, 1);
      }
    }

    if (this.tick % 500 === 0 && !this.activeAlert) {
      const tips = [
        "1:* munosabatda: FK har doim 'Ko'p' (Bola) tomonidagi jadvalga qo'yiladi!",
        "*:* (M:N) munosabatda: ikkala PK ni birlashtiruvchi alohida oraliq jadval ochiladi!",
        "Zaif entitiy: ota PK si bilan birgalikda kompozit PK (PK,FK1) hosil qiladi!",
        "Crow's foot: ota tomonga || (qat'iy bitta), bola tomonga esa qarg'a oyog'i qo'yiladi.",
        "Subklasslar: {Mandatory, Or} holatida Option 8A yoki 8B me'moriy qoidasini tanlang."
      ];
      this.mentor.speech = tips[Math.floor(Math.random() * tips.length)];
      this.mentor.speechTimer = 220;
    }
  }

  draw() {
    const ctx = this.ctx;
    if (!ctx) return;

    ctx.clearRect(0, 0, this.width, this.height);

    const grad = ctx.createLinearGradient(0, 0, 0, this.height);
    grad.addColorStop(0, "#191512");
    grad.addColorStop(0.5, "#251e19");
    grad.addColorStop(1, "#181411");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, this.width, this.height);

    ctx.strokeStyle = "rgba(200, 169, 110, 0.12)";
    ctx.lineWidth = 1;
    for (let x = 40; x < this.width; x += 60) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 110);
      ctx.stroke();
    }

    const centerX = this.student.x || this.width / 2;

    // Center Conference Table (Proportionate, NOT Stretched!)
    const deskW = Math.min(240, Math.max(160, this.width * 0.42));
    const deskH = 48;
    const deskX = Math.round(centerX - deskW / 2);
    const deskY = 112;

    ctx.save();
    ctx.fillStyle = "#2c221a";
    ctx.strokeStyle = "#c8a96e";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(deskX, deskY, deskW, deskH, [10, 10, 6, 6]);
    ctx.fill();
    ctx.stroke();

    // Table schema draft paper on desk
    const bpW = Math.min(150, deskW - 32);
    const bpH = 28;
    const bpX = Math.round(centerX - bpW / 2);
    const bpY = deskY + 9;

    ctx.fillStyle = "#1e293b";
    ctx.strokeStyle = "rgba(200, 169, 110, 0.4)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(bpX, bpY, bpW, bpH, 4);
    ctx.fill();
    ctx.stroke();

    // Miniature draw.io table marks
    ctx.strokeStyle = "#dfc288";
    ctx.lineWidth = 1;
    ctx.strokeRect(bpX + 8, bpY + 5, 50, 18);
    ctx.strokeRect(bpX + bpW - 58, bpY + 5, 50, 18);
    ctx.beginPath();
    ctx.moveTo(bpX + 58, bpY + 14);
    ctx.lineTo(bpX + bpW - 58, bpY + 14);
    ctx.stroke();

    ctx.restore();

    // Characters
    this.drawCharacter(ctx, this.mentor.x, this.mentor.y, "#334155", "#c8a96e", "🏛️ Atlas");
    this.drawCharacter(ctx, this.student.x, this.student.y, "#1e3a5f", "#60a5fa", "👨‍💻 Siz");
    this.drawCharacter(ctx, this.client.x, this.client.y, "#4a2820", "#d97706", `💼 ${this.client.name}`);

    // Speech Balloons
    if (this.mentor.speech && this.mentor.speechTimer > 0) {
      this.drawSpeechBubble(ctx, this.mentor.x, this.mentor.y - 48, this.mentor.speech, "#c8a96e", "#1b1612");
    }

    if (this.client.speech && this.client.speechTimer > 0) {
      this.drawSpeechBubble(ctx, this.client.x, this.client.y - 48, this.client.speech, "#d97706", "#1c1511");
    }

    // Active Alert
    if (this.activeAlert) {
      ctx.save();
      const isSuccess = this.activeAlert.startsWith("✓");
      ctx.fillStyle = isSuccess ? "rgba(92, 141, 115, 0.92)" : "rgba(196, 109, 88, 0.92)";
      ctx.strokeStyle = isSuccess ? "#84b89c" : "#e08d7a";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(230, 20, 400, 34, 8);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 13px 'Inter', sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(this.activeAlert, 430, 42);
      ctx.restore();
    }

    // Celebration Particles
    this.particles.forEach(p => {
      ctx.save();
      ctx.fillStyle = p.color;
      ctx.globalAlpha = Math.max(0, p.life / 70);
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });
  }

  drawCharacter(ctx, x, y, suitColor, hairColor, label) {
    ctx.save();
    ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
    ctx.beginPath();
    ctx.ellipse(x, y + 36, 20, 6, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = suitColor;
    ctx.strokeStyle = "#1b1612";
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.roundRect(x - 14, y + 6, 28, 30, [6, 6, 2, 2]);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#fbd38d";
    ctx.beginPath();
    ctx.arc(x, y - 4, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = hairColor;
    ctx.beginPath();
    ctx.arc(x, y - 8, 12, Math.PI, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#c4bbb0";
    ctx.font = "600 10px 'Inter', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(label, x, y + 48);

    ctx.restore();
  }

  drawSpeechBubble(ctx, x, y, text, borderColor, bgColor) {
    ctx.save();
    ctx.font = "500 11.5px 'Inter', sans-serif";

    let display = text;
    if (display.length > 55) display = display.substring(0, 52) + "...";

    const textWidth = ctx.measureText(display).width;
    const pad = 10;
    const bubbleW = textWidth + pad * 2;
    const bubbleH = 24;

    let bx = x - bubbleW / 2;
    bx = Math.max(15, Math.min(bx, this.width - bubbleW - 15));
    const by = y;

    ctx.fillStyle = bgColor;
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(bx, by, bubbleW, bubbleH, 6);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x - 4, by + bubbleH);
    ctx.lineTo(x, by + bubbleH + 6);
    ctx.lineTo(x + 4, by + bubbleH);
    ctx.fillStyle = bgColor;
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#f2ede4";
    ctx.textAlign = "center";
    ctx.fillText(display, bx + bubbleW / 2, by + 16);

    ctx.restore();
  }
}

window.Relational2DEngine = Relational2DEngine;
