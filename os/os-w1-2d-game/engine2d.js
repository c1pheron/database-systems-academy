// ============================================================================
// WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 1 2D NOC & SERVER HALL ENGINE
// High-tech Data Center, Server Racks with Blinking LEDs, Spinning Cooling Fans,
// Overhead Fiber Cable Trays, Professor Turing (Tux), Malika & Bobur,
// Elevator Portal, Click-to-Move / WASD, Floating Particles & Speech Bubbles.
// ============================================================================

class CyberNocArena2D {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas ? this.canvas.getContext("2d") : null;
    this.width = 860;
    this.height = 380;

    // Player (Linux SysAdmin)
    this.player = {
      x: 140,
      y: 220,
      targetX: null,
      targetY: null,
      vx: 0,
      vy: 0,
      speed: 3.0,
      facing: "right",
      walkFrame: 0,
      speech: "Assalomu alaykum! Debian 12 serveri va Inodelarni o'rganishga tayyorman.",
      speechTimer: 200
    };

    // Professor Turing (WIUT OS Module Leader & Linux Architect)
    this.turing = {
      x: 430,
      y: 135,
      name: "Prof. Turing 🐧",
      speech: "Linux kapoti ostidagi inodelar va buyruqlar sirlarini oching!",
      speechTimer: 240,
      avatar: "🐧"
    };

    // Colleague Malika (Cloud & Inode Engineer)
    this.malika = {
      x: 275,
      y: 135,
      name: "Malika 👩‍💻",
      speech: "Qattiq havola (hard link) bir xil inode ni ulashadi!",
      speechTimer: 220,
      avatar: "👩‍💻"
    };

    // Colleague Bobur (Syslog & Audit Specialist)
    this.bobur = {
      x: 585,
      y: 135,
      name: "Bobur 👨‍💻",
      speech: "Loglarni tahlil qilishda tail -f va wc -l doim asqotadi!",
      speechTimer: 220,
      avatar: "👨‍💻"
    };

    // Server Racks
    this.racks = [
      {
        id: "rack_debian",
        x: 60,
        y: 65,
        w: 120,
        h: 230,
        name: "DEBIAN 12 HOST",
        sub: "/bin, /usr, /lib",
        tab: "home",
        leds: [],
        fanAngle: 0
      },
      {
        id: "rack_home",
        x: 320,
        y: 65,
        w: 120,
        h: 170,
        name: "USER STORAGE",
        sub: "/home/student",
        tab: "home",
        leds: [],
        fanAngle: 0
      },
      {
        id: "rack_logs",
        x: 470,
        y: 65,
        w: 120,
        h: 170,
        name: "AUDIT & LOGS",
        sub: "/var/log, /etc",
        tab: "log",
        leds: [],
        fanAngle: 0
      },
      {
        id: "rack_inodes",
        x: 680,
        y: 65,
        w: 120,
        h: 230,
        name: "INODE CLUSTER",
        sub: "ext4 / VFS Cache",
        tab: "inode",
        leds: [],
        fanAngle: 0
      }
    ];

    // Initialize LEDs for each server rack
    this.racks.forEach(rack => {
      for (let i = 0; i < 18; i++) {
        rack.leds.push({
          state: Math.random() > 0.4,
          color: Math.random() > 0.2 ? "#10b981" : (Math.random() > 0.5 ? "#06b6d4" : "#f59e0b"),
          timer: Math.floor(Math.random() * 30)
        });
      }
    });

    // Elevator Portal to switch sectors
    this.portal = {
      x: 825,
      y: 220,
      w: 28,
      h: 80,
      open: false,
      glow: 0
    };

    // Coffee dispenser
    this.coffee = {
      x: 20,
      y: 190,
      w: 28,
      h: 45,
      label: "☕ SysAdmin Fuel"
    };

    this.keys = {};
    this.particles = [];
    this.dataPackets = [];
    this.floatingTexts = [];
    this.currentSector = 1;
    this.time = 0;

    this.onSelectTab = null;
    this.onOpenMap = null;
    this.onTriggerEvent = null;

