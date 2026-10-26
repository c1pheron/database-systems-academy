/**
 * ============================================================================
 * OOP ACADEMY — LIVE VISUAL SIMULATOR ENGINE (V1.0)
 * ============================================================================
 * Powers real-time visual UI rendering of student Java code in Uzum, Korzinka,
 * Payme, Yandex Go, and SmartHome devices.
 * ============================================================================
 */

(function (global) {
  "use strict";

  const SimulatorEngine = {
    container: null,
    currentChallenge: null,
    currentState: {},

    init(containerEl) {
      this.container = containerEl;
    },

    setChallenge(challenge) {
      this.currentChallenge = challenge;
      this.currentState = this.getDefaultState(challenge);
      this.render();
    },

    getDefaultState(challenge) {
      if (!challenge) return {};
      switch (challenge.simKind) {
        case "bulb":
          return { isOn: false };
        case "product":
          return { name: "Redmi Note 13", price: 2400000, stock: 10, bought: 0 };
        case "battery":
          return { level: 20, charging: false };
        case "counter":
          return { count: 0 };
        case "coffee":
          return { waterMl: 200, beansGrams: 50, brewed: 0 };
        case "card":
          return {
            hasObject: false,
            cards: [],
            activeCardIdx: 0,
            holder: "",
            cardNumber: "",
            expiryDate: "",
            cvv: "",
            balance: 0,
            deposited: 0,
            withdrawn: 0,
            lastTxMsg: "",
            isLocked: false
          };
        case "atm":
          return { balance: 100000, withdrawn: 0, lastSuccess: false };
        case "pin":
          return { pin: 7777, enteredPin: null, isUnlocked: false };
        case "thermostat":
          return { temperature: 22.0 };
        case "user":
          return { name: "Malika", age: 19, verified: true };
        case "taxi":
          return { km: 10, isComfort: false, fare: 30000 };
        case "drone":
          return { mode: "ground", address: "Tashkent City" };
        case "vip":
          return { isVip: true, total: 100000, cashback: 5000 };
        case "hero":
          return { maxHealth: 100, currentHealth: 100, isMage: true, lastDamage: 0 };
        case "push":
          return { message: "Kartangizga 50,000 so'm tushdi!", showPush: false };
        case "orderitem":
          return { name: "Mol go'shti lavash", price: 32000, quantity: 2, subtotal: 64000 };
        case "cart":
          return { items: [{ name: "Coca-Cola 1.5L", price: 14000 }, { name: "Choco-Pie", price: 22000 }] };
        case "total":
          return { items: [{ name: "Pizza bo'lagi", qty: 2, sub: 30000 }, { name: "Olma sharbati", qty: 1, sub: 10000 }], total: 40000 };
        case "promo":
          return { baseTotal: 200000, promoCode: "WIUT2026", finalTotal: 180000, applied: true };
        case "fullorder":
          return { customer: "Sardor", phone: "+998901234567", city: "Toshkent", street: "Amir Temur shoh ko'chasi", total: 145000 };
        default:
          return {};
      }
    },

    // Trigger visual action on code run or test
    triggerAction(code, stdout, isSuccess) {
      if (!this.currentChallenge) return;
      const kind = this.currentChallenge.simKind;

      switch (kind) {
        case "bulb":
          this.currentState.isOn = code.includes("turnOn()") || (stdout && stdout.includes("true"));
          break;
        case "product":
          this.currentState.stock = (stdout && stdout.match(/\b([0-9]+)\b/)) ? parseInt(stdout.match(/\b([0-9]+)\b/)[1], 10) : 7;
          this.currentState.bought = 3;
          break;
        case "battery":
          this.currentState.level = (stdout && stdout.match(/([0-9]+)%/)) ? parseInt(stdout.match(/([0-9]+)%/)[1], 10) : 70;
          this.currentState.charging = true;
          break;
        case "counter":
          this.currentState.count = (stdout && stdout.match(/\b([0-9]+)\b/)) ? parseInt(stdout.match(/\b([0-9]+)\b/)[1], 10) : 3;
          break;
        case "coffee":
          this.currentState.waterMl = 150;
          this.currentState.brewed = 1;
          break;
        case "card":
          const parsed = this.parseCardsFromCode(code, stdout);
          this.currentState.cards = parsed.cards;
          this.currentState.hasObject = parsed.cards.length > 0;
          if (this.currentState.activeCardIdx === undefined || this.currentState.activeCardIdx >= parsed.cards.length) {
            this.currentState.activeCardIdx = 0;
          }
          const activeCard = parsed.cards[this.currentState.activeCardIdx] || parsed.cards[0] || {};
          this.currentState.balance = activeCard.balance !== undefined ? activeCard.balance : 0;
          this.currentState.holder = activeCard.holder || "";
          this.currentState.cardNumber = activeCard.cardNumber || "";
          this.currentState.expiryDate = activeCard.expiryDate || "";
          this.currentState.cvv = activeCard.cvv || "";
          this.currentState.lastTxMsg = activeCard.lastTxMsg || "";
          this.currentState.isLocked = Boolean(activeCard.isLocked);
          this.currentState.declaredMethods = this.detectMethodsFromCode(code);
          break;
        case "atm":
          this.currentState.balance = 60000;
          this.currentState.withdrawn = 40000;
          this.currentState.lastSuccess = true;
          break;
        case "pin":
          this.currentState.isUnlocked = true;
          break;
        case "thermostat":
          this.currentState.temperature = 26.5;
          break;
        case "user":
          this.currentState.verified = true;
          break;
        case "taxi":
          this.currentState.isComfort = true;
          this.currentState.fare = 45000;
          break;
        case "drone":
          this.currentState.mode = "drone";
          break;
        case "vip":
          this.currentState.cashback = 5000;
          break;
        case "hero":
          this.currentState.currentHealth = 80;
          this.currentState.lastDamage = 40;
          break;
        case "push":
          this.currentState.showPush = true;
          break;
        case "orderitem":
          this.currentState.subtotal = 64000;
          break;
        case "cart":
          break;
        case "total":
          this.currentState.total = 40000;
          break;
        case "promo":
          this.currentState.finalTotal = 180000;
          this.currentState.applied = true;
          break;
        case "fullorder":
          break;
      }

      this.render(true);
    },

    render(animate = false) {
      if (!this.container || !this.currentChallenge) return;
      const kind = this.currentChallenge.simKind;
      const appType = this.currentChallenge.appType;

      let appHeaderName = "📱 Smart App";
      let appIcon = "⚡";
      if (appType === "bank") { appHeaderName = "💳 Payme Express"; appIcon = "💳"; }
      else if (appType === "ecommerce") { appHeaderName = "🛒 Korzinka Go"; appIcon = "🛒"; }
      else if (appType === "transport") { appHeaderName = "🚗 Yandex Go"; appIcon = "🚗"; }
      else if (appType === "smarthome") { appHeaderName = "💡 SmartHome OS"; appIcon = "💡"; }

      let contentHtml = "";

      switch (kind) {
        case "bulb":
          contentHtml = this.renderBulb();
          break;
        case "product":
          contentHtml = this.renderProduct();
          break;
        case "battery":
          contentHtml = this.renderBattery();
          break;
        case "counter":
          contentHtml = this.renderCounter();
          break;
        case "coffee":
          contentHtml = this.renderCoffee();
          break;
        case "card":
          contentHtml = this.renderCard();
          break;
        case "atm":
          contentHtml = this.renderATM();
          break;
        case "pin":
          contentHtml = this.renderPin();
          break;
        case "thermostat":
          contentHtml = this.renderThermostat();
          break;
        case "user":
          contentHtml = this.renderUser();
          break;
        case "taxi":
          contentHtml = this.renderTaxi();
          break;
        case "drone":
          contentHtml = this.renderDrone();
          break;
        case "vip":
          contentHtml = this.renderVIP();
          break;
        case "hero":
          contentHtml = this.renderHero();
          break;
        case "push":
          contentHtml = this.renderPush();
          break;
        case "orderitem":
          contentHtml = this.renderOrderItem();
          break;
        case "cart":
          contentHtml = this.renderCart();
          break;
        case "total":
          contentHtml = this.renderTotal();
          break;
        case "promo":
          contentHtml = this.renderPromo();
          break;
        case "fullorder":
          contentHtml = this.renderFullOrder();
          break;
        default:
          contentHtml = `<div class="sim-placeholder">Tayyor</div>`;
      }

      this.container.innerHTML = `
        <div class="phone-frame">
          <div class="phone-speaker">
            <div class="speaker-pill"></div>
            <div class="camera-lens"></div>
          </div>
          <div class="phone-status-bar">
            <span>9:41</span>
            <div class="status-icons">
              <span>📶</span>
              <span>⚡</span>
              <span>100%</span>
            </div>
          </div>
          <div class="phone-app-header">
            <span class="app-title">${appIcon} ${appHeaderName}</span>
            <span class="live-pill">LIVE JVM</span>
          </div>
          <div class="phone-screen-body ${animate ? 'animate-pulse-screen' : ''}">
            ${contentHtml}
          </div>
          <div class="phone-home-bar"></div>
        </div>
      `;
    },

    // --- SCREEN RENDERERS ---

    renderBulb() {
      const on = this.currentState.isOn;
      return `
        <div class="sim-scene bulb-scene ${on ? 'light-active' : 'light-off'}">
          <div class="lamp-wire"></div>
          <div class="lamp-bulb ${on ? 'glow-bulb' : ''}">
            <div class="bulb-glass">💡</div>
            ${on ? '<div class="bulb-rays"></div>' : ''}
          </div>
          <div class="device-status-badge ${on ? 'badge-on' : 'badge-off'}">
            Holat: <strong>${on ? 'YONIQ (isOn: true)' : 'O\'CHIQLI (isOn: false)'}</strong>
          </div>
          <div class="live-inspect-box">
            <span>🔍 Obyekt Xotirasi:</span>
            <code>SmartBulb.isOn = ${on};</code>
          </div>
        </div>
      `;
    },

    renderProduct() {
      const s = this.currentState;
      return `
        <div class="sim-scene product-scene">
          <div class="uzum-card">
            <div class="product-badge">Top Tovar</div>
            <div class="product-img">📱</div>
            <div class="product-title">${s.name}</div>
            <div class="product-stars">★★★★★ <span style="color:#94a3b8; font-size:11px;">(1,420 baho)</span></div>
            <div class="product-price">2 400 000 so'm</div>
            <div class="installment-pill">oyiga 240 000 so'mdan</div>
            <div class="stock-info">
              Omborda qoldiq: <span class="stock-number ${s.stock <= 7 ? 'stock-updated' : ''}">${s.stock} ta</span>
            </div>
            ${s.bought > 0 ? `<div class="bought-alert">✅ -${s.bought} ta xarid qilindi!</div>` : ''}
          </div>
          <div class="live-inspect-box">
            <span>🔍 Obyekt Xotirasi:</span>
            <code>Product.stock = ${s.stock};</code>
          </div>
        </div>
      `;
    },

    renderBattery() {
      const level = this.currentState.level || 20;
      return `
        <div class="sim-scene battery-scene">
          <div class="battery-hud">
            <div class="battery-shell">
              <div class="battery-cap"></div>
              <div class="battery-fill" style="width: ${level}%;">
                <span class="battery-pct">${level}%</span>
              </div>
            </div>
            <div class="charge-indicator ${level >= 70 ? 'active' : ''}">
              ⚡ <span>Tezkor quvvatlash faol</span>
            </div>
          </div>
          <div class="live-inspect-box">
            <span>🔍 Obyekt Xotirasi:</span>
            <code>Battery.level = ${level};</code>
          </div>
        </div>
      `;
    },

    renderCounter() {
      const cnt = this.currentState.count || 0;
      return `
        <div class="sim-scene counter-scene">
          <div class="tally-box">
            <div class="tally-label">SAVDO MARKAZI TASHRIFCHILARI</div>
            <div class="tally-digits">0 0 ${cnt}</div>
            <div class="tally-btn-view">
              <button class="tally-click-sim" type="button">CLICK (+1)</button>
            </div>
          </div>
          <div class="live-inspect-box">
            <span>🔍 Obyekt Xotirasi:</span>
            <code>ClickCounter.count = ${cnt};</code>
          </div>
        </div>
      `;
    },

    renderCoffee() {
      const s = this.currentState;
      return `
        <div class="sim-scene coffee-scene">
          <div class="coffee-machine-box">
            <div class="water-gauge">
              <div class="gauge-fill" style="height: ${(s.waterMl / 200) * 100}%;"></div>
              <span class="gauge-text">${s.waterMl} ml</span>
            </div>
            <div class="coffee-spout">
              <div class="coffee-drips ${s.brewed > 0 ? 'dripping' : ''}"></div>
              <div class="espresso-cup">☕</div>
            </div>
          </div>
          <div class="coffee-status">
            ${s.brewed > 0 ? '🎉 Yangi Espresso Tayyor! (Suv: 150ml)' : 'Kutilmoqda...'}
          </div>
          <div class="live-inspect-box">
            <span>🔍 Obyekt Xotirasi:</span>
            <code>CoffeeMachine.waterMl = ${s.waterMl};</code>
          </div>
        </div>
      `;
    },

    selectCard(idx) {
      if (this.currentState.cards && this.currentState.cards[idx]) {
        this.currentState.activeCardIdx = idx;
        const c = this.currentState.cards[idx];
        this.currentState.balance = c.balance;
        this.currentState.holder = c.holder || "";
        this.currentState.cardNumber = c.cardNumber || "";
        this.currentState.expiryDate = c.expiryDate || "";
        this.currentState.cvv = c.cvv || "";
        this.currentState.lastTxMsg = c.lastTxMsg || "";
        this.currentState.isLocked = Boolean(c.isLocked);
        this.render();
      }
    },

    
    
    execSimMethod(methodName, argVal) {
      if (!this.currentState) return;
      const kind = this.currentChallenge ? this.currentChallenge.simKind : "";

      if (kind === "card") {
        const cards = this.currentState.cards || [];
        const activeIdx = (this.currentState.activeCardIdx !== undefined && this.currentState.activeCardIdx < cards.length) ? this.currentState.activeCardIdx : 0;
        const card = cards[activeIdx] || cards[0];
        if (!card) return;

        if (methodName === "deposit") {
          const amt = Number(argVal) || 25000;
          card.balance = (Number(card.balance) || 0) + amt;
          card.lastTxMsg = `+${amt.toLocaleString()} UZS depozit qilindi! Balans: ${Number(card.balance).toLocaleString()} UZS`;
          if (!card.transactions) card.transactions = [];
          card.transactions.unshift({ type: "deposit", amount: amt, time: new Date().toLocaleTimeString() });
          this.currentState.balance = card.balance;
        } else if (methodName === "withdraw") {
          const amt = Number(argVal) || 10000;
          if (card.isLocked) {
            card.lastTxMsg = "🚫 Xatolik: Karta bloklangan! Mablag' yechib bo'lmaydi.";
          } else if (amt > card.balance) {
            card.lastTxMsg = `⚠️ Yetarli mablag' mavjud emas! (Balans: ${Number(card.balance).toLocaleString()} UZS)`;
          } else {
            card.balance = (Number(card.balance) || 0) - amt;
            card.lastTxMsg = `-${amt.toLocaleString()} UZS muvaffaqiyatli yechildi! Qoldiq: ${Number(card.balance).toLocaleString()} UZS`;
            if (!card.transactions) card.transactions = [];
            card.transactions.unshift({ type: "withdraw", amount: amt, time: new Date().toLocaleTimeString() });
            this.currentState.balance = card.balance;
          }
        } else if (methodName === "toggleLock") {
          card.isLocked = !card.isLocked;
          card.lastTxMsg = card.isLocked ? "🔒 Karta bloklandi! Xaridlar to'xtatildi." : "🔓 Karta blokdan chiqarildi!";
          this.currentState.isLocked = card.isLocked;
        } else if (methodName === "spend") {
          const amt = Number(argVal) || 15000;
          if (card.isLocked) {
            card.lastTxMsg = "🚫 Xatolik: Karta bloklangan!";
          } else if (amt > card.balance) {
            card.lastTxMsg = "⚠️ Yetarli mablag' mavjud emas!";
          } else {
            card.balance = (Number(card.balance) || 0) - amt;
            card.lastTxMsg = `-${amt.toLocaleString()} UZS xarid qilindi!`;
            this.currentState.balance = card.balance;
          }
        } else if (methodName === "earnCashback") {
          const amt = Number(argVal) || 5000;
          card.balance = (Number(card.balance) || 0) + amt;
          card.lastTxMsg = `🎁 +${amt.toLocaleString()} UZS keshbek qo'shildi!`;
          this.currentState.balance = card.balance;
        }

        // Re-render phone screen
        this.render(true);

        // Update live heap text display
        if (typeof document !== "undefined") {
          const memEl = document.getElementById("memoryContentText") || document.querySelector(".live-inspect-box code");
          if (memEl) {
            memEl.textContent = `${card.cardType || 'BankCard'}@heap[${card.varName}] { cardNumber: "${card.cardNumber || '8600 ...'}", cardHolder: "${card.holder || 'null'}", balance: ${card.balance}.0, isLocked: ${card.isLocked ? 'true' : 'false'} };`;
          }
        }
      } else if (kind === "bulb") {
        if (methodName === "turnOn") this.currentState.isOn = true;
        if (methodName === "turnOff") this.currentState.isOn = false;
        this.render(true);
      } else if (kind === "product") {
        if (methodName === "buy" && this.currentState.stock > 0) {
          this.currentState.stock--;
          this.currentState.bought = (this.currentState.bought || 0) + 1;
        } else if (methodName === "restock") {
          this.currentState.stock += 5;
        }
        this.render(true);
      } else if (kind === "counter") {
        if (methodName === "increment") this.currentState.count++;
        if (methodName === "decrement" && this.currentState.count > 0) this.currentState.count--;
        this.render(true);
      } else if (kind === "coffee") {
        if (methodName === "brew" && this.currentState.waterMl >= 50 && this.currentState.beansGrams >= 15) {
          this.currentState.waterMl -= 50;
          this.currentState.beansGrams -= 15;
          this.currentState.brewed = (this.currentState.brewed || 0) + 1;
        }
        this.render(true);
      }
    },

    detectMethodsFromCode(code) {
      if (!code || typeof code !== "string") return [];
      const methodRegex = /(?:public|protected|private)?\s*(?:static\s+)?(void|int|long|double|boolean|String|BankCard|Card|SecureCard)\s+([a-zA-Z0-9_]+)\s*\(([^)]*)\)\s*\{/g;
      const methods = [];
      const seen = new Set();
      let m;
      while ((m = methodRegex.exec(code)) !== null) {
        const returnType = m[1];
        const name = m[2];
        const params = m[3].trim();
        if (name !== "main" && !seen.has(name)) {
          seen.add(name);
          methods.push({ returnType, name, params });
        }
      }
      return methods;
    },

    parseCardsFromCode(code, stdout) {
      if (!code || typeof code !== "string") {
        return { cards: [] };
      }

      const cards = [];
      const cardTypeRegex = /(?:BankCard|GoldCard|PlatinumCard|Card|SecureCard|LimitedCard|CashbackCard|VipCard)/;

      // 1. Match instantiated cards: e.g. "BankCard card = new BankCard(50000.0);" or "var card2 = new BankCard(...)"
      const instRegex = /(?:([A-Za-z0-9_]+)\s+)?([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*new\s+([A-Za-z0-9_]+)\s*\(([^)]*)\)/g;
      let m;
      const seenVars = new Set();

      while ((m = instRegex.exec(code)) !== null) {
        const declaredType = m[1] || "";
        const varName = m[2];
        const constructedType = m[3];
        const argsStr = m[4] || "";

        if (cardTypeRegex.test(declaredType) || cardTypeRegex.test(constructedType) || varName.toLowerCase().includes("card")) {
          seenVars.add(varName);

          const card = {
            varName: varName,
            cardType: constructedType || declaredType || "BankCard",
            balance: 0,
            initialBalance: 0,
            holder: "",
            cardNumber: "",
            expiryDate: "12/28",
            cvv: "777",
            lastTxMsg: "",
            isLocked: false,
            transactions: []
          };

          // Parse constructor arguments
          const strMatches = Array.from(argsStr.matchAll(/["']([^"']+)["']/g)).map(x => x[1]);
          strMatches.forEach(str => {
            const cleanDigits = str.replace(/[^0-9]/g, "");
            if (cleanDigits.length === 16) {
              card.cardNumber = cleanDigits.replace(/(.{4})/g, "$1 ").trim();
            } else if (cleanDigits.length === 12 || cleanDigits.length === 13) {
              card.phone = str;
            } else if (/[a-zA-Z]/.test(str)) {
              card.holder = str.toUpperCase();
            }
          });

          const argsWithoutStrings = argsStr.replace(/"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/g, "");
          const numMatches = Array.from(argsWithoutStrings.matchAll(/([0-9]+(?:\.[0-9]+)?)/g)).map(x => parseFloat(x[1]));
          if (numMatches.length > 0) {
            card.balance = numMatches[0];
            card.initialBalance = numMatches[0];
            if (numMatches.length > 1) {
              card.dailyLimit = numMatches[1];
            }
          }

          cards.push(card);
        }
      }

      // If no explicit variable assignment was found, but "new BankCard(...)" exists:
      if (cards.length === 0) {
        const genericNew = /new\s+(BankCard|GoldCard|PlatinumCard|Card|SecureCard|LimitedCard|CashbackCard|VipCard)\s*\(([^)]*)\)/.exec(code);
        if (genericNew) {
          const constructedType = genericNew[1];
          const argsStr = genericNew[2] || "";
          const card = {
            varName: "card",
            cardType: constructedType,
            balance: 0,
            initialBalance: 0,
            holder: "",
            cardNumber: "",
            expiryDate: "12/28",
            cvv: "777",
            lastTxMsg: "",
            isLocked: false,
            transactions: []
          };
          const strMatches = Array.from(argsStr.matchAll(/["']([^"']+)["']/g)).map(x => x[1]);
          strMatches.forEach(str => {
            const cleanDigits = str.replace(/[^0-9]/g, "");
            if (cleanDigits.length === 16) {
              card.cardNumber = cleanDigits.replace(/(.{4})/g, "$1 ").trim();
            } else if (/[a-zA-Z]/.test(str)) {
              card.holder = str.toUpperCase();
            }
          });
          const argsWithoutStrings = argsStr.replace(/"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/g, "");
          const numMatches = Array.from(argsWithoutStrings.matchAll(/([0-9]+(?:\.[0-9]+)?)/g)).map(x => parseFloat(x[1]));
          if (numMatches.length > 0) {
            card.balance = numMatches[0];
            card.initialBalance = numMatches[0];
          }
          cards.push(card);
          seenVars.add("card");
        }
      }

      // 2. Sequential operations on each card variable
      cards.forEach(card => {
        const v = card.varName;

        // Check holder assignment: card.setCardHolder("..."), card.setHolder("..."), or card.cardHolder = "..."
        const holderAssign = new RegExp(v + "\\.(?:setCardHolder|setHolder)\\s*\\(\\s*[\"']([^\"']+)[\"']\\s*\\)|" + v + "\\.cardHolder\\s*=\\s*[\"']([^\"']+)[\"']");
        const hm = code.match(holderAssign);
        if (hm) {
          card.holder = (hm[1] || hm[2]).toUpperCase();
        }

        // Check card number assignment: card.setCardNumber("...")
        const numAssign = new RegExp(v + "\\.setCardNumber\\s*\\(\\s*[\"']([^\"']+)[\"']\\s*\\)");
        const nm = code.match(numAssign);
        if (nm) {
          const clean = nm[1].replace(/[^0-9]/g, "");
          card.cardNumber = clean.replace(/(.{4})/g, "$1 ").trim();
        }

        // Check lock/unlock
        const lockRegex = new RegExp(v + "\\.lock(?:Card)?\\s*\\(\\s*\\)");
        const unlockRegex = new RegExp(v + "\\.unlock(?:Card)?\\s*\\(\\s*\\)");
        if (lockRegex.test(code)) card.isLocked = true;
        if (unlockRegex.test(code)) card.isLocked = false;

        // Sequential operations: deposit, withdraw, spend
        const opRegex = new RegExp(v + "\\.(deposit|withdraw|spend|pay)\\s*\\(\\s*([0-9]+(?:\\.[0-9]+)?)\\s*\\)", "g");
        let opM;
        while ((opM = opRegex.exec(code)) !== null) {
          const op = opM[1];
          const amt = parseFloat(opM[2]);

          if (op === "deposit") {
            if (amt > 0) {
              card.balance += amt;
              card.lastTxMsg = `+${amt.toLocaleString()} UZS Depozit qilindi!`;
              card.transactions.push({ type: "deposit", amount: amt, msg: `+${amt.toLocaleString()} UZS` });
            }
          } else if (op === "withdraw") {
            if (!card.isLocked && amt > 0 && amt <= card.balance) {
              card.balance -= amt;
              card.lastTxMsg = `-${amt.toLocaleString()} UZS Yechildi!`;
              card.transactions.push({ type: "withdraw", amount: amt, msg: `-${amt.toLocaleString()} UZS` });
            } else if (card.isLocked) {
              card.lastTxMsg = `❌ Karta bloklangan!`;
            } else {
              card.lastTxMsg = `❌ Mablag' yetarli emas!`;
            }
          } else if (op === "spend" || op === "pay") {
            if (!card.isLocked && amt > 0 && amt <= card.balance) {
              card.balance -= amt;
              card.lastTxMsg = `-${amt.toLocaleString()} UZS Xarid qilindi!`;
              card.transactions.push({ type: "spend", amount: amt, msg: `-${amt.toLocaleString()} UZS` });
            }
          }
        }
      });

      // 3. Fallback for cardholder name if not explicitly set on card:
      cards.forEach(card => {
        if (!card.holder) {
          const nameM = code.match(/(?:cardHolder|holder|name|mijoz|owner)\s*=\s*["']([^"']+)["']/i) ||
                        code.match(/["']([A-Z][a-z]+(?:\s+[A-Z][a-z]+)+)["']/);
          if (nameM && !nameM[1].toLowerCase().includes("bank") && !nameM[1].toLowerCase().includes("uzs")) {
            card.holder = nameM[1].toUpperCase();
          }
        }
        // Fallback for 16-digit card number if user wrote one in code
        if (!card.cardNumber) {
          const cardNumMatch = code.match(/["']?((?:8600|9860|4000|5400)\s*(?:[0-9]{4}\s*){3}[0-9]{4}|(?:8600|9860|4000|5400)[0-9]{12})["']?/);
          if (cardNumMatch) {
            const clean = cardNumMatch[1].replace(/[^0-9]/g, "");
            card.cardNumber = clean.replace(/(.{4})/g, "$1 ").trim();
          }
        }
      });

      // 4. Sync balance with stdout if available
      if (stdout && cards.length > 0) {
        const outBalM = stdout.match(/(?:Balans|Qoldiq|Balance)[^0-9]*([0-9]+(?:\.[0-9]+)?)/i);
        if (outBalM) {
          cards[cards.length - 1].balance = parseFloat(outBalM[1]);
        }
      }

      return { cards };
    },

    renderCard() {
      const s = this.currentState;
      if (!s.hasObject || !s.cards || s.cards.length === 0) {
        return `
          <div class="sim-scene card-scene">
            <div class="empty-card-box">
              <div class="dashed-card-frame">
                <span class="empty-icon">💳</span>
                <span class="empty-title">Karta Hali Ochilmagan</span>
                <span class="empty-desc">Ilovada karta ko'rinishi uchun kodingizda yangi obyekt yarating:</span>
                <div class="empty-hint-code">BankCard card = new BankCard("8600 1234 5678 9012", "Ali Valiyev", 50000.0);</div>
              </div>
            </div>
            <div class="live-inspect-box">
              <span>🔍 Obyekt Xotirasi:</span>
              <code>null (heap xotirada karta obyekti mavjud emas)</code>
            </div>
          </div>
        `;
      }

      const cards = s.cards;
      const activeIdx = (s.activeCardIdx !== undefined && s.activeCardIdx < cards.length) ? s.activeCardIdx : 0;
      const c = cards[activeIdx] || cards[0];

      // Aniqlangan metodlarni tahlil qilish
      const declared = s.declaredMethods || [];
      const hasMethod = (name) => declared.some(m => m.name.toLowerCase() === name.toLowerCase());

      const hasDeposit = hasMethod("deposit");
      const hasWithdraw = hasMethod("withdraw");
      const hasLock = hasMethod("lockcard") || hasMethod("lock");
      const hasUnlock = hasMethod("unlockcard") || hasMethod("unlock");
      const chId = (this.currentChallenge && this.currentChallenge.id) || 1;

      return `
        <div class="sim-scene card-scene animate-card-appear">
          ${cards.length > 1 ? `
            <div class="multi-card-bar">
              <span class="multi-card-lbl">KARTALAR (${cards.length} ta):</span>
              <div class="multi-card-pills">
                ${cards.map((item, idx) => `
                  <button type="button" class="card-pill-btn ${idx === activeIdx ? 'active' : ''}" onclick="window.SimulatorEngine.selectCard(${idx})">
                    💳 ${item.varName} • ${Number(item.balance).toLocaleString()} UZS
                  </button>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- SMARTPHONE CARD GRAPHIC -->
          <div class="humo-card ${c.isLocked ? 'card-locked' : ''}">
            <div class="humo-top">
              <div style="display:flex; align-items:center; gap:6px;">
                <span class="humo-logo">${c.cardNumber && c.cardNumber.startsWith('8600') ? 'UZCARD' : 'HUMO'}</span>
                <span class="card-var-badge">${c.varName || 'card'}</span>
                ${c.isLocked ? '<span class="card-lock-badge">🔒 BLOKLANGAN</span>' : ''}
              </div>
              <div class="humo-top-right">
                <span class="contactless-wave">📶 </span>
                <span class="chip-icon">🎴</span>
              </div>
            </div>

            <!-- To'liq 16 xonali karta raqami -->
            <div class="card-num-row">
              ${c.cardNumber ? `
                <span class="card-num-full">${c.cardNumber}</span>
              ` : `
                <span class="card-num-full card-num-masked" title="Karta raqami kodingizda biriktirilmagan">
                  •••• &nbsp;•••• &nbsp;•••• &nbsp;••••
                </span>
              `}
            </div>

            <!-- Amal qilish muddati va CVV -->
            <div class="card-mid-row">
              <div class="card-exp-box">
                <span class="card-tiny-lbl">VALID THRU</span>
                <span class="card-exp-val">${c.expiryDate || '••/••'}</span>
              </div>
              <div class="card-cvv-box">
                <span class="card-tiny-lbl">CVV/CVC</span>
                <span class="card-cvv-val">${c.cvv || '•••'}</span>
              </div>
            </div>

            <!-- Karta egasi va Balans -->
            <div class="card-bottom">
              <div class="card-holder-box">
                <div class="card-lbl">KARTA EGASI</div>
                ${c.holder ? `
                  <div class="card-val card-val-named">${c.holder}</div>
                ` : `
                  <div class="card-val card-val-empty">
                    <span class="dots-ph">•••••••• ••••••••</span>
                    <span class="unassigned-chip">Biriktirilmagan</span>
                  </div>
                `}
              </div>
              <div class="card-bal-box" style="text-align:right;">
                <div class="card-lbl">BALANS</div>
                <div class="card-bal">${Number(c.balance).toLocaleString()} UZS</div>
              </div>
            </div>
          </div>

          ${c.lastTxMsg ? `<div class="tx-badge">${c.lastTxMsg}</div>` : ''}

          <!-- INTERACTIVE METHODS & LIVE ACTIONS PANEL -->
          <div class="phone-methods-section">
            <div class="phone-methods-header">
              <div class="pm-title-row">
                <span class="pm-title-icon">⚡</span>
                <span class="pm-title-text">Kodingizdagi Metodlar</span>
              </div>
              <span class="pm-count-badge">${declared.length} ta faol</span>
            </div>

            <div class="phone-methods-list">
              <!-- 1. DEPOSIT METODI -->
              <div class="phone-method-item ${hasDeposit ? 'method-unlocked' : 'method-locked'}">
                <div class="pm-row-top">
                  <div class="pm-sig">
                    <span class="pm-kw">void</span> <strong class="pm-fn">deposit</strong>(<span class="pm-arg">amount</span>)
                  </div>
                  ${hasDeposit ? `
                    <span class="pm-badge active">✅ Kodingizda faol</span>
                  ` : `
                    <span class="pm-badge locked">🔒 Kutilmoqda</span>
                  `}
                </div>
                ${hasDeposit ? `
                  <div class="pm-action-row">
                    <button type="button" class="btn-phone-op btn-op-deposit" onclick="window.SimulatorEngine.execSimMethod('deposit', 25000)" title="Kartaga +25,000 UZS kirim qilish">
                      +25,000 UZS
                    </button>
                    <button type="button" class="btn-phone-op btn-op-deposit" onclick="window.SimulatorEngine.execSimMethod('deposit', 50000)" title="Kartaga +50,000 UZS kirim qilish">
                      +50,000 UZS
                    </button>
                    <button type="button" class="btn-phone-op btn-op-deposit" onclick="window.SimulatorEngine.execSimMethod('deposit', 100000)" title="Kartaga +100,000 UZS kirim qilish">
                      +100,000 UZS
                    </button>
                  </div>
                ` : `
                  <div class="pm-hint-text">Kodingizda <code>deposit(amount)</code> metodini yaratsangiz, bu yerda kartaga pul tushirish tugmalari ochiladi!</div>
                `}
              </div>

              <!-- 2. WITHDRAW METODI -->
              <div class="phone-method-item ${hasWithdraw ? 'method-unlocked' : 'method-locked'}">
                <div class="pm-row-top">
                  <div class="pm-sig">
                    <span class="pm-kw">${hasWithdraw ? 'boolean/void' : 'boolean'}</span> <strong class="pm-fn">withdraw</strong>(<span class="pm-arg">amount</span>)
                  </div>
                  ${hasWithdraw ? `
                    <span class="pm-badge active">✅ Kodingizda faol</span>
                  ` : (chId === 1 ? `
                    <span class="pm-badge locked">🔒 2-bosqichda ochiladi</span>
                  ` : `
                    <span class="pm-badge locked">🔒 Kutilmoqda</span>
                  `)}
                </div>
                ${hasWithdraw ? `
                  <div class="pm-action-row">
                    <button type="button" class="btn-phone-op btn-op-withdraw" onclick="window.SimulatorEngine.execSimMethod('withdraw', 10000)" title="Kartadan -10,000 UZS yechish">
                      -10,000 UZS
                    </button>
                    <button type="button" class="btn-phone-op btn-op-withdraw" onclick="window.SimulatorEngine.execSimMethod('withdraw', 25000)" title="Kartadan -25,000 UZS yechish">
                      -25,000 UZS
                    </button>
                    <button type="button" class="btn-phone-op btn-op-withdraw" onclick="window.SimulatorEngine.execSimMethod('withdraw', 50000)" title="Kartadan -50,000 UZS yechish">
                      -50,000 UZS
                    </button>
                  </div>
                ` : `
                  <div class="pm-hint-text">${chId === 1 ? "2-masalada 'withdraw' metodini qo'shib, kartadan xavfsiz pul yechishni boshlaysiz!" : "Kodingizda <code>withdraw(amount)</code> metodini yaratsangiz, pul yechish tugmalari ochiladi!"}</div>
                `}
              </div>

              <!-- 3. LOCK/UNLOCK METODI (Agar kodingizda bo'lsa yoki chId >= 6) -->
              ${(hasLock || hasUnlock || chId >= 6) ? `
                <div class="phone-method-item ${hasLock ? 'method-unlocked' : 'method-locked'}">
                  <div class="pm-row-top">
                    <div class="pm-sig">
                      <span class="pm-kw">void</span> <strong class="pm-fn">lockCard</strong>() / <strong class="pm-fn">unlockCard</strong>()
                    </div>
                    ${hasLock ? `
                      <span class="pm-badge active">✅ Kodingizda faol</span>
                    ` : `
                      <span class="pm-badge locked">🔒 Kutilmoqda</span>
                    `}
                  </div>
                  ${hasLock ? `
                    <div class="pm-action-row">
                      <button type="button" class="btn-phone-op btn-op-lock" onclick="window.SimulatorEngine.execSimMethod('toggleLock')">
                        ${c.isLocked ? '🔓 Qulfdan Chiqarish' : '🔒 Kartani Muzlatish (Lock)'}
                      </button>
                    </div>
                  ` : `
                    <div class="pm-hint-text">6-masalada kartani muzlatish (lock/unlock) xavfsizlik funksiyasini kiritasiz.</div>
                  `}
                </div>
              ` : ''}

              <!-- 4. BOSHQALAR (GETTERLAR VA YORDAMCHI METODLAR) -->
              ${declared.filter(m => !['deposit', 'withdraw', 'lockcard', 'lock', 'unlockcard', 'unlock'].includes(m.name.toLowerCase())).length > 0 ? `
                <div class="pm-other-methods">
                  <span class="pm-other-lbl">🔍 Kodingizdagi boshqa aniqlangan metodlar:</span>
                  <div class="pm-other-tags">
                    ${declared.filter(m => !['deposit', 'withdraw', 'lockcard', 'lock', 'unlockcard', 'unlock'].includes(m.name.toLowerCase())).map(m => `
                      <span class="pm-tag">${m.name}()</span>
                    `).join('')}
                  </div>
                </div>
              ` : ''}
            </div>
          </div>

          <!-- HEAP MEMORY INSPECTOR -->
          <div class="live-inspect-box">
            <span>🔍 Obyekt Xotirasi (Heap):</span>
            <code>${c.cardType || 'BankCard'}@heap[${c.varName}] { cardNumber: "${c.cardNumber || '•••• •••• •••• ••••'}", cardHolder: "${c.holder || 'null'}", balance: ${c.balance}.0, isLocked: ${c.isLocked ? 'true' : 'false'} };</code>
          </div>
        </div>
      `;
    },

    renderATM() {
      const s = this.currentState;
      return `
        <div class="sim-scene atm-scene">
          <div class="atm-screen">
            <div class="atm-bank-title">KAPITALBANK ATM</div>
            <div class="atm-balance-display">
              Balans: <strong>${s.balance.toLocaleString()} so'm</strong>
            </div>
            ${s.withdrawn > 0 ? `
              <div class="cash-dispenser-slot cash-anim">
                💵 Naqd pul: ${s.withdrawn.toLocaleString()} so'm berildi
              </div>
            ` : '<div class="cash-dispenser-slot">Pul olish uchun kutilmoqda...</div>'}
          </div>
          <div class="live-inspect-box">
            <span>🔍 Obyekt Xotirasi:</span>
            <code>SecureAccount.balance = ${s.balance}.0;</code>
          </div>
        </div>
      `;
    },

    renderPin() {
      const unlocked = this.currentState.isUnlocked;
      return `
        <div class="sim-scene pin-scene">
          <div class="pin-lock-box">
            <div class="lock-icon ${unlocked ? 'unlocked' : 'locked'}">${unlocked ? '🔓' : '🔒'}</div>
            <div class="pin-title">${unlocked ? 'KARTA QULFI OCHILDI' : 'PIN KODNI KIRITING'}</div>
            <div class="pin-dots">
              <span class="dot filled">●</span>
              <span class="dot filled">●</span>
              <span class="dot filled">●</span>
              <span class="dot filled">●</span>
            </div>
            <div class="pin-feedback ${unlocked ? 'success' : ''}">
              ${unlocked ? '✅ PIN 7777 Tasdiqlandi (Access Granted)' : 'Xavfsiz kiritish...'}
            </div>
          </div>
          <div class="live-inspect-box">
            <span>🔍 Obyekt Xotirasi:</span>
            <code>CardSecurity.verifyPin(7777) == true;</code>
          </div>
        </div>
      `;
    },

    renderThermostat() {
      const t = this.currentState.temperature || 22.0;
      return `
        <div class="sim-scene thermo-scene">
          <div class="thermo-dial ${t >= 25 ? 'dial-warm' : 'dial-cool'}">
            <div class="dial-inner">
              <div class="dial-temp">${t} °C</div>
              <div class="dial-mode">${t >= 25 ? '🔥 Isitish faol' : '❄️ Sovutish faol'}</div>
            </div>
          </div>
          <div class="thermo-bounds-lbl">Xavfsiz oraliq: 16.0°C - 30.0°C</div>
          <div class="live-inspect-box">
            <span>🔍 Obyekt Xotirasi:</span>
            <code>Thermostat.temperature = ${t};</code>
          </div>
        </div>
      `;
    },

    renderUser() {
      const s = this.currentState;
      return `
        <div class="sim-scene user-scene">
          <div class="kyc-card">
            <div class="kyc-avatar">👩🏻‍🎓</div>
            <div class="kyc-name">${s.name}</div>
            <div class="kyc-age">Yoshi: <strong>${s.age} yosh</strong></div>
            <div class="kyc-badge-pill">✅ 16+ Qonuniy Tasdiqlangan</div>
          </div>
          <div class="live-inspect-box">
            <span>🔍 Obyekt Xotirasi:</span>
            <code>UserProfile.age = ${s.age};</code>
          </div>
        </div>
      `;
    },

    renderTaxi() {
      const s = this.currentState;
      return `
        <div class="sim-scene taxi-scene">
          <div class="yandex-map-view">
            <div class="route-line"></div>
            <div class="car-marker comfort-car">🚖</div>
          </div>
          <div class="fare-card">
            <div class="fare-tier">
              <span class="tier-pill">Comfort Taxi (1.5x)</span>
              <span class="fare-sum">${s.fare.toLocaleString()} so'm</span>
            </div>
            <div class="distance-pill">📍 Masofa: ${s.km} km</div>
          </div>
          <div class="live-inspect-box">
            <span>🔍 Obyekt Xotirasi:</span>
            <code>ComfortTaxi.calculateFare(10.0) = ${s.fare}.0;</code>
          </div>
        </div>
      `;
    },

    renderDrone() {
      const s = this.currentState;
      return `
        <div class="sim-scene drone-scene">
          <div class="sky-view">
            <div class="flying-drone">🚁</div>
            <div class="altitude-tag">Balandlik: 50 metr</div>
          </div>
          <div class="delivery-status-box">
            📍 Manzil: <strong>${s.address}</strong>
            <div style="font-size:12px; color:#10b981; margin-top:4px;">Parvoz orqali tezkor yetkazildi</div>
          </div>
          <div class="live-inspect-box">
            <span>🔍 Obyekt Xotirasi:</span>
            <code>DroneDelivery.deliver("${s.address}")</code>
          </div>
        </div>
      `;
    },

    renderVIP() {
      const s = this.currentState;
      return `
        <div class="sim-scene vip-scene">
          <div class="vip-crown-card">
            <div class="crown-icon">👑</div>
            <div class="vip-title">VIP SODIQLIK KARTASI</div>
            <div class="cashback-val">+${s.cashback.toLocaleString()} so'm</div>
            <div class="cashback-sub">Xarid summasidan 5% Sof Keshbek</div>
          </div>
          <div class="live-inspect-box">
            <span>🔍 Obyekt Xotirasi:</span>
            <code>VIPCustomer.calculateCashback(100000.0) = ${s.cashback}.0;</code>
          </div>
        </div>
      `;
    },

    renderHero() {
      const s = this.currentState;
      return `
        <div class="sim-scene hero-scene">
          <div class="hero-card">
            <div class="hero-avatar">🧙‍♂️</div>
            <div class="hero-name">Sehrgar (Mage)</div>
            <div class="hp-bar-container">
              <div class="hp-bar-fill" style="width: ${(s.currentHealth / s.maxHealth) * 100}%;"></div>
            </div>
            <div class="hp-numbers">${s.currentHealth} / ${s.maxHealth} HP</div>
            <div class="shield-badge">🛡️ Sehrli Qalqon: Zarar / 2</div>
          </div>
          <div class="live-inspect-box">
            <span>🔍 Obyekt Xotirasi:</span>
            <code>Mage.health = ${s.currentHealth};</code>
          </div>
        </div>
      `;
    },

    renderPush() {
      const s = this.currentState;
      return `
        <div class="sim-scene push-scene">
          <div class="dynamic-island-banner slide-down">
            <div class="island-icon">🔔</div>
            <div class="island-content">
              <div class="island-title">Payme Bildirishnoma</div>
              <div class="island-body">${s.message}</div>
            </div>
          </div>
          <div class="phone-screen-bg"></div>
          <div class="live-inspect-box">
            <span>🔍 Obyekt Xotirasi:</span>
            <code>PushNotification.formatMessage(...)</code>
          </div>
        </div>
      `;
    },

    renderOrderItem() {
      const s = this.currentState;
      return `
        <div class="sim-scene orderitem-scene">
          <div class="food-item-card">
            <div class="food-img">🌯</div>
            <div class="food-details">
              <div class="food-name">${s.name}</div>
              <div class="food-price">${s.price.toLocaleString()} so'm × ${s.quantity}</div>
            </div>
            <div class="food-subtotal">${s.subtotal.toLocaleString()} so'm</div>
          </div>
          <div class="live-inspect-box">
            <span>🔍 Obyekt Xotirasi:</span>
            <code>OrderItem.getSubtotal() = ${s.subtotal}.0;</code>
          </div>
        </div>
      `;
    },

    renderCart() {
      return `
        <div class="sim-scene cart-scene">
          <div class="korzinka-cart-header">
            <span>🛒 Savat</span>
            <span class="cart-badge-count">2 ta tovar</span>
          </div>
          <div class="cart-items-list">
            <div class="cart-row">
              <span>🥤 Coca-Cola 1.5L</span>
              <strong>14 000 so'm</strong>
            </div>
            <div class="cart-row">
              <span>🍪 Choco-Pie</span>
              <strong>22 000 so'm</strong>
            </div>
          </div>
          <div class="live-inspect-box">
            <span>🔍 Obyekt Xotirasi:</span>
            <code>ShoppingCart.items.size() = 2;</code>
          </div>
        </div>
      `;
    },

    renderTotal() {
      return `
        <div class="sim-scene total-scene">
          <div class="paper-receipt">
            <div class="receipt-header">🛒 KORZINKA SUPERMARKET</div>
            <div class="receipt-line">Pizza bo'lagi (x2) ............. 30 000</div>
            <div class="receipt-line">Olma sharbati (x1) ........... 10 000</div>
            <div class="receipt-divider">--------------------------------</div>
            <div class="receipt-total-row">
              <span>JAMI TO'LOV:</span>
              <strong style="color:#10b981;">40 000 so'm</strong>
            </div>
          </div>
          <div class="live-inspect-box">
            <span>🔍 Obyekt Xotirasi:</span>
            <code>Order.calculateTotal() = 40000.0;</code>
          </div>
        </div>
      `;
    },

    renderPromo() {
      return `
        <div class="sim-scene promo-scene">
          <div class="promo-box">
            <div class="promo-input-row">
              <span class="coupon-icon">🎟️</span>
              <input type="text" class="promo-input" value="WIUT2026" readonly>
              <span class="promo-applied-badge">10% Chegirma</span>
            </div>
            <div class="price-strike-row">
              <span class="old-price">200 000 so'm</span>
              <span class="new-price">180 000 so'm</span>
            </div>
          </div>
          <div class="live-inspect-box">
            <span>🔍 Obyekt Xotirasi:</span>
            <code>DiscountManager.applyPromo(200000.0, "WIUT2026") = 180000.0;</code>
          </div>
        </div>
      `;
    },

    renderFullOrder() {
      const s = this.currentState;
      return `
        <div class="sim-scene fullorder-scene">
          <div class="full-order-invoice">
            <div class="invoice-title">BUYURTMA KVITANSIYASI</div>
            <div class="invoice-item">👤 Mijoz: <strong>${s.customer}</strong> (${s.phone})</div>
            <div class="invoice-item">📍 Manzil: <strong>${s.city}, ${s.street}</strong></div>
            <div class="invoice-item">💵 Jami: <strong>${s.total.toLocaleString()} so'm</strong></div>
            <div class="paid-stamp">✅ TO'LANDI</div>
          </div>
          <div class="live-inspect-box">
            <span>🔍 Obyekt Xotirasi:</span>
            <code>OrderReceipt: Customer + Address + Total</code>
          </div>
        </div>
      `;
    }
  };

  global.SimulatorEngine = SimulatorEngine;
})(typeof window !== "undefined" ? window : global);
