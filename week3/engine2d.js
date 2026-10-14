/**
 * ACADEMY DATABASE SYSTEMS (MODULE) — WEEK 3
 * 2D Canvas Engine: Data Architecture Foundry & High-Tech Server Facility
 * 
 * Luxury Technical Architectural Theme:
 * - Obsidian server racks, warm walnut drafting desks, brass trims, sage-green status monitors.
 * - Active database engineers & architects working at their desks (NOT facing camera).
 * - Real-time animated server LEDs, drafting blueprint animations, DDL deployment pulses.
 */

class FoundryEngine2D {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.width = this.canvas.width = 960;
    this.height = this.canvas.height = 420;

    this.tick = 0;
    this.animId = null;
    this.isDeploying = false;
    this.deployPulseProgress = 0;
    this.approvalStampTimer = 0;
    this.errorPulseTimer = 0;
    this.particles = [];

    // Interactive hover & click
    this.mouseX = 0;
    this.mouseY = 0;
    this.hoveredObject = null;
    this.speechBubble = null;

    // Characters state
    this.characters = [
      {
        id: "atlas",
        name: "Bosh Arxitektor Atlas",
        role: "Chief Database Architect & Examiner",
        x: 480,
        y: 270,
        facing: "blueprint", // looking at drafting table
        state: "reviewing",
        quote: "Sxemani toza loyihalash — ma'lumotlar yaxlitligining (data integrity) kafolatidir!"
      },
      {
        id: "engineer_alisher",
        name: "Muhandis Alisher",
        role: "Senior Schema & Storage Engineer",
        x: 230,
        y: 285,
        facing: "left", // facing multi-monitor desk
        state: "typing",
        quote: "FOREIGN KEY va INDEXlarni to'g'ri o'rnatish tranzaksiyalarni 10 barobar tezlashtiradi."
      },
      {
        id: "engineer_malika",
        name: "Muhandisa Malika",
        role: "Relational Modeling & Constraints Lead",
        x: 740,
        y: 285,
        facing: "right", // facing blueprint screen
        state: "analyzing",
        quote: "CHECK cheklovlari yaroqsiz ma'lumotlar bazaga kirishini tubdan to'xtatadi."
      }
    ];

    // Server racks (Obsidian cabinets with animated LEDs)
    this.serverRacks = [
      { id: "rack1", x: 60, y: 110, w: 75, h: 180, name: "Rack-01: Metadata Catalog" },
      { id: "rack2", x: 145, y: 110, w: 75, h: 180, name: "Rack-02: Constraint Engine" },
      { id: "rack3", x: 800, y: 110, w: 75, h: 180, name: "Rack-03: Primary Storage" },
      { id: "rack4", x: 885, y: 110, w: 75, h: 180, name: "Rack-04: WAL & Transactions" }
    ];

