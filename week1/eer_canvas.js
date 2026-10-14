/**
 * DATABASE SYSTEMS ACADEMY — WEEK 1: DRAW.IO FULL INTERACTIVE EER CANVAS ENGINE
 * draw.io uslubidagi barcha professional imkoniyatlar:
 * 1. Port strelkalari (Yuqori, O'ng, Past, Chap) & Strelkani sudrab ikkinchi entitiyga ulash (Drag-to-Connect)
 * 2. Chiziq ustiga bosilganda Multiplicity variantlarini tanlash (1..1, 0..1, 1..*, 0..*)
 * 3. Atribut nomini bosganda yoki ✎ tugmasi orqali to'g'ridan-to'g'ri o'zgartirish
 * 4. Magnit (Magnetic Snap): chiziq yaqiniga ob'yekt kelganda avtomatik ushlab olish
 * 5. Draw.io Shakllar Palitrasi (Chap panel, yig'ib qo'yiladigan, barcha 17 ta ER shakllari)
 * 6. Sichqoncha g'ildiragi bilan masshtablash (Zoom) & Polotnoni surish (Pan)
 * 7. draw.io XML formatiga to'g'ridan-to'g'ri eksport
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
    this.connectMovedDist = 0;

    // Free-Standing Connection Lines
    this.freeLines = [];
    this.standaloneLines = [];
    this.draggingHandle = null; // { line, handle: 'start'|'end' }

    // Node Resizing
    this.isResizing = false;
    this.resizingNode = null;
    this.resizeStartWidth = 0;
    this.resizeStartHeight = 0;
    this.resizeStartX = 0;
    this.resizeStartY = 0;

    // Magnetic snap target candidate
    this.snapCandidate = null;

    this.initDOM();
    this.attachEvents();
    this.initSidebar();
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

    // Touch support (Mobile phones & tablets): 1-finger pan/drag, 2-finger pinch-to-zoom
    this.touchPinchDist = 0;
    this.touchPinchMid = null;

    this.container.addEventListener('touchstart', (e) => {
      if (e.touches.length === 2) {
        if (e.cancelable) e.preventDefault();
        this.isPanning = false;
        this.isDraggingNode = false;
        const t1 = e.touches[0];
        const t2 = e.touches[1];
        this.touchPinchDist = Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
        this.touchPinchMid = {
          x: (t1.clientX + t2.clientX) / 2,
          y: (t1.clientY + t2.clientY) / 2
        };
      } else if (e.touches.length === 1) {
        const touch = e.touches[0];
        this.lastTouchPoint = { clientX: touch.clientX, clientY: touch.clientY };
        const target = e.target;
        if (target === this.container || target === this.svg || target === this.nodesLayer || target === this.viewport) {
          this.deselectAll();
          this.cancelConnecting();
          this.isPanning = true;
          this.startPanX = touch.clientX - this.panX;
          this.startPanY = touch.clientY - this.panY;
        }
      }
    }, { passive: false });

    window.addEventListener('touchmove', (e) => {
      if (e.touches.length === 2 && this.touchPinchDist > 0) {
        if (e.cancelable) e.preventDefault();
        const t1 = e.touches[0];
        const t2 = e.touches[1];
        const currentDist = Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
        const currentMid = {
          x: (t1.clientX + t2.clientX) / 2,
          y: (t1.clientY + t2.clientY) / 2
        };

        const zoomFactor = currentDist / this.touchPinchDist;
        const newZoom = Math.min(2.5, Math.max(0.35, this.zoom * zoomFactor));

        const rect = this.container.getBoundingClientRect();
        const originX = currentMid.x - rect.left;
        const originY = currentMid.y - rect.top;

        this.panX = originX - (originX - this.panX) * (newZoom / this.zoom) + (currentMid.x - this.touchPinchMid.x);
        this.panY = originY - (originY - this.panY) * (newZoom / this.zoom) + (currentMid.y - this.touchPinchMid.y);
        this.zoom = newZoom;

        this.touchPinchDist = currentDist;
        this.touchPinchMid = currentMid;
        this.updateViewportTransform();
      } else if (e.touches.length === 1 && !this.touchPinchDist) {
        const touch = e.touches[0];
        this.lastTouchPoint = { clientX: touch.clientX, clientY: touch.clientY };
        this.onPointerMove(touch);
      }
    }, { passive: false });

    window.addEventListener('touchend', (e) => {
      if (e.touches.length < 2) {
        this.touchPinchDist = 0;
        this.touchPinchMid = null;
      }
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

  screenToWorld(clientX, clientY) {
    const rect = this.container.getBoundingClientRect();
    const x = (clientX - rect.left - this.panX) / this.zoom;
    const y = (clientY - rect.top - this.panY) / this.zoom;
    return { x, y };
  }

  onPointerMove(e) {
    // A. Panning canvas
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

      // Check Magnetic Snap with free-standing lines
      this.snapCandidate = null;
      for (const fl of this.freeLines) {
        if (fl.node.domId === this.draggedNode.node.domId) continue;
        const nodeCenterX = this.draggedNode.node.x + (this.draggedNode.node.width || 170) / 2;
        const nodeCenterY = this.draggedNode.node.y + (this.draggedNode.node.height || 100) / 2;
        const dist = Math.hypot(fl.endX - nodeCenterX, fl.endY - nodeCenterY);
        if (dist < 140) {
          this.snapCandidate = { freeLine: fl, node: this.draggedNode.node, type: this.draggedNode.type };
          break;
        }
      }

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

    // Handle Standalone Connector Handles
    if (this.draggingHandle) {
      const world = this.screenToWorld(e.clientX, e.clientY);
      const line = this.draggingHandle.line;
      if (this.draggingHandle.handle === 'start') {
        line.startX = Math.round(world.x);
        line.startY = Math.round(world.y);
        line.startSnapped = null;
      } else {
        line.endX = Math.round(world.x);
        line.endY = Math.round(world.y);
        line.endSnapped = null;
      }

      this.snapCandidate = null;
      for (const ent of this.entities) {
        const cx = ent.x + (ent.width || 170) / 2;
        const cy = ent.y + (ent.height || 100) / 2;
        const dist = Math.hypot(world.x - cx, world.y - cy);
        if (dist < 100) {
          this.snapCandidate = { target: ent, type: 'entity', handle: this.draggingHandle.handle, line };
          break;
        }
      }
      if (!this.snapCandidate) {
        for (const rel of this.relationships) {
          const cx = rel.x + 45;
          const cy = rel.y + 45;
          const dist = Math.hypot(world.x - cx, world.y - cy);
          if (dist < 85) {
            this.snapCandidate = { target: rel, type: 'diamond', handle: this.draggingHandle.handle, line };
            break;
          }
        }
      }

      this.renderLinks();
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

    if (this.draggingHandle) {
      const line = this.draggingHandle.line;
      const handleName = this.draggingHandle.handle;
      if (this.snapCandidate && this.snapCandidate.line === line && this.snapCandidate.handle === handleName) {
        const node = this.snapCandidate.target;
        const type = this.snapCandidate.type;
        const isDia = type === 'diamond';
        if (handleName === 'start') {
          line.startSnapped = { node, type };
          const border = this.getNodeBorderPoint(node, line.endX, line.endY, isDia);
          line.startX = Math.round(border.x);
          line.startY = Math.round(border.y);
        } else {
          line.endSnapped = { node, type };
          const border = this.getNodeBorderPoint(node, line.startX, line.startY, isDia);
          line.endX = Math.round(border.x);
          line.endY = Math.round(border.y);
        }

        if (line.startSnapped && line.endSnapped) {
          const sNode = line.startSnapped.node;
          const sType = line.startSnapped.type;
          const eNode = line.endSnapped.node;
          const eType = line.endSnapped.type;
          if (sNode.domId !== eNode.domId) {
            this.completeConnection(sNode, sType, eNode, eType);
            this.showToast(`🧲 Ikkala uchi ulandi: ${sNode.name} va ${eNode.name} to'liq bog'landi!`);
            this.standaloneLines = this.standaloneLines.filter(l => l.id !== line.id);
          }
        } else {
          this.showToast(`🧲 Bitta uchi '${node.name}' ga ulandi! Ikkinchi uchini boshqa entitiyga ulang.`);
        }
        this.snapCandidate = null;
      }
      this.draggingHandle = null;
      this.renderLinks();
      return;
    }

    // Magnetic snap execution
    if (this.isDraggingNode && this.draggedNode && this.snapCandidate && this.snapCandidate.freeLine) {
      const fl = this.snapCandidate.freeLine;
      const targetNode = this.snapCandidate.node;
      this.completeConnection(fl.node, fl.type, targetNode, this.snapCandidate.type);
      this.freeLines = this.freeLines.filter(item => item !== fl);
      this.showToast(`🧲 Magnit: ${fl.node.name} va ${targetNode.name} muvaffaqiyatli bog'landi!`);
      this.snapCandidate = null;
      this.renderLinks();
    }

    if (this.isDraggingNode) {
      this.isDraggingNode = false;
      this.draggedNode = null;
    }

    if (this.isResizing) {
      this.isResizing = false;
      this.resizingNode = null;
    }

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
    const w = node.width || (node.isRelationship ? 90 : 170);
    const h = node.height || (node.isRelationship ? 90 : 100);

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
      tempLine.setAttribute('stroke', '#ffd166');
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
    if (sourceType === 'entity' && targetType === 'entity') {
      const existing = this.relationships.find(r => 
        (r.fromEntityName.toLowerCase() === sourceNode.name.toLowerCase() && r.toEntityName.toLowerCase() === targetNode.name.toLowerCase()) ||
        (r.fromEntityName.toLowerCase() === targetNode.name.toLowerCase() && r.toEntityName.toLowerCase() === sourceNode.name.toLowerCase())
      );
      if (existing) {
        this.showToast(`'${sourceNode.name}' va '${targetNode.name}' allaqachon bog'langan!`);
        return;
      }
      this.relationships.push({
        id: 'rel_' + Math.random().toString(36).substr(2, 9),
        name: 'Aloqa',
        fromEntityName: sourceNode.name,
        toEntityName: targetNode.name,
        mult1: '1..1',
        mult2: '1..*',
        isDirect: true
      });
      if (window.playSfx) window.playSfx('success');
      this.showToast(`'${sourceNode.name}' va '${targetNode.name}' to'g'ridan-to'g'ri bog'landi. Chiziq o'rtasidagi so'zni bosib aloqa nomini o'zgartirishingiz mumkin.`);
    } else if (sourceType === 'entity' && targetType === 'diamond') {
      const rel = targetNode;
      if (!rel.fromEntityName || rel.fromEntityName === sourceNode.name) {
        rel.fromEntityName = sourceNode.name;
      } else {
        rel.toEntityName = sourceNode.name;
      }
      if (window.playSfx) window.playSfx('success');
    } else if (sourceType === 'diamond' && targetType === 'entity') {
      const rel = sourceNode;
      if (!rel.fromEntityName) {
        rel.fromEntityName = targetNode.name;
      } else {
        rel.toEntityName = targetNode.name;
      }
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
        const isTargetEntity = targetBox.classList.contains('eer-entity-box');
        const targetType = isTargetEntity ? 'entity' : 'diamond';
        const targetNode = isTargetEntity
          ? this.entities.find(ent => ent.domId === targetBox.id)
          : this.relationships.find(rel => rel.domId === targetBox.id);

        if (targetNode) {
          this.completeConnection(this.connectSource.node, this.connectSource.type, targetNode, targetType);
          this.cancelConnecting();
          return;
        }
      } else {
        const world = this.screenToWorld(clientX, clientY);
        for (const ent of this.entities) {
          if (ent.domId === this.connectSource.node.domId) continue;
          const cx = ent.x + (ent.width || 170) / 2;
          const cy = ent.y + (ent.height || 100) / 2;
          if (Math.hypot(world.x - cx, world.y - cy) < 140) {
            this.completeConnection(this.connectSource.node, this.connectSource.type, ent, 'entity');
            this.showToast(`🧲 Magnit: ${this.connectSource.node.name} va ${ent.name} bog'landi!`);
            this.cancelConnecting();
            return;
          }
        }
      }

      if (this.connectMovedDist > 20) {
        const world = this.screenToWorld(clientX, clientY);
        this.freeLines.push({
          id: 'free_' + Math.random().toString(36).substr(2, 9),
          node: this.connectSource.node,
          type: this.connectSource.type,
          port: this.connectSource.port,
          mult: '1..1',
          endX: Math.round(world.x),
          endY: Math.round(world.y)
        });
        if (window.playSfx) window.playSfx('click');
        this.cancelConnecting();
        this.renderLinks();
        return;
      }
    }

    this.cancelConnecting();
  }

  // ==========================================================================
  // NODE SELECTION & DRAGGING
  // ==========================================================================
  onNodePointerDown(point, node, type) {
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
        { name: 'id', isPK: true, isPPK: false },
        { name: 'nomi', isPK: false, isPPK: false }
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
    el.className = `eer-entity-box ${entity.isWeak ? 'weak-entity' : ''}`;
    el.style.left = entity.x + 'px';
    el.style.top = entity.y + 'px';

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
      <div class="node-resize-handle" data-action="resize" title="O'lchamni o'zgartirish">⤡</div>
    `;

    this.renderEntityAttributes(entity, el.querySelector('.entity-attributes'));

    // Resize Handle
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

    // Drag events
    const onEntityStart = (e) => {
      if (e.target.closest('.port-arrow') || e.target.closest('button') || e.target.closest('.btn-attr-badge') || e.target.closest('.pk-pill') || e.target.closest('.ppk-pill') || e.target.closest('.attr-pill') || e.target.closest('.btn-attr-del') || e.target.closest('.btn-attr-edit') || e.target.closest('.node-resize-handle') || e.target.closest('[contenteditable="true"]')) return;
      if (e.touches && e.touches.length > 1) return;
      e.stopPropagation();
      if (e.cancelable && e.type === 'touchstart') e.preventDefault();
      const point = e.touches ? e.touches[0] : e;
      this.onNodePointerDown(point, entity, 'entity');
    };
    el.addEventListener('mousedown', onEntityStart);
    el.addEventListener('touchstart', onEntityStart, { passive: false });

    // Connection ports
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
        <span class="attr-name" contenteditable="true" spellcheck="false" title="Nomini o'zgartirish">${attr.name}</span>
        <div style="display:flex; align-items:center; gap:4px;">
          <button type="button" class="btn-attr-badge ${badgeClass}" title="Kalit turini o'zgartirish (PK/PPK/Oddiy)">${badgeLabel}</button>
          <button class="btn-attr-edit" title="Nomini o'zgartirish">✎</button>
          <button class="btn-attr-del" title="Atributni o'chirish">✕</button>
        </div>
      `;

      const nameEl = row.querySelector('.attr-name');
      const editBtn = row.querySelector('.btn-attr-edit');

      const triggerRename = (e) => {
        e?.stopPropagation();
        const newName = prompt("Atribut nomini kiriting:", attr.name);
        if (newName && newName.trim()) {
          attr.name = newName.trim();
          nameEl.textContent = attr.name;
          this.renderLinks();
        }
      };

      editBtn?.addEventListener('click', triggerRename);
      nameEl.addEventListener('click', triggerRename);
      nameEl.addEventListener('dblclick', triggerRename);

      nameEl.addEventListener('blur', () => {
        attr.name = nameEl.textContent.trim() || attr.name;
      });
      nameEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          nameEl.blur();
        }
      });

      // Toggle PK / PPK / none (Works on touch and click)
      const badgeBtn = row.querySelector('.btn-attr-badge');
      const toggleBadge = (e) => {
        e.stopPropagation();
        if (e.cancelable && e.type === 'touchstart') e.preventDefault();
        if (!attr.isPK && !attr.isPPK) {
          attr.isPK = true;
          attr.isPPK = false;
        } else if (attr.isPK) {
          attr.isPK = false;
          attr.isPPK = true;
        } else {
          attr.isPK = false;
          attr.isPK = false;
        }
        this.renderEntityAttributes(entity, containerEl);
        this.renderLinks();
        if (window.playSfx) window.playSfx('click');
      };

      badgeBtn?.addEventListener('click', toggleBadge);
      badgeBtn?.addEventListener('touchend', toggleBadge);

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
      <div class="diamond-text" title="Nomini o'zgartirish uchun bosing">${rel.name}</div>
      <button class="btn-node-act del" data-action="del-rel" style="position:absolute; top:-6px; right:-6px; width:16px; height:16px;" title="Aloqani o'chirish">✕</button>
    `;

    // Drag events
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

    // Port arrow events
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

    const triggerRelRename = (e) => {
      e.stopPropagation();
      const newName = prompt("Aloqa nomini o'zgartiring:", rel.name);
      if (newName) {
        rel.name = newName.trim();
        el.querySelector('.diamond-text').textContent = rel.name;
      }
    };
    el.querySelector('.diamond-text')?.addEventListener('click', triggerRelRename);

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
  getNodeBorderPoint(node, targetX, targetY, isDiamond = false) {
    if (!node) return { x: targetX, y: targetY, dirX: 1, dirY: 0 };
    const el = document.getElementById(node.domId);
    const w = (el && el.offsetWidth > 40) ? el.offsetWidth : (node.width || (isDiamond ? 90 : 200));
    const h = (el && el.offsetHeight > 30) ? el.offsetHeight : (node.height || (isDiamond ? 90 : 120));
    node.width = w;
    node.height = h;

    const cx = node.x + w / 2;
    const cy = node.y + h / 2;
    const dx = targetX - cx;
    const dy = targetY - cy;
    const dist = Math.hypot(dx, dy) || 1;
    const ux = dx / dist;
    const uy = dy / dist;

    if (isDiamond) {
      const scale = (w / 2) / (Math.abs(ux) + Math.abs(uy) || 1);
      return {
        x: cx + ux * scale,
        y: cy + uy * scale,
        dirX: ux,
        dirY: uy
      };
    }

    const scaleX = (w / 2) / Math.max(0.0001, Math.abs(ux));
    const scaleY = (h / 2) / Math.max(0.0001, Math.abs(uy));
    const scale = Math.min(scaleX, scaleY);

    return {
      x: cx + ux * scale,
      y: cy + uy * scale,
      dirX: ux,
      dirY: uy
    };
  }

  renderLinks() {
    this.svg.innerHTML = '';
    document.querySelectorAll('.mult-pill, .rel-line-badge').forEach(p => p.remove());

    this.relationships.forEach(rel => {
      const fromEnt = this.entities.find(e => e.name.toLowerCase() === (rel.fromEntityName || '').toLowerCase());
      const toEnt = this.entities.find(e => e.name.toLowerCase() === (rel.toEntityName || '').toLowerCase());

      const diamondEl = document.getElementById(rel.domId);
      const isDirectLine = rel.isDirect || !diamondEl;

      if (isDirectLine && fromEnt && toEnt) {
        // Direct Entity-to-Entity relationship line (No diamond)
        const fCenterX = fromEnt.x + (fromEnt.width || 200) / 2;
        const fCenterY = fromEnt.y + (fromEnt.height || 120) / 2;
        const tCenterX = toEnt.x + (toEnt.width || 200) / 2;
        const tCenterY = toEnt.y + (toEnt.height || 120) / 2;

        const borderF = this.getNodeBorderPoint(fromEnt, tCenterX, tCenterY, false);
        const borderT = this.getNodeBorderPoint(toEnt, fCenterX, fCenterY, false);

        const onDblClickRel = () => {
          if (confirm(`'${fromEnt.name}' va '${toEnt.name}' o'rtasidagi aloqa chizig'ini o'chirishni xohlaysizmi?`)) {
            this.relationships = this.relationships.filter(r => r !== rel);
            this.renderLinks();
            if (window.playSfx) window.playSfx('click');
          }
        };

        this.drawLine(borderF.x, borderF.y, borderT.x, borderT.y, onDblClickRel);

        // 1. Multiplicity for fromEnt (strictly outside entity box)
        const mx1 = borderF.x + borderF.dirX * 32;
        const my1 = borderF.y + borderF.dirY * 32;
        this.createMultiplicityPill(mx1, my1, rel, 'mult1', fromEnt.name);

        // 2. Multiplicity for toEnt (strictly outside entity box)
        const mx2 = borderT.x + borderT.dirX * 32;
        const my2 = borderT.y + borderT.dirY * 32;
        this.createMultiplicityPill(mx2, my2, rel, 'mult2', toEnt.name);

        // 3. Clickable relationship name badge right in the center of the line
        const midX = (borderF.x + borderT.x) / 2;
        const midY = (borderF.y + borderT.y) / 2;
        const namePill = document.createElement('div');
        namePill.className = 'rel-line-badge';
        namePill.textContent = rel.name || 'Aloqa';
        namePill.style.left = midX + 'px';
        namePill.style.top = midY + 'px';
        namePill.style.transform = 'translate(-50%, -50%)';
        namePill.title = "Aloqa nomini o'zgartirish uchun bosing";
        namePill.addEventListener('click', (e) => {
          e.stopPropagation();
          const val = prompt("Aloqa nomini kiriting:", rel.name || 'Aloqa');
          if (val && val.trim()) {
            rel.name = val.trim();
            this.renderLinks();
          }
        });
        this.nodesLayer.appendChild(namePill);
      } else {
        // Fallback for explicit diamond nodes placed on canvas
        const rCenterX = rel.x + 45;
        const rCenterY = rel.y + 45;

        if (fromEnt) {
          const fCenterX = fromEnt.x + (fromEnt.width || 200) / 2;
          const fCenterY = fromEnt.y + (fromEnt.height || 120) / 2;
          const borderF = this.getNodeBorderPoint(fromEnt, rCenterX, rCenterY, false);
          const borderR1 = this.getNodeBorderPoint(rel, fCenterX, fCenterY, true);

          const onDblClickFrom = () => {
            if (confirm(`'${fromEnt.name}' va '${rel.name}' o'rtasidagi bog'lanish chizig'ini o'chirishni xohlaysizmi?`)) {
              rel.fromEntityName = '';
              this.renderLinks();
              if (window.playSfx) window.playSfx('click');
            }
          };

          this.drawLine(borderF.x, borderF.y, borderR1.x, borderR1.y, onDblClickFrom);
          const mx1 = borderF.x + borderF.dirX * 32;
          const my1 = borderF.y + borderF.dirY * 32;
          this.createMultiplicityPill(mx1, my1, rel, 'mult1', fromEnt.name);
        }

        if (toEnt) {
          const tCenterX = toEnt.x + (toEnt.width || 200) / 2;
          const tCenterY = toEnt.y + (toEnt.height || 120) / 2;
          const borderT = this.getNodeBorderPoint(toEnt, rCenterX, rCenterY, false);
          const borderR2 = this.getNodeBorderPoint(rel, tCenterX, tCenterY, true);

          const onDblClickTo = () => {
            if (confirm(`'${rel.name}' va '${toEnt.name}' o'rtasidagi bog'lanish chizig'ini o'chirishni xohlaysizmi?`)) {
              rel.toEntityName = '';
              this.renderLinks();
              if (window.playSfx) window.playSfx('click');
            }
          };

          this.drawLine(borderR2.x, borderR2.y, borderT.x, borderT.y, onDblClickTo);
          const mx2 = borderT.x + borderT.dirX * 32;
          const my2 = borderT.y + borderT.dirY * 32;
          this.createMultiplicityPill(mx2, my2, rel, 'mult2', toEnt.name);
        }
      }
    });

    // Render Standalone 2-ended Magnetic Lines
    this.standaloneLines.forEach(line => {
      if (line.startSnapped && line.startSnapped.node) {
        const node = line.startSnapped.node;
        const isDia = line.startSnapped.type === 'diamond';
        const border = this.getNodeBorderPoint(node, line.endX, line.endY, isDia);
        line.startX = Math.round(border.x);
        line.startY = Math.round(border.y);
      }
      if (line.endSnapped && line.endSnapped.node) {
        const node = line.endSnapped.node;
        const isDia = line.endSnapped.type === 'diamond';
        const border = this.getNodeBorderPoint(node, line.startX, line.startY, isDia);
        line.endX = Math.round(border.x);
        line.endY = Math.round(border.y);
      }

      const onLineDblClick = () => {
        if (confirm("Ushbu magnit chiziqni o'chirishni xohlaysizmi?")) {
          this.standaloneLines = this.standaloneLines.filter(l => l.id !== line.id);
          this.renderLinks();
          if (window.playSfx) window.playSfx('click');
        }
      };

      this.drawLine(line.startX, line.startY, line.endX, line.endY, onLineDblClick, line.isDashed);

      // Midpoint multiplicity pill
      const midX = (line.startX + line.endX) / 2;
      const midY = (line.startY + line.endY) / 2;

      const midPill = document.createElement('div');
      midPill.className = 'mult-pill';
      midPill.textContent = `${line.mult1 || '1..1'} ↔ ${line.mult2 || '1..*'}`;
      midPill.style.position = 'absolute';
      midPill.style.left = midX + 'px';
      midPill.style.top = midY + 'px';
      midPill.style.transform = 'translate(-50%, -50%)';
      midPill.title = "Multiplicity o'zgartirish uchun bosing (Double-click: o'chirish)";
      midPill.addEventListener('click', (e) => {
        e.stopPropagation();
        this.openMultiplicitySelector(line, 'mult1', e);
      });
      midPill.addEventListener('dblclick', (e) => {
        e.stopPropagation();
        onLineDblClick();
      });
      this.nodesLayer.appendChild(midPill);

      // Render Magnetic Handles at both ends
      this.renderMagneticHandle(line, 'start', line.startX, line.startY, onLineDblClick);
      this.renderMagneticHandle(line, 'end', line.endX, line.endY, onLineDblClick);
    });

    // Render Free-Standing Connection Lines
    this.freeLines = this.freeLines.filter(fl => {
      return this.entities.some(e => e.domId === fl.node.domId) || this.relationships.some(r => r.domId === fl.node.domId);
    });

    this.freeLines.forEach((fl, idx) => {
      const start = this.getPortCoords(fl.node, fl.port);
      const onFreeDblClick = () => {
        this.freeLines.splice(idx, 1);
        this.renderLinks();
      };
      this.drawLine(start.x, start.y, fl.endX, fl.endY, onFreeDblClick);

      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', fl.endX);
      circle.setAttribute('cy', fl.endY);
      circle.setAttribute('r', '8');
      circle.setAttribute('fill', '#ffd166');
      circle.setAttribute('stroke', '#1e1916');
      circle.setAttribute('stroke-width', '2');
      circle.style.cursor = 'grab';
      circle.style.pointerEvents = 'auto';

      if (this.snapCandidate && this.snapCandidate.freeLine === fl) {
        circle.classList.add('snap-highlight');
      }

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
        onFreeDblClick();
      });

      this.svg.appendChild(circle);
    });
  }

  renderMagneticHandle(line, handleName, x, y, onDblClick) {
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', x);
    circle.setAttribute('cy', y);
    circle.setAttribute('r', '9');
    circle.setAttribute('fill', '#ffd166');
    circle.setAttribute('stroke', '#1e1916');
    circle.setAttribute('stroke-width', '2');
    circle.style.cursor = 'grab';
    circle.style.pointerEvents = 'auto';

    if (this.snapCandidate && this.snapCandidate.line === line && this.snapCandidate.handle === handleName) {
      circle.setAttribute('stroke', '#06d6a0');
      circle.setAttribute('stroke-width', '3.5');
      circle.setAttribute('r', '11');
    }

    const startDragHandle = (e) => {
      e.stopPropagation();
      if (e.cancelable) e.preventDefault();
      this.draggingHandle = { line, handle: handleName };
    };

    circle.addEventListener('mousedown', startDragHandle);
    circle.addEventListener('touchstart', startDragHandle, { passive: false });

    if (onDblClick) {
      circle.addEventListener('dblclick', (e) => {
        e.stopPropagation();
        onDblClick();
      });
      let lastTap = 0;
      circle.addEventListener('touchend', (e) => {
        const now = new Date().getTime();
        if (now - lastTap < 350 && now - lastTap > 0) {
          e.stopPropagation();
          onDblClick();
        }
        lastTap = now;
      }, { passive: false });
    }

    this.svg.appendChild(circle);
  }

  drawLine(x1, y1, x2, y2, onDblClick = null, isDashed = false) {
    const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');

    // Invisible thick hitbox for touch & mouse
    const hitbox = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    hitbox.setAttribute('x1', x1);
    hitbox.setAttribute('y1', y1);
    hitbox.setAttribute('x2', x2);
    hitbox.setAttribute('y2', y2);
    hitbox.setAttribute('stroke', 'transparent');
    hitbox.setAttribute('stroke-width', '24');
    hitbox.style.cursor = 'pointer';
    hitbox.style.pointerEvents = 'stroke';

    // Visible line
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', x1);
    line.setAttribute('y1', y1);
    line.setAttribute('x2', x2);
    line.setAttribute('y2', y2);
    line.setAttribute('stroke', '#c8a96e');
    line.setAttribute('stroke-width', '2.5');
    line.setAttribute('stroke-linecap', 'round');
    if (isDashed) {
      line.setAttribute('stroke-dasharray', '6,4');
    }
    line.style.cursor = 'pointer';
    line.style.pointerEvents = 'stroke';

    if (onDblClick) {
      hitbox.addEventListener('dblclick', (e) => {
        e.stopPropagation();
        onDblClick(e);
      });
      line.addEventListener('dblclick', (e) => {
        e.stopPropagation();
        onDblClick(e);
      });

      let lastTap = 0;
      const handleTap = (e) => {
        const curTime = new Date().getTime();
        const tapInterval = curTime - lastTap;
        if (tapInterval < 350 && tapInterval > 0) {
          e.stopPropagation();
          if (e.cancelable) e.preventDefault();
          onDblClick(e);
        }
        lastTap = curTime;
      };
      hitbox.addEventListener('touchend', handleTap, { passive: false });
      line.addEventListener('touchend', handleTap, { passive: false });
    }

    group.appendChild(hitbox);
    group.appendChild(line);
    this.svg.appendChild(group);
    return group;
  }

  createMultiplicityPill(x, y, rel, multKey, entityName) {
    const pill = document.createElement('div');
    pill.className = 'mult-pill';
    pill.textContent = (rel[multKey] && rel[multKey] !== '?') ? rel[multKey] : '?';
    pill.style.position = 'absolute';
    pill.style.left = x + 'px';
    pill.style.top = y + 'px';
    pill.style.transform = 'translate(-50%, -50%)';
    pill.title = `${entityName} tomonidagi multiplisitiyani o'zgartirish uchun bosing (Hozir: ${rel[multKey] || '?'})`;

    pill.addEventListener('click', (e) => {
      e.stopPropagation();
      this.openMultiplicitySelector(rel, multKey, e);
    });

    this.nodesLayer.appendChild(pill);
  }

  openMultiplicitySelector(rel, multKey, e) {
    let popover = document.getElementById('eerMultiplicityPopover');
    if (!popover) {
      popover = document.createElement('div');
      popover.id = 'eerMultiplicityPopover';
      popover.className = 'multiplicity-picker-popover';
      document.body.appendChild(popover);
    }

    const current = rel[multKey] || '1..1';
    popover.innerHTML = `
      <div class="mult-pop-header">
        <span class="mult-pop-title">Multiplicity Tanlash</span>
        <button class="mult-pop-close" id="btnCloseEerMultPop">✕</button>
      </div>
      <div class="mult-pop-body">
        <div class="mult-options-grid">
          <button class="btn-mult-opt ${current === '1..1' ? 'active' : ''}" data-val="1..1"><span>1..1</span> Majburiy bitta</button>
          <button class="btn-mult-opt ${current === '0..1' ? 'active' : ''}" data-val="0..1"><span>0..1</span> Ixtiyoriy bitta</button>
          <button class="btn-mult-opt ${current === '1..*' ? 'active' : ''}" data-val="1..*"><span>1..*</span> Kamida bitta</button>
          <button class="btn-mult-opt ${current === '0..*' ? 'active' : ''}" data-val="0..*"><span>0..*</span> Ixtiyoriy ko'p</button>
        </div>
      </div>
    `;

    const target = e?.currentTarget || e?.target;
    const rect = target?.getBoundingClientRect ? target.getBoundingClientRect() : null;

    let posX = window.innerWidth / 2 - 140;
    let posY = window.innerHeight / 2 - 60;

    if (rect) {
      posX = rect.left + rect.width / 2 - 140;
      posY = rect.bottom + 8;
      if (posY + 160 > window.innerHeight) {
        posY = rect.top - 160;
      }
    } else if (e?.clientX !== undefined) {
      posX = e.clientX - 140;
      posY = e.clientY + 10;
    }

    posX = Math.max(10, Math.min(window.innerWidth - 290, posX));
    posY = Math.max(10, Math.min(window.innerHeight - 170, posY));

    popover.style.position = 'fixed';
    popover.style.left = posX + 'px';
    popover.style.top = posY + 'px';
    popover.style.zIndex = '99999';
    popover.style.display = 'flex';

    popover.querySelector('#btnCloseEerMultPop')?.addEventListener('click', () => {
      popover.style.display = 'none';
    });

    popover.querySelectorAll('.btn-mult-opt').forEach(btn => {
      btn.addEventListener('click', () => {
        rel[multKey] = btn.getAttribute('data-val');
        popover.style.display = 'none';
        this.renderLinks();
        if (window.playSfx) window.playSfx('click');
      });
    });

    const closeOnOutside = (evt) => {
      if (!popover.contains(evt.target) && !evt.target.closest('.mult-pill')) {
        popover.style.display = 'none';
        window.removeEventListener('click', closeOnOutside);
      }
    };
    setTimeout(() => {
      window.addEventListener('click', closeOnOutside);
    }, 50);
  }

  // ==========================================================================
  // DRAW.IO SHAPES SIDEBAR & PALETTE
  // ==========================================================================
  initSidebar() {
    const sidebar = document.getElementById('drawioSidebar');
    const toggleBtn = document.getElementById('btnToggleSidebar');
    const toolbarBtn = document.getElementById('btnToggleShapesSidebar');
    const unfoldBtn = document.getElementById('btnUnfoldSidebar');
    const searchInput = document.getElementById('shapeSearchInput');

    const toggle = () => {
      sidebar?.classList.toggle('collapsed');
      const isCollapsed = sidebar?.classList.contains('collapsed');
      if (unfoldBtn) unfoldBtn.style.display = isCollapsed ? 'flex' : 'none';
    };

    toggleBtn?.addEventListener('click', toggle);
    toolbarBtn?.addEventListener('click', toggle);
    unfoldBtn?.addEventListener('click', () => {
      sidebar?.classList.remove('collapsed');
      if (unfoldBtn) unfoldBtn.style.display = 'none';
    });

    searchInput?.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      document.querySelectorAll('#shapeGridER .shape-card').forEach(card => {
        const text = (card.textContent + ' ' + (card.getAttribute('title') || '')).toLowerCase();
        card.style.display = !q || text.includes(q) ? 'flex' : 'none';
      });
    });

    document.querySelectorAll('#shapeGridER .shape-card').forEach(card => {
      card.addEventListener('click', () => {
        const shapeType = card.getAttribute('data-shape');
        this.addShapeFromPalette(shapeType);
      });
    });

    document.getElementById('btnMoreShapes')?.addEventListener('click', () => {
      this.showToast("Barcha rasmiy Draw.io relyatsion va EER shakllari yuklangan!");
    });
  }

  addShapeFromPalette(type) {
    const centerX = Math.round(-this.panX / this.zoom + (this.container.offsetWidth / 2) / this.zoom - 85);
    const centerY = Math.round(-this.panY / this.zoom + (this.container.offsetHeight / 2) / this.zoom - 50);

    if (type === 'entity' || type === 'entity-plain') {
      this.addEntity({ name: 'Entitiy', x: centerX, y: centerY, attributes: [{ name: 'id', isPK: true }, { name: 'nomi', isPK: false }] });
    } else if (type === 'table' || type === 'table-key') {
      this.addEntity({ name: 'Jadval', x: centerX, y: centerY, attributes: [{ name: 'id', isPK: true }, { name: 'ustun1', isPK: false }, { name: 'ustun2', isPK: false }] });
    } else if (type === 'table-2col') {
      this.addEntity({ name: 'Jadval_2Ustun', x: centerX, y: centerY, attributes: [{ name: 'pk_id', isPK: true }, { name: 'qiymat', isPK: false }] });
    } else if (type === 'table-rounded') {
      this.addEntity({ name: 'YumaloqJadval', x: centerX, y: centerY, attributes: [{ name: 'id', isPK: true }, { name: 'nomi', isPK: false }] });
    } else if (type === 'item-box') {
      this.addEntity({ name: 'Element', x: centerX, y: centerY, attributes: [{ name: 'qiymat', isPK: false }] });
    } else if (type === 'entity-rounded') {
      this.addEntity({ name: 'YumaloqEntitiy', x: centerX, y: centerY, attributes: [{ name: 'id', isPK: true }, { name: 'tavsif', isPK: false }] });
    } else if (type === 'weak-entity') {
      this.addEntity({ name: 'ZaifEntitiy', isWeak: true, x: centerX, y: centerY, attributes: [{ name: 'qisman_id', isPPK: true }, { name: 'tavsif', isPK: false }] });
    } else if (type === 'assoc-entity') {
      this.addEntity({ name: 'AssotsiativEntitiy', x: centerX, y: centerY, attributes: [{ name: 'ota1_id', isPK: true }, { name: 'ota2_id', isPK: true }, { name: 'sana', isPK: false }] });
    } else if (type === 'rel-diamond') {
      this.addRelationship({ name: 'Aloqa', x: centerX, y: centerY });
    } else if (type === 'rel-identifying') {
      this.addRelationship({ name: 'Aniqlash', isIdentifying: true, x: centerX, y: centerY });
    } else if (type === 'domain-cloud') {
      this.addEntity({ name: 'Tashqi Domen (Cloud)', x: centerX, y: centerY, attributes: [{ name: 'api_boglam', isPK: false }] });
    } else if (type === 'partition-box') {
      this.addEntity({ name: 'Qism / Modul', x: centerX, y: centerY, attributes: [{ name: 'bolim_a', isPK: false }, { name: 'bolim_b', isPK: false }] });
    } else if (type === 'isa-circle') {
      this.addEntity({ name: 'Subklass (d)', x: centerX, y: centerY, attributes: [{ name: 'id', isPK: true }, { name: 'xususiyat', isPK: false }] });
    } else if (type === 'attr-plain') {
      if (this.selectedNode && this.selectedType === 'entity') {
        this.selectedNode.attributes.push({ name: 'yangi_atribut', isPK: false });
        this.renderEntityAttributes(this.selectedNode, document.getElementById(this.selectedNode.domId + '_attrs'));
      } else {
        this.addEntity({ name: 'AtributGuruhi', x: centerX, y: centerY, attributes: [{ name: 'atribut_nomi', isPK: false }] });
      }
    } else if (type === 'attr-pk') {
      if (this.selectedNode && this.selectedType === 'entity') {
        this.selectedNode.attributes.push({ name: 'pk_id', isPK: true });
        this.renderEntityAttributes(this.selectedNode, document.getElementById(this.selectedNode.domId + '_attrs'));
      } else {
        this.addEntity({ name: 'KalitGuruhi', x: centerX, y: centerY, attributes: [{ name: 'pk_id', isPK: true }] });
      }
    } else if (type === 'attr-multi') {
      if (this.selectedNode && this.selectedType === 'entity') {
        this.selectedNode.attributes.push({ name: 'kop_qiymat', isPK: false });
        this.renderEntityAttributes(this.selectedNode, document.getElementById(this.selectedNode.domId + '_attrs'));
      } else {
        this.addEntity({ name: 'KopQiymatli', x: centerX, y: centerY, attributes: [{ name: 'telefonlar', isPK: false }] });
      }
    } else if (type === 'attr-derived') {
      if (this.selectedNode && this.selectedType === 'entity') {
        this.selectedNode.attributes.push({ name: 'hosilaviy_yosh', isPK: false });
        this.renderEntityAttributes(this.selectedNode, document.getElementById(this.selectedNode.domId + '_attrs'));
      } else {
        this.addEntity({ name: 'HosilaviyGuruh', x: centerX, y: centerY, attributes: [{ name: 'yosh', isPK: false }] });
      }
    } else if (type === 'attr-partial') {
      if (this.selectedNode && this.selectedType === 'entity') {
        this.selectedNode.attributes.push({ name: 'qisman_kalit', isPPK: true });
        this.renderEntityAttributes(this.selectedNode, document.getElementById(this.selectedNode.domId + '_attrs'));
      } else {
        this.addEntity({ name: 'QismanGuruh', x: centerX, y: centerY, attributes: [{ name: 'qisman_kalit', isPPK: true }] });
      }
    } else if (type === 'attr-composite') {
      if (this.selectedNode && this.selectedType === 'entity') {
        this.selectedNode.attributes.push({ name: 'manzil_shahar', isPK: false });
        this.selectedNode.attributes.push({ name: 'manzil_kocha', isPK: false });
        this.renderEntityAttributes(this.selectedNode, document.getElementById(this.selectedNode.domId + '_attrs'));
      } else {
        this.addEntity({ name: 'KompozitManzil', x: centerX, y: centerY, attributes: [{ name: 'shahar', isPK: false }, { name: 'kocha', isPK: false }] });
      }
    } else if (type === 'note-box') {
      this.addEntity({ name: '📝 Eslatma', x: centerX, y: centerY, attributes: [{ name: 'izoh_matni', isPK: false }] });
    } else if (type.startsWith('conn-')) {
      const mult1 = type === 'conn-11' ? '1..1' : type === 'conn-01' ? '0..1' : type === 'conn-1n' ? '1..*' : type === 'conn-0n' ? '0..*' : '1..1';
      const mult2 = type === 'conn-11' ? '1..1' : '1..*';
      const isDashed = type === 'conn-dashed';
      const isZigzag = type === 'conn-zigzag';

      this.standaloneLines.push({
        id: 'sline_' + Math.random().toString(36).substr(2, 9),
        startX: Math.round(centerX - 90),
        startY: Math.round(centerY),
        endX: Math.round(centerX + 90),
        endY: Math.round(centerY),
        mult1: mult1,
        mult2: mult2,
        isDashed: isDashed,
        isZigzag: isZigzag,
        startSnapped: null,
        endSnapped: null
      });
      this.renderLinks();
      this.showToast(`2 ta magnit uchli chiziq tushirildi (${mult1}). Har ikkala chetini kerakli entitiyga ulab oling!`);
    }
    if (window.playSfx) window.playSfx('click');
  }

  showToast(msg) {
    let toast = document.getElementById('toastNotice');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toastNotice';
      toast.className = 'toast-notice';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.style.display = 'block';
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => { toast.style.display = 'none'; }, 300);
    }, 2500);
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

    const relList = diagram.relationships || [];
    relList.forEach(r => {
      const fromName = r.fromEntityName || r.entity1 || '';
      const toName = r.toEntityName || r.entity2 || '';
      this.relationships.push({
        id: 'rel_' + Math.random().toString(36).substr(2, 9),
        name: r.name || 'Aloqa',
        fromEntityName: fromName,
        toEntityName: toName,
        mult1: r.mult1 || '?',
        mult2: r.mult2 || '?',
        isIdentifying: !!r.isIdentifying,
        isDirect: true
      });
    });

    if (diagram.subclasses) {
      this.subclasses = JSON.parse(JSON.stringify(diagram.subclasses));
    }

    this.renderLinks();

    // Auto-fit to viewport on mobile screens so bottom of diagram is never cut off
    if (this.container && this.entities.length > 0) {
      setTimeout(() => {
        const containerW = this.container.clientWidth || 360;
        const containerH = this.container.clientHeight || 440;
        if (containerW < 768) {
          let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
          this.entities.forEach(e => {
            minX = Math.min(minX, e.x);
            minY = Math.min(minY, e.y);
            maxX = Math.max(maxX, e.x + (e.width || 200));
            maxY = Math.max(maxY, e.y + (e.height || 120));
          });
          const contentW = Math.max(200, maxX - minX + 50);
          const contentH = Math.max(160, maxY - minY + 50);
          const sX = containerW / contentW;
          const sY = containerH / contentH;
          this.zoom = Math.min(1.0, Math.max(0.55, Math.min(sX, sY)));
          const midWorldX = (minX + maxX) / 2;
          const midWorldY = (minY + maxY) / 2;
          this.panX = Math.round(containerW / 2 - midWorldX * this.zoom);
          this.panY = Math.round(containerH / 2 - midWorldY * this.zoom);
          this.updateViewportTransform();
        }
      }, 50);
    }
  }

  clearCanvas() {
    this.entities = [];
    this.relationships = [];
    this.subclasses = [];
    this.freeLines = [];
    this.standaloneLines = [];
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
