// ============================================================================
// WIUT OPERATING SYSTEMS (5COSC041C) — ATMOSPHERIC 2D NIGHT CODER ATELIER
// Kapishon kiygan dasturchi tunda o'z xonasida kompyuterga qarab o'tirgan sokin atmosfera.
// Oyna, oy, yulduzlar, monitor nuri, klaviaturada yozish va kofe bug'i.
// ============================================================================

class CyberNocArena2D {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas ? this.canvas.getContext("2d") : null;
    this.width = 860;
    this.height = 340;

    if (this.canvas) {
      this.canvas.width = this.width;
      this.canvas.height = this.height;
    }

    // Programmer State (Boy in Hoodie)
    this.player = {
      speech: "Tungi sokinlikda Linux tizimini o'rganish vaqti...",
      speechTimer: 240,
      typingFrame: 0,
      isTyping: true
    };

    // Particles (stars, steam, matrix lines, success confetti)
    this.stars = [];
    for (let i = 0; i < 35; i++) {
      this.stars.push({
        x: 600 + Math.random() * 220,
        y: 30 + Math.random() * 120,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random(),
        speed: 0.02 + Math.random() * 0.02
      });
    }

    this.steamParticles = [];
    this.successParticles = [];
    this.codeLines = [
      "root@kali:~# uname -r",
      "6.6.15-kali1-amd64",
      "root@kali:~# ls -lai /home",
      "1024 drwxr-xr-x 4 student",
      "root@kali:~# find / -name '*.conf'",
      "/etc/nginx/nginx.conf",
      "root@kali:~# stat /etc/passwd",
      "Inode: 1048576 Links: 1",
      "root@kali:~# ps aux | grep bash",
      "student  1420 0.0  0.1 /bin/bash"
    ];
    this.codeScrollY = 0;

    // Callbacks
    this.onSelectTab = null;
    this.onOpenMap = null;
    this.onTriggerEvent = null;

    this.tick = 0;
    this.running = true;

    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  setSector(sectorNum) {
    this.player.speech = `${sectorNum}-Qavat topshiriqlari faollashdi. Konsentratsiyani yo'qotmaymiz!`;
    this.player.speechTimer = 200;
  }

  addSuccessBurst() {
    for (let i = 0; i < 45; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 5 + 2;
      this.successParticles.push({
        x: 380,
        y: 190,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        r: Math.random() * 3 + 2,
        alpha: 1.0,
        color: ['#10b981', '#22d3ee', '#fbbf24', '#38bdf8', '#34d399'][Math.floor(Math.random() * 5)]
      });
    }
  }

  animate() {
    if (!this.running || !this.ctx) return;
    this.tick++;

    this.update();
    this.render();

    requestAnimationFrame(this.animate);
  }

