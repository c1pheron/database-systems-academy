/**
 * ACADEMY DATABASE SYSTEMS (MODULE) — WEEK 1 & 2
 * Visual Draw.io-Style Interactive EER Diagram Canvas Engine
 * 
 * Features:
 * - Left "Relationships of entities" shape palette (Entity, Weak Entity, Diamond, Connectors)
 * - Pure solid black canvas (NO grid squares)
 * - In-place title & attribute inline editing (zero event capture bugs)
 * - Guaranteed one-click connecting between entities via [🔗 Ulash] button or palette
 * - Custom typed or selected multiplicities (1..1, 0..1, 1..*, 0..*)
 * - Weak Entities (double-border) and Subclass Hierarchies ({Mandatory/Optional, Or/And})
 * - Real-time Export to .drawio XML and Evaluation Model
 */

class EERCanvas {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;

    this.entities = [];
    this.relationships = [];
    this.subclasses = [];

    this.connectMode = false;
    this.connectSource = null;
    this.activeConnectorPreset = null; // { m1: "1..1", m2: "1..*" }

    this.draggedEntity = null;
    this.dragOffsetX = 0;
    this.dragOffsetY = 0;

    this.nextId = 1;

    this.setupDOM();
    this.bindEvents();
  }

  setupDOM() {
    this.container.innerHTML = `
      <div class="eer-board-wrap">
        <!-- TOP TOOLBAR -->
        <div class="eer-toolbar">
          <div class="tool-group">
            <span class="toolbar-brand-pill">📐 draw.io EER Atelier</span>
            <button class="tool-btn" id="eerBtnConnectMode" title="Ulam chizig'i tortish rejimini yoqish">
              <span class="icon">🔗</span> Connect Link
            </button>
            <button class="tool-btn" id="eerBtnSubclassModal" title="Superklass va subklasslar bog'lamini ochish">
              <span class="icon">⛛</span> Subclass Hierarchy
            </button>
          </div>

          <div class="tool-group right">
            <button class="tool-btn" id="eerBtnTemplate" title="Mijozning tavsiya qilgan dastlabki shablonini yuklash">
              <span class="icon">📋</span> Template
            </button>
            <button class="tool-btn" id="eerBtnAutoLayout" title="Entitiylarni tekislash">
              <span class="icon">📐</span> Auto Layout
            </button>
            <button class="tool-btn" id="eerBtnClear" title="Clear Canvas">
              <span class="icon">🧹</span> Clear
            </button>
            <button class="tool-btn gold" id="eerBtnExportDrawio" title="Draw.io formatidagi XML faylni yuklab olish">
              <span class="icon">💾</span> .drawio XML
            </button>
          </div>
        </div>

        <!-- MAIN SPLIT WORKSPACE: SHAPE PALETTE (LEFT) + CANVAS (CENTER) -->
        <div class="eer-workspace-split">
          
          <!-- LEFT SHAPE PALETTE (DRAW.IO SCREENSHOT 2) -->
          <aside class="eer-sidebar-palette">
            
            <div class="palette-category">
              <div class="palette-cat-header">
                <span class="arrow">▼</span> Relationships of entities
              </div>
              <div class="palette-grid">
                
                <!-- 1. Regular Entity -->
                <button class="palette-shape-card" id="palBtnAddEntity" title="Oddiy Entitiy qo'shish">
                  <div class="shape-icon">
                    <svg width="42" height="30" viewBox="0 0 42 30">
                      <rect x="2" y="2" width="38" height="26" fill="#141417" stroke="#ffffff" stroke-width="1.5" rx="2" />
                      <line x1="2" y1="10" x2="40" y2="10" stroke="#ffffff" stroke-width="1" />
                      <line x1="6" y1="17" x2="24" y2="17" stroke="#888892" stroke-width="1" />
                      <line x1="6" y1="23" x2="18" y2="23" stroke="#888892" stroke-width="1" />
                    </svg>
                  </div>
                  <span class="shape-label">Entity</span>
                </button>

                <!-- 2. Weak Entity -->
                <button class="palette-shape-card" id="palBtnAddWeak" title="Weak Entity (Weak Entity) qo'shish">
                  <div class="shape-icon">
                    <svg width="42" height="30" viewBox="0 0 42 30">
                      <rect x="2" y="2" width="38" height="26" fill="#141417" stroke="#ffffff" stroke-width="1.2" rx="2" />
                      <rect x="5" y="5" width="32" height="20" fill="none" stroke="#ffffff" stroke-width="1.2" rx="1" />
                    </svg>
                  </div>
                  <span class="shape-label">Weak Entity</span>
                </button>

                <!-- 3. Relationship Diamond -->
                <button class="palette-shape-card" id="palBtnAddRel" title="Aloqa Rombo (Relationship) qo'shish">
                  <div class="shape-icon">
                    <svg width="42" height="30" viewBox="0 0 42 30">
                      <polygon points="21,2 39,15 21,28 3,15" fill="#141417" stroke="#ffffff" stroke-width="1.5" />
                    </svg>
                  </div>
                  <span class="shape-label">Relationship</span>
                </button>

                <!-- 4. Identifying Relationship (Double Diamond) -->
                <button class="palette-shape-card" id="palBtnAddIdentRel" title="Zaif Aloqa (Identifying Relationship)">
                  <div class="shape-icon">
                    <svg width="42" height="30" viewBox="0 0 42 30">
                      <polygon points="21,2 39,15 21,28 3,15" fill="#141417" stroke="#ffffff" stroke-width="1.2" />
                      <polygon points="21,6 34,15 21,24 8,15" fill="none" stroke="#ffffff" stroke-width="1.2" />
                    </svg>
                  </div>
                  <span class="shape-label">Identifying</span>
                </button>

                <!-- 5. Associative Entity (Association Class) -->
                <button class="palette-shape-card" id="palBtnAddAssoc" title="Assotsiativ Entitiy (Association Class)">
                  <div class="shape-icon">
                    <svg width="42" height="30" viewBox="0 0 42 30">
                      <rect x="2" y="2" width="38" height="26" fill="#141417" stroke="#ffffff" stroke-width="1.2" rx="2" />
                      <polygon points="21,5 36,15 21,25 6,15" fill="none" stroke="#ffffff" stroke-width="1.2" />
                    </svg>
                  </div>
                  <span class="shape-label">Associative</span>
                </button>

              </div>
            </div>

            <!-- Ulam Turlari & Multiplicity Connector Shortcuts -->
            <div class="palette-category">
              <div class="palette-cat-header">
                <span class="arrow">▼</span> Ulam Turlari (Connectors)
              </div>
              <div class="palette-connectors-list">
                
                <button class="conn-preset-btn active" data-m1="1..1" data-m2="1..*" title="Bir-ko'pga (1:* ota-bola)">
                  <span class="conn-badge">1 — *</span>
                  <span class="conn-text">1..1 ↔ 1..*</span>
                </button>

                <button class="conn-preset-btn" data-m1="1..1" data-m2="1..1" title="Birga-bir (1:1 ikki tomonlama majburiy)">
                  <span class="conn-badge">1 — 1</span>
                  <span class="conn-text">1..1 ↔ 1..1</span>
                </button>

                <button class="conn-preset-btn" data-m1="0..1" data-m2="1..*" title="Ixtiyoriy bir-ko'pga (0..1 — 1..*)">
                  <span class="conn-badge">0..1 — *</span>
                  <span class="conn-text">0..1 ↔ 1..*</span>
                </button>

                <button class="conn-preset-btn" data-m1="0..*" data-m2="0..*" title="Ko'pdan-ko'pga (*:*)">
                  <span class="conn-badge">* — *</span>
                  <span class="conn-text">0..* ↔ 0..*</span>
                </button>

                <button class="conn-preset-btn" data-m1="0..1" data-m2="0..1" title="Ixtiyoriy birga-bir (0..1 — 0..1)">
                  <span class="conn-badge">0..1 — 0..1</span>
                  <span class="conn-text">0..1 ↔ 0..1</span>
                </button>

                <button class="conn-preset-btn subclass-btn" id="palBtnSubclass" title="Subklass Ierarxiyasi ({Mandatory/Optional, Or/And})">
                  <span class="conn-badge">⛛ ISA</span>
                  <span class="conn-text">Subclass</span>
                </button>

              </div>
            </div>

          </aside>

          <!-- DRAFTING CANVAS VIEWPORT (PURE MATTE BLACK, NO GRID) -->
          <div class="eer-canvas-viewport" id="eerViewport">
            <svg class="eer-svg-layer" id="eerSvgLayer">
              <defs>
                <marker id="diamondMarker" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto">
                  <polygon points="6,0 12,6 6,12 0,6" fill="#000000" stroke="#ffffff" stroke-width="1.5" />
                </marker>
                <marker id="circleMarker" markerWidth="14" markerHeight="14" refX="7" refY="7" orient="auto">
                  <circle cx="7" cy="7" r="5" fill="#000000" stroke="#ffffff" stroke-width="1.5" />
                </marker>
              </defs>
              <g id="eerLinesGroup"></g>
            </svg>
            <div class="eer-entities-layer" id="eerEntitiesLayer"></div>
            
            <div class="eer-status-bar" id="eerStatusBar">
              <span class="status-msg" id="eerStatusMsg">Doska bo'sh. Chap paneldagi "Entity" shaklini bosing.</span>
              <span class="entity-count" id="eerCountMsg">0 Entitiy • 0 Aloqa</span>
            </div>
          </div>

        </div>
      </div>
    `;

    this.viewport = document.getElementById('eerViewport');
    this.svgLayer = document.getElementById('eerSvgLayer');
    this.linesGroup = document.getElementById('eerLinesGroup');
    this.entitiesLayer = document.getElementById('eerEntitiesLayer');
    this.statusMsg = document.getElementById('eerStatusMsg');
    this.countMsg = document.getElementById('eerCountMsg');

    this.setupSubclassModal();
  }

  setupSubclassModal() {
    let modal = document.getElementById('eerSubclassModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'eerSubclassModal';
      modal.className = 'eer-modal-backdrop';
      modal.style.display = 'none';
      modal.innerHTML = `
        <div class="eer-modal-card">
          <div class="modal-header">
            <h3><span>⛛</span> EER Subklass Ierarxiyasini Bog'lash</h3>
            <button class="modal-close-btn" id="eerModalClose">×</button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label>Superklass (Ota Entitiy):</label>
              <select id="eerSuperclassSelect" class="eer-input"></select>
            </div>
            <div class="form-group">
              <label>Ixtisoslashuv Cheklovi (Constraint):</label>
              <select id="eerConstraintSelect" class="eer-input">
                <option value="{Mandatory, Or}">{Mandatory, Or} — Majburiy va Kesishmaydigan (Disjoint)</option>
                <option value="{Optional, Or}">{Optional, Or} — Ixtiyoriy va Kesishmaydigan (Disjoint)</option>
                <option value="{Mandatory, And}">{Mandatory, And} — Majburiy va Kesishuvchi (Overlapping)</option>
                <option value="{Optional, And}">{Optional, And} — Ixtiyoriy va Kesishuvchi (Overlapping)</option>
              </select>
            </div>
            <div class="form-group">
              <label>Subklasslar (Quyi Entitiylar):</label>
              <div id="eerSubclassList" class="subclass-checkboxes"></div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn-modal cancel" id="eerModalCancel">Bekor Qilish</button>
            <button class="btn-modal confirm" id="eerModalConfirm">Ierarxiyani O'rnatish</button>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
    }
  }

  bindEvents() {
    // Left Palette Shape Buttons
    document.getElementById('palBtnAddEntity').onclick = () => this.addNewEntity(false);
    document.getElementById('palBtnAddWeak').onclick = () => this.addNewEntity(true);
    const palAssoc = document.getElementById('palBtnAddAssoc');
    if (palAssoc) palAssoc.onclick = () => this.addNewEntity(false, null, true);
    document.getElementById('palBtnAddRel').onclick = () => this.toggleConnectMode();
    document.getElementById('palBtnAddIdentRel').onclick = () => this.toggleConnectMode();

    // Connector Presets
    document.querySelectorAll('.conn-preset-btn[data-m1]').forEach(btn => {
      btn.onclick = () => {
        document.querySelectorAll('.conn-preset-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.activeConnectorPreset = {
          m1: btn.dataset.m1,
          m2: btn.dataset.m2
        };
        this.toggleConnectMode(true);
      };
    });

    document.getElementById('palBtnSubclass').onclick = () => this.openSubclassModal();
    document.getElementById('eerBtnSubclassModal').onclick = () => this.openSubclassModal();

    // Top Toolbar
    document.getElementById('eerBtnConnectMode').onclick = () => this.toggleConnectMode();
    document.getElementById('eerBtnAutoLayout').onclick = () => this.autoLayout();
    document.getElementById('eerBtnTemplate').onclick = () => {
      if (this.onResetRequest) this.onResetRequest();
    };
    document.getElementById('eerBtnClear').onclick = () => {
      if (confirm("Doskadagi barcha chizmalarni tozalashni xohlaysizmi?")) {
        this.clear();
      }
    };
    document.getElementById('eerBtnExportDrawio').onclick = () => this.downloadDrawioXml();

    // Viewport Pointer Events
    this.viewport.addEventListener('pointerdown', (e) => {
      if (e.target === this.viewport || e.target === this.svgLayer) {
        if (this.connectSource) {
          const oldCard = document.getElementById(this.connectSource.id);
          if (oldCard) oldCard.classList.remove('connect-selected');
          this.connectSource = null;
          this.connectMode = false;
          const btn = document.getElementById('eerBtnConnectMode');
          if (btn) btn.classList.remove('active');
          this.setStatus("Aloqa bog'lash bekor qilindi.");
        }
      }
    });
    this.viewport.addEventListener('pointermove', (e) => this.onPointerMove(e));
    this.viewport.addEventListener('pointerup', (e) => this.onPointerUp(e));

    // Modal Events
    document.getElementById('eerModalClose').onclick = () => this.closeSubclassModal();
    document.getElementById('eerModalCancel').onclick = () => this.closeSubclassModal();
    document.getElementById('eerModalConfirm').onclick = () => this.confirmSubclassModal();
  }

  setStatus(text) {
    if (this.statusMsg) this.statusMsg.textContent = text;
    if (this.countMsg) {
      this.countMsg.textContent = `${this.entities.length} Entitiy • ${this.relationships.length} Aloqa`;
    }
  }

  // ==========================================================================
  // ENTITY CREATION & IN-PLACE EDITING (100% RELIABLE)
  // ==========================================================================

  addNewEntity(isWeak = false, defaultName = null, isAssociative = false, x = null, y = null) {
    let name = defaultName;
    if (!name) {
      const base = isWeak ? "WeakEntity" : (isAssociative ? "AssocEntity" : "Entity");
      name = `${base}_${this.nextId}`;
    }

    const id = "e_" + (this.nextId++);
    const posX = x !== null ? x : 40 + ((this.entities.length * 80) % 450);
    const posY = y !== null ? y : 40 + ((this.entities.length * 60) % 240);

    const entity = {
      id,
      name,
      x: posX,
      y: posY,
      width: 180,
      isWeak: !!isWeak,
      isAssociative: !!isAssociative,
      attributes: [] // Completely empty! Student creates their own attributes!
    };

    this.entities.push(entity);
    this.renderEntityCard(entity);
    this.renderLines();
    this.setStatus(`'${name}' entitiysi yaratildi. Nomini o'zgartirish uchun nom ustiga yoki ✎ bosing.`);
    if (this.onLiveDialogue) {
      this.onLiveDialogue(`Atlas: Yangi '${name}' entitiysi doskaga qo'yildi.`);
    }

    // Auto-focus title edit immediately so user can type desired name!
    setTimeout(() => {
      const card = document.getElementById(entity.id);
      if (card) {
        const titleSpan = card.querySelector('.entity-name-text');
        if (titleSpan) this.makeEntityTitleEditable(titleSpan, entity);
      }
    }, 50);

    return entity;
  }

  renderEntityCard(ent) {
    let card = document.getElementById(ent.id);
    if (!card) {
      card = document.createElement('div');
      card.id = ent.id;
      card.className = `eer-entity-card ${ent.isWeak ? 'weak-entity' : ''}`;
      this.entitiesLayer.appendChild(card);

      // Drag listener: Ignore buttons, inputs, and text spans
      card.addEventListener('pointerdown', (e) => {
        if (e.target.closest('button') || e.target.closest('input') || e.target.closest('.entity-name-text') || e.target.closest('.attr-name-text')) {
          return;
        }
        if (this.connectMode || this.connectSource) {
          // If connect mode is active, click connects instead of dragging
          e.stopPropagation();
          this.handleConnectClick(ent);
          return;
        }
        this.onEntityPointerDown(e, ent);
      });

      // Card-level click to connect
      card.addEventListener('click', (e) => {
        if (e.target.closest('button') || e.target.closest('input')) return;
        if (this.connectMode || this.connectSource) {
          e.stopPropagation();
          this.handleConnectClick(ent);
        }
      });
    }

    card.style.left = `${ent.x}px`;
    card.style.top = `${ent.y}px`;
    card.style.width = `${ent.width}px`;

    // Render Attributes HTML
    let attrsHtml = '';
    if (!ent.attributes || ent.attributes.length === 0) {
      attrsHtml = '<div class="card-empty-hint">+ Atribut tugmasi bilan ustun qo\'shing</div>';
    } else {
      ent.attributes.forEach((attr, idx) => {
        const pkBadge = attr.isPK ? '<span class="pk-pill active" title="Birlamchi Kalit {PK}">{PK}</span>' : '';
        const ppkBadge = attr.isPPK ? '<span class="ppk-pill active" title="Qisman Kalit {PPK}">{PPK}</span>' : '';

        attrsHtml += `
          <div class="attr-row" data-idx="${idx}">
            <span class="attr-name-text" title="Nomini o'zgartirish uchun bosing" data-idx="${idx}">${attr.name}</span>
            <div class="attr-actions">
              ${pkBadge}
              ${ppkBadge}
              <button class="btn-attr-pk" title="{PK} / {PPK} kalitini almashtirish" data-action="toggle-pk" data-idx="${idx}">PK</button>
              <button class="btn-attr-del" title="Atributni o'chirish" data-action="del-attr" data-idx="${idx}">×</button>
            </div>
          </div>
        `;
      });
    }

    card.innerHTML = `
      <div class="card-header ${ent.isWeak ? 'weak-header' : ''}">
        <div class="card-title-group">
          <span class="entity-name-text" title="Nomini o'zgartirish uchun bosing">${ent.name}</span>
          <button class="btn-rename" title="Nomini o'zgartirish">✎</button>
        </div>
        <div class="card-tools">
          <button class="btn-card-tool btn-connect" title="Ulash: Boshqa entitiyga chiziq tortish">🔗 Ulash</button>
          <button class="btn-card-tool" title="Zaif entitiy (Weak double-border)" data-action="toggle-weak">${ent.isWeak ? '★' : '☆'}</button>
          <button class="btn-card-tool danger" title="Entitiyni o'chirish" data-action="del-entity">×</button>
        </div>
      </div>
      <div class="card-attrs">
        ${attrsHtml}
      </div>
      <div class="card-footer">
        <button class="btn-add-attr" data-action="add-attr">+ + Attribute</button>
      </div>
    `;

    // 1. IN-PLACE ENTITY TITLE EDITING (Enter or blur saves)
    const titleSpan = card.querySelector('.entity-name-text');
    const renameBtn = card.querySelector('.btn-rename');
    const triggerRename = (e) => {
      e.stopPropagation();
      this.makeEntityTitleEditable(titleSpan, ent);
    };
    if (titleSpan) titleSpan.onclick = triggerRename;
    if (renameBtn) renameBtn.onclick = triggerRename;
    card.querySelector('.card-header').ondblclick = triggerRename;

    // 2. CONNECT BUTTON
    card.querySelector('.btn-connect').onclick = (e) => {
      e.stopPropagation();
      this.handleConnectClick(ent);
    };

    // 3. WEAK TOGGLE
    card.querySelector('[data-action="toggle-weak"]').onclick = (e) => {
      e.stopPropagation();
      ent.isWeak = !ent.isWeak;
      card.classList.toggle('weak-entity', ent.isWeak);
      this.renderEntityCard(ent);
      this.renderLines();
      this.setStatus(`'${ent.name}' zaiflik holati: ${ent.isWeak ? 'Weak Entity (Weak, double-border)' : 'Mustaqil (Strong)'}`);
    };

    // 4. DELETE ENTITY
    card.querySelector('[data-action="del-entity"]').onclick = (e) => {
      e.stopPropagation();
      this.removeEntity(ent.id);
    };

    // 5. ADD ATTRIBUTE
    card.querySelector('[data-action="add-attr"]').onclick = (e) => {
      e.stopPropagation();
      const attrName = prompt("Yangi atribut nomini kiriting (masalan: facultyCode, studentId, price):");
      if (attrName && attrName.trim()) {
        const isFirst = (ent.attributes.length === 0);
        ent.attributes.push({
          name: attrName.trim(),
          isPK: isFirst && !ent.isWeak,
          isPPK: isFirst && ent.isWeak
        });
        this.renderEntityCard(ent);
      }
    };

    // 6. IN-PLACE ATTRIBUTE EDITING
    card.querySelectorAll('.attr-name-text').forEach(span => {
      span.onclick = (e) => {
        e.stopPropagation();
        const idx = parseInt(span.dataset.idx, 10);
        this.makeAttrTitleEditable(span, ent, idx);
      };
    });

    // 7. TOGGLE PK
    card.querySelectorAll('[data-action="toggle-pk"]').forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const idx = parseInt(btn.dataset.idx, 10);
        if (ent.attributes[idx]) {
          if (ent.isWeak) {
            ent.attributes[idx].isPPK = !ent.attributes[idx].isPPK;
            ent.attributes[idx].isPK = false;
          } else {
            ent.attributes[idx].isPK = !ent.attributes[idx].isPK;
            ent.attributes[idx].isPPK = false;
          }
          this.renderEntityCard(ent);
        }
      };
    });

    // 8. DELETE ATTRIBUTE
    card.querySelectorAll('[data-action="del-attr"]').forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const idx = parseInt(btn.dataset.idx, 10);
        ent.attributes.splice(idx, 1);
        this.renderEntityCard(ent);
      };
    });
  }

  makeEntityTitleEditable(span, ent) {
    if (!span || !span.parentNode) return;
    const currentName = ent.name;
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'entity-name-inline-input';
    input.value = currentName;

    input.onpointerdown = (e) => e.stopPropagation();
    input.onmousedown = (e) => e.stopPropagation();
    input.onclick = (e) => e.stopPropagation();

    span.replaceWith(input);
    input.focus();
    input.select();

    let committed = false;
    const commit = () => {
      if (committed) return;
      committed = true;
      const val = input.value.trim();
      if (val && val !== currentName) {
        const oldName = ent.name;
        ent.name = val;
        // Update relationships referencing this entity
        this.relationships.forEach(r => {
          if (r.fromEntityName === oldName) r.fromEntityName = ent.name;
          if (r.toEntityName === oldName) r.toEntityName = ent.name;
          if (r.entity1 === oldName) r.entity1 = ent.name;
          if (r.entity2 === oldName) r.entity2 = ent.name;
        });
        // Update subclasses
        this.subclasses.forEach(s => {
          if (s.superclass === oldName) s.superclass = ent.name;
          s.subclasses = s.subclasses.map(sub => sub === oldName ? ent.name : sub);
        });
        this.setStatus(`Entitiy nomi '${ent.name}' deb yangilandi.`);
        if (this.onLiveDialogue) {
          this.onLiveDialogue(`Atlas: '${oldName}' nomi '${ent.name}' ga o'zgartirildi.`);
        }
      }
      this.renderEntityCard(ent);
      this.renderLines();
    };

    input.onkeydown = (e) => {
      e.stopPropagation();
      if (e.key === 'Enter') {
        e.preventDefault();
        commit();
      } else if (e.key === 'Escape') {
        committed = true;
        this.renderEntityCard(ent);
      }
    };
    input.onblur = commit;
  }

  makeAttrTitleEditable(span, ent, idx) {
    if (!span || !span.parentNode || !ent.attributes[idx]) return;
    const currentName = ent.attributes[idx].name;
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'attr-name-inline-input';
    input.value = currentName;

    input.onpointerdown = (e) => e.stopPropagation();
    input.onmousedown = (e) => e.stopPropagation();
    input.onclick = (e) => e.stopPropagation();

    span.replaceWith(input);
    input.focus();
    input.select();

    let committed = false;
    const commit = () => {
      if (committed) return;
      committed = true;
      const val = input.value.trim();
      if (val && ent.attributes[idx]) {
        ent.attributes[idx].name = val;
      }
      this.renderEntityCard(ent);
    };

    input.onkeydown = (e) => {
      e.stopPropagation();
      if (e.key === 'Enter') {
        e.preventDefault();
        commit();
      } else if (e.key === 'Escape') {
        committed = true;
        this.renderEntityCard(ent);
      }
    };
    input.onblur = commit;
  }

  removeEntity(id) {
    const ent = this.entities.find(e => e.id === id);
    if (!ent) return;

    this.relationships = this.relationships.filter(r => r.fromId !== id && r.toId !== id && r.entity1 !== ent.name && r.entity2 !== ent.name);
    this.subclasses = this.subclasses.filter(s => s.superclass !== ent.name);
    this.subclasses.forEach(s => {
      s.subclasses = s.subclasses.filter(sub => sub !== ent.name);
    });

    this.entities = this.entities.filter(e => e.id !== id);
    const card = document.getElementById(id);
    if (card) card.remove();

    this.renderLines();
    this.setStatus(`'${ent.name}' entitiysi o'chirildi.`);
  }

  // ==========================================================================
  // DRAGGING LOGIC
  // ==========================================================================

  onEntityPointerDown(e, ent) {
    this.draggedEntity = ent;
    const rect = e.currentTarget.getBoundingClientRect();
    this.dragOffsetX = e.clientX - rect.left;
    this.dragOffsetY = e.clientY - rect.top;
    e.currentTarget.setPointerCapture(e.pointerId);
  }

  onPointerMove(e) {
    if (!this.draggedEntity) return;
    const vRect = this.viewport.getBoundingClientRect();
    let newX = e.clientX - vRect.left - this.dragOffsetX;
    let newY = e.clientY - vRect.top - this.dragOffsetY;

    newX = Math.max(10, Math.min(newX, this.viewport.clientWidth - 190));
    newY = Math.max(10, Math.min(newY, this.viewport.clientHeight - 130));

    this.draggedEntity.x = newX;
    this.draggedEntity.y = newY;

    const card = document.getElementById(this.draggedEntity.id);
    if (card) {
      card.style.left = `${newX}px`;
      card.style.top = `${newY}px`;
    }

    this.renderLines();
  }

  onPointerUp() {
    if (this.draggedEntity) {
      this.draggedEntity = null;
    }
  }

  // ==========================================================================
  // RELATIONSHIPS & CONNECTING (GUARANTEED RELIABLE)
  // ==========================================================================

  toggleConnectMode(forceState = null) {
    this.connectMode = (forceState !== null) ? forceState : !this.connectMode;
    const btn = document.getElementById('eerBtnConnectMode');
    if (this.connectMode) {
      if (btn) btn.classList.add('active');
      this.connectSource = null;
      this.setStatus("Aloqa bog'lash rejimi faol: 1-chi entitiyni tanlang.");
    } else {
      if (btn) btn.classList.remove('active');
      if (this.connectSource) {
        const oldCard = document.getElementById(this.connectSource.id);
        if (oldCard) oldCard.classList.remove('connect-selected');
      }
      this.connectSource = null;
      this.setStatus("Aloqa bog'lash rejimi o'chirildi.");
    }
  }

  handleConnectClick(ent) {
    const now = Date.now();
    if (this._lastConnectTime && (now - this._lastConnectTime < 250)) return;
    this._lastConnectTime = now;

    if (!this.connectSource) {
      this.connectSource = ent;
      this.setStatus(`1-chi entitiy tanlandi: "${ent.name}". Endi ulamoqchi bo'lgan 2-chi entitiyni bosing (o'ziga bossangiz rekursiv bo'ladi).`);
      if (this.onLiveDialogue) {
        this.onLiveDialogue(`Atlas: 1-chi entitiy "${ent.name}" tanlandi. 2-chi entitiyni bosing.`);
      }
      const card = document.getElementById(ent.id);
      if (card) card.classList.add('connect-selected');
    } else {
      const src = this.connectSource;
      const target = ent;

      const oldCard = document.getElementById(src.id);
      if (oldCard) oldCard.classList.remove('connect-selected');

      const presetM1 = this.activeConnectorPreset ? this.activeConnectorPreset.m1 : "1..1";
      const presetM2 = this.activeConnectorPreset ? this.activeConnectorPreset.m2 : "1..*";

      // Connect immediately without blocking browser prompt!
      this.addRelationship(src, target, "Aloqa", presetM1, presetM2);

      this.connectMode = false;
      const btn = document.getElementById('eerBtnConnectMode');
      if (btn) btn.classList.remove('active');
      this.connectSource = null;

      this.setStatus(`"${src.name}" va "${target.name}" bog'landi. Multiplicity yoki nomini o'zgartirish uchun belgilarni bosing.`);
      if (this.onLiveDialogue) {
        this.onLiveDialogue(`Mijoz: "${src.name}" va "${target.name}" o'rtasida ulam o'rnatildi!`);
      }
    }
  }

  addRelationship(e1, e2, name = "Aloqa", mult1 = "1..1", mult2 = "1..*", associationClass = false) {
    const rel = {
      id: "rel_" + (this.nextId++),
      fromId: e1.id,
      toId: e2.id,
      fromEntityName: e1.name,
      toEntityName: e2.name,
      entity1: e1.name,
      entity2: e2.name,
      name: name,
      mult1: mult1,
      mult2: mult2,
      associationClass: !!associationClass,
      attributes: associationClass ? [{ name: "attr1" }] : []
    };

    this.relationships.push(rel);
    this.renderLines();
    this.setStatus(`'${e1.name}' va '${e2.name}' o'rtasida '${name}' aloqasi o'rnatildi.`);
    return rel;
  }

  // ==========================================================================
  // SUBCLASSES HIERARCHY MODAL
  // ==========================================================================

  openSubclassModal() {
    const modal = document.getElementById('eerSubclassModal');
    const supSelect = document.getElementById('eerSuperclassSelect');
    const subList = document.getElementById('eerSubclassList');

    if (this.entities.length < 2) {
      alert("Subklass ierarxiyasi uchun kamida 2 ta entitiy kerak!");
      return;
    }

    supSelect.innerHTML = this.entities.map(e => `<option value="${e.name}">${e.name}</option>`).join('');

    subList.innerHTML = this.entities.map(e => `
      <label class="subclass-chk-label">
        <input type="checkbox" value="${e.name}" class="subclass-chk">
        <span>${e.name}</span>
      </label>
    `).join('');

    modal.style.display = 'flex';
  }

  closeSubclassModal() {
    const modal = document.getElementById('eerSubclassModal');
    if (modal) modal.style.display = 'none';
  }

  confirmSubclassModal() {
    const superclass = document.getElementById('eerSuperclassSelect').value;
    const constraint = document.getElementById('eerConstraintSelect').value;
    const checked = Array.from(document.querySelectorAll('.subclass-chk:checked')).map(c => c.value);

    const validSubs = checked.filter(c => c !== superclass);
    if (validSubs.length === 0) {
      alert("Kamida bitta quyi subklassni tanlashingiz shart!");
      return;
    }

    this.subclasses = this.subclasses.filter(s => s.superclass !== superclass);

    const subHierarchy = {
      id: "sub_" + (this.nextId++),
      superclass,
      constraint,
      subclasses: validSubs
    };

    this.subclasses.push(subHierarchy);
    this.closeSubclassModal();
    this.renderLines();
    this.setStatus(`'${superclass}' uchun ${constraint} subklass ierarxiyasi saqlandi.`);
  }

  // ==========================================================================
  // SVG LINE & MULTIPLICITY RENDERING (SOLID MONOCHROME)
  // ==========================================================================

  renderLines() {
    if (!this.linesGroup) return;
    this.linesGroup.innerHTML = '';

    // Render Relationships
    this.relationships.forEach((rel, idx) => {
      const e1 = this.entities.find(e => e.name === rel.fromEntityName || e.id === rel.fromId);
      const e2 = this.entities.find(e => e.name === rel.toEntityName || e.id === rel.toId);
      if (!e1 || !e2) return;

      const isRecursive = (e1 === e2);
      if (isRecursive) {
        this.renderRecursiveLine(e1, rel, idx);
      } else {
        this.renderBinaryLine(e1, e2, rel, idx);
      }
    });

    // Render Subclasses
    this.subclasses.forEach((sub, sIdx) => {
      const supEnt = this.entities.find(e => e.name === sub.superclass);
      if (!supEnt) return;

      const subEnts = sub.subclasses.map(name => this.entities.find(e => e.name === name)).filter(Boolean);
      if (subEnts.length === 0) return;

      this.renderSubclassHierarchyLines(supEnt, subEnts, sub, sIdx);
    });

    if (this.countMsg) {
      this.countMsg.textContent = `${this.entities.length} Entitiy • ${this.relationships.length} Aloqa`;
    }
  }

  renderBinaryLine(e1, e2, rel, idx) {
    const card1 = document.getElementById(e1.id);
    const card2 = document.getElementById(e2.id);
    const h1 = card1 ? card1.offsetHeight : 100;
    const h2 = card2 ? card2.offsetHeight : 100;

    const c1x = e1.x + e1.width / 2;
    const c1y = e1.y + h1 / 2;
    const c2x = e2.x + e2.width / 2;
    const c2y = e2.y + h2 / 2;

    const midX = (c1x + c2x) / 2;
    const midY = (c1y + c2y) / 2;

    // Solid White Line
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', `M ${c1x} ${c1y} L ${c2x} ${c2y}`);
    path.setAttribute('class', 'eer-rel-line');
    this.linesGroup.appendChild(path);

    // Multiplicity pill 1
    const p1x = c1x + (c2x - c1x) * 0.22;
    const p1y = c1y + (c2y - c1y) * 0.22 - 12;
    this.createMultiplicityPill(p1x, p1y, rel.mult1 || "1..1", (newM) => {
      rel.mult1 = newM;
      this.renderLines();
    });

    // Multiplicity pill 2
    const p2x = c1x + (c2x - c1x) * 0.78;
    const p2y = c1y + (c2y - c1y) * 0.78 - 12;
    this.createMultiplicityPill(p2x, p2y, rel.mult2 || "1..*", (newM) => {
      rel.mult2 = newM;
      this.renderLines();
    });

    // Central Relationship Diamond / Badge
    this.createRelationDiamondBadge(midX, midY, rel, idx);
  }

  renderRecursiveLine(e, rel, idx) {
    const x = e.x + e.width;
    const y = e.y + 40;

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', `M ${x} ${y} C ${x + 90} ${y - 60}, ${x + 90} ${y + 80}, ${x} ${y + 40}`);
    path.setAttribute('class', 'eer-rel-line');
    path.setAttribute('fill', 'none');
    this.linesGroup.appendChild(path);

    // Multiplicities
    this.createMultiplicityPill(x + 50, y - 35, rel.mult1 || "0..1", (newM) => {
      rel.mult1 = newM;
      this.renderLines();
    });

    this.createMultiplicityPill(x + 50, y + 55, rel.mult2 || "0..*", (newM) => {
      rel.mult2 = newM;
      this.renderLines();
    });

    this.createRelationDiamondBadge(x + 75, y + 10, rel, idx);
  }

  renderSubclassHierarchyLines(supEnt, subEnts, sub, sIdx) {
    const cardSup = document.getElementById(supEnt.id);
    const supH = cardSup ? cardSup.offsetHeight : 100;
    const supX = supEnt.x + supEnt.width / 2;
    const supY = supEnt.y + supH;

    let avgSubX = 0;
    let minSubY = 9999;
    subEnts.forEach(subE => {
      avgSubX += subE.x + subE.width / 2;
      minSubY = Math.min(minSubY, subE.y);
    });
    avgSubX /= subEnts.length;

    const hubX = (supX + avgSubX) / 2;
    const hubY = supY + Math.max(30, (minSubY - supY) / 2);

    const lineSup = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    lineSup.setAttribute('x1', supX);
    lineSup.setAttribute('y1', supY);
    lineSup.setAttribute('x2', hubX);
    lineSup.setAttribute('y2', hubY);
    lineSup.setAttribute('stroke', '#ffffff');
    lineSup.setAttribute('stroke-width', '2');
    this.linesGroup.appendChild(lineSup);

    subEnts.forEach(subE => {
      const subX = subE.x + subE.width / 2;
      const subY = subE.y;
      const subLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      subLine.setAttribute('x1', hubX);
      subLine.setAttribute('y1', hubY);
      subLine.setAttribute('x2', subX);
      subLine.setAttribute('y2', subY);
      subLine.setAttribute('stroke', '#ffffff');
      subLine.setAttribute('stroke-width', '2');
      this.linesGroup.appendChild(subLine);
    });

    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', hubX);
    circle.setAttribute('cy', hubY);
    circle.setAttribute('r', '14');
    circle.setAttribute('fill', '#000000');
    circle.setAttribute('stroke', '#ffffff');
    circle.setAttribute('stroke-width', '2');
    this.linesGroup.appendChild(circle);

    const triangle = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    triangle.setAttribute('points', `${hubX},${hubY - 7} ${hubX + 7},${hubY + 5} ${hubX - 7},${hubY + 5}`);
    triangle.setAttribute('fill', '#ffffff');
    this.linesGroup.appendChild(triangle);

    this.createConstraintBadge(hubX, hubY + 24, sub, () => {
      const cycles = ["{Mandatory, Or}", "{Optional, Or}", "{Mandatory, And}", "{Optional, And}"];
      const curIdx = cycles.indexOf(sub.constraint);
      sub.constraint = cycles[(curIdx + 1) % cycles.length];
      this.renderLines();
    });
  }

  createMultiplicityPill(x, y, multValue, onChange) {
    const fo = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
    fo.setAttribute('x', x - 26);
    fo.setAttribute('y', y - 12);
    fo.setAttribute('width', 52);
    fo.setAttribute('height', 24);

    const btn = document.createElement('button');
    btn.className = 'eer-mult-pill';
    btn.textContent = multValue;
    btn.title = "Bosib almashtiring (1..1, 1..*, 0..1, 0..*), yoki 2 marta bosib yozing";

    const commonCycles = ["1..1", "1..*", "0..1", "0..*"];

    // Single click: cycle through standard multiplicities
    btn.onclick = (e) => {
      e.stopPropagation();
      const curIdx = commonCycles.indexOf(multValue);
      const nextM = curIdx !== -1 ? commonCycles[(curIdx + 1) % commonCycles.length] : "1..1";
      onChange(nextM);
      if (this.onLiveDialogue) {
        this.onLiveDialogue(`Atlas: Kardinallik '${nextM}' ga o'rnatildi.`);
      }
    };

    // Double click: prompt for custom multiplicity
    btn.ondblclick = (e) => {
      e.stopPropagation();
      const customM = prompt("Multiplicity qiymatini kiriting (masalan: 1..1, 0..1, 1..*, 0..*):", multValue);
      if (customM !== null && customM.trim()) {
        onChange(customM.trim());
      }
    };

    fo.appendChild(btn);
    this.linesGroup.appendChild(fo);
  }

  createRelationDiamondBadge(x, y, rel, rIdx) {
    const fo = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
    fo.setAttribute('x', x - 60);
    fo.setAttribute('y', y - 20);
    fo.setAttribute('width', 120);
    fo.setAttribute('height', 44);

    const badge = document.createElement('div');
    badge.className = `eer-diamond-badge ${rel.associationClass ? 'assoc-active' : ''}`;
    badge.title = "Aloqa nomini o'zgartirish yoki sozlash";

    badge.innerHTML = `
      <span class="rel-title" title="Nomini o'zgartirish uchun bosing">${rel.name || 'Aloqa'}</span>
      <div class="rel-badge-btns">
        <button class="rel-btn" data-act="rename" title="Nomini o'zgartirish">✎</button>
        <button class="rel-btn ${rel.associationClass ? 'active' : ''}" data-act="assoc" title="Association Class">AC</button>
        <button class="rel-btn del" data-act="del" title="Delete">×</button>
      </div>
    `;

    const renameFn = (e) => {
      e.stopPropagation();
      const newName = prompt("Aloqa nomini kiriting:", rel.name || "");
      if (newName !== null) {
        rel.name = newName.trim();
        this.renderLines();
      }
    };

    badge.querySelector('.rel-title').onclick = renameFn;
    badge.querySelector('[data-act="rename"]').onclick = renameFn;

    badge.querySelector('[data-act="assoc"]').onclick = (e) => {
      e.stopPropagation();
      rel.associationClass = !rel.associationClass;
      this.renderLines();
      this.setStatus(`'${rel.name}' aloqasi Association Class: ${rel.associationClass ? 'Yoqildi' : "O'chirildi"}`);
    };

    badge.querySelector('[data-act="del"]').onclick = (e) => {
      e.stopPropagation();
      this.relationships.splice(rIdx, 1);
      this.renderLines();
      this.setStatus("Aloqa o'chirildi.");
    };

    fo.appendChild(badge);
    this.linesGroup.appendChild(fo);
  }

  createConstraintBadge(x, y, sub, onClick) {
    const fo = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
    fo.setAttribute('x', x - 65);
    fo.setAttribute('y', y - 10);
    fo.setAttribute('width', 130);
    fo.setAttribute('height', 26);

    const badge = document.createElement('button');
    badge.className = 'eer-constraint-pill';
    badge.textContent = sub.constraint;
    badge.title = "Cheklovni almashtirish uchun bosing ({Mandatory/Optional, Or/And})";
    badge.onclick = (e) => {
      e.stopPropagation();
      onClick();
    };

    fo.appendChild(badge);
    this.linesGroup.appendChild(fo);
  }

  // ==========================================================================
  // AUTO-LAYOUT & DIAGRAM EXPORT / IMPORT
  // ==========================================================================

  autoLayout() {
    const count = this.entities.length;
    if (count === 0) return;

    if (count === 2) {
      this.entities[0].x = 80; this.entities[0].y = 120;
      this.entities[1].x = 400; this.entities[1].y = 120;
    } else if (count === 3) {
      this.entities[0].x = 50; this.entities[0].y = 120;
      this.entities[1].x = 280; this.entities[1].y = 120;
      this.entities[2].x = 510; this.entities[2].y = 120;
    } else {
      const cols = Math.ceil(Math.sqrt(count));
      this.entities.forEach((ent, i) => {
        const col = i % cols;
        const row = Math.floor(i / cols);
        ent.x = 60 + col * 240;
        ent.y = 50 + row * 160;
      });
    }

    this.entities.forEach(ent => this.renderEntityCard(ent));
    this.renderLines();
    this.setStatus("Diagramma tartibga keltirildi.");
  }

  clear() {
    this.entities = [];
    this.relationships = [];
    this.subclasses = [];
    this.entitiesLayer.innerHTML = '';
    this.renderLines();
    this.setStatus("Doska tozalandi. Chap paneldagi 'Entity' shakli bilan boshlang.");
  }

  loadDiagram(diag) {
    this.clear();
    if (!diag) return;

    const ents = diag.entities || [];
    ents.forEach((e, idx) => {
      const posX = e.x || (70 + (idx % 3) * 240);
      const posY = e.y || (70 + Math.floor(idx / 3) * 160);

      const newEnt = {
        id: "e_" + (this.nextId++),
        name: e.name,
        x: posX,
        y: posY,
        width: 180,
        isWeak: !!e.isWeak,
        attributes: (e.attributes || []).map(a => ({
          name: a.name || a,
          isPK: !!a.isPK,
          isPPK: !!a.isPPK
        }))
      };

      this.entities.push(newEnt);
      this.renderEntityCard(newEnt);
    });

    const rels = diag.relationships || [];
    rels.forEach(r => {
      const e1 = this.entities.find(e => e.name === (r.fromEntityName || r.entity1));
      const e2 = this.entities.find(e => e.name === (r.toEntityName || r.entity2));
      if (e1 && e2) {
        this.addRelationship(e1, e2, r.name || "Aloqa", r.mult1 || "1..1", r.mult2 || "1..*", r.associationClass);
      }
    });

    const subs = diag.subclasses || [];
    const subArr = Array.isArray(subs) ? subs : [subs];
    subArr.forEach(s => {
      if (s && s.superclass) {
        this.subclasses.push({
          id: "sub_" + (this.nextId++),
          superclass: s.superclass,
          constraint: s.constraint || "{Mandatory, Or}",
          subclasses: s.subclasses || []
        });
      }
    });

    this.renderLines();
    this.setStatus("Template doskaga yuklandi.");
  }

  getDiagram() {
    return {
      entities: this.entities.map(e => ({
        name: e.name,
        x: e.x,
        y: e.y,
        isWeak: e.isWeak,
        attributes: e.attributes
      })),
      relationships: this.relationships.map(r => ({
        entity1: r.fromEntityName || r.entity1,
        entity2: r.toEntityName || r.entity2,
        fromEntityName: r.fromEntityName,
        toEntityName: r.toEntityName,
        name: r.name,
        mult1: r.mult1,
        mult2: r.mult2,
        associationClass: r.associationClass
      })),
      subclasses: this.subclasses.map(s => ({
        superclass: s.superclass,
        constraint: s.constraint,
        subclasses: s.subclasses
      }))
    };
  }

  downloadDrawioXml() {
    const diag = this.getDiagram();
    if (!window.DRAWIO_EXPORTER) {
      alert("Draw.io eksport moduli topilmadi.");
      return;
    }

    const xml = window.DRAWIO_EXPORTER.exportToXml(diag);
    const blob = new Blob([xml], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ACADEMY_EER_Diagram_${Date.now()}.drawio`;
    a.click();
    URL.revokeObjectURL(url);
    this.setStatus("Draw.io XML fayli yuklab olindi!");
  }
}

if (typeof window !== 'undefined') {
  window.EERCanvas = EERCanvas;
}
