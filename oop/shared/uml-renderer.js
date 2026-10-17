// ============================================================================
// OOP ACADEMY — INTERACTIVE LIVE UML CLASS DIAGRAM RENDERER
// Automatically parses Java code and generates real SVG UML Class Diagrams
// ============================================================================

(function (global) {
  "use strict";

  const UMLRenderer = {
    // 1. Parse Java Code into UML Abstract Model
    parseJavaToUML(code) {
      const classes = [];
      // Clean comments
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
        const interfaces = match[5] ? match[5].split(",").map(s => s.trim()) : [];

        // Find class body
        let depth = 1;
        let start = match.index + match[0].length;
        let end = start;
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
          methods
        });
      }

      return classes;
    },

    extractFields(body, className) {
      const fields = [];
      // regex for attributes: (public|protected|private)? type name;
      const fieldRegex = /(?:(public|protected|private)\s+)?(?:(static|final)\s+)?([A-Za-z0-9_<>[\]]+)\s+([A-Za-z0-9_]+)\s*(?:=[^;]+)?;/g;
      let m;
      while ((m = fieldRegex.exec(body)) !== null) {
        const visibility = m[1] || "package";
        const type = m[3];
        const name = m[4];
        // filter out keywords or methods
        if (type === "return" || name === className) continue;

        let sign = "-";
        if (visibility === "public") sign = "+";
        else if (visibility === "protected") sign = "#";
        else if (visibility === "package") sign = "~";

        fields.push({ sign, name, type });
      }
      return fields;
    },

    extractMethods(body, className) {
      const methods = [];
      // regex for methods: (public|protected|private)? (static|abstract)? type name(params)
      const methodRegex = /(?:(public|protected|private)\s+)?(?:(static|abstract|final)\s+)?([A-Za-z0-9_<>[\]]+)\s+([A-Za-z0-9_]+)\s*\(([^)]*)\)\s*(?:\{|;)/g;
      let m;
      while ((m = methodRegex.exec(body)) !== null) {
        const visibility = m[1] || "package";
        const returnType = m[3];
        const name = m[4];
        const rawParams = m[5] ? m[5].trim() : "";

        if (name === "if" || name === "while" || name === "for" || name === "switch") continue;

        let sign = "+";
        if (visibility === "private") sign = "-";
        else if (visibility === "protected") sign = "#";
        else if (visibility === "package") sign = "~";

        // simplify params
        const params = rawParams ? rawParams.split(",").map(p => p.trim().split(/\s+/).slice(-2).join(": ")).join(", ") : "";

        methods.push({ sign, name, returnType, params });
      }
      return methods;
    },

    // 2. Render SVG Diagram
    renderSVG(classes, containerId) {
      const container = document.getElementById(containerId);
      if (!container) return;

      if (!classes || classes.length === 0) {
        container.innerHTML = `
          <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; color:#8b83ba; font-size:13px; text-align:center; padding:20px;">
            <span style="font-size:36px; margin-bottom:10px;">📊</span>
            <span>UML Klass Diagrammasi</span>
            <span style="font-size:11.5px; color:#64748b; margin-top:5px;">Kod yozilganida sinf qutilari va maydonlar avtomatik chiziladi</span>
          </div>`;
        return;
      }

      const cardWidth = 220;
      const cardGap = 40;
      const totalWidth = Math.max(500, classes.length * (cardWidth + cardGap) + 40);
      let maxHeight = 280;

      // Calculate heights
      classes.forEach(c => {
        const h = 50 + (c.fields.length * 18) + (c.methods.length * 18) + 20;
        if (h > maxHeight) maxHeight = h;
      });

      let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${totalWidth} ${maxHeight + 80}" style="width:100%; height:100%; min-height:220px; font-family:'JetBrains Mono', monospace;">
        <defs>
          <filter id="shadow" x="-5%" y="-5%" width="110%" height="115%">
            <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#000" flood-opacity="0.6"/>
          </filter>
          <marker id="arrowInherit" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
            <polygon points="0 0, 10 6, 0 12" fill="#0e0c1a" stroke="#c084fc" stroke-width="2"/>
          </marker>
          <marker id="arrowImplement" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
            <polygon points="0 0, 10 6, 0 12" fill="#0e0c1a" stroke="#34d399" stroke-width="2"/>
          </marker>
        </defs>`;

      // Draw class cards
      classes.forEach((c, idx) => {
        const x = 30 + idx * (cardWidth + cardGap);
        const y = 30;
        const headerH = c.kind === "interface" ? 42 : 36;
        const fieldsH = Math.max(22, c.fields.length * 18 + 8);
        const methodsH = Math.max(22, c.methods.length * 18 + 8);
        const totalCardH = headerH + fieldsH + methodsH;

        // Background Box
        svg += `
        <g filter="url(#shadow)">
          <rect x="${x}" y="${y}" width="${cardWidth}" height="${totalCardH}" rx="8" fill="#181430" stroke="#7c3aed" stroke-width="1.5"/>
          
          <!-- Header -->
          <rect x="${x}" y="${y}" width="${cardWidth}" height="${headerH}" rx="8" fill="linear-gradient(135deg, #221c45, #181430)"/>
          <line x1="${x}" y1="${y + headerH}" x2="${x + cardWidth}" y2="${y + headerH}" stroke="rgba(192,132,252,0.3)" stroke-width="1"/>
          ${c.kind === "interface" ? `<text x="${x + cardWidth / 2}" y="${y + 16}" fill="#34d399" font-size="10" text-anchor="middle" font-weight="700">&lt;&lt;interface&gt;&gt;</text>` : ""}
          <text x="${x + cardWidth / 2}" y="${y + (c.kind === "interface" ? 32 : 23)}" fill="#fff" font-size="13" text-anchor="middle" font-weight="800">${c.name}</text>
          
          <!-- Fields Compartment -->
          <line x1="${x}" y1="${y + headerH + fieldsH}" x2="${x + cardWidth}" y2="${y + headerH + fieldsH}" stroke="rgba(192,132,252,0.2)" stroke-width="1"/>`;

        if (c.fields.length === 0) {
          svg += `<text x="${x + 12}" y="${y + headerH + 16}" fill="#64748b" font-size="11" font-style="italic">(hech qanday maydon yo'q)</text>`;
        } else {
          c.fields.forEach((f, fIdx) => {
            const color = f.sign === "-" ? "#f43f5e" : (f.sign === "+" ? "#34d399" : "#fbbf24");
            svg += `<text x="${x + 12}" y="${y + headerH + 16 + fIdx * 18}" fill="#cbd5e1" font-size="11.5">
              <tspan fill="${color}" font-weight="700">${f.sign}</tspan> ${f.name}: <tspan fill="#c084fc">${f.type}</tspan>
            </text>`;
          });
        }

        // Methods Compartment
        if (c.methods.length === 0) {
          svg += `<text x="${x + 12}" y="${y + headerH + fieldsH + 16}" fill="#64748b" font-size="11" font-style="italic">(metodlar yo'q)</text>`;
        } else {
          c.methods.forEach((m, mIdx) => {
            const color = m.sign === "+" ? "#34d399" : (m.sign === "-" ? "#f43f5e" : "#fbbf24");
            svg += `<text x="${x + 12}" y="${y + headerH + fieldsH + 16 + mIdx * 18}" fill="#cbd5e1" font-size="11.5">
              <tspan fill="${color}" font-weight="700">${m.sign}</tspan> ${m.name}(): <tspan fill="#38bdf8">${m.returnType}</tspan>
            </text>`;
          });
        }

        svg += `</g>`;
      });

      svg += `</svg>`;
      container.innerHTML = svg;
    }
  };

  global.UMLRenderer = UMLRenderer;
})(typeof window !== "undefined" ? window : global);
