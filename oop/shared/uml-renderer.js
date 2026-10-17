// ============================================================================
// OOP ACADEMY — INTERACTIVE LIVE UML CLASS DIAGRAM RENDERER (RESILIENT & SMART)
// Automatically parses Java code, extracts classes, attributes, methods, inheritance
// Does NOT fail or wipe out when code has partial syntax errors!
// Solves: "butun boshli diagrammani xato deyish o'rniga"
// ============================================================================

(function (global) {
  "use strict";

  const UMLRenderer = {
    // 1. Resilient Java Code to UML Parser
    parseJavaToUML(code) {
      const classes = [];
      if (!code || typeof code !== "string") return classes;

      // Clean comments safely preserving line structure
      const cleanCode = code
        .replace(/\/\*[\s\S]*?\*\//g, "")
        .replace(/\/\/.*/g, "");

      // Match class / interface definitions
      const classRegex = /(?:(public|abstract|final)\s+)?(class|interface)\s+([A-Za-z0-9_]+)(?:\s+extends\s+([A-Za-z0-9_]+))?(?:\s+implements\s+([A-Za-z0-9_,\s]+))?\s*\{/g;

      let match;
      while ((match = classRegex.exec(cleanCode)) !== null) {
        const modifier = match[1] || "";
        const kind = match[2]; // class or interface
        const name = match[3];
        const superclass = match[4] || null;
        const interfaces = match[5] ? match[5].split(",").map(s => s.trim()).filter(Boolean) : [];

        // Find class body resiliently
        let depth = 1;
        let start = match.index + match[0].length;
        let end = cleanCode.length; // fallback if unclosed
        let hasUnclosedBrace = false;

        for (let i = start; i < cleanCode.length; i++) {
          if (cleanCode[i] === "{") depth++;
          else if (cleanCode[i] === "}") {
            depth--;
            if (depth === 0) {
              end = i;
              break;
            }
          }
        }

        if (depth > 0) {
          hasUnclosedBrace = true;
          end = cleanCode.length;
        }

        const body = cleanCode.substring(start, end);

        const fields = this.extractFields(body, name);
        const methods = this.extractMethods(body, name);

        classes.push({
          name,
          kind,
          modifier,
          superclass,
          interfaces,
          fields,
          methods,
          hasUnclosedBrace
        });
      }

      return classes;
    },

    extractFields(body, className) {
      const fields = [];
      if (!body) return fields;

      // Regex for attributes: (public|protected|private)? (static|final)? type name;
      // Also resilient to missing semicolon while typing
      const fieldRegex = /(?:(public|protected|private)\s+)?(?:(static|final)\s+)?([A-Za-z0-9_<>[\]]+)\s+([A-Za-z0-9_]+)\s*(?:=[^;]+)?(?:;|$)/gm;
      let m;

      while ((m = fieldRegex.exec(body)) !== null) {
        const visibility = m[1] || "package";
        const type = m[3];
        const name = m[4];

        // Filter out control flow keywords, methods, or class names
        if (
          !name ||
          type === "return" ||
          type === "class" ||
          type === "interface" ||
          type === "if" ||
          type === "while" ||
          type === "for" ||
          type === "else" ||
          type === "public" ||
          type === "private" ||
          name === className ||
          name === "main"
        ) {
          continue;
        }

        let sign = "-";
        if (visibility === "public") sign = "+";
        else if (visibility === "protected") sign = "#";
        else if (visibility === "package") sign = "~";

        fields.push({ sign, name, type, visibility });
      }

      return fields;
    },

    extractMethods(body, className) {
      const methods = [];
      if (!body) return methods;

      // Regex for methods: (public|protected|private)? (static|abstract|final)? type name(params)
      const methodRegex = /(?:(public|protected|private)\s+)?(?:(static|abstract|final)\s+)?([A-Za-z0-9_<>[\]]+)\s+([A-Za-z0-9_]+)\s*\(([^)]*)\)\s*(?:\{|;)/g;
      let m;

      while ((m = methodRegex.exec(body)) !== null) {
        const visibility = m[1] || "package";
        const returnType = m[3];
        const name = m[4];
        const rawParams = m[5] ? m[5].trim() : "";

        if (name === "if" || name === "while" || name === "for" || name === "switch" || name === "catch") continue;

        let sign = "+";
        if (visibility === "private") sign = "-";
        else if (visibility === "protected") sign = "#";
        else if (visibility === "package") sign = "~";

        // Simplify params
        const params = rawParams
          ? rawParams.split(",").map(p => p.trim().split(/\s+/).slice(-2).join(": ")).join(", ")
          : "";

        methods.push({ sign, name, returnType, params, visibility });
      }

      return methods;
    },

    // 2. Render SVG Diagram with Non-Destructive Visual Feedback
    renderSVG(classes, containerId) {
      const container = document.getElementById(containerId);
      if (!container) return;

      if (!classes || classes.length === 0) {
        container.innerHTML = `
          <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; color:#8b83ba; font-size:13px; text-align:center; padding:24px; box-sizing:border-box;">
            <div style="width:60px; height:60px; border-radius:50%; background:rgba(124, 58, 237, 0.15); border:1px solid rgba(192, 132, 252, 0.3); display:flex; align-items:center; justify-content:center; font-size:30px; margin-bottom:14px;">
              📊
            </div>
            <div style="font-weight:700; color:#f8fafc; font-size:14px; margin-bottom:6px;">Jonli UML Klass Diagrammasi</div>
            <div style="max-width:320px; font-size:12px; color:#94a3b8; line-height:1.5;">
              O'ng tomonda Java kodingizni yozishingiz bilan sinf qutilari, xususiyatlar, metodlar va munosabatlar shu yerda real vaqtda chiziladi.
            </div>
            <div style="margin-top:14px; font-family:'JetBrains Mono', monospace; font-size:11px; color:#c084fc; background:#181430; padding:6px 12px; border-radius:6px; border:1px solid #2d2654;">
              Misol: class Product { String name; double price; }
            </div>
          </div>`;
        return;
      }

      const cardWidth = 240;
      const cardGap = 40;
      const totalWidth = Math.max(540, classes.length * (cardWidth + cardGap) + 40);
      let maxHeight = 300;

      // Calculate heights
      classes.forEach(c => {
        const h = 55 + (c.fields.length * 20) + (c.methods.length * 20) + 30;
        if (h > maxHeight) maxHeight = h;
      });

      let svg = `
      <div style="display:flex; align-items:center; justify-content:space-between; padding:8px 12px; background:#100d21; border-bottom:1px solid #221c40; font-size:11.5px; border-radius:8px 8px 0 0;">
        <div style="display:flex; align-items:center; gap:8px;">
          <span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:#10b981; box-shadow:0 0 8px #10b981;"></span>
          <span style="color:#f8fafc; font-weight:700;">Jonli UML Modeli:</span>
          <span style="color:#c084fc; font-weight:600;">${classes.length} ta Klass/Interfeys aniqlandi</span>
        </div>
        <div style="color:#94a3b8; font-family:'JetBrains Mono', monospace; font-size:10.5px;">
          SVG Real-Time Engine
        </div>
      </div>
      <div style="overflow-x:auto; width:100%; height:calc(100% - 35px);">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${totalWidth} ${maxHeight + 80}" style="min-width:${totalWidth}px; width:100%; height:100%; min-height:260px; font-family:'JetBrains Mono', monospace;">
        <defs>
          <filter id="shadow" x="-5%" y="-5%" width="110%" height="115%">
            <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#000" flood-opacity="0.6"/>
          </filter>
          <marker id="arrowInherit" markerWidth="14" markerHeight="14" refX="12" refY="7" orient="auto">
            <polygon points="0 0, 12 7, 0 14" fill="#181430" stroke="#c084fc" stroke-width="2"/>
          </marker>
          <marker id="arrowImplement" markerWidth="14" markerHeight="14" refX="12" refY="7" orient="auto">
            <polygon points="0 0, 12 7, 0 14" fill="#181430" stroke="#34d399" stroke-width="2"/>
          </marker>
        </defs>`;

      // Draw class cards
      classes.forEach((c, idx) => {
        const x = 30 + idx * (cardWidth + cardGap);
        const y = 30;
        const headerH = c.kind === "interface" ? 44 : 38;
        const fieldsH = Math.max(26, c.fields.length * 20 + 8);
        const methodsH = Math.max(26, c.methods.length * 20 + 8);
        const totalCardH = headerH + fieldsH + methodsH;

        const borderColor = c.hasUnclosedBrace ? "#f59e0b" : "#7c3aed";

        // Background Box
        svg += `
        <g filter="url(#shadow)">
          <rect x="${x}" y="${y}" width="${cardWidth}" height="${totalCardH}" rx="10" fill="#141129" stroke="${borderColor}" stroke-width="1.8"/>
          
          <!-- Header -->
          <rect x="${x}" y="${y}" width="${cardWidth}" height="${headerH}" rx="10" fill="#1e183a"/>
          <rect x="${x}" y="${y + headerH - 8}" width="${cardWidth}" height="8" fill="#1e183a"/>
          <line x1="${x}" y1="${y + headerH}" x2="${x + cardWidth}" y2="${y + headerH}" stroke="rgba(192,132,252,0.3)" stroke-width="1"/>
          
          ${c.kind === "interface" ? `<text x="${x + cardWidth / 2}" y="${y + 16}" fill="#34d399" font-size="10" text-anchor="middle" font-weight="700">&lt;&lt;interface&gt;&gt;</text>` : ""}
          <text x="${x + cardWidth / 2}" y="${y + (c.kind === "interface" ? 33 : 24)}" fill="#ffffff" font-size="13" text-anchor="middle" font-weight="800">${c.name}</text>
          
          ${c.hasUnclosedBrace ? `
            <text x="${x + cardWidth - 10}" y="${y + 16}" fill="#f59e0b" font-size="11" text-anchor="end" font-weight="700" title="'}' qavs kutilmoqda">⚠️</text>
          ` : ""}

          <!-- Fields Compartment -->
          <line x1="${x}" y1="${y + headerH + fieldsH}" x2="${x + cardWidth}" y2="${y + headerH + fieldsH}" stroke="rgba(192,132,252,0.2)" stroke-width="1"/>`;

        if (c.fields.length === 0) {
          svg += `<text x="${x + 14}" y="${y + headerH + 18}" fill="#64748b" font-size="11" font-style="italic">(maydonlar yo'q)</text>`;
        } else {
          c.fields.forEach((f, fIdx) => {
            const color = f.sign === "-" ? "#f43f5e" : (f.sign === "+" ? "#34d399" : "#fbbf24");
            svg += `<text x="${x + 14}" y="${y + headerH + 18 + fIdx * 20}" fill="#e2e8f0" font-size="11.5">
              <tspan fill="${color}" font-weight="800">${f.sign}</tspan> ${f.name}: <tspan fill="#c084fc" font-weight="600">${f.type}</tspan>
            </text>`;
          });
        }

        // Methods Compartment
        if (c.methods.length === 0) {
          svg += `<text x="${x + 14}" y="${y + headerH + fieldsH + 18}" fill="#64748b" font-size="11" font-style="italic">(metodlar yo'q)</text>`;
        } else {
          c.methods.forEach((m, mIdx) => {
            const color = m.sign === "+" ? "#34d399" : (m.sign === "-" ? "#f43f5e" : "#fbbf24");
            svg += `<text x="${x + 14}" y="${y + headerH + fieldsH + 18 + mIdx * 20}" fill="#e2e8f0" font-size="11.5">
              <tspan fill="${color}" font-weight="800">${m.sign}</tspan> ${m.name}(): <tspan fill="#38bdf8" font-weight="600">${m.returnType}</tspan>
            </text>`;
          });
        }

        svg += `</g>`;
      });

      // Draw relationships (Inheritance & Implementation connectors)
      classes.forEach((c, idx) => {
        const x1 = 30 + idx * (cardWidth + cardGap) + cardWidth / 2;
        const y1 = 30;

        // Inheritance
        if (c.superclass) {
          const parentIdx = classes.findIndex(p => p.name === c.superclass);
          if (parentIdx !== -1) {
            const x2 = 30 + parentIdx * (cardWidth + cardGap) + cardWidth / 2;
            const y2 = 30;
            const curveY = Math.min(y1, y2) - 20;

            svg += `
              <path d="M ${x1} ${y1} Q ${(x1 + x2) / 2} ${curveY} ${x2} ${y2}" 
                    fill="none" stroke="#c084fc" stroke-width="2" marker-end="url(#arrowInherit)"/>
            `;
          }
        }

        // Implements
        if (c.interfaces && c.interfaces.length > 0) {
          c.interfaces.forEach(iface => {
            const ifaceIdx = classes.findIndex(p => p.name === iface);
            if (ifaceIdx !== -1) {
              const x2 = 30 + ifaceIdx * (cardWidth + cardGap) + cardWidth / 2;
              const y2 = 30;
              const curveY = Math.min(y1, y2) - 24;

              svg += `
                <path d="M ${x1} ${y1} Q ${(x1 + x2) / 2} ${curveY} ${x2} ${y2}" 
                      fill="none" stroke="#34d399" stroke-width="2" stroke-dasharray="5,5" marker-end="url(#arrowImplement)"/>
              `;
            }
          });
        }
      });

      svg += `</svg></div>`;
      container.innerHTML = svg;
    }
  };

  global.UMLRenderer = UMLRenderer;
})(typeof window !== "undefined" ? window : global);
