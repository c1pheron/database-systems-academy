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

    
    
    // Reveal ONLY one specific field for a given duration (Pure OOP Encapsulation!)
    revealField(fieldKey, customMsg = null, durationMs = 5000) {
      if (!this.currentState.revealed) {
        this.currentState.revealed = {};
      }
      this.currentState.revealed[fieldKey] = true;
      this.render(true);

      const activeIdx = this.currentState.activeCardIdx || 0;
      const c = (this.currentState.cards && this.currentState.cards[activeIdx]) || {};
      const msgs = {
        balance: `👁️ getBalance() chaqirildi! Balans: ${Number(c.balance || 0).toLocaleString()} UZS`,
        holder: `👤 getCardHolder() chaqirildi! Karta egasi: "${c.holder || 'Ali Valiyev'}"`,
        cardNumber: `💳 getCardNumber() chaqirildi! Raqam: "${c.cardNumber || '8600 1234 5678 9012'}"`,
        expiryDate: `📅 getExpiryDate() chaqirildi! Muddat: "${c.expiryDate || '12/28'}"`,
        cvv: `🔒 getCvv() chaqirildi! CVV: "${c.cvv || '777'}"`,
        cardType: `🏷️ getCardType() chaqirildi! Turi: "${c.brand || 'UZCARD'}"`
      };

      this.showPhoneToast(customMsg || msgs[fieldKey] || `👁️ ${fieldKey} xavfsiz ochildi.`);

      this._fieldTimers = this._fieldTimers || {};
      clearTimeout(this._fieldTimers[fieldKey]);

      this._fieldTimers[fieldKey] = setTimeout(() => {
        if (this.currentState && this.currentState.revealed) {
          this.currentState.revealed[fieldKey] = false;
          this.render(true);
          this.showPhoneToast(`🙈 ${fieldKey} xavfsizlik uchun qayta yashirildi (Inkapsulyatsiya).`);
        }
      }, durationMs);
    },

    toggleFieldReveal(fieldKey) {
      if (!this.currentState.revealed) {
        this.currentState.revealed = {};
      }
      if (this.currentState.revealed[fieldKey]) {
        this.currentState.revealed[fieldKey] = false;
        this.render(true);
        this.showPhoneToast(`🙈 ${fieldKey} qayta yashirildi.`);
      } else {
        this.revealField(fieldKey);
      }
    },

    // Master reveal / hide all fields (when tapping card)
    toggleCardReveal() {
      if (!this.currentState.revealed) {
        this.currentState.revealed = {};
      }
      const anyRevealed = Object.values(this.currentState.revealed).some(Boolean);
      if (anyRevealed) {
        this.currentState.revealed = {
          balance: false,
          holder: false,
          cardNumber: false,
          expiryDate: false,
          cvv: false,
          cardType: false
        };
        this.render(true);
        this.showPhoneToast("🙈 Barcha ma'lumotlar qayta yashirildi (Inkapsulyatsiya).");
      } else {
        ['balance', 'holder', 'cardNumber', 'expiryDate', 'cvv', 'cardType'].forEach(f => {
          this.currentState.revealed[f] = true;
        });
        this.render(true);
        this.showPhoneToast("👁️ Karta ma'lumotlari to'liq ochildi (5 soniya).");
        clearTimeout(this._revealTimer);
        this._revealTimer = setTimeout(() => {
          if (this.currentState && this.currentState.revealed) {
            ['balance', 'holder', 'cardNumber', 'expiryDate', 'cvv', 'cardType'].forEach(f => {
              this.currentState.revealed[f] = false;
            });
            this.render(true);
            this.showPhoneToast("🙈 Barcha ma'lumotlar qayta yashirildi.");
          }
        }, 5000);
      }
    },

    openActionModal(actionType) {
      const activeIdx = this.currentState.activeCardIdx || 0;
      const c = (this.currentState.cards && this.currentState.cards[activeIdx]) || {};
      const isDeposit = actionType === 'deposit';

      if (!isDeposit && c.isLocked) {
        this.showPhoneToast("🚫 Karta bloklangan! Pul yechish taqiqlangan.");
        return;
      }

      const modalEl = document.getElementById("phoneActionModal");
      if (!modalEl) return;

      const title = isDeposit ? "💳 Kartaga Depozit Qilish" : "🏧 Kartadan Pul Yechish";
      const hint = isDeposit ? "Kiritiladigan summa (amount > 0):" : `Yechiladigan summa (Mavjud: ${Number(c.balance || 0).toLocaleString()} UZS):`;
      const btnLabel = isDeposit ? "Depozit Qilish (+)" : "Pulni Yechish (-)";

      modalEl.innerHTML = `
        <div class="pam-content animate-slide-up">
          <div class="pam-header">
            <span class="pam-title">${title}</span>
            <button type="button" class="pam-close" onclick="window.SimulatorEngine.closeActionModal()">✕</button>
          </div>
          <div class="pam-body">
            <div class="pam-hint">${hint}</div>
            <div class="pam-quick-row">
              <button type="button" class="pam-quick-btn" onclick="window.SimulatorEngine.setModalAmount(10000)">10,000</button>
              <button type="button" class="pam-quick-btn" onclick="window.SimulatorEngine.setModalAmount(25000)">25,000</button>
              <button type="button" class="pam-quick-btn" onclick="window.SimulatorEngine.setModalAmount(50000)">50,000</button>
              <button type="button" class="pam-quick-btn" onclick="window.SimulatorEngine.setModalAmount(100000)">100,000</button>
            </div>
            <div class="pam-input-wrap">
              <input type="number" id="pamAmountInput" class="pam-input" placeholder="Summani kiriting..." value="25000" min="1000" step="1000">
              <span class="pam-curr">UZS</span>
            </div>
            <button type="button" class="pam-submit-btn ${isDeposit ? 'pam-dep' : 'pam-with'}" onclick="window.SimulatorEngine.confirmAction('${actionType}')">
              ${btnLabel}
            </button>
          </div>
        </div>
      `;
      modalEl.style.display = "flex";
      setTimeout(() => {
        const inp = document.getElementById("pamAmountInput");
        if (inp) inp.focus();
      }, 50);
    },

    setModalAmount(val) {
      const inp = document.getElementById("pamAmountInput");
      if (inp) inp.value = val;
    },

    closeActionModal() {
      const modalEl = document.getElementById("phoneActionModal");
      if (modalEl && modalEl.style) modalEl.style.display = "none";
    },

    confirmAction(actionType) {
      const inp = document.getElementById("pamAmountInput");
      if (!inp) return;
      const amount = parseFloat(inp.value);
      if (isNaN(amount) || amount <= 0) {
        this.showPhoneToast("⚠️ Iltimos, noldan katta musbat summa kiriting!");
        return;
      }

      this.closeActionModal();

      const activeIdx = this.currentState.activeCardIdx || 0;
      const c = (this.currentState.cards && this.currentState.cards[activeIdx]) || {};

      if (actionType === 'deposit') {
        c.balance = (c.balance || 0) + amount;
        c.txList = c.txList || [];
        c.txList.unshift({
          type: "deposit",
          icon: "💳",
          title: "Pul kirimi (deposit)",
          sub: "Muvaffaqiyatli",
          amountStr: "+" + amount.toLocaleString() + " UZS",
          isPositive: true
        });
        this.revealField('balance', `💳 +${amount.toLocaleString()} UZS qo'shildi! Yangi balans: ${c.balance.toLocaleString()} UZS`);
      } else if (actionType === 'withdraw') {
        if (c.isLocked) {
          this.showPhoneToast("🚫 Karta bloklangan! Pul yechib bo'lmaydi.");
          return;
        }
        if (amount > c.balance) {
          c.txList = c.txList || [];
          c.txList.unshift({
            type: "fail",
            icon: "⚠️",
            title: "Mablag' yetarli emas",
            sub: "Overdraft rad etildi",
            amountStr: "-" + amount.toLocaleString() + " UZS",
            isPositive: false
          });
          this.render(true);
          this.showPhoneToast(`❌ Overdraft himoyasi! Yetarli mablag' yo'q (Balans: ${c.balance.toLocaleString()} UZS)`);
          return;
        }

        c.balance -= amount;
        c.txList = c.txList || [];
        c.txList.unshift({
          type: "withdraw",
          icon: "🏧",
          title: "Pul yechish (withdraw)",
          sub: "Muvaffaqiyatli",
          amountStr: "-" + amount.toLocaleString() + " UZS",
          isPositive: false
        });
        this.revealField('balance', `🏧 -${amount.toLocaleString()} UZS yechildi! Qoldiq: ${c.balance.toLocaleString()} UZS`);
      }
    },

    openPinModal(action) {
      const activeIdx = this.currentState.activeCardIdx || 0;
      const c = (this.currentState.cards && this.currentState.cards[activeIdx]) || {};
      c.pin = c.pin || 1234;

      const modalEl = document.getElementById("phoneActionModal");
      if (!modalEl) return;

      const isVerify = action === 'verify';
      const title = isVerify ? "🔑 PIN Kodni Tekshirish (verifyPin)" : "🔄 PIN Kodni O'zgartirish (changePin)";

      modalEl.innerHTML = `
        <div class="pam-content animate-slide-up">
          <div class="pam-header">
            <span class="pam-title">${title}</span>
            <button type="button" class="pam-close" onclick="window.SimulatorEngine.closeActionModal()">✕</button>
          </div>
          <div class="pam-body">
            <div class="pam-hint">${isVerify ? '4 xonali PIN kodni kiriting (Standart: 1234):' : "Eski va yangi PIN kodni kiriting:"}</div>
            ${isVerify ? `
              <div class="pam-input-wrap">
                <input type="password" id="pamPinInput" class="pam-input" placeholder="PIN kod (1234)" maxlength="4" style="text-align:center; font-size:20px; letter-spacing:6px;">
              </div>
              <button type="button" class="pam-submit-btn pam-dep" onclick="window.SimulatorEngine.confirmPinVerify()">
                PIN ni Tekshirish
              </button>
            ` : `
              <div class="pam-input-wrap" style="margin-bottom:8px;">
                <input type="password" id="pamOldPinInput" class="pam-input" placeholder="Eski PIN (1234)" maxlength="4" style="text-align:center; font-size:16px; letter-spacing:4px;">
              </div>
              <div class="pam-input-wrap">
                <input type="password" id="pamNewPinInput" class="pam-input" placeholder="Yangi PIN (4 xonali)" maxlength="4" style="text-align:center; font-size:16px; letter-spacing:4px;">
              </div>
              <button type="button" class="pam-submit-btn pam-dep" onclick="window.SimulatorEngine.confirmPinChange()">
                PIN ni Yangilash
              </button>
            `}
          </div>
        </div>
      `;
      modalEl.style.display = "flex";
      setTimeout(() => {
        const inp = document.getElementById(isVerify ? "pamPinInput" : "pamOldPinInput");
        if (inp) inp.focus();
      }, 50);
    },

    confirmPinVerify() {
      const inp = document.getElementById("pamPinInput");
      if (!inp) return;
      const val = parseInt(inp.value, 10);
      const activeIdx = this.currentState.activeCardIdx || 0;
      const c = (this.currentState.cards && this.currentState.cards[activeIdx]) || {};
      c.pin = c.pin || 1234;

      this.closeActionModal();

      if (val === c.pin) {
        this.showPhoneToast("✅ PIN to'g'ri! verifyPin(" + val + ") = true");
      } else {
        this.showPhoneToast("❌ PIN noto'g'ri! verifyPin(" + inp.value + ") = false");
      }
    },

    confirmPinChange() {
      const oldInp = document.getElementById("pamOldPinInput");
      const newInp = document.getElementById("pamNewPinInput");
      if (!oldInp || !newInp) return;
      const oldVal = parseInt(oldInp.value, 10);
      const newVal = parseInt(newInp.value, 10);
      const activeIdx = this.currentState.activeCardIdx || 0;
      const c = (this.currentState.cards && this.currentState.cards[activeIdx]) || {};
      c.pin = c.pin || 1234;

      this.closeActionModal();

      if (oldVal === c.pin && !isNaN(newVal) && newInp.value.length === 4) {
        c.pin = newVal;
        this.showPhoneToast("✅ PIN muvaffaqiyatli o'zgartirildi: " + newVal);
      } else {
        this.showPhoneToast("❌ Eski PIN noto'g'ri yoki yangi PIN 4 xonali emas!");
      }
    },

    toggleCardLock(forceLock = null) {
      const activeIdx = this.currentState.activeCardIdx || 0;
      const c = (this.currentState.cards && this.currentState.cards[activeIdx]) || {};
      c.isLocked = (forceLock !== null) ? forceLock : !c.isLocked;
      c.txList = c.txList || [];
      if (c.isLocked) {
        c.txList.unshift({
          type: "lock",
          icon: "🔒",
          title: "Karta bloklandi",
          sub: "lockCard() chaqirildi",
          amountStr: "Blok",
          isPositive: false
        });
        this.render(true);
        this.showPhoneToast("🔒 Karta bloklandi! Endi to'lovlar va pul yechish to'xtatildi.");
      } else {
        c.txList.unshift({
          type: "unlock",
          icon: "🔓",
          title: "Blokdan chiqarildi",
          sub: "unlockCard() chaqirildi",
          amountStr: "Faol",
          isPositive: true
        });
        this.render(true);
        this.showPhoneToast("🔓 Karta blokdan chiqarildi! Operatsiyalar qayta faollashdi.");
      }
    },

    testMethodClick(methodName) {
      const lower = methodName.toLowerCase();
      const activeIdx = this.currentState.activeCardIdx || 0;
      const c = (this.currentState.cards && this.currentState.cards[activeIdx]) || {};

      if (lower === 'getbalance') {
        this.revealField('balance');
        return;
      }
      if (lower === 'getcardholder' || lower === 'getholder') {
        this.revealField('holder');
        return;
      }
      if (lower === 'getcardnumber' || lower === 'getnumber') {
        this.revealField('cardNumber');
        return;
      }
      if (lower === 'getexpirydate' || lower === 'getexpiredate') {
        this.revealField('expiryDate');
        return;
      }
      if (lower === 'getcvv' || lower === 'getcvc') {
        this.revealField('cvv');
        return;
      }
      if (lower === 'getcardtype' || lower === 'getbrand') {
        this.revealField('cardType');
        return;
      }
      if (lower === 'deposit') {
        this.openActionModal('deposit');
        return;
      }
      if (lower === 'withdraw') {
        this.openActionModal('withdraw');
        return;
      }
      if (lower === 'lockcard' || lower === 'lock') {
        this.toggleCardLock();
        return;
      }
      if (lower === 'unlockcard' || lower === 'unlock') {
        this.toggleCardLock(false);
        return;
      }
      if (lower === 'verifypin') {
        this.openPinModal('verify');
        return;
      }
      if (lower === 'changepin') {
        this.openPinModal('change');
        return;
      }

      this.showPhoneToast(`⚡ ${methodName}() metodi chaqirildi!`);
    },

    showPhoneToast(message) {
      if (typeof document === "undefined") return;
      let toastEl = document.getElementById("phoneActionToast");
      if (!toastEl) {
        const body = document.querySelector(".phone-screen-body");
        if (body) {
          toastEl = document.createElement("div");
          toastEl.id = "phoneActionToast";
          toastEl.className = "phone-action-toast";
          body.appendChild(toastEl);
        }
      }
      if (toastEl) {
        toastEl.textContent = message;
        if (toastEl.classList) {
          toastEl.classList.remove("show");
          void toastEl.offsetWidth; // trigger reflow
          toastEl.classList.add("show");
        }
        clearTimeout(this._toastTimer);
        this._toastTimer = setTimeout(() => {
          if (toastEl && toastEl.classList) toastEl.classList.remove("show");
        }, 3000);
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

      // 1. Instantiation matching: new BankCard(...)
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
            brand: "",
            balance: 0,
            initialBalance: 0,
            holder: "",
            cardNumber: "",
            expiryDate: "",
            cvv: "",
            lastTxMsg: "",
            isLocked: false,
            txList: []
          };

          // Parse constructor arguments
          const strMatches = Array.from(argsStr.matchAll(/["']([^"']+)["']/g)).map(x => x[1]);
          strMatches.forEach(str => {
            const cleanDigits = str.replace(/[^0-9]/g, "");
            if (cleanDigits.length === 16) {
              card.cardNumber = cleanDigits.replace(/(.{4})/g, "$1 ").trim();
            } else if (/^(0[1-9]|1[0-2])\/[0-9]{2}$/.test(str)) {
              card.expiryDate = str;
            } else if (/^[0-9]{3}$/.test(str)) {
              card.cvv = str;
            } else if (/^(UZCARD|HUMO|VISA|MASTERCARD)$/i.test(str)) {
              card.brand = str.toUpperCase();
            } else if (/[a-zA-Z]/.test(str)) {
              card.holder = str.toUpperCase();
            }
          });

          const argsWithoutStrings = argsStr.replace(/"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/g, "");
          const numMatches = Array.from(argsWithoutStrings.matchAll(/([0-9]+(?:\.[0-9]+)?)/g)).map(x => parseFloat(x[1]));
          if (numMatches.length > 0) {
            card.balance = numMatches[0];
            card.initialBalance = numMatches[0];
            card.txList.push({
              type: "initial",
              icon: "🏦",
              title: "Hisob ochilishi",
              sub: "Boshlang'ich mablag'",
              amountStr: "+" + numMatches[0].toLocaleString() + " UZS",
              isPositive: true
            });
          }

          cards.push(card);
        }
      }

      // If no explicit variable assignment found, but "new BankCard(...)" exists:
      if (cards.length === 0) {
        const genericNew = /new\s+(BankCard|GoldCard|PlatinumCard|Card|SecureCard|LimitedCard|CashbackCard|VipCard)\s*\(([^)]*)\)/.exec(code);
        if (genericNew) {
          const constructedType = genericNew[1];
          const argsStr = genericNew[2] || "";
          const card = {
            varName: "card",
            cardType: constructedType,
            brand: "",
            balance: 0,
            initialBalance: 0,
            holder: "",
            cardNumber: "",
            expiryDate: "",
            cvv: "",
            lastTxMsg: "",
            isLocked: false,
            txList: []
          };
          const strMatches = Array.from(argsStr.matchAll(/["']([^"']+)["']/g)).map(x => x[1]);
          strMatches.forEach(str => {
            const cleanDigits = str.replace(/[^0-9]/g, "");
            if (cleanDigits.length === 16) {
              card.cardNumber = cleanDigits.replace(/(.{4})/g, "$1 ").trim();
            } else if (/^(0[1-9]|1[0-2])\/[0-9]{2}$/.test(str)) {
              card.expiryDate = str;
            } else if (/^[0-9]{3}$/.test(str)) {
              card.cvv = str;
            } else if (/^(UZCARD|HUMO|VISA|MASTERCARD)$/i.test(str)) {
              card.brand = str.toUpperCase();
            } else if (/[a-zA-Z]/.test(str)) {
              card.holder = str.toUpperCase();
            }
          });
          const argsWithoutStrings = argsStr.replace(/"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/g, "");
          const numMatches = Array.from(argsWithoutStrings.matchAll(/([0-9]+(?:\.[0-9]+)?)/g)).map(x => parseFloat(x[1]));
          if (numMatches.length > 0) {
            card.balance = numMatches[0];
            card.initialBalance = numMatches[0];
            card.txList.push({
              type: "initial",
              icon: "🏦",
              title: "Hisob ochilishi",
              sub: "Boshlang'ich mablag'",
              amountStr: "+" + numMatches[0].toLocaleString() + " UZS",
              isPositive: true
            });
          }
          cards.push(card);
          seenVars.add("card");
        }
      }

      // 2. Sequential operations and property assignments on each card
      cards.forEach(card => {
        const v = card.varName;

        // Check holder assignment
        const holderAssign = new RegExp(v + "\\.(?:setCardHolder|setHolder)\\s*\\(\\s*['\"]([^'\"]+)['\"]\\s*\\)|" + v + "\\.cardHolder\\s*=\\s*['\"]([^'\"]+)['\"]");
        const hm = code.match(holderAssign);
        if (hm) {
          card.holder = (hm[1] || hm[2]).toUpperCase();
        }

        // Check card number assignment
        const numAssign = new RegExp(v + "\\.setCardNumber\\s*\\(\\s*['\"]([^'\"]+)['\"]\\s*\\)|" + v + "\\.cardNumber\\s*=\\s*['\"]([^'\"]+)['\"]");
        const nm = code.match(numAssign);
        if (nm) {
          const clean = (nm[1] || nm[2]).replace(/[^0-9]/g, "");
          card.cardNumber = clean.replace(/(.{4})/g, "$1 ").trim();
        }

        // Check expiry date assignment
        const expAssign = new RegExp(v + "\\.set(?:ExpiryDate|ExpireDate)\\s*\\(\\s*['\"]([^'\"]+)['\"]\\s*\\)|" + v + "\\.(?:expiryDate|expireDate)\\s*=\\s*['\"]([^'\"]+)['\"]");
        const em = code.match(expAssign);
        if (em) {
          card.expiryDate = em[1] || em[2];
        }

        // Check CVV assignment
        const cvvAssign = new RegExp(v + "\\.set(?:Cvv|Cvc)\\s*\\(\\s*['\"]?([0-9]{3})['\"]?\\s*\\)|" + v + "\\.(?:cvv|cvc)\\s*=\\s*['\"]?([0-9]{3})['\"]?");
        const cm = code.match(cvvAssign);
        if (cm) {
          card.cvv = cm[1] || cm[2];
        }

        // Check brand assignment
        const brandAssign = new RegExp(v + "\\.set(?:Brand|Network)\\s*\\(\\s*['\"]([^'\"]+)['\"]\\s*\\)|" + v + "\\.(?:brand|network)\\s*=\\s*['\"]([^'\"]+)['\"]");
        const bm = code.match(brandAssign);
        if (bm) {
          card.brand = (bm[1] || bm[2]).toUpperCase();
        }

        // Check lock/unlock
        const lockRegex = new RegExp(v + "\\.lock(?:Card)?\\s*\\(\\s*\\)");
        const unlockRegex = new RegExp(v + "\\.unlock(?:Card)?\\s*\\(\\s*\\)");
        if (lockRegex.test(code)) card.isLocked = true;
        if (unlockRegex.test(code)) card.isLocked = false;

        // Sequential operations: deposit, withdraw, spend called in code
        const opRegex = new RegExp(v + "\\.(deposit|withdraw|spend|pay)\\s*\\(\\s*([0-9]+(?:\\.[0-9]+)?)\\s*\\)", "g");
        let opM;
        while ((opM = opRegex.exec(code)) !== null) {
          const op = opM[1];
          const amt = parseFloat(opM[2]);

          if (op === "deposit" && amt > 0) {
            card.balance += amt;
            card.lastTxMsg = `+${amt.toLocaleString()} UZS Depozit qilindi!`;
            card.txList.unshift({
              type: "deposit",
              icon: "💳",
              title: "Pul kirim (deposit)",
              sub: "Muvaffaqiyatli",
              amountStr: "+" + amt.toLocaleString() + " UZS",
              isPositive: true
            });
          } else if (op === "withdraw") {
            if (!card.isLocked && amt > 0 && amt <= card.balance) {
              card.balance -= amt;
              card.lastTxMsg = `-${amt.toLocaleString()} UZS Yechildi!`;
              card.txList.unshift({
                type: "withdraw",
                icon: "🏧",
                title: "Pul yechish (withdraw)",
                sub: "Muvaffaqiyatli",
                amountStr: "-" + amt.toLocaleString() + " UZS",
                isPositive: false
              });
            } else if (card.isLocked) {
              card.lastTxMsg = "🚫 Karta bloklangan!";
            } else {
              card.lastTxMsg = "⚠️ Mablag' yetarli emas!";
            }
          } else if (op === "spend" || op === "pay") {
            if (!card.isLocked && amt > 0 && amt <= card.balance) {
              card.balance -= amt;
              card.lastTxMsg = `-${amt.toLocaleString()} UZS Xarid qilindi!`;
              card.txList.unshift({
                type: "spend",
                icon: "🛒",
                title: "Xarid to'lovi",
                sub: "Muvaffaqiyatli",
                amountStr: "-" + amt.toLocaleString() + " UZS",
                isPositive: false
              });
            }
          }
        }
      });

      // 3. Fallbacks directly from general code if not explicitly set on card
      cards.forEach(card => {
        if (!card.holder) {
          const nameM = code.match(/(?:cardHolder|holder|name|mijoz|owner)\\s*=\\s*['\"]([^'\"]+)['\"]/i) ||
                        code.match(/['\"]([A-Z][a-z]+(?:\\s+[A-Z][a-z]+)+)['\"]/);
          if (nameM && !nameM[1].toLowerCase().includes("bank") && !nameM[1].toLowerCase().includes("uzs")) {
            card.holder = nameM[1].toUpperCase();
          }
        }
        if (!card.cardNumber) {
          const cardNumMatch = code.match(/['\"]?((?:8600|9860|4[0-9]{3}|5[1-5][0-9]{2})\\s*(?:[0-9]{4}\\s*){3}[0-9]{4}|(?:8600|9860|4[0-9]{3}|5[1-5][0-9]{2})[0-9]{12})['\"]?/);
          if (cardNumMatch) {
            const clean = cardNumMatch[1].replace(/[^0-9]/g, "");
            card.cardNumber = clean.replace(/(.{4})/g, "$1 ").trim();
          }
        }
        if (!card.expiryDate) {
          const expM = code.match(/['\"](0[1-9]|1[0-2])\/([2-3][0-9])['\"]/);
          if (expM) {
            card.expiryDate = expM[1] + "/" + expM[2];
          } else {
            // Default agar kiritilmagan bo'lsa
            card.expiryDate = "12/28";
          }
        }
        if (!card.cvv) {
          const cvvM = code.match(/(?:cvv|cvc)\\s*=\\s*['\"]?([0-9]{3})['\"]?/i);
          if (cvvM) {
            card.cvv = cvvM[1];
          } else {
            // Default agar kiritilmagan bo'lsa
            card.cvv = "777";
          }
        }
        if (!card.brand) {
          const brandM = code.match(/\\b(UZCARD|HUMO|VISA|MASTERCARD)\\b/i);
          if (brandM) {
            card.brand = brandM[1].toUpperCase();
          } else if (card.cardNumber.startsWith("8600")) {
            card.brand = "UZCARD";
          } else if (card.cardNumber.startsWith("9860")) {
            card.brand = "HUMO";
          } else if (card.cardNumber.startsWith("4")) {
            card.brand = "VISA";
          } else if (card.cardNumber.startsWith("5")) {
            card.brand = "MASTERCARD";
          } else {
            card.brand = "UZCARD";
          }
        }
      });

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
      const hasGetBalance = hasMethod("getbalance");
      const hasHolder = hasMethod("getcardholder") || hasMethod("getholder");
      const hasNumber = hasMethod("getcardnumber") || hasMethod("getnumber");
      const hasExp = hasMethod("getexpirydate") || hasMethod("getexpiredate");
      const hasCvv = hasMethod("getcvv") || hasMethod("getcvc");
      const hasPin = hasMethod("verifypin") || hasMethod("changepin");
      const hasLock = hasMethod("lockcard") || hasMethod("lock") || hasMethod("unlockcard") || hasMethod("unlock");
      const chId = (this.currentChallenge && this.currentChallenge.id) || 1;

      const primaryNames = ['deposit', 'withdraw', 'getbalance', 'getcardholder', 'getholder', 'getcardnumber', 'getnumber', 'getexpirydate', 'getexpiredate', 'getcvv', 'getcvc', 'getcardtype', 'getbrand', 'lockcard', 'lock', 'unlockcard', 'unlock', 'verifypin', 'changepin'];
      const otherMethods = declared.filter(m => !primaryNames.includes(m.name.toLowerCase()));
      const txList = c.txList || [];

      // INDEPENDENT PER-FIELD MASKING & REVEAL (Faqat o'zining getteri orqali ochiladi!)
      const rev = s.revealed || {};
      const isNumRev = Boolean(rev.cardNumber);
      const isHolderRev = Boolean(rev.holder);
      const isExpRev = Boolean(rev.expiryDate);
      const isCvvRev = Boolean(rev.cvv);
      const isBalRev = Boolean(rev.balance);
      const anyRev = isNumRev || isHolderRev || isExpRev || isCvvRev || isBalRev;

      const maskedNumber = isNumRev ? (c.cardNumber || '8600 1234 5678 9012') : '•••• •••• •••• ••••';
      const maskedHolder = isHolderRev ? (c.holder || 'ALI VALIYEV') : '•••••••• ••••••••';
      const maskedExp = isExpRev ? (c.expiryDate || '12/28') : '••/••';
      const maskedCvv = isCvvRev ? (c.cvv || '777') : '•••';
      const maskedBal = isBalRev ? `${Number(c.balance).toLocaleString()} UZS` : '•••••• UZS';

      return `
        <div class="sim-scene card-scene animate-card-appear">
          <!-- PHONE ACTION TOAST FEEDBACK -->
          <div id="phoneActionToast" class="phone-action-toast"></div>

          ${cards.length > 1 ? `
            <div class="multi-card-bar">
              <span class="multi-card-lbl">KARTALAR (${cards.length} ta):</span>
              <div class="multi-card-pills">
                ${cards.map((item, idx) => `
                  <button type="button" class="card-pill-btn ${idx === activeIdx ? 'active' : ''}" onclick="window.SimulatorEngine.selectCard(${idx})">
                    💳 ${item.varName} • ${isBalRev ? Number(item.balance).toLocaleString() + ' UZS' : '•••• UZS'}
                  </button>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- SMARTPHONE CARD GRAPHIC -->
          <div class="humo-card card-${(c.brand || 'uzcard').toLowerCase()} ${c.isLocked ? 'card-locked' : ''} ${anyRev ? 'card-revealed-glow' : 'card-masked-mode'}" onclick="window.SimulatorEngine.toggleCardReveal()" title="Karta ustiga bosib barcha ma'lumotlarni ochish/yashirish">
            <div class="humo-top">
              <div style="display:flex; align-items:center; gap:6px;">
                <span class="humo-logo">${c.brand || 'UZCARD'}</span>
                <span class="card-var-badge">${c.varName || 'card'}</span>
                ${c.isLocked ? '<span class="card-lock-badge">🔒 BLOKLANGAN</span>' : ''}
              </div>
              <div class="humo-top-right">
                <span class="card-privacy-badge ${anyRev ? 'revealed' : 'masked'}">${anyRev ? '👁️ Ochiq' : '🙈 Maxfiy'}</span>
                <span class="contactless-wave">📶 </span>
                <span class="chip-icon">🎴</span>
              </div>
            </div>

            <!-- 16 xonali karta raqami (Faqat getCardNumber orqali ochiladi) -->
            <div class="card-num-row" onclick="event.stopPropagation(); window.SimulatorEngine.testMethodClick('getCardNumber')" title="getCardNumber() orqali karta raqamini ko'rish">
              <span class="card-num-full ${isNumRev ? 'field-revealed-glow' : 'card-masked-text'}">${maskedNumber}</span>
            </div>

            <!-- Amal qilish muddati va CVV (Faqat getExpiryDate va getCvv orqali ochiladi) -->
            <div class="card-mid-row">
              <div class="card-exp-box" onclick="event.stopPropagation(); window.SimulatorEngine.testMethodClick('getExpiryDate')" title="getExpiryDate() orqali amal qilish muddatini ko'rish">
                <span class="card-tiny-lbl">VALID THRU</span>
                <span class="card-exp-val ${isExpRev ? 'field-revealed-glow' : 'card-masked-text'}">${maskedExp}</span>
              </div>
              <div class="card-cvv-box" onclick="event.stopPropagation(); window.SimulatorEngine.testMethodClick('getCvv')" title="getCvv() orqali xavfsizlik kodini ko'rish">
                <span class="card-tiny-lbl">CVV/CVC</span>
                <span class="card-cvv-val ${isCvvRev ? 'field-revealed-glow' : 'card-masked-text'}">${maskedCvv}</span>
              </div>
            </div>

            <!-- Karta egasi va Balans (Faqat getCardHolder va getBalance orqali ochiladi) -->
            <div class="card-bottom">
              <div class="card-holder-box" onclick="event.stopPropagation(); window.SimulatorEngine.testMethodClick('getCardHolder')" title="getCardHolder() orqali karta egasini ko'rish">
                <div class="card-lbl">KARTA EGASI</div>
                <div class="card-val card-val-named ${isHolderRev ? 'field-revealed-glow' : 'card-masked-text'}">${maskedHolder}</div>
              </div>
              <div class="card-bal-box" style="text-align:right;" onclick="event.stopPropagation(); window.SimulatorEngine.testMethodClick('getBalance')" title="getBalance() orqali faqat balansni ko'rish">
                <div class="card-lbl">BALANS</div>
                <div class="card-bal ${isBalRev ? 'field-revealed-glow' : 'card-masked-text'}">${maskedBal}</div>
              </div>
            </div>
          </div>

          <!-- KICHIK IXCHAM TO'RTBURCHAK METOD TUGMALARI -->
          <div class="phone-methods-box">
            <div class="pmb-title-row">
              <span class="pmb-title">⚡ METODLAR (ILOVAGA ULANGAN)</span>
              <span class="pmb-count">${declared.length} ta</span>
            </div>
            <div class="pmb-grid">
              <!-- getBalance Button: ONLY REVEALS BALANCE -->
              <button type="button" class="pmb-btn ${hasGetBalance ? 'active btn-revelator' : 'locked'}" onclick="window.SimulatorEngine.testMethodClick('getBalance')" title="getBalance() orqali faqat balansni ko'rish">
                <span class="pmb-icon">${isBalRev ? '👁️' : '🙈'}</span>
                <span class="pmb-lbl">getBalance</span>
                <span class="pmb-dot ${hasGetBalance ? 'dot-active' : 'dot-locked'}">${hasGetBalance ? '✅' : '🔒'}</span>
              </button>

              <!-- getCardHolder Button: ONLY REVEALS CARD HOLDER -->
              <button type="button" class="pmb-btn ${hasHolder ? 'active' : 'locked'}" onclick="window.SimulatorEngine.testMethodClick('getCardHolder')" title="getCardHolder() orqali faqat karta egasini ko'rish">
                <span class="pmb-icon">👤</span>
                <span class="pmb-lbl">getHolder</span>
                <span class="pmb-dot ${hasHolder ? 'dot-active' : 'dot-locked'}">${hasHolder ? '✅' : '🔒'}</span>
              </button>

              <!-- getCardNumber Button: ONLY REVEALS CARD NUMBER -->
              <button type="button" class="pmb-btn ${hasNumber ? 'active' : 'locked'}" onclick="window.SimulatorEngine.testMethodClick('getCardNumber')" title="getCardNumber() orqali faqat karta raqamini ko'rish">
                <span class="pmb-icon">💳</span>
                <span class="pmb-lbl">getNumber</span>
                <span class="pmb-dot ${hasNumber ? 'dot-active' : 'dot-locked'}">${hasNumber ? '✅' : '🔒'}</span>
              </button>

              <!-- getExpiryDate Button: ONLY REVEALS EXPIRY -->
              <button type="button" class="pmb-btn ${hasExp ? 'active' : 'locked'}" onclick="window.SimulatorEngine.testMethodClick('getExpiryDate')" title="getExpiryDate() orqali muddatni ko'rish">
                <span class="pmb-icon">📅</span>
                <span class="pmb-lbl">getExpiry</span>
                <span class="pmb-dot ${hasExp ? 'dot-active' : 'dot-locked'}">${hasExp ? '✅' : '🔒'}</span>
              </button>

              <!-- getCvv Button: ONLY REVEALS CVV -->
              <button type="button" class="pmb-btn ${hasCvv ? 'active' : 'locked'}" onclick="window.SimulatorEngine.testMethodClick('getCvv')" title="getCvv() orqali CVV kodini ko'rish">
                <span class="pmb-icon">🔒</span>
                <span class="pmb-lbl">getCvv</span>
                <span class="pmb-dot ${hasCvv ? 'dot-active' : 'dot-locked'}">${hasCvv ? '✅' : '🔒'}</span>
              </button>

              <!-- Deposit Button: Interactive! -->
              <button type="button" class="pmb-btn ${hasDeposit ? 'active' : 'locked'}" onclick="window.SimulatorEngine.testMethodClick('deposit')" title="deposit(amount) orqali pul kiritish">
                <span class="pmb-icon">💰</span>
                <span class="pmb-lbl">deposit</span>
                <span class="pmb-dot ${hasDeposit ? 'dot-active' : 'dot-locked'}">${hasDeposit ? '✅' : '🔒'}</span>
              </button>

              <!-- Withdraw Button: Interactive! -->
              <button type="button" class="pmb-btn ${hasWithdraw ? 'active' : 'locked'}" onclick="window.SimulatorEngine.testMethodClick('withdraw')" title="withdraw(amount) orqali pul yechish">
                <span class="pmb-icon">🏧</span>
                <span class="pmb-lbl">withdraw</span>
                <span class="pmb-dot ${hasWithdraw ? 'dot-active' : 'dot-locked'}">${hasWithdraw ? '✅' : '🔒'}</span>
              </button>

              <!-- verifyPin Button -->
              ${(hasPin || chId >= 3) ? `
                <button type="button" class="pmb-btn ${hasPin ? 'active' : 'locked'}" onclick="window.SimulatorEngine.testMethodClick('verifyPin')" title="verifyPin(pin) orqali PIN kodni tekshirish">
                  <span class="pmb-icon">🔑</span>
                  <span class="pmb-lbl">verifyPin</span>
                  <span class="pmb-dot ${hasPin ? 'dot-active' : 'dot-locked'}">${hasPin ? '✅' : '🔒'}</span>
                </button>
              ` : ''}

              <!-- Lock Button -->
              ${(hasLock || chId >= 6) ? `
                <button type="button" class="pmb-btn ${hasLock ? 'active' : 'locked'}" onclick="window.SimulatorEngine.testMethodClick('lockCard')" title="lockCard() orqali kartani qulflash/ochish">
                  <span class="pmb-icon">🔒</span>
                  <span class="pmb-lbl">${c.isLocked ? 'unlock' : 'lockCard'}</span>
                  <span class="pmb-dot ${hasLock ? 'dot-active' : 'dot-locked'}">${hasLock ? '✅' : '🔒'}</span>
                </button>
              ` : ''}

              <!-- Other Custom Methods -->
              ${otherMethods.map(m => `
                <button type="button" class="pmb-btn active" onclick="window.SimulatorEngine.testMethodClick('${m.name}')" title="${m.name}() metodi">
                  <span class="pmb-icon">⚡</span>
                  <span class="pmb-lbl">${m.name}</span>
                  <span class="pmb-dot dot-active">✅</span>
                </button>
              `).join('')}
            </div>
          </div>

          <!-- TRANZAKSIYALAR TARIXI (TRANSACTION HISTORY) -->
          <div class="phone-tx-section">
            <div class="tx-header">
              <div class="tx-title-group">
                <span class="tx-title-icon">📜</span>
                <span class="tx-title">Tranzaksiyalar Tarixi</span>
              </div>
              <span class="tx-count-pill">${txList.length} ta operatsiya</span>
            </div>

            <div class="tx-list">
              ${txList.length > 0 ? txList.map(tx => `
                <div class="tx-row ${tx.type}">
                  <div class="tx-left">
                    <span class="tx-type-icon">${tx.icon}</span>
                    <div class="tx-meta">
                      <span class="tx-name">${tx.title}</span>
                      <span class="tx-sub">${tx.sub}</span>
                    </div>
                  </div>
                  <span class="tx-sum ${tx.isPositive ? 'pos' : 'neg'}">${isBalRev ? tx.amountStr : '•••• UZS'}</span>
                </div>
              `).join('') : `
                <div class="tx-empty">
                  <span class="tx-empty-icon">📂</span>
                  <span>Hozircha tranzaksiyalar amalga oshirilmadi</span>
                </div>
              `}
            </div>
          </div>

          <!-- HEAP MEMORY INSPECTOR -->
          <div class="live-inspect-box">
            <span>🔍 Obyekt Xotirasi (Heap):</span>
            <code>${c.cardType || 'BankCard'}@heap[${c.varName}] { cardNumber: "${c.cardNumber || '8600 1234 5678 9012'}", cardHolder: "${c.holder || 'Ali Valiyev'}", balance: ${c.balance}.0, expiryDate: "${c.expiryDate || '12/28'}", cvv: "${c.cvv || '777'}", isLocked: ${c.isLocked ? 'true' : 'false'} };</code>
          </div>

          <!-- INTERACTIVE ACTION MODAL (DEPOSIT, WITHDRAW & PIN) -->
          <div id="phoneActionModal" class="phone-action-modal" style="display:none;"></div>
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
