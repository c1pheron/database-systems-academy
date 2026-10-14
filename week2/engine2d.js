/**
 * ACADEMY DATABASE SYSTEMS (MODULE) — WEEK 1 & 2
 * 2D Panoramic Consultation Atelier Engine (Compact 960x110 Banner)
 * 
 * Features:
 * - Chief Architect Atlas on the left consultation podium
 * - Visiting Client on the right leather armchair
 * - Live animated dialogue balloon in the center
 * - Seamlessly frames the Master Drafting Board directly beneath it
 */

class ModelingBureauEngine2D {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.width = this.canvas.width = 960;
    this.height = this.canvas.height = 110;

    this.tick = 0;
    this.animId = null;
    this.approvalStampTimer = 0;
    this.errorPulseTimer = 0;
    this.particles = [];
    this.currentClient = null;
    this.liveSpeechText = null;
    this.liveSpeechTimer = 0;

    this.startLoop();
  }

  setClient(client) {
    this.currentClient = client;
    this.liveSpeechText = null;
    this.liveSpeechTimer = 0;
  }

  setLiveSpeech(text, durationTicks = 200) {
    this.liveSpeechText = text;
    this.liveSpeechTimer = durationTicks;
  }

  triggerDeploySuccess(tableName = "EER Sxema") {
    this.approvalStampTimer = 160;

    // Sparkles
    for (let i = 0; i < 30; i++) {
      this.particles.push({
        x: 480 + (Math.random() - 0.5) * 200,
        y: 55 + (Math.random() - 0.5) * 30,
        vx: (Math.random() - 0.5) * 3,
        vy: -1 - Math.random() * 2,
        life: 50 + Math.random() * 30,
        maxLife: 80,
        color: Math.random() > 0.5 ? "#ffffff" : "#a0a0aa",
        size: 2 + Math.random() * 2.5
      });
    }
  }

  triggerErrorAlert(errText = "Me'moriy xatolik") {
    this.errorPulseTimer = 70;
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

    if (this.approvalStampTimer > 0) {
      this.approvalStampTimer--;
    }

    if (this.errorPulseTimer > 0) {
      this.errorPulseTimer--;
    }

    if (this.liveSpeechTimer > 0) {
      this.liveSpeechTimer--;
      if (this.liveSpeechTimer === 0) {
        this.liveSpeechText = null;
      }
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
  }

  render() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);

    // 1. Panoramic Studio Wall & Base
    this.drawPanoramicRoom(ctx);

    // 2. Left: Architect Atlas at Consultation Desk
    this.drawAtlasStation(ctx);

    // 3. Right: Visiting Client in Armchair
    this.drawClientStation(ctx);

    // 4. Center: Live Consultation Dialogue / Status Balloon
    this.drawCenterDialogue(ctx);

    // 5. Overlays (Approval Stamp, Particles)
    this.drawOverlays(ctx);
  }

  drawPanoramicRoom(ctx) {
    // Wall gradient
    const wallGrad = ctx.createLinearGradient(0, 0, 0, this.height);
    wallGrad.addColorStop(0, "#09090b");
    wallGrad.addColorStop(1, "#121216");
    ctx.fillStyle = wallGrad;
    ctx.fillRect(0, 0, this.width, this.height);

    // Base trim line
    ctx.fillStyle = "#222228";
    ctx.fillRect(0, this.height - 4, this.width, 4);
    ctx.fillStyle = "#33333e";
    ctx.fillRect(0, this.height - 5, this.width, 1);

    // Subtle architectural window frames on sides
    ctx.strokeStyle = "#1a1a20";
    ctx.lineWidth = 1;
    ctx.strokeRect(15, 10, 60, 80);
    ctx.strokeRect(885, 10, 60, 80);
  }

  drawAtlasStation(ctx) {
    const x = 110;
    const y = 82;
    const breath = Math.sin(this.tick * 0.05) * 0.8;

    // Consultation podium
    ctx.fillStyle = "#18181e";
    ctx.fillRect(x - 25, y - 10, 85, 30);
    ctx.strokeStyle = "#383844";
    ctx.lineWidth = 1;
    ctx.strokeRect(x - 25, y - 10, 85, 30);

    // Blueprints on desk
    ctx.fillStyle = "#22222c";
    ctx.fillRect(x - 18, y - 14, 45, 8);
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 0.8;
    ctx.strokeRect(x - 18, y - 14, 45, 8);

    // Atlas Body
    ctx.fillStyle = "#1c2028";
    ctx.beginPath();
    ctx.ellipse(x - 5, y - 28 + breath, 10, 16, 0, 0, Math.PI * 2);
    ctx.fill();

    // White collar
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.moveTo(x - 8, y - 40 + breath);
    ctx.lineTo(x - 5, y - 34 + breath);
    ctx.lineTo(x - 2, y - 40 + breath);
    ctx.fill();

    // Head
    ctx.fillStyle = "#deb095";
    ctx.beginPath();
    ctx.arc(x - 5, y - 48 + breath, 7, 0, Math.PI * 2);
    ctx.fill();

    // Dark hair & beard
    ctx.fillStyle = "#261a14";
    ctx.beginPath();
    ctx.arc(x - 5, y - 50 + breath, 7.5, Math.PI * 1.1, Math.PI * 0.1);
    ctx.fill();

    // Arm leaning on desk with T-square
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(x - 14, y - 42 + breath);
    ctx.lineTo(x + 10, y - 14);
    ctx.stroke();

    // Badge
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 9px monospace";
    ctx.fillText("BOSH ME'MOR ATLAS", x - 28, y + 25);
  }

  drawClientStation(ctx) {
    const x = 850;
    const y = 82;
    const breath = Math.sin(this.tick * 0.05) * 0.8;
    const isApproved = (this.approvalStampTimer > 0);
    const nod = isApproved ? Math.sin(this.tick * 0.18) * 2.5 : 0;

    // Leather Armchair
    ctx.fillStyle = "#1c1c20";
    ctx.beginPath();
    ctx.roundRect(x - 22, y - 34, 44, 44, 4);
    ctx.fill();
    ctx.strokeStyle = "#383844";
    ctx.lineWidth = 1;
    ctx.stroke();

    // Client body
    ctx.fillStyle = "#161c24";
    ctx.beginPath();
    ctx.ellipse(x, y - 16 + breath, 11, 15, 0, 0, Math.PI * 2);
    ctx.fill();

    // Shirt & tie
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.moveTo(x - 3, y - 28 + breath);
    ctx.lineTo(x, y - 22 + breath);
    ctx.lineTo(x + 3, y - 28 + breath);
    ctx.fill();

    // Head (facing left towards Atlas and board)
    ctx.fillStyle = "#deb095";
    ctx.beginPath();
    ctx.arc(x, y - 36 + breath + nod, 7, 0, Math.PI * 2);
    ctx.fill();

    // Hair
    ctx.fillStyle = "#221711";
    ctx.beginPath();
    ctx.arc(x, y - 38 + breath + nod, 7.5, Math.PI * 1.1, Math.PI * 2.1);
    ctx.fill();

    // Eyes attentive looking left
    ctx.fillStyle = "#000000";
    ctx.fillRect(x - 4, y - 37 + breath + nod, 1.5, 1.5);

    // Approval gesture
    if (isApproved) {
      ctx.strokeStyle = "#2ea043";
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.arc(x, y - 34 + breath + nod, 2.5, 0.2, Math.PI - 0.2);
      ctx.stroke();
    }

    // Client Name Badge
    const cName = this.currentClient ? this.currentClient.clientName : "Mijoz";
    ctx.fillStyle = isApproved ? "#2ea043" : "#ffffff";
    ctx.font = "bold 9px monospace";
    ctx.textAlign = "center";
    ctx.fillText(`${isApproved ? '✓ ' : ''}${cName.substring(0, 16)}`, x, y + 25);
    ctx.textAlign = "left";
  }

  drawCenterDialogue(ctx) {
    const client = this.currentClient;
    const isApproved = (this.approvalStampTimer > 0);

    const bx = 240;
    const by = 16;
    const bw = 480;
    const bh = 76;

    // Dialogue card
    ctx.fillStyle = "rgba(18, 18, 22, 0.9)";
    ctx.beginPath();
    ctx.roundRect(bx, by, bw, bh, 4);
    ctx.fill();
    ctx.strokeStyle = isApproved ? "#2ea043" : "#383844";
    ctx.lineWidth = 1;
    ctx.stroke();

    // Pointer towards client (on right)
    ctx.fillStyle = "rgba(18, 18, 22, 0.9)";
    ctx.beginPath();
    ctx.moveTo(bx + bw, by + 26);
    ctx.lineTo(bx + bw + 10, by + 32);
    ctx.lineTo(bx + bw, by + 38);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = isApproved ? "#2ea043" : "#383844";
    ctx.beginPath();
    ctx.moveTo(bx + bw, by + 26);
    ctx.lineTo(bx + bw + 10, by + 32);
    ctx.lineTo(bx + bw, by + 38);
    ctx.stroke();

    // Client Title header
    const title = client ? client.title : "Konseptual EER Chizmasi";
    const role = client ? client.clientRole : "Biznes Hamkor";

    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 11px 'Segoe UI', sans-serif";
    ctx.fillText(`“${title}”`, bx + 14, by + 22);

    ctx.fillStyle = "#8e8e98";
    ctx.font = "10px 'Segoe UI', sans-serif";
    ctx.fillText(`Mijoz roli: ${role}`, bx + 14, by + 38);

    // Live speech or snippet from story
    if (this.liveSpeechText) {
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 11px monospace";
      ctx.fillText(`⚡ ${this.liveSpeechText}`, bx + 14, by + 58);
    } else {
      let storySnippet = client ? client.story : "Mijoz talabi asosida quyidagi doskada EER modelni chizing.";
      if (storySnippet.length > 75) {
        storySnippet = storySnippet.substring(0, 72) + "...";
      }

      ctx.fillStyle = "#d4d4dc";
      ctx.font = "italic 10.5px 'Segoe UI', sans-serif";
      ctx.fillText(`“${storySnippet}”`, bx + 14, by + 58);
    }
  }

  drawOverlays(ctx) {
    // 1. Success Approval Stamp
    if (this.approvalStampTimer > 0) {
      const alpha = Math.min(1, this.approvalStampTimer / 25);
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.translate(480, 52);

      ctx.fillStyle = "rgba(10, 10, 14, 0.96)";
      ctx.fillRect(-160, -20, 320, 40);
      ctx.strokeStyle = "#2ea043";
      ctx.lineWidth = 2;
      ctx.strokeRect(-160, -20, 320, 40);

      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 12px monospace";
      ctx.textAlign = "center";
      ctx.fillText("✓ MIJOZ ROZI BO'LDI • EER SXEMA QABUL QILINDI", 0, 5);
      ctx.restore();
    }

    // 2. Error Flash
    if (this.errorPulseTimer > 0) {
      const alpha = (this.errorPulseTimer / 70) * 0.15;
      ctx.save();
      ctx.fillStyle = `rgba(207, 66, 52, ${alpha})`;
      ctx.fillRect(0, 0, this.width, this.height);
      ctx.restore();
    }

    // 3. Particles
    for (const p of this.particles) {
      ctx.save();
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.life / p.maxLife;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }
}

if (typeof window !== 'undefined') {
  window.ModelingBureauEngine2D = ModelingBureauEngine2D;
}
