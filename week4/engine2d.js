// ============================================================================
// LUXURY CORPORATE HQ — REAL-LIFE 2D ARCHITECTURAL OFFICE ENGINE
// Natural wood, marble, panoramic city skyline windows, indoor plants,
// executive desks, coffee bar, brass elevator, and interactive colleagues.
// ============================================================================

class CyberArena2D {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas ? this.canvas.getContext("2d") : null;
    this.width = 860;
    this.height = 380;

    // Player in executive business suit
    this.player = {
      x: 110,
      y: 205,
      targetX: null,
      targetY: null,
      vx: 0,
      vy: 0,
      speed: 2.7,
      facing: "right",
      walkFrame: 0,
      speech: "Assalomu alaykum! Hisobotlarni tekshiramiz.",
      speechTimer: 160
    };

    // Professor Atlas — Chief Data Architect
    this.mentor = {
      x: 115,
      y: 110,
      name: "Bosh Arxitektor Atlas",
      speech: "Har bir bo'lim stoliga yoki xodimga yaqinlashib suhbatlashishingiz mumkin!",
      speechTimer: 220
    };

    // Interactive Coffee Bar & Archive props
    this.props = [
      { id: "coffee", x: 52, y: 82, w: 46, h: 36, label: "☕ Espresso Bar", type: "coffee" },
      { id: "archive", x: 52, y: 315, w: 54, h: 32, label: "📚 Arxiv Javoni", type: "archive" }
    ];

    // Luxury Brass Elevator
    this.portal = {
      x: 804,
      y: 195,
      radius: 30,
      open: false,
      doorOpenRatio: 0
    };

    this.keys = {};
    this.particles = [];
    this.floatingTexts = [];
    this.highlightedEmpnos = new Set();
    this.highlightTimer = 0;
    this.currentSector = 1;
    this.bossDefeated = false;
    this.time = 0;

    // Active colleague with an interactive office event ("Voqealik")
    this.activeEventEmpno = 7782; // CLARK initially
    this.onTriggerEvent = null;   // callback when player interacts with colleague/coffee
    this.onInspectEmp = null;     // callback when player clicks an employee

    this.npcNodes = [];
    this.deptDesks = [];
    this.plants = [];

