// ============================================================================
// WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 4 2D NOC & AUTOMATION ENGINE
// Features: C Fork & Kernel Clone Tower, Bounded Process Multiplication,
// Find & Atomic File Retention, Resilient Downloader & Gzip Pipelines,
// Cron & Systemd Timers, Professor Turing (🐧 Tux), Alice & Bob,
// Interactive WASD / Click Walk, Animated Fork Nodes, LEDs & Fans.
// ============================================================================

class CyberAutomationNocArena2D {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas ? this.canvas.getContext("2d") : null;
    this.width = 860;
    this.height = 380;

    // Player (Automation SysAdmin)
    this.player = {
      x: 120,
      y: 290,
      targetX: null,
      targetY: null,
      vx: 0,
      vy: 0,
      speed: 3.2,
      facing: "right",
      walkFrame: 0,
      speech: "Linux fork() jarayonlari, avtomatlashtirish va rejalashtirish laboratoriyasiga xush kelibsiz!",
      speechTimer: 220
    };

    // Professor Turing (Kernel & Systems Mentor)
    this.turing = {
      x: 485,
      y: 260,
      name: "Prof. Turing 🐧",
      speech: "fork() tizim chaqirig'i xotirani klonlaydi: ota bolaning PID sini oladi, bola esa 0 oladi!",
      speechTimer: 240,
      avatar: "🐧"
    };

    // DevOps Alice (Automation Lead)
    this.alice = {
      x: 330,
      y: 260,
      name: "Alice 👩‍💻",
      speech: "find ishlatganda doimo '-type f' qo'ying, aks holda -delete butun kataloglarni o'chirib yuboradi!",
      speechTimer: 220,
      avatar: "👩‍💻"
    };

    // Specialist Bob (Archival & Timers Specialist)
    this.bob = {
      x: 180,
      y: 260,
      name: "Bob 👨‍💻",
      speech: "crontab -l o'rniga adashib -r yozib qo'ymang! -r barcha rejalashtirilgan vazifalarni o'chiradi!",
      speechTimer: 220,
      avatar: "👨‍💻"
    };

    // Server Racks
    this.racks = [
      {
        id: "rack_fork",
        x: 40,
        y: 45,
        w: 120,
        h: 190,
        name: "FORK & CLONE",
        sub: "fork.c, gcc, pid_t",
        tab: "tree",
        leds: [],
        fanAngle: 0
      },
      {
        id: "rack_limits",
        x: 195,
        y: 45,
        w: 120,
        h: 155,
        name: "PROCESS LIMITS",
        sub: "ulimit -u, forks.c",
        tab: "tree",
        leds: [],
        fanAngle: 0
      },
      {
        id: "rack_find",
        x: 350,
        y: 45,
        w: 130,
        h: 155,
        name: "FIND & CLEANUP",
        sub: "cleanup.sh, -delete",
        tab: "scripts",
        leds: [],
        fanAngle: 0
      },
      {
        id: "rack_archival",
        x: 515,
        y: 45,
        w: 125,
        h: 155,
        name: "RESILIENT PIPES",
        sub: "download.sh, rotate.sh",
        tab: "scripts",
        leds: [],
        fanAngle: 0
      },
      {
        id: "rack_timers",
        x: 675,
        y: 45,
        w: 140,
        h: 190,
        name: "CRON & SYSTEMD",
        sub: "crontab, systemd timer",
        tab: "timers",
        leds: [],
        fanAngle: 0
      }
    ];

    // Initialize rack LEDs
    this.racks.forEach(rack => {
      rack.leds = Array.from({ length: 12 }, () => ({
        blinkRate: Math.floor(Math.random() * 20) + 10,
        state: Math.random() > 0.5,
        color: Math.random() > 0.3 ? "#10b981" : (Math.random() > 0.5 ? "#06b6d4" : "#f59e0b")
      }));
    });

    // Floating Data Packets / Process Cloning Threads
    this.packets = Array.from({ length: 16 }, () => ({
      x: Math.random() * 860,
      y: 20 + Math.random() * 20,
      vx: (Math.random() * 1.5 + 0.8) * (Math.random() > 0.5 ? 1 : -1),
      char: Math.random() > 0.5 ? "pid=fork()" : "TIMER:tick",
      color: Math.random() > 0.5 ? "#22d3ee" : "#34d399",
      size: Math.random() * 2 + 1
    }));

