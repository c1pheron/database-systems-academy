/**
 * DATABASE SYSTEMS ACADEMY — WEEK 1: DRAW.IO FULL INTERACTIVE EER CANVAS ENGINE
 * Haqiqiy draw.io uslubidagi barcha professional imkoniyatlar:
 * 1. Port strelkalari (Yuqori, O'ng, Past, Chap) & Strelkani sudrab ikkinchi entitiyga ulash (Drag-to-Connect)
 * 2. Sichqoncha g'ildiragi bilan masshtablash (Mouse Wheel Zoom) & Polotnoni surish (Pan)
 * 3. Entitiy boshqaruvlari: (+) Atribut qo'shish, (✎) Nomini tahrirlash, (✕) O'chirish, (📦) Zaif entitiyga aylantirish
 * 4. Har bir atributda: PK / PPK / Oddiy kalit aylantirish, nomini o'zgartirish va (✕) o'chirish
 * 5. Multiplicity teglari (1..1, 1..*, 0..1, 0..*) o'quvchining o'zi tanlashi uchun
 * 6. draw.io XML formatiga to'g'ridan-to'g'ri eksport
 */

class EERCanvasEngine {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;

    this.entities = [];
    this.relationships = [];
    this.subclasses = [];

    // Zoom & Pan
    this.zoom = 1;
    this.panX = 0;
    this.panY = 0;
    this.isPanning = false;
    this.startPanX = 0;
    this.startPanY = 0;

    // Selection & Dragging
    this.selectedNode = null;
    this.selectedType = null;
    this.isDraggingNode = false;
    this.draggedNode = null;
    this.dragOffsetX = 0;
    this.dragOffsetY = 0;

    // Port Connection Drag
    this.isConnecting = false;
    this.connectSource = null; // { node, type, port: 'top'|'right'|'bottom'|'left' }
    this.connectCurrentX = 0;
    this.connectCurrentY = 0;

    // Free-Standing Connection Lines ("enitiydan chiqadigan chiziq esa enityga ulanmasdan ham tura olishi kerak")
    this.freeLines = [];

    // Node Resizing ("entity chetini tortganda entity kattalashishi kerak")
    this.isResizing = false;
    this.resizingNode = null;
    this.resizeStartWidth = 0;
    this.resizeStartHeight = 0;
    this.resizeStartX = 0;
    this.resizeStartY = 0;

