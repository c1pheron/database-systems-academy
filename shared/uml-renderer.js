// ============================================================================
// OOP ACADEMY — INTERACTIVE LIVE UML CLASS DIAGRAM RENDERER (RESILIENT & SMART)
// Features:
// 1. Live AST / Regex Parser: Tolerates unclosed braces and WIP typing without failing.
// 2. Interactive Canvas: Zoom (+/-), 1:1 Reset, Fit View (⛶)
// 3. Mouse Wheel Zoom (centered at pointer), Mouse Drag-to-Pan (grab / grabbing)
// 4. Mobile Touch Gestures: 1-finger drag-to-pan, 2-finger pinch-to-zoom
// 5. Preserves zoom/pan coordinates across keystrokes (no visual flickering/jumping)
// ============================================================================

(function (global) {
  "use strict";

  const UMLRenderer = {
    // Canvas interaction state per container
    state: {
      zoom: 1,
      panX: 20,
      panY: 20,
      isPanning: false,
      startPanX: 0,
      startPanY: 0,
      touchPinchDist: 0,
      touchPinchMid: null,
      lastTouchPos: null,
      initializedContainerId: null,
      totalWidth: 600,
      totalHeight: 400
    },

    // 1. Resilient Java Code to UML Parser
    parseJavaToUML(code) {
      const classes = [];
      if (!code || typeof code !== "string") return classes;

      // Clean comments safely preserving structure
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
        let end = cleanCode.length;
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

      const fieldRegex = /(?:(public|protected|private)\s+)?(?:(static|final)\s+)?([A-Za-z0-9_<>[\]]+)\s+([A-Za-z0-9_]+)\s*(?:=[^;]+)?(?:;|$)/gm;
      let m;

      while ((m = fieldRegex.exec(body)) !== null) {
        const visibility = m[1] || "package";
        const type = m[3];
        const name = m[4];

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

        const params = rawParams
          ? rawParams.split(",").map(p => p.trim().split(/\s+/).slice(-2).join(": ")).join(", ")
          : "";

        methods.push({ sign, name, returnType, params, visibility });
      }

      return methods;
    },

    // Grand FinTech & E-Commerce System Architecture Specification
    getGrandArchitecture(moduleName = "practical") {
      return `
// ==========================================
// 1. Shartnomalar va Abstraksiyalar (4-Ustun)
// ==========================================
abstract class Account {
    protected String accountNumber;
    protected double balance;
    public abstract void deposit(double amount);
    public abstract boolean withdraw(double amount);
    public double getBalance() { return balance; }
}

interface Payable {
    void pay(double amount);
}

interface Refundable {
    void refund(double amount);
}

interface Notifiable {
    void sendNotification(String message);
}

// ==========================================
// 2. FinTech va Kartalar (1- va 2-Ustun)
// ==========================================
class BankCard extends Account implements Payable, Refundable {
    private int pin;
    private double dailyLimit;
    private boolean isFrozen;
    public BankCard(double initialBalance) { }
    public void deposit(double amount) { }
    public boolean withdraw(double amount) { return true; }
    public void pay(double amount) { }
    public void refund(double amount) { }
}

class GoldCard extends BankCard {
    private double cashbackRate;
    public GoldCard(double balance) { super(balance); }
    public double getCashback() { return 0.0; }
}

class PlatinumCard extends GoldCard {
    private boolean vipLounge;
    public PlatinumCard(double balance) { super(balance); }
    public boolean hasVipAccess() { return true; }
}

class Customer implements Notifiable {
    private String name;
    private String phone;
    private BankCard card;
    public Customer(String name, String phone) { }
    public String getName() { return name; }
    public void sendNotification(String msg) { }
}

// ==========================================
// 3. E-Commerce va Buyurtma Arxitekturasi (3- va 4-Ustun)
// ==========================================
class Product {
    private String title;
    private double price;
    private int stock;
    public Product(String title, double price, int stock) { }
    public double getPrice() { return price; }
}

class Address {
    private String city;
    private String street;
    public Address(String city, String street) { }
    public String getFullAddress() { return ""; }
}

class OrderReceipt {
    private Customer customer;
    private Address address;
    private double totalAmount;
    public OrderReceipt(Customer c, Address a, double t) { }
    public void printReceipt() { }
}

class Order {
    private Customer customer;
    private Payable paymentMethod;
    private double total;
    public void checkout(Customer c, Payable p, double total) { }
}
`;
    },

    computeConnector(boxA, boxB) {
      const cxA = boxA.x + boxA.w / 2;
      const cyA = boxA.y + boxA.h / 2;
      const cxB = boxB.x + boxB.w / 2;
      const cyB = boxB.y + boxB.h / 2;

      if (boxA.row === boxB.row) {
        if (boxB.col > boxA.col) {
          const startX = boxA.x + boxA.w;
          const startY = cyA;
          const endX = boxB.x;
          const endY = cyB;
          const midX = (startX + endX) / 2;
          return `M ${startX} ${startY} C ${midX} ${startY}, ${midX} ${endY}, ${endX} ${endY}`;
        } else {
          const startX = boxA.x;
          const startY = cyA;
          const endX = boxB.x + boxB.w;
          const endY = cyB;
          const midX = (startX + endX) / 2;
          return `M ${startX} ${startY} C ${midX} ${startY}, ${midX} ${endY}, ${endX} ${endY}`;
        }
      } else if (boxB.row < boxA.row) {
        const startX = cxA;
        const startY = boxA.y;
        const endX = cxB;
        const endY = boxB.y + boxB.h;
        const midY = (startY + endY) / 2;
        return `M ${startX} ${startY} C ${startX} ${midY}, ${endX} ${midY}, ${endX} ${endY}`;
      } else {
        const startX = cxA;
        const startY = boxA.y + boxA.h;
        const endX = cxB;
        const endY = boxB.y;
        const midY = (startY + endY) / 2;
        return `M ${startX} ${startY} C ${startX} ${midY}, ${endX} ${midY}, ${endX} ${endY}`;
      }
    },

    // 2. Render SVG Diagram with Smooth Zoom & Pan Engine
    renderSVG(classes, containerId, options = {}) {
      const container = document.getElementById(containerId);
      if (!container) return;

      // Handle empty classes state
      if (!classes || classes.length === 0) {
        this.state.initializedContainerId = null;
        container.innerHTML = `
          <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; color:#8b83ba; font-size:13px; text-align:center; padding:24px; box-sizing:border-box;">
            <div style="width:60px; height:60px; border-radius:50%; background:rgba(124, 58, 237, 0.15); border:1px solid rgba(192, 132, 252, 0.3); display:flex; align-items:center; justify-content:center; font-size:30px; margin-bottom:14px;">
              📊
            </div>
            <div style="font-weight:700; color:#f8fafc; font-size:14px; margin-bottom:6px;">Jonli UML Klass Diagrammasi</div>
            <div style="max-width:320px; font-size:12px; color:#94a3b8; line-height:1.5;">
              Java kodingizni yozishingiz bilan sinf qutilari, atributlar, metodlar va bog'lanishlar shu yerda real vaqtda chiziladi.
            </div>
            <div style="margin-top:14px; font-family:'JetBrains Mono', monospace; font-size:11px; color:#c084fc; background:#181430; padding:6px 12px; border-radius:6px; border:1px solid #2d2654;">
              Misol: class Product { String name; double price; }
            </div>
          </div>`;
        return;
      }

      // Dimensions & 2D Grid Layout calculation
      const numClasses = classes.length;
      const isMultiRow = numClasses > 3;
      const cols = isMultiRow ? (numClasses <= 8 ? 3 : 4) : Math.max(1, numClasses);
      const rows = Math.ceil(numClasses / cols);

      const cardWidth = 240;
      const cardGapX = 50;
      const cardGapY = 65;

      const cardLayouts = classes.map((c, idx) => {
        const col = isMultiRow ? (idx % cols) : idx;
        const row = isMultiRow ? Math.floor(idx / cols) : 0;
        const headerH = c.kind === "interface" ? 44 : 38;
        const fieldsH = Math.max(26, c.fields.length * 20 + 8);
        const methodsH = Math.max(26, c.methods.length * 20 + 8);
        const totalCardH = headerH + fieldsH + methodsH;
        return { col, row, headerH, fieldsH, methodsH, totalCardH };
      });

      // Calculate row heights and cumulative Y coordinates
      const rowHeights = [];
      for (let r = 0; r < rows; r++) {
        const inRow = cardLayouts.filter(l => l.row === r);
        const maxH = inRow.length > 0 ? Math.max(...inRow.map(c => c.totalCardH)) : 160;
        rowHeights.push(maxH);
      }

      const rowY = [];
      let curY = 40;
      for (let r = 0; r < rows; r++) {
        rowY.push(curY);
        curY += rowHeights[r] + cardGapY;
      }

      const totalWidth = Math.max(560, cols * (cardWidth + cardGapX) + 60);
      const totalHeight = Math.max(340, curY + 40);

      this.state.totalWidth = totalWidth;
      this.state.totalHeight = totalHeight;

      // If container structure isn't initialized yet, build it once
      const isAlreadyInit = this.state.initializedContainerId === containerId && container.querySelector(".uml-viewport");

      const badgeLabel = (options && options.badgeText) 
        ? options.badgeText 
        : `${classes.length} ta Klass/Interfeys`;

      if (!isAlreadyInit) {
        container.innerHTML = `
          <div class="uml-canvas-wrapper" style="position:relative; width:100%; height:100%; min-height:0; background:#0c0a18; overflow:hidden; border-radius:8px; border:1px solid #221c40; display:flex; flex-direction:column; user-select:none; -webkit-user-select:none;">
            <!-- Top Status Bar -->
            <div class="uml-status-bar" style="display:flex; align-items:center; justify-content:space-between; padding:8px 14px; background:#100d21; border-bottom:1px solid #221c40; font-size:11.5px; z-index:5; flex-shrink:0;">
              <div style="display:flex; align-items:center; gap:8px;">
                <span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:#10b981; box-shadow:0 0 8px #10b981;"></span>
                <span style="color:#f8fafc; font-weight:700;">Jonli UML Modeli:</span>
                <span id="umlClassBadge" style="color:#c084fc; font-weight:600;">${badgeLabel}</span>
              </div>
              <div class="uml-hint-text" style="color:#94a3b8; font-family:'JetBrains Mono', monospace; font-size:10px; display:flex; align-items:center; gap:6px;">
                <span>🖱️ G'ildirak / Pinch: Zoom</span> • <span>Sudrab surish: Pan</span>
              </div>
            </div>

            <!-- Floating Zoom Controls overlay -->
            <div class="uml-zoom-controls" style="position:absolute; top:46px; right:12px; z-index:10; display:flex; align-items:center; gap:3px; background:rgba(18, 15, 36, 0.92); border:1px solid rgba(168, 85, 247, 0.4); border-radius:8px; padding:3px 6px; box-shadow:0 4px 16px rgba(0,0,0,0.6); backdrop-filter:blur(8px);">
              <button type="button" class="btn-uml-zoom" id="btnUmlZoomOut" title="Kichraytirish (-)" style="background:transparent; border:none; color:#c084fc; font-weight:700; font-size:15px; width:26px; height:26px; border-radius:4px; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:background 0.15s;">−</button>
              <span id="umlZoomLevelText" style="color:#f8fafc; font-size:11px; font-family:'JetBrains Mono', monospace; min-width:38px; text-align:center; font-weight:600;">100%</span>
              <button type="button" class="btn-uml-zoom" id="btnUmlZoomIn" title="Kattalashtirish (+)" style="background:transparent; border:none; color:#c084fc; font-weight:700; font-size:15px; width:26px; height:26px; border-radius:4px; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:background 0.15s;">+</button>
              <button type="button" class="btn-uml-zoom" id="btnUmlZoomReset" title="Asliga qaytarish (1:1)" style="background:#221c45; border:1px solid rgba(192, 132, 252, 0.3); color:#e2e8f0; font-size:10px; font-family:'JetBrains Mono', monospace; padding:2px 6px; border-radius:4px; cursor:pointer; margin-left:4px;">1:1</button>
              <button type="button" class="btn-uml-zoom" id="btnUmlZoomFit" title="Ekranga sig'dirish (Fit)" style="background:#221c45; border:1px solid rgba(192, 132, 252, 0.3); color:#38bdf8; font-size:11px; padding:2px 6px; border-radius:4px; cursor:pointer; margin-left:2px;">⛶</button>
            </div>

            <!-- Viewport & Transform Canvas Layer -->
            <div id="umlViewport" class="uml-viewport" style="flex:1; width:100%; height:100%; position:relative; overflow:hidden; cursor:grab; touch-action:none;">
              <div id="umlTransformLayer" style="position:absolute; top:0; left:0; width:${totalWidth}px; height:${totalHeight}px; transform-origin:0 0; will-change:transform;">
                <svg id="umlSvgCanvas" xmlns="http://www.w3.org/2000/svg" width="${totalWidth}" height="${totalHeight}" viewBox="0 0 ${totalWidth} ${totalHeight}" style="overflow:visible; font-family:'JetBrains Mono', monospace;">
                </svg>
              </div>
            </div>
          </div>`;

        this.state.initializedContainerId = containerId;
        this.attachInteractiveEvents(containerId);
      } else {
        // Update badge and svg canvas size
        const badge = container.querySelector("#umlClassBadge");
        if (badge) badge.textContent = badgeLabel;

        const transformLayer = container.querySelector("#umlTransformLayer");
        if (transformLayer) {
          transformLayer.style.width = `${totalWidth}px`;
          transformLayer.style.height = `${totalHeight}px`;
        }

        const svgCanvas = container.querySelector("#umlSvgCanvas");
        if (svgCanvas) {
          svgCanvas.setAttribute("width", totalWidth);
          svgCanvas.setAttribute("height", totalHeight);
          svgCanvas.setAttribute("viewBox", `0 0 ${totalWidth} ${totalHeight}`);
        }
      }

      // Generate Inner SVG Elements
      const svgCanvas = container.querySelector("#umlSvgCanvas");
      if (!svgCanvas) return;

      let inner = `
        <defs>
          <filter id="umlShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#000" flood-opacity="0.6"/>
          </filter>
          <filter id="glowGreen" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="#10b981" flood-opacity="0.6"/>
          </filter>
          <marker id="arrowInherit" markerWidth="14" markerHeight="14" refX="12" refY="7" orient="auto">
            <polygon points="0 0, 12 7, 0 14" fill="#181430" stroke="#c084fc" stroke-width="2"/>
          </marker>
          <marker id="arrowImplement" markerWidth="14" markerHeight="14" refX="12" refY="7" orient="auto">
            <polygon points="0 0, 12 7, 0 14" fill="#181430" stroke="#34d399" stroke-width="2"/>
          </marker>
          <marker id="arrowAssociate" markerWidth="14" markerHeight="14" refX="10" refY="7" orient="auto">
            <path d="M 0 7 L 6 3 L 12 7 L 6 11 Z" fill="#38bdf8" stroke="#38bdf8" stroke-width="1.2"/>
          </marker>
        </defs>`;

      // Draw class cards
      classes.forEach((c, idx) => {
        const l = cardLayouts[idx];
        const x = 35 + l.col * (cardWidth + cardGapX);
        const y = rowY[l.row];
        const headerH = l.headerH;
        const fieldsH = l.fieldsH;
        const methodsH = l.methodsH;
        const totalCardH = l.totalCardH;

        const isHighlighted = options && options.highlightClasses && options.highlightClasses.includes(c.name);
        const borderColor = isHighlighted ? "#10b981" : (c.hasUnclosedBrace ? "#f59e0b" : "#7c3aed");
        const borderWidth = isHighlighted ? "2.6" : "1.8";

        inner += `
        <g filter="url(#umlShadow)">
          ${isHighlighted ? `
            <rect x="${x - 4}" y="${y - 4}" width="${cardWidth + 8}" height="${totalCardH + 8}" rx="14" fill="none" stroke="#10b981" stroke-width="1.5" stroke-opacity="0.5" filter="url(#glowGreen)"/>
            <g transform="translate(${x + cardWidth - 118}, ${y - 12})">
              <rect width="114" height="22" rx="11" fill="#10b981" filter="url(#umlShadow)"/>
              <text x="57" y="15" fill="#022c22" font-size="10" text-anchor="middle" font-weight="900" font-family="'Inter', sans-serif">📍 JORIY BOSQICH</text>
            </g>
          ` : ""}

          <rect x="${x}" y="${y}" width="${cardWidth}" height="${totalCardH}" rx="10" fill="#141129" stroke="${borderColor}" stroke-width="${borderWidth}"/>
          
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
          inner += `<text x="${x + 14}" y="${y + headerH + 18}" fill="#64748b" font-size="11" font-style="italic">(maydonlar yo'q)</text>`;
        } else {
          c.fields.forEach((f, fIdx) => {
            const color = f.sign === "-" ? "#f43f5e" : (f.sign === "+" ? "#34d399" : "#fbbf24");
            inner += `<text x="${x + 14}" y="${y + headerH + 18 + fIdx * 20}" fill="#e2e8f0" font-size="11.5">
              <tspan fill="${color}" font-weight="800">${f.sign}</tspan> ${f.name}: <tspan fill="#c084fc" font-weight="600">${f.type}</tspan>
            </text>`;
          });
        }

        // Methods Compartment
        if (c.methods.length === 0) {
          inner += `<text x="${x + 14}" y="${y + headerH + fieldsH + 18}" fill="#64748b" font-size="11" font-style="italic">(metodlar yo'q)</text>`;
        } else {
          c.methods.forEach((m, mIdx) => {
            const color = m.sign === "+" ? "#34d399" : (m.sign === "-" ? "#f43f5e" : "#fbbf24");
            inner += `<text x="${x + 14}" y="${y + headerH + fieldsH + 18 + mIdx * 20}" fill="#e2e8f0" font-size="11.5">
              <tspan fill="${color}" font-weight="800">${m.sign}</tspan> ${m.name}(): <tspan fill="#38bdf8" font-weight="600">${m.returnType}</tspan>
            </text>`;
          });
        }

        inner += `</g>`;
      });

      // Draw relationships between class cards
      classes.forEach((c, idx) => {
        const boxA = {
          x: 35 + cardLayouts[idx].col * (cardWidth + cardGapX),
          y: rowY[cardLayouts[idx].row],
          w: cardWidth,
          h: cardLayouts[idx].totalCardH,
          col: cardLayouts[idx].col,
          row: cardLayouts[idx].row
        };

        // Inheritance (extends)
        if (c.superclass) {
          const parentIdx = classes.findIndex(p => p.name === c.superclass);
          if (parentIdx !== -1) {
            const boxB = {
              x: 35 + cardLayouts[parentIdx].col * (cardWidth + cardGapX),
              y: rowY[cardLayouts[parentIdx].row],
              w: cardWidth,
              h: cardLayouts[parentIdx].totalCardH,
              col: cardLayouts[parentIdx].col,
              row: cardLayouts[parentIdx].row
            };
            const pathD = this.computeConnector(boxA, boxB);
            inner += `
              <path d="${pathD}" fill="none" stroke="#c084fc" stroke-width="2.2" marker-end="url(#arrowInherit)"/>
            `;
          }
        }

        // Implementation (implements)
        if (c.interfaces && c.interfaces.length > 0) {
          c.interfaces.forEach(iface => {
            const ifaceIdx = classes.findIndex(p => p.name === iface);
            if (ifaceIdx !== -1) {
              const boxB = {
                x: 35 + cardLayouts[ifaceIdx].col * (cardWidth + cardGapX),
                y: rowY[cardLayouts[ifaceIdx].row],
                w: cardWidth,
                h: cardLayouts[ifaceIdx].totalCardH,
                col: cardLayouts[ifaceIdx].col,
                row: cardLayouts[ifaceIdx].row
              };
              const pathD = this.computeConnector(boxA, boxB);
              inner += `
                <path d="${pathD}" fill="none" stroke="#34d399" stroke-width="2.2" stroke-dasharray="6,4" marker-end="url(#arrowImplement)"/>
              `;
            }
          });
        }

        // Associations (field type matching another class in diagram)
        c.fields.forEach(f => {
          const targetIdx = classes.findIndex(p => p.name === f.type);
          if (targetIdx !== -1 && targetIdx !== idx) {
            const boxB = {
              x: 35 + cardLayouts[targetIdx].col * (cardWidth + cardGapX),
              y: rowY[cardLayouts[targetIdx].row],
              w: cardWidth,
              h: cardLayouts[targetIdx].totalCardH,
              col: cardLayouts[targetIdx].col,
              row: cardLayouts[targetIdx].row
            };
            const pathD = this.computeConnector(boxA, boxB);
            inner += `
              <path d="${pathD}" fill="none" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="4,3" marker-end="url(#arrowAssociate)"/>
            `;
          }
        });
      });

      svgCanvas.innerHTML = inner;

      if (options && options.isGrand && !this.state.isUserInteracted) {
        setTimeout(() => this.fitToView(containerId), 30);
      } else {
        this.updateTransform(containerId);
      }
    },

    // 3. Attach Mouse & Mobile Touch Interaction Events
    attachInteractiveEvents(containerId) {
      const container = document.getElementById(containerId);
      if (!container) return;

      const viewport = container.querySelector("#umlViewport");
      const btnIn = container.querySelector("#btnUmlZoomIn");
      const btnOut = container.querySelector("#btnUmlZoomOut");
      const btnReset = container.querySelector("#btnUmlZoomReset");
      const btnFit = container.querySelector("#btnUmlZoomFit");

      if (!viewport) return;

      const self = this;

      // Mouse Wheel Zoom (centered at pointer)
      viewport.addEventListener("wheel", (e) => {
        e.preventDefault();
        const rect = viewport.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const factor = e.deltaY < 0 ? 1.15 : 0.87;
        const oldZoom = self.state.zoom;
        const newZoom = Math.min(2.5, Math.max(0.35, oldZoom * factor));

        self.state.panX = mouseX - (mouseX - self.state.panX) * (newZoom / oldZoom);
        self.state.panY = mouseY - (mouseY - self.state.panY) * (newZoom / oldZoom);
        self.state.zoom = newZoom;

        self.updateTransform(containerId);
      }, { passive: false });

      // Mouse Drag-to-Pan
      viewport.addEventListener("mousedown", (e) => {
        if (e.button !== 0) return; // only left click
        self.state.isPanning = true;
        self.state.startPanX = e.clientX - self.state.panX;
        self.state.startPanY = e.clientY - self.state.panY;
        viewport.style.cursor = "grabbing";
      });

      window.addEventListener("mousemove", (e) => {
        if (!self.state.isPanning) return;
        self.state.panX = e.clientX - self.state.startPanX;
        self.state.panY = e.clientY - self.state.startPanY;
        self.updateTransform(containerId);
      });

      window.addEventListener("mouseup", () => {
        if (self.state.isPanning) {
          self.state.isPanning = false;
          if (viewport) viewport.style.cursor = "grab";
        }
      });

      // Mobile Touch Support: 1-finger drag, 2-finger pinch-to-zoom
      viewport.addEventListener("touchstart", (e) => {
        if (e.touches.length === 2) {
          if (e.cancelable) e.preventDefault();
          self.state.isPanning = false;
          const t1 = e.touches[0];
          const t2 = e.touches[1];
          self.state.touchPinchDist = Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
          self.state.touchPinchMid = {
            x: (t1.clientX + t2.clientX) / 2,
            y: (t1.clientY + t2.clientY) / 2
          };
        } else if (e.touches.length === 1) {
          self.state.isPanning = true;
          const touch = e.touches[0];
          self.state.startPanX = touch.clientX - self.state.panX;
          self.state.startPanY = touch.clientY - self.state.panY;
        }
      }, { passive: false });

      viewport.addEventListener("touchmove", (e) => {
        if (e.touches.length === 2 && self.state.touchPinchDist > 0) {
          if (e.cancelable) e.preventDefault();
          const t1 = e.touches[0];
          const t2 = e.touches[1];
          const curDist = Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
          const curMid = {
            x: (t1.clientX + t2.clientX) / 2,
            y: (t1.clientY + t2.clientY) / 2
          };

          const zoomFactor = curDist / self.state.touchPinchDist;
          const oldZoom = self.state.zoom;
          const newZoom = Math.min(2.5, Math.max(0.35, oldZoom * zoomFactor));

          const rect = viewport.getBoundingClientRect();
          const originX = curMid.x - rect.left;
          const originY = curMid.y - rect.top;

          self.state.panX = originX - (originX - self.state.panX) * (newZoom / oldZoom) + (curMid.x - self.state.touchPinchMid.x);
          self.state.panY = originY - (originY - self.state.panY) * (newZoom / oldZoom) + (curMid.y - self.state.touchPinchMid.y);
          self.state.zoom = newZoom;

          self.state.touchPinchDist = curDist;
          self.state.touchPinchMid = curMid;
          self.updateTransform(containerId);
        } else if (e.touches.length === 1 && self.state.isPanning) {
          if (e.cancelable) e.preventDefault();
          const touch = e.touches[0];
          self.state.panX = touch.clientX - self.state.startPanX;
          self.state.panY = touch.clientY - self.state.startPanY;
          self.updateTransform(containerId);
        }
      }, { passive: false });

      viewport.addEventListener("touchend", (e) => {
        if (e.touches.length < 2) {
          self.state.touchPinchDist = 0;
          self.state.touchPinchMid = null;
        }
        if (e.touches.length === 0) {
          self.state.isPanning = false;
        }
      });

      viewport.addEventListener("touchcancel", () => {
        self.state.isPanning = false;
        self.state.touchPinchDist = 0;
        self.state.touchPinchMid = null;
      });

      // Zoom Control Button Click Handlers
      if (btnIn) {
        btnIn.addEventListener("click", () => {
          const rect = viewport.getBoundingClientRect();
          const cx = rect.width / 2;
          const cy = rect.height / 2;
          const oldZoom = self.state.zoom;
          const newZoom = Math.min(2.5, oldZoom * 1.2);
          self.state.panX = cx - (cx - self.state.panX) * (newZoom / oldZoom);
          self.state.panY = cy - (cy - self.state.panY) * (newZoom / oldZoom);
          self.state.zoom = newZoom;
          self.updateTransform(containerId);
        });
      }

      if (btnOut) {
        btnOut.addEventListener("click", () => {
          const rect = viewport.getBoundingClientRect();
          const cx = rect.width / 2;
          const cy = rect.height / 2;
          const oldZoom = self.state.zoom;
          const newZoom = Math.max(0.35, oldZoom * 0.8);
          self.state.panX = cx - (cx - self.state.panX) * (newZoom / oldZoom);
          self.state.panY = cy - (cy - self.state.panY) * (newZoom / oldZoom);
          self.state.zoom = newZoom;
          self.updateTransform(containerId);
        });
      }

      if (btnReset) {
        btnReset.addEventListener("click", () => {
          self.state.zoom = 1;
          self.state.panX = 20;
          self.state.panY = 20;
          self.updateTransform(containerId);
        });
      }

      if (btnFit) {
        btnFit.addEventListener("click", () => {
          self.fitToView(containerId);
        });
      }
    },

    fitToView(containerId) {
      const container = document.getElementById(containerId);
      if (!container) return;
      const viewport = container.querySelector("#umlViewport");
      if (!viewport) return;

      const vw = viewport.clientWidth || container.clientWidth || 400;
      const vh = viewport.clientHeight || container.clientHeight || 200;
      const tw = this.state.totalWidth || 600;
      const th = this.state.totalHeight || 300;

      const zoomX = (vw - 24) / tw;
      const zoomY = (vh - 24) / th;
      const fitZoom = Math.min(zoomX, zoomY, 1.15);
      const safeZoom = Math.min(1.15, Math.max(0.25, fitZoom));

      this.state.zoom = safeZoom;
      this.state.panX = Math.max(6, (vw - tw * safeZoom) / 2);
      this.state.panY = Math.max(6, (vh - th * safeZoom) / 2);
      this.updateTransform(containerId);
    },

    updateTransform(containerId) {
      const container = document.getElementById(containerId);
      if (!container) return;

      const layer = container.querySelector("#umlTransformLayer");
      const zoomText = container.querySelector("#umlZoomLevelText");

      if (layer) {
        layer.style.transform = `translate(${this.state.panX}px, ${this.state.panY}px) scale(${this.state.zoom})`;
      }
      if (zoomText) {
        zoomText.textContent = `${Math.round(this.state.zoom * 100)}%`;
      }
    }
  };

  global.UMLRenderer = UMLRenderer;
})(typeof window !== "undefined" ? window : global);
