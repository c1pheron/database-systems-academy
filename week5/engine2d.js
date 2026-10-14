// ============================================================================
// LUXURY CORPORATE HQ & STORAGE ARCHITECTURE — 2D OFFICE ENGINE (WEEK 5)
// Natural wood, marble, panoramic skyline windows, server racks,
// executive desks, espresso bar, brass elevator, and interactive colleagues.
// ============================================================================

class CyberArena2D {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas ? this.canvas.getContext("2d") : null;
    this.width = 860;
    this.height = 380;

    // Player in executive suit
    this.player = {
      x: 110,
      y: 205,
      targetX: null,
      targetY: null,
      vx: 0,
      vy: 0,
      speed: 2.8,
      facing: "right",
      walkFrame: 0,
      speech: "Assalomu alaykum! JOIN va Storage hisobotlarini tekshiramiz.",
      speechTimer: 160
    };

    // Professor Atlas — Chief Data Architect
    this.mentor = {
      x: 115,
      y: 110,
      name: "Prof. Atlas",
      speech: "Har bir bo'limga yoki xodimga yaqinlashib suhbatlashishingiz mumkin!",
      speechTimer: 220
    };

    // Interactive Props
    this.props = [
      { id: "coffee", x: 50, y: 82, w: 46, h: 36, label: "☕ Espresso Bar", type: "coffee" },
      { id: "archive", x: 50, y: 315, w: 56, h: 32, label: "📚 B+ Tree Server Stoykasi", type: "archive" }
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
    this.time = 0;

    // Active colleague with office event
    this.activeEventEmpno = 7782; // CLARK initially
    this.onTriggerEvent = null;

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

        // Check Coffee Bar
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

        // Check NPC employee
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

        // Check Professor Atlas
        if (Math.hypot(mx - this.mentor.x, my - this.mentor.y) <= 26) {
          this.player.targetX = this.mentor.x + 30;
          this.player.targetY = this.mentor.y + 10;
          this.mentor.speech = "Savol shartini diqqat bilan o'qing. JOIN va Aggregatsiyalarni to'g'ri qo'llang!";
          this.mentor.speechTimer = 180;
          return;
        }

        // Walk to clicked position
        this.player.targetX = Math.max(36, Math.min(this.width - 36, mx));
        this.player.targetY = Math.max(66, Math.min(this.height - 28, my));
      });
    }
  }

  tryInteractNearest() {
    for (const npc of this.npcNodes) {
      if (Math.hypot(this.player.x - npc.x, this.player.y - npc.y) < 48) {
        if (typeof this.onTriggerEvent === "function") {
          this.onTriggerEvent(npc.ename);
          return;
        }
      }
    }
    const coffee = this.props.find((p) => p.id === "coffee");
    if (coffee && Math.hypot(this.player.x - (coffee.x + 25), this.player.y - (coffee.y + 40)) < 55) {
      if (typeof this.onTriggerEvent === "function") {
        this.onTriggerEvent();
      }
    }
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  setSector(sectorId) {
    this.currentSector = sectorId;
    // Update active event NPC based on sector
    const eventEmpMap = {
      1: 7782, // CLARK
      2: 7566, // JONES
      3: 7698, // BLAKE
      4: 7844, // TURNER
      5: 7839, // KING
      6: 7902, // FORD
      7: 7788, // SCOTT
      8: 7369, // SMITH
      9: 7876, // ADAMS
      10: 7934 // MILLER
    };
    this.activeEventEmpno = eventEmpMap[sectorId] || 7782;
  }

  setFloorCleared(isCleared) {
    this.portal.open = isCleared;
  }

  spawnBonusEffect(text) {
    this.floatingTexts.push({
      x: this.player.x,
      y: this.player.y - 30,
      text: text || "+$500 Bonus!",
      life: 70,
      color: "#dfc288"
    });
    for (let i = 0; i < 18; i++) {
      const angle = (Math.PI * 2 * i) / 18;
      const speed = 1.2 + Math.random() * 2.0;
      this.particles.push({
        x: this.player.x,
        y: this.player.y - 12,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 0.5,
        life: 45 + Math.random() * 20,
        color: i % 2 === 0 ? "#c8a96e" : "#5c8d73",
        size: 2 + Math.random() * 2.5
      });
    }
  }

  loop() {
    this.time += 0.03;
    this.update();
    this.draw();
    requestAnimationFrame(() => this.loop());
  }

  update() {
    // Keyboard movement
    let moveX = 0, moveY = 0;
    if (this.keys["arrowleft"] || this.keys["a"]) moveX -= 1;
    if (this.keys["arrowright"] || this.keys["d"]) moveX += 1;
    if (this.keys["arrowup"] || this.keys["w"]) moveY -= 1;
    if (this.keys["arrowdown"] || this.keys["s"]) moveY += 1;

    if (moveX !== 0 || moveY !== 0) {
      const len = Math.hypot(moveX, moveY) || 1;
      this.player.vx = (moveX / len) * this.player.speed;
      this.player.vy = (moveY / len) * this.player.speed;
      if (moveX < 0) this.player.facing = "left";
      if (moveX > 0) this.player.facing = "right";
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

    // Elevator door ratio
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

    // 1. Luxury Parquet / Walnut Wood Floor
    this.drawLuxuryFloor(ctx);

    // 2. Wall Panelling & Panoramic Skyline Windows
    this.drawPanoramicWall(ctx);

    // 3. Department Suites (10, 20, 30)
    this.deptDesks.forEach((d) => this.drawDepartmentSuite(ctx, d));

    // 4. Left Lounge Area (Coffee Bar, Server Vault)
    this.drawLoungeProps(ctx);

    // 5. Indoor Plants
    this.plants.forEach((p) => this.drawIndoorPlant(ctx, p.x, p.y));

    // 6. Brass Elevator
    this.drawBrassElevator(ctx);

    // 7. Professor Atlas
    this.drawExecutivePerson(ctx, {
      x: this.mentor.x,
      y: this.mentor.y,
      label: "Prof. Atlas",
      subLabel: "Bosh Arxitektor",
      suitColor: "#383028",
      tieColor: "#c8a96e",
      skinColor: "#edd0b4",
      hairColor: "#8c857b",
      isHighlighted: false,
      isMentor: true
    });

    // 8. 14 Company Employees at Workstations
    this.npcNodes.forEach((npc) => {
      const isHighlighted = this.highlightedEmpnos.has(npc.empno);
      const hasEvent = npc.empno === this.activeEventEmpno;
      this.drawEmployeeAtWorkstation(ctx, npc, isHighlighted, hasEvent);
    });

    // 9. Player Character
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
      isHighlighted: false,
      isPlayer: true
    });

    // 10. Speech Bubbles
    if (this.player.speechTimer > 0) {
      this.drawSpeechBubble(ctx, this.player.x, this.player.y - 36, this.player.speech, "#c8a96e");
    }
    if (this.mentor.speechTimer > 0) {
      this.drawSpeechBubble(ctx, this.mentor.x, this.mentor.y - 36, this.mentor.speech, "#5c8d73");
    }

    // 11. Particles & Floating Texts
    this.particles.forEach((p) => {
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    });

    this.floatingTexts.forEach((ft) => {
      ctx.font = "bold 13px 'Inter', sans-serif";
      ctx.fillStyle = ft.color;
      ctx.textAlign = "center";
      ctx.fillText(ft.text, ft.x, ft.y);
    });
  }

  drawLuxuryFloor(ctx) {
    ctx.fillStyle = "#2c221b";
    ctx.fillRect(0, 0, this.width, this.height);

    ctx.strokeStyle = "rgba(0, 0, 0, 0.25)";
    ctx.lineWidth = 1;
    const plankH = 24;
    for (let y = 60; y < this.height; y += plankH) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(this.width, y);
      ctx.stroke();

      const offset = (Math.floor(y / plankH) % 2) * 55;
      for (let x = offset; x < this.width; x += 110) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, y + plankH);
        ctx.stroke();
      }
    }

    // Reception marble strip on left
    const gradMarble = ctx.createLinearGradient(0, 0, 160, 0);
    gradMarble.addColorStop(0, "rgba(35, 29, 24, 0.95)");
    gradMarble.addColorStop(1, "rgba(44, 34, 27, 0.4)");
    ctx.fillStyle = gradMarble;
    ctx.fillRect(0, 60, 160, this.height - 60);
  }

  drawPanoramicWall(ctx) {
    ctx.fillStyle = "#1e1713";
    ctx.fillRect(0, 0, this.width, 60);

    ctx.strokeStyle = "#403227";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, 60);
    ctx.lineTo(this.width, 60);
    ctx.stroke();

    // 3 Panoramic Windows overlooking city skyline
    const windows = [
      { x: 235, w: 115 },
      { x: 428, w: 115 },
      { x: 621, w: 115 }
    ];

    windows.forEach((win) => {
      ctx.fillStyle = "#0e131a";
      ctx.fillRect(win.x, 8, win.w, 44);

      // Building silhouettes
      ctx.fillStyle = "#1b2533";
      ctx.fillRect(win.x + 8, 22, 18, 30);
      ctx.fillRect(win.x + 32, 14, 24, 38);
      ctx.fillRect(win.x + 62, 26, 20, 26);
      ctx.fillRect(win.x + 88, 18, 19, 34);

      // Glowing office lights in buildings
      ctx.fillStyle = "rgba(224, 194, 136, 0.65)";
      for (let bx = win.x + 36; bx < win.x + 52; bx += 5) {
        for (let by = 20; by < 46; by += 7) {
          if ((bx + by) % 3 === 0) ctx.fillRect(bx, by, 2, 3);
        }
      }

      ctx.strokeStyle = "#5a4533";
      ctx.lineWidth = 2;
      ctx.strokeRect(win.x, 8, win.w, 44);
    });
  }

  drawDepartmentSuite(ctx, d) {
    // Carpet
    ctx.fillStyle = d.rugColor;
    ctx.fillRect(d.x, d.y, d.w, d.h);
    ctx.strokeStyle = d.borderColor;
    ctx.lineWidth = 1.5;
    ctx.strokeRect(d.x, d.y, d.w, d.h);

    // Title label
    ctx.font = "bold 9.5px 'JetBrains Mono', monospace";
    ctx.fillStyle = d.borderColor;
    ctx.textAlign = "left";
    ctx.fillText(d.title, d.x + 8, d.y + 16);
  }

  drawLoungeProps(ctx) {
    // Espresso Bar
    const coffee = this.props.find((p) => p.id === "coffee");
    if (coffee) {
      ctx.fillStyle = "#3d2a1c";
      ctx.fillRect(coffee.x, coffee.y, coffee.w, coffee.h);
      ctx.strokeStyle = "#c8a96e";
      ctx.lineWidth = 1;
      ctx.strokeRect(coffee.x, coffee.y, coffee.w, coffee.h);

      ctx.fillStyle = "#b58d52";
      ctx.fillRect(coffee.x + 10, coffee.y + 6, 26, 16);

      // Steam particles
      if (Math.random() < 0.25) {
        this.particles.push({
          x: coffee.x + 22 + (Math.random() * 6 - 3),
          y: coffee.y + 4,
          vx: (Math.random() - 0.5) * 0.3,
          vy: -0.6 - Math.random() * 0.4,
          life: 30,
          color: "rgba(242, 237, 228, 0.4)",
          size: 1.5
        });
      }

      ctx.font = "9px 'Inter', sans-serif";
      ctx.fillStyle = "#f2ede4";
      ctx.textAlign = "center";
      ctx.fillText("☕ Bar", coffee.x + coffee.w / 2, coffee.y + coffee.h + 11);
    }

    // B+ Tree Server Rack
    const archive = this.props.find((p) => p.id === "archive");
    if (archive) {
      ctx.fillStyle = "#181a1c";
      ctx.fillRect(archive.x, archive.y, archive.w, archive.h);
      ctx.strokeStyle = "#5c8d73";
      ctx.lineWidth = 1;
      ctx.strokeRect(archive.x, archive.y, archive.w, archive.h);

      // Blinking LEDs
      for (let i = 0; i < 4; i++) {
        const isBlink = Math.sin(this.time * 6 + i) > 0;
        ctx.fillStyle = isBlink ? "#5c8d73" : "#243a2e";
        ctx.fillRect(archive.x + 6 + i * 12, archive.y + 8, 5, 4);
      }

      ctx.font = "8.5px 'JetBrains Mono', monospace";
      ctx.fillStyle = "#8ed0a8";
      ctx.textAlign = "center";
      ctx.fillText("💾 DWH Lake", archive.x + archive.w / 2, archive.y + archive.h + 10);
    }
  }

  drawIndoorPlant(ctx, x, y) {
    ctx.fillStyle = "#5c4028";
    ctx.beginPath();
    ctx.moveTo(x - 6, y + 8);
    ctx.lineTo(x + 6, y + 8);
    ctx.lineTo(x + 4, y + 16);
    ctx.lineTo(x - 4, y + 16);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "#3e6649";
    ctx.beginPath();
    ctx.arc(x, y + 4, 7, 0, Math.PI * 2);
    ctx.arc(x - 5, y + 2, 5, 0, Math.PI * 2);
    ctx.arc(x + 5, y + 2, 5, 0, Math.PI * 2);
    ctx.fill();
  }

  drawBrassElevator(ctx) {
    const p = this.portal;
    ctx.fillStyle = "#332617";
    ctx.fillRect(p.x - 22, p.y - 36, 44, 72);

    ctx.strokeStyle = "#c8a96e";
    ctx.lineWidth = 2;
    ctx.strokeRect(p.x - 22, p.y - 36, 44, 72);

    // Floor indicator light
    ctx.fillStyle = p.open ? "#8ed0a8" : "#dfc288";
    ctx.beginPath();
    ctx.arc(p.x, p.y - 42, 4, 0, Math.PI * 2);
    ctx.fill();

    // Sliding doors
    const openW = 16 * p.doorOpenRatio;
    ctx.fillStyle = "#523c21";
    ctx.fillRect(p.x - 18, p.y - 32, 18 - openW, 64);
    ctx.fillRect(p.x + openW, p.y - 32, 18 - openW, 64);

    ctx.font = "bold 9px 'JetBrains Mono', monospace";
    ctx.fillStyle = "#c8a96e";
    ctx.textAlign = "center";
    ctx.fillText(`${this.currentSector}-QAVAT`, p.x, p.y + 46);
  }

  drawExecutivePerson(ctx, opt) {
    const x = opt.x;
    const y = opt.y;

    // Head
    ctx.fillStyle = opt.skinColor;
    ctx.beginPath();
    ctx.arc(x, y - 10, 6.5, 0, Math.PI * 2);
    ctx.fill();

    // Hair
    ctx.fillStyle = opt.hairColor;
    ctx.beginPath();
    ctx.arc(x, y - 12.5, 6.5, Math.PI, Math.PI * 2);
    ctx.fill();

    // Suit Body
    ctx.fillStyle = opt.suitColor;
    ctx.fillRect(x - 7.5, y - 3, 15, 14);

    // Shirt & Tie
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(x - 2, y - 3, 4, 5);
    ctx.fillStyle = opt.tieColor;
    ctx.fillRect(x - 1.5, y - 1, 3, 8);

    // Legs
    ctx.fillStyle = opt.suitColor;
    ctx.fillRect(x - 6, y + 11, 4.5, 9);
    ctx.fillRect(x + 1.5, y + 11, 4.5, 9);

    // Shoes
    ctx.fillStyle = "#0f0c0a";
    ctx.fillRect(x - 7, y + 19, 5.5, 3);
    ctx.fillRect(x + 1.5, y + 19, 5.5, 3);

    // Label
    if (opt.label) {
      ctx.font = "bold 9px 'Inter', sans-serif";
      ctx.fillStyle = opt.isMentor ? "#c8a96e" : opt.isPlayer ? "#dfc288" : "#f2ede4";
      ctx.textAlign = "center";
      ctx.fillText(opt.label, x, y - 20);
    }
  }

  drawEmployeeAtWorkstation(ctx, npc, isHighlighted, hasEvent) {
    // Desk
    ctx.fillStyle = "#463426";
    ctx.fillRect(npc.x - 22, npc.y - 2, 44, 20);
    ctx.strokeStyle = "#5f4836";
    ctx.lineWidth = 1;
    ctx.strokeRect(npc.x - 22, npc.y - 2, 44, 20);

    // Dual Monitors
    ctx.fillStyle = "#12171c";
    ctx.fillRect(npc.x - 14, npc.y - 12, 12, 9);
    ctx.fillRect(npc.x + 2, npc.y - 12, 12, 9);
    ctx.fillStyle = "#68899e";
    ctx.fillRect(npc.x - 13, npc.y - 11, 10, 7);
    ctx.fillRect(npc.x + 3, npc.y - 11, 10, 7);

    // Seated Employee
    this.drawExecutivePerson(ctx, {
      x: npc.x,
      y: npc.y - 4,
      label: "",
      subLabel: "",
      suitColor: npc.suitColor,
      tieColor: npc.tieColor,
      skinColor: npc.skinColor,
      hairColor: npc.hairColor,
      isHighlighted
    });

    // Name badge
    ctx.font = "8.5px 'JetBrains Mono', monospace";
    ctx.fillStyle = isHighlighted ? "#dfc288" : "#c4bbb0";
    ctx.textAlign = "center";
    ctx.fillText(npc.ename, npc.x, npc.y + 28);

    // Office Event badge ("💬")
    if (hasEvent) {
      const bob = Math.sin(this.time * 4) * 2;
      ctx.fillStyle = "#c8a96e";
      ctx.beginPath();
      ctx.arc(npc.x, npc.y - 26 + bob, 6.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.font = "9px 'Inter', sans-serif";
      ctx.fillStyle = "#171311";
      ctx.fillText("💬", npc.x, npc.y - 23 + bob);
    }
  }

  drawSpeechBubble(ctx, x, y, text, borderColor) {
    ctx.font = "11.5px 'Inter', sans-serif";
    const width = Math.min(260, ctx.measureText(text).width + 16);
    const height = 24;

    ctx.fillStyle = "rgba(23, 19, 17, 0.95)";
    ctx.strokeStyle = borderColor || "#c8a96e";
    ctx.lineWidth = 1.5;

    ctx.beginPath();
    ctx.roundRect(x - width / 2, y - height, width, height, 6);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#f2ede4";
    ctx.textAlign = "center";
    ctx.fillText(text, x, y - 8);
  }
}