    this.keys = {};
    this.hoverTarget = null;
    this.animFrameId = null;
    this.onSelectTabCallback = null;

    this.bindEvents();
    this.startLoop();
  }

  bindEvents() {
    if (!this.canvas) return;

    window.addEventListener("keydown", (e) => {
      if (document.activeElement && document.activeElement.tagName === "INPUT") return;
      this.keys[e.key.toLowerCase()] = true;
    });

    window.addEventListener("keyup", (e) => {
      this.keys[e.key.toLowerCase()] = false;
    });

    this.canvas.addEventListener("click", (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const scaleX = this.canvas.width / rect.width;
      const scaleY = this.canvas.height / rect.height;
      const clickX = (e.clientX - rect.left) * scaleX;
      const clickY = (e.clientY - rect.top) * scaleY;

      // Click on NPCs
      const dTur = Math.hypot(clickX - this.turing.x, clickY - this.turing.y);
      if (dTur < 35) {
        this.turing.speech = this.getRandomTuringQuote();
        this.turing.speechTimer = 220;
        this.player.speech = "Ustoz Turing, fork() va bayroqlar haqida nima deysiz?";
        this.player.speechTimer = 160;
        return;
      }

      const dAli = Math.hypot(clickX - this.alice.x, clickY - this.alice.y);
      if (dAli < 35) {
        this.alice.speech = "curl da '-f' qo'yishni unutmang! Aks holda 404 xato sahifasini yuklab olib aldanasiz!";
        this.alice.speechTimer = 220;
        this.player.speech = "Rahmat, Alice! '-f' va '-L' bayroqlarini doim tekshiraman.";
        this.player.speechTimer = 160;
        return;
      }

      const dBob = Math.hypot(clickX - this.bob.x, clickY - this.bob.y);
      if (dBob < 35) {
        this.bob.speech = "Fayllarda bo'sh joy bo'lsa 'find -print0' va 'read -r -d \"\"' ishlating. Bu NUL bayti yordamida uzatadi!";
        this.bob.speechTimer = 220;
        this.player.speech = "Bob, NUL baytli quvurlar juda mustahkam ekan!";
        this.player.speechTimer = 160;
        return;
      }

      // Click on Server Racks
      for (const rack of this.racks) {
        if (clickX >= rack.x && clickX <= rack.x + rack.w &&
            clickY >= rack.y && clickY <= rack.y + rack.h) {
          if (this.onSelectTabCallback) {
            this.onSelectTabCallback(rack.tab);
          }
          this.player.speech = `Server ${rack.name} tanlandi! Jadval ko'rinishi ochildi.`;
          this.player.speechTimer = 150;
          return;
        }
      }

      // Move player towards clicked floor location
      this.player.targetX = Math.max(50, Math.min(810, clickX));
      this.player.targetY = Math.max(220, Math.min(350, clickY));
    });

    this.canvas.addEventListener("mousemove", (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const scaleX = this.canvas.width / rect.width;
      const scaleY = this.canvas.height / rect.height;
      const mx = (e.clientX - rect.left) * scaleX;
      const my = (e.clientY - rect.top) * scaleY;

      this.hoverTarget = null;
      for (const rack of this.racks) {
        if (mx >= rack.x && mx <= rack.x + rack.w && my >= rack.y && my <= rack.y + rack.h) {
          this.hoverTarget = rack;
          break;
        }
      }
    });
  }

  getRandomTuringQuote() {
    const quotes = [
      "fork() oldidan fflush(stdout) berish shart, aks holda buferlangan matn ota va bolada 2 marta chop etiladi!",
      "gcc da '-o fork.out' ni unutsangiz, standart 'a.out' yaratilib eski dastur ustiga yoziladi!",
      "df -P / bayrog'i POSIX formatini kafolatlaydi, shunda awk $5 foizni to'g'ri ajratadi!",
      "systemctl is-active ga '--quiet' bersangiz, u ekranga so'z chiqarmaydi, faqat exit kod beradi!",
      "crontab da har daqiqa: '* * * * *', systemd timer da esa: 'OnCalendar=*-*-* *:*:00'!"
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  setTabCallback(cb) {
    this.onSelectTabCallback = cb;
  }

  triggerPlayerAlert(msg) {
    this.player.speech = msg;
    this.player.speechTimer = 220;
  }

  startLoop() {
    const loop = () => {
      this.update();
      this.draw();
      this.animFrameId = requestAnimationFrame(loop);
    };
    this.animFrameId = requestAnimationFrame(loop);
  }

  update() {
    let dx = 0;
    let dy = 0;
    if (this.keys["w"] || this.keys["arrowup"]) dy -= 1;
    if (this.keys["s"] || this.keys["arrowdown"]) dy += 1;
    if (this.keys["a"] || this.keys["arrowleft"]) { dx -= 1; this.player.facing = "left"; }
    if (this.keys["d"] || this.keys["arrowright"]) { dx += 1; this.player.facing = "right"; }

    if (dx !== 0 || dy !== 0) {
      this.player.targetX = null;
      this.player.targetY = null;
      const len = Math.hypot(dx, dy);
      this.player.x += (dx / len) * this.player.speed;
      this.player.y += (dy / len) * this.player.speed;
      this.player.walkFrame += 0.2;
    } else if (this.player.targetX !== null && this.player.targetY !== null) {
      const tdx = this.player.targetX - this.player.x;
      const tdy = this.player.targetY - this.player.y;
      const dist = Math.hypot(tdx, tdy);
      if (dist > 4) {
        this.player.facing = tdx >= 0 ? "right" : "left";
        this.player.x += (tdx / dist) * this.player.speed;
        this.player.y += (tdy / dist) * this.player.speed;
        this.player.walkFrame += 0.2;
      } else {
        this.player.targetX = null;
        this.player.targetY = null;
      }
    }

    this.player.x = Math.max(50, Math.min(810, this.player.x));
    this.player.y = Math.max(220, Math.min(350, this.player.y));

    if (this.player.speechTimer > 0) this.player.speechTimer--;
    if (this.turing.speechTimer > 0) this.turing.speechTimer--;
    if (this.alice.speechTimer > 0) this.alice.speechTimer--;
    if (this.bob.speechTimer > 0) this.bob.speechTimer--;

    this.racks.forEach(r => {
      r.fanAngle += 0.08;
      r.leds.forEach(led => {
        led.blinkRate--;
        if (led.blinkRate <= 0) {
          led.state = !led.state;
          led.blinkRate = Math.floor(Math.random() * 25) + 8;
        }
      });
    });

    this.packets.forEach(p => {
      p.x += p.vx;
      if (p.x > 860) p.x = 0;
      if (p.x < 0) p.x = 860;
    });
  }

  draw() {
    if (!this.ctx) return;
    const ctx = this.ctx;

    // Background
    ctx.fillStyle = "#040710";
    ctx.fillRect(0, 0, this.width, this.height);

    // Wall gradient
    const wallGrad = ctx.createLinearGradient(0, 0, 0, 210);
    wallGrad.addColorStop(0, "#070c18");
    wallGrad.addColorStop(1, "#0c1527");
    ctx.fillStyle = wallGrad;
    ctx.fillRect(0, 0, this.width, 210);

    // Process & Timer Conduit Pipe
    ctx.fillStyle = "#0f1a30";
    ctx.fillRect(0, 18, this.width, 16);
    ctx.strokeStyle = "#06b6d4";
    ctx.lineWidth = 1;
    ctx.strokeRect(0, 18, this.width, 16);

    // Floating Packets
    this.packets.forEach(p => {
      ctx.fillStyle = p.color;
      ctx.font = "9px 'JetBrains Mono', monospace";
      ctx.fillText(p.char, p.x, p.y);
    });

    // Floor Gradient
    const floorGrad = ctx.createLinearGradient(0, 210, 0, this.height);
    floorGrad.addColorStop(0, "#0c1527");
    floorGrad.addColorStop(1, "#050810");
    ctx.fillStyle = floorGrad;
    ctx.fillRect(0, 210, this.width, this.height - 210);

    // Perspective Grid Lines
    ctx.strokeStyle = "rgba(6, 182, 212, 0.12)";
    ctx.lineWidth = 1;
    for (let x = 0; x <= this.width; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 210);
      ctx.lineTo(x + (x - this.width / 2) * 0.4, this.height);
      ctx.stroke();
    }
    for (let y = 220; y <= this.height; y += 32) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(this.width, y);
      ctx.stroke();
    }

    // Draw Racks
    this.racks.forEach(r => this.drawServerRack(r));

    // Draw NPCs
    this.drawNPC(this.turing, "#06b6d4");
    this.drawNPC(this.alice, "#8b5cf6");
    this.drawNPC(this.bob, "#f59e0b");

    // Draw Player
    this.drawPlayer();

    // Draw Active Speech Bubbles
    if (this.turing.speechTimer > 0) this.drawSpeechBubble(this.turing.x, this.turing.y - 45, this.turing.speech, "#06b6d4");
    if (this.alice.speechTimer > 0) this.drawSpeechBubble(this.alice.x, this.alice.y - 45, this.alice.speech, "#8b5cf6");
    if (this.bob.speechTimer > 0) this.drawSpeechBubble(this.bob.x, this.bob.y - 45, this.bob.speech, "#f59e0b");
    if (this.player.speechTimer > 0) this.drawSpeechBubble(this.player.x, this.player.y - 50, this.player.speech, "#10b981");
  }

  drawServerRack(r) {
    const ctx = this.ctx;
    const isHover = (this.hoverTarget && this.hoverTarget.id === r.id);

    ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
    ctx.fillRect(r.x + 4, r.y + 4, r.w, r.h);

    ctx.fillStyle = isHover ? "#142442" : "#0d172a";
    ctx.fillRect(r.x, r.y, r.w, r.h);

    ctx.strokeStyle = isHover ? "#22d3ee" : "rgba(6, 182, 212, 0.4)";
    ctx.lineWidth = isHover ? 2 : 1;
    ctx.strokeRect(r.x, r.y, r.w, r.h);

    // Header strip
    ctx.fillStyle = "#15223a";
    ctx.fillRect(r.x, r.y, r.w, 24);
    ctx.fillStyle = isHover ? "#38bdf8" : "#94a3b8";
    ctx.font = "bold 9px 'JetBrains Mono', monospace";
    ctx.fillText(r.name, r.x + 8, r.y + 16);

    ctx.fillStyle = "#64748b";
    ctx.font = "8px 'Inter', sans-serif";
    ctx.fillText(r.sub, r.x + 8, r.y + 36);

    const slotH = 22;
    const startY = r.y + 42;
    const numSlots = Math.floor((r.h - 50) / slotH);

    for (let i = 0; i < numSlots; i++) {
      const sy = startY + i * slotH;
      ctx.fillStyle = i % 2 === 0 ? "#101a2f" : "#0b1322";
      ctx.fillRect(r.x + 6, sy, r.w - 12, slotH - 4);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
      ctx.strokeRect(r.x + 6, sy, r.w - 12, slotH - 4);

      ctx.fillStyle = "#334155";
      ctx.fillRect(r.x + 10, sy + 6, 8, 4);

      const ledIdx = (i * 2) % r.leds.length;
      const led = r.leds[ledIdx];
      if (led && led.state) {
        ctx.fillStyle = led.color;
        ctx.shadowColor = led.color;
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(r.x + r.w - 20, sy + 8, 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    const fanX = r.x + r.w / 2;
    const fanY = r.y + r.h - 22;
    ctx.strokeStyle = "#38bdf8";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(fanX, fanY, 12, 0, Math.PI * 2);
    ctx.stroke();

    ctx.save();
    ctx.translate(fanX, fanY);
    ctx.rotate(r.fanAngle);
    for (let b = 0; b < 4; b++) {
      ctx.rotate(Math.PI / 2);
      ctx.fillStyle = "rgba(56, 189, 248, 0.6)";
      ctx.fillRect(0, -2, 9, 4);
    }
    ctx.restore();
  }

  drawNPC(npc, accentColor) {
    const ctx = this.ctx;

    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.beginPath();
    ctx.ellipse(npc.x, npc.y + 16, 16, 6, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#0e182a";
    ctx.beginPath();
    ctx.arc(npc.x, npc.y, 17, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = accentColor;
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.font = "18px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(npc.avatar, npc.x, npc.y);

    ctx.fillStyle = "rgba(8, 14, 26, 0.85)";
    ctx.strokeStyle = accentColor;
    ctx.lineWidth = 1;
    ctx.strokeRect(npc.x - 42, npc.y + 22, 84, 16);
    ctx.fillRect(npc.x - 42, npc.y + 22, 84, 16);

    ctx.fillStyle = "#fff";
    ctx.font = "bold 9px 'Inter', sans-serif";
    ctx.fillText(npc.name, npc.x, npc.y + 30);
    ctx.textAlign = "left";
    ctx.textBaseline = "alphabetic";
  }

  drawPlayer() {
    const ctx = this.ctx;
    const px = this.player.x;
    const py = this.player.y;

    ctx.fillStyle = "rgba(0, 0, 0, 0.55)";
    ctx.beginPath();
    ctx.ellipse(px, py + 18, 16, 6, 0, 0, Math.PI * 2);
    ctx.fill();

    const legOffset = Math.sin(this.player.walkFrame) * 4;

    ctx.fillStyle = "#1e293b";
    ctx.fillRect(px - 6, py + 8 + legOffset, 5, 10);
    ctx.fillRect(px + 1, py + 8 - legOffset, 5, 10);

    ctx.fillStyle = "#0284c7";
    ctx.fillRect(px - 10, py - 8, 20, 18);

    ctx.fillStyle = "#0f172a";
    ctx.fillRect(this.player.facing === "right" ? px - 14 : px + 6, py - 6, 8, 14);

    ctx.fillStyle = "#fbcfe8";
    ctx.beginPath();
    ctx.arc(px, py - 15, 8, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#1e1b4b";
    ctx.beginPath();
    ctx.arc(px, py - 18, 8, Math.PI, 0);
    ctx.fill();

    ctx.fillStyle = "#22d3ee";
    ctx.fillRect(this.player.facing === "right" ? px - 2 : px - 6, py - 16, 8, 3);

    ctx.fillStyle = "rgba(6, 182, 212, 0.25)";
    ctx.strokeStyle = "#22d3ee";
    ctx.lineWidth = 1;
    ctx.strokeRect(px - 34, py + 22, 68, 15);
    ctx.fillRect(px - 34, py + 22, 68, 15);

    ctx.textAlign = "center";
    ctx.fillStyle = "#22d3ee";
    ctx.font = "bold 9px 'JetBrains Mono', monospace";
    ctx.fillText("SysAdmin 💻", px, py + 33);
    ctx.textAlign = "left";
  }

  drawSpeechBubble(x, y, text, borderColor) {
    if (!text) return;
    const ctx = this.ctx;
    ctx.font = "11px 'Inter', sans-serif";
    const pad = 10;
    const maxW = 280;

    const words = text.split(" ");
    const lines = [];
    let curLine = words[0];

    for (let i = 1; i < words.length; i++) {
      const w = words[i];
      const measure = ctx.measureText(curLine + " " + w).width;
      if (measure < maxW - pad * 2) {
        curLine += " " + w;
      } else {
        lines.push(curLine);
        curLine = w;
      }
    }
    lines.push(curLine);

    const lineH = 15;
    const bubbleW = Math.min(maxW, Math.max(...lines.map(l => ctx.measureText(l).width)) + pad * 2);
    const bubbleH = lines.length * lineH + pad * 2;
    const bx = Math.max(10, Math.min(this.width - bubbleW - 10, x - bubbleW / 2));
    const by = Math.max(10, y - bubbleH);

    ctx.fillStyle = "rgba(8, 14, 28, 0.95)";
    ctx.beginPath();
    ctx.roundRect(bx, by, bubbleW, bubbleH, 8);
    ctx.fill();

    ctx.strokeStyle = borderColor || "#06b6d4";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.fillStyle = "rgba(8, 14, 28, 0.95)";
    ctx.beginPath();
    ctx.moveTo(x - 5, by + bubbleH);
    ctx.lineTo(x + 5, by + bubbleH);
    ctx.lineTo(x, by + bubbleH + 6);
    ctx.closePath();
    ctx.fill();

    ctx.strokeStyle = borderColor || "#06b6d4";
    ctx.beginPath();
    ctx.moveTo(x - 5, by + bubbleH);
    ctx.lineTo(x, by + bubbleH + 6);
    ctx.lineTo(x + 5, by + bubbleH);
    ctx.stroke();

    ctx.fillStyle = "#f8fafc";
    lines.forEach((line, idx) => {
      ctx.fillText(line, bx + pad, by + pad + (idx + 1) * lineH - 3);
    });
  }
}

window.CyberAutomationNocArena2D = CyberAutomationNocArena2D;
