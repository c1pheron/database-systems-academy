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
            holder: "SARDOR ALIYEV",
            cardNumber: "9860 3201 4589 7721",
            expiryDate: "12/28",
            cvv: "777",
            balance: 50000,
            deposited: 0,
            withdrawn: 0,
            lastTxMsg: ""
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
          const hasCardInst = /\bnew\s+(BankCard|GoldCard|PlatinumCard|Card|SecureCard|LimitedCard)\b/.test(code);
          this.currentState.hasObject = hasCardInst;

          const balM = code.match(/new\s+[A-Za-z0-9_]+\s*\(\s*([0-9]+(?:\.[0-9]+)?)/);
          if (balM) {
            this.currentState.balance = parseFloat(balM[1]);
          }

          const holderM = code.match(/new\s+[A-Za-z0-9_]+\s*\(\s*["']([^"']+)["']/);
          if (holderM) {
            this.currentState.holder = holderM[1].toUpperCase();
          }

          if (code.includes(".deposit(")) {
            const depM = code.match(/\.deposit\s*\(\s*([0-9]+(?:\.[0-9]+)?)/);
            const dep = depM ? parseFloat(depM[1]) : 25000;
            this.currentState.deposited = dep;
            this.currentState.balance += dep;
            this.currentState.lastTxMsg = `+${dep.toLocaleString()} UZS Depozit qilindi!`;
          } else if (code.includes(".withdraw(")) {
            const wM = code.match(/\.withdraw\s*\(\s*([0-9]+(?:\.[0-9]+)?)/);
            const w = wM ? parseFloat(wM[1]) : 30000;
            this.currentState.withdrawn = w;
            this.currentState.balance = Math.max(0, this.currentState.balance - w);
            this.currentState.lastTxMsg = `-${w.toLocaleString()} UZS Yechildi!`;
          }
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

    renderCard() {
      const s = this.currentState;
      if (!s.hasObject) {
        return `
          <div class="sim-scene card-scene">
            <div class="empty-card-box">
              <div class="dashed-card-frame">
                <span class="empty-icon">🪪</span>
                <span class="empty-title">Karta Hali Ochilmagan</span>
                <span class="empty-desc">Ilovada karta ko'rinishi uchun kodingizda yangi obyekt yarating:</span>
                <div class="empty-hint-code">BankCard card = new BankCard(50000.0);</div>
              </div>
            </div>
            <div class="live-inspect-box">
              <span>🔍 Obyekt Xotirasi:</span>
              <code>null (heap xotirada karta obyekti mavjud emas)</code>
            </div>
          </div>
        `;
      }

      return `
        <div class="sim-scene card-scene animate-card-appear">
          <div class="humo-card">
            <div class="humo-top">
              <span class="humo-logo">HUMO</span>
              <div class="humo-top-right">
                <span class="contactless-wave">📶</span>
                <span class="chip-icon">🪪</span>
              </div>
            </div>

            <!-- To'liq 16 xonali karta raqami -->
            <div class="card-num-row">
              <span class="card-num-full">${s.cardNumber || '9860 3201 4589 7721'}</span>
            </div>

            <!-- Amal qilish muddati va CVV -->
            <div class="card-mid-row">
              <div class="card-exp-box">
                <span class="card-tiny-lbl">VALID THRU</span>
                <span class="card-exp-val">${s.expiryDate || '12/28'}</span>
              </div>
              <div class="card-cvv-box">
                <span class="card-tiny-lbl">CVV/CVC</span>
                <span class="card-cvv-val">${s.cvv || '777'}</span>
              </div>
            </div>

            <!-- Karta egasi va Balans -->
            <div class="card-bottom">
              <div class="card-holder-box">
                <div class="card-lbl">KARTA EGASI</div>
                <div class="card-val">${s.holder || 'SARDOR ALIYEV'}</div>
              </div>
              <div class="card-bal-box" style="text-align:right;">
                <div class="card-lbl">BALANS</div>
                <div class="card-bal">${s.balance.toLocaleString()} UZS</div>
              </div>
            </div>
          </div>

          ${s.lastTxMsg ? `<div class="tx-badge">${s.lastTxMsg}</div>` : ''}

          <div class="live-inspect-box">
            <span>🔍 Obyekt Xotirasi:</span>
            <code>BankCard@heap { balance: ${s.balance}.0, holder: "${s.holder || 'SARDOR ALIYEV'}", exp: "${s.expiryDate || '12/28'}", cvv: ${s.cvv || 777} };</code>
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
