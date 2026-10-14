// ============================================================================
// ACADEMY DATABASE SYSTEMS (MODULE) — WEEK 6 2D OFFICE & OPTIMIZATION STUDIO
// Theme: Obsidian Slate, Royal Sapphire Blue, Ice Cyan, Amber Gold & Platinum.
// Features: Interactive Colleagues, Query Optimization Server Stacks,
// HR & Applicant Desk, Professor Atlas, Espresso Bar, Sapphire Elevator,
// Holographic Relational Algebra glow, WASD & Click-to-Move, Particles & Speech.
// ============================================================================

class CyberArena2D {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas ? this.canvas.getContext("2d") : null;
    this.width = 860;
    this.height = 380;

    // Player in Navy Executive Suit
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
      speech: "Assalomu alaykum! Subquery va Query Optimization sinovlarini boshlaymiz.",
      speechTimer: 180
    };

    // Professor Atlas — ACADEMY Chief Data Architect
    this.mentor = {
      x: 115,
      y: 110,
      name: "Prof. Atlas",
      speech: "Har bir bo'lim va tahlilchi bilan muloqot qilib, maslahat oling!",
      speechTimer: 220
    };

    // Interactive Props
    this.props = [
      { id: "coffee", x: 45, y: 78, w: 48, h: 36, label: "☕ Espresso Bar", type: "coffee" },
      { id: "hr_desk", x: 45, y: 312, w: 58, h: 34, label: "📋 HR & Nomzodlar (Applicant) Stoli", type: "applicant" },
      { id: "server", x: 800, y: 78, w: 42, h: 80, label: "💽 Relational Algebra & Cost Engine", type: "server" }
    ];

    // Royal Sapphire Elevator Portal
    this.portal = {
      x: 804,
      y: 245,
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
    // 3 Department Executive Zones (Obsidian Slate + Sapphire Borders)
    this.deptDesks = [
      {
        deptno: 10,
        title: "10 • ACCOUNTING (Nyu-York)",
        x: 195,
        y: 65,
        w: 180,
        h: 270,
        rugColor: "#131c2e",
        borderColor: "#3b82f6",
        woodColor: "#1e293b"
      },
      {
        deptno: 20,
        title: "20 • RESEARCH (Dallas)",
        x: 395,
        y: 65,
        w: 180,
        h: 270,
        rugColor: "#0f232e",
        borderColor: "#06b6d4",
        woodColor: "#1e293b"
      },
      {
        deptno: 30,
        title: "30 • SALES (Chikago)",
        x: 595,
        y: 65,
        w: 180,
        h: 270,
        rugColor: "#1c1d2e",
        borderColor: "#8b5cf6",
        woodColor: "#1e293b"
      }
    ];

    this.plants = [
      { x: 175, y: 65 },
      { x: 382, y: 65 },
      { x: 582, y: 65 },
      { x: 785, y: 80 },
      { x: 785, y: 320 },
      { x: 175, y: 330 }
    ];

    const empList = window.COMPANY_DB ? window.COMPANY_DB.emp : [];
    const byDept = { 10: [], 20: [], 30: [] };
    empList.forEach((e) => {
      if (byDept[e.deptno]) byDept[e.deptno].push(e);
    });

    const suitPalette = [
      "#1e293b", "#0f172a", "#1e3a5f", "#1e2238", "#24324a",
      "#1a2e3b", "#172554", "#1e293b", "#16283b", "#272e3f"
    ];
    const hairPalette = [
      "#0f172a", "#334155", "#475569", "#1e293b", "#64748b",
      "#262626", "#404040", "#18181b"
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
        const nx = box.x + 50 + col * 78;
        const ny = box.y + 66 + row * 68;
        this.npcNodes.push({
          ...emp,
          x: nx,
          y: ny,
          baseX: nx,
          baseY: ny,
          suitColor: emp.job === "PRESIDENT" ? "#020617" : suitPalette[emp.empno % suitPalette.length],
          hairColor: hairPalette[emp.empno % hairPalette.length],
          skinColor: skinPalette[emp.empno % skinPalette.length],
          tieColor: emp.job === "PRESIDENT" ? "#f59e0b" : emp.job === "MANAGER" ? "#38bdf8" : "#818cf8",
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
          this.player.speechTimer = 160;
          if (typeof this.onTriggerEvent === "function") {
            this.onTriggerEvent();
          }
          return;
        }

        // Check HR / Applicant Desk
        const hr = this.props.find((p) => p.id === "hr_desk");
        if (hr && mx >= hr.x - 10 && mx <= hr.x + hr.w + 10 && my >= hr.y - 10 && my <= hr.y + hr.h + 10) {
          this.player.targetX = hr.x + 28;
          this.player.targetY = hr.y - 20;
          this.player.speech = "Diana: '13 ta nomzod arizasi ko'rib chiqilmoqda! UNION va EXCEPT bilan solishtiring!'";
          this.player.speechTimer = 200;
          return;
        }

        // Check Server Rack
        const server = this.props.find((p) => p.id === "server");
        if (server && mx >= server.x - 10 && mx <= server.x + server.w + 10 && my >= server.y - 10 && my <= server.y + server.h + 10) {
          this.player.targetX = server.x - 25;
          this.player.targetY = server.y + 35;
          this.player.speech = "Karim: 'Hevristika 1-qoidasi: Selektsiyani (WHERE) pastga tushiring — 87% I/O tejaladi!'";
          this.player.speechTimer = 200;
          return;
        }

        // Check Mentor (Atlas)
        const dMentor = Math.hypot(mx - this.mentor.x, my - this.mentor.y);
        if (dMentor < 36) {
          this.player.targetX = this.mentor.x;
          this.player.targetY = this.mentor.y + 35;
          this.mentor.speech = "Atlas: 'Har bir so'rovni tahlil qiling. Hevristika va EXPLAIN — data me'morining quroli!'";
          this.mentor.speechTimer = 220;
          return;
        }

        // Check Elevator
        const dElev = Math.hypot(mx - this.portal.x, my - this.portal.y);
        if (dElev < 36) {
          this.player.targetX = this.portal.x - 20;
          this.player.targetY = this.portal.y;
          if (this.portal.open) {
            this.player.speech = "Lift ochiq! Navbatdagi sektorga yo'l olyapmiz...";
            this.player.speechTimer = 140;
          } else {
            this.player.speech = "Lift hozircha yopiq. Ushbu qavatdagi topshiriqlarni yakunlang!";
            this.player.speechTimer = 160;
          }
          return;
        }

        // Check Colleagues
        for (const npc of this.npcNodes) {
          const dist = Math.hypot(mx - npc.x, my - npc.y);
          if (dist < 26) {
            this.player.targetX = npc.x;
            this.player.targetY = npc.y + 30;
            this.speakWithColleague(npc);
            return;
          }
        }

        // General floor click
        this.player.targetX = Math.max(50, Math.min(810, mx));
        this.player.targetY = Math.max(70, Math.min(340, my));
      });
    }
  }

  tryInteractNearest() {
    let nearestNpc = null;
    let minDist = 48;
    for (const npc of this.npcNodes) {
      const d = Math.hypot(this.player.x - npc.x, this.player.y - npc.y);
      if (d < minDist) {
        minDist = d;
        nearestNpc = npc;
      }
    }
    if (nearestNpc) {
      this.speakWithColleague(nearestNpc);
      return;
    }

    const dMentor = Math.hypot(this.player.x - this.mentor.x, this.player.y - this.mentor.y);
    if (dMentor < 55) {
      this.mentor.speech = "Prof. Atlas: 'Sokratik usulda o'rganing — xatodan qo'rqmang, EXPLAIN tahlil qiling!'";
      this.mentor.speechTimer = 200;
      return;
    }

    const dCoffee = Math.hypot(this.player.x - (this.props[0].x + 24), this.player.y - (this.props[0].y + 20));
    if (dCoffee < 55) {
      this.player.speech = "Espresso energiyasi! Yangi murakkab SQL tahlillariga tayyorman.";
      this.player.speechTimer = 150;
      if (typeof this.onTriggerEvent === "function") {
        this.onTriggerEvent();
      }
    }
  }

  speakWithColleague(npc) {
    const speechMap = {
      7839: "KING: 'Kompaniya maosh fondini va eng yuqori daromadli xodimlarni nazorat qilyapman!'",
      7698: "BLAKE: 'Chikago savdo departamenti to'liq safda! ANY va ALL shartlariga e'tibor bering.'",
      7782: "CLARK: '10-bo'lim hisob-kitoblari joyida. Skalyar subquery faqat 1 ta qiymat qaytarishi shart!'",
      7566: "JONES: 'Dallas tadqiqot bo'limi yangi loyihalarni boshladi. NOT IN dagi NULL qopqonidan ehtiyot bo'ling!'",
      7654: "MARTIN: 'Menda $1,400 komissiya bor. Komissiya oluvchilar uchun maxsus VIEW tuzing!'",
      7499: "ALLEN: 'Sotuvlar o'smoqda! O'rtacha maoshdan baland oluvchilar ro'yxatini chiqaramiz.'",
      7844: "TURNER: 'Mening komissiyam nolga teng, ammo asosiy maoshim $1,500!'",
      7900: "JAMES: 'Kotiblik vazifamni bajarmoqdaman. CLERK lavozimi maksimal maoshidan yuqorilar kimlar?'",
      7521: "WARD: 'UzumPay loyihasida 35 soat ishladim! INTERSECT va EXCEPT ni sinab ko'ring.'",
      7902: "FORD: 'Katta tahlilchiman ($3,000). EXISTS subquerysi ko'pincha IN dan ancha tez ishlaydi!'",
      7788: "SCOTT: 'AI_Engine loyihasida ishlayapman. Hash Join va Nested Loop farqini bilasizmi?'",
      7876: "ADAMS: 'Dallas filialida tadqiqot kotibiman. Nomzodlar ro'yxatida ham ismim bor!'",
      7369: "SMITH: 'Maoshim eng kam ($800), lekin tajribam oshmoqda!'",
      7934: "MILLER: 'Nyu-Yorkda CLARK bilan birgaman. VIEW ma'lumotlar xavfsizligini kafolatlaydi!'"
    };

    const quote = speechMap[npc.empno] || `${npc.ename}: 'Bosh ofisda faoliyat olib bormoqdaman.'`;
    npc.speech = quote;
    npc.speechTimer = 220;

    this.player.speech = `Salom ${npc.ename}! Maoshingiz: $${npc.sal}, Lavozimingiz: ${npc.job}.`;
    this.player.speechTimer = 180;

    this.triggerColleagueSpark(npc.x, npc.y);
  }

  triggerColleagueSpark(x, y) {
    for (let i = 0; i < 12; i++) {
      const angle = (Math.PI * 2 * i) / 12;
      const speed = 1.2 + Math.random() * 1.5;
      this.particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha: 1,
        color: i % 2 === 0 ? "#38bdf8" : "#f59e0b",
        radius: 2.5
      });
    }
  }

  resize() {
    if (!this.canvas) return;
    const parent = this.canvas.parentElement;
    if (!parent) return;
    const w = parent.clientWidth || 860;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  setSector(secNum) {
    this.currentSector = secNum;
    this.addFloatingText(`SEKTOR ${secNum} FAOL!`, this.width / 2, 45, "#38bdf8");
  }

  setElevatorOpen(isOpen) {
    this.portal.open = isOpen;
    if (isOpen) {
      this.addFloatingText("LIFT OCHILDI! KEYINGI QAVAT", this.portal.x - 30, this.portal.y - 40, "#10b981");
      for (let i = 0; i < 20; i++) {
        this.particles.push({
          x: this.portal.x,
          y: this.portal.y,
          vx: (Math.random() - 0.5) * 3,
          vy: (Math.random() - 0.5) * 3,
          alpha: 1,
          color: "#38bdf8",
          radius: 2 + Math.random() * 2
        });
      }
    }
  }

  highlightEmployees(empnos) {
    this.highlightedEmpnos = new Set(empnos || []);
    this.highlightTimer = 180;
    for (const npc of this.npcNodes) {
      if (this.highlightedEmpnos.has(npc.empno)) {
        this.triggerColleagueSpark(npc.x, npc.y);
      }
    }
  }

  addFloatingText(text, x, y, color = "#38bdf8") {
    this.floatingTexts.push({
      text,
      x,
      y,
      vy: -0.7,
      alpha: 1,
      color,
      timer: 90
    });
  }

  triggerExplosion(x, y, color = "#38bdf8") {
    for (let i = 0; i < 28; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 1.0 + Math.random() * 3.2;
      this.particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha: 1,
        color: i % 2 === 0 ? color : "#f59e0b",
        radius: 2 + Math.random() * 3
      });
    }
  }

  loop() {
    this.time++;
    this.update();
    this.render();
    requestAnimationFrame(() => this.loop());
  }

  update() {
    let dx = 0;
    let dy = 0;

    if (this.keys["arrowleft"] || this.keys["a"]) dx -= 1;
    if (this.keys["arrowright"] || this.keys["d"]) dx += 1;
    if (this.keys["arrowup"] || this.keys["w"]) dy -= 1;
    if (this.keys["arrowdown"] || this.keys["s"]) dy += 1;

    if (this.player.targetX !== null && this.player.targetY !== null) {
      const dist = Math.hypot(this.player.targetX - this.player.x, this.player.targetY - this.player.y);
      if (dist < 4) {
        this.player.targetX = null;
        this.player.targetY = null;
      } else {
        const angle = Math.atan2(this.player.targetY - this.player.y, this.player.targetX - this.player.x);
        dx = Math.cos(angle);
        dy = Math.sin(angle);
      }
    }

    if (dx !== 0 || dy !== 0) {
      const len = Math.hypot(dx, dy);
      this.player.vx = (dx / len) * this.player.speed;
      this.player.vy = (dy / len) * this.player.speed;
      this.player.walkFrame += 0.2;
      if (dx < 0) this.player.facing = "left";
      if (dx > 0) this.player.facing = "right";
    } else {
      this.player.vx *= 0.7;
      this.player.vy *= 0.7;
    }

    this.player.x += this.player.vx;
    this.player.y += this.player.vy;

    // Boundaries
    this.player.x = Math.max(50, Math.min(810, this.player.x));
    this.player.y = Math.max(70, Math.min(340, this.player.y));

    // Timers
    if (this.player.speechTimer > 0) this.player.speechTimer--;
    if (this.mentor.speechTimer > 0) this.mentor.speechTimer--;
    if (this.highlightTimer > 0) this.highlightTimer--;

    for (const npc of this.npcNodes) {
      if (npc.speechTimer > 0) npc.speechTimer--;
    }

    // Elevator door animation
    const targetRatio = this.portal.open ? 1 : 0;
    this.portal.doorOpenRatio += (targetRatio - this.portal.doorOpenRatio) * 0.08;

    // Particles
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= 0.02;
      if (p.alpha <= 0) {
        this.particles.splice(i, 1);
      }
    }

    // Floating text
    for (let i = this.floatingTexts.length - 1; i >= 0; i--) {
      const ft = this.floatingTexts[i];
      ft.y += ft.vy;
      ft.timer--;
      if (ft.timer <= 20) ft.alpha = ft.timer / 20;
      if (ft.timer <= 0) {
        this.floatingTexts.splice(i, 1);
      }
    }
  }

  render() {
    if (!this.ctx) return;
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);

    this.renderFloor(ctx);
    this.renderWindows(ctx);
    this.renderDeptDesks(ctx);
    this.renderProps(ctx);
    this.renderElevator(ctx);
    this.renderMentor(ctx);
    this.renderColleagues(ctx);
    this.renderPlayer(ctx);
    this.renderParticles(ctx);
    this.renderFloatingText(ctx);
    this.renderSpeechBubbles(ctx);
  }

  renderFloor(ctx) {
    // Deep Obsidian Slate base
    const grad = ctx.createLinearGradient(0, 0, 0, this.height);
    grad.addColorStop(0, "#090d16");
    grad.addColorStop(0.5, "#0d131f");
    grad.addColorStop(1, "#070a12");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, this.width, this.height);

    // Subtle executive high-tech grid tiles
    ctx.strokeStyle = "rgba(56, 189, 248, 0.04)";
    ctx.lineWidth = 1;
    const tileSize = 38;
    for (let x = 0; x < this.width; x += tileSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, this.height);
      ctx.stroke();
    }
    for (let y = 0; y < this.height; y += tileSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(this.width, y);
      ctx.stroke();
    }

    // Platinum border with cyan tint
    ctx.strokeStyle = "rgba(56, 189, 248, 0.25)";
    ctx.lineWidth = 2;
    ctx.strokeRect(10, 10, this.width - 20, this.height - 20);
  }

  renderWindows(ctx) {
    // Panoramic Skyline Windows along top
    ctx.fillStyle = "#050811";
    ctx.fillRect(18, 14, this.width - 36, 32);

    // Distant skyscraper lights
    for (let i = 30; i < this.width - 40; i += 42) {
      const h = 14 + ((i * 13) % 14);
      ctx.fillStyle = "rgba(30, 41, 59, 0.8)";
      ctx.fillRect(i, 46 - h, 28, h);

      // Yellow/blue window specks
      for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
          if ((i + r + c) % 3 === 0) {
            ctx.fillStyle = (i + r) % 2 === 0 ? "rgba(245, 158, 11, 0.7)" : "rgba(56, 189, 248, 0.7)";
            ctx.fillRect(i + 4 + c * 8, 48 - h + 2 + r * 4, 3, 2);
          }
        }
      }
    }

    // Top Header Banner
    ctx.fillStyle = "#f8fafc";
    ctx.font = "bold 11px Inter, sans-serif";
    ctx.fillText("🏛 KORPORATIV BOSH OFIS • W6 ADVANCED SQL & QUERY OPTIMIZER COMMAND CENTER", 28, 34);

    ctx.fillStyle = "#38bdf8";
    ctx.font = "10px Inter, sans-serif";
    ctx.fillText(`SEKTOR ${this.currentSector} / 10 • RELATIONAL ALGEBRA TREE`, this.width - 320, 34);
  }

  renderDeptDesks(ctx) {
    for (const d of this.deptDesks) {
      // Elegant rug
      ctx.fillStyle = d.rugColor;
      ctx.fillRect(d.x, d.y, d.w, d.h);

      ctx.strokeStyle = d.borderColor;
      ctx.lineWidth = 1.5;
      ctx.strokeRect(d.x, d.y, d.w, d.h);

      // Dept Title Tag
      ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
      ctx.fillRect(d.x + 8, d.y + 6, d.w - 16, 20);
      ctx.fillStyle = "#f8fafc";
      ctx.font = "bold 9.5px Inter, sans-serif";
      ctx.fillText(d.title, d.x + 14, d.y + 20);

      // Desks (2 rows x 2 cols)
      for (let r = 0; r < 2; r++) {
        for (let c = 0; c < 2; c++) {
          const dx = d.x + 14 + c * 80;
          const dy = d.y + 44 + r * 95;

          // Polished slate desk
          ctx.fillStyle = d.woodColor;
          ctx.fillRect(dx, dy, 70, 42);
          ctx.strokeStyle = "rgba(56, 189, 248, 0.2)";
          ctx.strokeRect(dx, dy, 70, 42);

          // Dual Monitors
          ctx.fillStyle = "#020617";
          ctx.fillRect(dx + 12, dy + 6, 22, 14);
          ctx.fillRect(dx + 38, dy + 6, 22, 14);

          // Screen Glow (Cyan code lines)
          ctx.fillStyle = "rgba(56, 189, 248, 0.85)";
          ctx.fillRect(dx + 14, dy + 8, 18, 2);
          ctx.fillRect(dx + 14, dy + 12, 14, 2);

          ctx.fillStyle = "rgba(245, 158, 11, 0.85)";
          ctx.fillRect(dx + 40, dy + 8, 18, 2);
          ctx.fillRect(dx + 40, dy + 12, 12, 2);

          // Keyboard
          ctx.fillStyle = "#334155";
          ctx.fillRect(dx + 22, dy + 24, 26, 8);
        }
      }
    }

    // Plants
    for (const p of this.plants) {
      ctx.fillStyle = "#1e293b";
      ctx.beginPath();
      ctx.arc(p.x, p.y, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#10b981";
      ctx.beginPath();
      ctx.arc(p.x, p.y - 4, 6, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  renderProps(ctx) {
    // 1. Espresso Bar
    const coffee = this.props[0];
    ctx.fillStyle = "#1e293b";
    ctx.fillRect(coffee.x, coffee.y, coffee.w, coffee.h);
    ctx.strokeStyle = "#f59e0b";
    ctx.lineWidth = 1.5;
    ctx.strokeRect(coffee.x, coffee.y, coffee.w, coffee.h);

    ctx.fillStyle = "#f59e0b";
    ctx.font = "bold 9px Inter, sans-serif";
    ctx.fillText("☕ BAR", coffee.x + 8, coffee.y + 16);
    ctx.fillStyle = "#94a3b8";
    ctx.font = "8px Inter, sans-serif";
    ctx.fillText("Espresso", coffee.x + 8, coffee.y + 28);

    // 2. HR & Applicant Desk
    const hr = this.props[1];
    ctx.fillStyle = "#1e293b";
    ctx.fillRect(hr.x, hr.y, hr.w, hr.h);
    ctx.strokeStyle = "#38bdf8";
    ctx.lineWidth = 1.5;
    ctx.strokeRect(hr.x, hr.y, hr.w, hr.h);

    ctx.fillStyle = "#38bdf8";
    ctx.font = "bold 9px Inter, sans-serif";
    ctx.fillText("📋 HR APPLICANT", hr.x + 4, hr.y + 15);
    ctx.fillStyle = "#cbd5e1";
    ctx.font = "8px Inter, sans-serif";
    ctx.fillText("13 Nomzod", hr.x + 8, hr.y + 27);

    // 3. Server Rack (Relational Algebra & Optimizer)
    const srv = this.props[2];
    ctx.fillStyle = "#0f172a";
    ctx.fillRect(srv.x, srv.y, srv.w, srv.h);
    ctx.strokeStyle = "#3b82f6";
    ctx.lineWidth = 1.5;
    ctx.strokeRect(srv.x, srv.y, srv.w, srv.h);

    // Blinking server LEDs
    for (let i = 0; i < 5; i++) {
      const sy = srv.y + 8 + i * 14;
      ctx.fillStyle = "#1e293b";
      ctx.fillRect(srv.x + 4, sy, srv.w - 8, 10);

      const ledOn = (Math.floor(this.time / 15) + i) % 2 === 0;
      ctx.fillStyle = ledOn ? "#38bdf8" : "#f59e0b";
      ctx.beginPath();
      ctx.arc(srv.x + 10, sy + 5, 2.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = !ledOn ? "#10b981" : "#6366f1";
      ctx.beginPath();
      ctx.arc(srv.x + 18, sy + 5, 2.5, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  renderElevator(ctx) {
    const p = this.portal;
    // Outer Frame
    ctx.fillStyle = "#0f172a";
    ctx.fillRect(p.x - 22, p.y - 36, 44, 72);

    ctx.strokeStyle = p.open ? "#10b981" : "#3b82f6";
    ctx.lineWidth = 2.5;
    ctx.strokeRect(p.x - 22, p.y - 36, 44, 72);

    // Door interior
    ctx.fillStyle = p.open ? "rgba(16, 185, 129, 0.25)" : "#020617";
    ctx.fillRect(p.x - 18, p.y - 32, 36, 64);

    // Sliding Doors
    const doorW = 18 * (1 - p.doorOpenRatio);
    ctx.fillStyle = "#1e293b";
    // Left door
    ctx.fillRect(p.x - 18, p.y - 32, doorW, 64);
    // Right door
    ctx.fillRect(p.x + 18 - doorW, p.y - 32, doorW, 64);

    // Indicator Light
    ctx.fillStyle = p.open ? "#10b981" : "#ef4444";
    ctx.beginPath();
    ctx.arc(p.x, p.y - 42, 4, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#f8fafc";
    ctx.font = "bold 8.5px Inter, sans-serif";
    ctx.fillText("LIFT", p.x - 10, p.y + 44);
  }

  renderMentor(ctx) {
    const m = this.mentor;
    // Professor Atlas — ACADEMY Chief Data Architect
    ctx.save();
    ctx.translate(m.x, m.y);

    // Shadow
    ctx.fillStyle = "rgba(0,0,0,0.3)";
    ctx.beginPath();
    ctx.ellipse(0, 18, 12, 5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Body (Midnight Navy Professor Suit)
    ctx.fillStyle = "#1e3a5f";
    ctx.fillRect(-8, 2, 16, 16);

    // White shirt & Gold bow
    ctx.fillStyle = "#f8fafc";
    ctx.fillRect(-3, 2, 6, 6);
    ctx.fillStyle = "#f59e0b";
    ctx.fillRect(-2, 4, 4, 2);

    // Head
    ctx.fillStyle = "#f0cfb0";
    ctx.beginPath();
    ctx.arc(0, -6, 7.5, 0, Math.PI * 2);
    ctx.fill();

    // Silver hair
    ctx.fillStyle = "#cbd5e1";
    ctx.beginPath();
    ctx.arc(0, -9, 8, Math.PI, Math.PI * 2);
    ctx.fill();

    // Spectacles
    ctx.strokeStyle = "#f59e0b";
    ctx.lineWidth = 1;
    ctx.strokeRect(-5, -7, 4, 3);
    ctx.strokeRect(1, -7, 4, 3);

    // Label
    ctx.fillStyle = "#38bdf8";
    ctx.font = "bold 9px Inter, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(m.name, 0, -18);

    ctx.restore();
  }

  renderColleagues(ctx) {
    for (const npc of this.npcNodes) {
      const isHighlighted = this.highlightedEmpnos.has(npc.empno) && this.highlightTimer > 0;
      const bob = Math.sin(this.time * 0.05 + npc.bobPhase) * 1.5;

      ctx.save();
      ctx.translate(npc.x, npc.y + bob);

      // Highlight Ring
      if (isHighlighted) {
        ctx.strokeStyle = "#38bdf8";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(0, 4, 18, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Shadow
      ctx.fillStyle = "rgba(0,0,0,0.25)";
      ctx.beginPath();
      ctx.ellipse(0, 16, 10, 4, 0, 0, Math.PI * 2);
      ctx.fill();

      // Body (Suit)
      ctx.fillStyle = npc.suitColor;
      ctx.fillRect(-7, 2, 14, 15);

      // Tie
      ctx.fillStyle = npc.tieColor;
      ctx.fillRect(-1.5, 4, 3, 7);

      // Head
      ctx.fillStyle = npc.skinColor;
      ctx.beginPath();
      ctx.arc(0, -5, 6.5, 0, Math.PI * 2);
      ctx.fill();

      // Hair
      ctx.fillStyle = npc.hairColor;
      ctx.beginPath();
      ctx.arc(0, -7, 7, Math.PI, Math.PI * 2);
      ctx.fill();

      // Name & Salary Tag
      ctx.fillStyle = isHighlighted ? "#38bdf8" : "#cbd5e1";
      ctx.font = isHighlighted ? "bold 9px Inter, sans-serif" : "8.5px Inter, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(npc.ename, 0, -14);

      ctx.fillStyle = "#94a3b8";
      ctx.font = "7.5px Inter, sans-serif";
      ctx.fillText(`$${npc.sal}`, 0, 26);

      ctx.restore();
    }
  }

  renderPlayer(ctx) {
    const p = this.player;
    ctx.save();
    ctx.translate(p.x, p.y);

    // Shadow
    ctx.fillStyle = "rgba(0,0,0,0.35)";
    ctx.beginPath();
    ctx.ellipse(0, 18, 12, 5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Walking leg bob
    const legSwing = Math.sin(p.walkFrame) * 4;

    // Legs
    ctx.fillStyle = "#0f172a";
    ctx.fillRect(-5, 14, 4, 8 + legSwing);
    ctx.fillRect(1, 14, 4, 8 - legSwing);

    // Executive Navy Suit Body
    ctx.fillStyle = "#1e3a5f";
    ctx.fillRect(-8, 0, 16, 16);

    // Cyan Silk Tie
    ctx.fillStyle = "#38bdf8";
    ctx.fillRect(-2, 2, 4, 9);

    // Head
    ctx.fillStyle = "#f0cfb0";
    ctx.beginPath();
    ctx.arc(0, -8, 7.5, 0, Math.PI * 2);
    ctx.fill();

    // Hair
    ctx.fillStyle = "#1e293b";
    ctx.beginPath();
    ctx.arc(0, -10, 8, Math.PI, Math.PI * 2);
    ctx.fill();

    // Eyes
    ctx.fillStyle = "#0f172a";
    const dirOffset = p.facing === "left" ? -2 : 2;
    ctx.fillRect(-2 + dirOffset, -9, 2, 2);
    ctx.fillRect(2 + dirOffset, -9, 2, 2);

    // Player Badge Tag
    ctx.fillStyle = "#38bdf8";
    ctx.font = "bold 9px Inter, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Siz (Data Me'mori)", 0, -20);

    ctx.restore();
  }

  renderParticles(ctx) {
    for (const p of this.particles) {
      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  renderFloatingText(ctx) {
    for (const ft of this.floatingTexts) {
      ctx.save();
      ctx.globalAlpha = ft.alpha;
      ctx.fillStyle = ft.color;
      ctx.font = "bold 12px Inter, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(ft.text, ft.x, ft.y);
      ctx.restore();
    }
  }

  renderSpeechBubbles(ctx) {
    // 1. Player speech
    if (this.player.speech && this.player.speechTimer > 0) {
      this.drawBubble(ctx, this.player.x, this.player.y - 32, this.player.speech, "#0f172a", "#38bdf8");
    }

    // 2. Mentor speech
    if (this.mentor.speech && this.mentor.speechTimer > 0) {
      this.drawBubble(ctx, this.mentor.x, this.mentor.y - 30, this.mentor.speech, "#0f172a", "#f59e0b");
    }

    // 3. Colleagues speech
    for (const npc of this.npcNodes) {
      if (npc.speech && npc.speechTimer > 0) {
        this.drawBubble(ctx, npc.x, npc.y - 28, npc.speech, "#0f172a", "#cbd5e1");
      }
    }
  }

  drawBubble(ctx, x, y, text, bg, border) {
    ctx.save();
    ctx.font = "10.5px Inter, sans-serif";
    const metrics = ctx.measureText(text);
    const w = Math.min(260, metrics.width + 18);
    const h = 26;
    const bx = Math.max(10, Math.min(this.width - w - 10, x - w / 2));
    const by = Math.max(20, y - h);

    ctx.fillStyle = bg;
    ctx.fillRect(bx, by, w, h);
    ctx.strokeStyle = border;
    ctx.lineWidth = 1.5;
    ctx.strokeRect(bx, by, w, h);

    ctx.fillStyle = "#f8fafc";
    ctx.textAlign = "left";
    // Truncate if too long for simple bubble
    let displayText = text;
    if (metrics.width > 240) {
      displayText = text.slice(0, 36) + "...";
    }
    ctx.fillText(displayText, bx + 8, by + 16);
    ctx.restore();
  }
}

window.CyberArena2D = CyberArena2D;