    this.initDataPackets();
    this.bindInput();
    this.resize();
    window.addEventListener("resize", () => this.resize());
    requestAnimationFrame(() => this.loop());
  }

  initDataPackets() {
    this.dataPackets = [];
    for (let i = 0; i < 16; i++) {
      this.dataPackets.push({
        x: Math.random() * this.width,
        y: 42 + (Math.random() > 0.5 ? 0 : 8),
        speed: 1.5 + Math.random() * 2,
        color: Math.random() > 0.5 ? "#22d3ee" : "#34d399",
        size: 2 + Math.random() * 2
      });
    }
  }

  resize() {
    if (!this.canvas) return;
    const rect = this.canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    this.canvas.width = this.width * dpr;
    this.canvas.height = this.height * dpr;
    if (this.ctx) {
      this.ctx.setTransform(1, 0, 0, 1, 0, 0);
      this.ctx.scale(dpr, dpr);
    }
  }

  bindInput() {
    window.addEventListener("keydown", (e) => {
      // Don't capture keys if typing inside input / textarea
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      this.keys[e.key.toLowerCase()] = true;
    });

    window.addEventListener("keyup", (e) => {
      this.keys[e.key.toLowerCase()] = false;
    });

    if (this.canvas) {
      this.canvas.addEventListener("click", (e) => {
        const rect = this.canvas.getBoundingClientRect();
        const scaleX = this.width / rect.width;
        const scaleY = this.height / rect.height;
        const mx = (e.clientX - rect.left) * scaleX;
        const my = (e.clientY - rect.top) * scaleY;

        this.handleClick(mx, my);
      });
    }
  }

  handleClick(mx, my) {
    // Check Turing
    if (Math.hypot(mx - this.turing.x, my - this.turing.y) < 30) {
      this.turing.speech = "Linuxda har bir fayl — inodedir! Bog'lamlar esa ularga berilgan nomlar xolos.";
      this.turing.speechTimer = 220;
      this.addFloatingText(this.turing.x, this.turing.y - 25, "🐧 Turing: 'Linux VFS!'", "#22d3ee");
      if (this.onTriggerEvent) this.onTriggerEvent();
      return;
    }

    // Check Malika
    if (Math.hypot(mx - this.malika.x, my - this.malika.y) < 25) {
      this.malika.speech = "Hard link yaratsangiz, 'ls -l' da ikkinchi ustun (link count) 1 taga oshadi!";
      this.malika.speechTimer = 200;
      this.addFloatingText(this.malika.x, this.malika.y - 20, "👩‍💻 Malika: 'Inodes!'", "#34d399");
      return;
    }

    // Check Bobur
    if (Math.hypot(mx - this.bobur.x, my - this.bobur.y) < 25) {
      this.bobur.speech = "Xavfli buyruqlarni ishlatishdan oldin 'man' sahifasini o'qing yoki test qiling!";
      this.bobur.speechTimer = 200;
      this.addFloatingText(this.bobur.x, this.bobur.y - 20, "👨‍💻 Bobur: 'Syslog OK'", "#f59e0b");
      return;
    }

    // Check Racks
    for (const rack of this.racks) {
      if (mx >= rack.x && mx <= rack.x + rack.w && my >= rack.y && my <= rack.y + rack.h) {
        this.addFloatingText(rack.x + rack.w / 2, rack.y - 10, `🖥️ ${rack.name}`, "#38bdf8");
        if (this.onSelectTab) this.onSelectTab(rack.tab);
        return;
      }
    }

    // Check Elevator Portal
    if (mx >= this.portal.x - 10 && mx <= this.portal.x + this.portal.w + 10 &&
        my >= this.portal.y - 10 && my <= this.portal.y + this.portal.h + 10) {
      this.addFloatingText(this.portal.x, this.portal.y - 15, "🚀 Elevator Lift", "#38bdf8");
      if (this.onOpenMap) this.onOpenMap();
      return;
    }

    // Check Coffee
    if (mx >= this.coffee.x && mx <= this.coffee.x + this.coffee.w &&
        my >= this.coffee.y && my <= this.coffee.y + this.coffee.h) {
      this.player.speech = "Issiq kofe ichildi! Miya quvvati 100% ga yetdi ☕";
      this.player.speechTimer = 180;
      this.addFloatingText(this.coffee.x + 10, this.coffee.y - 15, "☕ +Energy!", "#fbbf24");
      return;
    }

    // Otherwise, move player to clicked location
    this.player.targetX = Math.max(30, Math.min(this.width - 30, mx));
    this.player.targetY = Math.max(120, Math.min(this.height - 30, my));
  }

  addFloatingText(x, y, text, color = "#22d3ee") {
    this.floatingTexts.push({
      x,
      y,
      text,
      color,
      alpha: 1.0,
      vy: -0.7,
      life: 60
    });
  }

  addSuccessBurst(x = 430, y = 190) {
    for (let i = 0; i < 24; i++) {
      const angle = (Math.PI * 2 * i) / 24;
      const speed = 1.5 + Math.random() * 3.5;
      this.particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        color: Math.random() > 0.4 ? "#10b981" : (Math.random() > 0.5 ? "#22d3ee" : "#fbbf24"),
        size: 3 + Math.random() * 3,
        alpha: 1.0,
        life: 45
      });
    }
    this.addFloatingText(x, y - 30, "✨ VAZIFA BAJARILDI! +XP ✨", "#34d399");
  }

  update() {
    this.time++;

    // Player Movement (Keyboard WASD / Arrows)
    let dx = 0;
    let dy = 0;
    if (this.keys["w"] || this.keys["arrowup"]) dy -= 1;
    if (this.keys["s"] || this.keys["arrowdown"]) dy += 1;
    if (this.keys["a"] || this.keys["arrowleft"]) dx -= 1;
    if (this.keys["d"] || this.keys["arrowright"]) dx += 1;

    if (dx !== 0 || dy !== 0) {
      this.player.targetX = null;
      this.player.targetY = null;
      const len = Math.hypot(dx, dy);
      this.player.vx = (dx / len) * this.player.speed;
      this.player.vy = (dy / len) * this.player.speed;
      if (dx > 0) this.player.facing = "right";
      if (dx < 0) this.player.facing = "left";
      this.player.walkFrame += 0.2;
    } else if (this.player.targetX !== null && this.player.targetY !== null) {
      const dist = Math.hypot(this.player.targetX - this.player.x, this.player.targetY - this.player.y);
      if (dist > 4) {
        this.player.vx = ((this.player.targetX - this.player.x) / dist) * this.player.speed;
        this.player.vy = ((this.player.targetY - this.player.y) / dist) * this.player.speed;
        this.player.facing = this.player.vx >= 0 ? "right" : "left";
        this.player.walkFrame += 0.2;
      } else {
        this.player.x = this.player.targetX;
        this.player.y = this.player.targetY;
        this.player.targetX = null;
        this.player.targetY = null;
        this.player.vx = 0;
        this.player.vy = 0;
      }
    } else {
      this.player.vx = 0;
      this.player.vy = 0;
    }

    this.player.x += this.player.vx;
    this.player.y += this.player.vy;

    // Boundaries
    this.player.x = Math.max(30, Math.min(this.width - 30, this.player.x));
    this.player.y = Math.max(120, Math.min(this.height - 30, this.player.y));

    // Update timers
    if (this.player.speechTimer > 0) this.player.speechTimer--;
    if (this.turing.speechTimer > 0) this.turing.speechTimer--;
    if (this.malika.speechTimer > 0) this.malika.speechTimer--;
    if (this.bobur.speechTimer > 0) this.bobur.speechTimer--;

    // Update Server Rack Fans & LEDs
    this.racks.forEach(rack => {
      rack.fanAngle += 0.15;
      rack.leds.forEach(led => {
        led.timer--;
        if (led.timer <= 0) {
          led.state = Math.random() > 0.35;
          led.timer = 15 + Math.floor(Math.random() * 45);
        }
      });
    });

    // Update Data Packets
    this.dataPackets.forEach(p => {
      p.x += p.speed;
      if (p.x > this.width + 10) {
        p.x = -10;
        p.y = 42 + (Math.random() > 0.5 ? 0 : 8);
      }
    });

    // Update Particles
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life--;
      p.alpha = Math.max(0, p.life / 45);
      if (p.life <= 0) this.particles.splice(i, 1);
    }

    // Update Floating Texts
    for (let i = this.floatingTexts.length - 1; i >= 0; i--) {
      const ft = this.floatingTexts[i];
      ft.y += ft.vy;
      ft.life--;
      ft.alpha = Math.max(0, ft.life / 60);
      if (ft.life <= 0) this.floatingTexts.splice(i, 1);
    }
  }

  draw() {
    if (!this.ctx) return;
    const ctx = this.ctx;

    // Background Room Gradient
    const bgGrad = ctx.createLinearGradient(0, 0, 0, this.height);
    bgGrad.addColorStop(0, "#080e1c");
    bgGrad.addColorStop(0.5, "#0b1426");
    bgGrad.addColorStop(1, "#060914");
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, this.width, this.height);

    // Floor Grid Tiles
    ctx.strokeStyle = "rgba(6, 182, 212, 0.08)";
    ctx.lineWidth = 1;
    for (let x = 0; x < this.width; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 100);
      ctx.lineTo(x, this.height);
      ctx.stroke();
    }
    for (let y = 100; y < this.height; y += 30) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(this.width, y);
      ctx.stroke();
    }

    // Overhead Fiber Cable Trays
    ctx.fillStyle = "#111c30";
    ctx.fillRect(0, 36, this.width, 16);
    ctx.strokeStyle = "rgba(6, 182, 212, 0.4)";
    ctx.lineWidth = 1.5;
    ctx.strokeRect(0, 36, this.width, 16);

    // Draw Glowing Data Packets moving through cable trays
    this.dataPackets.forEach(p => {
      ctx.fillStyle = p.color;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 6;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.shadowBlur = 0;

    // Draw Server Racks
    this.racks.forEach(rack => this.drawRack(rack));

    // Draw Central Monitoring Console
    this.drawConsole();

    // Draw Coffee Dispenser
    this.drawCoffee();

    // Draw Elevator Portal
    this.drawPortal();

    // Draw NPCs
    this.drawTuring();
    this.drawColleague(this.malika);
    this.drawColleague(this.bobur);

    // Draw Player
    this.drawPlayer();

    // Draw Speech Bubbles
    if (this.turing.speechTimer > 0) this.drawSpeechBubble(this.turing.x, this.turing.y - 32, this.turing.speech, "#06b6d4");
    if (this.malika.speechTimer > 0) this.drawSpeechBubble(this.malika.x, this.malika.y - 30, this.malika.speech, "#10b981");
    if (this.bobur.speechTimer > 0) this.drawSpeechBubble(this.bobur.x, this.bobur.y - 30, this.bobur.speech, "#f59e0b");
    if (this.player.speechTimer > 0) this.drawSpeechBubble(this.player.x, this.player.y - 32, this.player.speech, "#38bdf8");

    // Draw Particles
    this.particles.forEach(p => {
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1.0;

    // Draw Floating Texts
    this.floatingTexts.forEach(ft => {
      ctx.fillStyle = ft.color;
      ctx.globalAlpha = ft.alpha;
      ctx.font = "bold 12px 'JetBrains Mono', monospace";
      ctx.textAlign = "center";
      ctx.fillText(ft.text, ft.x, ft.y);
    });
    ctx.globalAlpha = 1.0;
  }

  drawRack(rack) {
    const ctx = this.ctx;

    // Server Rack Cabinet
    ctx.fillStyle = "#0c1322";
    ctx.fillRect(rack.x, rack.y, rack.w, rack.h);
    ctx.strokeStyle = "rgba(6, 182, 212, 0.35)";
    ctx.lineWidth = 2;
    ctx.strokeRect(rack.x, rack.y, rack.w, rack.h);

    // Top Header
    ctx.fillStyle = "#16233d";
    ctx.fillRect(rack.x, rack.y, rack.w, 24);
    ctx.fillStyle = "#38bdf8";
    ctx.font = "bold 10px 'JetBrains Mono', monospace";
    ctx.textAlign = "center";
    ctx.fillText(rack.name, rack.x + rack.w / 2, rack.y + 15);

    // Subtitle
    ctx.fillStyle = "#94a3b8";
    ctx.font = "9px 'JetBrains Mono', monospace";
    ctx.fillText(rack.sub, rack.x + rack.w / 2, rack.y + 36);

    // Server Chassis Units (horizontal slots)
    const slotH = 22;
    const startY = rack.y + 44;
    const count = Math.floor((rack.h - 55) / slotH);

    for (let i = 0; i < count; i++) {
      const sy = startY + i * slotH;
      ctx.fillStyle = i % 2 === 0 ? "#10192e" : "#0d1527";
      ctx.fillRect(rack.x + 6, sy, rack.w - 12, slotH - 4);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
      ctx.strokeRect(rack.x + 6, sy, rack.w - 12, slotH - 4);

      // Chassis handle
      ctx.fillStyle = "#1e293b";
      ctx.fillRect(rack.x + 10, sy + 4, 4, slotH - 12);
      ctx.fillRect(rack.x + rack.w - 14, sy + 4, 4, slotH - 12);

      // Blinking LEDs
      const ledIdx = (i * 2) % rack.leds.length;
      const led = rack.leds[ledIdx];
      if (led && led.state) {
        ctx.fillStyle = led.color;
        ctx.shadowColor = led.color;
        ctx.shadowBlur = 5;
        ctx.beginPath();
        ctx.arc(rack.x + 22, sy + 8, 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    // Cooling Fan on top right
    const fanX = rack.x + rack.w - 16;
    const fanY = rack.y + 12;
    ctx.save();
    ctx.translate(fanX, fanY);
    ctx.rotate(rack.fanAngle);
    ctx.strokeStyle = "#38bdf8";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(0, 0, 6, 0, Math.PI * 2);
    ctx.stroke();
    ctx.moveTo(-5, 0); ctx.lineTo(5, 0);
    ctx.moveTo(0, -5); ctx.lineTo(0, 5);
    ctx.stroke();
    ctx.restore();
  }

  drawConsole() {
    const ctx = this.ctx;
    const cx = 430;
    const cy = 205;

    // Desk
    ctx.fillStyle = "#121b2f";
    ctx.fillRect(cx - 70, cy, 140, 24);
    ctx.strokeStyle = "rgba(6, 182, 212, 0.4)";
    ctx.strokeRect(cx - 70, cy, 140, 24);

    // Dual Monitor Screens
    ctx.fillStyle = "#040711";
    ctx.fillRect(cx - 50, cy - 35, 42, 28);
    ctx.fillRect(cx + 8, cy - 35, 42, 28);
    ctx.strokeStyle = "#06b6d4";
    ctx.strokeRect(cx - 50, cy - 35, 42, 28);
    ctx.strokeRect(cx + 8, cy - 35, 42, 28);

    // Screen phosphor glow
    ctx.fillStyle = "#10b981";
    ctx.font = "8px 'JetBrains Mono', monospace";
    ctx.fillText("bash:~$", cx - 46, cy - 20);
    ctx.fillText("top 0.4%", cx + 12, cy - 20);
  }

  drawCoffee() {
    const ctx = this.ctx;
    ctx.fillStyle = "#1e293b";
    ctx.fillRect(this.coffee.x, this.coffee.y, this.coffee.w, this.coffee.h);
    ctx.strokeStyle = "#fbbf24";
    ctx.strokeRect(this.coffee.x, this.coffee.y, this.coffee.w, this.coffee.h);

    ctx.fillStyle = "#f59e0b";
    ctx.font = "14px sans-serif";
    ctx.fillText("☕", this.coffee.x + 6, this.coffee.y + 24);
  }

  drawPortal() {
    const ctx = this.ctx;
    const p = this.portal;

    ctx.fillStyle = "#0c1527";
    ctx.fillRect(p.x, p.y, p.w, p.h);
    ctx.strokeStyle = "rgba(6, 182, 212, 0.6)";
    ctx.lineWidth = 2;
    ctx.strokeRect(p.x, p.y, p.w, p.h);

    // Elevator doors line
    ctx.strokeStyle = "#38bdf8";
    ctx.beginPath();
    ctx.moveTo(p.x + p.w / 2, p.y);
    ctx.lineTo(p.x + p.w / 2, p.y + p.h);
    ctx.stroke();

    // Floor indicator on top
    ctx.fillStyle = "#22d3ee";
    ctx.font = "bold 9px 'JetBrains Mono', monospace";
    ctx.textAlign = "center";
    ctx.fillText(`FL ${this.currentSector}`, p.x + p.w / 2, p.y - 6);
  }

  drawTuring() {
    const ctx = this.ctx;
    const t = this.turing;

    // Shadow
    ctx.fillStyle = "rgba(0, 0, 0, 0.45)";
    ctx.beginPath();
    ctx.ellipse(t.x, t.y + 14, 14, 5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Tux Penguin Body
    ctx.fillStyle = "#0f172a";
    ctx.beginPath();
    ctx.ellipse(t.x, t.y, 11, 15, 0, 0, Math.PI * 2);
    ctx.fill();

    // Tux White Belly
    ctx.fillStyle = "#f8fafc";
    ctx.beginPath();
    ctx.ellipse(t.x, t.y + 3, 7, 10, 0, 0, Math.PI * 2);
    ctx.fill();

    // Eyes
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.arc(t.x - 4, t.y - 7, 1.8, 0, Math.PI * 2);
    ctx.arc(t.x + 4, t.y - 7, 1.8, 0, Math.PI * 2);
    ctx.fill();

    // Beak
    ctx.fillStyle = "#f59e0b";
    ctx.beginPath();
    ctx.moveTo(t.x - 3, t.y - 3);
    ctx.lineTo(t.x + 3, t.y - 3);
    ctx.lineTo(t.x, t.y + 2);
    ctx.fill();

    // Feet
    ctx.fillStyle = "#f59e0b";
    ctx.fillRect(t.x - 9, t.y + 13, 6, 3);
    ctx.fillRect(t.x + 3, t.y + 13, 6, 3);

    // Name Tag
    ctx.fillStyle = "#22d3ee";
    ctx.font = "bold 10px 'JetBrains Mono', monospace";
    ctx.textAlign = "center";
    ctx.fillText(t.name, t.x, t.y - 20);
  }

  drawColleague(c) {
    const ctx = this.ctx;

    // Shadow
    ctx.fillStyle = "rgba(0, 0, 0, 0.45)";
    ctx.beginPath();
    ctx.ellipse(c.x, c.y + 14, 12, 4, 0, 0, Math.PI * 2);
    ctx.fill();

    // Body
    ctx.fillStyle = "#1e293b";
    ctx.fillRect(c.x - 7, c.y - 2, 14, 16);

    // Head
    ctx.fillStyle = "#fcd34d";
    ctx.beginPath();
    ctx.arc(c.x, c.y - 8, 7, 0, Math.PI * 2);
    ctx.fill();

    // Hair
    ctx.fillStyle = "#0f172a";
    ctx.beginPath();
    ctx.arc(c.x, c.y - 10, 7.5, Math.PI, 0);
    ctx.fill();

    // Name Tag
    ctx.fillStyle = "#cbd5e1";
    ctx.font = "bold 10px 'JetBrains Mono', monospace";
    ctx.textAlign = "center";
    ctx.fillText(c.name, c.x, c.y - 19);
  }

  drawPlayer() {
    const ctx = this.ctx;
    const p = this.player;

    // Shadow
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.beginPath();
    ctx.ellipse(p.x, p.y + 15, 13, 5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Legs walk animation
    const legOffset = Math.sin(p.walkFrame) * 4;
    ctx.fillStyle = "#0f172a";
    ctx.fillRect(p.x - 6, p.y + 6, 4, 9 + legOffset);
    ctx.fillRect(p.x + 2, p.y + 6, 4, 9 - legOffset);

    // Cyber Jacket Body (Emerald & Slate)
    ctx.fillStyle = "#064e3b";
    ctx.fillRect(p.x - 8, p.y - 6, 16, 14);
    ctx.strokeStyle = "#10b981";
    ctx.lineWidth = 1;
    ctx.strokeRect(p.x - 8, p.y - 6, 16, 14);

    // Head
    ctx.fillStyle = "#fed7aa";
    ctx.beginPath();
    ctx.arc(p.x, p.y - 12, 7, 0, Math.PI * 2);
    ctx.fill();

    // SysAdmin Cap / Hair
    ctx.fillStyle = "#022c22";
    ctx.beginPath();
    ctx.arc(p.x, p.y - 14, 7.5, Math.PI, 0);
    ctx.fill();

    // Label
    ctx.fillStyle = "#34d399";
    ctx.font = "bold 10px 'JetBrains Mono', monospace";
    ctx.textAlign = "center";
    ctx.fillText("SysAdmin (Siz)", p.x, p.y - 23);
  }

  drawSpeechBubble(x, y, text, accent = "#06b6d4") {
    const ctx = this.ctx;
    ctx.font = "11px 'Inter', sans-serif";
    const textWidth = ctx.measureText(text).width;
    const bw = Math.min(260, textWidth + 18);
    const bh = textWidth > 240 ? 36 : 24;

    ctx.fillStyle = "rgba(10, 16, 30, 0.95)";
    ctx.strokeStyle = accent;
    ctx.lineWidth = 1.2;

    const bx = Math.max(10, Math.min(this.width - bw - 10, x - bw / 2));
    const by = y - bh - 6;

    ctx.beginPath();
    ctx.roundRect(bx, by, bw, bh, 6);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#f8fafc";
    ctx.textAlign = "center";
    ctx.fillText(text, bx + bw / 2, by + bh / 2 + 4, bw - 10);
  }

  setSector(sectorNum) {
    this.currentSector = sectorNum;
    this.addFloatingText(this.portal.x, this.portal.y - 20, `Elevator: Sektor ${sectorNum}`, "#10b981");
  }

  loop() {
    this.update();
    this.draw();
    requestAnimationFrame(() => this.loop());
  }
}

window.CyberNocArena2D = CyberNocArena2D;