    this.bindEvents();
    this.startLoop();
  }

  bindEvents() {
    this.canvas.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const scaleX = this.width / rect.width;
      const scaleY = this.height / rect.height;
      this.mouseX = (e.clientX - rect.left) * scaleX;
      this.mouseY = (e.clientY - rect.top) * scaleY;

      // Check hover
      this.hoveredObject = null;
      for (const char of this.characters) {
        if (Math.hypot(this.mouseX - char.x, this.mouseY - (char.y - 40)) < 35) {
          this.hoveredObject = char;
          break;
        }
      }
      if (!this.hoveredObject) {
        for (const rack of this.serverRacks) {
          if (this.mouseX >= rack.x && this.mouseX <= rack.x + rack.w &&
              this.mouseY >= rack.y && this.mouseY <= rack.y + rack.h) {
            this.hoveredObject = rack;
            break;
          }
        }
      }
    });

    this.canvas.addEventListener('click', () => {
      if (this.hoveredObject && this.hoveredObject.quote) {
        this.triggerSpeechBubble(this.hoveredObject.quote, this.hoveredObject.x, this.hoveredObject.y - 75);
      }
    });
  }

  triggerSpeechBubble(text, x, y) {
    this.speechBubble = {
      text,
      x: Math.max(120, Math.min(840, x)),
      y: Math.max(60, y),
      timer: 240 // 4 seconds at 60fps
    };
  }

  triggerDeploySuccess(tableName = "table") {
    this.isDeploying = true;
    this.deployPulseProgress = 0;
    this.approvalStampTimer = 180; // 3 seconds stamp
    this.characters[0].state = "approved"; // Atlas nods

    // Spawn golden blueprint particles
    for (let i = 0; i < 40; i++) {
      this.particles.push({
        x: 480 + (Math.random() - 0.5) * 200,
        y: 260 + (Math.random() - 0.5) * 50,
        vx: (Math.random() - 0.5) * 3,
        vy: -1.5 - Math.random() * 2.5,
        life: 60 + Math.random() * 40,
        maxLife: 100,
        color: Math.random() > 0.4 ? "#c8a96e" : "#57b882",
        size: 2 + Math.random() * 3
      });
    }

    this.triggerSpeechBubble(`Sxema tekshirildi! '${tableName}' muvaffaqiyatli kompilyatsiya bo'ldi.`, 480, 200);
  }

  triggerErrorAlert(errorText = "Sintaksis xatosi aniqlandi") {
    this.errorPulseTimer = 90;
    this.characters[0].state = "examining";
    const shortErr = errorText.length > 55 ? errorText.substring(0, 52) + "..." : errorText;
    this.triggerSpeechBubble(`⚠️ ${shortErr}`, 480, 200);
  }

  startLoop() {
    const loop = () => {
      this.update();
      this.render();
      this.animId = requestAnimationFrame(loop);
    };
    this.animId = requestAnimationFrame(loop);
  }

  update() {
    this.tick++;

    // Deploy animation
    if (this.isDeploying) {
      this.deployPulseProgress += 0.02;
      if (this.deployPulseProgress >= 1) {
        this.isDeploying = false;
        this.deployPulseProgress = 0;
      }
    }

    if (this.approvalStampTimer > 0) {
      this.approvalStampTimer--;
      if (this.approvalStampTimer === 0) {
        this.characters[0].state = "reviewing";
      }
    }

    if (this.errorPulseTimer > 0) {
      this.errorPulseTimer--;
    }

    if (this.speechBubble && this.speechBubble.timer > 0) {
      this.speechBubble.timer--;
      if (this.speechBubble.timer <= 0) {
        this.speechBubble = null;
      }
    }

    // Particles update
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life--;
      if (p.life <= 0) {
        this.particles.splice(i, 1);
      }
    }
  }

  render() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);

    // 1. Draw Architectural Foundry Room
    this.drawRoom(ctx);

    // 2. Draw Server Cabinets (High Tech Enterprise Racks)
    this.drawServerRacks(ctx);

    // 3. Draw Workstations, Desks and Blueprints
    this.drawWorkstations(ctx);

    // 4. Draw Characters working actively
    this.drawCharacters(ctx);

    // 5. Draw Deployment Data Stream & Pulses
    this.drawDataCablesAndPulses(ctx);

    // 6. Draw Particles
    this.drawParticles(ctx);

    // 7. Draw Architect Approved Stamp or Diagnostic Overlay
    this.drawOverlays(ctx);

    // 8. Draw Speech Bubble
    if (this.speechBubble) {
      this.drawSpeechBubble(ctx);
    }

    // 9. Hover Tooltip
    if (this.hoveredObject) {
      this.drawHoverTooltip(ctx);
    }
  }

  drawRoom(ctx) {
    // Upper wall: Deep Architectural Graphite / Warm Walnut Panels
    const wallGrad = ctx.createLinearGradient(0, 0, 0, 260);
    wallGrad.addColorStop(0, "#121417");
    wallGrad.addColorStop(0.7, "#1b1e24");
    wallGrad.addColorStop(1, "#232830");
    ctx.fillStyle = wallGrad;
    ctx.fillRect(0, 0, this.width, 270);

    // Architectural Wood Wainscoting Trims (Warm dark oak / walnut)
    ctx.fillStyle = "#2d241c";
    ctx.fillRect(0, 248, this.width, 22);
    ctx.fillStyle = "#c8a96e"; // Brass border line
    ctx.fillRect(0, 247, this.width, 2);

    // Subtle Architectural Blueprint Grid in center background
    ctx.save();
    ctx.strokeStyle = "rgba(87, 184, 130, 0.08)";
    ctx.lineWidth = 1;
    for (let x = 230; x <= 730; x += 25) {
      ctx.beginPath();
      ctx.moveTo(x, 20);
      ctx.lineTo(x, 245);
      ctx.stroke();
    }
    for (let y = 30; y <= 245; y += 25) {
      ctx.beginPath();
      ctx.moveTo(230, y);
      ctx.lineTo(730, y);
      ctx.stroke();
    }
    ctx.restore();

    // Central Blueprint Schematics Screen / Projection
    ctx.fillStyle = "#162024";
    ctx.strokeStyle = "#3e524d";
    ctx.lineWidth = 2;
    ctx.fillRect(360, 25, 240, 105);
    ctx.strokeRect(360, 25, 240, 105);

    // Blueprint frame inner header
    ctx.fillStyle = "#223538";
    ctx.fillRect(362, 27, 236, 18);
    ctx.fillStyle = "#9ec5b2";
    ctx.font = "bold 9px monospace";
    ctx.fillText("ACADEMY MODULE • DDL SCHEMA BLUEPRINT ENGINE", 370, 39);

    // ER / Relational Entity diagram sketch on screen
    ctx.strokeStyle = "#57b882";
    ctx.lineWidth = 1.2;
    // Entity 1: department
    ctx.strokeRect(380, 52, 60, 28);
    ctx.fillStyle = "#57b882";
    ctx.fillText("department", 384, 63);
    ctx.fillText("PK id", 384, 74);
    // Entity 2: employee
    ctx.strokeRect(520, 52, 60, 38);
    ctx.fillText("employee", 524, 63);
    ctx.fillText("PK id", 524, 74);
    ctx.fillText("FK dept_id", 524, 85);
    // Connecting FK line with cardinality crows foot
    ctx.beginPath();
    ctx.moveTo(440, 66);
    ctx.lineTo(520, 66);
    ctx.stroke();
    // 1-to-many symbol
    ctx.beginPath();
    ctx.moveTo(512, 62);
    ctx.lineTo(520, 66);
    ctx.lineTo(512, 70);
    ctx.stroke();

    // Architectural facility title plaque
    ctx.fillStyle = "rgba(200, 169, 110, 0.12)";
    ctx.fillRect(400, 136, 160, 20);
    ctx.strokeStyle = "#c8a96e";
    ctx.lineWidth = 1;
    ctx.strokeRect(400, 136, 160, 20);
    ctx.fillStyle = "#e6d5b8";
    ctx.font = "bold 10px 'Segoe UI', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("FOUNDRY DATA ARCHITECTURE", 480, 150);
    ctx.textAlign = "left";

    // Polished Floor: Dark Slate with Luxury Parquet Reflection
    const floorGrad = ctx.createLinearGradient(0, 270, 0, this.height);
    floorGrad.addColorStop(0, "#191c22");
    floorGrad.addColorStop(0.5, "#20252c");
    floorGrad.addColorStop(1, "#17191d");
    ctx.fillStyle = floorGrad;
    ctx.fillRect(0, 270, this.width, this.height - 270);

    // Floor grid perspective tiles
    ctx.save();
    ctx.strokeStyle = "rgba(200, 169, 110, 0.06)";
    ctx.lineWidth = 1;
    for (let x = -100; x <= this.width + 100; x += 60) {
      ctx.beginPath();
      ctx.moveTo(x, 270);
      ctx.lineTo(x + (x - this.width / 2) * 0.45, this.height);
      ctx.stroke();
    }
    for (let y = 295; y <= this.height; y += 32) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(this.width, y);
      ctx.stroke();
    }
    ctx.restore();
  }

  drawServerRacks(ctx) {
    for (const rack of this.serverRacks) {
      // Cabinet outer shadow & body
      ctx.fillStyle = "rgba(0,0,0,0.45)";
      ctx.fillRect(rack.x + 4, rack.y + 6, rack.w, rack.h);

      // Obsidian body
      ctx.fillStyle = "#15181c";
      ctx.fillRect(rack.x, rack.y, rack.w, rack.h);
      ctx.strokeStyle = "#2b313a";
      ctx.lineWidth = 2;
      ctx.strokeRect(rack.x, rack.y, rack.w, rack.h);

      // Rack glass door / ventilation mesh
      ctx.fillStyle = "#0e1013";
      ctx.fillRect(rack.x + 6, rack.y + 12, rack.w - 12, rack.h - 20);

      // Rack Unit horizontal trays (1U, 2U servers)
      const uCount = 7;
      const uHeight = (rack.h - 30) / uCount;
      for (let i = 0; i < uCount; i++) {
        const uy = rack.y + 16 + i * uHeight;
        ctx.fillStyle = "#1a1f26";
        ctx.fillRect(rack.x + 8, uy, rack.w - 16, uHeight - 3);

        // Server slot vents
        ctx.fillStyle = "#111417";
        for (let vx = rack.x + 12; vx < rack.x + rack.w - 28; vx += 6) {
          ctx.fillRect(vx, uy + 4, 3, uHeight - 11);
        }

        // Blinking Status LEDs (Subtle green, amber, blue)
        const ledX = rack.x + rack.w - 18;
        const ledY = uy + 5;
        const blink1 = Math.sin(this.tick * 0.12 + i * 2.3 + rack.x) > 0.2;
        const blink2 = Math.cos(this.tick * 0.18 + i * 1.5) > 0.4;

        // Deployment pulse override
        const isRackLit = this.isDeploying;

        // LED 1: Status Activity (Green/Emerald)
        ctx.fillStyle = isRackLit ? "#57b882" : (blink1 ? "#3ea066" : "#174227");
        ctx.fillRect(ledX, ledY, 3, 3);

        // LED 2: Bus / I/O (Amber or subtle blue)
        ctx.fillStyle = this.errorPulseTimer > 0 ? (blink2 ? "#d9822b" : "#4a2a0a") : (blink2 ? "#c8a96e" : "#40321a");
        ctx.fillRect(ledX + 4, ledY, 3, 3);
      }

      // Top Rack Label Brass Plate
      ctx.fillStyle = "#2c231a";
      ctx.fillRect(rack.x + 6, rack.y + 2, rack.w - 12, 8);
      ctx.fillStyle = "#c8a96e";
      ctx.font = "bold 6px monospace";
      ctx.fillText(rack.id.toUpperCase(), rack.x + 12, rack.y + 8);
    }
  }

  drawWorkstations(ctx) {
    // 1. Left Workstation (Alisher - Schema & Storage Station)
    this.drawEngineeringDesk(ctx, 190, 275, 120, "left");

    // 2. Center Master Drafting Table (Atlas - Blueprint Drafting Console)
    this.drawMasterDraftingDesk(ctx, 420, 260, 120);

    // 3. Right Workstation (Malika - Constraints & Modeling Station)
    this.drawEngineeringDesk(ctx, 670, 275, 120, "right");
  }

  drawEngineeringDesk(ctx, x, y, width, facing) {
    // Walnut Desk Surface
    ctx.fillStyle = "#33271c";
    ctx.fillRect(x, y, width, 18);
    ctx.fillStyle = "#4a392a";
    ctx.fillRect(x, y, width, 4);
    // Brass trim along front desk edge
    ctx.fillStyle = "#c8a96e";
    ctx.fillRect(x, y + 16, width, 2);

    // Desk steel legs
    ctx.fillStyle = "#1e2229";
    ctx.fillRect(x + 8, y + 18, 6, 45);
    ctx.fillRect(x + width - 14, y + 18, 6, 45);

    // Dual/Triple Curved Technical Monitors on desk
    const monitorX = facing === "left" ? x + 15 : x + 40;
    // Monitor stand
    ctx.fillStyle = "#15181c";
    ctx.fillRect(monitorX + 22, y - 10, 8, 12);
    ctx.fillRect(monitorX + 16, y - 1, 20, 3);

    // Screen 1: Primary Code / DDL Terminal
    ctx.fillStyle = "#0f1318";
    ctx.fillRect(monitorX - 5, y - 48, 55, 38);
    ctx.strokeStyle = "#38414e";
    ctx.lineWidth = 1.5;
    ctx.strokeRect(monitorX - 5, y - 48, 55, 38);

    // Green matrix code lines on monitor
    ctx.fillStyle = "rgba(87, 184, 130, 0.75)";
    ctx.font = "5px monospace";
    const flicker = (this.tick % 60 < 30) ? "_" : " ";
    ctx.fillText("DDL: CREATE...", monitorX - 1, y - 38);
    ctx.fillText("PK: verified", monitorX - 1, y - 30);
    ctx.fillText("FK: CASCADE" + flicker, monitorX - 1, y - 22);

    // Secondary angled side monitor
    const sideX = facing === "left" ? monitorX + 54 : monitorX - 42;
    ctx.fillStyle = "#0f1318";
    ctx.fillRect(sideX, y - 44, 38, 34);
    ctx.strokeStyle = "#38414e";
    ctx.strokeRect(sideX, y - 44, 38, 34);
    ctx.fillStyle = "rgba(200, 169, 110, 0.65)";
    ctx.fillText("STORAGE", sideX + 4, y - 34);
    ctx.fillText("BUFF: 98%", sideX + 4, y - 26);

    // Keyboard & Mouse on desk
    ctx.fillStyle = "#1c2128";
    ctx.fillRect(x + (facing === "left" ? 25 : 50), y + 4, 32, 7);
    ctx.fillStyle = "#28303a";
    ctx.fillRect(x + (facing === "left" ? 62 : 40), y + 6, 6, 5);
  }

  drawMasterDraftingDesk(ctx, x, y, width) {
    // Tilted drafting architect table (Oak and brass)
    ctx.save();
    ctx.fillStyle = "#3d2e21";
    // Tilted drafting board top
    ctx.beginPath();
    ctx.moveTo(x - 10, y + 10);
    ctx.lineTo(x + width + 10, y + 10);
    ctx.lineTo(x + width, y - 18);
    ctx.lineTo(x, y - 18);
    ctx.closePath();
    ctx.fill();

    // Brass drafting border ruler
    ctx.strokeStyle = "#c8a96e";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Blueprint blueprint sheet clipped to board
    ctx.fillStyle = "#193540";
    ctx.beginPath();
    ctx.moveTo(x + 10, y + 6);
    ctx.lineTo(x + width - 10, y + 6);
    ctx.lineTo(x + width - 18, y - 14);
    ctx.lineTo(x + 18, y - 14);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = "rgba(87, 184, 130, 0.5)";
    ctx.lineWidth = 1;
    ctx.stroke();

    // Architectural ruler / drafting compass
    ctx.strokeStyle = "#e6d5b8";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(x + 35, y - 8);
    ctx.lineTo(x + 75, y + 2);
    ctx.stroke();

    // Heavy walnut pedestal legs
    ctx.fillStyle = "#2c2016";
    ctx.fillRect(x + 15, y + 12, 10, 52);
    ctx.fillRect(x + width - 25, y + 12, 10, 52);
    ctx.fillStyle = "#c8a96e";
    ctx.fillRect(x + 10, y + 60, 20, 4);
    ctx.fillRect(x + width - 30, y + 60, 20, 4);
    ctx.restore();
  }

  drawCharacters(ctx) {
    // Character 1: Senior Engineer Alisher (Left, typing at keyboard, side profile)
    this.drawEngineerAlisher(ctx);

    // Character 2: Chief Architect Atlas (Center, standing at drafting console)
    this.drawArchitectAtlas(ctx);

    // Character 3: Lead Engineer Malika (Right, analyzing schema monitor)
    this.drawEngineerMalika(ctx);
  }

  drawEngineerAlisher(ctx) {
    const char = this.characters[1];
    const x = char.x;
    const y = char.y;

    // Ergonomic Chair (Dark leather, chrome base)
    ctx.fillStyle = "#181a1f";
    ctx.fillRect(x - 8, y - 25, 20, 36);
    ctx.fillRect(x - 14, y + 10, 30, 6);
    ctx.fillStyle = "#4a5360";
    ctx.fillRect(x - 2, y + 16, 6, 22);

    // Body: Sitting in charcoal knit sweater, leaned forward towards screens
    ctx.fillStyle = "#2a323d";
    // Torso angled slightly towards screen (left)
    ctx.beginPath();
    ctx.ellipse(x + 3, y - 10, 13, 20, 0.15, 0, Math.PI * 2);
    ctx.fill();

    // Arm extended forward to keyboard (typing animation subtle vertical jitter)
    const typingOffset = Math.sin(this.tick * 0.4) * 1.5;
    ctx.fillStyle = "#2a323d";
    ctx.beginPath();
    ctx.moveTo(x + 4, y - 16);
    ctx.lineTo(x - 18, y - 2 + typingOffset);
    ctx.lineTo(x - 14, y + 4 + typingOffset);
    ctx.lineTo(x + 7, y - 8);
    ctx.fill();
    // Hand
    ctx.fillStyle = "#d8a37f";
    ctx.beginPath();
    ctx.arc(x - 18, y + 1 + typingOffset, 3.5, 0, Math.PI * 2);
    ctx.fill();

    // Head (Side profile facing left towards monitor, not camera!)
    ctx.fillStyle = "#d8a37f";
    ctx.beginPath();
    ctx.arc(x + 2, y - 36, 9, 0, Math.PI * 2);
    ctx.fill();

    // Dark hair & glasses rim
    ctx.fillStyle = "#1a1614";
    ctx.beginPath();
    ctx.arc(x + 4, y - 38, 9, Math.PI * 1.1, Math.PI * 0.1);
    ctx.fill();
    ctx.fillRect(x + 1, y - 44, 9, 5);

    // Spectacles frame visible on side profile
    ctx.strokeStyle = "#c8a96e";
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.arc(x - 4, y - 36, 3, 0, Math.PI * 2);
    ctx.stroke();

    // Legs under desk
    ctx.fillStyle = "#1c222b";
    ctx.fillRect(x + 2, y + 8, 12, 28);
  }

  drawArchitectAtlas(ctx) {
    const char = this.characters[0];
    const x = char.x;
    const y = char.y;

    // Atlas: Tall posture, dark tweed blazer, brass cufflinks, facing drafting board
    // Slight breathing idle motion
    const breath = Math.sin(this.tick * 0.05) * 1.2;

    // Legs: Dark pressed trousers
    ctx.fillStyle = "#1e2229";
    ctx.fillRect(x - 11, y + 12, 9, 52);
    ctx.fillRect(x + 2, y + 12, 9, 52);
    // Polished oxblood shoes
    ctx.fillStyle = "#2c1713";
    ctx.fillRect(x - 14, y + 60, 13, 7);
    ctx.fillRect(x + 1, y + 60, 13, 7);

    // Torso: Luxury Tweed/Wool blazer with vest
    ctx.fillStyle = "#2f2824";
    ctx.beginPath();
    ctx.ellipse(x, y - 10 + breath, 16, 25, 0, 0, Math.PI * 2);
    ctx.fill();

    // Waistcoat & collar
    ctx.fillStyle = "#4a3b30";
    ctx.fillRect(x - 6, y - 22 + breath, 12, 24);
    ctx.fillStyle = "#e8dec8"; // Silk shirt collar
    ctx.beginPath();
    ctx.moveTo(x - 5, y - 28 + breath);
    ctx.lineTo(x, y - 20 + breath);
    ctx.lineTo(x + 5, y - 28 + breath);
    ctx.fill();

    // Right Arm: Holding architect drafting stylus over blueprint board
    ctx.fillStyle = "#2f2824";
    const armRaise = char.state === "approved" ? -14 : 0;
    ctx.beginPath();
    ctx.moveTo(x + 12, y - 22 + breath);
    ctx.lineTo(x + 22, y - 5 + breath + armRaise);
    ctx.lineTo(x + 16, y - 1 + breath + armRaise);
    ctx.lineTo(x + 8, y - 14 + breath);
    ctx.fill();
    // Hand holding stylus
    ctx.fillStyle = "#dfb496";
    ctx.beginPath();
    ctx.arc(x + 20, y - 3 + breath + armRaise, 4, 0, Math.PI * 2);
    ctx.fill();
    // Golden stylus
    ctx.strokeStyle = "#c8a96e";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x + 18, y - 6 + breath + armRaise);
    ctx.lineTo(x + 28, y + 4 + breath + armRaise);
    ctx.stroke();

    // Left Arm: Resting casually on table rim or behind back
    ctx.fillStyle = "#2f2824";
    ctx.beginPath();
    ctx.moveTo(x - 12, y - 22 + breath);
    ctx.lineTo(x - 22, y - 8 + breath);
    ctx.lineTo(x - 17, y - 4 + breath);
    ctx.lineTo(x - 8, y - 14 + breath);
    ctx.fill();
    ctx.fillStyle = "#dfb496";
    ctx.beginPath();
    ctx.arc(x - 21, y - 6 + breath, 3.5, 0, Math.PI * 2);
    ctx.fill();

    // Head: Looking down at blueprint schematics (3/4 angle, NOT staring at camera)
    ctx.fillStyle = "#dfb496";
    ctx.beginPath();
    ctx.arc(x, y - 44 + breath, 10.5, 0, Math.PI * 2);
    ctx.fill();

    // Distinguished silver-tinged dark brown hair and neat architect beard
    ctx.fillStyle = "#382d24";
    ctx.beginPath();
    ctx.arc(x, y - 47 + breath, 11, Math.PI * 1.1, Math.PI * 0.1);
    ctx.fill();
    // Beard line
    ctx.fillStyle = "#4a3c30";
    ctx.beginPath();
    ctx.arc(x, y - 41 + breath, 9.5, 0.2, Math.PI * 0.9);
    ctx.fill();

    // Silver temples trim
    ctx.fillStyle = "#b5b0a8";
    ctx.fillRect(x - 10, y - 48 + breath, 3, 5);
    ctx.fillRect(x + 7, y - 48 + breath, 3, 5);
  }

  drawEngineerMalika(ctx) {
    const char = this.characters[2];
    const x = char.x;
    const y = char.y;

    // Ergonomic Chair (facing right towards screens)
    ctx.fillStyle = "#181a1f";
    ctx.fillRect(x - 12, y - 25, 20, 36);
    ctx.fillRect(x - 16, y + 10, 30, 6);
    ctx.fillStyle = "#4a5360";
    ctx.fillRect(x - 4, y + 16, 6, 22);

    // Body: Sitting in dark forest-green tailored blazer, facing right
    ctx.fillStyle = "#1c382b";
    ctx.beginPath();
    ctx.ellipse(x - 3, y - 10, 13, 20, -0.15, 0, Math.PI * 2);
    ctx.fill();

    // Arm pointing or typing at right screen
    const pointerOffset = Math.cos(this.tick * 0.08) * 2;
    ctx.fillStyle = "#1c382b";
    ctx.beginPath();
    ctx.moveTo(x - 4, y - 16);
    ctx.lineTo(x + 18, y - 6 + pointerOffset);
    ctx.lineTo(x + 14, y + 1 + pointerOffset);
    ctx.lineTo(x - 7, y - 8);
    ctx.fill();
    // Hand
    ctx.fillStyle = "#deb095";
    ctx.beginPath();
    ctx.arc(x + 18, y - 3 + pointerOffset, 3.5, 0, Math.PI * 2);
    ctx.fill();

    // Head (Side profile facing right towards blueprint terminal, not camera!)
    ctx.fillStyle = "#deb095";
    ctx.beginPath();
    ctx.arc(x - 2, y - 36, 9, 0, Math.PI * 2);
    ctx.fill();

    // Sleek dark hair tied in a professional chignon/bun
    ctx.fillStyle = "#161311";
    ctx.beginPath();
    ctx.arc(x - 4, y - 38, 9.5, Math.PI * 0.9, Math.PI * 2.1);
    ctx.fill();
    // Bun on back of head (left side)
    ctx.beginPath();
    ctx.arc(x - 12, y - 37, 5, 0, Math.PI * 2);
    ctx.fill();

    // Legs
    ctx.fillStyle = "#1b2126";
    ctx.fillRect(x - 14, y + 8, 12, 28);
  }

  drawDataCablesAndPulses(ctx) {
    // Overhead brass architectural cable raceway
    ctx.fillStyle = "#222730";
    ctx.fillRect(40, 70, this.width - 80, 6);
    ctx.strokeStyle = "#c8a96e";
    ctx.lineWidth = 1;
    ctx.strokeRect(40, 70, this.width - 80, 6);

    // Cable drops to server racks
    ctx.strokeStyle = "#3e4854";
    ctx.lineWidth = 2;
    for (const rack of this.serverRacks) {
      ctx.beginPath();
      ctx.moveTo(rack.x + rack.w / 2, 76);
      ctx.lineTo(rack.x + rack.w / 2, rack.y);
      ctx.stroke();
    }

    // Deploy pulse travelling from center terminal to server racks
    if (this.isDeploying) {
      const p = this.deployPulseProgress;
      const leftTargetX = 100 + (1 - p) * 380;
      const rightTargetX = 480 + p * 380;

      ctx.save();
      ctx.fillStyle = "#57b882";
      ctx.shadowColor = "#57b882";
      ctx.shadowBlur = 12;

      // Left moving pulse
      ctx.beginPath();
      ctx.arc(leftTargetX, 73, 5, 0, Math.PI * 2);
      ctx.fill();

      // Right moving pulse
      ctx.beginPath();
      ctx.arc(rightTargetX, 73, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  drawParticles(ctx) {
    for (const p of this.particles) {
      const alpha = p.life / p.maxLife;
      ctx.save();
      ctx.fillStyle = p.color;
      ctx.globalAlpha = alpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  drawOverlays(ctx) {
    // 1. Success Stamp when schema compiles
    if (this.approvalStampTimer > 0) {
      const alpha = Math.min(1, this.approvalStampTimer / 30);
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.translate(480, 195);
      ctx.rotate(-0.06);

      // Gold-framed architectural stamp box
      ctx.fillStyle = "rgba(18, 32, 24, 0.92)";
      ctx.fillRect(-140, -22, 280, 44);
      ctx.strokeStyle = "#57b882";
      ctx.lineWidth = 2.5;
      ctx.strokeRect(-140, -22, 280, 44);

      // Inner border
      ctx.strokeStyle = "#c8a96e";
      ctx.lineWidth = 1;
      ctx.strokeRect(-136, -18, 272, 36);

      ctx.fillStyle = "#57b882";
      ctx.font = "bold 13px 'Segoe UI', sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("✓ SXEMA TEKSHIRUVDAN O'TDI • DDL VALIDATED", 0, 5);
      ctx.restore();
    }

    // 2. Error Diagnostic Pulse
    if (this.errorPulseTimer > 0) {
      const alpha = (this.errorPulseTimer / 90) * 0.18;
      ctx.save();
      ctx.fillStyle = `rgba(217, 130, 43, ${alpha})`;
      ctx.fillRect(0, 0, this.width, this.height);
      ctx.restore();
    }
  }

  drawSpeechBubble(ctx) {
    const bubble = this.speechBubble;
    ctx.save();
    ctx.font = "12px 'Segoe UI', sans-serif";
    const textWidth = ctx.measureText(bubble.text).width;
    const boxW = Math.max(160, textWidth + 30);
    const boxH = 34;
    const boxX = bubble.x - boxW / 2;
    const boxY = bubble.y - boxH;

    // Background card (dark walnut & obsidian)
    ctx.fillStyle = "rgba(18, 21, 26, 0.95)";
    ctx.beginPath();
    ctx.roundRect(boxX, boxY, boxW, boxH, 6);
    ctx.fill();

    // Border
    ctx.strokeStyle = "#c8a96e";
    ctx.lineWidth = 1.2;
    ctx.stroke();

    // Pointer tail
    ctx.fillStyle = "rgba(18, 21, 26, 0.95)";
    ctx.beginPath();
    ctx.moveTo(bubble.x - 7, boxY + boxH);
    ctx.lineTo(bubble.x + 7, boxY + boxH);
    ctx.lineTo(bubble.x, boxY + boxH + 8);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = "#c8a96e";
    ctx.beginPath();
    ctx.moveTo(bubble.x - 7, boxY + boxH);
    ctx.lineTo(bubble.x, boxY + boxH + 8);
    ctx.lineTo(bubble.x + 7, boxY + boxH);
    ctx.stroke();

    // Text
    ctx.fillStyle = "#f0e6d6";
    ctx.textAlign = "center";
    ctx.fillText(bubble.text, bubble.x, boxY + 21);
    ctx.restore();
  }

  drawHoverTooltip(ctx) {
    const obj = this.hoveredObject;
    ctx.save();
    ctx.font = "11px 'Segoe UI', sans-serif";
    const label = `${obj.name} (${obj.role || "Tizim Birligi"})`;
    const w = ctx.measureText(label).width + 20;
    const x = Math.max(10, Math.min(this.width - w - 10, this.mouseX + 12));
    const y = Math.max(20, this.mouseY - 18);

    ctx.fillStyle = "#15181e";
    ctx.fillRect(x, y - 14, w, 22);
    ctx.strokeStyle = "#c8a96e";
    ctx.lineWidth = 1;
    ctx.strokeRect(x, y - 14, w, 22);

    ctx.fillStyle = "#e6d5b8";
    ctx.fillText(label, x + 10, y + 1);
    ctx.restore();
  }
}

// Export for browser
if (typeof window !== 'undefined') {
  window.FoundryEngine2D = FoundryEngine2D;
}
