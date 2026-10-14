// ============================================================================
// WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 6 2D NOC & CONTAINER ARENA ENGINE
// Features: Virtual Memory Demand Paging, Page Replacement Comparison (FIFO/OPT/LRU),
// Docker Container Microservices (app1, app2, mypg), Volume Storage Persistence,
// Professor Turing (🐧 Tux), Alice (DevOps Lead), Bob (Virtual Memory Guru),
// Interactive WASD / Click Walk, Animated LED Racks, Docker Containers & Cooling Fans.
// ============================================================================

class CyberVirtualMemoryArena2D {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas ? this.canvas.getContext("2d") : null;
    this.width = 860;
    this.height = 380;

    // Player (Virtualization & Container Engineer)
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
      speech: "Virtual Memory, Demand Paging va Docker Microservislari laboratoriyasiga xush kelibsiz!",
      speechTimer: 240
    };

    // Professor Turing (Kernel & Memory Guru)
    this.turing = {
      x: 520,
      y: 265,
      name: "Prof. Turing 🐧",
      speech: "OPT kelajakni bilmaydi (Oracle), shuning uchun stack xususiyatiga ega LRU eng yaxshi amaliy yechimdir!",
      speechTimer: 260,
      avatar: "🐧"
    };

    // DevOps Alice (Container Architect)
    this.alice = {
      x: 350,
      y: 265,
      name: "Alice 👩‍💻",
      speech: "Doimiy ma'lumotlar uchun '-v pgdata:/var/lib/postgresql/data' unutilmasin! Aks holda rm da baza o'chadi!",
      speechTimer: 230,
      avatar: "👩‍💻"
    };

    // Specialist Bob (Paging & Allocator Specialist)
    this.bob = {
      x: 190,
      y: 265,
      name: "Bob 👨‍💻",
      speech: "EAT da 0.1% fault ham xotiraga murojaatni 41 barobarga sekinlashtiradi (8.2 μs)!",
      speechTimer: 230,
      avatar: "👨‍💻"
    };

    // 5 Infrastructure Racks in 2D Space
    this.racks = [
      {
        id: "rack_paging",
        x: 40,
        y: 45,
        w: 130,
        h: 175,
        name: "DEMAND PAGING",
        sub: "Fault Trap, EAT 8.2μs",
        tab: "paging",
        leds: [],
        fanAngle: 0,
        accent: "#06b6d4"
      },
      {
        id: "rack_replacement",
        x: 200,
        y: 45,
        w: 130,
        h: 175,
        name: "PAGE REPLACEMENT",
        sub: "FIFO 15, OPT 9, LRU 12",
        tab: "replacement",
        leds: [],
        fanAngle: 0,
        accent: "#8b5cf6"
      },
      {
        id: "rack_thrashing",
        x: 360,
        y: 45,
        w: 130,
        h: 175,
        name: "WORKING SET & PFF",
        sub: "Locality, Buddy, Slab",
        tab: "paging",
        leds: [],
        fanAngle: 0,
        accent: "#f59e0b"
      },
      {
        id: "rack_containers",
        x: 520,
        y: 45,
        w: 130,
        h: 175,
        name: "DOCKER CONTAINERS",
        sub: "app1:5000, app2:5001",
        tab: "containers",
        leds: [],
        fanAngle: 0,
        accent: "#0091e6"
      },
      {
        id: "rack_volumes",
        x: 680,
        y: 45,
        w: 140,
        h: 175,
        name: "VOLUMES & COMPOSE",
        sub: "pgdata, compose.yaml",
        tab: "compose",
        leds: [],
        fanAngle: 0,
        accent: "#10b981"
      }
    ];

    // Initialize blinking LEDs
    this.racks.forEach(rack => {
      for (let i = 0; i < 6; i++) {
        rack.leds.push({
          state: Math.random() > 0.4,
          timer: Math.floor(Math.random() * 40)
        });
      }
    });

    // Particles (Virtual Data Packets & Paging Lines)
    this.particles = [];
    for (let i = 0; i < 18; i++) {
      this.particles.push({
        x: Math.random() * 860,
        y: 35 + Math.random() * 200,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.4,
        size: 1 + Math.random() * 2,
        alpha: 0.2 + Math.random() * 0.6
      });
    }

    this.keys = {};
    this.animId = null;

    this.initEvents();
    this.startLoop();
  }

  initEvents() {
    window.addEventListener("keydown", (e) => {
      if (document.activeElement && (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA")) {
        return;
      }
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
        const clickX = (e.clientX - rect.left) * scaleX;
        const clickY = (e.clientY - rect.top) * scaleY;

        // Check rack click
        let hitRack = null;
        for (const rack of this.racks) {
          if (clickX >= rack.x && clickX <= rack.x + rack.w &&
              clickY >= rack.y && clickY <= rack.y + rack.h) {
            hitRack = rack;
            break;
          }
        }

        if (hitRack) {
          if (window.switchInspectorTab) {
            window.switchInspectorTab(hitRack.tab);
          }
          this.player.speech = `${hitRack.name} bloki ochildi! (${hitRack.sub})`;
          this.player.speechTimer = 160;
          return;
        }

        // Set target walk point
        this.player.targetX = Math.max(30, Math.min(this.width - 30, clickX));
        this.player.targetY = Math.max(240, Math.min(this.height - 30, clickY));
      });
    }
  }

  triggerPlayerAlert(msg) {
    this.player.speech = msg;
    this.player.speechTimer = 200;
  }

  triggerTuringQuote(msg) {
    this.turing.speech = msg;
    this.turing.speechTimer = 220;
  }

  update() {
    // 1. Player movement via Keyboard
    let moveX = 0;
    let moveY = 0;

    if (this.keys["arrowleft"] || this.keys["a"]) moveX -= 1;
    if (this.keys["arrowright"] || this.keys["d"]) moveX += 1;
    if (this.keys["arrowup"] || this.keys["w"]) moveY -= 1;
    if (this.keys["arrowdown"] || this.keys["s"]) moveY += 1;

    if (moveX !== 0 || moveY !== 0) {
      this.player.targetX = null;
      this.player.targetY = null;
      this.player.x += moveX * this.player.speed;
      this.player.y += moveY * this.player.speed;
      this.player.facing = moveX < 0 ? "left" : (moveX > 0 ? "right" : this.player.facing);
      this.player.walkFrame += 0.2;
    } else if (this.player.targetX !== null && this.player.targetY !== null) {
      const dx = this.player.targetX - this.player.x;
      const dy = this.player.targetY - this.player.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 4) {
        this.player.targetX = null;
        this.player.targetY = null;
      } else {
        this.player.x += (dx / dist) * this.player.speed;
        this.player.y += (dy / dist) * this.player.speed;
        this.player.facing = dx < 0 ? "left" : "right";
        this.player.walkFrame += 0.2;
      }
    }

    // Bounds checking
    this.player.x = Math.max(40, Math.min(this.width - 40, this.player.x));
    this.player.y = Math.max(235, Math.min(this.height - 35, this.player.y));

    // Speech timers
    if (this.player.speechTimer > 0) this.player.speechTimer--;
    if (this.turing.speechTimer > 0) this.turing.speechTimer--;
    if (this.alice.speechTimer > 0) this.alice.speechTimer--;
    if (this.bob.speechTimer > 0) this.bob.speechTimer--;

    // Rack LED updates
    this.racks.forEach(rack => {
      rack.fanAngle += 0.08;
      rack.leds.forEach(led => {
        led.timer--;
        if (led.timer <= 0) {
          led.state = Math.random() > 0.45;
          led.timer = Math.floor(20 + Math.random() * 40);
        }
      });
    });

    // Particles update
    this.particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = this.width;
      if (p.x > this.width) p.x = 0;
      if (p.y < 30) p.y = 230;
      if (p.y > 230) p.y = 30;
    });
  }

  draw() {
    if (!this.ctx) return;
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);

    // 1. Dark Datacenter NOC Background
    const bgGrad = ctx.createLinearGradient(0, 0, 0, this.height);
    bgGrad.addColorStop(0, "#050b16");
    bgGrad.addColorStop(0.65, "#0a1529");
    bgGrad.addColorStop(0.66, "#040810");
    bgGrad.addColorStop(1, "#020408");
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, this.width, this.height);

    // Floor Grid lines (Perspective Tile Floor)
    ctx.strokeStyle = "rgba(0, 145, 230, 0.12)";
    ctx.lineWidth = 1;
    for (let y = 245; y < this.height; y += 22) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(this.width, y);
      ctx.stroke();
    }
    for (let x = 0; x < this.width; x += 38) {
      ctx.beginPath();
      ctx.moveTo(x, 245);
      ctx.lineTo(x, this.height);
      ctx.stroke();
    }

    // 2. Overhead Neon Data Piping
    ctx.strokeStyle = "rgba(139, 92, 246, 0.35)";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(20, 30);
    ctx.lineTo(this.width - 20, 30);
    ctx.stroke();

    ctx.strokeStyle = "rgba(0, 145, 230, 0.4)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(20, 26);
    ctx.lineTo(this.width - 20, 26);
    ctx.stroke();

    // Data packet particles
    this.particles.forEach(p => {
      ctx.fillStyle = `rgba(56, 189, 248, ${p.alpha})`;
      ctx.fillRect(p.x, p.y, p.size, p.size);
    });

    // 3. Draw 5 Server Racks
    this.racks.forEach(rack => {
      this.drawRack(ctx, rack);
    });

    // 4. Draw Characters
    this.drawNPC(ctx, this.bob, "#38bdf8", "👨‍💻");
    this.drawNPC(ctx, this.alice, "#a78bfa", "👩‍💻");
    this.drawNPC(ctx, this.turing, "#facc15", "🐧");
    this.drawPlayer(ctx, this.player);

    // 5. Speech Bubbles
    if (this.bob.speechTimer > 0) this.drawBubble(ctx, this.bob.x, this.bob.y - 45, this.bob.speech, "#38bdf8");
    if (this.alice.speechTimer > 0) this.drawBubble(ctx, this.alice.x, this.alice.y - 45, this.alice.speech, "#a78bfa");
    if (this.turing.speechTimer > 0) this.drawBubble(ctx, this.turing.x, this.turing.y - 45, this.turing.speech, "#facc15");
    if (this.player.speechTimer > 0) this.drawBubble(ctx, this.player.x, this.player.y - 50, this.player.speech, "#22d3ee");
  }

  drawRack(ctx, rack) {
    // Rack casing
    ctx.fillStyle = "#0c182c";
    ctx.strokeStyle = rack.accent;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(rack.x, rack.y, rack.w, rack.h, 6);
    ctx.fill();
    ctx.stroke();

    // Header banner
    ctx.fillStyle = "#12233f";
    ctx.fillRect(rack.x + 1, rack.y + 1, rack.w - 2, 26);

    ctx.font = "bold 9.5px 'JetBrains Mono', monospace";
    ctx.fillStyle = rack.accent;
    ctx.textAlign = "center";
    ctx.fillText(rack.name, rack.x + rack.w / 2, rack.y + 16);

    // Subtitle
    ctx.font = "8.5px 'Inter', sans-serif";
    ctx.fillStyle = "#94a3b8";
    ctx.fillText(rack.sub, rack.x + rack.w / 2, rack.y + 36);

    // Server blade slots (4 blades)
    for (let b = 0; b < 4; b++) {
      const by = rack.y + 44 + b * 26;
      ctx.fillStyle = "#070e1c";
      ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(rack.x + 8, by, rack.w - 16, 22, 3);
      ctx.fill();
      ctx.stroke();

      // Ventilation slots
      ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
      for (let v = 0; v < 6; v++) {
        ctx.fillRect(rack.x + 14 + v * 6, by + 16, 3, 2);
      }

      // Blade LEDs
      const ledIdx = (b * 2) % rack.leds.length;
      const led1 = rack.leds[ledIdx];
      const led2 = rack.leds[(ledIdx + 1) % rack.leds.length];

      ctx.fillStyle = led1.state ? rack.accent : "#1e293b";
      ctx.beginPath();
      ctx.arc(rack.x + rack.w - 28, by + 10, 2.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = led2.state ? "#10b981" : "#1e293b";
      ctx.beginPath();
      ctx.arc(rack.x + rack.w - 18, by + 10, 2.5, 0, Math.PI * 2);
      ctx.fill();
    }

    // Cooling Fan at bottom
    const fanX = rack.x + rack.w / 2;
    const fanY = rack.y + rack.h - 18;
    ctx.strokeStyle = "rgba(255, 255, 255, 0.18)";
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.arc(fanX, fanY, 11, 0, Math.PI * 2);
    ctx.stroke();

    // Blades
    ctx.strokeStyle = rack.accent;
    ctx.lineWidth = 1.5;
    for (let a = 0; a < 3; a++) {
      const angle = rack.fanAngle + (a * Math.PI * 2) / 3;
      ctx.beginPath();
      ctx.moveTo(fanX, fanY);
      ctx.lineTo(fanX + Math.cos(angle) * 9, fanY + Math.sin(angle) * 9);
      ctx.stroke();
    }
  }

  drawNPC(ctx, npc, color, symbol) {
    ctx.save();
    ctx.translate(npc.x, npc.y);

    // Shadow
    ctx.fillStyle = "rgba(0, 0, 0, 0.45)";
    ctx.beginPath();
    ctx.ellipse(0, 8, 14, 5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Body pedestal
    ctx.fillStyle = `rgba(255, 255, 255, 0.05)`;
    ctx.beginPath();
    ctx.arc(0, -10, 16, 0, Math.PI * 2);
    ctx.fill();

    // Avatar emoji
    ctx.font = "24px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(symbol, 0, -12);

    // Name Tag
    ctx.font = "bold 9.5px 'JetBrains Mono', monospace";
    ctx.fillStyle = color;
    ctx.textAlign = "center";
    ctx.fillText(npc.name, 0, 18);

    ctx.restore();
  }

  drawPlayer(ctx, p) {
    ctx.save();
    ctx.translate(p.x, p.y);

    // Shadow
    ctx.fillStyle = "rgba(0, 0, 0, 0.55)";
    ctx.beginPath();
    ctx.ellipse(0, 9, 16, 6, 0, 0, Math.PI * 2);
    ctx.fill();

    // Animated Bobbing
    const bob = Math.sin(p.walkFrame) * 2;

    // Glowing ring under player
    ctx.strokeStyle = "rgba(34, 211, 238, 0.6)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.ellipse(0, 9, 14, 5, 0, 0, Math.PI * 2);
    ctx.stroke();

    // Body (Virtualization Suit)
    ctx.fillStyle = "#0284c7";
    ctx.beginPath();
    ctx.roundRect(-10, -22 + bob, 20, 22, 5);
    ctx.fill();

    // Head
    ctx.fillStyle = "#fbcfe8";
    ctx.beginPath();
    ctx.arc(0, -28 + bob, 8.5, 0, Math.PI * 2);
    ctx.fill();

    // DevOps Visor
    ctx.fillStyle = "#38bdf8";
    ctx.fillRect(p.facing === "left" ? -8 : -1, -30 + bob, 9, 4);

    // Laptop
    ctx.fillStyle = "#334155";
    ctx.fillRect(p.facing === "left" ? -14 : 6, -14 + bob, 8, 10);
    ctx.fillStyle = "#38bdf8";
    ctx.fillRect(p.facing === "left" ? -13 : 7, -13 + bob, 6, 8);

    // Label
    ctx.font = "bold 9.5px 'JetBrains Mono', monospace";
    ctx.fillStyle = "#38bdf8";
    ctx.textAlign = "center";
    ctx.fillText("SEN (TALABA)", 0, 22);

    ctx.restore();
  }

  drawBubble(ctx, x, y, text, accentColor) {
    ctx.save();
    ctx.font = "11px 'Inter', sans-serif";
    const padding = 8;
    const maxW = 210;

    // Word wrap
    const words = text.split(" ");
    let line = "";
    const lines = [];
    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + " ";
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxW && n > 0) {
        lines.push(line);
        line = words[n] + " ";
      } else {
        line = testLine;
      }
    }
    lines.push(line);

    const bWidth = Math.min(maxW + padding * 2, 230);
    const bHeight = lines.length * 15 + padding * 2;
    const bx = Math.max(10, Math.min(this.width - bWidth - 10, x - bWidth / 2));
    const by = Math.max(10, y - bHeight);

    // Background Bubble
    ctx.fillStyle = "rgba(10, 20, 38, 0.94)";
    ctx.strokeStyle = accentColor;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(bx, by, bWidth, bHeight, 7);
    ctx.fill();
    ctx.stroke();

    // Bubble pointer
    ctx.fillStyle = "rgba(10, 20, 38, 0.94)";
    ctx.beginPath();
    ctx.moveTo(x - 5, by + bHeight);
    ctx.lineTo(x, by + bHeight + 6);
    ctx.lineTo(x + 5, by + bHeight);
    ctx.fill();

    // Text lines
    ctx.fillStyle = "#f8fafc";
    ctx.textAlign = "left";
    lines.forEach((l, idx) => {
      ctx.fillText(l.trim(), bx + padding, by + padding + 11 + idx * 15);
    });

    ctx.restore();
  }

  startLoop() {
    const loop = () => {
      this.update();
      this.draw();
      this.animId = requestAnimationFrame(loop);
    };
    this.animId = requestAnimationFrame(loop);
  }

  destroy() {
    if (this.animId) cancelAnimationFrame(this.animId);
  }
}

window.CyberVirtualMemoryArena2D = CyberVirtualMemoryArena2D;
