/**
 * DATABASE SYSTEMS ACADEMY — 1-HAFTA: 2D KONSEPTUAL ATELYE DVIGATELI
 * Korporativ Bosh Ofis & Bosh Arxitektor Atlas Konsultatsiya Zali
 * Tabiiy yong'oq daraxti, shinam me'moriy chizmachilik stoli, mijozlar va jonli suhbat
 */

class Atelier2DEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");

    this.width = 860;
    this.height = 180;
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    this.tick = 0;
    this.particles = [];
    this.activeAlert = null;
    this.alertTimer = 0;

    // Mentor: Professor Atlas
    this.mentor = {
      x: 140,
      y: 110,
      name: "Bosh Arxitektor Atlas",
      speech: "Har bir biznes qoidani diqqat bilan o'rganing!",
      speechTimer: 200
    };

    // Client
    this.client = {
      x: 720,
      y: 110,
      name: "Mijoz",
      role: "Boshqaruv Raisi",
      avatar: "banker",
      speech: "Bizning filiallarimiz va xodimlarimiz qanday bog'lanadi?",
      speechTimer: 200
    };

    // Student Modeler
    this.student = {
      x: 430,
      y: 115,
      speech: "UML multiplisitiyalarini tekshiryapman...",
      speechTimer: 180
    };

    this.startLoop();
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

  triggerSuccess(text = "EER Sxema Muvaffaqiyatli Tasdiqlandi!") {
    this.activeAlert = `✓ ${text}`;
    this.alertTimer = 160;

    // Burst golden celebration particles
    for (let i = 0; i < 40; i++) {
      this.particles.push({
        x: 430 + (Math.random() - 0.5) * 160,
        y: 80 + (Math.random() - 0.5) * 40,
        vx: (Math.random() - 0.5) * 5,
        vy: -1.5 - Math.random() * 3,
        life: 45 + Math.random() * 25,
        color: Math.random() > 0.5 ? "#c8a96e" : "#5c8d73",
        size: 2.5 + Math.random() * 3
      });
    }
  }

  triggerError(text = "Sxemada xatolik mavjud!") {
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

    // Update particles
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life--;
      if (p.life <= 0) {
        this.particles.splice(i, 1);
      }
    }

    // Periodic mentor insights in Uzbek
    if (this.tick % 500 === 0 && !this.activeAlert) {
      const tips = [
        "Multiplicity: UML da chiziq oxiridagi 1..* narigi entitiyning bitta nusxasi uchun o'lchanadi!",
        "Fan Trap: bitta entitiydan 2 ta 1:* tarmoqlanib ketsa, qolgan 2 ta entitiy bog'lanmay noaniq qoladi!",
        "Chasm Trap: qatnashish ixtiyoriy (0..*) bo'lsa, zanjir uzilib qolishi mumkin!",
        "Zaif entitiy o'zining mustaqil PK siga ega emas, ota entitiy kalitiga bog'liq!",
        "M:N munosabatlarni mantiqiy modelga o'tkazganda alohida oraliq jadval talab etiladi."
      ];
      this.mentor.speech = tips[Math.floor(Math.random() * tips.length)];
      this.mentor.speechTimer = 220;
    }
  }

  draw() {
    const ctx = this.ctx;
    if (!ctx) return;

    ctx.clearRect(0, 0, this.width, this.height);

    // 1. Luxury Walnut & Velvet Floor
    const grad = ctx.createLinearGradient(0, 0, 0, this.height);
    grad.addColorStop(0, "#191512");
    grad.addColorStop(0.5, "#251e19");
    grad.addColorStop(1, "#181411");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, this.width, this.height);

    // Subtle architectural grid line on desk wall
    ctx.strokeStyle = "rgba(200, 169, 110, 0.12)";
    ctx.lineWidth = 1;
    for (let x = 40; x < this.width; x += 60) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 110);
      ctx.stroke();
    }

    // 2. Center Conference Table (Polished Dark Wood with Gold Trim)
    ctx.save();
    ctx.fillStyle = "#2c221a";
    ctx.strokeStyle = "#c8a96e";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(240, 105, 380, 55, [12, 12, 8, 8]);
    ctx.fill();
    ctx.stroke();

    // Blueprint blueprint on table
    ctx.fillStyle = "#1e293b";
    ctx.strokeStyle = "rgba(100, 180, 255, 0.4)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(320, 115, 220, 36, 4);
    ctx.fill();
    ctx.stroke();

    // Small ER blueprint schematic marks on paper
    ctx.strokeStyle = "#93c5fd";
    ctx.lineWidth = 1.2;
    ctx.strokeRect(335, 122, 28, 18); // Entity 1
    ctx.strokeRect(495, 122, 28, 18); // Entity 2
    ctx.beginPath(); // Diamond
    ctx.moveTo(430, 122);
    ctx.lineTo(440, 131);
    ctx.lineTo(430, 140);
    ctx.lineTo(420, 131);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath(); // Connectors
    ctx.moveTo(363, 131);
    ctx.lineTo(420, 131);
    ctx.moveTo(440, 131);
    ctx.lineTo(495, 131);
    ctx.stroke();

    ctx.restore();

    // 3. Characters
    // Professor Atlas (Left)
    this.drawCharacter(ctx, this.mentor.x, this.mentor.y, "#334155", "#c8a96e", "🏛️ Atlas");

    // Student Modeler (Center, seated)
    this.drawCharacter(ctx, this.student.x, this.student.y, "#1e3a5f", "#60a5fa", "👨‍💻 Siz");

    // Client (Right)
    this.drawCharacter(ctx, this.client.x, this.client.y, "#4a2820", "#d97706", `💼 ${this.client.name}`);

    // 4. Speech Balloons
    if (this.mentor.speech && this.mentor.speechTimer > 0) {
      this.drawSpeechBubble(ctx, this.mentor.x, this.mentor.y - 48, this.mentor.speech, "#c8a96e", "#1b1612");
    }

    if (this.client.speech && this.client.speechTimer > 0) {
      this.drawSpeechBubble(ctx, this.client.x - 30, this.client.y - 48, this.client.speech, "#d97706", "#1c1511");
    }

    // 5. Celebration / Incident Alert Banner
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

    // 6. Celebration Particles
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
    // Shadow
    ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
    ctx.beginPath();
    ctx.ellipse(x, y + 36, 20, 6, 0, 0, Math.PI * 2);
    ctx.fill();

    // Body / Suit
    ctx.fillStyle = suitColor;
    ctx.strokeStyle = "#1b1612";
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.roundRect(x - 14, y + 6, 28, 30, [6, 6, 2, 2]);
    ctx.fill();
    ctx.stroke();

    // Head / Face
    ctx.fillStyle = "#fbd38d";
    ctx.beginPath();
    ctx.arc(x, y - 4, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Hair
    ctx.fillStyle = hairColor;
    ctx.beginPath();
    ctx.arc(x, y - 8, 12, Math.PI, Math.PI * 2);
    ctx.fill();

    // Name label
    ctx.fillStyle = "#c4bbb0";
    ctx.font = "600 10px 'Inter', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(label, x, y + 48);

    ctx.restore();
  }

  drawSpeechBubble(ctx, x, y, text, borderColor, bgColor) {
    ctx.save();
    ctx.font = "500 11.5px 'Inter', sans-serif";

    // Truncate long text
    let display = text;
    if (display.length > 55) display = display.substring(0, 52) + "...";

    const textWidth = ctx.measureText(display).width;
    const pad = 10;
    const bubbleW = textWidth + pad * 2;
    const bubbleH = 24;

    let bx = x - bubbleW / 2;
    // Keep in screen
    bx = Math.max(15, Math.min(bx, this.width - bubbleW - 15));
    const by = y;

    ctx.fillStyle = bgColor;
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(bx, by, bubbleW, bubbleH, 6);
    ctx.fill();
    ctx.stroke();

    // Tail
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

window.Atelier2DEngine = Atelier2DEngine;
