/**
 * DATABASE SYSTEMS ACADEMY — WEEK 1: EER DIAGRAM CANVAS ENGINE
 * draw.io-uslubidagi Vizual Konseptual EER Diagramma Modellashtirish Atelesi
 * 
 * Imkoniyatlar:
 * - Entitiylar (To'g'ri to'rtburchak, PK/PPK belgilari)
 * - Zaif entitiylar (Ikki qavatli hoshiya - Double Border)
 * - Aloqa romblari (Relationship Diamond va Identifikatsion romb)
 * - Multiplisitiya teglari (1..1, 1..*, 0..1, 0..*) va ularni 1-click bilan o'zgartirish
 * - Drag-and-drop surish (sichqoncha va sensor ekranlar uchun)
 * - Avto-ulash va tezkor shablonlarni yuklash
 * - .drawio XML ga to'g'ridan-to'g'ri eksport
 */

class EERCanvasEngine {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;

    this.entities = [];
    this.relationships = [];
    this.subclasses = [];

    this.selectedNode = null;
    this.selectedType = null; // 'entity' | 'diamond'
    this.connectSource = null;

    this.isDragging = false;
    this.dragTarget = null;
    this.dragOffsetX = 0;
    this.dragOffsetY = 0;

    this.initDOM();
    this.attachEvents();
  }

  initDOM() {
    this.container.innerHTML = `
      <svg id="eerCanvasSvg"></svg>
      <div class="eer-nodes-layer" id="eerNodesLayer"></div>
    `;

    this.svg = document.getElementById('eerCanvasSvg');
    this.nodesLayer = document.getElementById('eerNodesLayer');
  }

  attachEvents() {
    // Canvas click to deselect
    this.container.addEventListener('click', (e) => {
      if (e.target === this.container || e.target === this.svg || e.target === this.nodesLayer) {
        this.deselectAll();
      }
    });

    // Mouse drag
    window.addEventListener('mousemove', (e) => this.onPointerMove(e));
    window.addEventListener('mouseup', () => this.onPointerUp());

    // Touch drag
    window.addEventListener('touchmove', (e) => {
      if (e.touches && e.touches.length > 0) {
        this.onPointerMove(e.touches[0]);
      }
    }, { passive: false });
    window.addEventListener('touchend', () => this.onPointerUp());
  }

  onPointerDown(e, node, type) {
    e.stopPropagation();
    this.isDragging = true;
    this.dragTarget = { node, type };

    const rect = this.container.getBoundingClientRect();
    const pageX = e.clientX || (e.touches && e.touches[0].clientX);
    const pageY = e.clientY || (e.touches && e.touches[0].clientY);

    this.dragOffsetX = (pageX - rect.left) - node.x;
    this.dragOffsetY = (pageY - rect.top) - node.y;

    this.selectNode(node, type);
  }

  onPointerMove(e) {
    if (!this.isDragging || !this.dragTarget) return;

    const rect = this.container.getBoundingClientRect();
    const pageX = e.clientX || (e.touches && e.touches[0].clientX);
    const pageY = e.clientY || (e.touches && e.touches[0].clientY);

    let newX = (pageX - rect.left) - this.dragOffsetX;
    let newY = (pageY - rect.top) - this.dragOffsetY;

    // Bounding limits
    newX = Math.max(10, Math.min(newX, rect.width - 150));
    newY = Math.max(10, Math.min(newY, rect.height - 120));

    this.dragTarget.node.x = newX;
    this.dragTarget.node.y = newY;

    this.updateNodePosition(this.dragTarget.node, this.dragTarget.type);
    this.renderLinks();
  }

  onPointerUp() {
    this.isDragging = false;
    this.dragTarget = null;
  }

  selectNode(node, type) {
    this.deselectAll();
    this.selectedNode = node;
    this.selectedType = type;

    const el = document.getElementById(node.domId);
    if (el) el.classList.add('selected');

    if (window.onEERNodeSelected) {
      window.onEERNodeSelected(node, type);
    }
  }

  deselectAll() {
    this.selectedNode = null;
    this.selectedType = null;
    document.querySelectorAll('.eer-entity-box, .eer-diamond-box').forEach(el => {
      el.classList.remove('selected');
    });
  }

  loadStarterDiagram(diagram) {
    this.entities = [];
    this.relationships = [];
    this.subclasses = [];
    this.nodesLayer.innerHTML = '';
    this.svg.innerHTML = '';

    if (!diagram) return;

    const containerRect = this.container.getBoundingClientRect();
    const w = containerRect.width || 800;
    const h = containerRect.height || 460;

    // Entities
    const entList = diagram.entities || [];
    const count = entList.length;

    entList.forEach((e, idx) => {
      // Auto position if not provided
      let x = e.x;
      let y = e.y;
      if (x === undefined || y === undefined) {
        if (count === 1) {
          x = w / 2 - 80;
          y = h / 2 - 50;
        } else if (count === 2) {
          x = idx === 0 ? w * 0.18 : w * 0.62;
          y = h * 0.38;
        } else if (count === 3) {
          x = idx === 0 ? w * 0.12 : (idx === 1 ? w * 0.65 : w * 0.38);
          y = idx === 2 ? h * 0.65 : h * 0.22;
        } else {
          const angle = (idx / count) * 2 * Math.PI;
          x = w / 2 - 80 + Math.cos(angle) * (w * 0.32);
          y = h / 2 - 50 + Math.sin(angle) * (h * 0.28);
        }
      }

      this.addEntity({
        name: e.name,
        isWeak: !!e.isWeak,
        attributes: (e.attributes || []).map(a => ({
          name: a.name,
          isPK: !!a.isPK,
          isPPK: !!a.isPPK
        })),
        x: Math.round(x),
        y: Math.round(y)
      });
    });

    // Relationships
    const relList = diagram.relationships || [];
    relList.forEach((r, idx) => {
      const fromEnt = this.entities.find(en => en.name.toLowerCase() === (r.fromEntityName || r.entity1 || '').toLowerCase());
      const toEnt = this.entities.find(en => en.name.toLowerCase() === (r.toEntityName || r.entity2 || '').toLowerCase());

      let rx = r.x;
      let ry = r.y;
      if (rx === undefined || ry === undefined) {
        if (fromEnt && toEnt) {
          rx = (fromEnt.x + toEnt.x) / 2 + 35;
          ry = (fromEnt.y + toEnt.y) / 2;
        } else {
          rx = w / 2 - 45;
          ry = h / 2 - 45;
        }
      }

      this.addRelationship({
        name: r.name || 'Aloqa',
        fromEntityName: fromEnt ? fromEnt.name : (r.fromEntityName || r.entity1 || ''),
        toEntityName: toEnt ? toEnt.name : (r.toEntityName || r.entity2 || ''),
        mult1: r.mult1 || '1..1',
        mult2: r.mult2 || '1..*',
        isIdentifying: !!r.isIdentifying,
        x: Math.round(rx),
        y: Math.round(ry)
      });
    });

    // Subclasses
    if (diagram.subclasses) {
      this.subclasses = JSON.parse(JSON.stringify(diagram.subclasses));
    }

    this.renderAll();
  }

  addEntity(data = {}) {
    const id = 'ent_' + Math.random().toString(36).substr(2, 9);
    const entity = {
      id: id,
      domId: id,
      name: data.name || 'YangiEntitiy',
      isWeak: !!data.isWeak,
      attributes: data.attributes || [
        { name: 'id', isPK: true },
        { name: 'nomi', isPK: false }
      ],
      x: data.x !== undefined ? data.x : 100,
      y: data.y !== undefined ? data.y : 100,
      width: 160,
      height: 100
    };

    this.entities.push(entity);
    this.createEntityDOM(entity);
    this.renderLinks();
    return entity;
  }

  createEntityDOM(entity) {
    const el = document.createElement('div');
    el.id = entity.domId;
    el.className = 'eer-entity-box' + (entity.isWeak ? ' weak-entity' : '');
    el.style.left = entity.x + 'px';
    el.style.top = entity.y + 'px';

    const attrsHtml = entity.attributes.map(a => `
      <div class="attr-item ${a.isPK ? 'is-pk' : ''}">
        <span>${a.name}</span>
        ${a.isPK ? '<span class="pk-pill">PK</span>' : (a.isPPK ? '<span class="ppk-pill">PPK</span>' : '')}
      </div>
    `).join('');

    el.innerHTML = `
      <div class="entity-header">
        <span>${entity.name}</span>
        ${entity.isWeak ? '<span style="font-size:9px; color:#d19a52;">[ZAIF]</span>' : ''}
      </div>
      <div class="entity-attributes">
        ${attrsHtml}
      </div>
    `;

    // Events
    el.addEventListener('mousedown', (e) => this.onPointerDown(e, entity, 'entity'));
    el.addEventListener('touchstart', (e) => this.onPointerDown(e, entity, 'entity'), { passive: false });

    this.nodesLayer.appendChild(el);

    // Measure height
    setTimeout(() => {
      entity.height = el.offsetHeight || 100;
      entity.width = el.offsetWidth || 160;
    }, 10);
  }

  addRelationship(data = {}) {
    const id = 'rel_' + Math.random().toString(36).substr(2, 9);
    const rel = {
      id: id,
      domId: id,
      name: data.name || 'Aloqa',
      fromEntityName: data.fromEntityName || '',
      toEntityName: data.toEntityName || '',
      mult1: data.mult1 || '1..1',
      mult2: data.mult2 || '1..*',
      isIdentifying: !!data.isIdentifying,
      x: data.x !== undefined ? data.x : 280,
      y: data.y !== undefined ? data.y : 150,
      width: 90,
      height: 90
    };

    this.relationships.push(rel);
    this.createRelationshipDOM(rel);
    this.renderLinks();
    return rel;
  }

  createRelationshipDOM(rel) {
    const el = document.createElement('div');
    el.id = rel.domId;
    el.className = 'eer-diamond-box';
    el.style.left = rel.x + 'px';
    el.style.top = rel.y + 'px';

    el.innerHTML = `
      <div class="diamond-inner ${rel.isIdentifying ? 'identifying' : ''}"></div>
      <div class="diamond-text">${rel.name}</div>
    `;

    el.addEventListener('mousedown', (e) => this.onPointerDown(e, rel, 'diamond'));
    el.addEventListener('touchstart', (e) => this.onPointerDown(e, rel, 'diamond'), { passive: false });

    this.nodesLayer.appendChild(el);
  }

  updateNodePosition(node, type) {
    const el = document.getElementById(node.domId);
    if (!el) return;
    el.style.left = node.x + 'px';
    el.style.top = node.y + 'px';
  }

  renderAll() {
    this.renderLinks();
  }

  renderLinks() {
    this.svg.innerHTML = '';
    // Remove old multiplicity pills
    document.querySelectorAll('.mult-pill').forEach(p => p.remove());

    this.relationships.forEach(rel => {
      const fromEnt = this.entities.find(e => e.name.toLowerCase() === rel.fromEntityName.toLowerCase());
      const toEnt = this.entities.find(e => e.name.toLowerCase() === rel.toEntityName.toLowerCase());

      const rCenterX = rel.x + 45;
      const rCenterY = rel.y + 45;

      if (fromEnt) {
        const fCenterX = fromEnt.x + (fromEnt.width || 160) / 2;
        const fCenterY = fromEnt.y + (fromEnt.height || 100) / 2;

        // Draw line from fromEnt to Diamond
        this.drawLine(fCenterX, fCenterY, rCenterX, rCenterY);

        // Multiplicity Pill 1 (near fromEnt)
        const mx1 = fCenterX * 0.7 + rCenterX * 0.3;
        const my1 = fCenterY * 0.7 + rCenterY * 0.3;
        this.createMultiplicityPill(mx1, my1, rel, 'mult1');
      }

      if (toEnt) {
        const tCenterX = toEnt.x + (toEnt.width || 160) / 2;
        const tCenterY = toEnt.y + (toEnt.height || 100) / 2;

        // Draw line from Diamond to toEnt
        this.drawLine(rCenterX, rCenterY, tCenterX, tCenterY);

        // Multiplicity Pill 2 (near toEnt)
        const mx2 = tCenterX * 0.7 + rCenterX * 0.3;
        const my2 = tCenterY * 0.7 + rCenterY * 0.3;
        this.createMultiplicityPill(mx2, my2, rel, 'mult2');
      }
    });
  }

  drawLine(x1, y1, x2, y2) {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', x1);
    line.setAttribute('y1', y1);
    line.setAttribute('x2', x2);
    line.setAttribute('y2', y2);
    line.setAttribute('stroke', '#c8a96e');
    line.setAttribute('stroke-width', '2');
    line.setAttribute('stroke-linecap', 'round');
    this.svg.appendChild(line);
  }

  createMultiplicityPill(x, y, rel, multKey) {
    const pill = document.createElement('div');
    pill.className = 'mult-pill';
    pill.textContent = rel[multKey] || '1..1';
    pill.style.left = x + 'px';
    pill.style.top = y + 'px';

    // Click to cycle multiplicity
    pill.addEventListener('click', (e) => {
      e.stopPropagation();
      const current = rel[multKey];
      const cycle = ['1..1', '1..*', '0..1', '0..*'];
      let nextIdx = cycle.indexOf(current) + 1;
      if (nextIdx >= cycle.length || nextIdx < 0) nextIdx = 0;
      rel[multKey] = cycle[nextIdx];
      pill.textContent = rel[multKey];

      if (window.playSfx) window.playSfx('click');
    });

    this.nodesLayer.appendChild(pill);
  }

  toggleSelectedWeak() {
    if (!this.selectedNode) return;
    if (this.selectedType === 'entity') {
      this.selectedNode.isWeak = !this.selectedNode.isWeak;
      const el = document.getElementById(this.selectedNode.domId);
      if (el) {
        if (this.selectedNode.isWeak) el.classList.add('weak-entity');
        else el.classList.remove('weak-entity');
      }
    } else if (this.selectedType === 'diamond') {
      this.selectedNode.isIdentifying = !this.selectedNode.isIdentifying;
      const el = document.getElementById(this.selectedNode.domId);
      if (el) {
        const inner = el.querySelector('.diamond-inner');
        if (inner) {
          if (this.selectedNode.isIdentifying) inner.classList.add('identifying');
          else inner.classList.remove('identifying');
        }
      }
    }
  }

  setMultiplicityForSelected(m) {
    if (this.relationships.length > 0) {
      // If a relationship is selected, set it, else set on first relationship
      const targetRel = (this.selectedType === 'diamond') ? this.selectedNode : this.relationships[0];
      if (targetRel) {
        targetRel.mult2 = m;
        this.renderLinks();
        if (window.playSfx) window.playSfx('click');
      }
    }
  }

  clearCanvas() {
    this.entities = [];
    this.relationships = [];
    this.subclasses = [];
    this.nodesLayer.innerHTML = '';
    this.svg.innerHTML = '';
    this.selectedNode = null;
  }

  exportCurrentDiagram() {
    return {
      entities: this.entities.map(e => ({
        name: e.name,
        pk: (e.attributes.find(a => a.isPK) || {}).name,
        isWeak: e.isWeak,
        attributes: e.attributes
      })),
      relationships: this.relationships.map(r => ({
        name: r.name,
        entity1: r.fromEntityName,
        entity2: r.toEntityName,
        fromEntityName: r.fromEntityName,
        toEntityName: r.toEntityName,
        mult1: r.mult1,
        mult2: r.mult2,
        isIdentifying: r.isIdentifying
      })),
      subclasses: this.subclasses.length > 0 ? this.subclasses[0] : null
    };
  }
}

window.EERCanvasEngine = EERCanvasEngine;