  update() {
    // Stars twinkling
    this.stars.forEach(s => {
      s.alpha += s.speed;
      if (s.alpha > 1 || s.alpha < 0.2) s.speed = -s.speed;
    });

    // Coffee Steam
    if (this.tick % 8 === 0) {
      this.steamParticles.push({
        x: 522 + (Math.random() * 6 - 3),
        y: 220,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -0.7 - Math.random() * 0.5,
        alpha: 0.7,
        r: Math.random() * 2 + 1.5
      });
    }
    this.steamParticles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= 0.01;
      p.r += 0.04;
    });
    this.steamParticles = this.steamParticles.filter(p => p.alpha > 0);

    // Success burst particles
    this.successParticles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.12; // gravity
      p.alpha -= 0.018;
    });
    this.successParticles = this.successParticles.filter(p => p.alpha > 0);

    // Code scrolling on monitor
    if (this.tick % 4 === 0) {
      this.codeScrollY += 0.6;
      if (this.codeScrollY > 16) this.codeScrollY = 0;
    }

    // Speech bubble timer
    if (this.player.speechTimer > 0) {
      this.player.speechTimer--;
    }
  }

  render() {
    const ctx = this.ctx;
    const w = this.width;
    const h = this.height;

    ctx.clearRect(0, 0, w, h);

    // 1. Dark Room Background Gradient
    const roomGrad = ctx.createLinearGradient(0, 0, 0, h);
    roomGrad.addColorStop(0, '#060913');
    roomGrad.addColorStop(0.7, '#0b1120');
    roomGrad.addColorStop(1, '#080d1a');
    ctx.fillStyle = roomGrad;
    ctx.fillRect(0, 0, w, h);

    // 2. Room Floor
    const floorGrad = ctx.createLinearGradient(0, 240, 0, h);
    floorGrad.addColorStop(0, '#0e1628');
    floorGrad.addColorStop(1, '#060a14');
    ctx.fillStyle = floorGrad;
    ctx.fillRect(0, 240, w, h - 240);

    // Floor perspective planks
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
    ctx.lineWidth = 1;
    for (let x = -100; x < w + 200; x += 120) {
      ctx.beginPath();
      ctx.moveTo(x, 240);
      ctx.lineTo(x + (x - w / 2) * 0.4, h);
      ctx.stroke();
    }

    // 3. Night Window (Right side)
    const winX = 600, winY = 25, winW = 220, winH = 150;
    ctx.save();
    ctx.fillStyle = '#030611';
    ctx.fillRect(winX, winY, winW, winH);

    // Stars
    this.stars.forEach(s => {
      ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, s.alpha)})`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    });

    // Crescent Moon
    ctx.fillStyle = '#fef08a';
    ctx.beginPath();
    ctx.arc(winX + 175, winY + 45, 18, 0, Math.PI * 2);
    ctx.fill();
    // Shadow to make crescent
    ctx.fillStyle = '#030611';
    ctx.beginPath();
    ctx.arc(winX + 182, winY + 42, 16, 0, Math.PI * 2);
    ctx.fill();

    // Distant city silhouette
    ctx.fillStyle = '#070c1a';
    ctx.fillRect(winX + 15, winY + 115, 30, 35);
    ctx.fillRect(winX + 50, winY + 95, 25, 55);
    ctx.fillRect(winX + 80, winY + 120, 35, 30);
    ctx.fillRect(winX + 120, winY + 105, 40, 45);
    ctx.fillRect(winX + 165, winY + 125, 45, 25);

    // Window frame
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 4;
    ctx.strokeRect(winX, winY, winW, winH);
    ctx.beginPath();
    ctx.moveTo(winX + winW / 2, winY);
    ctx.lineTo(winX + winW / 2, winY + winH);
    ctx.moveTo(winX, winY + winH / 2);
    ctx.lineTo(winX + winW, winY + winH / 2);
    ctx.stroke();
    ctx.restore();

    // 4. Cozy Ambient Cyber Desk
    const deskX = 140, deskY = 215, deskW = 440, deskH = 16;
    // Desk surface
    const deskGrad = ctx.createLinearGradient(deskX, deskY, deskX, deskY + deskH);
    deskGrad.addColorStop(0, '#1e293b');
    deskGrad.addColorStop(1, '#0f172a');
    ctx.fillStyle = deskGrad;
    ctx.fillRect(deskX, deskY, deskW, deskH);

    // Desk legs
    ctx.fillStyle = '#090d16';
    ctx.fillRect(deskX + 25, deskY + deskH, 14, h - (deskY + deskH));
    ctx.fillRect(deskX + deskW - 39, deskY + deskH, 14, h - (deskY + deskH));

    // 5. Dual Monitor Setup & Glowing Screen
    const monX = 260, monY = 85, monW = 200, monH = 120;

    // Monitor stand
    ctx.fillStyle = '#334155';
    ctx.fillRect(monX + monW / 2 - 8, monY + monH, 16, 16);
    ctx.fillRect(monX + monW / 2 - 35, monY + monH + 12, 70, 5);

    // Monitor Outer Bezel
    ctx.fillStyle = '#0f172a';
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(monX, monY, monW, monH, 6);
    ctx.fill();
    ctx.stroke();

    // Ambient Monitor Glow behind and on desk
    const glow = ctx.createRadialGradient(monX + monW / 2, monY + monH / 2, 20, monX + monW / 2, monY + monH / 2, 160);
    glow.addColorStop(0, 'rgba(56, 189, 248, 0.22)');
    glow.addColorStop(0.6, 'rgba(16, 185, 129, 0.08)');
    glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(monX + monW / 2, monY + monH / 2, 160, 0, Math.PI * 2);
    ctx.fill();

    // Monitor Screen Display (Debian Kali Terminal)
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(monX + 6, monY + 6, monW - 12, monH - 12, 4);
    ctx.clip();

    ctx.fillStyle = '#030712';
    ctx.fillRect(monX + 6, monY + 6, monW - 12, monH - 12);

    // Terminal Title bar on monitor
    ctx.fillStyle = '#111827';
    ctx.fillRect(monX + 6, monY + 6, monW - 12, 14);
    ctx.fillStyle = '#ef4444';
    ctx.beginPath(); ctx.arc(monX + 14, monY + 13, 3, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#f59e0b';
    ctx.beginPath(); ctx.arc(monX + 22, monY + 13, 3, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#10b981';
    ctx.beginPath(); ctx.arc(monX + 30, monY + 13, 3, 0, Math.PI * 2); ctx.fill();

    // Terminal Code lines
    ctx.font = '8px monospace';
    ctx.fillStyle = '#38bdf8';
    let lineY = monY + 30;
    for (let i = 0; i < 7; i++) {
      const idx = (i + Math.floor(this.tick / 60)) % this.codeLines.length;
      const text = this.codeLines[idx];
      ctx.fillStyle = text.startsWith('root@') ? '#22d3ee' : '#34d399';
      ctx.fillText(text, monX + 12, lineY);
      lineY += 12;
    }

    // Blinking cursor on monitor
    if (Math.floor(this.tick / 25) % 2 === 0) {
      ctx.fillStyle = '#22d3ee';
      ctx.fillRect(monX + 12, lineY - 2, 5, 8);
    }
    ctx.restore();

    // Tux Penguin Mascot Sticker on Monitor Base
    ctx.font = '14px sans-serif';
    ctx.fillText('🐧', monX + monW - 25, monY + monH - 6);

    // 6. Steaming Coffee Mug on Desk
    const mugX = 515, mugY = 217;
    ctx.fillStyle = '#334155';
    ctx.beginPath();
    ctx.roundRect(mugX, mugY - 14, 15, 14, 2);
    ctx.fill();
    // Mug handle
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.arc(mugX + 16, mugY - 7, 5, -Math.PI / 2, Math.PI / 2);
    ctx.stroke();
    // Warm coffee glow
    ctx.fillStyle = '#78350f';
    ctx.fillRect(mugX + 2, mugY - 14, 11, 2);

    // Steam particles
    this.steamParticles.forEach(p => {
      ctx.fillStyle = `rgba(203, 213, 225, ${p.alpha})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });

    // 7. Warm Desk Lamp
    const lampX = 180, lampY = 150;
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(lampX, deskY);
    ctx.lineTo(lampX - 15, lampY + 30);
    ctx.lineTo(lampX + 10, lampY);
    ctx.stroke();

    // Lamp shade
    ctx.fillStyle = '#f59e0b';
    ctx.beginPath();
    ctx.moveTo(lampX + 2, lampY);
    ctx.lineTo(lampX + 26, lampY + 14);
    ctx.lineTo(lampX - 6, lampY + 14);
    ctx.closePath();
    ctx.fill();

    // Soft lamp warm light beam
    const lampGlow = ctx.createRadialGradient(lampX + 10, lampY + 14, 5, lampX + 10, lampY + 40, 80);
    lampGlow.addColorStop(0, 'rgba(251, 191, 36, 0.28)');
    lampGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = lampGlow;
    ctx.beginPath();
    ctx.arc(lampX + 10, lampY + 40, 80, 0, Math.PI * 2);
    ctx.fill();

    // 8. Programmer Boy in Dark Hoodie (Kapishon)
    const boyX = 360, boyY = 145;

    // Ergonomic Chair Back
    ctx.fillStyle = '#090d16';
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(boyX - 25, boyY + 15, 50, 75, 10);
    ctx.fill();
    ctx.stroke();

    // Chair Headrest
    ctx.beginPath();
    ctx.roundRect(boyX - 18, boyY - 5, 36, 16, 5);
    ctx.fill();
    ctx.stroke();

    // Boy Torso & Hoodie
    const hoodieGrad = ctx.createLinearGradient(boyX - 22, boyY + 35, boyX + 22, boyY + 95);
    hoodieGrad.addColorStop(0, '#1e293b');
    hoodieGrad.addColorStop(1, '#0f172a');
    ctx.fillStyle = hoodieGrad;

    // Body / Back
    ctx.beginPath();
    ctx.moveTo(boyX - 22, boyY + 95);
    ctx.lineTo(boyX - 18, boyY + 35);
    ctx.lineTo(boyX + 18, boyY + 35);
    ctx.lineTo(boyX + 22, boyY + 95);
    ctx.closePath();
    ctx.fill();

    // Dark Hoodie Head & Hood (Kapishon)
    ctx.fillStyle = '#1e293b';
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 1;
    ctx.beginPath();
    // Hood contour
    ctx.arc(boyX, boyY + 22, 19, Math.PI * 0.8, Math.PI * 2.2);
    ctx.fill();
    ctx.stroke();

    // Inner Hood & Shadow
    ctx.fillStyle = '#090d16';
    ctx.beginPath();
    ctx.arc(boyX, boyY + 24, 14, 0, Math.PI * 2);
    ctx.fill();

    // Face Profile / Glasses softly lit by monitor
    ctx.fillStyle = '#fbcfe8';
    ctx.beginPath();
    ctx.arc(boyX + 4, boyY + 23, 8, -Math.PI / 2, Math.PI / 2);
    ctx.fill();

    // Glowing Glasses / Eye Reflection from screen
    ctx.fillStyle = '#38bdf8';
    ctx.fillRect(boyX + 7, boyY + 20, 6, 3);

    // Arms stretching to keyboard with typing motion
    const typeOffset = Math.sin(this.tick * 0.4) * 2;
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 7;
    ctx.lineCap = 'round';

    // Left Arm
    ctx.beginPath();
    ctx.moveTo(boyX - 14, boyY + 45);
    ctx.lineTo(boyX - 4, deskY + 3 + typeOffset);
    ctx.stroke();

    // Right Arm
    ctx.beginPath();
    ctx.moveTo(boyX + 14, boyY + 45);
    ctx.lineTo(boyX + 18, deskY + 3 - typeOffset);
    ctx.stroke();

    // Hands on Keyboard
    ctx.fillStyle = '#fbcfe8';
    ctx.beginPath();
    ctx.arc(boyX - 4, deskY + 3 + typeOffset, 3.5, 0, Math.PI * 2);
    ctx.arc(boyX + 18, deskY + 3 - typeOffset, 3.5, 0, Math.PI * 2);
    ctx.fill();

    // Keyboard on desk
    ctx.fillStyle = '#0f172a';
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
    ctx.lineWidth = 1;
    ctx.fillRect(monX + 40, deskY + 1, 75, 7);
    ctx.strokeRect(monX + 40, deskY + 1, 75, 7);

    // 9. Speech Bubble / Thoughts
    if (this.player.speech && this.player.speechTimer > 0) {
      const bubbleX = 220, bubbleY = 32, bubbleW = 270, bubbleH = 34;

      ctx.fillStyle = 'rgba(15, 23, 42, 0.94)';
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.5)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(bubbleX, bubbleY, bubbleW, bubbleH, 8);
      ctx.fill();
      ctx.stroke();

      // Little pointer tail pointing to boy
      ctx.beginPath();
      ctx.moveTo(bubbleX + 120, bubbleY + bubbleH);
      ctx.lineTo(boyX, boyY + 5);
      ctx.lineTo(bubbleX + 140, bubbleY + bubbleH);
      ctx.closePath();
      ctx.fillStyle = 'rgba(15, 23, 42, 0.94)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.5)';
      ctx.stroke();

      // Text inside
      ctx.font = '600 11px "Inter", sans-serif';
      ctx.fillStyle = '#f8fafc';
      ctx.textAlign = 'center';
      ctx.fillText(this.player.speech, bubbleX + bubbleW / 2, bubbleY + 21);
      ctx.textAlign = 'start';
    }

    // 10. Success Confetti Sparks
    this.successParticles.forEach(p => {
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1.0;
    });

    // 11. Subtle Status Label on bottom right
    ctx.font = '10px "JetBrains Mono", monospace';
    ctx.fillStyle = 'rgba(56, 189, 248, 0.5)';
    ctx.fillText('⚡ WIUT LINUX LAB • DEBIAN 12 KERNEL', w - 240, h - 12);
  }
}

window.CyberNocArena2D = CyberNocArena2D;

window.CyberDevOpsArena2D = CyberNocArena2D;
window.CyberProcessNocArena2D = CyberNocArena2D;
window.CyberAutomationNocArena2D = CyberNocArena2D;
window.CyberDockerArena2D = CyberNocArena2D;
window.CyberVirtualMemoryArena2D = CyberNocArena2D;
