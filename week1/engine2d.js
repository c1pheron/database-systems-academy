/**
 * DATABASE SYSTEMS ACADEMY — WEEK 1 2D ATELIER ENGINE
 * Visual Drafting Board, Concept Workstations & Architectural Diagnostics
 */

(function () {
  "use strict";

  class Atelier2DEngine {
    constructor(canvasId) {
      this.canvas = document.getElementById(canvasId);
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext("2d");
      this.width = this.canvas.width = 860;
      this.height = this.canvas.height = 360;

      this.tick = 0;
      this.particles = [];
      this.activeAlert = null;
      this.alertTimer = 0;

      // Workstations
      this.workstations = [
        { name: "ENTITIES & KEYS", x: 40,  y: 40, w: 140, h: 180, color: "#00e5ff", symbol: "🏛️", active: true },
        { name: "MULTIPLICITIES",  x: 200, y: 40, w: 140, h: 180, color: "#10b981", symbol: "📐", active: false },
        { name: "WEAK ENTITIES",   x: 360, y: 40, w: 140, h: 180, color: "#8b5cf6", symbol: "🔗", active: false },
        { name: "TERNARY & CLASSES",x: 520, y: 40, w: 140, h: 180, color: "#f59e0b", symbol: "🔺", active: false },
        { name: "TRAP DIAGNOSTICS",x: 680, y: 40, w: 140, h: 180, color: "#ef4444", symbol: "⚠️", active: false }
      ];

      // Characters
      this.leadArchitect = { x: 740, y: 280, speech: "Always verify business rules for multiplicity!" };
      this.student = { x: 120, y: 280, speech: "Drafting conceptual schema..." };
      this.client = { x: 430, y: 280, speech: "Does our branch track staff and properties?" };

      this.startLoop();
    }

    triggerAlert(message, duration = 180) {
      this.activeAlert = message;
      this.alertTimer = duration;
    }

    triggerSuccess(conceptName = "ER Diagram Validated") {
      this.triggerAlert(`✓ ${conceptName} Approved!`, 150);
      for (let i = 0; i < 35; i++) {
        this.particles.push({
          x: 430 + (Math.random() - 0.5) * 200,
          y: 130 + (Math.random() - 0.5) * 40,
          vx: (Math.random() - 0.5) * 4,
          vy: -1 - Math.random() * 3,
          life: 40 + Math.random() * 30,
          maxLife: 70,
          color: Math.random() > 0.5 ? "#00e5ff" : "#10b981",
          size: 2 + Math.random() * 3
        });
      }
    }

    startLoop() {
      const render = () => {
        this.update();
        this.draw();
        requestAnimationFrame(render);
      };
      requestAnimationFrame(render);
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

      // Cycle characters speech periodically
      if (this.tick % 450 === 0) {
        const architectQuotes = [
          "Fan Trap: two 1:N relations fan out from one entity!",
          "Chasm Trap: optional participation breaks indirect paths!",
          "Weak entities always require an identifying composition!",
          "In UML, multiplicity on a leg counts for ONE instance of the other!",
          "Decomposing ternary into associative entity simplifies schema."
        ];
        this.leadArchitect.speech = architectQuotes[Math.floor(Math.random() * architectQuotes.length)];
      }
    }

    draw() {
      const ctx = this.ctx;
      ctx.clearRect(0, 0, this.width, this.height);

      // 1. Grid Background
      ctx.strokeStyle = "rgba(0, 229, 255, 0.04)";
      ctx.lineWidth = 1;
      const gridSize = 24;
      for (let x = 0; x < this.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, this.height);
        ctx.stroke();
      }
      for (let y = 0; y < this.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(this.width, y);
        ctx.stroke();
      }

      // 2. Drafting Workstations
      this.workstations.forEach((ws, idx) => {
        const isHover = Math.sin(this.tick * 0.04 + idx) > 0;
        
        ctx.fillStyle = "rgba(10, 20, 38, 0.8)";
        ctx.strokeStyle = ws.color;
        ctx.lineWidth = 1.5;

        // Panel Glow
        ctx.shadowColor = ws.color;
        ctx.shadowBlur = 8;
        ctx.strokeRect(ws.x, ws.y, ws.w, ws.h);
        ctx.shadowBlur = 0;
        ctx.fillRect(ws.x, ws.y, ws.w, ws.h);

        // Header Tab
        ctx.fillStyle = "rgba(14, 28, 54, 0.9)";
        ctx.fillRect(ws.x, ws.y, ws.w, 28);
        ctx.fillStyle = "#fff";
        ctx.font = "bold 10px 'JetBrains Mono', monospace";
        ctx.textAlign = "center";
        ctx.fillText(ws.name, ws.x + ws.w / 2, ws.y + 18);

        // Center Symbol & Diagram Miniature
        ctx.font = "24px sans-serif";
        ctx.fillText(ws.symbol, ws.x + ws.w / 2, ws.y + 70);

        // Decorative Blueprint Lines
        ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
        ctx.lineWidth = 1;
        ctx.strokeRect(ws.x + 15, ws.y + 90, ws.w - 30, 65);
        ctx.fillStyle = "rgba(0, 229, 255, 0.15)";
        ctx.fillRect(ws.x + 15, ws.y + 90, ws.w - 30, 16);

        ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
        ctx.font = "8px 'JetBrains Mono', monospace";
        ctx.fillText("UML NOTATION", ws.x + ws.w / 2, ws.y + 102);

        // Pulsing Status LED
        const ledY = ws.y + ws.h - 12;
        ctx.fillStyle = isHover ? ws.color : "rgba(255,255,255,0.2)";
        ctx.beginPath();
        ctx.arc(ws.x + ws.w / 2, ledY, 3, 0, Math.PI * 2);
        ctx.fill();
      });

      // 3. Characters Floor
      ctx.strokeStyle = "rgba(0, 229, 255, 0.25)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(30, 260);
      ctx.lineTo(830, 260);
      ctx.stroke();

      // Draw Avatars
      this.drawAvatar(this.student.x, this.student.y, "👨‍💻", "Modeler (You)", "#00e5ff", this.student.speech);
      this.drawAvatar(this.client.x, this.client.y, "👔", "Enterprise Client", "#f59e0b", this.client.speech);
      this.drawAvatar(this.leadArchitect.x, this.leadArchitect.y, "🏛️", "Lead Architect", "#10b981", this.leadArchitect.speech);

      // 4. Floating Alert Banner
      if (this.activeAlert) {
        ctx.fillStyle = "rgba(8, 16, 32, 0.95)";
        ctx.strokeStyle = "#00e5ff";
        ctx.lineWidth = 1.5;
        const bw = 380;
        const bh = 36;
        const bx = (this.width - bw) / 2;
        const by = 8;
        ctx.strokeRect(bx, by, bw, bh);
        ctx.fillRect(bx, by, bw, bh);

        ctx.fillStyle = "#00e5ff";
        ctx.font = "bold 12px 'Inter', sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(this.activeAlert, this.width / 2, by + 23);
      }

      // 5. Draw Particles
      this.particles.forEach(p => {
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life / p.maxLife;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1.0;
    }

    drawAvatar(x, y, emoji, name, color, speech) {
      const ctx = this.ctx;

      // Platform
      ctx.fillStyle = "rgba(12, 24, 46, 0.85)";
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.ellipse(x, y + 25, 30, 8, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Emoji
      ctx.font = "28px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(emoji, x, y + 16);

      // Name Tag
      ctx.fillStyle = "#fff";
      ctx.font = "bold 10px 'Inter', sans-serif";
      ctx.fillText(name, x, y + 42);

      // Speech Balloon
      if (speech) {
        ctx.font = "11px 'Inter', sans-serif";
        const metrics = ctx.measureText(speech);
        const bw = Math.min(220, Math.max(120, metrics.width + 16));
        const bh = 26;
        const bx = x - bw / 2;
        const by = y - 38;

        ctx.fillStyle = "rgba(14, 28, 54, 0.95)";
        ctx.strokeStyle = color;
        ctx.lineWidth = 1;
        ctx.fillRect(bx, by, bw, bh);
        ctx.strokeRect(bx, by, bw, bh);

        // Arrow
        ctx.beginPath();
        ctx.moveTo(x - 4, by + bh);
        ctx.lineTo(x, by + bh + 6);
        ctx.lineTo(x + 4, by + bh);
        ctx.closePath();
        ctx.fillStyle = "rgba(14, 28, 54, 0.95)";
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "#f8fafc";
        ctx.fillText(speech, x, by + 17);
      }
    }
  }

  window.Atelier2DEngine = Atelier2DEngine;
})();