    this.initLayout();
    this.bindInput();
    this.resize();
    window.addEventListener("resize", () => this.resize());
    requestAnimationFrame(() => this.loop());
  }

  initLayout() {
    // 3 Real-Life Department Suites inside the floor
    this.deptDesks = [
      {
        deptno: 10,
        title: "10 • ACCOUNTING (Nyu-York)",
        x: 205,
        y: 68,
        w: 175,
        h: 265,
        rugColor: "#332924",
        borderColor: "#c8a96e",
        woodColor: "#4a3525"
      },
      {
        deptno: 20,
        title: "20 • RESEARCH (Dallas)",
        x: 398,
        y: 68,
        w: 175,
        h: 265,
        rugColor: "#25302b",
        borderColor: "#7c9a82",
        woodColor: "#463224"
      },
      {
        deptno: 30,
        title: "30 • SALES (Chikago)",
        x: 591,
        y: 68,
        w: 175,
        h: 265,
        rugColor: "#2d2830",
        borderColor: "#b89778",
        woodColor: "#4d3728"
      }
    ];

    // Indoor decorative plants for natural atmosphere
    this.plants = [
      { x: 182, y: 66 },
      { x: 386, y: 66 },
      { x: 579, y: 66 },
      { x: 774, y: 84 },
      { x: 774, y: 312 },
      { x: 182, y: 332 }
    ];

    const empList = window.COMPANY_DB ? window.COMPANY_DB.emp : [];
    const byDept = { 10: [], 20: [], 30: [] };
    empList.forEach((e) => {
      if (byDept[e.deptno]) byDept[e.deptno].push(e);
    });

    // Natural suit, hair, and skin palettes for the 14 employees
    const suitPalette = [
      "#2b3440", "#3b322c", "#263832", "#3d2f2f", "#2f3640",
      "#42382f", "#2c3a47", "#383430", "#2d3b36", "#3a2e39"
    ];
    const hairPalette = [
      "#241c18", "#4a3728", "#6e5239", "#1c1815", "#8c6d46",
      "#36281e", "#594433", "#2b221c"
    ];
    const skinPalette = [
      "#f0cfb0", "#e5be98", "#d9ae84", "#f4d6b8", "#cca178"
    ];

    this.npcNodes = [];
    [10, 20, 30].forEach((deptno) => {
      const box = this.deptDesks.find((d) => d.deptno === deptno);
      const list = byDept[deptno] || [];
      list.forEach((emp, idx) => {
        const col = idx % 2;
        const row = Math.floor(idx / 2);
        const nx = box.x + 50 + col * 76;
        const ny = box.y + 66 + row * 68;
        this.npcNodes.push({
          ...emp,
          x: nx,
          y: ny,
          baseX: nx,
          baseY: ny,
          suitColor: emp.job === "PRESIDENT" ? "#1a1817" : suitPalette[emp.empno % suitPalette.length],
          hairColor: hairPalette[emp.empno % hairPalette.length],
          skinColor: skinPalette[emp.empno % skinPalette.length],
          tieColor: emp.job === "PRESIDENT" ? "#d4af37" : emp.job === "MANAGER" ? "#a65446" : "#68899e",
          bobPhase: (idx * 1.1) + deptno * 0.2
        });
      });
    });
  }

  bindInput() {
    window.addEventListener("keydown", (e) => {
      const tag = document.activeElement ? document.activeElement.tagName : "";
      if (tag === "TEXTAREA" || tag === "INPUT" || tag === "SELECT") return;
      this.keys[e.key.toLowerCase()] = true;
      this.player.targetX = null;
      this.player.targetY = null;

      // Press E to interact with nearby colleague or coffee bar
      if (e.key.toLowerCase() === "e") {
        this.tryInteractNearest();
      }
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

        // Check if clicked on Coffee Bar
        const coffee = this.props.find((p) => p.id === "coffee");
        if (coffee && mx >= coffee.x - 10 && mx <= coffee.x + coffee.w + 10 && my >= coffee.y - 10 && my <= coffee.y + coffee.h + 10) {
          this.player.targetX = coffee.x + 25;
          this.player.targetY = coffee.y + 48;
          this.player.speech = "Bir finjon espresso ichib, hamkasblar bilan maslahatlashamiz!";
          this.player.speechTimer = 150;
          if (typeof this.onTriggerEvent === "function") {
            this.onTriggerEvent();
          }
          return;
        }

        // Check if clicked on an NPC employee
        for (const npc of this.npcNodes) {
          const dist = Math.hypot(mx - npc.x, my - npc.y);
          if (dist <= 24) {
            this.player.targetX = npc.x - 26;
            this.player.targetY = npc.y + 6;
            this.highlightedEmpnos = new Set([npc.empno]);
            this.highlightTimer = 180;
            if (npc.empno === this.activeEventEmpno && typeof this.onTriggerEvent === "function") {
              this.onTriggerEvent(npc.ename);
            } else {
              this.player.speech = `${npc.ename} (${npc.job}): Maosh $${npc.sal}, Bo'lim #${npc.deptno}`;
              this.player.speechTimer = 170;
            }
            return;
          }
        }

        // Check if clicked on Professor Atlas
        if (Math.hypot(mx - this.mentor.x, my - this.mentor.y) <= 26) {
          this.player.targetX = this.mentor.x + 30;
          this.player.targetY = this.mentor.y + 10;
          this.mentor.speech = "Savol shartini diqqat bilan o'qing. Kerak bo'lsa 'Maslahat' tugmasini bosing!";
          this.mentor.speechTimer = 180;
          return;
        }

        // Otherwise walk to clicked position
        this.player.targetX = Math.max(36, Math.min(this.width - 36, mx));
        this.player.targetY = Math.max(66, Math.min(this.height - 28, my));
      });
    }
  }

  tryInteractNearest() {
    // Check distance to active event NPC or coffee bar
    for (const npc of this.npcNodes) {
      if (Math.hypot(this.player.x - npc.x, this.player.y - npc.y) < 48) {
        if (typeof this.onTriggerEvent === "function") {
          this.onTriggerEvent(npc.ename);
          return;
        }
      }
    }
    if (typeof this.onTriggerEvent === "function") {
      this.onTriggerEvent();
    }
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  setSector(sectorId, isSectorComplete = false) {
    this.currentSector = sectorId;
    this.portal.open = isSectorComplete;
    this.bossDefeated = isSectorComplete;

    // Rotate which colleague has an office story event
    const eventEmpnos = [7782, 7566, 7698, 7844, 7902, 7839, 7499, 7788, 7934, 7369];
    this.activeEventEmpno = eventEmpnos[(sectorId - 1) % eventEmpnos.length];

    const secInfo = window.COMPANY_DB?.sectors?.find((s) => s.id === sectorId);
    if (secInfo) {
      this.mentor.speech = `${secInfo.name}: ${secInfo.subtitle}`;
      this.mentor.speechTimer = 220;
    }
  }

  celebrateSuccess(matchedEmpnos = [], rewardText = "+$250 Bonus") {
    this.highlightedEmpnos = new Set(matchedEmpnos);
    this.highlightTimer = 230;

    this.player.speech = "Hisobot tasdiqlandi! Ajoyib natija.";
    this.player.speechTimer = 130;

    // Soft warm gold confetti particles
    for (let i = 0; i < 22; i++) {
      const angle = (Math.PI * 2 * i) / 22;
      const speed = 1.2 + Math.random() * 2.2;
      this.particles.push({
        x: this.player.x,
        y: this.player.y - 12,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 0.6,
        life: 45 + Math.random() * 20,
        color: i % 2 === 0 ? "#d4af37" : "#7c9a82",
        size: 2.5 + Math.random() * 2
      });
    }

    this.floatingTexts.push({
      x: this.player.x,
      y: this.player.y - 26,
      text: rewardText,
      color: "#e6c77b",
      life: 65
    });
  }

  triggerErrorEffect(msg = "Hisobotda xatolik bor!") {
    this.player.speech = msg.length > 58 ? msg.slice(0, 58) + "..." : msg;
    this.player.speechTimer = 160;

    for (let i = 0; i < 12; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 1 + Math.random() * 1.8;
      this.particles.push({
        x: this.player.x,
        y: this.player.y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 28,
        color: "#c97a63",
        size: 2.5
      });
    }
  }

  update() {
    this.time += 0.04;

    let dx = 0;
    let dy = 0;
    if (this.keys["w"] || this.keys["arrowup"]) dy -= 1;
    if (this.keys["s"] || this.keys["arrowdown"]) dy += 1;
    if (this.keys["a"] || this.keys["arrowleft"]) dx -= 1;
    if (this.keys["d"] || this.keys["arrowright"]) dx += 1;

    if (dx !== 0 || dy !== 0) {
      const len = Math.hypot(dx, dy);
      this.player.vx = (dx / len) * this.player.speed;
      this.player.vy = (dy / len) * this.player.speed;
      if (dx < 0) this.player.facing = "left";
      if (dx > 0) this.player.facing = "right";
      this.player.walkFrame += 0.22;
    } else if (this.player.targetX !== null && this.player.targetY !== null) {
      const tdx = this.player.targetX - this.player.x;
      const tdy = this.player.targetY - this.player.y;
      const dist = Math.hypot(tdx, tdy);
      if (dist > 4) {
        this.player.vx = (tdx / dist) * this.player.speed;
        this.player.vy = (tdy / dist) * this.player.speed;
        if (tdx < -0.5) this.player.facing = "left";
        if (tdx > 0.5) this.player.facing = "right";
        this.player.walkFrame += 0.22;
      } else {
        this.player.targetX = null;
        this.player.targetY = null;
        this.player.vx = 0;
        this.player.vy = 0;
      }
    } else {
      this.player.vx *= 0.75;
      this.player.vy *= 0.75;
    }

    this.player.x = Math.max(34, Math.min(this.width - 34, this.player.x + this.player.vx));
    this.player.y = Math.max(66, Math.min(this.height - 26, this.player.y + this.player.vy));

    if (this.player.speechTimer > 0) this.player.speechTimer--;
    if (this.mentor.speechTimer > 0) this.mentor.speechTimer--;
    if (this.highlightTimer > 0) {
      this.highlightTimer--;
      if (this.highlightTimer === 0) this.highlightedEmpnos.clear();
    }

    // Smooth elevator door animation
    const targetRatio = this.portal.open ? 1 : 0;
    this.portal.doorOpenRatio += (targetRatio - this.portal.doorOpenRatio) * 0.08;

    this.particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.life -= 1;
    });
    this.particles = this.particles.filter((p) => p.life > 0);

    this.floatingTexts.forEach((ft) => {
      ft.y -= 0.55;
      ft.life -= 1;
    });
    this.floatingTexts = this.floatingTexts.filter((ft) => ft.life > 0);
  }

  draw() {
    if (!this.ctx) return;
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);

    // 1. Warm Parquet / Walnut Wood Floor
    this.drawLuxuryFloor(ctx);

    // 2. Top Architectural Wall & Panoramic City Skyline Windows
    this.drawPanoramicWall(ctx);

    // 3. Department Suites (Woven Rugs, Walnut Desks, Lamps, Laptops)
    this.deptDesks.forEach((d) => this.drawDepartmentSuite(ctx, d));

    // 4. Left Lounge Area (Coffee Bar, Archive Bookshelf, Reception Rug)
    this.drawLoungeProps(ctx);

    // 5. Indoor Plants
    this.plants.forEach((p) => this.drawIndoorPlant(ctx, p.x, p.y));

    // 6. Luxury Brass Elevator on Right Wall
    this.drawBrassElevator(ctx);

    // 7. Professor Atlas (Chief Architect)
    this.drawExecutivePerson(ctx, {
      x: this.mentor.x,
      y: this.mentor.y,
      label: "Prof. Atlas",
      subLabel: "Bosh Arxitektor",
      suitColor: "#383028",
      tieColor: "#c8a96e",
      skinColor: "#edd0b4",
      hairColor: "#8c857B",
      isHighlighted: false,
      isMentor: true
    });

    // 8. 14 Company Employees actively working at their mahogany desks
    this.npcNodes.forEach((npc) => {
      const isHighlighted = this.highlightedEmpnos.has(npc.empno);
      const hasEvent = npc.empno === this.activeEventEmpno;
      this.drawEmployeeAtWorkstation(ctx, npc, isHighlighted, hasEvent);
    });

    // 9. Player Character (Executive Analyst)
    const walkBob = Math.hypot(this.player.vx, this.player.vy) > 0.25 ? Math.sin(this.player.walkFrame) * 2.2 : 0;
    this.drawExecutivePerson(ctx, {
      x: this.player.x,
      y: this.player.y + walkBob,
      label: "SIZ (Tahlilchi)",
      subLabel: "",
      suitColor: "#1e2938",
      tieColor: "#d4af37",
      skinColor: "#f2d3b6",
      hairColor: "#261c16",
      isHighlighted: true,
      isPlayer: true
    });

    // 10. Particles & Floating Texts
    this.particles.forEach((p) => {
      ctx.fillStyle = p.color;
      ctx.globalAlpha = Math.max(0, p.life / 55);
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;

    this.floatingTexts.forEach((ft) => {
      ctx.font = "600 12px 'Inter', sans-serif";
      ctx.fillStyle = ft.color;
      ctx.textAlign = "center";
      ctx.fillText(ft.text, ft.x, ft.y);
    });

    // 11. Warm Ivory Speech Bubbles
    if (this.mentor.speechTimer > 0 && this.mentor.speech) {
      this.drawSpeechBubble(ctx, this.mentor.x, this.mentor.y - 34, this.mentor.speech, "#c8a96e");
    }
    if (this.player.speechTimer > 0 && this.player.speech) {
      this.drawSpeechBubble(ctx, this.player.x, this.player.y - 36, this.player.speech, "#7c9a82");
    }
  }

  drawLuxuryFloor(ctx) {
    // Rich warm walnut parquet base
    const grad = ctx.createLinearGradient(0, 52, 0, this.height);
    grad.addColorStop(0, "#2b231d");
    grad.addColorStop(0.5, "#332922");
    grad.addColorStop(1, "#261f19");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 52, this.width, this.height - 52);

    // Subtle wood plank lines (warm, low contrast, non-neon)
    ctx.strokeStyle = "rgba(200, 169, 110, 0.06)";
    ctx.lineWidth = 1;
    for (let y = 68; y < this.height; y += 24) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(this.width, y);
      ctx.stroke();
    }
    for (let x = 0; x < this.width; x += 64) {
      ctx.beginPath();
      ctx.moveTo(x, 52);
      ctx.lineTo(x, this.height);
      ctx.stroke();
    }

    // Bottom skirting board
    ctx.fillStyle = "#1c1612";
    ctx.fillRect(0, this.height - 8, this.width, 8);
  }

  drawPanoramicWall(ctx) {
    // Upper mahogany/walnut wall
    ctx.fillStyle = "#211a15";
    ctx.fillRect(0, 0, this.width, 54);

    // Crown molding trim
    ctx.fillStyle = "#c8a96e";
    ctx.globalAlpha = 0.35;
    ctx.fillRect(0, 52, this.width, 2);
    ctx.globalAlpha = 1;

    // 3 Panoramic Windows showing real-life city skyline (New York / Dallas / Chicago)
    const winPositions = [
      { x: 215, w: 155, city: "NEW YORK SKYLINE" },
      { x: 408, w: 155, city: "DALLAS SKYLINE" },
      { x: 601, w: 155, city: "CHICAGO SKYLINE" }
    ];

    winPositions.forEach((win, idx) => {
      // Natural golden-hour sky gradient
      const skyGrad = ctx.createLinearGradient(win.x, 6, win.x, 48);
      if (this.currentSector <= 4) {
        skyGrad.addColorStop(0, "#4f6d8a");
        skyGrad.addColorStop(1, "#c9b194");
      } else if (this.currentSector <= 8) {
        skyGrad.addColorStop(0, "#3d556e");
        skyGrad.addColorStop(1, "#c49a76");
      } else {
        skyGrad.addColorStop(0, "#243447");
        skyGrad.addColorStop(1, "#8c6d53");
      }
      ctx.fillStyle = skyGrad;
      ctx.fillRect(win.x, 6, win.w, 42);

      // Silhouette of distant office towers
      ctx.fillStyle = "rgba(32, 38, 48, 0.55)";
      const heights = [18, 28, 22, 32, 16, 26, 20, 29];
      heights.forEach((bh, i) => {
        const bx = win.x + 6 + i * 18;
        const h = bh + ((idx * 5 + i * 3) % 7);
        ctx.fillRect(bx, 48 - h, 14, h);
      });

      // Window mullions (warm bronze frames)
      ctx.strokeStyle = "#5c4938";
      ctx.lineWidth = 2;
      ctx.strokeRect(win.x, 6, win.w, 42);
      ctx.beginPath();
      ctx.moveTo(win.x + win.w / 2, 6);
      ctx.lineTo(win.x + win.w / 2, 48);
      ctx.stroke();
    });

    // Floor Plaque on top-left wall
    const secInfo = window.COMPANY_DB?.sectors?.find((s) => s.id === this.currentSector);
    ctx.fillStyle = "#2c231c";
    ctx.strokeStyle = "rgba(200, 169, 110, 0.5)";
    ctx.lineWidth = 1;
    ctx.fillRect(14, 10, 178, 34);
    ctx.strokeRect(14, 10, 178, 34);

    ctx.fillStyle = "#d4af37";
    ctx.font = "600 10px 'Inter', sans-serif";
    ctx.textAlign = "left";
    ctx.fillText(secInfo ? secInfo.name.toUpperCase() : `${this.currentSector}-QAVAT`, 22, 24);
    ctx.fillStyle = "#b8afa3";
    ctx.font = "10px 'Inter', sans-serif";
    ctx.fillText("Bosib yurish yoki WASD • [E] Suhbat", 22, 38);
  }

  drawDepartmentSuite(ctx, d) {
    // Woven executive carpet
    ctx.save();
    ctx.fillStyle = d.rugColor;
    ctx.strokeStyle = d.borderColor;
    ctx.lineWidth = 1.5;

    ctx.beginPath();
    ctx.roundRect(d.x, d.y, d.w, d.h, 8);
    ctx.fill();
    ctx.stroke();

    // Inner carpet border
    ctx.strokeStyle = "rgba(200, 169, 110, 0.18)";
    ctx.lineWidth = 1;
    ctx.strokeRect(d.x + 6, d.y + 6, d.w - 12, d.h - 12);

    // Brass Header Plaque for Department
    ctx.fillStyle = "#221c17";
    ctx.fillRect(d.x + 12, d.y + 10, d.w - 24, 22);
    ctx.strokeStyle = d.borderColor;
    ctx.strokeRect(d.x + 12, d.y + 10, d.w - 24, 22);

    ctx.fillStyle = "#f0eadc";
    ctx.font = "600 10px 'Inter', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(d.title, d.x + d.w / 2, d.y + 25);
    ctx.restore();
  }

  drawEmployeeAtWorkstation(ctx, npc, isHighlighted, hasEvent) {
    const { x, y, ename, sal, job, suitColor, tieColor, skinColor, hairColor } = npc;
    const isPresident = job === "PRESIDENT";
    const isManager = job === "MANAGER";
    const isClerk = job === "CLERK";
    const isSales = job === "SALESMAN";
    const isAnalyst = job === "ANALYST";

    ctx.save();

    // 1. Soft natural floor shadow under workstation
    ctx.fillStyle = "rgba(10, 8, 6, 0.4)";
    ctx.beginPath();
    ctx.ellipse(x, y + 14, 28, 8, 0, 0, Math.PI * 2);
    ctx.fill();

    // 2. High-back Executive Leather Chair behind employee
    ctx.fillStyle = isPresident ? "#12100e" : "#211b17";
    ctx.strokeStyle = isHighlighted ? "#d4af37" : "#3d322a";
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.roundRect(x - 13, y - 24, 26, 25, [8, 8, 3, 3]);
    ctx.fill();
    ctx.stroke();

    // Subtle leather stitch / button accents
    ctx.fillStyle = isHighlighted ? "#d4af37" : "rgba(200, 169, 110, 0.18)";
    ctx.fillRect(x - 8, y - 18, 16, 1.5);
    ctx.fillRect(x - 8, y - 12, 16, 1.5);

    // 3. Employee Body & Head
    if (isHighlighted) {
      // Golden spotlight beam from ceiling when matched by SQL query
      const spotGrad = ctx.createRadialGradient(x, y - 6, 2, x, y + 6, 38);
      spotGrad.addColorStop(0, "rgba(212, 175, 55, 0.35)");
      spotGrad.addColorStop(1, "rgba(212, 175, 55, 0)");
      ctx.fillStyle = spotGrad;
      ctx.beginPath();
      ctx.arc(x, y + 2, 36, 0, Math.PI * 2);
      ctx.fill();

      // Cheerful approval bob
      const joyBob = Math.sin(this.time * 5 + npc.bobPhase) * 2;

      // Seated upright, facing the camera / player!
      ctx.fillStyle = suitColor;
      ctx.beginPath();
      ctx.roundRect(x - 9, y - 14 + joyBob, 18, 16, 4);
      ctx.fill();

      // Dress shirt V-neck & silk tie
      ctx.fillStyle = "#f5f2eb";
      ctx.beginPath();
      ctx.moveTo(x - 4, y - 14 + joyBob);
      ctx.lineTo(x + 4, y - 14 + joyBob);
      ctx.lineTo(x, y - 6 + joyBob);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = tieColor;
      ctx.fillRect(x - 1.2, y - 12 + joyBob, 2.4, 8);

      // Head upright, facing forward smiling
      ctx.fillStyle = skinColor;
      ctx.beginPath();
      ctx.arc(x, y - 20 + joyBob, 7.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "rgba(40, 30, 20, 0.35)";
      ctx.stroke();

      // Styled Hair
      ctx.fillStyle = hairColor;
      ctx.beginPath();
      ctx.arc(x, y - 22 + joyBob, 7.5, Math.PI, Math.PI * 2);
      ctx.fill();

      // Cheerful smiling eyes
      ctx.fillStyle = "#1f1916";
      ctx.fillRect(x - 3.2, y - 21 + joyBob, 1.8, 1.4);
      ctx.fillRect(x + 1.4, y - 21 + joyBob, 1.8, 1.4);
      // Small smile
      ctx.strokeStyle = "#8c4a3e";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(x, y - 18 + joyBob, 2.5, 0.1, Math.PI - 0.1);
      ctx.stroke();

      // Raised approved dossier folder in hand!
      ctx.fillStyle = "#2d5e3e";
      ctx.beginPath();
      ctx.roundRect(x + 10, y - 22 + joyBob, 13, 16, 2);
      ctx.fill();
      ctx.strokeStyle = "#7cba8b";
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 8px 'Inter', sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("✓", x + 16.5, y - 11 + joyBob);
    } else {
      // ═══════════════════════════════════════════════════════════════════════
      // REAL-LIFE WORKING POSTURE (Focused on desk/laptop, NOT looking at camera!)
      // ═══════════════════════════════════════════════════════════════════════
      const workBob = Math.sin(this.time * 2.2 + npc.bobPhase) * 0.7;

      // Torso leaned slightly forward towards desk
      ctx.fillStyle = suitColor;
      ctx.beginPath();
      ctx.roundRect(x - 9, y - 13 + workBob, 18, 15, [4, 4, 2, 2]);
      ctx.fill();

      // Dress shirt collar visible at back of neck
      ctx.fillStyle = "#e8e5dc";
      ctx.fillRect(x - 3, y - 14 + workBob, 6, 2.5);

      // Head tilted DOWN towards screen / documents (view from slightly above)
      ctx.fillStyle = hairColor;
      ctx.beginPath();
      ctx.arc(x, y - 19 + workBob, 7.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "rgba(20, 15, 10, 0.4)";
      ctx.lineWidth = 0.8;
      ctx.stroke();

      // Forehead/face shadow angled towards the laptop/desk below
      ctx.fillStyle = skinColor;
      ctx.beginPath();
      ctx.ellipse(x, y - 14 + workBob, 4.5, 2.8, 0, 0, Math.PI);
      ctx.fill();
    }

    // 4. Executive Mahogany/Walnut Desk (in front of employee)
    const deskW = 54;
    const deskH = 21;
    const deskX = x - deskW / 2;
    const deskY = y - 4;

    ctx.fillStyle = isHighlighted ? "#4d3625" : "#3a281c";
    ctx.strokeStyle = isHighlighted ? "#d4af37" : "#241912";
    ctx.lineWidth = 1.3;
    ctx.beginPath();
    ctx.roundRect(deskX, deskY, deskW, deskH, 3);
    ctx.fill();
    ctx.stroke();

    // Chamfered desk border edge
    ctx.strokeStyle = isHighlighted ? "rgba(212, 175, 55, 0.5)" : "rgba(200, 169, 110, 0.14)";
    ctx.lineWidth = 1;
    ctx.strokeRect(deskX + 2, deskY + 2, deskW - 4, deskH - 4);

    // 5. Active Work Equipment on the Desk:
    // Open Laptop with Glowing Screen angled towards employee
    const lapX = x - 9;
    const lapY = deskY + 3;
    const lapW = 18;

    // Laptop base
    ctx.fillStyle = "#2c2a29";
    ctx.fillRect(lapX, lapY + 5, lapW, 6);

    // Screen (tilted up towards employee's eyes)
    ctx.fillStyle = isHighlighted ? "#3b5847" : "#1e2936";
    ctx.fillRect(lapX + 1, lapY - 1, lapW - 2, 7);
    ctx.strokeStyle = "#5a6878";
    ctx.lineWidth = 0.8;
    ctx.strokeRect(lapX + 1, lapY - 1, lapW - 2, 7);

    // Subtle code / spreadsheet glow and animated typing lines
    ctx.fillStyle = isHighlighted ? "#8ce09e" : "#89b4db";
    const linePhase = Math.floor((this.time * 4 + npc.empno) % 3);
    ctx.fillRect(lapX + 3, lapY + 1, 6 + linePhase * 2, 1.2);
    ctx.fillStyle = isHighlighted ? "#f3d27a" : "#68a07c";
    ctx.fillRect(lapX + 3, lapY + 3.2, 8, 1.2);

    // Blinking cursor
    if (Math.sin(this.time * 6) > 0) {
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(lapX + 12, lapY + 3.2, 1.2, 1.2);
    }

    // Hands actively typing on keyboard!
    if (!isHighlighted) {
      const typeLeft = Math.sin(this.time * 10 + npc.empno) * 0.9;
      const typeRight = Math.cos(this.time * 10 + npc.empno) * 0.9;
      ctx.fillStyle = skinColor;
      ctx.beginPath();
      ctx.arc(lapX + 4, lapY + 7.5 + typeLeft, 1.8, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(lapX + 14, lapY + 7.5 + typeRight, 1.8, 0, Math.PI * 2);
      ctx.fill();
    }

    // Role-specific Work Props on the Desk
    if (isClerk || isAnalyst) {
      ctx.fillStyle = "#f5f0e6";
      ctx.fillRect(x + 12, deskY + 3, 11, 13);
      ctx.fillStyle = "#8a7e70";
      ctx.fillRect(x + 13.5, deskY + 5, 8, 1);
      ctx.fillRect(x + 13.5, deskY + 7.5, 8, 1);
      ctx.fillRect(x + 13.5, deskY + 10, 6, 1);
      ctx.fillStyle = "#d4af37";
      ctx.fillRect(x + 10, deskY + 8, 1.5, 7);
    } else if (isSales) {
      ctx.fillStyle = "#e0dad0";
      ctx.beginPath();
      ctx.arc(x + 17, deskY + 9, 3.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#4a2d1d";
      ctx.beginPath();
      ctx.arc(x + 17, deskY + 9, 2, 0, Math.PI * 2);
      ctx.fill();
      if (Math.sin(this.time * 3 + npc.empno) > 0.4) {
        ctx.fillStyle = "rgba(240, 240, 240, 0.4)";
        ctx.beginPath();
        ctx.arc(x + 17, deskY + 4, 1.2, 0, Math.PI * 2);
        ctx.fill();
      }
    } else if (isManager) {
      ctx.fillStyle = "#221c17";
      ctx.fillRect(x - 22, deskY + 4, 8, 10);
      ctx.fillStyle = "#c8a96e";
      ctx.fillRect(x - 21, deskY + 5, 6, 3);
      ctx.fillStyle = "#f3d27a";
      ctx.beginPath();
      ctx.arc(x + 18, deskY + 6, 2.5, 0, Math.PI * 2);
      ctx.fill();
    } else if (isPresident) {
      ctx.fillStyle = "#d4af37";
      ctx.fillRect(x - 22, deskY + 4, 10, 6);
      ctx.fillStyle = "#181410";
      ctx.font = "bold 5px sans-serif";
      ctx.fillText("CEO", x - 17, deskY + 8.5);
      ctx.fillStyle = "#d4af37";
      ctx.font = "11px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("♔", x, y - 29);
    }

    // 6. Interactive Office Event ("Voqealik") Speech Notification
    if (hasEvent) {
      const pulse = Math.sin(this.time * 3.5) * 2;
      ctx.fillStyle = "#d4af37";
      ctx.beginPath();
      ctx.roundRect(x + 12, y - 32 + pulse, 20, 15, 4);
      ctx.fill();
      ctx.fillStyle = "#181512";
      ctx.font = "bold 9.5px 'Inter', sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("💬", x + 22, y - 21 + pulse);
    }

    // 7. Workstation Nameplate & Metrics Badge
    ctx.textAlign = "center";
    if (isHighlighted) {
      ctx.font = "bold 10px 'Inter', sans-serif";
      ctx.fillStyle = "#8ef0a4";
      ctx.fillText(`✓ ${ename}`, x, deskY + deskH + 11);
      ctx.font = "9px 'Inter', sans-serif";
      ctx.fillStyle = "#e6c77b";
      ctx.fillText(`$${sal} • ${job}`, x, deskY + deskH + 22);
    } else {
      ctx.font = "600 9px 'Inter', sans-serif";
      ctx.fillStyle = "#ded6c8";
      ctx.fillText(ename, x, deskY + deskH + 10);
      ctx.font = "8px 'Inter', sans-serif";
      ctx.fillStyle = "#9c9284";
      ctx.fillText(`$${sal} • ${job.slice(0, 4)}`, x, deskY + deskH + 19);
    }

    ctx.restore();
  }

  drawLoungeProps(ctx) {
    // Left Executive Lounge Rug
    ctx.save();
    ctx.fillStyle = "#2c2520";
    ctx.strokeStyle = "rgba(200, 169, 110, 0.3)";
    ctx.beginPath();
    ctx.roundRect(22, 68, 145, 285, 8);
    ctx.fill();
    ctx.stroke();

    // Coffee Bar Counter
    const c = this.props[0];
    ctx.fillStyle = "#4a3628";
    ctx.strokeStyle = "#c8a96e";
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.roundRect(c.x - 16, c.y - 12, 82, 32, 4);
    ctx.fill();
    ctx.stroke();

    // Espresso machine icon
    ctx.fillStyle = "#d9d2c7";
    ctx.fillRect(c.x - 6, c.y - 8, 16, 14);
    ctx.fillStyle = "#c8a96e";
    ctx.font = "600 9.5px 'Inter', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("☕ Kofe-Breyk (Voqea)", c.x + 25, c.y + 30);

    // Archive Bookshelf
    const a = this.props[1];
    ctx.fillStyle = "#3d2c1e";
    ctx.strokeStyle = "#8c7355";
    ctx.beginPath();
    ctx.roundRect(a.x - 16, a.y - 8, 86, 26, 3);
    ctx.fill();
    ctx.stroke();
    // Book spines
    const bookColors = ["#8c4a3e", "#4a6b5b", "#b89758", "#4f6278", "#7d5c43"];
    for (let i = 0; i < 8; i++) {
      ctx.fillStyle = bookColors[i % bookColors.length];
      ctx.fillRect(a.x - 10 + i * 9, a.y - 4, 6, 18);
    }
    ctx.fillStyle = "#bfb6a8";
    ctx.font = "9.5px 'Inter', sans-serif";
    ctx.fillText("📚 Korporativ Arxiv", a.x + 27, a.y + 30);
    ctx.restore();
  }

  drawIndoorPlant(ctx, x, y) {
    ctx.save();
    // Terracotta / Brass planter pot
    ctx.fillStyle = "#8c6244";
    ctx.strokeStyle = "#4d3422";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(x, y, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Natural sage/forest leaves
    const leafColors = ["#4d7358", "#638c6d", "#3d5e47"];
    for (let i = 0; i < 5; i++) {
      const angle = (i * Math.PI * 2) / 5 + 0.3;
      ctx.fillStyle = leafColors[i % leafColors.length];
      ctx.beginPath();
      ctx.ellipse(
        x + Math.cos(angle) * 6,
        y + Math.sin(angle) * 6 - 2,
        6,
        3.5,
        angle,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }
    ctx.restore();
  }

  drawBrassElevator(ctx) {
    const p = this.portal;
    ctx.save();

    // Elevator frame
    const frameW = 46;
    const frameH = 74;
    const fx = p.x - frameW / 2;
    const fy = p.y - frameH / 2;

    ctx.fillStyle = "#1c1815";
    ctx.strokeStyle = p.open ? "#d4af37" : "#705d47";
    ctx.lineWidth = 2.5;
    ctx.fillRect(fx, fy, frameW, frameH);
    ctx.strokeRect(fx, fy, frameW, frameH);

    // Warm interior light when open
    if (p.doorOpenRatio > 0.05) {
      ctx.fillStyle = "#f2dfb3";
      ctx.fillRect(fx + 3, fy + 3, frameW - 6, frameH - 6);
    }

    // Sliding Brass Doors
    const halfW = (frameW - 6) / 2;
    const slide = p.doorOpenRatio * (halfW - 3);

    ctx.fillStyle = "#9e8256";
    ctx.fillRect(fx + 3, fy + 3, halfW - slide, frameH - 6);
    ctx.fillRect(fx + 3 + halfW + slide, fy + 3, halfW - slide, frameH - 6);

    // Door seam
    ctx.strokeStyle = "#4a3b26";
    ctx.lineWidth = 1;
    ctx.strokeRect(fx + 3, fy + 3, halfW - slide, frameH - 6);
    ctx.strokeRect(fx + 3 + halfW + slide, fy + 3, halfW - slide, frameH - 6);

    // Floor indicator dial above elevator
    ctx.fillStyle = "#26201b";
    ctx.strokeStyle = "#c8a96e";
    ctx.beginPath();
    ctx.arc(p.x, fy - 12, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = p.open ? "#7c9a82" : "#d4af37";
    ctx.font = "bold 9px 'Inter', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(`${this.currentSector}F`, p.x, fy - 9);

    ctx.fillStyle = p.open ? "#9ec4a5" : "#bfb6a8";
    ctx.font = "600 9.5px 'Inter', sans-serif";
    ctx.fillText(p.open ? "LIFT OCHIQ" : "BOSH LIFT", p.x, fy + frameH + 15);
    ctx.restore();
  }

  drawExecutivePerson(ctx, cfg) {
    const {
      x, y, label, subLabel,
      suitColor, tieColor, skinColor, hairColor,
      isHighlighted, hasEvent, isPlayer, isPresident
    } = cfg;

    ctx.save();

    // Soft natural floor shadow
    ctx.fillStyle = "rgba(0, 0, 0, 0.32)";
    ctx.beginPath();
    ctx.ellipse(x, y + 13, 11, 4.5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Subtle warm gold floor ring if matched by query or player
    if (isHighlighted) {
      ctx.strokeStyle = isPlayer ? "#d4af37" : "#8fb896";
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.ellipse(x, y + 13, 15, 6.5, 0, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Suit Jacket / Torso
    ctx.fillStyle = suitColor;
    ctx.beginPath();
    ctx.roundRect(x - 9, y - 8, 18, 18, 4);
    ctx.fill();

    // Crisp White Dress Shirt V-neck
    ctx.fillStyle = "#f5f2eb";
    ctx.beginPath();
    ctx.moveTo(x - 4, y - 8);
    ctx.lineTo(x + 4, y - 8);
    ctx.lineTo(x, y + 1);
    ctx.closePath();
    ctx.fill();

    // Silk Tie
    ctx.fillStyle = tieColor;
    ctx.fillRect(x - 1.2, y - 6, 2.4, 9);

    // Shoulders / Arms
    ctx.strokeStyle = "#14110f";
    ctx.lineWidth = 1;
    ctx.strokeRect(x - 9, y - 8, 18, 18);

    // Natural Human Head
    ctx.fillStyle = skinColor;
    ctx.beginPath();
    ctx.arc(x, y - 15, 7.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "rgba(40, 30, 20, 0.35)";
    ctx.stroke();

    // Styled Hair
    ctx.fillStyle = hairColor;
    ctx.beginPath();
    ctx.arc(x, y - 17, 7.5, Math.PI, Math.PI * 2);
    ctx.fill();

    // Eyes
    ctx.fillStyle = "#1f1916";
    ctx.fillRect(x - 3, y - 16, 1.6, 1.6);
    ctx.fillRect(x + 1.5, y - 16, 1.6, 1.6);

    // President Crown Pin or Matched Document Folder Badge
    if (isPresident) {
      ctx.fillStyle = "#d4af37";
      ctx.font = "10px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("♔", x, y - 25);
    }

    // Interactive Office Event ("Voqealik") Exclamation Badge
    if (hasEvent) {
      const pulse = Math.sin(this.time * 3.5) * 2;
      ctx.fillStyle = "#d4af37";
      ctx.beginPath();
      ctx.roundRect(x + 9, y - 28 + pulse, 18, 14, 4);
      ctx.fill();
      ctx.fillStyle = "#181512";
      ctx.font = "bold 9px 'Inter', sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("💬", x + 18, y - 18 + pulse);
    }

    // Nameplate
    ctx.font = isHighlighted || isPlayer ? "600 9.5px 'Inter', sans-serif" : "500 9px 'Inter', sans-serif";
    ctx.textAlign = "center";
    ctx.fillStyle = isPlayer ? "#f3d27a" : isHighlighted ? "#b8e0bf" : "#e6e0d5";
    ctx.fillText(label, x, y + 25);

    if (subLabel) {
      ctx.font = "8.5px 'Inter', sans-serif";
      ctx.fillStyle = "#a89f91";
      ctx.fillText(subLabel, x, y + 35);
    }

    ctx.restore();
  }

  drawSpeechBubble(ctx, x, y, text, borderColor) {
    ctx.save();
    ctx.font = "500 10.5px 'Inter', sans-serif";
    const padX = 10;
    const textW = Math.min(310, ctx.measureText(text).width + padX * 2);
    const bx = Math.max(12, Math.min(this.width - textW - 12, x - textW / 2));
    const by = Math.max(8, y - 24);

    // Warm cream/espresso executive card bubble
    ctx.fillStyle = "rgba(30, 25, 21, 0.94)";
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = 1.3;
    ctx.beginPath();
    ctx.roundRect(bx, by, textW, 24, 6);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#f5f2eb";
    ctx.textAlign = "center";
    ctx.fillText(text, bx + textW / 2, by + 15.5);
    ctx.restore();
  }

  loop() {
    this.update();
    this.draw();
    requestAnimationFrame(() => this.loop());
  }
}

window.CyberArena2D = CyberArena2D;