    this.initDOM();
    this.attachEvents();
  }

  initDOM() {
    this.container.innerHTML = `
      <div class="canvas-viewport" id="canvasViewport">
        <svg id="eerCanvasSvg"></svg>
        <div class="eer-nodes-layer" id="eerNodesLayer"></div>
      </div>
      <!-- Zoom Controls -->
      <div class="zoom-controls">
        <button class="btn-zoom" id="btnZoomOut" title="Kichraytirish">-</button>
        <span class="zoom-level-text" id="zoomLevelText">100%</span>
        <button class="btn-zoom" id="btnZoomIn" title="Kattalashtirish">+</button>
        <button class="btn-zoom" id="btnZoomReset" title="Asliga qaytarish" style="font-size:10px;">1:1</button>
      </div>
    `;

    this.viewport = document.getElementById('canvasViewport');
    this.svg = document.getElementById('eerCanvasSvg');
    this.nodesLayer = document.getElementById('eerNodesLayer');
    this.zoomText = document.getElementById('zoomLevelText');

    this.updateViewportTransform();
  }

  updateViewportTransform() {
    if (this.viewport) {
      this.viewport.style.transform = `translate(${this.panX}px, ${this.panY}px) scale(${this.zoom})`;
    }
    if (this.zoomText) {
      this.zoomText.textContent = `${Math.round(this.zoom * 100)}%`;
    }
  }

  attachEvents() {
    // 1. Mouse Wheel Zoom
    this.container.addEventListener('wheel', (e) => {
      e.preventDefault();
      const rect = this.container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const delta = e.deltaY < 0 ? 1.1 : 0.9;
      const newZoom = Math.min(2.5, Math.max(0.4, this.zoom * delta));

      // Zoom towards mouse pointer
      this.panX = mouseX - (mouseX - this.panX) * (newZoom / this.zoom);
      this.panY = mouseY - (mouseY - this.panY) * (newZoom / this.zoom);
      this.zoom = newZoom;

      this.updateViewportTransform();
    }, { passive: false });

    // 2. Pan on background drag & cancel pending connection
    this.container.addEventListener('mousedown', (e) => {
      if (e.target === this.container || e.target === this.svg || e.target === this.nodesLayer || e.target === this.viewport) {
        this.deselectAll();
        this.cancelConnecting();
        this.isPanning = true;
        this.startPanX = e.clientX - this.panX;
        this.startPanY = e.clientY - this.panY;
        this.container.style.cursor = 'grabbing';
      }
    });

    // 3. Pointer move for dragging node, panning, or connection line
    window.addEventListener('mousemove', (e) => this.onPointerMove(e));
    window.addEventListener('mouseup', (e) => this.onPointerUp(e));

    // Touch support (Mobile phones & tablets)
    this.container.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1 && (e.target === this.container || e.target === this.svg || e.target === this.nodesLayer || e.target === this.viewport)) {
        this.deselectAll();
        this.cancelConnecting();
        this.isPanning = true;
        this.startPanX = e.touches[0].clientX - this.panX;
        this.startPanY = e.touches[0].clientY - this.panY;
      }
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (this.isPanning || this.isDraggingNode || this.isConnecting || this.isResizing) {
        if (e.cancelable) e.preventDefault();
        if (e.touches && e.touches.length > 0) {
          this.lastTouchPoint = { clientX: e.touches[0].clientX, clientY: e.touches[0].clientY };
          this.onPointerMove(e.touches[0]);
        }
      }
    }, { passive: false });

    window.addEventListener('touchend', (e) => {
      const point = (e.changedTouches && e.changedTouches[0]) || this.lastTouchPoint || {};
      this.onPointerUp(point);
    });
    window.addEventListener('touchcancel', (e) => {
      this.onPointerUp(e);
    });

    // Zoom Buttons
    document.getElementById('btnZoomIn')?.addEventListener('click', () => {
      this.zoom = Math.min(2.5, this.zoom * 1.2);
      this.updateViewportTransform();
    });
    document.getElementById('btnZoomOut')?.addEventListener('click', () => {
      this.zoom = Math.max(0.4, this.zoom / 1.2);
      this.updateViewportTransform();
    });
    document.getElementById('btnZoomReset')?.addEventListener('click', () => {
      this.zoom = 1;
      this.panX = 0;
      this.panY = 0;
      this.updateViewportTransform();
    });
  }

  // Convert Screen Client Coordinates to Canvas World Coordinates
  screenToWorld(clientX, clientY) {
    const rect = this.container.getBoundingClientRect();
    const cx = clientX - rect.left;
    const cy = clientY - rect.top;
    return {
      x: (cx - this.panX) / this.zoom,
      y: (cy - this.panY) / this.zoom
    };
  }

  onPointerMove(e) {
    // A. Panning
    if (this.isPanning) {
      this.panX = e.clientX - this.startPanX;
      this.panY = e.clientY - this.startPanY;
      this.updateViewportTransform();
      return;
    }

    // B. Dragging Node
    if (this.isDraggingNode && this.draggedNode) {
      const world = this.screenToWorld(e.clientX, e.clientY);
      this.draggedNode.node.x = Math.round(world.x - this.dragOffsetX);
      this.draggedNode.node.y = Math.round(world.y - this.dragOffsetY);

      this.updateNodeDOMPosition(this.draggedNode.node);
      this.renderLinks();
      return;
    }

    // C. Dragging Connection Port Line (draw.io live arrow drag)
    if (this.isConnecting && this.connectSource) {
      const world = this.screenToWorld(e.clientX, e.clientY);
      this.connectMovedDist = (this.connectMovedDist || 0) + Math.hypot(world.x - this.connectCurrentX, world.y - this.connectCurrentY);
      this.connectCurrentX = world.x;
      this.connectCurrentY = world.y;
      this.renderTemporaryConnectingLine();
      return;
    }

    // D. Resizing Node (draw.io corner drag)
    if (this.isResizing && this.resizingNode) {
      const dx = (e.clientX - this.resizeStartX) / this.zoom;
      const dy = (e.clientY - this.resizeStartY) / this.zoom;
      this.resizingNode.width = Math.max(140, Math.round(this.resizeStartWidth + dx));
      this.resizingNode.height = Math.max(80, Math.round(this.resizeStartHeight + dy));
      const el = document.getElementById(this.resizingNode.domId);
      if (el) {
        el.style.width = this.resizingNode.width + 'px';
        el.style.minHeight = this.resizingNode.height + 'px';
      }
      this.renderLinks();
      return;
    }
  }

  onPointerUp(e) {
    if (this.isPanning) {
      this.isPanning = false;
      this.container.style.cursor = 'default';
    }

    if (this.isDraggingNode) {
      this.isDraggingNode = false;
      this.draggedNode = null;
    }

    if (this.isResizing) {
      this.isResizing = false;
      this.resizingNode = null;
    }

    // Finish connection line if dropped onto another entity / diamond
    if (this.isConnecting) {
      this.finishConnection(e);
    }
  }

  // ==========================================================================
  // CONNECTION PORTS & DRAW.IO DRAG-TO-CONNECT
  // ==========================================================================
  startPortConnection(node, type, port) {
    this.isConnecting = true;
    this.connectSource = { node, type, port };

    const portPos = this.getPortCoords(node, port);
    this.connectCurrentX = portPos.x;
    this.connectCurrentY = portPos.y;
    this.connectMovedDist = 0;

    // Visual feedback on source node
    this.deselectAll();
    const el = document.getElementById(node.domId);
    if (el) el.classList.add('connecting-source');

    if (window.playSfx) window.playSfx('click');
  }

  cancelConnecting() {
    this.isConnecting = false;
    this.connectSource = null;
    const tempLine = document.getElementById('eerTempDragLine');
    if (tempLine) tempLine.remove();
    document.querySelectorAll('.eer-entity-box, .eer-diamond-box').forEach(el => el.classList.remove('connecting-source'));
  }

  getPortCoords(node, port) {
    const w = node.width || 160;
    const h = node.height || 100;
    if (port === 'top') return { x: node.x + w / 2, y: node.y };
    if (port === 'right') return { x: node.x + w, y: node.y + h / 2 };
    if (port === 'bottom') return { x: node.x + w / 2, y: node.y + h };
    if (port === 'left') return { x: node.x, y: node.y + h / 2 };
    return { x: node.x + w / 2, y: node.y + h / 2 };
  }

  renderTemporaryConnectingLine() {
    let tempLine = document.getElementById('eerTempDragLine');
    if (!tempLine) {
      tempLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      tempLine.id = 'eerTempDragLine';
      tempLine.setAttribute('stroke', '#dfc288');
      tempLine.setAttribute('stroke-width', '2.5');
      tempLine.setAttribute('stroke-dasharray', '5,5');
      tempLine.setAttribute('stroke-linecap', 'round');
      tempLine.setAttribute('pointer-events', 'none');
      tempLine.style.pointerEvents = 'none';
      this.svg.appendChild(tempLine);
    }

    const start = this.getPortCoords(this.connectSource.node, this.connectSource.port);
    tempLine.setAttribute('x1', start.x);
    tempLine.setAttribute('y1', start.y);
    tempLine.setAttribute('x2', this.connectCurrentX);
    tempLine.setAttribute('y2', this.connectCurrentY);
  }

  completeConnection(sourceNode, sourceType, targetNode, targetType) {
    if (sourceType === 'entity' && targetType === 'diamond') {
      // Link Entity to Diamond
      if (!targetNode.fromEntityName) {
        targetNode.fromEntityName = sourceNode.name;
      } else if (!targetNode.toEntityName && targetNode.fromEntityName !== sourceNode.name) {
        targetNode.toEntityName = sourceNode.name;
      }
      if (window.playSfx) window.playSfx('success');
    } else if (sourceType === 'diamond' && targetType === 'entity') {
      // Link Diamond to Entity
      if (!sourceNode.fromEntityName) {
        sourceNode.fromEntityName = targetNode.name;
      } else if (!sourceNode.toEntityName && sourceNode.fromEntityName !== targetNode.name) {
        sourceNode.toEntityName = targetNode.name;
      }
      if (window.playSfx) window.playSfx('success');
    } else if (sourceType === 'entity' && targetType === 'entity') {
      // Connect Entity to Entity directly via a clean relationship diamond!
      // Shunchaki oddiy ulanadi: modal promptlarsiz, multiplisitiyani o'quvchi o'zi tanlaydi!
      const midX = Math.round((sourceNode.x + targetNode.x) / 2);
      const midY = Math.round((sourceNode.y + targetNode.y) / 2);

      this.addRelationship({
        name: 'Aloqa',
        fromEntityName: sourceNode.name,
        toEntityName: targetNode.name,
        mult1: '?',
        mult2: '?',
        x: midX,
        y: midY
      });
      if (window.playSfx) window.playSfx('success');
    }
    this.renderLinks();
  }

  finishConnection(e) {
    const tempLine = document.getElementById('eerTempDragLine');
    if (tempLine) tempLine.remove();

    let clientX = e?.clientX;
    let clientY = e?.clientY;

    if (clientX === undefined && e?.changedTouches && e.changedTouches.length > 0) {
      clientX = e.changedTouches[0].clientX;
      clientY = e.changedTouches[0].clientY;
    }
    if (clientX === undefined && this.lastTouchPoint) {
      clientX = this.lastTouchPoint.clientX;
      clientY = this.lastTouchPoint.clientY;
    }

    if (clientX !== undefined && clientY !== undefined && this.connectSource) {
      const targetEl = document.elementFromPoint(clientX, clientY);
      const targetBox = targetEl ? targetEl.closest('.eer-entity-box, .eer-diamond-box') : null;

      if (targetBox && targetBox.id !== this.connectSource.node.domId) {
        const targetEntity = this.entities.find(en => en.domId === targetBox.id);
        const targetDiamond = this.relationships.find(r => r.domId === targetBox.id);
        const targetNode = targetEntity || targetDiamond;
        const targetType = targetEntity ? 'entity' : 'diamond';

        if (targetNode) {
          this.completeConnection(this.connectSource.node, this.connectSource.type, targetNode, targetType);
          this.cancelConnecting();
          return;
        }
      }

      // Agar o'quvchi bo'sh maydonga tortgan bo'lsa (masofa > 20px):
      // "enitiydan chiqadigan chiziq esa enityga ulanmasdan ham tura olishi kerak"
      // Chiziq polotnoda erkin saqlanib turadi!
      if (this.connectMovedDist > 20) {
        const world = this.screenToWorld(clientX, clientY);
        this.freeLines.push({
          id: 'free_' + Math.random().toString(36).substr(2, 9),
          node: this.connectSource.node,
          type: this.connectSource.type,
          port: this.connectSource.port,
          endX: Math.round(world.x),
          endY: Math.round(world.y)
        });
        if (window.playSfx) window.playSfx('click');
        this.cancelConnecting();
        this.renderLinks();
        return;
      }
    }

    // Agar kamroq harakat qilgan bo'lsa (mobil telefonda portga bir marta tegingan bo'lsa),
    // ikkinchi entitiyni bosish (Tap-to-Connect) orqali ulash imkoniyati ochiq qoladi!
  }

  // ==========================================================================
  // NODE DRAGGING & SELECTION
  // ==========================================================================
  onNodePointerDown(point, node, type) {
    // Agar port tanlangan bo'lsa (Tap-to-Connect), to'g'ridan-to'g'ri ulaymiz
    if (this.isConnecting && this.connectSource) {
      if (this.connectSource.node.domId !== node.domId) {
        this.completeConnection(this.connectSource.node, this.connectSource.type, node, type);
      }
      this.cancelConnecting();
      return;
    }

    this.selectNode(node, type);
    this.isDraggingNode = true;
    this.draggedNode = { node, type };

    const clientX = point.clientX !== undefined ? point.clientX : 0;
    const clientY = point.clientY !== undefined ? point.clientY : 0;

    const world = this.screenToWorld(clientX, clientY);
    this.dragOffsetX = world.x - node.x;
    this.dragOffsetY = world.y - node.y;
  }

  selectNode(node, type) {
    this.deselectAll();
    this.selectedNode = node;
    this.selectedType = type;

    const el = document.getElementById(node.domId);
    if (el) el.classList.add('selected');
  }

  deselectAll() {
    this.selectedNode = null;
    this.selectedType = null;
    document.querySelectorAll('.eer-entity-box, .eer-diamond-box').forEach(el => el.classList.remove('selected'));
  }

  updateNodeDOMPosition(node) {
    const el = document.getElementById(node.domId);
    if (el) {
      el.style.left = node.x + 'px';
      el.style.top = node.y + 'px';
    }
  }

  // ==========================================================================
  // ENTITY CRUD & ATTRIBUTES MANAGEMENT
  // ==========================================================================
  addEntity(data = {}) {
    const id = 'ent_' + Math.random().toString(36).substr(2, 9);
    const entity = {
      id: id,
      domId: id,
      name: data.name || 'YangiEntitiy',
      isWeak: !!data.isWeak,
      attributes: data.attributes ? JSON.parse(JSON.stringify(data.attributes)) : [
        { name: 'id', isPK: true },
        { name: 'nomi', isPK: false }
      ],
      x: data.x !== undefined ? data.x : 100,
      y: data.y !== undefined ? data.y : 100,
      width: 170,
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
    el.style.width = (entity.width || 170) + 'px';
    if (entity.height) el.style.minHeight = entity.height + 'px';

    // 4 Connection Ports (Draw.io style)
    const portsHtml = `
      <div class="port-arrow top" data-port="top" title="Yuqoridan ulash">▲</div>
      <div class="port-arrow right" data-port="right" title="O'ngdan ulash">▶</div>
      <div class="port-arrow bottom" data-port="bottom" title="Pastdan ulash">▼</div>
      <div class="port-arrow left" data-port="left" title="Chapdan ulash">◀</div>
    `;

    el.innerHTML = `
      ${portsHtml}
      <div class="entity-header">
        <span class="entity-title-text" title="Tahrirlash uchun bosing">${entity.name}</span>
        <div class="entity-actions">
          <button class="btn-node-act" data-action="add-attr" title="Atribut qo'shish">+</button>
          <button class="btn-node-act" data-action="edit-name" title="Nomini o'zgartirish">✎</button>
          <button class="btn-node-act" data-action="toggle-weak" title="Zaif entitiy">{W}</button>
          <button class="btn-node-act del" data-action="del-node" title="Entitiyni o'chirish">✕</button>
        </div>
      </div>
      <div class="entity-attributes" id="${entity.domId}_attrs"></div>
      <div class="node-resize-handle" data-action="resize" title="O'lchamni o'zgartirish (sudrang)">⤡</div>
    `;

    // Render attribute rows
    this.renderEntityAttributes(entity, el.querySelector('.entity-attributes'));

    // Resize Handle (Draw.io style corner drag)
    const resizeBtn = el.querySelector('.node-resize-handle');
    if (resizeBtn) {
      const onResizeStart = (e) => {
        e.stopPropagation();
        if (e.cancelable) e.preventDefault();
        const point = e.touches ? e.touches[0] : e;
        this.isResizing = true;
        this.resizingNode = entity;
        this.resizeStartWidth = entity.width || el.offsetWidth || 170;
        this.resizeStartHeight = entity.height || el.offsetHeight || 100;
        this.resizeStartX = point.clientX;
        this.resizeStartY = point.clientY;
      };
      resizeBtn.addEventListener('mousedown', onResizeStart);
      resizeBtn.addEventListener('touchstart', onResizeStart, { passive: false });
    }

    // Drag events (Mouse + Touch)
    const onEntityStart = (e) => {
      if (e.target.closest('.port-arrow') || e.target.closest('button') || e.target.closest('.attr-pill') || e.target.closest('.btn-attr-del') || e.target.closest('.node-resize-handle') || e.target.closest('[contenteditable="true"]')) return;
      if (e.touches && e.touches.length > 1) return;
      e.stopPropagation();
      if (e.cancelable && e.type === 'touchstart') e.preventDefault();
      const point = e.touches ? e.touches[0] : e;
      this.onNodePointerDown(point, entity, 'entity');
    };
    el.addEventListener('mousedown', onEntityStart);
    el.addEventListener('touchstart', onEntityStart, { passive: false });

    // Connection port events (Mouse + Touch)
    el.querySelectorAll('.port-arrow').forEach(p => {
      const onPortStart = (e) => {
        if (e.cancelable) e.preventDefault();
        e.stopPropagation();
        const portName = p.getAttribute('data-port');
        this.startPortConnection(entity, 'entity', portName);
      };
      p.addEventListener('mousedown', onPortStart);
      p.addEventListener('touchstart', onPortStart, { passive: false });
    });

    // Header Action Buttons
    el.querySelector('[data-action="add-attr"]')?.addEventListener('click', (e) => {
      e.stopPropagation();
      const attrName = prompt("Yangi atribut nomini kiriting:", "yangi_atribut");
      if (attrName) {
        entity.attributes.push({ name: attrName.trim(), isPK: false });
        this.renderEntityAttributes(entity, el.querySelector('.entity-attributes'));
        this.renderLinks();
      }
    });

    el.querySelector('[data-action="edit-name"]')?.addEventListener('click', (e) => {
      e.stopPropagation();
      const newName = prompt("Entitiy nomini o'zgartiring:", entity.name);
      if (newName) {
        const oldName = entity.name;
        entity.name = newName.trim();
        el.querySelector('.entity-title-text').textContent = entity.name;
        // Update connected relationships
        this.relationships.forEach(r => {
          if (r.fromEntityName === oldName) r.fromEntityName = entity.name;
          if (r.toEntityName === oldName) r.toEntityName = entity.name;
        });
        this.renderLinks();
      }
    });

    el.querySelector('[data-action="toggle-weak"]')?.addEventListener('click', (e) => {
      e.stopPropagation();
      entity.isWeak = !entity.isWeak;
      if (entity.isWeak) el.classList.add('weak-entity');
      else el.classList.remove('weak-entity');
    });

    el.querySelector('[data-action="del-node"]')?.addEventListener('click', (e) => {
      e.stopPropagation();
      if (confirm(`'${entity.name}' entitiysini o'chirishni xohlaysizmi?`)) {
        this.deleteEntity(entity);
      }
    });

    this.nodesLayer.appendChild(el);

    setTimeout(() => {
      entity.height = el.offsetHeight || 100;
      entity.width = el.offsetWidth || 170;
    }, 10);
  }

  renderEntityAttributes(entity, containerEl) {
    if (!containerEl) return;
    containerEl.innerHTML = '';

    entity.attributes.forEach((attr, idx) => {
      const row = document.createElement('div');
      row.className = `attr-item ${attr.isPK ? 'is-pk' : ''}`;

      let badgeLabel = 'Oddiy';
      let badgeClass = '';
      if (attr.isPK) {
        badgeLabel = 'PK';
        badgeClass = 'pk-pill';
      } else if (attr.isPPK) {
        badgeLabel = 'PPK';
        badgeClass = 'ppk-pill';
      }

      row.innerHTML = `
        <span class="attr-name" contenteditable="true" spellcheck="false">${attr.name}</span>
        <div style="display:flex; align-items:center; gap:4px;">
          <span class="btn-attr-badge ${badgeClass}" title="Kalit turini o'zgartirish (PK/PPK/Oddiy)">${badgeLabel}</span>
          <button class="btn-attr-del" title="Atributni o'chirish">✕</button>
        </div>
      `;

      // Inline rename attribute
      const nameEl = row.querySelector('.attr-name');
      nameEl.addEventListener('blur', () => {
        attr.name = nameEl.textContent.trim() || attr.name;
      });
      nameEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          nameEl.blur();
        }
      });

      // Toggle PK / PPK / none on badge click
      row.querySelector('.btn-attr-badge')?.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!attr.isPK && !attr.isPPK) {
          attr.isPK = true;
          attr.isPPK = false;
        } else if (attr.isPK) {
          attr.isPK = false;
          attr.isPPK = true;
        } else {
          attr.isPK = false;
          attr.isPPK = false;
        }
        this.renderEntityAttributes(entity, containerEl);
        if (window.playSfx) window.playSfx('click');
      });

      // Delete attribute
      row.querySelector('.btn-attr-del')?.addEventListener('click', (e) => {
        e.stopPropagation();
        entity.attributes.splice(idx, 1);
        this.renderEntityAttributes(entity, containerEl);
        this.renderLinks();
      });

      containerEl.appendChild(row);
    });

    const boxEl = document.getElementById(entity.domId);
    if (boxEl) {
      setTimeout(() => {
        entity.height = boxEl.offsetHeight || 100;
      }, 10);
    }
  }

  deleteEntity(entity) {
    this.entities = this.entities.filter(e => e.id !== entity.id);
    document.getElementById(entity.domId)?.remove();

    // Clean up relationships referencing this entity
    this.relationships.forEach(r => {
      if (r.fromEntityName === entity.name) r.fromEntityName = '';
      if (r.toEntityName === entity.name) r.toEntityName = '';
    });
    this.renderLinks();
  }

  // ==========================================================================
  // RELATIONSHIP DIAMONDS CRUD
  // ==========================================================================
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

    const portsHtml = `
      <div class="port-arrow top" data-port="top">▲</div>
      <div class="port-arrow right" data-port="right">▶</div>
      <div class="port-arrow bottom" data-port="bottom">▼</div>
      <div class="port-arrow left" data-port="left">◀</div>
    `;

    el.innerHTML = `
      ${portsHtml}
      <div class="diamond-inner ${rel.isIdentifying ? 'identifying' : ''}"></div>
      <div class="diamond-text" title="Nomini o'zgartirish uchun ikki marta bosing">${rel.name}</div>
      <button class="btn-node-act del" data-action="del-rel" style="position:absolute; top:-6px; right:-6px; width:16px; height:16px;" title="Aloqani o'chirish">✕</button>
    `;

    // Drag events (Mouse + Touch)
    const onDiamondStart = (e) => {
      if (e.target.closest('.port-arrow') || e.target.closest('button')) return;
      if (e.touches && e.touches.length > 1) return;
      e.stopPropagation();
      if (e.cancelable && e.type === 'touchstart') e.preventDefault();
      const point = e.touches ? e.touches[0] : e;
      this.onNodePointerDown(point, rel, 'diamond');
    };
    el.addEventListener('mousedown', onDiamondStart);
    el.addEventListener('touchstart', onDiamondStart, { passive: false });

    // Port arrow events (Mouse + Touch)
    el.querySelectorAll('.port-arrow').forEach(p => {
      const onDiamondPortStart = (e) => {
        if (e.cancelable) e.preventDefault();
        e.stopPropagation();
        const portName = p.getAttribute('data-port');
        this.startPortConnection(rel, 'diamond', portName);
      };
      p.addEventListener('mousedown', onDiamondPortStart);
      p.addEventListener('touchstart', onDiamondPortStart, { passive: false });
    });

    el.querySelector('.diamond-text')?.addEventListener('dblclick', (e) => {
      e.stopPropagation();
      const newName = prompt("Aloqa nomini o'zgartiring:", rel.name);
      if (newName) {
        rel.name = newName.trim();
        el.querySelector('.diamond-text').textContent = rel.name;
      }
    });

    el.querySelector('[data-action="del-rel"]')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.deleteRelationship(rel);
    });

    this.nodesLayer.appendChild(el);
  }

  deleteRelationship(rel) {
    this.relationships = this.relationships.filter(r => r.id !== rel.id);
    document.getElementById(rel.domId)?.remove();
    this.renderLinks();
  }

  // ==========================================================================
  // RENDERING CONNECTIONS & MULTIPLICITY PILLS
  // ==========================================================================
  renderLinks() {
    this.svg.innerHTML = '';
    document.querySelectorAll('.mult-pill').forEach(p => p.remove());

    this.relationships.forEach(rel => {
      const fromEnt = this.entities.find(e => e.name.toLowerCase() === (rel.fromEntityName || '').toLowerCase());
      const toEnt = this.entities.find(e => e.name.toLowerCase() === (rel.toEntityName || '').toLowerCase());

      const rCenterX = rel.x + 45;
      const rCenterY = rel.y + 45;

      if (fromEnt) {
        const fCenterX = fromEnt.x + (fromEnt.width || 170) / 2;
        const fCenterY = fromEnt.y + (fromEnt.height || 100) / 2;

        this.drawLine(fCenterX, fCenterY, rCenterX, rCenterY);

        // Multiplicity Pill 1
        const mx1 = fCenterX * 0.7 + rCenterX * 0.3;
        const my1 = fCenterY * 0.7 + rCenterY * 0.3;
        this.createMultiplicityPill(mx1, my1, rel, 'mult1', fromEnt.name);
      }

      if (toEnt) {
        const tCenterX = toEnt.x + (toEnt.width || 170) / 2;
        const tCenterY = toEnt.y + (toEnt.height || 100) / 2;

        this.drawLine(rCenterX, rCenterY, tCenterX, tCenterY);

        // Multiplicity Pill 2
        const mx2 = tCenterX * 0.7 + rCenterX * 0.3;
        const my2 = tCenterY * 0.7 + rCenterY * 0.3;
        this.createMultiplicityPill(mx2, my2, rel, 'mult2', toEnt.name);
      }
    });

    // Render Free-Standing Connection Lines ("enitiydan chiqadigan chiziq esa enityga ulanmasdan ham tura olishi kerak")
    this.freeLines = this.freeLines.filter(fl => {
      return this.entities.some(e => e.domId === fl.node.domId) || this.relationships.some(r => r.domId === fl.node.domId);
    });

    this.freeLines.forEach((fl, idx) => {
      const start = this.getPortCoords(fl.node, fl.port);
      this.drawLine(start.x, start.y, fl.endX, fl.endY);

      // Endpoint circle handle (draw.io style dangling handle)
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', fl.endX);
      circle.setAttribute('cy', fl.endY);
      circle.setAttribute('r', '7');
      circle.setAttribute('fill', '#ffd166');
      circle.setAttribute('stroke', '#1e1916');
      circle.setAttribute('stroke-width', '2');
      circle.style.cursor = 'grab';
      circle.style.pointerEvents = 'auto';

      const startDragHandle = (e) => {
        e.stopPropagation();
        if (e.cancelable) e.preventDefault();
        this.freeLines.splice(idx, 1);
        this.startPortConnection(fl.node, fl.type, fl.port);
        const point = e.touches ? e.touches[0] : e;
        const world = this.screenToWorld(point.clientX, point.clientY);
        this.connectCurrentX = world.x;
        this.connectCurrentY = world.y;
        this.renderLinks();
      };
      circle.addEventListener('mousedown', startDragHandle);
      circle.addEventListener('touchstart', startDragHandle, { passive: false });

      circle.addEventListener('dblclick', (e) => {
        e.stopPropagation();
        this.freeLines.splice(idx, 1);
        this.renderLinks();
      });

      this.svg.appendChild(circle);
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

  createMultiplicityPill(x, y, rel, multKey, entityName) {
    const pill = document.createElement('div');
    pill.className = 'mult-pill';
    pill.textContent = (rel[multKey] && rel[multKey] !== '?') ? rel[multKey] : '?';
    pill.style.left = x + 'px';
    pill.style.top = y + 'px';
    pill.title = `${entityName} tomonidagi multiplisitiyani o'zgartirish`;

    // Click to cycle through bounds
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

  // ==========================================================================
  // STARTER DIAGRAM & MODEL EXPORT
  // ==========================================================================
  loadStarterDiagram(diagram) {
    this.clearCanvas();
    if (!diagram) return;

    const w = 800;
    const h = 460;
    const entList = diagram.entities || [];
    const count = entList.length;

    entList.forEach((e, idx) => {
      let x = e.x;
      let y = e.y;
      if (x === undefined || y === undefined) {
        if (count === 1) {
          x = w / 2 - 85;
          y = h / 2 - 50;
        } else if (count === 2) {
          x = idx === 0 ? w * 0.15 : w * 0.65;
          y = h * 0.35;
        } else {
          const angle = (idx / count) * 2 * Math.PI;
          x = w / 2 - 85 + Math.cos(angle) * (w * 0.32);
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

    // In puzzle mode, starterDiagram relationships are left for the student to connect!
    const relList = diagram.relationships || [];
    relList.forEach(r => {
      this.addRelationship({
        name: r.name || 'Aloqa',
        fromEntityName: r.fromEntityName || r.entity1 || '',
        toEntityName: r.toEntityName || r.entity2 || '',
        mult1: r.mult1 || '?',
        mult2: r.mult2 || '?',
        isIdentifying: !!r.isIdentifying,
        x: r.x || w / 2 - 45,
        y: r.y || h / 2 - 45
      });
    });

    if (diagram.subclasses) {
      this.subclasses = JSON.parse(JSON.stringify(diagram.subclasses));
    }

    this.renderLinks();
  }

  clearCanvas() {
    this.entities = [];
    this.relationships = [];
    this.subclasses = [];
    this.freeLines = [];
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
